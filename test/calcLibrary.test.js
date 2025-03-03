'use strict';

const expect = require('chai').expect;

const { sum } = require('../calcLibrary.js');

describe('Test sum(1,1)=2', function () {
    it('sum(1,1)=2', function () {
        expect(sum(1, 1)).to.equal(2);
    });
});

describe('test sum with integers', function () {
    const testValues = [
        { a: -2, b: -4, result: -6 },
        { a: -2, b: 4, result: 2 },
        { a: 2, b: -4, result: -2 },
        { a: 0, b: 0, result: 0 }
    ];
    // tc = testcase
    testValues.forEach(function (tc) {
        it(`sum(${tc.a},${tc.b})=${tc.result}`, function () {
            expect(sum(tc.a, tc.b)).to.equal(tc.result);
        });
    });



})

// with for loop
describe('Test sum with integers for loop version', function () {
    const testValues = [
        { a: -2, b: -4, result: -6 },
        { a: -2, b: 4, result: 2 },
        { a: 2, b: -4, result: -2 },
        { a: 0, b: 0, result: 0 }
    ];

    for (const v of testValues) {
        it(`sum(${v.a},${v.b})=${v.result}`, function () {
            expect(sum(v.a, v.b)).to.equal(v.result);
        });
    }
});

// with 2-dimensional array

describe('Test sum with integers and jest version', function () {
    const testValues = [
        [1, 1, 2],
        [2, 3, 5],
        [-2, -4, -6],
        [2, -4, -2],
        [-2, 4, 2],
        [0, 0, 0],
        [0, 3, 3],
        [3, 0, 3],
        [-3, 0, -3],
        [0, -3, -3],
        [123, 200, 323],
        [-500, -500, -1000],
        [500, 500, 1000],
        [500, -500, 0],
        [-500, 500, 0]
    ];
    testValues.forEach(function (row) {
        it(`sum(${row[0]},${row[1]})=${row[2]}`, function () {
            expect(sum(row[0], row[1])).to.equal(row[2]);
        });
    });
})