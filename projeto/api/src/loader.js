// guarda o server numa variável para que seja passado como parametro
// na configuração das rotas
const server = require('./config/server');

// configura o db
require('./config/db');

// configura as rotas a partir de um servidor instanciado
require('./config/routes')(server);