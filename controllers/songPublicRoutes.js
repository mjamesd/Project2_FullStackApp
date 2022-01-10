const router = require('express').Router();
const { Artist, Song, Genre } = require('../models');
const withAuth = require('../utils/auth');

// Prefix of these routes is '/songs'

// GET-ALL songs
router.get('/', async(req, res) => {
    try {
        const songsData = await Song.findAll({
            order: [
                ['name', 'ASC'],
            ],
            include: [{
                model: Artist,
                include: [Genre]
            }]
        });
        const songs = songsData.map((i) => i.get({ plain: true }));
        res
            .status(200)
            .render('Songs/index', { songs: songs, logged_in: req.session.logged_in });
    } catch (err) {
        res
            .status(400)
            .json(err);
    }
});

// GET-ONE song
router.get('/:id', async(req, res) => {
    try {
        const songData = await Song.findAll({
            where: {
                id: req.params.id
            },
            include: [{
                model: Artist,
                include: [Genre]
            }]
        });
        let song = songData.map((i) => i.get({ plain: true }));
        song = song[0];
        res
            .status(200)
            .render('Songs/view', { song: song, logged_in: req.session.logged_in });
    } catch (err) {
        res
            .status(500)
            .json(err);
    }
});

// Display "Create new Song" page
router.get('/add', withAuth, async(req, res) => {
    res
        .status(200)
        .render('Songs/add');
});

// Display "Edit Song" page
router.get('/edit/:id', withAuth, async(req, res) => {
    try {
        const songData = await Song.findAll({
            where: {
                id: req.params.id
            },
            include: [{
                model: Artist,
                include: [Genre]
            }]
        });
        let song = songData.map((i) => i.get({ plain: true }));
        song = song[0];
        res
            .status(200)
            .render('Songs/edit', { song: song });
    } catch (err) {
        res
            .status(500)
            .json(err);
    }
});

router.delete("/:id", withAuth, async(req, res) => {
    try {
        const deletedSong = await Song.destroy(req.params.id, { raw: true });
        res
            .status(200)
            .json(deletedSong)
    } catch (err) {
        res
            .status(500).json(err)


    }
})


module.exports = router;