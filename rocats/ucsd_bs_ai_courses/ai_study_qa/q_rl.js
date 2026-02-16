const questionsRL = [
  {
    id: 1,
    q: "What are the three main components of a reinforcement learning system?",
    qChinese: "强化学习系统的三个主要组成部分是什么？",
    options: [
      "A) Input, hidden layer, and output",
      "B) Agent, environment, and reward signal",
      "C) Training set, validation set, and test set",
      "D) Encoder, decoder, and attention mechanism"
    ],
    optionsChinese: [
      "A) 输入、隐藏层和输出",
      "B) 智能体、环境和奖励信号",
      "C) 训练集、验证集和测试集",
      "D) 编码器、解码器和注意力机制"
    ],
    answer: 1,
    explanation: "A reinforcement learning system consists of an agent that takes actions, an environment that responds to those actions, and a reward signal that provides feedback. The agent learns a policy to maximize cumulative reward through trial-and-error interaction with the environment over time.",
    explanationChinese: "强化学习系统由采取行动的智能体、对这些行动做出响应的环境以及提供反馈的奖励信号组成。智能体通过与环境的试错交互，学习一种策略以最大化累积奖励。",
    diagram: "",
    terms: ["reward_function", "state_space", "action_space"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 2,
    q: "In RL, what does the term 'episode' refer to?",
    qChinese: "在强化学习中，'回合'指的是什么？",
    options: [
      "A) A single step in the environment",
      "B) One update of the neural network weights",
      "C) A complete sequence from initial state to terminal state",
      "D) The reward received at a single time step"
    ],
    optionsChinese: [
      "A) 环境中的单个步骤",
      "B) 神经网络权重的一次更新",
      "C) 从初始状态到终止状态的完整序列",
      "D) 在单个时间步收到的奖励"
    ],
    answer: 2,
    explanation: "An episode is a complete trajectory from the start state to a terminal state. In episodic tasks, the interaction naturally breaks into sequences such as games, maze navigation, or robotic pick-and-place tasks. Each episode resets the environment to allow the agent to try again.",
    explanationChinese: "回合是从起始状态到终止状态的完整轨迹。在回合制任务中，交互自然地分为若干序列，如游戏、迷宫导航或机器人抓取任务。每个回合重置环境以让智能体再次尝试。",
    diagram: "",
    terms: ["reward_function", "state_space"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 3,
    q: "What is the primary goal of an RL agent?",
    qChinese: "强化学习智能体的主要目标是什么？",
    options: [
      "A) Maximize the expected cumulative reward",
      "B) Minimize the number of actions taken",
      "C) Memorize the entire state space",
      "D) Minimize the entropy of the policy"
    ],
    optionsChinese: [
      "A) 最大化预期累积奖励",
      "B) 最小化采取的行动数量",
      "C) 记忆整个状态空间",
      "D) 最小化策略的熵"
    ],
    answer: 0,
    explanation: "The fundamental objective in reinforcement learning is to find a policy that maximizes the expected cumulative (discounted) reward over time, also called the return. This is different from supervised learning which minimizes a loss function on labeled data directly.",
    explanationChinese: "强化学习的基本目标是找到一个使预期累积（折扣）奖励最大化的策略，也称为回报。这与监督学习直接在标签数据上最小化损失函数不同。",
    diagram: "",
    terms: ["reward_function", "discount_factor"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 4,
    q: "Which of the following best describes the exploration-exploitation trade-off?",
    qChinese: "以下哪项最好地描述了探索-利用权衡？",
    options: [
      "A) Choosing between online and offline learning",
      "B) Trading off between training speed and model accuracy",
      "C) Deciding between model-based and model-free methods",
      "D) Balancing trying new actions versus choosing known rewarding actions"
    ],
    optionsChinese: [
      "A) 在在线学习和离线学习之间选择",
      "B) 在训练速度和模型准确性之间权衡",
      "C) 在基于模型和无模型方法之间做决定",
      "D) 在尝试新行动和选择已知高奖励行动之间平衡"
    ],
    answer: 3,
    explanation: "The exploration-exploitation dilemma is central to RL. Exploitation means choosing the best-known action to maximize immediate reward, while exploration means trying less-known actions to discover potentially better strategies. Effective learning requires a balance of both throughout training.",
    explanationChinese: "探索-利用困境是强化学习的核心问题。利用意味着选择已知最佳行动以最大化即时奖励，而探索意味着尝试不太了解的行动以发现潜在更好的策略。有效学习需要在训练过程中平衡两者。",
    diagram: "",
    terms: ["exploration_exploitation", "epsilon_greedy"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 5,
    q: "What is a 'policy' in reinforcement learning?",
    qChinese: "在强化学习中，'策略'是什么？",
    options: [
      "A) The neural network architecture used for training",
      "B) The reward function of the environment",
      "C) The transition probability between states",
      "D) A mapping from states to actions (or action probabilities)"
    ],
    optionsChinese: [
      "A) 用于训练的神经网络架构",
      "B) 环境的奖励函数",
      "C) 状态之间的转移概率",
      "D) 从状态到行动（或行动概率）的映射"
    ],
    answer: 3,
    explanation: "A policy, denoted pi, defines the agent's behavior by mapping each state to an action (deterministic policy) or to a probability distribution over actions (stochastic policy). The goal of RL is to find the optimal policy pi* that maximizes expected cumulative reward.",
    explanationChinese: "策略（记为pi）通过将每个状态映射到一个行动（确定性策略）或行动上的概率分布（随机策略）来定义智能体的行为。强化学习的目标是找到最大化预期累积奖励的最优策略pi*。",
    diagram: "",
    terms: ["policy_gradient", "state_space", "action_space"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 6,
    q: "How does reinforcement learning differ from supervised learning?",
    qChinese: "强化学习与监督学习有何不同？",
    options: [
      "A) RL requires labeled datasets for every state-action pair",
      "B) RL learns from delayed reward signals rather than explicit labels",
      "C) RL cannot handle continuous state spaces",
      "D) RL always converges faster than supervised learning"
    ],
    optionsChinese: [
      "A) 强化学习需要每个状态-行动对的标签数据集",
      "B) 强化学习从延迟的奖励信号而非显式标签中学习",
      "C) 强化学习无法处理连续状态空间",
      "D) 强化学习总是比监督学习收敛得更快"
    ],
    answer: 1,
    explanation: "Unlike supervised learning which learns from labeled input-output pairs, RL learns from reward signals that may be delayed and sparse. The agent must discover which actions lead to high rewards through trial and error, without being told the correct action at each step.",
    explanationChinese: "与从标签输入输出对学习的监督学习不同，强化学习从可能延迟且稀疏的奖励信号中学习。智能体必须通过试错来发现哪些行动会带来高奖励，而不是在每一步都被告知正确行动。",
    diagram: "",
    terms: ["reward_function", "exploration_exploitation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 7,
    q: "What is the 'return' (G_t) in reinforcement learning?",
    qChinese: "在强化学习中，'回报'（G_t）是什么？",
    options: [
      "A) The immediate reward at time t",
      "B) The discounted sum of future rewards from time t onward",
      "C) The average reward over all episodes",
      "D) The difference between expected and actual reward"
    ],
    optionsChinese: [
      "A) 在时间t的即时奖励",
      "B) 从时间t开始的未来奖励的折扣总和",
      "C) 所有回合的平均奖励",
      "D) 预期奖励与实际奖励之间的差异"
    ],
    answer: 1,
    explanation: "The return G_t is defined as the discounted sum of future rewards: G_t = R_{t+1} + gamma*R_{t+2} + gamma^2*R_{t+3} + ... where gamma is the discount factor. This formulation allows the agent to consider long-term consequences while giving more weight to immediate rewards.",
    explanationChinese: "回报G_t定义为未来奖励的折扣总和：G_t = R_{t+1} + gamma*R_{t+2} + gamma^2*R_{t+3} + ...其中gamma是折扣因子。这种公式使智能体能够考虑长期后果，同时给予即时奖励更大的权重。",
    diagram: "",
    terms: ["discount_factor", "reward_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 8,
    q: "What role does the discount factor (gamma) play in RL?",
    qChinese: "折扣因子（gamma）在强化学习中起什么作用？",
    options: [
      "A) It controls the learning rate of the algorithm",
      "B) It determines how much future rewards are valued relative to immediate rewards",
      "C) It sets the probability of taking a random action",
      "D) It defines the size of the replay buffer"
    ],
    optionsChinese: [
      "A) 它控制算法的学习率",
      "B) 它决定未来奖励相对于即时奖励的价值",
      "C) 它设置采取随机行动的概率",
      "D) 它定义回放缓冲区的大小"
    ],
    answer: 1,
    explanation: "The discount factor gamma (0 <= gamma <= 1) controls the present value of future rewards. A gamma close to 0 makes the agent myopic, caring mostly about immediate rewards, while a gamma close to 1 makes the agent far-sighted, valuing future rewards almost as much as immediate ones.",
    explanationChinese: "折扣因子gamma（0 <= gamma <= 1）控制未来奖励的现值。接近0的gamma使智能体目光短浅，主要关心即时奖励，而接近1的gamma使智能体目光长远，几乎同等重视未来奖励。",
    diagram: "",
    terms: ["discount_factor", "reward_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 9,
    q: "In RL, what is a 'state'?",
    qChinese: "在强化学习中，'状态'是什么？",
    options: [
      "A) The action chosen by the agent",
      "B) A representation of the current situation of the environment",
      "C) The total reward accumulated so far",
      "D) The set of all possible actions"
    ],
    optionsChinese: [
      "A) 智能体选择的行动",
      "B) 环境当前情况的表示",
      "C) 迄今为止积累的总奖励",
      "D) 所有可能行动的集合"
    ],
    answer: 1,
    explanation: "A state is a complete description of the current situation of the environment that the agent uses to make decisions. It should contain all information necessary for the agent to choose an optimal action. In practice, agents often receive partial observations rather than full states.",
    explanationChinese: "状态是环境当前情况的完整描述，智能体用它来做决策。它应包含智能体选择最优行动所需的所有信息。在实践中，智能体通常接收部分观测而非完整状态。",
    diagram: "",
    terms: ["state_space", "action_space"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 10,
    q: "What is the difference between model-based and model-free RL?",
    qChinese: "基于模型和无模型的强化学习有什么区别？",
    options: [
      "A) Model-based RL learns or uses a model of environment dynamics; model-free learns directly from experience",
      "B) Model-based RL uses neural networks while model-free does not",
      "C) Model-free RL is always more sample efficient",
      "D) Model-based RL can only work with discrete state spaces"
    ],
    optionsChinese: [
      "A) 基于模型的RL学习或使用环境动态模型；无模型的直接从经验中学习",
      "B) 基于模型的RL使用神经网络而无模型的不使用",
      "C) 无模型的RL总是更具样本效率",
      "D) 基于模型的RL只能用于离散状态空间"
    ],
    answer: 0,
    explanation: "Model-based RL learns a model of the environment's transition dynamics and reward function, then uses it for planning. Model-free RL learns a value function or policy directly from experience without explicitly modeling the environment. Model-based methods are typically more sample efficient but require accurate models.",
    explanationChinese: "基于模型的RL学习环境的转移动态和奖励函数模型，然后用它进行规划。无模型的RL直接从经验中学习价值函数或策略，而不显式建模环境。基于模型的方法通常更具样本效率，但需要准确的模型。",
    diagram: "",
    terms: ["model_based_rl", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 11,
    q: "What is reward shaping in reinforcement learning?",
    qChinese: "在强化学习中，奖励塑造是什么？",
    options: [
      "A) Adding auxiliary reward signals to guide the agent's learning beyond sparse rewards",
      "B) Automatically discovering the reward function from demonstrations",
      "C) Normalizing rewards to have zero mean and unit variance",
      "D) Clipping rewards to a fixed range"
    ],
    optionsChinese: [
      "A) 添加辅助奖励信号以引导智能体超越稀疏奖励进行学习",
      "B) 从演示中自动发现奖励函数",
      "C) 将奖励归一化为零均值和单位方差",
      "D) 将奖励裁剪到固定范围"
    ],
    answer: 0,
    explanation: "Reward shaping involves adding supplementary reward signals to the original environment reward to make learning faster and more efficient. For example, giving a robot small positive rewards for moving closer to a goal rather than only rewarding reaching the goal. Care must be taken to avoid changing the optimal policy.",
    explanationChinese: "奖励塑造涉及向原始环境奖励添加补充奖励信号，以使学习更快、更高效。例如，给机器人接近目标时小的正奖励，而不是只奖励到达目标。必须注意避免改变最优策略。",
    diagram: "",
    terms: ["reward_function", "exploration_exploitation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 12,
    q: "What is the action space in a reinforcement learning problem?",
    qChinese: "在强化学习问题中，行动空间是什么？",
    options: [
      "A) The set of all possible states the environment can be in",
      "B) The set of all possible actions available to the agent",
      "C) The range of possible reward values",
      "D) The memory buffer storing past experiences"
    ],
    optionsChinese: [
      "A) 环境可以处于的所有可能状态的集合",
      "B) 智能体可用的所有可能行动的集合",
      "C) 可能奖励值的范围",
      "D) 存储过去经验的记忆缓冲区"
    ],
    answer: 1,
    explanation: "The action space defines all actions an agent can take at any given state. It can be discrete (finite set of choices like up/down/left/right) or continuous (real-valued vectors like torques applied to robot joints). The nature of the action space influences which RL algorithms are applicable.",
    explanationChinese: "行动空间定义了智能体在任何给定状态下可以采取的所有行动。它可以是离散的（有限选择集合如上/下/左/右）或连续的（实值向量如施加到机器人关节的扭矩）。行动空间的性质影响适用的RL算法。",
    diagram: "",
    terms: ["action_space", "state_space"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 13,
    q: "What is a sparse reward problem in RL?",
    qChinese: "在强化学习中，稀疏奖励问题是什么？",
    options: [
      "A) When the reward function has too many parameters",
      "B) When different agents receive different rewards",
      "C) When the reward values are very small in magnitude",
      "D) When rewards are only given at rare, specific events like task completion"
    ],
    optionsChinese: [
      "A) 当奖励函数有太多参数时",
      "B) 当不同的智能体收到不同的奖励时",
      "C) 当奖励值的幅度非常小时",
      "D) 当奖励仅在稀少的特定事件（如任务完成）时才给予"
    ],
    answer: 3,
    explanation: "Sparse reward problems provide feedback only at critical moments, such as winning a game or reaching a goal. Most time steps yield zero reward, making it hard for the agent to learn which actions contributed to success. Techniques like reward shaping, curiosity-driven exploration, and hindsight experience replay help address this.",
    explanationChinese: "稀疏奖励问题仅在关键时刻提供反馈，如赢得游戏或到达目标。大多数时间步的奖励为零，使智能体难以学习哪些行动促成了成功。奖励塑造、好奇心驱动的探索和事后经验回放等技术有助于解决这一问题。",
    diagram: "",
    terms: ["reward_function", "exploration_exploitation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 14,
    q: "What is the difference between on-policy and off-policy learning?",
    qChinese: "在策略学习和离策略学习有什么区别？",
    options: [
      "A) On-policy updates the policy during evaluation; off-policy does not",
      "B) On-policy learns about the policy currently being followed; off-policy can learn about a different policy from collected data",
      "C) On-policy uses neural networks; off-policy uses tabular methods",
      "D) On-policy is model-based; off-policy is model-free"
    ],
    optionsChinese: [
      "A) 在策略在评估期间更新策略；离策略不更新",
      "B) 在策略学习当前正在遵循的策略；离策略可以从收集的数据中学习不同的策略",
      "C) 在策略使用神经网络；离策略使用表格方法",
      "D) 在策略是基于模型的；离策略是无模型的"
    ],
    answer: 1,
    explanation: "On-policy methods (e.g., SARSA) evaluate and improve the same policy used for generating data. Off-policy methods (e.g., Q-Learning) can learn about an optimal policy while following a different behavior policy, enabling experience replay and better sample efficiency through data reuse.",
    explanationChinese: "在策略方法（如SARSA）评估和改进用于生成数据的同一策略。离策略方法（如Q-Learning）可以在遵循不同行为策略的同时学习最优策略，从而实现经验回放和通过数据复用提高样本效率。",
    diagram: "",
    terms: ["q_learning", "temporal_difference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 15,
    q: "What characterizes a continuing (non-episodic) task in RL?",
    qChinese: "什么特征定义了强化学习中的持续（非回合制）任务？",
    options: [
      "A) The task has a clear start and end point",
      "B) The agent can only take a fixed number of actions",
      "C) The interaction goes on indefinitely without natural terminal states",
      "D) The reward is always positive"
    ],
    optionsChinese: [
      "A) 任务有明确的开始和结束点",
      "B) 智能体只能采取固定数量的行动",
      "C) 交互无限期地持续，没有自然的终止状态",
      "D) 奖励总是正的"
    ],
    answer: 2,
    explanation: "Continuing tasks have no natural terminal state, so the agent-environment interaction goes on forever. Examples include process control and personal assistants. The discount factor gamma < 1 is essential in continuing tasks to ensure the return remains finite and well-defined.",
    explanationChinese: "持续任务没有自然终止状态，因此智能体-环境交互永远持续。示例包括过程控制和个人助理。在持续任务中，折扣因子gamma < 1是确保回报保持有限和良定义的关键。",
    diagram: "",
    terms: ["discount_factor", "reward_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 16,
    q: "What is an epsilon-greedy strategy?",
    qChinese: "什么是epsilon-贪心策略？",
    options: [
      "A) Always choose the action with the highest estimated value",
      "B) With probability epsilon choose a random action, otherwise choose the greedy action",
      "C) Gradually decrease the learning rate by epsilon each step",
      "D) Only explore for the first epsilon fraction of training"
    ],
    optionsChinese: [
      "A) 总是选择估计值最高的行动",
      "B) 以epsilon的概率选择随机行动，否则选择贪心行动",
      "C) 每一步将学习率逐渐减少epsilon",
      "D) 仅在训练的前epsilon比例时间进行探索"
    ],
    answer: 1,
    explanation: "Epsilon-greedy is a simple exploration strategy. With probability epsilon, the agent takes a random action (exploration), and with probability 1-epsilon, it takes the action with the highest estimated value (exploitation). Epsilon is often decayed over time as the agent gains more knowledge about the environment.",
    explanationChinese: "Epsilon-贪心是一种简单的探索策略。以概率epsilon，智能体采取随机行动（探索），以概率1-epsilon，采取估计值最高的行动（利用）。随着智能体获得更多环境知识，epsilon通常随时间递减。",
    diagram: "",
    terms: ["epsilon_greedy", "exploration_exploitation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 17,
    q: "What is the credit assignment problem in RL?",
    qChinese: "强化学习中的信用分配问题是什么？",
    options: [
      "A) Determining which agent should receive credit in multi-agent settings",
      "B) Determining which past actions were responsible for a delayed reward",
      "C) Assigning computational resources to different parts of the algorithm",
      "D) Calculating the exact gradient of the reward function"
    ],
    optionsChinese: [
      "A) 确定在多智能体设置中哪个智能体应获得信用",
      "B) 确定哪些过去的行动对延迟奖励负责",
      "C) 将计算资源分配给算法的不同部分",
      "D) 计算奖励函数的精确梯度"
    ],
    answer: 1,
    explanation: "The credit assignment problem refers to the difficulty of determining which actions in a sequence of decisions actually contributed to a final outcome or reward. When a reward is delayed, the agent must figure out which earlier decisions deserve credit. This is a fundamental challenge in RL.",
    explanationChinese: "信用分配问题指的是在一系列决策中确定哪些行动实际上对最终结果或奖励有贡献的困难。当奖励延迟时，智能体必须找出哪些早期决策值得获得信用。这是强化学习的基本挑战。",
    diagram: "",
    terms: ["reward_function", "temporal_difference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 18,
    q: "What is the difference between a deterministic and stochastic policy?",
    qChinese: "确定性策略和随机策略有什么区别？",
    options: [
      "A) Deterministic policies are only for discrete actions; stochastic for continuous",
      "B) A deterministic policy maps each state to one action; a stochastic policy outputs a probability distribution over actions",
      "C) Stochastic policies always outperform deterministic ones",
      "D) Deterministic policies cannot be learned by gradient methods"
    ],
    optionsChinese: [
      "A) 确定性策略仅用于离散行动；随机策略用于连续行动",
      "B) 确定性策略将每个状态映射到一个行动；随机策略输出行动上的概率分布",
      "C) 随机策略总是优于确定性策略",
      "D) 确定性策略不能通过梯度方法学习"
    ],
    answer: 1,
    explanation: "A deterministic policy pi(s) = a selects one specific action for each state. A stochastic policy pi(a|s) gives a probability distribution over actions for each state. Stochastic policies naturally enable exploration and are used in policy gradient methods. Both types can be optimal depending on the problem.",
    explanationChinese: "确定性策略pi(s) = a为每个状态选择一个特定行动。随机策略pi(a|s)为每个状态给出行动上的概率分布。随机策略自然地实现探索，常用于策略梯度方法。两种类型根据问题都可能是最优的。",
    diagram: "",
    terms: ["policy_gradient", "exploration_exploitation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 19,
    q: "In the multi-armed bandit problem, what is the 'regret'?",
    qChinese: "在多臂老虎机问题中，'遗憾'是什么？",
    options: [
      "A) The total reward obtained over all time steps",
      "B) The variance of the reward distribution",
      "C) The number of times a suboptimal arm was pulled",
      "D) The difference between the reward from always pulling the best arm and the actual reward obtained"
    ],
    optionsChinese: [
      "A) 所有时间步获得的总奖励",
      "B) 奖励分布的方差",
      "C) 拉次优臂的次数",
      "D) 总是拉最优臂获得的奖励与实际获得奖励之间的差异"
    ],
    answer: 3,
    explanation: "Regret measures the loss incurred by not always choosing the optimal action. Total regret over T steps is the difference between the reward from always selecting the best arm and the cumulative reward obtained by the agent's strategy. Minimizing regret is equivalent to maximizing cumulative reward.",
    explanationChinese: "遗憾衡量因未总是选择最优行动而产生的损失。T步内的总遗憾是总是选择最优臂的奖励与智能体策略获得的累积奖励之间的差异。最小化遗憾等价于最大化累积奖励。",
    diagram: "",
    terms: ["exploration_exploitation", "reward_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 20,
    q: "What is inverse reinforcement learning (IRL)?",
    qChinese: "什么是逆强化学习（IRL）？",
    options: [
      "A) Learning a policy from a reward function",
      "B) Inferring the reward function from observed expert behavior",
      "C) Reversing the direction of policy gradient updates",
      "D) Training the environment model in reverse order"
    ],
    optionsChinese: [
      "A) 从奖励函数学习策略",
      "B) 从观察到的专家行为推断奖励函数",
      "C) 反转策略梯度更新的方向",
      "D) 以逆序训练环境模型"
    ],
    answer: 1,
    explanation: "Inverse reinforcement learning recovers the underlying reward function from demonstrations of an expert. Instead of being given the reward, the algorithm observes optimal behavior and infers what reward function would make that behavior optimal. This is useful when reward functions are hard to specify manually.",
    explanationChinese: "逆强化学习从专家的演示中恢复底层奖励函数。算法不是被给予奖励，而是观察最优行为并推断什么奖励函数会使该行为成为最优。这在奖励函数难以手动指定时非常有用。",
    diagram: "",
    terms: ["reward_function", "model_based_rl"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 21,
    q: "What is the Upper Confidence Bound (UCB) exploration strategy?",
    qChinese: "什么是上置信界（UCB）探索策略？",
    options: [
      "A) Always select the action with the lowest estimated value",
      "B) Use a fixed exploration rate throughout training",
      "C) Randomly permute the action ranking each time step",
      "D) Select the action that maximizes the estimated value plus an exploration bonus based on uncertainty"
    ],
    optionsChinese: [
      "A) 总是选择估计值最低的行动",
      "B) 在整个训练过程中使用固定的探索率",
      "C) 每个时间步随机排列行动排名",
      "D) 选择最大化估计值加上基于不确定性的探索奖励的行动"
    ],
    answer: 3,
    explanation: "UCB selects the action that maximizes Q(a) + c*sqrt(ln(t)/N(a)), where Q(a) is the estimated value, t is the total number of steps, and N(a) is the count of action a being selected. Actions with fewer visits get higher bonuses, encouraging exploration of uncertain options in a principled way.",
    explanationChinese: "UCB选择最大化Q(a) + c*sqrt(ln(t)/N(a))的行动，其中Q(a)是估计值，t是总步数，N(a)是行动a被选择的次数。访问次数较少的行动获得更高的奖励，以有原则的方式鼓励探索不确定的选项。",
    diagram: "",
    terms: ["exploration_exploitation", "reward_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 22,
    q: "What is a trajectory in the context of RL?",
    qChinese: "在强化学习中，轨迹是什么？",
    options: [
      "A) The set of all reachable states from a given state",
      "B) The gradient path during optimization",
      "C) A sequence of states, actions, and rewards experienced by the agent",
      "D) The architecture of the policy network"
    ],
    optionsChinese: [
      "A) 从给定状态可达的所有状态的集合",
      "B) 优化过程中的梯度路径",
      "C) 智能体经历的状态、行动和奖励的序列",
      "D) 策略网络的架构"
    ],
    answer: 2,
    explanation: "A trajectory (or rollout) is the sequence tau = (s_0, a_0, r_1, s_1, a_1, r_2, ...) that records the agent's interaction with the environment over time. Trajectories are fundamental in policy gradient methods where the gradient is estimated from sampled trajectories.",
    explanationChinese: "轨迹（或展开）是记录智能体与环境随时间交互的序列tau = (s_0, a_0, r_1, s_1, a_1, r_2, ...)。轨迹在策略梯度方法中是基础的，其中梯度从采样的轨迹中估计。",
    diagram: "",
    terms: ["policy_gradient", "state_space"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 23,
    q: "What does 'sample efficiency' mean in RL?",
    qChinese: "在强化学习中，'样本效率'意味着什么？",
    options: [
      "A) How much useful learning an algorithm extracts from each environment interaction",
      "B) The speed of the neural network's forward pass",
      "C) The ratio of exploration to exploitation steps",
      "D) The memory required to store training data"
    ],
    optionsChinese: [
      "A) 算法从每次环境交互中提取的有用学习量",
      "B) 神经网络前向传播的速度",
      "C) 探索步骤与利用步骤的比率",
      "D) 存储训练数据所需的内存"
    ],
    answer: 0,
    explanation: "Sample efficiency refers to how much learning an algorithm achieves per unit of environment interaction. Model-based methods tend to be more sample-efficient than model-free methods because they build a world model. Off-policy methods are generally more sample-efficient than on-policy methods through experience replay.",
    explanationChinese: "样本效率指算法每单位环境交互实现的学习量。基于模型的方法往往比无模型方法更具样本效率，因为它们构建了世界模型。离策略方法通过经验回放通常比在策略方法更具样本效率。",
    diagram: "",
    terms: ["model_based_rl", "exploration_exploitation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 24,
    q: "What is the 'horizon' of an RL problem?",
    qChinese: "强化学习问题的'时间范围'是什么？",
    options: [
      "A) The number of time steps over which the agent plans or acts",
      "B) The dimension of the state space",
      "C) The number of layers in the neural network",
      "D) The total number of training episodes"
    ],
    optionsChinese: [
      "A) 智能体规划或行动的时间步数",
      "B) 状态空间的维度",
      "C) 神经网络的层数",
      "D) 训练回合的总数"
    ],
    answer: 0,
    explanation: "The horizon refers to the length of time into the future that the agent considers. A finite horizon means the agent optimizes over a fixed number of steps. An infinite horizon, combined with discounting, means the agent considers all future rewards but assigns decreasing weight to more distant ones.",
    explanationChinese: "时间范围指智能体考虑的未来时间长度。有限时间范围意味着智能体在固定步数内优化。无限时间范围结合折扣意味着智能体考虑所有未来奖励，但对更远的奖励赋予递减的权重。",
    diagram: "",
    terms: ["discount_factor", "reward_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 25,
    q: "What is reward clipping and when is it used?",
    qChinese: "什么是奖励裁剪，何时使用？",
    options: [
      "A) Removing rewards below a threshold from the replay buffer",
      "B) Restricting reward values to a fixed range (e.g., [-1, 1]) to stabilize training",
      "C) Only using positive rewards during training",
      "D) Doubling the reward at terminal states"
    ],
    optionsChinese: [
      "A) 从回放缓冲区中移除低于阈值的奖励",
      "B) 将奖励值限制在固定范围（如[-1, 1]）以稳定训练",
      "C) 在训练期间只使用正奖励",
      "D) 在终止状态将奖励加倍"
    ],
    answer: 1,
    explanation: "Reward clipping constrains reward values to a fixed range, commonly [-1, 1], to prevent large reward magnitudes from causing unstable gradient updates. It was famously used in the original DQN Atari paper. While it stabilizes training, it may lose information about the relative scale of different rewards.",
    explanationChinese: "奖励裁剪将奖励值限制在固定范围内，通常为[-1, 1]，以防止大的奖励幅度导致不稳定的梯度更新。它在原始DQN Atari论文中被著名地使用。虽然它稳定了训练，但可能丢失关于不同奖励相对规模的信息。",
    diagram: "",
    terms: ["reward_function", "deep_q_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 26,
    q: "What is a Markov Decision Process (MDP)?",
    qChinese: "什么是马尔可夫决策过程（MDP）？",
    options: [
      "A) A decision process where future states depend on the entire history",
      "B) A graphical model for supervised learning",
      "C) A process that only handles deterministic transitions",
      "D) A mathematical framework with states, actions, transition probabilities, and rewards satisfying the Markov property"
    ],
    optionsChinese: [
      "A) 未来状态取决于整个历史的决策过程",
      "B) 用于监督学习的图模型",
      "C) 仅处理确定性转移的过程",
      "D) 具有状态、行动、转移概率和奖励且满足马尔可夫性质的数学框架"
    ],
    answer: 3,
    explanation: "An MDP is defined by the tuple (S, A, P, R, gamma) where S is the state set, A the action set, P the transition probability function, R the reward function, and gamma the discount factor. The Markov property states that the future depends only on the current state and action, not the history.",
    explanationChinese: "MDP由元组(S, A, P, R, gamma)定义，其中S是状态集，A是行动集，P是转移概率函数，R是奖励函数，gamma是折扣因子。马尔可夫性质表明未来仅取决于当前状态和行动，而非历史。",
    diagram: "",
    terms: ["state_space", "action_space", "reward_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 27,
    q: "What is the Markov property?",
    qChinese: "什么是马尔可夫性质？",
    options: [
      "A) The future state depends only on the current state and action, not on prior history",
      "B) All states must be visited equally often",
      "C) The reward must be deterministic",
      "D) The transition probabilities must be uniform"
    ],
    optionsChinese: [
      "A) 未来状态仅取决于当前状态和行动，而非之前的历史",
      "B) 所有状态必须被同等频率地访问",
      "C) 奖励必须是确定性的",
      "D) 转移概率必须是均匀的"
    ],
    answer: 0,
    explanation: "The Markov property (memoryless property) states that P(s_{t+1}|s_t, a_t) = P(s_{t+1}|s_1,...,s_t, a_1,...,a_t). The current state captures all relevant information from history needed to predict the future. This simplification makes MDPs tractable for dynamic programming and RL algorithms.",
    explanationChinese: "马尔可夫性质（无记忆性质）表明P(s_{t+1}|s_t, a_t) = P(s_{t+1}|s_1,...,s_t, a_1,...,a_t)。当前状态捕获了预测未来所需的历史中所有相关信息。这种简化使MDP对于动态规划和RL算法是可处理的。",
    diagram: "",
    terms: ["state_space", "model_based_rl"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 28,
    q: "What does the transition function P(s'|s, a) represent in an MDP?",
    qChinese: "在MDP中，转移函数P(s'|s, a)代表什么？",
    options: [
      "A) The probability of receiving reward r in state s",
      "B) The probability that state s is the initial state",
      "C) The probability of selecting action a in state s",
      "D) The probability of transitioning to state s' given current state s and action a"
    ],
    optionsChinese: [
      "A) 在状态s中获得奖励r的概率",
      "B) 状态s是初始状态的概率",
      "C) 在状态s中选择行动a的概率",
      "D) 给定当前状态s和行动a，转移到状态s'的概率"
    ],
    answer: 3,
    explanation: "The transition function P(s'|s, a) defines the environment dynamics by specifying the probability of reaching next state s' when taking action a in state s. For all s and a, the probabilities sum to 1 over all possible next states. This function is central to model-based RL methods.",
    explanationChinese: "转移函数P(s'|s, a)通过指定在状态s中采取行动a时到达下一个状态s'的概率来定义环境动态。对于所有s和a，概率在所有可能的下一个状态上求和为1。该函数是基于模型的RL方法的核心。",
    diagram: "",
    terms: ["state_space", "model_based_rl"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 29,
    q: "What is a POMDP?",
    qChinese: "什么是POMDP？",
    options: [
      "A) A Partially Observable Markov Decision Process where the agent cannot fully observe the state",
      "B) A Policy-Optimized MDP that uses gradient descent",
      "C) A Parallel Online MDP for multi-agent systems",
      "D) A Probabilistic Objective MDP for stochastic rewards"
    ],
    optionsChinese: [
      "A) 部分可观测马尔可夫决策过程，智能体无法完全观测状态",
      "B) 使用梯度下降的策略优化MDP",
      "C) 用于多智能体系统的并行在线MDP",
      "D) 用于随机奖励的概率目标MDP"
    ],
    answer: 0,
    explanation: "A Partially Observable MDP extends the standard MDP by adding an observation function. The agent receives observations that provide incomplete information about the true state. The agent must maintain a belief state (probability distribution over states) and make decisions based on this belief rather than the true state.",
    explanationChinese: "部分可观测MDP通过添加观测函数扩展了标准MDP。智能体接收的观测提供关于真实状态的不完整信息。智能体必须维护一个信念状态（状态上的概率分布），并基于该信念而非真实状态做出决策。",
    diagram: "",
    terms: ["state_space", "model_based_rl"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 30,
    q: "In an MDP, what is the reward function R(s, a, s')?",
    qChinese: "在MDP中，奖励函数R(s, a, s')是什么？",
    options: [
      "A) The probability of transitioning between states",
      "B) The expected immediate reward received when taking action a in state s and transitioning to s'",
      "C) The cumulative reward over all time steps",
      "D) The discount factor applied to future states"
    ],
    optionsChinese: [
      "A) 状态之间转移的概率",
      "B) 在状态s中采取行动a并转移到s'时获得的期望即时奖励",
      "C) 所有时间步的累积奖励",
      "D) 应用于未来状态的折扣因子"
    ],
    answer: 1,
    explanation: "The reward function R(s, a, s') specifies the expected immediate scalar reward when transitioning from state s to s' via action a. It can also be written as R(s, a) or R(s) depending on the formulation. The reward function encodes the goal of the task and guides the agent's learning.",
    explanationChinese: "奖励函数R(s, a, s')指定通过行动a从状态s转移到s'时的期望即时标量奖励。根据公式也可以写成R(s, a)或R(s)。奖励函数编码任务目标并指导智能体的学习。",
    diagram: "",
    terms: ["reward_function", "state_space"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 31,
    q: "What is the difference between a finite and infinite MDP?",
    qChinese: "有限MDP和无限MDP有什么区别？",
    options: [
      "A) Finite MDPs have deterministic transitions; infinite MDPs are stochastic",
      "B) Finite MDPs run for a fixed number of steps; infinite MDPs run forever",
      "C) Finite MDPs have finite state and action sets; infinite MDPs have continuous or countably infinite sets",
      "D) There is no difference; all MDPs are finite"
    ],
    optionsChinese: [
      "A) 有限MDP具有确定性转移；无限MDP是随机的",
      "B) 有限MDP运行固定步数；无限MDP永远运行",
      "C) 有限MDP具有有限的状态和行动集；无限MDP具有连续或可数无限集",
      "D) 没有区别；所有MDP都是有限的"
    ],
    answer: 2,
    explanation: "A finite MDP has finite sets of states, actions, and rewards. This allows exact tabular solutions. When state or action spaces are continuous or countably infinite, we have an infinite MDP, requiring function approximation methods like neural networks to represent value functions or policies.",
    explanationChinese: "有限MDP具有有限的状态、行动和奖励集。这允许精确的表格解法。当状态或行动空间是连续或可数无限时，我们有一个无限MDP，需要如神经网络等函数逼近方法来表示价值函数或策略。",
    diagram: "",
    terms: ["state_space", "action_space", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 32,
    q: "What is an absorbing state in an MDP?",
    qChinese: "MDP中的吸收状态是什么？",
    options: [
      "A) A state with the highest reward",
      "B) A state that cannot be reached from any other state",
      "C) A terminal state that transitions only to itself with zero reward",
      "D) The initial state of every episode"
    ],
    optionsChinese: [
      "A) 奖励最高的状态",
      "B) 不能从任何其他状态到达的状态",
      "C) 仅以零奖励转移到自身的终止状态",
      "D) 每个回合的初始状态"
    ],
    answer: 2,
    explanation: "An absorbing state is a terminal state from which the agent cannot leave. Once entered, the agent stays there forever receiving zero reward. This is a technical device to unify episodic and continuing task formulations, allowing episodic tasks to be treated within the infinite-horizon framework.",
    explanationChinese: "吸收状态是一个智能体无法离开的终止状态。一旦进入，智能体将永远停留在那里并获得零奖励。这是一种技术手段，用于统一回合制和持续任务的公式，允许在无限时间范围框架中处理回合制任务。",
    diagram: "",
    terms: ["state_space", "reward_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 33,
    q: "In the MDP framework, what is a stationary policy?",
    qChinese: "在MDP框架中，什么是平稳策略？",
    options: [
      "A) A policy that always selects the same action in all states",
      "B) A policy that never changes its action selection rule regardless of time step",
      "C) A policy that is only valid for continuing tasks",
      "D) A policy that stops updating after convergence"
    ],
    optionsChinese: [
      "A) 在所有状态中总是选择相同行动的策略",
      "B) 无论时间步如何都不改变行动选择规则的策略",
      "C) 仅对持续任务有效的策略",
      "D) 收敛后停止更新的策略"
    ],
    answer: 1,
    explanation: "A stationary policy is one where the mapping from states to actions (or action distributions) does not depend on the time step. The policy pi(a|s) is the same at t=1, t=100, and t=1000. For infinite-horizon discounted MDPs, there always exists an optimal policy that is stationary and deterministic.",
    explanationChinese: "平稳策略是从状态到行动（或行动分布）的映射不依赖于时间步的策略。策略pi(a|s)在t=1、t=100和t=1000时相同。对于无限时间范围折扣MDP，总存在一个平稳且确定性的最优策略。",
    diagram: "",
    terms: ["policy_gradient", "state_space"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 34,
    q: "What is the state transition matrix in a Markov chain?",
    qChinese: "马尔可夫链中的状态转移矩阵是什么？",
    options: [
      "A) A matrix containing the reward for each state-action pair",
      "B) A matrix of Q-values for all state-action pairs",
      "C) A matrix where entry (i,j) gives the probability of transitioning from state i to state j",
      "D) The Jacobian of the value function"
    ],
    optionsChinese: [
      "A) 包含每个状态-行动对奖励的矩阵",
      "B) 所有状态-行动对的Q值矩阵",
      "C) 条目(i,j)给出从状态i转移到状态j的概率的矩阵",
      "D) 价值函数的雅可比矩阵"
    ],
    answer: 2,
    explanation: "The state transition matrix P has entries P_ij = P(s_{t+1}=j | s_t=i). Each row sums to 1, making it a stochastic matrix. For a Markov chain (MDP without actions), this matrix fully describes the dynamics. Eigenanalysis of this matrix reveals the stationary distribution and mixing time.",
    explanationChinese: "状态转移矩阵P的条目P_ij = P(s_{t+1}=j | s_t=i)。每行之和为1，使其成为随机矩阵。对于马尔可夫链（没有行动的MDP），该矩阵完全描述了动态。该矩阵的特征分析揭示了平稳分布和混合时间。",
    diagram: "",
    terms: ["state_space", "model_based_rl"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 35,
    q: "What is a Markov Reward Process (MRP)?",
    qChinese: "什么是马尔可夫奖励过程（MRP）？",
    options: [
      "A) A reward function that satisfies the Markov property",
      "B) An MDP where rewards are always positive",
      "C) A reinforcement learning algorithm based on Monte Carlo sampling",
      "D) An MDP with a fixed policy, reducing it to a Markov chain with rewards"
    ],
    optionsChinese: [
      "A) 满足马尔可夫性质的奖励函数",
      "B) 奖励总是正的MDP",
      "C) 基于蒙特卡罗采样的强化学习算法",
      "D) 具有固定策略的MDP，将其简化为带有奖励的马尔可夫链"
    ],
    answer: 3,
    explanation: "A Markov Reward Process is an MDP with a fixed policy, eliminating action choices. It is defined by (S, P, R, gamma). The transition probabilities become P^pi(s'|s) = sum_a pi(a|s)P(s'|s,a). MRPs are useful for analyzing a given policy's value function without considering the optimization problem.",
    explanationChinese: "马尔可夫奖励过程是具有固定策略的MDP，消除了行动选择。它由(S, P, R, gamma)定义。转移概率变为P^pi(s'|s) = sum_a pi(a|s)P(s'|s,a)。MRP对于分析给定策略的价值函数而不考虑优化问题很有用。",
    diagram: "",
    terms: ["value_function", "state_space", "discount_factor"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 36,
    q: "What does it mean for an MDP to be 'ergodic'?",
    qChinese: "MDP是'遍历的'是什么意思？",
    options: [
      "A) Every state can be reached from every other state under any policy",
      "B) The MDP has only one optimal policy",
      "C) The MDP has an infinite number of states",
      "D) Every state can be reached from every other state under some policy"
    ],
    optionsChinese: [
      "A) 在任何策略下，每个状态都可以从其他每个状态到达",
      "B) MDP只有一个最优策略",
      "C) MDP具有无限数量的状态",
      "D) 在某个策略下，每个状态都可以从其他每个状态到达"
    ],
    answer: 3,
    explanation: "An MDP is ergodic if every state is reachable from every other state under some policy. This means there are no permanently unreachable regions of the state space. Ergodicity ensures that average-reward formulations are well-defined and that the stationary distribution exists for any policy.",
    explanationChinese: "如果在某个策略下每个状态都可以从其他每个状态到达，则MDP是遍历的。这意味着状态空间中没有永久不可达的区域。遍历性确保平均奖励公式是良定义的，并且对任何策略都存在平稳分布。",
    diagram: "",
    terms: ["state_space", "model_based_rl"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 37,
    q: "What is the optimal policy theorem for MDPs?",
    qChinese: "MDP的最优策略定理是什么？",
    options: [
      "A) There may be no optimal policy for an MDP",
      "B) The optimal policy depends on the initial state",
      "C) The optimal policy must always be stochastic",
      "D) For any finite MDP, there exists at least one deterministic optimal policy"
    ],
    optionsChinese: [
      "A) MDP可能没有最优策略",
      "B) 最优策略取决于初始状态",
      "C) 最优策略必须总是随机的",
      "D) 对于任何有限MDP，至少存在一个确定性最优策略"
    ],
    answer: 3,
    explanation: "For any finite MDP with a discount factor gamma < 1, there exists at least one deterministic stationary policy that is optimal for all states simultaneously. This means we can find a single policy pi* such that V^{pi*}(s) >= V^pi(s) for all states s and all policies pi.",
    explanationChinese: "对于任何折扣因子gamma < 1的有限MDP，至少存在一个确定性平稳策略，对所有状态同时最优。这意味着我们可以找到一个策略pi*使得V^{pi*}(s) >= V^pi(s)对所有状态s和所有策略pi成立。",
    diagram: "",
    terms: ["value_function", "policy_gradient"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 38,
    q: "In an MDP, what is the expected reward model R(s, a)?",
    qChinese: "在MDP中，期望奖励模型R(s, a)是什么？",
    options: [
      "A) The maximum possible reward from state s taking action a",
      "B) The total discounted reward from state s onward",
      "C) The expected immediate reward received after taking action a in state s",
      "D) The probability of receiving a positive reward"
    ],
    optionsChinese: [
      "A) 从状态s采取行动a可能获得的最大奖励",
      "B) 从状态s开始的总折扣奖励",
      "C) 在状态s中采取行动a后获得的期望即时奖励",
      "D) 获得正奖励的概率"
    ],
    answer: 2,
    explanation: "R(s, a) = E[R_{t+1} | S_t = s, A_t = a] is the expected immediate reward received after taking action a in state s, averaged over all possible next states. This is a component of the MDP model and is used in the Bellman equations for computing value functions.",
    explanationChinese: "R(s, a) = E[R_{t+1} | S_t = s, A_t = a]是在状态s中采取行动a后获得的期望即时奖励，对所有可能的下一个状态取平均。这是MDP模型的组成部分，用于计算价值函数的贝尔曼方程。",
    diagram: "",
    terms: ["reward_function", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 39,
    q: "What is the difference between the state space and observation space?",
    qChinese: "状态空间和观测空间有什么区别？",
    options: [
      "A) They are always identical",
      "B) The state space is the true environment state; the observation space is what the agent perceives, which may be partial",
      "C) The observation space is always larger than the state space",
      "D) The state space is continuous while the observation space is discrete"
    ],
    optionsChinese: [
      "A) 它们总是相同的",
      "B) 状态空间是真实的环境状态；观测空间是智能体感知的，可能是部分的",
      "C) 观测空间总是大于状态空间",
      "D) 状态空间是连续的而观测空间是离散的"
    ],
    answer: 1,
    explanation: "In a fully observable MDP, the agent sees the complete state. In a POMDP, the agent receives observations that may be noisy or incomplete projections of the true state. For example, a robot with limited sensors observes only part of its environment, making the observation space different from the full state space.",
    explanationChinese: "在完全可观测MDP中，智能体看到完整状态。在POMDP中，智能体接收的观测可能是真实状态的噪声或不完整投影。例如，传感器有限的机器人只观测到环境的一部分，使观测空间与完整状态空间不同。",
    diagram: "",
    terms: ["state_space", "sensor_fusion"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 40,
    q: "What characterizes a factored MDP?",
    qChinese: "什么特征定义了分解MDP？",
    options: [
      "A) The state is represented as a vector of state variables (factors), exploiting structure to reduce complexity",
      "B) The MDP is divided into independent sub-problems",
      "C) The actions are decomposed into atomic sub-actions",
      "D) The reward function is split into positive and negative components"
    ],
    optionsChinese: [
      "A) 状态被表示为状态变量（因子）的向量，利用结构减少复杂性",
      "B) MDP被分成独立的子问题",
      "C) 行动被分解为原子子行动",
      "D) 奖励函数被分为正分量和负分量"
    ],
    answer: 0,
    explanation: "A factored MDP represents the state as a vector of state variables (factors), enabling compact representation of transition and reward functions using structures like dynamic Bayesian networks. This avoids the exponential blowup of the flat state space, making large problems more tractable.",
    explanationChinese: "分解MDP将状态表示为状态变量（因子）的向量，使用动态贝叶斯网络等结构实现转移和奖励函数的紧凑表示。这避免了平面状态空间的指数爆炸，使大问题更易处理。",
    diagram: "",
    terms: ["state_space", "model_based_rl"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 41,
    q: "In an MDP, what makes a state 'recurrent' under a given policy?",
    qChinese: "在MDP中，什么使一个状态在给定策略下是'常返'的？",
    options: [
      "A) The state has the highest value function",
      "B) The agent is guaranteed to return to the state infinitely often",
      "C) The state is visited at most once per episode",
      "D) The state has zero reward"
    ],
    optionsChinese: [
      "A) 该状态具有最高的价值函数",
      "B) 智能体保证无限次返回该状态",
      "C) 该状态每个回合最多被访问一次",
      "D) 该状态的奖励为零"
    ],
    answer: 1,
    explanation: "A state is recurrent under a policy if, starting from that state, the agent will return to it with probability 1 (and thus infinitely often). Recurrence is important in the theory of average-reward MDPs and for ensuring that value function estimates converge in certain learning algorithms.",
    explanationChinese: "如果从该状态开始，智能体将以概率1返回该状态（因此无限次），则该状态在策略下是常返的。常返性在平均奖励MDP理论和确保某些学习算法中价值函数估计收敛方面很重要。",
    diagram: "",
    terms: ["state_space", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 42,
    q: "What is the role of the initial state distribution in an MDP?",
    qChinese: "MDP中初始状态分布的作用是什么？",
    options: [
      "A) It determines the discount factor",
      "B) It controls the exploration rate",
      "C) It defines the terminal states",
      "D) It specifies the probability distribution over starting states for each episode"
    ],
    optionsChinese: [
      "A) 它决定折扣因子",
      "B) 它控制探索率",
      "C) 它定义终止状态",
      "D) 它指定每个回合起始状态的概率分布"
    ],
    answer: 3,
    explanation: "The initial state distribution d_0(s) specifies the probability that each state is the starting state of an episode. It is part of the MDP specification and affects the expected return of a policy. Some RL objectives weight state values by this distribution to compute the expected performance.",
    explanationChinese: "初始状态分布d_0(s)指定每个状态作为回合起始状态的概率。它是MDP规范的一部分，影响策略的期望回报。一些RL目标通过此分布加权状态价值来计算期望性能。",
    diagram: "",
    terms: ["state_space", "reward_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 43,
    q: "What is a semi-MDP (SMDP)?",
    qChinese: "什么是半马尔可夫决策过程（SMDP）？",
    options: [
      "A) An MDP where only half the states are observable",
      "B) An MDP that uses only half the discount factor",
      "C) An MDP extended with temporally abstract actions that take variable amounts of time",
      "D) An MDP with semi-deterministic transitions"
    ],
    optionsChinese: [
      "A) 只有一半状态可观测的MDP",
      "B) 只使用一半折扣因子的MDP",
      "C) 扩展了需要可变时间量的时间抽象行动的MDP",
      "D) 具有半确定性转移的MDP"
    ],
    answer: 2,
    explanation: "A semi-MDP generalizes the MDP framework by allowing actions (called options or macro-actions) that take variable amounts of time to complete. The time between decision points is itself a random variable. SMDPs are used in hierarchical RL to model temporally extended actions and options.",
    explanationChinese: "半MDP通过允许需要可变时间量完成的行动（称为选项或宏行动）来推广MDP框架。决策点之间的时间本身是一个随机变量。SMDP用于层次RL以建模时间扩展行动和选项。",
    diagram: "",
    terms: ["state_space", "action_space"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 44,
    q: "What is the concept of 'reachability' in an MDP?",
    qChinese: "MDP中'可达性'的概念是什么？",
    options: [
      "A) Whether the optimal policy can be computed in polynomial time",
      "B) Whether a target state can be reached from a given state under some policy",
      "C) Whether the agent can observe all states",
      "D) Whether the reward function is bounded"
    ],
    optionsChinese: [
      "A) 最优策略是否可以在多项式时间内计算",
      "B) 在某个策略下，目标状态是否可以从给定状态到达",
      "C) 智能体是否可以观测所有状态",
      "D) 奖励函数是否有界"
    ],
    answer: 1,
    explanation: "Reachability in an MDP refers to whether there exists a policy that can move the agent from one state to another with positive probability. Understanding reachability is crucial for determining if certain goals are achievable and for safe RL where certain states must be avoided.",
    explanationChinese: "MDP中的可达性指是否存在一个策略可以以正概率将智能体从一个状态移动到另一个状态。理解可达性对于确定某些目标是否可实现以及必须避免某些状态的安全RL至关重要。",
    diagram: "",
    terms: ["state_space", "model_based_rl"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 45,
    q: "What is a stochastic policy in the context of MDPs?",
    qChinese: "在MDP的上下文中，什么是随机策略？",
    options: [
      "A) A policy that randomly initializes its parameters",
      "B) A policy that changes its action selection rule over time",
      "C) A policy that only works with stochastic environments",
      "D) A policy that maps each state to a probability distribution over actions"
    ],
    optionsChinese: [
      "A) 随机初始化参数的策略",
      "B) 随时间改变行动选择规则的策略",
      "C) 只适用于随机环境的策略",
      "D) 将每个状态映射到行动上概率分布的策略"
    ],
    answer: 3,
    explanation: "A stochastic policy pi(a|s) assigns a probability to each action a in each state s. Unlike a deterministic policy that outputs a single action, a stochastic policy allows the agent to randomize its behavior. This is useful for exploration, partial observability, and certain game-theoretic settings.",
    explanationChinese: "随机策略pi(a|s)为每个状态s中的每个行动a分配一个概率。与输出单一行动的确定性策略不同，随机策略允许智能体随机化其行为。这对于探索、部分可观测性和某些博弈论设置很有用。",
    diagram: "",
    terms: ["policy_gradient", "exploration_exploitation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 46,
    q: "What is the occupancy measure of a policy in an MDP?",
    qChinese: "MDP中策略的占用度量是什么？",
    options: [
      "A) The discounted frequency of visiting each state-action pair under the policy",
      "B) The probability that the agent occupies a specific memory location",
      "C) The number of parameters in the policy network",
      "D) The maximum number of states visited in one episode"
    ],
    optionsChinese: [
      "A) 在策略下访问每个状态-行动对的折扣频率",
      "B) 智能体占用特定内存位置的概率",
      "C) 策略网络中的参数数量",
      "D) 一个回合中访问的最大状态数"
    ],
    answer: 0,
    explanation: "The occupancy measure d^pi(s,a) represents the discounted frequency of visiting state-action pair (s,a) under policy pi. It is given by d^pi(s,a) = sum_t gamma^t P(S_t=s, A_t=a | pi). There is a one-to-one correspondence between policies and valid occupancy measures, which is fundamental in linear programming approaches to MDPs.",
    explanationChinese: "占用度量d^pi(s,a)表示在策略pi下访问状态-行动对(s,a)的折扣频率。它由d^pi(s,a) = sum_t gamma^t P(S_t=s, A_t=a | pi)给出。策略和有效占用度量之间存在一一对应关系，这在MDP的线性规划方法中是基础的。",
    diagram: "",
    terms: ["state_space", "action_space", "discount_factor"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 47,
    q: "What is the purpose of the discount factor in the MDP formulation?",
    qChinese: "MDP公式中折扣因子的目的是什么？",
    options: [
      "A) To ensure mathematical convergence of the infinite sum of rewards and express time preference",
      "B) To increase the learning rate over time",
      "C) To normalize the transition probabilities",
      "D) To reduce the action space size"
    ],
    optionsChinese: [
      "A) 确保奖励无限和的数学收敛性并表达时间偏好",
      "B) 随时间增加学习率",
      "C) 归一化转移概率",
      "D) 减少行动空间大小"
    ],
    answer: 0,
    explanation: "The discount factor gamma in [0,1) serves two purposes: it ensures the infinite sum of rewards converges to a finite value (mathematical convenience), and it models the preference for sooner versus later rewards (economic motivation). With gamma=0 the agent is myopic; with gamma close to 1 it is far-sighted.",
    explanationChinese: "折扣因子gamma在[0,1)区间内有两个目的：确保奖励的无限和收敛到有限值（数学便利性），以及建模对较早奖励相对于较晚奖励的偏好（经济动机）。gamma=0时智能体是目光短浅的；gamma接近1时是目光长远的。",
    diagram: "",
    terms: ["discount_factor", "reward_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 48,
    q: "How does an MDP differ from a Markov chain?",
    qChinese: "MDP与马尔可夫链有何不同？",
    options: [
      "A) An MDP includes actions and rewards; a Markov chain has only states and transitions",
      "B) A Markov chain has rewards but no actions; an MDP has both",
      "C) A Markov chain can model continuous states; an MDP cannot",
      "D) There is no difference; they are the same model"
    ],
    optionsChinese: [
      "A) MDP包括行动和奖励；马尔可夫链只有状态和转移",
      "B) 马尔可夫链有奖励但没有行动；MDP两者都有",
      "C) 马尔可夫链可以建模连续状态；MDP不能",
      "D) 没有区别；它们是相同的模型"
    ],
    answer: 0,
    explanation: "A Markov chain is a stochastic process with states and transition probabilities but no actions or rewards. An MDP extends the Markov chain by adding actions (agent choices) and a reward function. When an MDP's policy is fixed, it reduces to a Markov Reward Process, and without rewards, to a Markov chain.",
    explanationChinese: "马尔可夫链是具有状态和转移概率但没有行动或奖励的随机过程。MDP通过添加行动（智能体选择）和奖励函数扩展了马尔可夫链。当MDP的策略固定时，它简化为马尔可夫奖励过程；没有奖励时，简化为马尔可夫链。",
    diagram: "",
    terms: ["state_space", "action_space", "reward_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 49,
    q: "What is the average reward formulation for continuing MDPs?",
    qChinese: "持续MDP的平均奖励公式是什么？",
    options: [
      "A) Maximizing the long-run average reward per time step",
      "B) Maximizing the discounted sum of rewards",
      "C) Minimizing the total number of steps to reach a goal",
      "D) Maximizing the reward at the terminal state"
    ],
    optionsChinese: [
      "A) 最大化每时间步的长期平均奖励",
      "B) 最大化奖励的折扣总和",
      "C) 最小化到达目标的总步数",
      "D) 最大化终止状态的奖励"
    ],
    answer: 0,
    explanation: "The average reward formulation maximizes rho(pi) = lim_{T->inf} (1/T) sum_{t=1}^{T} E[R_t | pi]. This is an alternative to the discounted formulation that avoids choosing a discount factor. It is natural for continuing tasks where the agent operates indefinitely, such as server resource management.",
    explanationChinese: "平均奖励公式最大化rho(pi) = lim_{T->inf} (1/T) sum_{t=1}^{T} E[R_t | pi]。这是折扣公式的替代方案，避免了选择折扣因子。对于智能体无限期运行的持续任务（如服务器资源管理）是自然的。",
    diagram: "",
    terms: ["reward_function", "discount_factor"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 50,
    q: "What is a 'communicating' MDP?",
    qChinese: "什么是'连通'MDP？",
    options: [
      "A) An MDP where agents can send messages to each other",
      "B) An MDP with a shared reward function among agents",
      "C) An MDP where every state is reachable from every other state under some policy",
      "D) An MDP that communicates its transition model to the agent"
    ],
    optionsChinese: [
      "A) 智能体可以互相发送消息的MDP",
      "B) 智能体之间共享奖励函数的MDP",
      "C) 在某个策略下每个状态都可以从其他每个状态到达的MDP",
      "D) 将其转移模型传达给智能体的MDP"
    ],
    answer: 2,
    explanation: "A communicating MDP is one where for every pair of states (s, s'), there exists a policy that can reach s' from s with positive probability. This structural property ensures that the average reward is the same for all initial states under the optimal policy, simplifying the analysis of average-reward criteria.",
    explanationChinese: "连通MDP是对于每对状态(s, s')，都存在一个策略可以以正概率从s到达s'的MDP。这一结构性质确保在最优策略下所有初始状态的平均奖励相同，简化了平均奖励准则的分析。",
    diagram: "",
    terms: ["state_space", "model_based_rl"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 51,
    q: "What is the state-value function V^pi(s)?",
    qChinese: "什么是状态价值函数V^pi(s)？",
    options: [
      "A) The immediate reward received in state s",
      "B) The expected cumulative discounted reward starting from state s and following policy pi",
      "C) The probability of being in state s",
      "D) The number of times state s has been visited"
    ],
    optionsChinese: [
      "A) 在状态s中收到的即时奖励",
      "B) 从状态s开始并遵循策略pi的预期累积折扣奖励",
      "C) 处于状态s的概率",
      "D) 状态s被访问的次数"
    ],
    answer: 1,
    explanation: "The state-value function V^pi(s) = E_pi[G_t | S_t = s] is the expected return when starting in state s and following policy pi thereafter. It measures how good it is to be in a given state under a particular policy. The optimal value function V*(s) = max_pi V^pi(s).",
    explanationChinese: "状态价值函数V^pi(s) = E_pi[G_t | S_t = s]是从状态s开始并此后遵循策略pi时的期望回报。它衡量在特定策略下处于给定状态的好坏。最优价值函数V*(s) = max_pi V^pi(s)。",
    diagram: "",
    terms: ["value_function", "discount_factor"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 52,
    q: "What is the action-value function Q^pi(s, a)?",
    qChinese: "什么是行动价值函数Q^pi(s, a)？",
    options: [
      "A) The probability of taking action a in state s",
      "B) The expected cumulative discounted reward starting from state s, taking action a, then following policy pi",
      "C) The reward for taking action a in state s",
      "D) The number of times action a was taken in state s"
    ],
    optionsChinese: [
      "A) 在状态s中采取行动a的概率",
      "B) 从状态s开始，采取行动a，然后遵循策略pi的预期累积折扣奖励",
      "C) 在状态s中采取行动a的奖励",
      "D) 在状态s中采取行动a的次数"
    ],
    answer: 1,
    explanation: "The action-value function Q^pi(s, a) = E_pi[G_t | S_t = s, A_t = a] is the expected return when starting in state s, taking action a, and following policy pi thereafter. Q-values are central to many RL algorithms including Q-learning, as they directly indicate which action to take in each state.",
    explanationChinese: "行动价值函数Q^pi(s, a) = E_pi[G_t | S_t = s, A_t = a]是从状态s开始，采取行动a，然后遵循策略pi时的期望回报。Q值在许多RL算法（包括Q-learning）中是核心，因为它们直接指示在每个状态中采取哪个行动。",
    diagram: "",
    terms: ["value_function", "q_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 53,
    q: "What is the Bellman expectation equation for V^pi(s)?",
    qChinese: "V^pi(s)的贝尔曼期望方程是什么？",
    options: [
      "A) V^pi(s) = max_a Q^pi(s, a)",
      "B) V^pi(s) = sum_a Q^pi(s, a)",
      "C) V^pi(s) = R(s) + gamma * V^pi(s+1)",
      "D) V^pi(s) = sum_a pi(a|s) [R(s,a) + gamma * sum_{s'} P(s'|s,a) V^pi(s')]"
    ],
    optionsChinese: [
      "A) V^pi(s) = max_a Q^pi(s, a)",
      "B) V^pi(s) = sum_a Q^pi(s, a)",
      "C) V^pi(s) = R(s) + gamma * V^pi(s+1)",
      "D) V^pi(s) = sum_a pi(a|s) [R(s,a) + gamma * sum_{s'} P(s'|s,a) V^pi(s')]"
    ],
    answer: 3,
    explanation: "The Bellman expectation equation decomposes the value function into the immediate reward plus the discounted value of the next state, both weighted by the policy and transition probabilities. This recursive relationship is fundamental to all DP and RL methods and forms the basis for iterative solution techniques.",
    explanationChinese: "贝尔曼期望方程将价值函数分解为即时奖励加上下一个状态的折扣价值，两者都由策略和转移概率加权。这个递归关系是所有动态规划和RL方法的基础，构成了迭代求解技术的基础。",
    diagram: "",
    terms: ["value_function", "discount_factor"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 54,
    q: "What is the Bellman optimality equation for V*(s)?",
    qChinese: "V*(s)的贝尔曼最优方程是什么？",
    options: [
      "A) V*(s) = sum_a pi(a|s) Q*(s, a)",
      "B) V*(s) = E[R_t + gamma * V*(S_{t+1})]",
      "C) V*(s) = min_a [R(s,a) + gamma * V*(s')]",
      "D) V*(s) = max_a [R(s,a) + gamma * sum_{s'} P(s'|s,a) V*(s')]"
    ],
    optionsChinese: [
      "A) V*(s) = sum_a pi(a|s) Q*(s, a)",
      "B) V*(s) = E[R_t + gamma * V*(S_{t+1})]",
      "C) V*(s) = min_a [R(s,a) + gamma * V*(s')]",
      "D) V*(s) = max_a [R(s,a) + gamma * sum_{s'} P(s'|s,a) V*(s')]"
    ],
    answer: 3,
    explanation: "The Bellman optimality equation replaces the policy-weighted sum with a max over actions. V*(s) = max_a [R(s,a) + gamma * sum_{s'} P(s'|s,a) V*(s')]. Solving this yields the optimal value function, from which the optimal policy can be derived by choosing the maximizing action in each state.",
    explanationChinese: "贝尔曼最优方程用对行动的最大值替代了策略加权和。V*(s) = max_a [R(s,a) + gamma * sum_{s'} P(s'|s,a) V*(s')]。求解此方程得到最优价值函数，从中可以通过在每个状态选择最大化行动来推导最优策略。",
    diagram: "",
    terms: ["value_function", "discount_factor"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 55,
    q: "What is the relationship between V^pi(s) and Q^pi(s, a)?",
    qChinese: "V^pi(s)和Q^pi(s, a)之间的关系是什么？",
    options: [
      "A) V^pi(s) = sum_a pi(a|s) * Q^pi(s, a)",
      "B) V^pi(s) = max_a Q^pi(s, a)",
      "C) V^pi(s) = Q^pi(s, a) for all a",
      "D) V^pi(s) = Q^pi(s, a) - R(s, a)"
    ],
    optionsChinese: [
      "A) V^pi(s) = sum_a pi(a|s) * Q^pi(s, a)",
      "B) V^pi(s) = max_a Q^pi(s, a)",
      "C) V^pi(s) = Q^pi(s, a)对所有a成立",
      "D) V^pi(s) = Q^pi(s, a) - R(s, a)"
    ],
    answer: 0,
    explanation: "The state-value function is the expected Q-value under the policy: V^pi(s) = sum_a pi(a|s) * Q^pi(s, a). For a deterministic policy that selects action a* in state s, V^pi(s) = Q^pi(s, a*). For the optimal policy, V*(s) = max_a Q*(s, a).",
    explanationChinese: "状态价值函数是策略下Q值的期望：V^pi(s) = sum_a pi(a|s) * Q^pi(s, a)。对于在状态s中选择行动a*的确定性策略，V^pi(s) = Q^pi(s, a*)。对于最优策略，V*(s) = max_a Q*(s, a)。",
    diagram: "",
    terms: ["value_function", "q_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 56,
    q: "What is the advantage function A^pi(s, a)?",
    qChinese: "什么是优势函数A^pi(s, a)？",
    options: [
      "A) A^pi(s, a) = V^pi(s) + Q^pi(s, a)",
      "B) A^pi(s, a) = Q^pi(s, a) - V^pi(s)",
      "C) A^pi(s, a) = R(s, a) - V^pi(s)",
      "D) A^pi(s, a) = max_a Q^pi(s, a)"
    ],
    optionsChinese: [
      "A) A^pi(s, a) = V^pi(s) + Q^pi(s, a)",
      "B) A^pi(s, a) = Q^pi(s, a) - V^pi(s)",
      "C) A^pi(s, a) = R(s, a) - V^pi(s)",
      "D) A^pi(s, a) = max_a Q^pi(s, a)"
    ],
    answer: 1,
    explanation: "The advantage function A^pi(s,a) = Q^pi(s,a) - V^pi(s) measures how much better action a is compared to the average action under policy pi in state s. It has zero mean under the policy: sum_a pi(a|s)A(s,a) = 0. It is widely used in actor-critic and policy gradient methods to reduce variance.",
    explanationChinese: "优势函数A^pi(s,a) = Q^pi(s,a) - V^pi(s)衡量行动a比策略pi在状态s下的平均行动好多少。它在策略下均值为零：sum_a pi(a|s)A(s,a) = 0。它广泛用于演员-评论家和策略梯度方法以减少方差。",
    diagram: "",
    terms: ["value_function", "actor_critic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 57,
    q: "Why is the Bellman equation called a 'fixed-point' equation?",
    qChinese: "为什么贝尔曼方程被称为'不动点'方程？",
    options: [
      "A) Because the true value function is the unique fixed point of the Bellman operator",
      "B) Because the value function is fixed and never changes",
      "C) Because it can only be solved at a fixed point in time",
      "D) Because the policy remains fixed during evaluation"
    ],
    optionsChinese: [
      "A) 因为真正的价值函数是贝尔曼算子的唯一不动点",
      "B) 因为价值函数是固定的，永远不变",
      "C) 因为它只能在固定的时间点求解",
      "D) 因为策略在评估期间保持固定"
    ],
    answer: 0,
    explanation: "The Bellman operator T is a contraction mapping when gamma < 1, meaning applying T repeatedly to any initial value function converges to the unique fixed point V^pi (or V* for the optimality operator). Formally, if T[V] = V, then V is the true value function. This guarantees convergence of value iteration.",
    explanationChinese: "当gamma < 1时，贝尔曼算子T是压缩映射，意味着对任何初始价值函数反复应用T会收敛到唯一不动点V^pi（或最优算子的V*）。形式上，如果T[V] = V，则V是真正的价值函数。这保证了价值迭代的收敛性。",
    diagram: "",
    terms: ["value_function", "discount_factor"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 58,
    q: "What is the Bellman expectation equation for Q^pi(s, a)?",
    qChinese: "Q^pi(s, a)的贝尔曼期望方程是什么？",
    options: [
      "A) Q^pi(s,a) = R(s,a) + gamma * sum_{s'} P(s'|s,a) * sum_{a'} pi(a'|s') * Q^pi(s',a')",
      "B) Q^pi(s,a) = R(s,a) + gamma * max_{a'} Q^pi(s',a')",
      "C) Q^pi(s,a) = sum_a pi(a|s) * V^pi(s)",
      "D) Q^pi(s,a) = R(s,a) + V^pi(s)"
    ],
    optionsChinese: [
      "A) Q^pi(s,a) = R(s,a) + gamma * sum_{s'} P(s'|s,a) * sum_{a'} pi(a'|s') * Q^pi(s',a')",
      "B) Q^pi(s,a) = R(s,a) + gamma * max_{a'} Q^pi(s',a')",
      "C) Q^pi(s,a) = sum_a pi(a|s) * V^pi(s)",
      "D) Q^pi(s,a) = R(s,a) + V^pi(s)"
    ],
    answer: 0,
    explanation: "The Bellman expectation equation for Q^pi decomposes the action-value into the immediate reward plus the discounted expected Q-value of the next state-action pair under policy pi. The next action a' is sampled according to pi(a'|s'), and the next state s' follows P(s'|s,a).",
    explanationChinese: "Q^pi的贝尔曼期望方程将行动价值分解为即时奖励加上策略pi下下一个状态-行动对的折扣期望Q值。下一个行动a'根据pi(a'|s')采样，下一个状态s'遵循P(s'|s,a)。",
    diagram: "",
    terms: ["value_function", "q_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 59,
    q: "What is the Bellman optimality equation for Q*(s, a)?",
    qChinese: "Q*(s, a)的贝尔曼最优方程是什么？",
    options: [
      "A) Q*(s,a) = R(s,a) + gamma * sum_{a'} Q*(s',a')",
      "B) Q*(s,a) = R(s,a) + gamma * sum_{s'} P(s'|s,a) * max_{a'} Q*(s',a')",
      "C) Q*(s,a) = max_a R(s,a)",
      "D) Q*(s,a) = R(s,a) + gamma * Q*(s,a)"
    ],
    optionsChinese: [
      "A) Q*(s,a) = R(s,a) + gamma * sum_{a'} Q*(s',a')",
      "B) Q*(s,a) = R(s,a) + gamma * sum_{s'} P(s'|s,a) * max_{a'} Q*(s',a')",
      "C) Q*(s,a) = max_a R(s,a)",
      "D) Q*(s,a) = R(s,a) + gamma * Q*(s,a)"
    ],
    answer: 1,
    explanation: "The Bellman optimality equation for Q* uses the max over next actions instead of the policy-weighted sum: Q*(s,a) = R(s,a) + gamma * sum_{s'} P(s'|s,a) * max_{a'} Q*(s',a'). This is the foundation of Q-learning, which approximates this equation through sampled transitions.",
    explanationChinese: "Q*的贝尔曼最优方程使用下一个行动的最大值而非策略加权和：Q*(s,a) = R(s,a) + gamma * sum_{s'} P(s'|s,a) * max_{a'} Q*(s',a')。这是Q-learning的基础，通过采样转移来近似此方程。",
    diagram: "",
    terms: ["value_function", "q_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 60,
    q: "What does the contraction property of the Bellman operator guarantee?",
    qChinese: "贝尔曼算子的压缩性质保证了什么？",
    options: [
      "A) The policy will always improve",
      "B) Iterative application of the operator converges to the unique fixed point",
      "C) The value function will always be non-negative",
      "D) The state space will shrink over iterations"
    ],
    optionsChinese: [
      "A) 策略总是会改进",
      "B) 算子的迭代应用收敛到唯一的不动点",
      "C) 价值函数总是非负的",
      "D) 状态空间将在迭代中缩小"
    ],
    answer: 1,
    explanation: "The Bellman operator T is a gamma-contraction in the max-norm: ||TV_1 - TV_2||_inf <= gamma * ||V_1 - V_2||_inf. By the Banach fixed-point theorem, this guarantees that repeated application of T converges to a unique fixed point V* at a geometric rate. This is the theoretical foundation of value iteration.",
    explanationChinese: "贝尔曼算子T在最大范数下是gamma-压缩：||TV_1 - TV_2||_inf <= gamma * ||V_1 - V_2||_inf。根据巴拿赫不动点定理，这保证了T的重复应用以几何速率收敛到唯一不动点V*。这是价值迭代的理论基础。",
    diagram: "",
    terms: ["value_function", "discount_factor"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 61,
    q: "How is the optimal policy derived from the optimal Q-function?",
    qChinese: "如何从最优Q函数推导最优策略？",
    options: [
      "A) pi*(s) = argmax_a Q*(s, a)",
      "B) pi*(s) = min_a Q*(s, a)",
      "C) pi*(s) = softmax over Q*(s, a)",
      "D) pi*(s) = random selection weighted by Q*(s, a)"
    ],
    optionsChinese: [
      "A) pi*(s) = argmax_a Q*(s, a)",
      "B) pi*(s) = min_a Q*(s, a)",
      "C) pi*(s) = Q*(s, a)上的softmax",
      "D) pi*(s) = 由Q*(s, a)加权的随机选择"
    ],
    answer: 0,
    explanation: "Given the optimal Q-function Q*, the optimal policy simply selects the action with the highest Q-value in each state: pi*(s) = argmax_a Q*(s, a). This is why Q-functions are particularly useful—knowing Q* immediately gives the optimal policy without needing the transition model.",
    explanationChinese: "给定最优Q函数Q*，最优策略简单地在每个状态中选择Q值最高的行动：pi*(s) = argmax_a Q*(s, a)。这就是Q函数特别有用的原因——知道Q*立即给出最优策略，无需转移模型。",
    diagram: "",
    terms: ["q_learning", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 62,
    q: "What is the Bellman backup (or update) operation?",
    qChinese: "什么是贝尔曼备份（或更新）操作？",
    options: [
      "A) Saving the current value function to a backup file",
      "B) Storing the best action for each state in a table",
      "C) Rolling back to a previous version of the policy",
      "D) Using the Bellman equation to update a value estimate for a state based on successor state values"
    ],
    optionsChinese: [
      "A) 将当前价值函数保存到备份文件",
      "B) 将每个状态的最佳行动存储在表中",
      "C) 回滚到策略的先前版本",
      "D) 使用贝尔曼方程根据后继状态值更新状态的价值估计"
    ],
    answer: 3,
    explanation: "A Bellman backup computes a new value for a state by applying the Bellman equation: looking at the immediate reward and the discounted values of all possible next states. This one-step lookahead update propagates value information backward through the state space. Full backups consider all transitions; sample backups use one sample.",
    explanationChinese: "贝尔曼备份通过应用贝尔曼方程计算状态的新值：查看即时奖励和所有可能下一个状态的折扣值。这种单步前瞻更新将价值信息通过状态空间向后传播。完整备份考虑所有转移；采样备份使用一个样本。",
    diagram: "",
    terms: ["value_function", "temporal_difference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 63,
    q: "What is the value function under the random policy?",
    qChinese: "随机策略下的价值函数是什么？",
    options: [
      "A) It is always zero for all states",
      "B) It equals the expected return when choosing actions uniformly at random",
      "C) It equals the optimal value function",
      "D) It is undefined for random policies"
    ],
    optionsChinese: [
      "A) 对所有状态总是零",
      "B) 它等于均匀随机选择行动时的期望回报",
      "C) 它等于最优价值函数",
      "D) 对随机策略是未定义的"
    ],
    answer: 1,
    explanation: "Under a random (uniform) policy, pi(a|s) = 1/|A| for all actions. The value function V^pi_random(s) gives the expected return when always choosing actions uniformly at random. It provides a baseline to compare against improved policies and is used in policy evaluation of the initial random policy.",
    explanationChinese: "在随机（均匀）策略下，pi(a|s) = 1/|A|对所有行动成立。价值函数V^pi_random(s)给出总是均匀随机选择行动时的期望回报。它提供了与改进策略比较的基线，用于初始随机策略的策略评估。",
    diagram: "",
    terms: ["value_function", "exploration_exploitation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 64,
    q: "What is the 'backup diagram' for V^pi?",
    qChinese: "V^pi的'备份图'是什么？",
    options: [
      "A) A diagram showing the neural network architecture",
      "B) A plot of the value function over training time",
      "C) A tree diagram showing how value is propagated from successor states through the Bellman equation",
      "D) A flowchart of the RL algorithm"
    ],
    optionsChinese: [
      "A) 显示神经网络架构的图表",
      "B) 训练时间上的价值函数图",
      "C) 显示价值如何通过贝尔曼方程从后继状态传播的树形图",
      "D) RL算法的流程图"
    ],
    answer: 2,
    explanation: "A backup diagram is a graphical representation showing how the value of a state is computed from its successors using the Bellman equation. For V^pi, the root state branches into actions (weighted by pi), each leading to next states (weighted by P), forming a one-step lookahead tree used in dynamic programming.",
    explanationChinese: "备份图是一个图形表示，显示状态的价值如何使用贝尔曼方程从其后继状态计算。对于V^pi，根状态分支为行动（由pi加权），每个行动导致下一个状态（由P加权），形成动态规划中使用的单步前瞻树。",
    diagram: "",
    terms: ["value_function", "state_space"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 65,
    q: "Why are value functions useful for policy comparison?",
    qChinese: "为什么价值函数对策略比较有用？",
    options: [
      "A) They directly output the optimal action",
      "B) Policy pi1 is better than pi2 if V^{pi1}(s) >= V^{pi2}(s) for all states s",
      "C) They minimize the computational cost of the algorithm",
      "D) They eliminate the need for exploration"
    ],
    optionsChinese: [
      "A) 它们直接输出最优行动",
      "B) 如果V^{pi1}(s) >= V^{pi2}(s)对所有状态s成立，则策略pi1优于pi2",
      "C) 它们最小化算法的计算成本",
      "D) 它们消除了探索的需要"
    ],
    answer: 1,
    explanation: "Value functions induce a partial ordering over policies. Policy pi1 is defined to be at least as good as pi2 if V^{pi1}(s) >= V^{pi2}(s) for all states s. The optimal policy achieves the maximum value for every state. This ordering is the basis for policy improvement in policy iteration algorithms.",
    explanationChinese: "价值函数在策略上引入偏序。如果V^{pi1}(s) >= V^{pi2}(s)对所有状态s成立，则策略pi1被定义为至少与pi2一样好。最优策略对每个状态达到最大值。这种排序是策略迭代算法中策略改进的基础。",
    diagram: "",
    terms: ["value_function", "policy_gradient"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 66,
    q: "What is the matrix form of the Bellman equation for a policy?",
    qChinese: "策略的贝尔曼方程的矩阵形式是什么？",
    options: [
      "A) V = R + gamma * P * Q",
      "B) V^pi = (I - gamma * P^pi)^{-1} * Q^pi",
      "C) V^pi = R^pi + gamma * P^pi * V^pi",
      "D) V = max(R, gamma * P * V)"
    ],
    optionsChinese: [
      "A) V = R + gamma * P * Q",
      "B) V^pi = (I - gamma * P^pi)^{-1} * Q^pi",
      "C) V^pi = R^pi + gamma * P^pi * V^pi",
      "D) V = max(R, gamma * P * V)"
    ],
    answer: 2,
    explanation: "In matrix form, V^pi = R^pi + gamma * P^pi * V^pi, where V^pi is the value vector, R^pi is the expected reward vector, and P^pi is the transition matrix under policy pi. This can be solved directly: V^pi = (I - gamma * P^pi)^{-1} * R^pi, though this O(|S|^3) computation is only practical for small state spaces.",
    explanationChinese: "在矩阵形式中，V^pi = R^pi + gamma * P^pi * V^pi，其中V^pi是价值向量，R^pi是期望奖励向量，P^pi是策略pi下的转移矩阵。这可以直接求解：V^pi = (I - gamma * P^pi)^{-1} * R^pi，虽然这个O(|S|^3)计算仅对小状态空间可行。",
    diagram: "",
    terms: ["value_function", "discount_factor"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 67,
    q: "What is the 'policy improvement theorem'?",
    qChinese: "什么是'策略改进定理'？",
    options: [
      "A) Any policy can be improved by random perturbation",
      "B) The optimal policy is always the final policy of any algorithm",
      "C) If Q^pi(s, pi'(s)) >= V^pi(s) for all s, then V^{pi'}(s) >= V^pi(s) for all s",
      "D) Policy improvement always requires a neural network"
    ],
    optionsChinese: [
      "A) 任何策略都可以通过随机扰动改进",
      "B) 最优策略总是任何算法的最终策略",
      "C) 如果Q^pi(s, pi'(s)) >= V^pi(s)对所有s成立，则V^{pi'}(s) >= V^pi(s)对所有s成立",
      "D) 策略改进总是需要神经网络"
    ],
    answer: 2,
    explanation: "The policy improvement theorem states that if a new policy pi' is greedy with respect to V^pi (selecting argmax_a Q^pi(s,a) in every state), then pi' is at least as good as pi. If strict improvement occurs for any state, the overall policy is strictly better. This forms the theoretical backbone of policy iteration.",
    explanationChinese: "策略改进定理指出，如果新策略pi'相对于V^pi是贪心的（在每个状态选择argmax_a Q^pi(s,a)），则pi'至少与pi一样好。如果任何状态有严格改进，则整体策略严格更好。这构成了策略迭代的理论骨架。",
    diagram: "",
    terms: ["value_function", "policy_gradient"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 68,
    q: "What happens to V^pi(s) as gamma approaches 0?",
    qChinese: "当gamma趋近于0时，V^pi(s)会怎样？",
    options: [
      "A) V^pi(s) approaches the total undiscounted return",
      "B) V^pi(s) approaches infinity",
      "C) V^pi(s) approaches the expected immediate reward E[R_{t+1}|S_t=s]",
      "D) V^pi(s) becomes independent of the policy"
    ],
    optionsChinese: [
      "A) V^pi(s)趋近于总未折扣回报",
      "B) V^pi(s)趋近于无穷大",
      "C) V^pi(s)趋近于期望即时奖励E[R_{t+1}|S_t=s]",
      "D) V^pi(s)变得与策略无关"
    ],
    answer: 2,
    explanation: "When gamma = 0, the return G_t = R_{t+1} since all future rewards are discounted to zero. Thus V^pi(s) = E[R_{t+1}|S_t=s], considering only the immediate reward. The agent becomes completely myopic, ignoring all long-term consequences of its actions.",
    explanationChinese: "当gamma = 0时，回报G_t = R_{t+1}，因为所有未来奖励被折扣为零。因此V^pi(s) = E[R_{t+1}|S_t=s]，只考虑即时奖励。智能体变得完全目光短浅，忽略其行动的所有长期后果。",
    diagram: "",
    terms: ["discount_factor", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 69,
    q: "What is the 'Bellman residual'?",
    qChinese: "什么是'贝尔曼残差'？",
    options: [
      "A) The difference between the initial and final value function",
      "B) The error in the transition model",
      "C) The sum of all rewards in an episode",
      "D) The difference between the current value estimate and the Bellman backup target"
    ],
    optionsChinese: [
      "A) 初始价值函数和最终价值函数之间的差异",
      "B) 转移模型中的误差",
      "C) 一个回合中所有奖励的总和",
      "D) 当前价值估计与贝尔曼备份目标之间的差异"
    ],
    answer: 3,
    explanation: "The Bellman residual for state s is delta(s) = [R(s,a) + gamma * sum_{s'} P(s'|s,a)V(s')] - V(s). It measures how far the current value estimate is from satisfying the Bellman equation. At the true value function, the Bellman residual is zero for all states. Minimizing the mean squared Bellman residual is one approach to learning.",
    explanationChinese: "状态s的贝尔曼残差是delta(s) = [R(s,a) + gamma * sum_{s'} P(s'|s,a)V(s')] - V(s)。它衡量当前价值估计距满足贝尔曼方程有多远。在真正的价值函数处，所有状态的贝尔曼残差为零。最小化均方贝尔曼残差是学习的一种方法。",
    diagram: "",
    terms: ["value_function", "temporal_difference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 70,
    q: "What is 'bootstrapping' in the context of value function estimation?",
    qChinese: "在价值函数估计中，'自举'是什么？",
    options: [
      "A) Using random initial values for the value function",
      "B) Training on bootstrap samples of the data",
      "C) Updating value estimates based in part on other estimated values rather than waiting for actual returns",
      "D) Starting the algorithm from a pre-trained model"
    ],
    optionsChinese: [
      "A) 使用随机初始值作为价值函数",
      "B) 在数据的自助采样上训练",
      "C) 部分基于其他估计值而非等待实际回报来更新价值估计",
      "D) 从预训练模型开始算法"
    ],
    answer: 2,
    explanation: "Bootstrapping means updating a value estimate using another value estimate. For example, TD learning updates V(s) toward R + gamma*V(s'), where V(s') is itself an estimate. Dynamic programming also bootstraps. Monte Carlo methods do not bootstrap since they use actual complete returns.",
    explanationChinese: "自举意味着使用另一个价值估计来更新价值估计。例如，TD学习将V(s)更新为R + gamma*V(s')，其中V(s')本身是估计值。动态规划也使用自举。蒙特卡罗方法不使用自举，因为它们使用实际完整回报。",
    diagram: "",
    terms: ["temporal_difference", "value_function", "monte_carlo_method"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 71,
    q: "How does the value function relate to the policy in a greedy approach?",
    qChinese: "在贪心方法中，价值函数与策略如何关联？",
    options: [
      "A) The policy ignores the value function",
      "B) The greedy policy selects the action that maximizes the expected one-step return using V or Q",
      "C) The value function is derived from the policy's parameters",
      "D) The greedy approach always selects random actions"
    ],
    optionsChinese: [
      "A) 策略忽略价值函数",
      "B) 贪心策略选择使用V或Q最大化期望单步回报的行动",
      "C) 价值函数从策略的参数推导",
      "D) 贪心方法总是选择随机行动"
    ],
    answer: 1,
    explanation: "A greedy policy with respect to value function V selects pi(s) = argmax_a [R(s,a) + gamma * sum_{s'} P(s'|s,a)V(s')]. With Q-values, it is simply pi(s) = argmax_a Q(s,a). This greedy improvement is guaranteed not to worsen the policy by the policy improvement theorem.",
    explanationChinese: "关于价值函数V的贪心策略选择pi(s) = argmax_a [R(s,a) + gamma * sum_{s'} P(s'|s,a)V(s')]。使用Q值时，简化为pi(s) = argmax_a Q(s,a)。根据策略改进定理，这种贪心改进保证不会恶化策略。",
    diagram: "",
    terms: ["value_function", "q_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 72,
    q: "What is the max-norm (infinity norm) used for measuring value function convergence?",
    qChinese: "用于衡量价值函数收敛的最大范数（无穷范数）是什么？",
    options: [
      "A) ||V||_inf = max_s |V(s)|",
      "B) ||V||_inf = sum_s |V(s)|",
      "C) ||V||_inf = sqrt(sum_s V(s)^2)",
      "D) ||V||_inf = E[|V(s)|]"
    ],
    optionsChinese: [
      "A) ||V||_inf = max_s |V(s)|",
      "B) ||V||_inf = sum_s |V(s)|",
      "C) ||V||_inf = sqrt(sum_s V(s)^2)",
      "D) ||V||_inf = E[|V(s)|]"
    ],
    answer: 0,
    explanation: "The max-norm ||V||_inf = max_s |V(s)| takes the maximum absolute value over all states. Value iteration convergence is typically measured using ||V_{k+1} - V_k||_inf < epsilon. The contraction property guarantees ||V_{k+1} - V*||_inf <= gamma * ||V_k - V*||_inf at each iteration.",
    explanationChinese: "最大范数||V||_inf = max_s |V(s)|取所有状态上的最大绝对值。价值迭代的收敛通常使用||V_{k+1} - V_k||_inf < epsilon来衡量。压缩性质保证每次迭代||V_{k+1} - V*||_inf <= gamma * ||V_k - V*||_inf。",
    diagram: "",
    terms: ["value_function", "discount_factor"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 73,
    q: "What is the 'soft' value function in maximum entropy RL?",
    qChinese: "在最大熵RL中，'软'价值函数是什么？",
    options: [
      "A) A value function augmented with a policy entropy bonus to encourage exploration",
      "B) A value function that uses soft (differentiable) activations",
      "C) A value function that is smoothed by averaging neighboring states",
      "D) A value function that ignores negative rewards"
    ],
    optionsChinese: [
      "A) 增加了策略熵奖励以鼓励探索的价值函数",
      "B) 使用软（可微）激活的价值函数",
      "C) 通过平均相邻状态进行平滑的价值函数",
      "D) 忽略负奖励的价值函数"
    ],
    answer: 0,
    explanation: "In maximum entropy RL, the objective includes an entropy term: V^pi(s) = E[sum_t gamma^t (R_t + alpha*H(pi(.|s_t)))]. The soft Bellman equation includes log-sum-exp instead of max, producing a soft value function that balances reward maximization with policy entropy for robust exploration.",
    explanationChinese: "在最大熵RL中，目标包括熵项：V^pi(s) = E[sum_t gamma^t (R_t + alpha*H(pi(.|s_t)))]。软贝尔曼方程包括log-sum-exp而非max，产生一个平衡奖励最大化和策略熵的软价值函数，以实现稳健探索。",
    diagram: "",
    terms: ["value_function", "exploration_exploitation", "actor_critic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 74,
    q: "What is the 'successor representation' in RL?",
    qChinese: "在RL中，'后继表示'是什么？",
    options: [
      "A) A way to represent the value function as a product of the expected state occupancy and reward",
      "B) A table storing the next state for each state-action pair",
      "C) A graph of states connected by their temporal order",
      "D) The representation of the agent's successor in multi-agent settings"
    ],
    optionsChinese: [
      "A) 将价值函数表示为期望状态占用和奖励的乘积的方法",
      "B) 存储每个状态-行动对的下一个状态的表",
      "C) 按时间顺序连接的状态图",
      "D) 多智能体设置中智能体后继的表示"
    ],
    answer: 0,
    explanation: "The successor representation decomposes V^pi(s) = sum_{s'} M^pi(s,s') * R(s'), where M^pi(s,s') = E[sum_t gamma^t * I(S_t=s') | S_0=s, pi] is the expected discounted occupancy of state s'. This separates the transition structure from the reward, allowing fast adaptation when rewards change.",
    explanationChinese: "后继表示将V^pi(s)分解为V^pi(s) = sum_{s'} M^pi(s,s') * R(s')，其中M^pi(s,s') = E[sum_t gamma^t * I(S_t=s') | S_0=s, pi]是状态s'的期望折扣占用。这将转移结构与奖励分离，允许在奖励改变时快速适应。",
    diagram: "",
    terms: ["value_function", "state_space", "discount_factor"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 75,
    q: "What is the 'distributional' perspective on value functions?",
    qChinese: "价值函数的'分布'视角是什么？",
    options: [
      "A) Computing value functions for a distribution of different MDPs",
      "B) Distributing the value function computation across multiple processors",
      "C) Learning the full distribution of returns rather than just the expected return",
      "D) Using a Gaussian distribution to approximate the value function"
    ],
    optionsChinese: [
      "A) 为不同MDP的分布计算价值函数",
      "B) 将价值函数计算分布到多个处理器上",
      "C) 学习回报的完整分布而不仅仅是期望回报",
      "D) 使用高斯分布近似价值函数"
    ],
    answer: 2,
    explanation: "Distributional RL (e.g., C51, QR-DQN) models the full distribution of returns Z(s,a) rather than just E[Z(s,a)] = Q(s,a). The Bellman equation is extended to distributions: Z(s,a) = R(s,a) + gamma*Z(s',a'). This captures risk, multimodality, and enables risk-sensitive decision-making.",
    explanationChinese: "分布RL（如C51、QR-DQN）建模回报的完整分布Z(s,a)而不仅仅是E[Z(s,a)] = Q(s,a)。贝尔曼方程扩展到分布：Z(s,a) = R(s,a) + gamma*Z(s',a')。这捕获了风险、多模态，并实现了风险敏感的决策制定。",
    diagram: "",
    terms: ["value_function", "deep_q_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 76,
    q: "What is policy evaluation in dynamic programming?",
    qChinese: "动态规划中的策略评估是什么？",
    options: [
      "A) Computing the value function V^pi for a given policy pi by iteratively applying the Bellman expectation equation",
      "B) Finding the optimal policy",
      "C) Selecting actions based on the current policy",
      "D) Comparing two policies to determine which is better"
    ],
    optionsChinese: [
      "A) 通过迭代应用贝尔曼期望方程计算给定策略pi的价值函数V^pi",
      "B) 找到最优策略",
      "C) 根据当前策略选择行动",
      "D) 比较两个策略以确定哪个更好"
    ],
    answer: 0,
    explanation: "Policy evaluation (iterative policy evaluation) computes V^pi by repeatedly applying the Bellman expectation equation as an update rule: V_{k+1}(s) = sum_a pi(a|s)[R(s,a) + gamma*sum_{s'}P(s'|s,a)V_k(s')]. This converges to V^pi as k approaches infinity due to the contraction property.",
    explanationChinese: "策略评估（迭代策略评估）通过反复将贝尔曼期望方程作为更新规则来计算V^pi：V_{k+1}(s) = sum_a pi(a|s)[R(s,a) + gamma*sum_{s'}P(s'|s,a)V_k(s')]。由于压缩性质，随着k趋近无穷，这收敛到V^pi。",
    diagram: "",
    terms: ["value_function", "discount_factor"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 77,
    q: "What is value iteration?",
    qChinese: "什么是价值迭代？",
    options: [
      "A) Iteratively evaluating and improving a policy",
      "B) Iteratively applying the Bellman optimality equation to converge to V*",
      "C) Training a value network through gradient descent",
      "D) Sampling trajectories to estimate value functions"
    ],
    optionsChinese: [
      "A) 迭代地评估和改进策略",
      "B) 迭代应用贝尔曼最优方程以收敛到V*",
      "C) 通过梯度下降训练价值网络",
      "D) 采样轨迹以估计价值函数"
    ],
    answer: 1,
    explanation: "Value iteration applies the Bellman optimality backup: V_{k+1}(s) = max_a [R(s,a) + gamma*sum_{s'}P(s'|s,a)V_k(s')]. It combines policy evaluation and improvement into a single step. By the contraction mapping theorem, this converges to V* for any initial V_0 when gamma < 1.",
    explanationChinese: "价值迭代应用贝尔曼最优备份：V_{k+1}(s) = max_a [R(s,a) + gamma*sum_{s'}P(s'|s,a)V_k(s')]。它将策略评估和改进合并为一个步骤。根据压缩映射定理，当gamma < 1时，对任何初始V_0都收敛到V*。",
    diagram: "",
    terms: ["value_function", "discount_factor"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 78,
    q: "What is policy iteration?",
    qChinese: "什么是策略迭代？",
    options: [
      "A) Alternating between policy evaluation (computing V^pi) and policy improvement (making policy greedy w.r.t. V^pi)",
      "B) A single pass through the Bellman equation",
      "C) Iterating over all possible policies exhaustively",
      "D) Using Monte Carlo sampling to improve the policy"
    ],
    optionsChinese: [
      "A) 在策略评估（计算V^pi）和策略改进（使策略相对于V^pi贪心）之间交替",
      "B) 贝尔曼方程的单次遍历",
      "C) 穷举遍历所有可能的策略",
      "D) 使用蒙特卡罗采样来改进策略"
    ],
    answer: 0,
    explanation: "Policy iteration alternates between two steps: (1) Policy evaluation: compute V^pi exactly or approximately, and (2) Policy improvement: create a new policy that is greedy with respect to V^pi. This process converges to the optimal policy in a finite number of iterations for finite MDPs.",
    explanationChinese: "策略迭代在两个步骤之间交替：(1)策略评估：精确或近似计算V^pi，(2)策略改进：创建相对于V^pi贪心的新策略。对于有限MDP，此过程在有限次迭代内收敛到最优策略。",
    diagram: "",
    terms: ["value_function", "policy_gradient"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 79,
    q: "Which of the following is a requirement for applying dynamic programming to solve an MDP?",
    qChinese: "以下哪项是应用动态规划求解MDP的要求？",
    options: [
      "A) The agent must use a neural network",
      "B) The state space must be continuous",
      "C) Complete knowledge of the MDP model (transition probabilities and rewards)",
      "D) The rewards must be positive"
    ],
    optionsChinese: [
      "A) 智能体必须使用神经网络",
      "B) 状态空间必须是连续的",
      "C) MDP模型的完整知识（转移概率和奖励）",
      "D) 奖励必须是正的"
    ],
    answer: 2,
    explanation: "Dynamic programming methods require a complete model of the MDP—the transition probabilities P(s'|s,a) and reward function R(s,a). This is what makes them 'model-based' planning methods. In contrast, RL methods like TD learning and Monte Carlo can learn without a model by interacting with the environment.",
    explanationChinese: "动态规划方法需要MDP的完整模型——转移概率P(s'|s,a)和奖励函数R(s,a)。这使它们成为'基于模型'的规划方法。相比之下，TD学习和蒙特卡罗等RL方法可以通过与环境交互来学习，无需模型。",
    diagram: "",
    terms: ["model_based_rl", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 80,
    q: "What is the computational complexity of one sweep of value iteration for a finite MDP?",
    qChinese: "有限MDP的一次价值迭代扫描的计算复杂度是多少？",
    options: [
      "A) O(|S|)",
      "B) O(|S| * |A|)",
      "C) O(|S|^2 * |A|)",
      "D) O(|S|^3)"
    ],
    optionsChinese: [
      "A) O(|S|)",
      "B) O(|S| * |A|)",
      "C) O(|S|^2 * |A|)",
      "D) O(|S|^3)"
    ],
    answer: 2,
    explanation: "One sweep of value iteration updates all |S| states. For each state, it considers all |A| actions, and for each action, it sums over all |S| possible next states. This gives O(|S|^2 * |A|) per sweep. The number of sweeps needed depends on the desired accuracy and the discount factor gamma.",
    explanationChinese: "一次价值迭代扫描更新所有|S|个状态。对于每个状态，它考虑所有|A|个行动，对于每个行动，它对所有|S|个可能的下一个状态求和。这给出每次扫描O(|S|^2 * |A|)。所需扫描次数取决于期望精度和折扣因子gamma。",
    diagram: "",
    terms: ["value_function", "state_space", "action_space"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 81,
    q: "What is 'generalized policy iteration' (GPI)?",
    qChinese: "什么是'广义策略迭代'（GPI）？",
    options: [
      "A) A specific algorithm for solving POMDPs",
      "B) The general idea of interleaving policy evaluation and policy improvement in any proportion",
      "C) A policy gradient method with generalized advantage estimation",
      "D) An extension of policy iteration to continuous state spaces"
    ],
    optionsChinese: [
      "A) 求解POMDP的特定算法",
      "B) 以任何比例交织策略评估和策略改进的一般思想",
      "C) 具有广义优势估计的策略梯度方法",
      "D) 策略迭代到连续状态空间的扩展"
    ],
    answer: 1,
    explanation: "Generalized policy iteration (GPI) is the overarching concept where any amount of policy evaluation and policy improvement are interleaved. Most RL algorithms fit this pattern: they maintain an approximate value function and policy, driving both toward optimality. Value iteration, policy iteration, TD methods, and actor-critic all exemplify GPI.",
    explanationChinese: "广义策略迭代（GPI）是任何数量的策略评估和策略改进交织的总体概念。大多数RL算法符合这种模式：它们维护近似的价值函数和策略，推动两者趋向最优。价值迭代、策略迭代、TD方法和演员-评论家都是GPI的例子。",
    diagram: "",
    terms: ["value_function", "policy_gradient", "actor_critic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 82,
    q: "What is asynchronous dynamic programming?",
    qChinese: "什么是异步动态规划？",
    options: [
      "A) Running DP on multiple CPUs simultaneously",
      "B) Using stochastic approximation instead of exact DP",
      "C) Updating states in any order rather than performing full sweeps over all states",
      "D) Performing DP updates only at terminal states"
    ],
    optionsChinese: [
      "A) 在多个CPU上同时运行DP",
      "B) 使用随机逼近代替精确DP",
      "C) 以任何顺序更新状态而不是对所有状态进行完整扫描",
      "D) 仅在终止状态执行DP更新"
    ],
    answer: 2,
    explanation: "Asynchronous DP updates states in any order, potentially updating some states multiple times before others are updated once. This can be more efficient than synchronous DP by focusing computation on important states. Examples include real-time DP and prioritized sweeping, which update states with the largest Bellman residuals first.",
    explanationChinese: "异步DP以任何顺序更新状态，可能在其他状态更新一次之前多次更新某些状态。通过将计算集中在重要状态上，这可以比同步DP更高效。示例包括实时DP和优先扫描，它们首先更新贝尔曼残差最大的状态。",
    diagram: "",
    terms: ["value_function", "state_space"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 83,
    q: "How many iterations does policy iteration take to converge for a finite MDP?",
    qChinese: "策略迭代在有限MDP上需要多少次迭代才能收敛？",
    options: [
      "A) Always exactly |S| iterations",
      "B) Exactly log(|S|) iterations",
      "C) It may never converge",
      "D) At most |A|^|S| iterations (the number of deterministic policies), but usually far fewer"
    ],
    optionsChinese: [
      "A) 总是恰好|S|次迭代",
      "B) 恰好log(|S|)次迭代",
      "C) 可能永远不会收敛",
      "D) 最多|A|^|S|次迭代（确定性策略的数量），但通常远少于此"
    ],
    answer: 3,
    explanation: "Policy iteration converges in at most |A|^|S| iterations since there are finitely many deterministic policies and each iteration strictly improves the policy (unless it is already optimal). In practice, convergence is much faster, often in a small number of iterations independent of the state space size.",
    explanationChinese: "策略迭代最多在|A|^|S|次迭代内收敛，因为确定性策略数量有限且每次迭代严格改进策略（除非已经最优）。在实践中，收敛速度快得多，通常在与状态空间大小无关的少量迭代内完成。",
    diagram: "",
    terms: ["value_function", "state_space", "action_space"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 84,
    q: "What is 'modified policy iteration'?",
    qChinese: "什么是'修正策略迭代'？",
    options: [
      "A) Policy iteration with a modified reward function",
      "B) Using a different discount factor for evaluation and improvement",
      "C) Performing only a fixed number of policy evaluation sweeps before each policy improvement step",
      "D) Policy iteration applied only to modified (non-standard) MDPs"
    ],
    optionsChinese: [
      "A) 具有修正奖励函数的策略迭代",
      "B) 对评估和改进使用不同的折扣因子",
      "C) 在每个策略改进步骤之前只执行固定次数的策略评估扫描",
      "D) 仅应用于修正（非标准）MDP的策略迭代"
    ],
    answer: 2,
    explanation: "Modified policy iteration is a hybrid between policy iteration (which evaluates the policy to convergence) and value iteration (which performs only one evaluation sweep). It performs k evaluation sweeps before each improvement step, where k is a parameter. With k=1, it reduces to value iteration; with k=infinity, to standard policy iteration.",
    explanationChinese: "修正策略迭代是策略迭代（将策略评估到收敛）和价值迭代（只执行一次评估扫描）的混合。它在每个改进步骤之前执行k次评估扫描，其中k是参数。当k=1时，它简化为价值迭代；当k=无穷大时，简化为标准策略迭代。",
    diagram: "",
    terms: ["value_function", "model_based_rl"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 85,
    q: "What is prioritized sweeping?",
    qChinese: "什么是优先扫描？",
    options: [
      "A) Sweeping through states in reverse order of their index",
      "B) Assigning higher priority to states with more available actions",
      "C) Always updating the goal state first",
      "D) Prioritizing updates for states whose value is expected to change the most based on Bellman residuals"
    ],
    optionsChinese: [
      "A) 按索引的逆序扫描状态",
      "B) 为具有更多可用行动的状态分配更高的优先级",
      "C) 总是首先更新目标状态",
      "D) 根据贝尔曼残差优先更新价值预期变化最大的状态"
    ],
    answer: 3,
    explanation: "Prioritized sweeping maintains a priority queue of states ordered by their Bellman residual magnitude. States with larger residuals are updated first, as they are expected to change the most. When a state's value changes significantly, its predecessors are added to the queue. This dramatically speeds up convergence compared to uniform sweeping.",
    explanationChinese: "优先扫描维护一个按贝尔曼残差大小排序的状态优先队列。残差较大的状态首先更新，因为它们预期变化最大。当状态的值显著变化时，其前驱状态被添加到队列中。与均匀扫描相比，这显著加速了收敛。",
    diagram: "",
    terms: ["value_function", "model_based_rl"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 86,
    q: "What is the 'curse of dimensionality' in DP for RL?",
    qChinese: "RL中DP的'维度灾难'是什么？",
    options: [
      "A) The computational and storage costs grow exponentially with the number of state variables",
      "B) The discount factor causes numerical instability",
      "C) The optimal policy becomes less deterministic in higher dimensions",
      "D) The Bellman equation has no closed-form solution"
    ],
    optionsChinese: [
      "A) 计算和存储成本随状态变量数量呈指数增长",
      "B) 折扣因子导致数值不稳定",
      "C) 最优策略在更高维度中变得更不确定",
      "D) 贝尔曼方程没有闭式解"
    ],
    answer: 0,
    explanation: "The curse of dimensionality means that the state space size grows exponentially with the number of state variables. For instance, n binary variables yield 2^n states. DP requires iterating over all states, making it intractable for high-dimensional problems. Function approximation methods are used to overcome this limitation.",
    explanationChinese: "维度灾难意味着状态空间大小随状态变量数量呈指数增长。例如，n个二进制变量产生2^n个状态。DP需要遍历所有状态，使其对高维问题不可行。函数逼近方法用于克服这一限制。",
    diagram: "",
    terms: ["state_space", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 87,
    q: "What is the convergence rate of value iteration?",
    qChinese: "价值迭代的收敛速率是多少？",
    options: [
      "A) Convergence rate is independent of gamma",
      "B) The error decreases quadratically per iteration",
      "C) The error decreases logarithmically",
      "D) The error decreases by a factor of gamma per iteration (linear convergence)"
    ],
    optionsChinese: [
      "A) 收敛速率与gamma无关",
      "B) 每次迭代误差二次减少",
      "C) 误差对数减少",
      "D) 每次迭代误差减少gamma倍（线性收敛）"
    ],
    answer: 3,
    explanation: "Value iteration converges at a linear rate with contraction factor gamma. After k iterations, ||V_k - V*||_inf <= gamma^k * ||V_0 - V*||_inf. Higher gamma (more far-sighted) means slower convergence. To achieve epsilon-accurate solution requires roughly O(log(1/epsilon) / log(1/gamma)) iterations.",
    explanationChinese: "价值迭代以压缩因子gamma的线性速率收敛。经过k次迭代后，||V_k - V*||_inf <= gamma^k * ||V_0 - V*||_inf。更高的gamma（更远视）意味着更慢的收敛。要达到epsilon精度的解大约需要O(log(1/epsilon) / log(1/gamma))次迭代。",
    diagram: "",
    terms: ["value_function", "discount_factor"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 88,
    q: "In policy evaluation, what is a 'sweep'?",
    qChinese: "在策略评估中，'扫描'是什么？",
    options: [
      "A) One gradient descent step on the value function parameters",
      "B) Evaluating the policy on one test scenario",
      "C) Sampling one trajectory from the environment",
      "D) One complete pass updating the value of every state using the Bellman equation"
    ],
    optionsChinese: [
      "A) 价值函数参数的一次梯度下降步骤",
      "B) 在一个测试场景上评估策略",
      "C) 从环境中采样一条轨迹",
      "D) 使用贝尔曼方程更新每个状态值的一次完整遍历"
    ],
    answer: 3,
    explanation: "A sweep (or full backup) is one complete pass through all states, updating each state's value using the Bellman equation. For policy evaluation, each state is updated using V_{k+1}(s) = sum_a pi(a|s)[R(s,a) + gamma*sum_{s'}P(s'|s,a)V_k(s')]. Multiple sweeps are performed until convergence.",
    explanationChinese: "扫描（或完整备份）是通过所有状态的一次完整遍历，使用贝尔曼方程更新每个状态的值。对于策略评估，每个状态使用V_{k+1}(s) = sum_a pi(a|s)[R(s,a) + gamma*sum_{s'}P(s'|s,a)V_k(s')]更新。执行多次扫描直到收敛。",
    diagram: "",
    terms: ["value_function", "state_space"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 89,
    q: "What is 'in-place' dynamic programming?",
    qChinese: "什么是'就地'动态规划？",
    options: [
      "A) DP that does not require any memory",
      "B) Using only one array for value updates, overwriting values immediately as they are computed",
      "C) DP applied directly in the environment without simulation",
      "D) DP that runs on a single processor"
    ],
    optionsChinese: [
      "A) 不需要任何内存的DP",
      "B) 仅使用一个数组进行价值更新，计算后立即覆盖值",
      "C) 直接在环境中应用而无需模拟的DP",
      "D) 在单个处理器上运行的DP"
    ],
    answer: 1,
    explanation: "In-place DP uses a single value array and updates values immediately, so later states in the same sweep use already-updated values from earlier states. This typically converges faster than two-array (synchronous) DP because it propagates information more quickly, though the result depends on the update order.",
    explanationChinese: "就地DP使用单个价值数组并立即更新值，因此同一次扫描中后面的状态使用前面状态已更新的值。这通常比双数组（同步）DP收敛更快，因为它更快地传播信息，尽管结果取决于更新顺序。",
    diagram: "",
    terms: ["value_function", "state_space"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 90,
    q: "What is the relationship between linear programming and solving MDPs?",
    qChinese: "线性规划与求解MDP之间的关系是什么？",
    options: [
      "A) Linear programming cannot be used to solve MDPs",
      "B) Linear programming only works for MDPs without discounting",
      "C) The optimal value function of an MDP can be found by solving a linear program",
      "D) Linear programming replaces the need for value functions"
    ],
    optionsChinese: [
      "A) 线性规划不能用于求解MDP",
      "B) 线性规划只适用于没有折扣的MDP",
      "C) MDP的最优价值函数可以通过求解线性规划来找到",
      "D) 线性规划取代了对价值函数的需求"
    ],
    answer: 2,
    explanation: "An MDP can be formulated as a linear program: minimize sum_s V(s) subject to V(s) >= R(s,a) + gamma*sum_{s'}P(s'|s,a)V(s') for all s,a. The LP solution gives V*, and the dual variables give the optimal policy. While theoretically elegant, LP is less practical than DP for large state spaces.",
    explanationChinese: "MDP可以被公式化为线性规划：最小化sum_s V(s)，约束V(s) >= R(s,a) + gamma*sum_{s'}P(s'|s,a)V(s')对所有s,a成立。LP解给出V*，对偶变量给出最优策略。虽然理论上优雅，但对大状态空间，LP不如DP实用。",
    diagram: "",
    terms: ["value_function", "model_based_rl"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 91,
    q: "What is the Gauss-Seidel method for policy evaluation?",
    qChinese: "策略评估的高斯-赛德尔方法是什么？",
    options: [
      "A) A method that uses random sampling for evaluation",
      "B) A second-order optimization method for policy parameters",
      "C) A method that evaluates the policy using Gaussian noise",
      "D) An in-place iterative method that uses the most recently updated values within the same sweep"
    ],
    optionsChinese: [
      "A) 使用随机采样进行评估的方法",
      "B) 策略参数的二阶优化方法",
      "C) 使用高斯噪声评估策略的方法",
      "D) 在同一次扫描内使用最近更新值的就地迭代方法"
    ],
    answer: 3,
    explanation: "The Gauss-Seidel method for policy evaluation is an in-place variant where states are updated sequentially and each update immediately uses the most recently computed values. Applied to the Bellman equation, it typically converges faster than the Jacobi method (two-array approach) since updated values propagate within the same iteration.",
    explanationChinese: "策略评估的高斯-赛德尔方法是一种就地变体，其中状态按顺序更新，每次更新立即使用最近计算的值。应用于贝尔曼方程，它通常比雅可比方法（双数组方法）收敛更快，因为更新的值在同一次迭代中传播。",
    diagram: "",
    terms: ["value_function", "model_based_rl"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 92,
    q: "What happens if we apply policy improvement but the policy does not change?",
    qChinese: "如果我们应用策略改进但策略没有变化会怎样？",
    options: [
      "A) The algorithm has failed",
      "B) The current policy is optimal",
      "C) We need to increase the discount factor",
      "D) We should restart with a new random policy"
    ],
    optionsChinese: [
      "A) 算法失败了",
      "B) 当前策略是最优的",
      "C) 我们需要增加折扣因子",
      "D) 我们应该用新的随机策略重新开始"
    ],
    answer: 1,
    explanation: "If the greedy policy with respect to V^pi is the same as pi, then V^pi satisfies the Bellman optimality equation: V^pi(s) = max_a[R(s,a) + gamma*sum_{s'}P(s'|s,a)V^pi(s')] for all s. This means V^pi = V* and pi is an optimal policy. Policy iteration has converged.",
    explanationChinese: "如果相对于V^pi的贪心策略与pi相同，则V^pi满足贝尔曼最优方程：V^pi(s) = max_a[R(s,a) + gamma*sum_{s'}P(s'|s,a)V^pi(s')]对所有s成立。这意味着V^pi = V*且pi是最优策略。策略迭代已收敛。",
    diagram: "",
    terms: ["value_function", "policy_gradient"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 93,
    q: "What is 'real-time dynamic programming' (RTDP)?",
    qChinese: "什么是'实时动态规划'（RTDP）？",
    options: [
      "A) An asynchronous DP method that updates only states visited during simulated trajectories",
      "B) DP that must complete within a real-time deadline",
      "C) DP applied to real-world robotic systems",
      "D) DP that uses real-valued (continuous) states"
    ],
    optionsChinese: [
      "A) 仅更新模拟轨迹中访问的状态的异步DP方法",
      "B) 必须在实时截止日期内完成的DP",
      "C) 应用于现实世界机器人系统的DP",
      "D) 使用实数值（连续）状态的DP"
    ],
    answer: 0,
    explanation: "Real-time DP generates trajectories using the current greedy policy and only updates the values of states actually visited along these trajectories. This focuses computation on the relevant part of the state space. RTDP converges to the optimal value function on the set of relevant states under appropriate conditions.",
    explanationChinese: "实时DP使用当前贪心策略生成轨迹，仅更新沿这些轨迹实际访问的状态的值。这将计算集中在状态空间的相关部分。在适当条件下，RTDP在相关状态集上收敛到最优价值函数。",
    diagram: "",
    terms: ["value_function", "model_based_rl"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 94,
    q: "What is 'backward induction' for finite-horizon MDPs?",
    qChinese: "有限时间范围MDP的'逆向归纳'是什么？",
    options: [
      "A) Training the agent to move backward through the state space",
      "B) Evaluating the policy by tracing trajectories in reverse",
      "C) Reversing the direction of policy gradient updates",
      "D) Solving the MDP by computing optimal values from the last time step back to the first"
    ],
    optionsChinese: [
      "A) 训练智能体在状态空间中向后移动",
      "B) 通过逆序追踪轨迹来评估策略",
      "C) 反转策略梯度更新的方向",
      "D) 通过从最后一个时间步向第一个时间步计算最优值来求解MDP"
    ],
    answer: 3,
    explanation: "Backward induction solves finite-horizon MDPs by starting at the terminal time step T where values are known (typically 0 or a terminal reward) and working backward. At each step t, it computes V_t(s) = max_a[R(s,a) + sum_{s'}P(s'|s,a)V_{t+1}(s')]. This yields time-dependent optimal policies.",
    explanationChinese: "逆向归纳通过从终止时间步T（其中值已知，通常为0或终止奖励）开始向后求解有限时间范围MDP。在每个步骤t，它计算V_t(s) = max_a[R(s,a) + sum_{s'}P(s'|s,a)V_{t+1}(s')]。这产生依赖时间的最优策略。",
    diagram: "",
    terms: ["value_function", "model_based_rl"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 95,
    q: "Why might policy iteration converge faster than value iteration in practice?",
    qChinese: "为什么策略迭代在实践中可能比价值迭代更快收敛？",
    options: [
      "A) Policy evaluation finds the exact value function for each policy, providing more information per improvement step",
      "B) Policy iteration uses a simpler update rule",
      "C) Policy iteration requires fewer states to be stored",
      "D) Policy iteration does not need the transition model"
    ],
    optionsChinese: [
      "A) 策略评估为每个策略找到精确的价值函数，每个改进步骤提供更多信息",
      "B) 策略迭代使用更简单的更新规则",
      "C) 策略迭代需要存储更少的状态",
      "D) 策略迭代不需要转移模型"
    ],
    answer: 0,
    explanation: "Policy iteration performs exact (or near-exact) policy evaluation before each improvement step. This gives a precise picture of the current policy's performance, leading to larger improvement steps. Value iteration only performs one Bellman backup per improvement, providing less information. However, each PI iteration is more expensive due to the evaluation phase.",
    explanationChinese: "策略迭代在每个改进步骤之前执行精确（或接近精确）的策略评估。这提供了当前策略性能的精确图像，导致更大的改进步骤。价值迭代每次改进只执行一次贝尔曼备份，提供的信息更少。然而，由于评估阶段，每次PI迭代更昂贵。",
    diagram: "",
    terms: ["value_function", "model_based_rl"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 96,
    q: "What is the 'planning' problem in RL?",
    qChinese: "RL中的'规划'问题是什么？",
    options: [
      "A) Computing an optimal policy given a known model of the environment",
      "B) Deciding which RL algorithm to use",
      "C) Collecting training data from the environment",
      "D) Designing the reward function"
    ],
    optionsChinese: [
      "A) 给定已知的环境模型，计算最优策略",
      "B) 决定使用哪种RL算法",
      "C) 从环境中收集训练数据",
      "D) 设计奖励函数"
    ],
    answer: 0,
    explanation: "Planning refers to computing a policy from a known model of the environment without direct interaction. Dynamic programming methods like value iteration and policy iteration are planning algorithms. This contrasts with learning, where the agent must discover the model through interaction. Model-based RL combines both planning and learning.",
    explanationChinese: "规划指从已知的环境模型计算策略，无需直接交互。价值迭代和策略迭代等动态规划方法是规划算法。这与学习形成对比，在学习中智能体必须通过交互发现模型。基于模型的RL结合了规划和学习。",
    diagram: "",
    terms: ["model_based_rl", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 97,
    q: "What is the 'Dyna' architecture?",
    qChinese: "什么是'Dyna'架构？",
    options: [
      "A) A deep neural network architecture for RL",
      "B) A distributed RL training framework",
      "C) A dynamic programming algorithm for continuous states",
      "D) An architecture that integrates learning, planning, and acting by using a learned model for simulated experience"
    ],
    optionsChinese: [
      "A) 用于RL的深度神经网络架构",
      "B) 分布式RL训练框架",
      "C) 用于连续状态的动态规划算法",
      "D) 通过使用学习的模型进行模拟经验来整合学习、规划和行动的架构"
    ],
    answer: 3,
    explanation: "Dyna integrates model-free RL with model-based planning. It learns a model from real experience, then uses that model to generate simulated experience for additional value function updates (planning). Each real step triggers multiple planning steps, dramatically improving sample efficiency while maintaining the benefits of model-free learning.",
    explanationChinese: "Dyna将无模型RL与基于模型的规划集成。它从真实经验中学习模型，然后使用该模型生成模拟经验进行额外的价值函数更新（规划）。每个真实步骤触发多个规划步骤，在保持无模型学习优势的同时显著提高样本效率。",
    diagram: "",
    terms: ["model_based_rl", "q_learning", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 98,
    q: "What is 'approximate dynamic programming' (ADP)?",
    qChinese: "什么是'近似动态规划'（ADP）？",
    options: [
      "A) DP that uses rounded integer values instead of real numbers",
      "B) DP with approximate discount factors",
      "C) DP that approximates the transition model",
      "D) DP methods that use function approximation to handle large or continuous state spaces"
    ],
    optionsChinese: [
      "A) 使用舍入整数值而非实数的DP",
      "B) 使用近似折扣因子的DP",
      "C) 近似转移模型的DP",
      "D) 使用函数逼近来处理大型或连续状态空间的DP方法"
    ],
    answer: 3,
    explanation: "Approximate DP uses function approximation (e.g., linear functions, neural networks) to represent value functions compactly when the state space is too large for tabular methods. The Bellman equation is solved approximately using projection and operator techniques. This bridges the gap between exact DP and practical large-scale problems.",
    explanationChinese: "近似DP在状态空间对表格方法来说太大时，使用函数逼近（如线性函数、神经网络）紧凑地表示价值函数。贝尔曼方程使用投影和算子技术近似求解。这弥补了精确DP与实际大规模问题之间的差距。",
    diagram: "",
    terms: ["value_function", "deep_q_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 99,
    q: "What is the difference between synchronous and asynchronous value iteration?",
    qChinese: "同步价值迭代和异步价值迭代有什么区别？",
    options: [
      "A) Synchronous uses one processor; asynchronous uses multiple",
      "B) Synchronous converges; asynchronous does not",
      "C) Synchronous updates all states in each sweep before using new values; asynchronous updates states individually and uses new values immediately",
      "D) Synchronous requires a model; asynchronous does not"
    ],
    optionsChinese: [
      "A) 同步使用一个处理器；异步使用多个",
      "B) 同步收敛；异步不收敛",
      "C) 同步在每次扫描中更新所有状态后才使用新值；异步单独更新状态并立即使用新值",
      "D) 同步需要模型；异步不需要"
    ],
    answer: 2,
    explanation: "Synchronous VI maintains two arrays and updates all states using old values before swapping. Asynchronous VI updates states individually in any order and immediately uses new values. Both converge to V*, but asynchronous VI can be more efficient by focusing on states with the largest changes (prioritized sweeping).",
    explanationChinese: "同步VI维护两个数组，使用旧值更新所有状态后再交换。异步VI以任何顺序单独更新状态并立即使用新值。两者都收敛到V*，但异步VI可以通过关注变化最大的状态（优先扫描）更高效。",
    diagram: "",
    terms: ["value_function", "state_space"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 100,
    q: "What is the 'simulation lemma' in approximate DP?",
    qChinese: "近似DP中的'模拟引理'是什么？",
    options: [
      "A) Simulated environments always produce optimal policies",
      "B) The performance loss of a policy is bounded by the model approximation error",
      "C) Monte Carlo simulation converges faster than DP",
      "D) Simulation cannot replace real-world experience"
    ],
    optionsChinese: [
      "A) 模拟环境总是产生最优策略",
      "B) 策略的性能损失由模型近似误差限定",
      "C) 蒙特卡罗模拟比DP收敛更快",
      "D) 模拟不能替代现实世界经验"
    ],
    answer: 1,
    explanation: "The simulation lemma bounds the difference in value functions between the true MDP and an approximate MDP in terms of the model error. If the transition and reward approximation errors are small, the policy computed from the approximate model performs nearly as well in the true environment. This justifies model-based RL approaches.",
    explanationChinese: "模拟引理用模型误差限定了真实MDP和近似MDP之间价值函数的差异。如果转移和奖励近似误差很小，则从近似模型计算的策略在真实环境中表现几乎一样好。这为基于模型的RL方法提供了理论依据。",
    diagram: "",
    terms: ["model_based_rl", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 101,
    q: "What is the core idea behind Monte Carlo methods in RL?",
    qChinese: "RL中蒙特卡罗方法的核心思想是什么？",
    options: [
      "A) Estimating value functions by averaging complete episode returns",
      "B) Using a model of the environment to simulate transitions",
      "C) Bootstrapping value estimates from successor states",
      "D) Using the Bellman equation to compute exact values"
    ],
    optionsChinese: [
      "A) 通过平均完整回合回报来估计价值函数",
      "B) 使用环境模型来模拟转移",
      "C) 从后继状态自举价值估计",
      "D) 使用贝尔曼方程计算精确值"
    ],
    answer: 0,
    explanation: "Monte Carlo methods estimate value functions by collecting complete episodes and computing the actual return G_t for each visited state. The value estimate is updated as the average of all observed returns from that state. MC methods do not bootstrap—they wait until the episode ends to update values.",
    explanationChinese: "蒙特卡罗方法通过收集完整回合并计算每个访问状态的实际回报G_t来估计价值函数。价值估计更新为该状态所有观测回报的平均值。MC方法不使用自举——它们等到回合结束才更新值。",
    diagram: "",
    terms: ["monte_carlo_method", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 102,
    q: "What is the difference between first-visit and every-visit Monte Carlo?",
    qChinese: "首次访问蒙特卡罗和每次访问蒙特卡罗有什么区别？",
    options: [
      "A) First-visit uses the first episode; every-visit uses all episodes",
      "B) First-visit only works for deterministic policies",
      "C) First-visit averages returns only from the first time a state is visited in each episode; every-visit averages all visits",
      "D) Every-visit requires more memory than first-visit"
    ],
    optionsChinese: [
      "A) 首次访问使用第一个回合；每次访问使用所有回合",
      "B) 首次访问仅适用于确定性策略",
      "C) 首次访问仅从每个回合中首次访问状态时平均回报；每次访问平均所有访问",
      "D) 每次访问比首次访问需要更多内存"
    ],
    answer: 2,
    explanation: "First-visit MC estimates V(s) by averaging returns from only the first time s is visited in each episode. Every-visit MC averages returns from every visit to s, including multiple visits within the same episode. Both converge to V^pi, but first-visit MC has unbiased estimates while every-visit MC may have lower variance.",
    explanationChinese: "首次访问MC通过仅从每个回合中首次访问s时的回报取平均来估计V(s)。每次访问MC对s的每次访问（包括同一回合内的多次访问）的回报取平均。两者都收敛到V^pi，但首次访问MC具有无偏估计，而每次访问MC可能具有更低的方差。",
    diagram: "",
    terms: ["monte_carlo_method", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 103,
    q: "Why do Monte Carlo methods require complete episodes?",
    qChinese: "为什么蒙特卡罗方法需要完整的回合？",
    options: [
      "A) Because they need to compute the transition probabilities",
      "B) Because they estimate values from actual complete returns, which are only known at episode end",
      "C) Because the policy can only be updated once per episode",
      "D) Because the environment model is needed for each episode"
    ],
    optionsChinese: [
      "A) 因为它们需要计算转移概率",
      "B) 因为它们从实际完整回报中估计值，而完整回报只在回合结束时才知道",
      "C) 因为策略每个回合只能更新一次",
      "D) 因为每个回合都需要环境模型"
    ],
    answer: 1,
    explanation: "MC methods use the actual return G_t = R_{t+1} + gamma*R_{t+2} + ... + gamma^{T-t-1}*R_T as the target for updating value estimates. Since G_t depends on all future rewards until the terminal state, the complete episode must finish before any updates can be made. This is a key limitation of pure MC methods.",
    explanationChinese: "MC方法使用实际回报G_t = R_{t+1} + gamma*R_{t+2} + ... + gamma^{T-t-1}*R_T作为更新价值估计的目标。由于G_t取决于直到终止状态的所有未来奖励，因此必须在完成整个回合后才能进行任何更新。这是纯MC方法的关键限制。",
    diagram: "",
    terms: ["monte_carlo_method", "discount_factor"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 104,
    q: "What is Monte Carlo control with exploring starts?",
    qChinese: "带有探索性起始的蒙特卡罗控制是什么？",
    options: [
      "A) Starting each episode from the same state",
      "B) Ensuring every state-action pair has a nonzero probability of being the starting pair of an episode",
      "C) Using a separate exploration phase before the control phase",
      "D) Randomly perturbing the policy at the start of each episode"
    ],
    optionsChinese: [
      "A) 每个回合从相同状态开始",
      "B) 确保每个状态-行动对都有非零概率成为回合的起始对",
      "C) 在控制阶段之前使用单独的探索阶段",
      "D) 在每个回合开始时随机扰动策略"
    ],
    answer: 1,
    explanation: "MC with exploring starts guarantees all state-action pairs are visited by randomly selecting the initial state-action pair of each episode. This ensures all Q(s,a) values are estimated, enabling convergence to the optimal policy. However, this assumption is impractical in many real-world scenarios.",
    explanationChinese: "带探索性起始的MC通过随机选择每个回合的初始状态-行动对来保证所有状态-行动对都被访问。这确保所有Q(s,a)值都被估计，从而收敛到最优策略。然而，这一假设在许多现实场景中是不切实际的。",
    diagram: "",
    terms: ["monte_carlo_method", "exploration_exploitation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 105,
    q: "What is off-policy Monte Carlo using importance sampling?",
    qChinese: "使用重要性采样的离策略蒙特卡罗是什么？",
    options: [
      "A) Using a different reward function for evaluation",
      "B) Using multiple environments simultaneously",
      "C) Sampling only important states from the episode",
      "D) Reweighting returns generated by a behavior policy to estimate value under a target policy"
    ],
    optionsChinese: [
      "A) 使用不同的奖励函数进行评估",
      "B) 同时使用多个环境",
      "C) 仅从回合中采样重要状态",
      "D) 对行为策略生成的回报进行重新加权以估计目标策略下的价值"
    ],
    answer: 3,
    explanation: "Off-policy MC uses importance sampling to correct for the difference between the behavior policy b (used to generate data) and target policy pi (being evaluated). The importance sampling ratio rho = product of pi(a_t|s_t)/b(a_t|s_t) reweights returns so their expected value under b equals the expected return under pi.",
    explanationChinese: "离策略MC使用重要性采样来纠正行为策略b（用于生成数据）和目标策略pi（正在评估）之间的差异。重要性采样比率rho = pi(a_t|s_t)/b(a_t|s_t)的乘积重新加权回报，使其在b下的期望值等于在pi下的期望回报。",
    diagram: "",
    terms: ["monte_carlo_method", "exploration_exploitation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 106,
    q: "What is the variance problem with importance sampling in off-policy MC?",
    qChinese: "离策略MC中重要性采样的方差问题是什么？",
    options: [
      "A) The variance is always zero",
      "B) The importance sampling ratio can be very large, causing high variance in value estimates",
      "C) The variance decreases as episodes get longer",
      "D) Importance sampling eliminates all variance"
    ],
    optionsChinese: [
      "A) 方差总是零",
      "B) 重要性采样比率可能非常大，导致价值估计的高方差",
      "C) 随着回合变长，方差减少",
      "D) 重要性采样消除所有方差"
    ],
    answer: 1,
    explanation: "The importance sampling ratio is a product of ratios over all time steps in a trajectory. For long episodes, this product can become extremely large or small, causing high variance in the estimates. Weighted importance sampling reduces variance but introduces bias. Per-decision importance sampling can also help reduce variance.",
    explanationChinese: "重要性采样比率是轨迹中所有时间步比率的乘积。对于长回合，该乘积可能变得极大或极小，导致估计中的高方差。加权重要性采样减少方差但引入偏差。逐决策重要性采样也可以帮助减少方差。",
    diagram: "",
    terms: ["monte_carlo_method", "exploration_exploitation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 107,
    q: "What is the incremental update formula for Monte Carlo value estimation?",
    qChinese: "蒙特卡罗价值估计的增量更新公式是什么？",
    options: [
      "A) V(s) = max_a Q(s, a)",
      "B) V(s) = V(s) + alpha * [R_{t+1} + gamma*V(s') - V(s)]",
      "C) V(s) = G_t",
      "D) V(s) = V(s) + alpha * [G_t - V(s)]"
    ],
    optionsChinese: [
      "A) V(s) = max_a Q(s, a)",
      "B) V(s) = V(s) + alpha * [R_{t+1} + gamma*V(s') - V(s)]",
      "C) V(s) = G_t",
      "D) V(s) = V(s) + alpha * [G_t - V(s)]"
    ],
    answer: 3,
    explanation: "The incremental MC update uses V(s) <- V(s) + alpha*(G_t - V(s)), where G_t is the actual return from state s and alpha is the step size. With alpha = 1/N(s) (the visit count), this computes the running average. A constant alpha gives more weight to recent episodes, adapting to non-stationary environments.",
    explanationChinese: "增量MC更新使用V(s) <- V(s) + alpha*(G_t - V(s))，其中G_t是从状态s的实际回报，alpha是步长。当alpha = 1/N(s)（访问计数）时，这计算运行平均值。常数alpha给最近回合更大权重，适应非平稳环境。",
    diagram: "",
    terms: ["monte_carlo_method", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 108,
    q: "What advantage do Monte Carlo methods have over dynamic programming?",
    qChinese: "蒙特卡罗方法相对于动态规划有什么优势？",
    options: [
      "A) MC methods always converge faster",
      "B) MC methods do not require a model of the environment",
      "C) MC methods use less memory",
      "D) MC methods can only be used for episodic tasks"
    ],
    optionsChinese: [
      "A) MC方法总是更快收敛",
      "B) MC方法不需要环境模型",
      "C) MC方法使用更少内存",
      "D) MC方法只能用于回合制任务"
    ],
    answer: 1,
    explanation: "The main advantage of MC methods is that they are model-free—they learn directly from experience without needing the transition probabilities or reward function. They only require sample episodes. This makes them applicable to problems where the environment dynamics are unknown or too complex to model.",
    explanationChinese: "MC方法的主要优势是它们是无模型的——直接从经验中学习，不需要转移概率或奖励函数。它们只需要样本回合。这使它们适用于环境动态未知或过于复杂而无法建模的问题。",
    diagram: "",
    terms: ["monte_carlo_method", "model_based_rl"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 109,
    q: "What is weighted importance sampling and how does it differ from ordinary importance sampling?",
    qChinese: "什么是加权重要性采样，它与普通重要性采样有何不同？",
    options: [
      "A) Weighted IS assigns equal weight to all samples; ordinary IS does not",
      "B) Weighted IS normalizes the importance ratios, producing biased but lower-variance estimates",
      "C) Weighted IS always produces unbiased estimates",
      "D) There is no practical difference between the two"
    ],
    optionsChinese: [
      "A) 加权IS对所有样本分配相等权重；普通IS不这样做",
      "B) 加权IS归一化重要性比率，产生有偏但低方差的估计",
      "C) 加权IS总是产生无偏估计",
      "D) 两者之间没有实际差异"
    ],
    answer: 1,
    explanation: "Ordinary IS multiplies returns by importance ratios and averages them, producing unbiased but high-variance estimates. Weighted IS divides by the sum of importance ratios, which is biased (the bias converges to zero) but has much lower variance. In practice, weighted IS is strongly preferred due to its superior finite-sample performance.",
    explanationChinese: "普通IS将回报乘以重要性比率并取平均，产生无偏但高方差的估计。加权IS除以重要性比率之和，这是有偏的（偏差收敛到零）但方差低得多。在实践中，加权IS因其优越的有限样本性能而被强烈推荐。",
    diagram: "",
    terms: ["monte_carlo_method", "exploration_exploitation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 110,
    q: "Can Monte Carlo methods be applied to continuing (non-episodic) tasks?",
    qChinese: "蒙特卡罗方法能否应用于持续（非回合制）任务？",
    options: [
      "A) Yes, without any modification",
      "B) Yes, but only with a discount factor of 1",
      "C) No, because MC requires complete episode returns, which are unavailable in continuing tasks",
      "D) Yes, by using bootstrapping"
    ],
    optionsChinese: [
      "A) 是的，无需任何修改",
      "B) 是的，但只能使用折扣因子为1",
      "C) 不能，因为MC需要完整的回合回报，而在持续任务中不可用",
      "D) 是的，通过使用自举"
    ],
    answer: 2,
    explanation: "Standard MC methods cannot be directly applied to continuing tasks because they require complete episodes to compute returns. The return G_t cannot be calculated without a terminal state. Workarounds include truncating episodes artificially or using TD methods, which update at every step using bootstrapped estimates.",
    explanationChinese: "标准MC方法不能直接应用于持续任务，因为它们需要完整回合来计算回报。没有终止状态就无法计算回报G_t。变通方法包括人为截断回合或使用TD方法，TD方法在每一步使用自举估计进行更新。",
    diagram: "",
    terms: ["monte_carlo_method", "temporal_difference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 111,
    q: "What is the MC estimate of Q(s, a) used for in Monte Carlo control?",
    qChinese: "在蒙特卡罗控制中，Q(s, a)的MC估计用于什么？",
    options: [
      "A) Estimating the transition model",
      "B) Deriving a better policy by acting greedily with respect to the estimated Q-values",
      "C) Computing the exact value function",
      "D) Determining the discount factor"
    ],
    optionsChinese: [
      "A) 估计转移模型",
      "B) 通过相对于估计的Q值贪心行动来推导更好的策略",
      "C) 计算精确的价值函数",
      "D) 确定折扣因子"
    ],
    answer: 1,
    explanation: "In MC control, Q(s,a) estimates are used for policy improvement. The new policy is greedy with respect to Q: pi(s) = argmax_a Q(s,a). Using Q-values rather than V-values avoids the need for a model, since we can directly compare actions without knowing transition probabilities.",
    explanationChinese: "在MC控制中，Q(s,a)估计用于策略改进。新策略相对于Q是贪心的：pi(s) = argmax_a Q(s,a)。使用Q值而非V值避免了对模型的需要，因为我们可以直接比较行动而不需要知道转移概率。",
    diagram: "",
    terms: ["monte_carlo_method", "q_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 112,
    q: "What is the 'blackjack' problem commonly used to illustrate in RL textbooks?",
    qChinese: "RL教科书中常用来说明什么的'21点'问题？",
    options: [
      "A) Continuous control with neural networks",
      "B) Deep Q-network training",
      "C) Multi-agent reinforcement learning",
      "D) Monte Carlo prediction and control in an episodic environment with stochastic transitions"
    ],
    optionsChinese: [
      "A) 使用神经网络的连续控制",
      "B) 深度Q网络训练",
      "C) 多智能体强化学习",
      "D) 在具有随机转移的回合制环境中的蒙特卡罗预测和控制"
    ],
    answer: 3,
    explanation: "The blackjack example in Sutton and Barto's textbook demonstrates MC methods for both prediction (estimating the value of a fixed policy) and control (finding optimal hit/stick decisions). It is episodic (each hand is an episode) with stochastic transitions (random cards), making it ideal for illustrating MC approaches.",
    explanationChinese: "Sutton和Barto教科书中的21点示例展示了MC方法的预测（估计固定策略的价值）和控制（找到最优叫牌/停牌决策）。它是回合制的（每手牌是一个回合），具有随机转移（随机卡牌），非常适合说明MC方法。",
    diagram: "",
    terms: ["monte_carlo_method", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 113,
    q: "Why is an epsilon-soft policy used in on-policy Monte Carlo control?",
    qChinese: "为什么在策略蒙特卡罗控制中使用epsilon-软策略？",
    options: [
      "A) To ensure all state-action pairs are visited, guaranteeing exploration",
      "B) To reduce computational cost",
      "C) To make the policy deterministic",
      "D) To increase the discount factor"
    ],
    optionsChinese: [
      "A) 确保所有状态-行动对都被访问，保证探索",
      "B) 减少计算成本",
      "C) 使策略确定性",
      "D) 增加折扣因子"
    ],
    answer: 0,
    explanation: "An epsilon-soft policy ensures pi(a|s) >= epsilon/|A| for all actions, guaranteeing that every action has a nonzero probability of being selected. This ensures continued exploration so that Q-value estimates improve over time. On-policy MC control finds the best epsilon-soft policy, which approaches the optimal policy as epsilon decreases.",
    explanationChinese: "epsilon-软策略确保pi(a|s) >= epsilon/|A|对所有行动成立，保证每个行动都有非零的被选择概率。这确保了持续探索，使Q值估计随时间改进。在策略MC控制找到最佳的epsilon-软策略，随着epsilon减少趋近最优策略。",
    diagram: "",
    terms: ["monte_carlo_method", "epsilon_greedy", "exploration_exploitation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 114,
    q: "What is the bias-variance trade-off in MC versus TD methods?",
    qChinese: "MC与TD方法中的偏差-方差权衡是什么？",
    options: [
      "A) MC has zero bias but high variance; TD has some bias (from bootstrapping) but lower variance",
      "B) MC has high bias and low variance; TD has low bias and high variance",
      "C) Both have the same bias and variance",
      "D) MC has low variance and TD has zero bias"
    ],
    optionsChinese: [
      "A) MC具有零偏差但高方差；TD具有一些偏差（来自自举）但较低方差",
      "B) MC具有高偏差和低方差；TD具有低偏差和高方差",
      "C) 两者具有相同的偏差和方差",
      "D) MC具有低方差而TD具有零偏差"
    ],
    answer: 0,
    explanation: "MC estimates use the actual return as the target, which is unbiased but can have high variance due to the randomness of entire trajectories. TD estimates bootstrap from the current value estimate, introducing bias but reducing variance since they only depend on one transition. The TD target R + gamma*V(s') has lower variance than G_t.",
    explanationChinese: "MC估计使用实际回报作为目标，这是无偏的但由于整个轨迹的随机性可能具有高方差。TD估计从当前价值估计自举，引入偏差但减少方差，因为它们仅依赖于一次转移。TD目标R + gamma*V(s')的方差低于G_t。",
    diagram: "",
    terms: ["monte_carlo_method", "temporal_difference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 115,
    q: "How does MC tree search (MCTS) differ from standard MC methods?",
    qChinese: "蒙特卡罗树搜索（MCTS）与标准MC方法有何不同？",
    options: [
      "A) MCTS does not use random simulations",
      "B) MCTS builds a search tree by selectively expanding nodes based on simulated rollouts and UCB-style selection",
      "C) MCTS requires a complete model and MC does not",
      "D) MCTS only works for continuous action spaces"
    ],
    optionsChinese: [
      "A) MCTS不使用随机模拟",
      "B) MCTS通过基于模拟展开和UCB风格选择来选择性扩展节点构建搜索树",
      "C) MCTS需要完整模型而MC不需要",
      "D) MCTS仅适用于连续行动空间"
    ],
    answer: 1,
    explanation: "MCTS builds an asymmetric search tree incrementally through four phases: selection (using UCB), expansion, simulation (rollout), and backpropagation. It focuses search on the most promising branches. MCTS was famously used in AlphaGo to achieve superhuman performance in Go, combined with deep neural networks.",
    explanationChinese: "MCTS通过四个阶段增量地构建非对称搜索树：选择（使用UCB）、扩展、模拟（展开）和反向传播。它将搜索集中在最有前途的分支上。MCTS在AlphaGo中被著名地使用，结合深度神经网络在围棋中实现了超人性能。",
    diagram: "",
    terms: ["monte_carlo_method", "exploration_exploitation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 116,
    q: "What is the convergence guarantee for first-visit MC prediction?",
    qChinese: "首次访问MC预测的收敛保证是什么？",
    options: [
      "A) V(s) converges to V^pi(s) as the number of first visits to s goes to infinity",
      "B) It converges in finite episodes for any policy",
      "C) It converges only for deterministic policies",
      "D) It converges to the average of V^pi and V*"
    ],
    optionsChinese: [
      "A) 随着对s的首次访问次数趋于无穷，V(s)收敛到V^pi(s)",
      "B) 它在有限回合内对任何策略收敛",
      "C) 它仅对确定性策略收敛",
      "D) 它收敛到V^pi和V*的平均值"
    ],
    answer: 0,
    explanation: "By the law of large numbers, the average of i.i.d. returns from first visits to state s converges to the expected return E[G_t|S_t=s] = V^pi(s) as the number of visits approaches infinity. The convergence rate follows the central limit theorem, with the estimation error decreasing as O(1/sqrt(n)) where n is the visit count.",
    explanationChinese: "根据大数定律，来自首次访问状态s的独立同分布回报的平均值随着访问次数趋于无穷而收敛到期望回报E[G_t|S_t=s] = V^pi(s)。收敛速率遵循中心极限定理，估计误差以O(1/sqrt(n))减少，其中n是访问次数。",
    diagram: "",
    terms: ["monte_carlo_method", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 117,
    q: "What is per-decision importance sampling?",
    qChinese: "什么是逐决策重要性采样？",
    options: [
      "A) Using different importance ratios for each episode",
      "B) Choosing which decisions to sample based on their importance",
      "C) Applying importance sampling at each decision point rather than to entire trajectories",
      "D) Making importance sampling decisions based on the reward magnitude"
    ],
    optionsChinese: [
      "A) 对每个回合使用不同的重要性比率",
      "B) 根据重要性选择采样哪些决策",
      "C) 在每个决策点而非对整个轨迹应用重要性采样",
      "D) 根据奖励大小做出重要性采样决策"
    ],
    answer: 2,
    explanation: "Per-decision importance sampling applies the correction ratio incrementally at each time step rather than using the full trajectory ratio. This exploits the fact that future actions are independent of past rewards to reduce the variance of the estimator. Each reward R_{t+k} is weighted only by the product of ratios up to step t+k.",
    explanationChinese: "逐决策重要性采样在每个时间步增量地应用校正比率，而不是使用完整轨迹比率。这利用了未来行动与过去奖励独立的事实来减少估计器的方差。每个奖励R_{t+k}仅由直到步骤t+k的比率乘积加权。",
    diagram: "",
    terms: ["monte_carlo_method", "exploration_exploitation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 118,
    q: "In MC methods, what is the role of a 'behavior policy'?",
    qChinese: "在MC方法中，'行为策略'的作用是什么？",
    options: [
      "A) The policy being optimized",
      "B) A policy that always behaves randomly",
      "C) The policy used to generate episodes from which the target policy is evaluated",
      "D) The optimal policy used as a reference"
    ],
    optionsChinese: [
      "A) 正在优化的策略",
      "B) 总是随机行动的策略",
      "C) 用于生成回合以评估目标策略的策略",
      "D) 用作参考的最优策略"
    ],
    answer: 2,
    explanation: "In off-policy MC methods, the behavior policy b generates episodes through interaction with the environment. The target policy pi is evaluated using the data from b via importance sampling. The behavior policy must have coverage—it must assign nonzero probability to every action that pi would take.",
    explanationChinese: "在离策略MC方法中，行为策略b通过与环境交互生成回合。目标策略pi使用来自b的数据通过重要性采样进行评估。行为策略必须有覆盖性——它必须对pi会采取的每个行动分配非零概率。",
    diagram: "",
    terms: ["monte_carlo_method", "exploration_exploitation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 119,
    q: "What makes Monte Carlo methods particularly useful for state spaces where only a few states are relevant?",
    qChinese: "是什么使蒙特卡罗方法对于只有少数状态相关的状态空间特别有用？",
    options: [
      "A) MC methods automatically ignore irrelevant states",
      "B) MC methods always converge faster with fewer states",
      "C) MC methods use less memory than DP for any state space size",
      "D) MC methods can estimate values for individual states independently, without needing to evaluate all states"
    ],
    optionsChinese: [
      "A) MC方法自动忽略不相关的状态",
      "B) MC方法在更少状态时总是更快收敛",
      "C) MC方法对任何状态空间大小都比DP使用更少内存",
      "D) MC方法可以独立估计单个状态的值，无需评估所有状态"
    ],
    answer: 3,
    explanation: "MC methods estimate value functions from sampled experience, so they naturally focus on states that are actually visited. They do not need to sweep over the entire state space like DP methods. This makes MC efficient when the state space is large but only a small fraction of states are practically reachable.",
    explanationChinese: "MC方法从采样经验中估计价值函数，因此它们自然地关注实际访问的状态。它们不需要像DP方法那样扫描整个状态空间。当状态空间很大但只有一小部分状态实际上可达时，这使MC很高效。",
    diagram: "",
    terms: ["monte_carlo_method", "state_space"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 120,
    q: "How does the 'every-visit' MC method handle multiple visits to the same state in one episode?",
    qChinese: "每次访问MC方法如何处理一个回合中对同一状态的多次访问？",
    options: [
      "A) It ignores all visits after the first",
      "B) It only uses the last visit in each episode",
      "C) It includes the return from every visit to the state in its average estimate",
      "D) It averages the returns of the first and last visit"
    ],
    optionsChinese: [
      "A) 它忽略第一次之后的所有访问",
      "B) 它只使用每个回合中的最后一次访问",
      "C) 它在其平均估计中包括对状态的每次访问的回报",
      "D) 它对第一次和最后一次访问的回报取平均"
    ],
    answer: 2,
    explanation: "Every-visit MC includes the return G_t from every time the state is visited, even multiple times within the same episode. If state s is visited at times t1, t2, t3 in one episode, all three returns G_{t1}, G_{t2}, G_{t3} contribute to the running average. While the samples within an episode are not independent, convergence still holds.",
    explanationChinese: "每次访问MC包括每次访问状态时的回报G_t，即使在同一回合中多次访问。如果状态s在一个回合中在时间t1、t2、t3被访问，所有三个回报G_{t1}、G_{t2}、G_{t3}都贡献到运行平均值。虽然同一回合中的样本不独立，但收敛性仍然成立。",
    diagram: "",
    terms: ["monte_carlo_method", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 121,
    q: "What is TD(0) learning?",
    qChinese: "什么是TD(0)学习？",
    options: [
      "A) A Monte Carlo method that uses zero-step returns",
      "B) A Q-learning variant with zero exploration",
      "C) A dynamic programming method with zero error tolerance",
      "D) A temporal difference method that updates value estimates using one-step bootstrapped targets: V(s) <- V(s) + alpha*[R + gamma*V(s') - V(s)]"
    ],
    optionsChinese: [
      "A) 使用零步回报的蒙特卡罗方法",
      "B) 零探索的Q-learning变体",
      "C) 误差容限为零的动态规划方法",
      "D) 使用一步自举目标更新价值估计的时间差分方法：V(s) <- V(s) + alpha*[R + gamma*V(s') - V(s)]"
    ],
    answer: 3,
    explanation: "TD(0) updates the value of a state immediately after a single transition using the TD target R + gamma*V(s'). The TD error delta = R + gamma*V(s') - V(s) measures the surprise between the estimated and bootstrapped value. TD(0) combines the sampling advantage of MC with the bootstrapping advantage of DP.",
    explanationChinese: "TD(0)在单次转移后立即使用TD目标R + gamma*V(s')更新状态的值。TD误差delta = R + gamma*V(s') - V(s)衡量估计值和自举值之间的意外。TD(0)结合了MC的采样优势和DP的自举优势。",
    diagram: "",
    terms: ["temporal_difference", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 122,
    q: "What is the TD error (delta_t)?",
    qChinese: "什么是TD误差（delta_t）？",
    options: [
      "A) The total discounted reward in an episode",
      "B) delta_t = R_{t+1} + gamma*V(S_{t+1}) - V(S_t), the difference between the bootstrapped target and current estimate",
      "C) The gradient of the loss function",
      "D) The difference between Q-values of two actions"
    ],
    optionsChinese: [
      "A) 一个回合中的总折扣奖励",
      "B) delta_t = R_{t+1} + gamma*V(S_{t+1}) - V(S_t)，自举目标与当前估计之间的差异",
      "C) 损失函数的梯度",
      "D) 两个行动的Q值之间的差异"
    ],
    answer: 1,
    explanation: "The TD error delta_t = R_{t+1} + gamma*V(S_{t+1}) - V(S_t) quantifies the prediction error at time t. If V is accurate, the expected TD error is zero. The TD error drives learning in TD methods and is also used in eligibility traces and actor-critic algorithms. It can be viewed as a sample of the Bellman residual.",
    explanationChinese: "TD误差delta_t = R_{t+1} + gamma*V(S_{t+1}) - V(S_t)量化时间t的预测误差。如果V准确，期望TD误差为零。TD误差驱动TD方法中的学习，也用于资格迹和演员-评论家算法。它可以被视为贝尔曼残差的样本。",
    diagram: "",
    terms: ["temporal_difference", "value_function", "actor_critic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 123,
    q: "What is SARSA?",
    qChinese: "什么是SARSA？",
    options: [
      "A) A model-based RL algorithm",
      "B) A variant of Monte Carlo tree search",
      "C) A policy gradient method for continuous actions",
      "D) An on-policy TD control algorithm that updates Q(s,a) using the tuple (S, A, R, S', A')"
    ],
    optionsChinese: [
      "A) 基于模型的RL算法",
      "B) 蒙特卡罗树搜索的变体",
      "C) 用于连续行动的策略梯度方法",
      "D) 使用元组(S, A, R, S', A')更新Q(s,a)的在策略TD控制算法"
    ],
    answer: 3,
    explanation: "SARSA (State-Action-Reward-State-Action) is an on-policy TD control method. Its update rule is Q(S,A) <- Q(S,A) + alpha*[R + gamma*Q(S',A') - Q(S,A)], where A' is the actual next action taken under the current policy. Being on-policy, SARSA learns the value of the policy it follows, including exploration.",
    explanationChinese: "SARSA（状态-行动-奖励-状态-行动）是一种在策略TD控制方法。其更新规则为Q(S,A) <- Q(S,A) + alpha*[R + gamma*Q(S',A') - Q(S,A)]，其中A'是在当前策略下实际采取的下一个行动。作为在策略方法，SARSA学习其所遵循策略的价值，包括探索。",
    diagram: "",
    terms: ["temporal_difference", "q_learning", "epsilon_greedy"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 124,
    q: "What is Q-Learning?",
    qChinese: "什么是Q-Learning？",
    options: [
      "A) An on-policy TD control algorithm",
      "B) An off-policy TD control algorithm that updates Q(s,a) toward R + gamma*max_{a'} Q(s',a')",
      "C) A Monte Carlo method for Q-value estimation",
      "D) A model-based planning algorithm"
    ],
    optionsChinese: [
      "A) 在策略TD控制算法",
      "B) 向R + gamma*max_{a'} Q(s',a')更新Q(s,a)的离策略TD控制算法",
      "C) 用于Q值估计的蒙特卡罗方法",
      "D) 基于模型的规划算法"
    ],
    answer: 1,
    explanation: "Q-Learning uses the update Q(S,A) <- Q(S,A) + alpha*[R + gamma*max_{a'}Q(S',a') - Q(S,A)]. The max operator makes it off-policy: it learns Q* regardless of the behavior policy. Q-Learning directly approximates the Bellman optimality equation. It converges to Q* with probability 1 given sufficient exploration and decaying learning rates.",
    explanationChinese: "Q-Learning使用更新Q(S,A) <- Q(S,A) + alpha*[R + gamma*max_{a'}Q(S',a') - Q(S,A)]。max算子使其成为离策略：无论行为策略如何，它都学习Q*。Q-Learning直接近似贝尔曼最优方程。在充分探索和递减学习率下，它以概率1收敛到Q*。",
    diagram: "",
    terms: ["q_learning", "temporal_difference", "exploration_exploitation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 125,
    q: "What is the key difference between SARSA and Q-Learning?",
    qChinese: "SARSA和Q-Learning的关键区别是什么？",
    options: [
      "A) SARSA uses the actual next action (on-policy); Q-Learning uses the max over next actions (off-policy)",
      "B) SARSA uses neural networks; Q-Learning uses tables",
      "C) SARSA is model-based; Q-Learning is model-free",
      "D) SARSA converges; Q-Learning does not"
    ],
    optionsChinese: [
      "A) SARSA使用实际的下一个行动（在策略）；Q-Learning使用下一个行动的最大值（离策略）",
      "B) SARSA使用神经网络；Q-Learning使用表格",
      "C) SARSA是基于模型的；Q-Learning是无模型的",
      "D) SARSA收敛；Q-Learning不收敛"
    ],
    answer: 0,
    explanation: "The critical difference is in the target: SARSA uses Q(S',A') where A' is the actual action taken (on-policy), while Q-Learning uses max_{a'} Q(S',a') (off-policy). This means SARSA learns a safer policy that accounts for exploration noise, while Q-Learning learns the optimal policy directly regardless of exploration.",
    explanationChinese: "关键区别在于目标：SARSA使用Q(S',A')其中A'是实际采取的行动（在策略），而Q-Learning使用max_{a'} Q(S',a')（离策略）。这意味着SARSA学习一个考虑探索噪声的更安全的策略，而Q-Learning不管探索如何直接学习最优策略。",
    diagram: "",
    terms: ["q_learning", "temporal_difference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 126,
    q: "What is Expected SARSA?",
    qChinese: "什么是期望SARSA？",
    options: [
      "A) A TD method that uses the expected Q-value under the policy instead of a single sampled next action",
      "B) SARSA with expected rewards instead of sampled rewards",
      "C) SARSA applied to expected value models",
      "D) A variant of Q-Learning with random exploration"
    ],
    optionsChinese: [
      "A) 使用策略下的期望Q值而非单个采样下一行动的TD方法",
      "B) 使用期望奖励而非采样奖励的SARSA",
      "C) 应用于期望值模型的SARSA",
      "D) 具有随机探索的Q-Learning变体"
    ],
    answer: 0,
    explanation: "Expected SARSA uses the update target R + gamma * sum_{a'} pi(a'|S') * Q(S',a') instead of a single sampled Q(S',A'). This reduces variance compared to SARSA by taking the expectation over next actions. When pi is greedy, Expected SARSA becomes Q-Learning. It can be either on-policy or off-policy.",
    explanationChinese: "期望SARSA使用更新目标R + gamma * sum_{a'} pi(a'|S') * Q(S',a')而非单个采样的Q(S',A')。通过对下一行动取期望，这比SARSA减少了方差。当pi是贪心时，期望SARSA变为Q-Learning。它可以是在策略或离策略的。",
    diagram: "",
    terms: ["temporal_difference", "q_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 127,
    q: "What are eligibility traces in TD learning?",
    qChinese: "TD学习中的资格迹是什么？",
    options: [
      "A) Records of which states are eligible for update in the current episode",
      "B) A mechanism that combines TD and MC by maintaining a decaying trace for recently visited states",
      "C) The history of actions taken by the agent",
      "D) A method for tracking which states have been visited"
    ],
    optionsChinese: [
      "A) 当前回合中哪些状态有资格更新的记录",
      "B) 通过为最近访问的状态维护衰减迹来结合TD和MC的机制",
      "C) 智能体采取的行动历史",
      "D) 跟踪哪些状态已被访问的方法"
    ],
    answer: 1,
    explanation: "Eligibility traces bridge MC and TD methods by maintaining a trace e(s) for each state that decays by gamma*lambda at each step and is incremented upon visiting s. When a TD error occurs, all states with nonzero traces are updated proportionally. With lambda=0, we get TD(0); with lambda=1, we approximate MC.",
    explanationChinese: "资格迹通过为每个状态维护一个迹e(s)来桥接MC和TD方法，该迹在每一步衰减gamma*lambda并在访问s时递增。当TD误差发生时，所有具有非零迹的状态按比例更新。当lambda=0时，得到TD(0)；当lambda=1时，近似MC。",
    diagram: "",
    terms: ["temporal_difference", "monte_carlo_method"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 128,
    q: "What is TD(lambda)?",
    qChinese: "什么是TD(lambda)？",
    options: [
      "A) TD learning with learning rate lambda",
      "B) A family of TD methods parameterized by lambda that interpolates between TD(0) and Monte Carlo",
      "C) TD learning applied to lambda calculus",
      "D) A TD method that uses lambda different value functions"
    ],
    optionsChinese: [
      "A) 学习率为lambda的TD学习",
      "B) 由lambda参数化的TD方法族，在TD(0)和蒙特卡罗之间插值",
      "C) 应用于lambda演算的TD学习",
      "D) 使用lambda个不同价值函数的TD方法"
    ],
    answer: 1,
    explanation: "TD(lambda) uses the lambda-return G_t^lambda = (1-lambda) * sum_{n=1}^{inf} lambda^{n-1} * G_t^{(n)} as the update target, where G_t^{(n)} is the n-step return. Lambda=0 gives TD(0), lambda=1 gives MC. Intermediate values blend short and long-term returns, often providing better performance than either extreme.",
    explanationChinese: "TD(lambda)使用lambda-回报G_t^lambda = (1-lambda) * sum_{n=1}^{inf} lambda^{n-1} * G_t^{(n)}作为更新目标，其中G_t^{(n)}是n步回报。Lambda=0给出TD(0)，lambda=1给出MC。中间值混合了短期和长期回报，通常比两个极端提供更好的性能。",
    diagram: "",
    terms: ["temporal_difference", "monte_carlo_method"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 129,
    q: "What is n-step TD learning?",
    qChinese: "什么是n步TD学习？",
    options: [
      "A) Running TD(0) for n episodes",
      "B) Updating the value function every n steps",
      "C) Using n-step returns G_t^{(n)} = R_{t+1} + gamma*R_{t+2} + ... + gamma^{n-1}*R_{t+n} + gamma^n*V(S_{t+n}) as the update target",
      "D) Using n different learning rates"
    ],
    optionsChinese: [
      "A) 运行TD(0) n个回合",
      "B) 每n步更新一次价值函数",
      "C) 使用n步回报G_t^{(n)} = R_{t+1} + gamma*R_{t+2} + ... + gamma^{n-1}*R_{t+n} + gamma^n*V(S_{t+n})作为更新目标",
      "D) 使用n个不同的学习率"
    ],
    answer: 2,
    explanation: "N-step TD uses a target that includes n actual rewards before bootstrapping from V(S_{t+n}). With n=1, it is TD(0); as n approaches the episode length, it approaches MC. N-step methods offer a useful intermediate between the low variance of TD(0) and the low bias of MC, with the optimal n being problem-dependent.",
    explanationChinese: "N步TD使用包含n个实际奖励的目标，然后从V(S_{t+n})自举。当n=1时，它是TD(0)；当n接近回合长度时，它接近MC。N步方法提供了TD(0)的低方差和MC的低偏差之间的有用中间地带，最优n取决于问题。",
    diagram: "",
    terms: ["temporal_difference", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 130,
    q: "Why is Q-Learning called an 'off-policy' method?",
    qChinese: "为什么Q-Learning被称为'离策略'方法？",
    options: [
      "A) Because the behavior policy generating data can differ from the greedy target policy being learned",
      "B) Because it does not use a policy at all",
      "C) Because it learns offline from stored data",
      "D) Because it operates outside the standard MDP framework"
    ],
    optionsChinese: [
      "A) 因为生成数据的行为策略可以与正在学习的贪心目标策略不同",
      "B) 因为它根本不使用策略",
      "C) 因为它从存储的数据离线学习",
      "D) 因为它在标准MDP框架之外运行"
    ],
    answer: 0,
    explanation: "Q-Learning is off-policy because it updates Q-values toward the maximum Q-value at the next state (greedy target policy), regardless of which action was actually taken by the behavior policy. The agent can follow an epsilon-greedy behavior policy while learning the optimal Q* directly, enabling data reuse and experience replay.",
    explanationChinese: "Q-Learning是离策略的，因为它将Q值向下一个状态的最大Q值（贪心目标策略）更新，而不管行为策略实际采取了哪个行动。智能体可以遵循epsilon-贪心行为策略同时直接学习最优Q*，实现数据复用和经验回放。",
    diagram: "",
    terms: ["q_learning", "exploration_exploitation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 131,
    q: "What is the 'cliff walking' example used to demonstrate in RL?",
    qChinese: "在RL中，'悬崖行走'示例用于演示什么？",
    options: [
      "A) The behavioral difference between SARSA (safer path) and Q-Learning (optimal but riskier path near the cliff)",
      "B) The superiority of deep RL over tabular methods",
      "C) How Monte Carlo methods handle sparse rewards",
      "D) The convergence of value iteration"
    ],
    optionsChinese: [
      "A) SARSA（更安全的路径）和Q-Learning（靠近悬崖的最优但更危险的路径）之间的行为差异",
      "B) 深度RL优于表格方法",
      "C) 蒙特卡罗方法如何处理稀疏奖励",
      "D) 价值迭代的收敛性"
    ],
    answer: 0,
    explanation: "The cliff walking example illustrates how on-policy SARSA learns a safer path away from the cliff edge (accounting for epsilon-greedy exploration that might cause falls), while off-policy Q-Learning learns the optimal shortest path along the cliff edge. This demonstrates the practical difference between on-policy and off-policy control.",
    explanationChinese: "悬崖行走示例说明了在策略SARSA如何学习远离悬崖边缘的更安全路径（考虑到可能导致坠落的epsilon-贪心探索），而离策略Q-Learning学习沿悬崖边缘的最优最短路径。这演示了在策略和离策略控制的实际差异。",
    diagram: "",
    terms: ["q_learning", "temporal_difference", "epsilon_greedy"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 132,
    q: "What is Double Q-Learning and what problem does it address?",
    qChinese: "什么是双Q-Learning，它解决什么问题？",
    options: [
      "A) Using two different learning rates for positive and negative TD errors",
      "B) Running Q-Learning twice with different random seeds",
      "C) Using two separate Q-tables to address the maximization bias in standard Q-Learning",
      "D) Training two agents simultaneously to compete against each other"
    ],
    optionsChinese: [
      "A) 对正TD误差和负TD误差使用两个不同的学习率",
      "B) 用不同的随机种子运行Q-Learning两次",
      "C) 使用两个独立的Q表来解决标准Q-Learning中的最大化偏差",
      "D) 同时训练两个智能体互相竞争"
    ],
    answer: 2,
    explanation: "Standard Q-Learning uses max_a Q(s',a) which overestimates Q-values because it uses the same values to both select and evaluate actions (maximization bias). Double Q-Learning addresses this by maintaining two Q-tables: one for action selection and the other for evaluation. This decoupling reduces overestimation significantly.",
    explanationChinese: "标准Q-Learning使用max_a Q(s',a)，由于使用相同的值来选择和评估行动（最大化偏差），会高估Q值。双Q-Learning通过维护两个Q表来解决这个问题：一个用于行动选择，另一个用于评估。这种解耦显著减少了高估。",
    diagram: "",
    terms: ["q_learning", "deep_q_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 133,
    q: "What is the maximization bias in Q-Learning?",
    qChinese: "Q-Learning中的最大化偏差是什么？",
    options: [
      "A) The tendency to always choose the maximum reward",
      "B) The systematic overestimation of Q-values caused by using max over noisy estimates",
      "C) The bias toward exploring states with higher estimated values",
      "D) The preference for larger action spaces"
    ],
    optionsChinese: [
      "A) 总是选择最大奖励的倾向",
      "B) 由于对噪声估计取最大值而导致的Q值系统性高估",
      "C) 偏向于探索估计值更高的状态",
      "D) 对更大行动空间的偏好"
    ],
    answer: 1,
    explanation: "Maximization bias occurs because E[max_a Q(s,a)] >= max_a E[Q(s,a)] when Q-values contain estimation noise. The max operator selects the action with the highest noisy estimate, which tends to be positively biased. This can lead Q-Learning to overvalue suboptimal actions and converge slower than necessary.",
    explanationChinese: "最大化偏差发生是因为当Q值包含估计噪声时E[max_a Q(s,a)] >= max_a E[Q(s,a)]。max算子选择具有最高噪声估计的行动，这往往是正偏的。这可能导致Q-Learning高估次优行动并比必要时更慢收敛。",
    diagram: "",
    terms: ["q_learning", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 134,
    q: "What convergence conditions does Q-Learning require?",
    qChinese: "Q-Learning需要什么收敛条件？",
    options: [
      "A) All state-action pairs must be visited infinitely often, and the learning rate must satisfy sum(alpha_t) = inf and sum(alpha_t^2) < inf",
      "B) Only a large enough replay buffer",
      "C) The policy must be deterministic",
      "D) The environment must be deterministic"
    ],
    optionsChinese: [
      "A) 所有状态-行动对必须被无限次访问，学习率必须满足sum(alpha_t) = inf和sum(alpha_t^2) < inf",
      "B) 只需要足够大的回放缓冲区",
      "C) 策略必须是确定性的",
      "D) 环境必须是确定性的"
    ],
    answer: 0,
    explanation: "Q-Learning converges to Q* with probability 1 under two conditions: (1) every state-action pair is visited infinitely often (continued exploration), and (2) the learning rate satisfies the Robbins-Monro conditions (sum = infinity, sum of squares < infinity). These ensure sufficient exploration and proper averaging of estimates.",
    explanationChinese: "Q-Learning在两个条件下以概率1收敛到Q*：(1)每个状态-行动对被无限次访问（持续探索），(2)学习率满足Robbins-Monro条件（和=无穷大，平方和<无穷大）。这些确保了充分的探索和估计的正确平均。",
    diagram: "",
    terms: ["q_learning", "exploration_exploitation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 135,
    q: "What advantage does TD learning have over Monte Carlo for online learning?",
    qChinese: "TD学习相对于蒙特卡罗在在线学习方面有什么优势？",
    options: [
      "A) TD always has lower bias",
      "B) TD does not require a discount factor",
      "C) TD can update values at every time step without waiting for episode completion",
      "D) TD guarantees faster convergence"
    ],
    optionsChinese: [
      "A) TD总是有更低的偏差",
      "B) TD不需要折扣因子",
      "C) TD可以在每个时间步更新值而无需等待回合完成",
      "D) TD保证更快收敛"
    ],
    answer: 2,
    explanation: "TD methods update value estimates after every transition, enabling online and incremental learning. They do not need to wait for episode termination, making them applicable to continuing tasks and allowing faster initial learning within episodes. This is a significant practical advantage over MC methods in real-time applications.",
    explanationChinese: "TD方法在每次转移后更新价值估计，实现在线和增量学习。它们不需要等待回合终止，使其适用于持续任务并允许在回合内更快地初始学习。在实时应用中，这是相对于MC方法的显著实际优势。",
    diagram: "",
    terms: ["temporal_difference", "monte_carlo_method"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 136,
    q: "What is the 'windy gridworld' example used to illustrate?",
    qChinese: "'有风网格世界'示例用于说明什么？",
    options: [
      "A) SARSA applied to a navigation task with stochastic wind effects",
      "B) Deep reinforcement learning",
      "C) Monte Carlo tree search",
      "D) Value iteration convergence"
    ],
    optionsChinese: [
      "A) 应用于具有随机风效应的导航任务的SARSA",
      "B) 深度强化学习",
      "C) 蒙特卡罗树搜索",
      "D) 价值迭代收敛"
    ],
    answer: 0,
    explanation: "The windy gridworld is a standard example where an agent navigates a grid with columns that apply upward wind of varying strength. It demonstrates how SARSA (or Q-Learning) can learn optimal paths in environments with stochastic effects. The agent must learn to compensate for wind while finding the shortest path to the goal.",
    explanationChinese: "有风网格世界是一个标准示例，智能体在具有不同强度向上风的列的网格中导航。它演示了SARSA（或Q-Learning）如何在具有随机效应的环境中学习最优路径。智能体必须学会在寻找到目标的最短路径时补偿风。",
    diagram: "",
    terms: ["temporal_difference", "q_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 137,
    q: "What is the role of the learning rate (alpha) in TD updates?",
    qChinese: "TD更新中学习率（alpha）的作用是什么？",
    options: [
      "A) It controls how much the new information overrides the old estimate",
      "B) It determines the discount factor",
      "C) It sets the probability of exploration",
      "D) It defines the number of episodes to train"
    ],
    optionsChinese: [
      "A) 它控制新信息覆盖旧估计的程度",
      "B) 它决定折扣因子",
      "C) 它设置探索的概率",
      "D) 它定义训练的回合数"
    ],
    answer: 0,
    explanation: "The learning rate alpha in V(s) <- V(s) + alpha*delta controls the step size of each update. A larger alpha means faster learning but more sensitivity to noise. A smaller alpha means slower but more stable learning. For convergence guarantees, alpha should decrease over time satisfying the Robbins-Monro conditions.",
    explanationChinese: "V(s) <- V(s) + alpha*delta中的学习率alpha控制每次更新的步长。较大的alpha意味着更快的学习但对噪声更敏感。较小的alpha意味着更慢但更稳定的学习。对于收敛保证，alpha应随时间递减并满足Robbins-Monro条件。",
    diagram: "",
    terms: ["temporal_difference", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 138,
    q: "What is the relationship between TD(0), MC, and DP methods?",
    qChinese: "TD(0)、MC和DP方法之间的关系是什么？",
    options: [
      "A) TD combines the sampling of MC (no model needed) with the bootstrapping of DP (one-step updates)",
      "B) They are completely unrelated approaches",
      "C) DP is a special case of MC, which is a special case of TD",
      "D) TD requires both a model and complete episodes"
    ],
    optionsChinese: [
      "A) TD结合了MC的采样（不需要模型）和DP的自举（一步更新）",
      "B) 它们是完全不相关的方法",
      "C) DP是MC的特例，MC是TD的特例",
      "D) TD既需要模型又需要完整回合"
    ],
    answer: 0,
    explanation: "TD methods are at the intersection of MC and DP. Like MC, they learn from experience without a model (sampling). Like DP, they update estimates based on other estimates (bootstrapping). TD does not need complete episodes (unlike MC) or a model (unlike DP), giving it practical advantages in many settings.",
    explanationChinese: "TD方法是MC和DP的交叉。像MC一样，它们从经验中学习而不需要模型（采样）。像DP一样，它们基于其他估计更新估计（自举）。TD不需要完整回合（不像MC）或模型（不像DP），这在许多设置中给予它实际优势。",
    diagram: "",
    terms: ["temporal_difference", "monte_carlo_method", "model_based_rl"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 139,
    q: "What is 'experience replay' and why is it important?",
    qChinese: "什么是'经验回放'，为什么它重要？",
    options: [
      "A) Replaying successful episodes to reinforce good behavior",
      "B) Reviewing the training log for debugging",
      "C) Re-running the environment with the same random seed",
      "D) Storing past transitions in a buffer and sampling random mini-batches for training to break correlations"
    ],
    optionsChinese: [
      "A) 回放成功的回合以强化良好行为",
      "B) 查看训练日志进行调试",
      "C) 使用相同的随机种子重新运行环境",
      "D) 将过去的转移存储在缓冲区中并采样随机小批量进行训练以打破相关性"
    ],
    answer: 3,
    explanation: "Experience replay stores transitions (s, a, r, s') in a buffer and randomly samples mini-batches for learning updates. This breaks the temporal correlation between consecutive samples, improves sample efficiency by reusing data, and stabilizes training of neural network function approximators. It is a key ingredient in DQN.",
    explanationChinese: "经验回放将转移(s, a, r, s')存储在缓冲区中并随机采样小批量进行学习更新。这打破了连续样本之间的时间相关性，通过复用数据提高样本效率，并稳定神经网络函数逼近器的训练。它是DQN的关键成分。",
    diagram: "",
    terms: ["deep_q_network", "q_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 140,
    q: "What is SARSA(lambda)?",
    qChinese: "什么是SARSA(lambda)？",
    options: [
      "A) SARSA combined with eligibility traces to achieve n-step-like updates in an online fashion",
      "B) SARSA with a learning rate of lambda",
      "C) A deep learning version of SARSA",
      "D) SARSA applied to lambda-armed bandits"
    ],
    optionsChinese: [
      "A) SARSA与资格迹结合以在线方式实现类n步更新",
      "B) 学习率为lambda的SARSA",
      "C) SARSA的深度学习版本",
      "D) 应用于lambda臂老虎机的SARSA"
    ],
    answer: 0,
    explanation: "SARSA(lambda) extends SARSA with eligibility traces, updating all recently visited state-action pairs proportionally to their trace values whenever a TD error occurs. Lambda=0 gives standard SARSA; lambda=1 gives an MC-like method. The traces enable efficient credit assignment over multiple time steps in a single online update.",
    explanationChinese: "SARSA(lambda)用资格迹扩展了SARSA，每当TD误差发生时，按其迹值的比例更新所有最近访问的状态-行动对。Lambda=0给出标准SARSA；lambda=1给出类MC方法。迹在单次在线更新中实现了多个时间步的高效信用分配。",
    diagram: "",
    terms: ["temporal_difference", "q_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 141,
    q: "What is the 'deadly triad' in reinforcement learning?",
    qChinese: "强化学习中的'致命三角'是什么？",
    options: [
      "A) The combination of exploration, exploitation, and optimization",
      "B) The three main components of an MDP",
      "C) The three types of RL: model-free, model-based, and hybrid",
      "D) The combination of function approximation, bootstrapping, and off-policy training that can cause instability"
    ],
    optionsChinese: [
      "A) 探索、利用和优化的组合",
      "B) MDP的三个主要组成部分",
      "C) RL的三种类型：无模型、基于模型和混合",
      "D) 可能导致不稳定性的函数逼近、自举和离策略训练的组合"
    ],
    answer: 3,
    explanation: "The deadly triad refers to the combination of (1) function approximation, (2) bootstrapping, and (3) off-policy learning. When all three are present, learning can diverge—value estimates may grow without bound. This is a fundamental challenge in RL theory. Techniques like target networks and gradient clipping help mitigate this issue.",
    explanationChinese: "致命三角指(1)函数逼近、(2)自举和(3)离策略学习的组合。当三者同时存在时，学习可能发散——价值估计可能无限增长。这是RL理论中的基本挑战。目标网络和梯度裁剪等技术有助于缓解这个问题。",
    diagram: "",
    terms: ["temporal_difference", "deep_q_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 142,
    q: "What is 'Watkins's Q(lambda)'?",
    qChinese: "什么是'Watkins的Q(lambda)'？",
    options: [
      "A) Q-Learning with a variable learning rate",
      "B) Q-Learning with eligibility traces that are cut to zero whenever an exploratory (non-greedy) action is taken",
      "C) Q-Learning with lambda parallel processes",
      "D) Q-Learning applied to lambda-step environments"
    ],
    optionsChinese: [
      "A) 具有可变学习率的Q-Learning",
      "B) 具有资格迹的Q-Learning，每当采取探索性（非贪心）行动时迹被截断为零",
      "C) 具有lambda个并行过程的Q-Learning",
      "D) 应用于lambda步环境的Q-Learning"
    ],
    answer: 1,
    explanation: "Watkins's Q(lambda) combines Q-Learning with eligibility traces. The traces decay normally when greedy actions are taken but are cut to zero when an exploratory action occurs. This cutting is needed because after an exploratory action, the return no longer reflects the greedy target policy, making the trace inappropriate.",
    explanationChinese: "Watkins的Q(lambda)将Q-Learning与资格迹结合。当采取贪心行动时迹正常衰减，但当探索性行动发生时迹被截断为零。这种截断是必要的，因为在探索性行动之后，回报不再反映贪心目标策略，使迹不合适。",
    diagram: "",
    terms: ["q_learning", "temporal_difference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 143,
    q: "What is the TD fixed-point for linear function approximation?",
    qChinese: "线性函数逼近的TD不动点是什么？",
    options: [
      "A) The parameter vector that makes all TD errors exactly zero",
      "B) The parameter vector w where the expected TD update is zero: E[delta * phi(s)] = 0",
      "C) The globally optimal weight vector for the value function",
      "D) A fixed learning rate that guarantees convergence"
    ],
    optionsChinese: [
      "A) 使所有TD误差恰好为零的参数向量",
      "B) 期望TD更新为零的参数向量w：E[delta * phi(s)] = 0",
      "C) 价值函数的全局最优权重向量",
      "D) 保证收敛的固定学习率"
    ],
    answer: 1,
    explanation: "For linear function approximation V(s) = w^T * phi(s), the TD fixed-point w_TD satisfies E[delta_t * phi(S_t)] = 0, where delta_t is the TD error. This is not the same as the least-squares solution but can be shown to have bounded error: ||V_{w_TD} - V^pi|| <= (1/(1-gamma)) * ||V_best - V^pi||.",
    explanationChinese: "对于线性函数逼近V(s) = w^T * phi(s)，TD不动点w_TD满足E[delta_t * phi(S_t)] = 0，其中delta_t是TD误差。这与最小二乘解不同，但可以证明有有界误差：||V_{w_TD} - V^pi|| <= (1/(1-gamma)) * ||V_best - V^pi||。",
    diagram: "",
    terms: ["temporal_difference", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 144,
    q: "What is the Retrace(lambda) algorithm?",
    qChinese: "什么是Retrace(lambda)算法？",
    options: [
      "A) A safe off-policy TD algorithm that uses truncated importance sampling ratios with eligibility traces",
      "B) An algorithm that retraces the agent's path in the environment",
      "C) A method for backtracking in tree search",
      "D) An algorithm that traces the gradient path during optimization"
    ],
    optionsChinese: [
      "A) 使用截断重要性采样比率和资格迹的安全离策略TD算法",
      "B) 在环境中回溯智能体路径的算法",
      "C) 树搜索中回溯的方法",
      "D) 在优化过程中追踪梯度路径的算法"
    ],
    answer: 0,
    explanation: "Retrace(lambda) is an off-policy multi-step TD algorithm that clips importance sampling ratios to min(1, pi/b), ensuring low variance and guaranteed convergence. Unlike Watkins's Q(lambda), it does not cut traces entirely on exploratory actions but uses truncated ratios, allowing it to use full-length traces while remaining stable.",
    explanationChinese: "Retrace(lambda)是一种离策略多步TD算法，将重要性采样比率裁剪到min(1, pi/b)，确保低方差和保证收敛。与Watkins的Q(lambda)不同，它不会在探索性行动时完全截断迹，而是使用截断比率，允许使用全长度迹同时保持稳定。",
    diagram: "",
    terms: ["temporal_difference", "exploration_exploitation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 145,
    q: "What is the difference between 'replacing' and 'accumulating' eligibility traces?",
    qChinese: "'替换'资格迹和'累积'资格迹有什么区别？",
    options: [
      "A) Replacing traces are faster to compute; accumulating traces are slower",
      "B) There is no practical difference between them",
      "C) Replacing traces work only with TD; accumulating traces work only with MC",
      "D) Accumulating traces add 1 on each visit; replacing traces reset to 1, preventing multiple counting"
    ],
    optionsChinese: [
      "A) 替换迹计算更快；累积迹更慢",
      "B) 它们之间没有实际差异",
      "C) 替换迹只与TD一起工作；累积迹只与MC一起工作",
      "D) 累积迹在每次访问时加1；替换迹重置为1，防止多次计数"
    ],
    answer: 3,
    explanation: "Accumulating traces increment e(s) by 1 on each visit: e(s) = gamma*lambda*e(s) + 1. Replacing traces set e(s) to 1 on each visit: e(s) = 1. Replacing traces prevent the trace from growing large for frequently visited states, which can improve performance in practice. Dutch traces provide a mathematical compromise.",
    explanationChinese: "累积迹在每次访问时将e(s)增加1：e(s) = gamma*lambda*e(s) + 1。替换迹在每次访问时将e(s)设为1：e(s) = 1。替换迹防止频繁访问状态的迹变得过大，这在实践中可以改善性能。荷兰迹提供了数学上的折中。",
    diagram: "",
    terms: ["temporal_difference", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 146,
    q: "What is the 'random walk' example used to demonstrate in TD learning?",
    qChinese: "'随机游走'示例在TD学习中用于演示什么？",
    options: [
      "A) How TD(0) can learn value predictions faster than MC from the same experience",
      "B) Deep reinforcement learning techniques",
      "C) Multi-agent coordination strategies",
      "D) The limitations of Q-Learning"
    ],
    optionsChinese: [
      "A) TD(0)如何从相同经验中比MC更快地学习价值预测",
      "B) 深度强化学习技术",
      "C) 多智能体协调策略",
      "D) Q-Learning的局限性"
    ],
    answer: 0,
    explanation: "The random walk example (5 or 19 states between two terminal states) demonstrates that TD(0) typically learns more accurate value estimates faster than constant-alpha MC from the same amount of experience. This illustrates TD's advantage of bootstrapping—using interim estimates to propagate value information immediately.",
    explanationChinese: "随机游走示例（两个终止状态之间的5或19个状态）演示了TD(0)通常从相同数量的经验中比常数alpha MC更快地学习更准确的价值估计。这说明了TD自举的优势——使用中间估计立即传播价值信息。",
    diagram: "",
    terms: ["temporal_difference", "monte_carlo_method", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 147,
    q: "What is batch TD learning (least-squares TD)?",
    qChinese: "什么是批量TD学习（最小二乘TD）？",
    options: [
      "A) TD learning that processes all data in one batch at the end",
      "B) Repeatedly applying TD updates to a fixed batch of experience until convergence to the TD fixed-point",
      "C) TD learning with a batch normalization layer",
      "D) Training multiple TD agents in parallel batches"
    ],
    optionsChinese: [
      "A) 在最后一次性处理所有数据的TD学习",
      "B) 对固定批次的经验反复应用TD更新直到收敛到TD不动点",
      "C) 具有批归一化层的TD学习",
      "D) 并行批次训练多个TD智能体"
    ],
    answer: 1,
    explanation: "LSTD (Least-Squares TD) computes the TD fixed-point directly from a batch of experience by solving a system of linear equations: w = A^{-1}b, where A = sum phi(s)(phi(s) - gamma*phi(s'))^T and b = sum phi(s)*r. This is more sample-efficient than incremental TD but has O(d^2) computational cost per step with d features.",
    explanationChinese: "LSTD（最小二乘TD）通过求解线性方程组从一批经验中直接计算TD不动点：w = A^{-1}b，其中A = sum phi(s)(phi(s) - gamma*phi(s'))^T，b = sum phi(s)*r。这比增量TD更具样本效率，但每步有O(d^2)计算成本，d为特征数。",
    diagram: "",
    terms: ["temporal_difference", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 148,
    q: "What is the 'taxi problem' commonly used to benchmark?",
    qChinese: "'出租车问题'通常用于基准测试什么？",
    options: [
      "A) Deep reinforcement learning algorithms",
      "B) Tabular RL methods like Q-Learning and SARSA in a discrete navigation task",
      "C) Continuous control algorithms",
      "D) Multi-agent RL systems"
    ],
    optionsChinese: [
      "A) 深度强化学习算法",
      "B) 离散导航任务中的表格RL方法，如Q-Learning和SARSA",
      "C) 连续控制算法",
      "D) 多智能体RL系统"
    ],
    answer: 1,
    explanation: "The Taxi problem is a classic discrete RL benchmark where a taxi must pick up and deliver a passenger in a grid world. It has 500 states (5x5 grid x 5 passenger locations x 4 destinations) and 6 actions. It effectively demonstrates Q-Learning and SARSA convergence and the exploration-exploitation trade-off.",
    explanationChinese: "出租车问题是经典的离散RL基准，出租车必须在网格世界中接送乘客。它有500个状态（5x5网格 x 5个乘客位置 x 4个目的地）和6个行动。它有效地演示了Q-Learning和SARSA的收敛以及探索-利用权衡。",
    diagram: "",
    terms: ["q_learning", "temporal_difference", "epsilon_greedy"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 149,
    q: "What is Gradient TD (GTD) learning?",
    qChinese: "什么是梯度TD（GTD）学习？",
    options: [
      "A) A family of TD methods that perform stochastic gradient descent on an objective function, ensuring convergence with function approximation and off-policy data",
      "B) TD learning that uses gradient descent on the value function parameters",
      "C) TD learning applied to gradient-based optimization problems",
      "D) A method that computes gradients of the TD error"
    ],
    optionsChinese: [
      "A) 对目标函数执行随机梯度下降的TD方法族，确保在函数逼近和离策略数据下收敛",
      "B) 对价值函数参数使用梯度下降的TD学习",
      "C) 应用于基于梯度的优化问题的TD学习",
      "D) 计算TD误差梯度的方法"
    ],
    answer: 0,
    explanation: "GTD methods (GTD, GTD2, TDC) perform true stochastic gradient descent on the mean-squared projected Bellman error (MSPBE). Unlike standard TD with function approximation (which is a semi-gradient method), GTD methods have convergence guarantees even with off-policy data and nonlinear function approximation.",
    explanationChinese: "GTD方法（GTD、GTD2、TDC）对均方投影贝尔曼误差（MSPBE）执行真正的随机梯度下降。与标准带函数逼近的TD（半梯度方法）不同，GTD方法即使在离策略数据和非线性函数逼近下也有收敛保证。",
    diagram: "",
    terms: ["temporal_difference", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 150,
    q: "What is the 'semi-gradient' issue in TD learning with function approximation?",
    qChinese: "带函数逼近的TD学习中的'半梯度'问题是什么？",
    options: [
      "A) Only half the gradient is computed correctly",
      "B) The gradient is computed for only half of the parameters",
      "C) The gradient magnitude is always half of the true gradient",
      "D) The TD update only differentiates the value estimate V(s), not the bootstrap target V(s'), leading to an incomplete gradient"
    ],
    optionsChinese: [
      "A) 只有一半的梯度被正确计算",
      "B) 梯度只对一半的参数计算",
      "C) 梯度幅度总是真实梯度的一半",
      "D) TD更新只对价值估计V(s)求导，不对自举目标V(s')求导，导致不完整的梯度"
    ],
    answer: 3,
    explanation: "In TD learning, the update direction is w <- w + alpha*(R + gamma*V(s';w) - V(s;w))*nabla_w V(s;w). The gradient is taken only with respect to V(s;w), treating the target R + gamma*V(s';w) as fixed. This is not a true gradient of any objective function, hence 'semi-gradient.' This can cause divergence with off-policy learning and nonlinear approximation.",
    explanationChinese: "在TD学习中，更新方向为w <- w + alpha*(R + gamma*V(s';w) - V(s;w))*nabla_w V(s;w)。梯度仅对V(s;w)取，将目标R + gamma*V(s';w)视为固定。这不是任何目标函数的真梯度，因此称为'半梯度'。这可能在离策略学习和非线性逼近下导致发散。",
    diagram: "",
    terms: ["temporal_difference", "deep_q_network", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 151,
    q: "What is DQN (Deep Q-Network)?",
    qChinese: "什么是DQN（深度Q网络）？",
    options: [
      "A) A variant of SARSA using deep neural networks",
      "B) A deep learning model for supervised classification",
      "C) Q-Learning with a deep neural network as the Q-function approximator, using experience replay and a target network",
      "D) A Monte Carlo method with deep function approximation"
    ],
    optionsChinese: [
      "A) 使用深度神经网络的SARSA变体",
      "B) 用于监督分类的深度学习模型",
      "C) 使用深度神经网络作为Q函数逼近器的Q-Learning，使用经验回放和目标网络",
      "D) 具有深度函数逼近的蒙特卡罗方法"
    ],
    answer: 2,
    explanation: "DQN (Mnih et al., 2015) approximates Q* using a deep neural network. It introduced two key innovations: experience replay (storing transitions and sampling randomly) and a target network (a periodically updated copy of Q for stable targets). DQN achieved human-level performance on many Atari games from raw pixels.",
    explanationChinese: "DQN（Mnih等，2015）使用深度神经网络逼近Q*。它引入了两个关键创新：经验回放（存储转移并随机采样）和目标网络（Q的定期更新副本以获得稳定目标）。DQN在许多Atari游戏中从原始像素实现了人类水平的性能。",
    diagram: "",
    terms: ["deep_q_network", "q_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 152,
    q: "Why is a target network needed in DQN?",
    qChinese: "为什么DQN中需要目标网络？",
    options: [
      "A) To speed up training by using a smaller network",
      "B) To double the model's capacity",
      "C) To stabilize training by providing fixed Q-value targets that do not change with every update",
      "D) To handle continuous action spaces"
    ],
    optionsChinese: [
      "A) 通过使用较小的网络来加速训练",
      "B) 将模型的容量加倍",
      "C) 通过提供不随每次更新而改变的固定Q值目标来稳定训练",
      "D) 处理连续行动空间"
    ],
    answer: 2,
    explanation: "Without a target network, the Q-Learning target R + gamma*max Q(s',a';theta) changes with every gradient step on theta, creating a moving target that can cause oscillations or divergence. The target network theta^- is updated only periodically (or via soft update), providing stable targets and greatly improving training stability.",
    explanationChinese: "没有目标网络，Q-Learning目标R + gamma*max Q(s',a';theta)随theta的每次梯度步骤而改变，创建了可能导致振荡或发散的移动目标。目标网络theta^-仅定期更新（或通过软更新），提供稳定目标并大大提高训练稳定性。",
    diagram: "",
    terms: ["deep_q_network", "q_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 153,
    q: "What is Double DQN and what problem does it solve?",
    qChinese: "什么是双DQN，它解决什么问题？",
    options: [
      "A) Using two separate environments for training",
      "B) Training two DQN agents to compete",
      "C) Using the online network to select actions and the target network to evaluate them, reducing Q-value overestimation",
      "D) Using double the batch size for training"
    ],
    optionsChinese: [
      "A) 使用两个独立的环境进行训练",
      "B) 训练两个DQN智能体竞争",
      "C) 使用在线网络选择行动，目标网络评估行动，减少Q值高估",
      "D) 使用双倍批量大小进行训练"
    ],
    answer: 2,
    explanation: "Double DQN (Van Hasselt et al., 2016) addresses the overestimation bias in DQN. Instead of using max_a Q(s',a;theta^-), it uses Q(s', argmax_a Q(s',a;theta); theta^-). The online network theta selects the best action, but the target network theta^- evaluates it, decoupling selection from evaluation.",
    explanationChinese: "双DQN（Van Hasselt等，2016）解决了DQN中的高估偏差。它不使用max_a Q(s',a;theta^-)，而使用Q(s', argmax_a Q(s',a;theta); theta^-)。在线网络theta选择最佳行动，但目标网络theta^-评估它，将选择与评估解耦。",
    diagram: "",
    terms: ["deep_q_network", "q_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 154,
    q: "What is the Dueling DQN architecture?",
    qChinese: "什么是对决DQN架构？",
    options: [
      "A) Two DQN agents competing against each other",
      "B) A DQN variant for two-player games",
      "C) An architecture that uses two loss functions",
      "D) A network architecture that separately estimates state value V(s) and advantage A(s,a), then combines them: Q(s,a) = V(s) + A(s,a)"
    ],
    optionsChinese: [
      "A) 两个DQN智能体互相竞争",
      "B) 用于双人游戏的DQN变体",
      "C) 使用两个损失函数的架构",
      "D) 分别估计状态价值V(s)和优势A(s,a)然后组合的网络架构：Q(s,a) = V(s) + A(s,a)"
    ],
    answer: 3,
    explanation: "Dueling DQN (Wang et al., 2016) splits the network into two streams: one estimates V(s) and the other estimates A(s,a). Q is computed as Q(s,a) = V(s) + A(s,a) - mean(A). This helps when many actions have similar values, as the value stream can learn the state value independently of the specific action advantages.",
    explanationChinese: "对决DQN（Wang等，2016）将网络分为两个流：一个估计V(s)，另一个估计A(s,a)。Q计算为Q(s,a) = V(s) + A(s,a) - mean(A)。当许多行动具有相似值时这很有帮助，因为价值流可以独立于特定行动优势学习状态价值。",
    diagram: "",
    terms: ["deep_q_network", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 155,
    q: "What is prioritized experience replay?",
    qChinese: "什么是优先经验回放？",
    options: [
      "A) Replaying only the most recent experiences",
      "B) Prioritizing experiences with positive rewards",
      "C) Sampling transitions with higher TD error more frequently, as they are more informative for learning",
      "D) Replaying experiences in chronological order"
    ],
    optionsChinese: [
      "A) 只回放最近的经验",
      "B) 优先处理正奖励的经验",
      "C) 更频繁地采样TD误差较高的转移，因为它们对学习更有信息量",
      "D) 按时间顺序回放经验"
    ],
    answer: 2,
    explanation: "Prioritized experience replay (Schaul et al., 2016) assigns higher sampling probability to transitions with larger TD errors |delta|. Since high-error transitions indicate surprising or poorly learned scenarios, replaying them more often accelerates learning. Importance sampling weights correct for the non-uniform sampling bias.",
    explanationChinese: "优先经验回放（Schaul等，2016）为TD误差|delta|较大的转移分配更高的采样概率。由于高误差转移表示令人惊讶或学习不佳的场景，更频繁地回放它们加速学习。重要性采样权重纠正了非均匀采样偏差。",
    diagram: "",
    terms: ["deep_q_network", "temporal_difference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 156,
    q: "What is the loss function used to train DQN?",
    qChinese: "用于训练DQN的损失函数是什么？",
    options: [
      "A) Mean squared error between Q(s,a;theta) and the target y = R + gamma*max_{a'} Q(s',a';theta^-)",
      "B) Cross-entropy loss",
      "C) Negative log-likelihood",
      "D) Hinge loss"
    ],
    optionsChinese: [
      "A) Q(s,a;theta)与目标y = R + gamma*max_{a'} Q(s',a';theta^-)之间的均方误差",
      "B) 交叉熵损失",
      "C) 负对数似然",
      "D) 铰链损失"
    ],
    answer: 0,
    explanation: "DQN minimizes L(theta) = E[(y - Q(s,a;theta))^2] where y = R + gamma*max_{a'} Q(s',a';theta^-) is the target computed using the target network. The Huber loss (smooth L1) is often used instead of MSE for robustness to outliers. Gradients are computed only with respect to theta, not theta^-.",
    explanationChinese: "DQN最小化L(theta) = E[(y - Q(s,a;theta))^2]，其中y = R + gamma*max_{a'} Q(s',a';theta^-)是使用目标网络计算的目标。Huber损失（平滑L1）通常代替MSE以对异常值具有鲁棒性。梯度仅对theta计算，不对theta^-计算。",
    diagram: "",
    terms: ["deep_q_network", "q_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 157,
    q: "What is the Rainbow DQN algorithm?",
    qChinese: "什么是Rainbow DQN算法？",
    options: [
      "A) DQN trained on a diverse set of colorful environments",
      "B) A combination of six extensions to DQN: Double, Prioritized, Dueling, n-step, Distributional, and NoisyNet",
      "C) A DQN variant that uses seven different learning rates",
      "D) A multi-task DQN that learns multiple games simultaneously"
    ],
    optionsChinese: [
      "A) 在多样化的彩色环境上训练的DQN",
      "B) DQN的六个扩展的组合：双重、优先、对决、n步、分布和NoisyNet",
      "C) 使用七个不同学习率的DQN变体",
      "D) 同时学习多个游戏的多任务DQN"
    ],
    answer: 1,
    explanation: "Rainbow (Hessel et al., 2018) combines six independent improvements to DQN: Double DQN, Prioritized Replay, Dueling Network, Multi-step Learning, Distributional RL (C51), and Noisy Networks. The combination significantly outperforms any single improvement, demonstrating that these techniques are complementary.",
    explanationChinese: "Rainbow（Hessel等，2018）结合了DQN的六个独立改进：双重DQN、优先回放、对决网络、多步学习、分布RL（C51）和噪声网络。组合显著优于任何单一改进，表明这些技术是互补的。",
    diagram: "",
    terms: ["deep_q_network", "q_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 158,
    q: "What is a NoisyNet and how does it handle exploration?",
    qChinese: "什么是NoisyNet，它如何处理探索？",
    options: [
      "A) A network trained with noisy labels",
      "B) A network trained in noisy environments",
      "C) A network that adds noise to the environment observations",
      "D) A network with learnable noise parameters added to weights, providing state-dependent exploration"
    ],
    optionsChinese: [
      "A) 使用噪声标签训练的网络",
      "B) 在噪声环境中训练的网络",
      "C) 向环境观测添加噪声的网络",
      "D) 向权重添加可学习噪声参数以提供状态依赖的探索的网络"
    ],
    answer: 3,
    explanation: "NoisyNet (Fortunato et al., 2018) replaces epsilon-greedy exploration with parametric noise injected into network weights. Each weight w = mu + sigma * epsilon where sigma is learnable and epsilon is noise sampled per forward pass. This provides learned, state-dependent exploration that automatically decreases as the network becomes more certain.",
    explanationChinese: "NoisyNet（Fortunato等，2018）用注入网络权重的参数化噪声替代epsilon-贪心探索。每个权重w = mu + sigma * epsilon，其中sigma是可学习的，epsilon是每次前向传播采样的噪声。这提供了学习的、状态依赖的探索，随着网络变得更确定自动减少。",
    diagram: "",
    terms: ["deep_q_network", "exploration_exploitation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 159,
    q: "What is the C51 algorithm in distributional RL?",
    qChinese: "分布RL中的C51算法是什么？",
    options: [
      "A) A distributional RL algorithm that models the return distribution using 51 atoms (discrete bins)",
      "B) A DQN variant that uses 51 layers",
      "C) A method that trains on 51 Atari games simultaneously",
      "D) A policy gradient method with 51 parallel workers"
    ],
    optionsChinese: [
      "A) 使用51个原子（离散箱）建模回报分布的分布RL算法",
      "B) 使用51层的DQN变体",
      "C) 同时在51个Atari游戏上训练的方法",
      "D) 具有51个并行工作者的策略梯度方法"
    ],
    answer: 0,
    explanation: "C51 (Bellemare et al., 2017) represents the return distribution using 51 equally-spaced atoms. Instead of learning E[Z(s,a)] = Q(s,a), it learns the full distribution of Z(s,a). The distributional Bellman equation is applied to update the categorical distribution. C51 significantly outperforms standard DQN on Atari benchmarks.",
    explanationChinese: "C51（Bellemare等，2017）使用51个等间距原子表示回报分布。它不是学习E[Z(s,a)] = Q(s,a)，而是学习Z(s,a)的完整分布。分布贝尔曼方程用于更新分类分布。C51在Atari基准上显著优于标准DQN。",
    diagram: "",
    terms: ["deep_q_network", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 160,
    q: "What problem does the 'soft update' (Polyak averaging) solve for target networks?",
    qChinese: "'软更新'（Polyak平均）为目标网络解决什么问题？",
    options: [
      "A) Reducing the memory requirements",
      "B) Allowing the network to handle larger batch sizes",
      "C) Speeding up the forward pass of the network",
      "D) Providing smoother target transitions by gradually blending the target network toward the online network"
    ],
    optionsChinese: [
      "A) 减少内存需求",
      "B) 允许网络处理更大的批量大小",
      "C) 加速网络的前向传播",
      "D) 通过逐渐将目标网络混合到在线网络来提供更平滑的目标转换"
    ],
    answer: 3,
    explanation: "Soft update uses theta^- <- tau*theta + (1-tau)*theta^- with small tau (e.g., 0.005) at every step instead of periodically copying the full network. This provides more stable and smoother target updates compared to hard replacement, reducing oscillations. It is the standard approach in DDPG, TD3, and SAC.",
    explanationChinese: "软更新在每一步使用theta^- <- tau*theta + (1-tau)*theta^-，其中tau很小（如0.005），而不是定期复制完整网络。与硬替换相比，这提供了更稳定和更平滑的目标更新，减少振荡。它是DDPG、TD3和SAC中的标准方法。",
    diagram: "",
    terms: ["deep_q_network", "actor_critic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 161,
    q: "What is the CNN architecture used in the original DQN for Atari games?",
    qChinese: "原始DQN中用于Atari游戏的CNN架构是什么？",
    options: [
      "A) A ResNet-50 architecture",
      "B) A single convolutional layer with global average pooling",
      "C) A transformer-based architecture",
      "D) Three convolutional layers followed by two fully-connected layers, taking stacked grayscale frames as input"
    ],
    optionsChinese: [
      "A) ResNet-50架构",
      "B) 具有全局平均池化的单个卷积层",
      "C) 基于Transformer的架构",
      "D) 三个卷积层后接两个全连接层，以堆叠的灰度帧作为输入"
    ],
    answer: 3,
    explanation: "The original DQN uses 4 stacked grayscale frames (84x84) as input to handle temporal information. The network has 3 convolutional layers (32, 64, 64 filters) followed by 2 fully-connected layers (512 units, then |A| outputs). The output layer has one node per action, giving Q(s,a) for all actions simultaneously.",
    explanationChinese: "原始DQN使用4个堆叠的灰度帧（84x84）作为输入以处理时间信息。网络有3个卷积层（32、64、64个滤波器）后接2个全连接层（512个单元，然后|A|个输出）。输出层每个行动一个节点，同时给出所有行动的Q(s,a)。",
    diagram: "",
    terms: ["deep_q_network", "q_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 162,
    q: "What is hindsight experience replay (HER)?",
    qChinese: "什么是事后经验回放（HER）？",
    options: [
      "A) Replaying only successful episodes",
      "B) Reviewing the agent's training history for debugging",
      "C) Storing only the most recent experiences",
      "D) Relabeling failed episodes with achieved goals to learn from failures in goal-conditioned tasks"
    ],
    optionsChinese: [
      "A) 只回放成功的回合",
      "B) 查看智能体的训练历史进行调试",
      "C) 只存储最近的经验",
      "D) 在目标条件任务中用实现的目标重新标记失败的回合以从失败中学习"
    ],
    answer: 3,
    explanation: "HER (Andrychowicz et al., 2017) addresses sparse reward problems in goal-conditioned RL. When the agent fails to reach the intended goal, HER relabels the experience with the actually achieved state as the goal, creating a successful experience. This dramatically improves learning efficiency in sparse-reward environments like robotic manipulation.",
    explanationChinese: "HER（Andrychowicz等，2017）解决了目标条件RL中的稀疏奖励问题。当智能体未能达到预期目标时，HER用实际达到的状态作为目标重新标记经验，创建成功的经验。这在机器人操作等稀疏奖励环境中显著提高了学习效率。",
    diagram: "",
    terms: ["deep_q_network", "reward_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 163,
    q: "Why do DQN-based methods struggle with continuous action spaces?",
    qChinese: "为什么基于DQN的方法在连续行动空间中遇到困难？",
    options: [
      "A) Because the max_a Q(s,a) operation requires searching over infinitely many actions, which is intractable",
      "B) Because neural networks cannot output continuous values",
      "C) Because continuous actions have higher variance",
      "D) Because DQN can only handle image inputs"
    ],
    optionsChinese: [
      "A) 因为max_a Q(s,a)操作需要搜索无限多个行动，这是不可行的",
      "B) 因为神经网络不能输出连续值",
      "C) 因为连续行动具有更高的方差",
      "D) 因为DQN只能处理图像输入"
    ],
    answer: 0,
    explanation: "DQN outputs Q-values for all discrete actions simultaneously and selects argmax. With continuous actions, computing max_a Q(s,a) requires solving a continuous optimization problem at every step, which is expensive. This motivates actor-critic methods like DDPG that use a separate actor network to output continuous actions directly.",
    explanationChinese: "DQN同时输出所有离散行动的Q值并选择argmax。对于连续行动，计算max_a Q(s,a)需要在每一步求解连续优化问题，这很昂贵。这促使了像DDPG这样使用单独演员网络直接输出连续行动的演员-评论家方法。",
    diagram: "",
    terms: ["deep_q_network", "actor_critic", "action_space"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 164,
    q: "What is the frame stacking technique in DQN?",
    qChinese: "DQN中的帧堆叠技术是什么？",
    options: [
      "A) Concatenating multiple consecutive frames to give the network temporal information about motion and direction",
      "B) Displaying multiple frames to the human operator",
      "C) Stacking multiple neural network layers",
      "D) Running multiple environments in parallel"
    ],
    optionsChinese: [
      "A) 连接多个连续帧以给网络关于运动和方向的时间信息",
      "B) 向人类操作员显示多个帧",
      "C) 堆叠多个神经网络层",
      "D) 并行运行多个环境"
    ],
    answer: 0,
    explanation: "Frame stacking concatenates the last k frames (typically 4) as input channels. A single frame does not contain velocity or direction information. By stacking frames, the network can infer motion (e.g., ball direction in Pong) without needing recurrent connections. This simple technique effectively provides temporal context.",
    explanationChinese: "帧堆叠将最后k帧（通常为4帧）连接为输入通道。单个帧不包含速度或方向信息。通过堆叠帧，网络可以推断运动（例如Pong中球的方向）而无需循环连接。这种简单技术有效地提供了时间上下文。",
    diagram: "",
    terms: ["deep_q_network", "state_space"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 165,
    q: "What is QR-DQN (Quantile Regression DQN)?",
    qChinese: "什么是QR-DQN（分位数回归DQN）？",
    options: [
      "A) DQN with Q-value regularization",
      "B) DQN that uses quantile normalization on inputs",
      "C) A distributional RL method that learns the quantile function of the return distribution rather than fixed atoms",
      "D) A DQN variant for ranking actions"
    ],
    optionsChinese: [
      "A) 具有Q值正则化的DQN",
      "B) 对输入使用分位数归一化的DQN",
      "C) 学习回报分布的分位数函数而非固定原子的分布RL方法",
      "D) 用于行动排名的DQN变体"
    ],
    answer: 2,
    explanation: "QR-DQN (Dabney et al., 2018) improves on C51 by learning the quantile function of the return distribution. Instead of fixed atom locations, it learns N quantile values at fixed quantile fractions. The quantile Huber loss is used for training. QR-DQN avoids the need to specify the support range required by C51.",
    explanationChinese: "QR-DQN（Dabney等，2018）通过学习回报分布的分位数函数改进了C51。它不使用固定原子位置，而是在固定分位数分数处学习N个分位数值。使用分位数Huber损失进行训练。QR-DQN避免了C51所需的指定支撑范围的需要。",
    diagram: "",
    terms: ["deep_q_network", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 166,
    q: "What is Implicit Quantile Network (IQN)?",
    qChinese: "什么是隐式分位数网络（IQN）？",
    options: [
      "A) A network that implicitly learns the action-value function",
      "B) A DQN variant that does not use a target network",
      "C) A network that uses implicit layers for efficiency",
      "D) A distributional RL method that can evaluate the return at any quantile level by conditioning on a sampled quantile input"
    ],
    optionsChinese: [
      "A) 隐式学习行动价值函数的网络",
      "B) 不使用目标网络的DQN变体",
      "C) 使用隐式层提高效率的网络",
      "D) 通过以采样的分位数输入为条件来评估任意分位数水平回报的分布RL方法"
    ],
    answer: 3,
    explanation: "IQN (Dabney et al., 2018) extends QR-DQN by conditioning the network on a sampled quantile level tau in [0,1], allowing it to evaluate any quantile of the return distribution. This provides a richer representation and enables risk-sensitive decision-making by choosing actions based on different quantile levels.",
    explanationChinese: "IQN（Dabney等，2018）通过使网络以[0,1]中采样的分位数水平tau为条件来扩展QR-DQN，允许它评估回报分布的任意分位数。这提供了更丰富的表示，并通过基于不同分位数水平选择行动实现了风险敏感的决策制定。",
    diagram: "",
    terms: ["deep_q_network", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 167,
    q: "What is the catastrophic forgetting problem in deep RL?",
    qChinese: "深度RL中的灾难性遗忘问题是什么？",
    options: [
      "A) The agent forgets to explore after training",
      "B) Neural networks overwrite previously learned knowledge when trained on new non-stationary data distributions",
      "C) The agent forgets the reward function",
      "D) The training process crashes due to memory overflow"
    ],
    optionsChinese: [
      "A) 智能体训练后忘记探索",
      "B) 神经网络在新的非平稳数据分布上训练时覆盖先前学习的知识",
      "C) 智能体忘记奖励函数",
      "D) 训练过程由于内存溢出而崩溃"
    ],
    answer: 1,
    explanation: "In deep RL, the data distribution shifts as the policy improves, and training on recent data can cause the network to forget knowledge learned from earlier data. Experience replay mitigates this by mixing old and new data. This is a significant challenge for continual and multi-task RL learning scenarios.",
    explanationChinese: "在深度RL中，随着策略改进数据分布发生变化，在最近的数据上训练可能导致网络忘记从早期数据学到的知识。经验回放通过混合旧数据和新数据来缓解这个问题。这是持续和多任务RL学习场景中的重大挑战。",
    diagram: "",
    terms: ["deep_q_network", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 168,
    q: "What is the R2D2 algorithm?",
    qChinese: "什么是R2D2算法？",
    options: [
      "A) A robotics algorithm for navigation",
      "B) A random reward distribution method",
      "C) A reward reshaping method for deep RL",
      "D) Recurrent Replay Distributed DQN, which uses LSTM-based Q-networks with distributed prioritized experience replay"
    ],
    optionsChinese: [
      "A) 用于导航的机器人算法",
      "B) 随机奖励分布方法",
      "C) 深度RL的奖励重塑方法",
      "D) 循环回放分布式DQN，使用基于LSTM的Q网络和分布式优先经验回放"
    ],
    answer: 3,
    explanation: "R2D2 (Kapturowski et al., 2019) combines recurrent neural networks (LSTMs) with DQN for handling partial observability. It uses distributed training with many parallel actors, prioritized sequence replay, and techniques like stored vs. burned-in hidden states to handle the challenges of training recurrent networks with experience replay.",
    explanationChinese: "R2D2（Kapturowski等，2019）将循环神经网络（LSTM）与DQN结合以处理部分可观测性。它使用多个并行actor的分布式训练、优先序列回放以及存储与预热隐藏状态等技术来处理使用经验回放训练循环网络的挑战。",
    diagram: "",
    terms: ["deep_q_network", "state_space"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 169,
    q: "What is the role of gradient clipping in deep RL?",
    qChinese: "梯度裁剪在深度RL中的作用是什么？",
    options: [
      "A) Limiting the magnitude of gradients to prevent unstable updates from exploding gradients",
      "B) Removing gradients below a threshold",
      "C) Clipping the action values",
      "D) Reducing the number of gradient computation steps"
    ],
    optionsChinese: [
      "A) 限制梯度的幅度以防止梯度爆炸导致的不稳定更新",
      "B) 移除低于阈值的梯度",
      "C) 裁剪行动值",
      "D) 减少梯度计算步骤的数量"
    ],
    answer: 0,
    explanation: "Gradient clipping limits the gradient norm to a maximum value, preventing extremely large updates that could destabilize training. In deep RL, the non-stationarity of targets and the bootstrapping process can produce large gradients. Clipping ensures stable optimization while still allowing the model to learn from significant errors.",
    explanationChinese: "梯度裁剪将梯度范数限制到最大值，防止可能破坏训练稳定性的极大更新。在深度RL中，目标的非平稳性和自举过程可能产生大梯度。裁剪确保稳定优化，同时仍允许模型从显著误差中学习。",
    diagram: "",
    terms: ["deep_q_network", "temporal_difference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 170,
    q: "What is the Ape-X architecture for distributed deep RL?",
    qChinese: "什么是分布式深度RL的Ape-X架构？",
    options: [
      "A) An architecture that uses a single powerful GPU",
      "B) An algorithm for multi-agent cooperative tasks",
      "C) An ape-inspired neural network architecture",
      "D) A distributed architecture with many actors collecting experience in parallel and a central learner with prioritized replay"
    ],
    optionsChinese: [
      "A) 使用单个强大GPU的架构",
      "B) 用于多智能体协作任务的算法",
      "C) 受猿类启发的神经网络架构",
      "D) 具有许多并行收集经验的actor和具有优先回放的中央learner的分布式架构"
    ],
    answer: 3,
    explanation: "Ape-X (Horgan et al., 2018) uses hundreds of actors running in parallel, each with their own copy of the network, collecting experience and computing local priorities. A central learner samples from a shared prioritized replay buffer. This massive parallelization enables significantly faster wall-clock training time and better final performance.",
    explanationChinese: "Ape-X（Horgan等，2018）使用数百个并行运行的actor，每个都有自己的网络副本，收集经验并计算本地优先级。中央learner从共享的优先回放缓冲区采样。这种大规模并行化显著缩短了墙钟训练时间并提高了最终性能。",
    diagram: "",
    terms: ["deep_q_network", "q_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 171,
    q: "What is the difference between value-based and policy-based deep RL methods?",
    qChinese: "基于价值和基于策略的深度RL方法有什么区别？",
    options: [
      "A) Value-based methods are always better than policy-based",
      "B) Policy-based methods cannot use neural networks",
      "C) Value-based methods learn Q/V and derive policies implicitly; policy-based methods parameterize and optimize the policy directly",
      "D) Value-based methods only work with discrete states"
    ],
    optionsChinese: [
      "A) 基于价值的方法总是优于基于策略的",
      "B) 基于策略的方法不能使用神经网络",
      "C) 基于价值的方法学习Q/V并隐式推导策略；基于策略的方法直接参数化和优化策略",
      "D) 基于价值的方法只适用于离散状态"
    ],
    answer: 2,
    explanation: "Value-based methods (DQN family) learn a value function and extract the policy via argmax. Policy-based methods (REINFORCE, PPO) directly parameterize the policy pi(a|s;theta) and optimize it using policy gradients. Actor-critic methods combine both, using a value function to reduce variance of policy gradient estimates.",
    explanationChinese: "基于价值的方法（DQN系列）学习价值函数并通过argmax提取策略。基于策略的方法（REINFORCE、PPO）直接参数化策略pi(a|s;theta)并使用策略梯度优化它。演员-评论家方法结合了两者，使用价值函数减少策略梯度估计的方差。",
    diagram: "",
    terms: ["deep_q_network", "policy_gradient", "actor_critic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 172,
    q: "What is batch normalization's role in deep RL?",
    qChinese: "批归一化在深度RL中的作用是什么？",
    options: [
      "A) It has no effect in RL applications",
      "B) It normalizes the reward function",
      "C) It normalizes layer inputs to stabilize training and handle different input scales across environments",
      "D) It normalizes the action probabilities"
    ],
    optionsChinese: [
      "A) 它在RL应用中没有效果",
      "B) 它归一化奖励函数",
      "C) 它归一化层输入以稳定训练并处理不同环境中的不同输入尺度",
      "D) 它归一化行动概率"
    ],
    answer: 2,
    explanation: "Batch normalization normalizes intermediate layer activations to have zero mean and unit variance. In deep RL, it helps handle varying input scales (e.g., different observation ranges across environments) and can stabilize training. However, it interacts with experience replay and must be used carefully due to the non-i.i.d. nature of RL data.",
    explanationChinese: "批归一化将中间层激活归一化为零均值和单位方差。在深度RL中，它有助于处理不同的输入尺度（例如，不同环境中的不同观测范围）并可以稳定训练。然而，由于RL数据的非独立同分布性质，它与经验回放交互时必须谨慎使用。",
    diagram: "",
    terms: ["deep_q_network", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 173,
    q: "What is curiosity-driven exploration in deep RL?",
    qChinese: "深度RL中好奇心驱动的探索是什么？",
    options: [
      "A) The agent randomly explores more at the start of training",
      "B) The agent follows a curriculum designed by the user",
      "C) The agent generates intrinsic rewards based on prediction error of a learned model, encouraging visits to novel states",
      "D) The agent explores only states with high external rewards"
    ],
    optionsChinese: [
      "A) 智能体在训练开始时更多地随机探索",
      "B) 智能体遵循用户设计的课程",
      "C) 智能体基于学习模型的预测误差生成内在奖励，鼓励访问新颖状态",
      "D) 智能体只探索具有高外部奖励的状态"
    ],
    answer: 2,
    explanation: "Curiosity-driven exploration (Pathak et al., 2017) uses an intrinsic curiosity module that generates bonus rewards proportional to the prediction error of a forward dynamics model. States that are poorly predicted are novel and receive higher intrinsic rewards, encouraging the agent to explore unfamiliar regions of the state space.",
    explanationChinese: "好奇心驱动探索（Pathak等，2017）使用内在好奇心模块，生成与前向动态模型预测误差成比例的奖励。预测不佳的状态是新颖的并获得更高的内在奖励，鼓励智能体探索状态空间的不熟悉区域。",
    diagram: "",
    terms: ["exploration_exploitation", "deep_q_network", "reward_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 174,
    q: "What is the concept of 'world models' in deep RL?",
    qChinese: "深度RL中'世界模型'的概念是什么？",
    options: [
      "A) Models of the entire physical world",
      "B) Pre-programmed physics engines",
      "C) Models that map the agent's location in the world",
      "D) Learned neural network models of environment dynamics that enable planning in a latent space"
    ],
    optionsChinese: [
      "A) 整个物理世界的模型",
      "B) 预编程的物理引擎",
      "C) 映射智能体在世界中位置的模型",
      "D) 学习的环境动态神经网络模型，能够在潜在空间中进行规划"
    ],
    answer: 3,
    explanation: "World models (Ha & Schmidhuber, 2018) learn a compressed latent representation of the environment and its dynamics using a VAE and RNN. The agent can then 'dream' by planning entirely within this learned model, reducing the need for real environment interactions. This approach combines representation learning with model-based planning.",
    explanationChinese: "世界模型（Ha & Schmidhuber，2018）使用VAE和RNN学习环境及其动态的压缩潜在表示。智能体然后可以完全在这个学习的模型中进行'梦'规划，减少对真实环境交互的需求。这种方法结合了表示学习和基于模型的规划。",
    diagram: "",
    terms: ["model_based_rl", "deep_q_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 175,
    q: "What is the MuZero algorithm?",
    qChinese: "什么是MuZero算法？",
    options: [
      "A) A model-free algorithm for board games",
      "B) A mutation-based evolutionary algorithm",
      "C) A model-based RL algorithm that learns a dynamics model, reward model, and value model in latent space for planning without knowing the rules",
      "D) A zero-shot learning algorithm for RL"
    ],
    optionsChinese: [
      "A) 用于棋盘游戏的无模型算法",
      "B) 基于变异的进化算法",
      "C) 在潜在空间中学习动态模型、奖励模型和价值模型以在不知道规则的情况下进行规划的基于模型的RL算法",
      "D) 用于RL的零样本学习算法"
    ],
    answer: 2,
    explanation: "MuZero (Schrittwieser et al., 2020) extends AlphaZero by learning a dynamics model in latent space rather than requiring known game rules. It learns three functions: representation (state to latent), dynamics (latent transitions), and prediction (value and policy from latent). MCTS planning uses these learned models to achieve superhuman performance.",
    explanationChinese: "MuZero（Schrittwieser等，2020）通过在潜在空间中学习动态模型而非需要已知游戏规则来扩展AlphaZero。它学习三个函数：表示（状态到潜在）、动态（潜在转移）和预测（从潜在的价值和策略）。MCTS规划使用这些学习的模型实现超人性能。",
    diagram: "",
    terms: ["model_based_rl", "deep_q_network", "monte_carlo_method"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 176,
    q: "What is the policy gradient theorem?",
    qChinese: "什么是策略梯度定理？",
    options: [
      "A) The gradient of the value function equals the Q-function",
      "B) nabla J(theta) = E_pi[nabla log pi(a|s;theta) * Q^pi(s,a)], giving the gradient of expected return with respect to policy parameters",
      "C) The optimal policy is always the gradient of the reward function",
      "D) Policy gradients always point toward the optimal policy"
    ],
    optionsChinese: [
      "A) 价值函数的梯度等于Q函数",
      "B) nabla J(theta) = E_pi[nabla log pi(a|s;theta) * Q^pi(s,a)]，给出期望回报相对于策略参数的梯度",
      "C) 最优策略总是奖励函数的梯度",
      "D) 策略梯度总是指向最优策略"
    ],
    answer: 1,
    explanation: "The policy gradient theorem provides an exact expression for the gradient of the objective J(theta) without requiring differentiation of the state distribution. nabla J = E[nabla log pi(a|s;theta) * Q^pi(s,a)]. This enables gradient ascent on the expected return, forming the foundation for REINFORCE, actor-critic, PPO, and all policy gradient methods.",
    explanationChinese: "策略梯度定理提供了目标J(theta)梯度的精确表达式，无需对状态分布求导。nabla J = E[nabla log pi(a|s;theta) * Q^pi(s,a)]。这使得对期望回报的梯度上升成为可能，构成了REINFORCE、演员-评论家、PPO和所有策略梯度方法的基础。",
    diagram: "",
    terms: ["policy_gradient", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 177,
    q: "What is the REINFORCE algorithm?",
    qChinese: "什么是REINFORCE算法？",
    options: [
      "A) A Monte Carlo policy gradient method that uses complete episode returns to estimate the policy gradient",
      "B) A value-based method for discrete actions",
      "C) A dynamic programming method for policy optimization",
      "D) An actor-critic method with a value baseline"
    ],
    optionsChinese: [
      "A) 使用完整回合回报来估计策略梯度的蒙特卡罗策略梯度方法",
      "B) 用于离散行动的基于价值的方法",
      "C) 用于策略优化的动态规划方法",
      "D) 具有价值基线的演员-评论家方法"
    ],
    answer: 0,
    explanation: "REINFORCE (Williams, 1992) estimates the policy gradient using complete episode returns: theta <- theta + alpha * sum_t nabla log pi(a_t|s_t;theta) * G_t. It is a Monte Carlo method—it uses actual returns rather than bootstrapped estimates. While unbiased, it has high variance, which can be reduced using a baseline.",
    explanationChinese: "REINFORCE（Williams，1992）使用完整回合回报估计策略梯度：theta <- theta + alpha * sum_t nabla log pi(a_t|s_t;theta) * G_t。它是蒙特卡罗方法——使用实际回报而非自举估计。虽然无偏，但方差很高，可以使用基线来减少。",
    diagram: "",
    terms: ["policy_gradient", "monte_carlo_method"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 178,
    q: "What is the role of a baseline in policy gradient methods?",
    qChinese: "基线在策略梯度方法中的作用是什么？",
    options: [
      "A) To set a minimum performance threshold",
      "B) To normalize the policy parameters",
      "C) To reduce the variance of the gradient estimate without changing its expected value",
      "D) To set the initial value of the learning rate"
    ],
    optionsChinese: [
      "A) 设置最低性能阈值",
      "B) 归一化策略参数",
      "C) 在不改变梯度估计期望值的情况下减少其方差",
      "D) 设置学习率的初始值"
    ],
    answer: 2,
    explanation: "Subtracting a baseline b(s) from the return: nabla J = E[nabla log pi(a|s;theta) * (G_t - b(s))]. The baseline does not change the expected gradient (since E[nabla log pi * b] = 0) but significantly reduces variance. The optimal baseline is approximately V^pi(s), leading to the use of the advantage function A^pi(s,a) = Q^pi(s,a) - V^pi(s).",
    explanationChinese: "从回报中减去基线b(s)：nabla J = E[nabla log pi(a|s;theta) * (G_t - b(s))]。基线不改变期望梯度（因为E[nabla log pi * b] = 0）但显著减少方差。最优基线约为V^pi(s)，导致使用优势函数A^pi(s,a) = Q^pi(s,a) - V^pi(s)。",
    diagram: "",
    terms: ["policy_gradient", "value_function", "actor_critic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 179,
    q: "What is PPO (Proximal Policy Optimization)?",
    qChinese: "什么是PPO（近端策略优化）？",
    options: [
      "A) A model-based planning algorithm",
      "B) A policy gradient method that uses a clipped surrogate objective to constrain policy updates for stability",
      "C) A pure value-based method",
      "D) A Monte Carlo method with proximity-based exploration"
    ],
    optionsChinese: [
      "A) 基于模型的规划算法",
      "B) 使用裁剪的代理目标来约束策略更新以提高稳定性的策略梯度方法",
      "C) 纯粹基于价值的方法",
      "D) 具有基于邻近性探索的蒙特卡罗方法"
    ],
    answer: 1,
    explanation: "PPO (Schulman et al., 2017) clips the probability ratio r(theta) = pi_new/pi_old to [1-epsilon, 1+epsilon], preventing excessively large policy updates. The objective is min(r*A, clip(r, 1-eps, 1+eps)*A). PPO is simpler than TRPO, works well across many tasks, and is one of the most widely used RL algorithms in practice.",
    explanationChinese: "PPO（Schulman等，2017）将概率比率r(theta) = pi_new/pi_old裁剪到[1-epsilon, 1+epsilon]，防止过大的策略更新。目标是min(r*A, clip(r, 1-eps, 1+eps)*A)。PPO比TRPO简单，在许多任务中表现良好，是实践中使用最广泛的RL算法之一。",
    diagram: "",
    terms: ["policy_gradient", "actor_critic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 180,
    q: "What is TRPO (Trust Region Policy Optimization)?",
    qChinese: "什么是TRPO（信赖域策略优化）？",
    options: [
      "A) A policy gradient method that constrains policy updates using a KL-divergence trust region for monotonic improvement",
      "B) A value iteration method with trust regions",
      "C) A method for training robust policies",
      "D) An online learning method for trading"
    ],
    optionsChinese: [
      "A) 使用KL散度信赖域约束策略更新以实现单调改进的策略梯度方法",
      "B) 具有信赖域的价值迭代方法",
      "C) 训练鲁棒策略的方法",
      "D) 用于交易的在线学习方法"
    ],
    answer: 0,
    explanation: "TRPO (Schulman et al., 2015) maximizes a surrogate objective subject to a KL-divergence constraint: max E[r(theta)*A] s.t. KL(pi_old || pi_new) <= delta. This guarantees monotonic policy improvement (in theory) by preventing the new policy from deviating too far from the old one. TRPO uses conjugate gradient and line search for optimization.",
    explanationChinese: "TRPO（Schulman等，2015）在KL散度约束下最大化代理目标：max E[r(theta)*A] s.t. KL(pi_old || pi_new) <= delta。这通过防止新策略偏离旧策略太远来保证（理论上的）单调策略改进。TRPO使用共轭梯度和线搜索进行优化。",
    diagram: "",
    terms: ["policy_gradient", "actor_critic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 181,
    q: "What is A2C (Advantage Actor-Critic)?",
    qChinese: "什么是A2C（优势演员-评论家）？",
    options: [
      "A) An algorithm that uses two actors and two critics",
      "B) A synchronous actor-critic method where multiple workers collect experience in parallel and updates use the advantage function",
      "C) An algorithm with two advantage functions",
      "D) A two-step lookahead planning algorithm"
    ],
    optionsChinese: [
      "A) 使用两个演员和两个评论家的算法",
      "B) 多个工作者并行收集经验且更新使用优势函数的同步演员-评论家方法",
      "C) 具有两个优势函数的算法",
      "D) 两步前瞻规划算法"
    ],
    answer: 1,
    explanation: "A2C is the synchronous version of A3C. It uses multiple parallel workers to collect experience, then performs a synchronized gradient update. The policy gradient uses the advantage A(s,a) = R + gamma*V(s') - V(s) estimated by the critic. The synchronous updates are simpler to implement and often perform as well as asynchronous A3C.",
    explanationChinese: "A2C是A3C的同步版本。它使用多个并行工作者收集经验，然后执行同步梯度更新。策略梯度使用由评论家估计的优势A(s,a) = R + gamma*V(s') - V(s)。同步更新更容易实现，且通常表现与异步A3C一样好。",
    diagram: "",
    terms: ["actor_critic", "policy_gradient"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 182,
    q: "What is A3C (Asynchronous Advantage Actor-Critic)?",
    qChinese: "什么是A3C（异步优势演员-评论家）？",
    options: [
      "A) An actor-critic method with three neural networks",
      "B) A synchronous parallel training method",
      "C) An algorithm that uses three different advantage functions",
      "D) An asynchronous method where multiple workers independently interact with environments and update a shared global model"
    ],
    optionsChinese: [
      "A) 具有三个神经网络的演员-评论家方法",
      "B) 同步并行训练方法",
      "C) 使用三种不同优势函数的算法",
      "D) 多个工作者独立与环境交互并更新共享全局模型的异步方法"
    ],
    answer: 3,
    explanation: "A3C (Mnih et al., 2016) runs multiple actor-learners asynchronously on different CPU threads, each with its own copy of the environment. Each worker computes gradients and asynchronously updates shared parameters. This naturally provides decorrelated training data (replacing experience replay) and enables efficient use of multi-core CPUs.",
    explanationChinese: "A3C（Mnih等，2016）在不同CPU线程上异步运行多个actor-learner，每个都有自己的环境副本。每个工作者计算梯度并异步更新共享参数。这自然提供了去相关的训练数据（替代经验回放）并实现了多核CPU的高效利用。",
    diagram: "",
    terms: ["actor_critic", "policy_gradient"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 183,
    q: "What is Generalized Advantage Estimation (GAE)?",
    qChinese: "什么是广义优势估计（GAE）？",
    options: [
      "A) A general formula for computing exact advantages",
      "B) A method for generalizing advantages across different environments",
      "C) An exponentially weighted average of n-step advantage estimates, parameterized by lambda, to balance bias and variance",
      "D) A technique for estimating advantages from a single sample"
    ],
    optionsChinese: [
      "A) 计算精确优势的通用公式",
      "B) 在不同环境中推广优势的方法",
      "C) n步优势估计的指数加权平均，由lambda参数化，以平衡偏差和方差",
      "D) 从单个样本估计优势的技术"
    ],
    answer: 2,
    explanation: "GAE (Schulman et al., 2016) computes the advantage as A^GAE(lambda) = sum_{l=0}^{inf} (gamma*lambda)^l * delta_{t+l}, where delta_t is the TD error. With lambda=0, it equals the one-step TD advantage (low variance, high bias); with lambda=1, it equals the MC advantage (high variance, low bias). GAE is used in PPO and TRPO.",
    explanationChinese: "GAE（Schulman等，2016）将优势计算为A^GAE(lambda) = sum_{l=0}^{inf} (gamma*lambda)^l * delta_{t+l}，其中delta_t是TD误差。lambda=0时等于一步TD优势（低方差，高偏差）；lambda=1时等于MC优势（高方差，低偏差）。GAE用于PPO和TRPO。",
    diagram: "",
    terms: ["policy_gradient", "actor_critic", "temporal_difference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 184,
    q: "What does the 'log pi' term in the policy gradient represent?",
    qChinese: "策略梯度中的'log pi'项代表什么？",
    options: [
      "A) The entropy of the policy",
      "B) The logarithm of the reward",
      "C) The score function that determines how policy parameters affect the probability of taking action a in state s",
      "D) The value function in log space"
    ],
    optionsChinese: [
      "A) 策略的熵",
      "B) 奖励的对数",
      "C) 确定策略参数如何影响在状态s中采取行动a概率的得分函数",
      "D) 对数空间中的价值函数"
    ],
    answer: 2,
    explanation: "The score function nabla_theta log pi(a|s;theta) indicates the direction in parameter space that increases the probability of action a in state s. Multiplied by the return/advantage, it increases the probability of high-reward actions and decreases the probability of low-reward actions, implementing the REINFORCE trick (log-derivative trick).",
    explanationChinese: "得分函数nabla_theta log pi(a|s;theta)指示参数空间中增加状态s中行动a概率的方向。乘以回报/优势后，它增加高奖励行动的概率并减少低奖励行动的概率，实现了REINFORCE技巧（对数导数技巧）。",
    diagram: "",
    terms: ["policy_gradient", "exploration_exploitation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 185,
    q: "What is the entropy bonus in policy gradient methods?",
    qChinese: "策略梯度方法中的熵奖励是什么？",
    options: [
      "A) A penalty for taking deterministic actions",
      "B) An added term that encourages the policy to maintain high entropy (randomness) to promote exploration",
      "C) A bonus for reaching high-entropy states",
      "D) A method for computing the entropy of the environment"
    ],
    optionsChinese: [
      "A) 对采取确定性行动的惩罚",
      "B) 鼓励策略保持高熵（随机性）以促进探索的附加项",
      "C) 达到高熵状态的奖励",
      "D) 计算环境熵的方法"
    ],
    answer: 1,
    explanation: "The entropy bonus adds alpha * H(pi(.|s)) to the objective, where H is the entropy. This prevents the policy from collapsing to a deterministic one too early (premature convergence) and encourages continued exploration. The coefficient alpha controls the trade-off between reward maximization and entropy, and is key in SAC.",
    explanationChinese: "熵奖励向目标添加alpha * H(pi(.|s))，其中H是熵。这防止策略过早崩溃为确定性策略（过早收敛）并鼓励持续探索。系数alpha控制奖励最大化和熵之间的权衡，是SAC中的关键。",
    diagram: "",
    terms: ["policy_gradient", "exploration_exploitation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 186,
    q: "Why are policy gradient methods well-suited for continuous action spaces?",
    qChinese: "为什么策略梯度方法适合连续行动空间？",
    options: [
      "A) They directly output a parameterized continuous action distribution (e.g., Gaussian) rather than needing to compute max over actions",
      "B) They do not require a value function",
      "C) They always converge faster than value-based methods",
      "D) They have lower memory requirements"
    ],
    optionsChinese: [
      "A) 它们直接输出参数化的连续行动分布（如高斯分布）而无需计算行动的最大值",
      "B) 它们不需要价值函数",
      "C) 它们总是比基于价值的方法更快收敛",
      "D) 它们有更低的内存需求"
    ],
    answer: 0,
    explanation: "Policy gradient methods parameterize the policy directly, typically using a Gaussian distribution pi(a|s) = N(mu(s;theta), sigma(s;theta)^2) for continuous actions. Actions are sampled from this distribution. This avoids the intractable optimization max_a Q(s,a) required by value-based methods in continuous spaces.",
    explanationChinese: "策略梯度方法直接参数化策略，通常对连续行动使用高斯分布pi(a|s) = N(mu(s;theta), sigma(s;theta)^2)。行动从该分布中采样。这避免了基于价值的方法在连续空间中所需的不可行优化max_a Q(s,a)。",
    diagram: "",
    terms: ["policy_gradient", "action_space"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 187,
    q: "What is the 'likelihood ratio' trick in policy gradient methods?",
    qChinese: "策略梯度方法中的'似然比'技巧是什么？",
    options: [
      "A) Rewriting the gradient of an expectation as an expectation of the score function times the reward, enabling sampling-based estimation",
      "B) Comparing the likelihood of two different models",
      "C) Computing the ratio of two policy distributions",
      "D) A trick for computing likelihood in Bayesian inference"
    ],
    optionsChinese: [
      "A) 将期望的梯度重写为得分函数乘以奖励的期望，实现基于采样的估计",
      "B) 比较两个不同模型的似然",
      "C) 计算两个策略分布的比率",
      "D) 贝叶斯推断中计算似然的技巧"
    ],
    answer: 0,
    explanation: "The likelihood ratio trick uses nabla E_pi[f(x)] = E_pi[f(x) * nabla log pi(x)]. This converts the gradient of an intractable expectation into an expectation that can be estimated from samples. It is the mathematical foundation of REINFORCE and all policy gradient methods, avoiding the need to differentiate through the environment.",
    explanationChinese: "似然比技巧使用nabla E_pi[f(x)] = E_pi[f(x) * nabla log pi(x)]。这将不可行期望的梯度转换为可以从样本估计的期望。它是REINFORCE和所有策略梯度方法的数学基础，避免了需要通过环境求导。",
    diagram: "",
    terms: ["policy_gradient", "monte_carlo_method"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 188,
    q: "What is the variance problem in REINFORCE and how is it addressed?",
    qChinese: "REINFORCE中的方差问题是什么，如何解决？",
    options: [
      "A) REINFORCE has no variance issues",
      "B) Variance is eliminated by using deterministic policies",
      "C) High variance from using complete episode returns is reduced using baselines, advantage functions, and multiple parallel rollouts",
      "D) Variance is handled by increasing the learning rate"
    ],
    optionsChinese: [
      "A) REINFORCE没有方差问题",
      "B) 通过使用确定性策略消除方差",
      "C) 使用完整回合回报导致的高方差通过基线、优势函数和多个并行展开来减少",
      "D) 通过增加学习率处理方差"
    ],
    answer: 2,
    explanation: "REINFORCE uses the full return G_t, which can vary dramatically between episodes, causing high gradient variance and slow learning. Key variance reduction techniques include: (1) subtracting a baseline b(s), (2) using the advantage function A(s,a) instead of G_t, (3) using many parallel rollouts to average gradients, and (4) applying GAE.",
    explanationChinese: "REINFORCE使用完整回报G_t，在不同回合之间可能变化很大，导致高梯度方差和慢学习。关键的方差减少技术包括：(1)减去基线b(s)，(2)使用优势函数A(s,a)代替G_t，(3)使用多个并行展开来平均梯度，(4)应用GAE。",
    diagram: "",
    terms: ["policy_gradient", "monte_carlo_method", "actor_critic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 189,
    q: "What is the importance sampling ratio used in off-policy policy gradient methods?",
    qChinese: "离策略策略梯度方法中使用的重要性采样比率是什么？",
    options: [
      "A) The ratio of the discount factors",
      "B) The ratio of rewards from two different episodes",
      "C) r(theta) = pi(a|s;theta_new) / pi(a|s;theta_old), used to reuse data from the old policy",
      "D) The ratio of the learning rates"
    ],
    optionsChinese: [
      "A) 折扣因子的比率",
      "B) 两个不同回合的奖励比率",
      "C) r(theta) = pi(a|s;theta_new) / pi(a|s;theta_old)，用于复用旧策略的数据",
      "D) 学习率的比率"
    ],
    answer: 2,
    explanation: "The importance sampling ratio r(theta) = pi_new(a|s) / pi_old(a|s) corrects for the distribution mismatch when using data collected by the old policy to update the new policy. It allows multiple gradient steps from the same batch of data. PPO clips this ratio to prevent destructive large updates.",
    explanationChinese: "重要性采样比率r(theta) = pi_new(a|s) / pi_old(a|s)在使用旧策略收集的数据更新新策略时纠正分布不匹配。它允许从同一批数据进行多次梯度步骤。PPO裁剪此比率以防止破坏性的大更新。",
    diagram: "",
    terms: ["policy_gradient", "exploration_exploitation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 190,
    q: "What is the natural policy gradient?",
    qChinese: "什么是自然策略梯度？",
    options: [
      "A) The policy gradient computed in a natural environment",
      "B) The gradient of the natural logarithm of the policy",
      "C) A gradient that naturally converges to the optimal policy",
      "D) The policy gradient pre-conditioned by the inverse Fisher information matrix to account for the geometry of the policy distribution space"
    ],
    optionsChinese: [
      "A) 在自然环境中计算的策略梯度",
      "B) 策略自然对数的梯度",
      "C) 自然收敛到最优策略的梯度",
      "D) 由Fisher信息矩阵的逆预条件化的策略梯度，以考虑策略分布空间的几何"
    ],
    answer: 3,
    explanation: "The natural policy gradient uses theta <- theta + alpha * F^{-1} * nabla J, where F is the Fisher information matrix. This accounts for the curvature of the policy parameter space, providing a more meaningful step direction. TRPO approximates the natural gradient using a KL-divergence constraint, which is equivalent in the local limit.",
    explanationChinese: "自然策略梯度使用theta <- theta + alpha * F^{-1} * nabla J，其中F是Fisher信息矩阵。这考虑了策略参数空间的曲率，提供了更有意义的步进方向。TRPO使用KL散度约束来近似自然梯度，在局部极限下是等价的。",
    diagram: "",
    terms: ["policy_gradient", "actor_critic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 191,
    q: "What is the clipping mechanism in PPO?",
    qChinese: "PPO中的裁剪机制是什么？",
    options: [
      "A) Clipping the rewards to a fixed range",
      "B) Clipping the action values",
      "C) Clipping the gradient norm",
      "D) Clipping the probability ratio r(theta) to [1-epsilon, 1+epsilon] to limit the policy change per update"
    ],
    optionsChinese: [
      "A) 将奖励裁剪到固定范围",
      "B) 裁剪行动值",
      "C) 裁剪梯度范数",
      "D) 将概率比率r(theta)裁剪到[1-epsilon, 1+epsilon]以限制每次更新的策略变化"
    ],
    answer: 3,
    explanation: "PPO's clipped objective is L = min(r*A, clip(r, 1-eps, 1+eps)*A). When the advantage is positive and r > 1+eps, the objective is clipped, preventing further increase. When the advantage is negative and r < 1-eps, it is also clipped. The typical epsilon value is 0.1-0.2. This simple mechanism provides a trust region without the complexity of TRPO.",
    explanationChinese: "PPO的裁剪目标是L = min(r*A, clip(r, 1-eps, 1+eps)*A)。当优势为正且r > 1+eps时，目标被裁剪，防止进一步增加。当优势为负且r < 1-eps时，也被裁剪。典型的epsilon值为0.1-0.2。这种简单机制提供了信赖域，而没有TRPO的复杂性。",
    diagram: "",
    terms: ["policy_gradient", "actor_critic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 192,
    q: "What is the difference between deterministic and stochastic policy gradients?",
    qChinese: "确定性策略梯度和随机策略梯度有什么区别？",
    options: [
      "A) Deterministic policy gradients always find the global optimum",
      "B) Stochastic policy gradients have lower variance",
      "C) Deterministic policy gradients (DPG) compute gradients through the Q-function without sampling actions; stochastic policy gradients sample actions from a distribution",
      "D) They are mathematically equivalent"
    ],
    optionsChinese: [
      "A) 确定性策略梯度总是找到全局最优",
      "B) 随机策略梯度具有更低的方差",
      "C) 确定性策略梯度（DPG）通过Q函数计算梯度而无需采样行动；随机策略梯度从分布中采样行动",
      "D) 它们在数学上是等价的"
    ],
    answer: 2,
    explanation: "The deterministic policy gradient (Silver et al., 2014) is nabla J = E[nabla_theta mu(s) * nabla_a Q(s,a)|_{a=mu(s)}]. It does not require integrating over the action space, making it more efficient for continuous actions. However, it needs a separate exploration mechanism. DDPG uses DPG with deep neural networks and off-policy learning.",
    explanationChinese: "确定性策略梯度（Silver等，2014）为nabla J = E[nabla_theta mu(s) * nabla_a Q(s,a)|_{a=mu(s)}]。它不需要对行动空间积分，使其对连续行动更高效。然而，它需要单独的探索机制。DDPG使用DPG与深度神经网络和离策略学习。",
    diagram: "",
    terms: ["policy_gradient", "actor_critic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 193,
    q: "What is the 'compatible function approximation' theorem for policy gradients?",
    qChinese: "策略梯度的'兼容函数逼近'定理是什么？",
    options: [
      "A) A critic that is linear in the score function features yields an unbiased policy gradient estimate",
      "B) Any function approximator is compatible with policy gradients",
      "C) Policy gradients require compatible hardware for computation",
      "D) The value function must be compatible with the environment"
    ],
    optionsChinese: [
      "A) 在得分函数特征中线性的评论家产生无偏的策略梯度估计",
      "B) 任何函数逼近器都与策略梯度兼容",
      "C) 策略梯度需要兼容的硬件进行计算",
      "D) 价值函数必须与环境兼容"
    ],
    answer: 0,
    explanation: "The compatible function approximation theorem states that if the critic Q_w(s,a) satisfies two conditions: (1) Q_w is linear in the features nabla log pi(a|s;theta), and (2) the parameters w minimize the mean squared error, then the policy gradient using Q_w is exact (unbiased) despite using approximation.",
    explanationChinese: "兼容函数逼近定理指出，如果评论家Q_w(s,a)满足两个条件：(1) Q_w在特征nabla log pi(a|s;theta)中是线性的，(2)参数w最小化均方误差，则使用Q_w的策略梯度尽管使用了逼近但是精确的（无偏的）。",
    diagram: "",
    terms: ["policy_gradient", "actor_critic", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 194,
    q: "What is policy gradient with function approximation (PGFA) and what challenges arise?",
    qChinese: "带函数逼近的策略梯度（PGFA）是什么，会出现什么挑战？",
    options: [
      "A) PGFA is guaranteed to converge to the global optimum",
      "B) Using neural networks to parameterize the policy introduces non-convex optimization with potential local optima and gradient estimation challenges",
      "C) PGFA cannot handle discrete actions",
      "D) PGFA requires a perfect model of the environment"
    ],
    optionsChinese: [
      "A) PGFA保证收敛到全局最优",
      "B) 使用神经网络参数化策略引入了具有潜在局部最优和梯度估计挑战的非凸优化",
      "C) PGFA不能处理离散行动",
      "D) PGFA需要环境的完美模型"
    ],
    answer: 1,
    explanation: "When the policy is parameterized by deep neural networks, the optimization landscape becomes non-convex with many local optima and saddle points. Challenges include high gradient variance, sensitivity to hyperparameters (learning rate, architecture), and the interplay between the changing policy and data distribution. Careful tuning and variance reduction techniques are essential.",
    explanationChinese: "当策略由深度神经网络参数化时，优化景观变得具有许多局部最优和鞍点的非凸性。挑战包括高梯度方差、对超参数（学习率、架构）的敏感性以及变化的策略与数据分布之间的相互作用。仔细调整和方差减少技术是必要的。",
    diagram: "",
    terms: ["policy_gradient", "deep_q_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 195,
    q: "What is IMPALA (Importance Weighted Actor-Learner Architecture)?",
    qChinese: "什么是IMPALA（重要性加权演员-学习者架构）？",
    options: [
      "A) A single-agent policy gradient method",
      "B) A distributed actor-critic architecture that uses V-trace off-policy correction to enable efficient large-scale training",
      "C) An inverse RL algorithm",
      "D) A model-based planning system"
    ],
    optionsChinese: [
      "A) 单智能体策略梯度方法",
      "B) 使用V-trace离策略校正以实现高效大规模训练的分布式演员-评论家架构",
      "C) 逆强化学习算法",
      "D) 基于模型的规划系统"
    ],
    answer: 1,
    explanation: "IMPALA (Espeholt et al., 2018) uses many actors generating trajectories in parallel and a central learner that processes batches of trajectories. V-trace, a novel off-policy correction method with truncated importance sampling ratios, handles the lag between actor and learner policies. This enables high throughput while maintaining accuracy.",
    explanationChinese: "IMPALA（Espeholt等，2018）使用许多并行生成轨迹的actor和处理轨迹批次的中央learner。V-trace是一种新颖的离策略校正方法，使用截断的重要性采样比率处理actor和learner策略之间的滞后。这实现了高吞吐量同时保持准确性。",
    diagram: "",
    terms: ["actor_critic", "policy_gradient"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 196,
    q: "What is the reparameterization trick used in policy gradients for continuous actions?",
    qChinese: "策略梯度中用于连续行动的重参数化技巧是什么？",
    options: [
      "A) Reparameterizing the state representation",
      "B) Changing the parameter space of the policy",
      "C) Expressing a = mu(s;theta) + sigma(s;theta)*epsilon (epsilon ~ N(0,1)) to allow gradients to flow through the sampling process",
      "D) Reparameterizing the reward function"
    ],
    optionsChinese: [
      "A) 重参数化状态表示",
      "B) 改变策略的参数空间",
      "C) 表达a = mu(s;theta) + sigma(s;theta)*epsilon（epsilon ~ N(0,1)）以允许梯度流过采样过程",
      "D) 重参数化奖励函数"
    ],
    answer: 2,
    explanation: "The reparameterization trick rewrites sampling from pi(a|s) as a deterministic transformation of noise: a = mu(s;theta) + sigma(s;theta)*epsilon, where epsilon is standard Gaussian noise. This makes the sampling differentiable with respect to theta, enabling low-variance gradient estimates. It is essential in SAC and VAE-based methods.",
    explanationChinese: "重参数化技巧将从pi(a|s)的采样重写为噪声的确定性变换：a = mu(s;theta) + sigma(s;theta)*epsilon，其中epsilon是标准高斯噪声。这使采样对theta可微，实现低方差梯度估计。它在SAC和基于VAE的方法中是必不可少的。",
    diagram: "",
    terms: ["policy_gradient", "actor_critic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 197,
    q: "What makes PPO more practical than TRPO?",
    qChinese: "是什么使PPO比TRPO更实用？",
    options: [
      "A) PPO always produces better policies",
      "B) PPO works only with discrete actions",
      "C) PPO does not need a value function",
      "D) PPO uses a simple clipped objective that can be optimized with standard gradient methods, avoiding the complex second-order optimization of TRPO"
    ],
    optionsChinese: [
      "A) PPO总是产生更好的策略",
      "B) PPO只适用于离散行动",
      "C) PPO不需要价值函数",
      "D) PPO使用简单的裁剪目标，可以用标准梯度方法优化，避免了TRPO复杂的二阶优化"
    ],
    answer: 3,
    explanation: "TRPO requires computing the Fisher information matrix and using conjugate gradient with line search, making it computationally expensive and difficult to implement. PPO achieves similar stability guarantees using a simple clipped surrogate objective optimized with standard first-order methods like Adam. This makes PPO easier to implement, tune, and scale.",
    explanationChinese: "TRPO需要计算Fisher信息矩阵并使用共轭梯度和线搜索，计算成本高且难以实现。PPO使用简单的裁剪代理目标通过标准一阶方法（如Adam）实现了类似的稳定性保证。这使PPO更容易实现、调整和扩展。",
    diagram: "",
    terms: ["policy_gradient", "actor_critic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 198,
    q: "What is the softmax policy for discrete actions?",
    qChinese: "离散行动的softmax策略是什么？",
    options: [
      "A) Always selecting the action with the highest Q-value",
      "B) pi(a|s;theta) = exp(h(s,a;theta)) / sum_b exp(h(s,b;theta)), parameterizing action probabilities using preferences",
      "C) A uniform random policy",
      "D) A policy that uses soft value functions"
    ],
    optionsChinese: [
      "A) 总是选择Q值最高的行动",
      "B) pi(a|s;theta) = exp(h(s,a;theta)) / sum_b exp(h(s,b;theta))，使用偏好参数化行动概率",
      "C) 均匀随机策略",
      "D) 使用软价值函数的策略"
    ],
    answer: 1,
    explanation: "The softmax policy converts action preferences h(s,a;theta) into a probability distribution using the softmax function. Higher preferences lead to higher probabilities. This naturally handles exploration (all actions have nonzero probability) and is differentiable, making it suitable for policy gradient methods with discrete action spaces.",
    explanationChinese: "softmax策略使用softmax函数将行动偏好h(s,a;theta)转换为概率分布。更高的偏好导致更高的概率。这自然地处理探索（所有行动都有非零概率）并且是可微的，使其适用于离散行动空间的策略梯度方法。",
    diagram: "",
    terms: ["policy_gradient", "exploration_exploitation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 199,
    q: "What is the Gaussian policy for continuous actions?",
    qChinese: "连续行动的高斯策略是什么？",
    options: [
      "A) A policy that only works with Gaussian noise in the environment",
      "B) A policy parameterized by a Gaussian process",
      "C) A policy that adds Gaussian noise to Q-values",
      "D) A policy that outputs mean mu(s;theta) and standard deviation sigma(s;theta) of a Gaussian distribution from which actions are sampled"
    ],
    optionsChinese: [
      "A) 仅适用于环境中具有高斯噪声的策略",
      "B) 由高斯过程参数化的策略",
      "C) 向Q值添加高斯噪声的策略",
      "D) 输出高斯分布的均值mu(s;theta)和标准差sigma(s;theta)从中采样行动的策略"
    ],
    answer: 3,
    explanation: "For continuous actions, the Gaussian policy outputs pi(a|s) = N(mu(s;theta), sigma(s;theta)^2). The neural network predicts the mean and (log) standard deviation. Actions are sampled using the reparameterization trick: a = mu + sigma*epsilon. The standard deviation controls exploration—it can be fixed, learned, or state-dependent.",
    explanationChinese: "对于连续行动，高斯策略输出pi(a|s) = N(mu(s;theta), sigma(s;theta)^2)。神经网络预测均值和（对数）标准差。使用重参数化技巧采样行动：a = mu + sigma*epsilon。标准差控制探索——它可以是固定的、学习的或状态依赖的。",
    diagram: "",
    terms: ["policy_gradient", "action_space"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 200,
    q: "What is ACKTR (Actor Critic using Kronecker-factored Trust Region)?",
    qChinese: "什么是ACKTR（使用Kronecker分解信赖域的演员-评论家）？",
    options: [
      "A) An actor-critic method that uses K-FAC to efficiently approximate the natural gradient for both actor and critic updates",
      "B) An actor-critic method for Atari games only",
      "C) An algorithm that combines A3C with TRPO",
      "D) A knowledge distillation method for RL"
    ],
    optionsChinese: [
      "A) 使用K-FAC高效近似演员和评论家更新的自然梯度的演员-评论家方法",
      "B) 仅用于Atari游戏的演员-评论家方法",
      "C) 将A3C与TRPO结合的算法",
      "D) 用于RL的知识蒸馏方法"
    ],
    answer: 0,
    explanation: "ACKTR (Wu et al., 2017) applies Kronecker-factored approximate curvature (K-FAC) to efficiently compute the natural gradient for both the actor (policy) and critic (value function). This provides second-order optimization benefits at near first-order computational cost, typically requiring fewer samples than PPO or A2C for the same performance.",
    explanationChinese: "ACKTR（Wu等，2017）应用Kronecker分解近似曲率（K-FAC）高效计算演员（策略）和评论家（价值函数）的自然梯度。这以接近一阶的计算成本提供二阶优化的好处，通常比PPO或A2C需要更少的样本达到相同性能。",
    diagram: "",
    terms: ["actor_critic", "policy_gradient"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 201,
    q: "What is the actor-critic architecture?",
    qChinese: "什么是演员-评论家架构？",
    options: [
      "A) Two separate agents that cooperate",
      "B) A single network that performs both roles",
      "C) An architecture where the critic generates actions and the actor evaluates",
      "D) A framework combining a policy network (actor) that selects actions and a value network (critic) that evaluates them"
    ],
    optionsChinese: [
      "A) 两个合作的独立智能体",
      "B) 执行两种角色的单一网络",
      "C) 评论家生成行动而演员评估的架构",
      "D) 结合选择行动的策略网络（演员）和评估行动的价值网络（评论家）的框架"
    ],
    answer: 3,
    explanation: "Actor-critic methods maintain two components: the actor (policy pi(a|s;theta)) decides which action to take, and the critic (value function V(s;w) or Q(s,a;w)) evaluates the actor's decisions. The critic's value estimates reduce the variance of the policy gradient, combining the strengths of both value-based and policy-based methods.",
    explanationChinese: "演员-评论家方法维护两个组件：演员（策略pi(a|s;theta)）决定采取哪个行动，评论家（价值函数V(s;w)或Q(s,a;w)）评估演员的决策。评论家的价值估计减少了策略梯度的方差，结合了基于价值和基于策略方法的优势。",
    diagram: "",
    terms: ["actor_critic", "policy_gradient", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 202,
    q: "What is DDPG (Deep Deterministic Policy Gradient)?",
    qChinese: "什么是DDPG（深度确定性策略梯度）？",
    options: [
      "A) A policy gradient method for discrete actions",
      "B) A distributed training algorithm",
      "C) A deep version of SARSA",
      "D) An off-policy actor-critic algorithm for continuous actions using a deterministic actor and Q-critic with target networks"
    ],
    optionsChinese: [
      "A) 用于离散行动的策略梯度方法",
      "B) 分布式训练算法",
      "C) SARSA的深度版本",
      "D) 使用确定性演员和Q评论家以及目标网络的连续行动离策略演员-评论家算法"
    ],
    answer: 3,
    explanation: "DDPG (Lillicrap et al., 2016) combines DPG with deep neural networks. It uses: (1) a deterministic actor mu(s;theta) for continuous actions, (2) a Q-critic Q(s,a;w) for evaluation, (3) experience replay for sample efficiency, (4) target networks (soft-updated) for stability, and (5) exploration via adding noise to actions.",
    explanationChinese: "DDPG（Lillicrap等，2016）将DPG与深度神经网络结合。它使用：(1)确定性演员mu(s;theta)用于连续行动，(2)Q评论家Q(s,a;w)用于评估，(3)经验回放提高样本效率，(4)目标网络（软更新）提高稳定性，(5)向行动添加噪声进行探索。",
    diagram: "",
    terms: ["actor_critic", "policy_gradient", "deep_q_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 203,
    q: "What is TD3 (Twin Delayed DDPG)?",
    qChinese: "什么是TD3（双延迟DDPG）？",
    options: [
      "A) DDPG with three actor networks",
      "B) A temporal difference method with three steps",
      "C) DDPG improved with twin Q-critics, delayed policy updates, and target policy smoothing to address overestimation",
      "D) A triple-network DQN variant"
    ],
    optionsChinese: [
      "A) 具有三个演员网络的DDPG",
      "B) 具有三个步骤的时间差分方法",
      "C) 使用双Q评论家、延迟策略更新和目标策略平滑来解决高估问题的改进DDPG",
      "D) 三网络DQN变体"
    ],
    answer: 2,
    explanation: "TD3 (Fujimoto et al., 2018) addresses DDPG's overestimation problem with three techniques: (1) Twin critics—use the minimum of two Q-networks as the target, (2) Delayed updates—update the actor less frequently than the critic, (3) Target policy smoothing—add noise to the target action to smooth the critic's landscape.",
    explanationChinese: "TD3（Fujimoto等，2018）通过三种技术解决DDPG的高估问题：(1)双评论家——使用两个Q网络的最小值作为目标，(2)延迟更新——比评论家更不频繁地更新演员，(3)目标策略平滑——向目标行动添加噪声以平滑评论家的景观。",
    diagram: "",
    terms: ["actor_critic", "deep_q_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 204,
    q: "What is SAC (Soft Actor-Critic)?",
    qChinese: "什么是SAC（软演员-评论家）？",
    options: [
      "A) An actor-critic method that uses soft (fuzzy) actions",
      "B) A simplified version of A2C",
      "C) An actor-critic method with softmax action selection",
      "D) A maximum entropy actor-critic that optimizes both expected return and policy entropy for robust exploration"
    ],
    optionsChinese: [
      "A) 使用软（模糊）行动的演员-评论家方法",
      "B) A2C的简化版本",
      "C) 使用softmax行动选择的演员-评论家方法",
      "D) 优化期望回报和策略熵以实现稳健探索的最大熵演员-评论家"
    ],
    answer: 3,
    explanation: "SAC (Haarnoja et al., 2018) maximizes J = E[sum_t gamma^t(R_t + alpha*H(pi(.|s_t)))], adding entropy H to encourage exploration. It uses: twin Q-critics, a stochastic actor with the reparameterization trick, automatic temperature alpha tuning, and off-policy learning. SAC is considered state-of-the-art for continuous control tasks.",
    explanationChinese: "SAC（Haarnoja等，2018）最大化J = E[sum_t gamma^t(R_t + alpha*H(pi(.|s_t)))]，添加熵H鼓励探索。它使用：双Q评论家、带重参数化技巧的随机演员、自动温度alpha调整和离策略学习。SAC被认为是连续控制任务的最先进方法。",
    diagram: "",
    terms: ["actor_critic", "policy_gradient", "exploration_exploitation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 205,
    q: "Why does the critic in actor-critic methods reduce variance compared to REINFORCE?",
    qChinese: "为什么演员-评论家方法中的评论家比REINFORCE减少方差？",
    options: [
      "A) The critic provides a learned baseline V(s) and enables bootstrapped advantage estimates, replacing high-variance Monte Carlo returns",
      "B) The critic uses a larger neural network",
      "C) The critic eliminates the need for exploration",
      "D) The critic uses a different loss function"
    ],
    optionsChinese: [
      "A) 评论家提供学习的基线V(s)并实现自举优势估计，替代高方差的蒙特卡罗回报",
      "B) 评论家使用更大的神经网络",
      "C) 评论家消除了探索的需要",
      "D) 评论家使用不同的损失函数"
    ],
    answer: 0,
    explanation: "REINFORCE uses the full Monte Carlo return G_t which has high variance due to the randomness of entire trajectories. The critic estimates V(s) or Q(s,a), enabling the advantage A(s,a) = Q(s,a) - V(s) or the TD-based advantage R + gamma*V(s') - V(s) as the policy gradient signal. These bootstrapped estimates have much lower variance.",
    explanationChinese: "REINFORCE使用完整蒙特卡罗回报G_t，由于整个轨迹的随机性具有高方差。评论家估计V(s)或Q(s,a)，使优势A(s,a) = Q(s,a) - V(s)或基于TD的优势R + gamma*V(s') - V(s)作为策略梯度信号。这些自举估计具有低得多的方差。",
    diagram: "",
    terms: ["actor_critic", "policy_gradient", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 206,
    q: "What is the 'temperature' parameter alpha in SAC?",
    qChinese: "SAC中的'温度'参数alpha是什么？",
    options: [
      "A) The learning rate for the actor",
      "B) The softmax temperature for action selection",
      "C) The discount factor for entropy",
      "D) A coefficient that controls the trade-off between reward maximization and policy entropy"
    ],
    optionsChinese: [
      "A) 演员的学习率",
      "B) 行动选择的softmax温度",
      "C) 熵的折扣因子",
      "D) 控制奖励最大化和策略熵之间权衡的系数"
    ],
    answer: 3,
    explanation: "The temperature alpha in SAC weighs the entropy term: J = E[sum R_t + alpha*H(pi)]. Higher alpha encourages more exploration (higher entropy); lower alpha focuses on reward. SAC can automatically tune alpha by formulating its optimization as a constrained problem: maximize return subject to H(pi) >= H_target.",
    explanationChinese: "SAC中的温度alpha加权熵项：J = E[sum R_t + alpha*H(pi)]。更高的alpha鼓励更多探索（更高熵）；更低的alpha集中于奖励。SAC可以通过将优化公式化为约束问题来自动调整alpha：最大化回报，约束H(pi) >= H_target。",
    diagram: "",
    terms: ["actor_critic", "exploration_exploitation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 207,
    q: "How does the actor update in a typical actor-critic algorithm?",
    qChinese: "在典型的演员-评论家算法中，演员如何更新？",
    options: [
      "A) By minimizing the TD error",
      "B) By maximizing the entropy of the action distribution",
      "C) By copying the critic's weights",
      "D) By performing gradient ascent on the expected return using the critic's value estimates to compute the advantage"
    ],
    optionsChinese: [
      "A) 通过最小化TD误差",
      "B) 通过最大化行动分布的熵",
      "C) 通过复制评论家的权重",
      "D) 通过使用评论家的价值估计计算优势来对期望回报执行梯度上升"
    ],
    answer: 3,
    explanation: "The actor updates its parameters theta in the direction of the policy gradient: theta <- theta + alpha * nabla_theta log pi(a|s;theta) * A(s,a), where A(s,a) is the advantage estimated by the critic. The critic's TD error delta = R + gamma*V(s') - V(s) often serves as the advantage estimate, providing a signal to improve the policy.",
    explanationChinese: "演员沿策略梯度方向更新参数theta：theta <- theta + alpha * nabla_theta log pi(a|s;theta) * A(s,a)，其中A(s,a)是评论家估计的优势。评论家的TD误差delta = R + gamma*V(s') - V(s)通常作为优势估计，提供改进策略的信号。",
    diagram: "",
    terms: ["actor_critic", "policy_gradient", "temporal_difference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 208,
    q: "How does the critic update in a typical actor-critic algorithm?",
    qChinese: "在典型的演员-评论家算法中，评论家如何更新？",
    options: [
      "A) By minimizing the TD error (or Bellman error) using the observed transitions",
      "B) By following the policy gradient",
      "C) By maximizing the reward function",
      "D) By copying the actor's parameters"
    ],
    optionsChinese: [
      "A) 通过使用观察到的转移最小化TD误差（或贝尔曼误差）",
      "B) 通过遵循策略梯度",
      "C) 通过最大化奖励函数",
      "D) 通过复制演员的参数"
    ],
    answer: 0,
    explanation: "The critic updates by minimizing the squared TD error: w <- w - beta * delta * nabla_w V(s;w) or equivalently minimizing E[(R + gamma*V(s';w^-) - V(s;w))^2]. The critic aims to accurately estimate the value function for the current policy, which provides a better signal for the actor's policy gradient update.",
    explanationChinese: "评论家通过最小化平方TD误差更新：w <- w - beta * delta * nabla_w V(s;w)或等价地最小化E[(R + gamma*V(s';w^-) - V(s;w))^2]。评论家旨在准确估计当前策略的价值函数，为演员的策略梯度更新提供更好的信号。",
    diagram: "",
    terms: ["actor_critic", "temporal_difference", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 209,
    q: "What is the exploration noise used in DDPG?",
    qChinese: "DDPG中使用的探索噪声是什么？",
    options: [
      "A) Epsilon-greedy action selection",
      "B) Randomly resetting the network weights",
      "C) Using a softmax distribution over actions",
      "D) Adding Ornstein-Uhlenbeck or Gaussian noise to the deterministic action output"
    ],
    optionsChinese: [
      "A) Epsilon-贪心行动选择",
      "B) 随机重置网络权重",
      "C) 在行动上使用softmax分布",
      "D) 向确定性行动输出添加Ornstein-Uhlenbeck或高斯噪声"
    ],
    answer: 3,
    explanation: "Since DDPG uses a deterministic policy, exploration must be added externally. The original paper uses Ornstein-Uhlenbeck (OU) noise for temporally correlated exploration in physical control tasks. Later work found that simple Gaussian noise a = mu(s) + N(0, sigma^2) works equally well in most settings and is simpler to implement.",
    explanationChinese: "由于DDPG使用确定性策略，探索必须从外部添加。原始论文使用Ornstein-Uhlenbeck（OU）噪声在物理控制任务中进行时间相关的探索。后来的工作发现简单的高斯噪声a = mu(s) + N(0, sigma^2)在大多数设置中同样有效且更容易实现。",
    diagram: "",
    terms: ["actor_critic", "exploration_exploitation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 210,
    q: "What is the bias-variance trade-off in actor-critic methods?",
    qChinese: "演员-评论家方法中的偏差-方差权衡是什么？",
    options: [
      "A) More bootstrapping (fewer actual rewards) reduces variance but increases bias from inaccurate critic estimates",
      "B) The actor always has high bias; the critic always has high variance",
      "C) Actor-critic methods eliminate both bias and variance",
      "D) The trade-off only applies to value-based methods"
    ],
    optionsChinese: [
      "A) 更多自举（更少实际奖励）减少方差但增加来自不准确评论家估计的偏差",
      "B) 演员总是有高偏差；评论家总是有高方差",
      "C) 演员-评论家方法消除了偏差和方差",
      "D) 权衡仅适用于基于价值的方法"
    ],
    answer: 0,
    explanation: "In actor-critic methods, using n-step returns with small n (more bootstrapping) gives lower variance but higher bias because the critic's estimate may be inaccurate. Using larger n gives lower bias but higher variance. GAE with parameter lambda provides a smooth way to control this trade-off, with lambda=0 being fully bootstrapped and lambda=1 being pure MC.",
    explanationChinese: "在演员-评论家方法中，使用小n的n步回报（更多自举）给出更低方差但更高偏差，因为评论家的估计可能不准确。使用更大的n给出更低偏差但更高方差。GAE通过参数lambda提供了控制这种权衡的平滑方式，lambda=0是完全自举，lambda=1是纯MC。",
    diagram: "",
    terms: ["actor_critic", "temporal_difference", "monte_carlo_method"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 211,
    q: "What is the 'actor-critic with experience replay' (ACER)?",
    qChinese: "什么是'带经验回放的演员-评论家'（ACER）？",
    options: [
      "A) A simple combination of A2C and replay buffer",
      "B) An online actor-critic without any replay",
      "C) An off-policy actor-critic method that uses Retrace for off-policy correction, trust region updates, and replay",
      "D) A model-based actor-critic method"
    ],
    optionsChinese: [
      "A) A2C和回放缓冲区的简单组合",
      "B) 没有任何回放的在线演员-评论家",
      "C) 使用Retrace进行离策略校正、信赖域更新和回放的离策略演员-评论家方法",
      "D) 基于模型的演员-评论家方法"
    ],
    answer: 2,
    explanation: "ACER (Wang et al., 2017) makes A3C sample-efficient by adding experience replay with off-policy corrections. It uses Retrace(lambda) for the Q-value estimation, importance weight truncation with bias correction, and a trust region constraint on the policy update. This allows reusing past experience while maintaining stable policy updates.",
    explanationChinese: "ACER（Wang等，2017）通过添加带离策略校正的经验回放使A3C具有样本效率。它使用Retrace(lambda)进行Q值估计、重要性权重截断与偏差校正以及策略更新的信赖域约束。这允许复用过去的经验同时保持稳定的策略更新。",
    diagram: "",
    terms: ["actor_critic", "temporal_difference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 212,
    q: "What problem does 'delayed policy updates' in TD3 solve?",
    qChinese: "TD3中的'延迟策略更新'解决什么问题？",
    options: [
      "A) Slow training speed",
      "B) Updating the actor based on a more accurate critic by allowing the critic to converge before the actor changes",
      "C) Memory constraints",
      "D) Exploration challenges"
    ],
    optionsChinese: [
      "A) 训练速度慢",
      "B) 通过允许评论家在演员改变之前收敛来基于更准确的评论家更新演员",
      "C) 内存约束",
      "D) 探索挑战"
    ],
    answer: 1,
    explanation: "TD3 updates the actor every d steps (typically d=2) while updating the critic every step. This ensures the critic has converged more toward an accurate value estimate before the actor uses it for the policy gradient. If the actor updates too frequently with inaccurate Q-values, policy degradation can compound through the actor-critic interaction.",
    explanationChinese: "TD3每d步（通常d=2）更新演员，同时每步更新评论家。这确保评论家在演员使用它进行策略梯度之前已经更多地收敛到准确的价值估计。如果演员使用不准确的Q值过于频繁地更新，策略退化可能通过演员-评论家交互而加剧。",
    diagram: "",
    terms: ["actor_critic", "deep_q_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 213,
    q: "What is 'target policy smoothing' in TD3?",
    qChinese: "TD3中的'目标策略平滑'是什么？",
    options: [
      "A) Smoothing the loss function",
      "B) Adding clipped noise to the target actor's action to reduce variance and prevent the critic from overfitting to narrow peaks",
      "C) Using a moving average of the policy parameters",
      "D) Smoothing the reward signal"
    ],
    optionsChinese: [
      "A) 平滑损失函数",
      "B) 向目标演员的行动添加裁剪噪声以减少方差并防止评论家过拟合到窄峰",
      "C) 使用策略参数的移动平均",
      "D) 平滑奖励信号"
    ],
    answer: 1,
    explanation: "TD3 adds clipped Gaussian noise to the target action: a' = mu(s';theta^-) + clip(epsilon, -c, c) where epsilon ~ N(0, sigma). This regularizes the critic by making the value smooth in the action space, preventing the policy from exploiting sharp peaks in the Q-function that may be artifacts of function approximation error.",
    explanationChinese: "TD3向目标行动添加裁剪的高斯噪声：a' = mu(s';theta^-) + clip(epsilon, -c, c)其中epsilon ~ N(0, sigma)。这通过使行动空间中的值平滑来正则化评论家，防止策略利用Q函数中可能是函数逼近误差产物的尖锐峰值。",
    diagram: "",
    terms: ["actor_critic", "deep_q_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 214,
    q: "What is the difference between on-policy and off-policy actor-critic methods?",
    qChinese: "在策略和离策略的演员-评论家方法有什么区别？",
    options: [
      "A) On-policy methods always use LSTM; off-policy methods use feedforward networks",
      "B) On-policy methods (A2C/PPO) update from current rollouts; off-policy methods (DDPG/SAC) learn from a replay buffer of past experiences",
      "C) Off-policy methods are always better",
      "D) On-policy methods cannot use function approximation"
    ],
    optionsChinese: [
      "A) 在策略方法总是使用LSTM；离策略方法使用前馈网络",
      "B) 在策略方法（A2C/PPO）从当前展开更新；离策略方法（DDPG/SAC）从过去经验的回放缓冲区学习",
      "C) 离策略方法总是更好",
      "D) 在策略方法不能使用函数逼近"
    ],
    answer: 1,
    explanation: "On-policy actor-critic methods (A2C, PPO) collect fresh data with the current policy and discard it after each update. Off-policy methods (DDPG, TD3, SAC) store experiences in a replay buffer and reuse them, making them more sample-efficient. However, off-policy methods require corrections for the distribution mismatch between the data and current policy.",
    explanationChinese: "在策略演员-评论家方法（A2C、PPO）使用当前策略收集新数据并在每次更新后丢弃。离策略方法（DDPG、TD3、SAC）将经验存储在回放缓冲区并复用，使它们更具样本效率。然而，离策略方法需要校正数据和当前策略之间的分布不匹配。",
    diagram: "",
    terms: ["actor_critic", "policy_gradient"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 215,
    q: "What is the 'critic divergence' problem in actor-critic methods?",
    qChinese: "演员-评论家方法中的'评论家发散'问题是什么？",
    options: [
      "A) The critic's value estimates become inaccurate or grow without bound, degrading the actor's policy gradient signal",
      "B) The actor and critic converge to different solutions",
      "C) The critic runs out of memory",
      "D) The critic's network becomes too deep"
    ],
    optionsChinese: [
      "A) 评论家的价值估计变得不准确或无限增长，降低了演员的策略梯度信号",
      "B) 演员和评论家收敛到不同的解",
      "C) 评论家内存耗尽",
      "D) 评论家的网络变得太深"
    ],
    answer: 0,
    explanation: "When using function approximation with bootstrapping and off-policy data (the deadly triad), the critic may diverge—its value estimates grow without bound or oscillate. This corrupts the actor's gradient signal, causing policy degradation. Solutions include target networks, gradient clipping, value function clipping, and careful hyperparameter tuning.",
    explanationChinese: "当使用带自举和离策略数据的函数逼近（致命三角）时，评论家可能发散——其价值估计无限增长或振荡。这破坏了演员的梯度信号，导致策略退化。解决方案包括目标网络、梯度裁剪、价值函数裁剪和仔细的超参数调整。",
    diagram: "",
    terms: ["actor_critic", "temporal_difference", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 216,
    q: "What is the multi-step actor-critic approach?",
    qChinese: "什么是多步演员-评论家方法？",
    options: [
      "A) Using multiple actors with one critic",
      "B) Running the actor-critic for multiple episodes",
      "C) Updating the actor multiple times per critic update",
      "D) Using n-step returns in the critic's target instead of one-step TD targets to balance bias and variance"
    ],
    optionsChinese: [
      "A) 使用多个演员和一个评论家",
      "B) 运行演员-评论家多个回合",
      "C) 每次评论家更新时多次更新演员",
      "D) 在评论家的目标中使用n步回报而非一步TD目标以平衡偏差和方差"
    ],
    answer: 3,
    explanation: "Multi-step actor-critic uses n-step returns: G_t^{(n)} = sum_{k=0}^{n-1} gamma^k * R_{t+k+1} + gamma^n * V(S_{t+n}) as the target for both critic updates and advantage estimation. This reduces the bias of the one-step estimate while adding more variance. The optimal n depends on the accuracy of the critic and the task.",
    explanationChinese: "多步演员-评论家使用n步回报：G_t^{(n)} = sum_{k=0}^{n-1} gamma^k * R_{t+k+1} + gamma^n * V(S_{t+n})作为评论家更新和优势估计的目标。这减少了一步估计的偏差但增加了方差。最优n取决于评论家的准确性和任务。",
    diagram: "",
    terms: ["actor_critic", "temporal_difference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 217,
    q: "What is the role of the entropy coefficient scheduling in PPO?",
    qChinese: "PPO中熵系数调度的作用是什么？",
    options: [
      "A) It has no practical impact",
      "B) Gradually reducing the entropy coefficient allows the policy to transition from exploratory to more deterministic as training progresses",
      "C) It increases the entropy over time to prevent convergence",
      "D) It controls the learning rate decay"
    ],
    optionsChinese: [
      "A) 它没有实际影响",
      "B) 逐渐减少熵系数允许策略随着训练进展从探索性转变为更确定性",
      "C) 它随时间增加熵以防止收敛",
      "D) 它控制学习率衰减"
    ],
    answer: 1,
    explanation: "The entropy coefficient in PPO controls the exploration-exploitation balance. Early in training, a higher coefficient encourages exploration of diverse strategies. As training progresses, reducing the coefficient allows the policy to become more confident and exploit what it has learned. This schedule can be linear, exponential, or adaptive.",
    explanationChinese: "PPO中的熵系数控制探索-利用平衡。在训练早期，较高的系数鼓励探索多样化的策略。随着训练进展，减少系数允许策略变得更自信并利用已学到的知识。此调度可以是线性的、指数的或自适应的。",
    diagram: "",
    terms: ["actor_critic", "policy_gradient", "exploration_exploitation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 218,
    q: "What is the 'shared network' approach in actor-critic methods?",
    qChinese: "演员-评论家方法中的'共享网络'方法是什么？",
    options: [
      "A) The actor and critic share lower-layer feature representations while having separate output heads",
      "B) Multiple agents sharing one network",
      "C) Sharing the network between training and evaluation",
      "D) Using the same network for different environments"
    ],
    optionsChinese: [
      "A) 演员和评论家共享底层特征表示，同时具有独立的输出头",
      "B) 多个智能体共享一个网络",
      "C) 在训练和评估之间共享网络",
      "D) 对不同环境使用同一网络"
    ],
    answer: 0,
    explanation: "In shared network actor-critic, a common backbone (e.g., CNN layers) extracts features, which feed into separate policy (actor) and value (critic) heads. This is parameter-efficient and allows useful features to be shared. However, the two objectives may conflict, and separate networks (as in SAC) sometimes perform better.",
    explanationChinese: "在共享网络演员-评论家中，公共骨干网络（如CNN层）提取特征，这些特征分别输入到策略（演员）和价值（评论家）头。这是参数高效的，允许共享有用特征。然而，两个目标可能冲突，独立网络（如SAC中）有时表现更好。",
    diagram: "",
    terms: ["actor_critic", "value_function", "policy_gradient"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 219,
    q: "What is off-policy actor-critic with V-trace?",
    qChinese: "带V-trace的离策略演员-评论家是什么？",
    options: [
      "A) An actor-critic method that traces the value function visually",
      "B) An actor-critic that only updates the value trace",
      "C) A method using truncated importance sampling corrections to safely learn from off-policy data in distributed settings",
      "D) A version of A2C with value function tracing"
    ],
    optionsChinese: [
      "A) 可视化追踪价值函数的演员-评论家方法",
      "B) 仅更新价值迹的演员-评论家",
      "C) 在分布式设置中使用截断重要性采样校正从离策略数据安全学习的方法",
      "D) 具有价值函数追踪的A2C版本"
    ],
    answer: 2,
    explanation: "V-trace (Espeholt et al., 2018, used in IMPALA) is an off-policy correction method for actor-critic. It clips importance sampling ratios to limit their magnitude: c_t = min(c_bar, pi(a_t|s_t)/mu(a_t|s_t)). This truncation trades a small amount of bias for greatly reduced variance, enabling stable off-policy learning in distributed architectures.",
    explanationChinese: "V-trace（Espeholt等，2018，用于IMPALA）是演员-评论家的离策略校正方法。它裁剪重要性采样比率以限制其幅度：c_t = min(c_bar, pi(a_t|s_t)/mu(a_t|s_t))。这种截断以少量偏差换取大幅减少的方差，在分布式架构中实现稳定的离策略学习。",
    diagram: "",
    terms: ["actor_critic", "exploration_exploitation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 220,
    q: "What is the difference between SAC and TD3?",
    qChinese: "SAC和TD3之间的区别是什么？",
    options: [
      "A) SAC is on-policy; TD3 is off-policy",
      "B) TD3 handles continuous actions; SAC handles discrete actions",
      "C) SAC uses a stochastic policy with entropy regularization; TD3 uses a deterministic policy with added noise",
      "D) SAC uses a single Q-network; TD3 uses two"
    ],
    optionsChinese: [
      "A) SAC是在策略的；TD3是离策略的",
      "B) TD3处理连续行动；SAC处理离散行动",
      "C) SAC使用带熵正则化的随机策略；TD3使用带添加噪声的确定性策略",
      "D) SAC使用单个Q网络；TD3使用两个"
    ],
    answer: 2,
    explanation: "Both SAC and TD3 are off-policy actor-critic methods with twin Q-critics for continuous control. The key difference is that SAC uses a stochastic policy with entropy regularization for exploration, while TD3 uses a deterministic policy with explicitly added Gaussian noise. SAC's entropy objective provides more principled and robust exploration.",
    explanationChinese: "SAC和TD3都是用于连续控制的带双Q评论家的离策略演员-评论家方法。关键区别是SAC使用带熵正则化的随机策略进行探索，而TD3使用带显式添加高斯噪声的确定性策略。SAC的熵目标提供了更有原则和稳健的探索。",
    diagram: "",
    terms: ["actor_critic", "exploration_exploitation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 221,
    q: "What is forward kinematics in robotics?",
    qChinese: "机器人学中的正运动学是什么？",
    options: [
      "A) Computing joint angles from the desired end-effector position",
      "B) Planning a forward path for the robot",
      "C) Computing the end-effector position and orientation given all joint angles",
      "D) Moving the robot forward in a straight line"
    ],
    optionsChinese: [
      "A) 从期望的末端执行器位置计算关节角度",
      "B) 为机器人规划前进路径",
      "C) 给定所有关节角度，计算末端执行器的位置和方向",
      "D) 使机器人沿直线前进"
    ],
    answer: 2,
    explanation: "Forward kinematics computes the pose (position and orientation) of the end-effector given the joint variables (angles for revolute joints, displacements for prismatic joints). It uses the chain of homogeneous transformation matrices along the kinematic chain: T = T_1 * T_2 * ... * T_n. The Denavit-Hartenberg convention provides a systematic framework.",
    explanationChinese: "正运动学给定关节变量（旋转关节的角度、移动关节的位移）计算末端执行器的位姿（位置和方向）。它使用沿运动学链的齐次变换矩阵链：T = T_1 * T_2 * ... * T_n。Denavit-Hartenberg约定提供了系统框架。",
    diagram: "",
    terms: ["robot_kinematics", "inverse_kinematics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 222,
    q: "What is inverse kinematics (IK) in robotics?",
    qChinese: "机器人学中的逆运动学（IK）是什么？",
    options: [
      "A) Computing end-effector position from joint angles",
      "B) Determining the joint angles needed to achieve a desired end-effector position and orientation",
      "C) Reversing the robot's motion",
      "D) Computing the inverse of the robot's mass matrix"
    ],
    optionsChinese: [
      "A) 从关节角度计算末端执行器位置",
      "B) 确定实现期望末端执行器位置和方向所需的关节角度",
      "C) 反转机器人的运动",
      "D) 计算机器人质量矩阵的逆"
    ],
    answer: 1,
    explanation: "Inverse kinematics solves for joint configurations that place the end-effector at a desired pose. Unlike forward kinematics (unique solution), IK may have zero, one, or multiple solutions. Analytical solutions exist for simple arms; numerical methods (Jacobian pseudo-inverse, gradient descent) are used for complex manipulators. RL can also learn IK policies.",
    explanationChinese: "逆运动学求解将末端执行器放置在期望位姿的关节配置。与正运动学（唯一解）不同，IK可能有零个、一个或多个解。简单机械臂存在解析解；复杂操纵器使用数值方法（雅可比伪逆、梯度下降）。RL也可以学习IK策略。",
    diagram: "",
    terms: ["inverse_kinematics", "robot_kinematics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 223,
    q: "What are degrees of freedom (DOF) in a robotic system?",
    qChinese: "机器人系统中的自由度（DOF）是什么？",
    options: [
      "A) The number of sensors on the robot",
      "B) The number of independent parameters needed to completely describe the robot's configuration",
      "C) The number of motors in the robot",
      "D) The range of motion of the end-effector"
    ],
    optionsChinese: [
      "A) 机器人上的传感器数量",
      "B) 完全描述机器人配置所需的独立参数数量",
      "C) 机器人中的电机数量",
      "D) 末端执行器的运动范围"
    ],
    answer: 1,
    explanation: "Degrees of freedom represent the minimum number of independent variables needed to define the robot's configuration. A 6-DOF robot arm can position and orient its end-effector arbitrarily in 3D space. Having more DOF than needed (redundancy) provides flexibility to avoid obstacles or singularities but makes IK more complex.",
    explanationChinese: "自由度表示定义机器人配置所需的最少独立变量数。6自由度机械臂可以在3D空间中任意定位和定向其末端执行器。拥有比所需更多的自由度（冗余）提供了避免障碍物或奇异点的灵活性，但使IK更复杂。",
    diagram: "",
    terms: ["robot_kinematics", "inverse_kinematics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 224,
    q: "What is the Jacobian matrix in robot kinematics?",
    qChinese: "机器人运动学中的雅可比矩阵是什么？",
    options: [
      "A) The mass matrix of the robot",
      "B) The transformation between two link frames",
      "C) The rotation matrix of the base frame",
      "D) A matrix relating joint velocities to end-effector velocities"
    ],
    optionsChinese: [
      "A) 机器人的质量矩阵",
      "B) 两个连杆坐标系之间的变换",
      "C) 基坐标系的旋转矩阵",
      "D) 将关节速度与末端执行器速度相关联的矩阵"
    ],
    answer: 3,
    explanation: "The Jacobian J(q) maps joint velocities to end-effector velocities: v = J(q) * q_dot, where v is the end-effector velocity (linear and angular) and q_dot is the joint velocity vector. The Jacobian is essential for velocity control, force mapping, singularity analysis, and numerical IK methods using the pseudo-inverse.",
    explanationChinese: "雅可比J(q)将关节速度映射到末端执行器速度：v = J(q) * q_dot，其中v是末端执行器速度（线速度和角速度），q_dot是关节速度向量。雅可比对于速度控制、力映射、奇异性分析和使用伪逆的数值IK方法至关重要。",
    diagram: "",
    terms: ["robot_kinematics", "inverse_kinematics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 225,
    q: "What is a singularity in robot kinematics?",
    qChinese: "机器人运动学中的奇异点是什么？",
    options: [
      "A) A configuration where the Jacobian loses rank and the robot loses one or more DOF of motion",
      "B) A point where the robot reaches its maximum speed",
      "C) A point where all joints are at zero angle",
      "D) A configuration with maximum torque"
    ],
    optionsChinese: [
      "A) 雅可比矩阵秩亏，机器人失去一个或多个运动自由度的配置",
      "B) 机器人达到最大速度的点",
      "C) 所有关节角度为零的点",
      "D) 具有最大扭矩的配置"
    ],
    answer: 0,
    explanation: "A kinematic singularity occurs when the Jacobian matrix becomes rank-deficient (det(J)=0 for square Jacobians). At singularities, the end-effector cannot move in certain directions, and the inverse Jacobian is undefined, causing infinite joint velocities for finite end-effector velocities. Robots should be controlled to avoid or carefully pass through singularities.",
    explanationChinese: "运动学奇异点发生在雅可比矩阵秩亏时（方阵雅可比的det(J)=0）。在奇异点处，末端执行器不能在某些方向上移动，逆雅可比未定义，导致有限末端执行器速度对应无限关节速度。应控制机器人避免或谨慎通过奇异点。",
    diagram: "",
    terms: ["robot_kinematics", "inverse_kinematics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 226,
    q: "What is the Denavit-Hartenberg (DH) convention?",
    qChinese: "什么是Denavit-Hartenberg（DH）约定？",
    options: [
      "A) A naming convention for robot joints",
      "B) A control algorithm for robot arms",
      "C) A systematic method to assign coordinate frames to robot links using four parameters per joint",
      "D) A standard for robot safety"
    ],
    optionsChinese: [
      "A) 机器人关节的命名约定",
      "B) 机械臂的控制算法",
      "C) 使用每个关节四个参数为机器人连杆分配坐标系的系统方法",
      "D) 机器人安全标准"
    ],
    answer: 2,
    explanation: "The DH convention uses four parameters per joint (theta, d, a, alpha) to describe the geometric relationship between consecutive links. These parameters define a homogeneous transformation matrix for each joint. Multiplying all these matrices gives the forward kinematics. This standardized approach simplifies kinematic analysis for any serial manipulator.",
    explanationChinese: "DH约定使用每个关节四个参数（theta、d、a、alpha）描述连续连杆之间的几何关系。这些参数为每个关节定义齐次变换矩阵。将所有这些矩阵相乘得到正运动学。这种标准化方法简化了任何串联操纵器的运动学分析。",
    diagram: "",
    terms: ["robot_kinematics", "inverse_kinematics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 227,
    q: "What is the workspace of a robot manipulator?",
    qChinese: "机器人操纵器的工作空间是什么？",
    options: [
      "A) The physical room where the robot is located",
      "B) The computer memory available for robot control",
      "C) The set of all positions and orientations reachable by the end-effector",
      "D) The range of joint angles"
    ],
    optionsChinese: [
      "A) 机器人所在的物理房间",
      "B) 可用于机器人控制的计算机内存",
      "C) 末端执行器可达的所有位置和方向的集合",
      "D) 关节角度的范围"
    ],
    answer: 2,
    explanation: "The workspace is the volume in 3D space that the end-effector can reach. The reachable workspace includes all points the end-effector can reach in at least one orientation. The dexterous workspace is the subset where the end-effector can reach with any orientation. Joint limits, link lengths, and mechanical constraints determine the workspace shape.",
    explanationChinese: "工作空间是末端执行器可以到达的3D空间中的体积。可达工作空间包括末端执行器至少以一个方向可以到达的所有点。灵巧工作空间是末端执行器可以以任何方向到达的子集。关节限制、连杆长度和机械约束决定了工作空间形状。",
    diagram: "",
    terms: ["robot_kinematics", "inverse_kinematics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 228,
    q: "What is a PID controller and how is it used in robotics?",
    qChinese: "什么是PID控制器，它在机器人学中如何使用？",
    options: [
      "A) A deep learning architecture for robot vision",
      "B) A feedback controller that uses Proportional, Integral, and Derivative terms to minimize tracking error",
      "C) A path planning algorithm",
      "D) A sensor fusion technique"
    ],
    optionsChinese: [
      "A) 用于机器人视觉的深度学习架构",
      "B) 使用比例、积分和微分项来最小化跟踪误差的反馈控制器",
      "C) 路径规划算法",
      "D) 传感器融合技术"
    ],
    answer: 1,
    explanation: "A PID controller computes the control signal u = K_p*e + K_i*integral(e) + K_d*de/dt, where e is the error between desired and actual state. P provides proportional response, I eliminates steady-state error, D provides damping. PID controllers are widely used for joint-level control in robotic arms and mobile robots.",
    explanationChinese: "PID控制器计算控制信号u = K_p*e + K_i*integral(e) + K_d*de/dt，其中e是期望状态与实际状态之间的误差。P提供比例响应，I消除稳态误差，D提供阻尼。PID控制器广泛用于机械臂和移动机器人的关节级控制。",
    diagram: "",
    terms: ["pid_controller", "robot_kinematics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 229,
    q: "What is robot dynamics and how does it differ from kinematics?",
    qChinese: "什么是机器人动力学，它与运动学有何不同？",
    options: [
      "A) Dynamics and kinematics are the same thing",
      "B) Dynamics is faster; kinematics is slower",
      "C) Kinematics studies motion without forces; dynamics studies the relationship between forces/torques and motion",
      "D) Kinematics uses neural networks; dynamics uses physics"
    ],
    optionsChinese: [
      "A) 动力学和运动学是同一回事",
      "B) 动力学更快；运动学更慢",
      "C) 运动学研究没有力的运动；动力学研究力/扭矩与运动之间的关系",
      "D) 运动学使用神经网络；动力学使用物理学"
    ],
    answer: 2,
    explanation: "Kinematics describes the geometry of motion (positions, velocities, accelerations) without considering forces. Dynamics relates forces and torques to the resulting motion through equations of motion: tau = M(q)*q_ddot + C(q,q_dot)*q_dot + g(q). Understanding dynamics is essential for force control, trajectory planning, and accurate simulation.",
    explanationChinese: "运动学描述运动的几何（位置、速度、加速度）而不考虑力。动力学通过运动方程将力和扭矩与产生的运动联系起来：tau = M(q)*q_ddot + C(q,q_dot)*q_dot + g(q)。理解动力学对于力控制、轨迹规划和精确模拟至关重要。",
    diagram: "",
    terms: ["robot_kinematics", "pid_controller"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 230,
    q: "What is the configuration space (C-space) of a robot?",
    qChinese: "机器人的配置空间（C空间）是什么？",
    options: [
      "A) The space of all possible joint configurations, where each point represents a unique robot pose",
      "B) The 3D workspace where the robot operates",
      "C) The set of all possible sensor configurations",
      "D) The memory space used by the robot controller"
    ],
    optionsChinese: [
      "A) 所有可能关节配置的空间，其中每个点代表一个独特的机器人位姿",
      "B) 机器人操作的3D工作空间",
      "C) 所有可能传感器配置的集合",
      "D) 机器人控制器使用的内存空间"
    ],
    answer: 0,
    explanation: "The configuration space has as many dimensions as the robot has DOF. For a 6-DOF arm, C-space is 6-dimensional. Each point in C-space corresponds to a specific set of joint angles. Obstacles in the workspace map to regions in C-space (C-obstacles). Path planning is often performed in C-space to ensure collision-free motion.",
    explanationChinese: "配置空间的维度数等于机器人的自由度数。对于6自由度机械臂，C空间是6维的。C空间中的每个点对应一组特定的关节角度。工作空间中的障碍物映射到C空间中的区域（C障碍）。路径规划通常在C空间中执行以确保无碰撞运动。",
    diagram: "",
    terms: ["robot_kinematics", "path_planning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 231,
    q: "What is the difference between revolute and prismatic joints?",
    qChinese: "旋转关节和移动关节有什么区别？",
    options: [
      "A) Revolute joints are stronger than prismatic joints",
      "B) Prismatic joints are only used in mobile robots",
      "C) Revolute joints provide rotational motion; prismatic joints provide linear (sliding) motion",
      "D) Revolute joints have more DOF than prismatic joints"
    ],
    optionsChinese: [
      "A) 旋转关节比移动关节更强",
      "B) 移动关节仅用于移动机器人",
      "C) 旋转关节提供旋转运动；移动关节提供线性（滑动）运动",
      "D) 旋转关节比移动关节有更多自由度"
    ],
    answer: 2,
    explanation: "Revolute (R) joints allow rotation about an axis (like a hinge), with the joint variable being the angle theta. Prismatic (P) joints allow linear sliding along an axis, with the joint variable being displacement d. Most robot arms use revolute joints, while some (like SCARA robots) use a combination. Each joint provides one DOF.",
    explanationChinese: "旋转（R）关节允许绕轴旋转（像铰链），关节变量是角度theta。移动（P）关节允许沿轴线性滑动，关节变量是位移d。大多数机械臂使用旋转关节，而一些（如SCARA机器人）使用组合。每个关节提供一个自由度。",
    diagram: "",
    terms: ["robot_kinematics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 232,
    q: "What is impedance control in robotics?",
    qChinese: "机器人学中的阻抗控制是什么？",
    options: [
      "A) Controlling the dynamic relationship between the robot's force and motion (making it behave like a spring-damper system)",
      "B) Controlling the electrical impedance of robot circuits",
      "C) Controlling the robot's speed to avoid impediments",
      "D) A path planning method that avoids impedance in the environment"
    ],
    optionsChinese: [
      "A) 控制机器人力与运动之间的动态关系（使其表现得像弹簧-阻尼器系统）",
      "B) 控制机器人电路的电阻抗",
      "C) 控制机器人速度以避免阻碍",
      "D) 避免环境中阻抗的路径规划方法"
    ],
    answer: 0,
    explanation: "Impedance control regulates the dynamic relationship between force and position rather than controlling each independently. The robot is commanded to behave as a mass-spring-damper: F = M_d*(x_ddot_d - x_ddot) + B_d*(x_dot_d - x_dot) + K_d*(x_d - x). This is crucial for safe contact tasks like assembly and human-robot interaction.",
    explanationChinese: "阻抗控制调节力和位置之间的动态关系，而不是独立控制每一个。机器人被命令表现为质量-弹簧-阻尼器：F = M_d*(x_ddot_d - x_ddot) + B_d*(x_dot_d - x_dot) + K_d*(x_d - x)。这对于装配和人机交互等安全接触任务至关重要。",
    diagram: "",
    terms: ["robot_kinematics", "pid_controller"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 233,
    q: "How is RL used for robot locomotion learning?",
    qChinese: "RL如何用于机器人运动学习？",
    options: [
      "A) RL trains policies that map sensory observations to joint torques or position commands for walking, running, or other gaits",
      "B) RL is not applicable to locomotion tasks",
      "C) RL only controls the robot's vision system",
      "D) RL plans static paths for the robot to follow"
    ],
    optionsChinese: [
      "A) RL训练将感官观测映射到关节扭矩或位置命令的策略，用于行走、跑步或其他步态",
      "B) RL不适用于运动任务",
      "C) RL只控制机器人的视觉系统",
      "D) RL为机器人规划静态路径"
    ],
    answer: 0,
    explanation: "RL has been successfully applied to learn locomotion for legged robots (quadrupeds, bipeds). The policy maps proprioceptive observations (joint angles, velocities, body orientation) to joint commands. Training often occurs in simulation (MuJoCo, Isaac Gym) and transfers to real robots via sim-to-real techniques like domain randomization.",
    explanationChinese: "RL已成功应用于腿式机器人（四足、双足）的运动学习。策略将本体感觉观测（关节角度、速度、身体方向）映射到关节命令。训练通常在仿真中进行（MuJoCo、Isaac Gym），并通过域随机化等仿真到真实技术转移到真实机器人。",
    diagram: "",
    terms: ["robot_kinematics", "policy_gradient", "actor_critic"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 234,
    q: "What is sim-to-real transfer in robot RL?",
    qChinese: "机器人RL中的仿真到真实转移是什么？",
    options: [
      "A) Transferring simulation software to real hardware",
      "B) Training a policy in simulation and deploying it on a real robot, bridging the reality gap through techniques like domain randomization",
      "C) Simulating real-world physics exactly",
      "D) Using real robot data to improve simulations"
    ],
    optionsChinese: [
      "A) 将仿真软件转移到真实硬件",
      "B) 在仿真中训练策略并部署到真实机器人上，通过域随机化等技术弥合现实差距",
      "C) 精确模拟真实世界物理",
      "D) 使用真实机器人数据改进仿真"
    ],
    answer: 1,
    explanation: "Sim-to-real transfer trains policies in simulation (safe, fast, cheap) and deploys them on real robots. The 'reality gap' between simulation and reality is addressed using domain randomization (varying simulation parameters), system identification, and adaptive methods. This approach enabled breakthroughs in dexterous manipulation and agile locomotion.",
    explanationChinese: "仿真到真实转移在仿真中（安全、快速、廉价）训练策略并部署到真实机器人上。仿真与现实之间的'现实差距'通过域随机化（改变仿真参数）、系统辨识和自适应方法来解决。这种方法在灵巧操作和敏捷运动方面实现了突破。",
    diagram: "",
    terms: ["robot_kinematics", "model_based_rl"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 235,
    q: "What is the Newton-Euler method for robot dynamics?",
    qChinese: "什么是机器人动力学的牛顿-欧拉方法？",
    options: [
      "A) A numerical integration method for robot control",
      "B) A gradient descent method for dynamics optimization",
      "C) A recursive algorithm that computes joint torques by propagating velocities forward and forces backward through the kinematic chain",
      "D) An energy-based method for static analysis"
    ],
    optionsChinese: [
      "A) 用于机器人控制的数值积分方法",
      "B) 动力学优化的梯度下降方法",
      "C) 通过在运动学链中向前传播速度和向后传播力来计算关节扭矩的递归算法",
      "D) 用于静态分析的能量方法"
    ],
    answer: 2,
    explanation: "The Newton-Euler method recursively computes inverse dynamics (torques from motion). The forward pass propagates velocities and accelerations from base to end-effector. The backward pass propagates forces and torques from end-effector to base. It has O(n) complexity for n joints, making it efficient for real-time control of high-DOF robots.",
    explanationChinese: "牛顿-欧拉方法递归计算逆动力学（从运动计算扭矩）。前向传播从基座到末端执行器传播速度和加速度。后向传播从末端执行器到基座传播力和扭矩。对于n个关节具有O(n)复杂度，使其适合高自由度机器人的实时控制。",
    diagram: "",
    terms: ["robot_kinematics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 236,
    q: "What is a redundant manipulator?",
    qChinese: "什么是冗余操纵器？",
    options: [
      "A) A robot with backup systems for reliability",
      "B) A robot with duplicate sensors",
      "C) A robot with more DOF than needed for the task, providing extra flexibility",
      "D) A robot that can perform the same task in multiple ways"
    ],
    optionsChinese: [
      "A) 具有备份系统以提高可靠性的机器人",
      "B) 具有重复传感器的机器人",
      "C) 自由度比任务所需更多，提供额外灵活性的机器人",
      "D) 可以以多种方式执行同一任务的机器人"
    ],
    answer: 2,
    explanation: "A redundant manipulator has more DOF than the minimum required for the task (e.g., a 7-DOF arm for a 6-DOF task). This redundancy provides infinite IK solutions, allowing the robot to optimize secondary objectives like avoiding obstacles, staying away from joint limits, minimizing energy, or avoiding singularities.",
    explanationChinese: "冗余操纵器的自由度比任务所需的最少自由度多（例如，6自由度任务的7自由度机械臂）。这种冗余提供了无限的IK解，允许机器人优化次要目标，如避免障碍物、远离关节限制、最小化能量或避免奇异点。",
    diagram: "",
    terms: ["robot_kinematics", "inverse_kinematics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 237,
    q: "What is trajectory planning for robot arms?",
    qChinese: "机械臂的轨迹规划是什么？",
    options: [
      "A) Planning the shape of the robot arm",
      "B) Planning which tasks the robot should perform",
      "C) Generating a time-parameterized path (positions, velocities, accelerations) for the robot joints or end-effector",
      "D) Designing the robot's kinematic structure"
    ],
    optionsChinese: [
      "A) 规划机械臂的形状",
      "B) 规划机器人应执行的任务",
      "C) 为机器人关节或末端执行器生成时间参数化路径（位置、速度、加速度）",
      "D) 设计机器人的运动学结构"
    ],
    answer: 2,
    explanation: "Trajectory planning generates smooth, feasible motion profiles specifying positions, velocities, and accelerations over time. Methods include polynomial interpolation (cubic, quintic), trapezoidal velocity profiles, and splines. The trajectory must satisfy constraints on joint limits, velocities, accelerations, and jerk while being smooth and time-optimal.",
    explanationChinese: "轨迹规划生成平滑、可行的运动轮廓，指定随时间变化的位置、速度和加速度。方法包括多项式插值（三次、五次）、梯形速度轮廓和样条。轨迹必须满足关节限制、速度、加速度和加加速度的约束，同时平滑且时间最优。",
    diagram: "",
    terms: ["robot_kinematics", "path_planning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 238,
    q: "What is computed torque control?",
    qChinese: "什么是计算力矩控制？",
    options: [
      "A) A model-based control that uses the full dynamic model to compute feedforward torques that linearize the system, combined with PD feedback",
      "B) A method that computes torques using PID control only",
      "C) Computing torques from sensor readings",
      "D) A reinforcement learning method for torque control"
    ],
    optionsChinese: [
      "A) 使用完整动力学模型计算前馈扭矩以线性化系统，结合PD反馈的基于模型的控制",
      "B) 仅使用PID控制计算扭矩的方法",
      "C) 从传感器读数计算扭矩",
      "D) 用于扭矩控制的强化学习方法"
    ],
    answer: 0,
    explanation: "Computed torque control (inverse dynamics control) uses the dynamic model to compute: tau = M(q)*q_ddot_d + C(q,q_dot)*q_dot + g(q) + K_p*e + K_d*e_dot. The feedforward terms compensate for gravity, Coriolis forces, and inertia, while PD terms handle tracking errors. This achieves precise trajectory tracking when the dynamic model is accurate.",
    explanationChinese: "计算力矩控制（逆动力学控制）使用动力学模型计算：tau = M(q)*q_ddot_d + C(q,q_dot)*q_dot + g(q) + K_p*e + K_d*e_dot。前馈项补偿重力、科里奥利力和惯性，PD项处理跟踪误差。当动力学模型准确时，这实现了精确的轨迹跟踪。",
    diagram: "",
    terms: ["robot_kinematics", "pid_controller"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 239,
    q: "How does RL compare to classical control for robotic manipulation?",
    qChinese: "RL与经典控制在机器人操作方面如何比较？",
    options: [
      "A) RL is always superior to classical control",
      "B) Classical control cannot handle any robotic tasks",
      "C) RL can learn complex behaviors without explicit models but requires extensive training; classical control provides stability guarantees but needs accurate models",
      "D) RL and classical control use identical mathematical frameworks"
    ],
    optionsChinese: [
      "A) RL总是优于经典控制",
      "B) 经典控制不能处理任何机器人任务",
      "C) RL可以在没有显式模型的情况下学习复杂行为但需要大量训练；经典控制提供稳定性保证但需要准确模型",
      "D) RL和经典控制使用相同的数学框架"
    ],
    answer: 2,
    explanation: "RL can learn end-to-end policies for complex manipulation tasks (deformable objects, dexterous grasping) where accurate models are hard to build. Classical control offers formal stability guarantees and works well when models are available. In practice, hybrid approaches combining RL with classical control (e.g., RL for high-level decisions, PID for low-level tracking) often work best.",
    explanationChinese: "RL可以为复杂操作任务（可变形物体、灵巧抓取）学习端到端策略，其中准确模型难以构建。经典控制提供形式化的稳定性保证，在模型可用时效果良好。在实践中，结合RL与经典控制的混合方法（例如RL用于高层决策，PID用于底层跟踪）通常效果最好。",
    diagram: "",
    terms: ["robot_kinematics", "pid_controller", "policy_gradient"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 240,
    q: "What is the homogeneous transformation matrix in robotics?",
    qChinese: "机器人学中的齐次变换矩阵是什么？",
    options: [
      "A) A 3x3 rotation matrix",
      "B) The identity matrix used for initialization",
      "C) A matrix that normalizes joint angles",
      "D) A 4x4 matrix combining rotation and translation to describe the pose of one frame relative to another"
    ],
    optionsChinese: [
      "A) 3x3旋转矩阵",
      "B) 用于初始化的单位矩阵",
      "C) 归一化关节角度的矩阵",
      "D) 结合旋转和平移以描述一个坐标系相对于另一个坐标系位姿的4x4矩阵"
    ],
    answer: 3,
    explanation: "The homogeneous transformation matrix T = [[R, p], [0, 1]] is a 4x4 matrix where R is a 3x3 rotation matrix and p is a 3x1 translation vector. It enables combining rotation and translation into a single matrix multiplication. Chaining these matrices along the kinematic chain yields the forward kinematics of the robot.",
    explanationChinese: "齐次变换矩阵T = [[R, p], [0, 1]]是一个4x4矩阵，其中R是3x3旋转矩阵，p是3x1平移向量。它使旋转和平移能够合并为单次矩阵乘法。沿运动学链连接这些矩阵得到机器人的正运动学。",
    diagram: "",
    terms: ["robot_kinematics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 241,
    q: "What is the A* search algorithm used for in robotics?",
    qChinese: "A*搜索算法在机器人学中用于什么？",
    options: [
      "A) Finding the shortest (or lowest-cost) path from a start to a goal on a graph or grid using heuristic-guided search",
      "B) Training neural networks for robot control",
      "C) Optimizing the robot's joint angles",
      "D) Controlling the robot's speed"
    ],
    optionsChinese: [
      "A) 使用启发式引导搜索在图或网格上找到从起点到目标的最短（或最低成本）路径",
      "B) 训练用于机器人控制的神经网络",
      "C) 优化机器人的关节角度",
      "D) 控制机器人的速度"
    ],
    answer: 0,
    explanation: "A* combines the actual cost g(n) from start to node n with a heuristic h(n) estimating the remaining cost to the goal: f(n) = g(n) + h(n). It guarantees finding the optimal path if the heuristic is admissible (never overestimates). A* is widely used in robot navigation on grid maps and in configuration space planning.",
    explanationChinese: "A*结合从起点到节点n的实际成本g(n)和估计到目标剩余成本的启发式h(n)：f(n) = g(n) + h(n)。如果启发式是可接受的（从不高估），它保证找到最优路径。A*广泛用于网格地图上的机器人导航和配置空间规划。",
    diagram: "",
    terms: ["path_planning", "state_space"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 242,
    q: "What is the RRT (Rapidly-exploring Random Tree) algorithm?",
    qChinese: "什么是RRT（快速探索随机树）算法？",
    options: [
      "A) A sampling-based path planning algorithm that incrementally builds a tree by randomly sampling and extending toward new configurations",
      "B) A reinforcement learning algorithm",
      "C) A real-time rendering technique for robot visualization",
      "D) A recursive algorithm for robot trajectory optimization"
    ],
    optionsChinese: [
      "A) 通过随机采样和向新配置扩展来增量构建树的基于采样的路径规划算法",
      "B) 强化学习算法",
      "C) 用于机器人可视化的实时渲染技术",
      "D) 用于机器人轨迹优化的递归算法"
    ],
    answer: 0,
    explanation: "RRT rapidly explores the configuration space by: (1) sampling a random point, (2) finding the nearest tree node, (3) extending toward the sample by a step size. The tree grows to cover the space efficiently. RRT is probabilistically complete (finds a path if one exists given enough time) and works well in high-dimensional spaces.",
    explanationChinese: "RRT通过以下步骤快速探索配置空间：(1)采样随机点，(2)找到最近的树节点，(3)以步长向样本方向扩展。树快速增长以覆盖空间。RRT是概率完备的（在给定足够时间的情况下如果路径存在就能找到），在高维空间中效果良好。",
    diagram: "",
    terms: ["path_planning", "state_space"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 243,
    q: "What is RRT* and how does it improve upon RRT?",
    qChinese: "什么是RRT*，它如何改进RRT？",
    options: [
      "A) RRT* is faster but finds suboptimal paths",
      "B) RRT* works only in 2D spaces",
      "C) RRT* uses a different sampling strategy",
      "D) RRT* adds rewiring to RRT, asymptotically converging to the optimal path as samples increase"
    ],
    optionsChinese: [
      "A) RRT*更快但找到次优路径",
      "B) RRT*仅在2D空间中工作",
      "C) RRT*使用不同的采样策略",
      "D) RRT*向RRT添加重连线，随着样本增加渐近收敛到最优路径"
    ],
    answer: 3,
    explanation: "RRT* extends RRT by: (1) choosing the parent that minimizes path cost (not just nearest neighbor), (2) rewiring nearby nodes if the new node provides a shorter path. These modifications ensure asymptotic optimality—as the number of samples approaches infinity, the path cost converges to the optimal. The computational overhead is minimal.",
    explanationChinese: "RRT*通过以下方式扩展RRT：(1)选择最小化路径成本的父节点（不仅仅是最近邻），(2)如果新节点提供更短路径则重连附近节点。这些修改确保渐近最优性——随着样本数趋近无穷，路径成本收敛到最优。计算开销很小。",
    diagram: "",
    terms: ["path_planning", "state_space"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 244,
    q: "What is a PRM (Probabilistic Roadmap)?",
    qChinese: "什么是PRM（概率路线图）？",
    options: [
      "A) A probabilistic reward model",
      "B) A path planning method that builds a graph of collision-free configurations in a preprocessing phase, then queries it for paths",
      "C) A probability distribution over robot motions",
      "D) A particle filter for robot localization"
    ],
    optionsChinese: [
      "A) 概率奖励模型",
      "B) 在预处理阶段构建无碰撞配置图然后查询路径的路径规划方法",
      "C) 机器人运动上的概率分布",
      "D) 用于机器人定位的粒子滤波器"
    ],
    answer: 1,
    explanation: "PRM works in two phases: (1) Learning phase—sample random configurations, check for collisions, and connect nearby collision-free samples to build a roadmap graph. (2) Query phase—connect start and goal to the roadmap and find the shortest path using graph search. PRMs are efficient for multiple queries in the same environment.",
    explanationChinese: "PRM分两个阶段工作：(1)学习阶段——采样随机配置，检查碰撞，连接附近的无碰撞样本以构建路线图。(2)查询阶段——将起点和目标连接到路线图并使用图搜索找到最短路径。PRM对于同一环境中的多次查询很高效。",
    diagram: "",
    terms: ["path_planning", "state_space"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 245,
    q: "What is the potential field method for robot navigation?",
    qChinese: "用于机器人导航的势场方法是什么？",
    options: [
      "A) A method that uses electric potential fields",
      "B) Using gravitational potential for path planning",
      "C) A method that plans paths based on the robot's potential energy",
      "D) The robot is attracted toward the goal and repelled by obstacles using virtual attractive and repulsive force fields"
    ],
    optionsChinese: [
      "A) 使用电势场的方法",
      "B) 使用重力势进行路径规划",
      "C) 基于机器人势能规划路径的方法",
      "D) 使用虚拟吸引力和排斥力场将机器人吸引向目标并被障碍物排斥"
    ],
    answer: 3,
    explanation: "The potential field method creates an artificial potential: U(q) = U_att(q) + U_rep(q). The attractive potential pulls the robot toward the goal; repulsive potentials push it away from obstacles. The robot follows the negative gradient. While simple and reactive, it can get stuck in local minima (e.g., U-shaped obstacles).",
    explanationChinese: "势场方法创建人工势场：U(q) = U_att(q) + U_rep(q)。吸引势将机器人拉向目标；排斥势将其推离障碍物。机器人遵循负梯度。虽然简单且反应式，但它可能陷入局部最小值（例如U形障碍物）。",
    diagram: "",
    terms: ["path_planning", "robot_kinematics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 246,
    q: "What is Dijkstra's algorithm and how does it relate to A*?",
    qChinese: "什么是Dijkstra算法，它与A*如何关联？",
    options: [
      "A) Dijkstra's is faster than A*",
      "B) A* is a special case of Dijkstra's",
      "C) Dijkstra's finds shortest paths without a heuristic; A* adds a heuristic to guide search, making it more efficient",
      "D) They solve completely different problems"
    ],
    optionsChinese: [
      "A) Dijkstra比A*更快",
      "B) A*是Dijkstra的特例",
      "C) Dijkstra在没有启发式的情况下找到最短路径；A*添加启发式来引导搜索，使其更高效",
      "D) 它们解决完全不同的问题"
    ],
    answer: 2,
    explanation: "Dijkstra's algorithm finds shortest paths by expanding nodes in order of their cost from the start (f(n) = g(n)). A* adds a heuristic: f(n) = g(n) + h(n), which directs the search toward the goal and avoids exploring irrelevant regions. A* with h(n) = 0 reduces to Dijkstra's. Both guarantee optimal paths, but A* is typically much faster.",
    explanationChinese: "Dijkstra算法通过按从起点的成本顺序扩展节点（f(n) = g(n)）找到最短路径。A*添加启发式：f(n) = g(n) + h(n)，将搜索引导向目标并避免探索无关区域。h(n) = 0时A*简化为Dijkstra。两者都保证最优路径，但A*通常快得多。",
    diagram: "",
    terms: ["path_planning", "state_space"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 247,
    q: "What is the difference between global and local path planning?",
    qChinese: "全局路径规划和局部路径规划有什么区别？",
    options: [
      "A) Global planning computes a complete path using a known map; local planning handles real-time obstacle avoidance with sensor data",
      "B) Global planning is for outdoor robots; local planning is for indoor robots",
      "C) Local planning is always better than global planning",
      "D) Global planning uses RL; local planning uses classical methods"
    ],
    optionsChinese: [
      "A) 全局规划使用已知地图计算完整路径；局部规划使用传感器数据处理实时避障",
      "B) 全局规划用于室外机器人；局部规划用于室内机器人",
      "C) 局部规划总是优于全局规划",
      "D) 全局规划使用RL；局部规划使用经典方法"
    ],
    answer: 0,
    explanation: "Global planning (A*, RRT, PRM) uses a complete map to find a path from start to goal. Local planning (potential fields, DWA, VFH) uses real-time sensor data to avoid obstacles and follow the global path. Most robot navigation systems use both: a global planner for the overall route and a local planner for real-time adjustments.",
    explanationChinese: "全局规划（A*、RRT、PRM）使用完整地图找到从起点到目标的路径。局部规划（势场、DWA、VFH）使用实时传感器数据避障并遵循全局路径。大多数机器人导航系统两者兼用：全局规划器用于整体路线，局部规划器用于实时调整。",
    diagram: "",
    terms: ["path_planning", "sensor_fusion"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 248,
    q: "What is the Dynamic Window Approach (DWA) for mobile robot navigation?",
    qChinese: "用于移动机器人导航的动态窗口方法（DWA）是什么？",
    options: [
      "A) A method that adjusts the robot's visual window",
      "B) A local planning method that samples velocity commands within dynamic constraints and selects the best based on goal proximity, obstacle clearance, and speed",
      "C) A deep learning method for window detection",
      "D) A method for planning through doorways and windows"
    ],
    optionsChinese: [
      "A) 调整机器人视觉窗口的方法",
      "B) 在动态约束内采样速度命令并根据目标接近度、障碍物间隙和速度选择最佳的局部规划方法",
      "C) 用于窗口检测的深度学习方法",
      "D) 规划通过门廊和窗户的方法"
    ],
    answer: 1,
    explanation: "DWA considers only velocities reachable within one time step given acceleration constraints (the dynamic window). It evaluates candidate velocities based on: heading toward the goal, distance to the nearest obstacle, and forward speed. The objective function balances these criteria to select the best velocity command for safe, efficient navigation.",
    explanationChinese: "DWA只考虑在给定加速度约束下一个时间步内可达的速度（动态窗口）。它根据以下标准评估候选速度：朝向目标、到最近障碍物的距离和前进速度。目标函数平衡这些标准以选择安全、高效导航的最佳速度命令。",
    diagram: "",
    terms: ["path_planning", "robot_kinematics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 249,
    q: "How can RL be used for robot navigation and path planning?",
    qChinese: "RL如何用于机器人导航和路径规划？",
    options: [
      "A) RL cannot be used for navigation",
      "B) RL replaces all classical path planning algorithms",
      "C) RL learns navigation policies from sensor data that map observations to velocity commands, handling dynamic environments without explicit maps",
      "D) RL only works for navigation in simulation"
    ],
    optionsChinese: [
      "A) RL不能用于导航",
      "B) RL替代所有经典路径规划算法",
      "C) RL从传感器数据学习导航策略，将观测映射到速度命令，在没有显式地图的情况下处理动态环境",
      "D) RL仅在仿真中用于导航"
    ],
    answer: 2,
    explanation: "RL can learn reactive navigation policies that map raw sensor inputs (lidar, camera) directly to velocity commands. This end-to-end approach can handle dynamic obstacles, partial observability, and situations not covered by classical planners. Deep RL has been used for mapless navigation, social navigation, and navigation in unstructured environments.",
    explanationChinese: "RL可以学习将原始传感器输入（激光雷达、相机）直接映射到速度命令的反应式导航策略。这种端到端方法可以处理动态障碍物、部分可观测性和经典规划器未覆盖的情况。深度RL已用于无地图导航、社交导航和非结构化环境中的导航。",
    diagram: "",
    terms: ["path_planning", "policy_gradient", "sensor_fusion"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 250,
    q: "What is the 'bug algorithm' family for robot navigation?",
    qChinese: "用于机器人导航的'Bug算法'族是什么？",
    options: [
      "A) Simple reactive navigation algorithms that follow obstacle boundaries to navigate around them toward a goal",
      "B) Algorithms for debugging robot software",
      "C) Algorithms inspired by insect swarm behavior",
      "D) Algorithms for detecting software bugs in robot controllers"
    ],
    optionsChinese: [
      "A) 沿障碍物边界导航绕过它们到达目标的简单反应式导航算法",
      "B) 调试机器人软件的算法",
      "C) 受昆虫群体行为启发的算法",
      "D) 检测机器人控制器中软件缺陷的算法"
    ],
    answer: 0,
    explanation: "Bug algorithms (Bug0, Bug1, Bug2, TangentBug) are simple reactive navigation strategies. The robot moves toward the goal until hitting an obstacle, then follows the obstacle boundary until it can resume moving toward the goal. Despite their simplicity, they guarantee reaching the goal if a path exists. They require minimal sensor information (contact or proximity).",
    explanationChinese: "Bug算法（Bug0、Bug1、Bug2、TangentBug）是简单的反应式导航策略。机器人朝目标移动直到碰到障碍物，然后沿障碍物边界行走直到可以恢复朝目标移动。尽管简单，如果路径存在它们保证到达目标。它们需要最少的传感器信息（接触或接近）。",
    diagram: "",
    terms: ["path_planning", "sensor_fusion"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 251,
    q: "What is SLAM (Simultaneous Localization and Mapping)?",
    qChinese: "什么是SLAM（同时定位与建图）？",
    options: [
      "A) The problem of building a map of an unknown environment while simultaneously tracking the robot's location within it",
      "B) A method for only building maps",
      "C) A sensor calibration technique",
      "D) A method for localizing objects in a known map"
    ],
    optionsChinese: [
      "A) 在同时跟踪机器人在其中位置的同时构建未知环境地图的问题",
      "B) 仅用于建图的方法",
      "C) 传感器校准技术",
      "D) 在已知地图中定位对象的方法"
    ],
    answer: 0,
    explanation: "SLAM is a fundamental robotics problem where the robot must simultaneously estimate its own pose (localization) and build a consistent map of the environment. The chicken-and-egg nature of SLAM (needing a map for localization, needing a location for mapping) makes it challenging. EKF-SLAM, particle filter SLAM, and graph-based SLAM are common approaches.",
    explanationChinese: "SLAM是一个基本的机器人问题，机器人必须同时估计自己的位姿（定位）并构建环境的一致地图。SLAM的鸡生蛋蛋生鸡性质（定位需要地图，建图需要位置）使其具有挑战性。EKF-SLAM、粒子滤波SLAM和基于图的SLAM是常见方法。",
    diagram: "",
    terms: ["slam", "sensor_fusion"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 252,
    q: "What is the Kalman filter and how is it used in robotics?",
    qChinese: "什么是卡尔曼滤波器，它在机器人学中如何使用？",
    options: [
      "A) A noise removal filter for images",
      "B) A filter that removes outlier data points",
      "C) An optimal recursive estimator that fuses noisy sensor measurements with a dynamic model to estimate the state",
      "D) A frequency-domain filter for vibration analysis"
    ],
    optionsChinese: [
      "A) 图像去噪滤波器",
      "B) 移除异常数据点的滤波器",
      "C) 将噪声传感器测量与动态模型融合以估计状态的最优递归估计器",
      "D) 用于振动分析的频域滤波器"
    ],
    answer: 2,
    explanation: "The Kalman filter alternates between prediction (using the motion model) and update (using sensor measurements) steps. For linear systems with Gaussian noise, it is the optimal estimator minimizing mean squared error. In robotics, it is used for state estimation, sensor fusion, localization, and EKF-SLAM (Extended KF for nonlinear systems).",
    explanationChinese: "卡尔曼滤波器在预测（使用运动模型）和更新（使用传感器测量）步骤之间交替。对于具有高斯噪声的线性系统，它是最小化均方误差的最优估计器。在机器人学中，它用于状态估计、传感器融合、定位和EKF-SLAM（用于非线性系统的扩展KF）。",
    diagram: "",
    terms: ["sensor_fusion", "slam"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 253,
    q: "What is the Extended Kalman Filter (EKF)?",
    qChinese: "什么是扩展卡尔曼滤波器（EKF）？",
    options: [
      "A) A Kalman filter with more sensors",
      "B) A Kalman filter that runs for more iterations",
      "C) A Kalman filter with extended range",
      "D) A Kalman filter extended to nonlinear systems by linearizing the motion and observation models using Jacobians"
    ],
    optionsChinese: [
      "A) 具有更多传感器的卡尔曼滤波器",
      "B) 运行更多迭代的卡尔曼滤波器",
      "C) 具有扩展范围的卡尔曼滤波器",
      "D) 通过使用雅可比矩阵线性化运动和观测模型扩展到非线性系统的卡尔曼滤波器"
    ],
    answer: 3,
    explanation: "The EKF handles nonlinear state transition f(x) and observation h(x) models by linearizing them around the current estimate using first-order Taylor expansion (Jacobians). The prediction and update steps use these linearized models. EKF is widely used in robotics for localization and SLAM, though it may diverge for highly nonlinear systems.",
    explanationChinese: "EKF通过使用一阶泰勒展开（雅可比）在当前估计周围线性化来处理非线性状态转移f(x)和观测h(x)模型。预测和更新步骤使用这些线性化模型。EKF在机器人定位和SLAM中广泛使用，尽管对于高度非线性系统可能发散。",
    diagram: "",
    terms: ["sensor_fusion", "slam"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 254,
    q: "What is a particle filter (Monte Carlo localization)?",
    qChinese: "什么是粒子滤波器（蒙特卡罗定位）？",
    options: [
      "A) A filter that removes physical particles from sensor data",
      "B) A technique for filtering particle physics data",
      "C) A neural network for filtering signals",
      "D) A recursive Bayesian estimation method using a set of weighted samples (particles) to represent the probability distribution over states"
    ],
    optionsChinese: [
      "A) 从传感器数据中移除物理粒子的滤波器",
      "B) 过滤粒子物理数据的技术",
      "C) 用于信号滤波的神经网络",
      "D) 使用一组加权样本（粒子）表示状态上概率分布的递归贝叶斯估计方法"
    ],
    answer: 3,
    explanation: "A particle filter represents the belief state as a set of weighted particles, each representing a possible state. Particles are propagated through the motion model and reweighted based on sensor observations. Low-weight particles are replaced through resampling. Particle filters handle nonlinear, non-Gaussian systems and are popular for robot localization (MCL).",
    explanationChinese: "粒子滤波器将信念状态表示为一组加权粒子，每个粒子代表一个可能的状态。粒子通过运动模型传播并根据传感器观测重新加权。低权重粒子通过重采样替换。粒子滤波器处理非线性、非高斯系统，在机器人定位（MCL）中很流行。",
    diagram: "",
    terms: ["sensor_fusion", "slam", "monte_carlo_method"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 255,
    q: "What is sensor fusion?",
    qChinese: "什么是传感器融合？",
    options: [
      "A) Physically combining multiple sensors into one",
      "B) Using only the best sensor and discarding others",
      "C) Combining data from multiple sensors to produce more accurate and reliable state estimates than any single sensor alone",
      "D) Calibrating sensors to give identical readings"
    ],
    optionsChinese: [
      "A) 将多个传感器物理组合为一个",
      "B) 只使用最好的传感器并丢弃其他传感器",
      "C) 结合多个传感器的数据以产生比任何单一传感器更准确可靠的状态估计",
      "D) 校准传感器使其给出相同的读数"
    ],
    answer: 2,
    explanation: "Sensor fusion integrates data from multiple sources (IMU, GPS, lidar, cameras, wheel encoders) to achieve better accuracy, reliability, and coverage. The Kalman filter is the classic approach for Gaussian noise. Modern methods include complementary filters, graph optimization, and deep learning-based fusion. Each sensor's strengths compensate for others' weaknesses.",
    explanationChinese: "传感器融合集成来自多个来源（IMU、GPS、激光雷达、相机、轮编码器）的数据以实现更好的准确性、可靠性和覆盖范围。卡尔曼滤波器是高斯噪声的经典方法。现代方法包括互补滤波器、图优化和基于深度学习的融合。每个传感器的优势补偿了其他传感器的弱点。",
    diagram: "",
    terms: ["sensor_fusion", "slam"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 256,
    q: "What is graph-based SLAM?",
    qChinese: "什么是基于图的SLAM？",
    options: [
      "A) Formulating SLAM as a graph optimization problem where nodes are poses and edges are constraints from sensor measurements",
      "B) SLAM using graph neural networks",
      "C) SLAM that outputs a graph of the environment",
      "D) A graphical user interface for SLAM"
    ],
    optionsChinese: [
      "A) 将SLAM公式化为图优化问题，其中节点是位姿，边是来自传感器测量的约束",
      "B) 使用图神经网络的SLAM",
      "C) 输出环境图的SLAM",
      "D) SLAM的图形用户界面"
    ],
    answer: 0,
    explanation: "Graph-based SLAM constructs a pose graph where nodes represent robot poses at different times and edges represent constraints (from odometry, loop closures, or landmark observations). The optimal poses are found by minimizing the error in all constraints simultaneously using nonlinear optimization (e.g., Gauss-Newton). This is the dominant modern SLAM paradigm.",
    explanationChinese: "基于图的SLAM构建位姿图，其中节点代表不同时间的机器人位姿，边代表约束（来自里程计、回环检测或地标观测）。通过使用非线性优化（如高斯-牛顿）同时最小化所有约束中的误差来找到最优位姿。这是主导的现代SLAM范式。",
    diagram: "",
    terms: ["slam", "sensor_fusion"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 257,
    q: "What is loop closure detection in SLAM?",
    qChinese: "SLAM中的回环检测是什么？",
    options: [
      "A) Detecting loops in the robot's control software",
      "B) Detecting circular paths in the environment",
      "C) Closing the loop in the feedback controller",
      "D) Recognizing when the robot has returned to a previously visited location to correct accumulated drift"
    ],
    optionsChinese: [
      "A) 检测机器人控制软件中的循环",
      "B) 检测环境中的圆形路径",
      "C) 关闭反馈控制器中的回路",
      "D) 识别机器人何时返回到先前访问的位置以纠正累积漂移"
    ],
    answer: 3,
    explanation: "Loop closure detection identifies when the robot revisits a location, creating a constraint between the current and previous pose. This constraint dramatically reduces accumulated odometry drift, globally correcting the map. Methods use visual features (BoW, NetVLAD), scan matching, or deep learning. Loop closure is critical for long-term SLAM consistency.",
    explanationChinese: "回环检测识别机器人何时重访一个位置，在当前和先前位姿之间创建约束。此约束显著减少累积里程计漂移，全局校正地图。方法使用视觉特征（BoW、NetVLAD）、扫描匹配或深度学习。回环检测对长期SLAM一致性至关重要。",
    diagram: "",
    terms: ["slam", "sensor_fusion"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 258,
    q: "What is visual odometry?",
    qChinese: "什么是视觉里程计？",
    options: [
      "A) Measuring the robot's speed using a speedometer",
      "B) Counting wheel rotations for distance estimation",
      "C) Using LEDs to measure distance",
      "D) Estimating the robot's motion by tracking visual features across consecutive camera frames"
    ],
    optionsChinese: [
      "A) 使用速度计测量机器人速度",
      "B) 计算轮子旋转以估计距离",
      "C) 使用LED测量距离",
      "D) 通过跟踪连续相机帧中的视觉特征估计机器人运动"
    ],
    answer: 3,
    explanation: "Visual odometry (VO) estimates camera motion by detecting and matching feature points across frames, computing the essential/fundamental matrix, and extracting rotation and translation. Stereo VO gives metric scale; monocular VO requires additional information for scale. VO is used in autonomous vehicles, drones, and as a component of visual SLAM systems.",
    explanationChinese: "视觉里程计（VO）通过检测和匹配帧间的特征点、计算本质/基本矩阵和提取旋转与平移来估计相机运动。立体VO给出度量尺度；单目VO需要额外信息获取尺度。VO用于自动驾驶车辆、无人机，并作为视觉SLAM系统的组件。",
    diagram: "",
    terms: ["slam", "sensor_fusion"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 259,
    q: "What is an occupancy grid map?",
    qChinese: "什么是占用栅格地图？",
    options: [
      "A) A map showing which rooms are occupied by people",
      "B) A scheduling map for robot time slots",
      "C) A grid-based map where each cell stores the probability of being occupied by an obstacle",
      "D) A map of the robot's internal memory usage"
    ],
    optionsChinese: [
      "A) 显示哪些房间有人的地图",
      "B) 机器人时间段的调度地图",
      "C) 基于网格的地图，其中每个单元格存储被障碍物占据的概率",
      "D) 机器人内部内存使用的地图"
    ],
    answer: 2,
    explanation: "An occupancy grid discretizes the environment into cells, each storing a probability of being occupied (0=free, 1=occupied, 0.5=unknown). Updated incrementally using sensor data (lidar, sonar) via Bayesian updates in log-odds form. Occupancy grids are the standard 2D map representation for mobile robot navigation and are used by many path planners.",
    explanationChinese: "占用栅格将环境离散化为单元格，每个单元格存储被占据的概率（0=空闲，1=占据，0.5=未知）。使用传感器数据（激光雷达、声纳）通过对数几率形式的贝叶斯更新增量更新。占用栅格是移动机器人导航的标准2D地图表示，被许多路径规划器使用。",
    diagram: "",
    terms: ["slam", "sensor_fusion", "path_planning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 260,
    q: "What is an IMU (Inertial Measurement Unit) and why is it important for robots?",
    qChinese: "什么是IMU（惯性测量单元），为什么它对机器人重要？",
    options: [
      "A) A camera that measures images",
      "B) A sensor combining accelerometers and gyroscopes that measures linear acceleration and angular velocity for motion tracking",
      "C) A GPS unit for outdoor localization",
      "D) A motor control unit"
    ],
    optionsChinese: [
      "A) 测量图像的相机",
      "B) 结合加速度计和陀螺仪测量线性加速度和角速度以进行运动跟踪的传感器",
      "C) 用于室外定位的GPS单元",
      "D) 电机控制单元"
    ],
    answer: 1,
    explanation: "An IMU typically contains 3-axis accelerometers and 3-axis gyroscopes (6-DOF), sometimes with 3-axis magnetometers (9-DOF). It provides high-frequency motion data for dead reckoning and is essential for stabilization and attitude estimation. IMU data is fused with other sensors (GPS, camera, lidar) using Kalman filters or complementary filters to reduce drift.",
    explanationChinese: "IMU通常包含3轴加速度计和3轴陀螺仪（6自由度），有时带有3轴磁力计（9自由度）。它为航位推算提供高频运动数据，对稳定和姿态估计至关重要。IMU数据使用卡尔曼滤波器或互补滤波器与其他传感器（GPS、相机、激光雷达）融合以减少漂移。",
    diagram: "",
    terms: ["sensor_fusion", "slam"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 261,
    q: "What is LiDAR and how is it used in robotics?",
    qChinese: "什么是LiDAR，它在机器人学中如何使用？",
    options: [
      "A) A type of camera for capturing color images",
      "B) A radar system for detecting aircraft",
      "C) A light-based communication device",
      "D) A sensor that measures distances by emitting laser pulses and measuring the time of flight, creating 2D or 3D point cloud maps"
    ],
    optionsChinese: [
      "A) 用于捕获彩色图像的一种相机",
      "B) 用于检测飞机的雷达系统",
      "C) 基于光的通信设备",
      "D) 通过发射激光脉冲并测量飞行时间来测量距离，创建2D或3D点云地图的传感器"
    ],
    answer: 3,
    explanation: "LiDAR (Light Detection and Ranging) emits laser beams and measures return times to create precise distance measurements. 2D LiDAR creates planar scans; 3D LiDAR creates point clouds. LiDAR is widely used for obstacle detection, SLAM, autonomous driving, and 3D mapping. It provides accurate range data independent of lighting conditions.",
    explanationChinese: "LiDAR（光检测和测距）发射激光束并测量返回时间以创建精确的距离测量。2D LiDAR创建平面扫描；3D LiDAR创建点云。LiDAR广泛用于障碍物检测、SLAM、自动驾驶和3D建图。它提供不受光照条件影响的准确距离数据。",
    diagram: "",
    terms: ["sensor_fusion", "slam"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 262,
    q: "What is the Unscented Kalman Filter (UKF)?",
    qChinese: "什么是无迹卡尔曼滤波器（UKF）？",
    options: [
      "A) A nonlinear extension of the Kalman filter that uses deterministic sigma points instead of linearization for better accuracy",
      "B) A Kalman filter with no scent-based sensors",
      "C) A filter that does not use unscented transforms",
      "D) A simplified version of the EKF"
    ],
    optionsChinese: [
      "A) 使用确定性sigma点代替线性化以获得更好准确性的卡尔曼滤波器的非线性扩展",
      "B) 没有基于气味传感器的卡尔曼滤波器",
      "C) 不使用无迹变换的滤波器",
      "D) EKF的简化版本"
    ],
    answer: 0,
    explanation: "The UKF uses the unscented transform: it selects a set of sigma points that capture the mean and covariance of the state distribution, propagates them through the nonlinear model, and computes the output statistics. UKF avoids computing Jacobians and provides better accuracy than EKF for highly nonlinear systems at similar computational cost.",
    explanationChinese: "UKF使用无迹变换：它选择一组捕获状态分布均值和协方差的sigma点，通过非线性模型传播它们，并计算输出统计量。UKF避免了计算雅可比矩阵，以类似的计算成本为高度非线性系统提供了比EKF更好的准确性。",
    diagram: "",
    terms: ["sensor_fusion", "slam"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 263,
    q: "What is ORB-SLAM?",
    qChinese: "什么是ORB-SLAM？",
    options: [
      "A) A SLAM method using orbital mechanics",
      "B) A SLAM algorithm designed for orbital robots",
      "C) A feature-based visual SLAM system using ORB features for tracking, mapping, and loop closure",
      "D) A spherical mapping technique"
    ],
    optionsChinese: [
      "A) 使用轨道力学的SLAM方法",
      "B) 为轨道机器人设计的SLAM算法",
      "C) 使用ORB特征进行跟踪、建图和回环检测的基于特征的视觉SLAM系统",
      "D) 球形建图技术"
    ],
    answer: 2,
    explanation: "ORB-SLAM (Mur-Artal et al., 2015-2017) is a complete visual SLAM system using ORB (Oriented FAST and Rotated BRIEF) features. It includes three parallel threads: tracking (frame-to-frame pose estimation), local mapping (optimizing recent poses and map points), and loop closing (detecting revisits and performing global optimization).",
    explanationChinese: "ORB-SLAM（Mur-Artal等，2015-2017）是使用ORB（定向FAST和旋转BRIEF）特征的完整视觉SLAM系统。它包括三个并行线程：跟踪（帧到帧位姿估计）、局部建图（优化最近的位姿和地图点）和回环检测（检测重访并执行全局优化）。",
    diagram: "",
    terms: ["slam", "sensor_fusion"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 264,
    q: "What is the difference between feature-based and direct visual SLAM methods?",
    qChinese: "基于特征和直接视觉SLAM方法有什么区别？",
    options: [
      "A) Feature-based is always faster",
      "B) There is no practical difference",
      "C) Direct methods require special cameras",
      "D) Feature-based methods extract and match keypoints; direct methods minimize photometric error on raw pixel intensities"
    ],
    optionsChinese: [
      "A) 基于特征的总是更快",
      "B) 没有实际差异",
      "C) 直接方法需要特殊相机",
      "D) 基于特征的方法提取和匹配关键点；直接方法最小化原始像素强度上的光度误差"
    ],
    answer: 3,
    explanation: "Feature-based SLAM (ORB-SLAM) extracts sparse keypoints, matches them across frames, and optimizes geometry. Direct SLAM (LSD-SLAM, DSO) uses raw pixel intensity differences for alignment, creating semi-dense or dense maps. Feature-based methods are more robust to lighting changes; direct methods capture more geometry but are sensitive to photometric conditions.",
    explanationChinese: "基于特征的SLAM（ORB-SLAM）提取稀疏关键点，在帧间匹配它们，并优化几何。直接SLAM（LSD-SLAM、DSO）使用原始像素强度差进行对齐，创建半稠密或稠密地图。基于特征的方法对光照变化更鲁棒；直接方法捕获更多几何但对光度条件敏感。",
    diagram: "",
    terms: ["slam", "sensor_fusion"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 265,
    q: "What is the Bayes filter framework for state estimation?",
    qChinese: "用于状态估计的贝叶斯滤波框架是什么？",
    options: [
      "A) A single formula for computing probabilities",
      "B) A recursive framework that alternates between prediction (using motion model) and correction (using observation model) to maintain a belief over the state",
      "C) A method for filtering Bayesian networks",
      "D) A deep learning approach to filtering"
    ],
    optionsChinese: [
      "A) 计算概率的单一公式",
      "B) 在预测（使用运动模型）和校正（使用观测模型）之间交替以维护状态上信念的递归框架",
      "C) 过滤贝叶斯网络的方法",
      "D) 深度学习过滤方法"
    ],
    answer: 1,
    explanation: "The Bayes filter recursively computes bel(x_t) = eta * p(z_t|x_t) * integral p(x_t|u_t, x_{t-1}) * bel(x_{t-1}) dx. The prediction step uses the motion model; the correction step incorporates the observation. The Kalman filter, EKF, UKF, and particle filter are all specific implementations of this general framework with different distribution representations.",
    explanationChinese: "贝叶斯滤波器递归计算bel(x_t) = eta * p(z_t|x_t) * integral p(x_t|u_t, x_{t-1}) * bel(x_{t-1}) dx。预测步骤使用运动模型；校正步骤纳入观测。卡尔曼滤波器、EKF、UKF和粒子滤波器都是这个通用框架的特定实现，具有不同的分布表示。",
    diagram: "",
    terms: ["sensor_fusion", "slam"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 266,
    q: "What is the 'kidnapped robot' problem?",
    qChinese: "什么是'绑架机器人'问题？",
    options: [
      "A) A problem about robot security",
      "B) The challenge of re-localizing a robot that has been moved to an unknown location without its knowledge",
      "C) A problem about kidnapping prevention using robots",
      "D) The problem of a robot getting stuck"
    ],
    optionsChinese: [
      "A) 关于机器人安全的问题",
      "B) 在机器人不知情的情况下被移动到未知位置后重新定位的挑战",
      "C) 使用机器人防止绑架的问题",
      "D) 机器人被卡住的问题"
    ],
    answer: 1,
    explanation: "The kidnapped robot problem tests a localization algorithm's ability to recover when the robot is suddenly teleported to a new location. Particle filter-based methods can handle this by maintaining a diverse set of particles across the map. Global localization methods that do not require an initial pose estimate are needed. It tests the robustness of the localization system.",
    explanationChinese: "绑架机器人问题测试定位算法在机器人突然被传送到新位置时的恢复能力。基于粒子滤波器的方法可以通过在地图上维护多样化的粒子集来处理。需要不需要初始位姿估计的全局定位方法。它测试定位系统的鲁棒性。",
    diagram: "",
    terms: ["slam", "sensor_fusion"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 267,
    q: "What is ICP (Iterative Closest Point) used for?",
    qChinese: "ICP（迭代最近点）用于什么？",
    options: [
      "A) Iteratively computing PID controller gains",
      "B) Computing the closest path between two points",
      "C) Iterating through control points in a trajectory",
      "D) Aligning two point clouds by iteratively finding closest point correspondences and minimizing the alignment error"
    ],
    optionsChinese: [
      "A) 迭代计算PID控制器增益",
      "B) 计算两点之间的最近路径",
      "C) 遍历轨迹中的控制点",
      "D) 通过迭代寻找最近点对应关系和最小化对齐误差来对齐两个点云"
    ],
    answer: 3,
    explanation: "ICP aligns two point clouds by iterating: (1) find the closest point in the target cloud for each source point, (2) compute the optimal rigid transformation (rotation + translation) that minimizes the sum of squared distances, (3) apply the transformation, (4) repeat until convergence. ICP is fundamental for LiDAR-based SLAM and 3D registration.",
    explanationChinese: "ICP通过迭代对齐两个点云：(1)为每个源点找到目标云中最近的点，(2)计算最小化距离平方和的最优刚体变换（旋转+平移），(3)应用变换，(4)重复直到收敛。ICP是基于LiDAR的SLAM和3D配准的基础。",
    diagram: "",
    terms: ["slam", "sensor_fusion"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 268,
    q: "What is visual-inertial SLAM?",
    qChinese: "什么是视觉-惯性SLAM？",
    options: [
      "A) SLAM using only visual sensors",
      "B) SLAM with inertial navigation only",
      "C) SLAM that tightly couples camera and IMU data for robust localization and mapping",
      "D) SLAM that uses virtual reality headsets"
    ],
    optionsChinese: [
      "A) 仅使用视觉传感器的SLAM",
      "B) 仅使用惯性导航的SLAM",
      "C) 紧密耦合相机和IMU数据以实现稳健定位和建图的SLAM",
      "D) 使用虚拟现实头显的SLAM"
    ],
    answer: 2,
    explanation: "Visual-inertial SLAM fuses camera images with IMU measurements. The IMU provides high-frequency motion estimates between frames, while the camera provides accurate absolute measurements. Tight coupling in an optimization framework (e.g., VINS-Mono, OKVIS) yields superior accuracy and robustness compared to using either sensor alone.",
    explanationChinese: "视觉-惯性SLAM融合相机图像和IMU测量。IMU提供帧间的高频运动估计，而相机提供准确的绝对测量。在优化框架（如VINS-Mono、OKVIS）中的紧密耦合比单独使用任一传感器产生更优越的准确性和鲁棒性。",
    diagram: "",
    terms: ["slam", "sensor_fusion"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 269,
    q: "What is the observability problem in sensor fusion?",
    qChinese: "传感器融合中的可观测性问题是什么？",
    options: [
      "A) Whether the robot can observe obstacles",
      "B) Whether the human operator can observe the robot",
      "C) Whether the available sensor measurements contain enough information to uniquely determine the full state",
      "D) The visibility range of the sensors"
    ],
    optionsChinese: [
      "A) 机器人是否能观测到障碍物",
      "B) 人类操作员是否能观测到机器人",
      "C) 可用的传感器测量是否包含足够的信息来唯一确定完整状态",
      "D) 传感器的可见范围"
    ],
    answer: 2,
    explanation: "Observability determines whether the state can be uniquely estimated from the available measurements. For example, monocular visual odometry cannot observe metric scale. In sensor fusion, certain motion patterns (like constant velocity) may make some states unobservable. Analyzing observability helps choose sensor configurations and motion patterns for accurate estimation.",
    explanationChinese: "可观测性确定状态是否可以从可用测量中唯一估计。例如，单目视觉里程计无法观测度量尺度。在传感器融合中，某些运动模式（如匀速）可能使某些状态不可观测。分析可观测性有助于选择传感器配置和运动模式以实现准确估计。",
    diagram: "",
    terms: ["sensor_fusion", "state_space"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 270,
    q: "What is the complementary filter for IMU-based attitude estimation?",
    qChinese: "用于基于IMU姿态估计的互补滤波器是什么？",
    options: [
      "A) A filter that complements the Kalman filter",
      "B) A filter that uses two complementary sensors of the same type",
      "C) A simple filter that combines high-frequency gyroscope data with low-frequency accelerometer data to estimate orientation",
      "D) A neural network filter for complementary data"
    ],
    optionsChinese: [
      "A) 补充卡尔曼滤波器的滤波器",
      "B) 使用两个相同类型互补传感器的滤波器",
      "C) 结合高频陀螺仪数据和低频加速度计数据来估计方向的简单滤波器",
      "D) 用于互补数据的神经网络滤波器"
    ],
    answer: 2,
    explanation: "The complementary filter uses angle = alpha*(angle + gyro*dt) + (1-alpha)*accel_angle. The gyroscope provides accurate short-term rotation but drifts over time. The accelerometer provides a drift-free gravity reference but is noisy and affected by motion. The complementary filter exploits both: high-pass filtering gyro and low-pass filtering accelerometer data.",
    explanationChinese: "互补滤波器使用angle = alpha*(angle + gyro*dt) + (1-alpha)*accel_angle。陀螺仪提供准确的短期旋转但随时间漂移。加速度计提供无漂移的重力参考但有噪声且受运动影响。互补滤波器利用两者：高通滤波陀螺仪和低通滤波加速度计数据。",
    diagram: "",
    terms: ["sensor_fusion"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 271,
    q: "What is semantic SLAM?",
    qChinese: "什么是语义SLAM？",
    options: [
      "A) SLAM that incorporates object recognition and semantic labels into the map for richer environmental understanding",
      "B) SLAM that uses semantic web technologies",
      "C) SLAM using semantically meaningful variable names",
      "D) SLAM for language processing applications"
    ],
    optionsChinese: [
      "A) 将对象识别和语义标签纳入地图以获得更丰富环境理解的SLAM",
      "B) 使用语义网技术的SLAM",
      "C) 使用语义有意义变量名的SLAM",
      "D) 用于语言处理应用的SLAM"
    ],
    answer: 0,
    explanation: "Semantic SLAM augments geometric maps with semantic information (object classes, room types). Deep learning detects and classifies objects, which are incorporated as semantic landmarks. This enables richer interactions ('go to the kitchen'), more robust data association (matching objects rather than points), and better human-robot communication about the environment.",
    explanationChinese: "语义SLAM用语义信息（对象类别、房间类型）增强几何地图。深度学习检测和分类对象，这些对象作为语义地标被纳入。这实现了更丰富的交互（'去厨房'）、更鲁棒的数据关联（匹配对象而非点）以及关于环境的更好人机通信。",
    diagram: "",
    terms: ["slam", "sensor_fusion"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 272,
    q: "What is the difference between 2D and 3D SLAM?",
    qChinese: "2D SLAM和3D SLAM有什么区别？",
    options: [
      "A) 2D SLAM builds planar maps (x,y,theta); 3D SLAM builds volumetric maps with full 6-DOF pose estimation",
      "B) 2D SLAM is faster and 3D SLAM is more accurate",
      "C) 2D SLAM uses cameras; 3D SLAM uses LiDAR only",
      "D) There is no meaningful difference"
    ],
    optionsChinese: [
      "A) 2D SLAM构建平面地图(x,y,theta)；3D SLAM构建具有完整6自由度位姿估计的体积地图",
      "B) 2D SLAM更快，3D SLAM更准确",
      "C) 2D SLAM使用相机；3D SLAM仅使用LiDAR",
      "D) 没有有意义的差异"
    ],
    answer: 0,
    explanation: "2D SLAM estimates the robot's planar pose (x, y, heading) and builds an occupancy grid map, suitable for ground robots on flat surfaces. 3D SLAM estimates full 6-DOF pose (position + orientation) and builds 3D maps (point clouds, voxels, meshes), needed for drones, underwater robots, and environments with significant vertical structure.",
    explanationChinese: "2D SLAM估计机器人的平面位姿(x, y, 航向)并构建占用栅格地图，适用于平坦表面上的地面机器人。3D SLAM估计完整的6自由度位姿(位置+方向)并构建3D地图(点云、体素、网格)，适用于无人机、水下机器人和具有显著垂直结构的环境。",
    diagram: "",
    terms: ["slam", "sensor_fusion"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 273,
    q: "How can RL improve SLAM or navigation systems?",
    qChinese: "RL如何改进SLAM或导航系统？",
    options: [
      "A) RL cannot be combined with SLAM",
      "B) RL replaces SLAM entirely",
      "C) RL can learn active exploration strategies, obstacle avoidance policies, and end-to-end navigation from sensor data",
      "D) RL only improves the mapping component"
    ],
    optionsChinese: [
      "A) RL不能与SLAM结合",
      "B) RL完全替代SLAM",
      "C) RL可以学习主动探索策略、避障策略和从传感器数据的端到端导航",
      "D) RL只改进建图组件"
    ],
    answer: 2,
    explanation: "RL complements SLAM by learning optimal exploration strategies (where to go next for maximum information gain), end-to-end navigation policies (mapping sensor data directly to actions), and adaptive behaviors for dynamic environments. Active SLAM uses RL to decide exploratory actions that minimize map uncertainty most efficiently.",
    explanationChinese: "RL通过学习最优探索策略（下一步去哪里以获得最大信息增益）、端到端导航策略（将传感器数据直接映射到行动）和动态环境的自适应行为来补充SLAM。主动SLAM使用RL来决定最有效地最小化地图不确定性的探索行动。",
    diagram: "",
    terms: ["slam", "exploration_exploitation", "policy_gradient"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 274,
    q: "What is depth estimation from a single image?",
    qChinese: "从单张图像的深度估计是什么？",
    options: [
      "A) Measuring the depth of field in a photograph",
      "B) Computing depth using two cameras",
      "C) Using a neural network to predict per-pixel depth values from a single monocular image",
      "D) Estimating the depth of a swimming pool from a photo"
    ],
    optionsChinese: [
      "A) 测量照片中的景深",
      "B) 使用两个相机计算深度",
      "C) 使用神经网络从单个单目图像预测每像素深度值",
      "D) 从照片估计游泳池的深度"
    ],
    answer: 2,
    explanation: "Monocular depth estimation uses deep learning to predict a depth map from a single RGB image. Models like MiDaS and DPT learn depth cues (texture gradients, object sizes, occlusion) from training data. This provides dense depth without stereo cameras or LiDAR, useful for robotics when hardware constraints limit sensor options.",
    explanationChinese: "单目深度估计使用深度学习从单个RGB图像预测深度图。MiDaS和DPT等模型从训练数据中学习深度线索（纹理梯度、对象大小、遮挡）。这在没有立体相机或LiDAR的情况下提供密集深度，在硬件限制传感器选项时对机器人很有用。",
    diagram: "",
    terms: ["sensor_fusion", "slam"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 275,
    q: "What is the difference between filtering and smoothing in state estimation?",
    qChinese: "状态估计中滤波和平滑有什么区别？",
    options: [
      "A) Filtering removes noise; smoothing does not",
      "B) There is no difference",
      "C) Smoothing is always real-time; filtering is batch",
      "D) Filtering uses only past and current data; smoothing also uses future data for more accurate retrospective estimates"
    ],
    optionsChinese: [
      "A) 滤波去除噪声；平滑不去除",
      "B) 没有区别",
      "C) 平滑总是实时的；滤波是批处理的",
      "D) 滤波仅使用过去和当前数据；平滑还使用未来数据以获得更准确的回顾性估计"
    ],
    answer: 3,
    explanation: "Filtering (e.g., Kalman filter) estimates the current state using all measurements up to the current time (real-time capable). Smoothing uses all measurements including future ones to estimate past states more accurately (offline). In SLAM, bundle adjustment and graph optimization perform smoothing, refining all past poses simultaneously.",
    explanationChinese: "滤波（如卡尔曼滤波器）使用截至当前时间的所有测量估计当前状态（实时可行）。平滑使用包括未来在内的所有测量更准确地估计过去状态（离线）。在SLAM中，捆绑调整和图优化执行平滑，同时优化所有过去位姿。",
    diagram: "",
    terms: ["sensor_fusion", "slam"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 276,
    q: "What is the information filter and how does it relate to the Kalman filter?",
    qChinese: "信息滤波器是什么，它与卡尔曼滤波器如何关联？",
    options: [
      "A) A filter that extracts information from data",
      "B) A newer replacement for the Kalman filter",
      "C) A filter that measures information entropy",
      "D) The dual of the Kalman filter that works with the information matrix (inverse covariance) and information vector, more efficient for some SLAM formulations"
    ],
    optionsChinese: [
      "A) 从数据中提取信息的滤波器",
      "B) 卡尔曼滤波器的更新替代品",
      "C) 测量信息熵的滤波器",
      "D) 卡尔曼滤波器的对偶，使用信息矩阵（逆协方差）和信息向量，对某些SLAM公式更高效"
    ],
    answer: 3,
    explanation: "The information filter represents the belief using the information matrix Omega = Sigma^{-1} (inverse covariance) and information vector xi = Sigma^{-1} * mu. Sensor updates are additive in the information form, making multi-sensor fusion natural. The Sparse Extended Information Filter (SEIF) exploits the approximate sparsity of the information matrix for efficient SLAM.",
    explanationChinese: "信息滤波器使用信息矩阵Omega = Sigma^{-1}（逆协方差）和信息向量xi = Sigma^{-1} * mu表示信念。传感器更新在信息形式中是可加的，使多传感器融合自然。稀疏扩展信息滤波器（SEIF）利用信息矩阵的近似稀疏性实现高效SLAM。",
    diagram: "",
    terms: ["sensor_fusion", "slam"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 277,
    q: "What is 'place recognition' in the context of SLAM?",
    qChinese: "在SLAM上下文中，'位置识别'是什么？",
    options: [
      "A) Recognizing place names on signs",
      "B) Recognizing the type of place (indoor/outdoor)",
      "C) Determining if the robot is at a previously visited location by matching current sensor data against stored representations",
      "D) Placing the robot at a recognized position"
    ],
    optionsChinese: [
      "A) 识别标志上的地点名称",
      "B) 识别地点类型（室内/室外）",
      "C) 通过将当前传感器数据与存储的表示进行匹配来确定机器人是否在先前访问过的位置",
      "D) 将机器人放置在识别的位置"
    ],
    answer: 2,
    explanation: "Place recognition (or place retrieval) matches the robot's current observation against a database of previous observations to detect revisits. Techniques include bag-of-words (DBoW), VLAD/NetVLAD descriptors, and learned embeddings. Robust place recognition is essential for loop closure in SLAM and for relocalization after tracking failures.",
    explanationChinese: "位置识别（或位置检索）将机器人当前的观测与先前观测的数据库匹配以检测重访。技术包括词袋（DBoW）、VLAD/NetVLAD描述符和学习的嵌入。鲁棒的位置识别对于SLAM中的回环检测和跟踪失败后的重定位至关重要。",
    diagram: "",
    terms: ["slam", "sensor_fusion"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 278,
    q: "What is bundle adjustment in visual SLAM?",
    qChinese: "视觉SLAM中的捆绑调整是什么？",
    options: [
      "A) A nonlinear optimization that jointly refines camera poses and 3D point positions by minimizing reprojection errors",
      "B) Adjusting the camera bundle (lens configuration)",
      "C) Bundling multiple SLAM algorithms together",
      "D) Adjusting the bundle of laser beams in LiDAR"
    ],
    optionsChinese: [
      "A) 通过最小化重投影误差联合优化相机位姿和3D点位置的非线性优化",
      "B) 调整相机束（镜头配置）",
      "C) 将多个SLAM算法捆绑在一起",
      "D) 调整LiDAR中的激光束束"
    ],
    answer: 0,
    explanation: "Bundle adjustment minimizes the sum of squared reprojection errors: sum ||u_ij - pi(T_i, p_j)||^2 over all camera poses T_i and 3D points p_j, where u_ij is the observed 2D projection and pi is the projection function. It uses Levenberg-Marquardt optimization exploiting the sparse structure of the problem. BA provides the most accurate results in visual SLAM.",
    explanationChinese: "捆绑调整最小化重投影误差的平方和：sum ||u_ij - pi(T_i, p_j)||^2对所有相机位姿T_i和3D点p_j，其中u_ij是观测的2D投影，pi是投影函数。它使用Levenberg-Marquardt优化利用问题的稀疏结构。BA在视觉SLAM中提供最准确的结果。",
    diagram: "",
    terms: ["slam", "sensor_fusion"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 279,
    q: "What is the difference between LiDAR SLAM and Visual SLAM?",
    qChinese: "LiDAR SLAM和视觉SLAM有什么区别？",
    options: [
      "A) They produce identical results",
      "B) LiDAR SLAM cannot work indoors",
      "C) Visual SLAM is always more accurate",
      "D) LiDAR SLAM uses precise range data for geometric mapping; Visual SLAM uses camera images for feature-based or photometric mapping"
    ],
    optionsChinese: [
      "A) 它们产生相同的结果",
      "B) LiDAR SLAM不能在室内工作",
      "C) 视觉SLAM总是更准确",
      "D) LiDAR SLAM使用精确的距离数据进行几何建图；视觉SLAM使用相机图像进行基于特征或光度建图"
    ],
    answer: 3,
    explanation: "LiDAR SLAM (e.g., LOAM, Cartographer) uses laser range data for accurate geometric mapping and is robust to lighting. Visual SLAM (e.g., ORB-SLAM) uses cameras, which are cheaper and provide rich texture information but are sensitive to lighting and motion blur. Modern systems often fuse both for complementary strengths.",
    explanationChinese: "LiDAR SLAM（如LOAM、Cartographer）使用激光距离数据进行准确的几何建图，对光照鲁棒。视觉SLAM（如ORB-SLAM）使用相机，更便宜且提供丰富的纹理信息，但对光照和运动模糊敏感。现代系统通常融合两者以获得互补优势。",
    diagram: "",
    terms: ["slam", "sensor_fusion"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 280,
    q: "What is the 'data association' problem in SLAM?",
    qChinese: "SLAM中的'数据关联'问题是什么？",
    options: [
      "A) Associating data with the correct database",
      "B) Determining which sensor measurements correspond to which landmarks or previously observed features",
      "C) Linking data between different robots",
      "D) Organizing data in the map structure"
    ],
    optionsChinese: [
      "A) 将数据与正确的数据库关联",
      "B) 确定哪些传感器测量对应于哪些地标或先前观察的特征",
      "C) 在不同机器人之间链接数据",
      "D) 在地图结构中组织数据"
    ],
    answer: 1,
    explanation: "Data association determines which observations correspond to which landmarks. A wrong association (e.g., matching to the wrong landmark) can corrupt the entire map. Methods include nearest-neighbor, Mahalanobis distance gating, JCBB (Joint Compatibility Branch and Bound), and feature descriptors. Robust data association is critical for SLAM reliability.",
    explanationChinese: "数据关联确定哪些观测对应于哪些地标。错误的关联（例如匹配到错误的地标）可能破坏整个地图。方法包括最近邻、马氏距离门控、JCBB（联合兼容分支定界）和特征描述符。鲁棒的数据关联对SLAM可靠性至关重要。",
    diagram: "",
    terms: ["slam", "sensor_fusion"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 281,
    q: "What is multi-agent reinforcement learning (MARL)?",
    qChinese: "什么是多智能体强化学习（MARL）？",
    options: [
      "A) Training a single agent on multiple tasks",
      "B) Running multiple copies of the same agent in parallel",
      "C) Using multiple GPUs for training one agent",
      "D) RL with multiple agents that interact in a shared environment, where each agent's reward may depend on others' actions"
    ],
    optionsChinese: [
      "A) 在多个任务上训练单个智能体",
      "B) 并行运行同一智能体的多个副本",
      "C) 使用多个GPU训练一个智能体",
      "D) 多个智能体在共享环境中交互的RL，每个智能体的奖励可能取决于其他智能体的行动"
    ],
    answer: 3,
    explanation: "MARL studies RL problems with multiple decision-making agents. The environment becomes non-stationary from each agent's perspective since other agents are also learning. Challenges include credit assignment among agents, non-stationarity, scalability, and the need for communication. Settings include cooperative, competitive, and mixed-motive games.",
    explanationChinese: "MARL研究具有多个决策智能体的RL问题。从每个智能体的角度看，环境变得非平稳，因为其他智能体也在学习。挑战包括智能体之间的信用分配、非平稳性、可扩展性和通信需求。设置包括合作、竞争和混合动机博弈。",
    diagram: "",
    terms: ["exploration_exploitation", "reward_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 282,
    q: "What is the 'non-stationarity' problem in multi-agent RL?",
    qChinese: "多智能体RL中的'非平稳性'问题是什么？",
    options: [
      "A) Agents that do not stay in one location",
      "B) The state space expands during training",
      "C) The reward function changes over time",
      "D) Each agent's environment appears non-stationary because other agents are simultaneously learning and changing their policies"
    ],
    optionsChinese: [
      "A) 不停留在一个位置的智能体",
      "B) 状态空间在训练期间扩展",
      "C) 奖励函数随时间变化",
      "D) 由于其他智能体同时在学习和改变策略，每个智能体的环境显得非平稳"
    ],
    answer: 3,
    explanation: "In MARL, each agent faces a moving target: the other agents' changing policies make the environment dynamics and reward distributions shift over time. This violates the stationarity assumption of single-agent RL convergence proofs. Solutions include centralized training with decentralized execution (CTDE), opponent modeling, and communication protocols.",
    explanationChinese: "在MARL中，每个智能体面对移动目标：其他智能体不断变化的策略使环境动态和奖励分布随时间变化。这违反了单智能体RL收敛证明的平稳性假设。解决方案包括集中训练分散执行（CTDE）、对手建模和通信协议。",
    diagram: "",
    terms: ["exploration_exploitation", "state_space"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 283,
    q: "What is centralized training with decentralized execution (CTDE)?",
    qChinese: "什么是集中训练分散执行（CTDE）？",
    options: [
      "A) All agents are controlled by a central computer at all times",
      "B) During training, agents share global information; during execution, each agent acts independently based on its local observations",
      "C) Training and execution happen on different machines",
      "D) One agent trains and others execute its policy"
    ],
    optionsChinese: [
      "A) 所有智能体始终由中央计算机控制",
      "B) 在训练期间，智能体共享全局信息；在执行期间，每个智能体根据其局部观测独立行动",
      "C) 训练和执行在不同机器上进行",
      "D) 一个智能体训练，其他智能体执行其策略"
    ],
    answer: 1,
    explanation: "CTDE allows access to global state, other agents' actions, and shared information during training (centralized critic), but each agent must act using only its local observations during execution (decentralized actors). This paradigm, used in MADDPG, QMIX, and MAPPO, balances learning efficiency with practical deployment constraints.",
    explanationChinese: "CTDE允许在训练期间访问全局状态、其他智能体的行动和共享信息（集中评论家），但在执行期间每个智能体只能使用其局部观测行动（分散演员）。这种范式用于MADDPG、QMIX和MAPPO，平衡了学习效率和实际部署约束。",
    diagram: "",
    terms: ["actor_critic", "policy_gradient"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 284,
    q: "What is QMIX in multi-agent RL?",
    qChinese: "多智能体RL中的QMIX是什么？",
    options: [
      "A) A Q-Learning variant that mixes different learning rates",
      "B) A value decomposition method that factorizes the team Q-value as a monotonic mixing of individual agent Q-values",
      "C) A method for mixing different RL algorithms",
      "D) A quantile mixing network"
    ],
    optionsChinese: [
      "A) 混合不同学习率的Q-Learning变体",
      "B) 将团队Q值分解为各个智能体Q值的单调混合的值分解方法",
      "C) 混合不同RL算法的方法",
      "D) 分位数混合网络"
    ],
    answer: 1,
    explanation: "QMIX (Rashid et al., 2018) addresses cooperative MARL by learning individual Q-values Q_i(s_i, a_i) for each agent and combining them through a mixing network that ensures monotonicity: Q_total increases when any Q_i increases. This guarantees that the argmax of Q_total can be computed by each agent independently maximizing its own Q_i.",
    explanationChinese: "QMIX（Rashid等，2018）通过为每个智能体学习个体Q值Q_i(s_i, a_i)并通过确保单调性的混合网络组合来解决合作MARL：当任何Q_i增加时Q_total增加。这保证了Q_total的argmax可以由每个智能体独立最大化其自己的Q_i来计算。",
    diagram: "",
    terms: ["q_learning", "deep_q_network"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 285,
    q: "What is MADDPG (Multi-Agent DDPG)?",
    qChinese: "什么是MADDPG（多智能体DDPG）？",
    options: [
      "A) DDPG applied to multiple environments simultaneously",
      "B) Multiple DDPG agents trained independently",
      "C) An extension of DDPG for multi-agent settings using centralized critics that observe all agents' actions and decentralized actors",
      "D) DDPG with multiple replay buffers"
    ],
    optionsChinese: [
      "A) 同时应用于多个环境的DDPG",
      "B) 独立训练的多个DDPG智能体",
      "C) 使用观察所有智能体行动的集中评论家和分散演员的多智能体设置的DDPG扩展",
      "D) 具有多个回放缓冲区的DDPG"
    ],
    answer: 2,
    explanation: "MADDPG (Lowe et al., 2017) extends DDPG to multi-agent settings. Each agent has a centralized critic Q_i(x, a_1,...,a_n) that conditions on all agents' observations and actions during training, while each actor pi_i(a_i|o_i) only uses local observations. This addresses non-stationarity since the critic sees the full picture during training.",
    explanationChinese: "MADDPG（Lowe等，2017）将DDPG扩展到多智能体设置。每个智能体有一个集中评论家Q_i(x, a_1,...,a_n)，在训练期间以所有智能体的观测和行动为条件，而每个演员pi_i(a_i|o_i)只使用局部观测。这解决了非平稳性，因为评论家在训练期间看到全貌。",
    diagram: "",
    terms: ["actor_critic", "policy_gradient"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 286,
    q: "What is a Nash equilibrium in the context of multi-agent RL?",
    qChinese: "在多智能体RL的背景下，纳什均衡是什么？",
    options: [
      "A) The state where all agents receive maximum reward",
      "B) The equilibrium between exploration and exploitation",
      "C) A set of policies where no agent can improve its expected return by unilaterally changing its policy",
      "D) The point where all agents agree on the same action"
    ],
    optionsChinese: [
      "A) 所有智能体获得最大奖励的状态",
      "B) 探索和利用之间的均衡",
      "C) 没有智能体可以通过单方面改变策略来改善其期望回报的策略集合",
      "D) 所有智能体在同一行动上达成一致的点"
    ],
    answer: 2,
    explanation: "A Nash equilibrium is a strategy profile where each agent's policy is a best response to the others' policies. No agent has an incentive to deviate unilaterally. In competitive games, finding Nash equilibria is a common goal. However, Nash equilibria may not be unique, Pareto optimal, or easily reachable through learning dynamics.",
    explanationChinese: "纳什均衡是每个智能体的策略都是对其他智能体策略的最佳响应的策略组合。没有智能体有单方面偏离的动机。在竞争博弈中，找到纳什均衡是常见目标。然而，纳什均衡可能不唯一、不是帕累托最优的，或不容易通过学习动态达到。",
    diagram: "",
    terms: ["reward_function", "policy_gradient"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 287,
    q: "What is transfer learning in RL?",
    qChinese: "RL中的迁移学习是什么？",
    options: [
      "A) Transferring data between replay buffers",
      "B) Leveraging knowledge learned in one task or environment to accelerate learning in a different but related task",
      "C) Transferring the agent from simulation to a different simulation",
      "D) Moving the agent between different states"
    ],
    optionsChinese: [
      "A) 在回放缓冲区之间传输数据",
      "B) 利用在一个任务或环境中学到的知识来加速不同但相关任务中的学习",
      "C) 将智能体从一个仿真转移到不同的仿真",
      "D) 在不同状态之间移动智能体"
    ],
    answer: 1,
    explanation: "Transfer learning in RL aims to reuse knowledge (learned representations, policies, value functions, or dynamics models) from source tasks to improve learning efficiency or performance on target tasks. Approaches include fine-tuning pre-trained networks, learning task-agnostic features, and meta-learning to learn how to learn across tasks.",
    explanationChinese: "RL中的迁移学习旨在复用从源任务中学到的知识（学习的表示、策略、价值函数或动力学模型）以提高目标任务中的学习效率或性能。方法包括微调预训练网络、学习任务无关特征和元学习以学习如何跨任务学习。",
    diagram: "",
    terms: ["model_based_rl", "policy_gradient"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 288,
    q: "What is meta-reinforcement learning?",
    qChinese: "什么是元强化学习？",
    options: [
      "A) Learning a learning algorithm that can quickly adapt to new tasks from minimal experience",
      "B) Using metadata to improve RL training",
      "C) RL applied to meta-analysis studies",
      "D) A method for analyzing RL algorithm performance"
    ],
    optionsChinese: [
      "A) 学习一种可以从最少经验中快速适应新任务的学习算法",
      "B) 使用元数据改进RL训练",
      "C) 应用于元分析研究的RL",
      "D) 分析RL算法性能的方法"
    ],
    answer: 0,
    explanation: "Meta-RL trains agents to 'learn to learn': the agent is trained on a distribution of tasks so that it can quickly adapt to new tasks with very few interactions. Approaches include MAML (model-agnostic meta-learning), RL^2 (learning the RL algorithm itself as an RNN), and task inference methods. This addresses sample efficiency for new tasks.",
    explanationChinese: "元RL训练智能体'学习如何学习'：智能体在任务分布上训练，使其能够用很少的交互快速适应新任务。方法包括MAML（模型无关元学习）、RL^2（将RL算法本身作为RNN学习）和任务推断方法。这解决了新任务的样本效率问题。",
    diagram: "",
    terms: ["policy_gradient", "model_based_rl"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 289,
    q: "What is hierarchical reinforcement learning (HRL)?",
    qChinese: "什么是层次强化学习（HRL）？",
    options: [
      "A) Using deep neural networks with many layers",
      "B) Decomposing complex tasks into a hierarchy of sub-tasks with different levels of abstraction",
      "C) Training agents in a hierarchical order",
      "D) Using a hierarchy of reward functions"
    ],
    optionsChinese: [
      "A) 使用具有多层的深度神经网络",
      "B) 将复杂任务分解为不同抽象级别的子任务层次结构",
      "C) 按层次顺序训练智能体",
      "D) 使用奖励函数的层次结构"
    ],
    answer: 1,
    explanation: "HRL structures decision-making hierarchically: a high-level policy sets goals or selects sub-tasks, and a low-level policy executes primitive actions to achieve those goals. Frameworks include the Options framework, HAM, MAXQ, and feudal networks. HRL enables temporal abstraction and can dramatically improve learning in long-horizon, sparse-reward tasks.",
    explanationChinese: "HRL层次化地构建决策：高层策略设定目标或选择子任务，低层策略执行原始行动以实现这些目标。框架包括选项框架、HAM、MAXQ和封建网络。HRL实现了时间抽象，可以在长期、稀疏奖励任务中显著改善学习。",
    diagram: "",
    terms: ["policy_gradient", "reward_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 290,
    q: "What is imitation learning and how does it relate to RL?",
    qChinese: "什么是模仿学习，它与RL如何关联？",
    options: [
      "A) Imitating the environment's behavior",
      "B) Copying another RL algorithm's architecture",
      "C) Learning a policy from expert demonstrations, either through behavioral cloning or using demonstrations to guide RL",
      "D) Using the same hyperparameters as a successful experiment"
    ],
    optionsChinese: [
      "A) 模仿环境的行为",
      "B) 复制另一个RL算法的架构",
      "C) 从专家演示中学习策略，通过行为克隆或使用演示来指导RL",
      "D) 使用与成功实验相同的超参数"
    ],
    answer: 2,
    explanation: "Imitation learning uses expert demonstrations to train policies. Behavioral cloning directly maps states to expert actions via supervised learning. DAgger addresses distribution shift by iteratively collecting expert labels. Demonstrations can also initialize RL policies or provide reward shaping. This greatly reduces the exploration burden in complex tasks like robotic manipulation.",
    explanationChinese: "模仿学习使用专家演示训练策略。行为克隆通过监督学习直接将状态映射到专家行动。DAgger通过迭代收集专家标签解决分布偏移。演示也可以初始化RL策略或提供奖励塑造。这在机器人操作等复杂任务中大大减少了探索负担。",
    diagram: "",
    terms: ["policy_gradient", "reward_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 291,
    q: "What is offline reinforcement learning?",
    qChinese: "什么是离线强化学习？",
    options: [
      "A) RL without internet connection",
      "B) Learning a policy entirely from a fixed dataset of previously collected experience without any additional environment interaction",
      "C) RL that runs on offline hardware",
      "D) Training the agent only during downtime"
    ],
    optionsChinese: [
      "A) 没有互联网连接的RL",
      "B) 完全从先前收集的固定经验数据集学习策略，无需任何额外的环境交互",
      "C) 在离线硬件上运行的RL",
      "D) 仅在停机时间训练智能体"
    ],
    answer: 1,
    explanation: "Offline (batch) RL learns from a fixed dataset without further environment interaction. This is crucial when online interaction is expensive or dangerous (healthcare, autonomous driving). Challenges include distributional shift—the learned policy may visit states not covered by the data. Methods like CQL, BCQ, and TD3+BC add conservatism to prevent overoptimistic out-of-distribution actions.",
    explanationChinese: "离线（批处理）RL从固定数据集学习而无需进一步环境交互。当在线交互昂贵或危险时（医疗保健、自动驾驶），这至关重要。挑战包括分布偏移——学习的策略可能访问数据未覆盖的状态。CQL、BCQ和TD3+BC等方法添加保守性以防止对分布外行动的过度乐观。",
    diagram: "",
    terms: ["q_learning", "policy_gradient"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 292,
    q: "What is safe reinforcement learning?",
    qChinese: "什么是安全强化学习？",
    options: [
      "A) RL that ensures the agent satisfies safety constraints (e.g., avoiding dangerous states) during learning and deployment",
      "B) RL that prevents data breaches",
      "C) RL that uses encrypted communication",
      "D) RL with guaranteed convergence"
    ],
    optionsChinese: [
      "A) 确保智能体在学习和部署期间满足安全约束（例如避免危险状态）的RL",
      "B) 防止数据泄露的RL",
      "C) 使用加密通信的RL",
      "D) 具有保证收敛的RL"
    ],
    answer: 0,
    explanation: "Safe RL formulates the problem as a Constrained MDP (CMDP) where the agent maximizes reward while satisfying constraints on expected costs (safety violations). Methods include constrained policy optimization (CPO), Lagrangian relaxation, safety layers, and shielding. Safe RL is critical for real-world applications like autonomous driving and robot-human interaction.",
    explanationChinese: "安全RL将问题公式化为约束MDP（CMDP），其中智能体在满足预期成本（安全违规）约束的同时最大化奖励。方法包括约束策略优化（CPO）、拉格朗日松弛、安全层和屏蔽。安全RL对自动驾驶和人机交互等现实世界应用至关重要。",
    diagram: "",
    terms: ["reward_function", "policy_gradient"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 293,
    q: "What is curriculum learning in RL?",
    qChinese: "RL中的课程学习是什么？",
    options: [
      "A) Learning from a textbook curriculum",
      "B) Following a fixed schedule of learning rates",
      "C) Gradually increasing task difficulty during training to facilitate learning of complex tasks",
      "D) Learning multiple curricula simultaneously"
    ],
    optionsChinese: [
      "A) 从教科书课程中学习",
      "B) 遵循固定的学习率计划",
      "C) 在训练期间逐渐增加任务难度以促进复杂任务的学习",
      "D) 同时学习多个课程"
    ],
    answer: 2,
    explanation: "Curriculum learning starts the agent on easy tasks and progressively increases difficulty. This guides exploration and provides a natural reward shaping. Examples include starting with shorter episodes, reducing obstacle complexity, or gradually changing environment parameters. Automatic curriculum methods (like PAIRED or PLR) learn the curriculum itself using RL.",
    explanationChinese: "课程学习让智能体从简单任务开始，逐步增加难度。这引导探索并提供自然的奖励塑造。示例包括从较短的回合开始、降低障碍物复杂性或逐渐改变环境参数。自动课程方法（如PAIRED或PLR）使用RL本身学习课程。",
    diagram: "",
    terms: ["reward_function", "exploration_exploitation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 294,
    q: "What is reward learning and how does it address reward design challenges?",
    qChinese: "什么是奖励学习，它如何解决奖励设计挑战？",
    options: [
      "A) Learning the learning rate for reward computation",
      "B) A method for discounting rewards",
      "C) Learning to maximize any given reward function",
      "D) Inferring reward functions from human preferences, demonstrations, or other feedback rather than hand-designing them"
    ],
    optionsChinese: [
      "A) 学习奖励计算的学习率",
      "B) 奖励折扣方法",
      "C) 学习最大化任何给定的奖励函数",
      "D) 从人类偏好、演示或其他反馈中推断奖励函数而非手工设计"
    ],
    answer: 3,
    explanation: "Reward learning addresses the difficulty of manually specifying reward functions that capture complex desired behaviors. Approaches include inverse RL (inferring rewards from demonstrations), preference-based RL (learning from human comparisons), and RLHF (RL from human feedback, as used in ChatGPT). This helps align agent behavior with human intentions.",
    explanationChinese: "奖励学习解决了手动指定捕获复杂期望行为的奖励函数的困难。方法包括逆RL（从演示中推断奖励）、基于偏好的RL（从人类比较中学习）和RLHF（从人类反馈中学习的RL，如ChatGPT中使用的）。这有助于使智能体行为与人类意图保持一致。",
    diagram: "",
    terms: ["reward_function", "policy_gradient"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 295,
    q: "What is the Options framework in hierarchical RL?",
    qChinese: "层次RL中的选项框架是什么？",
    options: [
      "A) A framework for choosing between different RL algorithms",
      "B) A framework for optional exploration strategies",
      "C) Optional features that can be added to any RL algorithm",
      "D) A formalism for temporally extended actions (options) consisting of a policy, initiation set, and termination condition"
    ],
    optionsChinese: [
      "A) 在不同RL算法之间选择的框架",
      "B) 可选探索策略的框架",
      "C) 可以添加到任何RL算法的可选特性",
      "D) 由策略、启动集和终止条件组成的时间扩展行动（选项）的形式化"
    ],
    answer: 3,
    explanation: "An option o = (I, pi, beta) consists of: an initiation set I (states where the option can start), a policy pi (how to act while the option is active), and a termination function beta(s) (probability of ending at each state). Options generalize primitive actions and enable planning at multiple temporal scales, forming the basis of semi-MDPs.",
    explanationChinese: "选项o = (I, pi, beta)由以下组成：启动集I（选项可以开始的状态）、策略pi（选项活动时如何行动）和终止函数beta(s)（在每个状态结束的概率）。选项推广了原始行动并实现了多时间尺度的规划，构成了半MDP的基础。",
    diagram: "",
    terms: ["policy_gradient", "state_space"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 296,
    q: "What is multi-task RL?",
    qChinese: "什么是多任务RL？",
    options: [
      "A) Training a single agent to perform well across multiple different tasks simultaneously",
      "B) An agent that can only learn one task at a time",
      "C) Multiple agents each learning one task",
      "D) Switching between tasks randomly during evaluation"
    ],
    optionsChinese: [
      "A) 训练单个智能体同时在多个不同任务上表现良好",
      "B) 一次只能学习一个任务的智能体",
      "C) 多个智能体各学习一个任务",
      "D) 在评估期间随机切换任务"
    ],
    answer: 0,
    explanation: "Multi-task RL trains a single policy to perform multiple tasks, potentially sharing knowledge between them. Approaches include task-conditioned policies (conditioning on a task descriptor), distillation (combining task-specific policies), and shared representations. Challenges include negative transfer (tasks interfering) and balancing performance across tasks.",
    explanationChinese: "多任务RL训练单个策略执行多个任务，可能在任务之间共享知识。方法包括任务条件策略（以任务描述符为条件）、蒸馏（组合特定任务策略）和共享表示。挑战包括负迁移（任务干扰）和平衡跨任务的性能。",
    diagram: "",
    terms: ["policy_gradient", "value_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 297,
    q: "What is self-play in competitive multi-agent RL?",
    qChinese: "竞争多智能体RL中的自我对弈是什么？",
    options: [
      "A) The agent plays by itself without an opponent",
      "B) A single-player RL task",
      "C) Training an agent by having it play against copies of itself (past or current versions) to continuously improve",
      "D) An agent that learns from self-generated demonstrations"
    ],
    optionsChinese: [
      "A) 智能体没有对手独自游玩",
      "B) 单人RL任务",
      "C) 通过让智能体与自身的副本（过去或当前版本）对弈来持续改进的训练",
      "D) 从自生成演示中学习的智能体"
    ],
    answer: 2,
    explanation: "Self-play trains an agent against itself, creating an ever-improving opponent that drives continued learning. This was key to AlphaGo/AlphaZero's superhuman performance. Techniques include maintaining a league of past policies (population-based training) to prevent forgetting and ensure robustness against diverse strategies.",
    explanationChinese: "自我对弈训练智能体与自己对弈，创造不断改进的对手以推动持续学习。这是AlphaGo/AlphaZero实现超人性能的关键。技术包括维护过去策略的联盟（基于种群的训练）以防止遗忘并确保对多样化策略的鲁棒性。",
    diagram: "",
    terms: ["exploration_exploitation", "policy_gradient"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 298,
    q: "What is model predictive control (MPC) and how does it relate to model-based RL?",
    qChinese: "什么是模型预测控制（MPC），它与基于模型的RL如何关联？",
    options: [
      "A) MPC is unrelated to RL",
      "B) MPC is a type of model-free RL",
      "C) MPC replaces the need for RL",
      "D) MPC uses a dynamics model to optimize actions over a short horizon, replanning at each step; it can use learned models from model-based RL"
    ],
    optionsChinese: [
      "A) MPC与RL无关",
      "B) MPC是一种无模型RL",
      "C) MPC取代了对RL的需求",
      "D) MPC使用动力学模型在短时间范围内优化行动，在每一步重新规划；它可以使用基于模型的RL学习的模型"
    ],
    answer: 3,
    explanation: "MPC optimizes a trajectory over a finite horizon using a dynamics model, executes only the first action, then replans. When combined with learned dynamics models (from model-based RL), MPC provides a powerful framework for robot control. Methods like PETS and MBPO use learned ensembles of neural network models with MPC or value-based planning.",
    explanationChinese: "MPC使用动力学模型在有限时间范围内优化轨迹，只执行第一个行动，然后重新规划。当与学习的动力学模型（来自基于模型的RL）结合时，MPC为机器人控制提供了强大的框架。PETS和MBPO等方法使用学习的神经网络模型集成与MPC或基于价值的规划。",
    diagram: "",
    terms: ["model_based_rl", "pid_controller"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 299,
    q: "What is RLHF (Reinforcement Learning from Human Feedback)?",
    qChinese: "什么是RLHF（从人类反馈中学习的强化学习）？",
    options: [
      "A) RL where humans directly control the agent",
      "B) Training a reward model from human preference comparisons, then using it with PPO to fine-tune an agent's policy",
      "C) RL where humans provide the optimal actions",
      "D) A human-in-the-loop debugging tool for RL"
    ],
    optionsChinese: [
      "A) 人类直接控制智能体的RL",
      "B) 从人类偏好比较中训练奖励模型，然后使用PPO微调智能体策略",
      "C) 人类提供最优行动的RL",
      "D) 用于RL的人在环路调试工具"
    ],
    answer: 1,
    explanation: "RLHF involves three steps: (1) Collect human comparisons of agent outputs, (2) Train a reward model to predict human preferences, (3) Use RL (typically PPO) to optimize the policy against this learned reward model. RLHF was instrumental in training ChatGPT and other LLMs, aligning AI behavior with human values and intentions.",
    explanationChinese: "RLHF涉及三个步骤：(1)收集智能体输出的人类比较，(2)训练奖励模型以预测人类偏好，(3)使用RL（通常是PPO）针对该学习的奖励模型优化策略。RLHF在训练ChatGPT和其他LLM中发挥了重要作用，使AI行为与人类价值观和意图保持一致。",
    diagram: "",
    terms: ["reward_function", "policy_gradient"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 300,
    q: "What are the main open challenges in modern reinforcement learning research?",
    qChinese: "现代强化学习研究的主要开放挑战是什么？",
    options: [
      "A) RL has been completely solved with no remaining challenges",
      "B) The only challenge is building faster GPUs",
      "C) Only computational speed remains as a challenge",
      "D) Sample efficiency, generalization to new environments, safe exploration, reward specification, and scaling to real-world complexity"
    ],
    optionsChinese: [
      "A) RL已经完全解决，没有剩余挑战",
      "B) 唯一的挑战是构建更快的GPU",
      "C) 只有计算速度仍然是挑战",
      "D) 样本效率、对新环境的泛化、安全探索、奖励指定和扩展到现实世界复杂性"
    ],
    answer: 3,
    explanation: "Key open challenges include: sample efficiency (needing millions of interactions), generalization (performing well on unseen environments), safe exploration (avoiding catastrophic actions), reward design (specifying complex goals), sim-to-real transfer, long-horizon reasoning, multi-agent coordination, and integrating RL with foundation models for more capable autonomous systems.",
    explanationChinese: "关键的开放挑战包括：样本效率（需要数百万次交互）、泛化（在未见过的环境中表现良好）、安全探索（避免灾难性行动）、奖励设计（指定复杂目标）、仿真到真实转移、长期推理、多智能体协调以及将RL与基础模型集成以实现更有能力的自主系统。",
    diagram: "",
    terms: ["exploration_exploitation", "reward_function", "model_based_rl"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  }
];
