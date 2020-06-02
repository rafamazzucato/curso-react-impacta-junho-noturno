// requisita o módulo HTTP do Node.Js
const { createServer } = require('http');

// cria a função que vai tratar todas as requisições do servidor
// e retorna um HTML padrão para qualquer request
const requisicao = function(_, response){
    response.writeHead(200, { "Content-Type": "text/html"});
    response.write("<h1>Texto a ser exibido no browser</h1>");
    response.end();
}

// cria o servidor através do http.createServer
// o servidor vai executar de acordo com o tratamento das requisições
// feito na função requisicao
const server = createServer(requisicao);

// cria um callback para nos avisar o momento que o servidor terminou de subir
const servidorNoAr = function(){
    console.log("Servidor no Ar na porta 3000");
}

// sobe o servidor na porta 3000 e chama o callback ao finalizar
server.listen(3000, servidorNoAr);
