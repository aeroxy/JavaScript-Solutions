# Intuition

The problem asks to merge overlapping intervals in a given list of intervals. The first thought is to iterate through the intervals, comparing each interval with every other interval to check if they overlap. If they do, merge the overlapping intervals and continue iterating. Repeat this process until no more overlaps are found.

# Approach

1.  Initialize a variable `i` as 1 to keep track of the current interval being processed.
2.  Use a while loop to iterate through the intervals array until `i` is equal to the length of the intervals array.
3.  Inside the while loop, use a for loop to iterate from 0 to `i-1` to compare the current interval with previous intervals.
4.  Check if there is an overlap between the intervals by comparing the start and end points of both intervals.
5.  If there is an overlap, merge the intervals by updating the start and end points of the overlapping interval to the minimum start and maximum end points of both intervals. Then, remove the current interval from the intervals array.
6.  Reset the value of `i` to 0 to start the iteration again from the beginning, since the intervals array has been modified.
7.  After completing the for loop, increment `i` by 1.
8.  When the while loop is finished, return the merged intervals array.

# Complexity
- Time complexity: $$O(n^2)$$ where n is the number of intervals. In the worst case, we may have to compare every interval with every other interval

- Space complexity: $$O(1)$$, as we are modifying the input intervals array in-place and not using any additional data structures. All other variables used in the algorithm have constant space complexity.

# Code
```js
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
  let i = 1;
  while (i < intervals.length) {
    for (let j = 0; j < i; ++j) {
      const [jStart, jEnd] = intervals[j];
      const [iStart, iEnd] = intervals[i];
      if (
        (jStart >= iStart && jStart <= iEnd) || 
        (jEnd >= iStart && jEnd <= iEnd) ||
        (jStart <= iStart && jEnd >= iStart)
      ) {
        intervals[j][0] = Math.min(jStart, iStart);
        intervals[j][1] = Math.max(jEnd, iEnd);
        intervals.splice(i, 1);
        i = 0;
        break;
      }
    }
    ++i;
  }
  return intervals;
}
```