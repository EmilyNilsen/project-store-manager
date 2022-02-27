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

const getAllSales = async () => {
  const sales = await Sales.getAllSales();
  return sales.map(newSalesSErvice);
};

const getSaleById = async (id) => {
  const sale = await Sales.getByIdSales(id);

  if (!sale) return null;

  return sale.map(newSaleServiceId);
};

module.exports = {
  getAllSales,
  getSaleById,
};
