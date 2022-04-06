const ProductModel = require('../models/productsModels');

const getAll = async () => await ProductModel.getAll();

const findById = async (id) => {
  const product = await ProductModel.getById(id);

  if (!product) return null;

  return product;
};

const createNewProduct = async ({ name, quantity }) => {
  const getProducts = await getAll();
  if (getProducts.some((obj) => obj.name === name)) return null;
  return await ProductModel.createNewProduct({ name, quantity });
};

const updateProduct = async ({ id, name, quantity }) => {
  const products = await getAll();
  const intId = parseInt(id, 10);
  if (!products.some((obj) => obj.id === intId)) return null;
  return await ProductModel.updateProduct({ id, name, quantity });
};

const deleteProduct = async ({ id }) => {
  const product = await findById(id);
  if (!product) return null;
  return await ProductModel.deleteProduct(id);
};

module.exports = {
  getAll,
  findById,
  createNewProduct,
  updateProduct,
  deleteProduct,
};
