const questionsCV = [
  // ===== IMAGE FUNDAMENTALS (Questions 1–25) =====
  {
    id: 1,
    q: "What is a pixel in digital imaging?",
    qChinese: "数字成像中什么是像素？",
    options: [
      "A) A vector-based drawing element",
      "B) The smallest addressable unit of a raster image",
      "C) A compression artifact in JPEG files",
      "D) A color profile used in printing"
    ],
    optionsChinese: [
      "A) 基于矢量的绘图元素",
      "B) 光栅图像中最小的可寻址单元",
      "C) JPEG文件中的压缩伪影",
      "D) 印刷中使用的颜色配置文件"
    ],
    answer: 1,
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
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    optionsChinese: [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    answer: 2,
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
      "A) (H, W, 3)",
      "B) (3, H, W)",
      "C) (W, H, 3)",
      "D) (H, 3, W)"
    ],
    optionsChinese: [
      "A) (H, W, 3)",
      "B) (3, H, W)",
      "C) (W, H, 3)",
      "D) (H, 3, W)"
    ],
    answer: 1,
    explanation: "PyTorch uses the channels-first format (C, H, W), so a color image tensor has shape (3, H, W). This differs from libraries like NumPy and TensorFlow which default to channels-last (H, W, C). The channels-first layout can be more efficient for GPU convolution operations.",
    explanationChinese: "PyTorch使用通道优先格式(C, H, W)，因此彩色图像张量的形状为(3, H, W)。这与NumPy和TensorFlow等库默认使用的通道最后格式(H, W, C)不同。通道优先布局对GPU卷积运算可能更高效。",
    diagram: "",
    terms: ["image_preprocessing", "convolution_operation"],
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
      "C) YCbCr",
      "D) CMYK"
    ],
    optionsChinese: [
      "A) RGB",
      "B) BGR",
      "C) YCbCr",
      "D) CMYK"
    ],
    answer: 2,
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
      "C) 0 to 255",
      "D) 0 to 1023"
    ],
    optionsChinese: [
      "A) 0到1",
      "B) -128到127",
      "C) 0到255",
      "D) 0到1023"
    ],
    answer: 2,
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
      "A) RGB",
      "B) BGR",
      "C) HSV",
      "D) LAB"
    ],
    optionsChinese: [
      "A) RGB",
      "B) BGR",
      "C) HSV",
      "D) LAB"
    ],
    answer: 1,
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
      "C) Hue, Saturation, Value",
      "D) Highlight, Shadow, Vibrance"
    ],
    optionsChinese: [
      "A) 色调、阴影、明度",
      "B) 色调、饱和度、方差",
      "C) 色调、饱和度、明度",
      "D) 高光、阴影、鲜艳度"
    ],
    answer: 2,
    explanation: "HSV stands for Hue, Saturation, and Value. Hue represents the color type as an angle (0-360 degrees), Saturation represents color purity, and Value represents brightness. HSV is useful for color-based segmentation tasks because it separates color information from illumination.",
    explanationChinese: "HSV代表色调(Hue)、饱和度(Saturation)和明度(Value)。色调表示颜色类型为角度（0-360度），饱和度表示颜色纯度，明度表示亮度。HSV对于基于颜色的分割任务很有用，因为它将颜色信息与光照分离。",
    diagram: "",
    terms: ["image_preprocessing", "semantic_segmentation"],
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
      "B) 3",
      "C) 4",
      "D) 5"
    ],
    optionsChinese: [
      "A) 2",
      "B) 3",
      "C) 4",
      "D) 5"
    ],
    answer: 2,
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
      "C) 16,777,216",
      "D) 4,294,967,296"
    ],
    optionsChinese: [
      "A) 256",
      "B) 65,536",
      "C) 16,777,216",
      "D) 4,294,967,296"
    ],
    answer: 2,
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
      "B) A graph showing the distribution of pixel intensity values",
      "C) A method for sharpening image edges",
      "D) A technique for compressing image files"
    ],
    optionsChinese: [
      "A) 显示图像空间频率分布的图表",
      "B) 显示像素强度值分布的图表",
      "C) 锐化图像边缘的方法",
      "D) 压缩图像文件的技术"
    ],
    answer: 1,
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
    qChinese: "图像中的"宽高比"指的是什么？",
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
      "B) To reduce computational complexity while preserving structural information",
      "C) To improve color accuracy",
      "D) To increase the image resolution"
    ],
    optionsChinese: [
      "A) 增加特征数量",
      "B) 在保留结构信息的同时降低计算复杂度",
      "C) 提高颜色准确度",
      "D) 增加图像分辨率"
    ],
    answer: 1,
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
      "A) The number of bits used to encode each pixel",
      "B) The number of pixels per unit area or length",
      "C) The total file size of the image",
      "D) The number of distinct colors in the image"
    ],
    optionsChinese: [
      "A) 用于编码每个像素的位数",
      "B) 每单位面积或长度的像素数",
      "C) 图像的总文件大小",
      "D) 图像中不同颜色的数量"
    ],
    answer: 1,
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
      "A) The image becomes brighter",
      "B) Aliasing artifacts such as moiré patterns may appear",
      "C) The image loses all color information",
      "D) The file size increases"
    ],
    optionsChinese: [
      "A) 图像变得更亮",
      "B) 可能出现锯齿伪影如摩尔纹",
      "C) 图像丢失所有颜色信息",
      "D) 文件大小增加"
    ],
    answer: 1,
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
    terms: ["image_preprocessing", "semantic_segmentation"],
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
      "B) A multi-scale representation of an image at different resolutions",
      "C) A method for stacking multiple images",
      "D) A 3D reconstruction technique"
    ],
    optionsChinese: [
      "A) 三角形裁剪技术",
      "B) 不同分辨率下图像的多尺度表示",
      "C) 堆叠多个图像的方法",
      "D) 三维重建技术"
    ],
    answer: 1,
    explanation: "An image pyramid is a multi-scale representation where the same image is represented at progressively lower resolutions, forming a pyramid shape. Gaussian and Laplacian pyramids are common types. They are used in scale-invariant feature detection, image blending, and multi-scale object detection.",
    explanationChinese: "图像金字塔是一种多尺度表示，其中同一图像以逐渐降低的分辨率表示，形成金字塔形状。高斯金字塔和拉普拉斯金字塔是常见类型。它们用于尺度不变特征检测、图像融合和多尺度目标检测。",
    diagram: "",
    terms: ["image_preprocessing", "object_detection"],
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
      "B) It adjusts the brightness nonlinearly to match human perception",
      "C) It converts the image to a different color space",
      "D) It removes noise from the image"
    ],
    optionsChinese: [
      "A) 锐化图像中的边缘",
      "B) 非线性调整亮度以匹配人类感知",
      "C) 将图像转换为不同的颜色空间",
      "D) 从图像中去除噪声"
    ],
    answer: 1,
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
    qChinese: "形态学操作"腐蚀"用于什么？",
    options: [
      "A) Expanding the boundaries of foreground objects",
      "B) Shrinking the boundaries of foreground objects",
      "C) Detecting edges in an image",
      "D) Smoothing the color gradient"
    ],
    optionsChinese: [
      "A) 扩展前景对象的边界",
      "B) 缩小前景对象的边界",
      "C) 检测图像中的边缘",
      "D) 平滑颜色渐变"
    ],
    answer: 1,
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
      "B) Lossy discards some data for smaller files; lossless preserves all data exactly",
      "C) Both methods produce identical file sizes",
      "D) Lossless compression only works on grayscale images"
    ],
    optionsChinese: [
      "A) 有损保留所有数据；无损丢弃部分数据",
      "B) 有损丢弃部分数据以获得更小文件；无损精确保留所有数据",
      "C) 两种方法产生相同的文件大小",
      "D) 无损压缩仅适用于灰度图像"
    ],
    answer: 1,
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
      "A) To increase image resolution",
      "B) To ensure consistent scale for neural network training",
      "C) To convert the image to grayscale",
      "D) To apply lossless compression"
    ],
    optionsChinese: [
      "A) 增加图像分辨率",
      "B) 确保神经网络训练的一致尺度",
      "C) 将图像转换为灰度",
      "D) 应用无损压缩"
    ],
    answer: 1,
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
      "B) It centers the data distribution around zero",
      "C) It doubles the image resolution",
      "D) It converts RGB to grayscale"
    ],
    optionsChinese: [
      "A) 移除所有背景像素",
      "B) 将数据分布居中于零附近",
      "C) 将图像分辨率翻倍",
      "D) 将RGB转换为灰度"
    ],
    answer: 1,
    explanation: "Mean subtraction centers the pixel data around zero by subtracting the dataset mean from each image. This removes the average brightness bias, making the network focus on meaningful variations. ImageNet models typically subtract per-channel means (R=123.68, G=116.78, B=103.94) computed over the training set.",
    explanationChinese: "均值减法通过从每个图像中减去数据集均值，将像素数据居中于零附近。这消除了平均亮度偏差，使网络关注有意义的变化。ImageNet模型通常减去在训练集上计算的逐通道均值(R=123.68, G=116.78, B=103.94)。",
    diagram: "",
    terms: ["image_preprocessing", "image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 28,
    q: "Which filter is commonly used for Gaussian blurring?",
    qChinese: "哪种滤波器常用于高斯模糊？",
    options: [
      "A) A kernel with equal weights",
      "B) A kernel with weights following a Gaussian distribution",
      "C) A kernel with binary values only",
      "D) A kernel with random values"
    ],
    optionsChinese: [
      "A) 权重相等的卷积核",
      "B) 权重遵循高斯分布的卷积核",
      "C) 仅有二值的卷积核",
      "D) 随机值的卷积核"
    ],
    answer: 1,
    explanation: "Gaussian blur uses a kernel whose weights follow a 2D Gaussian distribution, giving higher weight to the center pixel and decreasing weights outward. This produces a natural-looking smoothing effect that reduces noise while preserving edges better than a uniform averaging filter.",
    explanationChinese: "高斯模糊使用权重遵循二维高斯分布的卷积核，给中心像素更高的权重，向外权重递减。这产生自然的平滑效果，在减少噪声的同时比均匀平均滤波器更好地保留边缘。",
    diagram: "",
    terms: ["image_preprocessing", "convolution_operation"],
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
      "B) Edge detection by computing intensity gradients",
      "C) Color quantization",
      "D) Image upscaling"
    ],
    optionsChinese: [
      "A) 图像压缩",
      "B) 通过计算强度梯度进行边缘检测",
      "C) 颜色量化",
      "D) 图像上采样"
    ],
    answer: 1,
    explanation: "The Sobel operator detects edges by computing the gradient of image intensity. It uses two 3x3 kernels: one for horizontal gradients (Gx) and one for vertical gradients (Gy). The gradient magnitude sqrt(Gx^2 + Gy^2) highlights edges. It is widely used in classical feature extraction pipelines.",
    explanationChinese: "Sobel算子通过计算图像强度梯度来检测边缘。它使用两个3x3卷积核：一个用于水平梯度(Gx)，一个用于垂直梯度(Gy)。梯度幅值sqrt(Gx^2+Gy^2)突出显示边缘。它广泛用于经典特征提取流程。",
    diagram: "",
    terms: ["image_preprocessing", "convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 30,
    q: "What does histogram equalization achieve?",
    qChinese: "直方图均衡化实现了什么？",
    options: [
      "A) It reduces the image to two colors",
      "B) It spreads out intensity values to enhance contrast",
      "C) It converts the image to frequency domain",
      "D) It removes color channels"
    ],
    optionsChinese: [
      "A) 将图像减少为两种颜色",
      "B) 展开强度值以增强对比度",
      "C) 将图像转换到频率域",
      "D) 移除颜色通道"
    ],
    answer: 1,
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
    terms: ["image_preprocessing", "convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 33,
    q: "What is the purpose of a median filter in image processing?",
    qChinese: "中值滤波器在图像处理中的目的是什么？",
    options: [
      "A) To sharpen edges",
      "B) To remove salt-and-pepper noise while preserving edges",
      "C) To increase brightness",
      "D) To detect corners"
    ],
    optionsChinese: [
      "A) 锐化边缘",
      "B) 在保留边缘的同时去除椒盐噪声",
      "C) 增加亮度",
      "D) 检测角点"
    ],
    answer: 1,
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
      "B) To focus on the most informative central region and match training input size",
      "C) To augment the test dataset",
      "D) To remove watermarks from images"
    ],
    optionsChinese: [
      "A) 增加图像分辨率",
      "B) 聚焦于最具信息量的中心区域并匹配训练输入大小",
      "C) 增强测试数据集",
      "D) 从图像中移除水印"
    ],
    answer: 1,
    explanation: "Center cropping during inference extracts the central portion of an image to match the model's expected input size. This is preferred because objects of interest are often centered in images. During training, random crops provide augmentation, but at test time, center crop gives deterministic, consistent results.",
    explanationChinese: "推理期间的中心裁剪提取图像的中心部分以匹配模型期望的输入大小。这是首选的，因为感兴趣的对象通常位于图像中心。在训练期间，随机裁剪提供增强，但在测试时，中心裁剪给出确定性、一致的结果。",
    diagram: "",
    terms: ["image_preprocessing", "image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 35,
    q: "What does CLAHE stand for and what does it do?",
    qChinese: "CLAHE代表什么，它做什么？",
    options: [
      "A) Color-Level Adaptive Histogram Enhancement; adjusts color balance",
      "B) Contrast Limited Adaptive Histogram Equalization; enhances local contrast",
      "C) Channel-wise Linear Adjustment for High Exposure; corrects overexposure",
      "D) Cumulative Logarithmic Adaptive Histogram Extraction; extracts features"
    ],
    optionsChinese: [
      "A) 颜色级别自适应直方图增强；调整颜色平衡",
      "B) 对比度受限自适应直方图均衡化；增强局部对比度",
      "C) 逐通道线性调整高曝光；校正过度曝光",
      "D) 累积对数自适应直方图提取；提取特征"
    ],
    answer: 1,
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
      "B) 128x128",
      "C) 224x224",
      "D) 512x512"
    ],
    optionsChinese: [
      "A) 32x32",
      "B) 128x128",
      "C) 224x224",
      "D) 512x512"
    ],
    answer: 2,
    explanation: "The standard input size for many ImageNet classification models is 224x224 pixels. AlexNet originally used 227x227, but subsequent architectures like VGG and ResNet standardized on 224x224. Images are typically resized to 256 on the shorter side, then center-cropped to 224x224 during preprocessing.",
    explanationChinese: "许多ImageNet分类模型的标准输入大小是224x224像素。AlexNet最初使用227x227，但后续架构如VGG和ResNet标准化为224x224。图像通常在短边调整为256，然后在预处理期间中心裁剪为224x224。",
    diagram: "",
    terms: ["image_preprocessing", "image_classification", "resnet"],
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
      "B) Standardization (z-score normalization)",
      "C) Histogram equalization",
      "D) Gamma correction"
    ],
    optionsChinese: [
      "A) 最小-最大归一化",
      "B) 标准化（z-score归一化）",
      "C) 直方图均衡化",
      "D) 伽马校正"
    ],
    answer: 1,
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
      "A) Sharpening only",
      "B) Smoothing while preserving edges by considering both spatial and intensity differences",
      "C) Converting color spaces",
      "D) Detecting blob features"
    ],
    optionsChinese: [
      "A) 仅锐化",
      "B) 通过同时考虑空间和强度差异来平滑同时保留边缘",
      "C) 转换颜色空间",
      "D) 检测斑点特征"
    ],
    answer: 1,
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
      "B) To preserve spatial dimensions and retain border information",
      "C) To compress the image",
      "D) To convert the image to frequency domain"
    ],
    optionsChinese: [
      "A) 增加颜色通道数量",
      "B) 保持空间维度并保留边界信息",
      "C) 压缩图像",
      "D) 将图像转换到频率域"
    ],
    answer: 1,
    explanation: "Padding adds extra pixels around the image borders before convolution. Zero-padding is the most common approach. Without padding, the output shrinks after each convolution. Same padding preserves spatial dimensions, ensuring border pixels contribute equally to features and preventing progressive size reduction in deep networks.",
    explanationChinese: "填充在卷积前在图像边界周围添加额外像素。零填充是最常见的方法。没有填充，每次卷积后输出会缩小。Same填充保持空间维度，确保边界像素对特征的贡献相等，并防止深层网络中的逐步尺寸减小。",
    diagram: "",
    terms: ["image_preprocessing", "convolution_operation"],
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
      "B) To enhance edges and fine details by amplifying high-frequency components",
      "C) To reduce the file size",
      "D) To convert the image to binary"
    ],
    optionsChinese: [
      "A) 减少噪声",
      "B) 通过放大高频分量来增强边缘和精细细节",
      "C) 减小文件大小",
      "D) 将图像转换为二值"
    ],
    answer: 1,
    explanation: "Sharpening filters enhance edges and fine details by amplifying high-frequency components in the image. A common approach is unsharp masking, which subtracts a blurred version from the original image and adds the difference back. This increases local contrast at edges without affecting uniform regions.",
    explanationChinese: "锐化滤波器通过放大图像中的高频分量来增强边缘和精细细节。常见方法是反锐化掩蔽，从原始图像中减去模糊版本并将差异加回。这增加了边缘处的局部对比度而不影响均匀区域。",
    diagram: "",
    terms: ["image_preprocessing", "convolution_operation"],
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
      "B) Removing unwanted noise while preserving important image features",
      "C) Reducing the number of color channels",
      "D) Increasing the bit depth of pixels"
    ],
    optionsChinese: [
      "A) 向图像添加随机扰动",
      "B) 在保留重要图像特征的同时去除不需要的噪声",
      "C) 减少颜色通道数量",
      "D) 增加像素的位深度"
    ],
    answer: 1,
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
      "B) It detects regions of rapid intensity change (edges) in all directions",
      "C) It rotates the image",
      "D) It adjusts the color balance"
    ],
    optionsChinese: [
      "A) 模糊图像",
      "B) 检测所有方向上快速强度变化的区域（边缘）",
      "C) 旋转图像",
      "D) 调整颜色平衡"
    ],
    answer: 1,
    explanation: "The Laplacian filter is a second-order derivative operator that detects edges in all directions simultaneously. It computes the sum of second partial derivatives, highlighting regions of rapid intensity change. It is isotropic, meaning it responds equally to edges in any orientation, unlike directional operators like Sobel.",
    explanationChinese: "拉普拉斯滤波器是二阶导数算子，同时检测所有方向的边缘。它计算二阶偏导数之和，突出显示快速强度变化的区域。它是各向同性的，意味着它对任何方向的边缘响应相同，不像Sobel等方向性算子。",
    diagram: "",
    terms: ["image_preprocessing", "convolution_operation"],
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
      "B) To expand dark pixel values and compress bright pixel values",
      "C) To convert the image to binary",
      "D) To increase the number of channels"
    ],
    optionsChinese: [
      "A) 去除图像中的所有噪声",
      "B) 扩展暗像素值并压缩亮像素值",
      "C) 将图像转换为二值",
      "D) 增加通道数量"
    ],
    answer: 1,
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
      "B) Resizing scales the entire image; cropping selects a sub-region without scaling",
      "C) Both operations produce the same result",
      "D) Cropping increases resolution; resizing decreases it"
    ],
    optionsChinese: [
      "A) 调整大小改变像素值；裁剪添加新像素",
      "B) 调整大小缩放整个图像；裁剪选择子区域而不缩放",
      "C) 两种操作产生相同的结果",
      "D) 裁剪增加分辨率；调整大小减小分辨率"
    ],
    answer: 1,
    explanation: "Resizing scales the entire image to a new dimension using interpolation, changing all pixel positions. Cropping extracts a rectangular sub-region from the image without altering pixel values or scale. Both are common preprocessing steps, often combined: resize first to a larger size, then crop to the target dimensions.",
    explanationChinese: "调整大小使用插值将整个图像缩放到新维度，改变所有像素位置。裁剪从图像中提取矩形子区域而不改变像素值或比例。两者都是常见的预处理步骤，通常组合使用：先调整到较大尺寸，然后裁剪到目标维度。",
    diagram: "",
    terms: ["image_preprocessing", "data_augmentation"],
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
      "C) 28x28",
      "D) 27x27"
    ],
    optionsChinese: [
      "A) 32x32",
      "B) 30x30",
      "C) 28x28",
      "D) 27x27"
    ],
    answer: 2,
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
      "A) The size of the convolution kernel",
      "B) The step size of the kernel as it slides across the input",
      "C) The number of output channels",
      "D) The activation function applied after convolution"
    ],
    optionsChinese: [
      "A) 卷积核的大小",
      "B) 卷积核在输入上滑动时的步长大小",
      "C) 输出通道的数量",
      "D) 卷积后应用的激活函数"
    ],
    answer: 1,
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
      "B) Padding is added so the output spatial dimensions equal the input dimensions",
      "C) The input is padded with ones",
      "D) The kernel is padded to match the input size"
    ],
    optionsChinese: [
      "A) 不应用填充",
      "B) 添加填充使输出空间维度等于输入维度",
      "C) 输入用1填充",
      "D) 卷积核被填充以匹配输入大小"
    ],
    answer: 1,
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
      "B) The output of applying a convolution filter to an input",
      "C) The weights of the fully connected layer",
      "D) The loss function gradient"
    ],
    optionsChinese: [
      "A) 原始输入图像",
      "B) 对输入应用卷积滤波器的输出",
      "C) 全连接层的权重",
      "D) 损失函数梯度"
    ],
    answer: 1,
    explanation: "A feature map is the output produced when a convolution filter slides across the input and computes dot products at each location. Each filter produces one feature map that highlights specific patterns like edges or textures. Multiple filters in a layer produce a stack of feature maps representing different features.",
    explanationChinese: "特征图是卷积滤波器在输入上滑动并在每个位置计算点积时产生的输出。每个滤波器产生一个特征图，突出显示特定模式如边缘或纹理。一层中的多个滤波器产生一叠特征图，表示不同的特征。",
    diagram: "",
    terms: ["convolution_operation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  }
];
