const router = require('express').Router();
const { Playlist, PlaylistSong, Song, Genre, ArtistGenre, ArtistSong, Artist} = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
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


router.post('/addSong', async (req, res) => {
    // update a category by its `id` value
    console.log('--------------ADD SONG------------------->', req.body);
    try {
      const playlistSongData = await PlaylistSong.create(req.body);
      res
        .status(200)
        .json({ ok: playlistSongData })
    }
    catch (err) {
      res
        .status(500)
        .json(err)
    }
  });



  module.exports = router;