const getAll = 'SELECT * FROM products ORDER BY id ASC;';

const getById = 'SELECT * FROM products WHERE id=?;';

const create = 'INSERT INTO products (name, quantity) VALUES (?, ?);';

const update = 'UPDATE products SET name=?, quantity=? WHERE id=?;';

const deleteProduct = 'DELETE FROM products WHERE id=?;';

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteProduct,
};
