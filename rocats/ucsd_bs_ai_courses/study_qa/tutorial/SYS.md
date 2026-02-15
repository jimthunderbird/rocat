# Systems Programming

This section covers the systems-level courses in the UCSD BS AI program: **CSE 25** (Introduction to Computer Organization), **CSE 29** (Systems Programming in C and Assembly), and **CSE 30** (Computer Organization and Systems Programming). These courses reveal what happens beneath the abstractions of high-level languages, giving you the knowledge to write efficient, reliable software.

## What You Will Learn

Systems programming is about understanding how software interacts with hardware. You will learn the C programming language, how memory is organized and managed, how processors execute instructions, and how operating systems manage resources. This low-level understanding is what separates a programmer who can build things from one who can build things that actually perform well.

## Module Breakdown

- **[Module 1 -- C Programming & Memory](SYS-module-1.md)**
  Learn the C language, pointers, manual memory management, and common pitfalls like buffer overflows and memory leaks.

- **[Module 2 -- Computer Organization](SYS-module-2.md)**
  Understand how a processor executes instructions, the memory hierarchy, and how assembly language maps to machine operations.

- **[Module 3 -- Operating System Concepts](SYS-module-3.md)**
  Explore processes, threads, synchronization, and virtual memory -- the mechanisms that let multiple programs share one machine.

## Why It Matters for AI

- **Performance-critical AI code** (training loops, inference engines) is often written in C or C++ for speed.
- Understanding **memory layout** helps you optimize data pipelines and avoid out-of-memory errors on large datasets.
- **GPU programming** (CUDA) builds directly on systems concepts like memory hierarchies and parallel execution.
- Knowing how operating systems schedule work helps you design efficient distributed training systems.

## Tips for Success

- Get comfortable with the command line and a text editor like Vim.
- Use debugging tools like `gdb` and `valgrind` early and often.
- Draw memory diagrams to visualize pointer operations.
