# Intuition
This is a classic sorting problem where we are given an array of numbers and we need to sort them. Here, the numbers are only 0, 1, and 2 so it makes the problem a bit easier. One simple approach is to count the frequency of each number and then overwrite the original array based on the counts.

# Approach
The approach used in this code is to first create an array `counts` of length 3 and initialize all its values to 0. Then, we loop over the `nums` array and increment the count of the number we encounter. After that, we loop over the `nums` array again and for each number at position `i`, we check if there are any more counts of the current number. If there are, we assign the current number to `nums[i]` and decrement its count. If there are no more counts of the current number, we move on to the next number by incrementing the index `index` and decrementing `i`. Once we have looped over the entire `nums` array, the array will be sorted.

# Complexity
- Time complexity: $$O(n)$$, where n is the length of the `nums` array. We loop over the array twice but each loop takes linear time.
- Space complexity: $$O(1)$$, since we only use the `counts` array which has a fixed size of 3 and does not depend on the length of the `nums` array.

# Code
```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
  const counts = Array.from({ length: 3 }, () => 0);
  let index = 0;
  for (const num of nums) {
    ++counts[num];
  }
  for (let i = 0; i < nums.length; ++i) {
    if (counts[index]) {
      nums[i] = index;
      --counts[index];
    } else {
      ++index;
      --i;
    }
  }
}
```