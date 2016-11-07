
var chai = require("chai");
var http = require("http");

var expect = chai.expect;

var HeaderParser = require("../src/headerparser.js");


describe("HeaderParser", () => {
    it("Find an IP address from request", () => {
        var hp = new HeaderParser();
        var req = http.request();
        
        hp.parse(req);
        
        expect(hp.getIP()).to.not.be.null;
        
        
    })
    
});
