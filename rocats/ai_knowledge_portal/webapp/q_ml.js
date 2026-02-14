const questionsML = [
  // ===== SUPERVISED LEARNING: REGRESSION, CLASSIFICATION BASICS (1-30) =====
  {
    id: 1,
    q: "What is supervised learning?",
    qChinese: "什么是监督学习？",
    options: [
      "A) Learning from labeled data with known outputs",
      "B) Learning from data without any labels",
      "C) Learning by interacting with an environment",
      "D) Learning by clustering similar data points"
    ],
    optionsChinese: [
      "A) 从具有已知输出的标注数据中学习",
      "B) 从没有任何标签的数据中学习",
      "C) 通过与环境交互来学习",
      "D) 通过聚类相似数据点来学习"
    ],
    answer: 0,
    explanation: "Supervised learning uses labeled training data where both inputs and correct outputs are provided. The model learns a mapping function from input features to output labels. This contrasts with unsupervised learning which has no labels, and reinforcement learning which uses environment feedback.",
    explanationChinese: "监督学习使用标注的训练数据，其中提供了输入和正确的输出。模型学习从输入特征到输出标签的映射函数。这与没有标签的无监督学习和使用环境反馈的强化学习形成对比。",
    diagram: "",
    terms: ["supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 2,
    q: "Which of the following is a regression task?",
    qChinese: "以下哪项是回归任务？",
    options: [
      "A) Classifying emails as spam or not spam",
      "B) Predicting the price of a house",
      "C) Identifying objects in an image",
      "D) Grouping customers into segments"
    ],
    optionsChinese: [
      "A) 将电子邮件分类为垃圾邮件或非垃圾邮件",
      "B) 预测房屋价格",
      "C) 识别图像中的物体",
      "D) 将客户分成不同群组"
    ],
    answer: 1,
    explanation: "Regression predicts continuous numerical values rather than discrete categories. Predicting house prices outputs a continuous number. Email classification and object identification are classification tasks, while customer grouping is an unsupervised clustering task that does not predict a specific value.",
    explanationChinese: "回归预测连续的数值而非离散的类别。预测房屋价格输出一个连续数字。电子邮件分类和物体识别是分类任务，而客户分组是不预测特定值的无监督聚类任务。",
    diagram: "",
    terms: ["supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 3,
    q: "What is the key difference between classification and regression?",
    qChinese: "分类和回归的关键区别是什么？",
    options: [
      "A) Classification uses more data than regression",
      "B) Regression is always more accurate than classification",
      "C) Classification predicts discrete labels while regression predicts continuous values",
      "D) Classification is unsupervised while regression is supervised"
    ],
    optionsChinese: [
      "A) 分类比回归使用更多数据",
      "B) 回归总是比分类更准确",
      "C) 分类预测离散标签而回归预测连续值",
      "D) 分类是无监督的而回归是监督的"
    ],
    answer: 2,
    explanation: "The fundamental distinction is in the output type. Classification assigns inputs to discrete categories such as spam or not spam. Regression predicts continuous numerical values like temperature or price. Both are supervised learning techniques that require labeled training data to learn patterns.",
    explanationChinese: "根本区别在于输出类型。分类将输入分配到离散类别，如垃圾邮件或非垃圾邮件。回归预测连续数值，如温度或价格。两者都是需要标注训练数据来学习模式的监督学习技术。",
    diagram: "",
    terms: ["supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 4,
    q: "In a supervised learning pipeline, what is a feature?",
    qChinese: "在监督学习流程中，什么是特征？",
    options: [
      "A) The output variable the model predicts",
      "B) The algorithm used for training",
      "C) The error between prediction and actual value",
      "D) An input variable used to make predictions"
    ],
    optionsChinese: [
      "A) 模型预测的输出变量",
      "B) 用于训练的算法",
      "C) 预测值与实际值之间的误差",
      "D) 用于进行预测的输入变量"
    ],
    answer: 3,
    explanation: "A feature is an individual measurable property or characteristic of the data used as input to the model. Features are also called predictors, independent variables, or attributes. Good feature selection significantly impacts model performance. The output variable is called the target or label.",
    explanationChinese: "特征是数据的一个可测量的属性或特性，用作模型的输入。特征也被称为预测变量、自变量或属性。良好的特征选择对模型性能有显著影响。输出变量被称为目标或标签。",
    diagram: "",
    terms: ["feature_engineering","supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 5,
    q: "What does the target variable represent in supervised learning?",
    qChinese: "在监督学习中，目标变量代表什么？",
    options: [
      "A) The output the model is trained to predict",
      "B) The set of input features",
      "C) The learning rate of the algorithm",
      "D) The number of training samples"
    ],
    optionsChinese: [
      "A) 模型被训练来预测的输出",
      "B) 输入特征集合",
      "C) 算法的学习率",
      "D) 训练样本的数量"
    ],
    answer: 0,
    explanation: "The target variable, also called the label or dependent variable, is the output that the supervised learning model aims to predict. During training, the model learns the relationship between input features and this target. In regression, it is continuous; in classification, it is categorical.",
    explanationChinese: "目标变量，也称为标签或因变量，是监督学习模型旨在预测的输出。在训练过程中，模型学习输入特征与该目标之间的关系。在回归中，它是连续的；在分类中，它是分类的。",
    diagram: "",
    terms: ["supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 6,
    q: "Which scenario is a binary classification problem?",
    qChinese: "哪个场景是二元分类问题？",
    options: [
      "A) Predicting stock prices for the next quarter",
      "B) Detecting whether a transaction is fraudulent or legitimate",
      "C) Estimating the age of a person from a photo",
      "D) Predicting the number of items sold next month"
    ],
    optionsChinese: [
      "A) 预测下个季度的股票价格",
      "B) 检测交易是欺诈还是合法的",
      "C) 从照片估计一个人的年龄",
      "D) 预测下个月销售的商品数量"
    ],
    answer: 1,
    explanation: "Binary classification involves predicting one of exactly two classes. Fraud detection classifies transactions as either fraudulent or legitimate, making it binary. Stock prices, age estimation, and sales numbers are continuous values, making them regression problems rather than classification.",
    explanationChinese: "二元分类涉及预测恰好两个类别中的一个。欺诈检测将交易分类为欺诈或合法，属于二元分类。股票价格、年龄估计和销售数量是连续值，属于回归问题而非分类。",
    diagram: "",
    terms: ["supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 7,
    q: "What is multi-class classification?",
    qChinese: "什么是多类分类？",
    options: [
      "A) Predicting a continuous value from multiple features",
      "B) Using multiple models to predict a single output",
      "C) Assigning an input to one of three or more categories",
      "D) Training a model on multiple datasets simultaneously"
    ],
    optionsChinese: [
      "A) 从多个特征预测连续值",
      "B) 使用多个模型预测单个输出",
      "C) 将输入分配到三个或更多类别中的一个",
      "D) 同时在多个数据集上训练模型"
    ],
    answer: 2,
    explanation: "Multi-class classification extends binary classification to three or more classes. Examples include recognizing handwritten digits from zero to nine or classifying plant species. Common approaches include one-vs-rest and softmax strategies. The model outputs probabilities for each class.",
    explanationChinese: "多类分类将二元分类扩展到三个或更多类别。例如识别零到九的手写数字或对植物物种进行分类。常见方法包括一对多和softmax策略。模型输出每个类别的概率。",
    diagram: "",
    terms: ["supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 8,
    q: "What is the purpose of a training set in supervised learning?",
    qChinese: "监督学习中训练集的目的是什么？",
    options: [
      "A) To evaluate the final model performance",
      "B) To deploy the model to production",
      "C) To tune hyperparameters",
      "D) To provide labeled examples for the model to learn from"
    ],
    optionsChinese: [
      "A) 评估最终模型性能",
      "B) 将模型部署到生产环境",
      "C) 调整超参数",
      "D) 为模型提供用于学习的标注示例"
    ],
    answer: 3,
    explanation: "The training set provides labeled data the model uses to learn patterns and relationships between features and targets. The model adjusts its parameters by minimizing prediction errors on this data. A separate test set evaluates generalization, and a validation set helps tune hyperparameters.",
    explanationChinese: "训练集提供标注数据，模型使用这些数据学习特征和目标之间的模式和关系。模型通过最小化在此数据上的预测误差来调整参数。单独的测试集评估泛化能力，验证集帮助调整超参数。",
    diagram: "",
    terms: ["supervised_learning","cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 9,
    q: "What is a hypothesis function in machine learning?",
    qChinese: "机器学习中的假设函数是什么？",
    options: [
      "A) A function that maps inputs to predicted outputs",
      "B) A function that preprocesses the data",
      "C) A function that splits data into train and test sets",
      "D) A function that evaluates model accuracy"
    ],
    optionsChinese: [
      "A) 将输入映射到预测输出的函数",
      "B) 预处理数据的函数",
      "C) 将数据分为训练集和测试集的函数",
      "D) 评估模型准确度的函数"
    ],
    answer: 0,
    explanation: "The hypothesis function represents the model's learned mapping from input features to predicted outputs. In linear regression, it takes the form h(x) = wx + b. The learning algorithm adjusts parameters w and b to minimize the difference between predicted and actual values on training data.",
    explanationChinese: "假设函数代表模型学到的从输入特征到预测输出的映射。在线性回归中，它的形式为h(x) = wx + b。学习算法调整参数w和b，以最小化训练数据上预测值与实际值之间的差异。",
    diagram: "",
    terms: ["supervised_learning","gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 10,
    q: "Which loss function is commonly used for regression problems?",
    qChinese: "哪个损失函数通常用于回归问题？",
    options: [
      "A) Cross-entropy loss",
      "B) Mean Squared Error",
      "C) Hinge loss",
      "D) Log loss"
    ],
    optionsChinese: [
      "A) 交叉熵损失",
      "B) 均方误差",
      "C) 合页损失",
      "D) 对数损失"
    ],
    answer: 1,
    explanation: "Mean Squared Error calculates the average of squared differences between predictions and actual values. It penalizes larger errors more heavily due to squaring. Cross-entropy and log loss are used for classification. Hinge loss is specific to support vector machines for classification tasks.",
    explanationChinese: "均方误差计算预测值与实际值之间差异的平方的平均值。由于平方运算，它对较大的误差惩罚更重。交叉熵和对数损失用于分类。合页损失专用于支持向量机的分类任务。",
    diagram: "",
    terms: ["supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 11,
    q: "What does a loss function measure in supervised learning?",
    qChinese: "在监督学习中，损失函数衡量什么？",
    options: [
      "A) The complexity of the model",
      "B) The number of features in the dataset",
      "C) The discrepancy between predicted and actual values",
      "D) The speed of the training process"
    ],
    optionsChinese: [
      "A) 模型的复杂度",
      "B) 数据集中特征的数量",
      "C) 预测值与实际值之间的差异",
      "D) 训练过程的速度"
    ],
    answer: 2,
    explanation: "A loss function quantifies how far the model's predictions are from the true values. The training process aims to minimize this loss. Different tasks use different loss functions: MSE for regression and cross-entropy for classification. The loss guides parameter updates during optimization.",
    explanationChinese: "损失函数量化模型的预测与真实值之间的距离。训练过程旨在最小化此损失。不同任务使用不同的损失函数：回归用MSE，分类用交叉熵。损失在优化过程中指导参数更新。",
    diagram: "",
    terms: ["supervised_learning","gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 12,
    q: "What is the difference between parametric and non-parametric models?",
    qChinese: "参数模型和非参数模型有什么区别？",
    options: [
      "A) Parametric models are always more accurate",
      "B) Non-parametric models do not learn from data",
      "C) Non-parametric models cannot handle large datasets",
      "D) Parametric models have a fixed number of parameters regardless of data size"
    ],
    optionsChinese: [
      "A) 参数模型总是更准确",
      "B) 非参数模型不从数据中学习",
      "C) 非参数模型无法处理大型数据集",
      "D) 参数模型的参数数量固定，与数据大小无关"
    ],
    answer: 3,
    explanation: "Parametric models like linear regression assume a fixed functional form and have a set number of parameters. Non-parametric models like KNN grow in complexity with data size. Parametric models are faster but may underfit complex data, while non-parametric models are more flexible.",
    explanationChinese: "参数模型如线性回归假设固定的函数形式并具有固定数量的参数。非参数模型如KNN的复杂度随数据大小增长。参数模型更快但可能对复杂数据欠拟合，而非参数模型更灵活。",
    diagram: "",
    terms: ["supervised_learning","bias_variance"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 13,
    q: "In supervised learning, what is generalization?",
    qChinese: "在监督学习中，什么是泛化？",
    options: [
      "A) The ability to perform well on unseen data",
      "B) Memorizing the training data exactly",
      "C) Using all available features for prediction",
      "D) Training the model for more epochs"
    ],
    optionsChinese: [
      "A) 在未见过的数据上表现良好的能力",
      "B) 完全记忆训练数据",
      "C) 使用所有可用特征进行预测",
      "D) 训练模型更多轮次"
    ],
    answer: 0,
    explanation: "Generalization measures how well a model performs on new, previously unseen data rather than the training data. A model that memorizes training data but fails on new data has poor generalization, which is called overfitting. Good generalization is the ultimate goal of supervised learning.",
    explanationChinese: "泛化衡量模型在新的、以前未见过的数据上的表现，而不是在训练数据上的表现。一个记忆了训练数据但在新数据上失败的模型泛化能力差，这称为过拟合。良好的泛化是监督学习的最终目标。",
    diagram: "",
    terms: ["overfitting","bias_variance"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 14,
    q: "Which of the following best describes overfitting?",
    qChinese: "以下哪项最好地描述了过拟合？",
    options: [
      "A) The model performs poorly on both training and test data",
      "B) The model performs well on training data but poorly on test data",
      "C) The model performs well on test data but poorly on training data",
      "D) The model ignores all the training data"
    ],
    optionsChinese: [
      "A) 模型在训练数据和测试数据上都表现不佳",
      "B) 模型在训练数据上表现好但在测试数据上表现差",
      "C) 模型在测试数据上表现好但在训练数据上表现差",
      "D) 模型忽略所有训练数据"
    ],
    answer: 1,
    explanation: "Overfitting occurs when a model captures noise and specific patterns in the training data rather than general underlying trends. This results in excellent training performance but poor test performance. Techniques like regularization, cross-validation, and early stopping help prevent overfitting.",
    explanationChinese: "当模型捕获训练数据中的噪声和特定模式而非一般的潜在趋势时，就会发生过拟合。这导致训练性能优异但测试性能差。正则化、交叉验证和早停等技术有助于防止过拟合。",
    diagram: "",
    terms: ["overfitting","regularization","cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 15,
    q: "What is underfitting in machine learning?",
    qChinese: "机器学习中什么是欠拟合？",
    options: [
      "A) The model is too complex for the data",
      "B) The model captures noise in the training data",
      "C) The model is too simple to capture the underlying data patterns",
      "D) The model has too many features"
    ],
    optionsChinese: [
      "A) 模型对数据来说过于复杂",
      "B) 模型捕获了训练数据中的噪声",
      "C) 模型太简单，无法捕获数据的潜在模式",
      "D) 模型有太多特征"
    ],
    answer: 2,
    explanation: "Underfitting happens when a model is too simple to learn the underlying structure of the data. It performs poorly on both training and test data. This indicates high bias. Solutions include using more complex models, adding features, reducing regularization, or training for more iterations.",
    explanationChinese: "当模型太简单无法学习数据的潜在结构时，就会发生欠拟合。它在训练数据和测试数据上都表现不佳。这表明高偏差。解决方案包括使用更复杂的模型、添加特征、减少正则化或训练更多迭代。",
    diagram: "",
    terms: ["overfitting","bias_variance","regularization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 16,
    q: "What is the purpose of a test set?",
    qChinese: "测试集的目的是什么？",
    options: [
      "A) To train the model parameters",
      "B) To tune hyperparameters during training",
      "C) To increase the training data size",
      "D) To evaluate the model's performance on unseen data"
    ],
    optionsChinese: [
      "A) 训练模型参数",
      "B) 在训练期间调整超参数",
      "C) 增加训练数据的大小",
      "D) 评估模型在未见数据上的性能"
    ],
    answer: 3,
    explanation: "The test set is a held-out portion of data used solely to evaluate how well the trained model generalizes to new, unseen examples. It should never be used during training or hyperparameter tuning. A validation set is used for tuning, while the test set gives an unbiased final evaluation.",
    explanationChinese: "测试集是一部分保留的数据，仅用于评估训练好的模型对新的未见示例的泛化能力。它不应在训练或超参数调整期间使用。验证集用于调整，而测试集给出无偏的最终评估。",
    diagram: "",
    terms: ["cross_validation","supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 17,
    q: "Which of the following is an example of multi-label classification?",
    qChinese: "以下哪项是多标签分类的示例？",
    options: [
      "A) Tagging an article with multiple topics simultaneously",
      "B) Predicting whether a patient has diabetes",
      "C) Predicting tomorrow's temperature",
      "D) Sorting products into a single category"
    ],
    optionsChinese: [
      "A) 同时为文章标记多个主题",
      "B) 预测患者是否患有糖尿病",
      "C) 预测明天的温度",
      "D) 将产品分类到单一类别中"
    ],
    answer: 0,
    explanation: "Multi-label classification assigns multiple labels to each instance simultaneously, unlike multi-class where each instance gets exactly one label. Tagging an article with topics like sports, politics, and health is multi-label since one article can belong to multiple categories at once.",
    explanationChinese: "多标签分类同时为每个实例分配多个标签，不同于多类分类中每个实例只获得一个标签。为文章标记体育、政治和健康等主题是多标签的，因为一篇文章可以同时属于多个类别。",
    diagram: "",
    terms: ["supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 18,
    q: "What is inductive bias in machine learning?",
    qChinese: "机器学习中的归纳偏差是什么？",
    options: [
      "A) Bias caused by imbalanced training data",
      "B) Assumptions a learning algorithm makes to generalize from training data",
      "C) The error introduced by using too few features",
      "D) Prejudice in the data collection process"
    ],
    optionsChinese: [
      "A) 由不平衡训练数据引起的偏差",
      "B) 学习算法为从训练数据泛化所做的假设",
      "C) 使用太少特征引入的误差",
      "D) 数据收集过程中的偏见"
    ],
    answer: 1,
    explanation: "Inductive bias refers to the set of assumptions a learning algorithm uses to predict outputs for unseen inputs. For example, linear regression assumes a linear relationship. These assumptions are necessary for generalization but may limit the model if they do not match the true data distribution.",
    explanationChinese: "归纳偏差指学习算法用来预测未见输入的输出的一组假设。例如，线性回归假设线性关系。这些假设对泛化是必要的，但如果与真实数据分布不匹配，可能会限制模型。",
    diagram: "",
    terms: ["bias_variance","supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 19,
    q: "What is the No Free Lunch theorem in machine learning?",
    qChinese: "机器学习中的没有免费午餐定理是什么？",
    options: [
      "A) All models perform equally well on all problems",
      "B) Training always requires labeled data",
      "C) No single model is best for every possible problem",
      "D) More data always improves model performance"
    ],
    optionsChinese: [
      "A) 所有模型在所有问题上表现同样好",
      "B) 训练总是需要标注数据",
      "C) 没有单一模型对每个可能的问题都是最好的",
      "D) 更多数据总是能提高模型性能"
    ],
    answer: 2,
    explanation: "The No Free Lunch theorem states that no algorithm universally outperforms all others across every possible problem. A model's effectiveness depends on how well its assumptions match the data. This motivates trying multiple algorithms and selecting the best one for each specific task.",
    explanationChinese: "没有免费午餐定理指出，没有算法在每个可能的问题上都普遍优于所有其他算法。模型的有效性取决于其假设与数据的匹配程度。这促使人们尝试多种算法并为每个特定任务选择最佳的。",
    diagram: "",
    terms: ["supervised_learning","bias_variance"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 20,
    q: "What is a validation set used for?",
    qChinese: "验证集用于什么？",
    options: [
      "A) Training the model weights",
      "B) Providing final performance metrics",
      "C) Collecting new data samples",
      "D) Tuning hyperparameters and preventing overfitting"
    ],
    optionsChinese: [
      "A) 训练模型权重",
      "B) 提供最终性能指标",
      "C) 收集新的数据样本",
      "D) 调整超参数和防止过拟合"
    ],
    answer: 3,
    explanation: "The validation set is used during training to tune hyperparameters and monitor for overfitting without touching the test set. It helps make decisions like when to stop training, which model architecture to use, or which regularization strength to apply, keeping the test set unbiased.",
    explanationChinese: "验证集在训练期间用于调整超参数和监控过拟合，而不触及测试集。它帮助做出决定，如何时停止训练、使用哪种模型架构或应用哪种正则化强度，保持测试集的无偏性。",
    diagram: "",
    terms: ["cross_validation","overfitting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 21,
    q: "Which of the following is NOT a supervised learning algorithm?",
    qChinese: "以下哪个不是监督学习算法？",
    options: [
      "A) K-Means clustering",
      "B) Linear regression",
      "C) Decision tree classifier",
      "D) Support vector machine"
    ],
    optionsChinese: [
      "A) K-均值聚类",
      "B) 线性回归",
      "C) 决策树分类器",
      "D) 支持向量机"
    ],
    answer: 0,
    explanation: "K-Means clustering is an unsupervised learning algorithm that groups data points into clusters without labeled data. Linear regression, decision trees, and SVMs are all supervised learning methods that require labeled training data to learn the mapping from features to target variables.",
    explanationChinese: "K-均值聚类是一种无监督学习算法，在没有标注数据的情况下将数据点分组到簇中。线性回归、决策树和SVM都是需要标注训练数据来学习从特征到目标变量映射的监督学习方法。",
    diagram: "",
    terms: ["supervised_learning","unsupervised_learning","k_means","svm","decision_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 22,
    q: "What is the curse of dimensionality?",
    qChinese: "什么是维度灾难？",
    options: [
      "A) Having too few data points to train a model",
      "B) The exponential increase in data needed as feature dimensions grow",
      "C) Running out of memory during model training",
      "D) Having too many duplicate features in the dataset"
    ],
    optionsChinese: [
      "A) 训练模型的数据点太少",
      "B) 随着特征维度增长，所需数据呈指数增长",
      "C) 在模型训练期间内存不足",
      "D) 数据集中有太多重复特征"
    ],
    answer: 1,
    explanation: "The curse of dimensionality refers to problems that arise when data has too many features. As dimensions increase, the data becomes sparse and distances between points become less meaningful. This makes learning harder and requires exponentially more data for reliable statistical estimation.",
    explanationChinese: "维度灾难指数据有太多特征时出现的问题。随着维度增加，数据变得稀疏，点之间的距离变得不太有意义。这使学习更困难，并需要指数级更多的数据来进行可靠的统计估计。",
    diagram: "",
    terms: ["pca","feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 23,
    q: "What is an epoch in the context of training a machine learning model?",
    qChinese: "在训练机器学习模型的上下文中，什么是一个epoch？",
    options: [
      "A) A single update of the model weights",
      "B) The time it takes to train the model",
      "C) One complete pass through the entire training dataset",
      "D) A subset of the training data used in one iteration"
    ],
    optionsChinese: [
      "A) 模型权重的单次更新",
      "B) 训练模型所需的时间",
      "C) 对整个训练数据集的一次完整遍历",
      "D) 一次迭代中使用的训练数据子集"
    ],
    answer: 2,
    explanation: "An epoch represents one complete pass through the entire training dataset during model training. Multiple epochs allow the model to see all data multiple times, progressively improving its parameters. Too many epochs can lead to overfitting, while too few may cause underfitting.",
    explanationChinese: "一个epoch代表在模型训练期间对整个训练数据集的一次完整遍历。多个epoch允许模型多次看到所有数据，逐步改善其参数。太多epoch可能导致过拟合，而太少可能导致欠拟合。",
    diagram: "",
    terms: ["gradient_descent","overfitting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 24,
    q: "What is a batch in stochastic gradient descent?",
    qChinese: "在随机梯度下降中什么是批次？",
    options: [
      "A) The entire training dataset",
      "B) The number of epochs in training",
      "C) The test data used for evaluation",
      "D) A subset of training samples used in one weight update"
    ],
    optionsChinese: [
      "A) 整个训练数据集",
      "B) 训练中的epoch数量",
      "C) 用于评估的测试数据",
      "D) 一次权重更新中使用的训练样本子集"
    ],
    answer: 3,
    explanation: "A batch is a subset of training samples used to compute the gradient and update model weights in one iteration. Mini-batch gradient descent uses batches between one sample and the full dataset. Smaller batches add noise that can help escape local minima but make training noisier.",
    explanationChinese: "批次是用于在一次迭代中计算梯度和更新模型权重的训练样本子集。小批量梯度下降使用介于单个样本和完整数据集之间的批次。较小的批次增加噪声，可以帮助逃离局部最小值，但使训练更不稳定。",
    diagram: "",
    terms: ["gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 25,
    q: "What is the difference between a model parameter and a hyperparameter?",
    qChinese: "模型参数和超参数有什么区别？",
    options: [
      "A) Parameters are learned during training; hyperparameters are set before training",
      "B) Parameters are set before training; hyperparameters are learned during training",
      "C) Both are learned during training",
      "D) Both are set before training begins"
    ],
    optionsChinese: [
      "A) 参数在训练中学习；超参数在训练前设定",
      "B) 参数在训练前设定；超参数在训练中学习",
      "C) 两者都在训练中学习",
      "D) 两者都在训练开始前设定"
    ],
    answer: 0,
    explanation: "Model parameters like weights and biases are learned from data during training. Hyperparameters like learning rate, tree depth, or regularization strength are set before training and control the learning process. Hyperparameters are typically tuned using validation data or cross-validation.",
    explanationChinese: "模型参数如权重和偏置是在训练期间从数据中学习的。超参数如学习率、树深度或正则化强度在训练前设定，控制学习过程。超参数通常使用验证数据或交叉验证来调整。",
    diagram: "",
    terms: ["gradient_descent","cross_validation","regularization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 26,
    q: "What is data leakage in machine learning?",
    qChinese: "机器学习中什么是数据泄漏？",
    options: [
      "A) Losing training data due to storage failure",
      "B) Information from outside the training set improperly influencing the model",
      "C) The model forgetting learned patterns over time",
      "D) Training data being shared publicly"
    ],
    optionsChinese: [
      "A) 由于存储故障丢失训练数据",
      "B) 来自训练集之外的信息不当地影响模型",
      "C) 模型随时间遗忘学到的模式",
      "D) 训练数据被公开分享"
    ],
    answer: 1,
    explanation: "Data leakage occurs when information from outside the training dataset, such as test data or future data, inadvertently influences model training. This causes overly optimistic performance estimates that do not hold in production. Common causes include improper preprocessing before splitting data.",
    explanationChinese: "数据泄漏发生在来自训练数据集之外的信息（如测试数据或未来数据）无意中影响模型训练时。这导致过于乐观的性能估计，在生产中不成立。常见原因包括在拆分数据之前进行不当的预处理。",
    diagram: "",
    terms: ["cross_validation","overfitting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 27,
    q: "What is the purpose of one-hot encoding in classification?",
    qChinese: "在分类中独热编码的目的是什么？",
    options: [
      "A) To normalize numerical features to a 0-1 range",
      "B) To reduce the number of features",
      "C) To convert categorical variables into binary vector representation",
      "D) To handle missing values in the dataset"
    ],
    optionsChinese: [
      "A) 将数值特征归一化到0-1范围",
      "B) 减少特征数量",
      "C) 将分类变量转换为二进制向量表示",
      "D) 处理数据集中的缺失值"
    ],
    answer: 2,
    explanation: "One-hot encoding transforms categorical variables into binary vectors where each category becomes a separate column with values 0 or 1. This prevents models from incorrectly assuming ordinal relationships between categories. For a feature with N categories, it creates N binary columns.",
    explanationChinese: "独热编码将分类变量转换为二进制向量，其中每个类别成为一个单独的列，值为0或1。这防止模型错误地假设类别之间存在序数关系。对于具有N个类别的特征，它创建N个二进制列。",
    diagram: "",
    terms: ["feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 28,
    q: "What does class imbalance mean in a classification problem?",
    qChinese: "在分类问题中类别不平衡意味着什么？",
    options: [
      "A) Features have different scales",
      "B) Training and test sets have different distributions",
      "C) The model has too many parameters",
      "D) One class has significantly more samples than others"
    ],
    optionsChinese: [
      "A) 特征具有不同的尺度",
      "B) 训练集和测试集有不同的分布",
      "C) 模型有太多参数",
      "D) 一个类别的样本明显多于其他类别"
    ],
    answer: 3,
    explanation: "Class imbalance occurs when the distribution of classes is heavily skewed, such as 95% negative and 5% positive in fraud detection. This can bias the model toward the majority class. Solutions include resampling, using class weights, SMOTE for oversampling, or evaluation metrics like F1-score.",
    explanationChinese: "类别不平衡发生在类别分布严重偏斜时，如欺诈检测中95%为负样本和5%为正样本。这可能使模型偏向多数类。解决方案包括重采样、使用类权重、SMOTE过采样或使用F1分数等评估指标。",
    diagram: "",
    terms: ["confusion_matrix","supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 29,
    q: "What is the purpose of stratified sampling in supervised learning?",
    qChinese: "在监督学习中分层采样的目的是什么？",
    options: [
      "A) To maintain the same class distribution in train and test splits",
      "B) To increase the size of the dataset",
      "C) To remove outliers from the data",
      "D) To normalize feature values"
    ],
    optionsChinese: [
      "A) 在训练和测试拆分中保持相同的类别分布",
      "B) 增加数据集的大小",
      "C) 从数据中移除异常值",
      "D) 归一化特征值"
    ],
    answer: 0,
    explanation: "Stratified sampling ensures that each split of the data maintains the same proportion of classes as the original dataset. This is especially important with imbalanced datasets to prevent a split from having too few minority class examples. Scikit-learn offers stratify parameter for this purpose.",
    explanationChinese: "分层采样确保数据的每次拆分保持与原始数据集相同的类别比例。这对于不平衡数据集特别重要，以防止拆分中少数类样本太少。Scikit-learn为此目的提供了stratify参数。",
    diagram: "",
    terms: ["cross_validation","supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 30,
    q: "Which supervised learning approach is best for predicting whether an email is spam?",
    qChinese: "哪种监督学习方法最适合预测电子邮件是否为垃圾邮件？",
    options: [
      "A) Linear regression",
      "B) Binary classification",
      "C) K-Means clustering",
      "D) Principal Component Analysis"
    ],
    optionsChinese: [
      "A) 线性回归",
      "B) 二元分类",
      "C) K-均值聚类",
      "D) 主成分分析"
    ],
    answer: 1,
    explanation: "Spam detection is a binary classification problem with two outcomes: spam or not spam. Linear regression predicts continuous values, not categories. K-Means and PCA are unsupervised methods. Classifiers like logistic regression, Naive Bayes, or SVMs are commonly used for spam filtering.",
    explanationChinese: "垃圾邮件检测是一个二元分类问题，有两个结果：垃圾邮件或非垃圾邮件。线性回归预测连续值而非类别。K-均值和PCA是无监督方法。逻辑回归、朴素贝叶斯或SVM等分类器通常用于垃圾邮件过滤。",
    diagram: "",
    terms: ["supervised_learning","svm","k_means","pca"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  // ===== LINEAR/LOGISTIC REGRESSION, GRADIENT DESCENT (31-55) =====
  {
    id: 31,
    q: "In linear regression, what does the equation y = wx + b represent?",
    qChinese: "在线性回归中，方程y = wx + b代表什么？",
    options: [
      "A) The loss function to minimize",
      "B) The gradient descent update rule",
      "C) The linear relationship between input and output with weight w and bias b",
      "D) The probability of class membership"
    ],
    optionsChinese: [
      "A) 要最小化的损失函数",
      "B) 梯度下降的更新规则",
      "C) 输入和输出之间的线性关系，其中w为权重，b为偏置",
      "D) 类别成员的概率"
    ],
    answer: 2,
    explanation: "The equation y = wx + b describes a linear model where w is the weight (slope) determining how much input x affects output y, and b is the bias (intercept). For multiple features, this extends to y = w1x1 + w2x2 + ... + b. Training finds optimal w and b values.",
    explanationChinese: "方程y = wx + b描述了一个线性模型，其中w是权重（斜率），决定输入x对输出y的影响程度，b是偏置（截距）。对于多个特征，扩展为y = w1x1 + w2x2 + ... + b。训练找到最优的w和b值。",
    diagram: "",
    terms: ["supervised_learning","gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 32,
    q: "What does the coefficient of determination (R-squared) measure?",
    qChinese: "决定系数（R平方）衡量什么？",
    options: [
      "A) The number of features used in the model",
      "B) The training speed of the algorithm",
      "C) The correlation between two features",
      "D) The proportion of variance in the target explained by the model"
    ],
    optionsChinese: [
      "A) 模型中使用的特征数量",
      "B) 算法的训练速度",
      "C) 两个特征之间的相关性",
      "D) 模型解释的目标中方差的比例"
    ],
    answer: 3,
    explanation: "R-squared ranges from 0 to 1 and indicates how well the model explains variability in the target variable. An R-squared of 0.85 means the model explains 85% of the variance. Higher values indicate better fit. However, adding more features always increases R-squared, so adjusted R-squared is preferred.",
    explanationChinese: "R平方的范围从0到1，表示模型解释目标变量中变异性的程度。R平方为0.85意味着模型解释了85%的方差。更高的值表示更好的拟合。然而，添加更多特征总是增加R平方，因此调整后的R平方更受推荐。",
    diagram: "",
    terms: ["supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 33,
    q: "What is the key assumption of linear regression regarding the relationship between features and target?",
    qChinese: "线性回归关于特征和目标之间关系的关键假设是什么？",
    options: [
      "A) The relationship is linear and additive",
      "B) The relationship is exponential",
      "C) The features are independent of each other",
      "D) The target follows a uniform distribution"
    ],
    optionsChinese: [
      "A) 关系是线性和可加的",
      "B) 关系是指数的",
      "C) 特征彼此独立",
      "D) 目标遵循均匀分布"
    ],
    answer: 0,
    explanation: "Linear regression assumes a linear additive relationship between input features and the output. Other assumptions include normally distributed residuals, constant variance of errors (homoscedasticity), and independence of observations. Violating these assumptions can lead to unreliable predictions and coefficients.",
    explanationChinese: "线性回归假设输入特征和输出之间存在线性可加关系。其他假设包括残差正态分布、误差方差恒定（同方差性）和观测值的独立性。违反这些假设可能导致不可靠的预测和系数。",
    diagram: "",
    terms: ["supervised_learning","bias_variance"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 34,
    q: "What is multicollinearity and why is it a problem in linear regression?",
    qChinese: "什么是多重共线性，为什么它在线性回归中是一个问题？",
    options: [
      "A) When the target variable has multiple classes",
      "B) When two or more features are highly correlated, making coefficients unstable",
      "C) When there are too many outliers in the data",
      "D) When the residuals are not normally distributed"
    ],
    optionsChinese: [
      "A) 当目标变量有多个类别时",
      "B) 当两个或更多特征高度相关，使系数不稳定时",
      "C) 当数据中有太多异常值时",
      "D) 当残差不服从正态分布时"
    ],
    answer: 1,
    explanation: "Multicollinearity occurs when independent variables are strongly correlated with each other. This makes it difficult to determine each feature's individual contribution, causing unstable coefficient estimates. Solutions include removing correlated features, using PCA, or applying regularization techniques like Ridge regression.",
    explanationChinese: "多重共线性发生在自变量彼此强相关时。这使得难以确定每个特征的个别贡献，导致系数估计不稳定。解决方案包括移除相关特征、使用PCA或应用Ridge回归等正则化技术。",
    diagram: "",
    terms: ["pca","regularization","feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 35,
    q: "What is logistic regression primarily used for?",
    qChinese: "逻辑回归主要用于什么？",
    options: [
      "A) Predicting continuous numerical values",
      "B) Clustering data points into groups",
      "C) Binary or multi-class classification problems",
      "D) Reducing the dimensionality of data"
    ],
    optionsChinese: [
      "A) 预测连续数值",
      "B) 将数据点聚类成组",
      "C) 二元或多类分类问题",
      "D) 降低数据的维度"
    ],
    answer: 2,
    explanation: "Despite its name, logistic regression is a classification algorithm. It uses the sigmoid function to map linear combinations of features to probabilities between 0 and 1. A threshold, typically 0.5, converts these probabilities into class predictions. It extends to multi-class via softmax.",
    explanationChinese: "尽管名称中有'回归'，逻辑回归是一种分类算法。它使用sigmoid函数将特征的线性组合映射到0和1之间的概率。阈值（通常为0.5）将这些概率转换为类别预测。它通过softmax扩展到多类。",
    diagram: "",
    terms: ["supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 36,
    q: "What is the sigmoid function in logistic regression?",
    qChinese: "逻辑回归中的sigmoid函数是什么？",
    options: [
      "A) A function that outputs any real number",
      "B) A function that squares the input value",
      "C) A function that calculates the mean of inputs",
      "D) A function that maps input values to a range between 0 and 1"
    ],
    optionsChinese: [
      "A) 输出任意实数的函数",
      "B) 对输入值求平方的函数",
      "C) 计算输入平均值的函数",
      "D) 将输入值映射到0和1之间范围的函数"
    ],
    answer: 3,
    explanation: "The sigmoid function, defined as 1/(1+e^-z), maps any real number to the range (0,1). This output is interpreted as a probability of belonging to the positive class. Values near 0 indicate the negative class, while values near 1 indicate the positive class. It has an S-shaped curve.",
    explanationChinese: "Sigmoid函数定义为1/(1+e^-z)，将任意实数映射到(0,1)范围。此输出被解释为属于正类的概率。接近0的值表示负类，接近1的值表示正类。它具有S形曲线。",
    diagram: "",
    terms: ["supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 37,
    q: "Which loss function is used in logistic regression?",
    qChinese: "逻辑回归中使用哪个损失函数？",
    options: [
      "A) Binary cross-entropy (log loss)",
      "B) Mean Squared Error",
      "C) Hinge loss",
      "D) Huber loss"
    ],
    optionsChinese: [
      "A) 二元交叉熵（对数损失）",
      "B) 均方误差",
      "C) 合页损失",
      "D) Huber损失"
    ],
    answer: 0,
    explanation: "Logistic regression uses binary cross-entropy, also called log loss. It measures how well predicted probabilities match actual binary labels. The loss is high when the model assigns low probability to the correct class. MSE is not suitable because the sigmoid makes the loss surface non-convex with MSE.",
    explanationChinese: "逻辑回归使用二元交叉熵，也称为对数损失。它衡量预测概率与实际二元标签的匹配程度。当模型将低概率分配给正确类别时，损失较高。MSE不适用，因为sigmoid使MSE的损失曲面非凸。",
    diagram: "",
    terms: ["supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 38,
    q: "What is gradient descent?",
    qChinese: "什么是梯度下降？",
    options: [
      "A) A method for splitting data into training and test sets",
      "B) An optimization algorithm that iteratively updates parameters to minimize a loss function",
      "C) A technique for selecting the best features",
      "D) A method for evaluating model performance"
    ],
    optionsChinese: [
      "A) 将数据分为训练集和测试集的方法",
      "B) 迭代更新参数以最小化损失函数的优化算法",
      "C) 选择最佳特征的技术",
      "D) 评估模型性能的方法"
    ],
    answer: 1,
    explanation: "Gradient descent is an optimization algorithm that minimizes the loss function by iteratively adjusting parameters in the direction of steepest descent. It computes the gradient (partial derivatives) of the loss with respect to each parameter and updates them proportionally to the learning rate.",
    explanationChinese: "梯度下降是一种优化算法，通过沿最陡下降方向迭代调整参数来最小化损失函数。它计算损失相对于每个参数的梯度（偏导数），并按学习率的比例更新它们。",
    diagram: "",
    terms: ["gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 39,
    q: "What role does the learning rate play in gradient descent?",
    qChinese: "学习率在梯度下降中起什么作用？",
    options: [
      "A) It determines the number of features to use",
      "B) It sets the number of training epochs",
      "C) It controls the step size of each parameter update",
      "D) It defines the batch size"
    ],
    optionsChinese: [
      "A) 它决定要使用的特征数量",
      "B) 它设定训练epoch的数量",
      "C) 它控制每次参数更新的步长",
      "D) 它定义批量大小"
    ],
    answer: 2,
    explanation: "The learning rate controls how large each step is when updating parameters. A too-large learning rate causes overshooting and divergence, while a too-small rate leads to very slow convergence. Finding the right learning rate is crucial. Techniques like learning rate scheduling can help adapt it during training.",
    explanationChinese: "学习率控制更新参数时每步的大小。过大的学习率导致过冲和发散，而过小的学习率导致收敛非常慢。找到正确的学习率至关重要。学习率调度等技术可以帮助在训练期间自适应调整。",
    diagram: "",
    terms: ["gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 40,
    q: "What is the difference between batch gradient descent and stochastic gradient descent (SGD)?",
    qChinese: "批量梯度下降和随机梯度下降（SGD）有什么区别？",
    options: [
      "A) Batch uses one sample per update; SGD uses the entire dataset",
      "B) Both use one sample per update",
      "C) Both use the entire dataset per update",
      "D) Batch uses the entire dataset per update; SGD uses one sample per update"
    ],
    optionsChinese: [
      "A) 批量每次更新使用一个样本；SGD使用整个数据集",
      "B) 两者每次更新都使用一个样本",
      "C) 两者每次更新都使用整个数据集",
      "D) 批量每次更新使用整个数据集；SGD每次更新使用一个样本"
    ],
    answer: 3,
    explanation: "Batch gradient descent computes gradients using all training samples, providing stable but slow updates. SGD uses a single random sample per update, making it much faster but noisier. Mini-batch gradient descent is the practical middle ground, using small subsets of data for each update.",
    explanationChinese: "批量梯度下降使用所有训练样本计算梯度，提供稳定但缓慢的更新。SGD每次更新使用单个随机样本，速度快得多但噪声更大。小批量梯度下降是实际的折中方案，每次更新使用数据的小子集。",
    diagram: "",
    terms: ["gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 41,
    q: "What happens when the learning rate is too high in gradient descent?",
    qChinese: "当梯度下降中的学习率过高时会发生什么？",
    options: [
      "A) The model may overshoot the minimum and diverge",
      "B) The model converges too slowly",
      "C) The model underfits the data",
      "D) The model uses too much memory"
    ],
    optionsChinese: [
      "A) 模型可能超过最小值并发散",
      "B) 模型收敛太慢",
      "C) 模型对数据欠拟合",
      "D) 模型使用太多内存"
    ],
    answer: 0,
    explanation: "A high learning rate causes parameter updates that are too large, causing the loss to oscillate wildly or increase instead of decreasing. The optimization may bounce around or diverge from the optimal solution entirely. This is why careful learning rate selection or adaptive methods like Adam are important.",
    explanationChinese: "高学习率导致参数更新过大，使损失剧烈振荡或增加而非减小。优化可能会来回跳动或完全偏离最优解。这就是为什么仔细选择学习率或使用Adam等自适应方法很重要。",
    diagram: "",
    terms: ["gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 42,
    q: "What is the advantage of mini-batch gradient descent over batch and stochastic gradient descent?",
    qChinese: "小批量梯度下降相比批量和随机梯度下降有什么优势？",
    options: [
      "A) It always converges to the global minimum",
      "B) It balances computational efficiency with gradient estimate stability",
      "C) It requires no learning rate tuning",
      "D) It eliminates the need for a loss function"
    ],
    optionsChinese: [
      "A) 它总是收敛到全局最小值",
      "B) 它平衡了计算效率和梯度估计稳定性",
      "C) 它不需要学习率调整",
      "D) 它消除了对损失函数的需要"
    ],
    answer: 1,
    explanation: "Mini-batch gradient descent uses a small subset of data per update, providing a balance between batch gradient descent's stability and SGD's speed. It enables efficient GPU utilization, provides smoother convergence than pure SGD, and is faster than computing gradients over the entire dataset each step.",
    explanationChinese: "小批量梯度下降每次更新使用数据的一小部分，在批量梯度下降的稳定性和SGD的速度之间取得平衡。它实现了高效的GPU利用，提供了比纯SGD更平滑的收敛，并且比每步在整个数据集上计算梯度更快。",
    diagram: "",
    terms: ["gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 43,
    q: "What is the Normal Equation in linear regression?",
    qChinese: "线性回归中的正规方程是什么？",
    options: [
      "A) An iterative optimization approach",
      "B) A method for feature scaling",
      "C) A closed-form analytical solution for finding optimal weights",
      "D) A technique for regularization"
    ],
    optionsChinese: [
      "A) 一种迭代优化方法",
      "B) 一种特征缩放方法",
      "C) 找到最优权重的闭合形式解析解",
      "D) 一种正则化技术"
    ],
    answer: 2,
    explanation: "The Normal Equation computes optimal weights directly using the formula w = (X^T X)^-1 X^T y, without iterative optimization. It is exact and requires no learning rate. However, it becomes computationally expensive for large datasets due to matrix inversion, making gradient descent preferable for big data.",
    explanationChinese: "正规方程使用公式w = (X^T X)^-1 X^T y直接计算最优权重，无需迭代优化。它是精确的，不需要学习率。但由于矩阵求逆，对大型数据集计算成本很高，使得梯度下降对大数据更可取。",
    diagram: "",
    terms: ["supervised_learning","gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 44,
    q: "What is polynomial regression?",
    qChinese: "什么是多项式回归？",
    options: [
      "A) Regression using only two variables",
      "B) Regression that predicts multiple outputs",
      "C) A type of logistic regression",
      "D) Linear regression extended with polynomial features to model non-linear relationships"
    ],
    optionsChinese: [
      "A) 仅使用两个变量的回归",
      "B) 预测多个输出的回归",
      "C) 一种逻辑回归",
      "D) 用多项式特征扩展的线性回归以建模非线性关系"
    ],
    answer: 3,
    explanation: "Polynomial regression adds polynomial terms like x-squared and x-cubed as additional features to linear regression, enabling it to model non-linear relationships. While more flexible than simple linear regression, higher degree polynomials risk overfitting. Regularization helps control this complexity.",
    explanationChinese: "多项式回归将x的平方和x的立方等多项式项作为额外特征添加到线性回归中，使其能够建模非线性关系。虽然比简单线性回归更灵活，但高次多项式有过拟合风险。正则化有助于控制这种复杂性。",
    diagram: "",
    terms: ["supervised_learning","overfitting","regularization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 45,
    q: "What is the decision boundary in logistic regression?",
    qChinese: "逻辑回归中的决策边界是什么？",
    options: [
      "A) The threshold surface that separates different class predictions",
      "B) The maximum number of iterations for training",
      "C) The learning rate value",
      "D) The minimum loss value achieved"
    ],
    optionsChinese: [
      "A) 分隔不同类别预测的阈值表面",
      "B) 训练的最大迭代次数",
      "C) 学习率值",
      "D) 达到的最小损失值"
    ],
    answer: 0,
    explanation: "The decision boundary is the surface in feature space where the model's predicted probability equals the classification threshold, typically 0.5. Points on one side are classified as one class and points on the other side as the other. In logistic regression, this boundary is linear in the feature space.",
    explanationChinese: "决策边界是特征空间中模型预测概率等于分类阈值（通常为0.5）的表面。一侧的点被分为一个类别，另一侧的点被分为另一个类别。在逻辑回归中，这个边界在特征空间中是线性的。",
    diagram: "",
    terms: ["supervised_learning","svm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 46,
    q: "What is the purpose of the softmax function in multi-class classification?",
    qChinese: "Softmax函数在多类分类中的目的是什么？",
    options: [
      "A) To reduce the number of features",
      "B) To convert raw scores into a probability distribution over multiple classes",
      "C) To compute the gradient of the loss",
      "D) To normalize input features"
    ],
    optionsChinese: [
      "A) 减少特征数量",
      "B) 将原始分数转换为多个类别上的概率分布",
      "C) 计算损失的梯度",
      "D) 归一化输入特征"
    ],
    answer: 1,
    explanation: "Softmax transforms a vector of raw scores into a probability distribution where all values are between 0 and 1 and sum to 1. Each output represents the probability of belonging to that class. It extends the sigmoid function from binary to multi-class problems and is used with cross-entropy loss.",
    explanationChinese: "Softmax将原始分数向量转换为概率分布，其中所有值在0和1之间且总和为1。每个输出代表属于该类别的概率。它将sigmoid函数从二元扩展到多类问题，并与交叉熵损失一起使用。",
    diagram: "",
    terms: ["supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 47,
    q: "What is gradient clipping used for?",
    qChinese: "梯度裁剪用于什么？",
    options: [
      "A) Speeding up convergence",
      "B) Reducing the number of parameters",
      "C) Preventing exploding gradients by capping gradient values",
      "D) Increasing the learning rate automatically"
    ],
    optionsChinese: [
      "A) 加速收敛",
      "B) 减少参数数量",
      "C) 通过限制梯度值来防止梯度爆炸",
      "D) 自动增加学习率"
    ],
    answer: 2,
    explanation: "Gradient clipping prevents the exploding gradient problem by capping gradient values to a maximum threshold during backpropagation. When gradients exceed this threshold, they are scaled down. This stabilizes training, especially in recurrent neural networks where gradients can grow exponentially across time steps.",
    explanationChinese: "梯度裁剪通过在反向传播期间将梯度值限制在最大阈值来防止梯度爆炸问题。当梯度超过此阈值时，它们会被缩小。这稳定了训练，特别是在循环神经网络中，梯度可能在时间步上指数增长。",
    diagram: "",
    terms: ["gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 48,
    q: "Which optimizer adapts the learning rate for each parameter individually?",
    qChinese: "哪个优化器为每个参数单独自适应学习率？",
    options: [
      "A) Batch gradient descent",
      "B) Normal equation",
      "C) Standard SGD without momentum",
      "D) Adam optimizer"
    ],
    optionsChinese: [
      "A) 批量梯度下降",
      "B) 正规方程",
      "C) 没有动量的标准SGD",
      "D) Adam优化器"
    ],
    answer: 3,
    explanation: "Adam (Adaptive Moment Estimation) combines the benefits of AdaGrad and RMSProp by maintaining per-parameter learning rates using first and second moment estimates of gradients. It adapts the learning rate for each parameter individually, generally converging faster and requiring less manual tuning than standard SGD.",
    explanationChinese: "Adam（自适应矩估计）结合了AdaGrad和RMSProp的优点，通过使用梯度的一阶和二阶矩估计来维护每个参数的学习率。它为每个参数单独调整学习率，通常比标准SGD收敛更快，需要更少的手动调整。",
    diagram: "",
    terms: ["gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 49,
    q: "What is momentum in gradient descent?",
    qChinese: "梯度下降中的动量是什么？",
    options: [
      "A) An acceleration technique that accumulates past gradients to speed up convergence",
      "B) The initial value of the weights",
      "C) The maximum number of epochs",
      "D) The size of the mini-batch"
    ],
    optionsChinese: [
      "A) 累积过去梯度以加速收敛的加速技术",
      "B) 权重的初始值",
      "C) 最大epoch数",
      "D) 小批量的大小"
    ],
    answer: 0,
    explanation: "Momentum adds a fraction of the previous update to the current update, helping the optimizer move faster in consistent directions and dampening oscillations. It acts like a ball rolling downhill, accumulating speed. This helps navigate flat regions and saddle points more efficiently than standard gradient descent.",
    explanationChinese: "动量将上一次更新的一部分添加到当前更新中，帮助优化器在一致的方向上更快移动并减弱振荡。它像一个球滚下山坡，积累速度。这帮助比标准梯度下降更有效地通过平坦区域和鞍点。",
    diagram: "",
    terms: ["gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 50,
    q: "What is the vanishing gradient problem?",
    qChinese: "什么是梯度消失问题？",
    options: [
      "A) When gradients grow too large during training",
      "B) When gradients become extremely small, effectively stopping learning",
      "C) When the model runs out of memory",
      "D) When the loss function has no gradient"
    ],
    optionsChinese: [
      "A) 训练期间梯度变得过大",
      "B) 梯度变得极小，有效地停止了学习",
      "C) 当模型内存不足时",
      "D) 当损失函数没有梯度时"
    ],
    answer: 1,
    explanation: "The vanishing gradient problem occurs when gradients become exponentially small during backpropagation through many layers. This causes earlier layers to learn extremely slowly or not at all. Solutions include using ReLU activation functions, batch normalization, skip connections, and proper weight initialization.",
    explanationChinese: "梯度消失问题发生在梯度在通过多层的反向传播中变得指数级小时。这导致较早的层学习极其缓慢或根本不学习。解决方案包括使用ReLU激活函数、批量归一化、跳跃连接和正确的权重初始化。",
    diagram: "",
    terms: ["gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 51,
    q: "What is the difference between convex and non-convex loss functions?",
    qChinese: "凸损失函数和非凸损失函数有什么区别？",
    options: [
      "A) Convex functions always produce higher loss",
      "B) Non-convex functions are always smoother",
      "C) Convex functions have a single global minimum; non-convex may have multiple local minima",
      "D) There is no practical difference"
    ],
    optionsChinese: [
      "A) 凸函数总是产生更高的损失",
      "B) 非凸函数总是更平滑",
      "C) 凸函数有单个全局最小值；非凸可能有多个局部最小值",
      "D) 没有实际区别"
    ],
    answer: 2,
    explanation: "A convex loss function has a single global minimum, meaning gradient descent is guaranteed to find the optimal solution. Non-convex functions have multiple local minima and saddle points, making optimization harder. Linear regression has a convex loss, while neural networks typically have non-convex losses.",
    explanationChinese: "凸损失函数有单个全局最小值，意味着梯度下降保证能找到最优解。非凸函数有多个局部最小值和鞍点，使优化更困难。线性回归有凸损失，而神经网络通常有非凸损失。",
    diagram: "",
    terms: ["gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 52,
    q: "What does Mean Absolute Error (MAE) measure?",
    qChinese: "平均绝对误差（MAE）衡量什么？",
    options: [
      "A) The squared differences between predictions and actual values",
      "B) The percentage of correct predictions",
      "C) The correlation between features and target",
      "D) The average of absolute differences between predictions and actual values"
    ],
    optionsChinese: [
      "A) 预测值与实际值之间差异的平方",
      "B) 正确预测的百分比",
      "C) 特征与目标之间的相关性",
      "D) 预测值与实际值之间绝对差异的平均值"
    ],
    answer: 3,
    explanation: "MAE calculates the average of absolute differences between predicted and actual values. Unlike MSE, it does not square errors, making it less sensitive to outliers. MAE provides an interpretable measure in the same units as the target variable. It is useful when all errors should be weighted equally.",
    explanationChinese: "MAE计算预测值与实际值之间绝对差异的平均值。与MSE不同，它不对误差平方，使其对异常值不太敏感。MAE提供了与目标变量相同单位的可解释度量。当所有误差应被同等加权时，它很有用。",
    diagram: "",
    terms: ["supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 53,
    q: "What is the role of the intercept (bias) term in linear regression?",
    qChinese: "截距（偏置）项在线性回归中的作用是什么？",
    options: [
      "A) It allows the regression line to shift vertically, not passing through the origin",
      "B) It controls the learning rate",
      "C) It measures the model's accuracy",
      "D) It regularizes the model weights"
    ],
    optionsChinese: [
      "A) 它允许回归线垂直移动，不通过原点",
      "B) 它控制学习率",
      "C) 它衡量模型的准确度",
      "D) 它正则化模型权重"
    ],
    answer: 0,
    explanation: "The intercept or bias term b in y = wx + b allows the regression line to shift up or down, so it does not have to pass through the origin. Without it, the model would be forced to predict zero when all features are zero, which may not match the data distribution.",
    explanationChinese: "y = wx + b中的截距或偏置项b允许回归线上下移动，使其不必通过原点。没有它，当所有特征为零时模型将被迫预测零，这可能不匹配数据分布。",
    diagram: "",
    terms: ["supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 54,
    q: "What is the difference between L1 and L2 loss in regression?",
    qChinese: "回归中L1和L2损失有什么区别？",
    options: [
      "A) L1 uses squared errors; L2 uses absolute errors",
      "B) L1 uses absolute errors; L2 uses squared errors",
      "C) Both use the same calculation",
      "D) L1 is for classification; L2 is for regression"
    ],
    optionsChinese: [
      "A) L1使用平方误差；L2使用绝对误差",
      "B) L1使用绝对误差；L2使用平方误差",
      "C) 两者使用相同的计算",
      "D) L1用于分类；L2用于回归"
    ],
    answer: 1,
    explanation: "L1 loss (MAE) computes the sum of absolute differences, making it robust to outliers. L2 loss (MSE) computes the sum of squared differences, penalizing large errors more heavily. L2 is differentiable everywhere, making optimization smoother. L1 tends to produce sparser solutions in regularization.",
    explanationChinese: "L1损失（MAE）计算绝对差异之和，对异常值具有鲁棒性。L2损失（MSE）计算平方差异之和，对大误差惩罚更重。L2处处可微，使优化更平滑。L1在正则化中倾向于产生更稀疏的解。",
    diagram: "",
    terms: ["regularization","supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 55,
    q: "What is the odds ratio in logistic regression?",
    qChinese: "逻辑回归中的优势比是什么？",
    options: [
      "A) The probability of the positive class",
      "B) The accuracy of the model",
      "C) The ratio of the probability of success to the probability of failure",
      "D) The number of positive samples divided by total samples"
    ],
    optionsChinese: [
      "A) 正类的概率",
      "B) 模型的准确度",
      "C) 成功概率与失败概率的比率",
      "D) 正样本数量除以总样本数"
    ],
    answer: 2,
    explanation: "The odds ratio is p/(1-p), where p is the probability of the event occurring. In logistic regression, the log of the odds ratio is modeled as a linear function of the features. Exponentiating a coefficient gives the multiplicative change in odds for a one-unit increase in that feature.",
    explanationChinese: "优势比是p/(1-p)，其中p是事件发生的概率。在逻辑回归中，优势比的对数被建模为特征的线性函数。对系数取指数给出该特征增加一个单位时优势的乘法变化。",
    diagram: "",
    terms: ["supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  // ===== DECISION TREES, RANDOM FORESTS, ENSEMBLE METHODS (56-80) =====
  {
    id: 56,
    q: "How does a decision tree make predictions?",
    qChinese: "决策树如何进行预测？",
    options: [
      "A) By computing weighted sums of features",
      "B) By projecting data into a lower-dimensional space",
      "C) By finding the nearest neighbors",
      "D) By recursively splitting data based on feature thresholds into a tree structure"
    ],
    optionsChinese: [
      "A) 通过计算特征的加权和",
      "B) 通过将数据投影到低维空间",
      "C) 通过寻找最近邻",
      "D) 通过基于特征阈值递归分割数据形成树结构"
    ],
    answer: 3,
    explanation: "A decision tree splits the dataset recursively at each node using feature conditions that best separate the data. At each leaf node, it assigns a prediction. For classification, the leaf outputs the majority class; for regression, it outputs the mean value. The tree structure enables interpretable decisions.",
    explanationChinese: "决策树在每个节点使用最能分离数据的特征条件递归地分割数据集。在每个叶节点，它分配一个预测。对于分类，叶节点输出多数类；对于回归，输出平均值。树结构使决策可解释。",
    diagram: "",
    terms: ["decision_tree","supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 57,
    q: "What is Gini impurity used for in decision trees?",
    qChinese: "基尼不纯度在决策树中用于什么？",
    options: [
      "A) Measuring how mixed the classes are at a node to determine the best split",
      "B) Measuring the depth of the tree",
      "C) Calculating the learning rate",
      "D) Counting the number of features"
    ],
    optionsChinese: [
      "A) 测量节点处类别的混合程度以确定最佳分割",
      "B) 测量树的深度",
      "C) 计算学习率",
      "D) 计算特征数量"
    ],
    answer: 0,
    explanation: "Gini impurity measures the probability of misclassifying a randomly chosen element if labeled according to the node's class distribution. A Gini of 0 means all samples belong to one class (pure node). Decision trees select splits that maximize the reduction in Gini impurity across child nodes.",
    explanationChinese: "基尼不纯度衡量如果根据节点的类别分布标记随机选择的元素，将其错误分类的概率。基尼值为0意味着所有样本属于一个类（纯节点）。决策树选择最大化子节点间基尼不纯度降低的分割。",
    diagram: "",
    terms: ["decision_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 58,
    q: "What is information gain in the context of decision trees?",
    qChinese: "在决策树的上下文中，信息增益是什么？",
    options: [
      "A) The total amount of data used for training",
      "B) The reduction in entropy achieved by splitting on a particular feature",
      "C) The number of branches in the tree",
      "D) The accuracy improvement after pruning"
    ],
    optionsChinese: [
      "A) 用于训练的数据总量",
      "B) 通过在特定特征上分割而实现的熵减少",
      "C) 树中的分支数量",
      "D) 剪枝后的准确度提高"
    ],
    answer: 1,
    explanation: "Information gain measures the reduction in entropy (uncertainty) after splitting data on a feature. Entropy quantifies the disorder in a set. The feature with the highest information gain is chosen for splitting because it provides the most useful separation of classes at that node.",
    explanationChinese: "信息增益衡量在某个特征上分割数据后熵（不确定性）的减少。熵量化集合中的无序程度。信息增益最高的特征被选择用于分割，因为它在该节点提供了最有用的类别分离。",
    diagram: "",
    terms: ["decision_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 59,
    q: "What is pruning in decision trees?",
    qChinese: "决策树中的剪枝是什么？",
    options: [
      "A) Adding more branches to increase accuracy",
      "B) Converting the tree into a linear model",
      "C) Removing branches that provide little predictive power to reduce overfitting",
      "D) Increasing the depth of the tree"
    ],
    optionsChinese: [
      "A) 添加更多分支以提高准确度",
      "B) 将树转换为线性模型",
      "C) 移除提供很少预测力的分支以减少过拟合",
      "D) 增加树的深度"
    ],
    answer: 2,
    explanation: "Pruning removes tree branches that add complexity without improving generalization. Pre-pruning stops growth early using constraints like maximum depth. Post-pruning grows the full tree then removes branches that do not significantly improve validation performance. Both techniques help prevent overfitting.",
    explanationChinese: "剪枝移除增加复杂性但不改善泛化能力的树分支。预剪枝使用最大深度等约束提前停止生长。后剪枝先生长完整树，然后移除不显著改善验证性能的分支。两种技术都有助于防止过拟合。",
    diagram: "",
    terms: ["decision_tree","overfitting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 60,
    q: "Why are decision trees prone to overfitting?",
    qChinese: "为什么决策树容易过拟合？",
    options: [
      "A) They cannot capture non-linear relationships",
      "B) They have too few parameters",
      "C) They always underfit the data",
      "D) They can grow deep enough to memorize every training sample"
    ],
    optionsChinese: [
      "A) 它们无法捕获非线性关系",
      "B) 它们参数太少",
      "C) 它们总是对数据欠拟合",
      "D) 它们可以生长得足够深以记忆每个训练样本"
    ],
    answer: 3,
    explanation: "An unrestricted decision tree can create highly specific rules for each training sample by growing very deep, effectively memorizing the data. This leads to high variance and poor generalization. Limiting tree depth, requiring minimum samples per leaf, and pruning are common remedies for this issue.",
    explanationChinese: "不受限制的决策树可以通过生长非常深来为每个训练样本创建高度特定的规则，有效地记忆数据。这导致高方差和差泛化能力。限制树深度、要求每个叶子的最少样本数和剪枝是解决此问题的常见方法。",
    diagram: "",
    terms: ["decision_tree","overfitting","bias_variance"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 61,
    q: "What is a Random Forest?",
    qChinese: "什么是随机森林？",
    options: [
      "A) An ensemble of decision trees trained on random subsets of data and features",
      "B) A single deep decision tree",
      "C) A clustering algorithm for tree-shaped data",
      "D) A type of neural network"
    ],
    optionsChinese: [
      "A) 在数据和特征的随机子集上训练的决策树集合",
      "B) 单个深决策树",
      "C) 用于树形数据的聚类算法",
      "D) 一种神经网络"
    ],
    answer: 0,
    explanation: "Random Forest is an ensemble method that builds multiple decision trees, each trained on a bootstrap sample of the data using a random subset of features at each split. Predictions are aggregated by majority voting for classification or averaging for regression. This reduces variance and overfitting.",
    explanationChinese: "随机森林是一种集成方法，构建多棵决策树，每棵树在数据的自助采样上训练，并在每次分割时使用特征的随机子集。预测通过分类的多数投票或回归的平均来聚合。这减少了方差和过拟合。",
    diagram: "",
    terms: ["random_forest","ensemble_methods","decision_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 62,
    q: "What is bagging (Bootstrap Aggregating)?",
    qChinese: "什么是Bagging（自助聚合）？",
    options: [
      "A) A feature selection technique",
      "B) Training multiple models on different bootstrap samples and aggregating predictions",
      "C) Removing features from the dataset",
      "D) A method for data cleaning"
    ],
    optionsChinese: [
      "A) 一种特征选择技术",
      "B) 在不同的自助采样上训练多个模型并聚合预测",
      "C) 从数据集中移除特征",
      "D) 一种数据清洗方法"
    ],
    answer: 1,
    explanation: "Bagging creates multiple bootstrap samples by randomly sampling the training data with replacement. A separate model is trained on each sample, and predictions are averaged or voted upon. This technique reduces variance without increasing bias, making it effective for high-variance models like decision trees.",
    explanationChinese: "Bagging通过有放回地随机采样训练数据来创建多个自助样本。在每个样本上训练一个单独的模型，并对预测进行平均或投票。此技术在不增加偏差的情况下减少方差，对决策树等高方差模型很有效。",
    diagram: "",
    terms: ["ensemble_methods","random_forest","bias_variance"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 63,
    q: "What is boosting in ensemble learning?",
    qChinese: "集成学习中的提升方法是什么？",
    options: [
      "A) Training models in parallel on random subsets",
      "B) Removing poorly performing models from the ensemble",
      "C) Training models sequentially where each corrects the errors of the previous one",
      "D) Combining unrelated models randomly"
    ],
    optionsChinese: [
      "A) 在随机子集上并行训练模型",
      "B) 从集合中移除表现差的模型",
      "C) 顺序训练模型，每个模型纠正前一个的错误",
      "D) 随机组合不相关的模型"
    ],
    answer: 2,
    explanation: "Boosting trains models sequentially, with each new model focusing on the examples that previous models misclassified. It combines many weak learners into a strong learner. Popular boosting algorithms include AdaBoost, Gradient Boosting, XGBoost, and LightGBM. Boosting primarily reduces bias.",
    explanationChinese: "提升方法顺序训练模型，每个新模型关注前一个模型错误分类的样本。它将许多弱学习器组合成强学习器。流行的提升算法包括AdaBoost、梯度提升、XGBoost和LightGBM。提升方法主要减少偏差。",
    diagram: "",
    terms: ["ensemble_methods","bias_variance"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 64,
    q: "How does Random Forest reduce overfitting compared to a single decision tree?",
    qChinese: "与单棵决策树相比，随机森林如何减少过拟合？",
    options: [
      "A) By using a deeper tree structure",
      "B) By increasing the bias of the model",
      "C) By using fewer features overall",
      "D) By averaging predictions from many diverse trees, reducing variance"
    ],
    optionsChinese: [
      "A) 通过使用更深的树结构",
      "B) 通过增加模型的偏差",
      "C) 通过总体上使用更少的特征",
      "D) 通过对多棵不同树的预测取平均来减少方差"
    ],
    answer: 3,
    explanation: "Random Forest reduces overfitting by building many decorrelated trees through bootstrap sampling and random feature selection. Individual trees may overfit, but their errors are different due to randomization. Aggregating these diverse predictions cancels out individual errors, dramatically reducing overall variance.",
    explanationChinese: "随机森林通过自助采样和随机特征选择构建许多去相关的树来减少过拟合。单棵树可能过拟合，但由于随机化，它们的错误不同。聚合这些多样的预测抵消了个别错误，显著降低了总体方差。",
    diagram: "",
    terms: ["random_forest","overfitting","ensemble_methods","bias_variance"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 65,
    q: "What is the out-of-bag (OOB) error in Random Forest?",
    qChinese: "随机森林中的袋外（OOB）误差是什么？",
    options: [
      "A) The error estimated using samples not included in a tree's bootstrap sample",
      "B) The error on the training set",
      "C) The error after pruning the trees",
      "D) The error on the validation set"
    ],
    optionsChinese: [
      "A) 使用未包含在树的自助样本中的样本估计的误差",
      "B) 训练集上的误差",
      "C) 剪枝后的误差",
      "D) 验证集上的误差"
    ],
    answer: 0,
    explanation: "In bagging, each bootstrap sample excludes about 37% of the original data. The OOB error evaluates each tree on its excluded samples, then averages across all trees. This provides a built-in validation estimate without needing a separate validation set, similar to cross-validation results.",
    explanationChinese: "在Bagging中，每个自助样本排除了约37%的原始数据。OOB误差在每棵树被排除的样本上评估，然后在所有树上取平均。这提供了内置的验证估计，无需单独的验证集，类似于交叉验证结果。",
    diagram: "",
    terms: ["random_forest","ensemble_methods","cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 66,
    q: "What is feature importance in Random Forest?",
    qChinese: "随机森林中的特征重要性是什么？",
    options: [
      "A) The number of times a feature appears in the dataset",
      "B) A score measuring how much each feature contributes to reducing prediction error",
      "C) The correlation between features",
      "D) The variance of each feature"
    ],
    optionsChinese: [
      "A) 特征在数据集中出现的次数",
      "B) 衡量每个特征对减少预测误差贡献程度的分数",
      "C) 特征之间的相关性",
      "D) 每个特征的方差"
    ],
    answer: 1,
    explanation: "Feature importance in Random Forest measures each feature's contribution to reducing impurity across all trees. Features used in splits that significantly decrease Gini impurity or entropy receive higher importance scores. This helps identify which variables are most predictive and can guide feature selection.",
    explanationChinese: "随机森林中的特征重要性衡量每个特征在所有树中对减少不纯度的贡献。在显著降低基尼不纯度或熵的分割中使用的特征获得更高的重要性分数。这有助于识别哪些变量最具预测性，并可指导特征选择。",
    diagram: "",
    terms: ["random_forest","feature_engineering","decision_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 67,
    q: "What is AdaBoost?",
    qChinese: "什么是AdaBoost？",
    options: [
      "A) A bagging technique using deep trees",
      "B) A dimensionality reduction method",
      "C) A boosting algorithm that assigns higher weights to misclassified samples",
      "D) A clustering algorithm"
    ],
    optionsChinese: [
      "A) 使用深树的Bagging技术",
      "B) 一种降维方法",
      "C) 对错误分类的样本分配更高权重的提升算法",
      "D) 一种聚类算法"
    ],
    answer: 2,
    explanation: "AdaBoost (Adaptive Boosting) trains weak learners sequentially, increasing the weight of misclassified samples so subsequent learners focus on harder examples. Each learner's contribution is weighted by its accuracy. The final prediction is a weighted vote of all learners, producing a strong combined classifier.",
    explanationChinese: "AdaBoost（自适应提升）顺序训练弱学习器，增加错误分类样本的权重，使后续学习器关注更难的样本。每个学习器的贡献按其准确度加权。最终预测是所有学习器的加权投票，产生一个强组合分类器。",
    diagram: "",
    terms: ["ensemble_methods","decision_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 68,
    q: "What is Gradient Boosting?",
    qChinese: "什么是梯度提升？",
    options: [
      "A) Using gradient descent to train a single model",
      "B) A method for feature normalization",
      "C) Training trees in parallel on random data subsets",
      "D) Sequentially building trees that fit the residual errors of the previous model"
    ],
    optionsChinese: [
      "A) 使用梯度下降训练单个模型",
      "B) 一种特征归一化方法",
      "C) 在随机数据子集上并行训练树",
      "D) 顺序构建拟合前一个模型残差的树"
    ],
    answer: 3,
    explanation: "Gradient Boosting builds an ensemble by sequentially adding trees that predict the residual errors (gradients of the loss) from the current model. Each new tree corrects the mistakes of the combined previous trees. This approach is powerful but can overfit, so regularization and early stopping are important.",
    explanationChinese: "梯度提升通过顺序添加预测当前模型残差（损失的梯度）的树来构建集成。每棵新树纠正组合前几棵树的错误。这种方法很强大但可能过拟合，因此正则化和早停很重要。",
    diagram: "",
    terms: ["ensemble_methods","gradient_descent","overfitting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 69,
    q: "What advantage does XGBoost have over standard Gradient Boosting?",
    qChinese: "XGBoost相比标准梯度提升有什么优势？",
    options: [
      "A) It includes built-in regularization, parallel processing, and handles missing values",
      "B) It uses fewer trees",
      "C) It does not use decision trees",
      "D) It only works with binary classification"
    ],
    optionsChinese: [
      "A) 它包含内置正则化、并行处理并处理缺失值",
      "B) 它使用更少的树",
      "C) 它不使用决策树",
      "D) 它只适用于二元分类"
    ],
    answer: 0,
    explanation: "XGBoost (Extreme Gradient Boosting) enhances standard gradient boosting with L1 and L2 regularization to prevent overfitting, parallel tree construction for speed, built-in handling of missing values, and tree pruning. These optimizations make it one of the most popular algorithms for competitions.",
    explanationChinese: "XGBoost（极端梯度提升）通过L1和L2正则化防止过拟合、并行树构建提高速度、内置处理缺失值和树剪枝来增强标准梯度提升。这些优化使其成为竞赛中最受欢迎的算法之一。",
    diagram: "",
    terms: ["ensemble_methods","regularization","decision_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 70,
    q: "What is stacking in ensemble learning?",
    qChinese: "集成学习中的堆叠是什么？",
    options: [
      "A) Training the same model multiple times on different data",
      "B) Using predictions from multiple base models as input features for a meta-learner",
      "C) Combining features from different datasets",
      "D) Running models in parallel without combining outputs"
    ],
    optionsChinese: [
      "A) 在不同数据上多次训练同一模型",
      "B) 使用多个基模型的预测作为元学习器的输入特征",
      "C) 组合来自不同数据集的特征",
      "D) 并行运行模型而不组合输出"
    ],
    answer: 1,
    explanation: "Stacking trains multiple diverse base models and feeds their predictions as features into a second-level meta-learner that learns how to best combine them. This approach can capture complementary strengths of different algorithms. Cross-validation is used to generate base model predictions to avoid data leakage.",
    explanationChinese: "堆叠训练多个不同的基模型，并将它们的预测作为特征输入到第二层元学习器中，后者学习如何最好地组合它们。这种方法可以捕获不同算法的互补优势。使用交叉验证来生成基模型预测以避免数据泄漏。",
    diagram: "",
    terms: ["ensemble_methods","cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 71,
    q: "What splitting criterion does CART (Classification and Regression Trees) use for classification?",
    qChinese: "CART（分类和回归树）用于分类的分裂标准是什么？",
    options: [
      "A) Information gain ratio",
      "B) Mean squared error",
      "C) Gini impurity",
      "D) Chi-squared statistic"
    ],
    optionsChinese: [
      "A) 信息增益比",
      "B) 均方误差",
      "C) 基尼不纯度",
      "D) 卡方统计量"
    ],
    answer: 2,
    explanation: "CART uses Gini impurity as its default splitting criterion for classification tasks. It creates binary splits by searching for the feature and threshold that produces the largest reduction in Gini impurity. For regression tasks, CART uses variance reduction or MSE. ID3 and C4.5 use entropy-based criteria.",
    explanationChinese: "CART使用基尼不纯度作为分类任务的默认分裂标准。它通过搜索产生最大基尼不纯度降低的特征和阈值来创建二元分割。对于回归任务，CART使用方差减少或MSE。ID3和C4.5使用基于熵的标准。",
    diagram: "",
    terms: ["decision_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 72,
    q: "What is the main difference between bagging and boosting?",
    qChinese: "Bagging和Boosting之间的主要区别是什么？",
    options: [
      "A) Bagging uses neural networks; boosting uses trees",
      "B) Boosting uses random subsets of features; bagging does not",
      "C) Bagging always outperforms boosting",
      "D) Bagging trains models independently in parallel; boosting trains them sequentially"
    ],
    optionsChinese: [
      "A) Bagging使用神经网络；Boosting使用树",
      "B) Boosting使用特征的随机子集；Bagging不使用",
      "C) Bagging总是优于Boosting",
      "D) Bagging独立并行训练模型；Boosting顺序训练"
    ],
    answer: 3,
    explanation: "Bagging trains multiple models independently on bootstrap samples and combines them, primarily reducing variance. Boosting trains models sequentially where each focuses on previous errors, primarily reducing bias. Bagging is more robust to overfitting, while boosting can achieve lower bias but risks overfitting.",
    explanationChinese: "Bagging在自助样本上独立训练多个模型并组合它们，主要减少方差。Boosting顺序训练模型，每个关注前面的错误，主要减少偏差。Bagging对过拟合更鲁棒，而Boosting可以实现更低的偏差但有过拟合风险。",
    diagram: "",
    terms: ["ensemble_methods","bias_variance","random_forest"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 73,
    q: "What is a weak learner in the context of boosting?",
    qChinese: "在提升方法的上下文中，什么是弱学习器？",
    options: [
      "A) A model that performs only slightly better than random guessing",
      "B) A model that achieves 100% accuracy on training data",
      "C) A model that has been overtrained",
      "D) A model with high variance"
    ],
    optionsChinese: [
      "A) 仅比随机猜测略好的模型",
      "B) 在训练数据上达到100%准确率的模型",
      "C) 已经过度训练的模型",
      "D) 高方差的模型"
    ],
    answer: 0,
    explanation: "A weak learner performs only slightly better than random chance, typically a simple model like a decision stump (one-level tree). Boosting combines many weak learners into a strong learner by focusing each subsequent learner on the mistakes of prior ones, creating a powerful ensemble.",
    explanationChinese: "弱学习器的表现仅略好于随机机会，通常是简单模型如决策桩（一层树）。Boosting通过让每个后续学习器关注前面的错误，将许多弱学习器组合成强学习器，创建一个强大的集成。",
    diagram: "",
    terms: ["ensemble_methods"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 74,
    q: "How does a Random Forest handle feature selection at each split?",
    qChinese: "随机森林如何在每次分割时处理特征选择？",
    options: [
      "A) It uses all features for every split",
      "B) It considers a random subset of features at each split point",
      "C) It uses only the most important feature",
      "D) It removes features after each split"
    ],
    optionsChinese: [
      "A) 每次分割使用所有特征",
      "B) 在每个分割点考虑特征的随机子集",
      "C) 仅使用最重要的特征",
      "D) 每次分割后移除特征"
    ],
    answer: 1,
    explanation: "At each split, Random Forest randomly selects a subset of features and finds the best split among only those features. This randomization decorrelates the trees, ensuring diversity in the ensemble. The typical subset size is the square root of total features for classification and one-third for regression.",
    explanationChinese: "在每次分割时，随机森林随机选择特征的子集，并仅在这些特征中找到最佳分割。这种随机化使树去相关，确保集成中的多样性。典型的子集大小是分类时特征总数的平方根，回归时为三分之一。",
    diagram: "",
    terms: ["random_forest","decision_tree","feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 75,
    q: "What is a voting classifier in ensemble learning?",
    qChinese: "集成学习中的投票分类器是什么？",
    options: [
      "A) A single model that outputs probability scores",
      "B) A model that only works with binary classes",
      "C) A method that combines predictions from multiple models using majority voting or averaging",
      "D) A technique for data preprocessing"
    ],
    optionsChinese: [
      "A) 输出概率分数的单一模型",
      "B) 仅适用于二元类别的模型",
      "C) 使用多数投票或平均来组合多个模型预测的方法",
      "D) 一种数据预处理技术"
    ],
    answer: 2,
    explanation: "A voting classifier aggregates predictions from multiple different models. Hard voting uses majority class predictions, while soft voting averages predicted probabilities before making the final decision. Combining diverse models often outperforms any single model by reducing individual model weaknesses.",
    explanationChinese: "投票分类器聚合来自多个不同模型的预测。硬投票使用多数类别预测，软投票在做最终决定前对预测概率取平均。组合多样的模型通常通过减少单个模型的弱点来优于任何单个模型。",
    diagram: "",
    terms: ["ensemble_methods"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 76,
    q: "What is the maximum depth hyperparameter in a decision tree?",
    qChinese: "决策树中的最大深度超参数是什么？",
    options: [
      "A) The total number of features used",
      "B) The number of training samples",
      "C) The maximum number of trees in the forest",
      "D) The maximum number of levels from root to the deepest leaf"
    ],
    optionsChinese: [
      "A) 使用的特征总数",
      "B) 训练样本的数量",
      "C) 森林中树的最大数量",
      "D) 从根到最深叶子的最大层数"
    ],
    answer: 3,
    explanation: "Maximum depth limits how many levels a decision tree can grow from root to leaf. Shallow trees are simpler and may underfit, while deep trees can overfit by memorizing training data. Tuning this hyperparameter helps find the right balance between model complexity and generalization performance.",
    explanationChinese: "最大深度限制决策树从根到叶可以生长多少层。浅树更简单，可能欠拟合，而深树可能通过记忆训练数据而过拟合。调整此超参数有助于在模型复杂性和泛化性能之间找到正确的平衡。",
    diagram: "",
    terms: ["decision_tree","overfitting","bias_variance"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 77,
    q: "What is the n_estimators parameter in Random Forest?",
    qChinese: "随机森林中的n_estimators参数是什么？",
    options: [
      "A) The number of trees in the forest",
      "B) The number of features to consider at each split",
      "C) The depth of each tree",
      "D) The number of training samples"
    ],
    optionsChinese: [
      "A) 森林中树的数量",
      "B) 每次分割时考虑的特征数量",
      "C) 每棵树的深度",
      "D) 训练样本的数量"
    ],
    answer: 0,
    explanation: "The n_estimators parameter specifies how many decision trees to include in the Random Forest ensemble. More trees generally improve performance but with diminishing returns and increased computation time. There is no risk of overfitting from too many trees in bagging, unlike in boosting methods.",
    explanationChinese: "n_estimators参数指定随机森林集成中包含多少棵决策树。更多的树通常改善性能，但收益递减且计算时间增加。在Bagging中，树太多不会有过拟合风险，不像在Boosting方法中。",
    diagram: "",
    terms: ["random_forest","ensemble_methods"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 78,
    q: "What is LightGBM designed to optimize compared to XGBoost?",
    qChinese: "LightGBM相比XGBoost旨在优化什么？",
    options: [
      "A) Model accuracy only",
      "B) Training speed and memory usage with large datasets using histogram-based splitting",
      "C) Number of hyperparameters",
      "D) Feature importance calculation"
    ],
    optionsChinese: [
      "A) 仅模型准确度",
      "B) 使用基于直方图的分割来优化大型数据集的训练速度和内存使用",
      "C) 超参数数量",
      "D) 特征重要性计算"
    ],
    answer: 1,
    explanation: "LightGBM uses histogram-based splitting and leaf-wise tree growth to achieve faster training and lower memory usage than XGBoost on large datasets. It bins continuous features into discrete histograms, reducing computation. Its leaf-wise strategy grows the leaf with the largest loss reduction first.",
    explanationChinese: "LightGBM使用基于直方图的分割和叶子级的树生长，在大型数据集上实现比XGBoost更快的训练和更低的内存使用。它将连续特征分箱到离散直方图中，减少计算。其叶子级策略优先增长损失降低最大的叶子。",
    diagram: "",
    terms: ["ensemble_methods","decision_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 79,
    q: "What is CatBoost specifically designed to handle?",
    qChinese: "CatBoost专门设计来处理什么？",
    options: [
      "A) Only numerical features",
      "B) Image data only",
      "C) Categorical features natively without extensive preprocessing",
      "D) Time series data exclusively"
    ],
    optionsChinese: [
      "A) 仅数值特征",
      "B) 仅图像数据",
      "C) 原生处理分类特征，无需大量预处理",
      "D) 专门处理时间序列数据"
    ],
    answer: 2,
    explanation: "CatBoost handles categorical features natively using ordered target statistics, eliminating the need for manual encoding like one-hot or label encoding. It also uses ordered boosting to reduce prediction shift and overfitting. This makes it particularly convenient for datasets with many categorical variables.",
    explanationChinese: "CatBoost使用有序目标统计原生处理分类特征，消除了独热编码或标签编码等手动编码的需要。它还使用有序提升来减少预测偏移和过拟合。这使其对具有许多分类变量的数据集特别方便。",
    diagram: "",
    terms: ["ensemble_methods","feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 80,
    q: "When should you prefer Random Forest over Gradient Boosting?",
    qChinese: "什么时候应该优先选择随机森林而非梯度提升？",
    options: [
      "A) When you need the absolute best accuracy regardless of training time",
      "B) When all features are categorical",
      "C) When you have a very small dataset",
      "D) When you want a robust model with less hyperparameter tuning and lower overfitting risk"
    ],
    optionsChinese: [
      "A) 当你需要不考虑训练时间的最高准确度时",
      "B) 当所有特征都是分类的时",
      "C) 当你有非常小的数据集时",
      "D) 当你想要一个需要更少超参数调整和更低过拟合风险的鲁棒模型时"
    ],
    answer: 3,
    explanation: "Random Forest is preferred when you need a reliable model with minimal tuning, as it is less prone to overfitting and has fewer critical hyperparameters. Gradient Boosting often achieves higher accuracy but requires careful tuning of learning rate, tree depth, and number of estimators to avoid overfitting.",
    explanationChinese: "当你需要一个最少调整的可靠模型时，优先选择随机森林，因为它不太容易过拟合且关键超参数更少。梯度提升通常能达到更高的准确度，但需要仔细调整学习率、树深度和估计器数量以避免过拟合。",
    diagram: "",
    terms: ["random_forest","ensemble_methods","overfitting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  // ===== SVM, KNN, NAIVE BAYES (81-105) =====
  {
    id: 81,
    q: "What is the main objective of a Support Vector Machine (SVM)?",
    qChinese: "支持向量机（SVM）的主要目标是什么？",
    options: [
      "A) To find the hyperplane that maximizes the margin between classes",
      "B) To minimize the number of features",
      "C) To cluster data into groups",
      "D) To reduce the dimensionality of data"
    ],
    optionsChinese: [
      "A) 找到最大化类别之间间隔的超平面",
      "B) 最小化特征数量",
      "C) 将数据聚类成组",
      "D) 降低数据的维度"
    ],
    answer: 0,
    explanation: "SVM finds the optimal hyperplane that separates classes with the maximum margin. The margin is the distance between the hyperplane and the nearest data points from each class, called support vectors. Maximizing this margin improves generalization and creates a robust decision boundary.",
    explanationChinese: "SVM找到以最大间隔分离类别的最优超平面。间隔是超平面与每个类别最近数据点（称为支持向量）之间的距离。最大化此间隔改善泛化并创建鲁棒的决策边界。",
    diagram: "",
    terms: ["svm","supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 82,
    q: "What are support vectors in SVM?",
    qChinese: "SVM中的支持向量是什么？",
    options: [
      "A) All data points in the training set",
      "B) The data points closest to the decision boundary that define the margin",
      "C) The features used for classification",
      "D) The weights of the model"
    ],
    optionsChinese: [
      "A) 训练集中的所有数据点",
      "B) 最接近决策边界并定义间隔的数据点",
      "C) 用于分类的特征",
      "D) 模型的权重"
    ],
    answer: 1,
    explanation: "Support vectors are the training points that lie closest to the decision boundary and directly determine the position and orientation of the hyperplane. Removing other points would not change the boundary. This makes SVM memory-efficient since only support vectors matter for prediction.",
    explanationChinese: "支持向量是最接近决策边界的训练点，直接决定超平面的位置和方向。移除其他点不会改变边界。这使SVM内存高效，因为只有支持向量对预测有影响。",
    diagram: "",
    terms: ["svm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 83,
    q: "What is the kernel trick in SVM?",
    qChinese: "SVM中的核技巧是什么？",
    options: [
      "A) A method for reducing training time",
      "B) A way to reduce the number of support vectors",
      "C) A technique to map data into higher dimensions to find linear separations for non-linear data",
      "D) A method for data normalization"
    ],
    optionsChinese: [
      "A) 减少训练时间的方法",
      "B) 减少支持向量数量的方法",
      "C) 将数据映射到更高维度以找到非线性数据的线性分离的技术",
      "D) 一种数据归一化方法"
    ],
    answer: 2,
    explanation: "The kernel trick enables SVM to handle non-linearly separable data by implicitly mapping it to a higher-dimensional space where a linear separator exists. Common kernels include RBF (Gaussian), polynomial, and sigmoid. The trick computes dot products in the high-dimensional space without explicit transformation.",
    explanationChinese: "核技巧使SVM能够通过隐式地将数据映射到存在线性分隔器的更高维空间来处理非线性可分数据。常见核包括RBF（高斯）、多项式和sigmoid。该技巧在不进行显式变换的情况下在高维空间中计算点积。",
    diagram: "",
    terms: ["svm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 84,
    q: "What is the C parameter in SVM?",
    qChinese: "SVM中的C参数是什么？",
    options: [
      "A) The number of clusters",
      "B) The number of support vectors",
      "C) The kernel type",
      "D) The regularization parameter that controls the trade-off between margin size and misclassification"
    ],
    optionsChinese: [
      "A) 簇的数量",
      "B) 支持向量的数量",
      "C) 核类型",
      "D) 控制间隔大小和错误分类之间权衡的正则化参数"
    ],
    answer: 3,
    explanation: "The C parameter in SVM controls the penalty for misclassified points. A high C value creates a narrow margin with fewer misclassifications (risk of overfitting), while a low C allows a wider margin with more misclassifications (risk of underfitting). It balances margin maximization and training accuracy.",
    explanationChinese: "SVM中的C参数控制对错误分类点的惩罚。高C值创建窄间隔，错误分类更少（过拟合风险），而低C允许更宽的间隔，错误分类更多（欠拟合风险）。它平衡间隔最大化和训练准确度。",
    diagram: "",
    terms: ["svm","regularization","overfitting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 85,
    q: "What is the RBF (Radial Basis Function) kernel?",
    qChinese: "RBF（径向基函数）核是什么？",
    options: [
      "A) A kernel that measures similarity based on distance, creating circular decision boundaries",
      "B) A linear kernel for simple problems",
      "C) A kernel that only works with integer features",
      "D) A kernel that reduces the number of dimensions"
    ],
    optionsChinese: [
      "A) 基于距离度量相似性，创建圆形决策边界的核",
      "B) 用于简单问题的线性核",
      "C) 仅适用于整数特征的核",
      "D) 减少维度数量的核"
    ],
    answer: 0,
    explanation: "The RBF kernel maps data into infinite-dimensional space using Gaussian similarity based on the distance between points. The gamma parameter controls the influence radius of each point. RBF is the most popular SVM kernel because it handles non-linear relationships well and has only one parameter to tune.",
    explanationChinese: "RBF核使用基于点之间距离的高斯相似性将数据映射到无限维空间。gamma参数控制每个点的影响半径。RBF是最流行的SVM核，因为它能很好地处理非线性关系，只有一个参数需要调整。",
    diagram: "",
    terms: ["svm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 86,
    q: "How does K-Nearest Neighbors (KNN) make predictions?",
    qChinese: "K-最近邻（KNN）如何进行预测？",
    options: [
      "A) By learning a weight vector during training",
      "B) By finding the K closest training points and using their labels to predict",
      "C) By building a tree structure from the data",
      "D) By computing cluster centroids"
    ],
    optionsChinese: [
      "A) 通过在训练中学习权重向量",
      "B) 通过找到K个最近的训练点并使用它们的标签进行预测",
      "C) 通过从数据构建树结构",
      "D) 通过计算簇中心"
    ],
    answer: 1,
    explanation: "KNN is a lazy learning algorithm that stores all training data and classifies new points by finding the K nearest neighbors using a distance metric. For classification, it uses majority voting among neighbors; for regression, it averages their values. No explicit training phase is required.",
    explanationChinese: "KNN是一种惰性学习算法，存储所有训练数据，并通过使用距离度量找到K个最近邻来分类新点。对于分类，它使用邻居间的多数投票；对于回归，它取它们值的平均。不需要显式的训练阶段。",
    diagram: "",
    terms: ["supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 87,
    q: "What is the effect of choosing a very small K value in KNN?",
    qChinese: "在KNN中选择非常小的K值有什么影响？",
    options: [
      "A) The model becomes too simple and underfits",
      "B) The model ignores all neighbors",
      "C) The model becomes sensitive to noise and overfits",
      "D) The model becomes computationally expensive"
    ],
    optionsChinese: [
      "A) 模型变得太简单并欠拟合",
      "B) 模型忽略所有邻居",
      "C) 模型对噪声敏感并过拟合",
      "D) 模型计算成本变高"
    ],
    answer: 2,
    explanation: "A small K like 1 makes the model highly sensitive to noise and outliers because predictions depend on a single nearest neighbor. This leads to overfitting with complex, irregular decision boundaries. A larger K smooths the boundaries but may underfit. Odd K values avoid ties in binary classification.",
    explanationChinese: "小的K值如1使模型对噪声和异常值高度敏感，因为预测依赖于单个最近邻。这导致过拟合，决策边界复杂且不规则。较大的K平滑边界但可能欠拟合。奇数K值避免二元分类中的平局。",
    diagram: "",
    terms: ["overfitting","bias_variance"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 88,
    q: "Why is feature scaling important for KNN?",
    qChinese: "为什么特征缩放对KNN很重要？",
    options: [
      "A) It speeds up the training phase",
      "B) It converts categorical features to numerical",
      "C) It reduces the number of neighbors needed",
      "D) KNN uses distance metrics, so features with larger scales would dominate the distance calculation"
    ],
    optionsChinese: [
      "A) 它加速训练阶段",
      "B) 它将分类特征转换为数值",
      "C) 它减少所需的邻居数量",
      "D) KNN使用距离度量，因此尺度较大的特征会主导距离计算"
    ],
    answer: 3,
    explanation: "KNN relies on distance calculations like Euclidean distance. Without scaling, features with larger ranges dominate the distance metric, making features with smaller ranges nearly irrelevant. Standardization or min-max scaling ensures all features contribute equally to distance computations for fair comparisons.",
    explanationChinese: "KNN依赖于欧氏距离等距离计算。没有缩放时，范围较大的特征主导距离度量，使范围较小的特征几乎无关紧要。标准化或最小-最大缩放确保所有特征对距离计算的贡献相等，以进行公平比较。",
    diagram: "",
    terms: ["feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 89,
    q: "What distance metric is most commonly used in KNN?",
    qChinese: "KNN中最常用的距离度量是什么？",
    options: [
      "A) Euclidean distance",
      "B) Cosine similarity",
      "C) Hamming distance",
      "D) Jaccard distance"
    ],
    optionsChinese: [
      "A) 欧氏距离",
      "B) 余弦相似度",
      "C) 汉明距离",
      "D) Jaccard距离"
    ],
    answer: 0,
    explanation: "Euclidean distance is the most common metric in KNN, measuring the straight-line distance between two points. Manhattan distance is also used for high-dimensional data. The choice of distance metric significantly impacts KNN performance and should match the data characteristics and problem domain.",
    explanationChinese: "欧氏距离是KNN中最常见的度量，测量两点之间的直线距离。曼哈顿距离也用于高维数据。距离度量的选择显著影响KNN的性能，应与数据特征和问题领域相匹配。",
    diagram: "",
    terms: ["supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 90,
    q: "What is Naive Bayes classification based on?",
    qChinese: "朴素贝叶斯分类基于什么？",
    options: [
      "A) Decision tree splits",
      "B) Bayes' theorem with the assumption of feature independence",
      "C) Finding the maximum margin hyperplane",
      "D) Nearest neighbor distances"
    ],
    optionsChinese: [
      "A) 决策树分割",
      "B) 带有特征独立性假设的贝叶斯定理",
      "C) 找到最大间隔超平面",
      "D) 最近邻距离"
    ],
    answer: 1,
    explanation: "Naive Bayes applies Bayes' theorem to calculate the posterior probability of each class given the features, naively assuming all features are conditionally independent given the class. Despite this strong assumption rarely being true, it works well for text classification, spam filtering, and sentiment analysis.",
    explanationChinese: "朴素贝叶斯应用贝叶斯定理计算给定特征的每个类别的后验概率，天真地假设所有特征在给定类别条件下是独立的。尽管这个强假设很少成立，但它在文本分类、垃圾邮件过滤和情感分析中表现良好。",
    diagram: "",
    terms: ["supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 91,
    q: "Why is the 'naive' assumption in Naive Bayes often violated but still effective?",
    qChinese: "为什么朴素贝叶斯中的'朴素'假设经常被违反但仍然有效？",
    options: [
      "A) Because it uses gradient descent for optimization",
      "B) Because it always uses all features",
      "C) Because the class decision depends on probability rankings, not exact values",
      "D) Because it performs feature selection automatically"
    ],
    optionsChinese: [
      "A) 因为它使用梯度下降进行优化",
      "B) 因为它总是使用所有特征",
      "C) 因为类别决策取决于概率排名而非精确值",
      "D) 因为它自动执行特征选择"
    ],
    answer: 2,
    explanation: "Even when features are correlated, Naive Bayes works because classification only requires the correct class to have the highest probability, not accurate probability estimates. The independence assumption simplifies computation dramatically while often preserving the correct probability ranking among classes.",
    explanationChinese: "即使特征相关，朴素贝叶斯也能工作，因为分类只需要正确的类别具有最高概率，而不需要准确的概率估计。独立性假设极大地简化了计算，同时通常保留了类别之间正确的概率排名。",
    diagram: "",
    terms: ["supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 92,
    q: "What type of Naive Bayes is best suited for text classification?",
    qChinese: "哪种类型的朴素贝叶斯最适合文本分类？",
    options: [
      "A) Gaussian Naive Bayes",
      "B) Complement Naive Bayes",
      "C) Bernoulli Naive Bayes",
      "D) Multinomial Naive Bayes"
    ],
    optionsChinese: [
      "A) 高斯朴素贝叶斯",
      "B) 补充朴素贝叶斯",
      "C) 伯努利朴素贝叶斯",
      "D) 多项式朴素贝叶斯"
    ],
    answer: 3,
    explanation: "Multinomial Naive Bayes is ideal for text classification because it handles word frequency counts naturally. It models the probability of observing each word given a class. Gaussian NB is for continuous features, Bernoulli NB for binary features, and Complement NB improves performance on imbalanced text datasets.",
    explanationChinese: "多项式朴素贝叶斯非常适合文本分类，因为它自然地处理词频计数。它建模给定类别时观察到每个词的概率。高斯NB用于连续特征，伯努利NB用于二元特征，补充NB改善不平衡文本数据集的性能。",
    diagram: "",
    terms: ["supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 93,
    q: "What is the main disadvantage of KNN for large datasets?",
    qChinese: "KNN对大型数据集的主要缺点是什么？",
    options: [
      "A) Prediction is slow because it must compute distances to all training points",
      "B) It requires too much training time",
      "C) It cannot handle multiple classes",
      "D) It requires feature engineering"
    ],
    optionsChinese: [
      "A) 预测速度慢，因为必须计算到所有训练点的距离",
      "B) 它需要太多训练时间",
      "C) 它无法处理多个类别",
      "D) 它需要特征工程"
    ],
    answer: 0,
    explanation: "KNN stores all training data and computes distances to every point at prediction time, making it computationally expensive for large datasets. The time complexity is O(n*d) per prediction where n is training size and d is dimensionality. KD-trees and ball trees can help accelerate nearest neighbor searches.",
    explanationChinese: "KNN存储所有训练数据并在预测时计算到每个点的距离，使其对大型数据集计算成本很高。每次预测的时间复杂度为O(n*d)，其中n是训练大小，d是维度。KD树和球树可以帮助加速最近邻搜索。",
    diagram: "",
    terms: ["supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 94,
    q: "What is the soft margin in SVM?",
    qChinese: "SVM中的软间隔是什么？",
    options: [
      "A) A margin that allows no misclassifications",
      "B) A margin that allows some misclassifications to achieve better generalization",
      "C) The distance between two clusters",
      "D) The width of the kernel function"
    ],
    optionsChinese: [
      "A) 不允许错误分类的间隔",
      "B) 允许一些错误分类以实现更好泛化的间隔",
      "C) 两个簇之间的距离",
      "D) 核函数的宽度"
    ],
    answer: 1,
    explanation: "A soft margin SVM allows some data points to be within the margin or misclassified, controlled by the C parameter and slack variables. This handles noisy and non-perfectly-separable data. Hard margin SVM requires perfect separation, which is impossible for overlapping classes and sensitive to outliers.",
    explanationChinese: "软间隔SVM允许一些数据点在间隔内或被错误分类，由C参数和松弛变量控制。这处理了有噪声和非完全可分的数据。硬间隔SVM要求完美分离，对于重叠的类别是不可能的，且对异常值敏感。",
    diagram: "",
    terms: ["svm","regularization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 95,
    q: "What is Laplace smoothing in Naive Bayes?",
    qChinese: "朴素贝叶斯中的拉普拉斯平滑是什么？",
    options: [
      "A) A method to reduce feature dimensions",
      "B) A kernel function for SVM",
      "C) Adding a small count to prevent zero probability for unseen feature values",
      "D) A technique for data augmentation"
    ],
    optionsChinese: [
      "A) 一种减少特征维度的方法",
      "B) SVM的核函数",
      "C) 添加小计数以防止未见特征值的零概率",
      "D) 一种数据增强技术"
    ],
    answer: 2,
    explanation: "Laplace smoothing adds a small count (usually 1) to all feature counts to prevent zero probabilities for features not seen in the training data. Without smoothing, a single unseen word in text classification would make the entire class probability zero, completely dominating the prediction.",
    explanationChinese: "拉普拉斯平滑向所有特征计数添加一个小计数（通常为1），以防止训练数据中未见特征的零概率。没有平滑，文本分类中单个未见的词会使整个类别概率为零，完全主导预测。",
    diagram: "",
    terms: ["supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 96,
    q: "When is SVM preferred over logistic regression?",
    qChinese: "什么时候SVM优于逻辑回归？",
    options: [
      "A) When you need probability estimates",
      "B) When the dataset is very large",
      "C) When you need interpretable coefficients",
      "D) When the data is high-dimensional with clear margin separation"
    ],
    optionsChinese: [
      "A) 当你需要概率估计时",
      "B) 当数据集非常大时",
      "C) 当你需要可解释的系数时",
      "D) 当数据是高维的且有清晰的间隔分离时"
    ],
    answer: 3,
    explanation: "SVM excels in high-dimensional spaces, especially when the number of features exceeds the number of samples, such as in text classification. The kernel trick allows handling non-linear boundaries. Logistic regression is preferred when probability estimates and coefficient interpretability are needed.",
    explanationChinese: "SVM在高维空间中表现优异，特别是当特征数量超过样本数量时，如文本分类。核技巧允许处理非线性边界。当需要概率估计和系数可解释性时，逻辑回归更受青睐。",
    diagram: "",
    terms: ["svm","supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 97,
    q: "What is the gamma parameter in SVM with RBF kernel?",
    qChinese: "使用RBF核的SVM中的gamma参数是什么？",
    options: [
      "A) The parameter controlling how far the influence of a single training point reaches",
      "B) The number of support vectors",
      "C) The total number of features",
      "D) The learning rate for optimization"
    ],
    optionsChinese: [
      "A) 控制单个训练点影响范围的参数",
      "B) 支持向量的数量",
      "C) 特征的总数",
      "D) 优化的学习率"
    ],
    answer: 0,
    explanation: "Gamma defines how much influence a single training example has. A high gamma means each point only influences nearby points, leading to complex boundaries and potential overfitting. A low gamma means points have far-reaching influence, creating smoother boundaries. It controls the RBF kernel width.",
    explanationChinese: "Gamma定义单个训练样本的影响范围。高gamma意味着每个点仅影响附近的点，导致复杂边界和潜在过拟合。低gamma意味着点有远距离影响，创建更平滑的边界。它控制RBF核的宽度。",
    diagram: "",
    terms: ["svm","overfitting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 98,
    q: "What is weighted KNN?",
    qChinese: "什么是加权KNN？",
    options: [
      "A) KNN where all neighbors have equal influence",
      "B) KNN where closer neighbors have more influence on the prediction than distant ones",
      "C) KNN that uses only one neighbor",
      "D) KNN that removes outliers before prediction"
    ],
    optionsChinese: [
      "A) 所有邻居有相同影响力的KNN",
      "B) 更近的邻居对预测有更大影响力的KNN",
      "C) 仅使用一个邻居的KNN",
      "D) 预测前移除异常值的KNN"
    ],
    answer: 1,
    explanation: "Weighted KNN assigns higher weights to closer neighbors, typically using the inverse of distance. This reduces the influence of distant neighbors that might belong to different classes. It often improves accuracy over standard KNN where all K neighbors contribute equally to the prediction.",
    explanationChinese: "加权KNN为更近的邻居分配更高的权重，通常使用距离的倒数。这减少了可能属于不同类别的远距离邻居的影响。它通常比所有K个邻居对预测贡献相等的标准KNN提高了准确度。",
    diagram: "",
    terms: ["supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 99,
    q: "How does SVM handle multi-class classification?",
    qChinese: "SVM如何处理多类分类？",
    options: [
      "A) It cannot handle multi-class problems",
      "B) By increasing the margin width",
      "C) Using strategies like One-vs-One or One-vs-Rest to decompose into binary problems",
      "D) By adding more kernels"
    ],
    optionsChinese: [
      "A) 它无法处理多类问题",
      "B) 通过增加间隔宽度",
      "C) 使用一对一或一对多等策略分解为二元问题",
      "D) 通过添加更多核"
    ],
    answer: 2,
    explanation: "SVM is inherently binary, so multi-class problems are handled by decomposition. One-vs-Rest trains one classifier per class against all others. One-vs-One trains a classifier for each pair of classes. The final prediction uses voting. Scikit-learn uses One-vs-One by default for SVM multi-class.",
    explanationChinese: "SVM本质上是二元的，因此多类问题通过分解来处理。一对多为每个类别训练一个分类器对抗其他所有类别。一对一为每对类别训练一个分类器。最终预测使用投票。Scikit-learn默认对SVM多类使用一对一。",
    diagram: "",
    terms: ["svm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 100,
    q: "What is the prior probability in Naive Bayes?",
    qChinese: "朴素贝叶斯中的先验概率是什么？",
    options: [
      "A) The probability calculated after seeing the data",
      "B) The error rate of the model",
      "C) The probability of a feature being relevant",
      "D) The initial probability of each class before observing any features"
    ],
    optionsChinese: [
      "A) 看到数据后计算的概率",
      "B) 模型的错误率",
      "C) 特征相关的概率",
      "D) 在观察任何特征之前每个类别的初始概率"
    ],
    answer: 3,
    explanation: "The prior probability P(class) represents the initial belief about how likely each class is before considering any features. It is typically estimated from the training data as the proportion of samples in each class. The prior is combined with the likelihood to compute the posterior probability using Bayes' theorem.",
    explanationChinese: "先验概率P(class)表示在考虑任何特征之前对每个类别可能性的初始信念。它通常从训练数据中估计为每个类别中样本的比例。先验与似然结合使用贝叶斯定理计算后验概率。",
    diagram: "",
    terms: ["supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 101,
    q: "What is Gaussian Naive Bayes used for?",
    qChinese: "高斯朴素贝叶斯用于什么？",
    options: [
      "A) Classification when features are continuous and assumed to follow a Gaussian distribution",
      "B) Text classification with word counts",
      "C) Clustering data into Gaussian-shaped groups",
      "D) Dimensionality reduction"
    ],
    optionsChinese: [
      "A) 当特征是连续的且假设遵循高斯分布时的分类",
      "B) 使用词频的文本分类",
      "C) 将数据聚类成高斯形状的组",
      "D) 降维"
    ],
    answer: 0,
    explanation: "Gaussian Naive Bayes assumes continuous features follow a normal (Gaussian) distribution within each class. It estimates the mean and variance of each feature per class from training data. It works well when this assumption approximately holds and is computationally very fast for both training and prediction.",
    explanationChinese: "高斯朴素贝叶斯假设每个类别中的连续特征遵循正态（高斯）分布。它从训练数据中估计每个类别每个特征的均值和方差。当此假设大致成立时效果好，训练和预测的计算速度都非常快。",
    diagram: "",
    terms: ["supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 102,
    q: "What is the difference between hard margin and soft margin SVM?",
    qChinese: "硬间隔和软间隔SVM有什么区别？",
    options: [
      "A) Hard margin uses more support vectors",
      "B) Hard margin allows no misclassifications; soft margin tolerates some via slack variables",
      "C) Soft margin always achieves higher accuracy",
      "D) Hard margin uses kernel functions; soft margin does not"
    ],
    optionsChinese: [
      "A) 硬间隔使用更多支持向量",
      "B) 硬间隔不允许错误分类；软间隔通过松弛变量容忍一些",
      "C) 软间隔总是达到更高的准确度",
      "D) 硬间隔使用核函数；软间隔不使用"
    ],
    answer: 1,
    explanation: "Hard margin SVM requires all points to be correctly classified with no point inside the margin. This only works with linearly separable data and is sensitive to outliers. Soft margin introduces slack variables to allow violations, controlled by the C parameter, making it practical for real-world noisy data.",
    explanationChinese: "硬间隔SVM要求所有点被正确分类，间隔内没有点。这仅适用于线性可分数据且对异常值敏感。软间隔引入松弛变量允许违规，由C参数控制，使其适用于现实世界的噪声数据。",
    diagram: "",
    terms: ["svm","regularization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 103,
    q: "What is the time complexity of KNN prediction?",
    qChinese: "KNN预测的时间复杂度是多少？",
    options: [
      "A) O(1) constant time",
      "B) O(log n)",
      "C) O(n * d) where n is the number of training samples and d is the number of features",
      "D) O(d) where d is the number of features"
    ],
    optionsChinese: [
      "A) O(1)常数时间",
      "B) O(log n)",
      "C) O(n * d)，其中n是训练样本数，d是特征数",
      "D) O(d)，其中d是特征数"
    ],
    answer: 2,
    explanation: "KNN prediction requires computing the distance from the query point to all n training points across d dimensions, giving O(n*d) complexity per prediction. This makes KNN slow for large datasets. Data structures like KD-trees can reduce this to O(d*log n) on average for low-dimensional data.",
    explanationChinese: "KNN预测需要计算查询点到所有n个训练点在d个维度上的距离，每次预测的复杂度为O(n*d)。这使KNN对大型数据集来说很慢。KD树等数据结构可以在低维数据上将其平均降低到O(d*log n)。",
    diagram: "",
    terms: ["supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 104,
    q: "What is SVM regression (SVR)?",
    qChinese: "SVM回归（SVR）是什么？",
    options: [
      "A) Using SVM only for classification tasks",
      "B) A clustering variant of SVM",
      "C) Using SVM to reduce data dimensionality",
      "D) Adapting SVM to predict continuous values by fitting within an epsilon-insensitive tube"
    ],
    optionsChinese: [
      "A) 仅将SVM用于分类任务",
      "B) SVM的聚类变体",
      "C) 使用SVM降低数据维度",
      "D) 通过在epsilon不敏感管内拟合来将SVM调整为预测连续值"
    ],
    answer: 3,
    explanation: "SVR adapts SVM for regression by finding a function that deviates from actual targets by at most epsilon. Points within the epsilon tube incur no loss, while points outside contribute linearly to the error. Like SVM classification, it uses support vectors and can apply kernel functions for non-linear regression.",
    explanationChinese: "SVR通过找到与实际目标偏差不超过epsilon的函数来将SVM调整为回归。在epsilon管内的点不产生损失，管外的点线性地贡献误差。与SVM分类一样，它使用支持向量并可以应用核函数进行非线性回归。",
    diagram: "",
    terms: ["svm","supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 105,
    q: "What advantage does Naive Bayes have over more complex classifiers?",
    qChinese: "朴素贝叶斯相比更复杂的分类器有什么优势？",
    options: [
      "A) It is extremely fast to train and predict, and works well with small training sets",
      "B) It always achieves higher accuracy",
      "C) It can model complex non-linear relationships",
      "D) It does not require any assumptions about the data"
    ],
    optionsChinese: [
      "A) 训练和预测速度极快，且在小训练集上表现良好",
      "B) 它总是达到更高的准确度",
      "C) 它可以建模复杂的非线性关系",
      "D) 它不需要对数据做任何假设"
    ],
    answer: 0,
    explanation: "Naive Bayes is extremely computationally efficient because it only needs to estimate simple statistics like means and variances. It scales well to large feature spaces, handles missing data naturally, and performs surprisingly well with small datasets. It is an excellent baseline model for text classification tasks.",
    explanationChinese: "朴素贝叶斯计算效率极高，因为它只需要估计均值和方差等简单统计量。它能很好地扩展到大特征空间，自然地处理缺失数据，并在小数据集上表现出奇的好。它是文本分类任务的出色基准模型。",
    diagram: "",
    terms: ["supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  // ===== MODEL EVALUATION: ACCURACY, PRECISION, RECALL, F1, ROC-AUC (106-130) =====
  {
    id: 106,
    q: "What is a confusion matrix?",
    qChinese: "什么是混淆矩阵？",
    options: [
      "A) A matrix showing feature correlations",
      "B) A table showing true positives, false positives, true negatives, and false negatives",
      "C) A matrix used for dimensionality reduction",
      "D) A table of model hyperparameters"
    ],
    optionsChinese: [
      "A) 显示特征相关性的矩阵",
      "B) 显示真阳性、假阳性、真阴性和假阴性的表格",
      "C) 用于降维的矩阵",
      "D) 模型超参数的表格"
    ],
    answer: 1,
    explanation: "A confusion matrix is a table that summarizes classification performance by showing counts of true positives, false positives, true negatives, and false negatives. It provides a complete picture of where the model succeeds and fails, enabling calculation of precision, recall, F1-score, and other metrics.",
    explanationChinese: "混淆矩阵是一个通过显示真阳性、假阳性、真阴性和假阴性计数来总结分类性能的表格。它提供了模型成功和失败之处的完整图景，能够计算精确率、召回率、F1分数和其他指标。",
    diagram: "",
    terms: ["confusion_matrix"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 107,
    q: "What is accuracy in classification?",
    qChinese: "分类中的准确率是什么？",
    options: [
      "A) The proportion of true positives among predicted positives",
      "B) The proportion of actual positives correctly identified",
      "C) The proportion of correct predictions out of all predictions",
      "D) The harmonic mean of precision and recall"
    ],
    optionsChinese: [
      "A) 预测为正的样本中真阳性的比例",
      "B) 正确识别的实际正样本的比例",
      "C) 所有预测中正确预测的比例",
      "D) 精确率和召回率的调和平均值"
    ],
    answer: 2,
    explanation: "Accuracy is the ratio of correct predictions to total predictions: (TP + TN) / (TP + TN + FP + FN). While intuitive, accuracy is misleading with imbalanced datasets. A model predicting the majority class for 95% positive data achieves 95% accuracy without learning anything meaningful.",
    explanationChinese: "准确率是正确预测与总预测的比率：(TP + TN) / (TP + TN + FP + FN)。虽然直观，但在不平衡数据集上准确率具有误导性。对95%正样本数据预测多数类的模型达到95%准确率，却没有学到任何有意义的东西。",
    diagram: "",
    terms: ["confusion_matrix"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 108,
    q: "What is precision in classification?",
    qChinese: "分类中的精确率是什么？",
    options: [
      "A) The proportion of actual positives correctly predicted",
      "B) The inverse of the false negative rate",
      "C) The total number of correct predictions",
      "D) The proportion of predicted positives that are actually positive (TP / (TP + FP))"
    ],
    optionsChinese: [
      "A) 正确预测的实际正样本的比例",
      "B) 假阴性率的倒数",
      "C) 正确预测的总数",
      "D) 预测为正的样本中实际为正的比例 (TP / (TP + FP))"
    ],
    answer: 3,
    explanation: "Precision measures how many of the predicted positive cases are actually positive: TP / (TP + FP). High precision means few false positives. It is crucial when false positives are costly, such as spam detection where marking legitimate emails as spam is highly undesirable for the user.",
    explanationChinese: "精确率衡量预测为正的案例中有多少实际是正的：TP / (TP + FP)。高精确率意味着假阳性少。当假阳性成本高时它很关键，如垃圾邮件检测中将合法邮件标记为垃圾邮件对用户来说非常不可取。",
    diagram: "",
    terms: ["confusion_matrix"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 109,
    q: "What is recall (sensitivity) in classification?",
    qChinese: "分类中的召回率（灵敏度）是什么？",
    options: [
      "A) The proportion of actual positives that are correctly identified (TP / (TP + FN))",
      "B) The proportion of predicted positives that are correct",
      "C) The overall accuracy of the model",
      "D) The ratio of true negatives to total negatives"
    ],
    optionsChinese: [
      "A) 正确识别的实际正样本的比例 (TP / (TP + FN))",
      "B) 预测为正的样本中正确的比例",
      "C) 模型的整体准确度",
      "D) 真阴性与总阴性的比率"
    ],
    answer: 0,
    explanation: "Recall measures how many actual positive cases the model correctly identifies: TP / (TP + FN). High recall means few false negatives. It is critical when missing positives is dangerous, such as disease diagnosis where failing to detect a disease could have severe consequences for the patient.",
    explanationChinese: "召回率衡量模型正确识别了多少实际正样本：TP / (TP + FN)。高召回率意味着假阴性少。当遗漏正样本很危险时它很关键，如疾病诊断中未能检测到疾病可能对患者有严重后果。",
    diagram: "",
    terms: ["confusion_matrix"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 110,
    q: "What is the F1-score?",
    qChinese: "什么是F1分数？",
    options: [
      "A) The arithmetic mean of precision and recall",
      "B) The harmonic mean of precision and recall",
      "C) The geometric mean of accuracy and precision",
      "D) The weighted sum of all evaluation metrics"
    ],
    optionsChinese: [
      "A) 精确率和召回率的算术平均值",
      "B) 精确率和召回率的调和平均值",
      "C) 准确度和精确率的几何平均值",
      "D) 所有评估指标的加权和"
    ],
    answer: 1,
    explanation: "The F1-score is the harmonic mean of precision and recall: 2 * (precision * recall) / (precision + recall). It balances both metrics, penalizing extreme imbalances. The harmonic mean is lower than the arithmetic mean when values differ greatly, encouraging models to perform well on both precision and recall.",
    explanationChinese: "F1分数是精确率和召回率的调和平均值：2 * (精确率 * 召回率) / (精确率 + 召回率)。它平衡了两个指标，惩罚极端不平衡。当值差异很大时，调和平均值低于算术平均值，鼓励模型在精确率和召回率上都表现良好。",
    diagram: "",
    terms: ["confusion_matrix"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 111,
    q: "What is the ROC curve?",
    qChinese: "什么是ROC曲线？",
    options: [
      "A) A plot of precision vs recall at different thresholds",
      "B) A plot of accuracy vs number of features",
      "C) A plot of true positive rate vs false positive rate at different thresholds",
      "D) A plot of training loss vs validation loss"
    ],
    optionsChinese: [
      "A) 不同阈值下精确率与召回率的图",
      "B) 准确度与特征数量的图",
      "C) 不同阈值下真阳性率与假阳性率的图",
      "D) 训练损失与验证损失的图"
    ],
    answer: 2,
    explanation: "The ROC (Receiver Operating Characteristic) curve plots the True Positive Rate (recall) against the False Positive Rate at various classification thresholds. It shows the trade-off between sensitivity and specificity. A model with perfect discrimination has an ROC curve that passes through the top-left corner.",
    explanationChinese: "ROC（接收者操作特征）曲线绘制了各种分类阈值下的真阳性率（召回率）与假阳性率。它显示了灵敏度和特异性之间的权衡。具有完美判别力的模型的ROC曲线通过左上角。",
    diagram: "",
    terms: ["confusion_matrix"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 112,
    q: "What does AUC (Area Under the Curve) represent?",
    qChinese: "AUC（曲线下面积）代表什么？",
    options: [
      "A) The accuracy of the model",
      "B) The area under the precision-recall curve only",
      "C) The total number of predictions made",
      "D) The probability that the model ranks a random positive higher than a random negative"
    ],
    optionsChinese: [
      "A) 模型的准确度",
      "B) 仅精确率-召回率曲线下的面积",
      "C) 做出的预测总数",
      "D) 模型将随机正样本排名高于随机负样本的概率"
    ],
    answer: 3,
    explanation: "AUC-ROC represents the probability that the classifier ranks a randomly chosen positive instance higher than a randomly chosen negative one. An AUC of 1.0 indicates perfect classification, 0.5 indicates random guessing. AUC is threshold-independent, making it useful for comparing models across all thresholds.",
    explanationChinese: "AUC-ROC代表分类器将随机选择的正实例排名高于随机选择的负实例的概率。AUC为1.0表示完美分类，0.5表示随机猜测。AUC与阈值无关，使其适用于在所有阈值上比较模型。",
    diagram: "",
    terms: ["confusion_matrix"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 113,
    q: "When is accuracy a misleading metric?",
    qChinese: "什么时候准确率是一个有误导性的指标？",
    options: [
      "A) When there is significant class imbalance in the dataset",
      "B) When the dataset is perfectly balanced",
      "C) When using cross-validation",
      "D) When the model is a decision tree"
    ],
    optionsChinese: [
      "A) 当数据集中存在显著的类别不平衡时",
      "B) 当数据集完全平衡时",
      "C) 当使用交叉验证时",
      "D) 当模型是决策树时"
    ],
    answer: 0,
    explanation: "With imbalanced classes, a model can achieve high accuracy by simply predicting the majority class. For example, in fraud detection with 99% legitimate transactions, always predicting legitimate gives 99% accuracy but catches zero fraud. Metrics like F1-score, precision-recall, and AUC are more informative here.",
    explanationChinese: "在类别不平衡的情况下，模型可以通过简单预测多数类来达到高准确率。例如，在99%合法交易的欺诈检测中，总是预测合法给出99%准确率但未捕获任何欺诈。F1分数、精确率-召回率和AUC等指标在这里更有参考价值。",
    diagram: "",
    terms: ["confusion_matrix"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 114,
    q: "What is specificity (true negative rate)?",
    qChinese: "什么是特异性（真阴性率）？",
    options: [
      "A) The proportion of actual positives correctly identified",
      "B) The proportion of actual negatives correctly identified (TN / (TN + FP))",
      "C) The proportion of predicted positives that are correct",
      "D) The overall error rate of the model"
    ],
    optionsChinese: [
      "A) 正确识别的实际正样本的比例",
      "B) 正确识别的实际负样本的比例 (TN / (TN + FP))",
      "C) 预测为正的样本中正确的比例",
      "D) 模型的整体错误率"
    ],
    answer: 1,
    explanation: "Specificity measures the proportion of actual negative cases correctly identified: TN / (TN + FP). It complements sensitivity (recall). High specificity means few false positives. In medical testing, high specificity ensures healthy patients are not unnecessarily alarmed by false positive diagnoses.",
    explanationChinese: "特异性衡量正确识别的实际负样本的比例：TN / (TN + FP)。它补充了灵敏度（召回率）。高特异性意味着假阳性少。在医学检测中，高特异性确保健康患者不会被假阳性诊断不必要地惊扰。",
    diagram: "",
    terms: ["confusion_matrix"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 115,
    q: "What is the precision-recall trade-off?",
    qChinese: "什么是精确率-召回率权衡？",
    options: [
      "A) Increasing both precision and recall always improves the model",
      "B) Precision and recall are always equal",
      "C) Improving precision often decreases recall and vice versa due to threshold adjustment",
      "D) The trade-off only exists in regression problems"
    ],
    optionsChinese: [
      "A) 同时提高精确率和召回率总是改善模型",
      "B) 精确率和召回率总是相等的",
      "C) 由于阈值调整，提高精确率通常会降低召回率，反之亦然",
      "D) 这种权衡只存在于回归问题中"
    ],
    answer: 2,
    explanation: "Lowering the classification threshold increases recall by catching more positives but decreases precision by including more false positives. Raising the threshold increases precision but misses more true positives, reducing recall. The optimal threshold depends on the relative costs of false positives versus false negatives.",
    explanationChinese: "降低分类阈值通过捕获更多正样本来增加召回率，但通过包含更多假阳性来降低精确率。提高阈值增加精确率但遗漏更多真阳性，降低召回率。最优阈值取决于假阳性与假阴性的相对成本。",
    diagram: "",
    terms: ["confusion_matrix"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 116,
    q: "What is the precision-recall curve?",
    qChinese: "什么是精确率-召回率曲线？",
    options: [
      "A) A plot of accuracy vs loss",
      "B) A plot of training vs validation accuracy",
      "C) A plot of features vs importance scores",
      "D) A plot of precision against recall at different classification thresholds"
    ],
    optionsChinese: [
      "A) 准确度与损失的图",
      "B) 训练与验证准确度的图",
      "C) 特征与重要性分数的图",
      "D) 不同分类阈值下精确率与召回率的图"
    ],
    answer: 3,
    explanation: "The precision-recall curve plots precision against recall at various thresholds. It is especially useful for imbalanced datasets where ROC can be overly optimistic. A good model has a curve close to the top-right corner. The area under this curve (AP or AUPRC) summarizes performance across all thresholds.",
    explanationChinese: "精确率-召回率曲线绘制了各种阈值下的精确率与召回率。它对不平衡数据集特别有用，因为ROC可能过于乐观。好的模型曲线接近右上角。此曲线下的面积（AP或AUPRC）总结了所有阈值的性能。",
    diagram: "",
    terms: ["confusion_matrix"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 117,
    q: "What is a true positive (TP)?",
    qChinese: "什么是真阳性（TP）？",
    options: [
      "A) The model correctly predicts the positive class",
      "B) The model incorrectly predicts the positive class",
      "C) The model correctly predicts the negative class",
      "D) The model incorrectly predicts the negative class"
    ],
    optionsChinese: [
      "A) 模型正确地预测了正类",
      "B) 模型错误地预测了正类",
      "C) 模型正确地预测了负类",
      "D) 模型错误地预测了负类"
    ],
    answer: 0,
    explanation: "A true positive occurs when the model correctly predicts the positive class for an actually positive instance. In disease detection, a TP means a sick patient was correctly identified as sick. True positives contribute to both precision and recall calculations in the confusion matrix.",
    explanationChinese: "当模型对一个实际为正的实例正确预测了正类时，就发生了真阳性。在疾病检测中，TP意味着一个生病的患者被正确识别为生病。真阳性在混淆矩阵中贡献于精确率和召回率的计算。",
    diagram: "",
    terms: ["confusion_matrix"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 118,
    q: "What is a false positive (Type I error)?",
    qChinese: "什么是假阳性（第一类错误）？",
    options: [
      "A) Missing an actual positive case",
      "B) Incorrectly predicting positive when the actual class is negative",
      "C) Correctly predicting the negative class",
      "D) Correctly predicting the positive class"
    ],
    optionsChinese: [
      "A) 遗漏实际的正样本",
      "B) 当实际类别为负时错误地预测为正",
      "C) 正确预测了负类",
      "D) 正确预测了正类"
    ],
    answer: 1,
    explanation: "A false positive occurs when the model predicts positive but the actual class is negative. In medical testing, this means diagnosing a healthy person as sick. False positives reduce precision. Also called Type I error or false alarm, they are costly when positive predictions trigger expensive actions.",
    explanationChinese: "当模型预测为正但实际类别为负时，就发生了假阳性。在医学检测中，这意味着将健康人诊断为生病。假阳性降低精确率。也称为第一类错误或假警报，当正预测触发昂贵的操作时它们成本很高。",
    diagram: "",
    terms: ["confusion_matrix"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 119,
    q: "What is a false negative (Type II error)?",
    qChinese: "什么是假阴性（第二类错误）？",
    options: [
      "A) Predicting positive when actually negative",
      "B) Correctly identifying a negative sample",
      "C) Failing to predict positive when the actual class is positive",
      "D) Correctly identifying a positive sample"
    ],
    optionsChinese: [
      "A) 实际为负时预测为正",
      "B) 正确识别负样本",
      "C) 当实际类别为正时未能预测为正",
      "D) 正确识别正样本"
    ],
    answer: 2,
    explanation: "A false negative occurs when the model predicts negative but the actual class is positive. In cancer screening, this means missing an actual cancer case. False negatives reduce recall. Also called Type II error or missed detection, they are particularly dangerous in safety-critical applications.",
    explanationChinese: "当模型预测为负但实际类别为正时，就发生了假阴性。在癌症筛查中，这意味着遗漏了实际的癌症病例。假阴性降低召回率。也称为第二类错误或漏检，在安全关键应用中特别危险。",
    diagram: "",
    terms: ["confusion_matrix"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 120,
    q: "What is the macro-averaged F1-score?",
    qChinese: "什么是宏平均F1分数？",
    options: [
      "A) The F1-score calculated on the entire dataset as a whole",
      "B) The maximum F1-score across all classes",
      "C) The F1-score of the majority class only",
      "D) The unweighted average of F1-scores calculated independently for each class"
    ],
    optionsChinese: [
      "A) 在整个数据集上整体计算的F1分数",
      "B) 所有类别中的最大F1分数",
      "C) 仅多数类的F1分数",
      "D) 对每个类别独立计算的F1分数的无加权平均"
    ],
    answer: 3,
    explanation: "Macro-averaged F1 computes the F1-score for each class independently and then averages them equally. It treats all classes the same regardless of their sample size. This gives equal weight to minority classes, making it useful when all classes are equally important even if their sizes differ greatly.",
    explanationChinese: "宏平均F1独立计算每个类别的F1分数，然后等权平均。无论样本大小如何，它对所有类别一视同仁。这给予少数类相等的权重，当所有类别同等重要（即使大小差异很大）时很有用。",
    diagram: "",
    terms: ["confusion_matrix"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 121,
    q: "What is the difference between micro and macro averaging for metrics?",
    qChinese: "指标的微观平均和宏观平均有什么区别？",
    options: [
      "A) Micro aggregates all instances globally; macro averages per-class metrics equally",
      "B) They always produce the same result",
      "C) Micro is for binary classification; macro is for multi-class",
      "D) Macro considers class sizes; micro does not"
    ],
    optionsChinese: [
      "A) 微观全局聚合所有实例；宏观等权平均每个类别的指标",
      "B) 它们总是产生相同的结果",
      "C) 微观用于二元分类；宏观用于多类",
      "D) 宏观考虑类别大小；微观不考虑"
    ],
    answer: 0,
    explanation: "Micro averaging pools all true positives, false positives, and false negatives globally before computing metrics, effectively weighting by class frequency. Macro averaging computes metrics per class then averages equally, giving each class the same importance. Micro favors larger classes; macro treats all equally.",
    explanationChinese: "微观平均在计算指标前全局汇总所有真阳性、假阳性和假阴性，有效地按类别频率加权。宏观平均按类别计算指标然后等权平均，给每个类别相同的重要性。微观偏向大类；宏观平等对待所有类。",
    diagram: "",
    terms: ["confusion_matrix"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 122,
    q: "What is log loss (logarithmic loss)?",
    qChinese: "什么是对数损失（对数损失函数）？",
    options: [
      "A) The number of misclassified samples",
      "B) A metric that penalizes confident wrong predictions more than uncertain ones",
      "C) The logarithm of accuracy",
      "D) The loss used only in regression"
    ],
    optionsChinese: [
      "A) 错误分类的样本数量",
      "B) 对自信的错误预测比不确定的预测惩罚更重的指标",
      "C) 准确度的对数",
      "D) 仅用于回归的损失"
    ],
    answer: 1,
    explanation: "Log loss measures the quality of predicted probabilities, not just the final class prediction. It heavily penalizes confident but incorrect predictions. A model predicting 0.99 for the wrong class gets a much higher loss than one predicting 0.51. Lower log loss indicates better-calibrated probability estimates.",
    explanationChinese: "对数损失衡量预测概率的质量，而不仅仅是最终的类别预测。它对自信但不正确的预测施加严重惩罚。对错误类别预测0.99的模型比预测0.51的获得更高的损失。更低的对数损失表示更好校准的概率估计。",
    diagram: "",
    terms: ["confusion_matrix"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 123,
    q: "What is Cohen's Kappa score?",
    qChinese: "什么是Cohen的Kappa分数？",
    options: [
      "A) The same as accuracy",
      "B) The ratio of precision to recall",
      "C) A metric that measures agreement between predictions and actuals while accounting for chance",
      "D) A measure of model complexity"
    ],
    optionsChinese: [
      "A) 与准确率相同",
      "B) 精确率与召回率的比率",
      "C) 衡量预测和实际之间一致性同时考虑偶然性的指标",
      "D) 模型复杂度的度量"
    ],
    answer: 2,
    explanation: "Cohen's Kappa adjusts accuracy by accounting for agreement expected by random chance. A Kappa of 1 indicates perfect agreement, 0 means no better than random, and negative values mean worse than random. It is more informative than accuracy for imbalanced datasets and multi-rater agreement scenarios.",
    explanationChinese: "Cohen的Kappa通过考虑随机机会预期的一致性来调整准确率。Kappa为1表示完美一致，0表示不比随机好，负值表示比随机差。它比准确率对不平衡数据集和多评估者一致性场景更有参考价值。",
    diagram: "",
    terms: ["confusion_matrix"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 124,
    q: "What does the F-beta score allow you to control?",
    qChinese: "F-beta分数允许你控制什么？",
    options: [
      "A) The number of features",
      "B) The number of cross-validation folds",
      "C) The classification threshold",
      "D) The relative importance of recall versus precision through the beta parameter"
    ],
    optionsChinese: [
      "A) 特征数量",
      "B) 交叉验证折数",
      "C) 分类阈值",
      "D) 通过beta参数控制召回率相对于精确率的相对重要性"
    ],
    answer: 3,
    explanation: "The F-beta score generalizes F1 by introducing a beta parameter. Beta greater than 1 gives more weight to recall, while beta less than 1 favors precision. F2-score weighs recall twice as much as precision, useful in medical diagnosis. F0.5-score weighs precision more, useful in search engine ranking.",
    explanationChinese: "F-beta分数通过引入beta参数泛化了F1。Beta大于1给予召回率更多权重，而beta小于1偏向精确率。F2分数将召回率权重设为精确率的两倍，适用于医学诊断。F0.5分数更重视精确率，适用于搜索引擎排名。",
    diagram: "",
    terms: ["confusion_matrix"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 125,
    q: "What is the Matthews Correlation Coefficient (MCC)?",
    qChinese: "什么是马修斯相关系数（MCC）？",
    options: [
      "A) A balanced metric ranging from -1 to 1 that considers all four confusion matrix values",
      "B) A metric that ranges from 0 to 1",
      "C) The correlation between features",
      "D) A metric only used for regression"
    ],
    optionsChinese: [
      "A) 范围从-1到1的平衡指标，考虑混淆矩阵的所有四个值",
      "B) 范围从0到1的指标",
      "C) 特征之间的相关性",
      "D) 仅用于回归的指标"
    ],
    answer: 0,
    explanation: "MCC uses all four confusion matrix values (TP, TN, FP, FN) to produce a balanced measure between -1 and 1. A value of 1 indicates perfect prediction, 0 means no better than random, and -1 indicates total disagreement. It is considered one of the most reliable single metrics for binary classification.",
    explanationChinese: "MCC使用混淆矩阵的所有四个值（TP、TN、FP、FN）产生-1到1之间的平衡度量。值为1表示完美预测，0表示不比随机好，-1表示完全不一致。它被认为是二元分类中最可靠的单一指标之一。",
    diagram: "",
    terms: ["confusion_matrix"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 126,
    q: "What is RMSE (Root Mean Squared Error)?",
    qChinese: "什么是RMSE（均方根误差）？",
    options: [
      "A) The mean of absolute prediction errors",
      "B) The square root of the average of squared differences between predictions and actuals",
      "C) The maximum prediction error",
      "D) The percentage of variance explained"
    ],
    optionsChinese: [
      "A) 预测误差绝对值的平均",
      "B) 预测值与实际值之间平方差的平均的平方根",
      "C) 最大预测误差",
      "D) 解释的方差百分比"
    ],
    answer: 1,
    explanation: "RMSE takes the square root of MSE, bringing the error back to the same units as the target variable. It penalizes larger errors more than MAE due to squaring. RMSE is one of the most popular regression metrics because it is interpretable and differentiable, making it suitable for optimization.",
    explanationChinese: "RMSE取MSE的平方根，将误差带回与目标变量相同的单位。由于平方，它比MAE对较大误差的惩罚更重。RMSE是最流行的回归指标之一，因为它可解释且可微，适合优化。",
    diagram: "",
    terms: ["supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 127,
    q: "What is the classification threshold in logistic regression?",
    qChinese: "逻辑回归中的分类阈值是什么？",
    options: [
      "A) The number of features to include",
      "B) The maximum number of training iterations",
      "C) The probability cutoff above which the model predicts the positive class",
      "D) The minimum sample size needed"
    ],
    optionsChinese: [
      "A) 要包含的特征数量",
      "B) 最大训练迭代次数",
      "C) 模型预测正类的概率截断值",
      "D) 所需的最小样本量"
    ],
    answer: 2,
    explanation: "The classification threshold converts predicted probabilities into class labels. The default is 0.5, but adjusting it trades off precision and recall. Lowering the threshold increases recall but decreases precision. The optimal threshold depends on business requirements and the relative costs of different error types.",
    explanationChinese: "分类阈值将预测概率转换为类别标签。默认值为0.5，但调整它会在精确率和召回率之间进行权衡。降低阈值增加召回率但降低精确率。最优阈值取决于业务需求和不同错误类型的相对成本。",
    diagram: "",
    terms: ["confusion_matrix","supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 128,
    q: "What is a calibration curve used for?",
    qChinese: "校准曲线用于什么？",
    options: [
      "A) Measuring feature importance",
      "B) Visualizing decision boundaries",
      "C) Tuning hyperparameters",
      "D) Assessing whether predicted probabilities match actual observed frequencies"
    ],
    optionsChinese: [
      "A) 衡量特征重要性",
      "B) 可视化决策边界",
      "C) 调整超参数",
      "D) 评估预测概率是否与实际观察频率匹配"
    ],
    answer: 3,
    explanation: "A calibration curve plots predicted probabilities against actual positive rates. A well-calibrated model's curve closely follows the diagonal. If the model predicts 70% probability, approximately 70% of those cases should be positive. Platt scaling and isotonic regression can calibrate poorly calibrated models.",
    explanationChinese: "校准曲线绘制预测概率与实际正样本率的关系。校准良好的模型曲线紧密跟随对角线。如果模型预测70%的概率，这些案例中大约70%应该是正的。Platt缩放和保序回归可以校准校准不佳的模型。",
    diagram: "",
    terms: ["confusion_matrix"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 129,
    q: "What is the lift chart used to evaluate?",
    qChinese: "提升图用于评估什么？",
    options: [
      "A) How much better the model performs compared to random selection at various cutoffs",
      "B) Feature correlations",
      "C) The training speed of the model",
      "D) The number of features needed"
    ],
    optionsChinese: [
      "A) 在各种截断点上模型比随机选择好多少",
      "B) 特征相关性",
      "C) 模型的训练速度",
      "D) 所需的特征数量"
    ],
    answer: 0,
    explanation: "A lift chart shows how much more effective the model is compared to random guessing at various percentages of the sorted prediction list. A lift of 3 at the top 10% means the model identifies 3 times more positives than random in that segment. It is widely used in marketing and targeting.",
    explanationChinese: "提升图显示在排序预测列表的各个百分比处，模型比随机猜测有效多少。在前10%处提升为3意味着模型在该段中识别的正样本是随机的3倍。它在营销和目标定位中广泛使用。",
    diagram: "",
    terms: ["confusion_matrix"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 130,
    q: "When should you prioritize recall over precision?",
    qChinese: "什么时候应该优先考虑召回率而非精确率？",
    options: [
      "A) When false positives are more costly than false negatives",
      "B) When missing a positive case is very costly, such as cancer screening",
      "C) When the dataset is perfectly balanced",
      "D) When training speed is the priority"
    ],
    optionsChinese: [
      "A) 当假阳性比假阴性成本更高时",
      "B) 当遗漏正样本的成本很高时，如癌症筛查",
      "C) 当数据集完全平衡时",
      "D) 当训练速度是优先考虑时"
    ],
    answer: 1,
    explanation: "Recall should be prioritized when the cost of missing positive cases (false negatives) is high. In cancer screening, missing a cancer diagnosis could be life-threatening. Similarly, in security threat detection, it is better to have some false alarms than to miss genuine threats entirely.",
    explanationChinese: "当遗漏正样本（假阴性）的成本很高时，应优先考虑召回率。在癌症筛查中，遗漏癌症诊断可能危及生命。类似地，在安全威胁检测中，有一些假警报总比完全遗漏真正的威胁好。",
    diagram: "",
    terms: ["confusion_matrix"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  // ===== CROSS-VALIDATION, TRAIN/TEST SPLIT, BIAS-VARIANCE TRADEOFF (131-150) =====
  {
    id: 131,
    q: "What is K-fold cross-validation?",
    qChinese: "什么是K折交叉验证？",
    options: [
      "A) Splitting data into K clusters",
      "B) Training K different models on the same data",
      "C) Dividing data into K equal parts, training on K-1 folds and testing on the remaining fold, repeating K times",
      "D) Reducing the dataset to K features"
    ],
    optionsChinese: [
      "A) 将数据分成K个簇",
      "B) 在相同数据上训练K个不同模型",
      "C) 将数据分为K个相等部分，在K-1折上训练并在剩余折上测试，重复K次",
      "D) 将数据集减少到K个特征"
    ],
    answer: 2,
    explanation: "K-fold cross-validation divides the data into K equal folds. Each fold serves as the test set once while the remaining K-1 folds are used for training. This produces K performance estimates that are averaged. Common choices are K=5 or K=10. It provides a more reliable estimate than a single split.",
    explanationChinese: "K折交叉验证将数据分为K个相等的折。每个折作为测试集使用一次，其余K-1折用于训练。这产生K个性能估计，然后取平均。常见选择是K=5或K=10。它提供了比单次分割更可靠的估计。",
    diagram: "",
    terms: ["cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 132,
    q: "What is the bias-variance tradeoff?",
    qChinese: "什么是偏差-方差权衡？",
    options: [
      "A) The tradeoff between training speed and accuracy",
      "B) The balance between training set size and test set size",
      "C) The tradeoff between precision and recall",
      "D) The balance between model simplicity (bias) and sensitivity to training data (variance)"
    ],
    optionsChinese: [
      "A) 训练速度和准确度之间的权衡",
      "B) 训练集大小和测试集大小之间的平衡",
      "C) 精确率和召回率之间的权衡",
      "D) 模型简单性（偏差）和对训练数据敏感性（方差）之间的平衡"
    ],
    answer: 3,
    explanation: "The bias-variance tradeoff describes the tension between underfitting (high bias, low variance) and overfitting (low bias, high variance). Simple models have high bias and miss patterns; complex models have high variance and memorize noise. The goal is finding the sweet spot that minimizes total error.",
    explanationChinese: "偏差-方差权衡描述了欠拟合（高偏差、低方差）和过拟合（低偏差、高方差）之间的张力。简单模型有高偏差，错过模式；复杂模型有高方差，记忆噪声。目标是找到最小化总误差的甜蜜点。",
    diagram: "",
    terms: ["bias_variance","overfitting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 133,
    q: "What is bias in the bias-variance context?",
    qChinese: "在偏差-方差上下文中偏差是什么？",
    options: [
      "A) The error from oversimplifying assumptions that cause the model to miss relevant patterns",
      "B) The variance of the model predictions",
      "C) The randomness in the training data",
      "D) The number of features in the model"
    ],
    optionsChinese: [
      "A) 由于过度简化假设导致模型错过相关模式的误差",
      "B) 模型预测的方差",
      "C) 训练数据中的随机性",
      "D) 模型中的特征数量"
    ],
    answer: 0,
    explanation: "Bias represents the error introduced by approximating a complex problem with a simpler model. High bias means the model makes strong assumptions and consistently misses important patterns, leading to underfitting. Linear regression fitting non-linear data is an example of a high-bias situation.",
    explanationChinese: "偏差代表用更简单的模型近似复杂问题时引入的误差。高偏差意味着模型做出强假设并持续错过重要模式，导致欠拟合。线性回归拟合非线性数据是高偏差情况的一个例子。",
    diagram: "",
    terms: ["bias_variance","overfitting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 134,
    q: "What is variance in the bias-variance context?",
    qChinese: "在偏差-方差上下文中方差是什么？",
    options: [
      "A) The error from the model being too simple",
      "B) The error from the model being too sensitive to fluctuations in the training data",
      "C) The spread of feature values",
      "D) The difference between precision and recall"
    ],
    optionsChinese: [
      "A) 模型太简单导致的误差",
      "B) 模型对训练数据波动过于敏感导致的误差",
      "C) 特征值的分布范围",
      "D) 精确率和召回率之间的差异"
    ],
    answer: 1,
    explanation: "Variance measures how much the model's predictions change when trained on different subsets of data. High variance means the model is overly sensitive to training data specifics, capturing noise as patterns. Deep decision trees without pruning are examples of high-variance models that overfit easily.",
    explanationChinese: "方差衡量模型在不同数据子集上训练时预测变化的程度。高方差意味着模型对训练数据细节过于敏感，将噪声作为模式捕获。没有剪枝的深决策树是容易过拟合的高方差模型的例子。",
    diagram: "",
    terms: ["bias_variance","overfitting","decision_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 135,
    q: "What is Leave-One-Out Cross-Validation (LOOCV)?",
    qChinese: "什么是留一法交叉验证（LOOCV）？",
    options: [
      "A) Removing one feature at a time",
      "B) Training on half the data and testing on the other half",
      "C) Using each single sample as the test set once while training on all remaining samples",
      "D) Leaving out one class for testing"
    ],
    optionsChinese: [
      "A) 一次移除一个特征",
      "B) 在一半数据上训练，另一半上测试",
      "C) 每次使用单个样本作为测试集，同时在所有剩余样本上训练",
      "D) 留出一个类别用于测试"
    ],
    answer: 2,
    explanation: "LOOCV is K-fold cross-validation where K equals the number of samples. Each iteration trains on all samples except one and tests on that one. It gives an unbiased estimate but is computationally expensive for large datasets. The variance of the estimate can also be high due to overlapping training sets.",
    explanationChinese: "LOOCV是K折交叉验证的特殊情况，其中K等于样本数。每次迭代在除一个以外的所有样本上训练，并在那个样本上测试。它给出无偏估计但对大数据集计算成本高。由于重叠的训练集，估计的方差也可能很高。",
    diagram: "",
    terms: ["cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 136,
    q: "What is stratified K-fold cross-validation?",
    qChinese: "什么是分层K折交叉验证？",
    options: [
      "A) Standard K-fold without any modifications",
      "B) K-fold applied only to the training set",
      "C) K-fold that uses different K values",
      "D) K-fold that preserves the percentage of samples for each class in every fold"
    ],
    optionsChinese: [
      "A) 没有任何修改的标准K折",
      "B) 仅应用于训练集的K折",
      "C) 使用不同K值的K折",
      "D) 在每个折中保持每个类别样本百分比的K折"
    ],
    answer: 3,
    explanation: "Stratified K-fold ensures each fold has approximately the same class distribution as the entire dataset. This is critical for imbalanced datasets where random splitting might create folds with no minority class samples. It provides more reliable and representative performance estimates than standard K-fold.",
    explanationChinese: "分层K折确保每个折的类别分布与整个数据集大致相同。这对不平衡数据集至关重要，随机分割可能创建没有少数类样本的折。它提供比标准K折更可靠和更具代表性的性能估计。",
    diagram: "",
    terms: ["cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 137,
    q: "What is the typical train-test split ratio?",
    qChinese: "典型的训练-测试分割比率是多少？",
    options: [
      "A) 70-30 or 80-20",
      "B) 50-50",
      "C) 95-5",
      "D) 30-70"
    ],
    optionsChinese: [
      "A) 70-30或80-20",
      "B) 50-50",
      "C) 95-5",
      "D) 30-70"
    ],
    answer: 0,
    explanation: "Common train-test splits are 70-30 or 80-20, balancing sufficient training data with a representative test set. Larger datasets can afford smaller test ratios. The split should be random and stratified for classification. Some workflows add a validation set, using splits like 60-20-20 for train, validation, and test.",
    explanationChinese: "常见的训练-测试分割为70-30或80-20，平衡了充足的训练数据和有代表性的测试集。较大的数据集可以使用较小的测试比例。分割应该是随机的，对分类应该是分层的。一些工作流添加验证集，使用60-20-20的分割。",
    diagram: "",
    terms: ["cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 138,
    q: "Why should the test set never be used during model training or selection?",
    qChinese: "为什么测试集不应在模型训练或选择期间使用？",
    options: [
      "A) It would make training slower",
      "B) It would compromise the unbiased estimate of generalization performance",
      "C) It would reduce the training data size",
      "D) It would change the class distribution"
    ],
    optionsChinese: [
      "A) 它会使训练更慢",
      "B) 它会损害泛化性能的无偏估计",
      "C) 它会减少训练数据的大小",
      "D) 它会改变类别分布"
    ],
    answer: 1,
    explanation: "Using the test set for model selection or tuning creates data leakage, making performance estimates overly optimistic. The model indirectly learns patterns from the test set through iterative selection. A separate validation set or cross-validation should be used for tuning, preserving the test set for final evaluation.",
    explanationChinese: "使用测试集进行模型选择或调整会创建数据泄漏，使性能估计过于乐观。模型通过迭代选择间接地从测试集中学习模式。应使用单独的验证集或交叉验证进行调整，保留测试集用于最终评估。",
    diagram: "",
    terms: ["cross_validation","overfitting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 139,
    q: "How does increasing model complexity affect the bias-variance tradeoff?",
    qChinese: "增加模型复杂度如何影响偏差-方差权衡？",
    options: [
      "A) Both bias and variance increase",
      "B) Bias increases and variance decreases",
      "C) Bias decreases and variance increases",
      "D) Both bias and variance decrease"
    ],
    optionsChinese: [
      "A) 偏差和方差都增加",
      "B) 偏差增加，方差减少",
      "C) 偏差减少，方差增加",
      "D) 偏差和方差都减少"
    ],
    answer: 2,
    explanation: "As model complexity increases, bias decreases because the model can capture more complex patterns. However, variance increases because the model becomes more sensitive to specific training data. The total error is minimized at the optimal complexity where the sum of bias squared and variance is lowest.",
    explanationChinese: "随着模型复杂度增加，偏差减少，因为模型可以捕获更复杂的模式。然而，方差增加，因为模型对特定训练数据变得更敏感。总误差在偏差平方和方差之和最低的最优复杂度处最小化。",
    diagram: "",
    terms: ["bias_variance","overfitting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 140,
    q: "What is nested cross-validation used for?",
    qChinese: "嵌套交叉验证用于什么？",
    options: [
      "A) Faster model training",
      "B) Increasing the training data size",
      "C) Reducing the number of features",
      "D) Simultaneously performing model selection and unbiased performance estimation"
    ],
    optionsChinese: [
      "A) 更快的模型训练",
      "B) 增加训练数据大小",
      "C) 减少特征数量",
      "D) 同时进行模型选择和无偏性能估计"
    ],
    answer: 3,
    explanation: "Nested cross-validation uses an outer loop for performance estimation and an inner loop for hyperparameter tuning. The inner CV selects the best hyperparameters, while the outer CV provides an unbiased estimate of generalization. This prevents the optimistic bias that occurs when using a single cross-validation.",
    explanationChinese: "嵌套交叉验证使用外循环进行性能估计，内循环进行超参数调整。内部CV选择最佳超参数，而外部CV提供泛化的无偏估计。这防止了使用单个交叉验证时出现的乐观偏差。",
    diagram: "",
    terms: ["cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 141,
    q: "What is the effect of training set size on bias and variance?",
    qChinese: "训练集大小对偏差和方差有什么影响？",
    options: [
      "A) Larger training sets generally reduce variance while bias remains determined by model complexity",
      "B) Larger training sets increase both bias and variance",
      "C) Larger training sets always eliminate overfitting",
      "D) Training set size has no effect on bias or variance"
    ],
    optionsChinese: [
      "A) 更大的训练集通常减少方差，而偏差仍由模型复杂度决定",
      "B) 更大的训练集增加偏差和方差",
      "C) 更大的训练集总是消除过拟合",
      "D) 训练集大小对偏差或方差没有影响"
    ],
    answer: 0,
    explanation: "More training data helps the model learn general patterns rather than memorizing noise, reducing variance. However, bias is primarily determined by the model's complexity and assumptions, not data size. A high-bias model will underfit regardless of data size. Learning curves help visualize these effects.",
    explanationChinese: "更多训练数据帮助模型学习一般模式而非记忆噪声，减少方差。然而，偏差主要由模型的复杂性和假设决定，而非数据大小。高偏差模型无论数据大小都会欠拟合。学习曲线帮助可视化这些效果。",
    diagram: "",
    terms: ["bias_variance","overfitting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 142,
    q: "What is a learning curve in machine learning?",
    qChinese: "机器学习中的学习曲线是什么？",
    options: [
      "A) A plot of model accuracy vs number of features",
      "B) A plot of training and validation performance vs training set size",
      "C) A curve showing the gradient descent path",
      "D) The time required to train the model"
    ],
    optionsChinese: [
      "A) 模型准确度与特征数量的图",
      "B) 训练和验证性能与训练集大小的图",
      "C) 显示梯度下降路径的曲线",
      "D) 训练模型所需的时间"
    ],
    answer: 1,
    explanation: "A learning curve plots training and validation scores against increasing training set sizes. It helps diagnose bias and variance issues. If both scores are low, the model has high bias. If training score is high but validation is low, the model has high variance. It also shows if more data would help.",
    explanationChinese: "学习曲线绘制训练和验证分数随训练集大小增加的变化。它帮助诊断偏差和方差问题。如果两个分数都低，模型有高偏差。如果训练分数高但验证低，模型有高方差。它还显示更多数据是否有帮助。",
    diagram: "",
    terms: ["bias_variance","cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 143,
    q: "What is time-series cross-validation?",
    qChinese: "什么是时间序列交叉验证？",
    options: [
      "A) Standard K-fold applied to time series",
      "B) Splitting data randomly regardless of time",
      "C) A walk-forward validation where training always precedes the test period chronologically",
      "D) Using only the most recent data for testing"
    ],
    optionsChinese: [
      "A) 应用于时间序列的标准K折",
      "B) 不考虑时间随机分割数据",
      "C) 训练总是在时间上先于测试期的向前验证",
      "D) 仅使用最近的数据进行测试"
    ],
    answer: 2,
    explanation: "Time-series cross-validation respects temporal ordering by always using past data for training and future data for testing. Random splitting would cause data leakage by training on future information. The walk-forward approach expands the training window while sliding the test window forward through time.",
    explanationChinese: "时间序列交叉验证通过始终使用过去的数据进行训练和未来的数据进行测试来尊重时间顺序。随机分割会通过在未来信息上训练导致数据泄漏。向前走方法扩展训练窗口，同时将测试窗口向前滑动。",
    diagram: "",
    terms: ["cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 144,
    q: "What is the difference between holdout validation and cross-validation?",
    qChinese: "留出验证和交叉验证有什么区别？",
    options: [
      "A) They are exactly the same method",
      "B) Cross-validation only works with small datasets",
      "C) Holdout is always more accurate",
      "D) Holdout uses one fixed split; cross-validation uses multiple splits for more robust estimates"
    ],
    optionsChinese: [
      "A) 它们是完全相同的方法",
      "B) 交叉验证只适用于小数据集",
      "C) 留出法总是更准确",
      "D) 留出法使用一次固定分割；交叉验证使用多次分割获得更鲁棒的估计"
    ],
    answer: 3,
    explanation: "Holdout validation splits data once into training and test sets, which is fast but sensitive to the particular split. Cross-validation performs multiple splits, providing a more reliable estimate with confidence intervals. Cross-validation better utilizes limited data but is computationally more expensive than a single holdout.",
    explanationChinese: "留出验证将数据一次性分为训练集和测试集，速度快但对特定分割敏感。交叉验证执行多次分割，提供带有置信区间的更可靠估计。交叉验证更好地利用有限数据，但计算成本比单次留出法更高。",
    diagram: "",
    terms: ["cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 145,
    q: "What does a high training accuracy but low test accuracy indicate?",
    qChinese: "高训练准确度但低测试准确度表明什么？",
    options: [
      "A) High variance (overfitting)",
      "B) High bias",
      "C) The model is perfectly balanced",
      "D) The dataset is too small"
    ],
    optionsChinese: [
      "A) 高方差（过拟合）",
      "B) 高偏差",
      "C) 模型完全平衡",
      "D) 数据集太小"
    ],
    answer: 0,
    explanation: "A large gap between high training accuracy and low test accuracy is the classic sign of overfitting, indicating high variance. The model has memorized training data specifics rather than learning generalizable patterns. Remedies include regularization, more training data, simpler models, or early stopping.",
    explanationChinese: "高训练准确度和低测试准确度之间的大差距是过拟合的典型标志，表明高方差。模型记忆了训练数据的细节而非学习可泛化的模式。补救措施包括正则化、更多训练数据、更简单的模型或早停。",
    diagram: "",
    terms: ["overfitting","bias_variance"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 146,
    q: "What does low training accuracy and low test accuracy indicate?",
    qChinese: "低训练准确度和低测试准确度表明什么？",
    options: [
      "A) The model is overfitting",
      "B) The model is underfitting (high bias)",
      "C) The data has no patterns",
      "D) The test set is too large"
    ],
    optionsChinese: [
      "A) 模型过拟合",
      "B) 模型欠拟合（高偏差）",
      "C) 数据没有模式",
      "D) 测试集太大"
    ],
    answer: 1,
    explanation: "When both training and test accuracy are low, the model is underfitting due to high bias. It is too simple to capture the underlying data patterns. Solutions include using a more complex model, adding more features, reducing regularization strength, or engineering better features from existing data.",
    explanationChinese: "当训练和测试准确度都低时，模型由于高偏差而欠拟合。它太简单无法捕获数据的潜在模式。解决方案包括使用更复杂的模型、添加更多特征、降低正则化强度或从现有数据中工程更好的特征。",
    diagram: "",
    terms: ["bias_variance","overfitting","feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 147,
    q: "What is repeated K-fold cross-validation?",
    qChinese: "什么是重复K折交叉验证？",
    options: [
      "A) Running K-fold once with larger K",
      "B) Using K-fold only on the training set",
      "C) Performing K-fold cross-validation multiple times with different random splits and averaging",
      "D) Repeating the training process without validation"
    ],
    optionsChinese: [
      "A) 使用更大的K运行一次K折",
      "B) 仅在训练集上使用K折",
      "C) 使用不同的随机分割多次执行K折交叉验证并取平均",
      "D) 不进行验证重复训练过程"
    ],
    answer: 2,
    explanation: "Repeated K-fold runs the entire K-fold cross-validation procedure multiple times, each with different random partitions, and averages all results. This reduces the variance of the performance estimate caused by the randomness of fold assignments. Common choices are 5x2 or 10x10 repeated cross-validation.",
    explanationChinese: "重复K折多次运行整个K折交叉验证过程，每次使用不同的随机分区，并对所有结果取平均。这减少了由折分配随机性引起的性能估计方差。常见选择是5x2或10x10重复交叉验证。",
    diagram: "",
    terms: ["cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 148,
    q: "What is the irreducible error in the bias-variance decomposition?",
    qChinese: "偏差-方差分解中的不可约误差是什么？",
    options: [
      "A) Error that can be eliminated with a better model",
      "B) Error from using the wrong algorithm",
      "C) Error caused by insufficient features",
      "D) Error due to inherent noise in the data that no model can eliminate"
    ],
    optionsChinese: [
      "A) 可以用更好的模型消除的误差",
      "B) 使用错误算法导致的误差",
      "C) 由特征不足导致的误差",
      "D) 由数据中固有噪声导致的任何模型都无法消除的误差"
    ],
    answer: 3,
    explanation: "Irreducible error comes from noise inherent in the data, such as unmeasured variables or random measurement errors. Total error equals bias squared plus variance plus irreducible error. No model can reduce the irreducible component, setting a lower bound on achievable prediction error for any algorithm.",
    explanationChinese: "不可约误差来自数据中固有的噪声，如未测量的变量或随机测量误差。总误差等于偏差平方加方差加不可约误差。没有模型可以减少不可约部分，为任何算法可达到的预测误差设置了下限。",
    diagram: "",
    terms: ["bias_variance"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 149,
    q: "What is Group K-Fold cross-validation?",
    qChinese: "什么是分组K折交叉验证？",
    options: [
      "A) K-fold that ensures samples from the same group never appear in both train and test sets",
      "B) Standard K-fold with random grouping",
      "C) K-fold applied separately to each class",
      "D) K-fold with variable fold sizes"
    ],
    optionsChinese: [
      "A) 确保来自同一组的样本不同时出现在训练和测试集中的K折",
      "B) 随机分组的标准K折",
      "C) 分别应用于每个类别的K折",
      "D) 折大小可变的K折"
    ],
    answer: 0,
    explanation: "Group K-Fold ensures that all samples from the same group stay together in either training or test, never split across both. This prevents data leakage when samples within a group are correlated, such as multiple measurements from the same patient or multiple frames from the same video.",
    explanationChinese: "分组K折确保来自同一组的所有样本保持在训练或测试中的一个，永远不会分散在两者中。当组内样本相关时，这防止了数据泄漏，例如来自同一患者的多次测量或来自同一视频的多帧。",
    diagram: "",
    terms: ["cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 150,
    q: "How can you detect if a model is suffering from high variance?",
    qChinese: "如何检测模型是否存在高方差问题？",
    options: [
      "A) Both training and validation errors are high",
      "B) Training error is much lower than validation error",
      "C) The model trains very quickly",
      "D) The model has very few parameters"
    ],
    optionsChinese: [
      "A) 训练和验证误差都很高",
      "B) 训练误差远低于验证误差",
      "C) 模型训练非常快",
      "D) 模型参数非常少"
    ],
    answer: 1,
    explanation: "High variance is identified by a significant gap between low training error and high validation error. The model fits the training data well but fails to generalize. Learning curves show converging performance only with much more data. Cross-validation helps detect this by showing inconsistent fold performance.",
    explanationChinese: "高方差通过低训练误差和高验证误差之间的显著差距来识别。模型很好地拟合了训练数据但无法泛化。学习曲线显示只有在更多数据时性能才会收敛。交叉验证通过显示不一致的折性能来帮助检测这一点。",
    diagram: "",
    terms: ["bias_variance","overfitting","cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  // ===== FEATURE ENGINEERING, FEATURE SELECTION, SCALING (151-170) =====
  {
    id: 151,
    q: "What is feature engineering?",
    qChinese: "什么是特征工程？",
    options: [
      "A) Automatically training a model on raw data",
      "B) Removing all features from the dataset",
      "C) The process of creating, transforming, and selecting features to improve model performance",
      "D) Collecting more training samples"
    ],
    optionsChinese: [
      "A) 自动在原始数据上训练模型",
      "B) 从数据集中移除所有特征",
      "C) 创建、转换和选择特征以提高模型性能的过程",
      "D) 收集更多训练样本"
    ],
    answer: 2,
    explanation: "Feature engineering involves creating new features from existing data, transforming variables, and selecting the most relevant ones. Good features can dramatically improve model performance. Examples include creating interaction terms, extracting date components, binning continuous variables, and encoding categorical data.",
    explanationChinese: "特征工程涉及从现有数据创建新特征、转换变量和选择最相关的特征。好的特征可以显著提高模型性能。示例包括创建交互项、提取日期组件、对连续变量分箱和编码分类数据。",
    diagram: "",
    terms: ["feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 152,
    q: "What is standardization (Z-score normalization)?",
    qChinese: "什么是标准化（Z分数归一化）？",
    options: [
      "A) Scaling features to a 0-1 range",
      "B) Removing duplicate features",
      "C) Converting categorical features to numbers",
      "D) Transforming features to have zero mean and unit variance"
    ],
    optionsChinese: [
      "A) 将特征缩放到0-1范围",
      "B) 移除重复特征",
      "C) 将分类特征转换为数字",
      "D) 将特征转换为零均值和单位方差"
    ],
    answer: 3,
    explanation: "Standardization subtracts the mean and divides by the standard deviation for each feature, resulting in features with zero mean and unit variance. It is essential for algorithms sensitive to feature scale like SVM, KNN, and gradient descent. Unlike min-max scaling, it is less affected by outliers.",
    explanationChinese: "标准化对每个特征减去均值并除以标准差，得到零均值和单位方差的特征。它对SVM、KNN和梯度下降等对特征尺度敏感的算法至关重要。与最小-最大缩放不同，它受异常值影响较小。",
    diagram: "",
    terms: ["feature_engineering","svm","gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 153,
    q: "What is min-max scaling?",
    qChinese: "什么是最小-最大缩放？",
    options: [
      "A) Scaling features to a fixed range, typically 0 to 1",
      "B) Removing the minimum and maximum values as outliers",
      "C) Selecting only the minimum and maximum features",
      "D) Computing the range of each feature"
    ],
    optionsChinese: [
      "A) 将特征缩放到固定范围，通常为0到1",
      "B) 移除最小值和最大值作为异常值",
      "C) 仅选择最小和最大特征",
      "D) 计算每个特征的范围"
    ],
    answer: 0,
    explanation: "Min-max scaling transforms features to a range between 0 and 1 using the formula (x - min) / (max - min). It preserves the original distribution shape and relationships. However, it is sensitive to outliers since a single extreme value can compress all other values into a small range.",
    explanationChinese: "最小-最大缩放使用公式(x - min) / (max - min)将特征转换到0和1之间的范围。它保留原始分布形状和关系。但是，它对异常值敏感，因为单个极端值可以将所有其他值压缩到一个小范围内。",
    diagram: "",
    terms: ["feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 154,
    q: "Why should you fit the scaler only on training data?",
    qChinese: "为什么应该只在训练数据上拟合缩放器？",
    options: [
      "A) To save computation time",
      "B) To prevent data leakage from the test set statistics into the training process",
      "C) Because the test set is too small",
      "D) Because scaling is optional for the test set"
    ],
    optionsChinese: [
      "A) 为了节省计算时间",
      "B) 防止测试集统计数据泄漏到训练过程中",
      "C) 因为测试集太小",
      "D) 因为缩放对测试集是可选的"
    ],
    answer: 1,
    explanation: "Fitting the scaler on the entire dataset including test data leaks information about the test distribution into training. The scaler should learn statistics (mean, std, min, max) only from training data and then transform both training and test data using those same statistics to maintain valid evaluation.",
    explanationChinese: "在包括测试数据的整个数据集上拟合缩放器会将测试分布的信息泄漏到训练中。缩放器应仅从训练数据学习统计信息（均值、标准差、最小值、最大值），然后使用相同的统计信息转换训练和测试数据，以保持有效的评估。",
    diagram: "",
    terms: ["feature_engineering","cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 155,
    q: "What is label encoding?",
    qChinese: "什么是标签编码？",
    options: [
      "A) Creating binary columns for each category",
      "B) Removing categorical features",
      "C) Assigning a unique integer to each category",
      "D) Normalizing the target variable"
    ],
    optionsChinese: [
      "A) 为每个类别创建二进制列",
      "B) 移除分类特征",
      "C) 为每个类别分配一个唯一的整数",
      "D) 归一化目标变量"
    ],
    answer: 2,
    explanation: "Label encoding converts each category to a unique integer. While simple and memory-efficient, it can introduce false ordinal relationships. For example, encoding red=0, blue=1, green=2 may imply green is greater than red. Use one-hot encoding for nominal features and label encoding for ordinal features.",
    explanationChinese: "标签编码将每个类别转换为唯一整数。虽然简单且内存高效，但它可能引入虚假的序数关系。例如，编码红=0、蓝=1、绿=2可能暗示绿大于红。对名义特征使用独热编码，对序数特征使用标签编码。",
    diagram: "",
    terms: ["feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 156,
    q: "What is target encoding?",
    qChinese: "什么是目标编码？",
    options: [
      "A) Encoding the target variable as binary",
      "B) Normalizing the target to range 0-1",
      "C) Creating dummy variables for the target",
      "D) Replacing each category with the mean of the target variable for that category"
    ],
    optionsChinese: [
      "A) 将目标变量编码为二进制",
      "B) 将目标归一化到0-1范围",
      "C) 为目标创建虚拟变量",
      "D) 用该类别的目标变量均值替换每个类别"
    ],
    answer: 3,
    explanation: "Target encoding replaces categorical values with the mean target value for each category. It handles high-cardinality features efficiently without creating many columns. However, it risks overfitting and data leakage if not properly regularized. Techniques like smoothing and cross-validation-based encoding mitigate this risk.",
    explanationChinese: "目标编码用每个类别的目标均值替换分类值。它有效地处理高基数特征而不创建许多列。然而，如果没有适当正则化，它有过拟合和数据泄漏的风险。平滑和基于交叉验证的编码技术减轻了这种风险。",
    diagram: "",
    terms: ["feature_engineering","overfitting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 157,
    q: "What is feature selection?",
    qChinese: "什么是特征选择？",
    options: [
      "A) Choosing the most relevant features and removing irrelevant or redundant ones",
      "B) Creating new features from existing ones",
      "C) Scaling all features to the same range",
      "D) Collecting additional features from external sources"
    ],
    optionsChinese: [
      "A) 选择最相关的特征并移除不相关或冗余的特征",
      "B) 从现有特征创建新特征",
      "C) 将所有特征缩放到相同范围",
      "D) 从外部来源收集额外特征"
    ],
    answer: 0,
    explanation: "Feature selection identifies and retains only the most informative features, removing noise and redundancy. This reduces overfitting, decreases training time, and improves interpretability. Methods include filter approaches using statistical tests, wrapper methods like recursive feature elimination, and embedded methods like Lasso.",
    explanationChinese: "特征选择识别并仅保留最有信息量的特征，移除噪声和冗余。这减少过拟合、缩短训练时间并提高可解释性。方法包括使用统计测试的过滤方法、递归特征消除等包装方法和Lasso等嵌入方法。",
    diagram: "",
    terms: ["feature_engineering","overfitting","regularization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 158,
    q: "What is Recursive Feature Elimination (RFE)?",
    qChinese: "什么是递归特征消除（RFE）？",
    options: [
      "A) Adding features one at a time",
      "B) Iteratively removing the least important features based on model performance",
      "C) Randomly removing features",
      "D) Selecting features based on their variance"
    ],
    optionsChinese: [
      "A) 一次添加一个特征",
      "B) 基于模型性能迭代移除最不重要的特征",
      "C) 随机移除特征",
      "D) 基于方差选择特征"
    ],
    answer: 1,
    explanation: "RFE trains a model, ranks features by importance, removes the least important ones, and repeats until the desired number of features remains. It is a wrapper method that considers feature interactions. Cross-validated RFE (RFECV) automatically determines the optimal number of features to keep.",
    explanationChinese: "RFE训练模型，按重要性排列特征，移除最不重要的特征，并重复直到剩余所需数量的特征。它是一种考虑特征交互的包装方法。交叉验证RFE（RFECV）自动确定要保留的最优特征数量。",
    diagram: "",
    terms: ["feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 159,
    q: "What is the variance threshold method for feature selection?",
    qChinese: "用于特征选择的方差阈值方法是什么？",
    options: [
      "A) Selecting features based on their correlation with the target",
      "B) Selecting features with the highest mean values",
      "C) Removing features with variance below a specified threshold",
      "D) Removing features that are not normally distributed"
    ],
    optionsChinese: [
      "A) 基于与目标的相关性选择特征",
      "B) 选择均值最高的特征",
      "C) 移除方差低于指定阈值的特征",
      "D) 移除不服从正态分布的特征"
    ],
    answer: 2,
    explanation: "Variance threshold is a simple filter method that removes features with very low variance, as they carry little discriminative information. A feature with zero variance is constant and provides no useful signal. This is a quick preprocessing step before applying more sophisticated selection methods.",
    explanationChinese: "方差阈值是一种简单的过滤方法，移除方差非常低的特征，因为它们携带很少的判别信息。方差为零的特征是常数，不提供有用信号。这是在应用更复杂的选择方法之前的快速预处理步骤。",
    diagram: "",
    terms: ["feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 160,
    q: "What is the difference between filter, wrapper, and embedded feature selection methods?",
    qChinese: "过滤、包装和嵌入特征选择方法有什么区别？",
    options: [
      "A) They all use the same approach",
      "B) Wrapper methods do not use any model",
      "C) Filter is always best for large datasets",
      "D) Filter uses statistics independently; wrapper uses model performance; embedded incorporates selection into model training"
    ],
    optionsChinese: [
      "A) 它们都使用相同的方法",
      "B) 包装方法不使用任何模型",
      "C) 过滤对大数据集总是最好的",
      "D) 过滤独立使用统计数据；包装使用模型性能；嵌入将选择纳入模型训练"
    ],
    answer: 3,
    explanation: "Filter methods rank features using statistical measures like correlation or mutual information, independent of any model. Wrapper methods evaluate subsets by training models (e.g., RFE). Embedded methods perform selection during model training, like Lasso's L1 regularization which drives coefficients to zero.",
    explanationChinese: "过滤方法使用相关性或互信息等统计度量独立于任何模型对特征排名。包装方法通过训练模型评估子集（如RFE）。嵌入方法在模型训练期间执行选择，如Lasso的L1正则化将系数驱动为零。",
    diagram: "",
    terms: ["feature_engineering","regularization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 161,
    q: "What is the purpose of log transformation on features?",
    qChinese: "对特征进行对数变换的目的是什么？",
    options: [
      "A) To reduce right skewness and handle features with exponential distributions",
      "B) To increase the variance of the feature",
      "C) To make all values negative",
      "D) To remove missing values"
    ],
    optionsChinese: [
      "A) 减少右偏度并处理具有指数分布的特征",
      "B) 增加特征的方差",
      "C) 使所有值变为负数",
      "D) 移除缺失值"
    ],
    answer: 0,
    explanation: "Log transformation compresses large values and spreads small values, reducing right-skewed distributions to more symmetric ones. Many ML algorithms perform better with approximately normal feature distributions. It also helps linearize multiplicative relationships between features and target, improving linear model performance.",
    explanationChinese: "对数变换压缩大值并展开小值，将右偏分布减少为更对称的分布。许多ML算法在特征分布近似正态时表现更好。它还有助于线性化特征和目标之间的乘法关系，提高线性模型的性能。",
    diagram: "",
    terms: ["feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 162,
    q: "What is feature interaction?",
    qChinese: "什么是特征交互？",
    options: [
      "A) Removing correlated features",
      "B) Creating new features by combining two or more existing features",
      "C) Selecting the best single feature",
      "D) Normalizing features to the same scale"
    ],
    optionsChinese: [
      "A) 移除相关特征",
      "B) 通过组合两个或更多现有特征创建新特征",
      "C) 选择最好的单个特征",
      "D) 将特征归一化到相同尺度"
    ],
    answer: 1,
    explanation: "Feature interactions capture relationships between features that are not evident individually. For example, multiplying height and width creates an area feature. Polynomial features are systematic interactions. Decision trees capture interactions naturally through sequential splits, while linear models need them explicitly created.",
    explanationChinese: "特征交互捕获单独不明显的特征之间的关系。例如，将高度和宽度相乘创建面积特征。多项式特征是系统的交互。决策树通过顺序分割自然捕获交互，而线性模型需要它们被显式创建。",
    diagram: "",
    terms: ["feature_engineering","decision_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 163,
    q: "How should missing values be handled in a machine learning pipeline?",
    qChinese: "在机器学习流程中应如何处理缺失值？",
    options: [
      "A) Always delete rows with missing values",
      "B) Replace all missing values with zero",
      "C) Use strategies like imputation with mean, median, mode, or predictive models based on the data context",
      "D) Ignore missing values completely"
    ],
    optionsChinese: [
      "A) 总是删除有缺失值的行",
      "B) 将所有缺失值替换为零",
      "C) 根据数据上下文使用均值、中位数、众数或预测模型的填充策略",
      "D) 完全忽略缺失值"
    ],
    answer: 2,
    explanation: "Missing value handling depends on the amount and mechanism of missingness. Options include deletion (if few and random), imputation with statistics (mean for symmetric, median for skewed data), advanced imputation like KNN or iterative methods, or using algorithms that handle missing values natively like XGBoost.",
    explanationChinese: "缺失值处理取决于缺失的数量和机制。选项包括删除（如果少量且随机）、统计填充（对称分布用均值、偏斜分布用中位数）、KNN或迭代方法等高级填充，或使用原生处理缺失值的算法如XGBoost。",
    diagram: "",
    terms: ["feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 164,
    q: "What is binning (discretization) in feature engineering?",
    qChinese: "特征工程中的分箱（离散化）是什么？",
    options: [
      "A) Removing outliers from the data",
      "B) Encoding binary features",
      "C) Combining multiple datasets",
      "D) Converting continuous features into discrete intervals or categories"
    ],
    optionsChinese: [
      "A) 从数据中移除异常值",
      "B) 编码二进制特征",
      "C) 组合多个数据集",
      "D) 将连续特征转换为离散区间或类别"
    ],
    answer: 3,
    explanation: "Binning groups continuous values into discrete bins or intervals. Equal-width binning creates fixed-size intervals, while equal-frequency binning creates bins with similar counts. This can reduce noise, handle non-linear effects in linear models, and make the model more robust to outliers but loses granularity.",
    explanationChinese: "分箱将连续值分组到离散的区间中。等宽分箱创建固定大小的区间，而等频分箱创建具有相似计数的区间。这可以减少噪声、处理线性模型中的非线性效应、使模型对异常值更鲁棒，但会损失粒度。",
    diagram: "",
    terms: ["feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 165,
    q: "What is the purpose of robust scaling?",
    qChinese: "鲁棒缩放的目的是什么？",
    options: [
      "A) To scale features using median and interquartile range, making it resistant to outliers",
      "B) To scale features to exactly 0 and 1",
      "C) To remove all outliers from the data",
      "D) To make features follow a normal distribution"
    ],
    optionsChinese: [
      "A) 使用中位数和四分位距缩放特征，使其对异常值具有抵抗力",
      "B) 将特征精确缩放到0和1",
      "C) 从数据中移除所有异常值",
      "D) 使特征遵循正态分布"
    ],
    answer: 0,
    explanation: "Robust scaling uses the median and interquartile range (IQR) instead of mean and standard deviation. Since median and IQR are not affected by extreme values, this scaler handles datasets with outliers much better than standardization or min-max scaling. The formula is (x - median) / IQR.",
    explanationChinese: "鲁棒缩放使用中位数和四分位距（IQR）而非均值和标准差。由于中位数和IQR不受极端值影响，此缩放器比标准化或最小-最大缩放更好地处理有异常值的数据集。公式为(x - 中位数) / IQR。",
    diagram: "",
    terms: ["feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 166,
    q: "What is mutual information in feature selection?",
    qChinese: "特征选择中的互信息是什么？",
    options: [
      "A) The linear correlation between two features",
      "B) A measure of the dependency between a feature and the target, capturing both linear and non-linear relationships",
      "C) The shared variance between features",
      "D) The difference between feature means"
    ],
    optionsChinese: [
      "A) 两个特征之间的线性相关",
      "B) 特征和目标之间依赖性的度量，捕获线性和非线性关系",
      "C) 特征之间的共享方差",
      "D) 特征均值之间的差异"
    ],
    answer: 1,
    explanation: "Mutual information measures how much knowing a feature reduces uncertainty about the target variable. Unlike correlation, it captures both linear and non-linear dependencies. A value of zero means the feature is independent of the target. It is a useful filter method for feature selection in classification tasks.",
    explanationChinese: "互信息衡量知道一个特征对减少目标变量不确定性的程度。与相关性不同，它捕获线性和非线性依赖关系。值为零意味着特征与目标独立。它是分类任务中特征选择的有用过滤方法。",
    diagram: "",
    terms: ["feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 167,
    q: "What is SMOTE used for?",
    qChinese: "SMOTE用于什么？",
    options: [
      "A) Feature scaling",
      "B) Reducing the number of features",
      "C) Generating synthetic minority class samples to address class imbalance",
      "D) Splitting data into folds"
    ],
    optionsChinese: [
      "A) 特征缩放",
      "B) 减少特征数量",
      "C) 生成合成少数类样本以解决类别不平衡",
      "D) 将数据分成折"
    ],
    answer: 2,
    explanation: "SMOTE (Synthetic Minority Oversampling Technique) creates synthetic examples by interpolating between existing minority class samples. For each minority sample, it finds its K nearest minority neighbors and generates new points along the line segments connecting them. This avoids exact duplication of existing samples.",
    explanationChinese: "SMOTE（合成少数过采样技术）通过在现有少数类样本之间插值来创建合成样本。对于每个少数样本，它找到K个最近的少数邻居并沿连接它们的线段生成新点。这避免了现有样本的精确复制。",
    diagram: "",
    terms: ["feature_engineering","supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 168,
    q: "What is the difference between ordinal and nominal encoding?",
    qChinese: "序数编码和名义编码有什么区别？",
    options: [
      "A) They are the same encoding method",
      "B) Ordinal encoding only works with binary features",
      "C) Nominal encoding uses more memory",
      "D) Ordinal preserves the natural order of categories; nominal treats categories as unordered"
    ],
    optionsChinese: [
      "A) 它们是相同的编码方法",
      "B) 序数编码仅适用于二进制特征",
      "C) 名义编码使用更多内存",
      "D) 序数编码保留类别的自然顺序；名义编码将类别视为无序的"
    ],
    answer: 3,
    explanation: "Ordinal encoding assigns integers that reflect a meaningful order, like education levels (high school=1, bachelor=2, master=3). Nominal encoding, like one-hot, treats categories as unordered. Using ordinal encoding for nominal features can mislead models into assuming non-existent ordinal relationships.",
    explanationChinese: "序数编码分配反映有意义顺序的整数，如教育水平（高中=1、学士=2、硕士=3）。名义编码如独热编码将类别视为无序。对名义特征使用序数编码可能误导模型假设不存在的序数关系。",
    diagram: "",
    terms: ["feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 169,
    q: "What is power transformation (Box-Cox or Yeo-Johnson)?",
    qChinese: "什么是幂变换（Box-Cox或Yeo-Johnson）？",
    options: [
      "A) A family of transformations that make data more Gaussian-like by finding the optimal power parameter",
      "B) Raising all feature values to a fixed power",
      "C) Computing the power set of features",
      "D) Removing features with high kurtosis"
    ],
    optionsChinese: [
      "A) 通过找到最优幂参数使数据更接近高斯分布的一系列变换",
      "B) 将所有特征值提升到固定次幂",
      "C) 计算特征的幂集",
      "D) 移除高峰度的特征"
    ],
    answer: 0,
    explanation: "Power transformations like Box-Cox and Yeo-Johnson find the optimal lambda parameter to make the data distribution as close to normal as possible. Box-Cox requires positive values, while Yeo-Johnson handles both positive and negative data. These transformations can improve performance of algorithms assuming normality.",
    explanationChinese: "Box-Cox和Yeo-Johnson等幂变换找到最优lambda参数使数据分布尽可能接近正态。Box-Cox需要正值，而Yeo-Johnson处理正值和负值。这些变换可以提高假设正态性的算法的性能。",
    diagram: "",
    terms: ["feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 170,
    q: "What is the impact of outliers on machine learning models?",
    qChinese: "异常值对机器学习模型有什么影响？",
    options: [
      "A) Outliers always improve model performance",
      "B) Outliers can skew parameter estimates, distort loss functions, and degrade model accuracy",
      "C) Outliers have no effect on any model",
      "D) Outliers only affect unsupervised models"
    ],
    optionsChinese: [
      "A) 异常值总是改善模型性能",
      "B) 异常值可以使参数估计偏斜、扭曲损失函数并降低模型准确度",
      "C) 异常值对任何模型没有影响",
      "D) 异常值仅影响无监督模型"
    ],
    answer: 1,
    explanation: "Outliers disproportionately influence models using squared error losses like linear regression. They can shift the decision boundary in SVM, distort KNN distances, and affect feature scaling. Tree-based models are more robust to outliers. Strategies include removing, capping, or using robust methods like median-based approaches.",
    explanationChinese: "异常值对使用平方误差损失的模型如线性回归有不成比例的影响。它们可以移动SVM中的决策边界、扭曲KNN距离和影响特征缩放。基于树的模型对异常值更鲁棒。策略包括移除、截断或使用基于中位数等鲁棒方法。",
    diagram: "",
    terms: ["feature_engineering","svm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  // ===== UNSUPERVISED LEARNING: CLUSTERING, PCA, DIMENSIONALITY REDUCTION (171-190) =====
  {
    id: 171,
    q: "What is unsupervised learning?",
    qChinese: "什么是无监督学习？",
    options: [
      "A) Learning with labeled data",
      "B) Learning through rewards and penalties",
      "C) Learning patterns and structures from data without labeled outputs",
      "D) Learning only from text data"
    ],
    optionsChinese: [
      "A) 使用标注数据学习",
      "B) 通过奖励和惩罚学习",
      "C) 从没有标注输出的数据中学习模式和结构",
      "D) 仅从文本数据学习"
    ],
    answer: 2,
    explanation: "Unsupervised learning discovers hidden patterns in unlabeled data without predefined target outputs. Common tasks include clustering similar data points, dimensionality reduction, anomaly detection, and association rule mining. Unlike supervised learning, there is no ground truth to compare against during training.",
    explanationChinese: "无监督学习在没有预定义目标输出的未标注数据中发现隐藏模式。常见任务包括聚类相似数据点、降维、异常检测和关联规则挖掘。与监督学习不同，训练期间没有可供比较的基准真值。",
    diagram: "",
    terms: ["unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 172,
    q: "How does the K-Means clustering algorithm work?",
    qChinese: "K-均值聚类算法如何工作？",
    options: [
      "A) By building a decision tree on the data",
      "B) By projecting data onto principal components",
      "C) By computing pairwise distances between all points",
      "D) By iteratively assigning points to the nearest centroid and updating centroids until convergence"
    ],
    optionsChinese: [
      "A) 通过在数据上构建决策树",
      "B) 通过将数据投影到主成分上",
      "C) 通过计算所有点之间的成对距离",
      "D) 通过迭代将点分配到最近的质心并更新质心直到收敛"
    ],
    answer: 3,
    explanation: "K-Means initializes K cluster centroids, assigns each data point to its nearest centroid, then recalculates centroids as the mean of assigned points. This process repeats until assignments stabilize. It minimizes within-cluster sum of squared distances. The algorithm is fast but sensitive to initialization.",
    explanationChinese: "K-均值初始化K个聚类质心，将每个数据点分配到最近的质心，然后将质心重新计算为分配点的均值。此过程重复直到分配稳定。它最小化簇内平方距离和。该算法速度快但对初始化敏感。",
    diagram: "",
    terms: ["k_means","unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 173,
    q: "What is the elbow method in K-Means?",
    qChinese: "K-均值中的肘部法则是什么？",
    options: [
      "A) A technique for finding the optimal number of clusters by plotting inertia vs K",
      "B) A method for selecting the best features",
      "C) A method for initializing centroids",
      "D) A way to handle outliers in clustering"
    ],
    optionsChinese: [
      "A) 通过绘制惯性与K的关系来找到最优聚类数的技术",
      "B) 选择最佳特征的方法",
      "C) 初始化质心的方法",
      "D) 处理聚类中异常值的方法"
    ],
    answer: 0,
    explanation: "The elbow method plots the within-cluster sum of squares (inertia) against different K values. The optimal K is at the elbow point where adding more clusters gives diminishing improvement. The curve bends sharply at this point. However, the elbow is not always clearly defined in practice.",
    explanationChinese: "肘部法则绘制簇内平方和（惯性）与不同K值的关系。最优K在肘部点处，添加更多聚类给出递减的改善。曲线在此处急剧弯曲。然而，在实践中肘部并不总是清晰定义的。",
    diagram: "",
    terms: ["k_means","unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 174,
    q: "What is the silhouette score?",
    qChinese: "什么是轮廓系数？",
    options: [
      "A) The number of clusters found",
      "B) A measure of how similar a point is to its own cluster compared to neighboring clusters, ranging from -1 to 1",
      "C) The total distance between centroids",
      "D) The accuracy of the clustering algorithm"
    ],
    optionsChinese: [
      "A) 找到的聚类数量",
      "B) 衡量一个点与其自身簇相比与相邻簇的相似程度的度量，范围从-1到1",
      "C) 质心之间的总距离",
      "D) 聚类算法的准确度"
    ],
    answer: 1,
    explanation: "The silhouette score measures clustering quality for each point. A score near 1 means the point is well-matched to its cluster and poorly matched to neighbors. Near 0 means the point is on the boundary. Negative values indicate potential misassignment. The average across all points evaluates overall clustering.",
    explanationChinese: "轮廓系数衡量每个点的聚类质量。接近1的分数意味着该点与其簇匹配良好，与邻近簇匹配差。接近0意味着该点在边界上。负值表示可能的错误分配。所有点的平均值评估整体聚类。",
    diagram: "",
    terms: ["k_means","unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 175,
    q: "What is Principal Component Analysis (PCA)?",
    qChinese: "什么是主成分分析（PCA）？",
    options: [
      "A) A clustering algorithm",
      "B) A classification algorithm",
      "C) A dimensionality reduction technique that projects data onto directions of maximum variance",
      "D) A method for handling missing values"
    ],
    optionsChinese: [
      "A) 一种聚类算法",
      "B) 一种分类算法",
      "C) 将数据投影到最大方差方向上的降维技术",
      "D) 一种处理缺失值的方法"
    ],
    answer: 2,
    explanation: "PCA finds orthogonal directions (principal components) that capture the most variance in the data. The first component captures the most variance, each subsequent component captures the maximum remaining variance while being orthogonal. Projecting onto fewer components reduces dimensions while preserving the most information.",
    explanationChinese: "PCA找到捕获数据中最多方差的正交方向（主成分）。第一个成分捕获最多方差，每个后续成分在正交的同时捕获最大剩余方差。投影到更少的成分上在保留最多信息的同时降低维度。",
    diagram: "",
    terms: ["pca","unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 176,
    q: "What does the explained variance ratio in PCA tell you?",
    qChinese: "PCA中的解释方差比告诉你什么？",
    options: [
      "A) The accuracy of the PCA model",
      "B) The correlation between components",
      "C) The number of components to use",
      "D) The proportion of total variance captured by each principal component"
    ],
    optionsChinese: [
      "A) PCA模型的准确度",
      "B) 成分之间的相关性",
      "C) 要使用的成分数量",
      "D) 每个主成分捕获的总方差的比例"
    ],
    answer: 3,
    explanation: "The explained variance ratio shows what fraction of total data variance each principal component captures. For example, if the first two components explain 90% of the variance, reducing to two dimensions preserves most of the information. The cumulative explained variance helps decide how many components to keep.",
    explanationChinese: "解释方差比显示每个主成分捕获总数据方差的多少比例。例如，如果前两个成分解释了90%的方差，减少到两个维度保留了大部分信息。累积解释方差帮助决定保留多少个成分。",
    diagram: "",
    terms: ["pca"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 177,
    q: "Why should data be standardized before applying PCA?",
    qChinese: "为什么在应用PCA之前应该标准化数据？",
    options: [
      "A) Because PCA is sensitive to feature scales and would be dominated by high-variance features otherwise",
      "B) To make PCA run faster",
      "C) To remove missing values",
      "D) To convert categorical features"
    ],
    optionsChinese: [
      "A) 因为PCA对特征尺度敏感，否则会被高方差特征主导",
      "B) 使PCA运行更快",
      "C) 移除缺失值",
      "D) 转换分类特征"
    ],
    answer: 0,
    explanation: "PCA finds directions of maximum variance. Without standardization, features measured in larger units would have artificially larger variance and dominate the principal components. Standardizing ensures all features contribute equally to the analysis regardless of their original measurement scales.",
    explanationChinese: "PCA寻找最大方差的方向。没有标准化，以较大单位测量的特征会有人为更大的方差并主导主成分。标准化确保所有特征无论其原始测量尺度如何都对分析做出同等贡献。",
    diagram: "",
    terms: ["pca","feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 178,
    q: "What is hierarchical clustering?",
    qChinese: "什么是层次聚类？",
    options: [
      "A) Clustering with a fixed number of clusters",
      "B) Building a tree of clusters by iteratively merging or splitting groups",
      "C) A supervised classification method",
      "D) Clustering based on principal components"
    ],
    optionsChinese: [
      "A) 固定聚类数量的聚类",
      "B) 通过迭代合并或分割组来构建聚类树",
      "C) 一种监督分类方法",
      "D) 基于主成分的聚类"
    ],
    answer: 1,
    explanation: "Hierarchical clustering creates a hierarchy of clusters displayed as a dendrogram. Agglomerative (bottom-up) starts with each point as a cluster and merges the closest pairs. Divisive (top-down) starts with one cluster and splits. It does not require specifying K in advance and reveals nested cluster structure.",
    explanationChinese: "层次聚类创建以树状图显示的聚类层次结构。凝聚（自底向上）从每个点作为一个簇开始，合并最近的对。分裂（自顶向下）从一个簇开始并分裂。它不需要预先指定K，并揭示嵌套的聚类结构。",
    diagram: "",
    terms: ["unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 179,
    q: "What is DBSCAN clustering?",
    qChinese: "什么是DBSCAN聚类？",
    options: [
      "A) A centroid-based clustering method",
      "B) A supervised clustering technique",
      "C) A density-based algorithm that finds clusters of arbitrary shape and identifies outliers",
      "D) A hierarchical method requiring the number of clusters"
    ],
    optionsChinese: [
      "A) 基于质心的聚类方法",
      "B) 一种监督聚类技术",
      "C) 一种基于密度的算法，找到任意形状的簇并识别异常值",
      "D) 需要聚类数量的层次方法"
    ],
    answer: 2,
    explanation: "DBSCAN (Density-Based Spatial Clustering of Applications with Noise) groups points in dense regions and marks sparse-region points as noise. It requires two parameters: epsilon (neighborhood radius) and min_samples (minimum points per cluster). Unlike K-Means, it handles non-spherical clusters and does not need K specified.",
    explanationChinese: "DBSCAN（基于密度的空间聚类应用含噪声）将密集区域的点分组，并将稀疏区域的点标记为噪声。它需要两个参数：epsilon（邻域半径）和min_samples（每个簇的最少点数）。与K-均值不同，它处理非球形簇且不需要指定K。",
    diagram: "",
    terms: ["unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 180,
    q: "What is the main limitation of K-Means clustering?",
    qChinese: "K-均值聚类的主要局限是什么？",
    options: [
      "A) It can handle any cluster shape",
      "B) It can only cluster binary data",
      "C) It is too slow for large datasets",
      "D) It assumes spherical clusters of similar size and requires K to be specified in advance"
    ],
    optionsChinese: [
      "A) 它可以处理任何聚类形状",
      "B) 它只能聚类二进制数据",
      "C) 对大型数据集来说太慢",
      "D) 它假设大小相似的球形聚类，并需要预先指定K"
    ],
    answer: 3,
    explanation: "K-Means assumes clusters are spherical and roughly equal in size because it minimizes distances to centroids. It struggles with elongated, irregular, or varying-density clusters. Additionally, K must be predetermined. K-Means++ initialization helps convergence but does not address the cluster shape limitation.",
    explanationChinese: "K-均值假设聚类是球形的且大小大致相等，因为它最小化到质心的距离。它难以处理细长的、不规则的或密度变化的聚类。此外，K必须预先确定。K-均值++初始化帮助收敛但不解决聚类形状的局限性。",
    diagram: "",
    terms: ["k_means","unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 181,
    q: "What is t-SNE used for?",
    qChinese: "t-SNE用于什么？",
    options: [
      "A) Visualizing high-dimensional data in 2D or 3D while preserving local structure",
      "B) Training classification models",
      "C) Selecting the best features",
      "D) Predicting cluster labels"
    ],
    optionsChinese: [
      "A) 在保留局部结构的同时将高维数据可视化为2D或3D",
      "B) 训练分类模型",
      "C) 选择最佳特征",
      "D) 预测聚类标签"
    ],
    answer: 0,
    explanation: "t-SNE (t-distributed Stochastic Neighbor Embedding) is a non-linear dimensionality reduction technique designed for visualization. It preserves local neighborhoods, making similar points stay close and dissimilar points move apart. However, it is computationally expensive, non-deterministic, and not suitable for feature extraction.",
    explanationChinese: "t-SNE（t分布随机邻居嵌入）是一种为可视化设计的非线性降维技术。它保留局部邻域，使相似点保持接近，不相似的点分开。然而，它计算成本高、非确定性的，且不适合特征提取。",
    diagram: "",
    terms: ["pca","unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 182,
    q: "What is the difference between PCA and t-SNE?",
    qChinese: "PCA和t-SNE有什么区别？",
    options: [
      "A) They perform the same transformation",
      "B) PCA is linear and preserves global variance; t-SNE is non-linear and preserves local structure",
      "C) PCA is only for visualization; t-SNE is for feature extraction",
      "D) t-SNE is faster than PCA"
    ],
    optionsChinese: [
      "A) 它们执行相同的转换",
      "B) PCA是线性的并保留全局方差；t-SNE是非线性的并保留局部结构",
      "C) PCA仅用于可视化；t-SNE用于特征提取",
      "D) t-SNE比PCA快"
    ],
    answer: 1,
    explanation: "PCA is a linear method that projects data along directions of maximum global variance, useful for both dimensionality reduction and feature extraction. t-SNE is non-linear, focusing on preserving local neighborhood relationships for visualization. PCA is deterministic and fast; t-SNE is stochastic and slower.",
    explanationChinese: "PCA是一种线性方法，沿最大全局方差方向投影数据，适用于降维和特征提取。t-SNE是非线性的，专注于为可视化保留局部邻域关系。PCA是确定性的且快速；t-SNE是随机的且较慢。",
    diagram: "",
    terms: ["pca","unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 183,
    q: "What is K-Means++ initialization?",
    qChinese: "什么是K-Means++初始化？",
    options: [
      "A) Randomly selecting K centroids from the data",
      "B) Using the mean of all data as the first centroid",
      "C) Selecting initial centroids that are spread far apart to improve convergence",
      "D) Starting with the K smallest data points"
    ],
    optionsChinese: [
      "A) 从数据中随机选择K个质心",
      "B) 使用所有数据的均值作为第一个质心",
      "C) 选择分散较远的初始质心以改善收敛",
      "D) 从K个最小的数据点开始"
    ],
    answer: 2,
    explanation: "K-Means++ selects the first centroid randomly, then chooses subsequent centroids with probability proportional to their squared distance from the nearest existing centroid. This spreads initial centroids apart, leading to better convergence and more consistent results than random initialization. It is the default in scikit-learn.",
    explanationChinese: "K-Means++随机选择第一个质心，然后以与最近现有质心的平方距离成比例的概率选择后续质心。这使初始质心分散开来，比随机初始化带来更好的收敛和更一致的结果。它是scikit-learn中的默认设置。",
    diagram: "",
    terms: ["k_means"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 184,
    q: "What is Gaussian Mixture Model (GMM) clustering?",
    qChinese: "什么是高斯混合模型（GMM）聚类？",
    options: [
      "A) A hard assignment clustering like K-Means",
      "B) A hierarchical clustering method",
      "C) A density-based clustering like DBSCAN",
      "D) A probabilistic model that assigns soft cluster memberships using Gaussian distributions"
    ],
    optionsChinese: [
      "A) 像K-均值一样的硬分配聚类",
      "B) 一种层次聚类方法",
      "C) 像DBSCAN一样的基于密度的聚类",
      "D) 使用高斯分布分配软聚类成员的概率模型"
    ],
    answer: 3,
    explanation: "GMM assumes data is generated from a mixture of Gaussian distributions. Unlike K-Means, which assigns each point to one cluster, GMM provides soft probabilities of belonging to each cluster. It handles elliptical clusters and uses the Expectation-Maximization algorithm to fit parameters iteratively.",
    explanationChinese: "GMM假设数据由高斯分布的混合生成。与K-均值将每个点分配到一个簇不同，GMM提供属于每个簇的软概率。它处理椭圆形簇并使用期望最大化算法迭代拟合参数。",
    diagram: "",
    terms: ["unsupervised_learning","k_means"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 185,
    q: "What is dimensionality reduction used for?",
    qChinese: "降维用于什么？",
    options: [
      "A) Reducing the number of features while preserving important information to combat the curse of dimensionality",
      "B) Increasing the number of features",
      "C) Adding noise to the data",
      "D) Converting regression to classification"
    ],
    optionsChinese: [
      "A) 在保留重要信息的同时减少特征数量以对抗维度灾难",
      "B) 增加特征数量",
      "C) 向数据添加噪声",
      "D) 将回归转换为分类"
    ],
    answer: 0,
    explanation: "Dimensionality reduction decreases the number of features while retaining the most meaningful information. It helps visualize high-dimensional data, reduces computational costs, mitigates the curse of dimensionality, and can reduce overfitting. Methods include PCA, t-SNE, UMAP, and autoencoders for different use cases.",
    explanationChinese: "降维在保留最有意义信息的同时减少特征数量。它帮助可视化高维数据、降低计算成本、缓解维度灾难，并可以减少过拟合。方法包括PCA、t-SNE、UMAP和自编码器，适用于不同用例。",
    diagram: "",
    terms: ["pca","unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 186,
    q: "What is UMAP and how does it compare to t-SNE?",
    qChinese: "UMAP是什么，它与t-SNE相比如何？",
    options: [
      "A) UMAP is a linear method while t-SNE is non-linear",
      "B) UMAP is faster, preserves more global structure, and scales better than t-SNE",
      "C) UMAP and t-SNE produce identical results",
      "D) UMAP only works with categorical data"
    ],
    optionsChinese: [
      "A) UMAP是线性方法而t-SNE是非线性的",
      "B) UMAP更快、保留更多全局结构且比t-SNE扩展性更好",
      "C) UMAP和t-SNE产生相同的结果",
      "D) UMAP仅适用于分类数据"
    ],
    answer: 1,
    explanation: "UMAP (Uniform Manifold Approximation and Projection) is a modern dimensionality reduction technique that is generally faster than t-SNE and better preserves global data structure while maintaining local relationships. It also supports supervised dimensionality reduction and can be used for general-purpose non-linear reduction.",
    explanationChinese: "UMAP（均匀流形近似和投影）是一种现代降维技术，通常比t-SNE更快，在保持局部关系的同时更好地保留全局数据结构。它还支持监督降维，可用于通用非线性降维。",
    diagram: "",
    terms: ["pca","unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 187,
    q: "What is anomaly detection in unsupervised learning?",
    qChinese: "无监督学习中的异常检测是什么？",
    options: [
      "A) Classifying data with known labels",
      "B) Removing all outliers before training",
      "C) Identifying data points that deviate significantly from the normal patterns in the data",
      "D) Finding the majority cluster"
    ],
    optionsChinese: [
      "A) 使用已知标签分类数据",
      "B) 在训练前移除所有异常值",
      "C) 识别显著偏离数据中正常模式的数据点",
      "D) 找到多数簇"
    ],
    answer: 2,
    explanation: "Anomaly detection identifies rare observations that differ substantially from normal data patterns. Techniques include Isolation Forest, One-Class SVM, DBSCAN marking noise points, and statistical methods. Applications span fraud detection, network intrusion detection, manufacturing defects, and medical anomaly identification.",
    explanationChinese: "异常检测识别与正常数据模式存在实质性差异的稀有观测。技术包括孤立森林、一类SVM、DBSCAN标记噪声点和统计方法。应用涵盖欺诈检测、网络入侵检测、制造缺陷和医疗异常识别。",
    diagram: "",
    terms: ["unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 188,
    q: "What is the difference between hard and soft clustering?",
    qChinese: "硬聚类和软聚类有什么区别？",
    options: [
      "A) Hard clustering is more accurate",
      "B) They produce the same results",
      "C) Soft clustering always uses more clusters",
      "D) Hard clustering assigns each point to exactly one cluster; soft clustering provides probabilities for multiple clusters"
    ],
    optionsChinese: [
      "A) 硬聚类更准确",
      "B) 它们产生相同的结果",
      "C) 软聚类总是使用更多簇",
      "D) 硬聚类将每个点精确分配到一个簇；软聚类为多个簇提供概率"
    ],
    answer: 3,
    explanation: "Hard clustering methods like K-Means assign each data point to exactly one cluster. Soft (fuzzy) clustering methods like GMM and Fuzzy C-Means provide membership probabilities across all clusters. Soft clustering is more informative for boundary points that could reasonably belong to multiple clusters.",
    explanationChinese: "硬聚类方法如K-均值将每个数据点精确分配到一个簇。软（模糊）聚类方法如GMM和模糊C均值提供跨所有簇的成员概率。软聚类对于可能合理属于多个簇的边界点更有信息量。",
    diagram: "",
    terms: ["k_means","unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 189,
    q: "What is the scree plot in PCA?",
    qChinese: "PCA中的碎石图是什么？",
    options: [
      "A) A plot of eigenvalues or explained variance for each component to determine how many to retain",
      "B) A plot of cluster assignments",
      "C) A plot of the first two principal components",
      "D) A plot of the original features"
    ],
    optionsChinese: [
      "A) 每个成分的特征值或解释方差的图，用于确定保留多少个",
      "B) 聚类分配的图",
      "C) 前两个主成分的图",
      "D) 原始特征的图"
    ],
    answer: 0,
    explanation: "A scree plot shows eigenvalues or explained variance ratios for each principal component in descending order. The point where the curve flattens (the elbow) suggests the optimal number of components to retain. Components beyond this point contribute little additional information and can be discarded.",
    explanationChinese: "碎石图按降序显示每个主成分的特征值或解释方差比。曲线变平的点（肘部）建议要保留的最优成分数量。超出此点的成分贡献很少的额外信息，可以被丢弃。",
    diagram: "",
    terms: ["pca"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 190,
    q: "What is the Calinski-Harabasz index used for?",
    qChinese: "Calinski-Harabasz指数用于什么？",
    options: [
      "A) Evaluating classification models",
      "B) Evaluating clustering quality by measuring the ratio of between-cluster to within-cluster dispersion",
      "C) Selecting features for regression",
      "D) Tuning neural network hyperparameters"
    ],
    optionsChinese: [
      "A) 评估分类模型",
      "B) 通过测量簇间与簇内离散度的比率来评估聚类质量",
      "C) 为回归选择特征",
      "D) 调整神经网络超参数"
    ],
    answer: 1,
    explanation: "The Calinski-Harabasz index (variance ratio criterion) evaluates clustering by comparing between-cluster variance to within-cluster variance. Higher values indicate dense, well-separated clusters. It can be used to compare different numbers of clusters. It is fast to compute but assumes convex clusters.",
    explanationChinese: "Calinski-Harabasz指数（方差比准则）通过比较簇间方差和簇内方差来评估聚类。更高的值表示密集、分离良好的簇。它可用于比较不同的聚类数量。计算速度快但假设凸聚类。",
    diagram: "",
    terms: ["k_means","unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  // ===== REGULARIZATION, HYPERPARAMETER TUNING, MODEL SELECTION (191-200) =====
  {
    id: 191,
    q: "What is regularization in machine learning?",
    qChinese: "机器学习中的正则化是什么？",
    options: [
      "A) Increasing model complexity to fit data better",
      "B) Normalizing the input features",
      "C) Adding a penalty term to the loss function to discourage overly complex models",
      "D) Splitting data into train and test sets"
    ],
    optionsChinese: [
      "A) 增加模型复杂度以更好地拟合数据",
      "B) 归一化输入特征",
      "C) 向损失函数添加惩罚项以阻止过于复杂的模型",
      "D) 将数据分为训练集和测试集"
    ],
    answer: 2,
    explanation: "Regularization adds a penalty for model complexity to the loss function, discouraging large parameter values. This constrains the model, reducing overfitting by preventing it from fitting noise in the training data. Common forms include L1 (Lasso), L2 (Ridge), and Elastic Net which combines both approaches.",
    explanationChinese: "正则化向损失函数添加模型复杂度的惩罚，阻止大的参数值。这约束模型，通过防止其拟合训练数据中的噪声来减少过拟合。常见形式包括L1（Lasso）、L2（Ridge）和结合两者的弹性网络。",
    diagram: "",
    terms: ["regularization","overfitting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 192,
    q: "What is L1 regularization (Lasso)?",
    qChinese: "什么是L1正则化（Lasso）？",
    options: [
      "A) Adding the sum of squared weights as a penalty",
      "B) Reducing the learning rate over time",
      "C) Dropping random neurons during training",
      "D) Adding the sum of absolute values of weights as a penalty, which can drive weights to exactly zero"
    ],
    optionsChinese: [
      "A) 添加权重平方和作为惩罚",
      "B) 随时间减少学习率",
      "C) 在训练期间随机丢弃神经元",
      "D) 添加权重绝对值之和作为惩罚，可以将权重驱动到恰好为零"
    ],
    answer: 3,
    explanation: "L1 regularization adds the sum of absolute weight values to the loss function. Its key property is sparsity: it can drive some weights exactly to zero, effectively performing feature selection. This makes Lasso valuable when you suspect many features are irrelevant and want an interpretable sparse model.",
    explanationChinese: "L1正则化向损失函数添加权重绝对值的总和。其关键属性是稀疏性：它可以将某些权重恰好驱动为零，有效执行特征选择。当你怀疑许多特征不相关且想要可解释的稀疏模型时，Lasso很有价值。",
    diagram: "",
    terms: ["regularization","feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 193,
    q: "What is L2 regularization (Ridge)?",
    qChinese: "什么是L2正则化（Ridge）？",
    options: [
      "A) Adding the sum of squared weight values as a penalty, which shrinks all weights toward zero",
      "B) Adding the sum of absolute weight values as a penalty",
      "C) Removing features with low importance",
      "D) Clipping gradients during training"
    ],
    optionsChinese: [
      "A) 添加权重平方值之和作为惩罚，使所有权重向零收缩",
      "B) 添加权重绝对值之和作为惩罚",
      "C) 移除重要性低的特征",
      "D) 在训练期间裁剪梯度"
    ],
    answer: 0,
    explanation: "L2 regularization adds the sum of squared weights to the loss, encouraging small but non-zero weights. Unlike L1, it does not produce exact zeros, so it keeps all features but reduces their impact. Ridge is especially useful when there are many correlated features, as it distributes weights among them.",
    explanationChinese: "L2正则化向损失添加权重平方的总和，鼓励小但非零的权重。与L1不同，它不产生精确的零，因此保留所有特征但减少其影响。Ridge在有许多相关特征时特别有用，因为它在它们之间分配权重。",
    diagram: "",
    terms: ["regularization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 194,
    q: "What is Elastic Net regularization?",
    qChinese: "什么是弹性网络正则化？",
    options: [
      "A) A neural network architecture",
      "B) A combination of L1 and L2 regularization controlled by a mixing parameter",
      "C) A type of dropout regularization",
      "D) A method for data augmentation"
    ],
    optionsChinese: [
      "A) 一种神经网络架构",
      "B) 由混合参数控制的L1和L2正则化的组合",
      "C) 一种dropout正则化",
      "D) 一种数据增强方法"
    ],
    answer: 1,
    explanation: "Elastic Net combines L1 and L2 penalties with a mixing ratio parameter (alpha). It inherits Lasso's ability to perform feature selection while also handling correlated features well like Ridge. This makes it a flexible default choice when the optimal type of regularization is unknown for the specific problem.",
    explanationChinese: "弹性网络结合L1和L2惩罚，带有混合比例参数（alpha）。它继承了Lasso执行特征选择的能力，同时像Ridge一样很好地处理相关特征。当特定问题的最佳正则化类型未知时，它是一个灵活的默认选择。",
    diagram: "",
    terms: ["regularization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 195,
    q: "What is Grid Search for hyperparameter tuning?",
    qChinese: "用于超参数调整的网格搜索是什么？",
    options: [
      "A) Randomly selecting hyperparameter values",
      "B) Using gradient descent on hyperparameters",
      "C) Exhaustively trying every combination from specified hyperparameter value ranges",
      "D) Manually setting hyperparameters based on intuition"
    ],
    optionsChinese: [
      "A) 随机选择超参数值",
      "B) 对超参数使用梯度下降",
      "C) 从指定的超参数值范围中穷举尝试每个组合",
      "D) 根据直觉手动设置超参数"
    ],
    answer: 2,
    explanation: "Grid Search evaluates all possible combinations of hyperparameter values from predefined grids. For each combination, it typically uses cross-validation to estimate performance. While thorough, it becomes computationally expensive as the number of hyperparameters and their values grow. This is called the curse of dimensionality.",
    explanationChinese: "网格搜索从预定义的网格中评估所有可能的超参数值组合。对于每个组合，它通常使用交叉验证来估计性能。虽然彻底，但随着超参数数量和值的增长，计算成本会变得很高。这被称为维度灾难。",
    diagram: "",
    terms: ["cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 196,
    q: "What is Random Search for hyperparameter tuning?",
    qChinese: "用于超参数调整的随机搜索是什么？",
    options: [
      "A) Trying all possible combinations",
      "B) Manually selecting one set of hyperparameters",
      "C) Using the default hyperparameters",
      "D) Randomly sampling hyperparameter combinations from specified distributions"
    ],
    optionsChinese: [
      "A) 尝试所有可能的组合",
      "B) 手动选择一组超参数",
      "C) 使用默认超参数",
      "D) 从指定分布中随机采样超参数组合"
    ],
    answer: 3,
    explanation: "Random Search samples hyperparameter values randomly from specified distributions for a fixed number of iterations. Research shows it often outperforms Grid Search because it explores a wider range of values for each hyperparameter. It is especially efficient when only a few hyperparameters significantly affect performance.",
    explanationChinese: "随机搜索在固定迭代次数中从指定分布中随机采样超参数值。研究表明它通常优于网格搜索，因为它为每个超参数探索更广泛的值范围。当只有少数超参数显著影响性能时，它特别高效。",
    diagram: "",
    terms: ["cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 197,
    q: "What is Bayesian Optimization for hyperparameter tuning?",
    qChinese: "用于超参数调整的贝叶斯优化是什么？",
    options: [
      "A) Using a probabilistic model to intelligently select the next hyperparameters to evaluate based on past results",
      "B) Exhaustively searching all combinations",
      "C) Using Naive Bayes for classification",
      "D) Randomly sampling hyperparameters without learning"
    ],
    optionsChinese: [
      "A) 使用概率模型根据过去的结果智能选择下一个要评估的超参数",
      "B) 穷举搜索所有组合",
      "C) 使用朴素贝叶斯进行分类",
      "D) 不学习地随机采样超参数"
    ],
    answer: 0,
    explanation: "Bayesian Optimization builds a probabilistic surrogate model of the objective function and uses an acquisition function to decide which hyperparameters to try next. It learns from previous evaluations to focus on promising regions, typically finding good hyperparameters in fewer iterations than grid or random search.",
    explanationChinese: "贝叶斯优化构建目标函数的概率代理模型，并使用获取函数决定接下来尝试哪些超参数。它从以前的评估中学习，集中在有前景的区域，通常比网格或随机搜索在更少的迭代中找到好的超参数。",
    diagram: "",
    terms: ["cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 198,
    q: "What is early stopping?",
    qChinese: "什么是早停？",
    options: [
      "A) Stopping the training before loading the data",
      "B) Halting training when validation performance stops improving to prevent overfitting",
      "C) Reducing the batch size during training",
      "D) Removing training data that is too hard"
    ],
    optionsChinese: [
      "A) 在加载数据之前停止训练",
      "B) 当验证性能停止改善时停止训练以防止过拟合",
      "C) 在训练期间减小批量大小",
      "D) 移除太难的训练数据"
    ],
    answer: 1,
    explanation: "Early stopping monitors validation performance during training and stops when it begins to degrade, indicating the onset of overfitting. The model from the best validation epoch is saved. It acts as a form of regularization, effectively limiting model complexity by restricting the number of training iterations.",
    explanationChinese: "早停在训练期间监控验证性能，当性能开始退化时停止，表明过拟合的开始。保存最佳验证epoch的模型。它作为正则化的一种形式，通过限制训练迭代次数有效地限制模型复杂度。",
    diagram: "",
    terms: ["regularization","overfitting","cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 199,
    q: "What is the purpose of model selection in machine learning?",
    qChinese: "机器学习中模型选择的目的是什么？",
    options: [
      "A) Always choosing the most complex model",
      "B) Using only one type of algorithm",
      "C) Comparing different algorithms and configurations to find the best performing model for the task",
      "D) Selecting the fastest model regardless of accuracy"
    ],
    optionsChinese: [
      "A) 总是选择最复杂的模型",
      "B) 仅使用一种算法",
      "C) 比较不同的算法和配置以找到任务的最佳模型",
      "D) 不考虑准确度选择最快的模型"
    ],
    answer: 2,
    explanation: "Model selection involves comparing multiple algorithms, architectures, and hyperparameter configurations using validation data or cross-validation. The goal is finding the model that generalizes best, not just fits training data. Considerations include accuracy, computational cost, interpretability, and deployment constraints.",
    explanationChinese: "模型选择涉及使用验证数据或交叉验证比较多种算法、架构和超参数配置。目标是找到泛化最好的模型，而不仅仅是拟合训练数据。考虑因素包括准确度、计算成本、可解释性和部署约束。",
    diagram: "",
    terms: ["cross_validation","bias_variance"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 200,
    q: "What is the Occam's Razor principle applied to model selection?",
    qChinese: "奥卡姆剃刀原则如何应用于模型选择？",
    options: [
      "A) Always use the most complex model available",
      "B) Train for as many epochs as possible",
      "C) Use as many features as possible",
      "D) Among models with similar performance, prefer the simplest one"
    ],
    optionsChinese: [
      "A) 总是使用可用的最复杂模型",
      "B) 训练尽可能多的epoch",
      "C) 使用尽可能多的特征",
      "D) 在性能相似的模型中，优先选择最简单的"
    ],
    answer: 3,
    explanation: "Occam's Razor in ML states that when multiple models achieve comparable performance, the simpler model should be preferred. Simpler models are easier to interpret, less prone to overfitting, faster to train and deploy, and more likely to generalize well. This principle guides model selection toward parsimony.",
    explanationChinese: "ML中的奥卡姆剃刀原则指出，当多个模型达到相当的性能时，应优先选择更简单的模型。更简单的模型更容易解释、不容易过拟合、训练和部署更快，且更可能良好泛化。这一原则引导模型选择趋向简约。",
    diagram: "",
    terms: ["bias_variance","overfitting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  }
];
