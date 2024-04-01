import { Schema, model } from 'mongoose';

const itemSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Item = model('Item', itemSchema);

export default Item;
