# Intuition
The problem is about finding the maximum amount that can be robbed from houses, given that we cannot rob two adjacent houses. The first idea that comes to mind is to use dynamic programming. We can iterate through the houses, and at each step, we decide to either rob the current house or skip it.

# Approach
We can use an array to keep track of the maximum amount that can be robbed up to a certain house. We start from the third last house and iterate backward. For each house, we calculate the maximum amount that can be robbed if we rob this house, which is the sum of the amount in the current house and the maximum amount that can be robbed from the remaining houses two steps away. After calculating the maximum amount for each house, we can return the maximum amount from the first and second house.

# Complexity
- Time complexity: $$O(n*log(n))$$, where n is the number of houses, as we iterate through the array once, and in each operation we use `Math.max` to interate through `num.slice(i + 2)`;

- Space complexity: $$O(1)$$, as we do not use any additional data structures, and we modify the input array in place. However, since JavaScript does the garbage collection after the function ends, and we created new array by using `.slice`, the actual complexity is $$O(2*n+2)$$.

# Code
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  for (let i = nums.length - 3; i >= 0; --i) {
    nums[i] += Math.max(...nums.slice(i + 2));
  }
  return Math.max(...nums.splice(0, 2));
};
```