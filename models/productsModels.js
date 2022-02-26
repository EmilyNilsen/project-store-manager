const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products ORDER BY id ASC;',
  );
  return products;
};

const getById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id=?;';
  const [product] = await connection.execute(query, [id]);
  if (product.length === 0) return null;
  return product[0];
};

const creatadNewProduct = async ({ name, quantity }) => {
  const [product] = await connection.execute(
    `INSERT INTO 
    products (name, quantity)
  VALUES
    (?, ?);`,
    [name, quantity],
  );

  const getProductById = await getById(product.insertId); 

  return getProductById;
};

module.exports = {
  getAll,
  getById,
  creatadNewProduct,
};
