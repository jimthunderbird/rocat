const questionsDL = [
  {
    id: 1,
    q: "What is a perceptron in the context of neural networks?",
    qChinese: "在神经网络中，什么是感知器？",
    options: [
      "A) A type of convolutional filter used in image processing",
      "B) A multi-layer network with backpropagation",
      "C) A single-layer linear classifier that computes a weighted sum of inputs and applies a threshold",
      "D) A recurrent unit that stores sequential information"
    ],
    optionsChinese: [
      "A) 一种用于图像处理的卷积滤波器",
      "B) 一种具有反向传播的多层网络",
      "C) 一种单层线性分类器，计算输入的加权和并应用阈值",
      "D) 一种存储序列信息的循环单元"
    ],
    answer: 2,
    explanation: "A perceptron is the simplest form of a neural network. It takes multiple inputs, multiplies each by a weight, sums them with a bias, and passes the result through a step function. It can only solve linearly separable problems, which led to the development of multi-layer networks.",
    explanationChinese: "感知器是最简单的神经网络形式。它接受多个输入，将每个输入乘以权重，加上偏置求和，然后通过阶跃函数传递结果。它只能解决线性可分问题，这推动了多层网络的发展。",
    diagram: "",
    terms: ["perceptron", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 2,
    q: "Which activation function outputs values in the range (0, 1)?",
    qChinese: "哪个激活函数的输出值在(0, 1)范围内？",
    options: [
      "A) Sigmoid",
      "B) Tanh",
      "C) ReLU",
      "D) Leaky ReLU"
    ],
    optionsChinese: [
      "A) Sigmoid",
      "B) Tanh",
      "C) ReLU",
      "D) Leaky ReLU"
    ],
    answer: 0,
    explanation: "The sigmoid function sigma(z) = 1/(1+e^(-z)) maps any real number to the interval (0, 1). This makes it useful for binary classification outputs and gating mechanisms. However, it suffers from vanishing gradients for large or small inputs, which can slow training in deep networks.",
    explanationChinese: "Sigmoid函数sigma(z) = 1/(1+e^(-z))将任何实数映射到区间(0, 1)。这使它适用于二分类输出和门控机制。然而，对于过大或过小的输入，它存在梯度消失问题，这会减慢深度网络的训练速度。",
    diagram: "",
    terms: ["activation_function", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 3,
    q: "What is the primary advantage of the ReLU activation function over sigmoid?",
    qChinese: "ReLU激活函数相比sigmoid的主要优势是什么？",
    options: [
      "A) ReLU avoids the vanishing gradient problem for positive inputs",
      "B) ReLU outputs are bounded between 0 and 1",
      "C) ReLU is differentiable everywhere",
      "D) ReLU always produces non-zero gradients"
    ],
    optionsChinese: [
      "A) ReLU对正输入避免了梯度消失问题",
      "B) ReLU的输出在0和1之间",
      "C) ReLU在所有点都可微",
      "D) ReLU总是产生非零梯度"
    ],
    answer: 0,
    explanation: "ReLU (Rectified Linear Unit) outputs max(0, x), giving a constant gradient of 1 for positive inputs. This alleviates the vanishing gradient problem that plagues sigmoid and tanh in deep networks. ReLU is not differentiable at x=0 and can suffer from dying neurons when inputs are consistently negative.",
    explanationChinese: "ReLU（修正线性单元）输出max(0, x)，对正输入给出恒定梯度1。这缓解了深度网络中sigmoid和tanh的梯度消失问题。ReLU在x=0处不可微，当输入持续为负时可能导致神经元死亡。",
    diagram: "",
    terms: ["activation_function", "vanishing_gradient"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 4,
    q: "In a feedforward neural network, what does a hidden layer do?",
    qChinese: "在前馈神经网络中，隐藏层的作用是什么？",
    options: [
      "A) It directly produces the final classification output",
      "B) It stores training data for future retrieval",
      "C) It learns intermediate representations by applying weighted transformations and nonlinear activations",
      "D) It normalizes the input data before processing"
    ],
    optionsChinese: [
      "A) 它直接产生最终的分类输出",
      "B) 它存储训练数据以供将来检索",
      "C) 它通过应用加权变换和非线性激活来学习中间表示",
      "D) 它在处理之前对输入数据进行归一化"
    ],
    answer: 2,
    explanation: "Hidden layers transform inputs through weighted linear combinations followed by nonlinear activation functions. Each layer extracts increasingly abstract features from the data. Without hidden layers, the network could only model linear relationships. Multiple hidden layers enable learning complex, hierarchical representations.",
    explanationChinese: "隐藏层通过加权线性组合和非线性激活函数来转换输入。每一层从数据中提取越来越抽象的特征。没有隐藏层，网络只能建模线性关系。多个隐藏层使学习复杂的层次化表示成为可能。",
    diagram: "",
    terms: ["neural_network", "activation_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 5,
    q: "What does the Universal Approximation Theorem state?",
    qChinese: "通用逼近定理说明了什么？",
    options: [
      "A) Any neural network can perfectly memorize any training set",
      "B) Neural networks converge to the global minimum during training",
      "C) Deep networks always outperform shallow networks",
      "D) A feedforward network with one hidden layer and sufficient neurons can approximate any continuous function on a compact set"
    ],
    optionsChinese: [
      "A) 任何神经网络都能完美记忆任何训练集",
      "B) 神经网络在训练过程中收敛到全局最小值",
      "C) 深度网络总是优于浅层网络",
      "D) 具有一个隐藏层和足够神经元的前馈网络可以逼近紧集上的任何连续函数"
    ],
    answer: 3,
    explanation: "The Universal Approximation Theorem proves that a feedforward network with a single hidden layer containing a finite number of neurons can approximate any continuous function on a compact subset of R^n to arbitrary accuracy. However, it does not guarantee efficient learning or that the required number of neurons is practical.",
    explanationChinese: "通用逼近定理证明，具有单个隐藏层且包含有限数量神经元的前馈网络可以在R^n的紧子集上以任意精度逼近任何连续函数。但它不保证有效的学习过程，也不保证所需的神经元数量是实际可行的。",
    diagram: "",
    terms: ["neural_network", "activation_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 6,
    q: "What is the 'bias' term in a neuron?",
    qChinese: "神经元中的'偏置'项是什么？",
    options: [
      "A) A regularization parameter that prevents overfitting",
      "B) An additional learnable parameter added to the weighted sum before activation",
      "C) The variance of the neuron's output distribution",
      "D) The learning rate used during weight updates"
    ],
    optionsChinese: [
      "A) 防止过拟合的正则化参数",
      "B) 在激活之前添加到加权和的额外可学习参数",
      "C) 神经元输出分布的方差",
      "D) 权重更新时使用的学习率"
    ],
    answer: 1,
    explanation: "The bias is a learnable scalar added to the weighted sum of inputs: z = w·x + b. It allows the neuron to shift its activation function left or right, enabling it to fit data that does not pass through the origin. Without bias, the decision boundary must pass through the origin, limiting expressiveness.",
    explanationChinese: "偏置是添加到输入加权和的可学习标量：z = w·x + b。它允许神经元左右移动其激活函数，使其能够拟合不经过原点的数据。没有偏置，决策边界必须经过原点，限制了表达能力。",
    diagram: "",
    terms: ["neural_network", "perceptron"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 7,
    q: "Which activation function can output negative values and has a range of (-1, 1)?",
    qChinese: "哪个激活函数可以输出负值且范围为(-1, 1)？",
    options: [
      "A) Tanh",
      "B) ReLU",
      "C) Sigmoid",
      "D) Softmax"
    ],
    optionsChinese: [
      "A) Tanh",
      "B) ReLU",
      "C) Sigmoid",
      "D) Softmax"
    ],
    answer: 0,
    explanation: "The tanh (hyperbolic tangent) function maps inputs to the range (-1, 1). Unlike sigmoid, its outputs are zero-centered, which can help gradient-based optimization converge faster. It is defined as tanh(z) = (e^z - e^(-z))/(e^z + e^(-z)). It still suffers from vanishing gradients at extreme values.",
    explanationChinese: "tanh（双曲正切）函数将输入映射到(-1, 1)范围。与sigmoid不同，它的输出以零为中心，这有助于基于梯度的优化更快收敛。定义为tanh(z) = (e^z - e^(-z))/(e^z + e^(-z))。在极端值处仍然存在梯度消失问题。",
    diagram: "",
    terms: ["activation_function", "vanishing_gradient"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 8,
    q: "What is the purpose of the softmax function in neural networks?",
    qChinese: "softmax函数在神经网络中的作用是什么？",
    options: [
      "A) To introduce nonlinearity in hidden layers",
      "B) To normalize the weights of the network",
      "C) To convert a vector of real numbers into a probability distribution over multiple classes",
      "D) To reduce the dimensionality of the input"
    ],
    optionsChinese: [
      "A) 在隐藏层中引入非线性",
      "B) 对网络的权重进行归一化",
      "C) 将实数向量转换为多个类别上的概率分布",
      "D) 降低输入的维度"
    ],
    answer: 2,
    explanation: "Softmax converts logits (raw output scores) into probabilities that sum to 1. For class i, softmax(z_i) = e^(z_i) / sum(e^(z_j)). It is used in the output layer for multi-class classification. The exponential function ensures all outputs are positive, and division by the sum ensures they form a valid probability distribution.",
    explanationChinese: "Softmax将logits（原始输出分数）转换为总和为1的概率。对于类别i，softmax(z_i) = e^(z_i) / sum(e^(z_j))。它用于多分类的输出层。指数函数确保所有输出为正，除以总和确保它们构成有效的概率分布。",
    diagram: "",
    terms: ["activation_function", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 9,
    q: "What is the 'dying ReLU' problem?",
    qChinese: "什么是'ReLU死亡'问题？",
    options: [
      "A) Neurons get stuck outputting zero for all inputs because their weights push inputs to always be negative",
      "B) ReLU outputs explode to infinity during training",
      "C) ReLU causes the loss function to become non-convex",
      "D) ReLU neurons consume too much memory during inference"
    ],
    optionsChinese: [
      "A) 神经元因其权重使输入始终为负而永远输出零",
      "B) ReLU的输出在训练过程中爆炸到无穷大",
      "C) ReLU导致损失函数变为非凸",
      "D) ReLU神经元在推理过程中消耗过多内存"
    ],
    answer: 0,
    explanation: "The dying ReLU problem occurs when a neuron's weights are updated so that the weighted input is always negative. Since ReLU outputs zero for negative inputs, the gradient is also zero, preventing any further weight updates. This neuron effectively dies. Leaky ReLU and PReLU address this by allowing small gradients for negative inputs.",
    explanationChinese: "ReLU死亡问题发生在神经元的权重被更新为使加权输入始终为负时。由于ReLU对负输入输出零，梯度也为零，阻止了进一步的权重更新。这个神经元实际上就死了。Leaky ReLU和PReLU通过对负输入允许小梯度来解决此问题。",
    diagram: "",
    terms: ["activation_function", "vanishing_gradient"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 10,
    q: "In a multi-layer perceptron (MLP), how are layers typically connected?",
    qChinese: "在多层感知器（MLP）中，层之间通常是如何连接的？",
    options: [
      "A) Each neuron connects only to the next neuron in the same layer",
      "B) Neurons are connected randomly between layers",
      "C) Every neuron in one layer connects to every neuron in the next layer (fully connected)",
      "D) Only alternate neurons are connected between layers"
    ],
    optionsChinese: [
      "A) 每个神经元只连接到同一层中的下一个神经元",
      "B) 神经元在层之间随机连接",
      "C) 一层中的每个神经元与下一层的每个神经元相连（全连接）",
      "D) 只有交替的神经元在层之间连接"
    ],
    answer: 2,
    explanation: "In an MLP, layers are fully connected (dense), meaning every neuron in layer l is connected to every neuron in layer l+1. Each connection has a learnable weight. This creates a weight matrix W of shape (n_l, n_{l+1}) between consecutive layers. Fully connected layers have many parameters, which can lead to overfitting.",
    explanationChinese: "在MLP中，层是全连接（密集）的，意味着第l层的每个神经元都与第l+1层的每个神经元相连。每个连接都有一个可学习的权重。这在连续层之间创建了形状为(n_l, n_{l+1})的权重矩阵W。全连接层有很多参数，可能导致过拟合。",
    diagram: "",
    terms: ["neural_network", "perceptron"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 11,
    q: "What is the key limitation of a single-layer perceptron?",
    qChinese: "单层感知器的主要局限性是什么？",
    options: [
      "A) It cannot be trained with gradient descent",
      "B) It requires too many parameters",
      "C) It cannot learn non-linearly separable patterns like XOR",
      "D) It can only handle binary inputs"
    ],
    optionsChinese: [
      "A) 它不能用梯度下降训练",
      "B) 它需要太多参数",
      "C) 它不能学习非线性可分模式，如XOR",
      "D) 它只能处理二进制输入"
    ],
    answer: 2,
    explanation: "Minsky and Papert (1969) proved that a single-layer perceptron cannot solve the XOR problem because XOR is not linearly separable. This limitation requires at least one hidden layer to create non-linear decision boundaries. This discovery temporarily slowed neural network research until multi-layer networks with backpropagation emerged.",
    explanationChinese: "Minsky和Papert（1969）证明单层感知器无法解决XOR问题，因为XOR不是线性可分的。这一局限性要求至少一个隐藏层来创建非线性决策边界。这一发现暂时减缓了神经网络研究，直到具有反向传播的多层网络出现。",
    diagram: "",
    terms: ["perceptron", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 12,
    q: "What does 'depth' refer to in a deep neural network?",
    qChinese: "在深度神经网络中，'深度'指的是什么？",
    options: [
      "A) The number of neurons in each layer",
      "B) The number of parameters in the network",
      "C) The size of the training dataset",
      "D) The number of layers in the network"
    ],
    optionsChinese: [
      "A) 每层中神经元的数量",
      "B) 网络中的参数数量",
      "C) 训练数据集的大小",
      "D) 网络中的层数"
    ],
    answer: 3,
    explanation: "Depth refers to the number of layers in a neural network, including hidden layers and the output layer. Deep networks have many layers, allowing them to learn hierarchical feature representations. The width of a layer refers to the number of neurons it contains. Deeper networks can represent more complex functions with fewer total parameters.",
    explanationChinese: "深度指的是神经网络中的层数，包括隐藏层和输出层。深度网络有很多层，使其能够学习层次化的特征表示。层的宽度指的是其包含的神经元数量。更深的网络可以用更少的总参数表示更复杂的函数。",
    diagram: "",
    terms: ["neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 13,
    q: "Leaky ReLU differs from standard ReLU by:",
    qChinese: "Leaky ReLU与标准ReLU的区别在于：",
    options: [
      "A) Having an upper bound on its output",
      "B) Allowing a small non-zero gradient when the input is negative",
      "C) Being differentiable at zero",
      "D) Outputting values between -1 and 1"
    ],
    optionsChinese: [
      "A) 输出有上界",
      "B) 当输入为负时允许小的非零梯度",
      "C) 在零点可微",
      "D) 输出值在-1和1之间"
    ],
    answer: 1,
    explanation: "Leaky ReLU is defined as f(x) = x for x > 0 and f(x) = alpha*x for x <= 0, where alpha is a small constant like 0.01. This ensures that neurons always have a non-zero gradient, preventing the dying ReLU problem. Parametric ReLU (PReLU) makes alpha a learnable parameter instead of a fixed constant.",
    explanationChinese: "Leaky ReLU定义为f(x) = x（当x > 0）和f(x) = alpha*x（当x <= 0），其中alpha是一个小常数如0.01。这确保神经元始终有非零梯度，防止ReLU死亡问题。参数化ReLU（PReLU）将alpha变为可学习参数而非固定常数。",
    diagram: "",
    terms: ["activation_function", "vanishing_gradient"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 14,
    q: "What is weight initialization and why is it important?",
    qChinese: "什么是权重初始化，为什么它很重要？",
    options: [
      "A) Setting all weights to zero to ensure symmetry",
      "B) Randomly initializing weights to break symmetry and ensure proper gradient flow",
      "C) Copying weights from a pre-trained model",
      "D) Setting weights equal to the inverse of the number of inputs"
    ],
    optionsChinese: [
      "A) 将所有权重设为零以确保对称性",
      "B) 随机初始化权重以打破对称性并确保适当的梯度流",
      "C) 从预训练模型复制权重",
      "D) 将权重设为输入数量的倒数"
    ],
    answer: 1,
    explanation: "Weight initialization sets the starting values of network parameters before training. If all weights are zero, neurons compute identical outputs and receive identical gradients, preventing learning (symmetry problem). Random initialization breaks this symmetry. Methods like Xavier and He initialization scale weights based on layer size to maintain gradient variance.",
    explanationChinese: "权重初始化在训练前设置网络参数的起始值。如果所有权重为零，神经元计算相同的输出并接收相同的梯度，阻止学习（对称性问题）。随机初始化打破了这种对称性。Xavier和He初始化等方法根据层大小缩放权重以维持梯度方差。",
    diagram: "",
    terms: ["neural_network", "vanishing_gradient"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 15,
    q: "Xavier (Glorot) initialization is designed for which activation functions?",
    qChinese: "Xavier（Glorot）初始化是为哪些激活函数设计的？",
    options: [
      "A) Sigmoid and tanh",
      "B) ReLU and its variants",
      "C) Softmax only",
      "D) All activation functions equally"
    ],
    optionsChinese: [
      "A) Sigmoid和tanh",
      "B) ReLU及其变体",
      "C) 仅Softmax",
      "D) 所有激活函数"
    ],
    answer: 0,
    explanation: "Xavier initialization samples weights from a distribution with variance 2/(n_in + n_out), where n_in and n_out are the input and output dimensions. It was designed for sigmoid and tanh activations to keep the variance of activations and gradients stable across layers. He initialization, with variance 2/n_in, is preferred for ReLU networks.",
    explanationChinese: "Xavier初始化从方差为2/(n_in + n_out)的分布中采样权重，其中n_in和n_out是输入和输出维度。它是为sigmoid和tanh激活函数设计的，以保持激活值和梯度在各层之间的方差稳定。He初始化方差为2/n_in，更适合ReLU网络。",
    diagram: "",
    terms: ["neural_network", "activation_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 16,
    q: "What is the role of the output layer in a classification neural network?",
    qChinese: "在分类神经网络中，输出层的作用是什么？",
    options: [
      "A) To extract features from raw input data",
      "B) To produce the final prediction, typically as class probabilities",
      "C) To regularize the network by adding noise",
      "D) To compute the loss function"
    ],
    optionsChinese: [
      "A) 从原始输入数据中提取特征",
      "B) 产生最终预测，通常作为类别概率",
      "C) 通过添加噪声来正则化网络",
      "D) 计算损失函数"
    ],
    answer: 1,
    explanation: "The output layer produces the network's final predictions. For binary classification, it typically has one neuron with sigmoid activation. For multi-class classification, it has one neuron per class with softmax activation to produce a probability distribution. The number of output neurons matches the number of target classes.",
    explanationChinese: "输出层产生网络的最终预测。对于二分类，通常有一个带sigmoid激活的神经元。对于多分类，每个类别有一个神经元，使用softmax激活来产生概率分布。输出神经元的数量与目标类别的数量相匹配。",
    diagram: "",
    terms: ["neural_network", "activation_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 17,
    q: "What is the vanishing gradient problem?",
    qChinese: "什么是梯度消失问题？",
    options: [
      "A) Gradients become extremely large during backpropagation",
      "B) The network loses its ability to generalize to new data",
      "C) The learning rate decreases too quickly during training",
      "D) Gradients become exponentially small as they propagate backward through many layers, slowing learning"
    ],
    optionsChinese: [
      "A) 梯度在反向传播过程中变得极大",
      "B) 网络失去对新数据的泛化能力",
      "C) 学习率在训练过程中下降太快",
      "D) 梯度在通过多层向后传播时变得指数级小，减缓学习"
    ],
    answer: 3,
    explanation: "The vanishing gradient problem occurs when gradients are repeatedly multiplied by small values (less than 1) during backpropagation through many layers. This causes early layers to receive tiny gradients and learn very slowly. Sigmoid and tanh activations are prone to this because their derivatives are always less than 1. ReLU, residual connections, and careful initialization help mitigate it.",
    explanationChinese: "梯度消失问题发生在梯度在通过多层反向传播时被反复乘以小于1的值。这导致早期层接收到极小的梯度而学习非常缓慢。Sigmoid和tanh激活容易出现此问题，因为它们的导数始终小于1。ReLU、残差连接和细致的初始化有助于缓解此问题。",
    diagram: "",
    terms: ["vanishing_gradient", "backpropagation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 18,
    q: "What is the exploding gradient problem?",
    qChinese: "什么是梯度爆炸问题？",
    options: [
      "A) Gradients shrink to near zero during training",
      "B) The loss function reaches a plateau",
      "C) The model becomes too complex to train",
      "D) Gradients grow exponentially large during backpropagation, causing unstable weight updates"
    ],
    optionsChinese: [
      "A) 梯度在训练过程中缩小到接近零",
      "B) 损失函数达到平台期",
      "C) 模型变得太复杂而无法训练",
      "D) 梯度在反向传播过程中指数级增长，导致不稳定的权重更新"
    ],
    answer: 3,
    explanation: "Exploding gradients occur when gradient values grow exponentially during backpropagation, causing extremely large weight updates that destabilize training. The loss may oscillate or diverge to NaN. Gradient clipping, which caps gradient norms to a maximum value, is a common solution. Proper weight initialization and batch normalization also help prevent this issue.",
    explanationChinese: "梯度爆炸发生在梯度值在反向传播过程中指数级增长时，导致极大的权重更新使训练不稳定。损失可能振荡或发散为NaN。梯度裁剪（将梯度范数限制在最大值内）是常见的解决方案。适当的权重初始化和批量归一化也有助于防止此问题。",
    diagram: "",
    terms: ["vanishing_gradient", "backpropagation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 19,
    q: "What is a computational graph in the context of deep learning?",
    qChinese: "在深度学习中，什么是计算图？",
    options: [
      "A) A directed graph where nodes represent operations and edges represent data flow, used for automatic differentiation",
      "B) A visualization of the network architecture",
      "C) A graph showing the training loss over epochs",
      "D) A diagram of the GPU memory allocation"
    ],
    optionsChinese: [
      "A) 节点代表操作、边代表数据流的有向图，用于自动微分",
      "B) 网络架构的可视化",
      "C) 显示训练损失随训练轮次变化的图表",
      "D) GPU内存分配的图示"
    ],
    answer: 0,
    explanation: "A computational graph represents mathematical operations as nodes and data dependencies as edges. Modern deep learning frameworks like PyTorch and TensorFlow build computational graphs to efficiently compute gradients via automatic differentiation. Each node stores the local gradient, and backpropagation traverses the graph in reverse to compute parameter gradients.",
    explanationChinese: "计算图将数学运算表示为节点，将数据依赖关系表示为边。PyTorch和TensorFlow等现代深度学习框架构建计算图，通过自动微分高效计算梯度。每个节点存储局部梯度，反向传播反向遍历图来计算参数梯度。",
    diagram: "",
    terms: ["neural_network", "backpropagation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 20,
    q: "In a neural network, what does 'forward pass' refer to?",
    qChinese: "在神经网络中，'前向传播'指的是什么？",
    options: [
      "A) Computing gradients of the loss with respect to weights",
      "B) Updating the weights using an optimizer",
      "C) Propagating input data through the network layers to compute the output",
      "D) Evaluating the model on validation data"
    ],
    optionsChinese: [
      "A) 计算损失对权重的梯度",
      "B) 使用优化器更新权重",
      "C) 将输入数据通过网络层传播以计算输出",
      "D) 在验证数据上评估模型"
    ],
    answer: 2,
    explanation: "The forward pass computes the network's output by sequentially applying each layer's linear transformation and activation function to the input. Data flows from input to output layer. The result is compared with the true label using a loss function. The backward pass then computes gradients flowing in the opposite direction for weight updates.",
    explanationChinese: "前向传播通过对输入依次应用每层的线性变换和激活函数来计算网络的输出。数据从输入层流向输出层。结果使用损失函数与真实标签进行比较。然后反向传播计算沿相反方向流动的梯度以进行权重更新。",
    diagram: "",
    terms: ["neural_network", "backpropagation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 21,
    q: "What is the GELU (Gaussian Error Linear Unit) activation function known for?",
    qChinese: "GELU（高斯误差线性单元）激活函数以什么著称？",
    options: [
      "A) Being the default activation in early convolutional networks",
      "B) Outputting strictly positive values",
      "C) Having a closed-form derivative that is computationally cheaper than ReLU",
      "D) Being used in Transformer models like BERT and GPT as a smooth approximation to ReLU"
    ],
    optionsChinese: [
      "A) 是早期卷积网络的默认激活函数",
      "B) 输出严格正值",
      "C) 具有比ReLU计算更便宜的闭式导数",
      "D) 在BERT和GPT等Transformer模型中作为ReLU的平滑近似使用"
    ],
    answer: 3,
    explanation: "GELU is defined as x * Phi(x), where Phi is the cumulative distribution function of the standard normal distribution. It smoothly gates inputs based on their value, allowing some negative values through. GELU is the default activation in Transformers like BERT and GPT, outperforming ReLU in many NLP tasks.",
    explanationChinese: "GELU定义为x * Phi(x)，其中Phi是标准正态分布的累积分布函数。它根据输入值平滑地进行门控，允许一些负值通过。GELU是BERT和GPT等Transformer中的默认激活函数，在许多NLP任务中优于ReLU。",
    diagram: "",
    terms: ["activation_function", "transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 22,
    q: "What does 'width' of a neural network layer refer to?",
    qChinese: "神经网络层的'宽度'指的是什么？",
    options: [
      "A) The number of layers in the network",
      "B) The number of neurons (units) in that layer",
      "C) The size of the weight matrix",
      "D) The number of connections to the next layer"
    ],
    optionsChinese: [
      "A) 网络中的层数",
      "B) 该层中的神经元（单元）数量",
      "C) 权重矩阵的大小",
      "D) 到下一层的连接数"
    ],
    answer: 1,
    explanation: "The width of a layer is the number of neurons it contains. Wider layers can represent more features but increase computation and memory requirements. Research shows that both width and depth contribute to a network's expressive power, but depth is generally more parameter-efficient for learning hierarchical representations.",
    explanationChinese: "层的宽度是它包含的神经元数量。更宽的层可以表示更多特征，但会增加计算和内存需求。研究表明，宽度和深度都有助于网络的表达能力，但深度通常在学习层次化表示方面更具参数效率。",
    diagram: "",
    terms: ["neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 23,
    q: "What is the Swish activation function?",
    qChinese: "什么是Swish激活函数？",
    options: [
      "A) f(x) = x * sigmoid(x)",
      "B) f(x) = max(0, x)",
      "C) f(x) = log(1 + e^x)",
      "D) f(x) = tanh(x)"
    ],
    optionsChinese: [
      "A) f(x) = x * sigmoid(x)",
      "B) f(x) = max(0, x)",
      "C) f(x) = log(1 + e^x)",
      "D) f(x) = tanh(x)"
    ],
    answer: 0,
    explanation: "Swish, discovered through automated search by Google researchers, is defined as f(x) = x * sigmoid(x). It is smooth and non-monotonic, allowing small negative values to pass through. Swish has been shown to outperform ReLU in deep networks on various benchmarks. It is related to GELU and is used in EfficientNet architectures.",
    explanationChinese: "Swish由Google研究人员通过自动搜索发现，定义为f(x) = x * sigmoid(x)。它是平滑且非单调的，允许小的负值通过。Swish在各种基准测试中已被证明在深度网络中优于ReLU。它与GELU相关，用于EfficientNet架构中。",
    diagram: "",
    terms: ["activation_function", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 24,
    q: "What is He initialization designed for?",
    qChinese: "He初始化是为什么设计的？",
    options: [
      "A) Networks using ReLU and its variants",
      "B) Networks using sigmoid activations",
      "C) Recurrent neural networks only",
      "D) Networks without activation functions"
    ],
    optionsChinese: [
      "A) 使用ReLU及其变体的网络",
      "B) 使用sigmoid激活的网络",
      "C) 仅循环神经网络",
      "D) 没有激活函数的网络"
    ],
    answer: 0,
    explanation: "He initialization (Kaiming initialization) sets weights with variance 2/n_in, where n_in is the number of input units. It accounts for the fact that ReLU zeros out half the inputs, so the variance needs to be doubled compared to Xavier initialization. This prevents signal variance from shrinking or exploding across ReLU layers.",
    explanationChinese: "He初始化（Kaiming初始化）设置方差为2/n_in的权重，其中n_in是输入单元数。它考虑到ReLU将一半的输入置零，因此方差需要比Xavier初始化加倍。这防止信号方差在ReLU层之间缩小或爆炸。",
    diagram: "",
    terms: ["neural_network", "activation_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 25,
    q: "What is a skip connection (shortcut connection) in neural networks?",
    qChinese: "神经网络中的跳跃连接（快捷连接）是什么？",
    options: [
      "A) A connection that skips the activation function",
      "B) A connection from the output back to the input",
      "C) A connection between neurons in the same layer",
      "D) A direct connection from an earlier layer to a later layer, bypassing intermediate layers"
    ],
    optionsChinese: [
      "A) 跳过激活函数的连接",
      "B) 从输出到输入的连接",
      "C) 同一层中神经元之间的连接",
      "D) 从较早层到较后层的直接连接，绕过中间层"
    ],
    answer: 3,
    explanation: "Skip connections add the input of a block directly to its output: y = F(x) + x. This allows gradients to flow directly through the identity path, mitigating the vanishing gradient problem in very deep networks. Introduced in ResNets, skip connections enable training of networks with hundreds or thousands of layers effectively.",
    explanationChinese: "跳跃连接将一个块的输入直接加到其输出上：y = F(x) + x。这允许梯度直接通过恒等路径流动，缓解了非常深的网络中的梯度消失问题。在ResNet中引入的跳跃连接使得有效训练数百甚至数千层的网络成为可能。",
    diagram: "",
    terms: ["residual_network", "vanishing_gradient"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 26,
    q: "What is the purpose of a loss function in neural network training?",
    qChinese: "损失函数在神经网络训练中的目的是什么？",
    options: [
      "A) To determine the network architecture",
      "B) To initialize the network weights",
      "C) To quantify the difference between predicted outputs and true labels",
      "D) To control the learning rate"
    ],
    optionsChinese: [
      "A) 确定网络架构",
      "B) 初始化网络权重",
      "C) 量化预测输出与真实标签之间的差异",
      "D) 控制学习率"
    ],
    answer: 2,
    explanation: "A loss function measures how far the network's predictions are from the true values. It provides the signal that drives learning through gradient-based optimization. Common loss functions include cross-entropy for classification and mean squared error for regression. The choice of loss function significantly impacts training dynamics and model performance.",
    explanationChinese: "损失函数衡量网络预测与真实值之间的差距。它提供了通过基于梯度的优化驱动学习的信号。常见的损失函数包括用于分类的交叉熵和用于回归的均方误差。损失函数的选择显著影响训练动态和模型性能。",
    diagram: "",
    terms: ["loss_function", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 27,
    q: "What is an epoch in neural network training?",
    qChinese: "在神经网络训练中，什么是一个epoch？",
    options: [
      "A) A single forward and backward pass through one batch",
      "B) The interval between learning rate adjustments",
      "C) The time it takes to update one weight",
      "D) One complete pass through the entire training dataset"
    ],
    optionsChinese: [
      "A) 对一个批次的单次前向和反向传播",
      "B) 学习率调整之间的间隔",
      "C) 更新一个权重所需的时间",
      "D) 对整个训练数据集的一次完整遍历"
    ],
    answer: 3,
    explanation: "An epoch is one complete pass through all training examples. Training typically requires many epochs for the model to converge. Within each epoch, data is divided into mini-batches for stochastic gradient updates. Monitoring validation loss across epochs helps detect overfitting, which occurs when training loss decreases but validation loss increases.",
    explanationChinese: "一个epoch是对所有训练样本的一次完整遍历。训练通常需要多个epoch才能使模型收敛。在每个epoch中，数据被分成小批量用于随机梯度更新。监控各epoch的验证损失有助于检测过拟合，过拟合发生在训练损失下降但验证损失上升时。",
    diagram: "",
    terms: ["neural_network", "backpropagation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 28,
    q: "What is a mini-batch in the context of neural network training?",
    qChinese: "在神经网络训练中，什么是小批量？",
    options: [
      "A) The entire training dataset",
      "B) A small random subset of training examples used for one gradient update",
      "C) A single training example",
      "D) The validation set"
    ],
    optionsChinese: [
      "A) 整个训练数据集",
      "B) 用于一次梯度更新的一小组随机训练样本",
      "C) 单个训练样本",
      "D) 验证集"
    ],
    answer: 1,
    explanation: "A mini-batch is a small subset of training data (commonly 32, 64, 128, or 256 examples) used to compute an approximate gradient for one weight update. This balances the noise of single-example SGD with the computational cost of full-batch gradient descent. Mini-batch training enables efficient GPU utilization through parallelism.",
    explanationChinese: "小批量是用于计算一次权重更新的近似梯度的训练数据小子集（通常为32、64、128或256个样本）。这在单样本SGD的噪声和全批量梯度下降的计算成本之间取得平衡。小批量训练通过并行性实现高效的GPU利用。",
    diagram: "",
    terms: ["optimizer_sgd", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 29,
    q: "What is the difference between a parameter and a hyperparameter in neural networks?",
    qChinese: "神经网络中参数和超参数之间有什么区别？",
    options: [
      "A) Parameters are set before training; hyperparameters are learned during training",
      "B) They are the same thing with different names",
      "C) Parameters are learned during training (weights, biases); hyperparameters are set before training (learning rate, batch size)",
      "D) Parameters refer to the architecture; hyperparameters refer to the data"
    ],
    optionsChinese: [
      "A) 参数在训练前设置；超参数在训练期间学习",
      "B) 它们是同一事物的不同名称",
      "C) 参数在训练期间学习（权重、偏置）；超参数在训练前设置（学习率、批量大小）",
      "D) 参数指架构；超参数指数据"
    ],
    answer: 2,
    explanation: "Parameters (weights and biases) are learned automatically by the optimization algorithm during training. Hyperparameters (learning rate, batch size, number of layers, etc.) are set by the practitioner before training and control the training process itself. Hyperparameter tuning uses techniques like grid search, random search, or Bayesian optimization.",
    explanationChinese: "参数（权重和偏置）由优化算法在训练过程中自动学习。超参数（学习率、批量大小、层数等）由从业者在训练前设置，控制训练过程本身。超参数调优使用网格搜索、随机搜索或贝叶斯优化等技术。",
    diagram: "",
    terms: ["neural_network", "optimizer_sgd"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 30,
    q: "What is the ELU (Exponential Linear Unit) activation function?",
    qChinese: "什么是ELU（指数线性单元）激活函数？",
    options: [
      "A) f(x) = max(0, x)",
      "B) f(x) = x * sigmoid(x)",
      "C) f(x) = x for x > 0 and f(x) = alpha*(e^x - 1) for x <= 0",
      "D) f(x) = log(1 + e^x)"
    ],
    optionsChinese: [
      "A) f(x) = max(0, x)",
      "B) f(x) = x * sigmoid(x)",
      "C) f(x) = x（当x > 0）且f(x) = alpha*(e^x - 1)（当x <= 0）",
      "D) f(x) = log(1 + e^x)"
    ],
    answer: 2,
    explanation: "ELU uses an exponential function for negative inputs: f(x) = alpha*(e^x - 1) when x <= 0. This pushes mean activations closer to zero, which speeds up learning. Unlike Leaky ReLU, ELU saturates to -alpha for very negative inputs, adding noise robustness. The smoothness at zero can also improve optimization.",
    explanationChinese: "ELU对负输入使用指数函数：当x <= 0时，f(x) = alpha*(e^x - 1)。这使平均激活值更接近零，加速学习。与Leaky ReLU不同，ELU对非常负的输入饱和到-alpha，增加噪声鲁棒性。在零点的平滑性也有助于改善优化。",
    diagram: "",
    terms: ["activation_function", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 31,
    q: "What is the difference between 'training mode' and 'inference mode' in neural networks?",
    qChinese: "神经网络中'训练模式'和'推理模式'有什么区别？",
    options: [
      "A) Training mode uses the CPU while inference mode uses the GPU",
      "B) Training mode involves weight updates and techniques like dropout; inference mode only performs forward passes with fixed weights",
      "C) Training mode uses a larger batch size than inference mode",
      "D) There is no difference between the two modes"
    ],
    optionsChinese: [
      "A) 训练模式使用CPU，推理模式使用GPU",
      "B) 训练模式涉及权重更新和dropout等技术；推理模式只使用固定权重执行前向传播",
      "C) 训练模式使用比推理模式更大的批量大小",
      "D) 两种模式之间没有区别"
    ],
    answer: 1,
    explanation: "In training mode, the network computes gradients, applies dropout, and uses batch statistics for normalization. In inference mode, dropout is disabled, batch normalization uses running statistics, and no gradients are computed. This distinction is crucial in frameworks like PyTorch (model.train() vs model.eval()) to ensure correct behavior.",
    explanationChinese: "在训练模式下，网络计算梯度、应用dropout，并使用批量统计进行归一化。在推理模式下，dropout被禁用，批量归一化使用运行统计量，不计算梯度。这一区别在PyTorch（model.train()与model.eval()）等框架中至关重要，以确保正确行为。",
    diagram: "",
    terms: ["neural_network", "dropout", "batch_normalization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 32,
    q: "What does the term 'tensor' mean in deep learning?",
    qChinese: "在深度学习中，'张量'是什么意思？",
    options: [
      "A) A type of neural network layer",
      "B) A measurement of model accuracy",
      "C) A specific optimization algorithm",
      "D) A multi-dimensional array of numbers that generalizes scalars, vectors, and matrices"
    ],
    optionsChinese: [
      "A) 一种神经网络层",
      "B) 模型精度的度量",
      "C) 一种特定的优化算法",
      "D) 泛化标量、向量和矩阵的多维数字数组"
    ],
    answer: 3,
    explanation: "A tensor is a multi-dimensional array: a 0D tensor is a scalar, 1D is a vector, 2D is a matrix, and higher dimensions are called n-dimensional tensors. Deep learning frameworks like PyTorch and TensorFlow use tensors as their fundamental data structure. Image batches are typically 4D tensors of shape (batch, channels, height, width).",
    explanationChinese: "张量是多维数组：0D张量是标量，1D是向量，2D是矩阵，更高维称为n维张量。PyTorch和TensorFlow等深度学习框架使用张量作为基本数据结构。图像批次通常是形状为(batch, channels, height, width)的4D张量。",
    diagram: "",
    terms: ["neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 33,
    q: "What is a bottleneck layer in neural network architecture?",
    qChinese: "神经网络架构中的瓶颈层是什么？",
    options: [
      "A) A layer with fewer neurons than surrounding layers, forcing the network to learn compressed representations",
      "B) The layer with the most neurons in the network",
      "C) The output layer of a classification network",
      "D) A layer that applies dropout with a high probability"
    ],
    optionsChinese: [
      "A) 比周围层神经元更少的层，迫使网络学习压缩表示",
      "B) 网络中神经元最多的层",
      "C) 分类网络的输出层",
      "D) 应用高概率dropout的层"
    ],
    answer: 0,
    explanation: "A bottleneck layer has fewer neurons than adjacent layers, creating an information bottleneck. This forces the network to learn compact, essential representations. Bottleneck layers are used in autoencoders for dimensionality reduction and in ResNet bottleneck blocks where 1x1 convolutions reduce channels before 3x3 convolutions for computational efficiency.",
    explanationChinese: "瓶颈层的神经元比相邻层少，创建信息瓶颈。这迫使网络学习紧凑的、本质的表示。瓶颈层用于自编码器的降维，也用于ResNet瓶颈块中，其中1x1卷积在3x3卷积之前减少通道数以提高计算效率。",
    diagram: "",
    terms: ["neural_network", "autoencoder", "residual_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 34,
    q: "What is the Softplus activation function?",
    qChinese: "什么是Softplus激活函数？",
    options: [
      "A) f(x) = max(0, x)",
      "B) f(x) = log(1 + e^x)",
      "C) f(x) = x * sigmoid(x)",
      "D) f(x) = e^x / sum(e^x_i)"
    ],
    optionsChinese: [
      "A) f(x) = max(0, x)",
      "B) f(x) = log(1 + e^x)",
      "C) f(x) = x * sigmoid(x)",
      "D) f(x) = e^x / sum(e^x_i)"
    ],
    answer: 1,
    explanation: "Softplus is f(x) = log(1 + e^x), a smooth approximation to ReLU. Its derivative is the sigmoid function. Unlike ReLU, Softplus is differentiable everywhere and always outputs positive values. It approaches ReLU for large positive inputs and approaches zero for large negative inputs. It is used in probabilistic models and variational autoencoders.",
    explanationChinese: "Softplus是f(x) = log(1 + e^x)，是ReLU的平滑近似。它的导数是sigmoid函数。与ReLU不同，Softplus在所有地方可微且总是输出正值。对于大正输入趋近ReLU，对于大负输入趋近零。它用于概率模型和变分自编码器中。",
    diagram: "",
    terms: ["activation_function", "autoencoder"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 35,
    q: "What is the purpose of an embedding layer in a neural network?",
    qChinese: "神经网络中嵌入层的目的是什么？",
    options: [
      "A) To map discrete tokens (like words) to dense continuous vectors",
      "B) To reduce the spatial dimensions of feature maps",
      "C) To apply batch normalization to the input",
      "D) To compute attention scores between tokens"
    ],
    optionsChinese: [
      "A) 将离散标记（如单词）映射到密集连续向量",
      "B) 减少特征图的空间维度",
      "C) 对输入应用批量归一化",
      "D) 计算标记之间的注意力分数"
    ],
    answer: 0,
    explanation: "An embedding layer converts discrete indices (e.g., word IDs) into dense, low-dimensional vectors. It is essentially a learnable lookup table of shape (vocabulary_size, embedding_dim). During training, semantically similar tokens learn similar embeddings. Embeddings are fundamental in NLP and recommendation systems where inputs are categorical.",
    explanationChinese: "嵌入层将离散索引（如单词ID）转换为密集的低维向量。它本质上是一个形状为(词汇量大小, 嵌入维度)的可学习查找表。在训练过程中，语义相似的标记学习到相似的嵌入。嵌入在输入为分类变量的NLP和推荐系统中是基础性的。",
    diagram: "",
    terms: ["neural_network", "transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 36,
    q: "What is backpropagation in neural networks?",
    qChinese: "神经网络中的反向传播是什么？",
    options: [
      "A) A method to initialize weights randomly",
      "B) An algorithm that computes gradients of the loss with respect to each weight by applying the chain rule from output to input",
      "C) A technique to prune unnecessary neurons",
      "D) A forward pass through the network with reversed data"
    ],
    optionsChinese: [
      "A) 一种随机初始化权重的方法",
      "B) 通过从输出到输入应用链式法则来计算损失对每个权重的梯度的算法",
      "C) 一种修剪不必要神经元的技术",
      "D) 使用反转数据的前向传播"
    ],
    answer: 1,
    explanation: "Backpropagation efficiently computes gradients by applying the chain rule of calculus in reverse through the computational graph. Starting from the loss, it propagates error signals backward, computing the gradient at each layer. These gradients are then used by an optimizer (like SGD or Adam) to update weights and minimize the loss function.",
    explanationChinese: "反向传播通过在计算图中反向应用微积分的链式法则来高效计算梯度。从损失开始，它向后传播误差信号，在每一层计算梯度。然后这些梯度被优化器（如SGD或Adam）用来更新权重并最小化损失函数。",
    diagram: "",
    terms: ["backpropagation", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 37,
    q: "What is Stochastic Gradient Descent (SGD)?",
    qChinese: "什么是随机梯度下降（SGD）？",
    options: [
      "A) Computing the gradient using the entire dataset for each update",
      "B) Updating weights using the gradient computed from a single randomly selected example or mini-batch",
      "C) Randomly initializing gradients before optimization",
      "D) A second-order optimization method that uses Hessian information"
    ],
    optionsChinese: [
      "A) 使用整个数据集计算每次更新的梯度",
      "B) 使用从单个随机选择的样本或小批量计算的梯度更新权重",
      "C) 在优化前随机初始化梯度",
      "D) 使用Hessian信息的二阶优化方法"
    ],
    answer: 1,
    explanation: "SGD updates weights using gradients computed from a random subset (mini-batch) of training data rather than the full dataset. This introduces noise that can help escape local minima and speeds up training. The update rule is: w = w - lr * gradient. Pure SGD uses one sample; mini-batch SGD uses a small batch, which is more common in practice.",
    explanationChinese: "SGD使用从训练数据的随机子集（小批量）计算的梯度来更新权重，而不是使用完整数据集。这引入的噪声有助于逃离局部最小值并加速训练。更新规则是：w = w - lr * gradient。纯SGD使用一个样本；小批量SGD使用一小批数据，在实践中更常用。",
    diagram: "",
    terms: ["optimizer_sgd", "backpropagation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 38,
    q: "What is momentum in the context of SGD optimization?",
    qChinese: "在SGD优化中，动量是什么？",
    options: [
      "A) An acceleration technique that accumulates past gradients to smooth updates and speed up convergence",
      "B) The total number of training steps",
      "C) The magnitude of the weight decay term",
      "D) The rate at which the learning rate decreases"
    ],
    optionsChinese: [
      "A) 一种累积过去梯度以平滑更新和加速收敛的加速技术",
      "B) 训练步骤的总数",
      "C) 权重衰减项的大小",
      "D) 学习率下降的速率"
    ],
    answer: 0,
    explanation: "Momentum adds a fraction (typically 0.9) of the previous update to the current update: v = beta*v + gradient; w = w - lr*v. This smooths out noisy gradients and accelerates convergence in consistent gradient directions. Like a ball rolling downhill, momentum helps the optimizer move faster through flat regions and dampens oscillations in steep ravines.",
    explanationChinese: "动量将前一次更新的一定比例（通常0.9）添加到当前更新中：v = beta*v + gradient; w = w - lr*v。这平滑了噪声梯度并在一致的梯度方向上加速收敛。就像球滚下山坡一样，动量帮助优化器在平坦区域更快移动，并抑制陡峭沟壑中的振荡。",
    diagram: "",
    terms: ["optimizer_sgd", "backpropagation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 39,
    q: "How does the Adam optimizer work?",
    qChinese: "Adam优化器是如何工作的？",
    options: [
      "A) It uses only the current gradient for updates",
      "B) It randomly selects learning rates for each parameter",
      "C) It uses second-order derivatives (Hessian) for optimization",
      "D) It combines momentum (first moment) and RMSProp (second moment) with bias correction for adaptive learning rates"
    ],
    optionsChinese: [
      "A) 它只使用当前梯度进行更新",
      "B) 它为每个参数随机选择学习率",
      "C) 它使用二阶导数（Hessian）进行优化",
      "D) 它结合动量（一阶矩）和RMSProp（二阶矩），并进行偏差校正以实现自适应学习率"
    ],
    answer: 3,
    explanation: "Adam (Adaptive Moment Estimation) maintains exponential moving averages of the gradient (first moment m) and squared gradient (second moment v). It applies bias correction to both: m_hat = m/(1-beta1^t), v_hat = v/(1-beta2^t). The update is w = w - lr * m_hat / (sqrt(v_hat) + epsilon). This gives each parameter its own effective learning rate.",
    explanationChinese: "Adam（自适应矩估计）维护梯度的指数移动平均（一阶矩m）和梯度平方的指数移动平均（二阶矩v）。对两者应用偏差校正：m_hat = m/(1-beta1^t), v_hat = v/(1-beta2^t)。更新为w = w - lr * m_hat / (sqrt(v_hat) + epsilon)。这给每个参数一个自己的有效学习率。",
    diagram: "",
    terms: ["optimizer_adam", "backpropagation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 40,
    q: "What is the learning rate in gradient descent?",
    qChinese: "梯度下降中的学习率是什么？",
    options: [
      "A) The number of epochs needed for convergence",
      "B) A hyperparameter that controls the step size of each weight update",
      "C) The ratio of training data to validation data",
      "D) The rate at which new training examples are introduced"
    ],
    optionsChinese: [
      "A) 收敛所需的epoch数",
      "B) 控制每次权重更新步长的超参数",
      "C) 训练数据与验证数据的比率",
      "D) 引入新训练样本的速率"
    ],
    answer: 1,
    explanation: "The learning rate (lr) scales the gradient to determine the magnitude of weight updates: w_new = w - lr * gradient. Too large a learning rate causes overshooting and divergence; too small leads to slow convergence and potential stagnation in local minima. Typical initial values range from 0.1 to 0.0001 depending on the optimizer and task.",
    explanationChinese: "学习率（lr）缩放梯度以确定权重更新的幅度：w_new = w - lr * gradient。学习率太大会导致过冲和发散；太小会导致收敛缓慢和可能停留在局部最小值。根据优化器和任务，典型初始值范围从0.1到0.0001。",
    diagram: "",
    terms: ["optimizer_sgd", "backpropagation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 41,
    q: "What is RMSProp optimizer?",
    qChinese: "什么是RMSProp优化器？",
    options: [
      "A) An optimizer that uses a fixed learning rate for all parameters",
      "B) An optimizer that only works with convolutional networks",
      "C) An optimizer that adapts the learning rate for each parameter using a moving average of squared gradients",
      "D) A second-order optimization method"
    ],
    optionsChinese: [
      "A) 一种对所有参数使用固定学习率的优化器",
      "B) 一种仅适用于卷积网络的优化器",
      "C) 一种使用梯度平方的移动平均来自适应每个参数学习率的优化器",
      "D) 一种二阶优化方法"
    ],
    answer: 2,
    explanation: "RMSProp maintains a running average of squared gradients: v = decay * v + (1-decay) * gradient^2. It divides the learning rate by sqrt(v + epsilon), giving parameters with large recent gradients smaller effective rates and vice versa. Proposed by Hinton, RMSProp addresses AdaGrad's problem of monotonically decreasing learning rates.",
    explanationChinese: "RMSProp维护梯度平方的运行平均：v = decay * v + (1-decay) * gradient^2。它将学习率除以sqrt(v + epsilon)，使具有较大近期梯度的参数获得较小的有效学习率，反之亦然。由Hinton提出，RMSProp解决了AdaGrad学习率单调递减的问题。",
    diagram: "",
    terms: ["optimizer_adam", "backpropagation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 42,
    q: "What is a learning rate schedule?",
    qChinese: "什么是学习率调度？",
    options: [
      "A) A fixed learning rate throughout training",
      "B) The order in which training data is presented",
      "C) A strategy to adjust the learning rate during training, typically decreasing it over time",
      "D) A method to determine the initial learning rate"
    ],
    optionsChinese: [
      "A) 训练过程中固定的学习率",
      "B) 呈现训练数据的顺序",
      "C) 在训练过程中调整学习率的策略，通常随时间递减",
      "D) 确定初始学习率的方法"
    ],
    answer: 2,
    explanation: "A learning rate schedule adjusts the learning rate during training. Common schedules include step decay (reducing by a factor every N epochs), cosine annealing (smoothly decreasing following a cosine curve), and warmup (gradually increasing from a small value). These help the model converge faster initially and fine-tune more precisely later.",
    explanationChinese: "学习率调度在训练过程中调整学习率。常见的调度包括阶梯衰减（每N个epoch减少一个因子）、余弦退火（按余弦曲线平滑递减）和预热（从小值逐渐增加）。这些帮助模型在初期更快收敛，后期更精确地微调。",
    diagram: "",
    terms: ["optimizer_sgd", "backpropagation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 43,
    q: "What is gradient clipping?",
    qChinese: "什么是梯度裁剪？",
    options: [
      "A) Removing gradients that are too small",
      "B) Computing gradients only for selected layers",
      "C) Capping gradient values to a maximum norm to prevent exploding gradients",
      "D) Approximating gradients using finite differences"
    ],
    optionsChinese: [
      "A) 移除太小的梯度",
      "B) 仅对选定层计算梯度",
      "C) 将梯度值限制在最大范数内以防止梯度爆炸",
      "D) 使用有限差分近似梯度"
    ],
    answer: 2,
    explanation: "Gradient clipping limits gradient magnitudes to prevent exploding gradients. Two common methods are clip-by-value (clamping each gradient element) and clip-by-norm (scaling the entire gradient vector if its norm exceeds a threshold). It is especially important for RNNs and Transformers where long sequences can cause gradient instability during training.",
    explanationChinese: "梯度裁剪限制梯度幅度以防止梯度爆炸。两种常见方法是按值裁剪（限制每个梯度元素）和按范数裁剪（如果整个梯度向量的范数超过阈值则缩放）。它对RNN和Transformer特别重要，因为长序列可能在训练中导致梯度不稳定。",
    diagram: "",
    terms: ["vanishing_gradient", "backpropagation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 44,
    q: "What is the chain rule and how does it relate to backpropagation?",
    qChinese: "什么是链式法则，它与反向传播有什么关系？",
    options: [
      "A) The chain rule relates to connecting multiple networks in sequence",
      "B) The chain rule selects which weights to update first",
      "C) The chain rule determines the order of layer execution",
      "D) The chain rule computes the derivative of composite functions and is the mathematical foundation of backpropagation"
    ],
    optionsChinese: [
      "A) 链式法则涉及将多个网络按顺序连接",
      "B) 链式法则选择首先更新哪些权重",
      "C) 链式法则确定层执行的顺序",
      "D) 链式法则计算复合函数的导数，是反向传播的数学基础"
    ],
    answer: 3,
    explanation: "The chain rule states that d/dx[f(g(x))] = f'(g(x)) * g'(x). In backpropagation, each layer is a composed function, so the gradient of the loss with respect to early-layer weights requires multiplying local gradients along the path from output to that layer. This enables efficient gradient computation in deep networks.",
    explanationChinese: "链式法则指出d/dx[f(g(x))] = f'(g(x)) * g'(x)。在反向传播中，每一层是一个复合函数，因此损失对早期层权重的梯度需要沿从输出到该层的路径乘以局部梯度。这使得深度网络中的高效梯度计算成为可能。",
    diagram: "",
    terms: ["backpropagation", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 45,
    q: "What is AdaGrad optimizer known for?",
    qChinese: "AdaGrad优化器以什么著称？",
    options: [
      "A) Using a fixed learning rate for all parameters",
      "B) Using random learning rates at each step",
      "C) Only updating parameters with the largest gradients",
      "D) Adapting the learning rate per parameter by accumulating the sum of all past squared gradients"
    ],
    optionsChinese: [
      "A) 对所有参数使用固定学习率",
      "B) 在每一步使用随机学习率",
      "C) 仅更新梯度最大的参数",
      "D) 通过累积所有过去梯度平方的和来自适应每个参数的学习率"
    ],
    answer: 3,
    explanation: "AdaGrad accumulates squared gradients for each parameter and divides the learning rate by the square root of this sum. Parameters with large historical gradients get smaller updates, and vice versa. This is beneficial for sparse data but problematic for deep learning because the accumulated sum grows monotonically, eventually making the learning rate vanishingly small.",
    explanationChinese: "AdaGrad为每个参数累积梯度平方并将学习率除以该和的平方根。具有较大历史梯度的参数获得较小的更新，反之亦然。这对稀疏数据有利，但对深度学习有问题，因为累积和单调增长，最终使学习率变得极小。",
    diagram: "",
    terms: ["optimizer_adam", "backpropagation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 46,
    q: "What is the difference between batch gradient descent and stochastic gradient descent?",
    qChinese: "批量梯度下降和随机梯度下降有什么区别？",
    options: [
      "A) Batch GD uses one sample; SGD uses the full dataset",
      "B) Batch GD is always faster than SGD",
      "C) They produce identical results",
      "D) Batch GD computes gradients over the full dataset; SGD uses one sample or mini-batch per update"
    ],
    optionsChinese: [
      "A) 批量GD使用一个样本；SGD使用完整数据集",
      "B) 批量GD总是比SGD快",
      "C) 它们产生相同的结果",
      "D) 批量GD在完整数据集上计算梯度；SGD每次更新使用一个样本或小批量"
    ],
    answer: 3,
    explanation: "Batch gradient descent computes the true gradient using all training examples, producing stable but slow updates. SGD approximates the gradient using one or a few examples, providing noisy but frequent updates. Mini-batch SGD (using 32-256 examples) balances both approaches and is standard in deep learning due to GPU parallelism efficiency.",
    explanationChinese: "批量梯度下降使用所有训练样本计算真实梯度，产生稳定但缓慢的更新。SGD使用一个或几个样本近似梯度，提供有噪声但频繁的更新。小批量SGD（使用32-256个样本）平衡了两种方法，由于GPU并行效率，是深度学习中的标准方法。",
    diagram: "",
    terms: ["optimizer_sgd", "backpropagation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 47,
    q: "What is Nesterov Accelerated Gradient (NAG)?",
    qChinese: "什么是Nesterov加速梯度（NAG）？",
    options: [
      "A) A method that computes gradients at the current position",
      "B) A momentum variant that computes gradients at the look-ahead position for more responsive updates",
      "C) A gradient-free optimization method",
      "D) An optimizer that uses only second-order information"
    ],
    optionsChinese: [
      "A) 一种在当前位置计算梯度的方法",
      "B) 一种在前瞻位置计算梯度的动量变体，使更新更具响应性",
      "C) 一种无梯度优化方法",
      "D) 一种仅使用二阶信息的优化器"
    ],
    answer: 1,
    explanation: "NAG improves upon standard momentum by first taking a step in the momentum direction, then computing the gradient at that look-ahead position. This anticipatory gradient correction helps the optimizer slow down before overshooting minima. The update is: v = beta*v - lr*gradient(w + beta*v); w = w + v. NAG often converges faster than standard momentum.",
    explanationChinese: "NAG通过先沿动量方向迈一步，然后在该前瞻位置计算梯度来改进标准动量。这种预期梯度校正帮助优化器在过冲最小值之前减速。更新为：v = beta*v - lr*gradient(w + beta*v); w = w + v。NAG通常比标准动量收敛更快。",
    diagram: "",
    terms: ["optimizer_sgd", "backpropagation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 48,
    q: "What is the purpose of weight decay in optimization?",
    qChinese: "优化中权重衰减的目的是什么？",
    options: [
      "A) To add a penalty proportional to weight magnitude, discouraging large weights and reducing overfitting",
      "B) To increase the learning rate over time",
      "C) To gradually remove unused neurons",
      "D) To decrease the batch size during training"
    ],
    optionsChinese: [
      "A) 添加与权重大小成比例的惩罚，抑制大权重并减少过拟合",
      "B) 随时间增加学习率",
      "C) 逐渐移除未使用的神经元",
      "D) 在训练过程中减小批量大小"
    ],
    answer: 0,
    explanation: "Weight decay adds a term lambda * ||w||^2 to the loss function, penalizing large weights. In SGD, this is equivalent to L2 regularization and the update becomes w = (1 - lr*lambda) * w - lr * gradient. It prevents the model from becoming too complex and helps generalization. In Adam, decoupled weight decay (AdamW) is preferred over L2 regularization.",
    explanationChinese: "权重衰减在损失函数中添加lambda * ||w||^2项，惩罚大权重。在SGD中，这等价于L2正则化，更新变为w = (1 - lr*lambda) * w - lr * gradient。它防止模型变得过于复杂并有助于泛化。在Adam中，解耦权重衰减（AdamW）优于L2正则化。",
    diagram: "",
    terms: ["optimizer_sgd", "dropout"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 49,
    q: "What is cosine annealing for learning rate scheduling?",
    qChinese: "什么是余弦退火学习率调度？",
    options: [
      "A) Keeping the learning rate constant",
      "B) Setting the learning rate to the cosine of the epoch number",
      "C) Doubling the learning rate every epoch",
      "D) Reducing the learning rate following a cosine curve from an initial value to near zero"
    ],
    optionsChinese: [
      "A) 保持学习率恒定",
      "B) 将学习率设为epoch数的余弦值",
      "C) 每个epoch将学习率加倍",
      "D) 按余弦曲线从初始值降低学习率到接近零"
    ],
    answer: 3,
    explanation: "Cosine annealing decreases the learning rate following lr_t = lr_min + 0.5*(lr_max - lr_min)*(1 + cos(pi*t/T)). This provides a smooth, gradual reduction that allows aggressive learning early and fine-grained updates later. Warm restarts (SGDR) periodically reset the learning rate to escape local minima and explore new solutions.",
    explanationChinese: "余弦退火按lr_t = lr_min + 0.5*(lr_max - lr_min)*(1 + cos(pi*t/T))降低学习率。这提供了平滑、渐进的减少，允许早期积极学习和后期精细更新。暖重启（SGDR）周期性重置学习率以逃离局部最小值并探索新解。",
    diagram: "",
    terms: ["optimizer_sgd", "backpropagation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 50,
    q: "What is the AdamW optimizer?",
    qChinese: "什么是AdamW优化器？",
    options: [
      "A) A version of Adam with a larger default learning rate",
      "B) Adam applied only to convolutional layers",
      "C) Adam with decoupled weight decay that correctly separates the weight decay from the gradient update",
      "D) A simplified version of Adam without momentum"
    ],
    optionsChinese: [
      "A) 具有更大默认学习率的Adam版本",
      "B) 仅应用于卷积层的Adam",
      "C) 具有解耦权重衰减的Adam，正确地将权重衰减与梯度更新分离",
      "D) 没有动量的简化Adam版本"
    ],
    answer: 2,
    explanation: "AdamW fixes a subtle issue in the original Adam optimizer where L2 regularization interacts poorly with the adaptive learning rates. AdamW decouples weight decay from the gradient-based update, applying it directly to the weights: w = (1-lr*lambda)*w - lr*m_hat/(sqrt(v_hat)+eps). This yields better generalization in practice, especially for Transformers.",
    explanationChinese: "AdamW修复了原始Adam优化器中L2正则化与自适应学习率交互不良的微妙问题。AdamW将权重衰减与基于梯度的更新解耦，直接应用于权重：w = (1-lr*lambda)*w - lr*m_hat/(sqrt(v_hat)+eps)。这在实践中产生更好的泛化效果，特别是对于Transformer。",
    diagram: "",
    terms: ["optimizer_adam", "backpropagation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 51,
    q: "What is learning rate warmup?",
    qChinese: "什么是学习率预热？",
    options: [
      "A) Using a very high learning rate at the start",
      "B) Precomputing the optimal learning rate before training",
      "C) Training with no learning rate for the first epoch",
      "D) Gradually increasing the learning rate from near zero to the target value during the first few training steps"
    ],
    optionsChinese: [
      "A) 在开始时使用非常高的学习率",
      "B) 在训练前预计算最优学习率",
      "C) 在第一个epoch中不使用学习率训练",
      "D) 在前几个训练步骤中将学习率从接近零逐渐增加到目标值"
    ],
    answer: 3,
    explanation: "Learning rate warmup starts training with a very small learning rate and linearly increases it to the target value over a specified number of steps. This prevents large, destabilizing updates early in training when the model's weights are random and gradients are noisy. It is standard practice for Transformer training and large batch sizes.",
    explanationChinese: "学习率预热以非常小的学习率开始训练，并在指定的步数内线性增加到目标值。这防止了在训练早期当模型权重随机且梯度嘈杂时的大而不稳定的更新。它是Transformer训练和大批量大小的标准做法。",
    diagram: "",
    terms: ["optimizer_adam", "transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 52,
    q: "What is the difference between first-order and second-order optimization methods?",
    qChinese: "一阶和二阶优化方法有什么区别？",
    options: [
      "A) First-order methods are always faster than second-order methods",
      "B) Second-order methods do not use gradient information",
      "C) First-order methods only work for convex problems",
      "D) First-order methods use gradients (first derivatives); second-order methods also use curvature information (second derivatives or Hessian)"
    ],
    optionsChinese: [
      "A) 一阶方法总是比二阶方法快",
      "B) 二阶方法不使用梯度信息",
      "C) 一阶方法仅适用于凸问题",
      "D) 一阶方法使用梯度（一阶导数）；二阶方法还使用曲率信息（二阶导数或Hessian矩阵）"
    ],
    answer: 3,
    explanation: "First-order methods like SGD and Adam use only gradient information for updates. Second-order methods like Newton's method use the Hessian matrix to capture curvature, enabling better step sizes. However, computing the Hessian is O(n^2) in memory and O(n^3) to invert, making it impractical for large neural networks. Approximations like L-BFGS are sometimes used.",
    explanationChinese: "SGD和Adam等一阶方法仅使用梯度信息进行更新。牛顿法等二阶方法使用Hessian矩阵捕获曲率，实现更好的步长。然而，计算Hessian需要O(n^2)内存和O(n^3)求逆，对大型神经网络不实际。有时使用L-BFGS等近似方法。",
    diagram: "",
    terms: ["optimizer_sgd", "backpropagation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 53,
    q: "What problem does the 'plateau' in a loss landscape cause during training?",
    qChinese: "损失景观中的'平台'在训练过程中会导致什么问题？",
    options: [
      "A) Gradients become very small, causing training to stall with negligible weight updates",
      "B) The model overfits immediately",
      "C) The model's predictions become random",
      "D) The learning rate automatically increases"
    ],
    optionsChinese: [
      "A) 梯度变得非常小，导致训练以微不足道的权重更新停滞",
      "B) 模型立即过拟合",
      "C) 模型的预测变得随机",
      "D) 学习率自动增加"
    ],
    answer: 0,
    explanation: "Plateaus are flat regions in the loss landscape where gradients are near zero, causing optimization to stall. The model appears to stop improving even though it has not reached a minimum. Momentum, adaptive learning rates (Adam), and learning rate warmup can help traverse plateaus faster. Saddle points, common in high dimensions, also create plateau-like behavior.",
    explanationChinese: "平台是损失景观中梯度接近零的平坦区域，导致优化停滞。即使模型尚未达到最小值，也似乎停止改善。动量、自适应学习率（Adam）和学习率预热可以帮助更快地穿越平台。在高维中常见的鞍点也会产生类似平台的行为。",
    diagram: "",
    terms: ["optimizer_sgd", "backpropagation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 54,
    q: "What is the role of the epsilon parameter in Adam optimizer?",
    qChinese: "Adam优化器中epsilon参数的作用是什么？",
    options: [
      "A) To prevent division by zero in the parameter update formula",
      "B) To control the momentum decay rate",
      "C) To set the initial learning rate",
      "D) To determine the batch size"
    ],
    optionsChinese: [
      "A) 防止参数更新公式中的除零错误",
      "B) 控制动量衰减率",
      "C) 设置初始学习率",
      "D) 确定批量大小"
    ],
    answer: 0,
    explanation: "In Adam's update rule w = w - lr * m_hat / (sqrt(v_hat) + epsilon), epsilon (typically 1e-8) is a small constant added to the denominator to prevent division by zero when v_hat is very small. While seemingly minor, the epsilon value can affect training stability, and some practitioners tune it (e.g., 1e-6 for mixed-precision training).",
    explanationChinese: "在Adam的更新规则w = w - lr * m_hat / (sqrt(v_hat) + epsilon)中，epsilon（通常为1e-8）是添加到分母的小常数，以防止当v_hat非常小时除零。虽然看似微小，但epsilon值可能影响训练稳定性，一些从业者会调整它（例如，混合精度训练用1e-6）。",
    diagram: "",
    terms: ["optimizer_adam", "backpropagation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 55,
    q: "What is gradient accumulation?",
    qChinese: "什么是梯度累积？",
    options: [
      "A) Storing all gradients from the entire training run",
      "B) Using the maximum gradient value for updates",
      "C) Summing gradients over multiple mini-batches before performing a weight update to simulate a larger effective batch size",
      "D) Accumulating activations instead of gradients"
    ],
    optionsChinese: [
      "A) 存储整个训练过程中的所有梯度",
      "B) 使用最大梯度值进行更新",
      "C) 在执行权重更新之前对多个小批量的梯度求和，以模拟更大的有效批量大小",
      "D) 累积激活值而非梯度"
    ],
    answer: 2,
    explanation: "Gradient accumulation sums gradients from several forward-backward passes before applying a single weight update. This simulates a larger batch size when GPU memory is limited. For example, accumulating gradients over 4 mini-batches of 32 samples each effectively trains with a batch size of 128, improving training stability without requiring more memory.",
    explanationChinese: "梯度累积在应用单次权重更新之前对多次前向-反向传播的梯度求和。当GPU内存有限时，这模拟了更大的批量大小。例如，对4个32样本小批量累积梯度，有效地以128的批量大小训练，在不需要更多内存的情况下提高训练稳定性。",
    diagram: "",
    terms: ["optimizer_sgd", "backpropagation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 56,
    q: "What is the purpose of bias correction in Adam optimizer?",
    qChinese: "Adam优化器中偏差校正的目的是什么？",
    options: [
      "A) To compensate for the initialization of moment estimates at zero, which biases them toward zero in early steps",
      "B) To correct for biased training data",
      "C) To remove the bias term from neurons",
      "D) To correct for imbalanced class distributions"
    ],
    optionsChinese: [
      "A) 补偿矩估计初始化为零的问题，这在早期步骤中使它们偏向零",
      "B) 纠正有偏差的训练数据",
      "C) 从神经元中移除偏置项",
      "D) 纠正不平衡的类分布"
    ],
    answer: 0,
    explanation: "Adam initializes first and second moment estimates (m and v) to zero. In early training steps, these estimates are biased toward zero because they have not accumulated enough gradient history. Bias correction divides by (1 - beta^t): m_hat = m/(1-beta1^t) and v_hat = v/(1-beta2^t), which compensates for this initialization bias and stabilizes early updates.",
    explanationChinese: "Adam将一阶和二阶矩估计（m和v）初始化为零。在训练早期步骤中，这些估计偏向零，因为它们尚未累积足够的梯度历史。偏差校正除以(1 - beta^t)：m_hat = m/(1-beta1^t)和v_hat = v/(1-beta2^t)，这补偿了初始化偏差并稳定了早期更新。",
    diagram: "",
    terms: ["optimizer_adam", "backpropagation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 57,
    q: "What is a saddle point in the loss landscape?",
    qChinese: "损失景观中的鞍点是什么？",
    options: [
      "A) A point where the gradient is zero but it is a minimum in some dimensions and a maximum in others",
      "B) A global minimum of the loss function",
      "C) The point where training should be stopped",
      "D) A local maximum of the loss function"
    ],
    optionsChinese: [
      "A) 梯度为零的点，但在某些维度上是最小值而在其他维度上是最大值",
      "B) 损失函数的全局最小值",
      "C) 应停止训练的点",
      "D) 损失函数的局部最大值"
    ],
    answer: 0,
    explanation: "A saddle point has zero gradient but is neither a local minimum nor maximum. In high-dimensional spaces typical of neural networks, saddle points are far more common than local minima. SGD with momentum can escape saddle points because the noise in stochastic gradients and the accumulated velocity push the optimizer away from these flat regions.",
    explanationChinese: "鞍点的梯度为零，但既不是局部最小值也不是局部最大值。在神经网络典型的高维空间中，鞍点远比局部最小值常见。带动量的SGD可以逃离鞍点，因为随机梯度中的噪声和累积速度推动优化器远离这些平坦区域。",
    diagram: "",
    terms: ["optimizer_sgd", "backpropagation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 58,
    q: "What is mixed-precision training?",
    qChinese: "什么是混合精度训练？",
    options: [
      "A) Training with both labeled and unlabeled data",
      "B) Using different loss functions for different layers",
      "C) Training multiple models simultaneously",
      "D) Using both 16-bit and 32-bit floating-point numbers to speed up training while maintaining accuracy"
    ],
    optionsChinese: [
      "A) 使用标记和未标记数据进行训练",
      "B) 对不同层使用不同的损失函数",
      "C) 同时训练多个模型",
      "D) 同时使用16位和32位浮点数来加速训练并保持精度"
    ],
    answer: 3,
    explanation: "Mixed-precision training uses FP16 for forward/backward passes (faster computation, less memory) and FP32 for weight updates (maintaining precision). Loss scaling prevents gradient underflow in FP16. Modern GPUs have tensor cores optimized for FP16, providing 2-3x speedup. This technique is essential for training large models like GPT and is supported by frameworks like PyTorch AMP.",
    explanationChinese: "混合精度训练使用FP16进行前向/反向传播（更快计算，更少内存），使用FP32进行权重更新（保持精度）。损失缩放防止FP16中的梯度下溢。现代GPU有针对FP16优化的张量核，提供2-3倍加速。这项技术对训练GPT等大模型至关重要，并被PyTorch AMP等框架支持。",
    diagram: "",
    terms: ["backpropagation", "optimizer_adam"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 59,
    q: "What is the LAMB optimizer designed for?",
    qChinese: "LAMB优化器是为什么设计的？",
    options: [
      "A) Small batch training on CPUs",
      "B) Optimizing non-differentiable loss functions",
      "C) Training only recurrent neural networks",
      "D) Large-batch training by incorporating layer-wise adaptive learning rates"
    ],
    optionsChinese: [
      "A) CPU上的小批量训练",
      "B) 优化不可微的损失函数",
      "C) 仅训练循环神经网络",
      "D) 通过引入逐层自适应学习率进行大批量训练"
    ],
    answer: 3,
    explanation: "LAMB (Layer-wise Adaptive Moments optimizer for Batch training) extends Adam with layer-wise learning rate scaling based on the ratio of weight norms to update norms. This enables stable training with very large batch sizes (up to 64K), dramatically reducing BERT pre-training time from days to hours by enabling massive data parallelism.",
    explanationChinese: "LAMB（用于批量训练的逐层自适应矩优化器）通过基于权重范数与更新范数之比的逐层学习率缩放扩展了Adam。这使得使用非常大的批量大小（高达64K）进行稳定训练成为可能，通过启用大规模数据并行将BERT预训练时间从数天减少到数小时。",
    diagram: "",
    terms: ["optimizer_adam", "transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 60,
    q: "What is the cyclical learning rate strategy?",
    qChinese: "什么是循环学习率策略？",
    options: [
      "A) Using the same learning rate for every cycle of training",
      "B) Oscillating the learning rate between a minimum and maximum value during training",
      "C) Gradually increasing the learning rate without any decrease",
      "D) Using a different learning rate for each layer"
    ],
    optionsChinese: [
      "A) 在每个训练周期中使用相同的学习率",
      "B) 在训练过程中在最小值和最大值之间振荡学习率",
      "C) 逐渐增加学习率而不减少",
      "D) 对每层使用不同的学习率"
    ],
    answer: 1,
    explanation: "Cyclical learning rates (CLR) oscillate the learning rate between bounds rather than monotonically decreasing it. The triangular policy linearly increases and decreases the rate between lr_min and lr_max. This can help escape saddle points and sharp local minima. Smith (2017) showed CLR can achieve good results faster than fixed schedules with less hyperparameter tuning.",
    explanationChinese: "循环学习率（CLR）在边界之间振荡学习率，而不是单调递减。三角策略在lr_min和lr_max之间线性增加和减少学习率。这有助于逃离鞍点和尖锐的局部最小值。Smith（2017）证明CLR可以比固定调度更快地获得好结果，且需要更少的超参数调整。",
    diagram: "",
    terms: ["optimizer_sgd", "backpropagation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 61,
    q: "What is the significance of the loss landscape being non-convex in deep learning?",
    qChinese: "在深度学习中，损失景观为非凸的重要性是什么？",
    options: [
      "A) It guarantees finding the global minimum",
      "B) It ensures all optimizers converge to the same solution",
      "C) It simplifies the optimization problem",
      "D) It means there are multiple local minima and saddle points, making optimization challenging"
    ],
    optionsChinese: [
      "A) 它保证找到全局最小值",
      "B) 它确保所有优化器收敛到相同的解",
      "C) 它简化了优化问题",
      "D) 它意味着存在多个局部最小值和鞍点，使优化变得具有挑战性"
    ],
    answer: 3,
    explanation: "Neural network loss landscapes are highly non-convex with many local minima, saddle points, and flat regions. Unlike convex optimization where any local minimum is global, gradient descent in deep learning may converge to different solutions depending on initialization and optimization trajectory. Surprisingly, many local minima in deep networks generalize similarly well.",
    explanationChinese: "神经网络的损失景观高度非凸，有许多局部最小值、鞍点和平坦区域。与凸优化中任何局部最小值都是全局最小值不同，深度学习中的梯度下降可能根据初始化和优化轨迹收敛到不同的解。令人惊讶的是，深度网络中的许多局部最小值具有相似的泛化能力。",
    diagram: "",
    terms: ["optimizer_sgd", "backpropagation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 62,
    q: "What does the term 'convergence' mean in neural network training?",
    qChinese: "神经网络训练中'收敛'是什么意思？",
    options: [
      "A) The network achieves 100% accuracy on training data",
      "B) The learning rate reaches zero",
      "C) All weights become equal",
      "D) The loss function reaches a stable value and stops significantly decreasing"
    ],
    optionsChinese: [
      "A) 网络在训练数据上达到100%准确率",
      "B) 学习率达到零",
      "C) 所有权重变得相等",
      "D) 损失函数达到稳定值并停止显著下降"
    ],
    answer: 3,
    explanation: "Convergence occurs when the training loss stabilizes and further updates produce negligible changes. This indicates the optimizer has found a (local) minimum or a flat region. Convergence does not guarantee optimal performance; the model may converge to a poor local minimum. Early stopping based on validation loss prevents overfitting to training data.",
    explanationChinese: "收敛发生在训练损失稳定且进一步更新产生微不足道的变化时。这表明优化器已找到（局部）最小值或平坦区域。收敛不保证最优性能；模型可能收敛到较差的局部最小值。基于验证损失的早停防止对训练数据的过拟合。",
    diagram: "",
    terms: ["optimizer_sgd", "loss_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 63,
    q: "What is automatic differentiation (autograd)?",
    qChinese: "什么是自动微分（autograd）？",
    options: [
      "A) Manually computing derivatives with pencil and paper",
      "B) A computational technique that efficiently computes exact derivatives by decomposing operations and applying the chain rule",
      "C) Approximating derivatives using finite differences",
      "D) Using symbolic math software to derive gradient formulas"
    ],
    optionsChinese: [
      "A) 用笔和纸手动计算导数",
      "B) 通过分解操作并应用链式法则来高效计算精确导数的计算技术",
      "C) 使用有限差分近似导数",
      "D) 使用符号数学软件推导梯度公式"
    ],
    answer: 1,
    explanation: "Automatic differentiation (AD) computes exact derivatives by recording operations in a computational graph and applying the chain rule. Reverse-mode AD (backpropagation) is efficient for functions with many inputs and few outputs, like loss functions. PyTorch's autograd and TensorFlow's GradientTape implement reverse-mode AD for deep learning.",
    explanationChinese: "自动微分（AD）通过记录计算图中的操作并应用链式法则来计算精确导数。反向模式AD（反向传播）对于具有多个输入和少量输出的函数（如损失函数）是高效的。PyTorch的autograd和TensorFlow的GradientTape实现了深度学习的反向模式AD。",
    diagram: "",
    terms: ["backpropagation", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 64,
    q: "What is the difference between SGD with momentum and Adam in practice?",
    qChinese: "在实践中，带动量的SGD和Adam有什么区别？",
    options: [
      "A) SGD with momentum often generalizes better but requires more tuning; Adam converges faster but may generalize slightly worse",
      "B) Adam always achieves lower training loss",
      "C) They always produce identical results",
      "D) Adam cannot be used with learning rate schedules"
    ],
    optionsChinese: [
      "A) 带动量的SGD通常泛化更好但需要更多调参；Adam收敛更快但可能泛化略差",
      "B) Adam总是达到更低的训练损失",
      "C) 它们总是产生相同的结果",
      "D) Adam不能与学习率调度一起使用"
    ],
    answer: 0,
    explanation: "In practice, Adam converges faster and requires less learning rate tuning due to its adaptive rates. However, well-tuned SGD with momentum often achieves better generalization, especially in computer vision. Adam can converge to sharper minima that generalize worse. AdamW and techniques like SAM help bridge this gap. The choice depends on the task and computational budget.",
    explanationChinese: "在实践中，Adam因其自适应学习率收敛更快且需要更少的学习率调参。然而，调参良好的带动量SGD通常获得更好的泛化效果，特别是在计算机视觉中。Adam可能收敛到泛化较差的尖锐最小值。AdamW和SAM等技术有助于弥合这一差距。选择取决于任务和计算预算。",
    diagram: "",
    terms: ["optimizer_sgd", "optimizer_adam"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 65,
    q: "What is Sharpness-Aware Minimization (SAM)?",
    qChinese: "什么是锐度感知最小化（SAM）？",
    options: [
      "A) An optimizer that finds the sharpest minimum",
      "B) An optimization technique that seeks flat minima by minimizing both the loss and the loss sharpness for better generalization",
      "C) A data augmentation technique",
      "D) A learning rate scheduling method"
    ],
    optionsChinese: [
      "A) 一种寻找最尖锐最小值的优化器",
      "B) 一种通过同时最小化损失和损失锐度来寻求平坦最小值以获得更好泛化的优化技术",
      "C) 一种数据增强技术",
      "D) 一种学习率调度方法"
    ],
    answer: 1,
    explanation: "SAM simultaneously minimizes the loss value and the loss sharpness (how quickly the loss changes in a neighborhood around the current weights). It does this by first perturbing weights in the direction of steepest ascent, then computing gradients at this perturbed point. Flat minima are associated with better generalization, and SAM consistently improves model robustness.",
    explanationChinese: "SAM同时最小化损失值和损失锐度（损失在当前权重附近的邻域中变化的速度）。它通过先沿最陡上升方向扰动权重，然后在该扰动点计算梯度来实现。平坦最小值与更好的泛化相关，SAM持续提高模型鲁棒性。",
    diagram: "",
    terms: ["optimizer_sgd", "backpropagation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 66,
    q: "What is a convolutional layer in a CNN?",
    qChinese: "CNN中的卷积层是什么？",
    options: [
      "A) A fully connected layer that processes all inputs simultaneously",
      "B) A layer that reduces spatial dimensions by selecting maximum values",
      "C) A layer that applies learnable filters to local regions of the input, producing feature maps through sliding window operations",
      "D) A layer that normalizes the activations"
    ],
    optionsChinese: [
      "A) 同时处理所有输入的全连接层",
      "B) 通过选择最大值来减少空间维度的层",
      "C) 将可学习滤波器应用于输入的局部区域，通过滑动窗口操作生成特征图的层",
      "D) 归一化激活值的层"
    ],
    answer: 2,
    explanation: "A convolutional layer slides learnable filters (kernels) across the input, computing dot products at each position to produce feature maps. This exploits spatial locality and weight sharing, making CNNs translation-equivariant and parameter-efficient compared to fully connected layers. Early layers detect edges, while deeper layers capture increasingly complex patterns.",
    explanationChinese: "卷积层在输入上滑动可学习的滤波器（核），在每个位置计算点积以生成特征图。这利用了空间局部性和权重共享，使CNN相比全连接层具有平移等变性和参数效率。早期层检测边缘，而更深层捕获越来越复杂的模式。",
    diagram: "",
    terms: ["convolutional_neural_network", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 67,
    q: "What is the purpose of pooling layers in CNNs?",
    qChinese: "CNN中池化层的目的是什么？",
    options: [
      "A) To increase the spatial resolution of feature maps",
      "B) To reduce spatial dimensions, providing translation invariance and reducing computation",
      "C) To add nonlinearity to the network",
      "D) To learn new features from the input"
    ],
    optionsChinese: [
      "A) 增加特征图的空间分辨率",
      "B) 减少空间维度，提供平移不变性并减少计算量",
      "C) 为网络添加非线性",
      "D) 从输入中学习新特征"
    ],
    answer: 1,
    explanation: "Pooling layers downsample feature maps by applying an aggregation function (max or average) over local regions. Max pooling takes the maximum value in each window, preserving the strongest activations. This reduces spatial dimensions and computational cost while providing some translation invariance. Modern architectures sometimes replace pooling with strided convolutions.",
    explanationChinese: "池化层通过对局部区域应用聚合函数（最大或平均）来对特征图进行下采样。最大池化取每个窗口中的最大值，保留最强的激活。这减少了空间维度和计算成本，同时提供一定的平移不变性。现代架构有时用步幅卷积替代池化。",
    diagram: "",
    terms: ["convolutional_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 68,
    q: "What does 'stride' mean in a convolutional layer?",
    qChinese: "卷积层中的'步幅'是什么意思？",
    options: [
      "A) The size of the convolutional filter",
      "B) The number of pixels the filter moves between consecutive applications",
      "C) The number of output channels",
      "D) The depth of the input tensor"
    ],
    optionsChinese: [
      "A) 卷积滤波器的大小",
      "B) 滤波器在连续应用之间移动的像素数",
      "C) 输出通道的数量",
      "D) 输入张量的深度"
    ],
    answer: 1,
    explanation: "Stride determines how many pixels the filter shifts between positions. A stride of 1 moves the filter one pixel at a time, preserving spatial dimensions. A stride of 2 moves two pixels, halving the output dimensions. Larger strides reduce computation and serve as an alternative to pooling for downsampling. The output size is (input - filter + 2*padding)/stride + 1.",
    explanationChinese: "步幅决定滤波器在位置之间移动多少像素。步幅为1时滤波器每次移动一个像素，保留空间维度。步幅为2时移动两个像素，将输出维度减半。较大的步幅减少计算，可作为池化的替代方案进行下采样。输出大小为(input - filter + 2*padding)/stride + 1。",
    diagram: "",
    terms: ["convolutional_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 69,
    q: "What is 'padding' in convolution operations?",
    qChinese: "卷积操作中的'填充'是什么？",
    options: [
      "A) Adding extra filters to the convolutional layer",
      "B) Adding extra pixels (usually zeros) around the input border to control the output spatial dimensions",
      "C) Increasing the stride of the convolution",
      "D) Duplicating the input feature maps"
    ],
    optionsChinese: [
      "A) 向卷积层添加额外的滤波器",
      "B) 在输入边界周围添加额外像素（通常是零）以控制输出空间维度",
      "C) 增加卷积的步幅",
      "D) 复制输入特征图"
    ],
    answer: 1,
    explanation: "Padding adds zeros (or other values) around the input borders. 'Same' padding preserves the spatial dimensions so the output has the same height and width as the input. 'Valid' padding means no padding, reducing output size. For a 3x3 filter, padding of 1 on each side maintains dimensions. Padding prevents information loss at the borders.",
    explanationChinese: "填充在输入边界周围添加零（或其他值）。'Same'填充保持空间维度，使输出与输入具有相同的高度和宽度。'Valid'填充意味着没有填充，减小输出大小。对于3x3滤波器，每边填充1保持维度。填充防止边界处的信息丢失。",
    diagram: "",
    terms: ["convolutional_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 70,
    q: "What is a 1x1 convolution and what is it used for?",
    qChinese: "什么是1x1卷积，它有什么用途？",
    options: [
      "A) A convolution that only processes one pixel at a time with no spatial context",
      "B) A convolution that always outputs a single value",
      "C) A pointwise convolution that changes the number of channels without affecting spatial dimensions, used for channel mixing and dimensionality reduction",
      "D) A convolution used only in the first layer of a network"
    ],
    optionsChinese: [
      "A) 一次只处理一个像素且没有空间上下文的卷积",
      "B) 总是输出单个值的卷积",
      "C) 一种逐点卷积，在不影响空间维度的情况下改变通道数，用于通道混合和降维",
      "D) 仅在网络第一层使用的卷积"
    ],
    answer: 2,
    explanation: "A 1x1 convolution applies a 1x1 filter across all input channels at each spatial position. It performs a linear combination of channels, effectively acting as a per-pixel fully connected layer. It is used to change the number of channels (dimensionality reduction), add nonlinearity, and is a key component in Inception and ResNet bottleneck blocks.",
    explanationChinese: "1x1卷积在每个空间位置对所有输入通道应用1x1滤波器。它执行通道的线性组合，有效地作为逐像素全连接层。它用于改变通道数（降维）、添加非线性，是Inception和ResNet瓶颈块中的关键组件。",
    diagram: "",
    terms: ["convolutional_neural_network", "residual_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 71,
    q: "What is the receptive field of a neuron in a CNN?",
    qChinese: "CNN中神经元的感受野是什么？",
    options: [
      "A) The number of parameters in the convolutional filter",
      "B) The stride of the convolution",
      "C) The number of feature maps in the layer",
      "D) The region in the original input image that affects the neuron's output"
    ],
    optionsChinese: [
      "A) 卷积滤波器中的参数数量",
      "B) 卷积的步幅",
      "C) 层中特征图的数量",
      "D) 原始输入图像中影响神经元输出的区域"
    ],
    answer: 3,
    explanation: "The receptive field is the area in the input that influences a particular neuron's activation. In deeper layers, neurons have larger receptive fields because each layer's computation depends on a region of the previous layer. Stacking 3x3 convolutions increases the effective receptive field: two 3x3 layers give a 5x5 receptive field with fewer parameters than a single 5x5 filter.",
    explanationChinese: "感受野是输入中影响特定神经元激活的区域。在更深层中，神经元有更大的感受野，因为每层的计算取决于前一层的一个区域。堆叠3x3卷积增加有效感受野：两个3x3层给出5x5的感受野，参数比单个5x5滤波器少。",
    diagram: "",
    terms: ["convolutional_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 72,
    q: "What is a feature map in a CNN?",
    qChinese: "CNN中的特征图是什么？",
    options: [
      "A) A visualization of the network architecture",
      "B) A mapping from input pixels to output classes",
      "C) The 2D output produced by applying a single convolutional filter to the input",
      "D) The set of all learned weights in one layer"
    ],
    optionsChinese: [
      "A) 网络架构的可视化",
      "B) 从输入像素到输出类别的映射",
      "C) 将单个卷积滤波器应用于输入后产生的2D输出",
      "D) 一层中所有学习权重的集合"
    ],
    answer: 2,
    explanation: "A feature map (activation map) is the output of applying one convolutional filter across the entire input. Each filter detects a specific feature (edge, texture, pattern). A convolutional layer with N filters produces N feature maps. Early layers produce feature maps detecting low-level features like edges; deeper layers detect complex patterns like object parts.",
    explanationChinese: "特征图（激活图）是将一个卷积滤波器应用于整个输入后的输出。每个滤波器检测特定特征（边缘、纹理、模式）。具有N个滤波器的卷积层产生N个特征图。早期层的特征图检测低级特征如边缘；更深层检测复杂模式如物体部件。",
    diagram: "",
    terms: ["convolutional_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 73,
    q: "What is depthwise separable convolution?",
    qChinese: "什么是深度可分离卷积？",
    options: [
      "A) A standard convolution applied to each channel separately",
      "B) A convolution with very large filter sizes",
      "C) A convolution that only operates on the deepest feature maps",
      "D) A two-step convolution that first applies a separate filter per channel (depthwise) then combines channels with 1x1 convolution (pointwise)"
    ],
    optionsChinese: [
      "A) 分别应用于每个通道的标准卷积",
      "B) 具有非常大滤波器大小的卷积",
      "C) 仅对最深特征图操作的卷积",
      "D) 一种两步卷积，首先对每个通道应用单独的滤波器（深度卷积），然后用1x1卷积组合通道（逐点卷积）"
    ],
    answer: 3,
    explanation: "Depthwise separable convolution splits a standard convolution into two steps: depthwise convolution applies one filter per input channel, and pointwise (1x1) convolution combines channels. This reduces computation by a factor of roughly 1/N + 1/k^2 compared to standard convolution. MobileNet and EfficientNet use this for efficient mobile and edge deployment.",
    explanationChinese: "深度可分离卷积将标准卷积分为两步：深度卷积对每个输入通道应用一个滤波器，逐点（1x1）卷积组合通道。与标准卷积相比，这将计算量减少约1/N + 1/k^2倍。MobileNet和EfficientNet使用此方法实现高效的移动和边缘部署。",
    diagram: "",
    terms: ["convolutional_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 74,
    q: "What is dilated (atrous) convolution?",
    qChinese: "什么是膨胀（空洞）卷积？",
    options: [
      "A) A convolution with stride greater than 1",
      "B) A convolution that uses larger filter sizes",
      "C) A convolution applied to dilated (stretched) images",
      "D) A convolution where the filter has gaps between elements, expanding the receptive field without increasing parameters"
    ],
    optionsChinese: [
      "A) 步幅大于1的卷积",
      "B) 使用更大滤波器大小的卷积",
      "C) 应用于膨胀（拉伸）图像的卷积",
      "D) 滤波器元素之间有间隔的卷积，在不增加参数的情况下扩大感受野"
    ],
    answer: 3,
    explanation: "Dilated convolution inserts spaces (zeros) between filter elements, controlled by a dilation rate. A 3x3 filter with dilation rate 2 covers a 5x5 area while using only 9 parameters. This exponentially increases the receptive field with depth. It is widely used in semantic segmentation (DeepLab) and audio processing (WaveNet) where large context is needed.",
    explanationChinese: "膨胀卷积在滤波器元素之间插入空间（零），由膨胀率控制。膨胀率为2的3x3滤波器覆盖5x5区域但只使用9个参数。这随深度指数级增加感受野。它广泛用于语义分割（DeepLab）和音频处理（WaveNet）等需要大上下文的场景。",
    diagram: "",
    terms: ["convolutional_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 75,
    q: "What is transposed convolution (deconvolution)?",
    qChinese: "什么是转置卷积（反卷积）？",
    options: [
      "A) An upsampling operation that increases spatial dimensions by reversing the forward convolution's spatial transformation",
      "B) The inverse of a convolution that perfectly reconstructs the original input",
      "C) A convolution applied to the transposed input",
      "D) A convolution that reduces the number of channels"
    ],
    optionsChinese: [
      "A) 通过反转前向卷积的空间变换来增加空间维度的上采样操作",
      "B) 完美重建原始输入的卷积逆操作",
      "C) 应用于转置输入的卷积",
      "D) 减少通道数的卷积"
    ],
    answer: 0,
    explanation: "Transposed convolution performs upsampling by inserting zeros between input elements and then applying a convolution, increasing spatial dimensions. Despite the name 'deconvolution', it does not invert a convolution. It is used in decoder architectures, generative models (GANs), and semantic segmentation for upsampling feature maps back to input resolution.",
    explanationChinese: "转置卷积通过在输入元素之间插入零然后应用卷积来执行上采样，增加空间维度。尽管名为'反卷积'，它并不是卷积的逆操作。它用于解码器架构、生成模型（GAN）和语义分割中，将特征图上采样回输入分辨率。",
    diagram: "",
    terms: ["convolutional_neural_network", "generative_adversarial_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 76,
    q: "What is global average pooling?",
    qChinese: "什么是全局平均池化？",
    options: [
      "A) Averaging all the weights in the network",
      "B) Computing the average of each entire feature map to produce a single value per channel",
      "C) Averaging the outputs of all layers",
      "D) A pooling operation with a very large stride"
    ],
    optionsChinese: [
      "A) 对网络中所有权重取平均",
      "B) 计算每个完整特征图的平均值，为每个通道产生一个值",
      "C) 对所有层的输出取平均",
      "D) 具有非常大步幅的池化操作"
    ],
    answer: 1,
    explanation: "Global average pooling (GAP) averages all spatial positions in each feature map, producing a vector of length equal to the number of channels. It replaces fully connected layers at the end of CNNs, dramatically reducing parameters and overfitting. For a feature map of size H x W x C, GAP outputs a vector of size C, which is then fed to the classification layer.",
    explanationChinese: "全局平均池化（GAP）对每个特征图中的所有空间位置取平均，产生长度等于通道数的向量。它替代了CNN末端的全连接层，大幅减少参数和过拟合。对于大小为H x W x C的特征图，GAP输出大小为C的向量，然后送入分类层。",
    diagram: "",
    terms: ["convolutional_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 77,
    q: "What is the VGG architecture known for?",
    qChinese: "VGG架构以什么著称？",
    options: [
      "A) Using very large convolutional filters (11x11)",
      "B) Introducing residual connections",
      "C) Using only 3x3 convolutional filters stacked deeply to achieve large receptive fields",
      "D) Using depthwise separable convolutions"
    ],
    optionsChinese: [
      "A) 使用非常大的卷积滤波器（11x11）",
      "B) 引入残差连接",
      "C) 仅使用3x3卷积滤波器深度堆叠以实现大感受野",
      "D) 使用深度可分离卷积"
    ],
    answer: 2,
    explanation: "VGGNet (2014) demonstrated that using small 3x3 filters consistently throughout the network, stacked in deep configurations (16-19 layers), achieves excellent performance. Two stacked 3x3 layers have a 5x5 receptive field with fewer parameters. VGG's simplicity made it influential, but it is computationally expensive with 138M parameters in VGG-16.",
    explanationChinese: "VGGNet（2014）证明在整个网络中一致使用小的3x3滤波器，以深度配置（16-19层）堆叠，可以获得出色的性能。两个堆叠的3x3层具有5x5的感受野但参数更少。VGG的简单性使其具有影响力，但VGG-16有1.38亿参数，计算成本高。",
    diagram: "",
    terms: ["convolutional_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 78,
    q: "What innovation did the Inception (GoogLeNet) architecture introduce?",
    qChinese: "Inception（GoogLeNet）架构引入了什么创新？",
    options: [
      "A) Residual connections for very deep networks",
      "B) Attention mechanisms for image classification",
      "C) Inception modules that apply multiple filter sizes (1x1, 3x3, 5x5) in parallel and concatenate their outputs",
      "D) Depthwise separable convolutions"
    ],
    optionsChinese: [
      "A) 用于非常深网络的残差连接",
      "B) 用于图像分类的注意力机制",
      "C) 并行应用多种滤波器大小（1x1、3x3、5x5）并拼接其输出的Inception模块",
      "D) 深度可分离卷积"
    ],
    answer: 2,
    explanation: "Inception modules process input with multiple filter sizes in parallel (1x1, 3x3, 5x5, and max pooling), then concatenate the results. This lets the network learn which filter size is best at each level. 1x1 convolutions reduce dimensionality before expensive 3x3 and 5x5 operations. GoogLeNet achieved state-of-the-art results with far fewer parameters than VGG.",
    explanationChinese: "Inception模块用多种滤波器大小并行处理输入（1x1、3x3、5x5和最大池化），然后拼接结果。这让网络在每个级别学习哪种滤波器大小最好。1x1卷积在昂贵的3x3和5x5操作之前减少维度。GoogLeNet以远少于VGG的参数达到了最先进的结果。",
    diagram: "",
    terms: ["convolutional_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 79,
    q: "How does weight sharing work in CNNs?",
    qChinese: "CNN中的权重共享是如何工作的？",
    options: [
      "A) Different layers share the same set of weights",
      "B) The same filter weights are applied at every spatial position of the input, reducing parameters",
      "C) Weights are shared between the training and testing phases",
      "D) All neurons in a layer have identical weights"
    ],
    optionsChinese: [
      "A) 不同层共享相同的权重集",
      "B) 相同的滤波器权重应用于输入的每个空间位置，减少参数",
      "C) 权重在训练和测试阶段之间共享",
      "D) 层中的所有神经元具有相同的权重"
    ],
    answer: 1,
    explanation: "In CNNs, each filter's weights are shared across all spatial positions. A 3x3 filter has 9 weights regardless of the input size, and these same 9 weights are applied everywhere. This dramatically reduces parameters compared to fully connected layers and encodes the assumption that useful features can appear anywhere in the image (translation equivariance).",
    explanationChinese: "在CNN中，每个滤波器的权重在所有空间位置共享。一个3x3滤波器有9个权重，无论输入大小如何，这相同的9个权重被应用到所有位置。与全连接层相比，这大幅减少了参数，并编码了有用特征可以出现在图像任何位置的假设（平移等变性）。",
    diagram: "",
    terms: ["convolutional_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 80,
    q: "What is the difference between max pooling and average pooling?",
    qChinese: "最大池化和平均池化有什么区别？",
    options: [
      "A) Max pooling learns weights; average pooling does not",
      "B) Max pooling increases spatial dimensions; average pooling decreases them",
      "C) Max pooling selects the maximum value in each window; average pooling computes the mean of values",
      "D) They produce identical outputs for any input"
    ],
    optionsChinese: [
      "A) 最大池化学习权重；平均池化不学习",
      "B) 最大池化增加空间维度；平均池化减少",
      "C) 最大池化选择每个窗口中的最大值；平均池化计算值的平均值",
      "D) 对于任何输入它们产生相同的输出"
    ],
    answer: 2,
    explanation: "Max pooling selects the largest activation in each pooling window, preserving the most prominent features. Average pooling computes the arithmetic mean, producing smoother results. Max pooling is more common in earlier layers for feature detection, while global average pooling is preferred before the final classifier. Both are non-learnable operations that reduce spatial dimensions.",
    explanationChinese: "最大池化选择每个池化窗口中最大的激活值，保留最突出的特征。平均池化计算算术平均值，产生更平滑的结果。最大池化在较早层中更常用于特征检测，而全局平均池化在最终分类器之前更受青睐。两者都是减少空间维度的不可学习操作。",
    diagram: "",
    terms: ["convolutional_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 81,
    q: "How do you calculate the output size of a convolutional layer?",
    qChinese: "如何计算卷积层的输出大小？",
    options: [
      "A) Output = (Input - Filter + 2*Padding) / Stride + 1",
      "B) Output = Input * Filter",
      "C) Output = Input / Filter",
      "D) Output = Input - Filter"
    ],
    optionsChinese: [
      "A) 输出 = (输入 - 滤波器 + 2*填充) / 步幅 + 1",
      "B) 输出 = 输入 * 滤波器",
      "C) 输出 = 输入 / 滤波器",
      "D) 输出 = 输入 - 滤波器"
    ],
    answer: 0,
    explanation: "The output spatial dimension is computed as O = floor((W - F + 2P) / S) + 1, where W is input size, F is filter size, P is padding, and S is stride. For example, input 32x32 with 3x3 filter, padding 1, stride 1 gives (32-3+2)/1+1 = 32. Understanding this formula is essential for designing CNN architectures.",
    explanationChinese: "输出空间维度计算为O = floor((W - F + 2P) / S) + 1，其中W是输入大小，F是滤波器大小，P是填充，S是步幅。例如，32x32输入，3x3滤波器，填充1，步幅1给出(32-3+2)/1+1 = 32。理解此公式对设计CNN架构至关重要。",
    diagram: "",
    terms: ["convolutional_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 82,
    q: "What is channel attention in CNNs?",
    qChinese: "CNN中的通道注意力是什么？",
    options: [
      "A) Using different learning rates for different channels",
      "B) Applying dropout to specific channels",
      "C) Increasing the number of channels in each layer",
      "D) Learning to weight the importance of each feature map channel adaptively"
    ],
    optionsChinese: [
      "A) 对不同通道使用不同的学习率",
      "B) 对特定通道应用dropout",
      "C) 增加每层的通道数",
      "D) 学习自适应地加权每个特征图通道的重要性"
    ],
    answer: 3,
    explanation: "Channel attention mechanisms like SE-Net (Squeeze-and-Excitation) learn to recalibrate channel responses. They squeeze spatial information into a channel descriptor using global average pooling, then use a small network to predict per-channel weights. This allows the model to emphasize informative channels and suppress less useful ones, improving classification accuracy.",
    explanationChinese: "SE-Net（挤压和激励）等通道注意力机制学习重新校准通道响应。它们使用全局平均池化将空间信息压缩为通道描述符，然后使用小网络预测每通道权重。这允许模型强调有用的通道并抑制不太有用的通道，提高分类精度。",
    diagram: "",
    terms: ["convolutional_neural_network", "attention_mechanism"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 83,
    q: "What is the AlexNet architecture significant for?",
    qChinese: "AlexNet架构的重要意义是什么？",
    options: [
      "A) Being the first neural network ever designed",
      "B) Being the most parameter-efficient architecture",
      "C) Introducing the Transformer architecture",
      "D) Winning ImageNet 2012 and demonstrating that deep CNNs trained on GPUs can dramatically outperform traditional methods"
    ],
    optionsChinese: [
      "A) 是有史以来设计的第一个神经网络",
      "B) 是参数效率最高的架构",
      "C) 引入Transformer架构",
      "D) 赢得ImageNet 2012并证明在GPU上训练的深度CNN可以大幅优于传统方法"
    ],
    answer: 3,
    explanation: "AlexNet (2012) won the ImageNet Large Scale Visual Recognition Challenge by a significant margin over non-deep-learning methods. It used ReLU activation, dropout regularization, data augmentation, and GPU training. This landmark result catalyzed the deep learning revolution, demonstrating that deep CNNs could solve complex visual recognition tasks at unprecedented accuracy.",
    explanationChinese: "AlexNet（2012）以显著优势赢得了ImageNet大规模视觉识别挑战赛，超越了非深度学习方法。它使用了ReLU激活、dropout正则化、数据增强和GPU训练。这一里程碑式的结果催化了深度学习革命，证明深度CNN可以以前所未有的精度解决复杂的视觉识别任务。",
    diagram: "",
    terms: ["convolutional_neural_network", "dropout"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 84,
    q: "What is group convolution?",
    qChinese: "什么是分组卷积？",
    options: [
      "A) Convolution applied to groups of images simultaneously",
      "B) A convolution with group normalization",
      "C) Using the same filter for all groups of layers",
      "D) Dividing input channels into groups and applying independent convolutions to each group"
    ],
    optionsChinese: [
      "A) 同时应用于一组图像的卷积",
      "B) 具有组归一化的卷积",
      "C) 对所有层组使用相同的滤波器",
      "D) 将输入通道分成组并对每组应用独立的卷积"
    ],
    answer: 3,
    explanation: "Group convolution divides input channels into G groups and applies separate convolutions to each group. With G groups, each filter operates on C/G channels instead of C, reducing computation by a factor of G. AlexNet used 2 groups to split computation across two GPUs. ResNeXt showed that increasing groups (cardinality) improves accuracy more efficiently than increasing width or depth.",
    explanationChinese: "分组卷积将输入通道分为G组，并对每组应用单独的卷积。有G组时，每个滤波器对C/G个通道操作而非C个，将计算量减少G倍。AlexNet使用2组将计算分配到两个GPU上。ResNeXt表明增加组数（基数）比增加宽度或深度更有效地提高精度。",
    diagram: "",
    terms: ["convolutional_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 85,
    q: "What is the purpose of data augmentation in CNN training?",
    qChinese: "CNN训练中数据增强的目的是什么？",
    options: [
      "A) To increase the model's parameter count",
      "B) To artificially increase training data diversity through transformations, reducing overfitting",
      "C) To speed up training by reducing data size",
      "D) To improve the quality of the original images"
    ],
    optionsChinese: [
      "A) 增加模型的参数数量",
      "B) 通过变换人工增加训练数据的多样性，减少过拟合",
      "C) 通过减少数据大小来加速训练",
      "D) 提高原始图像的质量"
    ],
    answer: 1,
    explanation: "Data augmentation applies random transformations (rotation, flipping, cropping, color jittering, scaling) to training images, creating variations that help the model learn invariances. This effectively increases the training set size without collecting new data. Advanced techniques include Mixup, CutMix, and AutoAugment, which learn optimal augmentation strategies automatically.",
    explanationChinese: "数据增强对训练图像应用随机变换（旋转、翻转、裁剪、颜色抖动、缩放），创建帮助模型学习不变性的变体。这有效地增加了训练集大小而无需收集新数据。高级技术包括Mixup、CutMix和AutoAugment，它们自动学习最优增强策略。",
    diagram: "",
    terms: ["convolutional_neural_network", "dropout"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 86,
    q: "What is a residual block in ResNet?",
    qChinese: "ResNet中的残差块是什么？",
    options: [
      "A) A block that removes residual noise from the input",
      "B) A pooling block that reduces residual spatial information",
      "C) A block that computes the residual error of the loss function",
      "D) A block where the input is added to the output of stacked convolutional layers via a skip connection: y = F(x) + x"
    ],
    optionsChinese: [
      "A) 从输入中移除残留噪声的块",
      "B) 减少残余空间信息的池化块",
      "C) 计算损失函数残差的块",
      "D) 通过跳跃连接将输入添加到堆叠卷积层输出的块：y = F(x) + x"
    ],
    answer: 3,
    explanation: "A residual block adds the input directly to the output of two or more convolutional layers: y = F(x) + x. The network only needs to learn the residual mapping F(x) = y - x, which is easier than learning the full mapping from scratch. This enables training networks with over 100 layers by preventing gradient degradation through identity shortcuts.",
    explanationChinese: "残差块将输入直接加到两个或更多卷积层的输出上：y = F(x) + x。网络只需要学习残差映射F(x) = y - x，这比从头学习完整映射更容易。这通过恒等快捷连接防止梯度退化，使训练超过100层的网络成为可能。",
    diagram: "",
    terms: ["residual_network", "convolutional_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 87,
    q: "What is the difference between 'same' and 'valid' padding?",
    qChinese: "'same'填充和'valid'填充有什么区别？",
    options: [
      "A) Same padding uses ones; valid padding uses zeros",
      "B) Same padding adds zeros to keep output size equal to input; valid padding uses no padding, shrinking the output",
      "C) Same padding is used for training; valid padding for testing",
      "D) They produce the same output with different computational costs"
    ],
    optionsChinese: [
      "A) Same填充使用1；Valid填充使用0",
      "B) Same填充添加零以保持输出大小等于输入；Valid填充不使用填充，缩小输出",
      "C) Same填充用于训练；Valid填充用于测试",
      "D) 它们以不同的计算成本产生相同的输出"
    ],
    answer: 1,
    explanation: "With 'same' padding, enough zeros are added around the input so the output has the same spatial dimensions as the input (when stride=1). With 'valid' padding (no padding), the output shrinks by (filter_size - 1). For a 3x3 filter on 32x32 input: same padding gives 32x32 output, valid gives 30x30. Same padding is more common in modern architectures.",
    explanationChinese: "使用'same'填充时，在输入周围添加足够的零，使输出具有与输入相同的空间维度（当步幅=1时）。使用'valid'填充（无填充）时，输出缩小(filter_size - 1)。对于32x32输入上的3x3滤波器：same填充给出32x32输出，valid给出30x30。Same填充在现代架构中更常见。",
    diagram: "",
    terms: ["convolutional_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 88,
    q: "What is transfer learning in the context of CNNs?",
    qChinese: "在CNN的背景下，什么是迁移学习？",
    options: [
      "A) Moving a trained model from one GPU to another",
      "B) Transferring data between training and validation sets",
      "C) Using features learned from a large dataset (like ImageNet) as a starting point for a different task",
      "D) Converting a CNN to an RNN architecture"
    ],
    optionsChinese: [
      "A) 将训练好的模型从一个GPU移动到另一个",
      "B) 在训练集和验证集之间传输数据",
      "C) 使用从大数据集（如ImageNet）学到的特征作为不同任务的起点",
      "D) 将CNN转换为RNN架构"
    ],
    answer: 2,
    explanation: "Transfer learning leverages a model pre-trained on a large dataset (like ImageNet with millions of images) for a new task with limited data. Early CNN layers learn universal features (edges, textures) that transfer well across tasks. The pre-trained model is either used as a fixed feature extractor or fine-tuned on the new task with a small learning rate.",
    explanationChinese: "迁移学习利用在大数据集（如拥有数百万图像的ImageNet）上预训练的模型来完成数据有限的新任务。CNN的早期层学习到的通用特征（边缘、纹理）可以在任务间很好地迁移。预训练模型被用作固定特征提取器，或以小学习率在新任务上微调。",
    diagram: "",
    terms: ["transfer_learning", "convolutional_neural_network", "fine_tuning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 89,
    q: "What is the EfficientNet scaling strategy?",
    qChinese: "EfficientNet的缩放策略是什么？",
    options: [
      "A) Only increasing the depth of the network",
      "B) Compound scaling that uniformly scales network depth, width, and resolution together using a scaling coefficient",
      "C) Only increasing the input image resolution",
      "D) Randomly scaling different dimensions"
    ],
    optionsChinese: [
      "A) 仅增加网络的深度",
      "B) 使用缩放系数统一缩放网络深度、宽度和分辨率的复合缩放",
      "C) 仅增加输入图像分辨率",
      "D) 随机缩放不同维度"
    ],
    answer: 1,
    explanation: "EfficientNet uses compound scaling to balance network depth (d), width (w), and input resolution (r) using a coefficient phi: d = alpha^phi, w = beta^phi, r = gamma^phi, where alpha*beta^2*gamma^2 ≈ 2. This achieves much better accuracy-efficiency trade-offs than scaling any single dimension alone, producing state-of-the-art results with fewer parameters.",
    explanationChinese: "EfficientNet使用复合缩放来平衡网络深度(d)、宽度(w)和输入分辨率(r)，使用系数phi：d = alpha^phi, w = beta^phi, r = gamma^phi，其中alpha*beta^2*gamma^2 ≈ 2。这比单独缩放任何单一维度实现了更好的精度-效率权衡，以更少的参数产生最先进的结果。",
    diagram: "",
    terms: ["convolutional_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 90,
    q: "What is a feature pyramid network (FPN)?",
    qChinese: "什么是特征金字塔网络（FPN）？",
    options: [
      "A) A network shaped like a pyramid with decreasing layer sizes",
      "B) A multi-scale feature extraction architecture that combines high-resolution low-level features with low-resolution high-level features through top-down pathways",
      "C) A network that only processes pyramid-shaped images",
      "D) A pooling strategy that creates a pyramid of resolutions"
    ],
    optionsChinese: [
      "A) 层大小递减的金字塔形网络",
      "B) 通过自顶向下路径将高分辨率低级特征与低分辨率高级特征结合的多尺度特征提取架构",
      "C) 仅处理金字塔形图像的网络",
      "D) 创建分辨率金字塔的池化策略"
    ],
    answer: 1,
    explanation: "FPN builds a feature pyramid by adding a top-down pathway to a CNN backbone. High-level features with strong semantics are upsampled and combined with low-level features via lateral connections. This produces rich, multi-scale feature maps at all levels. FPN is crucial for object detection (used in Faster R-CNN, RetinaNet) where objects appear at various scales.",
    explanationChinese: "FPN通过向CNN主干添加自顶向下路径来构建特征金字塔。具有强语义的高级特征被上采样并通过横向连接与低级特征结合。这在所有级别产生丰富的多尺度特征图。FPN对物体检测至关重要（用于Faster R-CNN、RetinaNet），因为物体以各种尺度出现。",
    diagram: "",
    terms: ["convolutional_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 91,
    q: "What is the concept of 'channels' in a CNN?",
    qChinese: "CNN中'通道'的概念是什么？",
    options: [
      "A) The number of images processed simultaneously",
      "B) The number of convolutional layers in the network",
      "C) The depth dimension of a feature tensor, where each channel represents a different learned feature or input color",
      "D) The communication pathways between layers"
    ],
    optionsChinese: [
      "A) 同时处理的图像数量",
      "B) 网络中卷积层的数量",
      "C) 特征张量的深度维度，每个通道代表不同的学习特征或输入颜色",
      "D) 层之间的通信路径"
    ],
    answer: 2,
    explanation: "Channels are the depth dimension of CNN tensors. An RGB image has 3 channels (red, green, blue). After convolution, each filter produces one output channel (feature map). A layer with 64 filters produces 64 channels, each detecting a different feature. The number of output channels equals the number of filters in the convolutional layer.",
    explanationChinese: "通道是CNN张量的深度维度。RGB图像有3个通道（红、绿、蓝）。卷积后，每个滤波器产生一个输出通道（特征图）。具有64个滤波器的层产生64个通道，每个检测不同的特征。输出通道数等于卷积层中滤波器的数量。",
    diagram: "",
    terms: ["convolutional_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 92,
    q: "What is a deformable convolution?",
    qChinese: "什么是可变形卷积？",
    options: [
      "A) A convolution with random filter sizes",
      "B) A convolution applied to deformed images",
      "C) A convolution that learns offset positions for sampling, allowing the filter to adapt its shape to input content",
      "D) A convolution where weights change during inference"
    ],
    optionsChinese: [
      "A) 具有随机滤波器大小的卷积",
      "B) 应用于变形图像的卷积",
      "C) 学习采样偏移位置的卷积，允许滤波器适应输入内容的形状",
      "D) 在推理过程中权重变化的卷积"
    ],
    answer: 2,
    explanation: "Deformable convolution adds learnable 2D offsets to each sampling position of the regular grid. Instead of sampling on a fixed grid, the network learns where to sample based on the input content. This allows the convolution to focus on geometrically relevant regions and handle object deformation, scale variation, and rotation more effectively.",
    explanationChinese: "可变形卷积为常规网格的每个采样位置添加可学习的2D偏移。网络不是在固定网格上采样，而是根据输入内容学习在哪里采样。这允许卷积聚焦于几何相关的区域，更有效地处理物体变形、尺度变化和旋转。",
    diagram: "",
    terms: ["convolutional_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 93,
    q: "What is spatial pyramid pooling (SPP)?",
    qChinese: "什么是空间金字塔池化（SPP）？",
    options: [
      "A) A pooling method that applies pooling at multiple scales and concatenates the results, enabling fixed-length output regardless of input size",
      "B) A standard pooling operation with large kernels",
      "C) A pooling operation that preserves spatial dimensions",
      "D) A pooling technique that only works with square images"
    ],
    optionsChinese: [
      "A) 在多个尺度上应用池化并拼接结果的池化方法，无论输入大小如何都能产生固定长度输出",
      "B) 具有大核的标准池化操作",
      "C) 保留空间维度的池化操作",
      "D) 仅适用于方形图像的池化技术"
    ],
    answer: 0,
    explanation: "SPP applies pooling at multiple levels (e.g., 1x1, 2x2, 4x4 grids) and concatenates all pooled features. This produces a fixed-size representation regardless of input dimensions, removing the need for fixed input sizes. It captures both global and local spatial information and was influential in object detection architectures before being largely replaced by RoI pooling.",
    explanationChinese: "SPP在多个级别（如1x1、2x2、4x4网格）应用池化并拼接所有池化特征。无论输入维度如何，这都产生固定大小的表示，消除了固定输入大小的需要。它捕获全局和局部空间信息，在被RoI池化大量替代之前，对物体检测架构有重要影响。",
    diagram: "",
    terms: ["convolutional_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 94,
    q: "What are the advantages of using smaller convolutional filters (3x3) over larger ones (7x7)?",
    qChinese: "使用较小卷积滤波器（3x3）相比较大滤波器（7x7）的优势是什么？",
    options: [
      "A) Larger filters always produce better accuracy",
      "B) Small filters require more memory",
      "C) Small filters cannot learn meaningful features",
      "D) Stacked small filters achieve the same receptive field with fewer parameters and more nonlinearity"
    ],
    optionsChinese: [
      "A) 较大滤波器总是产生更好的精度",
      "B) 小滤波器需要更多内存",
      "C) 小滤波器不能学习有意义的特征",
      "D) 堆叠的小滤波器以更少参数和更多非线性实现相同的感受野"
    ],
    answer: 3,
    explanation: "Three stacked 3x3 layers have a 7x7 receptive field but only 3*(3*3) = 27 parameters per channel versus 7*7 = 49 for a single 7x7 filter. Additionally, each 3x3 layer includes an activation function, adding more nonlinearity and representational power. VGGNet popularized this approach, and modern architectures predominantly use 3x3 or even 1x1 filters.",
    explanationChinese: "三个堆叠的3x3层具有7x7的感受野，但每个通道只有3*(3*3) = 27个参数，而单个7x7滤波器有7*7 = 49个。此外，每个3x3层包含一个激活函数，增加了更多非线性和表示能力。VGGNet推广了这种方法，现代架构主要使用3x3甚至1x1滤波器。",
    diagram: "",
    terms: ["convolutional_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 95,
    q: "What is the role of batch normalization in CNN architectures?",
    qChinese: "批量归一化在CNN架构中的作用是什么？",
    options: [
      "A) To increase the number of channels",
      "B) To normalize activations within a mini-batch, stabilizing training and allowing higher learning rates",
      "C) To sort training batches by difficulty",
      "D) To reduce the number of parameters"
    ],
    optionsChinese: [
      "A) 增加通道数",
      "B) 在小批量内归一化激活值，稳定训练并允许更高的学习率",
      "C) 按难度对训练批次排序",
      "D) 减少参数数量"
    ],
    answer: 1,
    explanation: "Batch normalization normalizes each channel's activations across the mini-batch to have zero mean and unit variance, then applies a learnable scale and shift. In CNNs, BN is applied per channel after convolution and before activation. It reduces internal covariate shift, enables higher learning rates, and acts as a regularizer, becoming standard in most CNN architectures.",
    explanationChinese: "批量归一化在小批量中将每个通道的激活值归一化为零均值和单位方差，然后应用可学习的缩放和偏移。在CNN中，BN在卷积之后和激活之前按通道应用。它减少了内部协变量偏移，允许更高的学习率，并起到正则化的作用，成为大多数CNN架构的标准配置。",
    diagram: "",
    terms: ["batch_normalization", "convolutional_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 96,
    q: "What is MobileNet designed for?",
    qChinese: "MobileNet是为什么设计的？",
    options: [
      "A) Training on mobile phone data",
      "B) Training networks that can be downloaded on mobile networks",
      "C) Processing mobile phone images specifically",
      "D) Efficient inference on mobile and embedded devices using depthwise separable convolutions"
    ],
    optionsChinese: [
      "A) 在手机数据上训练",
      "B) 训练可以在移动网络上下载的网络",
      "C) 专门处理手机图像",
      "D) 使用深度可分离卷积在移动和嵌入式设备上高效推理"
    ],
    answer: 3,
    explanation: "MobileNet replaces standard convolutions with depthwise separable convolutions, reducing computation and model size by roughly 8-9x. It introduces a width multiplier (alpha) to control the number of channels and a resolution multiplier for input size. MobileNetV2 adds inverted residuals and linear bottlenecks. These designs enable real-time inference on smartphones and edge devices.",
    explanationChinese: "MobileNet用深度可分离卷积替代标准卷积，将计算和模型大小减少约8-9倍。它引入宽度乘数（alpha）来控制通道数和分辨率乘数来控制输入大小。MobileNetV2添加了倒残差和线性瓶颈。这些设计使智能手机和边缘设备上的实时推理成为可能。",
    diagram: "",
    terms: ["convolutional_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 97,
    q: "What is the concept of 'dilation rate' in dilated convolutions?",
    qChinese: "膨胀卷积中'膨胀率'的概念是什么？",
    options: [
      "A) The rate at which the filter size increases over layers",
      "B) The number of dilated convolutions in the network",
      "C) The learning rate for dilated layers",
      "D) The spacing between filter elements, where rate r means (r-1) zeros are inserted between consecutive filter values"
    ],
    optionsChinese: [
      "A) 滤波器大小在层间增长的速率",
      "B) 网络中膨胀卷积的数量",
      "C) 膨胀层的学习率",
      "D) 滤波器元素之间的间距，速率r表示在连续滤波器值之间插入(r-1)个零"
    ],
    answer: 3,
    explanation: "The dilation rate determines the spacing between kernel elements. Rate 1 is standard convolution. Rate 2 inserts one zero between elements, so a 3x3 kernel covers a 5x5 area. Rate 4 covers a 9x9 area. Exponentially increasing dilation rates (1, 2, 4, 8) in successive layers efficiently achieve very large receptive fields with few parameters.",
    explanationChinese: "膨胀率决定核元素之间的间距。速率1是标准卷积。速率2在元素之间插入一个零，因此3x3核覆盖5x5区域。速率4覆盖9x9区域。在连续层中指数增加膨胀率（1, 2, 4, 8）可以用少量参数高效地实现非常大的感受野。",
    diagram: "",
    terms: ["convolutional_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 98,
    q: "What is the DenseNet architecture's key idea?",
    qChinese: "DenseNet架构的关键思想是什么？",
    options: [
      "A) Using only dense (fully connected) layers",
      "B) Using dense pooling between all layers",
      "C) Making the network as dense (compact) as possible",
      "D) Connecting every layer to every subsequent layer in a feed-forward fashion through dense connections"
    ],
    optionsChinese: [
      "A) 仅使用密集（全连接）层",
      "B) 在所有层之间使用密集池化",
      "C) 使网络尽可能密集（紧凑）",
      "D) 通过密集连接以前馈方式将每一层连接到每个后续层"
    ],
    answer: 3,
    explanation: "DenseNet connects each layer to every subsequent layer via concatenation (not addition like ResNet). Layer l receives feature maps from all preceding layers as input: x_l = H_l([x_0, x_1, ..., x_{l-1}]). This encourages feature reuse, strengthens gradient flow, and reduces the number of parameters needed. Growth rate k controls how many new channels each layer adds.",
    explanationChinese: "DenseNet通过拼接（不是像ResNet那样的加法）将每一层连接到每个后续层。第l层接收所有前面层的特征图作为输入：x_l = H_l([x_0, x_1, ..., x_{l-1}])。这鼓励特征重用，加强梯度流，并减少所需的参数数量。增长率k控制每层添加多少新通道。",
    diagram: "",
    terms: ["convolutional_neural_network", "residual_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 99,
    q: "What is the purpose of a classification head in a CNN?",
    qChinese: "CNN中分类头的目的是什么？",
    options: [
      "A) To extract spatial features from the input",
      "B) To normalize the activations",
      "C) To augment the training data",
      "D) To convert the extracted feature representations into class predictions, typically using global pooling and fully connected layers"
    ],
    optionsChinese: [
      "A) 从输入中提取空间特征",
      "B) 归一化激活值",
      "C) 增强训练数据",
      "D) 将提取的特征表示转换为类别预测，通常使用全局池化和全连接层"
    ],
    answer: 3,
    explanation: "The classification head takes the feature maps from the CNN backbone and produces class predictions. Typically, it consists of global average pooling (converting spatial feature maps to a vector), followed by one or more fully connected layers, and a softmax activation for multi-class classification. The backbone and head can be separated for transfer learning.",
    explanationChinese: "分类头从CNN主干获取特征图并产生类别预测。通常，它由全局平均池化（将空间特征图转换为向量）、一个或多个全连接层和用于多分类的softmax激活组成。主干和头可以分离以用于迁移学习。",
    diagram: "",
    terms: ["convolutional_neural_network", "transfer_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 100,
    q: "What is the Vision Transformer (ViT) and how does it differ from CNNs?",
    qChinese: "什么是视觉Transformer（ViT），它与CNN有什么不同？",
    options: [
      "A) ViT splits images into patches, treats them as tokens, and processes them with a Transformer encoder instead of convolutions",
      "B) ViT uses convolutions at multiple scales",
      "C) ViT is a faster version of standard CNNs",
      "D) ViT only works with grayscale images"
    ],
    optionsChinese: [
      "A) ViT将图像分割成补丁，将它们作为标记处理，并使用Transformer编码器而非卷积来处理",
      "B) ViT在多个尺度上使用卷积",
      "C) ViT是标准CNN的更快版本",
      "D) ViT只能处理灰度图像"
    ],
    answer: 0,
    explanation: "Vision Transformer (ViT) divides an image into fixed-size patches (e.g., 16x16), linearly embeds them, adds positional embeddings, and processes the sequence with a standard Transformer encoder. Unlike CNNs, ViT has no built-in spatial inductive bias and relies on self-attention to learn spatial relationships. It excels with large-scale pre-training data.",
    explanationChinese: "视觉Transformer（ViT）将图像分成固定大小的补丁（如16x16），线性嵌入它们，添加位置嵌入，然后用标准Transformer编码器处理序列。与CNN不同，ViT没有内置的空间归纳偏置，依赖自注意力来学习空间关系。它在大规模预训练数据下表现出色。",
    diagram: "",
    terms: ["transformer", "convolutional_neural_network", "attention_mechanism"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 101,
    q: "What is a Recurrent Neural Network (RNN)?",
    qChinese: "什么是循环神经网络（RNN）？",
    options: [
      "A) A network that processes images using convolutional filters",
      "B) A network that processes sequential data by maintaining a hidden state that captures information from previous time steps",
      "C) A network that randomly selects neurons to activate",
      "D) A feedforward network with skip connections"
    ],
    optionsChinese: [
      "A) 使用卷积滤波器处理图像的网络",
      "B) 通过维护捕获先前时间步信息的隐藏状态来处理序列数据的网络",
      "C) 随机选择要激活的神经元的网络",
      "D) 具有跳跃连接的前馈网络"
    ],
    answer: 1,
    explanation: "An RNN processes sequences by maintaining a hidden state h_t that is updated at each time step: h_t = f(W_h * h_{t-1} + W_x * x_t + b). This recurrence allows information to persist across time steps, making RNNs suitable for tasks like language modeling, speech recognition, and time series prediction. The same weights are shared across all time steps.",
    explanationChinese: "RNN通过维护在每个时间步更新的隐藏状态h_t来处理序列：h_t = f(W_h * h_{t-1} + W_x * x_t + b)。这种递归允许信息在时间步之间持续存在，使RNN适合语言建模、语音识别和时间序列预测等任务。相同的权重在所有时间步之间共享。",
    diagram: "",
    terms: ["recurrent_neural_network", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 102,
    q: "What is the main problem with training vanilla RNNs on long sequences?",
    qChinese: "训练原始RNN处理长序列的主要问题是什么？",
    options: [
      "A) They suffer from vanishing and exploding gradients, making it difficult to learn long-range dependencies",
      "B) They require too much training data",
      "C) They can only handle fixed-length sequences",
      "D) They require special GPU hardware"
    ],
    optionsChinese: [
      "A) 它们遭受梯度消失和爆炸，难以学习长期依赖关系",
      "B) 它们需要太多训练数据",
      "C) 它们只能处理固定长度序列",
      "D) 它们需要特殊的GPU硬件"
    ],
    answer: 0,
    explanation: "When backpropagating through many time steps (BPTT), gradients are multiplied by the recurrent weight matrix repeatedly. If its largest eigenvalue is less than 1, gradients vanish; if greater than 1, they explode. This makes vanilla RNNs unable to learn dependencies spanning more than 10-20 time steps. LSTMs and GRUs were designed to solve this problem.",
    explanationChinese: "当通过许多时间步反向传播（BPTT）时，梯度被反复乘以循环权重矩阵。如果其最大特征值小于1，梯度消失；如果大于1，梯度爆炸。这使得原始RNN无法学习超过10-20个时间步的依赖关系。LSTM和GRU就是为解决这个问题而设计的。",
    diagram: "",
    terms: ["recurrent_neural_network", "vanishing_gradient"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 103,
    q: "What is an LSTM (Long Short-Term Memory) network?",
    qChinese: "什么是LSTM（长短期记忆）网络？",
    options: [
      "A) An RNN variant with gating mechanisms (forget, input, output gates) that control information flow, enabling learning of long-range dependencies",
      "B) A type of CNN for long images",
      "C) A feedforward network with long skip connections",
      "D) A memory-augmented network that stores training examples"
    ],
    optionsChinese: [
      "A) 具有门控机制（遗忘门、输入门、输出门）控制信息流的RNN变体，能够学习长期依赖关系",
      "B) 一种用于长图像的CNN",
      "C) 具有长跳跃连接的前馈网络",
      "D) 存储训练样本的记忆增强网络"
    ],
    answer: 0,
    explanation: "LSTM introduces a cell state and three gates: the forget gate decides what to remove from the cell state, the input gate decides what new information to store, and the output gate controls what to output. The cell state acts as a highway for gradients, allowing information to flow unchanged over many time steps, solving the vanishing gradient problem.",
    explanationChinese: "LSTM引入了细胞状态和三个门：遗忘门决定从细胞状态中移除什么，输入门决定存储什么新信息，输出门控制输出什么。细胞状态作为梯度的高速公路，允许信息在许多时间步中不变地流动，解决了梯度消失问题。",
    diagram: "",
    terms: ["lstm", "recurrent_neural_network", "vanishing_gradient"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 104,
    q: "What is the forget gate in an LSTM?",
    qChinese: "LSTM中的遗忘门是什么？",
    options: [
      "A) A gate that removes neurons from the network",
      "B) A gate that resets all weights to zero",
      "C) A mechanism that forgets the learning rate",
      "D) A sigmoid layer that decides what proportion of the previous cell state to retain or discard"
    ],
    optionsChinese: [
      "A) 从网络中移除神经元的门",
      "B) 将所有权重重置为零的门",
      "C) 忘记学习率的机制",
      "D) 决定保留或丢弃先前细胞状态多少比例的sigmoid层"
    ],
    answer: 3,
    explanation: "The forget gate f_t = sigmoid(W_f * [h_{t-1}, x_t] + b_f) outputs values between 0 and 1 for each element of the cell state. A value of 1 means 'completely keep this', while 0 means 'completely forget this'. The cell state is multiplied element-wise by the forget gate output: C_t = f_t * C_{t-1} + i_t * C_tilde_t. This selective forgetting is crucial for managing memory.",
    explanationChinese: "遗忘门f_t = sigmoid(W_f * [h_{t-1}, x_t] + b_f)对细胞状态的每个元素输出0到1之间的值。值为1表示'完全保留'，0表示'完全遗忘'。细胞状态与遗忘门输出按元素相乘：C_t = f_t * C_{t-1} + i_t * C_tilde_t。这种选择性遗忘对管理记忆至关重要。",
    diagram: "",
    terms: ["lstm", "recurrent_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 105,
    q: "What is a GRU (Gated Recurrent Unit)?",
    qChinese: "什么是GRU（门控循环单元）？",
    options: [
      "A) A more complex version of LSTM with additional gates",
      "B) A simplified RNN variant with reset and update gates that combines the forget and input gates of LSTM",
      "C) A type of CNN gate mechanism",
      "D) A gradient regularization unit"
    ],
    optionsChinese: [
      "A) 具有额外门的更复杂LSTM版本",
      "B) 具有重置门和更新门的简化RNN变体，合并了LSTM的遗忘门和输入门",
      "C) 一种CNN门控机制",
      "D) 梯度正则化单元"
    ],
    answer: 1,
    explanation: "GRU simplifies LSTM by merging the cell state and hidden state into one, and using only two gates: a reset gate (controls how much past information to forget) and an update gate (controls the blend between old and new information). GRUs have fewer parameters than LSTMs but achieve comparable performance on many tasks, making them computationally more efficient.",
    explanationChinese: "GRU通过将细胞状态和隐藏状态合并为一个，并只使用两个门来简化LSTM：重置门（控制忘记多少过去信息）和更新门（控制旧信息和新信息的混合）。GRU参数比LSTM少，但在许多任务上达到可比的性能，使其计算效率更高。",
    diagram: "",
    terms: ["recurrent_neural_network", "lstm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 106,
    q: "What is Backpropagation Through Time (BPTT)?",
    qChinese: "什么是时间反向传播（BPTT）？",
    options: [
      "A) The technique of unrolling an RNN through time steps and applying standard backpropagation to the unrolled graph",
      "B) A method to train feedforward networks over time",
      "C) Training a network backward from the last epoch to the first",
      "D) A real-time training method"
    ],
    optionsChinese: [
      "A) 将RNN在时间步上展开并对展开图应用标准反向传播的技术",
      "B) 一种随时间训练前馈网络的方法",
      "C) 从最后一个epoch到第一个epoch反向训练网络",
      "D) 一种实时训练方法"
    ],
    answer: 0,
    explanation: "BPTT unrolls the RNN for T time steps, creating an equivalent deep feedforward network. Backpropagation is then applied through this unrolled graph. The gradient of the loss at time T flows backward through all previous time steps. Truncated BPTT limits the number of backward steps to reduce computation and memory, though it cannot capture very long dependencies.",
    explanationChinese: "BPTT将RNN展开T个时间步，创建等效的深度前馈网络。然后通过这个展开的图应用反向传播。时间T的损失梯度通过所有先前时间步向后流动。截断BPTT限制反向步数以减少计算和内存，但它不能捕获很长的依赖关系。",
    diagram: "",
    terms: ["recurrent_neural_network", "backpropagation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 107,
    q: "What is a bidirectional RNN?",
    qChinese: "什么是双向RNN？",
    options: [
      "A) An RNN that processes the same sequence twice with different weights",
      "B) An RNN that alternates between forward and backward passes during training",
      "C) An RNN with two layers that process the sequence forward and backward, capturing context from both directions",
      "D) An RNN that can process two different sequences simultaneously"
    ],
    optionsChinese: [
      "A) 使用不同权重处理同一序列两次的RNN",
      "B) 在训练期间在前向和后向传递之间交替的RNN",
      "C) 具有两层的RNN，分别向前和向后处理序列，从两个方向捕获上下文",
      "D) 可以同时处理两个不同序列的RNN"
    ],
    answer: 2,
    explanation: "A bidirectional RNN runs two separate RNNs: one processes the sequence from left to right, the other from right to left. At each time step, their hidden states are concatenated, providing context from both past and future positions. This is beneficial for tasks like named entity recognition and speech recognition where full-context information improves accuracy.",
    explanationChinese: "双向RNN运行两个独立的RNN：一个从左到右处理序列，另一个从右到左。在每个时间步，它们的隐藏状态被拼接，提供来自过去和未来位置的上下文。这对命名实体识别和语音识别等任务有益，因为全上下文信息提高了准确性。",
    diagram: "",
    terms: ["recurrent_neural_network", "lstm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 108,
    q: "What is teacher forcing in RNN training?",
    qChinese: "RNN训练中的教师强制是什么？",
    options: [
      "A) Using a larger model to train a smaller model",
      "B) Applying stronger gradient signals during training",
      "C) Forcing the network to learn from difficult examples",
      "D) Feeding the true previous output (ground truth) as input to the next time step during training instead of the model's own prediction"
    ],
    optionsChinese: [
      "A) 使用更大的模型训练更小的模型",
      "B) 在训练期间应用更强的梯度信号",
      "C) 强制网络从困难样本中学习",
      "D) 在训练期间将真实的前一个输出（真实值）作为下一个时间步的输入，而不是模型自身的预测"
    ],
    answer: 3,
    explanation: "Teacher forcing uses ground-truth outputs as inputs during training, which speeds up convergence and stabilizes learning. Without it, early training errors compound across time steps (exposure bias). However, the model never learns to recover from its own mistakes. Scheduled sampling gradually transitions from teacher forcing to using the model's own predictions during training.",
    explanationChinese: "教师强制在训练期间使用真实输出作为输入，这加速了收敛并稳定了学习。没有它，早期训练错误会在时间步之间累积（暴露偏差）。然而，模型永远不会学习从自身错误中恢复。计划采样在训练期间逐渐从教师强制过渡到使用模型自身的预测。",
    diagram: "",
    terms: ["recurrent_neural_network", "lstm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 109,
    q: "What is the sequence-to-sequence (seq2seq) architecture?",
    qChinese: "什么是序列到序列（seq2seq）架构？",
    options: [
      "A) A single RNN that maps one sequence to another of the same length",
      "B) A sequence classifier that outputs a single label",
      "C) Two independent networks that process sequences separately",
      "D) An encoder-decoder architecture where the encoder compresses input into a context vector and the decoder generates the output sequence"
    ],
    optionsChinese: [
      "A) 将一个序列映射到另一个相同长度序列的单个RNN",
      "B) 输出单个标签的序列分类器",
      "C) 分别处理序列的两个独立网络",
      "D) 编码器-解码器架构，编码器将输入压缩为上下文向量，解码器生成输出序列"
    ],
    answer: 3,
    explanation: "Seq2seq uses an encoder RNN to read the input sequence and compress it into a fixed-length context vector (the encoder's final hidden state). The decoder RNN then generates the output sequence one token at a time, conditioned on this context vector. This architecture revolutionized machine translation and inspired the development of attention mechanisms.",
    explanationChinese: "Seq2seq使用编码器RNN读取输入序列并将其压缩为固定长度的上下文向量（编码器的最终隐藏状态）。解码器RNN然后根据此上下文向量逐个生成输出序列。这种架构彻底改变了机器翻译，并启发了注意力机制的发展。",
    diagram: "",
    terms: ["recurrent_neural_network", "lstm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 110,
    q: "What is the peephole connection in an LSTM?",
    qChinese: "LSTM中的窥视孔连接是什么？",
    options: [
      "A) A modification where gate layers can directly observe the cell state, not just the hidden state",
      "B) A connection between different LSTM layers",
      "C) A shortcut connection that skips the LSTM cell",
      "D) A debugging mechanism for LSTM training"
    ],
    optionsChinese: [
      "A) 一种修改，使门层可以直接观察细胞状态，而不仅是隐藏状态",
      "B) 不同LSTM层之间的连接",
      "C) 跳过LSTM细胞的快捷连接",
      "D) LSTM训练的调试机制"
    ],
    answer: 0,
    explanation: "In standard LSTMs, gates only see the previous hidden state and current input. Peephole connections add the cell state as an additional input to the gates: f_t = sigmoid(W_f*[C_{t-1}, h_{t-1}, x_t]). This gives gates direct access to the cell's precise timing information. Peepholes can improve performance on tasks requiring precise timing, like rhythm detection.",
    explanationChinese: "在标准LSTM中，门只能看到前一个隐藏状态和当前输入。窥视孔连接将细胞状态添加为门的额外输入：f_t = sigmoid(W_f*[C_{t-1}, h_{t-1}, x_t])。这使门直接访问细胞的精确时间信息。窥视孔可以提高需要精确时间的任务的性能，如节奏检测。",
    diagram: "",
    terms: ["lstm", "recurrent_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 111,
    q: "What is the attention mechanism in the context of sequence models?",
    qChinese: "在序列模型中，注意力机制是什么？",
    options: [
      "A) A mechanism that makes the network focus on training rather than inference",
      "B) A mechanism that allows the decoder to dynamically focus on different parts of the input sequence at each decoding step",
      "C) A regularization technique to prevent the network from attending to noise",
      "D) A method to reduce the sequence length"
    ],
    optionsChinese: [
      "A) 使网络专注于训练而非推理的机制",
      "B) 允许解码器在每个解码步骤动态关注输入序列不同部分的机制",
      "C) 防止网络关注噪声的正则化技术",
      "D) 减少序列长度的方法"
    ],
    answer: 1,
    explanation: "Attention computes a weighted combination of encoder hidden states for each decoder step, where weights reflect relevance. Instead of relying on a single fixed context vector, the decoder can 'attend to' different input positions. Bahdanau attention (2015) uses a learned alignment model, while Luong attention computes similarity between decoder and encoder states directly.",
    explanationChinese: "注意力为每个解码步骤计算编码器隐藏状态的加权组合，权重反映相关性。解码器不依赖单个固定上下文向量，而是可以'关注'不同的输入位置。Bahdanau注意力（2015）使用学习的对齐模型，而Luong注意力直接计算解码器和编码器状态之间的相似性。",
    diagram: "",
    terms: ["attention_mechanism", "recurrent_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 112,
    q: "What is a stacked (multi-layer) RNN?",
    qChinese: "什么是堆叠（多层）RNN？",
    options: [
      "A) Multiple RNN layers stacked vertically, where each layer's output becomes the input to the next layer",
      "B) Multiple copies of the same RNN processing different inputs",
      "C) An RNN that processes the same sequence multiple times",
      "D) An RNN with multiple different cell types"
    ],
    optionsChinese: [
      "A) 垂直堆叠的多个RNN层，每层的输出成为下一层的输入",
      "B) 同一RNN的多个副本处理不同输入",
      "C) 多次处理同一序列的RNN",
      "D) 具有多种不同细胞类型的RNN"
    ],
    answer: 0,
    explanation: "A stacked RNN has multiple RNN layers where the hidden states of one layer serve as inputs to the next. This allows the network to learn hierarchical temporal features: lower layers capture short-term patterns while upper layers capture longer-term or more abstract patterns. Two to four layers are common; deeper stacks require residual connections for stable training.",
    explanationChinese: "堆叠RNN有多个RNN层，其中一层的隐藏状态作为下一层的输入。这允许网络学习层次化的时间特征：较低层捕获短期模式，较高层捕获较长期或更抽象的模式。通常使用二到四层；更深的堆叠需要残差连接以稳定训练。",
    diagram: "",
    terms: ["recurrent_neural_network", "lstm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 113,
    q: "What is the hidden state in an RNN?",
    qChinese: "RNN中的隐藏状态是什么？",
    options: [
      "A) The weights of the network that are hidden from the user",
      "B) A vector that summarizes all the information the network has seen so far in the sequence",
      "C) The output of the network that is not shown",
      "D) A random noise vector added during training"
    ],
    optionsChinese: [
      "A) 对用户隐藏的网络权重",
      "B) 总结网络到目前为止在序列中看到的所有信息的向量",
      "C) 未显示的网络输出",
      "D) 训练期间添加的随机噪声向量"
    ],
    answer: 1,
    explanation: "The hidden state h_t is a fixed-size vector that serves as the RNN's memory of the sequence processed so far. It is updated at each time step based on the current input and previous hidden state. The hidden state encodes contextual information and is used to make predictions. Its dimensionality is a hyperparameter that controls the network's capacity.",
    explanationChinese: "隐藏状态h_t是一个固定大小的向量，作为RNN对到目前为止处理的序列的记忆。它在每个时间步根据当前输入和前一个隐藏状态更新。隐藏状态编码上下文信息并用于做出预测。其维度是控制网络容量的超参数。",
    diagram: "",
    terms: ["recurrent_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 114,
    q: "What is the cell state in an LSTM?",
    qChinese: "LSTM中的细胞状态是什么？",
    options: [
      "A) The same as the hidden state",
      "B) The architecture configuration of the LSTM",
      "C) The state of the training cell (batch)",
      "D) A separate memory pathway that flows through the LSTM with minimal transformation, carrying long-term information"
    ],
    optionsChinese: [
      "A) 与隐藏状态相同",
      "B) LSTM的架构配置",
      "C) 训练单元（批次）的状态",
      "D) 一个单独的记忆通路，以最小变换流经LSTM，携带长期信息"
    ],
    answer: 3,
    explanation: "The cell state C_t is like a conveyor belt running through the entire LSTM chain. Information can be added to or removed from it via gates, but it can also flow unchanged across many time steps. This linear pathway allows gradients to flow freely backward, solving the vanishing gradient problem. The hidden state is derived from the cell state via the output gate.",
    explanationChinese: "细胞状态C_t就像贯穿整个LSTM链的传送带。信息可以通过门添加或移除，但也可以在许多时间步中不变地流动。这条线性通路允许梯度自由地向后流动，解决了梯度消失问题。隐藏状态通过输出门从细胞状态导出。",
    diagram: "",
    terms: ["lstm", "vanishing_gradient"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 115,
    q: "What is beam search in sequence generation?",
    qChinese: "序列生成中的束搜索是什么？",
    options: [
      "A) A random sampling method for token generation",
      "B) A search algorithm that maintains the top-k most probable partial sequences at each decoding step",
      "C) A method to parallelize sequence processing",
      "D) A training technique for RNNs"
    ],
    optionsChinese: [
      "A) 一种用于标记生成的随机采样方法",
      "B) 在每个解码步骤维护top-k个最可能的部分序列的搜索算法",
      "C) 一种并行化序列处理的方法",
      "D) 一种RNN训练技术"
    ],
    answer: 1,
    explanation: "Beam search expands the top-k (beam width) most likely sequences at each time step rather than just the single best (greedy search). At each step, each beam is extended by all vocabulary tokens, scored, and the top-k are kept. This explores multiple hypotheses and usually produces better results than greedy decoding, though it increases computation by a factor of k.",
    explanationChinese: "束搜索在每个时间步扩展top-k（束宽度）个最可能的序列，而不仅是单个最佳（贪心搜索）。在每一步，每个束被所有词汇标记扩展、评分，保留top-k。这探索了多个假设，通常比贪心解码产生更好的结果，但计算量增加了k倍。",
    diagram: "",
    terms: ["recurrent_neural_network", "lstm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 116,
    q: "What are the input gate and candidate values in an LSTM?",
    qChinese: "LSTM中的输入门和候选值是什么？",
    options: [
      "A) The input gate decides how much new information to add; candidate values are the proposed new content computed by tanh",
      "B) The raw input data and its labels",
      "C) The first and last hidden states",
      "D) The learning rate and batch size"
    ],
    optionsChinese: [
      "A) 输入门决定添加多少新信息；候选值是tanh计算的建议新内容",
      "B) 原始输入数据及其标签",
      "C) 第一个和最后一个隐藏状态",
      "D) 学习率和批量大小"
    ],
    answer: 0,
    explanation: "The input gate i_t = sigmoid(W_i*[h_{t-1}, x_t] + b_i) controls how much new information enters the cell state. The candidate values C_tilde_t = tanh(W_c*[h_{t-1}, x_t] + b_c) represent the proposed new content. The cell state update combines both: C_t = f_t * C_{t-1} + i_t * C_tilde_t. The sigmoid gate acts as a filter on the tanh-generated candidates.",
    explanationChinese: "输入门i_t = sigmoid(W_i*[h_{t-1}, x_t] + b_i)控制多少新信息进入细胞状态。候选值C_tilde_t = tanh(W_c*[h_{t-1}, x_t] + b_c)代表建议的新内容。细胞状态更新结合两者：C_t = f_t * C_{t-1} + i_t * C_tilde_t。sigmoid门作为tanh生成候选值的过滤器。",
    diagram: "",
    terms: ["lstm", "recurrent_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 117,
    q: "What is the output gate in an LSTM?",
    qChinese: "LSTM中的输出门是什么？",
    options: [
      "A) The final layer of the network that produces predictions",
      "B) A gate that controls which parts of the cell state are output as the hidden state",
      "C) A gate that outputs the loss value",
      "D) A gate that decides when to stop sequence generation"
    ],
    optionsChinese: [
      "A) 产生预测的网络最终层",
      "B) 控制细胞状态哪些部分输出为隐藏状态的门",
      "C) 输出损失值的门",
      "D) 决定何时停止序列生成的门"
    ],
    answer: 1,
    explanation: "The output gate o_t = sigmoid(W_o*[h_{t-1}, x_t] + b_o) determines what parts of the cell state to expose as the hidden state: h_t = o_t * tanh(C_t). The tanh squashes cell values to [-1, 1], and the output gate filters which components to pass through. This allows the LSTM to keep information in the cell state without necessarily outputting it.",
    explanationChinese: "输出门o_t = sigmoid(W_o*[h_{t-1}, x_t] + b_o)决定将细胞状态的哪些部分暴露为隐藏状态：h_t = o_t * tanh(C_t)。tanh将细胞值压缩到[-1, 1]，输出门过滤哪些组件通过。这允许LSTM在细胞状态中保留信息而不一定将其输出。",
    diagram: "",
    terms: ["lstm", "recurrent_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 118,
    q: "What is an Encoder-Decoder architecture in sequence modeling?",
    qChinese: "序列建模中的编码器-解码器架构是什么？",
    options: [
      "A) Two identical networks trained on different tasks",
      "B) A network with two hidden layers",
      "C) A network that encodes data for compression and decodes it for decompression",
      "D) An architecture where the encoder processes the input sequence into a representation and the decoder generates the output sequence from it"
    ],
    optionsChinese: [
      "A) 在不同任务上训练的两个相同网络",
      "B) 具有两个隐藏层的网络",
      "C) 编码数据进行压缩并解码进行解压的网络",
      "D) 编码器将输入序列处理为表示，解码器从中生成输出序列的架构"
    ],
    answer: 3,
    explanation: "The encoder-decoder architecture maps variable-length input sequences to variable-length output sequences. The encoder reads the input and produces a fixed representation (context vector or sequence of states). The decoder generates the output token by token, conditioned on the encoder's representation. This paradigm is fundamental to machine translation, summarization, and speech recognition.",
    explanationChinese: "编码器-解码器架构将可变长度输入序列映射到可变长度输出序列。编码器读取输入并产生固定表示（上下文向量或状态序列）。解码器根据编码器的表示逐个生成输出标记。这种范式是机器翻译、摘要和语音识别的基础。",
    diagram: "",
    terms: ["recurrent_neural_network", "lstm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 119,
    q: "What is truncated backpropagation through time (TBPTT)?",
    qChinese: "什么是截断时间反向传播（TBPTT）？",
    options: [
      "A) Limiting the number of time steps over which gradients are propagated backward to reduce memory and computation",
      "B) Training an RNN for a fixed number of epochs",
      "C) Removing some time steps from the training data",
      "D) Truncating the hidden state size"
    ],
    optionsChinese: [
      "A) 限制梯度向后传播的时间步数以减少内存和计算",
      "B) 对RNN训练固定数量的epoch",
      "C) 从训练数据中移除某些时间步",
      "D) 截断隐藏状态大小"
    ],
    answer: 0,
    explanation: "TBPTT splits long sequences into shorter segments and only backpropagates gradients for a fixed number of time steps (e.g., 35). This makes training tractable for long sequences by bounding memory and computation. The hidden state carries forward across segments, but gradients are truncated. This trades gradient accuracy for computational feasibility, which works well in practice.",
    explanationChinese: "TBPTT将长序列分割为较短的段，并仅对固定数量的时间步（如35）反向传播梯度。通过限制内存和计算，这使得长序列的训练可行。隐藏状态在段之间向前传递，但梯度被截断。这以梯度准确性换取计算可行性，在实践中效果很好。",
    diagram: "",
    terms: ["recurrent_neural_network", "backpropagation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 120,
    q: "What is the difference between many-to-one and many-to-many RNN architectures?",
    qChinese: "多对一和多对多RNN架构有什么区别？",
    options: [
      "A) Many-to-one has more layers than many-to-many",
      "B) Many-to-one processes multiple datasets; many-to-many processes one",
      "C) Many-to-one produces a single output from a sequence input; many-to-many produces an output sequence from an input sequence",
      "D) They differ only in the number of training examples"
    ],
    optionsChinese: [
      "A) 多对一比多对多有更多层",
      "B) 多对一处理多个数据集；多对多处理一个",
      "C) 多对一从序列输入产生单个输出；多对多从输入序列产生输出序列",
      "D) 它们仅在训练样本数量上不同"
    ],
    answer: 2,
    explanation: "RNN architectures vary by input-output configuration. Many-to-one (e.g., sentiment analysis) takes a sequence and produces a single output using the final hidden state. Many-to-many (e.g., machine translation) takes a sequence and produces a sequence. Other variants include one-to-many (image captioning) and one-to-one (standard classification).",
    explanationChinese: "RNN架构因输入-输出配置而异。多对一（如情感分析）接受序列并使用最终隐藏状态产生单个输出。多对多（如机器翻译）接受序列并产生序列。其他变体包括一对多（图像描述）和一对一（标准分类）。",
    diagram: "",
    terms: ["recurrent_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 121,
    q: "What is the update gate in a GRU?",
    qChinese: "GRU中的更新门是什么？",
    options: [
      "A) A gate that updates the learning rate",
      "B) A mechanism that updates the network architecture during training",
      "C) A gate that controls how much of the previous hidden state to retain versus how much new information to incorporate",
      "D) A gate that determines when to update the weights"
    ],
    optionsChinese: [
      "A) 更新学习率的门",
      "B) 在训练期间更新网络架构的机制",
      "C) 控制保留多少先前隐藏状态与合并多少新信息的门",
      "D) 确定何时更新权重的门"
    ],
    answer: 2,
    explanation: "The update gate z_t = sigmoid(W_z*[h_{t-1}, x_t]) determines the balance between the previous hidden state and the new candidate state: h_t = (1-z_t)*h_{t-1} + z_t*h_tilde. When z_t is close to 1, the model mostly uses new information; when close to 0, it keeps the old state. This effectively combines LSTM's forget and input gates into one mechanism.",
    explanationChinese: "更新门z_t = sigmoid(W_z*[h_{t-1}, x_t])决定先前隐藏状态和新候选状态之间的平衡：h_t = (1-z_t)*h_{t-1} + z_t*h_tilde。当z_t接近1时，模型主要使用新信息；接近0时，保持旧状态。这有效地将LSTM的遗忘门和输入门合并为一个机制。",
    diagram: "",
    terms: ["recurrent_neural_network", "lstm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 122,
    q: "What is the reset gate in a GRU?",
    qChinese: "GRU中的重置门是什么？",
    options: [
      "A) A gate that resets the network weights",
      "B) A mechanism to reset training from scratch",
      "C) A gate that controls how much of the previous hidden state is used to compute the new candidate hidden state",
      "D) A gate that resets the learning rate to its initial value"
    ],
    optionsChinese: [
      "A) 重置网络权重的门",
      "B) 从头重新开始训练的机制",
      "C) 控制使用多少先前隐藏状态来计算新候选隐藏状态的门",
      "D) 将学习率重置为初始值的门"
    ],
    answer: 2,
    explanation: "The reset gate r_t = sigmoid(W_r*[h_{t-1}, x_t]) determines how much past information to forget when computing the candidate state: h_tilde = tanh(W*[r_t * h_{t-1}, x_t]). When r_t is close to 0, the candidate state ignores the previous hidden state, effectively resetting the memory. This allows the GRU to capture short-term dependencies when needed.",
    explanationChinese: "重置门r_t = sigmoid(W_r*[h_{t-1}, x_t])决定在计算候选状态时忘记多少过去信息：h_tilde = tanh(W*[r_t * h_{t-1}, x_t])。当r_t接近0时，候选状态忽略先前的隐藏状态，有效地重置记忆。这允许GRU在需要时捕获短期依赖关系。",
    diagram: "",
    terms: ["recurrent_neural_network", "lstm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 123,
    q: "What is an autoregressive model?",
    qChinese: "什么是自回归模型？",
    options: [
      "A) A model that generates each element conditioned on all previously generated elements",
      "B) A model that automatically selects its own architecture",
      "C) A model that regresses toward the mean automatically",
      "D) A model that uses automatic differentiation"
    ],
    optionsChinese: [
      "A) 根据所有先前生成的元素生成每个元素的模型",
      "B) 自动选择自身架构的模型",
      "C) 自动回归到均值的模型",
      "D) 使用自动微分的模型"
    ],
    answer: 0,
    explanation: "An autoregressive model generates sequences one element at a time, with each element conditioned on all previous ones: P(x) = P(x_1) * P(x_2|x_1) * P(x_3|x_1,x_2) * ... This decomposition is used in language models (GPT), speech synthesis (WaveNet), and image generation (PixelCNN). The sequential nature can be slow but produces high-quality outputs.",
    explanationChinese: "自回归模型一次生成一个元素，每个元素以所有先前元素为条件：P(x) = P(x_1) * P(x_2|x_1) * P(x_3|x_1,x_2) * ... 这种分解用于语言模型（GPT）、语音合成（WaveNet）和图像生成（PixelCNN）。其顺序特性可能较慢，但产生高质量输出。",
    diagram: "",
    terms: ["recurrent_neural_network", "transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 124,
    q: "Why are LSTMs generally preferred over vanilla RNNs?",
    qChinese: "为什么LSTM通常优于原始RNN？",
    options: [
      "A) LSTMs have fewer parameters",
      "B) LSTMs can capture long-range dependencies through their gating mechanism and cell state",
      "C) LSTMs are faster to train",
      "D) LSTMs do not require backpropagation"
    ],
    optionsChinese: [
      "A) LSTM参数更少",
      "B) LSTM可以通过其门控机制和细胞状态捕获长期依赖关系",
      "C) LSTM训练更快",
      "D) LSTM不需要反向传播"
    ],
    answer: 1,
    explanation: "LSTMs solve the vanishing gradient problem through their cell state highway and gating mechanisms. The forget, input, and output gates control information flow, allowing LSTMs to selectively remember or forget information over hundreds of time steps. Vanilla RNNs struggle with sequences longer than 10-20 steps due to gradient degradation during BPTT.",
    explanationChinese: "LSTM通过其细胞状态高速公路和门控机制解决了梯度消失问题。遗忘门、输入门和输出门控制信息流，使LSTM可以在数百个时间步上选择性地记住或遗忘信息。原始RNN由于BPTT期间的梯度退化，难以处理超过10-20步的序列。",
    diagram: "",
    terms: ["lstm", "vanishing_gradient", "recurrent_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 125,
    q: "What is the Elman network?",
    qChinese: "什么是Elman网络？",
    options: [
      "A) A type of LSTM with additional gates",
      "B) A simple recurrent network where the hidden state from the previous time step is fed back as input along with the current input",
      "C) A convolutional network designed by Elman",
      "D) A transformer variant"
    ],
    optionsChinese: [
      "A) 具有额外门的LSTM类型",
      "B) 一种简单的循环网络，前一时间步的隐藏状态与当前输入一起作为输入反馈",
      "C) 由Elman设计的卷积网络",
      "D) 一种transformer变体"
    ],
    answer: 1,
    explanation: "The Elman network (1990) is one of the simplest RNN architectures. It has a hidden layer whose activations are copied and fed back as additional input at the next time step: h_t = f(W_h*h_{t-1} + W_x*x_t + b). This simple recurrence enables basic sequence processing but suffers from vanishing gradients for long sequences, motivating LSTM development.",
    explanationChinese: "Elman网络（1990）是最简单的RNN架构之一。它有一个隐藏层，其激活被复制并在下一个时间步作为额外输入反馈：h_t = f(W_h*h_{t-1} + W_x*x_t + b)。这种简单的递归实现了基本的序列处理，但对长序列存在梯度消失问题，推动了LSTM的发展。",
    diagram: "",
    terms: ["recurrent_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 126,
    q: "How do RNNs handle variable-length sequences?",
    qChinese: "RNN如何处理可变长度序列？",
    options: [
      "A) By processing one element at a time and sharing weights across time steps, naturally handling any sequence length",
      "B) By truncating all sequences to a fixed length",
      "C) By adding extra neurons for longer sequences",
      "D) By duplicating shorter sequences to match the longest one"
    ],
    optionsChinese: [
      "A) 通过一次处理一个元素并在时间步之间共享权重，自然处理任何序列长度",
      "B) 将所有序列截断为固定长度",
      "C) 为更长的序列添加额外神经元",
      "D) 复制较短序列以匹配最长的"
    ],
    answer: 0,
    explanation: "RNNs process sequences element by element using the same recurrent weights at each step. This weight sharing means the same network handles sequences of any length. In practice, batching requires padding shorter sequences and using masks to ignore padded positions. The hidden state accumulates information regardless of sequence length.",
    explanationChinese: "RNN使用每一步相同的循环权重逐元素处理序列。这种权重共享意味着同一网络处理任何长度的序列。在实践中，批处理需要对较短序列进行填充并使用掩码忽略填充位置。隐藏状态无论序列长度如何都会累积信息。",
    diagram: "",
    terms: ["recurrent_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 127,
    q: "What is the exposure bias problem in sequence generation?",
    qChinese: "序列生成中的暴露偏差问题是什么？",
    options: [
      "A) The model being exposed to too much training data",
      "B) The model memorizing the training sequences",
      "C) Bias in the training dataset",
      "D) The discrepancy between training (with ground truth inputs) and inference (with model's own predictions), causing error accumulation"
    ],
    optionsChinese: [
      "A) 模型暴露于太多训练数据",
      "B) 模型记住训练序列",
      "C) 训练数据集中的偏差",
      "D) 训练（使用真实输入）和推理（使用模型自身预测）之间的差异，导致错误累积"
    ],
    answer: 3,
    explanation: "During training with teacher forcing, the model always receives ground-truth tokens as input. At inference, it must use its own (potentially incorrect) predictions, creating a distribution mismatch. Early errors compound, degrading generation quality. Scheduled sampling, reinforcement learning fine-tuning, and curriculum learning are strategies to mitigate this discrepancy.",
    explanationChinese: "在使用教师强制的训练中，模型总是接收真实标记作为输入。在推理时，它必须使用自己的（可能不正确的）预测，造成分布不匹配。早期错误会累积，降低生成质量。计划采样、强化学习微调和课程学习是缓解这种差异的策略。",
    diagram: "",
    terms: ["recurrent_neural_network", "lstm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 128,
    q: "What is the difference between LSTM and GRU in terms of computational complexity?",
    qChinese: "LSTM和GRU在计算复杂度方面有什么区别？",
    options: [
      "A) LSTM and GRU have identical computational costs",
      "B) GRU is slower because it computes reset and update gates",
      "C) LSTM is always faster due to optimized implementations",
      "D) GRU is faster because it has fewer gates (2 vs 3) and no separate cell state, requiring fewer parameters"
    ],
    optionsChinese: [
      "A) LSTM和GRU具有相同的计算成本",
      "B) GRU更慢，因为它计算重置和更新门",
      "C) LSTM由于优化实现总是更快",
      "D) GRU更快，因为它有更少的门（2个对3个）且没有单独的细胞状态，需要更少参数"
    ],
    answer: 3,
    explanation: "GRU has two gates (reset and update) while LSTM has three (forget, input, output) plus a separate cell state. For hidden size h, LSTM has 4 * h * (h + input_size) parameters per layer, while GRU has 3 * h * (h + input_size). This makes GRU about 25% faster with fewer parameters, while often achieving comparable performance.",
    explanationChinese: "GRU有两个门（重置和更新），而LSTM有三个（遗忘、输入、输出）加一个单独的细胞状态。对于隐藏大小h，LSTM每层有4 * h * (h + input_size)参数，而GRU有3 * h * (h + input_size)。这使GRU快约25%且参数更少，同时通常达到可比的性能。",
    diagram: "",
    terms: ["lstm", "recurrent_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 129,
    q: "What is a language model and how do RNNs implement it?",
    qChinese: "什么是语言模型，RNN如何实现它？",
    options: [
      "A) A model that detects the language of input text",
      "B) A probability model that predicts the next token given the previous tokens, implemented as an RNN that outputs a probability distribution at each step",
      "C) A translation model between languages",
      "D) A grammar checker"
    ],
    optionsChinese: [
      "A) 检测输入文本语言的模型",
      "B) 根据前面的标记预测下一个标记的概率模型，实现为在每一步输出概率分布的RNN",
      "C) 语言间的翻译模型",
      "D) 语法检查器"
    ],
    answer: 1,
    explanation: "A language model estimates P(w_t | w_1, ..., w_{t-1}) - the probability of the next word given all previous words. RNN language models process tokens sequentially, using the hidden state to encode context, and output a softmax distribution over the vocabulary at each step. They are trained with cross-entropy loss and used for text generation, completion, and scoring.",
    explanationChinese: "语言模型估计P(w_t | w_1, ..., w_{t-1})——给定所有先前单词的下一个单词的概率。RNN语言模型顺序处理标记，使用隐藏状态编码上下文，并在每一步输出词汇表上的softmax分布。它们使用交叉熵损失训练，用于文本生成、补全和评分。",
    diagram: "",
    terms: ["recurrent_neural_network", "lstm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 130,
    q: "Why have Transformers largely replaced RNNs for sequence modeling?",
    qChinese: "为什么Transformer在很大程度上取代了RNN进行序列建模？",
    options: [
      "A) Transformers use fewer parameters",
      "B) Transformers do not require GPUs",
      "C) Transformers process all positions in parallel using self-attention, enabling faster training and better long-range dependency modeling",
      "D) RNNs cannot handle text data"
    ],
    optionsChinese: [
      "A) Transformer使用更少的参数",
      "B) Transformer不需要GPU",
      "C) Transformer使用自注意力并行处理所有位置，实现更快的训练和更好的长期依赖建模",
      "D) RNN不能处理文本数据"
    ],
    answer: 2,
    explanation: "Transformers process all sequence positions simultaneously through self-attention, eliminating RNNs' sequential bottleneck. This enables massive parallelization on GPUs, dramatically faster training. Self-attention directly connects any two positions regardless of distance, better capturing long-range dependencies. This led to breakthroughs like BERT, GPT, and T5 that far surpass RNN-based models.",
    explanationChinese: "Transformer通过自注意力同时处理所有序列位置，消除了RNN的顺序瓶颈。这实现了GPU上的大规模并行化，极大地加快了训练。自注意力直接连接任意两个位置而不受距离限制，更好地捕获长期依赖关系。这导致了BERT、GPT和T5等远超RNN模型的突破。",
    diagram: "",
    terms: ["transformer", "recurrent_neural_network", "attention_mechanism"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 131,
    q: "What is the Transformer architecture?",
    qChinese: "什么是Transformer架构？",
    options: [
      "A) A CNN variant for image transformation",
      "B) A neural network architecture based entirely on self-attention mechanisms, without recurrence or convolutions",
      "C) A type of RNN with additional transformation layers",
      "D) A data preprocessing pipeline"
    ],
    optionsChinese: [
      "A) 用于图像变换的CNN变体",
      "B) 完全基于自注意力机制的神经网络架构，不使用循环或卷积",
      "C) 具有额外变换层的RNN类型",
      "D) 数据预处理管道"
    ],
    answer: 1,
    explanation: "The Transformer (Vaswani et al., 2017) processes sequences using self-attention to relate all positions simultaneously. It consists of an encoder and decoder, each with multi-head self-attention and feedforward layers. The key innovation is that self-attention allows O(1) path length between any two positions, enabling parallel computation and superior long-range modeling.",
    explanationChinese: "Transformer（Vaswani等人，2017）使用自注意力同时关联所有位置来处理序列。它由编码器和解码器组成，每个都有多头自注意力和前馈层。关键创新是自注意力允许任意两个位置之间O(1)路径长度，实现并行计算和优越的长程建模。",
    diagram: "",
    terms: ["transformer", "attention_mechanism"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 132,
    q: "What is self-attention (intra-attention)?",
    qChinese: "什么是自注意力（内部注意力）？",
    options: [
      "A) An attention mechanism that requires an external query",
      "B) A mechanism that selectively drops attention heads",
      "C) An attention mechanism where a sequence attends to itself, computing relationships between all pairs of positions",
      "D) An attention mechanism that only looks at adjacent tokens"
    ],
    optionsChinese: [
      "A) 需要外部查询的注意力机制",
      "B) 选择性丢弃注意力头的机制",
      "C) 序列对自身进行注意的机制，计算所有位置对之间的关系",
      "D) 仅查看相邻标记的注意力机制"
    ],
    answer: 2,
    explanation: "Self-attention computes attention weights between every pair of positions in the same sequence. Each position creates Query (Q), Key (K), and Value (V) vectors. Attention scores are computed as softmax(QK^T / sqrt(d_k)) * V. This allows each token to directly attend to every other token, capturing dependencies regardless of distance, with O(n^2) complexity for sequence length n.",
    explanationChinese: "自注意力计算同一序列中每对位置之间的注意力权重。每个位置创建Query(Q)、Key(K)和Value(V)向量。注意力分数计算为softmax(QK^T / sqrt(d_k)) * V。这允许每个标记直接关注其他每个标记，无论距离如何都能捕获依赖关系，对长度为n的序列复杂度为O(n^2)。",
    diagram: "",
    terms: ["attention_mechanism", "transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 133,
    q: "What are Query, Key, and Value in the attention mechanism?",
    qChinese: "注意力机制中的Query、Key和Value是什么？",
    options: [
      "A) Database terminology borrowed for neural networks with no mathematical meaning",
      "B) Three different training datasets",
      "C) Three learned linear projections of the input: Query asks what to look for, Key represents what each position offers, Value is the content to aggregate",
      "D) Three separate neural networks"
    ],
    optionsChinese: [
      "A) 从数据库借用的术语，在神经网络中没有数学意义",
      "B) 三个不同的训练数据集",
      "C) 输入的三个学习线性投影：Query询问要查找什么，Key表示每个位置提供什么，Value是要聚合的内容",
      "D) 三个独立的神经网络"
    ],
    answer: 2,
    explanation: "For each input position, learned weight matrices project the embedding into Q, K, and V vectors. The attention score between positions i and j is the dot product of Q_i and K_j, measuring compatibility. These scores are scaled by sqrt(d_k) and softmaxed to get weights, which are used to compute a weighted sum of V vectors. This is the scaled dot-product attention mechanism.",
    explanationChinese: "对于每个输入位置，学习的权重矩阵将嵌入投影为Q、K和V向量。位置i和j之间的注意力分数是Q_i和K_j的点积，衡量兼容性。这些分数除以sqrt(d_k)并softmax得到权重，用于计算V向量的加权和。这就是缩放点积注意力机制。",
    diagram: "",
    terms: ["attention_mechanism", "transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 134,
    q: "What is multi-head attention?",
    qChinese: "什么是多头注意力？",
    options: [
      "A) Using attention in multiple layers of the network",
      "B) Running multiple attention operations in parallel with different learned projections, then concatenating and projecting results",
      "C) Applying attention to multiple input sequences simultaneously",
      "D) An attention mechanism that uses multiple loss functions"
    ],
    optionsChinese: [
      "A) 在网络的多层中使用注意力",
      "B) 使用不同的学习投影并行运行多个注意力操作，然后拼接和投影结果",
      "C) 同时对多个输入序列应用注意力",
      "D) 使用多个损失函数的注意力机制"
    ],
    answer: 1,
    explanation: "Multi-head attention runs h parallel attention operations (heads), each with separate Q, K, V projections of dimension d_k = d_model/h. Each head can learn different attention patterns (e.g., one head for syntax, another for semantics). Outputs are concatenated and linearly projected: MultiHead(Q,K,V) = Concat(head_1,...,head_h) * W_O. Typical models use 8-16 heads.",
    explanationChinese: "多头注意力运行h个并行注意力操作（头），每个有单独的Q、K、V投影，维度为d_k = d_model/h。每个头可以学习不同的注意力模式（例如，一个头用于语法，另一个用于语义）。输出被拼接并线性投影：MultiHead(Q,K,V) = Concat(head_1,...,head_h) * W_O。典型模型使用8-16个头。",
    diagram: "",
    terms: ["attention_mechanism", "transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 135,
    q: "Why is the attention score scaled by 1/sqrt(d_k)?",
    qChinese: "为什么注意力分数要除以sqrt(d_k)？",
    options: [
      "A) To make the computation faster",
      "B) To normalize the output to have unit variance",
      "C) To prevent dot products from becoming too large in high dimensions, which would push softmax into saturation regions with tiny gradients",
      "D) To reduce the number of parameters"
    ],
    optionsChinese: [
      "A) 使计算更快",
      "B) 将输出归一化为单位方差",
      "C) 防止高维中的点积变得太大，这会将softmax推入梯度极小的饱和区域",
      "D) 减少参数数量"
    ],
    answer: 2,
    explanation: "For random vectors in d_k dimensions, their dot product has variance proportional to d_k. Without scaling, large d_k values produce very large dot products, causing softmax to output near-one-hot distributions with vanishing gradients. Dividing by sqrt(d_k) keeps the variance of dot products at approximately 1, ensuring softmax operates in a sensitive region with useful gradients.",
    explanationChinese: "对于d_k维的随机向量，它们的点积方差与d_k成正比。不缩放时，大的d_k值产生非常大的点积，导致softmax输出接近one-hot的分布，梯度消失。除以sqrt(d_k)使点积方差保持约为1，确保softmax在有用梯度的敏感区域运行。",
    diagram: "",
    terms: ["attention_mechanism", "transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 136,
    q: "What is positional encoding in the Transformer?",
    qChinese: "Transformer中的位置编码是什么？",
    options: [
      "A) Encoding the position of the model in the training pipeline",
      "B) Numbering the layers in the network",
      "C) Encoding the spatial position of image pixels",
      "D) Adding position information to input embeddings because self-attention has no inherent notion of token order"
    ],
    optionsChinese: [
      "A) 编码模型在训练管道中的位置",
      "B) 对网络中的层编号",
      "C) 编码图像像素的空间位置",
      "D) 向输入嵌入添加位置信息，因为自注意力没有固有的标记顺序概念"
    ],
    answer: 3,
    explanation: "Since self-attention treats input as a set (order-invariant), positional encodings inject sequence order information. The original Transformer uses sinusoidal functions: PE(pos, 2i) = sin(pos/10000^(2i/d)), PE(pos, 2i+1) = cos(pos/10000^(2i/d)). These are added to input embeddings. Modern models like BERT and GPT use learned positional embeddings instead.",
    explanationChinese: "由于自注意力将输入视为集合（顺序不变），位置编码注入序列顺序信息。原始Transformer使用正弦函数：PE(pos, 2i) = sin(pos/10000^(2i/d)), PE(pos, 2i+1) = cos(pos/10000^(2i/d))。这些被添加到输入嵌入中。BERT和GPT等现代模型使用学习的位置嵌入代替。",
    diagram: "",
    terms: ["transformer", "attention_mechanism"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 137,
    q: "What is the feedforward network (FFN) in a Transformer block?",
    qChinese: "Transformer块中的前馈网络（FFN）是什么？",
    options: [
      "A) The entire Transformer architecture",
      "B) The input embedding layer",
      "C) A two-layer fully connected network applied independently to each position after the attention sublayer",
      "D) The output classification layer"
    ],
    optionsChinese: [
      "A) 整个Transformer架构",
      "B) 输入嵌入层",
      "C) 在注意力子层之后独立应用于每个位置的两层全连接网络",
      "D) 输出分类层"
    ],
    answer: 2,
    explanation: "Each Transformer block contains a position-wise FFN: FFN(x) = max(0, xW_1 + b_1)W_2 + b_2 (or GELU activation). It is applied identically to each position. The inner dimension (d_ff) is typically 4x the model dimension. The FFN adds nonlinearity and increases the model's capacity. Recent research suggests FFNs act as key-value memories storing factual knowledge.",
    explanationChinese: "每个Transformer块包含一个逐位置FFN：FFN(x) = max(0, xW_1 + b_1)W_2 + b_2（或GELU激活）。它对每个位置相同地应用。内部维度（d_ff）通常是模型维度的4倍。FFN添加非线性并增加模型容量。最近的研究表明FFN充当存储事实知识的键值记忆。",
    diagram: "",
    terms: ["transformer", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 138,
    q: "What is masked self-attention in the Transformer decoder?",
    qChinese: "Transformer解码器中的掩码自注意力是什么？",
    options: [
      "A) Randomly masking some attention heads during training",
      "B) Masking out irrelevant tokens from the input",
      "C) Preventing each position from attending to subsequent positions to maintain the autoregressive property during generation",
      "D) Hiding attention weights from the user"
    ],
    optionsChinese: [
      "A) 在训练期间随机掩码一些注意力头",
      "B) 从输入中掩码掉无关标记",
      "C) 防止每个位置关注后续位置，以在生成过程中维持自回归特性",
      "D) 对用户隐藏注意力权重"
    ],
    answer: 2,
    explanation: "Masked (causal) self-attention sets attention weights to negative infinity (before softmax) for all future positions. This ensures position i can only attend to positions 1 through i, preserving the autoregressive property needed for generation. The mask is an upper triangular matrix. This allows parallel training while maintaining left-to-right generation at inference time.",
    explanationChinese: "掩码（因果）自注意力将所有未来位置的注意力权重设为负无穷（在softmax之前）。这确保位置i只能关注位置1到i，保持生成所需的自回归特性。掩码是上三角矩阵。这允许并行训练同时在推理时维持从左到右的生成。",
    diagram: "",
    terms: ["transformer", "attention_mechanism"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 139,
    q: "What is cross-attention in the Transformer?",
    qChinese: "Transformer中的交叉注意力是什么？",
    options: [
      "A) Attention between two different heads",
      "B) An attention mechanism where the decoder queries attend to encoder keys and values, connecting encoder and decoder",
      "C) Attention that crosses multiple layers",
      "D) Attention between different training batches"
    ],
    optionsChinese: [
      "A) 两个不同头之间的注意力",
      "B) 解码器查询关注编码器键和值的注意力机制，连接编码器和解码器",
      "C) 跨越多层的注意力",
      "D) 不同训练批次之间的注意力"
    ],
    answer: 1,
    explanation: "Cross-attention (encoder-decoder attention) in the Transformer decoder has queries from the decoder and keys/values from the encoder output. This allows each decoder position to attend to all encoder positions, deciding which parts of the input are relevant for generating each output token. It is the bridge between the encoder and decoder in sequence-to-sequence Transformers.",
    explanationChinese: "Transformer解码器中的交叉注意力（编码器-解码器注意力）的查询来自解码器，键/值来自编码器输出。这允许每个解码器位置关注所有编码器位置，决定输入的哪些部分与生成每个输出标记相关。它是序列到序列Transformer中编码器和解码器之间的桥梁。",
    diagram: "",
    terms: ["transformer", "attention_mechanism"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 140,
    q: "What is the BERT model?",
    qChinese: "什么是BERT模型？",
    options: [
      "A) A decoder-only Transformer for text generation",
      "B) An LSTM-based language model",
      "C) A convolutional model for text classification",
      "D) A bidirectional Transformer encoder pre-trained with masked language modeling and next sentence prediction"
    ],
    optionsChinese: [
      "A) 用于文本生成的仅解码器Transformer",
      "B) 基于LSTM的语言模型",
      "C) 用于文本分类的卷积模型",
      "D) 使用掩码语言建模和下一句预测预训练的双向Transformer编码器"
    ],
    answer: 3,
    explanation: "BERT (Bidirectional Encoder Representations from Transformers) uses a Transformer encoder to process text bidirectionally. It is pre-trained on two tasks: Masked Language Modeling (predicting masked tokens) and Next Sentence Prediction. This enables rich contextual representations that can be fine-tuned for many downstream tasks like classification, QA, and named entity recognition.",
    explanationChinese: "BERT（来自Transformer的双向编码器表示）使用Transformer编码器双向处理文本。它在两个任务上预训练：掩码语言建模（预测被掩码的标记）和下一句预测。这产生了丰富的上下文表示，可以微调用于分类、问答和命名实体识别等下游任务。",
    diagram: "",
    terms: ["transformer", "attention_mechanism", "fine_tuning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 141,
    q: "What is the GPT model architecture?",
    qChinese: "GPT模型架构是什么？",
    options: [
      "A) A bidirectional encoder like BERT",
      "B) An encoder-decoder Transformer",
      "C) A decoder-only Transformer that uses masked (causal) self-attention for autoregressive language modeling",
      "D) A recurrent neural network"
    ],
    optionsChinese: [
      "A) 像BERT一样的双向编码器",
      "B) 编码器-解码器Transformer",
      "C) 使用掩码（因果）自注意力进行自回归语言建模的仅解码器Transformer",
      "D) 循环神经网络"
    ],
    answer: 2,
    explanation: "GPT (Generative Pre-trained Transformer) uses a stack of Transformer decoder blocks with causal masking, trained to predict the next token. Each token can only attend to previous tokens, making it autoregressive. Pre-trained on massive text corpora, GPT models (GPT-2, GPT-3, GPT-4) demonstrate emergent capabilities like few-shot learning and reasoning as scale increases.",
    explanationChinese: "GPT（生成式预训练Transformer）使用带因果掩码的Transformer解码器块堆叠，训练预测下一个标记。每个标记只能关注先前的标记，使其成为自回归的。在大规模文本语料库上预训练，GPT模型（GPT-2、GPT-3、GPT-4）随着规模增加展现出少样本学习和推理等涌现能力。",
    diagram: "",
    terms: ["transformer", "attention_mechanism"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 142,
    q: "What is the layer normalization in Transformers?",
    qChinese: "Transformer中的层归一化是什么？",
    options: [
      "A) Normalizing across the batch dimension",
      "B) Normalizing across the feature dimension for each individual example, independent of batch size",
      "C) Normalizing the learning rate for each layer",
      "D) Normalizing the attention weights"
    ],
    optionsChinese: [
      "A) 跨批次维度归一化",
      "B) 对每个单独样本跨特征维度归一化，独立于批量大小",
      "C) 对每层的学习率归一化",
      "D) 归一化注意力权重"
    ],
    answer: 1,
    explanation: "Layer normalization normalizes across the feature dimension for each individual sample: LN(x) = gamma * (x - mean) / sqrt(var + eps) + beta. Unlike batch normalization, it does not depend on batch size and works identically during training and inference. It is preferred in Transformers because it handles variable-length sequences and small batch sizes better than batch norm.",
    explanationChinese: "层归一化对每个单独样本跨特征维度归一化：LN(x) = gamma * (x - mean) / sqrt(var + eps) + beta。与批量归一化不同，它不依赖于批量大小，在训练和推理期间表现相同。在Transformer中更受青睐，因为它比批量归一化更好地处理可变长度序列和小批量大小。",
    diagram: "",
    terms: ["transformer", "batch_normalization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 143,
    q: "What is the difference between Pre-LN and Post-LN in Transformers?",
    qChinese: "Transformer中Pre-LN和Post-LN有什么区别？",
    options: [
      "A) They use different normalization formulas",
      "B) Pre-LN is used before training; Post-LN after training",
      "C) Pre-LN applies layer norm before each sublayer; Post-LN applies it after, with Post-LN being the original design and Pre-LN being more training-stable",
      "D) They differ only in computational cost"
    ],
    optionsChinese: [
      "A) 它们使用不同的归一化公式",
      "B) Pre-LN在训练前使用；Post-LN在训练后使用",
      "C) Pre-LN在每个子层之前应用层归一化；Post-LN在之后应用，Post-LN是原始设计，Pre-LN训练更稳定",
      "D) 它们仅在计算成本上不同"
    ],
    answer: 2,
    explanation: "The original Transformer uses Post-LN: output = LN(x + Sublayer(x)). Pre-LN moves normalization inside: output = x + Sublayer(LN(x)). Pre-LN produces more stable gradients and allows training without learning rate warmup, making it easier to train very deep Transformers. Most modern large language models use Pre-LN or variants like RMSNorm for training stability.",
    explanationChinese: "原始Transformer使用Post-LN：output = LN(x + Sublayer(x))。Pre-LN将归一化移到内部：output = x + Sublayer(LN(x))。Pre-LN产生更稳定的梯度，允许不使用学习率预热进行训练，使非常深的Transformer更容易训练。大多数现代大语言模型使用Pre-LN或RMSNorm等变体以获得训练稳定性。",
    diagram: "",
    terms: ["transformer", "batch_normalization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 144,
    q: "What is Rotary Position Embedding (RoPE)?",
    qChinese: "什么是旋转位置嵌入（RoPE）？",
    options: [
      "A) Randomly rotating input embeddings",
      "B) A positional encoding method that applies rotation matrices to query and key vectors, encoding relative positions through geometric rotations",
      "C) Rotating the attention weights during training",
      "D) A data augmentation technique for images"
    ],
    optionsChinese: [
      "A) 随机旋转输入嵌入",
      "B) 对查询和键向量应用旋转矩阵的位置编码方法，通过几何旋转编码相对位置",
      "C) 在训练期间旋转注意力权重",
      "D) 图像的数据增强技术"
    ],
    answer: 1,
    explanation: "RoPE encodes position by rotating query and key vectors in 2D subspaces. The rotation angle depends on position, so the dot product between q_m and k_n naturally depends on their relative position (m-n). RoPE maintains translation invariance, generalizes to longer sequences, and is used in LLaMA, PaLM, and other modern LLMs due to its elegant mathematical properties.",
    explanationChinese: "RoPE通过在2D子空间中旋转查询和键向量来编码位置。旋转角度取决于位置，因此q_m和k_n之间的点积自然依赖于它们的相对位置(m-n)。RoPE保持平移不变性，可泛化到更长序列，因其优雅的数学性质被LLaMA、PaLM和其他现代LLM使用。",
    diagram: "",
    terms: ["transformer", "attention_mechanism"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 145,
    q: "What is the KV-cache in Transformer inference?",
    qChinese: "Transformer推理中的KV缓存是什么？",
    options: [
      "A) Storing previously computed key and value tensors to avoid recomputation during autoregressive generation",
      "B) Caching the model weights on disk",
      "C) A cache for training data",
      "D) Memory for storing the vocabulary"
    ],
    optionsChinese: [
      "A) 存储先前计算的键和值张量，以避免在自回归生成过程中重新计算",
      "B) 将模型权重缓存在磁盘上",
      "C) 训练数据的缓存",
      "D) 存储词汇表的内存"
    ],
    answer: 0,
    explanation: "During autoregressive generation, each new token requires attending to all previous tokens. Without KV-cache, this means recomputing keys and values for all past positions at each step. The KV-cache stores these computed K and V tensors, so only the new token's Q, K, V need to be computed. This reduces generation from O(n^2) to O(n) per token but uses significant memory.",
    explanationChinese: "在自回归生成过程中，每个新标记需要关注所有先前标记。没有KV缓存，这意味着在每一步重新计算所有过去位置的键和值。KV缓存存储这些计算好的K和V张量，因此只需计算新标记的Q、K、V。这将每个标记的生成从O(n^2)减少到O(n)，但使用大量内存。",
    diagram: "",
    terms: ["transformer", "attention_mechanism"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 146,
    q: "What is the T5 (Text-to-Text Transfer Transformer) model?",
    qChinese: "什么是T5（文本到文本迁移Transformer）模型？",
    options: [
      "A) An encoder-decoder Transformer that frames all NLP tasks as text-to-text problems",
      "B) A text-to-image generation model",
      "C) A five-layer Transformer",
      "D) A model that processes five languages"
    ],
    optionsChinese: [
      "A) 将所有NLP任务框架为文本到文本问题的编码器-解码器Transformer",
      "B) 文本到图像生成模型",
      "C) 五层Transformer",
      "D) 处理五种语言的模型"
    ],
    answer: 0,
    explanation: "T5 treats every NLP task (translation, summarization, classification, QA) as converting input text to output text. It uses a full encoder-decoder Transformer architecture. For classification, the model generates the class label as text. This unified framing allows a single model to handle diverse tasks. The C4 (Colossal Clean Crawled Corpus) dataset was created for T5 pre-training.",
    explanationChinese: "T5将每个NLP任务（翻译、摘要、分类、问答）视为将输入文本转换为输出文本。它使用完整的编码器-解码器Transformer架构。对于分类，模型将类别标签作为文本生成。这种统一框架允许单个模型处理多样化的任务。C4（巨大清洁爬取语料库）数据集是为T5预训练创建的。",
    diagram: "",
    terms: ["transformer", "transfer_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 147,
    q: "What is the computational complexity of self-attention with respect to sequence length?",
    qChinese: "自注意力相对于序列长度的计算复杂度是多少？",
    options: [
      "A) O(n^2) in both time and memory, where n is the sequence length",
      "B) O(n)",
      "C) O(n log n)",
      "D) O(1)"
    ],
    optionsChinese: [
      "A) 时间和内存均为O(n^2)，其中n是序列长度",
      "B) O(n)",
      "C) O(n log n)",
      "D) O(1)"
    ],
    answer: 0,
    explanation: "Self-attention computes pairwise interactions between all n positions, creating an n x n attention matrix. This gives O(n^2 * d) time complexity and O(n^2) memory for the attention weights. This quadratic scaling limits Transformers to relatively short sequences (typically 512-8192 tokens). Efficient attention variants like linear attention, Flash Attention, and sparse attention address this limitation.",
    explanationChinese: "自注意力计算所有n个位置之间的成对交互，创建n x n注意力矩阵。这给出O(n^2 * d)的时间复杂度和O(n^2)的注意力权重内存。这种二次增长将Transformer限制在相对较短的序列（通常512-8192个标记）。线性注意力、Flash Attention和稀疏注意力等高效注意力变体解决了这一限制。",
    diagram: "",
    terms: ["attention_mechanism", "transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 148,
    q: "What is Flash Attention?",
    qChinese: "什么是Flash Attention？",
    options: [
      "A) A faster version of the Transformer that removes attention",
      "B) An IO-aware algorithm that computes exact attention with reduced memory by tiling and recomputation, avoiding materializing the full attention matrix",
      "C) A simplified attention mechanism that uses random projections",
      "D) An attention mechanism designed for flash memory storage"
    ],
    optionsChinese: [
      "A) 移除注意力的更快Transformer版本",
      "B) 一种IO感知算法，通过分块和重计算减少内存使用来计算精确注意力，避免实体化完整注意力矩阵",
      "C) 使用随机投影的简化注意力机制",
      "D) 为闪存存储设计的注意力机制"
    ],
    answer: 1,
    explanation: "Flash Attention reorganizes the attention computation to minimize memory reads/writes between GPU HBM and SRAM. It processes attention in blocks (tiles), computing softmax incrementally without storing the full n x n matrix. This reduces memory from O(n^2) to O(n) while computing exact (not approximate) attention, achieving 2-4x wall-clock speedup on modern GPUs.",
    explanationChinese: "Flash Attention重组注意力计算以最小化GPU HBM和SRAM之间的内存读写。它以块（瓦片）处理注意力，增量计算softmax而不存储完整的n x n矩阵。这将内存从O(n^2)减少到O(n)，同时计算精确（非近似）注意力，在现代GPU上实现2-4倍的实际加速。",
    diagram: "",
    terms: ["attention_mechanism", "transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 149,
    q: "What is Grouped Query Attention (GQA)?",
    qChinese: "什么是分组查询注意力（GQA）？",
    options: [
      "A) A variant where multiple query heads share the same key-value heads, reducing KV-cache memory while maintaining most of multi-head attention's quality",
      "B) Grouping multiple queries into one",
      "C) Querying multiple databases simultaneously",
      "D) An attention mechanism for grouped convolutions"
    ],
    optionsChinese: [
      "A) 多个查询头共享相同键值头的变体，减少KV缓存内存同时保持多头注意力的大部分质量",
      "B) 将多个查询分成一组",
      "C) 同时查询多个数据库",
      "D) 用于分组卷积的注意力机制"
    ],
    answer: 0,
    explanation: "GQA uses fewer key-value heads than query heads (e.g., 8 KV heads for 32 query heads). Groups of query heads share the same K and V projections. This reduces the KV-cache size proportionally, speeding up inference with minimal quality loss. Multi-Query Attention (MQA) is the extreme case where all queries share one KV head. LLaMA 2 70B and other large models use GQA.",
    explanationChinese: "GQA使用比查询头更少的键值头（例如，32个查询头使用8个KV头）。查询头的组共享相同的K和V投影。这按比例减少了KV缓存大小，以最小的质量损失加速推理。多查询注意力（MQA）是所有查询共享一个KV头的极端情况。LLaMA 2 70B和其他大模型使用GQA。",
    diagram: "",
    terms: ["attention_mechanism", "transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 150,
    q: "What is the difference between encoder-only, decoder-only, and encoder-decoder Transformers?",
    qChinese: "仅编码器、仅解码器和编码器-解码器Transformer有什么区别？",
    options: [
      "A) They differ only in the number of parameters",
      "B) They all produce identical results on the same task",
      "C) Encoder-only (BERT) uses bidirectional attention for understanding; decoder-only (GPT) uses causal attention for generation; encoder-decoder (T5) uses both for sequence-to-sequence tasks",
      "D) Encoder-only is faster than the others"
    ],
    optionsChinese: [
      "A) 它们仅在参数数量上不同",
      "B) 它们在相同任务上产生相同结果",
      "C) 仅编码器（BERT）使用双向注意力进行理解；仅解码器（GPT）使用因果注意力进行生成；编码器-解码器（T5）使用两者进行序列到序列任务",
      "D) 仅编码器比其他的更快"
    ],
    answer: 2,
    explanation: "Encoder-only models (BERT, RoBERTa) use bidirectional self-attention, excelling at understanding tasks (classification, NER). Decoder-only models (GPT, LLaMA) use causal masking for autoregressive generation. Encoder-decoder models (T5, BART) use full attention in the encoder and causal attention in the decoder, suitable for translation and summarization. Each design has specific strengths.",
    explanationChinese: "仅编码器模型（BERT、RoBERTa）使用双向自注意力，擅长理解任务（分类、NER）。仅解码器模型（GPT、LLaMA）使用因果掩码进行自回归生成。编码器-解码器模型（T5、BART）在编码器中使用完全注意力，在解码器中使用因果注意力，适合翻译和摘要。每种设计都有特定优势。",
    diagram: "",
    terms: ["transformer", "attention_mechanism"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 151,
    q: "What is the attention mask used for in Transformer training?",
    qChinese: "注意力掩码在Transformer训练中用于什么？",
    options: [
      "A) To mask the model's parameters from the optimizer",
      "B) To reduce the model size",
      "C) To control which positions can attend to which, handling padding tokens and enforcing causal constraints",
      "D) To mask the loss for certain examples"
    ],
    optionsChinese: [
      "A) 对优化器掩码模型参数",
      "B) 减小模型大小",
      "C) 控制哪些位置可以关注哪些位置，处理填充标记并强制因果约束",
      "D) 对某些样本掩码损失"
    ],
    answer: 2,
    explanation: "Attention masks serve two purposes: (1) padding masks prevent attention to padding tokens in batched variable-length sequences by setting their attention scores to negative infinity, and (2) causal masks prevent future positions from being attended to in decoder models. Both are applied before the softmax in the attention computation.",
    explanationChinese: "注意力掩码有两个目的：（1）填充掩码通过将注意力分数设为负无穷来防止关注批处理可变长度序列中的填充标记，（2）因果掩码防止在解码器模型中关注未来位置。两者都在注意力计算的softmax之前应用。",
    diagram: "",
    terms: ["transformer", "attention_mechanism"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 152,
    q: "What is the 'Attention is All You Need' paper's main contribution?",
    qChinese: "'Attention is All You Need'论文的主要贡献是什么？",
    options: [
      "A) Proposing the Transformer architecture that replaces recurrence entirely with self-attention, achieving superior performance and parallelization",
      "B) Inventing the attention mechanism",
      "C) Proving that attention mechanisms are better than convolutions for images",
      "D) Creating the first language model"
    ],
    optionsChinese: [
      "A) 提出完全用自注意力替代循环的Transformer架构，实现优越的性能和并行化",
      "B) 发明注意力机制",
      "C) 证明注意力机制在图像上优于卷积",
      "D) 创建第一个语言模型"
    ],
    answer: 0,
    explanation: "Vaswani et al. (2017) showed that a model based entirely on attention mechanisms (no recurrence or convolution) could achieve state-of-the-art translation results. The Transformer's ability to process all positions in parallel and directly model long-range dependencies revolutionized NLP and later extended to vision, speech, and multimodal AI.",
    explanationChinese: "Vaswani等人（2017）表明，一个完全基于注意力机制的模型（没有循环或卷积）可以达到最先进的翻译结果。Transformer并行处理所有位置和直接建模长程依赖关系的能力彻底改变了NLP，后来扩展到视觉、语音和多模态AI。",
    diagram: "",
    terms: ["transformer", "attention_mechanism"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 153,
    q: "What is the residual connection in a Transformer block?",
    qChinese: "Transformer块中的残差连接是什么？",
    options: [
      "A) A connection between the first and last Transformer blocks",
      "B) A connection between the encoder and decoder",
      "C) A connection that skips the entire Transformer block",
      "D) Adding the input of a sublayer to its output: output = Sublayer(x) + x, facilitating gradient flow"
    ],
    optionsChinese: [
      "A) 第一个和最后一个Transformer块之间的连接",
      "B) 编码器和解码器之间的连接",
      "C) 跳过整个Transformer块的连接",
      "D) 将子层的输入添加到其输出：output = Sublayer(x) + x，促进梯度流"
    ],
    answer: 3,
    explanation: "Each Transformer sublayer (attention and FFN) has a residual connection that adds the input directly to the output. This creates an identity shortcut that allows gradients to flow directly backward, enabling training of very deep models (dozens to over 100 layers). Combined with layer normalization, residual connections are essential for stable Transformer training.",
    explanationChinese: "每个Transformer子层（注意力和FFN）都有残差连接，将输入直接添加到输出。这创建了允许梯度直接向后流动的恒等快捷方式，使训练非常深的模型（数十到超过100层）成为可能。结合层归一化，残差连接对稳定的Transformer训练至关重要。",
    diagram: "",
    terms: ["transformer", "residual_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 154,
    q: "What is sparse attention?",
    qChinese: "什么是稀疏注意力？",
    options: [
      "A) Attention with very few parameters",
      "B) An attention variant where each position only attends to a subset of other positions instead of all positions, reducing complexity",
      "C) Attention applied to sparse data",
      "D) Removing attention heads that have small weights"
    ],
    optionsChinese: [
      "A) 参数很少的注意力",
      "B) 每个位置只关注其他位置的子集而非所有位置的注意力变体，减少复杂度",
      "C) 应用于稀疏数据的注意力",
      "D) 移除权重较小的注意力头"
    ],
    answer: 1,
    explanation: "Sparse attention restricts each position to attend only to a fixed number of positions using patterns like local windows, strided, or learned patterns. This reduces complexity from O(n^2) to O(n * sqrt(n)) or O(n * log(n)). Longformer uses a combination of local and global attention, and BigBird adds random attention connections for theoretical guarantees.",
    explanationChinese: "稀疏注意力使用局部窗口、步幅或学习的模式等方式限制每个位置只关注固定数量的位置。这将复杂度从O(n^2)降低到O(n * sqrt(n))或O(n * log(n))。Longformer使用局部和全局注意力的组合，BigBird添加随机注意力连接以获得理论保证。",
    diagram: "",
    terms: ["attention_mechanism", "transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 155,
    q: "What is the tokenizer in a Transformer-based language model?",
    qChinese: "基于Transformer的语言模型中的分词器是什么？",
    options: [
      "A) A preprocessing component that splits text into subword units (tokens) that the model can process",
      "B) A layer inside the Transformer that processes tokens",
      "C) The output layer that generates text",
      "D) A component that measures token frequency"
    ],
    optionsChinese: [
      "A) 将文本分割为模型可以处理的子词单元（标记）的预处理组件",
      "B) Transformer内部处理标记的层",
      "C) 生成文本的输出层",
      "D) 测量标记频率的组件"
    ],
    answer: 0,
    explanation: "Tokenizers convert raw text into sequences of integer IDs that map to the model's vocabulary. Common algorithms include Byte Pair Encoding (BPE, used by GPT), WordPiece (used by BERT), and SentencePiece (used by T5/LLaMA). These subword methods balance vocabulary size with the ability to handle rare and unseen words by decomposing them into common subword units.",
    explanationChinese: "分词器将原始文本转换为映射到模型词汇表的整数ID序列。常见算法包括字节对编码（BPE，GPT使用）、WordPiece（BERT使用）和SentencePiece（T5/LLaMA使用）。这些子词方法通过将罕见和未见词分解为常见子词单元来平衡词汇量大小和处理能力。",
    diagram: "",
    terms: ["transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 156,
    q: "What is the Mixture of Experts (MoE) approach in Transformers?",
    qChinese: "Transformer中的混合专家（MoE）方法是什么？",
    options: [
      "A) Combining predictions from multiple trained Transformers",
      "B) Training different experts on different datasets",
      "C) Using multiple attention heads as experts",
      "D) Replacing the FFN with multiple expert subnetworks and a gating network that routes each token to a subset of experts"
    ],
    optionsChinese: [
      "A) 组合多个训练好的Transformer的预测",
      "B) 在不同数据集上训练不同专家",
      "C) 使用多个注意力头作为专家",
      "D) 用多个专家子网络和将每个标记路由到专家子集的门控网络替换FFN"
    ],
    answer: 3,
    explanation: "MoE replaces dense FFN layers with multiple expert FFNs and a routing network. Each token is sent to only k (typically 1-2) of N experts, dramatically increasing model capacity without proportionally increasing computation. A gating function determines which experts process each token. Mixtral and Switch Transformer demonstrate that MoE enables training much larger models efficiently.",
    explanationChinese: "MoE用多个专家FFN和路由网络替换密集FFN层。每个标记仅发送到N个专家中的k个（通常1-2个），在不成比例增加计算的情况下大幅增加模型容量。门控函数确定哪些专家处理每个标记。Mixtral和Switch Transformer证明MoE使高效训练更大模型成为可能。",
    diagram: "",
    terms: ["transformer", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 157,
    q: "What is the purpose of the [CLS] token in BERT?",
    qChinese: "BERT中[CLS]标记的目的是什么？",
    options: [
      "A) To mark the end of a sentence",
      "B) A special token whose final hidden state is used as the aggregate sequence representation for classification tasks",
      "C) To separate two input sentences",
      "D) To indicate the start of a new paragraph"
    ],
    optionsChinese: [
      "A) 标记句子的结束",
      "B) 一个特殊标记，其最终隐藏状态用作分类任务的聚合序列表示",
      "C) 分隔两个输入句子",
      "D) 表示新段落的开始"
    ],
    answer: 1,
    explanation: "BERT prepends a [CLS] (classification) token to every input. Through self-attention, this token aggregates information from the entire sequence. Its final hidden representation is used as input to a classification head for tasks like sentiment analysis and natural language inference. The [SEP] token, by contrast, separates sentence pairs in the input.",
    explanationChinese: "BERT在每个输入前添加[CLS]（分类）标记。通过自注意力，该标记聚合整个序列的信息。其最终隐藏表示用作分类头的输入，用于情感分析和自然语言推理等任务。[SEP]标记则用于分隔输入中的句子对。",
    diagram: "",
    terms: ["transformer", "attention_mechanism"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 158,
    q: "What is Masked Language Modeling (MLM)?",
    qChinese: "什么是掩码语言建模（MLM）？",
    options: [
      "A) Randomly masking some input tokens and training the model to predict them from the surrounding context",
      "B) Predicting the next word in a sequence",
      "C) Masking the loss for easy examples",
      "D) Hiding certain model layers during training"
    ],
    optionsChinese: [
      "A) 随机掩码一些输入标记，训练模型从周围上下文预测它们",
      "B) 预测序列中的下一个词",
      "C) 对简单样本掩码损失",
      "D) 在训练期间隐藏某些模型层"
    ],
    answer: 0,
    explanation: "MLM is BERT's primary pre-training objective. It randomly masks 15% of input tokens (replacing with [MASK], random token, or keeping unchanged) and trains the model to predict original tokens using bidirectional context. Unlike autoregressive models that only see left context, MLM allows the model to use both left and right context, producing richer representations.",
    explanationChinese: "MLM是BERT的主要预训练目标。它随机掩码15%的输入标记（替换为[MASK]、随机标记或保持不变），训练模型使用双向上下文预测原始标记。与只能看到左侧上下文的自回归模型不同，MLM允许模型使用左右上下文，产生更丰富的表示。",
    diagram: "",
    terms: ["transformer", "attention_mechanism"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 159,
    q: "What is the sliding window attention mechanism?",
    qChinese: "什么是滑动窗口注意力机制？",
    options: [
      "A) Restricting each token to attend only to a local neighborhood of fixed window size around its position",
      "B) Moving a CNN filter across the attention matrix",
      "C) Sliding the entire Transformer over long sequences",
      "D) Dynamically adjusting the number of attention heads"
    ],
    optionsChinese: [
      "A) 限制每个标记只关注其位置周围固定窗口大小的局部邻域",
      "B) 在注意力矩阵上移动CNN滤波器",
      "C) 在长序列上滑动整个Transformer",
      "D) 动态调整注意力头数量"
    ],
    answer: 0,
    explanation: "Sliding window attention limits each token to attend to w tokens on each side, reducing complexity from O(n^2) to O(n*w). Stacking L layers of window attention gives an effective receptive field of L*w, similar to how CNN receptive fields grow with depth. Mistral and Longformer use this approach, combining it with global attention for specific tokens like [CLS].",
    explanationChinese: "滑动窗口注意力限制每个标记关注每边w个标记，将复杂度从O(n^2)降低到O(n*w)。堆叠L层窗口注意力给出L*w的有效感受野，类似于CNN感受野随深度增长。Mistral和Longformer使用这种方法，结合全局注意力用于[CLS]等特定标记。",
    diagram: "",
    terms: ["attention_mechanism", "transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 160,
    q: "What is the role of temperature in softmax during generation?",
    qChinese: "生成过程中softmax中温度的作用是什么？",
    options: [
      "A) To control the GPU temperature during inference",
      "B) To control the sharpness of the probability distribution: lower temperature makes it more peaked, higher makes it more uniform",
      "C) To adjust the model's learning rate",
      "D) To normalize the embeddings"
    ],
    optionsChinese: [
      "A) 控制推理期间的GPU温度",
      "B) 控制概率分布的锐度：较低温度使其更尖锐，较高温度使其更均匀",
      "C) 调整模型的学习率",
      "D) 归一化嵌入"
    ],
    answer: 1,
    explanation: "Temperature T modifies the softmax: P(i) = exp(z_i/T) / sum(exp(z_j/T)). T=1 is the standard softmax. T<1 sharpens the distribution (more confident, less diverse), making the model select high-probability tokens. T>1 flattens it (more random, more creative). T approaching 0 gives greedy decoding. Temperature is a key parameter for controlling generation diversity.",
    explanationChinese: "温度T修改softmax：P(i) = exp(z_i/T) / sum(exp(z_j/T))。T=1是标准softmax。T<1使分布更尖锐（更自信，多样性更低），使模型选择高概率标记。T>1使其更平坦（更随机，更有创造性）。T趋近0给出贪心解码。温度是控制生成多样性的关键参数。",
    diagram: "",
    terms: ["transformer", "activation_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 161,
    q: "What is top-k sampling in language generation?",
    qChinese: "语言生成中的top-k采样是什么？",
    options: [
      "A) Selecting the top-k best models for ensemble",
      "B) Using k different random seeds",
      "C) Training on only the top-k examples",
      "D) Restricting the next token choice to the k most probable tokens and sampling from that subset"
    ],
    optionsChinese: [
      "A) 选择前k个最佳模型进行集成",
      "B) 使用k个不同的随机种子",
      "C) 仅在前k个样本上训练",
      "D) 将下一个标记的选择限制在k个最可能的标记中并从该子集中采样"
    ],
    answer: 3,
    explanation: "Top-k sampling filters the token probability distribution to keep only the k highest-probability tokens, redistributing their probabilities to sum to 1, then sampling from this truncated distribution. This prevents sampling from the long tail of unlikely tokens while maintaining diversity. Typical values are k=40 to k=100. It balances quality and creativity in text generation.",
    explanationChinese: "Top-k采样过滤标记概率分布，只保留k个最高概率的标记，将它们的概率重新分配使总和为1，然后从这个截断分布中采样。这防止从不太可能的标记的长尾中采样，同时保持多样性。典型值为k=40到k=100。它在文本生成中平衡质量和创造性。",
    diagram: "",
    terms: ["transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 162,
    q: "What is nucleus (top-p) sampling?",
    qChinese: "什么是核（top-p）采样？",
    options: [
      "A) Sampling from the nucleus of the neural network",
      "B) Sampling with probability proportional to attention weights",
      "C) Selecting the smallest set of tokens whose cumulative probability exceeds a threshold p, then sampling from that set",
      "D) Using a fixed percentage of the vocabulary"
    ],
    optionsChinese: [
      "A) 从神经网络的核心采样",
      "B) 以与注意力权重成比例的概率采样",
      "C) 选择累积概率超过阈值p的最小标记集合，然后从该集合中采样",
      "D) 使用词汇表的固定百分比"
    ],
    answer: 2,
    explanation: "Top-p (nucleus) sampling dynamically selects the smallest token set whose cumulative probability reaches p (e.g., 0.9). Unlike fixed top-k, the number of tokens varies based on the distribution's shape. When the model is confident, fewer tokens are considered; when uncertain, more are included. This adapts better to varying confidence levels and typically produces more coherent text than top-k alone.",
    explanationChinese: "Top-p（核）采样动态选择累积概率达到p（如0.9）的最小标记集。与固定top-k不同，标记数量根据分布形状变化。当模型自信时，考虑较少标记；不确定时，包含更多。这更好地适应不同的置信度水平，通常比单独的top-k产生更连贯的文本。",
    diagram: "",
    terms: ["transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 163,
    q: "What is Relative Positional Encoding?",
    qChinese: "什么是相对位置编码？",
    options: [
      "A) Encoding positions relative to the batch index",
      "B) Encoding the relative distance between tokens rather than their absolute positions, enabling better length generalization",
      "C) Making positions relative to the start of each sentence",
      "D) Encoding positions using relative file paths"
    ],
    optionsChinese: [
      "A) 相对于批次索引编码位置",
      "B) 编码标记之间的相对距离而非绝对位置，实现更好的长度泛化",
      "C) 相对于每个句子的开头编码位置",
      "D) 使用相对文件路径编码位置"
    ],
    answer: 1,
    explanation: "Relative positional encoding (Shaw et al., 2018) adds learnable bias terms to attention scores based on the distance between positions rather than their absolute location. ALiBi (Attention with Linear Biases) is a simple variant that subtracts a linear penalty proportional to distance. Relative encodings generalize better to sequences longer than those seen during training.",
    explanationChinese: "相对位置编码（Shaw等人，2018）根据位置之间的距离而非绝对位置向注意力分数添加可学习偏置项。ALiBi（带线性偏置的注意力）是一种简单变体，减去与距离成比例的线性惩罚。相对编码对比训练中看到的更长序列具有更好的泛化能力。",
    diagram: "",
    terms: ["transformer", "attention_mechanism"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 164,
    q: "What is RMSNorm and why is it used in modern Transformers?",
    qChinese: "什么是RMSNorm，为什么它在现代Transformer中使用？",
    options: [
      "A) A normalization method that normalizes based on the root mean square value",
      "B) Root Mean Square Layer Normalization that normalizes by the RMS of activations, removing the mean-centering step for efficiency",
      "C) A method to normalize the learning rate",
      "D) Regularization through random masking and scaling"
    ],
    optionsChinese: [
      "A) 基于均方根值进行归一化的方法",
      "B) 均方根层归一化，通过激活值的RMS进行归一化，移除均值中心化步骤以提高效率",
      "C) 归一化学习率的方法",
      "D) 通过随机掩码和缩放进行正则化"
    ],
    answer: 1,
    explanation: "RMSNorm simplifies Layer Normalization by removing the mean-centering step: RMSNorm(x) = x / sqrt(mean(x^2) + eps) * gamma. This is computationally cheaper while performing comparably to full LayerNorm. LLaMA, Mistral, and other modern LLMs use RMSNorm because the mean subtraction in LayerNorm provides minimal benefit while adding computational overhead.",
    explanationChinese: "RMSNorm通过移除均值中心化步骤简化了层归一化：RMSNorm(x) = x / sqrt(mean(x^2) + eps) * gamma。这在计算上更便宜，同时与完整LayerNorm性能相当。LLaMA、Mistral和其他现代LLM使用RMSNorm，因为LayerNorm中的均值减法提供的好处很小但增加了计算开销。",
    diagram: "",
    terms: ["transformer", "batch_normalization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 165,
    q: "What is the concept of 'scaling laws' in large language models?",
    qChinese: "大语言模型中'缩放定律'的概念是什么？",
    options: [
      "A) Rules for scaling image resolution",
      "B) Mathematical proofs about Transformer convergence",
      "C) Laws governing the scaling of learning rates",
      "D) Empirical power-law relationships showing that model performance improves predictably as model size, dataset size, and compute increase"
    ],
    optionsChinese: [
      "A) 缩放图像分辨率的规则",
      "B) 关于Transformer收敛的数学证明",
      "C) 控制学习率缩放的定律",
      "D) 经验幂律关系，表明模型性能随模型大小、数据集大小和计算量的增加而可预测地提高"
    ],
    answer: 3,
    explanation: "Kaplan et al. (2020) discovered that LLM loss follows power-law scaling: L ~ N^(-alpha) for model parameters, L ~ D^(-beta) for dataset size, and L ~ C^(-gamma) for compute budget. These smooth, predictable relationships allow researchers to estimate performance before training. Chinchilla scaling laws showed that data and model size should be scaled proportionally for compute-optimal training.",
    explanationChinese: "Kaplan等人（2020）发现LLM损失遵循幂律缩放：模型参数L ~ N^(-alpha)，数据集大小L ~ D^(-beta)，计算预算L ~ C^(-gamma)。这些平滑、可预测的关系允许研究人员在训练前估计性能。Chinchilla缩放定律表明数据和模型大小应按比例缩放以实现计算最优训练。",
    diagram: "",
    terms: ["transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 166,
    q: "What is dropout regularization?",
    qChinese: "什么是dropout正则化？",
    options: [
      "A) Permanently removing neurons from the network",
      "B) Dropping training examples that cause high loss",
      "C) Reducing the learning rate during training",
      "D) Randomly setting a fraction of neuron activations to zero during training to prevent co-adaptation"
    ],
    optionsChinese: [
      "A) 永久从网络中移除神经元",
      "B) 丢弃导致高损失的训练样本",
      "C) 在训练过程中降低学习率",
      "D) 在训练期间随机将一部分神经元激活设为零以防止共适应"
    ],
    answer: 3,
    explanation: "Dropout randomly zeros out each neuron's output with probability p (typically 0.1-0.5) during each training step. This prevents neurons from co-adapting to each other and forces the network to learn redundant representations. At inference, dropout is disabled and activations are scaled by (1-p) to maintain expected values. Dropout can be viewed as training an ensemble of subnetworks.",
    explanationChinese: "Dropout在每个训练步骤中以概率p（通常0.1-0.5）随机将每个神经元的输出置零。这防止神经元相互共适应，迫使网络学习冗余表示。在推理时，dropout被禁用，激活值按(1-p)缩放以保持期望值。Dropout可以被视为训练子网络的集成。",
    diagram: "",
    terms: ["dropout", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 167,
    q: "What is batch normalization?",
    qChinese: "什么是批量归一化？",
    options: [
      "A) Normalizing each layer's activations across the mini-batch to have zero mean and unit variance, with learnable scale and shift parameters",
      "B) Normalizing the training data before feeding it to the network",
      "C) Normalizing the batch size to be consistent across epochs",
      "D) Sorting the training batches by difficulty"
    ],
    optionsChinese: [
      "A) 在小批量中将每层的激活归一化为零均值和单位方差，具有可学习的缩放和偏移参数",
      "B) 在将训练数据输入网络之前进行归一化",
      "C) 将批量大小归一化为在各epoch中一致",
      "D) 按难度对训练批次排序"
    ],
    answer: 0,
    explanation: "Batch normalization normalizes activations using mini-batch statistics: BN(x) = gamma * (x - mu_batch) / sqrt(sigma^2_batch + eps) + beta, where gamma and beta are learnable. It reduces internal covariate shift, enables higher learning rates, and acts as a regularizer. During inference, it uses running averages of mean and variance computed during training.",
    explanationChinese: "批量归一化使用小批量统计归一化激活值：BN(x) = gamma * (x - mu_batch) / sqrt(sigma^2_batch + eps) + beta，其中gamma和beta是可学习的。它减少内部协变量偏移，允许更高的学习率，并起到正则化作用。在推理时，它使用训练期间计算的均值和方差的运行平均值。",
    diagram: "",
    terms: ["batch_normalization", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 168,
    q: "What is L2 regularization (ridge regression) in neural networks?",
    qChinese: "神经网络中的L2正则化（岭回归）是什么？",
    options: [
      "A) Adding a penalty equal to the absolute value of weights to the loss",
      "B) Removing weights below a certain threshold",
      "C) Limiting the maximum value of weights",
      "D) Adding a penalty proportional to the squared magnitude of weights to the loss function"
    ],
    optionsChinese: [
      "A) 在损失中添加等于权重绝对值的惩罚",
      "B) 移除低于某个阈值的权重",
      "C) 限制权重的最大值",
      "D) 在损失函数中添加与权重平方大小成比例的惩罚"
    ],
    answer: 3,
    explanation: "L2 regularization adds lambda * sum(w_i^2) / 2 to the loss function, penalizing large weights. The gradient becomes gradient + lambda * w, which shrinks weights toward zero. This prevents any single weight from becoming too large and helps prevent overfitting. L2 regularization is equivalent to weight decay in SGD, though they differ when using adaptive optimizers like Adam.",
    explanationChinese: "L2正则化在损失函数中添加lambda * sum(w_i^2) / 2，惩罚大权重。梯度变为gradient + lambda * w，使权重向零缩小。这防止任何单个权重变得过大，有助于防止过拟合。L2正则化在SGD中等价于权重衰减，但在使用Adam等自适应优化器时它们有所不同。",
    diagram: "",
    terms: ["dropout", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 169,
    q: "What is L1 regularization (lasso) in neural networks?",
    qChinese: "神经网络中的L1正则化（套索）是什么？",
    options: [
      "A) Adding the squared magnitude of weights to the loss",
      "B) Adding the absolute magnitude of weights to the loss function, encouraging sparse weight vectors",
      "C) Limiting the L1 norm of gradients",
      "D) Applying dropout with probability 0.1"
    ],
    optionsChinese: [
      "A) 将权重的平方大小添加到损失中",
      "B) 将权重的绝对大小添加到损失函数中，鼓励稀疏权重向量",
      "C) 限制梯度的L1范数",
      "D) 以0.1的概率应用dropout"
    ],
    answer: 1,
    explanation: "L1 regularization adds lambda * sum(|w_i|) to the loss function. Unlike L2, L1 produces sparse solutions where many weights become exactly zero, effectively performing feature selection. This is useful when you want a simpler model with fewer active features. In practice, L1 is less commonly used in deep learning than L2 because sparse weights are not always beneficial in neural networks.",
    explanationChinese: "L1正则化在损失函数中添加lambda * sum(|w_i|)。与L2不同，L1产生稀疏解，其中许多权重变为精确的零，有效地执行特征选择。当你想要一个具有更少活跃特征的更简单模型时，这很有用。在实践中，L1在深度学习中比L2使用得更少，因为稀疏权重在神经网络中并不总是有益的。",
    diagram: "",
    terms: ["dropout", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 170,
    q: "What is early stopping?",
    qChinese: "什么是早停？",
    options: [
      "A) Stopping training after a fixed number of epochs",
      "B) Stopping training when the learning rate reaches zero",
      "C) Monitoring validation loss and stopping training when it begins to increase, indicating overfitting",
      "D) Stopping training when all weights converge to the same value"
    ],
    optionsChinese: [
      "A) 在固定数量的epoch后停止训练",
      "B) 当学习率达到零时停止训练",
      "C) 监控验证损失并在它开始增加时停止训练，表明过拟合",
      "D) 当所有权重收敛到相同值时停止训练"
    ],
    answer: 2,
    explanation: "Early stopping monitors a validation metric (usually loss) during training and stops when it has not improved for a specified number of epochs (patience). This prevents overfitting by selecting the model checkpoint with the best validation performance. It is one of the simplest and most effective regularization techniques, requiring no changes to the model architecture.",
    explanationChinese: "早停在训练过程中监控验证指标（通常是损失），当指定数量的epoch（耐心值）内没有改善时停止。通过选择验证性能最佳的模型检查点来防止过拟合。这是最简单且最有效的正则化技术之一，不需要改变模型架构。",
    diagram: "",
    terms: ["dropout", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 171,
    q: "What is the difference between batch normalization and layer normalization?",
    qChinese: "批量归一化和层归一化有什么区别？",
    options: [
      "A) Batch norm normalizes across the batch dimension; layer norm normalizes across the feature dimension for each example independently",
      "B) They use different activation functions",
      "C) Batch norm is only for CNNs; layer norm is only for RNNs",
      "D) They produce identical results"
    ],
    optionsChinese: [
      "A) 批量归一化跨批次维度归一化；层归一化对每个样本独立地跨特征维度归一化",
      "B) 它们使用不同的激活函数",
      "C) 批量归一化仅用于CNN；层归一化仅用于RNN",
      "D) 它们产生相同的结果"
    ],
    answer: 0,
    explanation: "Batch normalization computes mean and variance across the batch for each feature, making it dependent on batch size and behaving differently during training versus inference. Layer normalization computes statistics across features for each individual example, making it independent of batch size and identical during training and inference. Layer norm is standard in Transformers.",
    explanationChinese: "批量归一化对每个特征跨批次计算均值和方差，使其依赖于批量大小且在训练和推理时行为不同。层归一化对每个单独样本跨特征计算统计量，使其独立于批量大小且在训练和推理时相同。层归一化是Transformer中的标准配置。",
    diagram: "",
    terms: ["batch_normalization", "transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 172,
    q: "What is group normalization?",
    qChinese: "什么是组归一化？",
    options: [
      "A) Dividing channels into groups and normalizing within each group independently of batch size",
      "B) Normalizing groups of layers together",
      "C) Grouping training examples by class for normalization",
      "D) Applying different normalization methods to different groups of layers"
    ],
    optionsChinese: [
      "A) 将通道分成组并在每组内独立于批量大小进行归一化",
      "B) 一起归一化层组",
      "C) 按类别对训练样本分组进行归一化",
      "D) 对不同层组应用不同的归一化方法"
    ],
    answer: 0,
    explanation: "Group normalization divides channels into G groups and normalizes within each group. With G=1, it equals layer norm; with G=C (number of channels), it equals instance norm. GN is independent of batch size, working well with small batches where batch norm fails. It is particularly useful in object detection and segmentation where small batch sizes are common due to large input resolutions.",
    explanationChinese: "组归一化将通道分成G组并在每组内归一化。当G=1时，等于层归一化；当G=C（通道数）时，等于实例归一化。GN独立于批量大小，在批量归一化失效的小批量情况下工作良好。它在物体检测和分割中特别有用，因为大输入分辨率导致小批量大小很常见。",
    diagram: "",
    terms: ["batch_normalization", "convolutional_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 173,
    q: "What is instance normalization?",
    qChinese: "什么是实例归一化？",
    options: [
      "A) Normalizing each training instance before inputting it to the network",
      "B) Normalizing across all instances in the dataset",
      "C) Normalizing each feature map of each sample independently, computing statistics per channel per sample",
      "D) A normalization method specific to the first instance of training"
    ],
    optionsChinese: [
      "A) 在将每个训练实例输入网络之前对其进行归一化",
      "B) 跨数据集中的所有实例归一化",
      "C) 独立归一化每个样本的每个特征图，按通道按样本计算统计量",
      "D) 特定于训练的第一个实例的归一化方法"
    ],
    answer: 2,
    explanation: "Instance normalization normalizes each channel of each sample independently: IN(x) = gamma * (x - mu_instance) / sqrt(sigma^2_instance + eps) + beta. It effectively removes style information (contrast, brightness) from each feature map. This makes it particularly effective for style transfer and image generation tasks where style and content should be separated.",
    explanationChinese: "实例归一化独立归一化每个样本的每个通道：IN(x) = gamma * (x - mu_instance) / sqrt(sigma^2_instance + eps) + beta。它有效地从每个特征图中去除风格信息（对比度、亮度）。这使其在风格转换和图像生成任务中特别有效，因为风格和内容应该被分离。",
    diagram: "",
    terms: ["batch_normalization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 174,
    q: "What is label smoothing?",
    qChinese: "什么是标签平滑？",
    options: [
      "A) Replacing hard one-hot labels with soft labels that distribute a small probability to incorrect classes",
      "B) Smoothing the loss function curve",
      "C) Applying a smoothing filter to the input data",
      "D) Gradually changing labels during training"
    ],
    optionsChinese: [
      "A) 用向不正确类别分配小概率的软标签替换硬one-hot标签",
      "B) 平滑损失函数曲线",
      "C) 对输入数据应用平滑滤波器",
      "D) 在训练过程中逐渐改变标签"
    ],
    answer: 0,
    explanation: "Label smoothing replaces the target distribution y = [0, 0, 1, 0] with y_smooth = [eps/K, eps/K, 1-eps+eps/K, eps/K] where eps is typically 0.1 and K is the number of classes. This prevents the model from becoming overconfident by encouraging it to assign small probabilities to all classes. It improves calibration and generalization, especially in large-scale classification.",
    explanationChinese: "标签平滑将目标分布y = [0, 0, 1, 0]替换为y_smooth = [eps/K, eps/K, 1-eps+eps/K, eps/K]，其中eps通常为0.1，K是类别数。这防止模型过于自信，鼓励它为所有类别分配小概率。它改善了校准和泛化，特别是在大规模分类中。",
    diagram: "",
    terms: ["loss_function", "dropout"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 175,
    q: "What is spectral normalization?",
    qChinese: "什么是谱归一化？",
    options: [
      "A) Normalizing the frequency spectrum of the input data",
      "B) A normalization technique for audio processing",
      "C) Normalizing across spectral features",
      "D) Constraining the spectral norm (largest singular value) of weight matrices to stabilize training, especially in GANs"
    ],
    optionsChinese: [
      "A) 归一化输入数据的频率谱",
      "B) 音频处理的归一化技术",
      "C) 跨谱特征归一化",
      "D) 约束权重矩阵的谱范数（最大奇异值）以稳定训练，特别是在GAN中"
    ],
    answer: 3,
    explanation: "Spectral normalization divides each weight matrix by its largest singular value, bounding the Lipschitz constant of each layer to 1. This constrains how much the network output can change relative to input changes. It is critical for stabilizing GAN discriminator training and is computed efficiently using the power iteration method to avoid expensive SVD computation each step.",
    explanationChinese: "谱归一化将每个权重矩阵除以其最大奇异值，将每层的Lipschitz常数限制为1。这约束了网络输出相对于输入变化可以改变多少。它对稳定GAN判别器训练至关重要，使用幂迭代方法高效计算以避免每步昂贵的SVD计算。",
    diagram: "",
    terms: ["batch_normalization", "generative_adversarial_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 176,
    q: "What is the Mixup data augmentation technique?",
    qChinese: "什么是Mixup数据增强技术？",
    options: [
      "A) Mixing different model architectures",
      "B) Mixing training and validation datasets",
      "C) Creating new training examples by linearly interpolating between pairs of examples and their labels",
      "D) Randomly shuffling pixels within images"
    ],
    optionsChinese: [
      "A) 混合不同的模型架构",
      "B) 混合训练和验证数据集",
      "C) 通过线性插值成对样本及其标签来创建新训练样本",
      "D) 在图像内随机洗牌像素"
    ],
    answer: 2,
    explanation: "Mixup generates virtual training examples: x_new = lambda*x_i + (1-lambda)*x_j, y_new = lambda*y_i + (1-lambda)*y_j, where lambda is sampled from a Beta distribution. This regularizes the model by encouraging linear behavior between training examples, reducing overfitting and improving robustness. CutMix is a variant that patches regions from different images instead of blending.",
    explanationChinese: "Mixup生成虚拟训练样本：x_new = lambda*x_i + (1-lambda)*x_j, y_new = lambda*y_i + (1-lambda)*y_j，其中lambda从Beta分布中采样。这通过鼓励训练样本之间的线性行为来正则化模型，减少过拟合并提高鲁棒性。CutMix是一种变体，从不同图像中修补区域而不是混合。",
    diagram: "",
    terms: ["dropout", "convolutional_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 177,
    q: "What is DropConnect?",
    qChinese: "什么是DropConnect？",
    options: [
      "A) Dropping entire layers from the network",
      "B) Disconnecting the network from the training data",
      "C) Randomly setting individual weights (connections) to zero during training instead of activations",
      "D) Dropping connections between non-adjacent layers"
    ],
    optionsChinese: [
      "A) 从网络中丢弃整个层",
      "B) 断开网络与训练数据的连接",
      "C) 在训练期间随机将单个权重（连接）设为零而非激活值",
      "D) 丢弃非相邻层之间的连接"
    ],
    answer: 2,
    explanation: "DropConnect generalizes dropout by randomly zeroing individual weights rather than entire neuron outputs. While dropout masks the output vector h, DropConnect masks the weight matrix W. This provides more fine-grained regularization as each neuron can still partially compute. In practice, dropout is more commonly used due to its simplicity and similar effectiveness.",
    explanationChinese: "DropConnect通过随机将单个权重而非整个神经元输出置零来泛化dropout。dropout掩码输出向量h，DropConnect掩码权重矩阵W。这提供了更细粒度的正则化，因为每个神经元仍然可以部分计算。在实践中，dropout由于其简单性和类似的效果更常被使用。",
    diagram: "",
    terms: ["dropout", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 178,
    q: "What is stochastic depth?",
    qChinese: "什么是随机深度？",
    options: [
      "A) Randomly changing the network depth during inference",
      "B) Randomly skipping entire residual blocks during training by dropping the residual path and keeping only the identity shortcut",
      "C) Using a different depth for each training example",
      "D) Gradually increasing the network depth during training"
    ],
    optionsChinese: [
      "A) 在推理期间随机改变网络深度",
      "B) 在训练期间通过丢弃残差路径仅保留恒等快捷方式来随机跳过整个残差块",
      "C) 对每个训练样本使用不同的深度",
      "D) 在训练过程中逐渐增加网络深度"
    ],
    answer: 1,
    explanation: "Stochastic depth randomly drops entire residual blocks during training with increasing probability for deeper blocks. When a block is dropped, the input passes through the identity skip connection unchanged. This regularizes deep networks, reduces training time, and improves generalization. It can be viewed as implicitly training an ensemble of networks with different depths.",
    explanationChinese: "随机深度在训练期间以对更深块增加的概率随机丢弃整个残差块。当一个块被丢弃时，输入通过恒等跳跃连接不变地传递。这正则化了深度网络，减少训练时间，并改善泛化。它可以被视为隐式地训练具有不同深度的网络集成。",
    diagram: "",
    terms: ["dropout", "residual_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 179,
    q: "What is the effect of batch size on training as a regularizer?",
    qChinese: "批量大小作为正则化因素对训练有什么影响？",
    options: [
      "A) Larger batch sizes always produce better generalization",
      "B) Smaller batch sizes introduce more gradient noise, which acts as implicit regularization and can lead to flatter minima with better generalization",
      "C) Batch size has no effect on generalization",
      "D) Only batch size of 1 provides regularization"
    ],
    optionsChinese: [
      "A) 较大的批量大小总是产生更好的泛化",
      "B) 较小的批量大小引入更多梯度噪声，作为隐式正则化可以导致更平坦的最小值和更好的泛化",
      "C) 批量大小对泛化没有影响",
      "D) 只有批量大小为1才提供正则化"
    ],
    answer: 1,
    explanation: "Smaller batch sizes produce noisier gradient estimates, which acts as a form of implicit regularization. This noise helps the optimizer explore broader basins and find flatter minima that generalize better. Very large batch sizes can converge to sharp minima that overfit. However, proper learning rate scaling and warmup can partially mitigate this large-batch generalization gap.",
    explanationChinese: "较小的批量大小产生更嘈杂的梯度估计，这作为一种隐式正则化形式。这种噪声帮助优化器探索更宽的盆地并找到泛化更好的更平坦最小值。非常大的批量大小可能收敛到过拟合的尖锐最小值。然而，适当的学习率缩放和预热可以部分缓解这种大批量泛化差距。",
    diagram: "",
    terms: ["optimizer_sgd", "dropout"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 180,
    q: "What is knowledge distillation?",
    qChinese: "什么是知识蒸馏？",
    options: [
      "A) Extracting knowledge from a database to train a model",
      "B) Training a smaller student model to mimic the soft probability outputs of a larger teacher model",
      "C) Removing unnecessary knowledge from a trained model",
      "D) Converting model knowledge to text format"
    ],
    optionsChinese: [
      "A) 从数据库中提取知识来训练模型",
      "B) 训练较小的学生模型来模仿较大教师模型的软概率输出",
      "C) 从训练好的模型中移除不必要的知识",
      "D) 将模型知识转换为文本格式"
    ],
    answer: 1,
    explanation: "Knowledge distillation trains a small student model using soft targets (probability distributions) from a large teacher model rather than hard labels. The student minimizes KL divergence between its outputs and the teacher's softened outputs (using temperature). This transfers the teacher's dark knowledge (inter-class similarities) and can produce compact models that approach the teacher's accuracy.",
    explanationChinese: "知识蒸馏使用来自大型教师模型的软目标（概率分布）而非硬标签来训练小型学生模型。学生最小化其输出与教师软化输出（使用温度）之间的KL散度。这传递了教师的暗知识（类间相似性），可以产生接近教师精度的紧凑模型。",
    diagram: "",
    terms: ["transfer_learning", "loss_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 181,
    q: "What is weight pruning?",
    qChinese: "什么是权重剪枝？",
    options: [
      "A) Initializing weights to small values",
      "B) Clipping weights that exceed a threshold",
      "C) Reducing the learning rate for certain weights",
      "D) Removing weights with small magnitudes (setting them to zero) to create a sparser and more efficient model"
    ],
    optionsChinese: [
      "A) 将权重初始化为小值",
      "B) 裁剪超过阈值的权重",
      "C) 为某些权重降低学习率",
      "D) 移除小幅度权重（将其设为零）以创建更稀疏和更高效的模型"
    ],
    answer: 3,
    explanation: "Weight pruning removes connections whose weights are below a threshold, creating a sparse network that requires less computation and memory. Unstructured pruning removes individual weights; structured pruning removes entire channels or layers. The Lottery Ticket Hypothesis suggests that dense networks contain sparse subnetworks that, when trained from the original initialization, match the full network's accuracy.",
    explanationChinese: "权重剪枝移除权重低于阈值的连接，创建需要更少计算和内存的稀疏网络。非结构化剪枝移除单个权重；结构化剪枝移除整个通道或层。彩票假说建议密集网络包含稀疏子网络，当从原始初始化训练时，可以匹配完整网络的精度。",
    diagram: "",
    terms: ["neural_network", "dropout"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 182,
    q: "What is the purpose of data normalization as a regularization strategy?",
    qChinese: "数据归一化作为正则化策略的目的是什么？",
    options: [
      "A) To increase the training data size",
      "B) To balance class distributions",
      "C) To remove outliers from the dataset",
      "D) To scale input features to similar ranges, improving optimization and acting as implicit regularization"
    ],
    optionsChinese: [
      "A) 增加训练数据大小",
      "B) 平衡类别分布",
      "C) 从数据集中移除异常值",
      "D) 将输入特征缩放到相似范围，改善优化并作为隐式正则化"
    ],
    answer: 3,
    explanation: "Normalizing inputs to zero mean and unit variance ensures that all features contribute equally and prevents features with large scales from dominating gradient updates. This improves optimization speed and stability. Common methods include z-score normalization ((x-mean)/std) and min-max scaling ((x-min)/(max-min)). For images, dividing pixel values by 255 is standard preprocessing.",
    explanationChinese: "将输入归一化为零均值和单位方差确保所有特征平等贡献，防止大尺度特征主导梯度更新。这提高了优化速度和稳定性。常见方法包括z-score归一化（(x-mean)/std）和最小-最大缩放（(x-min)/(max-min)）。对于图像，将像素值除以255是标准预处理。",
    diagram: "",
    terms: ["batch_normalization", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 183,
    q: "What is the inverted dropout technique?",
    qChinese: "什么是反向dropout技术？",
    options: [
      "A) Scaling activations by 1/(1-p) during training so no scaling is needed during inference",
      "B) Applying dropout during inference instead of training",
      "C) Dropping the least active neurons instead of random ones",
      "D) Applying dropout to the input layer only"
    ],
    optionsChinese: [
      "A) 在训练期间将激活值按1/(1-p)缩放，使推理时不需要缩放",
      "B) 在推理而非训练期间应用dropout",
      "C) 丢弃最不活跃的神经元而非随机的",
      "D) 仅对输入层应用dropout"
    ],
    answer: 0,
    explanation: "Inverted dropout scales surviving activations by 1/(1-p) during training rather than scaling by (1-p) during inference. This keeps the expected value of activations consistent between training and inference without any modification at test time. Most modern frameworks implement this variant because it simplifies deployment by requiring no changes to the inference code.",
    explanationChinese: "反向dropout在训练期间将存活的激活值按1/(1-p)缩放，而不是在推理期间按(1-p)缩放。这使训练和推理之间激活值的期望值保持一致，无需在测试时进行任何修改。大多数现代框架实现此变体，因为它简化了部署，不需要更改推理代码。",
    diagram: "",
    terms: ["dropout", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 184,
    q: "What is the Elastic Net regularization?",
    qChinese: "什么是弹性网正则化？",
    options: [
      "A) A combination of L1 and L2 regularization that balances sparsity and small weights",
      "B) A type of network architecture that stretches adaptively",
      "C) A regularization technique specific to elastic deformation augmentation",
      "D) A method that adjusts regularization strength during training"
    ],
    optionsChinese: [
      "A) L1和L2正则化的组合，平衡稀疏性和小权重",
      "B) 一种自适应拉伸的网络架构",
      "C) 特定于弹性变形增强的正则化技术",
      "D) 在训练过程中调整正则化强度的方法"
    ],
    answer: 0,
    explanation: "Elastic Net combines L1 and L2 penalties: Loss_reg = lambda1 * sum(|w|) + lambda2 * sum(w^2). L1 encourages sparsity (exact zeros) while L2 encourages small but non-zero weights. This combination can be beneficial when there are correlated features, as L1 alone might arbitrarily select one while Elastic Net distributes weights among correlated features.",
    explanationChinese: "弹性网结合L1和L2惩罚：Loss_reg = lambda1 * sum(|w|) + lambda2 * sum(w^2)。L1鼓励稀疏性（精确零），L2鼓励小但非零的权重。当存在相关特征时，这种组合可能有益，因为单独的L1可能任意选择一个，而弹性网将权重分配给相关特征。",
    diagram: "",
    terms: ["dropout", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 185,
    q: "What is the purpose of gradient penalty in regularization?",
    qChinese: "正则化中梯度惩罚的目的是什么？",
    options: [
      "A) To make gradients larger for faster training",
      "B) To penalize large gradient norms of the network output with respect to input, enforcing smoothness (Lipschitz continuity)",
      "C) To prevent gradient computation",
      "D) To add gradients as additional features"
    ],
    optionsChinese: [
      "A) 使梯度更大以加快训练",
      "B) 惩罚网络输出相对于输入的大梯度范数，强制平滑性（Lipschitz连续性）",
      "C) 防止梯度计算",
      "D) 将梯度添加为额外特征"
    ],
    answer: 1,
    explanation: "Gradient penalty adds a term to the loss that penalizes the norm of the gradient of the model's output with respect to its input: ||grad_x f(x)||^2. In WGAN-GP, this enforces the 1-Lipschitz constraint on the discriminator without weight clipping. It ensures the function changes smoothly, preventing the discriminator from producing extreme outputs that destabilize GAN training.",
    explanationChinese: "梯度惩罚在损失中添加一个项，惩罚模型输出相对于输入的梯度范数：||grad_x f(x)||^2。在WGAN-GP中，这在不使用权重裁剪的情况下对判别器强制1-Lipschitz约束。它确保函数平滑变化，防止判别器产生使GAN训练不稳定的极端输出。",
    diagram: "",
    terms: ["generative_adversarial_network", "dropout"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 186,
    q: "What is the difference between underfitting and overfitting?",
    qChinese: "欠拟合和过拟合有什么区别？",
    options: [
      "A) Underfitting means training is too fast; overfitting means it is too slow",
      "B) Underfitting only occurs with large datasets; overfitting with small datasets",
      "C) They are the same phenomenon viewed from different perspectives",
      "D) Underfitting means the model is too simple to capture data patterns; overfitting means it memorizes training data and fails on new data"
    ],
    optionsChinese: [
      "A) 欠拟合意味着训练太快；过拟合意味着太慢",
      "B) 欠拟合只在大数据集中出现；过拟合在小数据集中出现",
      "C) 它们是从不同角度看的同一现象",
      "D) 欠拟合意味着模型太简单无法捕获数据模式；过拟合意味着它记住了训练数据但在新数据上失败"
    ],
    answer: 3,
    explanation: "Underfitting occurs when the model has high bias and cannot capture the underlying patterns, showing high error on both training and validation sets. Overfitting occurs when the model has high variance, performing well on training data but poorly on unseen data. The bias-variance tradeoff is managed through model complexity, regularization, and training data size.",
    explanationChinese: "欠拟合发生在模型具有高偏差且无法捕获底层模式时，在训练集和验证集上都显示高误差。过拟合发生在模型具有高方差时，在训练数据上表现良好但在未见数据上表现不佳。偏差-方差权衡通过模型复杂度、正则化和训练数据大小来管理。",
    diagram: "",
    terms: ["dropout", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 187,
    q: "What is CutOut data augmentation?",
    qChinese: "什么是CutOut数据增强？",
    options: [
      "A) Randomly masking square patches of the input image with zeros during training",
      "B) Cutting the dataset in half for training and validation",
      "C) Removing outlier images from the dataset",
      "D) Cutting the training process short"
    ],
    optionsChinese: [
      "A) 在训练期间随机用零掩码输入图像的方形区域",
      "B) 将数据集一分为二用于训练和验证",
      "C) 从数据集中移除异常图像",
      "D) 缩短训练过程"
    ],
    answer: 0,
    explanation: "CutOut randomly erases rectangular regions of training images, replacing them with zeros or the mean pixel value. This forces the model to make predictions based on partial information, reducing overfitting and improving robustness to occlusion. It is simple to implement and effective, especially combined with other augmentation techniques. CutMix improves on CutOut by filling the cut region with patches from other images.",
    explanationChinese: "CutOut随机擦除训练图像的矩形区域，用零或平均像素值替换。这迫使模型基于部分信息进行预测，减少过拟合并提高对遮挡的鲁棒性。它实现简单且有效，特别是与其他增强技术结合使用。CutMix通过用其他图像的补丁填充被剪切区域来改进CutOut。",
    diagram: "",
    terms: ["dropout", "convolutional_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 188,
    q: "What is the R-Drop regularization technique?",
    qChinese: "什么是R-Drop正则化技术？",
    options: [
      "A) A special type of dropout for RNNs",
      "B) Randomly dropping rows from the training data",
      "C) A method that minimizes the KL divergence between two forward passes of the same input with different dropout masks",
      "D) A technique that drops the learning rate randomly"
    ],
    optionsChinese: [
      "A) 一种专门用于RNN的dropout",
      "B) 从训练数据中随机丢弃行",
      "C) 一种最小化同一输入在不同dropout掩码下两次前向传播之间KL散度的方法",
      "D) 随机丢弃学习率的技术"
    ],
    answer: 2,
    explanation: "R-Drop performs two forward passes of the same input with different dropout masks and adds a KL divergence loss between the two output distributions. This encourages consistent predictions despite dropout randomness, reducing the gap between training and inference. R-Drop is simple to implement, adds minimal overhead, and improves performance across various NLP and vision tasks.",
    explanationChinese: "R-Drop对同一输入使用不同的dropout掩码执行两次前向传播，并添加两个输出分布之间的KL散度损失。这鼓励尽管有dropout随机性仍产生一致的预测，减少训练和推理之间的差距。R-Drop实现简单，额外开销很小，可在各种NLP和视觉任务中提高性能。",
    diagram: "",
    terms: ["dropout", "loss_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 189,
    q: "What is model ensembling as a regularization strategy?",
    qChinese: "模型集成作为正则化策略是什么？",
    options: [
      "A) Combining predictions from multiple independently trained models to reduce variance and improve generalization",
      "B) Training a single model multiple times",
      "C) Using all available data for training",
      "D) Applying all regularization techniques simultaneously"
    ],
    optionsChinese: [
      "A) 组合多个独立训练的模型的预测以减少方差并改善泛化",
      "B) 多次训练单个模型",
      "C) 使用所有可用数据进行训练",
      "D) 同时应用所有正则化技术"
    ],
    answer: 0,
    explanation: "Ensembling trains multiple models (with different initializations, architectures, or data subsets) and averages their predictions. This reduces variance because individual model errors tend to cancel out. Ensembles consistently improve accuracy by 1-2% in competitions. Techniques include bagging, boosting, and snapshot ensembles. Dropout can be viewed as an implicit ensemble of exponentially many subnetworks.",
    explanationChinese: "集成训练多个模型（使用不同的初始化、架构或数据子集）并平均它们的预测。这减少了方差，因为个别模型的误差倾向于相互抵消。集成在竞赛中持续提高1-2%的精度。技术包括bagging、boosting和快照集成。Dropout可以被视为指数级多个子网络的隐式集成。",
    diagram: "",
    terms: ["dropout", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 190,
    q: "What is the effect of batch normalization as a regularizer?",
    qChinese: "批量归一化作为正则化因素的效果是什么？",
    options: [
      "A) Batch normalization has no regularization effect",
      "B) Batch normalization only works as a regularizer with batch sizes greater than 256",
      "C) The noise from estimating batch statistics introduces stochasticity that provides implicit regularization, reducing the need for dropout",
      "D) It regularizes by reducing the learning rate"
    ],
    optionsChinese: [
      "A) 批量归一化没有正则化效果",
      "B) 批量归一化仅在批量大小大于256时作为正则化因素",
      "C) 估计批量统计的噪声引入随机性，提供隐式正则化，减少对dropout的需求",
      "D) 它通过降低学习率来正则化"
    ],
    answer: 2,
    explanation: "Batch normalization introduces noise because the mean and variance are estimated from the current mini-batch, which varies at each step. This stochasticity acts as a regularizer similar to dropout. Networks with batch norm often require less dropout and L2 regularization. The regularization effect is stronger with smaller batch sizes (more noisy estimates) and weaker with larger ones.",
    explanationChinese: "批量归一化引入噪声，因为均值和方差是从当前小批量估计的，每一步都不同。这种随机性作为类似dropout的正则化因素。使用批量归一化的网络通常需要更少的dropout和L2正则化。正则化效果在较小批量大小（更嘈杂的估计）时更强，较大批量大小时更弱。",
    diagram: "",
    terms: ["batch_normalization", "dropout"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 191,
    q: "What is a Generative Adversarial Network (GAN)?",
    qChinese: "什么是生成对抗网络（GAN）？",
    options: [
      "A) A framework with a generator and discriminator trained adversarially: the generator creates fake data, the discriminator distinguishes real from fake",
      "B) A network that generates adversarial examples to attack other models",
      "C) Two identical networks that compete on the same task",
      "D) A network that generates data and then adversarially tests it"
    ],
    optionsChinese: [
      "A) 具有生成器和判别器的框架，以对抗方式训练：生成器创建假数据，判别器区分真假",
      "B) 生成对抗样本来攻击其他模型的网络",
      "C) 在相同任务上竞争的两个相同网络",
      "D) 生成数据然后对抗性测试的网络"
    ],
    answer: 0,
    explanation: "GANs consist of two networks playing a minimax game. The generator G maps random noise z to data space, trying to fool the discriminator. The discriminator D classifies inputs as real or generated. Training alternates: D maximizes log(D(x)) + log(1-D(G(z))), while G minimizes log(1-D(G(z))). At convergence, G produces data indistinguishable from real data and D outputs 0.5 for all inputs.",
    explanationChinese: "GAN由两个网络组成，进行极小极大博弈。生成器G将随机噪声z映射到数据空间，试图欺骗判别器。判别器D将输入分类为真实或生成的。训练交替进行：D最大化log(D(x)) + log(1-D(G(z)))，G最小化log(1-D(G(z)))。在收敛时，G产生与真实数据无法区分的数据，D对所有输入输出0.5。",
    diagram: "",
    terms: ["generative_adversarial_network", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 192,
    q: "What is mode collapse in GANs?",
    qChinese: "GAN中的模式崩溃是什么？",
    options: [
      "A) The generator learns to produce only a limited variety of outputs, ignoring most of the data distribution's modes",
      "B) The GAN training crashes due to memory errors",
      "C) The discriminator becomes too powerful",
      "D) Both networks collapse to zero weights"
    ],
    optionsChinese: [
      "A) 生成器学会只产生有限种类的输出，忽略数据分布的大部分模式",
      "B) GAN训练因内存错误崩溃",
      "C) 判别器变得太强大",
      "D) 两个网络的权重都崩溃为零"
    ],
    answer: 0,
    explanation: "Mode collapse occurs when the generator finds a few outputs that consistently fool the discriminator and stops exploring the full data distribution. For example, a face GAN might only generate one type of face. Solutions include Wasserstein loss, spectral normalization, diversity penalties, progressive growing, and training techniques like unrolled GANs that encourage diversity.",
    explanationChinese: "模式崩溃发生在生成器找到几个持续欺骗判别器的输出并停止探索完整数据分布时。例如，人脸GAN可能只生成一种类型的人脸。解决方案包括Wasserstein损失、谱归一化、多样性惩罚、渐进式增长和像展开GAN这样鼓励多样性的训练技术。",
    diagram: "",
    terms: ["generative_adversarial_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 193,
    q: "What is a Variational Autoencoder (VAE)?",
    qChinese: "什么是变分自编码器（VAE）？",
    options: [
      "A) A generative model that learns a probabilistic latent space by encoding inputs into distribution parameters and sampling from them",
      "B) An autoencoder with variable-size latent space",
      "C) An autoencoder that varies its architecture during training",
      "D) A denoising autoencoder with variable noise levels"
    ],
    optionsChinese: [
      "A) 通过将输入编码为分布参数并从中采样来学习概率隐空间的生成模型",
      "B) 具有可变大小隐空间的自编码器",
      "C) 在训练过程中改变架构的自编码器",
      "D) 具有可变噪声水平的去噪自编码器"
    ],
    answer: 0,
    explanation: "A VAE encodes inputs into parameters (mean mu and variance sigma) of a latent distribution, samples using the reparameterization trick (z = mu + sigma * epsilon, epsilon ~ N(0,1)), and decodes to reconstruct the input. The loss combines reconstruction loss and KL divergence between the learned and prior distributions. VAEs generate diverse outputs by sampling from the learned latent space.",
    explanationChinese: "VAE将输入编码为隐分布的参数（均值mu和方差sigma），使用重参数化技巧（z = mu + sigma * epsilon, epsilon ~ N(0,1)）采样，然后解码重建输入。损失结合了重建损失和学习分布与先验分布之间的KL散度。VAE通过从学习的隐空间采样生成多样化的输出。",
    diagram: "",
    terms: ["autoencoder", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 194,
    q: "What is the reparameterization trick in VAEs?",
    qChinese: "VAE中的重参数化技巧是什么？",
    options: [
      "A) Changing the parameter names during training",
      "B) Reparameterizing the loss function",
      "C) Expressing the random sampling z = mu + sigma * epsilon so that gradients can flow through mu and sigma while epsilon provides the randomness",
      "D) Using different parameters for training and inference"
    ],
    optionsChinese: [
      "A) 在训练过程中更改参数名称",
      "B) 重新参数化损失函数",
      "C) 将随机采样表达为z = mu + sigma * epsilon，使梯度可以通过mu和sigma流动，而epsilon提供随机性",
      "D) 训练和推理使用不同参数"
    ],
    answer: 2,
    explanation: "Sampling z ~ N(mu, sigma^2) is not differentiable because random sampling blocks gradient flow. The reparameterization trick rewrites this as z = mu + sigma * epsilon where epsilon ~ N(0,1). Now mu and sigma are deterministic functions of the encoder output, and gradients can backpropagate through them. The randomness is externalized to epsilon, which has no learnable parameters.",
    explanationChinese: "从z ~ N(mu, sigma^2)采样是不可微的，因为随机采样阻断了梯度流。重参数化技巧将其改写为z = mu + sigma * epsilon，其中epsilon ~ N(0,1)。现在mu和sigma是编码器输出的确定性函数，梯度可以通过它们反向传播。随机性被外部化到没有可学习参数的epsilon中。",
    diagram: "",
    terms: ["autoencoder", "backpropagation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 195,
    q: "What is a Diffusion Model?",
    qChinese: "什么是扩散模型？",
    options: [
      "A) A generative model that learns to reverse a gradual noise-addition process, generating data by iteratively denoising random noise",
      "B) A model that diffuses information across network layers",
      "C) A model that spreads gradient updates across the network",
      "D) A model that simulates physical diffusion processes"
    ],
    optionsChinese: [
      "A) 学习逆转逐渐添加噪声过程的生成模型，通过迭代去噪随机噪声来生成数据",
      "B) 在网络层之间扩散信息的模型",
      "C) 在网络中传播梯度更新的模型",
      "D) 模拟物理扩散过程的模型"
    ],
    answer: 0,
    explanation: "Diffusion models define a forward process that gradually adds Gaussian noise to data over T steps until it becomes pure noise. A neural network (usually a U-Net) is trained to reverse each noise step. Generation starts from random noise and iteratively denoises it. Models like DALL-E 2, Stable Diffusion, and Imagen produce state-of-the-art image generation with more stable training than GANs.",
    explanationChinese: "扩散模型定义一个前向过程，在T步中逐渐向数据添加高斯噪声直到变成纯噪声。神经网络（通常是U-Net）被训练来逆转每个噪声步骤。生成从随机噪声开始并迭代去噪。DALL-E 2、Stable Diffusion和Imagen等模型产生最先进的图像生成，训练比GAN更稳定。",
    diagram: "",
    terms: ["generative_adversarial_network", "autoencoder"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 196,
    q: "What is the Wasserstein GAN (WGAN)?",
    qChinese: "什么是Wasserstein GAN（WGAN）？",
    options: [
      "A) A GAN trained with the standard cross-entropy loss",
      "B) A GAN with multiple generators",
      "C) A GAN designed for specific types of data",
      "D) A GAN that uses the Wasserstein distance (Earth Mover's Distance) as the loss, providing more stable training and meaningful gradients"
    ],
    optionsChinese: [
      "A) 使用标准交叉熵损失训练的GAN",
      "B) 具有多个生成器的GAN",
      "C) 为特定类型数据设计的GAN",
      "D) 使用Wasserstein距离（推土机距离）作为损失的GAN，提供更稳定的训练和有意义的梯度"
    ],
    answer: 3,
    explanation: "WGAN replaces the standard GAN loss with the Wasserstein-1 distance, which measures the minimum cost of transforming one distribution into another. The critic (replacing the discriminator) is trained to approximate this distance. WGAN provides gradients even when distributions do not overlap, solving the vanishing gradient problem in GANs. WGAN-GP adds gradient penalty for improved stability.",
    explanationChinese: "WGAN用Wasserstein-1距离替代标准GAN损失，它衡量将一个分布转换为另一个分布的最小成本。评论家（替代判别器）被训练来近似这个距离。即使分布不重叠，WGAN也提供梯度，解决了GAN中的梯度消失问题。WGAN-GP添加梯度惩罚以提高稳定性。",
    diagram: "",
    terms: ["generative_adversarial_network", "loss_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 197,
    q: "What is a standard Autoencoder?",
    qChinese: "什么是标准自编码器？",
    options: [
      "A) A supervised model that encodes labels into features",
      "B) An unsupervised model with an encoder that compresses input into a latent representation and a decoder that reconstructs it",
      "C) A model that automatically generates code",
      "D) A type of GAN with automatic training"
    ],
    optionsChinese: [
      "A) 将标签编码为特征的监督模型",
      "B) 具有编码器将输入压缩为潜在表示和解码器将其重建的无监督模型",
      "C) 自动生成代码的模型",
      "D) 具有自动训练的GAN类型"
    ],
    answer: 1,
    explanation: "An autoencoder consists of an encoder f that maps input x to a lower-dimensional latent code z, and a decoder g that reconstructs x from z. It is trained to minimize reconstruction loss: L = ||x - g(f(x))||^2. The bottleneck forces the model to learn a compressed representation. Autoencoders are used for dimensionality reduction, denoising, anomaly detection, and feature learning.",
    explanationChinese: "自编码器由编码器f（将输入x映射到低维潜在编码z）和解码器g（从z重建x）组成。它被训练以最小化重建损失：L = ||x - g(f(x))||^2。瓶颈迫使模型学习压缩表示。自编码器用于降维、去噪、异常检测和特征学习。",
    diagram: "",
    terms: ["autoencoder", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 198,
    q: "What is a conditional GAN (cGAN)?",
    qChinese: "什么是条件GAN（cGAN）？",
    options: [
      "A) A GAN that only generates data under certain conditions",
      "B) A GAN that is trained conditionally on the discriminator's performance",
      "C) A GAN with conditional dropout",
      "D) A GAN where both generator and discriminator are conditioned on additional information like class labels or text"
    ],
    optionsChinese: [
      "A) 仅在某些条件下生成数据的GAN",
      "B) 根据判别器性能有条件训练的GAN",
      "C) 具有条件dropout的GAN",
      "D) 生成器和判别器都以类标签或文本等额外信息为条件的GAN"
    ],
    answer: 3,
    explanation: "A conditional GAN extends GAN by feeding additional conditioning information y (e.g., class labels, text, images) to both the generator G(z,y) and discriminator D(x,y). This enables controlled generation: generate specific digit classes, translate images from sketches, or create images from text descriptions. Pix2Pix and SPADE are notable cGAN architectures for image-to-image translation.",
    explanationChinese: "条件GAN通过向生成器G(z,y)和判别器D(x,y)提供额外的条件信息y（如类标签、文本、图像）来扩展GAN。这实现了可控生成：生成特定数字类别、从草图翻译图像或从文本描述创建图像。Pix2Pix和SPADE是用于图像到图像翻译的著名cGAN架构。",
    diagram: "",
    terms: ["generative_adversarial_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 199,
    q: "What is the denoising diffusion probabilistic model (DDPM)?",
    qChinese: "什么是去噪扩散概率模型（DDPM）？",
    options: [
      "A) A model that removes noise from images using convolutions",
      "B) A probabilistic version of a denoising autoencoder",
      "C) A diffusion model that trains a network to predict and remove noise added at each diffusion step, enabling high-quality generation",
      "D) A model that adds noise to improve generalization"
    ],
    optionsChinese: [
      "A) 使用卷积从图像中去除噪声的模型",
      "B) 去噪自编码器的概率版本",
      "C) 训练网络预测和去除每个扩散步骤添加的噪声的扩散模型，实现高质量生成",
      "D) 添加噪声以改善泛化的模型"
    ],
    answer: 2,
    explanation: "DDPM defines a Markov chain of T diffusion steps that gradually adds noise: q(x_t|x_{t-1}) = N(sqrt(1-beta_t)*x_{t-1}, beta_t*I). A neural network learns the reverse process p(x_{t-1}|x_t) by predicting the noise epsilon added at each step. Generation starts from x_T ~ N(0,I) and iteratively denoises. The simple L2 noise prediction objective makes training stable and scalable.",
    explanationChinese: "DDPM定义了T个扩散步骤的马尔可夫链，逐渐添加噪声：q(x_t|x_{t-1}) = N(sqrt(1-beta_t)*x_{t-1}, beta_t*I)。神经网络通过预测每一步添加的噪声epsilon来学习逆过程p(x_{t-1}|x_t)。生成从x_T ~ N(0,I)开始并迭代去噪。简单的L2噪声预测目标使训练稳定且可扩展。",
    diagram: "",
    terms: ["autoencoder", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 200,
    q: "What is the StyleGAN architecture known for?",
    qChinese: "StyleGAN架构以什么著称？",
    options: [
      "A) Being the first GAN architecture",
      "B) Only working with text data",
      "C) Being the fastest GAN to train",
      "D) Generating high-quality images with fine-grained style control through a mapping network and style injection at multiple scales"
    ],
    optionsChinese: [
      "A) 是第一个GAN架构",
      "B) 仅适用于文本数据",
      "C) 是训练最快的GAN",
      "D) 通过映射网络和多尺度风格注入生成具有细粒度风格控制的高质量图像"
    ],
    answer: 3,
    explanation: "StyleGAN introduces a mapping network that transforms random noise z to an intermediate latent space W, then uses adaptive instance normalization (AdaIN) to inject style at each layer of the generator. This separates high-level attributes (pose, identity) from fine details (hair, freckles). StyleGAN2 fixes artifacts and improves quality, producing photorealistic face generation.",
    explanationChinese: "StyleGAN引入一个映射网络，将随机噪声z转换为中间隐空间W，然后使用自适应实例归一化（AdaIN）在生成器的每一层注入风格。这将高级属性（姿势、身份）与细节（头发、雀斑）分离。StyleGAN2修复了伪影并改善了质量，产生逼真的人脸生成。",
    diagram: "",
    terms: ["generative_adversarial_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 201,
    q: "What is the latent space in generative models?",
    qChinese: "生成模型中的隐空间是什么？",
    options: [
      "A) A lower-dimensional space of learned representations from which new data can be generated by decoding",
      "B) The space where the training data is stored",
      "C) The physical memory space used by the model",
      "D) The space between network layers"
    ],
    optionsChinese: [
      "A) 学习表示的低维空间，通过解码可以从中生成新数据",
      "B) 存储训练数据的空间",
      "C) 模型使用的物理内存空间",
      "D) 网络层之间的空间"
    ],
    answer: 0,
    explanation: "The latent space is a compressed representation learned by generative models. In VAEs, points in latent space follow a prior distribution (usually Gaussian). In GANs, the generator maps from a noise distribution to data space. Meaningful operations in latent space (interpolation, arithmetic) correspond to semantic changes in generated data, such as smooth transitions between faces.",
    explanationChinese: "隐空间是生成模型学习的压缩表示。在VAE中，隐空间中的点遵循先验分布（通常是高斯分布）。在GAN中，生成器从噪声分布映射到数据空间。隐空间中有意义的操作（插值、算术）对应于生成数据中的语义变化，如人脸之间的平滑过渡。",
    diagram: "",
    terms: ["autoencoder", "generative_adversarial_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 202,
    q: "What is classifier-free guidance in diffusion models?",
    qChinese: "扩散模型中的无分类器引导是什么？",
    options: [
      "A) Training a diffusion model without any classifier",
      "B) Using a classifier to guide the diffusion process",
      "C) A technique that interpolates between conditional and unconditional predictions to control the strength of conditioning",
      "D) Generating images without any guidance"
    ],
    optionsChinese: [
      "A) 训练没有任何分类器的扩散模型",
      "B) 使用分类器来引导扩散过程",
      "C) 在条件预测和无条件预测之间插值以控制条件强度的技术",
      "D) 不带任何引导地生成图像"
    ],
    answer: 2,
    explanation: "Classifier-free guidance trains a single model to make both conditional (with text prompt) and unconditional (without prompt) predictions. During generation, the output is: epsilon_guided = epsilon_unconditional + w * (epsilon_conditional - epsilon_unconditional), where w > 1 amplifies the conditioning signal. Higher guidance scale produces images more aligned with the text but with less diversity.",
    explanationChinese: "无分类器引导训练单个模型进行条件（带文本提示）和无条件（无提示）预测。在生成过程中，输出为：epsilon_guided = epsilon_unconditional + w * (epsilon_conditional - epsilon_unconditional)，其中w > 1放大条件信号。更高的引导尺度产生与文本更一致的图像，但多样性更低。",
    diagram: "",
    terms: ["autoencoder", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 203,
    q: "What is the FID (Frechet Inception Distance) score?",
    qChinese: "什么是FID（Frechet Inception Distance）分数？",
    options: [
      "A) A metric measuring how fast a GAN trains",
      "B) A measure of training stability",
      "C) The distance between the first and last inception layer",
      "D) A metric comparing the distribution of generated images to real images using Inception network features, where lower is better"
    ],
    optionsChinese: [
      "A) 衡量GAN训练速度的指标",
      "B) 训练稳定性的度量",
      "C) 第一个和最后一个inception层之间的距离",
      "D) 使用Inception网络特征比较生成图像和真实图像分布的指标，越低越好"
    ],
    answer: 3,
    explanation: "FID extracts features from both real and generated images using a pre-trained Inception-v3 network, fits Gaussian distributions to both sets of features, and computes the Frechet distance between them. Lower FID indicates generated images are more similar to real ones in terms of quality and diversity. FID is the standard metric for evaluating generative models, though it has limitations with small sample sizes.",
    explanationChinese: "FID使用预训练的Inception-v3网络从真实和生成图像中提取特征，对两组特征拟合高斯分布，并计算它们之间的Frechet距离。较低的FID表示生成图像在质量和多样性方面更接近真实图像。FID是评估生成模型的标准指标，但在小样本量下有局限性。",
    diagram: "",
    terms: ["generative_adversarial_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 204,
    q: "What is the Progressive Growing technique in GANs?",
    qChinese: "GAN中的渐进增长技术是什么？",
    options: [
      "A) Gradually increasing the dataset size during training",
      "B) Progressively increasing the learning rate",
      "C) Starting with low-resolution images and progressively adding layers to generate higher-resolution images",
      "D) Growing the batch size over training"
    ],
    optionsChinese: [
      "A) 在训练过程中逐渐增加数据集大小",
      "B) 逐步增加学习率",
      "C) 从低分辨率图像开始，逐步添加层以生成更高分辨率的图像",
      "D) 在训练过程中增加批量大小"
    ],
    answer: 2,
    explanation: "Progressive growing starts training the GAN at a low resolution (e.g., 4x4) and gradually adds new layers that increase the resolution (8x8, 16x16, up to 1024x1024). New layers are smoothly faded in using a blending parameter. This stabilizes training by first learning coarse structure and then refining details, enabling the generation of high-resolution images that were previously difficult.",
    explanationChinese: "渐进增长从低分辨率（如4x4）开始训练GAN，并逐渐添加新层以增加分辨率（8x8, 16x16，直到1024x1024）。新层使用混合参数平滑地淡入。这通过先学习粗略结构然后细化细节来稳定训练，使以前困难的高分辨率图像生成成为可能。",
    diagram: "",
    terms: ["generative_adversarial_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 205,
    q: "What is a denoising autoencoder?",
    qChinese: "什么是去噪自编码器？",
    options: [
      "A) An autoencoder trained to reconstruct clean inputs from corrupted (noisy) versions",
      "B) An autoencoder that generates noise",
      "C) An autoencoder that removes network noise",
      "D) An autoencoder with noise in its latent space"
    ],
    optionsChinese: [
      "A) 训练从损坏（有噪声）版本重建干净输入的自编码器",
      "B) 生成噪声的自编码器",
      "C) 去除网络噪声的自编码器",
      "D) 隐空间中有噪声的自编码器"
    ],
    answer: 0,
    explanation: "A denoising autoencoder is trained by first corrupting the input (adding Gaussian noise, masking pixels, etc.) and then learning to reconstruct the original clean input. This prevents the model from simply learning an identity function and forces it to learn robust features. Denoising autoencoders are a precursor to diffusion models, which can be seen as a hierarchy of denoisers.",
    explanationChinese: "去噪自编码器通过先损坏输入（添加高斯噪声、掩码像素等），然后学习重建原始干净输入来训练。这防止模型简单地学习恒等函数，迫使它学习鲁棒特征。去噪自编码器是扩散模型的前身，扩散模型可以被视为去噪器的层次结构。",
    diagram: "",
    terms: ["autoencoder", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 206,
    q: "What is the KL divergence term in the VAE loss?",
    qChinese: "VAE损失中的KL散度项是什么？",
    options: [
      "A) A reconstruction error measurement",
      "B) A regularization term that pushes the learned latent distribution toward the prior (typically standard normal)",
      "C) The classification loss for the encoder",
      "D) A measure of the decoder's accuracy"
    ],
    optionsChinese: [
      "A) 重建误差的度量",
      "B) 将学习的隐分布推向先验（通常是标准正态分布）的正则化项",
      "C) 编码器的分类损失",
      "D) 解码器准确性的度量"
    ],
    answer: 1,
    explanation: "The VAE loss = Reconstruction Loss + beta * KL(q(z|x) || p(z)). The KL divergence measures how much the encoder's output distribution q(z|x) = N(mu, sigma^2) deviates from the prior p(z) = N(0, I). It has a closed-form solution: KL = -0.5 * sum(1 + log(sigma^2) - mu^2 - sigma^2). This ensures the latent space is well-structured for generation.",
    explanationChinese: "VAE损失 = 重建损失 + beta * KL(q(z|x) || p(z))。KL散度衡量编码器输出分布q(z|x) = N(mu, sigma^2)与先验p(z) = N(0, I)的偏差。它有闭式解：KL = -0.5 * sum(1 + log(sigma^2) - mu^2 - sigma^2)。这确保隐空间对生成具有良好的结构。",
    diagram: "",
    terms: ["autoencoder", "loss_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 207,
    q: "What is a CycleGAN?",
    qChinese: "什么是CycleGAN？",
    options: [
      "A) A GAN for unpaired image-to-image translation using cycle consistency loss to enforce bidirectional mapping",
      "B) A GAN that processes cyclic sequences",
      "C) A GAN that cycles through different architectures",
      "D) A GAN with cyclical learning rates"
    ],
    optionsChinese: [
      "A) 使用循环一致性损失强制双向映射进行非配对图像到图像翻译的GAN",
      "B) 处理循环序列的GAN",
      "C) 在不同架构之间循环的GAN",
      "D) 具有循环学习率的GAN"
    ],
    answer: 0,
    explanation: "CycleGAN enables image translation between two domains (e.g., horses to zebras) without paired training data. It uses two generators (G: A->B, F: B->A) and two discriminators, with cycle consistency loss: F(G(x)) should approximate x and G(F(y)) should approximate y. This constraint prevents mode collapse and ensures meaningful translations without supervision.",
    explanationChinese: "CycleGAN在没有配对训练数据的情况下实现两个域之间的图像翻译（如马到斑马）。它使用两个生成器（G: A->B, F: B->A）和两个判别器，带有循环一致性损失：F(G(x))应近似x，G(F(y))应近似y。这个约束防止模式崩溃并确保有意义的翻译而无需监督。",
    diagram: "",
    terms: ["generative_adversarial_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 208,
    q: "What is latent diffusion (Stable Diffusion)?",
    qChinese: "什么是潜在扩散（Stable Diffusion）？",
    options: [
      "A) Performing diffusion in the original pixel space",
      "B) Performing the diffusion process in a compressed latent space (from a pre-trained autoencoder) rather than pixel space, greatly reducing computation",
      "C) Diffusing the latent variables of a GAN",
      "D) A diffusion process with variable step sizes"
    ],
    optionsChinese: [
      "A) 在原始像素空间中执行扩散",
      "B) 在压缩的隐空间（来自预训练自编码器）而非像素空间中执行扩散过程，大幅减少计算",
      "C) 扩散GAN的潜在变量",
      "D) 具有可变步长的扩散过程"
    ],
    answer: 1,
    explanation: "Latent diffusion models first train a VQ-VAE or autoencoder to compress images to a lower-dimensional latent space, then apply the diffusion process in this latent space. This is much more efficient than pixel-space diffusion (e.g., 512x512x3 vs 64x64x4 latent). Stable Diffusion combines latent diffusion with text conditioning via CLIP embeddings and cross-attention, enabling text-to-image generation on consumer GPUs.",
    explanationChinese: "潜在扩散模型首先训练VQ-VAE或自编码器将图像压缩到低维隐空间，然后在此隐空间中应用扩散过程。这比像素空间扩散高效得多（如512x512x3 vs 64x64x4潜在空间）。Stable Diffusion结合了潜在扩散与通过CLIP嵌入和交叉注意力的文本条件，实现了消费级GPU上的文本到图像生成。",
    diagram: "",
    terms: ["autoencoder", "attention_mechanism"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 209,
    q: "What is a VQ-VAE (Vector Quantized Variational Autoencoder)?",
    qChinese: "什么是VQ-VAE（向量量化变分自编码器）？",
    options: [
      "A) A VAE with very quick training",
      "B) A VAE that uses a discrete codebook of learned embedding vectors to quantize the latent space",
      "C) A VAE with quantized weights",
      "D) A VAE variant for video data"
    ],
    optionsChinese: [
      "A) 训练非常快的VAE",
      "B) 使用学习嵌入向量的离散码本来量化隐空间的VAE",
      "C) 具有量化权重的VAE",
      "D) 用于视频数据的VAE变体"
    ],
    answer: 1,
    explanation: "VQ-VAE replaces the continuous latent space of VAE with a discrete codebook of K embedding vectors. The encoder output is mapped to the nearest codebook vector (vector quantization). This avoids the posterior collapse problem of VAEs and produces sharp, high-quality reconstructions. VQ-VAE-2 generates high-resolution images by using a hierarchy of codebooks at different scales.",
    explanationChinese: "VQ-VAE用K个嵌入向量的离散码本替代VAE的连续隐空间。编码器输出被映射到最近的码本向量（向量量化）。这避免了VAE的后验崩塌问题，产生清晰、高质量的重建。VQ-VAE-2通过在不同尺度使用码本层次结构来生成高分辨率图像。",
    diagram: "",
    terms: ["autoencoder"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 210,
    q: "What is the generator network in a GAN?",
    qChinese: "GAN中的生成器网络是什么？",
    options: [
      "A) A network that transforms random noise into synthetic data samples resembling the training distribution",
      "B) A network that generates training labels",
      "C) A network that generates network architectures",
      "D) A classifier that generates probabilities"
    ],
    optionsChinese: [
      "A) 将随机噪声转换为类似训练分布的合成数据样本的网络",
      "B) 生成训练标签的网络",
      "C) 生成网络架构的网络",
      "D) 生成概率的分类器"
    ],
    answer: 0,
    explanation: "The generator G takes a random noise vector z sampled from a simple distribution (usually uniform or Gaussian) and maps it to the data space: x_fake = G(z). For images, it typically uses transposed convolutions to progressively upscale from a small spatial dimension. The generator is trained to minimize the discriminator's ability to distinguish its outputs from real data.",
    explanationChinese: "生成器G接收从简单分布（通常是均匀或高斯分布）中采样的随机噪声向量z，并将其映射到数据空间：x_fake = G(z)。对于图像，它通常使用转置卷积从小空间维度逐步上采样。生成器被训练以最小化判别器区分其输出和真实数据的能力。",
    diagram: "",
    terms: ["generative_adversarial_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 211,
    q: "What is the discriminator network in a GAN?",
    qChinese: "GAN中的判别器网络是什么？",
    options: [
      "A) A network that classifies inputs as real (from training data) or fake (from the generator)",
      "B) A network that discriminates between different classes",
      "C) A network that filters training data",
      "D) A network that selects the best generated samples"
    ],
    optionsChinese: [
      "A) 将输入分类为真实（来自训练数据）或伪造（来自生成器）的网络",
      "B) 区分不同类别的网络",
      "C) 过滤训练数据的网络",
      "D) 选择最佳生成样本的网络"
    ],
    answer: 0,
    explanation: "The discriminator D receives either real data x or generated data G(z) and outputs a probability that the input is real. For images, it typically uses a CNN architecture with strided convolutions. The discriminator is trained to maximize correct classifications, providing learning signal to the generator. In WGAN, the discriminator (critic) outputs a scalar score instead of a probability.",
    explanationChinese: "判别器D接收真实数据x或生成数据G(z)，并输出输入为真实的概率。对于图像，它通常使用带步幅卷积的CNN架构。判别器被训练以最大化正确分类，为生成器提供学习信号。在WGAN中，判别器（评论家）输出标量分数而非概率。",
    diagram: "",
    terms: ["generative_adversarial_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 212,
    q: "What is the noise schedule in diffusion models?",
    qChinese: "扩散模型中的噪声调度是什么？",
    options: [
      "A) A timetable for when to add noise during training",
      "B) The schedule for reducing noise in the output",
      "C) The sequence of noise levels (beta_t) applied at each diffusion step, controlling how quickly data is converted to noise",
      "D) A method to schedule GPU noise during computation"
    ],
    optionsChinese: [
      "A) 训练期间何时添加噪声的时间表",
      "B) 减少输出噪声的调度",
      "C) 每个扩散步骤应用的噪声水平序列（beta_t），控制数据转换为噪声的速度",
      "D) 调度计算期间GPU噪声的方法"
    ],
    answer: 2,
    explanation: "The noise schedule defines how much noise is added at each step t. Linear schedules increase beta from beta_1=0.0001 to beta_T=0.02. Cosine schedules provide a smoother progression. The schedule affects generation quality: too aggressive destroys information too quickly; too slow wastes computation. The total T is typically 1000 steps for training, with accelerated sampling (DDIM, DPM-Solver) for inference.",
    explanationChinese: "噪声调度定义了在每一步t添加多少噪声。线性调度将beta从beta_1=0.0001增加到beta_T=0.02。余弦调度提供更平滑的进展。调度影响生成质量：太激进会太快破坏信息；太慢浪费计算。总T通常为1000步用于训练，推理时使用加速采样（DDIM、DPM-Solver）。",
    diagram: "",
    terms: ["autoencoder"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 213,
    q: "What is the difference between GANs and diffusion models?",
    qChinese: "GAN和扩散模型有什么区别？",
    options: [
      "A) GANs use adversarial training with generator-discriminator pairs; diffusion models learn to reverse a noise process with stable training but slower sampling",
      "B) They are identical in how they generate data",
      "C) GANs produce higher-quality results in all cases",
      "D) Diffusion models require adversarial training"
    ],
    optionsChinese: [
      "A) GAN使用生成器-判别器对进行对抗训练；扩散模型学习以稳定训练但较慢采样来逆转噪声过程",
      "B) 它们在生成数据方面完全相同",
      "C) GAN在所有情况下都产生更高质量的结果",
      "D) 扩散模型需要对抗训练"
    ],
    answer: 0,
    explanation: "GANs generate samples in one forward pass but suffer from training instability and mode collapse. Diffusion models iterate through hundreds of denoising steps (slower) but train with simple regression losses (more stable) and achieve better distribution coverage (no mode collapse). Recent diffusion models generally outperform GANs in image quality (FID) while being easier to train and scale.",
    explanationChinese: "GAN在一次前向传播中生成样本，但存在训练不稳定和模式崩溃。扩散模型通过数百个去噪步骤迭代（更慢），但使用简单的回归损失训练（更稳定），实现更好的分布覆盖（无模式崩溃）。最近的扩散模型在图像质量（FID）上通常优于GAN，同时更容易训练和扩展。",
    diagram: "",
    terms: ["generative_adversarial_network", "autoencoder"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 214,
    q: "What is a normalizing flow?",
    qChinese: "什么是归一化流？",
    options: [
      "A) A generative model that transforms a simple distribution into a complex one through a sequence of invertible transformations with tractable Jacobian determinants",
      "B) A method to normalize data flow through a network",
      "C) A normalization technique for flow-based processing",
      "D) A method to control gradient flow"
    ],
    optionsChinese: [
      "A) 通过一系列具有可计算雅可比行列式的可逆变换将简单分布转换为复杂分布的生成模型",
      "B) 归一化数据在网络中流动的方法",
      "C) 用于基于流的处理的归一化技术",
      "D) 控制梯度流的方法"
    ],
    answer: 0,
    explanation: "Normalizing flows learn bijective (invertible) mappings between a simple base distribution (Gaussian) and the data distribution. Using the change of variables formula, they compute exact likelihoods. Each transformation must be invertible with an efficiently computable Jacobian determinant. Models like RealNVP, Glow, and NICE use coupling layers to achieve this. Flows provide exact density estimation but are often computationally expensive.",
    explanationChinese: "归一化流学习简单基础分布（高斯）和数据分布之间的双射（可逆）映射。使用变量替换公式，它们计算精确似然。每个变换必须是可逆的且具有可高效计算的雅可比行列式。RealNVP、Glow和NICE等模型使用耦合层实现这一点。流提供精确的密度估计，但通常计算成本较高。",
    diagram: "",
    terms: ["autoencoder", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 215,
    q: "What is image inpainting using generative models?",
    qChinese: "使用生成模型的图像修复是什么？",
    options: [
      "A) Enhancing the resolution of an image",
      "B) Converting images from one style to another",
      "C) Filling in missing or corrupted regions of an image with plausible content generated by a neural network",
      "D) Removing noise from images"
    ],
    optionsChinese: [
      "A) 增强图像的分辨率",
      "B) 将图像从一种风格转换为另一种",
      "C) 用神经网络生成的合理内容填充图像中缺失或损坏的区域",
      "D) 从图像中去除噪声"
    ],
    answer: 2,
    explanation: "Image inpainting uses generative models to fill in missing regions of an image based on surrounding context. GANs (like DeepFill) and diffusion models are particularly effective, generating semantically coherent content that blends seamlessly with the original. The model must understand object structure, texture continuation, and scene context to produce convincing results.",
    explanationChinese: "图像修复使用生成模型根据周围上下文填充图像中缺失的区域。GAN（如DeepFill）和扩散模型特别有效，生成与原始内容无缝融合的语义连贯内容。模型必须理解物体结构、纹理延续和场景上下文才能产生令人信服的结果。",
    diagram: "",
    terms: ["generative_adversarial_network", "convolutional_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 216,
    q: "What is the ELBO (Evidence Lower Bound) in VAEs?",
    qChinese: "VAE中的ELBO（证据下界）是什么？",
    options: [
      "A) An upper bound on the model's accuracy",
      "B) The minimum loss achievable by the model",
      "C) A lower bound on the log marginal likelihood that VAEs maximize, decomposed into reconstruction quality minus KL regularization",
      "D) A bound on the latent space dimensions"
    ],
    optionsChinese: [
      "A) 模型精度的上界",
      "B) 模型可达到的最小损失",
      "C) VAE最大化的对数边际似然的下界，分解为重建质量减去KL正则化",
      "D) 隐空间维度的界限"
    ],
    answer: 2,
    explanation: "The ELBO = E[log p(x|z)] - KL(q(z|x)||p(z)) is a lower bound on log p(x). Maximizing the ELBO means maximizing reconstruction quality (first term) while keeping the encoder distribution close to the prior (KL term). The gap between ELBO and true log-likelihood measures the quality of the variational approximation. Tighter bounds lead to better generative models.",
    explanationChinese: "ELBO = E[log p(x|z)] - KL(q(z|x)||p(z))是log p(x)的下界。最大化ELBO意味着最大化重建质量（第一项），同时使编码器分布接近先验（KL项）。ELBO与真实对数似然之间的差距衡量变分近似的质量。更紧的界限产生更好的生成模型。",
    diagram: "",
    terms: ["autoencoder", "loss_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 217,
    q: "What is super-resolution using deep learning?",
    qChinese: "使用深度学习的超分辨率是什么？",
    options: [
      "A) Training models at very high resolution only",
      "B) Increasing the resolution of model weights",
      "C) Using neural networks to upscale low-resolution images to higher resolution while adding realistic details",
      "D) Training with super-high learning rates"
    ],
    optionsChinese: [
      "A) 仅在非常高分辨率下训练模型",
      "B) 增加模型权重的分辨率",
      "C) 使用神经网络将低分辨率图像上采样到更高分辨率并添加逼真细节",
      "D) 使用超高学习率训练"
    ],
    answer: 2,
    explanation: "Super-resolution models learn to upscale images beyond their original resolution, hallucinating plausible high-frequency details. SRCNN pioneered CNN-based approaches, while SRGAN uses adversarial training for photorealistic results. Recent diffusion-based methods provide even higher quality. Applications include enhancing surveillance footage, medical imaging, and satellite imagery.",
    explanationChinese: "超分辨率模型学习将图像上采样到超出原始分辨率，生成合理的高频细节。SRCNN开创了基于CNN的方法，而SRGAN使用对抗训练获得逼真的结果。最近基于扩散的方法提供了更高的质量。应用包括增强监控录像、医学成像和卫星图像。",
    diagram: "",
    terms: ["generative_adversarial_network", "convolutional_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 218,
    q: "What is the posterior collapse problem in VAEs?",
    qChinese: "VAE中的后验崩塌问题是什么？",
    options: [
      "A) The decoder collapses to output a single image",
      "B) The training loss collapses to zero",
      "C) The encoder learns to ignore the input and match the prior exactly, making the latent code uninformative",
      "D) The model parameters collapse to zero"
    ],
    optionsChinese: [
      "A) 解码器崩塌为输出单一图像",
      "B) 训练损失崩塌为零",
      "C) 编码器学会忽略输入并精确匹配先验，使隐编码无信息",
      "D) 模型参数崩塌为零"
    ],
    answer: 2,
    explanation: "Posterior collapse occurs when the KL term in the VAE loss dominates, causing q(z|x) to match p(z) for all inputs. The latent code z then carries no information about x, and the decoder learns to model data independently. Solutions include KL annealing (gradually increasing KL weight), free bits (minimum KL per dimension), and using more expressive decoders or priors.",
    explanationChinese: "后验崩塌发生在VAE损失中的KL项占主导地位时，导致q(z|x)对所有输入匹配p(z)。隐编码z不携带关于x的信息，解码器学会独立建模数据。解决方案包括KL退火（逐渐增加KL权重）、自由位（每维最小KL）和使用更有表达力的解码器或先验。",
    diagram: "",
    terms: ["autoencoder", "loss_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 219,
    q: "What is a neural style transfer?",
    qChinese: "什么是神经风格迁移？",
    options: [
      "A) Transferring a neural network from one framework to another",
      "B) Copying weights from one layer to another",
      "C) Transferring training data between models",
      "D) Applying the artistic style of one image to the content of another using CNN feature representations"
    ],
    optionsChinese: [
      "A) 将神经网络从一个框架转移到另一个",
      "B) 将权重从一层复制到另一层",
      "C) 在模型之间转移训练数据",
      "D) 使用CNN特征表示将一张图像的艺术风格应用到另一张图像的内容上"
    ],
    answer: 3,
    explanation: "Neural style transfer (Gatys et al., 2015) optimizes an image to match the content features of one image and the style features (Gram matrices of intermediate CNN features) of another. Content is captured by higher-layer activations; style by correlations between feature maps. Fast style transfer trains a feedforward network to perform the transfer in a single pass for real-time applications.",
    explanationChinese: "神经风格迁移（Gatys等人，2015）优化一张图像以匹配一张图像的内容特征和另一张图像的风格特征（中间CNN特征的Gram矩阵）。内容由高层激活捕获；风格由特征图之间的相关性捕获。快速风格迁移训练前馈网络在单次传递中执行迁移，用于实时应用。",
    diagram: "",
    terms: ["convolutional_neural_network", "transfer_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 220,
    q: "What is the score function in score-based generative models?",
    qChinese: "基于分数的生成模型中的分数函数是什么？",
    options: [
      "A) The gradient of the log probability density with respect to the data: the direction in which data probability increases fastest",
      "B) The model's accuracy score",
      "C) The discriminator's output score",
      "D) The training loss value"
    ],
    optionsChinese: [
      "A) 对数概率密度相对于数据的梯度：数据概率增加最快的方向",
      "B) 模型的准确性分数",
      "C) 判别器的输出分数",
      "D) 训练损失值"
    ],
    answer: 0,
    explanation: "The score function s(x) = grad_x log p(x) points in the direction of increasing data density. Score-based models (Song & Ermon, 2019) train a neural network to estimate this score at various noise levels. Generation uses Langevin dynamics or diffusion processes guided by the learned score to move from noise toward high-density regions. This framework unifies diffusion models and score matching.",
    explanationChinese: "分数函数s(x) = grad_x log p(x)指向数据密度增加的方向。基于分数的模型（Song & Ermon, 2019）训练神经网络在各种噪声水平估计此分数。生成使用由学习的分数引导的朗之万动力学或扩散过程从噪声移向高密度区域。这个框架统一了扩散模型和分数匹配。",
    diagram: "",
    terms: ["autoencoder", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 221,
    q: "What is transfer learning?",
    qChinese: "什么是迁移学习？",
    options: [
      "A) Transferring data between training and test sets",
      "B) Moving a model between different hardware platforms",
      "C) Using knowledge gained from training on one task to improve performance on a different but related task",
      "D) Transferring gradients between layers"
    ],
    optionsChinese: [
      "A) 在训练集和测试集之间传输数据",
      "B) 在不同硬件平台之间移动模型",
      "C) 使用从一个任务训练中获得的知识来提高不同但相关任务的性能",
      "D) 在层之间传输梯度"
    ],
    answer: 2,
    explanation: "Transfer learning leverages pre-trained model knowledge for new tasks. A model trained on a large dataset (ImageNet, WebText) learns general features that transfer to specific tasks with limited data. This dramatically reduces training time and data requirements. The two main approaches are feature extraction (freezing pre-trained layers) and fine-tuning (updating all or some layers).",
    explanationChinese: "迁移学习利用预训练模型知识用于新任务。在大数据集（ImageNet、WebText）上训练的模型学习到通用特征，可以迁移到数据有限的特定任务。这大大减少了训练时间和数据需求。两种主要方法是特征提取（冻结预训练层）和微调（更新全部或部分层）。",
    diagram: "",
    terms: ["transfer_learning", "fine_tuning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 222,
    q: "What is fine-tuning in deep learning?",
    qChinese: "深度学习中的微调是什么？",
    options: [
      "A) Adjusting hyperparameters like learning rate and batch size",
      "B) Continuing training of a pre-trained model on a new task-specific dataset, typically with a smaller learning rate",
      "C) Making small adjustments to the network architecture",
      "D) Tuning the input data preprocessing steps"
    ],
    optionsChinese: [
      "A) 调整学习率和批量大小等超参数",
      "B) 在新的任务特定数据集上继续训练预训练模型，通常使用较小的学习率",
      "C) 对网络架构进行小幅调整",
      "D) 调整输入数据预处理步骤"
    ],
    answer: 1,
    explanation: "Fine-tuning starts with a pre-trained model and continues training on task-specific data. A smaller learning rate (10-100x smaller than pre-training) is used to avoid destroying learned features. Common strategies include freezing early layers (which learn general features) and only fine-tuning later layers, or fine-tuning all layers with differential learning rates.",
    explanationChinese: "微调从预训练模型开始，在任务特定数据上继续训练。使用较小的学习率（比预训练小10-100倍）以避免破坏已学习的特征。常见策略包括冻结早期层（学习通用特征）仅微调后期层，或以差异化学习率微调所有层。",
    diagram: "",
    terms: ["fine_tuning", "transfer_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 223,
    q: "What is the difference between feature extraction and fine-tuning in transfer learning?",
    qChinese: "迁移学习中特征提取和微调有什么区别？",
    options: [
      "A) They are identical approaches",
      "B) Feature extraction is for images; fine-tuning is for text",
      "C) Feature extraction freezes pre-trained layers and only trains new layers; fine-tuning updates the pre-trained weights as well",
      "D) Feature extraction requires more data than fine-tuning"
    ],
    optionsChinese: [
      "A) 它们是相同的方法",
      "B) 特征提取用于图像；微调用于文本",
      "C) 特征提取冻结预训练层仅训练新层；微调也更新预训练权重",
      "D) 特征提取比微调需要更多数据"
    ],
    answer: 2,
    explanation: "Feature extraction uses the pre-trained model as a fixed feature extractor, freezing all pre-trained weights and training only new task-specific layers on top. Fine-tuning unfreezes some or all pre-trained layers and updates them with a small learning rate. Feature extraction is faster and suitable when the new dataset is very small; fine-tuning generally achieves better performance with enough data.",
    explanationChinese: "特征提取使用预训练模型作为固定特征提取器，冻结所有预训练权重，只训练上面的新任务特定层。微调解冻部分或全部预训练层，并以小学习率更新它们。特征提取更快，适合新数据集非常小的情况；微调在有足够数据时通常获得更好的性能。",
    diagram: "",
    terms: ["transfer_learning", "fine_tuning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 224,
    q: "What is domain adaptation?",
    qChinese: "什么是域适应？",
    options: [
      "A) Adapting the model to different hardware platforms",
      "B) Adapting the learning rate to different domains of the loss function",
      "C) Techniques to adapt a model trained on a source domain to perform well on a different target domain with different data distribution",
      "D) Training separate models for each domain"
    ],
    optionsChinese: [
      "A) 使模型适应不同的硬件平台",
      "B) 使学习率适应损失函数的不同域",
      "C) 使在源域上训练的模型适应在不同数据分布的目标域上表现良好的技术",
      "D) 为每个域训练单独的模型"
    ],
    answer: 2,
    explanation: "Domain adaptation addresses the distribution shift between source (training) and target (deployment) domains. For example, a model trained on synthetic images may perform poorly on real images. Techniques include adversarial domain adaptation (training a domain discriminator), distribution alignment (MMD, CORAL), and self-training with pseudo-labels on target domain data.",
    explanationChinese: "域适应解决源域（训练）和目标域（部署）之间的分布偏移。例如，在合成图像上训练的模型在真实图像上可能表现不佳。技术包括对抗域适应（训练域判别器）、分布对齐（MMD、CORAL）和使用目标域数据伪标签的自训练。",
    diagram: "",
    terms: ["transfer_learning", "fine_tuning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 225,
    q: "What is LoRA (Low-Rank Adaptation)?",
    qChinese: "什么是LoRA（低秩适应）？",
    options: [
      "A) A technique that reduces model size by removing low-rank components",
      "B) A learning rate adaptation technique",
      "C) A low-resolution training approach",
      "D) A parameter-efficient fine-tuning method that adds trainable low-rank decomposition matrices to frozen pre-trained weights"
    ],
    optionsChinese: [
      "A) 通过移除低秩组件来减小模型大小的技术",
      "B) 一种学习率适应技术",
      "C) 一种低分辨率训练方法",
      "D) 一种参数高效的微调方法，向冻结的预训练权重添加可训练的低秩分解矩阵"
    ],
    answer: 3,
    explanation: "LoRA freezes the pre-trained model and adds trainable low-rank matrices A and B such that the weight update is Delta_W = B*A where B is d x r and A is r x d with r << d. This reduces trainable parameters by 10,000x or more while achieving comparable performance to full fine-tuning. LoRA adapters can be merged into the original weights for zero inference overhead.",
    explanationChinese: "LoRA冻结预训练模型并添加可训练的低秩矩阵A和B，使得权重更新为Delta_W = B*A，其中B是d x r，A是r x d，r << d。这将可训练参数减少10,000倍或更多，同时实现与完全微调相当的性能。LoRA适配器可以合并到原始权重中，实现零推理开销。",
    diagram: "",
    terms: ["fine_tuning", "transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 226,
    q: "What is prompt tuning?",
    qChinese: "什么是提示调优？",
    options: [
      "A) Learning continuous prompt embeddings that are prepended to the input while keeping the model frozen",
      "B) Writing better text prompts manually",
      "C) Tuning the model's output format",
      "D) Adjusting the temperature parameter for generation"
    ],
    optionsChinese: [
      "A) 学习连续的提示嵌入并将其添加到输入前面，同时保持模型冻结",
      "B) 手动编写更好的文本提示",
      "C) 调整模型的输出格式",
      "D) 调整生成的温度参数"
    ],
    answer: 0,
    explanation: "Prompt tuning learns a small set of continuous embedding vectors (soft prompts) that are prepended to the input tokens. The entire pre-trained model is frozen, and only the prompt embeddings are optimized. This is extremely parameter-efficient (often just 0.01% of model parameters) and allows a single model to serve multiple tasks with different learned prompts.",
    explanationChinese: "提示调优学习一小组连续嵌入向量（软提示），将其添加到输入标记之前。整个预训练模型被冻结，只优化提示嵌入。这极其参数高效（通常只有模型参数的0.01%），允许单个模型使用不同的学习提示服务多个任务。",
    diagram: "",
    terms: ["fine_tuning", "transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 227,
    q: "What is few-shot learning?",
    qChinese: "什么是少样本学习？",
    options: [
      "A) Learning to perform tasks with only a few labeled examples per class",
      "B) Training with a very small learning rate",
      "C) Training for only a few epochs",
      "D) Using a few model architectures and selecting the best"
    ],
    optionsChinese: [
      "A) 用每个类别只有几个标记样本来学习执行任务",
      "B) 使用非常小的学习率训练",
      "C) 只训练几个epoch",
      "D) 使用几个模型架构并选择最佳的"
    ],
    answer: 0,
    explanation: "Few-shot learning enables models to learn new tasks from very few examples (typically 1-5 per class). Meta-learning approaches like MAML learn initializations that can quickly adapt. Prototypical networks classify by comparing to class prototypes. Large language models demonstrate in-context few-shot learning by conditioning on examples provided in the prompt without weight updates.",
    explanationChinese: "少样本学习使模型能从很少的示例（通常每类1-5个）中学习新任务。MAML等元学习方法学习可以快速适应的初始化。原型网络通过与类原型比较来分类。大语言模型通过在提示中条件化提供的示例来展示上下文内少样本学习，无需权重更新。",
    diagram: "",
    terms: ["transfer_learning", "fine_tuning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 228,
    q: "What is zero-shot learning?",
    qChinese: "什么是零样本学习？",
    options: [
      "A) Classifying or generating for classes never seen during training by leveraging learned semantic relationships",
      "B) Training a model with zero data",
      "C) Starting training from zero-initialized weights",
      "D) Training with zero regularization"
    ],
    optionsChinese: [
      "A) 通过利用学习的语义关系对训练期间从未见过的类别进行分类或生成",
      "B) 用零数据训练模型",
      "C) 从零初始化权重开始训练",
      "D) 用零正则化训练"
    ],
    answer: 0,
    explanation: "Zero-shot learning handles classes not seen during training by leveraging auxiliary information like text descriptions. CLIP aligns image and text embeddings, enabling classification of any class described in text. Large language models perform zero-shot task solving through instruction following. Zero-shot capability often emerges as a property of scale in large pre-trained models.",
    explanationChinese: "零样本学习通过利用文本描述等辅助信息处理训练期间未见过的类别。CLIP对齐图像和文本嵌入，实现对文本描述的任何类别的分类。大语言模型通过指令遵循执行零样本任务解决。零样本能力通常作为大型预训练模型的规模特性而涌现。",
    diagram: "",
    terms: ["transfer_learning", "transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 229,
    q: "What is CLIP (Contrastive Language-Image Pre-training)?",
    qChinese: "什么是CLIP（对比语言-图像预训练）？",
    options: [
      "A) A model that learns to align image and text representations in a shared embedding space through contrastive learning",
      "B) A model that clips gradient values",
      "C) A video clipping model",
      "D) A model that clips images to a specific size"
    ],
    optionsChinese: [
      "A) 通过对比学习在共享嵌入空间中对齐图像和文本表示的模型",
      "B) 裁剪梯度值的模型",
      "C) 视频裁剪模型",
      "D) 将图像裁剪到特定大小的模型"
    ],
    answer: 0,
    explanation: "CLIP trains an image encoder and text encoder jointly on 400M image-text pairs from the internet. Using contrastive loss, matching image-text pairs are pulled together while non-matching pairs are pushed apart in embedding space. CLIP enables zero-shot image classification by comparing image embeddings to text embeddings of class descriptions. It powers text-to-image models like DALL-E and Stable Diffusion.",
    explanationChinese: "CLIP在互联网上的4亿图像-文本对上联合训练图像编码器和文本编码器。使用对比损失，匹配的图像-文本对在嵌入空间中被拉近，不匹配的被推远。CLIP通过比较图像嵌入和类描述的文本嵌入实现零样本图像分类。它为DALL-E和Stable Diffusion等文本到图像模型提供支持。",
    diagram: "",
    terms: ["transfer_learning", "transformer", "loss_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 230,
    q: "What is the pre-training and fine-tuning paradigm?",
    qChinese: "什么是预训练和微调范式？",
    options: [
      "A) Training from scratch on the target task",
      "B) Pre-processing data before training",
      "C) Training two separate models in parallel",
      "D) First training on a large-scale general task (pre-training) then adapting to specific downstream tasks (fine-tuning)"
    ],
    optionsChinese: [
      "A) 从头开始在目标任务上训练",
      "B) 训练前预处理数据",
      "C) 并行训练两个独立模型",
      "D) 首先在大规模通用任务上训练（预训练），然后适应特定下游任务（微调）"
    ],
    answer: 3,
    explanation: "The pre-train then fine-tune paradigm involves two stages: (1) Pre-training on a large, general dataset using self-supervised objectives (masked language modeling, next token prediction, contrastive learning), and (2) Fine-tuning on task-specific labeled data. This is the foundation of modern NLP (BERT, GPT) and increasingly computer vision (ViT, CLIP). It is the most effective approach when task-specific data is limited.",
    explanationChinese: "预训练然后微调范式包含两个阶段：（1）在大型通用数据集上使用自监督目标（掩码语言建模、下一标记预测、对比学习）预训练，（2）在任务特定标记数据上微调。这是现代NLP（BERT、GPT）和越来越多计算机视觉（ViT、CLIP）的基础。当任务特定数据有限时，这是最有效的方法。",
    diagram: "",
    terms: ["transfer_learning", "fine_tuning", "transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 231,
    q: "What is adapter tuning?",
    qChinese: "什么是适配器调优？",
    options: [
      "A) Adapting the model to different hardware",
      "B) Inserting small trainable adapter modules between frozen pre-trained layers, only training these adapters",
      "C) Tuning the data format to adapt to the model",
      "D) Adapting the loss function for different tasks"
    ],
    optionsChinese: [
      "A) 使模型适应不同的硬件",
      "B) 在冻结的预训练层之间插入小的可训练适配器模块，仅训练这些适配器",
      "C) 调整数据格式以适应模型",
      "D) 为不同任务调整损失函数"
    ],
    answer: 1,
    explanation: "Adapter modules are small bottleneck layers (down-project, nonlinearity, up-project) inserted between existing Transformer layers. Only the adapter parameters are trained while the original model is frozen. This is parameter-efficient (typically 2-4% of original parameters) and allows serving multiple tasks from a single base model by swapping adapters. It preceded LoRA as a PEFT method.",
    explanationChinese: "适配器模块是插入现有Transformer层之间的小瓶颈层（降维投影、非线性、升维投影）。只训练适配器参数，原始模型冻结。这是参数高效的（通常为原始参数的2-4%），允许通过交换适配器从单个基础模型服务多个任务。它作为PEFT方法先于LoRA出现。",
    diagram: "",
    terms: ["fine_tuning", "transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 232,
    q: "What is self-supervised learning?",
    qChinese: "什么是自监督学习？",
    options: [
      "A) A model that supervises its own training process",
      "B) A model that generates its own training data",
      "C) Training without any loss function",
      "D) A learning paradigm that creates supervisory signals from the data itself, without human-provided labels"
    ],
    optionsChinese: [
      "A) 监督自身训练过程的模型",
      "B) 生成自己训练数据的模型",
      "C) 没有任何损失函数的训练",
      "D) 从数据本身创建监督信号的学习范式，不需要人工提供的标签"
    ],
    answer: 3,
    explanation: "Self-supervised learning creates pretext tasks from unlabeled data to learn useful representations. Examples include predicting masked words (BERT), next tokens (GPT), image rotations, or contrasting augmented views (SimCLR). The learned representations transfer well to downstream tasks. This paradigm has become dominant because it leverages vast amounts of unlabeled data available on the internet.",
    explanationChinese: "自监督学习从未标记数据中创建前置任务来学习有用表示。例子包括预测掩码词（BERT）、下一个标记（GPT）、图像旋转或对比增强视图（SimCLR）。学习的表示能很好地迁移到下游任务。这种范式已成为主导，因为它利用了互联网上大量可用的未标记数据。",
    diagram: "",
    terms: ["transfer_learning", "transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 233,
    q: "What is contrastive learning?",
    qChinese: "什么是对比学习？",
    options: [
      "A) Comparing the performance of two models",
      "B) Contrasting training and validation results",
      "C) A self-supervised method that learns representations by pulling similar (positive) pairs together and pushing dissimilar (negative) pairs apart in embedding space",
      "D) Training with contrasting learning rates"
    ],
    optionsChinese: [
      "A) 比较两个模型的性能",
      "B) 对比训练和验证结果",
      "C) 一种自监督方法，通过在嵌入空间中拉近相似（正）对和推远不相似（负）对来学习表示",
      "D) 使用对比学习率训练"
    ],
    answer: 2,
    explanation: "Contrastive learning creates positive pairs (different augmentations of the same image) and negative pairs (augmentations from different images). The model learns embeddings where positive pairs are close and negative pairs are far. SimCLR, MoCo, and BYOL are prominent methods. The InfoNCE loss is: -log(exp(sim(z_i, z_j)/tau) / sum(exp(sim(z_i, z_k)/tau))). This enables powerful visual representations without labels.",
    explanationChinese: "对比学习创建正对（同一图像的不同增强）和负对（不同图像的增强）。模型学习正对接近、负对远离的嵌入。SimCLR、MoCo和BYOL是著名方法。InfoNCE损失为：-log(exp(sim(z_i, z_j)/tau) / sum(exp(sim(z_i, z_k)/tau)))。这在无标签情况下实现了强大的视觉表示。",
    diagram: "",
    terms: ["transfer_learning", "loss_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 234,
    q: "What is the catastrophic forgetting problem in fine-tuning?",
    qChinese: "微调中的灾难性遗忘问题是什么？",
    options: [
      "A) The model losing previously learned knowledge when trained on a new task, degrading performance on old tasks",
      "B) The model forgetting to save checkpoints",
      "C) Forgetting to apply learning rate schedules",
      "D) The optimizer forgetting its momentum state"
    ],
    optionsChinese: [
      "A) 模型在新任务训练时丢失先前学习的知识，降低旧任务的性能",
      "B) 模型忘记保存检查点",
      "C) 忘记应用学习率调度",
      "D) 优化器忘记其动量状态"
    ],
    answer: 0,
    explanation: "Catastrophic forgetting occurs when fine-tuning on a new task overwrites the weights responsible for previous tasks. The model performs well on the new task but loses capability on old ones. Solutions include elastic weight consolidation (EWC, penalizing changes to important weights), progressive neural networks, experience replay, and parameter-efficient methods like LoRA that preserve original weights.",
    explanationChinese: "灾难性遗忘发生在新任务的微调覆盖了负责先前任务的权重时。模型在新任务上表现良好，但丧失了旧任务的能力。解决方案包括弹性权重合并（EWC，惩罚重要权重的变化）、渐进式神经网络、经验回放和LoRA等保留原始权重的参数高效方法。",
    diagram: "",
    terms: ["fine_tuning", "transfer_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 235,
    q: "What is instruction tuning for language models?",
    qChinese: "语言模型的指令调优是什么？",
    options: [
      "A) Fine-tuning a language model on a diverse set of tasks formatted as natural language instructions to improve instruction-following ability",
      "B) Writing instructions for how to use the model",
      "C) Tuning the model's instruction set architecture",
      "D) Teaching the model specific programming instructions"
    ],
    optionsChinese: [
      "A) 在格式化为自然语言指令的多样化任务集上微调语言模型以提高遵循指令的能力",
      "B) 编写如何使用模型的说明",
      "C) 调整模型的指令集架构",
      "D) 教模型特定的编程指令"
    ],
    answer: 0,
    explanation: "Instruction tuning fine-tunes pre-trained language models on datasets of (instruction, input, output) examples spanning many tasks. FLAN, InstructGPT, and Alpaca demonstrate that instruction tuning dramatically improves a model's ability to follow novel instructions and generalize to unseen tasks. Combined with RLHF (Reinforcement Learning from Human Feedback), it produces highly capable assistants like ChatGPT.",
    explanationChinese: "指令调优在跨越多个任务的（指令、输入、输出）示例数据集上微调预训练语言模型。FLAN、InstructGPT和Alpaca证明指令调优极大地提高了模型遵循新指令和泛化到未见任务的能力。结合RLHF（人类反馈强化学习），它产生了像ChatGPT这样高度能干的助手。",
    diagram: "",
    terms: ["fine_tuning", "transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 236,
    q: "What is multi-task learning?",
    qChinese: "什么是多任务学习？",
    options: [
      "A) Training a single model on multiple related tasks simultaneously, sharing representations to improve generalization",
      "B) Running multiple training jobs on a GPU cluster",
      "C) Switching between tasks during inference",
      "D) Using multiple loss functions for a single task"
    ],
    optionsChinese: [
      "A) 在多个相关任务上同时训练单个模型，共享表示以改善泛化",
      "B) 在GPU集群上运行多个训练任务",
      "C) 在推理期间在任务之间切换",
      "D) 对单个任务使用多个损失函数"
    ],
    answer: 0,
    explanation: "Multi-task learning trains one model on multiple tasks, sharing lower-level representations while having task-specific heads. Shared features act as a regularizer, improving generalization. Tasks provide complementary learning signals. T5 and GPT models demonstrate that diverse task training improves performance on individual tasks. The challenge is balancing task losses and preventing negative transfer between tasks.",
    explanationChinese: "多任务学习在多个任务上训练一个模型，共享低层表示同时有任务特定的头。共享特征作为正则化因素，改善泛化。任务提供互补的学习信号。T5和GPT模型证明多样化的任务训练改善了单个任务的性能。挑战是平衡任务损失和防止任务之间的负迁移。",
    diagram: "",
    terms: ["transfer_learning", "fine_tuning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 237,
    q: "What is quantization-aware fine-tuning?",
    qChinese: "什么是量化感知微调？",
    options: [
      "A) Fine-tuning with quantized training data",
      "B) Fine-tuning that simulates quantization during training so the model learns to maintain accuracy with lower-precision weights",
      "C) Quantifying the fine-tuning results",
      "D) Fine-tuning only the quantization parameters"
    ],
    optionsChinese: [
      "A) 使用量化训练数据进行微调",
      "B) 在训练期间模拟量化的微调，使模型学会在较低精度权重下保持准确性",
      "C) 量化微调结果",
      "D) 仅微调量化参数"
    ],
    answer: 1,
    explanation: "Quantization-aware training (QAT) simulates the effects of inference-time quantization (e.g., INT8 or INT4) during training. Fake quantization nodes are inserted in the forward pass, and the model learns to be robust to quantization noise. QAT typically maintains much closer accuracy to the original FP32 model compared to post-training quantization, especially at lower bit widths.",
    explanationChinese: "量化感知训练（QAT）在训练期间模拟推理时量化（如INT8或INT4）的效果。在前向传播中插入假量化节点，模型学会对量化噪声具有鲁棒性。与训练后量化相比，QAT通常保持与原始FP32模型更接近的精度，特别是在较低位宽下。",
    diagram: "",
    terms: ["fine_tuning", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 238,
    q: "What is prefix tuning?",
    qChinese: "什么是前缀调优？",
    options: [
      "A) Adding a text prefix to all inputs",
      "B) Adding a classification prefix to the output",
      "C) Tuning the first few layers of the model",
      "D) Prepending learnable continuous vectors to the key and value in every attention layer while keeping the model frozen"
    ],
    optionsChinese: [
      "A) 为所有输入添加文本前缀",
      "B) 在输出中添加分类前缀",
      "C) 调整模型的前几层",
      "D) 在保持模型冻结的同时，在每个注意力层的键和值前添加可学习的连续向量"
    ],
    answer: 3,
    explanation: "Prefix tuning prepends learned continuous prefix vectors to the keys and values of each attention layer. Unlike prompt tuning (which only modifies the input), prefix tuning affects the attention computation at every layer, giving it more expressive power. Only the prefix parameters are learned, making it parameter-efficient. It achieves competitive results with full fine-tuning on generation tasks.",
    explanationChinese: "前缀调优在每个注意力层的键和值前添加学习的连续前缀向量。与提示调优（仅修改输入）不同，前缀调优影响每一层的注意力计算，赋予其更强的表达能力。只学习前缀参数，使其参数高效。它在生成任务上达到了与完全微调竞争性的结果。",
    diagram: "",
    terms: ["fine_tuning", "transformer", "attention_mechanism"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 239,
    q: "What is the difference between pre-training on ImageNet versus from scratch?",
    qChinese: "在ImageNet上预训练与从头训练有什么区别？",
    options: [
      "A) ImageNet pre-training always produces worse results",
      "B) ImageNet pre-training provides a strong initialization with learned visual features, enabling faster convergence and better accuracy on downstream vision tasks with limited data",
      "C) There is no difference when enough data is available",
      "D) Pre-training on ImageNet only works for classification"
    ],
    optionsChinese: [
      "A) ImageNet预训练总是产生更差的结果",
      "B) ImageNet预训练提供了具有学习视觉特征的强初始化，使下游视觉任务在数据有限时更快收敛和更好精度",
      "C) 当有足够数据时没有区别",
      "D) ImageNet预训练仅适用于分类"
    ],
    answer: 1,
    explanation: "ImageNet pre-training teaches CNNs hierarchical visual features: edges, textures, shapes, and object parts. These features transfer well to most vision tasks (detection, segmentation, medical imaging). Models pre-trained on ImageNet converge 3-10x faster and often achieve significantly higher accuracy than training from scratch, especially with limited target data. This benefit decreases with very large target datasets.",
    explanationChinese: "ImageNet预训练教CNN层次化视觉特征：边缘、纹理、形状和物体部件。这些特征可以很好地迁移到大多数视觉任务（检测、分割、医学成像）。在ImageNet上预训练的模型收敛速度快3-10倍，通常比从头训练获得显著更高的精度，特别是在目标数据有限时。这种优势随着非常大的目标数据集而减少。",
    diagram: "",
    terms: ["transfer_learning", "convolutional_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 240,
    q: "What is RLHF (Reinforcement Learning from Human Feedback)?",
    qChinese: "什么是RLHF（人类反馈强化学习）？",
    options: [
      "A) Training reinforcement learning agents with human demonstrations",
      "B) Having humans manually correct model outputs",
      "C) A technique that fine-tunes language models using a reward model trained on human preference rankings to align outputs with human values",
      "D) Reinforcement learning applied to hardware optimization"
    ],
    optionsChinese: [
      "A) 使用人类演示训练强化学习代理",
      "B) 让人类手动纠正模型输出",
      "C) 使用基于人类偏好排名训练的奖励模型来微调语言模型以使输出与人类价值观一致的技术",
      "D) 应用于硬件优化的强化学习"
    ],
    answer: 2,
    explanation: "RLHF involves three steps: (1) supervised fine-tuning on demonstrations, (2) training a reward model on human preference comparisons between pairs of model outputs, and (3) using PPO (Proximal Policy Optimization) to optimize the language model against the reward model while staying close to the original model. This aligns models with human preferences and is key to ChatGPT's success.",
    explanationChinese: "RLHF包含三个步骤：（1）在演示上进行监督微调，（2）在人类对模型输出对的偏好比较上训练奖励模型，（3）使用PPO（近端策略优化）优化语言模型以满足奖励模型同时保持接近原始模型。这使模型与人类偏好一致，是ChatGPT成功的关键。",
    diagram: "",
    terms: ["fine_tuning", "transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 241,
    q: "What is the cross-entropy loss function?",
    qChinese: "什么是交叉熵损失函数？",
    options: [
      "A) The difference between two entropy values",
      "B) A loss function specific to regression tasks",
      "C) The entropy of the model's weights",
      "D) A loss that measures the divergence between predicted probability distribution and the true label distribution"
    ],
    optionsChinese: [
      "A) 两个熵值之间的差异",
      "B) 特定于回归任务的损失函数",
      "C) 模型权重的熵",
      "D) 衡量预测概率分布与真实标签分布之间差异的损失"
    ],
    answer: 3,
    explanation: "Cross-entropy loss H(p,q) = -sum(p_i * log(q_i)) measures how well predicted probabilities q match true labels p. For classification, it equals -log(q_c) where c is the correct class. Lower cross-entropy means better predictions. It pairs naturally with softmax output and is the standard loss for classification in deep learning because it provides strong gradients for incorrect predictions.",
    explanationChinese: "交叉熵损失H(p,q) = -sum(p_i * log(q_i))衡量预测概率q与真实标签p的匹配程度。对于分类，它等于-log(q_c)，其中c是正确类别。更低的交叉熵意味着更好的预测。它与softmax输出自然配对，是深度学习中分类的标准损失，因为它为不正确的预测提供强梯度。",
    diagram: "",
    terms: ["loss_function", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 242,
    q: "What is the Mean Squared Error (MSE) loss?",
    qChinese: "什么是均方误差（MSE）损失？",
    options: [
      "A) The average absolute difference between predictions and targets",
      "B) The maximum squared error across all examples",
      "C) The squared mean of the error distribution",
      "D) The average of squared differences between predicted and actual values: L = (1/n) * sum((y_pred - y_true)^2)"
    ],
    optionsChinese: [
      "A) 预测与目标之间的平均绝对差",
      "B) 所有样本中的最大平方误差",
      "C) 误差分布的平方平均值",
      "D) 预测值和实际值之间平方差的平均值：L = (1/n) * sum((y_pred - y_true)^2)"
    ],
    answer: 3,
    explanation: "MSE is the standard loss for regression tasks. It penalizes larger errors quadratically, making the model sensitive to outliers. The gradient is proportional to (y_pred - y_true), providing larger gradients for bigger errors. For probabilistic models, minimizing MSE is equivalent to maximum likelihood estimation under Gaussian noise assumptions. MAE (L1 loss) is more robust to outliers.",
    explanationChinese: "MSE是回归任务的标准损失。它对较大误差进行二次惩罚，使模型对异常值敏感。梯度与(y_pred - y_true)成比例，为更大误差提供更大梯度。对于概率模型，最小化MSE等价于高斯噪声假设下的最大似然估计。MAE（L1损失）对异常值更鲁棒。",
    diagram: "",
    terms: ["loss_function", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 243,
    q: "What is the binary cross-entropy loss?",
    qChinese: "什么是二元交叉熵损失？",
    options: [
      "A) The loss for binary classification: L = -[y*log(p) + (1-y)*log(1-p)] where y is the label and p is the predicted probability",
      "B) Cross-entropy applied to two classes simultaneously",
      "C) Half of the standard cross-entropy loss",
      "D) A loss that can only take binary values (0 or 1)"
    ],
    optionsChinese: [
      "A) 二分类的损失：L = -[y*log(p) + (1-y)*log(1-p)]，其中y是标签，p是预测概率",
      "B) 同时应用于两个类别的交叉熵",
      "C) 标准交叉熵损失的一半",
      "D) 只能取二进制值（0或1）的损失"
    ],
    answer: 0,
    explanation: "Binary cross-entropy (BCE) is used for binary classification or multi-label classification. For each output, it computes -[y*log(p) + (1-y)*log(1-p)]. When y=1, only -log(p) contributes; when y=0, only -log(1-p) contributes. It pairs with sigmoid activation. For multi-label problems, BCE is applied independently to each class, allowing multiple classes to be active simultaneously.",
    explanationChinese: "二元交叉熵（BCE）用于二分类或多标签分类。对于每个输出，它计算-[y*log(p) + (1-y)*log(1-p)]。当y=1时，只有-log(p)贡献；当y=0时，只有-log(1-p)贡献。它与sigmoid激活配对。对于多标签问题，BCE独立应用于每个类别，允许多个类别同时激活。",
    diagram: "",
    terms: ["loss_function", "activation_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 244,
    q: "What is focal loss?",
    qChinese: "什么是焦点损失？",
    options: [
      "A) A loss that focuses on the largest errors",
      "B) A loss that focuses on the most recent training examples",
      "C) A loss function for focal length estimation",
      "D) A modification of cross-entropy that down-weights easy examples and focuses training on hard misclassified examples"
    ],
    optionsChinese: [
      "A) 关注最大误差的损失",
      "B) 关注最近训练样本的损失",
      "C) 用于焦距估计的损失函数",
      "D) 交叉熵的修改，降低简单样本的权重并集中训练在困难的错误分类样本上"
    ],
    answer: 3,
    explanation: "Focal loss FL = -alpha * (1-p_t)^gamma * log(p_t) adds a modulating factor (1-p_t)^gamma to cross-entropy. When gamma > 0, well-classified examples (p_t close to 1) receive very small loss, while hard examples receive full loss. This addresses class imbalance in object detection where background examples vastly outnumber objects. RetinaNet introduced focal loss to achieve one-stage detector accuracy matching two-stage detectors.",
    explanationChinese: "焦点损失FL = -alpha * (1-p_t)^gamma * log(p_t)在交叉熵上添加了调制因子(1-p_t)^gamma。当gamma > 0时，分类良好的样本（p_t接近1）受到很小的损失，而困难样本受到完整损失。这解决了目标检测中背景样本远多于目标的类别不平衡问题。RetinaNet引入焦点损失使单阶段检测器精度匹配两阶段检测器。",
    diagram: "",
    terms: ["loss_function", "convolutional_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 245,
    q: "What is the triplet loss?",
    qChinese: "什么是三元组损失？",
    options: [
      "A) A loss computed over three training epochs",
      "B) A loss that learns embeddings by ensuring an anchor is closer to a positive example than to a negative example by a margin",
      "C) A loss function with three terms",
      "D) A loss for three-class classification"
    ],
    optionsChinese: [
      "A) 在三个训练epoch上计算的损失",
      "B) 通过确保锚点比负样本更接近正样本一个边距来学习嵌入的损失",
      "C) 具有三个项的损失函数",
      "D) 三类分类的损失"
    ],
    answer: 1,
    explanation: "Triplet loss L = max(d(a,p) - d(a,n) + margin, 0) takes an anchor (a), positive (p, same class), and negative (n, different class) example. It ensures that the anchor is closer to the positive than to the negative by at least a margin. This is used for face recognition (FaceNet), metric learning, and retrieval. Hard negative mining selects the most challenging negatives for effective training.",
    explanationChinese: "三元组损失L = max(d(a,p) - d(a,n) + margin, 0)取一个锚点(a)、正样本(p, 同类)和负样本(n, 不同类)。它确保锚点比负样本至少接近正样本一个边距。这用于人脸识别（FaceNet）、度量学习和检索。困难负样本挖掘选择最具挑战性的负样本以有效训练。",
    diagram: "",
    terms: ["loss_function", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 246,
    q: "What is the contrastive loss (InfoNCE)?",
    qChinese: "什么是对比损失（InfoNCE）？",
    options: [
      "A) A loss that contrasts model performance across epochs",
      "B) A loss that maximizes agreement between positive pairs while minimizing agreement with negative pairs using a softmax over similarities",
      "C) The difference between two loss functions",
      "D) A loss specific to GAN training"
    ],
    optionsChinese: [
      "A) 在各epoch之间对比模型性能的损失",
      "B) 使用相似性上的softmax最大化正对之间的一致性同时最小化与负对的一致性的损失",
      "C) 两个损失函数之间的差异",
      "D) 特定于GAN训练的损失"
    ],
    answer: 1,
    explanation: "InfoNCE loss L = -log(exp(sim(q, k+)/tau) / sum(exp(sim(q, k_i)/tau))) treats the positive pair similarity as the numerator and all pairs (positive + negatives) as the denominator. Temperature tau controls the sharpness. It is the foundation of contrastive learning methods (SimCLR, MoCo, CLIP). Larger numbers of negatives generally improve representation quality.",
    explanationChinese: "InfoNCE损失L = -log(exp(sim(q, k+)/tau) / sum(exp(sim(q, k_i)/tau)))将正对相似性作为分子，所有对（正+负）作为分母。温度tau控制锐度。它是对比学习方法（SimCLR、MoCo、CLIP）的基础。更多的负样本通常改善表示质量。",
    diagram: "",
    terms: ["loss_function", "transfer_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 247,
    q: "What is the Huber loss?",
    qChinese: "什么是Huber损失？",
    options: [
      "A) A loss function named after a specific dataset",
      "B) A loss that is quadratic for small errors and linear for large errors, combining the benefits of MSE and MAE",
      "C) A loss function for classification",
      "D) A loss that uses the Huber activation function"
    ],
    optionsChinese: [
      "A) 以特定数据集命名的损失函数",
      "B) 对小误差为二次、对大误差为线性的损失，结合MSE和MAE的优点",
      "C) 分类的损失函数",
      "D) 使用Huber激活函数的损失"
    ],
    answer: 1,
    explanation: "Huber loss is delta-parameterized: L = 0.5*x^2 for |x| <= delta, and delta*(|x| - 0.5*delta) for |x| > delta. It behaves like MSE for small errors (smooth gradients) and like MAE for large errors (robust to outliers). This makes it useful in regression tasks with noisy data. It is also commonly used in reinforcement learning (DQN) for stable value function approximation.",
    explanationChinese: "Huber损失由delta参数化：当|x| <= delta时L = 0.5*x^2，当|x| > delta时L = delta*(|x| - 0.5*delta)。它对小误差表现得像MSE（平滑梯度），对大误差表现得像MAE（对异常值鲁棒）。这使它在有噪声数据的回归任务中有用。它也常用于强化学习（DQN）中的稳定值函数近似。",
    diagram: "",
    terms: ["loss_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 248,
    q: "What is the dice loss used for in segmentation?",
    qChinese: "骰子损失在分割中用于什么？",
    options: [
      "A) Random loss selection like rolling dice",
      "B) A multi-class loss that randomly selects classes",
      "C) A loss function that uses dice-shaped convolutions",
      "D) A loss based on the Dice coefficient that measures overlap between predicted and ground truth segmentation masks"
    ],
    optionsChinese: [
      "A) 像掷骰子一样的随机损失选择",
      "B) 随机选择类别的多类损失",
      "C) 使用骰子形卷积的损失函数",
      "D) 基于Dice系数的损失，衡量预测和真实分割掩模之间的重叠"
    ],
    answer: 3,
    explanation: "Dice loss = 1 - (2 * |A intersection B| + smooth) / (|A| + |B| + smooth) measures the overlap between predicted and ground truth masks. It handles class imbalance well because it normalizes by the size of both regions. Dice loss is widely used in medical image segmentation where foreground objects may be very small relative to the background. It is often combined with cross-entropy loss.",
    explanationChinese: "Dice损失 = 1 - (2 * |A交B| + smooth) / (|A| + |B| + smooth)衡量预测和真实掩模之间的重叠。它很好地处理类别不平衡，因为它通过两个区域的大小进行归一化。Dice损失广泛用于医学图像分割，其中前景物体相对于背景可能非常小。它经常与交叉熵损失结合使用。",
    diagram: "",
    terms: ["loss_function", "convolutional_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 249,
    q: "What is the CTC (Connectionist Temporal Classification) loss?",
    qChinese: "什么是CTC（连接主义时序分类）损失？",
    options: [
      "A) A loss for temporal data classification",
      "B) A loss that enables training sequence-to-sequence models without requiring exact alignment between input and output",
      "C) A loss for CT scan classification",
      "D) A loss that connects multiple classifiers temporally"
    ],
    optionsChinese: [
      "A) 时序数据分类的损失",
      "B) 允许训练序列到序列模型而无需输入和输出之间精确对齐的损失",
      "C) CT扫描分类的损失",
      "D) 在时间上连接多个分类器的损失"
    ],
    answer: 1,
    explanation: "CTC loss handles sequence problems where the alignment between input and output is unknown. It introduces a blank token and marginalizes over all possible alignments using dynamic programming. CTC enables end-to-end training of speech recognition and handwriting recognition systems without requiring pre-segmented training data. It is used in models like DeepSpeech and OCR systems.",
    explanationChinese: "CTC损失处理输入和输出之间对齐未知的序列问题。它引入空白标记，并使用动态规划对所有可能的对齐进行边际化。CTC使语音识别和手写识别系统的端到端训练成为可能，无需预分段的训练数据。它用于DeepSpeech和OCR系统等模型中。",
    diagram: "",
    terms: ["loss_function", "recurrent_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 250,
    q: "What is the hinge loss?",
    qChinese: "什么是铰链损失？",
    options: [
      "A) A loss that creates a hinge in the decision boundary",
      "B) A loss used in SVMs and some neural networks: L = max(0, 1 - y * f(x)), penalizing predictions on the wrong side of the margin",
      "C) A loss that hinges on the batch size",
      "D) A loss function specific to hinge-shaped architectures"
    ],
    optionsChinese: [
      "A) 在决策边界中创建铰链的损失",
      "B) 在SVM和一些神经网络中使用的损失：L = max(0, 1 - y * f(x))，惩罚在间隔错误一侧的预测",
      "C) 取决于批量大小的损失",
      "D) 特定于铰链形架构的损失函数"
    ],
    answer: 1,
    explanation: "Hinge loss L = max(0, 1 - y*f(x)) where y is {-1, +1} penalizes predictions that are on the wrong side of the margin or within the margin. Once a prediction is correct and beyond the margin, the loss is zero and no gradient is produced. This is the loss used in SVMs and GANs (as an alternative to cross-entropy for the discriminator). It encourages confident, well-separated classifications.",
    explanationChinese: "铰链损失L = max(0, 1 - y*f(x))，其中y为{-1, +1}，惩罚在间隔错误一侧或间隔内的预测。一旦预测正确且超出间隔，损失为零且不产生梯度。这是SVM和GAN（作为判别器交叉熵的替代方案）中使用的损失。它鼓励自信、分离良好的分类。",
    diagram: "",
    terms: ["loss_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 251,
    q: "What is the perceptual loss?",
    qChinese: "什么是感知损失？",
    options: [
      "A) A loss based on human perception studies",
      "B) A loss that compares high-level CNN feature representations rather than pixel values, capturing perceptual similarity",
      "C) A loss specific to the perceptron model",
      "D) A loss that measures model interpretability"
    ],
    optionsChinese: [
      "A) 基于人类感知研究的损失",
      "B) 比较高级CNN特征表示而非像素值的损失，捕获感知相似性",
      "C) 特定于感知器模型的损失",
      "D) 衡量模型可解释性的损失"
    ],
    answer: 1,
    explanation: "Perceptual loss compares images in the feature space of a pre-trained CNN (typically VGG) rather than pixel space. L_perceptual = ||phi(y_pred) - phi(y_true)||^2 where phi extracts features from intermediate CNN layers. This captures structural and textural similarity better than MSE, which can produce blurry results. Perceptual loss is essential in super-resolution, style transfer, and image generation.",
    explanationChinese: "感知损失在预训练CNN（通常是VGG）的特征空间而非像素空间中比较图像。L_perceptual = ||phi(y_pred) - phi(y_true)||^2，其中phi从中间CNN层提取特征。这比MSE更好地捕获结构和纹理相似性，MSE可能产生模糊结果。感知损失在超分辨率、风格迁移和图像生成中至关重要。",
    diagram: "",
    terms: ["loss_function", "convolutional_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 252,
    q: "What is curriculum learning?",
    qChinese: "什么是课程学习？",
    options: [
      "A) Following a university curriculum to learn deep learning",
      "B) A method of learning that follows a fixed schedule",
      "C) Learning to design training curricula automatically",
      "D) A training strategy that presents examples in order of increasing difficulty, similar to how humans learn"
    ],
    optionsChinese: [
      "A) 按照大学课程学习深度学习",
      "B) 遵循固定时间表的学习方法",
      "C) 学习自动设计训练课程",
      "D) 按难度递增顺序呈现样本的训练策略，类似于人类学习方式"
    ],
    answer: 3,
    explanation: "Curriculum learning starts training with easy examples and gradually introduces harder ones. This can improve convergence speed and final performance. The difficulty can be defined by loss magnitude, data complexity, or sequence length. Anti-curriculum (hard examples first) can also be beneficial in some settings. Self-paced learning automatically determines example difficulty during training.",
    explanationChinese: "课程学习从简单样本开始训练，逐渐引入更难的样本。这可以改善收敛速度和最终性能。难度可以由损失大小、数据复杂性或序列长度定义。反课程（先难样本）在某些设置中也可能有益。自步学习在训练过程中自动确定样本难度。",
    diagram: "",
    terms: ["neural_network", "optimizer_sgd"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 253,
    q: "What is the KL divergence loss?",
    qChinese: "什么是KL散度损失？",
    options: [
      "A) A loss that measures the divergence in kernel sizes",
      "B) A loss that measures how one probability distribution diverges from a reference distribution: KL(P||Q) = sum(P(x) * log(P(x)/Q(x)))",
      "C) A loss for k-nearest neighbors learning",
      "D) A loss that diverges during training"
    ],
    optionsChinese: [
      "A) 衡量核大小差异的损失",
      "B) 衡量一个概率分布与参考分布之间差异的损失：KL(P||Q) = sum(P(x) * log(P(x)/Q(x)))",
      "C) k近邻学习的损失",
      "D) 训练过程中发散的损失"
    ],
    answer: 1,
    explanation: "KL divergence measures the information lost when approximating distribution P with distribution Q. It is always non-negative and equals zero only when P=Q. KL divergence is asymmetric: KL(P||Q) != KL(Q||P). It is used in VAE regularization, knowledge distillation, and policy optimization (KL constraint in PPO). Cross-entropy equals KL divergence plus the entropy of P.",
    explanationChinese: "KL散度衡量用分布Q近似分布P时丢失的信息。它始终非负，仅当P=Q时等于零。KL散度是不对称的：KL(P||Q) != KL(Q||P)。它用于VAE正则化、知识蒸馏和策略优化（PPO中的KL约束）。交叉熵等于KL散度加上P的熵。",
    diagram: "",
    terms: ["loss_function", "autoencoder"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 254,
    q: "What is multi-task loss balancing?",
    qChinese: "什么是多任务损失平衡？",
    options: [
      "A) Using the same loss for all tasks",
      "B) Equalizing the number of examples per task",
      "C) Balancing positive and negative samples",
      "D) Strategies to weight different task losses appropriately so no single task dominates training"
    ],
    optionsChinese: [
      "A) 对所有任务使用相同的损失",
      "B) 均衡每个任务的样本数量",
      "C) 平衡正负样本",
      "D) 适当加权不同任务损失的策略，使没有单一任务主导训练"
    ],
    answer: 3,
    explanation: "In multi-task learning, different tasks may have losses at different scales. Simple summing can cause one task to dominate. Strategies include uncertainty weighting (learning task weights based on homoscedastic uncertainty), GradNorm (normalizing gradient norms across tasks), and dynamic weight averaging. Proper balancing is crucial for all tasks to benefit from shared representations.",
    explanationChinese: "在多任务学习中，不同任务可能有不同尺度的损失。简单求和可能导致一个任务主导。策略包括不确定性加权（基于同方差不确定性学习任务权重）、GradNorm（跨任务归一化梯度范数）和动态权重平均。适当的平衡对所有任务受益于共享表示至关重要。",
    diagram: "",
    terms: ["loss_function", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 255,
    q: "What is the reconstruction loss in autoencoders?",
    qChinese: "自编码器中的重建损失是什么？",
    options: [
      "A) The cost of rebuilding the network architecture",
      "B) The loss from reconstructing the training schedule",
      "C) A loss measuring how well the decoder output matches the original input, typically MSE or binary cross-entropy",
      "D) The error in reconstructing the gradient"
    ],
    optionsChinese: [
      "A) 重建网络架构的成本",
      "B) 重建训练调度的损失",
      "C) 衡量解码器输出与原始输入匹配程度的损失，通常是MSE或二元交叉熵",
      "D) 重建梯度的误差"
    ],
    answer: 2,
    explanation: "Reconstruction loss measures fidelity between the autoencoder's output and original input. For continuous data, MSE L = ||x - decoder(encoder(x))||^2 is standard. For binary data, binary cross-entropy is used. In VAEs, reconstruction loss is balanced with the KL divergence term. Better reconstruction means the autoencoder preserves more information through the bottleneck.",
    explanationChinese: "重建损失衡量自编码器输出与原始输入之间的保真度。对于连续数据，MSE L = ||x - decoder(encoder(x))||^2是标准选择。对于二进制数据，使用二元交叉熵。在VAE中，重建损失与KL散度项平衡。更好的重建意味着自编码器通过瓶颈保留了更多信息。",
    diagram: "",
    terms: ["loss_function", "autoencoder"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 256,
    q: "What is the adversarial loss in GANs?",
    qChinese: "GAN中的对抗损失是什么？",
    options: [
      "A) A loss for defending against adversarial attacks",
      "B) A loss between two competing optimizers",
      "C) A loss that adversarially affects training stability",
      "D) The minimax game objective where the generator minimizes and the discriminator maximizes the probability of correct real/fake classification"
    ],
    optionsChinese: [
      "A) 防御对抗攻击的损失",
      "B) 两个竞争优化器之间的损失",
      "C) 对抗性地影响训练稳定性的损失",
      "D) 极小极大博弈目标，生成器最小化、判别器最大化正确真/假分类概率"
    ],
    answer: 3,
    explanation: "The standard GAN loss is: min_G max_D V(D,G) = E[log D(x)] + E[log(1-D(G(z)))]. The discriminator maximizes its ability to distinguish real from fake. The generator minimizes log(1-D(G(z))) or equivalently maximizes log(D(G(z))) (non-saturating variant). Alternative losses include Wasserstein, hinge, and least-squares, each addressing different training stability issues.",
    explanationChinese: "标准GAN损失为：min_G max_D V(D,G) = E[log D(x)] + E[log(1-D(G(z)))]。判别器最大化其区分真假的能力。生成器最小化log(1-D(G(z)))或等价地最大化log(D(G(z)))（非饱和变体）。替代损失包括Wasserstein、铰链和最小二乘，各自解决不同的训练稳定性问题。",
    diagram: "",
    terms: ["loss_function", "generative_adversarial_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 257,
    q: "What is the cosine similarity loss?",
    qChinese: "什么是余弦相似度损失？",
    options: [
      "A) A loss that measures the angular similarity between vectors, penalizing when representations that should be similar have different directions",
      "B) A loss that uses the cosine learning rate schedule",
      "C) A loss computed using the cosine activation function",
      "D) A loss specific to trigonometric data"
    ],
    optionsChinese: [
      "A) 衡量向量之间角度相似性的损失，当应该相似的表示方向不同时进行惩罚",
      "B) 使用余弦学习率调度的损失",
      "C) 使用余弦激活函数计算的损失",
      "D) 特定于三角函数数据的损失"
    ],
    answer: 0,
    explanation: "Cosine similarity loss measures the cosine of the angle between two vectors: sim(A,B) = A·B / (||A||*||B||). Values range from -1 (opposite) to 1 (same direction). The loss is typically 1 - sim(A,B) for positive pairs and max(0, sim(A,B) - margin) for negative pairs. It is magnitude-invariant, focusing on direction, making it useful for sentence embeddings and face verification.",
    explanationChinese: "余弦相似度损失衡量两个向量之间角度的余弦值：sim(A,B) = A·B / (||A||*||B||)。值范围从-1（相反）到1（同向）。损失通常是正对的1 - sim(A,B)和负对的max(0, sim(A,B) - margin)。它对幅度不变，聚焦于方向，使其适用于句子嵌入和人脸验证。",
    diagram: "",
    terms: ["loss_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 258,
    q: "What is the IoU (Intersection over Union) loss for object detection?",
    qChinese: "目标检测的IoU（交并比）损失是什么？",
    options: [
      "A) A loss that measures input/output ratio",
      "B) A loss that measures the union of all predictions",
      "C) A loss based on the overlap between predicted and ground truth bounding boxes: IoU = Area_intersection / Area_union",
      "D) A loss for measuring GPU input/output speed"
    ],
    optionsChinese: [
      "A) 衡量输入/输出比率的损失",
      "B) 衡量所有预测联合的损失",
      "C) 基于预测和真实边界框之间重叠的损失：IoU = 交集面积 / 并集面积",
      "D) 衡量GPU输入/输出速度的损失"
    ],
    answer: 2,
    explanation: "IoU loss = 1 - IoU directly optimizes the overlap between predicted and ground truth boxes. Unlike L1/L2 regression on box coordinates, IoU loss is scale-invariant and better correlates with detection quality. GIoU extends this by considering the enclosing box, DIoU adds center distance, and CIoU adds aspect ratio consideration, each improving bounding box regression accuracy.",
    explanationChinese: "IoU损失 = 1 - IoU直接优化预测和真实框之间的重叠。与框坐标的L1/L2回归不同，IoU损失是尺度不变的，与检测质量更好地相关。GIoU通过考虑包围框扩展，DIoU添加中心距离，CIoU添加宽高比考虑，各自改善边界框回归精度。",
    diagram: "",
    terms: ["loss_function", "convolutional_neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 259,
    q: "What is the purpose of auxiliary losses in deep networks?",
    qChinese: "深度网络中辅助损失的目的是什么？",
    options: [
      "A) Additional losses applied at intermediate layers to provide more direct gradient signals and improve training of deep networks",
      "B) To replace the main loss function",
      "C) Losses computed on auxiliary (validation) data",
      "D) Backup losses used when the main loss fails"
    ],
    optionsChinese: [
      "A) 在中间层应用的额外损失，提供更直接的梯度信号并改善深度网络的训练",
      "B) 替换主损失函数",
      "C) 在辅助（验证）数据上计算的损失",
      "D) 主损失失败时使用的备份损失"
    ],
    answer: 0,
    explanation: "Auxiliary losses are applied at intermediate layers of deep networks to inject gradient signals closer to the input, combating vanishing gradients. GoogLeNet used auxiliary classifiers at intermediate layers. In U-Net, deep supervision applies losses at multiple decoder levels. Auxiliary losses typically use a small weight (0.1-0.4) and are sometimes removed during inference to reduce computation.",
    explanationChinese: "辅助损失应用在深度网络的中间层，将梯度信号注入更接近输入的位置，对抗梯度消失。GoogLeNet在中间层使用辅助分类器。在U-Net中，深度监督在多个解码器级别应用损失。辅助损失通常使用小权重（0.1-0.4），有时在推理时移除以减少计算。",
    diagram: "",
    terms: ["loss_function", "vanishing_gradient"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 260,
    q: "What is the negative log-likelihood loss?",
    qChinese: "什么是负对数似然损失？",
    options: [
      "A) The logarithm of the negative predictions",
      "B) The negative of the cross-entropy",
      "C) A loss that only applies to negative examples",
      "D) The negative logarithm of the model's predicted probability for the correct class: NLL = -log(P(y_true))"
    ],
    optionsChinese: [
      "A) 负预测的对数",
      "B) 交叉熵的负值",
      "C) 仅适用于负样本的损失",
      "D) 模型对正确类别预测概率的负对数：NLL = -log(P(y_true))"
    ],
    answer: 3,
    explanation: "NLL loss = -log(p_c) where p_c is the predicted probability of the correct class. It is mathematically equivalent to cross-entropy when applied after softmax. In PyTorch, nn.NLLLoss expects log-probabilities (output of log_softmax), while nn.CrossEntropyLoss combines log_softmax and NLL internally. Maximizing log-likelihood is equivalent to minimizing NLL, connecting to maximum likelihood estimation.",
    explanationChinese: "NLL损失 = -log(p_c)，其中p_c是正确类别的预测概率。应用于softmax之后时，它在数学上等价于交叉熵。在PyTorch中，nn.NLLLoss期望对数概率（log_softmax的输出），而nn.CrossEntropyLoss在内部结合了log_softmax和NLL。最大化对数似然等价于最小化NLL，连接到最大似然估计。",
    diagram: "",
    terms: ["loss_function", "activation_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 261,
    q: "What is learning rate finder technique?",
    qChinese: "什么是学习率查找技术？",
    options: [
      "A) A method to find the optimal learning rate automatically after training",
      "B) Finding the learning rate by trial and error",
      "C) A technique that trains for one epoch with exponentially increasing learning rate and plots loss vs learning rate to find the best range",
      "D) Using grid search over all possible learning rates"
    ],
    optionsChinese: [
      "A) 训练后自动找到最优学习率的方法",
      "B) 通过试错法找到学习率",
      "C) 以指数增长的学习率训练一个epoch并绘制损失vs学习率以找到最佳范围的技术",
      "D) 对所有可能的学习率使用网格搜索"
    ],
    answer: 2,
    explanation: "The learning rate finder (Smith, 2017) starts training with a very small learning rate and exponentially increases it. Plotting loss vs learning rate shows a region where loss decreases rapidly before it diverges. The optimal learning rate is typically in the steepest descent region, usually one order of magnitude below where the loss starts increasing. This provides a principled starting point for training.",
    explanationChinese: "学习率查找器（Smith, 2017）从非常小的学习率开始训练并指数增长。绘制损失vs学习率显示损失在发散前快速下降的区域。最优学习率通常在最陡下降区域，通常比损失开始增加时低一个数量级。这提供了有原则的训练起点。",
    diagram: "",
    terms: ["optimizer_sgd", "loss_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 262,
    q: "What is the purpose of the warmup phase in Transformer training?",
    qChinese: "Transformer训练中预热阶段的目的是什么？",
    options: [
      "A) To warm up the GPU before training",
      "B) To initialize the model weights",
      "C) To gradually increase the learning rate to prevent large, destabilizing updates when the model is randomly initialized",
      "D) To preprocess the training data"
    ],
    optionsChinese: [
      "A) 在训练前预热GPU",
      "B) 初始化模型权重",
      "C) 逐渐增加学习率以防止模型随机初始化时的大而不稳定的更新",
      "D) 预处理训练数据"
    ],
    answer: 2,
    explanation: "Transformer training uses warmup because Adam's adaptive rates are poorly calibrated in early training when the variance estimates are noisy. Large updates to randomly initialized attention weights can cause instability. The original Transformer uses lr = d_model^(-0.5) * min(step^(-0.5), step * warmup_steps^(-1.5)), linearly increasing for warmup_steps then decreasing. Most LLM training uses linear warmup followed by cosine decay.",
    explanationChinese: "Transformer训练使用预热，因为在早期训练中当方差估计嘈杂时Adam的自适应学习率校准不佳。对随机初始化的注意力权重的大更新可能导致不稳定。原始Transformer使用lr = d_model^(-0.5) * min(step^(-0.5), step * warmup_steps^(-1.5))，在warmup_steps中线性增加然后递减。大多数LLM训练使用线性预热后接余弦衰减。",
    diagram: "",
    terms: ["transformer", "optimizer_adam"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 263,
    q: "What is gradient checkpointing?",
    qChinese: "什么是梯度检查点？",
    options: [
      "A) Saving model checkpoints during training",
      "B) Checking gradients for numerical errors",
      "C) A memory-saving technique that trades computation for memory by recomputing activations during the backward pass instead of storing them",
      "D) Setting checkpoints for gradient clipping"
    ],
    optionsChinese: [
      "A) 训练期间保存模型检查点",
      "B) 检查梯度的数值错误",
      "C) 通过在反向传播期间重新计算激活值而非存储它们来以计算换内存的节省内存技术",
      "D) 为梯度裁剪设置检查点"
    ],
    answer: 2,
    explanation: "Gradient checkpointing saves memory by not storing all intermediate activations during the forward pass. Instead, it stores activations at selected checkpoints and recomputes the others during backpropagation. This reduces memory from O(n) to O(sqrt(n)) for n layers, at the cost of one additional forward pass. This enables training larger models or using larger batch sizes on limited GPU memory.",
    explanationChinese: "梯度检查点通过在前向传播期间不存储所有中间激活值来节省内存。相反，它在选定的检查点存储激活值，并在反向传播期间重新计算其他的。这将内存从O(n)减少到O(sqrt(n))（n层），代价是一次额外的前向传播。这使得在有限GPU内存上训练更大的模型或使用更大的批量大小成为可能。",
    diagram: "",
    terms: ["backpropagation", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 264,
    q: "What is the effect of class imbalance on loss functions?",
    qChinese: "类别不平衡对损失函数有什么影响？",
    options: [
      "A) Class imbalance has no effect on loss functions",
      "B) Class imbalance always improves model performance",
      "C) The model may bias predictions toward the majority class because it contributes more to the total loss",
      "D) It only affects the learning rate"
    ],
    optionsChinese: [
      "A) 类别不平衡对损失函数没有影响",
      "B) 类别不平衡总是改善模型性能",
      "C) 模型可能偏向多数类的预测，因为它对总损失贡献更多",
      "D) 它只影响学习率"
    ],
    answer: 2,
    explanation: "With class imbalance, the loss is dominated by the majority class. A model can minimize loss by simply predicting the majority class. Solutions include class-weighted loss (giving higher weight to minority classes), oversampling minority classes, undersampling majority classes, SMOTE, focal loss, and two-stage training. The weight for class c is often set to 1/n_c or total_samples/(num_classes * n_c).",
    explanationChinese: "在类别不平衡情况下，损失被多数类主导。模型可以通过简单预测多数类来最小化损失。解决方案包括类加权损失（给少数类更高权重）、过采样少数类、欠采样多数类、SMOTE、焦点损失和两阶段训练。类c的权重通常设为1/n_c或total_samples/(num_classes * n_c)。",
    diagram: "",
    terms: ["loss_function", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 265,
    q: "What is the difference between hard and soft targets in training?",
    qChinese: "训练中硬目标和软目标有什么区别？",
    options: [
      "A) Hard targets are used for classification; soft targets for regression",
      "B) They produce identical training results",
      "C) Hard targets require more computation",
      "D) Hard targets are one-hot encoded labels; soft targets are probability distributions providing richer information about class relationships"
    ],
    optionsChinese: [
      "A) 硬目标用于分类；软目标用于回归",
      "B) 它们产生相同的训练结果",
      "C) 硬目标需要更多计算",
      "D) 硬目标是one-hot编码标签；软目标是提供关于类关系更丰富信息的概率分布"
    ],
    answer: 3,
    explanation: "Hard targets are binary labels (e.g., [0, 0, 1, 0] for class 3). Soft targets are probability distributions (e.g., [0.1, 0.2, 0.6, 0.1]) containing information about class similarities. In knowledge distillation, the teacher model's soft outputs carry dark knowledge about inter-class relationships that hard labels lack. Label smoothing creates soft targets from hard labels to prevent overconfident predictions.",
    explanationChinese: "硬目标是二进制标签（如类别3的[0, 0, 1, 0]）。软目标是概率分布（如[0.1, 0.2, 0.6, 0.1]），包含关于类相似性的信息。在知识蒸馏中，教师模型的软输出携带硬标签缺乏的关于类间关系的暗知识。标签平滑从硬标签创建软目标以防止过度自信的预测。",
    diagram: "",
    terms: ["loss_function", "transfer_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 266,
    q: "What is the key architectural innovation of the Vision Transformer (ViT)?",
    qChinese: "Vision Transformer (ViT) 的关键架构创新是什么？",
    options: [
      "A) It uses convolutional layers followed by a Transformer encoder",
      "B) It applies attention only to the final feature map of a CNN",
      "C) It splits an image into fixed-size patches, linearly embeds them, and processes the sequence with a standard Transformer encoder",
      "D) It replaces self-attention with depthwise separable convolutions"
    ],
    optionsChinese: [
      "A) 它使用卷积层后接Transformer编码器",
      "B) 它仅对CNN的最终特征图应用注意力",
      "C) 它将图像分割为固定大小的图像块，线性嵌入后用标准Transformer编码器处理该序列",
      "D) 它用深度可分离卷积替代自注意力"
    ],
    answer: 2,
    explanation: "ViT (Dosovitskiy et al., 2020) divides an image into non-overlapping patches (e.g., 16x16), flattens each patch into a vector, projects it linearly, and adds positional embeddings. This sequence of patch embeddings is then fed into a standard Transformer encoder. A [CLS] token is prepended and its output representation is used for classification. ViT demonstrates that pure Transformer architectures can match or exceed CNNs on image classification when pre-trained on large datasets.",
    explanationChinese: "ViT（Dosovitskiy等，2020）将图像分割为不重叠的图像块（如16x16），将每个块展平为向量，线性投影后添加位置嵌入。该图像块嵌入序列随后输入标准Transformer编码器。一个[CLS]标记被前置，其输出表示用于分类。ViT证明了纯Transformer架构在大型数据集上预训练时可以在图像分类上匹配或超越CNN。",
    diagram: "",
    terms: ["transformer", "attention_mechanism", "convolutional_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 267,
    q: "How does the Swin Transformer differ from the original Vision Transformer (ViT)?",
    qChinese: "Swin Transformer与原始Vision Transformer (ViT) 有什么区别？",
    options: [
      "A) Swin Transformer uses global self-attention on all patches at every layer",
      "B) Swin Transformer computes self-attention within local shifted windows and builds hierarchical feature maps",
      "C) Swin Transformer does not use positional embeddings",
      "D) Swin Transformer replaces multi-head attention with single-head attention"
    ],
    optionsChinese: [
      "A) Swin Transformer在每一层对所有图像块使用全局自注意力",
      "B) Swin Transformer在局部移位窗口内计算自注意力并构建分层特征图",
      "C) Swin Transformer不使用位置嵌入",
      "D) Swin Transformer用单头注意力替代多头注意力"
    ],
    answer: 1,
    explanation: "The Swin Transformer (Liu et al., 2021) introduces shifted window self-attention, where attention is computed within non-overlapping local windows, and the windows shift between consecutive layers to enable cross-window connections. It also uses patch merging to create hierarchical feature maps at multiple resolutions, making it suitable for dense prediction tasks like object detection and segmentation. This design reduces computational complexity from quadratic in image size to linear.",
    explanationChinese: "Swin Transformer（Liu等，2021）引入了移位窗口自注意力，在不重叠的局部窗口内计算注意力，且窗口在连续层之间移位以实现跨窗口连接。它还使用图像块合并来创建多分辨率的分层特征图，使其适用于目标检测和分割等密集预测任务。这种设计将计算复杂度从图像大小的二次方降低到线性。",
    diagram: "",
    terms: ["transformer", "attention_mechanism", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 268,
    q: "What is DeiT (Data-efficient Image Transformers) primarily known for?",
    qChinese: "DeiT（数据高效图像Transformer）主要以什么著称？",
    options: [
      "A) It was the first Transformer applied to images",
      "B) It introduced a novel convolutional attention mechanism",
      "C) It uses knowledge distillation with a CNN teacher and strong data augmentation to train ViT effectively on ImageNet alone without large-scale pre-training",
      "D) It eliminates the need for positional embeddings in vision tasks"
    ],
    optionsChinese: [
      "A) 它是第一个应用于图像的Transformer",
      "B) 它引入了一种新颖的卷积注意力机制",
      "C) 它使用CNN教师的知识蒸馏和强数据增强，仅在ImageNet上有效训练ViT而无需大规模预训练",
      "D) 它消除了视觉任务中对位置嵌入的需求"
    ],
    answer: 2,
    explanation: "DeiT (Touvron et al., 2021) showed that Vision Transformers can be trained competitively on ImageNet alone (without JFT-300M or other massive datasets) by using a distillation token, strong data augmentation (like RandAugment and Mixup), and regularization techniques. The distillation token learns from a CNN teacher model's output, enabling the Transformer to acquire inductive biases similar to those inherent in CNNs.",
    explanationChinese: "DeiT（Touvron等，2021）表明，通过使用蒸馏标记、强数据增强（如RandAugment和Mixup）以及正则化技术，Vision Transformer可以仅在ImageNet上（无需JFT-300M或其他大规模数据集）进行有竞争力的训练。蒸馏标记从CNN教师模型的输出中学习，使Transformer能够获得类似于CNN固有的归纳偏置。",
    diagram: "",
    terms: ["transformer", "transfer_learning", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 269,
    q: "Why does the original ViT require large-scale pre-training datasets to perform well?",
    qChinese: "为什么原始ViT需要大规模预训练数据集才能表现良好？",
    options: [
      "A) Because Transformers have more parameters than any CNN",
      "B) Because Transformers lack the inductive biases of CNNs (locality and translation equivariance), so they need more data to learn these properties",
      "C) Because ViT uses a much larger input resolution than CNNs",
      "D) Because the patch embedding layer is computationally expensive"
    ],
    optionsChinese: [
      "A) 因为Transformer比任何CNN都有更多参数",
      "B) 因为Transformer缺乏CNN的归纳偏置（局部性和平移等变性），所以需要更多数据来学习这些属性",
      "C) 因为ViT使用比CNN大得多的输入分辨率",
      "D) 因为图像块嵌入层计算开销大"
    ],
    answer: 1,
    explanation: "CNNs have strong built-in inductive biases: local connectivity restricts each neuron to a small receptive field, and weight sharing across spatial positions provides translation equivariance. Transformers treat patches as generic tokens without these assumptions, so they must learn spatial relationships entirely from data. With sufficient data (e.g., JFT-300M with 300 million images), ViT learns these structures and outperforms CNNs, but with limited data it underperforms.",
    explanationChinese: "CNN具有强大的内置归纳偏置：局部连接将每个神经元限制在小感受野内，空间位置的权重共享提供平移等变性。Transformer将图像块视为通用标记而不具有这些假设，因此必须完全从数据中学习空间关系。有了足够的数据（如拥有3亿张图像的JFT-300M），ViT能学习这些结构并超越CNN，但在数据有限时表现不佳。",
    diagram: "",
    terms: ["transformer", "convolutional_network", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 270,
    q: "In Vision Transformers, what role does the [CLS] token play?",
    qChinese: "在Vision Transformer中，[CLS]标记起什么作用？",
    options: [
      "A) It encodes the class label during training",
      "B) It is a learnable embedding prepended to the patch sequence whose final output serves as the global image representation for classification",
      "C) It is discarded after the first attention layer",
      "D) It controls the learning rate schedule"
    ],
    optionsChinese: [
      "A) 它在训练期间编码类别标签",
      "B) 它是一个可学习的嵌入，前置于图像块序列，其最终输出作为分类的全局图像表示",
      "C) 它在第一个注意力层后被丢弃",
      "D) 它控制学习率调度"
    ],
    answer: 1,
    explanation: "Borrowed from BERT, the [CLS] token is a special learnable embedding added at the beginning of the patch sequence. Through self-attention across all Transformer layers, it aggregates information from all patch tokens. The final hidden state of the [CLS] token is then passed to a classification head (MLP) to produce the class prediction. An alternative approach is global average pooling over all patch tokens.",
    explanationChinese: "借鉴BERT，[CLS]标记是一个特殊的可学习嵌入，添加在图像块序列的开头。通过所有Transformer层的自注意力，它从所有图像块标记中聚合信息。[CLS]标记的最终隐藏状态随后传递给分类头（MLP）以产生类别预测。另一种方法是对所有图像块标记进行全局平均池化。",
    diagram: "",
    terms: ["transformer", "attention_mechanism", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 271,
    q: "What is the forward diffusion process in denoising diffusion probabilistic models (DDPM)?",
    qChinese: "去噪扩散概率模型（DDPM）中的前向扩散过程是什么？",
    options: [
      "A) Applying a series of convolutional filters to sharpen an image",
      "B) Gradually denoising a random noise image to produce a clean image",
      "C) Encoding an image into a compact latent space",
      "D) Gradually adding Gaussian noise to data over a fixed number of timesteps until it becomes approximately pure noise"
    ],
    optionsChinese: [
      "A) 应用一系列卷积滤波器来锐化图像",
      "B) 逐步对随机噪声图像去噪以生成干净图像",
      "C) 将图像编码到紧凑的潜在空间",
      "D) 在固定数量的时间步上逐步向数据添加高斯噪声，直到它变成近似纯噪声"
    ],
    answer: 3,
    explanation: "In DDPM (Ho et al., 2020), the forward process q(x_t | x_{t-1}) adds small amounts of Gaussian noise at each timestep according to a variance schedule beta_t. After T steps (typically T=1000), the data distribution is transformed into approximately N(0, I). The key property is that x_t can be sampled directly from x_0 using the closed-form formula x_t = sqrt(alpha_bar_t) * x_0 + sqrt(1 - alpha_bar_t) * epsilon, where epsilon ~ N(0, I).",
    explanationChinese: "在DDPM（Ho等，2020）中，前向过程q(x_t | x_{t-1})根据方差调度beta_t在每个时间步添加少量高斯噪声。经过T步（通常T=1000）后，数据分布被转换为近似N(0, I)。关键性质是x_t可以使用封闭公式x_t = sqrt(alpha_bar_t) * x_0 + sqrt(1 - alpha_bar_t) * epsilon直接从x_0采样，其中epsilon ~ N(0, I)。",
    diagram: "",
    terms: ["generative_model", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 272,
    q: "In DDPM, what does the neural network learn to predict during training?",
    qChinese: "在DDPM中，神经网络在训练期间学习预测什么？",
    options: [
      "A) The original clean image x_0 directly",
      "B) The cumulative noise added up to timestep t",
      "C) The noise epsilon that was added to the clean image at a given timestep",
      "D) The variance schedule beta_t"
    ],
    optionsChinese: [
      "A) 直接预测原始干净图像x_0",
      "B) 到时间步t的累积噪声",
      "C) 在给定时间步添加到干净图像的噪声epsilon",
      "D) 方差调度beta_t"
    ],
    answer: 2,
    explanation: "DDPM trains a U-Net to predict the noise epsilon_theta(x_t, t) that was added to the original image. The training objective is the simplified loss L = E[||epsilon - epsilon_theta(x_t, t)||^2], which is a mean squared error between the true noise and the predicted noise. During sampling, the predicted noise is used to iteratively denoise from pure Gaussian noise back to a clean sample. This epsilon-prediction formulation was found to work better in practice than predicting x_0 directly.",
    explanationChinese: "DDPM训练一个U-Net来预测添加到原始图像的噪声epsilon_theta(x_t, t)。训练目标是简化损失L = E[||epsilon - epsilon_theta(x_t, t)||^2]，即真实噪声与预测噪声之间的均方误差。在采样期间，预测噪声用于从纯高斯噪声迭代去噪回干净样本。这种epsilon预测公式在实践中被发现比直接预测x_0效果更好。",
    diagram: "",
    terms: ["generative_model", "neural_network", "loss_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 273,
    q: "What is score matching in the context of diffusion models?",
    qChinese: "在扩散模型中，分数匹配是什么？",
    options: [
      "A) Training a model to estimate the gradient of the log data density (the score function) nabla_x log p(x)",
      "B) A technique for matching training and test data distributions",
      "C) A method for evaluating model performance using scoring metrics",
      "D) A method for computing attention scores in Transformers"
    ],
    optionsChinese: [
      "A) 训练模型估计数据对数密度的梯度（分数函数）nabla_x log p(x)",
      "B) 匹配训练和测试数据分布的技术",
      "C) 使用评分指标评估模型性能的方法",
      "D) 计算Transformer中注意力分数的方法"
    ],
    answer: 0,
    explanation: "Score matching (Hyvarinen, 2005) trains a model to estimate the score function, which is the gradient of the log probability density with respect to the input: s_theta(x) ≈ nabla_x log p(x). In score-based generative models (Song & Ermon, 2019), noise-conditioned score networks learn the score at multiple noise levels. Samples are then generated via Langevin dynamics using the learned score to iteratively move from noise toward high-density regions of the data distribution.",
    explanationChinese: "分数匹配（Hyvarinen，2005）训练模型估计分数函数，即对数概率密度相对于输入的梯度：s_theta(x) ≈ nabla_x log p(x)。在基于分数的生成模型（Song & Ermon，2019）中，噪声条件化的分数网络在多个噪声水平上学习分数。然后通过使用学习到的分数的朗之万动力学生成样本，从噪声迭代移动到数据分布的高密度区域。",
    diagram: "",
    terms: ["generative_model", "deep_learning", "optimization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 274,
    q: "What is the main advantage of latent diffusion models (LDMs) over pixel-space diffusion models?",
    qChinese: "潜在扩散模型（LDM）相比像素空间扩散模型的主要优势是什么？",
    options: [
      "A) They produce higher resolution images without any additional techniques",
      "B) They eliminate the need for a noise schedule",
      "C) They do not require any neural network to reverse the diffusion",
      "D) They perform the diffusion process in a lower-dimensional latent space learned by an autoencoder, greatly reducing computational cost"
    ],
    optionsChinese: [
      "A) 它们无需任何额外技术即可生成更高分辨率的图像",
      "B) 它们消除了对噪声调度的需求",
      "C) 它们不需要任何神经网络来逆转扩散",
      "D) 它们在自编码器学习的低维潜在空间中执行扩散过程，大大降低了计算成本"
    ],
    answer: 3,
    explanation: "Latent Diffusion Models (Rombach et al., 2022), used in Stable Diffusion, first train a VQ-VAE or KL-regularized autoencoder to compress images into a compact latent space (e.g., 64x64x4 instead of 512x512x3). The diffusion process then operates in this latent space, reducing computational and memory requirements by orders of magnitude. Cross-attention layers are added to the U-Net for conditioning on text or other modalities.",
    explanationChinese: "潜在扩散模型（Rombach等，2022），用于Stable Diffusion，首先训练一个VQ-VAE或KL正则化自编码器将图像压缩到紧凑的潜在空间（如64x64x4而非512x512x3）。然后扩散过程在该潜在空间中运行，将计算和内存需求降低数个数量级。交叉注意力层被添加到U-Net中用于文本或其他模态的条件生成。",
    diagram: "",
    terms: ["generative_model", "deep_learning", "attention_mechanism"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 275,
    q: "What is classifier-free guidance in diffusion models?",
    qChinese: "扩散模型中的无分类器引导是什么？",
    options: [
      "A) Using a pre-trained classifier to guide the sampling process",
      "B) Removing all conditioning signals during training",
      "C) A technique that trains a single model both conditionally and unconditionally, then interpolates between conditional and unconditional predictions during sampling to strengthen the conditioning signal",
      "D) Replacing the diffusion model's U-Net with a classifier network"
    ],
    optionsChinese: [
      "A) 使用预训练分类器来引导采样过程",
      "B) 在训练期间移除所有条件信号",
      "C) 一种在训练时同时进行有条件和无条件训练，然后在采样时在条件和无条件预测之间插值以增强条件信号的技术",
      "D) 用分类器网络替代扩散模型的U-Net"
    ],
    answer: 2,
    explanation: "Classifier-free guidance (Ho & Salimans, 2022) avoids needing a separate classifier by randomly dropping the conditioning (e.g., text prompt) during training with some probability (e.g., 10%). At inference, the model output is computed as: output = unconditional_output + w * (conditional_output - unconditional_output), where w > 1 is the guidance scale. Higher guidance scales produce samples more aligned with the conditioning but with reduced diversity.",
    explanationChinese: "无分类器引导（Ho & Salimans，2022）通过在训练期间以一定概率（如10%）随机丢弃条件（如文本提示）来避免需要单独的分类器。在推理时，模型输出计算为：output = unconditional_output + w * (conditional_output - unconditional_output)，其中w > 1是引导尺度。更高的引导尺度产生与条件更一致的样本，但多样性降低。",
    diagram: "",
    terms: ["generative_model", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 276,
    q: "What is Neural Architecture Search (NAS)?",
    qChinese: "什么是神经架构搜索（NAS）？",
    options: [
      "A) Manually designing neural network architectures based on expert knowledge",
      "B) A technique for pruning unnecessary neurons from an existing network",
      "C) A method that automatically searches for optimal neural network architectures by exploring a defined search space using a search strategy",
      "D) A hyperparameter tuning method limited to learning rate and batch size"
    ],
    optionsChinese: [
      "A) 基于专家知识手动设计神经网络架构",
      "B) 从现有网络中修剪不必要神经元的技术",
      "C) 一种通过使用搜索策略探索定义的搜索空间来自动搜索最优神经网络架构的方法",
      "D) 仅限于学习率和批量大小的超参数调优方法"
    ],
    answer: 2,
    explanation: "Neural Architecture Search automates the design of neural network architectures. It consists of three components: a search space (defining possible architectures), a search strategy (e.g., reinforcement learning, evolutionary algorithms, gradient-based methods), and a performance estimation strategy (evaluating candidate architectures). Early NAS methods like NASNet used RL controllers and required thousands of GPU days, motivating more efficient approaches like weight sharing and one-shot methods.",
    explanationChinese: "神经架构搜索自动化神经网络架构的设计。它由三个组件组成：搜索空间（定义可能的架构）、搜索策略（如强化学习、进化算法、基于梯度的方法）和性能估计策略（评估候选架构）。早期的NAS方法如NASNet使用RL控制器，需要数千GPU天，这推动了权重共享和一次性方法等更高效方法的发展。",
    diagram: "",
    terms: ["neural_network", "optimization", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 277,
    q: "How does DARTS (Differentiable Architecture Search) differ from traditional NAS methods?",
    qChinese: "DARTS（可微架构搜索）与传统NAS方法有何不同？",
    options: [
      "A) DARTS relaxes the discrete search space to be continuous, enabling gradient-based optimization of architectural choices jointly with network weights",
      "B) DARTS uses evolutionary algorithms to mutate architectures",
      "C) DARTS only searches over fully connected architectures",
      "D) DARTS uses reinforcement learning to train a controller network"
    ],
    optionsChinese: [
      "A) DARTS将离散搜索空间松弛为连续的，使得架构选择与网络权重可以通过基于梯度的优化联合优化",
      "B) DARTS使用进化算法来变异架构",
      "C) DARTS仅在全连接架构上搜索",
      "D) DARTS使用强化学习训练控制器网络"
    ],
    answer: 0,
    explanation: "DARTS (Liu et al., 2019) represents the architecture as a mixture of all candidate operations weighted by softmax of architecture parameters alpha. During search, both the architecture parameters and network weights are optimized via gradient descent using a bilevel optimization: weights are optimized on training data, and architecture parameters on validation data. After search, the operation with the highest alpha at each edge is selected to form the final discrete architecture. This reduces search cost from thousands of GPU days to a single GPU day.",
    explanationChinese: "DARTS（Liu等，2019）将架构表示为由架构参数alpha的softmax加权的所有候选操作的混合。搜索期间，架构参数和网络权重通过双层优化使用梯度下降优化：权重在训练数据上优化，架构参数在验证数据上优化。搜索后，每条边上具有最高alpha的操作被选择以形成最终的离散架构。这将搜索成本从数千GPU天降低到单个GPU天。",
    diagram: "",
    terms: ["neural_network", "optimization", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 278,
    q: "What is the search space in Neural Architecture Search?",
    qChinese: "神经架构搜索中的搜索空间是什么？",
    options: [
      "A) The set of all possible architectures that can be constructed, typically defined by candidate operations, connectivity patterns, and cell structures",
      "B) The GPU memory available for training",
      "C) The set of all possible hyperparameter values",
      "D) The range of possible learning rates"
    ],
    optionsChinese: [
      "A) 可以构建的所有可能架构的集合，通常由候选操作、连接模式和单元结构定义",
      "B) 可用于训练的GPU内存",
      "C) 所有可能的超参数值的集合",
      "D) 可能的学习率范围"
    ],
    answer: 0,
    explanation: "The NAS search space defines the set of neural architectures that can be represented and evaluated. A cell-based search space (used in NASNet and DARTS) defines a small computational cell that is then stacked to form the full network. The cell consists of nodes connected by edges, where each edge can be one of several candidate operations (e.g., 3x3 convolution, skip connection, pooling, zero). This dramatically reduces the search space compared to searching over the entire architecture.",
    explanationChinese: "NAS搜索空间定义了可以表示和评估的神经架构集合。基于单元的搜索空间（用于NASNet和DARTS）定义一个小的计算单元，然后堆叠以形成完整网络。单元由通过边连接的节点组成，每条边可以是几种候选操作之一（如3x3卷积、跳跃连接、池化、零操作）。与搜索整个架构相比，这大大减少了搜索空间。",
    diagram: "",
    terms: ["neural_network", "convolutional_network", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 279,
    q: "What is weight sharing in the context of efficient NAS?",
    qChinese: "在高效NAS的背景下，权重共享是什么？",
    options: [
      "A) Sharing weights between convolutional layers in a CNN",
      "B) Training a single supernet that contains all candidate architectures, where sub-architectures share weights to avoid training each from scratch",
      "C) Using the same weights for training and validation",
      "D) Transferring weights from a pre-trained model"
    ],
    optionsChinese: [
      "A) 在CNN中的卷积层之间共享权重",
      "B) 训练一个包含所有候选架构的超网络，其中子架构共享权重以避免从头训练每个架构",
      "C) 对训练和验证使用相同的权重",
      "D) 从预训练模型转移权重"
    ],
    answer: 1,
    explanation: "Weight sharing (one-shot NAS) trains a single overparameterized supernet that encompasses all architectures in the search space. Individual architectures are evaluated by inheriting weights from the supernet rather than being trained independently. This dramatically reduces computational cost since only one network needs to be trained. However, weight sharing can introduce ranking inconsistencies where the relative performance of sub-networks in the supernet does not match their standalone performance.",
    explanationChinese: "权重共享（一次性NAS）训练一个包含搜索空间中所有架构的过参数化超网络。通过从超网络继承权重而非独立训练来评估各个架构。这大大降低了计算成本，因为只需训练一个网络。然而，权重共享可能引入排名不一致，即子网络在超网络中的相对性能与其独立性能不匹配。",
    diagram: "",
    terms: ["neural_network", "optimization", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 280,
    q: "In knowledge distillation, what is the role of the temperature parameter T in the softmax function?",
    qChinese: "在知识蒸馏中，softmax函数中的温度参数T的作用是什么？",
    options: [
      "A) It determines the size of the student model",
      "B) It softens the probability distribution by dividing logits by T before softmax, revealing inter-class relationships in the teacher's predictions",
      "C) It controls the learning rate of the student model",
      "D) It sets the number of training epochs"
    ],
    optionsChinese: [
      "A) 它决定学生模型的大小",
      "B) 它通过在softmax之前将logits除以T来软化概率分布，揭示教师预测中的类间关系",
      "C) 它控制学生模型的学习率",
      "D) 它设置训练轮数"
    ],
    answer: 1,
    explanation: "In knowledge distillation (Hinton et al., 2015), the softmax with temperature is computed as p_i = exp(z_i/T) / sum(exp(z_j/T)). Higher temperature T produces softer probability distributions that reveal the teacher's learned similarities between classes (dark knowledge). For example, a cat image might produce soft probabilities like [0.05, 0.85, 0.08, 0.02] for [dog, cat, tiger, car], showing that cats are more similar to dogs and tigers than cars. The student is trained to match these soft distributions.",
    explanationChinese: "在知识蒸馏（Hinton等，2015）中，带温度的softmax计算为p_i = exp(z_i/T) / sum(exp(z_j/T))。更高的温度T产生更软的概率分布，揭示教师学习到的类间相似性（暗知识）。例如，一张猫的图片可能对[狗、猫、虎、车]产生软概率[0.05, 0.85, 0.08, 0.02]，显示猫与狗和虎比与车更相似。学生被训练来匹配这些软分布。",
    diagram: "",
    terms: ["neural_network", "transfer_learning", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 281,
    q: "What is the typical loss function used to train a student model in knowledge distillation?",
    qChinese: "在知识蒸馏中，训练学生模型通常使用什么损失函数？",
    options: [
      "A) Only the standard cross-entropy loss with hard labels",
      "B) Only the KL divergence between teacher and student soft outputs",
      "C) A weighted combination of cross-entropy loss with hard labels and KL divergence between soft outputs of teacher and student at temperature T",
      "D) Mean squared error between teacher and student hidden representations"
    ],
    optionsChinese: [
      "A) 仅使用硬标签的标准交叉熵损失",
      "B) 仅使用教师和学生软输出之间的KL散度",
      "C) 硬标签交叉熵损失与温度T下教师和学生软输出之间KL散度的加权组合",
      "D) 教师和学生隐藏表示之间的均方误差"
    ],
    answer: 2,
    explanation: "The standard knowledge distillation loss is L = alpha * L_CE(y, p_student) + (1-alpha) * T^2 * KL(p_teacher_T || p_student_T), where L_CE is the cross-entropy with ground truth labels, and KL measures the divergence between the teacher and student softened outputs at temperature T. The T^2 scaling factor compensates for the reduced gradient magnitudes when using higher temperatures. The hyperparameter alpha balances the two loss terms.",
    explanationChinese: "标准知识蒸馏损失为L = alpha * L_CE(y, p_student) + (1-alpha) * T^2 * KL(p_teacher_T || p_student_T)，其中L_CE是与真实标签的交叉熵，KL衡量温度T下教师和学生软化输出之间的散度。T^2缩放因子补偿使用较高温度时减小的梯度幅度。超参数alpha平衡两个损失项。",
    diagram: "",
    terms: ["loss_function", "transfer_learning", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 282,
    q: "What is network pruning as a model compression technique?",
    qChinese: "作为模型压缩技术的网络修剪是什么？",
    options: [
      "A) Removing redundant or less important weights, neurons, or filters from a trained network to reduce its size and computational cost while maintaining accuracy",
      "B) Adding more layers to a network to improve performance",
      "C) Replacing all activation functions with ReLU",
      "D) Training a smaller network from scratch on the same data"
    ],
    optionsChinese: [
      "A) 从训练好的网络中移除冗余或不重要的权重、神经元或滤波器，以减少其大小和计算成本同时保持精度",
      "B) 向网络添加更多层以提高性能",
      "C) 将所有激活函数替换为ReLU",
      "D) 在相同数据上从头训练更小的网络"
    ],
    answer: 0,
    explanation: "Network pruning removes parameters that contribute least to the model's output. Unstructured pruning zeroes out individual weights (achieving high sparsity but requiring sparse hardware for speedup), while structured pruning removes entire filters or channels (providing direct speedup on standard hardware). Common criteria include weight magnitude, gradient-based importance, and Taylor expansion approximations. The lottery ticket hypothesis suggests that sparse subnetworks exist within dense networks that can train to full accuracy from their original initialization.",
    explanationChinese: "网络修剪移除对模型输出贡献最小的参数。非结构化修剪将单个权重置零（实现高稀疏性但需要稀疏硬件加速），而结构化修剪移除整个滤波器或通道（在标准硬件上直接加速）。常见准则包括权重幅度、基于梯度的重要性和泰勒展开近似。彩票假说表明，密集网络中存在稀疏子网络，可以从其原始初始化训练到完全精度。",
    diagram: "",
    terms: ["neural_network", "optimization", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 283,
    q: "What is quantization in the context of model compression?",
    qChinese: "在模型压缩背景下，量化是什么？",
    options: [
      "A) Reducing the precision of model weights and activations from 32-bit floating point to lower bit-widths (e.g., INT8, INT4) to decrease model size and speed up inference",
      "B) Converting continuous input data into discrete categories",
      "C) Increasing the precision of model weights to 64-bit floating point",
      "D) Compressing training data to fit in memory"
    ],
    optionsChinese: [
      "A) 将模型权重和激活值的精度从32位浮点数降低到更低位宽（如INT8、INT4）以减小模型大小并加速推理",
      "B) 将连续输入数据转换为离散类别",
      "C) 将模型权重精度增加到64位浮点数",
      "D) 压缩训练数据以适合内存"
    ],
    answer: 0,
    explanation: "Quantization reduces the numerical precision of neural network parameters and computations. Post-training quantization (PTQ) quantizes a pre-trained model without retraining, while quantization-aware training (QAT) simulates quantization effects during training for better accuracy. INT8 quantization can reduce model size by 4x and accelerate inference significantly on hardware with INT8 support. More aggressive quantization (INT4, INT2) is used in large language models to enable deployment on consumer hardware.",
    explanationChinese: "量化降低神经网络参数和计算的数值精度。训练后量化（PTQ）在不重新训练的情况下量化预训练模型，而量化感知训练（QAT）在训练期间模拟量化效果以获得更好的精度。INT8量化可以将模型大小减少4倍，并在支持INT8的硬件上显著加速推理。更激进的量化（INT4、INT2）用于大语言模型以实现在消费者硬件上的部署。",
    diagram: "",
    terms: ["neural_network", "optimization", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 284,
    q: "What is the core idea behind contrastive learning in self-supervised learning?",
    qChinese: "自监督学习中对比学习的核心思想是什么？",
    options: [
      "A) Training a model to classify images into predefined categories",
      "B) Training a model to generate realistic images from noise",
      "C) Learning representations by pulling augmented views of the same image closer together while pushing different images apart in the embedding space",
      "D) Training a model to predict the next word in a sequence"
    ],
    optionsChinese: [
      "A) 训练模型将图像分类为预定义类别",
      "B) 训练模型从噪声生成逼真图像",
      "C) 通过在嵌入空间中拉近同一图像的增强视图同时推远不同图像来学习表示",
      "D) 训练模型预测序列中的下一个词"
    ],
    answer: 2,
    explanation: "Contrastive learning creates positive pairs by applying different random augmentations to the same image and negative pairs from different images. The InfoNCE loss encourages the model to produce similar representations for positive pairs and dissimilar representations for negative pairs. This allows the model to learn meaningful visual features without labeled data. The quality of learned representations depends heavily on the choice and composition of data augmentations.",
    explanationChinese: "对比学习通过对同一图像应用不同的随机增强来创建正样本对，从不同图像创建负样本对。InfoNCE损失鼓励模型为正样本对产生相似表示，为负样本对产生不相似表示。这使模型能够在没有标记数据的情况下学习有意义的视觉特征。学习表示的质量很大程度上取决于数据增强的选择和组合。",
    diagram: "",
    terms: ["deep_learning", "neural_network", "loss_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 285,
    q: "In SimCLR, what are the key components that make contrastive learning effective?",
    qChinese: "在SimCLR中，使对比学习有效的关键组件是什么？",
    options: [
      "A) A pretrained classifier head and a shallow network",
      "B) Strong data augmentations, a large batch size, a nonlinear projection head, and the NT-Xent loss",
      "C) A small batch size and a single data augmentation",
      "D) Knowledge distillation from a teacher model and curriculum learning"
    ],
    optionsChinese: [
      "A) 预训练分类头和浅层网络",
      "B) 强数据增强、大批量大小、非线性投影头和NT-Xent损失",
      "C) 小批量大小和单一数据增强",
      "D) 来自教师模型的知识蒸馏和课程学习"
    ],
    answer: 1,
    explanation: "SimCLR (Chen et al., 2020) identified four critical components: (1) composition of strong augmentations (random crop + color jitter is especially important), (2) large batch sizes (4096 or 8192) to provide many negative examples, (3) a nonlinear MLP projection head between the encoder and the contrastive loss (representations are taken from the encoder, not the projection head), and (4) the normalized temperature-scaled cross-entropy (NT-Xent) loss. Removing any of these significantly degrades performance.",
    explanationChinese: "SimCLR（Chen等，2020）确定了四个关键组件：（1）强增强的组合（随机裁剪+颜色抖动特别重要），（2）大批量大小（4096或8192）以提供大量负样本，（3）编码器和对比损失之间的非线性MLP投影头（表示取自编码器而非投影头），以及（4）归一化温度缩放交叉熵（NT-Xent）损失。移除任何一个都会显著降低性能。",
    diagram: "",
    terms: ["deep_learning", "neural_network", "loss_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 286,
    q: "How does BYOL (Bootstrap Your Own Latent) avoid representation collapse without using negative pairs?",
    qChinese: "BYOL（引导自己的潜在表示）如何在不使用负样本对的情况下避免表示坍缩？",
    options: [
      "A) By using an asymmetric architecture with a predictor network on the online branch and a momentum-updated target branch",
      "B) By using a very large batch size",
      "C) By adding explicit contrastive loss terms",
      "D) By using supervised labels during pre-training"
    ],
    optionsChinese: [
      "A) 通过使用在线分支上有预测器网络和动量更新目标分支的非对称架构",
      "B) 通过使用非常大的批量大小",
      "C) 通过添加显式对比损失项",
      "D) 通过在预训练期间使用监督标签"
    ],
    answer: 0,
    explanation: "BYOL (Grill et al., 2020) uses two networks: an online network (encoder + projector + predictor) and a target network (encoder + projector) updated via exponential moving average (EMA) of the online network's weights. The online network predicts the target network's representation of a different augmented view. The asymmetry created by the predictor MLP and the stop-gradient on the target branch prevents collapse. Without these, both branches could converge to outputting a constant vector.",
    explanationChinese: "BYOL（Grill等，2020）使用两个网络：在线网络（编码器+投影器+预测器）和通过在线网络权重的指数移动平均（EMA）更新的目标网络（编码器+投影器）。在线网络预测目标网络对不同增强视图的表示。预测器MLP和目标分支上的停止梯度创建的不对称性防止了坍缩。没有这些，两个分支可能会收敛到输出常数向量。",
    diagram: "",
    terms: ["deep_learning", "neural_network", "optimization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 287,
    q: "What is the purpose of the projection head in contrastive self-supervised learning methods like SimCLR?",
    qChinese: "在SimCLR等对比自监督学习方法中，投影头的目的是什么？",
    options: [
      "A) To increase the dimensionality of the representations for better performance",
      "B) To normalize the input images before encoding",
      "C) To replace the encoder during fine-tuning",
      "D) To map encoder representations to a lower-dimensional space where the contrastive loss is applied, while the encoder features retain more generalizable information for downstream tasks"
    ],
    optionsChinese: [
      "A) 增加表示的维度以获得更好的性能",
      "B) 在编码之前归一化输入图像",
      "C) 在微调期间替换编码器",
      "D) 将编码器表示映射到应用对比损失的低维空间，同时编码器特征保留更多可推广到下游任务的信息"
    ],
    answer: 3,
    explanation: "The projection head is a small MLP (typically 2-3 layers) that maps encoder representations to the space where the contrastive loss is computed. SimCLR showed that representations before the projection head (from the encoder) transfer much better to downstream tasks than those after it. The projection head absorbs information that is useful for the contrastive task (invariance to augmentations) but harmful for downstream tasks, acting as an information bottleneck that protects encoder representations.",
    explanationChinese: "投影头是一个小MLP（通常2-3层），将编码器表示映射到计算对比损失的空间。SimCLR表明，投影头之前（来自编码器）的表示比之后的表示更好地迁移到下游任务。投影头吸收对对比任务有用（对增强的不变性）但对下游任务有害的信息，充当保护编码器表示的信息瓶颈。",
    diagram: "",
    terms: ["deep_learning", "neural_network", "transfer_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 288,
    q: "What is the representation collapse problem in self-supervised learning?",
    qChinese: "自监督学习中的表示坍缩问题是什么？",
    options: [
      "A) When the model becomes too large to fit in memory",
      "B) When the model overfits to the training augmentations",
      "C) When the training loss diverges to infinity",
      "D) When the model maps all inputs to the same constant representation, making the learned features useless"
    ],
    optionsChinese: [
      "A) 当模型太大无法放入内存时",
      "B) 当模型过拟合训练增强时",
      "C) 当训练损失发散到无穷大时",
      "D) 当模型将所有输入映射到相同的常数表示，使学习到的特征无用时"
    ],
    answer: 3,
    explanation: "Representation collapse (also called mode collapse in this context) occurs when the network learns a trivial solution by mapping all inputs to the same point or a low-dimensional subspace in the embedding space. This minimizes similarity-based losses without learning meaningful features. Contrastive methods prevent collapse using negative pairs. Non-contrastive methods like BYOL use asymmetric architectures and stop-gradients, while methods like Barlow Twins and VICReg use regularization terms that encourage feature diversity and decorrelation.",
    explanationChinese: "表示坍缩（在此上下文中也称为模式坍缩）发生在网络通过将所有输入映射到嵌入空间中的同一点或低维子空间来学习平凡解时。这在不学习有意义特征的情况下最小化了基于相似性的损失。对比方法使用负样本对防止坍缩。非对比方法如BYOL使用非对称架构和停止梯度，而Barlow Twins和VICReg等方法使用鼓励特征多样性和去相关的正则化项。",
    diagram: "",
    terms: ["deep_learning", "neural_network", "optimization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 289,
    q: "What is the message passing framework in Graph Neural Networks (GNNs)?",
    qChinese: "图神经网络（GNN）中的消息传递框架是什么？",
    options: [
      "A) A communication protocol for distributed training across GPUs",
      "B) A framework where each node updates its representation by aggregating messages (features) from its neighboring nodes and combining them with its own features",
      "C) A technique for passing gradients through non-differentiable operations",
      "D) A data loading pipeline for graph-structured inputs"
    ],
    optionsChinese: [
      "A) 跨GPU分布式训练的通信协议",
      "B) 每个节点通过聚合来自邻居节点的消息（特征）并与自身特征结合来更新其表示的框架",
      "C) 通过不可微操作传递梯度的技术",
      "D) 图结构输入的数据加载管道"
    ],
    answer: 1,
    explanation: "Message passing is the fundamental operation in GNNs. In each layer, every node: (1) collects messages from its neighbors (MESSAGE step), (2) aggregates these messages using a permutation-invariant function like sum, mean, or max (AGGREGATE step), and (3) updates its own representation by combining the aggregated message with its current state (UPDATE step). Formally: m_v = AGGREGATE({h_u : u in N(v)}), h_v' = UPDATE(h_v, m_v). Stacking K message passing layers allows each node to incorporate information from its K-hop neighborhood.",
    explanationChinese: "消息传递是GNN中的基本操作。在每一层中，每个节点：（1）从邻居收集消息（MESSAGE步骤），（2）使用置换不变函数（如求和、均值或最大值）聚合这些消息（AGGREGATE步骤），（3）通过将聚合消息与当前状态结合来更新自身表示（UPDATE步骤）。形式化：m_v = AGGREGATE({h_u : u in N(v)}), h_v' = UPDATE(h_v, m_v)。堆叠K个消息传递层允许每个节点整合其K跳邻域的信息。",
    diagram: "",
    terms: ["neural_network", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 290,
    q: "How does Graph Convolutional Network (GCN) perform node feature updates?",
    qChinese: "图卷积网络（GCN）如何执行节点特征更新？",
    options: [
      "A) By using recurrent neural networks to process neighbor sequences",
      "B) By computing a weighted sum of neighboring node features using the normalized adjacency matrix, followed by a linear transformation and nonlinearity",
      "C) By applying standard 2D convolutions over the adjacency matrix",
      "D) By randomly sampling subsets of neighbors for each update"
    ],
    optionsChinese: [
      "A) 通过使用循环神经网络处理邻居序列",
      "B) 通过使用归一化邻接矩阵计算邻居节点特征的加权和，然后进行线性变换和非线性激活",
      "C) 通过在邻接矩阵上应用标准2D卷积",
      "D) 通过随机采样每次更新的邻居子集"
    ],
    answer: 1,
    explanation: "GCN (Kipf & Welling, 2017) uses the layer-wise propagation rule H^(l+1) = sigma(D_hat^(-1/2) * A_hat * D_hat^(-1/2) * H^(l) * W^(l)), where A_hat = A + I is the adjacency matrix with self-loops, D_hat is the degree matrix of A_hat, H^(l) is the node feature matrix at layer l, W^(l) is a learnable weight matrix, and sigma is a nonlinearity. The symmetric normalization D_hat^(-1/2) A_hat D_hat^(-1/2) prevents feature magnitudes from scaling with node degree.",
    explanationChinese: "GCN（Kipf & Welling，2017）使用逐层传播规则H^(l+1) = sigma(D_hat^(-1/2) * A_hat * D_hat^(-1/2) * H^(l) * W^(l))，其中A_hat = A + I是带自环的邻接矩阵，D_hat是A_hat的度矩阵，H^(l)是第l层的节点特征矩阵，W^(l)是可学习的权重矩阵，sigma是非线性函数。对称归一化D_hat^(-1/2) A_hat D_hat^(-1/2)防止特征幅度随节点度数缩放。",
    diagram: "",
    terms: ["neural_network", "convolutional_network", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 291,
    q: "What is the key innovation of Graph Attention Networks (GAT) compared to GCN?",
    qChinese: "图注意力网络（GAT）相比GCN的关键创新是什么？",
    options: [
      "A) GAT uses deeper networks with more layers",
      "B) GAT processes only directed graphs",
      "C) GAT learns to assign different attention weights to different neighbors, allowing the model to focus on the most relevant nodes during aggregation",
      "D) GAT replaces the adjacency matrix with a random matrix"
    ],
    optionsChinese: [
      "A) GAT使用更深的多层网络",
      "B) GAT仅处理有向图",
      "C) GAT学习为不同邻居分配不同的注意力权重，允许模型在聚合时关注最相关的节点",
      "D) GAT用随机矩阵替代邻接矩阵"
    ],
    answer: 2,
    explanation: "GAT (Velickovic et al., 2018) replaces GCN's fixed normalization (based on node degree) with learned attention coefficients. For each edge, an attention mechanism computes alpha_ij = softmax(LeakyReLU(a^T [W*h_i || W*h_j])), where || denotes concatenation and a is a learnable attention vector. Multi-head attention is used to stabilize training. This allows the model to adaptively weight neighbors based on their features rather than relying solely on graph structure.",
    explanationChinese: "GAT（Velickovic等，2018）用学习的注意力系数替代GCN的固定归一化（基于节点度数）。对于每条边，注意力机制计算alpha_ij = softmax(LeakyReLU(a^T [W*h_i || W*h_j]))，其中||表示拼接，a是可学习的注意力向量。使用多头注意力来稳定训练。这允许模型根据特征自适应地加权邻居，而不是仅依赖图结构。",
    diagram: "",
    terms: ["attention_mechanism", "neural_network", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 292,
    q: "What is the over-smoothing problem in deep Graph Neural Networks?",
    qChinese: "深层图神经网络中的过度平滑问题是什么？",
    options: [
      "A) The loss function becomes too smooth to provide useful gradients",
      "B) The training data becomes smoothed out by excessive augmentation",
      "C) As more GNN layers are stacked, node representations converge to similar values, losing their discriminative power because each node aggregates information from an exponentially growing neighborhood",
      "D) The model weights become uniform across all layers"
    ],
    optionsChinese: [
      "A) 损失函数变得太平滑无法提供有用的梯度",
      "B) 训练数据由于过度增强而被平滑",
      "C) 随着更多GNN层的堆叠，节点表示收敛到相似的值，失去判别力，因为每个节点从指数增长的邻域中聚合信息",
      "D) 模型权重在所有层中变得均匀"
    ],
    answer: 2,
    explanation: "Over-smoothing is a fundamental challenge in GNNs. With K layers of message passing, each node's representation reflects its K-hop neighborhood. As K grows, neighborhoods overlap significantly, and repeated aggregation causes all node features to converge to similar values (essentially the graph's stationary distribution). This limits most GNNs to 2-3 layers. Solutions include residual connections, jumping knowledge networks, DropEdge, and normalization techniques like PairNorm.",
    explanationChinese: "过度平滑是GNN中的基本挑战。经过K层消息传递，每个节点的表示反映其K跳邻域。随着K增长，邻域显著重叠，重复聚合导致所有节点特征收敛到相似的值（本质上是图的稳态分布）。这限制了大多数GNN只能使用2-3层。解决方案包括残差连接、跳跃知识网络、DropEdge和PairNorm等归一化技术。",
    diagram: "",
    terms: ["neural_network", "deep_learning", "optimization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 293,
    q: "What is the Mixture of Experts (MoE) architecture?",
    qChinese: "混合专家（MoE）架构是什么？",
    options: [
      "A) An ensemble of independently trained models that vote on predictions",
      "B) A model architecture that uses a gating network to route each input to a sparse subset of specialized expert sub-networks, enabling conditional computation",
      "C) A method for mixing different data augmentation strategies",
      "D) A technique for combining supervised and unsupervised learning"
    ],
    optionsChinese: [
      "A) 独立训练的模型的集成，通过投票进行预测",
      "B) 一种使用门控网络将每个输入路由到专门化专家子网络的稀疏子集的模型架构，实现条件计算",
      "C) 混合不同数据增强策略的方法",
      "D) 结合监督和无监督学习的技术"
    ],
    answer: 1,
    explanation: "Mixture of Experts (MoE) consists of multiple expert networks (typically FFN layers) and a gating network (router) that selects which experts process each input token. The gating network outputs sparse weights, activating only top-k experts (usually k=1 or k=2) per token. This enables scaling model capacity (total parameters) without proportionally increasing computational cost, since only a fraction of parameters are active for any given input. Modern MoE models like Mixtral and Switch Transformer apply this at each Transformer layer.",
    explanationChinese: "混合专家（MoE）由多个专家网络（通常是FFN层）和一个选择哪些专家处理每个输入标记的门控网络（路由器）组成。门控网络输出稀疏权重，每个标记仅激活top-k个专家（通常k=1或k=2）。这使得模型容量（总参数）可以扩展而不成比例地增加计算成本，因为任何给定输入只有一小部分参数是活跃的。现代MoE模型如Mixtral和Switch Transformer在每个Transformer层应用此方法。",
    diagram: "",
    terms: ["neural_network", "transformer", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 294,
    q: "What is the load balancing problem in Mixture of Experts, and how is it typically addressed?",
    qChinese: "混合专家中的负载均衡问题是什么，通常如何解决？",
    options: [
      "A) It is the problem of balancing the number of layers in each expert",
      "B) It is the problem of balancing training and validation loss",
      "C) It refers to distributing data across multiple GPUs evenly",
      "D) It is the tendency of the gating network to route most tokens to a few experts while others remain underutilized, addressed by adding an auxiliary load balancing loss"
    ],
    optionsChinese: [
      "A) 它是平衡每个专家层数的问题",
      "B) 它是平衡训练和验证损失的问题",
      "C) 它指的是将数据均匀分布到多个GPU上",
      "D) 它是门控网络倾向于将大多数标记路由到少数专家而其他专家未被充分利用的倾向，通过添加辅助负载均衡损失来解决"
    ],
    answer: 3,
    explanation: "Without load balancing, the gating network often converges to routing most tokens to a small number of experts (winner-take-all), leaving other experts undertrained. This wastes capacity and creates computational bottlenecks. The Switch Transformer uses an auxiliary loss L_balance = alpha * N * sum(f_i * P_i), where f_i is the fraction of tokens routed to expert i and P_i is the average routing probability for expert i. This loss encourages uniform routing across experts. Expert capacity factors and token dropping are also used to enforce balanced loads.",
    explanationChinese: "没有负载均衡，门控网络通常收敛为将大多数标记路由到少数专家（赢家通吃），使其他专家训练不足。这浪费了容量并造成计算瓶颈。Switch Transformer使用辅助损失L_balance = alpha * N * sum(f_i * P_i)，其中f_i是路由到专家i的标记比例，P_i是专家i的平均路由概率。这个损失鼓励跨专家的均匀路由。专家容量因子和标记丢弃也用于强制均衡负载。",
    diagram: "",
    terms: ["neural_network", "transformer", "optimization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 295,
    q: "What is the Switch Transformer's key simplification to the Mixture of Experts approach?",
    qChinese: "Switch Transformer对混合专家方法的关键简化是什么？",
    options: [
      "A) It uses all experts for every token",
      "B) It eliminates the gating network entirely",
      "C) It routes each token to only a single expert (top-1 routing) instead of combining outputs from multiple experts",
      "D) It replaces expert networks with attention layers"
    ],
    optionsChinese: [
      "A) 它对每个标记使用所有专家",
      "B) 它完全消除了门控网络",
      "C) 它将每个标记仅路由到单个专家（top-1路由），而不是组合多个专家的输出",
      "D) 它用注意力层替代专家网络"
    ],
    answer: 2,
    explanation: "The Switch Transformer (Fedus et al., 2022) simplifies MoE by routing each token to exactly one expert (top-1) rather than the traditional top-2 routing used in earlier MoE models. This halves the computation per token while still achieving excellent performance. The simplified routing reduces communication costs in distributed training and allows scaling to models with up to 1.6 trillion parameters. Despite each token using only one expert, the model benefits from having many experts because different tokens activate different experts.",
    explanationChinese: "Switch Transformer（Fedus等，2022）通过将每个标记路由到恰好一个专家（top-1）而非早期MoE模型使用的传统top-2路由来简化MoE。这将每个标记的计算量减半，同时仍然实现优秀性能。简化的路由降低了分布式训练中的通信成本，并允许扩展到多达1.6万亿参数的模型。尽管每个标记仅使用一个专家，模型仍受益于拥有多个专家，因为不同标记激活不同的专家。",
    diagram: "",
    terms: ["transformer", "neural_network", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 296,
    q: "How does the gating network (router) in MoE determine which experts to activate?",
    qChinese: "MoE中的门控网络（路由器）如何确定激活哪些专家？",
    options: [
      "A) Experts are activated in a fixed round-robin pattern",
      "B) All experts are always activated with equal weights",
      "C) Experts are randomly selected for each input",
      "D) The router computes a probability distribution over experts using a linear layer followed by softmax on the input token, then selects the top-k experts"
    ],
    optionsChinese: [
      "A) 专家按固定的轮询模式激活",
      "B) 所有专家始终以相等权重激活",
      "C) 对每个输入随机选择专家",
      "D) 路由器使用对输入标记的线性层后接softmax计算专家上的概率分布，然后选择top-k个专家"
    ],
    answer: 3,
    explanation: "The gating network is typically a simple linear layer g(x) = softmax(W_g * x) that maps each input token to a probability distribution over all experts. The top-k experts with the highest probabilities are selected, and the output is a weighted combination of those experts' outputs: y = sum(g_i(x) * E_i(x)) for the selected experts. The routing weights are differentiable through the softmax, allowing end-to-end training. More advanced routing strategies include noisy top-k gating which adds noise before the softmax to encourage exploration.",
    explanationChinese: "门控网络通常是一个简单的线性层g(x) = softmax(W_g * x)，将每个输入标记映射到所有专家上的概率分布。选择概率最高的top-k个专家，输出是这些专家输出的加权组合：y = sum(g_i(x) * E_i(x))。路由权重通过softmax可微，允许端到端训练。更高级的路由策略包括在softmax之前添加噪声的噪声top-k门控以鼓励探索。",
    diagram: "",
    terms: ["neural_network", "transformer", "deep_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 297,
    q: "What is curriculum learning in the context of deep learning?",
    qChinese: "在深度学习中，课程学习是什么？",
    options: [
      "A) A technique for designing course curricula for teaching deep learning",
      "B) A fixed schedule for changing the learning rate during training",
      "C) A method for selecting which layers of a network to train first",
      "D) A training strategy that presents examples to the model in a meaningful order, starting with easier examples and gradually introducing harder ones"
    ],
    optionsChinese: [
      "A) 设计深度学习教学课程的技术",
      "B) 训练期间改变学习率的固定调度",
      "C) 选择先训练网络哪些层的方法",
      "D) 一种以有意义的顺序向模型呈现样本的训练策略，从简单样本开始逐渐引入更难的样本"
    ],
    answer: 3,
    explanation: "Curriculum learning (Bengio et al., 2009) is inspired by human education, where students learn simple concepts before complex ones. The model is first trained on easy examples (e.g., short sentences, clear images) and progressively exposed to more difficult examples. Difficulty can be measured by loss values, data complexity metrics, or predefined criteria. Research shows this often leads to faster convergence and better generalization compared to random data shuffling, especially for noisy or imbalanced datasets.",
    explanationChinese: "课程学习（Bengio等，2009）受人类教育启发，学生先学习简单概念再学习复杂概念。模型首先在简单样本（如短句子、清晰图像）上训练，逐步暴露于更困难的样本。难度可以通过损失值、数据复杂度指标或预定义标准来衡量。研究表明，与随机数据洗牌相比，这通常能更快收敛并获得更好的泛化，特别是对于噪声或不平衡数据集。",
    diagram: "",
    terms: ["deep_learning", "optimization", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 298,
    q: "What is the core idea behind Model-Agnostic Meta-Learning (MAML)?",
    qChinese: "模型无关元学习（MAML）的核心思想是什么？",
    options: [
      "A) Training a very large model on all available tasks simultaneously",
      "B) Learning an initialization of model parameters such that a few gradient steps on a new task lead to good performance on that task",
      "C) Using a fixed feature extractor pre-trained on ImageNet",
      "D) Training separate models for each possible task"
    ],
    optionsChinese: [
      "A) 在所有可用任务上同时训练一个非常大的模型",
      "B) 学习模型参数的初始化，使得在新任务上几步梯度更新即可获得良好性能",
      "C) 使用在ImageNet上预训练的固定特征提取器",
      "D) 为每个可能的任务训练单独的模型"
    ],
    answer: 1,
    explanation: "MAML (Finn et al., 2017) finds an initialization theta such that for any new task T_i, a few gradient descent steps on T_i's support set (few labeled examples) produce adapted parameters theta_i' that perform well on T_i's query set. The meta-objective is: min_theta sum_i L(theta_i', D_query_i) where theta_i' = theta - alpha * grad L(theta, D_support_i). This requires computing gradients through gradients (second-order), though first-order approximations like FOMAML also work well in practice.",
    explanationChinese: "MAML（Finn等，2017）找到一个初始化theta，使得对于任何新任务T_i，在T_i的支持集（少量标记样本）上几步梯度下降产生的适应参数theta_i'在T_i的查询集上表现良好。元目标是：min_theta sum_i L(theta_i', D_query_i)其中theta_i' = theta - alpha * grad L(theta, D_support_i)。这需要计算梯度的梯度（二阶），尽管一阶近似如FOMAML在实践中也效果良好。",
    diagram: "",
    terms: ["deep_learning", "optimization", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 299,
    q: "What is the N-way K-shot setting in few-shot learning?",
    qChinese: "少样本学习中的N-way K-shot设置是什么？",
    options: [
      "A) A classification task where the model must classify among N classes with only K labeled examples per class",
      "B) Using N GPUs with K batch size",
      "C) A classification task with N augmentation strategies and K training iterations",
      "D) Training on N datasets with K epochs each"
    ],
    optionsChinese: [
      "A) 一种分类任务，模型必须在每个类别仅有K个标记样本的情况下在N个类别中分类",
      "B) 使用N个GPU和K个批量大小",
      "C) 使用N种增强策略和K次训练迭代的分类任务",
      "D) 在N个数据集上各训练K个epoch"
    ],
    answer: 0,
    explanation: "In N-way K-shot learning, each episode samples N classes and provides K labeled examples per class (the support set). The model must classify new unlabeled examples (the query set) into one of the N classes. Common benchmarks include 5-way 1-shot and 5-way 5-shot on datasets like miniImageNet and tieredImageNet. This formulation tests the model's ability to generalize from extremely limited labeled data, which is crucial for applications where data collection is expensive or rare classes exist.",
    explanationChinese: "在N-way K-shot学习中，每个片段采样N个类别并提供每个类别K个标记样本（支持集）。模型必须将新的未标记样本（查询集）分类为N个类别之一。常见基准包括在miniImageNet和tieredImageNet等数据集上的5-way 1-shot和5-way 5-shot。这种设置测试模型从极其有限的标记数据中泛化的能力，这对于数据收集昂贵或存在稀有类别的应用至关重要。",
    diagram: "",
    terms: ["deep_learning", "neural_network", "transfer_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 300,
    q: "What is the difference between meta-learning and transfer learning?",
    qChinese: "元学习和迁移学习有什么区别？",
    options: [
      "A) They are identical concepts with different names",
      "B) Transfer learning trains on multiple tasks simultaneously while meta-learning uses pre-training",
      "C) Meta-learning learns how to learn by training across many tasks to rapidly adapt to new tasks, while transfer learning trains on a source task and fine-tunes on a target task",
      "D) Transfer learning requires more data than meta-learning"
    ],
    optionsChinese: [
      "A) 它们是不同名称的相同概念",
      "B) 迁移学习在多个任务上同时训练而元学习使用预训练",
      "C) 元学习通过在许多任务上训练来学习如何学习以快速适应新任务，而迁移学习在源任务上训练并在目标任务上微调",
      "D) 迁移学习比元学习需要更多数据"
    ],
    answer: 2,
    explanation: "Transfer learning trains a model on a large source task (e.g., ImageNet classification) and then fine-tunes it on a target task, transferring learned features. Meta-learning (learning to learn) explicitly optimizes the learning process itself across a distribution of tasks, so the model can rapidly adapt to novel tasks with minimal data. While transfer learning focuses on reusing representations, meta-learning focuses on learning an efficient adaptation procedure. Methods like MAML, Prototypical Networks, and Matching Networks are meta-learning approaches designed for few-shot scenarios.",
    explanationChinese: "迁移学习在大型源任务（如ImageNet分类）上训练模型，然后在目标任务上微调，迁移学习到的特征。元学习（学习如何学习）在任务分布上显式优化学习过程本身，使模型能够用最少数据快速适应新任务。迁移学习侧重于重用表示，而元学习侧重于学习高效的适应过程。MAML、原型网络和匹配网络等方法是为少样本场景设计的元学习方法。",
    diagram: "",
    terms: ["deep_learning", "transfer_learning", "neural_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  }
];
