const router = require('express').Router();
const { Artist, Song, Genre } = require('../models');
const withAuth = require('../utils/auth');

router.get('/add', withAuth, (req, res) => {
    res
        .status(200)
        .render('Genres/add');
});

router.get('/view', async (req, res) => {
    try {
        const genres = await Genre.findAll({
            raw: true,
            order: [
                ['name', 'ASC']
            ],
            include: [
                {
                    model: Artist,
                }
            ]
        });
        res
            .status(200)
            .render('Genres/index', { layout: 'main', genres: genres });
    } catch (err) {
        res
            .status(500)
            .render('error', { message: err })
    }
});

router.get('/view/:id', async (req, res) => {
    try {
        const genre = await Genre.findByPk(req.params.id, {
            raw: true,
            where: {
                id: req.params.id
            },
            order: [
                ['name', 'ASC']
            ],
            include: [
                {
                    model: Artist
                },
            ]
        });
        if (!genre) {
            throw new Error(`No genre found.`);
        }
        res
            .status(200)
            .render('Genre/view', { layout: 'main', genre: genre });
    } catch (err) {
        res
            .status(500)
            .render('error', { message: err })
    }
});

router.get('/update/:id', withAuth, async (req, res) => {
    try {
        const genre = await Genre.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if (!genre) {
            throw new Error(`No genre found.`);
        }
        res
            .status(200)
            .render('Genre/update', { genre: genre });
    } catch (err) {
        res
            .status(500)
            .render('error', { message: err })
    }
});

// no route for delete, handled by front-end JS ~/public/deleteGenre.js


module.exports = router;