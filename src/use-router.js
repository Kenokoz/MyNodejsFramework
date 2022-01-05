const Router = require('../framework/Router');

const router = new Router();

const users = [
  { id: 1, name: 'Kenokoz' },
  { id: 2, name: 'Exterminate' },
];

router.get('/users', (req, res) => {
  res.send(users);
});

router.post('/users', (req, res) => {
  const user = req.body;
  console.log('user', user);
  users.push(user);
  res.send(users);
});

module.exports = router;
