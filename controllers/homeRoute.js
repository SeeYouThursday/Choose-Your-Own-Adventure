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
    console.log(`
=============================================================================
************************ STROKE YOUR LUCK'S BACK END ************************          
=============================================================================                           

                                               _   __,----'~~~~~~~~~'-----.__
                                        .  .    '//====-              ____,-'~'
                        -.            L_L// .   /||;;  '~~~~'---.___./
                  ______-==.       _-~o  ';/    |||  ;;           _,''
            __,--'   ,=='||l=_    ;_,_,/ _-'|-   |';   ll        ,'
         _-'      ,='    | ll'.    '',/~7  /-   /  ||   'l.     /
       .'       ,'       |  ll  ;_  "  /  /-   /   ||      l   /
      / _____  /         |     ll.'-_/  /|- _/   ,||       l /
     ,-'     '-|--'~~'--_ ;     '==-/  '| ;'--===-'       _/'
               '         '-|      /|    )-';~'      _,--"'
                           '-~^l_/ |    |   ';_   ,^             /.
                                /  l     l__   ;/~               'l__
                            _,-' _/'; ,-'~____-''-/                 ''===l
                           ((->/'    ;|||' '.     ';.  ,                _||
             ./                       ;_     ';      '~---|__i__i__l--~'_/
            <_n_                     __-^-_    ')  l-.______________,-~'
             'B'l)                  ///,-'~'__--^-  |-------~~~~^'
             /^>                           ///,--~'-.
            '  ' 
join the adventure:
http://localhost:${PORT}`));
});
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
    res.render('dashboard', {
      ...stories,
      logged_in: req.session.logged_in,
    });
    console.log(`
=====================================================================
******************** VIEWING YOUR JOURNEY DASH **********************
=====================================================================
        .                  .-.    .  _   *     _   .
               *          /   .     ((       _/ .       *    .
            _        ..--'l/l_ .     '      /    .  *   ___
        *  / l_    _/ ^      l/l'__        /l/l  /.  __/   l *
          /    .  /    .'   _/  /  l  *' /    l/  ./ .''l_/l   .
         /./l  /./ :' __  ^/  ^/    '--./.'  ^  '-.l _    _:l _
        /    l/  .  _/  .-' __/.' ^ _   l_   .'l   _/ l .  __/ l
       /l  .-   '. ./     . / -.   _/ . -. '_/   l /    '._/  ^  .
      /  '-.__ ^   / .-'.--'    . /    '--./ .-'  '-.  '-. '.  -  '.
    @/        '.  / /      '-.   /  .-'   / .   .'   .    .  .  .-  l%
    @&8jgs@@%% @)&@&(88&@.-_=_-=_-=_-=_-=_.8@% &@&&8(8%@%8)(8@%8 8%@)%
    @88:::&(&8&&8:::::%&;.~-_~~-~~_~-~_~-~~=.'@(&%::::%@8&8)::&#@8::::
    '::::::8%@@%:::::@%&8:'.=~~-.~~-.~~=..~'8::::::::&@8:::::&8:::::'
     '::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::.'
    `);
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
  console.log(`
=====================================================================
********************** WELCOME BACK ADVENTURER **********************
=====================================================================

                             ,'.   |.
                            / /.:  ;;
                          / :'|| //
                         (| | ||;'
                         / ||,;'-.._
                        : ,;,'';:.--'
                        |:|''-(..
                        ::: .-'.''
                        ... .,-'.
                          '. '.,-'-._      ,-._
                   ,-.       .  '.,-' '-.  / ,..'.
                  . ,.'.      '.  ; _.-' ;',: ''; ;
                 / / :..'-'''''-)  '.   _.:''  ''; ;
                : :  '' '-..'''/    |-''  |''  '' ; ;
                | |  ''   ''  :     |__..-;''  ''  : :
                | |  ''   ''  |     ;    / ''  ''  | |
                | |  ''   ''  ;    /--../_ ''_ '' _| |
                | |  ''  _;:_/    :._  /-.'',-.'',-. |
                : :  '',;'';/     |_ ,(   ''   ''   .l
                 . .  .(   /.     :,'  .
                  . ..'/  : /    ,)    /
                   . ':   ':    / l   :
                    '.;    :   :l  l  |
                            l  | '. l |..-_
                             ) |.  '/___-.-'
                           ,'  -.'.  '. '        _,)
                           ;';('.; '._ '-..___..-','
                              ''      ''-..___..-'
    `);
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    //TODO insert modal for 'you're already logged in
    res.redirect('/dashboard');
    return;
  }
  res.render('signup');
  console.log(`
=====================================================================
********************* WELCOME TO THE ADVENTURE **********************
=====================================================================
           _   _   _
          | |_| |_| |
          |         |
          |         |
          |   ,-.   |
          |  |((}|  |
          |  |_))|  |
          |   ((    |
          |    ))   |
          |   (((   |
          |    )))  |
          |    ((   |
          |    )))  |
          |   (((   |
          |    )))  |
          |   (((   |
          |    )))  |
          |   (((   |
          |    )))  |
          |   (((   |
          |    )))  |
          |   (((   |
          |    )))  |
          |   (((   |
          |    )))  |
          |   (((   |
          |    )))  |
          |   (((   |             l
          |    )))  |              l
          |   (((   |       _,,   ~ l)
          |    )))  |      '-=l; {] |'
          |   (((   |       _ ;.;_|/
          |    )))  |       _;|/._|
          |   (((   |       ;  ;|.
          |    )))  |           ( )~~~
          |   (((   |           | l
         ,|          ; ,,,,    /  /,,,,
  `);
});

router.get('/end/:id', withAuth, async (req, res) => {
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
    res.render('endpage', {
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
