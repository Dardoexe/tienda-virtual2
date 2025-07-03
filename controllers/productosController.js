const Producto = require('../models/producto');

exports.obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.agregarProducto = async (req, res) => {
  try {
    const producto = new Producto(req.body);
    console.log(producto)
    await producto.save();
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error.message)
  }
};

exports.eliminarProducto = async (req, res) => {
  const { id } = req.params
  try {
    await Producto.findByIdAndDelete(id)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}