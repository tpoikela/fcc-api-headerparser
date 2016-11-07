
var express = require("express");
var HeaderParser = require("./src/headerparser.js")

var DEBUG = process.env.DEBUG || 0;
var port = process.env.PORT || 8080;

var app = express();
var hp = new HeaderParser();

// Handles all requests
app.use("/", function(req, res) {
    
    var headers = req.headers;
    console.log("HEADERS:  " + JSON.stringify(headers));
    if (DEBUG) printReq(req); 
    hp.parse(req);
    var json = {ipaddress: 0, language: "", software: ""};
    json.ipaddress = hp.getIP();
    json.software = hp.getSW();
    json.language = hp.getLang();
    res.json(json);
});

app.listen(port, function () {
    console.log('Timestamp microservice listening on port ' + port)
});


// For debugging 
function printReq(req) {
    for (var prop in req) {
        console.log("=> " + prop);
        if (typeof(req[prop]) !== "function") {
            try {console.log("== " + JSON.stringify(req[prop]))}
            catch (e) {console.log(e);};
        }
    }
    console.log("Headers: " + req.headers);
};

module.exports = app; // For testing

