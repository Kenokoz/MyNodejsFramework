const http = require('http');
const EventEmitter = require('events');
const Router = require('./framework/Router');
const Application = require('./framework/Application');

const PORT = process.env.PORT || 5000;

const app = new Application();

const router = new Router();

router.get('/users', (req, res) => {
  res.end('Hello users');
});

router.get('/posts', (req, res) => {
  res.end('Hello posts');
});

app.addRouter(router);

app.listen(PORT, () => {
  console.log('Server is started');
});
