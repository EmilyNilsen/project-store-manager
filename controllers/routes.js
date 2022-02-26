const express = require('express');

const productsController = require('./productsControllers');
const salesControllers = require('./ salesControllers');

const {
  validName,
  validQuantity,
  // validProductIdSales,
  // validQuantitySales 
} = require('../middlewares/validations');

const productsRouter = express.Router();
const salesRouter = express.Router();

productsRouter.get('/', productsController.listProducts);

productsRouter.get('/:id', productsController.getProductById);

productsRouter.post('/', validName, validQuantity, productsController.newProductBD);

salesRouter.get('/', salesControllers.listSales);

salesRouter.get('/:id', salesControllers.listSaleById);

// salesRouter.post('/', validProductIdSales, validQuantitySales, salesControllers);

module.exports = {
  salesRouter,
  productsRouter,
};
