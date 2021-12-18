const Artist = require('./Artist');
const Song = require('./Song');
const Playlist = require('./Playlist');
const ArtistsSongs = require('./ArtistsSongs');
const PlaylistsSongs = require('./PlaylistsSongs')


Artist.belongsToMany(Song, {through: ArtistsSongs})
Song.belongsToMany(Artist, { through: ArtistsSongs})

Song.belongsToMany(Playlist, {through: PlaylistsSongs})
Playlist.belongsToMany(Song, { through: PlaylistsSongs})

module.exports = {
  Artist,
  Song,
  Playlist,
  ArtistsSongs,
  PlaylistsSongs
};