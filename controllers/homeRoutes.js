const router = require('express').Router();
const session = require('express-session');
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
    res.redirect('/');
    return;
  }

  res.render('login');
});


 // new user sign up
 const userSignup= {

  username: req.body.username,
  email: req.body.email,
  password: req.body.password,
};

const newuser = new User(userSignup);
newuser.save(function (err, newuser) {
  if (err) {
      console.log(err);
}
  req.session.user = newuser;
  req.session.loggedIn = true;
  req.session.save();


module.exports = router;
});
