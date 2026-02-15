# Module 1 -- Search & Planning

## Overview

**Search** is one of the oldest and most fundamental ideas in artificial intelligence. Many AI problems can be framed as finding a path from an initial state to a goal state through a space of possibilities. Planning extends search by considering sequences of actions that achieve complex goals.

## Problem Formulation

To apply search, you model a problem with:

- **State space**: the set of all possible configurations (e.g., all positions on a map).
- **Initial state**: where the agent starts.
- **Actions**: moves the agent can make from any given state.
- **Transition model**: defines the result of each action.
- **Goal test**: determines whether a state is a solution.
- **Path cost**: the total cost of the actions taken.

## Uninformed Search

**Uninformed (blind) search** strategies explore the state space without any knowledge of which direction is more promising.

- **Breadth-First Search (BFS)**: explores all nodes at depth d before moving to depth d+1. Guarantees the shortest path in terms of number of steps. Uses a queue.
- **Depth-First Search (DFS)**: explores as deep as possible before backtracking. Uses a stack. Memory-efficient but does not guarantee the shortest path.
- **Uniform-Cost Search (UCS)**: expands the node with the lowest cumulative path cost. Guarantees the optimal path when edge costs vary. Uses a priority queue.

## Informed Search

**Informed (heuristic) search** uses a **heuristic function** h(n) that estimates the cost from node n to the goal.

- **Greedy best-first search**: expands the node with the smallest h(n). Fast but not guaranteed to find the optimal solution.
- **A* search**: expands the node with the smallest f(n) = g(n) + h(n), where g(n) is the actual cost from the start and h(n) is the heuristic estimate to the goal.
  - A* is **optimal** if the heuristic is **admissible** (never overestimates the true cost).
  - A* is **efficient** if the heuristic is **consistent** (satisfies the triangle inequality).

### Designing Good Heuristics

A heuristic should be:

- **Admissible**: never overestimates.
- **Informative**: closer to the true cost leads to fewer node expansions.
- Example: for grid navigation, the **Manhattan distance** (sum of horizontal and vertical distances) is a common admissible heuristic.

## Adversarial Search

When an opponent is involved (as in games), you need **adversarial search**:

- **Minimax**: assumes the opponent plays optimally. Alternates between maximizing your score and minimizing the opponent's.
- **Alpha-beta pruning**: eliminates branches that cannot affect the final decision, dramatically reducing the search space.

## Key Takeaways

- Search problems are defined by states, actions, transitions, and goals.
- BFS finds shortest paths; UCS finds cheapest paths; A* combines cost with heuristics for efficiency.
- Good heuristics are the key to making informed search practical on large problems.
- Adversarial search (minimax) extends search to competitive settings like games.
