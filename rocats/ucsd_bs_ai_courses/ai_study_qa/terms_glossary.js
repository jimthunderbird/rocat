const termsGlossary = {
    // ===== PF: Programming Fundamentals =====
    variable: {
        term: "Variable",
        termChinese: "变量",
        section: "PF",
        definition: "A named storage location in memory that holds a value which can be changed during program execution. Variables have a data type that determines what kind of data they can store, such as integers, strings, or floating-point numbers. They are fundamental building blocks in all programming languages.",
        definitionChinese: "内存中一个命名的存储位置，保存一个可以在程序执行期间更改的值。变量具有数据类型，决定了它们可以存储的数据类型，如整数、字符串或浮点数。它们是所有编程语言的基本构建块。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    data_type: {
        term: "Data Type",
        termChinese: "数据类型",
        section: "PF",
        definition: "A classification that specifies the kind of value a variable can hold and what operations can be performed on it. Common data types include integers, floating-point numbers, characters, strings, and booleans. Data types help the compiler or interpreter allocate appropriate memory and enforce type safety.",
        definitionChinese: "一种分类，指定变量可以保存的值的类型以及可以对其执行的操作。常见的数据类型包括整数、浮点数、字符、字符串和布尔值。数据类型帮助编译器或解释器分配适当的内存并强制类型安全。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    loop: {
        term: "Loop",
        termChinese: "循环",
        section: "PF",
        definition: "A control flow structure that repeatedly executes a block of code as long as a specified condition remains true. Common types include for loops, while loops, and do-while loops. Loops are essential for iterating over collections, performing repetitive tasks, and implementing algorithms that require repeated computation.",
        definitionChinese: "一种控制流结构，只要指定条件保持为真，就重复执行一段代码块。常见类型包括for循环、while循环和do-while循环。循环对于遍历集合、执行重复任务和实现需要重复计算的算法至关重要。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    conditional: {
        term: "Conditional",
        termChinese: "条件语句",
        section: "PF",
        definition: "A programming construct that executes different blocks of code based on whether a boolean expression evaluates to true or false. Common forms include if-else statements and switch-case constructs. Conditionals enable programs to make decisions and branch execution paths based on runtime data values.",
        definitionChinese: "一种编程结构，根据布尔表达式的求值结果为真或假来执行不同的代码块。常见形式包括if-else语句和switch-case结构。条件语句使程序能够根据运行时数据值做出决策并分支执行路径。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    function: {
        term: "Function",
        termChinese: "函数",
        section: "PF",
        definition: "A reusable block of code that performs a specific task, accepts input parameters, and optionally returns a value. Functions promote code modularity, reduce duplication, and improve readability. They can be called from multiple places in a program, enabling structured and organized software development practices.",
        definitionChinese: "一个可重用的代码块，执行特定任务，接受输入参数，并可选地返回一个值。函数促进代码模块化，减少重复，提高可读性。它们可以从程序中的多个位置调用，实现结构化和有组织的软件开发实践。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    class: {
        term: "Class",
        termChinese: "类",
        section: "PF",
        definition: "A blueprint or template in object-oriented programming that defines the properties and behaviors shared by objects of a certain kind. Classes encapsulate data fields and methods into a single unit, supporting abstraction and modularity. They serve as the foundation for creating instances called objects.",
        definitionChinese: "面向对象编程中的蓝图或模板，定义某类对象共享的属性和行为。类将数据字段和方法封装到单个单元中，支持抽象和模块化。它们是创建称为对象的实例的基础。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    object: {
        term: "Object",
        termChinese: "对象",
        section: "PF",
        definition: "An instance of a class that contains actual values for the properties defined by its class and can invoke the methods defined within it. Objects represent real-world entities in code, bundling related state and behavior together. They interact with each other through method calls and message passing.",
        definitionChinese: "类的一个实例，包含其类定义的属性的实际值，并可以调用其中定义的方法。对象在代码中表示现实世界的实体，将相关的状态和行为捆绑在一起。它们通过方法调用和消息传递相互交互。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    inheritance: {
        term: "Inheritance",
        termChinese: "继承",
        section: "PF",
        definition: "An object-oriented programming mechanism where a child class automatically acquires the properties and methods of a parent class. Inheritance promotes code reuse and establishes a hierarchical relationship between classes. Subclasses can extend or override inherited behavior to provide specialized functionality while sharing common structure.",
        definitionChinese: "一种面向对象编程机制，子类自动获取父类的属性和方法。继承促进代码重用，并在类之间建立层次关系。子类可以扩展或覆盖继承的行为，以提供专门的功能，同时共享通用结构。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    polymorphism: {
        term: "Polymorphism",
        termChinese: "多态",
        section: "PF",
        definition: "The ability of different classes to be treated as instances of the same parent class through a shared interface. Polymorphism allows one method name to behave differently depending on the object that calls it. It enables flexible and extensible code by supporting method overriding and method overloading mechanisms.",
        definitionChinese: "不同类通过共享接口被视为同一父类实例的能力。多态允许一个方法名根据调用它的对象表现出不同的行为。它通过支持方法覆盖和方法重载机制来实现灵活和可扩展的代码。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    encapsulation: {
        term: "Encapsulation",
        termChinese: "封装",
        section: "PF",
        definition: "The object-oriented principle of bundling data and the methods that operate on that data within a single class while restricting direct access to internal state. Encapsulation hides implementation details and exposes only necessary interfaces through access modifiers like public, private, and protected, improving code maintainability.",
        definitionChinese: "将数据和操作该数据的方法捆绑在单个类中，同时限制对内部状态的直接访问的面向对象原则。封装隐藏实现细节，仅通过public、private和protected等访问修饰符公开必要的接口，提高代码可维护性。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    recursion: {
        term: "Recursion",
        termChinese: "递归",
        section: "PF",
        definition: "A programming technique where a function calls itself to solve a problem by breaking it into smaller, similar subproblems. Each recursive call works on a simpler version until reaching a base case that stops the recursion. It is widely used for tree traversal, divide-and-conquer algorithms, and mathematical computations.",
        definitionChinese: "一种编程技术，函数通过将问题分解为更小的、类似的子问题来调用自身解决问题。每次递归调用处理一个更简单的版本，直到达到停止递归的基本情况。它广泛用于树遍历、分治算法和数学计算。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    array: {
        term: "Array",
        termChinese: "数组",
        section: "PF",
        definition: "A data structure that stores a fixed-size collection of elements of the same type in contiguous memory locations. Elements are accessed using an integer index, providing constant-time random access. Arrays are efficient for storing and retrieving ordered data but have limited flexibility for insertion and deletion operations.",
        definitionChinese: "一种数据结构，在连续的内存位置中存储固定大小的同类型元素集合。元素使用整数索引访问，提供常数时间的随机访问。数组对于存储和检索有序数据很高效，但在插入和删除操作方面灵活性有限。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    linked_list: {
        term: "Linked List",
        termChinese: "链表",
        section: "PF",
        definition: "A linear data structure where each element, called a node, contains data and a reference to the next node in the sequence. Unlike arrays, linked lists do not require contiguous memory and allow efficient insertion and deletion. Common variants include singly linked, doubly linked, and circular linked lists.",
        definitionChinese: "一种线性数据结构，每个元素称为节点，包含数据和对序列中下一个节点的引用。与数组不同，链表不需要连续内存，允许高效的插入和删除。常见变体包括单向链表、双向链表和循环链表。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    stack: {
        term: "Stack",
        termChinese: "栈",
        section: "PF",
        definition: "A linear data structure that follows the Last-In-First-Out principle, where the most recently added element is the first one to be removed. Key operations include push to add elements and pop to remove them. Stacks are used in function call management, expression evaluation, and undo mechanisms.",
        definitionChinese: "一种遵循后进先出原则的线性数据结构，最近添加的元素最先被移除。关键操作包括push添加元素和pop移除元素。栈用于函数调用管理、表达式求值和撤销机制。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    queue: {
        term: "Queue",
        termChinese: "队列",
        section: "PF",
        definition: "A linear data structure that follows the First-In-First-Out principle, where the earliest added element is the first to be removed. Key operations include enqueue to add elements at the rear and dequeue to remove them from the front. Queues are used in scheduling, buffering, and breadth-first search.",
        definitionChinese: "一种遵循先进先出原则的线性数据结构，最早添加的元素最先被移除。关键操作包括enqueue在尾部添加元素和dequeue从前端移除元素。队列用于调度、缓冲和广度优先搜索。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    pointer: {
        term: "Pointer",
        termChinese: "指针",
        section: "PF",
        definition: "A variable that stores the memory address of another variable rather than a direct value. Pointers enable dynamic memory allocation, efficient array manipulation, and the creation of complex data structures like linked lists and trees. They are fundamental in languages like C and C++ for low-level memory management.",
        definitionChinese: "一个存储另一个变量的内存地址而非直接值的变量。指针支持动态内存分配、高效数组操作以及创建链表和树等复杂数据结构。它们在C和C++等语言中是低级内存管理的基础。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    memory_allocation: {
        term: "Memory Allocation",
        termChinese: "内存分配",
        section: "PF",
        definition: "The process of reserving a portion of computer memory for use by a program. Static allocation occurs at compile time for fixed-size variables, while dynamic allocation happens at runtime using functions like malloc or new. Proper memory management prevents leaks and dangling pointers, ensuring efficient resource utilization.",
        definitionChinese: "为程序使用而保留一部分计算机内存的过程。静态分配在编译时为固定大小的变量发生，而动态分配在运行时使用malloc或new等函数发生。适当的内存管理防止泄漏和悬空指针，确保高效的资源利用。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    compiler: {
        term: "Compiler",
        termChinese: "编译器",
        section: "PF",
        definition: "A program that translates source code written in a high-level programming language into machine code or an intermediate representation before execution. The compilation process includes lexical analysis, parsing, semantic analysis, optimization, and code generation. Compiled programs typically run faster than interpreted ones due to ahead-of-time optimization.",
        definitionChinese: "一种将高级编程语言编写的源代码在执行前翻译成机器码或中间表示的程序。编译过程包括词法分析、语法分析、语义分析、优化和代码生成。编译程序由于提前优化，通常比解释执行的程序运行更快。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    interpreter: {
        term: "Interpreter",
        termChinese: "解释器",
        section: "PF",
        definition: "A program that executes source code line by line without first compiling it into machine code. Interpreters read, analyze, and execute each statement sequentially at runtime. They offer faster development cycles and easier debugging but generally produce slower execution compared to compilers. Python and JavaScript use interpreters.",
        definitionChinese: "一种逐行执行源代码而不先将其编译为机器码的程序。解释器在运行时顺序读取、分析和执行每条语句。它们提供更快的开发周期和更容易的调试，但通常比编译器产生更慢的执行速度。Python和JavaScript使用解释器。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    debugging: {
        term: "Debugging",
        termChinese: "调试",
        section: "PF",
        definition: "The systematic process of identifying, analyzing, and removing errors or bugs from computer programs. Debugging techniques include using breakpoints, stepping through code, inspecting variable values, and analyzing stack traces. Effective debugging requires understanding program flow, reproducing issues consistently, and using specialized tools like debuggers and loggers.",
        definitionChinese: "识别、分析和消除计算机程序中的错误或缺陷的系统过程。调试技术包括使用断点、逐步执行代码、检查变量值和分析堆栈跟踪。有效的调试需要理解程序流程、一致地重现问题以及使用调试器和日志记录器等专用工具。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    // ===== MF: Mathematics Foundations =====
    derivative: {
        term: "Derivative",
        termChinese: "导数",
        section: "MF",
        definition: "A measure of how a function's output changes as its input changes, representing the instantaneous rate of change or slope of the tangent line at a point. Derivatives are foundational in calculus and are used extensively in optimization algorithms, including gradient descent for training machine learning models.",
        definitionChinese: "衡量函数输出随输入变化而变化的度量，表示某一点的瞬时变化率或切线斜率。导数是微积分的基础，广泛用于优化算法，包括训练机器学习模型的梯度下降法。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    integral: {
        term: "Integral",
        termChinese: "积分",
        section: "MF",
        definition: "A mathematical operation that computes the accumulated quantity under a curve over an interval, representing the reverse process of differentiation. Definite integrals calculate exact areas, while indefinite integrals find antiderivatives. Integrals are used in probability density functions, computing expectations, and continuous signal processing applications.",
        definitionChinese: "一种计算曲线下在某区间上累积量的数学运算，表示微分的逆过程。定积分计算精确面积，而不定积分求反导数。积分用于概率密度函数、计算期望值和连续信号处理应用。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    limit: {
        term: "Limit",
        termChinese: "极限",
        section: "MF",
        definition: "The value that a function approaches as its input approaches a specified point. Limits are the foundational concept of calculus, enabling the rigorous definition of continuity, derivatives, and integrals. They describe the behavior of functions near specific values and are essential for understanding convergence in mathematical analysis.",
        definitionChinese: "当函数的输入接近指定点时，函数趋近的值。极限是微积分的基础概念，使连续性、导数和积分的严格定义成为可能。它们描述函数在特定值附近的行为，对于理解数学分析中的收敛性至关重要。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    matrix: {
        term: "Matrix",
        termChinese: "矩阵",
        section: "MF",
        definition: "A rectangular array of numbers arranged in rows and columns, used to represent linear transformations, systems of equations, and data in machine learning. Matrix operations include addition, multiplication, transposition, and inversion. Matrices are fundamental in computer graphics, neural network computations, and solving simultaneous linear equations efficiently.",
        definitionChinese: "按行和列排列的数字矩形阵列，用于表示线性变换、方程组和机器学习中的数据。矩阵运算包括加法、乘法、转置和求逆。矩阵在计算机图形学、神经网络计算和高效求解联立线性方程组中是基础。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    vector: {
        term: "Vector",
        termChinese: "向量",
        section: "MF",
        definition: "A mathematical object that has both magnitude and direction, represented as an ordered list of numbers in a coordinate system. Vectors are used to represent data points, features, forces, and velocities. In machine learning, feature vectors encode input data, and word vectors represent semantic meaning in natural language processing.",
        definitionChinese: "一种既有大小又有方向的数学对象，在坐标系中表示为有序数字列表。向量用于表示数据点、特征、力和速度。在机器学习中，特征向量编码输入数据，词向量在自然语言处理中表示语义含义。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    eigenvalue: {
        term: "Eigenvalue",
        termChinese: "特征值",
        section: "MF",
        definition: "A scalar associated with a linear transformation represented by a matrix, indicating how much the corresponding eigenvector is stretched or compressed during the transformation. Eigenvalues are computed by solving the characteristic equation. They are critical in principal component analysis, stability analysis, and understanding system dynamics.",
        definitionChinese: "与矩阵表示的线性变换相关联的标量，指示对应的特征向量在变换过程中被拉伸或压缩的程度。特征值通过求解特征方程计算。它们在主成分分析、稳定性分析和理解系统动力学中至关重要。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    eigenvector: {
        term: "Eigenvector",
        termChinese: "特征向量",
        section: "MF",
        definition: "A non-zero vector that only changes by a scalar factor when a linear transformation is applied to it. The scalar factor is the corresponding eigenvalue. Eigenvectors reveal the principal directions of a transformation and are essential in dimensionality reduction, facial recognition, and vibration analysis in engineering systems.",
        definitionChinese: "一个非零向量，当对其施加线性变换时，只改变一个标量因子。该标量因子是对应的特征值。特征向量揭示变换的主要方向，在降维、面部识别和工程系统的振动分析中至关重要。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    determinant: {
        term: "Determinant",
        termChinese: "行列式",
        section: "MF",
        definition: "A scalar value computed from a square matrix that encodes important properties of the linear transformation the matrix represents. A zero determinant indicates the matrix is singular and non-invertible. Determinants are used to solve linear systems via Cramer's rule, compute volumes, and check matrix invertibility.",
        definitionChinese: "从方阵计算的标量值，编码矩阵所表示的线性变换的重要属性。零行列式表示矩阵是奇异的且不可逆。行列式用于通过克拉默法则求解线性系统、计算体积和检查矩阵可逆性。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    gradient: {
        term: "Gradient",
        termChinese: "梯度",
        section: "MF",
        definition: "A vector of partial derivatives that points in the direction of the steepest increase of a multivariable function. The gradient's magnitude indicates the rate of steepest ascent. In machine learning, gradients are computed to update model parameters during training, forming the basis of gradient descent optimization algorithms.",
        definitionChinese: "一个偏导数向量，指向多变量函数最陡增加的方向。梯度的大小表示最陡上升的速率。在机器学习中，计算梯度以在训练期间更新模型参数，构成梯度下降优化算法的基础。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    chain_rule: {
        term: "Chain Rule",
        termChinese: "链式法则",
        section: "MF",
        definition: "A calculus formula for computing the derivative of a composite function by multiplying the derivatives of its constituent functions. If y depends on u and u depends on x, then dy/dx equals dy/du times du/dx. The chain rule is the mathematical foundation of the backpropagation algorithm used in neural networks.",
        definitionChinese: "一种微积分公式，通过将组成函数的导数相乘来计算复合函数的导数。如果y依赖于u且u依赖于x，则dy/dx等于dy/du乘以du/dx。链式法则是神经网络中反向传播算法的数学基础。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    probability: {
        term: "Probability",
        termChinese: "概率",
        section: "MF",
        definition: "A numerical measure between zero and one that quantifies the likelihood of an event occurring. Probability theory provides the mathematical framework for reasoning about uncertainty and randomness. It underpins statistical inference, machine learning algorithms, decision-making under uncertainty, and Bayesian methods used throughout artificial intelligence.",
        definitionChinese: "一个介于零和一之间的数值度量，量化事件发生的可能性。概率论提供了关于不确定性和随机性推理的数学框架。它支撑统计推断、机器学习算法、不确定性下的决策以及人工智能中使用的贝叶斯方法。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    conditional_probability: {
        term: "Conditional Probability",
        termChinese: "条件概率",
        section: "MF",
        definition: "The probability of an event occurring given that another event has already occurred, denoted P(A|B). It is calculated as the joint probability of both events divided by the probability of the conditioning event. Conditional probability is fundamental to Bayesian reasoning, classification algorithms, and probabilistic graphical models.",
        definitionChinese: "在另一个事件已经发生的条件下，某事件发生的概率，记为P(A|B)。它的计算方式是两个事件的联合概率除以条件事件的概率。条件概率是贝叶斯推理、分类算法和概率图模型的基础。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    bayes_theorem: {
        term: "Bayes' Theorem",
        termChinese: "贝叶斯定理",
        section: "MF",
        definition: "A formula that describes how to update the probability of a hypothesis based on new evidence. It relates the posterior probability to the prior probability, likelihood, and marginal likelihood. Bayes' theorem is the foundation of Bayesian statistics, spam filtering, medical diagnosis, and many machine learning classification algorithms.",
        definitionChinese: "一个描述如何根据新证据更新假设概率的公式。它将后验概率与先验概率、似然和边际似然联系起来。贝叶斯定理是贝叶斯统计、垃圾邮件过滤、医学诊断和许多机器学习分类算法的基础。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    normal_distribution: {
        term: "Normal Distribution",
        termChinese: "正态分布",
        section: "MF",
        definition: "A continuous probability distribution characterized by its symmetric bell-shaped curve, defined by its mean and standard deviation. Also called the Gaussian distribution, it arises naturally in many real-world phenomena due to the central limit theorem. It is widely used in statistical testing, error modeling, and initializing neural network weights.",
        definitionChinese: "一种连续概率分布，以其对称的钟形曲线为特征，由均值和标准差定义。也称为高斯分布，由于中心极限定理，它在许多现实世界现象中自然出现。它广泛用于统计检验、误差建模和神经网络权重初始化。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    expected_value: {
        term: "Expected Value",
        termChinese: "期望值",
        section: "MF",
        definition: "The weighted average of all possible values of a random variable, where each value is weighted by its probability of occurrence. It represents the long-run average outcome of a random experiment. Expected value is central to decision theory, risk assessment, reinforcement learning reward calculations, and loss function design.",
        definitionChinese: "随机变量所有可能值的加权平均值，其中每个值按其发生概率加权。它代表随机实验的长期平均结果。期望值在决策理论、风险评估、强化学习奖励计算和损失函数设计中至关重要。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    variance: {
        term: "Variance",
        termChinese: "方差",
        section: "MF",
        definition: "A statistical measure of how far a set of values spreads from their mean, calculated as the average of squared deviations from the mean. High variance indicates data points are spread widely, while low variance means they cluster tightly. Variance is key in the bias-variance tradeoff and model evaluation in machine learning.",
        definitionChinese: "衡量一组值偏离其均值程度的统计度量，计算为与均值偏差的平方的平均值。高方差表示数据点分布广泛，低方差意味着它们紧密聚集。方差在机器学习的偏差-方差权衡和模型评估中至关重要。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    standard_deviation: {
        term: "Standard Deviation",
        termChinese: "标准差",
        section: "MF",
        definition: "The square root of the variance, measuring the average amount by which data values differ from the mean in the same units as the data. It provides an intuitive sense of data spread. Standard deviation is used in normalization, confidence intervals, and evaluating the dispersion of model predictions and error distributions.",
        definitionChinese: "方差的平方根，以与数据相同的单位衡量数据值偏离均值的平均程度。它提供了数据分散的直观感觉。标准差用于归一化、置信区间以及评估模型预测和误差分布的离散程度。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    linear_transformation: {
        term: "Linear Transformation",
        termChinese: "线性变换",
        section: "MF",
        definition: "A mapping between two vector spaces that preserves vector addition and scalar multiplication operations. It can be represented as matrix multiplication, transforming input vectors into output vectors. Linear transformations are the core operation in neural network layers, computer graphics rotations, and dimensionality reduction techniques like PCA.",
        definitionChinese: "两个向量空间之间保持向量加法和标量乘法运算的映射。它可以表示为矩阵乘法，将输入向量变换为输出向量。线性变换是神经网络层、计算机图形学旋转和PCA等降维技术的核心操作。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    dot_product: {
        term: "Dot Product",
        termChinese: "点积",
        section: "MF",
        definition: "An algebraic operation that takes two equal-length vectors and returns a single scalar value, computed by summing the products of corresponding elements. The dot product measures the similarity between vectors and equals the product of their magnitudes times the cosine of the angle between them. It is used in attention mechanisms and similarity metrics.",
        definitionChinese: "一种代数运算，取两个等长向量并返回单个标量值，通过对应元素乘积的总和计算。点积衡量向量之间的相似性，等于它们大小的乘积乘以它们之间角度的余弦。它用于注意力机制和相似度度量。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    cross_product: {
        term: "Cross Product",
        termChinese: "叉积",
        section: "MF",
        definition: "A binary operation on two three-dimensional vectors that produces a new vector perpendicular to both input vectors. Its magnitude equals the area of the parallelogram formed by the two vectors. The cross product is essential in computer graphics for computing surface normals, physics simulations, and robotics orientation calculations.",
        definitionChinese: "对两个三维向量进行的二元运算，产生一个与两个输入向量都垂直的新向量。其大小等于两个向量构成的平行四边形的面积。叉积在计算机图形学中用于计算表面法线、物理模拟和机器人方向计算中至关重要。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    // ===== DA: Data Structures & Algorithms =====
    binary_search_tree: {
        term: "Binary Search Tree",
        termChinese: "二叉搜索树",
        section: "DA",
        definition: "A binary tree data structure where each node has at most two children, with all left subtree values less than the parent and all right subtree values greater. This ordering property enables efficient searching, insertion, and deletion in O(log n) average time. BSTs form the basis for many balanced tree variants.",
        definitionChinese: "一种二叉树数据结构，每个节点最多有两个子节点，所有左子树值小于父节点，所有右子树值大于父节点。这种排序属性使得搜索、插入和删除在平均O(log n)时间内高效完成。BST是许多平衡树变体的基础。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    hash_table: {
        term: "Hash Table",
        termChinese: "哈希表",
        section: "DA",
        definition: "A data structure that maps keys to values using a hash function to compute an index into an array of buckets. Hash tables provide average-case constant-time O(1) performance for insertion, deletion, and lookup operations. Collision resolution strategies include chaining and open addressing to handle multiple keys mapping to the same index.",
        definitionChinese: "一种使用哈希函数计算桶数组索引来将键映射到值的数据结构。哈希表为插入、删除和查找操作提供平均常数时间O(1)性能。冲突解决策略包括链接法和开放寻址法，用于处理多个键映射到同一索引的情况。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    heap: {
        term: "Heap",
        termChinese: "堆",
        section: "DA",
        definition: "A specialized tree-based data structure that satisfies the heap property: in a max-heap, each parent node is greater than or equal to its children; in a min-heap, each parent is less than or equal. Heaps efficiently support priority queue operations with O(log n) insertion and extraction. They are used in heap sort and Dijkstra's algorithm.",
        definitionChinese: "一种满足堆属性的专门基于树的数据结构：在最大堆中，每个父节点大于或等于其子节点；在最小堆中，每个父节点小于或等于其子节点。堆高效支持优先队列操作，插入和提取为O(log n)。它们用于堆排序和Dijkstra算法。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    graph: {
        term: "Graph",
        termChinese: "图",
        section: "DA",
        definition: "A non-linear data structure consisting of vertices (nodes) connected by edges, used to model relationships between objects. Graphs can be directed or undirected, weighted or unweighted. They represent networks such as social connections, road maps, and dependency structures, and are traversed using algorithms like BFS and DFS.",
        definitionChinese: "一种由顶点（节点）和连接它们的边组成的非线性数据结构，用于建模对象之间的关系。图可以是有向或无向的、加权或无权的。它们表示社交连接、道路地图和依赖结构等网络，使用BFS和DFS等算法进行遍历。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    adjacency_list: {
        term: "Adjacency List",
        termChinese: "邻接表",
        section: "DA",
        definition: "A graph representation where each vertex maintains a list of its neighboring vertices. This format is space-efficient for sparse graphs, using O(V+E) space where V is vertices and E is edges. Adjacency lists allow efficient iteration over a node's neighbors and are preferred over adjacency matrices when the graph has relatively few edges.",
        definitionChinese: "一种图表示方法，每个顶点维护其相邻顶点的列表。这种格式对于稀疏图来说空间效率高，使用O(V+E)空间，其中V是顶点数，E是边数。邻接表允许高效遍历节点的邻居，在图边较少时优于邻接矩阵。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    bfs: {
        term: "Breadth-First Search",
        termChinese: "广度优先搜索",
        section: "DA",
        definition: "A graph traversal algorithm that explores all vertices at the current depth level before moving to the next level. BFS uses a queue data structure and guarantees finding the shortest path in unweighted graphs. It is used for level-order tree traversal, finding connected components, and solving puzzles with minimum number of moves.",
        definitionChinese: "一种图遍历算法，在移动到下一层之前探索当前深度层的所有顶点。BFS使用队列数据结构，保证在无权图中找到最短路径。它用于层序树遍历、查找连通分量和用最少步数解决谜题。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    dfs: {
        term: "Depth-First Search",
        termChinese: "深度优先搜索",
        section: "DA",
        definition: "A graph traversal algorithm that explores as far as possible along each branch before backtracking. DFS uses a stack data structure, either explicitly or through recursion. It is used for topological sorting, detecting cycles, finding strongly connected components, and solving maze and path-finding problems in computational applications.",
        definitionChinese: "一种图遍历算法，沿每个分支尽可能深入探索后再回溯。DFS使用栈数据结构，可以是显式栈或通过递归实现。它用于拓扑排序、检测环、查找强连通分量以及在计算应用中解决迷宫和路径查找问题。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    dijkstra: {
        term: "Dijkstra's Algorithm",
        termChinese: "Dijkstra算法",
        section: "DA",
        definition: "A graph algorithm that finds the shortest path from a source vertex to all other vertices in a weighted graph with non-negative edge weights. It uses a priority queue to greedily select the unvisited vertex with the smallest tentative distance. Dijkstra's algorithm runs in O(V log V + E) time with a binary heap implementation.",
        definitionChinese: "一种图算法，在边权非负的加权图中找到从源顶点到所有其他顶点的最短路径。它使用优先队列贪心地选择具有最小暂定距离的未访问顶点。使用二叉堆实现时，Dijkstra算法的运行时间为O(V log V + E)。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    dynamic_programming: {
        term: "Dynamic Programming",
        termChinese: "动态规划",
        section: "DA",
        definition: "An algorithmic technique that solves complex problems by breaking them into overlapping subproblems and storing their solutions to avoid redundant computation. It uses either top-down memoization or bottom-up tabulation approaches. Dynamic programming optimizes problems exhibiting optimal substructure, such as the knapsack problem, sequence alignment, and shortest paths.",
        definitionChinese: "一种算法技术，通过将复杂问题分解为重叠子问题并存储其解来避免冗余计算。它使用自顶向下的记忆化或自底向上的制表方法。动态规划优化具有最优子结构的问题，如背包问题、序列对齐和最短路径。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    greedy_algorithm: {
        term: "Greedy Algorithm",
        termChinese: "贪心算法",
        section: "DA",
        definition: "An algorithmic paradigm that makes the locally optimal choice at each step with the hope of finding a global optimum. Greedy algorithms are simple and efficient but do not always yield optimal solutions. They work correctly for problems with the greedy-choice property, such as Huffman coding, Kruskal's MST, and activity selection problems.",
        definitionChinese: "一种算法范式，在每一步做出局部最优选择，期望找到全局最优。贪心算法简单高效，但并不总是产生最优解。它们对具有贪心选择性质的问题正确工作，如霍夫曼编码、Kruskal最小生成树和活动选择问题。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    merge_sort: {
        term: "Merge Sort",
        termChinese: "归并排序",
        section: "DA",
        definition: "A divide-and-conquer sorting algorithm that recursively splits an array into halves, sorts each half, and merges them back in sorted order. Merge sort guarantees O(n log n) time complexity in all cases, making it highly predictable. It is stable, preserving the relative order of equal elements, but requires O(n) additional space.",
        definitionChinese: "一种分治排序算法，递归地将数组分成两半，排序每一半，然后按排序顺序合并。归并排序在所有情况下保证O(n log n)时间复杂度，使其高度可预测。它是稳定的，保持相等元素的相对顺序，但需要O(n)额外空间。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    quick_sort: {
        term: "Quick Sort",
        termChinese: "快速排序",
        section: "DA",
        definition: "A divide-and-conquer sorting algorithm that selects a pivot element and partitions the array into elements less than and greater than the pivot. It recursively sorts the partitions. Quick sort has O(n log n) average-case complexity and O(n squared) worst-case, but is often faster in practice due to good cache performance and low overhead.",
        definitionChinese: "一种分治排序算法，选择一个枢轴元素并将数组分为小于和大于枢轴的元素。它递归排序各分区。快速排序平均时间复杂度为O(n log n)，最坏情况为O(n²)，但由于良好的缓存性能和低开销，实际中通常更快。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    time_complexity: {
        term: "Time Complexity",
        termChinese: "时间复杂度",
        section: "DA",
        definition: "A computational measure that describes how the running time of an algorithm grows relative to the size of its input. It is expressed using asymptotic notation such as Big O, characterizing worst-case, average-case, or best-case scenarios. Understanding time complexity helps developers choose efficient algorithms for large-scale data processing tasks.",
        definitionChinese: "一种计算度量，描述算法的运行时间如何相对于输入大小增长。它使用渐近符号如Big O表示，描述最坏情况、平均情况或最好情况。理解时间复杂度帮助开发者为大规模数据处理任务选择高效的算法。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    space_complexity: {
        term: "Space Complexity",
        termChinese: "空间复杂度",
        section: "DA",
        definition: "A measure of the total amount of memory an algorithm requires relative to the size of its input, including both auxiliary space and input space. Like time complexity, it uses asymptotic notation. Space-efficient algorithms are critical for embedded systems, mobile applications, and processing large datasets that may not fit entirely in memory.",
        definitionChinese: "衡量算法相对于输入大小所需的总内存量，包括辅助空间和输入空间。与时间复杂度一样，它使用渐近符号。空间高效的算法对于嵌入式系统、移动应用和处理可能无法完全放入内存的大型数据集至关重要。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    big_o_notation: {
        term: "Big O Notation",
        termChinese: "大O符号",
        section: "DA",
        definition: "A mathematical notation that describes the upper bound of an algorithm's growth rate, characterizing its worst-case performance as input size increases. Common classes include O(1) constant, O(log n) logarithmic, O(n) linear, O(n log n) linearithmic, and O(n squared) quadratic. It abstracts away constants and lower-order terms for simplified analysis.",
        definitionChinese: "一种描述算法增长率上界的数学符号，随着输入大小增加表征其最坏情况性能。常见类别包括O(1)常数、O(log n)对数、O(n)线性、O(n log n)线性对数和O(n²)二次。它抽象掉常数和低阶项以简化分析。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    amortized_analysis: {
        term: "Amortized Analysis",
        termChinese: "均摊分析",
        section: "DA",
        definition: "A technique for analyzing the average time per operation over a worst-case sequence of operations, rather than analyzing each operation individually. It accounts for occasional expensive operations being offset by many cheap ones. Amortized analysis is applied to dynamic arrays, splay trees, and union-find data structures to show efficient overall performance.",
        definitionChinese: "一种分析最坏情况操作序列中每个操作平均时间的技术，而非单独分析每个操作。它考虑了偶尔的昂贵操作被许多廉价操作抵消的情况。均摊分析应用于动态数组、伸展树和并查集数据结构，以展示高效的整体性能。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    red_black_tree: {
        term: "Red-Black Tree",
        termChinese: "红黑树",
        section: "DA",
        definition: "A self-balancing binary search tree where each node is colored red or black, following specific rules that ensure the tree remains approximately balanced. No path from root to leaf is more than twice as long as any other. Red-black trees guarantee O(log n) time for search, insertion, and deletion, and are used in many standard library implementations.",
        definitionChinese: "一种自平衡二叉搜索树，每个节点被着色为红色或黑色，遵循确保树保持大致平衡的特定规则。从根到叶的路径长度不会超过任何其他路径的两倍。红黑树保证搜索、插入和删除的O(log n)时间，被许多标准库实现使用。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    trie: {
        term: "Trie",
        termChinese: "字典树",
        section: "DA",
        definition: "A tree-like data structure used for efficiently storing and retrieving strings, where each node represents a character and paths from root to nodes form prefixes. Tries enable O(m) lookup time where m is the string length, regardless of the number of stored strings. They are used in autocomplete, spell checkers, and IP routing tables.",
        definitionChinese: "一种用于高效存储和检索字符串的树状数据结构，每个节点代表一个字符，从根到节点的路径构成前缀。字典树实现O(m)查找时间，其中m是字符串长度，与存储的字符串数量无关。它们用于自动补全、拼写检查器和IP路由表。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    topological_sort: {
        term: "Topological Sort",
        termChinese: "拓扑排序",
        section: "DA",
        definition: "A linear ordering of vertices in a directed acyclic graph such that for every directed edge from vertex u to vertex v, u comes before v in the ordering. It is computed using DFS or Kahn's algorithm with in-degree tracking. Topological sort is used for task scheduling, build systems, course prerequisite planning, and dependency resolution.",
        definitionChinese: "有向无环图中顶点的线性排序，使得对于每条从顶点u到顶点v的有向边，u在排序中出现在v之前。它使用DFS或Kahn的入度跟踪算法计算。拓扑排序用于任务调度、构建系统、课程前置规划和依赖解析。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    minimum_spanning_tree: {
        term: "Minimum Spanning Tree",
        termChinese: "最小生成树",
        section: "DA",
        definition: "A subset of edges in a connected, weighted, undirected graph that connects all vertices together with the minimum possible total edge weight and without forming any cycles. Algorithms like Kruskal's and Prim's efficiently compute MSTs. Applications include network design, clustering, circuit wiring, and approximation algorithms for NP-hard problems.",
        definitionChinese: "连通加权无向图中边的子集，以最小可能的总边权将所有顶点连接在一起且不形成任何环。Kruskal和Prim等算法高效计算MST。应用包括网络设计、聚类、电路布线和NP难问题的近似算法。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    // ===== AI: Artificial Intelligence =====
    search_algorithm: {
        term: "Search Algorithm",
        termChinese: "搜索算法",
        section: "AI",
        definition: "A systematic method for exploring a problem space to find a solution or goal state. Search algorithms can be uninformed like breadth-first and depth-first search, or informed like A-star using heuristics. They form the backbone of AI problem-solving, enabling agents to navigate state spaces and find optimal or satisfactory solutions.",
        definitionChinese: "一种系统性方法，用于探索问题空间以找到解决方案或目标状态。搜索算法可以是无信息的如广度优先和深度优先搜索，或有信息的如使用启发式的A*。它们构成AI问题解决的骨干，使智能体能够导航状态空间并找到最优或满意的解。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    heuristic: {
        term: "Heuristic",
        termChinese: "启发式",
        section: "AI",
        definition: "A problem-solving strategy or rule of thumb that provides a practical, often approximate solution when exact methods are too slow or complex. In search algorithms, heuristic functions estimate the cost from a current state to the goal, guiding the search toward promising paths. Good heuristics dramatically improve search efficiency without guaranteeing optimality.",
        definitionChinese: "一种问题解决策略或经验法则，当精确方法太慢或太复杂时提供实用的、通常是近似的解决方案。在搜索算法中，启发式函数估计从当前状态到目标的代价，引导搜索朝有前途的路径前进。好的启发式大幅提高搜索效率，但不保证最优性。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    a_star: {
        term: "A* Search",
        termChinese: "A*搜索",
        section: "AI",
        definition: "An informed search algorithm that finds the lowest-cost path from a start to a goal node by combining the actual cost from the start with a heuristic estimate of remaining cost. A* is both complete and optimal when using an admissible heuristic that never overestimates. It is widely used in pathfinding, robotics navigation, and game AI.",
        definitionChinese: "一种有信息搜索算法，通过结合从起点的实际代价和对剩余代价的启发式估计，找到从起点到目标节点的最低代价路径。当使用不高估的可采纳启发式时，A*既完备又最优。它广泛用于寻路、机器人导航和游戏AI。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    minimax: {
        term: "Minimax",
        termChinese: "极小极大算法",
        section: "AI",
        definition: "A decision-making algorithm for two-player zero-sum games that recursively evaluates game states by assuming both players play optimally. The maximizing player tries to maximize the score while the minimizing player tries to minimize it. Minimax builds a complete game tree and is the foundation for adversarial search in games like chess and tic-tac-toe.",
        definitionChinese: "一种用于二人零和博弈的决策算法，通过假设双方都最优地下棋来递归评估游戏状态。极大化玩家试图最大化分数，极小化玩家试图最小化分数。极小极大构建完整的博弈树，是国际象棋和井字棋等游戏中对抗搜索的基础。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    alpha_beta_pruning: {
        term: "Alpha-Beta Pruning",
        termChinese: "Alpha-Beta剪枝",
        section: "AI",
        definition: "An optimization technique for the minimax algorithm that eliminates branches in the game tree that cannot influence the final decision. It maintains alpha and beta bounds representing the best guaranteed scores for the maximizing and minimizing players respectively. Alpha-beta pruning can reduce the effective branching factor significantly without affecting the result.",
        definitionChinese: "一种极小极大算法的优化技术，消除博弈树中不能影响最终决策的分支。它维护alpha和beta界限，分别代表极大化和极小化玩家的最佳保证分数。Alpha-beta剪枝可以在不影响结果的情况下显著减少有效分支因子。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    constraint_satisfaction: {
        term: "Constraint Satisfaction Problem",
        termChinese: "约束满足问题",
        section: "AI",
        definition: "A problem defined by a set of variables, each with a domain of possible values, and a set of constraints that restrict which combinations of values are allowed. CSP solvers use techniques like backtracking, arc consistency, and constraint propagation. Examples include Sudoku puzzles, scheduling problems, and map coloring assignments.",
        definitionChinese: "由一组变量（每个变量有一个可能值的域）和一组限制允许值组合的约束定义的问题。CSP求解器使用回溯、弧一致性和约束传播等技术。例子包括数独谜题、调度问题和地图着色分配。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    knowledge_representation: {
        term: "Knowledge Representation",
        termChinese: "知识表示",
        section: "AI",
        definition: "The study of how to formally encode information about the world so that AI systems can use it for reasoning and problem-solving. Common formalisms include semantic networks, frames, ontologies, and logic-based representations. Effective knowledge representation enables machines to store, retrieve, and manipulate facts, rules, and relationships about their domain.",
        definitionChinese: "研究如何正式编码关于世界的信息，使AI系统能够用于推理和问题解决。常见形式包括语义网络、框架、本体和基于逻辑的表示。有效的知识表示使机器能够存储、检索和操作关于其领域的事实、规则和关系。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    inference: {
        term: "Inference",
        termChinese: "推理",
        section: "AI",
        definition: "The process of deriving new conclusions or predictions from known facts, rules, and observations using logical or probabilistic reasoning. In AI, inference engines apply rules to knowledge bases to answer queries and make decisions. In machine learning, inference refers to using a trained model to make predictions on new, unseen data inputs.",
        definitionChinese: "从已知事实、规则和观察中使用逻辑或概率推理得出新结论或预测的过程。在AI中，推理引擎将规则应用于知识库以回答查询和做出决策。在机器学习中，推理指使用训练好的模型对新的、未见过的数据输入进行预测。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    bayesian_network: {
        term: "Bayesian Network",
        termChinese: "贝叶斯网络",
        section: "AI",
        definition: "A directed acyclic graph that represents a set of random variables and their conditional dependencies through probability distributions. Each node represents a variable and each edge encodes a dependency. Bayesian networks enable efficient probabilistic inference, causal reasoning, and decision-making under uncertainty in domains like medical diagnosis and fault detection.",
        definitionChinese: "一种有向无环图，通过概率分布表示一组随机变量及其条件依赖关系。每个节点代表一个变量，每条边编码一个依赖关系。贝叶斯网络在医学诊断和故障检测等领域实现高效的概率推理、因果推理和不确定性下的决策。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    markov_decision_process: {
        term: "Markov Decision Process",
        termChinese: "马尔可夫决策过程",
        section: "AI",
        definition: "A mathematical framework for modeling sequential decision-making where outcomes are partly random and partly controlled by a decision-maker. An MDP is defined by states, actions, transition probabilities, and rewards. The Markov property states that future states depend only on the current state. MDPs are the formal foundation for reinforcement learning algorithms.",
        definitionChinese: "一种建模顺序决策的数学框架，其中结果部分是随机的、部分由决策者控制。MDP由状态、动作、转移概率和奖励定义。马尔可夫性质表明未来状态仅依赖于当前状态。MDP是强化学习算法的形式化基础。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    utility_function: {
        term: "Utility Function",
        termChinese: "效用函数",
        section: "AI",
        definition: "A function that assigns a numerical value representing the desirability or preference of an outcome for a rational agent. Utility functions enable agents to compare different outcomes and make optimal decisions by maximizing expected utility. They are central to decision theory, game theory, and rational agent design in artificial intelligence systems.",
        definitionChinese: "一种为理性智能体分配代表结果可取性或偏好的数值的函数。效用函数使智能体能够比较不同结果，并通过最大化期望效用做出最优决策。它们在决策理论、博弈论和人工智能系统中的理性智能体设计中至关重要。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    game_tree: {
        term: "Game Tree",
        termChinese: "博弈树",
        section: "AI",
        definition: "A tree structure representing all possible moves and resulting game states in a sequential game, where nodes represent game positions and edges represent moves. The root is the initial state and leaves are terminal states with outcome values. Game trees are analyzed using minimax, alpha-beta pruning, and Monte Carlo tree search algorithms.",
        definitionChinese: "表示顺序博弈中所有可能走法和结果游戏状态的树结构，其中节点代表游戏位置，边代表走法。根是初始状态，叶子是带有结果值的终端状态。博弈树使用极小极大、alpha-beta剪枝和蒙特卡洛树搜索算法进行分析。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    forward_chaining: {
        term: "Forward Chaining",
        termChinese: "前向链接",
        section: "AI",
        definition: "A data-driven inference strategy that starts with known facts and repeatedly applies rules to derive new facts until the goal is reached or no more rules apply. It works from premises toward conclusions in a bottom-up fashion. Forward chaining is used in production rule systems, expert systems, and real-time monitoring applications for proactive reasoning.",
        definitionChinese: "一种数据驱动的推理策略，从已知事实开始，反复应用规则推导新事实，直到达到目标或没有更多规则可应用。它以自底向上的方式从前提推向结论。前向链接用于产生式规则系统、专家系统和实时监控应用的主动推理。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    backward_chaining: {
        term: "Backward Chaining",
        termChinese: "反向链接",
        section: "AI",
        definition: "A goal-driven inference strategy that starts with a desired goal and works backward to find facts and rules that support it. The system checks if the goal matches known facts; if not, it identifies rules whose conclusions match the goal and recursively tries to prove their premises. It is efficient when specific queries need answering.",
        definitionChinese: "一种目标驱动的推理策略，从期望目标开始，向后查找支持它的事实和规则。系统检查目标是否匹配已知事实；如果不匹配，则识别结论匹配目标的规则并递归尝试证明其前提。当需要回答特定查询时，它是高效的。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    first_order_logic: {
        term: "First-Order Logic",
        termChinese: "一阶逻辑",
        section: "AI",
        definition: "A formal logical system that extends propositional logic with quantifiers, variables, predicates, and functions to express statements about objects and their relationships. Universal and existential quantifiers allow expressing general rules and existence claims. First-order logic is the basis for knowledge representation, automated theorem proving, and Prolog programming.",
        definitionChinese: "一种正式的逻辑系统，用量词、变量、谓词和函数扩展命题逻辑，以表达关于对象及其关系的陈述。全称量词和存在量词允许表达一般规则和存在性声明。一阶逻辑是知识表示、自动定理证明和Prolog编程的基础。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    propositional_logic: {
        term: "Propositional Logic",
        termChinese: "命题逻辑",
        section: "AI",
        definition: "A branch of logic that deals with propositions which can be either true or false, and the logical connectives that combine them including AND, OR, NOT, implication, and biconditional. It provides the simplest formal framework for reasoning about truth values. Propositional logic underpins Boolean algebra, circuit design, and satisfiability problem solving.",
        definitionChinese: "逻辑的一个分支，处理可以为真或假的命题以及组合它们的逻辑连接词，包括AND、OR、NOT、蕴含和双条件。它提供了关于真值推理的最简单形式化框架。命题逻辑支撑布尔代数、电路设计和可满足性问题求解。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    planning: {
        term: "Planning",
        termChinese: "规划",
        section: "AI",
        definition: "The AI task of finding a sequence of actions that transforms an initial state into a desired goal state. Planning algorithms consider preconditions and effects of actions to construct valid plans. Classical approaches include STRIPS, partial-order planning, and graph planning. Modern AI planning is applied in robotics, logistics, game playing, and autonomous systems.",
        definitionChinese: "寻找将初始状态转换为期望目标状态的动作序列的AI任务。规划算法考虑动作的前置条件和效果以构建有效计划。经典方法包括STRIPS、偏序规划和图规划。现代AI规划应用于机器人学、物流、游戏和自主系统。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    reinforcement_learning_ai: {
        term: "Reinforcement Learning (AI)",
        termChinese: "强化学习（AI）",
        section: "AI",
        definition: "A machine learning paradigm where an agent learns to make decisions by interacting with an environment, receiving rewards or penalties for its actions. The agent aims to learn a policy that maximizes cumulative reward over time. Reinforcement learning combines trial-and-error exploration with exploitation of known good strategies, enabling autonomous learning behavior.",
        definitionChinese: "一种机器学习范式，智能体通过与环境交互、接收行动的奖励或惩罚来学习做出决策。智能体旨在学习一种策略，最大化随时间的累积奖励。强化学习将试错探索与利用已知良好策略相结合，实现自主学习行为。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    multi_agent_system: {
        term: "Multi-Agent System",
        termChinese: "多智能体系统",
        section: "AI",
        definition: "A system composed of multiple intelligent agents that interact with each other and their environment to achieve individual or collective goals. Agents may cooperate, compete, or negotiate using communication protocols and coordination mechanisms. Multi-agent systems model complex phenomena in distributed AI, traffic simulation, market economics, and collaborative robotics.",
        definitionChinese: "由多个智能体组成的系统，智能体彼此交互并与环境交互以实现个人或集体目标。智能体可以使用通信协议和协调机制进行合作、竞争或协商。多智能体系统在分布式AI、交通模拟、市场经济和协作机器人中建模复杂现象。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    expert_system: {
        term: "Expert System",
        termChinese: "专家系统",
        section: "AI",
        definition: "An AI program that emulates the decision-making ability of a human expert in a specific domain using a knowledge base of facts and rules with an inference engine. Expert systems were among the first successful AI applications, used in medical diagnosis, financial analysis, and equipment troubleshooting. They provide explanations for their recommendations and conclusions.",
        definitionChinese: "一种AI程序，使用事实和规则的知识库及推理引擎来模拟人类专家在特定领域的决策能力。专家系统是最早成功的AI应用之一，用于医学诊断、金融分析和设备故障排除。它们为其建议和结论提供解释。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    // ===== ML: Machine Learning =====
    supervised_learning: {
        term: "Supervised Learning",
        termChinese: "监督学习",
        section: "ML",
        definition: "A machine learning approach where models are trained on labeled datasets containing input-output pairs. The algorithm learns a mapping function from inputs to desired outputs by minimizing prediction errors. Common tasks include classification and regression. Examples include spam detection, image recognition, and predicting house prices from historical training data.",
        definitionChinese: "一种机器学习方法，模型在包含输入-输出对的标记数据集上训练。算法通过最小化预测误差学习从输入到期望输出的映射函数。常见任务包括分类和回归。例子包括垃圾邮件检测、图像识别和从历史训练数据预测房价。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    unsupervised_learning: {
        term: "Unsupervised Learning",
        termChinese: "无监督学习",
        section: "ML",
        definition: "A machine learning approach where models discover hidden patterns and structures in unlabeled data without predefined output categories. The algorithm identifies clusters, associations, and dimensionality reductions on its own. Applications include customer segmentation, anomaly detection, topic modeling, and data compression through learned representations of input features.",
        definitionChinese: "一种机器学习方法，模型在没有预定义输出类别的无标记数据中发现隐藏的模式和结构。算法自行识别聚类、关联和降维。应用包括客户细分、异常检测、主题建模和通过学习输入特征的表示进行数据压缩。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    linear_regression: {
        term: "Linear Regression",
        termChinese: "线性回归",
        section: "ML",
        definition: "A supervised learning algorithm that models the relationship between input features and a continuous output by fitting a linear equation to the observed data. It minimizes the sum of squared residuals between predicted and actual values. Linear regression is interpretable and serves as the foundation for understanding more complex regression and statistical modeling techniques.",
        definitionChinese: "一种监督学习算法，通过将线性方程拟合到观测数据来建模输入特征与连续输出之间的关系。它最小化预测值和实际值之间残差平方和。线性回归具有可解释性，是理解更复杂回归和统计建模技术的基础。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    logistic_regression: {
        term: "Logistic Regression",
        termChinese: "逻辑回归",
        section: "ML",
        definition: "A supervised classification algorithm that uses a logistic (sigmoid) function to model the probability that an input belongs to a particular class. Despite its name, it is used for classification, not regression. The output is a probability between zero and one, and a threshold determines class assignment. It is widely used for binary classification problems.",
        definitionChinese: "一种监督分类算法，使用逻辑（sigmoid）函数建模输入属于特定类别的概率。尽管名称如此，它用于分类而非回归。输出是零到一之间的概率，阈值决定类别分配。它广泛用于二元分类问题。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    decision_tree: {
        term: "Decision Tree",
        termChinese: "决策树",
        section: "ML",
        definition: "A supervised learning model structured as a tree where internal nodes represent feature tests, branches represent outcomes, and leaf nodes represent class labels or values. The tree is built by recursively selecting features that best split the data using criteria like information gain or Gini impurity. Decision trees are intuitive, interpretable, and handle both classification and regression.",
        definitionChinese: "一种结构为树的监督学习模型，内部节点代表特征测试，分支代表结果，叶节点代表类别标签或值。通过递归选择使用信息增益或基尼不纯度等标准最佳分割数据的特征来构建树。决策树直观、可解释，可处理分类和回归。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    random_forest: {
        term: "Random Forest",
        termChinese: "随机森林",
        section: "ML",
        definition: "An ensemble learning method that constructs multiple decision trees during training and outputs the mode of their predictions for classification or the mean for regression. Each tree is trained on a random subset of data and features, reducing overfitting. Random forests provide robust performance, handle high-dimensional data well, and offer feature importance rankings.",
        definitionChinese: "一种集成学习方法，在训练期间构建多个决策树，并输出其预测的众数（分类）或均值（回归）。每棵树在数据和特征的随机子集上训练，减少过拟合。随机森林提供稳健的性能，能很好地处理高维数据，并提供特征重要性排名。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    support_vector_machine: {
        term: "Support Vector Machine",
        termChinese: "支持向量机",
        section: "ML",
        definition: "A supervised learning algorithm that finds the optimal hyperplane maximizing the margin between different classes in the feature space. Support vectors are the data points closest to the decision boundary. SVMs can handle non-linear classification using kernel functions that map data to higher dimensions. They are effective for high-dimensional classification tasks.",
        definitionChinese: "一种监督学习算法，在特征空间中找到最大化不同类别之间间隔的最优超平面。支持向量是最接近决策边界的数据点。SVM可以使用核函数将数据映射到更高维度来处理非线性分类。它们对高维分类任务很有效。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    k_nearest_neighbors: {
        term: "K-Nearest Neighbors",
        termChinese: "K近邻",
        section: "ML",
        definition: "A simple supervised learning algorithm that classifies a new data point based on the majority class among its K closest training examples, measured by a distance metric like Euclidean distance. KNN is instance-based, requiring no explicit training phase. It is intuitive but computationally expensive for large datasets since it must compare against all stored instances.",
        definitionChinese: "一种简单的监督学习算法，根据K个最近训练样本中的多数类别对新数据点进行分类，使用欧氏距离等距离度量。KNN是基于实例的，不需要显式训练阶段。它直观但对大型数据集计算昂贵，因为必须与所有存储的实例进行比较。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    k_means_clustering: {
        term: "K-Means Clustering",
        termChinese: "K均值聚类",
        section: "ML",
        definition: "An unsupervised learning algorithm that partitions data into K clusters by iteratively assigning each point to the nearest cluster centroid and then updating centroids to the mean of assigned points. The process repeats until convergence. K-means is simple and scalable but requires choosing K in advance and assumes roughly spherical cluster shapes.",
        definitionChinese: "一种无监督学习算法，通过迭代地将每个点分配到最近的聚类质心，然后将质心更新为已分配点的均值，将数据分为K个聚类。该过程重复直到收敛。K-means简单可扩展，但需要预先选择K且假设大致球形的聚类形状。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    principal_component_analysis: {
        term: "Principal Component Analysis",
        termChinese: "主成分分析",
        section: "ML",
        definition: "An unsupervised dimensionality reduction technique that transforms data into a new coordinate system where the axes, called principal components, capture maximum variance in descending order. PCA uses eigenvectors of the covariance matrix to identify these directions. It reduces feature dimensions while preserving the most important patterns for visualization and computational efficiency.",
        definitionChinese: "一种无监督降维技术，将数据变换到新的坐标系，其中称为主成分的轴按降序捕获最大方差。PCA使用协方差矩阵的特征向量来识别这些方向。它在保留最重要模式的同时减少特征维度，用于可视化和计算效率。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    cross_validation: {
        term: "Cross-Validation",
        termChinese: "交叉验证",
        section: "ML",
        definition: "A model evaluation technique that partitions data into multiple folds, training the model on some folds and testing on the remaining ones across multiple rounds. K-fold cross-validation divides data into K subsets, using each as a test set once. It provides a more reliable estimate of model performance and helps detect overfitting compared to a single train-test split.",
        definitionChinese: "一种模型评估技术，将数据分成多个折叠，在多轮中在部分折叠上训练模型并在其余折叠上测试。K折交叉验证将数据分为K个子集，每个子集用作一次测试集。与单次训练-测试分割相比，它提供更可靠的模型性能估计并帮助检测过拟合。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    bias_variance_tradeoff: {
        term: "Bias-Variance Tradeoff",
        termChinese: "偏差-方差权衡",
        section: "ML",
        definition: "The fundamental tension in machine learning between a model's ability to fit training data (low bias) and its ability to generalize to new data (low variance). High bias leads to underfitting while high variance leads to overfitting. The optimal model balances both, minimizing total error. This tradeoff guides model selection and regularization strategies.",
        definitionChinese: "机器学习中模型拟合训练数据的能力（低偏差）和泛化到新数据的能力（低方差）之间的基本张力。高偏差导致欠拟合，高方差导致过拟合。最优模型平衡两者，最小化总误差。这种权衡指导模型选择和正则化策略。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    regularization: {
        term: "Regularization",
        termChinese: "正则化",
        section: "ML",
        definition: "A technique that adds a penalty term to the loss function to discourage overly complex models and prevent overfitting. L1 regularization (Lasso) promotes sparsity by driving some weights to zero, while L2 regularization (Ridge) shrinks weights uniformly. Regularization improves model generalization by constraining the hypothesis space and reducing sensitivity to training noise.",
        definitionChinese: "一种向损失函数添加惩罚项以阻止过于复杂的模型和防止过拟合的技术。L1正则化（Lasso）通过将某些权重驱动为零来促进稀疏性，L2正则化（Ridge）均匀缩小权重。正则化通过约束假设空间和降低对训练噪声的敏感性来提高模型泛化能力。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    gradient_descent: {
        term: "Gradient Descent",
        termChinese: "梯度下降",
        section: "ML",
        definition: "An iterative optimization algorithm that minimizes a loss function by repeatedly updating parameters in the direction opposite to the gradient. The learning rate controls the step size of each update. Variants include batch gradient descent using all data, stochastic gradient descent using one sample, and mini-batch gradient descent using small subsets of training data.",
        definitionChinese: "一种迭代优化算法，通过沿梯度反方向反复更新参数来最小化损失函数。学习率控制每次更新的步长。变体包括使用所有数据的批量梯度下降、使用一个样本的随机梯度下降和使用训练数据小子集的小批量梯度下降。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    feature_engineering: {
        term: "Feature Engineering",
        termChinese: "特征工程",
        section: "ML",
        definition: "The process of using domain knowledge to select, transform, and create input variables that make machine learning algorithms work more effectively. Techniques include normalization, one-hot encoding, polynomial features, and interaction terms. Good feature engineering can dramatically improve model performance and is often more impactful than choosing a more complex algorithm.",
        definitionChinese: "使用领域知识选择、变换和创建输入变量以使机器学习算法更有效工作的过程。技术包括归一化、独热编码、多项式特征和交互项。好的特征工程可以显著提高模型性能，通常比选择更复杂的算法更有影响力。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    overfitting: {
        term: "Overfitting",
        termChinese: "过拟合",
        section: "ML",
        definition: "A modeling error that occurs when a machine learning model learns the training data too well, capturing noise and random fluctuations rather than the underlying pattern. Overfitted models perform excellently on training data but poorly on unseen test data. Prevention strategies include regularization, cross-validation, early stopping, and using more diverse training data.",
        definitionChinese: "当机器学习模型过度学习训练数据、捕获噪声和随机波动而非底层模式时发生的建模错误。过拟合模型在训练数据上表现优秀但在未见测试数据上表现不佳。预防策略包括正则化、交叉验证、早停和使用更多样化的训练数据。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    underfitting: {
        term: "Underfitting",
        termChinese: "欠拟合",
        section: "ML",
        definition: "A modeling error that occurs when a machine learning model is too simple to capture the underlying patterns in the data, resulting in poor performance on both training and test data. Underfitting indicates high bias and can be addressed by using more complex models, adding more features, reducing regularization, or training for longer periods.",
        definitionChinese: "当机器学习模型过于简单而无法捕获数据中底层模式时发生的建模错误，导致在训练和测试数据上都表现不佳。欠拟合表示高偏差，可以通过使用更复杂的模型、添加更多特征、减少正则化或更长时间训练来解决。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    ensemble_method: {
        term: "Ensemble Method",
        termChinese: "集成方法",
        section: "ML",
        definition: "A machine learning technique that combines multiple individual models to produce a stronger overall prediction than any single model alone. Common approaches include bagging which reduces variance, boosting which reduces bias, and stacking which learns to combine model outputs. Random forests and gradient-boosted trees are popular ensemble implementations with strong empirical performance.",
        definitionChinese: "一种机器学习技术，结合多个单独模型以产生比任何单个模型更强的整体预测。常见方法包括减少方差的bagging、减少偏差的boosting和学习组合模型输出的stacking。随机森林和梯度提升树是具有强大实证性能的流行集成实现。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    naive_bayes: {
        term: "Naive Bayes",
        termChinese: "朴素贝叶斯",
        section: "ML",
        definition: "A family of probabilistic classifiers based on Bayes' theorem that assume conditional independence among features given the class label. Despite this strong and often unrealistic assumption, naive Bayes classifiers perform surprisingly well in practice, especially for text classification. They are fast to train, require little data, and handle high-dimensional feature spaces efficiently.",
        definitionChinese: "一系列基于贝叶斯定理的概率分类器，假设给定类别标签下特征之间条件独立。尽管这个强假设通常不现实，朴素贝叶斯分类器在实践中表现出奇地好，特别是在文本分类中。它们训练快速，需要少量数据，能高效处理高维特征空间。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    roc_curve: {
        term: "ROC Curve",
        termChinese: "ROC曲线",
        section: "ML",
        definition: "A graphical plot that illustrates the diagnostic ability of a binary classifier by plotting the true positive rate against the false positive rate at various threshold settings. The area under the ROC curve (AUC) quantifies overall classifier performance, with a value of one indicating perfect classification. ROC curves enable comparison between different models and threshold selection.",
        definitionChinese: "一种图形图表，通过在不同阈值设置下绘制真正率与假正率来说明二元分类器的诊断能力。ROC曲线下面积（AUC）量化分类器的整体性能，值为1表示完美分类。ROC曲线可以比较不同模型并选择阈值。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    // ===== DL: Deep Learning =====
    neural_network: {
        term: "Neural Network",
        termChinese: "神经网络",
        section: "DL",
        definition: "A computational model inspired by the structure of biological neural systems, consisting of interconnected layers of artificial neurons that process information. Networks contain input, hidden, and output layers where each connection has a learnable weight. Neural networks can approximate complex nonlinear functions and are the foundation of all deep learning architectures.",
        definitionChinese: "受生物神经系统结构启发的计算模型，由处理信息的相互连接的人工神经元层组成。网络包含输入层、隐藏层和输出层，每个连接有一个可学习的权重。神经网络可以近似复杂的非线性函数，是所有深度学习架构的基础。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    perceptron: {
        term: "Perceptron",
        termChinese: "感知机",
        section: "DL",
        definition: "The simplest type of artificial neural network consisting of a single neuron that computes a weighted sum of its inputs, adds a bias, and applies a step activation function to produce a binary output. The perceptron can learn linearly separable patterns through an iterative weight update rule. It is the historical building block of modern neural networks.",
        definitionChinese: "最简单的人工神经网络类型，由单个神经元组成，计算输入的加权和，添加偏置，并应用阶跃激活函数产生二元输出。感知机可以通过迭代权重更新规则学习线性可分模式。它是现代神经网络的历史构建块。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    activation_function: {
        term: "Activation Function",
        termChinese: "激活函数",
        section: "DL",
        definition: "A mathematical function applied to the output of each neuron in a neural network that introduces non-linearity, enabling the network to learn complex patterns. Common activation functions include ReLU, sigmoid, tanh, and softmax. Without activation functions, a neural network would only compute linear transformations regardless of its depth or number of layers.",
        definitionChinese: "应用于神经网络中每个神经元输出的数学函数，引入非线性，使网络能够学习复杂模式。常见的激活函数包括ReLU、sigmoid、tanh和softmax。没有激活函数，无论深度或层数如何，神经网络只能计算线性变换。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    backpropagation: {
        term: "Backpropagation",
        termChinese: "反向传播",
        section: "DL",
        definition: "The primary algorithm for training neural networks, which computes gradients of the loss function with respect to each weight by applying the chain rule backward through the network layers. These gradients indicate how to adjust weights to reduce prediction error. Backpropagation enables efficient training of deep networks and is paired with optimization algorithms like SGD.",
        definitionChinese: "训练神经网络的主要算法，通过链式法则反向通过网络层计算损失函数相对于每个权重的梯度。这些梯度指示如何调整权重以减少预测误差。反向传播使深度网络的高效训练成为可能，并与SGD等优化算法配合使用。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    convolutional_neural_network: {
        term: "Convolutional Neural Network",
        termChinese: "卷积神经网络",
        section: "DL",
        definition: "A deep learning architecture designed for processing grid-structured data like images, using convolutional layers that apply learnable filters to detect local patterns such as edges and textures. CNNs use parameter sharing and pooling to reduce spatial dimensions while building hierarchical feature representations. They excel at image classification, object detection, and visual recognition tasks.",
        definitionChinese: "一种为处理图像等网格结构数据设计的深度学习架构，使用卷积层应用可学习的滤波器来检测边缘和纹理等局部模式。CNN使用参数共享和池化来减少空间维度，同时构建层次特征表示。它们在图像分类、目标检测和视觉识别任务中表现出色。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    recurrent_neural_network: {
        term: "Recurrent Neural Network",
        termChinese: "循环神经网络",
        section: "DL",
        definition: "A neural network architecture designed for sequential data where connections between nodes form directed cycles, allowing information to persist across time steps. RNNs maintain a hidden state that captures temporal dependencies in data like text, speech, and time series. They process inputs one step at a time, updating their internal state with each new observation.",
        definitionChinese: "一种为序列数据设计的神经网络架构，节点之间的连接形成有向循环，允许信息在时间步之间持续。RNN维护隐藏状态，捕获文本、语音和时间序列等数据中的时间依赖性。它们一次处理一个输入步骤，每次新观察更新内部状态。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    lstm: {
        term: "Long Short-Term Memory",
        termChinese: "长短期记忆网络",
        section: "DL",
        definition: "An advanced recurrent neural network architecture that uses gate mechanisms including forget, input, and output gates to control information flow, effectively solving the vanishing gradient problem. LSTMs can learn long-range dependencies in sequential data by selectively remembering or forgetting information. They are widely used in language modeling, speech recognition, and time series forecasting.",
        definitionChinese: "一种高级循环神经网络架构，使用包括遗忘门、输入门和输出门的门控机制来控制信息流，有效解决梯度消失问题。LSTM通过选择性地记忆或遗忘信息来学习序列数据中的长程依赖。它们广泛用于语言建模、语音识别和时间序列预测。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    transformer: {
        term: "Transformer",
        termChinese: "Transformer",
        section: "DL",
        definition: "A deep learning architecture that relies entirely on self-attention mechanisms to process sequential data in parallel, eliminating the need for recurrence. Transformers use multi-head attention, positional encoding, and feed-forward layers. They achieve state-of-the-art results in NLP, computer vision, and generative AI. GPT, BERT, and Vision Transformers are prominent examples.",
        definitionChinese: "一种完全依赖自注意力机制并行处理序列数据的深度学习架构，消除了对循环的需要。Transformer使用多头注意力、位置编码和前馈层。它们在NLP、计算机视觉和生成式AI中达到最先进的结果。GPT、BERT和Vision Transformer是突出的例子。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    attention_mechanism: {
        term: "Attention Mechanism",
        termChinese: "注意力机制",
        section: "DL",
        definition: "A neural network component that allows models to dynamically focus on the most relevant parts of the input when producing each element of the output. Attention computes weighted sums of input representations, where weights reflect the importance of each input position. It dramatically improves performance on tasks requiring alignment between input and output sequences.",
        definitionChinese: "一种神经网络组件，允许模型在产生输出的每个元素时动态关注输入中最相关的部分。注意力计算输入表示的加权和，权重反映每个输入位置的重要性。它大幅提高了需要输入和输出序列对齐的任务的性能。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    batch_normalization: {
        term: "Batch Normalization",
        termChinese: "批量归一化",
        section: "DL",
        definition: "A technique that normalizes the inputs of each layer by re-centering and re-scaling them using the mean and variance computed over a mini-batch during training. It reduces internal covariate shift, stabilizes the learning process, and allows higher learning rates. Batch normalization accelerates training convergence and acts as a mild form of regularization.",
        definitionChinese: "一种通过使用训练期间小批量计算的均值和方差来重新居中和重新缩放每层输入的技术。它减少内部协变量偏移，稳定学习过程，并允许更高的学习率。批量归一化加速训练收敛并起到轻度正则化的作用。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    dropout: {
        term: "Dropout",
        termChinese: "Dropout",
        section: "DL",
        definition: "A regularization technique that randomly deactivates a fraction of neurons during each training iteration, preventing any single neuron from becoming overly specialized. The dropped neurons are reactivated during inference. Dropout forces the network to learn redundant, distributed representations, effectively reducing overfitting and improving generalization on unseen data across many architectures.",
        definitionChinese: "一种正则化技术，在每次训练迭代期间随机停用一部分神经元，防止任何单个神经元过度专门化。在推理期间重新激活被丢弃的神经元。Dropout迫使网络学习冗余的分布式表示，有效减少过拟合并提高在许多架构上对未见数据的泛化能力。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    transfer_learning: {
        term: "Transfer Learning",
        termChinese: "迁移学习",
        section: "DL",
        definition: "A technique where a model trained on one task is reused as the starting point for a model on a different but related task. Pre-trained models provide learned feature representations that transfer to new domains with limited data. Transfer learning dramatically reduces training time and data requirements, and is standard practice in computer vision and natural language processing.",
        definitionChinese: "一种将在一个任务上训练的模型作为不同但相关任务模型起点的技术。预训练模型提供学习到的特征表示，可以迁移到数据有限的新领域。迁移学习大幅减少训练时间和数据需求，是计算机视觉和自然语言处理中的标准实践。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    generative_adversarial_network: {
        term: "Generative Adversarial Network",
        termChinese: "生成对抗网络",
        section: "DL",
        definition: "A deep learning framework consisting of two competing neural networks: a generator that creates synthetic data samples and a discriminator that distinguishes real from generated samples. Through adversarial training, both networks improve until the generator produces highly realistic outputs. GANs are used for image synthesis, style transfer, data augmentation, and super-resolution tasks.",
        definitionChinese: "一种由两个竞争神经网络组成的深度学习框架：一个生成合成数据样本的生成器和一个区分真实和生成样本的判别器。通过对抗训练，两个网络都不断改进，直到生成器产生高度逼真的输出。GAN用于图像合成、风格迁移、数据增强和超分辨率任务。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    autoencoder: {
        term: "Autoencoder",
        termChinese: "自编码器",
        section: "DL",
        definition: "An unsupervised neural network that learns to compress input data into a lower-dimensional latent representation through an encoder, then reconstruct the original input through a decoder. The bottleneck layer forces the network to learn the most important features. Autoencoders are used for dimensionality reduction, denoising, anomaly detection, and generative modeling tasks.",
        definitionChinese: "一种无监督神经网络，学习通过编码器将输入数据压缩为低维潜在表示，然后通过解码器重建原始输入。瓶颈层迫使网络学习最重要的特征。自编码器用于降维、去噪、异常检测和生成建模任务。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    optimizer_sgd: {
        term: "Stochastic Gradient Descent",
        termChinese: "随机梯度下降",
        section: "DL",
        definition: "An optimization algorithm that updates model parameters using the gradient computed from a single randomly selected training example or a small mini-batch at each step. SGD introduces noise that can help escape local minima and saddle points. With momentum variants, it accelerates convergence by accumulating past gradients to smooth the optimization trajectory through parameter space.",
        definitionChinese: "一种优化算法，使用每步从单个随机选择的训练样本或小批量计算的梯度来更新模型参数。SGD引入的噪声有助于逃离局部最小值和鞍点。通过动量变体，它通过累积过去的梯度来平滑参数空间中的优化轨迹来加速收敛。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    optimizer_adam: {
        term: "Adam Optimizer",
        termChinese: "Adam优化器",
        section: "DL",
        definition: "An adaptive learning rate optimization algorithm that combines the benefits of AdaGrad and RMSProp by maintaining per-parameter running averages of both first and second moments of the gradients. Adam automatically adjusts learning rates for each parameter, making it robust across many architectures. It is the default optimizer choice for most deep learning training scenarios.",
        definitionChinese: "一种自适应学习率优化算法，通过维护梯度的一阶和二阶矩的逐参数运行平均值来结合AdaGrad和RMSProp的优点。Adam自动调整每个参数的学习率，使其在许多架构中具有鲁棒性。它是大多数深度学习训练场景的默认优化器选择。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    loss_function: {
        term: "Loss Function",
        termChinese: "损失函数",
        section: "DL",
        definition: "A mathematical function that quantifies the difference between a model's predictions and the actual target values, providing the optimization objective during training. Common loss functions include mean squared error for regression and cross-entropy for classification. The choice of loss function directly shapes what the model learns and how it penalizes different types of errors.",
        definitionChinese: "一种量化模型预测与实际目标值之间差异的数学函数，在训练期间提供优化目标。常见的损失函数包括用于回归的均方误差和用于分类的交叉熵。损失函数的选择直接影响模型学习什么以及如何惩罚不同类型的错误。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    vanishing_gradient: {
        term: "Vanishing Gradient Problem",
        termChinese: "梯度消失问题",
        section: "DL",
        definition: "A training difficulty in deep neural networks where gradients become exponentially smaller as they are propagated backward through many layers, causing earlier layers to learn extremely slowly or stop learning altogether. This occurs especially with sigmoid and tanh activations. Solutions include ReLU activations, residual connections, batch normalization, and LSTM gating mechanisms.",
        definitionChinese: "深度神经网络中的训练困难，梯度在反向传播通过多层时变得指数级地小，导致较早的层学习极慢或完全停止学习。这尤其在sigmoid和tanh激活中发生。解决方案包括ReLU激活、残差连接、批量归一化和LSTM门控机制。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    residual_network: {
        term: "Residual Network",
        termChinese: "残差网络",
        section: "DL",
        definition: "A deep neural network architecture that uses skip connections to add the input of a layer directly to its output, allowing gradients to flow more easily through very deep networks. Residual connections let layers learn residual mappings instead of full transformations. ResNets enable training of networks with hundreds of layers and have become foundational in modern computer vision.",
        definitionChinese: "一种深度神经网络架构，使用跳跃连接将层的输入直接添加到其输出，使梯度更容易流过非常深的网络。残差连接让层学习残差映射而非完整变换。ResNet使数百层网络的训练成为可能，已成为现代计算机视觉的基础。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    fine_tuning: {
        term: "Fine-Tuning",
        termChinese: "微调",
        section: "DL",
        definition: "The process of taking a pre-trained model and further training it on a new, typically smaller dataset specific to a target task. Fine-tuning adjusts the learned weights to adapt the model's knowledge to the new domain. Usually, earlier layers are frozen while later layers are updated, as earlier features tend to be more general and transferable across tasks.",
        definitionChinese: "取一个预训练模型并在特定于目标任务的新的、通常更小的数据集上进一步训练的过程。微调调整学习到的权重以使模型的知识适应新领域。通常冻结较早的层并更新较后的层，因为较早的特征往往更通用且可在任务间迁移。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    // ===== CV: Computer Vision =====
    edge_detection: {
        term: "Edge Detection",
        termChinese: "边缘检测",
        section: "CV",
        definition: "A fundamental image processing technique that identifies points in an image where brightness changes sharply, corresponding to object boundaries and structural features. Common algorithms include the Sobel operator, Canny edge detector, and Laplacian of Gaussian. Edge detection reduces data volume while preserving important structural information for downstream computer vision tasks.",
        definitionChinese: "一种基本的图像处理技术，识别图像中亮度急剧变化的点，对应于物体边界和结构特征。常见算法包括Sobel算子、Canny边缘检测器和高斯拉普拉斯算子。边缘检测在保留重要结构信息的同时减少数据量，用于下游计算机视觉任务。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    image_filtering: {
        term: "Image Filtering",
        termChinese: "图像滤波",
        section: "CV",
        definition: "The process of modifying an image by applying a kernel or filter that computes new pixel values based on neighboring pixels. Low-pass filters like Gaussian blur smooth images and reduce noise, while high-pass filters enhance edges and fine details. Image filtering is a preprocessing step used in feature extraction, denoising, and image enhancement pipelines.",
        definitionChinese: "通过应用基于相邻像素计算新像素值的核或滤波器来修改图像的过程。高斯模糊等低通滤波器平滑图像并减少噪声，高通滤波器增强边缘和细节。图像滤波是特征提取、去噪和图像增强管道中的预处理步骤。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    convolution_cv: {
        term: "Convolution (Computer Vision)",
        termChinese: "卷积（计算机视觉）",
        section: "CV",
        definition: "A mathematical operation that slides a small kernel matrix over an image, computing the element-wise product and sum at each position to produce a feature map. Convolution detects specific patterns like edges, corners, and textures depending on the kernel values. It is the core operation in convolutional neural networks for hierarchical visual feature extraction.",
        definitionChinese: "一种数学运算，将小核矩阵滑过图像，在每个位置计算逐元素乘积和总和以产生特征图。卷积根据核值检测边缘、角点和纹理等特定模式。它是卷积神经网络中用于层次视觉特征提取的核心操作。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    feature_extraction: {
        term: "Feature Extraction",
        termChinese: "特征提取",
        section: "CV",
        definition: "The process of automatically or manually identifying and computing meaningful attributes from raw image data that can be used for recognition and classification tasks. Traditional methods include SIFT, SURF, and HOG descriptors. Deep learning approaches use convolutional layers to learn hierarchical features automatically, replacing hand-crafted feature engineering in modern computer vision systems.",
        definitionChinese: "从原始图像数据中自动或手动识别和计算可用于识别和分类任务的有意义属性的过程。传统方法包括SIFT、SURF和HOG描述符。深度学习方法使用卷积层自动学习层次特征，在现代计算机视觉系统中取代手工特征工程。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    sift: {
        term: "SIFT",
        termChinese: "尺度不变特征变换",
        section: "CV",
        definition: "Scale-Invariant Feature Transform, an algorithm that detects and describes local features in images that are invariant to scaling, rotation, and partially invariant to illumination changes. SIFT identifies keypoints at multiple scales using difference of Gaussians and computes distinctive orientation histograms as descriptors. It is widely used for image matching, stitching, and object recognition.",
        definitionChinese: "尺度不变特征变换，一种检测和描述图像中对缩放、旋转不变且对光照变化部分不变的局部特征的算法。SIFT使用高斯差分在多尺度下识别关键点，并计算独特的方向直方图作为描述符。它广泛用于图像匹配、拼接和物体识别。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    optical_flow: {
        term: "Optical Flow",
        termChinese: "光流",
        section: "CV",
        definition: "The pattern of apparent motion of objects, surfaces, and edges in a visual scene between consecutive video frames, caused by the relative movement between the observer and the scene. Optical flow algorithms estimate per-pixel motion vectors. It is used in video stabilization, motion detection, autonomous navigation, and action recognition in video analysis.",
        definitionChinese: "由观察者和场景之间的相对运动引起的、连续视频帧之间视觉场景中物体、表面和边缘的表观运动模式。光流算法估计逐像素运动向量。它用于视频稳定、运动检测、自主导航和视频分析中的动作识别。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    stereo_vision: {
        term: "Stereo Vision",
        termChinese: "立体视觉",
        section: "CV",
        definition: "A technique that extracts three-dimensional depth information from two or more images taken from slightly different viewpoints, mimicking human binocular vision. By finding corresponding points between stereo image pairs and computing their disparity, the system estimates depth. Stereo vision is used in autonomous vehicles, robotics, 3D reconstruction, and augmented reality applications.",
        definitionChinese: "一种从稍微不同视角拍摄的两个或更多图像中提取三维深度信息的技术，模仿人类双目视觉。通过找到立体图像对之间的对应点并计算其视差，系统估计深度。立体视觉用于自动驾驶车辆、机器人学、3D重建和增强现实应用。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    object_detection: {
        term: "Object Detection",
        termChinese: "目标检测",
        section: "CV",
        definition: "A computer vision task that involves identifying and localizing multiple objects within an image by predicting bounding boxes and class labels simultaneously. Modern approaches use deep learning architectures like YOLO, SSD, and Faster R-CNN. Object detection is essential for autonomous driving, surveillance systems, medical imaging, and robotic perception and manipulation tasks.",
        definitionChinese: "一种计算机视觉任务，通过同时预测边界框和类别标签来识别和定位图像中的多个物体。现代方法使用YOLO、SSD和Faster R-CNN等深度学习架构。目标检测对自动驾驶、监控系统、医学成像和机器人感知和操作任务至关重要。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    image_segmentation: {
        term: "Image Segmentation",
        termChinese: "图像分割",
        section: "CV",
        definition: "The process of partitioning an image into multiple meaningful regions or segments, assigning each pixel to a specific category. Unlike object detection which uses bounding boxes, segmentation provides pixel-level precision. Types include semantic segmentation, instance segmentation, and panoptic segmentation. It is critical in medical imaging, scene understanding, and autonomous navigation systems.",
        definitionChinese: "将图像划分为多个有意义的区域或片段、将每个像素分配到特定类别的过程。与使用边界框的目标检测不同，分割提供像素级精度。类型包括语义分割、实例分割和全景分割。它在医学成像、场景理解和自主导航系统中至关重要。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    semantic_segmentation: {
        term: "Semantic Segmentation",
        termChinese: "语义分割",
        section: "CV",
        definition: "A pixel-level classification task that assigns a semantic class label to every pixel in an image, such as road, sky, person, or vehicle. Unlike instance segmentation, it does not distinguish between different instances of the same class. Architectures like FCN, U-Net, and DeepLab are commonly used. Semantic segmentation enables precise scene understanding for autonomous systems.",
        definitionChinese: "一种像素级分类任务，为图像中的每个像素分配语义类别标签，如道路、天空、人或车辆。与实例分割不同，它不区分同一类别的不同实例。常用的架构包括FCN、U-Net和DeepLab。语义分割使自主系统能够精确理解场景。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    camera_model: {
        term: "Camera Model",
        termChinese: "相机模型",
        section: "CV",
        definition: "A mathematical representation that describes how three-dimensional world points are projected onto a two-dimensional image plane. The pinhole camera model is the simplest, characterized by intrinsic parameters like focal length and principal point, and extrinsic parameters defining camera position and orientation. Camera models are fundamental for 3D reconstruction and augmented reality.",
        definitionChinese: "描述三维世界点如何投影到二维图像平面的数学表示。针孔相机模型是最简单的，以焦距和主点等内参数以及定义相机位置和方向的外参数为特征。相机模型是3D重建和增强现实的基础。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    homography: {
        term: "Homography",
        termChinese: "单应性变换",
        section: "CV",
        definition: "A projective transformation represented by a three-by-three matrix that maps points from one plane to another in projective space. Homographies describe the relationship between two views of a planar surface. They are used for image stitching in panorama creation, perspective correction, augmented reality overlay, and camera calibration between different viewpoints.",
        definitionChinese: "由三乘三矩阵表示的射影变换，将点从投影空间中的一个平面映射到另一个平面。单应性描述了平面表面两个视图之间的关系。它们用于全景创建中的图像拼接、透视校正、增强现实叠加和不同视角之间的相机标定。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    epipolar_geometry: {
        term: "Epipolar Geometry",
        termChinese: "对极几何",
        section: "CV",
        definition: "The geometric relationship between two camera views of the same three-dimensional scene, described by the fundamental matrix or essential matrix. The epipolar constraint restricts corresponding point searches to lines rather than the entire image, dramatically reducing stereo matching complexity. It is fundamental to 3D reconstruction, visual odometry, and structure from motion algorithms.",
        definitionChinese: "同一三维场景的两个相机视图之间的几何关系，由基础矩阵或本质矩阵描述。对极约束将对应点搜索限制在线上而非整个图像，大幅减少立体匹配复杂度。它是3D重建、视觉里程计和运动恢复结构算法的基础。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    image_classification: {
        term: "Image Classification",
        termChinese: "图像分类",
        section: "CV",
        definition: "The task of assigning a single category label to an entire image from a predefined set of classes. Deep convolutional neural networks have achieved superhuman accuracy on benchmarks like ImageNet. Image classification is the foundation for many visual recognition systems and is applied in medical imaging, quality inspection, content moderation, and wildlife monitoring applications.",
        definitionChinese: "从预定义的类别集合中为整个图像分配单个类别标签的任务。深度卷积神经网络在ImageNet等基准上已达到超越人类的准确率。图像分类是许多视觉识别系统的基础，应用于医学成像、质量检测、内容审核和野生动物监测应用。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    face_recognition: {
        term: "Face Recognition",
        termChinese: "人脸识别",
        section: "CV",
        definition: "A biometric technology that identifies or verifies a person by analyzing facial features from images or video. Modern systems use deep learning to extract face embeddings, mapping faces to high-dimensional vectors where similar faces are close together. Face recognition involves detection, alignment, feature extraction, and matching stages, with applications in security and authentication.",
        definitionChinese: "一种通过分析图像或视频中的面部特征来识别或验证个人的生物特征技术。现代系统使用深度学习提取人脸嵌入，将人脸映射到高维向量空间中相似人脸距离相近。人脸识别涉及检测、对齐、特征提取和匹配阶段，应用于安全和身份验证。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    yolo: {
        term: "YOLO",
        termChinese: "YOLO目标检测",
        section: "CV",
        definition: "You Only Look Once, a real-time object detection system that frames detection as a single regression problem, predicting bounding boxes and class probabilities directly from full images in one evaluation. Unlike region-proposal methods, YOLO processes the entire image globally, achieving extremely fast inference speeds. It is widely deployed in real-time video surveillance and autonomous driving systems.",
        definitionChinese: "You Only Look Once，一种实时目标检测系统，将检测构建为单一回归问题，在一次评估中直接从完整图像预测边界框和类别概率。与区域提议方法不同，YOLO全局处理整个图像，实现极快的推理速度。它广泛部署在实时视频监控和自动驾驶系统中。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    region_proposal: {
        term: "Region Proposal",
        termChinese: "区域提议",
        section: "CV",
        definition: "A technique used in object detection that generates candidate bounding boxes likely to contain objects before classification. Methods include selective search, which groups similar pixels, and Region Proposal Networks in Faster R-CNN that learn to propose regions using neural networks. Region proposals reduce the search space, making detection more computationally efficient than exhaustive sliding window approaches.",
        definitionChinese: "一种在目标检测中使用的技术，在分类之前生成可能包含物体的候选边界框。方法包括将相似像素分组的选择性搜索，以及Faster R-CNN中使用神经网络学习提议区域的区域提议网络。区域提议减少搜索空间，使检测比穷举滑动窗口方法更高效。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    image_pyramid: {
        term: "Image Pyramid",
        termChinese: "图像金字塔",
        section: "CV",
        definition: "A multi-scale representation of an image created by repeatedly smoothing and subsampling to produce a series of progressively lower resolution versions. Gaussian and Laplacian pyramids are common types. Image pyramids enable multi-scale feature detection, template matching at different sizes, and efficient coarse-to-fine processing strategies in object detection and image blending.",
        definitionChinese: "通过反复平滑和下采样创建的图像多尺度表示，产生一系列逐渐降低分辨率的版本。高斯金字塔和拉普拉斯金字塔是常见类型。图像金字塔实现多尺度特征检测、不同大小的模板匹配以及目标检测和图像融合中高效的从粗到精处理策略。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    histogram_equalization: {
        term: "Histogram Equalization",
        termChinese: "直方图均衡化",
        section: "CV",
        definition: "An image enhancement technique that adjusts the contrast of an image by redistributing pixel intensity values so that the histogram of the output image is approximately uniform. It stretches the dynamic range, making details in dark and bright regions more visible. Adaptive variants like CLAHE apply equalization locally, handling varying illumination conditions more effectively.",
        definitionChinese: "一种图像增强技术，通过重新分布像素强度值使输出图像的直方图大致均匀来调整图像对比度。它扩展动态范围，使暗区和亮区的细节更可见。CLAHE等自适应变体在局部应用均衡化，更有效地处理不同的光照条件。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    morphological_operations: {
        term: "Morphological Operations",
        termChinese: "形态学操作",
        section: "CV",
        definition: "A set of image processing operations based on shape that process images according to a structuring element. Primary operations include erosion which shrinks bright regions, dilation which expands them, opening which removes small bright spots, and closing which fills small dark holes. They are widely used for noise removal, boundary extraction, and binary image preprocessing.",
        definitionChinese: "一组基于形状的图像处理操作，根据结构元素处理图像。主要操作包括收缩亮区的腐蚀、扩展亮区的膨胀、去除小亮点的开运算和填充小暗孔的闭运算。它们广泛用于噪声去除、边界提取和二值图像预处理。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    // ===== NP: Natural Language Processing =====
    tokenization: {
        term: "Tokenization",
        termChinese: "分词",
        section: "NP",
        definition: "The process of breaking text into smaller units called tokens, which can be words, subwords, or characters. Tokenization is the first step in most NLP pipelines, converting raw text into a format that models can process. Modern approaches like Byte-Pair Encoding and WordPiece create subword tokens that balance vocabulary size with the ability to handle unseen words.",
        definitionChinese: "将文本分解为称为标记的更小单元的过程，可以是词、子词或字符。分词是大多数NLP管道的第一步，将原始文本转换为模型可以处理的格式。BPE和WordPiece等现代方法创建子词标记，平衡词汇量大小和处理未见词的能力。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    word_embedding: {
        term: "Word Embedding",
        termChinese: "词嵌入",
        section: "NP",
        definition: "A dense vector representation of words in a continuous vector space where semantically similar words are mapped to nearby points. Unlike one-hot encoding, embeddings capture semantic relationships and analogies between words in a low-dimensional space. Word embeddings are learned from large text corpora and serve as input features for downstream NLP models and tasks.",
        definitionChinese: "词在连续向量空间中的密集向量表示，语义相似的词被映射到相近的点。与独热编码不同，嵌入在低维空间中捕获词之间的语义关系和类比。词嵌入从大型文本语料库中学习，作为下游NLP模型和任务的输入特征。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    word2vec: {
        term: "Word2Vec",
        termChinese: "Word2Vec",
        section: "NP",
        definition: "A neural network-based method for learning word embeddings from large text corpora using two architectures: Continuous Bag-of-Words which predicts a word from its context, and Skip-Gram which predicts context from a word. Word2Vec captures semantic and syntactic relationships, enabling vector arithmetic like king minus man plus woman equals queen. It revolutionized word representation learning.",
        definitionChinese: "一种基于神经网络的方法，使用两种架构从大型文本语料库中学习词嵌入：从上下文预测词的连续词袋模型和从词预测上下文的Skip-Gram。Word2Vec捕获语义和句法关系，实现如king减man加woman等于queen的向量运算。它革新了词表示学习。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    language_model: {
        term: "Language Model",
        termChinese: "语言模型",
        section: "NP",
        definition: "A probabilistic model that assigns probabilities to sequences of words, predicting the likelihood of the next word given preceding context. Language models learn statistical patterns of language from training data. Modern large language models like GPT use transformer architectures trained on massive corpora, enabling text generation, summarization, translation, and question answering at near-human levels.",
        definitionChinese: "一种为词序列分配概率的概率模型，根据前面的上下文预测下一个词的可能性。语言模型从训练数据中学习语言的统计模式。GPT等现代大语言模型使用在大规模语料库上训练的Transformer架构，实现接近人类水平的文本生成、摘要、翻译和问答。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    sequence_to_sequence: {
        term: "Sequence-to-Sequence",
        termChinese: "序列到序列",
        section: "NP",
        definition: "A neural network architecture that maps an input sequence of variable length to an output sequence of variable length using an encoder-decoder framework. The encoder compresses the input into a fixed-size context vector and the decoder generates the output token by token. Seq2Seq models are foundational for machine translation, text summarization, and dialogue generation tasks.",
        definitionChinese: "一种使用编码器-解码器框架将可变长度的输入序列映射到可变长度的输出序列的神经网络架构。编码器将输入压缩为固定大小的上下文向量，解码器逐个标记生成输出。Seq2Seq模型是机器翻译、文本摘要和对话生成任务的基础。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    attention_nlp: {
        term: "Attention (NLP)",
        termChinese: "注意力（NLP）",
        section: "NP",
        definition: "A mechanism in natural language processing that allows models to selectively focus on different parts of the input text when generating each output token, rather than relying on a single fixed-size context vector. Attention computes relevance scores between query and key vectors to create weighted context representations. It dramatically improved machine translation and enabled the transformer architecture.",
        definitionChinese: "自然语言处理中的一种机制，允许模型在生成每个输出标记时选择性地关注输入文本的不同部分，而不是依赖单个固定大小的上下文向量。注意力计算查询和键向量之间的相关性分数以创建加权上下文表示。它大幅改进了机器翻译并促成了Transformer架构。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    bert: {
        term: "BERT",
        termChinese: "BERT",
        section: "NP",
        definition: "Bidirectional Encoder Representations from Transformers, a pre-trained language model that learns deep bidirectional representations by jointly conditioning on both left and right context. BERT is trained using masked language modeling and next sentence prediction objectives. After pre-training, it can be fine-tuned for various tasks including question answering, sentiment analysis, and named entity recognition.",
        definitionChinese: "来自Transformer的双向编码器表示，一种预训练语言模型，通过同时条件化左右上下文来学习深度双向表示。BERT使用掩码语言建模和下一句预测目标进行训练。预训练后可以对问答、情感分析和命名实体识别等各种任务进行微调。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    gpt: {
        term: "GPT",
        termChinese: "GPT",
        section: "NP",
        definition: "Generative Pre-trained Transformer, a family of autoregressive language models that generate text by predicting the next token based on all previous tokens using a decoder-only transformer architecture. GPT models are pre-trained on massive internet text corpora using unsupervised learning, then fine-tuned or prompted for specific tasks. They demonstrate remarkable few-shot and zero-shot learning abilities.",
        definitionChinese: "生成式预训练Transformer，一系列自回归语言模型，使用仅解码器的Transformer架构根据所有先前标记预测下一个标记来生成文本。GPT模型在大规模互联网文本语料库上使用无监督学习进行预训练，然后为特定任务微调或提示。它们展示了卓越的少样本和零样本学习能力。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    sentiment_analysis: {
        term: "Sentiment Analysis",
        termChinese: "情感分析",
        section: "NP",
        definition: "The NLP task of determining the emotional tone or opinion expressed in a piece of text, typically classifying it as positive, negative, or neutral. Advanced systems detect fine-grained sentiments, aspects, and emotions. Sentiment analysis uses techniques ranging from lexicon-based approaches to deep learning classifiers, and is widely applied in brand monitoring, customer feedback, and social media analysis.",
        definitionChinese: "确定文本中表达的情感语调或观点的NLP任务，通常将其分类为正面、负面或中性。高级系统检测细粒度的情感、方面和情绪。情感分析使用从基于词典的方法到深度学习分类器的技术，广泛应用于品牌监测、客户反馈和社交媒体分析。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    named_entity_recognition: {
        term: "Named Entity Recognition",
        termChinese: "命名实体识别",
        section: "NP",
        definition: "An NLP task that identifies and classifies named entities in text into predefined categories such as person names, organizations, locations, dates, and monetary values. NER is a fundamental information extraction task that uses sequence labeling approaches including conditional random fields and transformer-based models. It is essential for knowledge graph construction and document understanding.",
        definitionChinese: "一种NLP任务，识别文本中的命名实体并将其分类为预定义类别，如人名、组织、地点、日期和货币值。NER是一项基本的信息提取任务，使用条件随机场和基于Transformer的模型等序列标注方法。它对知识图谱构建和文档理解至关重要。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    pos_tagging: {
        term: "Part-of-Speech Tagging",
        termChinese: "词性标注",
        section: "NP",
        definition: "The process of assigning grammatical category labels like noun, verb, adjective, and adverb to each word in a sentence based on its context and definition. POS tagging is a fundamental NLP task that helps disambiguate word meanings and supports parsing, information extraction, and text analysis. Modern taggers use neural sequence models to achieve high accuracy.",
        definitionChinese: "根据上下文和定义为句子中的每个词分配名词、动词、形容词和副词等语法类别标签的过程。词性标注是一项基本的NLP任务，帮助消除词义歧义并支持解析、信息提取和文本分析。现代标注器使用神经序列模型实现高准确率。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    machine_translation: {
        term: "Machine Translation",
        termChinese: "机器翻译",
        section: "NP",
        definition: "The automated task of translating text from one natural language to another using computational methods. Modern neural machine translation uses encoder-decoder architectures with attention mechanisms, particularly transformers, to produce fluent and accurate translations. Systems are trained on parallel corpora of aligned sentence pairs and have achieved near-human quality for many language pairs.",
        definitionChinese: "使用计算方法将文本从一种自然语言自动翻译为另一种语言的任务。现代神经机器翻译使用带注意力机制的编码器-解码器架构，特别是Transformer，产生流畅准确的翻译。系统在对齐句子对的平行语料库上训练，在许多语言对上已达到接近人类的质量。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    text_classification: {
        term: "Text Classification",
        termChinese: "文本分类",
        section: "NP",
        definition: "The NLP task of assigning predefined category labels to text documents based on their content. Applications include spam detection, topic categorization, language identification, and intent classification. Methods range from traditional approaches using TF-IDF features with naive Bayes or SVM classifiers to modern fine-tuned transformer models that achieve state-of-the-art accuracy on diverse benchmarks.",
        definitionChinese: "根据文本文档的内容为其分配预定义类别标签的NLP任务。应用包括垃圾邮件检测、主题分类、语言识别和意图分类。方法从使用TF-IDF特征配合朴素贝叶斯或SVM分类器的传统方法到在多样化基准上实现最先进准确率的微调Transformer模型。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    tf_idf: {
        term: "TF-IDF",
        termChinese: "词频-逆文档频率",
        section: "NP",
        definition: "Term Frequency-Inverse Document Frequency, a numerical statistic that reflects how important a word is to a document within a collection. TF measures how often a term appears in a document, while IDF downweights terms that appear across many documents. The product highlights distinctive terms, and is widely used for document retrieval, keyword extraction, and text feature representation.",
        definitionChinese: "词频-逆文档频率，一种反映词在集合中对某文档重要性的数值统计。TF衡量术语在文档中出现的频率，IDF降低在许多文档中出现的术语的权重。乘积突出独特术语，广泛用于文档检索、关键词提取和文本特征表示。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    recurrent_nlp: {
        term: "Recurrent Models (NLP)",
        termChinese: "循环模型（NLP）",
        section: "NP",
        definition: "Neural network architectures with recurrent connections designed to process sequential text data by maintaining a hidden state that captures context from previous tokens. RNNs, LSTMs, and GRUs were the dominant architectures for NLP tasks before transformers. They process text token by token, making them effective for language modeling, but slower than parallel-processing transformers.",
        definitionChinese: "具有循环连接的神经网络架构，通过维护捕获先前标记上下文的隐藏状态来处理序列文本数据。在Transformer之前，RNN、LSTM和GRU是NLP任务的主要架构。它们逐个标记处理文本，使其对语言建模有效，但比并行处理的Transformer更慢。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    beam_search: {
        term: "Beam Search",
        termChinese: "束搜索",
        section: "NP",
        definition: "A heuristic search algorithm used in sequence generation that maintains a fixed number of best partial sequences, called the beam width, at each decoding step. Unlike greedy search which keeps only the single best option, beam search explores multiple promising candidates simultaneously. It balances generation quality with computational efficiency in machine translation and text generation tasks.",
        definitionChinese: "一种用于序列生成的启发式搜索算法，在每个解码步骤维护固定数量的最佳部分序列，称为束宽。与仅保留单个最佳选项的贪心搜索不同，束搜索同时探索多个有前途的候选。它在机器翻译和文本生成任务中平衡生成质量和计算效率。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    perplexity: {
        term: "Perplexity",
        termChinese: "困惑度",
        section: "NP",
        definition: "A metric for evaluating language models that measures how well the model predicts a sample of text, calculated as the exponentiated average negative log-likelihood per token. Lower perplexity indicates better prediction ability. Perplexity represents the effective number of equally likely next-word choices the model considers, providing an intrinsic measure of language model quality.",
        definitionChinese: "一种评估语言模型的指标，衡量模型预测文本样本的能力，计算为每个标记平均负对数似然的指数。较低的困惑度表示更好的预测能力。困惑度表示模型考虑的等可能的下一个词选择的有效数量，提供语言模型质量的内在度量。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    corpus: {
        term: "Corpus",
        termChinese: "语料库",
        section: "NP",
        definition: "A large, structured collection of text documents used for training and evaluating natural language processing models. Corpora may be general like Common Crawl web text or domain-specific like medical literature. They can be annotated with linguistic labels for supervised tasks or used as raw text for unsupervised pre-training. Corpus quality and size directly impact model performance.",
        definitionChinese: "用于训练和评估自然语言处理模型的大型结构化文本文档集合。语料库可以是通用的如Common Crawl网络文本或特定领域的如医学文献。它们可以为监督任务标注语言标签或作为无监督预训练的原始文本使用。语料库的质量和大小直接影响模型性能。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    lemmatization: {
        term: "Lemmatization",
        termChinese: "词形还原",
        section: "NP",
        definition: "The linguistic process of reducing words to their base or dictionary form, called the lemma, by analyzing the word's morphology and part of speech. Unlike stemming which simply chops off suffixes, lemmatization uses vocabulary and grammar rules to produce valid words. For example, 'running' becomes 'run' and 'better' becomes 'good'. It improves text normalization and information retrieval accuracy.",
        definitionChinese: "通过分析词的形态和词性将词还原为基本形式或词典形式（称为词元）的语言过程。与简单切掉后缀的词干提取不同，词形还原使用词汇和语法规则产生有效的词。例如，'running'变为'run'，'better'变为'good'。它改善文本规范化和信息检索准确性。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    dependency_parsing: {
        term: "Dependency Parsing",
        termChinese: "依存句法分析",
        section: "NP",
        definition: "A syntactic analysis task that identifies grammatical relationships between words in a sentence by establishing directed links from head words to their dependents. The resulting dependency tree reveals the syntactic structure without requiring phrase-level constituents. Dependency parsing is used in information extraction, relation detection, machine translation, and semantic role labeling applications.",
        definitionChinese: "一种句法分析任务，通过建立从中心词到其依存词的有向链接来识别句子中词之间的语法关系。生成的依存树揭示句法结构，无需短语级成分。依存句法分析用于信息提取、关系检测、机器翻译和语义角色标注应用。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    // ===== RL: Robotics & Reinforcement Learning =====
    q_learning: {
        term: "Q-Learning",
        termChinese: "Q学习",
        section: "RL",
        definition: "A model-free reinforcement learning algorithm that learns the optimal action-value function Q(s,a) representing the expected cumulative reward of taking action a in state s and following the optimal policy thereafter. Q-learning updates values using the Bellman equation with the maximum Q-value of the next state. It converges to optimal values through off-policy temporal difference learning.",
        definitionChinese: "一种无模型强化学习算法，学习最优动作价值函数Q(s,a)，表示在状态s中采取动作a并此后遵循最优策略的预期累积奖励。Q学习使用贝尔曼方程和下一状态的最大Q值进行更新。它通过离策略时序差分学习收敛到最优值。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    policy_gradient: {
        term: "Policy Gradient",
        termChinese: "策略梯度",
        section: "RL",
        definition: "A class of reinforcement learning algorithms that directly optimize the policy by computing gradients of expected cumulative reward with respect to policy parameters. Unlike value-based methods, policy gradient methods can handle continuous action spaces and learn stochastic policies. The REINFORCE algorithm is the foundational policy gradient method, using sampled returns to estimate gradients.",
        definitionChinese: "一类强化学习算法，通过计算期望累积奖励相对于策略参数的梯度来直接优化策略。与基于价值的方法不同，策略梯度方法可以处理连续动作空间并学习随机策略。REINFORCE算法是基础策略梯度方法，使用采样回报来估计梯度。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    value_function: {
        term: "Value Function",
        termChinese: "价值函数",
        section: "RL",
        definition: "A function that estimates the expected cumulative future reward an agent can obtain from a given state or state-action pair under a specific policy. The state-value function V(s) evaluates states, while the action-value function Q(s,a) evaluates state-action pairs. Value functions guide decision-making by quantifying how desirable different situations are for the learning agent.",
        definitionChinese: "一种估计智能体在特定策略下从给定状态或状态-动作对可以获得的预期累积未来奖励的函数。状态价值函数V(s)评估状态，动作价值函数Q(s,a)评估状态-动作对。价值函数通过量化不同情况对学习智能体的理想程度来指导决策。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    reward_function: {
        term: "Reward Function",
        termChinese: "奖励函数",
        section: "RL",
        definition: "A function that provides a scalar feedback signal to the reinforcement learning agent after each action, indicating the immediate desirability of the resulting state transition. The reward function defines the task objective and shapes agent behavior. Designing effective reward functions is crucial and challenging, as poorly designed rewards can lead to unintended or suboptimal learned behaviors.",
        definitionChinese: "一种在每次动作后向强化学习智能体提供标量反馈信号的函数，指示结果状态转换的即时理想程度。奖励函数定义任务目标并塑造智能体行为。设计有效的奖励函数至关重要且具有挑战性，因为设计不良的奖励可能导致意外或次优的学习行为。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    exploration_exploitation: {
        term: "Exploration vs Exploitation",
        termChinese: "探索与利用",
        section: "RL",
        definition: "The fundamental dilemma in reinforcement learning between exploring new actions to discover potentially better strategies and exploiting current knowledge to maximize immediate reward. Too much exploration wastes time on suboptimal actions, while too much exploitation may miss better long-term options. Balancing strategies include epsilon-greedy, softmax selection, and upper confidence bound methods.",
        definitionChinese: "强化学习中的基本困境，在探索新动作以发现潜在更好策略和利用当前知识以最大化即时奖励之间权衡。过多探索浪费时间在次优动作上，过多利用可能错过更好的长期选项。平衡策略包括epsilon-贪心、softmax选择和上置信界方法。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    temporal_difference: {
        term: "Temporal Difference Learning",
        termChinese: "时序差分学习",
        section: "RL",
        definition: "A reinforcement learning method that updates value estimates based on the difference between consecutive predictions rather than waiting for the final outcome. TD learning combines ideas from Monte Carlo methods and dynamic programming, bootstrapping from current estimates to update values at each time step. TD(0) and TD(lambda) are common variants balancing bias and variance.",
        definitionChinese: "一种强化学习方法，基于连续预测之间的差异而非等待最终结果来更新价值估计。TD学习结合蒙特卡洛方法和动态规划的思想，从当前估计进行自举以在每个时间步更新值。TD(0)和TD(lambda)是平衡偏差和方差的常见变体。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    monte_carlo_method: {
        term: "Monte Carlo Method (RL)",
        termChinese: "蒙特卡洛方法（强化学习）",
        section: "RL",
        definition: "A reinforcement learning approach that estimates value functions by averaging the actual returns observed from complete episodes of agent-environment interaction. Unlike temporal difference methods, Monte Carlo waits until an episode ends to update values, using the full trajectory of rewards. It provides unbiased estimates but has higher variance and requires episodic tasks with terminal states.",
        definitionChinese: "一种通过对智能体-环境交互的完整回合中观察到的实际回报取平均来估计价值函数的强化学习方法。与时序差分方法不同，蒙特卡洛等到回合结束才更新值，使用完整的奖励轨迹。它提供无偏估计但方差较高，需要具有终止状态的回合制任务。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    actor_critic: {
        term: "Actor-Critic",
        termChinese: "演员-评论家",
        section: "RL",
        definition: "A reinforcement learning architecture that combines policy-based and value-based methods using two components: an actor that learns the policy to select actions, and a critic that learns the value function to evaluate those actions. The critic's value estimates reduce the variance of policy gradient updates. Variants include A2C, A3C, and PPO, which are widely used in practice.",
        definitionChinese: "一种结合基于策略和基于价值方法的强化学习架构，使用两个组件：学习选择动作策略的演员和学习评估这些动作的价值函数的评论家。评论家的价值估计减少策略梯度更新的方差。变体包括A2C、A3C和PPO，在实践中广泛使用。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    robot_kinematics: {
        term: "Robot Kinematics",
        termChinese: "机器人运动学",
        section: "RL",
        definition: "The study of motion in robotic mechanisms without considering the forces that cause the motion. Forward kinematics computes the end-effector position given joint angles, while inverse kinematics finds joint angles that achieve a desired position. Kinematics uses transformation matrices and the Denavit-Hartenberg convention to describe the spatial relationships between robot links and joints.",
        definitionChinese: "研究机器人机构运动而不考虑引起运动的力。正运动学根据关节角度计算末端执行器位置，逆运动学找到实现期望位置的关节角度。运动学使用变换矩阵和Denavit-Hartenberg约定来描述机器人连杆和关节之间的空间关系。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    path_planning: {
        term: "Path Planning",
        termChinese: "路径规划",
        section: "RL",
        definition: "The computational problem of finding a collision-free trajectory for a robot to move from a start configuration to a goal configuration in an environment with obstacles. Algorithms include rapidly-exploring random trees, probabilistic roadmaps, and potential field methods. Path planning considers kinematic constraints, workspace geometry, and optimality criteria like shortest distance or minimum energy.",
        definitionChinese: "在有障碍物的环境中为机器人找到从起始配置到目标配置的无碰撞轨迹的计算问题。算法包括快速探索随机树、概率路线图和势场方法。路径规划考虑运动学约束、工作空间几何和最短距离或最小能量等最优性标准。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    slam: {
        term: "SLAM",
        termChinese: "即时定位与地图构建",
        section: "RL",
        definition: "Simultaneous Localization and Mapping, a computational technique where a robot builds a map of an unknown environment while simultaneously tracking its own location within it. SLAM algorithms use sensor data from cameras, lidar, or sonar to incrementally construct and update the map. It is a fundamental capability for autonomous navigation in mobile robots and self-driving vehicles.",
        definitionChinese: "即时定位与地图构建，一种计算技术，机器人在同时跟踪自身位置的同时构建未知环境的地图。SLAM算法使用来自相机、激光雷达或声纳的传感器数据来增量式地构建和更新地图。它是移动机器人和自动驾驶车辆自主导航的基本能力。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    sensor_fusion: {
        term: "Sensor Fusion",
        termChinese: "传感器融合",
        section: "RL",
        definition: "The process of combining data from multiple sensors to produce more accurate, reliable, and complete information than any individual sensor could provide alone. Techniques include Kalman filtering, particle filters, and deep learning fusion methods. Sensor fusion integrates cameras, lidar, radar, IMUs, and GPS for robust perception in autonomous vehicles and robotic systems.",
        definitionChinese: "结合来自多个传感器的数据以产生比任何单个传感器单独提供的更准确、可靠和完整信息的过程。技术包括卡尔曼滤波、粒子滤波和深度学习融合方法。传感器融合集成相机、激光雷达、雷达、IMU和GPS，为自动驾驶车辆和机器人系统提供稳健感知。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    inverse_kinematics: {
        term: "Inverse Kinematics",
        termChinese: "逆运动学",
        section: "RL",
        definition: "The mathematical process of calculating the joint parameters needed to place a robot's end-effector at a desired position and orientation in space. Unlike forward kinematics, inverse kinematics often has multiple solutions or no solution. Analytical and numerical methods including Jacobian-based iterative approaches are used. It is essential for robot manipulation, animation, and motion planning.",
        definitionChinese: "计算将机器人末端执行器放置在空间中期望位置和方向所需的关节参数的数学过程。与正运动学不同，逆运动学通常有多个解或无解。使用包括基于雅可比矩阵的迭代方法在内的解析和数值方法。它对机器人操作、动画和运动规划至关重要。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    pid_controller: {
        term: "PID Controller",
        termChinese: "PID控制器",
        section: "RL",
        definition: "A widely used feedback control mechanism that calculates an error value as the difference between a desired setpoint and a measured process variable, then applies proportional, integral, and derivative corrections. The proportional term addresses current error, integral handles accumulated past error, and derivative anticipates future error. PID controllers are fundamental in robotics and industrial automation.",
        definitionChinese: "一种广泛使用的反馈控制机制，将误差值计算为期望设定点与测量过程变量之间的差异，然后应用比例、积分和微分校正。比例项处理当前误差，积分处理累积过去误差，微分预测未来误差。PID控制器在机器人学和工业自动化中是基础。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    state_space: {
        term: "State Space",
        termChinese: "状态空间",
        section: "RL",
        definition: "The set of all possible states that an environment or system can be in within a reinforcement learning or control problem. Each state captures all relevant information needed for decision-making. State spaces can be discrete with a finite number of states, or continuous with infinite possible configurations. The size and structure of the state space greatly affect algorithm complexity.",
        definitionChinese: "在强化学习或控制问题中，环境或系统可能处于的所有可能状态的集合。每个状态捕获决策所需的所有相关信息。状态空间可以是具有有限状态数的离散空间，或具有无限可能配置的连续空间。状态空间的大小和结构极大地影响算法复杂性。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    action_space: {
        term: "Action Space",
        termChinese: "动作空间",
        section: "RL",
        definition: "The set of all possible actions available to an agent in a reinforcement learning environment. Discrete action spaces contain a finite number of distinct choices, like moving in four directions. Continuous action spaces allow infinite possible values, like setting a motor torque. The nature of the action space determines which reinforcement learning algorithms are most appropriate to apply.",
        definitionChinese: "强化学习环境中智能体可用的所有可能动作的集合。离散动作空间包含有限数量的不同选择，如向四个方向移动。连续动作空间允许无限可能的值，如设置电机扭矩。动作空间的性质决定了哪些强化学习算法最适合应用。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    discount_factor: {
        term: "Discount Factor",
        termChinese: "折扣因子",
        section: "RL",
        definition: "A parameter between zero and one, denoted gamma, that determines how much an agent values future rewards relative to immediate rewards in reinforcement learning. A discount factor close to zero makes the agent myopic, prioritizing immediate rewards, while a value close to one encourages long-term planning. It ensures that the sum of infinite future rewards converges to a finite value.",
        definitionChinese: "一个介于零和一之间的参数，记为gamma，决定在强化学习中智能体相对于即时奖励对未来奖励的重视程度。接近零的折扣因子使智能体短视，优先考虑即时奖励，接近一的值鼓励长期规划。它确保无限未来奖励之和收敛到有限值。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    epsilon_greedy: {
        term: "Epsilon-Greedy",
        termChinese: "Epsilon贪心策略",
        section: "RL",
        definition: "An action selection strategy in reinforcement learning that balances exploration and exploitation by choosing the best-known action with probability one minus epsilon and a random action with probability epsilon. This simple approach ensures the agent occasionally explores non-optimal actions to discover potentially better alternatives. Epsilon is often decayed over time as the agent gains more knowledge.",
        definitionChinese: "强化学习中的一种动作选择策略，通过以1-epsilon的概率选择最佳已知动作和以epsilon的概率选择随机动作来平衡探索和利用。这种简单方法确保智能体偶尔探索非最优动作以发现潜在更好的替代方案。Epsilon通常随着智能体获得更多知识而随时间衰减。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    deep_q_network: {
        term: "Deep Q-Network",
        termChinese: "深度Q网络",
        section: "RL",
        definition: "A reinforcement learning algorithm that uses a deep neural network to approximate the Q-value function, enabling Q-learning to scale to high-dimensional state spaces like raw pixel inputs. DQN introduced experience replay and target networks to stabilize training. It achieved superhuman performance on Atari games and demonstrated that deep learning can solve complex sequential decision problems.",
        definitionChinese: "一种使用深度神经网络近似Q值函数的强化学习算法，使Q学习能够扩展到原始像素输入等高维状态空间。DQN引入经验回放和目标网络来稳定训练。它在Atari游戏上达到超越人类的表现，证明深度学习可以解决复杂的序列决策问题。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    },
    model_based_rl: {
        term: "Model-Based Reinforcement Learning",
        termChinese: "基于模型的强化学习",
        section: "RL",
        definition: "A reinforcement learning approach that builds an explicit model of the environment's dynamics, including state transitions and reward functions, and uses this model for planning and decision-making. By simulating experiences internally, model-based methods can be more sample-efficient than model-free approaches. Challenges include model accuracy and the computational cost of planning with learned models.",
        definitionChinese: "一种构建环境动态的显式模型（包括状态转换和奖励函数）并使用该模型进行规划和决策的强化学习方法。通过在内部模拟经验，基于模型的方法比无模型方法具有更高的样本效率。挑战包括模型准确性和使用学习模型进行规划的计算成本。",
        image: "",
        youtube: "",
        youtubeTitle: ""
    }
};
