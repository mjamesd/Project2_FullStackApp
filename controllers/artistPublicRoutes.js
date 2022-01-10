const router = require('express').Router();
const { Artist, ArtistGenre, ArtistSong, Genre, Playlist, PlaylistSong, Search, Song, User } = require('../models');

// These routes are at ~/artists

// Display all artists
router.get('/', async (req, res) => {
    try {
        const artists = await Artist.findAll({
            raw: true,
            order: [
                ['name', 'ASC']
            ]
        });
        res
            .status(200)
            .render('Artists/index', { artists: artists, logged_in: req.session.logged_in });
            // .json(artists)
    } catch (err) {
        req.session.message = `Could not retrieve Artists.`;
        res
            .status(500)
            .render('500', { message: req.session.message });
    }
});

// Display one artist, by `id`, including their songs
router.get('/:id', async (req, res) => {
    try {
        const artist = await Artist.findAll({
            raw: true,
            order: [
                ['name', 'ASC']
            ], where: {
                'id': req.params.id,
            }, include: [
                {
                    model: Song,
                }
            ]
        });
        res
            .status(200).render('Artists/view', { artist: artist, logged_in: req.session.logged_in });
            // .json(artist)
    } catch (err) {
        req.session.message = `Could not retrieve Artists.`;
        res
            .status(500)
            .render('500', { message: req.session.message });
    }
});

module.exports = router;