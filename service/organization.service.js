import OrganizationModel from '../models/organization.model.js';

export const createOrganization = async (name) => {
  try {
    const organization = await OrganizationModel.create({ name });
    return organization;
  } catch (error) {
    throw new Error('Error creating organization: ' + error.message);
  }
};

export const getAllOrganizations = async () => {
  try {
    const organizations = await OrganizationModel.find();
    return organizations;
  } catch (error) {
    throw new Error('Error fetching organizations: ' + error.message);
  }
};

export const getOrganizationById = async (id) => {
  try {
    const organization = await OrganizationModel.findById(id);
    if (!organization) {
      throw new Error('Organization not found');
    }
    return organization;
  } catch (error) {
    throw new Error('Error fetching organization by ID: ' + error.message);
  }
};

export const updateOrganization = async (id, newName) => {
  try {
    const organization = await OrganizationModel.findById(id);
    if (!organization) {
      throw new Error('Organization not found');
    }
    organization.name = newName;
    await organization.save();
    return organization;
  } catch (error) {
    throw new Error('Error updating organization: ' + error.message);
  }
};

export const deleteOrganization = async (id) => {
  try {
    const organization = await OrganizationModel.findByIdAndDelete(id);
    if (!organization) {
      throw new Error('Organization not found');
    }
  } catch (error) {
    throw new Error('Error deleting organization: ' + error.message);
  }
};
