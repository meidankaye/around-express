const express = require('express');
const { PORT = 3000 } = process.env;
const app = express();
const usersRouter = require('./routes/users');

app.use(usersRouter);

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
