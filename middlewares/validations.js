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

const validateProductIdOfSaleItem = (req, res) => {
    req.body.forEach(({ productId }) => {
      if (!productId) {
        return res.status(400).json({ message: '"productId" is required' });
      }
    });
  };

    const validateQuantityOfSaleItem = (req, res) => {
      req.body.forEach(({ quantity }) => {
        if (!quantity && typeof quantity !== 'number') {
          return res.status(400).json({ message: '"quantity" is required' });
        }
        if (quantity < 1) {
          return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
        }
    });
  };

  const validateSales = (req, res, next) => {
    try {
      validateProductIdOfSaleItem(req, res);
      validateQuantityOfSaleItem(req, res);
      next();
    } catch (e) {
      next(e);
    }
  };

module.exports = {
  validateName,
  validateQuantity,
  validateSales,
};
