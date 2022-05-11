const express = require('express');
const { PORT = 3000 } = process.env;
const app = express();
const usersRouter = require('./routes/users');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(usersRouter);

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
