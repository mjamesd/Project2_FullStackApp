const router = require('express').Router();
const { Playlist, PlaylistSong, Song, Genre, ArtistGenre, ArtistSong, Artist} = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    // find all categories
    // be sure to include its associated Products
    try {
      const userPlaylists = await Playlist.findAll(
        {
          where: {
              user_id: req.session.user_id
          }
        }
      )
      res.status(200).json(userPlaylists)
    }
    catch (err) {
      res.status(500).json(err)
    }
    
  });


router.put('/addsong/:songID/:playlistID', async (req, res) => {
    // update a category by its `id` value
    try {
      const addSongData = await PlaylistSong.create(req.body)
      res.status(200).json(addSongData)
    }
    catch (err) {
      res.status(500).json(err)
    }
  });



  module.exports = router;