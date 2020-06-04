// importa o noderestful para iniciar a criação dos schemas mongoose/rest
const restful = require('node-restful');

// cria o esquema de acordo com os campos definidos
const contatoSchema = new restful.mongoose.Schema({
    data: { type: Date, required: true },
    nome: { type: String, required: true },
    email: {type: String, required: true },
    curso: { type: Object, required: false},
    assunto: { type: String, required: true },
    respondido: {type : Boolean, require: true, default: false}
});

// cria o modelo do mongoDB através do schema e o nome da tabela
module.exports = restful.model('contatos', contatoSchema);