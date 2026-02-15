# Module 3 -- Model Evaluation & Regularization

## Overview

Building a machine learning model is only half the job. You also need to **evaluate** how well it performs on unseen data and **regularize** it to prevent overfitting. This module covers the tools and techniques for ensuring your models generalize beyond the training set.

## Overfitting and Underfitting

- **Overfitting**: the model memorizes the training data, including noise, and performs poorly on new data. It has low training error but high test error.
- **Underfitting**: the model is too simple to capture the underlying pattern. It has high error on both training and test data.

The goal is to find the sweet spot where the model captures the true pattern without memorizing noise.

## Train / Validation / Test Split

- **Training set** (e.g., 60%): used to learn model parameters.
- **Validation set** (e.g., 20%): used to tune hyperparameters and select the best model.
- **Test set** (e.g., 20%): used only once at the end to report final performance.

Never use the test set for model selection -- doing so leaks information and inflates your performance estimate.

## Cross-Validation

**K-fold cross-validation** provides a more robust estimate of model performance:

1. Split the data into k equal folds.
2. Train on k-1 folds and evaluate on the remaining fold.
3. Repeat k times, each time using a different fold for evaluation.
4. Average the k performance scores.

This ensures every data point is used for both training and evaluation, reducing variance in the performance estimate.

## Evaluation Metrics

### For Classification

- **Accuracy**: fraction of correct predictions. Misleading when classes are imbalanced.
- **Precision**: of all predicted positives, how many are actually positive.
- **Recall (sensitivity)**: of all actual positives, how many are correctly predicted.
- **F1 score**: the harmonic mean of precision and recall, balancing both.
- **ROC curve and AUC**: plot true positive rate vs. false positive rate across thresholds. AUC (area under the curve) summarizes overall performance.

### For Regression

- **Mean Squared Error (MSE)**: average of squared differences between predictions and actuals.
- **Mean Absolute Error (MAE)**: average of absolute differences.
- **R-squared**: the proportion of variance in the target explained by the model.

## Regularization

**Regularization** adds a penalty to the loss function to discourage overly complex models.

- **L2 regularization (Ridge)**: adds the sum of squared weights to the loss. Shrinks weights toward zero but rarely sets them exactly to zero.
- **L1 regularization (Lasso)**: adds the sum of absolute weights. Can drive some weights to exactly zero, performing feature selection.
- **Elastic Net**: combines L1 and L2 penalties.

### Other Regularization Techniques

- **Dropout**: during training, randomly set a fraction of neuron outputs to zero. This prevents neurons from co-adapting and acts as an ensemble of subnetworks.
- **Early stopping**: monitor validation loss during training and stop when it begins to increase, even if training loss is still decreasing.
- **Data augmentation**: artificially increase the training set size by applying transformations (flips, rotations, crops for images).

## Key Takeaways

- Always evaluate models on held-out data to estimate generalization performance.
- Cross-validation gives a more reliable performance estimate than a single split.
- Choose metrics appropriate to your problem; accuracy alone can be misleading.
- Regularization techniques (L1/L2, dropout, early stopping) are essential for preventing overfitting.
