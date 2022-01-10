const router = require('express').Router();
const { Playlist, PlaylistSong, Song, Genre, ArtistGenre, ArtistSong, Artist, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const playlistData = await Playlist.findAll(
      {
        include: [{ model: User, }, { model: Song, include: [{ model: Artist }] }]
      }
    )
    let playlists = playlistData.map((playlist) => {
      return playlist.get({ plain: true });
    })
    res.status(200).render('Playlists/index', { playlists, logged_in: req.session.logged_in })
  }
  catch (err) {
    res.status(500).json(err)
  }

});

// Display add a Song to a Playlist form
router.get('/addSong/:song_id', withAuth, async (req, res) => {
  try {
    const playlists = await Playlist.findAll({
      raw: true,
      where: {
        user_id: req.session.user_id
      }
    });
    const songsData = await Song.findAll({
      where: {
        id: req.params.song_id
      },
      include: [Artist]
    });
    const songs = songsData.map(i => i.get({ plain: true }));
    const song = songs[0];
    res
      .status(200)
      .render('Playlists/addSong', { song: song, playlists: playlists, logged_in: req.session.logged_in });
  } catch (err) {
    res
      .status(500)
      .json(err)
  }
});

router.get('/removeSong/:playlist_id/:song_id', withAuth, async (req, res) => {
  try {
    await PlaylistSong.destroy({
      where: {
        playlist_id: req.params.playlist_id,
        song_id: req.params.song_id
      }
    });
    req.session.message = 'Song sucessfully removed from this playlist.';
    res.redirect(`/playlists/${req.params.playlist_id}`);
  } catch (err) {
    res
      .status(500)
      .json(err)
  }
});

// Display create Playlist form
router.get('/add', withAuth, (req, res) => {
  res
    // .status(200)
    .render('Playlists/add', { logged_in: req.session.logged_in, user_id: req.session.user_id });
});

router.put('/:id', async (req, res) => {
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

router.get('/:id', async (req, res) => {
  try {
    const singlePlaylist = await Playlist.findAll(
      {
        where: {
          'id': req.params.id
        },
        include: [{ model: Song, include: [{ model: Artist }] }]
      })
    const playlist = singlePlaylist.map((song) => song.get({ plain: true }));
    const isMine = (playlist[0].user_id == req.session.user_id) ? true : false;
    res
      .status(200)
      .render('Playlists/view', { playlist: playlist[0], logged_in: req.session.logged_in, isMine: isMine });
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

// router.delete('/deletesong/:id', async (req, res) => {
//   // delete a category by its `id` value
//   try {
//     const delPlaylistSongData = await PlaylistSong.destroy({
//       where: {
//         id: req.params.id
//       }
//     })
//     res.status(200).json(delPlaylistSongData)
//   }
//   catch (err) {
//     res.status(500).json(err)
//   }
// });

module.exports = router;