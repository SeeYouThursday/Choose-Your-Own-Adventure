const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
// const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Create the Handlebars.js engine object with custom helper functions
const hbs = exphbs.create();

const sess = {
  secret: "luck secret",
  cookie: {
    maxAge: 20000000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
// Inform Express.js which template engine we're using
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`
  
=====================================================================
******************** STROKE YOUR LUCK'S BACK END ********************
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

  
join the adventure:
http://localhost:${PORT}`));
});

