# Module 1 -- Variables & Control Flow

## Overview

Every program needs to store information and make decisions. **Variables** give your program a way to remember data, and **control flow** structures let it choose different paths depending on conditions. This module introduces both concepts from scratch.

## Variables and Data Types

A **variable** is a named container that holds a value. In Java you must declare the type of data a variable will hold before you use it.

- **int** -- whole numbers such as `42` or `-7`
- **double** -- decimal numbers such as `3.14`
- **boolean** -- `true` or `false`
- **char** -- a single character like `'A'`
- **String** -- a sequence of characters like `"hello"`

Example:

```java
int age = 21;
double gpa = 3.85;
String name = "Alice";
```

Once a variable is declared, you can update its value with the **assignment operator** (`=`). The right-hand side is evaluated first, then the result is stored in the variable on the left.

## Conditional Statements

Programs often need to do different things depending on the current state. An **if statement** checks a condition and executes a block of code only when that condition is `true`.

```java
if (age >= 18) {
    System.out.println("You can vote.");
} else {
    System.out.println("You are not old enough to vote.");
}
```

- **if / else if / else** chains let you test multiple conditions in order.
- Conditions use **comparison operators**: `==`, `!=`, `<`, `>`, `<=`, `>=`.
- **Logical operators** (`&&` for AND, `||` for OR, `!` for NOT) combine multiple conditions.

## Loops

A **loop** repeats a block of code as long as a condition remains true. The two most common loops are:

- **for loop** -- best when you know how many times to repeat.

```java
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
```

- **while loop** -- best when the number of repetitions depends on a condition.

```java
int count = 0;
while (count < 5) {
    System.out.println(count);
    count++;
}
```

A common mistake is an **infinite loop**, which occurs when the loop condition never becomes false. Always make sure your loop makes progress toward termination.

## Key Takeaways

- Variables store data; every variable has a **type**, a **name**, and a **value**.
- Conditional statements let your program branch based on boolean conditions.
- Loops automate repetition and are essential for processing collections of data.
- Mastering these basics is the first step toward writing any meaningful program.
