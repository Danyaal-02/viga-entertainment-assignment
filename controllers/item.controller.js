import Item from '../models/item.model.js';

// Create Item
export const createItem = async (req, res) => {
  try {
    const itemData = req.body;
    const newItem = await Item.create(itemData);
    return res.json(newItem);
  } catch (error) {
    console.error('Error creating item:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Get All Items
export const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    return res.json(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Get Item by ID
export const getItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findById(id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    return res.json(item);
  } catch (error) {
    console.error('Error fetching item by ID:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Update Item
export const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const itemData = req.body;

    const updatedItem = await Item.findByIdAndUpdate(id, itemData, { new: true });
    return res.json(updatedItem);
  } catch (error) {
    console.error('Error updating item:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete Item
export const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    await Item.findByIdAndDelete(id);
    return res.status(204).end();
  } catch (error) {
    console.error('Error deleting item:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
