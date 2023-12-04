const router = require('express').Router();
const homeRoutes = require('./homeRoute.js');
const landing = require('./landing-route.js');
const apiRoutes = require('./api');

//View routes
router.use('/', homeRoutes);
// Individual Post Routes
// router.use('/dashboard', postRoutes);
// router.use('/post', postRoutes);
//API routes
router.use('/api', apiRoutes);
// router.use('/*', homeRoutes);

router.use('/landing-route', landing);

module.exports = router;
