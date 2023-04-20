import { createProduct, getProducts, getProduct, deleteProduct, updateProduct } from "./products.controller";
import {Router} from 'express';
const router = Router();

// Endpoint GET /prueba
router.get('/getProduct/:id', getProduct );
router.get('/getResturants/:ids', getProducts );

// Endpoint POST /prueba
router.post('/createProduct', createProduct );


// Endpoint PATCH /prueba
router.put('/updateProduct', updateProduct );

// Endpoint DELETE /prueba
router.delete('/deleteProduct/:id', deleteProduct );

export default router;