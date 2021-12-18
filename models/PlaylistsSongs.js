const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class PlaylistsSongs extends Model {}

PlaylistsSongs.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    playlist_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
          model: 'playlist',
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
    modelName: 'playslists_songs',
  }
);

module.exports = PlaylistsSongs;