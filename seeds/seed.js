const sequelize = require('../config/connection');
const { Artist, Song, Playlist, Genre, Search, User, ArtistSong, ArtistGenre, PlaylistSong } = require('../models');
const artistData = require('./artist-seeds');
const artistGenreData = require('./artistsGenres-seeds');
const artistSongData = require('./artistSong-seeds');
const playlistData = require('./playlist-seeds.js')
const playlistSongData = require('./playlistSong-seeds.js')


const songData = require('./songs-seeds');
const genreData = require('./genre-seeds')
const userData = require('./Users.json')


const bulkCreateOptions = {
  individualHooks: true,
  returning: true,
};

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  for (var i = 0; i < artistData.length; i++) {
    // console.log('looping!', artistData[i])
    await Artist.create(artistData[i])
  }

  // await Artist.bulkCreate(artistData, bulkCreateOptions);

  for (var i = 0; i < songData.length; i++) {
    // console.log('looping!', songData[i])
    await Song.create(songData[i])
  }

  // await Song.bulkCreate(songData, bulkCreateOptions);

  for (var i = 0; i < genreData.length; i++) {
    // console.log('looping!', genreData[i])
    await Genre.create(genreData[i])
  }

  // await Genre.bulkCreate(genreData, bulkCreateOptions);

  // await Search.bulkCreate(searchData, bulkCreateOptions);

  for (var i = 0; i < userData.length; i++) {
    console.log('looping!', userData[i])
    await User.create(userData[i])
  }

  // await User.bulkCreate(userData, bulkCreateOptions);

  for (var i = 0; i < playlistData.length; i++) {
    // console.log('looping!', playlistData[i])
    await Playlist.create(playlistData[i])
  }

  // await Playlist.bulkCreate(playlistData, bulkCreateOptions);

  await ArtistSong.bulkCreate(artistSongData, bulkCreateOptions);

  await ArtistGenre.bulkCreate(artistGenreData, bulkCreateOptions);

  await PlaylistSong.bulkCreate(playlistSongData, bulkCreateOptions);

  console.log('===================================================================');
  console.log('||                                                               ||');
  console.log('||          YOU MUST RUN THE "CREATE FUNCTION" QUERIES IN        ||');
  console.log('||          ~/db/functions.sql                                   ||');
  console.log('||                                                               ||');
  console.log('===================================================================');

  process.exit(0);
};

seedDatabase();
