const router = require('express').Router();
const { Story } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id', withAuth, async (req, res) => {
  // !Needs to pull with the correct id -currently not working
  try {
    const storyData = await Story.findByPk(req.params.id, {
      include: [],
    });
    const story = storyData.get({ plain: true });
    console.log(story);
    //TODO: replace with new handlebars file after complete
    res.render('test-story-flow', {
      ...story,
      logged_in: req.session.logged_in,
    });
    res.json(story);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
