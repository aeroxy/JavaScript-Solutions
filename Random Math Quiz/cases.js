const expect = require('../test/expect');
const method = require('./solution');
const assert = require('assert');

function validateQuiz(quiz) {
  const array = quiz.split(' ').map((str) => {
    const num = parseInt(str);
    return isNaN(num) ? str : num;
  });
  if (
    array.length !== 5 ||
    !array.includes('__') ||
    !(['+', '-'].includes(array[1]))
  ) {
    return false;
  }
  if ((new Set(array)).size !== array.length) {
    return false;
  }
  for (let el of array) {
    if (
      typeof el === 'number' &&
      (!Number.isInteger(el) || el > 19 || el < 1)
    ) {
      return false;
    }
  }
  if (array[4] === '__' && array[1] === '+') {
    return array[0] + array[2] > 19 ? false : true;
  }
  if (array[0] === '__' && array[1] === '-') {
    return array[2] + array[4] > 19 ? false : true;
  }
  if (array[0] === '__' && array[1] === '+') {
    return array[4] - array[2] > 0 ? true : false;
  }
  if (array[2] === '__' && array[1] === '+') {
    return array[4] - array[0] > 0 ? true : false;
  }
  if (array[2] === '__' && array[1] === '-') {
    return array[0] - array[4] > 0 ? true : false;
  }
  if (array[4] === '__' && array[1] === '-') {
    return array[0] - array[2] > 0 ? true : false;
  }
  return true;
}

function testMethod (input, output) {
  for (let i = 0; i < 100; ++i) {
    const string = method(...input);
    const result = validateQuiz(string);
    if (result !== output) {
      console.log(string);
    }
    assert.equal(
      output,
      result,
    );
  }
};

module.exports = {
  testCases: [
    () => {
      expect([
        [],
      ], true, testMethod);
    },
  ],
};