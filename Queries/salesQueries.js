const getAll = `SELECT t1.id, t1.date, t2.product_id, t2.quantity 
FROM sales AS t1 
inner join sales_products AS t2 ON t1.id = t2.sale_id;`;

const getById = `SELECT t1.date, t2.product_id, t2.quantity 
FROM sales AS t1
INNER JOIN sales_products AS t2
ON t1.id = t2.sale_id
WHERE id=?
ORDER BY t2.sale_id ASC, t2.product_id ASC;`;

const createSaleRecordId = 'INSERT INTO sales () VALUES ();';

const createNewSale = `INSERT INTO sales_products
(sale_id, product_id, quantity) VALUES (?, ?, ?);`;

const update = `UPDATE sales_products
SET quantity=? WHERE product_id=? AND sale_id=?;`;

module.exports = {
  getAll,
  getById,
  createSaleRecordId,
  createNewSale,
  update,
};
