'use strict';
module.exports = (sequelize, DataTypes) => {
  let Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10, 2),
    multiple: DataTypes.INTEGER
  }, {});

  Product.associate = (models) => {
    Product.hasMany(models.OrderItem, {
      foreignKey: 'productId',
      as: 'OrderItems',
      onDelete: 'CASCADE',
      hooks: true
    });    
  };

  return Product;
};