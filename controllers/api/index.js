const router = require('express').Router();
const userRoutes = require('./userRoutes');
const artistRoutes = require('./artistRoutes');
const songRoutes = require('./songRoutes');
const songRoutes = require('./songRoutes');
// const artistRoutes = require('./artistRoutes');

// Prefix of these routes is '/api'

router.use('/users', userRoutes);
router.use('/artists', artistRoutes);
router.use('/songs', songRoutes);


module.exports = router;