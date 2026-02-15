const questionsDSA = [
  {
    id: 1,
    q: "What is the worst-case time complexity of searching for a key in an unbalanced Binary Search Tree (BST) with n nodes?",
    qChinese: "在一棵含有 n 个节点的不平衡二叉搜索树 (BST) 中，查找一个键的最坏时间复杂度是多少？",
    options: [
      "A) O(1)",
      "B) O(log n)",
      "C) O(n)",
      "D) O(n log n)"
    ],
    optionsChinese: [
      "A) O(1)",
      "B) O(log n)",
      "C) O(n)",
      "D) O(n log n)"
    ],
    answer: 2,
    explanation: "In the worst case, an unbalanced BST degenerates into a linked list where every node has only one child. This happens when elements are inserted in sorted order. Searching then requires traversing all n nodes sequentially, giving O(n) time complexity instead of the O(log n) expected from a balanced tree.",
    explanationChinese: "在最坏情况下，不平衡的二叉搜索树退化为链表，每个节点只有一个子节点。当元素按排序顺序插入时就会发生这种情况。此时查找需要顺序遍历所有 n 个节点，时间复杂度为 O(n)，而不是平衡树所期望的 O(log n)。",
    diagram: "",
    terms: ["binary_search_tree", "time_complexity", "worst_case"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 2,
    q: "In an AVL tree, what is the maximum allowed difference in height between the left and right subtrees of any node?",
    qChinese: "在 AVL 树中，任意节点的左右子树高度差最大允许是多少？",
    options: [
      "A) 0",
      "B) 1",
      "C) 2",
      "D) log n"
    ],
    optionsChinese: [
      "A) 0",
      "B) 1",
      "C) 2",
      "D) log n"
    ],
    answer: 1,
    explanation: "The AVL tree invariant requires that for every node, the heights of its left and right subtrees differ by at most 1. This balance factor constraint ensures the tree height stays O(log n), guaranteeing efficient search, insertion, and deletion. When an operation violates this, rotations restore balance.",
    explanationChinese: "AVL 树的不变量要求每个节点的左右子树高度差最多为 1。这个平衡因子约束确保树的高度保持在 O(log n)，保证了高效的查找、插入和删除操作。当某个操作违反该条件时，通过旋转来恢复平衡。",
    diagram: "",
    terms: ["avl_tree", "balance_factor", "tree_rotation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 3,
    q: "After inserting a key that causes a left-right imbalance in an AVL tree, which rotations are needed to restore balance?",
    qChinese: "在 AVL 树中插入一个导致左-右失衡的键后，需要哪些旋转操作来恢复平衡？",
    options: [
      "A) Single right rotation",
      "B) Single left rotation",
      "C) Left rotation on left child, then right rotation on node",
      "D) Right rotation on right child, then left rotation on node"
    ],
    optionsChinese: [
      "A) 单次右旋",
      "B) 单次左旋",
      "C) 对左子节点左旋，然后对该节点右旋",
      "D) 对右子节点右旋，然后对该节点左旋"
    ],
    answer: 2,
    explanation: "A left-right (LR) imbalance occurs when a node's left subtree is taller and the imbalance is in the left child's right subtree. The fix is a double rotation: first a left rotation on the left child to convert it into a left-left case, then a right rotation on the unbalanced node to restore the AVL property.",
    explanationChinese: "左-右 (LR) 失衡发生在节点的左子树较高且失衡位于左子节点的右子树时。修复方法是双旋转：先对左子节点进行左旋将其转化为左-左情况，然后对失衡节点进行右旋以恢复 AVL 性质。",
    diagram: "",
    terms: ["avl_tree", "double_rotation", "left_right_case"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 4,
    q: "In a hash table using open addressing with linear probing, what is the primary problem that degrades performance?",
    qChinese: "在使用开放寻址和线性探测的哈希表中，导致性能下降的主要问题是什么？",
    options: [
      "A) Hash overflow",
      "B) Primary clustering",
      "C) Stack overflow",
      "D) Memory fragmentation"
    ],
    optionsChinese: [
      "A) 哈希溢出",
      "B) 一次聚集",
      "C) 栈溢出",
      "D) 内存碎片化"
    ],
    answer: 1,
    explanation: "Primary clustering occurs in linear probing when consecutive occupied slots form long clusters. New keys hashing into any position within a cluster must probe to its end, and the cluster grows. This creates a positive feedback loop: larger clusters attract more keys, making them even larger, significantly increasing average search time.",
    explanationChinese: "一次聚集发生在线性探测中，当连续的已占用槽位形成长链时。散列到链中任何位置的新键必须探测到链的末端，链因此增长。这造成正反馈循环：更大的链吸引更多的键，使其变得更大，显著增加了平均搜索时间。",
    diagram: "",
    terms: ["hash_table", "linear_probing", "primary_clustering"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 5,
    q: "What is the amortized time complexity of inserting an element into a hash table with a good hash function and dynamic resizing?",
    qChinese: "使用良好哈希函数和动态扩容的哈希表，插入一个元素的均摊时间复杂度是多少？",
    options: [
      "A) O(n)",
      "B) O(log n)",
      "C) O(1)",
      "D) O(n log n)"
    ],
    optionsChinese: [
      "A) O(n)",
      "B) O(log n)",
      "C) O(1)",
      "D) O(n log n)"
    ],
    answer: 2,
    explanation: "With a good hash function keeping load factor bounded and a dynamic resizing strategy that doubles table size when needed, most insertions take O(1). Occasional resizing costs O(n), but distributing that cost over the n insertions that triggered it gives O(1) amortized per insertion via the aggregate or potential method.",
    explanationChinese: "使用良好的哈希函数使负载因子保持有界，并在需要时将表大小翻倍的动态扩容策略，大多数插入操作耗时 O(1)。偶尔的扩容代价为 O(n)，但将该代价分摊到触发扩容的 n 次插入上，通过聚合法或势能法得出每次插入的均摊时间为 O(1)。",
    diagram: "",
    terms: ["hash_table", "amortized_analysis", "dynamic_resizing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 6,
    q: "In a min-heap with n elements, what is the time complexity of the extract-min operation?",
    qChinese: "在含有 n 个元素的最小堆中，取出最小值操作的时间复杂度是多少？",
    options: [
      "A) O(1)",
      "B) O(log n)",
      "C) O(n)",
      "D) O(n log n)"
    ],
    optionsChinese: [
      "A) O(1)",
      "B) O(log n)",
      "C) O(n)",
      "D) O(n log n)"
    ],
    answer: 1,
    explanation: "Extract-min removes the root (the minimum), replaces it with the last element, then restores the heap property by sifting down. The sift-down operation compares the element with its children at each level, swapping it downward until the heap property holds. Since the heap has O(log n) levels, this takes O(log n) time.",
    explanationChinese: "取出最小值操作移除根节点（最小值），用最后一个元素替换它，然后通过下沉操作恢复堆的性质。下沉操作在每一层将元素与其子节点比较，向下交换直到满足堆性质。由于堆有 O(log n) 层，因此耗时 O(log n)。",
    diagram: "",
    terms: ["min_heap", "extract_min", "sift_down"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 7,
    q: "What is the time complexity of building a heap from an unsorted array of n elements using the bottom-up (Floyd's) method?",
    qChinese: "使用自底向上（Floyd）方法从 n 个元素的无序数组构建堆的时间复杂度是多少？",
    options: [
      "A) O(n log n)",
      "B) O(n^2)",
      "C) O(n)",
      "D) O(log n)"
    ],
    optionsChinese: [
      "A) O(n log n)",
      "B) O(n^2)",
      "C) O(n)",
      "D) O(log n)"
    ],
    answer: 2,
    explanation: "Floyd's build-heap starts from the last non-leaf node and sifts each node down. Although each sift-down can take O(log n), most nodes are near the bottom and sift very little. A careful summation shows the total work is O(n): the sum of heights over all nodes in a complete binary tree is O(n), not O(n log n).",
    explanationChinese: "Floyd 建堆法从最后一个非叶节点开始，对每个节点执行下沉操作。虽然每次下沉最多耗时 O(log n)，但大多数节点靠近底部，下沉距离很短。仔细求和可知总工作量为 O(n)：完全二叉树中所有节点高度之和为 O(n)，而非 O(n log n)。",
    diagram: "",
    terms: ["heap", "build_heap", "floyds_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 8,
    q: "Which graph traversal algorithm is best suited for finding the shortest path in an unweighted graph?",
    qChinese: "哪种图遍历算法最适合在无权图中寻找最短路径？",
    options: [
      "A) Depth-First Search (DFS)",
      "B) Breadth-First Search (BFS)",
      "C) Dijkstra's Algorithm",
      "D) Bellman-Ford Algorithm"
    ],
    optionsChinese: [
      "A) 深度优先搜索 (DFS)",
      "B) 广度优先搜索 (BFS)",
      "C) Dijkstra 算法",
      "D) Bellman-Ford 算法"
    ],
    answer: 1,
    explanation: "BFS explores vertices level by level from the source, visiting all neighbors at distance d before those at distance d+1. This guarantees the first time BFS reaches a vertex, it has found the shortest path in terms of edge count. DFS does not guarantee shortest paths. Dijkstra and Bellman-Ford handle weighted graphs and are overkill here.",
    explanationChinese: "BFS 从源点逐层探索顶点，先访问距离为 d 的所有邻居，再访问距离为 d+1 的。这保证了 BFS 首次到达某个顶点时，已找到按边数计算的最短路径。DFS 不能保证最短路径。Dijkstra 和 Bellman-Ford 处理带权图，在此处是多余的。",
    diagram: "",
    terms: ["bfs", "shortest_path", "unweighted_graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 9,
    q: "In DFS on a directed graph, a back edge indicates the presence of what?",
    qChinese: "在有向图的 DFS 中，后向边表明存在什么？",
    options: [
      "A) A bridge",
      "B) A cycle",
      "C) A bipartite partition",
      "D) A topological ordering"
    ],
    optionsChinese: [
      "A) 桥",
      "B) 环",
      "C) 二部图分割",
      "D) 拓扑排序"
    ],
    answer: 1,
    explanation: "During DFS on a directed graph, edges are classified as tree, back, forward, or cross edges. A back edge connects a vertex to one of its ancestors in the DFS tree, forming a cycle. A directed graph is acyclic (a DAG) if and only if its DFS produces no back edges, which is the basis for cycle detection algorithms.",
    explanationChinese: "在有向图的 DFS 过程中，边被分类为树边、后向边、前向边或交叉边。后向边将一个顶点连接到 DFS 树中的某个祖先，形成环。有向图是无环的（DAG）当且仅当其 DFS 不产生后向边，这是环检测算法的基础。",
    diagram: "",
    terms: ["dfs", "back_edge", "cycle_detection", "directed_acyclic_graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 10,
    q: "Dijkstra's algorithm fails to find correct shortest paths when the graph contains which of the following?",
    qChinese: "当图中包含以下哪种情况时，Dijkstra 算法无法找到正确的最短路径？",
    options: [
      "A) Cycles",
      "B) Negative weight edges",
      "C) Multiple connected components",
      "D) Self-loops with positive weight"
    ],
    optionsChinese: [
      "A) 环",
      "B) 负权边",
      "C) 多个连通分量",
      "D) 正权自环"
    ],
    answer: 1,
    explanation: "Dijkstra's algorithm relies on the greedy property that once a vertex is finalized with a shortest distance, no shorter path to it exists. Negative weight edges violate this assumption because a longer path could later become shorter by traversing a negative edge. Bellman-Ford should be used for graphs with negative edges.",
    explanationChinese: "Dijkstra 算法依赖贪心性质：一旦某个顶点的最短距离被确定，就不存在到它的更短路径。负权边违反了这个假设，因为一条较长的路径以后可能通过经过一条负权边而变得更短。对于含负权边的图，应使用 Bellman-Ford 算法。",
    diagram: "",
    terms: ["dijkstra", "negative_weight_edge", "greedy_property"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 11,
    q: "What is the time complexity of Dijkstra's algorithm using a binary min-heap for a graph with V vertices and E edges?",
    qChinese: "对于含 V 个顶点和 E 条边的图，使用二叉最小堆的 Dijkstra 算法的时间复杂度是多少？",
    options: [
      "A) O(V^2)",
      "B) O(E log V)",
      "C) O((V + E) log V)",
      "D) O(V * E)"
    ],
    optionsChinese: [
      "A) O(V^2)",
      "B) O(E log V)",
      "C) O((V + E) log V)",
      "D) O(V * E)"
    ],
    answer: 2,
    explanation: "With a binary min-heap, each of the V extract-min operations takes O(log V), and each of the E edge relaxations may trigger a decrease-key operation also costing O(log V). The total is O(V log V + E log V) = O((V + E) log V). For dense graphs, an adjacency matrix with O(V^2) may be preferable.",
    explanationChinese: "使用二叉最小堆时，V 次取出最小值操作每次耗时 O(log V)，E 次边松弛操作每次可能触发一次 O(log V) 的减小键值操作。总计 O(V log V + E log V) = O((V + E) log V)。对于稠密图，使用邻接矩阵的 O(V^2) 方法可能更优。",
    diagram: "",
    terms: ["dijkstra", "binary_heap", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 12,
    q: "Which property must be satisfied for dynamic programming to be applicable to a problem?",
    qChinese: "一个问题必须满足什么性质才能适用动态规划？",
    options: [
      "A) Greedy choice property",
      "B) Optimal substructure and overlapping subproblems",
      "C) Divide and conquer without memoization",
      "D) Linear recurrence only"
    ],
    optionsChinese: [
      "A) 贪心选择性质",
      "B) 最优子结构和重叠子问题",
      "C) 无需记忆化的分治法",
      "D) 仅限线性递推"
    ],
    answer: 1,
    explanation: "Dynamic programming requires two properties: optimal substructure means an optimal solution contains optimal solutions to subproblems, and overlapping subproblems means the same subproblems are solved repeatedly. DP stores subproblem results to avoid redundant computation. Without overlapping subproblems, plain divide and conquer suffices.",
    explanationChinese: "动态规划需要两个性质：最优子结构意味着最优解包含子问题的最优解，重叠子问题意味着相同的子问题被重复求解。DP 存储子问题结果以避免冗余计算。如果没有重叠子问题，普通的分治法就足够了。",
    diagram: "",
    terms: ["dynamic_programming", "optimal_substructure", "overlapping_subproblems"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 13,
    q: "In the 0/1 Knapsack problem with n items and capacity W, what is the time complexity of the standard dynamic programming solution?",
    qChinese: "在有 n 个物品、容量为 W 的 0/1 背包问题中，标准动态规划解法的时间复杂度是多少？",
    options: [
      "A) O(n log n)",
      "B) O(2^n)",
      "C) O(nW)",
      "D) O(n^2)"
    ],
    optionsChinese: [
      "A) O(n log n)",
      "B) O(2^n)",
      "C) O(nW)",
      "D) O(n^2)"
    ],
    answer: 2,
    explanation: "The DP table has n rows (items) and W+1 columns (capacities 0 to W), and each cell is computed in O(1) time. The total time is O(nW). This is called pseudo-polynomial because W is not polynomial in the input size (the number of bits to represent W). The 0/1 Knapsack problem is NP-hard in general.",
    explanationChinese: "DP 表有 n 行（物品）和 W+1 列（容量 0 到 W），每个单元格的计算耗时 O(1)。总时间为 O(nW)。这称为伪多项式时间，因为 W 相对于输入大小（表示 W 所需的位数）不是多项式的。0/1 背包问题一般是 NP 困难的。",
    diagram: "",
    terms: ["knapsack_problem", "dynamic_programming", "pseudo_polynomial"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 14,
    q: "Which of the following problems can be solved correctly using a greedy algorithm?",
    qChinese: "以下哪个问题可以用贪心算法正确求解？",
    options: [
      "A) 0/1 Knapsack Problem",
      "B) Activity Selection (Interval Scheduling Maximization)",
      "C) Longest Common Subsequence",
      "D) Travelling Salesman Problem"
    ],
    optionsChinese: [
      "A) 0/1 背包问题",
      "B) 活动选择（区间调度最大化）",
      "C) 最长公共子序列",
      "D) 旅行商问题"
    ],
    answer: 1,
    explanation: "The Activity Selection problem exhibits both the greedy choice property and optimal substructure. Sorting activities by finish time and greedily selecting the earliest-finishing compatible activity yields an optimal solution. The 0/1 Knapsack and LCS require DP, and TSP is NP-hard with no known polynomial greedy solution.",
    explanationChinese: "活动选择问题同时具有贪心选择性质和最优子结构。按结束时间排序并贪心地选择最早结束的兼容活动可得到最优解。0/1 背包和 LCS 需要动态规划，TSP 是 NP 困难问题，没有已知的多项式贪心解法。",
    diagram: "",
    terms: ["greedy_algorithm", "activity_selection", "interval_scheduling"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 15,
    q: "Kruskal's algorithm for finding a Minimum Spanning Tree uses which strategy?",
    qChinese: "Kruskal 算法寻找最小生成树使用了哪种策略？",
    options: [
      "A) Dynamic programming on subsets of vertices",
      "B) Greedy selection of edges sorted by weight with union-find",
      "C) BFS from the minimum weight vertex",
      "D) Divide and conquer on the adjacency matrix"
    ],
    optionsChinese: [
      "A) 在顶点子集上进行动态规划",
      "B) 按权重排序贪心选择边并使用并查集",
      "C) 从最小权重顶点出发的广度优先搜索",
      "D) 在邻接矩阵上进行分治"
    ],
    answer: 1,
    explanation: "Kruskal's algorithm sorts all edges by weight and greedily adds the smallest edge that does not create a cycle. A union-find (disjoint set) data structure efficiently checks whether two vertices are already connected. With path compression and union by rank, the near-linear time of union-find operations makes the overall complexity O(E log E).",
    explanationChinese: "Kruskal 算法按权重排序所有边，贪心地添加不会形成环的最小边。并查集（不相交集合）数据结构可以高效地检查两个顶点是否已连通。通过路径压缩和按秩合并，并查集操作接近线性时间，使整体复杂度为 O(E log E)。",
    diagram: "",
    terms: ["kruskal", "minimum_spanning_tree", "union_find", "greedy_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 16,
    q: "A problem is in the class NP if:",
    qChinese: "一个问题属于 NP 类，如果：",
    options: [
      "A) It cannot be solved by any algorithm",
      "B) A given solution can be verified in polynomial time",
      "C) It can only be solved in exponential time",
      "D) It has no known approximation algorithm"
    ],
    optionsChinese: [
      "A) 它不能被任何算法求解",
      "B) 给定一个解可以在多项式时间内验证",
      "C) 它只能在指数时间内求解",
      "D) 它没有已知的近似算法"
    ],
    answer: 1,
    explanation: "NP (Nondeterministic Polynomial time) is the class of decision problems for which a 'yes' answer can be verified in polynomial time given a certificate (witness). This does not mean the problem cannot be solved in polynomial time; in fact, P is a subset of NP. Whether P equals NP is the most famous open question in computer science.",
    explanationChinese: "NP（非确定性多项式时间）是这样一类判定问题：给定一个证据（证明），可以在多项式时间内验证'是'的答案。这并不意味着该问题不能在多项式时间内求解；事实上 P 是 NP 的子集。P 是否等于 NP 是计算机科学中最著名的未解问题。",
    diagram: "",
    terms: ["np", "polynomial_time_verification", "p_vs_np"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 17,
    q: "What does it mean for a problem X to be NP-complete?",
    qChinese: "一个问题 X 是 NP 完全的意味着什么？",
    options: [
      "A) X is in P but not in NP",
      "B) X is in NP and every problem in NP can be reduced to X in polynomial time",
      "C) X cannot be approximated within any constant factor",
      "D) X requires at least exponential space"
    ],
    optionsChinese: [
      "A) X 在 P 中但不在 NP 中",
      "B) X 在 NP 中且 NP 中的每个问题都可以在多项式时间内归约到 X",
      "C) X 不能在任何常数因子内被近似",
      "D) X 至少需要指数级空间"
    ],
    answer: 1,
    explanation: "A problem is NP-complete if it is in NP and is NP-hard, meaning every problem in NP can be polynomial-time reduced to it. NP-complete problems are the hardest problems in NP. If any NP-complete problem could be solved in polynomial time, then P = NP. Classic examples include SAT, 3-SAT, Vertex Cover, and Hamiltonian Cycle.",
    explanationChinese: "一个问题是 NP 完全的，如果它在 NP 中且是 NP 困难的，即 NP 中的每个问题都可以在多项式时间内归约到它。NP 完全问题是 NP 中最难的问题。如果任何一个 NP 完全问题能在多项式时间内求解，则 P = NP。经典例子包括 SAT、3-SAT、顶点覆盖和哈密顿回路。",
    diagram: "",
    terms: ["np_complete", "np_hard", "polynomial_reduction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 18,
    q: "Let X be a discrete random variable with values {1, 2, 3} and probabilities {0.2, 0.5, 0.3}. What is E[X]?",
    qChinese: "设离散随机变量 X 的取值为 {1, 2, 3}，概率为 {0.2, 0.5, 0.3}。E[X] 是多少？",
    options: [
      "A) 1.8",
      "B) 2.0",
      "C) 2.1",
      "D) 2.5"
    ],
    optionsChinese: [
      "A) 1.8",
      "B) 2.0",
      "C) 2.1",
      "D) 2.5"
    ],
    answer: 2,
    explanation: "The expected value E[X] = sum of x * P(X = x) for all x. Here, E[X] = 1(0.2) + 2(0.5) + 3(0.3) = 0.2 + 1.0 + 0.9 = 2.1. The expectation is a weighted average of the possible values, where the weights are the corresponding probabilities. It represents the long-run average outcome.",
    explanationChinese: "期望值 E[X] = 所有 x 的 x * P(X = x) 之和。此处 E[X] = 1(0.2) + 2(0.5) + 3(0.3) = 0.2 + 1.0 + 0.9 = 2.1。期望是可能取值的加权平均，权重为对应的概率。它表示长期运行的平均结果。",
    diagram: "",
    terms: ["expected_value", "discrete_random_variable", "probability_distribution"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 19,
    q: "If events A and B are independent, which of the following must be true?",
    qChinese: "如果事件 A 和 B 相互独立，以下哪项一定成立？",
    options: [
      "A) P(A and B) = P(A) + P(B)",
      "B) P(A and B) = P(A) * P(B)",
      "C) P(A | B) = P(B | A)",
      "D) P(A or B) = P(A) * P(B)"
    ],
    optionsChinese: [
      "A) P(A 且 B) = P(A) + P(B)",
      "B) P(A 且 B) = P(A) * P(B)",
      "C) P(A | B) = P(B | A)",
      "D) P(A 或 B) = P(A) * P(B)"
    ],
    answer: 1,
    explanation: "By definition, two events A and B are independent if and only if P(A and B) = P(A) * P(B). Equivalently, P(A | B) = P(A) and P(B | A) = P(B). Option A describes mutually exclusive events (with no overlap). Option C is not generally implied by independence unless P(A) = P(B).",
    explanationChinese: "根据定义，两个事件 A 和 B 相互独立当且仅当 P(A 且 B) = P(A) * P(B)。等价地，P(A | B) = P(A) 且 P(B | A) = P(B)。选项 A 描述的是互斥事件（无交集）。选项 C 不是独立性的一般推论，除非 P(A) = P(B)。",
    diagram: "",
    terms: ["independence", "conditional_probability", "joint_probability"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 20,
    q: "A fair six-sided die is rolled 3 times. What is the probability of getting exactly 2 sixes? (Use the binomial distribution)",
    qChinese: "一个公平的六面骰子掷 3 次，恰好得到 2 个六的概率是多少？（使用二项分布）",
    options: [
      "A) 5/72",
      "B) 1/36",
      "C) 5/216",
      "D) 25/216"
    ],
    optionsChinese: [
      "A) 5/72",
      "B) 1/36",
      "C) 5/216",
      "D) 25/216"
    ],
    answer: 0,
    explanation: "Using the binomial formula: P(X=2) = C(3,2) * (1/6)^2 * (5/6)^1 = 3 * (1/36) * (5/6) = 3 * 5/216 = 15/216 = 5/72. Here n=3 trials, k=2 successes, p=1/6 is the probability of rolling a six, and C(3,2)=3 is the number of ways to choose which 2 of the 3 rolls are sixes.",
    explanationChinese: "使用二项分布公式：P(X=2) = C(3,2) * (1/6)^2 * (5/6)^1 = 3 * (1/36) * (5/6) = 3 * 5/216 = 15/216 = 5/72。其中 n=3 次试验，k=2 次成功，p=1/6 是掷出六的概率，C(3,2)=3 是从 3 次掷骰中选择哪 2 次为六的方式数。",
    diagram: "",
    terms: ["binomial_distribution", "probability", "combinatorics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  }
];
