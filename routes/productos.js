const express = require('express');
const Producto = require('../models/producto');
const router = express.Router();

// Crear producto
router.post('/', async (req, res) => {
  const { nombre, descripcion, precio, categoria, stock } = req.body;
  try {
    const nuevoProducto = new Producto({ nombre, descripcion, precio, categoria, stock });
    await nuevoProducto.save();
    res.json(nuevoProducto);
  } catch (err) {
    res.status(500).send('Error al crear producto');
  }
});

// Obtener todos los productos
router.get('/', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (err) {
    res.status(500).send('Error al obtener productos');
  }
});

module.exports = router;
