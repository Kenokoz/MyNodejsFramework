const Router = require('../framework/Router');

const router = new Router();

const users = [
  { id: 1, name: 'Kenokoz' },
  { id: 2, name: 'Exterminate' },
];

router.get('/users', (req, res) => {
  if (req.params.id) {
    return res.send(users.find(({ id }) => req.params.id == id));
  }
  res.send(users);
});

router.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.send(user);
});

module.exports = router;
