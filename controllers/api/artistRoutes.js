const router = require('express').Router();
const { Artist } = require('../../models');

// Prefix of these routes is '/api/artists'

// Create a new artist
router.post('/', async (req, res) => {
    try {
        const artistData = await Artist.create(req.body);
        // res.status(200).json(artistData);
        res.render('new-artist', {artist: artistData});
    } catch (err) {
        res.status(400).json(err);
    }
});