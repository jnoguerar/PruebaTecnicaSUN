import express from 'express';
import { EliminarNota, ModificarNota, ObtenerNotas, RegistrarNota } from '../controllers/NotasController.js';
const router = express.Router();

router.get('/', ObtenerNotas);
router.post('/agregar', RegistrarNota);
router.post('/eliminar', EliminarNota);
router.post('/modificar', ModificarNota);

export default router;