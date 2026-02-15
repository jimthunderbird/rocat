# Module 2 -- Functions & Recursion

## Overview

As programs grow larger, writing all your code in one place becomes unmanageable. **Functions** (also called methods in Java) let you break a problem into smaller, reusable pieces. **Recursion** is a special technique where a function solves a problem by calling itself on a smaller version of the same problem.

## What Is a Function?

A **function** is a named block of code that performs a specific task. You define it once and then **call** it whenever you need that task done.

```java
public static int square(int n) {
    return n * n;
}
```

Key parts of a function:

- **Return type** -- the type of value the function gives back (`int` in the example above). Use `void` when the function returns nothing.
- **Name** -- a descriptive identifier like `square` or `calculateGPA`.
- **Parameters** -- inputs the function accepts, listed inside parentheses.
- **Return statement** -- sends a value back to the caller.

## Why Use Functions?

- **Reusability** -- write once, call many times.
- **Readability** -- a well-named function tells the reader what it does without needing to read every line.
- **Debugging** -- isolating logic in functions makes it easier to find and fix bugs.
- **Abstraction** -- you can use a function without knowing how it works internally.

## Scope

Variables declared inside a function are **local** to that function and cannot be accessed elsewhere. This concept is called **scope**. Parameters behave like local variables that are initialized with the values passed by the caller.

## Recursion

A **recursive function** calls itself to solve progressively smaller instances of a problem. Every recursive function needs two things:

- A **base case** -- a condition under which the function stops calling itself and returns a direct answer.
- A **recursive case** -- the function calls itself with a simpler input.

Classic example -- computing a factorial:

```java
public static int factorial(int n) {
    if (n <= 1) {       // base case
        return 1;
    }
    return n * factorial(n - 1);  // recursive case
}
```

When you call `factorial(4)`, the calls unfold like this:

- `factorial(4)` calls `factorial(3)`
- `factorial(3)` calls `factorial(2)`
- `factorial(2)` calls `factorial(1)`
- `factorial(1)` returns `1` (base case reached)
- Results propagate back: `2 * 1 = 2`, `3 * 2 = 6`, `4 * 6 = 24`

## Common Pitfalls

- **Missing base case** leads to infinite recursion and a `StackOverflowError`.
- **Not simplifying the input** means the recursive call never approaches the base case.
- **Excessive recursion** can be slow; sometimes an iterative (loop-based) solution is more efficient.

## Key Takeaways

- Functions make code modular, readable, and reusable.
- Understand scope: local variables exist only within their function.
- Recursion solves problems by reducing them to smaller subproblems plus a base case.
- Always verify that your recursive calls converge toward the base case.
