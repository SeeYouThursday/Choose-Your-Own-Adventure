const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Story, StoryLine } = require('../models');

router.get('/', async (req, res) => {
  try {
    // const postData = await Post.findAll({
    //   include: [
    //     {
    //       model: User,
    //       attributes: ['username'],
    //     },
    //     {
    //       model: Comment,
    //       attributes: ['content'],
    //       include: [{ model: User, attributes: ['username'] }],
    //     },
    //   ],
    // });

    // const posts = postData.map((post) => post.get({ plain: true }));

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

    res.render('dashboard', { ...stories, logged_in: req.session.logged_in });
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

module.exports = router;
