# Module 2 -- Neural Networks & Deep Learning

## Overview

**Neural networks** are computational models inspired by the structure of the brain. They consist of interconnected layers of simple processing units called **neurons**. **Deep learning** refers to neural networks with many layers, which can learn increasingly abstract representations of data.

## The Perceptron

The simplest neural network is a single **perceptron**:

- It takes a weighted sum of inputs: z = w1*x1 + w2*x2 + ... + wn*xn + b
- Passes the result through an **activation function** to produce output.
- A single perceptron can only learn linearly separable functions.

## Multilayer Perceptrons (MLPs)

Stacking perceptrons into layers creates a **multilayer perceptron**:

- **Input layer**: receives the raw features.
- **Hidden layers**: intermediate layers that learn internal representations.
- **Output layer**: produces the final prediction.

The key insight is that hidden layers with **nonlinear activation functions** (like ReLU or sigmoid) allow the network to learn nonlinear decision boundaries.

## Activation Functions

- **Sigmoid**: outputs values between 0 and 1. Used historically but suffers from vanishing gradients.
- **ReLU (Rectified Linear Unit)**: f(x) = max(0, x). The most popular choice for hidden layers because it is simple and avoids vanishing gradients.
- **Softmax**: used in the output layer for multi-class classification. Converts raw scores into probabilities that sum to 1.

## Training Neural Networks

### Forward Pass

Input data flows through the network layer by layer, producing a prediction.

### Loss Function

A **loss function** measures how far the prediction is from the true label:

- **MSE** for regression.
- **Cross-entropy** for classification.

### Backpropagation

**Backpropagation** computes the gradient of the loss with respect to each weight by applying the chain rule from calculus, moving backward from the output layer to the input layer.

### Gradient Descent

Weights are updated by taking a step in the direction that reduces the loss:

- **Stochastic Gradient Descent (SGD)**: updates weights using one training example at a time.
- **Mini-batch SGD**: uses a small batch of examples for each update -- the standard in practice.
- **Adam**: an adaptive optimizer that adjusts learning rates per parameter. Widely used for its robustness.

## Convolutional Neural Networks (CNNs)

**CNNs** are designed for grid-structured data like images:

- **Convolutional layers** apply learnable filters that detect local patterns (edges, textures).
- **Pooling layers** reduce spatial dimensions, making the network more efficient and translation-invariant.
- CNNs are the backbone of image classification, object detection, and computer vision.

## Recurrent Neural Networks (RNNs)

**RNNs** process sequential data (text, time series) by maintaining a hidden state that captures information from previous time steps.

- Vanilla RNNs suffer from **vanishing gradients** on long sequences.
- **LSTMs (Long Short-Term Memory)** and **GRUs (Gated Recurrent Units)** add gating mechanisms to preserve information over longer sequences.

## Key Takeaways

- Neural networks learn hierarchical representations through layers of nonlinear transformations.
- Backpropagation and gradient descent are the core training algorithms.
- CNNs excel at spatial data (images); RNNs and LSTMs handle sequential data (text, audio).
- Deep learning has driven breakthroughs in vision, language, speech, and game playing.
