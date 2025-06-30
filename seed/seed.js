require('dotenv').config();
const { faker } = require('@faker-js/faker');
const { MongoClient } = require('mongodb');

async function main() {
  const client = new MongoClient(process.env.MONGO_URI); // Usando variable de entorno
  try {
    await client.connect();
    const db = client.db('tienda');
    const productos = db.collection('productos');

    const items = Array.from({ length: 50 }).map(() => ({
      nombre: faker.commerce.productName(),
      descripcion: faker.commerce.productDescription(),
      precio: parseFloat(faker.commerce.price(10, 200, 2)),
      categoria: faker.commerce.department(),
      stock: faker.number.int({ min: 0, max: 100 }),
      imagen: faker.image.urlLoremFlickr({ category: 'product', width: 200, height: 200 }),
    }));

    const result = await productos.insertMany(items);
    console.log(`Se insertaron ${result.insertedCount} productos.`);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main();
