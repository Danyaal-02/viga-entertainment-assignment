import Pricing from '../models/pricing.model.js';
import itemService from '../service/item.service.js';

// Create Pricing
export const createPricing = async (pricingData) => {
  try {
    const pricing = await Pricing.create(pricingData);
    return pricing;
  } catch (error) {
    throw new Error('Error creating pricing: ' + error.message);
  }
};

// Get All Pricings
export const getAllPricings = async () => {
  try {
    const pricings = await Pricing.find();
    return pricings;
  } catch (error) {
    throw new Error('Error fetching pricings: ' + error.message);
  }
};

// Get Pricing by ID
export const getPricingById = async (pricingId) => {
  try {
    const pricing = await Pricing.findById(pricingId);
    if (!pricing) {
      throw new Error('Pricing not found');
    }
    return pricing;
  } catch (error) {
    throw new Error('Error fetching pricing by ID: ' + error.message);
  }
};

// Find Pricing by Condition
export const findPricingByCondition = async (condition) => {
  try {
    const pricing = await Pricing.findOne(condition);
    if (!pricing) {
      throw new Error('Pricing not found');
    }
    return pricing;
  } catch (error) {
    throw new Error('Error fetching pricing by condition');
  }
};

// Update Pricing
export const updatePricing = async (pricingId, pricingData) => {
  try {
    const pricing = await Pricing.findByIdAndUpdate(pricingId, pricingData, { new: true });
    if (!pricing) {
      throw new Error('Pricing not found');
    }
    return pricing;
  } catch (error) {
    throw new Error('Error updating pricing: ' + error.message);
  }
};

// Delete Pricing
export const deletePricing = async (pricingId) => {
  try {
    const pricing = await Pricing.findByIdAndDelete(pricingId);
    if (!pricing) {
      throw new Error('Pricing not found');
    }
  } catch (error) {
    throw new Error('Error deleting pricing: ' + error.message);
  }
};

// Calculate Price
export const calculatePrice = async (req) => {
  try {
    const { organization_id, zone, total_distance} = req.body;
    
    // Retrieve item information from the database based on item type
    // const item = await itemService.findItemByCondition({ type: item_type });
    
    // Retrieve pricing information from the database
    const pricing = await findPricingByCondition({ organization_id, zone});

    if (!pricing) {
      throw new Error('Pricing information not found');
    }

    // Calculate total price
    let totalPrice = pricing.fix_price; // Base price

    if (total_distance > pricing.base_distance_in_km) {
      const additionalDistance = total_distance - pricing.base_distance_in_km;
      totalPrice += additionalDistance * pricing.km_price;
    }

    return totalPrice;

  } catch (error) {
    console.error('Error calculating price:', error);
    throw new Error('Error calculating price: ' + error.message);
  }
};


export default {
  createPricing,
  getAllPricings,
  getPricingById,
  updatePricing,
  deletePricing,
  findPricingByCondition,
  calculatePrice
};
