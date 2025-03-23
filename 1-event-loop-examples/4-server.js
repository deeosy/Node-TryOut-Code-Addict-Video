const http = require('http')

const server = http.createServer((req, res) => {
  console.log('request event');
  res.end('Hello World')
})

server.listen(5000, () => {  // server. listen is an async function hence it always running in the BG
  console.log('server is live on port : 5000...');
})