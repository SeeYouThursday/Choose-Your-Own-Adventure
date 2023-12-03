// bring in models and seed json files
const { User, Story } = require('../models');
// const { comment_seeds, post_seeds, user_seeds } = require('./seeds');
const stories = require('./story_seeds.json');
const users = require('./user_seeds.json');

//require sequelize
const sequelize = require('../config/connection');
//set up Database

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(users, {
    individualHooks: true,
    //makes the passwords hashed through the beforeCreate hook in the User model
    returning: true,
  });

  await Story.bulkCreate(stories);

  process.exit(0);
};

seedDatabase();
