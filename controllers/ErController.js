/**
 * The ErController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ErService');
const createer = async (request, response) => {
  await Controller.handleRequest(request, response, service.createer);
};

const deleteer = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteer);
};

const getAller = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAller);
};

const geter = async (request, response) => {
  await Controller.handleRequest(request, response, service.geter);
};

const updateer = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateer);
};


module.exports = {
  createer,
  deleteer,
  getAller,
  geter,
  updateer,
};
