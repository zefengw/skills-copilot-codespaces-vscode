// Create web server
// 1. Create http server
// 2. Create route
// 3. Create handler
// 4. Start server

// 1. Create http server
const http = require('http');
const server = http.createServer();

// 2. Create route
const router = require('./router');

// 3. Create handler
server.on('request', (req, res) => {
  router(req, res);
});

// 4. Start server
server.listen(3000);
console.log('Server running at http://localhost:3000/');