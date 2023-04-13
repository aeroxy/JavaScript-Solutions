# Intuition
Given an array `nums` and an integer `k`, the problem requires us to rotate the array to the right by `k` steps. To achieve this, we can simply take the last `k` elements from the array and insert them at the beginning of the array.

# Approach
1.  Calculate the effective number of steps by using the modulo operation `k %= length` to handle cases where `k` is greater than the length of the array.
2.  Using the splice function, remove the last `k` elements from the array and insert them at the beginning of the array.

# Complexity
- Time complexity: $$O(1)$$ since the splice function has a constant time complexity for this specific use case.
- Space complexity: $$O(1)$$ as we are not using any additional data structures, and the modifications are done in-place.

# Code
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const length = nums.length;
  k %= length;
  nums.splice(0, 0, ...nums.splice(length - k));
};
```