const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    _id: { type: String, required: true },  
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telefono: { type: String }
}, { _id: false }); 

module.exports = mongoose.model('Cliente', ClienteSchema);
