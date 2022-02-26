const express = require('express');
require('dotenv').config();

const salesControllers = require('./controllers/ salesControllers');
const productsController = require('./controllers/productsControllers');

const app = express();

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// req 02
app.get('/products', productsController.listProducts);

app.get('/products/:id', productsController.getProductById);

app.get('/sales', salesControllers.listSales);

app.get('/sales/:id', salesControllers.listSaleById);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
