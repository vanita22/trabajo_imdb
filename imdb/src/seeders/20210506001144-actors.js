'use strict';

const today = new Date();

const actors = [
  {
    firstname: "will",
    lastname: "Smith",
    dob: "1968-09-25",
    biography: "es un tipo genial",
    profile_photo: "",
    active: true,
    created_at: today,
    updated_at: today
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('actors', actors, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('actors', null, {});
  }
};
