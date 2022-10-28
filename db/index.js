const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('mydb', process.env.PG_USER, process.env.PG_Password, {
  host: 'localhost',
  dialect: 'postgres'
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;
