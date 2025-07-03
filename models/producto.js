const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
  id_producto: {
    type: String,
    required: true,
    unique: true
  },
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String
  },
  precio: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  categoria: {
    type: String
  }
}, {
  timestamps: true // Opcional, agrega createdAt y updatedAt
});

module.exports = mongoose.model('Producto', ProductoSchema);
