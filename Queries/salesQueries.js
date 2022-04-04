const { DB } = require('../db.config');

const getAll = `SELECT t1.id, t1.date, t2.product_id, t2.quantity 
FROM ${DB}.sales AS t1 
inner join ${DB}.sales_products AS t2 ON t1.id = t2.sale_id;`;

const getById = `SELECT t1.date, t2.product_id, t2.quantity 
FROM ${DB}.sales AS t1
INNER JOIN ${DB}.sales_products AS t2
ON t1.id = t2.sale_id
WHERE id=?
ORDER BY t2.sale_id ASC, t2.product_id ASC;`;

const createSaleRecordId = `INSERT INTO ${DB}.sales () VALUES ();`;

const createNewSale = `INSERT INTO ${DB}.sales_products
(sale_id, product_id, quantity) VALUES (?, ?, ?);`;

const update = `UPDATE ${DB}.sales_products
SET quantity=? WHERE product_id=? AND sale_id=?;`;

const deleteAllSaleRecords = `DELETE FROM ${DB}.sales WHERE id=?;`;

module.exports = {
  getAll,
  getById,
  createSaleRecordId,
  createNewSale,
  update,
  deleteAllSaleRecords,
};
