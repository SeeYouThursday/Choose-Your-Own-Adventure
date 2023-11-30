const router = require('express').Router();
const { User } = require('../../models');

//Create new user
router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
      // res.redirect('/dashboard');
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

//Login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });
    // check the username
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      console.log(userData);
      return;
    }

    const validPassword = userData.checkPassword(req.body.password);

    //check the password
    if (!validPassword) {
      res.status(400);
      res.json({ message: 'Incorrect username or password, please try again' });
      return;
    }
    //save session
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
    return req.body.username;
  }
});

//Logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
