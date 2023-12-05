const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect('/home');
      return;
    }
    res.render('landingpage', { layout: 'landing' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
