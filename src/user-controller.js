const User = require('./user-schema');

const getUsers = async (req, res) => {
  let users;

  if (req.params.id) {
    users = await User.findById(req.params.id);
  } else {
    users = await User.find();
  }

  res.send(users);
};

const createUser = async (req, res) => {
  const user = req.body;
  await User.create(user);
  res.send(user);
};

module.exports = {
  getUsers,
  createUser,
};
