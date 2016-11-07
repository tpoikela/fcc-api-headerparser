
/** A file for testing the server response.*/

/** See also https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai */

process.env.NODE_ENV = 'test';

var chai = require("chai");
var expect = chai.expect;

var chaiHTTP = require("chai-http");
chai.use(chaiHTTP);

var server = require("../index");

describe("/", () => {
    it("Should get data from server", (done) => {
        chai.request(server).get("/")
        .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.be.json;
            console.log("Test client parsed: " + JSON.stringify(res));
            var json = JSON.parse(res.text);
            expect(json).to.have.ownProperty("ipaddress");
            expect(json).to.have.ownProperty("language");
            expect(json).to.have.ownProperty("software");
            //expect(res.software).to.equal(null);
            //expect(json.natural).to.equal(null);
            done();
        });
    });
});
