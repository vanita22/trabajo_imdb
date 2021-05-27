'use strict';

const today = new Date();

const directors = [
  {
    firstname: "Mel",
    lastname: "Gibson",
    dob: "1978-10-15",
    biography: "es un buen director y actor",
    profile_photo: "",
    active: true,
    created_at: today,
    updated_at: today
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('directors', directors, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('directors', null, {});
  }
};
