require('dotenv').config();

const getAll = `SELECT * FROM ${process.env.DB}.products ORDER BY id ASC;`;

const getById = `SELECT * FROM ${process.env.DB}.products WHERE id=?;`;

const create = `INSERT INTO ${process.env.DB}.products (name, quantity) VALUES (?, ?);`;

const update = `UPDATE ${process.env.DB}.products SET name=?, quantity=? WHERE id=?;`;

const deleteProduct = `DELETE FROM ${process.env.DB}.products WHERE id=?;`;

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteProduct,
};
