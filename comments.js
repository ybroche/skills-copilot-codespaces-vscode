// Create web server
// 1. create a web server object
// 2. create a request handler function
// 3. start the server listening on a port
// 4. start the server listening on a port
// 5. start the server listening on a port

// 1. Create a web server object
const http = require('http');
const port = 3000;
const server = http.createServer();

// 2. Create a request handler function
server.on('request', (request, response) => {
  // 3. Start the server listening on a port
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('Hello World');
});

// 4. Start the server listening on a port
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});