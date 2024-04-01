import { Schema, model } from 'mongoose';
import Organization from './organization.model.js';
import Item from './item.model.js';

const pricingSchema = new Schema({
    zone: {
        type: String,
        required: true
    },
    base_distance_in_km: {
        type: Number,
        required: true,
        default: 5
    },
    km_price: {
        type: Number,
        required: true,
        validate: {
            validator: function(value) {
                return value === 1 || value === 1.5;
            },
            message: 'Price must be either 1 or 1.5'
        }
    },
    fix_price: {
        type: Number,
        required: true,
        default: 10
    },
    organization_id: {
        type: Schema.Types.ObjectId,
        ref: 'Organization',
        required: true
    },
    item_id: {
        type: Schema.Types.ObjectId,
        ref: 'Item',
        required: true
    }
});

const Pricing = model('Pricing', pricingSchema);

export default Pricing;
