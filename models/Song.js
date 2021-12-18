const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Song extends Model {}

Song.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    song_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    songImg_url: {
        type: DataTypes.STRING,
        allowNull: true
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'song',
  }
);

module.exports = Song;