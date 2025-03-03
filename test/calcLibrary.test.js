'use strict';

const expect = require('chai').expect;

const { sum } = require('../calcLibrary.js');

describe('Test sum(1,1)=2', function () {
    it('sum(1,1)=2', function () {
        expect(sum(1, 1)).to.equal(2);
    });
});