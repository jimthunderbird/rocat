# Module 2 -- Feature Extraction & Object Detection

## Overview

To recognize objects, match images, or navigate a scene, a computer must identify **features** -- distinctive, repeatable patterns in an image. This module covers classical feature extraction techniques and the object detection methods that build on them.

## What Is a Feature?

A **feature** is a local image pattern that is distinctive and reliably detectable across different views. Good features should be:

- **Repeatable**: detected in the same location despite changes in lighting or viewpoint.
- **Distinctive**: different from features at other locations.
- **Compact**: describable with a small amount of data.

## Corner Detection

**Corners** are points where two edges meet, making them highly distinctive.

- **Harris corner detector**: analyzes how the image changes when a small window is shifted in all directions. A corner is detected when the image changes significantly in every direction.
- Corners are preferred over edges because edges can match ambiguously along their length.

## Scale-Invariant Features

Objects appear at different sizes depending on distance. **Scale-invariant** features are detected at a characteristic scale.

- **SIFT (Scale-Invariant Feature Transform)**: detects keypoints at multiple scales using a Difference of Gaussians (DoG) approach, then describes each keypoint with a 128-dimensional histogram of gradient orientations.
- **SURF (Speeded-Up Robust Features)**: a faster approximation of SIFT using integral images and Haar wavelets.
- **ORB (Oriented FAST and Rotated BRIEF)**: a very fast alternative suitable for real-time applications.

## Feature Matching

Once features are extracted from two images, **matching** finds corresponding features:

- Compute the **distance** (e.g., Euclidean) between feature descriptors.
- Use the **ratio test**: accept a match only if the closest match is significantly better than the second closest.
- **RANSAC (Random Sample Consensus)**: a robust method that removes incorrect matches (outliers) by fitting a geometric model to a randomly sampled subset of matches and checking which other matches agree.

## Object Detection

**Object detection** locates and classifies objects within an image by drawing bounding boxes around them.

### Classical Approaches

- **Sliding window**: move a fixed-size window across the image and classify each window. Computationally expensive.
- **HOG + SVM (Histogram of Oriented Gradients + Support Vector Machine)**: extract gradient-based features from windows and classify with an SVM. A classic pipeline for pedestrian detection.

### Modern Approaches

- **R-CNN family**: Region-based CNNs propose candidate regions, then classify each with a neural network. Faster R-CNN uses a Region Proposal Network (RPN) for efficiency.
- **YOLO (You Only Look Once)**: frames detection as a single regression problem, predicting bounding boxes and class probabilities in one pass. Extremely fast and suitable for real-time use.
- **SSD (Single Shot Detector)**: similar to YOLO, detects objects at multiple scales in a single forward pass.

## Evaluation Metrics

- **Intersection over Union (IoU)**: measures overlap between predicted and ground-truth bounding boxes.
- **Mean Average Precision (mAP)**: the standard metric for detection, averaging precision across classes and IoU thresholds.

## Key Takeaways

- Features like corners and SIFT keypoints provide distinctive, repeatable points for matching and recognition.
- Feature matching with RANSAC enables robust correspondence between images.
- Object detection has evolved from sliding window + handcrafted features to fast, accurate deep learning methods.
- IoU and mAP are the standard evaluation metrics for detection tasks.
