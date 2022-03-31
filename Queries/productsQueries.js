const getAll = 'SELECT * FROM heroku_09f15076813b26b.products ORDER BY id ASC;';

const getById = 'SELECT * FROM heroku_09f15076813b26b.products WHERE id=?;';

const create = 'INSERT INTO heroku_09f15076813b26b.products (name, quantity) VALUES (?, ?);';

const update = 'UPDATE heroku_09f15076813b26b.products SET name=?, quantity=? WHERE id=?;';

const deleteProduct = 'DELETE FROM heroku_09f15076813b26b.products WHERE id=?;';

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteProduct,
};
