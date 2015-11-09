var bodyParser = require('body-parser');
var mongo = require('../mongo/mongo');
var jsonParser = bodyParser.json();

var handleRoutes = function (app) {

    app.get('/', function (req, res) {
        res.render('home');
    });

    //app.post('/patient', jsonParser, function (req, res) {
    //    mongo.savePatient(req.body, res);
    //});

    app.post('/savePatientInfo', jsonParser, function (req, res) {
        mongo.savePatientInfo(req.body,res);
    });

    app.post('/getPatientInfo', jsonParser, function(req, res){
        mongo.getPatientInfo(req.body,res);
    });

};

module.exports = handleRoutes;