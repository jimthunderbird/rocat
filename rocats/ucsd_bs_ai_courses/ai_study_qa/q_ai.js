const questionsAI = [
  {
    id: 1,
    q: "In Breadth-First Search (BFS), which data structure is primarily used for the frontier?",
    qChinese: "在广度优先搜索（BFS）中，主要使用哪种数据结构来存储前沿？",
    options: [
      "A) Stack",
      "B) Queue",
      "C) Priority queue",
      "D) Linked list"
    ],
    optionsChinese: [
      "A) 栈",
      "B) 队列",
      "C) 优先队列",
      "D) 链表"
    ],
    answer: 1,
    explanation: "BFS uses a FIFO queue so that nodes are expanded level by level. This guarantees the shallowest goal node is found first. All nodes at depth d are explored before any node at depth d+1, which makes BFS optimal when step costs are uniform.",
    explanationChinese: "BFS使用先进先出队列，以便逐层扩展节点。这保证首先找到最浅的目标节点。深度d的所有节点在深度d+1的任何节点之前被探索，当步骤成本一致时BFS是最优的。",
    diagram: "",
    terms: ["search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 2,
    q: "What is the time complexity of BFS on a graph with branching factor b and solution depth d?",
    qChinese: "在分支因子为b、解的深度为d的图上，BFS的时间复杂度是多少？",
    options: [
      "A) O(b^d)",
      "B) O(d^b)",
      "C) O(b*d)",
      "D) O(b+d)"
    ],
    optionsChinese: [
      "A) O(b^d)",
      "B) O(d^b)",
      "C) O(b*d)",
      "D) O(b+d)"
    ],
    answer: 0,
    explanation: "BFS explores all nodes at each depth before moving deeper. At depth d with branching factor b, the total number of nodes generated is O(b^d). This exponential growth means BFS can be very memory-intensive for large search spaces with high branching factors.",
    explanationChinese: "BFS在向更深层移动之前探索每个深度的所有节点。在分支因子b和深度d时，生成的节点总数为O(b^d)。这种指数增长意味着BFS在分支因子高的大型搜索空间中可能非常消耗内存。",
    diagram: "",
    terms: ["search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 3,
    q: "Depth-First Search (DFS) is NOT guaranteed to find the optimal solution because:",
    qChinese: "深度优先搜索（DFS）不能保证找到最优解，因为：",
    options: [
      "A) It may find a deep goal before a shallow one",
      "B) It uses too much memory",
      "C) It cannot handle graphs",
      "D) It always revisits nodes"
    ],
    optionsChinese: [
      "A) 它可能在浅层目标之前找到深层目标",
      "B) 它使用太多内存",
      "C) 它无法处理图",
      "D) 它总是重新访问节点"
    ],
    answer: 0,
    explanation: "DFS uses a LIFO stack and dives deep into one branch before backtracking. It may discover a goal along a long path while a shorter path exists in another branch. This makes DFS complete in finite spaces but not optimal in general search problems.",
    explanationChinese: "DFS使用后进先出栈，在回溯之前深入一个分支。它可能沿着一条长路径发现目标，而另一个分支中存在更短的路径。这使得DFS在有限空间中是完备的，但在一般搜索问题中不是最优的。",
    diagram: "",
    terms: ["search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 4,
    q: "What is the space complexity advantage of DFS over BFS?",
    qChinese: "DFS相对于BFS的空间复杂度优势是什么？",
    options: [
      "A) DFS uses O(b^d) space",
      "B) DFS uses O(bm) space where m is max depth",
      "C) DFS uses O(d^2) space",
      "D) DFS uses constant space"
    ],
    optionsChinese: [
      "A) DFS使用O(b^d)空间",
      "B) DFS使用O(bm)空间，其中m为最大深度",
      "C) DFS使用O(d^2)空间",
      "D) DFS使用常数空间"
    ],
    answer: 1,
    explanation: "DFS only stores the nodes along the current path from root to leaf, plus siblings at each level. This gives O(bm) space where b is the branching factor and m is the maximum depth. This is dramatically less than BFS which requires O(b^d) space.",
    explanationChinese: "DFS只存储从根到叶的当前路径上的节点以及每层的兄弟节点。这给出O(bm)空间，其中b是分支因子，m是最大深度。这比需要O(b^d)空间的BFS要少得多。",
    diagram: "",
    terms: ["search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 5,
    q: "Uniform-Cost Search (UCS) expands nodes in order of:",
    qChinese: "一致代价搜索（UCS）按什么顺序扩展节点？",
    options: [
      "A) Deepest first",
      "B) Shallowest first",
      "C) Highest heuristic value h(n)",
      "D) Lowest cumulative path cost g(n)"
    ],
    optionsChinese: [
      "A) 最深优先",
      "B) 最浅优先",
      "C) 最高启发值h(n)",
      "D) 最低累积路径代价g(n)"
    ],
    answer: 3,
    explanation: "UCS uses a priority queue ordered by the path cost g(n) from the start node. It always expands the node with the lowest cumulative cost, guaranteeing an optimal solution when all edge costs are non-negative. UCS is equivalent to BFS when all step costs are equal.",
    explanationChinese: "UCS使用按从起始节点的路径代价g(n)排序的优先队列。它总是扩展累积代价最低的节点，当所有边代价非负时保证最优解。当所有步骤代价相等时，UCS等价于BFS。",
    diagram: "",
    terms: ["search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 6,
    q: "Iterative Deepening Depth-First Search (IDDFS) combines the advantages of:",
    qChinese: "迭代加深深度优先搜索（IDDFS）结合了哪两种算法的优势？",
    options: [
      "A) DFS and A*",
      "B) UCS and Greedy",
      "C) BFS and DFS",
      "D) A* and UCS"
    ],
    optionsChinese: [
      "A) DFS和A*",
      "B) UCS和贪婪搜索",
      "C) BFS和DFS",
      "D) A*和UCS"
    ],
    answer: 2,
    explanation: "IDDFS performs repeated depth-limited DFS with increasing depth limits. It achieves the completeness and optimality of BFS (for uniform costs) while maintaining the linear space complexity of DFS. The overhead of re-expanding nodes is minimal compared to the exponential growth at each level.",
    explanationChinese: "IDDFS以递增的深度限制执行重复的深度受限DFS。它在保持DFS的线性空间复杂度的同时实现了BFS的完备性和最优性（对于一致代价）。重新扩展节点的开销与每层的指数增长相比是最小的。",
    diagram: "",
    terms: ["search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 7,
    q: "In a search tree, a node is said to be 'expanded' when:",
    qChinese: "在搜索树中，当一个节点被'扩展'时意味着：",
    options: [
      "A) It is added to the frontier",
      "B) Its successors are generated",
      "C) It is removed from memory",
      "D) Its heuristic is computed"
    ],
    optionsChinese: [
      "A) 它被添加到前沿",
      "B) 它的后继节点被生成",
      "C) 它从内存中移除",
      "D) 它的启发值被计算"
    ],
    answer: 1,
    explanation: "Expanding a node means generating all of its successor (child) nodes by applying available actions. The expanded node is removed from the frontier, and its children are added. This is the core operation in tree and graph search algorithms that drives exploration of the state space.",
    explanationChinese: "扩展一个节点意味着通过应用可用操作生成其所有后继（子）节点。被扩展的节点从前沿中移除，其子节点被添加。这是驱动状态空间探索的树搜索和图搜索算法的核心操作。",
    diagram: "",
    terms: ["search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 8,
    q: "Which search algorithm is guaranteed to find the optimal solution in a weighted graph with non-negative edge costs?",
    qChinese: "在边代价非负的加权图中，哪种搜索算法保证找到最优解？",
    options: [
      "A) UCS",
      "B) BFS",
      "C) DFS",
      "D) Random search"
    ],
    optionsChinese: [
      "A) UCS",
      "B) BFS",
      "C) DFS",
      "D) 随机搜索"
    ],
    answer: 0,
    explanation: "Uniform-Cost Search is optimal for weighted graphs with non-negative costs because it always expands the least-cost node first. BFS is only optimal for uniform step costs. DFS makes no cost-based ordering, and random search provides no guarantees about solution quality.",
    explanationChinese: "一致代价搜索对于非负代价的加权图是最优的，因为它总是首先扩展代价最低的节点。BFS仅对一致步骤代价最优。DFS不进行基于代价的排序，随机搜索不提供解质量的保证。",
    diagram: "",
    terms: ["search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 9,
    q: "What happens if DFS is applied to an infinite search space without a depth limit?",
    qChinese: "如果DFS在没有深度限制的情况下应用于无限搜索空间，会发生什么？",
    options: [
      "A) It finds the optimal solution",
      "B) It may run forever along an infinite path",
      "C) It automatically backtracks",
      "D) It becomes equivalent to BFS"
    ],
    optionsChinese: [
      "A) 它找到最优解",
      "B) 它可能沿着无限路径永远运行",
      "C) 它自动回溯",
      "D) 它变得等价于BFS"
    ],
    answer: 1,
    explanation: "In an infinite search space, DFS can follow an infinite branch indefinitely and never backtrack to explore other paths where the goal might exist. This is why DFS is incomplete in infinite spaces. Depth-limited search and IDDFS address this by capping exploration depth.",
    explanationChinese: "在无限搜索空间中，DFS可能无限期地沿着一个无限分支前进，永远不会回溯来探索目标可能存在的其他路径。这就是DFS在无限空间中不完备的原因。深度受限搜索和IDDFS通过限制探索深度来解决这个问题。",
    diagram: "",
    terms: ["search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 10,
    q: "The 'completeness' of a search algorithm means:",
    qChinese: "搜索算法的'完备性'意味着：",
    options: [
      "A) It always runs in polynomial time",
      "B) It finds the optimal solution",
      "C) It uses minimal memory",
      "D) It is guaranteed to find a solution if one exists"
    ],
    optionsChinese: [
      "A) 它总是在多项式时间内运行",
      "B) 它找到最优解",
      "C) 它使用最少的内存",
      "D) 如果解存在则保证找到解"
    ],
    answer: 3,
    explanation: "Completeness means the algorithm will find a solution whenever one exists, given sufficient time and memory. This is distinct from optimality, which requires finding the best solution. BFS and IDDFS are complete; DFS is complete only in finite search spaces.",
    explanationChinese: "完备性意味着在有足够时间和内存的情况下，只要解存在，算法就会找到解。这与最优性不同，最优性要求找到最佳解。BFS和IDDFS是完备的；DFS仅在有限搜索空间中是完备的。",
    diagram: "",
    terms: ["search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 11,
    q: "Graph search differs from tree search by:",
    qChinese: "图搜索与树搜索的区别在于：",
    options: [
      "A) Using a different data structure",
      "B) Always finding optimal solutions",
      "C) Only working on trees",
      "D) Maintaining an explored set to avoid revisiting states"
    ],
    optionsChinese: [
      "A) 使用不同的数据结构",
      "B) 总是找到最优解",
      "C) 只能在树上工作",
      "D) 维护一个已探索集合以避免重新访问状态"
    ],
    answer: 3,
    explanation: "Graph search keeps an explored (closed) set that records previously expanded states. When a state is generated that is already in the explored set, it is discarded. This prevents infinite loops in graphs with cycles and reduces redundant work compared to tree search.",
    explanationChinese: "图搜索保持一个已探索（关闭）集合，记录先前扩展的状态。当生成的状态已在已探索集合中时，它会被丢弃。这防止了有环图中的无限循环，并减少了与树搜索相比的冗余工作。",
    diagram: "",
    terms: ["search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 12,
    q: "What is the time complexity of Iterative Deepening DFS?",
    qChinese: "迭代加深DFS的时间复杂度是多少？",
    options: [
      "A) O(d*b)",
      "B) O(b^(d/2))",
      "C) O(b^d)",
      "D) O(b*d^2)"
    ],
    optionsChinese: [
      "A) O(d*b)",
      "B) O(b^(d/2))",
      "C) O(b^d)",
      "D) O(b*d^2)"
    ],
    answer: 2,
    explanation: "IDDFS has the same asymptotic time complexity as BFS: O(b^d). Although it re-expands nodes at shallower depths, the dominant cost is at the deepest level. The overhead factor is b/(b-1), which is small for typical branching factors, making IDDFS highly practical.",
    explanationChinese: "IDDFS的渐近时间复杂度与BFS相同：O(b^d)。虽然它重新扩展较浅深度的节点，但主要成本在最深层。开销因子为b/(b-1)，对于典型的分支因子来说很小，使IDDFS非常实用。",
    diagram: "",
    terms: ["search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 13,
    q: "In depth-limited search with limit L, what happens when the goal is at depth L+1?",
    qChinese: "在深度限制为L的深度受限搜索中，当目标在深度L+1时会发生什么？",
    options: [
      "A) The search fails to find the goal",
      "B) The goal is found optimally",
      "C) The algorithm switches to BFS",
      "D) The limit is automatically increased"
    ],
    optionsChinese: [
      "A) 搜索无法找到目标",
      "B) 目标被最优地找到",
      "C) 算法切换到BFS",
      "D) 限制自动增加"
    ],
    answer: 0,
    explanation: "Depth-limited search only explores nodes up to depth L. If the goal is at depth L+1, it will never be reached. This is why choosing the right depth limit is critical. IDDFS solves this by trying all limits from 0 upward, ensuring the goal is eventually found.",
    explanationChinese: "深度受限搜索只探索深度不超过L的节点。如果目标在深度L+1，它将永远无法到达。这就是为什么选择正确的深度限制至关重要。IDDFS通过从0开始尝试所有限制来解决这个问题，确保最终找到目标。",
    diagram: "",
    terms: ["search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 14,
    q: "Which property must edge costs satisfy for UCS to be correct?",
    qChinese: "边代价必须满足什么性质才能使UCS正确？",
    options: [
      "A) All costs must be equal",
      "B) All costs must be non-negative",
      "C) All costs must be positive integers",
      "D) Costs can be any real number"
    ],
    optionsChinese: [
      "A) 所有代价必须相等",
      "B) 所有代价必须非负",
      "C) 所有代价必须是正整数",
      "D) 代价可以是任何实数"
    ],
    answer: 1,
    explanation: "UCS requires non-negative edge costs to guarantee optimality. With negative costs, a longer path could become cheaper than a shorter one after adding a negative-cost edge, breaking UCS's assumption that expanding the lowest-cost node first leads to the optimal solution.",
    explanationChinese: "UCS要求非负边代价以保证最优性。有了负代价，一条较长的路径在加上负代价边后可能比较短的路径更便宜，这打破了UCS关于首先扩展最低代价节点将导致最优解的假设。",
    diagram: "",
    terms: ["search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 15,
    q: "BFS is optimal only when:",
    qChinese: "BFS仅在什么条件下是最优的？",
    options: [
      "A) The graph is a tree",
      "B) Step costs are all equal (or non-decreasing with depth)",
      "C) The heuristic is admissible",
      "D) The branching factor is 2"
    ],
    optionsChinese: [
      "A) 图是一棵树",
      "B) 步骤代价全部相等（或随深度非递减）",
      "C) 启发式函数是可采纳的",
      "D) 分支因子为2"
    ],
    answer: 1,
    explanation: "BFS finds the shallowest goal first, which is optimal only when all step costs are equal or when costs are non-decreasing with depth. If different edges have different costs, a deeper path might be cheaper, and UCS should be used instead to guarantee optimality.",
    explanationChinese: "BFS首先找到最浅的目标，这仅在所有步骤代价相等或代价随深度非递减时是最优的。如果不同边有不同代价，更深的路径可能更便宜，应使用UCS来保证最优性。",
    diagram: "",
    terms: ["search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 16,
    q: "In IDDFS, how many times is the root node expanded if the solution is at depth d?",
    qChinese: "在IDDFS中，如果解在深度d，根节点被扩展多少次？",
    options: [
      "A) d+1",
      "B) d",
      "C) 1",
      "D) b^d"
    ],
    optionsChinese: [
      "A) d+1次",
      "B) d次",
      "C) 1次",
      "D) b^d次"
    ],
    answer: 0,
    explanation: "IDDFS runs depth-limited searches for limits 0, 1, 2, ..., d. The root is expanded in each iteration, so it is expanded d+1 times total. Despite this repetition, the overhead is asymptotically negligible because the number of nodes at the deepest level dominates.",
    explanationChinese: "IDDFS对限制0、1、2、...、d运行深度受限搜索。根在每次迭代中都被扩展，所以总共被扩展d+1次。尽管有这种重复，开销在渐近意义上可以忽略，因为最深层的节点数量占主导地位。",
    diagram: "",
    terms: ["search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 17,
    q: "Which of the following is true about bidirectional search?",
    qChinese: "关于双向搜索，以下哪项是正确的？",
    options: [
      "A) It searches from goal to start only",
      "B) It doubles the search space",
      "C) It searches from both start and goal, meeting in the middle",
      "D) It only works with DFS"
    ],
    optionsChinese: [
      "A) 它只从目标搜索到起始",
      "B) 它使搜索空间加倍",
      "C) 它从起始和目标双向搜索，在中间相遇",
      "D) 它只能与DFS配合使用"
    ],
    answer: 2,
    explanation: "Bidirectional search runs two simultaneous searches: forward from the start and backward from the goal. When the frontiers meet, a path is found. This can reduce time complexity from O(b^d) to O(b^(d/2)), a significant improvement for large search spaces.",
    explanationChinese: "双向搜索同时运行两个搜索：从起始向前和从目标向后。当前沿相遇时，就找到了路径。这可以将时间复杂度从O(b^d)降低到O(b^(d/2))，对于大型搜索空间是一个显著的改进。",
    diagram: "",
    terms: ["search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 18,
    q: "A search problem is formally defined by which components?",
    qChinese: "搜索问题由哪些组件正式定义？",
    options: [
      "A) Variables, domains, constraints",
      "B) States, actions, transition model, goal test, path cost",
      "C) States and rewards only",
      "D) Nodes and edges only"
    ],
    optionsChinese: [
      "A) 变量、域、约束",
      "B) 状态、动作、转移模型、目标测试、路径代价",
      "C) 仅状态和奖励",
      "D) 仅节点和边"
    ],
    answer: 1,
    explanation: "A search problem consists of an initial state, a set of actions, a transition model defining successors, a goal test, and a path cost function. These five components fully specify the problem, allowing search algorithms to systematically explore the state space.",
    explanationChinese: "搜索问题由初始状态、动作集、定义后继的转移模型、目标测试和路径代价函数组成。这五个组件完全指定了问题，允许搜索算法系统地探索状态空间。",
    diagram: "",
    terms: ["search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 19,
    q: "What distinguishes a search 'state' from a search 'node'?",
    qChinese: "搜索'状态'和搜索'节点'有什么区别？",
    options: [
      "A) They are identical concepts",
      "B) Nodes exist only in graph search",
      "C) A state includes more information than a node",
      "D) A node includes the state plus metadata like parent, action, and path cost"
    ],
    optionsChinese: [
      "A) 它们是相同的概念",
      "B) 节点仅存在于图搜索中",
      "C) 状态比节点包含更多信息",
      "D) 节点包括状态加上父节点、动作和路径代价等元数据"
    ],
    answer: 3,
    explanation: "A state represents a configuration of the world, while a node is a data structure in the search tree containing the state, parent pointer, action that generated it, path cost g(n), and depth. Multiple nodes can represent the same state via different paths.",
    explanationChinese: "状态表示世界的一个配置，而节点是搜索树中的一个数据结构，包含状态、父指针、生成它的动作、路径代价g(n)和深度。多个节点可以通过不同路径表示相同的状态。",
    diagram: "",
    terms: ["search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 20,
    q: "Why is DFS preferred for problems where any solution is acceptable regardless of depth?",
    qChinese: "为什么DFS适合不关心解深度的问题？",
    options: [
      "A) It uses much less memory than BFS",
      "B) It is always faster than BFS",
      "C) It guarantees the optimal solution",
      "D) It has lower time complexity"
    ],
    optionsChinese: [
      "A) 它比BFS使用少得多的内存",
      "B) 它总是比BFS快",
      "C) 它保证最优解",
      "D) 它有更低的时间复杂度"
    ],
    answer: 0,
    explanation: "When any solution suffices, DFS is preferred because it uses O(bm) memory versus O(b^d) for BFS. DFS can quickly dive deep and find a solution without storing all nodes at each level. This memory efficiency is crucial for problems with large branching factors.",
    explanationChinese: "当任何解都足够时，DFS是首选的，因为它使用O(bm)内存，而BFS需要O(b^d)。DFS可以快速深入并找到解，而无需存储每层的所有节点。这种内存效率对于分支因子大的问题至关重要。",
    diagram: "",
    terms: ["search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 21,
    q: "In UCS, if two nodes have the same path cost, which is typically expanded first?",
    qChinese: "在UCS中，如果两个节点具有相同的路径代价，通常哪个先被扩展？",
    options: [
      "A) The one added to the queue first (FIFO tiebreaking)",
      "B) The one with fewer successors",
      "C) The deeper node",
      "D) Random selection"
    ],
    optionsChinese: [
      "A) 先加入队列的那个（FIFO打破平局）",
      "B) 后继较少的那个",
      "C) 较深的节点",
      "D) 随机选择"
    ],
    answer: 0,
    explanation: "When path costs are equal in UCS, ties are typically broken using FIFO ordering: the node added to the priority queue first is expanded first. This tiebreaking strategy ensures consistent behavior and can affect which optimal solution is found when multiple exist.",
    explanationChinese: "当UCS中路径代价相等时，通常使用FIFO排序打破平局：先加入优先队列的节点先被扩展。这种打破平局策略确保一致的行为，并可能影响在存在多个最优解时找到哪个。",
    diagram: "",
    terms: ["search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 22,
    q: "Which search algorithm would you use to find the shortest path in an unweighted maze?",
    qChinese: "你会使用哪种搜索算法在无权迷宫中找到最短路径？",
    options: [
      "A) DFS",
      "B) Hill climbing",
      "C) Random walk",
      "D) BFS"
    ],
    optionsChinese: [
      "A) DFS",
      "B) 爬山法",
      "C) 随机游走",
      "D) BFS"
    ],
    answer: 3,
    explanation: "BFS finds the shortest path in an unweighted graph because it explores nodes level by level. In an unweighted maze, all steps have cost 1, so the shallowest goal found by BFS is also the one with minimum total cost, making BFS both complete and optimal.",
    explanationChinese: "BFS在无权图中找到最短路径，因为它逐层探索节点。在无权迷宫中，所有步骤的代价为1，所以BFS找到的最浅目标也是总代价最小的，使BFS既完备又最优。",
    diagram: "",
    terms: ["search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 23,
    q: "The frontier in a search algorithm refers to:",
    qChinese: "搜索算法中的前沿指的是：",
    options: [
      "A) Nodes that have been generated but not yet expanded",
      "B) All nodes that have been expanded",
      "C) The goal nodes only",
      "D) The initial state only"
    ],
    optionsChinese: [
      "A) 已生成但尚未扩展的节点",
      "B) 所有已扩展的节点",
      "C) 仅目标节点",
      "D) 仅初始状态"
    ],
    answer: 0,
    explanation: "The frontier (also called the open list or fringe) contains all nodes that have been generated but not yet expanded. The choice of data structure for the frontier determines the search strategy: queue for BFS, stack for DFS, and priority queue for UCS and A*.",
    explanationChinese: "前沿（也称为开放列表或边缘）包含所有已生成但尚未扩展的节点。前沿数据结构的选择决定了搜索策略：队列用于BFS，栈用于DFS，优先队列用于UCS和A*。",
    diagram: "",
    terms: ["search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 24,
    q: "What is the branching factor in a search problem?",
    qChinese: "搜索问题中的分支因子是什么？",
    options: [
      "A) The depth of the search tree",
      "B) The maximum number of successors of any node",
      "C) The total number of nodes",
      "D) The cost of the optimal path"
    ],
    optionsChinese: [
      "A) 搜索树的深度",
      "B) 任何节点的最大后继数量",
      "C) 节点总数",
      "D) 最优路径的代价"
    ],
    answer: 1,
    explanation: "The branching factor b is the maximum (or average) number of successors generated when a node is expanded. It directly determines the growth rate of the search tree. A higher branching factor means exponentially more nodes at each depth level, affecting both time and space.",
    explanationChinese: "分支因子b是节点扩展时生成的最大（或平均）后继数量。它直接决定搜索树的增长率。较高的分支因子意味着每个深度层有指数级更多的节点，影响时间和空间。",
    diagram: "",
    terms: ["search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 25,
    q: "Depth-limited search returns 'cutoff' when:",
    qChinese: "深度受限搜索在什么时候返回'截断'？",
    options: [
      "A) No solution exists",
      "B) The depth limit is reached without finding a goal",
      "C) A cycle is detected",
      "D) Memory runs out"
    ],
    optionsChinese: [
      "A) 不存在解",
      "B) 达到深度限制而未找到目标",
      "C) 检测到环",
      "D) 内存耗尽"
    ],
    answer: 1,
    explanation: "Depth-limited search returns a special 'cutoff' value when it reaches the depth limit without finding a solution, distinguishing this from outright failure. This cutoff signal tells IDDFS that increasing the depth limit might reveal a solution at greater depths.",
    explanationChinese: "深度受限搜索在达到深度限制而未找到解时返回特殊的'截断'值，将其与彻底失败区分开来。这个截断信号告诉IDDFS，增加深度限制可能会在更大深度发现解。",
    diagram: "",
    terms: ["search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 26,
    q: "Which uninformed search strategy is most memory-efficient?",
    qChinese: "哪种无信息搜索策略最节省内存？",
    options: [
      "A) DFS",
      "B) UCS",
      "C) BFS",
      "D) Bidirectional search"
    ],
    optionsChinese: [
      "A) DFS",
      "B) UCS",
      "C) BFS",
      "D) 双向搜索"
    ],
    answer: 0,
    explanation: "DFS is the most memory-efficient uninformed search, requiring only O(bm) space. It stores only the nodes along the current path plus their unexpanded siblings. BFS and UCS both require O(b^d) space to store the entire frontier at the current depth level.",
    explanationChinese: "DFS是最节省内存的无信息搜索，只需要O(bm)空间。它只存储当前路径上的节点及其未扩展的兄弟节点。BFS和UCS都需要O(b^d)空间来存储当前深度层的整个前沿。",
    diagram: "",
    terms: ["search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 27,
    q: "In a search problem, the transition model defines:",
    qChinese: "在搜索问题中，转移模型定义了：",
    options: [
      "A) The goal state",
      "B) The result of applying an action in a state",
      "C) The heuristic function",
      "D) The initial state"
    ],
    optionsChinese: [
      "A) 目标状态",
      "B) 在状态中应用动作的结果",
      "C) 启发式函数",
      "D) 初始状态"
    ],
    answer: 1,
    explanation: "The transition model (or successor function) specifies the state that results from performing a given action in a given state. It maps (state, action) pairs to successor states, forming the edges of the state-space graph that search algorithms traverse.",
    explanationChinese: "转移模型（或后继函数）指定在给定状态中执行给定动作后产生的状态。它将（状态，动作）对映射到后继状态，形成搜索算法遍历的状态空间图的边。",
    diagram: "",
    terms: ["search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 28,
    q: "What is the key disadvantage of BFS compared to DFS?",
    qChinese: "与DFS相比，BFS的主要缺点是什么？",
    options: [
      "A) BFS is incomplete",
      "B) BFS cannot find any solution",
      "C) BFS uses exponential memory",
      "D) BFS is slower in all cases"
    ],
    optionsChinese: [
      "A) BFS是不完备的",
      "B) BFS无法找到任何解",
      "C) BFS使用指数级内存",
      "D) BFS在所有情况下都更慢"
    ],
    answer: 2,
    explanation: "BFS must store all nodes at the current depth level in memory, leading to O(b^d) space complexity. For problems with large branching factors or deep solutions, this exponential memory requirement makes BFS impractical, while DFS needs only O(bm) linear space.",
    explanationChinese: "BFS必须在内存中存储当前深度层的所有节点，导致O(b^d)的空间复杂度。对于分支因子大或解深的问题，这种指数级内存需求使BFS不实际，而DFS只需要O(bm)的线性空间。",
    diagram: "",
    terms: ["search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 29,
    q: "When performing graph search with DFS, adding a visited set changes DFS's space complexity to:",
    qChinese: "使用DFS执行图搜索时，添加已访问集合会将DFS的空间复杂度改变为：",
    options: [
      "A) O(bm)",
      "B) O(log n)",
      "C) O(1)",
      "D) O(b^m) in the worst case"
    ],
    optionsChinese: [
      "A) O(bm)",
      "B) O(log n)",
      "C) O(1)",
      "D) 最坏情况下O(b^m)"
    ],
    answer: 3,
    explanation: "Adding an explored set to DFS means storing every visited state, which can be as large as the entire state space. In the worst case, this is O(b^m) where m is the maximum depth. This trades DFS's memory advantage for the ability to avoid revisiting states in graphs with cycles.",
    explanationChinese: "为DFS添加已探索集合意味着存储每个已访问状态，这可能与整个状态空间一样大。最坏情况下为O(b^m)，其中m是最大深度。这以牺牲DFS的内存优势来换取避免在有环图中重新访问状态的能力。",
    diagram: "",
    terms: ["search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 30,
    q: "Which statement about UCS is FALSE?",
    qChinese: "关于UCS，以下哪个说法是错误的？",
    options: [
      "A) UCS is complete if step costs are positive",
      "B) UCS uses a priority queue",
      "C) UCS is always faster than BFS",
      "D) UCS is optimal for non-negative costs"
    ],
    optionsChinese: [
      "A) 如果步骤代价为正，UCS是完备的",
      "B) UCS使用优先队列",
      "C) UCS总是比BFS快",
      "D) UCS对于非负代价是最优的"
    ],
    answer: 2,
    explanation: "UCS is not always faster than BFS. In fact, when all step costs are equal, UCS behaves identically to BFS but with the added overhead of maintaining a priority queue. UCS can also explore many low-cost paths before finding the goal, making it slower in some scenarios.",
    explanationChinese: "UCS并不总是比BFS快。实际上，当所有步骤代价相等时，UCS的行为与BFS相同，但有维护优先队列的额外开销。UCS还可能在找到目标之前探索许多低代价路径，在某些场景下更慢。",
    diagram: "",
    terms: ["search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 31,
    q: "A* search uses the evaluation function f(n) = g(n) + h(n). What do g(n) and h(n) represent?",
    qChinese: "A*搜索使用评估函数f(n) = g(n) + h(n)。g(n)和h(n)分别代表什么？",
    options: [
      "A) g(n) is heuristic cost; h(n) is path cost",
      "B) g(n) is depth; h(n) is branching factor",
      "C) Both are heuristic estimates",
      "D) g(n) is path cost from start; h(n) is estimated cost to goal"
    ],
    optionsChinese: [
      "A) g(n)是启发代价；h(n)是路径代价",
      "B) g(n)是深度；h(n)是分支因子",
      "C) 两者都是启发式估计",
      "D) g(n)是从起始的路径代价；h(n)是到目标的估计代价"
    ],
    answer: 3,
    explanation: "In A*, g(n) is the actual cost of the path from the start node to node n, and h(n) is the heuristic estimate of the cost from n to the nearest goal. Together, f(n) estimates the total cost of the cheapest solution through n, guiding search toward optimal paths.",
    explanationChinese: "在A*中，g(n)是从起始节点到节点n的实际路径代价，h(n)是从n到最近目标的启发式估计代价。f(n)一起估计通过n的最便宜解的总代价，引导搜索朝最优路径方向。",
    diagram: "",
    terms: ["a_star", "heuristic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 32,
    q: "A heuristic h(n) is admissible if:",
    qChinese: "如果启发式函数h(n)满足以下条件，则它是可采纳的：",
    options: [
      "A) It never overestimates the true cost to the goal",
      "B) It always overestimates the true cost to the goal",
      "C) It equals the true cost exactly",
      "D) It returns zero for all nodes"
    ],
    optionsChinese: [
      "A) 它从不高估到目标的真实代价",
      "B) 它总是高估到目标的真实代价",
      "C) 它恰好等于真实代价",
      "D) 它对所有节点返回零"
    ],
    answer: 0,
    explanation: "An admissible heuristic never overestimates the true cost to reach the goal from any state. Formally, h(n) <= h*(n) where h*(n) is the true optimal cost. Admissibility is required for A* to guarantee finding the optimal solution in tree search.",
    explanationChinese: "可采纳的启发式函数从不高估从任何状态到达目标的真实代价。形式上，h(n) <= h*(n)，其中h*(n)是真实最优代价。可采纳性是A*在树搜索中保证找到最优解的必要条件。",
    diagram: "",
    terms: ["a_star", "heuristic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 33,
    q: "A heuristic is consistent (monotonic) if for every node n and successor n':",
    qChinese: "如果对于每个节点n及其后继n'，启发式函数满足以下条件，则它是一致的（单调的）：",
    options: [
      "A) h(n) >= h(n') + c(n, n')",
      "B) h(n) <= c(n, n') + h(n')",
      "C) h(n) = h(n')",
      "D) h(n) + h(n') <= c(n, n')"
    ],
    optionsChinese: [
      "A) h(n) >= h(n') + c(n, n')",
      "B) h(n) <= c(n, n') + h(n')",
      "C) h(n) = h(n')",
      "D) h(n) + h(n') <= c(n, n')"
    ],
    answer: 1,
    explanation: "Consistency requires that h(n) <= c(n, n') + h(n') for every successor n' of n, where c(n, n') is the step cost. This is a form of the triangle inequality. Consistency implies admissibility and ensures f(n) values are non-decreasing along any path, so A* with graph search is optimal.",
    explanationChinese: "一致性要求对于n的每个后继n'，h(n) <= c(n, n') + h(n')，其中c(n, n')是步骤代价。这是三角不等式的一种形式。一致性蕴含可采纳性，并确保f(n)值沿任何路径不递减，因此带图搜索的A*是最优的。",
    diagram: "",
    terms: ["a_star", "heuristic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 34,
    q: "Greedy Best-First Search uses which evaluation function?",
    qChinese: "贪婪最佳优先搜索使用哪个评估函数？",
    options: [
      "A) f(n) = g(n)",
      "B) f(n) = g(n) - h(n)",
      "C) f(n) = g(n) + h(n)",
      "D) f(n) = h(n)"
    ],
    optionsChinese: [
      "A) f(n) = g(n)",
      "B) f(n) = g(n) - h(n)",
      "C) f(n) = g(n) + h(n)",
      "D) f(n) = h(n)"
    ],
    answer: 3,
    explanation: "Greedy Best-First Search expands the node that appears closest to the goal using only the heuristic h(n). It ignores path cost g(n), which makes it fast but not optimal. It can be misled by heuristics that underestimate differently across the search space.",
    explanationChinese: "贪婪最佳优先搜索仅使用启发式h(n)扩展看起来最接近目标的节点。它忽略路径代价g(n)，这使它快速但不最优。它可能被在搜索空间中以不同程度低估的启发式函数误导。",
    diagram: "",
    terms: ["heuristic", "search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 35,
    q: "Why is Greedy Best-First Search not optimal?",
    qChinese: "为什么贪婪最佳优先搜索不是最优的？",
    options: [
      "A) It uses too much memory",
      "B) It always finds the deepest solution",
      "C) It cannot handle heuristics",
      "D) It ignores the path cost g(n) and may follow a low-heuristic but high-cost path"
    ],
    optionsChinese: [
      "A) 它使用太多内存",
      "B) 它总是找到最深的解",
      "C) 它无法处理启发式函数",
      "D) 它忽略路径代价g(n)，可能沿着低启发值但高代价的路径"
    ],
    answer: 3,
    explanation: "Greedy Best-First Search only considers h(n), the estimated distance to the goal. It does not account for the cost already incurred g(n). This means it may choose a path that looks close to the goal but has accumulated a very high total cost, missing the optimal solution.",
    explanationChinese: "贪婪最佳优先搜索只考虑h(n)，即到目标的估计距离。它不考虑已产生的代价g(n)。这意味着它可能选择一条看起来接近目标但已累积非常高总代价的路径，从而错过最优解。",
    diagram: "",
    terms: ["heuristic", "search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 36,
    q: "For the 8-puzzle, the Manhattan distance heuristic is:",
    qChinese: "对于8数码问题，曼哈顿距离启发式是：",
    options: [
      "A) Inadmissible",
      "B) Always exact",
      "C) Admissible and consistent",
      "D) Only admissible but not consistent"
    ],
    optionsChinese: [
      "A) 不可采纳的",
      "B) 总是精确的",
      "C) 可采纳且一致的",
      "D) 仅可采纳但不一致"
    ],
    answer: 2,
    explanation: "Manhattan distance sums the horizontal and vertical distances each tile must move to reach its goal position. It never overestimates because each tile must move at least that many steps. It is also consistent since moving one tile changes the heuristic by at most the step cost.",
    explanationChinese: "曼哈顿距离对每个方块到达目标位置所需的水平和垂直距离求和。它从不高估，因为每个方块必须至少移动那么多步。它也是一致的，因为移动一个方块最多改变启发值一个步骤代价。",
    diagram: "",
    terms: ["a_star", "heuristic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 37,
    q: "If heuristic h1 dominates heuristic h2, meaning h1(n) >= h2(n) for all n, then:",
    qChinese: "如果启发式h1支配启发式h2，即对所有n有h1(n) >= h2(n)，那么：",
    options: [
      "A) h1 causes A* to expand more nodes",
      "B) A* with h1 expands no more nodes than A* with h2",
      "C) h2 is more informative",
      "D) h1 must be inadmissible"
    ],
    optionsChinese: [
      "A) h1使A*扩展更多节点",
      "B) 使用h1的A*扩展的节点不多于使用h2的A*",
      "C) h2更有信息量",
      "D) h1必须是不可采纳的"
    ],
    answer: 1,
    explanation: "A dominating heuristic is more informative and provides tighter lower bounds on the true cost. A* with a dominating admissible heuristic will expand fewer or equal nodes because higher heuristic values prune more of the search space while still guaranteeing optimality.",
    explanationChinese: "支配的启发式更有信息量，提供更紧的真实代价下界。使用支配的可采纳启发式的A*将扩展更少或相等数量的节点，因为更高的启发值修剪了更多搜索空间，同时仍保证最优性。",
    diagram: "",
    terms: ["a_star", "heuristic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 38,
    q: "The trivial heuristic h(n) = 0 for all nodes makes A* equivalent to:",
    qChinese: "对所有节点的平凡启发式h(n) = 0使A*等价于：",
    options: [
      "A) UCS",
      "B) BFS",
      "C) DFS",
      "D) Greedy Best-First Search"
    ],
    optionsChinese: [
      "A) UCS",
      "B) BFS",
      "C) DFS",
      "D) 贪婪最佳优先搜索"
    ],
    answer: 0,
    explanation: "When h(n) = 0, the evaluation function becomes f(n) = g(n) + 0 = g(n), which is exactly the function used by Uniform-Cost Search. This heuristic is admissible (it never overestimates) but provides no guidance, so A* degrades to UCS performance.",
    explanationChinese: "当h(n) = 0时，评估函数变为f(n) = g(n) + 0 = g(n)，这正是一致代价搜索使用的函数。这个启发式是可采纳的（它从不高估）但不提供指导，所以A*退化为UCS的性能。",
    diagram: "",
    terms: ["a_star", "heuristic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 39,
    q: "A* search is optimally efficient, meaning:",
    qChinese: "A*搜索是最优高效的，这意味着：",
    options: [
      "A) It runs in polynomial time",
      "B) No other optimal algorithm expands fewer nodes for the same heuristic",
      "C) It uses minimal memory",
      "D) It always terminates instantly"
    ],
    optionsChinese: [
      "A) 它在多项式时间内运行",
      "B) 对于相同启发式，没有其他最优算法扩展更少的节点",
      "C) 它使用最少的内存",
      "D) 它总是立即终止"
    ],
    answer: 1,
    explanation: "A* is optimally efficient in that no other algorithm using the same heuristic and guaranteeing optimality can expand fewer nodes (excluding tiebreaking differences). Any node with f(n) < C* must be expanded, and A* expands only those nodes plus some with f(n) = C*.",
    explanationChinese: "A*是最优高效的，因为没有其他使用相同启发式且保证最优性的算法能扩展更少的节点（排除打破平局的差异）。任何f(n) < C*的节点必须被扩展，A*只扩展这些节点加上一些f(n) = C*的节点。",
    diagram: "",
    terms: ["a_star", "heuristic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 40,
    q: "Which heuristic for the 8-puzzle is more informative: misplaced tiles or Manhattan distance?",
    qChinese: "对于8数码问题，哪个启发式更有信息量：错位方块数还是曼哈顿距离？",
    options: [
      "A) Misplaced tiles",
      "B) They are equally informative",
      "C) Manhattan distance",
      "D) Neither is informative"
    ],
    optionsChinese: [
      "A) 错位方块数",
      "B) 它们同样有信息量",
      "C) 曼哈顿距离",
      "D) 两者都没有信息量"
    ],
    answer: 2,
    explanation: "Manhattan distance dominates misplaced tiles because for any misplaced tile, the Manhattan distance is at least 1, while misplaced tiles counts only 1. For tiles far from their goal, Manhattan distance gives a much higher estimate. Both are admissible but Manhattan distance prunes more.",
    explanationChinese: "曼哈顿距离支配错位方块数，因为对于任何错位方块，曼哈顿距离至少为1，而错位方块数只计1。对于远离目标的方块，曼哈顿距离给出更高的估计。两者都是可采纳的，但曼哈顿距离修剪更多。",
    diagram: "",
    terms: ["a_star", "heuristic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 41,
    q: "What is the main drawback of A* search?",
    qChinese: "A*搜索的主要缺点是什么？",
    options: [
      "A) It is not optimal",
      "B) It is incomplete",
      "C) It cannot use heuristics",
      "D) It requires exponential memory in the worst case"
    ],
    optionsChinese: [
      "A) 它不是最优的",
      "B) 它是不完备的",
      "C) 它不能使用启发式",
      "D) 最坏情况下需要指数级内存"
    ],
    answer: 3,
    explanation: "A* stores all generated nodes in memory, leading to exponential space usage O(b^d) in the worst case. This makes A* impractical for very large search spaces. Variants like IDA* and SMA* address this by trading some time efficiency for reduced memory usage.",
    explanationChinese: "A*将所有生成的节点存储在内存中，导致最坏情况下指数级空间使用O(b^d)。这使A*对于非常大的搜索空间不实际。IDA*和SMA*等变体通过牺牲一些时间效率来减少内存使用。",
    diagram: "",
    terms: ["a_star"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 42,
    q: "IDA* (Iterative Deepening A*) addresses A*'s memory problem by:",
    qChinese: "IDA*（迭代加深A*）通过以下方式解决A*的内存问题：",
    options: [
      "A) Performing iterative deepening with f-cost limits instead of depth limits",
      "B) Using BFS instead",
      "C) Removing the heuristic",
      "D) Only storing goal nodes"
    ],
    optionsChinese: [
      "A) 使用f-代价限制而非深度限制进行迭代加深",
      "B) 改用BFS",
      "C) 移除启发式",
      "D) 只存储目标节点"
    ],
    answer: 0,
    explanation: "IDA* performs depth-first searches with increasing f-cost thresholds instead of depth limits. Each iteration explores all nodes with f(n) <= threshold, then increases the threshold to the minimum f-value that exceeded it. This uses O(bd) memory while maintaining A*'s optimality.",
    explanationChinese: "IDA*使用递增的f-代价阈值而非深度限制进行深度优先搜索。每次迭代探索所有f(n) <= 阈值的节点，然后将阈值增加到超过它的最小f值。这使用O(bd)内存同时保持A*的最优性。",
    diagram: "",
    terms: ["a_star", "heuristic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 43,
    q: "A heuristic derived from a relaxed problem is guaranteed to be:",
    qChinese: "从放松问题导出的启发式保证是：",
    options: [
      "A) Inadmissible",
      "B) Exact",
      "C) Inconsistent",
      "D) Admissible"
    ],
    optionsChinese: [
      "A) 不可采纳的",
      "B) 精确的",
      "C) 不一致的",
      "D) 可采纳的"
    ],
    answer: 3,
    explanation: "A relaxed problem removes some constraints from the original, making it easier to solve. The optimal solution to a relaxed problem is always a lower bound on the original problem's cost, so the heuristic derived from it never overestimates and is therefore admissible.",
    explanationChinese: "放松问题移除了原始问题的一些约束，使其更容易求解。放松问题的最优解始终是原始问题代价的下界，因此从中导出的启发式永远不会高估，因此是可采纳的。",
    diagram: "",
    terms: ["heuristic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 44,
    q: "In A* graph search, consistency of the heuristic ensures that:",
    qChinese: "在A*图搜索中，启发式的一致性确保了：",
    options: [
      "A) The search uses less memory",
      "B) The heuristic is always zero",
      "C) The first time a node is expanded, it is via an optimal path",
      "D) All nodes are expanded exactly once"
    ],
    optionsChinese: [
      "A) 搜索使用更少内存",
      "B) 启发式总是零",
      "C) 节点第一次被扩展时是通过最优路径",
      "D) 所有节点恰好被扩展一次"
    ],
    answer: 2,
    explanation: "With a consistent heuristic, f-values along any path are non-decreasing. This means when a node is first selected for expansion from the priority queue, it has already been reached via an optimal path. No reopening of nodes is needed, ensuring A* graph search is optimal.",
    explanationChinese: "使用一致的启发式，沿任何路径的f值是不递减的。这意味着当节点第一次从优先队列中被选择扩展时，它已经通过最优路径到达。不需要重新打开节点，确保A*图搜索是最优的。",
    diagram: "",
    terms: ["a_star", "heuristic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 45,
    q: "The straight-line distance heuristic for route planning is admissible because:",
    qChinese: "路径规划中的直线距离启发式是可采纳的，因为：",
    options: [
      "A) Roads are always straight",
      "B) The straight-line distance is always <= the actual road distance",
      "C) It overestimates the distance",
      "D) It ignores obstacles"
    ],
    optionsChinese: [
      "A) 道路总是直的",
      "B) 直线距离总是<=实际道路距离",
      "C) 它高估距离",
      "D) 它忽略障碍物"
    ],
    answer: 1,
    explanation: "The straight-line (Euclidean) distance between two points is always less than or equal to any path connecting them through a road network. Since the shortest possible distance is a straight line, this heuristic never overestimates, satisfying the admissibility requirement for A*.",
    explanationChinese: "两点之间的直线（欧几里得）距离总是小于或等于通过道路网络连接它们的任何路径。由于最短可能距离是直线，这个启发式永远不会高估，满足A*的可采纳性要求。",
    diagram: "",
    terms: ["a_star", "heuristic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 46,
    q: "What is a pattern database heuristic?",
    qChinese: "什么是模式数据库启发式？",
    options: [
      "A) A precomputed table of exact costs for subproblems",
      "B) A random number generator",
      "C) A neural network",
      "D) A depth limit"
    ],
    optionsChinese: [
      "A) 子问题精确代价的预计算表",
      "B) 随机数生成器",
      "C) 神经网络",
      "D) 深度限制"
    ],
    answer: 0,
    explanation: "Pattern database heuristics precompute and store the exact solution costs for simplified subproblems. For example, in the 15-puzzle, one might precompute costs for placing only a subset of tiles. These stored values provide admissible heuristic estimates during actual search.",
    explanationChinese: "模式数据库启发式预计算并存储简化子问题的精确解代价。例如，在15数码问题中，可以预计算仅放置一部分方块的代价。这些存储的值在实际搜索期间提供可采纳的启发式估计。",
    diagram: "",
    terms: ["heuristic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 47,
    q: "If a heuristic is consistent, is it necessarily admissible?",
    qChinese: "如果一个启发式是一致的，它是否一定是可采纳的？",
    options: [
      "A) No, they are unrelated properties",
      "B) Yes, consistency implies admissibility",
      "C) Only for tree search",
      "D) Only when h(n) = 0"
    ],
    optionsChinese: [
      "A) 不是，它们是不相关的性质",
      "B) 是的，一致性蕴含可采纳性",
      "C) 仅对树搜索",
      "D) 仅当h(n) = 0时"
    ],
    answer: 1,
    explanation: "Consistency implies admissibility by induction. If h(n) <= c(n,n') + h(n') for all successors, then following any path from n to the goal gives h(n) <= sum of costs = h*(n). However, admissibility does not imply consistency; there exist admissible but inconsistent heuristics.",
    explanationChinese: "一致性通过归纳蕴含可采纳性。如果对所有后继有h(n) <= c(n,n') + h(n')，则沿从n到目标的任何路径有h(n) <= 代价之和 = h*(n)。然而，可采纳性不蕴含一致性；存在可采纳但不一致的启发式。",
    diagram: "",
    terms: ["a_star", "heuristic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 48,
    q: "Weighted A* uses f(n) = g(n) + w*h(n) with w > 1. What is the trade-off?",
    qChinese: "加权A*使用f(n) = g(n) + w*h(n)，其中w > 1。权衡是什么？",
    options: [
      "A) It guarantees optimality with less memory",
      "B) It uses no heuristic",
      "C) It finds solutions faster but may be suboptimal by a factor of w",
      "D) It becomes DFS"
    ],
    optionsChinese: [
      "A) 它以更少内存保证最优性",
      "B) 它不使用启发式",
      "C) 它更快找到解但可能次优至w倍",
      "D) 它变成DFS"
    ],
    answer: 2,
    explanation: "Weighted A* inflates the heuristic by factor w, making the search more greedy and finding solutions faster. The cost of the found solution is at most w times the optimal cost. This bounded suboptimality trade-off is useful when optimal solutions are too expensive to compute.",
    explanationChinese: "加权A*将启发式膨胀w倍，使搜索更贪婪并更快找到解。找到的解的代价最多是最优代价的w倍。这种有界次优性权衡在最优解计算代价太高时很有用。",
    diagram: "",
    terms: ["a_star", "heuristic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 49,
    q: "What happens to A*'s behavior as the heuristic h(n) approaches h*(n) (the true cost)?",
    qChinese: "当启发式h(n)接近h*(n)（真实代价）时，A*的行为会怎样？",
    options: [
      "A) It expands fewer nodes and approaches direct path to goal",
      "B) It becomes slower",
      "C) It becomes incomplete",
      "D) It degrades to BFS"
    ],
    optionsChinese: [
      "A) 它扩展更少的节点并接近到目标的直接路径",
      "B) 它变得更慢",
      "C) 它变得不完备",
      "D) 它退化为BFS"
    ],
    answer: 0,
    explanation: "As h(n) approaches the true cost h*(n), A* becomes increasingly efficient. A perfect heuristic would cause A* to expand only nodes on the optimal path. The closer h is to h*, the fewer unnecessary nodes are expanded, dramatically reducing search time and space.",
    explanationChinese: "随着h(n)接近真实代价h*(n)，A*变得越来越高效。完美的启发式会使A*只扩展最优路径上的节点。h越接近h*，扩展的不必要节点就越少，大大减少搜索时间和空间。",
    diagram: "",
    terms: ["a_star", "heuristic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 50,
    q: "Which technique creates admissible heuristics by solving a simpler version of the problem?",
    qChinese: "哪种技术通过求解问题的简化版本来创建可采纳启发式？",
    options: [
      "A) Constraint tightening",
      "B) Problem relaxation",
      "C) Variable elimination",
      "D) Forward chaining"
    ],
    optionsChinese: [
      "A) 约束收紧",
      "B) 问题放松",
      "C) 变量消除",
      "D) 前向链接"
    ],
    answer: 1,
    explanation: "Problem relaxation removes constraints from the original problem to create an easier problem. The optimal cost of the relaxed problem is a lower bound on the original cost, making it an admissible heuristic. Manhattan distance for the 8-puzzle is derived by relaxing tile-blocking constraints.",
    explanationChinese: "问题放松从原始问题中移除约束以创建一个更简单的问题。放松问题的最优代价是原始代价的下界，使其成为可采纳的启发式。8数码问题的曼哈顿距离通过放松方块阻挡约束导出。",
    diagram: "",
    terms: ["heuristic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 51,
    q: "In A*, a node n is surely expanded if:",
    qChinese: "在A*中，节点n一定会被扩展，如果：",
    options: [
      "A) h(n) > 0",
      "B) n is a leaf node",
      "C) g(n) = 0",
      "D) f(n) < C* where C* is the optimal solution cost"
    ],
    optionsChinese: [
      "A) h(n) > 0",
      "B) n是叶节点",
      "C) g(n) = 0",
      "D) f(n) < C*，其中C*是最优解代价"
    ],
    answer: 3,
    explanation: "A* must expand all nodes n with f(n) < C* (optimal cost) to guarantee optimality. These nodes could potentially lie on a path cheaper than C*, so they cannot be pruned. Nodes with f(n) = C* may or may not be expanded depending on tiebreaking.",
    explanationChinese: "A*必须扩展所有f(n) < C*（最优代价）的节点n以保证最优性。这些节点可能位于比C*更便宜的路径上，因此不能被修剪。f(n) = C*的节点是否被扩展取决于打破平局的方式。",
    diagram: "",
    terms: ["a_star"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 52,
    q: "Which is NOT a valid way to create an admissible heuristic?",
    qChinese: "以下哪种不是创建可采纳启发式的有效方法？",
    options: [
      "A) Multiplying the true cost by 2",
      "B) Taking the max of multiple admissible heuristics",
      "C) Problem relaxation",
      "D) Using a pattern database"
    ],
    optionsChinese: [
      "A) 将真实代价乘以2",
      "B) 取多个可采纳启发式的最大值",
      "C) 问题放松",
      "D) 使用模式数据库"
    ],
    answer: 0,
    explanation: "Multiplying the true cost by 2 would overestimate, violating admissibility. Problem relaxation gives lower bounds, taking the max of admissible heuristics preserves admissibility (since all are <= true cost), and pattern databases store exact subproblem costs which are also lower bounds.",
    explanationChinese: "将真实代价乘以2会高估，违反可采纳性。问题放松给出下界，取可采纳启发式的最大值保持可采纳性（因为所有都<=真实代价），模式数据库存储精确的子问题代价，也是下界。",
    diagram: "",
    terms: ["heuristic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 53,
    q: "SMA* (Simplified Memory-Bounded A*) handles memory limitations by:",
    qChinese: "SMA*（简化的内存受限A*）通过以下方式处理内存限制：",
    options: [
      "A) Never storing any nodes",
      "B) Using only h(n)",
      "C) Switching to DFS",
      "D) Dropping the worst leaf node when memory is full and backing up its f-value"
    ],
    optionsChinese: [
      "A) 从不存储任何节点",
      "B) 仅使用h(n)",
      "C) 切换到DFS",
      "D) 当内存满时丢弃最差叶节点并备份其f值"
    ],
    answer: 3,
    explanation: "SMA* operates like A* but drops the worst leaf node (highest f-value) when memory is full. It backs up the forgotten node's f-value to its parent so the subtree can be regenerated if needed. SMA* is optimal if enough memory exists to store the shallowest optimal path.",
    explanationChinese: "SMA*像A*一样运行，但当内存满时丢弃最差叶节点（最高f值）。它将被遗忘节点的f值备份到其父节点，以便在需要时重新生成子树。如果有足够内存存储最浅的最优路径，SMA*是最优的。",
    diagram: "",
    terms: ["a_star"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 54,
    q: "How can multiple admissible heuristics be combined to create a better heuristic?",
    qChinese: "如何组合多个可采纳启发式以创建更好的启发式？",
    options: [
      "A) Take their maximum",
      "B) Take their average",
      "C) Take their sum",
      "D) Take their minimum"
    ],
    optionsChinese: [
      "A) 取它们的最大值",
      "B) 取它们的平均值",
      "C) 取它们的和",
      "D) 取它们的最小值"
    ],
    answer: 0,
    explanation: "Taking the maximum of multiple admissible heuristics produces a new heuristic that is still admissible (since max of values all <= h*(n) is still <= h*(n)) but more informative. The resulting heuristic dominates each individual one, leading to more efficient A* search.",
    explanationChinese: "取多个可采纳启发式的最大值产生一个仍然可采纳的新启发式（因为所有<=h*(n)的值的最大值仍然<=h*(n)），但更有信息量。结果启发式支配每个单独的启发式，导致更高效的A*搜索。",
    diagram: "",
    terms: ["heuristic", "a_star"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 55,
    q: "A* with an inadmissible heuristic:",
    qChinese: "使用不可采纳启发式的A*：",
    options: [
      "A) Will always find the optimal solution",
      "B) Will never find any solution",
      "C) Becomes DFS",
      "D) May find a suboptimal solution"
    ],
    optionsChinese: [
      "A) 将总是找到最优解",
      "B) 将永远找不到任何解",
      "C) 变成DFS",
      "D) 可能找到次优解"
    ],
    answer: 3,
    explanation: "An inadmissible heuristic overestimates the true cost for some nodes. This can cause A* to avoid expanding nodes on the optimal path, leading to a suboptimal solution. The search still finds a solution but loses the optimality guarantee that admissibility provides.",
    explanationChinese: "不可采纳的启发式对某些节点高估真实代价。这可能导致A*避免扩展最优路径上的节点，从而得到次优解。搜索仍然找到解，但失去了可采纳性提供的最优性保证。",
    diagram: "",
    terms: ["a_star", "heuristic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 56,
    q: "Greedy Best-First Search is complete in finite spaces with:",
    qChinese: "贪婪最佳优先搜索在有限空间中是完备的，需要：",
    options: [
      "A) No additional conditions",
      "B) A visited set to prevent repeated states",
      "C) An admissible heuristic",
      "D) A consistent heuristic"
    ],
    optionsChinese: [
      "A) 无需额外条件",
      "B) 防止重复状态的已访问集合",
      "C) 可采纳的启发式",
      "D) 一致的启发式"
    ],
    answer: 1,
    explanation: "Without a visited set, Greedy Best-First Search can loop between states in finite spaces. Adding a visited set (graph search) prevents revisiting states, making the search complete in finite spaces. However, it still does not guarantee optimality regardless of the heuristic used.",
    explanationChinese: "没有已访问集合，贪婪最佳优先搜索可能在有限空间中在状态之间循环。添加已访问集合（图搜索）防止重新访问状态，使搜索在有限空间中完备。但无论使用什么启发式，它仍然不保证最优性。",
    diagram: "",
    terms: ["heuristic", "search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 57,
    q: "The effective branching factor b* of A* is defined as:",
    qChinese: "A*的有效分支因子b*定义为：",
    options: [
      "A) The total number of nodes expanded",
      "B) The maximum h-value",
      "C) The depth of the solution",
      "D) The branching factor of a uniform tree with the same number of nodes and depth"
    ],
    optionsChinese: [
      "A) 扩展的节点总数",
      "B) 最大h值",
      "C) 解的深度",
      "D) 与相同节点数和深度的均匀树的分支因子"
    ],
    answer: 3,
    explanation: "The effective branching factor b* satisfies N+1 = 1 + b* + b*^2 + ... + b*^d, where N is nodes expanded and d is solution depth. A well-designed heuristic yields b* close to 1, indicating A* follows nearly a direct path. It measures the heuristic's quality empirically.",
    explanationChinese: "有效分支因子b*满足N+1 = 1 + b* + b*^2 + ... + b*^d，其中N是扩展的节点数，d是解的深度。设计良好的启发式产生接近1的b*，表示A*几乎沿直接路径前进。它经验性地衡量启发式的质量。",
    diagram: "",
    terms: ["a_star", "heuristic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 58,
    q: "In navigation, which heuristic is commonly used with A* for grid-based pathfinding?",
    qChinese: "在导航中，A*常用哪种启发式进行基于网格的路径搜索？",
    options: [
      "A) Manhattan distance or Euclidean distance",
      "B) Hamming distance",
      "C) Cosine similarity",
      "D) Edit distance"
    ],
    optionsChinese: [
      "A) 曼哈顿距离或欧几里得距离",
      "B) 汉明距离",
      "C) 余弦相似度",
      "D) 编辑距离"
    ],
    answer: 0,
    explanation: "For grid-based pathfinding, Manhattan distance (sum of horizontal and vertical displacements) is used for 4-directional movement, and Euclidean distance for 8-directional or any-angle movement. Both are admissible and consistent, making them ideal for A* on grids.",
    explanationChinese: "对于基于网格的路径搜索，曼哈顿距离（水平和垂直位移之和）用于4方向移动，欧几里得距离用于8方向或任意角度移动。两者都是可采纳且一致的，使它们成为网格上A*的理想选择。",
    diagram: "",
    terms: ["a_star", "heuristic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 59,
    q: "What is the relationship between A*, UCS, and Greedy Best-First Search?",
    qChinese: "A*、UCS和贪婪最佳优先搜索之间的关系是什么？",
    options: [
      "A) A* generalizes both: h=0 gives UCS, g=0 gives Greedy",
      "B) They are identical algorithms",
      "C) UCS is always faster",
      "D) Greedy is always optimal"
    ],
    optionsChinese: [
      "A) A*推广了两者：h=0得UCS，g=0得贪婪搜索",
      "B) 它们是相同的算法",
      "C) UCS总是更快",
      "D) 贪婪搜索总是最优的"
    ],
    answer: 0,
    explanation: "A* with f(n) = g(n) + h(n) generalizes both algorithms. Setting h(n) = 0 reduces A* to UCS (expanding by path cost only). Setting g(n) = 0 reduces it to Greedy Best-First Search (expanding by heuristic only). A* balances both components for optimal informed search.",
    explanationChinese: "使用f(n) = g(n) + h(n)的A*推广了这两种算法。设h(n) = 0将A*简化为UCS（仅按路径代价扩展）。设g(n) = 0将其简化为贪婪最佳优先搜索（仅按启发式扩展）。A*平衡两个组件以实现最优的知情搜索。",
    diagram: "",
    terms: ["a_star", "heuristic", "search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 60,
    q: "A* graph search with a consistent heuristic never needs to:",
    qChinese: "具有一致启发式的A*图搜索永远不需要：",
    options: [
      "A) Expand any nodes",
      "B) Use a priority queue",
      "C) Reopen a previously expanded node",
      "D) Compute g(n)"
    ],
    optionsChinese: [
      "A) 扩展任何节点",
      "B) 使用优先队列",
      "C) 重新打开先前扩展的节点",
      "D) 计算g(n)"
    ],
    answer: 2,
    explanation: "With a consistent heuristic, f-values are non-decreasing along any path. When a node is first expanded, it has been reached optimally. Therefore, no expanded node will ever need to be reopened with a lower g-value, simplifying implementation and improving efficiency.",
    explanationChinese: "使用一致的启发式，f值沿任何路径不递减。当节点第一次被扩展时，它已经被最优地到达。因此，没有扩展的节点需要以更低的g值重新打开，简化了实现并提高了效率。",
    diagram: "",
    terms: ["a_star", "heuristic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 61,
    q: "In the minimax algorithm, the MAX player tries to:",
    qChinese: "在极小极大算法中，MAX玩家试图：",
    options: [
      "A) Maximize the utility value",
      "B) Minimize the utility value",
      "C) Reach any terminal state",
      "D) Expand the fewest nodes"
    ],
    optionsChinese: [
      "A) 最大化效用值",
      "B) 最小化效用值",
      "C) 到达任何终端状态",
      "D) 扩展最少的节点"
    ],
    answer: 0,
    explanation: "In minimax, MAX picks the action with the highest utility, assuming the opponent (MIN) plays optimally by choosing the lowest utility. This alternation models rational adversarial play in zero-sum games. The minimax value at the root represents the best guaranteed outcome for MAX.",
    explanationChinese: "在极小极大中，MAX选择效用最高的动作，假设对手（MIN）通过选择最低效用来最优地博弈。这种交替模拟了零和博弈中的理性对抗博弈。根节点的极小极大值代表MAX的最佳保证结果。",
    diagram: "",
    terms: ["minimax", "game_tree", "utility_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 62,
    q: "The time complexity of the minimax algorithm with branching factor b and depth m is:",
    qChinese: "分支因子为b、深度为m的极小极大算法的时间复杂度是：",
    options: [
      "A) O(b+m)",
      "B) O(b*m)",
      "C) O(m^b)",
      "D) O(b^m)"
    ],
    optionsChinese: [
      "A) O(b+m)",
      "B) O(b*m)",
      "C) O(m^b)",
      "D) O(b^m)"
    ],
    answer: 3,
    explanation: "Minimax performs a complete depth-first exploration of the game tree. With branching factor b and maximum depth m, the total number of terminal nodes is b^m. Every terminal node must be evaluated to determine the minimax value, giving O(b^m) time complexity.",
    explanationChinese: "极小极大对博弈树执行完全的深度优先探索。分支因子为b，最大深度为m时，终端节点总数为b^m。每个终端节点必须被评估以确定极小极大值，给出O(b^m)的时间复杂度。",
    diagram: "",
    terms: ["minimax", "game_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 63,
    q: "Alpha-beta pruning improves minimax by:",
    qChinese: "Alpha-beta剪枝通过以下方式改进极小极大：",
    options: [
      "A) Changing the result of the search",
      "B) Searching only one level deep",
      "C) Using a heuristic instead of exact values",
      "D) Pruning branches that cannot affect the final decision"
    ],
    optionsChinese: [
      "A) 改变搜索结果",
      "B) 只搜索一层深",
      "C) 使用启发式代替精确值",
      "D) 剪掉不影响最终决策的分支"
    ],
    answer: 3,
    explanation: "Alpha-beta pruning eliminates subtrees that provably cannot influence the minimax value at the root. Alpha tracks MAX's best guaranteed value; beta tracks MIN's best guaranteed value. When alpha >= beta, remaining children are pruned. The final result is identical to full minimax.",
    explanationChinese: "Alpha-beta剪枝消除了证明不能影响根节点极小极大值的子树。Alpha追踪MAX的最佳保证值；beta追踪MIN的最佳保证值。当alpha >= beta时，剩余子节点被剪掉。最终结果与完整极小极大相同。",
    diagram: "",
    terms: ["alpha_beta_pruning", "minimax", "game_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 64,
    q: "In the best case, alpha-beta pruning reduces minimax complexity to:",
    qChinese: "在最佳情况下，alpha-beta剪枝将极小极大复杂度降低到：",
    options: [
      "A) O(b^m)",
      "B) O(b^(m/2))",
      "C) O(m*b)",
      "D) O(log(b^m))"
    ],
    optionsChinese: [
      "A) O(b^m)",
      "B) O(b^(m/2))",
      "C) O(m*b)",
      "D) O(log(b^m))"
    ],
    answer: 1,
    explanation: "With perfect move ordering (best moves examined first), alpha-beta pruning reduces the effective branching factor from b to sqrt(b). This means the time complexity drops from O(b^m) to O(b^(m/2)), effectively doubling the searchable depth for the same computation time.",
    explanationChinese: "在完美的移动排序下（最佳移动首先被检查），alpha-beta剪枝将有效分支因子从b降低到sqrt(b)。这意味着时间复杂度从O(b^m)降至O(b^(m/2))，有效地使相同计算时间下的可搜索深度翻倍。",
    diagram: "",
    terms: ["alpha_beta_pruning", "minimax"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 65,
    q: "In alpha-beta pruning, a beta cutoff occurs at a MAX node when:",
    qChinese: "在alpha-beta剪枝中，MAX节点处的beta剪枝发生在：",
    options: [
      "A) Alpha equals beta",
      "B) The node's value is less than alpha",
      "C) The node's value exceeds beta",
      "D) All children are evaluated"
    ],
    optionsChinese: [
      "A) Alpha等于beta",
      "B) 节点的值小于alpha",
      "C) 节点的值超过beta",
      "D) 所有子节点都被评估"
    ],
    answer: 2,
    explanation: "At a MAX node, if the current value meets or exceeds the beta value (MIN's best option above), MIN will never choose this path. The remaining children can be pruned because MAX will only increase the value further, and MIN already has a better alternative elsewhere.",
    explanationChinese: "在MAX节点，如果当前值达到或超过beta值（上方MIN的最佳选择），MIN永远不会选择这条路径。剩余子节点可以被剪掉，因为MAX只会进一步增加值，而MIN在其他地方已有更好的替代方案。",
    diagram: "",
    terms: ["alpha_beta_pruning", "minimax", "game_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 66,
    q: "Expectimax differs from minimax by replacing MIN nodes with:",
    qChinese: "Expectimax与minimax的区别在于用什么替换MIN节点：",
    options: [
      "A) Chance nodes that compute expected values",
      "B) MAX nodes",
      "C) Random nodes that pick uniformly",
      "D) Pruning nodes"
    ],
    optionsChinese: [
      "A) 计算期望值的机会节点",
      "B) MAX节点",
      "C) 均匀选择的随机节点",
      "D) 剪枝节点"
    ],
    answer: 0,
    explanation: "Expectimax replaces MIN's adversarial choice with chance nodes that compute the weighted average (expected value) of children based on probability distributions. This models stochastic opponents or environments where outcomes are uncertain rather than worst-case adversarial.",
    explanationChinese: "Expectimax用根据概率分布计算子节点加权平均（期望值）的机会节点替换MIN的对抗选择。这模拟了随机对手或结果不确定的环境，而非最坏情况的对抗。",
    diagram: "",
    terms: ["minimax", "game_tree", "utility_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 67,
    q: "Why can't alpha-beta pruning be applied to expectimax trees?",
    qChinese: "为什么alpha-beta剪枝不能应用于expectimax树？",
    options: [
      "A) Expectimax is too fast",
      "B) Expectimax has no terminal nodes",
      "C) Alpha-beta only works with DFS",
      "D) Chance node values depend on all children, so none can be pruned"
    ],
    optionsChinese: [
      "A) Expectimax太快了",
      "B) Expectimax没有终端节点",
      "C) Alpha-beta只能与DFS配合",
      "D) 机会节点的值依赖于所有子节点，因此不能剪掉任何一个"
    ],
    answer: 3,
    explanation: "In expectimax, chance nodes compute a weighted average of all children's values. Unlike minimax where pruning is safe because the value can only go up (MAX) or down (MIN), every child contributes to the average at chance nodes. Skipping any child would give an incorrect expected value.",
    explanationChinese: "在expectimax中，机会节点计算所有子节点值的加权平均。不像极小极大中剪枝是安全的（因为值只能上升或下降），每个子节点都对机会节点的平均值有贡献。跳过任何子节点会给出不正确的期望值。",
    diagram: "",
    terms: ["alpha_beta_pruning", "game_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 68,
    q: "An evaluation function in game playing is used to:",
    qChinese: "博弈中的评估函数用于：",
    options: [
      "A) Estimate the utility of non-terminal states when search is cut off",
      "B) Replace the goal test",
      "C) Compute exact minimax values",
      "D) Determine legal moves"
    ],
    optionsChinese: [
      "A) 在搜索被截断时估计非终端状态的效用",
      "B) 替换目标测试",
      "C) 计算精确的极小极大值",
      "D) 确定合法移动"
    ],
    answer: 0,
    explanation: "When it is impractical to search to terminal states, an evaluation function estimates the desirability of non-terminal positions. It returns high values for states favorable to MAX and low values for states favorable to MIN, allowing depth-limited minimax to make reasonable decisions.",
    explanationChinese: "当搜索到终端状态不实际时，评估函数估计非终端位置的期望程度。它为对MAX有利的状态返回高值，为对MIN有利的状态返回低值，允许深度受限的极小极大做出合理决策。",
    diagram: "",
    terms: ["minimax", "utility_function", "game_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 69,
    q: "In a zero-sum game, the utilities of the two players satisfy:",
    qChinese: "在零和博弈中，两个玩家的效用满足：",
    options: [
      "A) u1 + u2 > 0",
      "B) u1 = u2",
      "C) u1 + u2 = 0",
      "D) u1 * u2 = 1"
    ],
    optionsChinese: [
      "A) u1 + u2 > 0",
      "B) u1 = u2",
      "C) u1 + u2 = 0",
      "D) u1 * u2 = 1"
    ],
    answer: 2,
    explanation: "In a zero-sum game, one player's gain equals the other's loss, so the utilities always sum to zero (or a constant). This makes a single evaluation function sufficient: what is good for MAX is equally bad for MIN. Chess, checkers, and tic-tac-toe are classic zero-sum games.",
    explanationChinese: "在零和博弈中，一个玩家的收益等于另一个的损失，所以效用总是和为零（或常数）。这使得一个评估函数就足够了：对MAX好的对MIN同样坏。国际象棋、跳棋和井字棋是经典的零和博弈。",
    diagram: "",
    terms: ["minimax", "utility_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 70,
    q: "Move ordering in alpha-beta pruning is important because:",
    qChinese: "alpha-beta剪枝中的移动排序很重要，因为：",
    options: [
      "A) It changes the minimax value",
      "B) It is required for correctness",
      "C) Better ordering leads to more pruning and faster search",
      "D) It reduces the game tree depth"
    ],
    optionsChinese: [
      "A) 它改变极小极大值",
      "B) 它是正确性所必需的",
      "C) 更好的排序导致更多剪枝和更快搜索",
      "D) 它减少博弈树深度"
    ],
    answer: 2,
    explanation: "Good move ordering examines the most promising moves first, triggering more cutoffs. With perfect ordering, alpha-beta achieves O(b^(m/2)) complexity. Poor ordering may result in no pruning at all, O(b^m). Move ordering does not affect correctness—the result is always the same minimax value.",
    explanationChinese: "好的移动排序首先检查最有前途的移动，触发更多剪枝。在完美排序下，alpha-beta达到O(b^(m/2))复杂度。差的排序可能完全没有剪枝，O(b^m)。移动排序不影响正确性——结果总是相同的极小极大值。",
    diagram: "",
    terms: ["alpha_beta_pruning", "minimax"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 71,
    q: "The minimax value of a terminal node is:",
    qChinese: "终端节点的极小极大值是：",
    options: [
      "A) Always zero",
      "B) The depth of the node",
      "C) The utility value defined by the game",
      "D) The number of children"
    ],
    optionsChinese: [
      "A) 总是零",
      "B) 节点的深度",
      "C) 由博弈定义的效用值",
      "D) 子节点的数量"
    ],
    answer: 2,
    explanation: "Terminal nodes (game-ending states) have their minimax value equal to the game's utility function applied to that state. For example, in tic-tac-toe: +1 for MAX win, -1 for MIN win, 0 for draw. These leaf values propagate up through the tree via minimax backup.",
    explanationChinese: "终端节点（博弈结束状态）的极小极大值等于应用于该状态的博弈效用函数。例如，在井字棋中：MAX赢+1，MIN赢-1，平局0。这些叶值通过极小极大备份在树中向上传播。",
    diagram: "",
    terms: ["minimax", "utility_function", "game_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 72,
    q: "Quiescence search in game playing refers to:",
    qChinese: "博弈中的静态搜索指的是：",
    options: [
      "A) Searching quietly without output",
      "B) Continuing search at non-quiet positions where evaluation is unreliable",
      "C) Stopping search immediately",
      "D) Only searching leaf nodes"
    ],
    optionsChinese: [
      "A) 不输出地安静搜索",
      "B) 在评估不可靠的非安静位置继续搜索",
      "C) 立即停止搜索",
      "D) 只搜索叶节点"
    ],
    answer: 1,
    explanation: "Quiescence search extends the search at positions where the evaluation function would be unreliable (such as mid-capture in chess). It continues until reaching a 'quiet' position where the evaluation is more stable, avoiding the horizon effect where a crucial event is just beyond the search depth.",
    explanationChinese: "静态搜索在评估函数不可靠的位置（如国际象棋中的吃子过程中）扩展搜索。它持续到到达评估更稳定的'安静'位置，避免了水平线效应，即关键事件刚好超出搜索深度。",
    diagram: "",
    terms: ["minimax", "game_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 73,
    q: "The horizon effect in game tree search occurs when:",
    qChinese: "博弈树搜索中的水平线效应发生在：",
    options: [
      "A) The game has too many moves",
      "B) An inevitable event is pushed beyond the search depth by delaying tactics",
      "C) The branching factor is too high",
      "D) The evaluation function is perfect"
    ],
    optionsChinese: [
      "A) 博弈有太多移动",
      "B) 不可避免的事件被拖延战术推到搜索深度之外",
      "C) 分支因子太高",
      "D) 评估函数是完美的"
    ],
    answer: 1,
    explanation: "The horizon effect occurs when a fixed-depth search cannot see an unavoidable loss or gain because it lies just beyond the search depth. The agent may make futile moves to delay the event past its horizon. Quiescence search and singular extensions help mitigate this problem.",
    explanationChinese: "水平线效应发生在固定深度搜索无法看到不可避免的损失或收益时，因为它刚好位于搜索深度之外。智能体可能做出无用的移动来将事件推迟到其视野之外。静态搜索和奇异扩展有助于缓解这个问题。",
    diagram: "",
    terms: ["minimax", "game_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 74,
    q: "In expectimax, the value of a chance node is computed as:",
    qChinese: "在expectimax中，机会节点的值计算为：",
    options: [
      "A) max of children values",
      "B) min of children values",
      "C) weighted sum of children values based on probabilities",
      "D) product of children values"
    ],
    optionsChinese: [
      "A) 子节点值的最大值",
      "B) 子节点值的最小值",
      "C) 基于概率的子节点值的加权和",
      "D) 子节点值的乘积"
    ],
    answer: 2,
    explanation: "At a chance node, each child outcome has an associated probability. The node's value is the expected value: the sum of each child's value multiplied by its probability. This models uncertain outcomes like dice rolls or unpredictable opponent behavior in stochastic games.",
    explanationChinese: "在机会节点，每个子节点结果有一个关联的概率。节点的值是期望值：每个子节点值乘以其概率的和。这模拟了随机博弈中的不确定结果，如掷骰子或不可预测的对手行为。",
    diagram: "",
    terms: ["minimax", "game_tree", "utility_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 75,
    q: "Iterative deepening is commonly used with minimax because:",
    qChinese: "迭代加深常与极小极大结合使用，因为：",
    options: [
      "A) It allows the algorithm to return the best move found so far if time runs out",
      "B) It guarantees finding checkmate",
      "C) It reduces the branching factor",
      "D) It eliminates the need for evaluation functions"
    ],
    optionsChinese: [
      "A) 如果时间用完，它允许算法返回迄今找到的最佳移动",
      "B) 它保证找到将杀",
      "C) 它减少分支因子",
      "D) 它消除了对评估函数的需要"
    ],
    answer: 0,
    explanation: "In timed game play, iterative deepening minimax searches to increasing depths. If time runs out, the best move from the deepest completed search is used. Each iteration also provides move ordering information for the next, improving alpha-beta pruning effectiveness.",
    explanationChinese: "在有时间限制的博弈中，迭代加深极小极大搜索到递增的深度。如果时间用完，使用最深完成搜索的最佳移动。每次迭代还为下一次提供移动排序信息，提高alpha-beta剪枝效果。",
    diagram: "",
    terms: ["minimax", "alpha_beta_pruning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 76,
    q: "A transposition table in game tree search stores:",
    qChinese: "博弈树搜索中的换位表存储：",
    options: [
      "A) The game rules",
      "B) Only terminal positions",
      "C) The player names",
      "D) Previously computed values for game positions to avoid recomputation"
    ],
    optionsChinese: [
      "A) 博弈规则",
      "B) 仅终端位置",
      "C) 玩家姓名",
      "D) 先前计算的博弈位置的值以避免重新计算"
    ],
    answer: 3,
    explanation: "A transposition table is a hash table that caches the values of previously evaluated positions. Since the same position can be reached by different move sequences (transpositions), this avoids redundant search. It significantly speeds up game tree search, especially with alpha-beta pruning.",
    explanationChinese: "换位表是一个哈希表，缓存先前评估位置的值。由于相同位置可以通过不同的移动序列到达（换位），这避免了冗余搜索。它显著加速博弈树搜索，特别是与alpha-beta剪枝结合。",
    diagram: "",
    terms: ["game_tree", "minimax"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 77,
    q: "In a game tree, a 'ply' refers to:",
    qChinese: "在博弈树中，一个'层'指的是：",
    options: [
      "A) A complete game",
      "B) Two moves by both players",
      "C) One move by one player (half a round)",
      "D) The final move"
    ],
    optionsChinese: [
      "A) 一个完整的博弈",
      "B) 两个玩家的两步",
      "C) 一个玩家的一步（半个回合）",
      "D) 最后一步"
    ],
    answer: 2,
    explanation: "A ply is a single move by one player, representing one level of the game tree. A 'full move' in chess consists of two plies (one by each player). Search depth is typically measured in plies because each ply represents a different player making a decision.",
    explanationChinese: "一层是一个玩家的单步移动，代表博弈树的一个层级。国际象棋中的一个'完整移动'由两层组成（每个玩家一步）。搜索深度通常以层为单位测量，因为每一层代表不同的玩家做决策。",
    diagram: "",
    terms: ["game_tree", "minimax"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 78,
    q: "Monte Carlo Tree Search (MCTS) evaluates positions by:",
    qChinese: "蒙特卡洛树搜索（MCTS）通过以下方式评估位置：",
    options: [
      "A) Using a static evaluation function",
      "B) Exhaustive minimax search",
      "C) Running random simulations (rollouts) to terminal states",
      "D) Pattern matching only"
    ],
    optionsChinese: [
      "A) 使用静态评估函数",
      "B) 穷举极小极大搜索",
      "C) 运行到终端状态的随机模拟（推演）",
      "D) 仅模式匹配"
    ],
    answer: 2,
    explanation: "MCTS estimates position values by simulating many random games (rollouts) from the current position to the end. The win rate from these simulations approximates the position's value. Combined with UCB1 for exploration-exploitation balance, MCTS has revolutionized game AI, notably in Go.",
    explanationChinese: "MCTS通过从当前位置到结束模拟许多随机博弈（推演）来估计位置值。这些模拟的胜率近似位置的价值。结合UCB1进行探索-利用平衡，MCTS已经革新了博弈AI，尤其在围棋中。",
    diagram: "",
    terms: ["game_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 79,
    q: "What is the purpose of the alpha value in alpha-beta pruning?",
    qChinese: "alpha-beta剪枝中alpha值的目的是什么？",
    options: [
      "A) Track MIN's best option on the path to root",
      "B) Store the evaluation function value",
      "C) Track MAX's best (highest) option on the path to root",
      "D) Count expanded nodes"
    ],
    optionsChinese: [
      "A) 追踪到根路径上MIN的最佳选择",
      "B) 存储评估函数值",
      "C) 追踪到根路径上MAX的最佳（最高）选择",
      "D) 计算扩展的节点数"
    ],
    answer: 2,
    explanation: "Alpha represents the best (maximum) value that MAX can guarantee along the path from the root to the current node. It acts as a lower bound on MAX's final choice. If a MIN node finds a value below alpha, MAX will never choose that path, enabling pruning.",
    explanationChinese: "Alpha代表从根到当前节点的路径上MAX能保证的最佳（最大）值。它作为MAX最终选择的下界。如果MIN节点找到低于alpha的值，MAX将永远不会选择该路径，从而实现剪枝。",
    diagram: "",
    terms: ["alpha_beta_pruning", "minimax"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 80,
    q: "When should expectimax be used instead of minimax?",
    qChinese: "什么时候应该使用expectimax而不是minimax？",
    options: [
      "A) When the opponent plays optimally",
      "B) When the game has no chance elements",
      "C) When there is randomness or the opponent is suboptimal",
      "D) When the game tree is small"
    ],
    optionsChinese: [
      "A) 当对手最优博弈时",
      "B) 当博弈没有机会元素时",
      "C) 当存在随机性或对手不是最优时",
      "D) 当博弈树很小时"
    ],
    answer: 2,
    explanation: "Expectimax should be used when the opponent does not play optimally or when the game involves chance elements (like dice). Minimax assumes worst-case adversarial play, which is overly pessimistic against random or weak opponents. Expectimax models the actual probability of opponent moves.",
    explanationChinese: "当对手不最优博弈或博弈涉及机会元素（如骰子）时应使用expectimax。极小极大假设最坏情况的对抗博弈，对于随机或弱对手来说过于悲观。Expectimax建模对手移动的实际概率。",
    diagram: "",
    terms: ["minimax", "game_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 81,
    q: "In chess programming, what is a 'killer move'?",
    qChinese: "在国际象棋编程中，什么是'杀手移动'？",
    options: [
      "A) A move that caused a cutoff at the same depth in a sibling node",
      "B) A move that wins the game",
      "C) A move that captures the king",
      "D) The first legal move"
    ],
    optionsChinese: [
      "A) 在兄弟节点相同深度导致剪枝的移动",
      "B) 赢得博弈的移动",
      "C) 吃掉国王的移动",
      "D) 第一个合法移动"
    ],
    answer: 0,
    explanation: "Killer move heuristic remembers moves that caused beta cutoffs at the same depth in recently searched sibling nodes. These moves are tried early in the move ordering at the same depth, as they are likely to cause cutoffs again. This improves alpha-beta pruning efficiency significantly.",
    explanationChinese: "杀手移动启发式记住在最近搜索的兄弟节点中相同深度导致beta剪枝的移动。这些移动在相同深度的移动排序中被提前尝试，因为它们可能再次导致剪枝。这显著提高了alpha-beta剪枝效率。",
    diagram: "",
    terms: ["alpha_beta_pruning", "game_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 82,
    q: "A utility function in game theory assigns:",
    qChinese: "博弈论中的效用函数分配：",
    options: [
      "A) Numeric values representing player preferences for outcomes",
      "B) Colors to nodes",
      "C) Moves to players",
      "D) Probabilities to states"
    ],
    optionsChinese: [
      "A) 代表玩家对结果偏好的数值",
      "B) 颜色给节点",
      "C) 移动给玩家",
      "D) 概率给状态"
    ],
    answer: 0,
    explanation: "A utility function maps terminal game states to real numbers reflecting how desirable each outcome is for a player. In zero-sum games, MAX aims to maximize and MIN to minimize this value. The utility function encodes the game's payoff structure and drives strategic decision-making.",
    explanationChinese: "效用函数将终端博弈状态映射到反映每个结果对玩家有多期望的实数。在零和博弈中，MAX旨在最大化而MIN旨在最小化此值。效用函数编码博弈的支付结构并驱动战略决策。",
    diagram: "",
    terms: ["utility_function", "minimax"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 83,
    q: "In minimax with alpha-beta pruning, alpha is initialized to:",
    qChinese: "在带alpha-beta剪枝的极小极大中，alpha被初始化为：",
    options: [
      "A) 0",
      "B) +infinity",
      "C) 1",
      "D) -infinity"
    ],
    optionsChinese: [
      "A) 0",
      "B) +无穷",
      "C) 1",
      "D) -无穷"
    ],
    answer: 3,
    explanation: "Alpha starts at -infinity because MAX has not yet found any guaranteed value. As search progresses and MAX discovers better options, alpha increases. Similarly, beta starts at +infinity because MIN has not yet found an upper bound. These initial values ensure no premature pruning.",
    explanationChinese: "Alpha从-无穷开始，因为MAX还没有找到任何保证值。随着搜索进展和MAX发现更好的选项，alpha增加。类似地，beta从+无穷开始，因为MIN还没有找到上界。这些初始值确保没有过早剪枝。",
    diagram: "",
    terms: ["alpha_beta_pruning", "minimax"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 84,
    q: "A game tree for tic-tac-toe has approximately how many terminal nodes?",
    qChinese: "井字棋的博弈树大约有多少终端节点？",
    options: [
      "A) 9",
      "B) 362,880 (9!)",
      "C) About 255,168 (accounting for early termination)",
      "D) About 1 million"
    ],
    optionsChinese: [
      "A) 9",
      "B) 362,880 (9!)",
      "C) 大约255,168（考虑提前终止）",
      "D) 大约100万"
    ],
    answer: 2,
    explanation: "While 9! = 362,880 represents all orderings of placing pieces, many games end before all squares are filled. The actual number of terminal nodes in the complete tic-tac-toe game tree is about 255,168. This is small enough for minimax to solve perfectly without any pruning.",
    explanationChinese: "虽然9! = 362,880代表所有放置棋子的排列，但许多博弈在所有格子被填满之前就结束了。完整井字棋博弈树中的实际终端节点数约为255,168。这足够小，极小极大可以在不剪枝的情况下完美求解。",
    diagram: "",
    terms: ["game_tree", "minimax"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 85,
    q: "In a multi-player game (3+ players), minimax is replaced by:",
    qChinese: "在多玩家博弈（3个以上玩家）中，极小极大被替换为：",
    options: [
      "A) A vector of utility values, one per player, with each player maximizing their own",
      "B) Expectimax only",
      "C) Random play",
      "D) Single-agent search"
    ],
    optionsChinese: [
      "A) 效用值向量，每个玩家一个，每个玩家最大化自己的",
      "B) 仅Expectimax",
      "C) 随机博弈",
      "D) 单智能体搜索"
    ],
    answer: 0,
    explanation: "In multi-player games, each node stores a vector of utility values (one per player). Each player maximizes their own component when it is their turn to move. This generalizes minimax beyond two-player zero-sum games, though alliances and cooperation may complicate analysis.",
    explanationChinese: "在多玩家博弈中，每个节点存储一个效用值向量（每个玩家一个）。每个玩家在轮到他们时最大化自己的分量。这将极小极大推广到两人零和博弈之外，尽管联盟和合作可能使分析复杂化。",
    diagram: "",
    terms: ["minimax", "utility_function", "game_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 86,
    q: "What is the 'null move pruning' technique in game search?",
    qChinese: "博弈搜索中的'空移动剪枝'技术是什么？",
    options: [
      "A) Giving the opponent an extra turn; if still good for us, prune",
      "B) Skipping the evaluation function",
      "C) Never making a move",
      "D) Always passing the turn"
    ],
    optionsChinese: [
      "A) 给对手额外一步；如果对我们仍有利，则剪枝",
      "B) 跳过评估函数",
      "C) 从不移动",
      "D) 总是让步"
    ],
    answer: 0,
    explanation: "Null move pruning gives the opponent a free turn (null move) and does a reduced-depth search. If the position is still good for the current player despite giving the opponent a free move, the position is so strong that a full search is unnecessary, enabling pruning of the subtree.",
    explanationChinese: "空移动剪枝给对手一个免费回合（空移动）并进行减少深度的搜索。如果尽管给了对手一个免费移动，当前玩家的位置仍然好，那么位置如此强大以至于完全搜索是不必要的，从而可以剪掉子树。",
    diagram: "",
    terms: ["alpha_beta_pruning", "game_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 87,
    q: "The UCB1 formula in MCTS balances:",
    qChinese: "MCTS中的UCB1公式平衡了：",
    options: [
      "A) Speed and memory",
      "B) Alpha and beta values",
      "C) Exploitation of good moves and exploration of less-visited moves",
      "D) Depth and breadth"
    ],
    optionsChinese: [
      "A) 速度和内存",
      "B) Alpha和beta值",
      "C) 利用好移动和探索较少访问的移动",
      "D) 深度和广度"
    ],
    answer: 2,
    explanation: "UCB1 (Upper Confidence Bound) selects children by balancing the average reward (exploitation) with a bonus for less-visited nodes (exploration). The formula is: value/visits + C*sqrt(ln(parent_visits)/visits). This ensures both promising and under-explored moves receive attention.",
    explanationChinese: "UCB1（上置信界）通过平衡平均奖励（利用）和较少访问节点的奖励（探索）来选择子节点。公式为：value/visits + C*sqrt(ln(parent_visits)/visits)。这确保有前途的和未充分探索的移动都受到关注。",
    diagram: "",
    terms: ["game_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 88,
    q: "Minimax is optimal for which type of games?",
    qChinese: "极小极大对于哪种类型的博弈是最优的？",
    options: [
      "A) Cooperative games",
      "B) Two-player zero-sum perfect-information games",
      "C) Single-player puzzles",
      "D) Games with hidden information"
    ],
    optionsChinese: [
      "A) 合作博弈",
      "B) 两人零和完全信息博弈",
      "C) 单人益智游戏",
      "D) 隐藏信息博弈"
    ],
    answer: 1,
    explanation: "Minimax is optimal for two-player zero-sum games with perfect information, where both players can see the complete game state. In such games, minimax computes the exact game-theoretic value. For games with imperfect information or more players, other approaches are needed.",
    explanationChinese: "极小极大对于两人零和完全信息博弈是最优的，其中两个玩家都能看到完整的博弈状态。在这种博弈中，极小极大计算精确的博弈论值。对于不完全信息或更多玩家的博弈，需要其他方法。",
    diagram: "",
    terms: ["minimax", "game_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 89,
    q: "In a depth-limited minimax search, the cutoff test replaces:",
    qChinese: "在深度受限的极小极大搜索中，截断测试替换了：",
    options: [
      "A) The start state",
      "B) The minimax value computation",
      "C) Alpha-beta pruning",
      "D) The terminal test and utility function with a depth test and evaluation function"
    ],
    optionsChinese: [
      "A) 起始状态",
      "B) 极小极大值计算",
      "C) Alpha-beta剪枝",
      "D) 用深度测试和评估函数替换终端测试和效用函数"
    ],
    answer: 3,
    explanation: "In depth-limited minimax, the terminal test is replaced by a cutoff test that checks if the search has reached the maximum depth. The utility function is replaced by an evaluation function that estimates the value of non-terminal states. This makes game-playing practical for complex games.",
    explanationChinese: "在深度受限的极小极大中，终端测试被检查搜索是否达到最大深度的截断测试替换。效用函数被估计非终端状态值的评估函数替换。这使得复杂博弈的实际博弈成为可能。",
    diagram: "",
    terms: ["minimax", "game_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 90,
    q: "The aspiration window technique in alpha-beta search:",
    qChinese: "alpha-beta搜索中的期望窗口技术：",
    options: [
      "A) Only searches terminal nodes",
      "B) Widens the search window",
      "C) Removes alpha-beta pruning",
      "D) Uses a narrow initial alpha-beta window around the expected value to increase pruning"
    ],
    optionsChinese: [
      "A) 只搜索终端节点",
      "B) 加宽搜索窗口",
      "C) 移除alpha-beta剪枝",
      "D) 使用围绕期望值的狭窄初始alpha-beta窗口以增加剪枝"
    ],
    answer: 3,
    explanation: "Aspiration windows start alpha-beta search with a narrow window around the expected minimax value (from the previous iteration). This triggers more cutoffs. If the true value falls outside the window, the search is re-run with a wider window. This usually saves time overall.",
    explanationChinese: "期望窗口以围绕预期极小极大值（来自上一次迭代）的狭窄窗口开始alpha-beta搜索。这触发更多剪枝。如果真实值落在窗口之外，搜索以更宽的窗口重新运行。这通常总体上节省时间。",
    diagram: "",
    terms: ["alpha_beta_pruning", "minimax"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 91,
    q: "A Constraint Satisfaction Problem (CSP) is defined by:",
    qChinese: "约束满足问题（CSP）由以下定义：",
    options: [
      "A) States, actions, and rewards",
      "B) Heuristics and costs",
      "C) Nodes and edges only",
      "D) Variables, domains, and constraints"
    ],
    optionsChinese: [
      "A) 状态、动作和奖励",
      "B) 启发式和代价",
      "C) 仅节点和边",
      "D) 变量、域和约束"
    ],
    answer: 3,
    explanation: "A CSP consists of variables (each with a domain of possible values) and constraints specifying which combinations of values are allowed. The goal is to find an assignment of values to all variables that satisfies every constraint. Map coloring and scheduling are classic CSP examples.",
    explanationChinese: "CSP由变量（每个有可能值的域）和指定哪些值组合被允许的约束组成。目标是找到满足每个约束的所有变量的值分配。地图着色和调度是经典的CSP例子。",
    diagram: "",
    terms: ["constraint_satisfaction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 92,
    q: "In a CSP, backtracking search assigns values to variables:",
    qChinese: "在CSP中，回溯搜索为变量分配值的方式是：",
    options: [
      "A) All at once",
      "B) In random order simultaneously",
      "C) One variable at a time, backtracking on failure",
      "D) Only to constrained variables"
    ],
    optionsChinese: [
      "A) 一次全部分配",
      "B) 同时以随机顺序",
      "C) 一次一个变量，失败时回溯",
      "D) 仅对受约束的变量"
    ],
    answer: 2,
    explanation: "Backtracking search for CSPs assigns one variable at a time in depth-first fashion. After each assignment, it checks constraints. If any constraint is violated, it backtracks to the most recent variable and tries a different value. This systematic approach guarantees finding a solution if one exists.",
    explanationChinese: "CSP的回溯搜索以深度优先方式一次分配一个变量。每次分配后检查约束。如果任何约束被违反，它回溯到最近的变量并尝试不同的值。这种系统方法保证如果存在解则找到解。",
    diagram: "",
    terms: ["constraint_satisfaction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 93,
    q: "Arc consistency (AC-3) enforces that:",
    qChinese: "弧一致性（AC-3）确保：",
    options: [
      "A) All variables have the same domain",
      "B) All constraints are binary",
      "C) For every value of variable Xi, there exists a consistent value in Xj for every constraint between them",
      "D) The CSP has a unique solution"
    ],
    optionsChinese: [
      "A) 所有变量有相同的域",
      "B) 所有约束都是二元的",
      "C) 对于变量Xi的每个值，在Xi和Xj之间的每个约束中Xj都存在一致的值",
      "D) CSP有唯一解"
    ],
    answer: 2,
    explanation: "An arc (Xi, Xj) is consistent if for every value in Xi's domain, there is at least one value in Xj's domain that satisfies the constraint between them. AC-3 removes values that have no support, reducing domains and potentially detecting inconsistencies early before full search.",
    explanationChinese: "如果对于Xi域中的每个值，Xj的域中至少有一个值满足它们之间的约束，则弧(Xi, Xj)是一致的。AC-3移除没有支持的值，减少域并可能在完全搜索之前提前检测不一致性。",
    diagram: "",
    terms: ["constraint_satisfaction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 94,
    q: "The Minimum Remaining Values (MRV) heuristic selects the variable with:",
    qChinese: "最小剩余值（MRV）启发式选择具有以下特征的变量：",
    options: [
      "A) The largest domain",
      "B) The highest index",
      "C) The most constraints",
      "D) The fewest legal values remaining in its domain"
    ],
    optionsChinese: [
      "A) 最大域",
      "B) 最高索引的",
      "C) 最多约束的",
      "D) 域中剩余合法值最少的"
    ],
    answer: 3,
    explanation: "MRV (also called 'fail-first') picks the variable with the smallest remaining domain. The intuition is that variables most likely to cause failure should be tried first, so failures are detected early and the search tree is pruned. This dramatically reduces the search space in practice.",
    explanationChinese: "MRV（也称为'优先失败'）选择剩余域最小的变量。直觉是最可能导致失败的变量应该首先尝试，这样失败会被提早检测到，搜索树被修剪。这在实践中大大减少了搜索空间。",
    diagram: "",
    terms: ["constraint_satisfaction", "heuristic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 95,
    q: "The Least Constraining Value (LCV) heuristic chooses the value that:",
    qChinese: "最少约束值（LCV）启发式选择的值是：",
    options: [
      "A) Eliminates the most values from neighboring domains",
      "B) Is the smallest numerically",
      "C) Rules out the fewest values in neighboring variable domains",
      "D) Appears most frequently"
    ],
    optionsChinese: [
      "A) 从邻居域中消除最多值的",
      "B) 数值最小的",
      "C) 排除邻居变量域中最少值的",
      "D) 出现最频繁的"
    ],
    answer: 2,
    explanation: "LCV selects the value that leaves the most options for neighboring variables. By ruling out the fewest values in connected variables' domains, it maximizes the likelihood that remaining variables can be assigned successfully, reducing the chance of backtracking.",
    explanationChinese: "LCV选择为邻居变量留下最多选项的值。通过排除连接变量域中最少的值，它最大化剩余变量能成功分配的可能性，减少回溯的机会。",
    diagram: "",
    terms: ["constraint_satisfaction", "heuristic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 96,
    q: "Forward checking in CSP search means:",
    qChinese: "CSP搜索中的前向检查意味着：",
    options: [
      "A) Looking at future game states",
      "B) Checking all constraints at the end",
      "C) After assigning a variable, removing inconsistent values from neighboring unassigned variables",
      "D) Assigning all variables first, then checking"
    ],
    optionsChinese: [
      "A) 查看未来博弈状态",
      "B) 在最后检查所有约束",
      "C) 分配变量后，从邻居未分配变量中移除不一致的值",
      "D) 先分配所有变量，然后检查"
    ],
    answer: 2,
    explanation: "Forward checking propagates constraints after each variable assignment by removing values from neighboring unassigned variables' domains that are inconsistent with the current assignment. If any domain becomes empty, the algorithm backtracks immediately without further exploration.",
    explanationChinese: "前向检查通过在每次变量分配后从邻居未分配变量的域中移除与当前分配不一致的值来传播约束。如果任何域变空，算法立即回溯而不进一步探索。",
    diagram: "",
    terms: ["constraint_satisfaction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 97,
    q: "The degree heuristic for variable ordering selects the variable involved in:",
    qChinese: "变量排序的度启发式选择参与以下的变量：",
    options: [
      "A) The fewest constraints",
      "B) The most constraints with unassigned variables",
      "C) No constraints",
      "D) Only binary constraints"
    ],
    optionsChinese: [
      "A) 最少约束的",
      "B) 与未分配变量之间最多约束的",
      "C) 没有约束的",
      "D) 仅二元约束的"
    ],
    answer: 1,
    explanation: "The degree heuristic picks the variable with the highest degree—most constraints involving other unassigned variables. This acts as a tiebreaker for MRV or as a standalone heuristic, aiming to reduce the branching factor of future choices by constraining other variables early.",
    explanationChinese: "度启发式选择度最高的变量——涉及其他未分配变量的约束最多。这作为MRV的平局打破器或独立启发式，旨在通过提早约束其他变量来减少未来选择的分支因子。",
    diagram: "",
    terms: ["constraint_satisfaction", "heuristic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 98,
    q: "A binary CSP has constraints that involve:",
    qChinese: "二元CSP的约束涉及：",
    options: [
      "A) Only one variable",
      "B) Three or more variables",
      "C) Exactly two variables",
      "D) All variables simultaneously"
    ],
    optionsChinese: [
      "A) 仅一个变量",
      "B) 三个或更多变量",
      "C) 恰好两个变量",
      "D) 同时所有变量"
    ],
    answer: 2,
    explanation: "A binary CSP has constraints involving exactly two variables each. Map coloring is a classic example where each constraint says two adjacent regions must differ in color. Any higher-order CSP can be converted to a binary CSP by introducing auxiliary variables.",
    explanationChinese: "二元CSP的约束各涉及恰好两个变量。地图着色是经典例子，其中每个约束说两个相邻区域必须颜色不同。任何高阶CSP都可以通过引入辅助变量转换为二元CSP。",
    diagram: "",
    terms: ["constraint_satisfaction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 99,
    q: "The constraint graph of a CSP has:",
    qChinese: "CSP的约束图具有：",
    options: [
      "A) Constraints as nodes and variables as edges",
      "B) Variables as nodes and constraints as edges",
      "C) Only leaf nodes",
      "D) No structure"
    ],
    optionsChinese: [
      "A) 约束为节点，变量为边",
      "B) 变量为节点，约束为边",
      "C) 仅叶节点",
      "D) 没有结构"
    ],
    answer: 1,
    explanation: "In a CSP's constraint graph, nodes represent variables and edges connect pairs of variables that share a constraint. This graph structure reveals the problem topology and enables efficient solving techniques like tree decomposition and cutset conditioning.",
    explanationChinese: "在CSP的约束图中，节点代表变量，边连接共享约束的变量对。这种图结构揭示了问题拓扑，并使树分解和割集条件化等高效求解技术成为可能。",
    diagram: "",
    terms: ["constraint_satisfaction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 100,
    q: "Map coloring with 3 colors is an example of a CSP where the constraint is:",
    qChinese: "用3种颜色着色地图是CSP的一个例子，其中约束是：",
    options: [
      "A) All regions must have the same color",
      "B) Adjacent regions must have different colors",
      "C) Each color is used exactly once",
      "D) No region can be colored"
    ],
    optionsChinese: [
      "A) 所有区域必须有相同颜色",
      "B) 相邻区域必须有不同颜色",
      "C) 每种颜色恰好使用一次",
      "D) 没有区域可以着色"
    ],
    answer: 1,
    explanation: "In map coloring, each region is a variable with domain {red, green, blue}, and the constraint for adjacent regions is inequality (not-equal). This classic CSP demonstrates how real-world problems like scheduling and register allocation can be modeled as constraint satisfaction.",
    explanationChinese: "在地图着色中，每个区域是一个变量，域为{红、绿、蓝}，相邻区域的约束是不等（不相等）。这个经典CSP演示了如何将调度和寄存器分配等实际问题建模为约束满足。",
    diagram: "",
    terms: ["constraint_satisfaction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 101,
    q: "Maintaining Arc Consistency (MAC) during backtracking means:",
    qChinese: "在回溯期间维持弧一致性（MAC）意味着：",
    options: [
      "A) Only checking unary constraints",
      "B) Assigning all variables before checking",
      "C) Never backtracking",
      "D) Running AC-3 after each variable assignment"
    ],
    optionsChinese: [
      "A) 仅检查一元约束",
      "B) 在检查前分配所有变量",
      "C) 从不回溯",
      "D) 在每次变量分配后运行AC-3"
    ],
    answer: 3,
    explanation: "MAC integrates arc consistency into backtracking by running AC-3 after every variable assignment. This propagates constraints more thoroughly than forward checking, potentially eliminating many values from domains and detecting failures earlier. MAC is one of the most effective CSP strategies.",
    explanationChinese: "MAC通过在每次变量分配后运行AC-3将弧一致性集成到回溯中。这比前向检查更彻底地传播约束，可能从域中消除许多值并更早检测失败。MAC是最有效的CSP策略之一。",
    diagram: "",
    terms: ["constraint_satisfaction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 102,
    q: "A CSP is said to be 'tree-structured' if its constraint graph:",
    qChinese: "如果CSP的约束图满足以下条件，则称其为'树结构'的：",
    options: [
      "A) Has no cycles",
      "B) Is fully connected",
      "C) Has only binary constraints",
      "D) Has one variable"
    ],
    optionsChinese: [
      "A) 没有环",
      "B) 是完全连通的",
      "C) 只有二元约束",
      "D) 只有一个变量"
    ],
    answer: 0,
    explanation: "A tree-structured CSP has an acyclic constraint graph. Such CSPs can be solved in O(nd^2) time where n is the number of variables and d is the domain size, by topological ordering and a single pass of arc consistency from leaves to root followed by assignment from root to leaves.",
    explanationChinese: "树结构CSP有一个无环约束图。这种CSP可以在O(nd^2)时间内求解，其中n是变量数，d是域大小，通过拓扑排序和从叶到根的单次弧一致性传播，然后从根到叶分配。",
    diagram: "",
    terms: ["constraint_satisfaction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 103,
    q: "Local search for CSPs (e.g., min-conflicts) starts with:",
    qChinese: "CSP的局部搜索（如最小冲突）从以下开始：",
    options: [
      "A) An empty assignment",
      "B) A complete (possibly inconsistent) assignment and iteratively improves it",
      "C) Only one variable assigned",
      "D) The optimal solution"
    ],
    optionsChinese: [
      "A) 空分配",
      "B) 一个完整的（可能不一致的）分配并迭代改进",
      "C) 仅分配一个变量",
      "D) 最优解"
    ],
    answer: 1,
    explanation: "Min-conflicts and other local search methods start with all variables assigned (possibly violating some constraints). They then iteratively pick a conflicting variable and reassign it to the value causing the fewest conflicts. This approach works surprisingly well for many large CSPs like n-queens.",
    explanationChinese: "最小冲突和其他局部搜索方法从所有变量都被分配开始（可能违反一些约束）。然后迭代地选择一个冲突变量并将其重新分配为导致最少冲突的值。这种方法对许多大型CSP（如n皇后）效果出奇地好。",
    diagram: "",
    terms: ["constraint_satisfaction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 104,
    q: "The n-queens problem can be modeled as a CSP with what variables?",
    qChinese: "n皇后问题可以用什么变量建模为CSP？",
    options: [
      "A) Only the first queen is a variable",
      "B) Each cell is a variable",
      "C) Each queen is a variable; domain is the column number",
      "D) The board size is the variable"
    ],
    optionsChinese: [
      "A) 仅第一个皇后是变量",
      "B) 每个格子是一个变量",
      "C) 每个皇后是一个变量；域是列号",
      "D) 棋盘大小是变量"
    ],
    answer: 2,
    explanation: "In the n-queens CSP, each row has one queen, so variable Qi represents the queen in row i with domain {1,...,n} (columns). Constraints require no two queens share the same column or diagonal. This formulation has n variables with domain size n, making it efficiently solvable.",
    explanationChinese: "在n皇后CSP中，每行有一个皇后，所以变量Qi代表第i行的皇后，域为{1,...,n}（列）。约束要求没有两个皇后共享同一列或对角线。这种建模有n个变量，域大小为n，使其可以高效求解。",
    diagram: "",
    terms: ["constraint_satisfaction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 105,
    q: "Backjumping improves backtracking by:",
    qChinese: "回跳通过以下方式改进回溯：",
    options: [
      "A) Jumping forward to the goal",
      "B) Skipping all constraints",
      "C) Jumping back to the variable that actually caused the failure",
      "D) Trying random variables"
    ],
    optionsChinese: [
      "A) 跳到目标前方",
      "B) 跳过所有约束",
      "C) 回跳到实际导致失败的变量",
      "D) 尝试随机变量"
    ],
    answer: 2,
    explanation: "Standard backtracking goes back one variable at a time, which wastes effort if the failure was caused by an earlier variable. Backjumping identifies the source of the conflict and jumps directly back to that variable, skipping irrelevant variables and significantly reducing search effort.",
    explanationChinese: "标准回溯一次回退一个变量，如果失败是由更早的变量引起的，这会浪费精力。回跳识别冲突的来源并直接跳回到那个变量，跳过不相关的变量并显著减少搜索工作量。",
    diagram: "",
    terms: ["constraint_satisfaction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 106,
    q: "The AC-3 algorithm has a time complexity of:",
    qChinese: "AC-3算法的时间复杂度是：",
    options: [
      "A) O(n)",
      "B) O(ed^3) where e is arcs and d is domain size",
      "C) O(n^2)",
      "D) O(2^n)"
    ],
    optionsChinese: [
      "A) O(n)",
      "B) O(ed^3)，其中e是弧数，d是域大小",
      "C) O(n^2)",
      "D) O(2^n)"
    ],
    answer: 1,
    explanation: "AC-3 processes each arc at most d times (once per domain value deletion), and checking consistency for each arc takes O(d^2) time. With e arcs, the total complexity is O(ed^3). This is efficient enough to be practical as a preprocessing step or during backtracking search.",
    explanationChinese: "AC-3最多处理每条弧d次（每次域值删除一次），检查每条弧的一致性需要O(d^2)时间。有e条弧，总复杂度为O(ed^3)。这足够高效，可以作为预处理步骤或在回溯搜索期间使用。",
    diagram: "",
    terms: ["constraint_satisfaction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 107,
    q: "Constraint propagation alone can sometimes solve a CSP without search because:",
    qChinese: "约束传播有时可以在不搜索的情况下求解CSP，因为：",
    options: [
      "A) It guesses the answer",
      "B) It always finds multiple solutions",
      "C) It ignores constraints",
      "D) Propagation can reduce all domains to single values"
    ],
    optionsChinese: [
      "A) 它猜测答案",
      "B) 它总是找到多个解",
      "C) 它忽略约束",
      "D) 传播可以将所有域减少到单个值"
    ],
    answer: 3,
    explanation: "Constraint propagation iteratively removes inconsistent values from domains. In some CSPs, this cascading removal is sufficient to reduce every domain to exactly one value, yielding the solution without any backtracking search. This commonly happens in well-constrained problems like Sudoku.",
    explanationChinese: "约束传播迭代地从域中移除不一致的值。在某些CSP中，这种级联移除足以将每个域减少到恰好一个值，无需任何回溯搜索即可得到解。这通常发生在数独等约束充分的问题中。",
    diagram: "",
    terms: ["constraint_satisfaction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 108,
    q: "A global constraint in a CSP applies to:",
    qChinese: "CSP中的全局约束应用于：",
    options: [
      "A) Only one variable",
      "B) An arbitrary number of variables",
      "C) Exactly two variables",
      "D) Only binary variables"
    ],
    optionsChinese: [
      "A) 仅一个变量",
      "B) 任意数量的变量",
      "C) 恰好两个变量",
      "D) 仅二元变量"
    ],
    answer: 1,
    explanation: "A global constraint involves an arbitrary number of variables. The 'all-different' constraint (all variables must have distinct values) is a classic example. Global constraints allow specialized propagation algorithms that are more efficient than decomposing into binary constraints.",
    explanationChinese: "全局约束涉及任意数量的变量。'全不同'约束（所有变量必须有不同的值）是经典例子。全局约束允许比分解为二元约束更高效的专门传播算法。",
    diagram: "",
    terms: ["constraint_satisfaction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 109,
    q: "Cutset conditioning solves a CSP with cycles by:",
    qChinese: "割集条件化通过以下方式求解有环的CSP：",
    options: [
      "A) Assigning values to a set of variables that breaks all cycles, then solving the remaining tree",
      "B) Removing all constraints",
      "C) Adding more variables",
      "D) Using random assignment"
    ],
    optionsChinese: [
      "A) 为打破所有环的一组变量分配值，然后求解剩余的树",
      "B) 移除所有约束",
      "C) 添加更多变量",
      "D) 使用随机分配"
    ],
    answer: 0,
    explanation: "Cutset conditioning identifies a cycle cutset: a set of variables whose removal makes the constraint graph a tree. It assigns all combinations of values to cutset variables, then solves each resulting tree-structured CSP efficiently. The cost is O(d^c * (n-c) * d^2) where c is cutset size.",
    explanationChinese: "割集条件化识别一个环割集：移除后使约束图变成树的一组变量。它为割集变量分配所有值组合，然后高效求解每个结果的树结构CSP。代价为O(d^c * (n-c) * d^2)，其中c是割集大小。",
    diagram: "",
    terms: ["constraint_satisfaction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 110,
    q: "The Sudoku puzzle is best modeled as what type of problem?",
    qChinese: "数独谜题最好建模为什么类型的问题？",
    options: [
      "A) A search problem only",
      "B) An optimization problem",
      "C) A game tree problem",
      "D) A constraint satisfaction problem"
    ],
    optionsChinese: [
      "A) 仅搜索问题",
      "B) 优化问题",
      "C) 博弈树问题",
      "D) 约束满足问题"
    ],
    answer: 3,
    explanation: "Sudoku is naturally a CSP: each empty cell is a variable with domain {1-9}; constraints include all-different in each row, column, and 3x3 box. Constraint propagation (arc consistency) combined with backtracking efficiently solves even difficult Sudoku puzzles by eliminating impossible values.",
    explanationChinese: "数独自然是一个CSP：每个空格是一个变量，域为{1-9}；约束包括每行、每列和每个3x3方块中全不同。约束传播（弧一致性）结合回溯通过消除不可能的值高效求解即使困难的数独谜题。",
    diagram: "",
    terms: ["constraint_satisfaction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 111,
    q: "Constraint optimization problems (COPs) differ from standard CSPs in that they:",
    qChinese: "约束优化问题（COP）与标准CSP的不同之处在于它们：",
    options: [
      "A) Have no constraints",
      "B) Seek to maximize or minimize an objective function while satisfying constraints",
      "C) Only have binary variables",
      "D) Cannot be solved"
    ],
    optionsChinese: [
      "A) 没有约束",
      "B) 在满足约束的同时寻求最大化或最小化目标函数",
      "C) 只有二元变量",
      "D) 不能被求解"
    ],
    answer: 1,
    explanation: "While standard CSPs seek any satisfying assignment, COPs add an objective function to optimize among all valid solutions. Branch-and-bound algorithms combine backtracking with bounds on the objective value to prune suboptimal branches, efficiently finding the best solution.",
    explanationChinese: "标准CSP寻求任何满足的分配，而COP添加一个目标函数在所有有效解中优化。分支定界算法结合回溯和目标值的界来修剪次优分支，高效找到最佳解。",
    diagram: "",
    terms: ["constraint_satisfaction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 112,
    q: "What is a 'soft constraint' in CSPs?",
    qChinese: "CSP中的'软约束'是什么？",
    options: [
      "A) A constraint that must be satisfied",
      "B) A constraint between only one variable",
      "C) A constraint with no variables",
      "D) A preference that can be violated with a penalty cost"
    ],
    optionsChinese: [
      "A) 必须满足的约束",
      "B) 仅涉及一个变量的约束",
      "C) 没有变量的约束",
      "D) 可以违反但有惩罚代价的偏好"
    ],
    answer: 3,
    explanation: "Soft constraints express preferences rather than absolute requirements. Violating a soft constraint incurs a cost rather than invalidating the solution. The goal becomes minimizing total violation cost. Soft constraints are common in real-world scheduling where not all preferences can be simultaneously met.",
    explanationChinese: "软约束表达偏好而非绝对要求。违反软约束会产生代价而不是使解无效。目标变为最小化总违反代价。软约束在现实世界的调度中很常见，其中并非所有偏好都能同时满足。",
    diagram: "",
    terms: ["constraint_satisfaction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 113,
    q: "Path consistency extends arc consistency by considering:",
    qChinese: "路径一致性通过考虑以下扩展弧一致性：",
    options: [
      "A) Pairs of variables consistent with a third variable",
      "B) Only single variables",
      "C) All variables at once",
      "D) Only constraints with one variable"
    ],
    optionsChinese: [
      "A) 与第三个变量一致的变量对",
      "B) 仅单个变量",
      "C) 同时所有变量",
      "D) 仅涉及一个变量的约束"
    ],
    answer: 0,
    explanation: "Path consistency checks that for every pair of consistent values for variables Xi and Xj, there exists a value for every variable Xk between them that is consistent with both. This is stronger than arc consistency and can detect more inconsistencies at a higher computational cost.",
    explanationChinese: "路径一致性检查对于变量Xi和Xj的每对一致值，它们之间的每个变量Xk都存在一个与两者一致的值。这比弧一致性更强，可以在更高的计算代价下检测更多不一致性。",
    diagram: "",
    terms: ["constraint_satisfaction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 114,
    q: "In CSP solving, 'intelligent backtracking' refers to:",
    qChinese: "在CSP求解中，'智能回溯'指的是：",
    options: [
      "A) Backtracking to a random variable",
      "B) Never backtracking",
      "C) Using conflict information to backtrack to the source of failure",
      "D) Backtracking to the first variable"
    ],
    optionsChinese: [
      "A) 回溯到随机变量",
      "B) 从不回溯",
      "C) 使用冲突信息回溯到失败的来源",
      "D) 回溯到第一个变量"
    ],
    answer: 2,
    explanation: "Intelligent backtracking uses conflict analysis to determine which previous variable assignment caused the current failure. Instead of chronologically going back one step, it jumps directly to the responsible variable. This includes backjumping and conflict-directed backjumping techniques.",
    explanationChinese: "智能回溯使用冲突分析来确定哪个先前的变量分配导致了当前失败。它不是按时间顺序回退一步，而是直接跳到负责的变量。这包括回跳和冲突导向回跳技术。",
    diagram: "",
    terms: ["constraint_satisfaction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 115,
    q: "The symmetry-breaking technique in CSPs adds constraints to:",
    qChinese: "CSP中的对称性破坏技术添加约束来：",
    options: [
      "A) Eliminate equivalent search branches caused by symmetry",
      "B) Make the problem harder",
      "C) Remove all constraints",
      "D) Add more variables"
    ],
    optionsChinese: [
      "A) 消除由对称性引起的等价搜索分支",
      "B) 使问题更难",
      "C) 移除所有约束",
      "D) 添加更多变量"
    ],
    answer: 0,
    explanation: "Many CSPs have symmetrical solutions where permuting values or variables yields equivalent solutions. Symmetry-breaking adds constraints to eliminate these equivalent branches, such as ordering constraints. This can dramatically reduce the search space without losing any distinct solutions.",
    explanationChinese: "许多CSP有对称解，其中排列值或变量产生等价解。对称性破坏添加约束来消除这些等价分支，如排序约束。这可以在不失去任何不同解的情况下大大减少搜索空间。",
    diagram: "",
    terms: ["constraint_satisfaction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 116,
    q: "In propositional logic, a literal is:",
    qChinese: "在命题逻辑中，文字是：",
    options: [
      "A) A sentence with quantifiers",
      "B) An atomic proposition or its negation",
      "C) A disjunction of clauses",
      "D) A function symbol"
    ],
    optionsChinese: [
      "A) 含量词的句子",
      "B) 原子命题或其否定",
      "C) 子句的析取",
      "D) 函数符号"
    ],
    answer: 1,
    explanation: "A literal is either a propositional variable (positive literal, e.g., P) or its negation (negative literal, e.g., not-P). Literals are the building blocks of clauses in conjunctive normal form and play a central role in resolution-based theorem proving and SAT solving.",
    explanationChinese: "文字是一个命题变量（正文字，如P）或其否定（负文字，如非P）。文字是合取范式中子句的构建块，在基于消解的定理证明和SAT求解中起核心作用。",
    diagram: "",
    terms: ["propositional_logic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 117,
    q: "A propositional sentence is in Conjunctive Normal Form (CNF) when it is:",
    qChinese: "当命题语句满足以下条件时，它处于合取范式（CNF）：",
    options: [
      "A) A disjunction of conjunctions of literals",
      "B) An implication chain",
      "C) A single literal",
      "D) A conjunction of disjunctions of literals"
    ],
    optionsChinese: [
      "A) 文字合取的析取",
      "B) 蕴含链",
      "C) 单个文字",
      "D) 文字析取的合取"
    ],
    answer: 3,
    explanation: "CNF is a conjunction (AND) of clauses, where each clause is a disjunction (OR) of literals. Example: (A or B) AND (not-C or D). CNF is the standard input format for resolution and SAT solvers. Any propositional formula can be converted to an equivalent CNF.",
    explanationChinese: "CNF是子句的合取（AND），其中每个子句是文字的析取（OR）。例如：(A或B) AND (非C或D)。CNF是消解和SAT求解器的标准输入格式。任何命题公式都可以转换为等价的CNF。",
    diagram: "",
    terms: ["propositional_logic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 118,
    q: "The resolution rule in propositional logic resolves two clauses that contain:",
    qChinese: "命题逻辑中的消解规则消解包含以下内容的两个子句：",
    options: [
      "A) The same literal",
      "B) Only positive literals",
      "C) No shared variables",
      "D) Complementary literals (P and not-P)"
    ],
    optionsChinese: [
      "A) 相同的文字",
      "B) 仅正文字",
      "C) 没有共享变量",
      "D) 互补文字（P和非P）"
    ],
    answer: 3,
    explanation: "Resolution combines two clauses that contain complementary literals (e.g., P in one and not-P in the other). The resolvent is a new clause containing all remaining literals. For example, resolving (A or P) with (B or not-P) yields (A or B). Resolution is sound and refutation-complete.",
    explanationChinese: "消解组合包含互补文字的两个子句（例如，一个中的P和另一个中的非P）。消解式是包含所有剩余文字的新子句。例如，消解(A或P)和(B或非P)得到(A或B)。消解是健全的和反驳完备的。",
    diagram: "",
    terms: ["propositional_logic", "inference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 119,
    q: "Modus ponens is the inference rule that from P and P => Q derives:",
    qChinese: "假言推理是从P和P => Q推导出以下内容的推理规则：",
    options: [
      "A) P",
      "B) not-Q",
      "C) P AND Q",
      "D) Q"
    ],
    optionsChinese: [
      "A) P",
      "B) 非Q",
      "C) P AND Q",
      "D) Q"
    ],
    answer: 3,
    explanation: "Modus ponens states: if P is true and P implies Q, then Q must be true. It is one of the most fundamental inference rules in logic. In AI, it is the basis of forward chaining in rule-based systems, where known facts trigger applicable rules to derive new conclusions.",
    explanationChinese: "假言推理指出：如果P为真且P蕴含Q，则Q必须为真。它是逻辑中最基本的推理规则之一。在AI中，它是基于规则系统中前向链接的基础，已知事实触发适用规则以推导新结论。",
    diagram: "",
    terms: ["propositional_logic", "inference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 120,
    q: "A propositional sentence is 'valid' (a tautology) if:",
    qChinese: "命题语句是'有效的'（重言式）如果：",
    options: [
      "A) It is true in at least one model",
      "B) It has exactly one variable",
      "C) It contains no negations",
      "D) It is true in all possible models"
    ],
    optionsChinese: [
      "A) 它在至少一个模型中为真",
      "B) 它恰好有一个变量",
      "C) 它不包含否定",
      "D) 它在所有可能的模型中为真"
    ],
    answer: 3,
    explanation: "A valid sentence (tautology) is true under every possible truth assignment. For example, P OR not-P is valid. Validity is the opposite of unsatisfiability. A sentence is satisfiable if true in at least one model, and unsatisfiable if true in no model.",
    explanationChinese: "有效句子（重言式）在每种可能的真值赋值下都为真。例如，P OR 非P是有效的。有效性是不可满足性的对立面。如果句子在至少一个模型中为真则可满足，在没有模型中为真则不可满足。",
    diagram: "",
    terms: ["propositional_logic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 121,
    q: "First-order logic extends propositional logic by adding:",
    qChinese: "一阶逻辑通过添加以下内容扩展命题逻辑：",
    options: [
      "A) More truth values",
      "B) Objects, relations, quantifiers, and functions",
      "C) Only negation",
      "D) Probability"
    ],
    optionsChinese: [
      "A) 更多真值",
      "B) 对象、关系、量词和函数",
      "C) 仅否定",
      "D) 概率"
    ],
    answer: 1,
    explanation: "First-order logic (FOL) extends propositional logic with variables over objects, predicates (relations), functions, and quantifiers (for-all, there-exists). This allows expressing statements about objects and their properties, such as 'All students study' or 'There exists a prime number greater than 100.'",
    explanationChinese: "一阶逻辑（FOL）用对象上的变量、谓词（关系）、函数和量词（全称、存在）扩展命题逻辑。这允许表达关于对象及其性质的陈述，如'所有学生都学习'或'存在一个大于100的素数'。",
    diagram: "",
    terms: ["first_order_logic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 122,
    q: "The universal quantifier (for-all, ∀) in FOL means:",
    qChinese: "FOL中的全称量词（对所有，∀）意味着：",
    options: [
      "A) The statement is true for at least one object",
      "B) There is no such object",
      "C) The statement is false for all objects",
      "D) The statement is true for every object in the domain"
    ],
    optionsChinese: [
      "A) 陈述对至少一个对象为真",
      "B) 没有这样的对象",
      "C) 陈述对所有对象都为假",
      "D) 陈述对域中的每个对象都为真"
    ],
    answer: 3,
    explanation: "The universal quantifier ∀x P(x) asserts that predicate P holds for every object x in the domain of discourse. For example, ∀x Human(x) => Mortal(x) states that all humans are mortal. It is typically used with implication to express general rules about categories of objects.",
    explanationChinese: "全称量词∀x P(x)断言谓词P对论域中的每个对象x都成立。例如，∀x Human(x) => Mortal(x)表示所有人类都是凡人。它通常与蕴含一起使用来表达关于对象类别的一般规则。",
    diagram: "",
    terms: ["first_order_logic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 123,
    q: "The existential quantifier (there-exists, ∃) asserts:",
    qChinese: "存在量词（存在，∃）断言：",
    options: [
      "A) Something is true for at least one object in the domain",
      "B) Something is true for all objects",
      "C) Nothing exists",
      "D) The domain is empty"
    ],
    optionsChinese: [
      "A) 某事对域中至少一个对象为真",
      "B) 某事对所有对象为真",
      "C) 什么都不存在",
      "D) 域是空的"
    ],
    answer: 0,
    explanation: "The existential quantifier ∃x P(x) claims there is at least one object x in the domain for which P(x) is true. For example, ∃x Cat(x) AND Black(x) means there exists at least one black cat. It is typically used with conjunction to specify properties of the existing object.",
    explanationChinese: "存在量词∃x P(x)声称域中至少存在一个对象x使P(x)为真。例如，∃x Cat(x) AND Black(x)意味着存在至少一只黑猫。它通常与合取一起使用来指定存在对象的性质。",
    diagram: "",
    terms: ["first_order_logic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 124,
    q: "Unification in first-order logic finds:",
    qChinese: "一阶逻辑中的合一找到：",
    options: [
      "A) The truth value of a sentence",
      "B) The negation of a sentence",
      "C) A substitution that makes two expressions identical",
      "D) All models of a theory"
    ],
    optionsChinese: [
      "A) 句子的真值",
      "B) 句子的否定",
      "C) 使两个表达式相同的替换",
      "D) 理论的所有模型"
    ],
    answer: 2,
    explanation: "Unification finds the most general substitution (binding variables to terms) that makes two FOL expressions identical. For example, unifying Knows(John, x) with Knows(y, Jane) yields {x/Jane, y/John}. Unification is essential for resolution and Prolog's inference mechanism.",
    explanationChinese: "合一找到使两个FOL表达式相同的最一般替换（将变量绑定到项）。例如，合一Knows(John, x)和Knows(y, Jane)得到{x/Jane, y/John}。合一对于消解和Prolog的推理机制至关重要。",
    diagram: "",
    terms: ["first_order_logic", "inference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 125,
    q: "Skolemization eliminates existential quantifiers by:",
    qChinese: "Skolem化通过以下方式消除存在量词：",
    options: [
      "A) Replacing them with universal quantifiers",
      "B) Replacing existentially quantified variables with Skolem constants or functions",
      "C) Removing all quantifiers",
      "D) Adding more variables"
    ],
    optionsChinese: [
      "A) 用全称量词替换它们",
      "B) 用Skolem常量或函数替换存在量化变量",
      "C) 移除所有量词",
      "D) 添加更多变量"
    ],
    answer: 1,
    explanation: "Skolemization replaces ∃x with a Skolem constant (if not within ∀) or a Skolem function of the enclosing universal variables. For example, ∀x ∃y Loves(x,y) becomes ∀x Loves(x, f(x)). This preserves satisfiability and is required for converting to clausal form for resolution.",
    explanationChinese: "Skolem化用Skolem常量（如果不在∀内）或封闭全称变量的Skolem函数替换∃x。例如，∀x ∃y Loves(x,y)变为∀x Loves(x, f(x))。这保持可满足性，是转换为用于消解的子句形式所必需的。",
    diagram: "",
    terms: ["first_order_logic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 126,
    q: "De Morgan's laws in propositional logic state that NOT(A AND B) is equivalent to:",
    qChinese: "命题逻辑中的德摩根定律指出NOT(A AND B)等价于：",
    options: [
      "A) NOT-A AND NOT-B",
      "B) NOT-A OR NOT-B",
      "C) A OR B",
      "D) A AND B"
    ],
    optionsChinese: [
      "A) 非A AND 非B",
      "B) 非A OR 非B",
      "C) A OR B",
      "D) A AND B"
    ],
    answer: 1,
    explanation: "De Morgan's laws provide rules for distributing negation over conjunctions and disjunctions: NOT(A AND B) = NOT-A OR NOT-B, and NOT(A OR B) = NOT-A AND NOT-B. These laws are essential for converting logical formulas into normal forms like CNF and DNF.",
    explanationChinese: "德摩根定律提供了在合取和析取上分配否定的规则：NOT(A AND B) = 非A OR 非B，NOT(A OR B) = 非A AND 非B。这些定律对于将逻辑公式转换为CNF和DNF等范式至关重要。",
    diagram: "",
    terms: ["propositional_logic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 127,
    q: "The implication P => Q is logically equivalent to:",
    qChinese: "蕴含P => Q逻辑上等价于：",
    options: [
      "A) P AND Q",
      "B) NOT-P OR Q",
      "C) P OR NOT-Q",
      "D) NOT-P AND Q"
    ],
    optionsChinese: [
      "A) P AND Q",
      "B) 非P OR Q",
      "C) P OR 非Q",
      "D) 非P AND Q"
    ],
    answer: 1,
    explanation: "The material implication P => Q is equivalent to NOT-P OR Q. This means the implication is false only when P is true and Q is false. This equivalence is fundamental for converting implications into CNF (needed for resolution) and is often counterintuitive for beginners.",
    explanationChinese: "实质蕴含P => Q等价于非P OR Q。这意味着蕴含仅在P为真且Q为假时为假。这个等价关系对于将蕴含转换为CNF（消解所需）是基础性的，对初学者来说常常是反直觉的。",
    diagram: "",
    terms: ["propositional_logic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 128,
    q: "A knowledge base KB entails a sentence α (KB |= α) if:",
    qChinese: "如果知识库KB蕴含句子α（KB |= α），则：",
    options: [
      "A) α is in KB",
      "B) α is false",
      "C) α is true in every model where KB is true",
      "D) KB is empty"
    ],
    optionsChinese: [
      "A) α在KB中",
      "B) α为假",
      "C) α在KB为真的每个模型中都为真",
      "D) KB是空的"
    ],
    answer: 2,
    explanation: "Entailment means α is a logical consequence of KB: in every possible world (model) where all sentences in KB are true, α must also be true. This is a semantic relationship independent of any particular proof method. Sound inference procedures only derive entailed sentences.",
    explanationChinese: "蕴含意味着α是KB的逻辑后果：在KB中所有句子为真的每个可能世界（模型）中，α也必须为真。这是一种独立于任何特定证明方法的语义关系。健全的推理过程只推导被蕴含的句子。",
    diagram: "",
    terms: ["propositional_logic", "inference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 129,
    q: "A sound inference algorithm:",
    qChinese: "健全的推理算法：",
    options: [
      "A) Uses only propositional logic",
      "B) Derives all entailed sentences",
      "C) Runs in polynomial time",
      "D) Derives only entailed sentences"
    ],
    optionsChinese: [
      "A) 仅使用命题逻辑",
      "B) 推导所有被蕴含的句子",
      "C) 在多项式时间内运行",
      "D) 只推导被蕴含的句子"
    ],
    answer: 3,
    explanation: "Soundness means an inference algorithm never derives a sentence that is not entailed by the knowledge base—it never produces false conclusions from true premises. Completeness means it can derive every entailed sentence. An ideal inference system is both sound and complete.",
    explanationChinese: "健全性意味着推理算法永远不会推导出不被知识库蕴含的句子——它永远不会从真前提产生假结论。完备性意味着它可以推导出每个被蕴含的句子。理想的推理系统既健全又完备。",
    diagram: "",
    terms: ["inference", "propositional_logic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 130,
    q: "The SAT problem asks whether a propositional formula in CNF is:",
    qChinese: "SAT问题询问CNF中的命题公式是否：",
    options: [
      "A) Satisfiable (has at least one satisfying assignment)",
      "B) Valid",
      "C) In normal form",
      "D) A tautology"
    ],
    optionsChinese: [
      "A) 可满足的（有至少一个满足赋值）",
      "B) 有效的",
      "C) 处于范式",
      "D) 是重言式"
    ],
    answer: 0,
    explanation: "The Boolean Satisfiability Problem (SAT) determines whether there exists a truth assignment making a CNF formula true. SAT was the first problem proven NP-complete (Cook's theorem). Despite worst-case hardness, modern SAT solvers efficiently handle practical instances with millions of variables.",
    explanationChinese: "布尔可满足性问题（SAT）确定是否存在使CNF公式为真的真值赋值。SAT是第一个被证明NP完全的问题（Cook定理）。尽管最坏情况很难，现代SAT求解器能高效处理数百万变量的实际实例。",
    diagram: "",
    terms: ["propositional_logic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 131,
    q: "In first-order logic, a predicate represents:",
    qChinese: "在一阶逻辑中，谓词表示：",
    options: [
      "A) A truth value",
      "B) A number",
      "C) A relation or property of objects",
      "D) An action"
    ],
    optionsChinese: [
      "A) 真值",
      "B) 数字",
      "C) 对象的关系或属性",
      "D) 动作"
    ],
    answer: 2,
    explanation: "A predicate in FOL represents a property or relation over objects in the domain. For example, Red(ball) is a unary predicate expressing a property, and Loves(John, Mary) is a binary predicate expressing a relation. Predicates evaluate to true or false given specific arguments.",
    explanationChinese: "FOL中的谓词表示域中对象的属性或关系。例如，Red(ball)是表达属性的一元谓词，Loves(John, Mary)是表达关系的二元谓词。给定特定参数，谓词评估为真或假。",
    diagram: "",
    terms: ["first_order_logic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 132,
    q: "The closed-world assumption states that:",
    qChinese: "封闭世界假设指出：",
    options: [
      "A) Any statement not known to be true is assumed false",
      "B) All true statements are known",
      "C) The world is finite",
      "D) All variables are bound"
    ],
    optionsChinese: [
      "A) 任何未知为真的陈述被假设为假",
      "B) 所有真陈述都是已知的",
      "C) 世界是有限的",
      "D) 所有变量都是绑定的"
    ],
    answer: 0,
    explanation: "The closed-world assumption presumes that if a fact is not stated or derivable from the knowledge base, it is false. Databases and Prolog use this assumption. It contrasts with the open-world assumption where unknown facts could be either true or false.",
    explanationChinese: "封闭世界假设假定如果一个事实未被陈述或不能从知识库中推导，则它为假。数据库和Prolog使用这个假设。它与开放世界假设形成对比，在开放世界假设中，未知事实可能为真也可能为假。",
    diagram: "",
    terms: ["knowledge_representation", "inference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 133,
    q: "Resolution refutation proves that KB |= α by showing:",
    qChinese: "消解反驳通过证明以下内容来证明KB |= α：",
    options: [
      "A) KB is satisfiable",
      "B) KB AND NOT-α is unsatisfiable (derives empty clause)",
      "C) α is a tautology",
      "D) KB is empty"
    ],
    optionsChinese: [
      "A) KB是可满足的",
      "B) KB AND 非α是不可满足的（推导出空子句）",
      "C) α是重言式",
      "D) KB是空的"
    ],
    answer: 1,
    explanation: "Resolution refutation adds the negation of the goal (NOT-α) to the KB and applies resolution. If the empty clause (contradiction) is derived, then KB AND NOT-α is unsatisfiable, meaning KB entails α. This proof by contradiction is sound and complete for propositional and first-order logic.",
    explanationChinese: "消解反驳将目标的否定（非α）添加到KB并应用消解。如果推导出空子句（矛盾），则KB AND 非α不可满足，意味着KB蕴含α。这种反证法对命题逻辑和一阶逻辑是健全且完备的。",
    diagram: "",
    terms: ["propositional_logic", "inference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 134,
    q: "A Horn clause contains:",
    qChinese: "Horn子句包含：",
    options: [
      "A) Only negative literals",
      "B) Exactly two positive literals",
      "C) At most one positive literal",
      "D) No literals"
    ],
    optionsChinese: [
      "A) 仅负文字",
      "B) 恰好两个正文字",
      "C) 至多一个正文字",
      "D) 没有文字"
    ],
    answer: 2,
    explanation: "A Horn clause has at most one positive literal. If it has exactly one positive literal and one or more negative literals, it is a definite clause (rule). Horn clauses enable efficient forward and backward chaining inference, which runs in polynomial time unlike general resolution.",
    explanationChinese: "Horn子句最多有一个正文字。如果它恰好有一个正文字和一个或多个负文字，则它是确定子句（规则）。Horn子句支持高效的前向和后向链接推理，运行时间为多项式，不像一般消解。",
    diagram: "",
    terms: ["propositional_logic", "forward_chaining", "backward_chaining"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 135,
    q: "Forward chaining in propositional logic works by:",
    qChinese: "命题逻辑中的前向链接通过以下方式工作：",
    options: [
      "A) Starting from the goal and working backward",
      "B) Using only negation",
      "C) Randomly guessing",
      "D) Starting from known facts and applying rules to derive new facts"
    ],
    optionsChinese: [
      "A) 从目标开始向后工作",
      "B) 仅使用否定",
      "C) 随机猜测",
      "D) 从已知事实开始应用规则推导新事实"
    ],
    answer: 3,
    explanation: "Forward chaining is data-driven: it starts with known facts and repeatedly applies implication rules whose premises are satisfied to derive new facts. This continues until the query is answered or no new facts can be derived. It is sound and complete for Horn clause knowledge bases.",
    explanationChinese: "前向链接是数据驱动的：它从已知事实开始，反复应用前提被满足的蕴含规则来推导新事实。这持续到查询被回答或无法推导新事实为止。它对Horn子句知识库是健全且完备的。",
    diagram: "",
    terms: ["forward_chaining", "inference", "propositional_logic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 136,
    q: "Backward chaining starts from:",
    qChinese: "后向链接从以下开始：",
    options: [
      "A) All known facts",
      "B) The empty knowledge base",
      "C) Random sentences",
      "D) The query/goal and works backward to find supporting facts"
    ],
    optionsChinese: [
      "A) 所有已知事实",
      "B) 空知识库",
      "C) 随机句子",
      "D) 查询/目标，向后工作以找到支持事实"
    ],
    answer: 3,
    explanation: "Backward chaining is goal-driven: it starts with the query and recursively tries to prove it by finding rules whose conclusion matches the query, then proving the premises. This is the strategy used by Prolog. It avoids deriving irrelevant facts, making it efficient for specific queries.",
    explanationChinese: "后向链接是目标驱动的：它从查询开始，递归地通过找到结论匹配查询的规则来证明它，然后证明前提。这是Prolog使用的策略。它避免推导不相关的事实，使其对特定查询高效。",
    diagram: "",
    terms: ["backward_chaining", "inference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 137,
    q: "The truth table method for checking entailment has complexity:",
    qChinese: "检查蕴含的真值表方法的复杂度为：",
    options: [
      "A) O(n)",
      "B) O(n^2)",
      "C) O(2^n) where n is the number of propositional symbols",
      "D) O(n log n)"
    ],
    optionsChinese: [
      "A) O(n)",
      "B) O(n^2)",
      "C) O(2^n)，其中n是命题符号的数量",
      "D) O(n log n)"
    ],
    answer: 2,
    explanation: "Truth table enumeration checks all possible truth assignments, which is 2^n for n propositional symbols. Each row takes polynomial time to evaluate, giving O(2^n) overall. This exponential complexity makes truth tables impractical for large formulas, motivating more efficient methods like DPLL.",
    explanationChinese: "真值表枚举检查所有可能的真值赋值，对于n个命题符号为2^n。每行需要多项式时间评估，总体为O(2^n)。这种指数复杂度使真值表对大型公式不实际，促使开发DPLL等更高效的方法。",
    diagram: "",
    terms: ["propositional_logic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 138,
    q: "The DPLL algorithm improves naive truth-table enumeration for SAT by using:",
    qChinese: "DPLL算法通过使用以下技术改进了SAT的朴素真值表枚举：",
    options: [
      "A) Random assignment only",
      "B) Breadth-first search",
      "C) Greedy search only",
      "D) Early termination, pure literal elimination, and unit propagation"
    ],
    optionsChinese: [
      "A) 仅随机赋值",
      "B) 广度优先搜索",
      "C) 仅贪婪搜索",
      "D) 提前终止、纯文字消除和单元传播"
    ],
    answer: 3,
    explanation: "DPLL enhances truth-table search with three key optimizations: early termination (stop if clause is satisfied or empty), pure literal elimination (assign pure literals to make their clauses true), and unit propagation (forced assignments from unit clauses). These dramatically prune the search space.",
    explanationChinese: "DPLL通过三个关键优化增强真值表搜索：提前终止（如果子句被满足或为空则停止）、纯文字消除（分配纯文字使其子句为真）和单元传播（从单元子句的强制赋值）。这些大大修剪了搜索空间。",
    diagram: "",
    terms: ["propositional_logic", "inference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 139,
    q: "In first-order logic, the sentence ∀x ∃y Loves(x, y) means:",
    qChinese: "在一阶逻辑中，句子∀x ∃y Loves(x, y)意味着：",
    options: [
      "A) There is someone who loves everyone",
      "B) Someone loves themselves",
      "C) No one loves anyone",
      "D) Everyone loves someone (possibly different people)"
    ],
    optionsChinese: [
      "A) 有人爱所有人",
      "B) 有人爱自己",
      "C) 没有人爱任何人",
      "D) 每个人都爱某人（可能是不同的人）"
    ],
    answer: 3,
    explanation: "Reading from left to right: for every person x, there exists some person y such that x loves y. The existential y can be different for each x. Contrast with ∃y ∀x Loves(x, y), which means there is a single person whom everyone loves—order of quantifiers matters critically.",
    explanationChinese: "从左到右阅读：对于每个人x，存在某个人y使得x爱y。存在的y对于每个x可以不同。与∃y ∀x Loves(x, y)对比，后者意味着存在一个所有人都爱的人——量词的顺序至关重要。",
    diagram: "",
    terms: ["first_order_logic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 140,
    q: "A function symbol in first-order logic differs from a predicate by:",
    qChinese: "一阶逻辑中的函数符号与谓词的区别在于：",
    options: [
      "A) They are the same thing",
      "B) Functions return true/false; predicates return objects",
      "C) Functions return an object; predicates return true/false",
      "D) Functions take no arguments"
    ],
    optionsChinese: [
      "A) 它们是同一事物",
      "B) 函数返回真/假；谓词返回对象",
      "C) 函数返回对象；谓词返回真/假",
      "D) 函数不接受参数"
    ],
    answer: 2,
    explanation: "In FOL, function symbols map objects to objects (e.g., Father(John) returns an object), while predicates map objects to truth values (e.g., Tall(John) is true or false). Functions allow complex terms to be constructed, enabling more expressive knowledge representation.",
    explanationChinese: "在FOL中，函数符号将对象映射到对象（例如，Father(John)返回一个对象），而谓词将对象映射到真值（例如，Tall(John)为真或假）。函数允许构建复杂的项，实现更具表达力的知识表示。",
    diagram: "",
    terms: ["first_order_logic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 141,
    q: "An interpretation in first-order logic specifies:",
    qChinese: "一阶逻辑中的解释指定了：",
    options: [
      "A) A domain of objects and mappings for constants, functions, and predicates",
      "B) Only the truth values of sentences",
      "C) Only the variables",
      "D) The proof procedure"
    ],
    optionsChinese: [
      "A) 对象域以及常量、函数和谓词的映射",
      "B) 仅句子的真值",
      "C) 仅变量",
      "D) 证明过程"
    ],
    answer: 0,
    explanation: "An interpretation (or model) in FOL specifies: a non-empty domain of objects, a mapping from each constant to a domain element, each function to an appropriate function on the domain, and each predicate to a relation. Given an interpretation, every closed sentence has a definite truth value.",
    explanationChinese: "FOL中的解释（或模型）指定：一个非空对象域，每个常量到域元素的映射，每个函数到域上适当函数的映射，每个谓词到关系的映射。给定解释，每个闭句子都有确定的真值。",
    diagram: "",
    terms: ["first_order_logic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 142,
    q: "Lifting in first-order logic inference refers to:",
    qChinese: "一阶逻辑推理中的提升指的是：",
    options: [
      "A) Moving sentences from one KB to another",
      "B) Removing quantifiers",
      "C) Applying inference rules directly to FOL sentences using unification instead of propositionalization",
      "D) Converting to propositional logic"
    ],
    optionsChinese: [
      "A) 将句子从一个KB移到另一个",
      "B) 移除量词",
      "C) 使用合一而非命题化直接对FOL句子应用推理规则",
      "D) 转换为命题逻辑"
    ],
    answer: 2,
    explanation: "Lifting raises propositional inference rules to first-order logic by using unification to match variables to terms directly, avoiding the need to generate all ground instances (propositionalization). Lifted resolution and lifted forward/backward chaining are much more efficient than ground-level inference.",
    explanationChinese: "提升通过使用合一直接将变量匹配到项，将命题推理规则提升到一阶逻辑，避免了生成所有基实例（命题化）的需要。提升的消解和提升的前向/后向链接比基级推理高效得多。",
    diagram: "",
    terms: ["first_order_logic", "inference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 143,
    q: "The biconditional P <=> Q is true when:",
    qChinese: "双条件P <=> Q为真，当：",
    options: [
      "A) P is true and Q is false",
      "B) P and Q have the same truth value",
      "C) P and Q are both false only",
      "D) Either P or Q is true but not both"
    ],
    optionsChinese: [
      "A) P为真且Q为假",
      "B) P和Q具有相同的真值",
      "C) 仅当P和Q都为假",
      "D) P或Q之一为真但不是两者"
    ],
    answer: 1,
    explanation: "The biconditional P <=> Q (P if and only if Q) is true when both P and Q are true or both are false. It is equivalent to (P => Q) AND (Q => P). The biconditional expresses that two statements are logically equivalent—they have the same truth value in every model.",
    explanationChinese: "双条件P <=> Q（P当且仅当Q）在P和Q都为真或都为假时为真。它等价于(P => Q) AND (Q => P)。双条件表达两个陈述逻辑等价——它们在每个模型中具有相同的真值。",
    diagram: "",
    terms: ["propositional_logic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 144,
    q: "The Herbrand universe of a first-order theory is:",
    qChinese: "一阶理论的Herbrand域是：",
    options: [
      "A) The set of all real numbers",
      "B) The set of all ground terms constructible from constants and functions",
      "C) An empty set",
      "D) The set of all predicates"
    ],
    optionsChinese: [
      "A) 所有实数的集合",
      "B) 从常量和函数可构造的所有基项的集合",
      "C) 空集",
      "D) 所有谓词的集合"
    ],
    answer: 1,
    explanation: "The Herbrand universe contains all ground terms formed from the constants and function symbols in the language. If there is a function f and constant a, it includes a, f(a), f(f(a)), etc. Herbrand's theorem states that if a set of clauses is unsatisfiable, it is unsatisfiable over the Herbrand universe.",
    explanationChinese: "Herbrand域包含由语言中的常量和函数符号形成的所有基项。如果有函数f和常量a，它包括a、f(a)、f(f(a))等。Herbrand定理指出，如果一组子句不可满足，它在Herbrand域上也不可满足。",
    diagram: "",
    terms: ["first_order_logic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 145,
    q: "The difference between sound and complete inference is:",
    qChinese: "健全推理和完备推理的区别是：",
    options: [
      "A) Sound uses FOL; complete uses propositional logic",
      "B) Sound is faster; complete is slower",
      "C) They are identical",
      "D) Sound derives only true conclusions; complete derives all true conclusions"
    ],
    optionsChinese: [
      "A) 健全使用FOL；完备使用命题逻辑",
      "B) 健全更快；完备更慢",
      "C) 它们是相同的",
      "D) 健全只推导真结论；完备推导所有真结论"
    ],
    answer: 3,
    explanation: "A sound inference procedure never derives false conclusions from true premises (no false positives). A complete inference procedure can derive every entailed sentence (no false negatives). Ideally both, resolution is sound and refutation-complete for both propositional and first-order logic.",
    explanationChinese: "健全的推理过程永远不会从真前提推导出假结论（没有假阳性）。完备的推理过程可以推导出每个被蕴含的句子（没有假阴性）。理想情况下两者兼具，消解对命题逻辑和一阶逻辑都是健全且反驳完备的。",
    diagram: "",
    terms: ["inference", "propositional_logic", "first_order_logic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 146,
    q: "Knowledge representation in AI involves:",
    qChinese: "AI中的知识表示涉及：",
    options: [
      "A) Storing raw data only",
      "B) Encoding information about the world in a form that a reasoning system can use",
      "C) Deleting knowledge",
      "D) Only using numbers"
    ],
    optionsChinese: [
      "A) 仅存储原始数据",
      "B) 将关于世界的信息编码为推理系统可以使用的形式",
      "C) 删除知识",
      "D) 仅使用数字"
    ],
    answer: 1,
    explanation: "Knowledge representation encodes facts, rules, and relationships about the world into formal structures (logic, frames, semantic networks, ontologies) that AI systems can process for reasoning, planning, and decision-making. The choice of representation affects what inferences are possible and efficient.",
    explanationChinese: "知识表示将关于世界的事实、规则和关系编码为AI系统可以处理以进行推理、规划和决策的形式结构（逻辑、框架、语义网络、本体）。表示的选择影响哪些推理是可能的和高效的。",
    diagram: "",
    terms: ["knowledge_representation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 147,
    q: "A semantic network represents knowledge using:",
    qChinese: "语义网络使用以下方式表示知识：",
    options: [
      "A) Nodes for concepts and labeled edges for relationships",
      "B) Truth tables",
      "C) Random numbers",
      "D) Only text strings"
    ],
    optionsChinese: [
      "A) 概念节点和标记关系的边",
      "B) 真值表",
      "C) 随机数",
      "D) 仅文本字符串"
    ],
    answer: 0,
    explanation: "Semantic networks use graph structures where nodes represent concepts, objects, or events, and labeled directed edges represent relationships between them (is-a, has-part, etc.). They provide an intuitive way to visualize and navigate hierarchical and relational knowledge.",
    explanationChinese: "语义网络使用图结构，其中节点表示概念、对象或事件，标记的有向边表示它们之间的关系（是-一种、有-部分等）。它们提供了一种直观的方式来可视化和导航层次化和关系知识。",
    diagram: "",
    terms: ["knowledge_representation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 148,
    q: "An ontology in AI defines:",
    qChinese: "AI中的本体定义了：",
    options: [
      "A) A formal specification of concepts, categories, and their relationships in a domain",
      "B) Programming languages",
      "C) Neural network architectures",
      "D) Database schemas only"
    ],
    optionsChinese: [
      "A) 领域中概念、类别及其关系的正式规范",
      "B) 编程语言",
      "C) 神经网络架构",
      "D) 仅数据库模式"
    ],
    answer: 0,
    explanation: "An ontology is a formal, explicit specification of a shared conceptualization. It defines the types of entities, properties, and relationships in a domain. Ontologies enable knowledge sharing, reuse, and interoperability between AI systems. OWL is a standard language for web ontologies.",
    explanationChinese: "本体是共享概念化的正式、明确规范。它定义了领域中的实体类型、属性和关系。本体支持AI系统之间的知识共享、重用和互操作性。OWL是Web本体的标准语言。",
    diagram: "",
    terms: ["knowledge_representation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 149,
    q: "An expert system consists of:",
    qChinese: "专家系统由以下组成：",
    options: [
      "A) Only a database",
      "B) A single neural network",
      "C) A knowledge base of rules and an inference engine",
      "D) Only user input"
    ],
    optionsChinese: [
      "A) 仅数据库",
      "B) 单个神经网络",
      "C) 规则知识库和推理引擎",
      "D) 仅用户输入"
    ],
    answer: 2,
    explanation: "An expert system has two main components: a knowledge base containing domain-specific rules (often if-then rules from human experts) and an inference engine that applies these rules to draw conclusions. MYCIN (medical diagnosis) and DENDRAL (chemistry) were pioneering expert systems.",
    explanationChinese: "专家系统有两个主要组件：包含领域特定规则（通常是来自人类专家的如果-那么规则）的知识库和应用这些规则来得出结论的推理引擎。MYCIN（医学诊断）和DENDRAL（化学）是开创性的专家系统。",
    diagram: "",
    terms: ["expert_system", "knowledge_representation", "inference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 150,
    q: "Frames in knowledge representation are:",
    qChinese: "知识表示中的框架是：",
    options: [
      "A) Video frames",
      "B) Only used in games",
      "C) Empty containers",
      "D) Structured data objects with slots for attributes and default values"
    ],
    optionsChinese: [
      "A) 视频帧",
      "B) 仅用于博弈",
      "C) 空容器",
      "D) 具有属性槽和默认值的结构化数据对象"
    ],
    answer: 3,
    explanation: "Frames are data structures for representing stereotyped situations. Each frame has slots (attributes) that can be filled with values, defaults, or procedures. Frames support inheritance: a 'student' frame inherits slots from a 'person' frame. They influenced object-oriented programming concepts.",
    explanationChinese: "框架是表示刻板情况的数据结构。每个框架有可以填充值、默认值或过程的槽（属性）。框架支持继承：'学生'框架从'人'框架继承槽。它们影响了面向对象编程概念。",
    diagram: "",
    terms: ["knowledge_representation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 151,
    q: "The difference between forward chaining and backward chaining is:",
    qChinese: "前向链接和后向链接的区别是：",
    options: [
      "A) Forward is goal-driven; backward is data-driven",
      "B) Both are the same",
      "C) Forward is data-driven; backward is goal-driven",
      "D) Forward uses DFS; backward uses BFS"
    ],
    optionsChinese: [
      "A) 前向是目标驱动的；后向是数据驱动的",
      "B) 两者相同",
      "C) 前向是数据驱动的；后向是目标驱动的",
      "D) 前向使用DFS；后向使用BFS"
    ],
    answer: 2,
    explanation: "Forward chaining starts from known facts and derives new conclusions (data-driven), useful when monitoring or generating all consequences. Backward chaining starts from a goal and finds rules that could prove it (goal-driven), efficient when answering specific queries. Prolog uses backward chaining.",
    explanationChinese: "前向链接从已知事实开始推导新结论（数据驱动），适用于监控或生成所有后果。后向链接从目标开始找到可以证明它的规则（目标驱动），在回答特定查询时高效。Prolog使用后向链接。",
    diagram: "",
    terms: ["forward_chaining", "backward_chaining", "inference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 152,
    q: "Non-monotonic reasoning allows:",
    qChinese: "非单调推理允许：",
    options: [
      "A) Retracting previously derived conclusions when new information arrives",
      "B) Only adding new conclusions",
      "C) No reasoning at all",
      "D) Only deductive reasoning"
    ],
    optionsChinese: [
      "A) 当新信息到达时撤回先前推导的结论",
      "B) 仅添加新结论",
      "C) 完全不推理",
      "D) 仅演绎推理"
    ],
    answer: 0,
    explanation: "Non-monotonic reasoning allows beliefs to be retracted when new evidence contradicts them. In classical (monotonic) logic, adding facts never invalidates existing conclusions. Real-world reasoning is often non-monotonic: learning that Tweety is a penguin retracts the conclusion that Tweety flies.",
    explanationChinese: "非单调推理允许当新证据与信念矛盾时撤回信念。在经典（单调）逻辑中，添加事实永远不会使现有结论无效。现实世界推理通常是非单调的：得知Tweety是企鹅会撤回Tweety会飞的结论。",
    diagram: "",
    terms: ["knowledge_representation", "inference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 153,
    q: "The Rete algorithm is used for efficient:",
    qChinese: "Rete算法用于高效的：",
    options: [
      "A) Sorting",
      "B) Image processing",
      "C) Graph traversal",
      "D) Pattern matching in rule-based systems"
    ],
    optionsChinese: [
      "A) 排序",
      "B) 图像处理",
      "C) 图遍历",
      "D) 基于规则系统中的模式匹配"
    ],
    answer: 3,
    explanation: "The Rete algorithm efficiently matches facts against rule conditions in production systems. It builds a network of nodes that share common conditions across rules, avoiding redundant pattern matching. This makes forward chaining practical for knowledge bases with many rules and facts.",
    explanationChinese: "Rete算法在产生式系统中高效地将事实与规则条件匹配。它构建一个节点网络，在规则间共享公共条件，避免冗余模式匹配。这使前向链接对于有许多规则和事实的知识库变得实用。",
    diagram: "",
    terms: ["forward_chaining", "inference", "expert_system"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 154,
    q: "Abductive reasoning in AI infers:",
    qChinese: "AI中的溯因推理推断：",
    options: [
      "A) The best explanation for observed facts",
      "B) General rules from examples",
      "C) Nothing useful",
      "D) Only mathematical proofs"
    ],
    optionsChinese: [
      "A) 对观察到的事实的最佳解释",
      "B) 从例子中推出一般规则",
      "C) 没有有用的东西",
      "D) 仅数学证明"
    ],
    answer: 0,
    explanation: "Abduction infers the most likely explanation for observations. Given rule 'if A then B' and observed B, abduction suggests A as an explanation. Unlike deduction (guaranteed truth), abduction is uncertain but essential for diagnosis, hypothesis formation, and everyday commonsense reasoning.",
    explanationChinese: "溯因推断对观察的最可能解释。给定规则'如果A则B'和观察到的B，溯因建议A作为解释。与演绎（保证真值）不同，溯因是不确定的，但对诊断、假设形成和日常常识推理至关重要。",
    diagram: "",
    terms: ["inference", "knowledge_representation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 155,
    q: "Description logics are used primarily for:",
    qChinese: "描述逻辑主要用于：",
    options: [
      "A) Defining and reasoning about ontologies and knowledge bases",
      "B) Game playing",
      "C) Image generation",
      "D) Sorting algorithms"
    ],
    optionsChinese: [
      "A) 定义和推理本体和知识库",
      "B) 博弈",
      "C) 图像生成",
      "D) 排序算法"
    ],
    answer: 0,
    explanation: "Description logics (DLs) are a family of logic-based formalisms for representing ontological knowledge. They balance expressiveness and computational tractability, enabling automated reasoning about class hierarchies and instance relationships. OWL-DL, used in the Semantic Web, is based on description logics.",
    explanationChinese: "描述逻辑（DL）是用于表示本体知识的一系列基于逻辑的形式化方法。它们平衡表达力和计算可处理性，支持关于类层次结构和实例关系的自动推理。语义Web中使用的OWL-DL基于描述逻辑。",
    diagram: "",
    terms: ["knowledge_representation", "inference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 156,
    q: "The frame problem in AI refers to:",
    qChinese: "AI中的框架问题指的是：",
    options: [
      "A) Displaying frames on screen",
      "B) The difficulty of representing what does NOT change when an action is performed",
      "C) Building picture frames",
      "D) Frame rate in video games"
    ],
    optionsChinese: [
      "A) 在屏幕上显示框架",
      "B) 当执行动作时表示什么不会改变的困难",
      "C) 制作相框",
      "D) 视频游戏的帧率"
    ],
    answer: 1,
    explanation: "The frame problem is the challenge of efficiently specifying what remains unchanged when an action occurs. If there are many facts and few actions, explicitly listing all non-effects is cumbersome. Solutions include the STRIPS assumption (everything not mentioned stays the same) and successor-state axioms.",
    explanationChinese: "框架问题是当动作发生时有效指定什么保持不变的挑战。如果有许多事实和少量动作，明确列出所有非效果是繁琐的。解决方案包括STRIPS假设（未提到的一切保持不变）和后继状态公理。",
    diagram: "",
    terms: ["knowledge_representation", "planning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 157,
    q: "A production system (rule-based system) consists of:",
    qChinese: "产生式系统（基于规则的系统）由以下组成：",
    options: [
      "A) Only facts",
      "B) A set of if-then rules, a working memory, and an inference engine",
      "C) Only procedures",
      "D) A single decision tree"
    ],
    optionsChinese: [
      "A) 仅事实",
      "B) 一组如果-那么规则、工作内存和推理引擎",
      "C) 仅过程",
      "D) 单个决策树"
    ],
    answer: 1,
    explanation: "A production system has: production rules (condition-action pairs), working memory (current facts/state), and an inference engine that matches rule conditions to working memory and fires applicable rules. The recognize-act cycle repeats until no rules fire or a goal is reached.",
    explanationChinese: "产生式系统有：产生式规则（条件-动作对）、工作内存（当前事实/状态）和将规则条件与工作内存匹配并触发适用规则的推理引擎。识别-执行循环重复直到没有规则触发或达到目标。",
    diagram: "",
    terms: ["expert_system", "inference", "knowledge_representation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 158,
    q: "Inheritance in knowledge representation allows:",
    qChinese: "知识表示中的继承允许：",
    options: [
      "A) Subclasses to inherit properties from superclasses",
      "B) Copying files",
      "C) Deleting all properties",
      "D) Random property assignment"
    ],
    optionsChinese: [
      "A) 子类从超类继承属性",
      "B) 复制文件",
      "C) 删除所有属性",
      "D) 随机属性分配"
    ],
    answer: 0,
    explanation: "Inheritance allows subclasses to automatically have all properties of their parent classes unless explicitly overridden. A 'canary' inherits 'can-fly' from 'bird.' This reduces redundancy and enables default reasoning. Exceptions (penguins can't fly) are handled by overriding inherited values.",
    explanationChinese: "继承允许子类自动具有其父类的所有属性，除非明确覆盖。'金丝雀'从'鸟'继承'能飞'。这减少冗余并支持默认推理。异常（企鹅不能飞）通过覆盖继承的值来处理。",
    diagram: "",
    terms: ["knowledge_representation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 159,
    q: "The situation calculus represents:",
    qChinese: "情境演算表示：",
    options: [
      "A) Only static facts",
      "B) How the world changes through actions using situations as states",
      "C) Probabilities",
      "D) Neural network weights"
    ],
    optionsChinese: [
      "A) 仅静态事实",
      "B) 使用情境作为状态来表示世界如何通过动作改变",
      "C) 概率",
      "D) 神经网络权重"
    ],
    answer: 1,
    explanation: "Situation calculus is a FOL formalism for dynamic worlds. It uses situations (state snapshots), actions that transform situations, and fluents (properties that change). The function Result(action, situation) returns the new situation. It provides a logical foundation for reasoning about action and change.",
    explanationChinese: "情境演算是用于动态世界的FOL形式化方法。它使用情境（状态快照）、转换情境的动作和流（变化的属性）。函数Result(action, situation)返回新情境。它为推理动作和变化提供逻辑基础。",
    diagram: "",
    terms: ["knowledge_representation", "first_order_logic", "planning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 160,
    q: "Default logic allows reasoning with:",
    qChinese: "缺省逻辑允许使用以下进行推理：",
    options: [
      "A) Only certain knowledge",
      "B) No assumptions",
      "C) Assumptions that hold unless contradicted by evidence",
      "D) Random defaults"
    ],
    optionsChinese: [
      "A) 仅确定知识",
      "B) 没有假设",
      "C) 除非被证据反驳否则成立的假设",
      "D) 随机默认值"
    ],
    answer: 2,
    explanation: "Default logic extends classical logic with default rules of the form: if A is believed and B is consistent, then conclude C. This enables conclusions based on typical cases (birds fly) while allowing exceptions (penguins don't). It is a key formalism for non-monotonic reasoning.",
    explanationChinese: "缺省逻辑用默认规则扩展经典逻辑：如果A被相信且B是一致的，则得出C。这支持基于典型情况的结论（鸟会飞），同时允许例外（企鹅不飞）。它是非单调推理的关键形式化方法。",
    diagram: "",
    terms: ["knowledge_representation", "inference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 161,
    q: "The knowledge acquisition bottleneck refers to:",
    qChinese: "知识获取瓶颈指的是：",
    options: [
      "A) Fast knowledge input",
      "B) Automatic knowledge generation",
      "C) Too much knowledge available",
      "D) The difficulty of extracting and formalizing expert knowledge"
    ],
    optionsChinese: [
      "A) 快速知识输入",
      "B) 自动知识生成",
      "C) 可用知识太多",
      "D) 提取和形式化专家知识的困难"
    ],
    answer: 3,
    explanation: "The knowledge acquisition bottleneck is the primary challenge in building expert systems: extracting knowledge from human experts and encoding it into formal rules is time-consuming, error-prone, and expensive. This motivated research into machine learning as an alternative to manual knowledge engineering.",
    explanationChinese: "知识获取瓶颈是构建专家系统的主要挑战：从人类专家提取知识并将其编码为正式规则是耗时的、容易出错的且昂贵的。这促使研究机器学习作为手动知识工程的替代方案。",
    diagram: "",
    terms: ["expert_system", "knowledge_representation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 162,
    q: "An inference engine in an expert system:",
    qChinese: "专家系统中的推理引擎：",
    options: [
      "A) Stores facts only",
      "B) Displays the user interface",
      "C) Applies rules from the knowledge base to derive conclusions",
      "D) Compresses data"
    ],
    optionsChinese: [
      "A) 仅存储事实",
      "B) 显示用户界面",
      "C) 应用知识库中的规则来推导结论",
      "D) 压缩数据"
    ],
    answer: 2,
    explanation: "The inference engine is the reasoning component of an expert system. It selects and applies rules from the knowledge base using forward chaining, backward chaining, or both. It also handles conflict resolution when multiple rules are applicable, determining which rule to fire first.",
    explanationChinese: "推理引擎是专家系统的推理组件。它使用前向链接、后向链接或两者来选择和应用知识库中的规则。它还处理当多个规则适用时的冲突消解，确定先触发哪个规则。",
    diagram: "",
    terms: ["expert_system", "inference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 163,
    q: "Truth maintenance systems (TMS) track:",
    qChinese: "真值维护系统（TMS）跟踪：",
    options: [
      "A) The justifications for beliefs to support belief revision",
      "B) Network traffic",
      "C) File system changes",
      "D) User preferences"
    ],
    optionsChinese: [
      "A) 信念的理由以支持信念修正",
      "B) 网络流量",
      "C) 文件系统更改",
      "D) 用户偏好"
    ],
    answer: 0,
    explanation: "A TMS records why each belief is held (its justifications). When new information contradicts an existing belief, the TMS traces dependencies to retract the belief and all conclusions derived from it. This supports non-monotonic reasoning and efficient belief revision in knowledge-based systems.",
    explanationChinese: "TMS记录每个信念被持有的原因（其理由）。当新信息与现有信念矛盾时，TMS追踪依赖关系以撤回信念及其所有推导出的结论。这支持知识系统中的非单调推理和高效信念修正。",
    diagram: "",
    terms: ["knowledge_representation", "inference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 164,
    q: "The qualification problem in AI states that:",
    qChinese: "AI中的限定问题指出：",
    options: [
      "A) It is impossible to list all preconditions for an action to succeed",
      "B) All rules are simple",
      "C) Every action always succeeds",
      "D) Actions have no effects"
    ],
    optionsChinese: [
      "A) 不可能列出动作成功的所有前提条件",
      "B) 所有规则都很简单",
      "C) 每个动作总是成功",
      "D) 动作没有效果"
    ],
    answer: 0,
    explanation: "The qualification problem highlights that real-world actions have potentially infinite preconditions that are impossible to enumerate completely. For example, 'turning the key starts the car' assumes the engine works, there is fuel, the battery is charged, etc. This is a fundamental challenge for logical AI.",
    explanationChinese: "限定问题强调现实世界的动作有可能无限的前提条件，不可能完全列举。例如，'转动钥匙启动汽车'假设引擎工作、有燃料、电池有电等。这是逻辑AI的基本挑战。",
    diagram: "",
    terms: ["knowledge_representation", "planning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 165,
    q: "Conceptual graphs represent knowledge as:",
    qChinese: "概念图将知识表示为：",
    options: [
      "A) Bar charts",
      "B) Decision trees",
      "C) Scatter plots",
      "D) Bipartite graphs with concept nodes and relation nodes"
    ],
    optionsChinese: [
      "A) 条形图",
      "B) 决策树",
      "C) 散点图",
      "D) 具有概念节点和关系节点的二部图"
    ],
    answer: 3,
    explanation: "Conceptual graphs are a knowledge representation formalism using bipartite graphs where concept nodes represent entities or events, and relation nodes represent relationships between concepts. They can be mapped to/from first-order logic and provide a visual, structured way to represent meaning.",
    explanationChinese: "概念图是一种知识表示形式化方法，使用二部图，其中概念节点表示实体或事件，关系节点表示概念之间的关系。它们可以映射到/从一阶逻辑，并提供一种可视化的结构化方式来表示含义。",
    diagram: "",
    terms: ["knowledge_representation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 166,
    q: "A knowledge base differs from a database in that it supports:",
    qChinese: "知识库与数据库的不同之处在于它支持：",
    options: [
      "A) Inference and deriving new facts from existing ones",
      "B) Only data storage",
      "C) Only SQL queries",
      "D) Less functionality"
    ],
    optionsChinese: [
      "A) 推理和从现有事实推导新事实",
      "B) 仅数据存储",
      "C) 仅SQL查询",
      "D) 更少的功能"
    ],
    answer: 0,
    explanation: "While databases store and retrieve explicit data, knowledge bases also support inference: deriving new facts from stored knowledge using rules and logic. A knowledge base with the fact 'Socrates is human' and rule 'All humans are mortal' can infer 'Socrates is mortal' without it being stored explicitly.",
    explanationChinese: "数据库存储和检索显式数据，而知识库还支持推理：使用规则和逻辑从存储的知识推导新事实。一个有'苏格拉底是人'的事实和'所有人都是凡人'的规则的知识库可以推断'苏格拉底是凡人'而无需显式存储。",
    diagram: "",
    terms: ["knowledge_representation", "inference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 167,
    q: "The CYC project aimed to:",
    qChinese: "CYC项目旨在：",
    options: [
      "A) Build a game-playing AI",
      "B) Encode millions of common-sense facts and rules into a knowledge base",
      "C) Design a new programming language",
      "D) Create a web browser"
    ],
    optionsChinese: [
      "A) 构建博弈AI",
      "B) 将数百万常识事实和规则编码到知识库中",
      "C) 设计新的编程语言",
      "D) 创建网络浏览器"
    ],
    answer: 1,
    explanation: "The CYC project, started by Doug Lenat in 1984, is one of the longest-running AI projects. It aims to build a comprehensive common-sense knowledge base that enables human-like reasoning. CYC has encoded millions of everyday facts, rules, and heuristics in its knowledge representation language.",
    explanationChinese: "CYC项目由Doug Lenat于1984年启动，是运行时间最长的AI项目之一。它旨在构建一个全面的常识知识库，使类人推理成为可能。CYC在其知识表示语言中编码了数百万日常事实、规则和启发式。",
    diagram: "",
    terms: ["knowledge_representation", "expert_system"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 168,
    q: "The monotonicity property of classical logic means:",
    qChinese: "经典逻辑的单调性属性意味着：",
    options: [
      "A) Adding facts can invalidate conclusions",
      "B) Conclusions decrease over time",
      "C) If KB entails α, then KB plus any new fact still entails α",
      "D) The KB becomes smaller"
    ],
    optionsChinese: [
      "A) 添加事实可以使结论无效",
      "B) 结论随时间减少",
      "C) 如果KB蕴含α，则KB加上任何新事实仍然蕴含α",
      "D) KB变得更小"
    ],
    answer: 2,
    explanation: "Monotonicity means that adding new sentences to a knowledge base can never invalidate previously derived conclusions. This is a fundamental property of classical logic but is unrealistic for many real-world applications where new information should be able to override old conclusions.",
    explanationChinese: "单调性意味着向知识库添加新句子永远不会使先前推导的结论无效。这是经典逻辑的基本属性，但对于许多新信息应能覆盖旧结论的现实应用来说是不切实际的。",
    diagram: "",
    terms: ["inference", "propositional_logic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 169,
    q: "A rule-based system uses conflict resolution to:",
    qChinese: "基于规则的系统使用冲突消解来：",
    options: [
      "A) Delete all rules",
      "B) Add more rules",
      "C) Choose which rule to fire when multiple rules are applicable",
      "D) Ignore all conflicts"
    ],
    optionsChinese: [
      "A) 删除所有规则",
      "B) 添加更多规则",
      "C) 当多个规则适用时选择触发哪个规则",
      "D) 忽略所有冲突"
    ],
    answer: 2,
    explanation: "When multiple rules match the current state in a production system, conflict resolution strategies determine which rule fires. Common strategies include: specificity (prefer more specific rules), recency (prefer rules matching recent facts), and priority (assigned rule priorities). The choice affects system behavior.",
    explanationChinese: "当产生式系统中多个规则匹配当前状态时，冲突消解策略决定触发哪个规则。常见策略包括：特殊性（优先更具体的规则）、新近性（优先匹配最近事实的规则）和优先级（分配的规则优先级）。选择影响系统行为。",
    diagram: "",
    terms: ["expert_system", "inference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 170,
    q: "The Wumpus World is a classic AI testbed that demonstrates:",
    qChinese: "Wumpus世界是一个经典的AI测试平台，展示了：",
    options: [
      "A) Image recognition",
      "B) Logical reasoning under partial observability",
      "C) Sorting algorithms",
      "D) Natural language processing"
    ],
    optionsChinese: [
      "A) 图像识别",
      "B) 部分可观测下的逻辑推理",
      "C) 排序算法",
      "D) 自然语言处理"
    ],
    answer: 1,
    explanation: "The Wumpus World is a cave environment where an agent uses logical reasoning to navigate safely. The agent senses breezes (near pits) and stenches (near the Wumpus) and uses propositional or first-order logic to infer safe squares. It demonstrates knowledge-based agent design under uncertainty.",
    explanationChinese: "Wumpus世界是一个洞穴环境，智能体使用逻辑推理安全导航。智能体感知微风（靠近陷阱）和恶臭（靠近Wumpus）并使用命题或一阶逻辑推断安全的格子。它展示了不确定性下基于知识的智能体设计。",
    diagram: "",
    terms: ["knowledge_representation", "inference", "propositional_logic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 171,
    q: "Bayes' theorem relates P(A|B) to:",
    qChinese: "贝叶斯定理将P(A|B)关联到：",
    options: [
      "A) P(B) only",
      "B) P(B|A) * P(A) / P(B)",
      "C) P(A) + P(B)",
      "D) P(A) * P(B)"
    ],
    optionsChinese: [
      "A) 仅P(B)",
      "B) P(B|A) * P(A) / P(B)",
      "C) P(A) + P(B)",
      "D) P(A) * P(B)"
    ],
    answer: 1,
    explanation: "Bayes' theorem: P(A|B) = P(B|A) * P(A) / P(B). It allows computing the posterior probability P(A|B) from the likelihood P(B|A), prior P(A), and evidence P(B). This is fundamental to probabilistic reasoning, medical diagnosis, spam filtering, and Bayesian network inference.",
    explanationChinese: "贝叶斯定理：P(A|B) = P(B|A) * P(A) / P(B)。它允许从似然P(B|A)、先验P(A)和证据P(B)计算后验概率P(A|B)。这是概率推理、医学诊断、垃圾邮件过滤和贝叶斯网络推理的基础。",
    diagram: "",
    terms: ["bayesian_network", "inference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 172,
    q: "A Bayesian network encodes:",
    qChinese: "贝叶斯网络编码：",
    options: [
      "A) Deterministic rules only",
      "B) A joint probability distribution using a directed acyclic graph and conditional probability tables",
      "C) Only marginal probabilities",
      "D) Game strategies"
    ],
    optionsChinese: [
      "A) 仅确定性规则",
      "B) 使用有向无环图和条件概率表的联合概率分布",
      "C) 仅边际概率",
      "D) 博弈策略"
    ],
    answer: 1,
    explanation: "A Bayesian network (BN) is a DAG where nodes are random variables and edges represent direct probabilistic dependencies. Each node has a conditional probability table (CPT) specifying P(node|parents). The full joint distribution factors as the product of all CPTs, enabling compact representation.",
    explanationChinese: "贝叶斯网络（BN）是一个DAG，节点是随机变量，边表示直接概率依赖。每个节点有一个条件概率表（CPT），指定P(节点|父节点)。完整联合分布分解为所有CPT的乘积，实现紧凑表示。",
    diagram: "",
    terms: ["bayesian_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 173,
    q: "In a Bayesian network, two nodes are conditionally independent given their parents if:",
    qChinese: "在贝叶斯网络中，如果满足以下条件，两个节点在给定其父节点的情况下条件独立：",
    options: [
      "A) They have no common ancestors",
      "B) There is no active path between them given the evidence (d-separation)",
      "C) They are adjacent",
      "D) They have the same CPT"
    ],
    optionsChinese: [
      "A) 它们没有共同祖先",
      "B) 给定证据时它们之间没有活跃路径（d-分离）",
      "C) 它们相邻",
      "D) 它们有相同的CPT"
    ],
    answer: 1,
    explanation: "D-separation (directed separation) determines conditional independence in a BN. Two nodes are conditionally independent given evidence E if every path between them is blocked by E. A path is blocked if it contains a chain or fork node in E, or a collider node not in E (and none of its descendants).",
    explanationChinese: "D-分离（有向分离）确定BN中的条件独立性。如果两个节点之间的每条路径都被证据E阻断，则它们在给定E的情况下条件独立。如果路径包含E中的链或叉节点，或不在E中的碰撞节点（且其后代都不在E中），则路径被阻断。",
    diagram: "",
    terms: ["bayesian_network", "inference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 174,
    q: "The chain rule of probability states that P(A, B, C) equals:",
    qChinese: "概率的链式法则指出P(A, B, C)等于：",
    options: [
      "A) P(A) + P(B) + P(C)",
      "B) P(A) * P(B) * P(C)",
      "C) P(A) * P(B|A) * P(C|A,B)",
      "D) P(C|A) * P(B)"
    ],
    optionsChinese: [
      "A) P(A) + P(B) + P(C)",
      "B) P(A) * P(B) * P(C)",
      "C) P(A) * P(B|A) * P(C|A,B)",
      "D) P(C|A) * P(B)"
    ],
    answer: 2,
    explanation: "The chain rule decomposes any joint probability into a product of conditional probabilities: P(A,B,C) = P(A) * P(B|A) * P(C|A,B). Bayesian networks exploit conditional independencies to simplify this product, replacing P(C|A,B) with P(C|Parents(C)) when A is not a parent of C.",
    explanationChinese: "链式法则将任何联合概率分解为条件概率的乘积：P(A,B,C) = P(A) * P(B|A) * P(C|A,B)。贝叶斯网络利用条件独立性简化此乘积，当A不是C的父节点时用P(C|Parents(C))替换P(C|A,B)。",
    diagram: "",
    terms: ["bayesian_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 175,
    q: "Variable elimination in Bayesian networks works by:",
    qChinese: "贝叶斯网络中的变量消除通过以下方式工作：",
    options: [
      "A) Deleting all variables",
      "B) Adding more variables",
      "C) Summing out (marginalizing) hidden variables one at a time",
      "D) Only using prior probabilities"
    ],
    optionsChinese: [
      "A) 删除所有变量",
      "B) 添加更多变量",
      "C) 逐个对隐藏变量求和（边缘化）",
      "D) 仅使用先验概率"
    ],
    answer: 2,
    explanation: "Variable elimination computes exact posterior probabilities by systematically summing out hidden variables from the joint distribution, one variable at a time. The order of elimination affects efficiency. It avoids constructing the full joint table by working with smaller factors, making inference tractable for many BNs.",
    explanationChinese: "变量消除通过从联合分布中系统地逐个对隐藏变量求和来计算精确后验概率。消除顺序影响效率。它通过使用较小的因子来避免构建完整的联合表，使许多BN的推理可处理。",
    diagram: "",
    terms: ["bayesian_network", "inference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 176,
    q: "The 'explaining away' phenomenon in Bayesian networks occurs when:",
    qChinese: "贝叶斯网络中的'解释消除'现象发生在：",
    options: [
      "A) Two causes are always independent",
      "B) Observing one cause of an effect makes another cause less likely",
      "C) All variables become independent",
      "D) The network has no edges"
    ],
    optionsChinese: [
      "A) 两个原因总是独立的",
      "B) 观察到效果的一个原因使另一个原因不太可能",
      "C) 所有变量变得独立",
      "D) 网络没有边"
    ],
    answer: 1,
    explanation: "Explaining away is when two independent causes of the same effect become dependent once the effect is observed. If the grass is wet (effect), learning it rained (cause 1) makes it less likely the sprinkler was on (cause 2). This is a V-structure (collider) pattern in Bayesian networks.",
    explanationChinese: "解释消除是当同一效果的两个独立原因在效果被观察后变得相关。如果草地湿了（效果），得知下过雨（原因1）使洒水器开过的可能性降低（原因2）。这是贝叶斯网络中的V结构（碰撞器）模式。",
    diagram: "",
    terms: ["bayesian_network", "inference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 177,
    q: "Prior probability P(A) represents:",
    qChinese: "先验概率P(A)表示：",
    options: [
      "A) Probability of A given evidence",
      "B) The probability of evidence",
      "C) Probability of A before observing any evidence",
      "D) A constant value of 0.5"
    ],
    optionsChinese: [
      "A) 给定证据的A的概率",
      "B) 证据的概率",
      "C) 在观察任何证据之前A的概率",
      "D) 常数值0.5"
    ],
    answer: 2,
    explanation: "The prior probability P(A) is the initial belief about A before any evidence is observed. It reflects background knowledge or base rates. When evidence B is observed, Bayes' theorem updates the prior to the posterior P(A|B). Choosing appropriate priors is crucial in Bayesian reasoning.",
    explanationChinese: "先验概率P(A)是在观察任何证据之前关于A的初始信念。它反映背景知识或基准率。当观察到证据B时，贝叶斯定理将先验更新为后验P(A|B)。选择适当的先验在贝叶斯推理中至关重要。",
    diagram: "",
    terms: ["bayesian_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 178,
    q: "Exact inference in Bayesian networks is NP-hard in general because:",
    qChinese: "贝叶斯网络中的精确推理通常是NP难的，因为：",
    options: [
      "A) Computing posterior probabilities requires summing over exponentially many hidden variable configurations",
      "B) The network is always small",
      "C) All variables are observed",
      "D) The network has no edges"
    ],
    optionsChinese: [
      "A) 计算后验概率需要对指数级多的隐藏变量配置求和",
      "B) 网络总是小的",
      "C) 所有变量都被观察",
      "D) 网络没有边"
    ],
    answer: 0,
    explanation: "For general Bayesian networks, exact inference requires summing over all configurations of hidden variables, which is exponential in the number of hidden variables. The complexity depends on the tree-width of the network graph. For tree-structured BNs, inference is polynomial via message passing.",
    explanationChinese: "对于一般的贝叶斯网络，精确推理需要对隐藏变量的所有配置求和，这是隐藏变量数量的指数级。复杂度取决于网络图的树宽。对于树结构BN，推理通过消息传递是多项式的。",
    diagram: "",
    terms: ["bayesian_network", "inference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 179,
    q: "Gibbs sampling is an approximate inference method that:",
    qChinese: "Gibbs采样是一种近似推理方法，它：",
    options: [
      "A) Computes exact probabilities",
      "B) Uses only prior probabilities",
      "C) Deletes random variables",
      "D) Iteratively resamples each non-evidence variable conditioned on its Markov blanket"
    ],
    optionsChinese: [
      "A) 计算精确概率",
      "B) 仅使用先验概率",
      "C) 删除随机变量",
      "D) 迭代地重新采样每个非证据变量，条件为其马尔可夫毯"
    ],
    answer: 3,
    explanation: "Gibbs sampling is a Markov Chain Monte Carlo (MCMC) method. It initializes all non-evidence variables randomly, then iteratively resamples each one conditioned on its Markov blanket (parents, children, and children's other parents). Over many iterations, samples approximate the posterior distribution.",
    explanationChinese: "Gibbs采样是一种马尔可夫链蒙特卡洛（MCMC）方法。它随机初始化所有非证据变量，然后迭代地重新采样每个变量，条件为其马尔可夫毯（父节点、子节点和子节点的其他父节点）。经过多次迭代，样本近似后验分布。",
    diagram: "",
    terms: ["bayesian_network", "inference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 180,
    q: "The Markov blanket of a node in a Bayesian network includes:",
    qChinese: "贝叶斯网络中节点的马尔可夫毯包括：",
    options: [
      "A) All nodes in the network",
      "B) Only its children",
      "C) Only its parents",
      "D) Its parents, children, and children's other parents"
    ],
    optionsChinese: [
      "A) 网络中的所有节点",
      "B) 仅其子节点",
      "C) 仅其父节点",
      "D) 其父节点、子节点和子节点的其他父节点"
    ],
    answer: 3,
    explanation: "A node's Markov blanket consists of its parents, its children, and the other parents of its children (co-parents). Given its Markov blanket, a node is conditionally independent of all other nodes in the network. This property is exploited by Gibbs sampling and other local inference algorithms.",
    explanationChinese: "节点的马尔可夫毯由其父节点、子节点和子节点的其他父节点（共父）组成。给定其马尔可夫毯，节点与网络中所有其他节点条件独立。Gibbs采样和其他局部推理算法利用这一性质。",
    diagram: "",
    terms: ["bayesian_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 181,
    q: "A naive Bayes classifier assumes that:",
    qChinese: "朴素贝叶斯分类器假设：",
    options: [
      "A) All features are correlated",
      "B) There is no class variable",
      "C) All features are conditionally independent given the class label",
      "D) Features are always continuous"
    ],
    optionsChinese: [
      "A) 所有特征都是相关的",
      "B) 没有类变量",
      "C) 给定类标签，所有特征条件独立",
      "D) 特征总是连续的"
    ],
    answer: 2,
    explanation: "Naive Bayes assumes conditional independence of features given the class: P(features|class) = product of P(each feature|class). This simplifying assumption makes computation tractable and works surprisingly well for text classification, spam filtering, and many other applications despite being often violated.",
    explanationChinese: "朴素贝叶斯假设给定类的特征条件独立：P(特征|类) = P(每个特征|类)的乘积。这个简化假设使计算可处理，尽管经常被违反，但在文本分类、垃圾邮件过滤和许多其他应用中效果出奇地好。",
    diagram: "",
    terms: ["bayesian_network", "inference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 182,
    q: "A Hidden Markov Model (HMM) is a Bayesian network where:",
    qChinese: "隐马尔可夫模型（HMM）是一种贝叶斯网络，其中：",
    options: [
      "A) All variables are observed",
      "B) All transitions are deterministic",
      "C) There are no hidden variables",
      "D) Hidden states form a Markov chain and each state generates an observation"
    ],
    optionsChinese: [
      "A) 所有变量都被观察",
      "B) 所有转移都是确定性的",
      "C) 没有隐藏变量",
      "D) 隐藏状态形成马尔可夫链，每个状态生成一个观测"
    ],
    answer: 3,
    explanation: "An HMM has hidden state variables forming a temporal Markov chain (each state depends only on the previous one) and observed variables that depend on the current hidden state. HMMs are used in speech recognition, part-of-speech tagging, and biological sequence analysis.",
    explanationChinese: "HMM有隐藏状态变量形成时间马尔可夫链（每个状态只依赖于前一个），和依赖于当前隐藏状态的观测变量。HMM用于语音识别、词性标注和生物序列分析。",
    diagram: "",
    terms: ["bayesian_network", "markov_decision_process"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 183,
    q: "D-separation in a Bayesian network determines:",
    qChinese: "贝叶斯网络中的D-分离确定：",
    options: [
      "A) Whether two sets of variables are conditionally independent given a third set",
      "B) The depth of the network",
      "C) The number of parameters",
      "D) The network's accuracy"
    ],
    optionsChinese: [
      "A) 两组变量在给定第三组的情况下是否条件独立",
      "B) 网络的深度",
      "C) 参数数量",
      "D) 网络的准确性"
    ],
    answer: 0,
    explanation: "D-separation is a graphical criterion for reading conditional independence from the structure of a Bayesian network. Two sets of nodes X and Y are d-separated by Z if every undirected path between X and Y is blocked by Z. A path is blocked at a chain/fork node in Z or a collider not in Z.",
    explanationChinese: "D-分离是从贝叶斯网络结构中读取条件独立性的图形标准。如果X和Y之间的每条无向路径都被Z阻断，则两组节点X和Y被Z d-分离。路径在Z中的链/叉节点或不在Z中的碰撞器处被阻断。",
    diagram: "",
    terms: ["bayesian_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 184,
    q: "Likelihood weighting is an approximate inference technique that:",
    qChinese: "似然加权是一种近似推理技术，它：",
    options: [
      "A) Rejects all samples",
      "B) Generates samples by fixing evidence variables and weighting by their likelihood",
      "C) Uses exact computation",
      "D) Ignores evidence entirely"
    ],
    optionsChinese: [
      "A) 拒绝所有样本",
      "B) 通过固定证据变量并按其似然加权来生成样本",
      "C) 使用精确计算",
      "D) 完全忽略证据"
    ],
    answer: 1,
    explanation: "Likelihood weighting samples non-evidence variables in topological order, fixing evidence variables to their observed values. Each sample is weighted by the product of probabilities of evidence variables given their parents. This avoids the rejection problem of direct sampling, making it more efficient.",
    explanationChinese: "似然加权按拓扑顺序采样非证据变量，将证据变量固定为其观测值。每个样本按证据变量给定其父节点的概率乘积加权。这避免了直接采样的拒绝问题，使其更高效。",
    diagram: "",
    terms: ["bayesian_network", "inference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 185,
    q: "A Bayesian network with n binary variables can represent the full joint distribution using at most:",
    qChinese: "一个有n个二元变量的贝叶斯网络最多可以使用多少个参数表示完整联合分布：",
    options: [
      "A) Fewer than 2^n parameters by exploiting conditional independence",
      "B) 2^n parameters",
      "C) Exactly n parameters",
      "D) n^2 parameters"
    ],
    optionsChinese: [
      "A) 通过利用条件独立性少于2^n个参数",
      "B) 2^n个参数",
      "C) 恰好n个参数",
      "D) n^2个参数"
    ],
    answer: 0,
    explanation: "A full joint distribution over n binary variables requires 2^n - 1 parameters. Bayesian networks exploit conditional independence: each node's CPT depends only on its parents. If each node has at most k parents, the total parameters are O(n * 2^k), dramatically less than 2^n for small k.",
    explanationChinese: "n个二元变量的完整联合分布需要2^n - 1个参数。贝叶斯网络利用条件独立性：每个节点的CPT只依赖于其父节点。如果每个节点最多有k个父节点，总参数为O(n * 2^k)，当k较小时远少于2^n。",
    diagram: "",
    terms: ["bayesian_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 186,
    q: "The junction tree algorithm performs exact inference by:",
    qChinese: "联结树算法通过以下方式执行精确推理：",
    options: [
      "A) Random sampling",
      "B) Converting the BN to a tree of clusters and passing messages between clusters",
      "C) Deleting all nodes",
      "D) Using only prior probabilities"
    ],
    optionsChinese: [
      "A) 随机采样",
      "B) 将BN转换为聚类树并在聚类间传递消息",
      "C) 删除所有节点",
      "D) 仅使用先验概率"
    ],
    answer: 1,
    explanation: "The junction tree algorithm triangulates the moral graph, forms a junction tree of cliques, and performs message passing (belief propagation) between cliques. For tree-structured networks, this is linear in the number of nodes. For general networks, complexity is exponential in the tree-width.",
    explanationChinese: "联结树算法三角化道德图，形成团的联结树，并在团之间执行消息传递（信念传播）。对于树结构网络，这在节点数量上是线性的。对于一般网络，复杂度在树宽上是指数级的。",
    diagram: "",
    terms: ["bayesian_network", "inference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 187,
    q: "Conditional probability P(A|B) is defined as:",
    qChinese: "条件概率P(A|B)定义为：",
    options: [
      "A) P(A) * P(B)",
      "B) P(A AND B) / P(B), where P(B) > 0",
      "C) P(A) + P(B)",
      "D) P(A) / P(B)"
    ],
    optionsChinese: [
      "A) P(A) * P(B)",
      "B) P(A AND B) / P(B)，其中P(B) > 0",
      "C) P(A) + P(B)",
      "D) P(A) / P(B)"
    ],
    answer: 1,
    explanation: "Conditional probability P(A|B) = P(A AND B) / P(B) measures the probability of A given that B has occurred. It requires P(B) > 0. This definition is the foundation of Bayesian reasoning and is used throughout probabilistic AI for updating beliefs based on evidence.",
    explanationChinese: "条件概率P(A|B) = P(A AND B) / P(B)度量在B已发生的情况下A的概率。它要求P(B) > 0。这个定义是贝叶斯推理的基础，在概率AI中广泛用于基于证据更新信念。",
    diagram: "",
    terms: ["bayesian_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 188,
    q: "Two events A and B are independent if and only if:",
    qChinese: "两个事件A和B独立当且仅当：",
    options: [
      "A) P(A|B) = P(B)",
      "B) P(A) + P(B) = 1",
      "C) P(A AND B) = P(A) * P(B)",
      "D) P(A OR B) = 0"
    ],
    optionsChinese: [
      "A) P(A|B) = P(B)",
      "B) P(A) + P(B) = 1",
      "C) P(A AND B) = P(A) * P(B)",
      "D) P(A OR B) = 0"
    ],
    answer: 2,
    explanation: "Events A and B are independent if knowing B does not change the probability of A: P(A AND B) = P(A) * P(B), equivalently P(A|B) = P(A). Independence simplifies probability calculations and is a key assumption exploited by Bayesian networks and naive Bayes classifiers.",
    explanationChinese: "如果知道B不改变A的概率，则事件A和B独立：P(A AND B) = P(A) * P(B)，等价地P(A|B) = P(A)。独立性简化概率计算，是贝叶斯网络和朴素贝叶斯分类器利用的关键假设。",
    diagram: "",
    terms: ["bayesian_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 189,
    q: "The normalization constant in Bayes' theorem (P(B)) ensures that:",
    qChinese: "贝叶斯定理中的归一化常数（P(B)）确保：",
    options: [
      "A) P(A|B) > 1",
      "B) The posterior probabilities sum to 1",
      "C) P(B) = 0",
      "D) All priors are equal"
    ],
    optionsChinese: [
      "A) P(A|B) > 1",
      "B) 后验概率之和为1",
      "C) P(B) = 0",
      "D) 所有先验相等"
    ],
    answer: 1,
    explanation: "P(B) serves as a normalizing constant that ensures the posterior probabilities over all hypotheses sum to 1. In practice, P(B) is often computed as the sum of P(B|Ai) * P(Ai) over all hypotheses Ai. Alternatively, we compute unnormalized posteriors and normalize afterwards.",
    explanationChinese: "P(B)作为归一化常数，确保所有假设的后验概率之和为1。在实践中，P(B)通常计算为所有假设Ai上的P(B|Ai) * P(Ai)之和。或者，我们计算未归一化的后验然后归一化。",
    diagram: "",
    terms: ["bayesian_network", "inference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 190,
    q: "A dynamic Bayesian network (DBN) models:",
    qChinese: "动态贝叶斯网络（DBN）建模：",
    options: [
      "A) How a set of variables evolves over time using time-sliced BN structure",
      "B) Static relationships only",
      "C) Only spatial data",
      "D) Deterministic processes"
    ],
    optionsChinese: [
      "A) 使用时间切片BN结构建模一组变量如何随时间演变",
      "B) 仅静态关系",
      "C) 仅空间数据",
      "D) 确定性过程"
    ],
    answer: 0,
    explanation: "A DBN represents a temporal process by replicating a BN structure across time steps. Variables at time t can depend on variables at time t-1 (and possibly t). HMMs and Kalman filters are special cases. DBNs are used for speech recognition, tracking, and biological process modeling.",
    explanationChinese: "DBN通过在时间步上复制BN结构来表示时间过程。时间t的变量可以依赖于时间t-1（可能还有t）的变量。HMM和卡尔曼滤波器是特殊情况。DBN用于语音识别、跟踪和生物过程建模。",
    diagram: "",
    terms: ["bayesian_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 191,
    q: "Belief propagation (message passing) computes exact marginals when the BN is:",
    qChinese: "信念传播（消息传递）在BN满足以下条件时计算精确边际概率：",
    options: [
      "A) A tree (singly connected)",
      "B) Fully connected",
      "C) Has many cycles",
      "D) Empty"
    ],
    optionsChinese: [
      "A) 一棵树（单连通的）",
      "B) 完全连通的",
      "C) 有许多环",
      "D) 空的"
    ],
    answer: 0,
    explanation: "Belief propagation computes exact marginal probabilities in polynomial time for tree-structured (singly connected) Bayesian networks. Messages are passed from leaves to root and back, with each node combining messages from its neighbors. For networks with loops, loopy BP provides approximate results.",
    explanationChinese: "信念传播对树结构（单连通）贝叶斯网络在多项式时间内计算精确边际概率。消息从叶到根再返回传递，每个节点组合来自其邻居的消息。对于有环的网络，环路BP提供近似结果。",
    diagram: "",
    terms: ["bayesian_network", "inference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 192,
    q: "The purpose of a conditional probability table (CPT) in a BN is to:",
    qChinese: "BN中条件概率表（CPT）的目的是：",
    options: [
      "A) Store the network topology",
      "B) Define the network name",
      "C) List all variables",
      "D) Specify P(node | parents) for all combinations of parent values"
    ],
    optionsChinese: [
      "A) 存储网络拓扑",
      "B) 定义网络名称",
      "C) 列出所有变量",
      "D) 为所有父节点值组合指定P(节点|父节点)"
    ],
    answer: 3,
    explanation: "Each node's CPT specifies the conditional probability distribution of the node given every combination of its parents' values. For a binary node with k binary parents, the CPT has 2^k rows. The full joint distribution is the product of all nodes' CPTs, which is the key factorization in BNs.",
    explanationChinese: "每个节点的CPT指定给定其父节点值的每种组合下节点的条件概率分布。对于有k个二元父节点的二元节点，CPT有2^k行。完整联合分布是所有节点CPT的乘积，这是BN中的关键分解。",
    diagram: "",
    terms: ["bayesian_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 193,
    q: "The Markov assumption in a Bayesian network states that:",
    qChinese: "贝叶斯网络中的马尔可夫假设指出：",
    options: [
      "A) All variables are independent",
      "B) All variables are dependent",
      "C) Each variable is conditionally independent of its non-descendants given its parents",
      "D) The network has no structure"
    ],
    optionsChinese: [
      "A) 所有变量都是独立的",
      "B) 所有变量都是相关的",
      "C) 给定其父节点，每个变量条件独立于其非后代",
      "D) 网络没有结构"
    ],
    answer: 2,
    explanation: "The directed Markov property states that each node is conditionally independent of all non-descendants given its parents. This fundamental assumption enables the compact factorization of the joint distribution and is equivalent to the conditional independencies encoded by d-separation in the graph.",
    explanationChinese: "有向马尔可夫属性指出给定其父节点，每个节点条件独立于所有非后代。这个基本假设使联合分布的紧凑分解成为可能，等价于图中d-分离编码的条件独立性。",
    diagram: "",
    terms: ["bayesian_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 194,
    q: "Rejection sampling estimates P(X|e) by:",
    qChinese: "拒绝采样通过以下方式估计P(X|e)：",
    options: [
      "A) Accepting all samples",
      "B) Computing exact probabilities",
      "C) Using only the prior distribution",
      "D) Generating samples from the prior and keeping only those consistent with evidence e"
    ],
    optionsChinese: [
      "A) 接受所有样本",
      "B) 计算精确概率",
      "C) 仅使用先验分布",
      "D) 从先验生成样本并仅保留与证据e一致的样本"
    ],
    answer: 3,
    explanation: "Rejection sampling generates complete variable assignments from the prior distribution and rejects those inconsistent with the evidence. The proportion of accepted samples where X=x approximates P(X=x|e). The downside is that most samples may be rejected when evidence is unlikely, making it very inefficient.",
    explanationChinese: "拒绝采样从先验分布生成完整的变量赋值，并拒绝与证据不一致的。被接受样本中X=x的比例近似P(X=x|e)。缺点是当证据不太可能时大多数样本可能被拒绝，使其非常低效。",
    diagram: "",
    terms: ["bayesian_network", "inference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 195,
    q: "A Markov chain satisfies the property that:",
    qChinese: "马尔可夫链满足以下性质：",
    options: [
      "A) The future depends on all past states",
      "B) The future state depends only on the current state, not on the past",
      "C) All states are absorbing",
      "D) There are no transitions"
    ],
    optionsChinese: [
      "A) 未来依赖于所有过去状态",
      "B) 未来状态只依赖于当前状态，不依赖于过去",
      "C) 所有状态都是吸收状态",
      "D) 没有转移"
    ],
    answer: 1,
    explanation: "The Markov property (memorylessness) states that P(St+1 | S1, S2, ..., St) = P(St+1 | St). The next state depends only on the current state, not on the history of how it was reached. This simplification is fundamental to Markov chains, HMMs, and Markov Decision Processes.",
    explanationChinese: "马尔可夫属性（无记忆性）指出P(St+1 | S1, S2, ..., St) = P(St+1 | St)。下一个状态只依赖于当前状态，不依赖于如何到达的历史。这种简化是马尔可夫链、HMM和马尔可夫决策过程的基础。",
    diagram: "",
    terms: ["bayesian_network", "markov_decision_process"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 196,
    q: "The total probability theorem states that P(B) equals:",
    qChinese: "全概率定理指出P(B)等于：",
    options: [
      "A) P(A) * P(B)",
      "B) 1 - P(A)",
      "C) P(B|A) only",
      "D) Sum of P(B|Ai) * P(Ai) over all mutually exclusive events Ai"
    ],
    optionsChinese: [
      "A) P(A) * P(B)",
      "B) 1 - P(A)",
      "C) 仅P(B|A)",
      "D) 对所有互斥事件Ai求和P(B|Ai) * P(Ai)"
    ],
    answer: 3,
    explanation: "The law of total probability decomposes P(B) by conditioning on a partition {A1, A2, ...}: P(B) = Σ P(B|Ai) * P(Ai). This is used as the denominator in Bayes' theorem and is fundamental for computing marginal probabilities by summing over all possibilities of a hidden variable.",
    explanationChinese: "全概率定律通过对划分{A1, A2, ...}进行条件分解P(B)：P(B) = Σ P(B|Ai) * P(Ai)。这用作贝叶斯定理的分母，对于通过对隐藏变量的所有可能性求和计算边际概率是基础性的。",
    diagram: "",
    terms: ["bayesian_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 197,
    q: "In a Bayesian network, a V-structure (collider) A -> C <- B indicates:",
    qChinese: "在贝叶斯网络中，V结构（碰撞器）A -> C <- B表示：",
    options: [
      "A) A and B are always dependent",
      "B) A and B are independent but become dependent when C (or its descendant) is observed",
      "C) A and B are always independent",
      "D) C causes A and B"
    ],
    optionsChinese: [
      "A) A和B总是相关的",
      "B) A和B独立但当C（或其后代）被观察时变得相关",
      "C) A和B总是独立的",
      "D) C导致A和B"
    ],
    answer: 1,
    explanation: "In a V-structure, A and B are marginally independent (no direct or indirect connection except through C). However, once C or any of C's descendants is observed, A and B become conditionally dependent (explaining away). This is a key pattern for understanding d-separation in Bayesian networks.",
    explanationChinese: "在V结构中，A和B边际独立（除了通过C没有直接或间接连接）。然而，一旦C或C的任何后代被观察，A和B变得条件相关（解释消除）。这是理解贝叶斯网络中d-分离的关键模式。",
    diagram: "",
    terms: ["bayesian_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 198,
    q: "Bayesian network structure learning from data involves:",
    qChinese: "从数据中学习贝叶斯网络结构涉及：",
    options: [
      "A) Only learning CPT parameters",
      "B) Deleting all edges",
      "C) Discovering the DAG structure (edges) that best fits the data",
      "D) Only using expert knowledge"
    ],
    optionsChinese: [
      "A) 仅学习CPT参数",
      "B) 删除所有边",
      "C) 发现最适合数据的DAG结构（边）",
      "D) 仅使用专家知识"
    ],
    answer: 2,
    explanation: "Structure learning discovers the best DAG topology from data using scoring methods (BIC, BDeu) or constraint-based tests (conditional independence tests). This is NP-hard in general. Parameter learning (estimating CPT values given structure) is simpler—often using maximum likelihood or Bayesian estimation.",
    explanationChinese: "结构学习使用评分方法（BIC、BDeu）或基于约束的测试（条件独立性测试）从数据中发现最佳DAG拓扑。这通常是NP难的。参数学习（给定结构估计CPT值）更简单——通常使用最大似然或贝叶斯估计。",
    diagram: "",
    terms: ["bayesian_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 199,
    q: "A utility node in a decision network represents:",
    qChinese: "决策网络中的效用节点表示：",
    options: [
      "A) The agent's preferences over outcomes as a numeric value",
      "B) A random event",
      "C) A decision to be made",
      "D) Network bandwidth"
    ],
    optionsChinese: [
      "A) 智能体对结果的偏好，以数值表示",
      "B) 随机事件",
      "C) 要做的决策",
      "D) 网络带宽"
    ],
    answer: 0,
    explanation: "In a decision network (influence diagram), utility nodes represent the agent's preferences. They take state and decision node values as inputs and output a utility value. The agent maximizes expected utility by choosing decisions that lead to the highest expected utility given uncertain outcomes.",
    explanationChinese: "在决策网络（影响图）中，效用节点代表智能体的偏好。它们接受状态和决策节点值作为输入并输出效用值。智能体通过选择在不确定结果下导致最高期望效用的决策来最大化期望效用。",
    diagram: "",
    terms: ["bayesian_network", "utility_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 200,
    q: "The Maximum Expected Utility (MEU) principle states that a rational agent should:",
    qChinese: "最大期望效用（MEU）原则指出理性智能体应该：",
    options: [
      "A) Minimize risk",
      "B) Choose randomly",
      "C) Choose the action that maximizes expected utility",
      "D) Always pick the safest option"
    ],
    optionsChinese: [
      "A) 最小化风险",
      "B) 随机选择",
      "C) 选择最大化期望效用的动作",
      "D) 总是选择最安全的选项"
    ],
    answer: 2,
    explanation: "MEU is the foundation of rational decision-making under uncertainty. The agent computes EU(action) = Σ P(outcome|action) * U(outcome) for each action and picks the one with the highest expected utility. This integrates probability (beliefs) and utility (preferences) into a single framework.",
    explanationChinese: "MEU是不确定性下理性决策的基础。智能体为每个动作计算EU(action) = Σ P(outcome|action) * U(outcome)并选择期望效用最高的。这将概率（信念）和效用（偏好）整合到单一框架中。",
    diagram: "",
    terms: ["utility_function", "bayesian_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 201,
    q: "The value of information measures:",
    qChinese: "信息价值度量：",
    options: [
      "A) The cost of storage",
      "B) The number of variables",
      "C) Network bandwidth",
      "D) How much the expected utility increases if a variable's value is learned before deciding"
    ],
    optionsChinese: [
      "A) 存储成本",
      "B) 变量数量",
      "C) 网络带宽",
      "D) 如果在决策前了解变量的值，期望效用增加多少"
    ],
    answer: 3,
    explanation: "Value of information (VOI) quantifies how much knowing a variable's value before making a decision would improve the expected utility. VOI = EU(with info) - EU(without info). It is always non-negative. If VOI exceeds the cost of obtaining the information, the agent should acquire it.",
    explanationChinese: "信息价值（VOI）量化在做决策之前知道变量的值会多大程度上提高期望效用。VOI = EU(有信息) - EU(无信息)。它总是非负的。如果VOI超过获取信息的成本，智能体应该获取它。",
    diagram: "",
    terms: ["utility_function", "bayesian_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 202,
    q: "A Bayesian network with the structure A -> B -> C encodes that:",
    qChinese: "结构为A -> B -> C的贝叶斯网络编码：",
    options: [
      "A) A and C are conditionally independent given B",
      "B) A and C are always dependent",
      "C) B and C are independent",
      "D) A causes C directly"
    ],
    optionsChinese: [
      "A) 给定B，A和C条件独立",
      "B) A和C总是相关的",
      "C) B和C是独立的",
      "D) A直接导致C"
    ],
    answer: 0,
    explanation: "In the chain structure A -> B -> C, B blocks the path from A to C when B is observed (d-separated). This means knowing B renders A irrelevant for predicting C. Without observing B, A and C are dependent through the indirect path. This is the causal chain or indirect cause pattern.",
    explanationChinese: "在链结构A -> B -> C中，当B被观察时，B阻断了从A到C的路径（d-分离）。这意味着知道B使A对预测C无关。不观察B时，A和C通过间接路径是相关的。这是因果链或间接原因模式。",
    diagram: "",
    terms: ["bayesian_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 203,
    q: "Particle filtering is used for approximate inference in:",
    qChinese: "粒子滤波用于以下的近似推理：",
    options: [
      "A) Dynamic Bayesian networks (temporal models)",
      "B) Static Bayesian networks only",
      "C) Decision trees",
      "D) Propositional logic"
    ],
    optionsChinese: [
      "A) 动态贝叶斯网络（时间模型）",
      "B) 仅静态贝叶斯网络",
      "C) 决策树",
      "D) 命题逻辑"
    ],
    answer: 0,
    explanation: "Particle filtering (Sequential Monte Carlo) performs approximate inference in temporal models like DBNs and HMMs. It represents the belief state as a set of weighted samples (particles) that are propagated forward through time. It handles nonlinear and non-Gaussian models where exact methods fail.",
    explanationChinese: "粒子滤波（序贯蒙特卡洛）在DBN和HMM等时间模型中执行近似推理。它将信念状态表示为一组加权样本（粒子），这些粒子在时间中向前传播。它处理精确方法失败的非线性和非高斯模型。",
    diagram: "",
    terms: ["bayesian_network", "inference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 204,
    q: "A Bayesian network is a generative model because it can:",
    qChinese: "贝叶斯网络是生成模型，因为它可以：",
    options: [
      "A) Only classify data",
      "B) Only perform regression",
      "C) Generate new samples by sampling from the joint distribution in topological order",
      "D) Only cluster data"
    ],
    optionsChinese: [
      "A) 仅分类数据",
      "B) 仅执行回归",
      "C) 通过按拓扑顺序从联合分布中采样来生成新样本",
      "D) 仅聚类数据"
    ],
    answer: 2,
    explanation: "Bayesian networks define a full joint probability distribution, allowing both inference and generation. To generate a sample, one samples each variable in topological order, conditioned on its parents' values. This generative capability distinguishes BNs from discriminative models and enables simulation and data augmentation.",
    explanationChinese: "贝叶斯网络定义完整的联合概率分布，允许推理和生成。要生成样本，按拓扑顺序采样每个变量，条件为其父节点的值。这种生成能力将BN与判别模型区分开来，并支持模拟和数据增强。",
    diagram: "",
    terms: ["bayesian_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 205,
    q: "The key advantage of Bayesian networks over full joint probability tables is:",
    qChinese: "贝叶斯网络相对于完整联合概率表的关键优势是：",
    options: [
      "A) Exponentially more compact representation through conditional independence",
      "B) Less accurate",
      "C) Harder to understand",
      "D) Requires more parameters"
    ],
    optionsChinese: [
      "A) 通过条件独立性实现指数级更紧凑的表示",
      "B) 不太准确",
      "C) 更难理解",
      "D) 需要更多参数"
    ],
    answer: 0,
    explanation: "A full joint distribution over n binary variables needs 2^n-1 parameters. Bayesian networks exploit conditional independence so each node's distribution depends only on its parents, requiring O(n*2^k) parameters where k is the max parent count. This makes BNs practical for hundreds of variables.",
    explanationChinese: "n个二元变量的完整联合分布需要2^n-1个参数。贝叶斯网络利用条件独立性，使每个节点的分布只依赖于其父节点，需要O(n*2^k)个参数，其中k是最大父节点数。这使BN对数百个变量可行。",
    diagram: "",
    terms: ["bayesian_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 206,
    q: "A Markov Decision Process (MDP) is defined by:",
    qChinese: "马尔可夫决策过程（MDP）由以下定义：",
    options: [
      "A) Variables and constraints",
      "B) States, actions, transition probabilities, rewards, and discount factor",
      "C) Only states and actions",
      "D) Nodes and edges"
    ],
    optionsChinese: [
      "A) 变量和约束",
      "B) 状态、动作、转移概率、奖励和折扣因子",
      "C) 仅状态和动作",
      "D) 节点和边"
    ],
    answer: 1,
    explanation: "An MDP is a tuple (S, A, T, R, gamma) where S is states, A is actions, T(s,a,s') is the transition probability, R(s,a,s') is the reward, and gamma is the discount factor. MDPs model sequential decision-making under uncertainty where outcomes of actions are probabilistic.",
    explanationChinese: "MDP是一个元组(S, A, T, R, gamma)，其中S是状态，A是动作，T(s,a,s')是转移概率，R(s,a,s')是奖励，gamma是折扣因子。MDP建模动作结果是概率性的不确定性下的顺序决策。",
    diagram: "",
    terms: ["markov_decision_process"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 207,
    q: "The discount factor gamma (0 <= gamma < 1) in an MDP controls:",
    qChinese: "MDP中的折扣因子gamma（0 <= gamma < 1）控制：",
    options: [
      "A) How much future rewards are valued relative to immediate rewards",
      "B) The number of states",
      "C) The number of actions",
      "D) The transition probabilities"
    ],
    optionsChinese: [
      "A) 未来奖励相对于即时奖励的价值",
      "B) 状态数量",
      "C) 动作数量",
      "D) 转移概率"
    ],
    answer: 0,
    explanation: "The discount factor gamma determines the present value of future rewards. A reward r received k steps in the future is worth gamma^k * r now. Gamma close to 0 makes the agent myopic (short-sighted); gamma close to 1 makes it far-sighted. Gamma < 1 ensures convergence of infinite-horizon rewards.",
    explanationChinese: "折扣因子gamma决定未来奖励的现值。k步后收到的奖励r现在值gamma^k * r。Gamma接近0使智能体短视；gamma接近1使其远视。Gamma < 1确保无限期奖励的收敛。",
    diagram: "",
    terms: ["markov_decision_process", "utility_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 208,
    q: "A policy pi in an MDP maps:",
    qChinese: "MDP中的策略pi映射：",
    options: [
      "A) Actions to states",
      "B) States to probabilities",
      "C) Rewards to states",
      "D) States to actions (what to do in each state)"
    ],
    optionsChinese: [
      "A) 动作到状态",
      "B) 状态到概率",
      "C) 奖励到状态",
      "D) 状态到动作（在每个状态做什么）"
    ],
    answer: 3,
    explanation: "A policy pi(s) specifies which action to take in each state. A deterministic policy maps each state to a single action; a stochastic policy gives a probability distribution over actions. The optimal policy pi* maximizes the expected cumulative discounted reward from every state.",
    explanationChinese: "策略pi(s)指定在每个状态采取哪个动作。确定性策略将每个状态映射到单个动作；随机策略给出动作的概率分布。最优策略pi*从每个状态最大化期望累积折扣奖励。",
    diagram: "",
    terms: ["markov_decision_process"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 209,
    q: "The value function V(s) of a state s under policy pi represents:",
    qChinese: "策略pi下状态s的值函数V(s)表示：",
    options: [
      "A) The immediate reward at s",
      "B) The transition probability from s",
      "C) The number of actions available",
      "D) The expected cumulative discounted reward starting from s and following pi"
    ],
    optionsChinese: [
      "A) s处的即时奖励",
      "B) 从s的转移概率",
      "C) 可用动作数量",
      "D) 从s开始并遵循pi的期望累积折扣奖励"
    ],
    answer: 3,
    explanation: "V^pi(s) = E[R_t + gamma*R_{t+1} + gamma^2*R_{t+2} + ... | s_t = s, pi]. It captures the long-term expected return of being in state s and following policy pi thereafter. The optimal value function V*(s) is the maximum over all policies and satisfies the Bellman optimality equation.",
    explanationChinese: "V^pi(s) = E[R_t + gamma*R_{t+1} + gamma^2*R_{t+2} + ... | s_t = s, pi]。它捕获在状态s并此后遵循策略pi的长期期望回报。最优值函数V*(s)是所有策略的最大值，满足Bellman最优方程。",
    diagram: "",
    terms: ["markov_decision_process", "utility_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 210,
    q: "The Bellman equation for the optimal value function V*(s) states:",
    qChinese: "最优值函数V*(s)的Bellman方程指出：",
    options: [
      "A) V*(s) = max_a Σ T(s,a,s')[R(s,a,s') + gamma * V*(s')]",
      "B) V*(s) = R(s)",
      "C) V*(s) = 0 for all s",
      "D) V*(s) = min_a V*(s')"
    ],
    optionsChinese: [
      "A) V*(s) = max_a Σ T(s,a,s')[R(s,a,s') + gamma * V*(s')]",
      "B) V*(s) = R(s)",
      "C) 对所有s，V*(s) = 0",
      "D) V*(s) = min_a V*(s')"
    ],
    answer: 0,
    explanation: "The Bellman optimality equation decomposes V*(s) recursively: the optimal value of a state is the maximum over actions of the expected immediate reward plus discounted future value. This recursive structure is the basis for dynamic programming algorithms like value iteration and policy iteration.",
    explanationChinese: "Bellman最优方程递归分解V*(s)：状态的最优值是所有动作中期望即时奖励加折扣未来值的最大值。这种递归结构是值迭代和策略迭代等动态规划算法的基础。",
    diagram: "",
    terms: ["markov_decision_process", "utility_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 211,
    q: "Value iteration solves an MDP by:",
    qChinese: "值迭代通过以下方式求解MDP：",
    options: [
      "A) Random policy selection",
      "B) Iteratively updating V(s) using the Bellman equation until convergence",
      "C) Exhaustive search of all policies",
      "D) Gradient descent"
    ],
    optionsChinese: [
      "A) 随机策略选择",
      "B) 使用Bellman方程迭代更新V(s)直到收敛",
      "C) 穷举搜索所有策略",
      "D) 梯度下降"
    ],
    answer: 1,
    explanation: "Value iteration starts with arbitrary V(s) values and repeatedly applies the Bellman update: V(s) <- max_a Σ T(s,a,s')[R(s,a,s') + gamma*V(s')]. With gamma < 1, values converge to V*. The optimal policy is then extracted by choosing the maximizing action at each state.",
    explanationChinese: "值迭代从任意V(s)值开始，反复应用Bellman更新：V(s) <- max_a Σ T(s,a,s')[R(s,a,s') + gamma*V(s')]。当gamma < 1时，值收敛到V*。然后通过在每个状态选择最大化的动作提取最优策略。",
    diagram: "",
    terms: ["markov_decision_process"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 212,
    q: "Policy iteration alternates between:",
    qChinese: "策略迭代交替进行：",
    options: [
      "A) Random steps",
      "B) Forward and backward search",
      "C) Policy evaluation (computing V for current policy) and policy improvement (updating policy)",
      "D) Increasing and decreasing gamma"
    ],
    optionsChinese: [
      "A) 随机步骤",
      "B) 前向和后向搜索",
      "C) 策略评估（计算当前策略的V）和策略改进（更新策略）",
      "D) 增加和减少gamma"
    ],
    answer: 2,
    explanation: "Policy iteration has two phases: (1) Policy evaluation computes V^pi by solving linear equations. (2) Policy improvement updates the policy to be greedy with respect to V^pi. These alternate until the policy stabilizes. Policy iteration often converges in fewer iterations than value iteration.",
    explanationChinese: "策略迭代有两个阶段：(1) 策略评估通过求解线性方程计算V^pi。(2) 策略改进将策略更新为关于V^pi的贪婪策略。两者交替直到策略稳定。策略迭代通常比值迭代收敛所需的迭代次数更少。",
    diagram: "",
    terms: ["markov_decision_process"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 213,
    q: "The Q-function Q(s, a) represents:",
    qChinese: "Q函数Q(s, a)表示：",
    options: [
      "A) The quality of a state only",
      "B) The expected cumulative reward of taking action a in state s and then following the optimal policy",
      "C) The transition probability",
      "D) The discount factor"
    ],
    optionsChinese: [
      "A) 仅状态的质量",
      "B) 在状态s采取动作a然后遵循最优策略的期望累积奖励",
      "C) 转移概率",
      "D) 折扣因子"
    ],
    answer: 1,
    explanation: "Q*(s,a) = Σ T(s,a,s')[R(s,a,s') + gamma * V*(s')] is the expected value of taking action a in state s and acting optimally thereafter. The optimal policy is simply pi*(s) = argmax_a Q*(s,a). Q-values are central to Q-learning and other reinforcement learning methods.",
    explanationChinese: "Q*(s,a) = Σ T(s,a,s')[R(s,a,s') + gamma * V*(s')]是在状态s采取动作a然后之后最优行动的期望值。最优策略简单地为pi*(s) = argmax_a Q*(s,a)。Q值是Q学习和其他强化学习方法的核心。",
    diagram: "",
    terms: ["markov_decision_process", "utility_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 214,
    q: "An MDP differs from a deterministic search problem because:",
    qChinese: "MDP与确定性搜索问题的区别在于：",
    options: [
      "A) Action outcomes are probabilistic in MDPs rather than deterministic",
      "B) MDPs have no states",
      "C) MDPs have no actions",
      "D) MDPs do not use rewards"
    ],
    optionsChinese: [
      "A) MDP中动作结果是概率性的而非确定性的",
      "B) MDP没有状态",
      "C) MDP没有动作",
      "D) MDP不使用奖励"
    ],
    answer: 0,
    explanation: "In deterministic search, each action leads to exactly one successor state. In MDPs, taking action a in state s leads to different successor states s' with probabilities T(s,a,s'). This stochasticity requires policies (not fixed plans) because the agent must handle any possible outcome.",
    explanationChinese: "在确定性搜索中，每个动作恰好导致一个后继状态。在MDP中，在状态s采取动作a以概率T(s,a,s')导致不同的后继状态s'。这种随机性需要策略（而非固定计划），因为智能体必须处理任何可能的结果。",
    diagram: "",
    terms: ["markov_decision_process", "search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 215,
    q: "Value iteration is guaranteed to converge because:",
    qChinese: "值迭代保证收敛，因为：",
    options: [
      "A) The Bellman update is a contraction mapping with factor gamma < 1",
      "B) The state space is infinite",
      "C) It uses random values",
      "D) The discount factor is 1"
    ],
    optionsChinese: [
      "A) Bellman更新是因子为gamma < 1的压缩映射",
      "B) 状态空间是无限的",
      "C) 它使用随机值",
      "D) 折扣因子为1"
    ],
    answer: 0,
    explanation: "The Bellman backup operator is a contraction mapping with factor gamma: the maximum difference between successive value estimates shrinks by gamma each iteration. By the Banach fixed-point theorem, this guarantees convergence to the unique fixed point V* for any initial values.",
    explanationChinese: "Bellman备份操作是因子为gamma的压缩映射：连续值估计之间的最大差异每次迭代缩小gamma。根据Banach不动点定理，这保证对任何初始值收敛到唯一不动点V*。",
    diagram: "",
    terms: ["markov_decision_process"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 216,
    q: "In a POMDP (Partially Observable MDP), the agent:",
    qChinese: "在POMDP（部分可观测MDP）中，智能体：",
    options: [
      "A) Observes the full state directly",
      "B) Cannot observe the true state directly and maintains a belief state",
      "C) Has no observations",
      "D) Always knows the optimal action"
    ],
    optionsChinese: [
      "A) 直接观察完整状态",
      "B) 不能直接观察真实状态并维护信念状态",
      "C) 没有观测",
      "D) 总是知道最优动作"
    ],
    answer: 1,
    explanation: "In a POMDP, the agent receives observations that partially reveal the true state. It maintains a belief state: a probability distribution over possible states. Policies map belief states to actions. POMDPs are more realistic but much harder to solve than MDPs (PSPACE-complete in general).",
    explanationChinese: "在POMDP中，智能体接收部分揭示真实状态的观测。它维护信念状态：可能状态的概率分布。策略将信念状态映射到动作。POMDP更现实但比MDP更难求解（一般为PSPACE完全）。",
    diagram: "",
    terms: ["markov_decision_process"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 217,
    q: "The reward function R(s, a, s') in an MDP encodes:",
    qChinese: "MDP中的奖励函数R(s, a, s')编码：",
    options: [
      "A) The transition probability",
      "B) The policy",
      "C) The total future reward",
      "D) The immediate numeric feedback for taking action a in state s and reaching s'"
    ],
    optionsChinese: [
      "A) 转移概率",
      "B) 策略",
      "C) 总未来奖励",
      "D) 在状态s采取动作a并到达s'的即时数值反馈"
    ],
    answer: 3,
    explanation: "The reward function provides immediate numeric feedback for each transition. Positive rewards encourage desired behaviors; negative rewards (costs) discourage undesired ones. The agent's goal is to maximize the expected sum of discounted rewards over time, not just the immediate reward.",
    explanationChinese: "奖励函数为每次转移提供即时数值反馈。正奖励鼓励期望的行为；负奖励（代价）阻止不期望的行为。智能体的目标是最大化随时间的折扣奖励期望和，而不仅仅是即时奖励。",
    diagram: "",
    terms: ["markov_decision_process", "utility_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 218,
    q: "Q-learning is a model-free reinforcement learning algorithm that:",
    qChinese: "Q学习是一种无模型强化学习算法，它：",
    options: [
      "A) Requires complete knowledge of T and R",
      "B) Requires a teacher",
      "C) Only works with deterministic MDPs",
      "D) Learns Q-values from experience without knowing transition probabilities"
    ],
    optionsChinese: [
      "A) 需要T和R的完整知识",
      "B) 需要教师",
      "C) 仅适用于确定性MDP",
      "D) 从经验中学习Q值，无需知道转移概率"
    ],
    answer: 3,
    explanation: "Q-learning updates Q(s,a) using: Q(s,a) <- Q(s,a) + alpha * [r + gamma * max_a' Q(s',a') - Q(s,a)]. It learns optimal Q-values directly from transitions without needing to know the transition or reward models. It is off-policy, meaning it learns the optimal policy regardless of the exploration strategy.",
    explanationChinese: "Q学习使用以下方式更新Q(s,a)：Q(s,a) <- Q(s,a) + alpha * [r + gamma * max_a' Q(s',a') - Q(s,a)]。它直接从转移中学习最优Q值，无需知道转移或奖励模型。它是离策略的，意味着无论探索策略如何都能学习最优策略。",
    diagram: "",
    terms: ["markov_decision_process"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 219,
    q: "The exploration-exploitation tradeoff in reinforcement learning means:",
    qChinese: "强化学习中的探索-利用权衡意味着：",
    options: [
      "A) Always exploring",
      "B) Always exploiting",
      "C) Balancing trying new actions (exploration) with using known good actions (exploitation)",
      "D) Ignoring rewards"
    ],
    optionsChinese: [
      "A) 总是探索",
      "B) 总是利用",
      "C) 平衡尝试新动作（探索）和使用已知好动作（利用）",
      "D) 忽略奖励"
    ],
    answer: 2,
    explanation: "The agent must balance exploiting actions known to give high rewards with exploring unknown actions that might yield even higher rewards. Too much exploitation risks missing better actions; too much exploration wastes time. Epsilon-greedy and UCB are common strategies for this tradeoff.",
    explanationChinese: "智能体必须平衡利用已知给出高奖励的动作和探索可能产生更高奖励的未知动作。过多利用有错过更好动作的风险；过多探索浪费时间。Epsilon-贪婪和UCB是这种权衡的常见策略。",
    diagram: "",
    terms: ["markov_decision_process"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 220,
    q: "An absorbing state in an MDP is one where:",
    qChinese: "MDP中的吸收状态是指：",
    options: [
      "A) All actions lead to different states",
      "B) The agent remains in that state forever with zero reward",
      "C) It has the highest reward",
      "D) It connects to all other states"
    ],
    optionsChinese: [
      "A) 所有动作导致不同的状态",
      "B) 智能体永远留在该状态且零奖励",
      "C) 它有最高奖励",
      "D) 它连接到所有其他状态"
    ],
    answer: 1,
    explanation: "An absorbing state is a terminal state where the agent stays forever once reached, typically receiving zero reward thereafter. Game-ending states (win/loss) are often modeled as absorbing states. The value of an absorbing state is just its one-time terminal reward (if any).",
    explanationChinese: "吸收状态是智能体一旦到达就永远留在那里的终端状态，通常此后收到零奖励。博弈结束状态（赢/输）通常建模为吸收状态。吸收状态的值只是其一次性终端奖励（如果有的话）。",
    diagram: "",
    terms: ["markov_decision_process"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 221,
    q: "The Markov property of an MDP means:",
    qChinese: "MDP的马尔可夫属性意味着：",
    options: [
      "A) The transition probabilities depend only on the current state and action, not history",
      "B) The future depends on all past states",
      "C) All states are identical",
      "D) There are no rewards"
    ],
    optionsChinese: [
      "A) 转移概率只依赖于当前状态和动作，不依赖历史",
      "B) 未来依赖于所有过去状态",
      "C) 所有状态相同",
      "D) 没有奖励"
    ],
    answer: 0,
    explanation: "The Markov property states that T(s'|s,a) is independent of all previous states and actions. The current state contains all information needed to predict the future. This memoryless property makes MDPs tractable. If the full state is not observable, a POMDP model is needed instead.",
    explanationChinese: "马尔可夫属性指出T(s'|s,a)独立于所有先前的状态和动作。当前状态包含预测未来所需的所有信息。这种无记忆属性使MDP可处理。如果完整状态不可观测，则需要POMDP模型。",
    diagram: "",
    terms: ["markov_decision_process"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 222,
    q: "In policy iteration, policy evaluation computes V^pi by:",
    qChinese: "在策略迭代中，策略评估通过以下方式计算V^pi：",
    options: [
      "A) Random sampling",
      "B) Setting all values to zero",
      "C) Maximizing over all actions",
      "D) Solving a system of linear equations: V(s) = Σ T(s,pi(s),s')[R(s,pi(s),s') + gamma*V(s')]"
    ],
    optionsChinese: [
      "A) 随机采样",
      "B) 将所有值设为零",
      "C) 对所有动作取最大值",
      "D) 求解线性方程组：V(s) = Σ T(s,pi(s),s')[R(s,pi(s),s') + gamma*V(s')]"
    ],
    answer: 3,
    explanation: "Given a fixed policy pi, V^pi satisfies a set of linear equations (one per state) since there is no max operation. These can be solved directly using matrix methods (for small state spaces) or iteratively. This gives the exact value function for the current policy.",
    explanationChinese: "给定固定策略pi，V^pi满足一组线性方程（每个状态一个），因为没有max操作。这些可以使用矩阵方法（对于小状态空间）直接求解或迭代求解。这给出当前策略的精确值函数。",
    diagram: "",
    terms: ["markov_decision_process"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 223,
    q: "The epsilon-greedy strategy chooses:",
    qChinese: "epsilon-贪婪策略选择：",
    options: [
      "A) Always the best known action",
      "B) A random action with probability epsilon, otherwise the best known action",
      "C) Always a random action",
      "D) The worst action"
    ],
    optionsChinese: [
      "A) 总是已知最佳动作",
      "B) 以epsilon概率选择随机动作，否则选择已知最佳动作",
      "C) 总是随机动作",
      "D) 最差动作"
    ],
    answer: 1,
    explanation: "Epsilon-greedy balances exploration and exploitation by choosing a random action with probability epsilon and the greedy (best known) action with probability 1-epsilon. Decreasing epsilon over time allows initial exploration to transition to later exploitation as the agent learns more about the environment.",
    explanationChinese: "Epsilon-贪婪通过以epsilon概率选择随机动作和以1-epsilon概率选择贪婪（已知最佳）动作来平衡探索和利用。随时间减少epsilon允许初始探索过渡到后期利用，因为智能体对环境了解更多。",
    diagram: "",
    terms: ["markov_decision_process"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 224,
    q: "A finite-horizon MDP differs from an infinite-horizon MDP in that:",
    qChinese: "有限期MDP与无限期MDP的区别在于：",
    options: [
      "A) It has infinite states",
      "B) The discount factor is 1",
      "C) It has no rewards",
      "D) The agent makes decisions for only a fixed number of time steps"
    ],
    optionsChinese: [
      "A) 它有无限状态",
      "B) 折扣因子为1",
      "C) 它没有奖励",
      "D) 智能体仅在固定数量的时间步做决策"
    ],
    answer: 3,
    explanation: "In a finite-horizon MDP, the agent acts for T time steps. The optimal policy may be non-stationary: the best action in a state depends on how many steps remain. Infinite-horizon MDPs with discount factor gamma < 1 have stationary optimal policies that do not change with time.",
    explanationChinese: "在有限期MDP中，智能体行动T个时间步。最优策略可能是非稳态的：状态中的最佳动作取决于剩余步数。折扣因子gamma < 1的无限期MDP有不随时间变化的稳态最优策略。",
    diagram: "",
    terms: ["markov_decision_process"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 225,
    q: "The relationship between V*(s) and Q*(s,a) is:",
    qChinese: "V*(s)和Q*(s,a)之间的关系是：",
    options: [
      "A) V*(s) = min_a Q*(s,a)",
      "B) V*(s) = Σ_a Q*(s,a)",
      "C) V*(s) = max_a Q*(s,a)",
      "D) V*(s) = Q*(s,a) for all a"
    ],
    optionsChinese: [
      "A) V*(s) = min_a Q*(s,a)",
      "B) V*(s) = Σ_a Q*(s,a)",
      "C) V*(s) = max_a Q*(s,a)",
      "D) 对所有a，V*(s) = Q*(s,a)"
    ],
    answer: 2,
    explanation: "The optimal state value V*(s) is the maximum Q-value over all available actions: V*(s) = max_a Q*(s,a). This means the value of a state equals the value of taking the best action in that state. The optimal policy is pi*(s) = argmax_a Q*(s,a).",
    explanationChinese: "最优状态值V*(s)是所有可用动作上的最大Q值：V*(s) = max_a Q*(s,a)。这意味着状态的值等于在该状态采取最佳动作的值。最优策略是pi*(s) = argmax_a Q*(s,a)。",
    diagram: "",
    terms: ["markov_decision_process", "utility_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 226,
    q: "Model-based reinforcement learning differs from model-free in that it:",
    qChinese: "基于模型的强化学习与无模型的区别在于它：",
    options: [
      "A) Does not use rewards",
      "B) Learns or uses a model of the transition and reward functions",
      "C) Has no states",
      "D) Is always slower"
    ],
    optionsChinese: [
      "A) 不使用奖励",
      "B) 学习或使用转移和奖励函数的模型",
      "C) 没有状态",
      "D) 总是更慢"
    ],
    answer: 1,
    explanation: "Model-based RL learns or is given T(s,a,s') and R(s,a,s'), then uses planning (e.g., value iteration) to find the optimal policy. Model-free RL (like Q-learning) learns values or policies directly from experience without building an explicit model. Model-based methods are more sample-efficient but require accurate models.",
    explanationChinese: "基于模型的RL学习或给定T(s,a,s')和R(s,a,s')，然后使用规划（如值迭代）找到最优策略。无模型RL（如Q学习）直接从经验中学习值或策略，不构建显式模型。基于模型的方法样本效率更高，但需要准确的模型。",
    diagram: "",
    terms: ["markov_decision_process"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 227,
    q: "In value iteration, how do you extract the optimal policy after convergence?",
    qChinese: "在值迭代中，收敛后如何提取最优策略？",
    options: [
      "A) Choose random actions",
      "B) For each state, choose the action that maximizes the expected Bellman value",
      "C) Use the first action tried",
      "D) Choose the action with minimum value"
    ],
    optionsChinese: [
      "A) 选择随机动作",
      "B) 对每个状态，选择最大化期望Bellman值的动作",
      "C) 使用第一个尝试的动作",
      "D) 选择值最小的动作"
    ],
    answer: 1,
    explanation: "After V* converges, the optimal policy is: pi*(s) = argmax_a Σ T(s,a,s')[R(s,a,s') + gamma*V*(s')]. For each state, we choose the action yielding the highest expected sum of immediate reward and discounted future value. This greedy extraction gives the optimal policy.",
    explanationChinese: "V*收敛后，最优策略为：pi*(s) = argmax_a Σ T(s,a,s')[R(s,a,s') + gamma*V*(s')]。对每个状态，我们选择产生最高期望即时奖励和折扣未来值之和的动作。这种贪婪提取给出最优策略。",
    diagram: "",
    terms: ["markov_decision_process"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 228,
    q: "The temporal difference (TD) learning update rule is:",
    qChinese: "时间差分（TD）学习更新规则是：",
    options: [
      "A) V(s) <- V(s) + alpha * V(s')",
      "B) V(s) <- r only",
      "C) V(s) <- V(s) + alpha * [r + gamma*V(s') - V(s)]",
      "D) V(s) <- max(V(s), V(s'))"
    ],
    optionsChinese: [
      "A) V(s) <- V(s) + alpha * V(s')",
      "B) V(s) <- 仅r",
      "C) V(s) <- V(s) + alpha * [r + gamma*V(s') - V(s)]",
      "D) V(s) <- max(V(s), V(s'))"
    ],
    answer: 2,
    explanation: "TD learning updates V(s) using the observed reward r and the next state's estimated value V(s'). The TD error is [r + gamma*V(s') - V(s)], the difference between the observed target and the current estimate. TD learning combines ideas from Monte Carlo methods and dynamic programming.",
    explanationChinese: "TD学习使用观察到的奖励r和下一个状态的估计值V(s')更新V(s)。TD误差为[r + gamma*V(s') - V(s)]，观察目标与当前估计之间的差异。TD学习结合了蒙特卡洛方法和动态规划的思想。",
    diagram: "",
    terms: ["markov_decision_process"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 229,
    q: "A stationary policy in an infinite-horizon MDP:",
    qChinese: "无限期MDP中的稳态策略：",
    options: [
      "A) Changes over time",
      "B) Is always suboptimal",
      "C) Specifies the same action for a state regardless of the time step",
      "D) Requires finite horizon"
    ],
    optionsChinese: [
      "A) 随时间变化",
      "B) 总是次优的",
      "C) 无论时间步如何，为状态指定相同的动作",
      "D) 需要有限期"
    ],
    answer: 2,
    explanation: "A stationary policy maps states to actions without depending on the time step. For infinite-horizon discounted MDPs, there always exists an optimal policy that is stationary and deterministic. This simplifies the search for optimal policies to finding the best action for each state.",
    explanationChinese: "稳态策略将状态映射到动作，不依赖于时间步。对于无限期折扣MDP，总是存在一个稳态和确定性的最优策略。这将最优策略的搜索简化为为每个状态找到最佳动作。",
    diagram: "",
    terms: ["markov_decision_process"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 230,
    q: "Reward shaping in MDPs refers to:",
    qChinese: "MDP中的奖励塑造指的是：",
    options: [
      "A) Removing all rewards",
      "B) Making all rewards negative",
      "C) Setting all rewards to zero",
      "D) Modifying the reward function to guide learning while preserving the optimal policy"
    ],
    optionsChinese: [
      "A) 移除所有奖励",
      "B) 使所有奖励为负",
      "C) 将所有奖励设为零",
      "D) 修改奖励函数以引导学习同时保持最优策略"
    ],
    answer: 3,
    explanation: "Reward shaping adds supplementary rewards based on a potential function to encourage the agent to explore promising states faster. When done correctly (using potential-based shaping), it preserves the optimal policy while dramatically speeding up learning by providing more informative feedback signals.",
    explanationChinese: "奖励塑造基于势函数添加补充奖励，以鼓励智能体更快地探索有前途的状态。正确执行时（使用基于势的塑造），它在保持最优策略的同时通过提供更具信息量的反馈信号大大加速学习。",
    diagram: "",
    terms: ["markov_decision_process", "utility_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 231,
    q: "An MDP with no stochasticity (each action has one deterministic outcome) is equivalent to:",
    qChinese: "没有随机性的MDP（每个动作有一个确定性结果）等价于：",
    options: [
      "A) A POMDP",
      "B) A deterministic shortest-path problem",
      "C) A Bayesian network",
      "D) A CSP"
    ],
    optionsChinese: [
      "A) POMDP",
      "B) 确定性最短路径问题",
      "C) 贝叶斯网络",
      "D) CSP"
    ],
    answer: 1,
    explanation: "When transition probabilities are all 0 or 1, the MDP becomes deterministic and reduces to a shortest-path problem with costs being negative rewards. Standard search algorithms like A* or Dijkstra's can solve it. The stochastic nature of general MDPs is what makes them fundamentally different.",
    explanationChinese: "当转移概率全为0或1时，MDP变为确定性的，简化为代价为负奖励的最短路径问题。标准搜索算法如A*或Dijkstra可以求解。一般MDP的随机性质是使它们根本不同的原因。",
    diagram: "",
    terms: ["markov_decision_process", "search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 232,
    q: "The advantage of policy iteration over value iteration is:",
    qChinese: "策略迭代相对于值迭代的优势是：",
    options: [
      "A) It often converges in fewer iterations because the policy may stabilize quickly",
      "B) It never converges",
      "C) It uses more memory",
      "D) It does not require the transition model"
    ],
    optionsChinese: [
      "A) 它通常在更少的迭代中收敛，因为策略可能很快稳定",
      "B) 它从不收敛",
      "C) 它使用更多内存",
      "D) 它不需要转移模型"
    ],
    answer: 0,
    explanation: "Policy iteration often converges in far fewer iterations than value iteration because the policy can become optimal long before the value function fully converges. However, each iteration of policy iteration is more expensive because policy evaluation requires solving a system of linear equations.",
    explanationChinese: "策略迭代通常比值迭代在少得多的迭代中收敛，因为策略可能在值函数完全收敛之前很久就变得最优。然而，策略迭代的每次迭代更昂贵，因为策略评估需要求解线性方程组。",
    diagram: "",
    terms: ["markov_decision_process"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 233,
    q: "In an MDP, the optimal policy is independent of the starting state because:",
    qChinese: "在MDP中，最优策略独立于起始状态，因为：",
    options: [
      "A) The Bellman equation optimizes the value for every state simultaneously",
      "B) All states are the same",
      "C) There is only one state",
      "D) The rewards are all zero"
    ],
    optionsChinese: [
      "A) Bellman方程同时优化每个状态的值",
      "B) 所有状态都相同",
      "C) 只有一个状态",
      "D) 奖励都为零"
    ],
    answer: 0,
    explanation: "The Bellman equation defines the optimal action for each state independently. Since the stationary optimal policy specifies the best action for every possible state, it works regardless of where the agent starts. This is a powerful property: one policy handles all starting conditions.",
    explanationChinese: "Bellman方程独立地为每个状态定义最优动作。由于稳态最优策略为每个可能状态指定最佳动作，无论智能体从哪里开始它都有效。这是一个强大的属性：一个策略处理所有起始条件。",
    diagram: "",
    terms: ["markov_decision_process"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 234,
    q: "The convergence rate of value iteration depends primarily on:",
    qChinese: "值迭代的收敛速度主要取决于：",
    options: [
      "A) The number of actions",
      "B) The initial values",
      "C) The reward magnitude",
      "D) The discount factor gamma (closer to 1 means slower convergence)"
    ],
    optionsChinese: [
      "A) 动作数量",
      "B) 初始值",
      "C) 奖励大小",
      "D) 折扣因子gamma（越接近1收敛越慢）"
    ],
    answer: 3,
    explanation: "The convergence rate of value iteration is determined by the discount factor gamma. The maximum error after k iterations is bounded by gamma^k * max|V_0 - V*|. A gamma close to 1 means slow convergence (many iterations needed). A smaller gamma leads to faster convergence but more myopic policies.",
    explanationChinese: "值迭代的收敛速度由折扣因子gamma决定。k次迭代后的最大误差被gamma^k * max|V_0 - V*|界定。gamma接近1意味着收敛慢（需要许多迭代）。较小的gamma导致更快收敛但更短视的策略。",
    diagram: "",
    terms: ["markov_decision_process"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 235,
    q: "An MDP can be used to model which real-world problem?",
    qChinese: "MDP可以用来建模哪个现实世界问题？",
    options: [
      "A) Sorting a list",
      "B) Drawing a picture",
      "C) Compiling code",
      "D) Robot navigation with uncertain movement outcomes"
    ],
    optionsChinese: [
      "A) 排序列表",
      "B) 画一幅画",
      "C) 编译代码",
      "D) 具有不确定移动结果的机器人导航"
    ],
    answer: 3,
    explanation: "Robot navigation is a classic MDP application. States are positions, actions are movement directions, transitions are probabilistic (robot might slip), and rewards encode goals (+) and obstacles (-). The optimal policy tells the robot which direction to move from each position to maximize expected return.",
    explanationChinese: "机器人导航是经典的MDP应用。状态是位置，动作是移动方向，转移是概率性的（机器人可能滑动），奖励编码目标（+）和障碍物（-）。最优策略告诉机器人从每个位置向哪个方向移动以最大化期望回报。",
    diagram: "",
    terms: ["markov_decision_process"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 236,
    q: "In classical AI planning, the STRIPS representation describes actions using:",
    qChinese: "在经典AI规划中，STRIPS表示使用以下描述动作：",
    options: [
      "A) Neural networks",
      "B) Preconditions, add effects, and delete effects",
      "C) Only rewards",
      "D) Probability distributions"
    ],
    optionsChinese: [
      "A) 神经网络",
      "B) 前提条件、添加效果和删除效果",
      "C) 仅奖励",
      "D) 概率分布"
    ],
    answer: 1,
    explanation: "STRIPS (Stanford Research Institute Problem Solver) represents each action with: preconditions (what must be true to apply the action), add list (facts that become true), and delete list (facts that become false). This formalism enables automated planners to reason about action sequences.",
    explanationChinese: "STRIPS（斯坦福研究所问题求解器）用以下描述每个动作：前提条件（应用动作必须为真的条件）、添加列表（变为真的事实）和删除列表（变为假的事实）。这种形式化使自动规划器能够推理动作序列。",
    diagram: "",
    terms: ["planning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 237,
    q: "A planning problem consists of:",
    qChinese: "规划问题由以下组成：",
    options: [
      "A) An initial state, a set of actions, and a goal condition",
      "B) Only a goal state",
      "C) Only actions",
      "D) Only constraints"
    ],
    optionsChinese: [
      "A) 初始状态、一组动作和目标条件",
      "B) 仅目标状态",
      "C) 仅动作",
      "D) 仅约束"
    ],
    answer: 0,
    explanation: "A planning problem specifies an initial state (what is true initially), a set of action schemas (with preconditions and effects), and a goal condition (what must be true at the end). The planner finds a sequence of actions that transforms the initial state into one satisfying the goal.",
    explanationChinese: "规划问题指定初始状态（最初为真的内容）、一组动作模式（具有前提条件和效果）和目标条件（最后必须为真的内容）。规划器找到将初始状态转换为满足目标的状态的动作序列。",
    diagram: "",
    terms: ["planning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 238,
    q: "Forward state-space planning (progression) searches by:",
    qChinese: "前向状态空间规划（前进）通过以下方式搜索：",
    options: [
      "A) Starting from the goal",
      "B) Ignoring preconditions",
      "C) Working in both directions only",
      "D) Starting from the initial state and applying actions forward"
    ],
    optionsChinese: [
      "A) 从目标开始",
      "B) 忽略前提条件",
      "C) 仅双向工作",
      "D) 从初始状态开始并向前应用动作"
    ],
    answer: 3,
    explanation: "Forward (progression) planning starts from the initial state and searches by applying applicable actions to generate successor states. This is essentially a search problem where states are world descriptions. Heuristics can guide the search toward the goal, making A* applicable to planning.",
    explanationChinese: "前向（前进）规划从初始状态开始，通过应用适用动作生成后继状态来搜索。这本质上是一个搜索问题，状态是世界描述。启发式可以引导搜索朝向目标，使A*适用于规划。",
    diagram: "",
    terms: ["planning", "search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 239,
    q: "Backward state-space planning (regression) searches by:",
    qChinese: "后向状态空间规划（回归）通过以下方式搜索：",
    options: [
      "A) Starting from the goal and working backward to find actions that achieve it",
      "B) Starting from the initial state",
      "C) Random search",
      "D) Using no actions"
    ],
    optionsChinese: [
      "A) 从目标开始向后工作以找到实现它的动作",
      "B) 从初始状态开始",
      "C) 随机搜索",
      "D) 不使用动作"
    ],
    answer: 0,
    explanation: "Backward (regression) planning starts from the goal and considers which actions could achieve each subgoal. It generates predecessor states by 'undoing' actions. This is often more efficient than forward search because it focuses only on relevant actions rather than all possible actions from each state.",
    explanationChinese: "后向（回归）规划从目标开始，考虑哪些动作可以实现每个子目标。它通过'撤销'动作生成前驱状态。这通常比前向搜索更高效，因为它只关注相关动作，而不是每个状态的所有可能动作。",
    diagram: "",
    terms: ["planning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 240,
    q: "The GraphPlan algorithm uses:",
    qChinese: "GraphPlan算法使用：",
    options: [
      "A) Neural networks",
      "B) A planning graph that alternates action and proposition layers to find plans",
      "C) Random walks",
      "D) Only backward search"
    ],
    optionsChinese: [
      "A) 神经网络",
      "B) 交替动作和命题层的规划图来找到计划",
      "C) 随机游走",
      "D) 仅后向搜索"
    ],
    answer: 1,
    explanation: "GraphPlan builds a planning graph with alternating layers of propositions and actions, along with mutual exclusion (mutex) constraints. It then searches backward through the graph to extract a valid plan. The planning graph provides powerful heuristics and can detect unsolvable problems early.",
    explanationChinese: "GraphPlan构建一个具有交替命题和动作层的规划图，以及互斥（mutex）约束。然后它通过图向后搜索以提取有效计划。规划图提供强大的启发式，可以提前检测不可解问题。",
    diagram: "",
    terms: ["planning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 241,
    q: "Partial-order planning differs from total-order planning by:",
    qChinese: "偏序规划与全序规划的区别在于：",
    options: [
      "A) Fixing the order of all actions",
      "B) Not using any actions",
      "C) Only ordering actions when necessary, leaving others unordered",
      "D) Using random ordering"
    ],
    optionsChinese: [
      "A) 固定所有动作的顺序",
      "B) 不使用任何动作",
      "C) 仅在必要时排序动作，其余不排序",
      "D) 使用随机排序"
    ],
    answer: 2,
    explanation: "Partial-order planning represents plans as partially ordered sets of actions, only imposing ordering constraints where necessary (causal dependencies). This avoids premature commitment to a specific ordering, reducing the search space. Actions without ordering constraints can be executed in any order or in parallel.",
    explanationChinese: "偏序规划将计划表示为部分有序的动作集，仅在必要时（因果依赖）施加排序约束。这避免了对特定顺序的过早承诺，减少了搜索空间。没有排序约束的动作可以以任何顺序或并行执行。",
    diagram: "",
    terms: ["planning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 242,
    q: "Hierarchical Task Network (HTN) planning decomposes tasks by:",
    qChinese: "层次任务网络（HTN）规划通过以下方式分解任务：",
    options: [
      "A) Recursively breaking high-level tasks into subtasks using methods",
      "B) Random splitting",
      "C) Only using primitive actions",
      "D) Ignoring task structure"
    ],
    optionsChinese: [
      "A) 使用方法递归地将高级任务分解为子任务",
      "B) 随机分割",
      "C) 仅使用原始动作",
      "D) 忽略任务结构"
    ],
    answer: 0,
    explanation: "HTN planning uses methods that decompose abstract (compound) tasks into sequences of subtasks, which are further decomposed until only primitive (executable) actions remain. HTN planning leverages domain knowledge encoded in the decomposition methods, making it more efficient than classical planning for structured domains.",
    explanationChinese: "HTN规划使用将抽象（复合）任务分解为子任务序列的方法，这些子任务进一步分解直到只剩下原始（可执行）动作。HTN规划利用编码在分解方法中的领域知识，使其对结构化领域比经典规划更高效。",
    diagram: "",
    terms: ["planning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 243,
    q: "A heuristic for planning can be derived from the 'relaxed problem' where:",
    qChinese: "规划的启发式可以从'放松问题'中导出，其中：",
    options: [
      "A) Delete effects of actions are ignored",
      "B) All actions are removed",
      "C) All preconditions are removed",
      "D) The goal is removed"
    ],
    optionsChinese: [
      "A) 动作的删除效果被忽略",
      "B) 所有动作被移除",
      "C) 所有前提条件被移除",
      "D) 目标被移除"
    ],
    answer: 0,
    explanation: "The delete relaxation ignores all delete effects, making the relaxed problem easier to solve (adding facts never hurts). The optimal solution length of the relaxed problem is an admissible heuristic for the original. This is one of the most effective heuristics in modern AI planning systems.",
    explanationChinese: "删除放松忽略所有删除效果，使放松问题更容易求解（添加事实永远不会有害）。放松问题的最优解长度是原始问题的可采纳启发式。这是现代AI规划系统中最有效的启发式之一。",
    diagram: "",
    terms: ["planning", "heuristic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 244,
    q: "Contingent planning is needed when:",
    qChinese: "当以下情况时需要应急规划：",
    options: [
      "A) The environment is fully deterministic and observable",
      "B) There is only one action",
      "C) The agent faces uncertainty about action outcomes or incomplete information",
      "D) No planning is needed"
    ],
    optionsChinese: [
      "A) 环境完全确定且可观测",
      "B) 只有一个动作",
      "C) 智能体面对动作结果的不确定性或不完整信息",
      "D) 不需要规划"
    ],
    answer: 2,
    explanation: "Contingent (conditional) planning creates plans with branches that handle different outcomes. When actions have uncertain effects or the environment is partially observable, the agent needs different action sequences for different possible situations. The plan is a tree of if-then-else structures rather than a linear sequence.",
    explanationChinese: "应急（条件）规划创建具有处理不同结果的分支的计划。当动作有不确定效果或环境部分可观测时，智能体需要不同的动作序列来应对不同的可能情况。计划是if-then-else结构的树而不是线性序列。",
    diagram: "",
    terms: ["planning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 245,
    q: "The decision-theoretic approach to planning integrates:",
    qChinese: "决策论方法的规划整合了：",
    options: [
      "A) Only logic",
      "B) Only search",
      "C) Only utility",
      "D) Probability (beliefs about outcomes) and utility (preferences over outcomes)"
    ],
    optionsChinese: [
      "A) 仅逻辑",
      "B) 仅搜索",
      "C) 仅效用",
      "D) 概率（对结果的信念）和效用（对结果的偏好）"
    ],
    answer: 3,
    explanation: "Decision-theoretic planning uses the Maximum Expected Utility framework: the agent evaluates plans by computing their expected utility based on probabilistic action models and preference-based utility functions. This naturally handles uncertainty, unlike classical planning which assumes deterministic actions.",
    explanationChinese: "决策论规划使用最大期望效用框架：智能体通过基于概率动作模型和基于偏好的效用函数计算期望效用来评估计划。这自然处理不确定性，不像假设确定性动作的经典规划。",
    diagram: "",
    terms: ["planning", "utility_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 246,
    q: "PDDL (Planning Domain Definition Language) is used to:",
    qChinese: "PDDL（规划领域定义语言）用于：",
    options: [
      "A) Write web pages",
      "B) Define database schemas",
      "C) Train neural networks",
      "D) Formally specify planning domains and problems in a standard language"
    ],
    optionsChinese: [
      "A) 编写网页",
      "B) 定义数据库模式",
      "C) 训练神经网络",
      "D) 用标准语言正式指定规划领域和问题"
    ],
    answer: 3,
    explanation: "PDDL is the standard input language for AI planners. It separates domain descriptions (action schemas, types, predicates) from problem descriptions (initial state, goal). PDDL has been extended over time to support durative actions, numeric fluents, preferences, and probabilistic effects.",
    explanationChinese: "PDDL是AI规划器的标准输入语言。它将领域描述（动作模式、类型、谓词）与问题描述（初始状态、目标）分开。PDDL随时间扩展以支持持续动作、数值流、偏好和概率效果。",
    diagram: "",
    terms: ["planning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 247,
    q: "A conformant plan works even without observations because:",
    qChinese: "一致性计划即使没有观测也能工作，因为：",
    options: [
      "A) It assumes perfect information",
      "B) It ignores the goal",
      "C) It achieves the goal regardless of which possible initial state or outcome occurs",
      "D) It uses sensors"
    ],
    optionsChinese: [
      "A) 它假设完美信息",
      "B) 它忽略目标",
      "C) 无论哪种可能的初始状态或结果发生，它都能实现目标",
      "D) 它使用传感器"
    ],
    answer: 2,
    explanation: "A conformant plan is a sequence of actions that achieves the goal in all possible initial states and with all possible action outcomes, without any sensing. It plans in belief space, where states are sets of possible world states. Finding conformant plans is harder than classical planning but is crucial for sensorless agents.",
    explanationChinese: "一致性计划是在所有可能的初始状态和所有可能的动作结果下实现目标的动作序列，无需任何感知。它在信念空间中规划，其中状态是可能世界状态的集合。找到一致性计划比经典规划更难，但对无传感器智能体至关重要。",
    diagram: "",
    terms: ["planning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 248,
    q: "Replanning (online planning) involves:",
    qChinese: "重新规划（在线规划）涉及：",
    options: [
      "A) Creating one plan and never changing it",
      "B) Planning only in hindsight",
      "C) Not planning at all",
      "D) Executing part of a plan, observing the result, and replanning if needed"
    ],
    optionsChinese: [
      "A) 创建一个计划永远不改变",
      "B) 仅在事后规划",
      "C) 完全不规划",
      "D) 执行计划的一部分，观察结果，如果需要则重新规划"
    ],
    answer: 3,
    explanation: "Online replanning interleaves planning and execution. The agent creates a partial plan, executes some steps, observes the actual state, and replans if the world differs from expectations. This handles unexpected situations better than offline planning and is more practical for dynamic environments.",
    explanationChinese: "在线重新规划交错规划和执行。智能体创建部分计划，执行一些步骤，观察实际状态，如果世界与预期不同则重新规划。这比离线规划更好地处理意外情况，对动态环境更实用。",
    diagram: "",
    terms: ["planning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 249,
    q: "The Sussman anomaly demonstrates a limitation of:",
    qChinese: "Sussman异常展示了以下的局限性：",
    options: [
      "A) Bayesian networks",
      "B) Linear planning that achieves goals independently without considering interactions",
      "C) Neural networks",
      "D) Search algorithms"
    ],
    optionsChinese: [
      "A) 贝叶斯网络",
      "B) 独立实现目标而不考虑交互的线性规划",
      "C) 神经网络",
      "D) 搜索算法"
    ],
    answer: 1,
    explanation: "The Sussman anomaly (in the blocks world) shows that achieving goals one at a time can fail: achieving one goal may undo another. A linear planner working on goals independently cannot solve it. Non-linear (partial-order) planners or interleaved goal achievement is needed to handle such interactions.",
    explanationChinese: "Sussman异常（在积木世界中）表明一次实现一个目标可能失败：实现一个目标可能撤销另一个。独立处理目标的线性规划器无法解决它。需要非线性（偏序）规划器或交错目标实现来处理这种交互。",
    diagram: "",
    terms: ["planning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 250,
    q: "Planning as satisfiability (SAT-based planning) works by:",
    qChinese: "作为可满足性的规划（基于SAT的规划）通过以下方式工作：",
    options: [
      "A) Encoding the planning problem as a Boolean formula and using a SAT solver",
      "B) Random action selection",
      "C) Using only heuristics",
      "D) Ignoring actions"
    ],
    optionsChinese: [
      "A) 将规划问题编码为布尔公式并使用SAT求解器",
      "B) 随机动作选择",
      "C) 仅使用启发式",
      "D) 忽略动作"
    ],
    answer: 0,
    explanation: "SAT-based planning encodes the planning problem as a propositional satisfiability problem: variables represent action executions and fluent values at each time step. A satisfying assignment corresponds to a valid plan. Modern SAT solvers can efficiently find plans for many practical planning problems.",
    explanationChinese: "基于SAT的规划将规划问题编码为命题可满足性问题：变量表示每个时间步的动作执行和流值。满足赋值对应有效计划。现代SAT求解器可以高效地为许多实际规划问题找到计划。",
    diagram: "",
    terms: ["planning", "propositional_logic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 251,
    q: "A decision tree in decision analysis represents:",
    qChinese: "决策分析中的决策树表示：",
    options: [
      "A) A machine learning classifier",
      "B) A sequence of decisions and chance events with outcomes and utilities",
      "C) A binary search tree",
      "D) A game tree only"
    ],
    optionsChinese: [
      "A) 机器学习分类器",
      "B) 具有结果和效用的决策和机会事件序列",
      "C) 二叉搜索树",
      "D) 仅博弈树"
    ],
    answer: 1,
    explanation: "A decision tree in decision analysis alternates between decision nodes (agent choices) and chance nodes (uncertain outcomes with probabilities). Leaf nodes have utility values. The agent uses backward induction to compute expected utilities and selects the optimal decision at each decision node.",
    explanationChinese: "决策分析中的决策树在决策节点（智能体选择）和机会节点（具有概率的不确定结果）之间交替。叶节点有效用值。智能体使用逆向归纳计算期望效用并在每个决策节点选择最优决策。",
    diagram: "",
    terms: ["utility_function", "planning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 252,
    q: "Multi-objective planning must handle:",
    qChinese: "多目标规划必须处理：",
    options: [
      "A) Only one goal",
      "B) Only minimization",
      "C) No objectives",
      "D) Multiple possibly conflicting objectives that need to be balanced"
    ],
    optionsChinese: [
      "A) 仅一个目标",
      "B) 仅最小化",
      "C) 没有目标",
      "D) 需要平衡的多个可能冲突的目标"
    ],
    answer: 3,
    explanation: "Multi-objective planning addresses situations where the agent has multiple goals that may conflict (e.g., minimize cost AND minimize time). Solutions lie on the Pareto frontier: sets of plans where no objective can be improved without worsening another. Trade-off analysis helps select among Pareto-optimal plans.",
    explanationChinese: "多目标规划处理智能体有多个可能冲突的目标的情况（如最小化成本和最小化时间）。解位于帕累托前沿：没有目标可以在不恶化另一个目标的情况下改进的计划集。权衡分析帮助在帕累托最优计划中选择。",
    diagram: "",
    terms: ["planning", "utility_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 253,
    q: "The blocks world is a classic planning domain where the task is to:",
    qChinese: "积木世界是一个经典规划领域，任务是：",
    options: [
      "A) Sort numbers",
      "B) Rearrange blocks on a table to achieve a goal configuration using stack/unstack actions",
      "C) Play chess",
      "D) Navigate a maze"
    ],
    optionsChinese: [
      "A) 排序数字",
      "B) 使用堆叠/拆卸动作重新排列桌上的积木以实现目标配置",
      "C) 下棋",
      "D) 导航迷宫"
    ],
    answer: 1,
    explanation: "The blocks world involves stacking and unstacking blocks to achieve a desired configuration. Actions include pick-up, put-down, stack, and unstack. Despite its apparent simplicity, optimal blocks world planning is NP-hard. It has been a foundational testbed for AI planning research since the 1970s.",
    explanationChinese: "积木世界涉及堆叠和拆卸积木以实现期望配置。动作包括拾取、放下、堆叠和拆卸。尽管看起来简单，最优积木世界规划是NP难的。自1970年代以来，它一直是AI规划研究的基础测试平台。",
    diagram: "",
    terms: ["planning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 254,
    q: "Temporal planning extends classical planning by considering:",
    qChinese: "时间规划通过考虑以下扩展经典规划：",
    options: [
      "A) Only action names",
      "B) Only the number of actions",
      "C) Action durations, concurrency, and temporal constraints",
      "D) Spatial information only"
    ],
    optionsChinese: [
      "A) 仅动作名称",
      "B) 仅动作数量",
      "C) 动作持续时间、并发性和时间约束",
      "D) 仅空间信息"
    ],
    answer: 2,
    explanation: "Temporal planning handles actions that take varying amounts of time and can overlap (execute concurrently). PDDL 2.1 introduced durative actions with at-start, at-end, and over-all conditions and effects. Temporal planners must schedule actions while respecting temporal constraints and resource limitations.",
    explanationChinese: "时间规划处理需要不同时间量并且可以重叠（并发执行）的动作。PDDL 2.1引入了具有开始时、结束时和整个期间条件和效果的持续动作。时间规划器必须在遵守时间约束和资源限制的情况下安排动作。",
    diagram: "",
    terms: ["planning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 255,
    q: "The means-ends analysis strategy for planning works by:",
    qChinese: "规划的手段-目的分析策略通过以下方式工作：",
    options: [
      "A) Identifying differences between current and goal state and choosing actions to reduce them",
      "B) Random action selection",
      "C) Ignoring the goal",
      "D) Using only forward search"
    ],
    optionsChinese: [
      "A) 识别当前状态和目标状态之间的差异并选择减少差异的动作",
      "B) 随机动作选择",
      "C) 忽略目标",
      "D) 仅使用前向搜索"
    ],
    answer: 0,
    explanation: "Means-ends analysis compares the current state with the goal, identifies the most important difference, and selects an action (means) that reduces that difference (ends). It recursively creates subgoals for the action's preconditions. GPS (General Problem Solver) was the first system to use this approach.",
    explanationChinese: "手段-目的分析比较当前状态和目标，识别最重要的差异，并选择减少该差异的动作（手段-目的）。它递归地为动作的前提条件创建子目标。GPS（通用问题求解器）是第一个使用这种方法的系统。",
    diagram: "",
    terms: ["planning", "search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 256,
    q: "A plan is 'sound' if:",
    qChinese: "一个计划是'健全的'如果：",
    options: [
      "A) It is short",
      "B) It uses all available actions",
      "C) Executing its actions from the initial state achieves the goal",
      "D) It has no preconditions"
    ],
    optionsChinese: [
      "A) 它很短",
      "B) 它使用所有可用动作",
      "C) 从初始状态执行其动作实现目标",
      "D) 它没有前提条件"
    ],
    answer: 2,
    explanation: "A sound plan correctly transforms the initial state into a goal state through its action sequence. Each action's preconditions must be satisfied when it is executed, and after all actions are executed, the goal conditions must hold. Planner correctness depends on generating only sound plans.",
    explanationChinese: "健全的计划通过其动作序列正确地将初始状态转换为目标状态。每个动作的前提条件在执行时必须被满足，所有动作执行后，目标条件必须成立。规划器的正确性取决于只生成健全的计划。",
    diagram: "",
    terms: ["planning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 257,
    q: "The Fast Downward planner is notable for using:",
    qChinese: "Fast Downward规划器因使用以下而著名：",
    options: [
      "A) No heuristics",
      "B) Multi-valued state variables and powerful heuristics like causal graph and landmark heuristics",
      "C) Only brute force",
      "D) Neural networks exclusively"
    ],
    optionsChinese: [
      "A) 没有启发式",
      "B) 多值状态变量和强大的启发式如因果图和地标启发式",
      "C) 仅暴力搜索",
      "D) 仅使用神经网络"
    ],
    answer: 1,
    explanation: "Fast Downward is one of the most successful AI planners. It translates PDDL problems to a multi-valued representation (SAS+), computes domain transition graphs, and uses sophisticated heuristics including causal graph, landmark, and merge-and-shrink heuristics to guide the search efficiently.",
    explanationChinese: "Fast Downward是最成功的AI规划器之一。它将PDDL问题转换为多值表示（SAS+），计算领域转移图，并使用包括因果图、地标和合并收缩启发式在内的复杂启发式来高效引导搜索。",
    diagram: "",
    terms: ["planning", "heuristic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 258,
    q: "Utility theory provides the foundation for rational decision-making by:",
    qChinese: "效用理论通过以下为理性决策提供基础：",
    options: [
      "A) Eliminating all uncertainty",
      "B) Ignoring preferences",
      "C) Quantifying preferences with a utility function that enables comparison of outcomes",
      "D) Using only logical reasoning"
    ],
    optionsChinese: [
      "A) 消除所有不确定性",
      "B) 忽略偏好",
      "C) 用效用函数量化偏好，使结果可以比较",
      "D) 仅使用逻辑推理"
    ],
    answer: 2,
    explanation: "Utility theory assigns numeric values to outcomes reflecting the agent's preferences. With a utility function satisfying certain axioms (completeness, transitivity, etc.), rational decisions reduce to maximizing expected utility. This provides a principled framework for decision-making under uncertainty.",
    explanationChinese: "效用理论为结果分配反映智能体偏好的数值。通过满足某些公理（完备性、传递性等）的效用函数，理性决策简化为最大化期望效用。这为不确定性下的决策提供了原则性框架。",
    diagram: "",
    terms: ["utility_function", "planning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 259,
    q: "A conditional plan (contingency plan) is structured as:",
    qChinese: "条件计划（应急计划）的结构为：",
    options: [
      "A) A linear sequence of actions",
      "B) A single action",
      "C) A tree with branches based on observations",
      "D) A random permutation"
    ],
    optionsChinese: [
      "A) 线性动作序列",
      "B) 单个动作",
      "C) 基于观测的带分支的树",
      "D) 随机排列"
    ],
    answer: 2,
    explanation: "A conditional plan is a tree structure where branches correspond to different possible observations or outcomes. After each action, the agent observes the result and follows the corresponding branch. This allows handling uncertainty by preparing different responses for different situations.",
    explanationChinese: "条件计划是一种树结构，其中分支对应不同的可能观测或结果。每个动作后，智能体观察结果并沿相应分支继续。这允许通过为不同情况准备不同响应来处理不确定性。",
    diagram: "",
    terms: ["planning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 260,
    q: "The closed-loop approach to planning means:",
    qChinese: "规划的闭环方法意味着：",
    options: [
      "A) Continuously sensing the environment and adjusting the plan based on feedback",
      "B) Planning once and executing without feedback",
      "C) Never executing the plan",
      "D) Ignoring sensor data"
    ],
    optionsChinese: [
      "A) 持续感知环境并根据反馈调整计划",
      "B) 规划一次并执行而没有反馈",
      "C) 永不执行计划",
      "D) 忽略传感器数据"
    ],
    answer: 0,
    explanation: "Closed-loop planning uses sensor feedback to adapt actions in real time. Unlike open-loop planning (execute a fixed plan), closed-loop systems monitor execution, detect deviations from expectations, and modify the plan accordingly. This is essential for real-world robotics and autonomous systems.",
    explanationChinese: "闭环规划使用传感器反馈实时调整动作。与开环规划（执行固定计划）不同，闭环系统监控执行，检测与预期的偏差，并相应修改计划。这对现实世界的机器人和自主系统至关重要。",
    diagram: "",
    terms: ["planning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 261,
    q: "In constraint satisfaction problems, what does arc consistency (AC-3) enforce?",
    qChinese: "在约束满足问题中，弧一致性（AC-3）强制执行什么？",
    options: [
      "A) Every variable has exactly one value",
      "B) For every value in a variable's domain, there exists a consistent value in each neighboring variable's domain",
      "C) All constraints are removed",
      "D) The solution is always unique"
    ],
    optionsChinese: [
      "A) 每个变量恰好有一个值",
      "B) 对于变量域中的每个值，在每个相邻变量的域中都存在一个一致的值",
      "C) 所有约束都被移除",
      "D) 解总是唯一的"
    ],
    answer: 1,
    explanation: "Arc consistency ensures that for every value in the domain of variable Xi, there exists at least one value in the domain of variable Xj that satisfies the constraint between them. AC-3 repeatedly removes inconsistent values from domains until all arcs are consistent, often significantly reducing the search space before backtracking begins.",
    explanationChinese: "弧一致性确保对于变量Xi域中的每个值，在变量Xj的域中至少存在一个满足它们之间约束的值。AC-3反复从域中移除不一致的值，直到所有弧都一致，通常在回溯开始之前显著缩小搜索空间。",
    diagram: "",
    terms: ["constraint_satisfaction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 262,
    q: "What is the time complexity of the AC-3 algorithm for enforcing arc consistency?",
    qChinese: "AC-3算法用于强制弧一致性的时间复杂度是多少？",
    options: [
      "A) O(n)",
      "B) O(n^2)",
      "D) O(2^n)",
      "C) O(ed^3) where e is the number of arcs and d is the domain size"
    ],
    optionsChinese: [
      "A) O(n)",
      "B) O(n^2)",
      "D) O(2^n)",
      "C) O(ed^3)，其中e是弧数，d是域大小"
    ],
    answer: 3,
    explanation: "AC-3 has a worst-case time complexity of O(ed^3), where e is the number of binary constraints (arcs) and d is the maximum domain size. Each arc can be re-inserted into the queue at most d times, and checking consistency of an arc takes O(d^2) time. This makes AC-3 a polynomial-time preprocessing step.",
    explanationChinese: "AC-3的最坏情况时间复杂度为O(ed^3)，其中e是二元约束（弧）的数量，d是最大域大小。每条弧最多可以重新插入队列d次，检查弧的一致性需要O(d^2)时间。这使得AC-3成为多项式时间的预处理步骤。",
    diagram: "",
    terms: ["constraint_satisfaction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 263,
    q: "Backjumping in CSP search improves upon simple backtracking by:",
    qChinese: "CSP搜索中的回跳通过以下方式改进了简单回溯：",
    options: [
      "A) Expanding more nodes than backtracking",
      "B) Always jumping to the root node",
      "C) Eliminating all constraints",
      "D) Jumping back to the variable that caused the conflict rather than the most recent variable"
    ],
    optionsChinese: [
      "A) 比回溯扩展更多节点",
      "B) 总是跳到根节点",
      "C) 消除所有约束",
      "D) 跳回导致冲突的变量而不是最近的变量"
    ],
    answer: 3,
    explanation: "Backjumping analyzes the conflict set to determine which earlier variable assignment caused the current failure. Instead of chronologically backtracking to the most recent variable, it jumps directly to the culprit variable, avoiding exploration of branches that would lead to the same conflict. This can dramatically reduce the search space.",
    explanationChinese: "回跳分析冲突集以确定哪个较早的变量赋值导致了当前失败。它不是按时间顺序回溯到最近的变量，而是直接跳到罪魁祸首变量，避免探索会导致相同冲突的分支。这可以显著减少搜索空间。",
    diagram: "",
    terms: ["constraint_satisfaction", "search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 264,
    q: "Tree decomposition in CSP solving is useful because:",
    qChinese: "CSP求解中的树分解是有用的，因为：",
    options: [
      "A) It removes all variables",
      "B) It always makes the problem harder",
      "C) It converts the constraint graph into a tree structure that can be solved in polynomial time",
      "D) It only works for trivial problems"
    ],
    optionsChinese: [
      "A) 它移除所有变量",
      "B) 它总是使问题更难",
      "C) 它将约束图转换为可以在多项式时间内求解的树结构",
      "D) 它只适用于简单问题"
    ],
    answer: 2,
    explanation: "Tree decomposition restructures a constraint graph into a tree of clusters, where each cluster contains a subset of variables. If the constraint graph has bounded treewidth w, the problem can be solved in O(n * d^(w+1)) time, which is polynomial for fixed treewidth. This exploits the near-tree structure often found in practical CSP instances.",
    explanationChinese: "树分解将约束图重构为簇的树，其中每个簇包含变量的子集。如果约束图具有有界树宽w，问题可以在O(n * d^(w+1))时间内求解，对于固定树宽这是多项式时间。这利用了实际CSP实例中经常发现的近树结构。",
    diagram: "",
    terms: ["constraint_satisfaction"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 265,
    q: "A Nash equilibrium in game theory is a state where:",
    qChinese: "博弈论中的纳什均衡是一种状态，其中：",
    options: [
      "A) All players receive the maximum possible payoff",
      "B) No player can improve their payoff by unilaterally changing their strategy",
      "C) The game is over and all resources are exhausted",
      "D) All players cooperate fully"
    ],
    optionsChinese: [
      "A) 所有玩家获得最大可能收益",
      "B) 没有玩家可以通过单方面改变策略来提高收益",
      "C) 游戏结束且所有资源耗尽",
      "D) 所有玩家完全合作"
    ],
    answer: 1,
    explanation: "A Nash equilibrium is a strategy profile where no player has an incentive to deviate unilaterally. Each player's strategy is a best response to the strategies of all other players. Nash proved that every finite game has at least one Nash equilibrium, possibly in mixed strategies, which is a foundational result in game theory.",
    explanationChinese: "纳什均衡是一种策略组合，其中没有玩家有动机单方面偏离。每个玩家的策略都是对所有其他玩家策略的最佳回应。纳什证明了每个有限博弈至少有一个纳什均衡，可能是混合策略，这是博弈论的基础性结果。",
    diagram: "",
    terms: ["game_tree", "multi_agent_system"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 266,
    q: "In a Prisoner's Dilemma game, the dominant strategy for each player is to:",
    qChinese: "在囚徒困境博弈中，每个玩家的优势策略是：",
    options: [
      "A) Cooperate",
      "B) Randomize",
      "C) Defect",
      "D) Wait indefinitely"
    ],
    optionsChinese: [
      "A) 合作",
      "B) 随机化",
      "C) 背叛",
      "D) 无限期等待"
    ],
    answer: 2,
    explanation: "In the Prisoner's Dilemma, defection is the dominant strategy because regardless of what the other player does, defecting always yields a higher individual payoff. However, mutual defection leads to a worse outcome for both players than mutual cooperation, illustrating the tension between individual rationality and collective welfare.",
    explanationChinese: "在囚徒困境中，背叛是优势策略，因为无论其他玩家做什么，背叛总是产生更高的个人收益。然而，相互背叛导致的结果比相互合作对两个玩家都更差，说明了个人理性和集体福利之间的张力。",
    diagram: "",
    terms: ["game_tree", "multi_agent_system"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 267,
    q: "Mechanism design in multi-agent systems is concerned with:",
    qChinese: "多智能体系统中的机制设计关注的是：",
    options: [
      "A) Building physical robots",
      "B) Optimizing single-agent pathfinding",
      "C) Writing search heuristics",
      "D) Designing the rules of a game to achieve desired outcomes even when agents act selfishly"
    ],
    optionsChinese: [
      "A) 构建物理机器人",
      "B) 优化单智能体路径查找",
      "C) 编写搜索启发式",
      "D) 设计博弈规则以在智能体自私行动时仍实现期望的结果"
    ],
    answer: 3,
    explanation: "Mechanism design is often called 'reverse game theory.' Instead of analyzing a given game, it designs the rules (mechanism) so that rational, self-interested agents are incentivized to behave in ways that achieve a socially desirable outcome. Applications include auction design, voting systems, and resource allocation.",
    explanationChinese: "机制设计通常被称为'逆向博弈论'。它不是分析给定的博弈，而是设计规则（机制），使理性的、自利的智能体被激励以实现社会期望结果的方式行事。应用包括拍卖设计、投票系统和资源分配。",
    diagram: "",
    terms: ["multi_agent_system"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 268,
    q: "Partial-order planning differs from total-order planning in that:",
    qChinese: "偏序规划与全序规划的不同之处在于：",
    options: [
      "A) It requires all actions to be fully ordered",
      "B) It allows actions to remain unordered when there are no dependencies between them",
      "C) It cannot solve any real problem",
      "D) It uses no actions at all"
    ],
    optionsChinese: [
      "A) 它要求所有动作完全排序",
      "B) 它允许动作在它们之间没有依赖关系时保持无序",
      "C) 它不能解决任何实际问题",
      "D) 它根本不使用动作"
    ],
    answer: 1,
    explanation: "Partial-order planning (POP) only orders actions when there is a causal or conflict-based reason to do so. Actions without dependencies can be left unordered, providing flexibility in execution. This approach represents a family of plans simultaneously and often reduces the search space by avoiding unnecessary commitment to action ordering.",
    explanationChinese: "偏序规划（POP）仅在有因果或冲突原因时才对动作进行排序。没有依赖关系的动作可以保持无序，提供执行灵活性。这种方法同时表示一系列计划，通常通过避免不必要地承诺动作排序来减少搜索空间。",
    diagram: "",
    terms: ["planning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 269,
    q: "In partial-order planning, a 'causal link' represents:",
    qChinese: "在偏序规划中，'因果链接'表示：",
    options: [
      "A) A link between two unrelated goals",
      "B) A random connection between actions",
      "C) A constraint that one action achieves a precondition needed by another action",
      "D) A physical hardware connection"
    ],
    optionsChinese: [
      "A) 两个不相关目标之间的链接",
      "B) 动作之间的随机连接",
      "C) 一个动作实现另一个动作所需前提条件的约束",
      "D) 物理硬件连接"
    ],
    answer: 2,
    explanation: "A causal link (Ai --p--> Aj) records that action Ai achieves precondition p needed by action Aj. Causal links must be protected from interference: no other action that deletes p can be placed between Ai and Aj. This 'threat resolution' is a key step in partial-order planning algorithms like POCL.",
    explanationChinese: "因果链接（Ai --p--> Aj）记录动作Ai实现动作Aj所需的前提条件p。因果链接必须防止干扰：不能在Ai和Aj之间放置删除p的其他动作。这种'威胁解决'是偏序规划算法（如POCL）中的关键步骤。",
    diagram: "",
    terms: ["planning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 270,
    q: "Hierarchical Task Network (HTN) planning solves problems by:",
    qChinese: "层次任务网络（HTN）规划通过以下方式解决问题：",
    options: [
      "A) Using only primitive actions from the start",
      "B) Decomposing high-level tasks into subtasks using predefined methods until only primitive actions remain",
      "C) Ignoring task structure entirely",
      "D) Using random decomposition without any structure"
    ],
    optionsChinese: [
      "A) 从一开始只使用原始动作",
      "B) 使用预定义方法将高级任务分解为子任务，直到只剩下原始动作",
      "C) 完全忽略任务结构",
      "D) 使用没有任何结构的随机分解"
    ],
    answer: 1,
    explanation: "HTN planning uses a library of methods that specify how compound tasks can be decomposed into simpler subtasks. The process continues recursively until all tasks are primitive (directly executable) actions. HTN planning leverages domain knowledge encoded in the method library, which often makes it much faster than classical planners for structured domains.",
    explanationChinese: "HTN规划使用方法库来指定如何将复合任务分解为更简单的子任务。该过程递归继续，直到所有任务都是原始（直接可执行的）动作。HTN规划利用方法库中编码的领域知识，这通常使其在结构化领域中比经典规划器快得多。",
    diagram: "",
    terms: ["planning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 271,
    q: "In a Bayesian network, the joint probability distribution is computed using:",
    qChinese: "在贝叶斯网络中，联合概率分布通过以下方式计算：",
    options: [
      "A) Using only uniform distributions",
      "B) Summing all probabilities to zero",
      "C) Ignoring conditional independence",
      "D) Multiplying all conditional probability tables (CPTs) according to the chain rule"
    ],
    optionsChinese: [
      "A) 仅使用均匀分布",
      "B) 将所有概率求和为零",
      "C) 忽略条件独立性",
      "D) 根据链式法则将所有条件概率表（CPT）相乘"
    ],
    answer: 3,
    explanation: "A Bayesian network compactly represents the joint distribution as the product of conditional probability distributions: P(X1,...,Xn) = product of P(Xi | Parents(Xi)). Each node stores a CPT conditioned only on its parents. This factorization exploits conditional independence, reducing the number of parameters from exponential to manageable.",
    explanationChinese: "贝叶斯网络将联合分布紧凑地表示为条件概率分布的乘积：P(X1,...,Xn) = P(Xi | Parents(Xi))的乘积。每个节点仅存储以其父节点为条件的CPT。这种分解利用条件独立性，将参数数量从指数级减少到可管理的水平。",
    diagram: "",
    terms: ["bayesian_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 272,
    q: "D-separation in a Bayesian network is used to determine:",
    qChinese: "贝叶斯网络中的d-分离用于确定：",
    options: [
      "A) The physical distance between nodes",
      "B) Whether two variables are conditionally independent given a set of observed variables",
      "C) Whether the network is connected",
      "D) The total number of edges"
    ],
    optionsChinese: [
      "A) 节点之间的物理距离",
      "B) 给定一组观测变量，两个变量是否条件独立",
      "C) 网络是否连通",
      "D) 边的总数"
    ],
    answer: 1,
    explanation: "D-separation provides a graphical criterion for reading conditional independencies from the structure of a Bayesian network. Two variables X and Y are d-separated given evidence Z if every undirected path between them is blocked. A path is blocked if it contains a chain or fork node in Z, or a collider node not in Z and with no descendant in Z.",
    explanationChinese: "d-分离提供了一种图形标准，用于从贝叶斯网络的结构中读取条件独立性。给定证据Z，如果X和Y之间的每条无向路径都被阻断，则两个变量X和Y是d-分离的。如果路径包含Z中的链或分叉节点，或者不在Z中且没有后代在Z中的碰撞节点，则路径被阻断。",
    diagram: "",
    terms: ["bayesian_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 273,
    q: "Variable elimination in Bayesian network inference works by:",
    qChinese: "贝叶斯网络推理中的变量消除通过以下方式工作：",
    options: [
      "A) Summing out hidden variables one at a time from the joint distribution in a specific elimination order",
      "B) Converting the network into a decision tree",
      "C) Adding new variables to the network",
      "D) Removing all variables from the network"
    ],
    optionsChinese: [
      "A) 按特定消除顺序从联合分布中逐一对隐变量求和",
      "B) 将网络转换为决策树",
      "C) 向网络添加新变量",
      "D) 从网络中移除所有变量"
    ],
    answer: 0,
    explanation: "Variable elimination computes posterior probabilities by systematically summing out (marginalizing) non-query, non-evidence variables. The key idea is to push summations inside the product of factors, eliminating one variable at a time. The elimination order greatly affects efficiency; finding the optimal order is itself NP-hard, but good heuristics exist.",
    explanationChinese: "变量消除通过系统地对非查询、非证据变量求和（边缘化）来计算后验概率。关键思想是将求和推入因子乘积内部，一次消除一个变量。消除顺序极大地影响效率；找到最优顺序本身是NP-hard的，但存在好的启发式方法。",
    diagram: "",
    terms: ["bayesian_network", "inference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 274,
    q: "A Markov chain satisfies the Markov property, which states that:",
    qChinese: "马尔可夫链满足马尔可夫性质，该性质声明：",
    options: [
      "A) The future depends on the entire history",
      "B) All states are absorbing states",
      "D) Transitions between states are always deterministic",
      "C) The future state depends only on the current state, not on the sequence of states that preceded it"
    ],
    optionsChinese: [
      "A) 未来取决于整个历史",
      "B) 所有状态都是吸收状态",
      "D) 状态之间的转换总是确定性的",
      "C) 未来状态仅取决于当前状态，而不是先前的状态序列"
    ],
    answer: 3,
    explanation: "The Markov property (memorylessness) states that P(St+1 | St, St-1, ..., S0) = P(St+1 | St). The next state depends only on the current state, making the past irrelevant given the present. This simplification makes Markov chains tractable for modeling stochastic processes in areas like NLP, robotics, and finance.",
    explanationChinese: "马尔可夫性质（无记忆性）声明P(St+1 | St, St-1, ..., S0) = P(St+1 | St)。下一个状态仅取决于当前状态，使得给定现在后过去变得无关。这种简化使马尔可夫链在NLP、机器人和金融等领域的随机过程建模中变得可处理。",
    diagram: "",
    terms: ["markov_decision_process"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 275,
    q: "In a Hidden Markov Model (HMM), what is 'hidden'?",
    qChinese: "在隐马尔可夫模型（HMM）中，什么是'隐藏的'？",
    options: [
      "A) The observations",
      "B) The underlying state sequence that generates the observations",
      "C) The transition probabilities",
      "D) The emission probabilities"
    ],
    optionsChinese: [
      "A) 观测值",
      "B) 产生观测值的底层状态序列",
      "C) 转移概率",
      "D) 发射概率"
    ],
    answer: 1,
    explanation: "In an HMM, the system transitions through a sequence of hidden (unobservable) states, and each state emits an observable output according to an emission probability distribution. The goal is typically to infer the most likely hidden state sequence from the observed outputs using algorithms like the Viterbi algorithm or to compute the probability of observations using the forward algorithm.",
    explanationChinese: "在HMM中，系统经历一系列隐藏（不可观测的）状态转换，每个状态根据发射概率分布产生可观测输出。目标通常是使用维特比算法从观测输出中推断最可能的隐藏状态序列，或使用前向算法计算观测的概率。",
    diagram: "",
    terms: ["bayesian_network", "markov_decision_process"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 276,
    q: "The Viterbi algorithm for HMMs is used to:",
    qChinese: "HMM的维特比算法用于：",
    options: [
      "A) Train the model parameters",
      "B) Compute the total probability of an observation sequence",
      "C) Generate random observation sequences",
      "D) Find the most likely sequence of hidden states given the observations"
    ],
    optionsChinese: [
      "A) 训练模型参数",
      "B) 计算观测序列的总概率",
      "C) 生成随机观测序列",
      "D) 找到给定观测值的最可能隐藏状态序列"
    ],
    answer: 3,
    explanation: "The Viterbi algorithm uses dynamic programming to efficiently find the most probable sequence of hidden states (the Viterbi path) that explains a given observation sequence. It runs in O(T * N^2) time where T is the sequence length and N is the number of states. This is used extensively in speech recognition, bioinformatics, and part-of-speech tagging.",
    explanationChinese: "维特比算法使用动态规划高效地找到解释给定观测序列的最可能隐藏状态序列（维特比路径）。它在O(T * N^2)时间内运行，其中T是序列长度，N是状态数。这在语音识别、生物信息学和词性标注中被广泛使用。",
    diagram: "",
    terms: ["markov_decision_process", "search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 277,
    q: "The expected utility of an action a given evidence e is computed as:",
    qChinese: "给定证据e时动作a的期望效用计算为：",
    options: [
      "A) The sum of U(outcome) * P(outcome | a, e) over all possible outcomes",
      "B) The minimum utility over all outcomes",
      "C) The maximum utility regardless of probability",
      "D) A constant value for all actions"
    ],
    optionsChinese: [
      "A) 所有可能结果上U(结果) * P(结果 | a, e)的总和",
      "B) 所有结果的最小效用",
      "C) 不考虑概率的最大效用",
      "D) 所有动作的常数值"
    ],
    answer: 0,
    explanation: "Expected utility combines probabilities and utilities: EU(a|e) = sum over all outcomes s of P(Result(a)=s | a, e) * U(s). A rational agent should choose the action that maximizes expected utility. This principle, known as the Maximum Expected Utility (MEU) principle, is the foundation of decision theory in AI.",
    explanationChinese: "期望效用结合概率和效用：EU(a|e) = 对所有结果s求和 P(Result(a)=s | a, e) * U(s)。理性智能体应选择最大化期望效用的动作。这一原则称为最大期望效用（MEU）原则，是AI中决策理论的基础。",
    diagram: "",
    terms: ["utility_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 278,
    q: "A decision network (influence diagram) extends a Bayesian network by adding:",
    qChinese: "决策网络（影响图）通过添加以下内容扩展贝叶斯网络：",
    options: [
      "A) Only directed cycles",
      "B) Only more chance nodes",
      "C) Fewer variables",
      "D) Decision nodes and utility nodes"
    ],
    optionsChinese: [
      "A) 仅有向环",
      "B) 仅更多机会节点",
      "C) 更少的变量",
      "D) 决策节点和效用节点"
    ],
    answer: 3,
    explanation: "A decision network contains three types of nodes: chance nodes (random variables as in Bayesian networks), decision nodes (choices the agent can make), and utility nodes (representing the agent's preferences over outcomes). The network is evaluated by computing the expected utility for each decision and choosing the optimal action.",
    explanationChinese: "决策网络包含三种类型的节点：机会节点（如贝叶斯网络中的随机变量）、决策节点（智能体可以做出的选择）和效用节点（表示智能体对结果的偏好）。通过计算每个决策的期望效用并选择最优动作来评估网络。",
    diagram: "",
    terms: ["bayesian_network", "utility_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 279,
    q: "The Value of Perfect Information (VPI) in decision theory measures:",
    qChinese: "决策理论中的完全信息价值（VPI）衡量的是：",
    options: [
      "A) The cost of gathering information",
      "B) The time needed to make a decision",
      "C) The total number of unknown variables",
      "D) The maximum amount the agent should pay to learn the true value of an unknown variable before acting"
    ],
    optionsChinese: [
      "A) 收集信息的成本",
      "B) 做出决策所需的时间",
      "C) 未知变量的总数",
      "D) 智能体在行动前应支付的最大金额以了解未知变量的真实值"
    ],
    answer: 3,
    explanation: "VPI is the difference between the expected utility of the best action after learning the variable's value and the expected utility of the best action without that information. VPI is always non-negative because knowing more can never hurt a rational decision maker. It is crucial for deciding which information to gather in sequential decision problems.",
    explanationChinese: "VPI是在了解变量值后最佳动作的期望效用与没有该信息时最佳动作的期望效用之间的差异。VPI总是非负的，因为了解更多永远不会伤害理性决策者。它对于在顺序决策问题中决定收集哪些信息至关重要。",
    diagram: "",
    terms: ["utility_function", "bayesian_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 280,
    q: "In a Markov Decision Process (MDP), the Bellman equation relates:",
    qChinese: "在马尔可夫决策过程（MDP）中，贝尔曼方程关联了：",
    options: [
      "A) Only the initial and final states",
      "B) Only the transition probabilities",
      "C) Two unrelated variables",
      "D) The utility of a state to the immediate reward plus the discounted utility of the next state"
    ],
    optionsChinese: [
      "A) 仅初始和最终状态",
      "B) 仅转移概率",
      "C) 两个不相关的变量",
      "D) 一个状态的效用与即时奖励加上下一个状态的折扣效用"
    ],
    answer: 3,
    explanation: "The Bellman equation states U(s) = R(s) + gamma * max_a sum over s' of P(s'|s,a) * U(s'). It expresses the utility of a state as the immediate reward plus the discounted expected utility of the next state under the optimal action. This recursive relationship is the foundation of value iteration and policy iteration algorithms.",
    explanationChinese: "贝尔曼方程声明U(s) = R(s) + gamma * max_a 对s'求和 P(s'|s,a) * U(s')。它将状态的效用表示为即时奖励加上最优动作下下一状态的折扣期望效用。这个递归关系是值迭代和策略迭代算法的基础。",
    diagram: "",
    terms: ["markov_decision_process", "utility_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 281,
    q: "The discount factor (gamma) in an MDP controls:",
    qChinese: "MDP中的折扣因子（gamma）控制：",
    options: [
      "A) The number of available actions",
      "B) How much the agent values future rewards relative to immediate rewards",
      "C) The size of the state space",
      "D) The number of episodes"
    ],
    optionsChinese: [
      "A) 可用动作的数量",
      "B) 智能体相对于即时奖励对未来奖励的重视程度",
      "C) 状态空间的大小",
      "D) 回合数"
    ],
    answer: 1,
    explanation: "The discount factor gamma is between 0 and 1. A gamma close to 0 makes the agent short-sighted, prioritizing immediate rewards, while a gamma close to 1 makes the agent far-sighted, valuing future rewards almost as much as immediate ones. The discount factor also ensures the total utility converges for infinite-horizon problems.",
    explanationChinese: "折扣因子gamma在0和1之间。接近0的gamma使智能体短视，优先考虑即时奖励，而接近1的gamma使智能体远视，几乎同样重视未来奖励和即时奖励。折扣因子还确保无限时域问题的总效用收敛。",
    diagram: "",
    terms: ["markov_decision_process", "reinforcement_learning_ai"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 282,
    q: "An ontology in AI knowledge representation is:",
    qChinese: "AI知识表示中的本体论是：",
    options: [
      "A) A single database table",
      "B) A type of neural network",
      "C) A formal specification of concepts, relationships, and constraints in a domain",
      "D) A programming language"
    ],
    optionsChinese: [
      "A) 单个数据库表",
      "B) 一种神经网络",
      "C) 领域中概念、关系和约束的正式规范",
      "D) 一种编程语言"
    ],
    answer: 2,
    explanation: "An ontology defines a shared vocabulary and formal representation of knowledge in a domain, including classes, properties, relationships, and axioms. Well-known examples include WordNet (for language), SNOMED CT (for medicine), and the Gene Ontology (for biology). Ontologies enable interoperability, reasoning, and knowledge sharing across AI systems.",
    explanationChinese: "本体论定义了领域中知识的共享词汇和正式表示，包括类、属性、关系和公理。著名的例子包括WordNet（用于语言）、SNOMED CT（用于医学）和基因本体论（用于生物学）。本体论使AI系统之间的互操作性、推理和知识共享成为可能。",
    diagram: "",
    terms: ["knowledge_representation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 283,
    q: "Description logics (DLs) are used in knowledge representation to:",
    qChinese: "描述逻辑（DL）在知识表示中用于：",
    options: [
      "A) Replace all databases",
      "B) Perform image recognition",
      "C) Provide decidable reasoning about concepts, roles, and individuals in ontologies",
      "D) Train deep learning models"
    ],
    optionsChinese: [
      "A) 替代所有数据库",
      "B) 执行图像识别",
      "C) 提供关于本体中概念、角色和个体的可判定推理",
      "D) 训练深度学习模型"
    ],
    answer: 2,
    explanation: "Description logics are a family of knowledge representation formalisms that balance expressiveness with decidability. They form the logical foundation of the Web Ontology Language (OWL). DLs support reasoning tasks such as concept subsumption, instance classification, and consistency checking, making them essential for semantic web and knowledge graph applications.",
    explanationChinese: "描述逻辑是一系列知识表示形式化方法，在表达力和可判定性之间取得平衡。它们构成了Web本体语言（OWL）的逻辑基础。DL支持概念包含、实例分类和一致性检查等推理任务，使其对语义网和知识图谱应用至关重要。",
    diagram: "",
    terms: ["knowledge_representation", "inference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 284,
    q: "The Turing Test evaluates whether a machine can:",
    qChinese: "图灵测试评估机器是否能够：",
    options: [
      "A) Exhibit intelligent behavior indistinguishable from a human in a text-based conversation",
      "B) Store more data than a human brain",
      "C) Run faster than a human",
      "D) Physically resemble a human"
    ],
    optionsChinese: [
      "A) 在基于文本的对话中表现出与人类无法区分的智能行为",
      "B) 存储比人脑更多的数据",
      "C) 运行速度比人类快",
      "D) 在外形上像人类"
    ],
    answer: 0,
    explanation: "Proposed by Alan Turing in 1950, the Turing Test (originally the 'imitation game') tests whether a human interrogator can distinguish a machine from a human based solely on text conversation. If the interrogator cannot reliably tell them apart, the machine is said to have passed. While influential, it has been criticized for testing imitation rather than genuine understanding.",
    explanationChinese: "图灵测试由阿兰·图灵于1950年提出（最初称为'模仿游戏'），测试人类询问者是否能仅根据文本对话区分机器和人类。如果询问者不能可靠地区分它们，则该机器被认为通过了测试。虽然具有影响力，但它被批评为测试模仿而非真正的理解。",
    diagram: "",
    terms: ["knowledge_representation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 285,
    q: "Searle's Chinese Room argument claims that:",
    qChinese: "塞尔的中文房间论证声称：",
    options: [
      "A) A system can pass the Turing Test by manipulating symbols without any genuine understanding",
      "B) Symbol manipulation alone is sufficient for understanding",
      "C) Computers can truly understand Chinese",
      "D) All AI systems are conscious"
    ],
    optionsChinese: [
      "A) 一个系统可以通过操作符号来通过图灵测试，但没有任何真正的理解",
      "B) 仅仅符号操作就足以实现理解",
      "C) 计算机可以真正理解中文",
      "D) 所有AI系统都有意识"
    ],
    answer: 0,
    explanation: "John Searle's 1980 thought experiment argues against strong AI. A person in a room follows rules to manipulate Chinese symbols, producing correct responses without understanding Chinese. Searle argues this shows that syntax (symbol manipulation) is not sufficient for semantics (understanding), challenging the view that running a program can produce genuine comprehension.",
    explanationChinese: "约翰·塞尔1980年的思想实验反对强人工智能。房间里的人按照规则操作中文符号，产生正确的回应但不理解中文。塞尔认为这表明语法（符号操作）不足以产生语义（理解），挑战了运行程序可以产生真正理解的观点。",
    diagram: "",
    terms: ["knowledge_representation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 286,
    q: "The distinction between 'strong AI' and 'weak AI' is that:",
    qChinese: "'强人工智能'和'弱人工智能'的区别在于：",
    options: [
      "A) Strong AI claims machines can truly think and have consciousness, while weak AI claims machines can only simulate intelligence",
      "B) Strong AI runs on stronger hardware",
      "C) Weak AI is slower than strong AI",
      "D) There is no meaningful distinction"
    ],
    optionsChinese: [
      "A) 强人工智能声称机器可以真正思考并具有意识，而弱人工智能声称机器只能模拟智能",
      "B) 强人工智能在更强的硬件上运行",
      "C) 弱人工智能比强人工智能慢",
      "D) 没有有意义的区别"
    ],
    answer: 0,
    explanation: "Weak (narrow) AI refers to systems designed to perform specific tasks that appear intelligent but do not possess genuine understanding or consciousness. Strong (general) AI posits that a properly programmed computer would actually have a mind and cognitive states. This philosophical distinction, popularized by Searle, remains central to debates about the nature of AI.",
    explanationChinese: "弱（窄）人工智能指的是设计用于执行看似智能但不具有真正理解或意识的特定任务的系统。强（通用）人工智能认为一个正确编程的计算机实际上会拥有心智和认知状态。这一由塞尔推广的哲学区分仍然是关于AI本质辩论的核心。",
    diagram: "",
    terms: ["knowledge_representation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 287,
    q: "Algorithmic bias in AI systems most commonly arises from:",
    qChinese: "AI系统中的算法偏见最常见的原因是：",
    options: [
      "A) Making algorithms run too fast",
      "B) Using too much computing power",
      "C) Biased training data, biased feature selection, or biased design choices",
      "D) Using too few parameters"
    ],
    optionsChinese: [
      "A) 使算法运行太快",
      "B) 使用太多计算能力",
      "C) 有偏见的训练数据、有偏见的特征选择或有偏见的设计选择",
      "D) 使用太少的参数"
    ],
    answer: 2,
    explanation: "Algorithmic bias occurs when AI systems produce systematically unfair results. The most common sources include training data that reflects historical inequalities, feature selection that encodes protected attributes (even indirectly), and evaluation metrics that do not account for fairness across demographic groups. Addressing bias requires careful data curation, fairness-aware algorithms, and ongoing auditing.",
    explanationChinese: "当AI系统产生系统性不公平结果时，就会出现算法偏见。最常见的来源包括反映历史不平等的训练数据、编码受保护属性（即使是间接的）的特征选择，以及不考虑跨人口群体公平性的评估指标。解决偏见需要仔细的数据策划、公平感知算法和持续审计。",
    diagram: "",
    terms: ["search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 288,
    q: "The concept of 'explainability' (XAI) in AI ethics refers to:",
    qChinese: "AI伦理中的'可解释性'（XAI）概念指的是：",
    options: [
      "A) Making AI systems run faster",
      "B) Reducing the size of AI models",
      "C) Encrypting AI models",
      "D) Ensuring AI systems can provide understandable reasons for their decisions"
    ],
    optionsChinese: [
      "A) 使AI系统运行更快",
      "B) 减小AI模型的大小",
      "C) 加密AI模型",
      "D) 确保AI系统能为其决策提供可理解的理由"
    ],
    answer: 3,
    explanation: "Explainable AI (XAI) aims to make AI decision-making transparent and interpretable to humans. This is crucial in high-stakes domains like healthcare, criminal justice, and finance, where people need to understand why a system made a particular decision. Techniques include LIME, SHAP, attention visualization, and rule extraction from neural networks.",
    explanationChinese: "可解释人工智能（XAI）旨在使AI决策过程对人类透明和可解释。这在医疗保健、刑事司法和金融等高风险领域至关重要，人们需要理解系统为什么做出特定决策。技术包括LIME、SHAP、注意力可视化和从神经网络中提取规则。",
    diagram: "",
    terms: ["knowledge_representation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 289,
    q: "Fairness in machine learning can be defined in multiple ways. 'Demographic parity' requires that:",
    qChinese: "机器学习中的公平性可以有多种定义。'人口统计平等'要求：",
    options: [
      "A) The model achieves 100% accuracy",
      "B) All features are removed from the model",
      "C) The positive prediction rate is the same across all protected groups",
      "D) The model uses the largest possible dataset"
    ],
    optionsChinese: [
      "A) 模型达到100%准确率",
      "B) 从模型中移除所有特征",
      "C) 正预测率在所有受保护群体中相同",
      "D) 模型使用尽可能大的数据集"
    ],
    answer: 2,
    explanation: "Demographic parity (statistical parity) requires that the probability of a positive prediction is equal across different demographic groups, regardless of the true outcome. While intuitive, it can conflict with other fairness definitions like equalized odds or calibration. Research has shown that it is often impossible to simultaneously satisfy all fairness criteria.",
    explanationChinese: "人口统计平等（统计平等）要求正预测的概率在不同人口群体中相等，无论真实结果如何。虽然直观，但它可能与其他公平性定义（如均等化赔率或校准）相冲突。研究表明，通常不可能同时满足所有公平性标准。",
    diagram: "",
    terms: ["search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 290,
    q: "The accountability principle in AI ethics states that:",
    qChinese: "AI伦理中的问责原则声明：",
    options: [
      "A) AI systems should be as complex as possible",
      "B) There should be clear assignment of responsibility for the outcomes produced by AI systems",
      "C) No one should be responsible for AI decisions",
      "D) AI should only be used in entertainment"
    ],
    optionsChinese: [
      "A) AI系统应尽可能复杂",
      "B) 应该对AI系统产生的结果有明确的责任分配",
      "C) 没有人应该对AI决策负责",
      "D) AI只应用于娱乐"
    ],
    answer: 1,
    explanation: "Accountability requires that individuals and organizations deploying AI systems are responsible for the system's behavior and outcomes. This includes maintaining audit trails, establishing governance frameworks, and ensuring that affected parties have recourse when AI systems cause harm. It is a key principle in AI regulation frameworks worldwide.",
    explanationChinese: "问责要求部署AI系统的个人和组织对系统的行为和结果负责。这包括维护审计跟踪、建立治理框架，以及确保受影响方在AI系统造成伤害时有追索权。这是全球AI监管框架中的关键原则。",
    diagram: "",
    terms: ["multi_agent_system"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 291,
    q: "A mixed strategy Nash equilibrium involves players:",
    qChinese: "混合策略纳什均衡涉及玩家：",
    options: [
      "A) Always choosing the same action",
      "B) Cooperating with all other players",
      "C) Not participating in the game",
      "D) Randomizing over their available actions with specific probabilities"
    ],
    optionsChinese: [
      "A) 总是选择相同的动作",
      "B) 与所有其他玩家合作",
      "C) 不参与博弈",
      "D) 以特定概率在可用动作上随机化"
    ],
    answer: 3,
    explanation: "In a mixed strategy Nash equilibrium, each player randomizes over their available pure strategies according to specific probabilities, such that no player can improve their expected payoff by changing their mixing probabilities. Nash's theorem guarantees that every finite game has at least one Nash equilibrium, which may require mixed strategies.",
    explanationChinese: "在混合策略纳什均衡中，每个玩家根据特定概率在其可用的纯策略上随机化，使得没有玩家可以通过改变其混合概率来提高其期望收益。纳什定理保证每个有限博弈至少有一个纳什均衡，这可能需要混合策略。",
    diagram: "",
    terms: ["game_tree", "multi_agent_system"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 292,
    q: "In a Partially Observable Markov Decision Process (POMDP), the agent maintains a:",
    qChinese: "在部分可观测马尔可夫决策过程（POMDP）中，智能体维护一个：",
    options: [
      "A) Complete knowledge of the current state",
      "B) Single deterministic state",
      "C) Belief state, which is a probability distribution over possible states",
      "D) Fixed sequence of actions"
    ],
    optionsChinese: [
      "A) 当前状态的完整知识",
      "B) 单个确定性状态",
      "C) 信念状态，即可能状态上的概率分布",
      "D) 固定的动作序列"
    ],
    answer: 2,
    explanation: "In a POMDP, the agent cannot directly observe the true state of the environment. Instead, it maintains a belief state -- a probability distribution over all possible states, updated using Bayes' rule after each observation. The agent's policy maps belief states to actions. Solving POMDPs exactly is computationally intractable (PSPACE-complete), so approximate methods are commonly used.",
    explanationChinese: "在POMDP中，智能体无法直接观察环境的真实状态。相反，它维护一个信念状态——所有可能状态上的概率分布，在每次观测后使用贝叶斯规则更新。智能体的策略将信念状态映射到动作。精确求解POMDP在计算上是不可行的（PSPACE-complete），因此通常使用近似方法。",
    diagram: "",
    terms: ["markov_decision_process", "bayesian_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 293,
    q: "The forward algorithm in HMMs computes:",
    qChinese: "HMM中的前向算法计算：",
    options: [
      "A) The probability of an observation sequence given the model",
      "B) The backward probabilities only",
      "C) The most likely single state at each time step",
      "D) The optimal policy for an MDP"
    ],
    optionsChinese: [
      "A) 给定模型的观测序列的概率",
      "B) 仅反向概率",
      "C) 每个时间步的最可能单个状态",
      "D) MDP的最优策略"
    ],
    answer: 0,
    explanation: "The forward algorithm computes P(O|lambda), the total probability of an observation sequence O given the HMM parameters lambda. It uses dynamic programming with forward variables alpha_t(i) = P(o1,...,ot, qt=Si | lambda). The algorithm runs in O(T * N^2) time, avoiding the exponential computation of enumerating all possible state sequences.",
    explanationChinese: "前向算法计算P(O|lambda)，即给定HMM参数lambda时观测序列O的总概率。它使用前向变量alpha_t(i) = P(o1,...,ot, qt=Si | lambda)进行动态规划。该算法在O(T * N^2)时间内运行，避免了枚举所有可能状态序列的指数计算。",
    diagram: "",
    terms: ["markov_decision_process", "bayesian_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 294,
    q: "A dominant strategy in game theory is one that:",
    qChinese: "博弈论中的优势策略是：",
    options: [
      "A) Yields the best payoff regardless of what other players choose",
      "B) Requires cooperation from other players",
      "C) Is only optimal sometimes",
      "D) Is always the most complex strategy available"
    ],
    optionsChinese: [
      "A) 无论其他玩家选择什么都产生最佳收益",
      "B) 需要其他玩家的合作",
      "C) 仅有时是最优的",
      "D) 总是最复杂的可用策略"
    ],
    answer: 0,
    explanation: "A dominant strategy is one that gives a player a payoff at least as good as any other strategy, no matter what strategies the other players adopt. If every player has a dominant strategy, the resulting strategy profile is a dominant strategy equilibrium. Such equilibria are particularly robust because they do not depend on beliefs about other players' behavior.",
    explanationChinese: "优势策略是指无论其他玩家采用什么策略，都能给玩家带来至少与其他任何策略一样好的收益的策略。如果每个玩家都有优势策略，则产生的策略组合是优势策略均衡。这种均衡特别稳健，因为它们不依赖于对其他玩家行为的信念。",
    diagram: "",
    terms: ["game_tree", "multi_agent_system"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 295,
    q: "The frame problem in AI knowledge representation refers to:",
    qChinese: "AI知识表示中的框架问题指的是：",
    options: [
      "A) How to build picture frames",
      "B) How to frame images for computer vision",
      "C) The difficulty of specifying what does NOT change when an action is performed",
      "D) The problem of screen resolution"
    ],
    optionsChinese: [
      "A) 如何制作画框",
      "B) 如何为计算机视觉构图",
      "C) 指定当执行动作时什么不变的困难",
      "D) 屏幕分辨率的问题"
    ],
    answer: 2,
    explanation: "The frame problem, identified by McCarthy and Hayes in 1969, is the challenge of representing the fact that most things remain unchanged when an action occurs. Without frame axioms, a logical system must explicitly state every property that does not change for every action. Solutions include the STRIPS assumption, successor-state axioms, and the situation calculus.",
    explanationChinese: "框架问题由麦卡锡和海耶斯在1969年提出，是表示当动作发生时大多数事物保持不变这一事实的挑战。没有框架公理，逻辑系统必须显式声明每个动作中不会改变的每个属性。解决方案包括STRIPS假设、后继状态公理和情境演算。",
    diagram: "",
    terms: ["knowledge_representation", "planning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 296,
    q: "Gibbs sampling is a Markov Chain Monte Carlo (MCMC) method used in Bayesian networks to:",
    qChinese: "吉布斯采样是一种马尔可夫链蒙特卡洛（MCMC）方法，用于贝叶斯网络中：",
    options: [
      "A) Remove all edges from the network",
      "B) Exactly compute all posterior probabilities",
      "C) Approximate posterior probabilities by sampling each variable conditioned on the current values of all other variables",
      "D) Convert the network to a decision tree"
    ],
    optionsChinese: [
      "A) 从网络中移除所有边",
      "B) 精确计算所有后验概率",
      "C) 通过在所有其他变量的当前值为条件的情况下对每个变量进行采样来近似后验概率",
      "D) 将网络转换为决策树"
    ],
    answer: 2,
    explanation: "Gibbs sampling iteratively samples each non-evidence variable from its conditional distribution given the current values of all other variables (its Markov blanket). Over many iterations, the samples converge to the true posterior distribution. It is particularly useful for large Bayesian networks where exact inference is computationally infeasible.",
    explanationChinese: "吉布斯采样迭代地从每个非证据变量在所有其他变量（其马尔可夫毯）当前值为条件的条件分布中进行采样。经过多次迭代，样本收敛到真正的后验分布。它对于精确推理在计算上不可行的大型贝叶斯网络特别有用。",
    diagram: "",
    terms: ["bayesian_network", "inference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 297,
    q: "In multi-agent systems, a Vickrey (second-price sealed-bid) auction has the desirable property that:",
    qChinese: "在多智能体系统中，维克里（第二价格密封出价）拍卖具有以下理想属性：",
    options: [
      "A) The highest bidder pays their own bid",
      "B) All bidders pay the same price",
      "C) The highest bidder wins but pays the second-highest bid, incentivizing truthful bidding",
      "D) No one wins the auction"
    ],
    optionsChinese: [
      "A) 最高出价者支付自己的出价",
      "B) 所有出价者支付相同的价格",
      "C) 最高出价者获胜但支付第二高的出价，激励真实出价",
      "D) 没有人赢得拍卖"
    ],
    answer: 2,
    explanation: "In a Vickrey auction, the highest bidder wins but pays the second-highest bid price. This mechanism is strategy-proof (incentive compatible): each bidder's dominant strategy is to bid their true valuation. This is because overbidding risks paying too much, and underbidding risks losing an item they value. Vickrey auctions are a key example of mechanism design.",
    explanationChinese: "在维克里拍卖中，最高出价者获胜但支付第二高的出价。这种机制是策略防护（激励兼容）的：每个出价者的优势策略是出价其真实估值。这是因为过高出价有支付过多的风险，而过低出价有失去其重视的物品的风险。维克里拍卖是机制设计的关键示例。",
    diagram: "",
    terms: ["multi_agent_system", "game_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 298,
    q: "The symbol grounding problem in AI philosophy asks:",
    qChinese: "AI哲学中的符号接地问题问的是：",
    options: [
      "A) How to compress symbol tables",
      "B) How to store symbols in memory efficiently",
      "C) How to connect meaningless symbols to their real-world referents to achieve genuine understanding",
      "D) How many symbols a program can handle"
    ],
    optionsChinese: [
      "A) 如何压缩符号表",
      "B) 如何在内存中高效存储符号",
      "C) 如何将无意义的符号与其现实世界的指称物联系起来以实现真正的理解",
      "D) 程序可以处理多少个符号"
    ],
    answer: 2,
    explanation: "The symbol grounding problem, posed by Stevan Harnad in 1990, asks how symbols in a formal system get their meaning. A computer can manipulate symbols (like words) according to rules, but how do those symbols become connected to the things they represent in the world? This relates directly to the Chinese Room argument and debates about whether AI can achieve true understanding.",
    explanationChinese: "符号接地问题由斯蒂万·哈纳德于1990年提出，问的是形式系统中的符号如何获得其含义。计算机可以根据规则操作符号（如单词），但这些符号如何与它们在世界中所代表的事物联系起来？这直接与中文房间论证以及关于AI是否能实现真正理解的辩论相关。",
    diagram: "",
    terms: ["knowledge_representation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 299,
    q: "Transfer learning in modern AI applications involves:",
    qChinese: "现代AI应用中的迁移学习涉及：",
    options: [
      "A) Applying knowledge learned from one task or domain to improve performance on a different but related task",
      "B) Training a model from scratch for every new task",
      "C) Transferring hardware between data centers",
      "D) Deleting all learned parameters"
    ],
    optionsChinese: [
      "A) 将从一个任务或领域学到的知识应用于提高不同但相关任务的性能",
      "B) 为每个新任务从头训练模型",
      "C) 在数据中心之间转移硬件",
      "D) 删除所有学习的参数"
    ],
    answer: 0,
    explanation: "Transfer learning reuses a model trained on a large dataset (source domain) as a starting point for a model on a different but related task (target domain). This is especially powerful when the target domain has limited labeled data. Foundation models like BERT, GPT, and ResNet exemplify this approach, being pre-trained on massive datasets and then fine-tuned for specific applications.",
    explanationChinese: "迁移学习将在大型数据集（源域）上训练的模型作为不同但相关任务（目标域）模型的起点。当目标域的标记数据有限时，这尤其强大。BERT、GPT和ResNet等基础模型体现了这种方法，它们在大规模数据集上预训练，然后针对特定应用进行微调。",
    diagram: "",
    terms: ["search_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 300,
    q: "The alignment problem in AI safety research refers to the challenge of:",
    qChinese: "AI安全研究中的对齐问题指的是以下挑战：",
    options: [
      "A) Ensuring AI systems pursue goals that are truly aligned with human values and intentions",
      "B) Aligning text in documents",
      "C) Aligning hardware components in a server rack",
      "D) Formatting code with proper indentation"
    ],
    optionsChinese: [
      "A) 确保AI系统追求真正与人类价值观和意图一致的目标",
      "B) 对齐文档中的文本",
      "C) 对齐服务器机架中的硬件组件",
      "D) 使用正确缩进格式化代码"
    ],
    answer: 0,
    explanation: "The alignment problem concerns ensuring that increasingly powerful AI systems behave in accordance with human values and intentions. Key challenges include specifying human values precisely, avoiding reward hacking, handling distributional shift, and ensuring robust generalization. This is considered one of the most important open problems in AI safety by researchers across the field.",
    explanationChinese: "对齐问题关注确保日益强大的AI系统按照人类价值观和意图行事。关键挑战包括精确指定人类价值观、避免奖励黑客、处理分布偏移和确保稳健的泛化。这被该领域的研究人员认为是AI安全中最重要的开放问题之一。",
    diagram: "",
    terms: ["multi_agent_system"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  }
];
