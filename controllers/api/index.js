const router = require('express').Router();

const userRoutes = require('./userRoutes');
const playlistRoutes = require('./playlistRoutes');
const artistRoutes = require('./artistRoutes');
const songRoutes = require('./songRoutes');

// Prefix of these routes is '/api'

router.use('/users', userRoutes);
router.use('/playlists', playlistRoutes);
router.use('/artists', artistRoutes);
router.use('/songs', songRoutes);

module.exports = router;