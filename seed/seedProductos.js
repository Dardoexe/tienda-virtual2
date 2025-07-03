const mongoose = require('mongoose');
const faker = require('@faker-js/faker').faker;
const Producto = require('./models/producto');

mongoose.connect('mongodb+srv://<usuario>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority');

async function seedProductos() {
  await Producto.deleteMany();

  const productos = Array.from({ length: 10 }).map(() => ({
    id_producto: faker.string.uuid(),
    nombre: faker.commerce.productName(),
    descripcion: faker.commerce.productDescription(),
    precio: parseFloat(faker.commerce.price({ min: 1000, max: 10000 })),
    stock: faker.number.int({ min: 1, max: 100 }),
    categoria: faker.commerce.department()
  }));

  await Producto.insertMany(productos);
  console.log('Productos generados correctamente');
  mongoose.connection.close();
}

seedProductos();
