const Application = require('./framework/Application');
const mongoose = require('mongoose');
const userRouter = require('./src/user-router');
const jsonParse = require('./framework/parseJson');
const parseUrl = require('./framework/parseUrl');

const PORT = process.env.PORT || 5000;

const app = new Application();

app.use(jsonParse);
app.use(parseUrl('http://localhost:5000/'));

app.addRouter(userRouter);

const start = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://user:user@cluster0.cskco.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    );
    app.listen(PORT, () => {
      console.log('Server is started');
    });
  } catch (e) {
    console.log(e);
  }
};

start();
