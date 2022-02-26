const Sales = require('../models/salesModels');

const newSalesSErvice = (salesData) => ({
  saleId: salesData.id,
  date: salesData.date,
  productId: salesData.product_id,
  quantity: salesData.quantity,
});

const newSaleServiceId = (salesData) => ({
  date: salesData.date,
  productId: salesData.product_id,
  quantity: salesData.quantity,
});

const getAllSalesServices = async () => {
  const sales = await Sales.getAllSalesModel();
  return sales.map(newSalesSErvice);
};

const findByIdService = async (id) => {
  const sale = await Sales.getByIdSales(id);

  if (!sale) return null;

  return sale.map(newSaleServiceId);
};

module.exports = {
  getAllSalesServices,
  findByIdService,
};
