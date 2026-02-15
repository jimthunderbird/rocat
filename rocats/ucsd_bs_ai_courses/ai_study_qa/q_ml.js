const questionsML = [
  {
    id: 1,
    q: "In linear regression, what does the ordinary least squares (OLS) method minimize?",
    qChinese: "在线性回归中，普通最小二乘法（OLS）最小化什么？",
    options: [
      "A) Sum of absolute residuals",
      "B) Sum of squared residuals",
      "C) Maximum residual",
      "D) Median of residuals"
    ],
    optionsChinese: [
      "A) 残差绝对值之和",
      "B) 残差平方和",
      "C) 最大残差",
      "D) 残差的中位数"
    ],
    answer: 1,
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
      "B) w = (X^T X)^{-1} X^T y",
      "C) w = (X X^T)^{-1} y",
      "D) w = X^{-1} y"
    ],
    optionsChinese: [
      "A) w = X^T y",
      "B) w = (X^T X)^{-1} X^T y",
      "C) w = (X X^T)^{-1} y",
      "D) w = X^{-1} y"
    ],
    answer: 1,
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
      "A) Accuracy",
      "B) F1 Score",
      "C) Mean Squared Error (MSE)",
      "D) AUC-ROC"
    ],
    optionsChinese: [
      "A) 准确率",
      "B) F1分数",
      "C) 均方误差（MSE）",
      "D) AUC-ROC"
    ],
    answer: 2,
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
      "B) The proportion of variance in the dependent variable explained by the model",
      "C) The number of features used",
      "D) The slope of the regression line"
    ],
    optionsChinese: [
      "A) 特征之间的相关性",
      "B) 模型解释的因变量方差比例",
      "C) 使用的特征数量",
      "D) 回归线的斜率"
    ],
    answer: 1,
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
      "B) The negative gradient of the loss function with respect to the parameters",
      "C) A random direction chosen at each step",
      "D) The largest feature value in the dataset"
    ],
    optionsChinese: [
      "A) 偏置项的符号",
      "B) 损失函数相对于参数的负梯度",
      "C) 每步随机选择的方向",
      "D) 数据集中最大的特征值"
    ],
    answer: 1,
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
      "A) The model always underfits",
      "B) Feature coefficient estimates become unstable and have high variance",
      "C) The loss function becomes non-convex",
      "D) The model cannot make predictions"
    ],
    optionsChinese: [
      "A) 模型总是欠拟合",
      "B) 特征系数估计变得不稳定且方差很高",
      "C) 损失函数变为非凸",
      "D) 模型无法做出预测"
    ],
    answer: 1,
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
      "B) d + 1",
      "C) 2d",
      "D) d²"
    ],
    optionsChinese: [
      "A) d",
      "B) d + 1",
      "C) 2d",
      "D) d²"
    ],
    answer: 1,
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
      "B) It makes features have similar ranges, helping gradient descent converge faster",
      "C) It eliminates the need for a bias term",
      "D) It reduces the number of features"
    ],
    optionsChinese: [
      "A) 它保证全局最小值",
      "B) 它使特征具有相似的范围，帮助梯度下降更快收敛",
      "C) 它消除了对偏置项的需要",
      "D) 它减少了特征数量"
    ],
    answer: 1,
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
      "A) Linearity",
      "B) Independence",
      "C) Homoscedasticity",
      "D) Normality"
    ],
    optionsChinese: [
      "A) 线性性",
      "B) 独立性",
      "C) 同方差性",
      "D) 正态性"
    ],
    answer: 2,
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
      "B) A single randomly chosen training example (or small mini-batch)",
      "C) Only the test dataset",
      "D) The validation set"
    ],
    optionsChinese: [
      "A) 整个训练数据集",
      "B) 一个随机选择的训练样本（或小批量）",
      "C) 仅测试数据集",
      "D) 验证集"
    ],
    answer: 1,
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
      "A) Guaranteed convergence to global minimum",
      "B) The algorithm may overshoot and diverge",
      "C) The model always underfits",
      "D) Training becomes slower but more accurate"
    ],
    optionsChinese: [
      "A) 保证收敛到全局最小值",
      "B) 算法可能过冲并发散",
      "C) 模型总是欠拟合",
      "D) 训练变慢但更准确"
    ],
    answer: 1,
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
      "B) Randomly scattered points around zero with no pattern",
      "C) An increasing trend",
      "D) Clusters of points at specific values"
    ],
    optionsChinese: [
      "A) 明显的U形模式",
      "B) 随机散布在零附近无模式的点",
      "C) 递增趋势",
      "D) 在特定值处聚集的点"
    ],
    answer: 1,
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
      "B) It is linear in its parameters despite using non-linear features",
      "C) It cannot overfit",
      "D) It requires a special loss function"
    ],
    optionsChinese: [
      "A) 它是非线性模型",
      "B) 尽管使用非线性特征，它在参数上是线性的",
      "C) 它不会过拟合",
      "D) 它需要特殊的损失函数"
    ],
    answer: 1,
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
      "B) The tendency of R² to increase when adding irrelevant features",
      "C) Heteroscedasticity",
      "D) Multicollinearity"
    ],
    optionsChinese: [
      "A) 数据中的非线性",
      "B) 添加不相关特征时R²倾向于增加的问题",
      "C) 异方差性",
      "D) 多重共线性"
    ],
    answer: 1,
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
      "B) The predicted value of y when all input features are zero",
      "C) The average of all feature values",
      "D) The variance of the predictions"
    ],
    optionsChinese: [
      "A) 回归线的斜率",
      "B) 当所有输入特征为零时y的预测值",
      "C) 所有特征值的平均值",
      "D) 预测的方差"
    ],
    answer: 1,
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
      "B) Underfitting (high bias)",
      "C) Data leakage",
      "D) Perfect multicollinearity"
    ],
    optionsChinese: [
      "A) 过拟合",
      "B) 欠拟合（高偏差）",
      "C) 数据泄露",
      "D) 完美多重共线性"
    ],
    answer: 1,
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
      "C) Adding regularization (e.g., Ridge or Lasso)",
      "D) Using more polynomial features"
    ],
    optionsChinese: [
      "A) 增加多项式次数",
      "B) 移除偏置项",
      "C) 添加正则化（例如Ridge或Lasso）",
      "D) 使用更多多项式特征"
    ],
    answer: 2,
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
      "A) O(n)",
      "B) O(np²+ p³)",
      "C) O(n²p)",
      "D) O(2^p)"
    ],
    optionsChinese: [
      "A) O(n)",
      "B) O(np² + p³)",
      "C) O(n²p)",
      "D) O(2^p)"
    ],
    answer: 1,
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
      "A) MAE is always larger than MSE",
      "B) MSE penalizes large errors more heavily due to squaring",
      "C) MAE is not differentiable anywhere",
      "D) MSE is robust to outliers"
    ],
    optionsChinese: [
      "A) MAE总是大于MSE",
      "B) 由于平方，MSE对大误差的惩罚更重",
      "C) MAE在任何地方都不可微",
      "D) MSE对异常值具有稳健性"
    ],
    answer: 1,
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
      "B) When the number of features is very large",
      "C) When exact solutions are required",
      "D) When the dataset has no noise"
    ],
    optionsChinese: [
      "A) 当数据集特征很少时",
      "B) 当特征数量非常大时",
      "C) 当需要精确解时",
      "D) 当数据集没有噪声时"
    ],
    answer: 1,
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
      "B) The model performs worse than simply predicting the mean of y",
      "C) The data has no variance",
      "D) The model has negative coefficients"
    ],
    optionsChinese: [
      "A) 模型是完美的",
      "B) 模型比简单预测y的均值表现更差",
      "C) 数据没有方差",
      "D) 模型有负系数"
    ],
    answer: 1,
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
      "B) Finding the line that minimizes the sum of squared vertical distances to the data points",
      "C) Finding the shortest path between two data points",
      "D) Finding the centroid of the data"
    ],
    optionsChinese: [
      "A) 找到通过所有数据点的圆",
      "B) 找到使数据点的垂直距离平方和最小的直线",
      "C) 找到两个数据点之间的最短路径",
      "D) 找到数据的质心"
    ],
    answer: 1,
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
      "B) A probability between 0 and 1",
      "C) A discrete integer",
      "D) A vector of feature importances"
    ],
    optionsChinese: [
      "A) 连续实数",
      "B) 0到1之间的概率",
      "C) 离散整数",
      "D) 特征重要性向量"
    ],
    answer: 1,
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
      "B) TP / (TP + FP)",
      "C) (TP + TN) / Total",
      "D) TN / (TN + FP)"
    ],
    optionsChinese: [
      "A) TP / (TP + FN)",
      "B) TP / (TP + FP)",
      "C) (TP + TN) / 总数",
      "D) TN / (TN + FP)"
    ],
    answer: 1,
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
    answer: 1,
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
      "B) 0.5",
      "C) 1",
      "D) Undefined"
    ],
    optionsChinese: [
      "A) 0",
      "B) 0.5",
      "C) 1",
      "D) 未定义"
    ],
    answer: 1,
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
      "B) K binary classifiers are trained, each separating one class from the rest",
      "C) K(K-1)/2 binary classifiers are trained",
      "D) A clustering algorithm is used first"
    ],
    optionsChinese: [
      "A) 训练单个K类分类器",
      "B) 训练K个二元分类器，每个将一个类与其余类分开",
      "C) 训练K(K-1)/2个二元分类器",
      "D) 首先使用聚类算法"
    ],
    answer: 1,
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
      "A) F1 = 2 * (precision * recall) / (precision + recall); preferred for imbalanced datasets",
      "B) F1 = (TP + TN) / Total; preferred for large datasets",
      "C) F1 = precision + recall; preferred for multi-class problems",
      "D) F1 = 1 - accuracy; always preferred"
    ],
    optionsChinese: [
      "A) F1 = 2 * (精确率 * 召回率) / (精确率 + 召回率)；对不平衡数据集更优",
      "B) F1 = (TP + TN) / 总数；对大数据集更优",
      "C) F1 = 精确率 + 召回率；对多类问题更优",
      "D) F1 = 1 - 准确率；总是更优"
    ],
    answer: 0,
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
      "A) The probability of the positive class",
      "B) The natural logarithm of the odds ratio: log(p/(1-p))",
      "C) The square of the probability",
      "D) The entropy of the prediction"
    ],
    optionsChinese: [
      "A) 正类的概率",
      "B) 几率比的自然对数：log(p/(1-p))",
      "C) 概率的平方",
      "D) 预测的熵"
    ],
    answer: 1,
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
      "B) True Positive Rate vs. False Positive Rate at various thresholds",
      "C) Training loss vs. Validation loss",
      "D) Accuracy vs. Number of features"
    ],
    optionsChinese: [
      "A) 精确率 vs. 召回率",
      "B) 在不同阈值下真正例率 vs. 假正例率",
      "C) 训练损失 vs. 验证损失",
      "D) 准确率 vs. 特征数量"
    ],
    answer: 1,
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
      "B) 0.5",
      "C) 0.75",
      "D) 1.0"
    ],
    optionsChinese: [
      "A) 0.0",
      "B) 0.5",
      "C) 0.75",
      "D) 1.0"
    ],
    answer: 1,
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
      "A) Dropout",
      "B) L2 regularization (adding lambda * ||w||² to the loss)",
      "C) Data augmentation",
      "D) Batch normalization"
    ],
    optionsChinese: [
      "A) Dropout",
      "B) L2正则化（在损失中添加lambda * ||w||²）",
      "C) 数据增强",
      "D) 批归一化"
    ],
    answer: 1,
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
      "B) Find parameters that maximize the probability of observing the given data",
      "C) Maximize the margin between classes",
      "D) Minimize the number of features"
    ],
    optionsChinese: [
      "A) 最小化残差平方和",
      "B) 找到使观察到给定数据的概率最大的参数",
      "C) 最大化类别之间的间隔",
      "D) 最小化特征数量"
    ],
    answer: 1,
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
      "B) Lowering the threshold increases recall but may decrease precision",
      "C) The threshold has no effect on either metric",
      "D) Raising the threshold always increases both"
    ],
    optionsChinese: [
      "A) 两者一起增加",
      "B) 降低阈值增加召回率但可能降低精确率",
      "C) 阈值对两个指标都没有影响",
      "D) 提高阈值总是增加两者"
    ],
    answer: 1,
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
      "A) The gradient becomes infinite",
      "B) The gradient approaches zero for very large or very small input values",
      "C) The gradient is always negative",
      "D) The gradient oscillates randomly"
    ],
    optionsChinese: [
      "A) 梯度变为无穷大",
      "B) 对于非常大或非常小的输入值，梯度趋近于零",
      "C) 梯度总是负的",
      "D) 梯度随机振荡"
    ],
    answer: 1,
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
      "A) Hard uses more features than soft",
      "B) Hard outputs discrete class labels; soft outputs class probabilities",
      "C) Soft classification is only for regression tasks",
      "D) Hard classification does not use a threshold"
    ],
    optionsChinese: [
      "A) 硬分类使用比软分类更多的特征",
      "B) 硬分类输出离散类标签；软分类输出类概率",
      "C) 软分类仅用于回归任务",
      "D) 硬分类不使用阈值"
    ],
    answer: 1,
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
      "B) 10",
      "C) 25",
      "D) 20"
    ],
    optionsChinese: [
      "A) 5",
      "B) 10",
      "C) 25",
      "D) 20"
    ],
    answer: 1,
    explanation: "One-vs-One trains K(K-1)/2 binary classifiers, one for each pair of classes. For K=5, that is 5*4/2 = 10 classifiers. At prediction time, each classifier votes, and the class with the most votes wins. OvO uses smaller training sets per classifier but requires more classifiers than OvR.",
    explanationChinese: "一对一训练K(K-1)/2个二元分类器，每对类别一个。对于K=5，即5*4/2 = 10个分类器。预测时，每个分类器投票，票数最多的类获胜。OvO每个分类器使用较小的训练集但需要比OvR更多的分类器。",
    diagram: "",
    terms: ["logistic_regression", "supervised_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
