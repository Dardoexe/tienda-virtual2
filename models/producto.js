const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  precio: { type: Number, required: true },
  categoria: { type: String },
  stock: { type: Number, default: 0 },
  fecha_creacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Producto', ProductoSchema);
