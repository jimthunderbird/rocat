# Module 2 -- Computer Organization

## Overview

**Computer organization** is the study of how a computer's hardware components work together to execute programs. Understanding this level gives you insight into why some code runs fast and other code runs slowly, even when both produce the same result.

## The Von Neumann Architecture

Most modern computers follow the **Von Neumann model**, which consists of:

- **Central Processing Unit (CPU)**: executes instructions. Contains the **Arithmetic Logic Unit (ALU)** for computation and the **Control Unit** for instruction sequencing.
- **Memory (RAM)**: stores both data and instructions.
- **Input/Output (I/O)**: devices for interacting with the outside world (keyboard, display, network).
- **Bus**: the communication pathway connecting CPU, memory, and I/O.

The key idea is the **stored-program concept**: instructions and data reside in the same memory and are fetched by the CPU one at a time.

## Instruction Execution Cycle

The CPU repeatedly performs the **fetch-decode-execute** cycle:

1. **Fetch**: read the next instruction from memory at the address in the **program counter (PC)**.
2. **Decode**: determine what operation the instruction specifies.
3. **Execute**: carry out the operation (arithmetic, memory access, branching).
4. Update the program counter to point to the next instruction.

## Assembly Language

**Assembly language** is a human-readable representation of machine instructions. Each assembly instruction maps (nearly) one-to-one to a machine instruction.

- **Registers**: small, fast storage locations inside the CPU (e.g., `%rax`, `%rbx` on x86-64).
- **MOV**: copies data between registers or between registers and memory.
- **ADD, SUB, MUL**: arithmetic operations.
- **CMP and JMP**: comparison and conditional/unconditional branching.

Understanding assembly helps you see exactly what the compiler produces from your C code and diagnose performance issues.

## The Memory Hierarchy

Not all memory is equally fast. The **memory hierarchy** trades off speed, size, and cost:

- **Registers**: fastest, smallest (dozens of bytes inside the CPU).
- **L1 cache**: very fast, small (kilobytes), close to the CPU.
- **L2/L3 cache**: fast, larger (megabytes).
- **Main memory (RAM)**: slower, large (gigabytes).
- **Disk/SSD**: slowest, largest (terabytes).

**Cache locality** is a critical performance concept:

- **Temporal locality**: recently accessed data is likely to be accessed again soon.
- **Spatial locality**: data near recently accessed addresses is likely to be accessed soon.

Writing code that respects locality (e.g., accessing arrays sequentially rather than randomly) can yield dramatic speedups.

## Number Representation

- **Binary**: computers represent all data in base 2.
- **Two's complement**: the standard encoding for signed integers.
- **Floating point** (IEEE 754): represents real numbers with a sign, exponent, and mantissa. Be aware of rounding errors.

## Key Takeaways

- The CPU fetches, decodes, and executes instructions in a continuous cycle.
- Assembly language reveals the true cost of high-level operations.
- The memory hierarchy means that data locality often matters more than algorithmic cleverness for performance.
- Understanding number representation prevents subtle bugs with overflow and floating-point precision.
