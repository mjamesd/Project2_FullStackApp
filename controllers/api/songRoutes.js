const router = require('express').Router();
const { Artist, ArtistSong } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {

    Post.findAll({
            attributes: [
                'id',
                'name'
            ],
            order: [
                ['DESC']
            ],
            include: [{
                    model: Artist,
                    attributes: ['id', 'artist_id', 'name'],
                    include: {
                        model: ArtistSong,
                        attributes: ['id', 'artist_id', 'song_id']
                    }
                },
                {
                    model: ArtistSong,
                    attributes: ['id', 'song_id', 'artist_id']
                },
            ]
        })
        .then(dbArtistData => {
            res.json(dbArtistData)
            console.log('artist data');
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Post.findOne({
            where: {
                id: req.params.id
            },
            attributes: [
                'id',
                'song_id',
                'artist_id',
            ],
            include: [

                {
                    model: ArtistSong,
                    attributes: ['id', 'song_id', 'artist_id']
                },
                {
                    model: Artist,
                    attributes: ['id', 'name'],
                    include: {
                        model: Artist,
                        attributes: ['id', 'name', ]
                    }
                }
            ]
        })
        .then(dbArtistSong => {
            if (!dbArtistSong) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbArtistSong);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});