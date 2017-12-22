'use strict';

const chai = require('chai');

chai.should();

describe('sanity check and setup', function () {

  it('true should be true', function () {
    true.should.be.true;
  });

  it('1 + 1 should equal 2', function () {
    (1 + 1).should.equal(2);
  });

});