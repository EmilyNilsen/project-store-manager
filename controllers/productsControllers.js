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

const createProduct = async (req, res, _next) => {
    const { name, quantity } = req.body;
    const product = await ProductServices.createNewProduct({ name, quantity });
    if (!product) return res.status(409).json({ message: 'Product already exists' });
    res.status(201).json(product);
};

const updateProduct = async (req, res, _next) => {
    const { id } = req.params;
    const { name, quantity } = req.body;
    const product = await ProductServices.updateProduct({ id, name, quantity });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
};

const deleteProduct = async (req, res, _next) => {
  const { id } = req.params;
  const response = await ProductServices.deleteProduct({ id });
  if (response === null) return res.status(404).json({ message: 'Product not found' });
  res.status(204).end();
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
