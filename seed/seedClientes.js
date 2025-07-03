const mongoose = require('mongoose');
const faker = require('@faker-js/faker').faker;
const Cliente = require('./models/cliente');

mongoose.connect('mongodb+srv://<usuario>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority');

async function seedClientes() {
  await Cliente.deleteMany();

  const clientes = Array.from({ length: 5 }).map(() => ({
    id_cliente: faker.string.uuid(),
    nombre: faker.person.fullName(),
    correo: faker.internet.email(),
    telefono: faker.phone.number(),
    direccion: faker.location.streetAddress()
  }));

  await Cliente.insertMany(clientes);
  console.log('Clientes generados correctamente');
  mongoose.connection.close();
}

seedClientes();
