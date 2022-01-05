const router = require('express').Router();
<<<<<<< HEAD
const session = require('express-session');
const { User } = require('../models');
=======
const { Artist, ArtistGenre, ArtistSong, Genre, Playlist, PlaylistSong, Search, Song, User } = require('../models');
>>>>>>> 0f74376178525507ed96b6bf060588e2c4db3b22
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage

router.get('/', withAuth, async (req, res) => {
  if (session['logged_in']==true){
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }

}else(res.redirect['/login'])
});
router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


module.exports = router;
