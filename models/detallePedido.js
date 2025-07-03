const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const detallePedidoSchema = new Schema({
  id_pedido: {
    type: Schema.Types.ObjectId,
    ref: 'Pedido',
    required: true
  },
  id_producto: {
    type: Schema.Types.ObjectId,
    ref: 'Producto',
    required: true
  },
  cantidad: {
    type: Number,
    required: true,
    min: 1
  },
  precio_unitario: {
    type: Number,
    required: true,
    min: 0
  }
}, {
  collection: 'detalle_pedidos',
  timestamps: true
});

module.exports = mongoose.model('DetallePedido', detallePedidoSchema);
