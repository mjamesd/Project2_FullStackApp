const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class ArtistsGenres extends Model {}

ArtistsGenres.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'artist',
          key: 'id'
      }
    },
    genre_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'song',
            key: 'id'
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'artists_genres',
  }
);

module.exports = ArtistsGenres;