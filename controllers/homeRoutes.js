const router = require('express').Router();
const { Artist, ArtistGenre, ArtistSong, Genre, Playlist, PlaylistSong, Search, Song, User } = require('../models');
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
    res.redirect('/homepage');
    return;
  }

  res.render('login');
});
// User log out
(async () => {
  const wasLoggedIn = await new Authenticator().logout();
  if (wasLoggedIn) {
   User.success('Logout successful');
  }
  session.exit(0);
 })().catch(async (error) => {
  User.error(error);
  session.exit(1);
 });

module.exports = router;
