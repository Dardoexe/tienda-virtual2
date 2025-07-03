const express = require('express');
const router = express.Router();
const pedidosController = require('../controllers/pedidosControllers');

router.get('/', pedidosController.obtenerPedidos);
router.post('/', pedidosController.agregarPedido);

module.exports = router;
