const expect = require("../test/expect");
const method = require("./solution");
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
  const resultProcessed = result.map((array) =>
    array.sort((a, b) => a - b).join(",")
  );
  const outputProcessed = output.map((array) =>
    array.sort((a, b) => a - b).join(",")
  );

  for (let hash of resultProcessed) {
    if (!omit(outputProcessed, hash)) {
      assert.fail(`${hash} does not exist in output`);
    }
  }

  if (outputProcessed.length) {
    assert.fail(
      `Did not generate all the output required: ${outputProcessed.join(" | ")}`
    );
  } else {
    assert.ok(true, "Passed");
  }
}

module.exports = {
  testCases: [
    () => {
      expect(
        [[10, 1, 2, 7, 6, 1, 5], 8],
        [
          [1, 1, 6],
          [1, 2, 5],
          [1, 7],
          [2, 6],
        ],
        testMethod
      );
    },
    () => {
      expect([[2, 5, 2, 1, 2], 5], [[1, 2, 2], [5]], testMethod);
    },
  ],
};
