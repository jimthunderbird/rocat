const termsGlossary = {
  // ===== PY: PYTHON FUNDAMENTALS =====
  "python_interpreter": {
    term: "Python Interpreter",
    termChinese: "Python解释器",
    section: "PY",
    definition: "The program that reads and executes Python code. CPython is the reference implementation written in C. The interpreter converts Python source code into bytecode, then executes it on the Python Virtual Machine (PVM). It supports both interactive mode (REPL) and script execution.",
    definitionChinese: "读取并执行Python代码的程序。CPython是用C编写的参考实现。解释器将Python源代码转换为字节码，然后在Python虚拟机（PVM）上执行。它支持交互模式（REPL）和脚本执行。"
  },
  "list_comprehension": {
    term: "List Comprehension",
    termChinese: "列表推导式",
    section: "PY",
    definition: "A concise way to create lists in Python using a single line of code. Syntax: [expression for item in iterable if condition]. It is generally faster than equivalent for-loop constructions because the iteration is optimized in C internally. Can be nested for multi-dimensional data.",
    definitionChinese: "Python中使用单行代码创建列表的简洁方式。语法：[表达式 for 元素 in 可迭代对象 if 条件]。通常比等效的for循环结构更快，因为迭代在内部用C优化。可以嵌套用于多维数据。"
  },
  "decorator": {
    term: "Decorator",
    termChinese: "装饰器",
    section: "PY",
    definition: "A function that takes another function as input and extends its behavior without explicitly modifying it. Decorators use the @decorator_name syntax placed above a function definition. Common uses include logging, timing, authentication, and caching. Python's functools.wraps preserves the original function's metadata.",
    definitionChinese: "接受另一个函数作为输入并在不显式修改它的情况下扩展其行为的函数。装饰器使用放在函数定义上方的@decorator_name语法。常见用途包括日志记录、计时、认证和缓存。Python的functools.wraps保留原始函数的元数据。"
  },
  "generator": {
    term: "Generator",
    termChinese: "生成器",
    section: "PY",
    definition: "A special type of iterator defined using the yield keyword instead of return. Generators produce values lazily one at a time, only computing the next value when requested. This makes them memory-efficient for large datasets. Generator expressions use parentheses: (x for x in range(n)).",
    definitionChinese: "使用yield关键字而不是return定义的特殊类型迭代器。生成器惰性地一次产生一个值，仅在被请求时计算下一个值。这使得它们对大数据集来说内存效率很高。生成器表达式使用圆括号：(x for x in range(n))。"
  },
  "lambda_function": {
    term: "Lambda Function",
    termChinese: "Lambda函数",
    section: "PY",
    definition: "An anonymous, inline function defined with the lambda keyword. Syntax: lambda arguments: expression. Limited to a single expression and commonly used with map(), filter(), and sorted(). While convenient for simple operations, complex logic should use regular def functions for readability.",
    definitionChinese: "使用lambda关键字定义的匿名内联函数。语法：lambda 参数: 表达式。限于单个表达式，常与map()、filter()和sorted()一起使用。虽然对简单操作很方便，但复杂逻辑应使用常规def函数以提高可读性。"
  },
  "virtual_environment": {
    term: "Virtual Environment",
    termChinese: "虚拟环境",
    section: "PY",
    definition: "An isolated Python environment that allows projects to have their own dependencies, independent of other projects. Created with python -m venv or conda create. Each virtual environment has its own Python binary and pip packages, preventing version conflicts between projects.",
    definitionChinese: "一个隔离的Python环境，允许项目拥有自己的依赖项，独立于其他项目。使用python -m venv或conda create创建。每个虚拟环境都有自己的Python二进制文件和pip包，防止项目之间的版本冲突。"
  },
  "duck_typing": {
    term: "Duck Typing",
    termChinese: "鸭子类型",
    section: "PY",
    definition: "A programming concept where the type of an object is determined by its behavior (methods and properties) rather than its explicit class. The name comes from 'If it walks like a duck and quacks like a duck, it is a duck.' Python heavily uses duck typing, enabling polymorphism without inheritance.",
    definitionChinese: "一种编程概念，其中对象的类型由其行为（方法和属性）而非显式类决定。名称来源于'如果它走路像鸭子，叫声像鸭子，那它就是鸭子。'Python大量使用鸭子类型，实现了无需继承的多态性。"
  },
  "gil": {
    term: "Global Interpreter Lock (GIL)",
    termChinese: "全局解释器锁",
    section: "PY",
    definition: "A mutex in CPython that allows only one thread to execute Python bytecode at a time. While it simplifies memory management and makes single-threaded programs faster, it limits true parallel execution of CPU-bound multi-threaded programs. I/O-bound programs are less affected. Multiprocessing bypasses the GIL.",
    definitionChinese: "CPython中的互斥锁，一次只允许一个线程执行Python字节码。虽然它简化了内存管理并使单线程程序更快，但它限制了CPU密集型多线程程序的真正并行执行。I/O密集型程序受影响较小。多进程可以绕过GIL。"
  },
  "context_manager": {
    term: "Context Manager",
    termChinese: "上下文管理器",
    section: "PY",
    definition: "An object that defines the methods __enter__ and __exit__ to set up and tear down a runtime context, used with the 'with' statement. Most commonly used for file handling (automatically closes files), database connections, and locks. The contextlib module provides utilities for creating context managers.",
    definitionChinese: "一个定义了__enter__和__exit__方法来设置和拆除运行时上下文的对象，与'with'语句一起使用。最常用于文件处理（自动关闭文件）、数据库连接和锁。contextlib模块提供了创建上下文管理器的工具。"
  },
  "type_hints": {
    term: "Type Hints",
    termChinese: "类型提示",
    section: "PY",
    definition: "Optional annotations in Python 3.5+ that specify the expected types of function parameters and return values. Syntax: def func(x: int) -> str. They do not enforce types at runtime but enable static type checking tools like mypy. PEP 484 introduced type hints, and the typing module provides advanced types.",
    definitionChinese: "Python 3.5+中的可选注解，指定函数参数和返回值的预期类型。语法：def func(x: int) -> str。它们不在运行时强制类型，但启用了mypy等静态类型检查工具。PEP 484引入了类型提示，typing模块提供了高级类型。"
  },
  "exception_handling": {
    term: "Exception Handling",
    termChinese: "异常处理",
    section: "PY",
    definition: "Python's mechanism for handling runtime errors using try/except/else/finally blocks. When an exception occurs in the try block, execution jumps to the matching except block. The else block runs if no exception occurred, and finally always runs for cleanup. Custom exceptions extend the Exception class.",
    definitionChinese: "Python使用try/except/else/finally块处理运行时错误的机制。当try块中发生异常时，执行跳转到匹配的except块。如果没有发生异常，else块运行，finally始终运行以进行清理。自定义异常扩展Exception类。"
  },
  "class_inheritance": {
    term: "Class Inheritance",
    termChinese: "类继承",
    section: "PY",
    definition: "An OOP mechanism where a child class inherits attributes and methods from a parent class. Python supports multiple inheritance with Method Resolution Order (MRO) using the C3 linearization algorithm. The super() function calls parent class methods. Abstract base classes (ABC) define interfaces that subclasses must implement.",
    definitionChinese: "一种OOP机制，子类从父类继承属性和方法。Python支持使用C3线性化算法的方法解析顺序（MRO）的多重继承。super()函数调用父类方法。抽象基类（ABC）定义子类必须实现的接口。"
  },
  "dictionary": {
    term: "Dictionary",
    termChinese: "字典",
    section: "PY",
    definition: "A built-in Python data structure that stores key-value pairs with O(1) average lookup time using hash tables. Keys must be hashable (immutable). Since Python 3.7, dictionaries maintain insertion order. Common methods include get(), keys(), values(), items(), and update(). Dictionary comprehensions: {k: v for k, v in items}.",
    definitionChinese: "一种内置的Python数据结构，使用哈希表存储键值对，平均查找时间为O(1)。键必须是可哈希的（不可变的）。从Python 3.7开始，字典保持插入顺序。常用方法包括get()、keys()、values()、items()和update()。字典推导式：{k: v for k, v in items}。"
  },
  "args_kwargs": {
    term: "*args and **kwargs",
    termChinese: "*args和**kwargs",
    section: "PY",
    definition: "Special syntax for passing variable numbers of arguments to functions. *args collects extra positional arguments as a tuple, while **kwargs collects extra keyword arguments as a dictionary. They enable flexible function signatures. The * and ** operators can also be used for unpacking iterables and dictionaries.",
    definitionChinese: "向函数传递可变数量参数的特殊语法。*args将额外的位置参数收集为元组，**kwargs将额外的关键字参数收集为字典。它们实现了灵活的函数签名。*和**运算符也可用于解包可迭代对象和字典。"
  },
  "slice_notation": {
    term: "Slice Notation",
    termChinese: "切片表示法",
    section: "PY",
    definition: "Python syntax for extracting portions of sequences using [start:stop:step]. Negative indices count from the end. Omitting start defaults to 0, omitting stop defaults to len, and omitting step defaults to 1. Creates a shallow copy. Common patterns: [::-1] reverses, [::2] takes every other element.",
    definitionChinese: "使用[start:stop:step]提取序列部分的Python语法。负索引从末尾开始计数。省略start默认为0，省略stop默认为len，省略step默认为1。创建浅拷贝。常见模式：[::-1]反转，[::2]取每隔一个元素。"
  },

  // ===== DS: DATA STRUCTURES & ALGORITHMS =====
  "big_o_notation": {
    term: "Big O Notation",
    termChinese: "大O表示法",
    section: "DS",
    definition: "A mathematical notation that describes the upper bound of an algorithm's time or space complexity as input size grows. Common complexities: O(1) constant, O(log n) logarithmic, O(n) linear, O(n log n) linearithmic, O(n²) quadratic, O(2ⁿ) exponential. It focuses on the dominant term and ignores constants.",
    definitionChinese: "一种数学表示法，描述算法的时间或空间复杂度随输入规模增长的上界。常见复杂度：O(1)常数、O(log n)对数、O(n)线性、O(n log n)线性对数、O(n²)二次、O(2ⁿ)指数。它关注主导项并忽略常数。"
  },
  "hash_table": {
    term: "Hash Table",
    termChinese: "哈希表",
    section: "DS",
    definition: "A data structure that maps keys to values using a hash function for O(1) average-case lookups, insertions, and deletions. Python's dict and set are implemented as hash tables. Collisions are handled via techniques like open addressing (Python's approach) or chaining. The load factor determines when to resize.",
    definitionChinese: "一种使用哈希函数将键映射到值的数据结构，平均情况下查找、插入和删除都是O(1)。Python的dict和set实现为哈希表。碰撞通过开放寻址（Python的方法）或链地址法等技术处理。负载因子决定何时调整大小。"
  },
  "binary_search": {
    term: "Binary Search",
    termChinese: "二分搜索",
    section: "DS",
    definition: "An efficient search algorithm for sorted arrays with O(log n) time complexity. It works by repeatedly dividing the search interval in half: compare the target with the middle element, then search the left or right half accordingly. Python's bisect module provides binary search functionality.",
    definitionChinese: "一种用于已排序数组的高效搜索算法，时间复杂度为O(log n)。它通过反复将搜索区间减半来工作：将目标与中间元素比较，然后相应地搜索左半部分或右半部分。Python的bisect模块提供了二分搜索功能。"
  },
  "linked_list": {
    term: "Linked List",
    termChinese: "链表",
    section: "DS",
    definition: "A linear data structure where each element (node) contains data and a reference to the next node. Unlike arrays, linked lists don't require contiguous memory, making insertions/deletions O(1) at known positions. Variants include singly-linked, doubly-linked, and circular linked lists. Python's collections.deque uses a doubly-linked list internally.",
    definitionChinese: "一种线性数据结构，每个元素（节点）包含数据和对下一个节点的引用。与数组不同，链表不需要连续内存，使得在已知位置的插入/删除为O(1)。变体包括单链表、双链表和循环链表。Python的collections.deque内部使用双链表。"
  },
  "binary_tree": {
    term: "Binary Tree",
    termChinese: "二叉树",
    section: "DS",
    definition: "A hierarchical data structure where each node has at most two children (left and right). A Binary Search Tree (BST) maintains the invariant that left children are smaller and right children are larger than the parent. Traversal orders: in-order (left, root, right), pre-order (root, left, right), post-order (left, right, root).",
    definitionChinese: "一种层次数据结构，每个节点最多有两个子节点（左和右）。二叉搜索树（BST）保持左子节点小于父节点、右子节点大于父节点的不变式。遍历顺序：中序（左、根、右）、前序（根、左、右）、后序（左、右、根）。"
  },
  "dynamic_programming": {
    term: "Dynamic Programming",
    termChinese: "动态规划",
    section: "DS",
    definition: "An algorithmic technique that solves complex problems by breaking them into overlapping subproblems, storing results to avoid redundant computation. Two approaches: top-down (memoization, using recursion + cache) and bottom-up (tabulation, building solutions iteratively). Classic examples: Fibonacci, knapsack, longest common subsequence.",
    definitionChinese: "一种算法技术，通过将复杂问题分解为重叠子问题来解决，存储结果以避免冗余计算。两种方法：自顶向下（记忆化，使用递归+缓存）和自底向上（制表法，迭代构建解决方案）。经典示例：斐波那契、背包、最长公共子序列。"
  },
  "graph_algorithm": {
    term: "Graph Algorithm",
    termChinese: "图算法",
    section: "DS",
    definition: "Algorithms that operate on graph data structures (nodes connected by edges). Key algorithms: BFS (breadth-first search) for shortest paths in unweighted graphs, DFS (depth-first search) for traversal, Dijkstra's for weighted shortest paths, and topological sort for DAGs. Graphs can be represented as adjacency lists or matrices.",
    definitionChinese: "在图数据结构（由边连接的节点）上运行的算法。关键算法：BFS（广度优先搜索）用于无权图最短路径，DFS（深度优先搜索）用于遍历，Dijkstra用于加权最短路径，拓扑排序用于有向无环图。图可以用邻接表或矩阵表示。"
  },
  "stack_queue": {
    term: "Stack and Queue",
    termChinese: "栈和队列",
    section: "DS",
    definition: "Fundamental data structures with restricted access patterns. A stack is LIFO (Last In, First Out) with push/pop operations - used for function calls, undo operations, and expression evaluation. A queue is FIFO (First In, First Out) with enqueue/dequeue - used for BFS, task scheduling, and buffering.",
    definitionChinese: "具有受限访问模式的基本数据结构。栈是LIFO（后进先出），有push/pop操作——用于函数调用、撤销操作和表达式求值。队列是FIFO（先进先出），有入队/出队操作——用于BFS、任务调度和缓冲。"
  },
  "sorting_algorithm": {
    term: "Sorting Algorithm",
    termChinese: "排序算法",
    section: "DS",
    definition: "Algorithms that arrange elements in a specific order. Python's built-in sort uses Timsort (O(n log n), stable, hybrid of merge sort and insertion sort). Other key algorithms: quicksort (O(n log n) avg, in-place), merge sort (O(n log n), stable), heap sort (O(n log n), in-place). Comparison-based sorts have Ω(n log n) lower bound.",
    definitionChinese: "将元素按特定顺序排列的算法。Python的内置排序使用Timsort（O(n log n)，稳定，归并排序和插入排序的混合）。其他关键算法：快速排序（平均O(n log n)，原地）、归并排序（O(n log n)，稳定）、堆排序（O(n log n)，原地）。基于比较的排序有Ω(n log n)下界。"
  },
  "recursion": {
    term: "Recursion",
    termChinese: "递归",
    section: "DS",
    definition: "A technique where a function calls itself to solve smaller instances of the same problem. Every recursive function needs a base case to terminate. Python has a default recursion limit of 1000 (sys.setrecursionlimit to change). Tail recursion optimization is not supported in Python. Consider iterative solutions for deep recursion.",
    definitionChinese: "一种函数调用自身来解决同一问题的较小实例的技术。每个递归函数需要一个基准情况来终止。Python的默认递归限制为1000（sys.setrecursionlimit可更改）。Python不支持尾递归优化。对于深度递归，考虑迭代解决方案。"
  },
  "heap": {
    term: "Heap (Priority Queue)",
    termChinese: "堆（优先队列）",
    section: "DS",
    definition: "A complete binary tree where each parent is smaller (min-heap) or larger (max-heap) than its children. Provides O(log n) insertion and O(1) access to the minimum/maximum element. Python's heapq module implements a min-heap. Used in Dijkstra's algorithm, k-way merge, and priority scheduling.",
    definitionChinese: "一种完全二叉树，其中每个父节点比其子节点小（最小堆）或大（最大堆）。提供O(log n)插入和O(1)访问最小/最大元素。Python的heapq模块实现最小堆。用于Dijkstra算法、k路合并和优先级调度。"
  },
  "trie": {
    term: "Trie (Prefix Tree)",
    termChinese: "字典树（前缀树）",
    section: "DS",
    definition: "A tree data structure used for efficient prefix-based string operations. Each node represents a character, and paths from root to leaf represent complete strings. Provides O(m) search time where m is string length. Used in autocomplete systems, spell checkers, IP routing tables, and dictionary implementations.",
    definitionChinese: "一种用于高效基于前缀的字符串操作的树数据结构。每个节点代表一个字符，从根到叶的路径代表完整字符串。提供O(m)搜索时间，其中m是字符串长度。用于自动完成系统、拼写检查器、IP路由表和字典实现。"
  },

  // ===== ML: MACHINE LEARNING =====
  "supervised_learning": {
    term: "Supervised Learning",
    termChinese: "监督学习",
    section: "ML",
    definition: "A machine learning paradigm where models learn from labeled training data (input-output pairs). The goal is to learn a mapping function that can predict outputs for unseen inputs. Two main tasks: classification (predicting discrete labels) and regression (predicting continuous values). Examples: spam detection, price prediction.",
    definitionChinese: "一种机器学习范式，模型从标记的训练数据（输入-输出对）中学习。目标是学习一个映射函数，能够对未见过的输入进行预测。两个主要任务：分类（预测离散标签）和回归（预测连续值）。示例：垃圾邮件检测、价格预测。"
  },
  "unsupervised_learning": {
    term: "Unsupervised Learning",
    termChinese: "无监督学习",
    section: "ML",
    definition: "Learning from unlabeled data to discover hidden patterns or structures. Key tasks: clustering (grouping similar data points, e.g., K-means, DBSCAN), dimensionality reduction (PCA, t-SNE), and anomaly detection. No target variable is provided; the algorithm finds inherent structure in the data.",
    definitionChinese: "从无标签数据中学习以发现隐藏的模式或结构。关键任务：聚类（将相似数据点分组，如K-means、DBSCAN）、降维（PCA、t-SNE）和异常检测。不提供目标变量；算法在数据中找到内在结构。"
  },
  "overfitting": {
    term: "Overfitting",
    termChinese: "过拟合",
    section: "ML",
    definition: "When a model learns the training data too well, including noise and outliers, resulting in poor generalization to new data. Signs: high training accuracy but low test accuracy. Solutions: more training data, regularization (L1/L2), dropout, cross-validation, early stopping, data augmentation, and simpler models.",
    definitionChinese: "当模型过度学习训练数据（包括噪声和异常值），导致对新数据泛化能力差。表现：训练准确率高但测试准确率低。解决方案：更多训练数据、正则化（L1/L2）、dropout、交叉验证、早停、数据增强和更简单的模型。"
  },
  "gradient_descent": {
    term: "Gradient Descent",
    termChinese: "梯度下降",
    section: "ML",
    definition: "An optimization algorithm that iteratively adjusts model parameters to minimize a loss function by moving in the direction of the negative gradient. Variants: Batch GD (uses all data), Stochastic GD (one sample at a time), Mini-batch GD (small batches). The learning rate controls step size. Adam and RMSprop are popular adaptive variants.",
    definitionChinese: "一种优化算法，通过沿负梯度方向移动来迭代调整模型参数以最小化损失函数。变体：批量GD（使用所有数据）、随机GD（一次一个样本）、小批量GD（小批量）。学习率控制步长。Adam和RMSprop是流行的自适应变体。"
  },
  "cross_validation": {
    term: "Cross-Validation",
    termChinese: "交叉验证",
    section: "ML",
    definition: "A technique for assessing model generalization by splitting data into k folds, training on k-1 folds and validating on the remaining fold, rotating through all folds. K-fold cross-validation (typically k=5 or 10) provides a more robust estimate of model performance than a single train-test split. Stratified CV preserves class distribution.",
    definitionChinese: "一种通过将数据分成k折来评估模型泛化能力的技术，在k-1折上训练并在剩余折上验证，轮流通过所有折。K折交叉验证（通常k=5或10）比单次训练-测试分割提供更稳健的模型性能估计。分层CV保持类别分布。"
  },
  "random_forest": {
    term: "Random Forest",
    termChinese: "随机森林",
    section: "ML",
    definition: "An ensemble learning method that builds multiple decision trees using bootstrap samples (bagging) and random feature subsets, then aggregates their predictions (voting for classification, averaging for regression). It reduces overfitting compared to single decision trees and provides feature importance rankings. Robust to outliers and noise.",
    definitionChinese: "一种集成学习方法，使用自助采样（bagging）和随机特征子集构建多棵决策树，然后聚合它们的预测（分类用投票，回归用平均）。与单棵决策树相比减少了过拟合，并提供特征重要性排名。对异常值和噪声具有鲁棒性。"
  },
  "svm": {
    term: "Support Vector Machine (SVM)",
    termChinese: "支持向量机",
    section: "ML",
    definition: "A classification algorithm that finds the optimal hyperplane that maximally separates different classes. Support vectors are the data points closest to the decision boundary. The kernel trick maps data to higher dimensions for non-linear separation (RBF, polynomial kernels). Effective in high-dimensional spaces with clear margins.",
    definitionChinese: "一种分类算法，找到最大化分离不同类别的最优超平面。支持向量是最接近决策边界的数据点。核技巧将数据映射到更高维度以实现非线性分离（RBF、多项式核）。在具有清晰边界的高维空间中有效。"
  },
  "regularization": {
    term: "Regularization",
    termChinese: "正则化",
    section: "ML",
    definition: "Techniques that prevent overfitting by adding a penalty term to the loss function that constrains model complexity. L1 (Lasso): adds absolute values of weights, promotes sparsity. L2 (Ridge): adds squared weights, shrinks all weights. Elastic Net combines both. Higher regularization strength simplifies the model.",
    definitionChinese: "通过在损失函数中添加约束模型复杂度的惩罚项来防止过拟合的技术。L1（Lasso）：添加权重绝对值，促进稀疏性。L2（Ridge）：添加权重平方，收缩所有权重。弹性网络结合两者。更高的正则化强度简化模型。"
  },
  "confusion_matrix": {
    term: "Confusion Matrix",
    termChinese: "混淆矩阵",
    section: "ML",
    definition: "A table that visualizes classification model performance showing True Positives, True Negatives, False Positives (Type I error), and False Negatives (Type II error). Derived metrics: Accuracy = (TP+TN)/Total, Precision = TP/(TP+FP), Recall = TP/(TP+FN), F1 = 2*Precision*Recall/(Precision+Recall).",
    definitionChinese: "一个可视化分类模型性能的表格，显示真正例、真负例、假正例（第一类错误）和假负例（第二类错误）。衍生指标：准确率 = (TP+TN)/总数，精确率 = TP/(TP+FP)，召回率 = TP/(TP+FN)，F1 = 2*精确率*召回率/(精确率+召回率)。"
  },
  "feature_engineering": {
    term: "Feature Engineering",
    termChinese: "特征工程",
    section: "ML",
    definition: "The process of selecting, creating, and transforming input variables to improve model performance. Techniques include: one-hot encoding (categorical to numeric), normalization/standardization (scaling), polynomial features, feature selection (removing irrelevant features), and domain-specific feature creation. Often the most impactful step in ML pipelines.",
    definitionChinese: "选择、创建和转换输入变量以提高模型性能的过程。技术包括：独热编码（分类到数值）、归一化/标准化（缩放）、多项式特征、特征选择（删除不相关特征）和特定领域的特征创建。通常是ML管道中最有影响力的步骤。"
  },
  "bias_variance": {
    term: "Bias-Variance Tradeoff",
    termChinese: "偏差-方差权衡",
    section: "ML",
    definition: "The fundamental tradeoff in ML between two sources of error. Bias: error from overly simplistic assumptions (underfitting). Variance: error from sensitivity to training data fluctuations (overfitting). Total error = Bias² + Variance + Irreducible error. The goal is finding the sweet spot that minimizes total error.",
    definitionChinese: "ML中两种误差来源之间的基本权衡。偏差：来自过于简单假设的误差（欠拟合）。方差：来自对训练数据波动敏感的误差（过拟合）。总误差 = 偏差² + 方差 + 不可约误差。目标是找到最小化总误差的最佳点。"
  },
  "ensemble_methods": {
    term: "Ensemble Methods",
    termChinese: "集成方法",
    section: "ML",
    definition: "Techniques that combine multiple models to produce better predictions than any single model. Bagging (Bootstrap Aggregating): trains models on random subsets, reduces variance. Boosting (AdaBoost, XGBoost, LightGBM): sequentially trains models focusing on previous errors, reduces bias. Stacking: uses model outputs as inputs to a meta-model.",
    definitionChinese: "组合多个模型以产生比任何单个模型更好预测的技术。Bagging（自助聚合）：在随机子集上训练模型，减少方差。Boosting（AdaBoost、XGBoost、LightGBM）：顺序训练模型关注先前错误，减少偏差。Stacking：使用模型输出作为元模型的输入。"
  },
  "k_means": {
    term: "K-Means Clustering",
    termChinese: "K均值聚类",
    section: "ML",
    definition: "An unsupervised algorithm that partitions data into K clusters by iteratively: (1) assigning each point to the nearest centroid, and (2) recalculating centroids as cluster means. Converges when assignments stabilize. Requires specifying K in advance (elbow method, silhouette score help choose). Sensitive to initialization; K-means++ improves this.",
    definitionChinese: "一种无监督算法，通过迭代将数据分成K个簇：(1)将每个点分配到最近的质心，(2)将质心重新计算为簇均值。当分配稳定时收敛。需要预先指定K（肘部法、轮廓分数有助于选择）。对初始化敏感；K-means++改进了这一点。"
  },
  "pca": {
    term: "Principal Component Analysis (PCA)",
    termChinese: "主成分分析",
    section: "ML",
    definition: "A dimensionality reduction technique that transforms data into a new coordinate system where the axes (principal components) are ordered by the amount of variance they capture. The first PC captures the most variance. Used for visualization, noise reduction, and speeding up training. Assumes linear relationships; for non-linear data, use kernel PCA or t-SNE.",
    definitionChinese: "一种降维技术，将数据转换到新的坐标系统中，其中轴（主成分）按它们捕获的方差量排序。第一个PC捕获最多方差。用于可视化、降噪和加速训练。假设线性关系；对于非线性数据，使用核PCA或t-SNE。"
  },
  "decision_tree": {
    term: "Decision Tree",
    termChinese: "决策树",
    section: "ML",
    definition: "A tree-structured model that makes predictions by learning simple decision rules from features. Internal nodes represent feature tests, branches represent outcomes, and leaf nodes represent predictions. Split criteria: Gini impurity or information gain (entropy). Prone to overfitting; pruning and ensemble methods address this.",
    definitionChinese: "一种树结构模型，通过从特征中学习简单的决策规则来进行预测。内部节点代表特征测试，分支代表结果，叶节点代表预测。分裂标准：基尼不纯度或信息增益（熵）。容易过拟合；剪枝和集成方法解决这个问题。"
  },

  // ===== DL: DEEP LEARNING =====
  "neural_network": {
    term: "Neural Network",
    termChinese: "神经网络",
    section: "DL",
    definition: "A computational model inspired by the brain, consisting of layers of interconnected nodes (neurons). Each neuron applies a weighted sum of inputs plus bias, followed by an activation function. Networks learn by adjusting weights through backpropagation. Architecture: input layer, hidden layers (depth = 'deep'), and output layer.",
    definitionChinese: "受大脑启发的计算模型，由互连节点（神经元）层组成。每个神经元对输入应用加权和加偏置，然后经过激活函数。网络通过反向传播调整权重来学习。架构：输入层、隐藏层（深度='深度'）和输出层。"
  },
  "backpropagation": {
    term: "Backpropagation",
    termChinese: "反向传播",
    section: "DL",
    definition: "The algorithm used to train neural networks by computing gradients of the loss function with respect to each weight using the chain rule of calculus. The error is propagated backward from the output layer to earlier layers, and weights are updated using gradient descent. Efficient computation via automatic differentiation (autograd in PyTorch).",
    definitionChinese: "用于训练神经网络的算法，通过微积分链式法则计算损失函数相对于每个权重的梯度。误差从输出层反向传播到较早的层，权重使用梯度下降更新。通过自动微分高效计算（PyTorch中的autograd）。"
  },
  "cnn": {
    term: "Convolutional Neural Network (CNN)",
    termChinese: "卷积神经网络",
    section: "DL",
    definition: "A deep learning architecture designed for spatial data like images. Key components: convolutional layers (apply learnable filters to detect features), pooling layers (downsample to reduce dimensions), and fully connected layers. CNNs learn hierarchical features: edges → textures → parts → objects. Architectures: LeNet, AlexNet, VGG, ResNet, EfficientNet.",
    definitionChinese: "为图像等空间数据设计的深度学习架构。关键组件：卷积层（应用可学习的滤波器检测特征）、池化层（下采样减少维度）和全连接层。CNN学习层次特征：边缘→纹理→部件→对象。架构：LeNet、AlexNet、VGG、ResNet、EfficientNet。"
  },
  "rnn": {
    term: "Recurrent Neural Network (RNN)",
    termChinese: "循环神经网络",
    section: "DL",
    definition: "A neural network designed for sequential data where outputs from previous steps feed back as inputs. Maintains a hidden state that captures information about the sequence history. Suffers from vanishing/exploding gradient problems for long sequences. LSTM and GRU variants solve this with gating mechanisms. Used for time series, NLP before transformers.",
    definitionChinese: "为序列数据设计的神经网络，前一步的输出反馈作为输入。维护一个隐藏状态，捕获关于序列历史的信息。对于长序列存在梯度消失/爆炸问题。LSTM和GRU变体通过门控机制解决这个问题。用于时间序列、Transformer之前的NLP。"
  },
  "transformer": {
    term: "Transformer",
    termChinese: "Transformer",
    section: "DL",
    definition: "A neural network architecture based on self-attention mechanisms, introduced in 'Attention Is All You Need' (2017). Processes entire sequences in parallel rather than sequentially. Key components: multi-head self-attention, positional encoding, feed-forward networks, and layer normalization. Foundation of BERT, GPT, T5, and modern LLMs.",
    definitionChinese: "基于自注意力机制的神经网络架构，在'Attention Is All You Need'（2017）中提出。并行处理整个序列而非顺序处理。关键组件：多头自注意力、位置编码、前馈网络和层归一化。是BERT、GPT、T5和现代大语言模型的基础。"
  },
  "activation_function": {
    term: "Activation Function",
    termChinese: "激活函数",
    section: "DL",
    definition: "A non-linear function applied to neuron outputs that enables neural networks to learn complex patterns. Common functions: ReLU (max(0,x), most popular), Sigmoid (0-1 range, for binary classification), Tanh (-1 to 1), Softmax (probability distribution for multi-class). Without activation functions, a neural network would be a linear model.",
    definitionChinese: "应用于神经元输出的非线性函数，使神经网络能够学习复杂模式。常见函数：ReLU（max(0,x)，最流行）、Sigmoid（0-1范围，用于二分类）、Tanh（-1到1）、Softmax（多类别的概率分布）。没有激活函数，神经网络将是线性模型。"
  },
  "dropout": {
    term: "Dropout",
    termChinese: "Dropout",
    section: "DL",
    definition: "A regularization technique that randomly sets a fraction of neuron outputs to zero during training (typically 20-50%). This prevents co-adaptation of neurons and acts as an ensemble of many subnetworks. At inference time, all neurons are active but outputs are scaled. Dropout is disabled during evaluation/prediction mode.",
    definitionChinese: "一种正则化技术，在训练期间随机将一部分神经元输出设置为零（通常20-50%）。这防止了神经元的共适应，并作为许多子网络的集成。在推理时，所有神经元都活跃但输出被缩放。在评估/预测模式下禁用Dropout。"
  },
  "batch_normalization": {
    term: "Batch Normalization",
    termChinese: "批归一化",
    section: "DL",
    definition: "A technique that normalizes layer inputs by adjusting and scaling activations, applied after the linear transformation and before the activation function. It reduces internal covariate shift, enables higher learning rates, acts as mild regularization, and accelerates training. Maintains running statistics for inference mode.",
    definitionChinese: "一种通过调整和缩放激活来归一化层输入的技术，在线性变换之后和激活函数之前应用。它减少内部协变量偏移，允许更高的学习率，充当温和的正则化，并加速训练。为推理模式维护运行统计数据。"
  },
  "transfer_learning": {
    term: "Transfer Learning",
    termChinese: "迁移学习",
    section: "DL",
    definition: "A technique where a model trained on one task is reused as the starting point for a different task. The pre-trained model's learned features transfer to the new domain, requiring less data and training time. Common approach: freeze early layers (generic features), fine-tune later layers (task-specific). Hugely successful in NLP and computer vision.",
    definitionChinese: "一种技术，在一个任务上训练的模型被重新用作不同任务的起点。预训练模型学到的特征迁移到新领域，需要更少的数据和训练时间。常见方法：冻结早期层（通用特征），微调后期层（任务特定）。在NLP和计算机视觉中非常成功。"
  },
  "loss_function": {
    term: "Loss Function",
    termChinese: "损失函数",
    section: "DL",
    definition: "A function that measures how far model predictions are from actual values. It guides optimization during training. Common losses: MSE (Mean Squared Error) for regression, Cross-Entropy for classification, Binary Cross-Entropy for binary classification, Hinge loss for SVM. The choice of loss function depends on the task and data distribution.",
    definitionChinese: "衡量模型预测与实际值之间差距的函数。它在训练期间指导优化。常见损失：MSE（均方误差）用于回归，交叉熵用于分类，二元交叉熵用于二分类，铰链损失用于SVM。损失函数的选择取决于任务和数据分布。"
  },
  "attention_mechanism": {
    term: "Attention Mechanism",
    termChinese: "注意力机制",
    section: "DL",
    definition: "A mechanism that allows models to focus on relevant parts of the input when producing output. Self-attention computes attention scores between all positions in a sequence. Scaled dot-product attention: Attention(Q,K,V) = softmax(QK^T/√d)V. Multi-head attention applies multiple attention functions in parallel. Enables capturing long-range dependencies.",
    definitionChinese: "一种允许模型在生成输出时关注输入的相关部分的机制。自注意力计算序列中所有位置之间的注意力分数。缩放点积注意力：Attention(Q,K,V) = softmax(QK^T/√d)V。多头注意力并行应用多个注意力函数。能够捕获长距离依赖关系。"
  },
  "optimizer": {
    term: "Optimizer",
    termChinese: "优化器",
    section: "DL",
    definition: "The algorithm that updates model weights to minimize the loss function. SGD: simple momentum-based updates. Adam: combines momentum and adaptive learning rates per parameter (most widely used). AdaGrad: adapts learning rates based on gradient history. Learning rate scheduling (step decay, cosine annealing) further improves training.",
    definitionChinese: "更新模型权重以最小化损失函数的算法。SGD：基于动量的简单更新。Adam：结合动量和每参数自适应学习率（最广泛使用）。AdaGrad：基于梯度历史调整学习率。学习率调度（阶梯衰减、余弦退火）进一步改善训练。"
  },
  "gpu_training": {
    term: "GPU Training",
    termChinese: "GPU训练",
    section: "DL",
    definition: "Using Graphics Processing Units to accelerate deep learning training. GPUs excel at the parallel matrix operations that dominate neural network computation, offering 10-100x speedup over CPUs. NVIDIA CUDA is the standard framework. Multi-GPU training strategies: data parallelism (split batches), model parallelism (split layers). Cloud options: AWS, GCP, Azure.",
    definitionChinese: "使用图形处理单元加速深度学习训练。GPU擅长主导神经网络计算的并行矩阵运算，比CPU提速10-100倍。NVIDIA CUDA是标准框架。多GPU训练策略：数据并行（拆分批次）、模型并行（拆分层）。云选项：AWS、GCP、Azure。"
  },
  "autoencoder": {
    term: "Autoencoder",
    termChinese: "自编码器",
    section: "DL",
    definition: "A neural network trained to reconstruct its input through a bottleneck layer. The encoder compresses input into a low-dimensional latent representation, and the decoder reconstructs the original. Used for dimensionality reduction, denoising, anomaly detection, and generative modeling. Variational Autoencoders (VAE) learn a probabilistic latent space.",
    definitionChinese: "一种通过瓶颈层训练来重建其输入的神经网络。编码器将输入压缩为低维潜在表示，解码器重建原始输入。用于降维、去噪、异常检测和生成建模。变分自编码器（VAE）学习概率潜在空间。"
  },
  "gan": {
    term: "Generative Adversarial Network (GAN)",
    termChinese: "生成对抗网络",
    section: "DL",
    definition: "A framework with two competing neural networks: a Generator that creates synthetic data and a Discriminator that distinguishes real from fake. They train adversarially until the Generator produces realistic outputs. Variants: DCGAN (convolutional), StyleGAN (high-quality images), CycleGAN (unpaired translation). Challenges: mode collapse, training instability.",
    definitionChinese: "一个有两个竞争神经网络的框架：生成器创建合成数据，判别器区分真假。它们对抗训练直到生成器产生逼真的输出。变体：DCGAN（卷积）、StyleGAN（高质量图像）、CycleGAN（非配对转换）。挑战：模式崩溃、训练不稳定。"
  },

  // ===== NLP: NATURAL LANGUAGE PROCESSING =====
  "tokenization": {
    term: "Tokenization",
    termChinese: "分词",
    section: "NLP",
    definition: "The process of breaking text into smaller units (tokens) for processing. Word-level: splits on spaces/punctuation. Subword-level: BPE (Byte Pair Encoding), WordPiece, SentencePiece - handle unknown words by decomposing them. Character-level: individual characters. Modern LLMs use subword tokenization (GPT uses BPE, BERT uses WordPiece).",
    definitionChinese: "将文本分解为较小单位（token）进行处理的过程。词级：按空格/标点分割。子词级：BPE（字节对编码）、WordPiece、SentencePiece——通过分解处理未知词。字符级：单个字符。现代大语言模型使用子词分词（GPT使用BPE，BERT使用WordPiece）。"
  },
  "word_embedding": {
    term: "Word Embedding",
    termChinese: "词嵌入",
    section: "NLP",
    definition: "Dense vector representations of words in a continuous vector space where semantically similar words are close together. Word2Vec (Skip-gram, CBOW) and GloVe are classic methods. Capture semantic relationships: king - man + woman ≈ queen. Modern contextual embeddings (BERT, ELMo) generate different vectors based on word context.",
    definitionChinese: "词语在连续向量空间中的稠密向量表示，语义相似的词在空间中距离较近。Word2Vec（Skip-gram、CBOW）和GloVe是经典方法。捕获语义关系：king - man + woman ≈ queen。现代上下文嵌入（BERT、ELMo）根据词语上下文生成不同的向量。"
  },
  "bert": {
    term: "BERT (Bidirectional Encoder Representations from Transformers)",
    termChinese: "BERT",
    section: "NLP",
    definition: "A pre-trained language model by Google (2018) that uses bidirectional transformer encoders. Pre-trained on Masked Language Modeling (predicting masked words) and Next Sentence Prediction. Fine-tuned for downstream tasks: classification, NER, QA, sentiment analysis. Understands context from both left and right. Variants: RoBERTa, ALBERT, DistilBERT.",
    definitionChinese: "Google（2018）的预训练语言模型，使用双向transformer编码器。在掩码语言建模（预测被掩码的词）和下一句预测上预训练。针对下游任务微调：分类、命名实体识别、问答、情感分析。从左右两个方向理解上下文。变体：RoBERTa、ALBERT、DistilBERT。"
  },
  "named_entity_recognition": {
    term: "Named Entity Recognition (NER)",
    termChinese: "命名实体识别",
    section: "NLP",
    definition: "An NLP task that identifies and classifies named entities in text into predefined categories: person names, organizations, locations, dates, monetary values, etc. Uses BIO tagging scheme (Begin, Inside, Outside). Modern approaches use transformer-based models. Applications: information extraction, knowledge graph construction, question answering.",
    definitionChinese: "一种NLP任务，识别文本中的命名实体并将其分类为预定义类别：人名、组织、地点、日期、货币值等。使用BIO标注方案（开始、内部、外部）。现代方法使用基于transformer的模型。应用：信息提取、知识图谱构建、问答系统。"
  },
  "sentiment_analysis": {
    term: "Sentiment Analysis",
    termChinese: "情感分析",
    section: "NLP",
    definition: "The task of determining the emotional tone or opinion expressed in text (positive, negative, neutral). Approaches: lexicon-based (word polarity dictionaries), ML-based (trained classifiers), and deep learning (fine-tuned transformers). Challenges: sarcasm detection, context-dependent sentiment, aspect-based sentiment (different sentiments about different features).",
    definitionChinese: "确定文本中表达的情感基调或观点（正面、负面、中性）的任务。方法：基于词典（词极性字典）、基于ML（训练的分类器）和深度学习（微调的transformer）。挑战：反讽检测、上下文相关情感、基于方面的情感（对不同特征的不同情感）。"
  },
  "text_classification": {
    term: "Text Classification",
    termChinese: "文本分类",
    section: "NLP",
    definition: "The task of assigning predefined categories to text documents. Applications: spam filtering, topic categorization, intent detection in chatbots, and language identification. Feature representations: bag-of-words, TF-IDF, or transformer embeddings. Modern state-of-the-art uses fine-tuned pre-trained language models like BERT.",
    definitionChinese: "将预定义类别分配给文本文档的任务。应用：垃圾邮件过滤、主题分类、聊天机器人中的意图检测和语言识别。特征表示：词袋、TF-IDF或transformer嵌入。现代最先进方法使用微调的预训练语言模型如BERT。"
  },
  "seq2seq": {
    term: "Sequence-to-Sequence (Seq2Seq)",
    termChinese: "序列到序列",
    section: "NLP",
    definition: "An architecture that maps variable-length input sequences to variable-length output sequences. Originally used encoder-decoder RNNs with attention. Now primarily transformer-based (T5, BART, mBART). Applications: machine translation, text summarization, question answering, code generation. The decoder generates tokens autoregressively.",
    definitionChinese: "将可变长度输入序列映射到可变长度输出序列的架构。最初使用带注意力的编码器-解码器RNN。现在主要基于transformer（T5、BART、mBART）。应用：机器翻译、文本摘要、问答、代码生成。解码器自回归地生成token。"
  },
  "tf_idf": {
    term: "TF-IDF (Term Frequency-Inverse Document Frequency)",
    termChinese: "TF-IDF",
    section: "NLP",
    definition: "A numerical statistic that reflects the importance of a word in a document relative to a collection. TF measures how often a word appears in a document. IDF measures how rare a word is across all documents. TF-IDF = TF × IDF. Words that appear frequently in one document but rarely across documents get high scores. Used for information retrieval and feature extraction.",
    definitionChinese: "一种数值统计量，反映词语在文档集合中相对于单个文档的重要性。TF衡量词语在文档中出现的频率。IDF衡量词语在所有文档中的稀有程度。TF-IDF = TF × IDF。在一个文档中频繁出现但在整个集合中稀少的词获得高分。用于信息检索和特征提取。"
  },

  // ===== CV: COMPUTER VISION =====
  "image_classification": {
    term: "Image Classification",
    termChinese: "图像分类",
    section: "CV",
    definition: "The task of assigning a label to an entire image from a set of predefined categories. Benchmark: ImageNet (1000 classes, 14M images). Deep CNNs revolutionized this field: AlexNet (2012) won ImageNet, followed by VGG, GoogLeNet, ResNet, and modern architectures like EfficientNet and Vision Transformers (ViT). Data augmentation is crucial.",
    definitionChinese: "从预定义类别集中为整个图像分配标签的任务。基准：ImageNet（1000类，1400万图像）。深度CNN革新了这一领域：AlexNet（2012）赢得ImageNet，随后是VGG、GoogLeNet、ResNet和现代架构如EfficientNet和Vision Transformers（ViT）。数据增强至关重要。"
  },
  "object_detection": {
    term: "Object Detection",
    termChinese: "目标检测",
    section: "CV",
    definition: "The task of identifying and locating objects in images with bounding boxes and class labels. Two-stage detectors: R-CNN family (region proposals then classification). One-stage detectors: YOLO (You Only Look Once), SSD (real-time). Modern: YOLOv8, DETR (transformer-based). Metrics: mAP (mean Average Precision), IoU (Intersection over Union).",
    definitionChinese: "在图像中用边界框和类别标签识别和定位对象的任务。两阶段检测器：R-CNN系列（区域提议然后分类）。一阶段检测器：YOLO（You Only Look Once）、SSD（实时）。现代：YOLOv8、DETR（基于transformer）。评估指标：mAP（平均精度均值）、IoU（交并比）。"
  },
  "semantic_segmentation": {
    term: "Semantic Segmentation",
    termChinese: "语义分割",
    section: "CV",
    definition: "Pixel-level classification that assigns a class label to every pixel in an image. Unlike object detection (bounding boxes), segmentation provides precise boundaries. Architectures: FCN (Fully Convolutional Network), U-Net (encoder-decoder with skip connections, popular in medical imaging), DeepLab (atrous/dilated convolutions). Instance segmentation distinguishes individual objects.",
    definitionChinese: "像素级分类，为图像中的每个像素分配类别标签。与目标检测（边界框）不同，分割提供精确边界。架构：FCN（全卷积网络）、U-Net（带跳跃连接的编码器-解码器，在医学影像中流行）、DeepLab（空洞/扩张卷积）。实例分割区分单个对象。"
  },
  "data_augmentation": {
    term: "Data Augmentation",
    termChinese: "数据增强",
    section: "CV",
    definition: "Techniques to artificially increase training dataset size by applying transformations to existing data. Image augmentations: rotation, flipping, cropping, color jittering, random erasing, Cutout, MixUp, CutMix. Reduces overfitting and improves generalization. Libraries: torchvision.transforms, albumentations, imgaug. AutoAugment learns optimal augmentation policies.",
    definitionChinese: "通过对现有数据应用变换来人为增加训练数据集大小的技术。图像增强：旋转、翻转、裁剪、颜色抖动、随机擦除、Cutout、MixUp、CutMix。减少过拟合并提高泛化能力。库：torchvision.transforms、albumentations、imgaug。AutoAugment学习最优增强策略。"
  },
  "resnet": {
    term: "ResNet (Residual Network)",
    termChinese: "ResNet（残差网络）",
    section: "CV",
    definition: "A landmark CNN architecture (2015) that introduced residual connections (skip connections) allowing training of very deep networks (50, 101, 152+ layers). The residual connection adds the input to the output of a block: y = F(x) + x. This solves the degradation problem where deeper networks paradoxically performed worse. Won ImageNet 2015.",
    definitionChinese: "一个里程碑式的CNN架构（2015），引入残差连接（跳跃连接），允许训练非常深的网络（50、101、152+层）。残差连接将输入添加到块的输出：y = F(x) + x。这解决了更深网络性能反而下降的退化问题。赢得2015年ImageNet竞赛。"
  },
  "image_preprocessing": {
    term: "Image Preprocessing",
    termChinese: "图像预处理",
    section: "CV",
    definition: "Steps to prepare raw images for model input. Common operations: resizing to fixed dimensions, normalization (scaling pixel values to [0,1] or standardizing with mean/std), color space conversion (RGB, grayscale, HSV), histogram equalization for contrast. ImageNet normalization: mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225].",
    definitionChinese: "为模型输入准备原始图像的步骤。常见操作：调整大小到固定尺寸、归一化（将像素值缩放到[0,1]或用均值/标准差标准化）、色彩空间转换（RGB、灰度、HSV）、直方图均衡化增强对比度。ImageNet归一化：mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]。"
  },
  "convolution_operation": {
    term: "Convolution Operation",
    termChinese: "卷积操作",
    section: "CV",
    definition: "The core operation in CNNs where a learnable filter (kernel) slides over the input to produce a feature map. Each position computes the element-wise multiplication sum of the filter and the input patch. Parameters: kernel size (e.g., 3x3), stride (step size), padding (border handling). Deeper layers detect increasingly complex features.",
    definitionChinese: "CNN中的核心操作，可学习的滤波器（卷积核）在输入上滑动以产生特征图。每个位置计算滤波器和输入块的逐元素乘积之和。参数：核大小（如3x3）、步长（步进大小）、填充（边界处理）。更深的层检测越来越复杂的特征。"
  },
  "vision_transformer": {
    term: "Vision Transformer (ViT)",
    termChinese: "视觉Transformer",
    section: "CV",
    definition: "An architecture that applies the transformer model directly to image recognition by treating an image as a sequence of patches. The image is split into fixed-size patches (e.g., 16x16), linearly embedded, and processed by a standard transformer encoder. ViT achieved state-of-the-art results when pre-trained on large datasets. Variants: DeiT, Swin Transformer.",
    definitionChinese: "一种通过将图像视为补丁序列直接将transformer模型应用于图像识别的架构。图像被分成固定大小的补丁（如16x16），线性嵌入，并由标准transformer编码器处理。ViT在大数据集上预训练时取得了最先进的结果。变体：DeiT、Swin Transformer。"
  },

  // ===== DA: DATA ANALYSIS =====
  "numpy_array": {
    term: "NumPy Array (ndarray)",
    termChinese: "NumPy数组",
    section: "DA",
    definition: "The fundamental data structure in NumPy: a multi-dimensional, homogeneous array of fixed-size items. Much faster than Python lists for numerical operations due to contiguous memory layout, vectorized operations in C, and broadcasting. Key attributes: shape, dtype, ndim. Supports fancy indexing, slicing, and element-wise operations without explicit loops.",
    definitionChinese: "NumPy中的基本数据结构：多维、同质、固定大小元素的数组。由于连续内存布局、C中的向量化操作和广播，比Python列表快得多。关键属性：shape、dtype、ndim。支持花式索引、切片和无需显式循环的逐元素操作。"
  },
  "pandas_dataframe": {
    term: "Pandas DataFrame",
    termChinese: "Pandas数据框",
    section: "DA",
    definition: "A 2D labeled data structure in Pandas with columns of potentially different types (like a spreadsheet or SQL table). Core operations: selection (loc/iloc), filtering, groupby, merge/join, pivot tables, and apply. Built on NumPy arrays. Handles missing data (NaN). Read/write CSV, Excel, SQL, JSON, Parquet formats.",
    definitionChinese: "Pandas中的二维标记数据结构，列可以是不同类型（类似电子表格或SQL表）。核心操作：选择（loc/iloc）、过滤、groupby、合并/连接、数据透视表和apply。建立在NumPy数组之上。处理缺失数据（NaN）。读写CSV、Excel、SQL、JSON、Parquet格式。"
  },
  "matplotlib": {
    term: "Matplotlib",
    termChinese: "Matplotlib",
    section: "DA",
    definition: "Python's foundational plotting library for creating static, animated, and interactive visualizations. The pyplot interface provides MATLAB-like plotting. Key plot types: line, scatter, bar, histogram, pie, heatmap, 3D plots. Customization: titles, labels, legends, colors, styles. Seaborn builds on Matplotlib for statistical visualizations.",
    definitionChinese: "Python的基础绑图库，用于创建静态、动画和交互式可视化。pyplot接口提供类似MATLAB的绑图。关键图类型：线图、散点图、柱状图、直方图、饼图、热力图、3D图。自定义：标题、标签、图例、颜色、样式。Seaborn在Matplotlib基础上构建统计可视化。"
  },
  "data_cleaning": {
    term: "Data Cleaning",
    termChinese: "数据清洗",
    section: "DA",
    definition: "The process of detecting and correcting errors, inconsistencies, and missing values in datasets. Steps: handling missing values (drop, fill with mean/median/mode, interpolation), removing duplicates, fixing data types, handling outliers, standardizing formats (dates, strings), and validating data integrity. Typically consumes 60-80% of a data scientist's time.",
    definitionChinese: "检测和纠正数据集中错误、不一致和缺失值的过程。步骤：处理缺失值（删除、用均值/中位数/众数填充、插值）、删除重复项、修复数据类型、处理异常值、标准化格式（日期、字符串）和验证数据完整性。通常占数据科学家60-80%的时间。"
  },
  "statistical_testing": {
    term: "Statistical Testing",
    termChinese: "统计检验",
    section: "DA",
    definition: "Methods for making data-driven decisions under uncertainty. Common tests: t-test (compare means), chi-squared (categorical associations), ANOVA (compare multiple groups), Pearson/Spearman correlation. Key concepts: null hypothesis, p-value (probability of observing results under H0), significance level (α, typically 0.05), confidence intervals.",
    definitionChinese: "在不确定性下做出数据驱动决策的方法。常见检验：t检验（比较均值）、卡方检验（分类关联）、方差分析（比较多组）、Pearson/Spearman相关性。关键概念：原假设、p值（在H0下观察到结果的概率）、显著性水平（α，通常0.05）、置信区间。"
  },
  "pandas_groupby": {
    term: "Pandas GroupBy",
    termChinese: "Pandas分组操作",
    section: "DA",
    definition: "A powerful operation that splits a DataFrame into groups based on column values, applies a function to each group, and combines results. The split-apply-combine paradigm. Common aggregations: sum, mean, count, min, max, std. Can use custom aggregation functions with agg(). Supports multiple grouping columns and multi-level aggregation.",
    definitionChinese: "一种强大的操作，根据列值将DataFrame分成组，对每个组应用函数，然后组合结果。分割-应用-组合范式。常见聚合：求和、均值、计数、最小值、最大值、标准差。可以使用agg()的自定义聚合函数。支持多列分组和多级聚合。"
  },
  "feature_scaling": {
    term: "Feature Scaling",
    termChinese: "特征缩放",
    section: "DA",
    definition: "Transforming features to a common scale. Min-Max Scaling (normalization): scales to [0,1], x_new = (x - x_min)/(x_max - x_min). Standardization (z-score): scales to mean=0, std=1, z = (x - μ)/σ. Essential for distance-based algorithms (KNN, SVM, K-means) and gradient descent. Tree-based models are generally scale-invariant.",
    definitionChinese: "将特征转换为公共尺度。最小-最大缩放（归一化）：缩放到[0,1]，x_new = (x - x_min)/(x_max - x_min)。标准化（z分数）：缩放为均值=0，标准差=1，z = (x - μ)/σ。对基于距离的算法（KNN、SVM、K-means）和梯度下降至关重要。基于树的模型通常对尺度不敏感。"
  },
  "jupyter_notebook": {
    term: "Jupyter Notebook",
    termChinese: "Jupyter Notebook",
    section: "DA",
    definition: "An open-source web application for creating documents that combine live code, equations, visualizations, and narrative text. Supports Python, R, Julia, and other languages. Cells execute independently and share state. JupyterLab is the next-generation interface. Google Colab provides free GPU-enabled Jupyter notebooks in the cloud.",
    definitionChinese: "一个开源Web应用程序，用于创建组合实时代码、方程式、可视化和叙述文本的文档。支持Python、R、Julia和其他语言。单元格独立执行并共享状态。JupyterLab是下一代界面。Google Colab提供云端免费的GPU Jupyter notebook。"
  },

  // ===== AI: AI CONCEPTS =====
  "artificial_intelligence": {
    term: "Artificial Intelligence (AI)",
    termChinese: "人工智能",
    section: "AI",
    definition: "The field of computer science focused on creating systems that can perform tasks requiring human-like intelligence: learning, reasoning, problem-solving, perception, and language understanding. Categories: Narrow AI (task-specific, current state), General AI (AGI, human-level across all domains, theoretical), and Super AI (surpassing human intelligence, hypothetical).",
    definitionChinese: "计算机科学领域，专注于创建能够执行需要类人智能任务的系统：学习、推理、问题解决、感知和语言理解。类别：狭义AI（特定任务，当前状态）、通用AI（AGI，所有领域的人类水平，理论上）和超级AI（超越人类智能，假设性）。"
  },
  "reinforcement_learning": {
    term: "Reinforcement Learning (RL)",
    termChinese: "强化学习",
    section: "AI",
    definition: "A learning paradigm where an agent learns to make decisions by interacting with an environment and receiving rewards or penalties. Key concepts: agent, environment, state, action, reward, policy (strategy), value function. Algorithms: Q-learning, Deep Q-Networks (DQN), Policy Gradient, PPO, A3C. Applications: game playing, robotics, recommendation systems.",
    definitionChinese: "一种学习范式，智能体通过与环境交互并接收奖励或惩罚来学习做决策。关键概念：智能体、环境、状态、动作、奖励、策略、价值函数。算法：Q-learning、Deep Q-Networks (DQN)、策略梯度、PPO、A3C。应用：游戏、机器人、推荐系统。"
  },
  "ai_ethics": {
    term: "AI Ethics",
    termChinese: "AI伦理",
    section: "AI",
    definition: "The study of moral implications and responsible development of AI systems. Key concerns: bias and fairness (training data reflects societal biases), transparency and explainability, privacy, accountability, job displacement, autonomous weapons, and alignment (ensuring AI goals match human values). Frameworks: FATE (Fairness, Accountability, Transparency, Ethics).",
    definitionChinese: "研究AI系统的道德影响和负责任开发。关键关注点：偏见和公平（训练数据反映社会偏见）、透明度和可解释性、隐私、问责制、工作替代、自主武器和对齐（确保AI目标与人类价值观一致）。框架：FATE（公平、问责、透明、伦理）。"
  },
  "turing_test": {
    term: "Turing Test",
    termChinese: "图灵测试",
    section: "AI",
    definition: "A test proposed by Alan Turing in 1950 to determine if a machine can exhibit intelligent behavior indistinguishable from a human. A human evaluator converses with both a machine and a human without knowing which is which. If the evaluator cannot reliably distinguish them, the machine passes. While influential conceptually, it has limitations as a measure of intelligence.",
    definitionChinese: "Alan Turing于1950年提出的测试，用于确定机器是否能展现与人类无法区分的智能行为。人类评估者与机器和人类对话而不知道哪个是哪个。如果评估者不能可靠地区分它们，机器就通过了。虽然在概念上有影响力，但作为智能的衡量标准有局限性。"
  },
  "knowledge_graph": {
    term: "Knowledge Graph",
    termChinese: "知识图谱",
    section: "AI",
    definition: "A structured representation of real-world knowledge as a graph of entities (nodes) and relationships (edges). Triples: (subject, predicate, object) e.g., (Paris, capital_of, France). Examples: Google Knowledge Graph, Wikidata, DBpedia. Used for question answering, recommendation, and search. Technologies: RDF, SPARQL, Neo4j, embedding methods like TransE.",
    definitionChinese: "将真实世界知识结构化表示为实体（节点）和关系（边）的图。三元组：（主语、谓语、宾语）如（巴黎，首都，法国）。示例：Google知识图谱、Wikidata、DBpedia。用于问答、推荐和搜索。技术：RDF、SPARQL、Neo4j、如TransE的嵌入方法。"
  },
  "explainable_ai": {
    term: "Explainable AI (XAI)",
    termChinese: "可解释AI",
    section: "AI",
    definition: "Methods and techniques to make AI model decisions understandable to humans. Approaches: LIME (Local Interpretable Model-agnostic Explanations), SHAP (SHapley Additive exPlanations), attention visualization, feature importance, saliency maps. Important for healthcare, finance, legal domains where decisions must be justified. Tradeoff: complexity vs interpretability.",
    definitionChinese: "使AI模型决策对人类可理解的方法和技术。方法：LIME（局部可解释的模型无关解释）、SHAP（Shapley加法解释）、注意力可视化、特征重要性、显著性图。在医疗、金融、法律领域中重要，因为决策必须有理由。权衡：复杂性vs可解释性。"
  },
  "mlops": {
    term: "MLOps",
    termChinese: "MLOps",
    section: "AI",
    definition: "The practice of combining Machine Learning, DevOps, and Data Engineering to deploy and maintain ML systems in production reliably and efficiently. Key aspects: experiment tracking (MLflow, W&B), model versioning, CI/CD for ML, model monitoring (drift detection), feature stores, and automated retraining pipelines. Tools: Kubeflow, MLflow, DVC, Airflow.",
    definitionChinese: "结合机器学习、DevOps和数据工程以在生产中可靠高效地部署和维护ML系统的实践。关键方面：实验跟踪（MLflow、W&B）、模型版本控制、ML的CI/CD、模型监控（漂移检测）、特征存储和自动重训练管道。工具：Kubeflow、MLflow、DVC、Airflow。"
  },
  "federated_learning": {
    term: "Federated Learning",
    termChinese: "联邦学习",
    section: "AI",
    definition: "A distributed machine learning approach where models are trained across multiple devices or servers holding local data samples, without exchanging raw data. Only model updates (gradients) are shared. Preserves privacy while enabling collaborative learning. Used by Google (keyboard predictions), healthcare (multi-hospital models), and financial institutions.",
    definitionChinese: "一种分布式机器学习方法，模型在持有本地数据样本的多个设备或服务器上训练，不交换原始数据。只共享模型更新（梯度）。在启用协作学习的同时保护隐私。被Google（键盘预测）、医疗保健（多医院模型）和金融机构使用。"
  },

  // ===== GP: GENERATIVE AI & LLMs =====
  "large_language_model": {
    term: "Large Language Model (LLM)",
    termChinese: "大语言模型",
    section: "GP",
    definition: "A neural network trained on massive text corpora to understand and generate human language. Based on transformer architecture with billions of parameters. Examples: GPT-4, Claude, LLaMA, PaLM, Gemini. Capabilities: text generation, translation, summarization, code generation, reasoning. Trained with next-token prediction and RLHF (Reinforcement Learning from Human Feedback).",
    definitionChinese: "在海量文本语料上训练的神经网络，用于理解和生成人类语言。基于具有数十亿参数的transformer架构。示例：GPT-4、Claude、LLaMA、PaLM、Gemini。能力：文本生成、翻译、摘要、代码生成、推理。通过下一个token预测和RLHF（基于人类反馈的强化学习）训练。"
  },
  "prompt_engineering": {
    term: "Prompt Engineering",
    termChinese: "提示工程",
    section: "GP",
    definition: "The art and science of crafting effective prompts to guide LLM behavior. Techniques: zero-shot (no examples), few-shot (provide examples), chain-of-thought (step-by-step reasoning), role-playing (assign persona), system prompts (set behavior rules). Key principles: be specific, provide context, use structured output formats, iterate and refine.",
    definitionChinese: "制定有效提示以指导大语言模型行为的艺术和科学。技术：零样本（无示例）、少样本（提供示例）、思维链（逐步推理）、角色扮演（分配角色）、系统提示（设置行为规则）。关键原则：要具体、提供上下文、使用结构化输出格式、迭代和改进。"
  },
  "rag": {
    term: "Retrieval-Augmented Generation (RAG)",
    termChinese: "检索增强生成",
    section: "GP",
    definition: "A technique that enhances LLM responses by retrieving relevant documents from an external knowledge base before generating answers. Pipeline: query → retrieve relevant documents (vector search) → augment prompt with context → generate response. Reduces hallucination, enables up-to-date knowledge, and provides source citations. Uses vector databases like Pinecone, Chroma, FAISS.",
    definitionChinese: "一种通过在生成答案之前从外部知识库检索相关文档来增强大语言模型响应的技术。流程：查询→检索相关文档（向量搜索）→用上下文增强提示→生成响应。减少幻觉、启用最新知识并提供源引用。使用Pinecone、Chroma、FAISS等向量数据库。"
  },
  "fine_tuning": {
    term: "Fine-Tuning",
    termChinese: "微调",
    section: "GP",
    definition: "The process of further training a pre-trained model on a specific dataset to adapt it to a particular task or domain. Full fine-tuning updates all parameters. Parameter-efficient methods: LoRA (Low-Rank Adaptation), QLoRA (quantized), prefix tuning, adapters - update only a small subset of parameters. Requires much less data than training from scratch.",
    definitionChinese: "在特定数据集上进一步训练预训练模型以适应特定任务或领域的过程。完全微调更新所有参数。参数高效方法：LoRA（低秩适应）、QLoRA（量化）、前缀调优、适配器——只更新参数的小子集。比从头训练需要更少的数据。"
  },
  "diffusion_model": {
    term: "Diffusion Model",
    termChinese: "扩散模型",
    section: "GP",
    definition: "A generative model that learns to create data by reversing a gradual noising process. Forward process: progressively adds Gaussian noise until data becomes pure noise. Reverse process: neural network learns to denoise step by step. State-of-the-art for image generation. Examples: Stable Diffusion, DALL-E, Midjourney. Also applied to audio, video, and 3D generation.",
    definitionChinese: "一种通过逆转逐步加噪过程来学习创建数据的生成模型。正向过程：逐步添加高斯噪声直到数据变为纯噪声。反向过程：神经网络学习逐步去噪。图像生成的最先进方法。示例：Stable Diffusion、DALL-E、Midjourney。也应用于音频、视频和3D生成。"
  },
  "vector_database": {
    term: "Vector Database",
    termChinese: "向量数据库",
    section: "GP",
    definition: "A database optimized for storing and querying high-dimensional vector embeddings. Enables similarity search using distance metrics (cosine similarity, Euclidean distance). Essential for RAG systems, recommendation engines, and semantic search. Popular options: Pinecone, Chroma, Weaviate, Milvus, FAISS, pgvector. Indexing algorithms: HNSW, IVF, PQ.",
    definitionChinese: "一种针对存储和查询高维向量嵌入优化的数据库。使用距离度量（余弦相似度、欧氏距离）实现相似性搜索。对RAG系统、推荐引擎和语义搜索至关重要。流行选项：Pinecone、Chroma、Weaviate、Milvus、FAISS、pgvector。索引算法：HNSW、IVF、PQ。"
  },
  "hallucination": {
    term: "Hallucination",
    termChinese: "幻觉",
    section: "GP",
    definition: "When an LLM generates confident but factually incorrect, fabricated, or nonsensical content. Types: intrinsic (contradicts source material) and extrinsic (unverifiable claims). Causes: training data limitations, pattern matching without true understanding. Mitigation: RAG, chain-of-thought prompting, self-consistency checking, grounding with verified sources, fine-tuning on factual data.",
    definitionChinese: "当大语言模型生成自信但事实上不正确、编造或无意义的内容时。类型：内在（与源材料矛盾）和外在（不可验证的声明）。原因：训练数据限制、没有真正理解的模式匹配。缓解：RAG、思维链提示、自一致性检查、使用经验证的来源接地、在事实数据上微调。"
  },
  "tokenizer": {
    term: "Tokenizer",
    termChinese: "分词器",
    section: "GP",
    definition: "The component that converts raw text into tokens (numerical IDs) that the model can process. Modern tokenizers use subword algorithms: BPE (GPT family), WordPiece (BERT), SentencePiece (T5, LLaMA). Vocabulary size affects model quality: too small causes long sequences, too large wastes parameters. The tokenizer defines the model's 'vocabulary'.",
    definitionChinese: "将原始文本转换为模型可以处理的token（数字ID）的组件。现代分词器使用子词算法：BPE（GPT系列）、WordPiece（BERT）、SentencePiece（T5、LLaMA）。词汇表大小影响模型质量：太小导致序列长，太大浪费参数。分词器定义了模型的'词汇表'。"
  },
  "context_window": {
    term: "Context Window",
    termChinese: "上下文窗口",
    section: "GP",
    definition: "The maximum number of tokens an LLM can process in a single input-output pass. Limits how much text the model can 'see' at once. GPT-4: 128K tokens, Claude: 200K tokens, Gemini: 1M+ tokens. Longer contexts enable processing entire documents but increase computational cost quadratically with attention. Techniques to extend: sparse attention, sliding window, RoPE.",
    definitionChinese: "大语言模型在单次输入-输出过程中可以处理的最大token数。限制模型一次可以'看到'多少文本。GPT-4：128K token，Claude：200K token，Gemini：1M+ token。更长的上下文允许处理整个文档，但注意力的计算成本二次方增长。扩展技术：稀疏注意力、滑动窗口、RoPE。"
  },
  "rlhf": {
    term: "RLHF (Reinforcement Learning from Human Feedback)",
    termChinese: "基于人类反馈的强化学习",
    section: "GP",
    definition: "A training technique to align LLMs with human preferences. Three stages: (1) supervised fine-tuning on demonstrations, (2) train a reward model on human preference rankings, (3) optimize the LLM using PPO against the reward model. Makes models more helpful, harmless, and honest. Alternative: DPO (Direct Preference Optimization) simplifies the pipeline.",
    definitionChinese: "一种使大语言模型与人类偏好对齐的训练技术。三个阶段：(1)在演示上进行监督微调，(2)在人类偏好排名上训练奖励模型，(3)使用PPO针对奖励模型优化LLM。使模型更有帮助、无害和诚实。替代方案：DPO（直接偏好优化）简化了管道。"
  },
  "agent_ai": {
    term: "AI Agent",
    termChinese: "AI智能体",
    section: "GP",
    definition: "An autonomous system that uses an LLM as its reasoning engine to plan and execute multi-step tasks. Components: LLM (brain), tools (APIs, code execution, web search), memory (conversation history, knowledge retrieval), and planning (task decomposition). Frameworks: LangChain, AutoGPT, CrewAI. Can use tools, write code, browse the web, and interact with external systems.",
    definitionChinese: "使用大语言模型作为推理引擎来规划和执行多步骤任务的自主系统。组件：LLM（大脑）、工具（API、代码执行、网页搜索）、记忆（对话历史、知识检索）和规划（任务分解）。框架：LangChain、AutoGPT、CrewAI。可以使用工具、编写代码、浏览网页和与外部系统交互。"
  },
  "multimodal_ai": {
    term: "Multimodal AI",
    termChinese: "多模态AI",
    section: "GP",
    definition: "AI systems that can process and generate multiple types of data (modalities): text, images, audio, video. Examples: GPT-4V (text + vision), Gemini (text, image, audio, video), DALL-E (text to image), Whisper (audio to text). Architecture combines modality-specific encoders with shared representations. Enables richer understanding and generation capabilities.",
    definitionChinese: "能够处理和生成多种类型数据（模态）的AI系统：文本、图像、音频、视频。示例：GPT-4V（文本+视觉）、Gemini（文本、图像、音频、视频）、DALL-E（文本到图像）、Whisper（音频到文本）。架构结合特定模态的编码器和共享表示。实现更丰富的理解和生成能力。"
  },
  "quantization": {
    term: "Model Quantization",
    termChinese: "模型量化",
    section: "GP",
    definition: "A technique to reduce model size and inference speed by representing weights and activations with lower-precision data types. FP32 → FP16 (half precision), INT8 (8-bit), or INT4 (4-bit). Methods: post-training quantization (PTQ) and quantization-aware training (QAT). GPTQ and GGUF are popular formats for quantized LLMs. Enables running large models on consumer hardware.",
    definitionChinese: "通过用低精度数据类型表示权重和激活来减少模型大小和加速推理的技术。FP32→FP16（半精度）、INT8（8位）或INT4（4位）。方法：训练后量化（PTQ）和量化感知训练（QAT）。GPTQ和GGUF是量化LLM的流行格式。使大模型能在消费级硬件上运行。"
  }
};
