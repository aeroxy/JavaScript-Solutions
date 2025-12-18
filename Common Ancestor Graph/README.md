# Common Ancestor Graph

Find the lowest common ancestor of two nodes in a ASCII tree.

## Visual Format

Input (including A & B as part of the ASCII tree):
```
     1
    / \
   2   3
---
A: 2
B: 3
```

Output shows the tree with the common ancestor highlighted, while the position of (x,y) of the number remains the same:
```
    [1]
    / \
   2   3
---
A: 2
B: 3
Answer: 1
```

## Problem Statement

Given a binary tree and two nodes A and B, find their lowest common ancestor. The input/output uses a visual tree representation where the common ancestor is enclosed in brackets `[ ]`.

## Examples

### Example 1
**Input:**
```
     1
    / \
   2   3
---
A: 2
B: 3
```

**Output:**
```
    [1]
    / \
   2   3
---
A: 2
B: 3
Answer: 1
```

### Example 2
**Input:**
```
       1
      / \
     2   3
    / \ / \
   4   5   6
---
A: 4
B: 5
```

**Output:**
```
       1
      / \
    [2]  3
    / \ / \
   4   5   6
---
A: 4
B: 5
Answer: 2
```

### Example 3
**Input:**
```
       1
      / \
     2   3
    / \ / \
   4   5   6
---
A: 4
B: 6
```

**Output:**
```
      [1]
      / \
     2   3
    / \ / \
   4   5   6
---
A: 4
B: 6
Answer: 1
```