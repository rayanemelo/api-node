const express = require('express');
const db = require('./config/dbConnect.js');
const routes = require('./routes/index.js');

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {//Abrir conexão, evento "open"
  console.log('Conexão com o banco: success!')
});

const app = express();
app.use(express.json());

routes(app);


module.exports = app;
