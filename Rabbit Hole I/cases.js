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
    // Sample Case 1: Start at 3 -> 2 -> 1 -> 4 -> 1 (Cycle 1-4)
    // Visited: {3, 2, 1, 4} -> Total 4
    () => expect(
      [
        4,
        [4, 1, 2, 1],
      ],
      4,
      testMethod,
    ),

    // Sample Case 2: Disjoint cycles. 
    // Component 1: 1 <-> 4 (Size 2)
    // Component 2: 2 -> 3 -> 5 -> 2 (Size 3)
    // Max is 3.
    () => expect(
      [
        5,
        [4, 3, 5, 1, 2],
      ],
      3,
      testMethod,
    ),

    // Sample Case 3: Merge structure.
    // 5 -> 3 -> 2 <-> 4 (Cycle 2-4 is size 2, Tail 5->3 is size 2)
    // Total 4.
    () => expect(
      [
        5,
        [2, 4, 2, 2, 3],
      ],
      4,
      testMethod,
    ),

    // Edge Case: Single page pointing to itself
    // 1 -> 1. Max visits 1.
    () => expect(
      [
        1,
        [1],
      ],
      1,
      testMethod,
    ),

    // Edge Case: Linear chain into self-loop
    // 1 -> 2 -> 3 -> 3. Max visits 3.
    () => expect(
      [
        3,
        [2, 3, 3],
      ],
      3,
      testMethod,
    ),

    // Edge Case: Big Cycle (Ring)
    // 1->2->3->4->5->1. Max visits 5.
    () => expect(
      [
        5,
        [2, 3, 4, 5, 1],
      ],
      5,
      testMethod,
    ),

    // Edge Case: Two tails merging into one cycle
    // Cycle: 3 <-> 4
    // Tail A: 1 -> 2 -> 3
    // Tail B: 6 -> 3
    // Path A: 1->2->3->4->3 (Len 4)
    // Path B: 6->3->4->3 (Len 3)
    // Max is 4.
    () => expect(
      [
        6,
        [2, 3, 4, 3, 1, 3],
      ],
      5,
      testMethod,
    ),
  ],
};