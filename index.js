const conexao = require('./src/conexao/connect');
const rotas = require('./src/rotas/geral');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app);

app.use(require("cors")());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(rotas)


conexao.incia_conexao();



server.listen(process.env.PORT || 8070, function () {
    console.log(`Servidors Carregado ${server.address().port}`);
});
  

