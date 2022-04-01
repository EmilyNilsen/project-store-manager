const { DB } = require('../db.config');

const getAll = `SELECT * FROM ${DB}.products ORDER BY id ASC;`;

const getById = `SELECT * FROM ${DB}.products WHERE id=?;`;

const create = `INSERT INTO ${DB}.products (name, quantity) VALUES (?, ?);`;

const update = `UPDATE ${DB}..products SET name=?, quantity=? WHERE id=?;`;

const deleteProduct = `DELETE FROM ${DB}..products WHERE id=?;`;

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteProduct,
};
