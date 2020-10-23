const http = require('http');

const server = http.createServera();

server.on('request', function (request, response) {
  const randomName = "random";

  response.writem('Your random name: ' + randomName);
  response.end();
});

server.listen(3000);
console.log('Server is running.');