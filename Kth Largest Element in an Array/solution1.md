# Intuition
The first thought on solving this problem is to use a bucket sort-like approach, where we separate positive and negative numbers into two different arrays (posBucket and negBucket) and use the array indices as the actual numbers while keeping track of their frequencies.

# Approach
1.  Create two empty arrays, posBucket and negBucket, to store the counts of positive and negative numbers, respectively.
2.  Iterate through the input array (nums) and increment the count of the corresponding number in either posBucket or negBucket.
3.  Iterate through posBucket in reverse order (from largest to smallest), decreasing the value of k by the count of each positive number.
4.  When k becomes equal to or less than the count of the current number, return the index of the current number.
5.  If k is not found in posBucket, iterate through negBucket (from the largest absolute value to the smallest), decreasing the value of k by the count of each negative number.
6.  When k becomes equal to or less than the count of the current number, return the negative index of the current number.

# Complexity
- Time complexity: $$O(n+m)$$, where n is the length of the input array (nums) and m is the range of the numbers in the array (104 in the description but actually much larger in the test cases). In some cases, m is much smaller than n, so the time complexity is approximately $$O(n)$$.

- Space complexity: $$O(m)$$, where m is the range of the numbers in the array. The space complexity is determined by the size of the posBucket and negBucket arrays.

# Code
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
  const posBucket = [];
  const negBucket = [];
  for (let num of nums) {
    if (num >= 0) {
      posBucket[num] = (posBucket[num] ?? 0) + 1;
    } else {
      negBucket[-num] = (negBucket[-num] ?? 0) + 1;
    }
  }
  for (let i = posBucket.length - 1; i >= 0; --i) {
    k -= posBucket[i] ?? 0;
    if (k <= 0) {
      return i;
    }
  }
  for (let i = 1; i < negBucket.length; ++i) {
    k -= negBucket[i] ?? 0;
    if (k <= 0) {
      return -i;
    }
  }
}
```