# Module 2 -- Linear Algebra

## Overview

**Linear algebra** is the branch of mathematics dealing with vectors, matrices, and linear transformations. In AI, data is almost always represented as vectors and matrices, making linear algebra the day-to-day language of machine learning and computer vision.

## Vectors

A **vector** is an ordered list of numbers. For example, a 3D vector v = [1, 2, 3] can represent a point in space, a direction, or a data sample with three features.

Key vector operations:

- **Addition**: [1, 2] + [3, 4] = [4, 6]
- **Scalar multiplication**: 2 * [1, 2] = [2, 4]
- **Dot product**: [1, 2] . [3, 4] = 1*3 + 2*4 = 11. The dot product measures how aligned two vectors are.
- **Norm (magnitude)**: the length of a vector, often the Euclidean norm ||v|| = sqrt(v1^2 + v2^2 + ...).

## Matrices

A **matrix** is a rectangular grid of numbers. An m x n matrix has m rows and n columns.

- **Matrix-vector multiplication** transforms a vector from one space to another.
- **Matrix-matrix multiplication** composes transformations. If A is m x n and B is n x p, the product AB is m x p.
- The **identity matrix** I leaves any vector unchanged: Iv = v.
- The **inverse** A^(-1) of a matrix A satisfies A * A^(-1) = I.

## Linear Transformations

A **linear transformation** is a function that maps vectors to vectors while preserving addition and scalar multiplication. Every linear transformation can be represented as a matrix. Examples include rotations, reflections, and scaling.

## Eigenvalues and Eigenvectors

An **eigenvector** of a matrix A is a nonzero vector v such that Av = lambda * v, where lambda is the corresponding **eigenvalue**. In other words, the transformation only stretches or flips the eigenvector without changing its direction.

Applications in AI:

- **Principal Component Analysis (PCA)** uses eigenvectors to find the directions of greatest variance in data, enabling dimensionality reduction.
- **Google's PageRank** algorithm relies on the dominant eigenvector of a web-link matrix.

## Systems of Linear Equations

Many problems reduce to solving Ax = b. Methods include:

- **Gaussian elimination** -- row operations to reduce the matrix to upper-triangular form.
- **Matrix inversion** -- x = A^(-1) b, when A is invertible.

## Key Takeaways

- Vectors represent data points; matrices represent transformations and datasets.
- The dot product measures similarity; matrix multiplication composes operations.
- Eigenvectors reveal the principal directions of a transformation.
- Linear algebra is the computational backbone of machine learning, graphics, and signal processing.
