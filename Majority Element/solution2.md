# Intuition
My first thoughts on solving this problem are to use the Boyer-Moore Voting Algorithm. This algorithm maintains a count for the current candidate majority element and updates the candidate whenever the count reaches zero. This approach works because if there's a majority element in the array, it will eventually be selected as a candidate and the count will not drop to zero again.

# Approach
1.  Initialize a variable `count` to 0 and a variable `result` to store the candidate majority element.
2.  Iterate through the input array `nums`.
3.  For each element `num`, if the `count` is 0, set `result` to the current element `num`.
4.  Update the `count` by adding 1 if the current element `num` is equal to the candidate `result`, or subtracting 1 otherwise.
5.  Return `result` as the majority element after the loop.

# Complexity
- Time complexity: $$O(n)$$, where n is the length of the input array `nums`. This complexity arises because we are iterating through the entire array once.
- Space complexity: $$O(1)$$, as we only use a constant amount of extra space for the `count` and `result` variables.

# Code
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let count = 0;
  let result = null;
  for (let num of nums) {
    if (!count) {
      result = num;
    }
    count += result === num ? 1 : -1;
  }
  return result;
};
```