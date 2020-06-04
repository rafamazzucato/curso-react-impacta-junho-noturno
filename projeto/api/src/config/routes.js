// requisita o express para mapear as rotas
const express = require('express');

// exporta uma função que recebe o server instanciado
// e adiciona os services em suas devidas rotas
module.exports = function(server){
    //instancia as rotas do express
    const routes = express.Router();

    //adiciona a rota padrão na url meuservidor:porta/api
    server.use('/api', routes);

    // requisita os services que já tem os metodos HTTP mapeados
    // e o schema do banco definido
    const cursosService = require('../api/cursos/service');
    const contatoService = require('../api/contatos/service');
    
    // registra os services nas rotas do express na url
    // meuservidor:porta/api/nomeDoService
    cursosService.register(routes, '/cursos');
    contatoService.register(routes, '/contatos');
}