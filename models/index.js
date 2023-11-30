// const { User, Story, StoryLine } = require('../models');
const User = require('./User');
const Story = require('./Story');
const StoryLine = require('./StoryLine');

User.hasMany(StoryLine, {
  foreignKey: 'user_id',
});

StoryLine.belongsTo(User, {
  foreignKey: ''
})

StoryLine.belongsTo(User, {
  foreignKey: 'user_id',
});

StoryLine.hasMany(Story, {
  foreignKey: 'story_id',
});

module.exports = { User, Story, StoryLine };
