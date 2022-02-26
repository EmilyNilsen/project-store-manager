const ProductServices = require('../services/productsServices');

const listProducts = async (_req, res, _next) => {
  const products = await ProductServices.getAll();

  res.status(200).json(products);
};

const getProductById = async (req, res, _next) => {
const { id } = req.params;

const product = await ProductServices.findById(id);

if (!product) return res.status(404).json({ message: 'Product not found' });

res.status(200).json(product);
};

module.exports = {
  listProducts,
  getProductById,
};
