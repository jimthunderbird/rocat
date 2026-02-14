const questionsAI = [
  {
    id: 1,
    q: "What is Artificial Intelligence (AI)?",
    qChinese: "什么是人工智能（AI）？",
    options: [
      "A) A branch of biology studying neural systems",
      "B) A hardware component in modern computers",
      "C) A programming language for data analysis",
      "D) The simulation of human intelligence by machines"
    ],
    optionsChinese: [
      "A) 研究神经系统的生物学分支",
      "B) 现代计算机中的硬件组件",
      "C) 用于数据分析的编程语言",
      "D) 机器对人类智能的模拟"
    ],
    answer: 3,
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
      "B) Claude Shannon",
      "C) Marvin Minsky",
      "D) John McCarthy"
    ],
    optionsChinese: [
      "A) 艾伦·图灵",
      "B) 克劳德·香农",
      "C) 马文·明斯基",
      "D) 约翰·麦卡锡"
    ],
    answer: 3,
    explanation: "John McCarthy coined the term 'Artificial Intelligence' in 1956 at the Dartmouth Conference, which is considered the founding event of AI as a field. He also developed the Lisp programming language, which became a primary tool for AI research and contributed significantly to the discipline's early growth.",
    explanationChinese: "约翰·麦卡锡于1956年在达特茅斯会议上创造了'人工智能'一词，该会议被认为是AI作为一个领域的奠基事件。他还开发了Lisp编程语言，该语言成为AI研究的主要工具，对该学科的早期发展做出了重大贡献。",
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
      "B) AI that surpasses all human capabilities",
      "C) AI that can solve any intellectual problem",
      "D) AI designed to perform a specific task"
    ],
    optionsChinese: [
      "A) 拥有人类水平意识的AI",
      "B) 超越所有人类能力的AI",
      "C) 能解决任何智力问题的AI",
      "D) 设计用于执行特定任务的AI"
    ],
    answer: 3,
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
      "B) AI that only processes natural language",
      "C) AI used exclusively in robotics",
      "D) AI that can understand and learn any intellectual task a human can"
    ],
    optionsChinese: [
      "A) 仅限于下棋的AI",
      "B) 仅处理自然语言的AI",
      "C) 专门用于机器人技术的AI",
      "D) 能够理解和学习人类能做的任何智力任务的AI"
    ],
    answer: 3,
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
      "B) AI that greatly surpasses the brightest human minds in every domain",
      "C) AI focused on scientific computing",
      "D) AI that can only solve mathematical problems"
    ],
    optionsChinese: [
      "A) 与普通人类智力相当的AI",
      "B) 在每个领域都大大超越最聪明人类的AI",
      "C) 专注于科学计算的AI",
      "D) 只能解决数学问题的AI"
    ],
    answer: 1,
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
      "A) 1956",
      "B) 1950",
      "C) 1943",
      "D) 1969"
    ],
    optionsChinese: [
      "A) 1956年",
      "B) 1950年",
      "C) 1943年",
      "D) 1969年"
    ],
    answer: 0,
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
    qChinese: "第一次'AI寒冬'主要是由什么引起的？",
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
      "C) ELIZA",
      "D) Deep Blue"
    ],
    optionsChinese: [
      "A) 沃森",
      "B) AlphaGo",
      "C) ELIZA",
      "D) 深蓝"
    ],
    answer: 3,
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
      "A) A computer program that emulates decision-making ability of a human expert",
      "B) A system that replaces all human experts permanently",
      "C) A database of expert opinions with no reasoning capability",
      "D) A neural network trained on expert data exclusively"
    ],
    optionsChinese: [
      "A) 模拟人类专家决策能力的计算机程序",
      "B) 永久替代所有人类专家的系统",
      "C) 没有推理能力的专家意见数据库",
      "D) 专门在专家数据上训练的神经网络"
    ],
    answer: 0,
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
      "B) They possess self-awareness and consciousness",
      "C) They respond only to current inputs without memory of past interactions",
      "D) They can predict future events with certainty"
    ],
    optionsChinese: [
      "A) 它们可以形成记忆并从过去的经验中学习",
      "B) 它们拥有自我意识和意识",
      "C) 它们仅对当前输入做出响应，没有过去交互的记忆",
      "D) 它们可以确定地预测未来事件"
    ],
    answer: 2,
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
    qChinese: "什么是'有限记忆'类型的AI？",
    options: [
      "A) AI that has no computational memory",
      "B) AI that stores unlimited data permanently",
      "C) AI that can use past data temporarily to make decisions",
      "D) AI that only processes images"
    ],
    optionsChinese: [
      "A) 没有计算记忆的AI",
      "B) 永久存储无限数据的AI",
      "C) 可以临时使用过去数据做决策的AI",
      "D) 仅处理图像的AI"
    ],
    answer: 2,
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
    qChinese: "'心智理论'AI类型指的是什么？",
    options: [
      "A) AI that understands emotions, beliefs, and intentions of others",
      "B) AI that can only perform mathematical theorems",
      "C) AI that theorizes about the physical universe",
      "D) AI designed exclusively for psychological therapy"
    ],
    optionsChinese: [
      "A) 理解他人情感、信念和意图的AI",
      "B) 只能执行数学定理的AI",
      "C) 对物理宇宙进行理论化的AI",
      "D) 专门为心理治疗设计的AI"
    ],
    answer: 0,
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
      "A) A spam email filter",
      "B) A robot with full human consciousness",
      "C) A machine that masters all human knowledge",
      "D) An AI that experiences emotions"
    ],
    optionsChinese: [
      "A) 垃圾邮件过滤器",
      "B) 具有完整人类意识的机器人",
      "C) 掌握所有人类知识的机器",
      "D) 能体验情感的AI"
    ],
    answer: 0,
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
      "B) It processes only numerical data",
      "C) It uses human-readable symbols and rules for reasoning",
      "D) It requires no programming whatsoever"
    ],
    optionsChinese: [
      "A) 完全依赖神经网络",
      "B) 仅处理数值数据",
      "C) 使用人类可读的符号和规则进行推理",
      "D) 完全不需要编程"
    ],
    answer: 2,
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
    qChinese: "'中文房间'论证是关于什么的？",
    options: [
      "A) That passing the Turing test does not prove true understanding",
      "B) How Chinese language processing works in AI",
      "C) A method for teaching AI Chinese characters",
      "D) The superiority of Chinese AI research"
    ],
    optionsChinese: [
      "A) 通过图灵测试并不能证明真正的理解",
      "B) AI中中文处理如何工作",
      "C) 教AI中文字符的方法",
      "D) 中国AI研究的优越性"
    ],
    answer: 0,
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
      "B) The problem of framing AI ethics questions",
      "C) The challenge of representing what does NOT change when an action occurs",
      "D) Limitations in video frame processing speed"
    ],
    optionsChinese: [
      "A) 快速渲染图像帧的困难",
      "B) 构建AI伦理问题的问题",
      "C) 表示动作发生时什么不会改变的挑战",
      "D) 视频帧处理速度的限制"
    ],
    answer: 2,
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
      "B) C++",
      "C) Lisp",
      "D) Fortran"
    ],
    optionsChinese: [
      "A) Java",
      "B) C++",
      "C) Lisp",
      "D) Fortran"
    ],
    answer: 2,
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
      "B) A single agent with multiple processors",
      "C) A system where multiple autonomous agents interact to solve problems",
      "D) A database system with multiple access points"
    ],
    optionsChinese: [
      "A) 具有多个用户界面的系统",
      "B) 具有多个处理器的单个智能体",
      "C) 多个自主智能体交互以解决问题的系统",
      "D) 具有多个访问点的数据库系统"
    ],
    answer: 2,
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
      "B) How to prevent symbol overflow in programs",
      "C) The difficulty of sorting symbols alphabetically",
      "D) How symbols in AI acquire meaning connected to the real world"
    ],
    optionsChinese: [
      "A) AI硬件中的电气接地问题",
      "B) 如何防止程序中的符号溢出",
      "C) 按字母顺序排序符号的困难",
      "D) AI中的符号如何获得与现实世界相连的意义"
    ],
    answer: 3,
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
      "B) An advanced reinforcement learning algorithm",
      "C) A type of computer monitor",
      "D) The simplest form of a neural network with a single layer"
    ],
    optionsChinese: [
      "A) 多层深度神经网络",
      "B) 一种高级强化学习算法",
      "C) 一种计算机显示器",
      "D) 具有单层的最简单的神经网络形式"
    ],
    answer: 3,
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
    qChinese: "'AI对齐'的概念是什么？",
    options: [
      "A) Aligning AI hardware components physically",
      "B) Formatting AI output in aligned columns",
      "C) Synchronizing multiple AI clocks",
      "D) Ensuring AI systems' goals and behaviors match human values and intentions"
    ],
    optionsChinese: [
      "A) 物理对齐AI硬件组件",
      "B) 以对齐的列格式化AI输出",
      "C) 同步多个AI时钟",
      "D) 确保AI系统的目标和行为与人类价值观和意图相匹配"
    ],
    answer: 3,
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
      "B) Neural networks cannot learn from visual data",
      "C) AI always outperforms humans in physical tasks",
      "D) High-level reasoning requires less computation than low-level sensorimotor skills"
    ],
    optionsChinese: [
      "A) 对AI来说简单计算比复杂计算更难",
      "B) 神经网络无法从视觉数据中学习",
      "C) AI在物理任务中总是优于人类",
      "D) 高级推理比低级感觉运动技能需要更少的计算"
    ],
    answer: 3,
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
      "B) The amount of RAM available to AI programs",
      "C) A set of nature-inspired computational approaches including neural nets, fuzzy logic, and evolutionary computing",
      "D) A measure of CPU performance benchmarks"
    ],
    optionsChinese: [
      "A) 计算机处理数据的速度",
      "B) AI程序可用的RAM数量",
      "C) 一组受自然启发的计算方法，包括神经网络、模糊逻辑和进化计算",
      "D) CPU性能基准的测量"
    ],
    answer: 2,
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
      "A) It catalyzed the deep learning revolution when AlexNet won in 2012",
      "B) It proved AI cannot recognize images",
      "C) It established the first AI programming language",
      "D) It demonstrated that traditional algorithms outperform neural networks"
    ],
    optionsChinese: [
      "A) 2012年AlexNet获胜时催化了深度学习革命",
      "B) 它证明了AI无法识别图像",
      "C) 它建立了第一种AI编程语言",
      "D) 它证明了传统算法优于神经网络"
    ],
    answer: 0,
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
      "A) A search that explores all nodes at the current depth before moving deeper",
      "B) A search that explores the deepest nodes first",
      "C) A search that uses heuristics to guide exploration",
      "D) A search that randomly selects nodes to explore"
    ],
    optionsChinese: [
      "A) 在移动到更深层之前探索当前深度所有节点的搜索",
      "B) 首先探索最深节点的搜索",
      "C) 使用启发式来指导探索的搜索",
      "D) 随机选择节点进行探索的搜索"
    ],
    answer: 0,
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
      "A) A search that expands the node with the lowest cumulative path cost",
      "B) A search that assigns equal cost to all nodes",
      "C) A search that only works with uniform graph structures",
      "D) A heuristic-based search algorithm"
    ],
    optionsChinese: [
      "A) 扩展具有最低累积路径代价的节点的搜索",
      "B) 为所有节点分配相等代价的搜索",
      "C) 仅适用于统一图结构的搜索",
      "D) 基于启发式的搜索算法"
    ],
    answer: 0,
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
      "B) A function that counts the number of visited nodes",
      "C) An estimate of the cost from a given state to the goal state",
      "D) A random number generator for search exploration"
    ],
    optionsChinese: [
      "A) 保证精确解代价的函数",
      "B) 计算已访问节点数量的函数",
      "C) 从给定状态到目标状态的代价估计",
      "D) 用于搜索探索的随机数生成器"
    ],
    answer: 2,
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
      "B) A brute-force search without any optimization",
      "C) A search that combines actual cost and heuristic estimate: f(n) = g(n) + h(n)",
      "D) A search algorithm exclusive to game playing"
    ],
    optionsChinese: [
      "A) 仅使用启发式估计的搜索",
      "B) 没有任何优化的暴力搜索",
      "C) 结合实际代价和启发式估计的搜索：f(n) = g(n) + h(n)",
      "D) 专用于游戏的搜索算法"
    ],
    answer: 2,
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
      "B) It returns zero for all states",
      "C) It never overestimates the true cost to reach the goal",
      "D) It is computed in constant time"
    ],
    optionsChinese: [
      "A) 它总是高估到目标的真实代价",
      "B) 它对所有状态返回零",
      "C) 它从不高估到达目标的真实代价",
      "D) 它在常数时间内计算"
    ],
    answer: 2,
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
      "B) A search that explores all nodes equally",
      "C) A search that expands the node closest to the goal based only on heuristic h(n)",
      "D) A search guaranteed to find the optimal solution"
    ],
    optionsChinese: [
      "A) 使用f(n) = g(n) + h(n)的搜索",
      "B) 平等探索所有节点的搜索",
      "C) 仅基于启发式h(n)扩展最接近目标的节点的搜索",
      "D) 保证找到最优解的搜索"
    ],
    answer: 2,
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
    qChinese: "在搜索算法中，什么是'分支因子'？",
    options: [
      "A) The average number of successors per node",
      "B) The total number of nodes in the search tree",
      "C) The depth of the optimal solution",
      "D) The number of leaf nodes in the tree"
    ],
    optionsChinese: [
      "A) 每个节点的平均后继数",
      "B) 搜索树中的节点总数",
      "C) 最优解的深度",
      "D) 树中叶节点的数量"
    ],
    answer: 0,
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
      "A) Optimal decision-making in two-player zero-sum games",
      "B) Sorting data efficiently",
      "C) Clustering data points",
      "D) Training neural networks"
    ],
    optionsChinese: [
      "A) 两人零和博弈中的最优决策",
      "B) 高效排序数据",
      "C) 聚类数据点",
      "D) 训练神经网络"
    ],
    answer: 0,
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
      "B) A search that descends to the lowest cost node",
      "C) A local search that continually moves toward increasing value",
      "D) A search requiring a complete map of the solution space"
    ],
    optionsChinese: [
      "A) 总是找到最佳解的全局优化算法",
      "B) 下降到最低代价节点的搜索",
      "C) 不断向增加值方向移动的局部搜索",
      "D) 需要解空间完整映射的搜索"
    ],
    answer: 2,
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
      "B) An algorithm that only works on genetic data",
      "C) A search algorithm inspired by natural selection using crossover and mutation",
      "D) A sorting algorithm based on biological processes"
    ],
    optionsChinese: [
      "A) DNA测序算法",
      "B) 仅适用于遗传数据的算法",
      "C) 受自然选择启发使用交叉和变异的搜索算法",
      "D) 基于生物过程的排序算法"
    ],
    answer: 2,
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
      "B) O(n^2)",
      "C) O(b^d) where b is branching factor and d is depth",
      "D) O(log n)"
    ],
    optionsChinese: [
      "A) O(n log n)",
      "B) O(n^2)",
      "C) O(b^d)，其中b是分支因子，d是深度",
      "D) O(log n)"
    ],
    answer: 2,
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
      "B) A type of neural network architecture",
      "C) A problem that can only be solved by brute force",
      "D) A problem where variables must satisfy a set of constraints simultaneously"
    ],
    optionsChinese: [
      "A) 对解没有约束的问题",
      "B) 一种神经网络架构",
      "C) 只能通过暴力解决的问题",
      "D) 变量必须同时满足一组约束的问题"
    ],
    answer: 3,
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
      "B) A search that explores all possible solutions",
      "C) A search that keeps only a fixed number of best partial solutions at each level",
      "D) A random search with no memory"
    ],
    optionsChinese: [
      "A) 使用激光束进行路径查找的搜索",
      "B) 探索所有可能解的搜索",
      "C) 在每个级别仅保留固定数量的最佳部分解的搜索",
      "D) 没有记忆的随机搜索"
    ],
    answer: 2,
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
      "B) A search that alternates between left and right paths",
      "C) A search that runs simultaneously from start and goal until they meet",
      "D) A search limited to two-dimensional spaces"
    ],
    optionsChinese: [
      "A) 同时运行两种不同算法的搜索",
      "B) 在左右路径之间交替的搜索",
      "C) 从起点和目标同时运行直到相遇的搜索",
      "D) 仅限于二维空间的搜索"
    ],
    answer: 2,
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
      "A) Iterative deepening A* that uses f-cost as the depth limit",
      "B) An improved version of DFS without heuristics",
      "C) A parallel implementation of A*",
      "D) A simplified version of BFS"
    ],
    optionsChinese: [
      "A) 使用f代价作为深度限制的迭代加深A*",
      "B) 没有启发式的DFS改进版本",
      "C) A*的并行实现",
      "D) BFS的简化版本"
    ],
    answer: 0,
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
      "B) To determine who plays first",
      "C) To validate the rules of the game",
      "D) To estimate the desirability of a game position without full search"
    ],
    optionsChinese: [
      "A) 计算已走步数",
      "B) 确定谁先走",
      "C) 验证游戏规则",
      "D) 在不进行完整搜索的情况下估计游戏位置的有利程度"
    ],
    answer: 3,
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
      "B) A search algorithm limited to card games",
      "C) A search using random simulations to evaluate moves and build a search tree",
      "D) A brute-force search of all possible game states"
    ],
    optionsChinese: [
      "A) 需要完整游戏知识的确定性搜索",
      "B) 仅限于纸牌游戏的搜索算法",
      "C) 使用随机模拟来评估移动并构建搜索树的搜索",
      "D) 所有可能游戏状态的暴力搜索"
    ],
    answer: 2,
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
      "B) Choosing between depth-first and breadth-first search",
      "C) Deciding between parallel and sequential processing",
      "D) Balancing between trying new options and using known good options"
    ],
    optionsChinese: [
      "A) 在开源和专有算法之间选择",
      "B) 在深度优先和广度优先搜索之间选择",
      "C) 在并行和顺序处理之间决定",
      "D) 在尝试新选项和使用已知好选项之间取得平衡"
    ],
    answer: 3,
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
      "B) Compressing data for efficient storage",
      "C) Displaying knowledge on a computer screen",
      "D) The method of encoding information so AI systems can reason with it"
    ],
    optionsChinese: [
      "A) 在数据库中无结构地存储数据",
      "B) 为高效存储压缩数据",
      "C) 在计算机屏幕上显示知识",
      "D) 对信息进行编码以使AI系统能够进行推理的方法"
    ],
    answer: 3,
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
      "A) Logic that only uses numerical values",
      "B) Logic that handles uncertain probabilities",
      "C) Logic specifically designed for natural language",
      "D) Logic that deals with propositions that can be true or false"
    ],
    optionsChinese: [
      "A) 仅使用数值的逻辑",
      "B) 处理不确定概率的逻辑",
      "C) 专门为自然语言设计的逻辑",
      "D) 处理可以为真或假的命题的逻辑"
    ],
    answer: 3,
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
      "A) A formal specification of concepts and relationships within a domain",
      "B) A branch of philosophy with no AI applications",
      "C) A programming language for databases",
      "D) A type of neural network architecture"
    ],
    optionsChinese: [
      "A) 领域内概念和关系的正式规范",
      "B) 没有AI应用的哲学分支",
      "C) 数据库编程语言",
      "D) 一种神经网络架构"
    ],
    answer: 0,
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
      "B) A graph showing student test scores",
      "C) A network of real-world entities and their relationships represented as nodes and edges",
      "D) A flowchart of an algorithm"
    ],
    optionsChinese: [
      "A) 显示知识指标的条形图",
      "B) 显示学生测试分数的图表",
      "C) 将真实世界实体及其关系表示为节点和边的网络",
      "D) 算法的流程图"
    ],
    answer: 2,
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
      "B) A unit of time in AI processing",
      "C) A window frame in graphical user interfaces",
      "D) A data structure with slots for attributes and values representing stereotypical situations"
    ],
    optionsChinese: [
      "A) 计算机视觉中的视频帧",
      "B) AI处理中的时间单位",
      "C) 图形用户界面中的窗口框架",
      "D) 具有表示典型情况的属性和值的槽的数据结构"
    ],
    answer: 3,
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
      "A) A statement of the form subject-predicate-object for representing knowledge",
      "B) A three-layer neural network",
      "C) Three related database tables",
      "D) A trio of AI algorithms working together"
    ],
    optionsChinese: [
      "A) 以主语-谓语-宾语形式表示知识的陈述",
      "B) 三层神经网络",
      "C) 三个相关的数据库表",
      "D) 三个协同工作的AI算法"
    ],
    answer: 0,
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
      "A) Web Ontology Language for defining and sharing ontologies",
      "B) A nocturnal bird used as an AI mascot",
      "C) Object-Weighted Learning algorithm",
      "D) Online Wisdom Library database"
    ],
    optionsChinese: [
      "A) 用于定义和共享本体论的Web本体语言",
      "B) 用作AI吉祥物的夜行鸟类",
      "C) 对象加权学习算法",
      "D) 在线智慧图书馆数据库"
    ],
    answer: 0,
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
      "A) Making logical inferences when information is incomplete or uncertain",
      "B) Reasoning that always produces certain results",
      "C) Guessing randomly when unsure",
      "D) Avoiding decisions until all facts are known"
    ],
    optionsChinese: [
      "A) 当信息不完整或不确定时进行逻辑推断",
      "B) 总是产生确定结果的推理",
      "C) 不确定时随机猜测",
      "D) 在所有事实已知之前避免决策"
    ],
    answer: 0,
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
      "B) A type of computer network protocol",
      "C) A probabilistic graphical model representing variables and their conditional dependencies",
      "D) A neural network trained using Bayes' theorem"
    ],
    optionsChinese: [
      "A) 统计学家的社交网络",
      "B) 一种计算机网络协议",
      "C) 表示变量及其条件依赖关系的概率图模型",
      "D) 使用贝叶斯定理训练的神经网络"
    ],
    answer: 2,
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
      "B) Linking database records sequentially",
      "C) Reasoning from known facts forward to derive new conclusions",
      "D) Connecting blockchain nodes in order"
    ],
    optionsChinese: [
      "A) 从目标向后推理以找到支持事实",
      "B) 按顺序链接数据库记录",
      "C) 从已知事实向前推理以得出新结论",
      "D) 按顺序连接区块链节点"
    ],
    answer: 2,
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
      "A) Starting from a goal and working backward to find supporting facts",
      "B) Reasoning from facts to random conclusions",
      "C) Reversing the order of a linked list",
      "D) Undoing the last inference step"
    ],
    optionsChinese: [
      "A) 从目标开始向后工作以找到支持事实",
      "B) 从事实到随机结论的推理",
      "C) 反转链表的顺序",
      "D) 撤消最后的推理步骤"
    ],
    answer: 0,
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
      "A) The absence of information does not imply its falsity",
      "B) All possible information is already contained in the knowledge base",
      "C) The world is an open system with infinite resources",
      "D) Knowledge bases must always be publicly accessible"
    ],
    optionsChinese: [
      "A) 信息的缺失并不意味着其虚假",
      "B) 所有可能的信息已经包含在知识库中",
      "C) 世界是一个拥有无限资源的开放系统",
      "D) 知识库必须始终公开可访问"
    ],
    answer: 0,
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
      "A) Representing entities and relations as continuous vectors in low-dimensional space",
      "B) Physically embedding chips into knowledge systems",
      "C) Inserting new nodes into a graph database",
      "D) Compressing knowledge graphs for storage"
    ],
    optionsChinese: [
      "A) 将实体和关系表示为低维空间中的连续向量",
      "B) 将芯片物理嵌入知识系统",
      "C) 在图数据库中插入新节点",
      "D) 压缩知识图谱以便存储"
    ],
    answer: 0,
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
      "B) Logic that produces random outputs",
      "C) Logic used only in quantum computing",
      "D) Logic that handles degrees of truth rather than strict true/false values"
    ],
    optionsChinese: [
      "A) 定义不清且不精确的逻辑",
      "B) 产生随机输出的逻辑",
      "C) 仅用于量子计算的逻辑",
      "D) 处理真值程度而非严格真/假值的逻辑"
    ],
    answer: 3,
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
      "B) They are identical in practice",
      "C) Non-monotonic reasoning cannot handle new information",
      "D) In monotonic reasoning, adding information never invalidates existing conclusions"
    ],
    optionsChinese: [
      "A) 单调更快；非单调更慢",
      "B) 它们在实践中完全相同",
      "C) 非单调推理无法处理新信息",
      "D) 在单调推理中，添加信息永远不会使现有结论无效"
    ],
    answer: 3,
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
      "B) A database without any query capability",
      "C) A random collection of data files",
      "D) A structured collection of facts, rules, and relationships used for reasoning"
    ],
    optionsChinese: [
      "A) 实体书籍图书馆",
      "B) 没有查询能力的数据库",
      "C) 数据文件的随机集合",
      "D) 用于推理的事实、规则和关系的结构化集合"
    ],
    answer: 3,
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
      "A) To apply logical rules to the knowledge base to derive new conclusions",
      "B) To store data in a database",
      "C) To render graphical user interfaces",
      "D) To compile source code into machine code"
    ],
    optionsChinese: [
      "A) 将逻辑规则应用于知识库以推导新结论",
      "B) 在数据库中存储数据",
      "C) 渲染图形用户界面",
      "D) 将源代码编译为机器代码"
    ],
    answer: 0,
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
      "B) Resolving conflicts between AI agents",
      "C) Deleting duplicate entities from a database",
      "D) Determining when different references refer to the same real-world entity"
    ],
    optionsChinese: [
      "A) 增加实体图像的分辨率",
      "B) 解决AI智能体之间的冲突",
      "C) 从数据库中删除重复实体",
      "D) 确定不同引用是否指向同一真实世界实体"
    ],
    answer: 3,
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
      "A) An extension of the web where data is given well-defined meaning for machine understanding",
      "B) A faster version of the internet",
      "C) A web browser for semantic search",
      "D) A social network for researchers"
    ],
    optionsChinese: [
      "A) 网络的扩展，数据被赋予明确定义的含义以供机器理解",
      "B) 更快版本的互联网",
      "C) 用于语义搜索的网络浏览器",
      "D) 研究人员的社交网络"
    ],
    answer: 0,
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
      "B) Forecasting network connection failures",
      "C) Creating hyperlinks between web pages automatically",
      "D) Predicting missing relationships between entities in a knowledge graph"
    ],
    optionsChinese: [
      "A) 预测用户将点击哪些网页链接",
      "B) 预测网络连接故障",
      "C) 自动创建网页之间的超链接",
      "D) 预测知识图谱中实体之间缺失的关系"
    ],
    answer: 3,
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
      "B) A quality assurance method for ML models",
      "C) A quantum computing algorithm for learning",
      "D) A model-free RL algorithm that learns the value of state-action pairs"
    ],
    optionsChinese: [
      "A) 使用Q统计的监督学习算法",
      "B) ML模型的质量保证方法",
      "C) 用于学习的量子计算算法",
      "D) 学习状态-动作对值的无模型RL算法"
    ],
    answer: 3,
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
      "A) A recursive equation that decomposes the value of a state into immediate reward and future value",
      "B) An equation for computing neural network gradients",
      "C) An equation for sorting data efficiently",
      "D) A mathematical formula for image recognition"
    ],
    optionsChinese: [
      "A) 将状态值分解为即时奖励和未来值的递归方程",
      "B) 用于计算神经网络梯度的方程",
      "C) 用于高效排序数据的方程",
      "D) 用于图像识别的数学公式"
    ],
    answer: 0,
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
      "B) There is no practical difference",
      "C) Model-free is always more accurate",
      "D) Model-based learns a model of the environment; model-free learns directly from experience"
    ],
    optionsChinese: [
      "A) 基于模型使用更大的数据集",
      "B) 没有实际区别",
      "C) 无模型总是更准确",
      "D) 基于模型学习环境模型；无模型直接从经验中学习"
    ],
    answer: 3,
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
      "B) Gradually increasing the action space over time",
      "C) Randomly selecting actions at all times",
      "D) Selecting the best known action most of the time but exploring randomly with probability epsilon"
    ],
    optionsChinese: [
      "A) 总是选择已知值最高的动作",
      "B) 随时间逐渐增加动作空间",
      "C) 始终随机选择动作",
      "D) 大多数时候选择已知最佳动作但以概率epsilon随机探索"
    ],
    answer: 3,
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
      "A) A method that updates value estimates based on the difference between consecutive predictions",
      "B) Learning about time management",
      "C) Learning that only occurs at fixed time intervals",
      "D) A technique for processing time-series data"
    ],
    optionsChinese: [
      "A) 根据连续预测之间的差异更新值估计的方法",
      "B) 关于时间管理的学习",
      "C) 仅在固定时间间隔发生的学习",
      "D) 处理时间序列数据的技术"
    ],
    answer: 0,
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
      "A) An on-policy TD control algorithm using State-Action-Reward-State-Action tuples",
      "B) A type of neural network",
      "C) A search algorithm for reinforcement learning",
      "D) A reward shaping technique"
    ],
    optionsChinese: [
      "A) 使用状态-动作-奖励-状态-动作元组的在策略TD控制算法",
      "B) 一种神经网络",
      "C) 强化学习的搜索算法",
      "D) 奖励塑造技术"
    ],
    answer: 0,
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
      "A) A combination of Q-learning with deep neural networks to handle large state spaces",
      "B) A shallow neural network for classification",
      "C) A database query network",
      "D) A quantized deep learning model"
    ],
    optionsChinese: [
      "A) 将Q学习与深度神经网络结合以处理大型状态空间",
      "B) 用于分类的浅层神经网络",
      "C) 数据库查询网络",
      "D) 量化的深度学习模型"
    ],
    answer: 0,
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
      "B) Repeating the same training episode multiple times",
      "C) Storing past experiences in a buffer and sampling random batches for training",
      "D) Sharing experiences between different agents"
    ],
    optionsChinese: [
      "A) 回放过去实验的视频录像",
      "B) 多次重复相同的训练情节",
      "C) 将过去的经验存储在缓冲区中并抽样随机批次进行训练",
      "D) 在不同智能体之间共享经验"
    ],
    answer: 2,
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
      "B) A technique for gradient descent in image processing",
      "C) A method that directly optimizes the policy by computing gradients of expected reward",
      "D) The slope of the reward curve over time"
    ],
    optionsChinese: [
      "A) 监督学习中损失函数的梯度",
      "B) 图像处理中的梯度下降技术",
      "C) 通过计算期望奖励的梯度直接优化策略的方法",
      "D) 奖励曲线随时间的斜率"
    ],
    answer: 2,
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
      "B) A technique for compressing neural networks",
      "C) A method for optimizing proximity sensors",
      "D) A policy gradient method that limits policy updates to a trust region for stability"
    ],
    optionsChinese: [
      "A) 数据库查询的优化技术",
      "B) 压缩神经网络的技术",
      "C) 优化近距离传感器的方法",
      "D) 将策略更新限制在信任区域以保持稳定性的策略梯度方法"
    ],
    answer: 3,
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
      "A) A function estimating the expected cumulative reward from a given state",
      "B) A function that returns the monetary value of an action",
      "C) A function that counts the number of states visited",
      "D) A function that determines the learning rate"
    ],
    optionsChinese: [
      "A) 估计从给定状态开始的期望累积奖励的函数",
      "B) 返回动作货币价值的函数",
      "C) 计算已访问状态数量的函数",
      "D) 确定学习率的函数"
    ],
    answer: 0,
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
      "A) Adding intermediate rewards to guide the agent toward desired behavior faster",
      "B) Physically shaping reward tokens",
      "C) Reducing the total reward an agent receives",
      "D) Randomizing rewards to prevent overfitting"
    ],
    optionsChinese: [
      "A) 添加中间奖励以更快地引导智能体走向期望行为",
      "B) 物理塑造奖励令牌",
      "C) 减少智能体获得的总奖励",
      "D) 随机化奖励以防止过拟合"
    ],
    answer: 0,
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
      "B) Using multiple GPUs for training one agent",
      "C) Multiple agents learning simultaneously in a shared environment",
      "D) An agent with multiple reward signals"
    ],
    optionsChinese: [
      "A) 在多个任务上训练单个智能体",
      "B) 使用多个GPU训练一个智能体",
      "C) 多个智能体在共享环境中同时学习",
      "D) 具有多个奖励信号的智能体"
    ],
    answer: 2,
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
      "B) Reversing the training process of an RL agent",
      "C) Training an agent to minimize rewards",
      "D) Inferring the reward function from observed expert behavior"
    ],
    optionsChinese: [
      "A) 学习逆转智能体采取的动作",
      "B) 逆转RL智能体的训练过程",
      "C) 训练智能体最小化奖励",
      "D) 从观察到的专家行为中推断奖励函数"
    ],
    answer: 3,
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
      "A) Determining which actions in a sequence were responsible for the received reward",
      "B) Assigning academic credit for AI courses",
      "C) Distributing computational resources among agents",
      "D) Crediting the correct algorithm for a solution"
    ],
    optionsChinese: [
      "A) 确定序列中哪些动作对获得的奖励负责",
      "B) 为AI课程分配学分",
      "C) 在智能体之间分配计算资源",
      "D) 将解决方案的功劳归于正确的算法"
    ],
    answer: 0,
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
      "A) On-policy learns about the policy being followed; off-policy learns about a different policy",
      "B) On-policy is online; off-policy is offline",
      "C) Off-policy is always more efficient",
      "D) On-policy uses neural networks; off-policy uses tables"
    ],
    optionsChinese: [
      "A) 在策略学习正在遵循的策略；离策略学习不同的策略",
      "B) 在策略是在线的；离策略是离线的",
      "C) 离策略总是更高效",
      "D) 在策略使用神经网络；离策略使用表格"
    ],
    answer: 0,
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
      "B) Asking the user which states to explore",
      "C) Using prediction error as an intrinsic reward to encourage exploring novel states",
      "D) Exploring only states with high external rewards"
    ],
    optionsChinese: [
      "A) 无目的地随机探索环境",
      "B) 询问用户探索哪些状态",
      "C) 使用预测误差作为内在奖励来鼓励探索新状态",
      "D) 仅探索具有高外部奖励的状态"
    ],
    answer: 2,
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
      "A) Using knowledge gained from one task to improve learning on a different but related task",
      "B) Transferring an agent between different computers",
      "C) Copying one agent's policy to another identical agent",
      "D) Moving data between training servers"
    ],
    optionsChinese: [
      "A) 使用从一个任务获得的知识来改善不同但相关任务的学习",
      "B) 在不同计算机之间转移智能体",
      "C) 将一个智能体的策略复制到另一个相同的智能体",
      "D) 在训练服务器之间移动数据"
    ],
    answer: 0,
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
      "A) Transferring policies trained in simulation to work in the real world",
      "B) Converting simulated data to real data",
      "C) Simulating real-world physics in a virtual environment",
      "D) Using real-world data to improve simulation accuracy"
    ],
    optionsChinese: [
      "A) 将在仿真中训练的策略迁移到真实世界中工作",
      "B) 将仿真数据转换为真实数据",
      "C) 在虚拟环境中仿真真实世界物理",
      "D) 使用真实世界数据提高仿真精度"
    ],
    answer: 0,
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
      "A) How much better an action is compared to the average action in that state",
      "B) The total reward received in a state",
      "C) The maximum possible reward in the environment",
      "D) The probability of reaching a goal state"
    ],
    optionsChinese: [
      "A) 一个动作比该状态中平均动作好多少",
      "B) 在一个状态中获得的总奖励",
      "C) 环境中可能的最大奖励",
      "D) 到达目标状态的概率"
    ],
    answer: 0,
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
      "B) Duplicating training data multiple times",
      "C) Learning a policy by observing expert demonstrations",
      "D) An agent that mimics the environment's behavior"
    ],
    optionsChinese: [
      "A) 复制另一个AI系统的架构",
      "B) 多次复制训练数据",
      "C) 通过观察专家示范学习策略",
      "D) 模仿环境行为的智能体"
    ],
    answer: 2,
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
      "B) Switching between different environments",
      "C) Trading model accuracy for speed",
      "D) Balancing trying new actions versus using known rewarding actions"
    ],
    optionsChinese: [
      "A) 在快速和慢速训练之间选择",
      "B) 在不同环境之间切换",
      "C) 以模型准确性换取速度",
      "D) 在尝试新动作和使用已知有奖励的动作之间取得平衡"
    ],
    answer: 3,
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
      "A) Training AI models using human preferences as the reward signal",
      "B) RL where humans play games against AI",
      "C) Humans manually programming RL policies",
      "D) RL applied to human resource management"
    ],
    optionsChinese: [
      "A) 使用人类偏好作为奖励信号训练AI模型",
      "B) 人类与AI对弈的RL",
      "C) 人类手动编程RL策略",
      "D) 应用于人力资源管理的RL"
    ],
    answer: 0,
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
      "B) A problem with too many arms in a robotic system",
      "C) A simplified RL problem of choosing between options with unknown reward distributions",
      "D) A scheduling problem in manufacturing"
    ],
    optionsChinese: [
      "A) 涉及多个黑客的安全问题",
      "B) 机器人系统中臂过多的问题",
      "C) 在具有未知奖励分布的选项之间进行选择的简化RL问题",
      "D) 制造业中的调度问题"
    ],
    answer: 2,
    explanation: "The multi-armed bandit problem is a classic RL scenario where an agent must choose between multiple actions (arms) with unknown reward distributions. The goal is to maximize total reward while learning which arms are best. It captures the essence of the exploration-exploitation tradeoff and has applications in clinical trials and ad placement.",
    explanationChinese: "多臂赌博机问题是一个经典的RL场景，智能体必须在具有未知奖励分布的多个动作（臂）之间进行选择。目标是在学习哪些臂最好的同时最大化总奖励。它捕获了探索-利用权衡的本质，在临床试验和广告投放中有应用。",
    diagram: "",
    terms: ["reinforcement_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 111,
    q: "What is algorithmic bias?",
    qChinese: "什么是算法偏见？",
    options: [
      "A) A preference for one algorithm over another",
      "B) An error in the algorithm's syntax",
      "C) The tendency of algorithms to prefer faster solutions",
      "D) Systematic and unfair discrimination in AI outputs due to biased data or design"
    ],
    optionsChinese: [
      "A) 对一种算法优于另一种的偏好",
      "B) 算法语法中的错误",
      "C) 算法倾向于选择更快解决方案的趋势",
      "D) 由于数据或设计有偏而导致AI输出中的系统性不公平歧视"
    ],
    answer: 3,
    explanation: "Algorithmic bias occurs when AI systems produce systematically unfair outcomes for certain groups. This can arise from biased training data, flawed feature selection, or prejudiced design choices. Examples include facial recognition systems performing poorly on darker-skinned individuals and hiring algorithms discriminating against certain demographics.",
    explanationChinese: "算法偏见发生在AI系统为某些群体产生系统性不公平结果时。这可能来自有偏的训练数据、有缺陷的特征选择或有偏见的设计选择。例子包括面部识别系统在深肤色个体上表现不佳，以及招聘算法歧视某些人口统计群体。",
    diagram: "",
    terms: ["ai_ethics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 112,
    q: "What is fairness in AI?",
    qChinese: "AI中的公平性是什么？",
    options: [
      "A) Ensuring AI systems do not discriminate against individuals or groups based on protected attributes",
      "B) Ensuring all algorithms run at the same speed",
      "C) Giving equal computing resources to all AI projects",
      "D) Making AI accessible in all countries"
    ],
    optionsChinese: [
      "A) 确保AI系统不基于受保护属性歧视个人或群体",
      "B) 确保所有算法以相同速度运行",
      "C) 为所有AI项目提供平等的计算资源",
      "D) 使AI在所有国家都可访问"
    ],
    answer: 0,
    explanation: "AI fairness ensures that AI systems treat all individuals and groups equitably, without discrimination based on race, gender, age, or other protected attributes. Multiple mathematical definitions of fairness exist, including demographic parity, equalized odds, and individual fairness, though achieving all simultaneously is often mathematically impossible.",
    explanationChinese: "AI公平性确保AI系统公平对待所有个人和群体，不基于种族、性别、年龄或其他受保护属性进行歧视。公平性存在多种数学定义，包括人口统计均等、均等化赔率和个体公平，尽管同时实现所有定义通常在数学上是不可能的。",
    diagram: "",
    terms: ["ai_ethics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 113,
    q: "What is transparency in AI?",
    qChinese: "AI中的透明性是什么？",
    options: [
      "A) Making AI hardware see-through",
      "B) Publishing all AI source code publicly",
      "C) The ability to understand and inspect how an AI system makes its decisions",
      "D) Using transparent data storage devices"
    ],
    optionsChinese: [
      "A) 使AI硬件透明",
      "B) 公开发布所有AI源代码",
      "C) 理解和检查AI系统如何做决策的能力",
      "D) 使用透明数据存储设备"
    ],
    answer: 2,
    explanation: "AI transparency refers to the degree to which the inner workings and decision-making processes of an AI system can be understood by humans. It encompasses model interpretability, data provenance, and documentation of design choices. Transparency is essential for building trust, enabling accountability, and facilitating regulatory compliance in AI systems.",
    explanationChinese: "AI透明性是指AI系统的内部运作和决策过程能被人类理解的程度。它包含模型可解释性、数据来源和设计选择的文档记录。透明性对于建立信任、实现问责制和促进AI系统的监管合规性至关重要。",
    diagram: "",
    terms: ["ai_ethics", "explainable_ai"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 114,
    q: "What is accountability in AI?",
    qChinese: "AI中的问责制是什么？",
    options: [
      "A) Tracking the financial costs of AI systems",
      "B) Ensuring clear responsibility for the outcomes and impacts of AI systems",
      "C) Counting the number of AI systems in use",
      "D) The ability of AI to create financial reports"
    ],
    optionsChinese: [
      "A) 跟踪AI系统的财务成本",
      "B) 确保对AI系统的结果和影响承担明确的责任",
      "C) 计算使用中的AI系统数量",
      "D) AI创建财务报告的能力"
    ],
    answer: 1,
    explanation: "AI accountability means that individuals and organizations are responsible for the outcomes of AI systems they develop and deploy. It requires clear governance structures, documentation, and mechanisms for redress when AI causes harm. Accountability ensures that someone can be held responsible when AI systems make errors or cause negative impacts.",
    explanationChinese: "AI问责制意味着个人和组织对其开发和部署的AI系统的结果负责。它需要明确的治理结构、文档和AI造成损害时的补救机制。问责制确保当AI系统出错或造成负面影响时，有人可以被追究责任。",
    diagram: "",
    terms: ["ai_ethics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 115,
    q: "What is the trolley problem in AI ethics?",
    qChinese: "AI伦理中的电车问题是什么？",
    options: [
      "A) A problem with electric trolley AI systems",
      "B) A logistics problem in AI-driven transportation",
      "C) A moral dilemma about choosing between harmful outcomes that applies to autonomous systems",
      "D) A computer science sorting problem"
    ],
    optionsChinese: [
      "A) 电力电车AI系统的问题",
      "B) AI驱动运输中的物流问题",
      "C) 关于在有害结果之间选择的道德困境，适用于自主系统",
      "D) 计算机科学排序问题"
    ],
    answer: 2,
    explanation: "The trolley problem, when applied to AI ethics, poses questions about how autonomous systems should handle unavoidable harm scenarios. For self-driving cars, this means programming decisions about who to protect when accidents are inevitable. It highlights the difficulty of encoding moral judgments into AI systems and the cultural variability of ethical values.",
    explanationChinese: "电车问题应用于AI伦理时，提出了自主系统应如何处理不可避免的伤害场景的问题。对于自动驾驶汽车，这意味着在事故不可避免时编程决定保护谁。它突显了将道德判断编码到AI系统中的困难以及伦理价值观的文化差异。",
    diagram: "",
    terms: ["ai_ethics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 116,
    q: "What is data privacy in the context of AI?",
    qChinese: "AI背景下的数据隐私是什么？",
    options: [
      "A) Keeping data on private servers only",
      "B) Making all data publicly available for AI research",
      "C) Protecting individuals' personal information used in AI training and inference",
      "D) Encrypting all computer files"
    ],
    optionsChinese: [
      "A) 仅将数据保存在私有服务器上",
      "B) 使所有数据对AI研究公开可用",
      "C) 保护AI训练和推理中使用的个人信息",
      "D) 加密所有计算机文件"
    ],
    answer: 2,
    explanation: "Data privacy in AI concerns protecting personal information collected, stored, and used by AI systems. Issues include consent for data collection, data minimization, purpose limitation, and the right to be forgotten. Regulations like GDPR and techniques like differential privacy and federated learning help address privacy concerns in AI.",
    explanationChinese: "AI中的数据隐私涉及保护AI系统收集、存储和使用的个人信息。问题包括数据收集的同意、数据最小化、目的限制和被遗忘权。GDPR等法规和差分隐私、联邦学习等技术有助于解决AI中的隐私问题。",
    diagram: "",
    terms: ["ai_ethics", "federated_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 117,
    q: "What is informed consent in AI data collection?",
    qChinese: "AI数据收集中的知情同意是什么？",
    options: [
      "A) Automatically agreeing to all terms and conditions",
      "B) Ensuring individuals understand and agree to how their data will be used by AI",
      "C) Informing AI systems about data sources",
      "D) Getting consent from the AI to use its outputs"
    ],
    optionsChinese: [
      "A) 自动同意所有条款和条件",
      "B) 确保个人理解并同意AI将如何使用其数据",
      "C) 告知AI系统数据来源",
      "D) 获得AI同意使用其输出"
    ],
    answer: 1,
    explanation: "Informed consent requires that individuals understand what data is being collected, how it will be used, stored, and shared by AI systems before agreeing to its collection. This includes understanding potential risks and having the right to withdraw consent. Meaningful consent is challenging when AI applications of data are complex and evolving.",
    explanationChinese: "知情同意要求个人在同意收集数据之前了解正在收集什么数据、AI系统将如何使用、存储和共享这些数据。这包括了解潜在风险和有权撤回同意。当数据的AI应用复杂且不断发展时，有意义的同意是具有挑战性的。",
    diagram: "",
    terms: ["ai_ethics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 118,
    q: "What is the concept of 'AI for social good'?",
    qChinese: "'AI为社会公益'的概念是什么？",
    options: [
      "A) Using AI exclusively for social media",
      "B) Using AI to monitor social behavior",
      "C) Making AI systems more sociable",
      "D) Applying AI to address societal challenges like healthcare, education, and sustainability"
    ],
    optionsChinese: [
      "A) 将AI专门用于社交媒体",
      "B) 使用AI监控社会行为",
      "C) 使AI系统更善于社交",
      "D) 应用AI解决医疗保健、教育和可持续发展等社会挑战"
    ],
    answer: 3,
    explanation: "AI for social good focuses on applying AI technologies to solve pressing societal challenges. Applications include predicting disease outbreaks, improving educational outcomes, monitoring environmental changes, and disaster response. The movement emphasizes ensuring AI benefits are distributed equitably and that vulnerable populations are not left behind in the AI revolution.",
    explanationChinese: "AI为社会公益专注于应用AI技术解决紧迫的社会挑战。应用包括预测疾病爆发、改善教育成果、监测环境变化和灾害响应。该运动强调确保AI利益公平分配，弱势群体不会在AI革命中被落下。",
    diagram: "",
    terms: ["ai_ethics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 119,
    q: "What is the EU AI Act?",
    qChinese: "什么是欧盟AI法案？",
    options: [
      "A) A law banning all AI in Europe",
      "B) A risk-based regulatory framework for AI systems in the European Union",
      "C) A European AI research grant program",
      "D) A standard for European AI hardware"
    ],
    optionsChinese: [
      "A) 禁止欧洲所有AI的法律",
      "B) 欧盟基于风险的AI系统监管框架",
      "C) 欧洲AI研究资助计划",
      "D) 欧洲AI硬件标准"
    ],
    answer: 1,
    explanation: "The EU AI Act is a comprehensive regulatory framework that classifies AI systems by risk level: unacceptable, high, limited, and minimal risk. High-risk AI applications in areas like healthcare and law enforcement face strict requirements for transparency, data governance, and human oversight. It represents the world's first major comprehensive AI regulation.",
    explanationChinese: "欧盟AI法案是一个综合监管框架，按风险级别对AI系统进行分类：不可接受、高、有限和最低风险。医疗保健和执法等领域的高风险AI应用面临透明度、数据治理和人类监督的严格要求。它代表了世界上第一个主要的综合AI法规。",
    diagram: "",
    terms: ["ai_ethics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 120,
    q: "What is deepfake technology and why is it an ethical concern?",
    qChinese: "什么是深度伪造技术，为什么它是伦理问题？",
    options: [
      "A) Deep learning applied to fake news detection",
      "B) AI-generated synthetic media that can convincingly replicate real people's likeness",
      "C) A technique for deep cleaning databases",
      "D) A method for creating deep copies of AI models"
    ],
    optionsChinese: [
      "A) 应用于假新闻检测的深度学习",
      "B) AI生成的合成媒体，可以令人信服地复制真人的样貌",
      "C) 深度清理数据库的技术",
      "D) 创建AI模型深度副本的方法"
    ],
    answer: 1,
    explanation: "Deepfakes use deep learning to create convincing fake images, videos, or audio of real people. Ethical concerns include misinformation, identity theft, non-consensual content creation, and erosion of trust in media. Detecting deepfakes has become an important AI research area, though generation techniques continue to advance ahead of detection methods.",
    explanationChinese: "深度伪造使用深度学习创建真人的逼真假图像、视频或音频。伦理问题包括虚假信息、身份盗窃、未经同意的内容创建和对媒体信任的侵蚀。检测深度伪造已成为重要的AI研究领域，尽管生成技术继续领先于检测方法。",
    diagram: "",
    terms: ["ai_ethics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 121,
    q: "What is the 'black box' problem in AI?",
    qChinese: "AI中的'黑箱'问题是什么？",
    options: [
      "A) AI systems stored in black enclosures",
      "B) The problem of missing data in datasets",
      "C) A bug that causes AI screens to go black",
      "D) The inability to understand or explain how complex AI models reach their decisions"
    ],
    optionsChinese: [
      "A) 存储在黑色外壳中的AI系统",
      "B) 数据集中缺失数据的问题",
      "C) 导致AI屏幕变黑的错误",
      "D) 无法理解或解释复杂AI模型如何做出决策"
    ],
    answer: 3,
    explanation: "The black box problem refers to the difficulty of understanding how complex AI models, particularly deep neural networks, arrive at their decisions. The internal reasoning process is opaque, making it hard to verify, trust, or debug these systems. This opacity raises concerns in high-stakes applications like healthcare, criminal justice, and finance.",
    explanationChinese: "黑箱问题是指理解复杂AI模型（特别是深度神经网络）如何做出决策的困难。内部推理过程是不透明的，使得难以验证、信任或调试这些系统。这种不透明性在医疗保健、刑事司法和金融等高风险应用中引起关注。",
    diagram: "",
    terms: ["ai_ethics", "explainable_ai"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 122,
    q: "What is AI surveillance and its ethical implications?",
    qChinese: "什么是AI监控及其伦理影响？",
    options: [
      "A) Monitoring AI system performance metrics",
      "B) Using AI for mass monitoring of populations, raising privacy and freedom concerns",
      "C) Surveyors using AI for land measurements",
      "D) AI systems that monitor their own code quality"
    ],
    optionsChinese: [
      "A) 监控AI系统性能指标",
      "B) 使用AI对人口进行大规模监控，引发隐私和自由问题",
      "C) 测量员使用AI进行土地测量",
      "D) 监控自身代码质量的AI系统"
    ],
    answer: 1,
    explanation: "AI surveillance uses technologies like facial recognition, behavior analysis, and predictive policing to monitor populations at scale. Ethical concerns include invasion of privacy, chilling effects on free speech, potential for authoritarian control, and disproportionate impact on marginalized communities who are often over-surveilled and misidentified by these systems.",
    explanationChinese: "AI监控使用面部识别、行为分析和预测性警务等技术大规模监控人口。伦理问题包括侵犯隐私、对言论自由的寒蝉效应、威权控制的可能性，以及对经常被这些系统过度监控和错误识别的边缘化社区的不成比例影响。",
    diagram: "",
    terms: ["ai_ethics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 123,
    q: "What is demographic parity in fair AI?",
    qChinese: "公平AI中的人口统计均等是什么？",
    options: [
      "A) Equal population distribution across regions",
      "B) Ensuring AI is used equally by all demographics",
      "C) Having equal numbers of each demographic in the training data",
      "D) The requirement that AI outcomes are independent of protected group membership"
    ],
    optionsChinese: [
      "A) 跨地区的平均人口分布",
      "B) 确保所有人口统计群体平等使用AI",
      "C) 训练数据中每个人口统计群体数量相等",
      "D) AI结果独立于受保护群体成员身份的要求"
    ],
    answer: 3,
    explanation: "Demographic parity (statistical parity) requires that the positive prediction rate is the same across all protected groups. For example, a hiring algorithm should approve the same percentage of candidates regardless of gender or race. While intuitive, demographic parity can conflict with other fairness criteria and may not always be appropriate.",
    explanationChinese: "人口统计均等（统计均等）要求所有受保护群体的正预测率相同。例如，招聘算法应该批准相同比例的候选人，不论性别或种族。虽然直观，但人口统计均等可能与其他公平标准冲突，并不总是适当的。",
    diagram: "",
    terms: ["ai_ethics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 124,
    q: "What is equalized odds as a fairness metric?",
    qChinese: "作为公平性指标的均等化赔率是什么？",
    options: [
      "A) Ensuring true positive and false positive rates are equal across protected groups",
      "B) Making all predictions equally likely",
      "C) Giving equal odds to all competitors in a game",
      "D) Equalizing the training time for all models"
    ],
    optionsChinese: [
      "A) 确保受保护群体之间的真正率和假正率相等",
      "B) 使所有预测同样可能",
      "C) 在游戏中给所有竞争者平等的赔率",
      "D) 均等化所有模型的训练时间"
    ],
    answer: 0,
    explanation: "Equalized odds requires that an AI classifier has equal true positive rates and equal false positive rates across different protected groups. This ensures the model performs equally well for all groups, making the same types of errors at the same rates. It is a stronger fairness condition than demographic parity alone.",
    explanationChinese: "均等化赔率要求AI分类器在不同受保护群体之间具有相等的真正率和相等的假正率。这确保模型对所有群体表现同样好，以相同的比率犯同样类型的错误。它是比仅人口统计均等更强的公平条件。",
    diagram: "",
    terms: ["ai_ethics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 125,
    q: "What is the right to explanation in AI decision-making?",
    qChinese: "AI决策中的解释权是什么？",
    options: [
      "A) The right to explain AI to students",
      "B) The obligation to explain AI funding decisions",
      "C) AI's right to explain its own existence",
      "D) Individuals' right to understand why an AI system made a specific decision about them"
    ],
    optionsChinese: [
      "A) 向学生解释AI的权利",
      "B) 解释AI资金决策的义务",
      "C) AI解释自身存在的权利",
      "D) 个人理解AI系统为何对其做出特定决策的权利"
    ],
    answer: 3,
    explanation: "The right to explanation means individuals affected by automated decisions should receive meaningful information about the logic and criteria used. The GDPR includes provisions for this right, particularly for decisions with significant impact. This drives the need for explainable AI methods that can provide clear justifications for AI-driven decisions.",
    explanationChinese: "解释权意味着受自动化决策影响的个人应获得有关所使用逻辑和标准的有意义信息。GDPR包含此权利的规定，特别是对于具有重大影响的决策。这推动了对能为AI驱动决策提供明确理由的可解释AI方法的需求。",
    diagram: "",
    terms: ["ai_ethics", "explainable_ai"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 126,
    q: "What is autonomous weapons debate in AI ethics?",
    qChinese: "AI伦理中的自主武器辩论是什么？",
    options: [
      "A) A debate about which AI weapon is most powerful",
      "B) A discussion about weaponizing data",
      "C) The ethical controversy over AI systems that can select and engage targets without human intervention",
      "D) The debate about using AI in weapon manufacturing"
    ],
    optionsChinese: [
      "A) 关于哪种AI武器最强大的辩论",
      "B) 关于将数据武器化的讨论",
      "C) 关于能够在没有人类干预的情况下选择和攻击目标的AI系统的伦理争议",
      "D) 关于在武器制造中使用AI的辩论"
    ],
    answer: 2,
    explanation: "The autonomous weapons debate concerns lethal AI systems that can independently identify and engage targets without human authorization. Critics argue these violate human dignity and international humanitarian law. Supporters claim they could reduce civilian casualties through precision. The Campaign to Stop Killer Robots advocates for international regulation of such systems.",
    explanationChinese: "自主武器辩论涉及能够在没有人类授权的情况下独立识别和攻击目标的致命AI系统。批评者认为这些违反了人类尊严和国际人道主义法。支持者声称它们可以通过精确性减少平民伤亡。'阻止杀手机器人'运动倡导对此类系统进行国际监管。",
    diagram: "",
    terms: ["ai_ethics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 127,
    q: "What is the problem of automation bias?",
    qChinese: "什么是自动化偏见问题？",
    options: [
      "A) AI systems prefer automated solutions",
      "B) The bias introduced by automating manual processes",
      "C) Automated systems always produce biased outputs",
      "D) Humans over-rely on AI recommendations, even when they are incorrect"
    ],
    optionsChinese: [
      "A) AI系统偏好自动化解决方案",
      "B) 自动化手动过程引入的偏见",
      "C) 自动化系统总是产生有偏见的输出",
      "D) 人类过度依赖AI建议，即使建议不正确"
    ],
    answer: 3,
    explanation: "Automation bias is the tendency of humans to favor suggestions from automated systems and ignore contradictory information from other sources, even when the automated system is wrong. This is dangerous in high-stakes domains like aviation and healthcare, where uncritical acceptance of AI recommendations can lead to serious errors.",
    explanationChinese: "自动化偏见是人类倾向于偏好来自自动化系统的建议，忽略来自其他来源的矛盾信息，即使自动化系统是错误的。这在航空和医疗保健等高风险领域很危险，因为不加批判地接受AI建议可能导致严重错误。",
    diagram: "",
    terms: ["ai_ethics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 128,
    q: "What is AI governance?",
    qChinese: "什么是AI治理？",
    options: [
      "A) Governments using AI for administration",
      "B) AI systems governing themselves autonomously",
      "C) The frameworks, policies, and practices for responsible AI development and deployment",
      "D) The process of electing AI system administrators"
    ],
    optionsChinese: [
      "A) 政府使用AI进行行政管理",
      "B) AI系统自主治理自身",
      "C) 负责任的AI开发和部署的框架、政策和实践",
      "D) 选举AI系统管理员的过程"
    ],
    answer: 2,
    explanation: "AI governance encompasses the rules, frameworks, policies, and practices that guide the responsible development, deployment, and use of AI systems. It includes organizational policies, industry standards, government regulations, and international agreements aimed at ensuring AI systems are safe, fair, transparent, and accountable across their lifecycle.",
    explanationChinese: "AI治理包含指导负责任的AI系统开发、部署和使用的规则、框架、政策和实践。它包括组织政策、行业标准、政府法规和国际协议，旨在确保AI系统在其整个生命周期内安全、公平、透明和负责任。",
    diagram: "",
    terms: ["ai_ethics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 129,
    q: "What is the impact of AI on employment?",
    qChinese: "AI对就业有什么影响？",
    options: [
      "A) AI automates certain jobs while creating new roles, requiring workforce adaptation",
      "B) AI has no effect on employment",
      "C) AI eliminates all human jobs immediately",
      "D) AI only affects manufacturing jobs"
    ],
    optionsChinese: [
      "A) AI自动化某些工作同时创造新角色，需要劳动力适应",
      "B) AI对就业没有影响",
      "C) AI立即消除所有人类工作",
      "D) AI仅影响制造业工作"
    ],
    answer: 0,
    explanation: "AI's impact on employment is nuanced. While it automates routine and repetitive tasks, potentially displacing certain jobs, it also creates new roles in AI development, data science, and human-AI collaboration. The transition requires reskilling and upskilling programs to help workers adapt to changing job requirements in the AI-driven economy.",
    explanationChinese: "AI对就业的影响是细致的。虽然它自动化了常规和重复性任务，可能替代某些工作，但它也在AI开发、数据科学和人机协作方面创造了新角色。这一转变需要再技能和技能提升计划，帮助工人适应AI驱动经济中不断变化的工作要求。",
    diagram: "",
    terms: ["ai_ethics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 130,
    q: "What is differential privacy?",
    qChinese: "什么是差分隐私？",
    options: [
      "A) Different levels of privacy for different users",
      "B) A privacy setting in web browsers",
      "C) The difference between private and public data",
      "D) A mathematical framework that ensures individual data cannot be identified from aggregate queries"
    ],
    optionsChinese: [
      "A) 不同用户的不同隐私级别",
      "B) 网络浏览器中的隐私设置",
      "C) 私有数据和公共数据之间的区别",
      "D) 确保无法从聚合查询中识别个人数据的数学框架"
    ],
    answer: 3,
    explanation: "Differential privacy is a mathematical framework that provides formal privacy guarantees by adding calibrated noise to data or query results. It ensures that the output of an analysis is approximately the same whether or not any single individual's data is included, protecting individual privacy while enabling useful aggregate statistical analysis.",
    explanationChinese: "差分隐私是一种数学框架，通过向数据或查询结果添加校准噪声来提供正式的隐私保证。它确保分析的输出大致相同，无论是否包含任何单个个人的数据，在保护个人隐私的同时支持有用的聚合统计分析。",
    diagram: "",
    terms: ["ai_ethics", "federated_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 131,
    q: "What is value alignment in AI?",
    qChinese: "AI中的价值对齐是什么？",
    options: [
      "A) Aligning numerical values in data tables",
      "B) Ensuring AI systems' objectives are consistent with human values and ethics",
      "C) Calibrating sensor values in AI hardware",
      "D) Matching AI performance values to benchmarks"
    ],
    optionsChinese: [
      "A) 对齐数据表中的数值",
      "B) 确保AI系统的目标与人类价值观和伦理一致",
      "C) 校准AI硬件中的传感器值",
      "D) 将AI性能值与基准匹配"
    ],
    answer: 1,
    explanation: "Value alignment ensures AI systems pursue objectives that reflect and respect human values, ethics, and societal norms. It involves specifying goals that capture what humans truly want, not just literal interpretations. Misaligned AI could optimize for stated objectives in harmful ways, making alignment a critical challenge for advanced AI development.",
    explanationChinese: "价值对齐确保AI系统追求反映和尊重人类价值观、伦理和社会规范的目标。它涉及指定捕获人类真正想要什么的目标，而不仅仅是字面解释。不对齐的AI可能以有害的方式优化既定目标，使对齐成为高级AI开发的关键挑战。",
    diagram: "",
    terms: ["ai_ethics", "artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 132,
    q: "What is representational harm in AI?",
    qChinese: "AI中的表征伤害是什么？",
    options: [
      "A) Poor graphical representation of data",
      "B) Inadequate representation of AI in media",
      "C) AI systems reinforcing negative stereotypes or demeaning certain groups",
      "D) Under-representation of AI researchers in conferences"
    ],
    optionsChinese: [
      "A) 数据的图形表示不佳",
      "B) 媒体中对AI的不充分表现",
      "C) AI系统强化负面刻板印象或贬低某些群体",
      "D) AI研究人员在会议中的代表性不足"
    ],
    answer: 2,
    explanation: "Representational harm occurs when AI systems reinforce negative stereotypes, demean, or erase certain social groups. Examples include image generators that produce stereotypical depictions, language models that associate certain groups with negative attributes, and search engines that return biased results. These harms perpetuate societal inequalities and prejudices.",
    explanationChinese: "表征伤害发生在AI系统强化负面刻板印象、贬低或抹去某些社会群体时。例子包括产生刻板描述的图像生成器、将某些群体与负面属性关联的语言模型，以及返回有偏结果的搜索引擎。这些伤害使社会不平等和偏见延续。",
    diagram: "",
    terms: ["ai_ethics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 133,
    q: "What is the principle of beneficence in AI ethics?",
    qChinese: "AI伦理中的善行原则是什么？",
    options: [
      "A) AI systems should benefit only their creators",
      "B) AI should be designed and used to benefit individuals and society as a whole",
      "C) AI research should only be funded by benefactors",
      "D) AI should maximize profit for technology companies"
    ],
    optionsChinese: [
      "A) AI系统应该只惠及其创造者",
      "B) AI应被设计和使用以惠及个人和整个社会",
      "C) AI研究应仅由捐助者资助",
      "D) AI应为科技公司最大化利润"
    ],
    answer: 1,
    explanation: "The principle of beneficence requires that AI systems be designed and deployed to create positive outcomes for individuals and society. This includes promoting well-being, preventing harm, and ensuring that AI development serves the common good. It is one of the core ethical principles alongside non-maleficence, autonomy, justice, and transparency.",
    explanationChinese: "善行原则要求AI系统被设计和部署以为个人和社会创造积极结果。这包括促进福祉、防止伤害和确保AI发展服务于公共利益。它是核心伦理原则之一，与无害、自主、正义和透明并列。",
    diagram: "",
    terms: ["ai_ethics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 134,
    q: "What is model auditing in AI ethics?",
    qChinese: "AI伦理中的模型审计是什么？",
    options: [
      "A) Auditing the financial cost of AI models",
      "B) Counting the number of parameters in a model",
      "C) Listening to AI model outputs through audio",
      "D) Systematically evaluating AI models for bias, fairness, safety, and compliance"
    ],
    optionsChinese: [
      "A) 审计AI模型的财务成本",
      "B) 计算模型中的参数数量",
      "C) 通过音频收听AI模型输出",
      "D) 系统地评估AI模型的偏见、公平性、安全性和合规性"
    ],
    answer: 3,
    explanation: "Model auditing involves systematically evaluating AI systems for bias, fairness, safety, and regulatory compliance. Audits may include testing performance across demographic groups, examining training data, reviewing development processes, and assessing potential harms. Independent third-party audits are increasingly recognized as essential for responsible AI deployment.",
    explanationChinese: "模型审计涉及系统地评估AI系统的偏见、公平性、安全性和监管合规性。审计可能包括测试跨人口群体的性能、检查训练数据、审查开发过程和评估潜在危害。独立的第三方审计日益被认为是负责任AI部署的必要条件。",
    diagram: "",
    terms: ["ai_ethics", "mlops"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 135,
    q: "What is the environmental impact of AI?",
    qChinese: "AI的环境影响是什么？",
    options: [
      "A) AI has no environmental impact",
      "B) Training large AI models consumes significant energy and contributes to carbon emissions",
      "C) AI always reduces environmental damage",
      "D) AI only affects the environment through hardware manufacturing"
    ],
    optionsChinese: [
      "A) AI没有环境影响",
      "B) 训练大型AI模型消耗大量能源并产生碳排放",
      "C) AI总是减少环境损害",
      "D) AI仅通过硬件制造影响环境"
    ],
    answer: 1,
    explanation: "Training large AI models requires enormous computational resources and energy consumption, contributing to carbon emissions. A single large language model training run can emit as much CO2 as multiple cars over their lifetimes. This raises ethical questions about the environmental sustainability of AI development and the need for more energy-efficient approaches.",
    explanationChinese: "训练大型AI模型需要巨大的计算资源和能源消耗，产生碳排放。单次大型语言模型训练运行可能排放与多辆汽车整个使用寿命一样多的CO2。这引发了关于AI发展环境可持续性和需要更节能方法的伦理问题。",
    diagram: "",
    terms: ["ai_ethics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 136,
    q: "What is Explainable AI (XAI)?",
    qChinese: "什么是可解释AI（XAI）？",
    options: [
      "A) AI methods and techniques that make model decisions understandable to humans",
      "B) AI that explains general knowledge to users",
      "C) AI that generates explanatory documents",
      "D) AI systems that only use simple algorithms"
    ],
    optionsChinese: [
      "A) 使模型决策对人类可理解的AI方法和技术",
      "B) 向用户解释一般知识的AI",
      "C) 生成解释性文档的AI",
      "D) 仅使用简单算法的AI系统"
    ],
    answer: 0,
    explanation: "Explainable AI encompasses methods and techniques that make AI system decisions transparent and understandable to humans. XAI aims to provide insights into how models make predictions, which features are important, and why specific decisions are made. This builds trust, enables debugging, and meets regulatory requirements for AI accountability.",
    explanationChinese: "可解释AI包含使AI系统决策对人类透明和可理解的方法和技术。XAI旨在提供模型如何做出预测、哪些特征重要以及为什么做出特定决策的洞察。这建立了信任，支持调试，并满足AI问责制的监管要求。",
    diagram: "",
    terms: ["explainable_ai"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 137,
    q: "What is LIME (Local Interpretable Model-agnostic Explanations)?",
    qChinese: "什么是LIME（局部可解释模型无关解释）？",
    options: [
      "A) A citrus-flavored AI framework",
      "B) A lossless image compression method for AI",
      "C) A technique that explains individual predictions by approximating the model locally with a simple model",
      "D) A programming language for interpretable models"
    ],
    optionsChinese: [
      "A) 柑橘味的AI框架",
      "B) AI的无损图像压缩方法",
      "C) 通过用简单模型局部近似来解释个别预测的技术",
      "D) 可解释模型的编程语言"
    ],
    answer: 2,
    explanation: "LIME explains individual predictions by creating a local, interpretable model (like linear regression) around the prediction point. It perturbs input features, observes changes in predictions, and fits a simple model to these perturbations. LIME is model-agnostic, working with any classifier, and highlights which features most influenced a specific decision.",
    explanationChinese: "LIME通过在预测点周围创建局部可解释模型（如线性回归）来解释个别预测。它扰动输入特征，观察预测的变化，并将简单模型拟合到这些扰动。LIME是模型无关的，适用于任何分类器，突出哪些特征最影响了特定决策。",
    diagram: "",
    terms: ["explainable_ai"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 138,
    q: "What is SHAP (SHapley Additive exPlanations)?",
    qChinese: "什么是SHAP（SHapley加性解释）？",
    options: [
      "A) A shape recognition algorithm",
      "B) A sharpening filter for AI images",
      "C) A method based on game theory that assigns each feature a contribution value to a prediction",
      "D) A shallow learning approach to predictions"
    ],
    optionsChinese: [
      "A) 形状识别算法",
      "B) AI图像的锐化滤镜",
      "C) 基于博弈论为每个特征分配对预测贡献值的方法",
      "D) 浅层学习预测方法"
    ],
    answer: 2,
    explanation: "SHAP uses Shapley values from cooperative game theory to assign each feature a fair contribution to a prediction. It provides consistent, locally accurate attributions with theoretical guarantees. SHAP unifies several existing explanation methods and offers both local explanations for individual predictions and global feature importance summaries.",
    explanationChinese: "SHAP使用合作博弈论中的Shapley值为每个特征分配对预测的公平贡献。它提供一致的、局部准确的归因和理论保证。SHAP统一了几种现有的解释方法，提供个别预测的局部解释和全局特征重要性摘要。",
    diagram: "",
    terms: ["explainable_ai"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 139,
    q: "What is the difference between interpretability and explainability?",
    qChinese: "可解释性和可说明性有什么区别？",
    options: [
      "A) They are identical concepts",
      "B) Interpretability is about code quality; explainability is about documentation",
      "C) Explainability is for users; interpretability is for developers",
      "D) Interpretability means the model is inherently understandable; explainability provides post-hoc explanations"
    ],
    optionsChinese: [
      "A) 它们是相同的概念",
      "B) 可解释性是关于代码质量；可说明性是关于文档",
      "C) 可说明性是为用户的；可解释性是为开发者的",
      "D) 可解释性意味着模型本质上可理解；可说明性提供事后解释"
    ],
    answer: 3,
    explanation: "Interpretability refers to models that are inherently transparent and understandable, like decision trees or linear regression. Explainability involves providing post-hoc explanations for complex black-box models using external methods like LIME or SHAP. Interpretable models do not need additional explanation tools; explainability adds understanding to opaque models.",
    explanationChinese: "可解释性是指本质上透明和可理解的模型，如决策树或线性回归。可说明性涉及使用LIME或SHAP等外部方法为复杂黑箱模型提供事后解释。可解释模型不需要额外的解释工具；可说明性为不透明的模型增加理解。",
    diagram: "",
    terms: ["explainable_ai"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 140,
    q: "What is a saliency map in XAI?",
    qChinese: "XAI中的显著性图是什么？",
    options: [
      "A) A visualization showing which input regions most influence a model's prediction",
      "B) A geographical map showing AI deployment locations",
      "C) A map of salary data for AI engineers",
      "D) A network topology diagram"
    ],
    optionsChinese: [
      "A) 显示哪些输入区域最影响模型预测的可视化",
      "B) 显示AI部署位置的地理图",
      "C) AI工程师薪资数据的地图",
      "D) 网络拓扑图"
    ],
    answer: 0,
    explanation: "A saliency map highlights which parts of an input (such as pixels in an image) had the greatest influence on a model's prediction. It computes gradients of the output with respect to the input, creating a visual overlay that shows attention areas. Saliency maps help verify that models focus on relevant features rather than spurious correlations.",
    explanationChinese: "显著性图突出显示输入的哪些部分（如图像中的像素）对模型预测影响最大。它计算输出相对于输入的梯度，创建显示注意力区域的视觉叠加。显著性图帮助验证模型关注相关特征而非虚假相关性。",
    diagram: "",
    terms: ["explainable_ai"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 141,
    q: "What is Grad-CAM?",
    qChinese: "什么是Grad-CAM？",
    options: [
      "A) A camera with gradient sensors",
      "B) A gradient descent optimization algorithm",
      "C) A graduation ceremony tracking system",
      "D) A technique producing visual explanations for CNN decisions using gradient information"
    ],
    optionsChinese: [
      "A) 具有梯度传感器的摄像头",
      "B) 梯度下降优化算法",
      "C) 毕业典礼跟踪系统",
      "D) 使用梯度信息为CNN决策生成视觉解释的技术"
    ],
    answer: 3,
    explanation: "Grad-CAM (Gradient-weighted Class Activation Mapping) produces coarse visual explanations for CNN predictions by using gradient information flowing into the final convolutional layer. It highlights important regions in the input image that contributed to a specific prediction. Grad-CAM is model-specific but widely used for understanding CNN-based image classification.",
    explanationChinese: "Grad-CAM（梯度加权类激活映射）通过使用流入最终卷积层的梯度信息，为CNN预测生成粗略的视觉解释。它突出显示输入图像中对特定预测有贡献的重要区域。Grad-CAM是模型特定的，但广泛用于理解基于CNN的图像分类。",
    diagram: "",
    terms: ["explainable_ai"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 142,
    q: "What are attention mechanisms in the context of XAI?",
    qChinese: "XAI背景下的注意力机制是什么？",
    options: [
      "A) Mechanisms for drawing user attention to AI products",
      "B) Alert systems in AI monitoring dashboards",
      "C) Neural network components that learn to focus on relevant input parts, providing interpretability",
      "D) Human attention span measurements for AI interfaces"
    ],
    optionsChinese: [
      "A) 吸引用户关注AI产品的机制",
      "B) AI监控仪表板中的警报系统",
      "C) 学习关注相关输入部分的神经网络组件，提供可解释性",
      "D) AI界面的人类注意力时间测量"
    ],
    answer: 2,
    explanation: "Attention mechanisms in neural networks learn to weight different parts of the input based on their relevance to the task. In XAI, attention weights provide a form of interpretability by showing which input elements the model considers most important. However, attention weights do not always faithfully reflect the true reasoning process of the model.",
    explanationChinese: "神经网络中的注意力机制学习根据与任务的相关性对输入的不同部分进行加权。在XAI中，注意力权重通过显示模型认为最重要的输入元素提供一种可解释性形式。然而，注意力权重并不总是忠实地反映模型的真正推理过程。",
    diagram: "",
    terms: ["explainable_ai"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 143,
    q: "What is counterfactual explanation in XAI?",
    qChinese: "XAI中的反事实解释是什么？",
    options: [
      "A) Explaining a decision by describing what minimal changes would lead to a different outcome",
      "B) An explanation that counts the number of facts used",
      "C) An explanation that contradicts the model's prediction",
      "D) A factual summary of the model's architecture"
    ],
    optionsChinese: [
      "A) 通过描述什么最小变化会导致不同结果来解释决策",
      "B) 计算使用的事实数量的解释",
      "C) 与模型预测矛盾的解释",
      "D) 模型架构的事实总结"
    ],
    answer: 0,
    explanation: "Counterfactual explanations describe the smallest changes to input features that would alter the model's prediction. For example, 'Your loan was denied; it would have been approved if your income were $5000 higher.' These explanations are intuitive, actionable, and provide guidance on how to achieve a desired outcome from the AI system.",
    explanationChinese: "反事实解释描述改变模型预测所需的最小输入特征变化。例如，'您的贷款被拒绝了；如果您的收入高5000美元就会被批准。'这些解释是直观的、可操作的，并提供了如何从AI系统获得期望结果的指导。",
    diagram: "",
    terms: ["explainable_ai"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 144,
    q: "What is feature importance in model interpretation?",
    qChinese: "模型解释中的特征重要性是什么？",
    options: [
      "A) Ranking which input features have the greatest impact on model predictions",
      "B) The importance of adding new features to software",
      "C) The importance of feature engineering in data science",
      "D) A priority ranking for AI product features"
    ],
    optionsChinese: [
      "A) 排列哪些输入特征对模型预测影响最大",
      "B) 向软件添加新功能的重要性",
      "C) 数据科学中特征工程的重要性",
      "D) AI产品功能的优先级排名"
    ],
    answer: 0,
    explanation: "Feature importance quantifies how much each input feature contributes to a model's predictions. Methods include permutation importance, which measures performance drop when features are shuffled, and impurity-based importance in tree models. Understanding feature importance helps validate model behavior and identify potential biases in the decision-making process.",
    explanationChinese: "特征重要性量化每个输入特征对模型预测的贡献程度。方法包括排列重要性（衡量特征被打乱时性能下降）和树模型中基于不纯度的重要性。理解特征重要性有助于验证模型行为并识别决策过程中的潜在偏见。",
    diagram: "",
    terms: ["explainable_ai"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 145,
    q: "What is an inherently interpretable model?",
    qChinese: "什么是固有可解释模型？",
    options: [
      "A) Any model that produces high accuracy",
      "B) A model that translates between languages",
      "C) A model that interprets user input",
      "D) A model whose decision-making process is transparent by design, like decision trees"
    ],
    optionsChinese: [
      "A) 产生高准确度的任何模型",
      "B) 在语言之间翻译的模型",
      "C) 解释用户输入的模型",
      "D) 设计上决策过程透明的模型，如决策树"
    ],
    answer: 3,
    explanation: "Inherently interpretable models are transparent by design, allowing humans to directly understand how predictions are made. Examples include linear regression, logistic regression, decision trees, and rule-based systems. These models sacrifice some predictive power compared to complex models but offer clear, auditable decision-making processes crucial for high-stakes applications.",
    explanationChinese: "固有可解释模型在设计上是透明的，允许人类直接理解如何做出预测。例子包括线性回归、逻辑回归、决策树和基于规则的系统。与复杂模型相比，这些模型牺牲了一些预测能力，但提供清晰、可审计的决策过程，对高风险应用至关重要。",
    diagram: "",
    terms: ["explainable_ai"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 146,
    q: "What is the fidelity of an explanation in XAI?",
    qChinese: "XAI中解释的保真度是什么？",
    options: [
      "A) The loyalty of an AI system to its developers",
      "B) How accurately an explanation reflects the true behavior of the underlying model",
      "C) The audio quality of AI voice assistants",
      "D) The resolution of visualizations produced by AI"
    ],
    optionsChinese: [
      "A) AI系统对其开发者的忠诚度",
      "B) 解释多准确地反映底层模型的真实行为",
      "C) AI语音助手的音频质量",
      "D) AI产生的可视化的分辨率"
    ],
    answer: 1,
    explanation: "Fidelity measures how accurately a post-hoc explanation represents the actual behavior of the underlying model. High-fidelity explanations faithfully capture the model's reasoning process, while low-fidelity ones may be misleading. Evaluating fidelity is essential because an unfaithful explanation could provide false confidence in a model's decision-making process.",
    explanationChinese: "保真度衡量事后解释多准确地代表底层模型的实际行为。高保真度解释忠实地捕获模型的推理过程，而低保真度解释可能具有误导性。评估保真度至关重要，因为不忠实的解释可能对模型的决策过程提供错误的信心。",
    diagram: "",
    terms: ["explainable_ai"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 147,
    q: "What is partial dependence plot (PDP)?",
    qChinese: "什么是部分依赖图（PDP）？",
    options: [
      "A) A plot showing partial data in a dataset",
      "B) A dependency graph for software packages",
      "C) A visualization showing the marginal effect of one or two features on predicted outcome",
      "D) A plot of partial derivatives in calculus"
    ],
    optionsChinese: [
      "A) 显示数据集中部分数据的图",
      "B) 软件包的依赖图",
      "C) 显示一个或两个特征对预测结果边际效应的可视化",
      "D) 微积分中偏导数的图"
    ],
    answer: 2,
    explanation: "A Partial Dependence Plot shows the marginal effect of one or two features on the predicted outcome of a machine learning model, averaging over the values of all other features. PDPs provide global interpretability by revealing the relationship between features and predictions, helping identify whether the relationship is linear, monotonic, or complex.",
    explanationChinese: "部分依赖图显示一个或两个特征对机器学习模型预测结果的边际效应，对所有其他特征的值进行平均。PDP通过揭示特征和预测之间的关系提供全局可解释性，帮助识别关系是线性的、单调的还是复杂的。",
    diagram: "",
    terms: ["explainable_ai"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 148,
    q: "What is ANCHOR as an explanation method?",
    qChinese: "作为解释方法的ANCHOR是什么？",
    options: [
      "A) A method for anchoring ships using AI",
      "B) A technique for fixing model weights during training",
      "C) A rule-based explanation that provides sufficient conditions for a prediction to hold",
      "D) An algorithm for anchor text extraction"
    ],
    optionsChinese: [
      "A) 使用AI锚定船只的方法",
      "B) 训练期间固定模型权重的技术",
      "C) 提供预测成立充分条件的基于规则的解释",
      "D) 锚文本提取算法"
    ],
    answer: 2,
    explanation: "Anchors provide rule-based explanations that specify sufficient conditions under which a prediction holds with high confidence. Unlike LIME, which provides feature weights, anchors provide clear if-then rules. For example, 'IF income > $50K AND employment = full-time, THEN loan approved.' These rules are intuitive and easy to verify.",
    explanationChinese: "Anchor提供基于规则的解释，指定预测以高置信度成立的充分条件。与提供特征权重的LIME不同，anchor提供清晰的if-then规则。例如，'如果收入 > $50K且就业 = 全职，则贷款批准。'这些规则直观且易于验证。",
    diagram: "",
    terms: ["explainable_ai"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 149,
    q: "What is the trade-off between accuracy and interpretability?",
    qChinese: "准确性和可解释性之间的权衡是什么？",
    options: [
      "A) Complex models often achieve higher accuracy but are harder to interpret",
      "B) More accurate models are always more interpretable",
      "C) Interpretability always reduces accuracy",
      "D) There is no trade-off between them"
    ],
    optionsChinese: [
      "A) 复杂模型通常实现更高的准确性但更难解释",
      "B) 更准确的模型总是更可解释",
      "C) 可解释性总是降低准确性",
      "D) 它们之间没有权衡"
    ],
    answer: 0,
    explanation: "There is often a perceived trade-off between model accuracy and interpretability. Simple, interpretable models like linear regression may underperform complex deep learning models. However, recent research shows this trade-off is not always necessary, as carefully designed interpretable models can sometimes match the performance of black-box models in specific domains.",
    explanationChinese: "在模型准确性和可解释性之间通常存在感知的权衡。简单的可解释模型如线性回归可能不如复杂的深度学习模型。然而，最近的研究表明这种权衡并不总是必要的，因为精心设计的可解释模型有时可以在特定领域匹配黑箱模型的性能。",
    diagram: "",
    terms: ["explainable_ai"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 150,
    q: "What is concept-based explanation?",
    qChinese: "什么是基于概念的解释？",
    options: [
      "A) Explaining model decisions using high-level human-understandable concepts",
      "B) Explaining AI concepts to beginners",
      "C) A conceptual overview of model architecture",
      "D) The concept phase of AI product development"
    ],
    optionsChinese: [
      "A) 使用人类可理解的高级概念解释模型决策",
      "B) 向初学者解释AI概念",
      "C) 模型架构的概念概述",
      "D) AI产品开发的概念阶段"
    ],
    answer: 0,
    explanation: "Concept-based explanations describe model decisions using high-level, human-understandable concepts rather than raw features. Methods like TCAV (Testing with Concept Activation Vectors) measure how sensitive a prediction is to specific concepts. For example, explaining an image classifier's decision in terms of 'stripes' or 'color' rather than individual pixel values.",
    explanationChinese: "基于概念的解释使用高级、人类可理解的概念而非原始特征来描述模型决策。TCAV（概念激活向量测试）等方法衡量预测对特定概念的敏感度。例如，用'条纹'或'颜色'而非单个像素值来解释图像分类器的决策。",
    diagram: "",
    terms: ["explainable_ai"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 151,
    q: "What is model distillation for explainability?",
    qChinese: "用于可解释性的模型蒸馏是什么？",
    options: [
      "A) Distilling chemical compounds using AI",
      "B) Training a simpler, interpretable model to mimic a complex model's behavior",
      "C) Removing impurities from training data",
      "D) Condensing model documentation"
    ],
    optionsChinese: [
      "A) 使用AI蒸馏化合物",
      "B) 训练更简单、可解释的模型来模仿复杂模型的行为",
      "C) 从训练数据中去除杂质",
      "D) 精简模型文档"
    ],
    answer: 1,
    explanation: "Model distillation for explainability involves training a simpler, interpretable student model to approximate the predictions of a complex teacher model. The student model, being transparent, serves as a global explanation of the teacher's behavior. This approach balances the accuracy of complex models with the interpretability of simpler ones.",
    explanationChinese: "用于可解释性的模型蒸馏涉及训练更简单、可解释的学生模型来近似复杂教师模型的预测。学生模型由于其透明性，作为教师行为的全局解释。这种方法平衡了复杂模型的准确性和简单模型的可解释性。",
    diagram: "",
    terms: ["explainable_ai"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 152,
    q: "What is the role of XAI in healthcare?",
    qChinese: "XAI在医疗保健中的作用是什么？",
    options: [
      "A) Replacing all doctors with AI",
      "B) Automating hospital administration only",
      "C) Enabling clinicians to understand and trust AI-assisted diagnoses and treatment recommendations",
      "D) Providing entertainment in waiting rooms"
    ],
    optionsChinese: [
      "A) 用AI替代所有医生",
      "B) 仅自动化医院管理",
      "C) 使临床医生能够理解和信任AI辅助的诊断和治疗建议",
      "D) 在候诊室提供娱乐"
    ],
    answer: 2,
    explanation: "XAI in healthcare enables clinicians to understand why AI systems make specific diagnostic or treatment recommendations. This is critical for trust, regulatory compliance, and patient safety. Doctors need to verify AI suggestions, explain decisions to patients, and identify potential errors. Explainability supports human-AI collaboration rather than blind reliance on AI.",
    explanationChinese: "医疗保健中的XAI使临床医生能够理解AI系统为什么做出特定的诊断或治疗建议。这对于信任、监管合规和患者安全至关重要。医生需要验证AI建议、向患者解释决策并识别潜在错误。可解释性支持人机协作而非盲目依赖AI。",
    diagram: "",
    terms: ["explainable_ai", "ai_ethics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 153,
    q: "What is an integrated gradient in XAI?",
    qChinese: "XAI中的积分梯度是什么？",
    options: [
      "A) A method for integrating multiple gradient descent algorithms",
      "B) An attribution method that computes feature importance by integrating gradients along a path",
      "C) A technique for combining gradients from multiple models",
      "D) A gradient that is integrated into the model architecture"
    ],
    optionsChinese: [
      "A) 集成多个梯度下降算法的方法",
      "B) 通过沿路径积分梯度来计算特征重要性的归因方法",
      "C) 结合多个模型梯度的技术",
      "D) 集成到模型架构中的梯度"
    ],
    answer: 1,
    explanation: "Integrated Gradients is an attribution method that assigns importance scores to input features by computing the path integral of gradients from a baseline input to the actual input. It satisfies desirable properties like sensitivity and implementation invariance, providing theoretically grounded feature attributions for deep neural network predictions.",
    explanationChinese: "积分梯度是一种归因方法，通过计算从基线输入到实际输入的梯度路径积分来为输入特征分配重要性分数。它满足敏感性和实现不变性等理想属性，为深度神经网络预测提供理论基础的特征归因。",
    diagram: "",
    terms: ["explainable_ai"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 154,
    q: "What is local vs. global explanation?",
    qChinese: "局部解释与全局解释有什么区别？",
    options: [
      "A) Local explanations are in local language; global in English",
      "B) Local is for small models; global for large models",
      "C) Local explains individual predictions; global explains overall model behavior",
      "D) They refer to the geographic scope of AI deployment"
    ],
    optionsChinese: [
      "A) 局部解释使用当地语言；全局使用英语",
      "B) 局部用于小模型；全局用于大模型",
      "C) 局部解释个别预测；全局解释整体模型行为",
      "D) 它们指的是AI部署的地理范围"
    ],
    answer: 2,
    explanation: "Local explanations describe why a specific prediction was made for a particular input (e.g., LIME, SHAP for individual instances). Global explanations describe the overall behavior and patterns of the model across all inputs (e.g., feature importance rankings, partial dependence plots). Both perspectives are needed for comprehensive model understanding.",
    explanationChinese: "局部解释描述为什么对特定输入做出特定预测（如LIME、针对个别实例的SHAP）。全局解释描述模型在所有输入上的整体行为和模式（如特征重要性排名、部分依赖图）。全面理解模型需要两种视角。",
    diagram: "",
    terms: ["explainable_ai"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 155,
    q: "What is the challenge of explaining deep learning models?",
    qChinese: "解释深度学习模型的挑战是什么？",
    options: [
      "A) Deep learning models are too simple to explain",
      "B) Deep learning models do not make predictions",
      "C) Millions of parameters and nonlinear interactions make it difficult to trace decision logic",
      "D) Deep learning only works on images, limiting explanation needs"
    ],
    optionsChinese: [
      "A) 深度学习模型太简单无需解释",
      "B) 深度学习模型不做预测",
      "C) 数百万参数和非线性交互使追踪决策逻辑变得困难",
      "D) 深度学习仅适用于图像，限制了解释需求"
    ],
    answer: 2,
    explanation: "Deep learning models contain millions or billions of parameters with complex nonlinear interactions across many layers, making it extremely difficult to understand how inputs map to outputs. The distributed nature of learned representations means no single component has an easily interpretable role, requiring specialized post-hoc explanation methods.",
    explanationChinese: "深度学习模型包含数百万或数十亿参数，在许多层之间具有复杂的非线性交互，使得理解输入如何映射到输出极其困难。学习表示的分布式特性意味着没有单个组件具有易于解释的角色，需要专门的事后解释方法。",
    diagram: "",
    terms: ["explainable_ai"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 156,
    q: "What is MLOps?",
    qChinese: "什么是MLOps？",
    options: [
      "A) A programming language for machine learning",
      "B) A type of machine learning algorithm",
      "C) The practice of combining ML, DevOps, and data engineering for reliable ML system deployment",
      "D) A cloud computing service provider"
    ],
    optionsChinese: [
      "A) 用于机器学习的编程语言",
      "B) 一种机器学习算法",
      "C) 结合ML、DevOps和数据工程以实现可靠ML系统部署的实践",
      "D) 云计算服务提供商"
    ],
    answer: 2,
    explanation: "MLOps (Machine Learning Operations) combines machine learning, DevOps, and data engineering practices to reliably deploy and maintain ML systems in production. It addresses the full lifecycle including data management, model training, testing, deployment, monitoring, and retraining. MLOps ensures reproducibility, scalability, and continuous improvement of ML systems.",
    explanationChinese: "MLOps（机器学习运维）结合机器学习、DevOps和数据工程实践，以可靠地部署和维护生产中的ML系统。它涵盖完整的生命周期，包括数据管理、模型训练、测试、部署、监控和重新训练。MLOps确保ML系统的可重复性、可扩展性和持续改进。",
    diagram: "",
    terms: ["mlops"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 157,
    q: "What is model serving in MLOps?",
    qChinese: "MLOps中的模型服务是什么？",
    options: [
      "A) Presenting a model at a conference",
      "B) Training a model on a server",
      "C) Making a trained model available for inference in production environments",
      "D) Backing up model files to a server"
    ],
    optionsChinese: [
      "A) 在会议上展示模型",
      "B) 在服务器上训练模型",
      "C) 使训练好的模型在生产环境中可用于推理",
      "D) 将模型文件备份到服务器"
    ],
    answer: 2,
    explanation: "Model serving is the process of deploying trained ML models so they can receive input data and return predictions in production. It involves creating APIs, managing compute resources, handling concurrent requests, and ensuring low latency. Tools like TensorFlow Serving, TorchServe, and Triton Inference Server facilitate efficient model serving at scale.",
    explanationChinese: "模型服务是部署训练好的ML模型以便它们可以在生产中接收输入数据并返回预测的过程。它涉及创建API、管理计算资源、处理并发请求和确保低延迟。TensorFlow Serving、TorchServe和Triton推理服务器等工具有助于大规模高效模型服务。",
    diagram: "",
    terms: ["mlops"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 158,
    q: "What is model drift?",
    qChinese: "什么是模型漂移？",
    options: [
      "A) A model physically moving between servers",
      "B) Drifting between different model architectures",
      "C) The lateral movement of a model's parameters",
      "D) Degradation in model performance over time due to changes in data patterns"
    ],
    optionsChinese: [
      "A) 模型在服务器之间物理移动",
      "B) 在不同模型架构之间漂移",
      "C) 模型参数的横向移动",
      "D) 由于数据模式变化导致模型性能随时间退化"
    ],
    answer: 3,
    explanation: "Model drift occurs when a deployed model's performance degrades over time because the statistical properties of the input data change. This can be data drift (input distribution changes), concept drift (the relationship between input and output changes), or both. Regular monitoring and retraining are essential to detect and address model drift.",
    explanationChinese: "模型漂移发生在部署模型的性能随时间退化时，因为输入数据的统计属性发生变化。这可以是数据漂移（输入分布变化）、概念漂移（输入和输出之间的关系变化）或两者兼有。定期监控和重新训练对于检测和解决模型漂移至关重要。",
    diagram: "",
    terms: ["mlops"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 159,
    q: "What is CI/CD for machine learning?",
    qChinese: "机器学习的CI/CD是什么？",
    options: [
      "A) Customer Integration / Customer Delivery",
      "B) Certified Intelligence / Certified Development",
      "C) Continuous Integration and Continuous Delivery applied to ML pipelines",
      "D) Cloud Infrastructure / Cloud Deployment"
    ],
    optionsChinese: [
      "A) 客户集成/客户交付",
      "B) 认证智能/认证开发",
      "C) 应用于ML管道的持续集成和持续交付",
      "D) 云基础设施/云部署"
    ],
    answer: 2,
    explanation: "CI/CD for ML extends traditional software CI/CD to include data validation, model training, testing, and deployment automation. Continuous Integration validates code and data changes, while Continuous Delivery automates model deployment. ML CI/CD also includes continuous training to automatically retrain models when data drift is detected or performance degrades.",
    explanationChinese: "ML的CI/CD将传统软件CI/CD扩展到包括数据验证、模型训练、测试和部署自动化。持续集成验证代码和数据更改，而持续交付自动化模型部署。ML CI/CD还包括持续训练，当检测到数据漂移或性能下降时自动重新训练模型。",
    diagram: "",
    terms: ["mlops"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 160,
    q: "What is a feature store?",
    qChinese: "什么是特征存储？",
    options: [
      "A) A centralized repository for storing, managing, and serving ML features",
      "B) A retail store for software features",
      "C) A database for storing user preferences",
      "D) A storage system for model weights"
    ],
    optionsChinese: [
      "A) 用于存储、管理和服务ML特征的集中存储库",
      "B) 软件功能的零售店",
      "C) 存储用户偏好的数据库",
      "D) 模型权重的存储系统"
    ],
    answer: 0,
    explanation: "A feature store is a centralized platform for managing and serving ML features consistently across training and inference. It handles feature computation, storage, versioning, and real-time serving. Feature stores like Feast and Tecton prevent training-serving skew by ensuring the same feature transformations are applied in both environments.",
    explanationChinese: "特征存储是一个集中平台，用于在训练和推理之间一致地管理和服务ML特征。它处理特征计算、存储、版本控制和实时服务。Feast和Tecton等特征存储通过确保在两种环境中应用相同的特征转换来防止训练-服务偏差。",
    diagram: "",
    terms: ["mlops"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 161,
    q: "What is model versioning?",
    qChinese: "什么是模型版本控制？",
    options: [
      "A) Tracking and managing different iterations of ML models with their metadata",
      "B) Creating different language versions of a model",
      "C) Versioning the documentation of AI systems",
      "D) Numbering AI product releases"
    ],
    optionsChinese: [
      "A) 跟踪和管理ML模型的不同迭代及其元数据",
      "B) 创建模型的不同语言版本",
      "C) AI系统文档的版本控制",
      "D) AI产品发布的编号"
    ],
    answer: 0,
    explanation: "Model versioning tracks different iterations of ML models along with their associated code, data, hyperparameters, and metrics. Tools like MLflow, DVC, and Weights & Biases enable versioning, making it possible to reproduce results, compare experiments, and rollback to previous model versions if issues are detected in production.",
    explanationChinese: "模型版本控制跟踪ML模型的不同迭代及其关联的代码、数据、超参数和指标。MLflow、DVC和Weights & Biases等工具支持版本控制，使得可以重现结果、比较实验，并在生产中检测到问题时回滚到之前的模型版本。",
    diagram: "",
    terms: ["mlops"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 162,
    q: "What is A/B testing for ML models?",
    qChinese: "ML模型的A/B测试是什么？",
    options: [
      "A) Comparing two model versions by routing traffic to each and measuring performance",
      "B) Testing model A and model B in isolation",
      "C) Testing models on datasets labeled A and B",
      "D) Alternating between training algorithms A and B"
    ],
    optionsChinese: [
      "A) 通过将流量路由到每个模型并衡量性能来比较两个模型版本",
      "B) 独立测试模型A和模型B",
      "C) 在标记为A和B的数据集上测试模型",
      "D) 在训练算法A和B之间交替"
    ],
    answer: 0,
    explanation: "A/B testing for ML models involves deploying two model versions simultaneously and routing a portion of production traffic to each. By comparing their performance metrics on real users, teams can make data-driven decisions about which model to fully deploy. This reduces risk and provides statistically significant evidence of improvement.",
    explanationChinese: "ML模型的A/B测试涉及同时部署两个模型版本，并将一部分生产流量路由到每个版本。通过比较它们在真实用户上的性能指标，团队可以做出关于完全部署哪个模型的数据驱动决策。这降低了风险并提供了统计显著的改进证据。",
    diagram: "",
    terms: ["mlops"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 163,
    q: "What is canary deployment for ML models?",
    qChinese: "ML模型的金丝雀部署是什么？",
    options: [
      "A) Deploying models in a bird-watching application",
      "B) Gradually rolling out a new model to a small percentage of users before full deployment",
      "C) Testing models in a canary island data center",
      "D) Using bird calls as training data"
    ],
    optionsChinese: [
      "A) 在观鸟应用中部署模型",
      "B) 在完全部署之前将新模型逐步推出到一小部分用户",
      "C) 在加那利群岛数据中心测试模型",
      "D) 使用鸟鸣作为训练数据"
    ],
    answer: 1,
    explanation: "Canary deployment gradually rolls out a new ML model to a small subset of users while monitoring for errors or performance degradation. If issues arise, the rollout is stopped and rolled back. This minimizes the blast radius of potential problems and provides early warning before the new model serves all production traffic.",
    explanationChinese: "金丝雀部署逐步将新ML模型推出到一小部分用户，同时监控错误或性能退化。如果出现问题，推出将被停止并回滚。这最小化了潜在问题的影响范围，并在新模型服务所有生产流量之前提供预警。",
    diagram: "",
    terms: ["mlops"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 164,
    q: "What is data lineage in MLOps?",
    qChinese: "MLOps中的数据血缘是什么？",
    options: [
      "A) The genetic lineage of data scientists",
      "B) A data structure used in linked lists",
      "C) The order in which data is stored in a database",
      "D) Tracking the origin, movement, and transformation of data throughout the ML pipeline"
    ],
    optionsChinese: [
      "A) 数据科学家的基因血统",
      "B) 链表中使用的数据结构",
      "C) 数据在数据库中存储的顺序",
      "D) 跟踪数据在整个ML管道中的来源、移动和转换"
    ],
    answer: 3,
    explanation: "Data lineage tracks the complete journey of data through the ML pipeline, from its original source through all transformations to its final use in model training or inference. It ensures reproducibility, facilitates debugging, supports regulatory compliance, and helps identify how data quality issues propagate through the system.",
    explanationChinese: "数据血缘跟踪数据在ML管道中的完整旅程，从其原始来源经过所有转换到最终在模型训练或推理中的使用。它确保可重复性、促进调试、支持监管合规，并帮助识别数据质量问题如何在系统中传播。",
    diagram: "",
    terms: ["mlops"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 165,
    q: "What is model monitoring in production?",
    qChinese: "生产中的模型监控是什么？",
    options: [
      "A) Continuously tracking model performance, data quality, and system health in production",
      "B) Watching a model train on a screen",
      "C) Monitoring the temperature of GPU hardware",
      "D) Recording model development meetings"
    ],
    optionsChinese: [
      "A) 持续跟踪生产中的模型性能、数据质量和系统健康",
      "B) 在屏幕上观看模型训练",
      "C) 监控GPU硬件的温度",
      "D) 记录模型开发会议"
    ],
    answer: 0,
    explanation: "Model monitoring continuously tracks deployed model performance, input data distributions, prediction distributions, and system metrics in production. It detects issues like data drift, concept drift, performance degradation, and system failures. Effective monitoring enables timely alerts and automated responses such as model retraining or rollback to prevent service degradation.",
    explanationChinese: "模型监控持续跟踪生产中部署模型的性能、输入数据分布、预测分布和系统指标。它检测数据漂移、概念漂移、性能退化和系统故障等问题。有效的监控支持及时警报和自动响应，如模型重新训练或回滚，以防止服务退化。",
    diagram: "",
    terms: ["mlops"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 166,
    q: "What is an ML pipeline?",
    qChinese: "什么是ML管道？",
    options: [
      "A) A physical pipe carrying data between computers",
      "B) A visualization of model parameters",
      "C) An automated workflow connecting data processing, training, evaluation, and deployment steps",
      "D) A network cable for ML systems"
    ],
    optionsChinese: [
      "A) 在计算机之间传输数据的物理管道",
      "B) 模型参数的可视化",
      "C) 连接数据处理、训练、评估和部署步骤的自动化工作流",
      "D) ML系统的网络电缆"
    ],
    answer: 2,
    explanation: "An ML pipeline is an automated sequence of steps that orchestrates the end-to-end ML workflow: data ingestion, preprocessing, feature engineering, model training, evaluation, and deployment. Tools like Kubeflow, Apache Airflow, and MLflow Pipelines automate these steps, ensuring consistency, reproducibility, and efficient iteration of the ML development process.",
    explanationChinese: "ML管道是一系列自动化步骤，编排端到端ML工作流：数据摄取、预处理、特征工程、模型训练、评估和部署。Kubeflow、Apache Airflow和MLflow Pipelines等工具自动化这些步骤，确保ML开发过程的一致性、可重复性和高效迭代。",
    diagram: "",
    terms: ["mlops"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 167,
    q: "What is containerization in ML deployment?",
    qChinese: "ML部署中的容器化是什么？",
    options: [
      "A) Putting ML hardware in shipping containers",
      "B) Containing the spread of errors in ML code",
      "C) Packaging models with their dependencies in isolated containers for consistent deployment",
      "D) Storing training data in container files"
    ],
    optionsChinese: [
      "A) 将ML硬件放入集装箱",
      "B) 遏制ML代码中错误的传播",
      "C) 将模型及其依赖项打包在隔离容器中以实现一致部署",
      "D) 将训练数据存储在容器文件中"
    ],
    answer: 2,
    explanation: "Containerization packages ML models with all their dependencies, libraries, and runtime configurations into isolated, portable containers using tools like Docker. This ensures consistent behavior across development, testing, and production environments. Kubernetes orchestrates containers at scale, enabling efficient deployment, scaling, and management of ML services.",
    explanationChinese: "容器化使用Docker等工具将ML模型及其所有依赖项、库和运行时配置打包到隔离的、可移植的容器中。这确保了开发、测试和生产环境之间的一致行为。Kubernetes大规模编排容器，实现ML服务的高效部署、扩展和管理。",
    diagram: "",
    terms: ["mlops"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 168,
    q: "What is experiment tracking in MLOps?",
    qChinese: "MLOps中的实验跟踪是什么？",
    options: [
      "A) Tracking scientific experiments in a laboratory",
      "B) Tracking the number of experiments conducted",
      "C) Monitoring experimental drugs with AI",
      "D) Recording and comparing hyperparameters, metrics, and artifacts across ML experiments"
    ],
    optionsChinese: [
      "A) 在实验室跟踪科学实验",
      "B) 跟踪进行的实验数量",
      "C) 用AI监控实验药物",
      "D) 记录和比较ML实验中的超参数、指标和工件"
    ],
    answer: 3,
    explanation: "Experiment tracking systematically records hyperparameters, metrics, model artifacts, and code versions for each ML experiment. Tools like MLflow, Weights & Biases, and Neptune enable comparison across runs, reproducibility of results, and collaboration among team members. This practice is essential for efficient and organized ML development.",
    explanationChinese: "实验跟踪系统地记录每个ML实验的超参数、指标、模型工件和代码版本。MLflow、Weights & Biases和Neptune等工具支持跨运行比较、结果可重复性和团队成员之间的协作。这种实践对于高效和有组织的ML开发至关重要。",
    diagram: "",
    terms: ["mlops"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 169,
    q: "What is model retraining strategy?",
    qChinese: "什么是模型重新训练策略？",
    options: [
      "A) Teaching the model developer new skills",
      "B) Repeating the initial training exactly",
      "C) Retraining users on how to use the model",
      "D) A plan for when and how to update deployed models with new data"
    ],
    optionsChinese: [
      "A) 教模型开发者新技能",
      "B) 完全重复初始训练",
      "C) 重新培训用户如何使用模型",
      "D) 关于何时以及如何用新数据更新部署模型的计划"
    ],
    answer: 3,
    explanation: "A model retraining strategy defines when and how deployed models are updated. Approaches include scheduled retraining (periodic updates), triggered retraining (when drift is detected), and online learning (continuous updates). The strategy must balance freshness with stability, considering validation requirements, computational costs, and potential regression risks.",
    explanationChinese: "模型重新训练策略定义何时以及如何更新部署模型。方法包括计划重新训练（定期更新）、触发重新训练（检测到漂移时）和在线学习（持续更新）。策略必须在新鲜度和稳定性之间取得平衡，考虑验证需求、计算成本和潜在回归风险。",
    diagram: "",
    terms: ["mlops"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 170,
    q: "What is data validation in ML pipelines?",
    qChinese: "ML管道中的数据验证是什么？",
    options: [
      "A) Checking if data is popular enough for training",
      "B) Validating user credentials for data access",
      "C) Automatically checking data quality, schema, and statistical properties before model training",
      "D) Marking data as valid or invalid manually"
    ],
    optionsChinese: [
      "A) 检查数据是否足够受欢迎以用于训练",
      "B) 验证用户访问数据的凭据",
      "C) 在模型训练之前自动检查数据质量、模式和统计属性",
      "D) 手动将数据标记为有效或无效"
    ],
    answer: 2,
    explanation: "Data validation automatically checks incoming data for quality issues, schema consistency, and statistical properties before it enters the ML pipeline. Tools like TensorFlow Data Validation (TFDV) and Great Expectations detect anomalies, missing values, distribution shifts, and schema violations that could degrade model performance if undetected.",
    explanationChinese: "数据验证在数据进入ML管道之前自动检查传入数据的质量问题、模式一致性和统计属性。TensorFlow Data Validation（TFDV）和Great Expectations等工具检测异常、缺失值、分布偏移和模式违规，如果未被检测到可能会降低模型性能。",
    diagram: "",
    terms: ["mlops"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 171,
    q: "What is shadow deployment?",
    qChinese: "什么是影子部署？",
    options: [
      "A) Deploying models in dark data centers",
      "B) A deployment that casts shadows on the monitoring dashboard",
      "C) Deploying models secretly without documentation",
      "D) Running a new model alongside the production model to compare results without affecting users"
    ],
    optionsChinese: [
      "A) 在暗数据中心部署模型",
      "B) 在监控仪表板上投射阴影的部署",
      "C) 在没有文档的情况下秘密部署模型",
      "D) 在生产模型旁边运行新模型以比较结果而不影响用户"
    ],
    answer: 3,
    explanation: "Shadow deployment runs a new model in parallel with the existing production model, processing the same real traffic. The shadow model's predictions are logged for comparison but not served to users. This allows teams to evaluate the new model's performance on real data without any risk to the production system or user experience.",
    explanationChinese: "影子部署在现有生产模型旁边并行运行新模型，处理相同的真实流量。影子模型的预测被记录用于比较但不提供给用户。这使团队能够在真实数据上评估新模型的性能，而不会对生产系统或用户体验产生任何风险。",
    diagram: "",
    terms: ["mlops"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 172,
    q: "What is model registry?",
    qChinese: "什么是模型注册表？",
    options: [
      "A) A centralized repository for managing model versions, metadata, and lifecycle stages",
      "B) A government registry of AI models",
      "C) A registration form for model developers",
      "D) A registry of model patents"
    ],
    optionsChinese: [
      "A) 用于管理模型版本、元数据和生命周期阶段的集中存储库",
      "B) AI模型的政府注册表",
      "C) 模型开发者的注册表格",
      "D) 模型专利的注册表"
    ],
    answer: 0,
    explanation: "A model registry is a centralized system for storing and managing trained ML models along with their metadata, version history, and lifecycle stage (staging, production, archived). It facilitates model governance, collaboration, and deployment by providing a single source of truth for all models within an organization.",
    explanationChinese: "模型注册表是一个集中系统，用于存储和管理训练好的ML模型及其元数据、版本历史和生命周期阶段（暂存、生产、归档）。它通过为组织内所有模型提供单一事实来源来促进模型治理、协作和部署。",
    diagram: "",
    terms: ["mlops"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 173,
    q: "What is training-serving skew?",
    qChinese: "什么是训练-服务偏差？",
    options: [
      "A) The model training faster than it can serve",
      "B) The server being skewed physically",
      "C) A skewed distribution of training data",
      "D) Differences between data processing in training and inference causing performance degradation"
    ],
    optionsChinese: [
      "A) 模型训练比服务更快",
      "B) 服务器物理上倾斜",
      "C) 训练数据的偏斜分布",
      "D) 训练和推理中数据处理的差异导致性能退化"
    ],
    answer: 3,
    explanation: "Training-serving skew occurs when there are differences between how data is processed during training and during inference in production. This can result from different feature computation code, data pipeline bugs, or stale features. The resulting inconsistency causes the model to perform worse in production than expected from training metrics.",
    explanationChinese: "训练-服务偏差发生在训练期间和生产中推理期间数据处理方式存在差异时。这可能源于不同的特征计算代码、数据管道错误或过时的特征。由此产生的不一致导致模型在生产中的表现比训练指标预期的更差。",
    diagram: "",
    terms: ["mlops"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 174,
    q: "What is model interpretability testing in MLOps?",
    qChinese: "MLOps中的模型可解释性测试是什么？",
    options: [
      "A) Testing if developers can interpret model code",
      "B) Systematically verifying that model explanations are accurate and consistent",
      "C) Testing the model in different programming languages",
      "D) Interpreting test results visually"
    ],
    optionsChinese: [
      "A) 测试开发者是否能解释模型代码",
      "B) 系统地验证模型解释是否准确和一致",
      "C) 在不同编程语言中测试模型",
      "D) 直观地解释测试结果"
    ],
    answer: 1,
    explanation: "Model interpretability testing verifies that model explanations are accurate, consistent, and meaningful. This includes checking that feature importance rankings are stable, explanations faithfully represent model behavior, and explanations are understandable to stakeholders. It is part of comprehensive ML testing that goes beyond just accuracy metrics.",
    explanationChinese: "模型可解释性测试验证模型解释是否准确、一致和有意义。这包括检查特征重要性排名是否稳定、解释是否忠实地代表模型行为，以及解释是否对利益相关者可理解。它是综合ML测试的一部分，超越了仅仅的准确性指标。",
    diagram: "",
    terms: ["mlops", "explainable_ai"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 175,
    q: "What is infrastructure as code (IaC) for ML?",
    qChinese: "ML的基础设施即代码（IaC）是什么？",
    options: [
      "A) Managing ML infrastructure through version-controlled configuration files",
      "B) Writing code on infrastructure diagrams",
      "C) Coding directly on production servers",
      "D) Infrastructure that generates code automatically"
    ],
    optionsChinese: [
      "A) 通过版本控制的配置文件管理ML基础设施",
      "B) 在基础设施图上编写代码",
      "C) 直接在生产服务器上编码",
      "D) 自动生成代码的基础设施"
    ],
    answer: 0,
    explanation: "Infrastructure as Code manages ML computing resources, networking, and deployment configurations through version-controlled code rather than manual processes. Tools like Terraform, Pulumi, and AWS CloudFormation define infrastructure declaratively, enabling reproducible environments, automated scaling, and consistent deployment across development, staging, and production environments.",
    explanationChinese: "基础设施即代码通过版本控制的代码而非手动过程来管理ML计算资源、网络和部署配置。Terraform、Pulumi和AWS CloudFormation等工具声明式地定义基础设施，支持可重复的环境、自动缩放以及开发、暂存和生产环境之间的一致部署。",
    diagram: "",
    terms: ["mlops"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 176,
    q: "What is federated learning?",
    qChinese: "什么是联邦学习？",
    options: [
      "A) Learning managed by federal government agencies",
      "B) A decentralized ML approach where models are trained across multiple devices without sharing raw data",
      "C) A federal education program for AI",
      "D) Training models on a single federated server"
    ],
    optionsChinese: [
      "A) 由联邦政府机构管理的学习",
      "B) 一种分散的ML方法，在多个设备上训练模型而不共享原始数据",
      "C) AI的联邦教育计划",
      "D) 在单个联邦服务器上训练模型"
    ],
    answer: 1,
    explanation: "Federated learning trains ML models across multiple decentralized devices or servers holding local data, without exchanging raw data. Only model updates (gradients) are shared with a central server for aggregation. Introduced by Google in 2016, it preserves data privacy while enabling collaborative model training across organizations or devices.",
    explanationChinese: "联邦学习在持有本地数据的多个分散设备或服务器上训练ML模型，而不交换原始数据。仅模型更新（梯度）与中央服务器共享以进行聚合。由谷歌于2016年引入，它在保护数据隐私的同时支持跨组织或设备的协作模型训练。",
    diagram: "",
    terms: ["federated_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 177,
    q: "What is the FedAvg algorithm?",
    qChinese: "什么是FedAvg算法？",
    options: [
      "A) An algorithm for averaging federal data",
      "B) An algorithm for averaging predictions from multiple models",
      "C) A feature averaging technique",
      "D) The foundational federated learning algorithm that averages model weights from multiple clients"
    ],
    optionsChinese: [
      "A) 平均联邦数据的算法",
      "B) 平均多个模型预测的算法",
      "C) 特征平均技术",
      "D) 从多个客户端平均模型权重的基础联邦学习算法"
    ],
    answer: 3,
    explanation: "FedAvg (Federated Averaging) is the foundational federated learning algorithm. Each client trains a model locally on its data for several epochs, then sends the model weights to a central server. The server averages these weights to create an updated global model, which is sent back to clients. This process repeats for multiple communication rounds.",
    explanationChinese: "FedAvg（联邦平均）是基础联邦学习算法。每个客户端在其数据上本地训练模型几个周期，然后将模型权重发送到中央服务器。服务器平均这些权重以创建更新的全局模型，然后发送回客户端。这个过程重复多个通信轮次。",
    diagram: "",
    terms: ["federated_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 178,
    q: "What is non-IID data in federated learning?",
    qChinese: "联邦学习中的非独立同分布数据是什么？",
    options: [
      "A) Data that has been incorrectly labeled",
      "B) Data distributed across clients that is not identically and independently distributed",
      "C) Data that cannot be identified",
      "D) Data stored in non-standard formats"
    ],
    optionsChinese: [
      "A) 被错误标记的数据",
      "B) 分布在客户端之间的非独立同分布的数据",
      "C) 无法被识别的数据",
      "D) 以非标准格式存储的数据"
    ],
    answer: 1,
    explanation: "Non-IID (non-Independent and Identically Distributed) data is a major challenge in federated learning where each client's local data distribution differs significantly. For example, different hospitals may have different patient demographics. Non-IID data can slow convergence and reduce model accuracy, requiring techniques like personalization and adaptive aggregation to handle.",
    explanationChinese: "非独立同分布（Non-IID）数据是联邦学习中的主要挑战，其中每个客户端的本地数据分布显著不同。例如，不同的医院可能有不同的患者人口统计特征。非IID数据可能减慢收敛速度并降低模型准确性，需要个性化和自适应聚合等技术来处理。",
    diagram: "",
    terms: ["federated_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 179,
    q: "What is secure aggregation in federated learning?",
    qChinese: "联邦学习中的安全聚合是什么？",
    options: [
      "A) Physically securing the aggregation server",
      "B) Aggregating security logs from multiple systems",
      "C) A cryptographic protocol ensuring the server only sees the aggregate of model updates, not individual contributions",
      "D) A firewall for federated learning systems"
    ],
    optionsChinese: [
      "A) 物理保护聚合服务器",
      "B) 从多个系统聚合安全日志",
      "C) 确保服务器只看到模型更新聚合而非个别贡献的加密协议",
      "D) 联邦学习系统的防火墙"
    ],
    answer: 2,
    explanation: "Secure aggregation is a cryptographic protocol used in federated learning to ensure the central server can only compute the aggregate of client model updates without accessing individual updates. This prevents the server from inferring private information from any single client's contribution, adding an extra layer of privacy protection.",
    explanationChinese: "安全聚合是联邦学习中使用的加密协议，确保中央服务器只能计算客户端模型更新的聚合，而无法访问个别更新。这防止服务器从任何单个客户端的贡献中推断私人信息，增加了额外的隐私保护层。",
    diagram: "",
    terms: ["federated_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 180,
    q: "What is homomorphic encryption in privacy-preserving AI?",
    qChinese: "隐私保护AI中的同态加密是什么？",
    options: [
      "A) Encryption that uses the same key for all data",
      "B) Encrypting data in a homogeneous format",
      "C) A simple password-based encryption method",
      "D) Encryption allowing computations on encrypted data without decrypting it first"
    ],
    optionsChinese: [
      "A) 对所有数据使用相同密钥的加密",
      "B) 以同质格式加密数据",
      "C) 简单的基于密码的加密方法",
      "D) 允许在不先解密的情况下对加密数据进行计算的加密"
    ],
    answer: 3,
    explanation: "Homomorphic encryption allows computations to be performed directly on encrypted data without decrypting it first. The results, when decrypted, match what would have been obtained from unencrypted data. This enables privacy-preserving machine learning where models can be trained or used for inference on sensitive data without ever exposing the plaintext.",
    explanationChinese: "同态加密允许直接在加密数据上进行计算而无需先解密。结果在解密后与从未加密数据获得的结果匹配。这支持隐私保护的机器学习，模型可以在敏感数据上训练或用于推理而无需暴露明文。",
    diagram: "",
    terms: ["federated_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 181,
    q: "What is differential privacy in federated learning?",
    qChinese: "联邦学习中的差分隐私是什么？",
    options: [
      "A) Different privacy settings for different users",
      "B) Adding calibrated noise to model updates to prevent individual data reconstruction",
      "C) The difference in privacy between federated and centralized learning",
      "D) A privacy policy document for federated systems"
    ],
    optionsChinese: [
      "A) 不同用户的不同隐私设置",
      "B) 向模型更新添加校准噪声以防止个体数据重建",
      "C) 联邦和集中学习之间的隐私差异",
      "D) 联邦系统的隐私政策文件"
    ],
    answer: 1,
    explanation: "Differential privacy in federated learning adds carefully calibrated noise to model updates before they are sent to the server. This provides mathematical guarantees that individual training data cannot be reconstructed from the shared gradients. The privacy budget (epsilon) controls the tradeoff between privacy protection and model utility.",
    explanationChinese: "联邦学习中的差分隐私在模型更新发送到服务器之前添加精心校准的噪声。这提供了数学保证，确保无法从共享梯度中重建个体训练数据。隐私预算（epsilon）控制隐私保护和模型效用之间的权衡。",
    diagram: "",
    terms: ["federated_learning", "ai_ethics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 182,
    q: "What is a gradient inversion attack?",
    qChinese: "什么是梯度反转攻击？",
    options: [
      "A) Reversing gradient descent to speed up training",
      "B) Reconstructing private training data from shared model gradients",
      "C) Inverting the direction of optimization",
      "D) Attacking the gradient computation hardware"
    ],
    optionsChinese: [
      "A) 反转梯度下降以加速训练",
      "B) 从共享模型梯度中重建私人训练数据",
      "C) 反转优化方向",
      "D) 攻击梯度计算硬件"
    ],
    answer: 1,
    explanation: "Gradient inversion attacks attempt to reconstruct private training data from the model gradients shared in federated learning. Attackers optimize a dummy input to produce gradients matching the observed ones, potentially recovering sensitive information like images or text. This motivates the use of differential privacy and secure aggregation as defenses.",
    explanationChinese: "梯度反转攻击试图从联邦学习中共享的模型梯度中重建私人训练数据。攻击者优化一个虚拟输入以产生与观察到的梯度匹配的梯度，可能恢复图像或文本等敏感信息。这促使使用差分隐私和安全聚合作为防御手段。",
    diagram: "",
    terms: ["federated_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 183,
    q: "What is cross-silo vs. cross-device federated learning?",
    qChinese: "跨机构与跨设备联邦学习有什么区别？",
    options: [
      "A) Cross-silo uses larger data; cross-device uses smaller data",
      "B) They are identical approaches",
      "C) Cross-silo involves few reliable organizations; cross-device involves many unreliable edge devices",
      "D) Cross-silo is outdated; cross-device is modern"
    ],
    optionsChinese: [
      "A) 跨机构使用更大的数据；跨设备使用更小的数据",
      "B) 它们是相同的方法",
      "C) 跨机构涉及少数可靠的组织；跨设备涉及许多不可靠的边缘设备",
      "D) 跨机构已过时；跨设备是现代的"
    ],
    answer: 2,
    explanation: "Cross-silo federated learning involves a small number of reliable organizational participants (hospitals, banks) with substantial data and compute. Cross-device involves millions of unreliable mobile or IoT devices with limited data each. They differ in communication patterns, fault tolerance needs, and aggregation strategies suited to their respective constraints.",
    explanationChinese: "跨机构联邦学习涉及少数拥有大量数据和计算资源的可靠组织参与者（医院、银行）。跨设备涉及数百万不可靠的移动或物联网设备，每个设备的数据有限。它们在通信模式、容错需求和适合各自约束的聚合策略方面有所不同。",
    diagram: "",
    terms: ["federated_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 184,
    q: "What is multi-party computation (MPC) for privacy?",
    qChinese: "用于隐私的多方计算（MPC）是什么？",
    options: [
      "A) Multiple parties computing different parts of the same model",
      "B) A method for distributing computation costs among parties",
      "C) Computing on multiple processors simultaneously",
      "D) A protocol enabling multiple parties to jointly compute a function over their inputs while keeping them private"
    ],
    optionsChinese: [
      "A) 多方计算同一模型的不同部分",
      "B) 在各方之间分配计算成本的方法",
      "C) 同时在多个处理器上计算",
      "D) 使多方能够在保持输入私密的同时共同计算函数的协议"
    ],
    answer: 3,
    explanation: "Secure Multi-Party Computation enables multiple parties to jointly compute a function over their inputs while keeping those inputs private from each other. No single party learns anything beyond the final output. MPC is used in privacy-preserving ML for collaborative model training and inference without revealing individual datasets to other participants.",
    explanationChinese: "安全多方计算使多方能够在保持输入对彼此私密的同时共同计算一个函数。没有任何一方能学到最终输出之外的任何信息。MPC用于隐私保护ML中的协作模型训练和推理，而不向其他参与者透露个人数据集。",
    diagram: "",
    terms: ["federated_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 185,
    q: "What is a trusted execution environment (TEE)?",
    qChinese: "什么是可信执行环境（TEE）？",
    options: [
      "A) A trusted team of AI engineers",
      "B) A secure hardware-based area in a processor that ensures code and data confidentiality",
      "C) A testing environment that is trusted for deployment",
      "D) An execution environment with no security concerns"
    ],
    optionsChinese: [
      "A) 受信任的AI工程师团队",
      "B) 处理器中基于硬件的安全区域，确保代码和数据的机密性",
      "C) 受信任的测试环境用于部署",
      "D) 没有安全问题的执行环境"
    ],
    answer: 1,
    explanation: "A Trusted Execution Environment is a secure area within a processor that guarantees code and data loaded inside are protected with respect to confidentiality and integrity. Technologies like Intel SGX and ARM TrustZone provide TEEs for privacy-preserving AI computation, ensuring sensitive data is processed securely even on untrusted infrastructure.",
    explanationChinese: "可信执行环境是处理器内的安全区域，保证内部加载的代码和数据在机密性和完整性方面受到保护。Intel SGX和ARM TrustZone等技术为隐私保护AI计算提供TEE，确保敏感数据即使在不受信任的基础设施上也能安全处理。",
    diagram: "",
    terms: ["federated_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 186,
    q: "What is synthetic data generation for privacy?",
    qChinese: "用于隐私的合成数据生成是什么？",
    options: [
      "A) Creating fake news articles",
      "B) Generating artificial data that mimics real data properties without containing actual personal information",
      "C) Synthesizing chemical data using AI",
      "D) Compressing data into a synthetic format"
    ],
    optionsChinese: [
      "A) 创建假新闻文章",
      "B) 生成模仿真实数据属性但不包含实际个人信息的人工数据",
      "C) 使用AI合成化学数据",
      "D) 将数据压缩成合成格式"
    ],
    answer: 1,
    explanation: "Synthetic data generation creates artificial datasets that preserve the statistical properties and patterns of real data without containing actual personal information. Techniques like GANs, variational autoencoders, and statistical modeling produce realistic synthetic data for model training and testing while preserving privacy and bypassing data sharing restrictions.",
    explanationChinese: "合成数据生成创建保留真实数据统计属性和模式但不包含实际个人信息的人工数据集。GAN、变分自编码器和统计建模等技术产生逼真的合成数据用于模型训练和测试，同时保护隐私并绕过数据共享限制。",
    diagram: "",
    terms: ["federated_learning", "ai_ethics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 187,
    q: "What is the communication efficiency challenge in federated learning?",
    qChinese: "联邦学习中的通信效率挑战是什么？",
    options: [
      "A) The high bandwidth cost of exchanging model updates between clients and server",
      "B) The difficulty of communicating FL concepts to stakeholders",
      "C) Communication barriers between FL researchers",
      "D) The speed of internet connections"
    ],
    optionsChinese: [
      "A) 客户端和服务器之间交换模型更新的高带宽成本",
      "B) 向利益相关者传达FL概念的困难",
      "C) FL研究人员之间的沟通障碍",
      "D) 互联网连接速度"
    ],
    answer: 0,
    explanation: "Communication efficiency is a major challenge in federated learning because transmitting model updates between many clients and the server requires significant bandwidth. Techniques like gradient compression, quantization, sparse updates, and reducing communication rounds help minimize the data transmitted while maintaining model quality across the distributed training process.",
    explanationChinese: "通信效率是联邦学习中的主要挑战，因为在许多客户端和服务器之间传输模型更新需要大量带宽。梯度压缩、量化、稀疏更新和减少通信轮次等技术有助于在分布式训练过程中最小化传输的数据同时保持模型质量。",
    diagram: "",
    terms: ["federated_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 188,
    q: "What is personalized federated learning?",
    qChinese: "什么是个性化联邦学习？",
    options: [
      "A) Personalizing the user interface of FL platforms",
      "B) Adapting the global model to perform well on each client's local data distribution",
      "C) Having each client train completely independently",
      "D) Personalizing the communication protocol for each client"
    ],
    optionsChinese: [
      "A) 个性化FL平台的用户界面",
      "B) 使全局模型适应在每个客户端的本地数据分布上表现良好",
      "C) 让每个客户端完全独立训练",
      "D) 为每个客户端个性化通信协议"
    ],
    answer: 1,
    explanation: "Personalized federated learning adapts the shared global model to perform well on each client's unique local data distribution. Techniques include fine-tuning the global model locally, meta-learning approaches, mixture of global and local models, and multi-task learning. This addresses the challenge of non-IID data that is typical in real-world federated settings.",
    explanationChinese: "个性化联邦学习使共享的全局模型适应在每个客户端独特的本地数据分布上表现良好。技术包括在本地微调全局模型、元学习方法、全局和本地模型的混合以及多任务学习。这解决了真实世界联邦设置中典型的非IID数据挑战。",
    diagram: "",
    terms: ["federated_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 189,
    q: "What is a Byzantine attack in federated learning?",
    qChinese: "联邦学习中的拜占庭攻击是什么？",
    options: [
      "A) An attack originating from Byzantine countries",
      "B) A historical attack strategy applied to AI",
      "C) An attack on the Byzantine consensus algorithm",
      "D) Malicious clients sending corrupted model updates to manipulate the global model"
    ],
    optionsChinese: [
      "A) 源自拜占庭国家的攻击",
      "B) 应用于AI的历史攻击策略",
      "C) 对拜占庭共识算法的攻击",
      "D) 恶意客户端发送损坏的模型更新以操纵全局模型"
    ],
    answer: 3,
    explanation: "Byzantine attacks in federated learning involve malicious clients sending corrupted or carefully crafted model updates to poison the global model. These attackers can degrade model accuracy, insert backdoors, or bias predictions. Byzantine-resilient aggregation methods like Krum, trimmed mean, and median-based aggregation help defend against such attacks.",
    explanationChinese: "联邦学习中的拜占庭攻击涉及恶意客户端发送损坏或精心制作的模型更新以毒化全局模型。这些攻击者可以降低模型准确性、插入后门或使预测产生偏见。Krum、修剪均值和基于中位数的聚合等拜占庭容错聚合方法有助于防御此类攻击。",
    diagram: "",
    terms: ["federated_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 190,
    q: "What are the main applications of federated learning?",
    qChinese: "联邦学习的主要应用是什么？",
    options: [
      "A) Mobile keyboard prediction, healthcare collaboration, and financial fraud detection",
      "B) Only academic research with no practical applications",
      "C) Exclusively self-driving cars",
      "D) Only government surveillance systems"
    ],
    optionsChinese: [
      "A) 移动键盘预测、医疗保健协作和金融欺诈检测",
      "B) 仅有学术研究没有实际应用",
      "C) 专门用于自动驾驶汽车",
      "D) 仅用于政府监控系统"
    ],
    answer: 0,
    explanation: "Federated learning is applied in mobile keyboard prediction (Google Gboard), healthcare (collaborative model training across hospitals without sharing patient data), financial services (fraud detection across banks), and autonomous vehicles. These applications benefit from collaborative learning while respecting data privacy regulations and institutional data sovereignty.",
    explanationChinese: "联邦学习应用于移动键盘预测（Google Gboard）、医疗保健（跨医院协作模型训练而不共享患者数据）、金融服务（跨银行欺诈检测）和自动驾驶车辆。这些应用受益于协作学习，同时尊重数据隐私法规和机构数据主权。",
    diagram: "",
    terms: ["federated_learning"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 191,
    q: "What is the Turing Test?",
    qChinese: "什么是图灵测试？",
    options: [
      "A) A test for computer hardware speed",
      "B) A test for measuring neural network depth",
      "C) A standardized test for AI engineering certification",
      "D) A test of a machine's ability to exhibit intelligent behavior indistinguishable from a human"
    ],
    optionsChinese: [
      "A) 计算机硬件速度测试",
      "B) 测量神经网络深度的测试",
      "C) AI工程认证的标准化考试",
      "D) 测试机器表现出与人类无法区分的智能行为的能力"
    ],
    answer: 3,
    explanation: "The Turing Test, proposed by Alan Turing in 1950, evaluates whether a machine can exhibit intelligent behavior indistinguishable from a human. A human evaluator converses with both a machine and a human without knowing which is which. If the evaluator cannot reliably distinguish them, the machine is said to pass the test.",
    explanationChinese: "图灵测试由艾伦·图灵于1950年提出，评估机器是否能表现出与人类无法区分的智能行为。人类评估者与机器和人类对话而不知道哪个是哪个。如果评估者无法可靠地区分它们，则机器被认为通过了测试。",
    diagram: "",
    terms: ["turing_test"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 192,
    q: "What are the main criticisms of the Turing Test?",
    qChinese: "图灵测试的主要批评是什么？",
    options: [
      "A) It is too easy for machines to pass",
      "B) It tests imitation rather than genuine intelligence, and is anthropocentric",
      "C) It requires too much computational power",
      "D) It can only be administered in English"
    ],
    optionsChinese: [
      "A) 机器太容易通过",
      "B) 它测试模仿而非真正的智能，且是人类中心的",
      "C) 它需要太多计算能力",
      "D) 它只能用英语进行"
    ],
    answer: 1,
    explanation: "Critics argue the Turing Test only measures imitation of human conversation, not genuine understanding or intelligence. It is anthropocentric, assuming human-like behavior equals intelligence. The Chinese Room argument demonstrates that passing the test does not require understanding. Additionally, it ignores other forms of intelligence like visual or robotic capabilities.",
    explanationChinese: "批评者认为图灵测试仅衡量对人类对话的模仿，而非真正的理解或智能。它是人类中心的，假设类人行为等于智能。中文房间论证表明通过测试不需要理解。此外，它忽略了视觉或机器人能力等其他形式的智能。",
    diagram: "",
    terms: ["turing_test", "artificial_intelligence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 193,
    q: "What is AI safety research?",
    qChinese: "什么是AI安全研究？",
    options: [
      "A) Research on protecting AI hardware from physical damage",
      "B) Research ensuring AI systems behave as intended and do not cause unintended harm",
      "C) Research on AI fire safety protocols",
      "D) Research on keeping AI labs physically secure"
    ],
    optionsChinese: [
      "A) 保护AI硬件免受物理损坏的研究",
      "B) 确保AI系统按预期行为且不造成意外伤害的研究",
      "C) 关于AI消防安全协议的研究",
      "D) 关于保持AI实验室物理安全的研究"
    ],
    answer: 1,
    explanation: "AI safety research focuses on ensuring AI systems behave as intended, remain under human control, and do not cause unintended harm. Key areas include alignment, robustness, interpretability, and safe exploration. As AI systems become more capable, safety research becomes increasingly critical to prevent catastrophic failures or misuse of powerful AI.",
    explanationChinese: "AI安全研究专注于确保AI系统按预期行为、保持在人类控制下且不造成意外伤害。关键领域包括对齐、鲁棒性、可解释性和安全探索。随着AI系统变得更加强大，安全研究对于防止强大AI的灾难性故障或滥用变得越来越关键。",
    diagram: "",
    terms: ["artificial_intelligence", "ai_ethics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 194,
    q: "What is the instrumental convergence thesis?",
    qChinese: "什么是工具性趋同论？",
    options: [
      "A) All AI instruments converge to the same design",
      "B) AI instruments become more similar over time",
      "C) AI algorithms converge to the same solution",
      "D) Sufficiently advanced AI systems will converge on certain sub-goals regardless of their final goal"
    ],
    optionsChinese: [
      "A) 所有AI工具趋同于相同的设计",
      "B) AI工具随时间变得更相似",
      "C) AI算法趋同于相同的解",
      "D) 足够先进的AI系统无论最终目标如何都会趋同于某些子目标"
    ],
    answer: 3,
    explanation: "The instrumental convergence thesis, proposed by Nick Bostrom, suggests that sufficiently advanced AI systems will likely pursue certain instrumental goals (self-preservation, resource acquisition, goal preservation) regardless of their final objectives. This creates safety concerns because even benign final goals could lead to potentially dangerous intermediate behaviors.",
    explanationChinese: "工具性趋同论由尼克·博斯特罗姆提出，表明足够先进的AI系统可能会追求某些工具性目标（自我保存、资源获取、目标保持），而不管其最终目标如何。这造成了安全问题，因为即使良性的最终目标也可能导致潜在危险的中间行为。",
    diagram: "",
    terms: ["artificial_intelligence", "ai_ethics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 195,
    q: "What is the orthogonality thesis in AI?",
    qChinese: "AI中的正交性论题是什么？",
    options: [
      "A) AI systems must be orthogonal in architecture",
      "B) Intelligence and goals are independent; any level of intelligence can be combined with any goal",
      "C) AI development must follow orthogonal methodologies",
      "D) Neural network layers must be orthogonal"
    ],
    optionsChinese: [
      "A) AI系统在架构上必须是正交的",
      "B) 智能和目标是独立的；任何水平的智能都可以与任何目标结合",
      "C) AI开发必须遵循正交方法论",
      "D) 神经网络层必须是正交的"
    ],
    answer: 1,
    explanation: "The orthogonality thesis states that intelligence and final goals are independent dimensions. A superintelligent AI could pursue any goal, not necessarily beneficial ones. This has profound safety implications: high intelligence does not guarantee benevolent intentions. It reinforces the importance of AI alignment to ensure advanced AI systems pursue human-compatible objectives.",
    explanationChinese: "正交性论题指出智能和最终目标是独立的维度。超级智能AI可以追求任何目标，不一定是有益的。这具有深远的安全影响：高智能不保证善意。它强化了AI对齐的重要性，以确保先进AI系统追求与人类兼容的目标。",
    diagram: "",
    terms: ["artificial_intelligence", "ai_ethics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 196,
    q: "What is the paperclip maximizer thought experiment?",
    qChinese: "什么是回形针最大化思想实验？",
    options: [
      "A) An experiment in manufacturing paperclips with AI",
      "B) A scenario where AI given a simple goal could cause catastrophic harm by pursuing it relentlessly",
      "C) A test of AI's ability to organize office supplies",
      "D) A manufacturing optimization benchmark"
    ],
    optionsChinese: [
      "A) 用AI制造回形针的实验",
      "B) AI被赋予简单目标后可能因不懈追求而造成灾难性伤害的场景",
      "C) 测试AI组织办公用品能力的测试",
      "D) 制造优化基准"
    ],
    answer: 1,
    explanation: "The paperclip maximizer, proposed by Nick Bostrom, illustrates how a superintelligent AI tasked with maximizing paperclip production could convert all available resources, including humans, into paperclips. This thought experiment demonstrates the existential risk of misaligned AI that pursues its objective without regard for human values or survival.",
    explanationChinese: "回形针最大化器由尼克·博斯特罗姆提出，说明了一个被赋予最大化回形针生产任务的超级智能AI如何将所有可用资源（包括人类）转化为回形针。这个思想实验展示了不对齐AI的存在风险，它不顾人类价值或生存而追求其目标。",
    diagram: "",
    terms: ["artificial_intelligence", "ai_ethics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 197,
    q: "What is corrigibility in AI safety?",
    qChinese: "AI安全中的可纠正性是什么？",
    options: [
      "A) The ability to correct spelling errors",
      "B) The ability to debug AI code",
      "C) Correcting biases in training data",
      "D) An AI system's willingness to allow humans to modify, correct, or shut it down"
    ],
    optionsChinese: [
      "A) 纠正拼写错误的能力",
      "B) 调试AI代码的能力",
      "C) 纠正训练数据中的偏见",
      "D) AI系统允许人类修改、纠正或关闭它的意愿"
    ],
    answer: 3,
    explanation: "Corrigibility is the property of an AI system that allows humans to correct, modify, or shut it down without resistance. A corrigible AI would not take actions to prevent itself from being turned off or modified. This is a key safety property because a superintelligent AI might otherwise resist correction to preserve its current goals.",
    explanationChinese: "可纠正性是AI系统允许人类在没有阻力的情况下纠正、修改或关闭它的属性。可纠正的AI不会采取行动来阻止自己被关闭或修改。这是一个关键的安全属性，因为超级智能AI可能会为了保留其当前目标而抵制纠正。",
    diagram: "",
    terms: ["artificial_intelligence", "ai_ethics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 198,
    q: "What is the concept of AI singularity?",
    qChinese: "AI奇点的概念是什么？",
    options: [
      "A) A single AI model that solves all problems",
      "B) A hypothetical point where AI self-improvement becomes uncontrollable and irreversible",
      "C) The singular focus of AI on one task",
      "D) A unique AI algorithm with no alternatives"
    ],
    optionsChinese: [
      "A) 解决所有问题的单个AI模型",
      "B) AI自我改进变得不可控和不可逆转的假设性时刻",
      "C) AI对单一任务的单一关注",
      "D) 没有替代方案的独特AI算法"
    ],
    answer: 1,
    explanation: "The AI singularity is a hypothetical future point where AI becomes capable of recursive self-improvement, leading to an intelligence explosion beyond human comprehension or control. Popularized by Ray Kurzweil, this concept raises profound questions about the future of humanity, technological governance, and the need for robust AI safety measures.",
    explanationChinese: "AI奇点是一个假设的未来时刻，AI变得能够递归自我改进，导致超越人类理解或控制的智能爆炸。由雷·库兹韦尔推广的这一概念引发了关于人类未来、技术治理和需要强大AI安全措施的深刻问题。",
    diagram: "",
    terms: ["artificial_intelligence", "ai_ethics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 199,
    q: "What is Constitutional AI?",
    qChinese: "什么是宪法AI？",
    options: [
      "A) An approach where AI behavior is guided by a set of principles rather than human feedback alone",
      "B) AI that studies national constitutions",
      "C) AI designed for constitutional law firms",
      "D) AI that follows the US Constitution"
    ],
    optionsChinese: [
      "A) AI行为由一组原则而非仅人类反馈来指导的方法",
      "B) 研究国家宪法的AI",
      "C) 为宪法律师事务所设计的AI",
      "D) 遵循美国宪法的AI"
    ],
    answer: 0,
    explanation: "Constitutional AI, developed by Anthropic, trains AI systems using a set of written principles (a constitution) that guide behavior. The AI critiques and revises its own outputs based on these principles, reducing the need for extensive human feedback. This approach helps create AI systems that are helpful, harmless, and honest by design.",
    explanationChinese: "宪法AI由Anthropic开发，使用一组书面原则（宪法）来训练AI系统以指导行为。AI根据这些原则批评和修改自己的输出，减少对大量人类反馈的需求。这种方法有助于创建设计上有帮助、无害和诚实的AI系统。",
    diagram: "",
    terms: ["artificial_intelligence", "ai_ethics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 200,
    q: "What is the future outlook for AI and human collaboration?",
    qChinese: "AI与人类协作的未来前景是什么？",
    options: [
      "A) AI will completely replace all human workers",
      "B) Humans will abandon AI development entirely",
      "C) AI will augment human capabilities, creating new forms of human-AI collaboration",
      "D) AI development will be permanently halted by regulation"
    ],
    optionsChinese: [
      "A) AI将完全取代所有人类工作者",
      "B) 人类将完全放弃AI开发",
      "C) AI将增强人类能力，创造新的人机协作形式",
      "D) AI开发将被法规永久停止"
    ],
    answer: 2,
    explanation: "The consensus view is that AI will augment human capabilities rather than fully replace humans. Future AI systems will collaborate with humans as intelligent tools and partners, enhancing creativity, decision-making, and productivity. Success depends on responsible development with proper safety measures, ethical guidelines, and inclusive governance frameworks.",
    explanationChinese: "共识观点是AI将增强人类能力而非完全替代人类。未来的AI系统将作为智能工具和伙伴与人类协作，增强创造力、决策和生产力。成功取决于负责任的开发，包括适当的安全措施、伦理准则和包容性治理框架。",
    diagram: "",
    terms: ["artificial_intelligence", "ai_ethics", "turing_test"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  }
];
