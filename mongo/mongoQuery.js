var PatientInfo = require('./mongoSchema').PatientInfo;

var getPatientInfo = function (jsonObject, res) {
    var date = new Date(Number(jsonObject.date));
    date.setHours(0, 0, 0, 0);
    PatientInfo
        .find({
            date: date,
            patientId: jsonObject.patientId
        })
        .sort({cprCount: 1})
        .exec(function (err, details) {
            if (err)
                console.log("Error in finding patient details");
            else if (details && details.length>0) {
                res.render('patientDetail', { data: details });
            }
            else {
                console.log("No details found for patient - " + jsonObject.patientId);
                res.send("No details found for patient - " + jsonObject.patientId);
            }
        });

};

module.exports = {
    getPatientInfo: getPatientInfo
};

