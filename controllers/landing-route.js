const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', withAuth, async(req, res) => {
    try {
        if (req.session.logged_in) {
            res.redirect('/home');
            return;
          }
          res.render('landingpage', { logged_in: req.session.logged_in });
        } catch (err) {
          res.status(500).json(err);
        }
      });

module.exports = router;