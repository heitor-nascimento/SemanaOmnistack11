const express = require('express');  // importar o express
const routes = require('./routes');
const cors = require('cors');


const app = express(); // instanciando a aplicação

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333); //roda a aplicação na porta 3333