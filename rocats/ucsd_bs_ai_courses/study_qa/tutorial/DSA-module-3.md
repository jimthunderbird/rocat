# Module 3 -- Dynamic Programming & Greedy Algorithms

## Overview

Many computational problems ask you to find the best solution among a huge number of possibilities. **Dynamic programming (DP)** and **greedy algorithms** are two powerful strategies for tackling these optimization problems efficiently.

## Dynamic Programming

**Dynamic programming** solves problems by breaking them into overlapping subproblems, solving each subproblem once, and storing the results for reuse.

### When to Use DP

A problem is a good candidate for DP when it has:

- **Optimal substructure**: the optimal solution to the problem can be built from optimal solutions to its subproblems.
- **Overlapping subproblems**: the same subproblems are solved repeatedly in a naive recursive approach.

### Two Approaches

- **Top-down (memoization)**: write a recursive solution and cache results of subproblems so they are not recomputed.
- **Bottom-up (tabulation)**: fill in a table starting from the smallest subproblems and building up to the final answer.

### Classic Example -- Fibonacci Numbers

A naive recursive computation of Fibonacci(n) takes O(2^n) time because it recomputes the same values many times. With DP:

```
fib[0] = 0, fib[1] = 1
for i from 2 to n:
    fib[i] = fib[i-1] + fib[i-2]
```

This runs in O(n) time and O(n) space (reducible to O(1) space).

### Other Classic DP Problems

- **Longest Common Subsequence (LCS)**: find the longest subsequence common to two strings. Used in diff tools and bioinformatics.
- **Knapsack problem**: maximize the total value of items that fit within a weight capacity.
- **Shortest paths**: the Bellman-Ford algorithm uses DP to find shortest paths even with negative edge weights.

## Greedy Algorithms

A **greedy algorithm** makes the locally optimal choice at each step, hoping to arrive at a globally optimal solution.

### When Greedy Works

Greedy algorithms require the **greedy-choice property**: a locally optimal choice never needs to be reconsidered. Not all problems have this property, so greedy does not always yield the optimal answer.

### Classic Examples

- **Activity selection**: given a set of activities with start and end times, select the maximum number of non-overlapping activities. The greedy strategy is to always pick the activity that finishes earliest.
- **Huffman coding**: build an optimal prefix-free code for data compression by repeatedly combining the two least-frequent symbols.
- **Dijkstra's algorithm**: find shortest paths from a source in a graph with non-negative edge weights by always expanding the closest unvisited vertex.

### Greedy vs. DP

| Aspect | Greedy | Dynamic Programming |
|---|---|---|
| Approach | Make the best local choice | Consider all subproblems |
| Correctness | Must prove greedy-choice property | Guaranteed when substructure holds |
| Efficiency | Typically faster and simpler | May require more time and space |

## Key Takeaways

- DP trades space for time by storing subproblem solutions; it guarantees optimality when the problem has optimal substructure and overlapping subproblems.
- Greedy algorithms are simpler and faster but only correct when the greedy-choice property holds.
- Learning to recognize which paradigm fits a given problem is a core algorithmic skill.
- Both paradigms appear extensively in AI: DP in reinforcement learning, greedy in heuristic search.
