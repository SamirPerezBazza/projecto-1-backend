import mongoose from 'mongoose';
import { Types } from 'mongoose';

const productSchema = mongoose.Schema(
  {
    // campos
    name: { type: String, required: [true, 'Nombra tu product'] },
    description: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    restaurantId: {
      type: Types.ObjectId,
      ref: 'restaurant',
    },
  },
  { timestamps: true }
);

export default mongoose.model('product', productSchema);
