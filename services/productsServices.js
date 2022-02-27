const ProductModel = require('../models/productsModels');

const getAll = async () => {
  const products = await ProductModel.getAll();
  return products;
};

const findById = async (id) => {
  const product = await ProductModel.getById(id);

  if (!product) return null;

  return product;
};

const createNewProduct = async ({ name, quantity }) => {
  const getProducts = await getAll();
  if (getProducts.some((obj) => obj.name === name)) return null;
  const newProduct = await ProductModel.createNewProduct({ name, quantity });
  return newProduct;
};

const updateProduct = async ({ id, name, quantity }) => {
  const products = await getAll();
  const intId = parseInt(id, 10);
  if (!products.some((obj) => obj.id === intId)) return null;
  const updatedProduct = await ProductModel.updateProduct({ id, name, quantity });
  return updatedProduct;
};

module.exports = {
  getAll,
  findById,
  createNewProduct,
  updateProduct,
};
