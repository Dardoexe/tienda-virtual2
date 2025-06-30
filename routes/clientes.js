const express = require('express');
const router = express.Router();
const Cliente = require('../models/cliente');

// Obtener todos los clientes
router.get('/', async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.json(clientes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Crear un cliente
router.post('/', async (req, res) => {
  try {
    const nuevoCliente = new Cliente(req.body);
    const clienteGuardado = await nuevoCliente.save();
    res.json(clienteGuardado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
