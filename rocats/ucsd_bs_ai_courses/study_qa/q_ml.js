const questionsML = [
  {
    id: 1,
    q: "In linear regression, the ordinary least squares (OLS) method minimizes which quantity?",
    qChinese: "在线性回归中，普通最小二乘法（OLS）最小化哪个量？",
    options: [
      "A) The sum of absolute differences between predicted and actual values",
      "B) The sum of squared differences between predicted and actual values",
      "C) The maximum difference between any predicted and actual value",
      "D) The cross-entropy between predicted and actual distributions"
    ],
    optionsChinese: [
      "A) 预测值和实际值之间绝对差的总和",
      "B) 预测值和实际值之间平方差的总和",
      "C) 任何预测值和实际值之间的最大差异",
      "D) 预测分布和实际分布之间的交叉熵"
    ],
    answer: 1,
    explanation: "OLS minimizes the sum of squared residuals (SSR), where each residual is the difference between the observed and predicted value. Squaring penalizes larger errors more heavily and yields a convex, differentiable objective with a closed-form solution via the normal equations: w = (X^T X)^{-1} X^T y.",
    explanationChinese: "OLS最小化残差平方和（SSR），其中每个残差是观测值与预测值之间的差异。平方对较大误差的惩罚更重，并产生一个凸的、可微的目标函数，通过正规方程有闭式解：w = (X^T X)^{-1} X^T y。",
    diagram: "",
    terms: ["linear_regression", "ordinary_least_squares", "normal_equations"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 2,
    q: "Logistic regression uses which function to map linear outputs to probabilities?",
    qChinese: "逻辑回归使用哪个函数将线性输出映射到概率？",
    options: [
      "A) ReLU function",
      "B) Sigmoid (logistic) function",
      "C) Softplus function",
      "D) Step function"
    ],
    optionsChinese: [
      "A) ReLU函数",
      "B) Sigmoid（逻辑）函数",
      "C) Softplus函数",
      "D) 阶跃函数"
    ],
    answer: 1,
    explanation: "The sigmoid function sigma(z) = 1/(1+e^{-z}) squashes any real-valued input to the range (0,1), making it interpretable as a probability. Logistic regression models P(y=1|x) = sigma(w^T x + b) and is trained by maximizing log-likelihood, equivalent to minimizing binary cross-entropy loss.",
    explanationChinese: "Sigmoid函数sigma(z) = 1/(1+e^{-z})将任何实数输入压缩到(0,1)范围内，使其可解释为概率。逻辑回归建模P(y=1|x) = sigma(w^T x + b)，通过最大化对数似然训练，等价于最小化二元交叉熵损失。",
    diagram: "",
    terms: ["logistic_regression", "sigmoid_function", "cross_entropy"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 3,
    q: "In Support Vector Machines (SVMs), the margin is defined as:",
    qChinese: "在支持向量机（SVM）中，间隔定义为：",
    options: [
      "A) The distance between the decision boundary and the nearest training points from each class",
      "B) The total number of support vectors",
      "C) The angle between the weight vector and the input features",
      "D) The ratio of correctly classified points to total points"
    ],
    optionsChinese: [
      "A) 决策边界与每个类别最近训练点之间的距离",
      "B) 支持向量的总数",
      "C) 权重向量与输入特征之间的角度",
      "D) 正确分类点与总点数的比率"
    ],
    answer: 0,
    explanation: "The SVM margin is the perpendicular distance from the decision hyperplane to the closest data points (support vectors) on either side. The SVM objective maximizes this margin, which equals 2/||w||. A larger margin provides better generalization. The kernel trick enables SVMs to handle non-linearly separable data.",
    explanationChinese: "SVM间隔是从决策超平面到两侧最近数据点（支持向量）的垂直距离。SVM目标是最大化该间隔，等于2/||w||。更大的间隔提供更好的泛化能力。核技巧使SVM能够处理非线性可分数据。",
    diagram: "",
    terms: ["support_vector_machine", "margin", "kernel_trick"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 4,
    q: "Which criterion does a standard CART decision tree use for classification splits?",
    qChinese: "标准CART决策树使用哪种准则进行分类分裂？",
    options: [
      "A) Mean squared error",
      "B) Gini impurity",
      "C) Mutual information",
      "D) Cosine similarity"
    ],
    optionsChinese: [
      "A) 均方误差",
      "B) 基尼不纯度",
      "C) 互信息",
      "D) 余弦相似度"
    ],
    answer: 1,
    explanation: "CART (Classification and Regression Trees) uses Gini impurity to evaluate classification splits. Gini impurity measures the probability of misclassifying a randomly chosen sample: G = 1 - sum(p_i^2). ID3 and C4.5 use information gain (entropy) instead. CART selects the split that maximally reduces impurity.",
    explanationChinese: "CART（分类与回归树）使用基尼不纯度来评估分类分裂。基尼不纯度衡量随机选择样本被错误分类的概率：G = 1 - sum(p_i^2)。ID3和C4.5使用信息增益（熵）。CART选择最大程度减少不纯度的分裂。",
    diagram: "",
    terms: ["decision_tree", "gini_impurity", "cart"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 5,
    q: "Random forests reduce overfitting compared to a single decision tree primarily through:",
    qChinese: "随机森林主要通过以下方式减少单棵决策树的过拟合：",
    options: [
      "A) Using deeper trees with more parameters",
      "B) Bagging (bootstrap aggregating) and random feature subsets at each split",
      "C) Applying L2 regularization to tree weights",
      "D) Limiting each tree to exactly two leaf nodes"
    ],
    optionsChinese: [
      "A) 使用更深、参数更多的树",
      "B) 装袋（自助聚合）和在每次分裂时随机选择特征子集",
      "C) 对树的权重应用L2正则化",
      "D) 将每棵树限制为恰好两个叶节点"
    ],
    answer: 1,
    explanation: "Random forests train many decision trees on bootstrap samples of the data and consider only a random subset of features at each split. Averaging predictions across decorrelated trees reduces variance without significantly increasing bias. This ensemble approach is highly effective and robust to hyperparameter choices.",
    explanationChinese: "随机森林在数据的自助采样上训练多棵决策树，并在每次分裂时仅考虑特征的随机子集。对去相关的树进行预测平均可以减少方差而不显著增加偏差。这种集成方法非常有效且对超参数选择具有鲁棒性。",
    diagram: "",
    terms: ["random_forest", "bagging", "ensemble_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 6,
    q: "The bias-variance tradeoff states that as model complexity increases:",
    qChinese: "偏差-方差权衡表明，随着模型复杂度的增加：",
    options: [
      "A) Both bias and variance increase",
      "B) Bias decreases while variance increases",
      "C) Both bias and variance decrease",
      "D) Bias increases while variance decreases"
    ],
    optionsChinese: [
      "A) 偏差和方差都增加",
      "B) 偏差减少而方差增加",
      "C) 偏差和方差都减少",
      "D) 偏差增加而方差减少"
    ],
    answer: 1,
    explanation: "More complex models can fit training data better, reducing bias (underfitting), but become more sensitive to specific training samples, increasing variance (overfitting). The total error is bias^2 + variance + irreducible noise. The sweet spot minimizes total error, often found via cross-validation.",
    explanationChinese: "更复杂的模型能更好地拟合训练数据，减少偏差（欠拟合），但对特定训练样本更敏感，增加方差（过拟合）。总误差为偏差^2 + 方差 + 不可约噪声。最佳点在于最小化总误差，通常通过交叉验证找到。",
    diagram: "",
    terms: ["bias_variance_tradeoff", "underfitting", "overfitting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 7,
    q: "L2 regularization (ridge regression) adds which penalty term to the loss function?",
    qChinese: "L2正则化（岭回归）向损失函数添加哪种惩罚项？",
    options: [
      "A) The sum of absolute values of the weights",
      "B) The sum of squared values of the weights",
      "C) The maximum weight value",
      "D) The product of all weight values"
    ],
    optionsChinese: [
      "A) 权重绝对值的总和",
      "B) 权重平方值的总和",
      "C) 最大权重值",
      "D) 所有权重值的乘积"
    ],
    answer: 1,
    explanation: "L2 regularization adds lambda * sum(w_i^2) to the loss, penalizing large weights and encouraging small, distributed weight values. This shrinks coefficients toward zero but does not set them exactly to zero (unlike L1/lasso). It acts as a Gaussian prior on weights in the Bayesian interpretation.",
    explanationChinese: "L2正则化将lambda * sum(w_i^2)添加到损失中，惩罚大权重并鼓励小而分散的权重值。这使系数趋向零但不会精确设为零（与L1/Lasso不同）。在贝叶斯解释中，它相当于对权重的高斯先验。",
    diagram: "",
    terms: ["l2_regularization", "ridge_regression", "weight_decay"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 8,
    q: "In gradient descent, the learning rate determines:",
    qChinese: "在梯度下降中，学习率决定了：",
    options: [
      "A) The direction of the parameter update",
      "B) The size of each step taken toward the loss minimum",
      "C) The number of training epochs",
      "D) The batch size used for training"
    ],
    optionsChinese: [
      "A) 参数更新的方向",
      "B) 朝损失最小值方向每步的大小",
      "C) 训练轮次的数量",
      "D) 用于训练的批量大小"
    ],
    answer: 1,
    explanation: "The learning rate alpha scales the gradient to determine step size: w = w - alpha * dL/dw. Too large a rate causes divergence or oscillation; too small causes slow convergence. Adaptive methods like Adam adjust the rate per parameter. Learning rate schedules can decay the rate over training.",
    explanationChinese: "学习率alpha缩放梯度以确定步长：w = w - alpha * dL/dw。学习率过大会导致发散或振荡；过小会导致收敛缓慢。Adam等自适应方法为每个参数调整学习率。学习率调度可以在训练过程中衰减学习率。",
    diagram: "",
    terms: ["gradient_descent", "learning_rate", "adam_optimizer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 9,
    q: "Stochastic gradient descent (SGD) differs from batch gradient descent in that SGD:",
    qChinese: "随机梯度下降（SGD）与批量梯度下降的不同之处在于SGD：",
    options: [
      "A) Always converges to the global minimum",
      "B) Computes the gradient using one sample (or a mini-batch) instead of the entire dataset",
      "C) Does not use a learning rate",
      "D) Requires second-order derivatives"
    ],
    optionsChinese: [
      "A) 总是收敛到全局最小值",
      "B) 使用一个样本（或小批量）而不是整个数据集来计算梯度",
      "C) 不使用学习率",
      "D) 需要二阶导数"
    ],
    answer: 1,
    explanation: "SGD approximates the true gradient using one or a few samples per update, introducing noise that can help escape local minima. Mini-batch SGD balances the efficiency of batch methods with SGD's stochasticity. It is far more scalable than batch gradient descent for large datasets.",
    explanationChinese: "SGD使用每次更新一个或几个样本来近似真实梯度，引入的噪声可以帮助逃离局部最小值。小批量SGD在批量方法的效率和SGD的随机性之间取得平衡。对于大数据集，它比批量梯度下降更具可扩展性。",
    diagram: "",
    terms: ["stochastic_gradient_descent", "mini_batch", "gradient_estimation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 10,
    q: "In a feedforward neural network, backpropagation computes:",
    qChinese: "在前馈神经网络中，反向传播计算：",
    options: [
      "A) The optimal network architecture",
      "B) The gradient of the loss with respect to each weight using the chain rule",
      "C) The number of hidden layers needed",
      "D) The activation function for each neuron"
    ],
    optionsChinese: [
      "A) 最优网络架构",
      "B) 使用链式法则计算损失对每个权重的梯度",
      "C) 所需的隐藏层数量",
      "D) 每个神经元的激活函数"
    ],
    answer: 1,
    explanation: "Backpropagation efficiently computes gradients of the loss with respect to all weights by applying the chain rule from the output layer backward through the network. It reuses intermediate computations (cached activations from the forward pass) to avoid redundant calculations, enabling gradient-based optimization of deep networks.",
    explanationChinese: "反向传播通过从输出层向后应用链式法则，高效地计算损失对所有权重的梯度。它重用中间计算结果（前向传播中缓存的激活值）以避免冗余计算，从而实现深度网络的基于梯度的优化。",
    diagram: "",
    terms: ["backpropagation", "chain_rule", "gradient_computation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 11,
    q: "The vanishing gradient problem in deep neural networks primarily affects:",
    qChinese: "深度神经网络中的梯度消失问题主要影响：",
    options: [
      "A) The output layer weights only",
      "B) Early layers that receive exponentially diminished gradient signals",
      "C) The bias terms but not the weight matrices",
      "D) Networks with fewer than three layers"
    ],
    optionsChinese: [
      "A) 仅输出层权重",
      "B) 接收到指数级减弱梯度信号的早期层",
      "C) 偏置项而非权重矩阵",
      "D) 少于三层的网络"
    ],
    answer: 1,
    explanation: "When gradients are multiplied through many layers via chain rule, they can shrink exponentially if activation derivatives are small (e.g., sigmoid saturates near 0 or 1). This starves early layers of learning signal. Solutions include ReLU activations, residual connections, batch normalization, and careful initialization.",
    explanationChinese: "当梯度通过链式法则在多层中相乘时，如果激活函数的导数很小（如sigmoid在接近0或1时饱和），梯度会指数级缩小。这使早期层缺乏学习信号。解决方案包括ReLU激活、残差连接、批量归一化和精心的初始化。",
    diagram: "",
    terms: ["vanishing_gradient", "relu", "residual_connection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 12,
    q: "Convolutional Neural Networks (CNNs) achieve translation invariance primarily through:",
    qChinese: "卷积神经网络（CNN）主要通过以下方式实现平移不变性：",
    options: [
      "A) Fully connected layers at the input",
      "B) Weight sharing in convolutional filters and pooling operations",
      "C) Dropout applied to every layer",
      "D) Using only one filter per convolutional layer"
    ],
    optionsChinese: [
      "A) 输入处的全连接层",
      "B) 卷积滤波器中的权重共享和池化操作",
      "C) 对每层应用Dropout",
      "D) 每个卷积层仅使用一个滤波器"
    ],
    answer: 1,
    explanation: "CNNs apply the same learned filter across all spatial positions (weight sharing), detecting features regardless of location. Pooling layers (max or average) further provide approximate translation invariance by summarizing local regions. This dramatically reduces parameters compared to fully connected layers on image inputs.",
    explanationChinese: "CNN在所有空间位置应用相同的学习滤波器（权重共享），无论位置如何都能检测特征。池化层（最大或平均）通过汇总局部区域进一步提供近似的平移不变性。与图像输入上的全连接层相比，这大大减少了参数数量。",
    diagram: "",
    terms: ["convolutional_neural_network", "weight_sharing", "pooling"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 13,
    q: "In a standard CNN architecture, what does a max-pooling layer with a 2x2 window and stride 2 do?",
    qChinese: "在标准CNN架构中，窗口为2x2、步幅为2的最大池化层做什么？",
    options: [
      "A) Doubles the spatial dimensions of the feature map",
      "B) Reduces each spatial dimension by half, keeping the maximum value in each window",
      "C) Applies a 2x2 convolution with learned weights",
      "D) Adds zero-padding of size 2 around the feature map"
    ],
    optionsChinese: [
      "A) 将特征图的空间维度加倍",
      "B) 将每个空间维度减半，保留每个窗口中的最大值",
      "C) 应用具有学习权重的2x2卷积",
      "D) 在特征图周围添加大小为2的零填充"
    ],
    answer: 1,
    explanation: "A 2x2 max-pooling with stride 2 slides a 2x2 window across the feature map, outputting only the maximum value in each window. This halves both height and width, reducing computation and providing a degree of spatial invariance. It has no learnable parameters and is purely a downsampling operation.",
    explanationChinese: "步幅为2的2x2最大池化在特征图上滑动2x2窗口，仅输出每个窗口中的最大值。这将高度和宽度都减半，减少计算量并提供一定程度的空间不变性。它没有可学习参数，纯粹是下采样操作。",
    diagram: "",
    terms: ["max_pooling", "downsampling", "spatial_invariance"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 14,
    q: "Recurrent Neural Networks (RNNs) are designed to process:",
    qChinese: "循环神经网络（RNN）设计用于处理：",
    options: [
      "A) Only fixed-size inputs with no temporal structure",
      "B) Sequential data by maintaining a hidden state across time steps",
      "C) Only image data with 2D spatial structure",
      "D) Tabular data with independent features"
    ],
    optionsChinese: [
      "A) 仅没有时间结构的固定大小输入",
      "B) 通过跨时间步维护隐藏状态来处理序列数据",
      "C) 仅具有2D空间结构的图像数据",
      "D) 具有独立特征的表格数据"
    ],
    answer: 1,
    explanation: "RNNs process sequences by updating a hidden state h_t = f(W_h h_{t-1} + W_x x_t + b) at each time step. This hidden state acts as memory, encoding information from previous time steps. LSTMs and GRUs extend basic RNNs with gating mechanisms to better capture long-range dependencies in sequences.",
    explanationChinese: "RNN通过在每个时间步更新隐藏状态h_t = f(W_h h_{t-1} + W_x x_t + b)来处理序列。这个隐藏状态充当记忆，编码先前时间步的信息。LSTM和GRU通过门控机制扩展基本RNN，以更好地捕获序列中的长程依赖关系。",
    diagram: "",
    terms: ["recurrent_neural_network", "hidden_state", "lstm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 15,
    q: "The Transformer architecture replaces recurrence with which mechanism for capturing dependencies?",
    qChinese: "Transformer架构用哪种机制替代循环来捕获依赖关系？",
    options: [
      "A) Convolutional filters",
      "B) Self-attention (scaled dot-product attention)",
      "C) Max-pooling across the sequence",
      "D) Recursive tree structures"
    ],
    optionsChinese: [
      "A) 卷积滤波器",
      "B) 自注意力（缩放点积注意力）",
      "C) 跨序列的最大池化",
      "D) 递归树结构"
    ],
    answer: 1,
    explanation: "Transformers use self-attention to compute a weighted sum of all positions in the sequence for each position, enabling direct modeling of long-range dependencies. Attention weights are Attention(Q,K,V) = softmax(QK^T/sqrt(d_k))V. This allows full parallelization, unlike sequential RNN computation.",
    explanationChinese: "Transformer使用自注意力为每个位置计算序列中所有位置的加权和，从而直接建模长程依赖关系。注意力权重为Attention(Q,K,V) = softmax(QK^T/sqrt(d_k))V。与顺序的RNN计算不同，这允许完全并行化。",
    diagram: "",
    terms: ["transformer", "self_attention", "scaled_dot_product"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 16,
    q: "In the Transformer, positional encoding is necessary because:",
    qChinese: "在Transformer中，位置编码是必要的，因为：",
    options: [
      "A) The model has too many parameters to train without it",
      "B) Self-attention is permutation-invariant and has no inherent notion of token order",
      "C) It replaces the need for multi-head attention",
      "D) It reduces the computational complexity from O(n^2) to O(n)"
    ],
    optionsChinese: [
      "A) 没有它模型参数太多无法训练",
      "B) 自注意力是排列不变的，没有固有的标记顺序概念",
      "C) 它替代了多头注意力的需要",
      "D) 它将计算复杂度从O(n^2)降低到O(n)"
    ],
    answer: 1,
    explanation: "Self-attention treats the input as a set, not a sequence, producing the same output regardless of input order. Positional encodings (sinusoidal or learned) are added to input embeddings to inject sequence order information. Without them, the model cannot distinguish 'dog bites man' from 'man bites dog'.",
    explanationChinese: "自注意力将输入视为集合而非序列，无论输入顺序如何都产生相同输出。位置编码（正弦或学习的）被添加到输入嵌入中以注入序列顺序信息。没有它们，模型无法区分'狗咬人'和'人咬狗'。",
    diagram: "",
    terms: ["positional_encoding", "permutation_invariance", "transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 17,
    q: "Dropout regularization during training works by:",
    qChinese: "训练期间的Dropout正则化通过以下方式起作用：",
    options: [
      "A) Removing the smallest weights permanently from the network",
      "B) Randomly zeroing out a fraction of neuron activations at each training step",
      "C) Reducing the learning rate at each epoch",
      "D) Adding Gaussian noise to the loss function"
    ],
    optionsChinese: [
      "A) 从网络中永久删除最小的权重",
      "B) 在每个训练步骤中随机将一部分神经元激活置零",
      "C) 在每个训练轮次降低学习率",
      "D) 向损失函数添加高斯噪声"
    ],
    answer: 1,
    explanation: "Dropout randomly sets a fraction p of neuron outputs to zero during each forward pass in training. This prevents co-adaptation of features and acts as an implicit ensemble of exponentially many sub-networks. At inference time, dropout is turned off and weights are scaled by (1-p) to maintain expected values.",
    explanationChinese: "Dropout在训练的每次前向传播中随机将一部分p的神经元输出置零。这防止了特征的共同适应，并充当指数级多个子网络的隐式集成。在推理时，关闭Dropout并将权重缩放(1-p)以维持期望值。",
    diagram: "",
    terms: ["dropout", "regularization", "co_adaptation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 18,
    q: "Batch normalization in deep learning helps training by:",
    qChinese: "深度学习中的批量归一化通过以下方式帮助训练：",
    options: [
      "A) Increasing the batch size automatically during training",
      "B) Normalizing layer inputs to have zero mean and unit variance within each mini-batch",
      "C) Eliminating the need for activation functions",
      "D) Replacing gradient descent with closed-form solutions"
    ],
    optionsChinese: [
      "A) 在训练期间自动增加批量大小",
      "B) 在每个小批量内将层输入归一化为零均值和单位方差",
      "C) 消除对激活函数的需要",
      "D) 用闭式解替代梯度下降"
    ],
    answer: 1,
    explanation: "Batch normalization standardizes each layer's inputs using mini-batch statistics, then applies learnable scale and shift parameters. This reduces internal covariate shift, allows higher learning rates, and provides mild regularization. Running statistics are maintained for inference when batch statistics are unavailable.",
    explanationChinese: "批量归一化使用小批量统计量标准化每层的输入，然后应用可学习的缩放和偏移参数。这减少了内部协变量偏移，允许更高的学习率，并提供轻度正则化。在推理时，当批量统计量不可用时，使用维护的运行统计量。",
    diagram: "",
    terms: ["batch_normalization", "internal_covariate_shift", "normalization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 19,
    q: "In word2vec, the skip-gram model is trained to predict:",
    qChinese: "在word2vec中，skip-gram模型被训练来预测：",
    options: [
      "A) The next sentence given the current sentence",
      "B) Context (surrounding) words given a center word",
      "C) The part-of-speech tag of a word",
      "D) The document topic given all words in the document"
    ],
    optionsChinese: [
      "A) 给定当前句子预测下一个句子",
      "B) 给定中心词预测上下文（周围）词",
      "C) 预测一个词的词性标签",
      "D) 给定文档中所有词预测文档主题"
    ],
    answer: 1,
    explanation: "Skip-gram maximizes the probability of context words given the center word within a defined window. It learns dense vector representations where semantically similar words cluster together. Negative sampling approximates the full softmax for efficiency. The resulting embeddings capture analogies like king - man + woman = queen.",
    explanationChinese: "Skip-gram最大化在定义窗口内给定中心词时上下文词的概率。它学习密集向量表示，其中语义相似的词聚集在一起。负采样近似完整的softmax以提高效率。生成的嵌入捕获类比关系，如king - man + woman = queen。",
    diagram: "",
    terms: ["word2vec", "skip_gram", "word_embeddings"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 20,
    q: "Cross-validation is used in machine learning to:",
    qChinese: "交叉验证在机器学习中用于：",
    options: [
      "A) Increase the size of the training dataset",
      "B) Estimate how well a model generalizes to unseen data by rotating training and validation splits",
      "C) Replace the need for a separate test set entirely",
      "D) Speed up the training process by reducing epochs"
    ],
    optionsChinese: [
      "A) 增加训练数据集的大小",
      "B) 通过轮换训练和验证分割来估计模型对未见数据的泛化能力",
      "C) 完全替代单独测试集的需要",
      "D) 通过减少训练轮次来加速训练过程"
    ],
    answer: 1,
    explanation: "K-fold cross-validation partitions data into k subsets, trains on k-1 folds, and validates on the held-out fold, rotating k times. This provides a robust estimate of generalization performance and reduces dependence on a single train-test split. It is essential for model selection and hyperparameter tuning.",
    explanationChinese: "K折交叉验证将数据分为k个子集，在k-1折上训练，在留出的折上验证，轮换k次。这提供了泛化性能的稳健估计，减少了对单次训练-测试分割的依赖。它对模型选择和超参数调优至关重要。",
    diagram: "",
    terms: ["cross_validation", "k_fold", "model_selection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  }
];
