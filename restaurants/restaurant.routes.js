import { createRestaurant, getRestaurants, getRestaurant, deleteRestaurant, updateRestaurant } from "./restaurant.controller";
import {Router} from 'express';
const router = Router();

// Endpoint GET /prueba
router.get('/getRestaurant/:id', getRestaurant );
router.get('/getResturants/:ids', getRestaurants );

// Endpoint POST /prueba
router.post('/createRestaurant', createRestaurant );


// Endpoint PATCH /prueba
router.put('/updateRestaurant', updateRestaurant );

// Endpoint DELETE /prueba
router.delete('/deleteRestaurant/:id', deleteRestaurant );

export default router;