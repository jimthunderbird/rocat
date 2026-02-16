const questionsCV = [
  {
    id: 1,
    q: "What is the basic principle behind the pinhole camera model?",
    qChinese: "针孔相机模型的基本原理是什么？",
    options: [
      "A) Multiple light sources converge at a single focal point",
      "B) Light is refracted through a glass lens to form an image",
      "C) Light passes through a small aperture and projects an inverted image on the opposite surface",
      "D) Light reflects off a mirror to create a virtual image"
    ],
    optionsChinese: [
      "A) 多个光源汇聚在一个焦点上",
      "B) 光线通过玻璃透镜折射形成图像",
      "C) 光线通过一个小孔并在对面表面投射出倒像",
      "D) 光线从镜子反射形成虚像"
    ],
    answer: 2,
    explanation: "The pinhole camera model assumes light travels in straight lines through an infinitely small aperture. Each scene point projects to exactly one image point, creating an inverted image on the image plane. This model forms the mathematical basis for perspective projection used throughout computer vision.",
    explanationChinese: "针孔相机模型假设光线通过一个无限小的孔径沿直线传播。每个场景点恰好投影到一个图像点，在像平面上形成倒像。该模型构成了计算机视觉中透视投影的数学基础。",
    diagram: "",
    terms: ["camera_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 2,
    q: "In the pinhole camera model, what does the focal length determine?",
    qChinese: "在针孔相机模型中，焦距决定了什么？",
    options: [
      "A) The color accuracy of the captured image",
      "B) The distance between the pinhole and the image plane, affecting magnification",
      "C) The maximum resolution of the sensor",
      "D) The amount of noise in the image"
    ],
    optionsChinese: [
      "A) 拍摄图像的颜色准确性",
      "B) 针孔与像平面之间的距离，影响放大率",
      "C) 传感器的最大分辨率",
      "D) 图像中的噪声量"
    ],
    answer: 1,
    explanation: "The focal length in a pinhole camera is the distance from the pinhole to the image plane. A longer focal length produces a larger (more magnified) image of the scene, while a shorter focal length captures a wider field of view with less magnification. It directly controls the scale of projection.",
    explanationChinese: "针孔相机中的焦距是从针孔到像平面的距离。较长的焦距会产生更大（更放大）的场景图像，而较短的焦距以较少的放大倍数捕获更宽的视野。它直接控制投影的比例。",
    diagram: "",
    terms: ["camera_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 3,
    q: "What is the intrinsic camera matrix K used for in camera calibration?",
    qChinese: "在相机标定中，内参矩阵K的作用是什么？",
    options: [
      "A) It corrects lens distortion artifacts",
      "B) It describes the camera's position and orientation in the world",
      "C) It maps 3D world coordinates directly to 2D pixel coordinates including focal length, principal point, and skew",
      "D) It adjusts the white balance of the captured image"
    ],
    optionsChinese: [
      "A) 它校正镜头畸变伪影",
      "B) 它描述相机在世界中的位置和方向",
      "C) 它将三维世界坐标直接映射到二维像素坐标，包含焦距、主点和倾斜参数",
      "D) 它调整拍摄图像的白平衡"
    ],
    answer: 2,
    explanation: "The intrinsic matrix K is a 3x3 upper-triangular matrix encoding internal camera parameters: focal lengths fx and fy, principal point coordinates cx and cy, and skew coefficient. It transforms normalized camera coordinates to pixel coordinates, independent of camera pose in the world.",
    explanationChinese: "内参矩阵K是一个3x3上三角矩阵，编码相机内部参数：焦距fx和fy、主点坐标cx和cy以及倾斜系数。它将归一化的相机坐标转换为像素坐标，与相机在世界中的位姿无关。",
    diagram: "",
    terms: ["camera_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 4,
    q: "What type of distortion causes straight lines to appear curved near the edges of an image?",
    qChinese: "什么类型的畸变导致直线在图像边缘附近出现弯曲？",
    options: [
      "A) Chromatic aberration",
      "B) Radial lens distortion",
      "C) Motion blur",
      "D) Vignetting"
    ],
    optionsChinese: [
      "A) 色差",
      "B) 径向镜头畸变",
      "C) 运动模糊",
      "D) 暗角"
    ],
    answer: 1,
    explanation: "Radial lens distortion causes straight lines to appear curved, especially away from the image center. Barrel distortion bends lines outward while pincushion distortion bends them inward. This results from imperfect lens geometry and is modeled using polynomial coefficients during camera calibration.",
    explanationChinese: "径向镜头畸变导致直线出现弯曲，尤其在远离图像中心的地方。桶形畸变使线条向外弯曲，而枕形畸变使线条向内弯曲。这是由于镜头几何不完美造成的，在相机标定中使用多项式系数进行建模。",
    diagram: "",
    terms: ["camera_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 5,
    q: "The extrinsic camera parameters consist of which components?",
    qChinese: "相机外参由哪些组成部分构成？",
    options: [
      "A) Focal length and principal point",
      "B) Rotation matrix and translation vector",
      "C) Lens distortion coefficients",
      "D) Image resolution and pixel size"
    ],
    optionsChinese: [
      "A) 焦距和主点",
      "B) 旋转矩阵和平移向量",
      "C) 镜头畸变系数",
      "D) 图像分辨率和像素大小"
    ],
    answer: 1,
    explanation: "Extrinsic parameters describe the camera's pose in the world coordinate system. The rotation matrix R (3x3) encodes the camera's orientation, and the translation vector t (3x1) encodes its position. Together they form the 3x4 extrinsic matrix [R|t] transforming world to camera coordinates.",
    explanationChinese: "外参描述相机在世界坐标系中的位姿。旋转矩阵R（3x3）编码相机的方向，平移向量t（3x1）编码其位置。它们共同构成3x4外参矩阵[R|t]，将世界坐标转换为相机坐标。",
    diagram: "",
    terms: ["camera_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 6,
    q: "In perspective projection, what happens to parallel lines in 3D space when projected onto a 2D image?",
    qChinese: "在透视投影中，三维空间中的平行线投影到二维图像上会发生什么？",
    options: [
      "A) They remain parallel in the image",
      "B) They disappear entirely from the image",
      "C) They become perpendicular to each other",
      "D) They converge to a vanishing point",
    ],
    optionsChinese: [
      "A) 它们在图像中保持平行",
      "B) 它们完全从图像中消失",
      "C) 它们变得相互垂直",
      "D) 它们汇聚到一个消失点",
    ],
    answer: 3,
    explanation: "Under perspective projection, parallel lines in 3D that are not parallel to the image plane converge to a vanishing point in the 2D image. This is a fundamental property of perspective geometry. Lines parallel to the image plane remain parallel after projection.",
    explanationChinese: "在透视投影下，三维空间中不平行于像平面的平行线会在二维图像中汇聚到一个消失点。这是透视几何的基本性质。平行于像平面的线在投影后仍然保持平行。",
    diagram: "",
    terms: ["camera_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 7,
    q: "What is the purpose of camera calibration using a checkerboard pattern?",
    qChinese: "使用棋盘格图案进行相机标定的目的是什么？",
    options: [
      "A) To estimate intrinsic and extrinsic parameters and lens distortion coefficients",
      "B) To measure the camera's battery life",
      "C) To increase the camera's resolution",
      "D) To test the camera's autofocus speed"
    ],
    optionsChinese: [
      "A) 估计内参、外参和镜头畸变系数",
      "B) 测量相机的电池寿命",
      "C) 提高相机的分辨率",
      "D) 测试相机的自动对焦速度"
    ],
    answer: 0,
    explanation: "Camera calibration with a checkerboard pattern estimates the camera's intrinsic parameters, extrinsic parameters, and distortion coefficients. The known geometry of the checkerboard provides precise 3D-to-2D correspondences needed to solve for these parameters using methods like Zhang's algorithm.",
    explanationChinese: "使用棋盘格图案进行相机标定可以估计相机的内参、外参和畸变系数。棋盘格的已知几何形状提供了使用张正友算法等方法求解这些参数所需的精确三维到二维对应关系。",
    diagram: "",
    terms: ["camera_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 8,
    q: "What does the projection matrix P combine in the full camera model?",
    qChinese: "在完整相机模型中，投影矩阵P组合了什么？",
    options: [
      "A) Only the intrinsic parameters",
      "B) The image resolution and aspect ratio",
      "C) Only the rotation and translation",
      "D) The intrinsic matrix K multiplied by the extrinsic matrix [R|t]",
    ],
    optionsChinese: [
      "A) 仅内参",
      "B) 图像分辨率和纵横比",
      "C) 仅旋转和平移",
      "D) 内参矩阵K乘以外参矩阵[R|t]",
    ],
    answer: 3,
    explanation: "The 3x4 projection matrix P = K[R|t] combines intrinsic and extrinsic parameters into a single transformation. It maps homogeneous 3D world coordinates directly to homogeneous 2D pixel coordinates. This compact representation is fundamental to multi-view geometry and 3D reconstruction algorithms.",
    explanationChinese: "3x4投影矩阵P = K[R|t]将内参和外参组合成一个单一变换。它将齐次三维世界坐标直接映射到齐次二维像素坐标。这种紧凑表示是多视图几何和三维重建算法的基础。",
    diagram: "",
    terms: ["camera_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 9,
    q: "In an orthographic projection, how does object size change with distance from the camera?",
    qChinese: "在正交投影中，物体大小如何随距相机的距离变化？",
    options: [
      "A) Objects appear smaller as they move farther away",
      "B) Object size remains constant regardless of distance",
      "C) Objects appear larger as they move farther away",
      "D) Objects become distorted but maintain their area"
    ],
    optionsChinese: [
      "A) 物体随着距离增大而显得更小",
      "B) 物体大小不随距离变化而保持恒定",
      "C) 物体随着距离增大而显得更大",
      "D) 物体会变形但保持面积不变"
    ],
    answer: 1,
    explanation: "Orthographic projection uses parallel projection rays, so object size in the image does not change with depth. This approximation works when scene depth is small relative to camera distance. It simplifies geometric analysis but lacks the depth cues that perspective projection provides.",
    explanationChinese: "正交投影使用平行投影光线，因此图像中物体的大小不随深度变化。当场景深度相对于相机距离较小时，这种近似是有效的。它简化了几何分析，但缺乏透视投影提供的深度线索。",
    diagram: "",
    terms: ["camera_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 10,
    q: "What is the principal point in a camera model?",
    qChinese: "相机模型中的主点是什么？",
    options: [
      "A) The center of the lens",
      "B) The focal point of the lens system",
      "C) The point of maximum sharpness in the image",
      "D) The point where the optical axis intersects the image plane",
    ],
    optionsChinese: [
      "A) 镜头的中心",
      "B) 镜头系统的焦点",
      "C) 图像中最大锐度的点",
      "D) 光轴与像平面的交点",
    ],
    answer: 3,
    explanation: "The principal point is where the camera's optical axis perpendicularly intersects the image plane. Ideally it is at the image center, but manufacturing imperfections often cause a slight offset. The principal point coordinates (cx, cy) are encoded in the intrinsic matrix K.",
    explanationChinese: "主点是相机光轴垂直穿过像平面的交点。理想情况下它位于图像中心，但制造缺陷通常会导致轻微偏移。主点坐标(cx, cy)编码在内参矩阵K中。",
    diagram: "",
    terms: ["camera_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 11,
    q: "Which coordinate system transformation is NOT part of the standard camera imaging pipeline?",
    qChinese: "以下哪个坐标系变换不属于标准相机成像流程？",
    options: [
      "A) World coordinates to camera coordinates",
      "B) Pixel coordinates to frequency domain coordinates",
      "C) Normalized image coordinates to pixel coordinates",
      "D) Camera coordinates to normalized image coordinates",
    ],
    optionsChinese: [
      "A) 世界坐标到相机坐标",
      "B) 像素坐标到频域坐标",
      "C) 归一化图像坐标到像素坐标",
      "D) 相机坐标到归一化图像坐标",
    ],
    answer: 1,
    explanation: "The standard imaging pipeline transforms world coordinates to camera coordinates via extrinsics, then to normalized image coordinates via perspective division, then to pixel coordinates via the intrinsic matrix. Frequency domain transformation is a separate image processing operation, not part of the geometric imaging pipeline.",
    explanationChinese: "标准成像流程通过外参将世界坐标转换为相机坐标，然后通过透视除法转换为归一化图像坐标，再通过内参矩阵转换为像素坐标。频域变换是单独的图像处理操作，不属于几何成像流程。",
    diagram: "",
    terms: ["camera_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 12,
    q: "What problem does a very small pinhole aperture cause in practice?",
    qChinese: "在实践中，非常小的针孔光圈会导致什么问题？",
    options: [
      "A) Diffraction effects that blur the image and very low light throughput",
      "B) Color distortion in the image",
      "C) Barrel distortion at the edges",
      "D) Increased field of view beyond 180 degrees"
    ],
    optionsChinese: [
      "A) 衍射效应使图像模糊以及非常低的光通量",
      "B) 图像中的颜色失真",
      "C) 边缘的桶形畸变",
      "D) 视场角增大超过180度"
    ],
    answer: 0,
    explanation: "While an ideal pinhole produces sharp images, a real tiny aperture causes diffraction, spreading light waves and blurring the image. Additionally, the small opening allows very little light to pass through, requiring extremely long exposure times. Practical cameras use lenses to gather more light while maintaining focus.",
    explanationChinese: "虽然理想的针孔能产生清晰的图像，但实际的微小光圈会引起衍射，使光波扩散并模糊图像。此外，小开口只允许很少的光通过，需要极长的曝光时间。实际相机使用透镜来收集更多光线同时保持对焦。",
    diagram: "",
    terms: ["camera_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 13,
    q: "What is the thin lens equation that relates object distance, image distance, and focal length?",
    qChinese: "将物距、像距和焦距联系起来的薄透镜方程是什么？",
    options: [
      "A) f = d_o + d_i",
      "B) f = d_o * d_i",
      "C) 1/f = 1/d_o + 1/d_i",
      "D) 1/f = d_o - d_i"
    ],
    optionsChinese: [
      "A) f = d_o + d_i",
      "B) f = d_o * d_i",
      "C) 1/f = 1/d_o + 1/d_i",
      "D) 1/f = d_o - d_i"
    ],
    answer: 2,
    explanation: "The thin lens equation 1/f = 1/d_o + 1/d_i relates focal length f, object distance d_o, and image distance d_i. When an object is at infinity, d_i equals f. This equation governs focus behavior in real camera systems and determines the relationship between object and image positions.",
    explanationChinese: "薄透镜方程1/f = 1/d_o + 1/d_i将焦距f、物距d_o和像距d_i联系起来。当物体在无穷远处时，d_i等于f。该方程控制实际相机系统中的对焦行为，并确定物体和图像位置之间的关系。",
    diagram: "",
    terms: ["camera_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 14,
    q: "What is the field of view (FOV) of a camera primarily determined by?",
    qChinese: "相机的视场角（FOV）主要由什么决定？",
    options: [
      "A) The number of megapixels on the sensor",
      "B) The focal length and sensor size",
      "C) The shutter speed setting",
      "D) The ISO sensitivity level"
    ],
    optionsChinese: [
      "A) 传感器上的像素数量",
      "B) 焦距和传感器尺寸",
      "C) 快门速度设置",
      "D) ISO感光度级别"
    ],
    answer: 1,
    explanation: "The field of view is determined by the ratio of sensor size to focal length. A shorter focal length or larger sensor yields a wider FOV, while a longer focal length or smaller sensor narrows it. The relationship is FOV = 2 * arctan(sensor_size / (2 * focal_length)).",
    explanationChinese: "视场角由传感器尺寸与焦距的比值决定。较短的焦距或较大的传感器产生更宽的视场角，而较长的焦距或较小的传感器则缩小视场角。关系为FOV = 2 * arctan(传感器尺寸 / (2 * 焦距))。",
    diagram: "",
    terms: ["camera_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 15,
    q: "In homogeneous coordinates, a 2D point (x, y) is represented as which of the following?",
    qChinese: "在齐次坐标中，二维点(x, y)表示为以下哪种形式？",
    options: [
      "A) (x, y, 0)",
      "B) (x, y, x+y)",
      "C) (x, y, 1)",
      "D) (1, x, y)"
    ],
    optionsChinese: [
      "A) (x, y, 0)",
      "B) (x, y, x+y)",
      "C) (x, y, 1)",
      "D) (1, x, y)"
    ],
    answer: 2,
    explanation: "In homogeneous coordinates, a 2D Euclidean point (x, y) is represented as (x, y, 1) by appending 1 as the third component. More generally, (kx, ky, k) for any nonzero k represents the same point. This representation enables projective transformations to be expressed as matrix multiplications.",
    explanationChinese: "在齐次坐标中，二维欧几里得点(x, y)通过附加1作为第三个分量表示为(x, y, 1)。更一般地，对于任何非零k，(kx, ky, k)表示同一个点。这种表示使投影变换能够表示为矩阵乘法。",
    diagram: "",
    terms: ["camera_model", "homography"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 16,
    q: "Which type of lens distortion causes a magnification that increases with distance from the optical center?",
    qChinese: "哪种类型的镜头畸变导致放大率随距光心距离增大而增加？",
    options: [
      "A) Barrel distortion",
      "B) Pincushion distortion",
      "C) Tangential distortion",
      "D) Chromatic distortion"
    ],
    optionsChinese: [
      "A) 桶形畸变",
      "B) 枕形畸变",
      "C) 切向畸变",
      "D) 色差畸变"
    ],
    answer: 1,
    explanation: "Pincushion distortion occurs when magnification increases with distance from the optical center, causing image points to be displaced outward. Straight lines bow inward toward the center. Barrel distortion is the opposite, where magnification decreases with distance. Both are forms of radial distortion.",
    explanationChinese: "枕形畸变发生在放大率随距光心距离增大而增加时，导致图像点向外移位。直线向中心内弯。桶形畸变恰好相反，放大率随距离减小。两者都是径向畸变的形式。",
    diagram: "",
    terms: ["camera_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 17,
    q: "What does depth of field refer to in camera optics?",
    qChinese: "在相机光学中，景深指的是什么？",
    options: [
      "A) The range of distances over which objects appear acceptably sharp",
      "B) The maximum distance the camera can focus on",
      "C) The distance between the camera and the nearest object",
      "D) The total number of depth layers in a 3D scene"
    ],
    optionsChinese: [
      "A) 物体看起来足够清晰的距离范围",
      "B) 相机能对焦的最远距离",
      "C) 相机与最近物体之间的距离",
      "D) 三维场景中深度层的总数"
    ],
    answer: 0,
    explanation: "Depth of field is the range of distances from the camera within which objects appear acceptably sharp in the image. It is controlled by aperture size, focal length, and focus distance. A smaller aperture increases depth of field, while a larger aperture produces shallow depth of field with background blur.",
    explanationChinese: "景深是相机前方物体在图像中看起来足够清晰的距离范围。它由光圈大小、焦距和对焦距离控制。较小的光圈增加景深，而较大的光圈产生浅景深和背景模糊效果。",
    diagram: "",
    terms: ["camera_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 18,
    q: "How many degrees of freedom does a 3x3 homogeneous intrinsic matrix K typically have?",
    qChinese: "3x3齐次内参矩阵K通常有多少个自由度？",
    options: [
      "A) 3",
      "B) 6",
      "C) 9",
      "D) 5",
    ],
    optionsChinese: [
      "A) 3",
      "B) 6",
      "C) 9",
      "D) 5",
    ],
    answer: 3,
    explanation: "The intrinsic matrix K has 5 degrees of freedom: focal lengths fx and fy (which may differ for non-square pixels), the principal point coordinates cx and cy, and the skew coefficient s. Modern cameras typically have zero skew and square pixels, reducing effective parameters to 3.",
    explanationChinese: "内参矩阵K有5个自由度：焦距fx和fy（非方形像素时可能不同）、主点坐标cx和cy以及倾斜系数s。现代相机通常具有零倾斜和方形像素，将有效参数减少到3个。",
    diagram: "",
    terms: ["camera_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 19,
    q: "What is the circle of confusion in lens-based imaging?",
    qChinese: "在基于透镜的成像中，弥散圆是什么？",
    options: [
      "A) A circular artifact caused by diffraction",
      "B) A circular pattern used for camera calibration",
      "C) The blurred disc formed by a point source that is not perfectly in focus",
      "D) The circular boundary of the camera's field of view"
    ],
    optionsChinese: [
      "A) 由衍射引起的圆形伪影",
      "B) 用于相机标定的圆形图案",
      "C) 未完全对焦的点光源形成的模糊圆盘",
      "D) 相机视场的圆形边界"
    ],
    answer: 2,
    explanation: "The circle of confusion is the blurred disc formed when a point light source is not exactly at the focus distance. Points within the depth of field have circles of confusion smaller than a pixel, appearing sharp. The size of this circle depends on aperture, focal length, and the point's distance from the focus plane.",
    explanationChinese: "弥散圆是当点光源不在精确对焦距离上时形成的模糊圆盘。景深范围内的点的弥散圆小于一个像素，看起来是清晰的。该圆的大小取决于光圈、焦距和该点到对焦平面的距离。",
    diagram: "",
    terms: ["camera_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 20,
    q: "What is the purpose of the image coordinate system's origin typically placed at the top-left corner?",
    qChinese: "将图像坐标系原点通常放置在左上角的目的是什么？",
    options: [
      "A) To reduce computation in Fourier transforms",
      "B) To simplify lens distortion calculations",
      "C) To match the human visual system's scanning pattern",
      "D) To match the way CCD sensors read out data row by row from top to bottom",
    ],
    optionsChinese: [
      "A) 减少傅里叶变换中的计算量",
      "B) 简化镜头畸变计算",
      "C) 匹配人类视觉系统的扫描模式",
      "D) 与CCD传感器从上到下逐行读取数据的方式匹配",
    ],
    answer: 3,
    explanation: "The top-left origin convention matches how image sensors read pixel data: scanning left to right, top to bottom. This convention aligns with memory storage in row-major order, making pixel access efficient. The u-axis points right and the v-axis points downward in this standard image coordinate system.",
    explanationChinese: "左上角原点的惯例与图像传感器读取像素数据的方式匹配：从左到右、从上到下扫描。这一惯例与行优先存储方式一致，使像素访问高效。在此标准图像坐标系中，u轴向右，v轴向下。",
    diagram: "",
    terms: ["camera_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 21,
    q: "What is the Bayer filter pattern used for in digital cameras?",
    qChinese: "拜耳滤色器图案在数码相机中的用途是什么？",
    options: [
      "A) Reducing lens distortion",
      "B) Arranging color filters over the sensor to capture color information with a single sensor array",
      "C) Increasing the dynamic range of the sensor",
      "D) Improving autofocus accuracy"
    ],
    optionsChinese: [
      "A) 减少镜头畸变",
      "B) 在传感器上排列彩色滤光片，用单个传感器阵列捕获颜色信息",
      "C) 增加传感器的动态范围",
      "D) 提高自动对焦精度"
    ],
    answer: 1,
    explanation: "The Bayer pattern arranges red, green, and blue color filters over individual sensor pixels in a repeating 2x2 pattern with two green, one red, and one blue filter. Demosaicing algorithms then interpolate the missing color values at each pixel location to produce a full-color image.",
    explanationChinese: "拜耳图案在各个传感器像素上排列红色、绿色和蓝色彩色滤光片，以2x2重复图案排列，包含两个绿色、一个红色和一个蓝色滤光片。去马赛克算法然后在每个像素位置插值缺失的颜色值以产生全彩图像。",
    diagram: "",
    terms: ["camera_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 22,
    q: "What is vignetting in the context of camera image formation?",
    qChinese: "在相机成像的背景下，暗角是什么？",
    options: [
      "A) A gradual darkening of the image toward the edges compared to the center",
      "B) Blurring caused by camera shake",
      "C) Color fringing along high-contrast edges",
      "D) Geometric distortion of straight lines"
    ],
    optionsChinese: [
      "A) 图像从中心到边缘逐渐变暗",
      "B) 由相机抖动引起的模糊",
      "C) 沿高对比度边缘的色彩边纹",
      "D) 直线的几何畸变"
    ],
    answer: 0,
    explanation: "Vignetting is the gradual reduction of image brightness from center to periphery. It occurs due to the geometry of light rays passing through the lens at oblique angles, mechanical obstruction by lens housings, and the natural falloff following the cos-fourth law. It can be corrected through flat-field calibration.",
    explanationChinese: "暗角是图像亮度从中心到边缘逐渐降低的现象。它是由于光线以倾斜角度通过透镜的几何关系、镜头外壳的机械遮挡以及遵循余弦四次方定律的自然衰减造成的。可以通过平场校准来校正。",
    diagram: "",
    terms: ["camera_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 23,
    q: "In a stereo camera rig, what does the baseline refer to?",
    qChinese: "在立体相机装置中，基线指的是什么？",
    options: [
      "A) The focal length of each camera",
      "B) The vertical offset between the two image planes",
      "C) The distance between the optical centers of the two cameras",
      "D) The angle between the cameras' optical axes"
    ],
    optionsChinese: [
      "A) 每个相机的焦距",
      "B) 两个像平面之间的垂直偏移",
      "C) 两个相机光心之间的距离",
      "D) 相机光轴之间的角度"
    ],
    answer: 2,
    explanation: "The baseline is the distance between the optical centers (or projection centers) of two cameras in a stereo setup. A larger baseline provides better depth resolution for distant objects but may cause difficulties in matching nearby objects. The baseline directly affects the depth estimation accuracy through the disparity-depth relationship.",
    explanationChinese: "基线是立体装置中两个相机光心（或投影中心）之间的距离。较大的基线为远处物体提供更好的深度分辨率，但可能导致近处物体匹配困难。基线通过视差-深度关系直接影响深度估计精度。",
    diagram: "",
    terms: ["camera_model", "stereo_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 24,
    q: "What does the aperture (f-number) of a lens control?",
    qChinese: "镜头的光圈（f值）控制什么？",
    options: [
      "A) The color temperature of the image",
      "B) The maximum shutter speed available",
      "C) The amount of light entering the camera and the depth of field",
      "D) The zoom level of the lens"
    ],
    optionsChinese: [
      "A) 图像的色温",
      "B) 可用的最大快门速度",
      "C) 进入相机的光量和景深",
      "D) 镜头的变焦级别"
    ],
    answer: 2,
    explanation: "The f-number (f/N) is the ratio of focal length to aperture diameter. A smaller f-number means a larger aperture opening, allowing more light but reducing depth of field. A larger f-number means a smaller opening, less light but greater depth of field. This tradeoff is fundamental in photography and computer vision.",
    explanationChinese: "f值（f/N）是焦距与光圈直径的比值。较小的f值意味着更大的光圈开口，允许更多光线但减少景深。较大的f值意味着更小的开口，更少的光线但更大的景深。这种权衡在摄影和计算机视觉中是基本的。",
    diagram: "",
    terms: ["camera_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 25,
    q: "What is the weak perspective projection model?",
    qChinese: "弱透视投影模型是什么？",
    options: [
      "A) A perspective model that ignores lens distortion",
      "B) An approximation where all points are assumed to be at a similar depth, combining orthographic projection with uniform scaling",
      "C) A projection model specifically designed for wide-angle lenses",
      "D) A model that only projects horizontal lines correctly"
    ],
    optionsChinese: [
      "A) 忽略镜头畸变的透视模型",
      "B) 假设所有点在相似深度的近似模型，将正交投影与均匀缩放相结合",
      "C) 专为广角镜头设计的投影模型",
      "D) 只能正确投影水平线的模型"
    ],
    answer: 1,
    explanation: "Weak perspective projection approximates full perspective by assuming the scene depth variation is small compared to the average distance from the camera. It applies a single scale factor (based on average depth) followed by orthographic projection. This simplifies analysis while retaining some perspective effects.",
    explanationChinese: "弱透视投影通过假设场景深度变化相对于与相机的平均距离较小来近似完整透视。它应用单个缩放因子（基于平均深度）然后进行正交投影。这简化了分析同时保留了一些透视效果。",
    diagram: "",
    terms: ["camera_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 26,
    q: "What is the primary purpose of image filtering with convolution?",
    qChinese: "使用卷积进行图像滤波的主要目的是什么？",
    options: [
      "A) To change the image file format",
      "B) To convert the image to a different color space",
      "C) To increase the number of pixels in an image",
      "D) To modify pixel values based on their local neighborhood using a kernel",
    ],
    optionsChinese: [
      "A) 更改图像文件格式",
      "B) 将图像转换为不同的颜色空间",
      "C) 增加图像中的像素数量",
      "D) 使用核基于像素的局部邻域修改像素值",
    ],
    answer: 3,
    explanation: "Image convolution replaces each pixel with a weighted sum of its neighbors, defined by a kernel (filter). Different kernels achieve different effects: smoothing removes noise, sharpening enhances edges, and derivative kernels detect gradients. Convolution is the fundamental building block of many computer vision algorithms.",
    explanationChinese: "图像卷积用由核（滤波器）定义的邻域加权和替换每个像素。不同的核实现不同的效果：平滑去除噪声、锐化增强边缘、导数核检测梯度。卷积是许多计算机视觉算法的基本构建块。",
    diagram: "",
    terms: ["image_filtering", "convolution_cv"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 27,
    q: "What is the difference between convolution and correlation in image processing?",
    qChinese: "在图像处理中，卷积和相关之间有什么区别？",
    options: [
      "A) They are completely unrelated operations",
      "B) Convolution operates in the frequency domain only",
      "C) Correlation can only be applied to grayscale images",
      "D) Convolution flips the kernel 180 degrees before sliding it over the image, while correlation does not",
    ],
    optionsChinese: [
      "A) 它们是完全无关的操作",
      "B) 卷积只能在频域中操作",
      "C) 相关只能应用于灰度图像",
      "D) 卷积在滑动核之前将其翻转180度，而相关不翻转",
    ],
    answer: 3,
    explanation: "Convolution flips the kernel both horizontally and vertically (180-degree rotation) before computing the weighted sum, while correlation computes the sum directly without flipping. For symmetric kernels like Gaussian, convolution and correlation produce identical results. The distinction matters for asymmetric kernels.",
    explanationChinese: "卷积在计算加权和之前将核水平和垂直翻转（180度旋转），而相关直接计算加权和而不翻转。对于高斯等对称核，卷积和相关产生相同的结果。这种区别对于非对称核很重要。",
    diagram: "",
    terms: ["image_filtering", "convolution_cv"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 28,
    q: "A 3x3 Gaussian kernel with sigma=0.5 has what characteristic shape of weights?",
    qChinese: "sigma=0.5的3x3高斯核具有什么特征形状的权重？",
    options: [
      "A) The center has the highest weight, decreasing toward the edges following a bell curve",
      "B) All weights are equal",
      "C) The corners have the highest weights",
      "D) Only the center pixel has a nonzero weight"
    ],
    optionsChinese: [
      "A) 中心具有最高权重，向边缘按钟形曲线递减",
      "B) 所有权重相等",
      "C) 角落具有最高权重",
      "D) 只有中心像素具有非零权重"
    ],
    answer: 0,
    explanation: "A Gaussian kernel has weights sampled from a 2D Gaussian function centered at the kernel center. The center pixel receives the highest weight, with values decreasing smoothly toward the edges following the bell-curve shape. The weights sum to 1 for brightness preservation. Sigma controls the rate of falloff.",
    explanationChinese: "高斯核的权重从以核中心为中心的二维高斯函数中采样。中心像素获得最高权重，值沿钟形曲线平滑地向边缘递减。权重之和为1以保持亮度。Sigma控制衰减速率。",
    diagram: "",
    terms: ["image_filtering", "convolution_cv"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 29,
    q: "What is the Sobel operator primarily used for?",
    qChinese: "Sobel算子主要用于什么？",
    options: [
      "A) Image compression",
      "B) Image resizing",
      "C) Color space conversion",
      "D) Computing image gradients for edge detection",
    ],
    optionsChinese: [
      "A) 图像压缩",
      "B) 图像缩放",
      "C) 颜色空间转换",
      "D) 计算用于边缘检测的图像梯度",
    ],
    answer: 3,
    explanation: "The Sobel operator computes approximate image gradients using two 3x3 kernels: one for horizontal and one for vertical derivatives. It combines Gaussian smoothing with differentiation, making it more robust to noise than simple finite differences. The gradient magnitude and direction reveal edge locations and orientations.",
    explanationChinese: "Sobel算子使用两个3x3核计算近似图像梯度：一个用于水平导数，一个用于垂直导数。它将高斯平滑与微分相结合，使其比简单有限差分对噪声更鲁棒。梯度幅值和方向揭示边缘位置和方向。",
    diagram: "",
    terms: ["image_filtering", "edge_detection", "convolution_cv"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 30,
    q: "What does a Laplacian filter detect in an image?",
    qChinese: "拉普拉斯滤波器在图像中检测什么？",
    options: [
      "A) Constant intensity regions",
      "B) Regions of rapid intensity change (edges and blobs) using second derivatives",
      "C) Color boundaries between objects",
      "D) Texture patterns in the background"
    ],
    optionsChinese: [
      "A) 恒定强度区域",
      "B) 使用二阶导数检测强度快速变化的区域（边缘和斑点）",
      "C) 物体之间的颜色边界",
      "D) 背景中的纹理图案"
    ],
    answer: 1,
    explanation: "The Laplacian operator computes the sum of second-order partial derivatives of the image intensity. It responds to edges (zero crossings) and blob-like structures. Unlike first-derivative operators, it is isotropic and detects edges in all directions simultaneously, but it is very sensitive to noise.",
    explanationChinese: "拉普拉斯算子计算图像强度的二阶偏导数之和。它响应边缘（零交叉）和斑点状结构。与一阶导数算子不同，它是各向同性的，同时检测所有方向的边缘，但对噪声非常敏感。",
    diagram: "",
    terms: ["image_filtering", "edge_detection", "convolution_cv"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 31,
    q: "What property makes Gaussian filtering separable, and why is this important?",
    qChinese: "什么性质使高斯滤波可分离，为什么这很重要？",
    options: [
      "A) The Gaussian kernel is always square, reducing memory use",
      "B) The Gaussian kernel is always normalized to sum to 1",
      "C) The Gaussian kernel has only positive values",
      "D) A 2D Gaussian can be decomposed into two 1D Gaussians, reducing computation from O(n^2) to O(n) per pixel",
    ],
    optionsChinese: [
      "A) 高斯核总是方形的，减少内存使用",
      "B) 高斯核总是归一化为和为1",
      "C) 高斯核只有正值",
      "D) 二维高斯可以分解为两个一维高斯，将每像素计算从O(n^2)降低到O(n)",
    ],
    answer: 3,
    explanation: "The 2D Gaussian function G(x,y) = G(x) * G(y) is separable, meaning a 2D convolution can be performed as two sequential 1D convolutions (horizontal then vertical). For a kernel of size n×n, this reduces operations per pixel from n² to 2n, significantly speeding up computation for large kernels.",
    explanationChinese: "二维高斯函数G(x,y) = G(x) * G(y)是可分离的，意味着二维卷积可以作为两个顺序的一维卷积执行（先水平后垂直）。对于大小为n×n的核，这将每像素的操作从n²减少到2n，对于大核显著加速计算。",
    diagram: "",
    terms: ["image_filtering", "convolution_cv"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 32,
    q: "What is the effect of applying a box filter (mean filter) to an image?",
    qChinese: "对图像应用均值滤波器（方框滤波器）的效果是什么？",
    options: [
      "A) It sharpens edges in the image",
      "B) It enhances high-frequency components",
      "C) It converts the image to binary",
      "D) It replaces each pixel with the average of its neighborhood, producing a blur",
    ],
    optionsChinese: [
      "A) 它锐化图像中的边缘",
      "B) 它增强高频分量",
      "C) 它将图像转换为二值图",
      "D) 它用邻域的平均值替换每个像素，产生模糊效果",
    ],
    answer: 3,
    explanation: "A box filter replaces each pixel with the unweighted average of all pixels in its neighborhood window. This smooths the image by removing high-frequency details and noise. However, it can introduce ringing artifacts at sharp edges because its frequency response has sidelobes, unlike the Gaussian filter.",
    explanationChinese: "均值滤波器用其邻域窗口中所有像素的无权平均值替换每个像素。这通过去除高频细节和噪声来平滑图像。然而，它可能在锐利边缘处引入振铃伪影，因为其频率响应有旁瓣，与高斯滤波器不同。",
    diagram: "",
    terms: ["image_filtering", "convolution_cv"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 33,
    q: "What is the median filter best suited for?",
    qChinese: "中值滤波器最适合用于什么？",
    options: [
      "A) Removing salt-and-pepper noise while preserving edges",
      "B) Detecting edges in the image",
      "C) Enhancing image contrast",
      "D) Computing image gradients"
    ],
    optionsChinese: [
      "A) 在保留边缘的同时去除椒盐噪声",
      "B) 检测图像中的边缘",
      "C) 增强图像对比度",
      "D) 计算图像梯度"
    ],
    answer: 0,
    explanation: "The median filter replaces each pixel with the median of values in its neighborhood. Unlike linear filters, it is nonlinear and excellent at removing salt-and-pepper (impulse) noise while preserving edges. Outlier pixel values are completely replaced rather than averaged, making it robust to extreme values.",
    explanationChinese: "中值滤波器用其邻域中值的中位数替换每个像素。与线性滤波器不同，它是非线性的，擅长在保留边缘的同时去除椒盐（脉冲）噪声。异常像素值被完全替换而不是取平均，使其对极端值具有鲁棒性。",
    diagram: "",
    terms: ["image_filtering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 34,
    q: "In the frequency domain, what does Gaussian blurring correspond to?",
    qChinese: "在频域中，高斯模糊对应什么？",
    options: [
      "A) A high-pass filter that removes low frequencies",
      "B) A band-pass filter that isolates a specific frequency range",
      "C) A low-pass filter that attenuates high frequencies",
      "D) A notch filter that removes a specific frequency"
    ],
    optionsChinese: [
      "A) 去除低频的高通滤波器",
      "B) 隔离特定频率范围的带通滤波器",
      "C) 衰减高频的低通滤波器",
      "D) 去除特定频率的陷波滤波器"
    ],
    answer: 2,
    explanation: "Gaussian blurring attenuates high-frequency components of the image, acting as a low-pass filter. In the frequency domain, a Gaussian remains a Gaussian (the Fourier transform of a Gaussian is also Gaussian). The standard deviation sigma in spatial domain inversely relates to the cutoff frequency.",
    explanationChinese: "高斯模糊衰减图像的高频分量，充当低通滤波器。在频域中，高斯仍然是高斯（高斯的傅里叶变换也是高斯）。空间域中的标准差sigma与截止频率成反比关系。",
    diagram: "",
    terms: ["image_filtering", "convolution_cv"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 35,
    q: "What is the bilateral filter designed to do that Gaussian filtering cannot?",
    qChinese: "双边滤波器能做什么是高斯滤波无法做到的？",
    options: [
      "A) Operate faster on large images",
      "B) Convert images to grayscale more accurately",
      "C) Smooth the image while preserving sharp edges by considering both spatial and intensity proximity",
      "D) Increase image resolution through interpolation"
    ],
    optionsChinese: [
      "A) 在大图像上更快操作",
      "B) 更准确地将图像转换为灰度",
      "C) 通过同时考虑空间和强度邻近性来平滑图像同时保留锐利边缘",
      "D) 通过插值增加图像分辨率"
    ],
    answer: 2,
    explanation: "The bilateral filter uses two Gaussian weights: one based on spatial distance and another based on intensity difference. Pixels with similar intensities receive higher weights, so edges where intensity changes sharply are preserved. This edge-preserving smoothing is widely used in computational photography and denoising.",
    explanationChinese: "双边滤波器使用两个高斯权重：一个基于空间距离，另一个基于强度差异。具有相似强度的像素获得更高的权重，因此强度急剧变化的边缘得以保留。这种保边平滑广泛用于计算摄影和去噪。",
    diagram: "",
    terms: ["image_filtering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 36,
    q: "What does the convolution theorem state about convolution in the spatial domain?",
    qChinese: "卷积定理对空间域中的卷积有什么论述？",
    options: [
      "A) Convolution in the spatial domain equals element-wise multiplication in the frequency domain",
      "B) Convolution is only valid for square images",
      "C) Convolution is commutative only for symmetric kernels",
      "D) Convolution always reduces the image dimensions"
    ],
    optionsChinese: [
      "A) 空间域中的卷积等于频域中的逐元素乘法",
      "B) 卷积仅对方形图像有效",
      "C) 卷积仅对对称核可交换",
      "D) 卷积总是减小图像尺寸"
    ],
    answer: 0,
    explanation: "The convolution theorem states that convolution in the spatial domain is equivalent to pointwise multiplication in the frequency domain: F(f * g) = F(f) · F(g). This allows efficient computation of convolution using FFT for large kernels, reducing complexity from O(N²K²) to O(N² log N).",
    explanationChinese: "卷积定理指出空间域中的卷积等价于频域中的逐点乘法：F(f * g) = F(f) · F(g)。这允许使用FFT高效计算大核的卷积，将复杂度从O(N²K²)降低到O(N² log N)。",
    diagram: "",
    terms: ["image_filtering", "convolution_cv"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 37,
    q: "What is an image pyramid used for in computer vision?",
    qChinese: "图像金字塔在计算机视觉中的用途是什么？",
    options: [
      "A) Representing an image at multiple scales for multi-resolution analysis",
      "B) Storing images in a pyramid-shaped data structure for fast retrieval",
      "C) Converting 2D images into 3D pyramid shapes",
      "D) Compressing images into smaller file sizes"
    ],
    optionsChinese: [
      "A) 在多个尺度上表示图像以进行多分辨率分析",
      "B) 将图像存储在金字塔形数据结构中以快速检索",
      "C) 将二维图像转换为三维金字塔形状",
      "D) 将图像压缩为更小的文件大小"
    ],
    answer: 0,
    explanation: "An image pyramid is a multi-scale representation where each level is a progressively downsampled version of the original image. Gaussian pyramids smooth and subsample, while Laplacian pyramids store band-pass details. Pyramids enable scale-invariant feature detection and efficient coarse-to-fine processing.",
    explanationChinese: "图像金字塔是一种多尺度表示，其中每一层是原始图像的逐步下采样版本。高斯金字塔进行平滑和子采样，而拉普拉斯金字塔存储带通细节。金字塔实现尺度不变特征检测和高效的从粗到细处理。",
    diagram: "",
    terms: ["image_pyramid", "image_filtering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 38,
    q: "What is the Prewitt operator, and how does it differ from the Sobel operator?",
    qChinese: "Prewitt算子是什么，它与Sobel算子有何不同？",
    options: [
      "A) Prewitt uses larger kernels than Sobel",
      "B) Prewitt uses uniform weights for averaging while Sobel uses a [1,2,1] weighting for better noise suppression",
      "C) Prewitt operates in the frequency domain while Sobel works in the spatial domain",
      "D) Prewitt can only detect horizontal edges"
    ],
    optionsChinese: [
      "A) Prewitt使用比Sobel更大的核",
      "B) Prewitt使用均匀权重进行平均，而Sobel使用[1,2,1]加权以更好地抑制噪声",
      "C) Prewitt在频域操作，而Sobel在空间域工作",
      "D) Prewitt只能检测水平边缘"
    ],
    answer: 1,
    explanation: "Both Prewitt and Sobel are 3x3 gradient operators combining smoothing and differentiation. The key difference is the smoothing component: Prewitt uses [1,1,1] (uniform averaging), while Sobel uses [1,2,1] (approximating Gaussian). Sobel gives more weight to the center row/column, providing better noise suppression.",
    explanationChinese: "Prewitt和Sobel都是结合平滑和微分的3x3梯度算子。关键区别在于平滑分量：Prewitt使用[1,1,1]（均匀平均），而Sobel使用[1,2,1]（近似高斯）。Sobel给中心行/列更多权重，提供更好的噪声抑制。",
    diagram: "",
    terms: ["image_filtering", "edge_detection", "convolution_cv"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 39,
    q: "How does zero padding affect the output of a convolution operation?",
    qChinese: "零填充如何影响卷积操作的输出？",
    options: [
      "A) It reduces the output image size",
      "B) It increases the intensity of border pixels",
      "C) It maintains the output image size by adding zeros around the border of the input image",
      "D) It removes border pixels entirely"
    ],
    optionsChinese: [
      "A) 它减小输出图像的大小",
      "B) 它增加边界像素的强度",
      "C) 它通过在输入图像边界周围添加零来保持输出图像大小",
      "D) 它完全删除边界像素"
    ],
    answer: 2,
    explanation: "Zero padding adds rows and columns of zeros around the image border before convolution, allowing the kernel to be applied to border pixels and maintaining the original image dimensions in the output. Without padding, the output shrinks by (k-1) pixels in each dimension for a k×k kernel.",
    explanationChinese: "零填充在卷积之前在图像边界周围添加零的行和列，允许核应用于边界像素并在输出中保持原始图像尺寸。没有填充时，对于k×k核，输出在每个维度上缩小(k-1)个像素。",
    diagram: "",
    terms: ["image_filtering", "convolution_cv"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 40,
    q: "What is the Laplacian of Gaussian (LoG) operator used for?",
    qChinese: "高斯拉普拉斯（LoG）算子用于什么？",
    options: [
      "A) Image compression",
      "B) Image rotation correction",
      "C) Color histogram computation",
      "D) Blob detection and edge detection by combining Gaussian smoothing with second-order differentiation",
    ],
    optionsChinese: [
      "A) 图像压缩",
      "B) 图像旋转校正",
      "C) 颜色直方图计算",
      "D) 通过结合高斯平滑和二阶微分进行斑点检测和边缘检测",
    ],
    answer: 3,
    explanation: "The Laplacian of Gaussian first smooths the image with a Gaussian to reduce noise sensitivity, then applies the Laplacian for second-derivative computation. Zero crossings of the LoG response indicate edges. It is also used for blob detection across scales in algorithms like SIFT. The DoG approximates the LoG efficiently.",
    explanationChinese: "高斯拉普拉斯首先用高斯平滑图像以降低噪声敏感性，然后应用拉普拉斯进行二阶导数计算。LoG响应的零交叉指示边缘。它也用于SIFT等算法中的跨尺度斑点检测。高斯差分（DoG）有效地近似LoG。",
    diagram: "",
    terms: ["image_filtering", "edge_detection", "convolution_cv"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 41,
    q: "What is image sharpening typically achieved by?",
    qChinese: "图像锐化通常通过什么来实现？",
    options: [
      "A) Applying a low-pass filter to remove noise",
      "B) Reducing the image resolution",
      "C) Adding a scaled version of the Laplacian or high-pass filtered image back to the original",
      "D) Increasing the pixel bit depth"
    ],
    optionsChinese: [
      "A) 应用低通滤波器去除噪声",
      "B) 降低图像分辨率",
      "C) 将拉普拉斯或高通滤波图像的缩放版本加回原图",
      "D) 增加像素位深度"
    ],
    answer: 2,
    explanation: "Image sharpening enhances edges by adding high-frequency components back to the original image. The unsharp masking technique subtracts a blurred version from the original to isolate details, then adds a scaled version back. Alternatively, adding the Laplacian (scaled) to the original directly emphasizes edges and fine details.",
    explanationChinese: "图像锐化通过将高频分量加回原始图像来增强边缘。反锐化掩模技术从原图中减去模糊版本以隔离细节，然后将缩放版本加回。或者，将拉普拉斯（缩放后）直接加到原图上以强调边缘和细节。",
    diagram: "",
    terms: ["image_filtering", "convolution_cv"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 42,
    q: "What is histogram equalization used for?",
    qChinese: "直方图均衡化用于什么？",
    options: [
      "A) Sorting pixel values in ascending order",
      "B) Converting a color image to grayscale",
      "C) Improving image contrast by redistributing intensity values to span the full dynamic range",
      "D) Reducing the number of unique intensity values"
    ],
    optionsChinese: [
      "A) 将像素值按升序排序",
      "B) 将彩色图像转换为灰度",
      "C) 通过重新分配强度值以跨越整个动态范围来改善图像对比度",
      "D) 减少唯一强度值的数量"
    ],
    answer: 2,
    explanation: "Histogram equalization transforms pixel intensities so the output histogram is approximately uniform, maximizing contrast. It uses the cumulative distribution function of the intensity histogram as a mapping function. This technique is particularly useful for images with poor contrast or narrow intensity ranges.",
    explanationChinese: "直方图均衡化变换像素强度使输出直方图近似均匀，最大化对比度。它使用强度直方图的累积分布函数作为映射函数。这种技术对对比度差或强度范围窄的图像特别有用。",
    diagram: "",
    terms: ["histogram_equalization", "image_filtering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 43,
    q: "What is the difference between a Gaussian pyramid and a Laplacian pyramid?",
    qChinese: "高斯金字塔和拉普拉斯金字塔有什么区别？",
    options: [
      "A) They use different color spaces",
      "B) Gaussian pyramid only works with square images",
      "C) Gaussian pyramid stores smoothed and downsampled images, while Laplacian pyramid stores band-pass detail images",
      "D) Laplacian pyramid increases image resolution at each level"
    ],
    optionsChinese: [
      "A) 它们使用不同的颜色空间",
      "B) 高斯金字塔仅适用于方形图像",
      "C) 高斯金字塔存储平滑和下采样的图像，而拉普拉斯金字塔存储带通细节图像",
      "D) 拉普拉斯金字塔在每一层增加图像分辨率"
    ],
    answer: 2,
    explanation: "A Gaussian pyramid repeatedly smooths and downsamples the image, each level being a lower-resolution version. A Laplacian pyramid stores the difference between consecutive Gaussian levels, capturing band-pass (detail) information. The original image can be perfectly reconstructed by summing all Laplacian levels with the top Gaussian level.",
    explanationChinese: "高斯金字塔反复平滑和下采样图像，每一层是更低分辨率的版本。拉普拉斯金字塔存储连续高斯层之间的差异，捕获带通（细节）信息。原始图像可以通过将所有拉普拉斯层与顶层高斯层相加来完美重建。",
    diagram: "",
    terms: ["image_pyramid", "image_filtering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 44,
    q: "What is the purpose of morphological erosion in image processing?",
    qChinese: "图像处理中形态学腐蚀的目的是什么？",
    options: [
      "A) To shrink foreground objects by removing pixels at boundaries based on a structuring element",
      "B) To enlarge bright regions in the image",
      "C) To increase image brightness globally",
      "D) To detect corners in the image"
    ],
    optionsChinese: [
      "A) 通过基于结构元素移除边界处的像素来缩小前景物体",
      "B) 放大图像中的亮区域",
      "C) 全局增加图像亮度",
      "D) 检测图像中的角点"
    ],
    answer: 0,
    explanation: "Morphological erosion slides a structuring element over the image and sets each output pixel to the minimum value within the element's footprint. This shrinks bright (foreground) regions and expands dark (background) regions. Erosion removes small bright noise, separates touching objects, and thins object boundaries.",
    explanationChinese: "形态学腐蚀将结构元素在图像上滑动，并将每个输出像素设置为元素覆盖范围内的最小值。这缩小亮（前景）区域并扩大暗（背景）区域。腐蚀去除小的亮噪声、分离接触的物体并使物体边界变细。",
    diagram: "",
    terms: ["morphological_operations", "image_filtering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 45,
    q: "What is the morphological opening operation?",
    qChinese: "形态学开运算是什么？",
    options: [
      "A) Erosion followed by dilation",
      "B) Dilation followed by erosion",
      "C) Two successive erosions",
      "D) Two successive dilations"
    ],
    optionsChinese: [
      "A) 先腐蚀后膨胀",
      "B) 先膨胀后腐蚀",
      "C) 两次连续腐蚀",
      "D) 两次连续膨胀"
    ],
    answer: 0,
    explanation: "Morphological opening is erosion followed by dilation with the same structuring element. Opening removes small bright spots (noise) and thin protrusions while largely preserving the shape and size of larger objects. It is useful for cleaning binary images before further analysis such as connected component labeling.",
    explanationChinese: "形态学开运算是使用相同结构元素先腐蚀后膨胀。开运算去除小的亮点（噪声）和细小突起，同时大体保持较大物体的形状和大小。它对于在连通分量标记等进一步分析之前清理二值图像很有用。",
    diagram: "",
    terms: ["morphological_operations", "image_filtering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 46,
    q: "What does the Fourier transform of an image reveal?",
    qChinese: "图像的傅里叶变换揭示了什么？",
    options: [
      "A) The frequency content showing how much of each spatial frequency is present in the image",
      "B) The spatial location of edges",
      "C) The color distribution of the image",
      "D) The depth information in the scene"
    ],
    optionsChinese: [
      "A) 频率内容，显示图像中每个空间频率的多少",
      "B) 边缘的空间位置",
      "C) 图像的颜色分布",
      "D) 场景中的深度信息"
    ],
    answer: 0,
    explanation: "The Fourier transform decomposes an image into its constituent spatial frequencies, showing the amplitude and phase of sinusoidal components. Low frequencies correspond to smooth regions, high frequencies to edges and fine details. The magnitude spectrum reveals dominant textures and patterns, while phase encodes structural information.",
    explanationChinese: "傅里叶变换将图像分解为其组成的空间频率，显示正弦分量的幅度和相位。低频对应平滑区域，高频对应边缘和细节。幅度谱揭示主要纹理和模式，而相位编码结构信息。",
    diagram: "",
    terms: ["image_filtering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 47,
    q: "What is the Nyquist-Shannon sampling theorem's relevance to image processing?",
    qChinese: "奈奎斯特-香农采样定理与图像处理的相关性是什么？",
    options: [
      "A) It determines the optimal color depth for images",
      "B) It specifies the best compression ratio for image storage",
      "C) It defines the maximum number of pixels a camera can have",
      "D) It states that an image must be sampled at least twice the highest spatial frequency to avoid aliasing",
    ],
    optionsChinese: [
      "A) 它确定图像的最佳颜色深度",
      "B) 它指定图像存储的最佳压缩比",
      "C) 它定义相机可以拥有的最大像素数",
      "D) 它指出图像必须以最高空间频率的至少两倍进行采样以避免混叠",
    ],
    answer: 3,
    explanation: "The Nyquist theorem requires sampling at twice the highest frequency present to faithfully represent the signal. In imaging, insufficient sampling causes aliasing: high frequencies masquerade as lower frequencies, creating Moiré patterns and jagged edges. Anti-aliasing filters (low-pass) are applied before downsampling to prevent this.",
    explanationChinese: "奈奎斯特定理要求以存在的最高频率的两倍进行采样以忠实地表示信号。在成像中，采样不足导致混叠：高频伪装为低频，产生摩尔纹和锯齿边缘。在下采样之前应用抗混叠滤波器（低通）来防止这种情况。",
    diagram: "",
    terms: ["image_filtering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 48,
    q: "What is the purpose of non-local means denoising?",
    qChinese: "非局部均值去噪的目的是什么？",
    options: [
      "A) To remove only Gaussian noise from images",
      "B) To detect and remove objects from the scene",
      "C) To sharpen blurred images",
      "D) To denoise by averaging pixels with similar local neighborhoods across the entire image, not just nearby pixels",
    ],
    optionsChinese: [
      "A) 仅从图像中去除高斯噪声",
      "B) 检测并从场景中删除物体",
      "C) 锐化模糊的图像",
      "D) 通过对整个图像中具有相似局部邻域的像素取平均来去噪，而不仅仅是附近像素",
    ],
    answer: 3,
    explanation: "Non-local means denoising compares the neighborhood patch around each pixel with patches throughout the image. Pixels whose surrounding patches are similar receive high weights in the average, regardless of spatial distance. This exploits the self-similarity of natural images and preserves textures better than local filters.",
    explanationChinese: "非局部均值去噪将每个像素周围的邻域块与整个图像中的块进行比较。周围块相似的像素在平均中获得高权重，无论空间距离如何。这利用了自然图像的自相似性，比局部滤波器更好地保留纹理。",
    diagram: "",
    terms: ["image_filtering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 49,
    q: "What is the Scharr operator, and when is it preferred over Sobel?",
    qChinese: "Scharr算子是什么，什么时候优于Sobel？",
    options: [
      "A) A 5x5 operator used only for color images",
      "B) An operator that only detects diagonal edges",
      "C) A 3x3 gradient operator with better rotational symmetry and accuracy than Sobel for computing image derivatives",
      "D) A second-order derivative operator similar to the Laplacian"
    ],
    optionsChinese: [
      "A) 仅用于彩色图像的5x5算子",
      "B) 只检测对角线边缘的算子",
      "C) 具有比Sobel更好的旋转对称性和精度的3x3梯度算子，用于计算图像导数",
      "D) 类似拉普拉斯的二阶导数算子"
    ],
    answer: 2,
    explanation: "The Scharr operator uses optimized weights [3,10,3] instead of Sobel's [1,2,1] for the smoothing direction, providing better rotational symmetry in gradient estimation. It produces more accurate gradient magnitudes for edges at all orientations and is preferred when precise gradient direction computation is needed.",
    explanationChinese: "Scharr算子在平滑方向使用优化的权重[3,10,3]而不是Sobel的[1,2,1]，在梯度估计中提供更好的旋转对称性。它为所有方向的边缘产生更准确的梯度幅值，当需要精确的梯度方向计算时是首选。",
    diagram: "",
    terms: ["image_filtering", "edge_detection", "convolution_cv"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 50,
    q: "Why is anti-aliasing filtering necessary before downsampling an image?",
    qChinese: "为什么在对图像下采样之前需要抗混叠滤波？",
    options: [
      "A) To increase the brightness of the downsampled image",
      "B) To add more pixels to compensate for the resolution loss",
      "C) To convert the image to a different color space",
      "D) To remove high-frequency content that would cause aliasing artifacts after subsampling",
    ],
    optionsChinese: [
      "A) 增加下采样图像的亮度",
      "B) 添加更多像素以补偿分辨率损失",
      "C) 将图像转换为不同的颜色空间",
      "D) 去除在子采样后会导致混叠伪影的高频内容",
    ],
    answer: 3,
    explanation: "When downsampling reduces the sampling rate, frequencies above the new Nyquist limit fold back and create aliasing artifacts like Moiré patterns. A low-pass anti-aliasing filter removes these high frequencies before subsampling. Gaussian blurring is commonly used for this purpose in image pyramid construction.",
    explanationChinese: "当下采样降低采样率时，超过新奈奎斯特极限的频率会折叠回来并产生摩尔纹等混叠伪影。低通抗混叠滤波器在子采样之前去除这些高频。高斯模糊通常用于图像金字塔构建中的此目的。",
    diagram: "",
    terms: ["image_filtering", "image_pyramid"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 51,
    q: "What is the purpose of the Gabor filter in image processing?",
    qChinese: "Gabor滤波器在图像处理中的目的是什么？",
    options: [
      "A) To perform global thresholding on images",
      "B) To remove motion blur from images",
      "C) To convert images from RGB to HSV",
      "D) To detect texture features at specific orientations and frequencies using a sinusoid modulated by a Gaussian",
    ],
    optionsChinese: [
      "A) 对图像执行全局阈值化",
      "B) 从图像中去除运动模糊",
      "C) 将图像从RGB转换为HSV",
      "D) 使用由高斯调制的正弦波检测特定方向和频率的纹理特征",
    ],
    answer: 3,
    explanation: "A Gabor filter is a linear filter formed by multiplying a Gaussian envelope with a sinusoidal wave. It is tuned to a specific spatial frequency and orientation, making it ideal for texture analysis and feature extraction. Banks of Gabor filters at multiple orientations and frequencies model biological vision processing.",
    explanationChinese: "Gabor滤波器是通过将高斯包络与正弦波相乘形成的线性滤波器。它调谐到特定的空间频率和方向，使其非常适合纹理分析和特征提取。多个方向和频率的Gabor滤波器组模拟生物视觉处理。",
    diagram: "",
    terms: ["image_filtering", "feature_extraction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 52,
    q: "What is adaptive histogram equalization (CLAHE)?",
    qChinese: "自适应直方图均衡化（CLAHE）是什么？",
    options: [
      "A) A technique that equalizes histograms in local regions with contrast limiting to prevent noise amplification",
      "B) A method that applies a single global histogram transformation",
      "C) A method to equalize color channels independently",
      "D) A technique that only works on binary images"
    ],
    optionsChinese: [
      "A) 在局部区域中均衡直方图并限制对比度以防止噪声放大的技术",
      "B) 应用单一全局直方图变换的方法",
      "C) 独立均衡颜色通道的方法",
      "D) 仅适用于二值图像的技术"
    ],
    answer: 0,
    explanation: "CLAHE (Contrast Limited Adaptive Histogram Equalization) divides the image into small tiles, equalizes each tile's histogram independently, and limits the contrast amplification to a threshold. This prevents noise amplification in homogeneous regions while enhancing local contrast. Bilinear interpolation eliminates tile boundary artifacts.",
    explanationChinese: "CLAHE（对比度有限自适应直方图均衡化）将图像分成小块，独立均衡每个小块的直方图，并将对比度放大限制在阈值内。这防止了均匀区域中的噪声放大同时增强了局部对比度。双线性插值消除了小块边界伪影。",
    diagram: "",
    terms: ["histogram_equalization", "image_filtering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 53,
    q: "What does morphological dilation do to a binary image?",
    qChinese: "形态学膨胀对二值图像有什么作用？",
    options: [
      "A) It shrinks foreground regions",
      "B) It expands foreground regions by adding pixels at the boundaries using a structuring element",
      "C) It inverts all pixel values",
      "D) It splits the image into connected components"
    ],
    optionsChinese: [
      "A) 它缩小前景区域",
      "B) 它使用结构元素在边界处添加像素来扩大前景区域",
      "C) 它反转所有像素值",
      "D) 它将图像分割为连通分量"
    ],
    answer: 1,
    explanation: "Morphological dilation slides a structuring element over the image and sets each output pixel to the maximum value within the element's footprint. This expands bright (foreground) regions, fills small holes, and connects nearby objects. Dilation is the dual operation of erosion and is used in closing and gradient operations.",
    explanationChinese: "形态学膨胀将结构元素在图像上滑动，并将每个输出像素设置为元素覆盖范围内的最大值。这扩大了亮（前景）区域，填充小孔，并连接附近的物体。膨胀是腐蚀的对偶操作，用于闭运算和梯度运算。",
    diagram: "",
    terms: ["morphological_operations", "image_filtering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 54,
    q: "What is the purpose of the structuring element in morphological operations?",
    qChinese: "形态学运算中结构元素的目的是什么？",
    options: [
      "A) To define the color space for the operation",
      "B) To define the neighborhood shape and size used for probing the image geometry",
      "C) To specify the output image resolution",
      "D) To determine the threshold value for binarization"
    ],
    optionsChinese: [
      "A) 定义操作的颜色空间",
      "B) 定义用于探测图像几何形状的邻域形状和大小",
      "C) 指定输出图像的分辨率",
      "D) 确定二值化的阈值"
    ],
    answer: 1,
    explanation: "The structuring element defines the shape (disc, rectangle, cross, etc.) and size of the neighborhood used in morphological operations. Its shape determines how objects are probed: a disc-shaped element treats all directions equally, while a line-shaped element preferentially affects features oriented along the line direction.",
    explanationChinese: "结构元素定义了形态学运算中使用的邻域的形状（圆盘、矩形、十字等）和大小。其形状决定了如何探测物体：圆盘形元素对所有方向一视同仁，而线形元素优先影响沿线方向的特征。",
    diagram: "",
    terms: ["morphological_operations", "image_filtering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 55,
    q: "What is the stride parameter in a convolution operation?",
    qChinese: "卷积操作中的步幅参数是什么？",
    options: [
      "A) The number of pixels the kernel moves between each application position",
      "B) The size of the convolution kernel",
      "C) The depth of the input image channels",
      "D) The amount of zero padding applied"
    ],
    optionsChinese: [
      "A) 核在每个应用位置之间移动的像素数",
      "B) 卷积核的大小",
      "C) 输入图像通道的深度",
      "D) 应用的零填充量"
    ],
    answer: 0,
    explanation: "Stride determines how many pixels the kernel shifts between successive applications during convolution. A stride of 1 processes every pixel position, while a stride of 2 skips every other position, reducing the output dimensions by half. Larger strides provide built-in downsampling, commonly used in convolutional neural networks.",
    explanationChinese: "步幅决定了卷积过程中核在连续应用之间移动多少像素。步幅为1处理每个像素位置，步幅为2跳过每隔一个位置，将输出尺寸减半。较大的步幅提供内置下采样，常用于卷积神经网络。",
    diagram: "",
    terms: ["convolution_cv", "image_filtering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 56,
    q: "What are the four main steps of the Canny edge detector?",
    qChinese: "Canny边缘检测器的四个主要步骤是什么？",
    options: [
      "A) Thresholding, morphology, contour tracing, filling",
      "B) Fourier transform, frequency filtering, inverse transform, thresholding",
      "C) Histogram equalization, binarization, contour detection, smoothing",
      "D) Gaussian smoothing, gradient computation, non-maximum suppression, hysteresis thresholding",
    ],
    optionsChinese: [
      "A) 阈值化、形态学、轮廓追踪、填充",
      "B) 傅里叶变换、频率滤波、逆变换、阈值化",
      "C) 直方图均衡化、二值化、轮廓检测、平滑",
      "D) 高斯平滑、梯度计算、非极大值抑制、滞后阈值化",
    ],
    answer: 3,
    explanation: "The Canny edge detector follows four steps: (1) Gaussian smoothing to reduce noise, (2) gradient magnitude and direction computation using Sobel operators, (3) non-maximum suppression to thin edges to single-pixel width, and (4) hysteresis thresholding with high and low thresholds to link edges and suppress weak isolated responses.",
    explanationChinese: "Canny边缘检测器遵循四个步骤：(1)高斯平滑以降低噪声，(2)使用Sobel算子计算梯度幅值和方向，(3)非极大值抑制将边缘细化为单像素宽度，(4)使用高低阈值的滞后阈值化来连接边缘并抑制弱的孤立响应。",
    diagram: "",
    terms: ["edge_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 57,
    q: "What is hysteresis thresholding in the Canny edge detector?",
    qChinese: "Canny边缘检测器中的滞后阈值化是什么？",
    options: [
      "A) Using two thresholds where strong edges are kept, weak edges are kept only if connected to strong edges",
      "B) Using a single threshold to classify pixels as edge or non-edge",
      "C) Iteratively increasing the threshold until all edges disappear",
      "D) Using the median pixel value as the threshold"
    ],
    optionsChinese: [
      "A) 使用两个阈值，保留强边缘，弱边缘仅在连接到强边缘时才保留",
      "B) 使用单个阈值将像素分类为边缘或非边缘",
      "C) 迭代增加阈值直到所有边缘消失",
      "D) 使用像素中值作为阈值"
    ],
    answer: 0,
    explanation: "Hysteresis thresholding uses two thresholds: a high threshold to identify strong edge pixels and a low threshold for weak candidates. Strong edges are always kept. Weak edges are kept only if they are connected to strong edges through a chain of pixels above the low threshold. This preserves edge continuity while suppressing noise.",
    explanationChinese: "滞后阈值化使用两个阈值：高阈值识别强边缘像素，低阈值识别弱候选。强边缘总是保留。弱边缘仅在通过高于低阈值的像素链连接到强边缘时才保留。这在抑制噪声的同时保持了边缘的连续性。",
    diagram: "",
    terms: ["edge_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 58,
    q: "Why is Gaussian smoothing applied before edge detection?",
    qChinese: "为什么在边缘检测之前要应用高斯平滑？",
    options: [
      "A) To reduce noise that would cause false edge detections in gradient computation",
      "B) To increase the contrast of edges",
      "C) To convert the image to grayscale",
      "D) To increase the image resolution"
    ],
    optionsChinese: [
      "A) 减少在梯度计算中会导致虚假边缘检测的噪声",
      "B) 增加边缘的对比度",
      "C) 将图像转换为灰度",
      "D) 增加图像分辨率"
    ],
    answer: 0,
    explanation: "Gradient-based edge detection amplifies high-frequency content including noise. Pre-smoothing with a Gaussian filter suppresses noise while preserving significant edges. The choice of sigma involves a tradeoff: larger sigma reduces noise sensitivity but may blur fine edges. This is why Canny's first step is Gaussian smoothing.",
    explanationChinese: "基于梯度的边缘检测放大包括噪声在内的高频内容。使用高斯滤波器进行预平滑可以抑制噪声同时保留重要边缘。sigma的选择涉及权衡：较大的sigma减少噪声敏感性但可能模糊细小边缘。这就是Canny第一步是高斯平滑的原因。",
    diagram: "",
    terms: ["edge_detection", "image_filtering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 59,
    q: "What does the gradient magnitude represent at each pixel in an image?",
    qChinese: "图像中每个像素处的梯度幅值代表什么？",
    options: [
      "A) The rate and strength of intensity change at that point",
      "B) The average brightness in the local neighborhood",
      "C) The color saturation at that point",
      "D) The distance from the image center"
    ],
    optionsChinese: [
      "A) 该点强度变化的速率和强度",
      "B) 局部邻域的平均亮度",
      "C) 该点的颜色饱和度",
      "D) 距图像中心的距离"
    ],
    answer: 0,
    explanation: "The gradient magnitude |∇I| = sqrt(Ix² + Iy²) measures how rapidly intensity changes at each pixel. High magnitude indicates a sharp transition (potential edge), while low magnitude indicates a smooth region. The gradient direction arctan(Iy/Ix) points perpendicular to the edge orientation at that location.",
    explanationChinese: "梯度幅值|∇I| = sqrt(Ix² + Iy²)衡量每个像素处强度变化的速度。高幅值表示急剧的过渡（潜在边缘），而低幅值表示平滑区域。梯度方向arctan(Iy/Ix)指向该位置边缘方向的垂直方向。",
    diagram: "",
    terms: ["edge_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 60,
    q: "What is the Hough transform used for in the context of edge detection?",
    qChinese: "在边缘检测的背景下，霍夫变换用于什么？",
    options: [
      "A) Detecting texture patterns in images",
      "B) Detecting parametric shapes like lines and circles from edge points by voting in parameter space",
      "C) Removing noise from edge maps",
      "D) Computing the gradient of the edge image"
    ],
    optionsChinese: [
      "A) 检测图像中的纹理模式",
      "B) 通过在参数空间中投票从边缘点检测直线和圆等参数化形状",
      "C) 从边缘图中去除噪声",
      "D) 计算边缘图像的梯度"
    ],
    answer: 1,
    explanation: "The Hough transform detects parametric shapes by mapping edge points to a parameter space (accumulator array). For lines, each edge point votes for all possible lines passing through it in (rho, theta) space. Peaks in the accumulator correspond to detected lines. It is robust to gaps and noise in edge maps.",
    explanationChinese: "霍夫变换通过将边缘点映射到参数空间（累加器数组）来检测参数化形状。对于直线，每个边缘点在(rho, theta)空间中为通过它的所有可能直线投票。累加器中的峰值对应检测到的直线。它对边缘图中的间隙和噪声具有鲁棒性。",
    diagram: "",
    terms: ["edge_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 61,
    q: "What is the difference between edge detection and boundary detection?",
    qChinese: "边缘检测和边界检测有什么区别？",
    options: [
      "A) Edge detection finds local intensity discontinuities, while boundary detection identifies closed contours of object regions",
      "B) They are exactly the same operation",
      "C) Boundary detection only works on binary images",
      "D) Edge detection requires color images while boundary detection works on grayscale"
    ],
    optionsChinese: [
      "A) 边缘检测找到局部强度不连续性，而边界检测识别物体区域的封闭轮廓",
      "B) 它们是完全相同的操作",
      "C) 边界检测仅适用于二值图像",
      "D) 边缘检测需要彩色图像而边界检测适用于灰度图像"
    ],
    answer: 0,
    explanation: "Edge detection is a local operation finding pixels where intensity changes sharply. Boundary detection is a higher-level task that identifies closed contours separating objects from background, often using edges as input but also incorporating texture, color, and global context. The Berkeley contour detector (gPb) is a well-known boundary detector.",
    explanationChinese: "边缘检测是找到强度急剧变化的像素的局部操作。边界检测是识别将物体与背景分离的封闭轮廓的更高层次任务，通常使用边缘作为输入，但也结合纹理、颜色和全局上下文。伯克利轮廓检测器（gPb）是著名的边界检测器。",
    diagram: "",
    terms: ["edge_detection", "image_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 62,
    q: "What is the Roberts cross operator?",
    qChinese: "Roberts交叉算子是什么？",
    options: [
      "A) A 5x5 edge detection kernel",
      "B) A morphological operator for thinning edges",
      "C) A pair of 2x2 kernels that compute diagonal gradients for simple edge detection",
      "D) A frequency domain edge detection method"
    ],
    optionsChinese: [
      "A) 5x5边缘检测核",
      "B) 用于细化边缘的形态学算子",
      "C) 一对计算对角梯度的2x2核，用于简单边缘检测",
      "D) 频域边缘检测方法"
    ],
    answer: 2,
    explanation: "The Roberts cross operator uses two 2x2 kernels to compute gradients along the diagonal directions (45° and 135°). It is one of the earliest and simplest edge detectors. While computationally efficient, its small kernel size makes it very sensitive to noise compared to larger operators like Sobel.",
    explanationChinese: "Roberts交叉算子使用两个2x2核沿对角方向（45°和135°）计算梯度。它是最早和最简单的边缘检测器之一。虽然计算效率高，但其小核尺寸使其与Sobel等较大算子相比对噪声非常敏感。",
    diagram: "",
    terms: ["edge_detection", "convolution_cv"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 63,
    q: "How does non-maximum suppression work in the Canny edge detector?",
    qChinese: "非极大值抑制在Canny边缘检测器中如何工作？",
    options: [
      "A) For each pixel, it checks if the gradient magnitude is a local maximum along the gradient direction; if not, it is suppressed to zero",
      "B) It removes all pixels below a fixed threshold",
      "C) It applies a median filter to thin the edges",
      "D) It selects only the top 10% of gradient values"
    ],
    optionsChinese: [
      "A) 对每个像素，检查梯度幅值是否沿梯度方向为局部最大值；如果不是，则抑制为零",
      "B) 它去除低于固定阈值的所有像素",
      "C) 它应用中值滤波器来细化边缘",
      "D) 它仅选择前10%的梯度值"
    ],
    answer: 0,
    explanation: "Non-maximum suppression examines each pixel's gradient magnitude and compares it with neighboring pixels along the gradient direction. Only pixels that are local maxima in the gradient direction are retained; others are set to zero. This produces thin one-pixel-wide edges from the thick gradient response regions.",
    explanationChinese: "非极大值抑制检查每个像素的梯度幅值，并与沿梯度方向的相邻像素进行比较。只保留在梯度方向上为局部最大值的像素；其他设置为零。这从粗厚的梯度响应区域产生细的单像素宽边缘。",
    diagram: "",
    terms: ["edge_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 64,
    q: "What is the zero-crossing method for edge detection?",
    qChinese: "边缘检测的零交叉方法是什么？",
    options: [
      "A) Finding pixels where the image intensity equals zero",
      "B) Finding the point where two edges cross each other",
      "C) Setting all negative gradient values to zero",
      "D) Finding locations where the second derivative (Laplacian or LoG) changes sign, indicating an edge",
    ],
    optionsChinese: [
      "A) 找到图像强度等于零的像素",
      "B) 找到两条边缘交叉的点",
      "C) 将所有负梯度值设置为零",
      "D) 找到二阶导数（拉普拉斯或LoG）改变符号的位置，指示边缘",
    ],
    answer: 3,
    explanation: "Zero-crossing edge detection uses second derivatives (Laplacian or LoG). Edges correspond to locations where the second derivative changes from positive to negative or vice versa. Marr and Hildreth proposed this approach, noting that zero crossings of the LoG provide closed contours and consistent edge localization.",
    explanationChinese: "零交叉边缘检测使用二阶导数（拉普拉斯或LoG）。边缘对应于二阶导数从正变为负或反之的位置。Marr和Hildreth提出了这种方法，指出LoG的零交叉提供封闭轮廓和一致的边缘定位。",
    diagram: "",
    terms: ["edge_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 65,
    q: "What is the effect of increasing the sigma parameter in Gaussian smoothing before Canny edge detection?",
    qChinese: "在Canny边缘检测之前增加高斯平滑的sigma参数有什么效果？",
    options: [
      "A) More edges are detected with sharper localization",
      "B) The image becomes brighter",
      "C) Fewer edges are detected with reduced noise sensitivity but less precise edge localization",
      "D) Only horizontal edges are detected"
    ],
    optionsChinese: [
      "A) 检测到更多边缘，定位更精确",
      "B) 图像变得更亮",
      "C) 检测到更少的边缘，噪声敏感性降低但边缘定位精度下降",
      "D) 只检测到水平边缘"
    ],
    answer: 2,
    explanation: "Increasing sigma produces stronger smoothing, which eliminates more noise and small-scale features. This results in fewer detected edges, focusing only on major intensity transitions. However, edges become less precisely localized because smoothing shifts edge positions. This scale-space tradeoff is fundamental to multi-scale edge detection.",
    explanationChinese: "增加sigma产生更强的平滑，消除更多的噪声和小尺度特征。这导致检测到更少的边缘，仅关注主要的强度过渡。然而，由于平滑会移动边缘位置，边缘定位变得不那么精确。这种尺度空间权衡是多尺度边缘检测的基础。",
    diagram: "",
    terms: ["edge_detection", "image_filtering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 66,
    q: "What is structured edge detection?",
    qChinese: "结构化边缘检测是什么？",
    options: [
      "A) Detecting edges only in structured environments like buildings",
      "B) A learning-based approach that uses random forests trained on local patch features to predict edge probability",
      "C) Detecting edges using only structured light patterns",
      "D) Manually defining edge templates for specific objects"
    ],
    optionsChinese: [
      "A) 仅在建筑物等结构化环境中检测边缘",
      "B) 一种基于学习的方法，使用在局部块特征上训练的随机森林来预测边缘概率",
      "C) 仅使用结构光图案检测边缘",
      "D) 手动为特定物体定义边缘模板"
    ],
    answer: 1,
    explanation: "Structured edge detection uses machine learning, specifically random decision forests, trained on image patches with ground-truth edge annotations. It predicts edge maps that consider texture, color, and gradient cues simultaneously. This approach achieves better accuracy than hand-crafted operators and runs efficiently in real time.",
    explanationChinese: "结构化边缘检测使用机器学习，特别是在具有真实边缘标注的图像块上训练的随机决策森林。它预测同时考虑纹理、颜色和梯度线索的边缘图。这种方法比手工设计的算子获得更好的准确性，并能高效实时运行。",
    diagram: "",
    terms: ["edge_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 67,
    q: "In edge detection, what does the gradient direction indicate?",
    qChinese: "在边缘检测中，梯度方向指示什么？",
    options: [
      "A) The direction perpendicular to the edge orientation, pointing from dark to bright",
      "B) The direction of object motion",
      "C) The direction of the nearest image boundary",
      "D) The direction of the dominant color change"
    ],
    optionsChinese: [
      "A) 垂直于边缘方向、从暗指向亮的方向",
      "B) 物体运动的方向",
      "C) 最近图像边界的方向",
      "D) 主要颜色变化的方向"
    ],
    answer: 0,
    explanation: "The gradient direction θ = arctan(Iy/Ix) points in the direction of the steepest intensity increase, which is perpendicular to the edge orientation. This direction is used in non-maximum suppression to thin edges along the correct axis. The edge itself runs perpendicular to the gradient direction.",
    explanationChinese: "梯度方向θ = arctan(Iy/Ix)指向强度最陡增加的方向，即垂直于边缘方向。这个方向用于非极大值抑制中沿正确轴细化边缘。边缘本身与梯度方向垂直。",
    diagram: "",
    terms: ["edge_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 68,
    q: "What is the purpose of the Hough transform for circle detection?",
    qChinese: "用于圆检测的霍夫变换的目的是什么？",
    options: [
      "A) To find the largest circle that fits within the image",
      "B) To measure the circumference of detected objects",
      "C) To approximate circles with polygons",
      "D) To detect circles by voting in a 3D parameter space of center coordinates and radius",
    ],
    optionsChinese: [
      "A) 找到图像内能容纳的最大圆",
      "B) 测量检测到的物体的周长",
      "C) 用多边形近似圆",
      "D) 通过在中心坐标和半径的三维参数空间中投票来检测圆",
    ],
    answer: 3,
    explanation: "The Hough circle transform maps each edge point to a cone in the 3D parameter space (cx, cy, r). Where many cones intersect, a circle is detected. To reduce computation, gradient direction constrains votes to a line in parameter space. The method can use a two-stage approach: first finding centers, then radii.",
    explanationChinese: "霍夫圆变换将每个边缘点映射到三维参数空间(cx, cy, r)中的圆锥。多个圆锥相交的地方就检测到一个圆。为减少计算，梯度方向将投票限制在参数空间中的一条线上。该方法可以使用两阶段方法：先找中心，再找半径。",
    diagram: "",
    terms: ["edge_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 69,
    q: "What is edge linking, and why is it necessary?",
    qChinese: "边缘连接是什么，为什么它是必要的？",
    options: [
      "A) Connecting unrelated edges to form random patterns",
      "B) Linking edge pixels to their gradient values",
      "C) Removing duplicate edges from the edge map",
      "D) Connecting fragmented edge segments into continuous contours based on proximity and gradient similarity",
    ],
    optionsChinese: [
      "A) 连接不相关的边缘形成随机图案",
      "B) 将边缘像素链接到其梯度值",
      "C) 从边缘图中删除重复的边缘",
      "D) 根据邻近性和梯度相似性将碎片化的边缘段连接成连续轮廓",
    ],
    answer: 3,
    explanation: "Edge detectors often produce fragmented edges due to noise, lighting variation, or texture. Edge linking connects nearby edge pixels that share similar gradient magnitude and direction into continuous contours. Methods include local processing (examining pixel neighborhoods) and global approaches like graph-based techniques.",
    explanationChinese: "由于噪声、光照变化或纹理，边缘检测器经常产生碎片化的边缘。边缘连接将共享相似梯度幅值和方向的附近边缘像素连接成连续轮廓。方法包括局部处理（检查像素邻域）和基于图的全局方法。",
    diagram: "",
    terms: ["edge_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 70,
    q: "What is the Marr-Hildreth edge detection approach?",
    qChinese: "Marr-Hildreth边缘检测方法是什么？",
    options: [
      "A) Using adaptive thresholding on the raw image",
      "B) Combining multiple color channel gradients",
      "C) Using template matching to find edge patterns",
      "D) Applying the Laplacian of Gaussian (LoG) and finding zero crossings to locate edges",
    ],
    optionsChinese: [
      "A) 对原始图像使用自适应阈值化",
      "B) 组合多个颜色通道的梯度",
      "C) 使用模板匹配来找到边缘模式",
      "D) 应用高斯拉普拉斯（LoG）并找到零交叉来定位边缘",
    ],
    answer: 3,
    explanation: "The Marr-Hildreth approach convolves the image with a Laplacian of Gaussian (LoG) filter, then identifies edges at zero-crossing locations. This method produces closed contours and was motivated by biological vision models. The LoG can be efficiently approximated by the Difference of Gaussians (DoG).",
    explanationChinese: "Marr-Hildreth方法将图像与高斯拉普拉斯（LoG）滤波器卷积，然后在零交叉位置识别边缘。这种方法产生封闭轮廓，其灵感来自生物视觉模型。LoG可以通过高斯差分（DoG）有效近似。",
    diagram: "",
    terms: ["edge_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 71,
    q: "What is the advantage of using the Canny edge detector over simple gradient thresholding?",
    qChinese: "使用Canny边缘检测器相对于简单梯度阈值化有什么优势？",
    options: [
      "A) Canny is faster to compute",
      "B) Canny does not require any parameters",
      "C) Canny works only on color images",
      "D) Canny produces thin edges with good continuity through non-maximum suppression and hysteresis thresholding",
    ],
    optionsChinese: [
      "A) Canny计算更快",
      "B) Canny不需要任何参数",
      "C) Canny仅适用于彩色图像",
      "D) Canny通过非极大值抑制和滞后阈值化产生良好连续性的细边缘",
    ],
    answer: 3,
    explanation: "Simple gradient thresholding produces thick edges and may have gaps or false positives. Canny improves on this with noise suppression via Gaussian smoothing, edge thinning via non-maximum suppression, and edge continuity via hysteresis thresholding. These steps together satisfy Canny's three criteria: good detection, localization, and minimal response.",
    explanationChinese: "简单梯度阈值化产生粗厚的边缘，可能有间隙或误检。Canny通过高斯平滑的噪声抑制、非极大值抑制的边缘细化和滞后阈值化的边缘连续性来改进。这些步骤共同满足Canny的三个标准：良好的检测、定位和最小响应。",
    diagram: "",
    terms: ["edge_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 72,
    q: "What does the Difference of Gaussians (DoG) approximate?",
    qChinese: "高斯差分（DoG）近似什么？",
    options: [
      "A) The Fourier transform of the image",
      "B) The Hessian matrix determinant",
      "C) The bilateral filter response",
      "D) The Laplacian of Gaussian (LoG) operator",
    ],
    optionsChinese: [
      "A) 图像的傅里叶变换",
      "B) 海森矩阵行列式",
      "C) 双边滤波器响应",
      "D) 高斯拉普拉斯（LoG）算子",
    ],
    answer: 3,
    explanation: "The Difference of Gaussians subtracts two Gaussian-blurred versions of the image at different scales (sigma values). This approximates the scale-normalized Laplacian of Gaussian (sigma² * ∇²G) and is computationally cheaper. DoG is fundamental to SIFT for blob detection across scale space and for edge detection via zero crossings.",
    explanationChinese: "高斯差分减去不同尺度（sigma值）的两个高斯模糊图像版本。这近似尺度归一化的高斯拉普拉斯（sigma² * ∇²G），计算成本更低。DoG是SIFT中跨尺度空间斑点检测和通过零交叉进行边缘检测的基础。",
    diagram: "",
    terms: ["edge_detection", "image_filtering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 73,
    q: "What is the purpose of edge thinning or skeletonization?",
    qChinese: "边缘细化或骨架化的目的是什么？",
    options: [
      "A) To reduce multi-pixel-wide edge responses to single-pixel-wide representations while preserving topology",
      "B) To make edges appear thicker for better visibility",
      "C) To remove all short edges from the image",
      "D) To convert edges into corner points"
    ],
    optionsChinese: [
      "A) 将多像素宽的边缘响应减少为单像素宽的表示，同时保留拓扑结构",
      "B) 使边缘看起来更粗以提高可见性",
      "C) 从图像中删除所有短边缘",
      "D) 将边缘转换为角点"
    ],
    answer: 0,
    explanation: "Edge thinning reduces thick edge responses to one-pixel-wide representations while maintaining the connectivity and topology of the edge map. Non-maximum suppression in Canny achieves this along gradient directions. Morphological skeletonization iteratively removes boundary pixels until only a single-pixel-wide skeleton remains.",
    explanationChinese: "边缘细化将粗厚的边缘响应减少为单像素宽的表示，同时保持边缘图的连通性和拓扑结构。Canny中的非极大值抑制沿梯度方向实现这一点。形态学骨架化迭代地移除边界像素直到只剩下单像素宽的骨架。",
    diagram: "",
    terms: ["edge_detection", "morphological_operations"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 74,
    q: "What is the oriented gradient histogram used in the HED (Holistically-Nested Edge Detection) approach?",
    qChinese: "整体嵌套边缘检测（HED）方法中使用的方向梯度直方图是什么？",
    options: [
      "A) HED does not use oriented gradient histograms; it uses a deep CNN with side outputs at multiple scales to predict edges",
      "B) A classical hand-crafted feature for edge detection",
      "C) A method to count edges in different orientations",
      "D) A histogram of edge lengths"
    ],
    optionsChinese: [
      "A) HED不使用方向梯度直方图；它使用具有多尺度侧输出的深度CNN来预测边缘",
      "B) 用于边缘检测的经典手工特征",
      "C) 计算不同方向边缘数量的方法",
      "D) 边缘长度的直方图"
    ],
    answer: 0,
    explanation: "HED (Holistically-Nested Edge Detection) is a deep learning approach that uses a fully convolutional network with side outputs at multiple network depths. Each side output produces an edge prediction at a different scale, and a fusion layer combines them. This learns both fine and coarse edge cues end-to-end, outperforming classical methods.",
    explanationChinese: "HED（整体嵌套边缘检测）是一种深度学习方法，使用具有多个网络深度侧输出的全卷积网络。每个侧输出在不同尺度上产生边缘预测，融合层将它们组合。这端到端学习细粒度和粗粒度边缘线索，性能优于经典方法。",
    diagram: "",
    terms: ["edge_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 75,
    q: "What is the role of the threshold in simple edge detection using gradient magnitude?",
    qChinese: "在使用梯度幅值进行简单边缘检测时，阈值的作用是什么？",
    options: [
      "A) To determine the kernel size for gradient computation",
      "B) To set the maximum number of edges detected",
      "C) To classify pixels as edge or non-edge based on whether gradient magnitude exceeds the threshold",
      "D) To control the smoothing amount before gradient computation"
    ],
    optionsChinese: [
      "A) 确定梯度计算的核大小",
      "B) 设置检测到的最大边缘数量",
      "C) 根据梯度幅值是否超过阈值将像素分类为边缘或非边缘",
      "D) 控制梯度计算前的平滑量"
    ],
    answer: 2,
    explanation: "In simple gradient-based edge detection, pixels with gradient magnitude above the threshold are classified as edges. A high threshold detects only strong edges but may miss subtle boundaries, while a low threshold captures more edges but includes noise-induced false edges. Selecting an appropriate threshold is critical for good results.",
    explanationChinese: "在简单的基于梯度的边缘检测中，梯度幅值高于阈值的像素被分类为边缘。高阈值仅检测强边缘但可能错过细微边界，而低阈值捕获更多边缘但包含噪声引起的虚假边缘。选择适当的阈值对获得良好结果至关重要。",
    diagram: "",
    terms: ["edge_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 76,
    q: "What is contour detection, and how does it relate to edge detection?",
    qChinese: "轮廓检测是什么，它与边缘检测有什么关系？",
    options: [
      "A) Contour detection and edge detection are identical operations",
      "B) Contour detection only works in 3D space",
      "C) Contour detection finds connected chains of edge pixels forming closed or open curves that represent object boundaries",
      "D) Contour detection replaces edge detection entirely in modern systems"
    ],
    optionsChinese: [
      "A) 轮廓检测和边缘检测是相同的操作",
      "B) 轮廓检测仅在三维空间中工作",
      "C) 轮廓检测找到形成表示物体边界的封闭或开放曲线的连接边缘像素链",
      "D) 在现代系统中轮廓检测完全取代了边缘检测"
    ],
    answer: 2,
    explanation: "Contour detection groups edge pixels into organized chains or curves representing object boundaries. While edge detection identifies individual edge pixels, contour detection establishes their connectivity and ordering. Algorithms like Suzuki and Abe trace connected components in binary edge maps to extract contour hierarchies.",
    explanationChinese: "轮廓检测将边缘像素组织成表示物体边界的有序链或曲线。虽然边缘检测识别单个边缘像素，但轮廓检测建立它们的连通性和顺序。Suzuki和Abe等算法在二值边缘图中追踪连通分量以提取轮廓层次。",
    diagram: "",
    terms: ["edge_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 77,
    q: "What is the concept of scale space in the context of edge detection?",
    qChinese: "在边缘检测的背景下，尺度空间的概念是什么？",
    options: [
      "A) The physical size of the camera sensor",
      "B) The ratio of image width to height",
      "C) The resolution of the display showing the edge map",
      "D) A representation of the image at multiple levels of smoothing, revealing edges at different scales",
    ],
    optionsChinese: [
      "A) 相机传感器的物理尺寸",
      "B) 图像宽度与高度的比例",
      "C) 显示边缘图的显示器分辨率",
      "D) 在多个平滑级别上表示图像，揭示不同尺度的边缘",
    ],
    answer: 3,
    explanation: "Scale space represents an image at multiple smoothing levels by convolving with Gaussians of increasing sigma. Coarse scales reveal major edges while fine scales capture detailed boundaries. Edge detection at multiple scales helps identify features at appropriate resolutions and is foundational to multi-scale feature detection methods like SIFT.",
    explanationChinese: "尺度空间通过与递增sigma的高斯卷积在多个平滑级别上表示图像。粗尺度揭示主要边缘，而细尺度捕获详细边界。多尺度边缘检测有助于在适当分辨率下识别特征，是SIFT等多尺度特征检测方法的基础。",
    diagram: "",
    terms: ["edge_detection", "image_pyramid"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 78,
    q: "What is the difference between first-order and second-order edge detection methods?",
    qChinese: "一阶和二阶边缘检测方法有什么区别？",
    options: [
      "A) First-order methods are faster while second-order methods are more accurate",
      "B) First-order methods only detect vertical edges",
      "C) First-order methods find edges at gradient magnitude peaks; second-order methods find edges at zero crossings of the second derivative",
      "D) Second-order methods require color images"
    ],
    optionsChinese: [
      "A) 一阶方法更快而二阶方法更准确",
      "B) 一阶方法仅检测垂直边缘",
      "C) 一阶方法在梯度幅值峰值处找到边缘；二阶方法在二阶导数的零交叉处找到边缘",
      "D) 二阶方法需要彩色图像"
    ],
    answer: 2,
    explanation: "First-order methods (Sobel, Prewitt, Canny) compute image gradients and find edges where the gradient magnitude is large. Second-order methods (LoG, Marr-Hildreth) compute the Laplacian and find edges at zero crossings. First-order methods are more common in practice, while second-order methods produce closed contours but are more noise-sensitive.",
    explanationChinese: "一阶方法（Sobel、Prewitt、Canny）计算图像梯度并在梯度幅值大的地方找到边缘。二阶方法（LoG、Marr-Hildreth）计算拉普拉斯并在零交叉处找到边缘。一阶方法在实践中更常见，而二阶方法产生封闭轮廓但对噪声更敏感。",
    diagram: "",
    terms: ["edge_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 79,
    q: "What is the probabilistic Hough transform?",
    qChinese: "概率霍夫变换是什么？",
    options: [
      "A) A Hough transform that assigns probabilities to each detected line",
      "B) An efficient variant that randomly samples a subset of edge points for voting, returning line segments with endpoints",
      "C) A Hough transform that uses Bayesian inference",
      "D) A method that only detects the most probable single line in the image"
    ],
    optionsChinese: [
      "A) 为每条检测到的直线分配概率的霍夫变换",
      "B) 随机采样边缘点子集进行投票的高效变体，返回带端点的线段",
      "C) 使用贝叶斯推理的霍夫变换",
      "D) 仅检测图像中最可能的单条直线的方法"
    ],
    answer: 1,
    explanation: "The probabilistic Hough transform (HoughLinesP in OpenCV) randomly selects a subset of edge points instead of using all points, significantly reducing computation. It returns line segments with actual endpoints rather than infinite lines, which is more practical for applications. It also handles collinear point grouping to extract distinct segments.",
    explanationChinese: "概率霍夫变换（OpenCV中的HoughLinesP）随机选择边缘点的子集而不是使用所有点，显著减少计算量。它返回具有实际端点的线段而不是无限直线，这对应用更实用。它还处理共线点分组以提取不同的线段。",
    diagram: "",
    terms: ["edge_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 80,
    q: "How do deep learning-based edge detectors differ from traditional methods?",
    qChinese: "基于深度学习的边缘检测器与传统方法有何不同？",
    options: [
      "A) Deep learning methods are always faster",
      "B) Deep learning methods can only detect straight edges",
      "C) Deep learning methods do not require any training data",
      "D) Deep learning methods learn hierarchical features from data and can incorporate semantic understanding, producing more meaningful edges",
    ],
    optionsChinese: [
      "A) 深度学习方法总是更快",
      "B) 深度学习方法只能检测直线边缘",
      "C) 深度学习方法不需要任何训练数据",
      "D) 深度学习方法从数据中学习层次化特征，并能结合语义理解，产生更有意义的边缘",
    ],
    answer: 3,
    explanation: "Deep learning edge detectors like HED and BDCN learn multi-scale features automatically from annotated training data. They capture semantic information beyond local intensity gradients, distinguishing true object boundaries from texture edges. While requiring training data and more computation, they significantly outperform traditional methods on benchmarks like BSDS500.",
    explanationChinese: "HED和BDCN等深度学习边缘检测器从标注的训练数据中自动学习多尺度特征。它们捕获超越局部强度梯度的语义信息，区分真正的物体边界和纹理边缘。虽然需要训练数据和更多计算，但它们在BSDS500等基准上显著优于传统方法。",
    diagram: "",
    terms: ["edge_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 81,
    q: "What does the Harris corner detector measure?",
    qChinese: "Harris角点检测器测量什么？",
    options: [
      "A) The color variation at each pixel",
      "B) The distance from each pixel to the nearest edge",
      "C) The intensity change in all directions using the structure tensor to identify corners where gradients vary significantly in multiple directions",
      "D) The number of neighboring pixels with similar intensity"
    ],
    optionsChinese: [
      "A) 每个像素处的颜色变化",
      "B) 每个像素到最近边缘的距离",
      "C) 使用结构张量测量所有方向的强度变化，以识别梯度在多个方向上显著变化的角点",
      "D) 具有相似强度的相邻像素数量"
    ],
    answer: 2,
    explanation: "The Harris detector computes the structure tensor (second moment matrix) M from image gradients in a local window. The eigenvalues of M indicate the gradient distribution: two large eigenvalues indicate a corner, one large indicates an edge, and both small indicates a flat region. The corner response R = det(M) - k*trace(M)² avoids explicit eigenvalue computation.",
    explanationChinese: "Harris检测器从局部窗口中的图像梯度计算结构张量（二阶矩矩阵）M。M的特征值指示梯度分布：两个大特征值表示角点，一个大表示边缘，两个都小表示平坦区域。角点响应R = det(M) - k*trace(M)²避免了显式特征值计算。",
    diagram: "",
    terms: ["feature_extraction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 82,
    q: "What property makes the Harris corner detector rotation invariant?",
    qChinese: "什么性质使Harris角点检测器具有旋转不变性？",
    options: [
      "A) It uses circular kernels for gradient computation",
      "B) It applies the detector at multiple orientations",
      "C) The eigenvalues of the structure tensor are invariant to image rotation",
      "D) It normalizes the image before detection"
    ],
    optionsChinese: [
      "A) 它使用圆形核进行梯度计算",
      "B) 它在多个方向上应用检测器",
      "C) 结构张量的特征值对图像旋转不变",
      "D) 它在检测前归一化图像"
    ],
    answer: 2,
    explanation: "The eigenvalues of the structure tensor M capture the principal gradient magnitudes regardless of their orientation. When the image rotates, the eigenvectors of M rotate accordingly, but the eigenvalues remain unchanged. Since the Harris response function depends only on eigenvalues (via determinant and trace), it is rotation invariant.",
    explanationChinese: "结构张量M的特征值捕获主梯度幅值，与其方向无关。当图像旋转时，M的特征向量相应旋转，但特征值保持不变。由于Harris响应函数仅取决于特征值（通过行列式和迹），因此它具有旋转不变性。",
    diagram: "",
    terms: ["feature_extraction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 83,
    q: "Why is the Harris corner detector NOT scale invariant?",
    qChinese: "为什么Harris角点检测器不具有尺度不变性？",
    options: [
      "A) A corner detected at one scale may appear as an edge or flat region at a different scale because the fixed window size does not adapt",
      "B) It cannot process color images at different scales",
      "C) It only works on images of a specific resolution",
      "D) The gradient computation changes with image size"
    ],
    optionsChinese: [
      "A) 在一个尺度上检测到的角点在不同尺度上可能表现为边缘或平坦区域，因为固定窗口大小不会自适应",
      "B) 它不能处理不同尺度的彩色图像",
      "C) 它只适用于特定分辨率的图像",
      "D) 梯度计算随图像大小变化"
    ],
    answer: 0,
    explanation: "The Harris detector uses a fixed-size window to compute the structure tensor. When the image is scaled, a corner may become an edge (if zoomed in) or a textured region (if zoomed out) relative to the fixed window. Scale-invariant detectors like SIFT address this by searching across multiple scales automatically.",
    explanationChinese: "Harris检测器使用固定大小的窗口来计算结构张量。当图像缩放时，角点可能相对于固定窗口变成边缘（放大时）或纹理区域（缩小时）。SIFT等尺度不变检测器通过自动搜索多个尺度来解决这个问题。",
    diagram: "",
    terms: ["feature_extraction", "sift"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 84,
    q: "What are the main steps of the SIFT (Scale-Invariant Feature Transform) algorithm?",
    qChinese: "SIFT（尺度不变特征变换）算法的主要步骤是什么？",
    options: [
      "A) Scale-space extrema detection, keypoint localization, orientation assignment, descriptor generation",
      "B) Thresholding, contour detection, shape matching, classification",
      "C) Edge detection, corner detection, template matching, voting",
      "D) Histogram equalization, binarization, connected components, feature extraction"
    ],
    optionsChinese: [
      "A) 尺度空间极值检测、关键点定位、方向分配、描述符生成",
      "B) 阈值化、轮廓检测、形状匹配、分类",
      "C) 边缘检测、角点检测、模板匹配、投票",
      "D) 直方图均衡化、二值化、连通分量、特征提取"
    ],
    answer: 0,
    explanation: "SIFT has four stages: (1) build a DoG pyramid and find local extrema across scale and space, (2) refine keypoint locations to sub-pixel accuracy and reject low-contrast/edge points, (3) assign dominant gradient orientation to each keypoint for rotation invariance, (4) compute a 128-dimensional descriptor from gradient histograms in a local region.",
    explanationChinese: "SIFT有四个阶段：(1)构建DoG金字塔并在尺度和空间中找到局部极值，(2)将关键点位置精细化到亚像素精度并拒绝低对比度/边缘点，(3)为每个关键点分配主梯度方向以实现旋转不变性，(4)从局部区域的梯度直方图计算128维描述符。",
    diagram: "",
    terms: ["sift", "feature_extraction", "image_pyramid"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 85,
    q: "How does SIFT achieve scale invariance?",
    qChinese: "SIFT如何实现尺度不变性？",
    options: [
      "A) By resizing all images to the same resolution before processing",
      "B) By using only very large kernels that cover all scales",
      "C) By detecting keypoints as extrema in the Difference-of-Gaussians (DoG) scale space, identifying the characteristic scale for each feature",
      "D) By running the detector multiple times with different thresholds"
    ],
    optionsChinese: [
      "A) 通过在处理前将所有图像调整到相同分辨率",
      "B) 通过仅使用覆盖所有尺度的非常大的核",
      "C) 通过在高斯差分（DoG）尺度空间中将关键点检测为极值，为每个特征识别特征尺度",
      "D) 通过使用不同阈值多次运行检测器"
    ],
    answer: 2,
    explanation: "SIFT constructs a Gaussian scale space and computes DoG images at each octave. Keypoints are detected as local extrema in the 3D scale-space (x, y, sigma), providing both location and characteristic scale. The descriptor is computed relative to this scale, making it robust to image resizing and zoom changes.",
    explanationChinese: "SIFT构建高斯尺度空间并在每个八度计算DoG图像。关键点在三维尺度空间(x, y, sigma)中被检测为局部极值，提供位置和特征尺度。描述符相对于此尺度计算，使其对图像缩放和变焦变化具有鲁棒性。",
    diagram: "",
    terms: ["sift", "feature_extraction", "image_pyramid"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 86,
    q: "What is the SIFT descriptor, and how is it constructed?",
    qChinese: "SIFT描述符是什么，它是如何构建的？",
    options: [
      "A) A binary string computed from pixel intensity comparisons",
      "B) A single number representing the dominant gradient magnitude",
      "C) A 128-dimensional vector of gradient orientation histograms computed in a 4x4 grid of subregions around the keypoint",
      "D) A color histogram of the region around the keypoint"
    ],
    optionsChinese: [
      "A) 从像素强度比较计算的二进制字符串",
      "B) 表示主梯度幅值的单个数字",
      "C) 在关键点周围4x4子区域网格中计算的梯度方向直方图的128维向量",
      "D) 关键点周围区域的颜色直方图"
    ],
    answer: 2,
    explanation: "The SIFT descriptor divides a 16x16 pixel patch around the keypoint into a 4x4 grid of subregions. In each subregion, an 8-bin gradient orientation histogram is computed, weighted by gradient magnitude and a Gaussian window. This produces 4x4x8 = 128 values, normalized to unit length for illumination invariance.",
    explanationChinese: "SIFT描述符将关键点周围的16x16像素块划分为4x4子区域网格。在每个子区域中，计算由梯度幅值和高斯窗口加权的8个方向柱的梯度方向直方图。这产生4x4x8 = 128个值，归一化为单位长度以实现光照不变性。",
    diagram: "",
    terms: ["sift", "feature_extraction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 87,
    q: "What is the SURF algorithm's main advantage over SIFT?",
    qChinese: "SURF算法相对于SIFT的主要优势是什么？",
    options: [
      "A) SURF uses integral images and box filter approximations for faster computation while maintaining comparable performance",
      "B) SURF produces more accurate feature matches",
      "C) SURF works on color images while SIFT only works on grayscale",
      "D) SURF detects more keypoints than SIFT"
    ],
    optionsChinese: [
      "A) SURF使用积分图和方框滤波器近似来加快计算，同时保持可比较的性能",
      "B) SURF产生更准确的特征匹配",
      "C) SURF适用于彩色图像而SIFT仅适用于灰度图像",
      "D) SURF比SIFT检测更多的关键点"
    ],
    answer: 0,
    explanation: "SURF achieves significant speedup over SIFT by using integral images for fast box filter computation, approximating the DoG with Determinant of Hessian box filters, and using Haar wavelet responses for descriptors. This makes SURF several times faster while maintaining similar matching performance for most applications.",
    explanationChinese: "SURF通过使用积分图进行快速方框滤波器计算、用海森行列式方框滤波器近似DoG、以及使用Haar小波响应生成描述符，实现了相对于SIFT的显著加速。这使SURF快了几倍，同时在大多数应用中保持类似的匹配性能。",
    diagram: "",
    terms: ["feature_extraction", "sift"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 88,
    q: "What is the ORB feature detector?",
    qChinese: "ORB特征检测器是什么？",
    options: [
      "A) A deep learning-based feature detector",
      "B) A frequency-domain feature extractor",
      "C) A fast binary descriptor combining modified FAST keypoint detection with steered BRIEF descriptors for rotation invariance",
      "D) A template matching approach for object detection"
    ],
    optionsChinese: [
      "A) 基于深度学习的特征检测器",
      "B) 频域特征提取器",
      "C) 结合改进的FAST关键点检测和旋转BRIEF描述符的快速二进制描述符，具有旋转不变性",
      "D) 用于物体检测的模板匹配方法"
    ],
    answer: 2,
    explanation: "ORB combines FAST corner detection with orientation via intensity centroid and BRIEF binary descriptors rotated to match keypoint orientation. It is patent-free, much faster than SIFT and SURF, and uses binary descriptors matched with Hamming distance. ORB is widely used in real-time applications like visual SLAM.",
    explanationChinese: "ORB结合了通过强度质心确定方向的FAST角点检测和旋转以匹配关键点方向的BRIEF二进制描述符。它无专利限制，比SIFT和SURF快得多，使用汉明距离匹配的二进制描述符。ORB广泛用于视觉SLAM等实时应用。",
    diagram: "",
    terms: ["feature_extraction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 89,
    q: "What is the FAST corner detector?",
    qChinese: "FAST角点检测器是什么？",
    options: [
      "A) A gradient-based corner detector similar to Harris",
      "B) A corner detector that tests if contiguous pixels on a circle around a candidate are all brighter or darker than the center",
      "C) A detector based on Fourier analysis of local patches",
      "D) A machine learning classifier trained on gradient features"
    ],
    optionsChinese: [
      "A) 类似Harris的基于梯度的角点检测器",
      "B) 测试候选点周围圆上的连续像素是否都比中心更亮或更暗的角点检测器",
      "C) 基于局部块的傅里叶分析的检测器",
      "D) 在梯度特征上训练的机器学习分类器"
    ],
    answer: 1,
    explanation: "FAST examines 16 pixels on a circle of radius 3 around each candidate point. If N contiguous pixels are all brighter or all darker than the center by a threshold, it is a corner. A decision tree accelerates the test. FAST is extremely fast but not inherently scale or rotation invariant.",
    explanationChinese: "FAST检查每个候选点周围半径为3的圆上的16个像素。如果N个连续像素都比中心亮或暗超过阈值，则为角点。决策树加速测试。FAST速度极快但本身不具有尺度或旋转不变性。",
    diagram: "",
    terms: ["feature_extraction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 90,
    q: "What is the BRIEF descriptor?",
    qChinese: "BRIEF描述符是什么？",
    options: [
      "A) A floating-point descriptor based on gradient histograms",
      "B) A compact version of the SIFT descriptor",
      "C) A descriptor based on color channel differences",
      "D) A binary descriptor formed by comparing intensities at point pairs in a patch, encoded as a bit string",
    ],
    optionsChinese: [
      "A) 基于梯度直方图的浮点描述符",
      "B) SIFT描述符的紧凑版本",
      "C) 基于颜色通道差异的描述符",
      "D) 通过比较块中点对的强度形成的二进制描述符，编码为位字符串",
    ],
    answer: 3,
    explanation: "BRIEF compares intensities at pairs of randomly selected points within a patch and encodes each comparison as a single bit. Typical descriptors are 128 to 512 bits. BRIEF is very fast to compute and match using Hamming distance, but is not rotation invariant without modification as used in ORB.",
    explanationChinese: "BRIEF比较块内随机选择的点对的强度，并将每次比较编码为单个比特。典型描述符为128到512比特。BRIEF计算和使用汉明距离匹配都非常快，但不经修改不具有旋转不变性，ORB中使用了修改版本。",
    diagram: "",
    terms: ["feature_extraction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 91,
    q: "How are feature correspondences typically established between two images?",
    qChinese: "如何在两幅图像之间通常建立特征对应关系？",
    options: [
      "A) By comparing pixel colors directly",
      "B) By finding features at the exact same pixel location in both images",
      "C) By matching features based on their image coordinates only",
      "D) By computing descriptor distance between feature pairs and selecting nearest neighbors with ratio test filtering",
    ],
    optionsChinese: [
      "A) 通过直接比较像素颜色",
      "B) 通过在两幅图像中找到完全相同像素位置的特征",
      "C) 仅基于图像坐标匹配特征",
      "D) 通过计算特征对之间的描述符距离并使用比率测试筛选选择最近邻",
    ],
    answer: 3,
    explanation: "Feature matching computes the distance between descriptors from two images, using Euclidean distance for SIFT or Hamming distance for binary descriptors. The nearest neighbor is the best match candidate. Lowe's ratio test rejects ambiguous matches, significantly improving match quality and reducing false positives.",
    explanationChinese: "特征匹配计算两幅图像描述符之间的距离，SIFT使用欧几里得距离，二进制描述符使用汉明距离。最近邻是最佳匹配候选。Lowe比率测试拒绝模糊匹配，显著提高匹配质量并减少误匹配。",
    diagram: "",
    terms: ["feature_extraction", "sift"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 92,
    q: "What is Lowe's ratio test in feature matching?",
    qChinese: "特征匹配中的Lowe比率测试是什么？",
    options: [
      "A) Comparing the ratio of feature sizes between two images",
      "B) Comparing the aspect ratio of detected keypoint regions",
      "C) Testing if the ratio of matched to unmatched features exceeds 50%",
      "D) Rejecting a match if the distance ratio of best to second-best match exceeds a threshold, typically 0.7 to 0.8",
    ],
    optionsChinese: [
      "A) 比较两幅图像之间特征大小的比率",
      "B) 比较检测到的关键点区域的纵横比",
      "C) 测试匹配与未匹配特征的比率是否超过50%",
      "D) 如果最佳与次佳匹配的距离比率超过阈值（通常0.7到0.8），则拒绝匹配",
    ],
    answer: 3,
    explanation: "Lowe's ratio test compares d1/d2, where d1 is distance to the best match and d2 to the second best. If this ratio is below a threshold (0.7-0.8), the match is distinctive and accepted. High ratios indicate the best match is not sufficiently better than alternatives, suggesting an unreliable correspondence.",
    explanationChinese: "Lowe比率测试比较d1/d2，其中d1是到最佳匹配的距离，d2是到次佳的距离。如果此比率低于阈值（0.7-0.8），则匹配是独特的并被接受。高比率表明最佳匹配不够优于其他选项，表示不可靠的对应。",
    diagram: "",
    terms: ["feature_extraction", "sift"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 93,
    q: "What is RANSAC used for in the context of feature matching?",
    qChinese: "RANSAC在特征匹配的背景下用于什么？",
    options: [
      "A) Detecting features in noisy images",
      "B) Generating additional feature points",
      "C) Speeding up descriptor computation",
      "D) Robustly estimating geometric models like homography from correspondences while rejecting outlier matches",
    ],
    optionsChinese: [
      "A) 在噪声图像中检测特征",
      "B) 生成额外的特征点",
      "C) 加速描述符计算",
      "D) 从对应关系中鲁棒地估计单应性等几何模型同时拒绝异常匹配",
    ],
    answer: 3,
    explanation: "RANSAC iteratively selects random minimal subsets of matches to estimate a model (homography, fundamental matrix), then counts inliers fitting the model. After many iterations, the model with the most inliers is selected. This is robust to large fractions of incorrect matches and is essential for geometric verification.",
    explanationChinese: "RANSAC迭代地选择匹配的随机最小子集来估计模型（单应性、基础矩阵），然后计算符合模型的内点数。经过多次迭代后，选择内点最多的模型。这对大比例的错误匹配具有鲁棒性，是几何验证的关键步骤。",
    diagram: "",
    terms: ["feature_extraction", "homography"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 94,
    q: "What is the difference between feature detection and feature description?",
    qChinese: "特征检测和特征描述有什么区别？",
    options: [
      "A) They are the same operation",
      "B) Detection is faster but less accurate than description",
      "C) Detection works on color images; description works on grayscale",
      "D) Detection finds interest point locations; description encodes local appearance around each point into a vector for matching",
    ],
    optionsChinese: [
      "A) 它们是相同的操作",
      "B) 检测更快但不如描述准确",
      "C) 检测适用于彩色图像；描述适用于灰度图像",
      "D) 检测找到兴趣点位置；描述将每个点周围的局部外观编码为用于匹配的向量",
    ],
    answer: 3,
    explanation: "Feature detection identifies repeatable, distinctive locations in images that can be found reliably under viewpoint and lighting changes. Feature description then encodes the local image region around each detected point into a compact descriptor vector that can be compared across images for matching purposes.",
    explanationChinese: "特征检测识别图像中可重复的、独特的位置，这些位置在视点和光照变化下可以可靠地找到。然后特征描述将每个检测到的点周围的局部图像区域编码为紧凑的描述符向量，可以跨图像比较进行匹配。",
    diagram: "",
    terms: ["feature_extraction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 95,
    q: "How does the Shi-Tomasi corner detector differ from Harris?",
    qChinese: "Shi-Tomasi角点检测器与Harris有何不同？",
    options: [
      "A) Shi-Tomasi uses a different image filtering approach",
      "B) Shi-Tomasi operates on color images while Harris uses grayscale",
      "C) Shi-Tomasi uses min(lambda1, lambda2) as the corner response instead of Harris's det(M) - k*trace(M)²",
      "D) Shi-Tomasi is a deep learning-based detector"
    ],
    optionsChinese: [
      "A) Shi-Tomasi使用不同的图像滤波方法",
      "B) Shi-Tomasi适用于彩色图像而Harris使用灰度",
      "C) Shi-Tomasi使用min(lambda1, lambda2)作为角点响应，而不是Harris的det(M) - k*trace(M)²",
      "D) Shi-Tomasi是基于深度学习的检测器"
    ],
    answer: 2,
    explanation: "The Shi-Tomasi detector modifies Harris by using the minimum eigenvalue as the corner quality measure: R = min(lambda1, lambda2). A point is a corner if the minimum eigenvalue exceeds a threshold, meaning there is significant gradient variation in all directions. This provides a more intuitive and stable threshold.",
    explanationChinese: "Shi-Tomasi检测器通过使用最小特征值作为角点质量度量来修改Harris：R = min(lambda1, lambda2)。如果最小特征值超过阈值，则该点是角点，意味着所有方向上都有显著的梯度变化。这提供了更直观和稳定的阈值。",
    diagram: "",
    terms: ["feature_extraction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 96,
    q: "What is the purpose of orientation assignment in SIFT?",
    qChinese: "SIFT中方向分配的目的是什么？",
    options: [
      "A) To determine the color of the keypoint region",
      "B) To calculate the size of the descriptor",
      "C) To assign a dominant gradient orientation to each keypoint enabling rotation-invariant descriptor computation",
      "D) To determine the keypoint depth in the scene"
    ],
    optionsChinese: [
      "A) 确定关键点区域的颜色",
      "B) 计算描述符的大小",
      "C) 为每个关键点分配主梯度方向，实现旋转不变的描述符计算",
      "D) 确定关键点在场景中的深度"
    ],
    answer: 2,
    explanation: "SIFT computes a gradient orientation histogram in the keypoint neighborhood at its characteristic scale. The dominant orientation (histogram peak) is assigned. The descriptor is then computed relative to this orientation, making it invariant to rotation. Keypoints with multiple strong peaks generate multiple descriptors.",
    explanationChinese: "SIFT在关键点的特征尺度下在其邻域中计算梯度方向直方图。分配主方向（直方图峰值）。然后描述符相对于此方向计算，使其对旋转不变。具有多个强峰的关键点生成多个描述符。",
    diagram: "",
    terms: ["sift", "feature_extraction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 97,
    q: "What is the bag-of-visual-words model?",
    qChinese: "视觉词袋模型是什么？",
    options: [
      "A) A method to store images as text descriptions",
      "B) A method for finding exact duplicate images",
      "C) A technique for generating image captions",
      "D) An approach that clusters local descriptors into a visual vocabulary and represents images as histograms of visual word occurrences",
    ],
    optionsChinese: [
      "A) 将图像存储为文本描述的方法",
      "B) 查找完全重复图像的方法",
      "C) 生成图像字幕的技术",
      "D) 将局部描述符聚类为视觉词汇表并将图像表示为视觉词出现次数直方图的方法",
    ],
    answer: 3,
    explanation: "The bag-of-visual-words model extracts local features from training images, clusters them with k-means to create a visual vocabulary, then represents each image as a histogram of visual word frequencies. This fixed-length representation enables classification using standard classifiers like SVM, analogous to text retrieval.",
    explanationChinese: "视觉词袋模型从训练图像中提取局部特征，使用k-means聚类创建视觉词汇表，然后将每幅图像表示为视觉词频率的直方图。这种固定长度的表示使用SVM等标准分类器实现分类，类似于文本检索。",
    diagram: "",
    terms: ["feature_extraction", "image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 98,
    q: "What is the HOG descriptor primarily used for?",
    qChinese: "HOG描述符主要用于什么？",
    options: [
      "A) Image compression",
      "B) Image segmentation",
      "C) Object detection, especially pedestrian detection, by capturing gradient orientation distributions in local cells",
      "D) Color quantization"
    ],
    optionsChinese: [
      "A) 图像压缩",
      "B) 图像分割",
      "C) 物体检测，特别是行人检测，通过捕获局部单元中的梯度方向分布",
      "D) 颜色量化"
    ],
    answer: 2,
    explanation: "HOG divides an image window into cells, computes gradient orientation histograms in each cell, and normalizes within larger blocks for illumination invariance. The concatenated histograms form a feature vector capturing shape. Dalal and Triggs demonstrated HOG's effectiveness for pedestrian detection with a linear SVM classifier.",
    explanationChinese: "HOG将图像窗口分为单元，在每个单元中计算梯度方向直方图，并在更大的块内归一化以实现光照不变性。连接的直方图形成捕获形状的特征向量。Dalal和Triggs证明了HOG使用线性SVM分类器进行行人检测的有效性。",
    diagram: "",
    terms: ["feature_extraction", "object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 99,
    q: "What is the Hessian matrix used for in feature detection?",
    qChinese: "海森矩阵在特征检测中用于什么？",
    options: [
      "A) Computing average brightness of an image region",
      "B) Computing optical flow between frames",
      "C) Detecting blob-like structures by analyzing the second-order derivative matrix where the determinant indicates blob presence",
      "D) Estimating camera motion"
    ],
    optionsChinese: [
      "A) 计算图像区域的平均亮度",
      "B) 计算帧间的光流",
      "C) 通过分析二阶导数矩阵检测斑点状结构，其行列式指示斑点的存在",
      "D) 估计相机运动"
    ],
    answer: 2,
    explanation: "The Hessian matrix H contains second-order partial derivatives of image intensity. Its determinant det(H) = Ixx*Iyy - Ixy squared responds strongly to blob-like structures. SURF uses the determinant of the Hessian for blob detection, while the trace (Laplacian) indicates blob polarity (bright or dark).",
    explanationChinese: "海森矩阵H包含图像强度的二阶偏导数。其行列式det(H) = Ixx*Iyy - Ixy²对斑点状结构有强烈响应。SURF使用海森行列式进行斑点检测，而迹（拉普拉斯）指示斑点极性（亮或暗）。",
    diagram: "",
    terms: ["feature_extraction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 100,
    q: "What is feature matching with cross-checking?",
    qChinese: "带交叉检查的特征匹配是什么？",
    options: [
      "A) Matching features using two different descriptor types",
      "B) Verifying matches by computing features twice",
      "C) Checking if matched features have the same color",
      "D) Accepting a match only if both features are each other's nearest neighbor in descriptor space",
    ],
    optionsChinese: [
      "A) 使用两种不同的描述符类型匹配特征",
      "B) 通过两次计算特征来验证匹配",
      "C) 检查匹配的特征是否具有相同的颜色",
      "D) 仅当两个特征在描述符空间中互为最近邻时才接受匹配",
    ],
    answer: 3,
    explanation: "Cross-checking requires mutual nearest neighbor matching. If feature A in image 1 is closest to feature B in image 2, AND feature B is closest to feature A, the match is accepted. This bidirectional consistency check eliminates many false matches that one-directional matching would produce.",
    explanationChinese: "交叉检查要求互最近邻匹配。如果图像1中的特征A与图像2中的特征B最接近，且特征B与特征A最接近，则接受匹配。这种双向一致性检查消除了单向匹配会产生的许多虚假匹配。",
    diagram: "",
    terms: ["feature_extraction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 101,
    q: "What is the role of non-maximum suppression in feature detection?",
    qChinese: "非极大值抑制在特征检测中的作用是什么？",
    options: [
      "A) To increase the number of detected features",
      "B) To convert features from floating point to binary",
      "C) To normalize feature descriptors",
      "D) To ensure only the strongest response within a local neighborhood is kept, preventing clustered detections",
    ],
    optionsChinese: [
      "A) 增加检测到的特征数量",
      "B) 将特征从浮点转换为二进制",
      "C) 归一化特征描述符",
      "D) 确保仅保留局部邻域内最强的响应，防止聚集检测",
    ],
    answer: 3,
    explanation: "Non-maximum suppression in feature detection retains only local maxima of the response function within a neighborhood. Without it, a single corner would produce many clustered detections. This ensures features are well-distributed and each detection corresponds to a distinct image structure.",
    explanationChinese: "特征检测中的非极大值抑制仅保留邻域内响应函数的局部最大值。没有它，单个角点会产生许多聚集的检测。这确保特征分布良好，每个检测对应一个独特的图像结构。",
    diagram: "",
    terms: ["feature_extraction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 102,
    q: "What is the difference between local and global image features?",
    qChinese: "局部和全局图像特征有什么区别？",
    options: [
      "A) Local features are computed in color and global in grayscale",
      "B) Local features describe small patches around keypoints; global features describe the entire image as a whole",
      "C) Local features are more accurate than global features",
      "D) Global features can only be extracted from high-resolution images"
    ],
    optionsChinese: [
      "A) 局部特征在彩色中计算而全局特征在灰度中计算",
      "B) 局部特征描述关键点周围的小块；全局特征将整个图像作为整体描述",
      "C) 局部特征比全局特征更准确",
      "D) 全局特征只能从高分辨率图像中提取"
    ],
    answer: 1,
    explanation: "Local features like SIFT and ORB describe small distinctive regions and enable partial matching and geometric verification. Global features like GIST and color histograms summarize the entire image into a single vector. Many systems combine both: local for geometric verification and global for efficient retrieval.",
    explanationChinese: "SIFT和ORB等局部特征描述小的独特区域，实现部分匹配和几何验证。GIST和颜色直方图等全局特征将整个图像总结为单个向量。许多系统结合两者：局部用于几何验证，全局用于高效检索。",
    diagram: "",
    terms: ["feature_extraction", "sift"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 103,
    q: "What is the advantage of binary descriptors over floating-point descriptors?",
    qChinese: "二进制描述符相对于浮点描述符的优势是什么？",
    options: [
      "A) Binary descriptors are always more accurate",
      "B) Binary descriptors are invariant to all transformations",
      "C) Binary descriptors work on color images while floating-point ones do not",
      "D) Binary descriptors require less memory and can be matched faster using Hamming distance with bitwise XOR",
    ],
    optionsChinese: [
      "A) 二进制描述符总是更准确",
      "B) 二进制描述符对所有变换不变",
      "C) 二进制描述符适用于彩色图像而浮点描述符不适用",
      "D) 二进制描述符需要更少的内存，可以使用按位异或的汉明距离更快地匹配",
    ],
    answer: 3,
    explanation: "Binary descriptors like BRIEF, ORB, BRISK store features as bit strings requiring only 32-64 bytes versus 512 bytes for SIFT. Matching uses Hamming distance via XOR and popcount, which is extremely fast on modern CPUs. This makes them ideal for real-time applications, though they may sacrifice some discriminative power.",
    explanationChinese: "BRIEF、ORB、BRISK等二进制描述符将特征存储为位字符串，仅需32-64字节，而SIFT需要512字节。匹配使用XOR和popcount的汉明距离，在现代CPU上极快。这使它们非常适合实时应用，尽管可能牺牲一些判别能力。",
    diagram: "",
    terms: ["feature_extraction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 104,
    q: "What is the difference between blob detection and corner detection?",
    qChinese: "斑点检测和角点检测有什么区别？",
    options: [
      "A) They detect exactly the same features",
      "B) Corner detection only works on binary images",
      "C) Blob detectors find regions differing from surroundings with a characteristic scale; corner detectors find points where gradients change sharply in two directions",
      "D) Blob detection is only used in medical imaging"
    ],
    optionsChinese: [
      "A) 它们检测完全相同的特征",
      "B) 角点检测仅适用于二值图像",
      "C) 斑点检测器找到与周围环境不同且具有特征尺度的区域；角点检测器找到梯度在两个方向上急剧变化的点",
      "D) 斑点检测仅用于医学成像"
    ],
    answer: 2,
    explanation: "Corner detectors like Harris and FAST find points where intensity varies significantly in two perpendicular directions. Blob detectors like LoG and DoH find regions brighter or darker than surroundings with a characteristic size. Blobs naturally provide scale information, while corners typically need additional scale selection mechanisms.",
    explanationChinese: "Harris和FAST等角点检测器找到强度在两个垂直方向上显著变化的点。LoG和DoH等斑点检测器找到比周围环境更亮或更暗且具有特征大小的区域。斑点自然提供尺度信息，而角点通常需要额外的尺度选择机制。",
    diagram: "",
    terms: ["feature_extraction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 105,
    q: "What is SuperPoint in learned feature detection?",
    qChinese: "在学习特征检测中SuperPoint是什么？",
    options: [
      "A) An improved version of SIFT",
      "B) A self-supervised deep learning model that jointly detects keypoints and computes descriptors in a single forward pass",
      "C) A hardware accelerator for feature matching",
      "D) A statistical method for outlier rejection"
    ],
    optionsChinese: [
      "A) SIFT的改进版本",
      "B) 在单次前向传播中联合检测关键点和计算描述符的自监督深度学习模型",
      "C) 用于特征匹配的硬件加速器",
      "D) 用于异常值拒绝的统计方法"
    ],
    answer: 1,
    explanation: "SuperPoint is a deep neural network trained with self-supervised learning that simultaneously detects interest points and computes dense descriptors. It uses Homographic Adaptation for training without manual labels. SuperPoint provides repeatable detections and discriminative descriptors, outperforming traditional methods under challenging conditions.",
    explanationChinese: "SuperPoint是一个用自监督学习训练的深度神经网络，同时检测兴趣点和计算密集描述符。它使用单应性自适应进行训练，无需手动标签。SuperPoint提供可重复的检测和判别描述符，在具有挑战性的条件下优于传统方法。",
    diagram: "",
    terms: ["feature_extraction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 106,
    q: "What is an integral image and how is it used in feature detection?",
    qChinese: "积分图是什么，它在特征检测中如何使用？",
    options: [
      "A) An image stored in integer format",
      "B) A precomputed summed-area table that enables constant-time computation of the sum of pixel values in any rectangular region",
      "C) An image that integrates information from multiple cameras",
      "D) A compressed representation of image gradients"
    ],
    optionsChinese: [
      "A) 以整数格式存储的图像",
      "B) 一个预计算的求和面积表，能够在常数时间内计算任何矩形区域的像素值之和",
      "C) 整合来自多个相机信息的图像",
      "D) 图像梯度的压缩表示"
    ],
    answer: 1,
    explanation: "An integral image stores at each pixel the sum of all pixels above and to the left. This allows computing the sum of any rectangular region in O(1) time using four lookups, regardless of region size. SURF uses integral images for fast box filter computation, enabling efficient multi-scale feature detection.",
    explanationChinese: "积分图在每个像素处存储其上方和左方所有像素的总和。这允许使用四次查找在O(1)时间内计算任何矩形区域的总和，无论区域大小。SURF使用积分图进行快速方框滤波器计算，实现高效的多尺度特征检测。",
    diagram: "",
    terms: ["feature_extraction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 107,
    q: "What is the k parameter's role in the Harris corner response R = det(M) - k*trace(M)²?",
    qChinese: "Harris角点响应R = det(M) - k*trace(M)²中k参数的作用是什么？",
    options: [
      "A) To set the number of corners to detect",
      "B) To control sensitivity between corners and edges, with typical values from 0.04 to 0.06",
      "C) To determine the smoothing kernel size",
      "D) To set the threshold for corner classification"
    ],
    optionsChinese: [
      "A) 设置要检测的角点数量",
      "B) 控制角点和边缘之间的敏感度，典型值从0.04到0.06",
      "C) 确定平滑核的大小",
      "D) 设置角点分类的阈值"
    ],
    answer: 1,
    explanation: "The parameter k balances the corner response between the determinant and trace terms. A larger k makes the detector more selective. The response is positive for corners, negative for edges, and small for flat regions. This formulation avoids computing eigenvalues explicitly while still distinguishing corners from edges.",
    explanationChinese: "参数k平衡行列式和迹项之间的角点响应。较大的k使检测器更具选择性。响应在角点处为正，在边缘处为负，在平坦区域较小。这种公式避免了显式计算特征值，同时仍能区分角点和边缘。",
    diagram: "",
    terms: ["feature_extraction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 108,
    q: "What does the AKAZE feature detector use for scale space construction?",
    qChinese: "AKAZE特征检测器使用什么来构建尺度空间？",
    options: [
      "A) Standard Gaussian blurring like SIFT",
      "B) Simple image downsampling without filtering",
      "C) Wavelet transforms",
      "D) Nonlinear diffusion filtering via fast explicit diffusion which preserves object boundaries better",
    ],
    optionsChinese: [
      "A) 像SIFT一样的标准高斯模糊",
      "B) 不经滤波的简单图像下采样",
      "C) 小波变换",
      "D) 通过快速显式扩散的非线性扩散滤波，更好地保留物体边界",
    ],
    answer: 3,
    explanation: "AKAZE uses nonlinear diffusion filtering which adapts smoothing to local image content, preserving edges while smoothing homogeneous regions. Fast explicit diffusion (FED) makes this computationally efficient. This produces a scale space where object boundaries remain sharp, leading to better keypoint localization than Gaussian scale space.",
    explanationChinese: "AKAZE使用非线性扩散滤波，它根据局部图像内容自适应平滑，在平滑均匀区域的同时保留边缘。快速显式扩散（FED）使这在计算上高效。这产生了物体边界保持清晰的尺度空间，导致比高斯尺度空间更好的关键点定位。",
    diagram: "",
    terms: ["feature_extraction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 109,
    q: "What is the VLAD representation for image retrieval?",
    qChinese: "用于图像检索的VLAD表示是什么？",
    options: [
      "A) A binary feature descriptor",
      "B) A representation based on edge density maps",
      "C) A global color histogram",
      "D) An image representation encoding the residuals between local descriptors and their nearest visual words, aggregated per cluster",
    ],
    optionsChinese: [
      "A) 二进制特征描述符",
      "B) 基于边缘密度图的表示",
      "C) 全局颜色直方图",
      "D) 编码局部描述符与其最近视觉词之间残差的图像表示，按聚类聚合",
    ],
    answer: 3,
    explanation: "VLAD extends bag-of-words by storing accumulated residual differences between descriptors and their assigned cluster centers. For each visual word, residuals of all assigned descriptors are summed. The concatenated and normalized result captures more discriminative information than simple word counts for image retrieval.",
    explanationChinese: "VLAD扩展了词袋模型，存储描述符与其分配的聚类中心之间的累积残差。对于每个视觉词，所有分配描述符的残差被求和。连接和归一化的结果比简单的词计数为图像检索捕获更多判别信息。",
    diagram: "",
    terms: ["feature_extraction", "image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 110,
    q: "What is the Fisher Vector encoding?",
    qChinese: "Fisher向量编码是什么？",
    options: [
      "A) A method based on Fisher's exact test",
      "B) A technique for image compression",
      "C) An encoding that captures first and second order statistics of local descriptors relative to a Gaussian Mixture Model",
      "D) A method for color feature extraction"
    ],
    optionsChinese: [
      "A) 基于Fisher精确检验的方法",
      "B) 图像压缩技术",
      "C) 捕获局部描述符相对于高斯混合模型的一阶和二阶统计量的编码",
      "D) 颜色特征提取方法"
    ],
    answer: 2,
    explanation: "Fisher Vector encoding fits a Gaussian Mixture Model to local feature descriptors, then computes the gradient of the log-likelihood with respect to GMM parameters. This captures both the mean and variance of descriptor deviations from each component, providing a richer representation than bag-of-words or VLAD for image classification.",
    explanationChinese: "Fisher向量编码将高斯混合模型拟合到局部特征描述符，然后计算对数似然关于GMM参数的梯度。这捕获了描述符偏离每个分量的均值和方差，为图像分类提供了比词袋模型或VLAD更丰富的表示。",
    diagram: "",
    terms: ["feature_extraction", "image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 111,
    q: "What is image segmentation in computer vision?",
    qChinese: "\u8ba1\u7b97\u673a\u89c6\u89c9\u4e2d\u7684\u56fe\u50cf\u5206\u5272\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) Partitioning an image into meaningful regions or groups of pixels that share common properties",
      "B) Compressing an image to reduce file size",
      "C) Converting an image from color to grayscale",
      "D) Detecting edges in an image"
    ],
    optionsChinese: [
      "A) \u5c06\u56fe\u50cf\u5212\u5206\u4e3a\u5171\u4eab\u5171\u540c\u5c5e\u6027\u7684\u6709\u610f\u4e49\u533a\u57df\u6216\u50cf\u7d20\u7ec4",
      "B) \u538b\u7f29\u56fe\u50cf\u4ee5\u51cf\u5c0f\u6587\u4ef6\u5927\u5c0f",
      "C) \u5c06\u56fe\u50cf\u4ece\u5f69\u8272\u8f6c\u6362\u4e3a\u7070\u5ea6",
      "D) \u68c0\u6d4b\u56fe\u50cf\u4e2d\u7684\u8fb9\u7f18"
    ],
    answer: 0,
    explanation: "Image segmentation divides an image into non-overlapping regions where pixels within each region share similar properties such as color, texture, or intensity. It is a fundamental mid-level vision task that bridges low-level pixel processing and high-level object understanding, used in medical imaging, autonomous driving, and scene understanding.",
    explanationChinese: "\u56fe\u50cf\u5206\u5272\u5c06\u56fe\u50cf\u5212\u5206\u4e3a\u4e0d\u91cd\u53e0\u7684\u533a\u57df\uff0c\u6bcf\u4e2a\u533a\u57df\u5185\u7684\u50cf\u7d20\u5171\u4eab\u76f8\u4f3c\u7684\u5c5e\u6027\uff0c\u5982\u989c\u8272\u3001\u7eb9\u7406\u6216\u5f3a\u5ea6\u3002\u5b83\u662f\u4e00\u4e2a\u57fa\u672c\u7684\u4e2d\u7ea7\u89c6\u89c9\u4efb\u52a1\uff0c\u8fde\u63a5\u4f4e\u7ea7\u50cf\u7d20\u5904\u7406\u548c\u9ad8\u7ea7\u7269\u4f53\u7406\u89e3\uff0c\u7528\u4e8e\u533b\u5b66\u6210\u50cf\u3001\u81ea\u52a8\u9a7e\u9a76\u548c\u573a\u666f\u7406\u89e3\u3002",
    diagram: "",
    terms: ["image_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 112,
    q: "What is Otsu's thresholding method?",
    qChinese: "Otsu\u9608\u503c\u5316\u65b9\u6cd5\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) A manual threshold selection method",
      "B) An automatic method that finds the optimal threshold by maximizing the between-class variance of the intensity histogram",
      "C) A method that uses multiple fixed thresholds",
      "D) A method based on edge detection for thresholding"
    ],
    optionsChinese: [
      "A) \u624b\u52a8\u9608\u503c\u9009\u62e9\u65b9\u6cd5",
      "B) \u901a\u8fc7\u6700\u5927\u5316\u5f3a\u5ea6\u76f4\u65b9\u56fe\u7684\u7c7b\u95f4\u65b9\u5dee\u6765\u627e\u5230\u6700\u4f18\u9608\u503c\u7684\u81ea\u52a8\u65b9\u6cd5",
      "C) \u4f7f\u7528\u591a\u4e2a\u56fa\u5b9a\u9608\u503c\u7684\u65b9\u6cd5",
      "D) \u57fa\u4e8e\u8fb9\u7f18\u68c0\u6d4b\u7684\u9608\u503c\u5316\u65b9\u6cd5"
    ],
    answer: 1,
    explanation: "Otsu's method automatically determines the optimal global threshold by exhaustively searching for the threshold that maximizes the between-class variance (equivalently minimizes within-class variance) of the two pixel groups. It assumes a bimodal histogram and works best when foreground and background have distinct intensity distributions.",
    explanationChinese: "Otsu\u65b9\u6cd5\u901a\u8fc7\u7a77\u4e3e\u641c\u7d22\u6700\u5927\u5316\u4e24\u4e2a\u50cf\u7d20\u7ec4\u7684\u7c7b\u95f4\u65b9\u5dee\uff08\u7b49\u4ef7\u4e8e\u6700\u5c0f\u5316\u7c7b\u5185\u65b9\u5dee\uff09\u7684\u9608\u503c\u6765\u81ea\u52a8\u786e\u5b9a\u6700\u4f18\u5168\u5c40\u9608\u503c\u3002\u5b83\u5047\u8bbe\u76f4\u65b9\u56fe\u662f\u53cc\u5cf0\u7684\uff0c\u5f53\u524d\u666f\u548c\u80cc\u666f\u5177\u6709\u4e0d\u540c\u7684\u5f3a\u5ea6\u5206\u5e03\u65f6\u6548\u679c\u6700\u597d\u3002",
    diagram: "",
    terms: ["image_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 113,
    q: "What is adaptive thresholding and when is it preferred over global thresholding?",
    qChinese: "\u81ea\u9002\u5e94\u9608\u503c\u5316\u662f\u4ec0\u4e48\uff0c\u4ec0\u4e48\u65f6\u5019\u4f18\u4e8e\u5168\u5c40\u9608\u503c\u5316\uff1f",
    options: [
      "A) Computing a different threshold for each pixel based on the local neighborhood, useful for images with uneven illumination",
      "B) Using a random threshold for each pixel",
      "C) Applying the same threshold multiple times",
      "D) Using color information instead of intensity for thresholding"
    ],
    optionsChinese: [
      "A) \u6839\u636e\u5c40\u90e8\u90bb\u57df\u4e3a\u6bcf\u4e2a\u50cf\u7d20\u8ba1\u7b97\u4e0d\u540c\u7684\u9608\u503c\uff0c\u9002\u7528\u4e8e\u5149\u7167\u4e0d\u5747\u5300\u7684\u56fe\u50cf",
      "B) \u4e3a\u6bcf\u4e2a\u50cf\u7d20\u4f7f\u7528\u968f\u673a\u9608\u503c",
      "C) \u591a\u6b21\u5e94\u7528\u76f8\u540c\u7684\u9608\u503c",
      "D) \u4f7f\u7528\u989c\u8272\u4fe1\u606f\u800c\u4e0d\u662f\u5f3a\u5ea6\u8fdb\u884c\u9608\u503c\u5316"
    ],
    answer: 0,
    explanation: "Adaptive thresholding computes a local threshold for each pixel based on its neighborhood statistics (mean or Gaussian-weighted mean). This handles varying illumination across the image, where a single global threshold would fail. It is essential for document binarization and images with shadows or gradual lighting changes.",
    explanationChinese: "\u81ea\u9002\u5e94\u9608\u503c\u5316\u6839\u636e\u6bcf\u4e2a\u50cf\u7d20\u7684\u90bb\u57df\u7edf\u8ba1\uff08\u5747\u503c\u6216\u9ad8\u65af\u52a0\u6743\u5747\u503c\uff09\u8ba1\u7b97\u5c40\u90e8\u9608\u503c\u3002\u8fd9\u5904\u7406\u4e86\u56fe\u50cf\u4e2d\u4e0d\u540c\u7684\u5149\u7167\u53d8\u5316\uff0c\u800c\u5355\u4e00\u5168\u5c40\u9608\u503c\u4f1a\u5931\u8d25\u3002\u5b83\u5bf9\u6587\u6863\u4e8c\u503c\u5316\u548c\u5177\u6709\u9634\u5f71\u6216\u6e10\u53d8\u5149\u7167\u53d8\u5316\u7684\u56fe\u50cf\u81f3\u5173\u91cd\u8981\u3002",
    diagram: "",
    terms: ["image_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 114,
    q: "What is region growing in image segmentation?",
    qChinese: "\u56fe\u50cf\u5206\u5272\u4e2d\u7684\u533a\u57df\u751f\u957f\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) Enlarging the image to a higher resolution",
      "B) Starting from seed pixels and iteratively adding neighboring pixels that satisfy a similarity criterion to grow regions",
      "C) Growing the number of segments over time",
      "D) Expanding edge maps into filled regions"
    ],
    optionsChinese: [
      "A) \u5c06\u56fe\u50cf\u653e\u5927\u5230\u66f4\u9ad8\u5206\u8fa8\u7387",
      "B) \u4ece\u79cd\u5b50\u50cf\u7d20\u5f00\u59cb\uff0c\u8fed\u4ee3\u6dfb\u52a0\u6ee1\u8db3\u76f8\u4f3c\u6027\u6807\u51c6\u7684\u76f8\u90bb\u50cf\u7d20\u4ee5\u589e\u957f\u533a\u57df",
      "C) \u968f\u65f6\u95f4\u589e\u52a0\u5206\u5272\u6570\u91cf",
      "D) \u5c06\u8fb9\u7f18\u56fe\u6269\u5c55\u4e3a\u586b\u5145\u533a\u57df"
    ],
    answer: 1,
    explanation: "Region growing starts from manually or automatically selected seed points and expands regions by adding adjacent pixels whose properties (intensity, color, texture) are similar to the region. The process continues until no more pixels satisfy the inclusion criteria. Results depend on seed selection and the similarity threshold chosen.",
    explanationChinese: "\u533a\u57df\u751f\u957f\u4ece\u624b\u52a8\u6216\u81ea\u52a8\u9009\u62e9\u7684\u79cd\u5b50\u70b9\u5f00\u59cb\uff0c\u901a\u8fc7\u6dfb\u52a0\u5c5e\u6027\uff08\u5f3a\u5ea6\u3001\u989c\u8272\u3001\u7eb9\u7406\uff09\u4e0e\u533a\u57df\u76f8\u4f3c\u7684\u76f8\u90bb\u50cf\u7d20\u6765\u6269\u5c55\u533a\u57df\u3002\u8be5\u8fc7\u7a0b\u6301\u7eed\u8fdb\u884c\u76f4\u5230\u6ca1\u6709\u66f4\u591a\u50cf\u7d20\u6ee1\u8db3\u5305\u542b\u6807\u51c6\u3002\u7ed3\u679c\u53d6\u51b3\u4e8e\u79cd\u5b50\u9009\u62e9\u548c\u76f8\u4f3c\u6027\u9608\u503c\u3002",
    diagram: "",
    terms: ["image_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 115,
    q: "What is the watershed algorithm for image segmentation?",
    qChinese: "\u7528\u4e8e\u56fe\u50cf\u5206\u5272\u7684\u5206\u6c34\u5cad\u7b97\u6cd5\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) A deep learning segmentation method",
      "B) A frequency-domain segmentation technique",
      "C) A method that segments images based on color histograms only",
      "D) A topographic method that treats the gradient magnitude as elevation and finds catchment basins by simulating flooding",
    ],
    optionsChinese: [
      "A) \u6df1\u5ea6\u5b66\u4e60\u5206\u5272\u65b9\u6cd5",
      "B) \u9891\u57df\u5206\u5272\u6280\u672f",
      "C) \u4ec5\u57fa\u4e8e\u989c\u8272\u76f4\u65b9\u56fe\u5206\u5272\u56fe\u50cf\u7684\u65b9\u6cd5",
      "D) \u4e00\u79cd\u5730\u5f62\u65b9\u6cd5\uff0c\u5c06\u68af\u5ea6\u5e45\u503c\u89c6\u4e3a\u9ad8\u7a0b\uff0c\u901a\u8fc7\u6a21\u62df\u6d2a\u6c34\u5bfb\u627e\u6c47\u6c34\u76c6\u5730",
    ],
    answer: 3,
    explanation: "The watershed algorithm interprets the gradient magnitude image as a topographic surface. Water rising from local minima (markers) fills catchment basins, and boundaries form where waters from different basins meet. Marker-controlled watershed using predetermined seeds prevents over-segmentation, a common problem with the basic algorithm.",
    explanationChinese: "\u5206\u6c34\u5cad\u7b97\u6cd5\u5c06\u68af\u5ea6\u5e45\u503c\u56fe\u50cf\u89e3\u91ca\u4e3a\u5730\u5f62\u8868\u9762\u3002\u4ece\u5c40\u90e8\u6700\u5c0f\u503c\uff08\u6807\u8bb0\uff09\u4e0a\u5347\u7684\u6c34\u586b\u5145\u6c47\u6c34\u76c6\u5730\uff0c\u4e0d\u540c\u76c6\u5730\u7684\u6c34\u76f8\u9047\u5904\u5f62\u6210\u8fb9\u754c\u3002\u4f7f\u7528\u9884\u5b9a\u79cd\u5b50\u7684\u6807\u8bb0\u63a7\u5236\u5206\u6c34\u5cad\u9632\u6b62\u4e86\u57fa\u672c\u7b97\u6cd5\u5e38\u89c1\u7684\u8fc7\u5206\u5272\u95ee\u9898\u3002",
    diagram: "",
    terms: ["image_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 116,
    q: "What is the mean shift algorithm used for in segmentation?",
    qChinese: "\u5747\u503c\u6f02\u79fb\u7b97\u6cd5\u5728\u5206\u5272\u4e2d\u7528\u4e8e\u4ec0\u4e48\uff1f",
    options: [
      "A) Finding the mean color of the image",
      "B) Computing the mean of each segment",
      "C) Iteratively shifting each data point toward the densest region of a kernel density estimate to find cluster modes",
      "D) Shifting the image to correct for camera motion"
    ],
    optionsChinese: [
      "A) \u627e\u5230\u56fe\u50cf\u7684\u5e73\u5747\u989c\u8272",
      "B) \u8ba1\u7b97\u6bcf\u4e2a\u5206\u5272\u7684\u5747\u503c",
      "C) \u8fed\u4ee3\u5730\u5c06\u6bcf\u4e2a\u6570\u636e\u70b9\u79fb\u5411\u6838\u5bc6\u5ea6\u4f30\u8ba1\u6700\u5bc6\u96c6\u533a\u57df\u4ee5\u627e\u5230\u805a\u7c7b\u6a21\u6001",
      "D) \u79fb\u52a8\u56fe\u50cf\u4ee5\u6821\u6b63\u76f8\u673a\u8fd0\u52a8"
    ],
    answer: 2,
    explanation: "Mean shift is a non-parametric clustering algorithm that iteratively shifts each point toward the mode of the local density in the joint spatial-color feature space. Points converging to the same mode are grouped together. It does not require specifying the number of clusters but requires bandwidth parameter selection.",
    explanationChinese: "\u5747\u503c\u6f02\u79fb\u662f\u4e00\u79cd\u975e\u53c2\u6570\u805a\u7c7b\u7b97\u6cd5\uff0c\u5728\u8054\u5408\u7a7a\u95f4-\u989c\u8272\u7279\u5f81\u7a7a\u95f4\u4e2d\u8fed\u4ee3\u5730\u5c06\u6bcf\u4e2a\u70b9\u79fb\u5411\u5c40\u90e8\u5bc6\u5ea6\u7684\u6a21\u6001\u3002\u6536\u655b\u5230\u540c\u4e00\u6a21\u6001\u7684\u70b9\u88ab\u5f52\u4e3a\u4e00\u7ec4\u3002\u5b83\u4e0d\u9700\u8981\u6307\u5b9a\u805a\u7c7b\u6570\u91cf\u4f46\u9700\u8981\u5e26\u5bbd\u53c2\u6570\u9009\u62e9\u3002",
    diagram: "",
    terms: ["image_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 117,
    q: "What is the k-means clustering approach to image segmentation?",
    qChinese: "k-means\u805a\u7c7b\u65b9\u6cd5\u5728\u56fe\u50cf\u5206\u5272\u4e2d\u7684\u5e94\u7528\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) Finding k edges in the image",
      "B) Dividing the image into k equal rectangles",
      "C) Grouping pixels into k clusters based on feature similarity by iteratively updating cluster centers and assignments",
      "D) Applying k different filters to the image"
    ],
    optionsChinese: [
      "A) \u5728\u56fe\u50cf\u4e2d\u627e\u5230k\u6761\u8fb9\u7f18",
      "B) \u5c06\u56fe\u50cf\u5206\u6210k\u4e2a\u76f8\u7b49\u7684\u77e9\u5f62",
      "C) \u901a\u8fc7\u8fed\u4ee3\u66f4\u65b0\u805a\u7c7b\u4e2d\u5fc3\u548c\u5206\u914d\u5c06\u50cf\u7d20\u5206\u4e3a\u57fa\u4e8e\u7279\u5f81\u76f8\u4f3c\u6027\u7684k\u4e2a\u805a\u7c7b",
      "D) \u5bf9\u56fe\u50cf\u5e94\u7528k\u4e2a\u4e0d\u540c\u7684\u6ee4\u6ce2\u5668"
    ],
    answer: 2,
    explanation: "K-means segments images by clustering pixels in feature space (color, position, texture). It alternates between assigning each pixel to its nearest cluster center and recomputing centers as the mean of assigned pixels. The algorithm requires specifying k and is sensitive to initialization but is simple and efficient for basic segmentation.",
    explanationChinese: "K-means\u901a\u8fc7\u5728\u7279\u5f81\u7a7a\u95f4\uff08\u989c\u8272\u3001\u4f4d\u7f6e\u3001\u7eb9\u7406\uff09\u4e2d\u805a\u7c7b\u50cf\u7d20\u6765\u5206\u5272\u56fe\u50cf\u3002\u5b83\u4ea4\u66ff\u5730\u5c06\u6bcf\u4e2a\u50cf\u7d20\u5206\u914d\u7ed9\u6700\u8fd1\u7684\u805a\u7c7b\u4e2d\u5fc3\u5e76\u91cd\u65b0\u8ba1\u7b97\u4e2d\u5fc3\u4e3a\u5206\u914d\u50cf\u7d20\u7684\u5747\u503c\u3002\u7b97\u6cd5\u9700\u8981\u6307\u5b9ak\u4e14\u5bf9\u521d\u59cb\u5316\u654f\u611f\uff0c\u4f46\u5bf9\u57fa\u672c\u5206\u5272\u7b80\u5355\u9ad8\u6548\u3002",
    diagram: "",
    terms: ["image_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 118,
    q: "What is graph-cut based image segmentation?",
    qChinese: "\u57fa\u4e8e\u56fe\u5272\u7684\u56fe\u50cf\u5206\u5272\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) Modeling the image as a graph where pixels are nodes and edges encode similarity, then finding the minimum cut that separates foreground from background",
      "B) Cutting the image into strips",
      "C) Removing graph-shaped objects from images",
      "D) A method for chart and graph detection in documents"
    ],
    optionsChinese: [
      "A) \u5c06\u56fe\u50cf\u5efa\u6a21\u4e3a\u56fe\uff0c\u50cf\u7d20\u4e3a\u8282\u70b9\uff0c\u8fb9\u7f16\u7801\u76f8\u4f3c\u6027\uff0c\u7136\u540e\u627e\u5230\u5c06\u524d\u666f\u4e0e\u80cc\u666f\u5206\u79bb\u7684\u6700\u5c0f\u5272",
      "B) \u5c06\u56fe\u50cf\u5207\u6210\u6761\u72b6",
      "C) \u4ece\u56fe\u50cf\u4e2d\u79fb\u9664\u56fe\u5f62\u72b6\u7269\u4f53",
      "D) \u6587\u6863\u4e2d\u56fe\u8868\u68c0\u6d4b\u7684\u65b9\u6cd5"
    ],
    answer: 0,
    explanation: "Graph-cut segmentation models the image as a graph with pixel nodes connected by edges weighted by similarity. Additional edges connect pixels to source (foreground) and sink (background) terminals. The minimum cut (max-flow) algorithm partitions the graph optimally, balancing region homogeneity with boundary smoothness terms.",
    explanationChinese: "\u56fe\u5272\u5206\u5272\u5c06\u56fe\u50cf\u5efa\u6a21\u4e3a\u56fe\uff0c\u50cf\u7d20\u8282\u70b9\u7531\u6309\u76f8\u4f3c\u6027\u52a0\u6743\u7684\u8fb9\u8fde\u63a5\u3002\u989d\u5916\u7684\u8fb9\u5c06\u50cf\u7d20\u8fde\u63a5\u5230\u6e90\uff08\u524d\u666f\uff09\u548c\u6c47\uff08\u80cc\u666f\uff09\u7ec8\u7aef\u3002\u6700\u5c0f\u5272\uff08\u6700\u5927\u6d41\uff09\u7b97\u6cd5\u6700\u4f18\u5730\u5212\u5206\u56fe\uff0c\u5e73\u8861\u533a\u57df\u5747\u5300\u6027\u548c\u8fb9\u754c\u5e73\u6ed1\u6027\u9879\u3002",
    diagram: "",
    terms: ["image_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 119,
    q: "What is the GrabCut algorithm?",
    qChinese: "GrabCut\u7b97\u6cd5\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) An interactive segmentation method that uses a bounding box initialization with iterative graph-cut optimization and Gaussian Mixture Models",
      "B) A method for cropping images automatically",
      "C) A deep learning based object detector",
      "D) A method for grabbing pixel values from an image"
    ],
    optionsChinese: [
      "A) \u4f7f\u7528\u8fb9\u754c\u6846\u521d\u59cb\u5316\u4e0e\u8fed\u4ee3\u56fe\u5272\u4f18\u5316\u548c\u9ad8\u65af\u6df7\u5408\u6a21\u578b\u7684\u4ea4\u4e92\u5f0f\u5206\u5272\u65b9\u6cd5",
      "B) \u81ea\u52a8\u88c1\u526a\u56fe\u50cf\u7684\u65b9\u6cd5",
      "C) \u57fa\u4e8e\u6df1\u5ea6\u5b66\u4e60\u7684\u7269\u4f53\u68c0\u6d4b\u5668",
      "D) \u4ece\u56fe\u50cf\u4e2d\u83b7\u53d6\u50cf\u7d20\u503c\u7684\u65b9\u6cd5"
    ],
    answer: 0,
    explanation: "GrabCut extends graph-cut segmentation with user interaction. The user provides a bounding box around the object. GMMs model foreground and background color distributions, and iterative graph-cut optimization refines the segmentation. Users can further refine results by marking pixels as definite foreground or background.",
    explanationChinese: "GrabCut\u901a\u8fc7\u7528\u6237\u4ea4\u4e92\u6269\u5c55\u56fe\u5272\u5206\u5272\u3002\u7528\u6237\u5728\u7269\u4f53\u5468\u56f4\u63d0\u4f9b\u8fb9\u754c\u6846\u3002GMM\u6a21\u578b\u5316\u524d\u666f\u548c\u80cc\u666f\u989c\u8272\u5206\u5e03\uff0c\u8fed\u4ee3\u56fe\u5272\u4f18\u5316\u7ec6\u5316\u5206\u5272\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u6807\u8bb0\u50cf\u7d20\u4e3a\u786e\u5b9a\u524d\u666f\u6216\u80cc\u666f\u6765\u8fdb\u4e00\u6b65\u4f18\u5316\u7ed3\u679c\u3002",
    diagram: "",
    terms: ["image_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 120,
    q: "What is superpixel segmentation?",
    qChinese: "\u8d85\u50cf\u7d20\u5206\u5272\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) Segmentation at a higher resolution than the original image",
      "B) Segmentation using only the brightest pixels",
      "C) A method that only produces very large segments",
      "D) Over-segmenting an image into small perceptually uniform regions that respect object boundaries as a preprocessing step",
    ],
    optionsChinese: [
      "A) \u4ee5\u9ad8\u4e8e\u539f\u59cb\u56fe\u50cf\u7684\u5206\u8fa8\u7387\u8fdb\u884c\u5206\u5272",
      "B) \u4ec5\u4f7f\u7528\u6700\u4eae\u50cf\u7d20\u7684\u5206\u5272",
      "C) \u4ec5\u4ea7\u751f\u975e\u5e38\u5927\u5206\u5272\u7684\u65b9\u6cd5",
      "D) \u5c06\u56fe\u50cf\u8fc7\u5206\u5272\u4e3a\u5c0a\u91cd\u7269\u4f53\u8fb9\u754c\u7684\u5c0f\u7684\u611f\u77e5\u5747\u5300\u533a\u57df\u4f5c\u4e3a\u9884\u5904\u7406\u6b65\u9aa4",
    ],
    answer: 3,
    explanation: "Superpixels group pixels into compact, roughly uniform regions that adhere to image boundaries. They reduce the number of primitives from millions of pixels to hundreds or thousands of superpixels, making subsequent processing more efficient. SLIC (Simple Linear Iterative Clustering) is a popular superpixel algorithm using k-means in color-spatial space.",
    explanationChinese: "\u8d85\u50cf\u7d20\u5c06\u50cf\u7d20\u5206\u7ec4\u4e3a\u7d27\u51d1\u7684\u3001\u5927\u81f4\u5747\u5300\u7684\u533a\u57df\uff0c\u8fd9\u4e9b\u533a\u57df\u9075\u5faa\u56fe\u50cf\u8fb9\u754c\u3002\u5b83\u4eec\u5c06\u539f\u59cb\u5355\u5143\u4ece\u6570\u767e\u4e07\u50cf\u7d20\u51cf\u5c11\u5230\u6570\u767e\u6216\u6570\u5343\u4e2a\u8d85\u50cf\u7d20\uff0c\u4f7f\u540e\u7eed\u5904\u7406\u66f4\u9ad8\u6548\u3002SLIC\uff08\u7b80\u5355\u7ebf\u6027\u8fed\u4ee3\u805a\u7c7b\uff09\u662f\u4f7f\u7528\u989c\u8272-\u7a7a\u95f4\u7a7a\u95f4\u4e2dk-means\u7684\u6d41\u884c\u8d85\u50cf\u7d20\u7b97\u6cd5\u3002",
    diagram: "",
    terms: ["image_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 121,
    q: "What is the connected components labeling algorithm?",
    qChinese: "\u8fde\u901a\u5206\u91cf\u6807\u8bb0\u7b97\u6cd5\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) A method for connecting broken edges",
      "B) A method for labeling images with text captions",
      "C) An algorithm that identifies and labels distinct connected regions in a binary image where all touching foreground pixels receive the same label",
      "D) An algorithm for connecting multiple images together"
    ],
    optionsChinese: [
      "A) \u8fde\u63a5\u65ad\u88c2\u8fb9\u7f18\u7684\u65b9\u6cd5",
      "B) \u7528\u6587\u5b57\u6807\u7b7e\u6807\u8bb0\u56fe\u50cf\u7684\u65b9\u6cd5",
      "C) \u5728\u4e8c\u503c\u56fe\u50cf\u4e2d\u8bc6\u522b\u548c\u6807\u8bb0\u4e0d\u540c\u8fde\u901a\u533a\u57df\u7684\u7b97\u6cd5\uff0c\u6240\u6709\u63a5\u89e6\u7684\u524d\u666f\u50cf\u7d20\u63a5\u6536\u76f8\u540c\u6807\u7b7e",
      "D) \u5c06\u591a\u5e45\u56fe\u50cf\u8fde\u63a5\u5728\u4e00\u8d77\u7684\u7b97\u6cd5"
    ],
    answer: 2,
    explanation: "Connected components labeling scans a binary image and assigns unique labels to each group of connected foreground pixels. Two-pass algorithms first assign provisional labels and record equivalences, then resolve them in a second pass. This identifies individual objects in binary images for counting, measurement, and shape analysis.",
    explanationChinese: "\u8fde\u901a\u5206\u91cf\u6807\u8bb0\u626b\u63cf\u4e8c\u503c\u56fe\u50cf\uff0c\u4e3a\u6bcf\u7ec4\u8fde\u901a\u7684\u524d\u666f\u50cf\u7d20\u5206\u914d\u552f\u4e00\u6807\u7b7e\u3002\u4e24\u904d\u7b97\u6cd5\u9996\u5148\u5206\u914d\u4e34\u65f6\u6807\u7b7e\u5e76\u8bb0\u5f55\u7b49\u4ef7\u5173\u7cfb\uff0c\u7136\u540e\u5728\u7b2c\u4e8c\u904d\u4e2d\u89e3\u51b3\u3002\u8fd9\u8bc6\u522b\u4e8c\u503c\u56fe\u50cf\u4e2d\u7684\u5355\u4e2a\u7269\u4f53\uff0c\u7528\u4e8e\u8ba1\u6570\u3001\u6d4b\u91cf\u548c\u5f62\u72b6\u5206\u6790\u3002",
    diagram: "",
    terms: ["image_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 122,
    q: "What is the normalized cut criterion for image segmentation?",
    qChinese: "\u56fe\u50cf\u5206\u5272\u7684\u5f52\u4e00\u5316\u5272\u6807\u51c6\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) A graph partitioning criterion that minimizes the cut cost normalized by the total edge connections to each partition, preventing bias toward small segments",
      "B) Dividing the image into equal-sized regions",
      "C) Normalizing pixel intensities before segmentation",
      "D) Cutting the image along horizontal and vertical lines"
    ],
    optionsChinese: [
      "A) \u4e00\u79cd\u56fe\u5212\u5206\u6807\u51c6\uff0c\u6700\u5c0f\u5316\u7531\u6bcf\u4e2a\u5206\u533a\u7684\u603b\u8fb9\u8fde\u63a5\u5f52\u4e00\u5316\u7684\u5272\u4ee3\u4ef7\uff0c\u9632\u6b62\u504f\u5411\u5c0f\u5206\u5272",
      "B) \u5c06\u56fe\u50cf\u5206\u6210\u7b49\u5927\u5c0f\u7684\u533a\u57df",
      "C) \u5728\u5206\u5272\u524d\u5f52\u4e00\u5316\u50cf\u7d20\u5f3a\u5ea6",
      "D) \u6cbf\u6c34\u5e73\u548c\u5782\u76f4\u7ebf\u5207\u5272\u56fe\u50cf"
    ],
    answer: 0,
    explanation: "The normalized cut (Ncut) by Shi and Malik measures cut cost as a fraction of total edge connections from each group to all nodes. This prevents the minimum cut from favoring small isolated groups. Solving Ncut is NP-hard but can be approximated via a generalized eigenvalue problem on the graph Laplacian matrix.",
    explanationChinese: "Shi\u548cMalik\u7684\u5f52\u4e00\u5316\u5272\uff08Ncut\uff09\u5c06\u5272\u4ee3\u4ef7\u4f5c\u4e3a\u6bcf\u7ec4\u5230\u6240\u6709\u8282\u70b9\u7684\u603b\u8fb9\u8fde\u63a5\u7684\u5206\u6570\u6765\u8861\u91cf\u3002\u8fd9\u9632\u6b62\u4e86\u6700\u5c0f\u5272\u504f\u5411\u5c0f\u7684\u5b64\u7acb\u7ec4\u3002\u6c42\u89e3Ncut\u662fNP\u96be\u7684\uff0c\u4f46\u53ef\u4ee5\u901a\u8fc7\u56fe\u62c9\u666e\u62c9\u65af\u77e9\u9635\u4e0a\u7684\u5e7f\u4e49\u7279\u5f81\u503c\u95ee\u9898\u6765\u8fd1\u4f3c\u3002",
    diagram: "",
    terms: ["image_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 123,
    q: "What is the difference between over-segmentation and under-segmentation?",
    qChinese: "\u8fc7\u5206\u5272\u548c\u6b20\u5206\u5272\u6709\u4ec0\u4e48\u533a\u522b\uff1f",
    options: [
      "A) Over-segmentation produces too many small regions splitting single objects; under-segmentation merges different objects into one region",
      "B) Over-segmentation uses too many colors; under-segmentation uses too few",
      "C) Over-segmentation is faster; under-segmentation is slower",
      "D) They produce the same result with different algorithms"
    ],
    optionsChinese: [
      "A) \u8fc7\u5206\u5272\u4ea7\u751f\u592a\u591a\u5c0f\u533a\u57df\u5c06\u5355\u4e2a\u7269\u4f53\u5206\u88c2\uff1b\u6b20\u5206\u5272\u5c06\u4e0d\u540c\u7269\u4f53\u5408\u5e76\u4e3a\u4e00\u4e2a\u533a\u57df",
      "B) \u8fc7\u5206\u5272\u4f7f\u7528\u592a\u591a\u989c\u8272\uff1b\u6b20\u5206\u5272\u4f7f\u7528\u592a\u5c11",
      "C) \u8fc7\u5206\u5272\u66f4\u5feb\uff1b\u6b20\u5206\u5272\u66f4\u6162",
      "D) \u5b83\u4eec\u7528\u4e0d\u540c\u7b97\u6cd5\u4ea7\u751f\u76f8\u540c\u7ed3\u679c"
    ],
    answer: 0,
    explanation: "Over-segmentation splits individual objects into multiple segments, common with watershed and superpixel methods. Under-segmentation fails to separate distinct objects, merging them. The ideal balance depends on the application. Superpixels intentionally over-segment as a preprocessing step, while object-level segmentation aims for correct boundaries.",
    explanationChinese: "\u8fc7\u5206\u5272\u5c06\u5355\u4e2a\u7269\u4f53\u5206\u88c2\u4e3a\u591a\u4e2a\u5206\u5272\uff0c\u5e38\u89c1\u4e8e\u5206\u6c34\u5cad\u548c\u8d85\u50cf\u7d20\u65b9\u6cd5\u3002\u6b20\u5206\u5272\u672a\u80fd\u5206\u79bb\u4e0d\u540c\u7269\u4f53\u800c\u5c06\u5b83\u4eec\u5408\u5e76\u3002\u7406\u60f3\u7684\u5e73\u8861\u53d6\u51b3\u4e8e\u5e94\u7528\u3002\u8d85\u50cf\u7d20\u6709\u610f\u5730\u8fc7\u5206\u5272\u4f5c\u4e3a\u9884\u5904\u7406\u6b65\u9aa4\uff0c\u800c\u7269\u4f53\u7ea7\u5206\u5272\u65e8\u5728\u83b7\u5f97\u6b63\u786e\u7684\u8fb9\u754c\u3002",
    diagram: "",
    terms: ["image_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 124,
    q: "What is region splitting and merging in segmentation?",
    qChinese: "\u5206\u5272\u4e2d\u7684\u533a\u57df\u5206\u88c2\u548c\u5408\u5e76\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) Splitting images into files and merging them back",
      "B) A method for video frame merging",
      "C) Splitting color channels and merging results",
      "D) A top-down approach that recursively splits non-uniform regions and merges adjacent similar regions using a quadtree structure",
    ],
    optionsChinese: [
      "A) \u5c06\u56fe\u50cf\u5206\u6210\u6587\u4ef6\u5e76\u5408\u5e76\u56de\u6765",
      "B) \u89c6\u9891\u5e27\u5408\u5e76\u65b9\u6cd5",
      "C) \u5206\u88c2\u989c\u8272\u901a\u9053\u5e76\u5408\u5e76\u7ed3\u679c",
      "D) \u4e00\u79cd\u81ea\u4e0a\u800c\u4e0b\u7684\u65b9\u6cd5\uff0c\u4f7f\u7528\u56db\u53c9\u6811\u7ed3\u6784\u9012\u5f52\u5206\u88c2\u975e\u5747\u5300\u533a\u57df\u5e76\u5408\u5e76\u76f8\u90bb\u76f8\u4f3c\u533a\u57df",
    ],
    answer: 3,
    explanation: "Region splitting and merging uses a quadtree: regions not meeting a homogeneity criterion are split into quadrants, and adjacent regions satisfying the criterion are merged. This top-down divide-and-conquer approach combined with bottom-up merging produces segments that are both internally homogeneous and maximally large.",
    explanationChinese: "\u533a\u57df\u5206\u88c2\u548c\u5408\u5e76\u4f7f\u7528\u56db\u53c9\u6811\uff1a\u4e0d\u6ee1\u8db3\u5747\u5300\u6027\u6807\u51c6\u7684\u533a\u57df\u88ab\u5206\u88c2\u4e3a\u56db\u4e2a\u8c61\u9650\uff0c\u6ee1\u8db3\u6807\u51c6\u7684\u76f8\u90bb\u533a\u57df\u88ab\u5408\u5e76\u3002\u8fd9\u79cd\u81ea\u4e0a\u800c\u4e0b\u7684\u5206\u800c\u6cbb\u4e4b\u65b9\u6cd5\u7ed3\u5408\u81ea\u4e0b\u800c\u4e0a\u7684\u5408\u5e76\u4ea7\u751f\u65e2\u5185\u90e8\u5747\u5300\u53c8\u5c3d\u53ef\u80fd\u5927\u7684\u5206\u5272\u3002",
    diagram: "",
    terms: ["image_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 125,
    q: "What is the SLIC superpixel algorithm?",
    qChinese: "SLIC\u8d85\u50cf\u7d20\u7b97\u6cd5\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) A deep learning method for segmentation",
      "B) A threshold-based segmentation method",
      "C) A k-means based algorithm that clusters pixels in a five-dimensional color and spatial space with a compactness parameter controlling shape regularity",
      "D) A method for slice-based 3D segmentation"
    ],
    optionsChinese: [
      "A) \u6df1\u5ea6\u5b66\u4e60\u5206\u5272\u65b9\u6cd5",
      "B) \u57fa\u4e8e\u9608\u503c\u7684\u5206\u5272\u65b9\u6cd5",
      "C) \u4e00\u79cd\u57fa\u4e8ek-means\u7684\u7b97\u6cd5\uff0c\u5728\u4e94\u7ef4\u989c\u8272\u548c\u7a7a\u95f4\u7a7a\u95f4\u4e2d\u805a\u7c7b\u50cf\u7d20\uff0c\u7d27\u51d1\u5ea6\u53c2\u6570\u63a7\u5236\u5f62\u72b6\u89c4\u5219\u6027",
      "D) \u57fa\u4e8e\u5207\u7247\u7684\u4e09\u7ef4\u5206\u5272\u65b9\u6cd5"
    ],
    answer: 2,
    explanation: "SLIC (Simple Linear Iterative Clustering) generates superpixels by applying k-means clustering in the 5D space of [L, a, b, x, y] (CIELAB color plus spatial coordinates). A compactness parameter balances color similarity and spatial proximity. SLIC is fast because it limits the search space to a region proportional to the superpixel size.",
    explanationChinese: "SLIC\uff08\u7b80\u5355\u7ebf\u6027\u8fed\u4ee3\u805a\u7c7b\uff09\u901a\u8fc7\u5728[L, a, b, x, y]\uff08CIELAB\u989c\u8272\u52a0\u7a7a\u95f4\u5750\u6807\uff09\u7684\u4e94\u7ef4\u7a7a\u95f4\u4e2d\u5e94\u7528k-means\u805a\u7c7b\u6765\u751f\u6210\u8d85\u50cf\u7d20\u3002\u7d27\u51d1\u5ea6\u53c2\u6570\u5e73\u8861\u989c\u8272\u76f8\u4f3c\u6027\u548c\u7a7a\u95f4\u90bb\u8fd1\u6027\u3002SLIC\u901f\u5ea6\u5feb\uff0c\u56e0\u4e3a\u5b83\u5c06\u641c\u7d22\u7a7a\u95f4\u9650\u5236\u5728\u4e0e\u8d85\u50cf\u7d20\u5927\u5c0f\u6210\u6bd4\u4f8b\u7684\u533a\u57df\u3002",
    diagram: "",
    terms: ["image_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 126,
    q: "What is the Felzenszwalb-Huttenlocher segmentation algorithm?",
    qChinese: "Felzenszwalb-Huttenlocher\u5206\u5272\u7b97\u6cd5\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) A neural network for semantic segmentation",
      "B) A threshold-based binary segmentation method",
      "C) A graph-based algorithm that merges components when the between-component difference is small relative to within-component variation",
      "D) A clustering algorithm requiring a fixed number of segments"
    ],
    optionsChinese: [
      "A) \u7528\u4e8e\u8bed\u4e49\u5206\u5272\u7684\u795e\u7ecf\u7f51\u7edc",
      "B) \u57fa\u4e8e\u9608\u503c\u7684\u4e8c\u503c\u5206\u5272\u65b9\u6cd5",
      "C) \u5f53\u7ec4\u4ef6\u95f4\u5dee\u5f02\u76f8\u5bf9\u4e8e\u7ec4\u4ef6\u5185\u53d8\u5316\u8f83\u5c0f\u65f6\u5408\u5e76\u7ec4\u4ef6\u7684\u57fa\u4e8e\u56fe\u7684\u7b97\u6cd5",
      "D) \u9700\u8981\u56fa\u5b9a\u5206\u5272\u6570\u91cf\u7684\u805a\u7c7b\u7b97\u6cd5"
    ],
    answer: 2,
    explanation: "The Felzenszwalb-Huttenlocher algorithm builds a graph with pixels as nodes and edge weights as color differences. It greedily merges components when the minimum edge weight between them is less than the internal variation of either component plus a size-dependent threshold. This produces segments that adapt to local image structure.",
    explanationChinese: "Felzenszwalb-Huttenlocher\u7b97\u6cd5\u6784\u5efa\u4ee5\u50cf\u7d20\u4e3a\u8282\u70b9\u3001\u8fb9\u6743\u91cd\u4e3a\u989c\u8272\u5dee\u5f02\u7684\u56fe\u3002\u5f53\u7ec4\u4ef6\u95f4\u7684\u6700\u5c0f\u8fb9\u6743\u91cd\u5c0f\u4e8e\u4efb\u4e00\u7ec4\u4ef6\u7684\u5185\u90e8\u53d8\u5316\u52a0\u4e0a\u4f9d\u8d56\u5927\u5c0f\u7684\u9608\u503c\u65f6\uff0c\u5b83\u8d2a\u5fc3\u5730\u5408\u5e76\u7ec4\u4ef6\u3002\u8fd9\u4ea7\u751f\u9002\u5e94\u5c40\u90e8\u56fe\u50cf\u7ed3\u6784\u7684\u5206\u5272\u3002",
    diagram: "",
    terms: ["image_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 127,
    q: "What is the Conditional Random Field (CRF) used for in segmentation?",
    qChinese: "\u6761\u4ef6\u968f\u673a\u573a\uff08CRF\uff09\u5728\u5206\u5272\u4e2d\u7528\u4e8e\u4ec0\u4e48\uff1f",
    options: [
      "A) Refining segmentation by modeling spatial relationships between pixel labels to enforce label consistency among similar neighboring pixels",
      "B) Generating random image segments",
      "C) Randomly selecting which pixels to segment",
      "D) Creating random training data for segmentation networks"
    ],
    optionsChinese: [
      "A) \u901a\u8fc7\u5efa\u6a21\u50cf\u7d20\u6807\u7b7e\u4e4b\u95f4\u7684\u7a7a\u95f4\u5173\u7cfb\u6765\u7ec6\u5316\u5206\u5272\uff0c\u4ee5\u5728\u76f8\u4f3c\u90bb\u8fd1\u50cf\u7d20\u4e4b\u95f4\u5f3a\u5236\u6807\u7b7e\u4e00\u81f4\u6027",
      "B) \u751f\u6210\u968f\u673a\u56fe\u50cf\u5206\u5272",
      "C) \u968f\u673a\u9009\u62e9\u8981\u5206\u5272\u7684\u50cf\u7d20",
      "D) \u4e3a\u5206\u5272\u7f51\u7edc\u521b\u5efa\u968f\u673a\u8bad\u7ec3\u6570\u636e"
    ],
    answer: 0,
    explanation: "CRFs model the joint probability of pixel labels given the image. Unary potentials capture per-pixel class scores while pairwise potentials encourage similar labels for neighboring pixels with similar appearance. Dense CRFs with efficient mean-field inference are widely used to refine CNN segmentation outputs, sharpening boundaries.",
    explanationChinese: "CRF\u6a21\u62df\u7ed9\u5b9a\u56fe\u50cf\u7684\u50cf\u7d20\u6807\u7b7e\u8054\u5408\u6982\u7387\u3002\u4e00\u5143\u52bf\u6355\u83b7\u6bcf\u50cf\u7d20\u7684\u7c7b\u522b\u5206\u6570\uff0c\u800c\u6210\u5bf9\u52bf\u9f13\u52b1\u5177\u6709\u76f8\u4f3c\u5916\u89c2\u7684\u90bb\u8fd1\u50cf\u7d20\u5177\u6709\u76f8\u4f3c\u6807\u7b7e\u3002\u5177\u6709\u9ad8\u6548\u5747\u503c\u573a\u63a8\u7406\u7684\u5bc6\u96c6CRF\u5e7f\u6cdb\u7528\u4e8e\u7ec6\u5316CNN\u5206\u5272\u8f93\u51fa\uff0c\u9510\u5316\u8fb9\u754c\u3002",
    diagram: "",
    terms: ["image_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 128,
    q: "What is multi-level thresholding?",
    qChinese: "\u591a\u7ea7\u9608\u503c\u5316\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) Applying the same threshold at multiple image resolutions",
      "B) Using multiple threshold values to segment an image into more than two classes based on intensity ranges",
      "C) Thresholding each color channel independently",
      "D) Applying thresholds in a hierarchical tree structure"
    ],
    optionsChinese: [
      "A) \u5728\u591a\u4e2a\u56fe\u50cf\u5206\u8fa8\u7387\u4e0a\u5e94\u7528\u76f8\u540c\u7684\u9608\u503c",
      "B) \u4f7f\u7528\u591a\u4e2a\u9608\u503c\u5c06\u56fe\u50cf\u57fa\u4e8e\u5f3a\u5ea6\u8303\u56f4\u5206\u5272\u4e3a\u4e24\u4e2a\u4ee5\u4e0a\u7684\u7c7b\u522b",
      "C) \u72ec\u7acb\u9608\u503c\u5316\u6bcf\u4e2a\u989c\u8272\u901a\u9053",
      "D) \u5728\u5c42\u6b21\u6811\u7ed3\u6784\u4e2d\u5e94\u7528\u9608\u503c"
    ],
    answer: 1,
    explanation: "Multi-level thresholding extends binary thresholding by using multiple thresholds to create several intensity classes. Multi-level Otsu finds optimal thresholds by maximizing between-class variance for multiple classes. Computational cost grows exponentially with the number of thresholds, so efficient methods like recursive or evolutionary algorithms are used.",
    explanationChinese: "\u591a\u7ea7\u9608\u503c\u5316\u901a\u8fc7\u4f7f\u7528\u591a\u4e2a\u9608\u503c\u521b\u5efa\u591a\u4e2a\u5f3a\u5ea6\u7c7b\u522b\u6765\u6269\u5c55\u4e8c\u503c\u9608\u503c\u5316\u3002\u591a\u7ea7Otsu\u901a\u8fc7\u6700\u5927\u5316\u591a\u7c7b\u7684\u7c7b\u95f4\u65b9\u5dee\u6765\u627e\u5230\u6700\u4f18\u9608\u503c\u3002\u8ba1\u7b97\u6210\u672c\u968f\u9608\u503c\u6570\u91cf\u5448\u6307\u6570\u589e\u957f\uff0c\u56e0\u6b64\u4f7f\u7528\u9012\u5f52\u6216\u8fdb\u5316\u7b97\u6cd5\u7b49\u9ad8\u6548\u65b9\u6cd5\u3002",
    diagram: "",
    terms: ["image_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 129,
    q: "What is the purpose of morphological operations in post-processing segmentation results?",
    qChinese: "\u5f62\u6001\u5b66\u64cd\u4f5c\u5728\u540e\u5904\u7406\u5206\u5272\u7ed3\u679c\u4e2d\u7684\u76ee\u7684\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) To clean up binary segmentation masks by removing noise, filling holes, and smoothing boundaries",
      "B) To add color to the segmentation map",
      "C) To increase the number of segments",
      "D) To convert segmentation results to vector graphics"
    ],
    optionsChinese: [
      "A) \u901a\u8fc7\u53bb\u9664\u566a\u58f0\u3001\u586b\u5145\u5b54\u6d1e\u548c\u5e73\u6ed1\u8fb9\u754c\u6765\u6e05\u7406\u4e8c\u503c\u5206\u5272\u63a9\u7801",
      "B) \u4e3a\u5206\u5272\u56fe\u6dfb\u52a0\u989c\u8272",
      "C) \u589e\u52a0\u5206\u5272\u6570\u91cf",
      "D) \u5c06\u5206\u5272\u7ed3\u679c\u8f6c\u6362\u4e3a\u77e2\u91cf\u56fe\u5f62"
    ],
    answer: 0,
    explanation: "After segmentation, morphological operations clean binary masks: opening removes small noise regions, closing fills small holes, and erosion followed by dilation can separate touching objects. These operations improve mask quality for downstream tasks like object counting, measurement, and instance separation.",
    explanationChinese: "\u5206\u5272\u540e\uff0c\u5f62\u6001\u5b66\u64cd\u4f5c\u6e05\u7406\u4e8c\u503c\u63a9\u7801\uff1a\u5f00\u8fd0\u7b97\u53bb\u9664\u5c0f\u566a\u58f0\u533a\u57df\uff0c\u95ed\u8fd0\u7b97\u586b\u5145\u5c0f\u5b54\u6d1e\uff0c\u5148\u8150\u8680\u540e\u81a8\u80c0\u53ef\u4ee5\u5206\u79bb\u63a5\u89e6\u7684\u7269\u4f53\u3002\u8fd9\u4e9b\u64cd\u4f5c\u6539\u5584\u63a9\u7801\u8d28\u91cf\uff0c\u7528\u4e8e\u7269\u4f53\u8ba1\u6570\u3001\u6d4b\u91cf\u548c\u5b9e\u4f8b\u5206\u79bb\u7b49\u4e0b\u6e38\u4efb\u52a1\u3002",
    diagram: "",
    terms: ["image_segmentation", "morphological_operations"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 130,
    q: "What is the difference between parametric and non-parametric segmentation methods?",
    qChinese: "\u53c2\u6570\u5316\u548c\u975e\u53c2\u6570\u5316\u5206\u5272\u65b9\u6cd5\u6709\u4ec0\u4e48\u533a\u522b\uff1f",
    options: [
      "A) Parametric methods assume a specific model for pixel distributions (like Gaussian); non-parametric methods make no distributional assumptions",
      "B) Parametric methods are faster; non-parametric are slower",
      "C) Parametric methods only work on binary images",
      "D) Non-parametric methods require manual parameter tuning"
    ],
    optionsChinese: [
      "A) \u53c2\u6570\u5316\u65b9\u6cd5\u5047\u8bbe\u50cf\u7d20\u5206\u5e03\u7684\u7279\u5b9a\u6a21\u578b\uff08\u5982\u9ad8\u65af\uff09\uff1b\u975e\u53c2\u6570\u5316\u65b9\u6cd5\u4e0d\u505a\u5206\u5e03\u5047\u8bbe",
      "B) \u53c2\u6570\u5316\u65b9\u6cd5\u66f4\u5feb\uff1b\u975e\u53c2\u6570\u5316\u65b9\u6cd5\u66f4\u6162",
      "C) \u53c2\u6570\u5316\u65b9\u6cd5\u4ec5\u9002\u7528\u4e8e\u4e8c\u503c\u56fe\u50cf",
      "D) \u975e\u53c2\u6570\u5316\u65b9\u6cd5\u9700\u8981\u624b\u52a8\u53c2\u6570\u8c03\u6574"
    ],
    answer: 0,
    explanation: "Parametric methods like GMM-based segmentation assume pixel values follow specific probability distributions and estimate their parameters. Non-parametric methods like mean shift and histogram-based approaches make no such assumptions and estimate density directly from data. Non-parametric methods are more flexible but may require more data.",
    explanationChinese: "\u57fa\u4e8eGMM\u7684\u5206\u5272\u7b49\u53c2\u6570\u5316\u65b9\u6cd5\u5047\u8bbe\u50cf\u7d20\u503c\u9075\u5faa\u7279\u5b9a\u7684\u6982\u7387\u5206\u5e03\u5e76\u4f30\u8ba1\u5176\u53c2\u6570\u3002\u5747\u503c\u6f02\u79fb\u548c\u57fa\u4e8e\u76f4\u65b9\u56fe\u7684\u65b9\u6cd5\u7b49\u975e\u53c2\u6570\u5316\u65b9\u6cd5\u4e0d\u505a\u8fd9\u6837\u7684\u5047\u8bbe\uff0c\u76f4\u63a5\u4ece\u6570\u636e\u4f30\u8ba1\u5bc6\u5ea6\u3002\u975e\u53c2\u6570\u5316\u65b9\u6cd5\u66f4\u7075\u6d3b\u4f46\u53ef\u80fd\u9700\u8981\u66f4\u591a\u6570\u636e\u3002",
    diagram: "",
    terms: ["image_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 131,
    q: "What is active contour (snake) segmentation?",
    qChinese: "\u4e3b\u52a8\u8f6e\u5ed3\uff08\u86c7\u5f62\uff09\u5206\u5272\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) Segmentation using snake-shaped kernels",
      "B) A method that segments images by following zigzag paths",
      "C) An energy-minimizing deformable curve that evolves toward object boundaries driven by internal smoothness and external image forces",
      "D) An animal detection algorithm"
    ],
    optionsChinese: [
      "A) \u4f7f\u7528\u86c7\u5f62\u6838\u7684\u5206\u5272",
      "B) \u901a\u8fc7\u8ddf\u968f\u952f\u9f7f\u8def\u5f84\u5206\u5272\u56fe\u50cf\u7684\u65b9\u6cd5",
      "C) \u7531\u5185\u90e8\u5e73\u6ed1\u6027\u548c\u5916\u90e8\u56fe\u50cf\u529b\u9a71\u52a8\u5411\u7269\u4f53\u8fb9\u754c\u6f14\u5316\u7684\u80fd\u91cf\u6700\u5c0f\u5316\u53ef\u53d8\u5f62\u66f2\u7ebf",
      "D) \u52a8\u7269\u68c0\u6d4b\u7b97\u6cd5"
    ],
    answer: 2,
    explanation: "Active contours (snakes) are parametric curves that minimize an energy functional combining internal energy (enforcing smoothness and continuity) and external energy (attracting the curve to image features like edges). The curve iteratively deforms until reaching an equilibrium at the object boundary. Initialization near the target is important for convergence.",
    explanationChinese: "\u4e3b\u52a8\u8f6e\u5ed3\uff08\u86c7\u5f62\uff09\u662f\u53c2\u6570\u5316\u66f2\u7ebf\uff0c\u6700\u5c0f\u5316\u7ed3\u5408\u5185\u90e8\u80fd\u91cf\uff08\u5f3a\u5236\u5e73\u6ed1\u6027\u548c\u8fde\u7eed\u6027\uff09\u548c\u5916\u90e8\u80fd\u91cf\uff08\u5438\u5f15\u66f2\u7ebf\u5230\u8fb9\u7f18\u7b49\u56fe\u50cf\u7279\u5f81\uff09\u7684\u80fd\u91cf\u6cdb\u51fd\u3002\u66f2\u7ebf\u8fed\u4ee3\u53d8\u5f62\u76f4\u5230\u5728\u7269\u4f53\u8fb9\u754c\u8fbe\u5230\u5e73\u8861\u3002\u63a5\u8fd1\u76ee\u6807\u7684\u521d\u59cb\u5316\u5bf9\u6536\u655b\u5f88\u91cd\u8981\u3002",
    diagram: "",
    terms: ["image_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 132,
    q: "What is the level set method for image segmentation?",
    qChinese: "\u6c34\u5e73\u96c6\u65b9\u6cd5\u5728\u56fe\u50cf\u5206\u5272\u4e2d\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) Segmenting images based on brightness levels",
      "B) An implicit representation of evolving curves using a higher-dimensional function whose zero level set represents the contour, naturally handling topology changes",
      "C) A method that sorts pixels by intensity level",
      "D) Segmentation using horizontal scan lines"
    ],
    optionsChinese: [
      "A) \u57fa\u4e8e\u4eae\u5ea6\u7ea7\u522b\u5206\u5272\u56fe\u50cf",
      "B) \u4f7f\u7528\u9ad8\u7ef4\u51fd\u6570\u7684\u9690\u5f0f\u8868\u793a\u6f14\u5316\u66f2\u7ebf\uff0c\u5176\u96f6\u6c34\u5e73\u96c6\u8868\u793a\u8f6e\u5ed3\uff0c\u81ea\u7136\u5904\u7406\u62d3\u6251\u53d8\u5316",
      "C) \u6309\u5f3a\u5ea6\u7ea7\u522b\u6392\u5e8f\u50cf\u7d20\u7684\u65b9\u6cd5",
      "D) \u4f7f\u7528\u6c34\u5e73\u626b\u63cf\u7ebf\u7684\u5206\u5272"
    ],
    answer: 1,
    explanation: "The level set method represents contours implicitly as the zero crossing of a higher-dimensional signed distance function. This elegantly handles topology changes like splitting and merging of regions during evolution. The Chan-Vese model is a popular level set formulation that segments based on region statistics without requiring edge information.",
    explanationChinese: "\u6c34\u5e73\u96c6\u65b9\u6cd5\u5c06\u8f6e\u5ed3\u9690\u5f0f\u8868\u793a\u4e3a\u9ad8\u7ef4\u7b26\u53f7\u8ddd\u79bb\u51fd\u6570\u7684\u96f6\u4ea4\u53c9\u3002\u8fd9\u4f18\u96c5\u5730\u5904\u7406\u4e86\u6f14\u5316\u8fc7\u7a0b\u4e2d\u533a\u57df\u5206\u88c2\u548c\u5408\u5e76\u7b49\u62d3\u6251\u53d8\u5316\u3002Chan-Vese\u6a21\u578b\u662f\u4e00\u79cd\u6d41\u884c\u7684\u6c34\u5e73\u96c6\u516c\u5f0f\uff0c\u57fa\u4e8e\u533a\u57df\u7edf\u8ba1\u8fdb\u884c\u5206\u5272\u800c\u4e0d\u9700\u8981\u8fb9\u7f18\u4fe1\u606f\u3002",
    diagram: "",
    terms: ["image_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 133,
    q: "What evaluation metric is commonly used to assess segmentation quality?",
    qChinese: "\u901a\u5e38\u4f7f\u7528\u4ec0\u4e48\u8bc4\u4f30\u6307\u6807\u6765\u8bc4\u4f30\u5206\u5272\u8d28\u91cf\uff1f",
    options: [
      "A) Frame rate",
      "B) Intersection over Union (IoU), also known as the Jaccard index, measuring overlap between predicted and ground truth regions",
      "C) Peak signal-to-noise ratio",
      "D) Color accuracy percentage"
    ],
    optionsChinese: [
      "A) \u5e27\u7387",
      "B) \u4ea4\u5e76\u6bd4\uff08IoU\uff09\uff0c\u4e5f\u79f0\u4e3aJaccard\u6307\u6570\uff0c\u8861\u91cf\u9884\u6d4b\u533a\u57df\u548c\u771f\u5b9e\u533a\u57df\u4e4b\u95f4\u7684\u91cd\u53e0",
      "C) \u5cf0\u503c\u4fe1\u566a\u6bd4",
      "D) \u989c\u8272\u51c6\u786e\u7387\u767e\u5206\u6bd4"
    ],
    answer: 1,
    explanation: "IoU (Intersection over Union) computes the ratio of the overlap area to the union area between predicted and ground truth segmentation masks. An IoU of 1.0 means perfect overlap. Mean IoU (mIoU) averages across all classes and is the standard metric for semantic segmentation benchmarks like PASCAL VOC and Cityscapes.",
    explanationChinese: "IoU\uff08\u4ea4\u5e76\u6bd4\uff09\u8ba1\u7b97\u9884\u6d4b\u548c\u771f\u5b9e\u5206\u5272\u63a9\u7801\u4e4b\u95f4\u91cd\u53e0\u9762\u79ef\u4e0e\u5e76\u96c6\u9762\u79ef\u7684\u6bd4\u7387\u3002IoU\u4e3a1.0\u8868\u793a\u5b8c\u7f8e\u91cd\u53e0\u3002\u5e73\u5747IoU\uff08mIoU\uff09\u5728\u6240\u6709\u7c7b\u522b\u4e0a\u53d6\u5e73\u5747\uff0c\u662fPASCAL VOC\u548cCityscapes\u7b49\u8bed\u4e49\u5206\u5272\u57fa\u51c6\u7684\u6807\u51c6\u6307\u6807\u3002",
    diagram: "",
    terms: ["image_segmentation", "semantic_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 134,
    q: "What is color-based segmentation in HSV space?",
    qChinese: "HSV\u7a7a\u95f4\u4e2d\u57fa\u4e8e\u989c\u8272\u7684\u5206\u5272\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) Converting all colors to a single hue",
      "B) Applying edge detection to each color channel",
      "C) Using only the brightness channel for segmentation",
      "D) Segmenting objects by thresholding hue, saturation, and value channels independently, which separates color from brightness information",
    ],
    optionsChinese: [
      "A) \u5c06\u6240\u6709\u989c\u8272\u8f6c\u6362\u4e3a\u5355\u4e00\u8272\u8c03",
      "B) \u5bf9\u6bcf\u4e2a\u989c\u8272\u901a\u9053\u5e94\u7528\u8fb9\u7f18\u68c0\u6d4b",
      "C) \u4ec5\u4f7f\u7528\u4eae\u5ea6\u901a\u9053\u8fdb\u884c\u5206\u5272",
      "D) \u901a\u8fc7\u72ec\u7acb\u9608\u503c\u5316\u8272\u8c03\u3001\u9971\u548c\u5ea6\u548c\u660e\u5ea6\u901a\u9053\u6765\u5206\u5272\u7269\u4f53\uff0c\u5c06\u989c\u8272\u4fe1\u606f\u4e0e\u4eae\u5ea6\u4fe1\u606f\u5206\u79bb",
    ],
    answer: 3,
    explanation: "HSV color space separates hue (color type), saturation (color purity), and value (brightness), making color-based segmentation more intuitive and robust to lighting changes. Thresholding specific hue ranges isolates objects of particular colors. This is widely used in robotics, sports analytics, and industrial inspection for colored object detection.",
    explanationChinese: "HSV\u989c\u8272\u7a7a\u95f4\u5206\u79bb\u8272\u8c03\uff08\u989c\u8272\u7c7b\u578b\uff09\u3001\u9971\u548c\u5ea6\uff08\u989c\u8272\u7eaf\u5ea6\uff09\u548c\u660e\u5ea6\uff08\u4eae\u5ea6\uff09\uff0c\u4f7f\u57fa\u4e8e\u989c\u8272\u7684\u5206\u5272\u66f4\u76f4\u89c2\u4e14\u5bf9\u5149\u7167\u53d8\u5316\u66f4\u9c81\u68d2\u3002\u9608\u503c\u5316\u7279\u5b9a\u8272\u8c03\u8303\u56f4\u9694\u79bb\u7279\u5b9a\u989c\u8272\u7684\u7269\u4f53\u3002\u8fd9\u5e7f\u6cdb\u7528\u4e8e\u673a\u5668\u4eba\u3001\u8fd0\u52a8\u5206\u6790\u548c\u5de5\u4e1a\u68c0\u6d4b\u4e2d\u7684\u5f69\u8272\u7269\u4f53\u68c0\u6d4b\u3002",
    diagram: "",
    terms: ["image_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 135,
    q: "What is the random walker algorithm for interactive segmentation?",
    qChinese: "\u7528\u4e8e\u4ea4\u4e92\u5f0f\u5206\u5272\u7684\u968f\u673a\u6e38\u8d70\u7b97\u6cd5\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) An algorithm that randomly selects pixels for segmentation",
      "B) An algorithm that walks randomly through the image to detect edges",
      "C) A random forest classifier for pixel classification",
      "D) A method where user-labeled seed pixels define regions and each unlabeled pixel is assigned to the label most likely reached by a random walk on the image graph",
    ],
    optionsChinese: [
      "A) \u968f\u673a\u9009\u62e9\u50cf\u7d20\u8fdb\u884c\u5206\u5272\u7684\u7b97\u6cd5",
      "B) \u5728\u56fe\u50cf\u4e2d\u968f\u673a\u884c\u8d70\u4ee5\u68c0\u6d4b\u8fb9\u7f18\u7684\u7b97\u6cd5",
      "C) \u7528\u4e8e\u50cf\u7d20\u5206\u7c7b\u7684\u968f\u673a\u68ee\u6797\u5206\u7c7b\u5668",
      "D) \u7528\u6237\u6807\u8bb0\u7684\u79cd\u5b50\u50cf\u7d20\u5b9a\u4e49\u533a\u57df\uff0c\u6bcf\u4e2a\u672a\u6807\u8bb0\u50cf\u7d20\u88ab\u5206\u914d\u5230\u56fe\u50cf\u56fe\u4e0a\u968f\u673a\u6e38\u8d70\u6700\u53ef\u80fd\u5230\u8fbe\u7684\u6807\u7b7e",
    ],
    answer: 3,
    explanation: "The random walker algorithm builds a graph where edge weights reflect pixel similarity. Given seed labels from user interaction, it computes the probability that a random walker starting from each unlabeled pixel first reaches each label. Each pixel is assigned the label with highest probability. This produces smooth segmentations that respect image boundaries.",
    explanationChinese: "\u968f\u673a\u6e38\u8d70\u7b97\u6cd5\u6784\u5efa\u4e00\u4e2a\u8fb9\u6743\u91cd\u53cd\u6620\u50cf\u7d20\u76f8\u4f3c\u6027\u7684\u56fe\u3002\u7ed9\u5b9a\u7528\u6237\u4ea4\u4e92\u7684\u79cd\u5b50\u6807\u7b7e\uff0c\u5b83\u8ba1\u7b97\u4ece\u6bcf\u4e2a\u672a\u6807\u8bb0\u50cf\u7d20\u51fa\u53d1\u7684\u968f\u673a\u6e38\u8d70\u8005\u9996\u5148\u5230\u8fbe\u6bcf\u4e2a\u6807\u7b7e\u7684\u6982\u7387\u3002\u6bcf\u4e2a\u50cf\u7d20\u88ab\u5206\u914d\u6982\u7387\u6700\u9ad8\u7684\u6807\u7b7e\u3002\u8fd9\u4ea7\u751f\u5c0a\u91cd\u56fe\u50cf\u8fb9\u754c\u7684\u5e73\u6ed1\u5206\u5272\u3002",
    diagram: "",
    terms: ["image_segmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 136,
    q: "What is the sliding window approach for object detection?",
    qChinese: "\u7528\u4e8e\u7269\u4f53\u68c0\u6d4b\u7684\u6ed1\u52a8\u7a97\u53e3\u65b9\u6cd5\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) Exhaustively scanning a classifier over all positions and scales in an image to find object locations",
      "B) Moving a physical window across the scene",
      "C) Sliding the image across a fixed detector",
      "D) Using a single fixed window to crop the image center"
    ],
    optionsChinese: [
      "A) \u5728\u56fe\u50cf\u7684\u6240\u6709\u4f4d\u7f6e\u548c\u5c3a\u5ea6\u4e0a\u7a77\u4e3e\u626b\u63cf\u5206\u7c7b\u5668\u4ee5\u627e\u5230\u7269\u4f53\u4f4d\u7f6e",
      "B) \u5728\u573a\u666f\u4e2d\u79fb\u52a8\u4e00\u4e2a\u7269\u7406\u7a97\u53e3",
      "C) \u5c06\u56fe\u50cf\u6ed1\u8fc7\u56fa\u5b9a\u68c0\u6d4b\u5668",
      "D) \u4f7f\u7528\u5355\u4e2a\u56fa\u5b9a\u7a97\u53e3\u88c1\u526a\u56fe\u50cf\u4e2d\u5fc3"
    ],
    answer: 0,
    explanation: "The sliding window approach moves a fixed-size window across the image at multiple scales and positions. At each location, a classifier (like HOG+SVM) determines whether the window contains the target object. Multi-scale detection uses an image pyramid. This brute-force approach is computationally expensive but was standard before deep learning methods.",
    explanationChinese: "\u6ed1\u52a8\u7a97\u53e3\u65b9\u6cd5\u5728\u591a\u4e2a\u5c3a\u5ea6\u548c\u4f4d\u7f6e\u4e0a\u5728\u56fe\u50cf\u4e0a\u79fb\u52a8\u56fa\u5b9a\u5927\u5c0f\u7684\u7a97\u53e3\u3002\u5728\u6bcf\u4e2a\u4f4d\u7f6e\uff0c\u5206\u7c7b\u5668\uff08\u5982HOG+SVM\uff09\u786e\u5b9a\u7a97\u53e3\u662f\u5426\u5305\u542b\u76ee\u6807\u7269\u4f53\u3002\u591a\u5c3a\u5ea6\u68c0\u6d4b\u4f7f\u7528\u56fe\u50cf\u91d1\u5b57\u5854\u3002\u8fd9\u79cd\u66b4\u529b\u65b9\u6cd5\u8ba1\u7b97\u6602\u8d35\uff0c\u4f46\u5728\u6df1\u5ea6\u5b66\u4e60\u65b9\u6cd5\u4e4b\u524d\u662f\u6807\u51c6\u65b9\u6cd5\u3002",
    diagram: "",
    terms: ["object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 137,
    q: "What is the R-CNN (Regions with CNN features) approach to object detection?",
    qChinese: "R-CNN\uff08\u5e26CNN\u7279\u5f81\u7684\u533a\u57df\uff09\u7269\u4f53\u68c0\u6d4b\u65b9\u6cd5\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) Using a single CNN to classify the entire image",
      "B) Using recurrent neural networks for detection",
      "C) Applying random convolutions to detect objects",
      "D) Generating region proposals with selective search, extracting CNN features from each, and classifying them with SVMs",
    ],
    optionsChinese: [
      "A) \u4f7f\u7528\u5355\u4e2aCNN\u5bf9\u6574\u4e2a\u56fe\u50cf\u8fdb\u884c\u5206\u7c7b",
      "B) \u4f7f\u7528\u5faa\u73af\u795e\u7ecf\u7f51\u7edc\u8fdb\u884c\u68c0\u6d4b",
      "C) \u5e94\u7528\u968f\u673a\u5377\u79ef\u6765\u68c0\u6d4b\u7269\u4f53",
      "D) \u4f7f\u7528\u9009\u62e9\u6027\u641c\u7d22\u751f\u6210\u533a\u57df\u63d0\u8bae\uff0c\u4ece\u6bcf\u4e2a\u63d0\u8bae\u4e2d\u63d0\u53d6CNN\u7279\u5f81\uff0c\u5e76\u4f7f\u7528SVM\u8fdb\u884c\u5206\u7c7b",
    ],
    answer: 3,
    explanation: "R-CNN uses selective search to generate approximately 2000 region proposals, warps each to a fixed size, extracts CNN features, and classifies them with class-specific SVMs. Bounding box regression refines locations. While groundbreaking for combining deep features with detection, it is slow due to running CNN independently on each proposal.",
    explanationChinese: "R-CNN\u4f7f\u7528\u9009\u62e9\u6027\u641c\u7d22\u751f\u6210\u7ea62000\u4e2a\u533a\u57df\u63d0\u8bae\uff0c\u5c06\u6bcf\u4e2a\u53d8\u5f62\u4e3a\u56fa\u5b9a\u5927\u5c0f\uff0c\u63d0\u53d6CNN\u7279\u5f81\uff0c\u5e76\u4f7f\u7528\u7279\u5b9a\u7c7b\u522b\u7684SVM\u8fdb\u884c\u5206\u7c7b\u3002\u8fb9\u754c\u6846\u56de\u5f52\u7ec6\u5316\u4f4d\u7f6e\u3002\u867d\u7136\u5c06\u6df1\u5ea6\u7279\u5f81\u4e0e\u68c0\u6d4b\u7ed3\u5408\u662f\u5f00\u521b\u6027\u7684\uff0c\u4f46\u7531\u4e8e\u5bf9\u6bcf\u4e2a\u63d0\u8bae\u72ec\u7acb\u8fd0\u884cCNN\u800c\u901f\u5ea6\u6162\u3002",
    diagram: "",
    terms: ["object_detection", "region_proposal"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 138,
    q: "How does Fast R-CNN improve upon R-CNN?",
    qChinese: "Fast R-CNN\u5982\u4f55\u6539\u8fdbR-CNN\uff1f",
    options: [
      "A) By using a faster selective search algorithm",
      "B) By reducing the number of proposals to 10",
      "C) By sharing CNN computation across all proposals through a single forward pass and using RoI pooling to extract features for each region",
      "D) By using a smaller CNN architecture"
    ],
    optionsChinese: [
      "A) \u901a\u8fc7\u4f7f\u7528\u66f4\u5feb\u7684\u9009\u62e9\u6027\u641c\u7d22\u7b97\u6cd5",
      "B) \u901a\u8fc7\u5c06\u63d0\u8bae\u6570\u91cf\u51cf\u5c11\u523010\u4e2a",
      "C) \u901a\u8fc7\u5355\u6b21\u524d\u5411\u4f20\u64ad\u5728\u6240\u6709\u63d0\u8bae\u95f4\u5171\u4eabCNN\u8ba1\u7b97\uff0c\u5e76\u4f7f\u7528RoI\u6c60\u5316\u4e3a\u6bcf\u4e2a\u533a\u57df\u63d0\u53d6\u7279\u5f81",
      "D) \u901a\u8fc7\u4f7f\u7528\u66f4\u5c0f\u7684CNN\u67b6\u6784"
    ],
    answer: 2,
    explanation: "Fast R-CNN processes the entire image through a CNN once to produce a shared feature map. RoI (Region of Interest) pooling extracts fixed-size feature vectors from the shared map for each proposal. Classification and bounding box regression are done with fully connected layers. This multi-task training is much faster than R-CNN.",
    explanationChinese: "Fast R-CNN\u5c06\u6574\u4e2a\u56fe\u50cf\u901a\u8fc7CNN\u4e00\u6b21\u5904\u7406\u4ee5\u4ea7\u751f\u5171\u4eab\u7279\u5f81\u56fe\u3002RoI\uff08\u611f\u5174\u8da3\u533a\u57df\uff09\u6c60\u5316\u4ece\u5171\u4eab\u56fe\u4e2d\u4e3a\u6bcf\u4e2a\u63d0\u8bae\u63d0\u53d6\u56fa\u5b9a\u5927\u5c0f\u7684\u7279\u5f81\u5411\u91cf\u3002\u5206\u7c7b\u548c\u8fb9\u754c\u6846\u56de\u5f52\u901a\u8fc7\u5168\u8fde\u63a5\u5c42\u5b8c\u6210\u3002\u8fd9\u79cd\u591a\u4efb\u52a1\u8bad\u7ec3\u6bd4R-CNN\u5feb\u5f97\u591a\u3002",
    diagram: "",
    terms: ["object_detection", "region_proposal"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 139,
    q: "What key innovation does Faster R-CNN introduce?",
    qChinese: "Faster R-CNN\u5f15\u5165\u4e86\u4ec0\u4e48\u5173\u952e\u521b\u65b0\uff1f",
    options: [
      "A) A faster image resizing algorithm",
      "B) The Region Proposal Network (RPN) that generates proposals directly from CNN features, eliminating the need for external proposal methods",
      "C) A faster non-maximum suppression algorithm",
      "D) Using grayscale images instead of color for speed"
    ],
    optionsChinese: [
      "A) \u66f4\u5feb\u7684\u56fe\u50cf\u7f29\u653e\u7b97\u6cd5",
      "B) \u533a\u57df\u63d0\u8bae\u7f51\u7edc\uff08RPN\uff09\uff0c\u76f4\u63a5\u4eceCNN\u7279\u5f81\u751f\u6210\u63d0\u8bae\uff0c\u6d88\u9664\u4e86\u5bf9\u5916\u90e8\u63d0\u8bae\u65b9\u6cd5\u7684\u9700\u6c42",
      "C) \u66f4\u5feb\u7684\u975e\u6781\u5927\u503c\u6291\u5236\u7b97\u6cd5",
      "D) \u4f7f\u7528\u7070\u5ea6\u56fe\u50cf\u800c\u4e0d\u662f\u5f69\u8272\u4ee5\u63d0\u9ad8\u901f\u5ea6"
    ],
    answer: 1,
    explanation: "Faster R-CNN replaces selective search with a Region Proposal Network (RPN) that shares convolutional features with the detection network. The RPN slides over the feature map and at each position predicts whether anchors of various sizes and aspect ratios contain objects. This makes proposal generation nearly cost-free and enables end-to-end training.",
    explanationChinese: "Faster R-CNN\u7528\u533a\u57df\u63d0\u8bae\u7f51\u7edc\uff08RPN\uff09\u66ff\u4ee3\u9009\u62e9\u6027\u641c\u7d22\uff0cRPN\u4e0e\u68c0\u6d4b\u7f51\u7edc\u5171\u4eab\u5377\u79ef\u7279\u5f81\u3002RPN\u5728\u7279\u5f81\u56fe\u4e0a\u6ed1\u52a8\uff0c\u5728\u6bcf\u4e2a\u4f4d\u7f6e\u9884\u6d4b\u5404\u79cd\u5927\u5c0f\u548c\u7eb5\u6a2a\u6bd4\u7684\u951a\u70b9\u662f\u5426\u5305\u542b\u7269\u4f53\u3002\u8fd9\u4f7f\u63d0\u8bae\u751f\u6210\u51e0\u4e4e\u514d\u8d39\u5e76\u5b9e\u73b0\u7aef\u5230\u7aef\u8bad\u7ec3\u3002",
    diagram: "",
    terms: ["object_detection", "region_proposal"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 140,
    q: "What is the YOLO (You Only Look Once) approach to object detection?",
    qChinese: "YOLO\uff08\u4f60\u53ea\u770b\u4e00\u6b21\uff09\u7269\u4f53\u68c0\u6d4b\u65b9\u6cd5\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) A single-stage detector that divides the image into a grid and predicts bounding boxes and class probabilities directly in one forward pass",
      "B) A two-stage detector that first generates proposals then classifies them",
      "C) A detection method that only looks at the center of the image",
      "D) An ensemble of multiple detection networks"
    ],
    optionsChinese: [
      "A) \u5c06\u56fe\u50cf\u5212\u5206\u4e3a\u7f51\u683c\u5e76\u5728\u4e00\u6b21\u524d\u5411\u4f20\u64ad\u4e2d\u76f4\u63a5\u9884\u6d4b\u8fb9\u754c\u6846\u548c\u7c7b\u522b\u6982\u7387\u7684\u5355\u9636\u6bb5\u68c0\u6d4b\u5668",
      "B) \u5148\u751f\u6210\u63d0\u8bae\u518d\u5206\u7c7b\u7684\u4e24\u9636\u6bb5\u68c0\u6d4b\u5668",
      "C) \u53ea\u770b\u56fe\u50cf\u4e2d\u5fc3\u7684\u68c0\u6d4b\u65b9\u6cd5",
      "D) \u591a\u4e2a\u68c0\u6d4b\u7f51\u7edc\u7684\u96c6\u6210"
    ],
    answer: 0,
    explanation: "YOLO frames detection as a single regression problem. It divides the image into an SxS grid, where each cell predicts B bounding boxes with confidence scores and C class probabilities. This unified architecture enables real-time detection at 45+ FPS. Later versions (YOLOv2-v8) improved accuracy with anchor boxes, feature pyramids, and better architectures.",
    explanationChinese: "YOLO\u5c06\u68c0\u6d4b\u6784\u5efa\u4e3a\u5355\u4e00\u56de\u5f52\u95ee\u9898\u3002\u5b83\u5c06\u56fe\u50cf\u5212\u5206\u4e3aSxS\u7f51\u683c\uff0c\u6bcf\u4e2a\u5355\u5143\u9884\u6d4bB\u4e2a\u5e26\u7f6e\u4fe1\u5ea6\u5206\u6570\u548cC\u4e2a\u7c7b\u522b\u6982\u7387\u7684\u8fb9\u754c\u6846\u3002\u8fd9\u79cd\u7edf\u4e00\u67b6\u6784\u5b9e\u73b045+ FPS\u7684\u5b9e\u65f6\u68c0\u6d4b\u3002\u540e\u7eed\u7248\u672c\uff08YOLOv2-v8\uff09\u901a\u8fc7\u951a\u70b9\u6846\u3001\u7279\u5f81\u91d1\u5b57\u5854\u548c\u66f4\u597d\u7684\u67b6\u6784\u6539\u5584\u4e86\u51c6\u786e\u6027\u3002",
    diagram: "",
    terms: ["object_detection", "yolo"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },

  {
    id: 141,
    q: "What is the SSD (Single Shot MultiBox Detector)?",
    qChinese: "SSD\uff08\u5355\u6b21\u591a\u6846\u68c0\u6d4b\u5668\uff09\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) A single-stage detector that predicts objects at multiple feature map scales using default boxes of various aspect ratios",
      "B) A storage device for images",
      "C) A two-stage detector similar to Faster R-CNN",
      "D) A segmentation method"
    ],
    optionsChinese: [
      "A) \u5728\u591a\u4e2a\u7279\u5f81\u56fe\u5c3a\u5ea6\u4e0a\u4f7f\u7528\u5404\u79cd\u7eb5\u6a2a\u6bd4\u7684\u9ed8\u8ba4\u6846\u9884\u6d4b\u7269\u4f53\u7684\u5355\u9636\u6bb5\u68c0\u6d4b\u5668",
      "B) \u56fe\u50cf\u5b58\u50a8\u8bbe\u5907",
      "C) \u7c7b\u4f3c\u4e8eFaster R-CNN\u7684\u4e24\u9636\u6bb5\u68c0\u6d4b\u5668",
      "D) \u5206\u5272\u65b9\u6cd5"
    ],
    answer: 0,
    explanation: "SSD performs detection at multiple scales by adding convolutional feature layers that progressively decrease in size. Each layer predicts detections using default boxes. Lower layers detect small objects while higher layers detect large ones. This multi-scale approach achieves high accuracy at real-time speeds without region proposals.",
    explanationChinese: "SSD\u901a\u8fc7\u6dfb\u52a0\u9010\u6e10\u51cf\u5c0f\u7684\u5377\u79ef\u7279\u5f81\u5c42\u5728\u591a\u4e2a\u5c3a\u5ea6\u4e0a\u6267\u884c\u68c0\u6d4b\u3002\u6bcf\u5c42\u4f7f\u7528\u9ed8\u8ba4\u6846\u9884\u6d4b\u68c0\u6d4b\u3002\u4f4e\u5c42\u68c0\u6d4b\u5c0f\u7269\u4f53\u800c\u9ad8\u5c42\u68c0\u6d4b\u5927\u7269\u4f53\u3002\u8fd9\u79cd\u591a\u5c3a\u5ea6\u65b9\u6cd5\u5728\u5b9e\u65f6\u901f\u5ea6\u4e0b\u5b9e\u73b0\u9ad8\u7cbe\u5ea6\uff0c\u65e0\u9700\u533a\u57df\u63d0\u8bae\u3002",
    diagram: "",
    terms: ["object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 142,
    q: "What are anchor boxes in object detection?",
    qChinese: "\u7269\u4f53\u68c0\u6d4b\u4e2d\u7684\u951a\u70b9\u6846\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) Boxes used to anchor the image in place",
      "B) Boxes around anchor points in feature maps",
      "C) The final output bounding boxes",
      "D) Predefined bounding boxes of various sizes and aspect ratios that serve as references for predicting actual object locations",
    ],
    optionsChinese: [
      "A) \u7528\u4e8e\u5c06\u56fe\u50cf\u56fa\u5b9a\u5230\u4f4d\u7684\u6846",
      "B) \u7279\u5f81\u56fe\u4e2d\u951a\u70b9\u5468\u56f4\u7684\u6846",
      "C) \u6700\u7ec8\u8f93\u51fa\u7684\u8fb9\u754c\u6846",
      "D) \u5404\u79cd\u5927\u5c0f\u548c\u7eb5\u6a2a\u6bd4\u7684\u9884\u5b9a\u4e49\u8fb9\u754c\u6846\uff0c\u4f5c\u4e3a\u9884\u6d4b\u5b9e\u9645\u7269\u4f53\u4f4d\u7f6e\u7684\u53c2\u8003",
    ],
    answer: 3,
    explanation: "Anchor boxes are predefined reference boxes placed at each spatial position of the feature map. The network predicts offsets from these anchors to actual object boxes plus objectness scores. Using multiple anchors per location with different sizes and ratios enables detecting objects of various shapes without explicit multi-scale search.",
    explanationChinese: "\u951a\u70b9\u6846\u662f\u653e\u7f6e\u5728\u7279\u5f81\u56fe\u6bcf\u4e2a\u7a7a\u95f4\u4f4d\u7f6e\u7684\u9884\u5b9a\u4e49\u53c2\u8003\u6846\u3002\u7f51\u7edc\u9884\u6d4b\u4ece\u8fd9\u4e9b\u951a\u70b9\u5230\u5b9e\u9645\u7269\u4f53\u6846\u7684\u504f\u79fb\u91cf\u548c\u7269\u4f53\u6027\u5206\u6570\u3002\u5728\u6bcf\u4e2a\u4f4d\u7f6e\u4f7f\u7528\u4e0d\u540c\u5927\u5c0f\u548c\u6bd4\u7387\u7684\u591a\u4e2a\u951a\u70b9\u53ef\u4ee5\u68c0\u6d4b\u5404\u79cd\u5f62\u72b6\u7684\u7269\u4f53\uff0c\u65e0\u9700\u663e\u5f0f\u591a\u5c3a\u5ea6\u641c\u7d22\u3002",
    diagram: "",
    terms: ["object_detection", "yolo"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 143,
    q: "What is non-maximum suppression (NMS) in object detection?",
    qChinese: "\u7269\u4f53\u68c0\u6d4b\u4e2d\u7684\u975e\u6781\u5927\u503c\u6291\u5236\uff08NMS\uff09\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) Removing the maximum confidence detections",
      "B) Removing detections at image boundaries",
      "C) Suppressing all detections below average confidence",
      "D) Eliminating redundant overlapping detections by keeping only the highest confidence box among overlapping predictions for each object",
    ],
    optionsChinese: [
      "A) \u79fb\u9664\u6700\u9ad8\u7f6e\u4fe1\u5ea6\u68c0\u6d4b",
      "B) \u79fb\u9664\u56fe\u50cf\u8fb9\u754c\u5904\u7684\u68c0\u6d4b",
      "C) \u6291\u5236\u4f4e\u4e8e\u5e73\u5747\u7f6e\u4fe1\u5ea6\u7684\u6240\u6709\u68c0\u6d4b",
      "D) \u901a\u8fc7\u4ec5\u4fdd\u7559\u6bcf\u4e2a\u7269\u4f53\u91cd\u53e0\u9884\u6d4b\u4e2d\u6700\u9ad8\u7f6e\u4fe1\u5ea6\u6846\u6765\u6d88\u9664\u5197\u4f59\u7684\u91cd\u53e0\u68c0\u6d4b",
    ],
    answer: 3,
    explanation: "NMS post-processes detection outputs by sorting boxes by confidence, keeping the highest-scoring box, and removing all other boxes with IoU above a threshold with the kept box. This process repeats until all boxes are either kept or suppressed. It prevents multiple detections of the same object from cluttering results.",
    explanationChinese: "NMS\u901a\u8fc7\u6309\u7f6e\u4fe1\u5ea6\u6392\u5e8f\u6846\u6765\u540e\u5904\u7406\u68c0\u6d4b\u8f93\u51fa\uff0c\u4fdd\u7559\u6700\u9ad8\u5206\u6846\uff0c\u5e76\u79fb\u9664\u4e0e\u4fdd\u7559\u6846\u7684IoU\u9ad8\u4e8e\u9608\u503c\u7684\u6240\u6709\u5176\u4ed6\u6846\u3002\u6b64\u8fc7\u7a0b\u91cd\u590d\u76f4\u5230\u6240\u6709\u6846\u88ab\u4fdd\u7559\u6216\u6291\u5236\u3002\u5b83\u9632\u6b62\u540c\u4e00\u7269\u4f53\u7684\u591a\u6b21\u68c0\u6d4b\u4f7f\u7ed3\u679c\u6df7\u4e71\u3002",
    diagram: "",
    terms: ["object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 144,
    q: "What is the Feature Pyramid Network (FPN)?",
    qChinese: "\u7279\u5f81\u91d1\u5b57\u5854\u7f51\u7edc\uff08FPN\uff09\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) A multi-scale feature extraction architecture that combines high-resolution low-level features with semantically rich high-level features via top-down pathway and lateral connections",
      "B) A network that only processes pyramid-shaped images",
      "C) A network for 3D pyramid reconstruction",
      "D) A simple image pyramid processing pipeline"
    ],
    optionsChinese: [
      "A) \u901a\u8fc7\u81ea\u4e0a\u800c\u4e0b\u8def\u5f84\u548c\u6a2a\u5411\u8fde\u63a5\u5c06\u9ad8\u5206\u8fa8\u7387\u4f4e\u7ea7\u7279\u5f81\u4e0e\u8bed\u4e49\u4e30\u5bcc\u7684\u9ad8\u7ea7\u7279\u5f81\u7ed3\u5408\u7684\u591a\u5c3a\u5ea6\u7279\u5f81\u63d0\u53d6\u67b6\u6784",
      "B) \u4ec5\u5904\u7406\u91d1\u5b57\u5854\u5f62\u56fe\u50cf\u7684\u7f51\u7edc",
      "C) \u7528\u4e8e\u4e09\u7ef4\u91d1\u5b57\u5854\u91cd\u5efa\u7684\u7f51\u7edc",
      "D) \u7b80\u5355\u7684\u56fe\u50cf\u91d1\u5b57\u5854\u5904\u7406\u6d41\u7a0b"
    ],
    answer: 0,
    explanation: "FPN builds a feature pyramid by adding a top-down pathway with lateral connections to a standard CNN backbone. High-level semantic features are upsampled and combined with corresponding high-resolution features through element-wise addition. This provides strong multi-scale features for detecting objects at all sizes and is used in many modern detectors.",
    explanationChinese: "FPN\u901a\u8fc7\u5411\u6807\u51c6CNN\u4e3b\u5e72\u6dfb\u52a0\u5e26\u6a2a\u5411\u8fde\u63a5\u7684\u81ea\u4e0a\u800c\u4e0b\u8def\u5f84\u6765\u6784\u5efa\u7279\u5f81\u91d1\u5b57\u5854\u3002\u9ad8\u7ea7\u8bed\u4e49\u7279\u5f81\u88ab\u4e0a\u91c7\u6837\u5e76\u901a\u8fc7\u9010\u5143\u7d20\u52a0\u6cd5\u4e0e\u5bf9\u5e94\u7684\u9ad8\u5206\u8fa8\u7387\u7279\u5f81\u7ed3\u5408\u3002\u8fd9\u4e3a\u68c0\u6d4b\u6240\u6709\u5927\u5c0f\u7684\u7269\u4f53\u63d0\u4f9b\u5f3a\u5927\u7684\u591a\u5c3a\u5ea6\u7279\u5f81\uff0c\u7528\u4e8e\u8bb8\u591a\u73b0\u4ee3\u68c0\u6d4b\u5668\u3002",
    diagram: "",
    terms: ["object_detection", "image_pyramid"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 145,
    q: "What is mean Average Precision (mAP) in object detection evaluation?",
    qChinese: "\u7269\u4f53\u68c0\u6d4b\u8bc4\u4f30\u4e2d\u7684\u5e73\u5747\u7cbe\u5ea6\u5747\u503c\uff08mAP\uff09\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) The average pixel intensity of detected objects",
      "B) The average number of objects detected per image",
      "C) The mean of Average Precision values across all object classes, computed from precision-recall curves at various IoU thresholds",
      "D) The mean detection speed across all images"
    ],
    optionsChinese: [
      "A) \u68c0\u6d4b\u7269\u4f53\u7684\u5e73\u5747\u50cf\u7d20\u5f3a\u5ea6",
      "B) \u6bcf\u5e45\u56fe\u50cf\u68c0\u6d4b\u5230\u7684\u5e73\u5747\u7269\u4f53\u6570\u91cf",
      "C) \u6240\u6709\u7269\u4f53\u7c7b\u522b\u7684\u5e73\u5747\u7cbe\u5ea6\u503c\u7684\u5747\u503c\uff0c\u4ece\u5404\u79cdIoU\u9608\u503c\u7684\u7cbe\u786e\u7387-\u53ec\u56de\u7387\u66f2\u7ebf\u8ba1\u7b97",
      "D) \u6240\u6709\u56fe\u50cf\u7684\u5e73\u5747\u68c0\u6d4b\u901f\u5ea6"
    ],
    answer: 2,
    explanation: "mAP computes the area under the precision-recall curve for each class at a given IoU threshold, then averages across classes. PASCAL VOC uses mAP@0.5 (IoU threshold 0.5), while COCO uses mAP averaged over IoU thresholds from 0.5 to 0.95 in steps of 0.05, providing a more comprehensive evaluation.",
    explanationChinese: "mAP\u5728\u7ed9\u5b9aIoU\u9608\u503c\u4e0b\u8ba1\u7b97\u6bcf\u4e2a\u7c7b\u522b\u7684\u7cbe\u786e\u7387-\u53ec\u56de\u7387\u66f2\u7ebf\u4e0b\u9762\u79ef\uff0c\u7136\u540e\u5728\u7c7b\u522b\u95f4\u53d6\u5e73\u5747\u3002PASCAL VOC\u4f7f\u7528mAP@0.5\uff08IoU\u9608\u503c0.5\uff09\uff0c\u800cCOCO\u4f7f\u7528\u4ece0.5\u52300.95\u4ee50.05\u4e3a\u6b65\u957f\u7684IoU\u9608\u503c\u4e0a\u53d6\u5e73\u5747\u7684mAP\uff0c\u63d0\u4f9b\u66f4\u5168\u9762\u7684\u8bc4\u4f30\u3002",
    diagram: "",
    terms: ["object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 146,
    q: "What is selective search used for in object detection?",
    qChinese: "\u9009\u62e9\u6027\u641c\u7d22\u5728\u7269\u4f53\u68c0\u6d4b\u4e2d\u7528\u4e8e\u4ec0\u4e48\uff1f",
    options: [
      "A) Searching for the best neural network architecture",
      "B) Selecting the best training images",
      "C) Generating class-independent region proposals by hierarchically grouping similar superpixels based on color, texture, size, and shape compatibility",
      "D) Searching for optimal hyperparameters"
    ],
    optionsChinese: [
      "A) \u641c\u7d22\u6700\u4f73\u795e\u7ecf\u7f51\u7edc\u67b6\u6784",
      "B) \u9009\u62e9\u6700\u4f73\u8bad\u7ec3\u56fe\u50cf",
      "C) \u901a\u8fc7\u57fa\u4e8e\u989c\u8272\u3001\u7eb9\u7406\u3001\u5927\u5c0f\u548c\u5f62\u72b6\u517c\u5bb9\u6027\u5c42\u6b21\u5316\u5206\u7ec4\u76f8\u4f3c\u8d85\u50cf\u7d20\u6765\u751f\u6210\u7c7b\u522b\u65e0\u5173\u7684\u533a\u57df\u63d0\u8bae",
      "D) \u641c\u7d22\u6700\u4f18\u8d85\u53c2\u6570"
    ],
    answer: 2,
    explanation: "Selective search starts with superpixels and iteratively merges the most similar adjacent regions using multiple complementary similarity measures. This generates a diverse set of region proposals at various scales and aspect ratios. It was the standard proposal method for R-CNN and Fast R-CNN before being replaced by RPNs in Faster R-CNN.",
    explanationChinese: "\u9009\u62e9\u6027\u641c\u7d22\u4ece\u8d85\u50cf\u7d20\u5f00\u59cb\uff0c\u4f7f\u7528\u591a\u79cd\u4e92\u8865\u7684\u76f8\u4f3c\u6027\u5ea6\u91cf\u8fed\u4ee3\u5408\u5e76\u6700\u76f8\u4f3c\u7684\u76f8\u90bb\u533a\u57df\u3002\u8fd9\u5728\u5404\u79cd\u5c3a\u5ea6\u548c\u7eb5\u6a2a\u6bd4\u4e0a\u751f\u6210\u591a\u6837\u7684\u533a\u57df\u63d0\u8bae\u96c6\u3002\u5b83\u662fR-CNN\u548cFast R-CNN\u7684\u6807\u51c6\u63d0\u8bae\u65b9\u6cd5\uff0c\u540e\u6765\u88abFaster R-CNN\u4e2d\u7684RPN\u53d6\u4ee3\u3002",
    diagram: "",
    terms: ["object_detection", "region_proposal"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 147,
    q: "What is the difference between one-stage and two-stage object detectors?",
    qChinese: "\u5355\u9636\u6bb5\u548c\u4e24\u9636\u6bb5\u7269\u4f53\u68c0\u6d4b\u5668\u6709\u4ec0\u4e48\u533a\u522b\uff1f",
    options: [
      "A) One-stage uses color images; two-stage uses grayscale",
      "B) One-stage detectors are always less accurate",
      "C) Two-stage detectors first generate region proposals then classify them; one-stage detectors predict boxes and classes directly in a single pass",
      "D) Two-stage detectors require two separate networks"
    ],
    optionsChinese: [
      "A) \u5355\u9636\u6bb5\u4f7f\u7528\u5f69\u8272\u56fe\u50cf\uff1b\u4e24\u9636\u6bb5\u4f7f\u7528\u7070\u5ea6",
      "B) \u5355\u9636\u6bb5\u68c0\u6d4b\u5668\u603b\u662f\u4e0d\u592a\u51c6\u786e",
      "C) \u4e24\u9636\u6bb5\u68c0\u6d4b\u5668\u5148\u751f\u6210\u533a\u57df\u63d0\u8bae\u518d\u5206\u7c7b\uff1b\u5355\u9636\u6bb5\u68c0\u6d4b\u5668\u5728\u5355\u6b21\u4f20\u9012\u4e2d\u76f4\u63a5\u9884\u6d4b\u6846\u548c\u7c7b\u522b",
      "D) \u4e24\u9636\u6bb5\u68c0\u6d4b\u5668\u9700\u8981\u4e24\u4e2a\u72ec\u7acb\u7684\u7f51\u7edc"
    ],
    answer: 2,
    explanation: "Two-stage detectors like Faster R-CNN first generate proposals then refine and classify them, generally achieving higher accuracy. One-stage detectors like YOLO and SSD directly predict all bounding boxes and classes in a single forward pass, prioritizing speed. Recent one-stage detectors have narrowed the accuracy gap significantly.",
    explanationChinese: "Faster R-CNN\u7b49\u4e24\u9636\u6bb5\u68c0\u6d4b\u5668\u5148\u751f\u6210\u63d0\u8bae\u7136\u540e\u7ec6\u5316\u548c\u5206\u7c7b\uff0c\u901a\u5e38\u83b7\u5f97\u66f4\u9ad8\u7cbe\u5ea6\u3002YOLO\u548cSSD\u7b49\u5355\u9636\u6bb5\u68c0\u6d4b\u5668\u5728\u5355\u6b21\u524d\u5411\u4f20\u64ad\u4e2d\u76f4\u63a5\u9884\u6d4b\u6240\u6709\u8fb9\u754c\u6846\u548c\u7c7b\u522b\uff0c\u4f18\u5148\u8003\u8651\u901f\u5ea6\u3002\u6700\u8fd1\u7684\u5355\u9636\u6bb5\u68c0\u6d4b\u5668\u5df2\u663e\u8457\u7f29\u5c0f\u4e86\u7cbe\u5ea6\u5dee\u8ddd\u3002",
    diagram: "",
    terms: ["object_detection", "yolo"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 148,
    q: "What is focal loss and which detector introduced it?",
    qChinese: "\u7126\u70b9\u635f\u5931\u662f\u4ec0\u4e48\uff0c\u54ea\u4e2a\u68c0\u6d4b\u5668\u5f15\u5165\u4e86\u5b83\uff1f",
    options: [
      "A) A loss function for image sharpening",
      "B) A modified cross-entropy loss introduced in RetinaNet that down-weights easy examples to focus training on hard negatives, addressing class imbalance",
      "C) A loss for focal length estimation",
      "D) A loss function that focuses only on the largest objects"
    ],
    optionsChinese: [
      "A) \u56fe\u50cf\u9510\u5316\u7684\u635f\u5931\u51fd\u6570",
      "B) RetinaNet\u4e2d\u5f15\u5165\u7684\u4fee\u6539\u4ea4\u53c9\u71b5\u635f\u5931\uff0c\u964d\u4f4e\u7b80\u5355\u6837\u672c\u6743\u91cd\u4ee5\u5c06\u8bad\u7ec3\u96c6\u4e2d\u5728\u56f0\u96be\u8d1f\u6837\u672c\u4e0a\uff0c\u89e3\u51b3\u7c7b\u522b\u4e0d\u5e73\u8861",
      "C) \u7126\u8ddd\u4f30\u8ba1\u7684\u635f\u5931",
      "D) \u4ec5\u5173\u6ce8\u6700\u5927\u7269\u4f53\u7684\u635f\u5931\u51fd\u6570"
    ],
    answer: 1,
    explanation: "Focal loss adds a modulating factor (1-pt)^gamma to cross-entropy loss, where gamma > 0 reduces the contribution of well-classified examples. This addresses the extreme foreground-background class imbalance in one-stage detectors. RetinaNet with focal loss achieved accuracy comparable to two-stage detectors while maintaining one-stage speed.",
    explanationChinese: "\u7126\u70b9\u635f\u5931\u5c06\u8c03\u5236\u56e0\u5b50(1-pt)^gamma\u6dfb\u52a0\u5230\u4ea4\u53c9\u71b5\u635f\u5931\u4e2d\uff0c\u5176\u4e2dgamma > 0\u964d\u4f4e\u4e86\u5206\u7c7b\u6b63\u786e\u6837\u672c\u7684\u8d21\u732e\u3002\u8fd9\u89e3\u51b3\u4e86\u5355\u9636\u6bb5\u68c0\u6d4b\u5668\u4e2d\u6781\u7aef\u7684\u524d\u666f-\u80cc\u666f\u7c7b\u522b\u4e0d\u5e73\u8861\u3002\u4f7f\u7528\u7126\u70b9\u635f\u5931\u7684RetinaNet\u5b9e\u73b0\u4e86\u4e0e\u4e24\u9636\u6bb5\u68c0\u6d4b\u5668\u76f8\u5f53\u7684\u7cbe\u5ea6\uff0c\u540c\u65f6\u4fdd\u6301\u5355\u9636\u6bb5\u901f\u5ea6\u3002",
    diagram: "",
    terms: ["object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 149,
    q: "What is the Deformable Parts Model (DPM)?",
    qChinese: "\u53ef\u53d8\u5f62\u90e8\u4ef6\u6a21\u578b\uff08DPM\uff09\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) A 3D printing model for deformable objects",
      "B) A classical object detection method using a root filter and deformable part filters with a latent SVM for training",
      "C) A neural network with deformable layers",
      "D) A method for detecting soft body objects only"
    ],
    optionsChinese: [
      "A) \u53ef\u53d8\u5f62\u7269\u4f53\u76843D\u6253\u5370\u6a21\u578b",
      "B) \u4f7f\u7528\u6839\u6ee4\u6ce2\u5668\u548c\u53ef\u53d8\u5f62\u90e8\u4ef6\u6ee4\u6ce2\u5668\u4ee5\u53ca\u6f5c\u5728SVM\u8fdb\u884c\u8bad\u7ec3\u7684\u7ecf\u5178\u7269\u4f53\u68c0\u6d4b\u65b9\u6cd5",
      "C) \u5177\u6709\u53ef\u53d8\u5f62\u5c42\u7684\u795e\u7ecf\u7f51\u7edc",
      "D) \u4ec5\u7528\u4e8e\u68c0\u6d4b\u8f6f\u4f53\u7269\u4f53\u7684\u65b9\u6cd5"
    ],
    answer: 1,
    explanation: "DPM represents objects as a coarse root filter plus higher-resolution part filters that can shift relative to the root. The score combines appearance matching and deformation cost. Trained with latent SVM, DPM was the dominant pre-deep-learning detection method and won the PASCAL VOC challenge multiple times.",
    explanationChinese: "DPM\u5c06\u7269\u4f53\u8868\u793a\u4e3a\u7c97\u7565\u7684\u6839\u6ee4\u6ce2\u5668\u52a0\u4e0a\u53ef\u4ee5\u76f8\u5bf9\u4e8e\u6839\u79fb\u52a8\u7684\u66f4\u9ad8\u5206\u8fa8\u7387\u90e8\u4ef6\u6ee4\u6ce2\u5668\u3002\u5206\u6570\u7ed3\u5408\u4e86\u5916\u89c2\u5339\u914d\u548c\u53d8\u5f62\u4ee3\u4ef7\u3002\u4f7f\u7528\u6f5c\u5728SVM\u8bad\u7ec3\uff0cDPM\u662f\u6df1\u5ea6\u5b66\u4e60\u4e4b\u524d\u5360\u4e3b\u5bfc\u5730\u4f4d\u7684\u68c0\u6d4b\u65b9\u6cd5\uff0c\u591a\u6b21\u8d62\u5f97PASCAL VOC\u6311\u6218\u8d5b\u3002",
    diagram: "",
    terms: ["object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 150,
    q: "What is IoU (Intersection over Union) in object detection?",
    qChinese: "\u7269\u4f53\u68c0\u6d4b\u4e2d\u7684IoU\uff08\u4ea4\u5e76\u6bd4\uff09\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) The ratio of image area to object area",
      "B) The ratio of the overlap area to the union area of a predicted bounding box and a ground truth box, used to evaluate detection quality",
      "C) The union of all detected objects",
      "D) The intersection of two different detection algorithms"
    ],
    optionsChinese: [
      "A) \u56fe\u50cf\u9762\u79ef\u4e0e\u7269\u4f53\u9762\u79ef\u7684\u6bd4\u7387",
      "B) \u9884\u6d4b\u8fb9\u754c\u6846\u4e0e\u771f\u5b9e\u6846\u7684\u91cd\u53e0\u9762\u79ef\u4e0e\u5e76\u96c6\u9762\u79ef\u7684\u6bd4\u7387\uff0c\u7528\u4e8e\u8bc4\u4f30\u68c0\u6d4b\u8d28\u91cf",
      "C) \u6240\u6709\u68c0\u6d4b\u7269\u4f53\u7684\u5e76\u96c6",
      "D) \u4e24\u79cd\u4e0d\u540c\u68c0\u6d4b\u7b97\u6cd5\u7684\u4ea4\u96c6"
    ],
    answer: 1,
    explanation: "IoU = Area(Intersection) / Area(Union) measures how well a predicted box matches the ground truth. An IoU of 1.0 means perfect overlap. In evaluation, a detection is typically considered correct if IoU exceeds 0.5 (PASCAL VOC) or various thresholds from 0.5 to 0.95 (COCO). IoU is also used in NMS to suppress overlapping detections.",
    explanationChinese: "IoU = \u9762\u79ef(\u4ea4\u96c6) / \u9762\u79ef(\u5e76\u96c6)\u8861\u91cf\u9884\u6d4b\u6846\u4e0e\u771f\u5b9e\u6846\u7684\u5339\u914d\u7a0b\u5ea6\u3002IoU\u4e3a1.0\u8868\u793a\u5b8c\u7f8e\u91cd\u53e0\u3002\u5728\u8bc4\u4f30\u4e2d\uff0c\u5982\u679cIoU\u8d85\u8fc70.5\uff08PASCAL VOC\uff09\u6216\u4ece0.5\u52300.95\u7684\u5404\u79cd\u9608\u503c\uff08COCO\uff09\uff0c\u68c0\u6d4b\u901a\u5e38\u88ab\u8ba4\u4e3a\u662f\u6b63\u786e\u7684\u3002IoU\u4e5f\u7528\u4e8eNMS\u4e2d\u6291\u5236\u91cd\u53e0\u68c0\u6d4b\u3002",
    diagram: "",
    terms: ["object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 151,
    q: "What is data augmentation commonly used in object detection training?",
    qChinese: "\u7269\u4f53\u68c0\u6d4b\u8bad\u7ec3\u4e2d\u5e38\u7528\u7684\u6570\u636e\u589e\u5f3a\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) Adding more GPUs for training",
      "B) Collecting more images from the internet",
      "C) Applying random transformations like flipping, scaling, cropping, and color jittering to training images to increase dataset diversity",
      "D) Removing difficult examples from training"
    ],
    optionsChinese: [
      "A) \u6dfb\u52a0\u66f4\u591aGPU\u8fdb\u884c\u8bad\u7ec3",
      "B) \u4ece\u4e92\u8054\u7f51\u6536\u96c6\u66f4\u591a\u56fe\u50cf",
      "C) \u5bf9\u8bad\u7ec3\u56fe\u50cf\u5e94\u7528\u968f\u673a\u7ffb\u8f6c\u3001\u7f29\u653e\u3001\u88c1\u526a\u548c\u989c\u8272\u6296\u52a8\u7b49\u53d8\u6362\u4ee5\u589e\u52a0\u6570\u636e\u96c6\u591a\u6837\u6027",
      "D) \u4ece\u8bad\u7ec3\u4e2d\u79fb\u9664\u56f0\u96be\u6837\u672c"
    ],
    answer: 2,
    explanation: "Data augmentation artificially increases training set diversity by applying random transformations: horizontal flipping, random cropping, scale jittering, color distortion, and cutout or mosaic techniques. This reduces overfitting and improves generalization. Detection-specific augmentations also adjust bounding box annotations to match the transformed images.",
    explanationChinese: "\u6570\u636e\u589e\u5f3a\u901a\u8fc7\u5e94\u7528\u968f\u673a\u53d8\u6362\u4eba\u4e3a\u589e\u52a0\u8bad\u7ec3\u96c6\u591a\u6837\u6027\uff1a\u6c34\u5e73\u7ffb\u8f6c\u3001\u968f\u673a\u88c1\u526a\u3001\u5c3a\u5ea6\u6296\u52a8\u3001\u989c\u8272\u5931\u771f\u4ee5\u53cacutout\u6216mosaic\u6280\u672f\u3002\u8fd9\u51cf\u5c11\u8fc7\u62df\u5408\u5e76\u6539\u5584\u6cdb\u5316\u3002\u68c0\u6d4b\u7279\u5b9a\u7684\u589e\u5f3a\u8fd8\u8c03\u6574\u8fb9\u754c\u6846\u6807\u6ce8\u4ee5\u5339\u914d\u53d8\u6362\u540e\u7684\u56fe\u50cf\u3002",
    diagram: "",
    terms: ["object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 152,
    q: "What is the Viola-Jones face detection framework?",
    qChinese: "Viola-Jones\u4eba\u8138\u68c0\u6d4b\u6846\u67b6\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) A deep learning face detector",
      "B) A cascade of boosted classifiers using Haar-like features computed efficiently with integral images for real-time face detection",
      "C) A template matching approach for faces",
      "D) A face detection method based on skin color"
    ],
    optionsChinese: [
      "A) \u6df1\u5ea6\u5b66\u4e60\u4eba\u8138\u68c0\u6d4b\u5668",
      "B) \u4f7f\u7528\u901a\u8fc7\u79ef\u5206\u56fe\u9ad8\u6548\u8ba1\u7b97\u7684Haar-like\u7279\u5f81\u7684\u63d0\u5347\u5206\u7c7b\u5668\u7ea7\u8054\uff0c\u7528\u4e8e\u5b9e\u65f6\u4eba\u8138\u68c0\u6d4b",
      "C) \u57fa\u4e8e\u6a21\u677f\u5339\u914d\u7684\u4eba\u8138\u68c0\u6d4b\u65b9\u6cd5",
      "D) \u57fa\u4e8e\u80a4\u8272\u7684\u4eba\u8138\u68c0\u6d4b\u65b9\u6cd5"
    ],
    answer: 1,
    explanation: "The Viola-Jones detector uses integral images for fast Haar-like feature computation, AdaBoost for feature selection and classifier training, and an attentional cascade that quickly rejects non-face windows. Each cascade stage adds more features, rejecting most background regions early. This was the first real-time face detection system.",
    explanationChinese: "Viola-Jones\u68c0\u6d4b\u5668\u4f7f\u7528\u79ef\u5206\u56fe\u5feb\u901f\u8ba1\u7b97Haar-like\u7279\u5f81\uff0c\u4f7f\u7528AdaBoost\u8fdb\u884c\u7279\u5f81\u9009\u62e9\u548c\u5206\u7c7b\u5668\u8bad\u7ec3\uff0c\u4ee5\u53ca\u5feb\u901f\u62d2\u7edd\u975e\u4eba\u8138\u7a97\u53e3\u7684\u6ce8\u610f\u529b\u7ea7\u8054\u3002\u6bcf\u4e2a\u7ea7\u8054\u9636\u6bb5\u6dfb\u52a0\u66f4\u591a\u7279\u5f81\uff0c\u5c3d\u65e9\u62d2\u7edd\u5927\u591a\u6570\u80cc\u666f\u533a\u57df\u3002\u8fd9\u662f\u7b2c\u4e00\u4e2a\u5b9e\u65f6\u4eba\u8138\u68c0\u6d4b\u7cfb\u7edf\u3002",
    diagram: "",
    terms: ["object_detection", "face_recognition"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 153,
    q: "What is transfer learning in the context of object detection?",
    qChinese: "\u5728\u7269\u4f53\u68c0\u6d4b\u7684\u80cc\u666f\u4e0b\uff0c\u8fc1\u79fb\u5b66\u4e60\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) Transferring images between cameras",
      "B) Using a CNN backbone pre-trained on a large dataset like ImageNet and fine-tuning it for the specific detection task with a smaller dataset",
      "C) Moving the detector from one computer to another",
      "D) Transferring detection results to a different format"
    ],
    optionsChinese: [
      "A) \u5728\u76f8\u673a\u4e4b\u95f4\u4f20\u8f93\u56fe\u50cf",
      "B) \u4f7f\u7528\u5728ImageNet\u7b49\u5927\u6570\u636e\u96c6\u4e0a\u9884\u8bad\u7ec3\u7684CNN\u4e3b\u5e72\uff0c\u5e76\u7528\u8f83\u5c0f\u7684\u6570\u636e\u96c6\u5bf9\u5176\u8fdb\u884c\u7279\u5b9a\u68c0\u6d4b\u4efb\u52a1\u7684\u5fae\u8c03",
      "C) \u5c06\u68c0\u6d4b\u5668\u4ece\u4e00\u53f0\u8ba1\u7b97\u673a\u79fb\u5230\u53e6\u4e00\u53f0",
      "D) \u5c06\u68c0\u6d4b\u7ed3\u679c\u8f6c\u6362\u4e3a\u4e0d\u540c\u683c\u5f0f"
    ],
    answer: 1,
    explanation: "Transfer learning leverages features learned from large-scale classification datasets by using pre-trained CNN backbones in detection networks. The backbone provides general visual features, while task-specific heads are fine-tuned on the detection dataset. This significantly reduces training data requirements and improves convergence speed and final accuracy.",
    explanationChinese: "\u8fc1\u79fb\u5b66\u4e60\u901a\u8fc7\u5728\u68c0\u6d4b\u7f51\u7edc\u4e2d\u4f7f\u7528\u9884\u8bad\u7ec3\u7684CNN\u4e3b\u5e72\u6765\u5229\u7528\u4ece\u5927\u89c4\u6a21\u5206\u7c7b\u6570\u636e\u96c6\u4e2d\u5b66\u4e60\u7684\u7279\u5f81\u3002\u4e3b\u5e72\u63d0\u4f9b\u901a\u7528\u89c6\u89c9\u7279\u5f81\uff0c\u800c\u4efb\u52a1\u7279\u5b9a\u7684\u5934\u90e8\u5728\u68c0\u6d4b\u6570\u636e\u96c6\u4e0a\u8fdb\u884c\u5fae\u8c03\u3002\u8fd9\u663e\u8457\u51cf\u5c11\u4e86\u8bad\u7ec3\u6570\u636e\u9700\u6c42\u5e76\u6539\u5584\u4e86\u6536\u655b\u901f\u5ea6\u548c\u6700\u7ec8\u7cbe\u5ea6\u3002",
    diagram: "",
    terms: ["object_detection", "image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 154,
    q: "What is the DETR (Detection Transformer) approach?",
    qChinese: "DETR\uff08\u68c0\u6d4bTransformer\uff09\u65b9\u6cd5\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) A variant of R-CNN with transformers",
      "B) A text-based object detection method",
      "C) An end-to-end object detector using a transformer encoder-decoder architecture with learned object queries, eliminating hand-designed components like anchors and NMS",
      "D) A transfer learning framework"
    ],
    optionsChinese: [
      "A) \u5e26transformer\u7684R-CNN\u53d8\u4f53",
      "B) \u57fa\u4e8e\u6587\u672c\u7684\u7269\u4f53\u68c0\u6d4b\u65b9\u6cd5",
      "C) \u4f7f\u7528transformer\u7f16\u7801\u5668-\u89e3\u7801\u5668\u67b6\u6784\u548c\u5b66\u4e60\u7684\u7269\u4f53\u67e5\u8be2\u7684\u7aef\u5230\u7aef\u7269\u4f53\u68c0\u6d4b\u5668\uff0c\u6d88\u9664\u4e86\u951a\u70b9\u548cNMS\u7b49\u624b\u5de5\u8bbe\u8ba1\u7ec4\u4ef6",
      "D) \u8fc1\u79fb\u5b66\u4e60\u6846\u67b6"
    ],
    answer: 2,
    explanation: "DETR uses a CNN backbone followed by a transformer encoder-decoder. Learned object queries attend to the encoded image features to directly output a fixed set of predictions. Hungarian matching assigns predictions to ground truth for loss computation. DETR eliminates anchor design and NMS, simplifying the detection pipeline.",
    explanationChinese: "DETR\u4f7f\u7528CNN\u4e3b\u5e72\u540e\u63a5transformer\u7f16\u7801\u5668-\u89e3\u7801\u5668\u3002\u5b66\u4e60\u7684\u7269\u4f53\u67e5\u8be2\u5173\u6ce8\u7f16\u7801\u7684\u56fe\u50cf\u7279\u5f81\u4ee5\u76f4\u63a5\u8f93\u51fa\u56fa\u5b9a\u96c6\u5408\u7684\u9884\u6d4b\u3002\u5308\u7259\u5229\u5339\u914d\u5c06\u9884\u6d4b\u5206\u914d\u7ed9\u771f\u5b9e\u503c\u7528\u4e8e\u635f\u5931\u8ba1\u7b97\u3002DETR\u6d88\u9664\u4e86\u951a\u70b9\u8bbe\u8ba1\u548cNMS\uff0c\u7b80\u5316\u4e86\u68c0\u6d4b\u6d41\u7a0b\u3002",
    diagram: "",
    terms: ["object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 155,
    q: "What is the role of batch normalization in object detection networks?",
    qChinese: "\u6279\u5f52\u4e00\u5316\u5728\u7269\u4f53\u68c0\u6d4b\u7f51\u7edc\u4e2d\u7684\u4f5c\u7528\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) Sorting training batches by difficulty",
      "B) Normalizing bounding box coordinates",
      "C) Limiting batch size during training",
      "D) Normalizing layer activations to have zero mean and unit variance within each mini-batch, stabilizing training and enabling higher learning rates",
    ],
    optionsChinese: [
      "A) \u6309\u96be\u5ea6\u6392\u5e8f\u8bad\u7ec3\u6279\u6b21",
      "B) \u5f52\u4e00\u5316\u8fb9\u754c\u6846\u5750\u6807",
      "C) \u9650\u5236\u8bad\u7ec3\u671f\u95f4\u7684\u6279\u91cf\u5927\u5c0f",
      "D) \u5c06\u5c42\u6fc0\u6d3b\u5f52\u4e00\u5316\u4e3a\u6bcf\u4e2a\u5c0f\u6279\u91cf\u5185\u7684\u96f6\u5747\u503c\u548c\u5355\u4f4d\u65b9\u5dee\uff0c\u7a33\u5b9a\u8bad\u7ec3\u5e76\u652f\u6301\u66f4\u9ad8\u7684\u5b66\u4e60\u7387",
    ],
    answer: 3,
    explanation: "Batch normalization normalizes the activations of each layer across the mini-batch, reducing internal covariate shift. This allows higher learning rates, faster convergence, and acts as a regularizer. In detection networks, batch norm is standard in backbone and detection heads, though it can behave differently with small batch sizes.",
    explanationChinese: "\u6279\u5f52\u4e00\u5316\u5728\u5c0f\u6279\u91cf\u4e2d\u5f52\u4e00\u5316\u6bcf\u5c42\u7684\u6fc0\u6d3b\uff0c\u51cf\u5c11\u5185\u90e8\u534f\u53d8\u91cf\u504f\u79fb\u3002\u8fd9\u5141\u8bb8\u66f4\u9ad8\u7684\u5b66\u4e60\u7387\u3001\u66f4\u5feb\u7684\u6536\u655b\uff0c\u5e76\u8d77\u6b63\u5219\u5316\u4f5c\u7528\u3002\u5728\u68c0\u6d4b\u7f51\u7edc\u4e2d\uff0c\u6279\u5f52\u4e00\u5316\u5728\u4e3b\u5e72\u548c\u68c0\u6d4b\u5934\u4e2d\u662f\u6807\u51c6\u7684\uff0c\u5c3d\u7ba1\u5728\u5c0f\u6279\u91cf\u5927\u5c0f\u4e0b\u884c\u4e3a\u53ef\u80fd\u4e0d\u540c\u3002",
    diagram: "",
    terms: ["object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 156,
    q: "What is the difference between object detection and object recognition?",
    qChinese: "\u7269\u4f53\u68c0\u6d4b\u548c\u7269\u4f53\u8bc6\u522b\u6709\u4ec0\u4e48\u533a\u522b\uff1f",
    options: [
      "A) They are exactly the same task",
      "B) Recognition is faster than detection",
      "C) Detection localizes objects with bounding boxes and classifies them; recognition typically refers to classifying an entire image or a pre-cropped region without localization",
      "D) Detection only finds objects; recognition only classifies backgrounds"
    ],
    optionsChinese: [
      "A) \u5b83\u4eec\u662f\u5b8c\u5168\u76f8\u540c\u7684\u4efb\u52a1",
      "B) \u8bc6\u522b\u6bd4\u68c0\u6d4b\u66f4\u5feb",
      "C) \u68c0\u6d4b\u7528\u8fb9\u754c\u6846\u5b9a\u4f4d\u7269\u4f53\u5e76\u5206\u7c7b\uff1b\u8bc6\u522b\u901a\u5e38\u6307\u5bf9\u6574\u4e2a\u56fe\u50cf\u6216\u9884\u88c1\u526a\u533a\u57df\u8fdb\u884c\u5206\u7c7b\u800c\u4e0d\u8fdb\u884c\u5b9a\u4f4d",
      "D) \u68c0\u6d4b\u53ea\u627e\u5230\u7269\u4f53\uff1b\u8bc6\u522b\u53ea\u5206\u7c7b\u80cc\u666f"
    ],
    answer: 2,
    explanation: "Object detection involves both localizing objects in the image with bounding boxes and classifying what they are. Object recognition (classification) assigns a label to an entire image or a known region without determining where objects are. Detection is a harder task that combines localization and classification simultaneously.",
    explanationChinese: "\u7269\u4f53\u68c0\u6d4b\u6d89\u53ca\u7528\u8fb9\u754c\u6846\u5728\u56fe\u50cf\u4e2d\u5b9a\u4f4d\u7269\u4f53\u5e76\u5206\u7c7b\u5b83\u4eec\u662f\u4ec0\u4e48\u3002\u7269\u4f53\u8bc6\u522b\uff08\u5206\u7c7b\uff09\u4e3a\u6574\u4e2a\u56fe\u50cf\u6216\u5df2\u77e5\u533a\u57df\u5206\u914d\u6807\u7b7e\u800c\u4e0d\u786e\u5b9a\u7269\u4f53\u5728\u54ea\u91cc\u3002\u68c0\u6d4b\u662f\u4e00\u4e2a\u66f4\u96be\u7684\u4efb\u52a1\uff0c\u540c\u65f6\u7ed3\u5408\u4e86\u5b9a\u4f4d\u548c\u5206\u7c7b\u3002",
    diagram: "",
    terms: ["object_detection", "image_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 157,
    q: "What are dilated (atrous) convolutions used for in detection?",
    qChinese: "\u81a8\u80c0\uff08\u7a7a\u6d1e\uff09\u5377\u79ef\u5728\u68c0\u6d4b\u4e2d\u7528\u4e8e\u4ec0\u4e48\uff1f",
    options: [
      "A) Making the convolution kernel larger by adding zeros",
      "B) Reducing the number of convolution operations",
      "C) Dilating the input image before convolution",
      "D) Increasing the receptive field without increasing parameters by inserting gaps between kernel elements, capturing multi-scale context",
    ],
    optionsChinese: [
      "A) \u901a\u8fc7\u6dfb\u52a0\u96f6\u4f7f\u5377\u79ef\u6838\u66f4\u5927",
      "B) \u51cf\u5c11\u5377\u79ef\u64cd\u4f5c\u7684\u6570\u91cf",
      "C) \u5728\u5377\u79ef\u4e4b\u524d\u81a8\u80c0\u8f93\u5165\u56fe\u50cf",
      "D) \u901a\u8fc7\u5728\u6838\u5143\u7d20\u4e4b\u95f4\u63d2\u5165\u95f4\u9694\u6765\u589e\u52a0\u611f\u53d7\u91ce\u800c\u4e0d\u589e\u52a0\u53c2\u6570\uff0c\u6355\u83b7\u591a\u5c3a\u5ea6\u4e0a\u4e0b\u6587",
    ],
    answer: 3,
    explanation: "Dilated convolutions insert gaps (dilation rate) between kernel weights, effectively enlarging the receptive field without increasing parameter count or reducing resolution. A dilation rate of 2 doubles the effective kernel size. They are used in detection backbones and segmentation networks to capture larger context while maintaining spatial resolution.",
    explanationChinese: "\u81a8\u80c0\u5377\u79ef\u5728\u6838\u6743\u91cd\u4e4b\u95f4\u63d2\u5165\u95f4\u9694\uff08\u81a8\u80c0\u7387\uff09\uff0c\u6709\u6548\u5730\u6269\u5927\u611f\u53d7\u91ce\u800c\u4e0d\u589e\u52a0\u53c2\u6570\u6570\u91cf\u6216\u964d\u4f4e\u5206\u8fa8\u7387\u3002\u81a8\u80c0\u7387\u4e3a2\u4f7f\u6709\u6548\u6838\u5927\u5c0f\u7ffb\u500d\u3002\u5b83\u4eec\u7528\u4e8e\u68c0\u6d4b\u4e3b\u5e72\u548c\u5206\u5272\u7f51\u7edc\u4e2d\uff0c\u5728\u4fdd\u6301\u7a7a\u95f4\u5206\u8fa8\u7387\u7684\u540c\u65f6\u6355\u83b7\u66f4\u5927\u4e0a\u4e0b\u6587\u3002",
    diagram: "",
    terms: ["object_detection", "convolution_cv"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 158,
    q: "What is hard negative mining in training object detectors?",
    qChinese: "\u8bad\u7ec3\u7269\u4f53\u68c0\u6d4b\u5668\u4e2d\u7684\u56f0\u96be\u8d1f\u6837\u672c\u6316\u6398\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) Mining for physical objects that are hard to detect",
      "B) Finding negative reviews of detection systems",
      "C) Removing all negative examples from training",
      "D) Selecting the most confidently misclassified background examples for training to improve the detector discriminative ability",
    ],
    optionsChinese: [
      "A) \u6316\u6398\u96be\u4ee5\u68c0\u6d4b\u7684\u7269\u7406\u7269\u4f53",
      "B) \u67e5\u627e\u68c0\u6d4b\u7cfb\u7edf\u7684\u8d1f\u9762\u8bc4\u8bba",
      "C) \u4ece\u8bad\u7ec3\u4e2d\u79fb\u9664\u6240\u6709\u8d1f\u6837\u672c",
      "D) \u9009\u62e9\u6700\u81ea\u4fe1\u5730\u88ab\u9519\u8bef\u5206\u7c7b\u7684\u80cc\u666f\u6837\u672c\u8fdb\u884c\u8bad\u7ec3\uff0c\u4ee5\u63d0\u9ad8\u68c0\u6d4b\u5668\u7684\u5224\u522b\u80fd\u529b",
    ],
    answer: 3,
    explanation: "In detection training, most candidate regions are background (negative). Hard negative mining selects the false positives with highest confidence scores for training, rather than using random negatives. This forces the detector to learn from its most challenging mistakes, significantly improving discrimination between objects and difficult background patterns.",
    explanationChinese: "\u5728\u68c0\u6d4b\u8bad\u7ec3\u4e2d\uff0c\u5927\u591a\u6570\u5019\u9009\u533a\u57df\u662f\u80cc\u666f\uff08\u8d1f\u6837\u672c\uff09\u3002\u56f0\u96be\u8d1f\u6837\u672c\u6316\u6398\u9009\u62e9\u5177\u6709\u6700\u9ad8\u7f6e\u4fe1\u5ea6\u5206\u6570\u7684\u8bef\u62a5\u8fdb\u884c\u8bad\u7ec3\uff0c\u800c\u4e0d\u662f\u4f7f\u7528\u968f\u673a\u8d1f\u6837\u672c\u3002\u8fd9\u8feb\u4f7f\u68c0\u6d4b\u5668\u4ece\u5176\u6700\u5177\u6311\u6218\u6027\u7684\u9519\u8bef\u4e2d\u5b66\u4e60\uff0c\u663e\u8457\u6539\u5584\u7269\u4f53\u548c\u56f0\u96be\u80cc\u666f\u6a21\u5f0f\u4e4b\u95f4\u7684\u533a\u5206\u3002",
    diagram: "",
    terms: ["object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 159,
    q: "What is the RoI Pooling layer in Fast R-CNN?",
    qChinese: "Fast R-CNN\u4e2d\u7684RoI\u6c60\u5316\u5c42\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) A pooling layer applied to the entire image",
      "B) A layer that pools all regions together",
      "C) A layer that extracts a fixed-size feature map from any region of interest on the shared feature map by dividing the RoI into a grid and max-pooling each cell",
      "D) A layer for reducing image resolution"
    ],
    optionsChinese: [
      "A) \u5e94\u7528\u4e8e\u6574\u4e2a\u56fe\u50cf\u7684\u6c60\u5316\u5c42",
      "B) \u5c06\u6240\u6709\u533a\u57df\u5408\u5e76\u5728\u4e00\u8d77\u7684\u5c42",
      "C) \u901a\u8fc7\u5c06RoI\u5212\u5206\u4e3a\u7f51\u683c\u5e76\u5bf9\u6bcf\u4e2a\u5355\u5143\u8fdb\u884c\u6700\u5927\u6c60\u5316\uff0c\u4ece\u5171\u4eab\u7279\u5f81\u56fe\u7684\u4efb\u4f55\u611f\u5174\u8da3\u533a\u57df\u63d0\u53d6\u56fa\u5b9a\u5927\u5c0f\u7279\u5f81\u56fe\u7684\u5c42",
      "D) \u7528\u4e8e\u964d\u4f4e\u56fe\u50cf\u5206\u8fa8\u7387\u7684\u5c42"
    ],
    answer: 2,
    explanation: "RoI Pooling divides each region of interest into a fixed grid (e.g., 7x7) and applies max pooling within each grid cell. This produces a fixed-size output regardless of the input RoI size, enabling batch processing of proposals with varying dimensions. RoI Align later improved this by using bilinear interpolation to avoid quantization artifacts.",
    explanationChinese: "RoI\u6c60\u5316\u5c06\u6bcf\u4e2a\u611f\u5174\u8da3\u533a\u57df\u5212\u5206\u4e3a\u56fa\u5b9a\u7f51\u683c\uff08\u59827x7\uff09\u5e76\u5728\u6bcf\u4e2a\u7f51\u683c\u5355\u5143\u5185\u5e94\u7528\u6700\u5927\u6c60\u5316\u3002\u8fd9\u4ea7\u751f\u4e0e\u8f93\u5165RoI\u5927\u5c0f\u65e0\u5173\u7684\u56fa\u5b9a\u5927\u5c0f\u8f93\u51fa\uff0c\u4f7f\u4e0d\u540c\u5c3a\u5bf8\u63d0\u8bae\u7684\u6279\u5904\u7406\u6210\u4e3a\u53ef\u80fd\u3002RoI Align\u540e\u6765\u901a\u8fc7\u4f7f\u7528\u53cc\u7ebf\u6027\u63d2\u503c\u907f\u514d\u91cf\u5316\u4f2a\u5f71\u6765\u6539\u8fdb\u3002",
    diagram: "",
    terms: ["object_detection", "region_proposal"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 160,
    q: "What improvement does YOLOv3 bring over earlier YOLO versions?",
    qChinese: "YOLOv3\u76f8\u5bf9\u4e8e\u65e9\u671fYOLO\u7248\u672c\u5e26\u6765\u4e86\u4ec0\u4e48\u6539\u8fdb\uff1f",
    options: [
      "A) It uses a completely different detection paradigm",
      "B) It uses a deeper Darknet-53 backbone, multi-scale predictions at three scales, and binary cross-entropy for multi-label classification",
      "C) It removes the grid-based prediction mechanism",
      "D) It uses only grayscale images for faster processing"
    ],
    optionsChinese: [
      "A) \u5b83\u4f7f\u7528\u5b8c\u5168\u4e0d\u540c\u7684\u68c0\u6d4b\u8303\u5f0f",
      "B) \u5b83\u4f7f\u7528\u66f4\u6df1\u7684Darknet-53\u4e3b\u5e72\u3001\u4e09\u4e2a\u5c3a\u5ea6\u7684\u591a\u5c3a\u5ea6\u9884\u6d4b\u548c\u7528\u4e8e\u591a\u6807\u7b7e\u5206\u7c7b\u7684\u4e8c\u5143\u4ea4\u53c9\u71b5",
      "C) \u5b83\u79fb\u9664\u4e86\u57fa\u4e8e\u7f51\u683c\u7684\u9884\u6d4b\u673a\u5236",
      "D) \u5b83\u4ec5\u4f7f\u7528\u7070\u5ea6\u56fe\u50cf\u4ee5\u52a0\u5feb\u5904\u7406"
    ],
    answer: 1,
    explanation: "YOLOv3 uses Darknet-53 backbone with residual connections, predicts objects at three different scales using FPN-like feature fusion, and uses binary cross-entropy loss per class to support multi-label predictions. These improvements significantly enhance small object detection while maintaining real-time performance.",
    explanationChinese: "YOLOv3\u4f7f\u7528\u5e26\u6b8b\u5dee\u8fde\u63a5\u7684Darknet-53\u4e3b\u5e72\uff0c\u4f7f\u7528\u7c7b\u4f3cFPN\u7684\u7279\u5f81\u878d\u5408\u5728\u4e09\u4e2a\u4e0d\u540c\u5c3a\u5ea6\u4e0a\u9884\u6d4b\u7269\u4f53\uff0c\u5e76\u4f7f\u7528\u6bcf\u7c7b\u7684\u4e8c\u5143\u4ea4\u53c9\u71b5\u635f\u5931\u652f\u6301\u591a\u6807\u7b7e\u9884\u6d4b\u3002\u8fd9\u4e9b\u6539\u8fdb\u663e\u8457\u589e\u5f3a\u4e86\u5c0f\u7269\u4f53\u68c0\u6d4b\uff0c\u540c\u65f6\u4fdd\u6301\u5b9e\u65f6\u6027\u80fd\u3002",
    diagram: "",
    terms: ["object_detection", "yolo"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 161,
    q: "What is the concept of receptive field in CNNs for object detection?",
    qChinese: "CNN\u4e2d\u7528\u4e8e\u7269\u4f53\u68c0\u6d4b\u7684\u611f\u53d7\u91ce\u6982\u5ff5\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) The region in the input image that affects the computation of a particular feature in a deeper layer",
      "B) The field of view of the camera",
      "C) The area where the network receives training data",
      "D) The visible area on the display screen"
    ],
    optionsChinese: [
      "A) \u8f93\u5165\u56fe\u50cf\u4e2d\u5f71\u54cd\u66f4\u6df1\u5c42\u7279\u5b9a\u7279\u5f81\u8ba1\u7b97\u7684\u533a\u57df",
      "B) \u76f8\u673a\u7684\u89c6\u91ce",
      "C) \u7f51\u7edc\u63a5\u6536\u8bad\u7ec3\u6570\u636e\u7684\u533a\u57df",
      "D) \u663e\u793a\u5c4f\u4e0a\u7684\u53ef\u89c1\u533a\u57df"
    ],
    answer: 0,
    explanation: "The receptive field is the input image region that contributes to computing a specific feature map value. Deeper layers have larger receptive fields due to cascaded convolutions and pooling. For detection, the receptive field must be large enough to capture the entire object. Dilated convolutions and deeper networks increase the receptive field.",
    explanationChinese: "\u611f\u53d7\u91ce\u662f\u8d21\u732e\u4e8e\u8ba1\u7b97\u7279\u5b9a\u7279\u5f81\u56fe\u503c\u7684\u8f93\u5165\u56fe\u50cf\u533a\u57df\u3002\u7531\u4e8e\u7ea7\u8054\u5377\u79ef\u548c\u6c60\u5316\uff0c\u66f4\u6df1\u7684\u5c42\u5177\u6709\u66f4\u5927\u7684\u611f\u53d7\u91ce\u3002\u5bf9\u4e8e\u68c0\u6d4b\uff0c\u611f\u53d7\u91ce\u5fc5\u987b\u8db3\u591f\u5927\u4ee5\u6355\u83b7\u6574\u4e2a\u7269\u4f53\u3002\u81a8\u80c0\u5377\u79ef\u548c\u66f4\u6df1\u7684\u7f51\u7edc\u589e\u52a0\u611f\u53d7\u91ce\u3002",
    diagram: "",
    terms: ["object_detection", "convolution_cv"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 162,
    q: "What is soft-NMS and how does it differ from standard NMS?",
    qChinese: "\u8f6fNMS\u662f\u4ec0\u4e48\uff0c\u5b83\u4e0e\u6807\u51c6NMS\u6709\u4f55\u4e0d\u540c\uff1f",
    options: [
      "A) NMS applied to soft objects only",
      "B) A learnable NMS replacement",
      "C) NMS with a softer IoU threshold",
      "D) Instead of completely removing overlapping boxes, it gradually reduces their confidence scores based on overlap degree, preserving nearby distinct objects",
    ],
    optionsChinese: [
      "A) \u4ec5\u5e94\u7528\u4e8e\u8f6f\u7269\u4f53\u7684NMS",
      "B) \u53ef\u5b66\u4e60\u7684NMS\u66ff\u4ee3",
      "C) \u5177\u6709\u66f4\u5bbd\u677eIoU\u9608\u503c\u7684NMS",
      "D) \u4e0d\u662f\u5b8c\u5168\u79fb\u9664\u91cd\u53e0\u6846\uff0c\u800c\u662f\u6839\u636e\u91cd\u53e0\u7a0b\u5ea6\u9010\u6e10\u964d\u4f4e\u5176\u7f6e\u4fe1\u5ea6\u5206\u6570\uff0c\u4fdd\u7559\u9644\u8fd1\u7684\u4e0d\u540c\u7269\u4f53",
    ],
    answer: 3,
    explanation: "Standard NMS binary removes overlapping detections, which can accidentally suppress correct detections of nearby objects. Soft-NMS instead decays the confidence score of overlapping boxes using a continuous function (linear or Gaussian) of their IoU. This preserves detections of adjacent objects while still reducing duplicates.",
    explanationChinese: "\u6807\u51c6NMS\u4e8c\u503c\u5316\u5730\u79fb\u9664\u91cd\u53e0\u68c0\u6d4b\uff0c\u8fd9\u53ef\u80fd\u610f\u5916\u6291\u5236\u9644\u8fd1\u7269\u4f53\u7684\u6b63\u786e\u68c0\u6d4b\u3002\u8f6fNMS\u4f7f\u7528IoU\u7684\u8fde\u7eed\u51fd\u6570\uff08\u7ebf\u6027\u6216\u9ad8\u65af\uff09\u8870\u51cf\u91cd\u53e0\u6846\u7684\u7f6e\u4fe1\u5ea6\u5206\u6570\u3002\u8fd9\u4fdd\u7559\u4e86\u76f8\u90bb\u7269\u4f53\u7684\u68c0\u6d4b\u540c\u65f6\u4ecd\u51cf\u5c11\u91cd\u590d\u3002",
    diagram: "",
    terms: ["object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 163,
    q: "What is the CenterNet detection approach?",
    qChinese: "CenterNet\u68c0\u6d4b\u65b9\u6cd5\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) An anchor-free detector that represents objects as center points and regresses to object size, eliminating the need for anchor boxes and NMS",
      "B) A detector that only finds the center pixel of each object",
      "C) A detector centered on the image middle",
      "D) A network that centers all bounding boxes"
    ],
    optionsChinese: [
      "A) \u5c06\u7269\u4f53\u8868\u793a\u4e3a\u4e2d\u5fc3\u70b9\u5e76\u56de\u5f52\u7269\u4f53\u5927\u5c0f\u7684\u65e0\u951a\u70b9\u68c0\u6d4b\u5668\uff0c\u6d88\u9664\u4e86\u5bf9\u951a\u70b9\u6846\u548cNMS\u7684\u9700\u6c42",
      "B) \u4ec5\u627e\u5230\u6bcf\u4e2a\u7269\u4f53\u4e2d\u5fc3\u50cf\u7d20\u7684\u68c0\u6d4b\u5668",
      "C) \u4ee5\u56fe\u50cf\u4e2d\u95f4\u4e3a\u4e2d\u5fc3\u7684\u68c0\u6d4b\u5668",
      "D) \u5c06\u6240\u6709\u8fb9\u754c\u6846\u5c45\u4e2d\u7684\u7f51\u7edc"
    ],
    answer: 0,
    explanation: "CenterNet detects objects by predicting a heatmap of object centers, then regressing to width, height, and offset at each detected center. This anchor-free approach avoids the complexity of anchor design and IoU-based matching. It naturally extends to other tasks like pose estimation and 3D detection by adding regression heads.",
    explanationChinese: "CenterNet\u901a\u8fc7\u9884\u6d4b\u7269\u4f53\u4e2d\u5fc3\u7684\u70ed\u56fe\u6765\u68c0\u6d4b\u7269\u4f53\uff0c\u7136\u540e\u5728\u6bcf\u4e2a\u68c0\u6d4b\u5230\u7684\u4e2d\u5fc3\u56de\u5f52\u5bbd\u5ea6\u3001\u9ad8\u5ea6\u548c\u504f\u79fb\u3002\u8fd9\u79cd\u65e0\u951a\u70b9\u65b9\u6cd5\u907f\u514d\u4e86\u951a\u70b9\u8bbe\u8ba1\u548c\u57fa\u4e8eIoU\u5339\u914d\u7684\u590d\u6742\u6027\u3002\u901a\u8fc7\u6dfb\u52a0\u56de\u5f52\u5934\uff0c\u5b83\u81ea\u7136\u6269\u5c55\u5230\u59ff\u6001\u4f30\u8ba1\u548c3D\u68c0\u6d4b\u7b49\u5176\u4ed6\u4efb\u52a1\u3002",
    diagram: "",
    terms: ["object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 164,
    q: "What is multi-scale object detection and why is it important?",
    qChinese: "\u591a\u5c3a\u5ea6\u7269\u4f53\u68c0\u6d4b\u662f\u4ec0\u4e48\uff0c\u4e3a\u4ec0\u4e48\u5b83\u5f88\u91cd\u8981\uff1f",
    options: [
      "A) Detecting objects in multiple images simultaneously",
      "B) Using multiple detection algorithms together",
      "C) Detecting objects at various sizes by using feature maps at different resolutions, critical because real scenes contain objects at many different scales",
      "D) Detecting objects from multiple camera angles"
    ],
    optionsChinese: [
      "A) \u5728\u591a\u5e45\u56fe\u50cf\u4e2d\u540c\u65f6\u68c0\u6d4b\u7269\u4f53",
      "B) \u540c\u65f6\u4f7f\u7528\u591a\u79cd\u68c0\u6d4b\u7b97\u6cd5",
      "C) \u901a\u8fc7\u4f7f\u7528\u4e0d\u540c\u5206\u8fa8\u7387\u7684\u7279\u5f81\u56fe\u68c0\u6d4b\u5404\u79cd\u5927\u5c0f\u7684\u7269\u4f53\uff0c\u56e0\u4e3a\u771f\u5b9e\u573a\u666f\u5305\u542b\u8bb8\u591a\u4e0d\u540c\u5c3a\u5ea6\u7684\u7269\u4f53\u800c\u81f3\u5173\u91cd\u8981",
      "D) \u4ece\u591a\u4e2a\u76f8\u673a\u89d2\u5ea6\u68c0\u6d4b\u7269\u4f53"
    ],
    answer: 2,
    explanation: "Real images contain objects ranging from tiny to large. Multi-scale detection uses feature maps at multiple resolutions: high-resolution maps for small objects and low-resolution maps for large objects. FPN, image pyramids, and multi-scale prediction heads in YOLO and SSD all address this. Small object detection remains particularly challenging.",
    explanationChinese: "\u771f\u5b9e\u56fe\u50cf\u5305\u542b\u4ece\u5fae\u5c0f\u5230\u5de8\u5927\u7684\u7269\u4f53\u3002\u591a\u5c3a\u5ea6\u68c0\u6d4b\u4f7f\u7528\u591a\u4e2a\u5206\u8fa8\u7387\u7684\u7279\u5f81\u56fe\uff1a\u9ad8\u5206\u8fa8\u7387\u56fe\u7528\u4e8e\u5c0f\u7269\u4f53\uff0c\u4f4e\u5206\u8fa8\u7387\u56fe\u7528\u4e8e\u5927\u7269\u4f53\u3002FPN\u3001\u56fe\u50cf\u91d1\u5b57\u5854\u4ee5\u53caYOLO\u548cSSD\u4e2d\u7684\u591a\u5c3a\u5ea6\u9884\u6d4b\u5934\u90fd\u89e3\u51b3\u4e86\u8fd9\u4e2a\u95ee\u9898\u3002\u5c0f\u7269\u4f53\u68c0\u6d4b\u4ecd\u7136\u7279\u522b\u5177\u6709\u6311\u6218\u6027\u3002",
    diagram: "",
    terms: ["object_detection", "image_pyramid"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 165,
    q: "What is the COCO dataset used for in object detection research?",
    qChinese: "COCO\u6570\u636e\u96c6\u5728\u7269\u4f53\u68c0\u6d4b\u7814\u7a76\u4e2d\u7528\u4e8e\u4ec0\u4e48\uff1f",
    options: [
      "A) Training face recognition systems only",
      "B) A large-scale benchmark dataset with 80 object categories, instance segmentation masks, keypoint annotations, and captions for evaluating detection and segmentation algorithms",
      "C) Storing coconut images",
      "D) A dataset for autonomous driving only"
    ],
    optionsChinese: [
      "A) \u4ec5\u8bad\u7ec3\u4eba\u8138\u8bc6\u522b\u7cfb\u7edf",
      "B) \u5177\u670980\u4e2a\u7269\u4f53\u7c7b\u522b\u3001\u5b9e\u4f8b\u5206\u5272\u63a9\u7801\u3001\u5173\u952e\u70b9\u6807\u6ce8\u548c\u5b57\u5e55\u7684\u5927\u89c4\u6a21\u57fa\u51c6\u6570\u636e\u96c6\uff0c\u7528\u4e8e\u8bc4\u4f30\u68c0\u6d4b\u548c\u5206\u5272\u7b97\u6cd5",
      "C) \u5b58\u50a8\u6930\u5b50\u56fe\u50cf",
      "D) \u4ec5\u7528\u4e8e\u81ea\u52a8\u9a7e\u9a76\u7684\u6570\u636e\u96c6"
    ],
    answer: 1,
    explanation: "COCO (Common Objects in Context) contains 330K images with 80 object categories, 250K people with keypoints, and 5 captions per image. Its evaluation metrics (mAP across multiple IoU thresholds) are the standard for detection benchmarks. COCO emphasizes detecting objects in complex natural scenes with multiple objects per image.",
    explanationChinese: "COCO\uff08\u4e0a\u4e0b\u6587\u4e2d\u7684\u5e38\u89c1\u7269\u4f53\uff09\u5305\u542b33\u4e07\u5f20\u56fe\u50cf\uff0c80\u4e2a\u7269\u4f53\u7c7b\u522b\uff0c25\u4e07\u4e2a\u5e26\u5173\u952e\u70b9\u7684\u4eba\u7269\u548c\u6bcf\u5f20\u56fe5\u4e2a\u5b57\u5e55\u3002\u5176\u8bc4\u4f30\u6307\u6807\uff08\u591a\u4e2aIoU\u9608\u503c\u7684mAP\uff09\u662f\u68c0\u6d4b\u57fa\u51c6\u7684\u6807\u51c6\u3002COCO\u5f3a\u8c03\u5728\u5177\u6709\u591a\u4e2a\u7269\u4f53\u7684\u590d\u6742\u81ea\u7136\u573a\u666f\u4e2d\u68c0\u6d4b\u7269\u4f53\u3002",
    diagram: "",
    terms: ["object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 166,
    q: "What is the epipolar constraint in stereo vision?",
    qChinese: "\u7acb\u4f53\u89c6\u89c9\u4e2d\u7684\u5bf9\u6781\u7ea6\u675f\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) Objects must be the same color in both views",
      "B) The images must have the same resolution",
      "C) Both cameras must have identical settings",
      "D) For a point in one image, its correspondence in the other image must lie on a specific line called the epipolar line, reducing the search from 2D to 1D",
    ],
    optionsChinese: [
      "A) \u7269\u4f53\u5728\u4e24\u4e2a\u89c6\u56fe\u4e2d\u5fc5\u987b\u989c\u8272\u76f8\u540c",
      "B) \u56fe\u50cf\u5fc5\u987b\u6709\u76f8\u540c\u7684\u5206\u8fa8\u7387",
      "C) \u4e24\u4e2a\u76f8\u673a\u5fc5\u987b\u6709\u76f8\u540c\u7684\u8bbe\u7f6e",
      "D) \u5bf9\u4e8e\u4e00\u5e45\u56fe\u50cf\u4e2d\u7684\u70b9\uff0c\u5176\u5728\u53e6\u4e00\u5e45\u56fe\u50cf\u4e2d\u7684\u5bf9\u5e94\u70b9\u5fc5\u987b\u5728\u79f0\u4e3a\u5bf9\u6781\u7ebf\u7684\u7279\u5b9a\u7ebf\u4e0a\uff0c\u5c06\u641c\u7d22\u4ece2D\u964d\u4f4e\u52301D",
    ],
    answer: 3,
    explanation: "The epipolar constraint states that for any point in one image, its corresponding point in the other image lies on the epipolar line (the intersection of the epipolar plane with the image plane). This reduces stereo matching from a 2D search to a 1D search along the epipolar line, greatly improving efficiency and accuracy.",
    explanationChinese: "\u5bf9\u6781\u7ea6\u675f\u6307\u51fa\uff0c\u5bf9\u4e8e\u4e00\u5e45\u56fe\u50cf\u4e2d\u7684\u4efb\u4f55\u70b9\uff0c\u5176\u5728\u53e6\u4e00\u5e45\u56fe\u50cf\u4e2d\u7684\u5bf9\u5e94\u70b9\u4f4d\u4e8e\u5bf9\u6781\u7ebf\u4e0a\uff08\u5bf9\u6781\u5e73\u9762\u4e0e\u50cf\u5e73\u9762\u7684\u4ea4\u7ebf\uff09\u3002\u8fd9\u5c06\u7acb\u4f53\u5339\u914d\u4ece\u4e8c\u7ef4\u641c\u7d22\u51cf\u5c11\u5230\u6cbf\u5bf9\u6781\u7ebf\u7684\u4e00\u7ef4\u641c\u7d22\uff0c\u5927\u5927\u63d0\u9ad8\u4e86\u6548\u7387\u548c\u51c6\u786e\u6027\u3002",
    diagram: "",
    terms: ["epipolar_geometry", "stereo_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 167,
    q: "What is the fundamental matrix F in stereo vision?",
    qChinese: "\u7acb\u4f53\u89c6\u89c9\u4e2d\u7684\u57fa\u7840\u77e9\u9635F\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) A 3x3 rank-2 matrix that encodes the epipolar geometry between two uncalibrated views, satisfying x2^T F x1 = 0 for corresponding points",
      "B) The matrix that converts images to grayscale",
      "C) The camera intrinsic matrix",
      "D) A matrix for image rotation"
    ],
    optionsChinese: [
      "A) \u7f16\u7801\u4e24\u4e2a\u672a\u6807\u5b9a\u89c6\u56fe\u4e4b\u95f4\u5bf9\u6781\u51e0\u4f55\u76843x3\u79e92\u77e9\u9635\uff0c\u5bf9\u5e94\u70b9\u6ee1\u8db3x2^T F x1 = 0",
      "B) \u5c06\u56fe\u50cf\u8f6c\u6362\u4e3a\u7070\u5ea6\u7684\u77e9\u9635",
      "C) \u76f8\u673a\u5185\u53c2\u77e9\u9635",
      "D) \u56fe\u50cf\u65cb\u8f6c\u77e9\u9635"
    ],
    answer: 0,
    explanation: "The fundamental matrix F is a 3x3 matrix of rank 2 that encapsulates the epipolar geometry between two views without requiring camera calibration. For corresponding points x1 and x2 in homogeneous coordinates, x2^T F x1 = 0. The epipolar line in image 2 for point x1 is l2 = F x1. F has 7 degrees of freedom.",
    explanationChinese: "\u57fa\u7840\u77e9\u9635F\u662f\u4e00\u4e2a\u79e9\u4e3a2\u76843x3\u77e9\u9635\uff0c\u5c01\u88c5\u4e86\u4e24\u4e2a\u89c6\u56fe\u4e4b\u95f4\u7684\u5bf9\u6781\u51e0\u4f55\u800c\u4e0d\u9700\u8981\u76f8\u673a\u6807\u5b9a\u3002\u5bf9\u4e8e\u9f50\u6b21\u5750\u6807\u4e2d\u7684\u5bf9\u5e94\u70b9x1\u548cx2\uff0cx2^T F x1 = 0\u3002\u56fe\u50cf2\u4e2d\u70b9x1\u7684\u5bf9\u6781\u7ebf\u4e3al2 = F x1\u3002F\u67097\u4e2a\u81ea\u7531\u5ea6\u3002",
    diagram: "",
    terms: ["epipolar_geometry", "stereo_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 168,
    q: "What is the essential matrix E in stereo geometry?",
    qChinese: "\u7acb\u4f53\u51e0\u4f55\u4e2d\u7684\u672c\u8d28\u77e9\u9635E\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) The most essential component of the camera",
      "B) The identity matrix",
      "C) A 3x3 matrix relating calibrated camera coordinates between two views, encoding only rotation and translation: E = [t]x R",
      "D) A matrix for essential image features"
    ],
    optionsChinese: [
      "A) \u76f8\u673a\u6700\u5173\u952e\u7684\u7ec4\u4ef6",
      "B) \u5355\u4f4d\u77e9\u9635",
      "C) \u5173\u8054\u4e24\u4e2a\u89c6\u56fe\u4e4b\u95f4\u6807\u5b9a\u76f8\u673a\u5750\u6807\u76843x3\u77e9\u9635\uff0c\u4ec5\u7f16\u7801\u65cb\u8f6c\u548c\u5e73\u79fb\uff1aE = [t]x R",
      "D) \u7528\u4e8e\u57fa\u672c\u56fe\u50cf\u7279\u5f81\u7684\u77e9\u9635"
    ],
    answer: 2,
    explanation: "The essential matrix E relates corresponding points in calibrated (normalized) camera coordinates. It decomposes into E = [t]x R, where R is the relative rotation and t is the translation between cameras. E has 5 degrees of freedom and is related to F by E = K2^T F K1. Decomposing E recovers the relative camera pose.",
    explanationChinese: "\u672c\u8d28\u77e9\u9635E\u5173\u8054\u6807\u5b9a\uff08\u5f52\u4e00\u5316\uff09\u76f8\u673a\u5750\u6807\u4e2d\u7684\u5bf9\u5e94\u70b9\u3002\u5b83\u5206\u89e3\u4e3aE = [t]x R\uff0c\u5176\u4e2dR\u662f\u76f8\u5bf9\u65cb\u8f6c\uff0ct\u662f\u76f8\u673a\u95f4\u7684\u5e73\u79fb\u3002E\u67095\u4e2a\u81ea\u7531\u5ea6\uff0c\u4e0eF\u7684\u5173\u7cfb\u4e3aE = K2^T F K1\u3002\u5206\u89e3E\u53ef\u6062\u590d\u76f8\u5bf9\u76f8\u673a\u4f4d\u59ff\u3002",
    diagram: "",
    terms: ["epipolar_geometry", "stereo_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 169,
    q: "What is disparity in stereo vision?",
    qChinese: "\u7acb\u4f53\u89c6\u89c9\u4e2d\u7684\u89c6\u5dee\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) The horizontal pixel offset between corresponding points in the left and right rectified images, inversely proportional to depth",
      "B) The difference in color between two images",
      "C) The angle between two cameras",
      "D) The difference in image resolution"
    ],
    optionsChinese: [
      "A) \u5de6\u53f3\u6821\u6b63\u56fe\u50cf\u4e2d\u5bf9\u5e94\u70b9\u4e4b\u95f4\u7684\u6c34\u5e73\u50cf\u7d20\u504f\u79fb\uff0c\u4e0e\u6df1\u5ea6\u6210\u53cd\u6bd4",
      "B) \u4e24\u5e45\u56fe\u50cf\u4e4b\u95f4\u7684\u989c\u8272\u5dee\u5f02",
      "C) \u4e24\u4e2a\u76f8\u673a\u4e4b\u95f4\u7684\u89d2\u5ea6",
      "D) \u56fe\u50cf\u5206\u8fa8\u7387\u7684\u5dee\u5f02"
    ],
    answer: 0,
    explanation: "Disparity d = x_left - x_right measures the horizontal shift between corresponding pixels in rectified stereo images. Depth Z is inversely proportional to disparity: Z = f*B/d, where f is focal length and B is baseline. Closer objects have larger disparity; farther objects have smaller disparity. A disparity map encodes depth for the entire scene.",
    explanationChinese: "\u89c6\u5deed = x_left - x_right\u8861\u91cf\u6821\u6b63\u7acb\u4f53\u56fe\u50cf\u4e2d\u5bf9\u5e94\u50cf\u7d20\u4e4b\u95f4\u7684\u6c34\u5e73\u79fb\u4f4d\u3002\u6df1\u5ea6Z\u4e0e\u89c6\u5dee\u6210\u53cd\u6bd4\uff1aZ = f*B/d\uff0c\u5176\u4e2df\u662f\u7126\u8ddd\uff0cB\u662f\u57fa\u7ebf\u3002\u8f83\u8fd1\u7684\u7269\u4f53\u6709\u8f83\u5927\u7684\u89c6\u5dee\uff1b\u8f83\u8fdc\u7684\u7269\u4f53\u6709\u8f83\u5c0f\u7684\u89c6\u5dee\u3002\u89c6\u5dee\u56fe\u7f16\u7801\u6574\u4e2a\u573a\u666f\u7684\u6df1\u5ea6\u3002",
    diagram: "",
    terms: ["stereo_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 170,
    q: "What is stereo rectification?",
    qChinese: "\u7acb\u4f53\u6821\u6b63\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) Correcting lens distortion in stereo cameras",
      "B) Warping both stereo images so that corresponding epipolar lines become aligned horizontal scan lines, simplifying stereo matching",
      "C) Making both cameras the same resolution",
      "D) Adjusting the brightness of stereo images to match"
    ],
    optionsChinese: [
      "A) \u6821\u6b63\u7acb\u4f53\u76f8\u673a\u7684\u955c\u5934\u7578\u53d8",
      "B) \u53d8\u6362\u4e24\u5e45\u7acb\u4f53\u56fe\u50cf\u4f7f\u5bf9\u5e94\u7684\u5bf9\u6781\u7ebf\u53d8\u4e3a\u5bf9\u9f50\u7684\u6c34\u5e73\u626b\u63cf\u7ebf\uff0c\u7b80\u5316\u7acb\u4f53\u5339\u914d",
      "C) \u4f7f\u4e24\u4e2a\u76f8\u673a\u5206\u8fa8\u7387\u76f8\u540c",
      "D) \u8c03\u6574\u7acb\u4f53\u56fe\u50cf\u7684\u4eae\u5ea6\u4f7f\u5176\u5339\u914d"
    ],
    answer: 1,
    explanation: "Stereo rectification applies homographies to both images so that epipolar lines become horizontal and corresponding rows are aligned. After rectification, stereo matching reduces to a 1D search along each horizontal scan line. This is achieved by computing the fundamental matrix and applying appropriate projective transformations to both views.",
    explanationChinese: "\u7acb\u4f53\u6821\u6b63\u5bf9\u4e24\u5e45\u56fe\u50cf\u5e94\u7528\u5355\u5e94\u6027\u4f7f\u5bf9\u6781\u7ebf\u53d8\u4e3a\u6c34\u5e73\u4e14\u5bf9\u5e94\u884c\u5bf9\u9f50\u3002\u6821\u6b63\u540e\uff0c\u7acb\u4f53\u5339\u914d\u7b80\u5316\u4e3a\u6cbf\u6bcf\u6761\u6c34\u5e73\u626b\u63cf\u7ebf\u7684\u4e00\u7ef4\u641c\u7d22\u3002\u8fd9\u901a\u8fc7\u8ba1\u7b97\u57fa\u7840\u77e9\u9635\u5e76\u5bf9\u4e24\u4e2a\u89c6\u56fe\u5e94\u7528\u9002\u5f53\u7684\u6295\u5f71\u53d8\u6362\u6765\u5b9e\u73b0\u3002",
    diagram: "",
    terms: ["stereo_vision", "epipolar_geometry"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 171,
    q: "What is the block matching algorithm for stereo correspondence?",
    qChinese: "\u7528\u4e8e\u7acb\u4f53\u5bf9\u5e94\u7684\u5757\u5339\u914d\u7b97\u6cd5\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) Matching entire image blocks between different images",
      "B) Dividing images into blocks and matching by color",
      "C) Comparing small image patches along epipolar lines using similarity measures like SSD or NCC to find corresponding pixels",
      "D) A method for matching building blocks in construction images"
    ],
    optionsChinese: [
      "A) \u5728\u4e0d\u540c\u56fe\u50cf\u4e4b\u95f4\u5339\u914d\u6574\u4e2a\u56fe\u50cf\u5757",
      "B) \u5c06\u56fe\u50cf\u5206\u6210\u5757\u5e76\u6309\u989c\u8272\u5339\u914d",
      "C) \u4f7f\u7528SSD\u6216NCC\u7b49\u76f8\u4f3c\u6027\u5ea6\u91cf\u6cbf\u5bf9\u6781\u7ebf\u6bd4\u8f83\u5c0f\u56fe\u50cf\u5757\u4ee5\u627e\u5230\u5bf9\u5e94\u50cf\u7d20",
      "D) \u5728\u5efa\u7b51\u56fe\u50cf\u4e2d\u5339\u914d\u5efa\u7b51\u5757\u7684\u65b9\u6cd5"
    ],
    answer: 2,
    explanation: "Block matching slides a window from the left image along the corresponding epipolar line in the right image, computing a similarity score (SSD, SAD, or NCC) at each position. The displacement with the best score gives the disparity. Window size involves a tradeoff between noise robustness and boundary accuracy.",
    explanationChinese: "\u5757\u5339\u914d\u5c06\u5de6\u56fe\u50cf\u7684\u7a97\u53e3\u6cbf\u53f3\u56fe\u50cf\u7684\u5bf9\u5e94\u5bf9\u6781\u7ebf\u6ed1\u52a8\uff0c\u5728\u6bcf\u4e2a\u4f4d\u7f6e\u8ba1\u7b97\u76f8\u4f3c\u6027\u5206\u6570\uff08SSD\u3001SAD\u6216NCC\uff09\u3002\u5177\u6709\u6700\u4f73\u5206\u6570\u7684\u4f4d\u79fb\u7ed9\u51fa\u89c6\u5dee\u3002\u7a97\u53e3\u5927\u5c0f\u6d89\u53ca\u566a\u58f0\u9c81\u68d2\u6027\u548c\u8fb9\u754c\u51c6\u786e\u6027\u4e4b\u95f4\u7684\u6743\u8861\u3002",
    diagram: "",
    terms: ["stereo_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 172,
    q: "What is the depth-disparity relationship in a rectified stereo system?",
    qChinese: "\u6821\u6b63\u7acb\u4f53\u7cfb\u7edf\u4e2d\u7684\u6df1\u5ea6-\u89c6\u5dee\u5173\u7cfb\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) Depth Z = f * B / d, where f is focal length, B is baseline, and d is disparity",
      "B) Depth equals disparity times focal length",
      "C) Depth is the sum of disparity and baseline",
      "D) Disparity equals depth divided by image width"
    ],
    optionsChinese: [
      "A) \u6df1\u5ea6Z = f * B / d\uff0c\u5176\u4e2df\u662f\u7126\u8ddd\uff0cB\u662f\u57fa\u7ebf\uff0cd\u662f\u89c6\u5dee",
      "B) \u6df1\u5ea6\u7b49\u4e8e\u89c6\u5dee\u4e58\u4ee5\u7126\u8ddd",
      "C) \u6df1\u5ea6\u662f\u89c6\u5dee\u548c\u57fa\u7ebf\u4e4b\u548c",
      "D) \u89c6\u5dee\u7b49\u4e8e\u6df1\u5ea6\u9664\u4ee5\u56fe\u50cf\u5bbd\u5ea6"
    ],
    answer: 0,
    explanation: "In a rectified stereo system, the depth Z of a point is given by Z = f*B/d, where f is the focal length in pixels, B is the baseline (distance between cameras), and d is the disparity in pixels. This inverse relationship means depth resolution decreases quadratically with distance, making stereo more accurate for nearby objects.",
    explanationChinese: "\u5728\u6821\u6b63\u7684\u7acb\u4f53\u7cfb\u7edf\u4e2d\uff0c\u70b9\u7684\u6df1\u5ea6Z\u7531Z = f*B/d\u7ed9\u51fa\uff0c\u5176\u4e2df\u662f\u4ee5\u50cf\u7d20\u4e3a\u5355\u4f4d\u7684\u7126\u8ddd\uff0cB\u662f\u57fa\u7ebf\uff08\u76f8\u673a\u95f4\u8ddd\u79bb\uff09\uff0cd\u662f\u4ee5\u50cf\u7d20\u4e3a\u5355\u4f4d\u7684\u89c6\u5dee\u3002\u8fd9\u79cd\u53cd\u6bd4\u5173\u7cfb\u610f\u5473\u7740\u6df1\u5ea6\u5206\u8fa8\u7387\u968f\u8ddd\u79bb\u4e8c\u6b21\u4e0b\u964d\uff0c\u4f7f\u7acb\u4f53\u5bf9\u8fd1\u5904\u7269\u4f53\u66f4\u51c6\u786e\u3002",
    diagram: "",
    terms: ["stereo_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 173,
    q: "What is semi-global matching (SGM) in stereo vision?",
    qChinese: "\u7acb\u4f53\u89c6\u89c9\u4e2d\u7684\u534a\u5168\u5c40\u5339\u914d\uff08SGM\uff09\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) Matching only half of the image",
      "B) Matching images taken from a semi-circular camera arrangement",
      "C) A method that uses semi-supervised learning for stereo",
      "D) An efficient stereo method that approximates global optimization by aggregating matching costs along multiple directions with smoothness constraints",
    ],
    optionsChinese: [
      "A) \u4ec5\u5339\u914d\u56fe\u50cf\u7684\u4e00\u534a",
      "B) \u5339\u914d\u4ece\u534a\u5706\u5f62\u76f8\u673a\u6392\u5217\u62cd\u6444\u7684\u56fe\u50cf",
      "C) \u4f7f\u7528\u534a\u76d1\u7763\u5b66\u4e60\u8fdb\u884c\u7acb\u4f53\u7684\u65b9\u6cd5",
      "D) \u901a\u8fc7\u6cbf\u591a\u4e2a\u65b9\u5411\u7528\u5e73\u6ed1\u6027\u7ea6\u675f\u805a\u5408\u5339\u914d\u4ee3\u4ef7\u6765\u8fd1\u4f3c\u5168\u5c40\u4f18\u5316\u7684\u9ad8\u6548\u7acb\u4f53\u65b9\u6cd5",
    ],
    answer: 3,
    explanation: "SGM approximates a 2D MRF optimization by aggregating cost volumes along 8 or 16 directions independently. Each path enforces a smoothness penalty for disparity changes. The aggregated costs are then used for winner-take-all disparity selection. SGM produces smooth disparity maps efficiently and is widely used in automotive and aerial stereo systems.",
    explanationChinese: "SGM\u901a\u8fc7\u6cbf8\u621616\u4e2a\u65b9\u5411\u72ec\u7acb\u805a\u5408\u4ee3\u4ef7\u4f53\u6765\u8fd1\u4f3c\u4e8c\u7ef4MRF\u4f18\u5316\u3002\u6bcf\u6761\u8def\u5f84\u5bf9\u89c6\u5dee\u53d8\u5316\u65bd\u52a0\u5e73\u6ed1\u6027\u60e9\u7f5a\u3002\u805a\u5408\u7684\u4ee3\u4ef7\u7136\u540e\u7528\u4e8e\u8d62\u8005\u901a\u5403\u7684\u89c6\u5dee\u9009\u62e9\u3002SGM\u9ad8\u6548\u5730\u4ea7\u751f\u5e73\u6ed1\u7684\u89c6\u5dee\u56fe\uff0c\u5e7f\u6cdb\u7528\u4e8e\u6c7d\u8f66\u548c\u822a\u7a7a\u7acb\u4f53\u7cfb\u7edf\u3002",
    diagram: "",
    terms: ["stereo_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 174,
    q: "What are the main challenges in stereo matching?",
    qChinese: "\u7acb\u4f53\u5339\u914d\u7684\u4e3b\u8981\u6311\u6218\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) Both cameras always produce identical images",
      "B) Images are always too dark for matching",
      "C) Occlusions, textureless regions, repetitive patterns, and reflective or transparent surfaces that violate matching assumptions",
      "D) Stereo cameras are too expensive"
    ],
    optionsChinese: [
      "A) \u4e24\u4e2a\u76f8\u673a\u603b\u662f\u4ea7\u751f\u76f8\u540c\u7684\u56fe\u50cf",
      "B) \u56fe\u50cf\u603b\u662f\u592a\u6697\u65e0\u6cd5\u5339\u914d",
      "C) \u906e\u6321\u3001\u65e0\u7eb9\u7406\u533a\u57df\u3001\u91cd\u590d\u6a21\u5f0f\u4ee5\u53ca\u53cd\u5c04\u6216\u900f\u660e\u8868\u9762\u8fdd\u53cd\u5339\u914d\u5047\u8bbe",
      "D) \u7acb\u4f53\u76f8\u673a\u592a\u6602\u8d35"
    ],
    answer: 2,
    explanation: "Stereo matching struggles with occlusions (points visible in one image but not the other), textureless regions (ambiguous matching), repetitive patterns (multiple equally good matches), reflective and transparent surfaces (violating Lambertian assumption), and thin structures. These challenges motivate advanced methods including learning-based stereo approaches.",
    explanationChinese: "\u7acb\u4f53\u5339\u914d\u5728\u906e\u6321\uff08\u4e00\u5e45\u56fe\u50cf\u4e2d\u53ef\u89c1\u4f46\u53e6\u4e00\u5e45\u4e2d\u4e0d\u53ef\u89c1\u7684\u70b9\uff09\u3001\u65e0\u7eb9\u7406\u533a\u57df\uff08\u6a21\u7cca\u5339\u914d\uff09\u3001\u91cd\u590d\u6a21\u5f0f\uff08\u591a\u4e2a\u540c\u6837\u597d\u7684\u5339\u914d\uff09\u3001\u53cd\u5c04\u548c\u900f\u660e\u8868\u9762\uff08\u8fdd\u53cd\u6717\u4f2f\u5047\u8bbe\uff09\u4ee5\u53ca\u7ec6\u7ed3\u6784\u65b9\u9762\u5b58\u5728\u56f0\u96be\u3002\u8fd9\u4e9b\u6311\u6218\u63a8\u52a8\u4e86\u5305\u62ec\u57fa\u4e8e\u5b66\u4e60\u7684\u7acb\u4f53\u65b9\u6cd5\u5728\u5185\u7684\u5148\u8fdb\u65b9\u6cd5\u3002",
    diagram: "",
    terms: ["stereo_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 175,
    q: "What are learning-based stereo matching methods?",
    qChinese: "\u57fa\u4e8e\u5b66\u4e60\u7684\u7acb\u4f53\u5339\u914d\u65b9\u6cd5\u662f\u4ec0\u4e48\uff1f",
    options: [
      "A) Methods that require students to learn stereo vision",
      "B) Methods that learn from a single image only",
      "C) Deep neural networks that learn to compute disparity maps from stereo pairs, often using cost volumes and 3D convolutions",
      "D) Unsupervised clustering methods for stereo"
    ],
    optionsChinese: [
      "A) \u9700\u8981\u5b66\u751f\u5b66\u4e60\u7acb\u4f53\u89c6\u89c9\u7684\u65b9\u6cd5",
      "B) \u4ec5\u4ece\u5355\u5e45\u56fe\u50cf\u5b66\u4e60\u7684\u65b9\u6cd5",
      "C) \u5b66\u4e60\u4ece\u7acb\u4f53\u5bf9\u8ba1\u7b97\u89c6\u5dee\u56fe\u7684\u6df1\u5ea6\u795e\u7ecf\u7f51\u7edc\uff0c\u901a\u5e38\u4f7f\u7528\u4ee3\u4ef7\u4f53\u548c\u4e09\u7ef4\u5377\u79ef",
      "D) \u7528\u4e8e\u7acb\u4f53\u7684\u65e0\u76d1\u7763\u805a\u7c7b\u65b9\u6cd5"
    ],
    answer: 2,
    explanation: "Learning-based stereo methods like GC-Net, PSMNet, and RAFT-Stereo use deep networks to extract features, build 4D cost volumes, and apply 3D convolutions for cost aggregation and disparity regression. They achieve state-of-the-art accuracy on benchmarks like KITTI and Middlebury, handling difficult regions better than traditional methods.",
    explanationChinese: "GC-Net\u3001PSMNet\u548cRAFT-Stereo\u7b49\u57fa\u4e8e\u5b66\u4e60\u7684\u7acb\u4f53\u65b9\u6cd5\u4f7f\u7528\u6df1\u5ea6\u7f51\u7edc\u63d0\u53d6\u7279\u5f81\u3001\u6784\u5efa\u56db\u7ef4\u4ee3\u4ef7\u4f53\uff0c\u5e76\u5e94\u7528\u4e09\u7ef4\u5377\u79ef\u8fdb\u884c\u4ee3\u4ef7\u805a\u5408\u548c\u89c6\u5dee\u56de\u5f52\u3002\u5b83\u4eec\u5728KITTI\u548cMiddlebury\u7b49\u57fa\u51c6\u4e0a\u8fbe\u5230\u6700\u5148\u8fdb\u7684\u7cbe\u5ea6\uff0c\u6bd4\u4f20\u7edf\u65b9\u6cd5\u66f4\u597d\u5730\u5904\u7406\u56f0\u96be\u533a\u57df\u3002",
    diagram: "",
    terms: ["stereo_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 176,
    q: "In Faster R-CNN, what is the primary role of the Region Proposal Network (RPN)?",
    qChinese: "在Faster R-CNN中，区域建议网络（RPN）的主要作用是什么？",
    options: [
      "A) To classify each proposed region into object categories",
      "B) To generate candidate bounding boxes (proposals) directly from feature maps",
      "C) To resize input images to a fixed resolution",
      "D) To perform non-maximum suppression on final detections"
    ],
    optionsChinese: [
      "A) 将每个建议区域分类为物体类别",
      "B) 直接从特征图生成候选边界框（建议）",
      "C) 将输入图像调整为固定分辨率",
      "D) 对最终检测结果执行非极大值抑制"
    ],
    answer: 1,
    explanation: "The Region Proposal Network (RPN) slides over the shared convolutional feature map and predicts objectness scores and bounding box coordinates at each spatial location. This replaces the slow selective search method used in earlier R-CNN variants, making proposal generation end-to-end trainable and significantly faster.",
    explanationChinese: "区域建议网络（RPN）在共享卷积特征图上滑动，并在每个空间位置预测物体性得分和边界框坐标。这取代了早期R-CNN变体中使用的缓慢选择性搜索方法，使建议生成可端到端训练且速度显著提高。",
    diagram: "",
    terms: ["object_detection", "convolutional_network", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 177,
    q: "What are anchor boxes in the context of object detection?",
    qChinese: "在目标检测中，锚框是什么？",
    options: [
      "A) Ground-truth bounding boxes manually labeled in the dataset",
      "B) Predefined bounding boxes of various scales and aspect ratios placed at each feature map location",
      "C) The output bounding boxes after non-maximum suppression",
      "D) Bounding boxes generated by a separate segmentation network"
    ],
    optionsChinese: [
      "A) 数据集中手动标注的真实边界框",
      "B) 在每个特征图位置放置的具有不同尺度和宽高比的预定义边界框",
      "C) 非极大值抑制后输出的边界框",
      "D) 由单独的分割网络生成的边界框"
    ],
    answer: 1,
    explanation: "Anchor boxes are predefined reference boxes with various scales and aspect ratios tiled across feature map positions. The network predicts offsets relative to these anchors rather than absolute coordinates, which stabilizes training and helps detect objects of varying shapes and sizes.",
    explanationChinese: "锚框是在特征图位置上铺设的具有各种尺度和宽高比的预定义参考框。网络预测相对于这些锚框的偏移量而非绝对坐标，这稳定了训练过程并有助于检测不同形状和大小的物体。",
    diagram: "",
    terms: ["object_detection", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 178,
    q: "What is the key design principle that makes YOLO (You Only Look Once) faster than two-stage detectors?",
    qChinese: "使YOLO（You Only Look Once）比两阶段检测器更快的关键设计原则是什么？",
    options: [
      "A) It frames detection as a single regression problem, predicting boxes and classes in one forward pass",
      "B) It processes the image at a lower resolution",
      "C) It applies selective search for efficient proposals",
      "D) It uses a deeper backbone network",
    ],
    optionsChinese: [
      "A) 它将检测构建为单一回归问题，在一次前向传播中预测框和类别",
      "B) 它以较低的分辨率处理图像",
      "C) 它使用选择性搜索进行高效建议",
      "D) 它使用更深的骨干网络",
    ],
    answer: 0,
    explanation: "YOLO treats object detection as a single regression problem by dividing the image into a grid and predicting bounding boxes and class probabilities simultaneously in one network pass. This eliminates the separate proposal generation stage, enabling real-time detection speeds.",
    explanationChinese: "YOLO将目标检测视为单一回归问题，通过将图像划分为网格并在一次网络传递中同时预测边界框和类别概率。这消除了单独的建议生成阶段，实现了实时检测速度。",
    diagram: "",
    terms: ["object_detection", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 179,
    q: "How does SSD (Single Shot MultiBox Detector) achieve detection across multiple scales?",
    qChinese: "SSD（单次多框检测器）如何实现多尺度检测？",
    options: [
      "A) By running the detector on image pyramids at different resolutions",
      "B) By stacking multiple independent detection networks",
      "C) By using a single high-resolution feature map with varying anchor sizes only",
      "D) By applying detection heads to feature maps of different spatial resolutions from multiple layers of the network",
    ],
    optionsChinese: [
      "A) 通过在不同分辨率的图像金字塔上运行检测器",
      "B) 通过堆叠多个独立的检测网络",
      "C) 仅使用具有不同锚框大小的单一高分辨率特征图",
      "D) 通过在网络多个层的不同空间分辨率特征图上应用检测头",
    ],
    answer: 3,
    explanation: "SSD attaches detection heads to multiple feature maps at different resolutions within the network. Earlier, higher-resolution layers detect small objects while deeper, lower-resolution layers detect large objects. This multi-scale approach avoids the computational cost of image pyramids while maintaining detection accuracy across object sizes.",
    explanationChinese: "SSD在网络内不同分辨率的多个特征图上附加检测头。较早的高分辨率层检测小物体，而较深的低分辨率层检测大物体。这种多尺度方法避免了图像金字塔的计算成本，同时保持了不同物体大小的检测精度。",
    diagram: "",
    terms: ["object_detection", "feature_extraction", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 180,
    q: "What does Non-Maximum Suppression (NMS) accomplish in an object detection pipeline?",
    qChinese: "非极大值抑制（NMS）在目标检测流程中完成什么功能？",
    options: [
      "A) It normalizes confidence scores across all classes",
      "B) It augments training data with additional bounding boxes",
      "C) It increases the number of proposals for better recall",
      "D) It removes redundant overlapping detections, keeping only the highest-confidence box per object",
    ],
    optionsChinese: [
      "A) 它在所有类别间归一化置信度得分",
      "B) 它用额外的边界框增强训练数据",
      "C) 它增加建议数量以提高召回率",
      "D) 它去除冗余的重叠检测，每个物体只保留置信度最高的框",
    ],
    answer: 3,
    explanation: "Non-Maximum Suppression removes duplicate detections by iteratively selecting the highest-confidence box and suppressing all other boxes that overlap with it above a given IoU threshold. This ensures each detected object is represented by a single bounding box in the final output.",
    explanationChinese: "非极大值抑制通过迭代选择置信度最高的框并抑制所有与其IoU重叠超过给定阈值的其他框来去除重复检测。这确保每个检测到的物体在最终输出中仅由一个边界框表示。",
    diagram: "",
    terms: ["object_detection", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 181,
    q: "What is Intersection over Union (IoU) and why is it important in object detection?",
    qChinese: "交并比（IoU）是什么，为什么它在目标检测中很重要？",
    options: [
      "A) The ratio of true positives to false positives in classification",
      "B) The ratio of feature map dimensions to input image dimensions",
      "C) The ratio of the intersection area to the union area of two bounding boxes, used to evaluate detection accuracy",
      "D) The ratio of training loss to validation loss",
    ],
    optionsChinese: [
      "A) 分类中真正例与假正例的比率",
      "B) 特征图维度与输入图像维度的比率",
      "C) 两个边界框的交集面积与并集面积之比，用于评估检测精度",
      "D) 训练损失与验证损失的比率",
    ],
    answer: 2,
    explanation: "IoU measures the overlap between a predicted bounding box and a ground-truth box by dividing their intersection area by their union area. It ranges from 0 (no overlap) to 1 (perfect overlap) and serves as the standard metric for determining whether a detection is a true positive or false positive.",
    explanationChinese: "IoU通过将预测边界框与真实框的交集面积除以并集面积来衡量它们之间的重叠。其范围从0（无重叠）到1（完全重叠），是确定检测结果为真正例还是假正例的标准指标。",
    diagram: "",
    terms: ["object_detection", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 182,
    q: "What is a Feature Pyramid Network (FPN) and how does it benefit object detection?",
    qChinese: "特征金字塔网络（FPN）是什么，它如何有益于目标检测？",
    options: [
      "A) A network that reduces image resolution for faster processing",
      "B) A top-down architecture with lateral connections that builds multi-scale feature maps with rich semantics at every level",
      "C) A data augmentation technique that creates image pyramids",
      "D) A loss function designed for multi-class detection"
    ],
    optionsChinese: [
      "A) 一种降低图像分辨率以加快处理速度的网络",
      "B) 一种带有横向连接的自顶向下架构，在每个层级构建具有丰富语义的多尺度特征图",
      "C) 一种创建图像金字塔的数据增强技术",
      "D) 一种为多类别检测设计的损失函数"
    ],
    answer: 1,
    explanation: "FPN builds a top-down pathway that upsamples semantically strong low-resolution features and fuses them with high-resolution features via lateral connections. This produces feature maps at all scales that are both semantically rich and spatially precise, greatly improving detection of objects at different sizes.",
    explanationChinese: "FPN构建一个自顶向下的路径，将语义丰富的低分辨率特征上采样并通过横向连接与高分辨率特征融合。这产生了在所有尺度上既语义丰富又空间精确的特征图，极大地改善了不同大小物体的检测。",
    diagram: "",
    terms: ["object_detection", "feature_extraction", "convolutional_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 183,
    q: "How do anchor-free detectors like FCOS differ from anchor-based methods?",
    qChinese: "像FCOS这样的无锚框检测器与基于锚框的方法有何不同？",
    options: [
      "A) They use a fixed set of predefined anchor boxes at each location",
      "B) They require a separate region proposal network",
      "C) They only work on single-scale feature maps",
      "D) They predict distances from each feature map point to the four sides of the bounding box without predefined anchors",
    ],
    optionsChinese: [
      "A) 它们在每个位置使用一组固定的预定义锚框",
      "B) 它们需要一个单独的区域建议网络",
      "C) 它们只能在单尺度特征图上工作",
      "D) 它们预测每个特征图点到边界框四条边的距离，无需预定义锚框",
    ],
    answer: 3,
    explanation: "Anchor-free detectors like FCOS eliminate the need for predefined anchor boxes by directly predicting the distances from each feature map location to the top, bottom, left, and right sides of the bounding box. This simplifies the detection pipeline and removes hyperparameters related to anchor design such as scale and aspect ratio choices.",
    explanationChinese: "像FCOS这样的无锚框检测器通过直接预测每个特征图位置到边界框上、下、左、右四条边的距离来消除对预定义锚框的需求。这简化了检测流程并移除了与锚框设计相关的超参数，如尺度和宽高比选择。",
    diagram: "",
    terms: ["object_detection", "deep_learning", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 184,
    q: "What is the goal of semantic segmentation?",
    qChinese: "语义分割的目标是什么？",
    options: [
      "A) To assign a class label to every pixel in the image without distinguishing individual instances",
      "B) To classify the entire image into a single category",
      "C) To generate a textual description of the scene",
      "D) To draw bounding boxes around each object instance",
    ],
    optionsChinese: [
      "A) 为图像中的每个像素分配类别标签，不区分个体实例",
      "B) 将整个图像分类为单一类别",
      "C) 生成场景的文本描述",
      "D) 在每个物体实例周围绘制边界框",
    ],
    answer: 0,
    explanation: "Semantic segmentation assigns a class label (e.g., road, car, sky) to every pixel in an image. Unlike instance segmentation, it does not differentiate between separate instances of the same class. This provides a dense understanding of the scene at the pixel level.",
    explanationChinese: "语义分割为图像中的每个像素分配类别标签（如道路、汽车、天空）。与实例分割不同，它不区分同一类别的不同实例。这提供了像素级别的密集场景理解。",
    diagram: "",
    terms: ["image_segmentation", "computer_vision", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 185,
    q: "How does instance segmentation differ from semantic segmentation?",
    qChinese: "实例分割与语义分割有何不同？",
    options: [
      "A) Instance segmentation only classifies the background pixels",
      "B) Instance segmentation assigns a unique identity to each individual object instance in addition to its class label",
      "C) Instance segmentation operates on video frames while semantic segmentation operates on images",
      "D) Instance segmentation uses lower resolution outputs"
    ],
    optionsChinese: [
      "A) 实例分割只对背景像素进行分类",
      "B) 实例分割除了类别标签外还为每个单独的物体实例分配唯一标识",
      "C) 实例分割操作视频帧而语义分割操作图像",
      "D) 实例分割使用较低分辨率的输出"
    ],
    answer: 1,
    explanation: "Instance segmentation extends semantic segmentation by not only classifying each pixel but also distinguishing between different instances of the same class. For example, if there are three cars in the image, instance segmentation produces three separate masks, each uniquely identified.",
    explanationChinese: "实例分割扩展了语义分割，不仅对每个像素进行分类，还区分同一类别的不同实例。例如，如果图像中有三辆汽车，实例分割会生成三个单独的掩码，每个都有唯一标识。",
    diagram: "",
    terms: ["image_segmentation", "object_detection", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 186,
    q: "What is panoptic segmentation?",
    qChinese: "全景分割是什么？",
    options: [
      "A) A technique that merges 3D point clouds with 2D images",
      "B) Segmentation that only handles background (stuff) classes",
      "C) A unified segmentation task that combines semantic segmentation for stuff classes and instance segmentation for thing classes",
      "D) A video segmentation method that tracks objects over time"
    ],
    optionsChinese: [
      "A) 一种将三维点云与二维图像融合的技术",
      "B) 仅处理背景（物质）类别的分割",
      "C) 一种统一的分割任务，将物质类别的语义分割与物体类别的实例分割相结合",
      "D) 一种跟踪物体随时间变化的视频分割方法"
    ],
    answer: 2,
    explanation: "Panoptic segmentation provides a complete scene understanding by labeling every pixel. Countable objects (things) like cars and people receive instance-level labels, while amorphous regions (stuff) like sky and road receive semantic-level labels. This unifies both semantic and instance segmentation into a single coherent output.",
    explanationChinese: "全景分割通过标注每个像素提供完整的场景理解。可数物体（things）如汽车和行人获得实例级标签，而无定形区域（stuff）如天空和道路获得语义级标签。这将语义分割和实例分割统一为单一连贯的输出。",
    diagram: "",
    terms: ["image_segmentation", "computer_vision", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 187,
    q: "What is the key architectural feature of U-Net that enables precise localization in segmentation?",
    qChinese: "U-Net中实现精确分割定位的关键架构特征是什么？",
    options: [
      "A) A very deep encoder without any skip connections",
      "B) Skip connections that concatenate encoder features with corresponding decoder features at each resolution level",
      "C) A single fully connected layer at the bottleneck",
      "D) Global average pooling before the output layer"
    ],
    optionsChinese: [
      "A) 一个没有跳跃连接的非常深的编码器",
      "B) 在每个分辨率级别将编码器特征与对应解码器特征拼接的跳跃连接",
      "C) 瓶颈处的单个全连接层",
      "D) 输出层前的全局平均池化"
    ],
    answer: 1,
    explanation: "U-Net features skip connections that directly concatenate feature maps from the contracting (encoder) path to the expansive (decoder) path at each resolution level. This allows the decoder to recover fine-grained spatial details lost during downsampling, enabling precise boundary delineation in segmentation masks.",
    explanationChinese: "U-Net具有跳跃连接，在每个分辨率级别将收缩（编码器）路径的特征图直接拼接到扩展（解码器）路径。这使解码器能够恢复下采样过程中丢失的细粒度空间细节，实现分割掩码中精确的边界描绘。",
    diagram: "",
    terms: ["image_segmentation", "convolutional_network", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 188,
    q: "How does Mask R-CNN extend Faster R-CNN for instance segmentation?",
    qChinese: "Mask R-CNN如何扩展Faster R-CNN以实现实例分割？",
    options: [
      "A) By adding a parallel branch that predicts a binary segmentation mask for each detected region of interest",
      "B) By removing the bounding box regression head",
      "C) By using a completely different backbone network",
      "D) By replacing the classification head with a segmentation head",
    ],
    optionsChinese: [
      "A) 通过添加一个并行分支来为每个检测到的感兴趣区域预测二值分割掩码",
      "B) 通过移除边界框回归头",
      "C) 通过使用完全不同的骨干网络",
      "D) 用分割头替换分类头",
    ],
    answer: 0,
    explanation: "Mask R-CNN adds a small fully convolutional network branch parallel to the existing classification and box regression heads. For each Region of Interest, this branch outputs a pixel-wise binary mask. It also introduces RoIAlign instead of RoIPool to preserve spatial precision needed for accurate mask prediction.",
    explanationChinese: "Mask R-CNN在现有的分类和框回归头旁添加了一个小型全卷积网络分支。对于每个感兴趣区域，该分支输出逐像素的二值掩码。它还引入了RoIAlign代替RoIPool以保持精确掩码预测所需的空间精度。",
    diagram: "",
    terms: ["image_segmentation", "object_detection", "convolutional_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 189,
    q: "What is the purpose of atrous (dilated) convolutions in segmentation models like DeepLab?",
    qChinese: "在DeepLab等分割模型中，空洞（膨胀）卷积的目的是什么？",
    options: [
      "A) To reduce the number of model parameters",
      "B) To perform data augmentation during training",
      "C) To increase the depth of the network",
      "D) To enlarge the receptive field without increasing the number of parameters or reducing spatial resolution",
    ],
    optionsChinese: [
      "A) 减少模型参数数量",
      "B) 在训练过程中进行数据增强",
      "C) 增加网络深度",
      "D) 在不增加参数数量或降低空间分辨率的情况下扩大感受野",
    ],
    answer: 3,
    explanation: "Atrous (dilated) convolutions insert gaps between kernel elements, effectively enlarging the receptive field without adding parameters or requiring pooling that reduces resolution. In DeepLab, Atrous Spatial Pyramid Pooling (ASPP) applies dilated convolutions at multiple rates to capture multi-scale context for accurate dense prediction.",
    explanationChinese: "空洞（膨胀）卷积在卷积核元素之间插入间隔，有效地扩大感受野而不增加参数或需要降低分辨率的池化。在DeepLab中，空洞空间金字塔池化（ASPP）以多种膨胀率应用空洞卷积来捕获多尺度上下文以进行精确的密集预测。",
    diagram: "",
    terms: ["image_segmentation", "convolutional_network", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 190,
    q: "What metric is commonly used to evaluate segmentation performance?",
    qChinese: "通常使用什么指标来评估分割性能？",
    options: [
      "A) Top-1 accuracy",
      "B) Mean Average Precision (mAP)",
      "C) Perplexity",
      "D) Mean Intersection over Union (mIoU)",
    ],
    optionsChinese: [
      "A) Top-1准确率",
      "B) 平均精度均值（mAP）",
      "C) 困惑度",
      "D) 平均交并比（mIoU）",
    ],
    answer: 3,
    explanation: "Mean Intersection over Union (mIoU) computes the IoU between predicted and ground-truth masks for each class, then averages across all classes. It is the standard metric for semantic segmentation because it accounts for both false positives and false negatives at the pixel level.",
    explanationChinese: "平均交并比（mIoU）计算每个类别的预测掩码与真实掩码之间的IoU，然后在所有类别间取平均。它是语义分割的标准指标，因为它在像素级别同时考虑了假正例和假负例。",
    diagram: "",
    terms: ["image_segmentation", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 191,
    q: "What is the role of Conditional Random Fields (CRFs) when used as post-processing in segmentation?",
    qChinese: "条件随机场（CRF）作为分割后处理时的作用是什么？",
    options: [
      "A) To refine coarse segmentation outputs by enforcing spatial consistency and sharpening boundaries based on pixel similarity",
      "B) To learn the backbone feature representations",
      "C) To generate object proposals for detection",
      "D) To reduce the spatial resolution of the prediction",
    ],
    optionsChinese: [
      "A) 通过基于像素相似性强制空间一致性和锐化边界来细化粗糙的分割输出",
      "B) 学习骨干特征表示",
      "C) 为检测生成物体建议",
      "D) 降低预测的空间分辨率",
    ],
    answer: 0,
    explanation: "CRFs model pairwise relationships between pixels, encouraging neighboring pixels with similar color and intensity to share the same label. When applied as post-processing to CNN segmentation outputs, CRFs refine boundaries and reduce labeling noise, producing smoother and more accurate segmentation masks.",
    explanationChinese: "CRF对像素之间的成对关系进行建模，鼓励具有相似颜色和强度的相邻像素共享相同标签。当作为CNN分割输出的后处理应用时，CRF细化边界并减少标注噪声，产生更平滑和更准确的分割掩码。",
    diagram: "",
    terms: ["image_segmentation", "computer_vision", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 192,
    q: "What is Structure from Motion (SfM)?",
    qChinese: "运动恢复结构（SfM）是什么？",
    options: [
      "A) A technique for generating synthetic training data",
      "B) A video compression algorithm",
      "C) A method that estimates 3D structure and camera poses from a collection of 2D images taken from different viewpoints",
      "D) A method for computing optical flow between consecutive frames"
    ],
    optionsChinese: [
      "A) 一种生成合成训练数据的技术",
      "B) 一种视频压缩算法",
      "C) 一种从不同视角拍摄的二维图像集合中估计三维结构和相机位姿的方法",
      "D) 一种计算连续帧之间光流的方法"
    ],
    answer: 2,
    explanation: "Structure from Motion recovers both the 3D geometry of a scene and the camera poses from multiple 2D images by matching features across views, estimating relative camera motions, and triangulating 3D points. It is widely used in 3D reconstruction, autonomous navigation, and augmented reality applications.",
    explanationChinese: "运动恢复结构通过匹配多视图间的特征、估计相对相机运动和三角化三维点，从多张二维图像中恢复场景的三维几何和相机位姿。它广泛应用于三维重建、自主导航和增强现实应用。",
    diagram: "",
    terms: ["computer_vision", "feature_extraction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 193,
    q: "What is a point cloud in 3D vision?",
    qChinese: "在三维视觉中，点云是什么？",
    options: [
      "A) A set of 3D points in space, each with (x, y, z) coordinates and optionally color or normal information",
      "B) A volumetric representation using 3D voxels",
      "C) A 2D grid of depth values",
      "D) A mesh of connected triangular faces"
    ],
    optionsChinese: [
      "A) 空间中的三维点集，每个点具有(x, y, z)坐标以及可选的颜色或法线信息",
      "B) 使用三维体素的体积表示",
      "C) 深度值的二维网格",
      "D) 由连接的三角面组成的网格"
    ],
    answer: 0,
    explanation: "A point cloud is an unordered set of 3D points, each defined by its (x, y, z) spatial coordinates and optionally augmented with attributes like RGB color, intensity, or surface normals. Point clouds are commonly acquired from LiDAR sensors or depth cameras and serve as input for tasks like 3D object detection and scene understanding.",
    explanationChinese: "点云是一组无序的三维点，每个点由其(x, y, z)空间坐标定义，并可选地附带RGB颜色、强度或表面法线等属性。点云通常由LiDAR传感器或深度相机获取，作为三维目标检测和场景理解等任务的输入。",
    diagram: "",
    terms: ["computer_vision", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 194,
    q: "How does PointNet process 3D point clouds directly?",
    qChinese: "PointNet如何直接处理三维点云？",
    options: [
      "A) By applying shared MLPs to each point independently and then aggregating with a symmetric function like max pooling",
      "B) By projecting points to 2D images and using CNNs",
      "C) By constructing a graph and using graph convolutions",
      "D) By converting point clouds to voxel grids first",
    ],
    optionsChinese: [
      "A) 对每个点独立应用共享MLP，然后用最大池化等对称函数进行聚合",
      "B) 将点投影到二维图像并使用CNN",
      "C) 构建图并使用图卷积",
      "D) 先将点云转换为体素网格",
    ],
    answer: 0,
    explanation: "PointNet processes raw point clouds by applying shared multi-layer perceptrons (MLPs) to each point independently, then uses a symmetric aggregation function (max pooling) to produce a global feature that is invariant to point ordering. This elegant design handles the unordered nature of point clouds without voxelization.",
    explanationChinese: "PointNet通过对每个点独立应用共享的多层感知器（MLP），然后使用对称聚合函数（最大池化）产生对点排序不变的全局特征来处理原始点云。这种优雅的设计无需体素化即可处理点云的无序特性。",
    diagram: "",
    terms: ["deep_learning", "computer_vision", "feature_extraction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 195,
    q: "What is monocular depth estimation?",
    qChinese: "单目深度估计是什么？",
    options: [
      "A) Predicting per-pixel depth from a single RGB image using learned representations",
      "B) Estimating depth using two calibrated stereo cameras",
      "C) Computing depth from a LiDAR sensor point cloud",
      "D) Measuring depth using structured light patterns"
    ],
    optionsChinese: [
      "A) 使用学习到的表示从单张RGB图像预测逐像素深度",
      "B) 使用两个标定的立体相机估计深度",
      "C) 从LiDAR传感器点云计算深度",
      "D) 使用结构光模式测量深度"
    ],
    answer: 0,
    explanation: "Monocular depth estimation predicts a dense depth map from a single RGB image. Since depth is inherently ambiguous from one view, deep learning models learn to exploit monocular cues such as texture gradients, relative object sizes, and occlusion patterns to infer scene geometry.",
    explanationChinese: "单目深度估计从单张RGB图像预测密集深度图。由于从单一视角深度本质上是模糊的，深度学习模型学习利用纹理梯度、相对物体大小和遮挡模式等单目线索来推断场景几何。",
    diagram: "",
    terms: ["computer_vision", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 196,
    q: "What does NeRF (Neural Radiance Field) represent and how does it work?",
    qChinese: "NeRF（神经辐射场）表示什么以及它如何工作？",
    options: [
      "A) A mesh-based 3D reconstruction method using traditional multi-view stereo",
      "B) A generative adversarial network for creating 3D models from text",
      "C) A point cloud registration algorithm",
      "D) A neural network that maps 3D coordinates and viewing directions to color and density, enabling novel view synthesis via volume rendering",
    ],
    optionsChinese: [
      "A) 使用传统多视图立体的基于网格的三维重建方法",
      "B) 一种从文本创建三维模型的生成对抗网络",
      "C) 一种点云配准算法",
      "D) 一种将三维坐标和观察方向映射到颜色和密度的神经网络，通过体积渲染实现新视角合成",
    ],
    answer: 3,
    explanation: "NeRF uses a multilayer perceptron that takes a 3D spatial coordinate and a viewing direction as input and outputs the volume density and emitted color at that point. Novel views are synthesized by casting rays through the scene and accumulating color and density via differentiable volume rendering.",
    explanationChinese: "NeRF使用多层感知器，将三维空间坐标和观察方向作为输入，输出该点的体积密度和发射颜色。通过向场景投射光线并通过可微分体积渲染累积颜色和密度来合成新视角。",
    diagram: "",
    terms: ["deep_learning", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 197,
    q: "What is the epipolar constraint in stereo vision?",
    qChinese: "在立体视觉中，对极约束是什么？",
    options: [
      "A) Objects closer to the camera appear larger",
      "B) All possible correspondences for a point in one image lie on a specific line (the epipolar line) in the other image",
      "C) Both cameras must have identical intrinsic parameters",
      "D) Depth is inversely proportional to image brightness"
    ],
    optionsChinese: [
      "A) 距相机更近的物体看起来更大",
      "B) 一幅图像中一个点的所有可能对应点都位于另一幅图像中的特定线（对极线）上",
      "C) 两个相机必须具有相同的内参",
      "D) 深度与图像亮度成反比"
    ],
    answer: 1,
    explanation: "The epipolar constraint states that the correspondence of a point in one image must lie on the epipolar line in the other image, derived from the fundamental matrix. This reduces the stereo matching search from 2D to 1D, greatly improving efficiency and accuracy of depth estimation.",
    explanationChinese: "对极约束表明一幅图像中一个点的对应点必须位于另一幅图像中由基础矩阵导出的对极线上。这将立体匹配搜索从二维减少到一维，极大地提高了深度估计的效率和准确性。",
    diagram: "",
    terms: ["computer_vision", "feature_extraction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 198,
    q: "What is a depth map and how is it typically represented?",
    qChinese: "深度图是什么，通常如何表示？",
    options: [
      "A) A color image where each pixel represents a semantic label",
      "B) A binary mask indicating foreground and background",
      "C) A single-channel image where each pixel value encodes the distance from the camera to the corresponding scene point",
      "D) A histogram of gradient orientations",
    ],
    optionsChinese: [
      "A) 每个像素表示语义标签的彩色图像",
      "B) 指示前景和背景的二值掩码",
      "C) 单通道图像，其中每个像素值编码从相机到对应场景点的距离",
      "D) 梯度方向的直方图",
    ],
    answer: 2,
    explanation: "A depth map is a single-channel image where each pixel stores the distance (or inverse distance) from the camera to the scene surface at that pixel. Depth maps can be acquired from stereo matching, LiDAR, structured light sensors, or predicted by deep neural networks from monocular images.",
    explanationChinese: "深度图是一种单通道图像，其中每个像素存储从相机到该像素处场景表面的距离（或逆距离）。深度图可以通过立体匹配、LiDAR、结构光传感器获取，也可以由深度神经网络从单目图像预测得到。",
    diagram: "",
    terms: ["computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 199,
    q: "What is multi-view stereo (MVS) used for in 3D reconstruction?",
    qChinese: "多视图立体（MVS）在三维重建中的用途是什么？",
    options: [
      "A) Compressing 3D models for efficient storage",
      "B) Generating training data for image classification",
      "C) Producing dense 3D point clouds or depth maps by matching pixels across multiple calibrated images",
      "D) Converting point clouds to mesh representations"
    ],
    optionsChinese: [
      "A) 压缩三维模型以进行高效存储",
      "B) 为图像分类生成训练数据",
      "C) 通过匹配多张标定图像间的像素来生成密集的三维点云或深度图",
      "D) 将点云转换为网格表示"
    ],
    answer: 2,
    explanation: "Multi-view stereo estimates dense 3D geometry by finding pixel correspondences across multiple calibrated images of the same scene. Unlike SfM which produces sparse point clouds, MVS generates dense reconstructions by leveraging photometric consistency across views, enabling detailed 3D surface recovery.",
    explanationChinese: "多视图立体通过在同一场景的多张标定图像间寻找像素对应关系来估计密集的三维几何。与产生稀疏点云的SfM不同，MVS通过利用跨视图的光度一致性生成密集重建，实现详细的三维表面恢复。",
    diagram: "",
    terms: ["computer_vision", "feature_extraction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 200,
    q: "What is optical flow?",
    qChinese: "光流是什么？",
    options: [
      "A) The change in pixel intensity over time",
      "B) A dense 2D vector field describing the apparent motion of each pixel between consecutive video frames",
      "C) The frame rate of a video sequence",
      "D) The direction of camera movement during recording"
    ],
    optionsChinese: [
      "A) 像素强度随时间的变化",
      "B) 描述连续视频帧之间每个像素表观运动的密集二维向量场",
      "C) 视频序列的帧率",
      "D) 录制过程中相机运动的方向"
    ],
    answer: 1,
    explanation: "Optical flow is a dense 2D vector field where each vector represents the displacement of a pixel from one frame to the next, capturing the apparent motion pattern in the image. It is fundamental for video analysis tasks including motion estimation, action recognition, and video object segmentation.",
    explanationChinese: "光流是一个密集的二维向量场，其中每个向量表示一个像素从一帧到下一帧的位移，捕捉图像中的表观运动模式。它是视频分析任务的基础，包括运动估计、动作识别和视频物体分割。",
    diagram: "",
    terms: ["computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 201,
    q: "What assumption does the brightness constancy constraint make in optical flow estimation?",
    qChinese: "光流估计中亮度恒常约束做了什么假设？",
    options: [
      "A) A pixel's intensity does not change as it moves between frames",
      "B) All objects move at the same velocity",
      "C) The scene contains no occluded regions",
      "D) The camera is stationary between frames",
    ],
    optionsChinese: [
      "A) 像素在帧之间移动时其强度不变",
      "B) 所有物体以相同速度运动",
      "C) 场景不包含遮挡区域",
      "D) 相机在帧之间是静止的",
    ],
    answer: 0,
    explanation: "The brightness constancy constraint assumes that the intensity of a pixel remains unchanged as it moves from one frame to the next. This yields the optical flow equation I_x*u + I_y*v + I_t = 0, which relates spatial and temporal image gradients to the flow velocities (u, v).",
    explanationChinese: "亮度恒常约束假设像素从一帧移动到下一帧时其强度保持不变。这产生了光流方程I_x*u + I_y*v + I_t = 0，将空间和时间图像梯度与流速度(u, v)联系起来。",
    diagram: "",
    terms: ["computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 202,
    q: "What is the primary goal of action recognition in video analysis?",
    qChinese: "视频分析中动作识别的主要目标是什么？",
    options: [
      "A) To classify the action or activity being performed in a video clip",
      "B) To estimate the 3D structure of the scene from video",
      "C) To detect and localize all objects in a single video frame",
      "D) To increase the frame rate of the video"
    ],
    optionsChinese: [
      "A) 分类视频片段中正在执行的动作或活动",
      "B) 从视频中估计场景的三维结构",
      "C) 检测和定位单个视频帧中的所有物体",
      "D) 提高视频的帧率"
    ],
    answer: 0,
    explanation: "Action recognition aims to classify the activity taking place in a video clip (e.g., running, swimming, cooking). It requires understanding temporal dynamics across multiple frames, often using architectures like 3D CNNs, two-stream networks, or video transformers to capture both spatial appearance and temporal motion.",
    explanationChinese: "动作识别旨在分类视频片段中正在发生的活动（如跑步、游泳、烹饪）。它需要理解多帧间的时间动态，通常使用三维CNN、双流网络或视频Transformer等架构来捕获空间外观和时间运动。",
    diagram: "",
    terms: ["computer_vision", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 203,
    q: "How does a two-stream network architecture model video data for action recognition?",
    qChinese: "双流网络架构如何对视频数据建模以进行动作识别？",
    options: [
      "A) One stream processes spatial (RGB) frames and another processes temporal (optical flow) inputs, then their predictions are fused",
      "B) One stream processes audio and another processes video",
      "C) Two identical networks are trained on the same data with different learning rates",
      "D) One stream handles low-resolution and another handles high-resolution frames"
    ],
    optionsChinese: [
      "A) 一个流处理空间（RGB）帧，另一个处理时间（光流）输入，然后融合它们的预测",
      "B) 一个流处理音频，另一个处理视频",
      "C) 两个相同的网络以不同学习率在相同数据上训练",
      "D) 一个流处理低分辨率帧，另一个处理高分辨率帧"
    ],
    answer: 0,
    explanation: "The two-stream architecture uses a spatial stream CNN that operates on individual RGB frames to capture appearance, and a temporal stream CNN that operates on stacked optical flow fields to capture motion. Their predictions are fused (e.g., by averaging or concatenation) for the final action classification.",
    explanationChinese: "双流架构使用一个空间流CNN操作单个RGB帧以捕获外观，和一个时间流CNN操作堆叠的光流场以捕获运动。它们的预测通过融合（如平均或拼接）得到最终的动作分类结果。",
    diagram: "",
    terms: ["computer_vision", "convolutional_network", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 204,
    q: "What is the difference between single object tracking (SOT) and multi-object tracking (MOT)?",
    qChinese: "单目标跟踪（SOT）和多目标跟踪（MOT）有什么区别？",
    options: [
      "A) SOT requires 3D information while MOT uses only 2D data",
      "B) SOT uses deep learning while MOT uses only classical methods",
      "C) SOT works on images while MOT works on videos",
      "D) SOT follows one target initialized in the first frame, while MOT simultaneously tracks multiple objects across frames with identity maintenance",
    ],
    optionsChinese: [
      "A) SOT需要三维信息而MOT仅使用二维数据",
      "B) SOT使用深度学习而MOT仅使用经典方法",
      "C) SOT处理图像而MOT处理视频",
      "D) SOT跟踪在第一帧中初始化的一个目标，而MOT在帧间同时跟踪多个物体并维持身份",
    ],
    answer: 3,
    explanation: "Single object tracking follows one user-specified target throughout a video sequence, adapting to appearance changes. Multi-object tracking simultaneously localizes and maintains unique identities for multiple objects across frames, typically involving a detection step followed by a data association step to link detections over time.",
    explanationChinese: "单目标跟踪在整个视频序列中跟踪一个用户指定的目标，适应外观变化。多目标跟踪在帧间同时定位和维持多个物体的唯一身份，通常涉及检测步骤和数据关联步骤以在时间上链接检测结果。",
    diagram: "",
    terms: ["computer_vision", "object_detection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 205,
    q: "What is temporal action detection in video understanding?",
    qChinese: "在视频理解中，时间动作检测是什么？",
    options: [
      "A) Detecting which frames contain motion blur",
      "B) Identifying the start time, end time, and category of each action instance in an untrimmed video",
      "C) Classifying a pre-trimmed video clip into a single action category",
      "D) Counting the total number of frames in a video",
    ],
    optionsChinese: [
      "A) 检测哪些帧包含运动模糊",
      "B) 在未剪辑的视频中识别每个动作实例的开始时间、结束时间和类别",
      "C) 将预剪辑的视频片段分类为单一动作类别",
      "D) 计算视频中的总帧数",
    ],
    answer: 1,
    explanation: "Temporal action detection localizes action instances in untrimmed videos by predicting their temporal boundaries (start and end times) along with their action categories. Unlike action recognition which classifies trimmed clips, this task must handle videos containing multiple actions, background segments, and varying durations.",
    explanationChinese: "时间动作检测通过预测动作实例的时间边界（开始和结束时间）及其动作类别来在未剪辑的视频中定位动作实例。与分类剪辑片段的动作识别不同，该任务必须处理包含多个动作、背景片段和不同持续时间的视频。",
    diagram: "",
    terms: ["computer_vision", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 206,
    q: "What role does 3D convolution play in video understanding models like C3D and I3D?",
    qChinese: "三维卷积在C3D和I3D等视频理解模型中扮演什么角色？",
    options: [
      "A) It compresses video files for efficient storage",
      "B) It applies convolution filters across both spatial and temporal dimensions simultaneously to capture spatiotemporal features",
      "C) It converts 2D images into 3D point clouds",
      "D) It only operates on the temporal axis ignoring spatial information"
    ],
    optionsChinese: [
      "A) 它压缩视频文件以进行高效存储",
      "B) 它同时在空间和时间维度上应用卷积滤波器以捕获时空特征",
      "C) 它将二维图像转换为三维点云",
      "D) 它仅操作时间轴忽略空间信息"
    ],
    answer: 1,
    explanation: "3D convolutions extend standard 2D convolutions by adding a temporal dimension to the kernel, allowing the network to learn spatiotemporal features directly from video volumes. Models like C3D and I3D use 3D convolutions to jointly capture appearance and motion patterns without requiring separate optical flow computation.",
    explanationChinese: "三维卷积通过在核中添加时间维度扩展标准二维卷积，使网络能够直接从视频体中学习时空特征。C3D和I3D等模型使用三维卷积联合捕获外观和运动模式，无需单独的光流计算。",
    diagram: "",
    terms: ["convolutional_network", "deep_learning", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 207,
    q: "How does the tracking-by-detection paradigm work in multi-object tracking?",
    qChinese: "在多目标跟踪中，检测跟踪范式是如何工作的？",
    options: [
      "A) Objects are tracked using only motion prediction without any detection",
      "B) An object detector first identifies objects in each frame, then a data association algorithm links detections across frames to form tracks",
      "C) A single network performs detection and tracking simultaneously in one pass",
      "D) Only keyframes are processed, and intermediate positions are interpolated"
    ],
    optionsChinese: [
      "A) 仅使用运动预测跟踪物体而不进行任何检测",
      "B) 物体检测器首先在每帧中识别物体，然后数据关联算法将跨帧的检测结果链接形成轨迹",
      "C) 单个网络在一次传递中同时执行检测和跟踪",
      "D) 仅处理关键帧，中间位置通过插值获得"
    ],
    answer: 1,
    explanation: "In the tracking-by-detection paradigm, a pretrained detector identifies objects in each frame independently. A separate data association step then matches detections across frames using motion models (e.g., Kalman filter), appearance features, or both to assign consistent identities and form trajectories over time.",
    explanationChinese: "在检测跟踪范式中，预训练检测器在每帧中独立识别物体。然后单独的数据关联步骤使用运动模型（如卡尔曼滤波器）、外观特征或两者结合来匹配跨帧的检测结果，分配一致的身份并形成随时间变化的轨迹。",
    diagram: "",
    terms: ["object_detection", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 208,
    q: "What is the generator's role in a Generative Adversarial Network (GAN)?",
    qChinese: "在生成对抗网络（GAN）中，生成器的作用是什么？",
    options: [
      "A) To classify real images into categories",
      "B) To learn to produce realistic synthetic images from random noise that can fool the discriminator",
      "C) To compress images for efficient storage",
      "D) To detect whether an input image is real or fake",
    ],
    optionsChinese: [
      "A) 将真实图像分类为不同类别",
      "B) 学习从随机噪声生成能够欺骗判别器的逼真合成图像",
      "C) 压缩图像以进行高效存储",
      "D) 检测输入图像是真实的还是伪造的",
    ],
    answer: 1,
    explanation: "The generator in a GAN takes random noise as input and transforms it through learned parameters into synthetic images. It is trained adversarially against a discriminator, aiming to produce outputs so realistic that the discriminator cannot distinguish them from real images in the training distribution.",
    explanationChinese: "GAN中的生成器将随机噪声作为输入，并通过学习到的参数将其转换为合成图像。它与判别器进行对抗训练，目的是产生逼真的输出，使判别器无法将其与训练分布中的真实图像区分开来。",
    diagram: "",
    terms: ["deep_learning", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 209,
    q: "What problem does mode collapse refer to in GAN training?",
    qChinese: "在GAN训练中，模式崩塌指的是什么问题？",
    options: [
      "A) The discriminator becomes too powerful and the generator cannot learn",
      "B) The training loss diverges to infinity",
      "C) The generator produces only a limited variety of outputs, failing to capture the full diversity of the training distribution",
      "D) The generated images are always blurry"
    ],
    optionsChinese: [
      "A) 判别器变得过于强大，生成器无法学习",
      "B) 训练损失发散到无穷大",
      "C) 生成器仅产生有限种类的输出，未能捕获训练分布的全部多样性",
      "D) 生成的图像总是模糊的"
    ],
    answer: 2,
    explanation: "Mode collapse occurs when the generator learns to produce only a few types of outputs that successfully fool the discriminator, rather than covering the full diversity of the real data distribution. Various techniques like Wasserstein loss, minibatch discrimination, and progressive training help mitigate this issue.",
    explanationChinese: "模式崩塌发生在生成器只学会产生少数几种能成功欺骗判别器的输出，而不是覆盖真实数据分布的全部多样性。Wasserstein损失、小批量判别和渐进式训练等多种技术有助于缓解这个问题。",
    diagram: "",
    terms: ["deep_learning", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 210,
    q: "What is neural style transfer?",
    qChinese: "神经风格迁移是什么？",
    options: [
      "A) Training a network to remove noise from images",
      "B) Combining the content of one image with the artistic style of another by optimizing feature representations from a CNN",
      "C) Transferring weights from a pretrained model to a new task",
      "D) Converting color images to grayscale"
    ],
    optionsChinese: [
      "A) 训练网络从图像中去除噪声",
      "B) 通过优化CNN的特征表示，将一幅图像的内容与另一幅图像的艺术风格相结合",
      "C) 将预训练模型的权重迁移到新任务",
      "D) 将彩色图像转换为灰度图"
    ],
    answer: 1,
    explanation: "Neural style transfer generates a new image that preserves the content structure of one image while adopting the artistic style of another. Content is captured by higher-layer CNN features (representing shapes and objects), while style is captured by Gram matrices of feature maps (representing textures and patterns).",
    explanationChinese: "神经风格迁移生成一幅新图像，保留一幅图像的内容结构同时采用另一幅图像的艺术风格。内容由CNN高层特征（表示形状和物体）捕获，而风格由特征图的Gram矩阵（表示纹理和模式）捕获。",
    diagram: "",
    terms: ["deep_learning", "convolutional_network", "transfer_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 211,
    q: "What is the goal of single image super-resolution (SISR)?",
    qChinese: "单图像超分辨率（SISR）的目标是什么？",
    options: [
      "A) To reconstruct a high-resolution image from a single low-resolution input",
      "B) To compress images to smaller file sizes",
      "C) To segment objects at multiple resolution levels",
      "D) To merge multiple low-resolution images into one"
    ],
    optionsChinese: [
      "A) 从单个低分辨率输入重建高分辨率图像",
      "B) 将图像压缩为更小的文件",
      "C) 在多个分辨率级别上分割物体",
      "D) 将多个低分辨率图像合并为一个"
    ],
    answer: 0,
    explanation: "Single image super-resolution aims to recover fine details and increase the spatial resolution of a low-resolution image. Deep learning approaches like SRCNN, ESRGAN, and SwinIR learn mappings from low-resolution to high-resolution patches, often using perceptual and adversarial losses to produce visually sharp results.",
    explanationChinese: "单图像超分辨率旨在恢复细节并增加低分辨率图像的空间分辨率。SRCNN、ESRGAN和SwinIR等深度学习方法学习从低分辨率到高分辨率补丁的映射，通常使用感知损失和对抗损失来产生视觉上清晰的结果。",
    diagram: "",
    terms: ["deep_learning", "convolutional_network", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 212,
    q: "What is the purpose of a perceptual loss function in image generation tasks?",
    qChinese: "感知损失函数在图像生成任务中的目的是什么？",
    options: [
      "A) To minimize the pixel-wise mean squared error between output and target",
      "B) To classify generated images into real or fake categories",
      "C) To enforce sparsity in the generated image",
      "D) To compare high-level feature representations extracted by a pretrained network, producing outputs that are perceptually similar to the target"
    ],
    optionsChinese: [
      "A) 最小化输出和目标之间的逐像素均方误差",
      "B) 将生成的图像分类为真实或伪造类别",
      "C) 在生成的图像中强制稀疏性",
      "D) 比较预训练网络提取的高层特征表示，产生与目标感知相似的输出"
    ],
    answer: 3,
    explanation: "Perceptual loss computes the difference between feature maps of the generated and target images extracted from a pretrained network like VGG. Unlike pixel-wise losses that produce blurry results, perceptual loss encourages the output to match high-level semantic features, yielding sharper and more visually pleasing images.",
    explanationChinese: "感知损失计算由VGG等预训练网络提取的生成图像和目标图像特征图之间的差异。与产生模糊结果的逐像素损失不同，感知损失鼓励输出匹配高层语义特征，产生更清晰和视觉上更令人满意的图像。",
    diagram: "",
    terms: ["deep_learning", "feature_extraction", "transfer_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 213,
    q: "How does conditional GAN (cGAN) differ from a standard GAN?",
    qChinese: "条件GAN（cGAN）与标准GAN有何不同？",
    options: [
      "A) cGAN uses a larger discriminator network",
      "B) cGAN conditions both the generator and discriminator on additional information such as class labels or input images",
      "C) cGAN does not use a discriminator at all",
      "D) cGAN only generates grayscale images"
    ],
    optionsChinese: [
      "A) cGAN使用更大的判别器网络",
      "B) cGAN将生成器和判别器都以额外信息（如类别标签或输入图像）为条件",
      "C) cGAN完全不使用判别器",
      "D) cGAN只生成灰度图像"
    ],
    answer: 1,
    explanation: "Conditional GANs extend the standard GAN framework by providing additional conditioning information (such as class labels, text descriptions, or paired images) to both the generator and discriminator. This allows controlled generation, such as image-to-image translation (e.g., pix2pix) or class-specific image synthesis.",
    explanationChinese: "条件GAN通过向生成器和判别器提供额外的条件信息（如类别标签、文本描述或配对图像）来扩展标准GAN框架。这允许受控生成，如图像到图像转换（如pix2pix）或特定类别的图像合成。",
    diagram: "",
    terms: ["deep_learning", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 214,
    q: "How does the Vision Transformer (ViT) process an input image?",
    qChinese: "视觉Transformer（ViT）如何处理输入图像？",
    options: [
      "A) By applying convolutional filters at multiple scales",
      "B) By converting the image to a frequency domain representation first",
      "C) By splitting the image into fixed-size patches, linearly embedding each patch, and processing the sequence of patch embeddings with a standard Transformer encoder",
      "D) By using a recurrent neural network on image rows"
    ],
    optionsChinese: [
      "A) 通过在多个尺度上应用卷积滤波器",
      "B) 先将图像转换为频域表示",
      "C) 将图像分割为固定大小的补丁，对每个补丁进行线性嵌入，然后用标准Transformer编码器处理补丁嵌入序列",
      "D) 在图像行上使用循环神经网络"
    ],
    answer: 2,
    explanation: "ViT divides the input image into non-overlapping patches (e.g., 16x16), flattens each patch, and projects it into an embedding space via a linear layer. A learnable [CLS] token and positional embeddings are added, and the full sequence is processed by a standard Transformer encoder with self-attention for classification.",
    explanationChinese: "ViT将输入图像分割为不重叠的补丁（如16x16），将每个补丁展平，并通过线性层投影到嵌入空间。添加可学习的[CLS]标记和位置嵌入，完整序列由带有自注意力的标准Transformer编码器处理以进行分类。",
    diagram: "",
    terms: ["deep_learning", "computer_vision", "feature_extraction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 215,
    q: "What is DETR and how does it approach object detection differently from traditional methods?",
    qChinese: "DETR是什么，它如何以不同于传统方法的方式进行目标检测？",
    options: [
      "A) DETR uses a Transformer encoder-decoder with learned object queries and bipartite matching to directly predict a set of detections without anchors or NMS",
      "B) DETR is a two-stage detector that uses selective search",
      "C) DETR is a purely convolutional single-shot detector",
      "D) DETR relies on image pyramids for multi-scale detection"
    ],
    optionsChinese: [
      "A) DETR使用带有学习物体查询和二分匹配的Transformer编码器-解码器，直接预测一组检测结果，无需锚框或NMS",
      "B) DETR是一个使用选择性搜索的两阶段检测器",
      "C) DETR是一个纯卷积的单次检测器",
      "D) DETR依赖图像金字塔进行多尺度检测"
    ],
    answer: 0,
    explanation: "DETR (Detection Transformer) reformulates detection as a set prediction problem. It uses a CNN backbone followed by a Transformer encoder-decoder where learned object queries attend to the image features. A bipartite matching loss directly assigns predictions to ground truths, eliminating hand-designed components like anchor boxes and NMS.",
    explanationChinese: "DETR（检测Transformer）将检测重新构建为集合预测问题。它使用CNN骨干网络后接Transformer编码器-解码器，其中学习的物体查询关注图像特征。二分匹配损失直接将预测分配给真实标注，消除了锚框和NMS等手工设计的组件。",
    diagram: "",
    terms: ["object_detection", "deep_learning", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 216,
    q: "What is CLIP and what makes it powerful for vision-language tasks?",
    qChinese: "CLIP是什么，是什么使它在视觉-语言任务中如此强大？",
    options: [
      "A) A model trained only on ImageNet for image classification",
      "B) A generative model that creates images from text prompts",
      "C) A video understanding model that processes temporal information",
      "D) A contrastive learning model trained on large-scale image-text pairs that learns aligned visual and textual representations, enabling zero-shot classification"
    ],
    optionsChinese: [
      "A) 仅在ImageNet上训练的图像分类模型",
      "B) 一种从文本提示生成图像的生成模型",
      "C) 一种处理时间信息的视频理解模型",
      "D) 一种在大规模图像-文本对上训练的对比学习模型，学习对齐的视觉和文本表示，实现零样本分类"
    ],
    answer: 3,
    explanation: "CLIP (Contrastive Language-Image Pretraining) trains an image encoder and a text encoder jointly using contrastive learning on 400 million image-text pairs from the internet. By aligning visual and textual representations in a shared embedding space, CLIP can perform zero-shot image classification by comparing image embeddings with text embeddings of class descriptions.",
    explanationChinese: "CLIP（对比语言-图像预训练）使用互联网上4亿个图像-文本对通过对比学习联合训练图像编码器和文本编码器。通过在共享嵌入空间中对齐视觉和文本表示，CLIP可以通过比较图像嵌入与类别描述的文本嵌入来执行零样本图像分类。",
    diagram: "",
    terms: ["deep_learning", "transfer_learning", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 217,
    q: "What advantage does self-attention in Vision Transformers provide over standard convolutions?",
    qChinese: "视觉Transformer中的自注意力相比标准卷积提供了什么优势？",
    options: [
      "A) Self-attention always uses fewer parameters than convolutions",
      "B) Self-attention eliminates the need for any positional information",
      "C) Self-attention captures global dependencies between all patches in a single layer, whereas convolutions have limited local receptive fields",
      "D) Self-attention is always faster than convolution for any image size"
    ],
    optionsChinese: [
      "A) 自注意力总是使用比卷积更少的参数",
      "B) 自注意力消除了对任何位置信息的需求",
      "C) 自注意力在单一层中捕获所有补丁之间的全局依赖关系，而卷积具有有限的局部感受野",
      "D) 自注意力对任何图像大小都比卷积更快"
    ],
    answer: 2,
    explanation: "Self-attention computes pairwise interactions between all patches in a single layer, giving the model a global receptive field from the first layer onward. Standard convolutions operate within local neighborhoods and require many stacked layers to achieve a large receptive field. This global modeling ability helps ViTs capture long-range spatial relationships effectively.",
    explanationChinese: "自注意力在单一层中计算所有补丁之间的成对交互，使模型从第一层开始就具有全局感受野。标准卷积在局部邻域内操作，需要许多堆叠层才能实现大的感受野。这种全局建模能力帮助ViT有效捕获长距离空间关系。",
    diagram: "",
    terms: ["deep_learning", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 218,
    q: "How does the Swin Transformer improve upon the original ViT for dense prediction tasks?",
    qChinese: "Swin Transformer如何改进原始ViT以用于密集预测任务？",
    options: [
      "A) By processing all patches in a single global attention operation",
      "B) By using larger patch sizes for higher resolution",
      "C) By replacing self-attention with depthwise separable convolutions",
      "D) By computing self-attention within shifted local windows and using a hierarchical architecture that produces multi-scale feature maps",
    ],
    optionsChinese: [
      "A) 通过在单一全局注意力操作中处理所有补丁",
      "B) 通过使用更大的补丁大小以获得更高分辨率",
      "C) 用深度可分离卷积替换自注意力",
      "D) 通过在移位的局部窗口内计算自注意力并使用产生多尺度特征图的分层架构",
    ],
    answer: 3,
    explanation: "Swin Transformer uses shifted window self-attention that limits computation to local windows while enabling cross-window connections via shifting. Its hierarchical design with patch merging layers produces feature maps at multiple scales, making it suitable as a general-purpose backbone for segmentation and detection tasks.",
    explanationChinese: "Swin Transformer使用移位窗口自注意力，将计算限制在局部窗口内，同时通过移位实现跨窗口连接。其带有补丁合并层的分层设计在多个尺度上产生特征图，使其适合作为分割和检测任务的通用骨干网络。",
    diagram: "",
    terms: ["deep_learning", "computer_vision", "feature_extraction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 219,
    q: "What is zero-shot image classification as enabled by CLIP?",
    qChinese: "CLIP实现的零样本图像分类是什么？",
    options: [
      "A) Classifying images after training on every possible class",
      "B) Classifying images into categories never seen during training by comparing image embeddings with text embeddings of class descriptions",
      "C) Classifying images using only one training example per class",
      "D) Classifying images without using any neural network"
    ],
    optionsChinese: [
      "A) 在每个可能的类别上训练后对图像进行分类",
      "B) 通过比较图像嵌入与类别描述的文本嵌入，将图像分类为训练期间从未见过的类别",
      "C) 每个类别仅使用一个训练样本对图像进行分类",
      "D) 不使用任何神经网络对图像进行分类"
    ],
    answer: 1,
    explanation: "Zero-shot classification with CLIP works by encoding an image and a set of text prompts (e.g., 'a photo of a cat') into the same embedding space. The image is assigned to the class whose text embedding has the highest cosine similarity with the image embedding, without requiring any task-specific training examples.",
    explanationChinese: "CLIP的零样本分类通过将图像和一组文本提示（如'一张猫的照片'）编码到相同的嵌入空间来工作。图像被分配给其文本嵌入与图像嵌入具有最高余弦相似度的类别，无需任何特定任务的训练样本。",
    diagram: "",
    terms: ["deep_learning", "transfer_learning", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 220,
    q: "What is the typical pipeline for face detection in modern systems?",
    qChinese: "现代系统中人脸检测的典型流程是什么？",
    options: [
      "A) Manual cropping of face regions followed by template matching",
      "B) A deep learning-based detector (e.g., MTCNN, RetinaFace) that predicts face bounding boxes and facial landmarks simultaneously",
      "C) Using Viola-Jones only, which remains the state of the art",
      "D) Color-based skin detection followed by edge detection"
    ],
    optionsChinese: [
      "A) 手动裁剪人脸区域然后进行模板匹配",
      "B) 基于深度学习的检测器（如MTCNN、RetinaFace）同时预测人脸边界框和面部关键点",
      "C) 仅使用Viola-Jones，它仍然是最先进的",
      "D) 基于颜色的皮肤检测后进行边缘检测"
    ],
    answer: 1,
    explanation: "Modern face detection uses deep learning-based detectors like MTCNN or RetinaFace that jointly predict face bounding boxes, confidence scores, and facial landmark locations. These models handle variations in pose, scale, and occlusion far better than classical methods like Viola-Jones.",
    explanationChinese: "现代人脸检测使用基于深度学习的检测器如MTCNN或RetinaFace，同时预测人脸边界框、置信度分数和面部关键点位置。这些模型比Viola-Jones等经典方法更好地处理姿态、尺度和遮挡的变化。",
    diagram: "",
    terms: ["object_detection", "deep_learning", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 221,
    q: "What is the difference between face verification and face identification?",
    qChinese: "人脸验证和人脸识别有什么区别？",
    options: [
      "A) Face verification detects faces while face identification classifies emotions",
      "B) Both are the same task with different names",
      "C) Face verification is a one-to-one comparison confirming if two faces belong to the same person, while face identification is a one-to-many search finding a person's identity from a gallery",
      "D) Face verification works on video while face identification works on images",
    ],
    optionsChinese: [
      "A) 人脸验证检测人脸而人脸识别分类表情",
      "B) 两者是具有不同名称的相同任务",
      "C) 人脸验证是一对一比较确认两张人脸是否属于同一人，而人脸识别是从图库中一对多搜索找到一个人的身份",
      "D) 人脸验证处理视频而人脸识别处理图像",
    ],
    answer: 2,
    explanation: "Face verification (1:1) determines whether two face images belong to the same person, commonly used in phone unlock or passport control. Face identification (1:N) searches a database to find which enrolled identity matches a query face, used in surveillance or access control systems.",
    explanationChinese: "人脸验证（1:1）确定两张人脸图像是否属于同一人，常用于手机解锁或护照检查。人脸识别（1:N）搜索数据库找到与查询人脸匹配的已注册身份，用于监控或门禁系统。",
    diagram: "",
    terms: ["computer_vision", "deep_learning", "feature_extraction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 222,
    q: "What is the role of triplet loss in face recognition training?",
    qChinese: "三元组损失在人脸识别训练中的作用是什么？",
    options: [
      "A) To learn an embedding space where faces of the same person are closer together and faces of different people are farther apart",
      "B) To generate new face images for data augmentation",
      "C) To classify faces into predefined identity categories",
      "D) To detect facial landmarks accurately"
    ],
    optionsChinese: [
      "A) 学习一个嵌入空间，使同一人的人脸更近，不同人的人脸更远",
      "B) 生成新的人脸图像用于数据增强",
      "C) 将人脸分类为预定义的身份类别",
      "D) 准确检测面部关键点"
    ],
    answer: 0,
    explanation: "Triplet loss operates on triplets of anchor, positive (same identity), and negative (different identity) images. It pushes the anchor-positive distance below the anchor-negative distance by a margin in the embedding space, producing discriminative face embeddings suitable for open-set recognition where new identities may appear at test time.",
    explanationChinese: "三元组损失在锚点、正样本（相同身份）和负样本（不同身份）图像的三元组上操作。它在嵌入空间中将锚点-正样本距离推到锚点-负样本距离之下一个边距，产生适用于开放集识别的判别性人脸嵌入，其中新身份可能在测试时出现。",
    diagram: "",
    terms: ["deep_learning", "feature_extraction", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 223,
    q: "What is ArcFace and why is it effective for face recognition?",
    qChinese: "ArcFace是什么，为什么它对人脸识别有效？",
    options: [
      "A) A face detection algorithm based on Haar cascades",
      "B) A loss function that adds an angular margin penalty in the cosine space of normalized features and weights, enhancing intra-class compactness and inter-class separability",
      "C) A data augmentation strategy for face training data",
      "D) A face alignment method that normalizes face poses",
    ],
    optionsChinese: [
      "A) 基于Haar级联的人脸检测算法",
      "B) 一种在归一化特征和权重的余弦空间中添加角度边距惩罚的损失函数，增强类内紧凑性和类间可分性",
      "C) 用于人脸训练数据的数据增强策略",
      "D) 一种归一化人脸姿态的人脸对齐方法",
    ],
    answer: 1,
    explanation: "ArcFace (Additive Angular Margin Loss) normalizes both features and classifier weights onto a hypersphere and adds an angular margin to the target logit. This geometrically enforces a larger decision boundary between classes in angular space, resulting in highly discriminative face embeddings that achieve state-of-the-art verification accuracy.",
    explanationChinese: "ArcFace（加性角度边距损失）将特征和分类器权重都归一化到超球面上，并在目标logit上添加角度边距。这在角度空间中几何地强制了类之间更大的决策边界，产生高度判别性的人脸嵌入，达到最先进的验证准确率。",
    diagram: "",
    terms: ["deep_learning", "feature_extraction", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 224,
    q: "What are common face anti-spoofing techniques used to prevent presentation attacks?",
    qChinese: "用于防止呈现攻击的常见人脸反欺骗技术有哪些？",
    options: [
      "A) Increasing the resolution of the camera sensor",
      "B) Analyzing texture patterns, depth cues, liveness signals (e.g., blinking, head movement), or using infrared/depth sensors to distinguish real faces from photos, videos, or masks",
      "C) Applying stronger encryption to face templates",
      "D) Using only frontal face images for recognition"
    ],
    optionsChinese: [
      "A) 提高相机传感器的分辨率",
      "B) 分析纹理模式、深度线索、活体信号（如眨眼、头部运动），或使用红外/深度传感器来区分真实人脸与照片、视频或面具",
      "C) 对人脸模板应用更强的加密",
      "D) 仅使用正面人脸图像进行识别"
    ],
    answer: 1,
    explanation: "Face anti-spoofing methods detect presentation attacks (print, replay, 3D mask) using multiple cues. Software-based methods analyze texture (e.g., moire patterns), temporal dynamics (blink, micro-movements), or depth from structured light. Hardware-based approaches use infrared or depth cameras to verify the 3D nature of a live face.",
    explanationChinese: "人脸反欺骗方法使用多种线索检测呈现攻击（打印、重放、3D面具）。基于软件的方法分析纹理（如摩尔纹）、时间动态（眨眼、微运动）或结构光的深度。基于硬件的方法使用红外或深度相机验证活体人脸的三维特性。",
    diagram: "",
    terms: ["computer_vision", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 225,
    q: "What is face alignment and why is it important as a preprocessing step in face recognition?",
    qChinese: "人脸对齐是什么，为什么它作为人脸识别的预处理步骤很重要？",
    options: [
      "A) It increases image resolution for better quality",
      "B) It transforms detected faces to a canonical pose using facial landmarks, reducing pose and scale variations to improve recognition accuracy",
      "C) It removes background noise from face images",
      "D) It converts face images to grayscale for faster processing"
    ],
    optionsChinese: [
      "A) 它提高图像分辨率以获得更好的质量",
      "B) 它使用面部关键点将检测到的人脸转换为标准姿态，减少姿态和尺度变化以提高识别准确率",
      "C) 它从人脸图像中去除背景噪声",
      "D) 它将人脸图像转换为灰度以加快处理速度"
    ],
    answer: 1,
    explanation: "Face alignment uses detected facial landmarks (eyes, nose, mouth corners) to apply geometric transformations (similarity or affine) that normalize the face to a standard template. This reduces intra-class variation caused by pose, in-plane rotation, and scale differences, significantly improving the performance of downstream recognition models.",
    explanationChinese: "人脸对齐使用检测到的面部关键点（眼睛、鼻子、嘴角）应用几何变换（相似或仿射）将人脸归一化到标准模板。这减少了由姿态、平面内旋转和尺度差异引起的类内变化，显著提高了下游识别模型的性能。",
    diagram: "",
    terms: ["computer_vision", "feature_extraction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 226,
    q: "What is the primary challenge of applying deep learning to medical image segmentation?",
    qChinese: "将深度学习应用于医学图像分割的主要挑战是什么？",
    options: [
      "A) Medical images are always too small for neural networks",
      "B) Medical images are always in grayscale and cannot be processed by CNNs",
      "C) Deep learning models are not applicable to volumetric data",
      "D) Limited annotated data due to the need for expert annotations, combined with high accuracy requirements and class imbalance in pathological regions",
    ],
    optionsChinese: [
      "A) 医学图像对于神经网络来说总是太小",
      "B) 医学图像总是灰度的，CNN无法处理",
      "C) 深度学习模型不适用于体积数据",
      "D) 由于需要专家标注导致标注数据有限，加上高精度要求和病理区域的类别不平衡",
    ],
    answer: 3,
    explanation: "Medical image segmentation faces unique challenges including scarce expert-annotated data, extreme class imbalance (pathological regions are often small), need for very high accuracy with clinical implications, and diverse imaging modalities. Techniques like data augmentation, transfer learning, and specialized losses (Dice loss) help address these challenges.",
    explanationChinese: "医学图像分割面临独特挑战，包括稀缺的专家标注数据、极端的类别不平衡（病理区域通常很小）、具有临床意义的高精度需求以及多样的成像模态。数据增强、迁移学习和专门的损失函数（Dice损失）等技术有助于应对这些挑战。",
    diagram: "",
    terms: ["image_segmentation", "deep_learning", "transfer_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 227,
    q: "Why is the U-Net architecture particularly popular for medical image segmentation?",
    qChinese: "为什么U-Net架构在医学图像分割中特别流行？",
    options: [
      "A) It requires the largest amount of training data among all architectures",
      "B) Its encoder-decoder structure with skip connections works well with limited training data and produces precise localization needed in medical applications",
      "C) It was designed for natural image classification and later adapted",
      "D) It only works on 2D images and medical scans are always 2D"
    ],
    optionsChinese: [
      "A) 它在所有架构中需要最大量的训练数据",
      "B) 其带有跳跃连接的编码器-解码器结构在有限的训练数据下工作良好，并产生医学应用所需的精确定位",
      "C) 它是为自然图像分类设计的，后来被改编",
      "D) 它只能处理二维图像，而医学扫描总是二维的"
    ],
    answer: 1,
    explanation: "U-Net was originally designed for biomedical image segmentation and excels in low-data regimes common in medical imaging. Its skip connections preserve fine spatial details critical for precise boundary delineation, and aggressive data augmentation strategies compensate for limited training samples typical in clinical datasets.",
    explanationChinese: "U-Net最初为生物医学图像分割而设计，在医学成像中常见的低数据条件下表现出色。其跳跃连接保留了精确边界描绘所需的细微空间细节，激进的数据增强策略弥补了临床数据集中典型的有限训练样本。",
    diagram: "",
    terms: ["image_segmentation", "convolutional_network", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 228,
    q: "How are CT (Computed Tomography) scans different from standard photographs in terms of deep learning processing?",
    qChinese: "在深度学习处理方面，CT（计算机断层扫描）图像与标准照片有何不同？",
    options: [
      "A) CT scans are 3D volumetric data with Hounsfield unit intensity values, requiring 3D convolutions or slice-by-slice processing and specialized windowing for tissue visualization",
      "B) CT scans cannot be processed by neural networks",
      "C) CT scans are always lower resolution than photographs",
      "D) CT scans are identical to RGB photographs in every way"
    ],
    optionsChinese: [
      "A) CT扫描是具有Hounsfield单位强度值的三维体积数据，需要三维卷积或逐层处理以及用于组织可视化的专门窗位",
      "B) CT扫描不能被神经网络处理",
      "C) CT扫描的分辨率总是低于照片",
      "D) CT扫描在各方面与RGB照片相同"
    ],
    answer: 0,
    explanation: "CT scans produce 3D volumetric data where each voxel's intensity is measured in Hounsfield Units reflecting tissue density. Processing requires 3D architectures (3D U-Net) or 2.5D approaches, windowing to visualize different tissues (lung vs. bone), and handling of anisotropic voxel spacing common in clinical acquisitions.",
    explanationChinese: "CT扫描产生三维体积数据，其中每个体素的强度以反映组织密度的Hounsfield单位测量。处理需要三维架构（3D U-Net）或2.5D方法、用于可视化不同组织（肺与骨）的窗位，以及处理临床采集中常见的各向异性体素间距。",
    diagram: "",
    terms: ["deep_learning", "convolutional_network", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 229,
    q: "What is the Dice loss and why is it commonly used in medical image segmentation?",
    qChinese: "Dice损失是什么，为什么它在医学图像分割中常被使用？",
    options: [
      "A) A classification loss that maximizes prediction confidence",
      "B) A loss function specifically designed for object detection",
      "C) A regularization term that prevents overfitting",
      "D) A segmentation loss based on the Dice coefficient that directly optimizes the overlap between prediction and ground truth, handling class imbalance well",
    ],
    optionsChinese: [
      "A) 一种最大化预测置信度的分类损失",
      "B) 一种专门为目标检测设计的损失函数",
      "C) 一种防止过拟合的正则化项",
      "D) 一种基于Dice系数的分割损失，直接优化预测与真实标注之间的重叠，能很好地处理类别不平衡",
    ],
    answer: 3,
    explanation: "Dice loss is derived from the Dice similarity coefficient (2|A intersection B| / (|A| + |B|)) and directly optimizes the overlap between predicted and ground-truth masks. It naturally handles class imbalance since it measures relative overlap rather than per-pixel accuracy, making it ideal for segmenting small structures in medical images.",
    explanationChinese: "Dice损失源自Dice相似系数（2|A交B| / (|A| + |B|)），直接优化预测掩码与真实标注掩码之间的重叠。它自然地处理类别不平衡，因为它测量相对重叠而非逐像素准确率，使其非常适合在医学图像中分割小结构。",
    diagram: "",
    terms: ["image_segmentation", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 230,
    q: "What unique challenges does MRI (Magnetic Resonance Imaging) present for deep learning models?",
    qChinese: "MRI（磁共振成像）给深度学习模型带来了哪些独特挑战？",
    options: [
      "C) MRI has multiple contrast sequences (T1, T2, FLAIR), intensity inhomogeneity, and domain shift across scanners, requiring robust preprocessing and multi-modal fusion",
      "B) MRI data cannot be stored digitally",
      "A) MRI images are always 2D and low resolution",
      "D) MRI produces only binary images"
    ],
    optionsChinese: [
      "C) MRI有多种对比序列（T1、T2、FLAIR）、强度不均匀性和跨扫描仪的域偏移，需要稳健的预处理和多模态融合",
      "B) MRI数据无法以数字形式存储",
      "A) MRI图像总是二维和低分辨率的",
      "D) MRI只产生二值图像"
    ],
    answer: 0,
    explanation: "MRI presents challenges including multiple contrast weightings (T1, T2, FLAIR) that highlight different tissues, intensity inhomogeneity (bias field), significant domain shift between different scanners and protocols, and the need for multi-sequence fusion. Models must handle these variations through careful preprocessing, normalization, and domain adaptation techniques.",
    explanationChinese: "MRI带来的挑战包括突出不同组织的多种对比加权（T1、T2、FLAIR）、强度不均匀性（偏置场）、不同扫描仪和协议之间的显著域偏移，以及多序列融合的需求。模型必须通过仔细的预处理、归一化和域适应技术来处理这些变化。",
    diagram: "",
    terms: ["deep_learning", "computer_vision", "transfer_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 231,
    q: "What is content-based image retrieval (CBIR)?",
    qChinese: "基于内容的图像检索（CBIR）是什么？",
    options: [
      "A) Searching for images using text keywords and metadata tags",
      "B) Retrieving images from a database based on visual similarity to a query image using extracted feature representations",
      "C) Downloading images from the internet by URL",
      "D) Sorting images by file size and creation date",
    ],
    optionsChinese: [
      "A) 使用文本关键词和元数据标签搜索图像",
      "B) 基于与查询图像的视觉相似性使用提取的特征表示从数据库中检索图像",
      "C) 通过URL从互联网下载图像",
      "D) 按文件大小和创建日期排序图像",
    ],
    answer: 1,
    explanation: "Content-based image retrieval searches a database for images visually similar to a query by comparing feature representations rather than metadata. Features can be handcrafted (SIFT, SURF) or learned (CNN features), and similarity is measured in the feature space using metrics like Euclidean distance or cosine similarity.",
    explanationChinese: "基于内容的图像检索通过比较特征表示而非元数据来搜索数据库中与查询视觉相似的图像。特征可以是手工设计的（SIFT、SURF）或学习到的（CNN特征），相似性使用欧氏距离或余弦相似性等度量在特征空间中测量。",
    diagram: "",
    terms: ["feature_extraction", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 232,
    q: "What is VLAD (Vector of Locally Aggregated Descriptors) used for in image retrieval?",
    qChinese: "VLAD（局部聚合描述子向量）在图像检索中的用途是什么？",
    options: [
      "A) To perform image segmentation",
      "B) To train deep neural networks for classification",
      "C) To aggregate local feature descriptors into a compact global image representation by accumulating residuals to cluster centers",
      "D) To detect keypoints in images"
    ],
    optionsChinese: [
      "A) 执行图像分割",
      "B) 训练深度神经网络进行分类",
      "C) 通过累积相对于聚类中心的残差将局部特征描述子聚合为紧凑的全局图像表示",
      "D) 检测图像中的关键点"
    ],
    answer: 2,
    explanation: "VLAD aggregates local descriptors (e.g., SIFT) by assigning each to its nearest visual word (cluster center) and accumulating the residuals (differences between descriptors and their assigned centers). The concatenated residual vectors form a compact global representation that captures the distribution of local features for efficient image retrieval.",
    explanationChinese: "VLAD通过将每个局部描述子（如SIFT）分配给其最近的视觉单词（聚类中心）并累积残差（描述子与其分配中心之间的差异）来聚合局部描述子。拼接的残差向量形成紧凑的全局表示，捕获局部特征的分布以进行高效的图像检索。",
    diagram: "",
    terms: ["feature_extraction", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 233,
    q: "How does NetVLAD extend the classical VLAD approach for deep learning-based retrieval?",
    qChinese: "NetVLAD如何将经典VLAD方法扩展到基于深度学习的检索？",
    options: [
      "A) It replaces VLAD with a fully connected layer",
      "B) It uses only global average pooling",
      "C) It removes the aggregation step entirely",
      "D) It implements a differentiable VLAD layer that can be plugged into a CNN and trained end-to-end with soft assignment instead of hard assignment",
    ],
    optionsChinese: [
      "A) 它用全连接层替换VLAD",
      "B) 它仅使用全局平均池化",
      "C) 它完全移除了聚合步骤",
      "D) 它实现了一个可微分的VLAD层，可以插入CNN并使用软分配代替硬分配进行端到端训练",
    ],
    answer: 3,
    explanation: "NetVLAD replaces the hard assignment in classical VLAD with a differentiable soft assignment using softmax, making the entire VLAD aggregation differentiable. This allows it to be integrated as a pooling layer in a CNN and trained end-to-end with backpropagation, learning optimal cluster centers for the specific retrieval task.",
    explanationChinese: "NetVLAD将经典VLAD中的硬分配替换为使用softmax的可微分软分配，使整个VLAD聚合可微分。这允许它作为池化层集成到CNN中并通过反向传播进行端到端训练，为特定检索任务学习最优的聚类中心。",
    diagram: "",
    terms: ["feature_extraction", "deep_learning", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 234,
    q: "What role does feature hashing play in large-scale image retrieval?",
    qChinese: "特征哈希在大规模图像检索中扮演什么角色？",
    options: [
      "A) It performs exact matching between query and database images",
      "B) It converts high-dimensional feature vectors into compact binary codes, enabling fast approximate nearest neighbor search with low memory usage",
      "A) It increases the dimensionality of feature vectors for better accuracy",
      "D) It encrypts image features for secure storage"
    ],
    optionsChinese: [
      "A) 它在查询图像和数据库图像之间进行精确匹配",
      "B) 它将高维特征向量转换为紧凑的二进制编码，实现低内存使用的快速近似最近邻搜索",
      "A) 它增加特征向量的维度以获得更好的精度",
      "D) 它对图像特征进行加密以安全存储"
    ],
    answer: 1,
    explanation: "Feature hashing maps high-dimensional feature vectors to compact binary hash codes such that similar images produce similar hash codes. Retrieval then uses Hamming distance between binary codes, which is extremely fast to compute. Deep hashing methods learn hash functions end-to-end, optimizing both feature extraction and binarization for retrieval tasks.",
    explanationChinese: "特征哈希将高维特征向量映射到紧凑的二进制哈希编码，使相似图像产生相似的哈希编码。检索然后使用二进制编码之间的汉明距离，计算速度极快。深度哈希方法端到端学习哈希函数，同时优化特征提取和二值化以用于检索任务。",
    diagram: "",
    terms: ["feature_extraction", "computer_vision", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 235,
    q: "What is a scene graph in the context of visual scene understanding?",
    qChinese: "在视觉场景理解的上下文中，场景图是什么？",
    options: [
      "C) A structured representation where nodes represent objects in the scene and edges represent relationships between them",
      "B) A pixel-level segmentation map of the scene",
      "A) A graph showing the training loss over epochs",
      "D) A diagram of the neural network architecture"
    ],
    optionsChinese: [
      "C) 一种结构化表示，其中节点代表场景中的物体，边代表它们之间的关系",
      "B) 场景的像素级分割图",
      "A) 显示训练损失随epoch变化的图表",
      "D) 神经网络架构图"
    ],
    answer: 0,
    explanation: "A scene graph is a structured representation of an image where nodes correspond to detected objects (with their attributes) and directed edges represent pairwise relationships (e.g., 'person riding bicycle', 'cup on table'). Scene graphs provide rich semantic information useful for tasks like visual question answering, image captioning, and image retrieval.",
    explanationChinese: "场景图是图像的结构化表示，其中节点对应检测到的物体（及其属性），有向边表示成对关系（如'人骑自行车'、'杯子在桌上'）。场景图提供丰富的语义信息，对视觉问答、图像描述和图像检索等任务非常有用。",
    diagram: "",
    terms: ["computer_vision", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 236,
    q: "What is Visual Question Answering (VQA)?",
    qChinese: "视觉问答（VQA）是什么？",
    options: [
      "A) A task where a model generates questions about an image",
      "B) A task where a model answers natural language questions about the content of a given image by jointly reasoning over visual and textual information",
      "C) A task where a model retrieves images matching a text query",
      "D) A task where a model classifies images into predefined categories"
    ],
    optionsChinese: [
      "A) 模型生成关于图像的问题的任务",
      "B) 模型通过联合推理视觉和文本信息来回答关于给定图像内容的自然语言问题的任务",
      "C) 模型检索与文本查询匹配的图像的任务",
      "D) 模型将图像分类为预定义类别的任务"
    ],
    answer: 1,
    explanation: "VQA requires a model to answer free-form natural language questions (e.g., 'What color is the car?') given an image. This demands understanding both the visual content and the question semantics, requiring multi-modal reasoning. Modern VQA systems typically use attention mechanisms to focus on relevant image regions based on the question.",
    explanationChinese: "VQA要求模型给定一张图像回答自由形式的自然语言问题（如'汽车是什么颜色？'）。这需要理解视觉内容和问题语义，需要多模态推理。现代VQA系统通常使用注意力机制根据问题关注相关的图像区域。",
    diagram: "",
    terms: ["computer_vision", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 237,
    q: "How does image captioning combine computer vision and natural language processing?",
    qChinese: "图像描述如何结合计算机视觉和自然语言处理？",
    options: [
      "A) It only produces single-word labels for images",
      "B) It matches images to captions from a fixed database using template matching",
      "A) It uses only NLP techniques without any visual feature extraction",
      "D) It uses a CNN or Vision Transformer encoder to extract visual features and a language model decoder (e.g., LSTM or Transformer) to generate descriptive text",
    ],
    optionsChinese: [
      "A) 它只为图像产生单词标签",
      "B) 它使用模板匹配将图像与固定数据库中的描述匹配",
      "A) 它仅使用NLP技术而不进行任何视觉特征提取",
      "D) 它使用CNN或视觉Transformer编码器提取视觉特征，并使用语言模型解码器（如LSTM或Transformer）生成描述性文本",
    ],
    answer: 3,
    explanation: "Image captioning uses an encoder-decoder framework where a visual encoder (CNN or ViT) extracts image features and a language decoder (RNN, LSTM, or Transformer) autoregressively generates a descriptive sentence. Attention mechanisms allow the decoder to focus on different image regions while generating each word, producing more accurate and detailed captions.",
    explanationChinese: "图像描述使用编码器-解码器框架，其中视觉编码器（CNN或ViT）提取图像特征，语言解码器（RNN、LSTM或Transformer）自回归地生成描述性句子。注意力机制允许解码器在生成每个词时关注不同的图像区域，产生更准确和详细的描述。",
    diagram: "",
    terms: ["computer_vision", "deep_learning", "feature_extraction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 238,
    q: "What is visual grounding and how does it relate to scene understanding?",
    qChinese: "视觉定位是什么，它与场景理解有何关系？",
    options: [
      "A) The process of training a vision model from scratch without pretrained weights",
      "B) Converting 3D scenes to 2D ground plane projections",
      "C) The process of grounding electrical components in hardware",
      "D) Localizing specific image regions referred to by a natural language expression, connecting language understanding with spatial visual reasoning",
    ],
    optionsChinese: [
      "A) 从头开始训练视觉模型而不使用预训练权重的过程",
      "B) 将三维场景转换为二维地面平面投影",
      "C) 硬件中电气组件接地的过程",
      "D) 定位自然语言表达所指的特定图像区域，将语言理解与空间视觉推理连接起来",
    ],
    answer: 3,
    explanation: "Visual grounding localizes the image region corresponding to a natural language referring expression (e.g., 'the red car on the left'). It requires the model to understand both visual content and language semantics to identify the correct spatial region, serving as a fundamental capability for interactive scene understanding and human-robot interaction.",
    explanationChinese: "视觉定位定位与自然语言指代表达（如'左边的红色汽车'）对应的图像区域。它要求模型理解视觉内容和语言语义以识别正确的空间区域，是交互式场景理解和人机交互的基本能力。",
    diagram: "",
    terms: ["computer_vision", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  }
,
  {
    id: 239,
    q: "What is the key innovation of FCOS (Fully Convolutional One-Stage) object detection compared to anchor-based methods?",
    qChinese: "与基于锚框的方法相比，FCOS（全卷积一阶段）目标检测的关键创新是什么？",
    options: [
      "A) It uses larger anchor boxes for better coverage",
      "B) It predicts bounding boxes per pixel without predefined anchor boxes",
      "C) It relies on two-stage region proposals",
      "D) It only works on binary classification tasks"
    ],
    optionsChinese: [
      "A) 它使用更大的锚框以获得更好的覆盖",
      "B) 它在没有预定义锚框的情况下按像素预测边界框",
      "C) 它依赖于两阶段区域提议",
      "D) 它只适用于二分类任务"
    ],
    answer: 1,
    explanation: "FCOS is an anchor-free detector that directly predicts, for each spatial location on the feature map, the distances from that location to the four sides of the bounding box. This eliminates the need for carefully designed anchor boxes and their associated hyperparameters, simplifying the detection pipeline significantly.",
    explanationChinese: "FCOS是一种无锚框检测器，它直接为特征图上的每个空间位置预测从该位置到边界框四条边的距离。这消除了对精心设计的锚框及其相关超参数的需求，显著简化了检测流程。",
    diagram: "",
    terms: ["object_detection", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 240,
    q: "In CenterNet, how are objects represented for detection?",
    qChinese: "在CenterNet中，目标是如何表示以进行检测的？",
    options: [
      "A) As a set of predefined anchor boxes at each feature location",
      "B) As their center point on a heatmap along with width and height regression",
      "C) As segmentation masks generated by a mask head",
      "D) As region proposals selected by a selective search algorithm"
    ],
    optionsChinese: [
      "A) 作为每个特征位置上的一组预定义锚框",
      "B) 作为热力图上的中心点以及宽度和高度回归",
      "C) 作为由掩码头生成的分割掩码",
      "D) 作为由选择性搜索算法选择的区域提议"
    ],
    answer: 1,
    explanation: "CenterNet models each object as a single point — the center of its bounding box — and uses a keypoint heatmap to predict center locations. It then regresses additional properties such as object size directly from the center point feature, eliminating the need for anchor boxes or non-maximum suppression in some formulations.",
    explanationChinese: "CenterNet将每个目标建模为一个单点——其边界框的中心点——并使用关键点热力图预测中心位置。然后直接从中心点特征回归额外属性（如目标大小），在某些公式中消除了对锚框或非极大值抑制的需求。",
    diagram: "",
    terms: ["object_detection", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 241,
    q: "What problem does the centerness branch in FCOS aim to solve?",
    qChinese: "FCOS中的中心度分支旨在解决什么问题？",
    options: [
      "A) It increases the number of anchor boxes per location",
      "B) It replaces the classification head entirely",
      "C) It suppresses low-quality bounding box predictions far from the object center",
      "D) It performs instance segmentation on each detected object",
    ],
    optionsChinese: [
      "A) 它增加了每个位置的锚框数量",
      "B) 它完全替代了分类头",
      "C) 它抑制远离目标中心的低质量边界框预测",
      "D) 它对每个检测到的目标执行实例分割",
    ],
    answer: 2,
    explanation: "The centerness branch in FCOS predicts a score between 0 and 1 indicating how close a location is to the center of the object. Locations far from the center tend to produce poor bounding box predictions, so this score is used to down-weight those detections during inference, improving overall detection quality.",
    explanationChinese: "FCOS中的中心度分支预测一个0到1之间的分数，表示某个位置距目标中心的远近程度。远离中心的位置往往会产生较差的边界框预测，因此该分数用于在推理时降低这些检测的权重，从而提高整体检测质量。",
    diagram: "",
    terms: ["object_detection", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 242,
    q: "Which of the following is an advantage of anchor-free detectors over anchor-based detectors?",
    qChinese: "以下哪项是无锚框检测器相对于基于锚框的检测器的优势？",
    options: [
      "A) They always achieve higher mAP on every benchmark",
      "B) They need more training data to converge",
      "C) They cannot handle multi-scale feature maps",
      "D) They require fewer hyperparameters related to anchor design such as aspect ratios and scales",
    ],
    optionsChinese: [
      "A) 它们在每个基准测试上总是获得更高的mAP",
      "B) 它们需要更多的训练数据才能收敛",
      "C) 它们无法处理多尺度特征图",
      "D) 它们需要更少的与锚框设计相关的超参数，如宽高比和尺度",
    ],
    answer: 3,
    explanation: "Anchor-free detectors remove the dependency on predefined anchor box configurations (scales, aspect ratios, IoU thresholds), which reduces the number of hyperparameters that must be tuned. This makes the detection pipeline simpler and more generalizable across different datasets and object categories.",
    explanationChinese: "无锚框检测器消除了对预定义锚框配置（尺度、宽高比、IoU阈值）的依赖，从而减少了需要调优的超参数数量。这使得检测流程更简单，在不同数据集和目标类别之间更具通用性。",
    diagram: "",
    terms: ["object_detection", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 243,
    q: "How does CornerNet represent objects for detection?",
    qChinese: "CornerNet如何表示目标以进行检测？",
    options: [
      "A) By detecting the top-left and bottom-right corners of bounding boxes as paired keypoints",
      "B) By generating dense pixel-wise masks for each object",
      "C) By using predefined anchor boxes with multiple aspect ratios",
      "D) By predicting the center point and radius of each object",
    ],
    optionsChinese: [
      "A) 通过将边界框的左上角和右下角检测为成对的关键点",
      "B) 通过为每个目标生成密集的逐像素掩码",
      "C) 通过使用具有多种宽高比的预定义锚框",
      "D) 通过预测每个目标的中心点和半径",
    ],
    answer: 0,
    explanation: "CornerNet detects objects as pairs of keypoints — the top-left corner and the bottom-right corner of the bounding box. It uses corner pooling layers to better localize corners and an associative embedding to group corners belonging to the same object, completely avoiding anchor boxes.",
    explanationChinese: "CornerNet将目标检测为关键点对——边界框的左上角和右下角。它使用角点池化层来更好地定位角点，并使用关联嵌入来将属于同一目标的角点分组，完全避免了锚框。",
    diagram: "",
    terms: ["object_detection", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 244,
    q: "What role does Feature Pyramid Network (FPN) play in anchor-free detectors like FCOS?",
    qChinese: "特征金字塔网络（FPN）在FCOS等无锚框检测器中起什么作用？",
    options: [
      "A) It replaces the backbone network entirely",
      "B) It assigns objects of different sizes to different feature levels for multi-scale detection",
      "C) It is used only during post-processing to merge detections",
      "D) It converts RGB images to grayscale before detection"
    ],
    optionsChinese: [
      "A) 它完全替代了骨干网络",
      "B) 它将不同大小的目标分配到不同的特征层级以进行多尺度检测",
      "C) 它仅在后处理期间用于合并检测结果",
      "D) 它在检测前将RGB图像转换为灰度图"
    ],
    answer: 1,
    explanation: "In FCOS, the FPN provides multi-scale feature maps where each level is responsible for detecting objects within a certain size range. Small objects are detected on high-resolution feature levels, while large objects are detected on low-resolution levels, which helps resolve ambiguity when a location falls inside multiple objects.",
    explanationChinese: "在FCOS中，FPN提供多尺度特征图，每个层级负责检测特定大小范围内的目标。小目标在高分辨率特征层级上检测，大目标在低分辨率层级上检测，这有助于在一个位置落在多个目标内部时解决歧义。",
    diagram: "",
    terms: ["object_detection", "feature_extraction", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 245,
    q: "In anchor-free object detection, what is the typical training target for heatmap-based methods like CenterNet?",
    qChinese: "在无锚框目标检测中，基于热力图的方法（如CenterNet）的典型训练目标是什么？",
    options: [
      "A) Binary cross-entropy over anchor-object IoU matches",
      "B) A uniform distribution over the entire feature map",
      "C) A Gaussian kernel centered at each ground-truth object center on the heatmap",
      "D) Direct L1 regression on all pixel locations"
    ],
    optionsChinese: [
      "A) 基于锚框与目标IoU匹配的二元交叉熵",
      "B) 整个特征图上的均匀分布",
      "C) 在热力图上以每个真实目标中心为中心的高斯核",
      "D) 对所有像素位置的直接L1回归"
    ],
    answer: 2,
    explanation: "Heatmap-based anchor-free methods like CenterNet generate ground-truth heatmaps by placing a 2D Gaussian kernel at each object's center point. The network is trained using a focal-loss variant to predict these heatmaps, which naturally handles the foreground-background class imbalance.",
    explanationChinese: "基于热力图的无锚框方法（如CenterNet）通过在每个目标的中心点放置二维高斯核来生成真实热力图。网络使用焦点损失变体来预测这些热力图，这自然地处理了前景-背景类别不平衡问题。",
    diagram: "",
    terms: ["object_detection", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 246,
    q: "What does panoptic segmentation unify?",
    qChinese: "全景分割统一了什么？",
    options: [
      "A) Semantic segmentation (stuff) and instance segmentation (things)",
      "B) Depth estimation and optical flow",
      "C) Image generation and style transfer",
      "D) Object detection and image classification",
    ],
    optionsChinese: [
      "A) 语义分割（不可数区域）和实例分割（可数物体）",
      "B) 深度估计和光流",
      "C) 图像生成和风格迁移",
      "D) 目标检测和图像分类",
    ],
    answer: 0,
    explanation: "Panoptic segmentation combines semantic segmentation, which labels every pixel with a class (including amorphous 'stuff' like sky and road), with instance segmentation, which distinguishes individual countable 'things' like people and cars. Every pixel in the image receives both a class label and an instance ID if applicable.",
    explanationChinese: "全景分割将语义分割（为每个像素标注类别，包括天空和道路等无定形的「不可数区域」）与实例分割（区分人和汽车等可数的「物体」）相结合。图像中的每个像素都会收到一个类别标签，如果适用还会收到一个实例ID。",
    diagram: "",
    terms: ["image_segmentation", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 247,
    q: "What is the Panoptic Quality (PQ) metric used to evaluate?",
    qChinese: "全景质量（PQ）指标用于评估什么？",
    options: [
      "A) Only the pixel-level accuracy of semantic segmentation",
      "B) The combined quality of segmentation and recognition in panoptic segmentation",
      "C) The speed of inference in real-time detection systems",
      "D) The resolution of generated images"
    ],
    optionsChinese: [
      "A) 仅语义分割的像素级精度",
      "B) 全景分割中分割和识别的综合质量",
      "C) 实时检测系统的推理速度",
      "D) 生成图像的分辨率"
    ],
    answer: 1,
    explanation: "Panoptic Quality (PQ) is decomposed into Segmentation Quality (SQ) and Recognition Quality (RQ). SQ measures the IoU of matched segments, while RQ measures precision and recall of segment matching. PQ = SQ × RQ, providing a unified metric that captures both segmentation accuracy and detection performance.",
    explanationChinese: "全景质量（PQ）分解为分割质量（SQ）和识别质量（RQ）。SQ衡量匹配片段的IoU，而RQ衡量片段匹配的精确度和召回率。PQ = SQ × RQ，提供了一个统一的指标，同时捕获分割精度和检测性能。",
    diagram: "",
    terms: ["image_segmentation", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 248,
    q: "In Panoptic FPN, what architectural component is added to Mask R-CNN to produce panoptic output?",
    qChinese: "在Panoptic FPN中，在Mask R-CNN基础上添加了什么架构组件以产生全景输出？",
    options: [
      "A) An additional depth estimation decoder",
      "B) A separate generative adversarial branch",
      "C) A lightweight semantic segmentation branch on the FPN features",
      "D) A recurrent network for temporal modeling"
    ],
    optionsChinese: [
      "A) 一个额外的深度估计解码器",
      "B) 一个单独的生成对抗分支",
      "C) 在FPN特征上的轻量级语义分割分支",
      "D) 一个用于时间建模的循环网络"
    ],
    answer: 2,
    explanation: "Panoptic FPN extends Mask R-CNN by adding a semantic segmentation branch that operates on the FPN feature maps. The instance segmentation predictions from Mask R-CNN handle 'things', while the new semantic branch handles 'stuff' regions, and a merging module combines them into a unified panoptic output.",
    explanationChinese: "Panoptic FPN通过在FPN特征图上添加语义分割分支来扩展Mask R-CNN。Mask R-CNN的实例分割预测处理「物体」，而新的语义分支处理「不可数区域」，合并模块将它们组合成统一的全景输出。",
    diagram: "",
    terms: ["image_segmentation", "convolutional_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 249,
    q: "What is the difference between 'things' and 'stuff' in panoptic segmentation?",
    qChinese: "在全景分割中，「物体」和「不可数区域」之间有什么区别？",
    options: [
      "A) 'Things' are background regions and 'stuff' are foreground objects",
      "B) 'Things' are 2D and 'stuff' are 3D",
      "C) 'Things' are countable object instances like cars, while 'stuff' are amorphous regions like sky or grass",
      "D) There is no meaningful difference between them"
    ],
    optionsChinese: [
      "A) 「物体」是背景区域，「不可数区域」是前景目标",
      "B) 「物体」是二维的，「不可数区域」是三维的",
      "C) 「物体」是可数的目标实例（如汽车），「不可数区域」是无定形区域（如天空或草地）",
      "D) 它们之间没有有意义的区别"
    ],
    answer: 2,
    explanation: "'Things' refer to countable objects with well-defined shapes that can be individually identified, such as people, cars, and animals. 'Stuff' refers to amorphous, uncountable regions like sky, road, and vegetation. Panoptic segmentation requires instance-level labels for things and class-level labels for stuff.",
    explanationChinese: "「物体」指具有明确形状且可以单独识别的可数目标，如人、汽车和动物。「不可数区域」指天空、道路和植被等无定形的不可数区域。全景分割要求对物体提供实例级标签，对不可数区域提供类别级标签。",
    diagram: "",
    terms: ["image_segmentation", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 250,
    q: "Which dense prediction task assigns a class label to every pixel in an image without distinguishing individual instances?",
    qChinese: "哪种密集预测任务为图像中的每个像素分配类别标签，但不区分单个实例？",
    options: [
      "A) Instance segmentation",
      "B) Object detection",
      "C) Semantic segmentation",
      "D) Panoptic segmentation",
    ],
    optionsChinese: [
      "A) 实例分割",
      "B) 目标检测",
      "C) 语义分割",
      "D) 全景分割",
    ],
    answer: 2,
    explanation: "Semantic segmentation classifies every pixel in the image into one of the predefined categories but does not differentiate between separate instances of the same class. For example, all pixels belonging to cars would share the same label without distinguishing individual vehicles.",
    explanationChinese: "语义分割将图像中的每个像素分类到预定义类别之一，但不区分同一类别的不同实例。例如，属于汽车的所有像素将共享相同的标签，而不区分单独的车辆。",
    diagram: "",
    terms: ["image_segmentation", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 251,
    q: "What is a key challenge in merging instance and semantic segmentation outputs in panoptic segmentation?",
    qChinese: "在全景分割中合并实例分割和语义分割输出的关键挑战是什么？",
    options: [
      "A) Resolving overlapping predictions where instance masks and stuff labels conflict for the same pixel",
      "B) The two branches always produce identical predictions",
      "C) Both branches require different input image resolutions",
      "D) Semantic segmentation cannot run on GPUs"
    ],
    optionsChinese: [
      "A) 解决实例掩码和不可数区域标签对同一像素冲突的重叠预测",
      "B) 两个分支总是产生相同的预测",
      "C) 两个分支需要不同的输入图像分辨率",
      "D) 语义分割不能在GPU上运行"
    ],
    answer: 0,
    explanation: "When merging outputs, conflicts can arise where instance masks overlap with stuff predictions for the same pixel. A heuristic merging strategy typically resolves this by prioritizing higher-confidence instance predictions, removing overlaps, and filling remaining pixels with semantic labels.",
    explanationChinese: "在合并输出时，实例掩码和不可数区域预测可能会对同一像素产生冲突。启发式合并策略通常通过优先考虑置信度更高的实例预测、消除重叠并用语义标签填充剩余像素来解决此问题。",
    diagram: "",
    terms: ["image_segmentation", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 252,
    q: "How does MaskFormer approach panoptic segmentation differently from Panoptic FPN?",
    qChinese: "MaskFormer与Panoptic FPN在全景分割方面有何不同？",
    options: [
      "A) MaskFormer uses a purely convolutional architecture without any attention",
      "B) MaskFormer only handles stuff categories and ignores things",
      "C) MaskFormer requires separate models for each object class",
      "D) MaskFormer treats all segmentation as mask classification using a transformer decoder with learnable queries",
    ],
    optionsChinese: [
      "A) MaskFormer使用纯卷积架构而不使用任何注意力",
      "B) MaskFormer只处理不可数区域类别而忽略物体",
      "C) MaskFormer需要为每个目标类别使用单独的模型",
      "D) MaskFormer使用带有可学习查询的Transformer解码器将所有分割视为掩码分类",
    ],
    answer: 3,
    explanation: "MaskFormer reformulates panoptic segmentation as a mask classification problem. It uses a transformer decoder with a set of learnable queries, where each query predicts a binary mask and its associated class label. This unified approach handles both things and stuff with the same mechanism, without separate branches.",
    explanationChinese: "MaskFormer将全景分割重新表述为掩码分类问题。它使用带有一组可学习查询的Transformer解码器，每个查询预测一个二值掩码及其关联的类别标签。这种统一方法用相同的机制处理物体和不可数区域，无需单独的分支。",
    diagram: "",
    terms: ["image_segmentation", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 253,
    q: "What is the core idea behind SimCLR for self-supervised visual representation learning?",
    qChinese: "SimCLR用于自监督视觉表示学习的核心思想是什么？",
    options: [
      "A) Training a model to predict image captions without labels",
      "B) Maximizing agreement between differently augmented views of the same image via contrastive loss",
      "C) Pretraining exclusively on depth maps from LiDAR sensors",
      "D) Using generative adversarial networks to synthesize labeled data",
    ],
    optionsChinese: [
      "A) 训练模型在没有标签的情况下预测图像描述",
      "B) 通过对比损失最大化同一图像不同增强视图之间的一致性",
      "C) 专门在来自LiDAR传感器的深度图上预训练",
      "D) 使用生成对抗网络合成标注数据",
    ],
    answer: 1,
    explanation: "SimCLR creates two augmented views of each image and trains an encoder to produce similar representations for views of the same image (positive pairs) while pushing apart representations of different images (negative pairs). It uses the NT-Xent contrastive loss and relies on large batch sizes for a sufficient number of negative samples.",
    explanationChinese: "SimCLR为每张图像创建两个增强视图，并训练编码器为同一图像的视图（正对）产生相似的表示，同时推开不同图像的表示（负对）。它使用NT-Xent对比损失，并依赖大批量大小来获得足够数量的负样本。",
    diagram: "",
    terms: ["self_supervised_learning", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 254,
    q: "What role does the projection head play in SimCLR?",
    qChinese: "投影头在SimCLR中起什么作用？",
    options: [
      "A) It maps encoder representations to a lower-dimensional space where the contrastive loss is applied",
      "B) It generates the augmented views of input images",
      "C) It replaces the backbone encoder during fine-tuning",
      "D) It performs non-maximum suppression on the output"
    ],
    optionsChinese: [
      "A) 它将编码器表示映射到一个较低维的空间，在该空间上施加对比损失",
      "B) 它生成输入图像的增强视图",
      "C) 它在微调期间替代骨干编码器",
      "D) 它对输出执行非极大值抑制"
    ],
    answer: 0,
    explanation: "The projection head in SimCLR is a small MLP that maps the backbone encoder's representations to a space where the contrastive loss is computed. It was shown that representations before the projection head are better for downstream tasks, so the projection head is discarded after pretraining.",
    explanationChinese: "SimCLR中的投影头是一个小型MLP，将骨干编码器的表示映射到计算对比损失的空间。研究表明投影头之前的表示对下游任务更有效，因此投影头在预训练后被丢弃。",
    diagram: "",
    terms: ["self_supervised_learning", "feature_extraction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 255,
    q: "How does DINO (self-DIstillation with NO labels) differ from contrastive methods like SimCLR?",
    qChinese: "DINO（无标签自蒸馏）与SimCLR等对比方法有何不同？",
    options: [
      "A) DINO requires labeled data for pretraining",
      "B) DINO uses a self-distillation framework with a student-teacher architecture and does not need negative pairs",
      "C) DINO only works with convolutional networks, not Vision Transformers",
      "D) DINO uses a generative reconstruction loss instead of any form of similarity"
    ],
    optionsChinese: [
      "A) DINO需要标注数据进行预训练",
      "B) DINO使用学生-教师架构的自蒸馏框架，不需要负对",
      "C) DINO只适用于卷积网络，不适用于Vision Transformer",
      "D) DINO使用生成重建损失而非任何形式的相似性"
    ],
    answer: 1,
    explanation: "DINO trains a student network to match the output of a momentum-updated teacher network using a cross-entropy loss over softmax distributions. Unlike SimCLR, DINO does not rely on explicit negative pairs or large batch sizes, and it was shown to produce especially strong features with Vision Transformers that contain emergent object segmentation properties.",
    explanationChinese: "DINO训练学生网络通过softmax分布上的交叉熵损失来匹配动量更新的教师网络的输出。与SimCLR不同，DINO不依赖显式负对或大批量大小，并且已证明在Vision Transformer上产生特别强的特征，具有涌现的目标分割属性。",
    diagram: "",
    terms: ["self_supervised_learning", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 256,
    q: "What is Masked Autoencoder (MAE) in the context of self-supervised vision?",
    qChinese: "在自监督视觉的背景下，掩码自编码器（MAE）是什么？",
    options: [
      "A) A GAN-based method that generates new images from noise",
      "B) A method that masks random patches of an image and trains a Vision Transformer to reconstruct the missing pixels",
      "C) A supervised method that uses class labels to mask irrelevant features",
      "D) A technique for masking gradients during backpropagation"
    ],
    optionsChinese: [
      "A) 一种基于GAN的从噪声生成新图像的方法",
      "B) 一种遮蔽图像的随机块并训练Vision Transformer重建缺失像素的方法",
      "C) 一种使用类别标签遮蔽无关特征的监督方法",
      "D) 一种在反向传播期间遮蔽梯度的技术"
    ],
    answer: 1,
    explanation: "MAE randomly masks a large portion (e.g., 75%) of image patches and trains a Vision Transformer encoder-decoder to reconstruct the original pixels from the visible patches. The high masking ratio makes the task challenging enough to learn meaningful visual representations without any labels.",
    explanationChinese: "MAE随机遮蔽大部分（例如75%）图像块，并训练Vision Transformer编码器-解码器从可见块重建原始像素。高遮蔽比率使任务足够具有挑战性，能够在没有任何标签的情况下学习有意义的视觉表示。",
    diagram: "",
    terms: ["self_supervised_learning", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 257,
    q: "Why does MAE use an asymmetric encoder-decoder design where only visible patches are fed to the encoder?",
    qChinese: "为什么MAE使用不对称的编码器-解码器设计，只将可见块输入编码器？",
    options: [
      "A) To increase the number of learnable parameters",
      "B) To significantly reduce computation and memory since the encoder only processes unmasked tokens",
      "C) To ensure the decoder never sees the original image",
      "D) To make the model compatible with recurrent architectures"
    ],
    optionsChinese: [
      "A) 为了增加可学习参数的数量",
      "B) 为了显著减少计算和内存，因为编码器只处理未遮蔽的token",
      "C) 为了确保解码器永远看不到原始图像",
      "D) 为了使模型与循环架构兼容"
    ],
    answer: 1,
    explanation: "By only passing the visible (unmasked) patches through the heavy encoder, MAE achieves a 3-4x speedup in pretraining. Mask tokens are only introduced in the lightweight decoder, which reconstructs all patches. This asymmetric design makes large-scale pretraining computationally feasible.",
    explanationChinese: "通过仅将可见（未遮蔽）的块通过重型编码器，MAE在预训练中实现了3-4倍的加速。遮蔽token仅在轻量级解码器中引入，解码器重建所有块。这种不对称设计使大规模预训练在计算上可行。",
    diagram: "",
    terms: ["self_supervised_learning", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 258,
    q: "In self-supervised vision learning, what is representation collapse and how is it typically prevented?",
    qChinese: "在自监督视觉学习中，什么是表示坍缩，通常如何防止它？",
    options: [
      "A) It is when all inputs map to the same representation; prevented by mechanisms like negative pairs, stop-gradients, or momentum encoders",
      "B) It is when the model's weights become zero; prevented by weight initialization",
      "C) It is when the learning rate is too high; prevented by learning rate warmup",
      "D) It is when the model overfits to training labels; prevented by data augmentation only",
    ],
    optionsChinese: [
      "A) 所有输入映射到相同的表示；通过负对、停止梯度或动量编码器等机制防止",
      "B) 模型权重变为零；通过权重初始化防止",
      "C) 学习率过高；通过学习率预热防止",
      "D) 模型过拟合训练标签；仅通过数据增强防止",
    ],
    answer: 0,
    explanation: "Representation collapse occurs when the model learns a trivial solution where all inputs produce the same constant output, making the loss trivially low. Methods like SimCLR use negative pairs, BYOL and DINO use momentum-updated teacher networks and stop-gradients, and VICReg uses variance-invariance-covariance regularization to prevent this.",
    explanationChinese: "表示坍缩发生在模型学习到一个平凡解，所有输入产生相同的常数输出，使损失平凡地降低。SimCLR使用负对，BYOL和DINO使用动量更新的教师网络和停止梯度，VICReg使用方差-不变性-协方差正则化来防止这种情况。",
    diagram: "",
    terms: ["self_supervised_learning", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 259,
    q: "What advantage does self-supervised pretraining like DINO offer for downstream vision tasks?",
    qChinese: "像DINO这样的自监督预训练对下游视觉任务有什么优势？",
    options: [
      "A) It only works for image generation tasks",
      "B) It completely eliminates the need for any task-specific adaptation",
      "C) It requires more labeled data than supervised pretraining",
      "D) It learns general visual features from unlabeled data that transfer well to tasks like classification and segmentation with minimal labeled data",
    ],
    optionsChinese: [
      "A) 它仅适用于图像生成任务",
      "B) 它完全消除了任何任务特定适配的需要",
      "C) 它比监督预训练需要更多的标注数据",
      "D) 它从无标签数据中学习通用视觉特征，这些特征可以用最少的标注数据很好地迁移到分类和分割等任务",
    ],
    answer: 3,
    explanation: "Self-supervised methods like DINO learn rich visual representations from large amounts of unlabeled images. These representations capture general visual patterns that transfer effectively to various downstream tasks, often requiring only a small amount of labeled data for fine-tuning to achieve competitive performance.",
    explanationChinese: "像DINO这样的自监督方法从大量无标签图像中学习丰富的视觉表示。这些表示捕获了通用的视觉模式，可以有效地迁移到各种下游任务，通常只需要少量标注数据进行微调即可达到有竞争力的性能。",
    diagram: "",
    terms: ["self_supervised_learning", "transfer_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 260,
    q: "What is the primary task in Video Object Segmentation (VOS)?",
    qChinese: "视频目标分割（VOS）的主要任务是什么？",
    options: [
      "A) Classifying each video frame into a single scene category",
      "B) Generating new video frames from a single image",
      "C) Tracking and segmenting specific objects throughout all frames of a video given initial annotations",
      "D) Estimating the 3D structure of the scene from video"
    ],
    optionsChinese: [
      "A) 将每个视频帧分类为单一场景类别",
      "B) 从单张图像生成新的视频帧",
      "C) 根据初始标注在视频所有帧中跟踪和分割特定目标",
      "D) 从视频中估计场景的三维结构"
    ],
    answer: 2,
    explanation: "Video Object Segmentation (VOS) aims to segment one or more specific objects across all frames of a video. In the semi-supervised setting, the ground-truth mask is provided for the first frame, and the model must propagate the segmentation to subsequent frames while handling appearance changes and occlusions.",
    explanationChinese: "视频目标分割（VOS）旨在视频所有帧中分割一个或多个特定目标。在半监督设置中，第一帧提供真实掩码，模型必须将分割传播到后续帧，同时处理外观变化和遮挡。",
    diagram: "",
    terms: ["image_segmentation", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 261,
    q: "What is the SORT (Simple Online and Realtime Tracking) algorithm based on?",
    qChinese: "SORT（简单在线实时跟踪）算法基于什么？",
    options: [
      "A) Deep reinforcement learning for trajectory planning",
      "B) Optical flow estimation between consecutive frames",
      "C) Graph neural networks for modeling object interactions",
      "D) Kalman filter for motion prediction and the Hungarian algorithm for data association"
    ],
    optionsChinese: [
      "A) 用于轨迹规划的深度强化学习",
      "B) 连续帧之间的光流估计",
      "C) 用于建模目标交互的图神经网络",
      "D) 用于运动预测的卡尔曼滤波器和用于数据关联的匈牙利算法"
    ],
    answer: 3,
    explanation: "SORT uses a Kalman filter to predict each tracked object's position in the next frame and the Hungarian algorithm to optimally associate predicted positions with new detections based on IoU. It is simple and fast but relies solely on motion and bounding box overlap, which can fail during occlusions.",
    explanationChinese: "SORT使用卡尔曼滤波器预测每个被跟踪目标在下一帧中的位置，并使用匈牙利算法基于IoU将预测位置与新检测结果最优关联。它简单且快速，但仅依赖运动和边界框重叠，在遮挡时可能失败。",
    diagram: "",
    terms: ["object_detection", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 262,
    q: "How does DeepSORT improve upon SORT for multi-object tracking?",
    qChinese: "DeepSORT如何改进SORT的多目标跟踪？",
    options: [
      "A) By adding a deep appearance feature descriptor to improve data association and reduce identity switches",
      "B) By replacing the Kalman filter with a particle filter",
      "C) By using a generative model to predict future frames",
      "D) By removing the Hungarian algorithm and using greedy matching"
    ],
    optionsChinese: [
      "A) 通过添加深度外观特征描述符来改善数据关联并减少身份切换",
      "B) 用粒子滤波器替代卡尔曼滤波器",
      "C) 使用生成模型预测未来帧",
      "D) 移除匈牙利算法并使用贪婪匹配"
    ],
    answer: 0,
    explanation: "DeepSORT extends SORT by incorporating a deep neural network trained on a re-identification dataset to extract appearance features for each detection. The association metric combines both motion (Mahalanobis distance from Kalman filter) and appearance (cosine distance of deep features), significantly reducing identity switches during occlusions.",
    explanationChinese: "DeepSORT通过结合在重识别数据集上训练的深度神经网络来为每个检测提取外观特征，从而扩展了SORT。关联度量结合了运动（来自卡尔曼滤波器的马氏距离）和外观（深度特征的余弦距离），显著减少了遮挡期间的身份切换。",
    diagram: "",
    terms: ["object_detection", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 263,
    q: "What is an identity switch in multi-object tracking?",
    qChinese: "多目标跟踪中的身份切换是什么？",
    options: [
      "A) When a new object enters the scene and is assigned a new ID",
      "B) When the tracker correctly re-identifies an object after occlusion",
      "C) When a tracked object's ID changes incorrectly, often due to occlusion or crossing paths with another object",
      "D) When two different objects are intentionally merged into one track"
    ],
    optionsChinese: [
      "A) 当新目标进入场景并被分配新ID时",
      "B) 当跟踪器在遮挡后正确地重新识别目标时",
      "C) 当被跟踪目标的ID错误地改变时，通常由于遮挡或与另一目标交叉路径",
      "D) 当两个不同的目标被有意合并为一条轨迹时"
    ],
    answer: 2,
    explanation: "An identity switch occurs when a tracker incorrectly swaps the identity labels of objects, typically when objects occlude each other or move in close proximity. This is a critical error metric in MOT evaluation because maintaining consistent object identities across frames is essential for applications like surveillance and autonomous driving.",
    explanationChinese: "身份切换发生在跟踪器错误地交换目标身份标签时，通常在目标相互遮挡或近距离移动时发生。这是MOT评估中的关键错误指标，因为在帧之间保持一致的目标身份对于监控和自动驾驶等应用至关重要。",
    diagram: "",
    terms: ["object_detection", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 264,
    q: "In the tracking-by-detection paradigm, what is the two-step process?",
    qChinese: "在检测后跟踪范式中，两步过程是什么？",
    options: [
      "A) First estimate optical flow, then warp the previous frame's predictions",
      "B) First segment the entire scene, then classify each segment",
      "C) First detect objects independently in each frame, then associate detections across frames to form tracks",
      "D) First train a tracker on synthetic data, then fine-tune on real data"
    ],
    optionsChinese: [
      "A) 首先估计光流，然后变形前一帧的预测",
      "B) 首先分割整个场景，然后对每个片段进行分类",
      "C) 首先在每帧中独立检测目标，然后跨帧关联检测以形成轨迹",
      "D) 首先在合成数据上训练跟踪器，然后在真实数据上微调"
    ],
    answer: 2,
    explanation: "The tracking-by-detection paradigm first runs an object detector on each frame independently to obtain bounding boxes, then uses a data association algorithm (like the Hungarian algorithm) to link detections across consecutive frames into consistent trajectories. SORT and DeepSORT both follow this paradigm.",
    explanationChinese: "检测后跟踪范式首先在每帧上独立运行目标检测器以获得边界框，然后使用数据关联算法（如匈牙利算法）将连续帧之间的检测结果链接成一致的轨迹。SORT和DeepSORT都遵循这一范式。",
    diagram: "",
    terms: ["object_detection", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 265,
    q: "What evaluation metric captures both detection and tracking performance in multi-object tracking?",
    qChinese: "什么评估指标同时捕获多目标跟踪中的检测和跟踪性能？",
    options: [
      "A) HOTA (Higher Order Tracking Accuracy)",
      "B) Peak Signal-to-Noise Ratio (PSNR)",
      "C) Mean Average Precision (mAP)",
      "D) Frechet Inception Distance (FID)"
    ],
    optionsChinese: [
      "A) 高阶跟踪精度（HOTA）",
      "B) 峰值信噪比（PSNR）",
      "C) 平均精度均值（mAP）",
      "D) Frechet初始距离（FID）"
    ],
    answer: 0,
    explanation: "HOTA (Higher Order Tracking Accuracy) decomposes tracking performance into detection accuracy and association accuracy, then combines them via geometric mean. Unlike MOTA which is dominated by detection quality, HOTA provides a balanced evaluation of both detection and long-term association quality.",
    explanationChinese: "HOTA（高阶跟踪精度）将跟踪性能分解为检测精度和关联精度，然后通过几何均值将它们组合。与主要由检测质量主导的MOTA不同，HOTA提供了对检测和长期关联质量的平衡评估。",
    diagram: "",
    terms: ["object_detection", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 266,
    q: "In memory-based video object segmentation methods, what information is stored for future frames?",
    qChinese: "在基于记忆的视频目标分割方法中，为未来帧存储了什么信息？",
    options: [
      "A) Only the raw pixel values of the first frame",
      "B) The optical flow between the first and last frames only",
      "C) Feature embeddings and corresponding masks from previously segmented frames for matching",
      "D) A complete copy of the video at half resolution",
    ],
    optionsChinese: [
      "A) 仅第一帧的原始像素值",
      "B) 仅第一帧和最后一帧之间的光流",
      "C) 来自先前已分割帧的特征嵌入和对应掩码用于匹配",
      "D) 半分辨率的完整视频副本",
    ],
    answer: 2,
    explanation: "Memory-based VOS methods like STM (Space-Time Memory) store key-value pairs from previously processed frames, where keys are feature embeddings and values are associated mask information. For each new query frame, the model reads from this memory using attention mechanisms to produce accurate segmentation.",
    explanationChinese: "基于记忆的VOS方法（如STM，时空记忆）存储来自先前处理帧的键值对，其中键是特征嵌入，值是相关的掩码信息。对于每个新的查询帧，模型使用注意力机制从该记忆中读取以产生准确的分割。",
    diagram: "",
    terms: ["image_segmentation", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 267,
    q: "What is the goal of image inpainting?",
    qChinese: "图像修复的目标是什么？",
    options: [
      "A) To increase the resolution of an image",
      "B) To convert a color image to grayscale",
      "C) To fill in missing or corrupted regions of an image with plausible content",
      "D) To detect objects within an image"
    ],
    optionsChinese: [
      "A) 提高图像的分辨率",
      "B) 将彩色图像转换为灰度图像",
      "C) 用合理的内容填充图像中缺失或损坏的区域",
      "D) 检测图像中的目标"
    ],
    answer: 2,
    explanation: "Image inpainting aims to reconstruct missing or damaged regions in an image so that the result looks visually natural and coherent with the surrounding context. Applications include removing unwanted objects, restoring old photos, and filling in occluded regions.",
    explanationChinese: "图像修复旨在重建图像中缺失或损坏的区域，使结果在视觉上看起来自然且与周围上下文协调。应用包括删除不需要的目标、修复旧照片和填充被遮挡的区域。",
    diagram: "",
    terms: ["computer_vision", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 268,
    q: "Why are partial convolutions used in some deep learning-based inpainting methods?",
    qChinese: "为什么一些基于深度学习的修复方法使用部分卷积？",
    options: [
      "A) To speed up training by skipping pixels",
      "B) To reduce the number of model parameters",
      "C) To apply convolutions only at the image boundaries",
      "D) To ensure convolution operations only consider valid (non-masked) pixels, preventing color artifacts from invalid regions"
    ],
    optionsChinese: [
      "A) 通过跳过像素来加速训练",
      "B) 减少模型参数数量",
      "C) 仅在图像边界处应用卷积",
      "D) 确保卷积操作只考虑有效（非遮蔽）像素，防止来自无效区域的颜色伪影"
    ],
    answer: 3,
    explanation: "Partial convolutions condition the convolution operation on only the valid (non-hole) pixels by using a binary mask that is updated layer by layer. This prevents the network from being influenced by placeholder values in masked regions, resulting in cleaner inpainting without boundary artifacts.",
    explanationChinese: "部分卷积通过使用逐层更新的二值掩码，将卷积操作仅限制在有效（非空洞）像素上。这防止了网络受到遮蔽区域中占位符值的影响，从而产生更干净、没有边界伪影的修复结果。",
    diagram: "",
    terms: ["convolutional_network", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 269,
    q: "What is the role of adversarial training in image inpainting networks?",
    qChinese: "对抗训练在图像修复网络中的作用是什么？",
    options: [
      "A) It forces the inpainted regions to have higher resolution than the original",
      "B) It ensures the model always produces the exact ground-truth pixels",
      "C) It replaces the need for any reconstruction loss",
      "D) It encourages the generated content to be perceptually realistic by training a discriminator to distinguish real from inpainted images",
    ],
    optionsChinese: [
      "A) 它迫使修复区域具有比原始图像更高的分辨率",
      "B) 它确保模型始终产生精确的真实像素",
      "C) 它替代了任何重建损失的需要",
      "D) 它通过训练判别器区分真实图像和修复图像来鼓励生成内容在感知上逼真",
    ],
    answer: 3,
    explanation: "Adversarial training uses a discriminator network to distinguish between real and inpainted images, pushing the generator to produce more realistic and visually coherent content. This is especially important for inpainting because pixel-wise losses alone tend to produce blurry results that lack fine texture details.",
    explanationChinese: "对抗训练使用判别器网络来区分真实图像和修复图像，推动生成器产生更逼真和视觉上更协调的内容。这对于图像修复特别重要，因为仅使用逐像素损失往往产生模糊的结果，缺乏精细的纹理细节。",
    diagram: "",
    terms: ["deep_learning", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 270,
    q: "What is gated convolution and why was it proposed for image inpainting?",
    qChinese: "什么是门控卷积，为什么它被提出用于图像修复？",
    options: [
      "A) A convolution that only operates on edge pixels of the image",
      "B) A convolution with a learned soft gating mechanism that dynamically selects features for each spatial location and channel",
      "C) A convolution that uses a fixed binary mask throughout all layers",
      "D) A convolution that reduces the feature map dimensions by half"
    ],
    optionsChinese: [
      "A) 仅在图像边缘像素上操作的卷积",
      "B) 具有学习到的软门控机制的卷积，动态地为每个空间位置和通道选择特征",
      "C) 在所有层中使用固定二值掩码的卷积",
      "D) 将特征图维度减半的卷积"
    ],
    answer: 1,
    explanation: "Gated convolution improves upon partial convolution by learning a soft gating mechanism via a sigmoid function rather than using hard binary masks. This allows the network to dynamically decide for each pixel and channel how much information to use, providing more flexibility for handling irregular masks and user-guided inputs.",
    explanationChinese: "门控卷积通过sigmoid函数学习软门控机制来改进部分卷积，而不是使用硬二值掩码。这允许网络动态决定每个像素和通道使用多少信息，为处理不规则掩码和用户引导输入提供更大的灵活性。",
    diagram: "",
    terms: ["convolutional_network", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 271,
    q: "How do diffusion-based inpainting methods work at a high level?",
    qChinese: "基于扩散的修复方法在高层次上是如何工作的？",
    options: [
      "A) They iteratively denoise a noisy image conditioned on the known regions to generate plausible content for the masked area",
      "B) They use a lookup table of similar patches from a database",
      "C) They interpolate pixel values from the boundary of the missing region",
      "D) They directly predict the missing pixels in a single forward pass",
    ],
    optionsChinese: [
      "A) 它们迭代地对有噪图像进行去噪，以已知区域为条件，为遮蔽区域生成合理的内容",
      "B) 它们使用数据库中相似块的查找表",
      "C) 它们从缺失区域的边界插值像素值",
      "D) 它们在单次前向传播中直接预测缺失像素",
    ],
    answer: 0,
    explanation: "Diffusion-based inpainting methods start with noise in the masked region and iteratively refine it through a learned denoising process, conditioned on the unmasked portions of the image. This iterative approach allows the generation of highly detailed and diverse content while maintaining consistency with surrounding pixels.",
    explanationChinese: "基于扩散的修复方法从遮蔽区域的噪声开始，通过学习到的去噪过程迭代地细化它，以图像的未遮蔽部分为条件。这种迭代方法允许生成高度详细和多样的内容，同时保持与周围像素的一致性。",
    diagram: "",
    terms: ["deep_learning", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 272,
    q: "What is perceptual loss and why is it useful for image restoration tasks?",
    qChinese: "什么是感知损失，为什么它对图像恢复任务有用？",
    options: [
      "A) A loss computed on raw pixel differences, useful for preserving exact colors",
      "B) A loss computed on feature map differences from a pretrained network, useful for maintaining structural and textural similarity rather than pixel-exact reconstruction",
      "C) A loss that measures the classification accuracy of the restored image",
      "D) A loss based on human ratings collected through crowd-sourcing"
    ],
    optionsChinese: [
      "A) 基于原始像素差异计算的损失，用于保持精确颜色",
      "B) 基于预训练网络特征图差异计算的损失，用于保持结构和纹理相似性而非像素精确重建",
      "C) 衡量恢复图像分类准确度的损失",
      "D) 基于众包收集的人类评分的损失"
    ],
    answer: 1,
    explanation: "Perceptual loss computes the difference between feature representations extracted from a pretrained network (typically VGG) for the predicted and target images. It encourages the output to be perceptually similar to the ground truth rather than pixel-identical, resulting in sharper and more visually pleasing restorations.",
    explanationChinese: "感知损失计算从预训练网络（通常是VGG）提取的预测图像和目标图像的特征表示之间的差异。它鼓励输出在感知上与真实值相似而非像素相同，从而产生更锐利和视觉上更令人满意的恢复结果。",
    diagram: "",
    terms: ["deep_learning", "feature_extraction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 273,
    q: "What is the fundamental challenge that PointNet addresses in processing point cloud data?",
    qChinese: "PointNet在处理点云数据时解决了什么根本挑战？",
    options: [
      "A) Converting 2D images into 3D point clouds",
      "B) Handling the unordered and irregular nature of point sets, since points have no canonical order",
      "C) Reducing the number of points to improve rendering speed",
      "D) Aligning multiple point clouds from different sensors"
    ],
    optionsChinese: [
      "A) 将二维图像转换为三维点云",
      "B) 处理点集的无序和不规则性质，因为点没有标准顺序",
      "C) 减少点的数量以提高渲染速度",
      "D) 对齐来自不同传感器的多个点云"
    ],
    answer: 1,
    explanation: "Point clouds are unordered sets of 3D points with no inherent sequence or grid structure. PointNet addresses this by applying shared MLPs to each point independently and then using a symmetric aggregation function (max pooling) to produce a permutation-invariant global feature, ensuring the output is the same regardless of point ordering.",
    explanationChinese: "点云是没有固有序列或网格结构的三维点的无序集合。PointNet通过对每个点独立应用共享MLP，然后使用对称聚合函数（最大池化）产生置换不变的全局特征来解决此问题，确保无论点的排列顺序如何输出都相同。",
    diagram: "",
    terms: ["point_cloud", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 274,
    q: "How does PointNet achieve permutation invariance over the input point set?",
    qChinese: "PointNet如何实现对输入点集的置换不变性？",
    options: [
      "A) By sorting the points by their x-coordinate before processing",
      "B) By applying a recurrent neural network over the points in sequence",
      "C) By using a symmetric function (max pooling) to aggregate per-point features into a global representation",
      "D) By converting the point cloud to a voxel grid first",
    ],
    optionsChinese: [
      "A) 通过在处理前按x坐标对点进行排序",
      "B) 通过在点上按顺序应用循环神经网络",
      "C) 通过使用对称函数（最大池化）将逐点特征聚合为全局表示",
      "D) 通过首先将点云转换为体素网格",
    ],
    answer: 2,
    explanation: "PointNet applies shared MLPs to independently transform each point's features, then uses max pooling — a symmetric function — across all points to produce a global feature vector. Since max pooling gives the same result regardless of the order of its inputs, the network naturally achieves permutation invariance.",
    explanationChinese: "PointNet应用共享MLP独立地变换每个点的特征，然后在所有点上使用最大池化——一种对称函数——来产生全局特征向量。由于最大池化无论输入顺序如何都给出相同的结果，网络自然地实现了置换不变性。",
    diagram: "",
    terms: ["point_cloud", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 275,
    q: "What is the T-Net in PointNet used for?",
    qChinese: "PointNet中的T-Net用于什么？",
    options: [
      "A) Predicting spatial transformation matrices to align the input point cloud and features into a canonical space",
      "B) Generating new points to increase the density of the point cloud",
      "C) Performing temporal modeling for dynamic point clouds",
      "D) Converting point cloud data to mesh representation"
    ],
    optionsChinese: [
      "A) 预测空间变换矩阵以将输入点云和特征对齐到标准空间",
      "B) 生成新点以增加点云密度",
      "C) 对动态点云执行时间建模",
      "D) 将点云数据转换为网格表示"
    ],
    answer: 0,
    explanation: "The T-Net is a mini PointNet that learns to predict an affine transformation matrix to spatially align the input points (and later, intermediate features) into a canonical coordinate frame. This makes the network more robust to geometric transformations like rotation and translation of the input point cloud.",
    explanationChinese: "T-Net是一个迷你PointNet，学习预测仿射变换矩阵以将输入点（以及后来的中间特征）空间对齐到标准坐标系。这使得网络对输入点云的旋转和平移等几何变换更加鲁棒。",
    diagram: "",
    terms: ["point_cloud", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 276,
    q: "What limitation of PointNet does PointNet++ address?",
    qChinese: "PointNet++解决了PointNet的什么局限性？",
    options: [
      "A) PointNet does not capture local geometric structures due to its global aggregation, which PointNet++ addresses with hierarchical feature learning",
      "B) PointNet is too slow for real-time applications",
      "C) PointNet cannot process colored point clouds",
      "D) PointNet cannot handle more than 100 points"
    ],
    optionsChinese: [
      "A) PointNet由于全局聚合而无法捕获局部几何结构，PointNet++通过分层特征学习来解决此问题",
      "B) PointNet对于实时应用来说太慢了",
      "C) PointNet无法处理彩色点云",
      "D) PointNet无法处理超过100个点"
    ],
    answer: 0,
    explanation: "PointNet applies shared MLPs to each point and then global max pooling, missing local geometric patterns. PointNet++ introduces a hierarchical structure that recursively applies PointNet on nested local neighborhoods of increasing scale, similar to how CNNs build hierarchical features through local convolutions.",
    explanationChinese: "PointNet对每个点应用共享MLP然后进行全局最大池化，错过了局部几何模式。PointNet++引入了分层结构，在不断增大尺度的嵌套局部邻域上递归应用PointNet，类似于CNN通过局部卷积构建分层特征。",
    diagram: "",
    terms: ["point_cloud", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 277,
    q: "What is the set abstraction layer in PointNet++?",
    qChinese: "PointNet++中的集合抽象层是什么？",
    options: [
      "A) A layer that randomly removes points from the cloud",
      "B) A fully connected layer that processes all points simultaneously",
      "C) A layer that samples centroids, groups neighboring points, and applies a mini-PointNet to extract local features",
      "D) A layer that converts point clouds to images for 2D processing"
    ],
    optionsChinese: [
      "A) 从点云中随机移除点的层",
      "B) 同时处理所有点的全连接层",
      "C) 采样中心点、分组相邻点并应用迷你PointNet提取局部特征的层",
      "D) 将点云转换为图像以进行二维处理的层"
    ],
    answer: 2,
    explanation: "The set abstraction layer in PointNet++ has three steps: sampling (selecting a subset of centroids using farthest point sampling), grouping (finding neighboring points within a radius for each centroid), and applying a PointNet to each local group to extract local features. This creates a hierarchical representation of the point cloud.",
    explanationChinese: "PointNet++中的集合抽象层有三个步骤：采样（使用最远点采样选择中心点子集）、分组（为每个中心点查找半径内的相邻点）以及对每个局部组应用PointNet以提取局部特征。这创建了点云的分层表示。",
    diagram: "",
    terms: ["point_cloud", "feature_extraction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 278,
    q: "What is farthest point sampling (FPS) used for in PointNet++?",
    qChinese: "最远点采样（FPS）在PointNet++中用于什么？",
    options: [
      "A) To remove outlier points from noisy data",
      "B) To find the nearest neighbor for each point",
      "C) To compute the surface normals of the point cloud",
      "D) To select a representative subset of points that covers the entire point cloud evenly as centroids for local grouping",
    ],
    optionsChinese: [
      "A) 从噪声数据中移除离群点",
      "B) 为每个点查找最近邻",
      "C) 计算点云的表面法线",
      "D) 选择均匀覆盖整个点云的代表性点子集作为局部分组的中心点",
    ],
    answer: 3,
    explanation: "Farthest point sampling iteratively selects points that are maximally distant from all previously selected points. This ensures that the sampled centroids provide good spatial coverage of the entire point cloud, which is important for building local neighborhoods that capture the complete geometry of the scene.",
    explanationChinese: "最远点采样迭代地选择与所有先前选择的点最大距离的点。这确保采样的中心点提供整个点云的良好空间覆盖，这对于构建捕获场景完整几何形状的局部邻域很重要。",
    diagram: "",
    terms: ["point_cloud", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 279,
    q: "How does PointNet++ handle point clouds with non-uniform density?",
    qChinese: "PointNet++如何处理密度不均匀的点云？",
    options: [
      "A) It only processes the densest regions of the point cloud",
      "B) It discards sparse regions entirely",
      "C) It requires preprocessing to make all regions equally dense",
      "D) It uses multi-scale grouping (MSG) or multi-resolution grouping (MRG) to adapt to varying point densities",
    ],
    optionsChinese: [
      "A) 它只处理点云最密集的区域",
      "B) 它完全丢弃稀疏区域",
      "C) 它需要预处理使所有区域密度相等",
      "D) 它使用多尺度分组（MSG）或多分辨率分组（MRG）来适应不同的点密度",
    ],
    answer: 3,
    explanation: "PointNet++ proposes multi-scale grouping (MSG), which applies PointNet with multiple radius scales at each centroid, and multi-resolution grouping (MRG), which combines features from the current level and a coarser level. Both strategies help the network adapt to varying point densities across different regions of the point cloud.",
    explanationChinese: "PointNet++提出了多尺度分组（MSG），它在每个中心点以多个半径尺度应用PointNet，以及多分辨率分组（MRG），它结合了当前层级和更粗层级的特征。两种策略都帮助网络适应点云不同区域的不同点密度。",
    diagram: "",
    terms: ["point_cloud", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 280,
    q: "What does image denoising aim to achieve?",
    qChinese: "图像去噪旨在实现什么？",
    options: [
      "A) Removing unwanted noise from an image while preserving important details and structures",
      "B) Adding artistic noise for stylistic effects",
      "C) Increasing the image resolution by a factor of four",
      "D) Converting the image from one color space to another"
    ],
    optionsChinese: [
      "A) 从图像中去除不需要的噪声，同时保留重要细节和结构",
      "B) 为了艺术风格效果添加噪声",
      "C) 将图像分辨率提高四倍",
      "D) 将图像从一个颜色空间转换到另一个"
    ],
    answer: 0,
    explanation: "Image denoising aims to recover a clean image from a noisy observation caused by sensor limitations, low light, or transmission errors. The challenge lies in removing noise while preserving edges, textures, and fine details, which requires the model to distinguish between signal and noise patterns.",
    explanationChinese: "图像去噪旨在从由传感器限制、低光或传输错误引起的噪声观测中恢复干净的图像。挑战在于去除噪声的同时保留边缘、纹理和精细细节，这要求模型区分信号和噪声模式。",
    diagram: "",
    terms: ["computer_vision", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 281,
    q: "What is the key idea behind DnCNN for image denoising?",
    qChinese: "DnCNN用于图像去噪的关键思想是什么？",
    options: [
      "A) Training a deep CNN with residual learning to predict the noise component rather than the clean image directly",
      "B) Applying a fixed Gaussian filter to smooth the image",
      "C) Using a GAN to generate a clean version of the image",
      "D) Using a dictionary of clean image patches for nearest-neighbor matching"
    ],
    optionsChinese: [
      "A) 训练具有残差学习的深度CNN来预测噪声分量而非直接预测干净图像",
      "B) 应用固定的高斯滤波器来平滑图像",
      "C) 使用GAN生成图像的干净版本",
      "D) 使用干净图像块的字典进行最近邻匹配"
    ],
    answer: 0,
    explanation: "DnCNN uses residual learning where the network predicts the noise residual (the difference between noisy and clean images) rather than the clean image directly. The clean image is then obtained by subtracting the predicted noise from the input. Batch normalization and deep architectures help the model learn effective noise removal across different noise levels.",
    explanationChinese: "DnCNN使用残差学习，网络预测噪声残差（噪声图像与干净图像的差异）而不是直接预测干净图像。然后通过从输入中减去预测的噪声来获得干净图像。批量归一化和深度架构帮助模型在不同噪声水平上学习有效的噪声去除。",
    diagram: "",
    terms: ["convolutional_network", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 282,
    q: "What causes motion blur in images and how is deblurring typically formulated?",
    qChinese: "什么导致图像中的运动模糊，去模糊通常如何表述？",
    options: [
      "A) Sensor overheating; formulated as a classification problem",
      "B) Relative motion between camera and scene during exposure; formulated as estimating and inverting the blur kernel or directly mapping blurry to sharp images",
      "C) Incorrect white balance; formulated as a color correction problem",
      "D) Low image resolution; formulated as super-resolution",
    ],
    optionsChinese: [
      "A) 传感器过热；表述为分类问题",
      "B) 曝光期间相机与场景之间的相对运动；表述为估计和反转模糊核或直接将模糊图像映射到清晰图像",
      "C) 错误的白平衡；表述为颜色校正问题",
      "D) 低图像分辨率；表述为超分辨率",
    ],
    answer: 1,
    explanation: "Motion blur occurs when there is relative movement between the camera and scene during the exposure time, causing light from the same point to spread across multiple pixels. Deblurring can be formulated as blind deconvolution (estimating the blur kernel) or as a direct end-to-end mapping from blurry to sharp images using deep networks.",
    explanationChinese: "运动模糊发生在曝光时间内相机与场景之间有相对运动时，导致来自同一点的光线扩散到多个像素。去模糊可以表述为盲反卷积（估计模糊核）或使用深度网络从模糊到清晰图像的直接端到端映射。",
    diagram: "",
    terms: ["computer_vision", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 283,
    q: "What is High Dynamic Range (HDR) imaging and why is it needed?",
    qChinese: "什么是高动态范围（HDR）成像，为什么需要它？",
    options: [
      "A) A technique to add color to grayscale images; needed for historical photos",
      "B) A technique to increase image resolution; needed for printing",
      "C) A technique to capture or reconstruct scenes with a wider range of luminance levels than standard sensors can capture in a single exposure",
      "D) A technique to compress image file sizes; needed for storage"
    ],
    optionsChinese: [
      "A) 一种为灰度图像添加颜色的技术；用于历史照片",
      "B) 一种提高图像分辨率的技术；用于打印",
      "C) 一种捕获或重建比标准传感器单次曝光能捕获的更宽亮度范围场景的技术",
      "D) 一种压缩图像文件大小的技术；用于存储"
    ],
    answer: 2,
    explanation: "HDR imaging captures or reconstructs a scene with luminance values spanning a much wider range than a standard 8-bit image (which is limited to 256 levels). This is needed because real-world scenes can have extreme variations between bright highlights and dark shadows that a single standard exposure cannot represent without losing detail.",
    explanationChinese: "HDR成像捕获或重建亮度值范围比标准8位图像（限制为256级）宽得多的场景。这是必要的，因为真实世界场景在明亮高光和暗阴影之间可能有极大的变化，单次标准曝光无法在不丢失细节的情况下表示。",
    diagram: "",
    terms: ["computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 284,
    q: "What is tone mapping in the context of HDR imaging?",
    qChinese: "在HDR成像的背景下，什么是色调映射？",
    options: [
      "C) The process of compressing the wide luminance range of an HDR image to the displayable range of standard monitors while preserving visual details",
      "B) The process of converting color images to grayscale",
      "A) The process of adding noise to simulate analog film",
      "D) The process of upsampling images to 4K resolution"
    ],
    optionsChinese: [
      "C) 将HDR图像的宽亮度范围压缩到标准显示器可显示范围同时保留视觉细节的过程",
      "B) 将彩色图像转换为灰度图像的过程",
      "A) 添加噪声以模拟模拟胶片的过程",
      "D) 将图像上采样到4K分辨率的过程"
    ],
    answer: 0,
    explanation: "Tone mapping converts an HDR image with a very wide luminance range into a lower dynamic range image suitable for display on standard monitors. The goal is to preserve the appearance of the scene — maintaining visible detail in both highlights and shadows — despite the limited display range.",
    explanationChinese: "色调映射将具有非常宽亮度范围的HDR图像转换为适合在标准显示器上显示的低动态范围图像。目标是保留场景的外观——在高光和阴影中都保持可见的细节——尽管显示范围有限。",
    diagram: "",
    terms: ["computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 285,
    q: "What is the U-Net architecture and why is it widely used in low-level vision tasks?",
    qChinese: "什么是U-Net架构，为什么它在底层视觉任务中被广泛使用？",
    options: [
      "A) A network without any downsampling; widely used because it avoids information loss",
      "B) A recurrent network for sequential processing; widely used in video analysis",
      "A) A single-branch classification network; widely used because it is the fastest",
      "D) An encoder-decoder architecture with skip connections that preserves fine spatial details; widely used because it effectively combines context with localization",
    ],
    optionsChinese: [
      "A) 没有任何下采样的网络；因为避免信息损失而被广泛使用",
      "B) 用于序列处理的循环网络；在视频分析中广泛使用",
      "A) 单分支分类网络；因为最快而被广泛使用",
      "D) 带有跳跃连接的编码器-解码器架构，保留精细空间细节；因为有效地结合了上下文和定位而被广泛使用",
    ],
    answer: 3,
    explanation: "U-Net features a contracting encoder that captures context through downsampling and an expansive decoder that restores spatial resolution. Skip connections between corresponding encoder and decoder levels transfer fine-grained spatial information, which is critical for pixel-level tasks like denoising, deblurring, and segmentation.",
    explanationChinese: "U-Net具有通过下采样捕获上下文的收缩编码器和恢复空间分辨率的扩展解码器。对应编码器和解码器层级之间的跳跃连接传递细粒度空间信息，这对于去噪、去模糊和分割等像素级任务至关重要。",
    diagram: "",
    terms: ["convolutional_network", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 286,
    q: "What is the difference between blind and non-blind image deblurring?",
    qChinese: "盲图像去模糊和非盲图像去模糊有什么区别？",
    options: [
      "A) Blind deblurring uses color images while non-blind uses grayscale",
      "B) In blind deblurring the blur kernel is unknown and must be estimated, while in non-blind deblurring the blur kernel is assumed known",
      "C) Blind deblurring removes noise while non-blind removes blur",
      "D) There is no practical difference between them"
    ],
    optionsChinese: [
      "A) 盲去模糊使用彩色图像而非盲使用灰度图像",
      "B) 在盲去模糊中模糊核是未知的必须被估计，而在非盲去模糊中模糊核被假定已知",
      "C) 盲去模糊去除噪声而非盲去除模糊",
      "D) 它们之间没有实际区别"
    ],
    answer: 1,
    explanation: "In non-blind deblurring, the blur kernel (point spread function) is known and provided as input, simplifying the problem to deconvolution. In blind deblurring, both the sharp image and the blur kernel are unknown, making it a much more challenging ill-posed problem that requires jointly estimating both components.",
    explanationChinese: "在非盲去模糊中，模糊核（点扩散函数）是已知的并作为输入提供，将问题简化为反卷积。在盲去模糊中，清晰图像和模糊核都是未知的，使其成为一个更具挑战性的不适定问题，需要联合估计两个分量。",
    diagram: "",
    terms: ["computer_vision", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 287,
    q: "What is CLIP (Contrastive Language-Image Pretraining) and what makes it novel?",
    qChinese: "什么是CLIP（对比语言-图像预训练），它有什么新颖之处？",
    options: [
      "C) A model that jointly trains an image encoder and text encoder using contrastive learning on large-scale image-text pairs from the internet",
      "B) A model that generates images from text descriptions using diffusion",
      "A) A model trained only on ImageNet labels for image classification",
      "D) A model that performs video captioning using recurrent networks"
    ],
    optionsChinese: [
      "C) 使用对比学习在来自互联网的大规模图像-文本对上联合训练图像编码器和文本编码器的模型",
      "B) 使用扩散从文本描述生成图像的模型",
      "A) 仅在ImageNet标签上训练的图像分类模型",
      "D) 使用循环网络执行视频字幕的模型"
    ],
    answer: 0,
    explanation: "CLIP trains a vision encoder and a language encoder jointly by aligning matching image-text pairs in a shared embedding space using contrastive learning on 400 million image-text pairs. This enables powerful zero-shot transfer to downstream tasks by expressing class labels as text prompts without any task-specific training.",
    explanationChinese: "CLIP通过在4亿个图像-文本对上使用对比学习，在共享嵌入空间中对齐匹配的图像-文本对，联合训练视觉编码器和语言编码器。这使得通过将类别标签表达为文本提示，无需任何任务特定训练即可实现强大的零样本迁移到下游任务。",
    diagram: "",
    terms: ["deep_learning", "transfer_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 288,
    q: "How does CLIP perform zero-shot image classification?",
    qChinese: "CLIP如何执行零样本图像分类？",
    options: [
      "A) By fine-tuning on labeled examples from the target dataset",
      "B) By using a k-nearest-neighbor classifier on stored image features",
      "C) By encoding class names as text prompts and selecting the class whose text embedding has highest similarity to the image embedding",
      "D) By generating images for each class and comparing them to the input"
    ],
    optionsChinese: [
      "A) 通过在目标数据集的标注样本上微调",
      "B) 通过在存储的图像特征上使用k近邻分类器",
      "C) 通过将类别名称编码为文本提示并选择其文本嵌入与图像嵌入相似度最高的类别",
      "D) 通过为每个类别生成图像并与输入比较"
    ],
    answer: 2,
    explanation: "For zero-shot classification, CLIP encodes candidate class labels as text (e.g., 'a photo of a cat') using the text encoder and computes the cosine similarity between these text embeddings and the image embedding. The class with the highest similarity score is selected as the prediction, requiring no training examples from the target dataset.",
    explanationChinese: "对于零样本分类，CLIP使用文本编码器将候选类别标签编码为文本（例如「一张猫的照片」），并计算这些文本嵌入与图像嵌入之间的余弦相似度。选择相似度分数最高的类别作为预测，不需要来自目标数据集的训练样本。",
    diagram: "",
    terms: ["deep_learning", "transfer_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 289,
    q: "What is Flamingo and what problem does it address in vision-language modeling?",
    qChinese: "什么是Flamingo，它在视觉-语言建模中解决了什么问题？",
    options: [
      "A) A model that only generates image captions without understanding visual questions",
      "B) A visual language model that can handle interleaved image-text inputs and perform few-shot learning on vision-language tasks",
      "A) A model for image super-resolution using text descriptions",
      "D) A text-only language model with no vision capabilities"
    ],
    optionsChinese: [
      "A) 仅生成图像描述而不理解视觉问题的模型",
      "B) 一种能处理交错图像-文本输入并在视觉-语言任务上执行少样本学习的视觉语言模型",
      "A) 使用文本描述进行图像超分辨率的模型",
      "D) 没有视觉能力的纯文本语言模型"
    ],
    answer: 1,
    explanation: "Flamingo is a visual language model from DeepMind that bridges a frozen vision encoder and a frozen language model using gated cross-attention layers. It can process sequences of interleaved images and text, enabling strong few-shot performance on tasks like visual question answering, captioning, and classification with just a few input-output examples.",
    explanationChinese: "Flamingo是DeepMind的视觉语言模型，使用门控交叉注意力层连接冻结的视觉编码器和冻结的语言模型。它可以处理交错的图像和文本序列，仅通过几个输入-输出示例就能在视觉问答、描述和分类等任务上实现强大的少样本性能。",
    diagram: "",
    terms: ["deep_learning", "transfer_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 290,
    q: "What is the contrastive loss function used in CLIP training?",
    qChinese: "CLIP训练中使用的对比损失函数是什么？",
    options: [
      "A) A symmetric cross-entropy loss that maximizes similarity between matching image-text pairs and minimizes it for non-matching pairs in a batch",
      "B) Mean squared error between image and text features",
      "C) Triplet loss with hard negative mining",
      "D) Standard cross-entropy loss over fixed class labels",
    ],
    optionsChinese: [
      "A) 对称交叉熵损失，最大化批次中匹配图像-文本对的相似度，最小化不匹配对的相似度",
      "B) 图像和文本特征之间的均方误差",
      "C) 带有困难负采样的三元组损失",
      "D) 固定类别标签上的标准交叉熵损失",
    ],
    answer: 0,
    explanation: "CLIP uses a symmetric cross-entropy loss (InfoNCE-style) over cosine similarities between all image-text pairs in a batch. Each image should have maximum similarity with its paired text and minimum similarity with all other texts in the batch, and vice versa, creating a bidirectional contrastive objective.",
    explanationChinese: "CLIP在批次中所有图像-文本对的余弦相似度上使用对称交叉熵损失（InfoNCE风格）。每张图像应与其配对文本具有最大相似度，与批次中所有其他文本具有最小相似度，反之亦然，创建双向对比目标。",
    diagram: "",
    terms: ["deep_learning", "self_supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 291,
    q: "What are the gated cross-attention layers in Flamingo used for?",
    qChinese: "Flamingo中的门控交叉注意力层用于什么？",
    options: [
      "A) To train the vision encoder from scratch",
      "B) To perform object detection on input images",
      "C) To replace the self-attention in the language model entirely",
      "D) To inject visual information from the frozen vision encoder into the frozen language model at multiple layers",
    ],
    optionsChinese: [
      "A) 从头开始训练视觉编码器",
      "B) 对输入图像执行目标检测",
      "C) 完全替代语言模型中的自注意力",
      "D) 在多个层将冻结视觉编码器的视觉信息注入冻结的语言模型中",
    ],
    answer: 3,
    explanation: "Flamingo's gated cross-attention layers are interleaved between the frozen language model's existing layers. They allow the language model to attend to visual features from the vision encoder, with a learnable gating mechanism initialized near zero so the model starts close to the original language model behavior and gradually learns to incorporate visual information.",
    explanationChinese: "Flamingo的门控交叉注意力层交错在冻结语言模型的现有层之间。它们允许语言模型关注来自视觉编码器的视觉特征，具有初始化接近零的可学习门控机制，使模型从接近原始语言模型行为开始，逐渐学习融合视觉信息。",
    diagram: "",
    terms: ["deep_learning", "transfer_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 292,
    q: "What advantage does CLIP's open-vocabulary approach offer over traditional closed-set image classifiers?",
    qChinese: "CLIP的开放词汇方法相比传统封闭集图像分类器有什么优势？",
    options: [
      "A) It always achieves higher accuracy on ImageNet",
      "B) It requires less computational power for inference",
      "C) It can only work with a fixed set of 1000 classes",
      "D) It can recognize categories not seen during training by leveraging natural language descriptions, enabling flexible zero-shot generalization"
    ],
    optionsChinese: [
      "A) 它在ImageNet上总是获得更高的准确率",
      "B) 它推理时需要更少的计算能力",
      "C) 它只能使用固定的1000个类别",
      "D) 它可以利用自然语言描述识别训练期间未见过的类别，实现灵活的零样本泛化"
    ],
    answer: 3,
    explanation: "Unlike classifiers trained on fixed label sets, CLIP can generalize to new categories at test time by simply providing new text descriptions. This open-vocabulary capability means the model is not limited to predefined classes, making it highly flexible for diverse real-world applications where new categories may emerge.",
    explanationChinese: "与在固定标签集上训练的分类器不同，CLIP可以通过简单地提供新的文本描述在测试时泛化到新类别。这种开放词汇能力意味着模型不受预定义类别的限制，使其在可能出现新类别的多样化现实应用中具有高度灵活性。",
    diagram: "",
    terms: ["transfer_learning", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 293,
    q: "How does prompt engineering affect CLIP's zero-shot classification performance?",
    qChinese: "提示工程如何影响CLIP的零样本分类性能？",
    options: [
      "A) It has no effect since CLIP ignores text input during classification",
      "B) Using well-designed prompt templates like 'a photo of a {class}' instead of just the class name can significantly improve accuracy by providing better context",
      "C) It only matters when CLIP is fine-tuned on labeled data",
      "D) Prompt engineering reduces CLIP's inference speed"
    ],
    optionsChinese: [
      "A) 没有影响，因为CLIP在分类时忽略文本输入",
      "B) 使用精心设计的提示模板（如「一张{类别}的照片」）而不仅仅是类别名称可以通过提供更好的上下文显著提高准确率",
      "C) 仅在CLIP在标注数据上微调时才有影响",
      "D) 提示工程降低了CLIP的推理速度"
    ],
    answer: 1,
    explanation: "The phrasing of text prompts significantly impacts CLIP's zero-shot performance. Templates like 'a photo of a {class}' bridge the gap between the training distribution (natural image-text pairs from the web) and simple class names. Prompt ensembling across multiple templates further improves performance by averaging predictions.",
    explanationChinese: "文本提示的措辞显著影响CLIP的零样本性能。像「一张{类别}的照片」这样的模板弥合了训练分布（来自网络的自然图像-文本对）和简单类别名称之间的差距。跨多个模板的提示集成通过平均预测进一步提高性能。",
    diagram: "",
    terms: ["transfer_learning", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 294,
    q: "What is domain adaptation in computer vision?",
    qChinese: "计算机视觉中的域适应是什么？",
    options: [
      "A) Training a model from scratch on a new dataset",
      "B) Converting images from one file format to another",
      "C) Adapting a model trained on a source domain to perform well on a different target domain that has a different data distribution",
      "D) Augmenting the training dataset with more labeled examples from the same domain"
    ],
    optionsChinese: [
      "A) 在新数据集上从头训练模型",
      "B) 将图像从一种文件格式转换为另一种",
      "C) 使在源域上训练的模型适应于在具有不同数据分布的目标域上表现良好",
      "D) 用来自同一域的更多标注样本增强训练数据集"
    ],
    answer: 2,
    explanation: "Domain adaptation addresses the performance degradation that occurs when a model trained on one domain (source) is applied to a different domain (target) with a distribution shift. The goal is to bridge the domain gap so that knowledge learned from the source transfers effectively to the target, often with limited or no target labels.",
    explanationChinese: "域适应解决了当在一个域（源域）上训练的模型应用于具有分布偏移的不同域（目标域）时出现的性能下降问题。目标是弥合域差距，使从源域学到的知识有效地迁移到目标域，通常目标域标签有限或没有。",
    diagram: "",
    terms: ["transfer_learning", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 295,
    q: "What is the difference between unsupervised and semi-supervised domain adaptation?",
    qChinese: "无监督域适应和半监督域适应有什么区别？",
    options: [
      "A) Unsupervised uses pretrained models while semi-supervised trains from scratch",
      "B) Unsupervised works on images and semi-supervised on text",
      "C) In unsupervised domain adaptation no target labels are available, while in semi-supervised a small number of target labels are provided",
      "D) They are the same approach with different names"
    ],
    optionsChinese: [
      "A) 无监督使用预训练模型而半监督从头训练",
      "B) 无监督适用于图像，半监督适用于文本",
      "C) 在无监督域适应中没有目标标签可用，而在半监督中提供少量目标标签",
      "D) 它们是同一方法的不同名称"
    ],
    answer: 2,
    explanation: "Unsupervised domain adaptation (UDA) assumes labeled source data and completely unlabeled target data, requiring the model to transfer knowledge without any target supervision. Semi-supervised domain adaptation (SSDA) assumes a small set of labeled target examples in addition to unlabeled target data, which can guide adaptation more effectively.",
    explanationChinese: "无监督域适应（UDA）假设有标注的源数据和完全无标注的目标数据，要求模型在没有任何目标监督的情况下迁移知识。半监督域适应（SSDA）假设除了无标注目标数据外还有少量标注目标样本，可以更有效地指导适应。",
    diagram: "",
    terms: ["transfer_learning", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 296,
    q: "How does adversarial domain adaptation work?",
    qChinese: "对抗域适应是如何工作的？",
    options: [
      "A) By adding random noise to all training images",
      "B) By training a domain discriminator to distinguish source from target features and a feature extractor to fool it, learning domain-invariant representations",
      "C) By training separate models for source and target domains",
      "D) By manually selecting which source examples are most similar to target data"
    ],
    optionsChinese: [
      "A) 通过向所有训练图像添加随机噪声",
      "B) 通过训练域判别器区分源和目标特征，以及训练特征提取器欺骗它，学习域不变表示",
      "C) 通过为源域和目标域训练单独的模型",
      "D) 通过手动选择哪些源样本与目标数据最相似"
    ],
    answer: 1,
    explanation: "Adversarial domain adaptation, inspired by GANs, trains a domain discriminator to classify whether features come from the source or target domain, while the feature extractor is trained to confuse this discriminator via a gradient reversal layer. This min-max game encourages the feature extractor to learn domain-invariant representations.",
    explanationChinese: "对抗域适应受GAN启发，训练域判别器分类特征来自源域还是目标域，同时特征提取器通过梯度反转层训练以迷惑该判别器。这种最小-最大博弈鼓励特征提取器学习域不变表示。",
    diagram: "",
    terms: ["transfer_learning", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 297,
    q: "What is the domain gap problem in the context of synthetic-to-real transfer?",
    qChinese: "在合成到真实迁移的背景下，什么是域差距问题？",
    options: [
      "A) The inability of GPUs to render synthetic images",
      "C) The performance drop when a model trained on synthetic (rendered) data is applied to real-world images due to differences in appearance, texture, and lighting",
      "B) The difference in image resolution between synthetic and real datasets",
      "D) The lack of class labels in synthetic datasets"
    ],
    optionsChinese: [
      "A) GPU无法渲染合成图像",
      "C) 由于外观、纹理和光照的差异，在合成（渲染）数据上训练的模型应用于真实世界图像时的性能下降",
      "B) 合成和真实数据集之间图像分辨率的差异",
      "D) 合成数据集中缺乏类别标签"
    ],
    answer: 1,
    explanation: "Synthetic data offers unlimited labeled examples but differs from real images in texture, lighting, material properties, and other visual characteristics. This domain gap causes models trained purely on synthetic data to perform poorly on real images, motivating domain adaptation techniques to bridge this distribution shift.",
    explanationChinese: "合成数据提供无限的标注样本，但在纹理、光照、材质属性和其他视觉特征方面与真实图像不同。这种域差距导致纯粹在合成数据上训练的模型在真实图像上表现不佳，推动了域适应技术来弥合这种分布偏移。",
    diagram: "",
    terms: ["transfer_learning", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 298,
    q: "What is Maximum Mean Discrepancy (MMD) used for in domain adaptation?",
    qChinese: "最大平均差异（MMD）在域适应中用于什么？",
    options: [
      "A) Measuring the distributional distance between source and target feature representations in a kernel space to align them",
      "B) Measuring the classification accuracy on the target domain",
      "C) Computing the pixel-level difference between source and target images",
      "D) Selecting the best learning rate for training"
    ],
    optionsChinese: [
      "A) 在核空间中测量源和目标特征表示之间的分布距离以对齐它们",
      "B) 衡量目标域上的分类准确率",
      "C) 计算源和目标图像之间的像素级差异",
      "D) 选择训练的最佳学习率"
    ],
    answer: 0,
    explanation: "MMD is a statistical measure of the distance between two probability distributions mapped into a reproducing kernel Hilbert space. In domain adaptation, minimizing MMD between source and target feature distributions encourages the network to learn representations where both domains appear similar, facilitating knowledge transfer.",
    explanationChinese: "MMD是映射到再生核希尔伯特空间中两个概率分布之间距离的统计度量。在域适应中，最小化源和目标特征分布之间的MMD鼓励网络学习两个域看起来相似的表示，从而促进知识迁移。",
    diagram: "",
    terms: ["transfer_learning", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 299,
    q: "What is source-free domain adaptation?",
    qChinese: "什么是无源域适应？",
    options: [
      "A) Domain adaptation that uses only target domain data",
      "B) Domain adaptation that adapts a pretrained source model to the target domain without access to original source data",
      "D) Domain adaptation where the source and target domains are identical",
      "D) Domain adaptation that does not use any deep learning",
    ],
    optionsChinese: [
      "A) 仅使用目标域数据的域适应",
      "B) 在无法访问原始源数据的情况下将预训练源模型适应到目标域的域适应",
      "D) 源域和目标域相同的域适应",
      "D) 不使用任何深度学习的域适应",
    ],
    answer: 1,
    explanation: "Source-free domain adaptation addresses scenarios where the original source data is unavailable due to privacy, storage, or licensing constraints. Only the pretrained source model and unlabeled target data are available. Methods typically use self-training, pseudo-labeling, or model adaptation techniques to adjust the model to the target distribution.",
    explanationChinese: "无源域适应解决了由于隐私、存储或许可限制而无法获得原始源数据的场景。只有预训练的源模型和无标注的目标数据可用。方法通常使用自训练、伪标签或模型适应技术来将模型调整到目标分布。",
    diagram: "",
    terms: ["transfer_learning", "computer_vision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 300,
    q: "What is the gradient reversal layer (GRL) and how is it used in domain adaptation?",
    qChinese: "什么是梯度反转层（GRL），它在域适应中如何使用？",
    options: [
      "A) A layer that acts as an identity function during forward pass but negates gradients during backpropagation, enabling adversarial training of domain-invariant features",
      "B) A layer that doubles the gradient magnitude during backpropagation",
      "C) A layer that reverses the order of input features",
      "D) A layer that stops all gradient flow to prevent overfitting"
    ],
    optionsChinese: [
      "A) 在前向传播期间作为恒等函数但在反向传播期间取反梯度的层，使域不变特征的对抗训练成为可能",
      "B) 在反向传播期间将梯度幅度加倍的层",
      "C) 反转输入特征顺序的层",
      "D) 停止所有梯度流以防止过拟合的层"
    ],
    answer: 0,
    explanation: "The gradient reversal layer (GRL), introduced in DANN (Domain-Adversarial Neural Networks), passes input through unchanged during forward propagation but multiplies gradients by a negative constant during backpropagation. This causes the feature extractor to maximize the domain discriminator's loss, learning features that are indistinguishable between source and target domains.",
    explanationChinese: "梯度反转层（GRL）在DANN（域对抗神经网络）中引入，在前向传播期间不改变地传递输入，但在反向传播期间将梯度乘以负常数。这导致特征提取器最大化域判别器的损失，学习在源域和目标域之间不可区分的特征。",
    diagram: "",
    terms: ["transfer_learning", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
];
