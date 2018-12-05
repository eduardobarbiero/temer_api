'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {    
      return queryInterface.bulkInsert('Clients', 
        [
          {
            id: 1,
            name: 'Darth Vader',
            createdAt: new Date(),
            updatedAt: new Date()            
          },
          {
            id: 2,
            name: 'Obi-Wan Kenobi',
            createdAt: new Date(),
            updatedAt: new Date() 
          },
          {
            id: 3,
            name: 'Luke Skywalker',
            createdAt: new Date(),
            updatedAt: new Date() 
          },
          {
            id: 4,
            name: 'Imperador Palpatine',
            createdAt: new Date(),
            updatedAt: new Date() 
          },
          {
            id: 5,
            name: 'Han Solo',
            createdAt: new Date(),
            updatedAt: new Date() 
          }
        ], 
        {});    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Clients', null, {});    
  }
};
