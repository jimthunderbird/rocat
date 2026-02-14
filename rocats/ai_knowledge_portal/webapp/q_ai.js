const questionsAI = [
  {
    id: 1,
    q: "What is Artificial Intelligence (AI)?",
    qChinese: "什么是人工智能（AI）？",
    options: [
      "A) A branch of biology studying neural systems",
      "B) The simulation of human intelligence by machines",
      "C) A programming language for data analysis",
      "D) A hardware component in modern computers"
    ],
    optionsChinese: [
      "A) 研究神经系统的生物学分支",
      "B) 机器对人类智能的模拟",
      "C) 用于数据分析的编程语言",
      "D) 现代计算机中的硬件组件"
    ],
    answer: 1,
    explanation: "Artificial Intelligence refers to the simulation of human intelligence processes by computer systems. These processes include learning, reasoning, problem-solving, perception, and language understanding. AI systems are designed to perform tasks that typically require human cognitive abilities, making machines capable of intelligent behavior.",
    explanationChinese: "人工智能是指计算机系统对人类智能过程的模拟。这些过程包括学习、推理、问题解决、感知和语言理解。AI系统旨在执行通常需要人类认知能力的任务，使机器能够表现出智能行为。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 2,
    q: "Who is widely considered the father of Artificial Intelligence?",
    qChinese: "谁被广泛认为是人工智能之父？",
    options: [
      "A) Alan Turing",
      "B) John McCarthy",
      "C) Marvin Minsky",
      "D) Claude Shannon"
    ],
    optionsChinese: [
      "A) 艾伦·图灵",
      "B) 约翰·麦卡锡",
      "C) 马文·明斯基",
      "D) 克劳德·香农"
    ],
    answer: 1,
    explanation: "John McCarthy coined the term 'Artificial Intelligence' in 1956 at the Dartmouth Conference, which is considered the founding event of AI as a field. He also developed the Lisp programming language, which became a primary tool for AI research and contributed significantly to the discipline's early growth.",
    explanationChinese: "约翰·麦卡锡于1956年在达特茅斯会议上创造了"人工智能"一词，该会议被认为是AI作为一个领域的奠基事件。他还开发了Lisp编程语言，该语言成为AI研究的主要工具，对该学科的早期发展做出了重大贡献。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 3,
    q: "What is Narrow AI (Weak AI)?",
    qChinese: "什么是狭义人工智能（弱AI）？",
    options: [
      "A) AI that possesses human-level consciousness",
      "B) AI designed to perform a specific task",
      "C) AI that can solve any intellectual problem",
      "D) AI that surpasses all human capabilities"
    ],
    optionsChinese: [
      "A) 拥有人类水平意识的AI",
      "B) 设计用于执行特定任务的AI",
      "C) 能解决任何智力问题的AI",
      "D) 超越所有人类能力的AI"
    ],
    answer: 1,
    explanation: "Narrow AI, also called Weak AI, is designed and trained for a specific task. Examples include virtual assistants like Siri, image recognition systems, and recommendation engines. Unlike General AI, Narrow AI cannot transfer its knowledge to different domains and operates only within its predefined scope of functionality.",
    explanationChinese: "狭义人工智能，也称为弱AI，是为特定任务设计和训练的。例子包括Siri等虚拟助手、图像识别系统和推荐引擎。与通用AI不同，狭义AI不能将其知识迁移到不同领域，只能在其预定义的功能范围内运行。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 4,
    q: "What is Artificial General Intelligence (AGI)?",
    qChinese: "什么是通用人工智能（AGI）？",
    options: [
      "A) AI limited to playing chess",
      "B) AI that can understand and learn any intellectual task a human can",
      "C) AI used exclusively in robotics",
      "D) AI that only processes natural language"
    ],
    optionsChinese: [
      "A) 仅限于下棋的AI",
      "B) 能够理解和学习人类能做的任何智力任务的AI",
      "C) 专门用于机器人技术的AI",
      "D) 仅处理自然语言的AI"
    ],
    answer: 1,
    explanation: "Artificial General Intelligence refers to a hypothetical AI system that possesses the ability to understand, learn, and apply knowledge across any intellectual task that a human being can perform. AGI would exhibit flexible thinking, common sense reasoning, and the capacity to transfer learning between different domains seamlessly.",
    explanationChinese: "通用人工智能是指一种假设的AI系统，它具有理解、学习和应用知识的能力，可以完成人类能够执行的任何智力任务。AGI将表现出灵活的思维、常识推理以及在不同领域之间无缝迁移学习的能力。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 5,
    q: "What is Artificial Superintelligence (ASI)?",
    qChinese: "什么是超级人工智能（ASI）？",
    options: [
      "A) AI that matches average human intelligence",
      "B) AI focused on scientific computing",
      "C) AI that greatly surpasses the brightest human minds in every domain",
      "D) AI that can only solve mathematical problems"
    ],
    optionsChinese: [
      "A) 与普通人类智力相当的AI",
      "B) 专注于科学计算的AI",
      "C) 在每个领域都大大超越最聪明人类的AI",
      "D) 只能解决数学问题的AI"
    ],
    answer: 2,
    explanation: "Artificial Superintelligence is a theoretical form of AI that would surpass the cognitive abilities of the brightest humans in virtually every field, including creativity, problem-solving, and social intelligence. ASI remains speculative but raises important discussions about AI safety, control mechanisms, and existential risk management.",
    explanationChinese: "超级人工智能是一种理论上的AI形式，它将在几乎所有领域超越最聪明人类的认知能力，包括创造力、问题解决和社会智能。ASI仍然是推测性的，但引发了关于AI安全、控制机制和存在风险管理的重要讨论。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 6,
    q: "In what year was the Dartmouth Conference held, marking the birth of AI as a field?",
    qChinese: "达特茅斯会议在哪一年举行，标志着AI作为一个领域的诞生？",
    options: [
      "A) 1943",
      "B) 1950",
      "C) 1956",
      "D) 1969"
    ],
    optionsChinese: [
      "A) 1943年",
      "B) 1950年",
      "C) 1956年",
      "D) 1969年"
    ],
    answer: 2,
    explanation: "The Dartmouth Conference took place in the summer of 1956 at Dartmouth College. Organized by John McCarthy, Marvin Minsky, Nathaniel Rochester, and Claude Shannon, the workshop proposed that every aspect of learning could be precisely described enough for a machine to simulate it, formally launching AI research.",
    explanationChinese: "达特茅斯会议于1956年夏天在达特茅斯学院举行。由约翰·麦卡锡、马文·明斯基、纳撒尼尔·罗切斯特和克劳德·香农组织，该研讨会提出学习的每个方面都可以被精确描述以供机器模拟，正式启动了AI研究。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 7,
    q: "What was the first 'AI Winter' primarily caused by?",
    qChinese: "第一次"AI寒冬"主要是由什么引起的？",
    options: [
      "A) Lack of available electricity",
      "B) Failure to meet overly optimistic expectations and reduced funding",
      "C) Government bans on AI research",
      "D) Discovery that machines cannot compute"
    ],
    optionsChinese: [
      "A) 缺乏可用电力",
      "B) 未能达到过于乐观的预期和资金减少",
      "C) 政府禁止AI研究",
      "D) 发现机器无法进行计算"
    ],
    answer: 1,
    explanation: "The first AI Winter occurred in the 1970s when AI research failed to deliver on its ambitious promises. Funding agencies became disillusioned with the lack of progress, leading to significant budget cuts. The Lighthill Report in the UK was particularly influential in criticizing AI's inability to solve real-world problems at scale.",
    explanationChinese: "第一次AI寒冬发生在1970年代，当时AI研究未能兑现其雄心勃勃的承诺。资助机构对缺乏进展感到失望，导致大幅削减预算。英国的莱特希尔报告在批评AI无法大规模解决现实问题方面特别有影响力。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 8,
    q: "Which AI system defeated world chess champion Garry Kasparov in 1997?",
    qChinese: "哪个AI系统在1997年击败了世界国际象棋冠军加里·卡斯帕罗夫？",
    options: [
      "A) Watson",
      "B) AlphaGo",
      "C) Deep Blue",
      "D) ELIZA"
    ],
    optionsChinese: [
      "A) 沃森",
      "B) AlphaGo",
      "C) 深蓝",
      "D) ELIZA"
    ],
    answer: 2,
    explanation: "IBM's Deep Blue defeated Garry Kasparov in a six-game match in 1997, becoming the first computer system to beat a reigning world chess champion under standard tournament conditions. Deep Blue used specialized hardware and evaluated approximately 200 million chess positions per second to make its decisions.",
    explanationChinese: "IBM的深蓝在1997年的六局比赛中击败了加里·卡斯帕罗夫，成为第一个在标准锦标赛条件下击败在任世界国际象棋冠军的计算机系统。深蓝使用专门硬件，每秒评估约2亿个国际象棋位置来做出决策。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 9,
    q: "What is an expert system in AI?",
    qChinese: "AI中的专家系统是什么？",
    options: [
      "A) A system that replaces all human experts permanently",
      "B) A computer program that emulates decision-making ability of a human expert",
      "C) A database of expert opinions with no reasoning capability",
      "D) A neural network trained on expert data exclusively"
    ],
    optionsChinese: [
      "A) 永久替代所有人类专家的系统",
      "B) 模拟人类专家决策能力的计算机程序",
      "C) 没有推理能力的专家意见数据库",
      "D) 专门在专家数据上训练的神经网络"
    ],
    answer: 1,
    explanation: "An expert system is a computer program that uses a knowledge base of human expertise and an inference engine to solve complex problems within a specific domain. Popular in the 1980s, systems like MYCIN for medical diagnosis demonstrated how rule-based reasoning could replicate specialized human decision-making effectively.",
    explanationChinese: "专家系统是一种计算机程序，使用人类专业知识库和推理引擎来解决特定领域内的复杂问题。在1980年代流行的系统如用于医学诊断的MYCIN展示了基于规则的推理如何有效地复制专业的人类决策。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 10,
    q: "What distinguishes reactive machines from other types of AI?",
    qChinese: "反应式机器与其他类型的AI有什么区别？",
    options: [
      "A) They can form memories and learn from past experiences",
      "B) They respond only to current inputs without memory of past interactions",
      "C) They possess self-awareness and consciousness",
      "D) They can predict future events with certainty"
    ],
    optionsChinese: [
      "A) 它们可以形成记忆并从过去的经验中学习",
      "B) 它们仅对当前输入做出响应，没有过去交互的记忆",
      "C) 它们拥有自我意识和意识",
      "D) 它们可以确定地预测未来事件"
    ],
    answer: 1,
    explanation: "Reactive machines are the simplest type of AI that can only respond to current stimuli without any memory or ability to use past experiences. IBM's Deep Blue is a classic example. These systems cannot form memories or use past experiences to inform current decisions, operating purely on present input data.",
    explanationChinese: "反应式机器是最简单的AI类型，只能对当前刺激做出响应，没有记忆或使用过去经验的能力。IBM的深蓝是一个经典例子。这些系统无法形成记忆或使用过去的经验来指导当前决策，纯粹根据当前输入数据运行。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 11,
    q: "What is the 'limited memory' type of AI?",
    qChinese: "什么是"有限记忆"类型的AI？",
    options: [
      "A) AI that has no computational memory",
      "B) AI that can use past data temporarily to make decisions",
      "C) AI that stores unlimited data permanently",
      "D) AI that only processes images"
    ],
    optionsChinese: [
      "A) 没有计算记忆的AI",
      "B) 可以临时使用过去数据做决策的AI",
      "C) 永久存储无限数据的AI",
      "D) 仅处理图像的AI"
    ],
    answer: 1,
    explanation: "Limited memory AI systems can use past experiences or data temporarily to inform current decisions. Self-driving cars are a prime example, using recent observations of other vehicles' speed and direction to make driving decisions. This type represents most current AI applications including deep learning models.",
    explanationChinese: "有限记忆AI系统可以临时使用过去的经验或数据来指导当前决策。自动驾驶汽车是一个典型例子，使用对其他车辆速度和方向的近期观察来做出驾驶决策。这种类型代表了大多数当前的AI应用，包括深度学习模型。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 12,
    q: "What does the 'theory of mind' AI type refer to?",
    qChinese: ""心智理论"AI类型指的是什么？",
    options: [
      "A) AI that can only perform mathematical theorems",
      "B) AI that understands emotions, beliefs, and intentions of others",
      "C) AI that theorizes about the physical universe",
      "D) AI designed exclusively for psychological therapy"
    ],
    optionsChinese: [
      "A) 只能执行数学定理的AI",
      "B) 理解他人情感、信念和意图的AI",
      "C) 对物理宇宙进行理论化的AI",
      "D) 专门为心理治疗设计的AI"
    ],
    answer: 1,
    explanation: "Theory of mind AI is a future class that would understand human emotions, beliefs, intentions, and thought processes. This type would be able to engage in social interactions by comprehending mental states of others. It remains largely theoretical, though some progress has been made in emotion recognition and social robotics research.",
    explanationChinese: "心智理论AI是一种未来的类别，能够理解人类的情感、信念、意图和思维过程。这种类型能够通过理解他人的心理状态来参与社会互动。它在很大程度上仍然是理论性的，尽管在情感识别和社交机器人研究方面已经取得了一些进展。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 13,
    q: "Which of the following is an example of Narrow AI?",
    qChinese: "以下哪个是狭义AI的例子？",
    options: [
      "A) A robot with full human consciousness",
      "B) A spam email filter",
      "C) A machine that masters all human knowledge",
      "D) An AI that experiences emotions"
    ],
    optionsChinese: [
      "A) 具有完整人类意识的机器人",
      "B) 垃圾邮件过滤器",
      "C) 掌握所有人类知识的机器",
      "D) 能体验情感的AI"
    ],
    answer: 1,
    explanation: "A spam email filter is a classic example of Narrow AI. It is designed to perform one specific task: classifying emails as spam or not spam. It uses machine learning algorithms trained on labeled email data but cannot perform tasks outside its designated function, such as driving a car or composing music.",
    explanationChinese: "垃圾邮件过滤器是狭义AI的经典例子。它被设计执行一个特定任务：将电子邮件分类为垃圾邮件或非垃圾邮件。它使用在标记的电子邮件数据上训练的机器学习算法，但无法执行其指定功能之外的任务，如驾驶汽车或创作音乐。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 14,
    q: "What is a key characteristic of symbolic AI?",
    qChinese: "符号AI的一个关键特征是什么？",
    options: [
      "A) It relies exclusively on neural networks",
      "B) It uses human-readable symbols and rules for reasoning",
      "C) It processes only numerical data",
      "D) It requires no programming whatsoever"
    ],
    optionsChinese: [
      "A) 完全依赖神经网络",
      "B) 使用人类可读的符号和规则进行推理",
      "C) 仅处理数值数据",
      "D) 完全不需要编程"
    ],
    answer: 1,
    explanation: "Symbolic AI, also known as Good Old-Fashioned AI (GOFAI), uses human-readable symbols and explicit rules to represent knowledge and perform reasoning. It manipulates symbols according to logical rules, making its reasoning process transparent and interpretable. Expert systems and logic programming are key examples of this approach.",
    explanationChinese: "符号AI，也称为传统AI（GOFAI），使用人类可读的符号和明确的规则来表示知识和执行推理。它根据逻辑规则操作符号，使其推理过程透明和可解释。专家系统和逻辑编程是这种方法的关键例子。",
    diagram: "",
    terms: ["artificial_intelligence", "explainable_ai"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 15,
    q: "What is the Chinese Room argument about?",
    qChinese: ""中文房间"论证是关于什么的？",
    options: [
      "A) How Chinese language processing works in AI",
      "B) That passing the Turing test does not prove true understanding",
      "C) A method for teaching AI Chinese characters",
      "D) The superiority of Chinese AI research"
    ],
    optionsChinese: [
      "A) AI中中文处理如何工作",
      "B) 通过图灵测试并不能证明真正的理解",
      "C) 教AI中文字符的方法",
      "D) 中国AI研究的优越性"
    ],
    answer: 1,
    explanation: "John Searle's Chinese Room argument (1980) challenges the idea that a computer running a program can truly understand language. A person in a room follows rules to respond in Chinese without understanding Chinese, suggesting that symbol manipulation alone does not constitute genuine comprehension or consciousness.",
    explanationChinese: "约翰·塞尔的中文房间论证（1980年）挑战了运行程序的计算机能真正理解语言的观点。房间里的人按照规则用中文回复却不理解中文，这表明仅靠符号操作并不构成真正的理解或意识。",
    diagram: "",
    terms: ["artificial_intelligence", "turing_test"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 16,
    q: "What is the difference between strong AI and weak AI?",
    qChinese: "强AI和弱AI有什么区别？",
    options: [
      "A) Strong AI is faster; weak AI is slower",
      "B) Strong AI possesses genuine understanding; weak AI only simulates it",
      "C) Strong AI uses more data; weak AI uses less",
      "D) There is no meaningful difference between them"
    ],
    optionsChinese: [
      "A) 强AI更快；弱AI更慢",
      "B) 强AI拥有真正的理解；弱AI只是模拟",
      "C) 强AI使用更多数据；弱AI使用更少",
      "D) 它们之间没有有意义的区别"
    ],
    answer: 1,
    explanation: "Strong AI refers to systems that possess genuine understanding, consciousness, and cognitive abilities equivalent to humans. Weak AI merely simulates intelligent behavior without true comprehension. All current AI systems are considered weak AI, as they process patterns without genuine understanding of the information they handle.",
    explanationChinese: "强AI是指拥有真正理解、意识和与人类相当的认知能力的系统。弱AI仅模拟智能行为而没有真正的理解。所有当前的AI系统都被认为是弱AI，因为它们处理模式而没有真正理解它们处理的信息。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 17,
    q: "What is the frame problem in AI?",
    qChinese: "AI中的框架问题是什么？",
    options: [
      "A) Difficulty in rendering image frames quickly",
      "B) The challenge of representing what does NOT change when an action occurs",
      "C) The problem of framing AI ethics questions",
      "D) Limitations in video frame processing speed"
    ],
    optionsChinese: [
      "A) 快速渲染图像帧的困难",
      "B) 表示动作发生时什么不会改变的挑战",
      "C) 构建AI伦理问题的问题",
      "D) 视频帧处理速度的限制"
    ],
    answer: 1,
    explanation: "The frame problem concerns how an AI system can efficiently determine which aspects of its environment remain unchanged after an action. In logical AI, explicitly stating all unchanged facts for every action becomes computationally intractable. This remains a fundamental challenge in knowledge representation and automated reasoning systems.",
    explanationChinese: "框架问题涉及AI系统如何有效地确定其环境中哪些方面在动作之后保持不变。在逻辑AI中，为每个动作明确陈述所有未改变的事实在计算上变得不可处理。这仍然是知识表示和自动推理系统中的一个基本挑战。",
    diagram: "",
    terms: ["artificial_intelligence", "knowledge_graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 18,
    q: "Which programming language was historically most associated with AI research?",
    qChinese: "哪种编程语言在历史上与AI研究最相关？",
    options: [
      "A) Java",
      "B) Lisp",
      "C) C++",
      "D) Fortran"
    ],
    optionsChinese: [
      "A) Java",
      "B) Lisp",
      "C) C++",
      "D) Fortran"
    ],
    answer: 1,
    explanation: "Lisp, created by John McCarthy in 1958, was the dominant language for AI research for decades. Its features like symbolic expression processing, automatic garbage collection, and dynamic typing made it ideal for AI applications. Lisp's flexibility in manipulating code as data structures was particularly valuable for knowledge representation tasks.",
    explanationChinese: "Lisp由约翰·麦卡锡于1958年创建，是AI研究几十年来的主导语言。其符号表达式处理、自动垃圾回收和动态类型等特性使其成为AI应用的理想选择。Lisp将代码作为数据结构进行操作的灵活性对知识表示任务特别有价值。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 19,
    q: "What is a multi-agent system in AI?",
    qChinese: "AI中的多智能体系统是什么？",
    options: [
      "A) A system with multiple user interfaces",
      "B) A system where multiple autonomous agents interact to solve problems",
      "C) A single agent with multiple processors",
      "D) A database system with multiple access points"
    ],
    optionsChinese: [
      "A) 具有多个用户界面的系统",
      "B) 多个自主智能体交互以解决问题的系统",
      "C) 具有多个处理器的单个智能体",
      "D) 具有多个访问点的数据库系统"
    ],
    answer: 1,
    explanation: "A multi-agent system consists of multiple autonomous agents that interact within an environment to achieve individual or collective goals. These agents can cooperate, compete, or negotiate with each other. Applications include traffic management, distributed computing, and market simulations where emergent behavior arises from agent interactions.",
    explanationChinese: "多智能体系统由多个在环境中交互以实现个人或集体目标的自主智能体组成。这些智能体可以相互合作、竞争或协商。应用包括交通管理、分布式计算和市场模拟，其中涌现行为来自智能体交互。",
    diagram: "",
    terms: ["artificial_intelligence", "reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 20,
    q: "What is the symbol grounding problem?",
    qChinese: "什么是符号接地问题？",
    options: [
      "A) The problem of electrical grounding in AI hardware",
      "B) How symbols in AI acquire meaning connected to the real world",
      "C) The difficulty of sorting symbols alphabetically",
      "D) How to prevent symbol overflow in programs"
    ],
    optionsChinese: [
      "A) AI硬件中的电气接地问题",
      "B) AI中的符号如何获得与现实世界相连的意义",
      "C) 按字母顺序排序符号的困难",
      "D) 如何防止程序中的符号溢出"
    ],
    answer: 1,
    explanation: "The symbol grounding problem, introduced by Stevan Harnad in 1990, asks how symbols used in AI systems get their meaning. If a system only manipulates symbols according to rules without any connection to sensory experience or the real world, the symbols remain ungrounded and the system lacks genuine understanding.",
    explanationChinese: "符号接地问题由斯蒂万·哈纳德于1990年提出，询问AI系统中使用的符号如何获得其意义。如果一个系统仅根据规则操作符号而与感官体验或现实世界没有任何联系，则符号仍然是未接地的，系统缺乏真正的理解。",
    diagram: "",
    terms: ["artificial_intelligence", "knowledge_graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 21,
    q: "What is a perceptron?",
    qChinese: "什么是感知器？",
    options: [
      "A) A multi-layer deep neural network",
      "B) The simplest form of a neural network with a single layer",
      "C) A type of computer monitor",
      "D) An advanced reinforcement learning algorithm"
    ],
    optionsChinese: [
      "A) 多层深度神经网络",
      "B) 具有单层的最简单的神经网络形式",
      "C) 一种计算机显示器",
      "D) 一种高级强化学习算法"
    ],
    answer: 1,
    explanation: "A perceptron is the simplest type of artificial neural network, consisting of a single layer of weights that takes inputs, applies weights, sums them, and passes the result through an activation function. Developed by Frank Rosenblatt in 1958, it forms the fundamental building block of more complex neural networks.",
    explanationChinese: "感知器是最简单的人工神经网络类型，由单层权重组成，接收输入、应用权重、求和，并将结果通过激活函数传递。由弗兰克·罗森布拉特于1958年开发，它构成了更复杂神经网络的基本构建块。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 22,
    q: "What is the concept of 'AI alignment'?",
    qChinese: ""AI对齐"的概念是什么？",
    options: [
      "A) Aligning AI hardware components physically",
      "B) Ensuring AI systems' goals and behaviors match human values and intentions",
      "C) Synchronizing multiple AI clocks",
      "D) Formatting AI output in aligned columns"
    ],
    optionsChinese: [
      "A) 物理对齐AI硬件组件",
      "B) 确保AI系统的目标和行为与人类价值观和意图相匹配",
      "C) 同步多个AI时钟",
      "D) 以对齐的列格式化AI输出"
    ],
    answer: 1,
    explanation: "AI alignment is the research challenge of ensuring that AI systems pursue goals that are beneficial to humans and aligned with human values and intentions. As AI systems become more capable, misalignment between AI objectives and human values could lead to harmful outcomes, making this a critical area of AI safety research.",
    explanationChinese: "AI对齐是确保AI系统追求对人类有益并与人类价值观和意图一致的目标的研究挑战。随着AI系统变得更加强大，AI目标与人类价值观之间的不对齐可能导致有害结果，使其成为AI安全研究的关键领域。",
    diagram: "",
    terms: ["artificial_intelligence", "ai_ethics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 23,
    q: "What is the Moravec's Paradox?",
    qChinese: "什么是莫拉维克悖论？",
    options: [
      "A) Simple computations are harder than complex ones for AI",
      "B) High-level reasoning requires less computation than low-level sensorimotor skills",
      "C) AI always outperforms humans in physical tasks",
      "D) Neural networks cannot learn from visual data"
    ],
    optionsChinese: [
      "A) 对AI来说简单计算比复杂计算更难",
      "B) 高级推理比低级感觉运动技能需要更少的计算",
      "C) AI在物理任务中总是优于人类",
      "D) 神经网络无法从视觉数据中学习"
    ],
    answer: 1,
    explanation: "Moravec's Paradox observes that tasks easy for humans, like walking or recognizing faces, are extremely difficult for AI, while tasks hard for humans, like complex mathematics, are relatively easy for computers. This reflects millions of years of evolution optimizing sensorimotor skills versus the recent development of abstract reasoning.",
    explanationChinese: "莫拉维克悖论观察到，对人类来说容易的任务如行走或识别面孔，对AI来说极其困难，而对人类来说困难的任务如复杂数学，对计算机来说相对容易。这反映了数百万年的进化优化了感觉运动技能，而抽象推理是最近才发展的。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 24,
    q: "What is computational intelligence?",
    qChinese: "什么是计算智能？",
    options: [
      "A) The speed at which a computer processes data",
      "B) A set of nature-inspired computational approaches including neural nets, fuzzy logic, and evolutionary computing",
      "C) The amount of RAM available to AI programs",
      "D) A measure of CPU performance benchmarks"
    ],
    optionsChinese: [
      "A) 计算机处理数据的速度",
      "B) 一组受自然启发的计算方法，包括神经网络、模糊逻辑和进化计算",
      "C) AI程序可用的RAM数量",
      "D) CPU性能基准的测量"
    ],
    answer: 1,
    explanation: "Computational intelligence encompasses nature-inspired computational methodologies including neural networks, fuzzy systems, and evolutionary computation. Unlike traditional AI that relies on explicit rules, computational intelligence approaches learn from data and adapt through biologically inspired mechanisms like natural selection and neural processing patterns.",
    explanationChinese: "计算智能包含受自然启发的计算方法，包括神经网络、模糊系统和进化计算。与依赖明确规则的传统AI不同，计算智能方法从数据中学习，并通过自然选择和神经处理模式等生物启发机制进行适应。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 25,
    q: "What is the significance of the ImageNet competition for AI?",
    qChinese: "ImageNet竞赛对AI有什么意义？",
    options: [
      "A) It proved AI cannot recognize images",
      "B) It catalyzed the deep learning revolution when AlexNet won in 2012",
      "C) It established the first AI programming language",
      "D) It demonstrated that traditional algorithms outperform neural networks"
    ],
    optionsChinese: [
      "A) 它证明了AI无法识别图像",
      "B) 2012年AlexNet获胜时催化了深度学习革命",
      "C) 它建立了第一种AI编程语言",
      "D) 它证明了传统算法优于神经网络"
    ],
    answer: 1,
    explanation: "The ImageNet Large Scale Visual Recognition Challenge became a landmark when AlexNet, a deep convolutional neural network, won in 2012 with dramatically lower error rates. This victory demonstrated the power of deep learning and GPU-accelerated training, triggering a revolution in AI research and commercial applications across industries.",
    explanationChinese: "ImageNet大规模视觉识别挑战赛在2012年成为里程碑，当时深度卷积神经网络AlexNet以大幅降低的错误率获胜。这一胜利展示了深度学习和GPU加速训练的力量，引发了AI研究和跨行业商业应用的革命。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 26,
    q: "What is Breadth-First Search (BFS) in AI?",
    qChinese: "AI中的广度优先搜索（BFS）是什么？",
    options: [
      "A) A search that explores the deepest nodes first",
      "B) A search that explores all nodes at the current depth before moving deeper",
      "C) A search that uses heuristics to guide exploration",
      "D) A search that randomly selects nodes to explore"
    ],
    optionsChinese: [
      "A) 首先探索最深节点的搜索",
      "B) 在移动到更深层之前探索当前深度所有节点的搜索",
      "C) 使用启发式来指导探索的搜索",
      "D) 随机选择节点进行探索的搜索"
    ],
    answer: 1,
    explanation: "Breadth-First Search explores all neighbor nodes at the present depth level before moving to nodes at the next depth level. It uses a queue data structure and guarantees finding the shortest path in unweighted graphs. BFS is complete and optimal for uniform-cost problems but can be memory-intensive for large search spaces.",
    explanationChinese: "广度优先搜索在移动到下一深度级别的节点之前，探索当前深度级别的所有邻居节点。它使用队列数据结构，保证在无权图中找到最短路径。BFS对于统一成本问题是完备和最优的，但对于大型搜索空间可能需要大量内存。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 27,
    q: "What is Depth-First Search (DFS) in AI?",
    qChinese: "AI中的深度优先搜索（DFS）是什么？",
    options: [
      "A) A search that explores all nodes at one level before going deeper",
      "B) A search that always finds the optimal solution",
      "C) A search that explores as far as possible along each branch before backtracking",
      "D) A search limited to binary trees only"
    ],
    optionsChinese: [
      "A) 在深入之前探索一个级别所有节点的搜索",
      "B) 总是找到最优解的搜索",
      "C) 在回溯之前沿每个分支尽可能远地探索的搜索",
      "D) 仅限于二叉树的搜索"
    ],
    answer: 2,
    explanation: "Depth-First Search explores as far as possible along each branch before backtracking to explore other branches. It uses a stack data structure and requires less memory than BFS. However, DFS is not guaranteed to find the shortest path and may get stuck in infinite loops without proper cycle detection mechanisms.",
    explanationChinese: "深度优先搜索在回溯探索其他分支之前，沿每个分支尽可能远地探索。它使用栈数据结构，比BFS需要更少的内存。然而，DFS不保证找到最短路径，如果没有适当的循环检测机制，可能会陷入无限循环。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 28,
    q: "What is Uniform Cost Search (UCS)?",
    qChinese: "什么是统一代价搜索（UCS）？",
    options: [
      "A) A search that assigns equal cost to all nodes",
      "B) A search that expands the node with the lowest cumulative path cost",
      "C) A search that only works with uniform graph structures",
      "D) A heuristic-based search algorithm"
    ],
    optionsChinese: [
      "A) 为所有节点分配相等代价的搜索",
      "B) 扩展具有最低累积路径代价的节点的搜索",
      "C) 仅适用于统一图结构的搜索",
      "D) 基于启发式的搜索算法"
    ],
    answer: 1,
    explanation: "Uniform Cost Search expands the node with the lowest cumulative path cost from the start node. It uses a priority queue and is optimal when all edge costs are non-negative. UCS is essentially Dijkstra's algorithm applied to search problems, guaranteeing the least-cost path to the goal when step costs vary.",
    explanationChinese: "统一代价搜索扩展从起始节点累积路径代价最低的节点。它使用优先队列，当所有边代价为非负时是最优的。UCS本质上是应用于搜索问题的Dijkstra算法，当步骤代价不同时保证到目标的最低代价路径。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 29,
    q: "What is a heuristic function in search algorithms?",
    qChinese: "搜索算法中的启发式函数是什么？",
    options: [
      "A) A function that guarantees the exact solution cost",
      "B) An estimate of the cost from a given state to the goal state",
      "C) A function that counts the number of visited nodes",
      "D) A random number generator for search exploration"
    ],
    optionsChinese: [
      "A) 保证精确解代价的函数",
      "B) 从给定状态到目标状态的代价估计",
      "C) 计算已访问节点数量的函数",
      "D) 用于搜索探索的随机数生成器"
    ],
    answer: 1,
    explanation: "A heuristic function estimates the cost from a current state to the goal state. It provides informed guidance to search algorithms, helping them prioritize which nodes to explore next. Good heuristics significantly reduce the search space without requiring exhaustive exploration, improving efficiency while maintaining solution quality.",
    explanationChinese: "启发式函数估计从当前状态到目标状态的代价。它为搜索算法提供有信息的指导，帮助它们优先考虑接下来探索哪些节点。好的启发式函数在不需要穷举探索的情况下显著减少搜索空间，提高效率同时保持解的质量。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 30,
    q: "What is the A* search algorithm?",
    qChinese: "什么是A*搜索算法？",
    options: [
      "A) A search that only uses heuristic estimates",
      "B) A search that combines actual cost and heuristic estimate: f(n) = g(n) + h(n)",
      "C) A brute-force search without any optimization",
      "D) A search algorithm exclusive to game playing"
    ],
    optionsChinese: [
      "A) 仅使用启发式估计的搜索",
      "B) 结合实际代价和启发式估计的搜索：f(n) = g(n) + h(n)",
      "C) 没有任何优化的暴力搜索",
      "D) 专用于游戏的搜索算法"
    ],
    answer: 1,
    explanation: "A* search combines the actual cost from the start (g(n)) with a heuristic estimate to the goal (h(n)) using f(n) = g(n) + h(n). It is both complete and optimal when the heuristic is admissible (never overestimates). A* is widely used in pathfinding, robotics, and game AI for efficient optimal path discovery.",
    explanationChinese: "A*搜索使用f(n) = g(n) + h(n)结合从起点的实际代价(g(n))和到目标的启发式估计(h(n))。当启发式是可容许的（从不高估）时，它既是完备的又是最优的。A*广泛用于路径查找、机器人和游戏AI中的高效最优路径发现。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 31,
    q: "What does it mean for a heuristic to be 'admissible'?",
    qChinese: "启发式是'可容许的'是什么意思？",
    options: [
      "A) It always overestimates the true cost to the goal",
      "B) It never overestimates the true cost to reach the goal",
      "C) It returns zero for all states",
      "D) It is computed in constant time"
    ],
    optionsChinese: [
      "A) 它总是高估到目标的真实代价",
      "B) 它从不高估到达目标的真实代价",
      "C) 它对所有状态返回零",
      "D) 它在常数时间内计算"
    ],
    answer: 1,
    explanation: "An admissible heuristic never overestimates the actual cost to reach the goal from any given state. This property is crucial for A* search to guarantee finding the optimal solution. Manhattan distance for grid-based pathfinding is a classic admissible heuristic because it calculates the minimum possible distance without obstacles.",
    explanationChinese: "可容许启发式从不高估从任何给定状态到达目标的实际代价。这个属性对于A*搜索保证找到最优解至关重要。网格路径查找的曼哈顿距离是一个经典的可容许启发式，因为它计算没有障碍物时的最小可能距离。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 32,
    q: "What is a consistent (monotonic) heuristic?",
    qChinese: "什么是一致性（单调）启发式？",
    options: [
      "A) A heuristic that always returns the same value",
      "B) A heuristic where h(n) <= cost(n,n') + h(n') for every successor n'",
      "C) A heuristic that increases with each step",
      "D) A heuristic that only works for tree searches"
    ],
    optionsChinese: [
      "A) 总是返回相同值的启发式",
      "B) 对于每个后继n'，h(n) <= cost(n,n') + h(n')的启发式",
      "C) 每步递增的启发式",
      "D) 仅适用于树搜索的启发式"
    ],
    answer: 1,
    explanation: "A consistent heuristic satisfies the triangle inequality: for every node n and successor n', the estimated cost h(n) is no greater than the step cost plus h(n'). Consistency implies admissibility and ensures A* never needs to re-expand nodes, making graph search with A* both optimal and efficient.",
    explanationChinese: "一致性启发式满足三角不等式：对于每个节点n和后继n'，估计代价h(n)不大于步骤代价加h(n')。一致性意味着可容许性，确保A*永远不需要重新扩展节点，使带有A*的图搜索既最优又高效。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 33,
    q: "What is Greedy Best-First Search?",
    qChinese: "什么是贪婪最佳优先搜索？",
    options: [
      "A) A search that uses f(n) = g(n) + h(n)",
      "B) A search that expands the node closest to the goal based only on heuristic h(n)",
      "C) A search that explores all nodes equally",
      "D) A search guaranteed to find the optimal solution"
    ],
    optionsChinese: [
      "A) 使用f(n) = g(n) + h(n)的搜索",
      "B) 仅基于启发式h(n)扩展最接近目标的节点的搜索",
      "C) 平等探索所有节点的搜索",
      "D) 保证找到最优解的搜索"
    ],
    answer: 1,
    explanation: "Greedy Best-First Search selects the node that appears closest to the goal using only the heuristic function h(n), ignoring the path cost so far. While it can find solutions quickly, it is neither complete nor optimal because it may follow a seemingly promising but ultimately suboptimal or infinite path.",
    explanationChinese: "贪婪最佳优先搜索仅使用启发式函数h(n)选择看起来最接近目标的节点，忽略到目前为止的路径代价。虽然它可以快速找到解，但它既不完备也不最优，因为它可能沿着看似有希望但最终次优或无限的路径前进。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 34,
    q: "What is Iterative Deepening Depth-First Search (IDDFS)?",
    qChinese: "什么是迭代加深深度优先搜索（IDDFS）？",
    options: [
      "A) DFS with a fixed maximum depth",
      "B) DFS that repeatedly increases the depth limit until the goal is found",
      "C) BFS applied iteratively on different graphs",
      "D) A parallel version of depth-first search"
    ],
    optionsChinese: [
      "A) 具有固定最大深度的DFS",
      "B) 重复增加深度限制直到找到目标的DFS",
      "C) 在不同图上迭代应用的BFS",
      "D) 深度优先搜索的并行版本"
    ],
    answer: 1,
    explanation: "IDDFS combines the space efficiency of DFS with the completeness of BFS by performing DFS with increasingly larger depth limits. Each iteration searches deeper until the goal is found. Despite re-exploring nodes, its overall time complexity matches BFS while using only linear memory proportional to the depth.",
    explanationChinese: "IDDFS通过执行具有逐渐增大的深度限制的DFS，结合了DFS的空间效率和BFS的完备性。每次迭代搜索更深直到找到目标。尽管重新探索节点，其总体时间复杂度与BFS相当，同时仅使用与深度成比例的线性内存。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 35,
    q: "In search algorithms, what is the 'branching factor'?",
    qChinese: "在搜索算法中，什么是"分支因子"？",
    options: [
      "A) The total number of nodes in the search tree",
      "B) The average number of successors per node",
      "C) The depth of the optimal solution",
      "D) The number of leaf nodes in the tree"
    ],
    optionsChinese: [
      "A) 搜索树中的节点总数",
      "B) 每个节点的平均后继数",
      "C) 最优解的深度",
      "D) 树中叶节点的数量"
    ],
    answer: 1,
    explanation: "The branching factor is the average number of child nodes (successors) generated by each node in a search tree. It directly impacts the complexity of search algorithms. A higher branching factor means exponentially more nodes to explore, making effective pruning and heuristic guidance essential for tractable search performance.",
    explanationChinese: "分支因子是搜索树中每个节点生成的子节点（后继）的平均数量。它直接影响搜索算法的复杂性。更高的分支因子意味着需要探索指数级更多的节点，使有效的剪枝和启发式指导对于可处理的搜索性能至关重要。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 36,
    q: "What is the minimax algorithm used for?",
    qChinese: "极小极大算法用于什么？",
    options: [
      "A) Sorting data efficiently",
      "B) Optimal decision-making in two-player zero-sum games",
      "C) Clustering data points",
      "D) Training neural networks"
    ],
    optionsChinese: [
      "A) 高效排序数据",
      "B) 两人零和博弈中的最优决策",
      "C) 聚类数据点",
      "D) 训练神经网络"
    ],
    answer: 1,
    explanation: "The minimax algorithm determines the optimal move in two-player zero-sum games by assuming both players play optimally. The maximizing player tries to maximize the score while the minimizing player tries to minimize it. It explores the complete game tree to find the best guaranteed outcome for the current player.",
    explanationChinese: "极小极大算法通过假设两个玩家都以最优方式进行游戏，来确定两人零和博弈中的最优移动。最大化玩家尝试最大化分数，而最小化玩家尝试最小化分数。它探索完整的博弈树以找到当前玩家的最佳保证结果。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 37,
    q: "What is alpha-beta pruning?",
    qChinese: "什么是Alpha-Beta剪枝？",
    options: [
      "A) A technique to add more branches to the search tree",
      "B) An optimization of minimax that eliminates branches that cannot affect the final decision",
      "C) A method for balancing binary search trees",
      "D) A neural network pruning technique"
    ],
    optionsChinese: [
      "A) 向搜索树添加更多分支的技术",
      "B) 消除不能影响最终决策的分支的极小极大优化",
      "C) 平衡二叉搜索树的方法",
      "D) 神经网络剪枝技术"
    ],
    answer: 1,
    explanation: "Alpha-beta pruning optimizes the minimax algorithm by eliminating branches that cannot possibly influence the final decision. Alpha tracks the best value for the maximizer, beta for the minimizer. When alpha >= beta, remaining branches are pruned. This can reduce the effective branching factor from b to approximately sqrt(b).",
    explanationChinese: "Alpha-beta剪枝通过消除不可能影响最终决策的分支来优化极小极大算法。Alpha跟踪最大化者的最佳值，beta跟踪最小化者的最佳值。当alpha >= beta时，剩余分支被剪枝。这可以将有效分支因子从b减少到大约sqrt(b)。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 38,
    q: "What is a hill climbing search algorithm?",
    qChinese: "什么是爬山搜索算法？",
    options: [
      "A) A global optimization algorithm that always finds the best solution",
      "B) A local search that continually moves toward increasing value",
      "C) A search that descends to the lowest cost node",
      "D) A search requiring a complete map of the solution space"
    ],
    optionsChinese: [
      "A) 总是找到最佳解的全局优化算法",
      "B) 不断向增加值方向移动的局部搜索",
      "C) 下降到最低代价节点的搜索",
      "D) 需要解空间完整映射的搜索"
    ],
    answer: 1,
    explanation: "Hill climbing is a local search algorithm that iteratively moves to the neighboring state with the highest value. It is simple and memory-efficient but can get stuck at local maxima, plateaus, and ridges. Variants like stochastic hill climbing and random restart hill climbing help mitigate these limitations partially.",
    explanationChinese: "爬山法是一种局部搜索算法，迭代地移动到具有最高值的相邻状态。它简单且内存高效，但可能陷入局部最大值、平台和山脊。随机爬山和随机重启爬山等变体有助于部分缓解这些限制。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 39,
    q: "What is simulated annealing?",
    qChinese: "什么是模拟退火？",
    options: [
      "A) A method for heating computer processors",
      "B) An optimization algorithm inspired by the annealing process in metallurgy",
      "C) A technique for cooling neural networks during training",
      "D) A data compression algorithm"
    ],
    optionsChinese: [
      "A) 加热计算机处理器的方法",
      "B) 受冶金退火过程启发的优化算法",
      "C) 训练期间冷却神经网络的技术",
      "D) 数据压缩算法"
    ],
    answer: 1,
    explanation: "Simulated annealing is a probabilistic optimization algorithm inspired by the annealing process in metallurgy. It accepts worse solutions with decreasing probability over time, controlled by a temperature parameter. This allows it to escape local optima early in the search while converging to a good solution as temperature decreases.",
    explanationChinese: "模拟退火是受冶金退火过程启发的概率优化算法。它以随时间递减的概率接受更差的解，由温度参数控制。这使它能在搜索早期逃脱局部最优，同时随着温度降低收敛到好的解。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 40,
    q: "What is a genetic algorithm?",
    qChinese: "什么是遗传算法？",
    options: [
      "A) An algorithm for DNA sequencing",
      "B) A search algorithm inspired by natural selection using crossover and mutation",
      "C) An algorithm that only works on genetic data",
      "D) A sorting algorithm based on biological processes"
    ],
    optionsChinese: [
      "A) DNA测序算法",
      "B) 受自然选择启发使用交叉和变异的搜索算法",
      "C) 仅适用于遗传数据的算法",
      "D) 基于生物过程的排序算法"
    ],
    answer: 1,
    explanation: "Genetic algorithms are search and optimization techniques inspired by natural evolution. They maintain a population of candidate solutions that evolve through selection, crossover, and mutation operators. Fitter individuals are more likely to reproduce, gradually improving the population's overall fitness over successive generations toward optimal solutions.",
    explanationChinese: "遗传算法是受自然进化启发的搜索和优化技术。它们维护一个通过选择、交叉和变异算子进化的候选解种群。更适应的个体更可能繁殖，在连续代中逐渐提高种群的整体适应度，趋向最优解。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 41,
    q: "What is the time complexity of BFS?",
    qChinese: "BFS的时间复杂度是多少？",
    options: [
      "A) O(n log n)",
      "B) O(b^d) where b is branching factor and d is depth",
      "C) O(n^2)",
      "D) O(log n)"
    ],
    optionsChinese: [
      "A) O(n log n)",
      "B) O(b^d)，其中b是分支因子，d是深度",
      "C) O(n^2)",
      "D) O(log n)"
    ],
    answer: 1,
    explanation: "BFS has a time complexity of O(b^d) where b is the branching factor and d is the depth of the shallowest goal node. This exponential growth means BFS can become impractical for problems with large branching factors or deep solutions, as the number of nodes explored grows exponentially with depth.",
    explanationChinese: "BFS的时间复杂度为O(b^d)，其中b是分支因子，d是最浅目标节点的深度。这种指数增长意味着BFS对于具有大分支因子或深解的问题可能变得不切实际，因为探索的节点数量随深度呈指数增长。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 42,
    q: "What is a constraint satisfaction problem (CSP)?",
    qChinese: "什么是约束满足问题（CSP）？",
    options: [
      "A) A problem with no constraints on the solution",
      "B) A problem where variables must satisfy a set of constraints simultaneously",
      "C) A problem that can only be solved by brute force",
      "D) A type of neural network architecture"
    ],
    optionsChinese: [
      "A) 对解没有约束的问题",
      "B) 变量必须同时满足一组约束的问题",
      "C) 只能通过暴力解决的问题",
      "D) 一种神经网络架构"
    ],
    answer: 1,
    explanation: "A constraint satisfaction problem consists of variables, each with a domain of possible values, and constraints that specify allowable combinations. Examples include Sudoku, map coloring, and scheduling. CSPs are solved using techniques like backtracking, arc consistency, and constraint propagation to efficiently find valid assignments.",
    explanationChinese: "约束满足问题由变量（每个变量都有可能值的域）和指定允许组合的约束组成。例子包括数独、地图着色和调度。CSP使用回溯、弧一致性和约束传播等技术来高效地找到有效赋值。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 43,
    q: "What is beam search?",
    qChinese: "什么是束搜索？",
    options: [
      "A) A search using laser beams for pathfinding",
      "B) A search that keeps only a fixed number of best partial solutions at each level",
      "C) A search that explores all possible solutions",
      "D) A random search with no memory"
    ],
    optionsChinese: [
      "A) 使用激光束进行路径查找的搜索",
      "B) 在每个级别仅保留固定数量的最佳部分解的搜索",
      "C) 探索所有可能解的搜索",
      "D) 没有记忆的随机搜索"
    ],
    answer: 1,
    explanation: "Beam search is a heuristic search algorithm that keeps only a predetermined number (beam width) of best partial solutions at each level. It trades completeness for efficiency by limiting memory usage. Widely used in natural language processing and machine translation, beam search balances exploration breadth with computational constraints.",
    explanationChinese: "束搜索是一种启发式搜索算法，在每个级别仅保留预定数量（束宽）的最佳部分解。它通过限制内存使用来换取效率。广泛用于自然语言处理和机器翻译，束搜索在探索广度和计算约束之间取得平衡。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 44,
    q: "What is bidirectional search?",
    qChinese: "什么是双向搜索？",
    options: [
      "A) A search that runs two different algorithms simultaneously",
      "B) A search that runs simultaneously from start and goal until they meet",
      "C) A search that alternates between left and right paths",
      "D) A search limited to two-dimensional spaces"
    ],
    optionsChinese: [
      "A) 同时运行两种不同算法的搜索",
      "B) 从起点和目标同时运行直到相遇的搜索",
      "C) 在左右路径之间交替的搜索",
      "D) 仅限于二维空间的搜索"
    ],
    answer: 1,
    explanation: "Bidirectional search runs two simultaneous searches: one forward from the start state and one backward from the goal state. They meet in the middle, reducing the search space from O(b^d) to approximately O(b^(d/2)). This dramatic reduction makes it effective when both start and goal states are known.",
    explanationChinese: "双向搜索运行两个同时搜索：一个从起始状态向前，一个从目标状态向后。它们在中间相遇，将搜索空间从O(b^d)减少到大约O(b^(d/2))。这种显著的减少使其在起始和目标状态都已知时非常有效。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 45,
    q: "What is the difference between informed and uninformed search?",
    qChinese: "有信息搜索和无信息搜索有什么区别？",
    options: [
      "A) Informed search is faster hardware; uninformed is slower",
      "B) Informed search uses domain-specific knowledge; uninformed does not",
      "C) Uninformed search always finds better solutions",
      "D) There is no practical difference between them"
    ],
    optionsChinese: [
      "A) 有信息搜索是更快的硬件；无信息是更慢的",
      "B) 有信息搜索使用领域特定知识；无信息搜索不使用",
      "C) 无信息搜索总是找到更好的解",
      "D) 它们之间没有实际区别"
    ],
    answer: 1,
    explanation: "Informed search algorithms use domain-specific knowledge through heuristic functions to guide the search toward the goal more efficiently. Examples include A* and greedy best-first search. Uninformed search algorithms like BFS and DFS have no additional information beyond the problem definition, exploring the search space more blindly.",
    explanationChinese: "有信息搜索算法通过启发式函数使用领域特定知识，更有效地引导搜索向目标方向进行。例子包括A*和贪婪最佳优先搜索。无信息搜索算法如BFS和DFS除了问题定义之外没有额外信息，更盲目地探索搜索空间。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 46,
    q: "What is the IDA* algorithm?",
    qChinese: "什么是IDA*算法？",
    options: [
      "A) An improved version of DFS without heuristics",
      "B) Iterative deepening A* that uses f-cost as the depth limit",
      "C) A parallel implementation of A*",
      "D) A simplified version of BFS"
    ],
    optionsChinese: [
      "A) 没有启发式的DFS改进版本",
      "B) 使用f代价作为深度限制的迭代加深A*",
      "C) A*的并行实现",
      "D) BFS的简化版本"
    ],
    answer: 1,
    explanation: "IDA* (Iterative Deepening A*) combines the memory efficiency of iterative deepening with A*'s heuristic guidance. Instead of a depth limit, it uses an f-cost threshold that increases each iteration. IDA* is optimal and complete with admissible heuristics while requiring only linear memory, making it ideal for memory-constrained environments.",
    explanationChinese: "IDA*（迭代加深A*）结合了迭代加深的内存效率和A*的启发式指导。它使用f代价阈值而不是深度限制，每次迭代增加。IDA*在可容许启发式下是最优和完备的，同时只需要线性内存，使其非常适合内存受限的环境。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 47,
    q: "What is the purpose of the evaluation function in game-playing AI?",
    qChinese: "游戏AI中评估函数的目的是什么？",
    options: [
      "A) To count the number of moves made",
      "B) To estimate the desirability of a game position without full search",
      "C) To validate the rules of the game",
      "D) To determine who plays first"
    ],
    optionsChinese: [
      "A) 计算已走步数",
      "B) 在不进行完整搜索的情况下估计游戏位置的有利程度",
      "C) 验证游戏规则",
      "D) 确定谁先走"
    ],
    answer: 1,
    explanation: "An evaluation function estimates the utility or desirability of a game state when it is impractical to search to terminal states. It assigns numerical scores reflecting how favorable a position is for a player. Good evaluation functions capture strategic features like material advantage, positional control, and tactical threats in the game.",
    explanationChinese: "评估函数在无法搜索到终端状态时估计游戏状态的效用或有利程度。它分配反映某个位置对玩家有多有利的数值分数。好的评估函数捕获游戏中的战略特征，如物质优势、位置控制和战术威胁。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 48,
    q: "What is Monte Carlo Tree Search (MCTS)?",
    qChinese: "什么是蒙特卡洛树搜索（MCTS）？",
    options: [
      "A) A deterministic search requiring complete game knowledge",
      "B) A search using random simulations to evaluate moves and build a search tree",
      "C) A search algorithm limited to card games",
      "D) A brute-force search of all possible game states"
    ],
    optionsChinese: [
      "A) 需要完整游戏知识的确定性搜索",
      "B) 使用随机模拟来评估移动并构建搜索树的搜索",
      "C) 仅限于纸牌游戏的搜索算法",
      "D) 所有可能游戏状态的暴力搜索"
    ],
    answer: 1,
    explanation: "Monte Carlo Tree Search builds a search tree incrementally using random simulations (rollouts) to estimate move values. It balances exploration and exploitation through four phases: selection, expansion, simulation, and backpropagation. MCTS was pivotal in AlphaGo's success and excels in games with large branching factors like Go.",
    explanationChinese: "蒙特卡洛树搜索使用随机模拟（展开）增量构建搜索树以估计移动值。它通过四个阶段平衡探索和利用：选择、扩展、模拟和反向传播。MCTS在AlphaGo的成功中发挥了关键作用，在围棋等具有大分支因子的游戏中表现出色。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 49,
    q: "What is the difference between local search and global search?",
    qChinese: "局部搜索和全局搜索有什么区别？",
    options: [
      "A) Local search is used locally; global search is used globally",
      "B) Local search operates on a single current state; global search maintains multiple paths",
      "C) Global search is always slower than local search",
      "D) Local search guarantees optimal solutions; global search does not"
    ],
    optionsChinese: [
      "A) 局部搜索在本地使用；全局搜索在全球使用",
      "B) 局部搜索在单个当前状态上操作；全局搜索维护多条路径",
      "C) 全局搜索总是比局部搜索慢",
      "D) 局部搜索保证最优解；全局搜索不保证"
    ],
    answer: 1,
    explanation: "Local search algorithms operate on a single current state and move to neighboring states, using very little memory. Examples include hill climbing and simulated annealing. Global search algorithms like BFS and A* systematically explore the search space while maintaining multiple paths, providing completeness and optimality guarantees at higher memory cost.",
    explanationChinese: "局部搜索算法在单个当前状态上操作并移动到相邻状态，使用很少的内存。例子包括爬山法和模拟退火。全局搜索算法如BFS和A*系统地探索搜索空间同时维护多条路径，以更高的内存成本提供完备性和最优性保证。",
    diagram: "",
    terms: ["artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 50,
    q: "What is the exploration vs. exploitation dilemma in search?",
    qChinese: "搜索中的探索与利用困境是什么？",
    options: [
      "A) Choosing between open-source and proprietary algorithms",
      "B) Balancing between trying new options and using known good options",
      "C) Deciding between parallel and sequential processing",
      "D) Choosing between depth-first and breadth-first search"
    ],
    optionsChinese: [
      "A) 在开源和专有算法之间选择",
      "B) 在尝试新选项和使用已知好选项之间取得平衡",
      "C) 在并行和顺序处理之间决定",
      "D) 在深度优先和广度优先搜索之间选择"
    ],
    answer: 1,
    explanation: "The exploration-exploitation dilemma involves balancing between exploring unknown options that might yield better results and exploiting currently known good options. This tradeoff appears throughout AI, from search algorithms to reinforcement learning. Too much exploration wastes resources; too much exploitation may miss superior solutions.",
    explanationChinese: "探索-利用困境涉及在探索可能产生更好结果的未知选项和利用当前已知的好选项之间取得平衡。这种权衡在AI中无处不在，从搜索算法到强化学习。过多的探索浪费资源；过多的利用可能错过更优的解。",
    diagram: "",
    terms: ["artificial_intelligence", "reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 51,
    q: "What is knowledge representation in AI?",
    qChinese: "AI中的知识表示是什么？",
    options: [
      "A) Storing data in a database without structure",
      "B) The method of encoding information so AI systems can reason with it",
      "C) Displaying knowledge on a computer screen",
      "D) Compressing data for efficient storage"
    ],
    optionsChinese: [
      "A) 在数据库中无结构地存储数据",
      "B) 对信息进行编码以使AI系统能够进行推理的方法",
      "C) 在计算机屏幕上显示知识",
      "D) 为高效存储压缩数据"
    ],
    answer: 1,
    explanation: "Knowledge representation is the field of AI concerned with how information about the world can be represented in a form that computer systems can use for reasoning and problem-solving. It bridges the gap between raw data and intelligent behavior by providing structured formats like logic, frames, and semantic networks.",
    explanationChinese: "知识表示是AI领域，关注如何将关于世界的信息表示为计算机系统可用于推理和问题解决的形式。它通过提供逻辑、框架和语义网络等结构化格式，弥合原始数据和智能行为之间的差距。",
    diagram: "",
    terms: ["knowledge_graph", "artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 52,
    q: "What is propositional logic in AI?",
    qChinese: "AI中的命题逻辑是什么？",
    options: [
      "A) Logic that deals with propositions that can be true or false",
      "B) Logic that handles uncertain probabilities",
      "C) Logic specifically designed for natural language",
      "D) Logic that only uses numerical values"
    ],
    optionsChinese: [
      "A) 处理可以为真或假的命题的逻辑",
      "B) 处理不确定概率的逻辑",
      "C) 专门为自然语言设计的逻辑",
      "D) 仅使用数值的逻辑"
    ],
    answer: 0,
    explanation: "Propositional logic deals with declarative statements (propositions) that are either true or false. It uses logical connectives like AND, OR, NOT, and IMPLIES to combine propositions. While simpler than first-order logic, it cannot express relationships between objects or quantify over domains of discourse.",
    explanationChinese: "命题逻辑处理要么为真要么为假的陈述性语句（命题）。它使用逻辑连接词如AND、OR、NOT和IMPLIES来组合命题。虽然比一阶逻辑简单，但它无法表达对象之间的关系或对论域进行量化。",
    diagram: "",
    terms: ["knowledge_graph", "artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 53,
    q: "What is first-order logic (predicate logic)?",
    qChinese: "什么是一阶逻辑（谓词逻辑）？",
    options: [
      "A) Logic limited to true/false propositions only",
      "B) Logic that extends propositional logic with variables, quantifiers, and predicates",
      "C) The simplest form of logical reasoning",
      "D) Logic that cannot express relationships"
    ],
    optionsChinese: [
      "A) 仅限于真/假命题的逻辑",
      "B) 用变量、量词和谓词扩展命题逻辑的逻辑",
      "C) 最简单的逻辑推理形式",
      "D) 无法表达关系的逻辑"
    ],
    answer: 1,
    explanation: "First-order logic extends propositional logic by introducing variables, quantifiers (universal and existential), predicates, and functions. It can express statements about objects, their properties, and relationships. For example, 'All humans are mortal' can be expressed as: ForAll(x, Human(x) -> Mortal(x)).",
    explanationChinese: "一阶逻辑通过引入变量、量词（全称和存在）、谓词和函数来扩展命题逻辑。它可以表达关于对象、其属性和关系的陈述。例如，'所有人都是凡人'可以表示为：ForAll(x, Human(x) -> Mortal(x))。",
    diagram: "",
    terms: ["knowledge_graph", "artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 54,
    q: "What is an ontology in AI?",
    qChinese: "AI中的本体论是什么？",
    options: [
      "A) A branch of philosophy with no AI applications",
      "B) A formal specification of concepts and relationships within a domain",
      "C) A programming language for databases",
      "D) A type of neural network architecture"
    ],
    optionsChinese: [
      "A) 没有AI应用的哲学分支",
      "B) 领域内概念和关系的正式规范",
      "C) 数据库编程语言",
      "D) 一种神经网络架构"
    ],
    answer: 1,
    explanation: "In AI, an ontology is a formal, explicit specification of a shared conceptualization of a domain. It defines concepts, their properties, and relationships between them in a structured format. Ontologies enable knowledge sharing, reuse, and automated reasoning by providing a common vocabulary and understanding of a domain.",
    explanationChinese: "在AI中，本体论是对领域共享概念化的正式、明确的规范。它以结构化格式定义概念、其属性和它们之间的关系。本体论通过提供通用词汇和对领域的理解来实现知识共享、重用和自动推理。",
    diagram: "",
    terms: ["knowledge_graph", "artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 55,
    q: "What is a knowledge graph?",
    qChinese: "什么是知识图谱？",
    options: [
      "A) A bar chart displaying knowledge metrics",
      "B) A network of real-world entities and their relationships represented as nodes and edges",
      "C) A graph showing student test scores",
      "D) A flowchart of an algorithm"
    ],
    optionsChinese: [
      "A) 显示知识指标的条形图",
      "B) 将真实世界实体及其关系表示为节点和边的网络",
      "C) 显示学生测试分数的图表",
      "D) 算法的流程图"
    ],
    answer: 1,
    explanation: "A knowledge graph is a structured representation of real-world entities and the relationships between them, organized as a directed graph with nodes (entities) and edges (relationships). Google's Knowledge Graph, Wikidata, and DBpedia are prominent examples used for semantic search, question answering, and recommendation systems.",
    explanationChinese: "知识图谱是真实世界实体及其关系的结构化表示，组织为具有节点（实体）和边（关系）的有向图。谷歌知识图谱、Wikidata和DBpedia是用于语义搜索、问答和推荐系统的知名例子。",
    diagram: "",
    terms: ["knowledge_graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 56,
    q: "What is a semantic network?",
    qChinese: "什么是语义网络？",
    options: [
      "A) A social media platform for AI researchers",
      "B) A graph-based knowledge representation using nodes for concepts and edges for relationships",
      "C) A neural network trained on semantic data",
      "D) An internet protocol for knowledge sharing"
    ],
    optionsChinese: [
      "A) AI研究人员的社交媒体平台",
      "B) 使用节点表示概念和边表示关系的基于图的知识表示",
      "C) 在语义数据上训练的神经网络",
      "D) 知识共享的互联网协议"
    ],
    answer: 1,
    explanation: "A semantic network represents knowledge as a graph where nodes represent concepts or entities and labeled edges represent relationships between them. Relationships like 'is-a', 'has-a', and 'part-of' connect concepts hierarchically. Semantic networks were among the earliest knowledge representation methods used in AI systems.",
    explanationChinese: "语义网络将知识表示为图，其中节点代表概念或实体，带标签的边代表它们之间的关系。'是一种'、'有一个'和'是...的一部分'等关系以层次方式连接概念。语义网络是AI系统中使用的最早的知识表示方法之一。",
    diagram: "",
    terms: ["knowledge_graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 57,
    q: "What is a frame in knowledge representation?",
    qChinese: "知识表示中的框架是什么？",
    options: [
      "A) A video frame in computer vision",
      "B) A data structure with slots for attributes and values representing stereotypical situations",
      "C) A window frame in graphical user interfaces",
      "D) A unit of time in AI processing"
    ],
    optionsChinese: [
      "A) 计算机视觉中的视频帧",
      "B) 具有表示典型情况的属性和值的槽的数据结构",
      "C) 图形用户界面中的窗口框架",
      "D) AI处理中的时间单位"
    ],
    answer: 1,
    explanation: "Frames, proposed by Marvin Minsky in 1974, are data structures representing stereotypical situations. Each frame has slots containing attributes, default values, and constraints. Frames organize knowledge hierarchically with inheritance, allowing AI systems to represent complex real-world concepts with their typical properties and expected behaviors.",
    explanationChinese: "框架由马文·明斯基于1974年提出，是表示典型情况的数据结构。每个框架具有包含属性、默认值和约束的槽。框架以继承方式层次化地组织知识，使AI系统能够用其典型属性和预期行为表示复杂的现实世界概念。",
    diagram: "",
    terms: ["knowledge_graph", "artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 58,
    q: "What is the Closed World Assumption (CWA)?",
    qChinese: "什么是封闭世界假设（CWA）？",
    options: [
      "A) The world is a closed system with finite energy",
      "B) Any statement not known to be true is assumed to be false",
      "C) All knowledge can be expressed in propositional logic",
      "D) AI systems cannot learn new information"
    ],
    optionsChinese: [
      "A) 世界是一个具有有限能量的封闭系统",
      "B) 任何未知为真的陈述都被假定为假",
      "C) 所有知识都可以用命题逻辑表达",
      "D) AI系统无法学习新信息"
    ],
    answer: 1,
    explanation: "The Closed World Assumption states that any statement not known or derivable from the knowledge base is assumed to be false. This is commonly used in databases and logic programming like Prolog. It simplifies reasoning by not requiring explicit negative facts but can lead to incorrect conclusions when information is incomplete.",
    explanationChinese: "封闭世界假设指出，任何不被知识库已知或可从中推导的陈述都被假定为假。这常用于数据库和Prolog等逻辑编程中。它通过不需要显式否定事实来简化推理，但在信息不完整时可能导致不正确的结论。",
    diagram: "",
    terms: ["knowledge_graph", "artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 59,
    q: "What is an RDF triple?",
    qChinese: "什么是RDF三元组？",
    options: [
      "A) A three-layer neural network",
      "B) A statement of the form subject-predicate-object for representing knowledge",
      "C) Three related database tables",
      "D) A trio of AI algorithms working together"
    ],
    optionsChinese: [
      "A) 三层神经网络",
      "B) 以主语-谓语-宾语形式表示知识的陈述",
      "C) 三个相关的数据库表",
      "D) 三个协同工作的AI算法"
    ],
    answer: 1,
    explanation: "An RDF (Resource Description Framework) triple represents a statement as three components: subject, predicate, and object. For example, (Paris, isCapitalOf, France) states a relationship. RDF triples form the foundation of the Semantic Web and knowledge graphs, enabling machines to understand and process structured information.",
    explanationChinese: "RDF（资源描述框架）三元组将陈述表示为三个组件：主语、谓语和宾语。例如，（巴黎，是...的首都，法国）陈述了一种关系。RDF三元组构成了语义网和知识图谱的基础，使机器能够理解和处理结构化信息。",
    diagram: "",
    terms: ["knowledge_graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 60,
    q: "What is OWL in the context of knowledge representation?",
    qChinese: "在知识表示的上下文中，OWL是什么？",
    options: [
      "A) A nocturnal bird used as an AI mascot",
      "B) Web Ontology Language for defining and sharing ontologies",
      "C) Object-Weighted Learning algorithm",
      "D) Online Wisdom Library database"
    ],
    optionsChinese: [
      "A) 用作AI吉祥物的夜行鸟类",
      "B) 用于定义和共享本体论的Web本体语言",
      "C) 对象加权学习算法",
      "D) 在线智慧图书馆数据库"
    ],
    answer: 1,
    explanation: "OWL (Web Ontology Language) is a W3C standard for creating and publishing ontologies on the web. It provides formal semantics for defining classes, properties, and relationships with varying levels of expressivity (OWL Lite, DL, Full). OWL enables automated reasoning and interoperability between different knowledge systems.",
    explanationChinese: "OWL（Web本体语言）是用于在网上创建和发布本体论的W3C标准。它提供正式语义来定义类、属性和关系，具有不同的表达级别（OWL Lite、DL、Full）。OWL支持自动推理和不同知识系统之间的互操作性。",
    diagram: "",
    terms: ["knowledge_graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 61,
    q: "What is SPARQL used for?",
    qChinese: "SPARQL用于什么？",
    options: [
      "A) Programming embedded systems",
      "B) Querying and manipulating data stored in RDF format",
      "C) Compiling machine learning models",
      "D) Encrypting knowledge bases"
    ],
    optionsChinese: [
      "A) 编程嵌入式系统",
      "B) 查询和操作以RDF格式存储的数据",
      "C) 编译机器学习模型",
      "D) 加密知识库"
    ],
    answer: 1,
    explanation: "SPARQL (SPARQL Protocol and RDF Query Language) is the standard query language for RDF data, similar to how SQL is used for relational databases. It allows users to write queries to extract, filter, and manipulate knowledge stored as RDF triples in knowledge graphs and semantic web applications.",
    explanationChinese: "SPARQL（SPARQL协议和RDF查询语言）是RDF数据的标准查询语言，类似于SQL用于关系数据库。它允许用户编写查询以提取、过滤和操作存储在知识图谱和语义网应用中的RDF三元组知识。",
    diagram: "",
    terms: ["knowledge_graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 62,
    q: "What is reasoning under uncertainty?",
    qChinese: "什么是不确定性推理？",
    options: [
      "A) Reasoning that always produces certain results",
      "B) Making logical inferences when information is incomplete or uncertain",
      "C) Guessing randomly when unsure",
      "D) Avoiding decisions until all facts are known"
    ],
    optionsChinese: [
      "A) 总是产生确定结果的推理",
      "B) 当信息不完整或不确定时进行逻辑推断",
      "C) 不确定时随机猜测",
      "D) 在所有事实已知之前避免决策"
    ],
    answer: 1,
    explanation: "Reasoning under uncertainty involves making decisions and drawing conclusions when available information is incomplete, ambiguous, or probabilistic. Techniques include Bayesian networks, fuzzy logic, Dempster-Shafer theory, and probabilistic reasoning. This capability is essential for real-world AI applications where perfect information is rarely available.",
    explanationChinese: "不确定性推理涉及在可用信息不完整、模糊或概率性时做出决策和得出结论。技术包括贝叶斯网络、模糊逻辑、Dempster-Shafer理论和概率推理。这种能力对于完美信息很少可用的现实世界AI应用至关重要。",
    diagram: "",
    terms: ["knowledge_graph", "artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 63,
    q: "What is a Bayesian Network?",
    qChinese: "什么是贝叶斯网络？",
    options: [
      "A) A social network for statisticians",
      "B) A probabilistic graphical model representing variables and their conditional dependencies",
      "C) A type of computer network protocol",
      "D) A neural network trained using Bayes' theorem"
    ],
    optionsChinese: [
      "A) 统计学家的社交网络",
      "B) 表示变量及其条件依赖关系的概率图模型",
      "C) 一种计算机网络协议",
      "D) 使用贝叶斯定理训练的神经网络"
    ],
    answer: 1,
    explanation: "A Bayesian Network is a directed acyclic graph where nodes represent random variables and edges represent conditional dependencies. Each node has a conditional probability table quantifying the effect of parent variables. They enable efficient probabilistic inference and are widely used in medical diagnosis and risk assessment.",
    explanationChinese: "贝叶斯网络是一个有向无环图，其中节点代表随机变量，边代表条件依赖关系。每个节点都有一个条件概率表量化父变量的影响。它们支持高效的概率推理，广泛用于医学诊断和风险评估。",
    diagram: "",
    terms: ["knowledge_graph", "artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 64,
    q: "What is forward chaining in rule-based systems?",
    qChinese: "基于规则的系统中的前向链接是什么？",
    options: [
      "A) Reasoning from goals backward to find supporting facts",
      "B) Reasoning from known facts forward to derive new conclusions",
      "C) Linking database records sequentially",
      "D) Connecting blockchain nodes in order"
    ],
    optionsChinese: [
      "A) 从目标向后推理以找到支持事实",
      "B) 从已知事实向前推理以得出新结论",
      "C) 按顺序链接数据库记录",
      "D) 按顺序连接区块链节点"
    ],
    answer: 1,
    explanation: "Forward chaining is a data-driven reasoning strategy that starts with known facts and applies inference rules to derive new facts until a goal is reached. It begins with available data and works forward through rules. This approach is used in production systems and is effective when many inputs lead to few conclusions.",
    explanationChinese: "前向链接是一种数据驱动的推理策略，从已知事实开始，应用推理规则推导新事实直到达到目标。它从可用数据开始，通过规则向前推进。这种方法用于产生式系统，在多个输入导致少量结论时非常有效。",
    diagram: "",
    terms: ["knowledge_graph", "artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 65,
    q: "What is backward chaining?",
    qChinese: "什么是后向链接？",
    options: [
      "A) Reasoning from facts to random conclusions",
      "B) Starting from a goal and working backward to find supporting facts",
      "C) Reversing the order of a linked list",
      "D) Undoing the last inference step"
    ],
    optionsChinese: [
      "A) 从事实到随机结论的推理",
      "B) 从目标开始向后工作以找到支持事实",
      "C) 反转链表的顺序",
      "D) 撤消最后的推理步骤"
    ],
    answer: 1,
    explanation: "Backward chaining is a goal-driven reasoning strategy that starts with a hypothesis or goal and works backward to find facts that support it. The system checks if the goal matches a known fact; if not, it finds rules whose conclusions match the goal and recursively tries to prove their premises.",
    explanationChinese: "后向链接是一种目标驱动的推理策略，从假设或目标开始向后工作以找到支持它的事实。系统检查目标是否与已知事实匹配；如果不匹配，它会找到结论与目标匹配的规则，并递归地尝试证明其前提。",
    diagram: "",
    terms: ["knowledge_graph", "artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 66,
    q: "What is the Open World Assumption (OWA)?",
    qChinese: "什么是开放世界假设（OWA）？",
    options: [
      "A) All possible information is already contained in the knowledge base",
      "B) The absence of information does not imply its falsity",
      "C) The world is an open system with infinite resources",
      "D) Knowledge bases must always be publicly accessible"
    ],
    optionsChinese: [
      "A) 所有可能的信息已经包含在知识库中",
      "B) 信息的缺失并不意味着其虚假",
      "C) 世界是一个拥有无限资源的开放系统",
      "D) 知识库必须始终公开可访问"
    ],
    answer: 1,
    explanation: "The Open World Assumption states that the truth of a statement is independent of whether it is known to be true. Unlike the Closed World Assumption, absence of information does not mean it is false. OWA is used in the Semantic Web and OWL ontologies, reflecting that knowledge bases are inherently incomplete.",
    explanationChinese: "开放世界假设指出，陈述的真实性与其是否已知为真无关。与封闭世界假设不同，信息的缺失并不意味着它是假的。OWA用于语义网和OWL本体论中，反映知识库本质上是不完整的。",
    diagram: "",
    terms: ["knowledge_graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 67,
    q: "What is knowledge graph embedding?",
    qChinese: "什么是知识图谱嵌入？",
    options: [
      "A) Physically embedding chips into knowledge systems",
      "B) Representing entities and relations as continuous vectors in low-dimensional space",
      "C) Inserting new nodes into a graph database",
      "D) Compressing knowledge graphs for storage"
    ],
    optionsChinese: [
      "A) 将芯片物理嵌入知识系统",
      "B) 将实体和关系表示为低维空间中的连续向量",
      "C) 在图数据库中插入新节点",
      "D) 压缩知识图谱以便存储"
    ],
    answer: 1,
    explanation: "Knowledge graph embedding maps entities and relations from a knowledge graph into continuous vector spaces. Methods like TransE, TransR, and ComplEx learn low-dimensional representations that preserve the graph's structural information. These embeddings enable link prediction, entity classification, and integration with deep learning models.",
    explanationChinese: "知识图谱嵌入将知识图谱中的实体和关系映射到连续向量空间。TransE、TransR和ComplEx等方法学习保留图结构信息的低维表示。这些嵌入支持链接预测、实体分类以及与深度学习模型的集成。",
    diagram: "",
    terms: ["knowledge_graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 68,
    q: "What is description logic?",
    qChinese: "什么是描述逻辑？",
    options: [
      "A) Logic for describing user interfaces",
      "B) A family of formal knowledge representation languages for ontologies",
      "C) A method of describing algorithms in pseudocode",
      "D) Logic used exclusively in natural language processing"
    ],
    optionsChinese: [
      "A) 描述用户界面的逻辑",
      "B) 用于本体论的一族形式化知识表示语言",
      "C) 用伪代码描述算法的方法",
      "D) 专门用于自然语言处理的逻辑"
    ],
    answer: 1,
    explanation: "Description logics are a family of formal knowledge representation languages that provide the theoretical foundation for OWL ontologies. They balance expressivity with decidability, allowing automated reasoning about concepts, roles, and individuals. Description logics define terminological knowledge (TBox) and assertional knowledge (ABox) for structured ontological reasoning.",
    explanationChinese: "描述逻辑是一族形式化知识表示语言，为OWL本体论提供理论基础。它们在表达性和可判定性之间取得平衡，允许对概念、角色和个体进行自动推理。描述逻辑定义术语知识（TBox）和断言知识（ABox）用于结构化本体论推理。",
    diagram: "",
    terms: ["knowledge_graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 69,
    q: "What is fuzzy logic?",
    qChinese: "什么是模糊逻辑？",
    options: [
      "A) Logic that is poorly defined and imprecise",
      "B) Logic that handles degrees of truth rather than strict true/false values",
      "C) Logic used only in quantum computing",
      "D) Logic that produces random outputs"
    ],
    optionsChinese: [
      "A) 定义不清且不精确的逻辑",
      "B) 处理真值程度而非严格真/假值的逻辑",
      "C) 仅用于量子计算的逻辑",
      "D) 产生随机输出的逻辑"
    ],
    answer: 1,
    explanation: "Fuzzy logic, introduced by Lotfi Zadeh in 1965, extends classical logic by allowing truth values between 0 and 1 rather than strict true or false. It handles imprecise and vague information naturally. Fuzzy logic is widely used in control systems, appliances, and decision-making where inputs are inherently imprecise or gradual.",
    explanationChinese: "模糊逻辑由Lotfi Zadeh于1965年提出，通过允许0和1之间的真值而非严格的真或假来扩展经典逻辑。它自然地处理不精确和模糊的信息。模糊逻辑广泛用于控制系统、家电和输入本质上不精确或渐进的决策中。",
    diagram: "",
    terms: ["knowledge_graph", "artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 70,
    q: "What is the difference between monotonic and non-monotonic reasoning?",
    qChinese: "单调推理和非单调推理有什么区别？",
    options: [
      "A) Monotonic is faster; non-monotonic is slower",
      "B) In monotonic reasoning, adding information never invalidates existing conclusions",
      "C) Non-monotonic reasoning cannot handle new information",
      "D) They are identical in practice"
    ],
    optionsChinese: [
      "A) 单调更快；非单调更慢",
      "B) 在单调推理中，添加信息永远不会使现有结论无效",
      "C) 非单调推理无法处理新信息",
      "D) 它们在实践中完全相同"
    ],
    answer: 1,
    explanation: "In monotonic reasoning, once a conclusion is derived, it remains valid even when new information is added. Non-monotonic reasoning allows conclusions to be retracted when new evidence contradicts them. Most real-world reasoning is non-monotonic, as we often revise beliefs when we learn new facts that challenge prior assumptions.",
    explanationChinese: "在单调推理中，一旦得出结论，即使添加新信息，结论仍然有效。非单调推理允许在新证据矛盾时撤回结论。大多数现实世界的推理是非单调的，因为当我们学到挑战先前假设的新事实时，我们经常修改信念。",
    diagram: "",
    terms: ["knowledge_graph", "artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 71,
    q: "What is a knowledge base?",
    qChinese: "什么是知识库？",
    options: [
      "A) A physical library of books",
      "B) A structured collection of facts, rules, and relationships used for reasoning",
      "C) A random collection of data files",
      "D) A database without any query capability"
    ],
    optionsChinese: [
      "A) 实体书籍图书馆",
      "B) 用于推理的事实、规则和关系的结构化集合",
      "C) 数据文件的随机集合",
      "D) 没有查询能力的数据库"
    ],
    answer: 1,
    explanation: "A knowledge base is a structured repository of information that includes facts, rules, relationships, and heuristics used by AI systems for reasoning and problem-solving. Unlike simple databases, knowledge bases support inference mechanisms that can derive new knowledge from existing information through logical deduction and pattern matching.",
    explanationChinese: "知识库是一个结构化的信息存储库，包含AI系统用于推理和问题解决的事实、规则、关系和启发式。与简单数据库不同，知识库支持推理机制，可以通过逻辑推导和模式匹配从现有信息中得出新知识。",
    diagram: "",
    terms: ["knowledge_graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 72,
    q: "What is the role of an inference engine?",
    qChinese: "推理引擎的作用是什么？",
    options: [
      "A) To store data in a database",
      "B) To apply logical rules to the knowledge base to derive new conclusions",
      "C) To render graphical user interfaces",
      "D) To compile source code into machine code"
    ],
    optionsChinese: [
      "A) 在数据库中存储数据",
      "B) 将逻辑规则应用于知识库以推导新结论",
      "C) 渲染图形用户界面",
      "D) 将源代码编译为机器代码"
    ],
    answer: 1,
    explanation: "An inference engine is the component of an expert system or knowledge-based system that applies logical rules to the knowledge base to derive new information or conclusions. It implements reasoning strategies such as forward chaining and backward chaining to systematically process rules and facts to answer queries.",
    explanationChinese: "推理引擎是专家系统或基于知识的系统的组件，将逻辑规则应用于知识库以推导新信息或结论。它实现前向链接和后向链接等推理策略，系统地处理规则和事实以回答查询。",
    diagram: "",
    terms: ["knowledge_graph", "artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 73,
    q: "What is entity resolution in knowledge graphs?",
    qChinese: "知识图谱中的实体解析是什么？",
    options: [
      "A) Increasing the resolution of entity images",
      "B) Determining when different references refer to the same real-world entity",
      "C) Deleting duplicate entities from a database",
      "D) Resolving conflicts between AI agents"
    ],
    optionsChinese: [
      "A) 增加实体图像的分辨率",
      "B) 确定不同引用是否指向同一真实世界实体",
      "C) 从数据库中删除重复实体",
      "D) 解决AI智能体之间的冲突"
    ],
    answer: 1,
    explanation: "Entity resolution is the process of determining whether different references or descriptions in a knowledge graph refer to the same real-world entity. Also called record linkage or deduplication, it handles variations in names, descriptions, and identifiers to create a unified and consistent knowledge representation across data sources.",
    explanationChinese: "实体解析是确定知识图谱中不同引用或描述是否指向同一真实世界实体的过程。也称为记录链接或去重，它处理名称、描述和标识符的变化，以在数据源之间创建统一和一致的知识表示。",
    diagram: "",
    terms: ["knowledge_graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 74,
    q: "What is the Semantic Web?",
    qChinese: "什么是语义网？",
    options: [
      "A) A faster version of the internet",
      "B) An extension of the web where data is given well-defined meaning for machine understanding",
      "C) A web browser for semantic search",
      "D) A social network for researchers"
    ],
    optionsChinese: [
      "A) 更快版本的互联网",
      "B) 网络的扩展，数据被赋予明确定义的含义以供机器理解",
      "C) 用于语义搜索的网络浏览器",
      "D) 研究人员的社交网络"
    ],
    answer: 1,
    explanation: "The Semantic Web, envisioned by Tim Berners-Lee, extends the current web by adding machine-readable metadata and standards (RDF, OWL, SPARQL) that give data well-defined meaning. This enables automated agents to understand, share, and reason about web content, facilitating intelligent information integration and discovery.",
    explanationChinese: "语义网由蒂姆·伯纳斯-李设想，通过添加机器可读的元数据和标准（RDF、OWL、SPARQL）来扩展当前网络，赋予数据明确定义的含义。这使自动化代理能够理解、共享和推理网络内容，促进智能信息集成和发现。",
    diagram: "",
    terms: ["knowledge_graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 75,
    q: "What is link prediction in knowledge graphs?",
    qChinese: "知识图谱中的链接预测是什么？",
    options: [
      "A) Predicting which web links users will click",
      "B) Predicting missing relationships between entities in a knowledge graph",
      "C) Creating hyperlinks between web pages automatically",
      "D) Forecasting network connection failures"
    ],
    optionsChinese: [
      "A) 预测用户将点击哪些网页链接",
      "B) 预测知识图谱中实体之间缺失的关系",
      "C) 自动创建网页之间的超链接",
      "D) 预测网络连接故障"
    ],
    answer: 1,
    explanation: "Link prediction aims to predict missing or future relationships between entities in a knowledge graph. Using techniques like knowledge graph embeddings, graph neural networks, and rule-based methods, it can discover hidden connections. This is crucial for knowledge graph completion, recommendation systems, and drug discovery applications.",
    explanationChinese: "链接预测旨在预测知识图谱中实体之间缺失或未来的关系。使用知识图谱嵌入、图神经网络和基于规则的方法等技术，它可以发现隐藏的连接。这对知识图谱补全、推荐系统和药物发现应用至关重要。",
    diagram: "",
    terms: ["knowledge_graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 76,
    q: "What is reinforcement learning (RL)?",
    qChinese: "什么是强化学习（RL）？",
    options: [
      "A) Learning from labeled training data",
      "B) Learning through trial and error by receiving rewards or penalties",
      "C) Learning by clustering similar data points",
      "D) Learning by copying human demonstrations exactly"
    ],
    optionsChinese: [
      "A) 从标记的训练数据中学习",
      "B) 通过接收奖励或惩罚进行试错学习",
      "C) 通过聚类相似数据点学习",
      "D) 通过完全复制人类示范学习"
    ],
    answer: 1,
    explanation: "Reinforcement learning is a type of machine learning where an agent learns to make decisions by interacting with an environment. The agent receives rewards or penalties for its actions and learns to maximize cumulative reward over time. Unlike supervised learning, RL does not require labeled examples but learns from experience.",
    explanationChinese: "强化学习是一种机器学习类型，智能体通过与环境交互来学习做决策。智能体因其行为获得奖励或惩罚，并学习随时间最大化累积奖励。与监督学习不同，RL不需要标记示例而是从经验中学习。",
    diagram: "",
    terms: ["reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 77,
    q: "What is an agent in reinforcement learning?",
    qChinese: "强化学习中的智能体是什么？",
    options: [
      "A) A human supervisor monitoring the system",
      "B) The learner and decision-maker that interacts with the environment",
      "C) The dataset used for training",
      "D) The reward signal generator"
    ],
    optionsChinese: [
      "A) 监控系统的人类监督者",
      "B) 与环境交互的学习者和决策者",
      "C) 用于训练的数据集",
      "D) 奖励信号生成器"
    ],
    answer: 1,
    explanation: "In reinforcement learning, the agent is the entity that learns and makes decisions. It observes the current state of the environment, selects actions according to its policy, receives rewards, and updates its strategy accordingly. The agent's goal is to discover the optimal policy that maximizes long-term cumulative reward.",
    explanationChinese: "在强化学习中，智能体是学习和做决策的实体。它观察环境的当前状态，根据其策略选择动作，接收奖励，并相应地更新其策略。智能体的目标是发现最大化长期累积奖励的最优策略。",
    diagram: "",
    terms: ["reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 78,
    q: "What is a reward signal in RL?",
    qChinese: "RL中的奖励信号是什么？",
    options: [
      "A) The agent's internal memory",
      "B) A numerical value indicating how good or bad an action was",
      "C) The environment's visual display",
      "D) The probability of transitioning between states"
    ],
    optionsChinese: [
      "A) 智能体的内部记忆",
      "B) 表示一个动作好坏程度的数值",
      "C) 环境的视觉显示",
      "D) 状态之间转换的概率"
    ],
    answer: 1,
    explanation: "The reward signal is a scalar numerical feedback that the environment provides to the agent after each action. Positive rewards encourage behaviors; negative rewards (penalties) discourage them. The reward function defines the learning objective, and the agent's ultimate goal is to maximize the total accumulated reward over its lifetime.",
    explanationChinese: "奖励信号是环境在每次动作后提供给智能体的标量数值反馈。正奖励鼓励行为；负奖励（惩罚）阻止行为。奖励函数定义学习目标，智能体的最终目标是在其生命周期内最大化累积的总奖励。",
    diagram: "",
    terms: ["reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 79,
    q: "What is a policy in reinforcement learning?",
    qChinese: "强化学习中的策略是什么？",
    options: [
      "A) A company's rules about AI usage",
      "B) A mapping from states to actions that defines the agent's behavior",
      "C) The environment's transition dynamics",
      "D) The termination condition for training"
    ],
    optionsChinese: [
      "A) 公司关于AI使用的规则",
      "B) 从状态到动作的映射，定义智能体的行为",
      "C) 环境的转换动态",
      "D) 训练的终止条件"
    ],
    answer: 1,
    explanation: "A policy defines the agent's behavior by mapping states to actions. It can be deterministic (one specific action per state) or stochastic (probability distribution over actions). The goal of RL is to find the optimal policy that maximizes expected cumulative reward. Policies can be represented as lookup tables or neural networks.",
    explanationChinese: "策略通过将状态映射到动作来定义智能体的行为。它可以是确定性的（每个状态一个特定动作）或随机的（动作的概率分布）。RL的目标是找到最大化期望累积奖励的最优策略。策略可以表示为查找表或神经网络。",
    diagram: "",
    terms: ["reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 80,
    q: "What is the discount factor (gamma) in RL?",
    qChinese: "RL中的折扣因子（gamma）是什么？",
    options: [
      "A) A factor that increases rewards over time",
      "B) A value between 0 and 1 that determines the importance of future rewards",
      "C) The rate at which the agent explores new states",
      "D) The probability of receiving a reward"
    ],
    optionsChinese: [
      "A) 随时间增加奖励的因子",
      "B) 0和1之间的值，决定未来奖励的重要性",
      "C) 智能体探索新状态的速率",
      "D) 获得奖励的概率"
    ],
    answer: 1,
    explanation: "The discount factor gamma (between 0 and 1) determines how much the agent values future rewards compared to immediate ones. A gamma close to 0 makes the agent short-sighted, focusing on immediate rewards. A gamma close to 1 makes it far-sighted, considering long-term consequences of its actions equally important.",
    explanationChinese: "折扣因子gamma（0到1之间）决定智能体对未来奖励与即时奖励的重视程度。接近0的gamma使智能体短视，关注即时奖励。接近1的gamma使其具有远见，认为其行为的长期后果同样重要。",
    diagram: "",
    terms: ["reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 81,
    q: "What is Q-learning?",
    qChinese: "什么是Q学习？",
    options: [
      "A) A supervised learning algorithm using Q-statistics",
      "B) A model-free RL algorithm that learns the value of state-action pairs",
      "C) A quantum computing algorithm for learning",
      "D) A quality assurance method for ML models"
    ],
    optionsChinese: [
      "A) 使用Q统计的监督学习算法",
      "B) 学习状态-动作对值的无模型RL算法",
      "C) 用于学习的量子计算算法",
      "D) ML模型的质量保证方法"
    ],
    answer: 1,
    explanation: "Q-learning is a model-free, off-policy reinforcement learning algorithm that learns the value (Q-value) of taking an action in a given state. It updates Q-values using the Bellman equation: Q(s,a) = Q(s,a) + alpha * [r + gamma * max Q(s',a') - Q(s,a)]. It converges to optimal values with sufficient exploration.",
    explanationChinese: "Q学习是一种无模型、离策略的强化学习算法，学习在给定状态中采取动作的值（Q值）。它使用贝尔曼方程更新Q值：Q(s,a) = Q(s,a) + alpha * [r + gamma * max Q(s',a') - Q(s,a)]。在充分探索下收敛到最优值。",
    diagram: "",
    terms: ["reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 82,
    q: "What is the Bellman equation?",
    qChinese: "什么是贝尔曼方程？",
    options: [
      "A) An equation for computing neural network gradients",
      "B) A recursive equation that decomposes the value of a state into immediate reward and future value",
      "C) An equation for sorting data efficiently",
      "D) A mathematical formula for image recognition"
    ],
    optionsChinese: [
      "A) 用于计算神经网络梯度的方程",
      "B) 将状态值分解为即时奖励和未来值的递归方程",
      "C) 用于高效排序数据的方程",
      "D) 用于图像识别的数学公式"
    ],
    answer: 1,
    explanation: "The Bellman equation expresses the value of a state as the sum of the immediate reward and the discounted value of the next state. It provides the foundation for dynamic programming and RL algorithms. The optimal Bellman equation defines the maximum expected return achievable from any state under the optimal policy.",
    explanationChinese: "贝尔曼方程将状态的值表示为即时奖励和下一状态折扣值的总和。它为动态规划和RL算法提供基础。最优贝尔曼方程定义了在最优策略下从任何状态可实现的最大期望回报。",
    diagram: "",
    terms: ["reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 83,
    q: "What is the difference between model-based and model-free RL?",
    qChinese: "基于模型和无模型的RL有什么区别？",
    options: [
      "A) Model-based uses larger datasets",
      "B) Model-based learns a model of the environment; model-free learns directly from experience",
      "C) Model-free is always more accurate",
      "D) There is no practical difference"
    ],
    optionsChinese: [
      "A) 基于模型使用更大的数据集",
      "B) 基于模型学习环境模型；无模型直接从经验中学习",
      "C) 无模型总是更准确",
      "D) 没有实际区别"
    ],
    answer: 1,
    explanation: "Model-based RL learns a model of the environment's dynamics (transition and reward functions) and uses it for planning. Model-free RL learns values or policies directly from interactions without building an explicit model. Model-based methods are more sample-efficient but computationally expensive; model-free methods are simpler but require more data.",
    explanationChinese: "基于模型的RL学习环境动态模型（转换和奖励函数）并用它进行规划。无模型RL直接从交互中学习值或策略，而不建立显式模型。基于模型的方法样本效率更高但计算成本高；无模型方法更简单但需要更多数据。",
    diagram: "",
    terms: ["reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 84,
    q: "What is the epsilon-greedy strategy?",
    qChinese: "什么是epsilon-贪婪策略？",
    options: [
      "A) Always selecting the action with the highest known value",
      "B) Selecting the best known action most of the time but exploring randomly with probability epsilon",
      "C) Randomly selecting actions at all times",
      "D) Gradually increasing the action space over time"
    ],
    optionsChinese: [
      "A) 总是选择已知值最高的动作",
      "B) 大多数时候选择已知最佳动作但以概率epsilon随机探索",
      "C) 始终随机选择动作",
      "D) 随时间逐渐增加动作空间"
    ],
    answer: 1,
    explanation: "The epsilon-greedy strategy balances exploration and exploitation in RL. With probability 1-epsilon, the agent selects the action with the highest estimated value (exploitation). With probability epsilon, it selects a random action (exploration). Epsilon is often decayed over time, shifting from exploration to exploitation as learning progresses.",
    explanationChinese: "epsilon-贪婪策略在RL中平衡探索和利用。以1-epsilon的概率，智能体选择估计值最高的动作（利用）。以epsilon的概率，它选择随机动作（探索）。epsilon通常随时间衰减，随着学习进展从探索转向利用。",
    diagram: "",
    terms: ["reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 85,
    q: "What is a Markov Decision Process (MDP)?",
    qChinese: "什么是马尔可夫决策过程（MDP）？",
    options: [
      "A) A process for marketing decisions",
      "B) A mathematical framework for sequential decision-making with states, actions, transitions, and rewards",
      "C) A database management process",
      "D) A method for parallel processing"
    ],
    optionsChinese: [
      "A) 营销决策的过程",
      "B) 具有状态、动作、转换和奖励的序列决策数学框架",
      "C) 数据库管理过程",
      "D) 并行处理的方法"
    ],
    answer: 1,
    explanation: "A Markov Decision Process is a mathematical framework for modeling sequential decision-making problems. It consists of states, actions, transition probabilities, and rewards. The Markov property states that the future depends only on the current state, not on history. MDPs provide the formal foundation for most reinforcement learning algorithms.",
    explanationChinese: "马尔可夫决策过程是用于建模序列决策问题的数学框架。它由状态、动作、转换概率和奖励组成。马尔可夫性质指出未来仅取决于当前状态，而不取决于历史。MDP为大多数强化学习算法提供正式基础。",
    diagram: "",
    terms: ["reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 86,
    q: "What is temporal difference (TD) learning?",
    qChinese: "什么是时间差分（TD）学习？",
    options: [
      "A) Learning about time management",
      "B) A method that updates value estimates based on the difference between consecutive predictions",
      "C) Learning that only occurs at fixed time intervals",
      "D) A technique for processing time-series data"
    ],
    optionsChinese: [
      "A) 关于时间管理的学习",
      "B) 根据连续预测之间的差异更新值估计的方法",
      "C) 仅在固定时间间隔发生的学习",
      "D) 处理时间序列数据的技术"
    ],
    answer: 1,
    explanation: "Temporal difference learning combines ideas from Monte Carlo methods and dynamic programming. It updates value estimates based on the difference between consecutive predictions without waiting for a final outcome. TD learning bootstraps by using current estimates to update previous ones, enabling online, incremental learning from incomplete episodes.",
    explanationChinese: "时间差分学习结合了蒙特卡洛方法和动态规划的思想。它根据连续预测之间的差异更新值估计，而不等待最终结果。TD学习通过使用当前估计更新先前估计来进行自举，支持从不完整情节中进行在线增量学习。",
    diagram: "",
    terms: ["reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 87,
    q: "What is SARSA in RL?",
    qChinese: "RL中的SARSA是什么？",
    options: [
      "A) A type of neural network",
      "B) An on-policy TD control algorithm using State-Action-Reward-State-Action tuples",
      "C) A search algorithm for reinforcement learning",
      "D) A reward shaping technique"
    ],
    optionsChinese: [
      "A) 一种神经网络",
      "B) 使用状态-动作-奖励-状态-动作元组的在策略TD控制算法",
      "C) 强化学习的搜索算法",
      "D) 奖励塑造技术"
    ],
    answer: 1,
    explanation: "SARSA (State-Action-Reward-State-Action) is an on-policy temporal difference control algorithm. Unlike Q-learning, which uses the maximum Q-value of the next state, SARSA updates using the actual action taken by the current policy. This makes SARSA more conservative, as it accounts for the exploration behavior of the agent.",
    explanationChinese: "SARSA（状态-动作-奖励-状态-动作）是一种在策略时间差分控制算法。与使用下一状态最大Q值的Q学习不同，SARSA使用当前策略实际采取的动作进行更新。这使SARSA更保守，因为它考虑了智能体的探索行为。",
    diagram: "",
    terms: ["reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 88,
    q: "What is Deep Q-Network (DQN)?",
    qChinese: "什么是深度Q网络（DQN）？",
    options: [
      "A) A shallow neural network for classification",
      "B) A combination of Q-learning with deep neural networks to handle large state spaces",
      "C) A database query network",
      "D) A quantized deep learning model"
    ],
    optionsChinese: [
      "A) 用于分类的浅层神经网络",
      "B) 将Q学习与深度神经网络结合以处理大型状态空间",
      "C) 数据库查询网络",
      "D) 量化的深度学习模型"
    ],
    answer: 1,
    explanation: "Deep Q-Network, introduced by DeepMind in 2015, combines Q-learning with deep neural networks to handle high-dimensional state spaces like raw pixel inputs. Key innovations include experience replay and target networks for stable training. DQN achieved human-level performance on many Atari games, demonstrating deep RL's potential.",
    explanationChinese: "深度Q网络由DeepMind于2015年提出，将Q学习与深度神经网络结合以处理如原始像素输入等高维状态空间。关键创新包括经验回放和目标网络以实现稳定训练。DQN在许多Atari游戏上达到人类水平的表现，展示了深度RL的潜力。",
    diagram: "",
    terms: ["reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 89,
    q: "What is experience replay in DQN?",
    qChinese: "DQN中的经验回放是什么？",
    options: [
      "A) Replaying video recordings of past experiments",
      "B) Storing past experiences in a buffer and sampling random batches for training",
      "C) Repeating the same training episode multiple times",
      "D) Sharing experiences between different agents"
    ],
    optionsChinese: [
      "A) 回放过去实验的视频录像",
      "B) 将过去的经验存储在缓冲区中并抽样随机批次进行训练",
      "C) 多次重复相同的训练情节",
      "D) 在不同智能体之间共享经验"
    ],
    answer: 1,
    explanation: "Experience replay stores the agent's past experiences (state, action, reward, next state) in a replay buffer. During training, random mini-batches are sampled from this buffer, breaking correlations between consecutive experiences. This improves data efficiency and training stability by providing more independent and identically distributed training samples.",
    explanationChinese: "经验回放将智能体的过去经验（状态、动作、奖励、下一状态）存储在回放缓冲区中。训练期间，从该缓冲区中抽取随机小批量，打破连续经验之间的相关性。这通过提供更独立且同分布的训练样本来提高数据效率和训练稳定性。",
    diagram: "",
    terms: ["reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 90,
    q: "What is policy gradient in RL?",
    qChinese: "RL中的策略梯度是什么？",
    options: [
      "A) The gradient of the loss function in supervised learning",
      "B) A method that directly optimizes the policy by computing gradients of expected reward",
      "C) A technique for gradient descent in image processing",
      "D) The slope of the reward curve over time"
    ],
    optionsChinese: [
      "A) 监督学习中损失函数的梯度",
      "B) 通过计算期望奖励的梯度直接优化策略的方法",
      "C) 图像处理中的梯度下降技术",
      "D) 奖励曲线随时间的斜率"
    ],
    answer: 1,
    explanation: "Policy gradient methods directly optimize the policy parameters by computing the gradient of expected cumulative reward with respect to policy parameters. Unlike value-based methods, policy gradients can handle continuous action spaces and stochastic policies. The REINFORCE algorithm is the foundational policy gradient method using Monte Carlo returns.",
    explanationChinese: "策略梯度方法通过计算期望累积奖励相对于策略参数的梯度来直接优化策略参数。与基于值的方法不同，策略梯度可以处理连续动作空间和随机策略。REINFORCE算法是使用蒙特卡洛回报的基础策略梯度方法。",
    diagram: "",
    terms: ["reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 91,
    q: "What is the actor-critic architecture?",
    qChinese: "什么是演员-评论家架构？",
    options: [
      "A) A movie production AI system",
      "B) A hybrid approach combining a policy network (actor) with a value network (critic)",
      "C) Two competing neural networks",
      "D) An architecture for text generation only"
    ],
    optionsChinese: [
      "A) 电影制作AI系统",
      "B) 结合策略网络（演员）和值网络（评论家）的混合方法",
      "C) 两个竞争的神经网络",
      "D) 仅用于文本生成的架构"
    ],
    answer: 1,
    explanation: "Actor-critic methods combine policy-based (actor) and value-based (critic) approaches. The actor selects actions based on its policy, while the critic evaluates those actions by estimating the value function. The critic's feedback reduces the variance of policy gradient estimates, leading to more stable and efficient learning than pure policy gradients.",
    explanationChinese: "演员-评论家方法结合了基于策略（演员）和基于值（评论家）的方法。演员根据其策略选择动作，而评论家通过估计值函数来评估这些动作。评论家的反馈减少了策略梯度估计的方差，比纯策略梯度方法带来更稳定和高效的学习。",
    diagram: "",
    terms: ["reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 92,
    q: "What is Proximal Policy Optimization (PPO)?",
    qChinese: "什么是近端策略优化（PPO）？",
    options: [
      "A) An optimization technique for database queries",
      "B) A policy gradient method that limits policy updates to a trust region for stability",
      "C) A method for optimizing proximity sensors",
      "D) A technique for compressing neural networks"
    ],
    optionsChinese: [
      "A) 数据库查询的优化技术",
      "B) 将策略更新限制在信任区域以保持稳定性的策略梯度方法",
      "C) 优化近距离传感器的方法",
      "D) 压缩神经网络的技术"
    ],
    answer: 1,
    explanation: "PPO, developed by OpenAI, is a policy gradient method that prevents large, destructive policy updates by clipping the probability ratio between new and old policies. It provides the stability benefits of trust region methods like TRPO while being simpler to implement. PPO has become a standard algorithm for many RL applications.",
    explanationChinese: "PPO由OpenAI开发，是一种策略梯度方法，通过裁剪新旧策略之间的概率比来防止大的破坏性策略更新。它提供了TRPO等信任区域方法的稳定性优势，同时实现更简单。PPO已成为许多RL应用的标准算法。",
    diagram: "",
    terms: ["reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 93,
    q: "What is the value function in RL?",
    qChinese: "RL中的值函数是什么？",
    options: [
      "A) A function that returns the monetary value of an action",
      "B) A function estimating the expected cumulative reward from a given state",
      "C) A function that counts the number of states visited",
      "D) A function that determines the learning rate"
    ],
    optionsChinese: [
      "A) 返回动作货币价值的函数",
      "B) 估计从给定状态开始的期望累积奖励的函数",
      "C) 计算已访问状态数量的函数",
      "D) 确定学习率的函数"
    ],
    answer: 1,
    explanation: "The value function V(s) estimates the expected total discounted reward an agent can obtain starting from state s and following a particular policy. It helps the agent evaluate how good it is to be in a particular state. The state-action value function Q(s,a) extends this to evaluate specific state-action pairs.",
    explanationChinese: "值函数V(s)估计智能体从状态s开始并遵循特定策略可以获得的期望总折扣奖励。它帮助智能体评估处于特定状态有多好。状态-动作值函数Q(s,a)将此扩展到评估特定的状态-动作对。",
    diagram: "",
    terms: ["reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 94,
    q: "What is reward shaping?",
    qChinese: "什么是奖励塑造？",
    options: [
      "A) Physically shaping reward tokens",
      "B) Adding intermediate rewards to guide the agent toward desired behavior faster",
      "C) Reducing the total reward an agent receives",
      "D) Randomizing rewards to prevent overfitting"
    ],
    optionsChinese: [
      "A) 物理塑造奖励令牌",
      "B) 添加中间奖励以更快地引导智能体走向期望行为",
      "C) 减少智能体获得的总奖励",
      "D) 随机化奖励以防止过拟合"
    ],
    answer: 1,
    explanation: "Reward shaping involves designing additional intermediate reward signals to guide the agent's learning process, making it faster to discover good behaviors. Properly designed shaping rewards provide hints without changing the optimal policy. Poor reward shaping can lead to unintended behaviors where the agent exploits the shaped rewards.",
    explanationChinese: "奖励塑造涉及设计额外的中间奖励信号以引导智能体的学习过程，使其更快地发现好的行为。正确设计的塑造奖励提供提示而不改变最优策略。糟糕的奖励塑造可能导致智能体利用塑造奖励的意外行为。",
    diagram: "",
    terms: ["reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 95,
    q: "What is multi-agent reinforcement learning (MARL)?",
    qChinese: "什么是多智能体强化学习（MARL）？",
    options: [
      "A) Training a single agent on multiple tasks",
      "B) Multiple agents learning simultaneously in a shared environment",
      "C) Using multiple GPUs for training one agent",
      "D) An agent with multiple reward signals"
    ],
    optionsChinese: [
      "A) 在多个任务上训练单个智能体",
      "B) 多个智能体在共享环境中同时学习",
      "C) 使用多个GPU训练一个智能体",
      "D) 具有多个奖励信号的智能体"
    ],
    answer: 1,
    explanation: "Multi-agent reinforcement learning involves multiple agents learning and interacting simultaneously in a shared environment. Agents may cooperate, compete, or have mixed interactions. MARL introduces challenges like non-stationarity, credit assignment, and communication. Applications include autonomous driving, game playing, and robotic team coordination.",
    explanationChinese: "多智能体强化学习涉及多个智能体在共享环境中同时学习和交互。智能体可以合作、竞争或进行混合交互。MARL引入了非平稳性、信用分配和通信等挑战。应用包括自动驾驶、游戏和机器人团队协调。",
    diagram: "",
    terms: ["reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 96,
    q: "What is inverse reinforcement learning (IRL)?",
    qChinese: "什么是逆强化学习（IRL）？",
    options: [
      "A) Learning to reverse actions taken by an agent",
      "B) Inferring the reward function from observed expert behavior",
      "C) Training an agent to minimize rewards",
      "D) Reversing the training process of an RL agent"
    ],
    optionsChinese: [
      "A) 学习逆转智能体采取的动作",
      "B) 从观察到的专家行为中推断奖励函数",
      "C) 训练智能体最小化奖励",
      "D) 逆转RL智能体的训练过程"
    ],
    answer: 1,
    explanation: "Inverse reinforcement learning recovers the reward function that an expert is implicitly optimizing by observing their behavior. Rather than specifying rewards manually, IRL infers what the expert values from demonstrations. This is useful when designing reward functions is difficult, such as in autonomous driving or robotic manipulation tasks.",
    explanationChinese: "逆强化学习通过观察专家的行为来恢复专家隐式优化的奖励函数。IRL不是手动指定奖励，而是从示范中推断专家重视什么。当设计奖励函数困难时，如在自动驾驶或机器人操作任务中，这非常有用。",
    diagram: "",
    terms: ["reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 97,
    q: "What is the credit assignment problem in RL?",
    qChinese: "RL中的信用分配问题是什么？",
    options: [
      "A) Assigning academic credit for AI courses",
      "B) Determining which actions in a sequence were responsible for the received reward",
      "C) Distributing computational resources among agents",
      "D) Crediting the correct algorithm for a solution"
    ],
    optionsChinese: [
      "A) 为AI课程分配学分",
      "B) 确定序列中哪些动作对获得的奖励负责",
      "C) 在智能体之间分配计算资源",
      "D) 将解决方案的功劳归于正确的算法"
    ],
    answer: 1,
    explanation: "The credit assignment problem asks how to distribute credit or blame for an outcome among the many actions that preceded it. In RL, rewards may be delayed, making it difficult to determine which earlier actions contributed to eventual success or failure. TD learning and eligibility traces help address this temporal credit assignment challenge.",
    explanationChinese: "信用分配问题询问如何将结果的功劳或责任分配给先前的许多动作。在RL中，奖励可能是延迟的，使得难以确定哪些早期动作导致了最终的成功或失败。TD学习和资格迹帮助解决这个时间信用分配挑战。",
    diagram: "",
    terms: ["reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 98,
    q: "What is a partially observable MDP (POMDP)?",
    qChinese: "什么是部分可观察MDP（POMDP）？",
    options: [
      "A) An MDP where all states are fully visible",
      "B) An MDP where the agent cannot directly observe the full state of the environment",
      "C) An MDP with partial reward signals",
      "D) An MDP that only works part of the time"
    ],
    optionsChinese: [
      "A) 所有状态完全可见的MDP",
      "B) 智能体无法直接观察环境完整状态的MDP",
      "C) 具有部分奖励信号的MDP",
      "D) 仅在部分时间工作的MDP"
    ],
    answer: 1,
    explanation: "A POMDP extends the MDP framework to situations where the agent cannot directly observe the full state of the environment. Instead, it receives observations that provide partial information about the true state. The agent must maintain a belief state representing probability distributions over possible states for decision-making under uncertainty.",
    explanationChinese: "POMDP将MDP框架扩展到智能体无法直接观察环境完整状态的情况。相反，它接收提供有关真实状态部分信息的观察。智能体必须维护一个信念状态，表示可能状态的概率分布，以便在不确定性下进行决策。",
    diagram: "",
    terms: ["reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 99,
    q: "What is hierarchical reinforcement learning?",
    qChinese: "什么是分层强化学习？",
    options: [
      "A) RL applied to organizational hierarchies",
      "B) Decomposing complex tasks into a hierarchy of subtasks for more efficient learning",
      "C) Training agents in a hierarchical network topology",
      "D) Ranking RL algorithms by performance"
    ],
    optionsChinese: [
      "A) 应用于组织层级的RL",
      "B) 将复杂任务分解为子任务层次以实现更高效的学习",
      "C) 在分层网络拓扑中训练智能体",
      "D) 按性能对RL算法排名"
    ],
    answer: 1,
    explanation: "Hierarchical RL decomposes complex tasks into hierarchies of simpler subtasks. High-level policies select subtasks while low-level policies execute them. This abstraction enables better exploration, faster learning, and transfer of learned subtasks. The Options framework and Feudal Networks are prominent hierarchical RL approaches for temporal abstraction.",
    explanationChinese: "分层RL将复杂任务分解为更简单子任务的层次结构。高级策略选择子任务，低级策略执行它们。这种抽象实现了更好的探索、更快的学习和已学子任务的迁移。选项框架和封建网络是用于时间抽象的著名分层RL方法。",
    diagram: "",
    terms: ["reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 100,
    q: "What is the difference between on-policy and off-policy learning?",
    qChinese: "在策略和离策略学习有什么区别？",
    options: [
      "A) On-policy is online; off-policy is offline",
      "B) On-policy learns about the policy being followed; off-policy learns about a different policy",
      "C) Off-policy is always more efficient",
      "D) On-policy uses neural networks; off-policy uses tables"
    ],
    optionsChinese: [
      "A) 在策略是在线的；离策略是离线的",
      "B) 在策略学习正在遵循的策略；离策略学习不同的策略",
      "C) 离策略总是更高效",
      "D) 在策略使用神经网络；离策略使用表格"
    ],
    answer: 1,
    explanation: "On-policy methods like SARSA learn about and improve the same policy that is used to make decisions. Off-policy methods like Q-learning learn about an optimal policy while following a different behavior policy for exploration. Off-policy methods can reuse past experience more effectively but may have higher variance in their estimates.",
    explanationChinese: "在策略方法如SARSA学习和改进用于做决策的同一策略。离策略方法如Q学习在遵循不同的行为策略进行探索的同时学习最优策略。离策略方法可以更有效地重用过去的经验，但其估计可能具有更高的方差。",
    diagram: "",
    terms: ["reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 101,
    q: "What was AlphaGo's key innovation?",
    qChinese: "AlphaGo的关键创新是什么？",
    options: [
      "A) Using only brute-force search to play Go",
      "B) Combining deep neural networks with Monte Carlo Tree Search",
      "C) Using a massive lookup table of Go moves",
      "D) Applying genetic algorithms to game playing"
    ],
    optionsChinese: [
      "A) 仅使用暴力搜索来下围棋",
      "B) 将深度神经网络与蒙特卡洛树搜索相结合",
      "C) 使用围棋走法的大型查找表",
      "D) 将遗传算法应用于游戏"
    ],
    answer: 1,
    explanation: "AlphaGo, developed by DeepMind, combined deep convolutional neural networks for position evaluation and move prediction with Monte Carlo Tree Search for lookahead planning. It was trained using supervised learning from human expert games and reinforcement learning through self-play, defeating world champion Lee Sedol in 2016.",
    explanationChinese: "由DeepMind开发的AlphaGo将用于位置评估和走法预测的深度卷积神经网络与用于前瞻规划的蒙特卡洛树搜索相结合。它通过人类专家棋局的监督学习和自我对弈的强化学习进行训练，于2016年击败世界冠军李世石。",
    diagram: "",
    terms: ["reinforcement_learning", "artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 102,
    q: "What is curiosity-driven exploration in RL?",
    qChinese: "RL中的好奇心驱动探索是什么？",
    options: [
      "A) Randomly exploring the environment without purpose",
      "B) Using prediction error as an intrinsic reward to encourage exploring novel states",
      "C) Asking the user which states to explore",
      "D) Exploring only states with high external rewards"
    ],
    optionsChinese: [
      "A) 无目的地随机探索环境",
      "B) 使用预测误差作为内在奖励来鼓励探索新状态",
      "C) 询问用户探索哪些状态",
      "D) 仅探索具有高外部奖励的状态"
    ],
    answer: 1,
    explanation: "Curiosity-driven exploration uses intrinsic motivation signals, typically the agent's prediction error about the environment, as additional rewards. States that are surprising or hard to predict receive higher intrinsic rewards, encouraging the agent to explore novel areas. This helps overcome sparse reward problems where external rewards are rare or delayed.",
    explanationChinese: "好奇心驱动探索使用内在动机信号（通常是智能体对环境的预测误差）作为额外奖励。令人惊讶或难以预测的状态获得更高的内在奖励，鼓励智能体探索新区域。这有助于克服外部奖励稀少或延迟的稀疏奖励问题。",
    diagram: "",
    terms: ["reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 103,
    q: "What is transfer learning in RL?",
    qChinese: "RL中的迁移学习是什么？",
    options: [
      "A) Transferring an agent between different computers",
      "B) Using knowledge gained from one task to improve learning on a different but related task",
      "C) Copying one agent's policy to another identical agent",
      "D) Moving data between training servers"
    ],
    optionsChinese: [
      "A) 在不同计算机之间转移智能体",
      "B) 使用从一个任务获得的知识来改善不同但相关任务的学习",
      "C) 将一个智能体的策略复制到另一个相同的智能体",
      "D) 在训练服务器之间移动数据"
    ],
    answer: 1,
    explanation: "Transfer learning in RL applies knowledge from a source task to accelerate learning in a target task. This can involve transferring learned representations, policies, or value functions. Effective transfer reduces sample complexity and training time, especially when the target task shares structural similarities with previously learned tasks.",
    explanationChinese: "RL中的迁移学习将源任务的知识应用于加速目标任务的学习。这可以涉及转移学习到的表示、策略或值函数。有效的迁移减少了样本复杂度和训练时间，特别是当目标任务与之前学习的任务共享结构相似性时。",
    diagram: "",
    terms: ["reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 104,
    q: "What is sim-to-real transfer in RL?",
    qChinese: "RL中的仿真到真实迁移是什么？",
    options: [
      "A) Converting simulated data to real data",
      "B) Transferring policies trained in simulation to work in the real world",
      "C) Simulating real-world physics in a virtual environment",
      "D) Using real-world data to improve simulation accuracy"
    ],
    optionsChinese: [
      "A) 将仿真数据转换为真实数据",
      "B) 将在仿真中训练的策略迁移到真实世界中工作",
      "C) 在虚拟环境中仿真真实世界物理",
      "D) 使用真实世界数据提高仿真精度"
    ],
    answer: 1,
    explanation: "Sim-to-real transfer involves training RL agents in simulated environments and deploying the learned policies in the real world. Simulation offers fast, safe, and cheap training, but the reality gap between simulation and real-world physics must be addressed through domain randomization, system identification, or progressive transfer techniques.",
    explanationChinese: "仿真到真实迁移涉及在仿真环境中训练RL智能体并将学到的策略部署到真实世界。仿真提供快速、安全和廉价的训练，但仿真和真实世界物理之间的现实差距必须通过领域随机化、系统识别或渐进迁移技术来解决。",
    diagram: "",
    terms: ["reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 105,
    q: "What is advantage function A(s,a) in RL?",
    qChinese: "RL中的优势函数A(s,a)是什么？",
    options: [
      "A) The total reward received in a state",
      "B) How much better an action is compared to the average action in that state",
      "C) The maximum possible reward in the environment",
      "D) The probability of reaching a goal state"
    ],
    optionsChinese: [
      "A) 在一个状态中获得的总奖励",
      "B) 一个动作比该状态中平均动作好多少",
      "C) 环境中可能的最大奖励",
      "D) 到达目标状态的概率"
    ],
    answer: 1,
    explanation: "The advantage function A(s,a) = Q(s,a) - V(s) measures how much better an action is compared to the average action in that state. It subtracts the state value from the action value, highlighting which actions are above or below average. Using advantages reduces variance in policy gradient methods, improving training stability.",
    explanationChinese: "优势函数A(s,a) = Q(s,a) - V(s)衡量一个动作比该状态中的平均动作好多少。它从动作值中减去状态值，突出哪些动作高于或低于平均水平。使用优势减少了策略梯度方法中的方差，提高了训练稳定性。",
    diagram: "",
    terms: ["reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 106,
    q: "What is imitation learning?",
    qChinese: "什么是模仿学习？",
    options: [
      "A) Copying another AI system's architecture",
      "B) Learning a policy by observing expert demonstrations",
      "C) Duplicating training data multiple times",
      "D) An agent that mimics the environment's behavior"
    ],
    optionsChinese: [
      "A) 复制另一个AI系统的架构",
      "B) 通过观察专家示范学习策略",
      "C) 多次复制训练数据",
      "D) 模仿环境行为的智能体"
    ],
    answer: 1,
    explanation: "Imitation learning trains agents by observing expert demonstrations rather than through explicit reward signals. Behavioral cloning directly maps observations to actions from demonstration data. More advanced methods like DAgger address distribution shift by iteratively querying the expert. Imitation learning is useful when reward engineering is difficult.",
    explanationChinese: "模仿学习通过观察专家示范而非通过显式奖励信号来训练智能体。行为克隆直接从示范数据中将观察映射到动作。DAgger等更高级的方法通过迭代查询专家来解决分布偏移问题。当奖励工程困难时，模仿学习很有用。",
    diagram: "",
    terms: ["reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 107,
    q: "What is the exploration-exploitation tradeoff in RL?",
    qChinese: "RL中的探索-利用权衡是什么？",
    options: [
      "A) Choosing between fast and slow training",
      "B) Balancing trying new actions versus using known rewarding actions",
      "C) Trading model accuracy for speed",
      "D) Switching between different environments"
    ],
    optionsChinese: [
      "A) 在快速和慢速训练之间选择",
      "B) 在尝试新动作和使用已知有奖励的动作之间取得平衡",
      "C) 以模型准确性换取速度",
      "D) 在不同环境之间切换"
    ],
    answer: 1,
    explanation: "The exploration-exploitation tradeoff is a fundamental challenge in RL. Exploitation means choosing actions known to yield high rewards based on current knowledge. Exploration means trying new actions to discover potentially better strategies. Balancing these is critical because too much of either leads to suboptimal performance and slow convergence.",
    explanationChinese: "探索-利用权衡是RL中的一个基本挑战。利用意味着根据当前知识选择已知能产生高奖励的动作。探索意味着尝试新动作以发现潜在更好的策略。平衡这两者至关重要，因为过多的任一方面都会导致次优性能和缓慢收敛。",
    diagram: "",
    terms: ["reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 108,
    q: "What is RLHF (Reinforcement Learning from Human Feedback)?",
    qChinese: "什么是RLHF（从人类反馈中强化学习）？",
    options: [
      "A) RL where humans play games against AI",
      "B) Training AI models using human preferences as the reward signal",
      "C) Humans manually programming RL policies",
      "D) RL applied to human resource management"
    ],
    optionsChinese: [
      "A) 人类与AI对弈的RL",
      "B) 使用人类偏好作为奖励信号训练AI模型",
      "C) 人类手动编程RL策略",
      "D) 应用于人力资源管理的RL"
    ],
    answer: 1,
    explanation: "RLHF uses human feedback to train a reward model, which then guides RL training of the AI system. Humans compare pairs of outputs and indicate preferences. This approach was crucial in training large language models like ChatGPT, aligning model behavior with human values and preferences when explicit reward functions are hard to define.",
    explanationChinese: "RLHF使用人类反馈训练奖励模型，然后指导AI系统的RL训练。人类比较输出对并指示偏好。这种方法在训练ChatGPT等大型语言模型中至关重要，当显式奖励函数难以定义时，使模型行为与人类价值观和偏好对齐。",
    diagram: "",
    terms: ["reinforcement_learning", "ai_ethics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 109,
    q: "What is a sparse reward problem in RL?",
    qChinese: "RL中的稀疏奖励问题是什么？",
    options: [
      "A) When rewards are too large to process",
      "B) When the agent receives reward signals very infrequently",
      "C) When rewards decrease over time",
      "D) When multiple agents compete for limited rewards"
    ],
    optionsChinese: [
      "A) 当奖励太大无法处理时",
      "B) 当智能体很少收到奖励信号时",
      "C) 当奖励随时间递减时",
      "D) 当多个智能体竞争有限的奖励时"
    ],
    answer: 1,
    explanation: "Sparse reward problems occur when the agent receives non-zero reward signals very infrequently, making it difficult to learn which actions lead to success. For example, in a maze, the agent might only receive a reward upon reaching the exit. Solutions include reward shaping, intrinsic motivation, curriculum learning, and hindsight experience replay.",
    explanationChinese: "稀疏奖励问题发生在智能体很少收到非零奖励信号时，使其难以学习哪些动作导致成功。例如，在迷宫中，智能体可能只在到达出口时才收到奖励。解决方案包括奖励塑造、内在动机、课程学习和事后经验回放。",
    diagram: "",
    terms: ["reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 110,
    q: "What is the multi-armed bandit problem?",
    qChinese: "什么是多臂赌博机问题？",
    options: [
      "A) A security problem with multiple hackers",
      "B) A simplified RL problem of choosing between options with unknown reward distributions",
      "C) A problem with too many arms in a robotic system",
      "D) A scheduling problem in manufacturing"
    ],
    optionsChinese: [
      "A) 涉及多个黑客的安全问题",
      "B) 在具有未知奖励分布的选项之间进行选择的简化RL问题",
      "C) 机器人系统中臂过多的问题",
      "D) 制造业中的调度问题"
    ],
    answer: 1,
    explanation: "The multi-armed bandit problem is a classic RL scenario where an agent must choose between multiple actions (arms) with unknown reward distributions. The goal is to maximize total reward while learning which arms are best. It captures the essence of the exploration-exploitation tradeoff and has applications in clinical trials and ad placement.",
    explanationChinese: "多臂赌博机问题是一个经典的RL场景，智能体必须在具有未知奖励分布的多个动作（臂）之间进行选择。目标是在学习哪些臂最好的同时最大化总奖励。它捕获了探索-利用权衡的本质，在临床试验和广告投放中有应用。",
    diagram: "",
    terms: ["reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
