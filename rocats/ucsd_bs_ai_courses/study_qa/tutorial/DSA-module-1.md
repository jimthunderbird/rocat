# Module 1 -- Trees & Graphs

## Overview

Trees and graphs are among the most versatile data structures in computer science. A **tree** organizes data hierarchically, while a **graph** models arbitrary relationships between entities. Understanding these structures is essential for database indexing, network routing, AI search, and much more.

## Trees

A **tree** is a connected structure with a single **root** node. Each node may have zero or more **children**, and there is exactly one path between any two nodes.

- **Binary tree**: each node has at most two children (left and right).
- **Depth**: the number of edges from the root to a node.
- **Height**: the depth of the deepest node in the tree.

### Binary Search Trees (BSTs)

A **binary search tree** maintains the property that for every node, all values in the left subtree are smaller and all values in the right subtree are larger.

- **Search**: start at the root and go left or right depending on comparisons. Average time is O(log n).
- **Insert**: follow the search path and add the new node as a leaf.
- **Delete**: three cases depending on whether the node has zero, one, or two children.

A BST can degrade to O(n) if elements are inserted in sorted order. **Balanced BSTs** (AVL trees, red-black trees) guarantee O(log n) height.

### Heaps

A **heap** is a complete binary tree where each parent is greater than (max-heap) or less than (min-heap) its children.

- **Insert**: add the element at the bottom and "bubble up."
- **Extract-min/max**: remove the root, move the last element to the root, and "bubble down."
- Heaps power **priority queues**, which are used in Dijkstra's algorithm and A* search.

## Graphs

A **graph** G = (V, E) consists of a set of **vertices** V and a set of **edges** E connecting pairs of vertices.

- **Directed graph**: edges have a direction (A -> B does not imply B -> A).
- **Undirected graph**: edges have no direction.
- **Weighted graph**: each edge has an associated cost or distance.

### Graph Representations

- **Adjacency matrix**: a V x V matrix where entry (i, j) is 1 if there is an edge from i to j. Fast lookups but uses O(V^2) space.
- **Adjacency list**: each vertex stores a list of its neighbors. Space-efficient for sparse graphs.

### Graph Traversals

- **Breadth-First Search (BFS)**: explores neighbors level by level using a queue. Finds the shortest path in unweighted graphs.
- **Depth-First Search (DFS)**: explores as deep as possible before backtracking using a stack (or recursion). Useful for cycle detection and topological sorting.

## Key Takeaways

- BSTs provide efficient ordered storage; balanced variants guarantee logarithmic operations.
- Heaps efficiently track the minimum or maximum element and are essential for priority-based algorithms.
- Graphs model relationships; BFS and DFS are the fundamental traversal algorithms.
- Choosing between adjacency matrices and lists depends on graph density.
