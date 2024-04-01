import express from 'express';
import { createPricing, getAllPricings, getPricingById, updatePricing, deletePricing, calculatePrice } from '../controllers/pricing.controller.js';

const router = express.Router();

router.route('/')
    .post(createPricing)
    .get(getAllPricings);

router.route('/calculatePrice')
    .post(calculatePrice);

router.route('/:id')
    .get(getPricingById)
    .put(updatePricing)
    .delete(deletePricing);

export default router;
