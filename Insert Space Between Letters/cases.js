const expect = require("../test/expect");
const method = require("./solution");
const assert = require("assert");

function testMethod(input, output) {
  const result = method(...input);
  assert.equal(result, output);
}

module.exports = {
  testCases: [
    () => {
      expect(['hello world'], 'h e l l o w o r l d', testMethod);
    },
    () => {
      expect(['hello world '], 'h e l l o w o r l d ', testMethod);
    },
    () => {
      expect([' hello world'], ' h e l l o w o r l d', testMethod);
    },
    () => {
      expect([' hello world '], ' h e l l o w o r l d ', testMethod);
    },
  ],
};
