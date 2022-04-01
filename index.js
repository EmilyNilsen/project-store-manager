const bodyparser = require('body-parser');
const express = require('express');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const cors = require('cors');
const { productsRouter, salesRouter } = require('./controllers/routes');
require('dotenv').config();

const app = express();
app.use(bodyparser.json());
app.use(cors());

const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/products', productsRouter);

app.use('/sales', salesRouter);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});
