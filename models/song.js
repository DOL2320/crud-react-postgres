const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/index.js');

const Song = sequelize.define('song', {
  title: {
    type: DataTypes.STRING,
    allowNull: false 
  },
  album: {
    type: DataTypes.STRING
  }
}

module.exports = sequelize.models.Song;
