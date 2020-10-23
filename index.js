const http = require('http');

const server = http.createServer();

server.on('request', function (request, response) {
  var name = "NomePessoa"
  response.write('Your random name: ' + nome);
  response.end();
});

server.listen(3000);
console.log('Server is running.');