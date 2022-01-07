const router = require('express').Router();
const { Artist, Song, Genre } = require('../models');
const { sequelize } = require('../models/Artist');
const withAuth = require('../utils/auth');

// Prefix of these routes is '/songs'

// GET-ALL songs
router.get('/', async (req, res) => {
    try {
        const songsData = await Song.findAll({
            order: [
                ['name', 'ASC'],
            ],
            include: [
                {
                    model: Artist,
                    include: [ Genre ]
                }
            ]
        });
        const songs = songsData.map((i) => i.get({ plain: true }));
        res
            .status(200)
            .render('Songs/index', { songs: songs });
    } catch (err) {
        res
            .status(400)
            .json(err);
    }
});

// GET-ONE song
router.get('/:id', async (req, res) => {
    try {
        const songData = await Song.findAll({
            where: {
                id: req.params.id
            },
            include: [{
                model: Artist,
                include: [ Genre ]
            }]
        });
        let song = songData.map((i) => i.get({ plain: true }));
        song = song[0];
        res
            .status(200)
            .render('Songs/view', { song: song });
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
                include: [ Genre ]
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

module.exports = router;