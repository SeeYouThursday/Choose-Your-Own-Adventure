const router = require('express').Router();
const storyRoutes = require('./storyRoutes');
const userRoutes = require('./userRoutes');
const storyLineRoutes = require('./storyLineRoutes');

router.use('/users', userRoutes);
router.use('/storyline', storyLineRoutes);
router.use('/story', storyRoutes);

module.exports = router;
