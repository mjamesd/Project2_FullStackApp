const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Artist extends Model {}

Artist.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    artist_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    artistImg_url: {
        type: DataTypes.STRING,
        allowNull: true
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'artist',
  }
);

module.exports = Artist;