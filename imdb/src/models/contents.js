'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Contents.init({
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    total_seasons: DataTypes.INTEGER,
    imdb_score: DataTypes.INTEGER,
    relase_date: DataTypes.STRING,
    play_time: DataTypes.INTEGER,
    imdb_link: DataTypes.STRING,
    created_at: DataTypes.DATE,
    modified_at: DataTypes.DATE,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Contents',
  });
  return Contents;
};