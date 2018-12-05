'use strict';

module.exports = (sequelize, DataTypes) => {
  let OrderItem = sequelize.import('./orderitem');

  let Order = sequelize.define('Order', {}, {});

  Order.associate = (models) => {
    Order.hasMany(models.OrderItem, {
      foreignKey: 'orderId',
      as: 'orderItems',
      onDelete: 'CASCADE',
      hooks: true
    });

    Order.belongsTo(models.Client, {
      foreignKey: 'clientId',
      as: 'client',
    });
  };

  Order.prototype.createOrUpdateOrderItems = function (orderItems) {
    if (orderItems)
      orderItems.map(async orderItem => {
        if (orderItem._destroy)
          await OrderItem.destroy({ where: { id: orderItem.id, orderId: this.id } });
        else if (orderItem.id > 0)
          await OrderItem.update(orderItem, { where: { id: orderItem.id, orderId: this.id } });
        else
          await this.createOrderItem(orderItem);
      })
    return true;
  }

  return Order;
};