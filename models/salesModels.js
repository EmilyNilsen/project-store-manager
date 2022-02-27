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

module.exports = {
  getAllSales,
  getByIdSales,
};
