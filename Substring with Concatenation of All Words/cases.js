const expect = require('../test/expect');
const method = require('./solution2');
const assert = require('assert');

function testMethod (input, output) {
  const result = method(...input);
  result.sort((a, b) => a - b);
  assert.equal(
    JSON.stringify(result),
    JSON.stringify(output),
  );
};

module.exports = {
  testCases: [
    () => {
      expect([
        'barfoothefoobarman',
        ['foo','bar'],
      ], [0,9], testMethod);
    },
    () => {
      expect([
        'wordgoodgoodgoodbestword',
        ['word','good','best','word'],
      ], [], testMethod);
    },
    () => {
      expect([
        'barfoofoobarthefoobarman',
        ['bar','foo','the'],
      ], [6,9,12], testMethod);
    },
    () => {
      expect([
        'aaaaaaaaaaaaaa',
        ['aa','aa'],
      ], [0,1,2,3,4,5,6,7,8,9,10], testMethod);
    }
  ],
};