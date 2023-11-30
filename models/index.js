const { User, Story, UserStory } = require('../models');

User.hasMany(UserStory, {
  foreignKey: 'user_id',
});

UserStory.belongsTo(User, {
  foreignKey: 'user_id',
});

UserStory.hasMany(Story, {
  foreignKey: 'story_id',
});

module.exports = { User, Story, UserStory };
