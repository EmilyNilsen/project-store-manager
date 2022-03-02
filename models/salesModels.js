const connection = require('./connection');

const getAllSales = async () => {
  const query = `SELECT t1.id, t1.date, t2.product_id, t2.quantity 
  FROM StoreManager.sales AS t1 
  inner join StoreManager.sales_products AS t2 ON t1.id = t2.sale_id;`;
  const [sales] = await connection.execute(query);
  return sales;
};

const getByIdSales = async (id) => {
  const queryId = `SELECT t1.date, t2.product_id, t2.quantity 
  FROM StoreManager.sales AS t1
  INNER JOIN StoreManager.sales_products AS t2
  ON t1.id = t2.sale_id
  WHERE id=?
  ORDER BY t2.sale_id ASC, t2.product_id ASC;`;
  const [sales] = await connection.execute(queryId, [id]);
  if (sales.length === 0) return null;
  return sales;
};
const createSale = async () => {
const [dbResponse] = await connection.execute(
  'INSERT INTO sales () VALUES ();',
  );
  return dbResponse.insertId;
};

const createNewSale = async (saleId, productId, quantity) => {
  const query = `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
  VALUES (?, ?, ?);`;
  await connection.execute(query, [saleId, productId, quantity]);
};

const update = async (saleId, productId, quantity) => {
  const query = `UPDATE StoreManager.sales_products
  SET quantity=? WHERE product_id=? AND sale_id=?;`;
  await connection.execute(query, [quantity, productId, saleId]);
};

module.exports = {
  getAllSales,
  getByIdSales,
  createNewSale,
  createSale,
  update,
};
