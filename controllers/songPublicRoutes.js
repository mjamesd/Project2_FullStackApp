const router = require('express').Router();
const { Artist, Song } = require('../../models');
const withAuth = require('../../utils/auth');



// Prefix of these routes is '/api/songs'
// GET route for artist
router.get('/', withAuth, async(req, res) => {
    try {
        const artists = await Song.findAll({
            raw: true,
            order: [
                ['name', 'ASC'],
            ]
        });
        res
            .status(200)
            .render('Artists/admin/index', { layout: 'admin', artists: artists });
    } catch (err) {
        res
            .status(400)
            .json(err);
    }
});

// for search
router.get('/search/:term', async(req, res) => {
    try {
        const results = await Song.findAll({
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

// View All of the songs
router.get('/view/:id', withAuth, async(req, res) => {
    try {
        const song = await Song.findAll({
            raw: true,
            where: {
                id: req.params.id
            },
            include: [{
                model: Artist,
            }]
        });
        res
            .status(200)
            .render('Artists/admin/view', { layout: 'admin', song: song });
    } catch (err) {
        res
            .status(500)
            .json(err);
    }
});


// Create a new song
router.post('/add', withAuth, async(req, res) => {
    try {
        const songData = await Song.create(req.body);
        res
            .status(200)
            .json(songData);
        // res.redirect(200,'/api/artists');
    } catch (err) {
        res
            .status(500)
            .json(err);
    }
});

// Display edit Song page
router.get('/edit/:id', withAuth, async(req, res) => {
    try {
        const song = await Song.findByPk(req.params.id, { raw: true });
        res
            .status(200)
            .render('Artists/admin/edit', { layout: 'admin', song: song });
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