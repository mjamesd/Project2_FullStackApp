const router = require('express').Router();
const { Artist, Song } = require('../../models');
const withAuth = require('../../utils/auth');

// Prefix of these routes is '/api/artists'

// GET route for artist
router.get('/', withAuth, async (req, res) => {
    try {
        const artists = await Artist.findAll({
            raw: true,
            order: [
                ['name', 'ASC'],
            ]
        });
        res
            .status(200)
            .render('Artists/admin/index', {layout: 'admin', artists: artists});
    } catch (err) {
        res
            .status(400)
            .json(err);
    }
});

// for search
router.get('/search/:term', async (req, res) => {
    try {
        const results = await Artist.findAll({
            raw: true,
            where: {
                name: req.params.term
            }
        });
        res
            .status(200)
            .json(results);
    } catch (err) {
        res
            .status(500)
            .json(err);
    }
});

// View Artist
router.get('/view/:id', withAuth, async (req, res) => {
    try {
        const artist = await Artist.findAll({
            raw: true,
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: Song
                }
            ]
        });
        res
            .status(200)
            .render('Artists/admin/view', { layout: 'admin', artist: artist });
    } catch (err) {
        res
            .status(500)
            .json(err);
    }
});

// Display create new artist page
router.get('/add', withAuth, async (req, res) => {
    res
        .status(200)
        .render('Artists/admin/add', {layout: 'admin'});
});

// Create a new artist
router.post('/add', withAuth, async (req, res) => {
    try {
        const artistData = await Artist.create(req.body);
        res
            .status(200)
            .json(artistData);
        // res.redirect(200,'/api/artists');
    } catch (err) {
        res
            .status(500)
            .json(err);
    }
});

// Display edit Artist page
router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        const artist = await Artist.findByPk(req.params.id, {raw: true});
        res
            .status(200)
            .render('Artists/admin/edit', { layout: 'admin', artist: artist });
    } catch (err) {
        res
            .status(500)
            .json(err);
    }
});

// Edit an Artist
router.put('/edit/:id', withAuth, async (req, res) => {
    try {
        const artist = await Artist.update(
            {
                name: req.body.name,
                imgur_url: req.body.imgur_url
            },
            {
                where: {
                    id: req.body.id
                }
            }
        );
        req.session.message = `Artist "${req.body.name}" updated successfully.`;
        req.session.message_status = true;
        res
            .status(200)
            .render('Artists/admin/index', { layout: 'admin'});
    } catch (err) {
        res
            .status(500)
            .json(err);
    }
});

module.exports = router;