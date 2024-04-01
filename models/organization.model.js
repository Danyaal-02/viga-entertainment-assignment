import { Schema, model } from 'mongoose';

const organizationSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

const Organization = model('Organization', organizationSchema);

export default Organization;
