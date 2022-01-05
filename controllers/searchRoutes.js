const router = require('express').Router();
const { Artist, ArtistGenre, ArtistSong, Genre, Playlist, PlaylistSong, Search, Song, User } = require('../models');

// These routes are at ~/search

// Display search bar
router.get('/', async (req, res) => {
    res
        .status(200)
        .render('Searches/search', { layout: 'main' });
});

module.exports = router;