const getAll = `SELECT t1.id, t1.date, t2.product_id, t2.quantity 
FROM heroku_09f15076813b26b.sales AS t1 
inner join heroku_09f15076813b26b.sales_products AS t2 ON t1.id = t2.sale_id;`;

const getById = `SELECT t1.date, t2.product_id, t2.quantity 
FROM heroku_09f15076813b26b.sales AS t1
INNER JOIN heroku_09f15076813b26b.sales_products AS t2
ON t1.id = t2.sale_id
WHERE id=?
ORDER BY t2.sale_id ASC, t2.product_id ASC;`;

const createSaleRecordId = 'INSERT INTO heroku_09f15076813b26b.sales () VALUES ();';

const createNewSale = `INSERT INTO heroku_09f15076813b26b.sales_products
(sale_id, product_id, quantity) VALUES (?, ?, ?);`;

const update = `UPDATE heroku_09f15076813b26b.sales_products
SET quantity=? WHERE product_id=? AND sale_id=?;`;

module.exports = {
  getAll,
  getById,
  createSaleRecordId,
  createNewSale,
  update,
};
