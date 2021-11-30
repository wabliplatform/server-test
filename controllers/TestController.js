/**
 * The TestController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/TestService');
const createtest = async (request, response) => {
  await Controller.handleRequest(request, response, service.createtest);
};

const deletetest = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletetest);
};

const getAlltest = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAlltest);
};

const gettest = async (request, response) => {
  await Controller.handleRequest(request, response, service.gettest);
};

const updatetest = async (request, response) => {
  await Controller.handleRequest(request, response, service.updatetest);
};


module.exports = {
  createtest,
  deletetest,
  getAlltest,
  gettest,
  updatetest,
};
