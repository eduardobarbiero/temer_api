const clientsController = require('../controllers').clientsController;
const productsController = require('../controllers').productsController;
const ordersController = require('../controllers').ordersController;

module.exports = (server) => {

  // System Routes
  server.route(
    [
      {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
          return 'System running';
        }
      },
      {
        method: 'GET',
        path: '/api',
        handler: (request, h) => {
          return 'Api running';
        }
      },
    ]
  );

  // Clients Routes
  server.route(
    [
      {
        method: 'GET',
        path: '/api/clients',
        handler: clientsController.index
      },
      {
        method: 'GET',
        path: '/api/clients/{id}',
        handler: clientsController.findById
      }
    ]
  );

  // Products Routes
  server.route(
    [
      {
        method: 'GET',
        path: '/api/products',
        handler: productsController.index
      },
      {
        method: 'GET',
        path: '/api/products/{id}',
        handler: productsController.findById
      }
    ]
  );

  // Orders Routes
  server.route(
    [
      {
        method: 'GET',
        path: '/api/orders',
        handler: ordersController.index
      },
      {
        method: 'GET',
        path: '/api/orders/{id}',
        handler: ordersController.findById
      },
      {
        method: 'POST',
        path: '/api/orders',
        handler: ordersController.create
      },
      {
        method: 'DELETE',
        path: '/api/orders/{id}',
        handler: ordersController.destroy
      },
      {
        method: 'PUT',
        path: '/api/orders/{id}',
        handler: ordersController.update
      }
    ]
  );
};