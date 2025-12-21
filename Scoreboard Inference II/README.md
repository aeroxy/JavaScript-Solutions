Scoreboard Inference II
====================================

You are spectating a programming contest with N competitors, each trying to independently solve the same set of programming problems. Each problem has a point value, which is **either 1, 2, or 3**.

On the scoreboard, you observe that the ith competitor has attained a score of S[i], which is a positive integer equal to the sum of the point values of all the problems they have solved.

The scoreboard does not display the number of problems in the contest, nor their point values. Using the information available, you would like to determine the minimum possible number of problems in the contest.

Constraints
-----------

1 ≤ N ≤ 500,000
1 ≤ S[i] ≤ 1,000,000,000

Input Format
------------

The input consists of:
- N: The number of competitors
- S: An array of N integers, where S[i] is the score of the ith competitor

Output Format
-------------

Return the minimum possible number of problems in the contest that could result in the given scores.

Example 1
---------

**Input:**
```
N = 5
S = [1, 2, 3, 4, 5]
```

**Output:**
```
3
```

**Explanation:** It's possible that there are as few as 3 problems in the contest, for example with point values [1, 1, 3]. The 5 competitors could have solved the following subsets of problems:
1. Problem 1 (1 point)
2. Problems 1 and 2 (1 + 1 = 2 points)
3. Problem 3 (3 points)
4. Problems 2 and 3 (1 + 3 = 4 points)
5. All 3 problems (1 + 1 + 3 = 5 points)

It is impossible for all 5 competitors to have achieved their scores if there are fewer than 3 problems.

Example 2
---------

**Input:**
```
N = 4
S = [4, 3, 3, 4]
```

**Output:**
```
2
```

**Explanation:** One optimal set of point values is [1, 3].

Example 3
---------

**Input:**
```
N = 4
S = [2, 4, 6, 8]
```

**Output:**
```
4
```

**Explanation:** One optimal set of point values is [2, 2, 2, 2].

Example 4
---------

**Input:**
```
N = 1
S = [8]
```

**Output:**
```
3
```
