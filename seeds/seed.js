const sequelize = require('../config/connection');
const { Artist, Song, Playlist, Genre, Search, User, ArtistSong, ArtistGenre, PlaylistSong } = require('../models');

const artistData = require('./Artists.json');
const songData = require('./Songs.json');
const playlistData = require('./Playlists.json');
const genreData = require('./Genres.json');
const searchData = require('./Searches.json');
const userData = require('./Users.json');
const artistSongData = require('./ArtistSongs.json');
const artistGenreData = require('./ArtistGenres.json');
const playlistSongData = require('./PlaylistSongs.json');

const bulkCreateOptions = {
  individualHooks: true,
  returning: true,
};

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Artist.bulkCreate(artistData, bulkCreateOptions);

  await Song.bulkCreate(songData, bulkCreateOptions);

  await Playlist.bulkCreate(playlistData, bulkCreateOptions);

  await Genre.bulkCreate(genreData, bulkCreateOptions);

  await Search.bulkCreate(searchData, bulkCreateOptions);

  await User.bulkCreate(userData, bulkCreateOptions);

  await ArtistSong.bulkCreate(artistSongData, bulkCreateOptions);

  await ArtistGenre.bulkCreate(artistGenreData, bulkCreateOptions);

  await PlaylistSong.bulkCreate(playlistSongData, bulkCreateOptions);

  process.exit(0);
};

seedDatabase();