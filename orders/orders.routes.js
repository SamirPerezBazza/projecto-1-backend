import { createOrder, getOrders, getOrder, deleteOrder, updateOrder } from "./orders.controller";
import {Router} from 'express';
const router = Router();

// Endpoint GET /prueba
router.get('/getOrder/:id', getOrder );
router.get('/getResturants/:ids', getOrders );

// Endpoint POST /prueba
router.post('/createOrder', createOrder );


// Endpoint PATCH /prueba
router.put('/updateOrder', updateOrder );

// Endpoint DELETE /prueba
router.delete('/deleteOrder/:id', deleteOrder );

export default router;