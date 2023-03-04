const expect = require("../test/expect");
const method = require("./solution2");
const assert = require("assert");

function omit(array, string) {
  for (let i = array.length - 1; i >= 0; --i) {
    if (array[i] === string) {
      array.splice(i, 1);
      return true;
    }
  }
  return false;
}

function testMethod(input, output) {
  const result = method(...input);
  const resultProcessed = result.map((array) => array.sort((a, b) => a - b).join(','));
  const outputProcessed = output.map((array) => array.sort((a, b) => a - b).join(','));

  for (let hash of resultProcessed) {
    if (!omit(outputProcessed, hash)) {
      assert.fail(`${hash} does not exist in output`);
    }
  }

  if (outputProcessed.length) {
    assert.fail(`Did not generate all the output required: ${outputProcessed.join(' | ')}`);
  } else {
    assert.ok(true, 'Passed');
  }
}

module.exports = {
  testCases: [
    () => {
      expect([[2, 3, 6, 7], 7], [[2, 2, 3], [7]], testMethod);
    },
    () => {
      expect(
        [[2, 3, 5], 8],
        [
          [2, 2, 2, 2],
          [2, 3, 3],
          [3, 5],
        ],
        testMethod
      );
    },
    () => {
      expect([[2], 1], [], testMethod);
    },
    () => {
      expect([[8,7,4,3], 11], [[8,3],[7,4],[4,4,3]], testMethod);
    },
  ],
};
