import {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
} from './products.controller';
import { Router } from 'express';
const router = Router();

// Endpoint GET /prueba
router.get('/', getProducts);
router.get('/:id', getProduct); // Read unidad

// Endpoint POST /prueba
router.post('/', createProduct); // create

// Endpoint PATCH /prueba
router.put('/', updateProduct); // update

// Endpoint DELETE /prueba
router.delete('/:id', deleteProduct); // delete

export default router;
