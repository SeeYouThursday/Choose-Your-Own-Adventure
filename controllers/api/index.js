const router = require('express').Router();
const storyRoutes = require('./storyLineRoutes');
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/storyline', storyRoutes);
router.use('/story', storyRoutes);

module.exports = router;
