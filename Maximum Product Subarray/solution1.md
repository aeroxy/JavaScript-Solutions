# Intuition
The problem requires finding the maximum product of any contiguous subarray within the input array of integers. One approach to solving this problem is to use dynamic programming, where we keep track of the maximum and minimum products that can be obtained using the current element and the previous maximum and minimum products.

# Approach
We can use two arrays to store the minimum and maximum products at each position in the input array. At each position, we can compute the minimum and maximum products that can be obtained using the current element and the previous minimum and maximum products. The maximum product at each position can be computed by taking the maximum value of the maximum products array.

# Complexity
- Time complexity: $$O(n)$$, where n is the length of the input array. We iterate through the input array once.
- Space complexity: $$O(2*n)$$, where n is the length of the input array. We use two arrays of length n to store the minimum and maximum products at each position.

# Code
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let min = [];
  let max = [];
  nums.forEach((num, i) => {
    if (i === 0) {
      min[i] = num;
      max[i] = num;
    } else {
      const a = min[i - 1] * num;
      const b = max[i - 1] * num;
      min[i] = Math.min(num, a, b);
      max[i] = Math.max(num, a, b);
    }
  });
  return Math.max(...max);
};
```