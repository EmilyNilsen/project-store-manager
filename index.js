const bodyparser = require('body-parser');
const express = require('express');
const { productsRouter, salesRouter } = require('./controllers/routes');
require('dotenv').config();

const app = express();
app.use(bodyparser.json());

// req 02
app.use('/products', productsRouter);

app.use('/sales', salesRouter);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
