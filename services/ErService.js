/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Er } = require('../models/Er');

/**
* Creates the data
*
* er Er data to be created
* returns er
* */
const createer = ({ er }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Er(er).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* erId String the Id parameter
* no response value expected for this operation
* */
const deleteer = ({ erId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Er.findOneAndDelete({ _id:erId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAller = () => new Promise(
  async (resolve, reject) => {
    try {
      query = await Er.find().exec();
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* erId String the Id parameter
* returns er
* */
const geter = ({ erId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Er.findById(erId).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* erId String the Id parameter
* er Er data to be updated (optional)
* returns er
* */
const updateer = ({ erId, er }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Er.findOneAndUpdate({ _id:erId },er).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createer,
  deleteer,
  getAller,
  geter,
  updateer,
};
