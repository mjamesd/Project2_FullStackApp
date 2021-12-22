const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Search extends Model { }

Search.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    term: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'search',
  }
);

module.exports = Search;