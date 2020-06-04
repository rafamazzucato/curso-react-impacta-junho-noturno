// importa o noderestful para iniciar a criação dos schemas mongoose/rest
const restful =  require('node-restful');

// cria o esquema de acordo com os campos definidos
const cursosSchema = new restful.mongoose.Schema({
    codigo: { type: Number, required: true },
    descricao: { type: String, required: true },
    cargaHoraria: { type: Number, required: true, min: 4 },
    preco: { type: Number, required: true, min: 0 },
    categoria: {
        type: String, required: true, uppercase: true,
        enum:['INFORMATICA', 
            'ENGENHARIA', 
            'ADMINISTRACAO', 
            'REDES'
        ]
    }
});

// cria o modelo do mongoDB através do schema e o nome da tabela
module.exports = restful.model('cursos', cursosSchema);