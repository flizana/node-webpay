var chai = require('chai');
var expect = chai.expect;
var Configuration = require('../lib/configuration/configuration');

describe('Configuration', function(){
	it('Empty constructor should not set any attibutes, they all must be null', function(){
		var config = new Configuration();
		expect(config.privateKey).to.equal(null);
		expect(config.publicCert).to.equal(null);
		expect(config.webpayCert).to.equal(null);
		expect(config.commerceCode).to.equal(null);
		expect(config.environment).to.equal(null);
	});
});