const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.products ORDER BY id ASC;';
  const [products] = await connection.execute(query);
  return products;
};

const getById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id=?;';
  const [product] = await connection.execute(query, [id]);
  if (product.length === 0) return null;
  return product[0];
};

const createNewProduct = async ({ name, quantity }) => {
  const query = 'INSERT INTO StoreManager.products (name, quantity) VALUES (?, ?);';
  const [dataBaseResponse] = await connection.execute(query, [name, quantity]);

  const createdProduct = {
    id: dataBaseResponse.insertId,
    name,
    quantity,
  };

  return createdProduct;
};

const updateProduct = async ({ id, name, quantity }) => {
const query = 'UPDATE StoreManager.products SET name=?, quantity=? WHERE id=?;';
await connection.execute(query, [id, name, quantity]);

const intId = parseInt(id, 10);
const updatedProduct = {
  id: intId,
  name,
  quantity,
};

return updatedProduct;
};

const deleteProduct = async (id) => {
  const query = 'DELETE FROM StoreManager.products WHERE id=?;';
  await connection.execute(query, [id]);
};

module.exports = {
  getAll,
  getById,
  createNewProduct,
  updateProduct,
  deleteProduct,
};
