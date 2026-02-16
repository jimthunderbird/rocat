const questionsML = [
  {
    id: 1,
    q: "In linear regression, what does the ordinary least squares (OLS) method minimize?",
    qChinese: "在线性回归中，普通最小二乘法（OLS）最小化什么？",
    options: [
      "A) Sum of squared residuals",
      "B) Sum of absolute residuals",
      "C) Maximum residual",
      "D) Median of residuals"
    ],
    optionsChinese: [
      "A) 残差平方和",
      "B) 残差绝对值之和",
      "C) 最大残差",
      "D) 残差的中位数"
    ],
    answer: 0,
    explanation: "OLS minimizes the sum of squared residuals between predicted and actual values. Squaring ensures all errors are positive, penalizes larger errors more heavily, and produces a convex objective function with a unique closed-form solution given by the normal equations w = (X^T X)^{-1} X^T y.",
    explanationChinese: "OLS最小化预测值与实际值之间的残差平方和。平方确保所有误差为正，对较大误差惩罚更重，并产生一个凸目标函数，通过正规方程w = (X^T X)^{-1} X^T y有唯一闭式解。",
    diagram: "",
    terms: ["linear_regression", "gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 2,
    q: "What is the closed-form solution for linear regression weights using the normal equation?",
    qChinese: "使用正规方程的线性回归权重的闭式解是什么？",
    options: [
      "A) w = X^T y",
      "B) w = X^{-1} y",
      "C) w = (X X^T)^{-1} y",
      "D) w = (X^T X)^{-1} X^T y",
    ],
    optionsChinese: [
      "A) w = X^T y",
      "B) w = X^{-1} y",
      "C) w = (X X^T)^{-1} y",
      "D) w = (X^T X)^{-1} X^T y",
    ],
    answer: 3,
    explanation: "The normal equation w = (X^T X)^{-1} X^T y provides the optimal weights by setting the gradient of the squared loss to zero. This closed-form solution requires the matrix X^T X to be invertible and works well for small to moderate datasets but becomes expensive for very large feature dimensions.",
    explanationChinese: "正规方程w = (X^T X)^{-1} X^T y通过将平方损失的梯度设为零来提供最优权重。此闭式解要求矩阵X^T X可逆，适用于中小型数据集，但对非常大的特征维度计算成本较高。",
    diagram: "",
    terms: ["linear_regression", "gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 3,
    q: "Which metric is most commonly used to evaluate linear regression models?",
    qChinese: "哪个指标最常用于评估线性回归模型？",
    options: [
      "A) Mean Squared Error (MSE)",
      "B) F1 Score",
      "C) Accuracy",
      "D) AUC-ROC"
    ],
    optionsChinese: [
      "A) 均方误差（MSE）",
      "B) F1分数",
      "C) 准确率",
      "D) AUC-ROC"
    ],
    answer: 0,
    explanation: "MSE averages the squared differences between predicted and actual values and is the standard regression metric. It penalizes larger errors more than smaller ones. Related metrics include RMSE (square root of MSE for same-unit interpretation) and R-squared which measures variance explained by the model.",
    explanationChinese: "MSE对预测值与实际值之间的平方差取平均，是标准的回归指标。它对较大误差的惩罚大于较小误差。相关指标包括RMSE（MSE的平方根，与原始数据同单位）和R平方（衡量模型解释的方差）。",
    diagram: "",
    terms: ["linear_regression", "cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 4,
    q: "What does the R-squared (R²) value represent in linear regression?",
    qChinese: "线性回归中R平方（R²）值代表什么？",
    options: [
      "A) The correlation between features",
      "B) The slope of the regression line",
      "C) The number of features used",
      "D) The proportion of variance in the dependent variable explained by the model",
    ],
    optionsChinese: [
      "A) 特征之间的相关性",
      "B) 回归线的斜率",
      "C) 使用的特征数量",
      "D) 模型解释的因变量方差比例",
    ],
    answer: 3,
    explanation: "R² ranges from 0 to 1 and indicates the fraction of total variance in the target variable that the model explains. An R² of 0.85 means 85% of variance is captured. However, R² always increases with more features, so adjusted R² penalizes model complexity to give a more honest assessment.",
    explanationChinese: "R²范围从0到1，表示模型解释的目标变量总方差的比例。R²为0.85意味着捕获了85%的方差。但R²总是随特征增多而增加，因此调整R²会惩罚模型复杂度以给出更诚实的评估。",
    diagram: "",
    terms: ["linear_regression", "feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 5,
    q: "When applying gradient descent to linear regression, what determines the direction of each update?",
    qChinese: "对线性回归应用梯度下降时，什么决定了每次更新的方向？",
    options: [
      "A) The sign of the bias term",
      "B) The largest feature value in the dataset",
      "C) A random direction chosen at each step",
      "D) The negative gradient of the loss function with respect to the parameters",
    ],
    optionsChinese: [
      "A) 偏置项的符号",
      "B) 数据集中最大的特征值",
      "C) 每步随机选择的方向",
      "D) 损失函数相对于参数的负梯度",
    ],
    answer: 3,
    explanation: "Gradient descent updates parameters by moving in the direction of the negative gradient of the loss function. The gradient points toward the steepest ascent, so its negation gives the steepest descent. The learning rate controls step size, balancing convergence speed against stability.",
    explanationChinese: "梯度下降通过沿损失函数负梯度方向移动来更新参数。梯度指向最陡上升方向，因此其负方向给出最陡下降。学习率控制步长，平衡收敛速度与稳定性。",
    diagram: "",
    terms: ["linear_regression", "gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 6,
    q: "What problem does multicollinearity cause in linear regression?",
    qChinese: "多重共线性在线性回归中会导致什么问题？",
    options: [
      "A) Feature coefficient estimates become unstable and have high variance",
      "B) The model always underfits",
      "C) The loss function becomes non-convex",
      "D) The model cannot make predictions"
    ],
    optionsChinese: [
      "A) 特征系数估计变得不稳定且方差很高",
      "B) 模型总是欠拟合",
      "C) 损失函数变为非凸",
      "D) 模型无法做出预测"
    ],
    answer: 0,
    explanation: "Multicollinearity means features are highly correlated, making X^T X nearly singular. This inflates the variance of coefficient estimates, making them sensitive to small data changes. The model can still predict well overall, but individual coefficient interpretations become unreliable. Regularization or PCA can mitigate this.",
    explanationChinese: "多重共线性意味着特征高度相关，使X^T X接近奇异。这会膨胀系数估计的方差，使其对小的数据变化敏感。模型整体仍可预测良好，但单个系数的解释变得不可靠。正则化或PCA可以缓解此问题。",
    diagram: "",
    terms: ["linear_regression", "regularization", "principal_component_analysis"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 7,
    q: "In polynomial regression of degree d, how many parameters are there for a single input feature (including bias)?",
    qChinese: "对于单个输入特征的d次多项式回归，有多少个参数（包括偏置）？",
    options: [
      "A) d",
      "B) 2d",
      "C) d + 1",
      "D) d²"
    ],
    optionsChinese: [
      "A) d",
      "B) 2d",
      "C) d + 1",
      "D) d²"
    ],
    answer: 2,
    explanation: "A degree-d polynomial y = w0 + w1*x + w2*x² + ... + wd*x^d has d+1 parameters: one bias (w0) plus one coefficient for each power of x from 1 to d. Polynomial regression is still linear in its parameters, so OLS can be applied after constructing polynomial features.",
    explanationChinese: "d次多项式y = w0 + w1*x + w2*x² + ... + wd*x^d有d+1个参数：一个偏置（w0）加上从1到d的每个x的幂次各一个系数。多项式回归在参数上仍是线性的，因此在构造多项式特征后可以应用OLS。",
    diagram: "",
    terms: ["linear_regression", "feature_engineering", "overfitting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 8,
    q: "What happens when you increase the degree of polynomial regression too much?",
    qChinese: "当多项式回归的次数增加过多时会发生什么？",
    options: [
      "A) The model always underfits",
      "B) The model overfits the training data",
      "C) Training error increases",
      "D) The model becomes more interpretable"
    ],
    optionsChinese: [
      "A) 模型总是欠拟合",
      "B) 模型对训练数据过拟合",
      "C) 训练误差增加",
      "D) 模型变得更易解释"
    ],
    answer: 1,
    explanation: "High-degree polynomials have enough flexibility to fit noise in training data, leading to overfitting. The model achieves low training error but high test error. This is a classic example of the bias-variance tradeoff: lower bias from higher complexity comes at the cost of higher variance.",
    explanationChinese: "高次多项式有足够的灵活性来拟合训练数据中的噪声，导致过拟合。模型实现低训练误差但高测试误差。这是偏差-方差权衡的经典例子：高复杂度带来的低偏差以高方差为代价。",
    diagram: "",
    terms: ["linear_regression", "overfitting", "bias_variance_tradeoff"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 9,
    q: "Why is feature scaling important for gradient descent in linear regression?",
    qChinese: "为什么特征缩放对线性回归中的梯度下降很重要？",
    options: [
      "A) It guarantees a global minimum",
      "B) It reduces the number of features",
      "C) It eliminates the need for a bias term",
      "D) It makes features have similar ranges, helping gradient descent converge faster",
    ],
    optionsChinese: [
      "A) 它保证全局最小值",
      "B) 它减少了特征数量",
      "C) 它消除了对偏置项的需要",
      "D) 它使特征具有相似的范围，帮助梯度下降更快收敛",
    ],
    answer: 3,
    explanation: "When features have vastly different scales, the loss surface becomes elongated (like an ellipse), causing gradient descent to oscillate and converge slowly. Standardization (zero mean, unit variance) or min-max scaling makes the contours more circular, enabling faster and more stable convergence.",
    explanationChinese: "当特征具有截然不同的尺度时，损失表面变得细长（像椭圆），导致梯度下降振荡且收敛缓慢。标准化（零均值、单位方差）或最小-最大缩放使等高线更圆，实现更快更稳定的收敛。",
    diagram: "",
    terms: ["linear_regression", "gradient_descent", "feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 10,
    q: "Which assumption of linear regression states that errors should have constant variance?",
    qChinese: "线性回归的哪个假设规定误差应有恒定方差？",
    options: [
      "A) Homoscedasticity",
      "B) Independence",
      "C) Linearity",
      "D) Normality"
    ],
    optionsChinese: [
      "A) 同方差性",
      "B) 独立性",
      "C) 线性性",
      "D) 正态性"
    ],
    answer: 0,
    explanation: "Homoscedasticity means the variance of residuals is constant across all levels of the independent variables. When this is violated (heteroscedasticity), OLS estimates remain unbiased but are no longer efficient, and standard errors become unreliable. Weighted least squares or robust standard errors can address this.",
    explanationChinese: "同方差性意味着残差的方差在自变量的所有水平上保持恒定。当此假设被违反时（异方差性），OLS估计仍然无偏但不再有效，标准误差变得不可靠。加权最小二乘法或稳健标准误差可以解决此问题。",
    diagram: "",
    terms: ["linear_regression", "feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 11,
    q: "What is the main difference between simple and multiple linear regression?",
    qChinese: "简单线性回归和多元线性回归的主要区别是什么？",
    options: [
      "A) Simple uses gradient descent; multiple uses normal equations",
      "B) Simple has one independent variable; multiple has two or more",
      "C) Simple is for classification; multiple is for regression",
      "D) Simple cannot have a bias term"
    ],
    optionsChinese: [
      "A) 简单使用梯度下降；多元使用正规方程",
      "B) 简单有一个自变量；多元有两个或更多",
      "C) 简单用于分类；多元用于回归",
      "D) 简单不能有偏置项"
    ],
    answer: 1,
    explanation: "Simple linear regression models the relationship between one independent variable and one dependent variable (y = w0 + w1*x). Multiple linear regression extends this to multiple independent variables (y = w0 + w1*x1 + w2*x2 + ...). Both use the same OLS framework and assumptions.",
    explanationChinese: "简单线性回归建模一个自变量和一个因变量之间的关系（y = w0 + w1*x）。多元线性回归将此扩展到多个自变量（y = w0 + w1*x1 + w2*x2 + ...）。两者使用相同的OLS框架和假设。",
    diagram: "",
    terms: ["linear_regression", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 12,
    q: "In stochastic gradient descent (SGD) for linear regression, what is used to compute the gradient at each step?",
    qChinese: "在线性回归的随机梯度下降（SGD）中，每步使用什么来计算梯度？",
    options: [
      "A) The entire training dataset",
      "B) Only the test dataset",
      "C) A single randomly chosen training example (or small mini-batch)",
      "D) The validation set"
    ],
    optionsChinese: [
      "A) 整个训练数据集",
      "B) 仅测试数据集",
      "C) 一个随机选择的训练样本（或小批量）",
      "D) 验证集"
    ],
    answer: 2,
    explanation: "SGD approximates the full gradient by computing it on one sample or a small mini-batch, making each iteration much cheaper. While noisier than batch gradient descent, this noise can help escape local minima. Mini-batch SGD balances computational efficiency with gradient estimate quality.",
    explanationChinese: "SGD通过在一个样本或小批量上计算梯度来近似完整梯度，使每次迭代成本更低。虽然比批量梯度下降噪声更大，但这种噪声有助于逃离局部最小值。小批量SGD平衡了计算效率与梯度估计质量。",
    diagram: "",
    terms: ["linear_regression", "gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 13,
    q: "What is the effect of a learning rate that is too large in gradient descent?",
    qChinese: "梯度下降中学习率过大会产生什么效果？",
    options: [
      "A) The algorithm may overshoot and diverge",
      "B) Guaranteed convergence to global minimum",
      "C) The model always underfits",
      "D) Training becomes slower but more accurate"
    ],
    optionsChinese: [
      "A) 算法可能过冲并发散",
      "B) 保证收敛到全局最小值",
      "C) 模型总是欠拟合",
      "D) 训练变慢但更准确"
    ],
    answer: 0,
    explanation: "A learning rate that is too large causes gradient descent to take steps that overshoot the minimum, potentially oscillating or diverging entirely. The loss may increase instead of decrease. Techniques like learning rate scheduling, decay, or adaptive methods (Adam, RMSProp) help choose appropriate rates.",
    explanationChinese: "过大的学习率导致梯度下降的步长过大而越过最小值，可能振荡甚至完全发散。损失可能增加而非减少。学习率调度、衰减或自适应方法（Adam、RMSProp）有助于选择合适的学习率。",
    diagram: "",
    terms: ["gradient_descent", "linear_regression"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 14,
    q: "What does the residual plot of a well-fitted linear regression model look like?",
    qChinese: "拟合良好的线性回归模型的残差图是什么样的？",
    options: [
      "A) A clear U-shaped pattern",
      "B) Clusters of points at specific values",
      "C) An increasing trend",
      "D) Randomly scattered points around zero with no pattern",
    ],
    optionsChinese: [
      "A) 明显的U形模式",
      "B) 在特定值处聚集的点",
      "C) 递增趋势",
      "D) 随机散布在零附近无模式的点",
    ],
    answer: 3,
    explanation: "A good residual plot shows points randomly scattered around the horizontal zero line with no systematic pattern. Patterns like curves suggest non-linearity, funnel shapes suggest heteroscedasticity, and trends suggest the model is missing important relationships in the data.",
    explanationChinese: "好的残差图显示点随机散布在水平零线周围，没有系统性模式。曲线模式表明非线性，漏斗形状表明异方差性，趋势表明模型遗漏了数据中的重要关系。",
    diagram: "",
    terms: ["linear_regression", "feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 15,
    q: "Which of the following is true about polynomial regression?",
    qChinese: "关于多项式回归，以下哪项是正确的？",
    options: [
      "A) It is a non-linear model",
      "B) It cannot overfit",
      "C) It is linear in its parameters despite using non-linear features",
      "D) It requires a special loss function"
    ],
    optionsChinese: [
      "A) 它是非线性模型",
      "B) 它不会过拟合",
      "C) 尽管使用非线性特征，它在参数上是线性的",
      "D) 它需要特殊的损失函数"
    ],
    answer: 2,
    explanation: "Polynomial regression creates non-linear features (x², x³, etc.) but the model remains linear in its parameters (y = w0 + w1*x + w2*x² + ...). This means standard linear regression techniques like OLS and gradient descent apply directly. The non-linearity is in the feature transformation, not the model form.",
    explanationChinese: "多项式回归创建非线性特征（x²、x³等），但模型在参数上仍然是线性的（y = w0 + w1*x + w2*x² + ...）。这意味着标准线性回归技术如OLS和梯度下降可以直接应用。非线性在于特征变换，而非模型形式。",
    diagram: "",
    terms: ["linear_regression", "feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 16,
    q: "What is the adjusted R² designed to address compared to regular R²?",
    qChinese: "与普通R²相比，调整R²旨在解决什么问题？",
    options: [
      "A) Non-linearity in the data",
      "B) Multicollinearity",
      "C) Heteroscedasticity",
      "D) The tendency of R² to increase when adding irrelevant features",
    ],
    optionsChinese: [
      "A) 数据中的非线性",
      "B) 多重共线性",
      "C) 异方差性",
      "D) 添加不相关特征时R²倾向于增加的问题",
    ],
    answer: 3,
    explanation: "Regular R² never decreases when adding more features, even irrelevant ones. Adjusted R² penalizes the addition of features that do not improve the model sufficiently, making it a better metric for model selection. It can decrease if added features are not useful, helping prevent overfitting.",
    explanationChinese: "普通R²在添加更多特征时永远不会减少，即使是不相关的特征。调整R²惩罚未能充分改善模型的特征添加，使其成为更好的模型选择指标。如果添加的特征无用，它可以减少，有助于防止过拟合。",
    diagram: "",
    terms: ["linear_regression", "overfitting", "feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 17,
    q: "What does the bias term (intercept) represent in a linear regression model y = w0 + w1*x?",
    qChinese: "线性回归模型y = w0 + w1*x中的偏置项（截距）代表什么？",
    options: [
      "A) The slope of the regression line",
      "B) The average of all feature values",
      "C) The predicted value of y when all input features are zero",
      "D) The variance of the predictions"
    ],
    optionsChinese: [
      "A) 回归线的斜率",
      "B) 所有特征值的平均值",
      "C) 当所有输入特征为零时y的预测值",
      "D) 预测的方差"
    ],
    answer: 2,
    explanation: "The bias term w0 (intercept) is the predicted output when all input features equal zero. It shifts the regression line up or down. Without a bias term, the regression line is forced through the origin, which is often an unreasonable constraint and can lead to poor model performance.",
    explanationChinese: "偏置项w0（截距）是当所有输入特征等于零时的预测输出。它将回归线上下移动。没有偏置项，回归线被强制通过原点，这通常是不合理的约束，可能导致模型性能不佳。",
    diagram: "",
    terms: ["linear_regression", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 18,
    q: "If a linear regression model has high training error and high test error, what is the likely issue?",
    qChinese: "如果线性回归模型的训练误差和测试误差都很高，可能是什么问题？",
    options: [
      "A) Overfitting",
      "B) Data leakage",
      "C) Underfitting (high bias)",
      "D) Perfect multicollinearity"
    ],
    optionsChinese: [
      "A) 过拟合",
      "B) 数据泄露",
      "C) 欠拟合（高偏差）",
      "D) 完美多重共线性"
    ],
    answer: 2,
    explanation: "High error on both training and test sets indicates underfitting: the model is too simple to capture underlying patterns. This reflects high bias. Solutions include adding polynomial features, using more relevant features, or switching to a more complex model. Overfitting shows low training but high test error.",
    explanationChinese: "训练集和测试集上都有高误差表明欠拟合：模型过于简单，无法捕获底层模式。这反映了高偏差。解决方案包括添加多项式特征、使用更多相关特征或切换到更复杂的模型。过拟合表现为低训练误差但高测试误差。",
    diagram: "",
    terms: ["linear_regression", "underfitting", "bias_variance_tradeoff"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 19,
    q: "In the context of linear regression, what is the Variance Inflation Factor (VIF) used for?",
    qChinese: "在线性回归中，方差膨胀因子（VIF）用于什么？",
    options: [
      "A) Measuring prediction accuracy",
      "B) Detecting multicollinearity among features",
      "C) Selecting the optimal learning rate",
      "D) Computing the bias of the model"
    ],
    optionsChinese: [
      "A) 测量预测准确性",
      "B) 检测特征之间的多重共线性",
      "C) 选择最优学习率",
      "D) 计算模型的偏差"
    ],
    answer: 1,
    explanation: "VIF measures how much the variance of a regression coefficient is inflated due to collinearity with other features. A VIF of 1 means no collinearity; values above 5-10 suggest problematic multicollinearity. It is computed as 1/(1-R²_j), where R²_j is the R² from regressing feature j on all others.",
    explanationChinese: "VIF衡量回归系数的方差因与其他特征的共线性而膨胀了多少。VIF为1表示无共线性；超过5-10的值表明存在问题的多重共线性。计算方法为1/(1-R²_j)，其中R²_j是将特征j对所有其他特征回归得到的R²。",
    diagram: "",
    terms: ["linear_regression", "feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 20,
    q: "Which technique can help prevent overfitting in polynomial regression?",
    qChinese: "哪种技术可以帮助防止多项式回归中的过拟合？",
    options: [
      "A) Increasing the polynomial degree",
      "B) Removing the bias term",
      "C) Using more polynomial features",
      "D) Adding regularization (e.g., Ridge or Lasso)",
    ],
    optionsChinese: [
      "A) 增加多项式次数",
      "B) 移除偏置项",
      "C) 使用更多多项式特征",
      "D) 添加正则化（例如Ridge或Lasso）",
    ],
    answer: 3,
    explanation: "Regularization adds a penalty term to the loss function that discourages large coefficients. Ridge (L2) regression adds lambda*||w||² and Lasso (L1) adds lambda*||w||_1. This constrains model complexity and prevents the high-degree polynomial coefficients from growing excessively large.",
    explanationChinese: "正则化在损失函数中添加惩罚项，抑制过大的系数。Ridge（L2）回归添加lambda*||w||²，Lasso（L1）添加lambda*||w||_1。这约束了模型复杂度，防止高次多项式系数增长过大。",
    diagram: "",
    terms: ["linear_regression", "regularization", "overfitting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 21,
    q: "What is the computational complexity of solving linear regression with the normal equation for n samples and p features?",
    qChinese: "对于n个样本和p个特征，用正规方程求解线性回归的计算复杂度是多少？",
    options: [
      "A) O(np²+ p³)",
      "B) O(n)",
      "C) O(n²p)",
      "D) O(2^p)"
    ],
    optionsChinese: [
      "A) O(np² + p³)",
      "B) O(n)",
      "C) O(n²p)",
      "D) O(2^p)"
    ],
    answer: 0,
    explanation: "The normal equation requires computing X^T X which is O(np²), and inverting the p×p matrix which is O(p³). This makes the normal equation impractical when p is very large. Gradient descent, with O(np) per iteration, is preferred in high-dimensional settings where p is large.",
    explanationChinese: "正规方程需要计算X^T X（O(np²)），以及对p×p矩阵求逆（O(p³)）。这使得当p非常大时正规方程不实用。梯度下降每次迭代O(np)，在p很大的高维设置中更受青睐。",
    diagram: "",
    terms: ["linear_regression", "gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 22,
    q: "Which of the following best describes the difference between MAE and MSE as regression loss functions?",
    qChinese: "以下哪项最好地描述了MAE和MSE作为回归损失函数的区别？",
    options: [
      "A) MSE penalizes large errors more heavily due to squaring",
      "B) MAE is always larger than MSE",
      "C) MAE is not differentiable anywhere",
      "D) MSE is robust to outliers"
    ],
    optionsChinese: [
      "A) 由于平方，MSE对大误差的惩罚更重",
      "B) MAE总是大于MSE",
      "C) MAE在任何地方都不可微",
      "D) MSE对异常值具有稳健性"
    ],
    answer: 0,
    explanation: "MSE squares each error, so large errors contribute disproportionately more to the total loss, making MSE sensitive to outliers. MAE uses absolute values, treating all errors linearly and being more robust to outliers. MAE is non-differentiable at zero, but subgradients can be used for optimization.",
    explanationChinese: "MSE对每个误差平方，因此大误差对总损失的贡献不成比例地更大，使MSE对异常值敏感。MAE使用绝对值，线性处理所有误差，对异常值更稳健。MAE在零处不可微，但可以使用次梯度进行优化。",
    diagram: "",
    terms: ["linear_regression", "gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 23,
    q: "What is the purpose of adding interaction terms in linear regression?",
    qChinese: "在线性回归中添加交互项的目的是什么？",
    options: [
      "A) To reduce the number of features",
      "B) To capture the combined effect of two features on the target",
      "C) To make the model simpler",
      "D) To ensure homoscedasticity"
    ],
    optionsChinese: [
      "A) 减少特征数量",
      "B) 捕获两个特征对目标的组合效应",
      "C) 使模型更简单",
      "D) 确保同方差性"
    ],
    answer: 1,
    explanation: "Interaction terms (e.g., x1*x2) allow the model to capture how the effect of one feature depends on the value of another. Without interactions, linear regression assumes each feature contributes independently. Adding x1*x2 means the effect of x1 on y changes with x2, enabling more flexible modeling.",
    explanationChinese: "交互项（例如x1*x2）允许模型捕获一个特征的效果如何取决于另一个特征的值。没有交互项，线性回归假设每个特征独立贡献。添加x1*x2意味着x1对y的效果随x2变化，实现更灵活的建模。",
    diagram: "",
    terms: ["linear_regression", "feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 24,
    q: "When is gradient descent preferred over the normal equation for linear regression?",
    qChinese: "什么时候梯度下降比正规方程更适合线性回归？",
    options: [
      "A) When the dataset has very few features",
      "B) When the dataset has no noise",
      "C) When exact solutions are required",
      "D) When the number of features is very large",
    ],
    optionsChinese: [
      "A) 当数据集特征很少时",
      "B) 当数据集没有噪声时",
      "C) 当需要精确解时",
      "D) 当特征数量非常大时",
    ],
    answer: 3,
    explanation: "The normal equation requires inverting a p×p matrix at O(p³) cost, making it impractical for very large p. Gradient descent scales as O(np) per iteration and handles large feature spaces efficiently. It also works with streaming data and can be combined with regularization easily.",
    explanationChinese: "正规方程需要对p×p矩阵求逆，代价为O(p³)，这使得它对非常大的p不实用。梯度下降每次迭代为O(np)，能高效处理大特征空间。它还适用于流数据，并可以轻松与正则化结合。",
    diagram: "",
    terms: ["linear_regression", "gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 25,
    q: "What does a negative R² value indicate about a regression model?",
    qChinese: "负R²值对回归模型意味着什么？",
    options: [
      "A) The model is perfect",
      "B) The model has negative coefficients",
      "C) The data has no variance",
      "D) The model performs worse than simply predicting the mean of y",
    ],
    optionsChinese: [
      "A) 模型是完美的",
      "B) 模型有负系数",
      "C) 数据没有方差",
      "D) 模型比简单预测y的均值表现更差",
    ],
    answer: 3,
    explanation: "R² = 1 - SS_res/SS_tot. When the model's residual sum of squares exceeds the total sum of squares, R² becomes negative. This means the model is worse than a baseline that always predicts the mean of y. This can happen with poorly chosen models or when evaluating on a test set.",
    explanationChinese: "R² = 1 - SS_res/SS_tot。当模型的残差平方和超过总平方和时，R²变为负数。这意味着模型比总是预测y均值的基线更差。这可能发生在模型选择不当或在测试集上评估时。",
    diagram: "",
    terms: ["linear_regression", "cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 26,
    q: "In ridge regression applied to linear regression, what effect does increasing the regularization parameter lambda have?",
    qChinese: "在应用于线性回归的岭回归中，增加正则化参数lambda有什么效果？",
    options: [
      "A) Coefficients grow larger",
      "B) Coefficients shrink toward zero",
      "C) The model ignores the training data",
      "D) The number of features increases"
    ],
    optionsChinese: [
      "A) 系数变大",
      "B) 系数向零收缩",
      "C) 模型忽略训练数据",
      "D) 特征数量增加"
    ],
    answer: 1,
    explanation: "Ridge regression adds lambda*||w||² to the loss function. As lambda increases, the penalty for large weights increases, pushing coefficients toward zero but never exactly to zero. This reduces model complexity and variance at the cost of slightly increased bias, helping prevent overfitting.",
    explanationChinese: "岭回归在损失函数中添加lambda*||w||²。随着lambda增加，对大权重的惩罚增加，将系数推向零但永远不会恰好为零。这以略微增加偏差为代价减少模型复杂度和方差，有助于防止过拟合。",
    diagram: "",
    terms: ["linear_regression", "regularization", "bias_variance_tradeoff"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 27,
    q: "What is the Huber loss and why is it used in regression?",
    qChinese: "什么是Huber损失，为什么在回归中使用它？",
    options: [
      "A) A loss that is always zero for correct predictions",
      "B) A loss that combines MSE for small errors and MAE for large errors to be robust to outliers",
      "C) A loss used only for classification tasks",
      "D) A loss that penalizes all errors equally"
    ],
    optionsChinese: [
      "A) 对正确预测总是为零的损失",
      "B) 对小误差组合MSE、对大误差组合MAE以对异常值稳健的损失",
      "C) 仅用于分类任务的损失",
      "D) 对所有误差同等惩罚的损失"
    ],
    answer: 1,
    explanation: "Huber loss uses quadratic loss for errors below a threshold delta and linear loss above it. This combines the smoothness of MSE near zero with the robustness of MAE for large errors. It is differentiable everywhere, unlike MAE, and less sensitive to outliers than MSE.",
    explanationChinese: "Huber损失对低于阈值delta的误差使用二次损失，对高于阈值的误差使用线性损失。这结合了MSE在零附近的平滑性和MAE对大误差的稳健性。与MAE不同，它处处可微，且比MSE对异常值更不敏感。",
    diagram: "",
    terms: ["linear_regression", "gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 28,
    q: "What role does the learning rate schedule play in gradient descent optimization?",
    qChinese: "学习率调度在梯度下降优化中起什么作用？",
    options: [
      "A) It fixes the learning rate throughout training",
      "B) It adjusts the learning rate over time to improve convergence",
      "C) It eliminates the need for a loss function",
      "D) It increases the learning rate at every step"
    ],
    optionsChinese: [
      "A) 在整个训练过程中固定学习率",
      "B) 随时间调整学习率以改善收敛",
      "C) 消除对损失函数的需要",
      "D) 在每一步增加学习率"
    ],
    answer: 1,
    explanation: "A learning rate schedule reduces the learning rate over time, allowing large initial steps for fast progress and smaller steps later for precise convergence. Common schedules include step decay, exponential decay, and cosine annealing. This helps avoid overshooting near the optimum.",
    explanationChinese: "学习率调度随时间减小学习率，允许初期大步快速前进，后期小步精确收敛。常见调度包括阶梯衰减、指数衰减和余弦退火。这有助于避免在最优值附近过冲。",
    diagram: "",
    terms: ["gradient_descent", "linear_regression"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 29,
    q: "How does LOOCV (Leave-One-Out Cross-Validation) work for evaluating a linear regression model?",
    qChinese: "留一交叉验证（LOOCV）如何用于评估线性回归模型？",
    options: [
      "A) It splits data into training and test sets once",
      "B) It trains n models, each leaving out one sample for validation",
      "C) It uses all data for training without validation",
      "D) It randomly selects 50% of data for testing"
    ],
    optionsChinese: [
      "A) 将数据分成训练集和测试集一次",
      "B) 训练n个模型，每个留出一个样本进行验证",
      "C) 使用所有数据进行训练，不进行验证",
      "D) 随机选择50%的数据进行测试"
    ],
    answer: 1,
    explanation: "LOOCV trains the model n times, each time holding out one sample for validation and training on the remaining n-1. The overall error is the average of all n validation errors. It provides a nearly unbiased estimate of test error but is computationally expensive. For linear regression, a shortcut formula exists.",
    explanationChinese: "LOOCV训练模型n次，每次留出一个样本进行验证，用剩余的n-1个训练。总体误差是所有n个验证误差的平均值。它提供几乎无偏的测试误差估计，但计算成本高。对于线性回归，存在快捷公式。",
    diagram: "",
    terms: ["linear_regression", "cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 30,
    q: "What is the geometric interpretation of linear regression in two dimensions?",
    qChinese: "线性回归在二维中的几何解释是什么？",
    options: [
      "A) Finding a circle that passes through all data points",
      "B) Finding the shortest path between two data points",
      "C) Finding the line that minimizes the sum of squared vertical distances to the data points",
      "D) Finding the centroid of the data"
    ],
    optionsChinese: [
      "A) 找到通过所有数据点的圆",
      "B) 找到两个数据点之间的最短路径",
      "C) 找到使数据点的垂直距离平方和最小的直线",
      "D) 找到数据的质心"
    ],
    answer: 2,
    explanation: "In 2D, linear regression finds the best-fit line y = w0 + w1*x that minimizes the sum of squared vertical distances between each data point and the line. Geometrically, the prediction vector is the orthogonal projection of y onto the column space of X, making the residual perpendicular to the feature space.",
    explanationChinese: "在二维中，线性回归找到最佳拟合线y = w0 + w1*x，使每个数据点到直线的垂直距离平方和最小。几何上，预测向量是y在X列空间上的正交投影，使残差垂直于特征空间。",
    diagram: "",
    terms: ["linear_regression", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 31,
    q: "What type of output does logistic regression produce?",
    qChinese: "逻辑回归产生什么类型的输出？",
    options: [
      "A) A continuous real number",
      "B) A discrete integer",
      "C) A probability between 0 and 1",
      "D) A vector of feature importances"
    ],
    optionsChinese: [
      "A) 连续实数",
      "B) 离散整数",
      "C) 0到1之间的概率",
      "D) 特征重要性向量"
    ],
    answer: 2,
    explanation: "Logistic regression applies the sigmoid function to a linear combination of inputs, producing a probability P(y=1|x) between 0 and 1. A threshold (typically 0.5) converts this probability into a binary class prediction. The model is trained by minimizing binary cross-entropy loss.",
    explanationChinese: "逻辑回归将sigmoid函数应用于输入的线性组合，产生0到1之间的概率P(y=1|x)。阈值（通常为0.5）将此概率转换为二元类别预测。模型通过最小化二元交叉熵损失来训练。",
    diagram: "",
    terms: ["logistic_regression", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 32,
    q: "Why is the cross-entropy loss used instead of MSE for logistic regression?",
    qChinese: "为什么逻辑回归使用交叉熵损失而不是MSE？",
    options: [
      "A) MSE is not defined for probabilities",
      "B) Cross-entropy produces a convex loss surface for logistic regression, while MSE does not",
      "C) Cross-entropy is always smaller than MSE",
      "D) MSE cannot be computed for binary labels"
    ],
    optionsChinese: [
      "A) MSE对概率未定义",
      "B) 交叉熵为逻辑回归产生凸损失面，而MSE不会",
      "C) 交叉熵总是小于MSE",
      "D) MSE不能对二元标签计算"
    ],
    answer: 1,
    explanation: "When combined with the sigmoid function, MSE creates a non-convex loss surface with local minima, making optimization difficult. Cross-entropy loss -[y*log(p) + (1-y)*log(1-p)] is convex with respect to the model parameters when used with sigmoid, guaranteeing a unique global minimum for gradient descent.",
    explanationChinese: "与sigmoid函数结合时，MSE创建具有局部最小值的非凸损失面，使优化困难。交叉熵损失-[y*log(p) + (1-y)*log(1-p)]与sigmoid一起使用时对模型参数是凸的，保证梯度下降有唯一的全局最小值。",
    diagram: "",
    terms: ["logistic_regression", "gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 33,
    q: "What is the decision boundary of logistic regression?",
    qChinese: "逻辑回归的决策边界是什么？",
    options: [
      "A) A curve that always passes through the origin",
      "B) A hyperplane where P(y=1|x) = 0.5",
      "C) A circular boundary around each class",
      "D) A boundary that maximizes the margin"
    ],
    optionsChinese: [
      "A) 总是通过原点的曲线",
      "B) P(y=1|x) = 0.5的超平面",
      "C) 每个类别周围的圆形边界",
      "D) 最大化间隔的边界"
    ],
    answer: 1,
    explanation: "The decision boundary of logistic regression is the set of points where the predicted probability equals 0.5, which occurs when the linear combination w^T x + b = 0. This defines a hyperplane in feature space. Points on one side are classified as class 1, and points on the other as class 0.",
    explanationChinese: "逻辑回归的决策边界是预测概率等于0.5的点集，这发生在线性组合w^T x + b = 0时。这在特征空间中定义了一个超平面。一侧的点被分类为类别1，另一侧为类别0。",
    diagram: "",
    terms: ["logistic_regression", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 34,
    q: "How does multinomial logistic regression (softmax regression) extend binary logistic regression?",
    qChinese: "多项逻辑回归（softmax回归）如何扩展二元逻辑回归？",
    options: [
      "A) By using multiple sigmoid functions independently",
      "B) By using the softmax function to produce a probability distribution over K classes",
      "C) By training K independent binary classifiers",
      "D) By using polynomial features"
    ],
    optionsChinese: [
      "A) 通过独立使用多个sigmoid函数",
      "B) 通过使用softmax函数产生K个类别的概率分布",
      "C) 通过训练K个独立的二元分类器",
      "D) 通过使用多项式特征"
    ],
    answer: 1,
    explanation: "Softmax regression computes exp(w_k^T x) for each class k, then normalizes across all K classes so probabilities sum to 1. This is trained with categorical cross-entropy loss. Unlike one-vs-rest, softmax jointly models all classes and directly outputs a valid probability distribution.",
    explanationChinese: "Softmax回归为每个类别k计算exp(w_k^T x)，然后在所有K个类别上归一化使概率之和为1。使用分类交叉熵损失训练。与一对多不同，softmax联合建模所有类别并直接输出有效的概率分布。",
    diagram: "",
    terms: ["logistic_regression", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 35,
    q: "In binary classification, what does a confusion matrix represent?",
    qChinese: "在二分类中，混淆矩阵代表什么？",
    options: [
      "A) The correlation between features",
      "B) A table showing true positives, true negatives, false positives, and false negatives",
      "C) The gradient of the loss function",
      "D) The distribution of class labels"
    ],
    optionsChinese: [
      "A) 特征之间的相关性",
      "B) 显示真正例、真负例、假正例和假负例的表格",
      "C) 损失函数的梯度",
      "D) 类别标签的分布"
    ],
    answer: 1,
    explanation: "A confusion matrix is a 2×2 table for binary classification showing counts of TP (correct positive), TN (correct negative), FP (predicted positive but actually negative), and FN (predicted negative but actually positive). It is the basis for computing precision, recall, F1 score, and accuracy.",
    explanationChinese: "混淆矩阵是二分类的2×2表格，显示TP（正确的正例）、TN（正确的负例）、FP（预测为正但实际为负）和FN（预测为负但实际为正）的计数。它是计算精确率、召回率、F1分数和准确率的基础。",
    diagram: "",
    terms: ["logistic_regression", "roc_curve", "cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 36,
    q: "What is precision in the context of binary classification?",
    qChinese: "二分类中的精确率是什么？",
    options: [
      "A) TP / (TP + FN)",
      "B) (TP + TN) / Total",
      "C) TP / (TP + FP)",
      "D) TN / (TN + FP)"
    ],
    optionsChinese: [
      "A) TP / (TP + FN)",
      "B) (TP + TN) / 总数",
      "C) TP / (TP + FP)",
      "D) TN / (TN + FP)"
    ],
    answer: 2,
    explanation: "Precision = TP/(TP+FP) measures the fraction of predicted positives that are actually positive. High precision means few false positives. It is important when the cost of false positives is high, such as in spam detection where legitimate emails should not be flagged as spam.",
    explanationChinese: "精确率 = TP/(TP+FP)衡量预测为正例中实际为正例的比例。高精确率意味着假正例很少。当假正例代价很高时精确率很重要，例如在垃圾邮件检测中，正常邮件不应被标记为垃圾邮件。",
    diagram: "",
    terms: ["logistic_regression", "roc_curve"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 37,
    q: "What is recall (sensitivity) in binary classification?",
    qChinese: "二分类中的召回率（敏感度）是什么？",
    options: [
      "A) TP / (TP + FN)",
      "B) TP / (TP + FP)",
      "C) TN / (TN + FP)",
      "D) (TP + TN) / Total"
    ],
    optionsChinese: [
      "A) TP / (TP + FN)",
      "B) TP / (TP + FP)",
      "C) TN / (TN + FP)",
      "D) (TP + TN) / 总数"
    ],
    answer: 0,
    explanation: "Recall = TP/(TP+FN) measures the fraction of actual positives correctly identified. High recall means few missed positives. It is critical in medical diagnosis where missing a disease (false negative) could be life-threatening. There is typically a tradeoff between precision and recall.",
    explanationChinese: "召回率 = TP/(TP+FN)衡量实际正例被正确识别的比例。高召回率意味着遗漏的正例很少。在医疗诊断中召回率至关重要，因为遗漏疾病（假负例）可能危及生命。精确率和召回率之间通常存在权衡。",
    diagram: "",
    terms: ["logistic_regression", "roc_curve"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 38,
    q: "What does the sigmoid function output when its input z equals zero?",
    qChinese: "当输入z等于零时，sigmoid函数输出什么？",
    options: [
      "A) 0",
      "B) 1",
      "C) 0.5",
      "D) Undefined"
    ],
    optionsChinese: [
      "A) 0",
      "B) 1",
      "C) 0.5",
      "D) 未定义"
    ],
    answer: 2,
    explanation: "The sigmoid function sigma(z) = 1/(1+e^{-z}). When z=0, sigma(0) = 1/(1+e^0) = 1/(1+1) = 0.5. This is the decision boundary point in logistic regression. For z >> 0, sigma approaches 1; for z << 0, sigma approaches 0. The function is symmetric around z=0.",
    explanationChinese: "Sigmoid函数sigma(z) = 1/(1+e^{-z})。当z=0时，sigma(0) = 1/(1+e^0) = 1/(1+1) = 0.5。这是逻辑回归中的决策边界点。当z >> 0时，sigma趋近1；当z << 0时，sigma趋近0。函数关于z=0对称。",
    diagram: "",
    terms: ["logistic_regression", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 39,
    q: "In one-vs-rest (OvR) classification, how are K classes handled?",
    qChinese: "在一对多（OvR）分类中，如何处理K个类别？",
    options: [
      "A) A single K-class classifier is trained",
      "B) K(K-1)/2 binary classifiers are trained",
      "C) K binary classifiers are trained, each separating one class from the rest",
      "D) A clustering algorithm is used first"
    ],
    optionsChinese: [
      "A) 训练单个K类分类器",
      "B) 训练K(K-1)/2个二元分类器",
      "C) 训练K个二元分类器，每个将一个类与其余类分开",
      "D) 首先使用聚类算法"
    ],
    answer: 2,
    explanation: "One-vs-Rest trains K separate binary classifiers, where each classifier distinguishes one class from all other classes combined. At prediction time, the class whose classifier gives the highest confidence score is selected. This approach is simple but may produce uncalibrated probabilities across classifiers.",
    explanationChinese: "一对多训练K个独立的二元分类器，每个分类器将一个类与所有其他类区分开。预测时，选择置信度得分最高的分类器对应的类。这种方法简单但可能在分类器之间产生未校准的概率。",
    diagram: "",
    terms: ["logistic_regression", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 40,
    q: "What is the F1 score and when is it preferred over accuracy?",
    qChinese: "F1分数是什么，什么时候优于准确率？",
    options: [
      "A) F1 = (TP + TN) / Total; preferred for large datasets",
      "B) F1 = 2 * (precision * recall) / (precision + recall); preferred for imbalanced datasets",
      "C) F1 = precision + recall; preferred for multi-class problems",
      "D) F1 = 1 - accuracy; always preferred"
    ],
    optionsChinese: [
      "A) F1 = (TP + TN) / 总数；对大数据集更优",
      "B) F1 = 2 * (精确率 * 召回率) / (精确率 + 召回率)；对不平衡数据集更优",
      "C) F1 = 精确率 + 召回率；对多类问题更优",
      "D) F1 = 1 - 准确率；总是更优"
    ],
    answer: 1,
    explanation: "F1 is the harmonic mean of precision and recall, ranging from 0 to 1. It is preferred over accuracy for imbalanced datasets where one class dominates. A model predicting only the majority class can have high accuracy but low F1. The harmonic mean ensures both precision and recall must be high.",
    explanationChinese: "F1是精确率和召回率的调和平均值，范围从0到1。对于一个类占主导的不平衡数据集，F1优于准确率。仅预测多数类的模型可能准确率很高但F1很低。调和平均值确保精确率和召回率都必须很高。",
    diagram: "",
    terms: ["logistic_regression", "roc_curve", "cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 41,
    q: "How does class imbalance affect logistic regression?",
    qChinese: "类别不平衡如何影响逻辑回归？",
    options: [
      "A) It has no effect on the model",
      "B) The model becomes biased toward predicting the majority class",
      "C) It always improves model accuracy",
      "D) It makes the sigmoid function undefined"
    ],
    optionsChinese: [
      "A) 对模型没有影响",
      "B) 模型变得偏向预测多数类",
      "C) 它总是提高模型准确率",
      "D) 它使sigmoid函数未定义"
    ],
    answer: 1,
    explanation: "With imbalanced classes, logistic regression tends to predict the majority class more often because it minimizes overall loss. Solutions include class weighting (inverse frequency), oversampling the minority class (SMOTE), undersampling the majority class, or adjusting the decision threshold from 0.5.",
    explanationChinese: "类别不平衡时，逻辑回归倾向于更频繁地预测多数类，因为这最小化了整体损失。解决方案包括类别权重（逆频率）、对少数类过采样（SMOTE）、对多数类欠采样或从0.5调整决策阈值。",
    diagram: "",
    terms: ["logistic_regression", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 42,
    q: "What is the log-odds (logit) in logistic regression?",
    qChinese: "逻辑回归中的对数几率（logit）是什么？",
    options: [
      "A) The natural logarithm of the odds ratio: log(p/(1-p))",
      "B) The probability of the positive class",
      "C) The square of the probability",
      "D) The entropy of the prediction"
    ],
    optionsChinese: [
      "A) 几率比的自然对数：log(p/(1-p))",
      "B) 正类的概率",
      "C) 概率的平方",
      "D) 预测的熵"
    ],
    answer: 0,
    explanation: "The logit function maps probability p to log(p/(1-p)), which is the linear combination w^T x + b in logistic regression. This is the inverse of the sigmoid function. The logit transforms probabilities from [0,1] to (-inf, +inf), making it natural to model with a linear function.",
    explanationChinese: "Logit函数将概率p映射到log(p/(1-p))，这是逻辑回归中的线性组合w^T x + b。这是sigmoid函数的逆函数。Logit将概率从[0,1]变换到(-inf, +inf)，使其自然地用线性函数建模。",
    diagram: "",
    terms: ["logistic_regression", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 43,
    q: "What does the ROC curve plot?",
    qChinese: "ROC曲线绘制什么？",
    options: [
      "A) Precision vs. Recall",
      "B) Training loss vs. Validation loss",
      "C) True Positive Rate vs. False Positive Rate at various thresholds",
      "D) Accuracy vs. Number of features"
    ],
    optionsChinese: [
      "A) 精确率 vs. 召回率",
      "B) 训练损失 vs. 验证损失",
      "C) 在不同阈值下真正例率 vs. 假正例率",
      "D) 准确率 vs. 特征数量"
    ],
    answer: 2,
    explanation: "The ROC (Receiver Operating Characteristic) curve plots True Positive Rate (recall) on the y-axis against False Positive Rate (1-specificity) on the x-axis as the classification threshold varies. A perfect classifier hugs the top-left corner. The area under the ROC curve (AUC) summarizes overall performance.",
    explanationChinese: "ROC（受试者工作特征）曲线在y轴绘制真正例率（召回率），x轴绘制假正例率（1-特异度），随分类阈值变化。完美分类器紧贴左上角。ROC曲线下面积（AUC）总结整体性能。",
    diagram: "",
    terms: ["logistic_regression", "roc_curve"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 44,
    q: "What AUC value indicates a classifier performs no better than random guessing?",
    qChinese: "什么AUC值表明分类器不比随机猜测好？",
    options: [
      "A) 0.0",
      "B) 0.75",
      "C) 0.5",
      "D) 1.0"
    ],
    optionsChinese: [
      "A) 0.0",
      "B) 0.75",
      "C) 0.5",
      "D) 1.0"
    ],
    answer: 2,
    explanation: "An AUC of 0.5 corresponds to the diagonal line on the ROC plot, representing random guessing. AUC of 1.0 means perfect classification, and AUC below 0.5 suggests the model is worse than random (predictions are inversely correlated). AUC is threshold-independent, making it useful for comparing models.",
    explanationChinese: "AUC为0.5对应ROC图上的对角线，代表随机猜测。AUC为1.0意味着完美分类，低于0.5的AUC表明模型比随机更差（预测与实际负相关）。AUC与阈值无关，使其适合比较模型。",
    diagram: "",
    terms: ["logistic_regression", "roc_curve"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 45,
    q: "Which regularization is typically used with logistic regression to prevent overfitting?",
    qChinese: "通常与逻辑回归一起使用哪种正则化来防止过拟合？",
    options: [
      "A) L2 regularization (adding lambda * ||w||² to the loss)",
      "B) Dropout",
      "C) Data augmentation",
      "D) Batch normalization"
    ],
    optionsChinese: [
      "A) L2正则化（在损失中添加lambda * ||w||²）",
      "B) Dropout",
      "C) 数据增强",
      "D) 批归一化"
    ],
    answer: 0,
    explanation: "L2 regularization adds a penalty proportional to the squared magnitude of weights, preventing any single weight from becoming too large. In scikit-learn, logistic regression uses L2 by default with parameter C=1/lambda. L1 regularization is also used when feature selection (sparsity) is desired.",
    explanationChinese: "L2正则化添加与权重平方幅值成比例的惩罚，防止任何单个权重变得过大。在scikit-learn中，逻辑回归默认使用L2，参数C=1/lambda。当需要特征选择（稀疏性）时也使用L1正则化。",
    diagram: "",
    terms: ["logistic_regression", "regularization", "overfitting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 46,
    q: "What is the maximum likelihood estimation (MLE) principle in logistic regression?",
    qChinese: "逻辑回归中的最大似然估计（MLE）原理是什么？",
    options: [
      "A) Minimize the sum of squared residuals",
      "B) Maximize the margin between classes",
      "C) Find parameters that maximize the probability of observing the given data",
      "D) Minimize the number of features"
    ],
    optionsChinese: [
      "A) 最小化残差平方和",
      "B) 最大化类别之间的间隔",
      "C) 找到使观察到给定数据的概率最大的参数",
      "D) 最小化特征数量"
    ],
    answer: 2,
    explanation: "MLE finds parameters that maximize the likelihood function L(w) = product of P(y_i|x_i,w) over all training examples. In practice, we maximize the log-likelihood (or equivalently minimize the negative log-likelihood, which equals the cross-entropy loss). This provides a principled probabilistic framework.",
    explanationChinese: "MLE找到使似然函数L(w) = 所有训练样本的P(y_i|x_i,w)之积最大的参数。实践中，我们最大化对数似然（或等价地最小化负对数似然，即交叉熵损失）。这提供了一个有原则的概率框架。",
    diagram: "",
    terms: ["logistic_regression", "gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 47,
    q: "How does adjusting the classification threshold in logistic regression affect precision and recall?",
    qChinese: "调整逻辑回归中的分类阈值如何影响精确率和召回率？",
    options: [
      "A) Both increase together",
      "B) Raising the threshold always increases both",
      "C) The threshold has no effect on either metric",
      "D) Lowering the threshold increases recall but may decrease precision",
    ],
    optionsChinese: [
      "A) 两者一起增加",
      "B) 提高阈值总是增加两者",
      "C) 阈值对两个指标都没有影响",
      "D) 降低阈值增加召回率但可能降低精确率",
    ],
    answer: 3,
    explanation: "Lowering the threshold makes the model predict positive more often, catching more true positives (higher recall) but also more false positives (lower precision). Raising the threshold has the opposite effect. The precision-recall curve visualizes this tradeoff and helps select the optimal threshold for the task.",
    explanationChinese: "降低阈值使模型更频繁地预测正类，捕获更多真正例（更高召回率）但也增加假正例（更低精确率）。提高阈值效果相反。精确率-召回率曲线可视化此权衡，帮助选择任务的最优阈值。",
    diagram: "",
    terms: ["logistic_regression", "roc_curve"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 48,
    q: "What is the vanishing gradient problem in the context of the sigmoid function?",
    qChinese: "在sigmoid函数的背景下，什么是梯度消失问题？",
    options: [
      "A) The gradient approaches zero for very large or very small input values",
      "B) The gradient becomes infinite",
      "C) The gradient is always negative",
      "D) The gradient oscillates randomly"
    ],
    optionsChinese: [
      "A) 对于非常大或非常小的输入值，梯度趋近于零",
      "B) 梯度变为无穷大",
      "C) 梯度总是负的",
      "D) 梯度随机振荡"
    ],
    answer: 0,
    explanation: "The sigmoid function saturates for large |z|: its derivative sigma(z)(1-sigma(z)) approaches zero when z is far from zero. This means gradient updates become extremely small, slowing learning dramatically. In deep networks this is especially problematic, which is why ReLU is often preferred.",
    explanationChinese: "Sigmoid函数在|z|很大时饱和：其导数sigma(z)(1-sigma(z))在z远离零时趋近于零。这意味着梯度更新变得极小，大幅减慢学习。在深度网络中这尤其成问题，这就是为什么通常更喜欢ReLU。",
    diagram: "",
    terms: ["logistic_regression", "gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 49,
    q: "What is the difference between hard and soft classification in logistic regression?",
    qChinese: "逻辑回归中硬分类和软分类的区别是什么？",
    options: [
      "A) Hard outputs discrete class labels; soft outputs class probabilities",
      "B) Hard uses more features than soft",
      "C) Soft classification is only for regression tasks",
      "D) Hard classification does not use a threshold"
    ],
    optionsChinese: [
      "A) 硬分类输出离散类标签；软分类输出类概率",
      "B) 硬分类使用比软分类更多的特征",
      "C) 软分类仅用于回归任务",
      "D) 硬分类不使用阈值"
    ],
    answer: 0,
    explanation: "Soft classification returns probability estimates for each class, preserving uncertainty information. Hard classification applies a threshold to convert probabilities into discrete class labels. Soft outputs are more informative and allow downstream calibration, threshold optimization, and proper evaluation using log-loss or AUC.",
    explanationChinese: "软分类返回每个类的概率估计，保留不确定性信息。硬分类应用阈值将概率转换为离散类标签。软输出信息更丰富，允许下游校准、阈值优化和使用对数损失或AUC的正确评估。",
    diagram: "",
    terms: ["logistic_regression", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 50,
    q: "In a multi-class setting with 5 classes, how many binary classifiers does the one-vs-one (OvO) approach train?",
    qChinese: "在有5个类的多类设置中，一对一（OvO）方法训练多少个二元分类器？",
    options: [
      "A) 5",
      "B) 25",
      "C) 10",
      "D) 20"
    ],
    optionsChinese: [
      "A) 5",
      "B) 25",
      "C) 10",
      "D) 20"
    ],
    answer: 2,
    explanation: "One-vs-One trains K(K-1)/2 binary classifiers, one for each pair of classes. For K=5, that is 5*4/2 = 10 classifiers. At prediction time, each classifier votes, and the class with the most votes wins. OvO uses smaller training sets per classifier but requires more classifiers than OvR.",
    explanationChinese: "一对一训练K(K-1)/2个二元分类器，每对类别一个。对于K=5，即5*4/2 = 10个分类器。预测时，每个分类器投票，票数最多的类获胜。OvO每个分类器使用较小的训练集但需要比OvR更多的分类器。",
    diagram: "",
    terms: ["logistic_regression", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 51,
    q: "What is the purpose of calibration in logistic regression?",
    qChinese: "逻辑回归中校准的目的是什么？",
    options: [
      "A) To increase the number of features",
      "B) To reduce computational cost",
      "C) To remove outliers from the dataset",
      "D) To ensure predicted probabilities match actual frequencies of outcomes",
    ],
    optionsChinese: [
      "A) 增加特征数量",
      "B) 降低计算成本",
      "C) 从数据集中移除异常值",
      "D) 确保预测概率与结果的实际频率匹配",
    ],
    answer: 3,
    explanation: "Calibration ensures that when a model predicts 70% probability, approximately 70% of such cases are truly positive. Logistic regression is naturally well-calibrated, but regularization or class imbalance can hurt calibration. Platt scaling and isotonic regression are common post-hoc calibration methods.",
    explanationChinese: "校准确保当模型预测70%概率时，大约70%的这类情况确实是正例。逻辑回归天然校准良好，但正则化或类别不平衡可能损害校准。Platt缩放和保序回归是常见的事后校准方法。",
    diagram: "",
    terms: ["logistic_regression", "cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 52,
    q: "What does the derivative of the sigmoid function sigma(z) equal?",
    qChinese: "Sigmoid函数sigma(z)的导数等于什么？",
    options: [
      "A) sigma(z) * (1 - sigma(z))",
      "B) sigma(z) + sigma(-z)",
      "C) 1 / sigma(z)",
      "D) z * sigma(z)"
    ],
    optionsChinese: [
      "A) sigma(z) * (1 - sigma(z))",
      "B) sigma(z) + sigma(-z)",
      "C) 1 / sigma(z)",
      "D) z * sigma(z)"
    ],
    answer: 0,
    explanation: "The derivative of the sigmoid function is sigma'(z) = sigma(z)(1 - sigma(z)). This elegant form means the derivative can be computed directly from the function value. The maximum derivative of 0.25 occurs at z=0 where sigma(0)=0.5. It approaches zero for large magnitude z values.",
    explanationChinese: "Sigmoid函数的导数是sigma'(z) = sigma(z)(1 - sigma(z))。这个优雅的形式意味着导数可以直接从函数值计算。最大导数0.25出现在z=0处，sigma(0)=0.5。对于大幅度z值趋近于零。",
    diagram: "",
    terms: ["logistic_regression", "gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 53,
    q: "What is stratified sampling and why is it important in classification?",
    qChinese: "什么是分层抽样，为什么它在分类中很重要？",
    options: [
      "A) Randomly selecting any samples for training",
      "B) Using only the majority class for training",
      "C) Ensuring each fold maintains the same class distribution as the full dataset",
      "D) Sampling features instead of instances"
    ],
    optionsChinese: [
      "A) 随机选择任何样本进行训练",
      "B) 仅使用多数类进行训练",
      "C) 确保每个折叠保持与完整数据集相同的类别分布",
      "D) 对特征而非实例进行抽样"
    ],
    answer: 2,
    explanation: "Stratified sampling preserves the percentage of samples for each class in each split. This is crucial for imbalanced datasets where random splitting might leave some folds with very few minority class examples. Stratified k-fold cross-validation is standard practice for classification evaluation.",
    explanationChinese: "分层抽样在每次拆分中保持每个类的样本百分比。这对不平衡数据集至关重要，随机拆分可能导致某些折叠中少数类样本极少。分层k折交叉验证是分类评估的标准做法。",
    diagram: "",
    terms: ["logistic_regression", "cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 54,
    q: "What is the Matthews Correlation Coefficient (MCC)?",
    qChinese: "什么是马修斯相关系数（MCC）？",
    options: [
      "A) A metric only for regression problems",
      "B) A metric that only considers true positives",
      "C) A measure of feature correlation",
      "D) A balanced metric using all four confusion matrix values, ranging from -1 to +1",
    ],
    optionsChinese: [
      "A) 仅用于回归问题的指标",
      "B) 仅考虑真正例的指标",
      "C) 特征相关性的度量",
      "D) 使用混淆矩阵所有四个值的平衡指标，范围从-1到+1",
    ],
    answer: 3,
    explanation: "MCC ranges from -1 to +1 and considers TP, TN, FP, and FN. +1 indicates perfect prediction, 0 is random, -1 is inverse prediction. Unlike accuracy or F1, MCC is informative even with highly imbalanced datasets because it accounts for all four quadrants of the confusion matrix.",
    explanationChinese: "MCC范围从-1到+1，考虑TP、TN、FP和FN。+1表示完美预测，0表示随机，-1表示反向预测。与准确率或F1不同，MCC即使在高度不平衡数据集中也有信息量，因为它考虑混淆矩阵的所有四个象限。",
    diagram: "",
    terms: ["logistic_regression", "cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 55,
    q: "What loss function does softmax regression minimize for multi-class classification?",
    qChinese: "Softmax回归为多类分类最小化什么损失函数？",
    options: [
      "A) Mean Squared Error",
      "B) Huber loss",
      "C) Hinge loss",
      "D) Categorical cross-entropy loss",
    ],
    optionsChinese: [
      "A) 均方误差",
      "B) Huber损失",
      "C) 铰链损失",
      "D) 分类交叉熵损失",
    ],
    answer: 3,
    explanation: "Categorical cross-entropy L = -sum(y_k * log(p_k)) compares the predicted softmax distribution with the one-hot true label. It heavily penalizes confident wrong predictions and generalizes binary cross-entropy to K classes. It is the standard loss for multi-class neural networks and softmax classifiers.",
    explanationChinese: "分类交叉熵L = -sum(y_k * log(p_k))将softmax预测分布与独热编码真实标签比较。它严重惩罚自信的错误预测，将二元交叉熵推广到K个类。它是多类神经网络和softmax分类器的标准损失。",
    diagram: "",
    terms: ["logistic_regression", "gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 56,
    q: "What is the difference between label encoding and one-hot encoding?",
    qChinese: "标签编码和独热编码有什么区别？",
    options: [
      "A) Label encoding assigns integers; one-hot encoding creates binary indicator columns per category",
      "B) They are identical methods",
      "C) One-hot encoding always performs worse",
      "D) Label encoding only works for binary features"
    ],
    optionsChinese: [
      "A) 标签编码分配整数；独热编码为每个类别创建二进制指示列",
      "B) 它们是相同的方法",
      "C) 独热编码总是表现更差",
      "D) 标签编码仅适用于二元特征"
    ],
    answer: 0,
    explanation: "Label encoding maps categories to integers (red=0, blue=1, green=2), implying ordinal relationships. One-hot encoding creates separate binary columns for each category, avoiding false ordering. For linear models like logistic regression, one-hot encoding is preferred for nominal categorical features.",
    explanationChinese: "标签编码将类别映射到整数（red=0, blue=1, green=2），暗示序数关系。独热编码为每个类别创建单独的二进制列，避免错误排序。对于逻辑回归等线性模型，独热编码对名义类别特征更优。",
    diagram: "",
    terms: ["logistic_regression", "feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 57,
    q: "Why does logistic regression lack a closed-form solution?",
    qChinese: "为什么逻辑回归没有闭式解？",
    options: [
      "A) It has too many parameters",
      "B) The sigmoid function is not differentiable",
      "C) It uses a different programming language",
      "D) The sigmoid makes the loss non-linear in parameters, preventing algebraic solution",
    ],
    optionsChinese: [
      "A) 它参数太多",
      "B) Sigmoid函数不可微",
      "C) 它使用不同的编程语言",
      "D) Sigmoid使损失对参数非线性，无法代数求解",
    ],
    answer: 3,
    explanation: "While the cross-entropy loss is convex for logistic regression, the sigmoid introduces non-linearity preventing setting the gradient to zero and solving algebraically. Iterative methods like gradient descent or Newton-Raphson (IRLS) are used instead. The convexity guarantees convergence to the global optimum.",
    explanationChinese: "虽然逻辑回归的交叉熵损失是凸的，但sigmoid引入的非线性使得无法将梯度设为零并代数求解。因此使用梯度下降或牛顿-拉夫森（IRLS）等迭代方法。凸性保证收敛到全局最优。",
    diagram: "",
    terms: ["logistic_regression", "gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 58,
    q: "What is the specificity (true negative rate) of a classifier?",
    qChinese: "分类器的特异度（真负例率）是什么？",
    options: [
      "A) TP / (TP + FP)",
      "B) TP / (TP + FN)",
      "C) TN / (TN + FP)",
      "D) (TP + TN) / Total"
    ],
    optionsChinese: [
      "A) TP / (TP + FP)",
      "B) TP / (TP + FN)",
      "C) TN / (TN + FP)",
      "D) (TP + TN) / 总数"
    ],
    answer: 2,
    explanation: "Specificity = TN/(TN+FP) measures the proportion of actual negatives correctly identified. High specificity means few false positives. In medical testing, high specificity means healthy patients are rarely misdiagnosed. Specificity equals 1 minus the false positive rate, and appears on the ROC curve x-axis.",
    explanationChinese: "特异度 = TN/(TN+FP)衡量实际负例被正确识别的比例。高特异度意味着假正例很少。在医学检测中，高特异度意味着健康患者很少被误诊。特异度等于1减假正例率，出现在ROC曲线的x轴上。",
    diagram: "",
    terms: ["logistic_regression", "roc_curve"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 59,
    q: "What advantage does logistic regression have over complex models?",
    qChinese: "逻辑回归相比复杂模型有什么优势？",
    options: [
      "A) It is interpretable, fast, and provides calibrated probability estimates",
      "B) It always achieves higher accuracy",
      "C) It can model any non-linear relationship",
      "D) It never requires regularization"
    ],
    optionsChinese: [
      "A) 它可解释、快速，并提供校准的概率估计",
      "B) 它总是达到更高的准确率",
      "C) 它可以建模任何非线性关系",
      "D) 它永远不需要正则化"
    ],
    answer: 0,
    explanation: "Logistic regression offers interpretable coefficients showing each feature's effect on log-odds. It trains quickly, scales well to large datasets, and naturally outputs calibrated probabilities. For linearly separable problems or when interpretability matters in domains like medicine or law, it is often preferred.",
    explanationChinese: "逻辑回归提供可解释的系数，显示每个特征对对数几率的影响。它训练快速，对大数据集扩展性好，并自然输出校准的概率。对于线性可分问题或在医学、法律等需要可解释性的领域，通常被优先选择。",
    diagram: "",
    terms: ["logistic_regression", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 60,
    q: "What is the difference between micro-averaging and macro-averaging?",
    qChinese: "微平均和宏平均有什么区别？",
    options: [
      "A) Micro aggregates counts globally; macro averages per-class metrics with equal weight",
      "B) They are the same",
      "C) Micro only considers the largest class",
      "D) Macro weights by class frequency"
    ],
    optionsChinese: [
      "A) 微平均全局聚合计数；宏平均对每类指标等权平均",
      "B) 它们是相同的",
      "C) 微平均只考虑最大的类",
      "D) 宏平均按类频率加权"
    ],
    answer: 0,
    explanation: "Micro-averaging aggregates TP, FP, FN across all classes then computes metrics, giving larger classes more influence. Macro-averaging computes each class metric independently then takes the unweighted mean. Macro is preferred when all classes are equally important regardless of size in the dataset.",
    explanationChinese: "微平均在所有类上聚合TP、FP、FN然后计算指标，给予较大类更多影响。宏平均独立计算每个类的指标然后取未加权平均。当所有类同等重要时（不论数据集中的大小），宏平均更受青睐。",
    diagram: "",
    terms: ["logistic_regression", "cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 61,
    q: "What is the fundamental idea behind a decision tree classifier?",
    qChinese: "决策树分类器背后的基本思想是什么？",
    options: [
      "A) Fitting a linear hyperplane through data",
      "B) Recursively splitting data based on feature thresholds to create pure subsets",
      "C) Computing distances between data points",
      "D) Projecting data onto principal components"
    ],
    optionsChinese: [
      "A) 通过数据拟合线性超平面",
      "B) 基于特征阈值递归分裂数据以创建纯子集",
      "C) 计算数据点之间的距离",
      "D) 将数据投影到主成分上"
    ],
    answer: 1,
    explanation: "A decision tree recursively partitions the feature space by selecting the best feature and threshold at each node to maximize class purity. This creates axis-aligned decision boundaries. Leaf nodes contain class predictions. The tree is inherently interpretable and handles both numerical and categorical features.",
    explanationChinese: "决策树通过在每个节点选择最佳特征和阈值来递归划分特征空间，以最大化类纯度。这创建轴对齐的决策边界。叶节点包含类预测。树本质上可解释，处理数值和类别特征。",
    diagram: "",
    terms: ["decision_tree", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 62,
    q: "What does Gini impurity measure in a decision tree?",
    qChinese: "决策树中基尼不纯度衡量什么？",
    options: [
      "A) The probability of misclassifying a randomly chosen sample if labeled by the node's distribution",
      "B) The depth of the tree",
      "C) The number of features used",
      "D) The training accuracy"
    ],
    optionsChinese: [
      "A) 如果按节点分布标记随机选择的样本，将其错误分类的概率",
      "B) 树的深度",
      "C) 使用的特征数量",
      "D) 训练准确率"
    ],
    answer: 0,
    explanation: "Gini impurity = 1 - sum(p_i^2) where p_i is the proportion of class i. It ranges from 0 (pure) to 1-1/K (maximally impure). CART trees use Gini to find splits creating the purest child nodes. It is computationally cheaper than entropy since it avoids logarithm operations.",
    explanationChinese: "基尼不纯度 = 1 - sum(p_i^2)，其中p_i是类i的比例。范围从0（纯）到1-1/K（最大不纯）。CART树使用基尼找到创建最纯子节点的分裂。由于避免对数运算，计算比熵更便宜。",
    diagram: "",
    terms: ["decision_tree", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 63,
    q: "What is information gain in decision trees?",
    qChinese: "决策树中的信息增益是什么？",
    options: [
      "A) The total number of features",
      "B) The increase in training accuracy",
      "C) The reduction in entropy after splitting on a particular feature",
      "D) The number of leaf nodes created"
    ],
    optionsChinese: [
      "A) 特征的总数",
      "B) 训练准确率的增加",
      "C) 按特定特征分裂后熵的减少量",
      "D) 创建的叶节点数量"
    ],
    answer: 2,
    explanation: "Information gain = H(parent) - sum(weighted H(children)) measures the entropy decrease after splitting. Higher gain means better class separation. ID3 and C4.5 use entropy-based information gain for split selection. The feature-threshold pair with highest information gain is chosen at each node.",
    explanationChinese: "信息增益 = H(父节点) - sum(加权H(子节点))衡量分裂后熵的减少。更高的增益意味着更好的类分离。ID3和C4.5使用基于熵的信息增益进行分裂选择。在每个节点选择信息增益最高的特征-阈值对。",
    diagram: "",
    terms: ["decision_tree", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 64,
    q: "What is pruning in decision trees?",
    qChinese: "决策树中的剪枝是什么？",
    options: [
      "A) Adding more branches",
      "B) Converting the tree to a linear model",
      "C) Duplicating subtrees",
      "D) Removing branches with little predictive power to reduce overfitting",
    ],
    optionsChinese: [
      "A) 添加更多分支",
      "B) 将树转换为线性模型",
      "C) 复制子树",
      "D) 移除预测能力小的分支以减少过拟合",
    ],
    answer: 3,
    explanation: "Pruning removes subtrees that overfit training data. Pre-pruning stops growth early via max_depth or min_samples_leaf constraints. Post-pruning grows the full tree then removes branches not improving validation performance. Both reduce complexity and improve generalization on unseen data.",
    explanationChinese: "剪枝移除过拟合训练数据的子树。预剪枝通过max_depth或min_samples_leaf约束提前停止生长。后剪枝先生长完整树然后移除不改善验证性能的分支。两者都减少复杂度并改善对未见数据的泛化。",
    diagram: "",
    terms: ["decision_tree", "overfitting", "bias_variance_tradeoff"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 65,
    q: "What is the main advantage of decision trees over linear models?",
    qChinese: "决策树相比线性模型的主要优势是什么？",
    options: [
      "A) Always more accurate",
      "B) Automatically capture non-linear relationships and feature interactions",
      "C) Require less data",
      "D) Never overfit"
    ],
    optionsChinese: [
      "A) 总是更准确",
      "B) 自动捕获非线性关系和特征交互",
      "C) 需要更少的数据",
      "D) 永远不会过拟合"
    ],
    answer: 1,
    explanation: "Decision trees automatically discover non-linear boundaries and feature interactions through recursive splitting. They require no feature scaling, handle mixed data types, and are highly interpretable. However, they are prone to overfitting and have high variance compared to ensemble methods like random forests.",
    explanationChinese: "决策树通过递归分裂自动发现非线性边界和特征交互。它们不需要特征缩放，处理混合数据类型，且高度可解释。但它们容易过拟合，方差比随机森林等集成方法高。",
    diagram: "",
    terms: ["decision_tree", "supervised_learning", "feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 66,
    q: "How does a random forest differ from a single decision tree?",
    qChinese: "随机森林与单棵决策树有何不同？",
    options: [
      "A) Uses a single very deep tree",
      "B) Only works for regression",
      "C) Trains many trees on bootstrap samples with random feature subsets and aggregates their predictions",
      "D) Uses the same data for all trees"
    ],
    optionsChinese: [
      "A) 使用一棵非常深的树",
      "B) 只适用于回归",
      "C) 在自助样本上训练多棵树，使用随机特征子集并聚合预测",
      "D) 对所有树使用相同的数据"
    ],
    answer: 2,
    explanation: "Random forest combines bagging with random feature selection at each split. Each tree trains on a different bootstrap sample and considers only sqrt(p) features per split for classification. The ensemble votes or averages across trees, dramatically reducing variance while maintaining low bias.",
    explanationChinese: "随机森林将装袋与每次分裂时的随机特征选择结合。每棵树在不同的自助样本上训练，分类时每次分裂仅考虑sqrt(p)个特征。集成在树之间投票或取平均，显著减少方差同时保持低偏差。",
    diagram: "",
    terms: ["random_forest", "decision_tree", "ensemble_method"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 67,
    q: "What is bootstrap sampling in random forests?",
    qChinese: "随机森林中的自助采样是什么？",
    options: [
      "A) Selecting features without replacement",
      "B) Removing duplicates",
      "C) Splitting into train and test sets",
      "D) Sampling n instances with replacement from n total to create each tree's training set",
    ],
    optionsChinese: [
      "A) 不放回地选择特征",
      "B) 移除重复项",
      "C) 分成训练集和测试集",
      "D) 从n个总数中有放回地抽样n个实例为每棵树创建训练集",
    ],
    answer: 3,
    explanation: "Bootstrap sampling draws n samples with replacement from a size-n dataset. About 63.2% of unique samples appear in each bootstrap set. The remaining 36.8% are out-of-bag (OOB) samples used for built-in validation. This diversity among trees is essential for the ensemble to reduce variance.",
    explanationChinese: "自助采样从大小为n的数据集中有放回地抽取n个样本。约63.2%的唯一样本出现在每个自助集中。剩余36.8%是袋外（OOB）样本用于内置验证。树之间的多样性对集成减少方差至关重要。",
    diagram: "",
    terms: ["random_forest", "ensemble_method"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 68,
    q: "What is the out-of-bag (OOB) error in random forests?",
    qChinese: "随机森林中的袋外（OOB）误差是什么？",
    options: [
      "A) Error computed by testing each sample only on trees that did not use it for training",
      "B) Error on the entire training set",
      "C) Error on a separate test set",
      "D) The average tree depth"
    ],
    optionsChinese: [
      "A) 仅在未使用该样本训练的树上测试每个样本计算的误差",
      "B) 整个训练集上的误差",
      "C) 单独测试集上的误差",
      "D) 平均树深度"
    ],
    answer: 0,
    explanation: "Each bootstrap sample omits about 36.8% of instances. These omitted samples are predicted by trees that excluded them, providing an internal validation estimate. OOB error closely approximates the true test error without needing a separate validation set, making it computationally efficient.",
    explanationChinese: "每个自助样本省略约36.8%的实例。被省略的样本由排除它们的树进行预测，提供内部验证估计。OOB误差接近真实测试误差，无需单独的验证集，计算高效。",
    diagram: "",
    terms: ["random_forest", "ensemble_method", "cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 69,
    q: "Why does a random forest typically outperform a single decision tree?",
    qChinese: "为什么随机森林通常优于单棵决策树？",
    options: [
      "A) Averaging many diverse decorrelated trees reduces variance while maintaining similar bias",
      "B) Uses a more complex split criterion",
      "C) Uses deeper trees",
      "D) Eliminates all noise"
    ],
    optionsChinese: [
      "A) 对许多去相关的多样化树取平均减少方差同时保持相似偏差",
      "B) 使用更复杂的分裂准则",
      "C) 使用更深的树",
      "D) 消除所有噪声"
    ],
    answer: 0,
    explanation: "Individual trees have low bias but high variance. By training decorrelated trees via bootstrap and random features then averaging predictions, variance drops dramatically. The key insight is that averaging n trees reduces variance by roughly 1/n when trees are uncorrelated, though correlation limits actual reduction.",
    explanationChinese: "单棵树低偏差但高方差。通过自助采样和随机特征训练去相关的树然后对预测取平均，方差大幅下降。关键洞察是当树不相关时，对n棵树取平均将方差减少约1/n，但相关性限制实际减少量。",
    diagram: "",
    terms: ["random_forest", "decision_tree", "bias_variance_tradeoff"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 70,
    q: "How is the final prediction made in a random forest classifier?",
    qChinese: "随机森林分类器如何做出最终预测？",
    options: [
      "A) Prediction of the first tree",
      "B) Majority voting across all trees",
      "C) Prediction of the deepest tree",
      "D) Average of all tree depths"
    ],
    optionsChinese: [
      "A) 第一棵树的预测",
      "B) 所有树的多数投票",
      "C) 最深树的预测",
      "D) 所有树深度的平均值"
    ],
    answer: 1,
    explanation: "For classification, each tree casts a vote and the majority class wins. For regression, predictions are averaged. Soft voting averages predicted probabilities across trees and can provide better calibrated results. The aggregation is what makes the ensemble more robust than any individual tree.",
    explanationChinese: "对于分类，每棵树投票，多数类获胜。对于回归，对预测取平均。软投票对树之间的预测概率取平均，可以提供更好的校准结果。聚合使集成比任何单棵树更稳健。",
    diagram: "",
    terms: ["random_forest", "ensemble_method"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 71,
    q: "What does max_features control in random forests?",
    qChinese: "max_features在随机森林中控制什么？",
    options: [
      "A) Number of trees",
      "B) Minimum samples per split",
      "C) Maximum tree depth",
      "D) Number of features considered at each split",
    ],
    optionsChinese: [
      "A) 树的数量",
      "B) 每次分裂的最小样本数",
      "C) 最大树深度",
      "D) 每次分裂考虑的特征数量",
    ],
    answer: 3,
    explanation: "max_features sets how many features each tree considers at each split point. The default is sqrt(p) for classification and p/3 for regression. Lower values increase tree diversity and reduce correlation between trees, further reducing ensemble variance at the cost of individual tree accuracy.",
    explanationChinese: "max_features设置每棵树在每个分裂点考虑多少特征。分类默认为sqrt(p)，回归为p/3。较低的值增加树的多样性并减少树之间的相关性，以单棵树准确率为代价进一步减少集成方差。",
    diagram: "",
    terms: ["random_forest", "bias_variance_tradeoff"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 72,
    q: "What splitting criterion does CART use for regression?",
    qChinese: "CART对回归使用什么分裂准则？",
    options: [
      "A) Information gain",
      "B) Variance reduction (minimizing MSE in child nodes)",
      "C) Gini impurity",
      "D) Chi-squared test"
    ],
    optionsChinese: [
      "A) 信息增益",
      "B) 方差减少（最小化子节点中的MSE）",
      "C) 基尼不纯度",
      "D) 卡方检验"
    ],
    answer: 1,
    explanation: "For regression, CART selects splits minimizing the weighted MSE in child nodes. Each leaf predicts the mean of its training samples. The tree groups similar target values together. Variance reduction quantifies how much a split reduces prediction uncertainty compared to the parent.",
    explanationChinese: "对于回归，CART选择最小化子节点中加权MSE的分裂。每个叶节点预测其训练样本的均值。树将相似的目标值分组。方差减少量化分裂比父节点减少了多少预测不确定性。",
    diagram: "",
    terms: ["decision_tree", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 73,
    q: "What is the entropy formula used in decision tree splitting?",
    qChinese: "决策树分裂中使用的熵公式是什么？",
    options: [
      "A) H = -sum(p_i * log2(p_i))",
      "B) H = sum(p_i^2)",
      "C) H = max(p_i)",
      "D) H = 1/sum(p_i)"
    ],
    optionsChinese: [
      "A) H = -sum(p_i * log2(p_i))",
      "B) H = sum(p_i^2)",
      "C) H = max(p_i)",
      "D) H = 1/sum(p_i)"
    ],
    answer: 0,
    explanation: "Entropy H = -sum(p_i * log2(p_i)) measures node impurity. It is 0 for a pure node (all one class) and reaches maximum 1.0 for binary classification with equal proportions. ID3 and C4.5 use entropy for computing information gain. Gini impurity is the alternative used in CART.",
    explanationChinese: "熵H = -sum(p_i * log2(p_i))衡量节点不纯度。纯节点（全部一个类）为0，二分类比例相等时达到最大值1.0。ID3和C4.5使用熵计算信息增益。基尼不纯度是CART中使用的替代方案。",
    diagram: "",
    terms: ["decision_tree", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 74,
    q: "Why is information gain biased toward features with many unique values?",
    qChinese: "为什么信息增益偏向具有许多唯一值的特征？",
    options: [
      "A) Information gain becomes negative",
      "B) It always selects the same feature",
      "C) It cannot be computed for such features",
      "D) Many values create many pure child nodes, inflating information gain artificially",
    ],
    optionsChinese: [
      "A) 信息增益变为负数",
      "B) 它总是选择相同的特征",
      "C) 对这类特征无法计算",
      "D) 许多值创建许多纯子节点，人为膨胀信息增益",
    ],
    answer: 3,
    explanation: "Features like IDs with many unique values can produce near-pure child nodes, yielding artificially high information gain. C4.5 addresses this via the gain ratio, which normalizes information gain by the intrinsic information (entropy of the split distribution), penalizing many-way splits.",
    explanationChinese: "像ID这样有许多唯一值的特征可以产生几乎纯的子节点，产生人为的高信息增益。C4.5通过增益率解决此问题，用固有信息（分裂分布的熵）归一化信息增益，惩罚多路分裂。",
    diagram: "",
    terms: ["decision_tree", "overfitting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 75,
    q: "How can decision trees handle missing values?",
    qChinese: "决策树如何处理缺失值？",
    options: [
      "A) They cannot handle missing values",
      "B) By deleting all incomplete samples",
      "C) By replacing all missing values with zero",
      "D) Through surrogate splits using correlated features",
    ],
    optionsChinese: [
      "A) 它们不能处理缺失值",
      "B) 删除所有不完整的样本",
      "C) 用零替换所有缺失值",
      "D) 通过使用相关特征的替代分裂",
    ],
    answer: 3,
    explanation: "CART uses surrogate splits: alternative features producing similar partitions are identified for each split. When the primary feature is missing, the best surrogate is used. XGBoost extends this by learning optimal default directions for missing values during training, handling them natively.",
    explanationChinese: "CART使用替代分裂：为每个分裂识别产生类似划分的替代特征。当主要特征缺失时，使用最佳替代。XGBoost通过在训练中学习缺失值的最优默认方向来扩展此功能，原生处理缺失值。",
    diagram: "",
    terms: ["decision_tree", "feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 76,
    q: "What is feature importance in random forests?",
    qChinese: "随机森林中的特征重要性是什么？",
    options: [
      "A) Number of times a feature appears in data",
      "B) Correlation between features",
      "C) Average decrease in impurity across all trees when splitting on that feature",
      "D) Feature index in the input vector"
    ],
    optionsChinese: [
      "A) 特征在数据中出现的次数",
      "B) 特征之间的相关性",
      "C) 按该特征分裂时在所有树上不纯度的平均减少量",
      "D) 特征在输入向量中的索引"
    ],
    answer: 2,
    explanation: "Mean Decrease in Impurity (MDI) averages each feature's impurity reduction across all splits in all trees. Permutation importance offers an alternative by measuring accuracy drop when a feature is randomly shuffled. Permutation importance is more reliable when features are correlated.",
    explanationChinese: "不纯度平均减少（MDI）在所有树的所有分裂中平均每个特征的不纯度减少。排列重要性通过衡量随机打乱特征时准确率下降提供替代方案。当特征相关时排列重要性更可靠。",
    diagram: "",
    terms: ["random_forest", "decision_tree", "feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 77,
    q: "What is the time complexity of building a single decision tree?",
    qChinese: "构建单棵决策树的时间复杂度是什么？",
    options: [
      "A) O(n)",
      "B) O(n * p * log(n)) for n samples and p features",
      "C) O(n^2)",
      "D) O(2^n)"
    ],
    optionsChinese: [
      "A) O(n)",
      "B) 对于n个样本和p个特征为O(n * p * log(n))",
      "C) O(n^2)",
      "D) O(2^n)"
    ],
    answer: 1,
    explanation: "Each node evaluates p features, each requiring O(n*log(n)) to sort n samples. A balanced tree has O(log(n)) levels, giving O(n*p*log(n)) total. Pre-sorting can optimize this. Random forests parallelize across trees and use fewer features per split, improving practical efficiency.",
    explanationChinese: "每个节点评估p个特征，每个需要O(n*log(n))排序n个样本。平衡树有O(log(n))层，总计O(n*p*log(n))。预排序可以优化。随机森林跨树并行化并每次分裂使用更少特征，提高实际效率。",
    diagram: "",
    terms: ["decision_tree", "random_forest"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 78,
    q: "What does max_depth control in a decision tree?",
    qChinese: "max_depth在决策树中控制什么？",
    options: [
      "A) Maximum features considered",
      "B) Maximum number of trees",
      "C) Maximum samples per leaf",
      "D) Maximum levels from root to deepest leaf",
    ],
    optionsChinese: [
      "A) 考虑的最大特征数",
      "B) 最大树数",
      "C) 每个叶节点的最大样本数",
      "D) 从根到最深叶节点的最大层数",
    ],
    answer: 3,
    explanation: "max_depth limits how deep the tree can grow. Deeper trees capture more complex patterns but risk overfitting. Shallow trees may underfit. It is the primary hyperparameter controlling the bias-variance tradeoff. Typical values range from 3 to 20 depending on the complexity of the problem.",
    explanationChinese: "max_depth限制树可以生长多深。更深的树捕获更复杂的模式但有过拟合风险。浅树可能欠拟合。它是控制偏差-方差权衡的主要超参数。典型值根据问题复杂度从3到20不等。",
    diagram: "",
    terms: ["decision_tree", "overfitting", "bias_variance_tradeoff"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 79,
    q: "Why are decision trees considered high-variance models?",
    qChinese: "为什么决策树被认为是高方差模型？",
    options: [
      "A) They produce the same tree regardless of data",
      "B) Small data changes can produce completely different tree structures",
      "C) They have too many hyperparameters",
      "D) They cannot model non-linear relationships"
    ],
    optionsChinese: [
      "A) 无论数据如何都产生相同的树",
      "B) 小的数据变化可能产生完全不同的树结构",
      "C) 超参数太多",
      "D) 不能建模非线性关系"
    ],
    answer: 1,
    explanation: "Trees use greedy top-down splitting where each decision affects all subsequent splits. A small data change can alter the root split, cascading into an entirely different tree. This instability motivates ensemble methods like random forests and boosting that average over many trees.",
    explanationChinese: "树使用贪心的自顶向下分裂，每个决策影响所有后续分裂。小的数据变化可能改变根分裂，连锁导致完全不同的树。这种不稳定性激发了随机森林和提升等集成方法，对许多树取平均。",
    diagram: "",
    terms: ["decision_tree", "bias_variance_tradeoff", "ensemble_method"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 80,
    q: "What distinguishes ID3, C4.5, and CART algorithms?",
    qChinese: "ID3、C4.5和CART算法有什么区别？",
    options: [
      "A) They are identical",
      "B) Only ID3 supports pruning",
      "C) Only CART handles numerical features",
      "D) ID3 uses info gain; C4.5 uses gain ratio; CART uses Gini and binary splits",
    ],
    optionsChinese: [
      "A) 它们完全相同",
      "B) 只有ID3支持剪枝",
      "C) 只有CART处理数值特征",
      "D) ID3用信息增益；C4.5用增益率；CART用基尼和二元分裂",
    ],
    answer: 3,
    explanation: "ID3 uses information gain on categorical features only. C4.5 improves with gain ratio, continuous features, and missing values. CART creates binary splits, uses Gini for classification and MSE for regression. Scikit-learn uses an optimized CART. Each represents an evolution in tree algorithms.",
    explanationChinese: "ID3仅对类别特征使用信息增益。C4.5用增益率改进，处理连续特征和缺失值。CART创建二元分裂，分类用基尼，回归用MSE。Scikit-learn使用优化的CART。每个代表树算法的一次演进。",
    diagram: "",
    terms: ["decision_tree", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 81,
    q: "How does n_estimators affect a random forest?",
    qChinese: "n_estimators如何影响随机森林？",
    options: [
      "A) More trees reduce variance with diminishing returns but do not cause overfitting",
      "B) More trees always cause overfitting",
      "C) More trees decrease accuracy",
      "D) Number of trees has no effect"
    ],
    optionsChinese: [
      "A) 更多树减少方差但收益递减，不会导致过拟合",
      "B) 更多树总是导致过拟合",
      "C) 更多树降低准确率",
      "D) 树的数量没有影响"
    ],
    answer: 0,
    explanation: "Unlike boosting, random forests do not overfit with more trees since each tree is independently trained. Adding trees reduces variance and stabilizes predictions. However, returns diminish beyond a certain point while cost grows linearly. Usually 100-500 trees suffice for most practical problems.",
    explanationChinese: "与提升不同，随机森林不会因更多树而过拟合，因为每棵树独立训练。添加树减少方差并稳定预测。但超过一定点后收益递减而成本线性增长。通常100-500棵树对大多数实际问题足够。",
    diagram: "",
    terms: ["random_forest", "ensemble_method", "bias_variance_tradeoff"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 82,
    q: "What is a decision stump?",
    qChinese: "什么是决策树桩？",
    options: [
      "A) A tree with no splits",
      "B) A tree with maximum depth",
      "C) A depth-1 tree with only one split",
      "D) A tree predicting the same class always"
    ],
    optionsChinese: [
      "A) 没有分裂的树",
      "B) 最大深度的树",
      "C) 只有一次分裂的深度1的树",
      "D) 总是预测相同类的树"
    ],
    answer: 2,
    explanation: "A decision stump splits once, creating two leaf nodes. It is a weak learner with high bias but is the standard base learner in AdaBoost. Boosting combines many stumps, each focusing on one feature threshold, to build a powerful classifier through iterative reweighting of misclassified samples.",
    explanationChinese: "决策树桩分裂一次，创建两个叶节点。它是高偏差的弱学习器，但是AdaBoost的标准基学习器。提升组合许多树桩，每个关注一个特征阈值，通过迭代重新加权误分类样本构建强大的分类器。",
    diagram: "",
    terms: ["decision_tree", "ensemble_method"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 83,
    q: "What effect does a large min_samples_leaf have on a decision tree?",
    qChinese: "较大的min_samples_leaf对决策树有什么影响？",
    options: [
      "A) Tree becomes deeper",
      "B) Tree becomes shallower and more regularized",
      "C) Tree predicts only minority class",
      "D) Training becomes slower"
    ],
    optionsChinese: [
      "A) 树变深",
      "B) 树变浅且更正则化",
      "C) 树只预测少数类",
      "D) 训练变慢"
    ],
    answer: 1,
    explanation: "min_samples_leaf requires each leaf to contain at least that many samples. Larger values prevent overly specific leaves, acting as regularization. This reduces overfitting but may cause underfitting if too large. It is one of several pre-pruning hyperparameters alongside max_depth and min_samples_split.",
    explanationChinese: "min_samples_leaf要求每个叶节点至少包含那么多样本。较大的值防止过于具体的叶节点，起正则化作用。这减少过拟合但如果太大可能导致欠拟合。它是与max_depth和min_samples_split并列的预剪枝超参数之一。",
    diagram: "",
    terms: ["decision_tree", "overfitting", "regularization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 84,
    q: "How does random forest measure feature importance?",
    qChinese: "随机森林如何度量特征重要性？",
    options: [
      "A) It cannot measure importance",
      "B) Through mean decrease in impurity or permutation importance across all trees",
      "C) Only for categorical features",
      "D) Requires a separate algorithm"
    ],
    optionsChinese: [
      "A) 它不能度量重要性",
      "B) 通过所有树上的不纯度平均减少或排列重要性",
      "C) 仅对类别特征",
      "D) 需要单独的算法"
    ],
    answer: 1,
    explanation: "Random forests compute feature importance via MDI (mean Gini decrease across all splits) or permutation importance (accuracy drop from feature shuffling). Averaging across many trees gives stable estimates. This built-in capability makes random forests valuable for feature selection and data understanding.",
    explanationChinese: "随机森林通过MDI（所有分裂上的平均基尼减少）或排列重要性（特征打乱后的准确率下降）计算特征重要性。跨许多树平均给出稳定估计。这种内置能力使随机森林对特征选择和数据理解很有价值。",
    diagram: "",
    terms: ["random_forest", "feature_engineering", "ensemble_method"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 85,
    q: "What kind of decision boundaries do decision trees produce?",
    qChinese: "决策树产生什么样的决策边界？",
    options: [
      "A) Smooth curves",
      "B) Axis-aligned rectangular boundaries perpendicular to feature axes",
      "C) Circular boundaries",
      "D) Arbitrary-angle hyperplanes"
    ],
    optionsChinese: [
      "A) 平滑曲线",
      "B) 垂直于特征轴的轴对齐矩形边界",
      "C) 圆形边界",
      "D) 任意角度的超平面"
    ],
    answer: 1,
    explanation: "Each split creates a boundary perpendicular to one feature axis, producing rectangular regions. While sufficient splits can approximate any shape, diagonal boundaries require many splits, making trees inefficient for rotated or angled patterns. Oblique decision trees can split on linear combinations of features.",
    explanationChinese: "每次分裂创建垂直于一个特征轴的边界，产生矩形区域。虽然足够多的分裂可以近似任何形状，但对角边界需要许多分裂，使树对旋转或有角度的模式效率低。斜决策树可以在特征的线性组合上分裂。",
    diagram: "",
    terms: ["decision_tree", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 86,
    q: "What is the difference between pre-pruning and post-pruning?",
    qChinese: "预剪枝和后剪枝有什么区别？",
    options: [
      "A) Same technique",
      "B) Pre-pruning needs a validation set; post-pruning does not",
      "C) Only post-pruning prevents overfitting",
      "D) Pre-pruning stops growth during training; post-pruning trims after full tree is built",
    ],
    optionsChinese: [
      "A) 相同的技术",
      "B) 预剪枝需要验证集；后剪枝不需要",
      "C) 只有后剪枝防止过拟合",
      "D) 预剪枝在训练中停止生长；后剪枝在完整树构建后修剪",
    ],
    answer: 3,
    explanation: "Pre-pruning applies stopping criteria (max_depth, min_samples_leaf) during construction. Post-pruning (cost-complexity) grows the full tree then iteratively removes least-helpful subtrees based on validation. Post-pruning often finds better solutions but costs more computation. Both aim to reduce overfitting.",
    explanationChinese: "预剪枝在构建期间应用停止准则（max_depth、min_samples_leaf）。后剪枝（代价复杂度）先生长完整树然后基于验证迭代移除最不有用的子树。后剪枝通常找到更好的解但计算更多。两者都旨在减少过拟合。",
    diagram: "",
    terms: ["decision_tree", "overfitting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 87,
    q: "Can decision trees handle mixed feature types without preprocessing?",
    qChinese: "决策树可以不经预处理直接处理混合特征类型吗？",
    options: [
      "A) No, only numerical",
      "B) No, only categorical",
      "C) Yes, they handle numerical and categorical features without scaling or encoding",
      "D) Only after PCA"
    ],
    optionsChinese: [
      "A) 不，只有数值型",
      "B) 不，只有类别型",
      "C) 是的，它们无需缩放或编码即可处理数值和类别特征",
      "D) 仅在PCA后"
    ],
    answer: 2,
    explanation: "Decision trees split on feature thresholds (age > 30) or categories (color = red) directly. They need no scaling or normalization since decisions are based on comparisons, not distances. This makes trees practical for heterogeneous datasets common in real-world applications.",
    explanationChinese: "决策树直接在特征阈值（age > 30）或类别（color = red）上分裂。它们不需要缩放或归一化，因为决策基于比较而非距离。这使树对实际应用中常见的异构数据集很实用。",
    diagram: "",
    terms: ["decision_tree", "feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 88,
    q: "What is the Extra Trees (Extremely Randomized Trees) method?",
    qChinese: "极端随机树（Extra Trees）方法是什么？",
    options: [
      "A) An ensemble using random split thresholds instead of optimal ones",
      "B) Deeper trees than normal",
      "C) Trees trained on extra data",
      "D) One feature per tree"
    ],
    optionsChinese: [
      "A) 使用随机分裂阈值而非最优阈值的集成",
      "B) 比正常更深的树",
      "C) 在额外数据上训练的树",
      "D) 每棵树一个特征"
    ],
    answer: 0,
    explanation: "Extra Trees randomly selects split thresholds instead of searching for the optimal one, adding more randomness than random forests. This makes training faster and further reduces variance at the cost of slightly more bias. It uses the full dataset (no bootstrap) with random feature subsets.",
    explanationChinese: "极端随机树随机选择分裂阈值而非搜索最优值，比随机森林添加更多随机性。这使训练更快并进一步减少方差，代价是略多偏差。它使用完整数据集（无自助采样）和随机特征子集。",
    diagram: "",
    terms: ["random_forest", "ensemble_method", "decision_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 89,
    q: "What does a leaf node represent in a classification tree?",
    qChinese: "分类树中的叶节点代表什么？",
    options: [
      "A) A class prediction, typically the majority class of samples reaching that leaf",
      "B) A feature split condition",
      "C) The root of a subtree",
      "D) An unprocessed data point"
    ],
    optionsChinese: [
      "A) 类别预测，通常是到达该叶节点的样本的多数类",
      "B) 特征分裂条件",
      "C) 子树的根",
      "D) 未处理的数据点"
    ],
    answer: 0,
    explanation: "A leaf node is a terminal node making predictions. For classification, it predicts the majority class of its training samples. For probabilities, it returns the class distribution. Leaf purity and sample count affect prediction confidence. Pure leaves with many samples indicate high confidence.",
    explanationChinese: "叶节点是进行预测的终端节点。对于分类，它预测其训练样本的多数类。对于概率，它返回类分布。叶节点纯度和样本数影响预测置信度。有许多样本的纯叶节点表示高置信度。",
    diagram: "",
    terms: ["decision_tree", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 90,
    q: "What is cost-complexity pruning (ccp_alpha)?",
    qChinese: "代价复杂度剪枝（ccp_alpha）是什么？",
    options: [
      "A) A method to deepen trees",
      "B) Post-pruning that adds a penalty alpha per leaf to the training error",
      "C) A feature scaling method",
      "D) A cross-validation type"
    ],
    optionsChinese: [
      "A) 加深树的方法",
      "B) 在训练误差上每个叶节点添加惩罚alpha的后剪枝",
      "C) 特征缩放方法",
      "D) 一种交叉验证类型"
    ],
    answer: 1,
    explanation: "Cost-complexity pruning minimizes (training error + alpha * number_of_leaves). Higher alpha produces simpler trees. The optimal alpha is found via cross-validation by evaluating trees at different complexity levels. In scikit-learn, ccp_alpha=0 means no pruning, and larger values create simpler trees.",
    explanationChinese: "代价复杂度剪枝最小化（训练误差 + alpha * 叶节点数）。较高的alpha产生更简单的树。最优alpha通过在不同复杂度级别评估树的交叉验证找到。在scikit-learn中，ccp_alpha=0意味着不剪枝，较大值创建更简单的树。",
    diagram: "",
    terms: ["decision_tree", "overfitting", "cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 91,
    q: "What is the main objective of a Support Vector Machine (SVM)?",
    qChinese: "支持向量机（SVM）的主要目标是什么？",
    options: [
      "A) Minimize support vector count",
      "B) Maximize training accuracy regardless of margin",
      "C) Minimize dataset entropy",
      "D) Find the hyperplane that maximizes the margin between classes",
    ],
    optionsChinese: [
      "A) 最小化支持向量数量",
      "B) 不考虑间隔最大化训练准确率",
      "C) 最小化数据集的熵",
      "D) 找到最大化类别之间间隔的超平面",
    ],
    answer: 3,
    explanation: "SVMs find the hyperplane maximizing the geometric margin between the two closest points of each class. This maximum-margin principle yields better generalization. The margin equals 2/||w||, so maximizing margin is equivalent to minimizing ||w||^2 subject to correct classification constraints.",
    explanationChinese: "SVM找到最大化每个类最近点之间几何间隔的超平面。最大间隔原则产生更好的泛化。间隔等于2/||w||，因此最大化间隔等价于在正确分类约束下最小化||w||^2。",
    diagram: "",
    terms: ["support_vector_machine", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 92,
    q: "What are support vectors in an SVM?",
    qChinese: "SVM中的支持向量是什么？",
    options: [
      "A) All training points",
      "B) Normalized feature vectors",
      "C) The training points closest to the decision boundary that define the margin",
      "D) Model weights"
    ],
    optionsChinese: [
      "A) 所有训练点",
      "B) 归一化的特征向量",
      "C) 最接近决策边界并定义间隔的训练点",
      "D) 模型权重"
    ],
    answer: 2,
    explanation: "Support vectors are the critical data points lying on or nearest the margin boundaries. They alone define the optimal hyperplane; removing other points would not change the decision boundary. The model depends only on these points, making SVMs memory-efficient at prediction time.",
    explanationChinese: "支持向量是位于或最接近间隔边界的关键数据点。它们单独定义最优超平面；移除其他点不会改变决策边界。模型仅依赖这些点，使SVM在预测时内存高效。",
    diagram: "",
    terms: ["support_vector_machine", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 93,
    q: "What is the kernel trick in SVM?",
    qChinese: "SVM中的核技巧是什么？",
    options: [
      "A) Feature reduction method",
      "B) Feature selection technique",
      "C) Computing dot products in high-dimensional space without explicit transformation",
      "D) Data preprocessing step"
    ],
    optionsChinese: [
      "A) 特征减少方法",
      "B) 特征选择技术",
      "C) 在高维空间中计算点积而不显式变换",
      "D) 数据预处理步骤"
    ],
    answer: 2,
    explanation: "The kernel trick replaces dot products x_i^T x_j with K(x_i, x_j) = phi(x_i)^T phi(x_j) where phi maps to higher dimensions. This finds non-linear boundaries without explicitly computing the transformation. Common kernels include RBF (infinite dimensions), polynomial, and sigmoid.",
    explanationChinese: "核技巧用K(x_i, x_j) = phi(x_i)^T phi(x_j)替代点积x_i^T x_j，其中phi映射到高维。这在不显式计算变换的情况下找到非线性边界。常见核包括RBF（无限维）、多项式和sigmoid。",
    diagram: "",
    terms: ["support_vector_machine", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 94,
    q: "What does the C parameter control in soft-margin SVM?",
    qChinese: "软间隔SVM中C参数控制什么？",
    options: [
      "A) Tradeoff between margin maximization and classification error minimization",
      "B) Number of support vectors",
      "C) Kernel type",
      "D) Learning rate"
    ],
    optionsChinese: [
      "A) 间隔最大化和分类误差最小化之间的权衡",
      "B) 支持向量数量",
      "C) 核类型",
      "D) 学习率"
    ],
    answer: 0,
    explanation: "C penalizes misclassifications. Large C prioritizes correct classification (narrow margin, overfitting risk). Small C allows more misclassifications for a wider margin (underfitting risk). C = 1/lambda is the inverse of regularization strength. Optimal C is found via cross-validation.",
    explanationChinese: "C惩罚误分类。大C优先正确分类（窄间隔，过拟合风险）。小C允许更多误分类以获得更宽间隔（欠拟合风险）。C = 1/lambda是正则化强度的倒数。最优C通过交叉验证找到。",
    diagram: "",
    terms: ["support_vector_machine", "regularization", "bias_variance_tradeoff"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 95,
    q: "What is the RBF (Radial Basis Function) kernel?",
    qChinese: "RBF（径向基函数）核是什么？",
    options: [
      "A) K(x,y) = exp(-gamma * ||x-y||^2)",
      "B) K(x,y) = x^T y",
      "C) K(x,y) = (x^T y + c)^d",
      "D) K(x,y) = tanh(x^T y + c)"
    ],
    optionsChinese: [
      "A) K(x,y) = exp(-gamma * ||x-y||^2)",
      "B) K(x,y) = x^T y",
      "C) K(x,y) = (x^T y + c)^d",
      "D) K(x,y) = tanh(x^T y + c)"
    ],
    answer: 0,
    explanation: "The RBF kernel measures similarity via Euclidean distance. Gamma controls the width: large gamma gives each point narrow influence (complex boundary, overfitting risk), small gamma gives broad influence (smooth boundary). RBF implicitly maps to infinite-dimensional space and is the most popular kernel choice.",
    explanationChinese: "RBF核通过欧几里得距离衡量相似性。Gamma控制宽度：大gamma给每个点窄影响范围（复杂边界，过拟合风险），小gamma给宽影响范围（平滑边界）。RBF隐式映射到无限维空间，是最流行的核选择。",
    diagram: "",
    terms: ["support_vector_machine", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 96,
    q: "Why is feature scaling important for SVMs?",
    qChinese: "为什么特征缩放对SVM很重要？",
    options: [
      "A) SVMs cannot process unscaled features",
      "B) Unscaled features with larger ranges dominate distance calculations, distorting the margin",
      "C) Scaling converts non-linear to linear problems",
      "D) Scaling eliminates the need for kernels"
    ],
    optionsChinese: [
      "A) SVM不能处理未缩放的特征",
      "B) 较大范围的未缩放特征主导距离计算，扭曲间隔",
      "C) 缩放将非线性转换为线性问题",
      "D) 缩放消除了对核的需要"
    ],
    answer: 1,
    explanation: "SVMs optimize margin based on distances. Features with larger scales dominate, biasing the margin computation. Standardizing features to zero mean and unit variance ensures equal contribution. This is especially critical for RBF kernels which explicitly use Euclidean distance in their computation.",
    explanationChinese: "SVM基于距离优化间隔。较大尺度的特征主导，偏置间隔计算。将特征标准化为零均值和单位方差确保等同贡献。这对显式使用欧几里得距离的RBF核尤其关键。",
    diagram: "",
    terms: ["support_vector_machine", "feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 97,
    q: "What is the hinge loss in SVM?",
    qChinese: "SVM中的铰链损失是什么？",
    options: [
      "A) L = log(1 + exp(-y*f(x)))",
      "B) L = |y - f(x)|",
      "C) L = (y - f(x))^2",
      "D) L = max(0, 1 - y*f(x))",
    ],
    optionsChinese: [
      "A) L = log(1 + exp(-y*f(x)))",
      "B) L = |y - f(x)|",
      "C) L = (y - f(x))^2",
      "D) L = max(0, 1 - y*f(x))",
    ],
    answer: 3,
    explanation: "Hinge loss is zero when the sample is correctly classified with margin >= 1, and increases linearly otherwise. It only penalizes misclassifications and margin violations. Combined with L2 regularization on ||w||^2, it gives the standard SVM objective. Points beyond the margin contribute zero loss.",
    explanationChinese: "铰链损失在样本以>=1的间隔正确分类时为零，否则线性增加。它只惩罚误分类和间隔违规。与||w||^2的L2正则化结合，给出标准SVM目标。超出间隔的点贡献零损失。",
    diagram: "",
    terms: ["support_vector_machine", "regularization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 98,
    q: "How can SVMs handle multi-class classification?",
    qChinese: "SVM如何处理多类分类？",
    options: [
      "A) Using one-vs-one (OvO) or one-vs-rest (OvR) strategies",
      "B) SVMs cannot do multi-class classification",
      "C) By using deeper kernels",
      "D) By increasing C"
    ],
    optionsChinese: [
      "A) 使用一对一（OvO）或一对多（OvR）策略",
      "B) SVM不能进行多类分类",
      "C) 使用更深的核",
      "D) 增加C"
    ],
    answer: 0,
    explanation: "SVMs are binary classifiers extended to K classes via OvR (K classifiers, each class vs rest) or OvO (K(K-1)/2 pairwise classifiers). Scikit-learn uses OvR for LinearSVC and OvO for kernel SVC. OvO is preferred for kernel SVMs since each sub-problem involves fewer samples.",
    explanationChinese: "SVM是通过OvR（K个分类器，每个类vs其余）或OvO（K(K-1)/2个成对分类器）扩展到K类的二元分类器。Scikit-learn对LinearSVC使用OvR，对核SVC使用OvO。OvO对核SVM更优，因为每个子问题涉及更少样本。",
    diagram: "",
    terms: ["support_vector_machine", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 99,
    q: "What is the dual formulation of SVM and why is it important?",
    qChinese: "SVM的对偶形式是什么，为什么重要？",
    options: [
      "A) A simpler version ignoring the margin",
      "B) It reformulates the problem using dot products, enabling the kernel trick",
      "C) It eliminates training data dependence",
      "D) It only works for linear kernels"
    ],
    optionsChinese: [
      "A) 忽略间隔的更简单版本",
      "B) 它用点积重新表述问题，使核技巧成为可能",
      "C) 它消除对训练数据的依赖",
      "D) 它只适用于线性核"
    ],
    answer: 1,
    explanation: "The dual formulation expresses optimization via Lagrange multipliers and pairwise dot products x_i^T x_j. Since data only appears in dot products, they can be replaced by kernel evaluations K(x_i, x_j). This enables non-linear classification and is preferred when the number of samples is less than the number of features.",
    explanationChinese: "对偶形式通过拉格朗日乘子和成对点积x_i^T x_j表达优化。由于数据仅在点积中出现，可以被核评估K(x_i, x_j)替代。这使非线性分类成为可能，当样本数少于特征数时更受青睐。",
    diagram: "",
    terms: ["support_vector_machine", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 100,
    q: "What effect does the gamma parameter have in an RBF kernel SVM?",
    qChinese: "RBF核SVM中gamma参数有什么效果？",
    options: [
      "A) Controls support vector count directly",
      "B) Sets the learning rate",
      "C) Determines polynomial degree",
      "D) Controls how far each training example's influence reaches",
    ],
    optionsChinese: [
      "A) 直接控制支持向量数量",
      "B) 设置学习率",
      "C) 决定多项式次数",
      "D) 控制每个训练样本的影响范围",
    ],
    answer: 3,
    explanation: "Gamma defines the inverse influence radius. High gamma makes each point's influence local and tight, creating complex boundaries that may overfit. Low gamma creates broad influence and smoother boundaries that may underfit. Together with C, gamma controls the SVM's bias-variance tradeoff.",
    explanationChinese: "Gamma定义影响半径的倒数。高gamma使每个点的影响局部而紧密，创建可能过拟合的复杂边界。低gamma创建广泛影响和可能欠拟合的更平滑边界。与C一起，gamma控制SVM的偏差-方差权衡。",
    diagram: "",
    terms: ["support_vector_machine", "bias_variance_tradeoff", "overfitting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 101,
    q: "What is a polynomial kernel in SVM?",
    qChinese: "SVM中的多项式核是什么？",
    options: [
      "A) K(x,y) = exp(-||x-y||^2)",
      "B) K(x,y) = (x^T y + c)^d where d is the degree",
      "C) K(x,y) = x^T y",
      "D) K(x,y) = max(0, x^T y)"
    ],
    optionsChinese: [
      "A) K(x,y) = exp(-||x-y||^2)",
      "B) K(x,y) = (x^T y + c)^d，其中d是次数",
      "C) K(x,y) = x^T y",
      "D) K(x,y) = max(0, x^T y)"
    ],
    answer: 1,
    explanation: "The polynomial kernel K(x,y) = (x^T y + c)^d maps data to a higher-dimensional space where polynomial relationships become linear. Degree d controls complexity: d=1 is linear, d=2 captures quadratic relationships. Higher degrees risk overfitting. Parameter c (coef0) controls the influence of higher vs lower-order terms.",
    explanationChinese: "多项式核K(x,y) = (x^T y + c)^d将数据映射到多项式关系变为线性的高维空间。次数d控制复杂度：d=1是线性的，d=2捕获二次关系。更高次数有过拟合风险。参数c(coef0)控制高阶与低阶项的影响。",
    diagram: "",
    terms: ["support_vector_machine", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 102,
    q: "What is the difference between hard-margin and soft-margin SVM?",
    qChinese: "硬间隔和软间隔SVM有什么区别？",
    options: [
      "A) Hard margin allows no misclassifications; soft margin allows some via slack variables",
      "B) Hard margin is always better",
      "C) Soft margin has no regularization",
      "D) Hard margin works with non-linear data"
    ],
    optionsChinese: [
      "A) 硬间隔不允许误分类；软间隔通过松弛变量允许一些",
      "B) 硬间隔总是更好",
      "C) 软间隔没有正则化",
      "D) 硬间隔适用于非线性数据"
    ],
    answer: 0,
    explanation: "Hard-margin SVM requires perfect separation, working only when data is linearly separable and is sensitive to outliers. Soft-margin SVM introduces slack variables (xi_i) allowing some points to be inside the margin or misclassified, controlled by C. This makes it practical for real-world noisy data.",
    explanationChinese: "硬间隔SVM要求完美分离，仅在数据线性可分时工作且对异常值敏感。软间隔SVM引入松弛变量（xi_i）允许一些点在间隔内或被误分类，由C控制。这使其对现实世界的噪声数据实用。",
    diagram: "",
    terms: ["support_vector_machine", "regularization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 103,
    q: "What is the computational complexity of training an SVM with the kernel trick?",
    qChinese: "使用核技巧训练SVM的计算复杂度是什么？",
    options: [
      "A) O(n)",
      "B) O(n^2) to O(n^3) due to kernel matrix computation",
      "C) O(n * p)",
      "D) O(log n)"
    ],
    optionsChinese: [
      "A) O(n)",
      "B) 由于核矩阵计算为O(n^2)到O(n^3)",
      "C) O(n * p)",
      "D) O(log n)"
    ],
    answer: 1,
    explanation: "Kernel SVMs require computing the n x n kernel matrix (O(n^2)) and solving a quadratic programming problem (up to O(n^3)). This makes SVMs impractical for very large datasets. Linear SVMs with techniques like SGD can handle millions of samples, but kernel SVMs are limited to thousands.",
    explanationChinese: "核SVM需要计算n x n核矩阵（O(n^2)）并求解二次规划问题（最多O(n^3)）。这使SVM对非常大的数据集不实用。使用SGD等技术的线性SVM可以处理数百万样本，但核SVM限于数千个。",
    diagram: "",
    terms: ["support_vector_machine", "gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 104,
    q: "What is SVM regression (SVR) and how does it differ from classification SVM?",
    qChinese: "SVM回归（SVR）是什么，与分类SVM有何不同？",
    options: [
      "A) SVR maximizes the margin between classes",
      "B) SVR uses Gini impurity",
      "C) SVR fits a tube of width epsilon around the data, ignoring errors within the tube",
      "D) SVR cannot use kernel functions"
    ],
    optionsChinese: [
      "A) SVR最大化类别间的间隔",
      "B) SVR使用基尼不纯度",
      "C) SVR在数据周围拟合宽度为epsilon的管，忽略管内的误差",
      "D) SVR不能使用核函数"
    ],
    answer: 2,
    explanation: "Support Vector Regression uses an epsilon-insensitive loss that ignores errors within a tube of width epsilon around the prediction. Only points outside this tube (support vectors) contribute to the loss. The parameter C controls the tradeoff between tube width and model complexity, similar to classification SVM.",
    explanationChinese: "支持向量回归使用epsilon不敏感损失，忽略预测周围宽度为epsilon的管内的误差。只有管外的点（支持向量）对损失有贡献。参数C控制管宽度和模型复杂度之间的权衡，类似于分类SVM。",
    diagram: "",
    terms: ["support_vector_machine", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 105,
    q: "What is the nu parameter in nu-SVM?",
    qChinese: "nu-SVM中的nu参数是什么？",
    options: [
      "A) An upper bound on the fraction of margin errors and a lower bound on the fraction of support vectors",
      "B) The learning rate",
      "C) The number of clusters",
      "D) The polynomial degree"
    ],
    optionsChinese: [
      "A) 间隔误差比例的上界和支持向量比例的下界",
      "B) 学习率",
      "C) 聚类数量",
      "D) 多项式次数"
    ],
    answer: 0,
    explanation: "Nu-SVM replaces C with nu (between 0 and 1), which is more interpretable. Nu provides an upper bound on the fraction of training errors and a lower bound on the fraction of support vectors. This makes it easier to control model complexity since nu directly relates to error tolerance.",
    explanationChinese: "Nu-SVM用nu（0到1之间）替代C，更易解释。Nu提供训练误差比例的上界和支持向量比例的下界。这使控制模型复杂度更容易，因为nu直接关联到误差容忍度。",
    diagram: "",
    terms: ["support_vector_machine", "regularization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 106,
    q: "Why might a linear SVM be preferred over an RBF kernel SVM for text classification?",
    qChinese: "为什么对于文本分类可能更喜欢线性SVM而不是RBF核SVM？",
    options: [
      "A) Text data is always low-dimensional",
      "B) Linear SVMs always achieve higher accuracy",
      "C) RBF kernels cannot process text",
      "D) Text features are already high-dimensional and often linearly separable; linear SVM is faster and scales better",
    ],
    optionsChinese: [
      "A) 文本数据总是低维的",
      "B) 线性SVM总是达到更高的准确率",
      "C) RBF核不能处理文本",
      "D) 文本特征已经是高维的且通常线性可分；线性SVM更快且扩展性更好",
    ],
    answer: 3,
    explanation: "Text data with bag-of-words or TF-IDF features is already very high-dimensional (thousands of features). In such spaces, data is often linearly separable, making a complex kernel unnecessary. Linear SVM trains in O(np) and avoids the O(n^2) kernel matrix, scaling much better to large corpora.",
    explanationChinese: "使用词袋或TF-IDF特征的文本数据已经是非常高维的（数千特征）。在这样的空间中，数据通常是线性可分的，使复杂核不必要。线性SVM训练为O(np)，避免O(n^2)核矩阵，对大语料库扩展性更好。",
    diagram: "",
    terms: ["support_vector_machine", "feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 107,
    q: "What is the geometric margin in SVM and how does it relate to the functional margin?",
    qChinese: "SVM中的几何间隔是什么，它与函数间隔有什么关系？",
    options: [
      "A) They are identical",
      "B) Functional margin is always larger",
      "C) Geometric margin = functional margin / ||w||, normalizing by the weight vector norm",
      "D) Geometric margin uses a different kernel"
    ],
    optionsChinese: [
      "A) 它们完全相同",
      "B) 函数间隔总是更大",
      "C) 几何间隔 = 函数间隔 / ||w||，用权重向量范数归一化",
      "D) 几何间隔使用不同的核"
    ],
    answer: 2,
    explanation: "The functional margin y_i(w^T x_i + b) depends on the scale of w. The geometric margin divides by ||w||, giving the actual perpendicular distance from the point to the hyperplane. SVM maximizes the geometric margin, which is scale-invariant and represents the true physical distance.",
    explanationChinese: "函数间隔y_i(w^T x_i + b)取决于w的尺度。几何间隔除以||w||，给出点到超平面的实际垂直距离。SVM最大化几何间隔，它是尺度不变的并代表真实的物理距离。",
    diagram: "",
    terms: ["support_vector_machine", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 108,
    q: "What are the KKT (Karush-Kuhn-Tucker) conditions in the context of SVM?",
    qChinese: "SVM中的KKT（Karush-Kuhn-Tucker）条件是什么？",
    options: [
      "A) Conditions for data preprocessing",
      "B) Conditions for choosing the C parameter",
      "C) Conditions for kernel selection",
      "D) Necessary and sufficient optimality conditions for the SVM's constrained optimization",
    ],
    optionsChinese: [
      "A) 数据预处理条件",
      "B) 选择C参数的条件",
      "C) 核选择条件",
      "D) SVM约束优化的必要且充分最优条件",
    ],
    answer: 3,
    explanation: "KKT conditions are optimality conditions for constrained optimization problems. In SVM, they state that each Lagrange multiplier alpha_i is zero for correctly classified points beyond the margin, and positive for support vectors. The SMO algorithm exploits KKT conditions to efficiently solve the SVM dual problem.",
    explanationChinese: "KKT条件是约束优化问题的最优性条件。在SVM中，它们规定对于间隔之外正确分类的点，每个拉格朗日乘子alpha_i为零，对支持向量为正。SMO算法利用KKT条件高效求解SVM对偶问题。",
    diagram: "",
    terms: ["support_vector_machine", "gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 109,
    q: "What is the SMO (Sequential Minimal Optimization) algorithm?",
    qChinese: "SMO（序列最小优化）算法是什么？",
    options: [
      "A) An efficient algorithm that solves the SVM dual problem by optimizing two variables at a time",
      "B) A type of neural network",
      "C) A clustering algorithm",
      "D) A dimensionality reduction technique"
    ],
    optionsChinese: [
      "A) 通过一次优化两个变量高效求解SVM对偶问题的算法",
      "B) 一种神经网络",
      "C) 聚类算法",
      "D) 降维技术"
    ],
    answer: 0,
    explanation: "SMO breaks the large quadratic programming problem into the smallest possible sub-problems, each involving only two Lagrange multipliers. These two-variable sub-problems have analytical solutions, avoiding expensive numerical QP solvers. SMO made kernel SVMs practical for medium-sized datasets and is used in libSVM.",
    explanationChinese: "SMO将大型二次规划问题分解为最小可能的子问题，每个只涉及两个拉格朗日乘子。这些双变量子问题有解析解，避免昂贵的数值QP求解器。SMO使核SVM对中等大小数据集实用，被libSVM使用。",
    diagram: "",
    terms: ["support_vector_machine", "gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 110,
    q: "What is the difference between a linear SVM and logistic regression?",
    qChinese: "线性SVM和逻辑回归有什么区别？",
    options: [
      "A) They are identical algorithms",
      "B) SVM uses hinge loss and maximizes margin; logistic regression uses cross-entropy and outputs probabilities",
      "C) Logistic regression cannot do binary classification",
      "D) SVM always achieves higher accuracy"
    ],
    optionsChinese: [
      "A) 它们是完全相同的算法",
      "B) SVM使用铰链损失并最大化间隔；逻辑回归使用交叉熵并输出概率",
      "C) 逻辑回归不能做二分类",
      "D) SVM总是达到更高的准确率"
    ],
    answer: 1,
    explanation: "Both are linear classifiers but differ in loss functions and outputs. SVM uses hinge loss, focuses on margin maximization, and outputs class labels. Logistic regression uses log-loss, outputs calibrated probabilities, and has a probabilistic interpretation. Their decision boundaries are often very similar on well-separated data.",
    explanationChinese: "两者都是线性分类器，但在损失函数和输出上不同。SVM使用铰链损失，关注间隔最大化，输出类标签。逻辑回归使用对数损失，输出校准的概率，有概率解释。在分离良好的数据上它们的决策边界通常非常相似。",
    diagram: "",
    terms: ["support_vector_machine", "logistic_regression"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 111,
    q: "What is the sigmoid kernel in SVM and when might you use it?",
    qChinese: "SVM中的sigmoid核是什么，什么时候使用它？",
    options: [
      "A) Always the best kernel choice",
      "B) Only for regression problems",
      "C) Same as RBF",
      "D) K(x,y) = tanh(gamma * x^T y + coef0); sometimes used as an analogy to neural networks",
    ],
    optionsChinese: [
      "A) 总是最佳核选择",
      "B) 仅用于回归问题",
      "C) 与RBF相同",
      "D) K(x,y) = tanh(gamma * x^T y + coef0)；有时用作神经网络的类比",
    ],
    answer: 3,
    explanation: "The sigmoid kernel K(x,y) = tanh(gamma*x^T y + coef0) relates to a two-layer neural network. However, it is not a valid kernel for all parameter values (not always positive semi-definite). It is rarely used in practice since RBF and polynomial kernels generally perform better and have stronger theoretical properties.",
    explanationChinese: "Sigmoid核K(x,y) = tanh(gamma*x^T y + coef0)与两层神经网络相关。但它对所有参数值不是有效核（不总是半正定的）。实践中很少使用，因为RBF和多项式核通常表现更好且有更强的理论性质。",
    diagram: "",
    terms: ["support_vector_machine", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 112,
    q: "How does one-class SVM work for anomaly detection?",
    qChinese: "单类SVM如何用于异常检测？",
    options: [
      "A) It trains on both normal and abnormal data equally",
      "B) It requires labeled anomalies for training",
      "C) It always uses a linear kernel",
      "D) It learns a boundary around normal data in feature space; points outside are anomalies",
    ],
    optionsChinese: [
      "A) 它对正常和异常数据同等训练",
      "B) 它需要标记的异常进行训练",
      "C) 它总是使用线性核",
      "D) 它在特征空间中学习正常数据周围的边界；外部的点是异常",
    ],
    answer: 3,
    explanation: "One-class SVM learns the smallest region in feature space containing most training data (assumed normal). It separates data from the origin with maximum margin in kernel space. Points falling outside this region during prediction are flagged as anomalies. The nu parameter controls the anomaly fraction.",
    explanationChinese: "单类SVM在特征空间中学习包含大部分训练数据（假设为正常）的最小区域。它在核空间中以最大间隔将数据与原点分离。预测时落在此区域外的点被标记为异常。nu参数控制异常比例。",
    diagram: "",
    terms: ["support_vector_machine", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 113,
    q: "What happens to SVM performance when features greatly outnumber samples (p >> n)?",
    qChinese: "当特征数量远大于样本数量（p >> n）时，SVM性能会怎样？",
    options: [
      "A) SVM always fails",
      "B) SVM becomes faster to train",
      "C) Only RBF kernel works",
      "D) Linear SVM often works well since data is likely separable in high dimensions; kernel SVM may overfit",
    ],
    optionsChinese: [
      "A) SVM总是失败",
      "B) SVM训练变快",
      "C) 只有RBF核工作",
      "D) 线性SVM通常工作良好因为数据在高维中可能可分；核SVM可能过拟合",
    ],
    answer: 3,
    explanation: "In high dimensions (p >> n), data is often linearly separable, so a linear SVM with proper regularization works well. Adding a kernel may overfit. The dual formulation is efficient here since its size depends on n (small), not p (large). This makes SVMs popular for genomics and text classification.",
    explanationChinese: "在高维（p >> n）中，数据通常线性可分，因此带适当正则化的线性SVM工作良好。添加核可能过拟合。对偶形式在这里高效，因为其大小取决于n（小）而非p（大）。这使SVM在基因组学和文本分类中流行。",
    diagram: "",
    terms: ["support_vector_machine", "overfitting", "regularization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 114,
    q: "How do you select the best kernel and hyperparameters for an SVM?",
    qChinese: "如何为SVM选择最佳核和超参数？",
    options: [
      "A) Always use RBF",
      "B) The kernel does not matter",
      "C) Choose based on dataset size only",
      "D) Use grid search or random search with cross-validation over kernel type, C, and gamma",
    ],
    optionsChinese: [
      "A) 总是使用RBF",
      "B) 核不重要",
      "C) 仅基于数据集大小选择",
      "D) 使用网格搜索或随机搜索结合交叉验证，搜索核类型、C和gamma",
    ],
    answer: 3,
    explanation: "Grid search exhaustively evaluates combinations of kernel (linear, RBF, polynomial), C (e.g., 0.01 to 100), and gamma (for RBF). Each combination is evaluated via k-fold cross-validation. Random search can be more efficient for large parameter spaces. The best combination maximizes validation performance.",
    explanationChinese: "网格搜索穷举评估核（线性、RBF、多项式）、C（如0.01到100）和gamma（对于RBF）的组合。每个组合通过k折交叉验证评估。随机搜索对大参数空间可能更高效。最佳组合最大化验证性能。",
    diagram: "",
    terms: ["support_vector_machine", "cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 115,
    q: "What is the relationship between SVM and the perceptron algorithm?",
    qChinese: "SVM和感知器算法之间有什么关系？",
    options: [
      "A) They are unrelated",
      "B) SVM is a type of perceptron",
      "C) Perceptron always outperforms SVM",
      "D) Both find linear boundaries, but SVM finds the optimal one by maximizing margin while perceptron finds any separating hyperplane",
    ],
    optionsChinese: [
      "A) 它们无关",
      "B) SVM是感知器的一种",
      "C) 感知器总是优于SVM",
      "D) 两者都找线性边界，但SVM通过最大化间隔找到最优的，而感知器找任何分离超平面",
    ],
    answer: 3,
    explanation: "The perceptron finds any hyperplane that separates classes (may not be unique). SVM finds the unique hyperplane with maximum margin, providing better generalization guarantees. SVM can be seen as an optimal perceptron. The perceptron converges only for linearly separable data, while soft-margin SVM handles overlap.",
    explanationChinese: "感知器找到任何分离类的超平面（可能不唯一）。SVM找到具有最大间隔的唯一超平面，提供更好的泛化保证。SVM可以被视为最优感知器。感知器仅对线性可分数据收敛，而软间隔SVM处理重叠。",
    diagram: "",
    terms: ["support_vector_machine", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 116,
    q: "What is the basic principle behind K-Nearest Neighbors (KNN)?",
    qChinese: "K近邻（KNN）背后的基本原理是什么？",
    options: [
      "A) Fit a linear model to the data",
      "B) Build a decision tree",
      "C) Classify a new point based on the majority class of its K closest training examples",
      "D) Find cluster centroids"
    ],
    optionsChinese: [
      "A) 对数据拟合线性模型",
      "B) 构建决策树",
      "C) 根据K个最近训练样本的多数类对新点分类",
      "D) 找到聚类中心"
    ],
    answer: 2,
    explanation: "KNN is a non-parametric, instance-based method that stores all training data and classifies new points by finding the K nearest neighbors using a distance metric (usually Euclidean). The majority class among neighbors determines the prediction. KNN makes no assumptions about data distribution.",
    explanationChinese: "KNN是一种非参数、基于实例的方法，存储所有训练数据并使用距离度量（通常是欧几里得）找到K个最近邻来分类新点。邻居中的多数类决定预测。KNN不对数据分布做任何假设。",
    diagram: "",
    terms: ["k_nearest_neighbors", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 117,
    q: "Why is KNN called a lazy learning algorithm?",
    qChinese: "为什么KNN被称为懒惰学习算法？",
    options: [
      "A) It does no training; all computation happens at prediction time",
      "B) It requires very little memory",
      "C) It always underfits",
      "D) It ignores the training data"
    ],
    optionsChinese: [
      "A) 它不进行训练；所有计算在预测时发生",
      "B) 它需要很少的内存",
      "C) 它总是欠拟合",
      "D) 它忽略训练数据"
    ],
    answer: 0,
    explanation: "KNN has no explicit training phase; it simply stores the training data. All computation (distance calculations, neighbor finding) occurs at prediction time. This makes training O(1) but prediction expensive at O(n*p) per query. Data structures like KD-trees or ball trees can speed up neighbor searches.",
    explanationChinese: "KNN没有显式的训练阶段；它只是存储训练数据。所有计算（距离计算、邻居查找）在预测时发生。这使训练为O(1)但预测成本高，每次查询O(n*p)。KD树或球树等数据结构可以加速邻居搜索。",
    diagram: "",
    terms: ["k_nearest_neighbors", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 118,
    q: "How does the choice of K affect KNN's bias-variance tradeoff?",
    qChinese: "K的选择如何影响KNN的偏差-方差权衡？",
    options: [
      "A) K has no effect",
      "B) Small K always gives better results",
      "C) Large K always gives better results",
      "D) Small K gives low bias but high variance; large K gives higher bias but lower variance",
    ],
    optionsChinese: [
      "A) K没有影响",
      "B) 小K总是给出更好结果",
      "C) 大K总是给出更好结果",
      "D) 小K给出低偏差但高方差；大K给出更高偏差但更低方差",
    ],
    answer: 3,
    explanation: "K=1 creates highly flexible boundaries that follow every data point (low bias, high variance, overfitting). Large K smooths the decision boundary by averaging more neighbors (higher bias, lower variance). The optimal K balances these effects and is typically found via cross-validation.",
    explanationChinese: "K=1创建跟随每个数据点的高度灵活边界（低偏差，高方差，过拟合）。大K通过平均更多邻居平滑决策边界（更高偏差，更低方差）。最优K平衡这些效果，通常通过交叉验证找到。",
    diagram: "",
    terms: ["k_nearest_neighbors", "bias_variance_tradeoff", "overfitting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 119,
    q: "Why is feature scaling crucial for KNN?",
    qChinese: "为什么特征缩放对KNN至关重要？",
    options: [
      "A) KNN cannot process unscaled features",
      "B) Scaling reduces the number of features",
      "C) Features with larger scales dominate distance calculations, distorting neighbor identification",
      "D) Scaling converts KNN to a parametric model"
    ],
    optionsChinese: [
      "A) KNN不能处理未缩放的特征",
      "B) 缩放减少特征数量",
      "C) 较大尺度的特征主导距离计算，扭曲邻居识别",
      "D) 缩放将KNN转换为参数模型"
    ],
    answer: 2,
    explanation: "KNN relies entirely on distance calculations. If salary ranges [30000,100000] while age ranges [20,60], salary dominates Euclidean distance. Standardization or min-max scaling ensures all features contribute equally. Without scaling, KNN effectively ignores small-scale features in its neighbor determination.",
    explanationChinese: "KNN完全依赖距离计算。如果薪资范围[30000,100000]而年龄范围[20,60]，薪资主导欧几里得距离。标准化或最小-最大缩放确保所有特征同等贡献。没有缩放，KNN在确定邻居时实际上忽略小尺度特征。",
    diagram: "",
    terms: ["k_nearest_neighbors", "feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 120,
    q: "What is the curse of dimensionality and how does it affect KNN?",
    qChinese: "维度灾难是什么，它如何影响KNN？",
    options: [
      "A) In high dimensions, distances become similar and neighbors become less meaningful",
      "B) High dimensions improve KNN accuracy",
      "C) It only affects linear models",
      "D) It reduces training time"
    ],
    optionsChinese: [
      "A) 在高维中，距离变得相似，邻居变得不太有意义",
      "B) 高维度提高KNN准确率",
      "C) 它只影响线性模型",
      "D) 它减少训练时间"
    ],
    answer: 0,
    explanation: "In high dimensions, the volume of space grows exponentially, making all points roughly equidistant. The concept of nearest neighbor degrades as the ratio of nearest to farthest distance approaches 1. KNN requires exponentially more data to maintain the same density, making it impractical beyond moderate dimensions.",
    explanationChinese: "在高维中，空间体积指数增长，使所有点大致等距。最近距离与最远距离的比率趋近1，使近邻概念退化。KNN需要指数级更多数据来保持相同密度，使其在中等维度以上不实用。",
    diagram: "",
    terms: ["k_nearest_neighbors", "principal_component_analysis"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 121,
    q: "What distance metric is most commonly used in KNN?",
    qChinese: "KNN中最常用的距离度量是什么？",
    options: [
      "A) Cosine distance",
      "B) Euclidean distance (L2 norm)",
      "C) Hamming distance",
      "D) Jaccard distance"
    ],
    optionsChinese: [
      "A) 余弦距离",
      "B) 欧几里得距离（L2范数）",
      "C) 汉明距离",
      "D) Jaccard距离"
    ],
    answer: 1,
    explanation: "Euclidean distance d(x,y) = sqrt(sum((x_i-y_i)^2)) is the default for continuous features. Manhattan distance (L1) is another option that is less sensitive to outliers. Cosine similarity is preferred for text data. The choice of metric significantly impacts KNN performance and should match the data type.",
    explanationChinese: "欧几里得距离d(x,y) = sqrt(sum((x_i-y_i)^2))是连续特征的默认值。曼哈顿距离（L1）是对异常值不太敏感的另一选择。余弦相似度对文本数据更优。距离度量的选择显著影响KNN性能，应与数据类型匹配。",
    diagram: "",
    terms: ["k_nearest_neighbors", "feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 122,
    q: "What is weighted KNN?",
    qChinese: "加权KNN是什么？",
    options: [
      "A) KNN where all neighbors have equal weight",
      "B) KNN where closer neighbors have more influence on the prediction than farther ones",
      "C) KNN that weights features equally",
      "D) KNN that removes outliers"
    ],
    optionsChinese: [
      "A) 所有邻居权重相等的KNN",
      "B) 较近邻居对预测的影响大于较远邻居的KNN",
      "C) 对特征同等加权的KNN",
      "D) 移除异常值的KNN"
    ],
    answer: 1,
    explanation: "Weighted KNN assigns higher weights to closer neighbors, typically using inverse distance (1/d) as weight. This reduces the impact of farther neighbors and makes the algorithm less sensitive to the choice of K. It often improves performance compared to uniform weighting, especially for larger K values.",
    explanationChinese: "加权KNN为较近邻居分配更高权重，通常使用逆距离（1/d）作为权重。这减少了较远邻居的影响，使算法对K的选择不太敏感。与均匀加权相比，它通常改善性能，特别是对于较大的K值。",
    diagram: "",
    terms: ["k_nearest_neighbors", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 123,
    q: "What data structure can speed up KNN neighbor searches?",
    qChinese: "什么数据结构可以加速KNN邻居搜索？",
    options: [
      "A) Hash tables",
      "B) Stacks",
      "C) Linked lists",
      "D) KD-trees and Ball trees",
    ],
    optionsChinese: [
      "A) 哈希表",
      "B) 栈",
      "C) 链表",
      "D) KD树和球树",
    ],
    answer: 3,
    explanation: "KD-trees partition feature space using axis-aligned splits, achieving O(log n) average query time in low dimensions. Ball trees use hyper-spheres and work better in moderate dimensions. Both degrade to O(n) in very high dimensions. Approximate methods like locality-sensitive hashing handle higher dimensions.",
    explanationChinese: "KD树使用轴对齐分裂划分特征空间，在低维中达到O(log n)的平均查询时间。球树使用超球体，在中等维度下工作更好。两者在非常高的维度中退化为O(n)。局部敏感哈希等近似方法处理更高维度。",
    diagram: "",
    terms: ["k_nearest_neighbors", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 124,
    q: "How does KNN handle regression problems?",
    qChinese: "KNN如何处理回归问题？",
    options: [
      "A) It cannot do regression",
      "B) It builds a decision tree on the neighbors",
      "C) It uses a loss function to optimize weights",
      "D) It predicts the average (or weighted average) of the K nearest neighbors' target values",
    ],
    optionsChinese: [
      "A) 它不能做回归",
      "B) 它在邻居上构建决策树",
      "C) 它使用损失函数优化权重",
      "D) 它预测K个最近邻目标值的平均值（或加权平均值）",
    ],
    answer: 3,
    explanation: "For regression, KNN averages the target values of the K nearest neighbors. Weighted KNN uses inverse-distance weighting for a smoother prediction. Like classification KNN, it requires feature scaling and suffers from the curse of dimensionality. The prediction function is piecewise constant with uniform weights.",
    explanationChinese: "对于回归，KNN对K个最近邻的目标值取平均。加权KNN使用逆距离加权获得更平滑的预测。与分类KNN一样，它需要特征缩放并受维度灾难影响。使用均匀权重时预测函数是分段常数。",
    diagram: "",
    terms: ["k_nearest_neighbors", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 125,
    q: "Why should K typically be odd for binary classification in KNN?",
    qChinese: "为什么在二分类KNN中K通常应该是奇数？",
    options: [
      "A) Odd K is computationally faster",
      "B) Odd K avoids ties in majority voting between two classes",
      "C) Even K always produces better accuracy",
      "D) K must always be odd"
    ],
    optionsChinese: [
      "A) 奇数K计算更快",
      "B) 奇数K避免两个类之间多数投票的平票",
      "C) 偶数K总是产生更好的准确率",
      "D) K必须总是奇数"
    ],
    answer: 1,
    explanation: "With binary classification and even K, you can get K/2 votes for each class (a tie). Odd K guarantees a majority winner. For multi-class problems, ties can still occur with odd K. Tie-breaking strategies include using the class of the nearest neighbor or randomly selecting among tied classes.",
    explanationChinese: "在二分类中使用偶数K，可能每个类得到K/2票（平票）。奇数K保证有多数获胜者。对于多类问题，奇数K仍可能出现平票。平票处理策略包括使用最近邻居的类或在平票类中随机选择。",
    diagram: "",
    terms: ["k_nearest_neighbors", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 126,
    q: "What is the time complexity of a brute-force KNN prediction for a single query?",
    qChinese: "暴力KNN对单个查询的预测时间复杂度是什么？",
    options: [
      "A) O(1)",
      "B) O(n * p) where n is training size and p is features",
      "C) O(log n)",
      "D) O(K)"
    ],
    optionsChinese: [
      "A) O(1)",
      "B) O(n * p)，其中n是训练大小，p是特征数",
      "C) O(log n)",
      "D) O(K)"
    ],
    answer: 1,
    explanation: "Brute-force KNN computes the distance from the query to all n training points, each taking O(p) for p features, giving O(np) total. Then it selects the K smallest distances in O(n log K). For large datasets this is expensive, motivating spatial data structures like KD-trees for acceleration.",
    explanationChinese: "暴力KNN计算查询到所有n个训练点的距离，每个需要O(p)对p个特征，总计O(np)。然后在O(n log K)中选择K个最小距离。对大数据集这很昂贵，促使使用KD树等空间数据结构加速。",
    diagram: "",
    terms: ["k_nearest_neighbors", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 127,
    q: "How can you handle categorical features in KNN?",
    qChinese: "如何在KNN中处理类别特征？",
    options: [
      "A) KNN cannot handle categorical features at all",
      "B) Use appropriate distance metrics like Hamming distance or encode them numerically",
      "C) Remove all categorical features",
      "D) Convert them to binary with threshold 0.5"
    ],
    optionsChinese: [
      "A) KNN完全不能处理类别特征",
      "B) 使用适当的距离度量如汉明距离或数值编码",
      "C) 移除所有类别特征",
      "D) 用阈值0.5转换为二进制"
    ],
    answer: 1,
    explanation: "Categorical features need special treatment in KNN. Options include: one-hot encoding (converting to binary indicators), using Hamming distance (counting mismatches), or using Gower distance which handles mixed types. Label encoding is problematic as it imposes arbitrary ordinal relationships on nominal categories.",
    explanationChinese: "类别特征在KNN中需要特殊处理。选项包括：独热编码（转换为二进制指示器）、使用汉明距离（计算不匹配数）、或使用Gower距离（处理混合类型）。标签编码有问题，因为它对名义类别施加任意的序数关系。",
    diagram: "",
    terms: ["k_nearest_neighbors", "feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 128,
    q: "What is the main disadvantage of KNN for large datasets?",
    qChinese: "KNN对大数据集的主要缺点是什么？",
    options: [
      "A) It cannot learn non-linear patterns",
      "B) Prediction is slow because it must compute distances to all training points",
      "C) It requires too much training time",
      "D) It only works with two classes"
    ],
    optionsChinese: [
      "A) 它不能学习非线性模式",
      "B) 预测慢因为必须计算到所有训练点的距离",
      "C) 训练时间太长",
      "D) 它只适用于两个类"
    ],
    answer: 1,
    explanation: "KNN stores all training data and computes distances at prediction time. For n training points and p features, each prediction costs O(np). This makes KNN impractical for large datasets or real-time applications. The entire dataset must be kept in memory, adding storage costs.",
    explanationChinese: "KNN存储所有训练数据并在预测时计算距离。对于n个训练点和p个特征，每次预测成本O(np)。这使KNN对大数据集或实时应用不实用。整个数据集必须保存在内存中，增加存储成本。",
    diagram: "",
    terms: ["k_nearest_neighbors", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 129,
    q: "What is the difference between Euclidean and Manhattan distance?",
    qChinese: "欧几里得距离和曼哈顿距离有什么区别？",
    options: [
      "A) Euclidean uses L2 norm (straight line); Manhattan uses L1 norm (axis-aligned path)",
      "B) They always give the same result",
      "C) Manhattan is always larger",
      "D) Euclidean only works in 2D"
    ],
    optionsChinese: [
      "A) 欧几里得使用L2范数（直线）；曼哈顿使用L1范数（轴对齐路径）",
      "B) 它们总是给出相同结果",
      "C) 曼哈顿总是更大",
      "D) 欧几里得只在2D中工作"
    ],
    answer: 0,
    explanation: "Euclidean distance is sqrt(sum((x_i-y_i)^2)) - the straight-line distance. Manhattan distance is sum(|x_i-y_i|) - the sum of absolute differences along each axis. Manhattan is more robust to outliers in individual features and is preferred in high-dimensional spaces where Euclidean distance concentrates.",
    explanationChinese: "欧几里得距离是sqrt(sum((x_i-y_i)^2))——直线距离。曼哈顿距离是sum(|x_i-y_i|)——沿每个轴的绝对差之和。曼哈顿对单个特征中的异常值更稳健，在欧几里得距离集中的高维空间中更受青睐。",
    diagram: "",
    terms: ["k_nearest_neighbors", "feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 130,
    q: "What is the Minkowski distance and how does it generalize Euclidean and Manhattan?",
    qChinese: "闵可夫斯基距离是什么，它如何推广欧几里得和曼哈顿距离？",
    options: [
      "A) It is unrelated to both",
      "B) d(x,y) = (sum(|x_i-y_i|^p))^(1/p); p=1 is Manhattan, p=2 is Euclidean",
      "C) It only works for binary features",
      "D) It is always equal to Euclidean distance"
    ],
    optionsChinese: [
      "A) 它与两者无关",
      "B) d(x,y) = (sum(|x_i-y_i|^p))^(1/p)；p=1是曼哈顿，p=2是欧几里得",
      "C) 它只适用于二进制特征",
      "D) 它总是等于欧几里得距离"
    ],
    answer: 1,
    explanation: "Minkowski distance generalizes both metrics with parameter p. When p=1, it is Manhattan distance; p=2 gives Euclidean distance; as p approaches infinity, it becomes Chebyshev distance (maximum absolute difference). The choice of p affects which features dominate the distance computation in KNN.",
    explanationChinese: "闵可夫斯基距离用参数p推广两种度量。p=1时是曼哈顿距离；p=2给出欧几里得距离；当p趋近无穷时变成切比雪夫距离（最大绝对差）。p的选择影响KNN中哪些特征主导距离计算。",
    diagram: "",
    terms: ["k_nearest_neighbors", "feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 131,
    q: "How does KNN perform in the presence of noisy data?",
    qChinese: "KNN在噪声数据存在时表现如何？",
    options: [
      "A) Small K makes KNN very sensitive to noise; larger K smooths out noise effects",
      "B) Noise has no effect on KNN",
      "C) KNN is always robust to noise",
      "D) Noise only affects training time"
    ],
    optionsChinese: [
      "A) 小K使KNN对噪声非常敏感；较大K平滑噪声效果",
      "B) 噪声对KNN没有影响",
      "C) KNN总是对噪声稳健",
      "D) 噪声只影响训练时间"
    ],
    answer: 0,
    explanation: "With K=1, a single noisy neighbor can cause misclassification. Increasing K averages over more neighbors, reducing the impact of individual noisy points. However, too large K can smooth out genuine local patterns. Distance-weighted KNN also helps by giving less weight to distant (potentially noisy) neighbors.",
    explanationChinese: "K=1时，单个噪声邻居可以导致误分类。增大K在更多邻居上取平均，减少单个噪声点的影响。但K太大可能平滑掉真正的局部模式。距离加权KNN也有帮助，给予较远（可能有噪声的）邻居更少权重。",
    diagram: "",
    terms: ["k_nearest_neighbors", "bias_variance_tradeoff"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 132,
    q: "What is the condensed nearest neighbor (CNN) method?",
    qChinese: "浓缩近邻（CNN）方法是什么？",
    options: [
      "A) A method to reduce the stored training set by keeping only necessary boundary points",
      "B) A deep learning architecture",
      "C) A method to increase K",
      "D) A feature selection technique"
    ],
    optionsChinese: [
      "A) 通过仅保留必要的边界点来减少存储训练集的方法",
      "B) 一种深度学习架构",
      "C) 增加K的方法",
      "D) 特征选择技术"
    ],
    answer: 0,
    explanation: "Condensed Nearest Neighbor removes redundant training points that do not affect the decision boundary, keeping only those near class boundaries. This reduces storage and speeds up prediction without significantly hurting accuracy. It is a prototype selection method for making KNN more practical for large datasets.",
    explanationChinese: "浓缩近邻移除不影响决策边界的冗余训练点，仅保留类边界附近的点。这减少存储并加速预测而不显著损害准确率。它是一种原型选择方法，使KNN对大数据集更实用。",
    diagram: "",
    terms: ["k_nearest_neighbors", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 133,
    q: "How does KNN differ from K-Means clustering?",
    qChinese: "KNN与K-Means聚类有什么不同？",
    options: [
      "A) They are the same algorithm",
      "B) KNN creates K clusters",
      "C) K-Means requires labeled data",
      "D) KNN is supervised classification using K neighbors; K-Means is unsupervised clustering using K centroids",
    ],
    optionsChinese: [
      "A) 它们是相同的算法",
      "B) KNN创建K个聚类",
      "C) K-Means需要标记数据",
      "D) KNN是使用K个邻居的监督分类；K-Means是使用K个质心的无监督聚类",
    ],
    answer: 3,
    explanation: "Despite both using K, they are fundamentally different. KNN is a supervised method that classifies based on the K nearest labeled neighbors. K-Means is unsupervised, partitioning data into K clusters by iteratively updating centroids. KNN's K refers to neighbors; K-Means' K refers to cluster count.",
    explanationChinese: "尽管都使用K，它们根本不同。KNN是基于K个最近标记邻居进行分类的监督方法。K-Means是无监督的，通过迭代更新质心将数据划分为K个聚类。KNN的K指邻居；K-Means的K指聚类数。",
    diagram: "",
    terms: ["k_nearest_neighbors", "k_means_clustering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 134,
    q: "What is the effect of irrelevant features on KNN?",
    qChinese: "不相关特征对KNN有什么影响？",
    options: [
      "A) No effect on performance",
      "B) They only affect training speed",
      "C) They improve accuracy by adding information",
      "D) They add noise to distance calculations, degrading neighbor quality and accuracy",
    ],
    optionsChinese: [
      "A) 对性能没有影响",
      "B) 它们只影响训练速度",
      "C) 它们通过添加信息提高准确率",
      "D) 它们给距离计算添加噪声，降低邻居质量和准确率",
    ],
    answer: 3,
    explanation: "Irrelevant features contribute random noise to distance calculations, making truly similar points appear far apart and vice versa. This is especially damaging in high dimensions (curse of dimensionality). Feature selection or dimensionality reduction (PCA) before KNN can significantly improve performance.",
    explanationChinese: "不相关特征给距离计算贡献随机噪声，使真正相似的点看起来很远，反之亦然。这在高维中尤其有害（维度灾难）。在KNN之前进行特征选择或降维（PCA）可以显著改善性能。",
    diagram: "",
    terms: ["k_nearest_neighbors", "feature_engineering", "principal_component_analysis"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 135,
    q: "When is KNN a good choice compared to parametric models?",
    qChinese: "与参数模型相比，什么时候KNN是好的选择？",
    options: [
      "A) Always",
      "B) When the data is perfectly linear",
      "C) When the decision boundary is highly irregular and the dataset is small to moderate in size",
      "D) When real-time prediction is needed on big data"
    ],
    optionsChinese: [
      "A) 总是",
      "B) 当数据完全线性时",
      "C) 当决策边界高度不规则且数据集大小中小时",
      "D) 当大数据需要实时预测时"
    ],
    answer: 2,
    explanation: "KNN excels when decision boundaries are complex and non-parametric, the dataset is not too large, and there are relatively few features. It requires no training and makes no distributional assumptions. However, it struggles with high dimensions, large datasets, and real-time requirements due to expensive prediction.",
    explanationChinese: "当决策边界复杂且非参数时、数据集不太大、特征相对较少时，KNN表现出色。它不需要训练也不做分布假设。但由于昂贵的预测，它在高维、大数据集和实时要求下表现不佳。",
    diagram: "",
    terms: ["k_nearest_neighbors", "supervised_learning", "bias_variance_tradeoff"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 136,
    q: "What is the K-Means clustering algorithm?",
    qChinese: "K-Means聚类算法是什么？",
    options: [
      "A) A supervised classification method",
      "B) An iterative algorithm that partitions data into K clusters by minimizing within-cluster variance",
      "C) A dimensionality reduction technique",
      "D) A regression method"
    ],
    optionsChinese: [
      "A) 监督分类方法",
      "B) 通过最小化簇内方差将数据划分为K个聚类的迭代算法",
      "C) 降维技术",
      "D) 回归方法"
    ],
    answer: 1,
    explanation: "K-Means alternates between assigning each point to its nearest centroid and updating centroids as the mean of assigned points. It minimizes the sum of squared distances from points to their cluster centers (inertia). The algorithm converges but may find local optima, so multiple random initializations are used.",
    explanationChinese: "K-Means在将每个点分配到最近质心和将质心更新为分配点的均值之间交替。它最小化点到聚类中心的距离平方和（惯性）。算法会收敛但可能找到局部最优，因此使用多次随机初始化。",
    diagram: "",
    terms: ["k_means_clustering", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 137,
    q: "What is the elbow method for choosing K in K-Means?",
    qChinese: "K-Means中选择K的肘部法则是什么？",
    options: [
      "A) Plotting inertia vs K and selecting K at the bend where improvement diminishes sharply",
      "B) Choosing K = n/2",
      "C) Using cross-validation scores",
      "D) Setting K equal to the number of features"
    ],
    optionsChinese: [
      "A) 绘制惯性vs K并在改善急剧减少的弯曲处选择K",
      "B) 选择K = n/2",
      "C) 使用交叉验证分数",
      "D) 将K设置为特征数量"
    ],
    answer: 0,
    explanation: "The elbow method plots the sum of squared distances (inertia) against the number of clusters K. Inertia always decreases with K, but the rate of decrease often drops sharply at some K, forming an elbow. That K represents a good balance between model complexity and cluster compactness.",
    explanationChinese: "肘部法则将距离平方和（惯性）对聚类数K作图。惯性总是随K减少，但减少速率通常在某个K处急剧下降，形成肘部。该K代表模型复杂度和聚类紧凑度之间的良好平衡。",
    diagram: "",
    terms: ["k_means_clustering", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 138,
    q: "What is the silhouette score used for in clustering?",
    qChinese: "轮廓系数在聚类中用于什么？",
    options: [
      "A) Measuring training accuracy",
      "B) Counting the number of clusters",
      "C) Measuring how similar a point is to its own cluster versus neighboring clusters",
      "D) Computing feature importance"
    ],
    optionsChinese: [
      "A) 测量训练准确率",
      "B) 计算聚类数量",
      "C) 衡量一个点与自己聚类的相似度与相邻聚类的对比",
      "D) 计算特征重要性"
    ],
    answer: 2,
    explanation: "The silhouette score for a point s = (b-a)/max(a,b), where a is the mean distance to same-cluster points and b is the mean distance to the nearest other cluster. Values range from -1 to 1; higher is better. Averaging across all points gives an overall clustering quality measure useful for selecting K.",
    explanationChinese: "点的轮廓系数s = (b-a)/max(a,b)，其中a是到同聚类点的平均距离，b是到最近其他聚类的平均距离。值范围从-1到1；越高越好。对所有点取平均给出整体聚类质量度量，对选择K有用。",
    diagram: "",
    terms: ["k_means_clustering", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 139,
    q: "Why is K-Means sensitive to initialization?",
    qChinese: "为什么K-Means对初始化敏感？",
    options: [
      "A) It can converge to different local optima depending on initial centroid positions",
      "B) It uses a convex objective function",
      "C) Initialization has no effect",
      "D) It always finds the global optimum"
    ],
    optionsChinese: [
      "A) 它可以根据初始质心位置收敛到不同的局部最优",
      "B) 它使用凸目标函数",
      "C) 初始化没有影响",
      "D) 它总是找到全局最优"
    ],
    answer: 0,
    explanation: "K-Means objective is non-convex, so the greedy algorithm converges to local optima that depend on starting centroids. Poor initialization can lead to empty clusters or suboptimal partitions. K-Means++ initialization spreads initial centroids apart, significantly improving results. Running multiple initializations helps further.",
    explanationChinese: "K-Means目标是非凸的，因此贪心算法收敛到取决于起始质心的局部最优。不良初始化可导致空聚类或次优划分。K-Means++初始化将初始质心分散开，显著改善结果。运行多次初始化进一步帮助。",
    diagram: "",
    terms: ["k_means_clustering", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 140,
    q: "What is K-Means++ initialization?",
    qChinese: "K-Means++初始化是什么？",
    options: [
      "A) Randomly choosing all centroids at once",
      "B) Using the first K data points as centroids",
      "C) Setting all centroids to the mean of the data",
      "D) Choosing centroids sequentially where each new centroid is far from existing ones",
    ],
    optionsChinese: [
      "A) 一次随机选择所有质心",
      "B) 使用前K个数据点作为质心",
      "C) 将所有质心设置为数据均值",
      "D) 顺序选择质心，每个新质心远离现有质心",
    ],
    answer: 3,
    explanation: "K-Means++ selects the first centroid randomly, then each subsequent centroid is chosen with probability proportional to D(x)^2 (squared distance to nearest existing centroid). This spreads centroids apart, leading to better initial partitions. It provides O(log K) approximation guarantees and is scikit-learn's default.",
    explanationChinese: "K-Means++随机选择第一个质心，然后每个后续质心以与D(x)^2（到最近现有质心的距离平方）成比例的概率选择。这将质心分散开，产生更好的初始划分。它提供O(log K)近似保证，是scikit-learn的默认值。",
    diagram: "",
    terms: ["k_means_clustering", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 141,
    q: "What are the limitations of K-Means clustering?",
    qChinese: "K-Means聚类的局限性是什么？",
    options: [
      "A) It works perfectly for all data shapes",
      "B) It assumes spherical clusters of similar size and struggles with non-convex shapes",
      "C) It requires labeled data",
      "D) It cannot handle numerical features"
    ],
    optionsChinese: [
      "A) 它对所有数据形状完美工作",
      "B) 它假设大小相似的球形聚类，难以处理非凸形状",
      "C) 它需要标记数据",
      "D) 它不能处理数值特征"
    ],
    answer: 1,
    explanation: "K-Means assumes clusters are spherical (uses Euclidean distance), roughly equal in size, and separated. It fails with elongated, ring-shaped, or differently sized clusters. It requires specifying K in advance and is sensitive to outliers since they pull centroids away from the true cluster centers.",
    explanationChinese: "K-Means假设聚类是球形的（使用欧几里得距离）、大小大致相等且分离。它在细长、环形或大小不同的聚类上失败。它需要预先指定K并对异常值敏感，因为异常值会将质心拉离真正的聚类中心。",
    diagram: "",
    terms: ["k_means_clustering", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 142,
    q: "What is DBSCAN and how does it differ from K-Means?",
    qChinese: "DBSCAN是什么，它与K-Means有什么不同？",
    options: [
      "A) DBSCAN is another name for K-Means",
      "B) DBSCAN requires labeled data",
      "C) DBSCAN always produces spherical clusters",
      "D) DBSCAN is density-based, finds arbitrary-shaped clusters, and does not require specifying K",
    ],
    optionsChinese: [
      "A) DBSCAN是K-Means的另一个名称",
      "B) DBSCAN需要标记数据",
      "C) DBSCAN总是产生球形聚类",
      "D) DBSCAN是基于密度的，找到任意形状的聚类，不需要指定K",
    ],
    answer: 3,
    explanation: "DBSCAN (Density-Based Spatial Clustering of Applications with Noise) groups points that are closely packed together (high density) and marks low-density points as noise/outliers. It requires two parameters: epsilon (neighborhood radius) and min_points (minimum neighbors to form a core point). It automatically determines cluster count.",
    explanationChinese: "DBSCAN（基于密度的噪声应用空间聚类）将紧密打包在一起的点（高密度）分组，将低密度点标记为噪声/异常值。它需要两个参数：epsilon（邻域半径）和min_points（形成核心点的最小邻居数）。它自动确定聚类数量。",
    diagram: "",
    terms: ["k_means_clustering", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 143,
    q: "What are core points, border points, and noise points in DBSCAN?",
    qChinese: "DBSCAN中的核心点、边界点和噪声点是什么？",
    options: [
      "A) All points are treated equally",
      "B) Core points have >= min_points neighbors within epsilon; border points are near core points; noise points are isolated",
      "C) Core points are cluster centers; others are ignored",
      "D) These terms apply to K-Means only"
    ],
    optionsChinese: [
      "A) 所有点被同等对待",
      "B) 核心点在epsilon内有>=min_points个邻居；边界点靠近核心点；噪声点是孤立的",
      "C) 核心点是聚类中心；其他被忽略",
      "D) 这些术语仅适用于K-Means"
    ],
    answer: 1,
    explanation: "Core points have at least min_points neighbors within distance epsilon, forming dense regions. Border points are within epsilon of a core point but have fewer than min_points neighbors. Noise points are neither core nor border. DBSCAN connects core points to form clusters and assigns border points to nearby clusters.",
    explanationChinese: "核心点在距离epsilon内至少有min_points个邻居，形成密集区域。边界点在核心点的epsilon内但邻居少于min_points。噪声点既不是核心也不是边界。DBSCAN连接核心点形成聚类并将边界点分配给附近的聚类。",
    diagram: "",
    terms: ["k_means_clustering", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 144,
    q: "What is hierarchical clustering?",
    qChinese: "层次聚类是什么？",
    options: [
      "A) A method building a tree (dendrogram) of nested clusters by merging or splitting",
      "B) A method that requires specifying K in advance",
      "C) A deep learning approach to clustering",
      "D) Same as K-Means"
    ],
    optionsChinese: [
      "A) 通过合并或分裂构建嵌套聚类树（树状图）的方法",
      "B) 需要预先指定K的方法",
      "C) 聚类的深度学习方法",
      "D) 与K-Means相同"
    ],
    answer: 0,
    explanation: "Hierarchical clustering creates a dendrogram showing how clusters merge (agglomerative, bottom-up) or split (divisive, top-down). Agglomerative starts with each point as a cluster and merges the closest pair iteratively. The dendrogram can be cut at any level to obtain different numbers of clusters without rerunning.",
    explanationChinese: "层次聚类创建显示聚类如何合并（凝聚，自底向上）或分裂（分裂，自顶向下）的树状图。凝聚从每个点作为一个聚类开始，迭代合并最近的对。树状图可以在任何级别切割以获得不同数量的聚类而无需重新运行。",
    diagram: "",
    terms: ["k_means_clustering", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 145,
    q: "What are common linkage criteria in agglomerative hierarchical clustering?",
    qChinese: "凝聚层次聚类中常见的链接标准是什么？",
    options: [
      "A) Only single linkage exists",
      "B) Linkage criteria are only for K-Means",
      "C) Only Ward's method is used",
      "D) Single (minimum distance), complete (maximum distance), average, and Ward's method",
    ],
    optionsChinese: [
      "A) 只有单链接",
      "B) 链接标准仅适用于K-Means",
      "C) 只使用Ward方法",
      "D) 单链接（最小距离）、完全链接（最大距离）、平均和Ward方法",
    ],
    answer: 3,
    explanation: "Single linkage uses the minimum distance between clusters (can create elongated chains). Complete linkage uses the maximum distance (creates compact clusters). Average linkage uses mean pairwise distance. Ward's method minimizes variance increase from merging (tends to create equal-sized, spherical clusters).",
    explanationChinese: "单链接使用聚类间最小距离（可能创建细长链）。完全链接使用最大距离（创建紧凑聚类）。平均链接使用平均成对距离。Ward方法最小化合并导致的方差增加（倾向于创建大小相等的球形聚类）。",
    diagram: "",
    terms: ["k_means_clustering", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 146,
    q: "What is the time complexity of K-Means clustering?",
    qChinese: "K-Means聚类的时间复杂度是什么？",
    options: [
      "A) O(n^3)",
      "B) O(n log n)",
      "C) O(n * K * p * I) where I is iterations",
      "D) O(2^n)"
    ],
    optionsChinese: [
      "A) O(n^3)",
      "B) O(n log n)",
      "C) O(n * K * p * I)，其中I是迭代次数",
      "D) O(2^n)"
    ],
    answer: 2,
    explanation: "Each iteration assigns n points to K clusters (O(nKp) distance computations) and updates K centroids (O(np)). With I iterations total, the complexity is O(nKpI). K-Means is efficient and scales well to large datasets. It typically converges in few iterations, making it one of the fastest clustering algorithms.",
    explanationChinese: "每次迭代将n个点分配到K个聚类（O(nKp)距离计算）并更新K个质心（O(np)）。总共I次迭代，复杂度为O(nKpI)。K-Means高效且对大数据集扩展性好。它通常在几次迭代内收敛，是最快的聚类算法之一。",
    diagram: "",
    terms: ["k_means_clustering", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 147,
    q: "How does K-Means handle outliers?",
    qChinese: "K-Means如何处理异常值？",
    options: [
      "A) It automatically detects and removes outliers",
      "B) Outliers have no effect on K-Means",
      "C) Outliers pull centroids toward them, distorting cluster centers and assignments",
      "D) K-Means assigns outliers to a special noise cluster"
    ],
    optionsChinese: [
      "A) 它自动检测和移除异常值",
      "B) 异常值对K-Means没有影响",
      "C) 异常值将质心拉向它们，扭曲聚类中心和分配",
      "D) K-Means将异常值分配到特殊噪声聚类"
    ],
    answer: 2,
    explanation: "K-Means uses the mean (sensitive to outliers) as the centroid. A single distant outlier can significantly shift a centroid. K-Medoids (PAM) uses actual data points as centers and is more robust. Alternatively, preprocessing to remove outliers or using DBSCAN which labels outliers as noise can help.",
    explanationChinese: "K-Means使用均值（对异常值敏感）作为质心。单个远处异常值可以显著移动质心。K-Medoids（PAM）使用实际数据点作为中心，更稳健。或者，预处理移除异常值或使用将异常值标记为噪声的DBSCAN可以帮助。",
    diagram: "",
    terms: ["k_means_clustering", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 148,
    q: "What is the Gaussian Mixture Model (GMM) and how does it relate to K-Means?",
    qChinese: "高斯混合模型（GMM）是什么，它与K-Means有什么关系？",
    options: [
      "A) GMM is identical to K-Means",
      "B) GMM requires fewer parameters than K-Means",
      "C) GMM cannot do clustering",
      "D) GMM is a probabilistic generalization that assigns soft cluster memberships using Gaussian distributions",
    ],
    optionsChinese: [
      "A) GMM与K-Means相同",
      "B) GMM需要比K-Means更少的参数",
      "C) GMM不能做聚类",
      "D) GMM是使用高斯分布分配软聚类成员的概率推广",
    ],
    answer: 3,
    explanation: "GMM models data as a mixture of K Gaussian distributions, each with its own mean, covariance, and mixing weight. Unlike K-Means' hard assignment, GMM gives each point a probability of belonging to each cluster (soft assignment). K-Means is equivalent to GMM with identity covariances and hard assignment.",
    explanationChinese: "GMM将数据建模为K个高斯分布的混合，每个有自己的均值、协方差和混合权重。与K-Means的硬分配不同，GMM给每个点属于每个聚类的概率（软分配）。K-Means等价于具有单位协方差和硬分配的GMM。",
    diagram: "",
    terms: ["k_means_clustering", "unsupervised_learning", "naive_bayes"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 149,
    q: "What is the advantage of DBSCAN over K-Means for clustering spatial data?",
    qChinese: "对于聚类空间数据，DBSCAN相比K-Means有什么优势？",
    options: [
      "A) DBSCAN discovers clusters of arbitrary shape and automatically identifies outliers",
      "B) DBSCAN is always faster",
      "C) DBSCAN always produces better clusters",
      "D) DBSCAN requires no parameters"
    ],
    optionsChinese: [
      "A) DBSCAN发现任意形状的聚类并自动识别异常值",
      "B) DBSCAN总是更快",
      "C) DBSCAN总是产生更好的聚类",
      "D) DBSCAN不需要参数"
    ],
    answer: 0,
    explanation: "DBSCAN finds density-connected clusters regardless of shape, handling rings, crescents, and irregular forms that K-Means cannot. It automatically determines the number of clusters and labels low-density points as noise. However, it struggles with clusters of varying density and requires careful tuning of epsilon and min_points.",
    explanationChinese: "DBSCAN找到密度连接的聚类，无论形状如何，处理K-Means无法处理的环形、新月形和不规则形状。它自动确定聚类数量并将低密度点标记为噪声。但它在密度不同的聚类上表现不佳，需要仔细调整epsilon和min_points。",
    diagram: "",
    terms: ["k_means_clustering", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 150,
    q: "What is the Mini-Batch K-Means algorithm?",
    qChinese: "小批量K-Means算法是什么？",
    options: [
      "A) K-Means with K=1",
      "B) A variant that uses random subsets of data per iteration for faster convergence on large datasets",
      "C) K-Means applied only to small datasets",
      "D) A method that uses batches of features"
    ],
    optionsChinese: [
      "A) K=1的K-Means",
      "B) 每次迭代使用随机数据子集以在大数据集上更快收敛的变体",
      "C) 仅应用于小数据集的K-Means",
      "D) 使用特征批次的方法"
    ],
    answer: 1,
    explanation: "Mini-Batch K-Means samples a random mini-batch of data per iteration instead of using all n points. This dramatically reduces computation while producing results very close to standard K-Means. It is the go-to choice for large-scale clustering where standard K-Means would be too slow.",
    explanationChinese: "小批量K-Means每次迭代采样随机小批量数据而非使用所有n个点。这大幅减少计算同时产生非常接近标准K-Means的结果。它是大规模聚类的首选，标准K-Means太慢时使用。",
    diagram: "",
    terms: ["k_means_clustering", "unsupervised_learning", "gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 151,
    q: "What is the dendrogram in hierarchical clustering?",
    qChinese: "层次聚类中的树状图是什么？",
    options: [
      "A) A scatter plot of clusters",
      "B) A bar chart of cluster sizes",
      "C) A tree diagram showing the sequence of cluster merges and the distances at which they occur",
      "D) A line plot of inertia"
    ],
    optionsChinese: [
      "A) 聚类的散点图",
      "B) 聚类大小的柱状图",
      "C) 显示聚类合并顺序及其发生距离的树形图",
      "D) 惯性的线图"
    ],
    answer: 2,
    explanation: "A dendrogram is a tree visualization where leaves represent individual data points, and branches show merging. The height of each merge represents the distance between merged clusters. Cutting the dendrogram horizontally at different heights yields different numbers of clusters, providing flexible cluster selection.",
    explanationChinese: "树状图是叶子代表单个数据点、分支显示合并的树形可视化。每次合并的高度代表合并聚类之间的距离。在不同高度水平切割树状图产生不同数量的聚类，提供灵活的聚类选择。",
    diagram: "",
    terms: ["k_means_clustering", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 152,
    q: "What is the time complexity of agglomerative hierarchical clustering?",
    qChinese: "凝聚层次聚类的时间复杂度是什么？",
    options: [
      "A) O(n^3) in general, O(n^2 log n) with efficient implementations",
      "B) O(n log n)",
      "C) O(n)",
      "D) O(n * K)"
    ],
    optionsChinese: [
      "A) 一般为O(n^3)，高效实现为O(n^2 log n)",
      "B) O(n log n)",
      "C) O(n)",
      "D) O(n * K)"
    ],
    answer: 0,
    explanation: "Agglomerative clustering requires computing the n x n distance matrix (O(n^2)) and performing n-1 merge operations. Naive implementation is O(n^3). Using priority queues, single and complete linkage can be done in O(n^2 log n). This makes hierarchical clustering impractical for very large datasets compared to K-Means.",
    explanationChinese: "凝聚聚类需要计算n x n距离矩阵（O(n^2)）并执行n-1次合并操作。朴素实现为O(n^3)。使用优先队列，单链接和完全链接可以在O(n^2 log n)内完成。这使层次聚类对非常大的数据集不如K-Means实用。",
    diagram: "",
    terms: ["k_means_clustering", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 153,
    q: "What is the difference between internal and external clustering evaluation metrics?",
    qChinese: "聚类评估的内部和外部指标有什么区别？",
    options: [
      "A) They are the same",
      "B) Internal requires labels; external does not",
      "C) Internal uses only the data (silhouette); external uses ground truth labels (ARI, NMI)",
      "D) External metrics are always better"
    ],
    optionsChinese: [
      "A) 它们相同",
      "B) 内部需要标签；外部不需要",
      "C) 内部仅使用数据（轮廓系数）；外部使用真实标签（ARI、NMI）",
      "D) 外部指标总是更好"
    ],
    answer: 2,
    explanation: "Internal metrics (silhouette score, Calinski-Harabasz, Davies-Bouldin) evaluate clustering quality using only the data, measuring compactness and separation. External metrics (Adjusted Rand Index, Normalized Mutual Information) compare clusters to known ground truth labels. Internal metrics are used when labels are unavailable.",
    explanationChinese: "内部指标（轮廓系数、Calinski-Harabasz、Davies-Bouldin）仅使用数据评估聚类质量，衡量紧凑度和分离度。外部指标（调整兰德指数、归一化互信息）将聚类与已知真实标签比较。当标签不可用时使用内部指标。",
    diagram: "",
    terms: ["k_means_clustering", "unsupervised_learning", "cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 154,
    q: "What is spectral clustering?",
    qChinese: "谱聚类是什么？",
    options: [
      "A) K-Means with more iterations",
      "B) A supervised clustering method",
      "C) Clustering using eigenvalues of a similarity graph's Laplacian matrix",
      "D) Clustering based on feature variance"
    ],
    optionsChinese: [
      "A) 更多迭代的K-Means",
      "B) 监督聚类方法",
      "C) 使用相似图的拉普拉斯矩阵的特征值进行聚类",
      "D) 基于特征方差的聚类"
    ],
    answer: 2,
    explanation: "Spectral clustering constructs a similarity graph from data, computes the Laplacian matrix, extracts its top eigenvectors, then applies K-Means to the eigenvector representations. This captures non-linear cluster structures that K-Means misses, effectively performing dimensionality reduction before clustering.",
    explanationChinese: "谱聚类从数据构建相似图，计算拉普拉斯矩阵，提取其顶部特征向量，然后对特征向量表示应用K-Means。这捕获K-Means遗漏的非线性聚类结构，有效地在聚类前进行降维。",
    diagram: "",
    terms: ["k_means_clustering", "unsupervised_learning", "principal_component_analysis"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 155,
    q: "When does K-Means converge?",
    qChinese: "K-Means什么时候收敛？",
    options: [
      "A) When cluster assignments no longer change between iterations",
      "B) After exactly K iterations",
      "C) When all points are in one cluster",
      "D) It never converges"
    ],
    optionsChinese: [
      "A) 当聚类分配在迭代之间不再改变时",
      "B) 恰好K次迭代后",
      "C) 当所有点在一个聚类中时",
      "D) 它永远不收敛"
    ],
    answer: 0,
    explanation: "K-Means is guaranteed to converge because each step (assignment and update) reduces or maintains the objective function, and there are finitely many possible assignments. It converges when no point changes cluster. In practice, convergence is also declared when the centroid change falls below a threshold.",
    explanationChinese: "K-Means保证收敛，因为每步（分配和更新）减少或维持目标函数，且可能的分配方案有限。当没有点改变聚类时收敛。实践中，当质心变化低于阈值时也宣告收敛。",
    diagram: "",
    terms: ["k_means_clustering", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 156,
    q: "What is the Adjusted Rand Index (ARI)?",
    qChinese: "调整兰德指数（ARI）是什么？",
    options: [
      "A) An internal clustering metric",
      "B) A method to select K",
      "C) A distance metric",
      "D) An external metric measuring agreement between predicted and true cluster labels, adjusted for chance",
    ],
    optionsChinese: [
      "A) 内部聚类指标",
      "B) 选择K的方法",
      "C) 距离度量",
      "D) 衡量预测和真实聚类标签之间一致性的外部指标，针对随机进行了调整",
    ],
    answer: 3,
    explanation: "ARI measures the similarity between two clusterings, adjusted so random assignments have expected ARI of 0. ARI = 1 means perfect agreement, 0 means random. It considers all pairs of samples and checks whether they are in the same or different clusters in both clusterings. It is symmetric and handles different K values.",
    explanationChinese: "ARI衡量两个聚类之间的相似度，调整后随机分配的期望ARI为0。ARI = 1意味着完美一致，0意味着随机。它考虑所有样本对并检查它们在两个聚类中是否在相同或不同的聚类中。它是对称的并处理不同K值。",
    diagram: "",
    terms: ["k_means_clustering", "cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 157,
    q: "How does DBSCAN determine the epsilon parameter?",
    qChinese: "DBSCAN如何确定epsilon参数？",
    options: [
      "A) It is always set to 1.0",
      "B) The k-distance plot can help: plot sorted k-th nearest neighbor distances and look for an elbow",
      "C) It must equal the number of features",
      "D) It is automatically determined"
    ],
    optionsChinese: [
      "A) 它总是设为1.0",
      "B) k距离图可以帮助：绘制排序的第k近邻距离并寻找肘部",
      "C) 它必须等于特征数量",
      "D) 它是自动确定的"
    ],
    answer: 1,
    explanation: "The k-distance plot sorts points by their distance to the k-th nearest neighbor (k = min_points). The elbow in this plot suggests a good epsilon: below this distance points are in dense regions, above they are in sparse regions. This is a common heuristic, though domain knowledge also helps guide selection.",
    explanationChinese: "k距离图按到第k近邻的距离（k = min_points）排序点。此图中的肘部建议好的epsilon：低于此距离的点在密集区域，高于的在稀疏区域。这是常见启发式方法，领域知识也帮助指导选择。",
    diagram: "",
    terms: ["k_means_clustering", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 158,
    q: "What is K-Medoids (PAM) and how does it differ from K-Means?",
    qChinese: "K-Medoids（PAM）是什么，与K-Means有什么不同？",
    options: [
      "A) They are identical",
      "B) K-Medoids cannot use distance metrics",
      "C) K-Medoids is faster than K-Means",
      "D) K-Medoids uses actual data points as centers instead of means, making it more robust to outliers",
    ],
    optionsChinese: [
      "A) 它们完全相同",
      "B) K-Medoids不能使用距离度量",
      "C) K-Medoids比K-Means更快",
      "D) K-Medoids使用实际数据点作为中心而非均值，使其对异常值更稳健",
    ],
    answer: 3,
    explanation: "K-Medoids selects actual data points (medoids) as cluster representatives rather than computing means. This makes it robust to outliers since medoids are not pulled by extreme values. It can use any distance metric, not just Euclidean. However, it is more computationally expensive than K-Means at O(n^2) per iteration.",
    explanationChinese: "K-Medoids选择实际数据点（中心点）作为聚类代表而非计算均值。这使其对异常值稳健，因为中心点不被极端值拉动。它可以使用任何距离度量，不仅是欧几里得。但它每次迭代O(n^2)，比K-Means计算成本更高。",
    diagram: "",
    terms: ["k_means_clustering", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 159,
    q: "What is the Calinski-Harabasz Index?",
    qChinese: "Calinski-Harabasz指数是什么？",
    options: [
      "A) A measure of feature importance",
      "B) A supervised metric",
      "C) The ratio of between-cluster variance to within-cluster variance; higher is better",
      "D) A measure of outlier count"
    ],
    optionsChinese: [
      "A) 特征重要性的度量",
      "B) 监督指标",
      "C) 簇间方差与簇内方差的比率；越高越好",
      "D) 异常值计数的度量"
    ],
    answer: 2,
    explanation: "The Calinski-Harabasz Index (Variance Ratio Criterion) measures the ratio of between-cluster dispersion to within-cluster dispersion. Higher values indicate well-separated, compact clusters. It is an internal metric requiring no labels and is computationally efficient, making it useful for comparing different K values.",
    explanationChinese: "Calinski-Harabasz指数（方差比准则）衡量簇间离散度与簇内离散度的比率。较高值表示分离良好、紧凑的聚类。它是不需要标签的内部指标且计算高效，对比较不同K值有用。",
    diagram: "",
    terms: ["k_means_clustering", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 160,
    q: "How does K-Means handle clusters of different densities?",
    qChinese: "K-Means如何处理不同密度的聚类？",
    options: [
      "A) It struggles because it assigns points to the nearest centroid regardless of local density",
      "B) It handles them perfectly",
      "C) It automatically adjusts for density",
      "D) Density does not affect K-Means"
    ],
    optionsChinese: [
      "A) 它很困难，因为它将点分配到最近质心而不考虑局部密度",
      "B) 它完美处理",
      "C) 它自动调整密度",
      "D) 密度不影响K-Means"
    ],
    answer: 0,
    explanation: "K-Means creates Voronoi cells (equal distance boundaries) that do not account for cluster density. A dense small cluster and a sparse large cluster get equal treatment, often causing the dense cluster's points to be split across multiple clusters. DBSCAN or Gaussian Mixture Models handle varying densities better.",
    explanationChinese: "K-Means创建Voronoi单元（等距离边界），不考虑聚类密度。一个密集小聚类和一个稀疏大聚类得到同等处理，常导致密集聚类的点被分到多个聚类中。DBSCAN或高斯混合模型更好地处理不同密度。",
    diagram: "",
    terms: ["k_means_clustering", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 161,
    q: "What is Principal Component Analysis (PCA)?",
    qChinese: "主成分分析（PCA）是什么？",
    options: [
      "A) A supervised classification method",
      "B) A regularization technique",
      "C) A clustering algorithm",
      "D) An unsupervised method that finds orthogonal directions of maximum variance for dimensionality reduction",
    ],
    optionsChinese: [
      "A) 监督分类方法",
      "B) 正则化技术",
      "C) 聚类算法",
      "D) 找到最大方差正交方向进行降维的无监督方法",
    ],
    answer: 3,
    explanation: "PCA finds the directions (principal components) along which data varies most. The first PC captures the most variance, the second captures the most remaining variance orthogonal to the first, and so on. By keeping only the top k components, PCA reduces dimensionality while preserving maximum variance.",
    explanationChinese: "PCA找到数据变化最大的方向（主成分）。第一主成分捕获最多方差，第二主成分捕获与第一正交的最多剩余方差，依此类推。通过仅保留前k个成分，PCA在保留最大方差的同时降低维度。",
    diagram: "",
    terms: ["principal_component_analysis", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 162,
    q: "What mathematical operation does PCA use to find principal components?",
    qChinese: "PCA使用什么数学运算来找到主成分？",
    options: [
      "A) Matrix inversion",
      "B) Gradient descent",
      "C) Eigendecomposition of the covariance matrix (or SVD of the data matrix)",
      "D) Random projection"
    ],
    optionsChinese: [
      "A) 矩阵求逆",
      "B) 梯度下降",
      "C) 协方差矩阵的特征分解（或数据矩阵的SVD）",
      "D) 随机投影"
    ],
    answer: 2,
    explanation: "PCA computes the covariance matrix of centered data and finds its eigenvectors (principal components) and eigenvalues (variance explained). Equivalently, SVD of the data matrix X = U*S*V^T gives principal components as columns of V. Eigenvalues indicate how much variance each component captures.",
    explanationChinese: "PCA计算中心化数据的协方差矩阵并找到其特征向量（主成分）和特征值（解释的方差）。等价地，数据矩阵的SVD X = U*S*V^T给出V的列作为主成分。特征值表示每个成分捕获的方差量。",
    diagram: "",
    terms: ["principal_component_analysis", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 163,
    q: "Why should data be centered (mean-subtracted) before applying PCA?",
    qChinese: "为什么在应用PCA之前应该对数据进行中心化（减去均值）？",
    options: [
      "A) Centering is optional",
      "B) Centering reduces the number of features",
      "C) Without centering, the first component may capture the mean offset rather than variance direction",
      "D) Centering converts data to integers"
    ],
    optionsChinese: [
      "A) 中心化是可选的",
      "B) 中心化减少特征数量",
      "C) 不中心化，第一主成分可能捕获均值偏移而非方差方向",
      "D) 中心化将数据转换为整数"
    ],
    answer: 2,
    explanation: "Centering ensures PCA captures directions of maximum variance around the data center, not offset from the origin. Without centering, the first PC may simply point toward the data mean. Additionally, standardization (centering + scaling) is recommended when features have different units to prevent dominance by large-scale features.",
    explanationChinese: "中心化确保PCA捕获围绕数据中心的最大方差方向，而非偏离原点。不中心化，第一主成分可能只是指向数据均值。此外，当特征有不同单位时推荐标准化（中心化+缩放），防止大尺度特征的主导。",
    diagram: "",
    terms: ["principal_component_analysis", "feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 164,
    q: "How do you decide how many principal components to keep?",
    qChinese: "如何决定保留多少主成分？",
    options: [
      "A) Always keep exactly 2",
      "B) Choose k components that capture a target cumulative variance (e.g., 95%) or use the scree plot elbow",
      "C) Keep all components",
      "D) Use the number of original features divided by 2"
    ],
    optionsChinese: [
      "A) 总是保留恰好2个",
      "B) 选择捕获目标累积方差（如95%）的k个成分或使用碎石图肘部",
      "C) 保留所有成分",
      "D) 使用原始特征数除以2"
    ],
    answer: 1,
    explanation: "The explained variance ratio for each component shows its contribution. Cumulative explained variance is plotted against the number of components. Keeping enough components to explain 90-95% of variance is a common rule. The scree plot shows eigenvalues vs component number; the elbow suggests optimal k.",
    explanationChinese: "每个成分的解释方差比显示其贡献。累积解释方差对成分数量作图。保留足以解释90-95%方差的成分是常见规则。碎石图显示特征值vs成分数量；肘部建议最优k。",
    diagram: "",
    terms: ["principal_component_analysis", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 165,
    q: "What is the relationship between PCA and SVD (Singular Value Decomposition)?",
    qChinese: "PCA和SVD（奇异值分解）之间有什么关系？",
    options: [
      "A) They are unrelated",
      "B) SVD only works for square matrices",
      "C) PCA can be computed via SVD; the right singular vectors are the principal components",
      "D) PCA uses SVD only for visualization"
    ],
    optionsChinese: [
      "A) 它们无关",
      "B) SVD只适用于方阵",
      "C) PCA可以通过SVD计算；右奇异向量是主成分",
      "D) PCA仅用SVD进行可视化"
    ],
    answer: 2,
    explanation: "SVD decomposes the centered data matrix X = U*S*V^T. The columns of V are the principal component directions. The singular values in S relate to eigenvalues of X^T*X. SVD is numerically more stable than computing the covariance matrix explicitly and is the standard implementation for PCA in practice.",
    explanationChinese: "SVD将中心化数据矩阵分解为X = U*S*V^T。V的列是主成分方向。S中的奇异值与X^T*X的特征值相关。SVD比显式计算协方差矩阵数值更稳定，是PCA实践中的标准实现。",
    diagram: "",
    terms: ["principal_component_analysis", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 166,
    q: "What is t-SNE and how does it differ from PCA?",
    qChinese: "t-SNE是什么，它与PCA有什么不同？",
    options: [
      "A) t-SNE is a faster version of PCA",
      "B) t-SNE replaces PCA in all applications",
      "C) t-SNE is a non-linear method for visualization that preserves local structure, unlike PCA's linear approach",
      "D) t-SNE works only with labeled data"
    ],
    optionsChinese: [
      "A) t-SNE是PCA的更快版本",
      "B) t-SNE在所有应用中取代PCA",
      "C) t-SNE是保留局部结构的非线性可视化方法，不同于PCA的线性方法",
      "D) t-SNE只适用于标记数据"
    ],
    answer: 2,
    explanation: "t-SNE converts pairwise distances to probabilities and minimizes KL divergence between high-dimensional and low-dimensional probability distributions. Unlike PCA (linear, preserves global variance), t-SNE preserves local neighborhood structure and reveals clusters in 2D/3D visualizations. It is non-deterministic and mainly used for exploration.",
    explanationChinese: "t-SNE将成对距离转换为概率，最小化高维和低维概率分布之间的KL散度。不同于PCA（线性，保留全局方差），t-SNE保留局部邻域结构并在2D/3D可视化中揭示聚类。它是非确定性的，主要用于探索。",
    diagram: "",
    terms: ["principal_component_analysis", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 167,
    q: "What is the perplexity parameter in t-SNE?",
    qChinese: "t-SNE中的困惑度参数是什么？",
    options: [
      "A) The number of output dimensions",
      "B) The number of iterations",
      "C) The learning rate",
      "D) A smooth measure of effective number of neighbors; balances local vs global structure",
    ],
    optionsChinese: [
      "A) 输出维度数",
      "B) 迭代次数",
      "C) 学习率",
      "D) 有效邻居数量的平滑度量；平衡局部与全局结构",
    ],
    answer: 3,
    explanation: "Perplexity (typically 5-50) relates to the effective number of neighbors each point considers. Low perplexity focuses on very local structure, potentially creating many small disconnected groups. High perplexity considers more global structure. Results can change significantly with different perplexity values.",
    explanationChinese: "困惑度（通常5-50）关联到每个点考虑的有效邻居数。低困惑度关注非常局部的结构，可能创建许多小的断开组。高困惑度考虑更全局的结构。结果可能随不同困惑度值显著变化。",
    diagram: "",
    terms: ["principal_component_analysis", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 168,
    q: "What is Linear Discriminant Analysis (LDA) as a dimensionality reduction technique?",
    qChinese: "作为降维技术的线性判别分析（LDA）是什么？",
    options: [
      "A) An unsupervised method like PCA",
      "B) A supervised method that finds directions maximizing between-class variance relative to within-class variance",
      "C) A clustering technique",
      "D) Same as Latent Dirichlet Allocation"
    ],
    optionsChinese: [
      "A) 像PCA一样的无监督方法",
      "B) 找到最大化类间方差相对于类内方差方向的监督方法",
      "C) 聚类技术",
      "D) 与潜在狄利克雷分配相同"
    ],
    answer: 1,
    explanation: "LDA uses class labels to find projections that maximize the ratio of between-class scatter to within-class scatter. Unlike PCA which maximizes total variance, LDA maximizes class separability. For K classes, LDA can produce at most K-1 discriminant components, making it useful as both classification and dimensionality reduction.",
    explanationChinese: "LDA使用类标签找到最大化类间散布与类内散布比率的投影。不同于最大化总方差的PCA，LDA最大化类可分性。对于K个类，LDA最多产生K-1个判别成分，使其同时用于分类和降维。",
    diagram: "",
    terms: ["principal_component_analysis", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 169,
    q: "What is the key difference between PCA and LDA?",
    qChinese: "PCA和LDA之间的关键区别是什么？",
    options: [
      "A) PCA is unsupervised (maximizes variance); LDA is supervised (maximizes class separation)",
      "B) They are the same algorithm",
      "C) LDA cannot reduce dimensionality",
      "D) PCA requires class labels"
    ],
    optionsChinese: [
      "A) PCA是无监督的（最大化方差）；LDA是监督的（最大化类分离）",
      "B) 它们是相同的算法",
      "C) LDA不能降维",
      "D) PCA需要类标签"
    ],
    answer: 0,
    explanation: "PCA finds directions of maximum variance without using labels. LDA uses class labels to find directions that best discriminate between classes. PCA may not align with class boundaries; LDA specifically optimizes for them. LDA is limited to K-1 components for K classes; PCA has no such limit.",
    explanationChinese: "PCA找到最大方差的方向而不使用标签。LDA使用类标签找到最佳区分类别的方向。PCA可能不与类边界对齐；LDA专门为此优化。LDA对K个类限制为K-1个成分；PCA没有此限制。",
    diagram: "",
    terms: ["principal_component_analysis", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 170,
    q: "What are eigenvalues in PCA and what do they represent?",
    qChinese: "PCA中的特征值是什么，它们代表什么？",
    options: [
      "A) The amount of variance captured by each principal component",
      "B) The number of features",
      "C) The coordinates of data points",
      "D) The weight of each feature"
    ],
    optionsChinese: [
      "A) 每个主成分捕获的方差量",
      "B) 特征数量",
      "C) 数据点的坐标",
      "D) 每个特征的权重"
    ],
    answer: 0,
    explanation: "Eigenvalues of the covariance matrix represent the variance explained by each principal component. The ratio of an eigenvalue to the sum of all eigenvalues gives the proportion of total variance explained. Components are ordered by decreasing eigenvalue, so the first few capture the most information.",
    explanationChinese: "协方差矩阵的特征值代表每个主成分解释的方差。一个特征值与所有特征值之和的比率给出解释的总方差比例。成分按特征值递减排序，因此前几个捕获最多信息。",
    diagram: "",
    terms: ["principal_component_analysis", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 171,
    q: "Can PCA be used for noise reduction?",
    qChinese: "PCA可以用于降噪吗？",
    options: [
      "A) No, PCA always adds noise",
      "B) Only when combined with K-Means",
      "C) Only for image data",
      "D) Yes, by keeping only the top components and discarding low-variance components that capture noise",
    ],
    optionsChinese: [
      "A) 不，PCA总是添加噪声",
      "B) 仅与K-Means结合时",
      "C) 仅适用于图像数据",
      "D) 是的，通过仅保留顶部成分并丢弃捕获噪声的低方差成分",
    ],
    answer: 3,
    explanation: "Low-variance components often capture noise rather than signal. By projecting data onto only the top k principal components and reconstructing, noise in the discarded dimensions is removed. This is widely used for denoising images, signals, and tabular data as a preprocessing step before modeling.",
    explanationChinese: "低方差成分通常捕获噪声而非信号。通过仅将数据投影到前k个主成分并重建，丢弃维度中的噪声被移除。这广泛用于图像、信号和表格数据的降噪，作为建模前的预处理步骤。",
    diagram: "",
    terms: ["principal_component_analysis", "feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 172,
    q: "What is kernel PCA?",
    qChinese: "核PCA是什么？",
    options: [
      "A) A faster version of PCA",
      "B) PCA applied to the kernel matrix instead of the covariance matrix for non-linear dimensionality reduction",
      "C) PCA for categorical data",
      "D) PCA with more components"
    ],
    optionsChinese: [
      "A) PCA的更快版本",
      "B) 应用于核矩阵而非协方差矩阵以进行非线性降维的PCA",
      "C) 类别数据的PCA",
      "D) 具有更多成分的PCA"
    ],
    answer: 1,
    explanation: "Kernel PCA applies PCA in a kernel-induced feature space, enabling non-linear dimensionality reduction. Using RBF or polynomial kernels, it can capture non-linear structures that standard linear PCA misses. It computes eigenvectors of the kernel matrix K_ij = K(x_i, x_j) instead of the covariance matrix.",
    explanationChinese: "核PCA在核诱导的特征空间中应用PCA，实现非线性降维。使用RBF或多项式核，它可以捕获标准线性PCA遗漏的非线性结构。它计算核矩阵K_ij = K(x_i, x_j)的特征向量而非协方差矩阵。",
    diagram: "",
    terms: ["principal_component_analysis", "support_vector_machine"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 173,
    q: "Why should you not interpret distances or cluster sizes in t-SNE plots?",
    qChinese: "为什么不应该在t-SNE图中解释距离或聚类大小？",
    options: [
      "A) t-SNE perfectly preserves distances",
      "B) t-SNE distorts global distances and cluster sizes; only local neighborhoods are meaningful",
      "C) t-SNE only works in 3D",
      "D) Distances in t-SNE correspond to feature importance"
    ],
    optionsChinese: [
      "A) t-SNE完美保留距离",
      "B) t-SNE扭曲全局距离和聚类大小；只有局部邻域有意义",
      "C) t-SNE只在3D中工作",
      "D) t-SNE中的距离对应特征重要性"
    ],
    answer: 1,
    explanation: "t-SNE optimizes local neighborhood preservation, not global distances. The gaps between clusters and relative cluster sizes in the 2D embedding are not meaningful. Two well-separated groups in t-SNE might actually overlap in the original space. Use t-SNE for pattern discovery, not quantitative distance interpretation.",
    explanationChinese: "t-SNE优化局部邻域保留，而非全局距离。2D嵌入中聚类之间的间隙和相对聚类大小没有意义。t-SNE中两个分离良好的组在原始空间中可能实际上重叠。使用t-SNE进行模式发现，而非定量距离解释。",
    diagram: "",
    terms: ["principal_component_analysis", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 174,
    q: "What is UMAP and how does it compare to t-SNE?",
    qChinese: "UMAP是什么，它与t-SNE相比如何？",
    options: [
      "A) UMAP is faster, better preserves global structure, and produces more consistent results than t-SNE",
      "B) UMAP is identical to t-SNE",
      "C) UMAP only works for supervised learning",
      "D) UMAP cannot be used for visualization"
    ],
    optionsChinese: [
      "A) UMAP更快、更好地保留全局结构，并比t-SNE产生更一致的结果",
      "B) UMAP与t-SNE相同",
      "C) UMAP只适用于监督学习",
      "D) UMAP不能用于可视化"
    ],
    answer: 0,
    explanation: "UMAP (Uniform Manifold Approximation and Projection) is based on topological data analysis. It is faster than t-SNE (O(n) vs O(n^2)), better preserves global structure and cluster relationships, and can be used for general dimensionality reduction (not just visualization). It also supports supervised and semi-supervised modes.",
    explanationChinese: "UMAP（均匀流形近似和投影）基于拓扑数据分析。它比t-SNE更快（O(n) vs O(n^2)），更好地保留全局结构和聚类关系，可用于一般降维（不仅是可视化）。它还支持监督和半监督模式。",
    diagram: "",
    terms: ["principal_component_analysis", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 175,
    q: "What is the reconstruction error in PCA?",
    qChinese: "PCA中的重建误差是什么？",
    options: [
      "A) The training loss of a classifier",
      "B) The difference between original data and data reconstructed from the reduced PCA representation",
      "C) The number of discarded components",
      "D) The computational cost of PCA"
    ],
    optionsChinese: [
      "A) 分类器的训练损失",
      "B) 原始数据和从降维PCA表示重建的数据之间的差异",
      "C) 丢弃的成分数量",
      "D) PCA的计算成本"
    ],
    answer: 1,
    explanation: "When keeping k < p components, information is lost. The reconstruction error measures ||X - X_reconstructed||^2, which equals the sum of eigenvalues of the discarded components. Minimizing reconstruction error for a given k is exactly what PCA achieves. Lower reconstruction error means better preservation of information.",
    explanationChinese: "保留k < p个成分时，信息会丢失。重建误差衡量||X - X_重建||^2，等于丢弃成分的特征值之和。对给定k最小化重建误差正是PCA所实现的。更低的重建误差意味着更好的信息保留。",
    diagram: "",
    terms: ["principal_component_analysis", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 176,
    q: "When is PCA not appropriate?",
    qChinese: "什么时候PCA不适用？",
    options: [
      "A) When data has linear structure",
      "B) When features are continuous",
      "C) When important patterns lie along non-linear manifolds or in sparse directions",
      "D) When the dataset is large"
    ],
    optionsChinese: [
      "A) 当数据有线性结构时",
      "B) 当特征是连续的时",
      "C) 当重要模式沿非线性流形或稀疏方向时",
      "D) 当数据集很大时"
    ],
    answer: 2,
    explanation: "PCA is a linear method that captures variance along straight directions. If important structure lies on curved manifolds (like a Swiss roll), PCA fails to capture it. Also, PCA maximizes variance which may not align with discriminative information. Kernel PCA, t-SNE, UMAP, or autoencoders handle non-linear cases.",
    explanationChinese: "PCA是沿直线方向捕获方差的线性方法。如果重要结构在弯曲流形上（如瑞士卷），PCA无法捕获。此外，PCA最大化方差可能不与判别信息对齐。核PCA、t-SNE、UMAP或自编码器处理非线性情况。",
    diagram: "",
    terms: ["principal_component_analysis", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 177,
    q: "What is incremental PCA used for?",
    qChinese: "增量PCA用于什么？",
    options: [
      "A) Faster PCA on small datasets",
      "B) Adding more principal components after initial PCA",
      "C) Performing PCA on data that does not fit in memory by processing it in batches",
      "D) PCA on streaming text data"
    ],
    optionsChinese: [
      "A) 小数据集上更快的PCA",
      "B) 在初始PCA后添加更多主成分",
      "C) 通过批量处理对不适合内存的数据执行PCA",
      "D) 流式文本数据上的PCA"
    ],
    answer: 2,
    explanation: "Incremental PCA processes data in mini-batches, maintaining an approximate PCA decomposition that is updated with each batch. This allows PCA on datasets too large for memory. It gives results close to regular PCA and is available in scikit-learn as IncrementalPCA for out-of-core computation.",
    explanationChinese: "增量PCA以小批量处理数据，维护每批更新的近似PCA分解。这允许对超过内存的数据集执行PCA。它给出接近常规PCA的结果，在scikit-learn中作为IncrementalPCA用于核外计算。",
    diagram: "",
    terms: ["principal_component_analysis", "feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 178,
    q: "What is the explained variance ratio in PCA?",
    qChinese: "PCA中的解释方差比是什么？",
    options: [
      "A) The ratio of features to samples",
      "B) The ratio of training to test error",
      "C) The proportion of total variance explained by each principal component",
      "D) The percentage of features retained"
    ],
    optionsChinese: [
      "A) 特征与样本的比率",
      "B) 训练误差与测试误差的比率",
      "C) 每个主成分解释的总方差比例",
      "D) 保留的特征百分比"
    ],
    answer: 2,
    explanation: "Explained variance ratio = eigenvalue_i / sum(all eigenvalues) gives the fraction of total variance captured by each PC. The cumulative sum shows total information retained. For example, if the first 3 PCs have ratios [0.5, 0.3, 0.1], they collectively explain 90% of variance.",
    explanationChinese: "解释方差比 = eigenvalue_i / sum(所有特征值)给出每个PC捕获的总方差比例。累积和显示保留的总信息。例如，如果前3个PC的比率为[0.5, 0.3, 0.1]，它们共同解释90%的方差。",
    diagram: "",
    terms: ["principal_component_analysis", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 179,
    q: "What is the difference between PCA and factor analysis?",
    qChinese: "PCA和因子分析有什么区别？",
    options: [
      "A) They are identical",
      "B) PCA maximizes variance explained; factor analysis models shared variance through latent factors plus noise",
      "C) Factor analysis always uses more components",
      "D) PCA requires labeled data"
    ],
    optionsChinese: [
      "A) 它们完全相同",
      "B) PCA最大化解释的方差；因子分析通过潜在因子加噪声建模共享方差",
      "C) 因子分析总是使用更多成分",
      "D) PCA需要标记数据"
    ],
    answer: 1,
    explanation: "PCA describes total variance using principal components without a probabilistic model. Factor analysis assumes observed variables are generated from fewer latent factors plus variable-specific noise (unique variance). Factor analysis models the covariance structure; PCA transforms the data for maximum variance capture.",
    explanationChinese: "PCA使用主成分描述总方差而无概率模型。因子分析假设观测变量由更少的潜在因子加变量特定噪声（独特方差）生成。因子分析建模协方差结构；PCA变换数据以最大方差捕获。",
    diagram: "",
    terms: ["principal_component_analysis", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 180,
    q: "How does PCA help mitigate the curse of dimensionality?",
    qChinese: "PCA如何帮助缓解维度灾难？",
    options: [
      "A) By reducing dimensions to a smaller subspace that captures most variance, improving model performance",
      "B) PCA adds more features",
      "C) PCA eliminates the need for models",
      "D) PCA only works in low dimensions"
    ],
    optionsChinese: [
      "A) 通过将维度降低到捕获大部分方差的较小子空间，改善模型性能",
      "B) PCA添加更多特征",
      "C) PCA消除了对模型的需要",
      "D) PCA只在低维中工作"
    ],
    answer: 0,
    explanation: "High dimensions cause data sparsity, increased computational cost, and overfitting risk. PCA reduces features to a compact set capturing most information. Downstream models (KNN, SVM, etc.) benefit from fewer, more informative features. This often improves both speed and generalization performance.",
    explanationChinese: "高维导致数据稀疏、计算成本增加和过拟合风险。PCA将特征减少到捕获大部分信息的紧凑集合。下游模型（KNN、SVM等）受益于更少、更有信息的特征。这通常改善速度和泛化性能。",
    diagram: "",
    terms: ["principal_component_analysis", "feature_engineering", "overfitting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 181,
    q: "What is sparse PCA?",
    qChinese: "稀疏PCA是什么？",
    options: [
      "A) PCA on sparse data only",
      "B) A variant that adds L1 regularization to produce principal components with many zero loadings",
      "C) PCA with fewer iterations",
      "D) PCA that removes sparse features"
    ],
    optionsChinese: [
      "A) 仅对稀疏数据的PCA",
      "B) 添加L1正则化以产生具有许多零载荷的主成分的变体",
      "C) 更少迭代的PCA",
      "D) 移除稀疏特征的PCA"
    ],
    answer: 1,
    explanation: "Standard PCA components are dense linear combinations of all features. Sparse PCA adds an L1 penalty that forces many loadings to zero, producing components that depend on only a few features. This improves interpretability since each component relates to a clear subset of original features.",
    explanationChinese: "标准PCA成分是所有特征的密集线性组合。稀疏PCA添加L1惩罚强制许多载荷为零，产生仅依赖于少数特征的成分。这改善了可解释性，因为每个成分关联到原始特征的清晰子集。",
    diagram: "",
    terms: ["principal_component_analysis", "regularization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 182,
    q: "What is random projection for dimensionality reduction?",
    qChinese: "用于降维的随机投影是什么？",
    options: [
      "A) Randomly removing features",
      "B) Randomly shuffling data rows",
      "C) Projecting data onto random lower-dimensional subspaces, approximately preserving distances",
      "D) Same as PCA"
    ],
    optionsChinese: [
      "A) 随机移除特征",
      "B) 随机打乱数据行",
      "C) 将数据投影到随机的低维子空间，近似保留距离",
      "D) 与PCA相同"
    ],
    answer: 2,
    explanation: "The Johnson-Lindenstrauss lemma guarantees that random projections approximately preserve pairwise distances in lower dimensions. Random projection is much faster than PCA (O(npk) vs eigendecomposition) and is useful when PCA is too expensive. It trades some accuracy for significant computational savings.",
    explanationChinese: "Johnson-Lindenstrauss引理保证随机投影在低维中近似保留成对距离。随机投影比PCA快得多（O(npk) vs 特征分解），当PCA太昂贵时有用。它以一些准确率换取显著的计算节省。",
    diagram: "",
    terms: ["principal_component_analysis", "feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 183,
    q: "What assumption does LDA make about the data?",
    qChinese: "LDA对数据做了什么假设？",
    options: [
      "A) Features within each class follow a Gaussian distribution with equal covariance matrices",
      "B) No assumptions needed",
      "C) All classes must have the same size",
      "D) Data must be binary"
    ],
    optionsChinese: [
      "A) 每个类内的特征遵循具有相同协方差矩阵的高斯分布",
      "B) 不需要假设",
      "C) 所有类必须大小相同",
      "D) 数据必须是二进制的"
    ],
    answer: 0,
    explanation: "LDA assumes classes have multivariate Gaussian distributions with the same covariance matrix (homoscedasticity). When these assumptions hold, LDA finds optimal linear discriminants. Violations (different covariances, non-Gaussian data) can degrade performance. Quadratic Discriminant Analysis (QDA) relaxes the equal covariance assumption.",
    explanationChinese: "LDA假设类具有相同协方差矩阵（同方差性）的多元高斯分布。当这些假设成立时，LDA找到最优线性判别。违反（不同协方差、非高斯数据）可能降低性能。二次判别分析（QDA）放松了相同协方差假设。",
    diagram: "",
    terms: ["principal_component_analysis", "supervised_learning", "naive_bayes"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 184,
    q: "What is the maximum number of components LDA can produce for a K-class problem?",
    qChinese: "对于K类问题，LDA最多可以产生多少个成分？",
    options: [
      "A) K",
      "B) No limit",
      "C) 2K",
      "D) K - 1",
    ],
    optionsChinese: [
      "A) K",
      "B) 没有限制",
      "C) 2K",
      "D) K - 1",
    ],
    answer: 3,
    explanation: "LDA produces at most K-1 discriminant components because the between-class scatter matrix has rank at most K-1 (K class means minus the overall mean span a K-1 dimensional subspace). For binary classification, only one LDA component exists. This limits LDA's dimensionality reduction compared to PCA.",
    explanationChinese: "LDA最多产生K-1个判别成分，因为类间散布矩阵的秩最多为K-1（K个类均值减去总均值张成K-1维子空间）。对于二分类，只有一个LDA成分。这限制了LDA相比PCA的降维能力。",
    diagram: "",
    terms: ["principal_component_analysis", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 185,
    q: "What is Independent Component Analysis (ICA) and how does it differ from PCA?",
    qChinese: "独立成分分析（ICA）是什么，它与PCA有什么不同？",
    options: [
      "A) ICA finds statistically independent components; PCA finds uncorrelated components that maximize variance",
      "B) ICA is the same as PCA",
      "C) ICA requires labeled data",
      "D) ICA only works for image data"
    ],
    optionsChinese: [
      "A) ICA找到统计独立的成分；PCA找到最大化方差的不相关成分",
      "B) ICA与PCA相同",
      "C) ICA需要标记数据",
      "D) ICA只适用于图像数据"
    ],
    answer: 0,
    explanation: "PCA finds orthogonal directions maximizing variance (uncorrelated but not necessarily independent). ICA finds components that are statistically independent by maximizing non-Gaussianity. ICA is used for blind source separation (e.g., cocktail party problem) and does not rank components by explained variance.",
    explanationChinese: "PCA找到最大化方差的正交方向（不相关但不一定独立）。ICA通过最大化非高斯性找到统计独立的成分。ICA用于盲源分离（如鸡尾酒会问题），不按解释方差对成分排序。",
    diagram: "",
    terms: ["principal_component_analysis", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 186,
    q: "What is k-fold cross-validation?",
    qChinese: "什么是k折交叉验证？",
    options: [
      "A) Training on the entire dataset",
      "B) Randomly sampling k points for testing",
      "C) Splitting data into k equal folds, training on k-1 and validating on the remaining fold, rotating k times",
      "D) Using k different models"
    ],
    optionsChinese: [
      "A) 在整个数据集上训练",
      "B) 随机采样k个点用于测试",
      "C) 将数据分成k等份，在k-1份上训练并在剩余1份上验证，轮换k次",
      "D) 使用k个不同的模型"
    ],
    answer: 2,
    explanation: "K-fold CV divides data into k equal parts. Each fold serves as validation once while the remaining k-1 folds are training data. The final score averages all k validation scores. This provides a robust estimate of model performance and reduces variance compared to a single train-test split. k=5 or 10 is typical.",
    explanationChinese: "K折CV将数据分成k等份。每份轮流作为验证集，其余k-1份为训练数据。最终分数取所有k个验证分数的平均。这提供稳健的模型性能估计，比单次训练-测试拆分方差更低。k=5或10是典型值。",
    diagram: "",
    terms: ["cross_validation", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 187,
    q: "Why is cross-validation preferred over a single train-test split?",
    qChinese: "为什么交叉验证优于单次训练-测试拆分？",
    options: [
      "A) It provides a more reliable performance estimate by using all data for both training and validation",
      "B) It is faster",
      "C) It eliminates the need for a test set entirely",
      "D) It always improves model accuracy"
    ],
    optionsChinese: [
      "A) 通过将所有数据同时用于训练和验证，提供更可靠的性能估计",
      "B) 它更快",
      "C) 它完全消除了对测试集的需要",
      "D) 它总是提高模型准确率"
    ],
    answer: 0,
    explanation: "A single split can give misleading results due to the particular random partition. Cross-validation ensures every data point is used for validation exactly once, reducing the variance of the performance estimate. The average across folds is more reliable than any single split, especially for small datasets.",
    explanationChinese: "单次拆分由于特定的随机划分可能给出误导性结果。交叉验证确保每个数据点恰好被用于验证一次，减少性能估计的方差。跨折叠的平均比任何单次拆分更可靠，尤其对小数据集。",
    diagram: "",
    terms: ["cross_validation", "bias_variance_tradeoff"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 188,
    q: "What is the purpose of a held-out test set separate from cross-validation?",
    qChinese: "独立于交叉验证的保留测试集的目的是什么？",
    options: [
      "A) It is not needed if CV is used",
      "B) It replaces cross-validation",
      "C) It provides an unbiased final evaluation after all model selection and tuning is done",
      "D) It is only used for feature selection"
    ],
    optionsChinese: [
      "A) 如果使用CV就不需要",
      "B) 它取代交叉验证",
      "C) 在所有模型选择和调优完成后提供无偏的最终评估",
      "D) 它仅用于特征选择"
    ],
    answer: 2,
    explanation: "Cross-validation is used for model selection and hyperparameter tuning, but the CV score can be optimistic if many configurations are tried. A held-out test set, untouched during development, provides a truly unbiased estimate of final model performance. It should only be used once at the very end.",
    explanationChinese: "交叉验证用于模型选择和超参数调优，但如果尝试了许多配置，CV分数可能偏乐观。在开发期间未触及的保留测试集提供真正无偏的最终模型性能估计。它应仅在最后使用一次。",
    diagram: "",
    terms: ["cross_validation", "overfitting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 189,
    q: "What is data leakage and why is it dangerous?",
    qChinese: "什么是数据泄露，为什么它很危险？",
    options: [
      "A) Data being stored insecurely",
      "B) Having too much training data",
      "C) Losing data during preprocessing",
      "D) Information from the test set influencing model training, giving artificially high performance",
    ],
    optionsChinese: [
      "A) 数据存储不安全",
      "B) 训练数据过多",
      "C) 预处理期间丢失数据",
      "D) 测试集的信息影响模型训练，给出人为的高性能",
    ],
    answer: 3,
    explanation: "Data leakage occurs when test information leaks into training, such as scaling using the full dataset before splitting, or including features derived from the target. This inflates validation metrics, making the model appear better than it truly is. Always fit preprocessing on training data only and transform test data separately.",
    explanationChinese: "数据泄露发生在测试信息泄漏到训练中，如拆分前使用完整数据集缩放，或包含从目标派生的特征。这膨胀了验证指标，使模型看起来比实际更好。始终仅在训练数据上拟合预处理，单独变换测试数据。",
    diagram: "",
    terms: ["cross_validation", "overfitting", "feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 190,
    q: "What is the ROC curve and what does AUC measure?",
    qChinese: "ROC曲线是什么，AUC衡量什么？",
    options: [
      "A) ROC plots accuracy vs loss; AUC is the area under it",
      "B) ROC plots TPR vs FPR at various thresholds; AUC summarizes overall discriminative ability",
      "C) ROC only works for regression",
      "D) AUC is always 1.0 for good models"
    ],
    optionsChinese: [
      "A) ROC绘制准确率vs损失；AUC是其下面积",
      "B) ROC在不同阈值下绘制TPR vs FPR；AUC总结整体判别能力",
      "C) ROC只适用于回归",
      "D) 好模型的AUC总是1.0"
    ],
    answer: 1,
    explanation: "The ROC curve plots True Positive Rate (sensitivity) against False Positive Rate (1-specificity) as the classification threshold varies from 0 to 1. AUC (Area Under the Curve) equals the probability that the model ranks a random positive higher than a random negative. AUC=0.5 is random; AUC=1.0 is perfect.",
    explanationChinese: "ROC曲线在分类阈值从0到1变化时绘制真正例率（敏感度）vs假正例率（1-特异度）。AUC（曲线下面积）等于模型将随机正例排在随机负例之上的概率。AUC=0.5是随机；AUC=1.0是完美。",
    diagram: "",
    terms: ["roc_curve", "cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 191,
    q: "When is the precision-recall curve preferred over the ROC curve?",
    qChinese: "什么时候精确率-召回率曲线优于ROC曲线？",
    options: [
      "A) When classes are balanced",
      "B) When dealing with highly imbalanced datasets where the positive class is rare",
      "C) When using regression models",
      "D) Always"
    ],
    optionsChinese: [
      "A) 当类别平衡时",
      "B) 当处理正类稀少的高度不平衡数据集时",
      "C) 当使用回归模型时",
      "D) 总是"
    ],
    answer: 1,
    explanation: "With imbalanced data (e.g., 99% negative), ROC can look optimistic because FPR stays low even with many false positives relative to true positives. Precision-recall focuses on the positive class performance and better reveals model weakness. Average precision (area under PR curve) is the preferred summary metric.",
    explanationChinese: "对于不平衡数据（如99%负例），ROC可能看起来乐观，因为即使假正例相对真正例很多FPR仍然很低。精确率-召回率关注正类性能并更好地揭示模型弱点。平均精确率（PR曲线下面积）是首选的总结指标。",
    diagram: "",
    terms: ["roc_curve", "cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 192,
    q: "What is grid search for hyperparameter tuning?",
    qChinese: "超参数调优的网格搜索是什么？",
    options: [
      "A) Randomly trying different hyperparameters",
      "B) Exhaustively evaluating all combinations of specified hyperparameter values using cross-validation",
      "C) Manually selecting the best hyperparameters",
      "D) Using default hyperparameters"
    ],
    optionsChinese: [
      "A) 随机尝试不同的超参数",
      "B) 使用交叉验证穷举评估所有指定超参数值的组合",
      "C) 手动选择最佳超参数",
      "D) 使用默认超参数"
    ],
    answer: 1,
    explanation: "Grid search defines a set of values for each hyperparameter and evaluates every combination using cross-validation. The combination with the best CV score is selected. While thorough, it is computationally expensive for many hyperparameters. RandomizedSearchCV samples random combinations and is often more efficient.",
    explanationChinese: "网格搜索为每个超参数定义一组值，使用交叉验证评估每个组合。选择CV分数最好的组合。虽然全面，但对许多超参数计算成本高。RandomizedSearchCV采样随机组合，通常更高效。",
    diagram: "",
    terms: ["cross_validation", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 193,
    q: "What is the difference between validation set and test set?",
    qChinese: "验证集和测试集有什么区别？",
    options: [
      "A) They are the same thing",
      "B) Validation set is larger than the training set",
      "C) Test set is used during training",
      "D) Validation set is used for model selection and tuning; test set is used only for final unbiased evaluation",
    ],
    optionsChinese: [
      "A) 它们是相同的",
      "B) 验证集比训练集大",
      "C) 测试集在训练期间使用",
      "D) 验证集用于模型选择和调优；测试集仅用于最终无偏评估",
    ],
    answer: 3,
    explanation: "The validation set helps choose between models, tune hyperparameters, and detect overfitting during development. The test set is held out until all decisions are final, providing an unbiased performance estimate. Using the test set for tuning leads to data leakage and overly optimistic performance estimates.",
    explanationChinese: "验证集帮助在模型之间选择、调优超参数和在开发期间检测过拟合。测试集保留到所有决策最终确定，提供无偏的性能估计。使用测试集进行调优导致数据泄露和过于乐观的性能估计。",
    diagram: "",
    terms: ["cross_validation", "overfitting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 194,
    q: "What is the log-loss (cross-entropy loss) metric for evaluating classifiers?",
    qChinese: "评估分类器的对数损失（交叉熵损失）指标是什么？",
    options: [
      "A) The number of misclassifications",
      "B) Only applicable to regression",
      "C) The same as accuracy",
      "D) A metric that penalizes confident incorrect predictions using -sum(y*log(p))",
    ],
    optionsChinese: [
      "A) 误分类的数量",
      "B) 仅适用于回归",
      "C) 与准确率相同",
      "D) 使用-sum(y*log(p))惩罚自信但错误预测的指标",
    ],
    answer: 3,
    explanation: "Log-loss evaluates probability predictions, not just class labels. It heavily penalizes confident wrong predictions (predicting 0.99 when true label is 0). Lower log-loss is better. It rewards well-calibrated probability estimates and is more informative than accuracy for comparing probabilistic classifiers.",
    explanationChinese: "对数损失评估概率预测，而非仅类标签。它严重惩罚自信的错误预测（真实标签为0时预测0.99）。更低的对数损失更好。它奖励良好校准的概率估计，对比较概率分类器比准确率更有信息量。",
    diagram: "",
    terms: ["cross_validation", "logistic_regression"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 195,
    q: "What is the purpose of a learning curve in model evaluation?",
    qChinese: "学习曲线在模型评估中的目的是什么？",
    options: [
      "A) To visualize feature importance",
      "B) To show the learning rate schedule",
      "C) To plot training and validation scores as a function of training set size to diagnose bias/variance",
      "D) To compare different distance metrics"
    ],
    optionsChinese: [
      "A) 可视化特征重要性",
      "B) 显示学习率调度",
      "C) 将训练和验证分数作为训练集大小的函数绘制以诊断偏差/方差",
      "D) 比较不同的距离度量"
    ],
    answer: 2,
    explanation: "A learning curve plots performance against training set size. If both train and validation scores are low, the model underfits (high bias). If training score is high but validation is low, the model overfits (high variance). Learning curves guide decisions about getting more data, adding features, or changing model complexity.",
    explanationChinese: "学习曲线将性能对训练集大小作图。如果训练和验证分数都低，模型欠拟合（高偏差）。如果训练分数高但验证低，模型过拟合（高方差）。学习曲线指导关于获取更多数据、添加特征或改变模型复杂度的决策。",
    diagram: "",
    terms: ["cross_validation", "bias_variance_tradeoff", "overfitting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 196,
    q: "What is nested cross-validation and when is it needed?",
    qChinese: "嵌套交叉验证是什么，什么时候需要它？",
    options: [
      "A) Using more folds than standard CV",
      "B) Running CV twice on the same folds",
      "C) Cross-validation applied to nested data structures",
      "D) An outer CV loop for performance estimation with an inner CV loop for hyperparameter tuning",
    ],
    optionsChinese: [
      "A) 使用比标准CV更多的折叠",
      "B) 在相同折叠上运行CV两次",
      "C) 对嵌套数据结构应用交叉验证",
      "D) 用于性能估计的外部CV循环和用于超参数调优的内部CV循环",
    ],
    answer: 3,
    explanation: "Using the same CV for both tuning and evaluation overestimates performance. Nested CV uses an inner loop to select hyperparameters and an outer loop to estimate generalization error. The outer loop provides an unbiased estimate since its test folds were never seen during inner tuning. This is the gold standard for small datasets.",
    explanationChinese: "对调优和评估使用相同的CV会高估性能。嵌套CV使用内部循环选择超参数和外部循环估计泛化误差。外部循环提供无偏估计，因为其测试折叠在内部调优期间从未被看到。这是小数据集的黄金标准。",
    diagram: "",
    terms: ["cross_validation", "overfitting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 197,
    q: "What is the Cohen's Kappa score?",
    qChinese: "Cohen's Kappa分数是什么？",
    options: [
      "A) A metric measuring inter-rater agreement adjusted for chance agreement",
      "B) A regression metric",
      "C) The same as accuracy",
      "D) A clustering metric"
    ],
    optionsChinese: [
      "A) 衡量调整了偶然一致后的评估者间一致性的指标",
      "B) 回归指标",
      "C) 与准确率相同",
      "D) 聚类指标"
    ],
    answer: 0,
    explanation: "Cohen's Kappa measures agreement between predicted and actual labels while accounting for agreement by random chance. Kappa = (observed accuracy - expected accuracy) / (1 - expected accuracy). Kappa = 1 means perfect agreement, 0 means no better than chance. It is more informative than accuracy for imbalanced datasets.",
    explanationChinese: "Cohen's Kappa衡量预测和实际标签之间的一致性，同时考虑随机偶然一致。Kappa = (观测准确率 - 期望准确率) / (1 - 期望准确率)。Kappa = 1意味着完美一致，0意味着不比偶然好。对不平衡数据集比准确率更有信息量。",
    diagram: "",
    terms: ["cross_validation", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 198,
    q: "What is the RMSE metric and how does it relate to MSE?",
    qChinese: "RMSE指标是什么，它与MSE有什么关系？",
    options: [
      "A) RMSE = MSE^2",
      "B) They measure different things",
      "C) RMSE is always smaller than MSE",
      "D) RMSE = sqrt(MSE), providing error in the same units as the target variable",
    ],
    optionsChinese: [
      "A) RMSE = MSE^2",
      "B) 它们衡量不同的东西",
      "C) RMSE总是小于MSE",
      "D) RMSE = sqrt(MSE)，提供与目标变量相同单位的误差",
    ],
    answer: 3,
    explanation: "RMSE is the square root of MSE, converting the squared error back to the original units of the target variable. If predicting house prices in dollars, RMSE is in dollars while MSE is in dollars squared. RMSE is more interpretable but equally sensitive to outliers as MSE. Both are minimized by the conditional mean.",
    explanationChinese: "RMSE是MSE的平方根，将平方误差转换回目标变量的原始单位。如果预测房价美元，RMSE以美元为单位而MSE以美元平方为单位。RMSE更易解释但对异常值的敏感度与MSE相同。两者都由条件均值最小化。",
    diagram: "",
    terms: ["cross_validation", "linear_regression"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 199,
    q: "What is the purpose of a validation curve?",
    qChinese: "验证曲线的目的是什么？",
    options: [
      "A) To visualize data distribution",
      "B) To plot training and validation scores as a function of a hyperparameter to find optimal values",
      "C) To validate data quality",
      "D) To compare different datasets"
    ],
    optionsChinese: [
      "A) 可视化数据分布",
      "B) 将训练和验证分数作为超参数的函数绘制以找到最优值",
      "C) 验证数据质量",
      "D) 比较不同的数据集"
    ],
    answer: 1,
    explanation: "A validation curve plots model performance against a single hyperparameter. Where training score is high but validation is low, the model overfits at that parameter value. Where both are low, it underfits. The optimal hyperparameter value is where validation score peaks. This helps tune one parameter at a time.",
    explanationChinese: "验证曲线将模型性能对单个超参数作图。训练分数高但验证低时，模型在该参数值过拟合。两者都低时欠拟合。最优超参数值在验证分数达到峰值处。这帮助一次调优一个参数。",
    diagram: "",
    terms: ["cross_validation", "bias_variance_tradeoff"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 200,
    q: "What is time-series cross-validation and why is standard k-fold inappropriate for time series?",
    qChinese: "时间序列交叉验证是什么，为什么标准k折对时间序列不适用？",
    options: [
      "A) Standard k-fold works fine for time series",
      "B) Time-series CV uses more folds",
      "C) Time-series data does not need cross-validation",
      "D) Standard k-fold can use future data to predict the past; time-series CV uses expanding or rolling windows",
    ],
    optionsChinese: [
      "A) 标准k折对时间序列工作正常",
      "B) 时间序列CV使用更多折叠",
      "C) 时间序列数据不需要交叉验证",
      "D) 标准k折可能用未来数据预测过去；时间序列CV使用扩展或滚动窗口",
    ],
    answer: 3,
    explanation: "Standard k-fold randomly mixes time periods, allowing the model to train on future data and predict the past (temporal leakage). Time-series CV preserves temporal order: training always uses earlier data and validation uses later data. This mimics real-world deployment where future data is unavailable.",
    explanationChinese: "标准k折随机混合时间段，允许模型在未来数据上训练并预测过去（时间泄露）。时间序列CV保留时间顺序：训练始终使用较早数据，验证使用较晚数据。这模拟了未来数据不可用的实际部署情况。",
    diagram: "",
    terms: ["cross_validation", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 201,
    q: "What is the difference between accuracy and balanced accuracy?",
    qChinese: "准确率和平衡准确率有什么区别？",
    options: [
      "A) Balanced accuracy averages recall per class, correcting for class imbalance",
      "B) They are identical",
      "C) Balanced accuracy is always lower",
      "D) Accuracy accounts for class imbalance"
    ],
    optionsChinese: [
      "A) 平衡准确率对每个类的召回率取平均，校正类不平衡",
      "B) 它们相同",
      "C) 平衡准确率总是更低",
      "D) 准确率考虑类不平衡"
    ],
    answer: 0,
    explanation: "Accuracy = (TP+TN)/total can be misleadingly high with imbalanced classes (99% accuracy by always predicting the majority class). Balanced accuracy = average of per-class recall, giving equal weight to each class. For binary: (sensitivity + specificity)/2. It is a fairer metric when classes are unequal in size.",
    explanationChinese: "准确率 = (TP+TN)/总数在类不平衡时可能误导性地高（总是预测多数类可达99%准确率）。平衡准确率 = 每类召回率的平均，对每个类给予等权。对于二分类：（敏感度 + 特异度）/2。当类大小不等时它是更公平的指标。",
    diagram: "",
    terms: ["cross_validation", "roc_curve"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 202,
    q: "What is random search for hyperparameter tuning?",
    qChinese: "超参数调优的随机搜索是什么？",
    options: [
      "A) Sampling hyperparameter combinations randomly from specified distributions",
      "B) Trying every possible combination",
      "C) Using default parameters",
      "D) Selecting parameters based on the dataset name"
    ],
    optionsChinese: [
      "A) 从指定分布中随机采样超参数组合",
      "B) 尝试每一种可能的组合",
      "C) 使用默认参数",
      "D) 根据数据集名称选择参数"
    ],
    answer: 0,
    explanation: "Random search samples a fixed number of hyperparameter combinations from specified distributions. It is often more efficient than grid search because it explores the parameter space more broadly. With the same computational budget, random search often finds better configurations since it does not waste evaluations on unimportant dimensions.",
    explanationChinese: "随机搜索从指定分布中采样固定数量的超参数组合。它通常比网格搜索更高效，因为它更广泛地探索参数空间。在相同计算预算下，随机搜索通常找到更好的配置，因为它不在不重要的维度上浪费评估。",
    diagram: "",
    terms: ["cross_validation", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 203,
    q: "What is Bayesian optimization for hyperparameter tuning?",
    qChinese: "超参数调优的贝叶斯优化是什么？",
    options: [
      "A) Same as grid search",
      "B) Always faster than random search",
      "C) Using a probabilistic model of the objective to intelligently select the next hyperparameters to evaluate",
      "D) Only works for neural networks"
    ],
    optionsChinese: [
      "A) 与网格搜索相同",
      "B) 总是比随机搜索更快",
      "C) 使用目标的概率模型智能选择下一个要评估的超参数",
      "D) 只适用于神经网络"
    ],
    answer: 2,
    explanation: "Bayesian optimization builds a surrogate model (typically Gaussian Process) of the objective function and uses an acquisition function to choose the next point that balances exploration and exploitation. It is more sample-efficient than grid or random search, requiring fewer evaluations to find good hyperparameters.",
    explanationChinese: "贝叶斯优化构建目标函数的代理模型（通常是高斯过程）并使用获取函数选择平衡探索和利用的下一个点。它比网格或随机搜索样本效率更高，需要更少的评估来找到好的超参数。",
    diagram: "",
    terms: ["cross_validation", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 204,
    q: "What does the confusion matrix diagonal represent?",
    qChinese: "混淆矩阵对角线代表什么？",
    options: [
      "A) Misclassified samples",
      "B) Correctly classified samples for each class",
      "C) Feature correlations",
      "D) Model parameters"
    ],
    optionsChinese: [
      "A) 误分类的样本",
      "B) 每个类正确分类的样本",
      "C) 特征相关性",
      "D) 模型参数"
    ],
    answer: 1,
    explanation: "The diagonal elements of a confusion matrix represent correct predictions: C[i,i] is the number of class-i samples correctly predicted as class i. Off-diagonal elements C[i,j] represent class-i samples misclassified as class j. A perfect classifier has all counts on the diagonal with zeros elsewhere.",
    explanationChinese: "混淆矩阵的对角线元素代表正确预测：C[i,i]是正确预测为类i的类i样本数。非对角线元素C[i,j]代表被误分类为类j的类i样本。完美分类器的所有计数在对角线上，其他位置为零。",
    diagram: "",
    terms: ["cross_validation", "roc_curve"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 205,
    q: "What is the F-beta score and how does it generalize F1?",
    qChinese: "F-beta分数是什么，它如何推广F1？",
    options: [
      "A) F-beta is always equal to F1",
      "B) F-beta only considers precision",
      "C) F-beta = (1+beta^2) * P*R / (beta^2*P + R); beta controls the weight of recall vs precision",
      "D) Beta must always be 1"
    ],
    optionsChinese: [
      "A) F-beta总是等于F1",
      "B) F-beta只考虑精确率",
      "C) F-beta = (1+beta^2) * P*R / (beta^2*P + R)；beta控制召回率vs精确率的权重",
      "D) Beta必须总是1"
    ],
    answer: 2,
    explanation: "F-beta generalizes F1 by weighting recall beta times more than precision. F1 (beta=1) balances both equally. F2 (beta=2) weights recall higher, useful when missing positives is costly (medical screening). F0.5 weights precision higher, useful when false positives are costly (spam detection).",
    explanationChinese: "F-beta通过将召回率的权重设为精确率的beta倍来推广F1。F1（beta=1）两者均衡。F2（beta=2）更重视召回率，当遗漏正例代价高时有用（医学筛查）。F0.5更重视精确率，当假正例代价高时有用（垃圾邮件检测）。",
    diagram: "",
    terms: ["cross_validation", "roc_curve"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 206,
    q: "What is the purpose of calibration curves (reliability diagrams)?",
    qChinese: "校准曲线（可靠性图）的目的是什么？",
    options: [
      "A) To compare predicted probabilities against actual frequencies to assess probability calibration",
      "B) To show feature distributions",
      "C) To measure training speed",
      "D) To visualize decision boundaries"
    ],
    optionsChinese: [
      "A) 将预测概率与实际频率比较以评估概率校准",
      "B) 显示特征分布",
      "C) 衡量训练速度",
      "D) 可视化决策边界"
    ],
    answer: 0,
    explanation: "A calibration curve plots predicted probability vs actual frequency of positive outcomes in bins. A perfectly calibrated model follows the diagonal. Points above the diagonal mean overconfident predictions. Calibration is important for risk assessment applications where probability estimates must be accurate, not just discriminative.",
    explanationChinese: "校准曲线在分箱中绘制预测概率vs正结果的实际频率。完美校准的模型沿对角线。对角线上方的点意味着过于自信的预测。校准对风险评估应用很重要，其中概率估计必须准确，而非仅有判别性。",
    diagram: "",
    terms: ["cross_validation", "logistic_regression"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 207,
    q: "What is the mean absolute percentage error (MAPE)?",
    qChinese: "平均绝对百分比误差（MAPE）是什么？",
    options: [
      "A) MAPE = mean(|actual - predicted| / |actual|) * 100%, expressing error as a percentage",
      "B) The same as MSE",
      "C) A classification metric",
      "D) Always between 0 and 1"
    ],
    optionsChinese: [
      "A) MAPE = mean(|实际 - 预测| / |实际|) * 100%，将误差表示为百分比",
      "B) 与MSE相同",
      "C) 分类指标",
      "D) 总是在0和1之间"
    ],
    answer: 0,
    explanation: "MAPE expresses prediction error as a percentage of actual values, making it interpretable across different scales. A MAPE of 10% means predictions are off by 10% on average. However, MAPE is undefined when actual values are zero and is asymmetric (penalizes underprediction more than overprediction).",
    explanationChinese: "MAPE将预测误差表示为实际值的百分比，使其在不同尺度上可解释。MAPE为10%意味着预测平均偏差10%。但当实际值为零时MAPE未定义，且不对称（对低估的惩罚大于高估）。",
    diagram: "",
    terms: ["cross_validation", "linear_regression"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 208,
    q: "What is early stopping in model training?",
    qChinese: "模型训练中的早停是什么？",
    options: [
      "A) Monitoring validation error and stopping when it begins to increase, preventing overfitting",
      "B) Stopping training after a fixed number of epochs",
      "C) Training until training loss reaches zero",
      "D) Stopping when the learning rate is too small"
    ],
    optionsChinese: [
      "A) 监控验证误差并在开始增加时停止，防止过拟合",
      "B) 在固定epoch数后停止训练",
      "C) 训练直到训练损失达到零",
      "D) 当学习率太小时停止"
    ],
    answer: 0,
    explanation: "Early stopping tracks validation loss during training. When validation loss stops improving for a set number of epochs (patience), training halts. This prevents the model from memorizing training noise. It acts as implicit regularization and is commonly used with gradient boosting and neural networks.",
    explanationChinese: "早停在训练期间跟踪验证损失。当验证损失在设定的epoch数（耐心）内不再改善时，训练停止。这防止模型记忆训练噪声。它作为隐式正则化，常用于梯度提升和神经网络。",
    diagram: "",
    terms: ["cross_validation", "overfitting", "regularization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 209,
    q: "What is a multi-label classification problem?",
    qChinese: "什么是多标签分类问题？",
    options: [
      "A) Same as multi-class classification",
      "B) Classification with continuous labels",
      "C) A problem with exactly two labels",
      "D) Each instance can belong to multiple classes simultaneously",
    ],
    optionsChinese: [
      "A) 与多类分类相同",
      "B) 带连续标签的分类",
      "C) 恰好有两个标签的问题",
      "D) 每个实例可以同时属于多个类",
    ],
    answer: 3,
    explanation: "In multi-label classification, each instance can have multiple labels simultaneously (e.g., an image tagged as both 'outdoor' and 'sunset'). This differs from multi-class (exactly one class per instance). Evaluation uses metrics like Hamming loss, subset accuracy, or per-label precision/recall averaged across labels.",
    explanationChinese: "在多标签分类中，每个实例可以同时有多个标签（如图像同时标记为'户外'和'日落'）。这与多类（每个实例恰好一个类）不同。评估使用汉明损失、子集准确率或跨标签平均的每标签精确率/召回率等指标。",
    diagram: "",
    terms: ["cross_validation", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 210,
    q: "What is stratified k-fold cross-validation?",
    qChinese: "分层k折交叉验证是什么？",
    options: [
      "A) K-fold without any structure",
      "B) K-fold that uses only the largest class",
      "C) K-fold where each fold preserves the class distribution of the full dataset",
      "D) K-fold with k=2 always"
    ],
    optionsChinese: [
      "A) 没有任何结构的K折",
      "B) 只使用最大类的K折",
      "C) 每个折叠保持完整数据集类分布的K折",
      "D) 总是k=2的K折"
    ],
    answer: 2,
    explanation: "Stratified k-fold ensures each fold has approximately the same percentage of each class as the full dataset. This prevents folds from having very few or zero minority class samples, giving more reliable cross-validation scores. It is the standard for classification tasks, especially with imbalanced data.",
    explanationChinese: "分层k折确保每个折叠具有与完整数据集大致相同的每类百分比。这防止折叠中少数类样本极少或为零，给出更可靠的交叉验证分数。它是分类任务的标准，尤其对不平衡数据。",
    diagram: "",
    terms: ["cross_validation", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 211,
    q: "What is the leave-one-out cross-validation (LOOCV) method?",
    qChinese: "留一交叉验证（LOOCV）方法是什么？",
    options: [
      "A) Leaving out one feature at a time",
      "B) Leaving out one class",
      "C) Using each single sample as validation once, training on all remaining n-1 samples",
      "D) Using only one fold"
    ],
    optionsChinese: [
      "A) 每次留出一个特征",
      "B) 留出一个类",
      "C) 每个单独样本轮流作为验证，在所有剩余n-1个样本上训练",
      "D) 只使用一个折叠"
    ],
    answer: 2,
    explanation: "LOOCV is k-fold with k=n. Each of n training runs uses n-1 samples for training and 1 for validation. It provides a nearly unbiased estimate with low bias but high variance. It is computationally expensive (n model fits) but useful for very small datasets. For linear models, a shortcut formula exists.",
    explanationChinese: "LOOCV是k=n的k折。n次训练每次用n-1个样本训练和1个验证。它提供几乎无偏、低偏差但高方差的估计。计算成本高（n次模型拟合）但对非常小的数据集有用。对于线性模型存在快捷公式。",
    diagram: "",
    terms: ["cross_validation", "bias_variance_tradeoff"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 212,
    q: "How do you evaluate a regression model's prediction intervals?",
    qChinese: "如何评估回归模型的预测区间？",
    options: [
      "A) Using accuracy",
      "B) By measuring the width of intervals only",
      "C) Prediction intervals are not used in regression",
      "D) By checking the coverage probability: whether the stated confidence intervals contain the true values at the expected rate",
    ],
    optionsChinese: [
      "A) 使用准确率",
      "B) 仅通过衡量区间宽度",
      "C) 预测区间不在回归中使用",
      "D) 通过检查覆盖概率：所述置信区间是否以预期比率包含真实值",
    ],
    answer: 3,
    explanation: "A 95% prediction interval should contain the true value about 95% of the time. Coverage probability checks this: if actual coverage is much lower, intervals are too narrow (overconfident). Good prediction intervals are both well-calibrated (correct coverage) and sharp (narrow). Quantile regression can produce these intervals.",
    explanationChinese: "95%预测区间应约95%的时间包含真实值。覆盖概率检查此项：如果实际覆盖率低得多，区间过窄（过于自信）。好的预测区间既校准良好（正确覆盖）又尖锐（窄）。分位数回归可以产生这些区间。",
    diagram: "",
    terms: ["cross_validation", "linear_regression"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 213,
    q: "What is the difference between Type I and Type II errors in classification?",
    qChinese: "分类中Type I和Type II错误有什么区别？",
    options: [
      "A) They are the same error",
      "B) Type I is a false positive; Type II is a false negative",
      "C) Type I is a false negative; Type II is a false positive",
      "D) Both refer to true positives"
    ],
    optionsChinese: [
      "A) 它们是相同的错误",
      "B) Type I是假正例；Type II是假负例",
      "C) Type I是假负例；Type II是假正例",
      "D) 两者都指真正例"
    ],
    answer: 1,
    explanation: "Type I error (false positive) incorrectly rejects the null hypothesis, flagging a negative as positive. Type II error (false negative) fails to detect a true positive. In medical testing, Type I means a healthy person diagnosed as sick; Type II means a sick person diagnosed as healthy. The costs often differ greatly.",
    explanationChinese: "Type I错误（假正例）错误地拒绝零假设，将负例标记为正例。Type II错误（假负例）未能检测到真正例。在医学检测中，Type I意味着健康人被诊断为生病；Type II意味着生病的人被诊断为健康。成本通常差异很大。",
    diagram: "",
    terms: ["cross_validation", "roc_curve"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 214,
    q: "What is the Brier score for evaluating probabilistic predictions?",
    qChinese: "评估概率预测的Brier分数是什么？",
    options: [
      "A) The number of correct predictions",
      "B) A distance metric",
      "C) The mean squared difference between predicted probabilities and actual binary outcomes",
      "D) Only for multi-class problems"
    ],
    optionsChinese: [
      "A) 正确预测的数量",
      "B) 距离度量",
      "C) 预测概率与实际二元结果之间的均方差",
      "D) 仅用于多类问题"
    ],
    answer: 2,
    explanation: "Brier score = mean((predicted_probability - actual_outcome)^2), ranging from 0 (perfect) to 1. It simultaneously evaluates discrimination (separating classes) and calibration (accurate probabilities). Lower is better. It can be decomposed into reliability (calibration), resolution (discrimination), and uncertainty components.",
    explanationChinese: "Brier分数 = mean((预测概率 - 实际结果)^2)，范围从0（完美）到1。它同时评估判别（分离类）和校准（准确概率）。越低越好。可分解为可靠性（校准）、分辨率（判别）和不确定性成分。",
    diagram: "",
    terms: ["cross_validation", "logistic_regression"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 215,
    q: "What is the purpose of a confusion matrix normalized by row?",
    qChinese: "按行归一化的混淆矩阵的目的是什么？",
    options: [
      "A) To show absolute counts",
      "B) To compute feature importance",
      "C) To normalize features",
      "D) To show the proportion of each true class that was classified into each predicted class",
    ],
    optionsChinese: [
      "A) 显示绝对计数",
      "B) 计算特征重要性",
      "C) 归一化特征",
      "D) 显示每个真实类被分类到每个预测类的比例",
    ],
    answer: 3,
    explanation: "Row-normalized confusion matrix divides each row by its sum, showing class-wise recall rates. Entry C[i,j]/sum(C[i,:]) is the probability of predicting class j given true class i. This reveals which classes are confused with which others, helping diagnose class-specific model weaknesses independent of class frequency.",
    explanationChinese: "按行归一化的混淆矩阵将每行除以其和，显示类别的召回率。条目C[i,j]/sum(C[i,:])是给定真实类i时预测类j的概率。这揭示哪些类与其他类混淆，帮助诊断独立于类频率的类特定模型弱点。",
    diagram: "",
    terms: ["cross_validation", "roc_curve"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 216,
    q: "What is L1 regularization (Lasso)?",
    qChinese: "L1正则化（Lasso）是什么？",
    options: [
      "A) Adding lambda * sum(w_i^2) to the loss",
      "B) Adding lambda * sum(|w_i|) to the loss, promoting sparsity by driving some weights to exactly zero",
      "C) Removing features randomly",
      "D) Increasing the learning rate"
    ],
    optionsChinese: [
      "A) 在损失中添加lambda * sum(w_i^2)",
      "B) 在损失中添加lambda * sum(|w_i|)，通过将某些权重驱动到恰好为零来促进稀疏性",
      "C) 随机移除特征",
      "D) 增加学习率"
    ],
    answer: 1,
    explanation: "Lasso adds the sum of absolute weight values as a penalty. The L1 norm creates a diamond-shaped constraint region where the optimal solution often lies at corners, setting some weights exactly to zero. This performs automatic feature selection, making the model simpler and more interpretable.",
    explanationChinese: "Lasso添加权重绝对值之和作为惩罚。L1范数创建菱形约束区域，最优解通常在角点处，将某些权重设为恰好零。这执行自动特征选择，使模型更简单和更可解释。",
    diagram: "",
    terms: ["regularization", "linear_regression", "feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 217,
    q: "What is L2 regularization (Ridge)?",
    qChinese: "L2正则化（Ridge）是什么？",
    options: [
      "A) Adding lambda * sum(|w_i|) to the loss",
      "B) Removing outliers",
      "C) Doubling the features",
      "D) Adding lambda * sum(w_i^2) to the loss, shrinking weights toward zero without eliminating them",
    ],
    optionsChinese: [
      "A) 在损失中添加lambda * sum(|w_i|)",
      "B) 移除异常值",
      "C) 将特征加倍",
      "D) 在损失中添加lambda * sum(w_i^2)，将权重向零收缩但不消除它们",
    ],
    answer: 3,
    explanation: "Ridge regression adds the sum of squared weights as a penalty. The L2 norm creates a circular constraint region, shrinking all weights proportionally but never to exactly zero. Ridge is effective against multicollinearity, stabilizing coefficient estimates. It has a closed-form solution: w = (X^T X + lambda*I)^{-1} X^T y.",
    explanationChinese: "岭回归添加权重平方和作为惩罚。L2范数创建圆形约束区域，按比例收缩所有权重但永远不到恰好零。Ridge对多重共线性有效，稳定系数估计。它有闭式解：w = (X^T X + lambda*I)^{-1} X^T y。",
    diagram: "",
    terms: ["regularization", "linear_regression"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 218,
    q: "What is the key difference between L1 and L2 regularization in terms of sparsity?",
    qChinese: "L1和L2正则化在稀疏性方面的关键区别是什么？",
    options: [
      "A) Both produce equally sparse models",
      "B) L2 produces sparser solutions than L1",
      "C) L1 produces sparse solutions (exact zeros); L2 shrinks weights but keeps all non-zero",
      "D) Neither affects sparsity"
    ],
    optionsChinese: [
      "A) 两者产生同样稀疏的模型",
      "B) L2产生比L1更稀疏的解",
      "C) L1产生稀疏解（恰好为零）；L2收缩权重但保持全部非零",
      "D) 两者都不影响稀疏性"
    ],
    answer: 2,
    explanation: "The L1 penalty has corners at the axes where weights equal zero, making it geometrically favorable for the constrained optimum to hit these corners. L2 has a smooth circular boundary with no corners, so weights are shrunk but rarely reach exactly zero. L1 is preferred when feature selection is desired.",
    explanationChinese: "L1惩罚在权重等于零的轴处有角点，使约束最优在几何上有利于到达这些角点。L2有平滑的圆形边界没有角点，因此权重被收缩但很少恰好达到零。当需要特征选择时L1更受青睐。",
    diagram: "",
    terms: ["regularization", "feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 219,
    q: "What is Elastic Net regularization?",
    qChinese: "弹性网络正则化是什么？",
    options: [
      "A) Only L1 regularization",
      "B) A type of neural network",
      "C) A combination of L1 and L2 regularization: lambda1*||w||_1 + lambda2*||w||_2^2",
      "D) Regularization without any penalty"
    ],
    optionsChinese: [
      "A) 仅L1正则化",
      "B) 一种神经网络",
      "C) L1和L2正则化的组合：lambda1*||w||_1 + lambda2*||w||_2^2",
      "D) 没有任何惩罚的正则化"
    ],
    answer: 2,
    explanation: "Elastic Net combines L1 and L2 penalties, controlled by a mixing parameter alpha (0=Ridge, 1=Lasso). It inherits L1's feature selection ability and L2's stability with correlated features. When features are highly correlated, Lasso tends to select one arbitrarily; Elastic Net can select groups of correlated features together.",
    explanationChinese: "弹性网络组合L1和L2惩罚，由混合参数alpha控制（0=Ridge，1=Lasso）。它继承了L1的特征选择能力和L2对相关特征的稳定性。当特征高度相关时，Lasso倾向于任意选择一个；弹性网络可以一起选择相关特征组。",
    diagram: "",
    terms: ["regularization", "linear_regression", "feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 220,
    q: "How does the regularization parameter lambda affect model complexity?",
    qChinese: "正则化参数lambda如何影响模型复杂度？",
    options: [
      "A) Larger lambda increases model complexity",
      "B) Lambda only affects training speed",
      "C) Lambda has no effect on complexity",
      "D) Larger lambda decreases model complexity by penalizing large weights more",
    ],
    optionsChinese: [
      "A) 较大的lambda增加模型复杂度",
      "B) Lambda只影响训练速度",
      "C) Lambda对复杂度没有影响",
      "D) 较大的lambda通过更多惩罚大权重来降低模型复杂度",
    ],
    answer: 3,
    explanation: "Lambda controls the strength of regularization. Large lambda applies strong penalties, forcing weights toward zero and producing simpler models (higher bias, lower variance). Small lambda applies weak penalties, allowing complex models (lower bias, higher variance). Lambda=0 is unregularized. Optimal lambda is found via cross-validation.",
    explanationChinese: "Lambda控制正则化强度。大lambda应用强惩罚，迫使权重趋向零产生更简单的模型（更高偏差，更低方差）。小lambda应用弱惩罚，允许复杂模型（更低偏差，更高方差）。Lambda=0是无正则化。最优lambda通过交叉验证找到。",
    diagram: "",
    terms: ["regularization", "bias_variance_tradeoff"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 221,
    q: "Why does Ridge regression help with multicollinearity?",
    qChinese: "为什么岭回归有助于解决多重共线性？",
    options: [
      "A) It removes correlated features",
      "B) It uses a different loss function",
      "C) Adding lambda*I to X^T X makes the matrix invertible and stabilizes coefficient estimates",
      "D) It converts features to be independent"
    ],
    optionsChinese: [
      "A) 它移除相关特征",
      "B) 它使用不同的损失函数",
      "C) 向X^T X添加lambda*I使矩阵可逆并稳定系数估计",
      "D) 它将特征转换为独立的"
    ],
    answer: 2,
    explanation: "Multicollinearity makes X^T X nearly singular, inflating coefficient variance. Ridge adds lambda*I to the diagonal: w = (X^T X + lambda*I)^{-1} X^T y. This ensures the matrix is always invertible and shrinks coefficients of correlated features, distributing the effect more evenly and reducing variance.",
    explanationChinese: "多重共线性使X^T X接近奇异，膨胀系数方差。Ridge在对角线添加lambda*I：w = (X^T X + lambda*I)^{-1} X^T y。这确保矩阵始终可逆并收缩相关特征的系数，更均匀地分配效果并减少方差。",
    diagram: "",
    terms: ["regularization", "linear_regression"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 222,
    q: "How does Lasso perform feature selection?",
    qChinese: "Lasso如何执行特征选择？",
    options: [
      "A) By randomly removing features",
      "B) By sorting features by variance",
      "C) By setting coefficients of irrelevant features to exactly zero via the L1 penalty",
      "D) By using mutual information"
    ],
    optionsChinese: [
      "A) 随机移除特征",
      "B) 按方差排序特征",
      "C) 通过L1惩罚将不相关特征的系数设为恰好零",
      "D) 使用互信息"
    ],
    answer: 2,
    explanation: "The L1 penalty's geometry (diamond shape) causes the optimal solution to often lie at corners where one or more weights are zero. As lambda increases, more features get zeroed out. The remaining non-zero features are the selected ones. This embedded feature selection is a key advantage of Lasso over Ridge.",
    explanationChinese: "L1惩罚的几何形状（菱形）导致最优解通常在一个或多个权重为零的角点处。随着lambda增加，更多特征被置零。剩余的非零特征是被选择的。这种嵌入式特征选择是Lasso相比Ridge的关键优势。",
    diagram: "",
    terms: ["regularization", "feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 223,
    q: "What is the regularization path?",
    qChinese: "正则化路径是什么？",
    options: [
      "A) A plot of coefficient values as a function of the regularization parameter lambda",
      "B) The training data path",
      "C) The gradient descent trajectory",
      "D) The file path to the model"
    ],
    optionsChinese: [
      "A) 系数值作为正则化参数lambda函数的图",
      "B) 训练数据路径",
      "C) 梯度下降轨迹",
      "D) 模型的文件路径"
    ],
    answer: 0,
    explanation: "The regularization path shows how each feature's coefficient changes as lambda varies from 0 (no regularization) to infinity (all zeros). For Lasso, features drop to zero at different lambda values, revealing their relative importance. Algorithms like LARS can efficiently compute the entire Lasso path.",
    explanationChinese: "正则化路径显示当lambda从0（无正则化）到无穷大（全部为零）变化时每个特征的系数如何变化。对于Lasso，特征在不同lambda值处降为零，揭示其相对重要性。LARS等算法可以高效计算整个Lasso路径。",
    diagram: "",
    terms: ["regularization", "feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 224,
    q: "What is the relationship between regularization and the bias-variance tradeoff?",
    qChinese: "正则化与偏差-方差权衡有什么关系？",
    options: [
      "A) Regularization has no effect on bias or variance",
      "B) Regularization only affects bias",
      "C) Regularization decreases both bias and variance",
      "D) Regularization increases bias slightly but decreases variance, often reducing total error",
    ],
    optionsChinese: [
      "A) 正则化对偏差或方差没有影响",
      "B) 正则化只影响偏差",
      "C) 正则化同时减少偏差和方差",
      "D) 正则化略微增加偏差但减少方差，通常减少总误差",
    ],
    answer: 3,
    explanation: "By constraining model weights, regularization prevents the model from fitting noise (reducing variance) at the cost of slightly biasing the model away from the true parameters (increasing bias). The optimal lambda minimizes the total error (bias^2 + variance). This tradeoff is fundamental to all regularization techniques.",
    explanationChinese: "通过约束模型权重，正则化防止模型拟合噪声（减少方差），代价是将模型略微偏离真实参数（增加偏差）。最优lambda最小化总误差（偏差^2 + 方差）。此权衡对所有正则化技术都是基本的。",
    diagram: "",
    terms: ["regularization", "bias_variance_tradeoff"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 225,
    q: "In scikit-learn's LogisticRegression, what does the parameter C represent?",
    qChinese: "在scikit-learn的LogisticRegression中，参数C代表什么？",
    options: [
      "A) The number of classes",
      "B) The number of features",
      "C) The inverse of regularization strength (C = 1/lambda)",
      "D) The learning rate"
    ],
    optionsChinese: [
      "A) 类的数量",
      "B) 特征的数量",
      "C) 正则化强度的倒数（C = 1/lambda）",
      "D) 学习率"
    ],
    answer: 2,
    explanation: "C = 1/lambda in scikit-learn. Smaller C means stronger regularization (more penalty on large weights). Larger C means weaker regularization, allowing the model more freedom. C=1 is the default. This convention is also used in SVMs. The optimal C is typically found using cross-validation with grid or random search.",
    explanationChinese: "在scikit-learn中C = 1/lambda。较小的C意味着更强的正则化（对大权重更多惩罚）。较大的C意味着更弱的正则化，允许模型更多自由。C=1是默认值。此约定在SVM中也使用。最优C通常使用网格或随机搜索的交叉验证找到。",
    diagram: "",
    terms: ["regularization", "logistic_regression", "cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 226,
    q: "What is dropout and how is it a form of regularization?",
    qChinese: "什么是dropout，它如何作为一种正则化形式？",
    options: [
      "A) Randomly deactivating neurons during training to prevent co-adaptation and reduce overfitting",
      "B) Removing training samples",
      "C) Dropping features permanently",
      "D) Reducing the learning rate"
    ],
    optionsChinese: [
      "A) 在训练期间随机停用神经元以防止协同适应并减少过拟合",
      "B) 移除训练样本",
      "C) 永久丢弃特征",
      "D) 降低学习率"
    ],
    answer: 0,
    explanation: "Dropout randomly sets a fraction of neuron activations to zero during each training iteration. This prevents neurons from co-adapting and forces the network to learn redundant representations. It acts as an ensemble of many sub-networks. At test time, all neurons are active with scaled weights.",
    explanationChinese: "Dropout在每次训练迭代中随机将一部分神经元激活设为零。这防止神经元协同适应并迫使网络学习冗余表示。它作为许多子网络的集成。在测试时，所有神经元都活跃且权重经过缩放。",
    diagram: "",
    terms: ["regularization", "overfitting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 227,
    q: "What is weight decay and how does it relate to L2 regularization?",
    qChinese: "权重衰减是什么，它与L2正则化有什么关系？",
    options: [
      "A) They are unrelated concepts",
      "B) Weight decay multiplies weights by a factor < 1 each step, equivalent to L2 regularization for SGD",
      "C) Weight decay increases weights over time",
      "D) Weight decay is a type of L1 regularization"
    ],
    optionsChinese: [
      "A) 它们是不相关的概念",
      "B) 权重衰减每步将权重乘以<1的因子，对SGD等价于L2正则化",
      "C) 权重衰减随时间增加权重",
      "D) 权重衰减是L1正则化的一种"
    ],
    answer: 1,
    explanation: "Weight decay subtracts a small fraction of the current weights at each update: w = w - lr*(gradient + lambda*w). For standard SGD, this is mathematically equivalent to adding lambda/2 * ||w||^2 to the loss (L2 regularization). For adaptive optimizers like Adam, weight decay and L2 regularization differ slightly.",
    explanationChinese: "权重衰减在每次更新时减去当前权重的一小部分：w = w - lr*(梯度 + lambda*w)。对于标准SGD，这在数学上等价于在损失中添加lambda/2 * ||w||^2（L2正则化）。对于Adam等自适应优化器，权重衰减和L2正则化略有不同。",
    diagram: "",
    terms: ["regularization", "gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 228,
    q: "When should you choose Lasso over Ridge regression?",
    qChinese: "什么时候应该选择Lasso而不是Ridge回归？",
    options: [
      "A) Always",
      "B) When the dataset is very small",
      "C) When all features are equally important",
      "D) When you believe only a few features are truly relevant and want automatic feature selection",
    ],
    optionsChinese: [
      "A) 总是",
      "B) 当数据集非常小时",
      "C) 当所有特征同等重要时",
      "D) 当你认为只有少数特征真正相关并需要自动特征选择时",
    ],
    answer: 3,
    explanation: "Lasso is preferred when the true model is sparse (few important features among many). It eliminates irrelevant features by setting their coefficients to zero. Ridge is better when many features contribute small effects. If unsure, Elastic Net combines both. Cross-validation helps determine which regularization type works best.",
    explanationChinese: "当真实模型是稀疏的（许多特征中只有少数重要）时Lasso更受青睐。它通过将不相关特征的系数设为零来消除它们。当许多特征贡献小效果时Ridge更好。如果不确定，弹性网络组合两者。交叉验证帮助确定哪种正则化类型最好。",
    diagram: "",
    terms: ["regularization", "feature_engineering", "cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 229,
    q: "What is the geometric interpretation of L1 vs L2 regularization?",
    qChinese: "L1 vs L2正则化的几何解释是什么？",
    options: [
      "A) L1 creates a diamond constraint; L2 creates a circular constraint; the diamond's corners cause sparsity",
      "B) Both create circular constraints",
      "C) L1 creates a spherical constraint",
      "D) Neither has a geometric interpretation"
    ],
    optionsChinese: [
      "A) L1创建菱形约束；L2创建圆形约束；菱形的角点导致稀疏性",
      "B) 两者都创建圆形约束",
      "C) L1创建球形约束",
      "D) 两者都没有几何解释"
    ],
    answer: 0,
    explanation: "The constraint region for L1 (||w||_1 <= t) is a diamond in 2D. For L2 (||w||_2 <= t) it is a circle. The loss function contours typically intersect the diamond at corners (where some w_i=0), producing sparse solutions. The circle has no corners, so intersections have all non-zero weights.",
    explanationChinese: "L1（||w||_1 <= t）的约束区域在2D中是菱形。L2（||w||_2 <= t）是圆形。损失函数等高线通常在菱形角点（某些w_i=0）处相交，产生稀疏解。圆形没有角点，因此交点的所有权重都非零。",
    diagram: "",
    terms: ["regularization", "gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 230,
    q: "What problem can Lasso have with highly correlated features?",
    qChinese: "Lasso对高度相关的特征会有什么问题？",
    options: [
      "A) It handles them perfectly",
      "B) It keeps all correlated features",
      "C) It tends to arbitrarily select one feature from a correlated group and zero out the rest",
      "D) It increases all their coefficients"
    ],
    optionsChinese: [
      "A) 它完美处理",
      "B) 它保留所有相关特征",
      "C) 它倾向于从相关组中任意选择一个特征并将其余置零",
      "D) 它增加所有它们的系数"
    ],
    answer: 2,
    explanation: "When features are highly correlated, Lasso arbitrarily picks one and discards others, making results unstable. The selected feature may change with small data perturbations. Elastic Net addresses this by grouping correlated features together, selecting or excluding them as a group due to the L2 component.",
    explanationChinese: "当特征高度相关时，Lasso任意选择一个并丢弃其他，使结果不稳定。选择的特征可能随小数据扰动而改变。弹性网络通过将相关特征分组来解决此问题，由于L2成分将它们作为一组选择或排除。",
    diagram: "",
    terms: ["regularization", "feature_engineering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 231,
    q: "What is data augmentation and how does it act as regularization?",
    qChinese: "数据增强是什么，它如何作为正则化？",
    options: [
      "A) Removing data to reduce overfitting",
      "B) Augmenting features with polynomial terms",
      "C) Creating modified copies of training data to increase diversity and reduce overfitting",
      "D) Adding noise to the loss function"
    ],
    optionsChinese: [
      "A) 移除数据以减少过拟合",
      "B) 用多项式项增强特征",
      "C) 创建训练数据的修改副本以增加多样性并减少过拟合",
      "D) 向损失函数添加噪声"
    ],
    answer: 2,
    explanation: "Data augmentation creates new training examples by applying transformations (rotations, flips, crops for images; paraphrasing for text). This increases the effective training set size and diversity without collecting new data. It acts as regularization by preventing the model from memorizing specific training examples.",
    explanationChinese: "数据增强通过应用变换（图像的旋转、翻转、裁剪；文本的改写）创建新训练样本。这增加了有效训练集大小和多样性而无需收集新数据。它通过防止模型记忆特定训练样本来起正则化作用。",
    diagram: "",
    terms: ["regularization", "overfitting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 232,
    q: "What is the effect of regularization on the training loss?",
    qChinese: "正则化对训练损失有什么影响？",
    options: [
      "A) Training loss always decreases with regularization",
      "B) Regularization has no effect on training loss",
      "C) Training loss typically increases because the penalty prevents the model from perfectly fitting training data",
      "D) Training loss becomes zero"
    ],
    optionsChinese: [
      "A) 训练损失总是随正则化减少",
      "B) 正则化对训练损失没有影响",
      "C) 训练损失通常增加因为惩罚阻止模型完美拟合训练数据",
      "D) 训练损失变为零"
    ],
    answer: 2,
    explanation: "Regularization adds a penalty term that constrains model complexity. The model can no longer minimize training loss as freely, so training loss increases. However, test/validation loss typically decreases because the model generalizes better. This is the essence of the bias-variance tradeoff that regularization exploits.",
    explanationChinese: "正则化添加约束模型复杂度的惩罚项。模型不能再自由地最小化训练损失，因此训练损失增加。但测试/验证损失通常减少因为模型泛化更好。这是正则化利用的偏差-方差权衡的本质。",
    diagram: "",
    terms: ["regularization", "bias_variance_tradeoff", "overfitting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 233,
    q: "What is the LARS (Least Angle Regression) algorithm?",
    qChinese: "LARS（最小角度回归）算法是什么？",
    options: [
      "A) A clustering algorithm",
      "B) An efficient algorithm for computing the entire Lasso regularization path",
      "C) A variant of gradient descent",
      "D) A dimensionality reduction method"
    ],
    optionsChinese: [
      "A) 聚类算法",
      "B) 用于计算整个Lasso正则化路径的高效算法",
      "C) 梯度下降的变体",
      "D) 降维方法"
    ],
    answer: 1,
    explanation: "LARS efficiently computes the full Lasso path (solutions for all lambda values) with cost similar to a single OLS fit. It starts with all coefficients at zero and incrementally adds features, adjusting coefficients to maintain equal correlation with the residual. This is much faster than solving Lasso for many lambda values separately.",
    explanationChinese: "LARS高效计算完整的Lasso路径（所有lambda值的解），成本与单次OLS拟合相似。它从所有系数为零开始，逐步添加特征，调整系数以保持与残差的相等相关性。这比分别对许多lambda值求解Lasso快得多。",
    diagram: "",
    terms: ["regularization", "linear_regression"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 234,
    q: "How does cross-validation help select the regularization parameter?",
    qChinese: "交叉验证如何帮助选择正则化参数？",
    options: [
      "A) It selects the largest possible lambda",
      "B) It automatically sets lambda to zero",
      "C) It eliminates the need for regularization",
      "D) It evaluates model performance for different lambda values and selects the one with best validation score",
    ],
    optionsChinese: [
      "A) 它选择最大可能的lambda",
      "B) 它自动将lambda设为零",
      "C) 它消除了对正则化的需要",
      "D) 它评估不同lambda值的模型性能并选择验证分数最好的",
    ],
    answer: 3,
    explanation: "For each candidate lambda value, k-fold CV computes the average validation error. The lambda with the lowest validation error (or within one standard error of the minimum for simpler models) is selected. LassoCV and RidgeCV in scikit-learn automate this process efficiently using path-based algorithms.",
    explanationChinese: "对每个候选lambda值，k折CV计算平均验证误差。选择验证误差最低（或在最小值一个标准误差内以获得更简单模型）的lambda。scikit-learn中的LassoCV和RidgeCV使用基于路径的算法高效自动化此过程。",
    diagram: "",
    terms: ["regularization", "cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 235,
    q: "What is the Bayesian interpretation of regularization?",
    qChinese: "正则化的贝叶斯解释是什么？",
    options: [
      "A) L2 regularization corresponds to a Gaussian prior on weights; L1 corresponds to a Laplace prior",
      "B) Regularization has no Bayesian interpretation",
      "C) Regularization corresponds to a uniform prior",
      "D) Only L1 has a Bayesian interpretation"
    ],
    optionsChinese: [
      "A) L2正则化对应权重的高斯先验；L1对应拉普拉斯先验",
      "B) 正则化没有贝叶斯解释",
      "C) 正则化对应均匀先验",
      "D) 只有L1有贝叶斯解释"
    ],
    answer: 0,
    explanation: "From a Bayesian view, regularization equals maximizing the posterior (MAP estimate). L2 penalty equals a zero-mean Gaussian prior on weights (favoring small weights). L1 penalty equals a Laplace prior (peaked at zero, favoring sparsity). The regularization strength lambda relates to the prior precision.",
    explanationChinese: "从贝叶斯角度看，正则化等于最大化后验（MAP估计）。L2惩罚等于权重的零均值高斯先验（偏好小权重）。L1惩罚等于拉普拉斯先验（在零处尖峰，偏好稀疏性）。正则化强度lambda与先验精度相关。",
    diagram: "",
    terms: ["regularization", "naive_bayes"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 236,
    q: "In stacking, what role does the meta-learner play?",
    qChinese: "在堆叠法中，元学习器起什么作用？",
    options: [
      "A) It replaces all base learners with a single model",
      "B) It learns how to optimally combine the predictions of base learners",
      "C) It performs feature selection before base learners train",
      "D) It duplicates the training data for each base learner"
    ],
    optionsChinese: [
      "A) 它用单个模型替换所有基学习器",
      "B) 它学习如何最优地组合基学习器的预测",
      "C) 它在基学习器训练之前执行特征选择",
      "D) 它为每个基学习器复制训练数据"
    ],
    answer: 1,
    explanation: "In stacking, multiple base learners produce predictions that are fed as input features to a meta-learner (also called a level-1 model). The meta-learner then learns the optimal way to combine these predictions, often outperforming any single base model by leveraging their complementary strengths.",
    explanationChinese: "在堆叠法中，多个基学习器产生的预测作为输入特征传递给元学习器（也称为一级模型）。元学习器随后学习组合这些预测的最优方式，通常通过利用各模型的互补优势而优于任何单个基模型。",
    diagram: "",
    terms: ["ensemble_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 237,
    q: "What is the key difference between stacking and blending?",
    qChinese: "堆叠法和混合法之间的关键区别是什么？",
    options: [
      "A) Blending uses cross-validated out-of-fold predictions while stacking uses a holdout set",
      "B) Stacking uses cross-validated out-of-fold predictions while blending uses a single holdout set",
      "C) Blending can only use two models",
      "D) Stacking requires all base models to be the same type"
    ],
    optionsChinese: [
      "A) 混合法使用交叉验证的折外预测，而堆叠法使用保留集",
      "B) 堆叠法使用交叉验证的折外预测，而混合法使用单个保留集",
      "C) 混合法只能使用两个模型",
      "D) 堆叠法要求所有基模型为相同类型"
    ],
    answer: 1,
    explanation: "Stacking generates meta-features through cross-validated out-of-fold predictions, using all training data efficiently. Blending is simpler: it splits data into a training portion for base learners and a holdout portion to generate meta-features. Blending is faster but uses less data for training the meta-learner.",
    explanationChinese: "堆叠法通过交叉验证的折外预测生成元特征，高效利用所有训练数据。混合法更简单：将数据分为用于基学习器的训练部分和用于生成元特征的保留部分。混合法更快但用于训练元学习器的数据更少。",
    diagram: "",
    terms: ["ensemble_learning", "cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 238,
    q: "Why is it important to use out-of-fold predictions when training the meta-learner in stacking?",
    qChinese: "为什么在堆叠法中训练元学习器时使用折外预测很重要？",
    options: [
      "A) To speed up training time",
      "B) To ensure all base learners use the same hyperparameters",
      "C) To reduce the number of base learners needed",
      "D) To prevent the meta-learner from overfitting to the base learners' training predictions",
    ],
    optionsChinese: [
      "A) 为了加速训练时间",
      "B) 为了确保所有基学习器使用相同的超参数",
      "C) 为了减少所需的基学习器数量",
      "D) 为了防止元学习器对基学习器的训练预测过拟合",
    ],
    answer: 3,
    explanation: "If the meta-learner trains on base learners' predictions of data they already saw, those predictions will be overly optimistic and the meta-learner will overfit. Out-of-fold predictions ensure each sample's meta-feature was generated by a model that never trained on that sample, providing honest estimates.",
    explanationChinese: "如果元学习器在基学习器已经见过的数据预测上进行训练，这些预测将过于乐观，元学习器将过拟合。折外预测确保每个样本的元特征由从未在该样本上训练过的模型生成，提供诚实的估计。",
    diagram: "",
    terms: ["ensemble_learning", "cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 239,
    q: "Which combination of base learners is generally most effective in a stacking ensemble?",
    qChinese: "在堆叠集成中，哪种基学习器组合通常最有效？",
    options: [
      "A) Diverse models that make different types of errors",
      "B) Only linear models to keep predictions simple",
      "C) Multiple copies of the same model with the same hyperparameters",
      "D) The single best model repeated with different random seeds"
    ],
    optionsChinese: [
      "A) 产生不同类型错误的多样化模型",
      "B) 仅线性模型以保持预测简单",
      "C) 具有相同超参数的同一模型的多个副本",
      "D) 用不同随机种子重复的单个最佳模型"
    ],
    answer: 0,
    explanation: "Stacking benefits most from diversity among base learners. Models that make different kinds of errors (e.g., a decision tree, a linear model, and a neural network) provide complementary information to the meta-learner. If all base learners are similar, stacking offers little advantage over a single model.",
    explanationChinese: "堆叠法从基学习器的多样性中获益最多。产生不同类型错误的模型（如决策树、线性模型和神经网络）为元学习器提供互补信息。如果所有基学习器相似，堆叠法相比单个模型几乎没有优势。",
    diagram: "",
    terms: ["ensemble_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 240,
    q: "What does mutual information measure in the context of feature selection?",
    qChinese: "在特征选择的背景下，互信息衡量什么？",
    options: [
      "A) The linear correlation between a feature and the target",
      "B) The variance of a feature in the dataset",
      "C) The amount of information gained about the target by observing the feature, capturing both linear and nonlinear dependencies",
      "D) The number of unique values in a feature",
    ],
    optionsChinese: [
      "A) 特征与目标之间的线性相关性",
      "B) 数据集中特征的方差",
      "C) 通过观察特征获得的关于目标的信息量，捕获线性和非线性依赖关系",
      "D) 特征中唯一值的数量",
    ],
    answer: 2,
    explanation: "Mutual information quantifies the reduction in uncertainty about the target variable when the value of a feature is known. Unlike Pearson correlation, it captures any statistical dependency, including nonlinear relationships. A mutual information of zero indicates the feature and target are statistically independent.",
    explanationChinese: "互信息量化了当已知特征值时目标变量不确定性的减少量。与皮尔逊相关不同，它捕获任何统计依赖关系，包括非线性关系。互信息为零表示特征与目标统计独立。",
    diagram: "",
    terms: ["feature_selection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 241,
    q: "Which of the following best describes a wrapper method for feature selection?",
    qChinese: "以下哪项最好地描述了特征选择的包装法？",
    options: [
      "A) It ranks features by statistical tests independent of any model",
      "B) It uses the model's internal feature importance scores",
      "C) It evaluates subsets of features by training and scoring a model on each subset",
      "D) It removes features with low variance before training"
    ],
    optionsChinese: [
      "A) 它通过与模型无关的统计测试对特征排名",
      "B) 它使用模型内部的特征重要性分数",
      "C) 它通过在每个子集上训练和评分模型来评估特征子集",
      "D) 它在训练前删除低方差特征"
    ],
    answer: 2,
    explanation: "Wrapper methods (e.g., forward selection, backward elimination, recursive feature elimination) treat the model as a black box and evaluate different feature subsets by measuring model performance. They are more computationally expensive than filter methods but often find better feature subsets tailored to the specific model.",
    explanationChinese: "包装法（如前向选择、后向消除、递归特征消除）将模型视为黑盒，通过衡量模型性能来评估不同的特征子集。它们比过滤法计算成本更高，但通常能找到针对特定模型更好的特征子集。",
    diagram: "",
    terms: ["feature_selection", "cross_validation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 242,
    q: "In recursive feature elimination (RFE), how are features removed?",
    qChinese: "在递归特征消除（RFE）中，特征是如何被移除的？",
    options: [
      "A) All features below a fixed importance threshold are removed at once",
      "B) The least important feature(s) according to the model are removed iteratively, and the model is retrained",
      "C) Features with the highest correlation to each other are removed",
      "D) Features are removed randomly in each iteration",
    ],
    optionsChinese: [
      "A) 低于固定重要性阈值的所有特征一次性移除",
      "B) 根据模型，最不重要的特征被迭代移除，然后重新训练模型",
      "C) 彼此相关性最高的特征被移除",
      "D) 每次迭代随机移除特征",
    ],
    answer: 1,
    explanation: "RFE works by repeatedly training the model, ranking features by importance, removing the least important feature(s), and repeating until the desired number of features remains. This iterative approach accounts for interactions between features, as removing one feature can change the importance of others.",
    explanationChinese: "RFE通过反复训练模型、按重要性排列特征、移除最不重要的特征、重复直到剩余所需数量的特征来工作。这种迭代方法考虑了特征之间的交互作用，因为移除一个特征可能改变其他特征的重要性。",
    diagram: "",
    terms: ["feature_selection", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 243,
    q: "What is a key advantage of mutual information over Pearson correlation for feature selection?",
    qChinese: "与皮尔逊相关相比，互信息在特征选择中的关键优势是什么？",
    options: [
      "A) Mutual information detects both linear and nonlinear dependencies between variables",
      "B) Mutual information only measures linear relationships",
      "C) Mutual information requires fewer data samples",
      "D) Mutual information is faster to compute",
    ],
    optionsChinese: [
      "A) 互信息检测变量之间的线性和非线性依赖关系",
      "B) 互信息只衡量线性关系",
      "C) 互信息需要更少的数据样本",
      "D) 互信息计算更快",
    ],
    answer: 0,
    explanation: "Pearson correlation only captures linear relationships, so it can miss important nonlinear patterns. Mutual information, rooted in information theory, detects any form of statistical dependency. This makes it a more general and powerful tool for feature selection, especially when relationships are complex.",
    explanationChinese: "皮尔逊相关只捕获线性关系，因此可能遗漏重要的非线性模式。互信息植根于信息论，能检测任何形式的统计依赖。这使其成为更通用和强大的特征选择工具，尤其当关系复杂时。",
    diagram: "",
    terms: ["feature_selection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 244,
    q: "How does the Adam optimizer combine the benefits of momentum and RMSprop?",
    qChinese: "Adam优化器如何结合动量法和RMSprop的优点？",
    options: [
      "A) It uses only the first moment (mean) of gradients",
      "B) It maintains exponential moving averages of both the first moment (mean) and the second moment (uncentered variance) of gradients",
      "C) It applies a fixed learning rate with gradient clipping",
      "D) It randomly switches between momentum and RMSprop at each step"
    ],
    optionsChinese: [
      "A) 它只使用梯度的一阶矩（均值）",
      "B) 它维护梯度的一阶矩（均值）和二阶矩（无中心方差）的指数移动平均",
      "C) 它应用固定学习率和梯度裁剪",
      "D) 它在每一步随机切换动量法和RMSprop"
    ],
    answer: 1,
    explanation: "Adam (Adaptive Moment Estimation) tracks both the first moment (like momentum, providing direction) and the second moment (like RMSprop, providing per-parameter adaptive learning rates). It also includes bias correction for both moments during the initial training steps, ensuring stable updates from the start.",
    explanationChinese: "Adam（自适应矩估计）同时跟踪一阶矩（类似动量法，提供方向）和二阶矩（类似RMSprop，提供每参数自适应学习率）。它还包括对训练初始阶段两个矩的偏差校正，确保从一开始就有稳定的更新。",
    diagram: "",
    terms: ["gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 245,
    q: "What problem does RMSprop solve compared to vanilla gradient descent with a fixed learning rate?",
    qChinese: "与使用固定学习率的普通梯度下降相比，RMSprop解决了什么问题？",
    options: [
      "A) It eliminates the need for backpropagation",
      "B) It adapts the learning rate for each parameter based on the magnitude of recent gradients",
      "C) It ensures the loss function is always convex",
      "D) It guarantees convergence to the global minimum"
    ],
    optionsChinese: [
      "A) 它消除了反向传播的需要",
      "B) 它根据最近梯度的大小为每个参数自适应调整学习率",
      "C) 它确保损失函数始终是凸的",
      "D) 它保证收敛到全局最小值"
    ],
    answer: 1,
    explanation: "RMSprop divides the learning rate for each parameter by the root mean square of its recent gradients. Parameters with large gradients get smaller effective learning rates, and those with small gradients get larger ones. This prevents oscillation in steep directions and speeds up progress in flat directions.",
    explanationChinese: "RMSprop将每个参数的学习率除以其最近梯度的均方根。梯度大的参数获得较小的有效学习率，梯度小的参数获得较大的有效学习率。这防止了在陡峭方向上的振荡，加速了在平坦方向上的进展。",
    diagram: "",
    terms: ["gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 246,
    q: "What is the purpose of a learning rate warm-up schedule?",
    qChinese: "学习率预热调度的目的是什么？",
    options: [
      "A) To randomly perturb the learning rate each epoch",
      "B) To keep the learning rate constant throughout training",
      "C) To immediately set the learning rate to its maximum value",
      "D) To gradually increase the learning rate from a small value at the start of training before applying decay",
    ],
    optionsChinese: [
      "A) 每个周期随机扰动学习率",
      "B) 在整个训练过程中保持学习率不变",
      "C) 立即将学习率设置为最大值",
      "D) 在应用衰减之前，在训练开始时从一个小值逐渐增加学习率",
    ],
    answer: 3,
    explanation: "Learning rate warm-up starts with a very small learning rate and gradually increases it to the target value over a set number of steps. This prevents early instability caused by large, noisy gradients when model weights are still randomly initialized. It is especially important for large batch training and transformer models.",
    explanationChinese: "学习率预热从非常小的学习率开始，在设定的步数内逐渐增加到目标值。这防止了当模型权重仍为随机初始化时大噪声梯度导致的早期不稳定性。它对大批量训练和Transformer模型尤为重要。",
    diagram: "",
    terms: ["gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 247,
    q: "In cosine annealing, how does the learning rate change over training?",
    qChinese: "在余弦退火中，学习率在训练过程中如何变化？",
    options: [
      "A) It decreases linearly to zero",
      "B) It follows a cosine curve, smoothly decreasing from the initial value toward zero",
      "C) It remains constant for half the training then drops to zero",
      "D) It increases exponentially throughout training"
    ],
    optionsChinese: [
      "A) 它线性下降到零",
      "B) 它遵循余弦曲线，从初始值平滑下降趋近于零",
      "C) 它在训练的前半段保持不变然后降到零",
      "D) 它在整个训练过程中指数增长"
    ],
    answer: 1,
    explanation: "Cosine annealing reduces the learning rate following the shape of a cosine function, resulting in a smooth decay from the initial learning rate toward zero (or a minimum value). The gradual reduction helps the optimizer settle into a good minimum. Variants with warm restarts periodically reset the learning rate to escape local minima.",
    explanationChinese: "余弦退火按照余弦函数的形状降低学习率，从初始学习率平滑衰减趋近于零（或最小值）。逐渐降低帮助优化器稳定在一个好的最小值。带热重启的变体周期性地重置学习率以逃离局部最小值。",
    diagram: "",
    terms: ["gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 248,
    q: "What does SHAP (SHapley Additive exPlanations) measure for a given prediction?",
    qChinese: "SHAP（SHapley Additive exPlanations）对给定预测衡量什么？",
    options: [
      "A) The accuracy of the model on the training set",
      "B) The correlation between features",
      "C) The optimal number of features to include in the model",
      "D) The contribution of each feature to the difference between the prediction and the average prediction"
    ],
    optionsChinese: [
      "A) 模型在训练集上的准确率",
      "B) 特征之间的相关性",
      "C) 模型中应包含的最优特征数量",
      "D) 每个特征对预测值与平均预测值之差的贡献"
    ],
    answer: 3,
    explanation: "SHAP values are based on Shapley values from cooperative game theory. For each prediction, SHAP assigns each feature a value representing its contribution to pushing the prediction away from the base value (average model output). SHAP values for all features sum exactly to the difference between the prediction and the base value.",
    explanationChinese: "SHAP值基于合作博弈论中的Shapley值。对于每个预测，SHAP为每个特征分配一个值，表示其将预测从基础值（模型平均输出）推离的贡献。所有特征的SHAP值之和恰好等于预测值与基础值之差。",
    diagram: "",
    terms: ["model_evaluation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 249,
    q: "How does LIME generate a local explanation for a complex model's prediction?",
    qChinese: "LIME如何为复杂模型的预测生成局部解释？",
    options: [
      "A) It perturbs the input, observes changes in output, and fits an interpretable model locally around that input",
      "B) It retrains the entire model with fewer features",
      "C) It replaces the complex model with a global linear model",
      "D) It computes exact Shapley values for all features"
    ],
    optionsChinese: [
      "A) 它扰动输入，观察输出变化，并在该输入周围局部拟合一个可解释模型",
      "B) 它用更少的特征重新训练整个模型",
      "C) 它用全局线性模型替换复杂模型",
      "D) 它计算所有特征的精确Shapley值"
    ],
    answer: 0,
    explanation: "LIME (Local Interpretable Model-agnostic Explanations) works by generating perturbed versions of the input, querying the black-box model on these perturbations, and then fitting a simple interpretable model (e.g., linear regression) to approximate the complex model's behavior in the local neighborhood of the instance being explained.",
    explanationChinese: "LIME（局部可解释的模型无关解释）通过生成输入的扰动版本、在这些扰动上查询黑盒模型，然后拟合一个简单的可解释模型（如线性回归）来近似复杂模型在被解释实例局部邻域中的行为。",
    diagram: "",
    terms: ["model_evaluation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 250,
    q: "What key property makes SHAP values theoretically preferred over many other feature attribution methods?",
    qChinese: "什么关键性质使SHAP值在理论上优于许多其他特征归因方法？",
    options: [
      "A) They are always faster to compute",
      "B) They work only with tree-based models",
      "C) They are the only method that satisfies local accuracy, missingness, and consistency axioms simultaneously",
      "D) They always produce positive importance values"
    ],
    optionsChinese: [
      "A) 它们的计算速度总是更快",
      "B) 它们只适用于基于树的模型",
      "C) 它们是唯一同时满足局部准确性、缺失性和一致性公理的方法",
      "D) 它们总是产生正的重要性值"
    ],
    answer: 2,
    explanation: "SHAP values are unique in satisfying three desirable axioms: local accuracy (feature attributions sum to the model output), missingness (missing features get zero attribution), and consistency (if a feature's contribution increases in a new model, its attribution should not decrease). These properties come from the Shapley value framework in game theory.",
    explanationChinese: "SHAP值在满足三个理想公理方面是唯一的：局部准确性（特征归因之和等于模型输出）、缺失性（缺失特征获得零归因）和一致性（如果特征在新模型中的贡献增加，其归因不应减少）。这些性质来自博弈论中的Shapley值框架。",
    diagram: "",
    terms: ["model_evaluation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 251,
    q: "What is a limitation of LIME's local explanations?",
    qChinese: "LIME局部解释的一个局限性是什么？",
    options: [
      "A) LIME can only be applied to linear models",
      "B) LIME explanations are always globally consistent across all inputs",
      "C) LIME explanations can be unstable, producing different explanations for similar inputs depending on the random perturbations",
      "D) LIME requires access to the model's internal weights",
    ],
    optionsChinese: [
      "A) LIME只能应用于线性模型",
      "B) LIME解释在所有输入上始终全局一致",
      "C) LIME解释可能不稳定，根据随机扰动对相似输入产生不同的解释",
      "D) LIME需要访问模型的内部权重",
    ],
    answer: 2,
    explanation: "Because LIME relies on random perturbations to build local explanations, running it multiple times on the same input can yield different results. The choice of neighborhood size and kernel width also affects explanations. This instability can reduce trust in the explanations, and practitioners often run LIME multiple times to check consistency.",
    explanationChinese: "由于LIME依赖随机扰动来构建局部解释，对同一输入多次运行可能产生不同结果。邻域大小和核宽度的选择也影响解释。这种不稳定性可能降低对解释的信任，实践者通常多次运行LIME来检查一致性。",
    diagram: "",
    terms: ["model_evaluation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 252,
    q: "What do the components (p, d, q) represent in an ARIMA(p, d, q) model?",
    qChinese: "在ARIMA(p, d, q)模型中，分量(p, d, q)代表什么？",
    options: [
      "A) p = autoregressive order, d = degree of differencing, q = moving average order",
      "B) p = number of features, d = depth of tree, q = number of quantiles",
      "C) p = precision, d = dimensionality, q = quality metric",
      "D) p = polynomial degree, d = decay rate, q = quantization level"
    ],
    optionsChinese: [
      "A) p = 自回归阶数，d = 差分阶数，q = 移动平均阶数",
      "B) p = 特征数量，d = 树的深度，q = 分位数数量",
      "C) p = 精确度，d = 维度，q = 质量指标",
      "D) p = 多项式阶数，d = 衰减率，q = 量化级别"
    ],
    answer: 0,
    explanation: "In ARIMA, p is the number of lagged observations used in the autoregressive part, d is the number of times the series is differenced to achieve stationarity, and q is the size of the moving average window applied to forecast errors. Together they model trend and temporal dependencies in time series data.",
    explanationChinese: "在ARIMA中，p是自回归部分使用的滞后观测值数量，d是为实现平稳性对序列进行差分的次数，q是应用于预测误差的移动平均窗口大小。它们共同对时间序列数据中的趋势和时间依赖性建模。",
    diagram: "",
    terms: ["supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 253,
    q: "Why is differencing applied in ARIMA models?",
    qChinese: "为什么在ARIMA模型中应用差分？",
    options: [
      "A) To make a non-stationary time series stationary by removing trends",
      "B) To remove seasonal patterns entirely from the data",
      "C) To increase the variance of the time series",
      "D) To reduce the number of parameters in the model"
    ],
    optionsChinese: [
      "A) 通过移除趋势使非平稳时间序列变为平稳",
      "B) 完全从数据中移除季节性模式",
      "C) 增加时间序列的方差",
      "D) 减少模型中的参数数量"
    ],
    answer: 0,
    explanation: "ARIMA requires the time series to be stationary (constant mean and variance over time). Differencing subtracts consecutive observations to remove trends. First-order differencing (d=1) removes a linear trend; second-order differencing (d=2) can handle quadratic trends. The Augmented Dickey-Fuller test helps determine if differencing is needed.",
    explanationChinese: "ARIMA要求时间序列是平稳的（均值和方差随时间恒定）。差分通过减去连续观测值来移除趋势。一阶差分（d=1）移除线性趋势；二阶差分（d=2）可处理二次趋势。增广Dickey-Fuller检验帮助确定是否需要差分。",
    diagram: "",
    terms: ["supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 254,
    q: "In seasonal decomposition, a time series is typically broken into which three components?",
    qChinese: "在季节性分解中，时间序列通常被分解为哪三个分量？",
    options: [
      "A) Mean, variance, and skewness",
      "B) Autocorrelation, partial autocorrelation, and lag",
      "C) Trend, seasonality, and residual (noise)",
      "D) Amplitude, frequency, and phase",
    ],
    optionsChinese: [
      "A) 均值、方差和偏度",
      "B) 自相关、偏自相关和滞后",
      "C) 趋势、季节性和残差（噪声）",
      "D) 振幅、频率和相位",
    ],
    answer: 2,
    explanation: "Seasonal decomposition separates a time series into trend (long-term direction), seasonality (repeating periodic patterns), and residual (random noise remaining after removing trend and seasonality). This can be additive (Y = T + S + R) or multiplicative (Y = T * S * R) depending on whether seasonal variation changes with the level of the series.",
    explanationChinese: "季节性分解将时间序列分为趋势（长期方向）、季节性（重复的周期性模式）和残差（移除趋势和季节性后剩余的随机噪声）。根据季节性变化是否随序列水平变化，可以是加法（Y = T + S + R）或乘法（Y = T × S × R）模型。",
    diagram: "",
    terms: ["supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 255,
    q: "What additional parameters does SARIMA add beyond standard ARIMA?",
    qChinese: "SARIMA在标准ARIMA之外增加了哪些额外参数？",
    options: [
      "A) Regularization strength and dropout rate",
      "B) Number of hidden layers and activation functions",
      "C) Learning rate and batch size",
      "D) Seasonal autoregressive order (P), seasonal differencing (D), seasonal moving average order (Q), and seasonal period (m)",
    ],
    optionsChinese: [
      "A) 正则化强度和丢弃率",
      "B) 隐藏层数量和激活函数",
      "C) 学习率和批量大小",
      "D) 季节自回归阶数(P)、季节差分(D)、季节移动平均阶数(Q)和季节周期(m)",
    ],
    answer: 3,
    explanation: "SARIMA extends ARIMA with seasonal components denoted (P, D, Q, m), where P is the seasonal autoregressive order, D is the seasonal differencing, Q is the seasonal moving average order, and m is the number of time steps per seasonal cycle. This allows the model to capture both non-seasonal and seasonal patterns in the data.",
    explanationChinese: "SARIMA用季节性分量(P, D, Q, m)扩展了ARIMA，其中P是季节自回归阶数，D是季节差分，Q是季节移动平均阶数，m是每个季节周期的时间步数。这使模型能够同时捕获数据中的非季节性和季节性模式。",
    diagram: "",
    terms: ["supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 256,
    q: "How does an isolation forest detect anomalies?",
    qChinese: "孤立森林如何检测异常？",
    options: [
      "A) By measuring the distance of each point to its nearest neighbors",
      "B) By clustering data and marking points that do not belong to any cluster",
      "C) By fitting a Gaussian distribution and flagging points beyond three standard deviations",
      "D) By randomly partitioning data with binary splits; anomalies are isolated in fewer splits on average",
    ],
    optionsChinese: [
      "A) 通过测量每个点到其最近邻的距离",
      "B) 通过聚类数据并标记不属于任何簇的点",
      "C) 通过拟合高斯分布并标记超出三个标准差的点",
      "D) 通过随机二元分割分区数据；异常值平均需要更少的分割即可被孤立",
    ],
    answer: 3,
    explanation: "Isolation forests build random trees by selecting random features and random split values. Anomalous points, being rare and different, are easier to isolate and thus have shorter average path lengths from the root to a leaf. Normal points require more splits to isolate. The anomaly score is derived from the average path length across all trees.",
    explanationChinese: "孤立森林通过选择随机特征和随机分割值构建随机树。异常点因为稀少且不同而更容易被孤立，因此从根到叶的平均路径长度更短。正常点需要更多分割才能被孤立。异常分数由所有树的平均路径长度得出。",
    diagram: "",
    terms: ["unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 257,
    q: "What is the main idea behind one-class SVM for anomaly detection?",
    qChinese: "用于异常检测的一类SVM的主要思想是什么？",
    options: [
      "A) It learns a boundary that encloses the normal data in feature space, treating anything outside as anomalous",
      "B) It clusters data into exactly two groups: normal and anomalous",
      "C) It trains on both normal and anomalous examples to find the decision boundary",
      "D) It uses supervised labels to classify each point as normal or anomalous"
    ],
    optionsChinese: [
      "A) 它学习一个在特征空间中包围正常数据的边界，将外部的任何东西视为异常",
      "B) 它将数据恰好聚类为两组：正常和异常",
      "C) 它在正常和异常样本上训练以找到决策边界",
      "D) 它使用监督标签将每个点分类为正常或异常"
    ],
    answer: 0,
    explanation: "One-class SVM trains only on normal data and finds a hyperplane (or hypersphere in feature space) that tightly encloses most of the training data. New points falling outside this boundary are classified as anomalies. Using a kernel trick allows it to capture complex, nonlinear boundaries around normal data.",
    explanationChinese: "一类SVM仅在正常数据上训练，找到一个紧密包围大部分训练数据的超平面（或特征空间中的超球体）。落在此边界外的新点被分类为异常。使用核技巧使其能够捕获正常数据周围复杂的非线性边界。",
    diagram: "",
    terms: ["unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 258,
    q: "What is a key advantage of isolation forests over distance-based anomaly detection methods?",
    qChinese: "与基于距离的异常检测方法相比，孤立森林的一个关键优势是什么？",
    options: [
      "A) Isolation forests require labeled anomaly data for training",
      "B) Isolation forests scale well to high-dimensional and large datasets because they do not compute pairwise distances",
      "C) Isolation forests always produce perfectly calibrated probability scores",
      "D) Isolation forests can only detect point anomalies, not contextual ones"
    ],
    optionsChinese: [
      "A) 孤立森林需要标记的异常数据进行训练",
      "B) 孤立森林能很好地扩展到高维和大型数据集，因为它们不计算成对距离",
      "C) 孤立森林总是产生完美校准的概率分数",
      "D) 孤立森林只能检测点异常，不能检测上下文异常"
    ],
    answer: 1,
    explanation: "Distance-based methods like k-NN anomaly detection or LOF require computing distances between points, which becomes expensive in high dimensions and large datasets. Isolation forests use random partitioning with sub-linear time complexity and are less affected by the curse of dimensionality, making them efficient for large-scale anomaly detection.",
    explanationChinese: "基于距离的方法如k-NN异常检测或LOF需要计算点之间的距离，在高维和大型数据集中变得昂贵。孤立森林使用随机分区，具有亚线性时间复杂度，受维度灾难的影响更小，使其在大规模异常检测中高效。",
    diagram: "",
    terms: ["unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 259,
    q: "When should you choose one-class SVM over isolation forest for anomaly detection?",
    qChinese: "什么时候应该选择一类SVM而非孤立森林进行异常检测？",
    options: [
      "A) When you have a very large dataset with millions of samples",
      "B) When the decision boundary between normal and anomalous data is complex and nonlinear in a moderate-dimensional space",
      "C) When speed is the top priority and accuracy is secondary",
      "D) When you have many labeled anomalies for training",
    ],
    optionsChinese: [
      "A) 当你有一个拥有数百万样本的非常大的数据集时",
      "B) 当正常数据和异常数据之间的决策边界在中等维度空间中复杂且非线性时",
      "C) 当速度是首要优先级而准确性次要时",
      "D) 当你有许多标记的异常用于训练时",
    ],
    answer: 1,
    explanation: "One-class SVM with kernel functions excels at capturing complex, nonlinear boundaries in moderate-dimensional spaces. However, it scales poorly to very large datasets due to its O(n^2) to O(n^3) complexity. Isolation forests are preferred for large or high-dimensional data due to their efficiency and linear scaling.",
    explanationChinese: "带核函数的一类SVM擅长在中等维度空间中捕获复杂的非线性边界。然而，由于其O(n^2)到O(n^3)的复杂度，它在非常大的数据集上扩展性差。由于效率和线性扩展性，孤立森林更适合大型或高维数据。",
    diagram: "",
    terms: ["unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 260,
    q: "When is the AUC-PR (Area Under the Precision-Recall Curve) preferred over AUC-ROC?",
    qChinese: "什么时候AUC-PR（精确率-召回率曲线下面积）优于AUC-ROC？",
    options: [
      "A) When the dataset has perfectly balanced classes",
      "B) When only accuracy matters",
      "C) When the dataset is highly imbalanced and the positive class is the minority of interest",
      "D) When the model outputs only binary predictions without probabilities"
    ],
    optionsChinese: [
      "A) 当数据集类别完全平衡时",
      "B) 当只关心准确率时",
      "C) 当数据集高度不平衡且正类是关注的少数类时",
      "D) 当模型只输出二元预测而没有概率时"
    ],
    answer: 2,
    explanation: "AUC-ROC can be misleadingly high on imbalanced datasets because the large number of true negatives inflates the false positive rate denominator. AUC-PR focuses on the positive class by plotting precision vs. recall, making it more informative when the positive class is rare, such as in fraud detection or rare disease diagnosis.",
    explanationChinese: "AUC-ROC在不平衡数据集上可能具有误导性的高值，因为大量真负例膨胀了假阳性率的分母。AUC-PR通过绘制精确率与召回率关注正类，在正类稀少时（如欺诈检测或罕见疾病诊断）更具信息量。",
    diagram: "",
    terms: ["model_evaluation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 261,
    q: "What does model calibration measure?",
    qChinese: "模型校准衡量什么？",
    options: [
      "A) How well the predicted probabilities match the actual frequencies of outcomes",
      "B) How fast the model makes predictions",
      "C) The total number of parameters in the model",
      "D) How much training data the model requires"
    ],
    optionsChinese: [
      "A) 预测概率与实际结果频率的匹配程度",
      "B) 模型做出预测的速度",
      "C) 模型中参数的总数",
      "D) 模型需要多少训练数据"
    ],
    answer: 0,
    explanation: "A well-calibrated model's predicted probabilities reflect true likelihoods: among all instances predicted with 80% probability, approximately 80% should actually be positive. Calibration is critical in applications like medical diagnosis and risk assessment. Reliability diagrams and Platt scaling or isotonic regression can assess and improve calibration.",
    explanationChinese: "校准良好的模型的预测概率反映真实可能性：在所有预测为80%概率的实例中，大约80%应该确实为正。校准在医学诊断和风险评估等应用中至关重要。可靠性图以及Platt缩放或保序回归可以评估和改善校准。",
    diagram: "",
    terms: ["model_evaluation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 262,
    q: "What does the Brier score measure?",
    qChinese: "Brier分数衡量什么？",
    options: [
      "A) The area under the ROC curve",
      "B) The logarithmic loss of the model",
      "C) The mean squared difference between predicted probabilities and actual binary outcomes",
      "D) The ratio of true positives to false positives"
    ],
    optionsChinese: [
      "A) ROC曲线下的面积",
      "B) 模型的对数损失",
      "C) 预测概率与实际二元结果之间的均方差",
      "D) 真阳性与假阳性的比率"
    ],
    answer: 2,
    explanation: "The Brier score is the mean squared error between predicted probabilities and the actual binary labels (0 or 1). A Brier score of 0 indicates perfect probabilistic predictions, while 0.25 corresponds to predicting 0.5 for every instance. It jointly measures calibration and discrimination, making it a comprehensive metric for probabilistic forecasts.",
    explanationChinese: "Brier分数是预测概率与实际二元标签（0或1）之间的均方误差。Brier分数为0表示完美的概率预测，而0.25对应于对每个实例预测0.5。它同时衡量校准和区分度，使其成为概率预测的综合指标。",
    diagram: "",
    terms: ["model_evaluation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 263,
    q: "A model has high AUC-ROC but poor calibration. What does this imply?",
    qChinese: "一个模型具有高AUC-ROC但校准较差。这意味着什么？",
    options: [
      "A) The model cannot distinguish between classes at all",
      "B) The model is underfitting the training data",
      "C) The model ranks positive instances higher than negative ones effectively, but its predicted probabilities do not reflect true likelihoods",
      "D) The model needs more training epochs to converge",
    ],
    optionsChinese: [
      "A) 模型完全无法区分类别",
      "B) 模型对训练数据欠拟合",
      "C) 模型能有效地将正实例排在负实例之前，但其预测概率不反映真实可能性",
      "D) 模型需要更多训练轮次才能收敛",
    ],
    answer: 2,
    explanation: "AUC-ROC measures the model's ability to rank positive examples above negative ones (discrimination), but it does not assess whether the predicted probabilities are accurate. A model can perfectly separate classes while outputting probabilities that are systematically too high or too low. Post-hoc calibration methods like Platt scaling can fix this.",
    explanationChinese: "AUC-ROC衡量模型将正例排在负例之上的能力（区分度），但不评估预测概率是否准确。模型可以完美分离类别，但输出的概率可能系统性地过高或过低。事后校准方法如Platt缩放可以修复此问题。",
    diagram: "",
    terms: ["model_evaluation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 264,
    q: "What is the primary purpose of A/B testing in ML model deployment?",
    qChinese: "A/B测试在ML模型部署中的主要目的是什么？",
    options: [
      "A) To split the training data into two equal halves",
      "B) To train two models simultaneously on the same data",
      "C) To select hyperparameters using grid search",
      "D) To compare two models by randomly assigning users to each version and measuring real-world performance differences",
    ],
    optionsChinese: [
      "A) 将训练数据分成两等份",
      "B) 在相同数据上同时训练两个模型",
      "C) 使用网格搜索选择超参数",
      "D) 通过随机将用户分配到每个版本并测量真实世界性能差异来比较两个模型",
    ],
    answer: 3,
    explanation: "A/B testing in ML deployment randomly routes a fraction of live traffic to a new model (treatment) while the rest goes to the current model (control). By comparing metrics like conversion rate or revenue between the two groups, teams can make statistically grounded decisions about whether the new model provides a genuine improvement.",
    explanationChinese: "ML部署中的A/B测试将一部分实时流量随机路由到新模型（处理组），其余流量到当前模型（对照组）。通过比较两组之间的指标（如转化率或收入），团队可以做出统计上有依据的决策，判断新模型是否带来真正改进。",
    diagram: "",
    terms: ["model_evaluation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 265,
    q: "What is a shadow deployment (shadow mode) in ML model serving?",
    qChinese: "ML模型服务中的影子部署（影子模式）是什么？",
    options: [
      "A) Running the new model in parallel with the production model on live traffic, but only using the production model's predictions for users",
      "B) Deploying a model only during nighttime hours",
      "C) Training a model on synthetic data before deploying",
      "D) Deploying multiple copies of the same model for load balancing"
    ],
    optionsChinese: [
      "A) 在实时流量上与生产模型并行运行新模型，但仅使用生产模型的预测服务用户",
      "B) 仅在夜间部署模型",
      "C) 在部署前使用合成数据训练模型",
      "D) 部署同一模型的多个副本以进行负载均衡"
    ],
    answer: 0,
    explanation: "In shadow deployment, the new model processes real production requests alongside the existing model, but its predictions are logged rather than served to users. This allows teams to compare the new model's performance against the production model on real data without any risk to user experience. It is a safe pre-deployment validation strategy.",
    explanationChinese: "在影子部署中，新模型与现有模型一起处理真实生产请求，但其预测被记录而非提供给用户。这允许团队在真实数据上将新模型的性能与生产模型进行比较，而不会对用户体验造成任何风险。这是一种安全的部署前验证策略。",
    diagram: "",
    terms: ["model_evaluation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 266,
    q: "What is model drift and why does it require monitoring in production?",
    qChinese: "什么是模型漂移，为什么它在生产中需要监控？",
    options: [
      "A) Model drift refers to the model's weights changing during inference",
      "B) Model drift occurs when the data distribution changes over time, causing model performance to degrade",
      "C) Model drift means the model gradually uses more memory over time",
      "D) Model drift is when the model's prediction latency increases"
    ],
    optionsChinese: [
      "A) 模型漂移指模型权重在推理期间变化",
      "B) 模型漂移发生在数据分布随时间变化时，导致模型性能下降",
      "C) 模型漂移指模型随时间逐渐使用更多内存",
      "D) 模型漂移是模型预测延迟增加"
    ],
    answer: 1,
    explanation: "Model drift (also called concept drift or data drift) occurs when the statistical properties of the input data or the relationship between inputs and targets change over time. A model trained on historical data may become less accurate. Continuous monitoring of prediction distributions and performance metrics is essential to detect drift and trigger retraining.",
    explanationChinese: "模型漂移（也称概念漂移或数据漂移）发生在输入数据的统计特性或输入与目标之间的关系随时间变化时。在历史数据上训练的模型可能变得不太准确。持续监控预测分布和性能指标对于检测漂移和触发重新训练至关重要。",
    diagram: "",
    terms: ["model_evaluation", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 267,
    q: "What is the purpose of a feature store in an ML pipeline?",
    qChinese: "ML管道中特征存储的目的是什么？",
    options: [
      "A) To provide a centralized repository for computing, storing, and serving features consistently across training and inference",
      "B) To replace the need for data preprocessing",
      "C) To store trained model weights for deployment",
      "D) To automatically select the best features for each model"
    ],
    optionsChinese: [
      "A) 提供一个集中式存储库，用于在训练和推理之间一致地计算、存储和提供特征",
      "B) 替代数据预处理的需要",
      "C) 存储训练好的模型权重用于部署",
      "D) 自动为每个模型选择最佳特征"
    ],
    answer: 0,
    explanation: "A feature store serves as a single source of truth for feature definitions and values, ensuring that the same feature computation logic is used during both training and serving. This prevents training-serving skew, promotes feature reuse across teams and models, and simplifies the ML pipeline by centralizing feature engineering.",
    explanationChinese: "特征存储作为特征定义和值的单一真实来源，确保在训练和服务期间使用相同的特征计算逻辑。这防止了训练-服务偏差，促进了跨团队和模型的特征重用，并通过集中特征工程简化了ML管道。",
    diagram: "",
    terms: ["feature_selection", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 268,
    q: "What is canary deployment in the context of ML model serving?",
    qChinese: "在ML模型服务的背景下，什么是金丝雀部署？",
    options: [
      "A) Gradually routing a small percentage of traffic to the new model and increasing it only if metrics remain healthy",
      "B) Rolling back to a previous model version automatically",
      "C) Training the model on a small canary dataset before full training",
      "D) Deploying the model only to internal test users permanently",
    ],
    optionsChinese: [
      "A) 逐渐将小百分比的流量路由到新模型，仅在指标保持健康时增加",
      "B) 自动回滚到上一个模型版本",
      "C) 在完整训练之前在小型金丝雀数据集上训练模型",
      "D) 永久只向内部测试用户部署模型",
    ],
    answer: 0,
    explanation: "Canary deployment starts by sending a small fraction (e.g., 1-5%) of production traffic to the new model while monitoring key metrics closely. If the new model performs well, traffic is gradually increased. If issues are detected, traffic is quickly routed back to the old model, minimizing the blast radius of potential problems.",
    explanationChinese: "金丝雀部署从将一小部分（如1-5%）生产流量发送到新模型开始，同时密切监控关键指标。如果新模型表现良好，流量逐渐增加。如果检测到问题，流量迅速路由回旧模型，最小化潜在问题的影响范围。",
    diagram: "",
    terms: ["model_evaluation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 269,
    q: "What is the key innovation of XGBoost compared to traditional gradient boosting?",
    qChinese: "与传统梯度提升相比，XGBoost的关键创新是什么？",
    options: [
      "A) It uses a regularized objective function that includes both L1 and L2 penalties on tree complexity",
      "B) It replaces decision trees with neural networks",
      "C) It eliminates the need for a learning rate",
      "D) It only works with categorical features"
    ],
    optionsChinese: [
      "A) 它使用正则化目标函数，包含对树复杂度的L1和L2惩罚",
      "B) 它用神经网络替代决策树",
      "C) 它消除了对学习率的需求",
      "D) 它只适用于分类特征"
    ],
    answer: 0,
    explanation: "XGBoost adds L1 and L2 regularization terms to the objective function that penalize the number of leaves and the magnitude of leaf weights, which helps prevent overfitting. It also uses a second-order Taylor expansion of the loss function for more efficient optimization compared to standard gradient boosting.",
    explanationChinese: "XGBoost在目标函数中添加了L1和L2正则化项，惩罚叶子数量和叶子权重的大小，有助于防止过拟合。它还使用损失函数的二阶泰勒展开来实现比标准梯度提升更高效的优化。",
    diagram: "",
    terms: ["ensemble_learning", "regularization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 270,
    q: "How does LightGBM achieve faster training speed compared to XGBoost?",
    qChinese: "LightGBM如何实现比XGBoost更快的训练速度？",
    options: [
      "A) It uses histogram-based splitting and leaf-wise tree growth instead of level-wise growth",
      "B) It trains on GPU only",
      "C) It uses fewer trees overall",
      "D) It skips the gradient computation step"
    ],
    optionsChinese: [
      "A) 它使用基于直方图的分裂和逐叶树生长而非逐层生长",
      "B) 它仅在GPU上训练",
      "C) 它总体使用更少的树",
      "D) 它跳过梯度计算步骤"
    ],
    answer: 0,
    explanation: "LightGBM bins continuous features into discrete histograms to speed up split finding and uses leaf-wise (best-first) tree growth which can achieve lower loss with fewer splits. It also employs Gradient-based One-Side Sampling (GOSS) and Exclusive Feature Bundling (EFB) for further acceleration.",
    explanationChinese: "LightGBM将连续特征分箱为离散直方图以加速分裂查找，并使用逐叶（最优优先）树生长，用更少的分裂实现更低的损失。它还采用基于梯度的单边采样（GOSS）和互斥特征捆绑（EFB）进一步加速。",
    diagram: "",
    terms: ["ensemble_learning", "gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 271,
    q: "What is CatBoost's primary advantage when dealing with categorical features?",
    qChinese: "CatBoost在处理分类特征时的主要优势是什么？",
    options: [
      "A) It removes all categorical features automatically",
      "B) It uses ordered target statistics to encode categorical features, avoiding target leakage",
      "C) It converts them to numerical features using random projection",
      "D) It requires manual one-hot encoding before training",
    ],
    optionsChinese: [
      "A) 它自动删除所有分类特征",
      "B) 它使用有序目标统计来编码分类特征，避免目标泄露",
      "C) 它使用随机投影将其转换为数值特征",
      "D) 它在训练前需要手动独热编码",
    ],
    answer: 1,
    explanation: "CatBoost uses ordered target statistics (also called target encoding with ordering) where each sample's encoding is computed using only preceding samples in a random permutation. This prevents target leakage that can occur with naive target encoding and eliminates the need for manual categorical preprocessing.",
    explanationChinese: "CatBoost使用有序目标统计（也称有序目标编码），其中每个样本的编码仅使用随机排列中前面的样本计算。这防止了朴素目标编码可能出现的目标泄露，并消除了手动分类特征预处理的需要。",
    diagram: "",
    terms: ["ensemble_learning", "feature_selection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 272,
    q: "In gradient boosting, what does the learning rate (shrinkage) parameter control?",
    qChinese: "在梯度提升中，学习率（收缩）参数控制什么？",
    options: [
      "A) The depth of each decision tree",
      "B) The contribution of each new tree to the ensemble prediction",
      "C) The number of features used per tree",
      "D) The total number of trees in the ensemble"
    ],
    optionsChinese: [
      "A) 每棵决策树的深度",
      "B) 每棵新树对集成预测的贡献",
      "C) 每棵树使用的特征数量",
      "D) 集成中树的总数"
    ],
    answer: 1,
    explanation: "The learning rate scales down the contribution of each new tree, requiring more trees but reducing the risk of overfitting. A smaller learning rate (e.g., 0.01-0.1) combined with more trees generally produces better generalization, though it increases training time proportionally.",
    explanationChinese: "学习率缩小每棵新树的贡献，需要更多的树但降低过拟合风险。较小的学习率（如0.01-0.1）结合更多的树通常产生更好的泛化能力，但训练时间也相应增加。",
    diagram: "",
    terms: ["ensemble_learning", "gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 273,
    q: "What is the surrogate model in Bayesian optimization?",
    qChinese: "贝叶斯优化中的代理模型是什么？",
    options: [
      "A) The final trained machine learning model",
      "B) The loss function used for backpropagation",
      "C) A copy of the training dataset",
      "D) A cheap-to-evaluate probabilistic model that approximates the expensive objective function",
    ],
    optionsChinese: [
      "A) 最终训练好的机器学习模型",
      "B) 用于反向传播的损失函数",
      "C) 训练数据集的副本",
      "D) 一个评估成本低的概率模型，近似昂贵的目标函数",
    ],
    answer: 3,
    explanation: "The surrogate model, typically a Gaussian Process, models the objective function and provides both a mean prediction and uncertainty estimate for untried hyperparameter configurations. This allows Bayesian optimization to make informed decisions about which configurations to evaluate next, making it far more sample-efficient than grid or random search.",
    explanationChinese: "代理模型（通常是高斯过程）对目标函数建模，为未尝试的超参数配置提供均值预测和不确定性估计。这使贝叶斯优化能够对下一步评估哪些配置做出明智决策，比网格搜索或随机搜索的样本效率高得多。",
    diagram: "",
    terms: ["cross_validation", "model_evaluation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 274,
    q: "What is the role of the acquisition function in Bayesian optimization?",
    qChinese: "贝叶斯优化中采集函数的作用是什么？",
    options: [
      "A) To compute the gradient of the loss function",
      "B) To balance exploration of uncertain regions and exploitation of promising regions in hyperparameter space",
      "C) To split the dataset into training and validation sets",
      "D) To select which features to include in the model"
    ],
    optionsChinese: [
      "A) 计算损失函数的梯度",
      "B) 在超参数空间中平衡对不确定区域的探索和对有前景区域的利用",
      "C) 将数据集分为训练集和验证集",
      "D) 选择模型中包含哪些特征"
    ],
    answer: 1,
    explanation: "The acquisition function (e.g., Expected Improvement, Upper Confidence Bound) uses the surrogate model's predictions and uncertainties to determine the next hyperparameter configuration to evaluate. It balances exploration (trying uncertain areas) with exploitation (refining around known good areas) to efficiently find the optimum.",
    explanationChinese: "采集函数（如期望改进、上置信界）利用代理模型的预测和不确定性来确定下一个要评估的超参数配置。它平衡探索（尝试不确定区域）和利用（在已知好的区域附近精炼），以高效找到最优值。",
    diagram: "",
    terms: ["cross_validation", "model_evaluation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 275,
    q: "Why is random search often preferred over grid search for hyperparameter tuning?",
    qChinese: "为什么随机搜索通常优于网格搜索进行超参数调优？",
    options: [
      "A) Random search covers more distinct values per hyperparameter, especially when some parameters matter more than others",
      "B) Random search evaluates fewer total configurations",
      "C) Grid search cannot handle continuous hyperparameters",
      "D) Random search always finds the global optimum",
    ],
    optionsChinese: [
      "A) 随机搜索覆盖每个超参数更多不同的值，尤其当某些参数比其他参数更重要时",
      "B) 随机搜索评估的总配置更少",
      "C) 网格搜索无法处理连续超参数",
      "D) 随机搜索总能找到全局最优",
    ],
    answer: 0,
    explanation: "Bergstra and Bengio (2012) showed that random search is more efficient because in most problems only a few hyperparameters significantly affect performance. Grid search wastes evaluations on unimportant parameter combinations, while random search samples more unique values along each important dimension for the same budget.",
    explanationChinese: "Bergstra和Bengio（2012）表明随机搜索更高效，因为在大多数问题中只有少数超参数显著影响性能。网格搜索在不重要的参数组合上浪费评估，而随机搜索在相同预算下沿每个重要维度采样更多独特值。",
    diagram: "",
    terms: ["cross_validation", "model_evaluation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 276,
    q: "What is the main advantage of Bayesian optimization over random search for hyperparameter tuning?",
    qChinese: "贝叶斯优化相对于随机搜索在超参数调优方面的主要优势是什么？",
    options: [
      "A) It is always faster in wall-clock time",
      "B) It uses previous evaluation results to intelligently select the next configuration to try",
      "C) It does not require specifying hyperparameter ranges",
      "D) It guarantees finding the global optimum"
    ],
    optionsChinese: [
      "A) 它在实际时间上总是更快",
      "B) 它利用之前的评估结果智能选择下一个要尝试的配置",
      "C) 它不需要指定超参数范围",
      "D) 它保证找到全局最优"
    ],
    answer: 1,
    explanation: "Bayesian optimization is a sequential model-based approach that builds a probabilistic model of the objective function from past evaluations and uses it to choose the most promising configurations to evaluate next. This informed search strategy typically finds better hyperparameters with far fewer evaluations than random search.",
    explanationChinese: "贝叶斯优化是一种基于序列模型的方法，从过去的评估中构建目标函数的概率模型，并用它选择最有前景的配置进行下一步评估。这种有信息的搜索策略通常用远少于随机搜索的评估次数找到更好的超参数。",
    diagram: "",
    terms: ["cross_validation", "model_evaluation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 277,
    q: "What is pseudo-labeling in semi-supervised learning?",
    qChinese: "半监督学习中的伪标签是什么？",
    options: [
      "A) Manually creating labels for all unlabeled data",
      "B) Removing labels from the training set to create a validation set",
      "C) Assigning random labels to unlabeled data",
      "D) Using a model trained on labeled data to generate predicted labels for unlabeled data, then retraining on both",
    ],
    optionsChinese: [
      "A) 手动为所有未标注数据创建标签",
      "B) 从训练集中删除标签以创建验证集",
      "C) 为未标注数据分配随机标签",
      "D) 使用在标注数据上训练的模型为未标注数据生成预测标签，然后在两者上重新训练",
    ],
    answer: 3,
    explanation: "Pseudo-labeling trains an initial model on the labeled data, uses it to predict labels for unlabeled data (selecting only high-confidence predictions), and then retrains on both labeled and pseudo-labeled data. This leverages the structure in unlabeled data to improve model performance when labeled data is scarce.",
    explanationChinese: "伪标签首先在标注数据上训练初始模型，用它预测未标注数据的标签（仅选择高置信度预测），然后在标注数据和伪标注数据上重新训练。当标注数据稀缺时，这利用了未标注数据中的结构来提升模型性能。",
    diagram: "",
    terms: ["supervised_learning", "model_evaluation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 278,
    q: "What is the main risk of pseudo-labeling in semi-supervised learning?",
    qChinese: "半监督学习中伪标签的主要风险是什么？",
    options: [
      "A) It always requires too much computational power",
      "B) Incorrect pseudo-labels can reinforce model errors in a confirmation bias loop",
      "C) It makes the model ignore the original labeled data",
      "D) It can only be used with linear models",
    ],
    optionsChinese: [
      "A) 它总是需要太多计算能力",
      "B) 错误的伪标签可能在确认偏差循环中强化模型错误",
      "C) 它使模型忽略原始标注数据",
      "D) 它只能用于线性模型",
    ],
    answer: 1,
    explanation: "If the initial model assigns wrong pseudo-labels, retraining on those errors can amplify mistakes over iterations, creating a confirmation bias loop. This is why confidence thresholds are critical: only high-confidence predictions should be used as pseudo-labels, and the process should be monitored for error accumulation.",
    explanationChinese: "如果初始模型分配了错误的伪标签，在这些错误上重新训练会在迭代中放大错误，形成确认偏差循环。这就是置信度阈值至关重要的原因：只有高置信度预测才应用作伪标签，并且应监控错误累积。",
    diagram: "",
    terms: ["supervised_learning", "model_evaluation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 279,
    q: "How does self-training differ from co-training in semi-supervised learning?",
    qChinese: "在半监督学习中，自训练与协同训练有何不同？",
    options: [
      "A) Co-training uses only labeled data",
      "B) Self-training requires more labeled data than co-training",
      "C) Self-training uses one model to label its own unlabeled data, while co-training uses two models trained on different feature views to label data for each other",
      "D) There is no difference between self-training and co-training"
    ],
    optionsChinese: [
      "A) 协同训练只使用标注数据",
      "B) 自训练比协同训练需要更多标注数据",
      "C) 自训练使用一个模型标注自己的未标注数据，而协同训练使用在不同特征视图上训练的两个模型互相标注数据",
      "D) 自训练和协同训练没有区别"
    ],
    answer: 2,
    explanation: "Self-training uses a single model that iteratively labels unlabeled data and retrains on its own predictions. Co-training uses two models, each trained on a different subset of features (views), and each model provides pseudo-labels for the other. Co-training can be more robust because the two models provide independent perspectives.",
    explanationChinese: "自训练使用单个模型迭代地标注未标注数据并在自己的预测上重新训练。协同训练使用两个模型，各自在不同的特征子集（视图）上训练，每个模型为另一个提供伪标签。协同训练可能更稳健，因为两个模型提供独立的视角。",
    diagram: "",
    terms: ["supervised_learning", "unsupervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 280,
    q: "What is the consistency regularization principle used in modern semi-supervised learning methods?",
    qChinese: "现代半监督学习方法中使用的一致性正则化原理是什么？",
    options: [
      "A) Using the same learning rate throughout training",
      "B) Requiring that the model produce similar predictions for different augmented versions of the same input",
      "C) Ensuring all models have the same number of parameters",
      "D) Making all layers of a neural network have equal width"
    ],
    optionsChinese: [
      "A) 在整个训练过程中使用相同的学习率",
      "B) 要求模型对同一输入的不同增强版本产生相似的预测",
      "C) 确保所有模型具有相同数量的参数",
      "D) 使神经网络的所有层具有相同宽度"
    ],
    answer: 1,
    explanation: "Consistency regularization assumes that realistic perturbations of input data should not change the model's output. Methods like FixMatch and MixMatch enforce this by requiring that augmented versions of unlabeled data produce consistent predictions, effectively using the model's own predictions as soft pseudo-labels.",
    explanationChinese: "一致性正则化假设输入数据的真实扰动不应改变模型的输出。FixMatch和MixMatch等方法通过要求未标注数据的增强版本产生一致的预测来实现这一点，有效地将模型自身的预测用作软伪标签。",
    diagram: "",
    terms: ["regularization", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 281,
    q: "In active learning, what is the uncertainty sampling strategy?",
    qChinese: "在主动学习中，什么是不确定性采样策略？",
    options: [
      "A) Selecting samples that the model is most confident about",
      "B) Randomly selecting samples from the unlabeled pool",
      "C) Selecting samples where the model is least certain about the prediction, such as those closest to the decision boundary",
      "D) Selecting the oldest samples in the dataset"
    ],
    optionsChinese: [
      "A) 选择模型最有信心的样本",
      "B) 从未标注池中随机选择样本",
      "C) 选择模型对预测最不确定的样本，例如最接近决策边界的样本",
      "D) 选择数据集中最旧的样本"
    ],
    answer: 2,
    explanation: "Uncertainty sampling selects the instances for which the model is least confident in its prediction. Common measures include maximum entropy, minimum margin (difference between top two class probabilities), and least confidence (one minus the highest predicted probability). This strategy aims to maximally reduce model uncertainty per labeled sample.",
    explanationChinese: "不确定性采样选择模型对其预测最不自信的实例。常用度量包括最大熵、最小间隔（前两个类别概率之差）和最低置信度（1减去最高预测概率）。该策略旨在每个标注样本最大限度地减少模型不确定性。",
    diagram: "",
    terms: ["supervised_learning", "model_evaluation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 282,
    q: "What is the query-by-committee approach in active learning?",
    qChinese: "主动学习中的委员会查询方法是什么？",
    options: [
      "A) Having human experts vote on which samples to label",
      "B) Using a single model to query a database",
      "C) Training a committee of diverse models and selecting samples where they most disagree",
      "D) Randomly assigning samples to different models"
    ],
    optionsChinese: [
      "A) 让人类专家投票决定标注哪些样本",
      "B) 使用单个模型查询数据库",
      "C) 训练一组多样化的模型并选择它们最不一致的样本",
      "D) 将样本随机分配给不同模型"
    ],
    answer: 2,
    explanation: "Query-by-committee maintains a committee of models trained on the current labeled data and selects unlabeled instances where committee members disagree most (measured by vote entropy or KL divergence). High disagreement indicates that the sample lies in a region of the input space where the models are uncertain.",
    explanationChinese: "委员会查询维护一组在当前标注数据上训练的模型，选择委员会成员最不一致的未标注实例（通过投票熵或KL散度衡量）。高度不一致表明样本位于模型不确定的输入空间区域。",
    diagram: "",
    terms: ["ensemble_learning", "model_evaluation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 283,
    q: "What is the cold start problem in active learning?",
    qChinese: "主动学习中的冷启动问题是什么？",
    options: [
      "A) The model running too slowly on initial data",
      "B) The GPU not being warmed up for training",
      "C) The difficulty of selecting informative samples when the model has been trained on very little data initially",
      "D) The training data being stored on cold storage",
    ],
    optionsChinese: [
      "A) 模型在初始数据上运行太慢",
      "B) GPU未预热进行训练",
      "C) 当模型最初只在很少数据上训练时，难以选择有信息量的样本",
      "D) 训练数据存储在冷存储上",
    ],
    answer: 2,
    explanation: "When the active learning process begins with very few labeled samples, the model's uncertainty estimates are unreliable, making it hard to select truly informative samples. A common mitigation is to start with a diverse seed set (e.g., via clustering or stratified sampling) before applying uncertainty-based selection.",
    explanationChinese: "当主动学习过程从很少的标注样本开始时，模型的不确定性估计不可靠，难以选择真正有信息量的样本。常见的缓解方法是在应用基于不确定性的选择之前，先使用多样化的种子集（如通过聚类或分层抽样）。",
    diagram: "",
    terms: ["supervised_learning", "model_evaluation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 284,
    q: "What distinguishes pool-based active learning from stream-based active learning?",
    qChinese: "基于池的主动学习与基于流的主动学习有什么区别？",
    options: [
      "A) Pool-based uses neural networks while stream-based uses decision trees",
      "B) There is no meaningful difference between them",
      "C) Pool-based active learning does not use any labeled data",
      "D) Stream-based processes one sample at a time and decides to query or skip, while pool-based evaluates all unlabeled samples to select the best ones",
    ],
    optionsChinese: [
      "A) 基于池的使用神经网络而基于流的使用决策树",
      "B) 它们之间没有有意义的区别",
      "C) 基于池的主动学习不使用任何标注数据",
      "D) 基于流的一次处理一个样本并决定查询或跳过，而基于池的评估所有未标注样本以选择最佳样本",
    ],
    answer: 3,
    explanation: "In pool-based active learning, the learner has access to a large pool of unlabeled data and selects the most informative instances from the entire pool. In stream-based, data arrives sequentially and the learner must decide immediately whether to request a label for each instance. Pool-based is more common when all unlabeled data is available upfront.",
    explanationChinese: "在基于池的主动学习中，学习者可以访问大量未标注数据池，从整个池中选择最有信息量的实例。在基于流的方法中，数据顺序到达，学习者必须立即决定是否请求每个实例的标签。当所有未标注数据预先可用时，基于池的方法更常见。",
    diagram: "",
    terms: ["supervised_learning", "model_evaluation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 285,
    q: "What is multi-task learning in machine learning?",
    qChinese: "机器学习中的多任务学习是什么？",
    options: [
      "A) Training a model on a single task with multiple datasets",
      "B) Training a single model to simultaneously learn multiple related tasks, sharing representations across them",
      "C) Running multiple independent models in parallel",
      "D) Using multiple GPUs to train one model faster"
    ],
    optionsChinese: [
      "A) 在多个数据集上训练单一任务的模型",
      "B) 训练单个模型同时学习多个相关任务，在它们之间共享表示",
      "C) 并行运行多个独立模型",
      "D) 使用多个GPU更快地训练一个模型"
    ],
    answer: 1,
    explanation: "Multi-task learning trains a single model on multiple related tasks simultaneously, typically sharing lower-level representations while having task-specific output heads. Shared representations act as an inductive bias that improves generalization, especially when tasks are related and individual task data is limited.",
    explanationChinese: "多任务学习同时在多个相关任务上训练单个模型，通常共享低层表示而具有任务特定的输出头。共享表示充当归纳偏置，提高泛化能力，尤其当任务相关且各任务数据有限时。",
    diagram: "",
    terms: ["supervised_learning", "regularization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 286,
    q: "What is the difference between multi-label and multi-class classification?",
    qChinese: "多标签分类和多类分类有什么区别？",
    options: [
      "A) Multi-class assigns exactly one class per instance, while multi-label allows multiple classes to be assigned simultaneously to each instance",
      "B) They are exactly the same thing",
      "C) Multi-label uses regression while multi-class uses classification",
      "D) Multi-label can only handle two labels"
    ],
    optionsChinese: [
      "A) 多类为每个实例分配恰好一个类别，而多标签允许同时为每个实例分配多个类别",
      "B) 它们完全相同",
      "C) 多标签使用回归而多类使用分类",
      "D) 多标签只能处理两个标签"
    ],
    answer: 0,
    explanation: "In multi-class classification, classes are mutually exclusive (e.g., classifying an animal as cat, dog, or bird). In multi-label classification, an instance can belong to multiple classes simultaneously (e.g., a movie can be both comedy and romance). Multi-label typically uses sigmoid activation per label rather than softmax.",
    explanationChinese: "在多类分类中，类别是互斥的（如将动物分类为猫、狗或鸟）。在多标签分类中，一个实例可以同时属于多个类别（如一部电影可以同时是喜剧和爱情片）。多标签通常对每个标签使用sigmoid激活而非softmax。",
    diagram: "",
    terms: ["supervised_learning", "model_evaluation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 287,
    q: "In multi-task learning, what is negative transfer?",
    qChinese: "在多任务学习中，什么是负迁移？",
    options: [
      "A) When training data is corrupted during transfer between machines",
      "B) When the model's weights become negative",
      "C) When learning one task decreases performance on another task due to conflicting objectives",
      "D) When the model transfers from GPU to CPU"
    ],
    optionsChinese: [
      "A) 当训练数据在机器之间传输时被损坏",
      "B) 当模型的权重变为负数",
      "C) 当学习一个任务由于目标冲突而降低另一个任务的性能",
      "D) 当模型从GPU传输到CPU"
    ],
    answer: 2,
    explanation: "Negative transfer occurs when tasks have conflicting optimization objectives, causing shared representations to compromise performance on one or more tasks. This can happen when tasks are too dissimilar or when gradient directions conflict. Techniques like gradient normalization and task-specific adapters can help mitigate negative transfer.",
    explanationChinese: "负迁移发生在任务具有冲突的优化目标时，导致共享表示损害一个或多个任务的性能。当任务差异太大或梯度方向冲突时可能发生。梯度归一化和任务特定适配器等技术可以帮助缓解负迁移。",
    diagram: "",
    terms: ["supervised_learning", "gradient_descent"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 288,
    q: "What is hard parameter sharing in multi-task learning?",
    qChinese: "多任务学习中的硬参数共享是什么？",
    options: [
      "A) All tasks share the same hidden layers but have separate output layers",
      "B) Each task has completely independent parameters",
      "C) Parameters are shared only during inference, not during training",
      "D) Only the output layer is shared across tasks"
    ],
    optionsChinese: [
      "A) 所有任务共享相同的隐藏层但有独立的输出层",
      "B) 每个任务有完全独立的参数",
      "C) 参数仅在推理时共享，训练时不共享",
      "D) 只有输出层在任务间共享"
    ],
    answer: 0,
    explanation: "Hard parameter sharing is the most common approach to multi-task learning where all tasks share the same lower-level hidden layers and only have task-specific output heads. This approach greatly reduces the risk of overfitting because the shared layers are trained with data from all tasks, acting as a strong regularizer.",
    explanationChinese: "硬参数共享是多任务学习中最常见的方法，所有任务共享相同的低层隐藏层，仅有任务特定的输出头。这种方法大大降低了过拟合风险，因为共享层用所有任务的数据训练，充当强正则化器。",
    diagram: "",
    terms: ["supervised_learning", "regularization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 289,
    q: "What does causal inference in ML aim to determine that standard predictive models cannot?",
    qChinese: "机器学习中的因果推断旨在确定标准预测模型无法确定的什么？",
    options: [
      "A) The correlation between features and the target variable",
      "B) The prediction accuracy on test data",
      "C) The number of clusters in the data",
      "D) Whether changing one variable actually causes a change in another, not just a correlation"
    ],
    optionsChinese: [
      "A) 特征与目标变量之间的相关性",
      "B) 测试数据上的预测准确率",
      "C) 数据中的聚类数量",
      "D) 改变一个变量是否实际导致另一个变量的变化，而不仅仅是相关性"
    ],
    answer: 3,
    explanation: "Standard ML models learn correlations (associations) from observational data, but causal inference seeks to identify cause-and-effect relationships. For example, a model might find that ice cream sales correlate with drowning, but causal analysis reveals that heat is the common cause. This distinction is critical for decision-making and interventions.",
    explanationChinese: "标准ML模型从观测数据中学习相关性（关联），但因果推断旨在识别因果关系。例如，模型可能发现冰淇淋销售与溺水相关，但因果分析揭示高温是共同原因。这种区别对决策和干预至关重要。",
    diagram: "",
    terms: ["supervised_learning", "feature_selection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 290,
    q: "What is a confounding variable in the context of causal inference?",
    qChinese: "在因果推断的背景下，什么是混杂变量？",
    options: [
      "A) A variable that has no effect on the outcome",
      "B) The target variable in a classification problem",
      "C) A variable that influences both the treatment and the outcome, creating a spurious association",
      "D) A feature that is always constant"
    ],
    optionsChinese: [
      "A) 对结果没有影响的变量",
      "B) 分类问题中的目标变量",
      "C) 同时影响处理和结果的变量，造成虚假关联",
      "D) 始终恒定的特征"
    ],
    answer: 2,
    explanation: "A confounding variable affects both the treatment (independent variable) and the outcome (dependent variable), creating a false impression of a direct causal link between them. Randomized controlled trials eliminate confounding through random assignment, while observational studies must use techniques like propensity score matching or instrumental variables.",
    explanationChinese: "混杂变量同时影响处理（自变量）和结果（因变量），造成它们之间存在直接因果关系的假象。随机对照试验通过随机分配消除混杂，而观察性研究必须使用倾向得分匹配或工具变量等技术。",
    diagram: "",
    terms: ["feature_selection", "model_evaluation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 291,
    q: "What is the Average Treatment Effect (ATE) in causal inference?",
    qChinese: "因果推断中的平均处理效应（ATE）是什么？",
    options: [
      "A) The time it takes to apply a treatment",
      "B) The expected difference in outcome between the treatment group and the control group across the entire population",
      "C) The average accuracy of a treatment model",
      "D) The variance of the treatment variable"
    ],
    optionsChinese: [
      "A) 应用处理所需的时间",
      "B) 整个人群中处理组和对照组之间结果的期望差异",
      "C) 处理模型的平均准确率",
      "D) 处理变量的方差"
    ],
    answer: 1,
    explanation: "The ATE measures the average causal effect of a treatment across an entire population, computed as E[Y(1)] - E[Y(0)] where Y(1) is the outcome under treatment and Y(0) is the outcome under control. The fundamental problem of causal inference is that we can never observe both potential outcomes for the same individual.",
    explanationChinese: "ATE衡量处理在整个人群中的平均因果效应，计算为E[Y(1)] - E[Y(0)]，其中Y(1)是处理下的结果，Y(0)是对照下的结果。因果推断的根本问题是我们永远无法观察到同一个体的两种潜在结果。",
    diagram: "",
    terms: ["model_evaluation", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 292,
    q: "What is the do-operator in Pearl's causal framework?",
    qChinese: "Pearl因果框架中的do算子是什么？",
    options: [
      "A) A mathematical operator for computing derivatives",
      "B) An SQL command for database operations",
      "C) An operation that represents an intervention, distinguishing it from passive observation by setting a variable to a specific value",
      "D) A regularization technique for neural networks",
    ],
    optionsChinese: [
      "A) 计算导数的数学算子",
      "B) 数据库操作的SQL命令",
      "C) 表示干预的操作，通过将变量设置为特定值来区别于被动观察",
      "D) 神经网络的正则化技术",
    ],
    answer: 2,
    explanation: "The do-operator do(X=x) represents actively intervening to set variable X to value x, as opposed to passively observing X=x. P(Y|do(X=x)) differs from P(Y|X=x) because intervention breaks incoming causal arrows to X, removing confounding effects. This is central to Pearl's structural causal model framework.",
    explanationChinese: "do算子do(X=x)表示主动干预将变量X设置为值x，区别于被动观察X=x。P(Y|do(X=x))不同于P(Y|X=x)，因为干预切断了指向X的因果箭头，消除了混杂效应。这是Pearl结构因果模型框架的核心。",
    diagram: "",
    terms: ["feature_selection", "model_evaluation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 293,
    q: "What is demographic parity (statistical parity) in ML fairness?",
    qChinese: "机器学习公平性中的人口统计平等（统计平等）是什么？",
    options: [
      "A) Ensuring the model has equal accuracy across all protected groups",
      "B) Making all features equally important in the model",
      "C) Ensuring equal representation in the training data",
      "D) Requiring that the proportion of positive predictions is the same across all protected groups, regardless of actual outcomes",
    ],
    optionsChinese: [
      "A) 确保模型在所有受保护群体中具有相同的准确率",
      "B) 使所有特征在模型中同等重要",
      "C) 确保训练数据中的均等代表性",
      "D) 要求所有受保护群体中正预测的比例相同，与实际结果无关",
    ],
    answer: 3,
    explanation: "Demographic parity requires that the probability of receiving a positive prediction is independent of the protected attribute (e.g., gender or race). While intuitive, this criterion can conflict with other fairness notions and may require different acceptance rates even when base rates differ between groups.",
    explanationChinese: "人口统计平等要求获得正预测的概率与受保护属性（如性别或种族）无关。虽然直观，但该标准可能与其他公平性概念冲突，当不同群体的基础率不同时可能需要不同的接受率。",
    diagram: "",
    terms: ["model_evaluation", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 294,
    q: "What is equalized odds as a fairness criterion in ML?",
    qChinese: "均等化赔率作为机器学习中的公平性标准是什么？",
    options: [
      "A) All models should have the same odds of being selected",
      "B) The betting odds should be equal for all outcomes",
      "C) The true positive rate and false positive rate should be equal across all protected groups",
      "D) Each feature should have equal predictive power"
    ],
    optionsChinese: [
      "A) 所有模型应有相同的被选择概率",
      "B) 所有结果的投注赔率应相等",
      "C) 真正率和假正率在所有受保护群体中应相等",
      "D) 每个特征应具有相等的预测能力"
    ],
    answer: 2,
    explanation: "Equalized odds requires that the classifier has equal true positive rates and equal false positive rates across protected groups. This means the model's error rates are the same regardless of group membership, conditional on the true label. It is a stronger condition than demographic parity as it accounts for actual outcomes.",
    explanationChinese: "均等化赔率要求分类器在受保护群体之间具有相等的真正率和相等的假正率。这意味着模型的错误率在条件于真实标签时与群体成员身份无关。它是比人口统计平等更强的条件，因为它考虑了实际结果。",
    diagram: "",
    terms: ["model_evaluation", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 295,
    q: "Why is it impossible to simultaneously satisfy all common fairness criteria in ML?",
    qChinese: "为什么不可能同时满足机器学习中所有常见的公平性标准？",
    options: [
      "A) Current hardware is not powerful enough",
      "B) Because neural networks are inherently biased",
      "C) Because fairness is a subjective concept with no mathematical definition",
      "D) Because the impossibility theorem shows that demographic parity, equalized odds, and predictive parity cannot all hold simultaneously when base rates differ between groups",
    ],
    optionsChinese: [
      "A) 当前硬件不够强大",
      "B) 因为神经网络本质上是有偏见的",
      "C) 因为公平性是一个没有数学定义的主观概念",
      "D) 因为不可能定理表明当不同群体的基础率不同时，人口统计平等、均等化赔率和预测平等不能同时成立",
    ],
    answer: 3,
    explanation: "The impossibility theorem (Chouldechova, 2017; Kleinberg et al., 2016) proves that when base rates differ between groups, it is mathematically impossible to simultaneously achieve calibration, equal false positive rates, and equal false negative rates. This forces practitioners to choose which fairness criteria are most important for their specific application context.",
    explanationChinese: "不可能定理（Chouldechova, 2017; Kleinberg等, 2016）证明当不同群体的基础率不同时，在数学上不可能同时实现校准、相等的假正率和相等的假负率。这迫使实践者选择对其特定应用场景最重要的公平性标准。",
    diagram: "",
    terms: ["model_evaluation", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 296,
    q: "What is disparate impact in the context of ML fairness?",
    qChinese: "在机器学习公平性的背景下，什么是差别影响？",
    options: [
      "A) When a model has different computational costs for different inputs",
      "B) When the impact of data preprocessing varies across features",
      "C) When different models produce different predictions",
      "D) When a seemingly neutral model or policy disproportionately harms a protected group, even without explicit use of protected attributes",
    ],
    optionsChinese: [
      "A) 当模型对不同输入有不同的计算成本",
      "B) 当数据预处理的影响在特征间变化",
      "C) 当不同模型产生不同预测",
      "D) 当一个看似中性的模型或策略不成比例地损害受保护群体，即使没有明确使用受保护属性",
    ],
    answer: 3,
    explanation: "Disparate impact occurs when a model that does not explicitly use protected attributes still produces outcomes that disproportionately disadvantage a protected group. This often happens because proxy features (e.g., zip code as a proxy for race) carry discriminatory information. The four-fifths rule is a common legal threshold for detecting disparate impact.",
    explanationChinese: "差别影响发生在模型没有明确使用受保护属性但仍然产生不成比例地不利于受保护群体的结果时。这通常因为代理特征（如邮编作为种族的代理）携带歧视性信息。五分之四规则是检测差别影响的常见法律阈值。",
    diagram: "",
    terms: ["feature_selection", "model_evaluation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 297,
    q: "What is the fundamental principle of federated learning?",
    qChinese: "联邦学习的基本原理是什么？",
    options: [
      "A) Training a shared global model across multiple decentralized devices or servers holding local data, without exchanging raw data",
      "B) Using federation of different ML algorithms on the same data",
      "C) Training a model by collecting all data into a central server",
      "D) Splitting a single dataset into federated subsets for parallel processing"
    ],
    optionsChinese: [
      "A) 在持有本地数据的多个去中心化设备或服务器上训练共享的全局模型，而不交换原始数据",
      "B) 在相同数据上使用不同ML算法的联合",
      "C) 通过将所有数据收集到中央服务器来训练模型",
      "D) 将单个数据集拆分为联邦子集进行并行处理"
    ],
    answer: 0,
    explanation: "Federated learning enables multiple parties to collaboratively train a model by sharing only model updates (gradients or parameters) instead of raw data. Each client trains on its local data and sends model updates to a central server, which aggregates them. This preserves data privacy while leveraging distributed data sources.",
    explanationChinese: "联邦学习使多方通过仅共享模型更新（梯度或参数）而非原始数据来协作训练模型。每个客户端在本地数据上训练并将模型更新发送到中央服务器进行聚合。这在利用分布式数据源的同时保护了数据隐私。",
    diagram: "",
    terms: ["gradient_descent", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 298,
    q: "What is differential privacy in the context of privacy-preserving ML?",
    qChinese: "在隐私保护机器学习的背景下，什么是差分隐私？",
    options: [
      "A) Using different passwords for different datasets",
      "B) The difference in privacy between two different ML models",
      "C) Encrypting the model weights after training",
      "D) A mathematical framework that provides formal privacy guarantees by adding calibrated noise to computations, ensuring that any individual's data has limited impact on the output",
    ],
    optionsChinese: [
      "A) 为不同数据集使用不同密码",
      "B) 两个不同ML模型之间的隐私差异",
      "C) 训练后加密模型权重",
      "D) 一种数学框架，通过向计算添加校准噪声来提供正式的隐私保证，确保任何个人的数据对输出的影响有限",
    ],
    answer: 3,
    explanation: "Differential privacy provides a rigorous mathematical guarantee that the output of a computation does not significantly change whether any single individual's data is included or excluded. The privacy budget epsilon controls the privacy-utility tradeoff: smaller epsilon means stronger privacy but more noise and potentially lower model accuracy.",
    explanationChinese: "差分隐私提供严格的数学保证，即计算的输出不会因包含或排除任何单个个体的数据而显著改变。隐私预算epsilon控制隐私与效用的权衡：较小的epsilon意味着更强的隐私但更多噪声和可能更低的模型准确率。",
    diagram: "",
    terms: ["regularization", "model_evaluation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 299,
    q: "What is the FedAvg algorithm in federated learning?",
    qChinese: "联邦学习中的FedAvg算法是什么？",
    options: [
      "A) An algorithm where each client trains locally for multiple epochs and the server aggregates by averaging client model weights proportional to their dataset sizes",
      "B) A method for finding the average client in the federation",
      "C) A technique that averages feature values across clients",
      "D) An algorithm that averages the raw data from all clients",
    ],
    optionsChinese: [
      "A) 一种每个客户端在本地训练多个轮次后服务器按数据集大小比例加权平均客户端模型权重的算法",
      "B) 一种寻找联邦中平均客户端的方法",
      "C) 一种跨客户端平均特征值的技术",
      "D) 一种对所有客户端的原始数据取平均的算法",
    ],
    answer: 0,
    explanation: "Federated Averaging (FedAvg) is the foundational federated learning algorithm where each client performs several steps of SGD on its local data, then sends model weights to the server. The server computes a weighted average of all client models (weighted by dataset size) to produce the updated global model. This reduces communication rounds compared to sending gradients after each step.",
    explanationChinese: "联邦平均（FedAvg）是基础的联邦学习算法，每个客户端在本地数据上执行多步SGD，然后将模型权重发送到服务器。服务器计算所有客户端模型的加权平均（按数据集大小加权）以生成更新的全局模型。与每步后发送梯度相比，这减少了通信轮次。",
    diagram: "",
    terms: ["gradient_descent", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 300,
    q: "What is the non-IID data challenge in federated learning?",
    qChinese: "联邦学习中的非独立同分布（non-IID）数据挑战是什么？",
    options: [
      "A) Data being stored in different file formats across clients",
      "B) Each client's local data distribution being different from others and from the global distribution, which can degrade model convergence",
      "C) Data being too large to fit in memory on each client",
      "D) Different clients having different hardware capabilities",
    ],
    optionsChinese: [
      "A) 数据在不同客户端以不同文件格式存储",
      "B) 每个客户端的本地数据分布与其他客户端及全局分布不同，可能降低模型收敛性",
      "C) 数据太大无法在每个客户端的内存中容纳",
      "D) 不同客户端具有不同的硬件能力",
    ],
    answer: 1,
    explanation: "In real-world federated settings, data across clients is rarely identically distributed. For example, different hospitals may see different patient demographics, or different mobile users may have different typing patterns. Non-IID data causes client models to diverge, slowing convergence and potentially degrading the global model's performance.",
    explanationChinese: "在实际联邦场景中，客户端间的数据很少是同分布的。例如，不同医院可能接诊不同的患者群体，不同移动用户可能有不同的打字模式。非IID数据导致客户端模型发散，减慢收敛速度并可能降低全局模型的性能。",
    diagram: "",
    terms: ["gradient_descent", "model_evaluation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
];
