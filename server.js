var http = require('http');

const PORT = 8080;

function handleRequest (request, response) {
    response.end('Successfull' + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
   console.log('Server Listening On Port http://localhost:%s', PORT); 
});