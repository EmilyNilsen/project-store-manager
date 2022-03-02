const SaleServices = require('../services/salesServices');

const getAllSales = async (_req, res, next) => {
  try {
    const sales = await SaleServices.getAllSales();
    
    res.status(200).json(sales);
  } catch (err) {
    next(err);
  }
};

const getSaleById = async (req, res, _next) => {
  const { id } = req.params;

  const sale = await SaleServices.getSaleById(id);
  if (!sale) return res.status(404).json({ message: 'Sale not found' });
  res.status(200).json(sale);
};

const createSale = async (req, res, _next) => {
const sales = req.body;
const sale = await SaleServices.createNewSale(sales);
res.status(201).json(sale);
};

module.exports = {
  getAllSales,
  getSaleById,
  createSale,
};
