const assert = require('chai').assert;
const main = require('../main');

//Results
const helloWorldText = main.helloWorld();
const substractionResult = main.substraction(4, 2);
const arrayOfNumbers = main.arrayOfNumbers();

describe('Main suite', function () {
    describe('Hello World Method - Test Cases ', function () {
        it('Hello World text is a expected', function () {
            assert.equal(helloWorldText, 'Hello World')
        });
        it('Validate data type', function () {
            assert.typeOf(helloWorldText, 'string', 'The expected datatype is a string');
        });
    });

    describe('Substraction Method - Test Cases ', function () {
        it('Less than 5', function () {
            assert.isBelow(substractionResult, 5);
        });

        it('Validate data type', function () {
            assert.typeOf(substractionResult, 'number', 'The expected datatype is a number');
        });
    });


    describe('Array Method - Test Cases ', function () {
        it('Array includes the number 5', function () {
            assert.include(arrayOfNumbers, 5);
        });

        it('Validate array length', function () {
            assert.lengthOf(arrayOfNumbers, 6);
        });

    });


});
