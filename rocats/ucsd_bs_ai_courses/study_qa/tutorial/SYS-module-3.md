# Module 3 -- Operating System Concepts

## Overview

An **operating system (OS)** is the software layer between hardware and applications. It manages resources -- CPU time, memory, storage, and I/O devices -- so that multiple programs can run concurrently without interfering with each other. Understanding OS concepts is essential for writing correct concurrent programs and optimizing system-level performance.

## Processes

A **process** is a running instance of a program. Each process has its own:

- **Address space**: the range of memory addresses the process can use.
- **Program counter**: tracks which instruction is currently executing.
- **Open files and resources**: file descriptors, network sockets, etc.

The OS **scheduler** decides which process runs on the CPU at any given time. It uses scheduling algorithms (round-robin, priority-based) to balance fairness and responsiveness.

### Process Creation

- On Unix/Linux, a new process is created with the **fork()** system call, which duplicates the calling process.
- The child process can then call **exec()** to replace its code with a different program.
- Processes communicate through **inter-process communication (IPC)** mechanisms like pipes, shared memory, and message queues.

## Threads

A **thread** is a lightweight unit of execution within a process. Multiple threads share the same address space but each has its own stack and program counter.

- Threads are faster to create and switch between than processes.
- **Multithreading** enables parallelism: a program can do computation on one thread while another waits for I/O.

## Synchronization

When threads share data, **race conditions** can occur: the outcome depends on the unpredictable timing of thread execution.

- **Mutex (mutual exclusion)**: a lock that ensures only one thread accesses a critical section at a time.
- **Semaphore**: a generalized lock that allows a specified number of concurrent accesses.
- **Deadlock**: a situation where two or more threads are each waiting for the other to release a resource. Deadlocks require four conditions: mutual exclusion, hold and wait, no preemption, and circular wait.

## Virtual Memory

**Virtual memory** gives each process the illusion of having its own large, contiguous address space.

- The OS divides memory into fixed-size **pages**.
- A **page table** maps virtual addresses to physical addresses in RAM.
- When a process accesses a page not in RAM, a **page fault** occurs and the OS loads the page from disk.
- This mechanism allows the system to run programs whose total memory demand exceeds physical RAM.

## File Systems

A **file system** organizes data on persistent storage. Key concepts:

- **Files**: named collections of data.
- **Directories**: organizational structure forming a tree.
- **Inodes**: data structures that store file metadata (size, permissions, location on disk).

## Key Takeaways

- Processes provide isolation; threads provide lightweight concurrency within a process.
- Synchronization primitives like mutexes prevent race conditions but introduce the risk of deadlock.
- Virtual memory abstracts physical memory, enabling safe multitasking and efficient memory use.
- OS concepts directly affect the performance and correctness of multi-threaded AI training pipelines.
