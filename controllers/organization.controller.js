import Organization from '../models/organization.model.js';

// Create Organization
export const createOrganization = async (req, res) => {
  try {
    const { name } = req.body;
    const organization = await Organization.create({ name });
    return res.json(organization);
  } catch (error) {
    console.error('Error creating organization:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Get All Organizations
export const getAllOrganizations = async (req, res) => {
  try {
    const organizations = await Organization.find();
    return res.json(organizations);
  } catch (error) {
    console.error('Error fetching organizations:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Get Organization by ID
export const getOrganizationById = async (req, res) => {
  try {
    const { id } = req.params;
    const organization = await Organization.findById(id);
    if (!organization) {
      return res.status(404).json({ error: 'Organization not found' });
    }
    return res.json(organization);
  } catch (error) {
    console.error('Error fetching organization by ID:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Update Organization
export const updateOrganization = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const organization = await Organization.findByIdAndUpdate(id, { name }, { new: true });
    return res.json(organization);
  } catch (error) {
    console.error('Error updating organization:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete Organization
export const deleteOrganization = async (req, res) => {
  try {
    const { id } = req.params;
    await Organization.findByIdAndDelete(id);
    return res.status(204).json({ message: 'Organization deleted successfully' }).end();
  } catch (error) {
    console.error('Error deleting organization:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
