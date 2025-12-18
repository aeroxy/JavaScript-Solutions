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
    // Case 1: Standard Example (Facebook Hacker Cup Sample)
    // N=10, Code=[9, 4, 4, 8]
    // 1 -> 9 (dist 2) [W1 at 9, W2 at 1]
    // 1 -> 4 (dist 3) [W1 at 9, W2 at 4] - Move W2 (Cost 2+3=5)
    // 4 -> 4 (dist 0) [W1 at 9, W2 at 4] - Stay (Cost 5+0=5)
    // 9 -> 8 (dist 1) [W1 at 8, W2 at 4] - Move W1 (Cost 5+1=6)
    () => expect(
      [
        10,
        4,
        [9, 4, 4, 8],
      ],
      6,
      testMethod,
    ),

    // Case 2: Simple Split Optimization
    // N=10, Code=[2, 10, 2]
    // Both wheels start at 1.
    // 1 -> 2 (dist 1) [W1 at 2, W2 at 1]
    // 1 -> 10 (dist 1) [W1 at 2, W2 at 10] - Move W2
    // 2 -> 2 (dist 0) [W1 at 2, W2 at 10] - Use W1
    // Total: 1 + 1 + 0 = 2
    () => expect(
      [
        10,
        3,
        [2, 10, 2],
      ],
      2,
      testMethod,
    ),

    // Case 3: Circular Boundary Logic (N=5)
    // 1 is adjacent to 5.
    // Code=[2, 5]
    // 1 -> 2 (dist 1)
    // 1 -> 5 (dist 1)
    // Total 2.
    () => expect(
      [
        5,
        2,
        [2, 5],
      ],
      2,
      testMethod,
    ),

    // Case 4: Alternating Targets (Camping Strategy)
    // N=10, Code=[3, 9, 3, 9]
    // W1 takes 3s, W2 takes 9s.
    // 1->3 (2), 1->9 (2), 3->3 (0), 9->9 (0).
    // Total 4.
    () => expect(
      [
        10,
        4,
        [3, 9, 3, 9],
      ],
      4,
      testMethod,
    ),

    // Case 5: Large N Constraints
    // N=1,000,000, Code=[2, 1000000]
    // 1 -> 2 (dist 1)
    // 1 -> 1000000 (dist 1 via boundary)
    // Total 2.
    () => expect(
      [
        1000000,
        2,
        [2, 1000000],
      ],
      2,
      testMethod,
    ),

    // Case 6: No movement required
    // Start at 1, Code=[1, 1, 1]
    () => expect(
      [
        50,
        3,
        [1, 1, 1],
      ],
      0,
      testMethod,
    ),

    // Case 7: Linear path (Single wheel is sufficient)
    // N=10, Code=[2, 3, 4]
    // 1->2(1) + 2->3(1) + 3->4(1) = 3
    () => expect(
      [
        10,
        3,
        [2, 3, 4],
      ],
      3,
      testMethod,
    ),

    // Case 8: Simple small movement
    // N=3, M=3, Code=[2, 3, 2]
    // Optimal: A moves to 2 (1), B moves to 3 (1), A stays (0). Total 2.
    () => expect(
      [
        3,
        3,
        [2, 3, 2],
      ],
      2,
      testMethod,
    ),

    // Case 9: Crossing paths (The Greedy Trap)
    // N=10, M=4, Code=[9, 3, 8, 4]
    // Optimal: 
    // 1. Move A 1->9 (dist 2). State: A=9, B=1.
    // 2. Move B 1->3 (dist 2). State: A=9, B=3.
    // 3. Move A 9->8 (dist 1). State: A=8, B=3.
    // 4. Move B 3->4 (dist 1). State: A=8, B=4.
    // Total: 2+2+1+1 = 6.
    () => expect(
      [
        10,
        4,
        [9, 3, 8, 4],
      ],
      6,
      testMethod,
    ),

    // Case 10: Large N (Test wrap-around math)
    // N=1,000,000,000.
    // Optimal: Different wheels: 1->2 (1) + 1->N (1) = 2
    () => expect(
      [
        1000000000,
        2,
        [2, 1000000000],
      ],
      2,
      testMethod,
    ),

    // Case 11: Repeated code (Should cost 0)
    // Move 1 -> 5. Then stay at 5.
    () => expect(
      [
        10,
        3,
        [5, 5, 5],
      ],
      4, // 1->5 is 4 steps. 5->5 is 0. 5->5 is 0.
      testMethod,
    ),

    // Case 12: The prompt's constraints sample
    // Just ensuring function handles N=3 (min constraint)
    () => expect(
      [
        3,
        1,
        [3],
      ],
      1, // 1->3 is dist 1 (1->3 backwards)
      testMethod,
    ),
    
    // Case 13: Split workload
    // Targets far apart: [2, 9, 2, 9] on N=10
    // Wheel A handles '2', Wheel B handles '9'.
    // 1->2 (cost 1). 1->9 (cost 2). 2->2 (0). 9->9 (0).
    // Total = 3.
    () => expect(
      [
        10,
        4,
        [2, 9, 2, 9],
      ],
      3, 
      testMethod,
    ),
  ],
};