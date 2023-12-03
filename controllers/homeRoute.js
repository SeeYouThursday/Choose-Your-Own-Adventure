const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Story, StoryLine } = require('../models');

router.get('/', async (req, res) => {
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

router.get('/home', async (req, res) => {
  try {
    res.render('homepage', { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const myStories = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: StoryLine }],
    });

    const stories = myStories.get({ plain: true });
    console.log(stories);
    res.render('test-dashboard', {
      ...stories,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    //TODO insert modal for 'you're already logged in
    res.redirect('/dashboard');
    return;
  }
  res.render('signup');
});

//Get Specific Story Choice Set
router.get('/storyline/:id', withAuth, async (req, res) => {
  try {
    const storyData = await StoryLine.findByPk(req.params.id, {});

    const storyline = storyData.get({ plain: true });
    //TODO: replace with new handlebars file after complete
    res.render('story', { ...storyline, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get Specific Story Choice Set //TODO make sure render is set properly
router.get('/story/:id', async (req, res) => {
  try {
    const storyData = await Story.findByPk(req.params.id, {});

    const story = storyData.get({ plain: true });

    res.render('test-new-story', {
      ...story,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
