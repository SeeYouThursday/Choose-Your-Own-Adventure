const router = require('express').Router();
const { User, Story, StoryLine } = require('../models');
const withAuth = require('../utils/auth');

//Get Specific Storyline Set
router.get('/:id', withAuth, async (req, res) => {
  try {
    const storyData = await StoryLine.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
          exclude: ['password'],
        },
        {
          model: Story,
        },
      ],
    });

    const storyline = storyData.get({ plain: true });
    //TODO: replace with new handlebars file after complete
    res.render('test-story-flow', {
      ...storyline,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get Specific Story Choice Set //TODO make sure render is set properly
router.get('/story/:id', async (req, res) => {
  // !Needs to pull with the correct id -currently not working
  try {
    const storyData = await Story.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['id', 'username'],
          exclude: ['password'],
        },
        {
          model: StoryLine,
        },
      ],
    });

    const story = storyData.get({ plain: true });
    //TODO: replace with new handlebars file after complete
    res.render('test-story-flow', {
      ...story,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
