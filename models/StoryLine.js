const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class StoryLine extends Model {}

StoryLine.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    story_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'story',
        key: 'id',
      },
    },
    story_line: {
      type: DataTypes.STRING,
      // [1,2,4,5,6,7,4]
      //TODO: Get feedback on story_line
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    modelName: 'storyline',
  }
);

module.exports = StoryLine;
