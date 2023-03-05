const expect = require("../test/expect");
const method = require("./solution4");
const assert = require("assert");

function testMethod(input, output) {
  const result = method(...input);
  assert.equal(result, output);
}

module.exports = {
  testCases: [
    () => {
      expect([[1, 2, 0]], 3, testMethod);
    },
    () => {
      expect([[3, 4, -1, 1]], 2, testMethod);
    },
    () => {
      expect([[7, 8, 9, 11, 12]], 1, testMethod);
    },
    () => {
      expect([[-1,-2]], 1, testMethod);
    },
  ],
};
