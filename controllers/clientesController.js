const Cliente = require('../models/cliente');

exports.obtenerClientes = async (req, res) => {
  try {
    const cliente = await Cliente.find();
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.agregarCliente = async (req, res) => {
  try {
    const cliente = new Cliente(req.body);
    await cliente.save();
    res.json(cliente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
