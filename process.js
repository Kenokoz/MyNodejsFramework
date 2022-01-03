const http = require('http');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  if (req.url === '/users') {
    return res.end(JSON.stringify([{ id: 1, name: 'Kenokoz' }]));
  }

  if (req.url === '/posts') {
    return res.end('POSTS');
  }

  res.end('<h1>Hello</h1>');
});

server.listen(PORT, () => {
  console.log('Server is started');
});
