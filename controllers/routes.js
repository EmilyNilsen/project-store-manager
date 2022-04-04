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
  validations.validateProductIdOfSaleItem,
  validations.validateQuantityOfSaleItem,
  validations.validateQuantitySales,
  salesControllers.createSale);

salesRouter.put('/:id',
  validations.validateProductIdOfSaleItem,
  validations.validateQuantityOfSaleItem,
  validations.validateQuantitySales,
  salesControllers.updateSale);

salesRouter.delete('/:id', salesControllers.deleteSale);

module.exports = {
  salesRouter,
  productsRouter,
};
