<p align="center">
<img src="./luck/branding/header.png"/>
</p>

[![License: mit](https://img.shields.io/badge/license-mit-yellow?)](https://opensource.org/licenses/MIT) 
[![Node.js Badge](https://img.shields.io/badge/node-orange?logo=nodedotjs&logoColor=white&style=flat)](https://nodejs.org/en)
[![MySql Badge](https://img.shields.io/badge/mysql-yellowgreen.svg?&logo=Mysql&logoColor=white)](https://www.mysql.com)
[![Express.js Badge](https://img.shields.io/badge/express-blue.svg?&logo=Express&logoColor=white)](https://expressjs.com/)
[![Sequelize Badge](https://img.shields.io/badge/sequelize-cyan.svg?&logo=Sequelize&logoColor=white)](https://canva.com)

[![Dotenv Badge](https://img.shields.io/badge/dotenv-darkgreen.svg?&logo=Dotenv&logoColor=white)](https://canva.com)
[![Nodemon Badge](https://img.shields.io/badge/nodemon-grey.svg?&logo=Nodemon&logoColor=white)](https://www.npmjs.com/package/nodemon)
[![Insomnia Badge](https://img.shields.io/badge/insomnia-khaki.svg?&logo=Insomnia&logoColor=white)](https://canva.com/) 
[![Heroku Badge](https://img.shields.io/badge/heroku-teal.svg?&logo=Insomnia&logoColor=white)](https://heroku.com) 
[![Canva Badge](https://img.shields.io/badge/canva-salmon.svg?&logo=Canva&logoColor=white)](https://canva.com/)

[![View Badge](https://img.shields.io/badge/view-darkmode-black.svg?&logo=Github&logoColor=white)](https://canva.com/) 

### ![table-of-contents](./luck/branding/toc.png)

  - [OVERVIEW](#overview)
    - [*user story*](#user-story)
    - [*concept design*](#concept-design)
    - [*luck list*](#luck-list)
    - [*the adventure team*](#team)
  - [INSTALLATION](#installation)
  - [USAGE](#usage)
    - [*screenshot*](#screenshot)
    - [*demo*](#demo)
  - [TESTING](#testing)
  - [SOURCES](#sources)
  - [LICENSE](#license)
  - [LINKS](#links)
  - [CONNECT](#connect)

### ![overview](./luck/branding/1.png)

`STROKE OF LUCK` is an interactive **Choose Your Own Adventure (CYOA)** game where adventurers partake on a journey, guided by chance. The app follows the MVC paradigm in its architectural structure, using [Handlebars.js](https://handlebarsjs.com/) as the templating language,[Sequelize](https://www.npmjs.com/package/sequelize) as the ORM, the [express-session](https://www.npmjs.com/package/express-session) npm package for authentication, and [Heroku](https://www.heroku.com/), the platform hosting the application.

* [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement [Handlebars.js]() for *views*.

* [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect  to `STROKE OF LUCK's` **database** for *models*

* [Express.js](https://expressjs.com/) API for *controllers*.

* [dotenv](https://www.npmjs.com/package/dotenv) package to use environment variables to **store sensitive data**, [bcrypt package](https://www.npmjs.com/package/bcrypt) to **hash passwords**, & [express-session](https://www.npmjs.com/package/express-session) and  [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add **authentication**.

#
>The [express-session](https://www.npmjs.com/package/express-session) package stores the session data on the client in a cookie - when an adventurer is idle on `STROKE OF LUCK` for more than a set time, the cookie will expire and the adventurer will be required to log in again to start a new session.
#



### ![user-story](./luck/branding/9.png)
<!-- <p align="center">
  <img src="./luck/branding/user-story.png"/>
</p> -->

### ![concept-design](./luck/branding/10.png)
<!-- <p align="center">
  <img src="./abductions/branding/ac.png"/>
</p> -->

### ![luck-list](./luck/branding/11.png)
<!-- <p align="center">
  <img src="./abductions/branding/probe-list.png"/>
</p> -->

<!-- ### ![team](./luck/branding/.png) -->
<!-- <p align="center">
  <img src="./abductions/branding/probe-list.png"/>
</p> -->

#