var patient = {
    lastName: "P1",
    mrn: "1234"
};

var patientInfo = [
    {
        time: "0.00",
        patientId: "1234",
        cpr: "CPR1",
        monitoring: {
            M11: "VM11",
            M12: "VM12"
        },
        intervention: {
            I11: "VI11",
            I12: "VI12"
        },
        bolus: {
            B11: "VB11",
            B12: "VB12"
        }
    },
    {
        time: "0.02",
        patientId: "1234",
        cpr: "CPR2",
        monitoring: {
            M21: "VM21",
            M22: "VM22"
        },
        intervention: {
            I21: "VI21",
            I22: "VI22"
        },
        bolus: {
            B21: "VB21",
            B22: "VB22"
        }
    }
];

var dateToSearch= new Date();
var patientDetails={
    patientId: 1234,
    date:dateToSearch.getTime()
};


document.getElementById('patient').innerHTML = JSON.stringify(patient, null, 2);
document.getElementById('patientInfo').innerHTML = JSON.stringify(patientInfo, null, 2);
document.getElementById('patientDetails').innerHTML = JSON.stringify(patientDetails, null, 2);

$("#patientForm").submit(function (e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: $(this).attr('action'),
        data: JSON.stringify(patient),
        contentType: 'application/json',
        success: function (data) {
            document.getElementById('patientResponse').innerText = data;
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });
});

$("#patientInfoForm").submit(function (e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: $(this).attr('action'),
        data: JSON.stringify(patientInfo),
        contentType: 'application/json',
        success: function (data) {
            document.getElementById('patientInfoResponse').innerText = data;
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });
});

$("#patientDetailsForm").submit(function (e) {
    e.preventDefault();
    document.getElementById("infoButton").disabled = true;
    $.ajax({
        type: "POST",
        url: $(this).attr('action'),
        data: JSON.stringify(patientDetails),
        contentType: 'application/json',
        success: function (data) {
            $('#myframe').contents().find('html').html(data);
            document.getElementById("infoButton").disabled = false;
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });
});

