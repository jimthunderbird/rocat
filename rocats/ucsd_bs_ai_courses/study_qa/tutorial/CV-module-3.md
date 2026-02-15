# Module 3 -- Deep Learning for Vision

## Overview

Deep learning has revolutionized computer vision. **Convolutional Neural Networks (CNNs)** and their successors now dominate tasks like image classification, object detection, semantic segmentation, and image generation. This module explores the architectures and techniques that make this possible.

## CNNs Revisited

A **Convolutional Neural Network** applies learnable filters to input images, automatically discovering features at multiple levels of abstraction.

- **Convolutional layer**: slides a set of small filters (e.g., 3x3) across the image. Each filter produces a **feature map** highlighting a specific pattern (edge, texture, shape).
- **Activation (ReLU)**: introduces nonlinearity, allowing the network to learn complex patterns.
- **Pooling layer**: reduces the spatial size of feature maps (e.g., max pooling takes the maximum value in each 2x2 region), making the network more efficient and partially invariant to small translations.
- **Fully connected layer**: at the end of the network, flattened feature maps are passed through dense layers for classification.

## Landmark Architectures

- **LeNet (1998)**: one of the first CNNs, designed for handwritten digit recognition. Small by modern standards.
- **AlexNet (2012)**: won the ImageNet competition by a large margin, popularizing deep learning for vision. Used ReLU, dropout, and GPU training.
- **VGGNet (2014)**: showed that deeper networks with small (3x3) filters perform better. Simple and uniform architecture.
- **ResNet (2015)**: introduced **residual connections** (skip connections) that allow training of very deep networks (100+ layers) by mitigating the vanishing gradient problem.
- **Vision Transformers (ViT)**: apply the transformer architecture (originally from NLP) to image patches, achieving state-of-the-art results on many benchmarks.

## Transfer Learning

Training a deep CNN from scratch requires massive datasets and compute. **Transfer learning** solves this:

1. Start with a model pre-trained on a large dataset (e.g., ImageNet).
2. Replace the final classification layer to match your task.
3. **Fine-tune** the network on your smaller dataset.

Transfer learning is the standard practice for most real-world vision applications.

## Semantic Segmentation

**Semantic segmentation** assigns a class label to every pixel in an image (e.g., road, car, pedestrian).

- **Fully Convolutional Networks (FCN)**: replace fully connected layers with convolutional layers to produce dense predictions.
- **U-Net**: an encoder-decoder architecture with skip connections, widely used in medical image segmentation.

## Image Generation

- **Generative Adversarial Networks (GANs)**: two networks -- a generator and a discriminator -- compete in a game. The generator creates realistic images; the discriminator tries to distinguish real from generated. Over time, the generator produces increasingly convincing images.
- **Diffusion models**: learn to reverse a gradual noising process, generating high-quality images from random noise. They power modern image generation systems.

## Key Takeaways

- CNNs learn hierarchical features: edges in early layers, textures in middle layers, objects in later layers.
- Residual connections enable very deep networks by easing gradient flow.
- Transfer learning makes deep vision models practical even with limited data.
- Segmentation and generation extend vision beyond classification to pixel-level understanding and content creation.
