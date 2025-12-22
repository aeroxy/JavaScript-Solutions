const expect = require("../test/expect");
const method = require("./solution");
const assert = require("assert");

function testMethod(input, output) {
  return assert.deepEqual(
    method(...input),
    output,
  );
}

module.exports = {
  testCases: [
    // Case 1: Example 1 from README
    // C = 10, N = 2, A = [1, 6], B = [3, 7], K = 7
    // Expected Return Value = 22
    () => expect(
      [
        10,
        2,
        [1, 6],
        [3, 7],
        7,
      ],
      22,
      testMethod,
    ),

    // Case 2: Example 2 from README
    // C = 50, N = 3, A = [39, 19, 28], B = [49, 27, 35], K = 15
    // Expected Return Value = 35
    () => expect(
      [
        50,
        3,
        [39, 19, 28],
        [49, 27, 35],
        15,
      ],
      35,
      testMethod,
    ),

    // Case 3: Single tunnel, K = 0
    // C = 10, N = 1, A = [1], B = [3], K = 0
    // Expected Return Value = 0
    () => expect(
      [
        10,
        1,
        [1],
        [3],
        0,
      ],
      0,
      testMethod,
    ),

    // Case 4: Single tunnel, K = tunnel length
    // C = 10, N = 1, A = [1], B = [3], K = 2
    // Expected Return Value = 3 (1 second to enter, 2 seconds in tunnel)
    () => expect(
      [
        10,
        1,
        [1],
        [3],
        2,
      ],
      3,
      testMethod,
    ),

    // Case 5: Multiple tunnels, K = sum of tunnel lengths
    // C = 10, N = 2, A = [1, 6], B = [3, 7], K = 3
    // Expected Return Value = 7 (1 second to enter first tunnel, 2 seconds in first tunnel, 1 second to enter second tunnel, 1 second in second tunnel)
    () => expect(
      [
        10,
        2,
        [1, 6],
        [3, 7],
        3,
      ],
      7,
      testMethod,
    ),

    // Case 6: Edge case - K = 1
    // C = 10, N = 1, A = [1], B = [3], K = 1
    // Expected Return Value = 2 (1 second to enter, 1 second in tunnel)
    () => expect(
      [
        10,
        1,
        [1],
        [3],
        1,
      ],
      2,
      testMethod,
    ),
  ],
};