# Module 1 -- C Programming & Memory

## Overview

**C** is a low-level programming language that gives you direct control over hardware resources. Unlike Java or Python, C does not manage memory for you. This power comes with responsibility: you must allocate and free memory manually, and mistakes can lead to crashes and security vulnerabilities.

## Why Learn C?

- C is the language of operating systems, embedded devices, and performance-critical software.
- Understanding C makes you a better programmer in any language because you understand what is happening "under the hood."
- Many AI frameworks (TensorFlow, PyTorch) have C/C++ backends for speed.

## Basic Syntax

C syntax will feel familiar if you know Java, but there are important differences:

- No built-in classes or objects (C is procedural, not object-oriented).
- You must `#include` header files for standard library functions.
- The `main` function is the entry point of every program.

```c
#include <stdio.h>

int main() {
    int x = 10;
    printf("x is %d\n", x);
    return 0;
}
```

## Pointers

A **pointer** is a variable that stores the memory address of another variable.

- **Declaration**: `int *p;` declares a pointer to an integer.
- **Address-of operator** (`&`): `p = &x;` stores the address of x in p.
- **Dereference operator** (`*`): `*p` accesses the value at the address stored in p.

Pointers enable:

- Passing data to functions **by reference** (avoiding copies).
- Building dynamic data structures like linked lists and trees.
- Direct interaction with hardware and memory-mapped devices.

## Memory Layout

A C program's memory is divided into regions:

- **Stack**: stores local variables and function call frames. Memory is automatically managed (allocated on function entry, freed on exit).
- **Heap**: stores dynamically allocated memory. You control allocation and deallocation.
- **Data segment**: stores global and static variables.
- **Code segment**: stores the compiled program instructions.

## Dynamic Memory Management

- **malloc(size)**: allocates `size` bytes on the heap and returns a pointer.
- **free(ptr)**: releases memory previously allocated by `malloc`.

```c
int *arr = (int *)malloc(5 * sizeof(int));
arr[0] = 42;
free(arr);
```

### Common Pitfalls

- **Memory leak**: forgetting to call `free` on allocated memory.
- **Dangling pointer**: using a pointer after the memory it points to has been freed.
- **Buffer overflow**: writing beyond the bounds of an allocated block, which can corrupt data or enable security exploits.

## Key Takeaways

- C gives you direct access to memory through pointers, enabling high performance.
- The stack is managed automatically; the heap requires manual allocation and deallocation.
- Always pair every `malloc` with a `free` and never access freed memory.
- Mastering C and memory management is foundational for systems programming and high-performance AI.
