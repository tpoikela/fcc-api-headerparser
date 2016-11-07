

var HeaderParser = function() {
    
    var data = {};
    
    var _parseIP = function(ip) {
        
        return ip;
    };
    
    this.parse = function(req) {
        data.ip = _parseIP(req.ip);
        data.software = req.headers["user-agent"];
        data.language = req.acceptsLanguages();
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