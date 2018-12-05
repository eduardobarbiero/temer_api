const Client = require('../models').Client;

module.exports = {  
  index(req, res) {
    return Client
      .all()
      .then(Clients => Clients)
      .catch(error => error);
  },
  findById(req, res) {
    return Client
      .findById(req.params.id)
      .then(Client => Client)
      .catch(error => error);
  }
};