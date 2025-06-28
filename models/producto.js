const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
    id_producto: { type: String, required: true, unique: true }, 
    nombre: { type: String, required: true },
    descripcion: { type: String },
    precio: { type: Number, required: true },
    categoria: { type: String },
    stock: { type: Number, default: 0 }
});

module.exports = mongoose.model('Producto', ProductoSchema);
