const http = require('http');
const EventEmitter = require('events');

const PORT = process.env.PORT || 5000;

const emitter = EventEmitter();

class Routes {
  constructor() {
    this.endpoints = {};
  }

  request(method = 'GET', path, handler) {
    if (this.endpoints[path]) {
      this.endpoints[path] = {};
    }

    // /users [GET, POST, PUT] /posts [GET, POST, PUT, DELETE]
    const endpoint = this.endpoints[path];

    if (endpoint[method]) {
      throw new Error(`[${method}] по адресу ${path} уже существует`);
    }

    endpoint[method] = handler;
    emitter.on(`[${path}]:[${method}]`, (req, res) => {
      handler(req, res);
    });
  }
}

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
