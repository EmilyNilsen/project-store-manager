const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
  HOST: 'us-cdbr-east-05.cleardb.net',
  USER: 'bbf8351727d70b',
  PASSWORD: '965d7ed4',
  DB: 'heroku_09f15076813b26b',
});

module.exports = connection;
