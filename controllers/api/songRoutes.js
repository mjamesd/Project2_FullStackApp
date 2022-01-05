const router = require('express').Router();
const { Artist, Song } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const dbArtistData = await Song.findAll({
            order: [
                ['name', 'ASC']
            ],
            include: [
                {
                    model: Artist,
                },
            ]
        });
        res.json(dbArtistData)
        console.log('artist data');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

router.get('/:id', async (req, res) => {
    try {
        const song = await Song.findOne(
            {
                raw: true,
                include: [
                    {
                        model: Artist,
                    },
                ],
            }
        );
        res.render('songs-byId', {song});
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/byArtist/:id', async (req, res) => {
    try {
        const songs = await Song.findAll(
            {
                raw: true,
                include: [
                    {
                        model: Artist,
                        where: {
                            'id': req.params.id,
                        }
                    },
                ],
            }
        );
        res.render('songs-byArtist', {songs: songs, artist: songs[0]["artists.name"]});
    } catch (err) {
        res.status(400).json(err);
    }
});







module.exports = router;