require('dotenv').config();
const { faker } = require('@faker-js/faker');
const { MongoClient } = require('mongodb');

async function main() {
  const client = new MongoClient(process.env.MONGO_URI);

  try {
    await client.connect();
    const db = client.db('tienda-virtual2');
    const pedidos = db.collection('pedidos');

    const items = Array.from({ length: 20 }).map(() => ({
      cliente: {
        nombre: faker.person.firstName(),
        apellido: faker.person.lastName(),
        email: faker.internet.email(),
      },
      productos: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }).map(() => ({
        nombre: faker.commerce.productName(),
        cantidad: faker.number.int({ min: 1, max: 3 }),
        precio: parseFloat(faker.commerce.price(10, 500, 2)),
      })),
      total: 0, // Lo calculamos abajo
      fecha: faker.date.recent(),
      estado: faker.helpers.arrayElement(['pendiente', 'enviado', 'entregado', 'cancelado']),
    })).map(pedido => {
      pedido.total = pedido.productos.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
      return pedido;
    });

    const result = await pedidos.insertMany(items);
    console.log(`✅ Se insertaron ${result.insertedCount} pedidos en Atlas.`);
  } catch (err) {
    console.error('❌ Error al insertar pedidos:', err);
  } finally {
    await client.close();
  }
}

main();
