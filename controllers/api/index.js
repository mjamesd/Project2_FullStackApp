const router = require('express').Router();
const userRoutes = require('./userRoutes');
const songRoutes = require('./songRoutes');
const artistRoutes = require('./artistRoutes');

// Prefix of these routes is '/api'

router.use('/users', userRoutes);
router.use('/songs', songRoutes);
router.use('/artists', artistRoutes);

module.exports = router;