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
  productos: [
    {
      id_producto: {
        type: String,
        required: true,
      },
      cantidad: {
        type: Number,
        required: true,
      },
      precio_unitario: {
        type: Number,
        required: true,
      }
    }
  ],
  fecha: {
    type: String,
    required: true,
    default: Date.now()
  },
  estado: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model('Pedido', PedidoSchema);
