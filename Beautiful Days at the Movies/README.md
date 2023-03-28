Lily likes to play games with integers. She has created a new game where she determines the difference between a number and its reverse. For instance, given the number 12, its reverse is 21. Their difference is 9. The number reversed is 21, and their difference is 99.

She decides to apply her game to decision making. She will look at a numbered range of days and will only go to a movie on a _beautiful day_.

Given a range of numbered days, i...j and a number k, determine the number of days in the range that are _beautiful_. Beautiful numbers are defined as numbers where `i - reverse(i)` is evenly divisible by k. If a day's value is a beautiful number, it is a beautiful day. Return the number of beautiful days in the range.

**Function Description**

Complete the _beautifulDays_ function in the editor below.

beautifulDays has the following parameter(s):

*   _int i:_ the starting day number
*   _int j:_ the ending day number
*   _int k:_ the divisor

**Returns**

*   _int:_ the number of beautiful days in the range

**Input Format**

A single line of three space-separated integers describing the respective values of i, j, and k.

**Sample Input**

    20 23 6
    

**Sample Output**

    2