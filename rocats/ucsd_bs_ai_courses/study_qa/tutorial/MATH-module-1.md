# Module 1 -- Calculus Essentials

## Overview

Calculus is the mathematical study of change. In the context of AI and computer science, calculus provides the tools to understand how small changes in input affect output -- the foundation of **optimization**, which is how machine learning models learn from data.

## Derivatives

A **derivative** measures the instantaneous rate of change of a function. If you have a function f(x), its derivative f'(x) tells you how steeply the function is rising or falling at any point x.

- **Power rule**: if f(x) = x^n, then f'(x) = n * x^(n-1)
- **Chain rule**: if f(x) = g(h(x)), then f'(x) = g'(h(x)) * h'(x)
- **Product rule**: (f * g)' = f' * g + f * g'

The chain rule is particularly important in AI because **backpropagation** -- the algorithm that trains neural networks -- is essentially the chain rule applied across many layers of computation.

## Integrals

An **integral** is the reverse of a derivative. While a derivative tells you the rate of change, an integral tells you the accumulated total.

- **Definite integral**: computes the area under a curve between two bounds.
- **Fundamental Theorem of Calculus**: connects derivatives and integrals, stating that integration and differentiation are inverse operations.

Integrals appear in probability (computing areas under probability density functions) and in physics-based simulations.

## Multivariable Calculus

Real-world functions often depend on many variables. For a function f(x, y):

- A **partial derivative** measures the rate of change with respect to one variable while holding others constant.
- The **gradient** is the vector of all partial derivatives: nabla f = (df/dx, df/dy). It points in the direction of steepest increase.

## Gradient Descent

**Gradient descent** is the most important application of calculus in AI. To minimize a loss function:

1. Compute the gradient of the loss with respect to each parameter.
2. Update each parameter by moving a small step in the opposite direction of the gradient.
3. Repeat until the loss converges.

The **learning rate** controls the step size. Too large and you overshoot; too small and convergence is painfully slow.

## Key Takeaways

- Derivatives measure rates of change; the chain rule is essential for backpropagation.
- Integrals compute accumulated quantities and appear in probability.
- The gradient generalizes the derivative to multiple dimensions and points toward steepest ascent.
- Gradient descent uses the gradient to iteratively minimize a function -- the backbone of model training.
