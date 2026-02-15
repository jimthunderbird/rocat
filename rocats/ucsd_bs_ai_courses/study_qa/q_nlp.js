const questionsNLP = [
  {
    id: 1,
    q: "What is the primary purpose of tokenization in NLP preprocessing?",
    qChinese: "NLP预处理中分词的主要目的是什么？",
    options: [
      "A) To convert text into numerical embeddings",
      "B) To split raw text into discrete units such as words or subwords",
      "C) To remove stop words and punctuation from text",
      "D) To translate text from one language to another"
    ],
    optionsChinese: [
      "A) 将文本转换为数值嵌入",
      "B) 将原始文本分割为单词或子词等离散单元",
      "C) 从文本中删除停用词和标点符号",
      "D) 将文本从一种语言翻译成另一种语言"
    ],
    answer: 1,
    explanation: "Tokenization segments continuous text into discrete tokens, which can be words, subwords, or characters. This is a fundamental first step because models operate on discrete units rather than raw strings. Modern subword tokenizers like BPE and WordPiece balance vocabulary size with the ability to handle out-of-vocabulary words.",
    explanationChinese: "分词将连续文本分割为离散的标记，可以是单词、子词或字符。这是一个基本的第一步，因为模型操作的是离散单元而不是原始字符串。现代子词分词器如BPE和WordPiece在词汇量大小和处理未登录词的能力之间取得平衡。",
    diagram: "",
    terms: ["tokenization", "subword", "byte_pair_encoding", "wordpiece"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 2,
    q: "In Word2Vec's Skip-gram model, what does the training objective optimize?",
    qChinese: "在Word2Vec的Skip-gram模型中，训练目标优化的是什么？",
    options: [
      "A) The probability of predicting the center word given surrounding context words",
      "B) The probability of predicting surrounding context words given a center word",
      "C) The reconstruction error of an autoencoder on word sequences",
      "D) The mutual information between consecutive sentences"
    ],
    optionsChinese: [
      "A) 给定周围上下文词预测中心词的概率",
      "B) 给定中心词预测周围上下文词的概率",
      "C) 自编码器在词序列上的重建误差",
      "D) 连续句子之间的互信息"
    ],
    answer: 1,
    explanation: "The Skip-gram model takes a center word as input and learns to predict the surrounding context words within a defined window. By maximizing the probability of observing the actual context words, the model learns dense vector representations that capture semantic and syntactic relationships. Negative sampling is often used to make training efficient.",
    explanationChinese: "Skip-gram模型以中心词为输入，学习预测定义窗口内的周围上下文词。通过最大化观察到实际上下文词的概率，模型学习到捕获语义和句法关系的密集向量表示。通常使用负采样来提高训练效率。",
    diagram: "",
    terms: ["word2vec", "skip_gram", "negative_sampling", "word_embedding"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 3,
    q: "How does GloVe differ from Word2Vec in constructing word embeddings?",
    qChinese: "GloVe在构建词嵌入方面与Word2Vec有何不同？",
    options: [
      "A) GloVe uses a recurrent neural network to process sequences",
      "B) GloVe factorizes the global word co-occurrence matrix rather than using local context windows",
      "C) GloVe trains only on syntactic patterns, not semantic ones",
      "D) GloVe requires labeled sentiment data for training"
    ],
    optionsChinese: [
      "A) GloVe使用循环神经网络来处理序列",
      "B) GloVe分解全局词共现矩阵，而不是使用局部上下文窗口",
      "C) GloVe仅训练句法模式，不训练语义模式",
      "D) GloVe需要标注的情感数据进行训练"
    ],
    answer: 1,
    explanation: "GloVe (Global Vectors) constructs embeddings by factorizing the logarithm of the global word co-occurrence count matrix. Unlike Word2Vec which learns from local context windows via stochastic gradient descent, GloVe leverages corpus-wide statistical information directly. Both approaches produce embeddings that capture analogical relationships.",
    explanationChinese: "GloVe（全局向量）通过分解全局词共现计数矩阵的对数来构建嵌入。与Word2Vec通过随机梯度下降从局部上下文窗口学习不同，GloVe直接利用语料库范围的统计信息。两种方法都能产生捕获类比关系的嵌入。",
    diagram: "",
    terms: ["glove", "co_occurrence_matrix", "matrix_factorization", "word_embedding"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 4,
    q: "In a standard n-gram language model, what does the model estimate?",
    qChinese: "在标准n-gram语言模型中，模型估计的是什么？",
    options: [
      "A) The syntactic parse tree of a sentence",
      "B) The probability of a word given the preceding n-1 words",
      "C) The semantic similarity between pairs of sentences",
      "D) The optimal sequence alignment between two texts"
    ],
    optionsChinese: [
      "A) 句子的句法分析树",
      "B) 给定前n-1个词后一个词的概率",
      "C) 句子对之间的语义相似度",
      "D) 两个文本之间的最优序列对齐"
    ],
    answer: 1,
    explanation: "An n-gram language model applies the Markov assumption to estimate P(w_t | w_{t-n+1}, ..., w_{t-1}), the probability of the next word given the previous n-1 words. Probabilities are typically estimated from corpus counts with smoothing techniques like Kneser-Ney to handle unseen n-grams and avoid zero probabilities.",
    explanationChinese: "n-gram语言模型应用马尔可夫假设来估计P(w_t | w_{t-n+1}, ..., w_{t-1})，即给定前n-1个词后下一个词的概率。概率通常从语料库计数中估计，使用Kneser-Ney等平滑技术来处理未见过的n-gram并避免零概率。",
    diagram: "",
    terms: ["n_gram", "language_model", "markov_assumption", "kneser_ney_smoothing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 5,
    q: "What problem does the attention mechanism solve in sequence-to-sequence models?",
    qChinese: "注意力机制在序列到序列模型中解决了什么问题？",
    options: [
      "A) It eliminates the need for an encoder in the architecture",
      "B) It allows the decoder to focus on relevant parts of the input rather than relying on a single fixed-length context vector",
      "C) It reduces the vocabulary size needed for translation",
      "D) It removes the need for teacher forcing during training"
    ],
    optionsChinese: [
      "A) 它消除了架构中对编码器的需要",
      "B) 它允许解码器关注输入的相关部分，而不是依赖于单个固定长度的上下文向量",
      "C) 它减少了翻译所需的词汇量",
      "D) 它消除了训练期间对教师强制的需要"
    ],
    answer: 1,
    explanation: "In early seq2seq models, the entire input sequence was compressed into a single fixed-length vector, creating an information bottleneck especially for long sequences. Attention computes a weighted sum over all encoder hidden states at each decoder step, allowing the model to dynamically focus on the most relevant input positions for each output token.",
    explanationChinese: "在早期的seq2seq模型中，整个输入序列被压缩为单个固定长度的向量，特别是对于长序列会造成信息瓶颈。注意力在每个解码器步骤中计算所有编码器隐藏状态的加权和，允许模型动态地关注每个输出标记最相关的输入位置。",
    diagram: "",
    terms: ["attention_mechanism", "sequence_to_sequence", "context_vector", "information_bottleneck"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 6,
    q: "In the Transformer architecture, what is the purpose of multi-head attention?",
    qChinese: "在Transformer架构中，多头注意力的目的是什么？",
    options: [
      "A) To process multiple input sequences simultaneously in a batch",
      "B) To allow the model to jointly attend to information from different representation subspaces",
      "C) To reduce the computational cost of self-attention to linear complexity",
      "D) To replace the positional encoding with learned position representations"
    ],
    optionsChinese: [
      "A) 在一个批次中同时处理多个输入序列",
      "B) 允许模型联合关注来自不同表示子空间的信息",
      "C) 将自注意力的计算成本降低到线性复杂度",
      "D) 用学习的位置表示替换位置编码"
    ],
    answer: 1,
    explanation: "Multi-head attention runs several attention operations in parallel, each with different learned linear projections of queries, keys, and values. Each head can learn to attend to different types of relationships, such as syntactic dependencies in one head and semantic associations in another. The outputs are concatenated and linearly projected.",
    explanationChinese: "多头注意力并行运行多个注意力操作，每个操作使用不同的学习线性投影来处理查询、键和值。每个头可以学习关注不同类型的关系，例如一个头关注句法依赖，另一个关注语义关联。输出被连接并进行线性投影。",
    diagram: "",
    terms: ["multi_head_attention", "transformer", "self_attention", "representation_subspace"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 7,
    q: "Why does the Transformer use positional encoding?",
    qChinese: "为什么Transformer使用位置编码？",
    options: [
      "A) To indicate which language the input text belongs to",
      "B) To inject information about token order since self-attention is permutation-invariant",
      "C) To normalize the attention weights to sum to one",
      "D) To encode the part-of-speech tag of each token"
    ],
    optionsChinese: [
      "A) 指示输入文本属于哪种语言",
      "B) 注入关于标记顺序的信息，因为自注意力是排列不变的",
      "C) 将注意力权重归一化使其和为一",
      "D) 编码每个标记的词性标签"
    ],
    answer: 1,
    explanation: "Self-attention treats its inputs as an unordered set, making it inherently permutation-invariant. Without positional information, the model cannot distinguish between different orderings of the same tokens. Positional encodings, either fixed sinusoidal functions or learned embeddings, are added to token embeddings to preserve sequence order information.",
    explanationChinese: "自注意力将其输入视为无序集合，使其本质上是排列不变的。没有位置信息，模型无法区分相同标记的不同排列。位置编码，无论是固定的正弦函数还是学习的嵌入，都被添加到标记嵌入中以保留序列顺序信息。",
    diagram: "",
    terms: ["positional_encoding", "permutation_invariance", "sinusoidal_encoding", "transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 8,
    q: "What is the key pre-training objective of BERT?",
    qChinese: "BERT的关键预训练目标是什么？",
    options: [
      "A) Predicting the next word in an autoregressive manner from left to right",
      "B) Masked language modeling where randomly masked tokens are predicted from bidirectional context",
      "C) Generating text continuations given a prompt",
      "D) Translating sentences between multiple language pairs simultaneously"
    ],
    optionsChinese: [
      "A) 从左到右以自回归方式预测下一个词",
      "B) 掩码语言建模，其中从双向上下文预测随机掩码的标记",
      "C) 给定提示生成文本续写",
      "D) 同时在多个语言对之间翻译句子"
    ],
    answer: 1,
    explanation: "BERT's primary pre-training task is Masked Language Modeling (MLM), where 15% of input tokens are randomly masked and the model predicts them using both left and right context. This bidirectional training enables BERT to learn deep contextual representations, unlike unidirectional models that only condition on preceding or following tokens.",
    explanationChinese: "BERT的主要预训练任务是掩码语言建模（MLM），其中15%的输入标记被随机掩码，模型使用左右两个方向的上下文来预测它们。这种双向训练使BERT能够学习深层上下文表示，不同于只依赖前面或后面标记的单向模型。",
    diagram: "",
    terms: ["bert", "masked_language_modeling", "bidirectional_context", "pre_training"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 9,
    q: "How does GPT differ from BERT in its training paradigm?",
    qChinese: "GPT在训练范式上与BERT有何不同？",
    options: [
      "A) GPT uses a convolutional architecture while BERT uses transformers",
      "B) GPT is an autoregressive model that predicts the next token using only left context",
      "C) GPT requires supervised labels for all training examples",
      "D) GPT processes text in right-to-left order"
    ],
    optionsChinese: [
      "A) GPT使用卷积架构而BERT使用Transformer",
      "B) GPT是一个自回归模型，仅使用左侧上下文预测下一个标记",
      "C) GPT需要所有训练样本的监督标签",
      "D) GPT从右到左处理文本"
    ],
    answer: 1,
    explanation: "GPT uses a causal (unidirectional) language modeling objective, predicting each token based only on preceding tokens. This autoregressive approach uses masked self-attention to prevent attending to future positions. While BERT excels at understanding tasks through bidirectional context, GPT's left-to-right generation makes it naturally suited for text generation.",
    explanationChinese: "GPT使用因果（单向）语言建模目标，仅基于前面的标记预测每个标记。这种自回归方法使用掩码自注意力来防止关注未来的位置。虽然BERT通过双向上下文擅长理解任务，但GPT的从左到右生成使其自然适合文本生成。",
    diagram: "",
    terms: ["gpt", "autoregressive", "causal_language_model", "masked_self_attention"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 10,
    q: "In neural machine translation, what is the purpose of the beam search decoding algorithm?",
    qChinese: "在神经机器翻译中，束搜索解码算法的目的是什么？",
    options: [
      "A) To train the encoder network with multiple random initializations",
      "B) To explore multiple candidate translations simultaneously and select the highest-scoring sequence",
      "C) To align source and target words using statistical co-occurrence",
      "D) To parallelize the attention computation across multiple GPUs"
    ],
    optionsChinese: [
      "A) 用多个随机初始化训练编码器网络",
      "B) 同时探索多个候选翻译并选择得分最高的序列",
      "C) 使用统计共现对齐源语言和目标语言的词",
      "D) 跨多个GPU并行化注意力计算"
    ],
    answer: 1,
    explanation: "Beam search maintains the top-k most probable partial sequences at each decoding step, where k is the beam width. Unlike greedy decoding which only keeps the single best token at each step, beam search explores a broader search space. This avoids locally optimal but globally suboptimal translations at a modest computational cost.",
    explanationChinese: "束搜索在每个解码步骤中维护前k个最可能的部分序列，其中k是束宽度。与贪心解码只在每步保留单个最佳标记不同，束搜索探索更广的搜索空间。这以适度的计算成本避免了局部最优但全局次优的翻译。",
    diagram: "",
    terms: ["beam_search", "machine_translation", "decoding", "greedy_search"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 11,
    q: "Which approach to sentiment analysis directly fine-tunes a pre-trained language model on labeled sentiment data?",
    qChinese: "哪种情感分析方法直接在标注的情感数据上微调预训练语言模型？",
    options: [
      "A) Lexicon-based sentiment analysis using predefined word polarity scores",
      "B) Transfer learning by adding a classification head to BERT and fine-tuning on the target task",
      "C) Rule-based pattern matching with handcrafted templates",
      "D) Unsupervised clustering of document embeddings"
    ],
    optionsChinese: [
      "A) 使用预定义词极性分数的基于词典的情感分析",
      "B) 通过在BERT上添加分类头并在目标任务上微调的迁移学习",
      "C) 使用手工模板的基于规则的模式匹配",
      "D) 文档嵌入的无监督聚类"
    ],
    answer: 1,
    explanation: "Transfer learning with pre-trained models like BERT has become the dominant paradigm for sentiment analysis. A classification head is added on top of BERT's [CLS] token output, and the entire model is fine-tuned on labeled sentiment data. This approach leverages the rich linguistic knowledge captured during pre-training for superior performance.",
    explanationChinese: "使用BERT等预训练模型的迁移学习已成为情感分析的主导范式。在BERT的[CLS]标记输出之上添加分类头，然后在标注的情感数据上微调整个模型。这种方法利用预训练期间捕获的丰富语言知识来获得更好的性能。",
    diagram: "",
    terms: ["sentiment_analysis", "transfer_learning", "fine_tuning", "bert_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 12,
    q: "In collaborative filtering for recommender systems, what is the cold start problem?",
    qChinese: "在推荐系统的协同过滤中，冷启动问题是什么？",
    options: [
      "A) The system takes too long to initialize its database at startup",
      "B) The system cannot make reliable recommendations for new users or items with no interaction history",
      "C) The system's predictions degrade when server temperatures are low",
      "D) The system fails when users rate items too quickly"
    ],
    optionsChinese: [
      "A) 系统在启动时初始化数据库耗时过长",
      "B) 系统无法为没有交互历史的新用户或新物品做出可靠推荐",
      "C) 当服务器温度低时系统预测性能下降",
      "D) 当用户评分太快时系统失败"
    ],
    answer: 1,
    explanation: "The cold start problem arises because collaborative filtering relies on past interaction data to find similar users or items. New users have no rating history to match against, and new items have received no ratings to learn from. Hybrid approaches combining collaborative filtering with content-based features help mitigate this limitation.",
    explanationChinese: "冷启动问题的产生是因为协同过滤依赖过去的交互数据来找到相似的用户或物品。新用户没有评分历史可以匹配，新物品没有收到评分可以学习。结合协同过滤和基于内容特征的混合方法有助于缓解这一限制。",
    diagram: "",
    terms: ["cold_start", "collaborative_filtering", "recommender_system", "hybrid_approach"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 13,
    q: "What is the key idea behind content-based filtering in recommender systems?",
    qChinese: "推荐系统中基于内容的过滤的核心思想是什么？",
    options: [
      "A) Recommending items that similar users have liked using user-user similarity",
      "B) Recommending items whose features are similar to items the user has previously liked",
      "C) Recommending the most popular items across all users",
      "D) Randomly sampling items to promote diversity"
    ],
    optionsChinese: [
      "A) 使用用户-用户相似性推荐相似用户喜欢的物品",
      "B) 推荐特征与用户之前喜欢的物品相似的物品",
      "C) 向所有用户推荐最受欢迎的物品",
      "D) 随机采样物品以促进多样性"
    ],
    answer: 1,
    explanation: "Content-based filtering builds a profile of each user's preferences based on item features they have interacted with. It then recommends new items whose feature profiles are similar to those the user previously liked. Unlike collaborative filtering, it does not require data from other users, making it immune to the new-user cold start problem.",
    explanationChinese: "基于内容的过滤根据用户与之交互的物品特征构建每个用户的偏好档案。然后推荐特征档案与用户之前喜欢的物品相似的新物品。与协同过滤不同，它不需要其他用户的数据，因此不受新用户冷启动问题的影响。",
    diagram: "",
    terms: ["content_based_filtering", "item_features", "user_profile", "recommender_system"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 14,
    q: "In matrix factorization for recommender systems, what do the learned latent factor vectors represent?",
    qChinese: "在推荐系统的矩阵分解中，学习到的潜在因子向量代表什么？",
    options: [
      "A) The raw feature values of items such as genre and price",
      "B) Hidden preference dimensions for users and hidden attribute dimensions for items",
      "C) The explicit ratings that users gave to each item",
      "D) The timestamp of each user-item interaction"
    ],
    optionsChinese: [
      "A) 物品的原始特征值，如类型和价格",
      "B) 用户的隐藏偏好维度和物品的隐藏属性维度",
      "C) 用户给每个物品的显式评分",
      "D) 每次用户-物品交互的时间戳"
    ],
    answer: 1,
    explanation: "Matrix factorization decomposes the user-item rating matrix into two low-rank matrices: one mapping users to latent factors and another mapping items to the same latent space. These latent factors capture abstract concepts like genre preferences or quality dimensions. A predicted rating is computed as the dot product of a user's and item's latent vectors.",
    explanationChinese: "矩阵分解将用户-物品评分矩阵分解为两个低秩矩阵：一个将用户映射到潜在因子，另一个将物品映射到相同的潜在空间。这些潜在因子捕获了类型偏好或质量维度等抽象概念。预测评分计算为用户和物品潜在向量的点积。",
    diagram: "",
    terms: ["matrix_factorization", "latent_factors", "low_rank_approximation", "dot_product"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 15,
    q: "What scaling factor is applied to the dot product in the scaled dot-product attention of the Transformer?",
    qChinese: "在Transformer的缩放点积注意力中，对点积应用了什么缩放因子？",
    options: [
      "A) Division by the sequence length n",
      "B) Division by the square root of the key dimension d_k",
      "C) Multiplication by the number of attention heads h",
      "D) Division by the total number of model parameters"
    ],
    optionsChinese: [
      "A) 除以序列长度n",
      "B) 除以键维度d_k的平方根",
      "C) 乘以注意力头的数量h",
      "D) 除以模型参数总数"
    ],
    answer: 1,
    explanation: "The dot products between queries and keys can grow large in magnitude as the dimension d_k increases, pushing the softmax function into regions with extremely small gradients. Dividing by sqrt(d_k) normalizes the variance of the dot products back to approximately 1, ensuring stable softmax outputs and effective gradient flow during training.",
    explanationChinese: "随着维度d_k的增加，查询和键之间的点积幅值可能会变大，将softmax函数推入梯度极小的区域。除以sqrt(d_k)将点积的方差归一化回大约1，确保稳定的softmax输出和训练期间有效的梯度流动。",
    diagram: "",
    terms: ["scaled_dot_product_attention", "softmax", "query_key_value", "gradient_stability"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 16,
    q: "What is the BLEU score used to evaluate in NLP?",
    qChinese: "BLEU分数在NLP中用于评估什么？",
    options: [
      "A) The perplexity of a language model on held-out text",
      "B) The quality of machine-generated text by measuring n-gram overlap with reference translations",
      "C) The accuracy of named entity recognition systems",
      "D) The F1 score of a text classification model"
    ],
    optionsChinese: [
      "A) 语言模型在留出文本上的困惑度",
      "B) 通过测量与参考翻译的n-gram重叠来衡量机器生成文本的质量",
      "C) 命名实体识别系统的准确率",
      "D) 文本分类模型的F1分数"
    ],
    answer: 1,
    explanation: "BLEU (Bilingual Evaluation Understudy) measures machine translation quality by computing modified n-gram precision between the generated output and one or more reference translations. It includes a brevity penalty to discourage overly short outputs. While widely used, BLEU has known limitations in capturing semantic equivalence and fluency.",
    explanationChinese: "BLEU（双语评估替代）通过计算生成输出与一个或多个参考翻译之间的修改n-gram精度来衡量机器翻译质量。它包含一个简洁惩罚以阻止过短的输出。虽然被广泛使用，但BLEU在捕获语义等价性和流畅性方面有已知的局限性。",
    diagram: "",
    terms: ["bleu_score", "n_gram_precision", "machine_translation_evaluation", "brevity_penalty"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 17,
    q: "What is the teacher forcing technique used in training sequence-to-sequence models?",
    qChinese: "在训练序列到序列模型中使用的教师强制技术是什么？",
    options: [
      "A) Using a larger pre-trained model to initialize the weights",
      "B) Feeding the ground-truth previous token as input to the decoder at each step during training",
      "C) Applying knowledge distillation from a teacher network to a student network",
      "D) Increasing the learning rate when the loss plateaus"
    ],
    optionsChinese: [
      "A) 使用更大的预训练模型来初始化权重",
      "B) 在训练期间的每一步将真实的前一个标记作为输入馈送给解码器",
      "C) 从教师网络到学生网络应用知识蒸馏",
      "D) 当损失停滞时增加学习率"
    ],
    answer: 1,
    explanation: "Teacher forcing feeds the actual ground-truth tokens from the target sequence as decoder input during training, rather than the model's own predictions. This accelerates convergence by providing correct context at each step. However, it creates an exposure bias since at inference time the model must rely on its own potentially erroneous predictions.",
    explanationChinese: "教师强制在训练期间将目标序列中的实际真实标记作为解码器输入，而不是模型自己的预测。这通过在每一步提供正确的上下文来加速收敛。然而，它造成了曝光偏差，因为在推理时模型必须依赖自己可能有误的预测。",
    diagram: "",
    terms: ["teacher_forcing", "exposure_bias", "sequence_to_sequence", "decoder_training"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 18,
    q: "In the context of recommender systems, what does implicit feedback refer to?",
    qChinese: "在推荐系统的上下文中，隐式反馈指的是什么？",
    options: [
      "A) Star ratings and written reviews explicitly provided by users",
      "B) Behavioral signals like clicks, purchases, and viewing time that indirectly indicate preference",
      "C) Demographic information such as age and gender",
      "D) Explicit thumbs-up or thumbs-down ratings on items"
    ],
    optionsChinese: [
      "A) 用户明确提供的星级评分和书面评论",
      "B) 点击、购买和观看时间等间接表示偏好的行为信号",
      "C) 年龄和性别等人口统计信息",
      "D) 对物品的明确点赞或点踩评分"
    ],
    answer: 1,
    explanation: "Implicit feedback encompasses user behaviors that indirectly signal preferences, such as page views, click-through patterns, purchase history, and time spent on content. Unlike explicit ratings, implicit feedback is abundant but noisier and only indicates positive interest, not negative preferences, making it harder to interpret the absence of an interaction.",
    explanationChinese: "隐式反馈包括间接表示偏好的用户行为，如页面浏览、点击模式、购买历史和内容停留时间。与显式评分不同，隐式反馈丰富但噪声更大，且仅表示正面兴趣，不表示负面偏好，使得交互缺失更难以解读。",
    diagram: "",
    terms: ["implicit_feedback", "explicit_feedback", "user_behavior", "recommender_system"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 19,
    q: "What is the vanishing gradient problem in RNN-based language models, and how do LSTMs address it?",
    qChinese: "基于RNN的语言模型中的梯度消失问题是什么，LSTM如何解决它？",
    options: [
      "A) Gradients explode to infinity; LSTMs use gradient clipping to solve this",
      "B) Gradients shrink exponentially over long sequences; LSTMs use gated memory cells to maintain gradient flow",
      "C) Gradients become negative; LSTMs use ReLU activations to keep them positive",
      "D) Gradients oscillate randomly; LSTMs use batch normalization to stabilize them"
    ],
    optionsChinese: [
      "A) 梯度爆炸到无穷大；LSTM使用梯度裁剪来解决",
      "B) 梯度在长序列上指数级缩小；LSTM使用门控记忆单元来维持梯度流",
      "C) 梯度变为负数；LSTM使用ReLU激活函数使其保持正值",
      "D) 梯度随机振荡；LSTM使用批归一化来稳定它们"
    ],
    answer: 1,
    explanation: "In vanilla RNNs, gradients are repeatedly multiplied through time steps during backpropagation, causing them to shrink exponentially and preventing learning of long-range dependencies. LSTMs introduce a cell state with additive updates controlled by forget, input, and output gates, providing a highway for gradient flow that preserves information over many time steps.",
    explanationChinese: "在普通RNN中，反向传播期间梯度在时间步上被反复相乘，导致它们指数级缩小，阻止了长距离依赖的学习。LSTM引入了由遗忘门、输入门和输出门控制的加性更新的细胞状态，为梯度流提供了高速通道，在许多时间步上保留信息。",
    diagram: "",
    terms: ["vanishing_gradient", "lstm", "gated_memory_cell", "long_range_dependency"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 20,
    q: "What is the core idea behind Byte Pair Encoding (BPE) tokenization used in modern NLP models?",
    qChinese: "现代NLP模型中使用的字节对编码（BPE）分词的核心思想是什么？",
    options: [
      "A) Splitting text at whitespace boundaries and converting each word to a unique integer",
      "B) Iteratively merging the most frequent pair of adjacent symbols to build a subword vocabulary",
      "C) Using a pre-defined dictionary to look up each word's morphological decomposition",
      "D) Encoding each character as its Unicode byte value and processing bytes directly"
    ],
    optionsChinese: [
      "A) 在空格边界处分割文本并将每个词转换为唯一整数",
      "B) 迭代地合并最频繁的相邻符号对以构建子词词汇表",
      "C) 使用预定义词典查找每个词的形态分解",
      "D) 将每个字符编码为其Unicode字节值并直接处理字节"
    ],
    answer: 1,
    explanation: "BPE starts with individual characters and iteratively merges the most frequent adjacent pair of symbols into a new symbol. This process repeats until the desired vocabulary size is reached. BPE achieves an effective balance: common words remain whole tokens while rare words are decomposed into meaningful subwords, eliminating out-of-vocabulary issues.",
    explanationChinese: "BPE从单个字符开始，迭代地将最频繁的相邻符号对合并为新符号。此过程重复直到达到所需的词汇量。BPE实现了有效的平衡：常见词保持为完整标记，而罕见词被分解为有意义的子词，消除了未登录词问题。",
    diagram: "",
    terms: ["byte_pair_encoding", "subword_tokenization", "vocabulary", "out_of_vocabulary"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  }
];
