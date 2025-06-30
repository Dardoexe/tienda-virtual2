require('dotenv').config();
const { faker } = require('@faker-js/faker');
const { MongoClient } = require('mongodb');

async function main() {
  const client = new MongoClient(process.env.MONGO_URI);

  try {
    await client.connect();
    const db = client.db('tienda-virtual2');
    const clientes = db.collection('clientes');

    const items = Array.from({ length: 30 }).map(() => ({
      nombre: faker.person.firstName(),
      apellido: faker.person.lastName(),
      email: faker.internet.email(),
      telefono: faker.phone.number(),
      direccion: faker.location.streetAddress(),
    }));

    const result = await clientes.insertMany(items);
    console.log(`✅ Se insertaron ${result.insertedCount} clientes en Atlas.`);
  } catch (err) {
    console.error('❌ Error al insertar clientes:', err);
  } finally {
    await client.close();
  }
}

main();
