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
  }
];
