# Module 1 -- Supervised Learning

## Overview

**Supervised learning** is the most common type of machine learning. You provide the algorithm with a dataset of **labeled examples** -- input-output pairs -- and the algorithm learns a function that maps inputs to outputs. Once trained, the model can predict outputs for new, unseen inputs.

## Key Terminology

- **Features**: the input variables that describe each example (e.g., square footage, number of bedrooms).
- **Label (target)**: the output the model should predict (e.g., house price, spam or not spam).
- **Training set**: the data used to learn the model.
- **Test set**: held-out data used to evaluate how well the model generalizes.
- **Regression**: predicting a continuous value (e.g., price).
- **Classification**: predicting a discrete category (e.g., spam vs. not spam).

## Linear Regression

**Linear regression** fits a straight line (or hyperplane) to the data to predict a continuous target.

- Model: y = w0 + w1*x1 + w2*x2 + ... + wn*xn
- The **weights** (w) are learned by minimizing the **mean squared error (MSE)** between predictions and actual values.
- The solution can be found analytically (normal equation) or iteratively (gradient descent).

## Logistic Regression

Despite its name, **logistic regression** is a classification algorithm. It outputs a probability between 0 and 1 using the **sigmoid function**:

- sigmoid(z) = 1 / (1 + e^(-z))
- The model predicts class 1 if the probability exceeds a threshold (typically 0.5).
- It is trained by minimizing the **cross-entropy loss** (also called log loss).

## Decision Trees

A **decision tree** makes predictions by asking a series of yes/no questions about the features.

- Each **internal node** tests a feature (e.g., "Is age > 30?").
- Each **leaf node** gives a prediction.
- Trees are built by choosing splits that maximize **information gain** or minimize **Gini impurity**.
- Advantages: easy to interpret, no need for feature scaling.
- Disadvantage: prone to **overfitting** if grown too deep.

**Random forests** and **gradient-boosted trees** combine many decision trees to improve accuracy and reduce overfitting.

## Support Vector Machines (SVMs)

An **SVM** finds the hyperplane that separates two classes with the **maximum margin** (the largest gap between the closest points of each class).

- **Support vectors** are the data points closest to the decision boundary.
- The **kernel trick** allows SVMs to handle non-linearly separable data by mapping features into a higher-dimensional space.

## The Bias-Variance Trade-off

- **Bias**: error from overly simplistic assumptions (underfitting).
- **Variance**: error from sensitivity to small fluctuations in the training data (overfitting).
- A good model balances bias and variance. Increasing model complexity reduces bias but increases variance.

## Key Takeaways

- Supervised learning needs labeled data and learns a mapping from inputs to outputs.
- Linear and logistic regression are foundational; decision trees and SVMs handle more complex patterns.
- The bias-variance trade-off guides model selection: too simple underfits, too complex overfits.
- Understanding these algorithms deeply prepares you for neural networks and advanced ML.
