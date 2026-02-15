# Module 3 -- OOP & Basic Data Structures

## Overview

**Object-Oriented Programming (OOP)** is a way of organizing code around real-world concepts. Instead of writing long procedural scripts, you define **classes** that bundle data and behavior together. This module also introduces the most common **data structures** you will use throughout your CS career.

## Classes and Objects

A **class** is a blueprint that describes what data an entity has (its **fields**) and what it can do (its **methods**). An **object** is a specific instance created from that blueprint.

```java
public class Dog {
    String name;
    int age;

    public void bark() {
        System.out.println(name + " says woof!");
    }
}
```

You create an object with the `new` keyword:

```java
Dog myDog = new Dog();
myDog.name = "Buddy";
myDog.age = 3;
myDog.bark();  // prints "Buddy says woof!"
```

## Core OOP Principles

- **Encapsulation** -- hide internal details and expose only what is necessary. Use `private` fields with `public` getter and setter methods.
- **Inheritance** -- a class can extend another class to reuse and specialize its behavior. For example, `GuideDog extends Dog`.
- **Polymorphism** -- objects of different classes can be treated through a common interface. A method that accepts a `Dog` parameter also accepts a `GuideDog`.
- **Abstraction** -- define what an object does (its interface) separately from how it does it (its implementation).

## Arrays

An **array** is a fixed-size, ordered collection of elements of the same type.

```java
int[] scores = new int[5];
scores[0] = 95;
```

- Access elements by **index** starting at `0`.
- The length is set at creation and cannot change.

## Linked Lists

A **linked list** stores elements in **nodes**, where each node holds a value and a reference to the next node.

- **Advantage** -- efficient insertion and deletion at any position.
- **Disadvantage** -- accessing an element by index requires traversing from the head.

## Stacks and Queues

- A **stack** follows **Last-In, First-Out (LIFO)** order. Think of a stack of plates: you add and remove from the top. Key operations: `push` (add) and `pop` (remove).
- A **queue** follows **First-In, First-Out (FIFO)** order. Think of a line at a coffee shop. Key operations: `enqueue` (add to back) and `dequeue` (remove from front).

## Why Data Structures Matter

Choosing the right data structure affects how fast and memory-efficient your program is. As you progress to courses like CSE 100, you will analyze these trade-offs rigorously.

## Key Takeaways

- OOP organizes code into classes and objects, improving modularity and reuse.
- Encapsulation, inheritance, polymorphism, and abstraction are the four pillars of OOP.
- Arrays provide fast indexed access; linked lists provide flexible insertion.
- Stacks and queues model real-world ordering patterns and appear throughout CS.
