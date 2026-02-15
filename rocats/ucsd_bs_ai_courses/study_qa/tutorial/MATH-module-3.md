# Module 3 -- Discrete Math & Combinatorics

## Overview

**Discrete mathematics** studies structures that are fundamentally countable or separated, as opposed to continuous quantities handled by calculus. It provides the logical foundation for computer science: reasoning about truth, counting possibilities, and analyzing the structure of graphs and networks.

## Propositional Logic

**Logic** is the study of formal reasoning. A **proposition** is a statement that is either true or false.

- **AND** (conjunction): p AND q is true only when both p and q are true.
- **OR** (disjunction): p OR q is true when at least one is true.
- **NOT** (negation): NOT p flips the truth value.
- **Implication**: p implies q (p -> q) is false only when p is true and q is false.

Logical reasoning is central to **formal verification**, database queries (SQL uses Boolean logic), and AI planning systems.

## Proof Techniques

- **Direct proof**: assume the hypothesis and derive the conclusion step by step.
- **Proof by contradiction**: assume the opposite of what you want to prove and show it leads to a contradiction.
- **Mathematical induction**: prove a base case, then show that if the statement holds for n it also holds for n+1. Induction is essential for proving properties of recursive algorithms.

## Sets and Functions

A **set** is an unordered collection of distinct elements. Key operations include union, intersection, and difference. A **function** maps each element of one set to exactly one element of another. Functions can be **injective** (one-to-one), **surjective** (onto), or **bijective** (both).

## Counting and Combinatorics

- **Multiplication principle**: if task A has m outcomes and task B has n outcomes, there are m * n combined outcomes.
- **Permutations**: the number of ordered arrangements of n items is n! (n factorial).
- **Combinations**: the number of ways to choose k items from n (order does not matter) is C(n, k) = n! / (k! * (n-k)!).
- **Pigeonhole principle**: if you place n+1 items into n boxes, at least one box has more than one item.

Combinatorics appears in algorithm analysis (counting operations), probability (counting favorable outcomes), and cryptography.

## Graph Theory Basics

A **graph** consists of **vertices** (nodes) connected by **edges**. Graphs model networks, social connections, road maps, and dependencies.

- A graph can be **directed** (edges have a direction) or **undirected**.
- A **path** is a sequence of edges connecting two vertices.
- A **cycle** is a path that starts and ends at the same vertex.

## Key Takeaways

- Logic and proofs are the foundation for rigorous reasoning in CS.
- Combinatorics provides tools for counting outcomes, critical for algorithm analysis and probability.
- Graph theory models relationships and networks that arise in countless CS applications.
- Discrete math bridges the gap between abstract mathematics and practical computing.
