const Application = require('./framework/Application');
const userRouter = require('./src/user-router');
const jsonParse = require('./framework/parseJson');
const parseUrl = require('./framework/parseUrl');

const PORT = process.env.PORT || 5000;

const app = new Application();

app.use(jsonParse);
app.use(parseUrl('http://localhost:5000/'));

app.addRouter(userRouter);

app.listen(PORT, () => {
  console.log('Server is started');
});
