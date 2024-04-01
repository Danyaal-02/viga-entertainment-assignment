import ItemModel from '../models/item.model.js';

const createItem = async (itemData) => {
  try {
    const item = await ItemModel.create(itemData);
    return item;
  } catch (error) {
    throw new Error('Error creating item: ' + error.message);
  }
};

const getAllItems = async () => {
  try {
    const items = await ItemModel.find();
    return items;
  } catch (error) {
    throw new Error('Error fetching items: ' + error.message);
  }
};

const getItemById = async (itemId) => {
  try {
    const item = await ItemModel.findById(itemId);
    if (!item) {
      throw new Error('Item not found');
    }
    return item;
  } catch (error) {
    throw new Error('Error fetching item by ID: ' + error.message);
  }
};

const findItemByCondition = async (condition) => {
  try {
    const item = await ItemModel.findOne(condition);
    if (!item) {
      throw new Error('Item not found');
    }
    return item;
  } catch (error) {
    throw new Error('Error fetching item by condition: ' + error.message);
  }
};

const updateItem = async (itemId, itemData) => {
  try {
    const item = await ItemModel.findByIdAndUpdate(itemId, itemData, { new: true });
    if (!item) {
      throw new Error('Item not found');
    }
    return item;
  } catch (error) {
    throw new Error('Error updating item: ' + error.message);
  }
};

const deleteItem = async (itemId) => {
  try {
    const item = await ItemModel.findByIdAndDelete(itemId);
    if (!item) {
      throw new Error('Item not found');
    }
  } catch (error) {
    throw new Error('Error deleting item: ' + error.message);
  }
};

const itemService = {
  createItem,
  getAllItems,
  getItemById,
  findItemByCondition,
  updateItem,
  deleteItem
};

export default itemService;
