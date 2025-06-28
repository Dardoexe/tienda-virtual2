const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
    id_pedido: { type: String, required: true, unique: true },
    productos: [
        {
            id_producto: { type: String, required: true },
            cantidad: { type: Number, required: true }
        }
    ],
    total: { type: Number, required: true },
    fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Pedido', PedidoSchema);
