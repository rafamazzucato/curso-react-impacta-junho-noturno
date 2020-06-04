const mongoose = require('mongoose');

// iguala a promise do mongoose com a promise do Node.js
// para evitar warnnings no console
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost:27017/escola-cursos', { useNewUrlParser : true, useUnifiedTopology: true});