# Intuition
The problem is about finding the maximum amount that can be robbed from houses, given that we cannot rob two adjacent houses. The first idea that comes to mind is to use dynamic programming. We can iterate through the houses, and at each step, we decide to either rob the current house or skip it.

# Approach
We can use an array to keep track of the maximum amount that can be robbed up to a certain house. We initialize a result array of size 2 to store the maximum amounts. We start from the third last house and iterate backward. For each house, we calculate the maximum amount that can be robbed if we rob this house, which is the sum of the amount in the current house and the maximum amount that can be robbed from the remaining houses two steps away. We alternate the index in the result array using modulo operation to store the maximum amounts for every other step. After calculating the maximum amount for each house, we can return the maximum amount from the first and second house.

# Complexity
- Time complexity: $$O(n)$$, where nnn is the number of houses, as we iterate through the array once.

- Space complexity: $$O(1)$$, as we use a constant amount of extra space in the result array.

# Code
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let result = [0, 0];
  for (let i = nums.length - 3; i >= 0; --i) {
    const k = i % 2;
    result[k] = Math.max(nums[i + 2] ?? 0, result[k]);
    nums[i] += Math.max(...result);
  }
  return Math.max(...nums.splice(0, 2));
};
```