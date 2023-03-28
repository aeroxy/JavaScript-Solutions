# Intuition

The problem asks to merge overlapping intervals in a given list of intervals. The first thought is to sort the intervals based on their start times. After sorting, we can iterate through the intervals once and merge the overlapping intervals. This approach will have a lower time complexity because we only need to iterate through the sorted intervals once.

# Approach

1.  Check if the input `intervals` is empty, if yes, return an empty array.
2.  Sort the `intervals` based on their start times using the `sort` function.
3.  Use the `reduce` function to iterate through the sorted intervals and merge them.
4.  Inside the `reduce` function, compare the current interval with the last interval in the accumulator array.
5.  If the current interval overlaps with the last interval, merge them by updating the end point of the last interval to the maximum end point of both intervals.
6.  If the current interval does not overlap with the last interval, add the current interval to the accumulator array.
7.  Return the merged intervals array after the `reduce` function is done processing all intervals.

# Complexity
- Time complexity: $$O(n*log(n))$$, where n is the number of intervals. The dominant factor in time complexity is the sorting step, which has a complexity of $$O(n*log(n))$$. The single iteration through the sorted intervals using the `reduce` function takes $$O(n)$$ time, which is lower than the sorting complexity.

- Space complexity: $$O(n)$$, as we are using an additional accumulator array inside the `reduce` function to store the merged intervals. In the worst case, none of the intervals overlap, and the accumulator array will have the same size as the input intervals array.

# Code
```js
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
  if (intervals.length === 0) return [];

  return intervals.sort(
    ([a], [b]) => a - b
  ).reduce(
    (acc, cur) => {
      const last = acc[acc.length - 1];
      if (cur[0] <= last[1]) {
        last[1] = Math.max(last[1], cur[1]);
      } else {
        acc.push(cur);
      }
      return acc;
    }, 
    [intervals[0]],
  );
}
```