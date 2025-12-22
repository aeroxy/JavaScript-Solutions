Tunnel Time
============

There’s a circular train track with a circumference of C metres. Positions along the track are measured in metres, clockwise from its topmost point. For example, the topmost point is position 0, 1 metre clockwise along the track is position 1, and 1 metre counterclockwise along the track is position C−1.

A train with negligible length runs clockwise along this track at a speed of 1 metre per second, starting from position 0. After C seconds go by, the train will have driven around the entire track and returned to position 0, at which point it will continue going around again, with this process repeated indefinitely.

There are N tunnels covering sections of the track, the ith of which begins at position A[i] and ends at position B[i] (and therefore has a length of B[i] - A[i] metres). No tunnel covers or touches position 0 (including at its endpoints), and no two tunnels intersect or touch one another (including at their endpoints). For example, if there's a tunnel spanning the interval of positions [1, 4], there cannot be another tunnel spanning intervals [2, 3] nor [4, 5].

The train’s tunnel time is the total number of seconds it has spent going through tunnels so far. Determine the total number of seconds which will go by before the train’s tunnel time becomes K.

Constraints
-----------

3 ≤ C ≤ 10^12
1 ≤ N ≤ 500,000
1 ≤ A[i] < B[i] ≤ C-1
1 ≤ K ≤ 10^12

Each test case's parameters will be formulated such that the correct answer for that case is at most 10^15.

Sample test case #1
-------------------

**Input:**
```
C = 10
N = 2
A = [1, 6]
B = [3, 7]
K = 7
```

**Output:**
```
22
```

**Explanation:**
In the first case, the train track (depicted below) has points 0...9, with one tunnel spanning the interval of positions [1, 3] and another spanning [6, 7]. In order to reach a tunnel time of 7, the train will need to go around the complete track twice and then stop at position 2. The total time taken in doing so is 10 + 10 + 2 = 22 seconds.

Sample test case #2
-------------------

**Input:**
```
C = 50
N = 3
A = [39, 19, 28]
B = [49, 27, 35]
K = 15
```

**Output:**
```
35
```

**Explanation:**
In the second case, the train's tunnel time will reach 15 seconds after 35 seconds have passed, right as the train exits tunnel 3 (having previously gone through tunnel 2).