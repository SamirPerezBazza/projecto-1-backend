import {
  createRestaurant,
  getRestaurants,
  getRestaurant,
  deleteRestaurant,
  updateRestaurant,
} from './restaurant.controller';
import { Router } from 'express';
const router = Router();

// Endpoint GET /prueba
router.get('/:id', getRestaurant);
router.get('/', getRestaurants);

// Endpoint POST /prueba
router.post('/', createRestaurant);

// Endpoint PATCH /prueba
router.put('/', updateRestaurant);

// Endpoint DELETE /prueba
router.delete('/:id', deleteRestaurant);

export default router;
