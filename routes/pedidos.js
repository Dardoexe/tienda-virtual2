const express = require('express');
const router = express.Router();
const Pedido = require('../models/pedido');

// Obtener todos los pedidos
router.get('/', async (req, res) => {
  try {
    const pedidos = await Pedido.find();
    res.json(pedidos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Crear un pedido
router.post('/', async (req, res) => {
  try {
    const nuevoPedido = new Pedido(req.body);
    const pedidoGuardado = await nuevoPedido.save();
    res.json(pedidoGuardado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
