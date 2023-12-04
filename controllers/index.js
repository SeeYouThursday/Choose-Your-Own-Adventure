const router = require('express').Router();
const homeRoutes = require('./homeRoute.js');
const apiRoutes = require('./api');
const storyRoutes = require('./storyRenderRoute.js');
//View routes
router.use('/', homeRoutes);

//API routes
router.use('/api', apiRoutes);
//Storyline routes
router.use('/storyline', storyRoutes);

module.exports = router;
