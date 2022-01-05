const Router = require('../framework/Router');
const UserController = require('./user-controller');

const router = new Router();

router.get('/users', UserController.getUsers);

router.post('/users', UserController.createUser);

module.exports = router;
