const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
  cliente: {
    nombre: String,
    apellido: String,
    email: String
  },
  productos: [
    {
      nombre: String,
      cantidad: Number,
      precio: Number
    }
  ],
  total: {
    type: Number,
    required: true
  },
  fecha: {
    type: Date,
    default: Date.now
  },
  estado: {
    type: String,
    enum: ['pendiente', 'enviado', 'entregado', 'cancelado'],
    default: 'pendiente'
  }
});

module.exports = mongoose.model('Pedido', pedidoSchema);
