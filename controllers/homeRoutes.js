const router = require('express').Router();
const { Artist, ArtistGenre, ArtistSong, Genre, Playlist, PlaylistSong, Search, Song, User } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const artists = await Artist.findAll(
      {
        raw: true,
        attributes: ["id"],
      }
    );
    const pickOne = Math.floor(Math.random() * artists.length) + 1;
    const artist = await Artist.findAll({
      raw: true,
      where: {
        id: pickOne,
      },
      include: [
        {
          model: Song,
        },
        {
          model: Genre
        }
      ]
    });

    res.render('homepage', {
      layout: 'main',
      artist: artist,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res
      .status(500)
      .render('500', { message: err });
    // res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  // else
  res.render('login');
});


module.exports = router;