'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', 
        [
          {
            id: 1,
            name: 'Millenium Falcon',
            price: 550000,            
            createdAt: new Date(),
            updatedAt: new Date()            
          },
          {
            id: 2,
            name: 'X-Wing',
            price: 60000,
            multiple: 2,
            createdAt: new Date(),
            updatedAt: new Date() 
          },
          {
            id: 3,
            name: 'Super Star Destroyer',
            price: 4570000,            
            createdAt: new Date(),
            updatedAt: new Date() 
          },
          {
            id: 4,
            name: 'TIE Fighter',
            price: 75000,
            multiple: 2,
            createdAt: new Date(),
            updatedAt: new Date() 
          },
          {
            id: 5,
            name: 'Lightsaber',
            price: 6000,
            multiple: 5,
            createdAt: new Date(),
            updatedAt: new Date() 
          },
          {
            id: 6,
            name: 'DLT-19 Heavy Blaster Rifle',
            price: 5800,
            multiple: 5,
            createdAt: new Date(),
            updatedAt: new Date() 
          },
          {
            id: 7,
            name: 'DL-44 Heavy Blaster Pistol',
            price: 1500,
            multiple: 10,
            createdAt: new Date(),
            updatedAt: new Date() 
          }
        ], 
        {});  
  },

  down: (queryInterface, Sequelize) => {    
    return queryInterface.bulkDelete('Products', null, {});    
  }
};
