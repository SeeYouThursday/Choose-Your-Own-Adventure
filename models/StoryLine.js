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
    story_line: {
      type: DataTypes.STRING,
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
