const mongoose = require('mongoose');
// const extendSchema = require('mongoose-extend-schema');
import { Types } from 'mongoose';
import ProductSchema from '../products/products.model.js';

const STATUS_CODES = [0, 1, 2, 3, 4, 5];

const productOrderSchema = mongoose.Schema({
  ...ProductSchema.obj,
  enabled: { type: Boolean, default: true },
  quantity: { type: Number, required: true },
});

const orderSchema = mongoose.Schema(
  {
    client: {
      type: Types.ObjectId,
      ref: 'user',
      required: true,
      immutable: true,
    },
    dasher: {
      type: String,
    },
    restaurant: {
      type: Types.ObjectId,
      ref: 'restaurant',
      required: true,
      immutable: true,
    },
    products: {
      type: [productOrderSchema],
      //type: [extendSchema(ProductSchema, { enabled: { type: Boolean, default: true } })],
      required: true,
      immutable: (doc) => doc.status >= 3,
    },
    status: {
      type: Number,
      default: 0,
      enum: STATUS_CODES,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('order', orderSchema);
