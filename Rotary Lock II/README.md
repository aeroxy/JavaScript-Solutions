You're trying to open a lock. The lock comes with two wheels, each of which has the integers from 1 to N arranged in a circle in order around it (with integers 1 and N adjacent to one another). Each wheel is initially pointing at 1.

It takes 1 second to rotate a wheel by 1 unit to an adjacent integer in either direction, and it takes no time to select an integer once a wheel is pointing at it.

The lock will open if you enter a certain code. The code consists of a sequence of M integers, the ith of which is Ci. For each integer in the sequence, you may select it with either of the two wheels. Determine the minimum number of seconds required to select all M of the code's integers in order.

Constraints

3 ≤ N ≤ 1,000,000,000
1 ≤ M ≤ 3,000
1 ≤Ci ≤N