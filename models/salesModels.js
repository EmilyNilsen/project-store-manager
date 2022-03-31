const connection = require('./connection');
const salesQueries = require('../Queries/salesQueries');

const getAllSales = async () => {
  const [sales] = await connection.execute(salesQueries.getAll);
  return sales;
};

const getByIdSales = async (id) => {
  const [sales] = await connection.execute(salesQueries.getById, [id]);
  if (sales.length === 0) return null;
  return sales;
};

const createSaleRecordId = async () => {
const [dbResponse] = await connection.execute(salesQueries.createSaleRecordId);
  return dbResponse.insertId;
};

const createNewSale = async (saleId, productId, quantity) => {
  const batata = await connection
    .execute(salesQueries.createNewSale, [saleId, productId, quantity]);
  return batata;
};

const update = async (saleId, productId, quantity) => {
  await connection.execute(salesQueries.update, [quantity, productId, saleId]);
};

module.exports = {
  getAllSales,
  getByIdSales,
  createNewSale,
  createSaleRecordId,
  update,
};
