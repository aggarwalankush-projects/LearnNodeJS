var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var patientSchema = new Schema({
        lastName: String,
        mrn: String
    },
    {
        collection: 'Patient'
    }
);

patientSchema.index({mrn: 1}, {unique: true});


var patientInfoSchema = new Schema({
        date: Date,
        cprCount: Number,
        patientId: String,
        time: Number,
        cpr: String,
        monitoring: Schema.Types.Mixed,
        intervention: Schema.Types.Mixed,
        bolus: Schema.Types.Mixed
    },
    {
        collection: 'PatientInfo'
    }
);

patientInfoSchema.index({date: 1, cprCount: 1, patientId: 1, time: 1}, {unique: true});

var Patient = mongoose.model('Patient', patientSchema);
var PatientInfo = mongoose.model('PatientInfo', patientInfoSchema);


module.exports = {
    Patient: Patient,
    PatientInfo: PatientInfo
};