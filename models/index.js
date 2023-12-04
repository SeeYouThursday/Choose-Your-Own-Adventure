// const { User, Story, StoryLine } = require('../models');
const User = require('./User');
const Story = require('./Story');
const StoryLine = require('./StoryLine');

User.hasMany(StoryLine, {
  foreignKey: 'user_id',
});

StoryLine.belongsTo(User, {
  foreignKey: 'user_id',
});

//TODO figure out storyline and story relationship
// StoryLine.hasMany(Story, {
//   foreignKey: 'story_id',
// });

Story.hasMany(StoryLine, {
  foreignKey: 'story_id',
});

StoryLine.belongsTo(Story, {
  foreignKey: 'story_id',
});

module.exports = { User, Story, StoryLine };
