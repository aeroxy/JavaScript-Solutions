const expect = require('../test/expect');
const method = require('./solution1');
const assert = require('assert');

function testMethod(input, output) {
  const result = method(...input);
  assert.equal(
    output,
    result,
  );
};

module.exports = {
  testCases: [
    () => {
      expect(
        [
          'term:"cat and dog" and keyword:view or keyword:impression',
        ],
        'term:"cat and dog" AND keyword:view OR keyword:impression',
        testMethod
      );
    },
    () => {
      expect(
        [
          'cat and dog',
        ],
        'cat AND dog',
        testMethod
      );
    },
    () => {
      expect(
        [
          'cat or dog',
        ],
        'cat OR dog',
        testMethod
      );
    },
    () => {
      expect(
        [
          '"cat and dog" or "cat or dog"',
        ],
        '"cat and dog" OR "cat or dog"',
        testMethod
      );
    },
    () => {
      expect(
        [
          '"cat and dog" plus "cat or dog"',
        ],
        '"cat and dog" plus "cat or dog"',
        testMethod
      );
    },
  ],
};