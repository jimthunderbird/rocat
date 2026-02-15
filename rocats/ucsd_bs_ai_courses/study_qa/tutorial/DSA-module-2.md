# Module 2 -- Sorting & Searching

## Overview

**Sorting** arranges elements in a defined order (usually ascending or descending), and **searching** finds a target element within a collection. These operations are so common that efficient implementations save enormous amounts of computation in virtually every software system.

## Why Sorting Matters

Sorting is a prerequisite for many other algorithms. Binary search requires sorted data. Database queries rely on sorted indexes. Even removing duplicates becomes trivial once a list is sorted.

## Comparison-Based Sorting Algorithms

### Simple Sorts -- O(n^2)

- **Selection sort**: repeatedly find the minimum element from the unsorted portion and swap it to the front.
- **Insertion sort**: build the sorted list one element at a time by inserting each new element into its correct position. Efficient on nearly-sorted data.
- **Bubble sort**: repeatedly swap adjacent out-of-order elements. Simple but rarely used in practice.

### Efficient Sorts -- O(n log n)

- **Merge sort**: divide the array in half, recursively sort each half, then merge the two sorted halves. Guaranteed O(n log n) but uses O(n) extra space.
- **Quick sort**: choose a **pivot**, partition elements into those less than and greater than the pivot, then recurse. Average case O(n log n), worst case O(n^2) if the pivot is poorly chosen. In practice, it is often the fastest comparison sort.
- **Heap sort**: build a max-heap from the array, then repeatedly extract the maximum. O(n log n) with O(1) extra space.

### Lower Bound

No comparison-based sorting algorithm can do better than O(n log n) in the worst case. This is a proven theoretical limit.

## Non-Comparison Sorts

- **Counting sort**: counts occurrences of each value. O(n + k) where k is the range of values. Only works for integers within a bounded range.
- **Radix sort**: sorts digit by digit, using a stable sort (like counting sort) at each digit. O(d * (n + k)) where d is the number of digits.

## Searching

### Linear Search

Examine each element one by one. Works on unsorted data. Time: O(n).

### Binary Search

Requires sorted data. Repeatedly compare the target to the middle element and eliminate half the remaining elements. Time: O(log n).

```
low = 0, high = n - 1
while low <= high:
    mid = (low + high) / 2
    if arr[mid] == target: found
    else if arr[mid] < target: low = mid + 1
    else: high = mid - 1
```

### Hash Tables

A **hash table** uses a hash function to map keys to array indices, providing O(1) average-case lookup, insert, and delete. **Collisions** (two keys mapping to the same index) are handled by chaining or open addressing.

## Key Takeaways

- Know the trade-offs: merge sort is stable and predictable; quick sort is fast in practice; heap sort uses constant extra space.
- Binary search is the go-to for sorted data with O(log n) efficiency.
- Hash tables offer constant-time average operations but require good hash functions.
- Understanding sorting and searching is essential for algorithm design and coding interviews.
