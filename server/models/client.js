'use strict';
module.exports = (sequelize, DataTypes) => {
  let Client = sequelize.define('Client', {
    name: DataTypes.STRING
  }, {});

  Client.associate = (models) => {
    Client.hasMany(models.Order, {
      foreignKey: 'clientId',
      as: 'orders',
      onDelete: 'CASCADE',
      hooks: true
    });    
  };
  
  return Client;
};