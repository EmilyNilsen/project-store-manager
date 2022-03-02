const ProductServices = require('../services/productsServices');

const getAllProducts = async (_req, res, next) => {
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

const createProduct = async (req, res, next) => {
  try {
    const { name, quantity } = req.body;
    const product = await ProductServices.createNewProduct({ name, quantity });
    if (!product) return ({ code: 409, message: 'Product already exists' });
    res.status(201).json(product);
  } catch (e) {
    next(e);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, quantity } = req.body;
    const product = await ProductServices.updateProduct({ id, name, quantity });
    if (!product) return ({ code: 404, message: 'Product not found' });
    res.status(200).json(product);
  } catch (e) {
      next(e);
  }
};

const deleteProduct = async (req, res, next) => {
try {
  const { id } = req.params;
  const response = await ProductServices.deleteProduct({ id });
  if (response === null) return ({ code: 404, message: 'Product not found' });
  res.status(204).end();
} catch (e) {
  next(e);
}
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
