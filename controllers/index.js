const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const artistPublicRoutes = require('./artistPublicRoutes');
const searchRoutes = require('./searchRoutes');
const songPublicRoutes = require('./songPublicRoutes');

// Prefix of these routes is ~ (nothing)

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/artists', artistPublicRoutes);
router.use('/search', searchRoutes);
//router.use('/songs', songPublicRoutes);

module.exports = router;