const router = require('express').Router();
const { User, Story, StoryLine } = require('../models');
const withAuth = require('../utils/auth');

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
          attributes: ['id', 'Option1', 'Option2'],
        },
      ],
    });

    const storyline = storyData.get({ plain: true });
    // console.log(storyline);

    //TODO: replace with new handlebars file after complete
    res.render('ping-pong-story-flow', {
      ...storyline,
      logged_in: req.session.logged_in,
    });
    // console.log('boop', res.json(storyline));
    // res.status(200).json();
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
