const router = require('express').Router();
const homeRoutes = require('./homeRoute.js');
const landing = require('./landing-route.js');
const apiRoutes = require('./api');
const storyLineRoutes = require('./storyLineRenderRoute.js');
const storyRoutes = require('./storyRenderRoute.js');
const pingpongRoutes = require('./pingpong.js');
//View routes
router.use('/', homeRoutes);

//API routes
router.use('/api', apiRoutes);
//Storyline routes
router.use('/storyline', storyLineRoutes);

router.use('/landing-route', landing);
router.use('/story', storyRoutes);
router.use('/pingpong', pingpongRoutes);

module.exports = router;
