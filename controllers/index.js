const router = require('express').Router();
const homeRoutes = require('./homeRoute.js');
const apiRoutes = require('./api');
const storyLineRoutes = require('./storyLineRenderRoute.js');
const storyRoutes = require('./storyRenderRoute.js');
//View routes
router.use('/', homeRoutes);

//API routes
router.use('/api', apiRoutes);
//Storyline routes
router.use('/storyline', storyLineRoutes);
router.use('/story', storyRoutes);
module.exports = router;
