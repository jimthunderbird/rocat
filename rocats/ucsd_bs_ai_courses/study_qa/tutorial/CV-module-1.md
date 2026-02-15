# Module 1 -- Image Processing Basics

## Overview

Before a computer can "see," it needs to understand how images are represented and how to manipulate them. **Image processing** covers the foundational techniques for reading, transforming, filtering, and enhancing digital images. These operations are the building blocks for all higher-level computer vision tasks.

## Digital Image Representation

A digital image is a grid of **pixels** (picture elements). Each pixel stores a numerical value representing brightness or color.

- **Grayscale image**: each pixel is a single number (e.g., 0 for black, 255 for white).
- **Color image**: each pixel has three channels -- **Red, Green, Blue (RGB)**. A color image of size H x W is stored as an H x W x 3 array.
- **Resolution**: the number of pixels (e.g., 1920 x 1080). Higher resolution means more detail.

Images can be thought of as matrices, which is why linear algebra is so central to computer vision.

## Point Operations

**Point operations** modify each pixel independently:

- **Brightness adjustment**: add a constant to all pixel values.
- **Contrast adjustment**: multiply all pixel values by a factor.
- **Thresholding**: convert to binary by setting pixels above a threshold to white and below to black.
- **Histogram equalization**: redistribute pixel intensities to improve contrast, especially useful for poorly lit images.

## Spatial Filtering

**Spatial filtering** (also called convolution) modifies each pixel based on its neighbors. A small matrix called a **kernel** (or filter) slides across the image, and at each position, the output pixel is the weighted sum of the overlapping pixels.

### Common Filters

- **Box filter (averaging)**: replaces each pixel with the average of its neighbors. Produces a blurring effect.
- **Gaussian filter**: a weighted average where closer neighbors have more influence. Produces a smoother blur than the box filter.
- **Sharpening filter**: enhances edges by subtracting a blurred version of the image from the original.

## Edge Detection

**Edges** are locations in the image where brightness changes sharply. Detecting edges is critical because they correspond to object boundaries.

- **Gradient-based methods**: compute the rate of change of pixel intensity using filters like the **Sobel operator**, which approximates the derivative in the x and y directions.
- **Canny edge detector**: a multi-step algorithm that is the gold standard for edge detection:
  1. Smooth the image with a Gaussian filter to reduce noise.
  2. Compute gradient magnitude and direction.
  3. Apply non-maximum suppression to thin edges to one-pixel width.
  4. Use hysteresis thresholding to connect strong edges and discard weak ones.

## Geometric Transformations

- **Translation**: shift the image by a fixed offset.
- **Rotation**: rotate the image around a center point.
- **Scaling**: resize the image up or down.
- **Affine transformation**: combines translation, rotation, scaling, and shearing in a single matrix operation.

## Key Takeaways

- Digital images are numerical arrays; grayscale images are 2D matrices, color images are 3D tensors.
- Convolution with kernels is the fundamental operation for filtering and feature extraction.
- Edge detection identifies object boundaries and is a prerequisite for recognition.
- Geometric transformations modify the spatial layout of images and are key for data augmentation.
