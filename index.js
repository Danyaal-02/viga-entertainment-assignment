import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { swaggerServe, swaggerSetup } from "./config/swagger.config.js";
import dotenv from 'dotenv';
import organizationRouter from './routes/organization.route.js';
import itemRouter from './routes/item.route.js';
import pricingRouter from './routes/pricing.route.js';

dotenv.config();

const app = express();

// MongoDB connection setup
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('MongoDB connected successfully.');
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/", swaggerServe, swaggerSetup);
app.use('/organization', organizationRouter);
app.use('/item', itemRouter);
app.use('/pricing', pricingRouter);

// Start server
const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

export default app;
