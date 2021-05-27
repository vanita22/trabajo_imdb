'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actors extends Model {
    static associate(models) {
      // define association here
    }
  };
  Actors.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    dob: DataTypes.DATEONLY,
    biography: DataTypes.TEXT,
    profile_photo: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Actors',
    underscored: true
  });
  return Actors;
};
