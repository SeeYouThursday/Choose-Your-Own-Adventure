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
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      //TODO: Make this unique and set an error message for the user in the FE if they try to create a story with the same name as one they already have
      // unique: true,
    },
    story_line: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
      story_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'story',
          key: 'id',
        },
      },
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
