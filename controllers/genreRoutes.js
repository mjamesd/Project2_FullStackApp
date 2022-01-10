const router = require('express').Router();
const { Artist, Song, Genre } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
        const genresData = await Genre.findAll({
            order: [
                ['name', 'ASC']
            ],
            include: [
                {
                    model: Artist,
                    include: [ Song ]
                }
            ]
        });
        const genres = genresData.map((i) => i.get({ plain: true }));
        res
            .status(200)
            .render('Genres/index', { layout: 'main', genres: genres, logged_in: req.session.logged_in });
    } catch (err) {
        res
            .status(500)
            .render('error', { message: err })
    }
});

router.get('/add', withAuth, (req, res) => {
    res
        .status(200)
        .render('Genres/add');
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

router.get('/:id', async (req, res) => {
    try {
        const genresData = await Genre.findAll({
            where: {
                id: req.params.id
            },
            order: [
                ['name', 'ASC']
            ],
            include: [
                {
                    model: Artist,
                    include: [ Song ]
                },
            ]
        });
        const genres = genresData.map(i => i.get({ plain: true }));
        const genre = genres[0];
        res
            .status(200)
            .render('Genres/view', { layout: 'main', genre: genre, logged_in: req.session.logged_in });
    } catch (err) {
        res
            .status(500)
            .render('error', { message: err })
    }
});

// no route for delete, handled by front-end JS ~/public/deleteGenre.js


module.exports = router;