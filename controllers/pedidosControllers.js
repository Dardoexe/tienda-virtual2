const Pedido = require('../models/Pedido');

exports.obtenerPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.find();
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.agregarPedido = async (req, res) => {
  try {
    const pedido = new Pedido(req.body);
    await pedido.save();
    res.json(pedido);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
