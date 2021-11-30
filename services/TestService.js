/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Test } = require('../models/Test');

/**
* Creates the data
*
* test Test data to be created
* returns test
* */
const createtest = ({ test }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Test(test).save();
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
* testId String the Id parameter
* no response value expected for this operation
* */
const deletetest = ({ testId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Test.findOneAndDelete({ _id:testId }).exec();
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
const getAlltest = () => new Promise(
  async (resolve, reject) => {
    try {
      query = await Test.find().exec();
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
* testId String the Id parameter
* returns test
* */
const gettest = ({ testId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Test.findById(testId).exec();
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
* testId String the Id parameter
* test Test data to be updated (optional)
* returns test
* */
const updatetest = ({ testId, test }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Test.findOneAndUpdate({ _id:testId },test).exec();
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
  createtest,
  deletetest,
  getAlltest,
  gettest,
  updatetest,
};
