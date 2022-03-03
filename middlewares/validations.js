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

const validateProductIdOfSaleItem = (req, res, next) => {
  const havePId = req.body.some(({ productId }) => productId);
  if (!havePId) {
    return res.status(400).json({ message: '"productId" is required' });
  } next();
  };

  const validateQuantityOfSaleItem = (req, res, next) => {
    const haveQuantity = req.body.some(({ quantity }) => quantity);
    if (!haveQuantity) {
      return res.status(400).json({ message: '"quantity" is required' });
    } next();
  };
  
  const validateQuantitySales = (req, res, next) => {
    const higherThanZero = req.body.some(({ quantity }) => quantity > 0);
    if (!higherThanZero) {
      return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
    } next();
  };

module.exports = {
  validateName,
  validateQuantity,
  validateQuantityOfSaleItem,
  validateQuantitySales,
  validateProductIdOfSaleItem,
};
