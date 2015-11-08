var mongoose = require('mongoose');
var mongoSave = require('./mongoSave');
var mongoQuery = require('./mongoQuery');

mongoose.connect('mongodb://localhost/test');

module.exports = {
    savePatient: mongoSave.savePatient,
    savePatientInfo: mongoSave.savePatientInfo,
    getPatientInfo: mongoQuery.getPatientInfo
};

