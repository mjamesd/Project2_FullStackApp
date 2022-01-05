// Schema objects
const Artist = require('./Artist');
const Song = require('./Song');
const Playlist = require('./Playlist');
const Genre = require('./Genre');
const Search = require('./Search');
const User = require('./User');
// Through tables
const ArtistSong = require('./ArtistSong');
const ArtistGenre = require('./ArtistGenre');
const PlaylistSong = require('./PlaylistSong');

// Associations
Artist.belongsToMany(Song, {through: ArtistSong});
Song.belongsToMany(Artist, { through: ArtistSong});

Artist.belongsToMany(Genre, {through: ArtistGenre});
Genre.belongsToMany(Artist, {through: ArtistGenre});

Song.belongsToMany(Playlist, {through: PlaylistSong});
Playlist.belongsToMany(Song, { through: PlaylistSong});

User.hasMany(Playlist);
Playlist.belongsTo(User);

// Exports
module.exports = {
  Artist,
  Song,
  Playlist,
  Genre,
  Search,
  User,
  ArtistSong,
  ArtistGenre,
  PlaylistSong
};