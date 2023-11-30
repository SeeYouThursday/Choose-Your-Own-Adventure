const withAuth = require('../../utils/auth');
const router = require('express').Router();
const { StoryLine } = require('../../models');

//TODO: Get all stories for dashboard
// router.get('/stories', withAuth, async (req, res) => {

// });

//Create new story-line
router.post('/start', withAuth, async (req, res) => {
  console.log(req.body);
  try {
    const storyData = await StoryLine.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(storyData);
  } catch (error) {
    res.status(400).json(error);
  }
});

//TODO: Update story-line as choices are made
router.put('/update/:id', withAuth, async (req, res) => {
  console.log(req.body);
  try {
    await StoryLine.update(
      {
        ...req.body,
        user_id: req.session.user_id,
      },
      {
        where: { id: req.params.id },
      }
    );
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete story-line if user wants to delete from their dashboard
