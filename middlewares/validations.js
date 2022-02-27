const validateName = (req, res, next) => {
  try {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  
  if (req.body.name.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  next();
  } catch (e) {
    next(e);
  }
};

const validateQuantity = (req, res, next) => {
  const { quantity } = req.body;
  if (!quantity && typeof quantity !== 'number') {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  if (quantity < 1) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  } next();
};

const validateProductIdSales = (req, res, next) => {
  try {
    const { ProductId } = req.body.some(({ productId }) => productId);
    if (!ProductId) return res.status(400).json({ message: '"productId" is required' });
  } catch (e) {
    next(e);
  }
};

const validateQuantitySales = (req, res, next) => {
  try {
    const { quantitySales } = req.body.some(({ quantity }) => quantity);
    if (!quantitySales) return res.status(400).json({ message: '"quantity" is required' });
    if (quantitySales < 1) {
      return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
    }
  } catch (e) {
    next(e);
  }
};

module.exports = {
  validateName,
  validateQuantity,
  validateProductIdSales,
  validateQuantitySales,
};
