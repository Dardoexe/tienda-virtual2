const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
  id_cliente: {
    type: String,
    required: true,
    unique: true
  },
  nombre: {
    type: String,
    required: true
  },
  correo: {
    type: String,
    required: true
  },
  telefono: {
    type: String
  },
  direccion: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Cliente', ClienteSchema);
