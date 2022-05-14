const express = require('express');
const { PORT = 3000 } = process.env;
const app = express();
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

app.use(usersRouter);
app.use(cardsRouter);

app.use('/', (req, res) => {
  res.status(404).send({ message: 'Requested resource not found' });
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});