const Application = require('./framework/Application');
const userRouter = require('./src/use-router');
const jsoParse = require('./framework/parseJson');

const PORT = process.env.PORT || 5000;

const app = new Application();

app.use(jsoParse);

app.addRouter(userRouter);

app.listen(PORT, () => {
  console.log('Server is started');
});
