# Intuition
My first thoughts on solving this problem are to use a hash map to keep track of the frequency of each element in the array. Then, I can iterate through the array, updating the hash map and checking if the frequency of the current element exceeds the threshold `⌊n / 2⌋`.

# Approach
1.  Create a hash map (called `hashSet` in this code) to store the frequency of each element in the array `[]`. This is proven to be faster than a hashMap (aka an object `{}`).
2.  Calculate the threshold `n` as half the length of the input array.
3.  Iterate through the input array `nums`.
4.  For each element `num`, update its frequency in the hash map `hashSet`.
5.  If the frequency of the current element `num` exceeds the threshold `n`, return the element as the majority element.

# Complexity
- Time complexity: $$O(n)$$, where n is the length of the input array `nums`. This complexity arises because we are iterating through the entire array once.
- Space complexity: $$O(m)$$, where m is the number of unique elements in the input array `nums`. This complexity arises from the use of the hash map to store the frequency of each unique element.

# Code
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const hashSet = [];
  const n = nums.length / 2;
  for (let num of nums) {
    hashSet[num] = (hashSet[num] ?? 0) + 1;
    if (hashSet[num] > n) {
      return num;
    }
  }
};
```