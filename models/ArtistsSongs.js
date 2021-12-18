const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class ArtistsSongs extends Model {}

ArtistsSongs.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    artist_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
          model: 'artist',
          key: 'id'
      }
    },
    song_id: {
        type: DataTypes.STRING,
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
    modelName: 'artists_songs',
  }
);

module.exports = ArtistsSongs;