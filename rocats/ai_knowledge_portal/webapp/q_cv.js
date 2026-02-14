const questionsCV = [
  // ===== IMAGE FUNDAMENTALS (Questions 1–25) =====
  {
    id: 1,
    q: "What is a pixel in digital imaging?",
    qChinese: "数字成像中什么是像素？",
    options: [
      "A) A vector-based drawing element",
      "B) A color profile used in printing",
      "C) A compression artifact in JPEG files",
      "D) The smallest addressable unit of a raster image"
    ],
    optionsChinese: [
      "A) 基于矢量的绘图元素",
      "B) 印刷中使用的颜色配置文件",
      "C) JPEG文件中的压缩伪影",
      "D) 光栅图像中最小的可寻址单元"
    ],
    answer: 3,
    explanation: "A pixel (picture element) is the smallest addressable unit in a raster image. Each pixel stores color information such as intensity or RGB values. The total number of pixels determines the image resolution. Pixels are arranged in a 2D grid forming the complete digital image representation.",
    explanationChinese: "像素（图像元素）是光栅图像中最小的可寻址单元。每个像素存储颜色信息，如强度或RGB值。像素总数决定了图像分辨率。像素排列在二维网格中，构成完整的数字图像表示。",
    diagram: "",
    terms: ["image_preprocessing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 2,
    q: "How many channels does a standard RGB image have?",
    qChinese: "标准RGB图像有多少个通道？",
    options: [
      "A) 1",
      "B) 3",
      "C) 2",
      "D) 4"
    ],
    optionsChinese: [
      "A) 1",
      "B) 3",
      "C) 2",
      "D) 4"
    ],
    answer: 1,
    explanation: "A standard RGB image has three channels: Red, Green, and Blue. Each channel stores intensity values typically ranging from 0 to 255. By combining these three channels at each pixel location, millions of distinct colors can be represented. Grayscale images use only one channel.",
    explanationChinese: "标准RGB图像有三个通道：红色、绿色和蓝色。每个通道存储通常从0到255的强度值。通过在每个像素位置组合这三个通道，可以表示数百万种不同的颜色。灰度图像只使用一个通道。",
    diagram: "",
    terms: ["image_preprocessing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 3,
    q: "What is the shape of a color image tensor with height H, width W, and 3 channels in PyTorch convention?",
    qChinese: "在PyTorch约定中，高度为H、宽度为W、3个通道的彩色图像张量形状是什么？",
    options: [
      "A) (3, H, W)",
      "B) (H, W, 3)",
      "C) (W, H, 3)",
      "D) (H, 3, W)"
    ],
    optionsChinese: [
      "A) (3, H, W)",
      "B) (H, W, 3)",
      "C) (W, H, 3)",
      "D) (H, 3, W)"
    ],
    answer: 0,
    explanation: "PyTorch uses the channels-first format (C, H, W), so a color image tensor has shape (3, H, W). This differs from libraries like NumPy and TensorFlow which default to channels-last (H, W, C). The channels-first layout can be more efficient for GPU convolution operations.",
    explanationChinese: "PyTorch使用通道优先格式(C, H, W)，因此彩色图像张量的形状为(3, H, W)。这与NumPy和TensorFlow等库默认使用的通道最后格式(H, W, C)不同。通道优先布局对GPU卷积运算可能更高效。",
    diagram: "",
    terms: ["image_preprocessing","convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 4,
    q: "Which color space separates luminance from chrominance information?",
    qChinese: "哪种颜色空间将亮度与色度信息分离？",
    options: [
      "A) RGB",
      "B) BGR",
      "C) CMYK",
      "D) YCbCr"
    ],
    optionsChinese: [
      "A) RGB",
      "B) BGR",
      "C) CMYK",
      "D) YCbCr"
    ],
    answer: 3,
    explanation: "YCbCr separates the luminance (Y) component from the blue-difference (Cb) and red-difference (Cr) chrominance components. This separation is widely used in JPEG compression and video coding because human vision is more sensitive to luminance than chrominance, allowing chrominance subsampling.",
    explanationChinese: "YCbCr将亮度(Y)分量与蓝色差(Cb)和红色差(Cr)色度分量分离。这种分离广泛用于JPEG压缩和视频编码，因为人眼对亮度比色度更敏感，允许色度子采样。",
    diagram: "",
    terms: ["image_preprocessing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 5,
    q: "What does image resolution refer to in digital imaging?",
    qChinese: "在数字成像中，图像分辨率指的是什么？",
    options: [
      "A) The file size of the image in megabytes",
      "B) The number of pixels in each dimension of the image",
      "C) The number of color channels in the image",
      "D) The bit depth of each pixel value"
    ],
    optionsChinese: [
      "A) 图像的文件大小（兆字节）",
      "B) 图像每个维度中的像素数量",
      "C) 图像中颜色通道的数量",
      "D) 每个像素值的位深度"
    ],
    answer: 1,
    explanation: "Image resolution refers to the number of pixels along the width and height dimensions, typically expressed as width x height (e.g., 1920x1080). Higher resolution means more pixels and finer detail. Resolution affects both image quality and computational requirements for processing.",
    explanationChinese: "图像分辨率指的是沿宽度和高度维度的像素数量，通常表示为宽x高（如1920x1080）。更高的分辨率意味着更多像素和更精细的细节。分辨率影响图像质量和处理的计算需求。",
    diagram: "",
    terms: ["image_preprocessing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 6,
    q: "What is the typical value range for pixel intensities in an 8-bit grayscale image?",
    qChinese: "8位灰度图像中像素强度的典型值范围是什么？",
    options: [
      "A) 0 to 1",
      "B) -128 to 127",
      "C) 0 to 1023",
      "D) 0 to 255"
    ],
    optionsChinese: [
      "A) 0到1",
      "B) -128到127",
      "C) 0到1023",
      "D) 0到255"
    ],
    answer: 3,
    explanation: "An 8-bit grayscale image uses 8 bits per pixel, allowing 2^8 = 256 distinct intensity levels ranging from 0 (black) to 255 (white). This range provides sufficient tonal variation for most applications. Medical and scientific imaging may use higher bit depths like 16-bit.",
    explanationChinese: "8位灰度图像每像素使用8位，允许2^8=256个不同的强度级别，范围从0（黑色）到255（白色）。这个范围为大多数应用提供了足够的色调变化。医学和科学成像可能使用更高位深度如16位。",
    diagram: "",
    terms: ["image_preprocessing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 7,
    q: "Which color space is commonly used in OpenCV by default when reading images?",
    qChinese: "OpenCV读取图像时默认使用哪种颜色空间？",
    options: [
      "A) BGR",
      "B) RGB",
      "C) HSV",
      "D) LAB"
    ],
    optionsChinese: [
      "A) BGR",
      "B) RGB",
      "C) HSV",
      "D) LAB"
    ],
    answer: 0,
    explanation: "OpenCV reads images in BGR (Blue, Green, Red) format by default, which is the reverse channel order compared to the more common RGB convention. This is a historical design choice. When displaying images with matplotlib or other RGB-based tools, a conversion using cvtColor is required.",
    explanationChinese: "OpenCV默认以BGR（蓝、绿、红）格式读取图像，这与更常见的RGB约定相比通道顺序相反。这是一个历史性的设计选择。当使用matplotlib或其他基于RGB的工具显示图像时，需要使用cvtColor进行转换。",
    diagram: "",
    terms: ["image_preprocessing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 8,
    q: "What does the HSV color space stand for?",
    qChinese: "HSV颜色空间代表什么？",
    options: [
      "A) Hue, Shade, Value",
      "B) Hue, Saturation, Variance",
      "C) Highlight, Shadow, Vibrance",
      "D) Hue, Saturation, Value"
    ],
    optionsChinese: [
      "A) 色调、阴影、明度",
      "B) 色调、饱和度、方差",
      "C) 高光、阴影、鲜艳度",
      "D) 色调、饱和度、明度"
    ],
    answer: 3,
    explanation: "HSV stands for Hue, Saturation, and Value. Hue represents the color type as an angle (0-360 degrees), Saturation represents color purity, and Value represents brightness. HSV is useful for color-based segmentation tasks because it separates color information from illumination.",
    explanationChinese: "HSV代表色调(Hue)、饱和度(Saturation)和明度(Value)。色调表示颜色类型为角度（0-360度），饱和度表示颜色纯度，明度表示亮度。HSV对于基于颜色的分割任务很有用，因为它将颜色信息与光照分离。",
    diagram: "",
    terms: ["image_preprocessing","semantic_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 9,
    q: "An RGBA image has how many channels?",
    qChinese: "RGBA图像有多少个通道？",
    options: [
      "A) 2",
      "B) 4",
      "C) 3",
      "D) 5"
    ],
    optionsChinese: [
      "A) 2",
      "B) 4",
      "C) 3",
      "D) 5"
    ],
    answer: 1,
    explanation: "An RGBA image has four channels: Red, Green, Blue, and Alpha. The Alpha channel stores transparency information, where 0 is fully transparent and 255 is fully opaque. RGBA is commonly used in PNG format and for compositing operations where transparency is needed.",
    explanationChinese: "RGBA图像有四个通道：红色、绿色、蓝色和Alpha。Alpha通道存储透明度信息，其中0表示完全透明，255表示完全不透明。RGBA常用于PNG格式和需要透明度的合成操作。",
    diagram: "",
    terms: ["image_preprocessing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 10,
    q: "What is the total number of possible colors in a 24-bit RGB image?",
    qChinese: "24位RGB图像中可能的颜色总数是多少？",
    options: [
      "A) 256",
      "B) 65,536",
      "C) 4,294,967,296",
      "D) 16,777,216"
    ],
    optionsChinese: [
      "A) 256",
      "B) 65,536",
      "C) 4,294,967,296",
      "D) 16,777,216"
    ],
    answer: 3,
    explanation: "A 24-bit RGB image uses 8 bits per channel across 3 channels, yielding 2^24 = 16,777,216 possible colors. Each channel contributes 256 levels, and the total combinations are 256 x 256 x 256. This is often called True Color and is sufficient for most human visual perception needs.",
    explanationChinese: "24位RGB图像在3个通道上每个通道使用8位，产生2^24=16,777,216种可能的颜色。每个通道贡献256个级别，总组合为256×256×256。这通常称为真彩色，足以满足大多数人类视觉感知需求。",
    diagram: "",
    terms: ["image_preprocessing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 11,
    q: "What is a histogram in the context of image processing?",
    qChinese: "在图像处理的上下文中，直方图是什么？",
    options: [
      "A) A graph showing the spatial frequency distribution of an image",
      "B) A technique for compressing image files",
      "C) A method for sharpening image edges",
      "D) A graph showing the distribution of pixel intensity values"
    ],
    optionsChinese: [
      "A) 显示图像空间频率分布的图表",
      "B) 压缩图像文件的技术",
      "C) 锐化图像边缘的方法",
      "D) 显示像素强度值分布的图表"
    ],
    answer: 3,
    explanation: "An image histogram is a graphical representation showing the distribution of pixel intensity values in an image. The x-axis represents intensity levels and the y-axis shows pixel count. Histograms help analyze contrast, brightness, and exposure, and guide preprocessing like histogram equalization.",
    explanationChinese: "图像直方图是显示图像中像素强度值分布的图形表示。x轴表示强度级别，y轴显示像素计数。直方图帮助分析对比度、亮度和曝光，并指导直方图均衡化等预处理。",
    diagram: "",
    terms: ["image_preprocessing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 12,
    q: "What is bilinear interpolation used for in image processing?",
    qChinese: "双线性插值在图像处理中用于什么？",
    options: [
      "A) Edge detection",
      "B) Estimating pixel values when resizing images",
      "C) Color space conversion",
      "D) Noise removal"
    ],
    optionsChinese: [
      "A) 边缘检测",
      "B) 调整图像大小时估算像素值",
      "C) 颜色空间转换",
      "D) 噪声去除"
    ],
    answer: 1,
    explanation: "Bilinear interpolation estimates new pixel values during image resizing by computing a weighted average of the four nearest pixel neighbors. It produces smoother results than nearest-neighbor interpolation but is less computationally expensive than bicubic interpolation. It is widely used in image scaling operations.",
    explanationChinese: "双线性插值通过计算四个最近像素邻居的加权平均值来在图像调整大小期间估算新的像素值。它产生比最近邻插值更平滑的结果，但计算成本低于双三次插值。它广泛用于图像缩放操作。",
    diagram: "",
    terms: ["image_preprocessing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 13,
    q: "Which image format supports lossless compression?",
    qChinese: "哪种图像格式支持无损压缩？",
    options: [
      "A) JPEG",
      "B) PNG",
      "C) MPEG",
      "D) MP4"
    ],
    optionsChinese: [
      "A) JPEG",
      "B) PNG",
      "C) MPEG",
      "D) MP4"
    ],
    answer: 1,
    explanation: "PNG (Portable Network Graphics) supports lossless compression, meaning no image data is lost during compression. Unlike JPEG, which uses lossy compression and may introduce artifacts, PNG preserves every pixel value exactly. PNG also supports transparency through an alpha channel.",
    explanationChinese: "PNG（便携式网络图形）支持无损压缩，意味着在压缩过程中不会丢失图像数据。与使用有损压缩可能引入伪影的JPEG不同，PNG精确保留每个像素值。PNG还通过alpha通道支持透明度。",
    diagram: "",
    terms: ["image_preprocessing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 14,
    q: "What does the term 'aspect ratio' refer to in an image?",
    qChinese: "图像中的'宽高比'指的是什么？",
    options: [
      "A) The ratio of file size to resolution",
      "B) The proportional relationship between width and height",
      "C) The ratio of foreground to background pixels",
      "D) The ratio of color channels to total pixels"
    ],
    optionsChinese: [
      "A) 文件大小与分辨率的比率",
      "B) 宽度和高度之间的比例关系",
      "C) 前景像素与背景像素的比率",
      "D) 颜色通道与总像素的比率"
    ],
    answer: 1,
    explanation: "Aspect ratio is the proportional relationship between an image's width and height, expressed as width:height (e.g., 16:9, 4:3). Maintaining aspect ratio during resizing prevents distortion. In deep learning, input images are often resized while preserving aspect ratio, with padding added as needed.",
    explanationChinese: "宽高比是图像宽度和高度之间的比例关系，表示为宽:高（如16:9、4:3）。在调整大小时保持宽高比可防止变形。在深度学习中，输入图像通常在保持宽高比的同时调整大小，根据需要添加填充。",
    diagram: "",
    terms: ["image_preprocessing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 15,
    q: "What is the purpose of converting a color image to grayscale in computer vision pipelines?",
    qChinese: "在计算机视觉流程中将彩色图像转换为灰度的目的是什么？",
    options: [
      "A) To increase the number of features",
      "B) To increase the image resolution",
      "C) To improve color accuracy",
      "D) To reduce computational complexity while preserving structural information"
    ],
    optionsChinese: [
      "A) 增加特征数量",
      "B) 增加图像分辨率",
      "C) 提高颜色准确度",
      "D) 在保留结构信息的同时降低计算复杂度"
    ],
    answer: 3,
    explanation: "Converting to grayscale reduces an image from three channels to one, lowering computational cost by roughly three times while preserving edges, textures, and structural information. Many classical CV algorithms like edge detection work on single-channel images. It simplifies processing without losing shape details.",
    explanationChinese: "转换为灰度将图像从三个通道减少到一个，将计算成本降低约三倍，同时保留边缘、纹理和结构信息。许多经典CV算法如边缘检测在单通道图像上工作。它简化了处理而不丢失形状细节。",
    diagram: "",
    terms: ["image_preprocessing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 16,
    q: "What is spatial resolution in the context of digital images?",
    qChinese: "在数字图像的上下文中，空间分辨率是什么？",
    options: [
      "A) The number of pixels per unit area or length",
      "B) The number of bits used to encode each pixel",
      "C) The total file size of the image",
      "D) The number of distinct colors in the image"
    ],
    optionsChinese: [
      "A) 每单位面积或长度的像素数",
      "B) 用于编码每个像素的位数",
      "C) 图像的总文件大小",
      "D) 图像中不同颜色的数量"
    ],
    answer: 0,
    explanation: "Spatial resolution refers to the density of pixels per unit area, often measured in pixels per inch (PPI) or dots per inch (DPI). Higher spatial resolution captures finer details. In computer vision, the spatial dimensions of input images directly impact model accuracy and computational requirements.",
    explanationChinese: "空间分辨率指每单位面积的像素密度，通常以每英寸像素数(PPI)或每英寸点数(DPI)衡量。更高的空间分辨率捕获更精细的细节。在计算机视觉中，输入图像的空间维度直接影响模型精度和计算需求。",
    diagram: "",
    terms: ["image_preprocessing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 17,
    q: "What is the LAB color space primarily used for?",
    qChinese: "LAB颜色空间主要用于什么？",
    options: [
      "A) Video compression",
      "B) Perceptually uniform color difference measurement",
      "C) GPU-optimized rendering",
      "D) Binary image thresholding"
    ],
    optionsChinese: [
      "A) 视频压缩",
      "B) 感知均匀的颜色差异测量",
      "C) GPU优化渲染",
      "D) 二值图像阈值处理"
    ],
    answer: 1,
    explanation: "The CIELAB (LAB) color space is designed to be perceptually uniform, meaning equal numerical changes correspond to equal perceived color differences. L represents lightness, A the green-red axis, and B the blue-yellow axis. It is valuable for color comparison and transfer tasks in computer vision.",
    explanationChinese: "CIELAB（LAB）颜色空间被设计为感知均匀的，意味着相等的数值变化对应相等的感知颜色差异。L代表亮度，A代表绿-红轴，B代表蓝-黄轴。它对计算机视觉中的颜色比较和迁移任务很有价值。",
    diagram: "",
    terms: ["image_preprocessing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 18,
    q: "What happens when you downsample an image without applying an anti-aliasing filter?",
    qChinese: "在不应用抗锯齿滤波器的情况下对图像进行下采样会发生什么？",
    options: [
      "A) Aliasing artifacts such as moiré patterns may appear",
      "B) The image becomes brighter",
      "C) The image loses all color information",
      "D) The file size increases"
    ],
    optionsChinese: [
      "A) 可能出现锯齿伪影如摩尔纹",
      "B) 图像变得更亮",
      "C) 图像丢失所有颜色信息",
      "D) 文件大小增加"
    ],
    answer: 0,
    explanation: "Downsampling without anti-aliasing can produce aliasing artifacts like moiré patterns, jagged edges, and false textures. According to the Nyquist theorem, high-frequency components above half the new sampling rate cause aliasing. A low-pass filter before downsampling removes these problematic frequencies.",
    explanationChinese: "不使用抗锯齿的下采样可能产生锯齿伪影，如摩尔纹、锯齿边缘和虚假纹理。根据奈奎斯特定理，高于新采样率一半的高频分量会导致锯齿。在下采样前使用低通滤波器可去除这些有问题的频率。",
    diagram: "",
    terms: ["image_preprocessing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 19,
    q: "What is the purpose of image thresholding?",
    qChinese: "图像阈值处理的目的是什么？",
    options: [
      "A) To convert a grayscale image into a binary image",
      "B) To increase the image resolution",
      "C) To add color to a grayscale image",
      "D) To compress the image file"
    ],
    optionsChinese: [
      "A) 将灰度图像转换为二值图像",
      "B) 增加图像分辨率",
      "C) 为灰度图像添加颜色",
      "D) 压缩图像文件"
    ],
    answer: 0,
    explanation: "Image thresholding converts a grayscale image into a binary image by comparing each pixel value against a threshold. Pixels above the threshold become white (1) and below become black (0). This is fundamental for segmentation, OCR, and object separation in classical computer vision.",
    explanationChinese: "图像阈值处理通过将每个像素值与阈值比较，将灰度图像转换为二值图像。高于阈值的像素变为白色(1)，低于的变为黑色(0)。这对经典计算机视觉中的分割、OCR和目标分离至关重要。",
    diagram: "",
    terms: ["image_preprocessing","semantic_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 20,
    q: "Which term describes the number of bits used to represent the color of a single pixel?",
    qChinese: "哪个术语描述用于表示单个像素颜色的位数？",
    options: [
      "A) Resolution",
      "B) Bit depth",
      "C) Frame rate",
      "D) Compression ratio"
    ],
    optionsChinese: [
      "A) 分辨率",
      "B) 位深度",
      "C) 帧率",
      "D) 压缩比"
    ],
    answer: 1,
    explanation: "Bit depth (also called color depth) is the number of bits used to represent the color of each pixel. Common bit depths include 8-bit (256 levels per channel), 16-bit, and 32-bit float. Higher bit depth allows more color precision but increases memory and storage requirements.",
    explanationChinese: "位深度（也称颜色深度）是用于表示每个像素颜色的位数。常见的位深度包括8位（每通道256个级别）、16位和32位浮点。更高的位深度允许更高的颜色精度，但增加内存和存储需求。",
    diagram: "",
    terms: ["image_preprocessing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 21,
    q: "What is the Fourier Transform used for in image processing?",
    qChinese: "傅里叶变换在图像处理中用于什么？",
    options: [
      "A) Converting images from RGB to grayscale",
      "B) Decomposing an image into its frequency components",
      "C) Increasing the pixel resolution of an image",
      "D) Removing metadata from image files"
    ],
    optionsChinese: [
      "A) 将图像从RGB转换为灰度",
      "B) 将图像分解为其频率分量",
      "C) 增加图像的像素分辨率",
      "D) 从图像文件中删除元数据"
    ],
    answer: 1,
    explanation: "The Fourier Transform converts an image from the spatial domain to the frequency domain, decomposing it into sinusoidal frequency components. Low frequencies represent smooth regions while high frequencies represent edges and noise. This enables frequency-based filtering, compression, and analysis.",
    explanationChinese: "傅里叶变换将图像从空间域转换到频率域，将其分解为正弦频率分量。低频表示平滑区域，高频表示边缘和噪声。这使得基于频率的滤波、压缩和分析成为可能。",
    diagram: "",
    terms: ["image_preprocessing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 22,
    q: "What is an image pyramid?",
    qChinese: "什么是图像金字塔？",
    options: [
      "A) A triangular cropping technique",
      "B) A method for stacking multiple images",
      "C) A multi-scale representation of an image at different resolutions",
      "D) A 3D reconstruction technique"
    ],
    optionsChinese: [
      "A) 三角形裁剪技术",
      "B) 堆叠多个图像的方法",
      "C) 不同分辨率下图像的多尺度表示",
      "D) 三维重建技术"
    ],
    answer: 2,
    explanation: "An image pyramid is a multi-scale representation where the same image is represented at progressively lower resolutions, forming a pyramid shape. Gaussian and Laplacian pyramids are common types. They are used in scale-invariant feature detection, image blending, and multi-scale object detection.",
    explanationChinese: "图像金字塔是一种多尺度表示，其中同一图像以逐渐降低的分辨率表示，形成金字塔形状。高斯金字塔和拉普拉斯金字塔是常见类型。它们用于尺度不变特征检测、图像融合和多尺度目标检测。",
    diagram: "",
    terms: ["image_preprocessing","object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 23,
    q: "What is the effect of applying gamma correction to an image?",
    qChinese: "对图像应用伽马校正的效果是什么？",
    options: [
      "A) It sharpens the edges in the image",
      "B) It converts the image to a different color space",
      "C) It adjusts the brightness nonlinearly to match human perception",
      "D) It removes noise from the image"
    ],
    optionsChinese: [
      "A) 锐化图像中的边缘",
      "B) 将图像转换为不同的颜色空间",
      "C) 非线性调整亮度以匹配人类感知",
      "D) 从图像中去除噪声"
    ],
    answer: 2,
    explanation: "Gamma correction applies a nonlinear mapping to pixel intensities using the formula output = input^gamma. Gamma < 1 brightens dark regions while gamma > 1 darkens bright regions. It compensates for the nonlinear response of displays and aligns image brightness with human visual perception.",
    explanationChinese: "伽马校正使用公式output=input^gamma对像素强度应用非线性映射。伽马<1使暗区变亮，伽马>1使亮区变暗。它补偿显示器的非线性响应，并使图像亮度与人类视觉感知对齐。",
    diagram: "",
    terms: ["image_preprocessing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 24,
    q: "What is the morphological operation 'erosion' used for?",
    qChinese: "形态学操作'腐蚀'用于什么？",
    options: [
      "A) Shrinking the boundaries of foreground objects",
      "B) Expanding the boundaries of foreground objects",
      "C) Detecting edges in an image",
      "D) Smoothing the color gradient"
    ],
    optionsChinese: [
      "A) 缩小前景对象的边界",
      "B) 扩展前景对象的边界",
      "C) 检测图像中的边缘",
      "D) 平滑颜色渐变"
    ],
    answer: 0,
    explanation: "Erosion shrinks the boundaries of foreground objects by sliding a structuring element over the image and keeping a pixel only if all pixels under the element are foreground. It removes small noise, separates touching objects, and thins features. The opposite operation, dilation, expands boundaries.",
    explanationChinese: "腐蚀通过在图像上滑动结构元素来缩小前景对象的边界，仅当元素下的所有像素都是前景时才保留像素。它去除小噪声、分离接触的对象并细化特征。相反的操作膨胀则扩展边界。",
    diagram: "",
    terms: ["image_preprocessing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 25,
    q: "What is the difference between lossy and lossless image compression?",
    qChinese: "有损和无损图像压缩之间有什么区别？",
    options: [
      "A) Lossy preserves all data; lossless discards some data",
      "B) Both methods produce identical file sizes",
      "C) Lossy discards some data for smaller files; lossless preserves all data exactly",
      "D) Lossless compression only works on grayscale images"
    ],
    optionsChinese: [
      "A) 有损保留所有数据；无损丢弃部分数据",
      "B) 两种方法产生相同的文件大小",
      "C) 有损丢弃部分数据以获得更小文件；无损精确保留所有数据",
      "D) 无损压缩仅适用于灰度图像"
    ],
    answer: 2,
    explanation: "Lossy compression (e.g., JPEG) permanently removes some image data to achieve smaller file sizes, potentially introducing artifacts. Lossless compression (e.g., PNG) reduces file size without losing any data, allowing perfect reconstruction. The choice depends on the application's quality requirements.",
    explanationChinese: "有损压缩（如JPEG）永久删除部分图像数据以获得更小的文件大小，可能引入伪影。无损压缩（如PNG）在不丢失任何数据的情况下减小文件大小，允许完美重建。选择取决于应用的质量要求。",
    diagram: "",
    terms: ["image_preprocessing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  // ===== IMAGE PREPROCESSING (Questions 26–45) =====
  {
    id: 26,
    q: "What is the purpose of normalizing pixel values to the range [0, 1]?",
    qChinese: "将像素值归一化到[0, 1]范围的目的是什么？",
    options: [
      "A) To ensure consistent scale for neural network training",
      "B) To increase image resolution",
      "C) To convert the image to grayscale",
      "D) To apply lossless compression"
    ],
    optionsChinese: [
      "A) 确保神经网络训练的一致尺度",
      "B) 增加图像分辨率",
      "C) 将图像转换为灰度",
      "D) 应用无损压缩"
    ],
    answer: 0,
    explanation: "Normalizing pixel values to [0, 1] ensures all input features are on a consistent scale, which helps neural networks converge faster during training. Without normalization, large pixel values (0-255) can cause unstable gradients and slow learning. It is a standard preprocessing step in deep learning.",
    explanationChinese: "将像素值归一化到[0,1]确保所有输入特征在一致的尺度上，这有助于神经网络在训练期间更快收敛。没有归一化，大的像素值(0-255)可能导致不稳定的梯度和缓慢的学习。这是深度学习中的标准预处理步骤。",
    diagram: "",
    terms: ["image_preprocessing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 27,
    q: "What does mean subtraction achieve in image preprocessing for CNNs?",
    qChinese: "在CNN图像预处理中，均值减法实现了什么？",
    options: [
      "A) It removes all background pixels",
      "B) It converts RGB to grayscale",
      "C) It doubles the image resolution",
      "D) It centers the data distribution around zero"
    ],
    optionsChinese: [
      "A) 移除所有背景像素",
      "B) 将RGB转换为灰度",
      "C) 将图像分辨率翻倍",
      "D) 将数据分布居中于零附近"
    ],
    answer: 3,
    explanation: "Mean subtraction centers the pixel data around zero by subtracting the dataset mean from each image. This removes the average brightness bias, making the network focus on meaningful variations. ImageNet models typically subtract per-channel means (R=123.68, G=116.78, B=103.94) computed over the training set.",
    explanationChinese: "均值减法通过从每个图像中减去数据集均值，将像素数据居中于零附近。这消除了平均亮度偏差，使网络关注有意义的变化。ImageNet模型通常减去在训练集上计算的逐通道均值(R=123.68, G=116.78, B=103.94)。",
    diagram: "",
    terms: ["image_preprocessing","image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 28,
    q: "Which filter is commonly used for Gaussian blurring?",
    qChinese: "哪种滤波器常用于高斯模糊？",
    options: [
      "A) A kernel with weights following a Gaussian distribution",
      "B) A kernel with equal weights",
      "C) A kernel with binary values only",
      "D) A kernel with random values"
    ],
    optionsChinese: [
      "A) 权重遵循高斯分布的卷积核",
      "B) 权重相等的卷积核",
      "C) 仅有二值的卷积核",
      "D) 随机值的卷积核"
    ],
    answer: 0,
    explanation: "Gaussian blur uses a kernel whose weights follow a 2D Gaussian distribution, giving higher weight to the center pixel and decreasing weights outward. This produces a natural-looking smoothing effect that reduces noise while preserving edges better than a uniform averaging filter.",
    explanationChinese: "高斯模糊使用权重遵循二维高斯分布的卷积核，给中心像素更高的权重，向外权重递减。这产生自然的平滑效果，在减少噪声的同时比均匀平均滤波器更好地保留边缘。",
    diagram: "",
    terms: ["image_preprocessing","convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 29,
    q: "What is the Sobel operator used for?",
    qChinese: "Sobel算子用于什么？",
    options: [
      "A) Image compression",
      "B) Image upscaling",
      "C) Color quantization",
      "D) Edge detection by computing intensity gradients"
    ],
    optionsChinese: [
      "A) 图像压缩",
      "B) 图像上采样",
      "C) 颜色量化",
      "D) 通过计算强度梯度进行边缘检测"
    ],
    answer: 3,
    explanation: "The Sobel operator detects edges by computing the gradient of image intensity. It uses two 3x3 kernels: one for horizontal gradients (Gx) and one for vertical gradients (Gy). The gradient magnitude sqrt(Gx^2 + Gy^2) highlights edges. It is widely used in classical feature extraction pipelines.",
    explanationChinese: "Sobel算子通过计算图像强度梯度来检测边缘。它使用两个3x3卷积核：一个用于水平梯度(Gx)，一个用于垂直梯度(Gy)。梯度幅值sqrt(Gx^2+Gy^2)突出显示边缘。它广泛用于经典特征提取流程。",
    diagram: "",
    terms: ["image_preprocessing","convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 30,
    q: "What does histogram equalization achieve?",
    qChinese: "直方图均衡化实现了什么？",
    options: [
      "A) It spreads out intensity values to enhance contrast",
      "B) It reduces the image to two colors",
      "C) It converts the image to frequency domain",
      "D) It removes color channels"
    ],
    optionsChinese: [
      "A) 展开强度值以增强对比度",
      "B) 将图像减少为两种颜色",
      "C) 将图像转换到频率域",
      "D) 移除颜色通道"
    ],
    answer: 0,
    explanation: "Histogram equalization redistributes pixel intensity values to achieve a more uniform histogram, effectively enhancing image contrast. It maps the cumulative distribution function to a linear distribution, expanding the dynamic range. This is especially useful for images with poor contrast or uneven illumination.",
    explanationChinese: "直方图均衡化重新分配像素强度值以获得更均匀的直方图，有效增强图像对比度。它将累积分布函数映射到线性分布，扩展动态范围。这对对比度差或光照不均的图像特别有用。",
    diagram: "",
    terms: ["image_preprocessing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 31,
    q: "What is the difference between nearest-neighbor and bicubic interpolation for image resizing?",
    qChinese: "图像调整大小时，最近邻插值和双三次插值有什么区别？",
    options: [
      "A) Nearest-neighbor is slower but more accurate",
      "B) Bicubic considers 16 neighbors and produces smoother results than nearest-neighbor",
      "C) Both produce identical results",
      "D) Nearest-neighbor requires more memory than bicubic"
    ],
    optionsChinese: [
      "A) 最近邻更慢但更准确",
      "B) 双三次考虑16个邻居，产生比最近邻更平滑的结果",
      "C) 两者产生相同的结果",
      "D) 最近邻比双三次需要更多内存"
    ],
    answer: 1,
    explanation: "Nearest-neighbor interpolation simply copies the closest pixel value, making it fast but producing blocky artifacts. Bicubic interpolation considers the 16 nearest pixels (4x4 grid) and fits cubic polynomials, producing smoother and sharper results at higher computational cost. Bilinear is a middle ground using 4 neighbors.",
    explanationChinese: "最近邻插值简单地复制最近像素值，速度快但产生块状伪影。双三次插值考虑16个最近像素（4x4网格）并拟合三次多项式，以更高计算成本产生更平滑、更锐利的结果。双线性是使用4个邻居的折中方案。",
    diagram: "",
    terms: ["image_preprocessing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 32,
    q: "What is the Canny edge detection algorithm?",
    qChinese: "Canny边缘检测算法是什么？",
    options: [
      "A) A single-step thresholding technique",
      "B) A multi-stage algorithm involving smoothing, gradient computation, non-maximum suppression, and hysteresis thresholding",
      "C) A deep learning-based edge detector",
      "D) A morphological operation for boundary detection"
    ],
    optionsChinese: [
      "A) 单步阈值技术",
      "B) 涉及平滑、梯度计算、非极大值抑制和滞后阈值的多阶段算法",
      "C) 基于深度学习的边缘检测器",
      "D) 用于边界检测的形态学操作"
    ],
    answer: 1,
    explanation: "Canny edge detection is a multi-stage algorithm: (1) Gaussian smoothing to reduce noise, (2) gradient computation using Sobel operators, (3) non-maximum suppression to thin edges, and (4) hysteresis thresholding with high and low thresholds to connect edges. It produces clean, single-pixel-wide edges.",
    explanationChinese: "Canny边缘检测是一种多阶段算法：(1)高斯平滑减少噪声，(2)使用Sobel算子计算梯度，(3)非极大值抑制细化边缘，(4)使用高低阈值的滞后阈值连接边缘。它产生干净的单像素宽边缘。",
    diagram: "",
    terms: ["image_preprocessing","convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 33,
    q: "What is the purpose of a median filter in image processing?",
    qChinese: "中值滤波器在图像处理中的目的是什么？",
    options: [
      "A) To remove salt-and-pepper noise while preserving edges",
      "B) To sharpen edges",
      "C) To increase brightness",
      "D) To detect corners"
    ],
    optionsChinese: [
      "A) 在保留边缘的同时去除椒盐噪声",
      "B) 锐化边缘",
      "C) 增加亮度",
      "D) 检测角点"
    ],
    answer: 0,
    explanation: "A median filter replaces each pixel with the median value of its neighborhood, making it highly effective at removing salt-and-pepper (impulse) noise. Unlike mean filters, it preserves edges well because the median is not influenced by extreme outlier values in the local neighborhood.",
    explanationChinese: "中值滤波器将每个像素替换为其邻域的中值，使其在去除椒盐（脉冲）噪声方面非常有效。与均值滤波器不同，它能很好地保留边缘，因为中值不受局部邻域中极端异常值的影响。",
    diagram: "",
    terms: ["image_preprocessing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 34,
    q: "Why is center cropping commonly used during inference in image classification?",
    qChinese: "为什么在图像分类推理期间常使用中心裁剪？",
    options: [
      "A) To increase image resolution",
      "B) To augment the test dataset",
      "C) To focus on the most informative central region and match training input size",
      "D) To remove watermarks from images"
    ],
    optionsChinese: [
      "A) 增加图像分辨率",
      "B) 增强测试数据集",
      "C) 聚焦于最具信息量的中心区域并匹配训练输入大小",
      "D) 从图像中移除水印"
    ],
    answer: 2,
    explanation: "Center cropping during inference extracts the central portion of an image to match the model's expected input size. This is preferred because objects of interest are often centered in images. During training, random crops provide augmentation, but at test time, center crop gives deterministic, consistent results.",
    explanationChinese: "推理期间的中心裁剪提取图像的中心部分以匹配模型期望的输入大小。这是首选的，因为感兴趣的对象通常位于图像中心。在训练期间，随机裁剪提供增强，但在测试时，中心裁剪给出确定性、一致的结果。",
    diagram: "",
    terms: ["image_preprocessing","image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 35,
    q: "What does CLAHE stand for and what does it do?",
    qChinese: "CLAHE代表什么，它做什么？",
    options: [
      "A) Contrast Limited Adaptive Histogram Equalization; enhances local contrast",
      "B) Color-Level Adaptive Histogram Enhancement; adjusts color balance",
      "C) Channel-wise Linear Adjustment for High Exposure; corrects overexposure",
      "D) Cumulative Logarithmic Adaptive Histogram Extraction; extracts features"
    ],
    optionsChinese: [
      "A) 对比度受限自适应直方图均衡化；增强局部对比度",
      "B) 颜色级别自适应直方图增强；调整颜色平衡",
      "C) 逐通道线性调整高曝光；校正过度曝光",
      "D) 累积对数自适应直方图提取；提取特征"
    ],
    answer: 0,
    explanation: "CLAHE (Contrast Limited Adaptive Histogram Equalization) enhances local contrast by applying histogram equalization to small image tiles rather than the entire image. It limits contrast amplification using a clip limit to avoid noise amplification. CLAHE is widely used in medical imaging and low-light enhancement.",
    explanationChinese: "CLAHE（对比度受限自适应直方图均衡化）通过对小图像块而非整个图像应用直方图均衡化来增强局部对比度。它使用裁剪限制来限制对比度放大，以避免噪声放大。CLAHE广泛用于医学成像和低光增强。",
    diagram: "",
    terms: ["image_preprocessing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 36,
    q: "What is the standard image input size for the original ImageNet classification models like AlexNet?",
    qChinese: "AlexNet等原始ImageNet分类模型的标准图像输入大小是多少？",
    options: [
      "A) 32x32",
      "B) 224x224",
      "C) 128x128",
      "D) 512x512"
    ],
    optionsChinese: [
      "A) 32x32",
      "B) 224x224",
      "C) 128x128",
      "D) 512x512"
    ],
    answer: 1,
    explanation: "The standard input size for many ImageNet classification models is 224x224 pixels. AlexNet originally used 227x227, but subsequent architectures like VGG and ResNet standardized on 224x224. Images are typically resized to 256 on the shorter side, then center-cropped to 224x224 during preprocessing.",
    explanationChinese: "许多ImageNet分类模型的标准输入大小是224x224像素。AlexNet最初使用227x227，但后续架构如VGG和ResNet标准化为224x224。图像通常在短边调整为256，然后在预处理期间中心裁剪为224x224。",
    diagram: "",
    terms: ["image_preprocessing","image_classification","resnet"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 37,
    q: "What preprocessing step involves subtracting the mean and dividing by the standard deviation?",
    qChinese: "哪个预处理步骤涉及减去均值并除以标准差？",
    options: [
      "A) Min-max normalization",
      "B) Histogram equalization",
      "C) Standardization (z-score normalization)",
      "D) Gamma correction"
    ],
    optionsChinese: [
      "A) 最小-最大归一化",
      "B) 直方图均衡化",
      "C) 标准化（z-score归一化）",
      "D) 伽马校正"
    ],
    answer: 2,
    explanation: "Standardization (z-score normalization) transforms data by subtracting the mean and dividing by the standard deviation, producing zero-mean unit-variance data. For ImageNet, per-channel means and standard deviations are used. This preprocessing is critical for pretrained model compatibility and training stability.",
    explanationChinese: "标准化（z-score归一化）通过减去均值并除以标准差来转换数据，产生零均值单位方差数据。对于ImageNet，使用逐通道的均值和标准差。此预处理对预训练模型兼容性和训练稳定性至关重要。",
    diagram: "",
    terms: ["image_preprocessing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 38,
    q: "What is the bilateral filter used for?",
    qChinese: "双边滤波器用于什么？",
    options: [
      "A) Smoothing while preserving edges by considering both spatial and intensity differences",
      "B) Sharpening only",
      "C) Converting color spaces",
      "D) Detecting blob features"
    ],
    optionsChinese: [
      "A) 通过同时考虑空间和强度差异来平滑同时保留边缘",
      "B) 仅锐化",
      "C) 转换颜色空间",
      "D) 检测斑点特征"
    ],
    answer: 0,
    explanation: "The bilateral filter smooths images while preserving edges by weighting neighboring pixels based on both spatial distance and intensity difference. Pixels with similar intensity get higher weights, preventing smoothing across edges. It is effective for denoising while maintaining sharp boundaries and fine details.",
    explanationChinese: "双边滤波器通过根据空间距离和强度差异对邻域像素加权来平滑图像同时保留边缘。强度相似的像素获得更高权重，防止跨边缘平滑。它在去噪的同时保持锐利边界和精细细节方面很有效。",
    diagram: "",
    terms: ["image_preprocessing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 39,
    q: "What is the purpose of padding an image before applying a convolution filter?",
    qChinese: "在应用卷积滤波器之前对图像进行填充的目的是什么？",
    options: [
      "A) To increase the number of color channels",
      "B) To convert the image to frequency domain",
      "C) To compress the image",
      "D) To preserve spatial dimensions and retain border information"
    ],
    optionsChinese: [
      "A) 增加颜色通道数量",
      "B) 将图像转换到频率域",
      "C) 压缩图像",
      "D) 保持空间维度并保留边界信息"
    ],
    answer: 3,
    explanation: "Padding adds extra pixels around the image borders before convolution. Zero-padding is the most common approach. Without padding, the output shrinks after each convolution. Same padding preserves spatial dimensions, ensuring border pixels contribute equally to features and preventing progressive size reduction in deep networks.",
    explanationChinese: "填充在卷积前在图像边界周围添加额外像素。零填充是最常见的方法。没有填充，每次卷积后输出会缩小。Same填充保持空间维度，确保边界像素对特征的贡献相等，并防止深层网络中的逐步尺寸减小。",
    diagram: "",
    terms: ["image_preprocessing","convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 40,
    q: "What is the purpose of applying a sharpening filter to an image?",
    qChinese: "对图像应用锐化滤波器的目的是什么？",
    options: [
      "A) To reduce noise",
      "B) To convert the image to binary",
      "C) To reduce the file size",
      "D) To enhance edges and fine details by amplifying high-frequency components"
    ],
    optionsChinese: [
      "A) 减少噪声",
      "B) 将图像转换为二值",
      "C) 减小文件大小",
      "D) 通过放大高频分量来增强边缘和精细细节"
    ],
    answer: 3,
    explanation: "Sharpening filters enhance edges and fine details by amplifying high-frequency components in the image. A common approach is unsharp masking, which subtracts a blurred version from the original image and adds the difference back. This increases local contrast at edges without affecting uniform regions.",
    explanationChinese: "锐化滤波器通过放大图像中的高频分量来增强边缘和精细细节。常见方法是反锐化掩蔽，从原始图像中减去模糊版本并将差异加回。这增加了边缘处的局部对比度而不影响均匀区域。",
    diagram: "",
    terms: ["image_preprocessing","convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 41,
    q: "What is Otsu's method used for?",
    qChinese: "大津法用于什么？",
    options: [
      "A) Automatic threshold selection for image binarization",
      "B) Image compression",
      "C) Feature matching",
      "D) Object tracking"
    ],
    optionsChinese: [
      "A) 图像二值化的自动阈值选择",
      "B) 图像压缩",
      "C) 特征匹配",
      "D) 目标跟踪"
    ],
    answer: 0,
    explanation: "Otsu's method automatically determines the optimal threshold for binarizing a grayscale image by minimizing within-class variance (or equivalently maximizing between-class variance) of the two pixel groups. It requires no manual parameter tuning and works well for bimodal histograms with clear foreground-background separation.",
    explanationChinese: "大津法通过最小化两个像素组的类内方差（等效地最大化类间方差）自动确定灰度图像二值化的最佳阈值。它不需要手动参数调整，对具有清晰前景-背景分离的双峰直方图效果很好。",
    diagram: "",
    terms: ["image_preprocessing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 42,
    q: "What is image denoising?",
    qChinese: "什么是图像去噪？",
    options: [
      "A) Adding random perturbations to images",
      "B) Reducing the number of color channels",
      "C) Removing unwanted noise while preserving important image features",
      "D) Increasing the bit depth of pixels"
    ],
    optionsChinese: [
      "A) 向图像添加随机扰动",
      "B) 减少颜色通道数量",
      "C) 在保留重要图像特征的同时去除不需要的噪声",
      "D) 增加像素的位深度"
    ],
    answer: 2,
    explanation: "Image denoising removes unwanted noise from images while preserving edges, textures, and important details. Common methods include Gaussian filtering, bilateral filtering, non-local means, and deep learning approaches like DnCNN. Effective denoising improves downstream task performance in object detection and segmentation.",
    explanationChinese: "图像去噪从图像中去除不需要的噪声，同时保留边缘、纹理和重要细节。常见方法包括高斯滤波、双边滤波、非局部均值和深度学习方法如DnCNN。有效的去噪可提高目标检测和分割等下游任务的性能。",
    diagram: "",
    terms: ["image_preprocessing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 43,
    q: "What is the effect of applying a Laplacian filter to an image?",
    qChinese: "对图像应用拉普拉斯滤波器的效果是什么？",
    options: [
      "A) It blurs the image",
      "B) It rotates the image",
      "C) It detects regions of rapid intensity change (edges) in all directions",
      "D) It adjusts the color balance"
    ],
    optionsChinese: [
      "A) 模糊图像",
      "B) 旋转图像",
      "C) 检测所有方向上快速强度变化的区域（边缘）",
      "D) 调整颜色平衡"
    ],
    answer: 2,
    explanation: "The Laplacian filter is a second-order derivative operator that detects edges in all directions simultaneously. It computes the sum of second partial derivatives, highlighting regions of rapid intensity change. It is isotropic, meaning it responds equally to edges in any orientation, unlike directional operators like Sobel.",
    explanationChinese: "拉普拉斯滤波器是二阶导数算子，同时检测所有方向的边缘。它计算二阶偏导数之和，突出显示快速强度变化的区域。它是各向同性的，意味着它对任何方向的边缘响应相同，不像Sobel等方向性算子。",
    diagram: "",
    terms: ["image_preprocessing","convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 44,
    q: "Why might you apply a log transformation to image pixel values?",
    qChinese: "为什么可能要对图像像素值应用对数变换？",
    options: [
      "A) To remove all noise from the image",
      "B) To convert the image to binary",
      "C) To expand dark pixel values and compress bright pixel values",
      "D) To increase the number of channels"
    ],
    optionsChinese: [
      "A) 去除图像中的所有噪声",
      "B) 将图像转换为二值",
      "C) 扩展暗像素值并压缩亮像素值",
      "D) 增加通道数量"
    ],
    answer: 2,
    explanation: "Log transformation maps pixel values using s = c * log(1 + r), expanding the range of dark pixels and compressing bright pixels. This is useful for images with large dynamic range, such as Fourier spectrum displays. It helps reveal detail in dark regions that would otherwise appear uniformly black.",
    explanationChinese: "对数变换使用s=c*log(1+r)映射像素值，扩展暗像素范围并压缩亮像素。这对具有大动态范围的图像很有用，如傅里叶频谱显示。它有助于揭示暗区域中的细节，否则这些区域看起来会均匀黑色。",
    diagram: "",
    terms: ["image_preprocessing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 45,
    q: "What is the difference between image resizing and image cropping?",
    qChinese: "图像调整大小和图像裁剪有什么区别？",
    options: [
      "A) Resizing changes pixel values; cropping adds new pixels",
      "B) Both operations produce the same result",
      "C) Resizing scales the entire image; cropping selects a sub-region without scaling",
      "D) Cropping increases resolution; resizing decreases it"
    ],
    optionsChinese: [
      "A) 调整大小改变像素值；裁剪添加新像素",
      "B) 两种操作产生相同的结果",
      "C) 调整大小缩放整个图像；裁剪选择子区域而不缩放",
      "D) 裁剪增加分辨率；调整大小减小分辨率"
    ],
    answer: 2,
    explanation: "Resizing scales the entire image to a new dimension using interpolation, changing all pixel positions. Cropping extracts a rectangular sub-region from the image without altering pixel values or scale. Both are common preprocessing steps, often combined: resize first to a larger size, then crop to the target dimensions.",
    explanationChinese: "调整大小使用插值将整个图像缩放到新维度，改变所有像素位置。裁剪从图像中提取矩形子区域而不改变像素值或比例。两者都是常见的预处理步骤，通常组合使用：先调整到较大尺寸，然后裁剪到目标维度。",
    diagram: "",
    terms: ["image_preprocessing","data_augmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  // ===== CONVOLUTION OPERATIONS (Questions 46–70) =====
  {
    id: 46,
    q: "What is a convolution operation in the context of CNNs?",
    qChinese: "在CNN的上下文中，卷积操作是什么？",
    options: [
      "A) A fully connected matrix multiplication",
      "B) A sliding window operation that computes element-wise products between a kernel and input patches",
      "C) A pooling operation that downsamples feature maps",
      "D) A normalization technique for activations"
    ],
    optionsChinese: [
      "A) 全连接矩阵乘法",
      "B) 在卷积核和输入块之间计算逐元素乘积的滑动窗口操作",
      "C) 对特征图进行下采样的池化操作",
      "D) 激活值的归一化技术"
    ],
    answer: 1,
    explanation: "In CNNs, convolution is a sliding window operation where a small learnable kernel moves across the input, computing element-wise products and summing them at each position to produce a feature map. This operation detects local patterns like edges, textures, and shapes while sharing weights across spatial locations.",
    explanationChinese: "在CNN中，卷积是一种滑动窗口操作，其中一个小的可学习卷积核在输入上移动，在每个位置计算逐元素乘积并求和以产生特征图。此操作检测边缘、纹理和形状等局部模式，同时在空间位置间共享权重。",
    diagram: "",
    terms: ["convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 47,
    q: "What is the output size of a convolution with input size 32x32, kernel size 5x5, stride 1, and no padding?",
    qChinese: "输入大小32x32、卷积核大小5x5、步幅1、无填充的卷积输出大小是多少？",
    options: [
      "A) 32x32",
      "B) 30x30",
      "C) 27x27",
      "D) 28x28"
    ],
    optionsChinese: [
      "A) 32x32",
      "B) 30x30",
      "C) 27x27",
      "D) 28x28"
    ],
    answer: 3,
    explanation: "The output size formula is: (input - kernel + 2*padding) / stride + 1 = (32 - 5 + 0) / 1 + 1 = 28. Without padding, each convolution with a 5x5 kernel reduces each spatial dimension by 4 pixels (kernel_size - 1). This formula is fundamental for designing CNN architectures.",
    explanationChinese: "输出大小公式为：(输入-卷积核+2*填充)/步幅+1=(32-5+0)/1+1=28。没有填充时，每次5x5卷积核的卷积将每个空间维度减少4个像素（卷积核大小-1）。这个公式对设计CNN架构至关重要。",
    diagram: "",
    terms: ["convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 48,
    q: "What does stride control in a convolution operation?",
    qChinese: "步幅在卷积操作中控制什么？",
    options: [
      "A) The step size of the kernel as it slides across the input",
      "B) The size of the convolution kernel",
      "C) The number of output channels",
      "D) The activation function applied after convolution"
    ],
    optionsChinese: [
      "A) 卷积核在输入上滑动时的步长大小",
      "B) 卷积核的大小",
      "C) 输出通道的数量",
      "D) 卷积后应用的激活函数"
    ],
    answer: 0,
    explanation: "Stride determines how many pixels the kernel moves at each step during convolution. A stride of 1 moves one pixel at a time, while a stride of 2 skips every other position, effectively halving the spatial dimensions. Larger strides reduce output size and computation but may lose fine-grained spatial information.",
    explanationChinese: "步幅决定了卷积期间卷积核每步移动多少像素。步幅为1时每次移动一个像素，步幅为2时跳过每隔一个位置，有效地将空间维度减半。更大的步幅减少输出大小和计算量，但可能丢失精细的空间信息。",
    diagram: "",
    terms: ["convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 49,
    q: "What is 'same' padding in convolution?",
    qChinese: "卷积中的'same'填充是什么？",
    options: [
      "A) No padding is applied",
      "B) The input is padded with ones",
      "C) Padding is added so the output spatial dimensions equal the input dimensions",
      "D) The kernel is padded to match the input size"
    ],
    optionsChinese: [
      "A) 不应用填充",
      "B) 输入用1填充",
      "C) 添加填充使输出空间维度等于输入维度",
      "D) 卷积核被填充以匹配输入大小"
    ],
    answer: 2,
    explanation: "Same padding adds zeros around the input so that the output feature map has the same spatial dimensions as the input (assuming stride=1). For a kernel of size k, same padding adds (k-1)/2 pixels on each side. This prevents the gradual shrinking of feature maps through successive convolution layers.",
    explanationChinese: "Same填充在输入周围添加零，使输出特征图具有与输入相同的空间维度（假设步幅=1）。对于大小为k的卷积核，same填充在每侧添加(k-1)/2个像素。这防止了特征图通过连续卷积层逐渐缩小。",
    diagram: "",
    terms: ["convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 50,
    q: "What is a feature map in a CNN?",
    qChinese: "CNN中的特征图是什么？",
    options: [
      "A) The original input image",
      "B) The weights of the fully connected layer",
      "C) The output of applying a convolution filter to an input",
      "D) The loss function gradient"
    ],
    optionsChinese: [
      "A) 原始输入图像",
      "B) 全连接层的权重",
      "C) 对输入应用卷积滤波器的输出",
      "D) 损失函数梯度"
    ],
    answer: 2,
    explanation: "A feature map is the output produced when a convolution filter slides across the input and computes dot products at each location. Each filter produces one feature map that highlights specific patterns like edges or textures. Multiple filters in a layer produce a stack of feature maps representing different features.",
    explanationChinese: "特征图是卷积滤波器在输入上滑动并在每个位置计算点积时产生的输出。每个滤波器产生一个特征图，突出显示特定模式如边缘或纹理。一层中的多个滤波器产生一叠特征图，表示不同的特征。",
    diagram: "",
    terms: ["convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 51,
    q: "What is the role of max pooling in a CNN?",
    qChinese: "最大池化在CNN中的作用是什么？",
    options: [
      "A) To increase the spatial dimensions of feature maps",
      "B) To add nonlinearity to the network",
      "C) To normalize the feature map values",
      "D) To downsample feature maps by selecting the maximum value in each window"
    ],
    optionsChinese: [
      "A) 增加特征图的空间维度",
      "B) 为网络添加非线性",
      "C) 归一化特征图值",
      "D) 通过选择每个窗口中的最大值来下采样特征图"
    ],
    answer: 3,
    explanation: "Max pooling downsamples feature maps by sliding a window (typically 2x2 with stride 2) and selecting the maximum value in each region. This reduces spatial dimensions by half, lowering computation and providing translation invariance. It retains the strongest activations while discarding less important spatial details.",
    explanationChinese: "最大池化通过滑动窗口（通常为2x2步幅2）并选择每个区域中的最大值来下采样特征图。这将空间维度减半，降低计算量并提供平移不变性。它保留最强的激活值，同时丢弃不太重要的空间细节。",
    diagram: "",
    terms: ["convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 52,
    q: "What is a 1x1 convolution used for?",
    qChinese: "1x1卷积用于什么？",
    options: [
      "A) Detecting large spatial patterns",
      "B) Changing the number of channels without altering spatial dimensions",
      "C) Performing max pooling",
      "D) Applying batch normalization"
    ],
    optionsChinese: [
      "A) 检测大的空间模式",
      "B) 在不改变空间维度的情况下改变通道数",
      "C) 执行最大池化",
      "D) 应用批归一化"
    ],
    answer: 1,
    explanation: "A 1x1 convolution operates on each spatial position independently across channels, acting as a per-pixel fully connected layer. It can increase or decrease the number of channels (dimensionality reduction), add nonlinearity, and mix channel information. It was popularized by GoogLeNet's Inception module.",
    explanationChinese: "1x1卷积在每个空间位置上跨通道独立操作，充当逐像素全连接层。它可以增加或减少通道数（降维），添加非线性，并混合通道信息。它由GoogLeNet的Inception模块推广。",
    diagram: "",
    terms: ["convolution_operation","resnet"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 53,
    q: "What is a depthwise separable convolution?",
    qChinese: "什么是深度可分离卷积？",
    options: [
      "A) A convolution applied only to the deepest layer",
      "B) A convolution using only 1x1 kernels",
      "C) A convolution with stride equal to the kernel size",
      "D) A factorization of standard convolution into depthwise and pointwise convolutions"
    ],
    optionsChinese: [
      "A) 仅应用于最深层的卷积",
      "B) 仅使用1x1卷积核的卷积",
      "C) 步幅等于卷积核大小的卷积",
      "D) 将标准卷积分解为深度卷积和逐点卷积"
    ],
    answer: 3,
    explanation: "Depthwise separable convolution splits a standard convolution into two steps: depthwise convolution applies a single filter per channel, then pointwise (1x1) convolution combines channel outputs. This dramatically reduces parameters and computation. Used in MobileNet, it achieves roughly k^2 times fewer operations than standard convolution.",
    explanationChinese: "深度可分离卷积将标准卷积分为两步：深度卷积每通道应用一个滤波器，然后逐点(1x1)卷积组合通道输出。这大幅减少参数和计算。用于MobileNet，它比标准卷积减少约k^2倍的操作。",
    diagram: "",
    terms: ["convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 54,
    q: "What is dilated (atrous) convolution?",
    qChinese: "什么是膨胀（空洞）卷积？",
    options: [
      "A) Convolution with a very large kernel",
      "B) Convolution with stride greater than 1",
      "C) Convolution applied after max pooling",
      "D) Convolution with gaps between kernel elements to increase the receptive field"
    ],
    optionsChinese: [
      "A) 使用非常大卷积核的卷积",
      "B) 步幅大于1的卷积",
      "C) 在最大池化后应用的卷积",
      "D) 卷积核元素之间有间隔以增加感受野的卷积"
    ],
    answer: 3,
    explanation: "Dilated convolution inserts gaps (controlled by a dilation rate) between kernel elements, expanding the receptive field without increasing parameters or reducing resolution. A dilation rate of 2 spaces kernel elements one pixel apart. It is widely used in semantic segmentation models like DeepLab to capture multi-scale context.",
    explanationChinese: "膨胀卷积在卷积核元素之间插入间隔（由膨胀率控制），在不增加参数或降低分辨率的情况下扩大感受野。膨胀率为2时卷积核元素间隔一个像素。它广泛用于DeepLab等语义分割模型以捕获多尺度上下文。",
    diagram: "",
    terms: ["convolution_operation","semantic_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 55,
    q: "What is the receptive field in a CNN?",
    qChinese: "CNN中的感受野是什么？",
    options: [
      "A) The size of the output feature map",
      "B) The region in the input image that influences a particular output neuron",
      "C) The number of filters in a convolutional layer",
      "D) The learning rate of the optimizer"
    ],
    optionsChinese: [
      "A) 输出特征图的大小",
      "B) 输入图像中影响特定输出神经元的区域",
      "C) 卷积层中滤波器的数量",
      "D) 优化器的学习率"
    ],
    answer: 1,
    explanation: "The receptive field is the region in the input image that contributes to the computation of a single output neuron. It grows with network depth: each successive layer expands the effective receptive field. Larger receptive fields enable neurons to capture broader context, which is critical for recognizing large objects.",
    explanationChinese: "感受野是输入图像中对单个输出神经元的计算有贡献的区域。它随网络深度增长：每个后续层扩大有效感受野。更大的感受野使神经元能够捕获更广泛的上下文，这对识别大型对象至关重要。",
    diagram: "",
    terms: ["convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 56,
    q: "What is transposed convolution (deconvolution) used for?",
    qChinese: "转置卷积（反卷积）用于什么？",
    options: [
      "A) Reducing the spatial dimensions of feature maps",
      "B) Normalizing feature map values",
      "C) Upsampling feature maps to increase spatial resolution",
      "D) Applying dropout to convolutional layers"
    ],
    optionsChinese: [
      "A) 减小特征图的空间维度",
      "B) 归一化特征图值",
      "C) 上采样特征图以增加空间分辨率",
      "D) 对卷积层应用dropout"
    ],
    answer: 2,
    explanation: "Transposed convolution (sometimes called deconvolution) is a learnable upsampling operation that increases spatial dimensions of feature maps. It is used in decoder networks for segmentation, image generation, and super-resolution. Unlike simple interpolation, it has learnable parameters that can produce better upsampled features.",
    explanationChinese: "转置卷积（有时称为反卷积）是一种可学习的上采样操作，增加特征图的空间维度。它用于分割、图像生成和超分辨率的解码器网络。与简单插值不同，它具有可学习参数，可以产生更好的上采样特征。",
    diagram: "",
    terms: ["convolution_operation","semantic_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 57,
    q: "How many parameters does a convolutional layer have with 64 filters of size 3x3 applied to an input with 32 channels?",
    qChinese: "对具有32个通道的输入应用64个大小为3x3的滤波器的卷积层有多少个参数？",
    options: [
      "A) 576",
      "B) 18,432",
      "C) 18,496",
      "D) 6,144"
    ],
    optionsChinese: [
      "A) 576",
      "B) 18,432",
      "C) 18,496",
      "D) 6,144"
    ],
    answer: 2,
    explanation: "Each filter has 3x3x32 = 288 weights plus 1 bias = 289 parameters. With 64 filters: 289 x 64 = 18,496 total parameters. The formula is: (kernel_h x kernel_w x input_channels + 1) x num_filters. The +1 accounts for the bias term per filter. Weight sharing keeps parameter count manageable.",
    explanationChinese: "每个滤波器有3x3x32=288个权重加1个偏置=289个参数。64个滤波器：289x64=18,496个总参数。公式为：(卷积核高x卷积核宽x输入通道+1)x滤波器数。+1是每个滤波器的偏置项。权重共享使参数数量可控。",
    diagram: "",
    terms: ["convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 58,
    q: "What is global average pooling?",
    qChinese: "什么是全局平均池化？",
    options: [
      "A) Computing the average of each feature map to produce a single value per channel",
      "B) Averaging all pixel values in the input image",
      "C) Averaging the gradients during backpropagation",
      "D) Applying average pooling with a 2x2 window"
    ],
    optionsChinese: [
      "A) 计算每个特征图的平均值以每通道产生一个值",
      "B) 对输入图像中所有像素值取平均",
      "C) 在反向传播期间对梯度取平均",
      "D) 使用2x2窗口应用平均池化"
    ],
    answer: 0,
    explanation: "Global average pooling computes the spatial average of each feature map, reducing each HxW feature map to a single value. This creates a vector of length equal to the number of channels, which can directly feed into a classifier. It replaces fully connected layers, reducing parameters and overfitting risk.",
    explanationChinese: "全局平均池化计算每个特征图的空间平均值，将每个HxW特征图缩减为单个值。这创建一个长度等于通道数的向量，可直接输入分类器。它替代全连接层，减少参数和过拟合风险。",
    diagram: "",
    terms: ["convolution_operation","resnet"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 59,
    q: "What is the key advantage of weight sharing in convolutional layers?",
    qChinese: "卷积层中权重共享的关键优势是什么？",
    options: [
      "A) It dramatically reduces parameters and enables translation equivariance",
      "B) It increases the number of learnable parameters",
      "C) It eliminates the need for activation functions",
      "D) It removes the need for backpropagation"
    ],
    optionsChinese: [
      "A) 大幅减少参数并实现平移等变性",
      "B) 增加可学习参数的数量",
      "C) 消除对激活函数的需求",
      "D) 消除对反向传播的需求"
    ],
    answer: 0,
    explanation: "Weight sharing means the same filter weights are applied across all spatial locations of the input. This provides two key benefits: (1) dramatically fewer parameters compared to fully connected layers, and (2) translation equivariance, meaning a feature detected in one location can be detected anywhere in the image.",
    explanationChinese: "权重共享意味着相同的滤波器权重应用于输入的所有空间位置。这提供两个关键优势：(1)与全连接层相比大幅减少参数，(2)平移等变性，意味着在一个位置检测到的特征可以在图像的任何位置被检测到。",
    diagram: "",
    terms: ["convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 60,
    q: "What is average pooling?",
    qChinese: "什么是平均池化？",
    options: [
      "A) Selecting the minimum value in the pooling window",
      "B) Computing the mean of all values in the pooling window",
      "C) Selecting a random value from the pooling window",
      "D) Computing the median of the pooling window"
    ],
    optionsChinese: [
      "A) 选择池化窗口中的最小值",
      "B) 计算池化窗口中所有值的均值",
      "C) 从池化窗口中选择随机值",
      "D) 计算池化窗口的中位数"
    ],
    answer: 1,
    explanation: "Average pooling computes the arithmetic mean of all values within the pooling window. Unlike max pooling which keeps only the strongest activation, average pooling preserves information about the overall activation level. It is often used in later layers or as global average pooling before the classification head.",
    explanationChinese: "平均池化计算池化窗口内所有值的算术平均值。与仅保留最强激活的最大池化不同，平均池化保留关于整体激活水平的信息。它通常用于后续层或作为分类头之前的全局平均池化。",
    diagram: "",
    terms: ["convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 61,
    q: "What is the effect of increasing the number of filters in a convolutional layer?",
    qChinese: "增加卷积层中滤波器数量的效果是什么？",
    options: [
      "A) It reduces the spatial dimensions of the output",
      "B) It increases the number of output feature maps (channels)",
      "C) It changes the kernel size",
      "D) It decreases the receptive field"
    ],
    optionsChinese: [
      "A) 减小输出的空间维度",
      "B) 增加输出特征图（通道）的数量",
      "C) 改变卷积核大小",
      "D) 减小感受野"
    ],
    answer: 1,
    explanation: "Each filter in a convolutional layer produces one output feature map. Increasing the number of filters increases the output depth (channels), allowing the network to learn more diverse features at that level. Typical architectures progressively double filters (64, 128, 256, 512) while halving spatial dimensions.",
    explanationChinese: "卷积层中的每个滤波器产生一个输出特征图。增加滤波器数量会增加输出深度（通道），使网络在该层级学习更多样化的特征。典型架构逐步将滤波器翻倍（64、128、256、512），同时将空间维度减半。",
    diagram: "",
    terms: ["convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 62,
    q: "What activation function is most commonly used in hidden layers of CNNs?",
    qChinese: "CNN隐藏层中最常用的激活函数是什么？",
    options: [
      "A) ReLU",
      "B) Tanh",
      "C) Sigmoid",
      "D) Softmax"
    ],
    optionsChinese: [
      "A) ReLU",
      "B) Tanh",
      "C) Sigmoid",
      "D) Softmax"
    ],
    answer: 0,
    explanation: "ReLU (Rectified Linear Unit) is the most widely used activation in CNN hidden layers. Defined as f(x) = max(0, x), it introduces nonlinearity while being computationally efficient. ReLU mitigates the vanishing gradient problem that affects sigmoid and tanh, enabling training of deeper networks.",
    explanationChinese: "ReLU（修正线性单元）是CNN隐藏层中最广泛使用的激活函数。定义为f(x)=max(0,x)，它引入非线性同时计算效率高。ReLU缓解了影响sigmoid和tanh的梯度消失问题，使更深网络的训练成为可能。",
    diagram: "",
    terms: ["convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 63,
    q: "What is batch normalization in CNNs?",
    qChinese: "CNN中的批归一化是什么？",
    options: [
      "A) Normalizing the input images to zero mean",
      "B) Normalizing the activations of each layer across the mini-batch during training",
      "C) Normalizing the kernel weights after each epoch",
      "D) Normalizing the learning rate based on batch size"
    ],
    optionsChinese: [
      "A) 将输入图像归一化为零均值",
      "B) 在训练期间跨小批量归一化每层的激活值",
      "C) 在每个epoch后归一化卷积核权重",
      "D) 根据批量大小归一化学习率"
    ],
    answer: 1,
    explanation: "Batch normalization normalizes layer activations to have zero mean and unit variance across the mini-batch, then applies learnable scale and shift parameters. It stabilizes training, allows higher learning rates, acts as a regularizer, and reduces sensitivity to weight initialization. It is placed after convolution and before activation.",
    explanationChinese: "批归一化将层激活值跨小批量归一化为零均值和单位方差，然后应用可学习的缩放和偏移参数。它稳定训练，允许更高学习率，起正则化作用，并减少对权重初始化的敏感性。它放置在卷积之后、激活之前。",
    diagram: "",
    terms: ["convolution_operation","resnet"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 64,
    q: "What is a grouped convolution?",
    qChinese: "什么是分组卷积？",
    options: [
      "A) Applying convolution to grouped images in a batch",
      "B) Applying convolution only to selected spatial regions",
      "C) Grouping multiple kernel sizes together",
      "D) Dividing input channels into groups and applying separate convolutions to each group"
    ],
    optionsChinese: [
      "A) 对批中分组的图像应用卷积",
      "B) 仅对选定的空间区域应用卷积",
      "C) 将多个卷积核大小组合在一起",
      "D) 将输入通道分成组并对每组应用单独的卷积"
    ],
    answer: 3,
    explanation: "Grouped convolution divides input channels into separate groups, applying independent convolution to each group. With g groups, parameters and computation reduce by a factor of g. Originally used in AlexNet to split across two GPUs, it is now used in ResNeXt and efficient architectures to balance accuracy and efficiency.",
    explanationChinese: "分组卷积将输入通道分为独立的组，对每组应用独立卷积。有g个组时，参数和计算减少g倍。最初在AlexNet中用于跨两个GPU拆分，现在用于ResNeXt和高效架构中以平衡精度和效率。",
    diagram: "",
    terms: ["convolution_operation","resnet"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 65,
    q: "What is the purpose of dropout in CNN training?",
    qChinese: "CNN训练中dropout的目的是什么？",
    options: [
      "A) To speed up inference",
      "B) To randomly deactivate neurons during training to prevent overfitting",
      "C) To reduce the number of convolutional filters",
      "D) To increase the learning rate"
    ],
    optionsChinese: [
      "A) 加速推理",
      "B) 在训练期间随机停用神经元以防止过拟合",
      "C) 减少卷积滤波器的数量",
      "D) 增加学习率"
    ],
    answer: 1,
    explanation: "Dropout randomly sets a fraction of neuron outputs to zero during training, forcing the network to learn redundant representations. This prevents co-adaptation of neurons and acts as regularization. At inference time, all neurons are active but outputs are scaled. In CNNs, dropout is typically applied after fully connected layers.",
    explanationChinese: "Dropout在训练期间随机将部分神经元输出设为零，迫使网络学习冗余表示。这防止神经元共同适应并起正则化作用。在推理时，所有神经元都活跃但输出被缩放。在CNN中，dropout通常在全连接层之后应用。",
    diagram: "",
    terms: ["convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 66,
    q: "What is the difference between valid and same padding?",
    qChinese: "valid填充和same填充之间有什么区别？",
    options: [
      "A) Valid padding adds zeros; same padding adds ones",
      "B) Valid padding is faster; same padding is more accurate",
      "C) Valid padding uses no padding and shrinks output; same padding preserves spatial dimensions",
      "D) They produce identical outputs"
    ],
    optionsChinese: [
      "A) Valid填充添加零；same填充添加一",
      "B) Valid填充更快；same填充更准确",
      "C) Valid填充不使用填充且输出缩小；same填充保持空间维度",
      "D) 它们产生相同的输出"
    ],
    answer: 2,
    explanation: "Valid padding applies no padding, so the output is smaller than the input by (kernel_size - 1) in each dimension. Same padding adds sufficient zeros so the output matches the input spatial size (with stride 1). Same padding is more common in modern architectures to maintain feature map dimensions through layers.",
    explanationChinese: "Valid填充不应用填充，因此输出在每个维度上比输入小(卷积核大小-1)。Same填充添加足够的零使输出匹配输入空间大小（步幅为1时）。Same填充在现代架构中更常见，以在各层中维持特征图维度。",
    diagram: "",
    terms: ["convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 67,
    q: "What is channel attention in CNNs?",
    qChinese: "CNN中的通道注意力是什么？",
    options: [
      "A) Assigning equal importance to all channels",
      "B) Removing unnecessary channels from feature maps",
      "C) Learning to weight channel-wise feature responses adaptively",
      "D) Converting multi-channel features to single channel"
    ],
    optionsChinese: [
      "A) 为所有通道分配相等的重要性",
      "B) 从特征图中移除不必要的通道",
      "C) 学习自适应地加权通道特征响应",
      "D) 将多通道特征转换为单通道"
    ],
    answer: 2,
    explanation: "Channel attention mechanisms like SE (Squeeze-and-Excitation) learn to weight feature channels adaptively. They squeeze spatial dimensions via global average pooling, then use fully connected layers to compute channel-wise attention weights. This allows the network to emphasize informative channels and suppress less useful ones.",
    explanationChinese: "SE（压缩-激励）等通道注意力机制学习自适应地加权特征通道。它们通过全局平均池化压缩空间维度，然后使用全连接层计算通道注意力权重。这使网络能够强调有信息量的通道并抑制不太有用的通道。",
    diagram: "",
    terms: ["convolution_operation","resnet"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 68,
    q: "What is the output size when applying a 3x3 convolution with stride 2, padding 1, to a 64x64 input?",
    qChinese: "对64x64输入应用步幅为2、填充为1的3x3卷积时，输出大小是多少？",
    options: [
      "A) 64x64",
      "B) 33x33",
      "C) 31x31",
      "D) 32x32"
    ],
    optionsChinese: [
      "A) 64x64",
      "B) 33x33",
      "C) 31x31",
      "D) 32x32"
    ],
    answer: 3,
    explanation: "Using the formula: output = (input - kernel + 2*padding) / stride + 1 = (64 - 3 + 2*1) / 2 + 1 = 63/2 + 1 = 31.5 + 1 = 32 (floor division gives 31, plus 1 = 32). A stride-2 convolution with same-like padding effectively halves the spatial dimensions, commonly replacing pooling in modern architectures.",
    explanationChinese: "使用公式：输出=(输入-卷积核+2*填充)/步幅+1=(64-3+2*1)/2+1=63/2+1=31.5+1=32（向下取整得31，加1=32）。步幅为2的卷积配合类same填充有效地将空间维度减半，在现代架构中常替代池化。",
    diagram: "",
    terms: ["convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 69,
    q: "What is the difference between convolution and cross-correlation in deep learning?",
    qChinese: "深度学习中卷积和互相关之间有什么区别？",
    options: [
      "A) Convolution flips the kernel; cross-correlation does not",
      "B) They use different activation functions",
      "C) Convolution is faster than cross-correlation",
      "D) Cross-correlation cannot learn features"
    ],
    optionsChinese: [
      "A) 卷积翻转卷积核；互相关不翻转",
      "B) 它们使用不同的激活函数",
      "C) 卷积比互相关更快",
      "D) 互相关不能学习特征"
    ],
    answer: 0,
    explanation: "Mathematically, convolution flips the kernel 180 degrees before sliding it over the input, while cross-correlation does not flip. In practice, deep learning frameworks implement cross-correlation but call it convolution. Since kernels are learned, flipping is irrelevant because the network learns the appropriate weights regardless.",
    explanationChinese: "数学上，卷积在将卷积核滑过输入之前翻转180度，而互相关不翻转。在实践中，深度学习框架实现的是互相关但称之为卷积。由于卷积核是学习的，翻转无关紧要，因为网络无论如何都会学习适当的权重。",
    diagram: "",
    terms: ["convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 70,
    q: "What is a feature pyramid network (FPN)?",
    qChinese: "什么是特征金字塔网络（FPN）？",
    options: [
      "A) A multi-scale feature extractor that combines low-resolution semantic features with high-resolution spatial features via top-down pathways",
      "B) A network that only uses the final feature map",
      "C) A network that replaces all convolutions with fully connected layers",
      "D) A technique for training networks on pyramid-shaped images"
    ],
    optionsChinese: [
      "A) 通过自顶向下路径将低分辨率语义特征与高分辨率空间特征结合的多尺度特征提取器",
      "B) 仅使用最终特征图的网络",
      "C) 用全连接层替换所有卷积的网络",
      "D) 在金字塔形状图像上训练网络的技术"
    ],
    answer: 0,
    explanation: "Feature Pyramid Network (FPN) builds a multi-scale feature representation by combining top-down semantically rich features with bottom-up spatially detailed features through lateral connections. This enables strong features at all scales, significantly improving object detection performance for objects of varying sizes.",
    explanationChinese: "特征金字塔网络(FPN)通过横向连接将自顶向下的语义丰富特征与自底向上的空间详细特征结合，构建多尺度特征表示。这使所有尺度都具有强特征，显著提高了不同大小对象的目标检测性能。",
    diagram: "",
    terms: ["convolution_operation","object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  // ===== CNN ARCHITECTURES (Questions 71–100) =====
  {
    id: 71,
    q: "What was the significance of LeNet-5 in the history of CNNs?",
    qChinese: "LeNet-5在CNN历史上的意义是什么？",
    options: [
      "A) It was the first network to use attention mechanisms",
      "B) It introduced the transformer architecture",
      "C) It was one of the earliest successful CNN architectures, designed for handwritten digit recognition",
      "D) It was the first network to achieve human-level accuracy on ImageNet"
    ],
    optionsChinese: [
      "A) 它是第一个使用注意力机制的网络",
      "B) 它引入了transformer架构",
      "C) 它是最早成功的CNN架构之一，设计用于手写数字识别",
      "D) 它是第一个在ImageNet上达到人类水平精度的网络"
    ],
    answer: 2,
    explanation: "LeNet-5, proposed by Yann LeCun in 1998, was one of the pioneering CNN architectures designed for handwritten digit recognition (MNIST). It introduced the pattern of alternating convolutional and pooling layers followed by fully connected layers. LeNet demonstrated that CNNs could learn useful features directly from raw pixels.",
    explanationChinese: "LeNet-5由Yann LeCun在1998年提出，是为手写数字识别(MNIST)设计的开创性CNN架构之一。它引入了卷积层和池化层交替后接全连接层的模式。LeNet证明了CNN可以直接从原始像素学习有用特征。",
    diagram: "",
    terms: ["convolution_operation","image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 72,
    q: "What breakthrough did AlexNet achieve in 2012?",
    qChinese: "AlexNet在2012年取得了什么突破？",
    options: [
      "A) It solved the vanishing gradient problem completely",
      "B) It introduced recurrent neural networks",
      "C) It won the ImageNet Large Scale Visual Recognition Challenge with a large margin",
      "D) It was the first model to use batch normalization"
    ],
    optionsChinese: [
      "A) 它完全解决了梯度消失问题",
      "B) 它引入了循环神经网络",
      "C) 它以大幅优势赢得了ImageNet大规模视觉识别挑战赛",
      "D) 它是第一个使用批归一化的模型"
    ],
    answer: 2,
    explanation: "AlexNet, by Krizhevsky, Sutskever, and Hinton, won the 2012 ImageNet challenge with a top-5 error rate of 15.3%, far ahead of the runner-up at 26.2%. It popularized deep CNNs trained on GPUs, used ReLU activations, dropout, and data augmentation. This landmark result ignited the deep learning revolution in computer vision.",
    explanationChinese: "AlexNet由Krizhevsky、Sutskever和Hinton提出，以15.3%的top-5错误率赢得2012年ImageNet挑战赛，远超第二名的26.2%。它推广了在GPU上训练的深度CNN，使用ReLU激活、dropout和数据增强。这一里程碑式的结果点燃了计算机视觉中的深度学习革命。",
    diagram: "",
    terms: ["image_classification","data_augmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 73,
    q: "What is the key design principle of VGGNet?",
    qChinese: "VGGNet的关键设计原则是什么？",
    options: [
      "A) Using very large convolution kernels (11x11)",
      "B) Using very small (3x3) convolution kernels stacked deeply",
      "C) Using only 1x1 convolutions throughout",
      "D) Eliminating pooling layers entirely"
    ],
    optionsChinese: [
      "A) 使用非常大的卷积核(11x11)",
      "B) 使用非常小的(3x3)卷积核深度堆叠",
      "C) 全程仅使用1x1卷积",
      "D) 完全消除池化层"
    ],
    answer: 1,
    explanation: "VGGNet (2014) demonstrated that using stacked small 3x3 convolution filters achieves the same receptive field as larger kernels while being deeper and having fewer parameters. Two stacked 3x3 layers equal one 5x5 receptive field. VGG-16 and VGG-19 showed that depth is critical for representation learning.",
    explanationChinese: "VGGNet(2014)证明了使用堆叠的小3x3卷积滤波器可以在更深且参数更少的情况下达到与较大卷积核相同的感受野。两个堆叠的3x3层等于一个5x5感受野。VGG-16和VGG-19表明深度对表示学习至关重要。",
    diagram: "",
    terms: ["convolution_operation","image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 74,
    q: "What is the Inception module in GoogLeNet?",
    qChinese: "GoogLeNet中的Inception模块是什么？",
    options: [
      "A) A single large convolution layer",
      "B) A module that replaces all convolutions with pooling",
      "C) A recurrent module for sequence processing",
      "D) A module that applies multiple filter sizes (1x1, 3x3, 5x5) in parallel and concatenates outputs"
    ],
    optionsChinese: [
      "A) 单个大型卷积层",
      "B) 用池化替换所有卷积的模块",
      "C) 用于序列处理的循环模块",
      "D) 并行应用多个滤波器大小(1x1、3x3、5x5)并连接输出的模块"
    ],
    answer: 3,
    explanation: "The Inception module applies multiple filter sizes (1x1, 3x3, 5x5) and max pooling in parallel, then concatenates their outputs. This captures multi-scale features simultaneously. 1x1 convolutions are used as bottlenecks to reduce computational cost. GoogLeNet (Inception v1) won the 2014 ImageNet challenge.",
    explanationChinese: "Inception模块并行应用多个滤波器大小(1x1、3x3、5x5)和最大池化，然后连接它们的输出。这同时捕获多尺度特征。1x1卷积用作瓶颈以降低计算成本。GoogLeNet(Inception v1)赢得了2014年ImageNet挑战赛。",
    diagram: "",
    terms: ["convolution_operation","image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 75,
    q: "What problem does ResNet's skip connection solve?",
    qChinese: "ResNet的跳跃连接解决了什么问题？",
    options: [
      "A) Overfitting in shallow networks",
      "B) Insufficient data augmentation",
      "C) Slow inference speed",
      "D) The degradation problem where deeper networks have higher training error"
    ],
    optionsChinese: [
      "A) 浅层网络中的过拟合",
      "B) 数据增强不足",
      "C) 推理速度慢",
      "D) 更深网络具有更高训练误差的退化问题"
    ],
    answer: 3,
    explanation: "ResNet introduced residual (skip) connections that allow the input to bypass one or more layers by adding it directly to the output. This addresses the degradation problem where very deep networks paradoxically perform worse than shallower ones. Skip connections enable gradient flow, allowing training of networks with 100+ layers.",
    explanationChinese: "ResNet引入了残差（跳跃）连接，允许输入通过直接添加到输出来绕过一个或多个层。这解决了退化问题，即非常深的网络矛盾地比较浅的网络表现更差。跳跃连接实现梯度流动，允许训练100+层的网络。",
    diagram: "",
    terms: ["resnet","image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 76,
    q: "What is the residual function learned in a ResNet block?",
    qChinese: "ResNet块中学习的残差函数是什么？",
    options: [
      "A) The full mapping from input to output",
      "B) The pooling operation applied to the input",
      "C) The gradient of the loss function",
      "D) The difference between the desired output and the input: F(x) = H(x) - x"
    ],
    optionsChinese: [
      "A) 从输入到输出的完整映射",
      "B) 对输入应用的池化操作",
      "C) 损失函数的梯度",
      "D) 期望输出与输入之间的差异：F(x) = H(x) - x"
    ],
    answer: 3,
    explanation: "In ResNet, instead of learning the full mapping H(x), the layers learn the residual F(x) = H(x) - x. The output is then x + F(x). If the identity mapping is optimal, it is easier for the network to push F(x) toward zero than to learn an identity mapping from scratch. This insight enables very deep trainable networks.",
    explanationChinese: "在ResNet中，层不是学习完整映射H(x)，而是学习残差F(x)=H(x)-x。输出为x+F(x)。如果恒等映射是最优的，网络将F(x)推向零比从头学习恒等映射更容易。这一洞察使非常深的可训练网络成为可能。",
    diagram: "",
    terms: ["resnet"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 77,
    q: "How many layers does ResNet-50 have?",
    qChinese: "ResNet-50有多少层？",
    options: [
      "A) 50 convolutional layers only",
      "B) 50 residual blocks",
      "C) 50 total weighted layers (convolutional and fully connected)",
      "D) 50 pooling layers"
    ],
    optionsChinese: [
      "A) 仅50个卷积层",
      "B) 50个残差块",
      "C) 50个总加权层（卷积和全连接）",
      "D) 50个池化层"
    ],
    answer: 2,
    explanation: "ResNet-50 has 50 weighted layers in total, consisting of 49 convolutional layers and 1 fully connected layer. It uses bottleneck residual blocks with 1x1, 3x3, and 1x1 convolutions. The naming convention counts all layers with learnable weights, excluding pooling and activation layers.",
    explanationChinese: "ResNet-50总共有50个加权层，由49个卷积层和1个全连接层组成。它使用具有1x1、3x3和1x1卷积的瓶颈残差块。命名约定计算所有具有可学习权重的层，不包括池化和激活层。",
    diagram: "",
    terms: ["resnet","image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 78,
    q: "What is the bottleneck design in ResNet?",
    qChinese: "ResNet中的瓶颈设计是什么？",
    options: [
      "A) Using only 1x1 convolutions",
      "B) Removing all skip connections",
      "C) A three-layer block with 1x1, 3x3, 1x1 convolutions that reduces then restores channel dimensions",
      "D) Using max pooling between every layer"
    ],
    optionsChinese: [
      "A) 仅使用1x1卷积",
      "B) 移除所有跳跃连接",
      "C) 使用1x1、3x3、1x1卷积的三层块，先减少后恢复通道维度",
      "D) 在每层之间使用最大池化"
    ],
    answer: 2,
    explanation: "The bottleneck block in ResNet uses three convolutions: a 1x1 to reduce channels, a 3x3 for spatial filtering on the reduced channels, and a 1x1 to restore channels. This reduces computation while maintaining representation power. ResNet-50/101/152 use bottleneck blocks, while ResNet-18/34 use basic two-layer blocks.",
    explanationChinese: "ResNet中的瓶颈块使用三个卷积：1x1减少通道，3x3在减少的通道上进行空间滤波，1x1恢复通道。这在保持表示能力的同时减少计算。ResNet-50/101/152使用瓶颈块，而ResNet-18/34使用基本的两层块。",
    diagram: "",
    terms: ["resnet","convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 79,
    q: "What is DenseNet's key innovation?",
    qChinese: "DenseNet的关键创新是什么？",
    options: [
      "A) Connecting each layer to every other layer in a feed-forward fashion via concatenation",
      "B) Using only skip connections from the input",
      "C) Removing all batch normalization layers",
      "D) Using only depthwise convolutions"
    ],
    optionsChinese: [
      "A) 通过连接将每层与前馈方式中的每一层相连",
      "B) 仅使用来自输入的跳跃连接",
      "C) 移除所有批归一化层",
      "D) 仅使用深度卷积"
    ],
    answer: 0,
    explanation: "DenseNet connects each layer to every preceding layer through concatenation, so layer L receives feature maps from all L-1 previous layers. This encourages feature reuse, strengthens gradient flow, and reduces parameter count. Unlike ResNet which adds features, DenseNet concatenates them, preserving all prior representations.",
    explanationChinese: "DenseNet通过连接将每层与之前的每一层相连，因此第L层接收来自所有L-1个前层的特征图。这鼓励特征重用，加强梯度流动，并减少参数数量。与ResNet添加特征不同，DenseNet连接它们，保留所有先前的表示。",
    diagram: "",
    terms: ["resnet","image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 80,
    q: "What is MobileNet designed for?",
    qChinese: "MobileNet是为什么设计的？",
    options: [
      "A) Efficient inference on mobile and embedded devices",
      "B) Achieving maximum accuracy regardless of computational cost",
      "C) Processing only grayscale images",
      "D) Training without GPUs"
    ],
    optionsChinese: [
      "A) 在移动和嵌入式设备上高效推理",
      "B) 不考虑计算成本实现最大精度",
      "C) 仅处理灰度图像",
      "D) 不使用GPU训练"
    ],
    answer: 0,
    explanation: "MobileNet is designed for efficient inference on resource-constrained devices like phones and edge devices. It uses depthwise separable convolutions to drastically reduce computation and model size while maintaining reasonable accuracy. MobileNetV2 introduced inverted residuals with linear bottlenecks for further improvements.",
    explanationChinese: "MobileNet专为在手机和边缘设备等资源受限设备上高效推理而设计。它使用深度可分离卷积大幅减少计算和模型大小，同时保持合理的精度。MobileNetV2引入了带线性瓶颈的反向残差以进一步改进。",
    diagram: "",
    terms: ["convolution_operation","image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 81,
    q: "What architecture did EfficientNet use to scale CNNs?",
    qChinese: "EfficientNet使用什么架构来扩展CNN？",
    options: [
      "A) Only increasing network depth",
      "B) Only increasing network width",
      "C) Only increasing input resolution",
      "D) Compound scaling of depth, width, and resolution simultaneously"
    ],
    optionsChinese: [
      "A) 仅增加网络深度",
      "B) 仅增加网络宽度",
      "C) 仅增加输入分辨率",
      "D) 同时复合缩放深度、宽度和分辨率"
    ],
    answer: 3,
    explanation: "EfficientNet introduced compound scaling, which uniformly scales network depth, width, and input resolution using a fixed ratio. This balanced approach achieves better accuracy-efficiency tradeoffs than scaling any single dimension alone. EfficientNet-B0 through B7 progressively scale up, with B7 achieving state-of-the-art ImageNet accuracy.",
    explanationChinese: "EfficientNet引入了复合缩放，使用固定比例均匀缩放网络深度、宽度和输入分辨率。这种平衡的方法比仅缩放任何单一维度实现更好的精度-效率权衡。EfficientNet-B0到B7逐步扩展，B7实现了最先进的ImageNet精度。",
    diagram: "",
    terms: ["image_classification","resnet"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 82,
    q: "What is the vanishing gradient problem in deep networks?",
    qChinese: "深层网络中的梯度消失问题是什么？",
    options: [
      "A) Gradients become too large and cause overflow",
      "B) The loss function has no gradient",
      "C) Gradients are computed incorrectly",
      "D) Gradients become exponentially small in early layers, preventing effective weight updates"
    ],
    optionsChinese: [
      "A) 梯度变得太大导致溢出",
      "B) 损失函数没有梯度",
      "C) 梯度计算不正确",
      "D) 梯度在早期层中变得指数级小，阻止有效的权重更新"
    ],
    answer: 3,
    explanation: "The vanishing gradient problem occurs when gradients shrink exponentially as they backpropagate through many layers, especially with saturating activations like sigmoid. Early layers receive near-zero gradients and learn very slowly. Solutions include ReLU activations, skip connections (ResNet), and batch normalization.",
    explanationChinese: "梯度消失问题发生在梯度通过多层反向传播时指数级缩小时，特别是使用sigmoid等饱和激活函数时。早期层接收接近零的梯度并学习非常缓慢。解决方案包括ReLU激活、跳跃连接(ResNet)和批归一化。",
    diagram: "",
    terms: ["resnet","convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 83,
    q: "How many parameters approximately does VGG-16 have?",
    qChinese: "VGG-16大约有多少参数？",
    options: [
      "A) 5 million",
      "B) 138 million",
      "C) 25 million",
      "D) 500 million"
    ],
    optionsChinese: [
      "A) 500万",
      "B) 1.38亿",
      "C) 2500万",
      "D) 5亿"
    ],
    answer: 1,
    explanation: "VGG-16 has approximately 138 million parameters, with the majority (about 124 million) in the three fully connected layers at the end. The convolutional layers contain relatively few parameters due to weight sharing. This large parameter count made VGG-16 memory-intensive and motivated more efficient architectures like GoogLeNet.",
    explanationChinese: "VGG-16大约有1.38亿个参数，其中大部分（约1.24亿）在末尾的三个全连接层中。卷积层由于权重共享包含相对较少的参数。这种大量参数使VGG-16占用内存大，并推动了GoogLeNet等更高效架构的发展。",
    diagram: "",
    terms: ["image_classification","convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 84,
    q: "What is ResNeXt's improvement over ResNet?",
    qChinese: "ResNeXt相对于ResNet的改进是什么？",
    options: [
      "A) It uses larger kernels",
      "B) It uses only fully connected layers",
      "C) It removes all skip connections",
      "D) It introduces cardinality via grouped convolutions within residual blocks"
    ],
    optionsChinese: [
      "A) 使用更大的卷积核",
      "B) 仅使用全连接层",
      "C) 移除所有跳跃连接",
      "D) 通过残差块内的分组卷积引入基数"
    ],
    answer: 3,
    explanation: "ResNeXt extends ResNet by introducing cardinality as a new dimension alongside depth and width. It uses grouped convolutions within residual blocks, where multiple parallel pathways process the input independently before being combined. Increasing cardinality is more effective than increasing depth or width for improving accuracy.",
    explanationChinese: "ResNeXt通过引入基数作为深度和宽度之外的新维度来扩展ResNet。它在残差块内使用分组卷积，多个并行路径独立处理输入然后组合。增加基数比增加深度或宽度对提高精度更有效。",
    diagram: "",
    terms: ["resnet","convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 85,
    q: "What is Squeeze-and-Excitation (SE) Network?",
    qChinese: "什么是压缩-激励(SE)网络？",
    options: [
      "A) A network that compresses images before processing",
      "B) A network that adds channel attention by learning to recalibrate channel-wise feature responses",
      "C) A network that squeezes spatial dimensions to 1x1",
      "D) A network designed for video compression"
    ],
    optionsChinese: [
      "A) 在处理前压缩图像的网络",
      "B) 通过学习重新校准通道特征响应来添加通道注意力的网络",
      "C) 将空间维度压缩到1x1的网络",
      "D) 为视频压缩设计的网络"
    ],
    answer: 1,
    explanation: "SE-Net adds channel attention to any CNN by squeezing spatial dimensions via global average pooling, then using two FC layers to learn channel importance weights (excitation). These weights recalibrate feature maps channel-wise. SE blocks can be inserted into ResNet, improving accuracy with minimal computational overhead.",
    explanationChinese: "SE-Net通过全局平均池化压缩空间维度，然后使用两个全连接层学习通道重要性权重（激励），为任何CNN添加通道注意力。这些权重按通道重新校准特征图。SE块可以插入ResNet，以最小计算开销提高精度。",
    diagram: "",
    terms: ["resnet","convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 86,
    q: "What is the NAS (Neural Architecture Search) approach?",
    qChinese: "NAS（神经架构搜索）方法是什么？",
    options: [
      "A) Manually designing network architectures",
      "B) Using automated algorithms to discover optimal network architectures",
      "C) Searching for the best learning rate",
      "D) Finding the optimal batch size"
    ],
    optionsChinese: [
      "A) 手动设计网络架构",
      "B) 使用自动化算法发现最优网络架构",
      "C) 搜索最佳学习率",
      "D) 寻找最优批量大小"
    ],
    answer: 1,
    explanation: "Neural Architecture Search (NAS) uses automated methods like reinforcement learning or evolutionary algorithms to discover optimal CNN architectures. NASNet, discovered through NAS, achieved competitive ImageNet accuracy. While computationally expensive, NAS has produced efficient architectures like EfficientNet and MobileNetV3.",
    explanationChinese: "神经架构搜索(NAS)使用强化学习或进化算法等自动化方法来发现最优CNN架构。通过NAS发现的NASNet在ImageNet上达到了有竞争力的精度。虽然计算成本高，NAS已产生了EfficientNet和MobileNetV3等高效架构。",
    diagram: "",
    terms: ["image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 87,
    q: "What is the key idea behind Inception v3?",
    qChinese: "Inception v3背后的关键想法是什么？",
    options: [
      "A) Using only 1x1 convolutions",
      "B) Using only depthwise convolutions",
      "C) Replacing all convolutions with fully connected layers",
      "D) Factorizing larger convolutions into smaller asymmetric ones for efficiency"
    ],
    optionsChinese: [
      "A) 仅使用1x1卷积",
      "B) 仅使用深度卷积",
      "C) 用全连接层替换所有卷积",
      "D) 将较大卷积分解为更小的不对称卷积以提高效率"
    ],
    answer: 3,
    explanation: "Inception v3 factorizes larger convolutions into smaller asymmetric ones (e.g., replacing 5x5 with two 3x3 convolutions, or factorizing nxn into 1xn followed by nx1). This reduces parameters and computation while maintaining representational power. It also introduced label smoothing and batch normalization in auxiliary classifiers.",
    explanationChinese: "Inception v3将较大卷积分解为更小的不对称卷积（如用两个3x3替换5x5，或将nxn分解为1xn后接nx1）。这在保持表示能力的同时减少参数和计算。它还引入了标签平滑和辅助分类器中的批归一化。",
    diagram: "",
    terms: ["convolution_operation","image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 88,
    q: "What is the difference between ResNet and ResNet-v2?",
    qChinese: "ResNet和ResNet-v2之间有什么区别？",
    options: [
      "A) ResNet-v2 removes skip connections",
      "B) ResNet-v2 eliminates batch normalization",
      "C) ResNet-v2 uses larger kernels",
      "D) ResNet-v2 uses pre-activation (BN and ReLU before convolution) instead of post-activation"
    ],
    optionsChinese: [
      "A) ResNet-v2移除跳跃连接",
      "B) ResNet-v2消除批归一化",
      "C) ResNet-v2使用更大的卷积核",
      "D) ResNet-v2使用预激活（BN和ReLU在卷积之前）而非后激活"
    ],
    answer: 3,
    explanation: "ResNet-v2 (pre-activation ResNet) moves batch normalization and ReLU before the convolution layers instead of after. This creates a clean information path through the identity shortcut, improving gradient flow and training of very deep networks. Experiments showed this ordering achieves better accuracy, especially for deeper variants.",
    explanationChinese: "ResNet-v2（预激活ResNet）将批归一化和ReLU移到卷积层之前而非之后。这通过恒等快捷方式创建了清晰的信息路径，改善了梯度流动和非常深网络的训练。实验表明这种顺序实现更好的精度，特别是对更深的变体。",
    diagram: "",
    terms: ["resnet"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 89,
    q: "What is ShuffleNet's key contribution?",
    qChinese: "ShuffleNet的关键贡献是什么？",
    options: [
      "A) Introducing attention mechanisms",
      "B) Channel shuffle operation to enable cross-group information flow in grouped convolutions",
      "C) Using only standard convolutions",
      "D) Eliminating batch normalization"
    ],
    optionsChinese: [
      "A) 引入注意力机制",
      "B) 通道洗牌操作以在分组卷积中实现跨组信息流",
      "C) 仅使用标准卷积",
      "D) 消除批归一化"
    ],
    answer: 1,
    explanation: "ShuffleNet introduces channel shuffle after grouped convolutions to enable information flow between different channel groups. Without shuffling, grouped convolutions keep channels isolated. The shuffle operation rearranges channels so subsequent groups receive mixed information, improving representational power with minimal computational overhead.",
    explanationChinese: "ShuffleNet在分组卷积后引入通道洗牌，以实现不同通道组之间的信息流。没有洗牌，分组卷积使通道保持隔离。洗牌操作重新排列通道，使后续组接收混合信息，以最小计算开销提高表示能力。",
    diagram: "",
    terms: ["convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 90,
    q: "What problem does the dying ReLU issue refer to?",
    qChinese: "死亡ReLU问题指的是什么问题？",
    options: [
      "A) Neurons permanently output zero because they receive only negative inputs",
      "B) ReLU outputs become too large",
      "C) ReLU makes training too fast",
      "D) ReLU causes memory overflow"
    ],
    optionsChinese: [
      "A) 神经元因仅接收负输入而永久输出零",
      "B) ReLU输出变得太大",
      "C) ReLU使训练太快",
      "D) ReLU导致内存溢出"
    ],
    answer: 0,
    explanation: "The dying ReLU problem occurs when neurons get stuck outputting zero for all inputs because their weights produce only negative pre-activation values. Once dead, they receive zero gradients and cannot recover. Leaky ReLU, PReLU, and ELU address this by allowing small negative outputs, maintaining gradient flow.",
    explanationChinese: "死亡ReLU问题发生在神经元因权重仅产生负的预激活值而对所有输入永久输出零时。一旦死亡，它们接收零梯度且无法恢复。Leaky ReLU、PReLU和ELU通过允许小的负输出来解决此问题，保持梯度流动。",
    diagram: "",
    terms: ["convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 91,
    q: "What is knowledge distillation in the context of CNNs?",
    qChinese: "在CNN的上下文中，什么是知识蒸馏？",
    options: [
      "A) Extracting features from images",
      "B) Combining multiple datasets",
      "C) Removing unnecessary layers from a trained network",
      "D) Training a smaller student network to mimic a larger teacher network's outputs"
    ],
    optionsChinese: [
      "A) 从图像中提取特征",
      "B) 组合多个数据集",
      "C) 从训练好的网络中移除不必要的层",
      "D) 训练较小的学生网络模仿较大教师网络的输出"
    ],
    answer: 3,
    explanation: "Knowledge distillation trains a compact student network to reproduce the soft probability outputs (dark knowledge) of a larger, pre-trained teacher network. The teacher's softened outputs contain richer information about inter-class similarities than hard labels. This produces smaller models with accuracy closer to the teacher.",
    explanationChinese: "知识蒸馏训练紧凑的学生网络来复制较大预训练教师网络的软概率输出（暗知识）。教师的软化输出包含比硬标签更丰富的类间相似性信息。这产生了精度更接近教师的更小模型。",
    diagram: "",
    terms: ["image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 92,
    q: "What is the Xception architecture?",
    qChinese: "什么是Xception架构？",
    options: [
      "A) A version of AlexNet with extra layers",
      "B) A network without any convolutions",
      "C) An extreme version of Inception that replaces Inception modules with depthwise separable convolutions",
      "D) A recurrent network for image captioning"
    ],
    optionsChinese: [
      "A) 具有额外层的AlexNet版本",
      "B) 没有任何卷积的网络",
      "C) Inception的极端版本，用深度可分离卷积替换Inception模块",
      "D) 用于图像描述的循环网络"
    ],
    answer: 2,
    explanation: "Xception (Extreme Inception) takes the Inception hypothesis to its extreme by completely replacing standard Inception modules with depthwise separable convolutions. It separates channel-wise and spatial filtering entirely. Xception achieves competitive accuracy with fewer parameters than Inception v3, demonstrating the effectiveness of depthwise separable operations.",
    explanationChinese: "Xception（极端Inception）将Inception假设推向极端，完全用深度可分离卷积替换标准Inception模块。它完全分离通道和空间滤波。Xception以比Inception v3更少的参数实现了有竞争力的精度，证明了深度可分离操作的有效性。",
    diagram: "",
    terms: ["convolution_operation","image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 93,
    q: "What is the purpose of auxiliary classifiers in GoogLeNet?",
    qChinese: "GoogLeNet中辅助分类器的目的是什么？",
    options: [
      "A) To improve inference speed",
      "B) To inject additional gradient signals at intermediate layers during training",
      "C) To increase the number of output classes",
      "D) To replace the main classifier"
    ],
    optionsChinese: [
      "A) 提高推理速度",
      "B) 在训练期间向中间层注入额外的梯度信号",
      "C) 增加输出类别数量",
      "D) 替换主分类器"
    ],
    answer: 1,
    explanation: "GoogLeNet placed auxiliary classifiers at intermediate layers to combat the vanishing gradient problem by injecting additional gradient signals during backpropagation. They provide supplementary supervision to earlier layers. During inference, only the main classifier is used. Later research showed their regularization effect matters more than gradient injection.",
    explanationChinese: "GoogLeNet在中间层放置辅助分类器，通过在反向传播期间注入额外梯度信号来对抗梯度消失问题。它们为较早的层提供辅助监督。推理时只使用主分类器。后来的研究表明它们的正则化效果比梯度注入更重要。",
    diagram: "",
    terms: ["image_classification","convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 94,
    q: "What is group normalization and when is it preferred over batch normalization?",
    qChinese: "什么是组归一化，何时它优于批归一化？",
    options: [
      "A) Dividing channels into groups and normalizing within each; preferred for small batch sizes",
      "B) Normalizing across all dimensions at once; preferred for large batch sizes",
      "C) Normalizing only spatial dimensions; preferred for 1D data",
      "D) Normalizing the learning rate; preferred when using SGD"
    ],
    optionsChinese: [
      "A) 将通道分成组并在每组内归一化；优选小批量",
      "B) 同时跨所有维度归一化；优选大批量",
      "C) 仅归一化空间维度；优选一维数据",
      "D) 归一化学习率；使用SGD时优选"
    ],
    answer: 0,
    explanation: "Group normalization divides channels into groups and computes normalization statistics within each group independently of batch size. Unlike batch normalization, which requires large batches for stable statistics, group normalization works well with any batch size. It is preferred in detection and segmentation tasks where memory limits batch size.",
    explanationChinese: "组归一化将通道分成组，在每组内计算归一化统计量，与批量大小无关。与需要大批量以获得稳定统计量的批归一化不同，组归一化在任何批量大小下都能良好工作。它在内存限制批量大小的检测和分割任务中更受青睐。",
    diagram: "",
    terms: ["convolution_operation","object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 95,
    q: "What is the role of the softmax function in the final layer of a classification CNN?",
    qChinese: "分类CNN最后一层中softmax函数的作用是什么？",
    options: [
      "A) To detect edges in the feature maps",
      "B) To apply convolution to the final features",
      "C) To convert raw logits into a probability distribution over classes",
      "D) To reduce the number of parameters"
    ],
    optionsChinese: [
      "A) 检测特征图中的边缘",
      "B) 对最终特征应用卷积",
      "C) 将原始logits转换为类别上的概率分布",
      "D) 减少参数数量"
    ],
    answer: 2,
    explanation: "Softmax converts raw output scores (logits) into a probability distribution where all values are positive and sum to 1. For each class i, softmax computes exp(zi) / sum(exp(zj)). The class with the highest probability is the predicted class. It is used with cross-entropy loss during training.",
    explanationChinese: "Softmax将原始输出分数(logits)转换为概率分布，其中所有值为正且总和为1。对于每个类别i，softmax计算exp(zi)/sum(exp(zj))。概率最高的类别是预测类别。它在训练期间与交叉熵损失一起使用。",
    diagram: "",
    terms: ["image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 96,
    q: "What makes RegNet architectures notable?",
    qChinese: "什么使RegNet架构值得注意？",
    options: [
      "A) They are the deepest networks ever trained",
      "B) They use a design space approach to find simple, regular network structures",
      "C) They eliminate all normalization layers",
      "D) They use only recurrent layers"
    ],
    optionsChinese: [
      "A) 它们是有史以来训练的最深网络",
      "B) 使用设计空间方法找到简单、规则的网络结构",
      "C) 消除所有归一化层",
      "D) 仅使用循环层"
    ],
    answer: 1,
    explanation: "RegNet uses a design space methodology to discover simple, regular network structures parameterized by a few values (depth, initial width, slope, quantization). Unlike NAS which searches for specific architectures, RegNet identifies general design principles. The resulting networks are simple, fast, and achieve strong accuracy across scales.",
    explanationChinese: "RegNet使用设计空间方法论发现由几个值（深度、初始宽度、斜率、量化）参数化的简单、规则的网络结构。与搜索特定架构的NAS不同，RegNet识别通用设计原则。结果网络简单、快速，且在各种规模下实现强精度。",
    diagram: "",
    terms: ["image_classification","convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 97,
    q: "What is weight initialization and why is it important for CNNs?",
    qChinese: "什么是权重初始化，为什么它对CNN很重要？",
    options: [
      "A) Setting all weights to zero for simplicity",
      "B) Loading pretrained weights from ImageNet",
      "C) Carefully setting initial weights to maintain variance of activations and gradients through layers",
      "D) Randomly selecting which layers to train"
    ],
    optionsChinese: [
      "A) 为简单起见将所有权重设为零",
      "B) 从ImageNet加载预训练权重",
      "C) 仔细设置初始权重以在各层间维持激活和梯度的方差",
      "D) 随机选择训练哪些层"
    ],
    answer: 2,
    explanation: "Proper weight initialization (e.g., He or Xavier initialization) sets initial weights to maintain the variance of activations and gradients across layers. Poor initialization causes vanishing or exploding gradients. He initialization, designed for ReLU networks, samples from N(0, 2/fan_in), ensuring stable signal propagation in deep CNNs.",
    explanationChinese: "正确的权重初始化（如He或Xavier初始化）设置初始权重以在各层间维持激活和梯度的方差。不良初始化导致梯度消失或爆炸。为ReLU网络设计的He初始化从N(0, 2/fan_in)采样，确保深层CNN中稳定的信号传播。",
    diagram: "",
    terms: ["convolution_operation","resnet"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 98,
    q: "What is the purpose of learning rate warmup in CNN training?",
    qChinese: "CNN训练中学习率预热的目的是什么？",
    options: [
      "A) To increase the final accuracy",
      "B) To gradually increase the learning rate at the start to stabilize early training",
      "C) To prevent the GPU from overheating",
      "D) To reduce the total training time"
    ],
    optionsChinese: [
      "A) 提高最终精度",
      "B) 在开始时逐渐增加学习率以稳定早期训练",
      "C) 防止GPU过热",
      "D) 减少总训练时间"
    ],
    answer: 1,
    explanation: "Learning rate warmup starts training with a very small learning rate and gradually increases it over several epochs. This prevents large, unstable gradient updates during early training when batch normalization statistics and network weights are not yet well-calibrated. It is especially important when using large batch sizes.",
    explanationChinese: "学习率预热从非常小的学习率开始训练，并在几个epoch内逐渐增加。这防止了早期训练中当批归一化统计量和网络权重尚未良好校准时的大的不稳定梯度更新。当使用大批量时这尤其重要。",
    diagram: "",
    terms: ["image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 99,
    q: "What is the ConvNeXt architecture?",
    qChinese: "什么是ConvNeXt架构？",
    options: [
      "A) A modernized pure CNN that incorporates design choices from Vision Transformers",
      "B) A purely transformer-based architecture",
      "C) A lightweight architecture for mobile devices only",
      "D) A GAN-based image generation model"
    ],
    optionsChinese: [
      "A) 融入Vision Transformer设计选择的现代化纯CNN",
      "B) 纯基于transformer的架构",
      "C) 仅用于移动设备的轻量级架构",
      "D) 基于GAN的图像生成模型"
    ],
    answer: 0,
    explanation: "ConvNeXt modernizes the standard ResNet by incorporating design strategies from Vision Transformers: larger kernel sizes (7x7), fewer activation functions, LayerNorm instead of BatchNorm, and inverted bottleneck blocks. Despite being a pure CNN, ConvNeXt matches or exceeds ViT performance, showing CNNs remain competitive with proper design.",
    explanationChinese: "ConvNeXt通过融入Vision Transformer的设计策略来现代化标准ResNet：更大的卷积核(7x7)、更少的激活函数、LayerNorm替代BatchNorm和反向瓶颈块。尽管是纯CNN，ConvNeXt匹配或超越ViT性能，表明适当设计的CNN仍具竞争力。",
    diagram: "",
    terms: ["resnet","vision_transformer","image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 100,
    q: "What is model pruning in CNN optimization?",
    qChinese: "CNN优化中的模型剪枝是什么？",
    options: [
      "A) Adding more layers to the network",
      "B) Removing redundant weights or filters to reduce model size and computation",
      "C) Training the model for more epochs",
      "D) Increasing the learning rate"
    ],
    optionsChinese: [
      "A) 向网络添加更多层",
      "B) 移除冗余权重或滤波器以减小模型大小和计算量",
      "C) 训练更多epoch",
      "D) 增加学习率"
    ],
    answer: 1,
    explanation: "Model pruning removes redundant or less important weights, neurons, or entire filters from a trained CNN. Structured pruning removes whole filters, maintaining regular tensor shapes for hardware efficiency. Unstructured pruning zeros out individual weights. Pruning can reduce model size by 50-90% with minimal accuracy loss.",
    explanationChinese: "模型剪枝从训练好的CNN中移除冗余或不太重要的权重、神经元或整个滤波器。结构化剪枝移除整个滤波器，保持规则的张量形状以提高硬件效率。非结构化剪枝将单个权重置零。剪枝可以在最小精度损失的情况下将模型大小减少50-90%。",
    diagram: "",
    terms: ["image_classification","convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  // ===== IMAGE CLASSIFICATION (Questions 101–125) =====
  {
    id: 101,
    q: "What is image classification?",
    qChinese: "什么是图像分类？",
    options: [
      "A) Detecting the locations of objects in an image",
      "B) Assigning a single label to an entire image from a predefined set of categories",
      "C) Segmenting an image into regions",
      "D) Generating new images from text descriptions"
    ],
    optionsChinese: [
      "A) 检测图像中对象的位置",
      "B) 从预定义的类别集中为整个图像分配单个标签",
      "C) 将图像分割为区域",
      "D) 从文本描述生成新图像"
    ],
    answer: 1,
    explanation: "Image classification assigns a single categorical label to an entire image from a predefined set of classes. The model outputs a probability distribution over all classes and selects the most probable one. It is the foundational task in computer vision, with benchmarks like ImageNet driving major architectural innovations.",
    explanationChinese: "图像分类从预定义的类别集中为整个图像分配单个分类标签。模型输出所有类别上的概率分布并选择最可能的类别。它是计算机视觉的基础任务，ImageNet等基准推动了主要的架构创新。",
    diagram: "",
    terms: ["image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 102,
    q: "What is top-5 accuracy in image classification?",
    qChinese: "图像分类中的top-5准确率是什么？",
    options: [
      "A) The percentage of images where the correct label is among the top 5 predictions",
      "B) Accuracy of the model on only 5 images",
      "C) The accuracy after training for 5 epochs",
      "D) The accuracy using only 5 classes"
    ],
    optionsChinese: [
      "A) 正确标签在前5个预测中的图像百分比",
      "B) 模型仅在5张图像上的准确率",
      "C) 训练5个epoch后的准确率",
      "D) 仅使用5个类别的准确率"
    ],
    answer: 0,
    explanation: "Top-5 accuracy measures the percentage of test images for which the correct class appears among the model's top 5 highest probability predictions. It is a more lenient metric than top-1 accuracy. The ImageNet challenge used top-5 error rate as its primary metric because some images contain ambiguous or similar classes.",
    explanationChinese: "Top-5准确率衡量正确类别出现在模型前5个最高概率预测中的测试图像百分比。它是比top-1准确率更宽松的指标。ImageNet挑战赛使用top-5错误率作为主要指标，因为某些图像包含模糊或相似的类别。",
    diagram: "",
    terms: ["image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 103,
    q: "What is transfer learning in computer vision?",
    qChinese: "计算机视觉中的迁移学习是什么？",
    options: [
      "A) Training a model from scratch on every new dataset",
      "B) Transferring images between different storage devices",
      "C) Using a model pretrained on a large dataset and fine-tuning it on a smaller target dataset",
      "D) Converting models from one framework to another"
    ],
    optionsChinese: [
      "A) 在每个新数据集上从头训练模型",
      "B) 在不同存储设备之间传输图像",
      "C) 使用在大数据集上预训练的模型并在较小的目标数据集上微调",
      "D) 将模型从一个框架转换到另一个框架"
    ],
    answer: 2,
    explanation: "Transfer learning uses a model pretrained on a large dataset (typically ImageNet) and adapts it to a new task. The pretrained layers capture general visual features like edges and textures. Fine-tuning adjusts these features for the specific target domain. This dramatically reduces training time and data requirements.",
    explanationChinese: "迁移学习使用在大数据集（通常是ImageNet）上预训练的模型并将其适应新任务。预训练层捕获边缘和纹理等通用视觉特征。微调调整这些特征以适应特定目标域。这大幅减少了训练时间和数据需求。",
    diagram: "",
    terms: ["image_classification","resnet"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 104,
    q: "What is fine-tuning in transfer learning?",
    qChinese: "迁移学习中的微调是什么？",
    options: [
      "A) Freezing all layers and only training the last layer",
      "B) Removing layers from the pretrained model",
      "C) Retraining the model from random weights",
      "D) Continuing training of a pretrained model on new data, typically with a lower learning rate"
    ],
    optionsChinese: [
      "A) 冻结所有层并仅训练最后一层",
      "B) 从预训练模型中移除层",
      "C) 从随机权重重新训练模型",
      "D) 在新数据上继续训练预训练模型，通常使用较低的学习率"
    ],
    answer: 3,
    explanation: "Fine-tuning continues training a pretrained model on new data using a small learning rate to avoid destroying learned features. Typically, earlier layers (capturing general features) are frozen initially, and later layers are updated. Gradually unfreezing more layers can improve performance. This is more effective than training from scratch on small datasets.",
    explanationChinese: "微调使用小学习率在新数据上继续训练预训练模型，以避免破坏已学习的特征。通常，早期层（捕获通用特征）最初被冻结，后期层被更新。逐渐解冻更多层可以提高性能。这比在小数据集上从头训练更有效。",
    diagram: "",
    terms: ["image_classification","resnet"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 105,
    q: "What is the ImageNet dataset?",
    qChinese: "什么是ImageNet数据集？",
    options: [
      "A) A dataset of 100 grayscale images",
      "B) A dataset specifically for medical imaging",
      "C) A large-scale dataset with over 14 million labeled images across thousands of categories",
      "D) A synthetic dataset generated by GANs"
    ],
    optionsChinese: [
      "A) 包含100张灰度图像的数据集",
      "B) 专门用于医学成像的数据集",
      "C) 包含超过1400万张标记图像、涵盖数千个类别的大规模数据集",
      "D) 由GAN生成的合成数据集"
    ],
    answer: 2,
    explanation: "ImageNet is a large-scale image database with over 14 million labeled images organized by the WordNet hierarchy. The ILSVRC subset used for the annual challenge contains 1.2 million training images across 1,000 classes. ImageNet has been the primary benchmark driving CNN architecture innovation since 2012.",
    explanationChinese: "ImageNet是一个大规模图像数据库，包含超过1400万张按WordNet层级组织的标记图像。用于年度挑战的ILSVRC子集包含120万张跨1000个类别的训练图像。自2012年以来，ImageNet一直是推动CNN架构创新的主要基准。",
    diagram: "",
    terms: ["image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 106,
    q: "What is the difference between multi-class and multi-label classification?",
    qChinese: "多类分类和多标签分类之间有什么区别？",
    options: [
      "A) They are the same thing",
      "B) Multi-class uses sigmoid; multi-label uses softmax",
      "C) Multi-label uses fewer classes than multi-class",
      "D) Multi-class assigns one label per image; multi-label assigns multiple labels per image"
    ],
    optionsChinese: [
      "A) 它们是同一件事",
      "B) 多类使用sigmoid；多标签使用softmax",
      "C) 多标签使用比多类更少的类别",
      "D) 多类为每张图像分配一个标签；多标签为每张图像分配多个标签"
    ],
    answer: 3,
    explanation: "Multi-class classification assigns exactly one label per image from mutually exclusive categories (using softmax). Multi-label classification can assign multiple labels to a single image (e.g., an image containing both a cat and a dog), using independent sigmoid activations per class and binary cross-entropy loss.",
    explanationChinese: "多类分类从互斥类别中为每张图像分配恰好一个标签（使用softmax）。多标签分类可以为单张图像分配多个标签（如包含猫和狗的图像），使用每个类别独立的sigmoid激活和二元交叉熵损失。",
    diagram: "",
    terms: ["image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 107,
    q: "What is cross-entropy loss used for in classification?",
    qChinese: "交叉熵损失在分类中用于什么？",
    options: [
      "A) Measuring the distance between bounding boxes",
      "B) Computing the pixel-level error in segmentation",
      "C) Measuring the difference between predicted probability distribution and true distribution",
      "D) Calculating the reconstruction error in autoencoders"
    ],
    optionsChinese: [
      "A) 测量边界框之间的距离",
      "B) 计算分割中的像素级误差",
      "C) 测量预测概率分布与真实分布之间的差异",
      "D) 计算自编码器中的重建误差"
    ],
    answer: 2,
    explanation: "Cross-entropy loss measures the difference between the predicted probability distribution (from softmax) and the true one-hot label distribution. It equals -sum(y_true * log(y_pred)). Lower cross-entropy means the predicted probabilities are closer to the ground truth. It is the standard loss for classification tasks.",
    explanationChinese: "交叉熵损失衡量预测概率分布（来自softmax）与真实独热标签分布之间的差异。它等于-sum(y_true*log(y_pred))。较低的交叉熵意味着预测概率更接近真实值。它是分类任务的标准损失。",
    diagram: "",
    terms: ["image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 108,
    q: "What is feature extraction in transfer learning?",
    qChinese: "迁移学习中的特征提取是什么？",
    options: [
      "A) Training all layers from scratch",
      "B) Manually selecting important pixels",
      "C) Extracting images from a database",
      "D) Using a pretrained network as a fixed feature extractor and only training a new classifier head"
    ],
    optionsChinese: [
      "A) 从头训练所有层",
      "B) 手动选择重要像素",
      "C) 从数据库中提取图像",
      "D) 使用预训练网络作为固定特征提取器，仅训练新的分类器头"
    ],
    answer: 3,
    explanation: "Feature extraction freezes all pretrained convolutional layers and uses them as a fixed feature extractor. Only a new classification head (typically one or two FC layers) is trained on the target data. This approach is fast and works well when the target dataset is small or similar to the pretraining dataset.",
    explanationChinese: "特征提取冻结所有预训练卷积层，将它们用作固定特征提取器。仅在目标数据上训练新的分类头（通常一到两个全连接层）。当目标数据集小或与预训练数据集相似时，这种方法速度快且效果好。",
    diagram: "",
    terms: ["image_classification","resnet"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 109,
    q: "What is the confusion matrix in classification evaluation?",
    qChinese: "分类评估中的混淆矩阵是什么？",
    options: [
      "A) A matrix showing the model's internal weights",
      "B) A matrix used for data augmentation",
      "C) A table showing predicted vs actual class labels to visualize classification performance",
      "D) The covariance matrix of feature maps"
    ],
    optionsChinese: [
      "A) 显示模型内部权重的矩阵",
      "B) 用于数据增强的矩阵",
      "C) 显示预测与实际类标签以可视化分类性能的表格",
      "D) 特征图的协方差矩阵"
    ],
    answer: 2,
    explanation: "A confusion matrix is an NxN table where rows represent actual classes and columns represent predicted classes. Each cell shows how many samples of a true class were classified as each predicted class. It reveals which classes are frequently confused, helping identify systematic errors and guide model improvement.",
    explanationChinese: "混淆矩阵是一个NxN表格，行代表实际类别，列代表预测类别。每个单元格显示真实类别的多少样本被分类为每个预测类别。它揭示了哪些类别经常被混淆，帮助识别系统性错误并指导模型改进。",
    diagram: "",
    terms: ["image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 110,
    q: "What is the CIFAR-10 dataset?",
    qChinese: "什么是CIFAR-10数据集？",
    options: [
      "A) A dataset of 10 million high-resolution images",
      "B) A dataset of 10 grayscale images",
      "C) A dataset of 60,000 32x32 color images in 10 classes",
      "D) A text classification dataset with 10 categories"
    ],
    optionsChinese: [
      "A) 包含1000万张高分辨率图像的数据集",
      "B) 包含10张灰度图像的数据集",
      "C) 包含60,000张32x32彩色图像、分为10个类别的数据集",
      "D) 具有10个类别的文本分类数据集"
    ],
    answer: 2,
    explanation: "CIFAR-10 contains 60,000 32x32 color images evenly split across 10 classes (airplane, automobile, bird, cat, deer, dog, frog, horse, ship, truck). It has 50,000 training and 10,000 test images. Its small size makes it a popular benchmark for rapid prototyping and architecture comparison.",
    explanationChinese: "CIFAR-10包含60,000张32x32彩色图像，均匀分布在10个类别中（飞机、汽车、鸟、猫、鹿、狗、青蛙、马、船、卡车）。它有50,000张训练图像和10,000张测试图像。其小规模使其成为快速原型设计和架构比较的流行基准。",
    diagram: "",
    terms: ["image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 111,
    q: "What is label smoothing in classification training?",
    qChinese: "分类训练中的标签平滑是什么？",
    options: [
      "A) Blurring the input images before classification",
      "B) Replacing hard one-hot labels with soft labels that assign small probability to incorrect classes",
      "C) Smoothing the loss curve with moving averages",
      "D) Reducing the number of classes"
    ],
    optionsChinese: [
      "A) 在分类前模糊输入图像",
      "B) 用为不正确类别分配小概率的软标签替换硬独热标签",
      "C) 用移动平均平滑损失曲线",
      "D) 减少类别数量"
    ],
    answer: 1,
    explanation: "Label smoothing replaces the hard target of 1.0 for the correct class with a softer value like 0.9, distributing the remaining 0.1 equally among other classes. This prevents the model from becoming overconfident, improves generalization, and acts as a regularizer. It was introduced in Inception v2 and is now widely used.",
    explanationChinese: "标签平滑将正确类别的硬目标1.0替换为较软的值如0.9，将剩余的0.1均匀分配给其他类别。这防止模型过度自信，改善泛化并起正则化作用。它在Inception v2中引入，现在被广泛使用。",
    diagram: "",
    terms: ["image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 112,
    q: "What is the precision metric in classification?",
    qChinese: "分类中的精确率指标是什么？",
    options: [
      "A) The total number of correct predictions divided by total predictions",
      "B) The harmonic mean of recall and accuracy",
      "C) True positives divided by the sum of true positives and false negatives",
      "D) True positives divided by the sum of true positives and false positives"
    ],
    optionsChinese: [
      "A) 正确预测总数除以总预测数",
      "B) 召回率和准确率的调和平均数",
      "C) 真正例除以真正例和假负例之和",
      "D) 真正例除以真正例和假正例之和"
    ],
    answer: 3,
    explanation: "Precision is TP / (TP + FP), measuring how many of the positive predictions are actually correct. High precision means few false positives. In image classification, precision for class C measures what fraction of images predicted as C actually belong to C. It is especially important when false positives are costly.",
    explanationChinese: "精确率为TP/(TP+FP)，衡量有多少正预测实际上是正确的。高精确率意味着少量假正例。在图像分类中，类别C的精确率衡量预测为C的图像中实际属于C的比例。当假正例代价高时它特别重要。",
    diagram: "",
    terms: ["image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 113,
    q: "What is recall (sensitivity) in classification?",
    qChinese: "分类中的召回率（灵敏度）是什么？",
    options: [
      "A) True positives divided by true positives plus false positives",
      "B) Total correct predictions divided by total samples",
      "C) True positives divided by true positives plus false negatives",
      "D) False positives divided by total negatives"
    ],
    optionsChinese: [
      "A) 真正例除以真正例加假正例",
      "B) 总正确预测除以总样本数",
      "C) 真正例除以真正例加假负例",
      "D) 假正例除以总负例"
    ],
    answer: 2,
    explanation: "Recall is TP / (TP + FN), measuring what fraction of actual positive samples are correctly identified. High recall means few positive samples are missed. In medical imaging, high recall is critical to avoid missing diseased cases. The F1 score combines precision and recall as their harmonic mean.",
    explanationChinese: "召回率为TP/(TP+FN)，衡量实际正样本中有多少被正确识别。高召回率意味着很少遗漏正样本。在医学成像中，高召回率对避免遗漏疾病病例至关重要。F1分数将精确率和召回率结合为它们的调和平均数。",
    diagram: "",
    terms: ["image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 114,
    q: "What is the F1 score?",
    qChinese: "什么是F1分数？",
    options: [
      "A) The arithmetic mean of precision and recall",
      "B) The harmonic mean of precision and recall",
      "C) The geometric mean of accuracy and precision",
      "D) The maximum of precision and recall"
    ],
    optionsChinese: [
      "A) 精确率和召回率的算术平均数",
      "B) 精确率和召回率的调和平均数",
      "C) 准确率和精确率的几何平均数",
      "D) 精确率和召回率的最大值"
    ],
    answer: 1,
    explanation: "The F1 score is the harmonic mean of precision and recall: F1 = 2 * (precision * recall) / (precision + recall). It ranges from 0 to 1, with 1 being perfect. The harmonic mean penalizes extreme imbalances between precision and recall. It is especially useful for imbalanced datasets where accuracy alone is misleading.",
    explanationChinese: "F1分数是精确率和召回率的调和平均数：F1=2*(精确率*召回率)/(精确率+召回率)。它的范围从0到1，1表示完美。调和平均数惩罚精确率和召回率之间的极端不平衡。它对于仅准确率具有误导性的不平衡数据集特别有用。",
    diagram: "",
    terms: ["image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 115,
    q: "What is the purpose of gradient-weighted class activation mapping (Grad-CAM)?",
    qChinese: "梯度加权类激活映射(Grad-CAM)的目的是什么？",
    options: [
      "A) To visualize which regions of an image are most important for a classification decision",
      "B) To speed up training",
      "C) To compute gradients more efficiently",
      "D) To generate synthetic training images"
    ],
    optionsChinese: [
      "A) 可视化图像中哪些区域对分类决策最重要",
      "B) 加速训练",
      "C) 更高效地计算梯度",
      "D) 生成合成训练图像"
    ],
    answer: 0,
    explanation: "Grad-CAM produces visual explanations by using gradients flowing into the last convolutional layer to generate a coarse heatmap highlighting important regions for a prediction. It computes importance weights per channel via global average pooling of gradients, then creates a weighted combination of feature maps. This aids model interpretability.",
    explanationChinese: "Grad-CAM通过使用流入最后卷积层的梯度来生成粗略热力图，突出显示对预测重要的区域，从而产生视觉解释。它通过梯度的全局平均池化计算每通道重要性权重，然后创建特征图的加权组合。这有助于模型可解释性。",
    diagram: "",
    terms: ["image_classification","convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 116,
    q: "What is few-shot learning in image classification?",
    qChinese: "图像分类中的少样本学习是什么？",
    options: [
      "A) Training with millions of labeled images",
      "B) Learning to classify new categories with only a few labeled examples per class",
      "C) Using only a few layers in the network",
      "D) Training for only a few epochs"
    ],
    optionsChinese: [
      "A) 使用数百万标记图像训练",
      "B) 仅用每个类别的少量标记示例学习分类新类别",
      "C) 在网络中仅使用几层",
      "D) 仅训练几个epoch"
    ],
    answer: 1,
    explanation: "Few-shot learning aims to classify new categories using only a small number of labeled examples (typically 1-5 per class). Methods include metric learning (Siamese networks, prototypical networks), meta-learning (MAML), and using pretrained feature extractors. This addresses real-world scenarios where labeled data is scarce and expensive.",
    explanationChinese: "少样本学习旨在仅使用少量标记示例（通常每类1-5个）对新类别进行分类。方法包括度量学习（孪生网络、原型网络）、元学习(MAML)和使用预训练特征提取器。这解决了标记数据稀缺且昂贵的现实场景。",
    diagram: "",
    terms: ["image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 117,
    q: "What is class imbalance in image classification?",
    qChinese: "图像分类中的类别不平衡是什么？",
    options: [
      "A) Having images of different sizes",
      "B) Using different learning rates for different classes",
      "C) Having significantly more training samples for some classes than others",
      "D) Having classes with similar visual features"
    ],
    optionsChinese: [
      "A) 图像大小不同",
      "B) 对不同类别使用不同的学习率",
      "C) 某些类别的训练样本明显多于其他类别",
      "D) 类别具有相似的视觉特征"
    ],
    answer: 2,
    explanation: "Class imbalance occurs when some classes have far more training samples than others, causing the model to be biased toward majority classes. Solutions include oversampling minority classes, undersampling majority classes, class-weighted loss functions, focal loss, and data augmentation specifically targeting underrepresented classes.",
    explanationChinese: "类别不平衡发生在某些类别的训练样本远多于其他类别时，导致模型偏向多数类。解决方案包括过采样少数类、欠采样多数类、类别加权损失函数、焦点损失以及专门针对代表不足类别的数据增强。",
    diagram: "",
    terms: ["image_classification","data_augmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 118,
    q: "What is the purpose of test-time augmentation (TTA)?",
    qChinese: "测试时增强(TTA)的目的是什么？",
    options: [
      "A) To augment the training set during testing",
      "B) To apply multiple augmentations to each test image and average predictions for better accuracy",
      "C) To test different augmentation strategies",
      "D) To reduce test time"
    ],
    optionsChinese: [
      "A) 在测试期间增强训练集",
      "B) 对每张测试图像应用多种增强并平均预测以获得更好的准确率",
      "C) 测试不同的增强策略",
      "D) 减少测试时间"
    ],
    answer: 1,
    explanation: "Test-time augmentation creates multiple augmented versions of each test image (flips, crops, rotations), runs inference on all versions, and averages the predictions. This ensemble-like approach reduces prediction variance and typically improves accuracy by 1-2%. The tradeoff is increased inference time proportional to the number of augmentations.",
    explanationChinese: "测试时增强创建每张测试图像的多个增强版本（翻转、裁剪、旋转），对所有版本运行推理并平均预测。这种类似集成的方法减少了预测方差，通常将准确率提高1-2%。代价是推理时间与增强数量成比例增加。",
    diagram: "",
    terms: ["image_classification","data_augmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 119,
    q: "What is domain adaptation in computer vision?",
    qChinese: "计算机视觉中的域适应是什么？",
    options: [
      "A) Changing the model architecture",
      "B) Changing the loss function",
      "C) Adapting a model trained on one domain (source) to perform well on a different domain (target)",
      "D) Increasing the number of training epochs"
    ],
    optionsChinese: [
      "A) 改变模型架构",
      "B) 改变损失函数",
      "C) 使在一个域（源域）上训练的模型适应在不同域（目标域）上表现良好",
      "D) 增加训练epoch数"
    ],
    answer: 2,
    explanation: "Domain adaptation addresses the distribution shift between training (source) and deployment (target) domains. For example, a model trained on daytime images may fail on nighttime images. Techniques include adversarial training, distribution alignment, and self-training with pseudo-labels on unlabeled target domain data.",
    explanationChinese: "域适应解决训练（源）域和部署（目标）域之间的分布偏移。例如，在白天图像上训练的模型可能在夜间图像上失败。技术包括对抗训练、分布对齐和在无标签目标域数据上使用伪标签的自训练。",
    diagram: "",
    terms: ["image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 120,
    q: "What is model ensembling in image classification?",
    qChinese: "图像分类中的模型集成是什么？",
    options: [
      "A) Training a single very large model",
      "B) Training on multiple datasets simultaneously",
      "C) Using a single model with multiple heads",
      "D) Combining predictions from multiple models to improve accuracy"
    ],
    optionsChinese: [
      "A) 训练单个非常大的模型",
      "B) 同时在多个数据集上训练",
      "C) 使用具有多个头的单个模型",
      "D) 组合多个模型的预测以提高准确率"
    ],
    answer: 3,
    explanation: "Model ensembling combines predictions from multiple independently trained models by averaging probabilities or voting. Different models capture different patterns, and their combination reduces variance and improves robustness. Competition winners often ensemble 5-10 models. The accuracy gain comes at the cost of increased inference time and memory.",
    explanationChinese: "模型集成通过平均概率或投票来组合多个独立训练模型的预测。不同模型捕获不同模式，它们的组合减少方差并提高鲁棒性。比赛获胜者通常集成5-10个模型。准确率提升以增加推理时间和内存为代价。",
    diagram: "",
    terms: ["image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 121,
    q: "What is the ROC curve used for?",
    qChinese: "ROC曲线用于什么？",
    options: [
      "A) Visualizing the training loss over time",
      "B) Displaying the image resolution",
      "C) Showing the model architecture",
      "D) Plotting the true positive rate against false positive rate at various thresholds"
    ],
    optionsChinese: [
      "A) 可视化训练损失随时间的变化",
      "B) 显示图像分辨率",
      "C) 显示模型架构",
      "D) 在不同阈值下绘制真正率对假正率"
    ],
    answer: 3,
    explanation: "The ROC (Receiver Operating Characteristic) curve plots the True Positive Rate against the False Positive Rate at various classification thresholds. The area under the curve (AUC) summarizes overall performance. AUC of 1.0 is perfect, and 0.5 is random chance. It is particularly useful for evaluating binary classifiers.",
    explanationChinese: "ROC（接收者操作特征）曲线在不同分类阈值下绘制真正率对假正率。曲线下面积(AUC)总结了整体性能。AUC为1.0是完美的，0.5是随机概率。它对评估二分类器特别有用。",
    diagram: "",
    terms: ["image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 122,
    q: "What is self-supervised learning in computer vision?",
    qChinese: "计算机视觉中的自监督学习是什么？",
    options: [
      "A) Training with manually labeled data",
      "B) Training only on synthetic images",
      "C) Using reinforcement learning for image classification",
      "D) Learning visual representations from unlabeled data using pretext tasks"
    ],
    optionsChinese: [
      "A) 使用手动标记的数据训练",
      "B) 仅在合成图像上训练",
      "C) 使用强化学习进行图像分类",
      "D) 使用前置任务从无标签数据中学习视觉表示"
    ],
    answer: 3,
    explanation: "Self-supervised learning trains visual representations from unlabeled images using pretext tasks that create supervision from the data itself. Methods include contrastive learning (SimCLR, MoCo), masked image modeling (MAE), and predicting image transformations. These learned features transfer well to downstream tasks with limited labeled data.",
    explanationChinese: "自监督学习使用从数据本身创建监督的前置任务从无标签图像中训练视觉表示。方法包括对比学习(SimCLR、MoCo)、掩码图像建模(MAE)和预测图像变换。这些学习到的特征在标记数据有限的下游任务中迁移良好。",
    diagram: "",
    terms: ["image_classification","vision_transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 123,
    q: "What is the difference between overfitting and underfitting?",
    qChinese: "过拟合和欠拟合之间有什么区别？",
    options: [
      "A) They describe the same phenomenon",
      "B) Overfitting means low training error but high validation error; underfitting means high error on both",
      "C) Overfitting only happens with small models",
      "D) Underfitting means the model memorizes training data"
    ],
    optionsChinese: [
      "A) 它们描述相同的现象",
      "B) 过拟合意味着低训练误差但高验证误差；欠拟合意味着两者都高",
      "C) 过拟合仅在小模型中发生",
      "D) 欠拟合意味着模型记忆了训练数据"
    ],
    answer: 1,
    explanation: "Overfitting occurs when a model learns noise and specific patterns in training data, achieving low training error but poor generalization (high validation error). Underfitting occurs when the model is too simple to capture underlying patterns, showing high error on both training and validation sets. Proper regularization and model capacity balance are key.",
    explanationChinese: "过拟合发生在模型学习了训练数据中的噪声和特定模式时，实现低训练误差但泛化差（高验证误差）。欠拟合发生在模型太简单无法捕获底层模式时，在训练和验证集上都显示高误差。适当的正则化和模型容量平衡是关键。",
    diagram: "",
    terms: ["image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 124,
    q: "What is contrastive learning?",
    qChinese: "什么是对比学习？",
    options: [
      "A) Learning by comparing model architectures",
      "B) Comparing training and validation loss",
      "C) Training two separate models on the same data",
      "D) Learning representations by pulling similar pairs together and pushing dissimilar pairs apart in embedding space"
    ],
    optionsChinese: [
      "A) 通过比较模型架构来学习",
      "B) 比较训练和验证损失",
      "C) 在相同数据上训练两个独立模型",
      "D) 通过在嵌入空间中拉近相似对并推开不相似对来学习表示"
    ],
    answer: 3,
    explanation: "Contrastive learning trains models to bring augmented views of the same image (positive pairs) closer in embedding space while pushing different images (negative pairs) apart. SimCLR and MoCo are prominent frameworks. This self-supervised approach learns powerful visual features without labels, often matching supervised pretraining performance.",
    explanationChinese: "对比学习训练模型在嵌入空间中拉近同一图像的增强视图（正对）同时推开不同图像（负对）。SimCLR和MoCo是著名框架。这种自监督方法无需标签学习强大的视觉特征，通常匹配监督预训练的性能。",
    diagram: "",
    terms: ["image_classification","data_augmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 125,
    q: "What is zero-shot classification?",
    qChinese: "什么是零样本分类？",
    options: [
      "A) Classification with zero training data",
      "B) Classifying images into categories never seen during training using semantic descriptions",
      "C) Classification with perfect accuracy",
      "D) Training with zero epochs"
    ],
    optionsChinese: [
      "A) 没有训练数据的分类",
      "B) 使用语义描述将图像分类为训练期间从未见过的类别",
      "C) 完美准确率的分类",
      "D) 训练零个epoch"
    ],
    answer: 1,
    explanation: "Zero-shot classification recognizes classes not seen during training by leveraging semantic descriptions or attributes. Models like CLIP align image and text embeddings, enabling classification by matching images with textual class descriptions. This eliminates the need for labeled training examples for new categories and is highly flexible.",
    explanationChinese: "零样本分类通过利用语义描述或属性来识别训练期间未见过的类别。CLIP等模型对齐图像和文本嵌入，通过将图像与文本类描述匹配实现分类。这消除了对新类别标记训练示例的需求且高度灵活。",
    diagram: "",
    terms: ["image_classification","vision_transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  // ===== OBJECT DETECTION (Questions 126–155) =====
  {
    id: 126,
    q: "What is object detection?",
    qChinese: "什么是目标检测？",
    options: [
      "A) Classifying an entire image into a single category",
      "B) Locating and classifying multiple objects within an image with bounding boxes",
      "C) Segmenting every pixel in an image",
      "D) Generating images from text descriptions"
    ],
    optionsChinese: [
      "A) 将整个图像分类为单个类别",
      "B) 用边界框定位和分类图像中的多个对象",
      "C) 分割图像中的每个像素",
      "D) 从文本描述生成图像"
    ],
    answer: 1,
    explanation: "Object detection identifies and localizes multiple objects within an image by predicting bounding boxes (coordinates) and class labels for each detected object. Unlike classification which labels the whole image, detection provides where each object is and what it is. It is critical for autonomous driving, surveillance, and robotics.",
    explanationChinese: "目标检测通过为每个检测到的对象预测边界框（坐标）和类标签来识别和定位图像中的多个对象。与标记整个图像的分类不同，检测提供每个对象的位置和类别。它对自动驾驶、监控和机器人至关重要。",
    diagram: "",
    terms: ["object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 127,
    q: "What is Intersection over Union (IoU)?",
    qChinese: "什么是交并比(IoU)？",
    options: [
      "A) The ratio of union area to intersection area",
      "B) The area of overlap between predicted and ground truth boxes divided by their union area",
      "C) The number of intersecting pixels divided by total pixels",
      "D) The ratio of true positives to false positives"
    ],
    optionsChinese: [
      "A) 并集面积与交集面积的比率",
      "B) 预测框和真实框之间的重叠面积除以它们的并集面积",
      "C) 相交像素数除以总像素数",
      "D) 真正例与假正例的比率"
    ],
    answer: 1,
    explanation: "IoU measures the overlap between a predicted bounding box and a ground truth box. It is calculated as the area of intersection divided by the area of union. IoU ranges from 0 (no overlap) to 1 (perfect match). An IoU threshold of 0.5 is commonly used to determine whether a detection is a true positive.",
    explanationChinese: "IoU衡量预测边界框和真实框之间的重叠。它计算为交集面积除以并集面积。IoU范围从0（无重叠）到1（完美匹配）。通常使用0.5的IoU阈值来确定检测是否为真正例。",
    diagram: "",
    terms: ["object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 128,
    q: "What is the R-CNN approach to object detection?",
    qChinese: "R-CNN的目标检测方法是什么？",
    options: [
      "A) A single-stage detection method",
      "B) A multi-stage method that generates region proposals, extracts CNN features per region, then classifies each",
      "C) A method that uses only fully connected layers",
      "D) A method that predicts bounding boxes directly from the entire image"
    ],
    optionsChinese: [
      "A) 单阶段检测方法",
      "B) 生成区域提议、提取每个区域的CNN特征然后分类的多阶段方法",
      "C) 仅使用全连接层的方法",
      "D) 直接从整个图像预测边界框的方法"
    ],
    answer: 1,
    explanation: "R-CNN (Regions with CNN features) is a pioneering two-stage detector. It first generates ~2000 region proposals using selective search, then extracts CNN features from each warped region, and finally classifies each proposal with SVMs. While accurate, it was slow because each proposal required a separate CNN forward pass.",
    explanationChinese: "R-CNN（带CNN特征的区域）是开创性的两阶段检测器。它首先使用选择性搜索生成约2000个区域提议，然后从每个变形区域提取CNN特征，最后用SVM分类每个提议。虽然准确，但速度慢，因为每个提议需要单独的CNN前向传递。",
    diagram: "",
    terms: ["object_detection","image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 129,
    q: "What improvement did Fast R-CNN introduce over R-CNN?",
    qChinese: "Fast R-CNN相对于R-CNN引入了什么改进？",
    options: [
      "A) It removed the need for region proposals",
      "B) It processes the entire image through the CNN once and uses RoI pooling to extract features per region",
      "C) It replaced CNNs with transformers",
      "D) It eliminated the classification step"
    ],
    optionsChinese: [
      "A) 它消除了对区域提议的需求",
      "B) 它将整个图像通过CNN一次处理，并使用RoI池化提取每个区域的特征",
      "C) 它用transformer替换CNN",
      "D) 它消除了分类步骤"
    ],
    answer: 1,
    explanation: "Fast R-CNN processes the entire image through a CNN once to produce a shared feature map, then uses RoI (Region of Interest) pooling to extract fixed-size features for each proposed region. This shared computation is much faster than R-CNN's per-region approach. It also jointly trains the classifier and bounding box regressor end-to-end.",
    explanationChinese: "Fast R-CNN将整个图像通过CNN一次处理以产生共享特征图，然后使用RoI（感兴趣区域）池化为每个提议区域提取固定大小的特征。这种共享计算比R-CNN的逐区域方法快得多。它还端到端地联合训练分类器和边界框回归器。",
    diagram: "",
    terms: ["object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 130,
    q: "What is the Region Proposal Network (RPN) in Faster R-CNN?",
    qChinese: "Faster R-CNN中的区域提议网络(RPN)是什么？",
    options: [
      "A) A separate network for image classification",
      "B) A network for semantic segmentation",
      "C) A network that generates object proposals by predicting objectness scores and bounding boxes at each spatial location",
      "D) A network that replaces the CNN backbone"
    ],
    optionsChinese: [
      "A) 用于图像分类的独立网络",
      "B) 用于语义分割的网络",
      "C) 通过在每个空间位置预测目标性分数和边界框来生成对象提议的网络",
      "D) 替换CNN骨干网络的网络"
    ],
    answer: 2,
    explanation: "The Region Proposal Network (RPN) in Faster R-CNN replaces the slow selective search with a neural network that generates proposals directly from convolutional feature maps. It slides over the feature map, predicting objectness scores and bounding box refinements for multiple anchor boxes at each location. This makes proposal generation fast and trainable.",
    explanationChinese: "Faster R-CNN中的区域提议网络(RPN)用直接从卷积特征图生成提议的神经网络替换了缓慢的选择性搜索。它在特征图上滑动，为每个位置的多个锚框预测目标性分数和边界框调整。这使提议生成快速且可训练。",
    diagram: "",
    terms: ["object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 131,
    q: "What are anchor boxes in object detection?",
    qChinese: "目标检测中的锚框是什么？",
    options: [
      "A) The ground truth bounding boxes",
      "B) The final output bounding boxes",
      "C) Predefined boxes of various sizes and aspect ratios used as reference templates for predictions",
      "D) Boxes that anchor the image to the screen"
    ],
    optionsChinese: [
      "A) 真实边界框",
      "B) 最终输出边界框",
      "C) 用作预测参考模板的各种大小和宽高比的预定义框",
      "D) 将图像固定到屏幕的框"
    ],
    answer: 2,
    explanation: "Anchor boxes are predefined bounding boxes of different sizes and aspect ratios placed at each spatial location of the feature map. The detector predicts offsets from these anchors rather than absolute coordinates. Common configurations use 3 scales and 3 ratios, yielding 9 anchors per location. This covers objects of various shapes.",
    explanationChinese: "锚框是放置在特征图每个空间位置的不同大小和宽高比的预定义边界框。检测器预测相对于这些锚框的偏移量而非绝对坐标。常见配置使用3个尺度和3个比例，每个位置产生9个锚框。这覆盖了各种形状的对象。",
    diagram: "",
    terms: ["object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 132,
    q: "What is Non-Maximum Suppression (NMS)?",
    qChinese: "什么是非极大值抑制(NMS)？",
    options: [
      "A) A technique to increase the number of detections",
      "B) A data augmentation technique",
      "C) A training strategy for object detectors",
      "D) A post-processing step that removes redundant overlapping detections keeping only the highest-scoring one"
    ],
    optionsChinese: [
      "A) 增加检测数量的技术",
      "B) 数据增强技术",
      "C) 目标检测器的训练策略",
      "D) 去除冗余重叠检测、仅保留最高分检测的后处理步骤"
    ],
    answer: 3,
    explanation: "NMS is a post-processing algorithm that eliminates redundant overlapping detections. It first sorts detections by confidence score, selects the highest-scoring box, then removes all other boxes with IoU above a threshold (typically 0.5) with the selected box. This process repeats until all detections are processed.",
    explanationChinese: "NMS是一种消除冗余重叠检测的后处理算法。它首先按置信度分数排序检测，选择最高分的框，然后移除与所选框IoU高于阈值（通常0.5）的所有其他框。此过程重复直到所有检测被处理。",
    diagram: "",
    terms: ["object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 133,
    q: "What is YOLO (You Only Look Once)?",
    qChinese: "什么是YOLO（你只看一次）？",
    options: [
      "A) A two-stage detector with region proposals",
      "B) A segmentation architecture",
      "C) An image classification model",
      "D) A single-stage detector that predicts bounding boxes and class probabilities directly from the full image in one forward pass"
    ],
    optionsChinese: [
      "A) 具有区域提议的两阶段检测器",
      "B) 分割架构",
      "C) 图像分类模型",
      "D) 在一次前向传递中直接从完整图像预测边界框和类概率的单阶段检测器"
    ],
    answer: 3,
    explanation: "YOLO frames object detection as a single regression problem, dividing the image into a grid and predicting bounding boxes and class probabilities for each cell simultaneously. This single-stage approach is extremely fast, enabling real-time detection. YOLO trades some accuracy for speed compared to two-stage detectors like Faster R-CNN.",
    explanationChinese: "YOLO将目标检测构建为单一回归问题，将图像划分为网格并同时为每个单元格预测边界框和类概率。这种单阶段方法极其快速，实现实时检测。与Faster R-CNN等两阶段检测器相比，YOLO以一定精度换取速度。",
    diagram: "",
    terms: ["object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 134,
    q: "What is the SSD (Single Shot MultiBox Detector)?",
    qChinese: "什么是SSD（单次多框检测器）？",
    options: [
      "A) A single-stage detector that predicts objects at multiple feature map scales",
      "B) A two-stage detector",
      "C) A segmentation model",
      "D) An image generation model"
    ],
    optionsChinese: [
      "A) 在多个特征图尺度上预测对象的单阶段检测器",
      "B) 两阶段检测器",
      "C) 分割模型",
      "D) 图像生成模型"
    ],
    answer: 0,
    explanation: "SSD is a single-stage detector that predicts objects using multiple feature maps at different resolutions. Earlier, higher-resolution feature maps detect smaller objects, while later, lower-resolution maps detect larger objects. SSD uses default anchor boxes at each scale and achieves a good balance between speed and accuracy.",
    explanationChinese: "SSD是一种单阶段检测器，使用不同分辨率的多个特征图预测对象。较早的高分辨率特征图检测较小的对象，较后的低分辨率特征图检测较大的对象。SSD在每个尺度使用默认锚框，在速度和精度之间实现了良好平衡。",
    diagram: "",
    terms: ["object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 135,
    q: "What is mean Average Precision (mAP) in object detection?",
    qChinese: "目标检测中的平均精度均值(mAP)是什么？",
    options: [
      "A) The average classification accuracy across all images",
      "B) The mean of Average Precision values computed for each object class",
      "C) The maximum precision achieved by the detector",
      "D) The mean IoU across all detections"
    ],
    optionsChinese: [
      "A) 所有图像的平均分类准确率",
      "B) 为每个对象类别计算的平均精度值的均值",
      "C) 检测器达到的最大精度",
      "D) 所有检测的平均IoU"
    ],
    answer: 1,
    explanation: "mAP is the standard metric for object detection. For each class, the precision-recall curve is computed and the area under it gives the Average Precision (AP). The mAP is the mean AP across all classes. COCO mAP averages over multiple IoU thresholds (0.5 to 0.95), making it more stringent than Pascal VOC's single-threshold mAP.",
    explanationChinese: "mAP是目标检测的标准指标。对于每个类别，计算精确率-召回率曲线，其下面积给出平均精度(AP)。mAP是所有类别AP的均值。COCO mAP在多个IoU阈值(0.5到0.95)上平均，比Pascal VOC的单阈值mAP更严格。",
    diagram: "",
    terms: ["object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 136,
    q: "What is the difference between one-stage and two-stage object detectors?",
    qChinese: "一阶段和两阶段目标检测器之间有什么区别？",
    options: [
      "A) One-stage detectors are always more accurate",
      "B) One-stage detectors can only detect one object",
      "C) Two-stage detectors first generate proposals then classify them; one-stage detectors directly predict boxes and classes",
      "D) Two-stage detectors do not use CNNs"
    ],
    optionsChinese: [
      "A) 一阶段检测器总是更准确",
      "B) 一阶段检测器只能检测一个对象",
      "C) 两阶段检测器先生成提议再分类；一阶段检测器直接预测框和类别",
      "D) 两阶段检测器不使用CNN"
    ],
    answer: 2,
    explanation: "Two-stage detectors (R-CNN family) first generate region proposals, then classify and refine each proposal. One-stage detectors (YOLO, SSD) directly predict bounding boxes and classes from feature maps in a single pass. Two-stage detectors are generally more accurate but slower; one-stage detectors are faster and better for real-time applications.",
    explanationChinese: "两阶段检测器(R-CNN系列)先生成区域提议，然后分类和细化每个提议。一阶段检测器(YOLO、SSD)在单次传递中直接从特征图预测边界框和类别。两阶段检测器通常更准确但更慢；一阶段检测器更快，更适合实时应用。",
    diagram: "",
    terms: ["object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 137,
    q: "What is focal loss designed to address?",
    qChinese: "焦点损失旨在解决什么？",
    options: [
      "A) The extreme foreground-background class imbalance in one-stage detectors",
      "B) The vanishing gradient problem",
      "C) The slow training speed of two-stage detectors",
      "D) The lack of training data"
    ],
    optionsChinese: [
      "A) 一阶段检测器中极端的前景-背景类别不平衡",
      "B) 梯度消失问题",
      "C) 两阶段检测器的缓慢训练速度",
      "D) 训练数据不足"
    ],
    answer: 0,
    explanation: "Focal loss, introduced in RetinaNet, addresses the extreme class imbalance between easy background examples and rare foreground objects in one-stage detectors. It down-weights the loss for well-classified (easy) examples using a modulating factor (1-pt)^gamma, focusing training on hard examples. This enabled one-stage detectors to match two-stage accuracy.",
    explanationChinese: "焦点损失在RetinaNet中引入，解决一阶段检测器中容易的背景样本与稀少的前景对象之间极端类别不平衡。它使用调制因子(1-pt)^gamma降低对分类良好（容易）样本的损失权重，将训练集中在困难样本上。这使一阶段检测器达到了两阶段的精度。",
    diagram: "",
    terms: ["object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 138,
    q: "What is the COCO dataset primarily used for?",
    qChinese: "COCO数据集主要用于什么？",
    options: [
      "A) Only image classification",
      "B) Only video analysis",
      "C) Only text recognition",
      "D) Object detection, segmentation, and captioning benchmarking"
    ],
    optionsChinese: [
      "A) 仅图像分类",
      "B) 仅视频分析",
      "C) 仅文本识别",
      "D) 目标检测、分割和描述生成的基准测试"
    ],
    answer: 3,
    explanation: "COCO (Common Objects in Context) is a large-scale dataset with 330K images across 80 object categories. It provides annotations for object detection (bounding boxes), instance segmentation (pixel masks), keypoint detection, and image captioning. COCO's challenging evaluation metrics have become the standard benchmark for modern detection models.",
    explanationChinese: "COCO（上下文中的常见对象）是一个包含33万张图像、涵盖80个对象类别的大规模数据集。它提供目标检测（边界框）、实例分割（像素掩码）、关键点检测和图像描述的标注。COCO具有挑战性的评估指标已成为现代检测模型的标准基准。",
    diagram: "",
    terms: ["object_detection","semantic_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 139,
    q: "What is the role of the backbone network in object detection?",
    qChinese: "骨干网络在目标检测中的作用是什么？",
    options: [
      "A) To extract feature representations from the input image",
      "B) To generate final bounding box predictions",
      "C) To perform NMS on detections",
      "D) To compute the loss function"
    ],
    optionsChinese: [
      "A) 从输入图像中提取特征表示",
      "B) 生成最终边界框预测",
      "C) 对检测执行NMS",
      "D) 计算损失函数"
    ],
    answer: 0,
    explanation: "The backbone network (e.g., ResNet, VGG) extracts hierarchical feature representations from the input image. These features are then used by the detection head (for predicting boxes and classes) and optionally by FPN for multi-scale features. A stronger backbone generally improves detection accuracy at the cost of more computation.",
    explanationChinese: "骨干网络（如ResNet、VGG）从输入图像中提取层级特征表示。这些特征然后被检测头（用于预测框和类别）使用，可选地被FPN用于多尺度特征。更强的骨干网络通常以更多计算为代价提高检测精度。",
    diagram: "",
    terms: ["object_detection","resnet"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 140,
    q: "What is RoI Align and why was it introduced?",
    qChinese: "什么是RoI Align，为什么要引入它？",
    options: [
      "A) A method for aligning images in a batch",
      "B) A precise feature extraction method using bilinear interpolation instead of quantized RoI pooling",
      "C) A technique for aligning anchor boxes",
      "D) A data augmentation method"
    ],
    optionsChinese: [
      "A) 对齐批次中图像的方法",
      "B) 使用双线性插值代替量化RoI池化的精确特征提取方法",
      "C) 对齐锚框的技术",
      "D) 数据增强方法"
    ],
    answer: 1,
    explanation: "RoI Align, introduced in Mask R-CNN, replaces RoI Pooling's quantization (rounding coordinates to integers) with bilinear interpolation. This eliminates misalignment between the RoI and extracted features. The improved spatial precision is critical for pixel-level tasks like instance segmentation where exact feature alignment matters.",
    explanationChinese: "RoI Align在Mask R-CNN中引入，用双线性插值替代RoI池化的量化（将坐标四舍五入为整数）。这消除了RoI与提取特征之间的错位。改进的空间精度对实例分割等像素级任务至关重要，其中精确的特征对齐很重要。",
    diagram: "",
    terms: ["object_detection","semantic_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 141,
    q: "What is the anchor-free approach in object detection?",
    qChinese: "目标检测中的无锚框方法是什么？",
    options: [
      "A) Using more anchor boxes than usual",
      "B) Anchoring the model weights during training",
      "C) Detecting objects without predefined anchor boxes, often by predicting center points and sizes directly",
      "D) Using only square anchor boxes"
    ],
    optionsChinese: [
      "A) 使用比通常更多的锚框",
      "B) 在训练期间固定模型权重",
      "C) 不使用预定义锚框检测对象，通常通过直接预测中心点和大小",
      "D) 仅使用正方形锚框"
    ],
    answer: 2,
    explanation: "Anchor-free detectors like FCOS, CenterNet, and CornerNet eliminate predefined anchor boxes. Instead, they detect objects by predicting key points (center, corners) and distances to box edges at each feature map location. This avoids hyperparameter tuning for anchor sizes and ratios, simplifying the detection pipeline significantly.",
    explanationChinese: "FCOS、CenterNet和CornerNet等无锚框检测器消除了预定义锚框。相反，它们通过在每个特征图位置预测关键点（中心、角点）和到框边缘的距离来检测对象。这避免了锚框大小和比例的超参数调整，显著简化了检测流程。",
    diagram: "",
    terms: ["object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 142,
    q: "How does YOLOv3 handle multi-scale detection?",
    qChinese: "YOLOv3如何处理多尺度检测？",
    options: [
      "A) It predicts objects at three different scales using feature maps from different network depths",
      "B) It only detects objects at one scale",
      "C) It resizes images to multiple sizes during inference",
      "D) It uses only the final feature map"
    ],
    optionsChinese: [
      "A) 它使用不同网络深度的特征图在三个不同尺度上预测对象",
      "B) 它仅在一个尺度检测对象",
      "C) 它在推理期间将图像调整为多个大小",
      "D) 它仅使用最终特征图"
    ],
    answer: 0,
    explanation: "YOLOv3 detects objects at three scales by making predictions at 1/32, 1/16, and 1/8 of the input resolution. It uses a feature pyramid-like structure where deeper features are upsampled and concatenated with earlier features. Larger feature maps detect smaller objects while smaller feature maps detect larger objects.",
    explanationChinese: "YOLOv3通过在输入分辨率的1/32、1/16和1/8处进行预测来在三个尺度检测对象。它使用类似特征金字塔的结构，其中深层特征被上采样并与早期特征连接。较大的特征图检测较小的对象，较小的特征图检测较大的对象。",
    diagram: "",
    terms: ["object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 143,
    q: "What is the DETR model?",
    qChinese: "什么是DETR模型？",
    options: [
      "A) An end-to-end transformer-based detector that uses set prediction with bipartite matching",
      "B) A traditional CNN-based detector",
      "C) A two-stage detector with RPN",
      "D) A GAN for image generation"
    ],
    optionsChinese: [
      "A) 使用集合预测和二部匹配的端到端基于transformer的检测器",
      "B) 传统的基于CNN的检测器",
      "C) 具有RPN的两阶段检测器",
      "D) 用于图像生成的GAN"
    ],
    answer: 0,
    explanation: "DETR (DEtection TRansformer) reformulates object detection as a set prediction problem. It uses a CNN backbone for feature extraction, a transformer encoder-decoder to process features, and Hungarian matching for loss computation. DETR eliminates NMS and anchor boxes, providing a clean end-to-end architecture for detection.",
    explanationChinese: "DETR（检测Transformer）将目标检测重新表述为集合预测问题。它使用CNN骨干进行特征提取、transformer编码器-解码器处理特征、匈牙利匹配计算损失。DETR消除了NMS和锚框，为检测提供了清晰的端到端架构。",
    diagram: "",
    terms: ["object_detection","vision_transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 144,
    q: "What is the purpose of bounding box regression in detection?",
    qChinese: "检测中边界框回归的目的是什么？",
    options: [
      "A) To classify the object inside the box",
      "B) To remove duplicate detections",
      "C) To refine the predicted bounding box coordinates to better fit the object",
      "D) To compute the classification loss"
    ],
    optionsChinese: [
      "A) 分类框内的对象",
      "B) 去除重复检测",
      "C) 细化预测边界框坐标以更好地适合对象",
      "D) 计算分类损失"
    ],
    answer: 2,
    explanation: "Bounding box regression learns to predict offsets that refine initial bounding box coordinates (from anchors or proposals) to better match the ground truth. The network typically predicts offsets for center coordinates (dx, dy) and size scaling (dw, dh). Smooth L1 loss is commonly used for training the regressor.",
    explanationChinese: "边界框回归学习预测偏移量，细化初始边界框坐标（来自锚框或提议）以更好地匹配真实值。网络通常预测中心坐标偏移(dx, dy)和大小缩放(dw, dh)。Smooth L1损失常用于训练回归器。",
    diagram: "",
    terms: ["object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 145,
    q: "What is hard negative mining in object detection?",
    qChinese: "目标检测中的困难负样本挖掘是什么？",
    options: [
      "A) Removing all negative samples from training",
      "B) Mining data from hard drives",
      "C) Selecting the most difficult background samples that the model incorrectly classifies as objects for training",
      "D) Increasing the number of positive samples"
    ],
    optionsChinese: [
      "A) 从训练中移除所有负样本",
      "B) 从硬盘挖掘数据",
      "C) 选择模型错误分类为对象的最困难背景样本用于训练",
      "D) 增加正样本数量"
    ],
    answer: 2,
    explanation: "Hard negative mining selects the background (negative) samples that the detector most confidently but incorrectly classifies as objects. These hard examples provide the most informative training signal. By focusing on difficult negatives instead of all negatives, training becomes more efficient and the detector learns to avoid common false positives.",
    explanationChinese: "困难负样本挖掘选择检测器最自信但错误地分类为对象的背景（负）样本。这些困难样本提供最有信息量的训练信号。通过关注困难负样本而非所有负样本，训练变得更高效，检测器学会避免常见的假正例。",
    diagram: "",
    terms: ["object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 146,
    q: "What is the difference between YOLOv5 and earlier YOLO versions?",
    qChinese: "YOLOv5与早期YOLO版本有什么区别？",
    options: [
      "A) YOLOv5 introduced better training strategies, anchor auto-learning, and a PyTorch-native implementation",
      "B) YOLOv5 uses a transformer backbone",
      "C) YOLOv5 removed all convolutional layers",
      "D) YOLOv5 only works on grayscale images"
    ],
    optionsChinese: [
      "A) YOLOv5引入了更好的训练策略、锚框自动学习和PyTorch原生实现",
      "B) YOLOv5使用transformer骨干",
      "C) YOLOv5移除了所有卷积层",
      "D) YOLOv5仅适用于灰度图像"
    ],
    answer: 0,
    explanation: "YOLOv5, released by Ultralytics, features a PyTorch-native implementation with improved training techniques including mosaic augmentation, auto-anchor learning, and advanced hyperparameter evolution. It offers multiple model sizes (n, s, m, l, x) trading speed for accuracy. While not an official YOLO paper, it became widely adopted in practice.",
    explanationChinese: "YOLOv5由Ultralytics发布，采用PyTorch原生实现，具有改进的训练技术包括马赛克增强、锚框自动学习和高级超参数进化。它提供多种模型大小(n, s, m, l, x)权衡速度和精度。虽不是官方YOLO论文，但在实践中被广泛采用。",
    diagram: "",
    terms: ["object_detection","data_augmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 147,
    q: "What is multi-scale feature fusion in object detection?",
    qChinese: "目标检测中的多尺度特征融合是什么？",
    options: [
      "A) Combining features from different resolution levels to improve detection of objects at all sizes",
      "B) Using only the highest-resolution feature map",
      "C) Fusing features from different modalities like RGB and depth",
      "D) Using multiple backbone networks"
    ],
    optionsChinese: [
      "A) 组合不同分辨率级别的特征以改善所有大小对象的检测",
      "B) 仅使用最高分辨率的特征图",
      "C) 融合不同模态的特征如RGB和深度",
      "D) 使用多个骨干网络"
    ],
    answer: 0,
    explanation: "Multi-scale feature fusion combines features from different resolution levels of the backbone. High-resolution features provide fine spatial detail for small object detection, while low-resolution features provide semantic context for large objects. FPN, PANet, and BiFPN are popular architectures implementing this through top-down and bottom-up pathways.",
    explanationChinese: "多尺度特征融合组合骨干网络不同分辨率级别的特征。高分辨率特征为小对象检测提供精细空间细节，低分辨率特征为大对象提供语义上下文。FPN、PANet和BiFPN是通过自顶向下和自底向上路径实现的流行架构。",
    diagram: "",
    terms: ["object_detection","convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 148,
    q: "What is soft-NMS?",
    qChinese: "什么是soft-NMS？",
    options: [
      "A) A softer version of non-maximum suppression that reduces scores of overlapping boxes instead of eliminating them",
      "B) NMS applied only to soft objects",
      "C) A technique that increases all detection scores",
      "D) NMS applied before the detection head"
    ],
    optionsChinese: [
      "A) 非极大值抑制的软化版本，降低重叠框的分数而非消除它们",
      "B) 仅应用于软对象的NMS",
      "C) 增加所有检测分数的技术",
      "D) 在检测头之前应用的NMS"
    ],
    answer: 0,
    explanation: "Soft-NMS modifies traditional NMS by gradually reducing the confidence scores of overlapping detections based on their IoU with the selected box, rather than completely removing them. This is beneficial for crowded scenes where objects overlap significantly. A Gaussian decay function is often used to smoothly reduce scores.",
    explanationChinese: "Soft-NMS修改了传统NMS，通过根据重叠检测与所选框的IoU逐渐降低其置信度分数，而不是完全移除它们。这对对象显著重叠的拥挤场景有益。通常使用高斯衰减函数平滑地降低分数。",
    diagram: "",
    terms: ["object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 149,
    q: "What is the Pascal VOC dataset?",
    qChinese: "什么是Pascal VOC数据集？",
    options: [
      "A) A dataset for video classification",
      "B) A benchmark dataset for object detection and segmentation with 20 object classes",
      "C) A medical imaging dataset",
      "D) A dataset for text recognition"
    ],
    optionsChinese: [
      "A) 视频分类数据集",
      "B) 具有20个对象类别的目标检测和分割基准数据集",
      "C) 医学成像数据集",
      "D) 文本识别数据集"
    ],
    answer: 1,
    explanation: "Pascal VOC (Visual Object Classes) is a widely used benchmark dataset with 20 object categories for detection, segmentation, and classification tasks. VOC 2007 and 2012 are the most commonly used versions. While smaller and simpler than COCO, Pascal VOC played a crucial role in the early development of modern object detection methods.",
    explanationChinese: "Pascal VOC（视觉对象类别）是一个广泛使用的基准数据集，包含20个对象类别用于检测、分割和分类任务。VOC 2007和2012是最常用的版本。虽然比COCO更小更简单，Pascal VOC在现代目标检测方法的早期发展中发挥了关键作用。",
    diagram: "",
    terms: ["object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 150,
    q: "What is GIoU (Generalized Intersection over Union)?",
    qChinese: "什么是GIoU（广义交并比）？",
    options: [
      "A) A metric identical to standard IoU",
      "B) A metric for segmentation evaluation",
      "C) An improved IoU metric that handles non-overlapping boxes by considering the smallest enclosing box",
      "D) A metric for classification accuracy"
    ],
    optionsChinese: [
      "A) 与标准IoU相同的指标",
      "B) 分割评估指标",
      "C) 通过考虑最小包围框来处理非重叠框的改进IoU指标",
      "D) 分类准确率指标"
    ],
    answer: 2,
    explanation: "GIoU extends standard IoU to handle cases where boxes do not overlap (where IoU is always 0). It subtracts the ratio of the empty area within the smallest enclosing box from the standard IoU. GIoU ranges from -1 to 1 and provides meaningful gradients even when boxes are far apart, improving bounding box regression training.",
    explanationChinese: "GIoU扩展标准IoU以处理框不重叠的情况（此时IoU始终为0）。它从标准IoU中减去最小包围框内空白面积的比率。GIoU范围从-1到1，即使框相距较远也提供有意义的梯度，改善边界框回归训练。",
    diagram: "",
    terms: ["object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 151,
    q: "What is the purpose of a detection head in an object detector?",
    qChinese: "目标检测器中检测头的目的是什么？",
    options: [
      "A) To predict class labels, confidence scores, and bounding box coordinates from feature maps",
      "B) To extract backbone features",
      "C) To perform data augmentation",
      "D) To resize the input image"
    ],
    optionsChinese: [
      "A) 从特征图预测类标签、置信度分数和边界框坐标",
      "B) 提取骨干特征",
      "C) 执行数据增强",
      "D) 调整输入图像大小"
    ],
    answer: 0,
    explanation: "The detection head sits on top of the backbone and neck (FPN) features and produces the final predictions: class probabilities, objectness confidence scores, and bounding box coordinates. Different architectures use different head designs. Decoupled heads that separate classification and regression branches often perform better than shared heads.",
    explanationChinese: "检测头位于骨干和颈部(FPN)特征之上，产生最终预测：类概率、目标性置信度分数和边界框坐标。不同架构使用不同的头设计。将分类和回归分支分离的解耦头通常比共享头性能更好。",
    diagram: "",
    terms: ["object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 152,
    q: "What is the PANet (Path Aggregation Network)?",
    qChinese: "什么是PANet（路径聚合网络）？",
    options: [
      "A) An enhanced FPN that adds bottom-up path augmentation for better feature propagation",
      "B) A classification network",
      "C) A data augmentation pipeline",
      "D) A network for image generation"
    ],
    optionsChinese: [
      "A) 添加自底向上路径增强以改善特征传播的增强FPN",
      "B) 分类网络",
      "C) 数据增强流程",
      "D) 图像生成网络"
    ],
    answer: 0,
    explanation: "PANet enhances FPN by adding a bottom-up path augmentation after the top-down pathway. This shortens the information path from low-level features to top-level features, improving feature propagation. PANet also introduces adaptive feature pooling to aggregate features from all levels. It is widely adopted in YOLOv4 and other modern detectors.",
    explanationChinese: "PANet通过在自顶向下路径后添加自底向上路径增强来增强FPN。这缩短了从低级特征到顶级特征的信息路径，改善特征传播。PANet还引入自适应特征池化以聚合所有级别的特征。它被YOLOv4和其他现代检测器广泛采用。",
    diagram: "",
    terms: ["object_detection","convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 153,
    q: "What is the difference between object detection and object tracking?",
    qChinese: "目标检测和目标跟踪之间有什么区别？",
    options: [
      "A) They are the same task",
      "B) Detection requires video input",
      "C) Tracking only works on still images",
      "D) Detection finds objects in single frames; tracking maintains object identity across video frames"
    ],
    optionsChinese: [
      "A) 它们是同一任务",
      "B) 检测需要视频输入",
      "C) 跟踪仅适用于静止图像",
      "D) 检测在单帧中找到对象；跟踪在视频帧间维持对象身份"
    ],
    answer: 3,
    explanation: "Object detection identifies and locates objects in individual frames independently. Object tracking maintains the identity of each detected object across consecutive video frames, assigning consistent IDs. Tracking methods like SORT and DeepSORT combine detection with motion prediction and appearance matching to associate objects across time.",
    explanationChinese: "目标检测在各帧中独立识别和定位对象。目标跟踪在连续视频帧间维持每个检测对象的身份，分配一致的ID。SORT和DeepSORT等跟踪方法将检测与运动预测和外观匹配结合，以跨时间关联对象。",
    diagram: "",
    terms: ["object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 154,
    q: "What is the CIoU (Complete IoU) loss?",
    qChinese: "什么是CIoU（完全IoU）损失？",
    options: [
      "A) A loss function based only on overlap area",
      "B) A loss function for segmentation",
      "C) A classification loss function",
      "D) An IoU-based loss that considers overlap, center distance, and aspect ratio consistency"
    ],
    optionsChinese: [
      "A) 仅基于重叠面积的损失函数",
      "B) 分割损失函数",
      "C) 分类损失函数",
      "D) 考虑重叠、中心距离和宽高比一致性的基于IoU的损失"
    ],
    answer: 3,
    explanation: "CIoU loss extends GIoU by additionally penalizing the distance between predicted and ground truth box centers and the difference in aspect ratios. It provides three geometric factors: overlap area, center distance, and aspect ratio. This comprehensive loss leads to faster convergence and more accurate bounding box regression than IoU or GIoU alone.",
    explanationChinese: "CIoU损失通过额外惩罚预测框和真实框中心之间的距离以及宽高比差异来扩展GIoU。它提供三个几何因素：重叠面积、中心距离和宽高比。这种综合损失比单独的IoU或GIoU带来更快的收敛和更准确的边界框回归。",
    diagram: "",
    terms: ["object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 155,
    q: "What is mosaic data augmentation in object detection?",
    qChinese: "目标检测中的马赛克数据增强是什么？",
    options: [
      "A) Adding mosaic blur to images",
      "B) Tiling a single image into a grid",
      "C) Combining four training images into one composite image to enrich context and small object representation",
      "D) Removing parts of images randomly"
    ],
    optionsChinese: [
      "A) 向图像添加马赛克模糊",
      "B) 将单个图像平铺成网格",
      "C) 将四张训练图像组合成一张合成图像以丰富上下文和小对象表示",
      "D) 随机移除图像的部分"
    ],
    answer: 2,
    explanation: "Mosaic augmentation, used in YOLOv4 and YOLOv5, combines four random training images into a single composite by placing them in a 2x2 grid with random crops. This provides rich contextual information, exposes the model to more objects per batch, and naturally handles varying scales. It significantly improves small object detection.",
    explanationChinese: "马赛克增强用于YOLOv4和YOLOv5，通过将四张随机训练图像以随机裁剪放置在2x2网格中组合成单张合成图像。这提供丰富的上下文信息，使模型每批接触更多对象，并自然处理不同尺度。它显著改善了小对象检测。",
    diagram: "",
    terms: ["object_detection","data_augmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  // ===== SEMANTIC/INSTANCE SEGMENTATION (Questions 156–175) =====
  {
    id: 156,
    q: "What is semantic segmentation?",
    qChinese: "什么是语义分割？",
    options: [
      "A) Classifying an entire image into one category",
      "B) Identifying keypoints on objects",
      "C) Drawing bounding boxes around objects",
      "D) Assigning a class label to every pixel in an image"
    ],
    optionsChinese: [
      "A) 将整个图像分类为一个类别",
      "B) 识别对象上的关键点",
      "C) 在对象周围绘制边界框",
      "D) 为图像中的每个像素分配类标签"
    ],
    answer: 3,
    explanation: "Semantic segmentation assigns a class label to every pixel in an image, creating a dense pixel-wise classification map. All pixels of the same class share the same label regardless of which individual object they belong to. For example, all car pixels get the same label. It is essential for autonomous driving scene understanding.",
    explanationChinese: "语义分割为图像中的每个像素分配类标签，创建密集的逐像素分类图。同一类别的所有像素共享相同标签，无论它们属于哪个单独对象。例如，所有汽车像素获得相同标签。它对自动驾驶场景理解至关重要。",
    diagram: "",
    terms: ["semantic_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 157,
    q: "What is instance segmentation?",
    qChinese: "什么是实例分割？",
    options: [
      "A) The same as semantic segmentation",
      "B) Classifying images into categories",
      "C) Detecting objects with bounding boxes only",
      "D) Segmenting each individual object instance with a unique pixel mask and class label"
    ],
    optionsChinese: [
      "A) 与语义分割相同",
      "B) 将图像分类为类别",
      "C) 仅用边界框检测对象",
      "D) 用唯一的像素掩码和类标签分割每个单独的对象实例"
    ],
    answer: 3,
    explanation: "Instance segmentation combines object detection and semantic segmentation by identifying each individual object with a pixel-level mask. Unlike semantic segmentation, it distinguishes between separate instances of the same class (e.g., different cars get different masks). Mask R-CNN is the most influential instance segmentation architecture.",
    explanationChinese: "实例分割通过用像素级掩码识别每个单独对象来结合目标检测和语义分割。与语义分割不同，它区分同一类别的不同实例（如不同的汽车获得不同的掩码）。Mask R-CNN是最有影响力的实例分割架构。",
    diagram: "",
    terms: ["semantic_segmentation","object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 158,
    q: "What is the FCN (Fully Convolutional Network)?",
    qChinese: "什么是FCN（全卷积网络）？",
    options: [
      "A) A network that replaces fully connected layers with convolutional layers to output spatial prediction maps",
      "B) A network with only fully connected layers",
      "C) A network for image classification only",
      "D) A network without any convolutional layers"
    ],
    optionsChinese: [
      "A) 用卷积层替换全连接层以输出空间预测图的网络",
      "B) 仅有全连接层的网络",
      "C) 仅用于图像分类的网络",
      "D) 没有任何卷积层的网络"
    ],
    answer: 0,
    explanation: "FCN (2015) was the pioneering architecture for semantic segmentation. It converts classification CNNs into fully convolutional networks by replacing FC layers with 1x1 convolutions, enabling pixel-wise prediction for any input size. It uses transposed convolutions for upsampling and skip connections to combine coarse and fine features.",
    explanationChinese: "FCN(2015)是语义分割的开创性架构。它通过用1x1卷积替换全连接层将分类CNN转换为全卷积网络，实现任意输入大小的逐像素预测。它使用转置卷积进行上采样和跳跃连接来组合粗糙和精细特征。",
    diagram: "",
    terms: ["semantic_segmentation","convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 159,
    q: "What is the U-Net architecture?",
    qChinese: "什么是U-Net架构？",
    options: [
      "A) An encoder-decoder architecture with skip connections forming a U-shape for precise segmentation",
      "B) A linear sequential network",
      "C) A network shaped like the letter V",
      "D) A transformer-based network"
    ],
    optionsChinese: [
      "A) 具有跳跃连接形成U形的编码器-解码器架构，用于精确分割",
      "B) 线性顺序网络",
      "C) 形状像字母V的网络",
      "D) 基于transformer的网络"
    ],
    answer: 0,
    explanation: "U-Net features a symmetric encoder-decoder architecture with skip connections between corresponding encoder and decoder layers, forming a U-shape. The encoder captures context through downsampling, while the decoder enables precise localization through upsampling. Skip connections concatenate encoder features with decoder features, preserving spatial detail. Originally designed for biomedical image segmentation.",
    explanationChinese: "U-Net具有对称的编码器-解码器架构，在对应的编码器和解码器层之间有跳跃连接，形成U形。编码器通过下采样捕获上下文，解码器通过上采样实现精确定位。跳跃连接将编码器特征与解码器特征连接，保留空间细节。最初为生物医学图像分割设计。",
    diagram: "",
    terms: ["semantic_segmentation","convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 160,
    q: "What is Mask R-CNN?",
    qChinese: "什么是Mask R-CNN？",
    options: [
      "A) A pure semantic segmentation model",
      "B) An extension of Faster R-CNN that adds a mask prediction branch for instance segmentation",
      "C) A model that only predicts masks without classification",
      "D) A GAN for mask generation"
    ],
    optionsChinese: [
      "A) 纯语义分割模型",
      "B) Faster R-CNN的扩展，添加了用于实例分割的掩码预测分支",
      "C) 仅预测掩码而不分类的模型",
      "D) 用于掩码生成的GAN"
    ],
    answer: 1,
    explanation: "Mask R-CNN extends Faster R-CNN by adding a parallel branch that predicts a binary segmentation mask for each detected object instance. It uses RoI Align for precise feature extraction and decouples mask prediction from classification. This simple extension enables joint detection, classification, and pixel-level segmentation in a single model.",
    explanationChinese: "Mask R-CNN通过添加一个并行分支来扩展Faster R-CNN，该分支为每个检测到的对象实例预测二值分割掩码。它使用RoI Align进行精确特征提取，并将掩码预测与分类解耦。这个简单的扩展在单个模型中实现了联合检测、分类和像素级分割。",
    diagram: "",
    terms: ["semantic_segmentation","object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 161,
    q: "What is the DeepLab architecture known for?",
    qChinese: "DeepLab架构以什么闻名？",
    options: [
      "A) Using only standard convolutions",
      "B) Being the fastest segmentation model",
      "C) Using atrous (dilated) convolutions and atrous spatial pyramid pooling (ASPP) for multi-scale segmentation",
      "D) Using only fully connected layers"
    ],
    optionsChinese: [
      "A) 仅使用标准卷积",
      "B) 是最快的分割模型",
      "C) 使用空洞（膨胀）卷积和空洞空间金字塔池化(ASPP)进行多尺度分割",
      "D) 仅使用全连接层"
    ],
    answer: 2,
    explanation: "DeepLab uses atrous (dilated) convolutions to enlarge the receptive field without reducing resolution, and ASPP to capture multi-scale context by applying parallel atrous convolutions at different dilation rates. DeepLabv3+ adds an encoder-decoder structure for sharper boundaries. CRF post-processing was used in earlier versions to refine edges.",
    explanationChinese: "DeepLab使用空洞（膨胀）卷积在不降低分辨率的情况下扩大感受野，并使用ASPP通过以不同膨胀率应用并行空洞卷积来捕获多尺度上下文。DeepLabv3+添加了编码器-解码器结构以获得更锐利的边界。早期版本使用CRF后处理来细化边缘。",
    diagram: "",
    terms: ["semantic_segmentation","convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 162,
    q: "What is the mean Intersection over Union (mIoU) metric?",
    qChinese: "什么是平均交并比(mIoU)指标？",
    options: [
      "A) The IoU for bounding boxes only",
      "B) The number of correctly classified images",
      "C) The average pixel accuracy",
      "D) The mean of per-class IoU scores computed between predicted and ground truth segmentation masks"
    ],
    optionsChinese: [
      "A) 仅边界框的IoU",
      "B) 正确分类的图像数量",
      "C) 平均像素准确率",
      "D) 预测和真实分割掩码之间逐类IoU分数的均值"
    ],
    answer: 3,
    explanation: "mIoU is the standard metric for semantic segmentation. For each class, it computes the IoU between predicted and ground truth pixel sets: intersection / union. The mean across all classes gives mIoU. It ranges from 0 to 1, with higher values indicating better segmentation. It handles class imbalance better than pixel accuracy.",
    explanationChinese: "mIoU是语义分割的标准指标。对于每个类别，它计算预测和真实像素集之间的IoU：交集/并集。所有类别的均值给出mIoU。它的范围从0到1，较高的值表示更好的分割。它比像素准确率更好地处理类别不平衡。",
    diagram: "",
    terms: ["semantic_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 163,
    q: "What is panoptic segmentation?",
    qChinese: "什么是全景分割？",
    options: [
      "A) Semantic segmentation of panoramic images",
      "B) A unified task combining semantic segmentation for stuff classes and instance segmentation for thing classes",
      "C) 3D scene segmentation",
      "D) Segmentation using only edge detection"
    ],
    optionsChinese: [
      "A) 全景图像的语义分割",
      "B) 结合stuff类别的语义分割和thing类别的实例分割的统一任务",
      "C) 三维场景分割",
      "D) 仅使用边缘检测的分割"
    ],
    answer: 1,
    explanation: "Panoptic segmentation unifies semantic and instance segmentation. It assigns every pixel a class label and an instance ID. 'Thing' classes (countable objects like cars, people) get both semantic labels and instance IDs, while 'stuff' classes (amorphous regions like sky, road) get only semantic labels. Panoptic FPN and Panoptic-DeepLab are key architectures.",
    explanationChinese: "全景分割统一了语义和实例分割。它为每个像素分配类标签和实例ID。'Thing'类别（可数对象如汽车、人）同时获得语义标签和实例ID，而'stuff'类别（不定形区域如天空、道路）仅获得语义标签。Panoptic FPN和Panoptic-DeepLab是关键架构。",
    diagram: "",
    terms: ["semantic_segmentation","object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 164,
    q: "What is the encoder-decoder architecture in segmentation?",
    qChinese: "分割中的编码器-解码器架构是什么？",
    options: [
      "A) Two separate networks for two different tasks",
      "B) An architecture with no skip connections",
      "C) An architecture that only encodes features",
      "D) An architecture where the encoder downsamples to capture context and the decoder upsamples to recover spatial resolution"
    ],
    optionsChinese: [
      "A) 两个独立的网络用于两个不同的任务",
      "B) 没有跳跃连接的架构",
      "C) 仅编码特征的架构",
      "D) 编码器下采样以捕获上下文、解码器上采样以恢复空间分辨率的架构"
    ],
    answer: 3,
    explanation: "The encoder-decoder architecture uses an encoder (often a pretrained backbone) to progressively downsample and capture semantic context, followed by a decoder that upsamples features to recover the original spatial resolution for pixel-level prediction. Skip connections between encoder and decoder preserve fine-grained spatial information lost during downsampling.",
    explanationChinese: "编码器-解码器架构使用编码器（通常是预训练骨干）逐步下采样并捕获语义上下文，然后解码器上采样特征以恢复原始空间分辨率用于像素级预测。编码器和解码器之间的跳跃连接保留了下采样期间丢失的精细空间信息。",
    diagram: "",
    terms: ["semantic_segmentation","convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 165,
    q: "What loss function is commonly used for semantic segmentation?",
    qChinese: "语义分割中常用什么损失函数？",
    options: [
      "A) Mean squared error",
      "B) Hinge loss",
      "C) Per-pixel cross-entropy loss",
      "D) Contrastive loss"
    ],
    optionsChinese: [
      "A) 均方误差",
      "B) 合页损失",
      "C) 逐像素交叉熵损失",
      "D) 对比损失"
    ],
    answer: 2,
    explanation: "Per-pixel cross-entropy loss treats each pixel as an independent classification problem, computing cross-entropy between the predicted class probabilities and the ground truth label at every pixel. Class weights can address imbalance. Dice loss and focal loss are also used, especially for datasets with highly imbalanced class distributions.",
    explanationChinese: "逐像素交叉熵损失将每个像素视为独立的分类问题，在每个像素处计算预测类概率和真实标签之间的交叉熵。类权重可以解决不平衡。Dice损失和焦点损失也被使用，特别是对于类分布高度不平衡的数据集。",
    diagram: "",
    terms: ["semantic_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 166,
    q: "What is the Dice loss?",
    qChinese: "什么是Dice损失？",
    options: [
      "A) A loss function based on random sampling",
      "B) A loss function for bounding box regression",
      "C) A classification loss function",
      "D) A loss function based on the Dice coefficient that measures overlap between prediction and ground truth"
    ],
    optionsChinese: [
      "A) 基于随机采样的损失函数",
      "B) 边界框回归的损失函数",
      "C) 分类损失函数",
      "D) 基于Dice系数衡量预测和真实值之间重叠的损失函数"
    ],
    answer: 3,
    explanation: "Dice loss is derived from the Dice coefficient (2|A∩B|/|A|+|B|), measuring the overlap between predicted and ground truth segmentation masks. Dice loss = 1 - Dice coefficient. It directly optimizes the segmentation overlap metric and handles class imbalance well since it focuses on the ratio rather than absolute counts of pixels.",
    explanationChinese: "Dice损失源自Dice系数(2|A∩B|/|A|+|B|)，衡量预测和真实分割掩码之间的重叠。Dice损失=1-Dice系数。它直接优化分割重叠指标，并能很好地处理类别不平衡，因为它关注比率而非像素的绝对计数。",
    diagram: "",
    terms: ["semantic_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 167,
    q: "What is the PSPNet (Pyramid Scene Parsing Network)?",
    qChinese: "什么是PSPNet（金字塔场景解析网络）？",
    options: [
      "A) A detection network",
      "B) A segmentation network that uses a pyramid pooling module to capture multi-scale global context",
      "C) A classification network",
      "D) A generative model"
    ],
    optionsChinese: [
      "A) 检测网络",
      "B) 使用金字塔池化模块捕获多尺度全局上下文的分割网络",
      "C) 分类网络",
      "D) 生成模型"
    ],
    answer: 1,
    explanation: "PSPNet uses a Pyramid Pooling Module that pools features at four different scales (1x1, 2x2, 3x3, 6x6), processes each with a 1x1 convolution, upsamples to the original size, and concatenates them. This captures global context at multiple levels, improving segmentation of objects that require scene-level understanding for correct classification.",
    explanationChinese: "PSPNet使用金字塔池化模块在四个不同尺度(1x1、2x2、3x3、6x6)池化特征，用1x1卷积处理每个，上采样到原始大小并连接。这在多个层级捕获全局上下文，改善需要场景级理解才能正确分类的对象的分割。",
    diagram: "",
    terms: ["semantic_segmentation","convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 168,
    q: "What is the SegNet architecture?",
    qChinese: "什么是SegNet架构？",
    options: [
      "A) A single-layer network",
      "B) A network without any pooling layers",
      "C) An encoder-decoder network that reuses max pooling indices from the encoder for non-learnable upsampling in the decoder",
      "D) A GAN-based segmentation model"
    ],
    optionsChinese: [
      "A) 单层网络",
      "B) 没有任何池化层的网络",
      "C) 重用编码器最大池化索引在解码器中进行非学习上采样的编码器-解码器网络",
      "D) 基于GAN的分割模型"
    ],
    answer: 2,
    explanation: "SegNet is an encoder-decoder architecture that stores max pooling indices from each encoder pooling layer and uses them in the corresponding decoder layer for upsampling. This non-learnable upsampling is memory efficient since only the indices (not the full feature maps) need to be stored, while still recovering spatial information.",
    explanationChinese: "SegNet是一种编码器-解码器架构，存储每个编码器池化层的最大池化索引，并在相应的解码器层中使用它们进行上采样。这种非学习的上采样内存效率高，因为只需存储索引（而非完整特征图），同时仍能恢复空间信息。",
    diagram: "",
    terms: ["semantic_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 169,
    q: "What is conditional random field (CRF) used for in segmentation?",
    qChinese: "条件随机场(CRF)在分割中用于什么？",
    options: [
      "A) Feature extraction from images",
      "B) Training the backbone network",
      "C) Post-processing to refine segmentation boundaries by considering spatial relationships between pixels",
      "D) Generating training data"
    ],
    optionsChinese: [
      "A) 从图像中提取特征",
      "B) 训练骨干网络",
      "C) 通过考虑像素之间的空间关系来细化分割边界的后处理",
      "D) 生成训练数据"
    ],
    answer: 2,
    explanation: "CRF is used as post-processing in segmentation to refine coarse predictions by modeling spatial dependencies between neighboring pixels. Dense CRF considers both spatial proximity and color similarity, encouraging nearby similar pixels to share the same label. This sharpens boundaries and corrects small errors in CNN output predictions.",
    explanationChinese: "CRF在分割中用作后处理，通过建模相邻像素之间的空间依赖关系来细化粗糙预测。密集CRF同时考虑空间邻近性和颜色相似性，鼓励附近相似像素共享相同标签。这锐化了边界并纠正了CNN输出预测中的小错误。",
    diagram: "",
    terms: ["semantic_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 170,
    q: "What is the Cityscapes dataset?",
    qChinese: "什么是Cityscapes数据集？",
    options: [
      "A) A large-scale dataset of urban street scenes with fine pixel-level annotations for autonomous driving",
      "B) A dataset of city skyline photographs",
      "C) A dataset for building classification",
      "D) A dataset of indoor scenes"
    ],
    optionsChinese: [
      "A) 具有精细像素级标注的大规模城市街景数据集，用于自动驾驶",
      "B) 城市天际线照片数据集",
      "C) 建筑分类数据集",
      "D) 室内场景数据集"
    ],
    answer: 0,
    explanation: "Cityscapes is a benchmark dataset with 5,000 finely annotated and 20,000 coarsely annotated urban street scene images from 50 cities. It provides pixel-level annotations for 30 classes (19 for evaluation). It is the primary benchmark for urban scene segmentation and is crucial for developing autonomous driving perception systems.",
    explanationChinese: "Cityscapes是一个基准数据集，包含来自50个城市的5,000张精细标注和20,000张粗略标注的城市街景图像。它为30个类别（19个用于评估）提供像素级标注。它是城市场景分割的主要基准，对开发自动驾驶感知系统至关重要。",
    diagram: "",
    terms: ["semantic_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 171,
    q: "What is the difference between semantic and instance segmentation for overlapping objects?",
    qChinese: "对于重叠对象，语义分割和实例分割有什么区别？",
    options: [
      "A) Semantic segmentation handles overlapping objects better",
      "B) There is no difference for overlapping objects",
      "C) Semantic segmentation labels all pixels of the same class identically; instance segmentation assigns unique masks to each object even if they overlap",
      "D) Instance segmentation cannot handle overlapping objects"
    ],
    optionsChinese: [
      "A) 语义分割更好地处理重叠对象",
      "B) 对于重叠对象没有区别",
      "C) 语义分割将同一类别的所有像素标记为相同；实例分割即使重叠也为每个对象分配唯一掩码",
      "D) 实例分割无法处理重叠对象"
    ],
    answer: 2,
    explanation: "Semantic segmentation assigns the same class label to all pixels of a given class, so two overlapping cars would have identical labels at their overlapping region. Instance segmentation assigns unique masks per object, distinguishing each car individually. This distinction is crucial for counting objects, tracking, and understanding object relationships.",
    explanationChinese: "语义分割为给定类别的所有像素分配相同的类标签，因此两辆重叠的汽车在重叠区域具有相同的标签。实例分割为每个对象分配唯一掩码，单独区分每辆汽车。这种区别对于计数对象、跟踪和理解对象关系至关重要。",
    diagram: "",
    terms: ["semantic_segmentation","object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 172,
    q: "What is the purpose of upsampling in segmentation networks?",
    qChinese: "分割网络中上采样的目的是什么？",
    options: [
      "A) To recover the original spatial resolution lost during encoder downsampling for dense pixel prediction",
      "B) To reduce the number of parameters",
      "C) To increase the number of classes",
      "D) To speed up training"
    ],
    optionsChinese: [
      "A) 恢复编码器下采样期间丢失的原始空间分辨率以进行密集像素预测",
      "B) 减少参数数量",
      "C) 增加类别数量",
      "D) 加速训练"
    ],
    answer: 0,
    explanation: "Upsampling in segmentation decoders restores the spatial resolution that was reduced during encoding. Methods include transposed convolutions (learnable), bilinear interpolation (fixed), and unpooling using stored pooling indices. The upsampled features are refined to produce the final pixel-level predictions matching the original image dimensions.",
    explanationChinese: "分割解码器中的上采样恢复编码期间减少的空间分辨率。方法包括转置卷积（可学习）、双线性插值（固定）和使用存储的池化索引进行反池化。上采样的特征被细化以产生与原始图像维度匹配的最终像素级预测。",
    diagram: "",
    terms: ["semantic_segmentation","convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 173,
    q: "What is the SAM (Segment Anything Model)?",
    qChinese: "什么是SAM（分割一切模型）？",
    options: [
      "A) A model limited to segmenting only 10 object classes",
      "B) A foundation model for image segmentation that can segment any object given prompts like points, boxes, or text",
      "C) A model for audio segmentation",
      "D) A simple thresholding method"
    ],
    optionsChinese: [
      "A) 仅限于分割10个对象类别的模型",
      "B) 可以根据点、框或文本等提示分割任何对象的图像分割基础模型",
      "C) 音频分割模型",
      "D) 简单的阈值方法"
    ],
    answer: 1,
    explanation: "SAM (Segment Anything Model) by Meta AI is a foundation model trained on 11 million images with 1 billion masks. It uses a ViT-based image encoder and a prompt decoder that accepts points, boxes, or text to generate segmentation masks for any object. SAM generalizes to unseen objects and domains without fine-tuning.",
    explanationChinese: "SAM（分割一切模型）由Meta AI开发，在1100万张图像和10亿个掩码上训练。它使用基于ViT的图像编码器和接受点、框或文本的提示解码器来生成任何对象的分割掩码。SAM无需微调即可泛化到未见过的对象和域。",
    diagram: "",
    terms: ["semantic_segmentation","vision_transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 174,
    q: "What is boundary loss in segmentation?",
    qChinese: "分割中的边界损失是什么？",
    options: [
      "A) A loss computed only at image boundaries",
      "B) A loss function that emphasizes accurate prediction of object boundaries and contours",
      "C) The loss at the boundary of the training set",
      "D) A loss function for bounding box regression"
    ],
    optionsChinese: [
      "A) 仅在图像边界计算的损失",
      "B) 强调对象边界和轮廓准确预测的损失函数",
      "C) 训练集边界处的损失",
      "D) 边界框回归的损失函数"
    ],
    answer: 1,
    explanation: "Boundary loss penalizes incorrect predictions specifically at object boundaries, where segmentation errors are most common. It can be formulated using distance transforms or surface-based metrics. Combining boundary loss with region-based losses like cross-entropy or Dice produces sharper segmentation boundaries and better overall segmentation quality.",
    explanationChinese: "边界损失专门在对象边界处惩罚不正确的预测，这是分割错误最常见的地方。它可以使用距离变换或基于表面的指标来制定。将边界损失与交叉熵或Dice等基于区域的损失结合，产生更锐利的分割边界和更好的整体分割质量。",
    diagram: "",
    terms: ["semantic_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 175,
    q: "What is the HRNet architecture designed for?",
    qChinese: "HRNet架构是为什么设计的？",
    options: [
      "A) Processing only low-resolution images",
      "B) Compressing images to low resolution",
      "C) Maintaining high-resolution representations throughout the network for precise spatial predictions",
      "D) Only classification tasks"
    ],
    optionsChinese: [
      "A) 仅处理低分辨率图像",
      "B) 将图像压缩到低分辨率",
      "C) 在整个网络中维持高分辨率表示以进行精确空间预测",
      "D) 仅分类任务"
    ],
    answer: 2,
    explanation: "HRNet (High-Resolution Network) maintains high-resolution representations throughout the network instead of recovering resolution from low-resolution features. It processes multiple resolution streams in parallel and repeatedly exchanges information across resolutions. This yields spatially precise features ideal for segmentation, pose estimation, and other dense prediction tasks.",
    explanationChinese: "HRNet（高分辨率网络）在整个网络中维持高分辨率表示，而不是从低分辨率特征恢复分辨率。它并行处理多个分辨率流并重复跨分辨率交换信息。这产生了空间精确的特征，非常适合分割、姿态估计和其他密集预测任务。",
    diagram: "",
    terms: ["semantic_segmentation","convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  // ===== DATA AUGMENTATION (Questions 176–190) =====
  {
    id: 176,
    q: "What is data augmentation in computer vision?",
    qChinese: "计算机视觉中的数据增强是什么？",
    options: [
      "A) Applying transformations to existing training images to artificially increase dataset size and diversity",
      "B) Collecting more images from the internet",
      "C) Increasing the image resolution",
      "D) Adding more classes to the dataset"
    ],
    optionsChinese: [
      "A) 对现有训练图像应用变换以人工增加数据集大小和多样性",
      "B) 从互联网收集更多图像",
      "C) 增加图像分辨率",
      "D) 向数据集添加更多类别"
    ],
    answer: 0,
    explanation: "Data augmentation applies random transformations (flipping, rotation, cropping, color jittering, etc.) to training images to create new variations. This increases effective training set size and diversity, reducing overfitting and improving generalization. It is one of the most cost-effective techniques for improving deep learning model performance.",
    explanationChinese: "数据增强对训练图像应用随机变换（翻转、旋转、裁剪、颜色抖动等）以创建新的变体。这增加了有效训练集大小和多样性，减少过拟合并改善泛化。它是改善深度学习模型性能最具成本效益的技术之一。",
    diagram: "",
    terms: ["data_augmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 177,
    q: "What is horizontal flipping as a data augmentation technique?",
    qChinese: "作为数据增强技术的水平翻转是什么？",
    options: [
      "A) Rotating the image 90 degrees",
      "B) Flipping the image upside down",
      "C) Mirroring the image along the vertical axis to create a left-right reversed version",
      "D) Swapping the color channels"
    ],
    optionsChinese: [
      "A) 将图像旋转90度",
      "B) 将图像上下翻转",
      "C) 沿垂直轴镜像图像以创建左右反转的版本",
      "D) 交换颜色通道"
    ],
    answer: 2,
    explanation: "Horizontal flipping mirrors the image left-to-right, creating a new training sample. It is the most commonly used augmentation because most natural scenes are approximately symmetric horizontally. However, it should not be used for tasks where orientation matters, such as text recognition or distinguishing left from right in medical imaging.",
    explanationChinese: "水平翻转将图像从左到右镜像，创建新的训练样本。它是最常用的增强方法，因为大多数自然场景在水平方向上近似对称。但不应用于方向重要的任务，如文本识别或在医学成像中区分左右。",
    diagram: "",
    terms: ["data_augmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 178,
    q: "What is random cropping in data augmentation?",
    qChinese: "数据增强中的随机裁剪是什么？",
    options: [
      "A) Randomly selecting a sub-region of the image to serve as the training sample",
      "B) Always cropping the center of the image",
      "C) Cropping based on object locations",
      "D) Removing the background from images"
    ],
    optionsChinese: [
      "A) 随机选择图像的子区域作为训练样本",
      "B) 总是裁剪图像的中心",
      "C) 根据对象位置裁剪",
      "D) 从图像中移除背景"
    ],
    answer: 0,
    explanation: "Random cropping selects a random rectangular sub-region from the image during training. This forces the model to recognize objects at different positions and scales, providing translation invariance. A common approach resizes the image to a slightly larger size (e.g., 256) then randomly crops to the target size (e.g., 224).",
    explanationChinese: "随机裁剪在训练期间从图像中选择随机的矩形子区域。这迫使模型在不同位置和尺度上识别对象，提供平移不变性。常见方法是将图像调整为略大的尺寸（如256），然后随机裁剪到目标大小（如224）。",
    diagram: "",
    terms: ["data_augmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 179,
    q: "What is color jittering?",
    qChinese: "什么是颜色抖动？",
    options: [
      "A) Converting the image to grayscale",
      "B) Adding colored borders to images",
      "C) Randomly altering brightness, contrast, saturation, and hue of the image",
      "D) Changing the image format"
    ],
    optionsChinese: [
      "A) 将图像转换为灰度",
      "B) 向图像添加彩色边框",
      "C) 随机改变图像的亮度、对比度、饱和度和色调",
      "D) 更改图像格式"
    ],
    answer: 2,
    explanation: "Color jittering randomly adjusts the brightness, contrast, saturation, and hue of training images within specified ranges. This makes the model robust to lighting variations and color shifts that occur in real-world scenarios. It is particularly useful for outdoor images where lighting conditions change dramatically throughout the day.",
    explanationChinese: "颜色抖动在指定范围内随机调整训练图像的亮度、对比度、饱和度和色调。这使模型对真实场景中发生的光照变化和颜色偏移具有鲁棒性。它对室外图像特别有用，因为光照条件在一天中变化很大。",
    diagram: "",
    terms: ["data_augmentation","image_preprocessing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 180,
    q: "What is Cutout augmentation?",
    qChinese: "什么是Cutout增强？",
    options: [
      "A) Cutting out objects from images",
      "B) Cropping images to square shape",
      "C) Removing duplicate images from the dataset",
      "D) Randomly masking out a square region of the image with zeros during training"
    ],
    optionsChinese: [
      "A) 从图像中剪切对象",
      "B) 将图像裁剪为正方形",
      "C) 从数据集中删除重复图像",
      "D) 在训练期间用零随机遮挡图像的方形区域"
    ],
    answer: 3,
    explanation: "Cutout randomly masks a square patch of the image with zeros (black) during training. This forces the model to rely on a broader set of features rather than focusing on a small discriminative region. It acts as a regularizer, improving robustness to partial occlusion. The mask size is a key hyperparameter, typically 16x16 for CIFAR-10.",
    explanationChinese: "Cutout在训练期间用零（黑色）随机遮挡图像的方形区域。这迫使模型依赖更广泛的特征集，而不是集中在小的判别区域。它起正则化作用，提高对部分遮挡的鲁棒性。遮挡大小是关键超参数，CIFAR-10通常为16x16。",
    diagram: "",
    terms: ["data_augmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 181,
    q: "What is Mixup augmentation?",
    qChinese: "什么是Mixup增强？",
    options: [
      "A) Mixing different augmentation strategies",
      "B) Combining images from different datasets",
      "C) Mixing color channels randomly",
      "D) Creating new samples by linearly interpolating between two random training images and their labels"
    ],
    optionsChinese: [
      "A) 混合不同的增强策略",
      "B) 组合不同数据集的图像",
      "C) 随机混合颜色通道",
      "D) 通过在两个随机训练图像及其标签之间线性插值来创建新样本"
    ],
    answer: 3,
    explanation: "Mixup creates virtual training samples by linearly blending two images and their labels: x_new = lambda*x1 + (1-lambda)*x2 with lambda from a Beta distribution. This encourages linear behavior between training examples, reducing overconfident predictions. It acts as a regularizer and improves generalization across image classification tasks.",
    explanationChinese: "Mixup通过线性混合两个图像及其标签创建虚拟训练样本：x_new=lambda*x1+(1-lambda)*x2，lambda来自Beta分布。这鼓励训练样本之间的线性行为，减少过度自信的预测。它起正则化作用并改善图像分类任务的泛化。",
    diagram: "",
    terms: ["data_augmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 182,
    q: "What is CutMix augmentation?",
    qChinese: "什么是CutMix增强？",
    options: [
      "A) Cutting images into strips",
      "B) Removing mixed images from the dataset",
      "C) Replacing a rectangular region of one image with a patch from another image and mixing their labels proportionally",
      "D) Mixing augmentation and original images"
    ],
    optionsChinese: [
      "A) 将图像切成条",
      "B) 从数据集中删除混合图像",
      "C) 用另一图像的补丁替换一个图像的矩形区域，并按比例混合标签",
      "D) 混合增强和原始图像"
    ],
    answer: 2,
    explanation: "CutMix combines Cutout and Mixup by replacing a random rectangular region of one image with a corresponding patch from another image. Labels are mixed proportionally to the area ratio. Unlike Cutout, no pixels are wasted since the removed region is filled with informative content. CutMix improves localization and classification performance.",
    explanationChinese: "CutMix结合了Cutout和Mixup，用另一图像的相应补丁替换一个图像的随机矩形区域。标签按面积比例混合。与Cutout不同，没有像素被浪费，因为移除的区域被有信息量的内容填充。CutMix改善了定位和分类性能。",
    diagram: "",
    terms: ["data_augmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 183,
    q: "What is random erasing augmentation?",
    qChinese: "什么是随机擦除增强？",
    options: [
      "A) Randomly selecting a rectangle in the image and erasing its pixels with random values",
      "B) Erasing the entire image",
      "C) Removing images from the training set",
      "D) Erasing the model weights"
    ],
    optionsChinese: [
      "A) 在图像中随机选择矩形并用随机值擦除其像素",
      "B) 擦除整个图像",
      "C) 从训练集中移除图像",
      "D) 擦除模型权重"
    ],
    answer: 0,
    explanation: "Random erasing selects a random rectangular region and fills it with random pixel values (or zeros or the mean pixel value). Unlike Cutout which always uses zeros, random erasing uses random values and random aspect ratios. It simulates occlusion, forcing the model to use global context rather than relying on any single image region.",
    explanationChinese: "随机擦除选择一个随机矩形区域，用随机像素值（或零或平均像素值）填充。与总是使用零的Cutout不同，随机擦除使用随机值和随机宽高比。它模拟遮挡，迫使模型使用全局上下文而非依赖任何单一图像区域。",
    diagram: "",
    terms: ["data_augmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 184,
    q: "What is AutoAugment?",
    qChinese: "什么是AutoAugment？",
    options: [
      "A) Using reinforcement learning to automatically find the optimal augmentation policy for a dataset",
      "B) Manually selecting augmentation strategies",
      "C) Applying all possible augmentations simultaneously",
      "D) Augmenting data without any transformations"
    ],
    optionsChinese: [
      "A) 使用强化学习自动为数据集找到最优增强策略",
      "B) 手动选择增强策略",
      "C) 同时应用所有可能的增强",
      "D) 不使用任何变换增强数据"
    ],
    answer: 0,
    explanation: "AutoAugment uses reinforcement learning to search for the optimal combination and magnitude of augmentation operations for a given dataset. It discovers policies consisting of sub-policies, each specifying augmentation operations and their probabilities. Found policies transfer across datasets. RandAugment later simplified this with a reduced search space.",
    explanationChinese: "AutoAugment使用强化学习为给定数据集搜索增强操作的最优组合和强度。它发现由子策略组成的策略，每个子策略指定增强操作及其概率。发现的策略可跨数据集迁移。RandAugment后来通过缩小搜索空间简化了这一过程。",
    diagram: "",
    terms: ["data_augmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 185,
    q: "What is RandAugment?",
    qChinese: "什么是RandAugment？",
    options: [
      "A) A simplified augmentation strategy that randomly selects N operations with magnitude M from a fixed set",
      "B) Applying random rotations only",
      "C) Augmenting only random images in the batch",
      "D) Using random model weights for augmentation"
    ],
    optionsChinese: [
      "A) 从固定集合中随机选择N个操作，强度为M的简化增强策略",
      "B) 仅应用随机旋转",
      "C) 仅对批中的随机图像进行增强",
      "D) 使用随机模型权重进行增强"
    ],
    answer: 0,
    explanation: "RandAugment simplifies AutoAugment by using only two hyperparameters: N (number of operations to apply) and M (magnitude of each operation). It randomly selects N transformations from a set of 14 operations and applies them sequentially at magnitude M. This simple approach matches or exceeds AutoAugment's performance without expensive search.",
    explanationChinese: "RandAugment通过仅使用两个超参数简化AutoAugment：N（应用的操作数）和M（每个操作的强度）。它从14个操作集中随机选择N个变换，并以强度M顺序应用。这种简单方法在无需昂贵搜索的情况下匹配或超越AutoAugment的性能。",
    diagram: "",
    terms: ["data_augmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 186,
    q: "What is the purpose of random rotation in data augmentation?",
    qChinese: "数据增强中随机旋转的目的是什么？",
    options: [
      "A) To make the model invariant to object orientation by rotating images by random angles",
      "B) To increase image resolution",
      "C) To align all images to the same orientation",
      "D) To convert images to polar coordinates"
    ],
    optionsChinese: [
      "A) 通过以随机角度旋转图像使模型对对象方向不变",
      "B) 增加图像分辨率",
      "C) 将所有图像对齐到相同方向",
      "D) 将图像转换为极坐标"
    ],
    answer: 0,
    explanation: "Random rotation augments training data by rotating images by random angles, typically within a small range like +/- 15 degrees. This teaches the model to recognize objects regardless of their orientation. The rotation range should match expected real-world variations. For detection, bounding boxes must also be transformed accordingly.",
    explanationChinese: "随机旋转通过以随机角度旋转图像来增强训练数据，通常在+/-15度等小范围内。这教会模型无论对象方向如何都能识别。旋转范围应匹配预期的真实世界变化。对于检测，边界框也必须相应变换。",
    diagram: "",
    terms: ["data_augmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 187,
    q: "What is random scaling (zoom) augmentation?",
    qChinese: "什么是随机缩放（变焦）增强？",
    options: [
      "A) Fixing all images to one scale",
      "B) Randomly zooming in or out on the image to make the model robust to scale variations",
      "C) Scaling only the labels",
      "D) Changing the file size randomly"
    ],
    optionsChinese: [
      "A) 将所有图像固定为一个尺度",
      "B) 随机放大或缩小图像以使模型对尺度变化具有鲁棒性",
      "C) 仅缩放标签",
      "D) 随机更改文件大小"
    ],
    answer: 1,
    explanation: "Random scaling augments images by randomly resizing them within a scale range (e.g., 0.8 to 1.2 of original size), then cropping or padding to the target size. This makes the model robust to objects appearing at different scales and distances. Scale augmentation is especially important for object detection where objects vary greatly in size.",
    explanationChinese: "随机缩放通过在缩放范围内（如原始大小的0.8到1.2）随机调整图像大小来增强图像，然后裁剪或填充到目标大小。这使模型对以不同尺度和距离出现的对象具有鲁棒性。缩放增强对对象大小变化很大的目标检测尤其重要。",
    diagram: "",
    terms: ["data_augmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 188,
    q: "What is elastic deformation augmentation?",
    qChinese: "什么是弹性变形增强？",
    options: [
      "A) Applying smooth random displacement fields to create locally distorted versions of images",
      "B) Stretching images uniformly",
      "C) Compressing images",
      "D) Adding noise to images"
    ],
    optionsChinese: [
      "A) 应用平滑的随机位移场创建图像的局部扭曲版本",
      "B) 均匀拉伸图像",
      "C) 压缩图像",
      "D) 向图像添加噪声"
    ],
    answer: 0,
    explanation: "Elastic deformation applies smooth random displacement fields to create local distortions in the image, simulating natural deformations. It generates random displacement vectors, smooths them with a Gaussian filter, and applies the resulting warping. It is especially effective in medical image segmentation (U-Net paper) and handwriting recognition.",
    explanationChinese: "弹性变形应用平滑的随机位移场在图像中创建局部扭曲，模拟自然变形。它生成随机位移向量，用高斯滤波器平滑，然后应用结果扭曲。它在医学图像分割(U-Net论文)和手写识别中特别有效。",
    diagram: "",
    terms: ["data_augmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 189,
    q: "What is the GridMask augmentation technique?",
    qChinese: "什么是GridMask增强技术？",
    options: [
      "A) Dividing the image into a grid for classification",
      "B) Masking out evenly-spaced grid regions to create structured information removal",
      "C) Adding grid lines to images",
      "D) Using a grid search for hyperparameters"
    ],
    optionsChinese: [
      "A) 将图像划分为网格进行分类",
      "B) 遮挡均匀间隔的网格区域以创建结构化信息移除",
      "C) 向图像添加网格线",
      "D) 使用网格搜索超参数"
    ],
    answer: 1,
    explanation: "GridMask creates a regular grid pattern mask and applies it to training images, removing evenly-spaced rectangular regions. Unlike Cutout's single random patch, GridMask's structured removal pattern avoids excessive information loss while still preventing the model from relying on continuous local regions. It is effective for both classification and detection.",
    explanationChinese: "GridMask创建规则的网格图案掩码并将其应用于训练图像，移除均匀间隔的矩形区域。与Cutout的单个随机补丁不同，GridMask的结构化移除模式避免了过多的信息丢失，同时仍防止模型依赖连续的局部区域。它对分类和检测都有效。",
    diagram: "",
    terms: ["data_augmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 190,
    q: "When should data augmentation NOT be applied?",
    qChinese: "何时不应应用数据增强？",
    options: [
      "A) When training data is limited",
      "B) When the model is overfitting",
      "C) During validation and test evaluation to ensure fair and consistent metrics",
      "D) When using transfer learning"
    ],
    optionsChinese: [
      "A) 当训练数据有限时",
      "B) 当模型过拟合时",
      "C) 在验证和测试评估期间以确保公平一致的指标",
      "D) 使用迁移学习时"
    ],
    answer: 2,
    explanation: "Data augmentation should not be applied to validation and test sets during evaluation because it would make results non-deterministic and incomparable. Augmentation is a training-time technique to improve generalization. However, test-time augmentation (TTA) is a separate deliberate strategy that averages predictions across augmented test images.",
    explanationChinese: "在评估期间不应对验证和测试集应用数据增强，因为它会使结果不确定且无法比较。增强是训练时改善泛化的技术。然而，测试时增强(TTA)是一种单独的有意策略，对增强后的测试图像的预测取平均。",
    diagram: "",
    terms: ["data_augmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  // ===== VISION TRANSFORMERS & MODERN ARCHITECTURES (Questions 191–200) =====
  {
    id: 191,
    q: "What is the Vision Transformer (ViT)?",
    qChinese: "什么是Vision Transformer (ViT)？",
    options: [
      "A) A model that applies the transformer architecture directly to sequences of image patches for classification",
      "B) A CNN with transformer-style naming",
      "C) A transformer model designed only for text",
      "D) A video processing model"
    ],
    optionsChinese: [
      "A) 将transformer架构直接应用于图像块序列进行分类的模型",
      "B) 具有transformer风格命名的CNN",
      "C) 仅为文本设计的transformer模型",
      "D) 视频处理模型"
    ],
    answer: 0,
    explanation: "Vision Transformer (ViT) splits an image into fixed-size patches (e.g., 16x16), linearly embeds each patch, adds position embeddings, and processes the sequence with a standard transformer encoder. A classification token aggregates global information. ViT achieves state-of-the-art image classification when pretrained on large datasets.",
    explanationChinese: "Vision Transformer (ViT)将图像分割为固定大小的块（如16x16），线性嵌入每个块，添加位置嵌入，然后用标准transformer编码器处理序列。分类标记聚合全局信息。当在大数据集上预训练时，ViT实现了最先进的图像分类。",
    diagram: "",
    terms: ["vision_transformer","image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 192,
    q: "How does ViT handle positional information in images?",
    qChinese: "ViT如何处理图像中的位置信息？",
    options: [
      "A) Through convolutional layers",
      "B) Position is not used in ViT",
      "C) By sorting patches by color",
      "D) By adding learnable position embeddings to patch embeddings"
    ],
    optionsChinese: [
      "A) 通过卷积层",
      "B) ViT中不使用位置",
      "C) 通过按颜色排序块",
      "D) 通过向块嵌入添加可学习的位置嵌入"
    ],
    answer: 3,
    explanation: "ViT adds learnable 1D position embeddings to the patch embeddings to encode spatial location information. Without position embeddings, the transformer would treat patches as an unordered set, losing spatial structure. The learned embeddings capture 2D spatial relationships despite being 1D, showing similar nearby positions have similar embeddings.",
    explanationChinese: "ViT向块嵌入添加可学习的一维位置嵌入以编码空间位置信息。没有位置嵌入，transformer会将块视为无序集合，丢失空间结构。学习到的嵌入尽管是一维的，但捕获了二维空间关系，显示出相似的相近位置具有相似的嵌入。",
    diagram: "",
    terms: ["vision_transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 193,
    q: "What is the Swin Transformer?",
    qChinese: "什么是Swin Transformer？",
    options: [
      "A) A transformer that processes images at a single resolution",
      "B) A hierarchical vision transformer that uses shifted windows for efficient local attention with cross-window connectivity",
      "C) A transformer for audio processing",
      "D) A standard ViT with larger patches"
    ],
    optionsChinese: [
      "A) 在单一分辨率处理图像的transformer",
      "B) 使用移位窗口实现高效局部注意力和跨窗口连接的分层视觉transformer",
      "C) 用于音频处理的transformer",
      "D) 具有更大块的标准ViT"
    ],
    answer: 1,
    explanation: "Swin Transformer introduces a hierarchical architecture with shifted window attention. It computes self-attention within local windows, then shifts the window partition between layers to enable cross-window information flow. This reduces computational complexity from quadratic to linear with image size, making it efficient for high-resolution tasks like detection and segmentation.",
    explanationChinese: "Swin Transformer引入了带有移位窗口注意力的分层架构。它在局部窗口内计算自注意力，然后在层之间移动窗口分区以实现跨窗口信息流。这将计算复杂度从图像大小的二次方降低到线性，使其对检测和分割等高分辨率任务高效。",
    diagram: "",
    terms: ["vision_transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 194,
    q: "What is CLIP (Contrastive Language-Image Pre-training)?",
    qChinese: "什么是CLIP（对比语言-图像预训练）？",
    options: [
      "A) An image cropping tool",
      "B) A data augmentation technique",
      "C) A video editing software",
      "D) A model that learns visual representations by aligning images and text descriptions in a shared embedding space"
    ],
    optionsChinese: [
      "A) 图像裁剪工具",
      "B) 数据增强技术",
      "C) 视频编辑软件",
      "D) 通过在共享嵌入空间中对齐图像和文本描述来学习视觉表示的模型"
    ],
    answer: 3,
    explanation: "CLIP trains an image encoder and text encoder jointly using contrastive learning on 400 million image-text pairs. It learns to match images with their corresponding text descriptions. CLIP enables zero-shot classification by comparing image embeddings with text embeddings of class descriptions, without any task-specific training.",
    explanationChinese: "CLIP在4亿个图像-文本对上使用对比学习联合训练图像编码器和文本编码器。它学习将图像与其对应的文本描述匹配。CLIP通过比较图像嵌入和类描述的文本嵌入实现零样本分类，无需任何特定任务训练。",
    diagram: "",
    terms: ["vision_transformer","image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 195,
    q: "What is the DeiT (Data-efficient Image Transformers) contribution?",
    qChinese: "DeiT（数据高效图像Transformer）的贡献是什么？",
    options: [
      "A) A new CNN architecture",
      "B) A hardware accelerator for transformers",
      "C) A new dataset for training",
      "D) Training strategies that enable ViT to achieve strong results on ImageNet without extra large-scale pretraining data"
    ],
    optionsChinese: [
      "A) 新的CNN架构",
      "B) transformer的硬件加速器",
      "C) 新的训练数据集",
      "D) 使ViT无需额外大规模预训练数据即可在ImageNet上实现强结果的训练策略"
    ],
    answer: 3,
    explanation: "DeiT showed that ViT can be trained effectively on ImageNet alone (without JFT-300M pretraining) by using strong data augmentation, regularization, and knowledge distillation from a CNN teacher. It introduced a distillation token alongside the class token. DeiT demonstrated that training strategies matter as much as architecture for vision transformers.",
    explanationChinese: "DeiT表明ViT可以仅在ImageNet上有效训练（无需JFT-300M预训练），通过使用强数据增强、正则化和从CNN教师的知识蒸馏。它在类标记旁引入了蒸馏标记。DeiT证明了对视觉transformer来说，训练策略与架构同样重要。",
    diagram: "",
    terms: ["vision_transformer","data_augmentation","image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 196,
    q: "What is MAE (Masked Autoencoder)?",
    qChinese: "什么是MAE（掩码自编码器）？",
    options: [
      "A) A self-supervised method that masks random patches of an image and trains the model to reconstruct them",
      "B) A model that masks the output layer",
      "C) A model for automatic email processing",
      "D) A technique for encrypting images"
    ],
    optionsChinese: [
      "A) 遮挡图像的随机块并训练模型重建它们的自监督方法",
      "B) 遮挡输出层的模型",
      "C) 用于自动电子邮件处理的模型",
      "D) 加密图像的技术"
    ],
    answer: 0,
    explanation: "MAE masks a large proportion (75%) of random image patches and trains a ViT encoder-decoder to reconstruct the missing patches from the visible ones. Only the visible patches are processed by the encoder, making training efficient. The learned representations transfer well to downstream tasks. MAE is analogous to BERT's masked language modeling for vision.",
    explanationChinese: "MAE遮挡大比例(75%)的随机图像块，并训练ViT编码器-解码器从可见块重建缺失块。只有可见块被编码器处理，使训练高效。学习到的表示在下游任务中迁移良好。MAE类似于BERT的掩码语言建模在视觉领域的应用。",
    diagram: "",
    terms: ["vision_transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 197,
    q: "What is the key advantage of vision transformers over CNNs?",
    qChinese: "视觉transformer相对于CNN的关键优势是什么？",
    options: [
      "A) They always require less training data",
      "B) They do not need GPUs for training",
      "C) They are always faster than CNNs",
      "D) They capture global context and long-range dependencies from the first layer through self-attention"
    ],
    optionsChinese: [
      "A) 它们总是需要更少的训练数据",
      "B) 它们不需要GPU训练",
      "C) 它们总是比CNN更快",
      "D) 通过自注意力从第一层就捕获全局上下文和长距离依赖"
    ],
    answer: 3,
    explanation: "Vision transformers use self-attention to model relationships between all image patches simultaneously, capturing global context from the very first layer. CNNs build up global context gradually through stacked local convolutions. This global attention enables ViTs to better capture long-range dependencies and holistic image understanding, especially with sufficient pretraining data.",
    explanationChinese: "视觉transformer使用自注意力同时建模所有图像块之间的关系，从第一层就捕获全局上下文。CNN通过堆叠的局部卷积逐渐建立全局上下文。这种全局注意力使ViT能更好地捕获长距离依赖和整体图像理解，特别是在有足够预训练数据时。",
    diagram: "",
    terms: ["vision_transformer","convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 198,
    q: "What is a multimodal vision model?",
    qChinese: "什么是多模态视觉模型？",
    options: [
      "A) A model that only processes one type of visual data",
      "B) A model with multiple GPU support",
      "C) A model that jointly processes and understands multiple data types such as images, text, and audio",
      "D) A model that generates multiple images simultaneously"
    ],
    optionsChinese: [
      "A) 仅处理一种视觉数据类型的模型",
      "B) 支持多GPU的模型",
      "C) 联合处理和理解多种数据类型如图像、文本和音频的模型",
      "D) 同时生成多个图像的模型"
    ],
    answer: 2,
    explanation: "Multimodal vision models process and relate information from multiple modalities (images, text, audio, video). CLIP, DALL-E, GPT-4V, and Florence are examples. They learn shared representations across modalities, enabling tasks like image captioning, visual question answering, text-to-image generation, and open-vocabulary object detection.",
    explanationChinese: "多模态视觉模型处理和关联来自多种模态（图像、文本、音频、视频）的信息。CLIP、DALL-E、GPT-4V和Florence是例子。它们学习跨模态的共享表示，实现图像描述、视觉问答、文本到图像生成和开放词汇目标检测等任务。",
    diagram: "",
    terms: ["vision_transformer","image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 199,
    q: "What is the BEiT (BERT Pre-Training of Image Transformers) approach?",
    qChinese: "什么是BEiT（图像Transformer的BERT预训练）方法？",
    options: [
      "A) Pre-training vision transformers by predicting visual tokens of masked image patches",
      "B) Using BERT directly on images",
      "C) Converting images to text before processing",
      "D) Fine-tuning BERT for image tasks"
    ],
    optionsChinese: [
      "A) 通过预测被遮挡图像块的视觉标记来预训练视觉transformer",
      "B) 直接在图像上使用BERT",
      "C) 在处理前将图像转换为文本",
      "D) 为图像任务微调BERT"
    ],
    answer: 0,
    explanation: "BEiT adapts BERT-style pretraining to vision by tokenizing image patches into discrete visual tokens using a learned tokenizer (dVAE), then masking random patches and training the model to predict the original visual tokens. This self-supervised approach learns strong visual representations without labeled data, transferring well to classification and segmentation.",
    explanationChinese: "BEiT通过使用学习的分词器(dVAE)将图像块标记化为离散视觉标记，将BERT风格的预训练适应到视觉领域，然后遮挡随机块并训练模型预测原始视觉标记。这种自监督方法无需标记数据学习强大的视觉表示，在分类和分割中迁移良好。",
    diagram: "",
    terms: ["vision_transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 200,
    q: "What is the Segment Anything Model 2 (SAM 2) designed to handle?",
    qChinese: "Segment Anything Model 2 (SAM 2)设计用于处理什么？",
    options: [
      "A) Only static image segmentation",
      "B) Only text segmentation",
      "C) Both image and video segmentation with promptable, real-time capabilities",
      "D) Only 3D point cloud segmentation"
    ],
    optionsChinese: [
      "A) 仅静态图像分割",
      "B) 仅文本分割",
      "C) 具有可提示、实时能力的图像和视频分割",
      "D) 仅三维点云分割"
    ],
    answer: 2,
    explanation: "SAM 2 extends the original SAM to handle both images and videos with a unified architecture. It introduces a memory mechanism for tracking and segmenting objects across video frames using prompts (points, boxes, masks) on any frame. SAM 2 processes video in real-time and generalizes across diverse visual domains without task-specific fine-tuning.",
    explanationChinese: "SAM 2用统一架构将原始SAM扩展到处理图像和视频。它引入了记忆机制，使用任意帧上的提示（点、框、掩码）在视频帧间跟踪和分割对象。SAM 2实时处理视频，并在不同视觉领域间泛化，无需特定任务微调。",
    diagram: "",
    terms: ["vision_transformer","semantic_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  }
];
