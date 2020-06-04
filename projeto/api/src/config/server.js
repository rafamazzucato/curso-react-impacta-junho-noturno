// Define a constante da porta onde o servidor ficará disponível
const port = 3200;

// Requisita o módulo express
const express = require('express');
// Requisita o módulo body-parse
const bodyParser = require('body-parser');
// Requisita o módulo nosso do cors
const cors = require('./cors');

// instancia o servidor que é o resultado da função express()
const server = express();

// pluga no servidor o middleware que trata URL codificada
server.use(bodyParser.urlencoded({extended:true}));
// pluga no servidor o middleware que trata o request e response
// somente em json
server.use(bodyParser.json());

// pluga no servicor o middleware que trata o cors das requisições
server.use(cors);

// sobe o servidor na porta 3200
server.listen(port, function(){
    console.log(`Servidor no ar na porta ${port}`);
});

// exporta o servidor instanciado para que seja utilizado em outros módulos
module.exports = server;