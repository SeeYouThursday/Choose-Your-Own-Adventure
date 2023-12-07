const router = require('express').Router();
const { User } = require('../../models');


//all users
router.get('/', async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: { exclude: ['password'] },
        });
        res.status(200).json(users);
      } catch (err) {
        res.status(500).json(err);
        console.log(`
=====================================================================
********************* VIEWING ALL ADVENTURERS! **********************
===================================================================== 
        `);
    }
});




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
      console.log(`
=====================================================================
********************** NEW ADVENTURER CREATED! **********************
=====================================================================      
          |                   |                  |                    
 _________|________________.=""_;=.______________|__________________
|                   |  ,-"_,=""     ;"=.|                  |
|___________________|__"=._o'"-._        '"=.______________|________
          |                '"=._o'"=._      _'"=._                    
 _________|_____________________:=._o "=._."_.-="'"=._______________
|                   |    __.--" , ; '"=._o." ,-"""-._ ".   |
|___________________|_._"  ,. .' ; '' ,  '"-._"-._   ". '__|________
          |           |o'"=._' , "' '; .". ,  "-._"-._; ;            
 _________|___________| ;'-.o'"=._; ." ' ''."l' . "-._ /____________
|                   | |o;    '"-.o'"=._''  '' " ,__.--o;   |
|___________________|_| ;     (#) '-.o '"=.'_.--"_o.-; ;___|________
____/______/______/___|o;._    "      '".o|o_.--"    ;o;____/______/
/______/______/______/_"=._o--._        ; | ;        ; ;/______/____
____/______/______/______/__"=._o--._   ;o|o;     _._;o;____/______/
/______/______/______/______/____"=._o._; | ;_.--"o.--"_/______/____
____/______/______/______/______/_____"=.o|o_.--""___/______/______/
/______/______/______/______/______/______/______/______/______/____
********************************************************************
      `)
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
    console.log(`
=====================================================================
********************** WELCOME BACK ADVENTURER **********************
=====================================================================
                      / ;
                      | |
                      |.|
                      |.|
                      |:|      __
                    ,_|:|_,   /  )
                      (Oo    / _I_
                       +l l  || __|
                          l l||___|
                            L /.:.L-l
                              |.:. /-----J
                              |___|::oOo::|
                              /   |:<_T_>:|
                             |_____; ::: /
                               | |  ; ;:/
                               | |   | |
                               l /   | L___
                               / |   L_____.
                               '-'
  `);
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
  console.log(`
=====================================================================
********************** SAFE TRAVELS ADVENTURER **********************
=====================================================================
                          
                                      sSSs
                                     S{'SSS
                                    sSS)sSSSs
                                    SS(( SLSSs
                                   sSSS) (LLSSS
              ~~_^~~~_~~^~~_^~^^^-^^SS/'-.//Ss~~^~~_^~~~^_^~^~^^
              -  _  - ~ -    - _ ~.-'  __//SSs -  _  -  _  ~- _
             - ~_ -  _  -  _ - ,=(  -.;_,   '=, -   ~ _  - _  ~
              _ -  -  _ ~-   ,='  '',  (     '=, - _  - _-  -
                -~_  -  _   (         ;(;        ')-  _     -
               -          -~ '"~. _ ._ '_, _  _.=' ~     -
                - _ ~- _-  _- ~-  _ -  _ ~ _ - - _ - _~ -~ -_
               _ -  -    _   -  _   -  _  -  _ -  - _  -  _
  `)
});

module.exports = router;
