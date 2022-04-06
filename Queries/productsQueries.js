require('dotenv').config();

const getAll = `SELECT * FROM ${process.env.DB_NAME}.products ORDER BY id ASC;`;

const getById = `SELECT * FROM ${process.env.DB_NAME}.products WHERE id=?;`;

const create = `INSERT INTO ${process.env.DB_NAME}.products (name, quantity) VALUES (?, ?);`;

const update = `UPDATE ${process.env.DB_NAME}.products SET name=?, quantity=? WHERE id=?;`;

const deleteProduct = `DELETE FROM ${process.env.DB_NAME}.products WHERE id=?;`;

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteProduct,
};
