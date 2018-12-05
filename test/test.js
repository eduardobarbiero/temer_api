const supertest = require("supertest");
const assert = require('assert');
const server = require('../index')

let service = supertest.agent(server.listener);

// client test server
require('./client')(service, assert);

// product test server
require('./product')(service, assert);

// product test server
require('./order')(service, assert);
