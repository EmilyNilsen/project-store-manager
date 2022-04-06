require('dotenv').config();

const getAll = `SELECT t1.id, t1.date, t2.product_id, t2.quantity 
FROM ${process.env.DB_NAME}.sales AS t1 
inner join ${process.env.DB_NAME}.sales_products AS t2 ON t1.id = t2.sale_id;`;

const getById = `SELECT t1.date, t2.product_id, t2.quantity 
FROM ${process.env.DB_NAME}.sales AS t1
INNER JOIN ${process.env.DB_NAME}.sales_products AS t2
ON t1.id = t2.sale_id
WHERE id=?
ORDER BY t2.sale_id ASC, t2.product_id ASC;`;

const createSaleRecordId = `INSERT INTO ${process.env.DB_NAME}.sales () VALUES ();`;

const createNewSale = `INSERT INTO ${process.env.DB_NAME}.sales_products
(sale_id, product_id, quantity) VALUES (?, ?, ?);`;

const update = `UPDATE ${process.env.DB_NAME}.sales_products
SET quantity=? WHERE product_id=? AND sale_id=?;`;

const deleteAllSaleRecords = `DELETE FROM ${process.env.DB_NAME}.sales WHERE id=?;`;

module.exports = {
  getAll,
  getById,
  createSaleRecordId,
  createNewSale,
  update,
  deleteAllSaleRecords,
};
