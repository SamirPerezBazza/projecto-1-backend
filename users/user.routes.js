import { createUser, deleteUser, getUser, getUserCount, patchUser } from './user.controller';
import { Router } from 'express';
const router = Router();

// Endpoint GET /prueba
router.get('/count', getUserCount);
router.get('/:id', getUser);

// Endpoint POST /prueba
router.post('/', createUser);

// Endpoint PATCH /prueba
router.patch('/', patchUser);

// Endpoint DELETE /prueba
router.delete('/', deleteUser);

export default router;
