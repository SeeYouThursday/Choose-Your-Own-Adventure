const router = require('express').Router();
const { Story } = require('../../models');

//Create new story-line
router.post('/start', withAuth, async (req, res) => {
  console.log(req.body);
  try {
    const storyData = await UserStory.create({
      ...req.body,
      user_id: req.session.user_id,
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

//Update story as choices are made

//Get all stories for dashboard

//Delete story if user wants to delete from their dashboard

module.exports = router;
