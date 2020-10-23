const http = require('http');

const server = http.createServer();

server.on('request', function (request, response) {
  var name = "NomePessoa";
  setNome("Pedro");
  response.write('Seu nome: ' + nome);
  response.end();
});

server.listen(3000);

function setNome(var nome){
	name = nome;
}
console.log('Server is running.');