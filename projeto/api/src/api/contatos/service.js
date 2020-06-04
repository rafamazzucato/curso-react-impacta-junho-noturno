// requisita o schema para transformá-lo em serviço
const service = require('./schema');

// adiciona quais métodos http estarão disponíveis para esse schema
service.methods(['get', 'post', 'put']);

// adiciona as opções que esse serviço aceitara novos registro
// e que ele executará as validações definidas no schema
service.updateOptions({new : true, runValidators: true});

// exporta o serviço para ser re utilizado
module.exports = service;