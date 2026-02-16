const questionsAIF = [
  {
    id: 1,
    q: "In Breadth-First Search (BFS), which data structure is used to store the frontier nodes?",
    qChinese: "在广度优先搜索（BFS）中，使用哪种数据结构来存储前沿节点？",
    options: [
      "A) Stack",
      "B) Queue",
      "C) Priority queue",
      "D) Hash table"
    ],
    optionsChinese: [
      "A) 栈",
      "B) 队列",
      "C) 优先队列",
      "D) 哈希表"
    ],
    answer: 1,
    explanation: "BFS uses a FIFO queue to expand nodes level by level. The queue ensures that all nodes at depth d are explored before any node at depth d+1. This guarantees the shallowest solution is found first, making BFS optimal when all step costs are equal.",
    explanationChinese: "BFS使用先进先出队列逐层扩展节点。队列确保深度d的所有节点在深度d+1的任何节点之前被探索。这保证首先找到最浅的解决方案，当所有步骤成本相等时，BFS是最优的。",
    diagram: "",
    terms: ["breadth_first_search", "fifo_queue", "search_frontier"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 2,
    q: "What is the key property that makes A* search both complete and optimal?",
    qChinese: "使A*搜索既完备又最优的关键性质是什么？",
    options: [
      "A) The heuristic function must be inadmissible",
      "B) The heuristic function must be admissible and consistent",
      "C) The heuristic function must always return zero",
      "D) The heuristic function must overestimate the true cost"
    ],
    optionsChinese: [
      "A) 启发式函数必须是不可采纳的",
      "B) 启发式函数必须是可采纳且一致的",
      "C) 启发式函数必须始终返回零",
      "D) 启发式函数必须高估真实成本"
    ],
    answer: 1,
    explanation: "A* is optimal when its heuristic h(n) is admissible, meaning it never overestimates the true cost to goal. Consistency (monotonicity) additionally requires h(n) <= cost(n,n') + h(n') for every successor n'. Together these properties guarantee A* expands nodes in order of increasing f-values and finds the optimal path.",
    explanationChinese: "当启发式函数h(n)是可采纳的（即从不高估到目标的真实成本）时，A*是最优的。一致性（单调性）还要求对于每个后继节点n'，h(n) <= cost(n,n') + h(n')。这些性质共同保证A*按f值递增顺序扩展节点并找到最优路径。",
    diagram: "",
    terms: ["a_star_search", "admissible_heuristic", "consistent_heuristic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 3,
    q: "Depth-First Search (DFS) is NOT guaranteed to find the optimal solution because:",
    qChinese: "深度优先搜索（DFS）不能保证找到最优解，因为：",
    options: [
      "A) It uses too much memory",
      "B) It may explore a deep non-optimal path before a shallower optimal one",
      "C) It always returns the first node it encounters",
      "D) It cannot handle weighted graphs"
    ],
    optionsChinese: [
      "A) 它使用了太多内存",
      "B) 它可能在较浅的最优路径之前探索较深的非最优路径",
      "C) 它总是返回遇到的第一个节点",
      "D) 它无法处理加权图"
    ],
    answer: 1,
    explanation: "DFS uses a LIFO stack and dives deep into one branch before backtracking. It may find a goal node along a very deep, suboptimal path while a shorter path exists elsewhere in the search tree. DFS is complete only in finite spaces and is not optimal in general.",
    explanationChinese: "DFS使用后进先出栈，在回溯之前深入一个分支。它可能沿着非常深的次优路径找到目标节点，而搜索树的其他地方存在更短的路径。DFS仅在有限空间中是完备的，且通常不是最优的。",
    diagram: "",
    terms: ["depth_first_search", "lifo_stack", "search_optimality"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 4,
    q: "In the minimax algorithm for two-player zero-sum games, the MAX player aims to:",
    qChinese: "在两人零和博弈的极小极大算法中，MAX玩家的目标是：",
    options: [
      "A) Minimize the utility value at every node",
      "B) Maximize the utility value assuming the opponent plays optimally",
      "C) Choose moves randomly to confuse the opponent",
      "D) Always select the leftmost branch in the game tree"
    ],
    optionsChinese: [
      "A) 在每个节点最小化效用值",
      "B) 在假设对手最优博弈的情况下最大化效用值",
      "C) 随机选择行动以迷惑对手",
      "D) 始终选择博弈树中最左边的分支"
    ],
    answer: 1,
    explanation: "In minimax, the MAX player selects the action that maximizes the minimum utility the opponent would allow. The MIN player tries to minimize MAX's payoff. This recursive alternation produces optimal play for both sides, assuming perfect information and rational opponents in a zero-sum setting.",
    explanationChinese: "在极小极大算法中，MAX玩家选择能最大化对手所允许的最小效用的行动。MIN玩家试图最小化MAX的收益。这种递归交替在零和博弈中，假设完全信息和理性对手的情况下，为双方产生最优策略。",
    diagram: "",
    terms: ["minimax", "zero_sum_game", "game_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 5,
    q: "Alpha-beta pruning improves minimax by:",
    qChinese: "Alpha-Beta剪枝通过以下方式改进极小极大算法：",
    options: [
      "A) Changing the final minimax values at the root",
      "B) Pruning branches that cannot affect the final decision",
      "C) Converting the game tree into a directed acyclic graph",
      "D) Replacing the utility function with a learned value network"
    ],
    optionsChinese: [
      "A) 改变根节点的最终极小极大值",
      "B) 剪除不会影响最终决策的分支",
      "C) 将博弈树转换为有向无环图",
      "D) 用学习到的价值网络替代效用函数"
    ],
    answer: 1,
    explanation: "Alpha-beta pruning maintains two bounds: alpha (best for MAX) and beta (best for MIN). When a node's value falls outside the alpha-beta window, its remaining children are pruned because they cannot influence the root decision. This reduces the effective branching factor without changing the result.",
    explanationChinese: "Alpha-Beta剪枝维护两个界限：alpha（MAX的最佳值）和beta（MIN的最佳值）。当节点的值超出alpha-beta窗口时，其剩余子节点被剪除，因为它们不会影响根决策。这在不改变结果的情况下减少了有效分支因子。",
    diagram: "",
    terms: ["alpha_beta_pruning", "minimax", "branching_factor"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 6,
    q: "In a Constraint Satisfaction Problem (CSP), arc consistency ensures that:",
    qChinese: "在约束满足问题（CSP）中，弧一致性确保：",
    options: [
      "A) Every variable has exactly one value in its domain",
      "B) For every value of one variable, there exists a consistent value in each neighboring variable's domain",
      "C) All constraints are satisfied simultaneously",
      "D) The CSP has a unique solution"
    ],
    optionsChinese: [
      "A) 每个变量的域中恰好有一个值",
      "B) 对于一个变量的每个值，每个相邻变量的域中都存在一个一致的值",
      "C) 所有约束同时被满足",
      "D) CSP有唯一解"
    ],
    answer: 1,
    explanation: "Arc consistency (AC-3) enforces that for every value in variable Xi's domain, there exists at least one value in Xj's domain satisfying the constraint between them. It is a local consistency technique that prunes domains but does not guarantee a solution exists or is unique.",
    explanationChinese: "弧一致性（AC-3）确保对于变量Xi域中的每个值，变量Xj的域中至少存在一个满足它们之间约束的值。这是一种局部一致性技术，可以修剪域但不保证解的存在或唯一性。",
    diagram: "",
    terms: ["constraint_satisfaction_problem", "arc_consistency", "domain_pruning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 7,
    q: "Which CSP solving strategy selects the variable with the fewest remaining legal values first?",
    qChinese: "哪种CSP求解策略首先选择剩余合法值最少的变量？",
    options: [
      "A) Least Constraining Value (LCV)",
      "B) Minimum Remaining Values (MRV)",
      "C) Degree Heuristic",
      "D) Forward Checking"
    ],
    optionsChinese: [
      "A) 最少约束值（LCV）",
      "B) 最少剩余值（MRV）",
      "C) 度启发式",
      "D) 前向检验"
    ],
    answer: 1,
    explanation: "The Minimum Remaining Values (MRV) heuristic picks the variable with the smallest domain to assign next. This fail-first strategy detects dead ends early, reducing the search space. It is often combined with LCV for value ordering and the degree heuristic to break ties among variables.",
    explanationChinese: "最少剩余值（MRV）启发式选择域最小的变量优先赋值。这种失败优先策略能及早检测死端，减少搜索空间。它通常与LCV（用于值排序）和度启发式（用于打破变量之间的平局）结合使用。",
    diagram: "",
    terms: ["minimum_remaining_values", "csp_heuristics", "fail_first"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 8,
    q: "In propositional logic, which inference rule allows deriving q from (p) and (p -> q)?",
    qChinese: "在命题逻辑中，哪条推理规则允许从(p)和(p -> q)推导出q？",
    options: [
      "A) Resolution",
      "B) Modus Ponens",
      "C) Modus Tollens",
      "D) Contraposition"
    ],
    optionsChinese: [
      "A) 归结",
      "B) 肯定前件式",
      "C) 否定后件式",
      "D) 逆否命题"
    ],
    answer: 1,
    explanation: "Modus Ponens states: if p is true and p implies q, then q must be true. It is one of the most fundamental sound inference rules in propositional logic. Resolution generalizes this for clausal form, and Modus Tollens works from the negation of the consequent.",
    explanationChinese: "肯定前件式表述：如果p为真且p蕴含q，则q必须为真。它是命题逻辑中最基本的可靠推理规则之一。归结是其子句形式的推广，否定后件式从结论的否定出发进行推理。",
    diagram: "",
    terms: ["modus_ponens", "propositional_logic", "inference_rule"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 9,
    q: "A propositional formula is satisfiable if:",
    qChinese: "一个命题公式是可满足的，如果：",
    options: [
      "A) It is true under all possible truth assignments",
      "B) There exists at least one truth assignment that makes it true",
      "C) It is logically equivalent to its negation",
      "D) It contains no negation operators"
    ],
    optionsChinese: [
      "A) 它在所有可能的真值赋值下为真",
      "B) 至少存在一个使其为真的真值赋值",
      "C) 它与其否定逻辑等价",
      "D) 它不包含否定运算符"
    ],
    answer: 1,
    explanation: "A formula is satisfiable if at least one truth assignment makes it evaluate to true. A formula true under all assignments is a tautology (valid). SAT is the canonical NP-complete problem. Determining satisfiability is fundamental to automated reasoning and verification in AI systems.",
    explanationChinese: "如果至少存在一个真值赋值使公式求值为真，则该公式是可满足的。在所有赋值下为真的公式是重言式（有效的）。SAT是典型的NP完全问题。确定可满足性是AI系统中自动推理和验证的基础。",
    diagram: "",
    terms: ["satisfiability", "truth_assignment", "np_complete"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 10,
    q: "In a Bayesian network, the joint probability distribution is computed by:",
    qChinese: "在贝叶斯网络中，联合概率分布通过以下方式计算：",
    options: [
      "A) Summing all conditional probability tables",
      "B) Taking the product of each variable's conditional probability given its parents",
      "C) Multiplying all marginal probabilities together",
      "D) Applying Bayes' rule to every pair of variables"
    ],
    optionsChinese: [
      "A) 对所有条件概率表求和",
      "B) 对每个变量在其父节点条件下的条件概率取乘积",
      "C) 将所有边际概率相乘",
      "D) 对每对变量应用贝叶斯规则"
    ],
    answer: 1,
    explanation: "The chain rule for Bayesian networks factors the joint distribution as the product of P(Xi | Parents(Xi)) for all variables Xi. This compact factorization exploits conditional independence encoded in the DAG structure, reducing the number of parameters exponentially compared to a full joint table.",
    explanationChinese: "贝叶斯网络的链式法则将联合分布分解为所有变量Xi的P(Xi | Parents(Xi))的乘积。这种紧凑的分解利用了DAG结构中编码的条件独立性，与完整联合表相比，指数级地减少了参数数量。",
    diagram: "",
    terms: ["bayesian_network", "chain_rule", "conditional_independence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 11,
    q: "D-separation in a Bayesian network is used to determine:",
    qChinese: "贝叶斯网络中的D-分离用于确定：",
    options: [
      "A) The maximum likelihood parameters",
      "B) Whether two sets of variables are conditionally independent given a third set",
      "C) The optimal network structure",
      "D) The posterior distribution of all hidden variables"
    ],
    optionsChinese: [
      "A) 最大似然参数",
      "B) 给定第三组变量时，两组变量是否条件独立",
      "C) 最优网络结构",
      "D) 所有隐变量的后验分布"
    ],
    answer: 1,
    explanation: "D-separation is a graphical criterion that determines conditional independence in Bayesian networks. Variables X and Y are d-separated given Z if every path between them is blocked. Paths are blocked by chains/forks with observed middle nodes, or by colliders whose descendants are not observed.",
    explanationChinese: "D-分离是贝叶斯网络中确定条件独立性的图形准则。如果X和Y之间的每条路径都被阻断，则给定Z时X和Y是d-分离的。路径被具有已观测中间节点的链/叉阻断，或被其后代未被观测的碰撞节点阻断。",
    diagram: "",
    terms: ["d_separation", "conditional_independence", "bayesian_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 12,
    q: "In a Hidden Markov Model (HMM), the Viterbi algorithm is used to:",
    qChinese: "在隐马尔可夫模型（HMM）中，维特比算法用于：",
    options: [
      "A) Learn the transition probabilities from data",
      "B) Find the most likely sequence of hidden states given observations",
      "C) Compute the marginal probability of each observation",
      "D) Sample random state sequences from the posterior"
    ],
    optionsChinese: [
      "A) 从数据中学习转移概率",
      "B) 找到给定观测值的最可能隐状态序列",
      "C) 计算每个观测值的边际概率",
      "D) 从后验分布中采样随机状态序列"
    ],
    answer: 1,
    explanation: "The Viterbi algorithm uses dynamic programming to find the most probable hidden state sequence given an observation sequence. It maintains backpointers at each time step to reconstruct the optimal path. The forward algorithm computes observation likelihoods, while Baum-Welch handles parameter learning.",
    explanationChinese: "维特比算法使用动态规划来找到给定观测序列的最可能隐状态序列。它在每个时间步维护回溯指针以重建最优路径。前向算法计算观测似然，而Baum-Welch处理参数学习。",
    diagram: "",
    terms: ["hidden_markov_model", "viterbi_algorithm", "dynamic_programming"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 13,
    q: "The Markov property states that:",
    qChinese: "马尔可夫性质表明：",
    options: [
      "A) Future and past states are always independent",
      "B) The future state depends only on the current state, not on the past history",
      "C) All state transitions have equal probability",
      "D) The state space must be finite and discrete"
    ],
    optionsChinese: [
      "A) 未来和过去的状态始终独立",
      "B) 未来状态仅取决于当前状态，而不取决于过去的历史",
      "C) 所有状态转移具有相等的概率",
      "D) 状态空间必须是有限和离散的"
    ],
    answer: 1,
    explanation: "The Markov property (memorylessness) means P(St+1 | S1,...,St) = P(St+1 | St). Given the present state, the future is conditionally independent of the past. This assumption simplifies temporal modeling dramatically and underlies HMMs, MDPs, and many sequential decision-making frameworks.",
    explanationChinese: "马尔可夫性质（无记忆性）意味着P(St+1 | S1,...,St) = P(St+1 | St)。给定当前状态，未来与过去条件独立。这一假设极大地简化了时序建模，是HMM、MDP和许多序贯决策框架的基础。",
    diagram: "",
    terms: ["markov_property", "memorylessness", "conditional_independence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 14,
    q: "In reinforcement learning, the Q-value Q(s, a) represents:",
    qChinese: "在强化学习中，Q值Q(s, a)表示：",
    options: [
      "A) The immediate reward of taking action a in state s",
      "B) The expected cumulative discounted reward of taking action a in state s and then acting optimally",
      "C) The probability of transitioning from state s to a terminal state",
      "D) The number of times action a has been taken in state s"
    ],
    optionsChinese: [
      "A) 在状态s中采取行动a的即时奖励",
      "B) 在状态s中采取行动a然后最优行动的期望累积折扣奖励",
      "C) 从状态s转移到终止状态的概率",
      "D) 在状态s中采取行动a的次数"
    ],
    answer: 1,
    explanation: "Q(s, a) is the expected return starting from state s, taking action a, and thereafter following the optimal policy. The Bellman optimality equation relates Q-values recursively: Q*(s,a) = R(s,a) + gamma * max_a' Q*(s',a'). Q-learning estimates these values through interaction without a model.",
    explanationChinese: "Q(s, a)是从状态s开始，采取行动a，然后遵循最优策略的期望回报。贝尔曼最优方程递归地关联Q值：Q*(s,a) = R(s,a) + gamma * max_a' Q*(s',a')。Q-learning通过交互估计这些值而不需要模型。",
    diagram: "",
    terms: ["q_value", "bellman_equation", "reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 15,
    q: "The exploration-exploitation tradeoff in reinforcement learning refers to:",
    qChinese: "强化学习中的探索-利用权衡是指：",
    options: [
      "A) Balancing model complexity against training time",
      "B) Choosing between trying new actions and using known rewarding actions",
      "C) Deciding between on-policy and off-policy methods",
      "D) Trading off between value-based and policy-based approaches"
    ],
    optionsChinese: [
      "A) 在模型复杂性和训练时间之间取得平衡",
      "B) 在尝试新行动和使用已知高奖励行动之间做出选择",
      "C) 在同策略和异策略方法之间做出决定",
      "D) 在基于价值和基于策略的方法之间进行权衡"
    ],
    answer: 1,
    explanation: "An RL agent must balance exploitation of currently known high-reward actions with exploration of untried actions that might yield higher rewards. Epsilon-greedy strategies explore with probability epsilon and exploit otherwise. UCB and Thompson sampling offer more principled approaches to this dilemma.",
    explanationChinese: "强化学习智能体必须在利用当前已知的高奖励行动和探索可能产生更高奖励的未尝试行动之间取得平衡。Epsilon-贪婪策略以概率epsilon进行探索，否则利用。UCB和Thompson采样提供了更有原则的方法来解决这一困境。",
    diagram: "",
    terms: ["exploration_exploitation", "epsilon_greedy", "reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 16,
    q: "In a Markov Decision Process (MDP), a policy is defined as:",
    qChinese: "在马尔可夫决策过程（MDP）中，策略定义为：",
    options: [
      "A) A sequence of rewards received over time",
      "B) A mapping from states to actions (or probability distributions over actions)",
      "C) The transition probability matrix between states",
      "D) The discount factor applied to future rewards"
    ],
    optionsChinese: [
      "A) 随时间接收的奖励序列",
      "B) 从状态到行动（或行动上的概率分布）的映射",
      "C) 状态之间的转移概率矩阵",
      "D) 应用于未来奖励的折扣因子"
    ],
    answer: 1,
    explanation: "A policy pi maps each state to an action (deterministic) or a distribution over actions (stochastic). The goal in an MDP is to find the optimal policy that maximizes expected cumulative discounted reward. Value iteration and policy iteration are classic dynamic programming methods for computing optimal policies.",
    explanationChinese: "策略pi将每个状态映射到一个行动（确定性）或行动上的分布（随机性）。MDP的目标是找到最大化期望累积折扣奖励的最优策略。值迭代和策略迭代是计算最优策略的经典动态规划方法。",
    diagram: "",
    terms: ["markov_decision_process", "policy", "value_iteration"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 17,
    q: "Which search algorithm is guaranteed to find the least-cost path in a weighted graph with non-negative edge weights?",
    qChinese: "哪种搜索算法保证在具有非负边权重的加权图中找到最低成本路径？",
    options: [
      "A) Depth-First Search",
      "B) Iterative Deepening Search",
      "C) Uniform Cost Search",
      "D) Hill Climbing"
    ],
    optionsChinese: [
      "A) 深度优先搜索",
      "B) 迭代加深搜索",
      "C) 一致代价搜索",
      "D) 爬山法"
    ],
    answer: 2,
    explanation: "Uniform Cost Search (UCS) expands the node with the lowest cumulative path cost g(n) using a priority queue. With non-negative edge weights, UCS is both complete and optimal. It generalizes BFS to handle varying step costs. A* adds a heuristic to UCS for better efficiency.",
    explanationChinese: "一致代价搜索（UCS）使用优先队列扩展具有最低累积路径成本g(n)的节点。在非负边权重条件下，UCS既是完备的也是最优的。它将BFS推广到处理不同步骤成本的情况。A*在UCS的基础上添加启发式以提高效率。",
    diagram: "",
    terms: ["uniform_cost_search", "priority_queue", "optimal_search"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 18,
    q: "Variable elimination in Bayesian networks is a method for:",
    qChinese: "贝叶斯网络中的变量消除是一种用于：",
    options: [
      "A) Learning the structure of the network from data",
      "B) Performing exact probabilistic inference by summing out variables",
      "C) Pruning irrelevant variables from the network",
      "D) Estimating conditional probabilities via sampling"
    ],
    optionsChinese: [
      "A) 从数据中学习网络结构",
      "B) 通过对变量求和来执行精确概率推理",
      "C) 从网络中修剪不相关的变量",
      "D) 通过采样估计条件概率"
    ],
    answer: 1,
    explanation: "Variable elimination performs exact inference by iteratively summing out (marginalizing) hidden variables from the joint distribution factors. The elimination order affects efficiency dramatically. Optimal ordering is NP-hard, but good heuristics exist. It avoids constructing the full joint probability table.",
    explanationChinese: "变量消除通过迭代地从联合分布因子中对隐变量求和（边际化）来执行精确推理。消除顺序对效率有巨大影响。最优排序是NP困难的，但存在好的启发式方法。它避免了构建完整的联合概率表。",
    diagram: "",
    terms: ["variable_elimination", "exact_inference", "marginalization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 19,
    q: "Which of the following is an example of an ethical concern specific to AI systems?",
    qChinese: "以下哪项是AI系统特有的伦理问题的例子？",
    options: [
      "A) Software bugs causing incorrect calculations",
      "B) Algorithmic bias amplifying societal discrimination in automated decisions",
      "C) Hardware failures in data centers",
      "D) High electricity costs of running servers"
    ],
    optionsChinese: [
      "A) 软件错误导致计算不正确",
      "B) 算法偏见在自动化决策中放大社会歧视",
      "C) 数据中心的硬件故障",
      "D) 运行服务器的高电力成本"
    ],
    answer: 1,
    explanation: "Algorithmic bias is a central AI ethics concern where models trained on biased data perpetuate or amplify discrimination in hiring, lending, criminal justice, and healthcare. Fairness, accountability, transparency, and explainability are key principles guiding responsible AI development and deployment today.",
    explanationChinese: "算法偏见是AI伦理的核心问题，在偏差数据上训练的模型会在招聘、贷款、刑事司法和医疗保健中延续或放大歧视。公平性、问责制、透明度和可解释性是当今指导负责任AI开发和部署的关键原则。",
    diagram: "",
    terms: ["algorithmic_bias", "ai_ethics", "fairness_accountability"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 20,
    q: "In resolution-based theorem proving for propositional logic, two clauses can be resolved if they contain:",
    qChinese: "在命题逻辑的基于归结的定理证明中，两个子句可以被归结，如果它们包含：",
    options: [
      "A) The same literal in both clauses",
      "B) Complementary literals (a variable and its negation)",
      "C) At least three distinct variables each",
      "D) No shared variables"
    ],
    optionsChinese: [
      "A) 两个子句中相同的文字",
      "B) 互补文字（一个变量及其否定）",
      "C) 每个子句至少包含三个不同的变量",
      "D) 没有共享变量"
    ],
    answer: 1,
    explanation: "Resolution requires two clauses containing complementary literals, such as p in one clause and NOT p in the other. The resolvent is the disjunction of the remaining literals from both clauses. Repeated resolution can derive the empty clause to prove unsatisfiability, forming the basis of refutation-complete proof systems.",
    explanationChinese: "归结需要两个包含互补文字的子句，例如一个子句中的p和另一个子句中的NOT p。归结式是两个子句中剩余文字的析取。重复归结可以推导出空子句以证明不可满足性，这构成了反驳完备证明系统的基础。",
    diagram: "",
    terms: ["resolution", "complementary_literals", "refutation_completeness"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 21,
    q: "Iterative Deepening Depth-First Search (IDDFS) combines which advantages of BFS and DFS?",
    qChinese: "迭代加深深度优先搜索（IDDFS）结合了BFS和DFS的哪些优势？",
    options: [
      "A) BFS's low memory usage and DFS's optimality",
      "B) BFS's completeness/optimality and DFS's linear memory usage",
      "C) BFS's speed and DFS's ability to handle infinite graphs",
      "D) BFS's heuristic guidance and DFS's backtracking"
    ],
    optionsChinese: [
      "A) BFS的低内存使用和DFS的最优性",
      "B) BFS的完备性/最优性和DFS的线性内存使用",
      "C) BFS的速度和DFS处理无限图的能力",
      "D) BFS的启发式引导和DFS的回溯"
    ],
    answer: 1,
    explanation: "IDDFS repeatedly runs depth-limited DFS with increasing depth limits. It achieves BFS's completeness and optimality (for uniform costs) while using only O(bd) memory like DFS. The overhead of re-expanding shallow nodes is modest because the majority of nodes reside at the deepest level.",
    explanationChinese: "IDDFS以递增的深度限制重复运行深度受限的DFS。它实现了BFS的完备性和最优性（对于均匀成本），同时仅使用O(bd)的内存，类似DFS。重新扩展浅层节点的开销很小，因为大多数节点位于最深层。",
    diagram: "",
    terms: ["iterative_deepening", "depth_limited_search", "search_completeness"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 22,
    q: "A heuristic h(n) is said to dominate another heuristic h'(n) if:",
    qChinese: "如果启发式函数h(n)支配另一个启发式函数h'(n)，则意味着：",
    options: [
      "A) h(n) >= h'(n) for all nodes n and both are admissible",
      "B) h(n) < h'(n) for all nodes n",
      "C) h(n) always equals the true cost to goal",
      "D) h(n) is computed faster than h'(n)"
    ],
    optionsChinese: [
      "A) 对于所有节点n，h(n) >= h'(n)，且两者都是可采纳的",
      "B) 对于所有节点n，h(n) < h'(n)",
      "C) h(n)始终等于到目标的真实成本",
      "D) h(n)的计算速度比h'(n)更快"
    ],
    answer: 0,
    explanation: "Heuristic h dominates h' if h(n) >= h'(n) for every node n and both are admissible. A dominating heuristic provides tighter lower bounds on the true cost, causing A* to expand fewer nodes. In the 8-puzzle, Manhattan distance dominates misplaced tiles, making it more efficient for A*.",
    explanationChinese: "如果对于每个节点n，h(n) >= h'(n)且两者都是可采纳的，则启发式h支配h'。支配启发式提供更紧的真实成本下界，使A*扩展更少的节点。在8数码问题中，曼哈顿距离支配错位方块数，使其对A*更高效。",
    diagram: "",
    terms: ["heuristic_dominance", "admissible_heuristic", "a_star_search"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 23,
    q: "Hill climbing search can get stuck in a local maximum because:",
    qChinese: "爬山搜索可能陷入局部最大值，因为：",
    options: [
      "A) It maintains a priority queue of all visited nodes",
      "B) It only moves to neighbors with higher values, with no mechanism to escape",
      "C) It uses random restarts by default",
      "D) It evaluates all nodes in the search space before choosing"
    ],
    optionsChinese: [
      "A) 它维护所有已访问节点的优先队列",
      "B) 它只移动到值更高的邻居，没有逃脱机制",
      "C) 它默认使用随机重启",
      "D) 它在选择之前评估搜索空间中的所有节点"
    ],
    answer: 1,
    explanation: "Hill climbing is a greedy local search that always moves to the highest-valued neighbor. It stops when no neighbor improves the current state, which may be a local maximum, a plateau, or a ridge rather than the global optimum. Variants like random restarts and simulated annealing address this limitation.",
    explanationChinese: "爬山法是一种贪婪的局部搜索，始终移动到值最高的邻居。当没有邻居改善当前状态时它停止，这可能是局部最大值、平台或山脊而非全局最优。随机重启和模拟退火等变体解决了这一限制。",
    diagram: "",
    terms: ["hill_climbing", "local_maximum", "local_search"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 24,
    q: "Simulated annealing differs from basic hill climbing by:",
    qChinese: "模拟退火与基本爬山法的不同之处在于：",
    options: [
      "A) It never accepts worse solutions",
      "B) It accepts worse solutions with a probability that decreases over time",
      "C) It uses a breadth-first expansion strategy",
      "D) It requires an admissible heuristic function"
    ],
    optionsChinese: [
      "A) 它永远不接受更差的解决方案",
      "B) 它以随时间递减的概率接受更差的解决方案",
      "C) 它使用广度优先扩展策略",
      "D) 它需要可采纳的启发式函数"
    ],
    answer: 1,
    explanation: "Simulated annealing allows moves to worse states with probability proportional to exp(-deltaE/T), where T is the temperature. As T decreases according to a cooling schedule, the algorithm becomes increasingly greedy. This allows escape from local optima early on while converging to a good solution later.",
    explanationChinese: "模拟退火以与exp(-deltaE/T)成比例的概率允许移动到更差的状态，其中T是温度。随着T按冷却计划递减，算法变得越来越贪婪。这允许在早期逃离局部最优，同时在后期收敛到好的解决方案。",
    diagram: "",
    terms: ["simulated_annealing", "cooling_schedule", "local_search"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 25,
    q: "In game-playing AI, expectimax search differs from minimax by:",
    qChinese: "在博弈AI中，期望极大搜索与极小极大的区别在于：",
    options: [
      "A) Replacing MIN nodes with chance nodes that compute expected values",
      "B) Always choosing the leftmost branch at each level",
      "C) Using alpha-beta pruning at every level",
      "D) Eliminating the need for a utility function"
    ],
    optionsChinese: [
      "A) 用计算期望值的机会节点替换MIN节点",
      "B) 始终在每一层选择最左边的分支",
      "C) 在每一层使用Alpha-Beta剪枝",
      "D) 消除对效用函数的需要"
    ],
    answer: 0,
    explanation: "Expectimax replaces the deterministic MIN player with chance nodes that average over possible outcomes weighted by their probabilities. This models stochastic environments or opponents that do not play optimally. Alpha-beta pruning cannot be directly applied because expected values require evaluating all children.",
    explanationChinese: "期望极大搜索用机会节点替换确定性的MIN玩家，这些节点按概率加权对可能的结果取平均。这模拟了随机环境或不最优博弈的对手。Alpha-Beta剪枝不能直接应用，因为期望值需要评估所有子节点。",
    diagram: "",
    terms: ["expectimax", "chance_nodes", "stochastic_games"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 26,
    q: "In CSP solving, forward checking performs which operation after each variable assignment?",
    qChinese: "在CSP求解中，前向检验在每次变量赋值后执行什么操作？",
    options: [
      "A) Backtracks immediately to the previous variable",
      "B) Removes inconsistent values from the domains of unassigned neighboring variables",
      "C) Assigns values to all remaining variables at once",
      "D) Converts the CSP into a SAT problem"
    ],
    optionsChinese: [
      "A) 立即回溯到前一个变量",
      "B) 从未赋值的相邻变量的域中移除不一致的值",
      "C) 一次性为所有剩余变量赋值",
      "D) 将CSP转换为SAT问题"
    ],
    answer: 1,
    explanation: "Forward checking propagates the effect of each assignment by removing values from neighboring unassigned variables' domains that conflict with the assignment. If any domain becomes empty, the algorithm backtracks immediately. This is weaker than full arc consistency but faster to compute per assignment.",
    explanationChinese: "前向检验通过从相邻未赋值变量的域中移除与赋值冲突的值来传播每次赋值的效果。如果任何域变为空，算法立即回溯。这比完全弧一致性弱但每次赋值的计算速度更快。",
    diagram: "",
    terms: ["forward_checking", "constraint_propagation", "backtracking"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 27,
    q: "In first-order logic, the universal quantifier (∀x) means:",
    qChinese: "在一阶逻辑中，全称量词（∀x）表示：",
    options: [
      "A) There exists at least one x for which the statement is true",
      "B) The statement holds for every element x in the domain",
      "C) The variable x is unbound and can take any value",
      "D) The statement is true for exactly one value of x"
    ],
    optionsChinese: [
      "A) 至少存在一个x使陈述为真",
      "B) 该陈述对域中的每个元素x都成立",
      "C) 变量x是未绑定的，可以取任何值",
      "D) 该陈述恰好对x的一个值为真"
    ],
    answer: 1,
    explanation: "The universal quantifier ∀x asserts that the following predicate is true for all elements in the domain. For example, ∀x Human(x) → Mortal(x) states every human is mortal. The existential quantifier ∃x asserts truth for at least one element. These quantifiers give first-order logic far more expressive power than propositional logic.",
    explanationChinese: "全称量词∀x断言后续谓词对域中所有元素为真。例如，∀x Human(x) → Mortal(x)表述每个人都是有死的。存在量词∃x断言至少一个元素为真。这些量词赋予一阶逻辑比命题逻辑更强大的表达能力。",
    diagram: "",
    terms: ["universal_quantifier", "first_order_logic", "predicate_logic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 28,
    q: "Unification in first-order logic is the process of:",
    qChinese: "一阶逻辑中的合一是以下过程：",
    options: [
      "A) Converting all predicates to propositional variables",
      "B) Finding a substitution that makes two logical expressions identical",
      "C) Eliminating all quantifiers from a formula",
      "D) Combining two knowledge bases into one"
    ],
    optionsChinese: [
      "A) 将所有谓词转换为命题变量",
      "B) 找到使两个逻辑表达式相同的替换",
      "C) 从公式中消除所有量词",
      "D) 将两个知识库合并为一个"
    ],
    answer: 1,
    explanation: "Unification finds the most general substitution (MGU) that makes two expressions syntactically identical. For example, Knows(John, x) and Knows(y, Jane) unify with {x/Jane, y/John}. Unification is essential for resolution in first-order logic and forms the basis of logic programming languages like Prolog.",
    explanationChinese: "合一找到使两个表达式在语法上相同的最一般替换（MGU）。例如，Knows(John, x)和Knows(y, Jane)通过{x/Jane, y/John}合一。合一对于一阶逻辑中的归结至关重要，也是Prolog等逻辑编程语言的基础。",
    diagram: "",
    terms: ["unification", "most_general_unifier", "first_order_logic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 29,
    q: "De Morgan's laws in propositional logic state that NOT(A AND B) is equivalent to:",
    qChinese: "命题逻辑中的德摩根定律表明NOT(A AND B)等价于：",
    options: [
      "A) (NOT A) AND (NOT B)",
      "B) (NOT A) OR (NOT B)",
      "C) A OR B",
      "D) NOT A AND B"
    ],
    optionsChinese: [
      "A) (NOT A) AND (NOT B)",
      "B) (NOT A) OR (NOT B)",
      "C) A OR B",
      "D) NOT A AND B"
    ],
    answer: 1,
    explanation: "De Morgan's laws state: NOT(A AND B) ≡ (NOT A) OR (NOT B), and NOT(A OR B) ≡ (NOT A) AND (NOT B). These equivalences are fundamental for converting formulas to conjunctive or disjunctive normal form, which is required for resolution-based theorem proving.",
    explanationChinese: "德摩根定律表明：NOT(A AND B) ≡ (NOT A) OR (NOT B)，以及NOT(A OR B) ≡ (NOT A) AND (NOT B)。这些等价关系对于将公式转换为合取范式或析取范式是基础性的，这是基于归结的定理证明所要求的。",
    diagram: "",
    terms: ["de_morgans_laws", "logical_equivalence", "normal_form"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 30,
    q: "A knowledge base is said to entail a sentence α (KB |= α) if:",
    qChinese: "如果知识库蕴含句子α（KB |= α），则意味着：",
    options: [
      "A) α is stored explicitly in the knowledge base",
      "B) α is true in every model in which KB is true",
      "C) α can be derived in at most polynomial time",
      "D) α is a tautology independent of KB"
    ],
    optionsChinese: [
      "A) α被显式存储在知识库中",
      "B) 在KB为真的每个模型中α都为真",
      "C) α可以在多项式时间内推导出",
      "D) α是独立于KB的重言式"
    ],
    answer: 1,
    explanation: "Entailment (KB |= α) means that in every truth assignment (model) satisfying all sentences in KB, α is also true. Entailment is a semantic notion. A sound inference procedure derives only entailed sentences; a complete procedure derives all entailed sentences. Model checking and resolution are methods to test entailment.",
    explanationChinese: "蕴含（KB |= α）意味着在满足KB中所有句子的每个真值赋值（模型）中，α也为真。蕴含是一个语义概念。可靠的推理过程只推导出蕴含的句子；完备的推理过程推导出所有蕴含的句子。模型检验和归结是测试蕴含的方法。",
    diagram: "",
    terms: ["entailment", "knowledge_base", "soundness_completeness"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 31,
    q: "Bayes' theorem allows us to compute:",
    qChinese: "贝叶斯定理允许我们计算：",
    options: [
      "A) The joint probability of two independent events",
      "B) The posterior probability P(H|E) from the prior P(H) and likelihood P(E|H)",
      "C) The entropy of a random variable",
      "D) The expected value of a continuous distribution"
    ],
    optionsChinese: [
      "A) 两个独立事件的联合概率",
      "B) 从先验P(H)和似然P(E|H)计算后验概率P(H|E)",
      "C) 随机变量的熵",
      "D) 连续分布的期望值"
    ],
    answer: 1,
    explanation: "Bayes' theorem states P(H|E) = P(E|H) * P(H) / P(E). It inverts conditional probabilities, allowing us to update our belief in hypothesis H after observing evidence E. The prior P(H) captures initial belief; the likelihood P(E|H) measures how well H explains E; the posterior P(H|E) is the updated belief.",
    explanationChinese: "贝叶斯定理表明P(H|E) = P(E|H) * P(H) / P(E)。它反转条件概率，允许我们在观测到证据E后更新对假设H的信念。先验P(H)捕获初始信念；似然P(E|H)衡量H解释E的程度；后验P(H|E)是更新后的信念。",
    diagram: "",
    terms: ["bayes_theorem", "posterior_probability", "prior_probability"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 32,
    q: "The Naive Bayes classifier assumes that:",
    qChinese: "朴素贝叶斯分类器假设：",
    options: [
      "A) All features have the same distribution",
      "B) Features are conditionally independent given the class label",
      "C) The class prior is always uniform",
      "D) The training data has no missing values"
    ],
    optionsChinese: [
      "A) 所有特征具有相同的分布",
      "B) 给定类标签时特征条件独立",
      "C) 类先验始终是均匀的",
      "D) 训练数据没有缺失值"
    ],
    answer: 1,
    explanation: "Naive Bayes assumes all features Xi are conditionally independent given the class variable C: P(X1,...,Xn|C) = Π P(Xi|C). Despite this strong simplification rarely holding in practice, Naive Bayes often performs surprisingly well in text classification and spam filtering due to its efficiency and robustness to irrelevant features.",
    explanationChinese: "朴素贝叶斯假设给定类变量C时所有特征Xi条件独立：P(X1,...,Xn|C) = Π P(Xi|C)。尽管这个强简化假设在实践中很少成立，但朴素贝叶斯在文本分类和垃圾邮件过滤中通常表现出令人惊讶的好效果，这归功于其效率和对不相关特征的鲁棒性。",
    diagram: "",
    terms: ["naive_bayes", "conditional_independence", "classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 33,
    q: "In a Bayesian network, an 'explaining away' effect occurs when:",
    qChinese: "在贝叶斯网络中，'解释消除'效应发生在：",
    options: [
      "A) Two parent causes of a common effect become dependent after the effect is observed",
      "B) A child node becomes independent of its parents when observed",
      "C) All hidden variables are marginalized out",
      "D) Evidence is retracted from the network"
    ],
    optionsChinese: [
      "A) 当共同结果被观测到后，两个父原因变得相关",
      "B) 当子节点被观测时与其父节点独立",
      "C) 所有隐变量被边际化",
      "D) 证据从网络中撤回"
    ],
    answer: 0,
    explanation: "Explaining away is a key pattern in Bayesian networks: two independent causes of the same effect become dependent when the effect (or one of its descendants) is observed. For example, if a car won't start, observing a dead battery 'explains away' the problem, making a faulty starter less likely even though they were a priori independent.",
    explanationChinese: "解释消除是贝叶斯网络中的一个关键模式：当结果（或其后代之一）被观测到时，同一结果的两个独立原因变得相关。例如，如果汽车无法启动，观测到电池没电'解释了'问题，使得启动器故障变得不太可能，即使它们先验独立。",
    diagram: "",
    terms: ["explaining_away", "collider", "bayesian_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 34,
    q: "The forward algorithm in Hidden Markov Models computes:",
    qChinese: "隐马尔可夫模型中的前向算法计算：",
    options: [
      "A) The most likely single hidden state at each time step",
      "B) The probability of the observed sequence given the model",
      "C) The optimal transition probabilities from training data",
      "D) The most likely hidden state sequence"
    ],
    optionsChinese: [
      "A) 每个时间步最可能的单个隐状态",
      "B) 给定模型的观测序列的概率",
      "C) 从训练数据得到的最优转移概率",
      "D) 最可能的隐状态序列"
    ],
    answer: 1,
    explanation: "The forward algorithm computes P(O1,...,OT | model) using dynamic programming. It defines forward variables alpha_t(i) = P(O1,...,Ot, St=i) and recursively computes them. This avoids the exponential cost of enumerating all possible state sequences. The Viterbi algorithm finds the best sequence; Baum-Welch learns parameters.",
    explanationChinese: "前向算法使用动态规划计算P(O1,...,OT | model)。它定义前向变量alpha_t(i) = P(O1,...,Ot, St=i)并递归地计算它们。这避免了枚举所有可能状态序列的指数成本。维特比算法找到最佳序列；Baum-Welch学习参数。",
    diagram: "",
    terms: ["forward_algorithm", "hidden_markov_model", "dynamic_programming"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 35,
    q: "In the Bellman equation for MDPs, the discount factor gamma (0 < gamma < 1) serves to:",
    qChinese: "在MDP的贝尔曼方程中，折扣因子gamma（0 < gamma < 1）的作用是：",
    options: [
      "A) Ensure the agent ignores all future rewards",
      "B) Weight future rewards less than immediate rewards, ensuring convergence of infinite-horizon returns",
      "C) Increase the probability of exploration over exploitation",
      "D) Normalize the reward function to have zero mean"
    ],
    optionsChinese: [
      "A) 确保智能体忽略所有未来奖励",
      "B) 使未来奖励的权重低于即时奖励，确保无限期回报的收敛",
      "C) 增加探索相对于利用的概率",
      "D) 将奖励函数归一化为零均值"
    ],
    answer: 1,
    explanation: "The discount factor gamma < 1 geometrically reduces the weight of future rewards: the reward t steps ahead is multiplied by gamma^t. This ensures the sum of infinite-horizon rewards converges to a finite value (bounded by Rmax/(1-gamma)). Gamma near 1 makes the agent far-sighted; gamma near 0 makes it myopic.",
    explanationChinese: "折扣因子gamma < 1以几何级数减少未来奖励的权重：t步后的奖励乘以gamma^t。这确保无限期奖励之和收敛到有限值（上界为Rmax/(1-gamma)）。接近1的gamma使智能体有远见；接近0的gamma使其短视。",
    diagram: "",
    terms: ["discount_factor", "bellman_equation", "infinite_horizon"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 36,
    q: "Value iteration for MDPs converges to the optimal value function by:",
    qChinese: "MDP的值迭代通过以下方式收敛到最优价值函数：",
    options: [
      "A) Randomly sampling state-action pairs until convergence",
      "B) Repeatedly applying the Bellman update to all states until values stabilize",
      "C) Solving a system of linear equations in closed form",
      "D) Performing gradient descent on the value function"
    ],
    optionsChinese: [
      "A) 随机采样状态-动作对直到收敛",
      "B) 重复对所有状态应用贝尔曼更新直到值稳定",
      "C) 以封闭形式求解线性方程组",
      "D) 对价值函数执行梯度下降"
    ],
    answer: 1,
    explanation: "Value iteration repeatedly updates V(s) = max_a [R(s,a) + gamma * sum_{s'} T(s,a,s') * V(s')] for all states until the maximum change falls below a threshold. The Bellman operator is a contraction mapping, guaranteeing convergence to the unique optimal V*. The optimal policy is then extracted greedily.",
    explanationChinese: "值迭代对所有状态重复更新V(s) = max_a [R(s,a) + gamma * sum_{s'} T(s,a,s') * V(s')]直到最大变化低于阈值。贝尔曼算子是压缩映射，保证收敛到唯一的最优V*。然后贪婪地提取最优策略。",
    diagram: "",
    terms: ["value_iteration", "bellman_update", "contraction_mapping"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 37,
    q: "Temporal difference (TD) learning differs from Monte Carlo methods in reinforcement learning because TD:",
    qChinese: "时序差分（TD）学习与强化学习中的蒙特卡洛方法的区别在于TD：",
    options: [
      "A) Requires a complete model of the environment",
      "B) Updates value estimates after every step using bootstrapping, without waiting for episode completion",
      "C) Can only be used in episodic tasks",
      "D) Computes exact values rather than estimates"
    ],
    optionsChinese: [
      "A) 需要环境的完整模型",
      "B) 在每一步后使用自举更新价值估计，无需等待回合结束",
      "C) 只能用于回合制任务",
      "D) 计算精确值而非估计值"
    ],
    answer: 1,
    explanation: "TD learning updates estimates based on other estimates (bootstrapping) at each time step: V(s) <- V(s) + alpha * [r + gamma*V(s') - V(s)]. Monte Carlo methods wait until episode end to compute actual returns. TD combines the sampling of MC with the bootstrapping of dynamic programming, enabling learning in continuing tasks.",
    explanationChinese: "TD学习在每个时间步基于其他估计（自举）更新估计：V(s) <- V(s) + alpha * [r + gamma*V(s') - V(s)]。蒙特卡洛方法等到回合结束才计算实际回报。TD结合了MC的采样和动态规划的自举，使得在持续任务中学习成为可能。",
    diagram: "",
    terms: ["temporal_difference", "bootstrapping", "monte_carlo_methods"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 38,
    q: "Conjunctive Normal Form (CNF) requires a propositional formula to be expressed as:",
    qChinese: "合取范式（CNF）要求命题公式表示为：",
    options: [
      "A) A disjunction of conjunctive clauses",
      "B) A conjunction of disjunctive clauses",
      "C) A single implication chain",
      "D) An exclusive-or of all variables"
    ],
    optionsChinese: [
      "A) 合取子句的析取",
      "B) 析取子句的合取",
      "C) 单一蕴含链",
      "D) 所有变量的异或"
    ],
    answer: 1,
    explanation: "CNF is a conjunction (AND) of clauses, where each clause is a disjunction (OR) of literals. For example: (A OR NOT B) AND (C OR D OR NOT A). CNF is the standard input format for SAT solvers and resolution-based theorem provers. Any propositional formula can be converted to an equivalent CNF using distribution and De Morgan's laws.",
    explanationChinese: "CNF是子句的合取（AND），其中每个子句是文字的析取（OR）。例如：(A OR NOT B) AND (C OR D OR NOT A)。CNF是SAT求解器和基于归结的定理证明器的标准输入格式。任何命题公式都可以使用分配律和德摩根定律转换为等价的CNF。",
    diagram: "",
    terms: ["conjunctive_normal_form", "sat_solver", "clause"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 39,
    q: "Gibbs sampling is an approximate inference technique for Bayesian networks that works by:",
    qChinese: "吉布斯采样是贝叶斯网络的一种近似推理技术，其工作方式是：",
    options: [
      "A) Enumerating all possible assignments to compute exact probabilities",
      "B) Iteratively resampling each non-evidence variable conditioned on the current values of all other variables",
      "C) Propagating messages along the edges of the network",
      "D) Converting the network into a decision tree"
    ],
    optionsChinese: [
      "A) 枚举所有可能的赋值以计算精确概率",
      "B) 迭代地对每个非证据变量在所有其他变量当前值的条件下重新采样",
      "C) 沿网络边传播消息",
      "D) 将网络转换为决策树"
    ],
    answer: 1,
    explanation: "Gibbs sampling is a Markov Chain Monte Carlo (MCMC) method. It repeatedly samples each non-evidence variable from its conditional distribution given the current values of its Markov blanket (parents, children, and children's other parents). Over many iterations, the samples approximate the true posterior distribution.",
    explanationChinese: "吉布斯采样是一种马尔可夫链蒙特卡洛（MCMC）方法。它重复地从每个非证据变量在其马尔可夫毯（父节点、子节点和子节点的其他父节点）当前值条件下的条件分布中采样。经过多次迭代，样本近似真实的后验分布。",
    diagram: "",
    terms: ["gibbs_sampling", "mcmc", "approximate_inference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 40,
    q: "The Turing Test, proposed by Alan Turing in 1950, evaluates AI by testing whether:",
    qChinese: "艾伦·图灵在1950年提出的图灵测试通过测试以下内容来评估AI：",
    options: [
      "A) A machine can solve any mathematical problem faster than a human",
      "B) A human interrogator can distinguish the machine from a human in a text conversation",
      "C) A machine can physically replicate all human motor skills",
      "D) A machine achieves superhuman performance on a standardized IQ test"
    ],
    optionsChinese: [
      "A) 机器能否比人类更快地解决任何数学问题",
      "B) 人类审问者能否在文本对话中将机器与人类区分开来",
      "C) 机器能否在物理上复制所有人类运动技能",
      "D) 机器是否在标准化智商测试中达到超人类表现"
    ],
    answer: 1,
    explanation: "The Turing Test (originally called the 'Imitation Game') proposes that a machine exhibits intelligence if a human judge, after a text-based conversation, cannot reliably distinguish it from a human. While influential, the test has been critiqued for focusing on deception rather than genuine understanding, leading to alternatives like Searle's Chinese Room argument.",
    explanationChinese: "图灵测试（最初称为'模仿游戏'）提出，如果人类评判者在基于文本的对话后无法可靠地将机器与人类区分开来，则该机器表现出智能。虽然影响深远，但该测试因关注欺骗而非真正理解而受到批评，引发了诸如Searle的中文房间论证等替代方案。",
    diagram: "",
    terms: ["turing_test", "artificial_intelligence", "imitation_game"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  }
];
