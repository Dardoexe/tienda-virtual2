const mongoose = require('mongoose');
const faker = require('@faker-js/faker').faker;
const Pedido = require('./models/pedido');
const DetallePedido = require('./models/detallePedido');
const Cliente = require('./models/cliente');
const Producto = require('./models/producto');

mongoose.connect('mongodb+srv://<usuario>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority');

async function seedPedidos() {
  await Pedido.deleteMany();
  await DetallePedido.deleteMany();

  const clientes = await Cliente.find();
  const productos = await Producto.find();

  const pedidos = [];

  for (let i = 0; i < 10; i++) {
    const cliente = faker.helpers.arrayElement(clientes);
    const id_pedido = faker.string.uuid();
    const fecha = faker.date.recent().toISOString().split('T')[0];

    // Crear el pedido
    pedidos.push({
      id_pedido,
      cliente_id: cliente.id_cliente,
      fecha,
      estado: faker.helpers.arrayElement(['pendiente', 'procesado', 'entregado'])
    });

    // Crear entre 1 y 3 productos para este pedido
    const productosEnPedido = faker.helpers.arrayElements(productos, faker.number.int({ min: 1, max: 3 }));

    for (const producto of productosEnPedido) {
      const cantidad = faker.number.int({ min: 1, max: 5 });

      await DetallePedido.create({
        id_pedido,
        id_producto: producto.id_producto,
        cantidad,
        precio_unitario: producto.precio
      });
    }
  }

  await Pedido.insertMany(pedidos);
  console.log('Pedidos y detalles generados correctamente');
  mongoose.connection.close();
}

seedPedidos();
