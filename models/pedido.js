const mongoose = require('mongoose');


const PedidoSchema = new mongoose.Schema({
  id_pedido: {
    type: String,
    required: true,
    unique: true
  },
  id_cliente: {
    type: String,
    required: true
  },
  fecha: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    required: true
  },
  productos: [DetalleProductoSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Pedido', PedidoSchema);
