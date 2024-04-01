import express from 'express';
import { createOrganization, getAllOrganizations, getOrganizationById, updateOrganization, deleteOrganization } from '../controllers/organization.controller.js';

const organizationRouter = express.Router();

organizationRouter.route('/')
    .post(createOrganization)
    .get(getAllOrganizations);

organizationRouter.route('/:id')
    .get(getOrganizationById)
    .put(updateOrganization)
    .delete(deleteOrganization);

export default organizationRouter;
