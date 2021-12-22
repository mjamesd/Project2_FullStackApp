const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const publicRoutes = require('./publicRoutes');

// Prefix of these routes is (nothing)

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
