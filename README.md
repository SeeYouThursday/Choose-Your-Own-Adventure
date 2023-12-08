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

* [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to `STROKE OF LUCK's` **database** for *models*

* [Express.js](https://expressjs.com/) API for *controllers*.

* [dotenv](https://www.npmjs.com/package/dotenv) package to use environment variables to **store sensitive data**, [bcrypt package](https://www.npmjs.com/package/bcrypt) to **hash passwords**, & [express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add **authentication**.

#

> The [express-session](https://www.npmjs.com/package/express-session) package stores the session data on the client in a cookie - when an adventurer is idle on `STROKE OF LUCK` for more than a set time, the cookie will expire and the adventurer will be required to log in again to start a new session.

#

### ![user-story](./luck/branding/9.png)

<p align="center">
  <img src="./luck/branding/user-story.png"/>
</p>

<!-- ### ![concept-design](./luck/branding/10.png) -->

<!-- <p align="center">
  <img src="./abductions/branding/ac.png"/>
</p> -->

### ![luck-list](./luck/branding/11.png)

<p align="center">
  <img src="./luck/branding/luck-list.png"/>
</p>

### ![team](./luck/branding/adventure-team.png)
<!-- <p align="center">
  <img src="./abductions/branding/probe-list.png"/>
</p> -->

<p align="center">
  <a href="https://github.com/christiecamp"><img width="100px" alt="christiecamp" title="christiecamp" src="./luck/branding/christiecamp.png"/></a>
  &#8287;&#8287;&#8287;&#8287;&#8287;
  <a href="https://github.com/SeeYouThursday"><img width="100px" alt="seeyouthursday" title="seeyouthursday" src="./luck/branding/seeyouthursday.png"></a>
  &#8287;&#8287;&#8287;&#8287;&#8287;
  <a href="https://github.com/greenstone83"><img width="100px" alt="greenstone83" title="greenstone83" src="./luck/branding/greenstone83.png"/></a>

#

### ![installation](./luck/branding/2.png)

The application is invoked using the following commands:

##### *Clone the repository in your local development enviornment.*
```
git clone https://github.com/seeyouthursday/choose-your-own-adventure.git
```

##### **Create a *.env* with your information**

##### *Navigate to the command line and input:*

```javascript
npm i :: express, mysql2, dotenv --save, sequelize, nodemon --save-dev, handlebars, express-session, express-handlebars, bcypt, connect-session-sequelize
```

```javascript
mysql -u root -p
```

```mysql
SOURCE db/schema.sql;
quit
```

```javascript
npm run seed
```

```javascript
nodemon server
```

#

### ![usage](./luck/branding/3.png)

**INSTRUCTIONS:**

1. Open the Integrated Terminal and follow the [installation](#installation) guidelines

2. Interact with `STROKE OF LUCK's` back end with [Insomnia](https://www.npmjs.com/package/inquirer/v/8.2.4) by testing the below:

   - GET all users, stories
   - GET user, story by id
   - CREATE user, story
   - UPDATE user, story,
   - DELETE story

   ##### view [demo videos](#demo) and [testing](#testing)

3. Open the [application]() deployed on [Heroku](https://heroku.com/home)
4. Signup by creating a **username/password**
5. *Create*, *update*, and *delete* stories through your dashboard
6. *View* all stories via the dashboard
7. *Logout* to leave the application

### ![screenshot](./luck/branding/12.png)

##### *screenshot demonstrates `STROKE OF LUCK's` back end, testing all routes with **Insomnia**, and the functional application deployed on **Heroku***

<p align="center">
<img src="./luck/demo/ss.png"/>
</p>

### ![demo](./luck/branding/13.png)
coming soon!

#

### ![testing](./luck/branding/8.png)

**TESTING WITH INSOMNIA:**

There are different tools available that can test reading/writing operations in a web browser - in this application we use [Insomnia](https://insomnia.rest/), a *REST client* that makes it easy to send **HTTP requests** to an API and view response details.

1. After installing Insomnia, open a new document.

2. Interact with `STROKE OF LUCK'S` back end by testing the below commands:

##### **GET** all users & stories
```json
http://localhost:3001/api/user
```
```json
http://localhost:3001/api/story
```

##### **GET** user by *id*
```json
http://localhost:3001/api/user/1
```

##### **CREATE** story
```json
http://localhost:3001/api/story/
```
```json
{
	"title": "",
	"content": ""
}
```

##### **UPDATE** story
```json
http://localhost:3013/api/post/1
```
```json
{
  "title": "",
  "content": ""
}
```
##### **DELETE** story
```json
http://localhost:3013/api/story/
```

#

### ![sources](./luck/branding/4.png)

Here's a list of technologies used:

1. [Node.js](https://nodejs.org/en) - is an open-source, cross-platform JavaScript runtime environment.

2. [Express.js](<(https://expressjs.com)>) - a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

3. [Handlebars.js](https://handlebarsjs.com/) - a JavaScript templating library used in web development to create dynamic web pages and generate HTML content based on data.

4. [MySQL2](https://www.npmjs.com/package/mysql2) - MySQL is a relational database management system based on SQL – Structured Query Language.

5. [Sequelize](https://sequelize.org/) - a Node.js based `Object Relational Mapper` that makes it easy to work with **MySQL databases**. An *Object Relational Mapper* performs functions like handling database records by representing the data as objects.

6. [express-handlebars](https://www.npmjs.com/package/express-handlebars) - a Handlebars view engine for Express which doesn't suck.

7. [express-session](https://www.npmjs.com/package/express-session) - a Node.js module that offers simple session middleware for Express.

8. [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) - a SQL session store using Sequelize.js.

9. [Bcyrpt](https://www.npmjs.com/package/bcrypt) - a Node.js library to help hash passwords.

10. [Dotenv](https://www.npmjs.com/package/dotenv) - a zero-dependency module that loads environment variables from a .env file into `process.env`.

11. [Nodemon](https://www.npmjs.com/package/nodemon) - a Node.js tool that helps develop applications by automatically restarting the node application when file changes in the directory are detected.

12. [js-confetti](https://www.npmjs.com/package/js-confetti) - Node.js library to add a little bit of spice to your buttons.

13. [Insomnia](https://insomnia.rest/) - an open source desktop application that assists in designing, debugging, and testing APIs (specifically in this instance, HTTP-based RESTful APIs).

14. [Heroku](https://heroku.com) - used to deploy, manage, and scale the application.

### ![license](./luck/branding/5.png)

##### [mit license](./LICENSE)

### ![links](./luck/branding/6.png)

##### [*github repo*](https://github.com/seeyouthursday/choose-your-own-adventure)
##### [*deployed app*](https://createyourownadventure-5cf1f78476c3.herokuapp.com)
##### [*app presentation*](https://www.canva.com/design/DAF1sd_tCW8/cqH6jypPAPhBIU8J-uUprw/view?utm_content=DAF1sd_tCW8&utm_campaign=share_your_design&utm_medium=link&utm_source=shareyourdesignpanel)

### ![connect](./luck/branding/7.png)

[![Github Badge](https://img.shields.io/badge/-yellow.svg?&logo=Github&logoColor=white)](https://github.com/seeyouthursday/choose-your-own-adventure)
