const users = [
  { id: 1, name: 'Kenokoz' },
  { id: 2, name: 'Exterminate' },
];

const getUsers = (req, res) => {
  if (req.params.id) {
    return res.send(users.find(({ id }) => req.params.id == id));
  }
  res.send(users);
};

const createUser = (req, res) => {
  const user = req.body;
  users.push(user);
  res.send(user);
};

module.exports = {
  getUsers,
  createUser,
};
