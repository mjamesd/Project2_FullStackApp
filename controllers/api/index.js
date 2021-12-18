const router = require('express').Router();
const userRoutes = require('./userRoutes');

// Prefix of these routes is '/api'

router.use('/users', userRoutes);

module.exports = router;
