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

const createNewSale = async (sales) => {
  const saleId = await Sales.createSale();
  await sales.forEach((sale) => {
    Sales.createNewSale(saleId, sale.productId, sale.quantity);
  });
  return ({ id: saleId, itemsSold: sales });
};

const updateSale = async (id, sale) => {
  sale.forEach(async (product) => {
    await Sales.update(id, product.productId, product.quantity);
  });
};

module.exports = {
  getAllSales,
  getSaleById,
  createNewSale,
  updateSale,
};
