# Intuition
This is a classic sorting problem where we are given an array of numbers and we need to sort them. Here, the numbers are only 0, 1, and 2 so it makes the problem a bit easier. One simple approach is to maintain three pointers, one for each number, and swap the current number with the appropriate pointer while iterating over the array.

# Approach
The approach used in this code is to maintain three pointers, `left`, `right`, and `i`, where `left` points to the last position of 0's in the array, `right` points to the first position of 2's in the array, and `i` is the current index being processed. We iterate over the array using `i` and swap the current number with either `left` or `right` pointer depending on its value. If we encounter a 0, we swap it with the number at position `left` and increment both `left` and `i`. If we encounter a 2, we swap it with the number at position `right` and decrement `right` only. If we encounter a 1, we just increment `i`. Once we have looped over the entire `nums` array, the array will be sorted.

# Complexity
- Time complexity: $$O(n)$$, where n is the length of the `nums` array. We loop over the array once, but the number of swaps is limited to 2n, which is the maximum number of iterations for this algorithm.
- Space complexity: $$O(1)$$, since we only use a constant amount of extra space for the three pointers.

# Code
```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
  if (nums.length < 2) {
    return nums;
  }
  let left = 0;
  let right = nums.length - 1;
  let i = 0;
  while (i <= right) {
    if (nums[i] === 0) {
      nums[i] = nums[left];
      nums[left] = 0;
      ++left;
      ++i;
    } else if (nums[i] === 2) {
      nums[i] = nums[right];
      nums[right] = 2;
      --right;
    } else {
      ++i;
    }
  }
  return nums;
}
```