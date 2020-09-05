'use strict';

//const bcrypt = require('bcrypt')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ticket', [{
      number: 100110,
      status: 'A',
      created_at: new Date(),
      updated_at: new Date()
    },], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ticket', null, {});
  }
};
