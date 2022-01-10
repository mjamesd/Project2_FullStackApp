const router = require('express').Router();
const { QueryTypes } = require('sequelize');
const { Song, ArtistSong, Artist } = require('../../models');
const withAuth = require('../../utils/auth');

// Prefix of these routes is '/api/songs'

// Search for a Song
router.get('/search/:term', async(req, res) => {
    try {
        // from https://stackoverflow.com/a/3339041/4249622
        const resultsData = await sequelize.query(
            `SELECT 
                id, name, 
                LEVENSHTEIN(name, '${req.params.term}') AS distance
            FROM song 
            WHERE 
                name LIKE "%${req.params.term}%"
            ORDER BY
                distance
                DESC`, {
                nest: true,
                type: QueryTypes.SELECT
            }
        );
        const results = JSON.stringify(resultsData[0], null, 2);
        res
            .status(200)
            .json(results);
    } catch (err) {
        res
            .status(500)
            .json(err);
    }
});


router.get('/', (req, res) => {
    Song.findAll({
            include: [
                Category,
                {
                    model: Artist,
                    through: ArtistSong,
                },
            ],
        })
        .then((dbSongsData) => res.json(dbSongsData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Song.findOne({
            include: [
                Category,
                {
                    model: Artist,
                    through: ArtistSong,
                },
            ],
        })
        .then((songsData) => res.json(songsData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
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

// Edit a song
router.put('/edit/:id', withAuth, async(req, res) => {
    try {
        const songData = await Song.update(req.body, { // raw: true ???
            where: {
                id: req.params.id
            }
        });
        res
            .status(200)
            .json(songData)
    } catch (err) {
        res
            .status(500)
            .json(err);
    }
});


router.delete("/:id", withAuth, async(req, res) => {
    try {
        const songData = await Song.destroy(req.params.id); // raw: true ???
        res
            .status(200)
            .json(songData)
    } catch (err) {
        res
            .status(500)
            .json(err)
    }
})


module.exports = router