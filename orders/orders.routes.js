import {
  createOrder,
  getOrders,
  getOrder,
  disableProducts,
  updateOrder,
} from './orders.controller';
import { Router } from 'express';
const router = Router();

// Endpoint GET /prueba ??? req.qyuery req.params
router.get('/', getOrders);
router.get('/:id', getOrder);

// Endpoint POST /prueba
router.post('/', createOrder);

// Endpoint PATCH /prueba
router.put('/', updateOrder);

// Endpoint DELETE /prueba
router.delete('/:id', disableProducts);

export default router;
