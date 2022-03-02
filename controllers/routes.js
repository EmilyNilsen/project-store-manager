const express = require('express');

const productsController = require('./productsControllers');
const salesControllers = require('./ salesControllers');

const validations = require('../middlewares/validations');

const productsRouter = express.Router();
const salesRouter = express.Router();

productsRouter.get('/', productsController.getAllProducts);

productsRouter.get('/:id', productsController.getProductById);

productsRouter.post('/',
  validations.validateName,
  validations.validateQuantity,
  productsController.createProduct);

productsRouter.put('/:id',
  validations.validateName,
  validations.validateQuantity,
  productsController.updateProduct);

productsRouter.delete('/:id', productsController.deleteProduct);

salesRouter.get('/', salesControllers.getAllSales);

salesRouter.get('/:id', salesControllers.getSaleById);

salesRouter.post('/',
  validations.validateSales, salesControllers.createSale);

// salesRouter.put('/',
//   validations.validateSales);

module.exports = {
  salesRouter,
  productsRouter,
};
