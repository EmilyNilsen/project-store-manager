const getAll = 'SELECT * FROM StoreManager.products ORDER BY id ASC;';

const getById = 'SELECT * FROM StoreManager.products WHERE id=?;';

const create = 'INSERT INTO StoreManager.products (name, quantity) VALUES (?, ?);';

const update = 'UPDATE StoreManager.products SET name=?, quantity=? WHERE id=?;';

const deleteProduct = 'DELETE FROM StoreManager.products WHERE id=?;';

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteProduct,
};
