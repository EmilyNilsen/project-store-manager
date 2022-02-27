const express = require('express');

const productsController = require('./productsControllers');
const salesControllers = require('./ salesControllers');

const {
  validateName,
  validateQuantity,
} = require('../middlewares/validations');

const productsRouter = express.Router();
const salesRouter = express.Router();

productsRouter.get('/', productsController.getAllProducts);

productsRouter.get('/:id', productsController.getProductById);

productsRouter.post('/', validateName, validateQuantity, productsController.createProduct);

productsRouter.put('/:id', validateName, validateQuantity, productsController.updateProduct);

salesRouter.get('/', salesControllers.getAllSales);

salesRouter.get('/:id', salesControllers.getSaleById);

// salesRouter.post('/', validProductIdSales, validQuantitySales, salesControllers);

module.exports = {
  salesRouter,
  productsRouter,
};
