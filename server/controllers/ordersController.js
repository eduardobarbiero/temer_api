const Order = require('../models').Order;
const OrderItem = require('../models').OrderItem;

module.exports = {
  create(req, res) {
    return Order
      .create({
        clientId: req.payload.clientId,
        orderItems: req.payload.orderItems.map(orderItem => orderItem)
      }, { include: [{ model: OrderItem, as: 'orderItems' }] })
      .then(client => client)
      .catch(error => error);
  },
  index(req, res) {
    return Order
      .all({ include: [{ all: true, nested: true }] })
      .then(Orders => Orders)
      .catch(error => error);
  },
  findById(req, res) {
    return Order
      .findById(req.params.id, { include: [{ all: true, nested: true }] })
      .then(Order => Order)
      .catch(error => error);
  },
  destroy(req, res) {
    return Order
      .destroy(
        {
          where: {
            id: req.params.id,
          }
        }
      )
      .then(Order => true)
      .catch(error => false);
  },
  update(req, res) {
    return Order
      .findOne({ where: { id: req.params.id }, include: [{ model: OrderItem, as: 'orderItems' }] })
      .then(async order => {
        await order.update(req.payload);
        await order.createOrUpdateOrderItems(req.payload.orderItems);

        return true;
      })
      .catch(error => false)
  }
};