# Intuition
The problem requires us to rotate an array `nums` to the right by `k` steps. One way to solve this problem is by reversing sections of the array. We can reverse the entire array first, then reverse the first `k` elements, and finally reverse the remaining elements. This will result in the rotated array.

# Approach
1.  Calculate the effective number of steps using modulo operation `k %= nums.length` to handle cases where `k` is greater than the length of the array.
2.  Reverse the entire array using a helper function `reverse`.
3.  Reverse the first `k` elements of the array using the `reverse` function.
4.  Reverse the remaining elements of the array using the `reverse` function.

# Helper Function
- `reverse`: A function to reverse a portion of an array given start and end indices.

# Complexity
- Time complexity: $$O(2*n)$$, where `n` is the length of the array. Each of the three reverse operations takes a maxium of $$O(n)$$ time.
- Space complexity: $$O(1)$$, as no additional data structures are used and the modifications are done in-place.

# Code
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const n = nums.length - 1;
  k %= nums.length;

  const reverse = (start, end) => {
    let tmp;
    while (start < end) {
      tmp = nums[start];
      nums[start] = nums[end];
      nums[end] = tmp;
      ++start;
      --end;
    }
  };

  reverse(0, n);
  reverse(0, k - 1);
  reverse(k, n);
};
```