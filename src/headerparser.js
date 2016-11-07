

var HeaderParser = function() {
    
    var data = {};
    
    var _parseIP = function(ip) {
        
        return ip;
    };
    
    this.parse = function(req) {
        if (typeof req === "undefined") {
            throw Error("Request is undefined");
        }
        else {
            data.ip = _parseIP(req.ip);
            if (req.hasOwnProperty("headers")) {
                data.software = req.headers["user-agent"];
            }
            else {
                throw Error("No headers in request!");
            }
            data.language = req.acceptsLanguages();
        }
    };
    
    this.getIP = function() {
        return data.ip;
    };
    
    this.getLang = function()  {
        return data.language;
    };
    
    this.getSW = function() {
        return data.software;
    };
    
};

module.exports = HeaderParser;