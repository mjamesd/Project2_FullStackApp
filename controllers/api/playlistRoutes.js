const router = require('express').Router();
const { Playlist, PlaylistSong, Song, Genre, ArtistGenre, ArtistSong, Artist} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    // find all categories
    // be sure to include its associated Products
    try {
      const playlistData = await Playlist.findAll(
        {
            include: [{model: Song, include: [{model: Artist}]}]
        }
      )
      res.status(200).json(playlistData)
    }
    catch (err) {
      res.status(500).json(err)
    }
    
  });
  
  router.get('/:id', withAuth, async (req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
    try {
      const singlePlaylistData = await Playlist.findByPk(req.params.id, 
        {
            include: [{model: Song, include: [{model: Artist}]}]
        })
        res.status(200).json(singlePlaylistData)
    }
    catch (err) {
      res.status(500).json(err)
    }
  
  });
  
  router.post('/', withAuth, async (req, res) => {
    // create a new category
    try {
      const newPlaylistData = await Playlist.create(req.body)
      res.status(200).json(newPlaylistData)
    }
    catch (err) {
      res.status(400).json(err)
    }
  });
  
  router.put('/:id', withAuth, async (req, res) => {
    // update a category by its `id` value
    try {
      const updatePlaylistData = await Playlist.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      res.status(200).json(updatePlaylistData)
    }
    catch (err) {
      res.status(500).json(err)
    }
  });
  
  router.delete('/:id', withAuth, async (req, res) => {
    // delete a category by its `id` value
    try {
      const delPlaylistData = await Playlist.destroy({
        where: {
          id: req.params.id
        }
      })
      res.status(200).json(delPlaylistData)
    }
    catch (err) {
      res.status(500).json(err)
    }
  });
  
  module.exports = router;