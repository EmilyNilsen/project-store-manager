const connection = require('./connection');
const ProductQueries = require('../Queries/productsQueries');

const getAll = async () => {
  const [products] = await connection.execute(ProductQueries.getAll);
  return products;
};

const getById = async (id) => {
  const [product] = await connection.execute(ProductQueries.getById, [id]);
  if (product.length === 0) return null;
  return product[0];
};

const createNewProduct = async ({ name, quantity }) => {
  const [dataBaseResponse] = await connection.execute(ProductQueries.create, [name, quantity]);

  const createdProduct = {
    id: dataBaseResponse.insertId,
    name,
    quantity,
  };

  return createdProduct;
};

const updateProduct = async ({ name, quantity, id }) => {
await connection.execute(ProductQueries.update, [name, quantity, id]);

const intId = parseInt(id, 10);
const updatedProduct = {
  id: intId,
  name,
  quantity,
};

return updatedProduct;
};

const deleteProduct = async (id) => {
  await connection.execute(ProductQueries.deleteProduct, [id]);
};

module.exports = {
  getAll,
  getById,
  createNewProduct,
  updateProduct,
  deleteProduct,
};
