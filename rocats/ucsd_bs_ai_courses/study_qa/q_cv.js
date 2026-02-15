const questionsCV = [
  {
    id: 1,
    q: "In digital image representation, what does a pixel value of 0 typically represent in an 8-bit grayscale image?",
    qChinese: "在数字图像表示中，8位灰度图像中像素值为0通常代表什么？",
    options: [
      "A) White",
      "B) Black",
      "C) Mid-gray",
      "D) Transparent"
    ],
    optionsChinese: [
      "A) 白色",
      "B) 黑色",
      "C) 中灰色",
      "D) 透明"
    ],
    answer: 1,
    explanation: "In an 8-bit grayscale image, pixel intensities range from 0 to 255. A value of 0 represents the absence of light, which corresponds to black, while 255 represents maximum intensity, which corresponds to white. This convention follows the physical model of light emission.",
    explanationChinese: "在8位灰度图像中，像素强度范围从0到255。值为0表示没有光，对应黑色，而255表示最大强度，对应白色。这一惯例遵循了光发射的物理模型。",
    diagram: "",
    terms: ["pixel", "grayscale", "image_representation", "bit_depth"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 2,
    q: "Which convolution kernel is commonly used for Gaussian blurring in image filtering?",
    qChinese: "在图像滤波中，哪种卷积核通常用于高斯模糊？",
    options: [
      "A) A kernel with all values equal to 1",
      "B) A kernel with values sampled from a Gaussian distribution",
      "C) A kernel with alternating +1 and -1 values",
      "D) A kernel with a single 1 in the center and 0s elsewhere"
    ],
    optionsChinese: [
      "A) 所有值都等于1的核",
      "B) 值从高斯分布采样的核",
      "C) 值交替为+1和-1的核",
      "D) 中心为1其余为0的核"
    ],
    answer: 1,
    explanation: "Gaussian blurring uses a kernel whose values are sampled from a 2D Gaussian function. The weights decrease with distance from the center, producing a smooth blur that preserves edges better than a simple box filter. The standard deviation parameter sigma controls the blur amount.",
    explanationChinese: "高斯模糊使用从二维高斯函数采样值的核。权重随着距中心距离的增加而减小，产生比简单均值滤波器更好地保留边缘的平滑模糊。标准差参数sigma控制模糊程度。",
    diagram: "",
    terms: ["gaussian_blur", "convolution_kernel", "image_filtering", "sigma"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 3,
    q: "The Canny edge detector applies non-maximum suppression primarily to achieve which goal?",
    qChinese: "Canny边缘检测器应用非极大值抑制主要是为了实现什么目标？",
    options: [
      "A) Remove noise from the image before edge detection",
      "B) Thin the detected edges to single-pixel width",
      "C) Connect broken edge segments into continuous contours",
      "D) Increase the contrast between edges and background"
    ],
    optionsChinese: [
      "A) 在边缘检测之前去除图像中的噪声",
      "B) 将检测到的边缘细化为单像素宽度",
      "C) 将断裂的边缘段连接成连续轮廓",
      "D) 增加边缘与背景之间的对比度"
    ],
    answer: 1,
    explanation: "Non-maximum suppression in the Canny detector thins edges by keeping only local maxima in the gradient magnitude along the gradient direction. For each pixel, if its gradient magnitude is not the largest among its neighbors along the gradient direction, it is suppressed to zero, yielding thin one-pixel-wide edges.",
    explanationChinese: "Canny检测器中的非极大值抑制通过仅保留沿梯度方向上梯度幅值的局部最大值来细化边缘。对于每个像素，如果其梯度幅值不是沿梯度方向邻居中最大的，则将其抑制为零，从而产生细的单像素宽边缘。",
    diagram: "",
    terms: ["canny_edge_detector", "non_maximum_suppression", "gradient_magnitude", "edge_thinning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 4,
    q: "In the SIFT (Scale-Invariant Feature Transform) pipeline, what is the purpose of the Difference of Gaussians (DoG)?",
    qChinese: "在SIFT（尺度不变特征变换）流程中，高斯差分（DoG）的目的是什么？",
    options: [
      "A) To compute the gradient orientation at each keypoint",
      "B) To detect candidate keypoint locations across scales",
      "C) To normalize the descriptor vector to unit length",
      "D) To match keypoints between two different images"
    ],
    optionsChinese: [
      "A) 计算每个关键点处的梯度方向",
      "B) 在多尺度上检测候选关键点位置",
      "C) 将描述符向量归一化为单位长度",
      "D) 在两幅不同图像之间匹配关键点"
    ],
    answer: 1,
    explanation: "The Difference of Gaussians approximates the Laplacian of Gaussian and is used to identify blob-like structures at multiple scales. By subtracting adjacent Gaussian-blurred images in the scale-space pyramid, DoG finds extrema that serve as candidate keypoint locations invariant to scale changes.",
    explanationChinese: "高斯差分近似于高斯拉普拉斯算子，用于在多个尺度上识别类似斑点的结构。通过在尺度空间金字塔中减去相邻的高斯模糊图像，DoG找到作为候选关键点位置的极值点，这些点对尺度变化具有不变性。",
    diagram: "",
    terms: ["sift", "difference_of_gaussians", "scale_space", "keypoint_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 5,
    q: "What does the HOG (Histogram of Oriented Gradients) descriptor capture about an image region?",
    qChinese: "HOG（方向梯度直方图）描述符捕获了图像区域的什么信息？",
    options: [
      "A) The color distribution across spatial bins",
      "B) The distribution of local gradient directions and magnitudes",
      "C) The frequency spectrum of texture patterns",
      "D) The depth information estimated from shading"
    ],
    optionsChinese: [
      "A) 跨空间区间的颜色分布",
      "B) 局部梯度方向和幅值的分布",
      "C) 纹理模式的频谱",
      "D) 从阴影中估计的深度信息"
    ],
    answer: 1,
    explanation: "HOG divides an image region into small spatial cells and computes a histogram of gradient orientations within each cell, weighted by gradient magnitude. These histograms are then normalized across overlapping blocks to provide robustness to illumination changes, making HOG effective for object detection tasks like pedestrian detection.",
    explanationChinese: "HOG将图像区域划分为小的空间单元格，并计算每个单元格内梯度方向的直方图，以梯度幅值加权。然后对重叠块上的直方图进行归一化，以提供对光照变化的鲁棒性，使HOG对行人检测等目标检测任务非常有效。",
    diagram: "",
    terms: ["hog", "gradient_orientation", "histogram", "pedestrian_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 6,
    q: "In image classification using a Bag of Visual Words model, what role does k-means clustering play?",
    qChinese: "在使用视觉词袋模型的图像分类中，k-means聚类起什么作用？",
    options: [
      "A) It segments the image into foreground and background",
      "B) It builds a visual vocabulary by clustering local feature descriptors",
      "C) It trains the final classifier on labeled image data",
      "D) It computes the spatial pyramid representation of the image"
    ],
    optionsChinese: [
      "A) 将图像分割为前景和背景",
      "B) 通过聚类局部特征描述符来构建视觉词汇表",
      "C) 在标注的图像数据上训练最终分类器",
      "D) 计算图像的空间金字塔表示"
    ],
    answer: 1,
    explanation: "In the Bag of Visual Words framework, local feature descriptors such as SIFT are extracted from training images and clustered using k-means. Each cluster center becomes a visual word in the vocabulary. Images are then represented as histograms of visual word occurrences, enabling standard classification methods.",
    explanationChinese: "在视觉词袋框架中，从训练图像中提取SIFT等局部特征描述符，并使用k-means进行聚类。每个聚类中心成为词汇表中的一个视觉单词。然后将图像表示为视觉单词出现次数的直方图，从而可以使用标准分类方法。",
    diagram: "",
    terms: ["bag_of_visual_words", "k_means_clustering", "visual_vocabulary", "image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 7,
    q: "Which architecture introduced the concept of anchor boxes for object detection?",
    qChinese: "哪种架构引入了用于目标检测的锚框概念？",
    options: [
      "A) AlexNet",
      "B) Faster R-CNN",
      "C) VGGNet",
      "D) U-Net"
    ],
    optionsChinese: [
      "A) AlexNet",
      "B) Faster R-CNN",
      "C) VGGNet",
      "D) U-Net"
    ],
    answer: 1,
    explanation: "Faster R-CNN introduced the Region Proposal Network (RPN) which uses anchor boxes, a set of predefined bounding boxes of various scales and aspect ratios at each spatial location. The RPN predicts whether each anchor contains an object and refines the box coordinates, replacing the slower selective search method used previously.",
    explanationChinese: "Faster R-CNN引入了区域提议网络（RPN），该网络使用锚框——在每个空间位置上具有不同尺度和纵横比的一组预定义边界框。RPN预测每个锚框是否包含物体并细化框坐标，取代了之前使用的较慢的选择性搜索方法。",
    diagram: "",
    terms: ["anchor_boxes", "faster_rcnn", "region_proposal_network", "object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 8,
    q: "In semantic segmentation, what is the primary purpose of using transposed convolutions (deconvolutions)?",
    qChinese: "在语义分割中，使用转置卷积（反卷积）的主要目的是什么？",
    options: [
      "A) To reduce the spatial dimensions of the feature map",
      "B) To upsample feature maps back to the original image resolution",
      "C) To increase the number of channels in the feature map",
      "D) To apply non-linear activation functions"
    ],
    optionsChinese: [
      "A) 减小特征图的空间维度",
      "B) 将特征图上采样回原始图像分辨率",
      "C) 增加特征图中的通道数",
      "D) 应用非线性激活函数"
    ],
    answer: 1,
    explanation: "Semantic segmentation requires pixel-level predictions, so the downsampled feature maps from the encoder must be upsampled to match the input resolution. Transposed convolutions learn upsampling filters that increase spatial dimensions while maintaining learned feature representations, enabling dense per-pixel classification output.",
    explanationChinese: "语义分割需要像素级预测，因此编码器中下采样的特征图必须上采样以匹配输入分辨率。转置卷积学习增加空间维度的上采样滤波器，同时保持学习到的特征表示，从而实现密集的逐像素分类输出。",
    diagram: "",
    terms: ["semantic_segmentation", "transposed_convolution", "upsampling", "encoder_decoder"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 9,
    q: "The epipolar constraint in stereo vision states that the corresponding point in the second image lies on:",
    qChinese: "立体视觉中的对极约束指出，第二幅图像中的对应点位于：",
    options: [
      "A) A circle centered at the epipole",
      "B) An epipolar line determined by the fundamental matrix",
      "C) A vertical line at the same x-coordinate",
      "D) A random location depending on the scene depth"
    ],
    optionsChinese: [
      "A) 以极点为圆心的圆上",
      "B) 由基本矩阵确定的对极线上",
      "C) 在相同x坐标处的垂直线上",
      "D) 取决于场景深度的随机位置"
    ],
    answer: 1,
    explanation: "The epipolar constraint, encoded by the fundamental matrix F, reduces the correspondence search from 2D to 1D. For a point p in one image, its corresponding point in the other image must lie on the epipolar line l' = Fp. This dramatically reduces computational cost in stereo matching algorithms.",
    explanationChinese: "由基本矩阵F编码的对极约束将对应点搜索从二维减少到一维。对于一幅图像中的点p，其在另一幅图像中的对应点必须位于对极线l'=Fp上。这大大降低了立体匹配算法的计算成本。",
    diagram: "",
    terms: ["epipolar_constraint", "fundamental_matrix", "stereo_vision", "correspondence_search"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 10,
    q: "What assumption does the Lucas-Kanade optical flow method rely on?",
    qChinese: "Lucas-Kanade光流方法依赖于什么假设？",
    options: [
      "A) The scene contains only rigid objects",
      "B) The flow is approximately constant within a local neighborhood of each pixel",
      "C) The camera undergoes only translational motion",
      "D) The image brightness increases linearly over time"
    ],
    optionsChinese: [
      "A) 场景仅包含刚性物体",
      "B) 在每个像素的局部邻域内光流近似恒定",
      "C) 相机仅进行平移运动",
      "D) 图像亮度随时间线性增加"
    ],
    answer: 1,
    explanation: "Lucas-Kanade assumes that the optical flow is essentially constant within a small spatial neighborhood around each pixel. This allows it to set up an over-determined system of equations from all pixels in the patch, solved via least squares. Combined with the brightness constancy assumption, this yields a robust local flow estimate.",
    explanationChinese: "Lucas-Kanade假设在每个像素周围的小空间邻域内光流基本恒定。这允许它从补丁中的所有像素建立超定方程组，通过最小二乘法求解。结合亮度恒定假设，这产生了鲁棒的局部光流估计。",
    diagram: "",
    terms: ["lucas_kanade", "optical_flow", "brightness_constancy", "local_flow_estimation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 11,
    q: "In a convolutional neural network, what is the effect of increasing the stride of a convolutional layer from 1 to 2?",
    qChinese: "在卷积神经网络中，将卷积层的步幅从1增加到2会产生什么效果？",
    options: [
      "A) The output feature map doubles in spatial size",
      "B) The output feature map is approximately halved in each spatial dimension",
      "C) The number of learnable parameters doubles",
      "D) The receptive field of each neuron is unchanged"
    ],
    optionsChinese: [
      "A) 输出特征图的空间大小翻倍",
      "B) 输出特征图在每个空间维度上大约减半",
      "C) 可学习参数的数量翻倍",
      "D) 每个神经元的感受野不变"
    ],
    answer: 1,
    explanation: "Stride controls how many pixels the convolutional filter moves between applications. A stride of 2 means the filter skips every other position, producing an output feature map roughly half the size in each spatial dimension. This provides built-in downsampling without requiring a separate pooling layer.",
    explanationChinese: "步幅控制卷积滤波器在每次应用之间移动多少个像素。步幅为2意味着滤波器每隔一个位置跳过，产生的输出特征图在每个空间维度上大约为原来的一半。这提供了内置的下采样，而无需单独的池化层。",
    diagram: "",
    terms: ["stride", "convolutional_layer", "downsampling", "feature_map"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 12,
    q: "What innovation did ResNet introduce to enable training of very deep neural networks?",
    qChinese: "ResNet引入了什么创新来实现非常深的神经网络的训练？",
    options: [
      "A) Dropout regularization after every layer",
      "B) Skip connections that add the input of a block to its output",
      "C) Replacing all convolutions with dilated convolutions",
      "D) Using only 1x1 convolutions throughout the network"
    ],
    optionsChinese: [
      "A) 每层之后的Dropout正则化",
      "B) 将块的输入加到其输出的跳跃连接",
      "C) 用膨胀卷积替换所有卷积",
      "D) 在整个网络中仅使用1x1卷积"
    ],
    answer: 1,
    explanation: "ResNet introduced residual skip connections where the input to a block is added to the block's output, so the block only needs to learn the residual mapping. This mitigates the vanishing gradient problem by providing a direct gradient path through the identity shortcut, enabling training of networks with hundreds of layers.",
    explanationChinese: "ResNet引入了残差跳跃连接，其中块的输入被加到块的输出上，因此块只需要学习残差映射。这通过恒等快捷方式提供直接的梯度路径来缓解梯度消失问题，从而能够训练具有数百层的网络。",
    diagram: "",
    terms: ["resnet", "skip_connection", "residual_learning", "vanishing_gradient"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 13,
    q: "In a Generative Adversarial Network (GAN), what is the role of the discriminator?",
    qChinese: "在生成对抗网络（GAN）中，判别器的作用是什么？",
    options: [
      "A) To generate realistic synthetic images from random noise",
      "B) To classify images as real or generated and provide feedback to the generator",
      "C) To encode input images into a compact latent representation",
      "D) To segment the generated images into semantic regions"
    ],
    optionsChinese: [
      "A) 从随机噪声生成逼真的合成图像",
      "B) 将图像分类为真实或生成的，并向生成器提供反馈",
      "C) 将输入图像编码为紧凑的潜在表示",
      "D) 将生成的图像分割为语义区域"
    ],
    answer: 1,
    explanation: "The discriminator in a GAN is a binary classifier trained to distinguish between real images from the training set and fake images produced by the generator. Its loss signal guides the generator to produce more realistic outputs. The adversarial training process reaches equilibrium when the discriminator cannot reliably tell real from fake.",
    explanationChinese: "GAN中的判别器是一个二分类器，训练用于区分来自训练集的真实图像和生成器产生的虚假图像。其损失信号引导生成器产生更逼真的输出。当判别器无法可靠地区分真假时，对抗训练过程达到均衡。",
    diagram: "",
    terms: ["gan", "discriminator", "generator", "adversarial_training"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 14,
    q: "What is the main advantage of using dilated (atrous) convolutions in semantic segmentation networks?",
    qChinese: "在语义分割网络中使用膨胀（空洞）卷积的主要优势是什么？",
    options: [
      "A) They reduce the number of parameters compared to standard convolutions",
      "B) They increase the receptive field without losing spatial resolution",
      "C) They enable the network to process variable-sized inputs",
      "D) They replace the need for batch normalization"
    ],
    optionsChinese: [
      "A) 与标准卷积相比减少参数数量",
      "B) 在不损失空间分辨率的情况下增大感受野",
      "C) 使网络能够处理可变大小的输入",
      "D) 取代批归一化的需要"
    ],
    answer: 1,
    explanation: "Dilated convolutions insert gaps between kernel elements, effectively enlarging the receptive field without increasing the number of parameters or reducing spatial resolution through pooling. This is particularly valuable in semantic segmentation where both large context and fine spatial detail are needed for accurate pixel-level predictions.",
    explanationChinese: "膨胀卷积在核元素之间插入间隙，有效地扩大感受野，而不增加参数数量或通过池化减小空间分辨率。这在语义分割中特别有价值，因为准确的像素级预测需要大的上下文和精细的空间细节。",
    diagram: "",
    terms: ["dilated_convolution", "atrous_convolution", "receptive_field", "semantic_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 15,
    q: "In structure-from-motion (SfM), what is the minimum number of point correspondences needed to estimate the essential matrix between two calibrated cameras?",
    qChinese: "在运动恢复结构（SfM）中，估计两个已标定相机之间的本质矩阵至少需要多少个点对应关系？",
    options: [
      "A) 4 correspondences",
      "B) 5 correspondences",
      "C) 7 correspondences",
      "D) 8 correspondences"
    ],
    optionsChinese: [
      "A) 4个对应关系",
      "B) 5个对应关系",
      "C) 7个对应关系",
      "D) 8个对应关系"
    ],
    answer: 1,
    explanation: "The essential matrix has five degrees of freedom (3 rotation, 3 translation minus 1 for scale). Nister's five-point algorithm is the minimal solver for calibrated cameras. In contrast, the fundamental matrix for uncalibrated cameras requires at least 7 points (seven-point algorithm) or 8 points (eight-point algorithm).",
    explanationChinese: "本质矩阵有五个自由度（3个旋转、3个平移减去1个尺度）。Nister的五点算法是已标定相机的最小求解器。相比之下，未标定相机的基本矩阵至少需要7个点（七点算法）或8个点（八点算法）。",
    diagram: "",
    terms: ["structure_from_motion", "essential_matrix", "five_point_algorithm", "camera_calibration"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 16,
    q: "What is the key difference between object detection and instance segmentation?",
    qChinese: "目标检测和实例分割之间的关键区别是什么？",
    options: [
      "A) Object detection can identify multiple classes but instance segmentation cannot",
      "B) Instance segmentation provides a pixel-level mask for each detected object instance",
      "C) Object detection requires deeper networks than instance segmentation",
      "D) Instance segmentation only works on binary classification tasks"
    ],
    optionsChinese: [
      "A) 目标检测可以识别多个类别但实例分割不能",
      "B) 实例分割为每个检测到的物体实例提供像素级掩码",
      "C) 目标检测比实例分割需要更深的网络",
      "D) 实例分割仅适用于二分类任务"
    ],
    answer: 1,
    explanation: "Object detection produces bounding boxes around objects with class labels, while instance segmentation goes further by generating a precise pixel-level mask for each individual object instance. Mask R-CNN exemplifies this by extending Faster R-CNN with a parallel branch that predicts segmentation masks within each detected bounding box.",
    explanationChinese: "目标检测在物体周围生成带有类别标签的边界框，而实例分割更进一步，为每个单独的物体实例生成精确的像素级掩码。Mask R-CNN通过在Faster R-CNN的基础上添加一个并行分支来预测每个检测到的边界框内的分割掩码来体现这一点。",
    diagram: "",
    terms: ["instance_segmentation", "object_detection", "mask_rcnn", "pixel_mask"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 17,
    q: "In the pinhole camera model, what does the intrinsic matrix K encode?",
    qChinese: "在针孔相机模型中，内参矩阵K编码了什么？",
    options: [
      "A) The position and orientation of the camera in world coordinates",
      "B) The focal length, principal point, and pixel scaling parameters",
      "C) The lens distortion coefficients for radial and tangential distortion",
      "D) The depth map of the scene visible to the camera"
    ],
    optionsChinese: [
      "A) 相机在世界坐标中的位置和方向",
      "B) 焦距、主点和像素缩放参数",
      "C) 径向和切向畸变的镜头畸变系数",
      "D) 相机可见场景的深度图"
    ],
    answer: 1,
    explanation: "The intrinsic matrix K is a 3x3 upper-triangular matrix containing the focal lengths (fx, fy), the principal point coordinates (cx, cy), and an optional skew parameter. It maps 3D camera coordinates to 2D pixel coordinates. The extrinsic parameters separately encode camera pose in the world frame.",
    explanationChinese: "内参矩阵K是一个3x3上三角矩阵，包含焦距（fx, fy）、主点坐标（cx, cy）和可选的倾斜参数。它将三维相机坐标映射到二维像素坐标。外参单独编码相机在世界坐标系中的位姿。",
    diagram: "",
    terms: ["pinhole_camera_model", "intrinsic_matrix", "focal_length", "principal_point"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 18,
    q: "Which loss function is most commonly used for training the generator in a standard GAN?",
    qChinese: "在标准GAN中，最常用于训练生成器的损失函数是哪个？",
    options: [
      "A) Mean squared error between generated and real images",
      "B) Binary cross-entropy loss based on the discriminator's output",
      "C) Triplet loss with positive and negative image pairs",
      "D) Contrastive loss between feature representations"
    ],
    optionsChinese: [
      "A) 生成图像与真实图像之间的均方误差",
      "B) 基于判别器输出的二元交叉熵损失",
      "C) 使用正负图像对的三元组损失",
      "D) 特征表示之间的对比损失"
    ],
    answer: 1,
    explanation: "In the original GAN formulation by Goodfellow et al., both the generator and discriminator are trained using binary cross-entropy loss. The generator minimizes the probability that the discriminator correctly identifies its outputs as fake, effectively maximizing the discriminator's loss on generated samples to produce more realistic images.",
    explanationChinese: "在Goodfellow等人的原始GAN公式中，生成器和判别器都使用二元交叉熵损失进行训练。生成器最小化判别器正确识别其输出为假的概率，有效地最大化判别器在生成样本上的损失，以产生更逼真的图像。",
    diagram: "",
    terms: ["binary_cross_entropy", "gan_loss", "generator_training", "minimax_game"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 19,
    q: "In the context of CNNs for vision, what does the term 'receptive field' refer to?",
    qChinese: "在视觉CNN的上下文中，“感受野”一词指的是什么？",
    options: [
      "A) The number of output channels produced by a convolutional layer",
      "B) The region in the input image that influences a particular neuron's activation",
      "C) The set of all possible input image resolutions the network can accept",
      "D) The memory footprint required to store the network's feature maps"
    ],
    optionsChinese: [
      "A) 卷积层产生的输出通道数",
      "B) 输入图像中影响特定神经元激活的区域",
      "C) 网络可以接受的所有可能输入图像分辨率的集合",
      "D) 存储网络特征图所需的内存占用"
    ],
    answer: 1,
    explanation: "The receptive field of a neuron in a CNN is the spatial region in the original input image that can affect that neuron's output value. Deeper layers have larger receptive fields because they aggregate information through successive convolution and pooling operations, enabling them to capture higher-level semantic patterns.",
    explanationChinese: "CNN中一个神经元的感受野是原始输入图像中能够影响该神经元输出值的空间区域。更深的层具有更大的感受野，因为它们通过连续的卷积和池化操作聚合信息，使它们能够捕获更高级别的语义模式。",
    diagram: "",
    terms: ["receptive_field", "convolutional_neural_network", "feature_hierarchy", "pooling"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 20,
    q: "What technique does the Variational Autoencoder (VAE) use to enable backpropagation through the stochastic sampling layer?",
    qChinese: "变分自编码器（VAE）使用什么技术来实现通过随机采样层的反向传播？",
    options: [
      "A) Gumbel-Softmax relaxation",
      "B) The reparameterization trick expressing samples as a deterministic function of the parameters and noise",
      "C) Reinforcement learning policy gradient estimators",
      "D) Straight-through estimator for discrete variables"
    ],
    optionsChinese: [
      "A) Gumbel-Softmax松弛",
      "B) 重参数化技巧，将采样表示为参数和噪声的确定性函数",
      "C) 强化学习策略梯度估计器",
      "D) 离散变量的直通估计器"
    ],
    answer: 1,
    explanation: "The reparameterization trick rewrites the random sampling z ~ N(mu, sigma) as z = mu + sigma * epsilon, where epsilon ~ N(0,1) is independent noise. This moves the stochasticity outside the computational graph, making z a deterministic differentiable function of mu and sigma, enabling standard backpropagation for end-to-end training.",
    explanationChinese: "重参数化技巧将随机采样z ~ N(mu, sigma)重写为z = mu + sigma * epsilon，其中epsilon ~ N(0,1)是独立噪声。这将随机性移到计算图之外，使z成为mu和sigma的确定性可微函数，从而能够使用标准反向传播进行端到端训练。",
    diagram: "",
    terms: ["variational_autoencoder", "reparameterization_trick", "latent_space", "backpropagation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  }
];
