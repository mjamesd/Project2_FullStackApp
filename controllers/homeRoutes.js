const router = require('express').Router();
const { Artist, ArtistGenre, ArtistSong, Genre, Playlist, PlaylistSong, Search, Song, User } = require('../models');
const withAuth = require('../utils/auth');

// HOMEPAGE ROUTE
router.get('/', async (req, res) => {
  try {
    let artists = await Artist.findAll(
      {
        raw: true,
        attributes: ["id"],
      }
    );
    const randomArtistId = artists[Math.floor(Math.random() * artists.length)].id;
    const artistData = await Artist.findAll({
      where: {
        id: randomArtistId
      },
      limit: 1,
      include: [Song, Genre]
    });
    let artist = artistData.map((i) => {
      return i.get({ plain: true })
    });
    artist = artist[0]; // there is only one, but we need to use findAll so that we can use .map & .get

    console.log('-----------LOGGED IN?------>>>>>>', req.session.logged_in);

    res
      .status(200)
      .render('homepage', {
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

router.get('/mine', withAuth, async (req, res) => {
  try {
    const playlistData = await Playlist.findAll(
      {
        where: {
          user_id: req.session.user_id
        },
        include: [{ model: User, },{ model: Song, include: [{ model: Artist }] }]
      }
    )
    let playlists = playlistData.map((playlist) => {
      return playlist.get({ plain: true });
    })
    res.status(200).render('Playlists/index', { playlists: playlists, logged_in: req.session.logged_in, isMine: true })
  }
  catch (err) {
    res.status(500).json(err)
  }
});

// LOGIN ROUTE
router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  // else
  res.render('login');
});

// new user sign up
router.post('/signup', async (req, res) => {
  const userSignup = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };

// new user sign up
// const userSignup = {

//   username: req.body.username,
//   email: req.body.email,
//   password: req.body.password,
// };

// const newuser = new User(userSignup);
// newuser.save(function (err, newuser) {
//   if (err) {
//     console.log(err);
//   }
//   req.session.user = newuser;
//   req.session.loggedIn = true;
//   req.session.save();
router.post('/signup', (req, res) => {
  User.create({
    name: req.body.userName,
    email: req.body.userEmail,
    password: req.body.userPassword,
  }).then(userinfo => {

    req.session.save(() => { req.session.id = userinfo.id; req.session.logged_in = false; req.session.user = userinfo; res.json(userinfo) }).catch(err => { console.log(err) })
  });
});

  
module.exports = router;