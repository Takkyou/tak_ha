const express = require('express');
const app = express();
const PORT = 3000;

const adminRouter = express.Router();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/admin', adminRouter);

app.get('/', (req, res) => {
  res.render('main');
});

app.get('/download', (req, res) => {
  res.render('download');
});

app.param('id', (req, res, next, value) => {
  next();
});

app.get('/:id', (req, res) => {
  res.send('Hello get/:id');
});

app.get('/login', (req, res) => {
  res.send('loginpage');
});

app.post('/', (req, res) => {
  res.send('Hello Post');
});

adminRouter.get('/', (req, res) => {
  res.send('admin page');
});

app.listen(PORT, () => {
  console.log('server start at', PORT);
});
