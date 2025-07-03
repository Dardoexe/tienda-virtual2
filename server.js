const express = require('express');
const mongoose =require ('mongoose');
const productosRoutes = require('./routes/productos');
const clientesRoutes = require('./routes/clientes');
const pedidosRoutes = require('./routes/pedidos');
const cors= require('cors');
const bodyParser = require('body-parser');
const connectDB=requiere('./config/db');


const app = express();
app.use (bodyParser.json());
app.use(cors());

connectDB();

app.use('/api/productos', productosRoutes);
app.use('/api/clientes', clientesRoutes);
app.use('/api/pedidos', pedidosRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));
