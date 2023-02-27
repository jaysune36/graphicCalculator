let expect = require('chai').expect;

describe('TEST FUNCTION', function() {
  let testFunc = require('../js/calcuFunc').testFunc;
  it('should return hello world on the log', function() {
    let testStr = 'hello world';
    expect(testFunc(testStr)).to.be.true;
  });
});