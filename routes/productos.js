const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

router.get('/', productosController.obtenerProductos);
router.post('/', productosController.agregarProducto);
router.delete('/:id', productosController.eliminarProducto);

module.exports = router;
