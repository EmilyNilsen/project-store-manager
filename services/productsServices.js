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

const createdNewProductService = async ({ name, quantity }) => {
  const getProducts = await getAll();
  if (getProducts.some((obj) => obj.name === name)) {
    return ({ code: 409, message: 'Product already exists' });
  }
  const newProduct = await ProductModel.creatadNewProduct({ name, quantity });
  return newProduct;
};

module.exports = {
  getAll,
  findById,
  createdNewProductService,
};
