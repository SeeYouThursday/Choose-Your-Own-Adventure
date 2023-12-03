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
