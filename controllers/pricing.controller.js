import Pricing from '../models/pricing.model.js';
import pricingService from '../service/pricing.service.js';

// Create Pricing
export const createPricing = async (req, res) => {
  try {
    const pricingData = req.body;
    const newPricing = await Pricing.create(pricingData);
    return res.json(newPricing);
  } catch (error) {
    console.error('Error creating pricing:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Get All Pricings
export const getAllPricings = async (req, res) => {
  try {
    const pricings = await Pricing.find();
    return res.json(pricings);
  } catch (error) {
    console.error('Error fetching pricings:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Get Pricing by ID
export const getPricingById = async (req, res) => {
  try {
    const { id } = req.params;
    const pricing = await Pricing.findById(id);
    if (!pricing) {
      return res.status(404).json({ error: 'Pricing not found' });
    }
    return res.json(pricing);
  } catch (error) {
    console.error('Error fetching pricing by ID:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Update Pricing
export const updatePricing = async (req, res) => {
  try {
    const { id } = req.params;
    const pricingData = req.body;

    const updatedPricing = await Pricing.findByIdAndUpdate(id, pricingData, { new: true });
    return res.json(updatedPricing);
  } catch (error) {
    console.error('Error updating pricing:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete Pricing
export const deletePricing = async (req, res) => {
  try {
    const { id } = req.params;
    await Pricing.findByIdAndDelete(id);
    return res.status(204).end();
  } catch (error) {
    console.error('Error deleting pricing:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Calculate Price
export const calculatePrice = async (req, res) => {
  try {
    const totalCalculatedPrice = await pricingService.calculatePrice(req);
    return res.json({ total_price: totalCalculatedPrice });
  } catch (error) {
    console.error('Error calculating price:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
