const ProductModel = require('../models/productsModels');

// const getNewProdutoWithId = (productData) => {
//   const { id, name, quantity } = productData;
//   return {
//     id,
//     name,
//     quantity,
//   };
// };

const getAll = async () => {
  const products = await ProductModel.getAll();
  return products;
};

const findById = async (id) => {
  const product = await ProductModel.getById(id);

  if (!product) return null;

  return product;
};

module.exports = {
  getAll,
  findById,
};
