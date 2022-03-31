const getAll = `SELECT t1.id, t1.date, t2.product_id, t2.quantity 
FROM StoreManager.sales AS t1 
inner join StoreManager.sales_products AS t2 ON t1.id = t2.sale_id;`;

const getById = `SELECT t1.date, t2.product_id, t2.quantity 
FROM StoreManager.sales AS t1
INNER JOIN StoreManager.sales_products AS t2
ON t1.id = t2.sale_id
WHERE id=?
ORDER BY t2.sale_id ASC, t2.product_id ASC;`;

const createSaleRecordId = 'INSERT INTO StoreManager.sales () VALUES ();';

const createNewSale = `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
VALUES (?, ?, ?);`;

const update = `UPDATE StoreManager.sales_products
SET quantity=? WHERE product_id=? AND sale_id=?;`;

module.exports = {
  getAll,
  getById,
  createSaleRecordId,
  createNewSale,
  update,
};
