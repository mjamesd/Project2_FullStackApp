const router = require('express').Router();
const session = require('express-session');
const { Artist, ArtistGenre, ArtistSong, Genre, Playlist, PlaylistSong, Search, Song, User } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage

router.get('/', withAuth, async (req, res) => {
  if (session['logged_in']==true){
  try {
    let artists = await Artist.findAll(
      {
        raw: true,
        attributes: ["id"],
      }
    );
      
    for (let i = 0; i < artists.length; i++) {
      artists[i] = artists[i];
      let songs = await Song.findAll({
        raw: true,
        include: [
          {
            model: Artist,
            where: {
              id: artists[i].id,
            }
          }
        ]
      });
      artists[i].songs = songs;
      
    }
    console.log('-------------------ARTISTS------------------>', artists[2]);
    const randomArtistId = Math.floor(Math.random() * artists.length) + 1;
    const artist = await Artist.findByPk(randomArtistId, {
      raw: true,
    });
    const songs = await Song.findAll({
      raw: true,
      include: [
        {
          model: Artist,
          where: {
            id: randomArtistId
          }
        }
      ],
    });
    const genresData = await Genre.findAll({
      raw: true,
      include: [
        {
          model: Artist,
          where: {
            id: randomArtistId
          }
        }
      ],
    });
    let _genres = [];
    for (let i = 0; i < genresData.length; i++) {
      _genres.push(genresData[i].name)
    }
    const genres = _genres.join(', ');

    console.log('-----------LOGGED IN?------>>>>>>', req.session.logged_in);
    res.render('homepage', {
      layout: 'main',
      artist: artist,
      songs: songs,
      genres: genres,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res
      .status(500)
      .render('500', { message: err });
    // res.status(500).json(err);
  }

}else(res.redirect['/login'])
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
