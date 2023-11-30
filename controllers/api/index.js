const router = require('express').Router();
const storyRoutes = require('./storyRoutes');
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/story', storyRoutes);

module.exports = router;
