const ProductServices = require('../services/productsServices');

const listProducts = async (_req, res, next) => {
  try {
  const products = await ProductServices.getAll();
  res.status(200).json(products);
  } catch (e) {
    next(e);
  }
};

const getProductById = async (req, res, _next) => {
const { id } = req.params;

const product = await ProductServices.findById(id);

if (!product) return res.status(404).json({ message: 'Product not found' });

res.status(200).json(product);
};

const newProductBD = async (req, res, next) => {
  try {
    const { name, quantity } = req.body;
    const product = await ProductServices.createdNewProductService({ name, quantity });
    if (product.code) return res.status(product.code).json({ message: product.message });
    res.status(201).json(product);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  listProducts,
  getProductById,
  newProductBD,
};
