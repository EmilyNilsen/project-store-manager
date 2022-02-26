const SaleServices = require('../services/salesServices');

const listSales = async (_req, res, next) => {
  try {
    const sales = await SaleServices.getAllSalesServices();
    
    res.status(200).json(sales);
  } catch (err) {
    next(err);
  }
};

const listSaleById = async (req, res, _next) => {
  const { id } = req.params;

  const sale = await SaleServices.findByIdService(id);
  if (!sale) return res.status(404).json({ message: 'Sale not found' });
  res.status(200).json(sale);
};

module.exports = {
  listSales,
  listSaleById,
};
