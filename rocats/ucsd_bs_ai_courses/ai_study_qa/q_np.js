const questionsNP = [
  {
    id: 1,
    q: "What is tokenization in NLP?",
    qChinese: "NLP中的分词是什么？",
    options: [
      "A) Splitting text into smaller units such as words or subwords",
      "B) Converting text into numerical vectors",
      "C) Removing stopwords from a document",
      "D) Translating text from one language to another"
    ],
    optionsChinese: [
      "A) 将文本拆分为更小的单元，如单词或子词",
      "B) 将文本转换为数值向量",
      "C) 从文档中删除停用词",
      "D) 将文本从一种语言翻译成另一种语言"
    ],
    answer: 0,
    explanation: "Tokenization is the process of breaking down text into smaller meaningful units called tokens. These tokens can be words, subwords, or characters. It is typically the first step in any NLP pipeline, enabling subsequent processing such as embedding lookup or parsing.",
    explanationChinese: "分词是将文本分解为较小的有意义单元（称为标记）的过程。这些标记可以是单词、子词或字符。它通常是任何NLP流程的第一步，使后续处理（如嵌入查找或解析）成为可能。",
    diagram: "",
    terms: ["tokenization", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 2,
    q: "Which of the following is an example of stemming?",
    qChinese: "以下哪个是词干提取的例子？",
    options: [
      "A) 'is' → 'be'",
      "B) 'better' → 'good'",
      "C) 'cats' → 'cat' using a dictionary",
      "D) 'running' → 'run'"
    ],
    optionsChinese: [
      "A) 'is' → 'be'",
      "B) 'better' → 'good'",
      "C) 'cats' → 'cat'（使用词典）",
      "D) 'running' → 'run'"
    ],
    answer: 3,
    explanation: "Stemming is a rule-based heuristic process that chops off word suffixes to reduce words to their stem. 'running' → 'run' is a classic stemming example. Lemmatization, not stemming, uses dictionaries to map words to their base forms such as 'better' → 'good'.",
    explanationChinese: "词干提取是一种基于规则的启发式过程，通过去除单词后缀来将单词简化为词干。'running' → 'run'是经典的词干提取示例。词形还原（而非词干提取）使用词典将单词映射到其基本形式，如'better' → 'good'。",
    diagram: "",
    terms: ["tokenization", "lemmatization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 3,
    q: "What is the key difference between stemming and lemmatization?",
    qChinese: "词干提取和词形还原之间的主要区别是什么？",
    options: [
      "A) Stemming uses a dictionary; lemmatization uses rules",
      "B) Stemming is slower but more accurate",
      "C) Lemmatization produces valid dictionary words; stemming may not",
      "D) There is no difference between them"
    ],
    optionsChinese: [
      "A) 词干提取使用词典；词形还原使用规则",
      "B) 词干提取更慢但更准确",
      "C) 词形还原产生有效的词典词汇；词干提取可能不会",
      "D) 它们之间没有区别"
    ],
    answer: 2,
    explanation: "Lemmatization uses morphological analysis and dictionaries to return a valid base form (lemma) of a word. Stemming applies crude heuristic rules to strip suffixes, which can produce non-words like 'studi' from 'studies'. Lemmatization is typically more accurate but computationally heavier.",
    explanationChinese: "词形还原使用形态学分析和词典来返回单词的有效基本形式（词元）。词干提取应用粗略的启发式规则来去除后缀，可能产生非词汇，如从'studies'得到'studi'。词形还原通常更准确但计算量更大。",
    diagram: "",
    terms: ["lemmatization", "tokenization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 4,
    q: "What are stopwords in NLP?",
    qChinese: "NLP中的停用词是什么？",
    options: [
      "A) Commonly occurring words that carry little semantic meaning",
      "B) Words that signal the end of a sentence",
      "C) Technical terms specific to a domain",
      "D) Words that are misspelled"
    ],
    optionsChinese: [
      "A) 语义含义很少的常见词汇",
      "B) 表示句子结束的词",
      "C) 特定领域的专业术语",
      "D) 拼写错误的词"
    ],
    answer: 0,
    explanation: "Stopwords are high-frequency words like 'the', 'is', 'at', and 'which' that appear frequently in text but carry minimal semantic content. They are often removed during preprocessing to reduce noise and dimensionality, though some modern NLP models retain them.",
    explanationChinese: "停用词是高频词汇，如'the'、'is'、'at'和'which'，它们在文本中频繁出现但语义内容极少。它们通常在预处理期间被删除以减少噪声和维度，尽管一些现代NLP模型会保留它们。",
    diagram: "",
    terms: ["tokenization", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 5,
    q: "Which tokenization method is best suited for languages without explicit word boundaries like Chinese?",
    qChinese: "哪种分词方法最适合像中文这样没有明确词边界的语言？",
    options: [
      "A) Whitespace tokenization",
      "B) Character-level tokenization or subword methods",
      "C) Regex-based tokenization",
      "D) Sentence-level tokenization"
    ],
    optionsChinese: [
      "A) 空格分词",
      "B) 字符级分词或子词方法",
      "C) 基于正则表达式的分词",
      "D) 句子级分词"
    ],
    answer: 1,
    explanation: "Languages like Chinese, Japanese, and Thai do not use spaces to separate words. Character-level tokenization or subword methods such as BPE (Byte Pair Encoding) and SentencePiece are well-suited because they do not rely on whitespace delimiters to identify token boundaries.",
    explanationChinese: "中文、日文和泰文等语言不使用空格分隔单词。字符级分词或子词方法（如BPE字节对编码和SentencePiece）非常适合，因为它们不依赖空格分隔符来识别标记边界。",
    diagram: "",
    terms: ["tokenization", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 6,
    q: "What is Byte Pair Encoding (BPE) used for in NLP preprocessing?",
    qChinese: "字节对编码（BPE）在NLP预处理中用于什么？",
    options: [
      "A) Compressing text files",
      "B) Building a subword vocabulary by iteratively merging frequent character pairs",
      "C) Encrypting text data",
      "D) Removing duplicate words"
    ],
    optionsChinese: [
      "A) 压缩文本文件",
      "B) 通过迭代合并频繁字符对来构建子词词汇表",
      "C) 加密文本数据",
      "D) 删除重复词"
    ],
    answer: 1,
    explanation: "Byte Pair Encoding starts with individual characters and iteratively merges the most frequent adjacent pairs to form subword units. This creates a compact vocabulary that handles rare and out-of-vocabulary words effectively, and is used in models like GPT and RoBERTa.",
    explanationChinese: "字节对编码从单个字符开始，迭代合并最频繁的相邻对以形成子词单元。这创建了一个紧凑的词汇表，可以有效处理罕见和词汇表外的词，被GPT和RoBERTa等模型使用。",
    diagram: "",
    terms: ["tokenization", "gpt"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 7,
    q: "Which Python library provides the PorterStemmer?",
    qChinese: "哪个Python库提供了PorterStemmer？",
    options: [
      "A) spaCy",
      "B) TensorFlow",
      "C) NLTK",
      "D) scikit-learn"
    ],
    optionsChinese: [
      "A) spaCy",
      "B) TensorFlow",
      "C) NLTK",
      "D) scikit-learn"
    ],
    answer: 2,
    explanation: "The PorterStemmer is a classic stemming algorithm implemented in NLTK (Natural Language Toolkit). NLTK is one of the most widely used Python libraries for NLP preprocessing tasks including tokenization, stemming, POS tagging, and accessing linguistic corpora.",
    explanationChinese: "PorterStemmer是在NLTK（自然语言工具包）中实现的经典词干提取算法。NLTK是最广泛使用的Python NLP预处理库之一，包括分词、词干提取、词性标注和访问语言语料库。",
    diagram: "",
    terms: ["tokenization", "lemmatization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 8,
    q: "What does text normalization typically include?",
    qChinese: "文本规范化通常包括什么？",
    options: [
      "A) Only converting to lowercase",
      "B) Lowercasing, removing punctuation, expanding contractions, and correcting spelling",
      "C) Only removing numbers from text",
      "D) Only converting text to Unicode"
    ],
    optionsChinese: [
      "A) 仅转换为小写",
      "B) 小写化、删除标点、扩展缩写和纠正拼写",
      "C) 仅从文本中删除数字",
      "D) 仅将文本转换为Unicode"
    ],
    answer: 1,
    explanation: "Text normalization is a broad preprocessing step that includes converting text to lowercase, removing or standardizing punctuation, expanding contractions like \"don't\" to \"do not\", correcting spelling errors, and handling special characters to create a uniform representation.",
    explanationChinese: "文本规范化是一个广泛的预处理步骤，包括将文本转换为小写、删除或标准化标点符号、扩展缩写（如将\"don't\"改为\"do not\"）、纠正拼写错误以及处理特殊字符以创建统一表示。",
    diagram: "",
    terms: ["tokenization", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 9,
    q: "What is a corpus in NLP?",
    qChinese: "NLP中的语料库是什么？",
    options: [
      "A) A single document",
      "B) A type of neural network",
      "C) A large, structured collection of texts used for training or analysis",
      "D) A parsing algorithm"
    ],
    optionsChinese: [
      "A) 单个文档",
      "B) 一种神经网络",
      "C) 用于训练或分析的大型结构化文本集合",
      "D) 一种解析算法"
    ],
    answer: 2,
    explanation: "A corpus (plural: corpora) is a large, organized collection of text data used for linguistic research and NLP model training. Examples include the Brown Corpus, Penn Treebank, and Wikipedia dumps. The quality and size of a corpus significantly affect model performance.",
    explanationChinese: "语料库（复数：corpora）是用于语言研究和NLP模型训练的大型有组织的文本数据集合。例子包括Brown语料库、Penn Treebank和维基百科数据。语料库的质量和大小显著影响模型性能。",
    diagram: "",
    terms: ["corpus", "tokenization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 10,
    q: "Which of the following is NOT a common preprocessing step in NLP?",
    qChinese: "以下哪个不是NLP中常见的预处理步骤？",
    options: [
      "A) Tokenization",
      "B) Stopword removal",
      "C) Backpropagation",
      "D) Lowercasing"
    ],
    optionsChinese: [
      "A) 分词",
      "B) 停用词删除",
      "C) 反向传播",
      "D) 小写化"
    ],
    answer: 2,
    explanation: "Backpropagation is a training algorithm for neural networks, not a text preprocessing step. Common NLP preprocessing steps include tokenization, stopword removal, lowercasing, stemming, lemmatization, and punctuation removal, all aimed at cleaning and standardizing raw text.",
    explanationChinese: "反向传播是神经网络的训练算法，而不是文本预处理步骤。常见的NLP预处理步骤包括分词、停用词删除、小写化、词干提取、词形还原和标点删除，所有这些都旨在清理和标准化原始文本。",
    diagram: "",
    terms: ["tokenization", "lemmatization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 11,
    q: "What does the WordPiece tokenizer do?",
    qChinese: "WordPiece分词器做什么？",
    options: [
      "A) Splits words only at whitespace",
      "B) Removes all vowels from words",
      "C) Breaks words into subword units based on likelihood maximization",
      "D) Converts each word to a unique integer"
    ],
    optionsChinese: [
      "A) 仅在空格处分割单词",
      "B) 从单词中删除所有元音",
      "C) 基于似然最大化将单词分解为子词单元",
      "D) 将每个单词转换为唯一整数"
    ],
    answer: 2,
    explanation: "WordPiece is a subword tokenization algorithm used by BERT. It iteratively builds a vocabulary by choosing merges that maximize the likelihood of the training data. It uses a '##' prefix to indicate subword continuations, helping handle out-of-vocabulary words effectively.",
    explanationChinese: "WordPiece是BERT使用的子词分词算法。它通过选择最大化训练数据似然性的合并来迭代构建词汇表。它使用'##'前缀表示子词延续，有效处理词汇表外的词。",
    diagram: "",
    terms: ["tokenization", "bert"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 12,
    q: "Why might removing stopwords hurt performance in some NLP tasks?",
    qChinese: "为什么在某些NLP任务中删除停用词可能会降低性能？",
    options: [
      "A) Stopwords are always irrelevant",
      "B) Stopwords increase model accuracy in all cases",
      "C) Some tasks like sentiment analysis rely on words like 'not' and 'very'",
      "D) Stopwords are never part of the vocabulary"
    ],
    optionsChinese: [
      "A) 停用词总是不相关的",
      "B) 停用词在所有情况下都能提高模型准确性",
      "C) 某些任务（如情感分析）依赖于'not'和'very'等词",
      "D) 停用词从不是词汇表的一部分"
    ],
    answer: 2,
    explanation: "In tasks like sentiment analysis, words such as 'not', 'very', 'no', and 'but' carry crucial meaning. Removing 'not' from 'not good' completely reverses the sentiment. Modern deep learning models often keep stopwords since they can learn to leverage contextual information.",
    explanationChinese: "在情感分析等任务中，'not'、'very'、'no'和'but'等词携带关键含义。从'not good'中删除'not'会完全逆转情感。现代深度学习模型通常保留停用词，因为它们可以学习利用上下文信息。",
    diagram: "",
    terms: ["tokenization", "sentiment_analysis"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 13,
    q: "What is sentence segmentation?",
    qChinese: "什么是句子分割？",
    options: [
      "A) Splitting a sentence into individual characters",
      "B) Combining multiple sentences into one",
      "C) Dividing a text into individual sentences",
      "D) Translating sentences into another language"
    ],
    optionsChinese: [
      "A) 将句子分割成单个字符",
      "B) 将多个句子合并为一个",
      "C) 将文本分割成单个句子",
      "D) 将句子翻译成另一种语言"
    ],
    answer: 2,
    explanation: "Sentence segmentation (or sentence boundary detection) divides a continuous text into individual sentences. This is challenging because periods can appear in abbreviations, numbers, and URLs. Libraries like spaCy and NLTK provide robust sentence segmentation tools.",
    explanationChinese: "句子分割（或句子边界检测）将连续文本分割成单个句子。这具有挑战性，因为句点可能出现在缩写、数字和URL中。spaCy和NLTK等库提供了强大的句子分割工具。",
    diagram: "",
    terms: ["tokenization", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 14,
    q: "What is the result of applying the Porter Stemmer to the word 'studies'?",
    qChinese: "对单词'studies'应用Porter词干提取器的结果是什么？",
    options: [
      "A) study",
      "B) studies",
      "C) studi",
      "D) studied"
    ],
    optionsChinese: [
      "A) study",
      "B) studies",
      "C) studi",
      "D) studied"
    ],
    answer: 2,
    explanation: "The Porter Stemmer applies a series of suffix-stripping rules. For 'studies', it maps 'ies' to 'i', producing 'studi' rather than the linguistically correct 'study'. This illustrates the trade-off: stemming is fast but may produce non-dictionary forms.",
    explanationChinese: "Porter词干提取器应用一系列后缀去除规则。对于'studies'，它将'ies'映射为'i'，产生'studi'而不是语言学上正确的'study'。这说明了权衡：词干提取快速但可能产生非词典形式。",
    diagram: "",
    terms: ["tokenization", "lemmatization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 15,
    q: "What is the purpose of regular expressions in text preprocessing?",
    qChinese: "正则表达式在文本预处理中的目的是什么？",
    options: [
      "A) To train neural networks",
      "B) To perform word embeddings",
      "C) To define patterns for matching, extracting, or replacing text",
      "D) To compute TF-IDF scores"
    ],
    optionsChinese: [
      "A) 训练神经网络",
      "B) 执行词嵌入",
      "C) 定义用于匹配、提取或替换文本的模式",
      "D) 计算TF-IDF分数"
    ],
    answer: 2,
    explanation: "Regular expressions (regex) define search patterns for string matching. In NLP preprocessing, they are used to remove HTML tags, extract email addresses, clean special characters, tokenize text based on patterns, and normalize formats. They are essential tools in any preprocessing pipeline.",
    explanationChinese: "正则表达式（regex）定义字符串匹配的搜索模式。在NLP预处理中，它们用于删除HTML标签、提取电子邮件地址、清理特殊字符、基于模式分词以及规范化格式。它们是任何预处理流程中的必备工具。",
    diagram: "",
    terms: ["tokenization", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 16,
    q: "What is the SentencePiece tokenizer?",
    qChinese: "SentencePiece分词器是什么？",
    options: [
      "A) A tokenizer that only works on English text",
      "B) A tokenizer that requires pre-tokenized input",
      "C) A tokenizer that splits at sentence boundaries only",
      "D) A language-independent subword tokenizer that treats input as a raw byte stream"
    ],
    optionsChinese: [
      "A) 仅适用于英文文本的分词器",
      "B) 需要预分词输入的分词器",
      "C) 仅在句子边界处分割的分词器",
      "D) 将输入作为原始字节流处理的语言无关子词分词器"
    ],
    answer: 3,
    explanation: "SentencePiece is an unsupervised text tokenizer that operates directly on raw text without pre-tokenization. It supports BPE and unigram language model algorithms and is language-independent, making it ideal for multilingual models like T5 and multilingual BERT.",
    explanationChinese: "SentencePiece是一种无监督文本分词器，直接在原始文本上操作而无需预分词。它支持BPE和一元语言模型算法，且与语言无关，使其非常适合T5和多语言BERT等多语言模型。",
    diagram: "",
    terms: ["tokenization", "bert"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 17,
    q: "What is morphological analysis in NLP?",
    qChinese: "NLP中的形态学分析是什么？",
    options: [
      "A) Analyzing the sentiment of a sentence",
      "B) Measuring word frequency",
      "C) Analyzing the topic of a document",
      "D) Studying the internal structure and formation rules of words"
    ],
    optionsChinese: [
      "A) 分析句子的情感",
      "B) 测量词频",
      "C) 分析文档的主题",
      "D) 研究单词的内部结构和构词规则"
    ],
    answer: 3,
    explanation: "Morphological analysis examines the internal structure of words, breaking them into morphemes (smallest meaningful units). For example, 'unhappiness' contains 'un-' (prefix), 'happy' (root), and '-ness' (suffix). This is fundamental to lemmatization and understanding word formation.",
    explanationChinese: "形态学分析检查单词的内部结构，将其分解为词素（最小有意义的单元）。例如，'unhappiness'包含'un-'（前缀）、'happy'（词根）和'-ness'（后缀）。这是词形还原和理解构词法的基础。",
    diagram: "",
    terms: ["lemmatization", "tokenization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 18,
    q: "Which of the following correctly describes unigram tokenization?",
    qChinese: "以下哪项正确描述了一元分词？",
    options: [
      "A) It always splits at whitespace",
      "B) It uses part-of-speech tags to determine splits",
      "C) It selects the tokenization that maximizes the probability of the sentence under a unigram language model",
      "D) It only produces single-character tokens"
    ],
    optionsChinese: [
      "A) 它总是在空格处分割",
      "B) 它使用词性标签来确定分割",
      "C) 它选择在一元语言模型下最大化句子概率的分词方式",
      "D) 它只产生单字符标记"
    ],
    answer: 2,
    explanation: "The unigram tokenization model (used in SentencePiece) starts with a large vocabulary and iteratively removes tokens whose removal least decreases the likelihood. During inference, it finds the most probable segmentation under its learned unigram language model.",
    explanationChinese: "一元分词模型（在SentencePiece中使用）从大词汇表开始，迭代删除那些删除后对似然性影响最小的标记。在推理期间，它在其学习到的一元语言模型下找到最可能的分割方式。",
    diagram: "",
    terms: ["tokenization", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 19,
    q: "What is text encoding in the context of NLP preprocessing?",
    qChinese: "在NLP预处理的语境中，文本编码是什么？",
    options: [
      "A) Training a model on text data",
      "B) Compressing text to save storage",
      "C) Encrypting text for security",
      "D) Converting text characters into a standardized digital format like UTF-8"
    ],
    optionsChinese: [
      "A) 在文本数据上训练模型",
      "B) 压缩文本以节省存储空间",
      "C) 为安全性加密文本",
      "D) 将文本字符转换为UTF-8等标准化数字格式"
    ],
    answer: 3,
    explanation: "Text encoding converts characters into byte sequences using standards like UTF-8 or ASCII. Proper encoding handling is crucial in preprocessing to avoid garbled text. UTF-8 is the dominant encoding for multilingual NLP because it supports virtually all writing systems.",
    explanationChinese: "文本编码使用UTF-8或ASCII等标准将字符转换为字节序列。正确的编码处理在预处理中至关重要，以避免乱码。UTF-8是多语言NLP的主流编码，因为它支持几乎所有的书写系统。",
    diagram: "",
    terms: ["tokenization", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 20,
    q: "What problem does subword tokenization solve that word-level tokenization cannot?",
    qChinese: "子词分词解决了词级分词无法解决的什么问题？",
    options: [
      "A) Parsing syntax trees",
      "B) Computing attention scores",
      "C) Handling out-of-vocabulary (OOV) words",
      "D) Training faster models"
    ],
    optionsChinese: [
      "A) 解析语法树",
      "B) 计算注意力分数",
      "C) 处理词汇表外（OOV）的词",
      "D) 训练更快的模型"
    ],
    answer: 2,
    explanation: "Word-level tokenization assigns an unknown token to any word not in the fixed vocabulary. Subword tokenization (BPE, WordPiece, Unigram) breaks unknown words into known subword pieces, ensuring every word can be represented. This is critical for morphologically rich languages.",
    explanationChinese: "词级分词会将不在固定词汇表中的任何词分配一个未知标记。子词分词（BPE、WordPiece、Unigram）将未知词拆分为已知的子词片段，确保每个词都能被表示。这对形态丰富的语言至关重要。",
    diagram: "",
    terms: ["tokenization", "word_embedding"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 21,
    q: "In NLP preprocessing, what is the purpose of lowercasing text?",
    qChinese: "在NLP预处理中，将文本转为小写的目的是什么？",
    options: [
      "A) To increase vocabulary size",
      "B) To identify proper nouns",
      "C) To improve grammar checking",
      "D) To reduce vocabulary size by treating 'The' and 'the' as the same token"
    ],
    optionsChinese: [
      "A) 增加词汇表大小",
      "B) 识别专有名词",
      "C) 改善语法检查",
      "D) 通过将'The'和'the'视为同一标记来减少词汇表大小"
    ],
    answer: 3,
    explanation: "Lowercasing reduces vocabulary size by mapping all case variants to the same token, so 'The', 'THE', and 'the' become one token. However, it can lose information: 'US' (country) versus 'us' (pronoun), so it is task-dependent whether to apply it.",
    explanationChinese: "小写化通过将所有大小写变体映射到同一标记来减少词汇表大小，因此'The'、'THE'和'the'变成一个标记。但它可能丢失信息：'US'（国家）与'us'（代词），因此是否应用它取决于任务。",
    diagram: "",
    terms: ["tokenization", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 22,
    q: "What is a vocabulary in the context of NLP?",
    qChinese: "在NLP语境中，词汇表是什么？",
    options: [
      "A) The complete set of unique tokens recognized by a model",
      "B) A grammar rule set",
      "C) A list of stopwords",
      "D) A translation dictionary"
    ],
    optionsChinese: [
      "A) 模型识别的所有唯一标记的完整集合",
      "B) 语法规则集",
      "C) 停用词列表",
      "D) 翻译词典"
    ],
    answer: 0,
    explanation: "A vocabulary is the finite set of unique tokens that a model can process. Each token maps to an index used for embedding lookup. Vocabulary size is a key hyperparameter: too small causes excessive OOV tokens; too large increases memory and computation requirements.",
    explanationChinese: "词汇表是模型可以处理的有限唯一标记集合。每个标记映射到用于嵌入查找的索引。词汇表大小是一个关键超参数：太小会导致过多的OOV标记；太大会增加内存和计算需求。",
    diagram: "",
    terms: ["tokenization", "word_embedding"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 23,
    q: "Which preprocessing step would you apply to handle the contraction \"don't\"?",
    qChinese: "你会应用哪个预处理步骤来处理缩写\"don't\"？",
    options: [
      "A) Contraction expansion to convert it to 'do not'",
      "B) Stemming",
      "C) Named entity recognition",
      "D) POS tagging"
    ],
    optionsChinese: [
      "A) 缩写扩展，将其转换为'do not'",
      "B) 词干提取",
      "C) 命名实体识别",
      "D) 词性标注"
    ],
    answer: 0,
    explanation: "Contraction expansion is a normalization step that converts contractions into their full forms: \"don't\" becomes \"do not\", \"I'm\" becomes \"I am\". This ensures consistent tokenization and avoids treating contractions as unknown single tokens during downstream processing.",
    explanationChinese: "缩写扩展是一种规范化步骤，将缩写转换为完整形式：\"don't\"变为\"do not\"，\"I'm\"变为\"I am\"。这确保了一致的分词，并避免在下游处理中将缩写视为未知的单个标记。",
    diagram: "",
    terms: ["tokenization", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 24,
    q: "What does the spaCy lemmatizer rely on to produce accurate lemmas?",
    qChinese: "spaCy词形还原器依赖什么来产生准确的词元？",
    options: [
      "A) Random sampling",
      "B) Word frequency statistics only",
      "C) Character n-grams only",
      "D) Lookup tables and morphological rules with POS context"
    ],
    optionsChinese: [
      "A) 随机采样",
      "B) 仅词频统计",
      "C) 仅字符n-gram",
      "D) 查找表和带有词性上下文的形态规则"
    ],
    answer: 3,
    explanation: "The spaCy lemmatizer uses a combination of lookup tables, morphological rules, and part-of-speech information. Knowing the POS tag is crucial: 'saw' as a verb lemmatizes to 'see', but as a noun it remains 'saw'. This context-aware approach yields accurate base forms.",
    explanationChinese: "spaCy词形还原器使用查找表、形态规则和词性信息的组合。了解词性标签至关重要：'saw'作为动词词形还原为'see'，但作为名词保持为'saw'。这种上下文感知方法产生准确的基本形式。",
    diagram: "",
    terms: ["lemmatization", "pos_tagging"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 25,
    q: "Why is preprocessing order important in an NLP pipeline?",
    qChinese: "为什么预处理顺序在NLP流程中很重要？",
    options: [
      "A) It does not matter; steps can be in any order",
      "B) All preprocessing steps are independent",
      "C) Only the last step affects the output",
      "D) Some steps depend on the output of prior steps, e.g., lemmatization needs POS tags"
    ],
    optionsChinese: [
      "A) 顺序无关紧要；步骤可以任意排列",
      "B) 所有预处理步骤都是独立的",
      "C) 只有最后一步影响输出",
      "D) 某些步骤依赖于先前步骤的输出，例如词形还原需要词性标签"
    ],
    answer: 3,
    explanation: "Preprocessing order matters because steps are interdependent. Sentence segmentation should precede tokenization; POS tagging should precede lemmatization since lemmas depend on word class. Removing stopwords before stemming versus after can produce different results.",
    explanationChinese: "预处理顺序很重要，因为步骤相互依赖。句子分割应在分词之前；词性标注应在词形还原之前，因为词元取决于词类。在词干提取之前与之后删除停用词可能产生不同的结果。",
    diagram: "",
    terms: ["tokenization", "lemmatization", "pos_tagging"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 26,
    q: "What is the bag-of-words (BoW) model?",
    qChinese: "词袋（BoW）模型是什么？",
    options: [
      "A) A representation that counts word occurrences, ignoring grammar and word order",
      "B) A model that preserves word order in text",
      "C) A deep learning architecture for text",
      "D) A method for generating text"
    ],
    optionsChinese: [
      "A) 计算词频并忽略语法和词序的表示方法",
      "B) 保留文本中词序的模型",
      "C) 用于文本的深度学习架构",
      "D) 用于生成文本的方法"
    ],
    answer: 0,
    explanation: "The bag-of-words model represents a document as a vector of word counts or frequencies, completely disregarding word order and grammar. While simple and losing positional information, it remains useful as a baseline for text classification and information retrieval tasks.",
    explanationChinese: "词袋模型将文档表示为词频向量，完全忽略词序和语法。虽然简单且丢失位置信息，但它作为文本分类和信息检索任务的基线仍然有用。",
    diagram: "",
    terms: ["tf_idf", "text_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 27,
    q: "What does TF-IDF stand for?",
    qChinese: "TF-IDF代表什么？",
    options: [
      "A) Text Frequency - Inverse Document Frequency",
      "B) Term Feature - Inverse Distribution Function",
      "C) Token Frequency - Inverse Data Frequency",
      "D) Term Frequency - Inverse Document Frequency"
    ],
    optionsChinese: [
      "A) 文本频率-逆文档频率",
      "B) 词特征-逆分布函数",
      "C) 标记频率-逆数据频率",
      "D) 词频-逆文档频率"
    ],
    answer: 3,
    explanation: "TF-IDF stands for Term Frequency - Inverse Document Frequency. TF measures how often a term appears in a document, while IDF measures how rare a term is across the corpus. Their product highlights terms that are frequent in a specific document but rare overall.",
    explanationChinese: "TF-IDF代表词频-逆文档频率。TF衡量一个词在文档中出现的频率，而IDF衡量一个词在整个语料库中的稀有程度。它们的乘积突出在特定文档中频繁但在整体中稀有的词。",
    diagram: "",
    terms: ["tf_idf", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 28,
    q: "If a term appears in every document, what is its IDF value?",
    qChinese: "如果一个词出现在每个文档中，它的IDF值是多少？",
    options: [
      "A) Very high",
      "B) 1",
      "C) 0 (or close to 0 with log scaling)",
      "D) Undefined"
    ],
    optionsChinese: [
      "A) 非常高",
      "B) 1",
      "C) 0（或在对数缩放下接近0）",
      "D) 未定义"
    ],
    answer: 2,
    explanation: "IDF is typically computed as log(N/df), where N is the total number of documents and df is the number of documents containing the term. If a term appears in all documents, df = N, so IDF = log(1) = 0, indicating the term has no discriminative power.",
    explanationChinese: "IDF通常计算为log(N/df)，其中N是文档总数，df是包含该词的文档数。如果一个词出现在所有文档中，df = N，因此IDF = log(1) = 0，表示该词没有区分能力。",
    diagram: "",
    terms: ["tf_idf", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 29,
    q: "What is a word embedding?",
    qChinese: "什么是词嵌入？",
    options: [
      "A) A one-hot encoded vector",
      "B) A binary encoding of characters",
      "C) A dictionary definition of a word",
      "D) A dense, low-dimensional vector that captures semantic relationships between words"
    ],
    optionsChinese: [
      "A) 独热编码向量",
      "B) 字符的二进制编码",
      "C) 单词的字典定义",
      "D) 捕捉词之间语义关系的稠密低维向量"
    ],
    answer: 3,
    explanation: "Word embeddings are dense, continuous-valued vectors (typically 50-300 dimensions) that represent words in a semantic space. Words with similar meanings are mapped to nearby points. Unlike sparse one-hot vectors, embeddings capture analogies like king - man + woman ≈ queen.",
    explanationChinese: "词嵌入是稠密的、连续值向量（通常50-300维），在语义空间中表示单词。含义相似的词被映射到相近的点。与稀疏的独热向量不同，嵌入可以捕捉类比关系，如king - man + woman ≈ queen。",
    diagram: "",
    terms: ["word_embedding", "word2vec"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 30,
    q: "What are the two training architectures of Word2Vec?",
    qChinese: "Word2Vec的两种训练架构是什么？",
    options: [
      "A) Encoder and Decoder",
      "B) CBOW (Continuous Bag of Words) and Skip-gram",
      "C) RNN and CNN",
      "D) Autoencoder and GAN"
    ],
    optionsChinese: [
      "A) 编码器和解码器",
      "B) CBOW（连续词袋）和Skip-gram",
      "C) RNN和CNN",
      "D) 自编码器和GAN"
    ],
    answer: 1,
    explanation: "Word2Vec offers two architectures: CBOW predicts a target word from its surrounding context words, while Skip-gram predicts surrounding context words from a target word. Skip-gram works better with small datasets and rare words; CBOW is faster for large datasets.",
    explanationChinese: "Word2Vec提供两种架构：CBOW从周围上下文词预测目标词，而Skip-gram从目标词预测周围上下文词。Skip-gram在小数据集和罕见词上表现更好；CBOW对大数据集更快。",
    diagram: "",
    terms: ["word2vec", "word_embedding"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 31,
    q: "How does GloVe differ from Word2Vec?",
    qChinese: "GloVe与Word2Vec有何不同？",
    options: [
      "A) GloVe leverages global word co-occurrence statistics while Word2Vec uses local context windows",
      "B) GloVe uses a neural network while Word2Vec uses matrix factorization",
      "C) GloVe produces sparse vectors while Word2Vec produces dense vectors",
      "D) GloVe can only handle English text"
    ],
    optionsChinese: [
      "A) GloVe利用全局词共现统计，而Word2Vec使用局部上下文窗口",
      "B) GloVe使用神经网络，而Word2Vec使用矩阵分解",
      "C) GloVe产生稀疏向量，而Word2Vec产生稠密向量",
      "D) GloVe只能处理英文文本"
    ],
    answer: 0,
    explanation: "GloVe (Global Vectors) constructs embeddings by factorizing the global word-word co-occurrence matrix from the entire corpus. Word2Vec learns embeddings from local context windows using prediction tasks. GloVe captures global statistical information, while Word2Vec focuses on local patterns.",
    explanationChinese: "GloVe（全局向量）通过分解整个语料库的全局词-词共现矩阵来构建嵌入。Word2Vec使用预测任务从局部上下文窗口学习嵌入。GloVe捕捉全局统计信息，而Word2Vec专注于局部模式。",
    diagram: "",
    terms: ["word_embedding", "word2vec"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 32,
    q: "What is the main limitation of one-hot encoding for words?",
    qChinese: "独热编码对单词的主要局限性是什么？",
    options: [
      "A) It produces dense vectors",
      "B) It requires a neural network to compute",
      "C) All word vectors are orthogonal so no semantic similarity can be measured",
      "D) It only works for short texts"
    ],
    optionsChinese: [
      "A) 它产生稠密向量",
      "B) 它需要神经网络来计算",
      "C) 所有词向量都是正交的，因此无法衡量语义相似性",
      "D) 它仅适用于短文本"
    ],
    answer: 2,
    explanation: "One-hot encoding creates sparse vectors where each word has a single 1 and all other positions are 0. Every pair of word vectors has zero cosine similarity regardless of meaning. The vectors are also extremely high-dimensional, equaling the vocabulary size.",
    explanationChinese: "独热编码创建稀疏向量，其中每个词有一个1，所有其他位置为0。无论含义如何，每对词向量的余弦相似度都为零。向量的维度也极高，等于词汇表大小。",
    diagram: "",
    terms: ["word_embedding", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 33,
    q: "In Word2Vec Skip-gram, what is the training objective?",
    qChinese: "在Word2Vec的Skip-gram中，训练目标是什么？",
    options: [
      "A) Predict the center word from context words",
      "B) Minimize the perplexity of the language model",
      "C) Classify documents into categories",
      "D) Predict context words given a center word"
    ],
    optionsChinese: [
      "A) 从上下文词预测中心词",
      "B) 最小化语言模型的困惑度",
      "C) 将文档分类到类别中",
      "D) 给定中心词预测上下文词"
    ],
    answer: 3,
    explanation: "The Skip-gram model takes a center word as input and tries to predict the surrounding context words within a defined window. By maximizing the probability of context words given the center word, it learns word representations where semantically similar words have similar vectors.",
    explanationChinese: "Skip-gram模型以中心词为输入，尝试预测定义窗口内的周围上下文词。通过最大化给定中心词时上下文词的概率，它学习语义相似的词具有相似向量的词表示。",
    diagram: "",
    terms: ["word2vec", "word_embedding"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 34,
    q: "What is negative sampling in Word2Vec?",
    qChinese: "Word2Vec中的负采样是什么？",
    options: [
      "A) A technique to approximate the softmax by training on a few randomly sampled negative examples",
      "B) Sampling words with negative sentiment",
      "C) Removing infrequent words from the vocabulary",
      "D) Sampling context windows of different sizes"
    ],
    optionsChinese: [
      "A) 通过在少量随机采样的负例上训练来近似softmax的技术",
      "B) 采样具有负面情感的词",
      "C) 从词汇表中删除低频词",
      "D) 采样不同大小的上下文窗口"
    ],
    answer: 0,
    explanation: "Negative sampling avoids computing the expensive full softmax over the entire vocabulary. Instead, for each positive word-context pair, it samples a small number of random negative words and trains a binary classifier. This dramatically reduces computational cost while preserving embedding quality.",
    explanationChinese: "负采样避免了在整个词汇表上计算昂贵的完整softmax。相反，对于每个正的词-上下文对，它采样少量随机负词并训练二分类器。这大大降低了计算成本，同时保持了嵌入质量。",
    diagram: "",
    terms: ["word2vec", "word_embedding"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 35,
    q: "What is the distributional hypothesis in NLP?",
    qChinese: "NLP中的分布假说是什么？",
    options: [
      "A) Words should be distributed evenly across documents",
      "B) Words that occur in similar contexts tend to have similar meanings",
      "C) Word frequencies follow a uniform distribution",
      "D) All words have equal importance in a sentence"
    ],
    optionsChinese: [
      "A) 单词应在文档中均匀分布",
      "B) 出现在相似上下文中的词往往具有相似的含义",
      "C) 词频遵循均匀分布",
      "D) 所有词在句子中具有相同的重要性"
    ],
    answer: 1,
    explanation: "The distributional hypothesis, attributed to linguist J.R. Firth ('You shall know a word by the company it keeps'), states that words appearing in similar contexts share semantic meaning. This principle underlies all modern word embedding methods including Word2Vec and GloVe.",
    explanationChinese: "分布假说归功于语言学家J.R. Firth（'你应该通过一个词的伴随词来了解它'），指出出现在相似上下文中的词共享语义含义。这一原则是所有现代词嵌入方法（包括Word2Vec和GloVe）的基础。",
    diagram: "",
    terms: ["word_embedding", "word2vec"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 36,
    q: "What word analogy does Word2Vec famously capture?",
    qChinese: "Word2Vec著名地捕捉了什么词类比？",
    options: [
      "A) cat - dog + fish ≈ bird",
      "B) king - man + woman ≈ queen",
      "C) happy - sad + angry ≈ joyful",
      "D) run - walk + swim ≈ fly"
    ],
    optionsChinese: [
      "A) cat - dog + fish ≈ bird",
      "B) king - man + woman ≈ queen",
      "C) happy - sad + angry ≈ joyful",
      "D) run - walk + swim ≈ fly"
    ],
    answer: 1,
    explanation: "Word2Vec famously demonstrated that vector arithmetic captures semantic relationships: vector('king') - vector('man') + vector('woman') ≈ vector('queen'). This shows that the embedding space encodes meaningful gender and royalty dimensions as consistent directions.",
    explanationChinese: "Word2Vec著名地展示了向量算术可以捕捉语义关系：vector('king') - vector('man') + vector('woman') ≈ vector('queen')。这表明嵌入空间将有意义的性别和皇族维度编码为一致的方向。",
    diagram: "",
    terms: ["word2vec", "word_embedding"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 37,
    q: "What is cosine similarity used for in word embeddings?",
    qChinese: "余弦相似度在词嵌入中用于什么？",
    options: [
      "A) Measuring the angular similarity between two word vectors",
      "B) Training the embedding model",
      "C) Reducing the dimensionality of embeddings",
      "D) Tokenizing text"
    ],
    optionsChinese: [
      "A) 测量两个词向量之间的角度相似性",
      "B) 训练嵌入模型",
      "C) 降低嵌入的维度",
      "D) 分词"
    ],
    answer: 0,
    explanation: "Cosine similarity measures the cosine of the angle between two vectors, ranging from -1 to 1. In word embeddings, it quantifies how semantically similar two words are regardless of vector magnitude. A value of 1 means identical direction (very similar), 0 means orthogonal (unrelated).",
    explanationChinese: "余弦相似度测量两个向量之间角度的余弦值，范围从-1到1。在词嵌入中，它量化两个词的语义相似程度，与向量大小无关。值为1表示方向相同（非常相似），0表示正交（不相关）。",
    diagram: "",
    terms: ["word_embedding", "word2vec"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 38,
    q: "What is a co-occurrence matrix in NLP?",
    qChinese: "NLP中的共现矩阵是什么？",
    options: [
      "A) A matrix showing document labels",
      "B) A matrix of word embeddings",
      "C) A confusion matrix for classification",
      "D) A matrix recording how often pairs of words appear together within a context window"
    ],
    optionsChinese: [
      "A) 显示文档标签的矩阵",
      "B) 词嵌入矩阵",
      "C) 分类的混淆矩阵",
      "D) 记录词对在上下文窗口内一起出现频率的矩阵"
    ],
    answer: 3,
    explanation: "A co-occurrence matrix is a square matrix where entry (i,j) counts how often words i and j appear within a specified context window across the corpus. GloVe directly uses this matrix for training. SVD-based methods also factorize this matrix to obtain word vectors.",
    explanationChinese: "共现矩阵是一个方阵，其中条目(i,j)计算词i和词j在整个语料库中在指定上下文窗口内一起出现的频率。GloVe直接使用这个矩阵进行训练。基于SVD的方法也分解这个矩阵来获得词向量。",
    diagram: "",
    terms: ["word_embedding", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 39,
    q: "What is the advantage of using pre-trained word embeddings?",
    qChinese: "使用预训练词嵌入的优势是什么？",
    options: [
      "A) They provide rich semantic representations learned from large corpora, enabling transfer learning",
      "B) They eliminate the need for any task-specific training",
      "C) They always outperform task-specific embeddings",
      "D) They reduce the vocabulary to zero"
    ],
    optionsChinese: [
      "A) 它们提供从大型语料库学习的丰富语义表示，实现迁移学习",
      "B) 它们消除了任何特定任务训练的需要",
      "C) 它们总是优于特定任务的嵌入",
      "D) 它们将词汇表减少到零"
    ],
    answer: 0,
    explanation: "Pre-trained embeddings like Word2Vec and GloVe are trained on massive corpora (billions of words) and capture general semantic knowledge. Using them as initialization for downstream tasks is a form of transfer learning, especially beneficial when task-specific labeled data is limited.",
    explanationChinese: "预训练嵌入（如Word2Vec和GloVe）在大规模语料库（数十亿词）上训练，捕捉一般语义知识。将它们用作下游任务的初始化是迁移学习的一种形式，当特定任务的标注数据有限时特别有益。",
    diagram: "",
    terms: ["word_embedding", "word2vec"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 40,
    q: "What is the dimensionality of a typical Word2Vec embedding?",
    qChinese: "典型Word2Vec嵌入的维度是多少？",
    options: [
      "A) 2-5 dimensions",
      "B) Exactly 1 dimension",
      "C) 10,000+ dimensions",
      "D) 100-300 dimensions"
    ],
    optionsChinese: [
      "A) 2-5维",
      "B) 恰好1维",
      "C) 10,000+维",
      "D) 100-300维"
    ],
    answer: 3,
    explanation: "Word2Vec embeddings typically range from 100 to 300 dimensions, though the original paper used 300. This is much smaller than the vocabulary size (which could be tens of thousands), making them dense and efficient. The dimensionality is a hyperparameter tuned for the task.",
    explanationChinese: "Word2Vec嵌入通常范围从100到300维，原始论文使用300维。这比词汇表大小（可能是数万）小得多，使其稠密高效。维度是为任务调优的超参数。",
    diagram: "",
    terms: ["word2vec", "word_embedding"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 41,
    q: "What limitation do static word embeddings like Word2Vec have?",
    qChinese: "像Word2Vec这样的静态词嵌入有什么局限性？",
    options: [
      "A) They cannot represent common words",
      "B) They only work for English",
      "C) They require too much memory",
      "D) Each word has only one vector regardless of its different meanings in context"
    ],
    optionsChinese: [
      "A) 它们不能表示常见词",
      "B) 它们只适用于英语",
      "C) 它们需要太多内存",
      "D) 每个词只有一个向量，不管其在上下文中的不同含义"
    ],
    answer: 3,
    explanation: "Static embeddings assign one fixed vector per word type. The word 'bank' gets the same vector whether it means a financial institution or a river bank. Contextual embeddings like BERT and ELMo address this by producing different representations based on surrounding context.",
    explanationChinese: "静态嵌入为每个词类型分配一个固定向量。无论'bank'表示金融机构还是河岸，都获得相同的向量。像BERT和ELMo这样的上下文嵌入通过根据周围上下文生成不同的表示来解决这个问题。",
    diagram: "",
    terms: ["word2vec", "word_embedding", "bert"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 42,
    q: "How does the TF component in TF-IDF work?",
    qChinese: "TF-IDF中的TF组件如何工作？",
    options: [
      "A) It counts the total number of documents",
      "B) It assigns a binary value for term presence",
      "C) It computes the inverse frequency across all terms",
      "D) It measures how frequently a term appears in a specific document"
    ],
    optionsChinese: [
      "A) 它计算文档总数",
      "B) 它为词的存在分配二进制值",
      "C) 它计算所有词的逆频率",
      "D) 它衡量一个词在特定文档中出现的频率"
    ],
    answer: 3,
    explanation: "Term Frequency (TF) measures how often a word appears in a document, often normalized by document length. Common formulations include raw count, log-normalized (1 + log(tf)), or boolean. Higher TF means the term is more relevant to that particular document.",
    explanationChinese: "词频（TF）衡量一个词在文档中出现的频率，通常通过文档长度进行归一化。常见的公式包括原始计数、对数归一化（1 + log(tf)）或布尔值。较高的TF意味着该词与特定文档更相关。",
    diagram: "",
    terms: ["tf_idf", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 43,
    q: "What is FastText's key innovation over Word2Vec?",
    qChinese: "FastText相对于Word2Vec的关键创新是什么？",
    options: [
      "A) It uses a transformer architecture",
      "B) It trains only on labeled data",
      "C) It represents words as sums of their character n-gram vectors",
      "D) It uses attention mechanisms"
    ],
    optionsChinese: [
      "A) 它使用transformer架构",
      "B) 它仅在标注数据上训练",
      "C) 它将词表示为其字符n-gram向量的总和",
      "D) 它使用注意力机制"
    ],
    answer: 2,
    explanation: "FastText extends Word2Vec by representing each word as a bag of character n-grams. The word vector is the sum of its n-gram vectors. This allows FastText to generate embeddings for out-of-vocabulary words by composing their n-grams, and better handles morphologically rich languages.",
    explanationChinese: "FastText通过将每个词表示为字符n-gram的词袋来扩展Word2Vec。词向量是其n-gram向量的总和。这使FastText能够通过组合n-gram为词汇表外的词生成嵌入，并更好地处理形态丰富的语言。",
    diagram: "",
    terms: ["word2vec", "word_embedding"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 44,
    q: "What is the purpose of dimensionality reduction techniques like SVD applied to word co-occurrence matrices?",
    qChinese: "将SVD等降维技术应用于词共现矩阵的目的是什么？",
    options: [
      "A) To obtain dense, low-dimensional word representations from sparse high-dimensional data",
      "B) To increase the matrix size",
      "C) To remove all stopwords",
      "D) To compute word frequencies"
    ],
    optionsChinese: [
      "A) 从稀疏高维数据中获得稠密低维词表示",
      "B) 增加矩阵大小",
      "C) 删除所有停用词",
      "D) 计算词频"
    ],
    answer: 0,
    explanation: "SVD (Singular Value Decomposition) decomposes the large, sparse co-occurrence matrix into lower-rank matrices, producing dense word vectors. This is similar to LSA (Latent Semantic Analysis). The resulting vectors capture latent semantic structures while being much more compact.",
    explanationChinese: "SVD（奇异值分解）将大型稀疏共现矩阵分解为低秩矩阵，产生稠密的词向量。这类似于LSA（潜在语义分析）。结果向量捕捉潜在的语义结构，同时更加紧凑。",
    diagram: "",
    terms: ["word_embedding", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 45,
    q: "What is an embedding layer in a neural network?",
    qChinese: "神经网络中的嵌入层是什么？",
    options: [
      "A) A lookup table that maps discrete token indices to dense vectors",
      "B) A layer that outputs class probabilities",
      "C) A convolutional layer for text",
      "D) The final output layer"
    ],
    optionsChinese: [
      "A) 将离散标记索引映射到稠密向量的查找表",
      "B) 输出类别概率的层",
      "C) 用于文本的卷积层",
      "D) 最终输出层"
    ],
    answer: 0,
    explanation: "An embedding layer is essentially a weight matrix of shape (vocab_size, embedding_dim) that maps each token index to a dense vector. During training, these vectors are updated via backpropagation. It can be initialized with pre-trained embeddings or learned from scratch.",
    explanationChinese: "嵌入层本质上是一个形状为(vocab_size, embedding_dim)的权重矩阵，将每个标记索引映射到稠密向量。在训练期间，这些向量通过反向传播更新。它可以用预训练嵌入初始化或从头学习。",
    diagram: "",
    terms: ["word_embedding", "word2vec"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 46,
    q: "What does Zipf's law describe in the context of NLP?",
    qChinese: "齐夫定律在NLP语境中描述了什么？",
    options: [
      "A) The relationship between embedding dimensions and accuracy",
      "B) The speed of tokenization algorithms",
      "C) The observation that word frequency is inversely proportional to its rank",
      "D) The number of layers needed in a transformer"
    ],
    optionsChinese: [
      "A) 嵌入维度与准确性之间的关系",
      "B) 分词算法的速度",
      "C) 词频与其排名成反比的观察",
      "D) transformer中所需的层数"
    ],
    answer: 2,
    explanation: "Zipf's law states that the frequency of a word is inversely proportional to its rank in the frequency table. The most common word appears roughly twice as often as the second most common. This impacts vocabulary design, sampling strategies, and the treatment of rare words.",
    explanationChinese: "齐夫定律指出，一个词的频率与其在频率表中的排名成反比。最常见的词出现的频率大约是第二常见词的两倍。这影响了词汇表设计、采样策略和罕见词的处理。",
    diagram: "",
    terms: ["corpus", "word_embedding"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 47,
    q: "What is the window size in Word2Vec?",
    qChinese: "Word2Vec中的窗口大小是什么？",
    options: [
      "A) The number of training epochs",
      "B) The embedding dimensionality",
      "C) The number of context words on each side of the target word considered during training",
      "D) The total vocabulary size"
    ],
    optionsChinese: [
      "A) 训练轮数",
      "B) 嵌入维度",
      "C) 训练期间在目标词每侧考虑的上下文词数",
      "D) 总词汇表大小"
    ],
    answer: 2,
    explanation: "The window size determines how many words on each side of the target word are considered as context. A window of 5 means 5 words to the left and 5 to the right. Smaller windows capture syntactic relationships; larger windows capture more topical or semantic relationships.",
    explanationChinese: "窗口大小决定了目标词每侧有多少词被视为上下文。窗口为5意味着左边5个词和右边5个词。较小的窗口捕捉句法关系；较大的窗口捕捉更多的主题或语义关系。",
    diagram: "",
    terms: ["word2vec", "word_embedding"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 48,
    q: "What is ELMo's main contribution to word representations?",
    qChinese: "ELMo对词表示的主要贡献是什么？",
    options: [
      "A) It invented word embeddings",
      "B) It used convolutional neural networks for embeddings",
      "C) It replaced all static embeddings permanently",
      "D) It introduced context-dependent word representations using bidirectional LSTMs"
    ],
    optionsChinese: [
      "A) 它发明了词嵌入",
      "B) 它使用卷积神经网络进行嵌入",
      "C) 它永久替代了所有静态嵌入",
      "D) 它使用双向LSTM引入了上下文相关的词表示"
    ],
    answer: 3,
    explanation: "ELMo (Embeddings from Language Models) generates context-dependent representations by running a bidirectional LSTM language model. The same word gets different vectors depending on its context, solving the polysemy problem of static embeddings. It was a precursor to BERT.",
    explanationChinese: "ELMo（来自语言模型的嵌入）通过运行双向LSTM语言模型生成上下文相关的表示。同一个词根据其上下文获得不同的向量，解决了静态嵌入的多义词问题。它是BERT的前身。",
    diagram: "",
    terms: ["word_embedding", "recurrent_nlp"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 49,
    q: "In TF-IDF, what does a high TF-IDF score for a term in a document indicate?",
    qChinese: "在TF-IDF中，一个词在文档中的高TF-IDF分数表示什么？",
    options: [
      "A) The term is common across all documents",
      "B) The term is frequent in this document but rare across the corpus",
      "C) The term appears only once",
      "D) The document is very long"
    ],
    optionsChinese: [
      "A) 该词在所有文档中都很常见",
      "B) 该词在此文档中频繁出现但在语料库中很少见",
      "C) 该词只出现一次",
      "D) 文档非常长"
    ],
    answer: 1,
    explanation: "A high TF-IDF score means the term has high term frequency in the specific document (high TF) and appears in relatively few documents overall (high IDF). Such terms are strong discriminators that characterize the content of that particular document.",
    explanationChinese: "高TF-IDF分数意味着该词在特定文档中具有高词频（高TF），并且在整体文档中出现较少（高IDF）。这些词是强有力的区分器，表征了特定文档的内容。",
    diagram: "",
    terms: ["tf_idf", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 50,
    q: "What is the curse of dimensionality in the context of word representations?",
    qChinese: "在词表示的语境中，维度灾难是什么？",
    options: [
      "A) Having too few features",
      "B) Vocabulary size decreasing over time",
      "C) Word embeddings getting too small",
      "D) As dimensionality increases, data becomes sparse and distances become less meaningful"
    ],
    optionsChinese: [
      "A) 特征太少",
      "B) 词汇表大小随时间减少",
      "C) 词嵌入变得太小",
      "D) 随着维度增加，数据变得稀疏，距离变得不那么有意义"
    ],
    answer: 3,
    explanation: "The curse of dimensionality refers to the fact that in very high-dimensional spaces, data points become uniformly distant and similarity measures lose meaning. One-hot vectors of vocabulary size 50,000 suffer severely. Dense embeddings of 300 dimensions mitigate this problem.",
    explanationChinese: "维度灾难是指在非常高维的空间中，数据点变得均匀分布且相似度度量失去意义。词汇表大小为50,000的独热向量受此影响严重。300维的稠密嵌入缓解了这个问题。",
    diagram: "",
    terms: ["word_embedding", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 51,
    q: "What is the GloVe loss function designed to capture?",
    qChinese: "GloVe损失函数旨在捕捉什么？",
    options: [
      "A) The relationship between the dot product of word vectors and the logarithm of their co-occurrence probability",
      "B) Classification accuracy",
      "C) Perplexity of generated text",
      "D) The edit distance between words"
    ],
    optionsChinese: [
      "A) 词向量点积与其共现概率对数之间的关系",
      "B) 分类准确率",
      "C) 生成文本的困惑度",
      "D) 词之间的编辑距离"
    ],
    answer: 0,
    explanation: "GloVe's weighted least-squares objective aims to make the dot product of two word vectors equal the logarithm of their co-occurrence count. A weighting function downweights very frequent pairs to prevent common co-occurrences from dominating the training signal.",
    explanationChinese: "GloVe的加权最小二乘目标旨在使两个词向量的点积等于其共现计数的对数。权重函数对非常频繁的对降权，以防止常见共现主导训练信号。",
    diagram: "",
    terms: ["word_embedding", "word2vec"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 52,
    q: "What is document-term matrix?",
    qChinese: "什么是文档-词矩阵？",
    options: [
      "A) A matrix where rows represent documents and columns represent terms with frequency values",
      "B) A matrix of word embeddings",
      "C) A co-occurrence matrix of words",
      "D) A matrix of POS tags"
    ],
    optionsChinese: [
      "A) 行表示文档、列表示词、值为频率的矩阵",
      "B) 词嵌入矩阵",
      "C) 词的共现矩阵",
      "D) 词性标签矩阵"
    ],
    answer: 0,
    explanation: "A document-term matrix (DTM) has documents as rows and unique terms as columns. Each cell contains the frequency (or TF-IDF weight) of a term in a document. It is the fundamental representation used in bag-of-words models, LSA, and many text classification methods.",
    explanationChinese: "文档-词矩阵（DTM）以文档为行，唯一词为列。每个单元格包含词在文档中的频率（或TF-IDF权重）。它是词袋模型、LSA和许多文本分类方法中使用的基本表示。",
    diagram: "",
    terms: ["tf_idf", "text_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 53,
    q: "Why are word embeddings considered a form of unsupervised learning?",
    qChinese: "为什么词嵌入被认为是一种无监督学习？",
    options: [
      "A) They require labeled datasets",
      "B) They are not machine learning at all",
      "C) They use human annotations for training",
      "D) They learn representations from unlabeled text using self-supervised objectives"
    ],
    optionsChinese: [
      "A) 它们需要标注数据集",
      "B) 它们根本不是机器学习",
      "C) 它们使用人工标注进行训练",
      "D) 它们使用自监督目标从无标注文本中学习表示"
    ],
    answer: 3,
    explanation: "Word embeddings are trained on raw, unlabeled text. The training signal comes from the text structure itself: predicting context words (Word2Vec) or fitting co-occurrence statistics (GloVe). This is sometimes called self-supervised learning since labels are derived from the data automatically.",
    explanationChinese: "词嵌入在原始无标注文本上训练。训练信号来自文本结构本身：预测上下文词（Word2Vec）或拟合共现统计（GloVe）。这有时被称为自监督学习，因为标签是从数据中自动生成的。",
    diagram: "",
    terms: ["word_embedding", "word2vec"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 54,
    q: "What is the main disadvantage of bag-of-words representation?",
    qChinese: "词袋表示的主要缺点是什么？",
    options: [
      "A) It is too computationally expensive",
      "B) It loses word order information and cannot capture phrase-level meaning",
      "C) It produces vectors that are too small",
      "D) It requires pre-trained embeddings"
    ],
    optionsChinese: [
      "A) 计算量太大",
      "B) 它丢失了词序信息，无法捕捉短语级别的含义",
      "C) 它产生的向量太小",
      "D) 它需要预训练嵌入"
    ],
    answer: 1,
    explanation: "Bag-of-words completely ignores word order, so 'dog bites man' and 'man bites dog' have identical representations despite opposite meanings. It also cannot capture multi-word expressions or compositional semantics. N-grams partially address this but increase dimensionality.",
    explanationChinese: "词袋完全忽略词序，因此'dog bites man'和'man bites dog'具有相同的表示，尽管含义相反。它也无法捕捉多词表达或组合语义。N-gram部分解决了这个问题但增加了维度。",
    diagram: "",
    terms: ["tf_idf", "text_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 55,
    q: "What is the relationship between pointwise mutual information (PMI) and word embeddings?",
    qChinese: "逐点互信息（PMI）与词嵌入之间的关系是什么？",
    options: [
      "A) They are completely unrelated",
      "B) It has been shown that Word2Vec's Skip-gram with negative sampling implicitly factorizes a shifted PMI matrix",
      "C) PMI is used to compute TF-IDF",
      "D) PMI replaces cosine similarity"
    ],
    optionsChinese: [
      "A) 它们完全无关",
      "B) 已证明Word2Vec的Skip-gram负采样隐式分解了移位PMI矩阵",
      "C) PMI用于计算TF-IDF",
      "D) PMI替代余弦相似度"
    ],
    answer: 1,
    explanation: "Levy and Goldberg (2014) proved that Word2Vec's Skip-gram with negative sampling implicitly factorizes a word-context matrix whose values are shifted PMI. This bridges the gap between count-based methods and prediction-based methods, showing they capture similar information.",
    explanationChinese: "Levy和Goldberg（2014）证明Word2Vec的Skip-gram负采样隐式分解了一个值为移位PMI的词-上下文矩阵。这弥合了基于计数的方法和基于预测的方法之间的差距，表明它们捕捉了相似的信息。",
    diagram: "",
    terms: ["word2vec", "word_embedding"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 56,
    q: "What is a language model in NLP?",
    qChinese: "NLP中的语言模型是什么？",
    options: [
      "A) A probabilistic model that assigns probabilities to sequences of words",
      "B) A model that translates between languages",
      "C) A model that only generates text",
      "D) A model that only corrects grammar"
    ],
    optionsChinese: [
      "A) 为词序列分配概率的概率模型",
      "B) 在语言之间翻译的模型",
      "C) 仅生成文本的模型",
      "D) 仅纠正语法的模型"
    ],
    answer: 0,
    explanation: "A language model estimates the probability distribution over sequences of words. It can compute P(w1, w2, ..., wn) for a sentence, or P(wn | w1, ..., wn-1) for the next word prediction. Language models are foundational to speech recognition, machine translation, and text generation.",
    explanationChinese: "语言模型估计词序列上的概率分布。它可以计算句子的P(w1, w2, ..., wn)，或下一个词预测的P(wn | w1, ..., wn-1)。语言模型是语音识别、机器翻译和文本生成的基础。",
    diagram: "",
    terms: ["language_model", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 57,
    q: "What is an n-gram language model?",
    qChinese: "什么是n-gram语言模型？",
    options: [
      "A) A model that approximates the probability of a word based on the previous n-1 words",
      "B) A model that uses transformer architecture",
      "C) A model with n hidden layers",
      "D) A model trained on n documents"
    ],
    optionsChinese: [
      "A) 基于前n-1个词近似一个词的概率的模型",
      "B) 使用transformer架构的模型",
      "C) 具有n个隐藏层的模型",
      "D) 在n个文档上训练的模型"
    ],
    answer: 0,
    explanation: "An n-gram language model uses the Markov assumption to approximate P(w_t | w_1,...,w_{t-1}) ≈ P(w_t | w_{t-n+1},...,w_{t-1}), considering only the previous n-1 words. Bigrams (n=2) use one previous word, trigrams (n=3) use two. They are simple but cannot capture long-range dependencies.",
    explanationChinese: "n-gram语言模型使用马尔可夫假设近似P(w_t | w_1,...,w_{t-1}) ≈ P(w_t | w_{t-n+1},...,w_{t-1})，只考虑前n-1个词。二元组（n=2）使用一个前词，三元组（n=3）使用两个。它们简单但无法捕捉长距离依赖。",
    diagram: "",
    terms: ["language_model", "perplexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 58,
    q: "What is perplexity in the context of language models?",
    qChinese: "在语言模型的语境中，困惑度是什么？",
    options: [
      "A) A measure of model size",
      "B) The training time of a model",
      "C) The number of parameters in a model",
      "D) The inverse probability of the test set normalized by the number of words, measuring how well a model predicts a sample"
    ],
    optionsChinese: [
      "A) 模型大小的度量",
      "B) 模型的训练时间",
      "C) 模型中的参数数量",
      "D) 测试集的逆概率除以词数，衡量模型预测样本的能力"
    ],
    answer: 3,
    explanation: "Perplexity is 2^H, where H is the cross-entropy of the model on the test set. It can be interpreted as the average number of equally likely words the model considers at each step. Lower perplexity indicates better prediction. A perplexity of 100 means the model is as confused as choosing among 100 words.",
    explanationChinese: "困惑度是2^H，其中H是模型在测试集上的交叉熵。它可以解释为模型在每一步考虑的等可能词的平均数量。较低的困惑度表示更好的预测。困惑度为100意味着模型如同在100个词中选择一样困惑。",
    diagram: "",
    terms: ["perplexity", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 59,
    q: "Why is smoothing necessary in n-gram language models?",
    qChinese: "为什么n-gram语言模型中需要平滑处理？",
    options: [
      "A) To handle unseen n-grams that would otherwise have zero probability",
      "B) To make the model run faster",
      "C) To reduce the vocabulary size",
      "D) To increase the perplexity"
    ],
    optionsChinese: [
      "A) 处理否则将具有零概率的未见n-gram",
      "B) 使模型运行更快",
      "C) 减少词汇表大小",
      "D) 增加困惑度"
    ],
    answer: 0,
    explanation: "N-gram models assign zero probability to unseen n-grams, which makes the entire sentence probability zero. Smoothing techniques like Laplace (add-1), add-k, Good-Turing, and Kneser-Ney redistribute probability mass to unseen events, preventing zero probabilities.",
    explanationChinese: "N-gram模型将零概率分配给未见的n-gram，这使整个句子的概率为零。拉普拉斯（加1）、加k、Good-Turing和Kneser-Ney等平滑技术将概率质量重新分配给未见事件，防止零概率。",
    diagram: "",
    terms: ["language_model", "perplexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 60,
    q: "What is Laplace smoothing (add-1 smoothing)?",
    qChinese: "什么是拉普拉斯平滑（加1平滑）？",
    options: [
      "A) Multiplying all counts by 2",
      "B) Adding 1 to every n-gram count to avoid zero probabilities",
      "C) Removing n-grams with count 1",
      "D) Using logarithmic scaling"
    ],
    optionsChinese: [
      "A) 将所有计数乘以2",
      "B) 为每个n-gram计数加1以避免零概率",
      "C) 删除计数为1的n-gram",
      "D) 使用对数缩放"
    ],
    answer: 1,
    explanation: "Laplace smoothing adds 1 to every n-gram count, ensuring no n-gram has zero probability. The denominator is adjusted by adding the vocabulary size V. While simple, it over-discounts frequent n-grams and assigns too much probability to unseen ones, making it suboptimal for large vocabularies.",
    explanationChinese: "拉普拉斯平滑为每个n-gram计数加1，确保没有n-gram具有零概率。分母通过加上词汇表大小V进行调整。虽然简单，但它过度折扣频繁的n-gram并为未见的n-gram分配过多概率，对大词汇表不是最优的。",
    diagram: "",
    terms: ["language_model", "perplexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 61,
    q: "What is Kneser-Ney smoothing?",
    qChinese: "什么是Kneser-Ney平滑？",
    options: [
      "A) An advanced smoothing that uses absolute discounting and distributes mass based on continuation probability",
      "B) A smoothing method that only uses unigrams",
      "C) A method that removes infrequent words",
      "D) A neural network-based smoothing"
    ],
    optionsChinese: [
      "A) 使用绝对折扣并基于延续概率分配质量的高级平滑方法",
      "B) 仅使用一元组的平滑方法",
      "C) 删除低频词的方法",
      "D) 基于神经网络的平滑"
    ],
    answer: 0,
    explanation: "Kneser-Ney smoothing subtracts a fixed discount from observed counts and redistributes that mass to lower-order models weighted by continuation probability (how many different contexts a word appears in). It is considered the most effective n-gram smoothing method in practice.",
    explanationChinese: "Kneser-Ney平滑从观察到的计数中减去固定折扣，并将该质量按延续概率（一个词出现在多少不同上下文中）加权重新分配给低阶模型。它被认为是实践中最有效的n-gram平滑方法。",
    diagram: "",
    terms: ["language_model", "perplexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 62,
    q: "What is the chain rule of probability as applied to language models?",
    qChinese: "概率链式法则如何应用于语言模型？",
    options: [
      "A) P(w1...wn) = P(w1) + P(w2) + ... + P(wn)",
      "B) P(w1...wn) = P(w1) × P(w2|w1) × P(w3|w1,w2) × ... × P(wn|w1,...,wn-1)",
      "C) P(w1...wn) = P(w1) × P(w2) × ... × P(wn)",
      "D) P(w1...wn) = max(P(w1), P(w2), ..., P(wn))"
    ],
    optionsChinese: [
      "A) P(w1...wn) = P(w1) + P(w2) + ... + P(wn)",
      "B) P(w1...wn) = P(w1) × P(w2|w1) × P(w3|w1,w2) × ... × P(wn|w1,...,wn-1)",
      "C) P(w1...wn) = P(w1) × P(w2) × ... × P(wn)",
      "D) P(w1...wn) = max(P(w1), P(w2), ..., P(wn))"
    ],
    answer: 1,
    explanation: "The chain rule decomposes the joint probability of a word sequence into a product of conditional probabilities. Each word's probability is conditioned on all preceding words. N-gram models approximate this by limiting the conditioning context to the previous n-1 words.",
    explanationChinese: "链式法则将词序列的联合概率分解为条件概率的乘积。每个词的概率以所有前面的词为条件。N-gram模型通过将条件上下文限制为前n-1个词来近似这一点。",
    diagram: "",
    terms: ["language_model", "perplexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 63,
    q: "What is the Markov assumption in n-gram models?",
    qChinese: "n-gram模型中的马尔可夫假设是什么？",
    options: [
      "A) All words in a sentence are independent",
      "B) The probability of a word depends only on a fixed number of preceding words",
      "C) Words only depend on the following words",
      "D) The entire sentence history must be considered"
    ],
    optionsChinese: [
      "A) 句子中所有词都是独立的",
      "B) 一个词的概率仅取决于固定数量的前面的词",
      "C) 词仅取决于后面的词",
      "D) 必须考虑整个句子历史"
    ],
    answer: 1,
    explanation: "The Markov assumption states that the future state depends only on a limited history. In a bigram model (first-order Markov), P(wt|w1,...,wt-1) ≈ P(wt|wt-1). This simplification makes computation tractable but loses long-range contextual information.",
    explanationChinese: "马尔可夫假设指出未来状态仅取决于有限的历史。在二元组模型（一阶马尔可夫）中，P(wt|w1,...,wt-1) ≈ P(wt|wt-1)。这种简化使计算可行但丢失了长距离上下文信息。",
    diagram: "",
    terms: ["language_model", "perplexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 64,
    q: "What is the relationship between cross-entropy and perplexity?",
    qChinese: "交叉熵和困惑度之间的关系是什么？",
    options: [
      "A) They are identical",
      "B) Cross-entropy equals perplexity squared",
      "C) Perplexity equals 2 raised to the power of cross-entropy",
      "D) They are inversely proportional"
    ],
    optionsChinese: [
      "A) 它们是相同的",
      "B) 交叉熵等于困惑度的平方",
      "C) 困惑度等于2的交叉熵次方",
      "D) 它们成反比"
    ],
    answer: 2,
    explanation: "Perplexity (PP) = 2^H(P,M), where H is the cross-entropy between the true distribution P and the model M. Lower cross-entropy means lower perplexity. This relationship allows us to use cross-entropy loss during training and report perplexity as an interpretable evaluation metric.",
    explanationChinese: "困惑度(PP) = 2^H(P,M)，其中H是真实分布P和模型M之间的交叉熵。较低的交叉熵意味着较低的困惑度。这种关系允许我们在训练期间使用交叉熵损失，并报告困惑度作为可解释的评估指标。",
    diagram: "",
    terms: ["perplexity", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 65,
    q: "What is backoff in n-gram language models?",
    qChinese: "n-gram语言模型中的回退是什么？",
    options: [
      "A) Using a lower-order n-gram when a higher-order one has zero count",
      "B) Reverting to a previous model checkpoint",
      "C) Training the model backwards",
      "D) Reducing the learning rate"
    ],
    optionsChinese: [
      "A) 当高阶n-gram计数为零时使用低阶n-gram",
      "B) 恢复到之前的模型检查点",
      "C) 反向训练模型",
      "D) 降低学习率"
    ],
    answer: 0,
    explanation: "Backoff is a strategy where if a higher-order n-gram (e.g., trigram) has not been observed, the model falls back to a lower-order n-gram (e.g., bigram or unigram). Stupid backoff is a simple variant that just multiplies by a fixed weight (0.4) when backing off.",
    explanationChinese: "回退是一种策略，当高阶n-gram（如三元组）未被观察到时，模型回退到低阶n-gram（如二元组或一元组）。简单回退是一种简单变体，回退时仅乘以固定权重（0.4）。",
    diagram: "",
    terms: ["language_model", "perplexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 66,
    q: "What is interpolation in n-gram models?",
    qChinese: "n-gram模型中的插值是什么？",
    options: [
      "A) Generating text between two given texts",
      "B) Combining probabilities from different order n-grams using weighted averages",
      "C) Adding new words to the vocabulary",
      "D) Splitting sentences at punctuation"
    ],
    optionsChinese: [
      "A) 在两个给定文本之间生成文本",
      "B) 使用加权平均组合不同阶n-gram的概率",
      "C) 向词汇表添加新词",
      "D) 在标点处分割句子"
    ],
    answer: 1,
    explanation: "Interpolation computes the final probability as a weighted sum of unigram, bigram, trigram (etc.) probabilities: P = λ1·P_uni + λ2·P_bi + λ3·P_tri, where weights sum to 1. The weights (lambdas) are typically tuned on a held-out development set.",
    explanationChinese: "插值将最终概率计算为一元组、二元组、三元组等概率的加权和：P = λ1·P_uni + λ2·P_bi + λ3·P_tri，其中权重和为1。权重（lambda）通常在保留的开发集上调优。",
    diagram: "",
    terms: ["language_model", "perplexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 67,
    q: "What is the main limitation of n-gram language models?",
    qChinese: "n-gram语言模型的主要局限性是什么？",
    options: [
      "A) They are too complex to implement",
      "B) They require GPU hardware",
      "C) They always produce perfect probability estimates",
      "D) They cannot capture dependencies beyond the n-gram window"
    ],
    optionsChinese: [
      "A) 它们实现起来太复杂",
      "B) 它们需要GPU硬件",
      "C) 它们总是产生完美的概率估计",
      "D) 它们无法捕捉超出n-gram窗口的依赖关系"
    ],
    answer: 3,
    explanation: "N-gram models can only consider a fixed window of n-1 previous words. A trigram model cannot capture the dependency between 'the cat' and 'sat' in 'the cat that I saw yesterday sat on the mat'. Neural language models (RNNs, Transformers) address this limitation.",
    explanationChinese: "N-gram模型只能考虑固定窗口的前n-1个词。三元组模型无法捕捉'the cat that I saw yesterday sat on the mat'中'the cat'和'sat'之间的依赖。神经语言模型（RNN、Transformer）解决了这个限制。",
    diagram: "",
    terms: ["language_model", "recurrent_nlp"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 68,
    q: "If a bigram language model gives P('the'|'<s>') = 0.5 and P('cat'|'the') = 0.1, what is P('<s> the cat')?",
    qChinese: "如果一个二元组语言模型给出P('the'|'<s>') = 0.5和P('cat'|'the') = 0.1，那么P('<s> the cat')是多少？",
    options: [
      "A) 0.6",
      "B) 0.1",
      "C) 0.5",
      "D) 0.05"
    ],
    optionsChinese: [
      "A) 0.6",
      "B) 0.1",
      "C) 0.5",
      "D) 0.05"
    ],
    answer: 3,
    explanation: "Using the chain rule with bigram probabilities: P('<s> the cat') = P('the'|'<s>') × P('cat'|'the') = 0.5 × 0.1 = 0.05. Each word's probability is conditioned only on the immediately preceding word in a bigram model, and joint probability is the product.",
    explanationChinese: "使用链式法则和二元组概率：P('<s> the cat') = P('the'|'<s>') × P('cat'|'the') = 0.5 × 0.1 = 0.05。在二元组模型中，每个词的概率仅以紧接在前的词为条件，联合概率是乘积。",
    diagram: "",
    terms: ["language_model", "perplexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 69,
    q: "What is the purpose of the start and end tokens (<s>, </s>) in language models?",
    qChinese: "语言模型中开始和结束标记（<s>、</s>）的目的是什么？",
    options: [
      "A) To reduce vocabulary size",
      "B) To indicate stopwords",
      "C) To mark sentence boundaries so the model can learn beginning and ending patterns",
      "D) To represent unknown words"
    ],
    optionsChinese: [
      "A) 减少词汇表大小",
      "B) 表示停用词",
      "C) 标记句子边界以便模型学习开始和结束模式",
      "D) 表示未知词"
    ],
    answer: 2,
    explanation: "Start (<s>) and end (</s>) tokens provide context for sentence boundaries. The start token lets the model compute P(first_word|<s>), learning which words commonly begin sentences. The end token lets the model learn to predict when a sentence should end.",
    explanationChinese: "开始（<s>）和结束（</s>）标记为句子边界提供上下文。开始标记让模型计算P(first_word|<s>)，学习哪些词常常开始句子。结束标记让模型学习预测句子何时应该结束。",
    diagram: "",
    terms: ["language_model", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 70,
    q: "What is a neural language model?",
    qChinese: "什么是神经语言模型？",
    options: [
      "A) A language model that uses only n-gram counts",
      "B) A language model that uses neural networks to estimate word probabilities",
      "C) A model that only works on numerical data",
      "D) A model that does not require training"
    ],
    optionsChinese: [
      "A) 仅使用n-gram计数的语言模型",
      "B) 使用神经网络来估计词概率的语言模型",
      "C) 仅处理数值数据的模型",
      "D) 不需要训练的模型"
    ],
    answer: 1,
    explanation: "Neural language models use neural networks (feedforward, RNN, LSTM, or Transformer) to predict the probability of the next word given context. They learn continuous representations and can generalize to unseen n-grams through shared parameters, overcoming sparsity issues of count-based models.",
    explanationChinese: "神经语言模型使用神经网络（前馈、RNN、LSTM或Transformer）来预测给定上下文的下一个词的概率。它们学习连续表示，可以通过共享参数泛化到未见的n-gram，克服基于计数模型的稀疏性问题。",
    diagram: "",
    terms: ["language_model", "recurrent_nlp"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 71,
    q: "What is the vocabulary size problem in language modeling?",
    qChinese: "语言建模中的词汇表大小问题是什么？",
    options: [
      "A) The output softmax layer must compute probabilities over the entire vocabulary, which is computationally expensive",
      "B) Having too few unique words",
      "C) Words are too short",
      "D) The model cannot learn any vocabulary"
    ],
    optionsChinese: [
      "A) 输出softmax层必须在整个词汇表上计算概率，计算成本很高",
      "B) 唯一词太少",
      "C) 词太短",
      "D) 模型无法学习任何词汇"
    ],
    answer: 0,
    explanation: "In neural language models, the final softmax layer must compute a probability distribution over every word in the vocabulary. With vocabularies of 50K-100K+ words, this is a computational bottleneck. Solutions include hierarchical softmax, adaptive softmax, and subword tokenization.",
    explanationChinese: "在神经语言模型中，最终softmax层必须在词汇表中的每个词上计算概率分布。词汇表达50K-100K+词时，这是一个计算瓶颈。解决方案包括分层softmax、自适应softmax和子词分词。",
    diagram: "",
    terms: ["language_model", "tokenization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 72,
    q: "What does a unigram language model assume?",
    qChinese: "一元组语言模型假设什么？",
    options: [
      "A) Each word depends on all previous words",
      "B) Words only appear once",
      "C) Each word depends on exactly one previous word",
      "D) Each word is independent of all other words"
    ],
    optionsChinese: [
      "A) 每个词取决于所有前面的词",
      "B) 词只出现一次",
      "C) 每个词恰好取决于一个前面的词",
      "D) 每个词独立于所有其他词"
    ],
    answer: 3,
    explanation: "A unigram model assumes complete word independence: P(w1, w2, ..., wn) = P(w1) × P(w2) × ... × P(wn). Each word's probability is estimated from its corpus frequency alone. While unrealistic, unigrams serve as a baseline and are used in some smoothing techniques.",
    explanationChinese: "一元组模型假设词完全独立：P(w1, w2, ..., wn) = P(w1) × P(w2) × ... × P(wn)。每个词的概率仅从其语料库频率估计。虽然不现实，但一元组作为基线，并在一些平滑技术中使用。",
    diagram: "",
    terms: ["language_model", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 73,
    q: "A language model achieves a perplexity of 50 on a test set. What does this mean?",
    qChinese: "一个语言模型在测试集上达到了困惑度50。这意味着什么？",
    options: [
      "A) The model made 50 errors",
      "B) The vocabulary has 50 words",
      "C) The model has 50 parameters",
      "D) On average, the model is as uncertain as choosing uniformly among 50 words at each step"
    ],
    optionsChinese: [
      "A) 模型犯了50个错误",
      "B) 词汇表有50个词",
      "C) 模型有50个参数",
      "D) 平均而言，模型如同在每步从50个词中均匀选择一样不确定"
    ],
    answer: 3,
    explanation: "A perplexity of 50 means that, on average, the model is as confused as if it had to choose uniformly among 50 possible next words at each position. Lower perplexity indicates the model assigns higher probability to the correct words, reflecting better language understanding.",
    explanationChinese: "困惑度为50意味着平均而言，模型如同必须在每个位置从50个可能的下一个词中均匀选择一样困惑。较低的困惑度表示模型为正确的词分配更高的概率，反映更好的语言理解。",
    diagram: "",
    terms: ["perplexity", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 74,
    q: "What is Good-Turing smoothing?",
    qChinese: "什么是Good-Turing平滑？",
    options: [
      "A) A smoothing method that estimates the probability of unseen events using the frequency of events seen once",
      "B) A method that only applies to bigrams",
      "C) A method developed by Alan Turing for machine translation",
      "D) A method that doubles all counts"
    ],
    optionsChinese: [
      "A) 使用出现一次的事件频率来估计未见事件概率的平滑方法",
      "B) 仅适用于二元组的方法",
      "C) 由Alan Turing为机器翻译开发的方法",
      "D) 将所有计数加倍的方法"
    ],
    answer: 0,
    explanation: "Good-Turing smoothing re-estimates the count of n-grams with count c using the count of n-grams with count c+1. The probability mass for unseen events (count 0) is estimated from the number of n-grams seen exactly once (hapax legomena). It was used in WWII codebreaking.",
    explanationChinese: "Good-Turing平滑使用计数为c+1的n-gram的数量重新估计计数为c的n-gram。未见事件（计数0）的概率质量从恰好出现一次的n-gram（孤词）数量估计。它在二战密码破译中使用。",
    diagram: "",
    terms: ["language_model", "perplexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 75,
    q: "What advantage do neural language models have over n-gram models in handling unseen word combinations?",
    qChinese: "神经语言模型在处理未见词组合方面比n-gram模型有什么优势？",
    options: [
      "A) They have no advantage",
      "B) They memorize all possible combinations",
      "C) They use larger n-gram windows",
      "D) They generalize through learned continuous representations, so similar words get similar predictions"
    ],
    optionsChinese: [
      "A) 它们没有优势",
      "B) 它们记忆所有可能的组合",
      "C) 它们使用更大的n-gram窗口",
      "D) 它们通过学习的连续表示进行泛化，相似的词获得相似的预测"
    ],
    answer: 3,
    explanation: "Neural language models represent words as dense vectors in continuous space. Even if 'cat sat on the mat' was never seen, if 'dog sat on the rug' was, the model can generalize because 'cat' and 'dog' have similar embeddings. N-gram models treat each word as discrete and cannot generalize this way.",
    explanationChinese: "神经语言模型将词表示为连续空间中的稠密向量。即使'cat sat on the mat'从未见过，如果'dog sat on the rug'见过，模型可以泛化，因为'cat'和'dog'有相似的嵌入。N-gram模型将每个词视为离散的，无法这样泛化。",
    diagram: "",
    terms: ["language_model", "word_embedding"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 76,
    q: "What is the difference between an autoregressive and an autoencoding language model?",
    qChinese: "自回归和自编码语言模型之间的区别是什么？",
    options: [
      "A) They are the same thing",
      "B) Autoencoding models cannot be used for NLP",
      "C) Autoregressive models are always smaller",
      "D) Autoregressive models predict tokens left-to-right; autoencoding models reconstruct masked tokens from bidirectional context"
    ],
    optionsChinese: [
      "A) 它们是相同的",
      "B) 自编码模型不能用于NLP",
      "C) 自回归模型总是更小",
      "D) 自回归模型从左到右预测标记；自编码模型从双向上下文重建被遮蔽的标记"
    ],
    answer: 3,
    explanation: "Autoregressive models (like GPT) generate text left-to-right, each token conditioned on previous ones. Autoencoding models (like BERT) use masked language modeling, predicting randomly masked tokens from both left and right context. GPT excels at generation; BERT excels at understanding tasks.",
    explanationChinese: "自回归模型（如GPT）从左到右生成文本，每个标记以前面的标记为条件。自编码模型（如BERT）使用遮蔽语言建模，从左右两侧上下文预测随机遮蔽的标记。GPT擅长生成；BERT擅长理解任务。",
    diagram: "",
    terms: ["language_model", "gpt", "bert"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 77,
    q: "Why do we use log probabilities instead of raw probabilities in language models?",
    qChinese: "为什么我们在语言模型中使用对数概率而不是原始概率？",
    options: [
      "A) To prevent numerical underflow from multiplying many small probabilities together",
      "B) Log probabilities are always positive",
      "C) Log probabilities are faster to compute",
      "D) Raw probabilities cannot represent words"
    ],
    optionsChinese: [
      "A) 防止将许多小概率相乘导致的数值下溢",
      "B) 对数概率总是正的",
      "C) 对数概率计算更快",
      "D) 原始概率无法表示单词"
    ],
    answer: 0,
    explanation: "Multiplying many small probabilities (e.g., 0.001 × 0.002 × ...) quickly leads to numbers too small for floating-point representation (underflow). Using log probabilities converts products to sums: log(a×b) = log(a) + log(b), which is numerically stable and computationally efficient.",
    explanationChinese: "将许多小概率相乘（如0.001 × 0.002 × ...）会很快导致数字太小而无法用浮点数表示（下溢）。使用对数概率将乘积转换为求和：log(a×b) = log(a) + log(b)，这在数值上稳定且计算效率高。",
    diagram: "",
    terms: ["language_model", "perplexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 78,
    q: "What is the count-based estimate for a bigram probability P(wi|wi-1)?",
    qChinese: "二元组概率P(wi|wi-1)的基于计数的估计是什么？",
    options: [
      "A) Count(wi) / Total words",
      "B) Count(wi-1, wi) / Count(wi-1)",
      "C) Count(wi) / Count(wi-1)",
      "D) Count(wi-1, wi) / Total bigrams"
    ],
    optionsChinese: [
      "A) Count(wi) / 总词数",
      "B) Count(wi-1, wi) / Count(wi-1)",
      "C) Count(wi) / Count(wi-1)",
      "D) Count(wi-1, wi) / 总二元组数"
    ],
    answer: 1,
    explanation: "The maximum likelihood estimate for a bigram probability is the count of the bigram (wi-1, wi) divided by the count of the context word (wi-1). This is: P(wi|wi-1) = C(wi-1, wi) / C(wi-1). This ratio gives the proportion of times wi follows wi-1 in the training data.",
    explanationChinese: "二元组概率的最大似然估计是二元组(wi-1, wi)的计数除以上下文词(wi-1)的计数。即：P(wi|wi-1) = C(wi-1, wi) / C(wi-1)。这个比率给出训练数据中wi跟随wi-1的比例。",
    diagram: "",
    terms: ["language_model", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 79,
    q: "What problem does the unknown word token <UNK> address?",
    qChinese: "未知词标记<UNK>解决什么问题？",
    options: [
      "A) Ambiguity in word meanings",
      "B) Grammar errors in text",
      "C) Words that appear in test data but are not in the model's vocabulary",
      "D) Encoding issues"
    ],
    optionsChinese: [
      "A) 词义的歧义",
      "B) 文本中的语法错误",
      "C) 出现在测试数据中但不在模型词汇表中的词",
      "D) 编码问题"
    ],
    answer: 2,
    explanation: "The <UNK> token replaces words not in the model's fixed vocabulary. During training, words below a frequency threshold are replaced with <UNK>. At test time, any out-of-vocabulary word is mapped to <UNK>. The model learns a probability for this token like any other word.",
    explanationChinese: "UNK标记替换不在模型固定词汇表中的词。在训练期间，低于频率阈值的词被替换为<UNK>。在测试时，任何词汇表外的词都映射到<UNK>。模型像其他词一样学习此标记的概率。",
    diagram: "",
    terms: ["language_model", "tokenization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 80,
    q: "What is the evaluation metric BLEU indirectly related to in terms of language modeling?",
    qChinese: "BLEU评估指标在语言建模方面间接与什么相关？",
    options: [
      "A) Perplexity only",
      "B) N-gram precision between generated and reference text",
      "C) Word embedding similarity",
      "D) Parsing accuracy"
    ],
    optionsChinese: [
      "A) 仅困惑度",
      "B) 生成文本和参考文本之间的n-gram精确度",
      "C) 词嵌入相似度",
      "D) 解析准确率"
    ],
    answer: 1,
    explanation: "BLEU (Bilingual Evaluation Understudy) measures the n-gram overlap between machine-generated text and reference texts. It computes modified n-gram precision for n=1,2,3,4 and applies a brevity penalty. While used primarily for translation, it connects to language model quality through n-gram matching.",
    explanationChinese: "BLEU（双语评估辅助）衡量机器生成文本和参考文本之间的n-gram重叠。它计算n=1,2,3,4的修改n-gram精确度并应用简洁惩罚。虽然主要用于翻译，但它通过n-gram匹配与语言模型质量相关。",
    diagram: "",
    terms: ["language_model", "machine_translation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 81,
    q: "What is text classification?",
    qChinese: "什么是文本分类？",
    options: [
      "A) Assigning predefined categories or labels to text documents",
      "B) Generating new text from a prompt",
      "C) Translating text between languages",
      "D) Extracting entities from text"
    ],
    optionsChinese: [
      "A) 将预定义的类别或标签分配给文本文档",
      "B) 从提示生成新文本",
      "C) 在语言之间翻译文本",
      "D) 从文本中提取实体"
    ],
    answer: 0,
    explanation: "Text classification is the task of automatically assigning one or more predefined categories to a text document. Common applications include spam detection, sentiment analysis, topic categorization, and intent classification. It can be binary, multi-class, or multi-label.",
    explanationChinese: "文本分类是自动将一个或多个预定义类别分配给文本文档的任务。常见应用包括垃圾邮件检测、情感分析、主题分类和意图分类。它可以是二分类、多分类或多标签分类。",
    diagram: "",
    terms: ["text_classification", "sentiment_analysis"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 82,
    q: "How does Naive Bayes classifier work for text classification?",
    qChinese: "朴素贝叶斯分类器如何用于文本分类？",
    options: [
      "A) It applies Bayes' theorem with the naive assumption that features (words) are conditionally independent given the class",
      "B) It uses deep neural networks",
      "C) It clusters similar documents together",
      "D) It uses word embeddings exclusively"
    ],
    optionsChinese: [
      "A) 它应用贝叶斯定理，带有特征（词）在给定类别条件下独立的朴素假设",
      "B) 它使用深度神经网络",
      "C) 它将相似文档聚类在一起",
      "D) 它专门使用词嵌入"
    ],
    answer: 0,
    explanation: "Naive Bayes computes P(class|document) ∝ P(class) × ∏P(word|class) for each class. The 'naive' assumption is that words are conditionally independent given the class. Despite this unrealistic assumption, it works surprisingly well for text classification, especially with limited training data.",
    explanationChinese: "朴素贝叶斯计算P(class|document) ∝ P(class) × ∏P(word|class)。'朴素'假设是词在给定类别条件下是独立的。尽管这个假设不现实，但它在文本分类中表现出奇地好，特别是在训练数据有限时。",
    diagram: "",
    terms: ["text_classification", "sentiment_analysis"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 83,
    q: "What is sentiment analysis?",
    qChinese: "什么是情感分析？",
    options: [
      "A) Translating text to different languages",
      "B) Correcting spelling errors",
      "C) Counting the number of words in text",
      "D) Determining the emotional tone or opinion expressed in text"
    ],
    optionsChinese: [
      "A) 将文本翻译成不同语言",
      "B) 纠正拼写错误",
      "C) 计算文本中的单词数",
      "D) 确定文本中表达的情感色调或观点"
    ],
    answer: 3,
    explanation: "Sentiment analysis determines whether text expresses positive, negative, or neutral sentiment. It ranges from binary classification (positive/negative) to fine-grained scales (1-5 stars). Applications include product review analysis, social media monitoring, and brand reputation tracking.",
    explanationChinese: "情感分析确定文本是否表达正面、负面或中性情感。它的范围从二分类（正面/负面）到细粒度的尺度（1-5星）。应用包括产品评论分析、社交媒体监控和品牌声誉跟踪。",
    diagram: "",
    terms: ["sentiment_analysis", "text_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 84,
    q: "What is the 'naive' assumption in Naive Bayes?",
    qChinese: "朴素贝叶斯中的'朴素'假设是什么？",
    options: [
      "A) The model is simple to implement",
      "B) All classes have equal probability",
      "C) The model uses only one feature",
      "D) All features (words) are conditionally independent of each other given the class label"
    ],
    optionsChinese: [
      "A) 模型实现简单",
      "B) 所有类别具有相同的概率",
      "C) 模型只使用一个特征",
      "D) 给定类别标签，所有特征（词）彼此条件独立"
    ],
    answer: 3,
    explanation: "The conditional independence assumption means P(w1,w2,...,wn|c) = P(w1|c)×P(w2|c)×...×P(wn|c). In reality, words are highly dependent ('New York' are correlated), but this simplification makes computation tractable and works well empirically for text classification.",
    explanationChinese: "条件独立假设意味着P(w1,w2,...,wn|c) = P(w1|c)×P(w2|c)×...×P(wn|c)。实际上，词高度相关（'New York'是相关的），但这种简化使计算可行，并且在文本分类中经验上表现良好。",
    diagram: "",
    terms: ["text_classification", "sentiment_analysis"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 85,
    q: "What features are commonly used for spam detection?",
    qChinese: "垃圾邮件检测通常使用什么特征？",
    options: [
      "A) Word frequencies, presence of URLs, special characters, TF-IDF features, and email metadata",
      "B) Only the sender's name",
      "C) Only the email subject",
      "D) Only the time the email was sent"
    ],
    optionsChinese: [
      "A) 词频、URL存在、特殊字符、TF-IDF特征和邮件元数据",
      "B) 仅发件人姓名",
      "C) 仅邮件主题",
      "D) 仅邮件发送时间"
    ],
    answer: 0,
    explanation: "Spam detection uses multiple feature types: word frequencies (e.g., 'free', 'winner'), presence of URLs and attachments, special characters and formatting, TF-IDF scores, header information, and metadata. Combining these features with classifiers like Naive Bayes or SVMs achieves high accuracy.",
    explanationChinese: "垃圾邮件检测使用多种特征类型：词频（如'free'、'winner'）、URL和附件的存在、特殊字符和格式、TF-IDF分数、头部信息和元数据。将这些特征与朴素贝叶斯或SVM等分类器结合可实现高准确率。",
    diagram: "",
    terms: ["text_classification", "tf_idf"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 86,
    q: "What is the difference between Multinomial and Bernoulli Naive Bayes for text?",
    qChinese: "多项式和伯努利朴素贝叶斯在文本中有什么区别？",
    options: [
      "A) They are identical",
      "B) Multinomial only works for two classes",
      "C) Bernoulli is always better",
      "D) Multinomial uses word counts; Bernoulli uses binary word presence/absence"
    ],
    optionsChinese: [
      "A) 它们是相同的",
      "B) 多项式只适用于两个类别",
      "C) 伯努利总是更好",
      "D) 多项式使用词频；伯努利使用二进制词存在/不存在"
    ],
    answer: 3,
    explanation: "Multinomial Naive Bayes models word frequency counts, so a word appearing 5 times contributes more than one appearing once. Bernoulli Naive Bayes uses binary features (word present or not), also explicitly modeling word absence. Multinomial generally performs better for longer documents.",
    explanationChinese: "多项式朴素贝叶斯建模词频计数，因此出现5次的词比出现1次的贡献更大。伯努利朴素贝叶斯使用二进制特征（词存在或不存在），还显式建模词的缺失。多项式通常对较长文档表现更好。",
    diagram: "",
    terms: ["text_classification", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 87,
    q: "What is aspect-based sentiment analysis?",
    qChinese: "什么是基于方面的情感分析？",
    options: [
      "A) Analyzing sentiment of the whole document only",
      "B) Analyzing the sentiment of individual words",
      "C) Identifying sentiment toward specific aspects or entities mentioned in the text",
      "D) Translating sentiment to other languages"
    ],
    optionsChinese: [
      "A) 仅分析整个文档的情感",
      "B) 分析单个词的情感",
      "C) 识别文本中提到的特定方面或实体的情感",
      "D) 将情感翻译成其他语言"
    ],
    answer: 2,
    explanation: "Aspect-based sentiment analysis goes beyond overall sentiment to identify opinions about specific aspects. In 'The food was great but the service was terrible', it detects positive sentiment for 'food' and negative for 'service'. This provides more actionable insights for businesses.",
    explanationChinese: "基于方面的情感分析超越整体情感，识别对特定方面的意见。在'The food was great but the service was terrible'中，它检测到对'food'的正面情感和对'service'的负面情感。这为企业提供更可行的洞察。",
    diagram: "",
    terms: ["sentiment_analysis", "text_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 88,
    q: "What is the role of the prior probability P(class) in Naive Bayes?",
    qChinese: "先验概率P(class)在朴素贝叶斯中的作用是什么？",
    options: [
      "A) It represents the base rate of each class in the training data, biasing predictions toward frequent classes",
      "B) It is always set to 0.5",
      "C) It is only used during testing",
      "D) It equals the number of features"
    ],
    optionsChinese: [
      "A) 它表示训练数据中每个类别的基本比率，偏向频繁的类别",
      "B) 它总是设为0.5",
      "C) 它仅在测试时使用",
      "D) 它等于特征数量"
    ],
    answer: 0,
    explanation: "The prior P(class) = count(class) / total_documents reflects how common each class is. If 90% of emails are not spam, the prior for non-spam is 0.9. This appropriately biases the classifier toward the more common class, which can be overridden by strong word evidence.",
    explanationChinese: "先验P(class) = count(class) / total_documents反映每个类别的常见程度。如果90%的邮件不是垃圾邮件，非垃圾邮件的先验为0.9。这适当地偏向更常见的类别，可以被强词证据覆盖。",
    diagram: "",
    terms: ["text_classification", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 89,
    q: "What is multi-label text classification?",
    qChinese: "什么是多标签文本分类？",
    options: [
      "A) Classifying text into exactly one category",
      "B) Using multiple classifiers for one label",
      "C) Assigning multiple labels simultaneously to a single document",
      "D) Classifying text in multiple languages"
    ],
    optionsChinese: [
      "A) 将文本分类到恰好一个类别",
      "B) 使用多个分类器处理一个标签",
      "C) 同时为单个文档分配多个标签",
      "D) 在多种语言中分类文本"
    ],
    answer: 2,
    explanation: "In multi-label classification, a document can belong to multiple categories simultaneously. A news article might be tagged as both 'politics' and 'economics'. This differs from multi-class (exactly one label) and is typically modeled using binary classifiers per label or special architectures.",
    explanationChinese: "在多标签分类中，一个文档可以同时属于多个类别。一篇新闻文章可能同时标记为'政治'和'经济'。这与多分类（恰好一个标签）不同，通常使用每个标签的二分类器或特殊架构建模。",
    diagram: "",
    terms: ["text_classification", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 90,
    q: "Why does Naive Bayes work well for text classification despite the independence assumption being wrong?",
    qChinese: "尽管独立性假设是错误的，为什么朴素贝叶斯在文本分类中仍然有效？",
    options: [
      "A) Because the assumption is actually correct for text",
      "B) Because it uses deep learning internally",
      "C) Because text data is always independent",
      "D) Because classification only needs to rank classes correctly, not estimate exact probabilities"
    ],
    optionsChinese: [
      "A) 因为该假设对文本实际上是正确的",
      "B) 因为它内部使用深度学习",
      "C) 因为文本数据总是独立的",
      "D) 因为分类只需要正确排列类别，不需要估计精确概率"
    ],
    answer: 3,
    explanation: "For classification, we only need the most probable class, not accurate probability estimates. Even with wrong independence assumptions, the ranking of classes often remains correct. The errors in probability estimation tend to cancel out across many features, and the decision boundary remains effective.",
    explanationChinese: "对于分类，我们只需要最可能的类别，而不是准确的概率估计。即使独立性假设不正确，类别的排序通常仍然正确。概率估计的误差往往在许多特征之间相互抵消，决策边界仍然有效。",
    diagram: "",
    terms: ["text_classification", "sentiment_analysis"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 91,
    q: "What is logistic regression commonly used for in NLP?",
    qChinese: "逻辑回归在NLP中通常用于什么？",
    options: [
      "A) Binary and multi-class text classification with interpretable feature weights",
      "B) Text generation",
      "C) Machine translation",
      "D) Speech recognition"
    ],
    optionsChinese: [
      "A) 具有可解释特征权重的二分类和多分类文本分类",
      "B) 文本生成",
      "C) 机器翻译",
      "D) 语音识别"
    ],
    answer: 0,
    explanation: "Logistic regression is a discriminative classifier widely used for text classification. It learns weights for each feature (word or n-gram) that indicate their importance for each class. Its softmax extension handles multi-class problems. Feature weights provide interpretability.",
    explanationChinese: "逻辑回归是一种广泛用于文本分类的判别分类器。它为每个特征（词或n-gram）学习权重，指示它们对每个类别的重要性。其softmax扩展处理多分类问题。特征权重提供可解释性。",
    diagram: "",
    terms: ["text_classification", "sentiment_analysis"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 92,
    q: "What is the difference between generative and discriminative classifiers for text?",
    qChinese: "生成式和判别式分类器在文本中的区别是什么？",
    options: [
      "A) They produce the same results always",
      "B) Discriminative models are always worse",
      "C) Generative models learn P(features|class) and P(class); discriminative models learn P(class|features) directly",
      "D) Generative models cannot handle text"
    ],
    optionsChinese: [
      "A) 它们总是产生相同的结果",
      "B) 判别模型总是更差",
      "C) 生成模型学习P(features|class)和P(class)；判别模型直接学习P(class|features)",
      "D) 生成模型不能处理文本"
    ],
    answer: 2,
    explanation: "Generative classifiers like Naive Bayes model the joint distribution P(features, class) via P(features|class)·P(class). Discriminative classifiers like logistic regression and SVMs directly model P(class|features). Discriminative models often achieve higher accuracy; generative models handle missing data better.",
    explanationChinese: "生成式分类器（如朴素贝叶斯）通过P(features|class)·P(class)建模联合分布P(features, class)。判别式分类器（如逻辑回归和SVM）直接建模P(class|features)。判别模型通常实现更高的准确率；生成模型更好地处理缺失数据。",
    diagram: "",
    terms: ["text_classification", "sentiment_analysis"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 93,
    q: "What is the purpose of the softmax function in multi-class text classification?",
    qChinese: "softmax函数在多分类文本分类中的目的是什么？",
    options: [
      "A) To convert raw scores (logits) into a probability distribution over all classes",
      "B) To remove stopwords",
      "C) To reduce dimensionality",
      "D) To tokenize the input"
    ],
    optionsChinese: [
      "A) 将原始分数（logits）转换为所有类别的概率分布",
      "B) 删除停用词",
      "C) 降低维度",
      "D) 对输入进行分词"
    ],
    answer: 0,
    explanation: "The softmax function takes a vector of raw scores (logits) and normalizes them into a probability distribution where all values are positive and sum to 1. For class i: softmax(zi) = exp(zi) / Σexp(zj). This enables selecting the most probable class and computing cross-entropy loss.",
    explanationChinese: "softmax函数取原始分数（logits）向量并将其归一化为概率分布，其中所有值为正且和为1。对于类别i：softmax(zi) = exp(zi) / Σexp(zj)。这使得选择最可能的类别和计算交叉熵损失成为可能。",
    diagram: "",
    terms: ["text_classification", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 94,
    q: "What is cross-entropy loss in text classification?",
    qChinese: "文本分类中的交叉熵损失是什么？",
    options: [
      "A) The number of misclassified documents",
      "B) The entropy of the text itself",
      "C) A loss function that measures the difference between predicted probability distribution and true label distribution",
      "D) The length of the document"
    ],
    optionsChinese: [
      "A) 错误分类的文档数",
      "B) 文本本身的熵",
      "C) 衡量预测概率分布和真实标签分布之间差异的损失函数",
      "D) 文档的长度"
    ],
    answer: 2,
    explanation: "Cross-entropy loss: L = -Σ y_i · log(p_i), where y is the true one-hot label and p is the predicted probability. For the correct class, it equals -log(p_correct). It penalizes confident wrong predictions heavily. Minimizing cross-entropy is equivalent to maximizing the likelihood of correct labels.",
    explanationChinese: "交叉熵损失：L = -Σ y_i · log(p_i)，其中y是真实独热标签，p是预测概率。对于正确类别，它等于-log(p_correct)。它严重惩罚自信的错误预测。最小化交叉熵等同于最大化正确标签的似然。",
    diagram: "",
    terms: ["text_classification", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 95,
    q: "What are n-gram features in text classification?",
    qChinese: "文本分类中的n-gram特征是什么？",
    options: [
      "A) Features based on word embeddings only",
      "B) Features consisting of contiguous sequences of n words or characters from the text",
      "C) Features based on the number of sentences",
      "D) Features from external knowledge bases"
    ],
    optionsChinese: [
      "A) 仅基于词嵌入的特征",
      "B) 由文本中n个连续词或字符序列组成的特征",
      "C) 基于句子数量的特征",
      "D) 来自外部知识库的特征"
    ],
    answer: 1,
    explanation: "N-gram features capture local word patterns. Unigrams are single words; bigrams capture two-word phrases like 'not good' (important for sentiment); trigrams capture three-word patterns. Using bigrams and trigrams alongside unigrams often improves text classification over unigrams alone.",
    explanationChinese: "N-gram特征捕捉局部词模式。一元组是单个词；二元组捕捉两个词的短语如'not good'（对情感分析很重要）；三元组捕捉三个词的模式。将二元组和三元组与一元组一起使用通常比仅用一元组改善文本分类。",
    diagram: "",
    terms: ["text_classification", "sentiment_analysis"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 96,
    q: "How can SVMs be applied to text classification?",
    qChinese: "SVM如何应用于文本分类？",
    options: [
      "A) They cannot handle text data",
      "B) By representing documents as TF-IDF vectors and finding the optimal hyperplane that separates classes",
      "C) By generating text",
      "D) By clustering words"
    ],
    optionsChinese: [
      "A) 它们无法处理文本数据",
      "B) 通过将文档表示为TF-IDF向量并找到分隔类别的最优超平面",
      "C) 通过生成文本",
      "D) 通过聚类词"
    ],
    answer: 1,
    explanation: "SVMs find the maximum-margin hyperplane separating classes in feature space. For text, documents are represented as TF-IDF or BoW vectors. Linear SVMs work well for high-dimensional sparse text features. They were state-of-the-art for text classification before deep learning.",
    explanationChinese: "SVM在特征空间中找到分隔类别的最大间隔超平面。对于文本，文档被表示为TF-IDF或BoW向量。线性SVM适用于高维稀疏文本特征。在深度学习之前，它们是文本分类的最先进方法。",
    diagram: "",
    terms: ["text_classification", "tf_idf"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 97,
    q: "What evaluation metrics are commonly used for text classification?",
    qChinese: "文本分类中常用的评估指标有哪些？",
    options: [
      "A) Only accuracy",
      "B) Accuracy, precision, recall, F1-score, and confusion matrix",
      "C) Only perplexity",
      "D) Only BLEU score"
    ],
    optionsChinese: [
      "A) 仅准确率",
      "B) 准确率、精确率、召回率、F1分数和混淆矩阵",
      "C) 仅困惑度",
      "D) 仅BLEU分数"
    ],
    answer: 1,
    explanation: "Text classification uses multiple metrics: accuracy (overall correctness), precision (positive predictions that are correct), recall (actual positives found), F1-score (harmonic mean of precision and recall), and confusion matrix (detailed error analysis). For imbalanced classes, F1 is preferred over accuracy.",
    explanationChinese: "文本分类使用多个指标：准确率（整体正确性）、精确率（正确的正预测）、召回率（找到的实际正例）、F1分数（精确率和召回率的调和平均值）和混淆矩阵（详细的错误分析）。对于不平衡类别，F1优于准确率。",
    diagram: "",
    terms: ["text_classification", "sentiment_analysis"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 98,
    q: "What is topic modeling and how does it relate to text classification?",
    qChinese: "什么是主题建模，它与文本分类有什么关系？",
    options: [
      "A) They are the same task",
      "B) Classification is unsupervised; topic modeling is supervised",
      "C) Topic modeling uses labels; classification does not",
      "D) Topic modeling discovers latent topics in an unsupervised manner; classification assigns predefined labels in a supervised manner"
    ],
    optionsChinese: [
      "A) 它们是相同的任务",
      "B) 分类是无监督的；主题建模是有监督的",
      "C) 主题建模使用标签；分类不使用",
      "D) 主题建模以无监督方式发现潜在主题；分类以有监督方式分配预定义标签"
    ],
    answer: 3,
    explanation: "Topic modeling (e.g., LDA) discovers hidden thematic patterns without predefined labels. Text classification assigns known categories using labeled training data. Topic features from LDA can serve as input features for classification. They complement each other in text analysis pipelines.",
    explanationChinese: "主题建模（如LDA）在没有预定义标签的情况下发现隐藏的主题模式。文本分类使用标注的训练数据分配已知类别。LDA的主题特征可以作为分类的输入特征。它们在文本分析流程中相互补充。",
    diagram: "",
    terms: ["text_classification", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 99,
    q: "What is transfer learning for text classification?",
    qChinese: "文本分类的迁移学习是什么？",
    options: [
      "A) Training from scratch on task-specific data only",
      "B) Transferring text from one document to another",
      "C) Using a pre-trained language model and fine-tuning it on a specific classification task",
      "D) Using multiple GPUs for training"
    ],
    optionsChinese: [
      "A) 仅在特定任务数据上从头训练",
      "B) 将文本从一个文档传输到另一个",
      "C) 使用预训练语言模型并在特定分类任务上微调",
      "D) 使用多个GPU进行训练"
    ],
    answer: 2,
    explanation: "Transfer learning for text classification involves taking a model pre-trained on large text corpora (like BERT or GPT) and fine-tuning it on task-specific labeled data. This leverages the general language understanding from pre-training and requires much less task-specific data than training from scratch.",
    explanationChinese: "文本分类的迁移学习涉及获取在大型文本语料库上预训练的模型（如BERT或GPT）并在特定任务的标注数据上微调。这利用了预训练的一般语言理解，比从头训练需要更少的特定任务数据。",
    diagram: "",
    terms: ["text_classification", "bert", "gpt"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 100,
    q: "What is a sentiment lexicon?",
    qChinese: "什么是情感词典？",
    options: [
      "A) A neural network for sentiment analysis",
      "B) A grammar rule set",
      "C) A list of stopwords",
      "D) A dictionary of words annotated with their sentiment polarity or scores"
    ],
    optionsChinese: [
      "A) 用于情感分析的神经网络",
      "B) 语法规则集",
      "C) 停用词列表",
      "D) 用情感极性或分数标注的词典"
    ],
    answer: 3,
    explanation: "A sentiment lexicon (e.g., SentiWordNet, VADER, AFINN) contains words annotated with sentiment polarity (positive/negative) and sometimes intensity scores. Lexicon-based sentiment analysis sums word scores without training. While less accurate than ML methods, it requires no labeled data.",
    explanationChinese: "情感词典（如SentiWordNet、VADER、AFINN）包含用情感极性（正面/负面）和有时强度分数标注的词。基于词典的情感分析对词分数求和而不需要训练。虽然不如ML方法准确，但不需要标注数据。",
    diagram: "",
    terms: ["sentiment_analysis", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 101,
    q: "What is the challenge of negation handling in sentiment analysis?",
    qChinese: "情感分析中否定处理的挑战是什么？",
    options: [
      "A) Negation has no effect on sentiment",
      "B) Negation always makes text positive",
      "C) Negation words like 'not' can reverse the sentiment of following words, making simple word-counting unreliable",
      "D) Negation only occurs in English"
    ],
    optionsChinese: [
      "A) 否定对情感没有影响",
      "B) 否定总是使文本变为正面",
      "C) 否定词如'not'可以反转后面词的情感，使简单的词计数不可靠",
      "D) 否定仅出现在英语中"
    ],
    answer: 2,
    explanation: "Negation is a major challenge because 'not good' has opposite sentiment to 'good'. Simple bag-of-words models miss this. Techniques include negation scope detection (marking words until the next punctuation after 'not'), using bigrams ('not_good'), or relying on models like BERT that capture context.",
    explanationChinese: "否定是一个主要挑战，因为'not good'与'good'有相反的情感。简单的词袋模型会忽略这一点。技术包括否定范围检测（标记'not'之后到下一个标点之间的词）、使用二元组（'not_good'）或依赖BERT等捕捉上下文的模型。",
    diagram: "",
    terms: ["sentiment_analysis", "text_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 102,
    q: "What is document embedding for text classification?",
    qChinese: "文本分类的文档嵌入是什么？",
    options: [
      "A) Embedding documents in a physical book",
      "B) Representing entire documents as fixed-length dense vectors for input to classifiers",
      "C) One-hot encoding of documents",
      "D) Converting documents to images"
    ],
    optionsChinese: [
      "A) 将文档嵌入实体书中",
      "B) 将整个文档表示为固定长度的稠密向量作为分类器的输入",
      "C) 文档的独热编码",
      "D) 将文档转换为图像"
    ],
    answer: 1,
    explanation: "Document embeddings create dense vector representations of entire documents. Methods include averaging word embeddings, Doc2Vec, using BERT's [CLS] token output, or pooling over transformer hidden states. These fixed-size representations can then be fed to any standard classifier.",
    explanationChinese: "文档嵌入为整个文档创建稠密向量表示。方法包括平均词嵌入、Doc2Vec、使用BERT的[CLS]标记输出或对transformer隐藏状态进行池化。这些固定大小的表示然后可以输入任何标准分类器。",
    diagram: "",
    terms: ["text_classification", "word_embedding", "bert"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 103,
    q: "What is a confusion matrix in the context of text classification?",
    qChinese: "在文本分类语境中，混淆矩阵是什么？",
    options: [
      "A) A matrix of word embeddings",
      "B) A co-occurrence matrix",
      "C) A table showing true vs. predicted labels, revealing true positives, false positives, true negatives, and false negatives",
      "D) A TF-IDF matrix"
    ],
    optionsChinese: [
      "A) 词嵌入矩阵",
      "B) 共现矩阵",
      "C) 显示真实标签与预测标签的表格，揭示真阳性、假阳性、真阴性和假阴性",
      "D) TF-IDF矩阵"
    ],
    answer: 2,
    explanation: "A confusion matrix is an NxN table (N = number of classes) showing how predictions map to true labels. Diagonal entries are correct predictions. Off-diagonal entries reveal specific error patterns, such as which classes are most often confused with each other, guiding model improvement.",
    explanationChinese: "混淆矩阵是一个NxN表（N=类别数），显示预测如何映射到真实标签。对角线条目是正确预测。非对角线条目揭示特定的错误模式，如哪些类别最常被混淆，指导模型改进。",
    diagram: "",
    terms: ["text_classification", "sentiment_analysis"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 104,
    q: "What is the F1 score and why is it important for text classification?",
    qChinese: "F1分数是什么，为什么对文本分类很重要？",
    options: [
      "A) It is the harmonic mean of precision and recall, balancing both metrics especially for imbalanced datasets",
      "B) It is the same as accuracy",
      "C) It measures model training speed",
      "D) It counts the number of features"
    ],
    optionsChinese: [
      "A) 它是精确率和召回率的调和平均值，特别是在不平衡数据集中平衡两个指标",
      "B) 它与准确率相同",
      "C) 它衡量模型训练速度",
      "D) 它计算特征数量"
    ],
    answer: 0,
    explanation: "F1 = 2 × (precision × recall) / (precision + recall). It balances precision (avoiding false positives) and recall (avoiding false negatives). For imbalanced datasets where accuracy is misleading (e.g., 99% non-spam), F1 provides a more meaningful evaluation of classifier performance.",
    explanationChinese: "F1 = 2 × (精确率 × 召回率) / (精确率 + 召回率)。它平衡精确率（避免假阳性）和召回率（避免假阴性）。对于不平衡数据集（如99%非垃圾邮件），准确率具有误导性，F1提供更有意义的分类器性能评估。",
    diagram: "",
    terms: ["text_classification", "sentiment_analysis"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 105,
    q: "How can convolutional neural networks (CNNs) be used for text classification?",
    qChinese: "卷积神经网络（CNN）如何用于文本分类？",
    options: [
      "A) They cannot be used for text",
      "B) By applying 1D convolutions over word embedding sequences to capture local n-gram patterns",
      "C) By processing text as 2D images",
      "D) By using recurrence"
    ],
    optionsChinese: [
      "A) 它们不能用于文本",
      "B) 通过在词嵌入序列上应用一维卷积来捕捉局部n-gram模式",
      "C) 通过将文本作为二维图像处理",
      "D) 通过使用递归"
    ],
    answer: 1,
    explanation: "TextCNN (Kim, 2014) applies 1D convolutions with different filter sizes (e.g., 3, 4, 5 words) over the word embedding matrix. Each filter captures n-gram patterns. Max-pooling over the sequence selects the most important features, producing a fixed-size representation for classification.",
    explanationChinese: "TextCNN（Kim, 2014）在词嵌入矩阵上应用不同过滤器大小（如3、4、5个词）的一维卷积。每个过滤器捕捉n-gram模式。序列上的最大池化选择最重要的特征，产生用于分类的固定大小表示。",
    diagram: "",
    terms: ["text_classification", "word_embedding"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 106,
    q: "What is intent classification in NLP?",
    qChinese: "NLP中的意图分类是什么？",
    options: [
      "A) Classifying the physical location of the user",
      "B) Determining the user's purpose or goal behind an utterance in dialogue systems",
      "C) Translating user intent to another language",
      "D) Measuring the intent of a document"
    ],
    optionsChinese: [
      "A) 分类用户的物理位置",
      "B) 在对话系统中确定用户话语背后的目的或目标",
      "C) 将用户意图翻译成另一种语言",
      "D) 衡量文档的意图"
    ],
    answer: 1,
    explanation: "Intent classification identifies the user's goal in conversational AI. For 'Book a flight to Paris', the intent is 'book_flight'. It is crucial for chatbots and virtual assistants. Modern systems use BERT-based classifiers fine-tuned on intent-labeled dialogue data.",
    explanationChinese: "意图分类在对话AI中识别用户的目标。对于'Book a flight to Paris'，意图是'book_flight'。它对聊天机器人和虚拟助手至关重要。现代系统使用在意图标注的对话数据上微调的基于BERT的分类器。",
    diagram: "",
    terms: ["text_classification", "bert"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 107,
    q: "What is data augmentation for text classification?",
    qChinese: "文本分类的数据增强是什么？",
    options: [
      "A) Generating synthetic training examples through techniques like synonym replacement, back-translation, or paraphrasing",
      "B) Collecting more labeled data from annotators",
      "C) Removing training data to prevent overfitting",
      "D) Converting text to images for augmentation"
    ],
    optionsChinese: [
      "A) 通过同义词替换、回译或释义等技术生成合成训练样本",
      "B) 从标注者收集更多标注数据",
      "C) 删除训练数据以防止过拟合",
      "D) 将文本转换为图像进行增强"
    ],
    answer: 0,
    explanation: "Text data augmentation creates additional training examples artificially. Techniques include synonym replacement (replacing words with synonyms), back-translation (translating to another language and back), random insertion/deletion, and using language models to generate paraphrases. This helps with limited labeled data.",
    explanationChinese: "文本数据增强人工创建额外的训练样本。技术包括同义词替换（用同义词替换词）、回译（翻译到另一种语言再翻译回来）、随机插入/删除以及使用语言模型生成释义。这有助于解决标注数据有限的问题。",
    diagram: "",
    terms: ["text_classification", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 108,
    q: "What is zero-shot text classification?",
    qChinese: "什么是零样本文本分类？",
    options: [
      "A) Classification with zero accuracy",
      "B) Classification that takes zero time",
      "C) Classification using only one example per class",
      "D) Classifying text into categories without any task-specific training examples"
    ],
    optionsChinese: [
      "A) 准确率为零的分类",
      "B) 花费零时间的分类",
      "C) 每个类别仅使用一个样本的分类",
      "D) 在没有任何特定任务训练样本的情况下将文本分类到类别中"
    ],
    answer: 3,
    explanation: "Zero-shot classification assigns labels to text without seeing any labeled examples for those categories during training. Models like GPT-3 and BART-MNLI can do this by leveraging their pre-trained knowledge. For example, given a text and candidate labels, the model selects the best match.",
    explanationChinese: "零样本分类在训练期间未见到这些类别的任何标注样本的情况下为文本分配标签。GPT-3和BART-MNLI等模型可以通过利用其预训练知识来做到这一点。例如，给定文本和候选标签，模型选择最佳匹配。",
    diagram: "",
    terms: ["text_classification", "gpt", "bert"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 109,
    q: "What is the role of regularization in text classification models?",
    qChinese: "正则化在文本分类模型中的作用是什么？",
    options: [
      "A) To prevent overfitting by penalizing large model weights or adding noise",
      "B) To increase the number of features",
      "C) To speed up training only",
      "D) To add more training data"
    ],
    optionsChinese: [
      "A) 通过惩罚大的模型权重或添加噪声来防止过拟合",
      "B) 增加特征数量",
      "C) 仅加速训练",
      "D) 添加更多训练数据"
    ],
    answer: 0,
    explanation: "Regularization techniques prevent the model from memorizing training data. L1/L2 regularization penalizes large weights. Dropout randomly zeroes neurons during training. For text, this is crucial because high-dimensional feature spaces (large vocabularies) are prone to overfitting.",
    explanationChinese: "正则化技术防止模型记忆训练数据。L1/L2正则化惩罚大权重。Dropout在训练期间随机将神经元置零。对于文本，这至关重要，因为高维特征空间（大词汇表）容易过拟合。",
    diagram: "",
    terms: ["text_classification", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 110,
    q: "What is hate speech detection and what makes it challenging?",
    qChinese: "什么是仇恨言论检测，是什么使它具有挑战性？",
    options: [
      "A) It is a simple keyword matching task",
      "B) It classifies text as hateful or not, challenging due to context-dependence, sarcasm, and implicit hate",
      "C) It only works for English text",
      "D) It requires no training data"
    ],
    optionsChinese: [
      "A) 这是一个简单的关键词匹配任务",
      "B) 它将文本分类为仇恨或非仇恨，由于上下文依赖性、讽刺和隐性仇恨而具有挑战性",
      "C) 它仅适用于英文文本",
      "D) 它不需要训练数据"
    ],
    answer: 1,
    explanation: "Hate speech detection identifies text targeting groups based on race, gender, religion, etc. Challenges include context-dependence (same words may be hateful or not), sarcasm, coded language, implicit bias, and cultural variation. Keyword-only approaches have high false positive rates.",
    explanationChinese: "仇恨言论检测识别基于种族、性别、宗教等针对群体的文本。挑战包括上下文依赖性（相同的词可能是仇恨的也可能不是）、讽刺、隐语、隐性偏见和文化差异。仅关键词方法的假阳性率很高。",
    diagram: "",
    terms: ["text_classification", "sentiment_analysis"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 111,
    q: "Why are RNNs well-suited for processing text sequences?",
    qChinese: "为什么RNN非常适合处理文本序列？",
    options: [
      "A) They process all words simultaneously",
      "B) They require fixed-length input",
      "C) They only look at the last word",
      "D) They process words sequentially while maintaining a hidden state that captures information from previous words"
    ],
    optionsChinese: [
      "A) 它们同时处理所有词",
      "B) 它们需要固定长度的输入",
      "C) 它们只看最后一个词",
      "D) 它们顺序处理词，同时维护一个捕捉先前词信息的隐藏状态"
    ],
    answer: 3,
    explanation: "RNNs process tokens one at a time, updating a hidden state h_t = f(h_{t-1}, x_t) at each step. This hidden state acts as a memory of previous context. This sequential processing naturally handles variable-length text and captures temporal dependencies between words.",
    explanationChinese: "RNN一次处理一个标记，在每一步更新隐藏状态h_t = f(h_{t-1}, x_t)。这个隐藏状态充当先前上下文的记忆。这种顺序处理自然地处理可变长度的文本并捕捉词之间的时间依赖。",
    diagram: "",
    terms: ["recurrent_nlp", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 112,
    q: "What is the vanishing gradient problem in RNNs and why does it matter for NLP?",
    qChinese: "RNN中的梯度消失问题是什么，为什么对NLP很重要？",
    options: [
      "A) Gradients shrink exponentially over long sequences, making it hard to learn long-range dependencies",
      "B) Gradients become too large",
      "C) The model runs out of memory",
      "D) The vocabulary becomes too small"
    ],
    optionsChinese: [
      "A) 梯度在长序列上指数缩小，使得学习长距离依赖变得困难",
      "B) 梯度变得太大",
      "C) 模型内存耗尽",
      "D) 词汇表变得太小"
    ],
    answer: 0,
    explanation: "During backpropagation through time, gradients are multiplied by weight matrices at each step. If these values are less than 1, gradients shrink exponentially. In NLP, this means an RNN cannot learn that 'the cat' relates to 'sat' when many words intervene. LSTMs and GRUs solve this.",
    explanationChinese: "在时间反向传播期间，梯度在每一步乘以权重矩阵。如果这些值小于1，梯度会指数缩小。在NLP中，这意味着当许多词介入时，RNN无法学到'the cat'与'sat'的关系。LSTM和GRU解决了这个问题。",
    diagram: "",
    terms: ["recurrent_nlp", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 113,
    q: "How does an LSTM solve the vanishing gradient problem?",
    qChinese: "LSTM如何解决梯度消失问题？",
    options: [
      "A) By using larger learning rates",
      "B) By using shorter sequences",
      "C) By processing text backwards",
      "D) By introducing a cell state with gating mechanisms that allow information to flow unchanged over long distances"
    ],
    optionsChinese: [
      "A) 通过使用更大的学习率",
      "B) 通过使用更短的序列",
      "C) 通过反向处理文本",
      "D) 通过引入带有门控机制的单元状态，允许信息在长距离上不变地流动"
    ],
    answer: 3,
    explanation: "LSTMs maintain a cell state that flows through time with minimal transformation. Three gates (forget, input, output) control what information to discard, store, or output. The cell state acts as a highway for gradient flow, enabling learning of dependencies spanning hundreds of time steps.",
    explanationChinese: "LSTM维护一个单元状态，以最小的变换流经时间。三个门（遗忘门、输入门、输出门）控制丢弃、存储或输出什么信息。单元状态充当梯度流的高速公路，使学习跨越数百个时间步的依赖成为可能。",
    diagram: "",
    terms: ["recurrent_nlp", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 114,
    q: "What are the three gates in an LSTM cell?",
    qChinese: "LSTM单元中的三个门是什么？",
    options: [
      "A) Forget gate, input gate, and output gate",
      "B) AND, OR, NOT gates",
      "C) Read gate, write gate, and delete gate",
      "D) Start gate, stop gate, and reset gate"
    ],
    optionsChinese: [
      "A) 遗忘门、输入门和输出门",
      "B) AND、OR、NOT门",
      "C) 读门、写门和删除门",
      "D) 开始门、停止门和重置门"
    ],
    answer: 0,
    explanation: "The forget gate decides what information to discard from the cell state. The input gate decides what new information to store. The output gate decides what parts of the cell state to output as the hidden state. All gates use sigmoid activations to produce values between 0 and 1.",
    explanationChinese: "遗忘门决定从单元状态中丢弃什么信息。输入门决定存储什么新信息。输出门决定输出单元状态的哪些部分作为隐藏状态。所有门使用sigmoid激活产生0到1之间的值。",
    diagram: "",
    terms: ["recurrent_nlp", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 115,
    q: "How does a GRU differ from an LSTM?",
    qChinese: "GRU与LSTM有何不同？",
    options: [
      "A) GRU is always more accurate",
      "B) GRU cannot process sequences",
      "C) GRU combines the forget and input gates into a single update gate and merges cell and hidden states, using fewer parameters",
      "D) GRU uses four gates instead of three"
    ],
    optionsChinese: [
      "A) GRU总是更准确",
      "B) GRU无法处理序列",
      "C) GRU将遗忘门和输入门合并为单个更新门，并合并单元状态和隐藏状态，使用更少的参数",
      "D) GRU使用四个门而不是三个"
    ],
    answer: 2,
    explanation: "GRU (Gated Recurrent Unit) simplifies LSTM by using two gates: reset gate and update gate. It merges the cell state and hidden state into one. With fewer parameters, GRUs train faster and perform comparably to LSTMs on many NLP tasks, especially with limited data.",
    explanationChinese: "GRU（门控循环单元）通过使用两个门简化了LSTM：重置门和更新门。它将单元状态和隐藏状态合并为一个。由于参数更少，GRU训练更快，在许多NLP任务上与LSTM表现相当，特别是在数据有限时。",
    diagram: "",
    terms: ["recurrent_nlp", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 116,
    q: "What is a bidirectional RNN and why is it useful for NLP?",
    qChinese: "什么是双向RNN，为什么它对NLP有用？",
    options: [
      "A) An RNN that processes text twice with the same direction",
      "B) An RNN with two layers processing the sequence forward and backward, capturing context from both directions",
      "C) An RNN that translates in both directions",
      "D) An RNN that doubles the vocabulary size"
    ],
    optionsChinese: [
      "A) 以相同方向处理文本两次的RNN",
      "B) 具有两层的RNN，正向和反向处理序列，捕捉两个方向的上下文",
      "C) 双向翻译的RNN",
      "D) 将词汇表大小加倍的RNN"
    ],
    answer: 1,
    explanation: "A bidirectional RNN runs two separate RNNs: one processing the sequence left-to-right and another right-to-left. Their hidden states are concatenated at each position. This provides full context from both sides, crucial for tasks like NER and POS tagging where right context is also informative.",
    explanationChinese: "双向RNN运行两个独立的RNN：一个从左到右处理序列，另一个从右到左。它们的隐藏状态在每个位置拼接。这提供了两侧的完整上下文，对于NER和词性标注等右侧上下文也很重要的任务至关重要。",
    diagram: "",
    terms: ["recurrent_nlp", "named_entity_recognition"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 117,
    q: "How is an RNN used as a language model?",
    qChinese: "RNN如何用作语言模型？",
    options: [
      "A) It classifies text into categories",
      "B) It computes TF-IDF scores",
      "C) It only counts word frequencies",
      "D) At each time step, it takes the current word and hidden state to predict the probability distribution over the next word"
    ],
    optionsChinese: [
      "A) 它将文本分类到类别中",
      "B) 它计算TF-IDF分数",
      "C) 它仅计算词频",
      "D) 在每个时间步，它接受当前词和隐藏状态来预测下一个词的概率分布"
    ],
    answer: 3,
    explanation: "An RNN language model processes words sequentially: at each step t, it combines the word embedding x_t with hidden state h_{t-1} to produce h_t, which is then projected through a softmax to give P(w_{t+1}|w_1,...,w_t). Unlike n-grams, it theoretically captures unbounded context.",
    explanationChinese: "RNN语言模型顺序处理词：在每个步骤t，它将词嵌入x_t与隐藏状态h_{t-1}组合产生h_t，然后通过softmax投影得到P(w_{t+1}|w_1,...,w_t)。与n-gram不同，它理论上捕捉无界上下文。",
    diagram: "",
    terms: ["recurrent_nlp", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 118,
    q: "What is teacher forcing in training sequence models for NLP?",
    qChinese: "在训练NLP序列模型时，教师强制是什么？",
    options: [
      "A) Having a human teacher annotate data",
      "B) Training with a fixed learning rate",
      "C) Forcing the model to use a fixed vocabulary",
      "D) Using the ground-truth previous token as input during training rather than the model's own prediction"
    ],
    optionsChinese: [
      "A) 让人工教师标注数据",
      "B) 使用固定学习率训练",
      "C) 强制模型使用固定词汇表",
      "D) 在训练期间使用真实的前一个标记作为输入，而不是模型自己的预测"
    ],
    answer: 3,
    explanation: "Teacher forcing feeds the correct previous token to the model during training, regardless of what it predicted. This speeds up training and improves convergence. However, it creates a train-test mismatch (exposure bias) since at inference time, the model uses its own predictions.",
    explanationChinese: "教师强制在训练期间将正确的前一个标记输入模型，不管它预测了什么。这加速了训练并改善了收敛。但它造成了训练-测试不匹配（暴露偏差），因为在推理时模型使用自己的预测。",
    diagram: "",
    terms: ["recurrent_nlp", "sequence_to_sequence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 119,
    q: "What is sequence labeling in NLP?",
    qChinese: "NLP中的序列标注是什么？",
    options: [
      "A) Labeling entire documents",
      "B) Assigning a label to each token in a sequence, such as POS tags or NER labels",
      "C) Sorting sequences by length",
      "D) Generating sequences of labels"
    ],
    optionsChinese: [
      "A) 标注整个文档",
      "B) 为序列中的每个标记分配标签，如词性标签或NER标签",
      "C) 按长度排序序列",
      "D) 生成标签序列"
    ],
    answer: 1,
    explanation: "Sequence labeling assigns a label to each token in the input sequence. POS tagging labels each word with its part of speech. NER labels each word as a named entity type or O (outside). Bidirectional LSTMs with CRF layers are a popular architecture for sequence labeling.",
    explanationChinese: "序列标注为输入序列中的每个标记分配标签。词性标注为每个词标记其词性。NER将每个词标记为命名实体类型或O（外部）。带CRF层的双向LSTM是序列标注的流行架构。",
    diagram: "",
    terms: ["recurrent_nlp", "named_entity_recognition", "pos_tagging"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 120,
    q: "What is the role of word embeddings as input to RNNs for NLP tasks?",
    qChinese: "词嵌入作为RNN在NLP任务中的输入的作用是什么？",
    options: [
      "A) They convert discrete word tokens into continuous vectors that the RNN can process mathematically",
      "B) They are not used with RNNs",
      "C) They replace the RNN's hidden state",
      "D) They are only used for output"
    ],
    optionsChinese: [
      "A) 它们将离散的词标记转换为RNN可以数学处理的连续向量",
      "B) 它们不与RNN一起使用",
      "C) 它们替换RNN的隐藏状态",
      "D) 它们仅用于输出"
    ],
    answer: 0,
    explanation: "RNNs require continuous-valued inputs. Word embeddings map each discrete token to a dense vector (e.g., 300-dim), providing the input x_t at each time step. These embeddings can be pre-trained (Word2Vec, GloVe) or learned jointly with the RNN during task-specific training.",
    explanationChinese: "RNN需要连续值输入。词嵌入将每个离散标记映射到稠密向量（如300维），在每个时间步提供输入x_t。这些嵌入可以是预训练的（Word2Vec、GloVe）或在特定任务训练期间与RNN一起学习。",
    diagram: "",
    terms: ["recurrent_nlp", "word_embedding"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 121,
    q: "What is a stacked (deep) RNN?",
    qChinese: "什么是堆叠（深度）RNN？",
    options: [
      "A) An RNN with a single layer",
      "B) An RNN that processes multiple documents simultaneously",
      "C) Multiple RNN layers stacked vertically, where each layer's output feeds into the next layer",
      "D) An RNN that uses multiple vocabularies"
    ],
    optionsChinese: [
      "A) 单层的RNN",
      "B) 同时处理多个文档的RNN",
      "C) 多个RNN层垂直堆叠，每层的输出输入到下一层",
      "D) 使用多个词汇表的RNN"
    ],
    answer: 2,
    explanation: "A stacked RNN has multiple layers where the hidden state output of one layer becomes the input to the next layer at each time step. This increases model capacity and allows learning increasingly abstract representations. Typically 2-4 layers are used in NLP; more layers may cause training difficulty.",
    explanationChinese: "堆叠RNN有多个层，其中一层的隐藏状态输出在每个时间步成为下一层的输入。这增加了模型容量并允许学习越来越抽象的表示。NLP中通常使用2-4层；更多层可能导致训练困难。",
    diagram: "",
    terms: ["recurrent_nlp", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 122,
    q: "What is dropout regularization in RNNs for NLP?",
    qChinese: "RNN中用于NLP的dropout正则化是什么？",
    options: [
      "A) Removing words from the vocabulary",
      "B) Reducing the number of layers",
      "C) Dropping entire sentences from training",
      "D) Randomly setting a fraction of neurons to zero during training to prevent overfitting"
    ],
    optionsChinese: [
      "A) 从词汇表中删除词",
      "B) 减少层数",
      "C) 从训练中删除整个句子",
      "D) 在训练期间随机将一部分神经元设为零以防止过拟合"
    ],
    answer: 3,
    explanation: "Dropout in RNNs randomly zeroes hidden units during training. Standard dropout between time steps can disrupt temporal learning, so variational dropout applies the same mask across all time steps. This prevents the RNN from relying on specific neurons and improves generalization in NLP tasks.",
    explanationChinese: "RNN中的dropout在训练期间随机将隐藏单元置零。时间步之间的标准dropout可能破坏时间学习，因此变分dropout在所有时间步应用相同的掩码。这防止RNN依赖特定神经元并改善NLP任务的泛化。",
    diagram: "",
    terms: ["recurrent_nlp", "text_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 123,
    q: "What is the difference between character-level and word-level RNN language models?",
    qChinese: "字符级和词级RNN语言模型之间的区别是什么？",
    options: [
      "A) Character-level models predict next characters with a small vocabulary; word-level models predict next words with a large vocabulary",
      "B) They produce identical results",
      "C) Word-level models are always worse",
      "D) Character-level models cannot generate text"
    ],
    optionsChinese: [
      "A) 字符级模型用小词汇表预测下一个字符；词级模型用大词汇表预测下一个词",
      "B) 它们产生相同的结果",
      "C) 词级模型总是更差",
      "D) 字符级模型无法生成文本"
    ],
    answer: 0,
    explanation: "Character-level RNNs have a tiny vocabulary (alphabet + punctuation) and need no tokenization, handling any word including novel ones. Word-level RNNs have large vocabularies but better capture word-level semantics. Character models need longer sequences and more computation to capture the same context span.",
    explanationChinese: "字符级RNN拥有很小的词汇表（字母+标点），不需要分词，能处理任何词包括新词。词级RNN拥有大词汇表但更好地捕捉词级语义。字符模型需要更长的序列和更多计算来捕捉相同的上下文范围。",
    diagram: "",
    terms: ["recurrent_nlp", "language_model", "tokenization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 124,
    q: "How can LSTMs be used for sentiment analysis?",
    qChinese: "LSTM如何用于情感分析？",
    options: [
      "A) They cannot handle sentiment",
      "B) By processing the text sequence and using the final hidden state (or attention-weighted states) as input to a classification layer",
      "C) By counting positive and negative words",
      "D) By translating text first"
    ],
    optionsChinese: [
      "A) 它们无法处理情感",
      "B) 通过处理文本序列并使用最终隐藏状态（或注意力加权状态）作为分类层的输入",
      "C) 通过计算正面和负面词",
      "D) 通过先翻译文本"
    ],
    answer: 1,
    explanation: "For sentiment analysis, an LSTM reads the entire review token by token. The final hidden state encodes the full sequence meaning, which is passed through a dense layer with softmax for classification. Bidirectional LSTMs with attention further improve performance by focusing on sentiment-bearing words.",
    explanationChinese: "对于情感分析，LSTM逐个标记读取整个评论。最终隐藏状态编码完整的序列含义，然后通过带softmax的全连接层进行分类。带注意力的双向LSTM通过关注承载情感的词进一步提高性能。",
    diagram: "",
    terms: ["recurrent_nlp", "sentiment_analysis"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 125,
    q: "What is the exploding gradient problem in RNNs?",
    qChinese: "RNN中的梯度爆炸问题是什么？",
    options: [
      "A) Gradients becoming exactly zero",
      "B) The model producing very long outputs",
      "C) Gradients growing exponentially large during backpropagation through time, causing unstable training",
      "D) The vocabulary expanding during training"
    ],
    optionsChinese: [
      "A) 梯度变为恰好为零",
      "B) 模型产生很长的输出",
      "C) 梯度在时间反向传播期间指数增长，导致训练不稳定",
      "D) 训练期间词汇表扩展"
    ],
    answer: 2,
    explanation: "When weight matrices have eigenvalues greater than 1, repeated multiplication during BPTT causes gradients to explode, resulting in NaN values or extremely large weight updates. Gradient clipping (capping gradients at a threshold) is the standard solution, unlike the vanishing problem which requires architectural changes.",
    explanationChinese: "当权重矩阵的特征值大于1时，BPTT期间的重复乘法导致梯度爆炸，产生NaN值或极大的权重更新。梯度裁剪（在阈值处截断梯度）是标准解决方案，不像梯度消失问题需要架构更改。",
    diagram: "",
    terms: ["recurrent_nlp", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 126,
    q: "What is the purpose of padding in RNN-based NLP models?",
    qChinese: "基于RNN的NLP模型中填充的目的是什么？",
    options: [
      "A) To add meaningful words to short sentences",
      "B) To improve translation quality",
      "C) To increase the vocabulary",
      "D) To make all sequences in a batch the same length for efficient parallel computation"
    ],
    optionsChinese: [
      "A) 向短句子添加有意义的词",
      "B) 改善翻译质量",
      "C) 增加词汇表",
      "D) 使批次中的所有序列具有相同长度以进行高效的并行计算"
    ],
    answer: 3,
    explanation: "Text sequences vary in length, but batch processing requires uniform dimensions. Padding adds special PAD tokens to shorter sequences. A padding mask ensures the model ignores padded positions during attention and loss computation. Pack_padded_sequence in PyTorch optimizes this.",
    explanationChinese: "文本序列长度不同，但批处理需要统一维度。填充向较短的序列添加特殊PAD标记。填充掩码确保模型在注意力和损失计算期间忽略填充位置。PyTorch中的pack_padded_sequence优化了这一点。",
    diagram: "",
    terms: ["recurrent_nlp", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 127,
    q: "What is the hidden state dimensionality in an LSTM and how does it affect NLP performance?",
    qChinese: "LSTM中的隐藏状态维度是什么，它如何影响NLP性能？",
    options: [
      "A) It must equal the vocabulary size",
      "B) It is a hyperparameter controlling model capacity; larger dimensions capture more information but risk overfitting",
      "C) It is always 128",
      "D) It has no effect on performance"
    ],
    optionsChinese: [
      "A) 它必须等于词汇表大小",
      "B) 它是控制模型容量的超参数；更大的维度捕捉更多信息但有过拟合风险",
      "C) 它总是128",
      "D) 它对性能没有影响"
    ],
    answer: 1,
    explanation: "The hidden state dimensionality (e.g., 128, 256, 512) determines how much information the LSTM can store. Larger dimensions increase capacity but also parameters and computation. For NLP, typical values range from 128-1024. The optimal size depends on task complexity and training data amount.",
    explanationChinese: "隐藏状态维度（如128、256、512）决定LSTM可以存储多少信息。更大的维度增加容量但也增加参数和计算。对于NLP，典型值范围从128到1024。最优大小取决于任务复杂度和训练数据量。",
    diagram: "",
    terms: ["recurrent_nlp", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 128,
    q: "What is truncated backpropagation through time (TBPTT)?",
    qChinese: "什么是截断的时间反向传播（TBPTT）？",
    options: [
      "A) Training the RNN for a truncated number of epochs",
      "B) Using a truncated vocabulary",
      "C) Removing layers from the network",
      "D) Limiting backpropagation to a fixed number of time steps instead of the full sequence to manage memory and computation"
    ],
    optionsChinese: [
      "A) 以截断的轮数训练RNN",
      "B) 使用截断的词汇表",
      "C) 从网络中删除层",
      "D) 将反向传播限制到固定数量的时间步而不是完整序列，以管理内存和计算"
    ],
    answer: 3,
    explanation: "TBPTT processes long sequences by backpropagating gradients only through a fixed window of time steps (e.g., 35). This bounds memory usage and computation while still allowing the forward pass to use the full hidden state history. It is essential for training on long documents.",
    explanationChinese: "TBPTT通过仅在固定数量的时间步窗口（如35）内反向传播梯度来处理长序列。这限制了内存使用和计算，同时仍允许前向传递使用完整的隐藏状态历史。它对于在长文档上训练至关重要。",
    diagram: "",
    terms: ["recurrent_nlp", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 129,
    q: "How can RNNs be used for text generation?",
    qChinese: "RNN如何用于文本生成？",
    options: [
      "A) By sampling from the predicted probability distribution at each step and feeding the sampled token as the next input",
      "B) They cannot generate text",
      "C) By copying text from the training data",
      "D) By using only bigram statistics"
    ],
    optionsChinese: [
      "A) 通过在每步从预测的概率分布中采样，并将采样的标记作为下一个输入",
      "B) 它们无法生成文本",
      "C) 通过从训练数据复制文本",
      "D) 仅使用二元组统计"
    ],
    answer: 0,
    explanation: "An RNN language model generates text by predicting a probability distribution over the next token, sampling from it, then feeding that token back as input for the next step. Temperature controls diversity: low temperature produces conservative text, high temperature produces diverse but possibly incoherent text.",
    explanationChinese: "RNN语言模型通过预测下一个标记的概率分布来生成文本，从中采样，然后将该标记作为下一步的输入反馈。温度控制多样性：低温产生保守的文本，高温产生多样但可能不连贯的文本。",
    diagram: "",
    terms: ["recurrent_nlp", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 130,
    q: "What is the attention mechanism's role when combined with RNNs in NLP?",
    qChinese: "注意力机制与RNN结合在NLP中的作用是什么？",
    options: [
      "A) It allows the model to selectively focus on different parts of the input sequence when producing each output",
      "B) It replaces the RNN entirely",
      "C) It only speeds up training",
      "D) It reduces the vocabulary size"
    ],
    optionsChinese: [
      "A) 它允许模型在产生每个输出时选择性地关注输入序列的不同部分",
      "B) 它完全替代RNN",
      "C) 它仅加速训练",
      "D) 它减少词汇表大小"
    ],
    answer: 0,
    explanation: "Attention lets the decoder look at all encoder hidden states and compute a weighted average based on relevance. Instead of compressing the entire input into one fixed vector, each decoding step dynamically focuses on the most relevant input words. This dramatically improves sequence-to-sequence tasks.",
    explanationChinese: "注意力让解码器查看所有编码器隐藏状态并根据相关性计算加权平均。不是将整个输入压缩为一个固定向量，每个解码步骤动态关注最相关的输入词。这大大改善了序列到序列任务。",
    diagram: "",
    terms: ["attention_nlp", "recurrent_nlp", "sequence_to_sequence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 131,
    q: "What is the CRF layer used with BiLSTMs for sequence labeling?",
    qChinese: "CRF层与BiLSTM一起用于序列标注的作用是什么？",
    options: [
      "A) A conditional random field that models label dependencies, ensuring valid label transitions",
      "B) A layer that generates text",
      "C) A layer that computes word embeddings",
      "D) A layer that removes padding"
    ],
    optionsChinese: [
      "A) 建模标签依赖关系的条件随机场，确保有效的标签转换",
      "B) 生成文本的层",
      "C) 计算词嵌入的层",
      "D) 删除填充的层"
    ],
    answer: 0,
    explanation: "A CRF (Conditional Random Field) layer on top of a BiLSTM models transitions between labels. For NER, it prevents invalid sequences like I-PER following B-LOC. The BiLSTM produces emission scores; the CRF optimizes the entire label sequence jointly using the Viterbi algorithm for decoding.",
    explanationChinese: "BiLSTM之上的CRF（条件随机场）层建模标签之间的转换。对于NER，它防止无效序列如I-PER跟在B-LOC之后。BiLSTM产生发射分数；CRF使用维特比算法联合优化整个标签序列以进行解码。",
    diagram: "",
    terms: ["recurrent_nlp", "named_entity_recognition"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 132,
    q: "What is the main computational disadvantage of RNNs compared to Transformers?",
    qChinese: "与Transformer相比，RNN的主要计算缺点是什么？",
    options: [
      "A) RNNs use more memory",
      "B) RNNs have more parameters",
      "C) RNNs process tokens sequentially, preventing parallelization during training",
      "D) RNNs cannot learn from data"
    ],
    optionsChinese: [
      "A) RNN使用更多内存",
      "B) RNN有更多参数",
      "C) RNN顺序处理标记，阻止训练期间的并行化",
      "D) RNN无法从数据中学习"
    ],
    answer: 2,
    explanation: "RNNs must process tokens one by one because each hidden state depends on the previous one. This sequential dependency prevents parallel computation across positions. Transformers compute all positions simultaneously using self-attention, making them much faster to train on modern GPU hardware.",
    explanationChinese: "RNN必须逐个处理标记，因为每个隐藏状态取决于前一个。这种顺序依赖阻止了跨位置的并行计算。Transformer使用自注意力同时计算所有位置，使它们在现代GPU硬件上训练快得多。",
    diagram: "",
    terms: ["recurrent_nlp", "attention_nlp"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 133,
    q: "What is the Elman network?",
    qChinese: "什么是Elman网络？",
    options: [
      "A) The simplest form of RNN where the hidden state from the previous step is fed back as additional input",
      "B) A type of transformer",
      "C) A convolutional network for text",
      "D) A type of word embedding"
    ],
    optionsChinese: [
      "A) 最简单的RNN形式，将前一步的隐藏状态作为额外输入反馈",
      "B) 一种transformer",
      "C) 用于文本的卷积网络",
      "D) 一种词嵌入"
    ],
    answer: 0,
    explanation: "The Elman network (simple RNN) uses a recurrence where h_t = tanh(W_h · h_{t-1} + W_x · x_t + b). The hidden state from the previous step is concatenated or added to the current input. It is the foundation of all RNN variants but suffers from vanishing gradients on long sequences.",
    explanationChinese: "Elman网络（简单RNN）使用递归，其中h_t = tanh(W_h · h_{t-1} + W_x · x_t + b)。前一步的隐藏状态被连接或添加到当前输入。它是所有RNN变体的基础，但在长序列上受梯度消失影响。",
    diagram: "",
    terms: ["recurrent_nlp", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 134,
    q: "How is an RNN encoder used in sequence-to-sequence models for NLP?",
    qChinese: "RNN编码器如何在序列到序列NLP模型中使用？",
    options: [
      "A) It generates the output directly",
      "B) It performs tokenization",
      "C) It only counts input tokens",
      "D) It reads the input sequence and compresses it into a fixed-size context vector passed to the decoder"
    ],
    optionsChinese: [
      "A) 它直接生成输出",
      "B) 它执行分词",
      "C) 它仅计算输入标记",
      "D) 它读取输入序列并将其压缩为传递给解码器的固定大小上下文向量"
    ],
    answer: 3,
    explanation: "In seq2seq models, the encoder RNN processes the input sequence and produces a final hidden state (context vector) that summarizes the entire input. This vector initializes the decoder RNN, which generates the output sequence. The bottleneck of a single vector motivated the development of attention.",
    explanationChinese: "在seq2seq模型中，编码器RNN处理输入序列并产生一个最终隐藏状态（上下文向量），总结整个输入。这个向量初始化解码器RNN，后者生成输出序列。单个向量的瓶颈推动了注意力机制的发展。",
    diagram: "",
    terms: ["recurrent_nlp", "sequence_to_sequence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 135,
    q: "What is the difference between many-to-one and many-to-many RNN architectures in NLP?",
    qChinese: "NLP中多对一和多对多RNN架构之间的区别是什么？",
    options: [
      "A) They are the same architecture",
      "B) Many-to-one produces a single output from a sequence (classification); many-to-many produces an output at each step (labeling or translation)",
      "C) Many-to-one uses more layers",
      "D) Many-to-many only works for short texts"
    ],
    optionsChinese: [
      "A) 它们是相同的架构",
      "B) 多对一从序列产生单个输出（分类）；多对多在每步产生输出（标注或翻译）",
      "C) 多对一使用更多层",
      "D) 多对多仅适用于短文本"
    ],
    answer: 1,
    explanation: "Many-to-one: the RNN reads the full sequence and uses the final hidden state for classification (sentiment analysis). Many-to-many: the RNN produces output at each position (POS tagging, NER) or via encoder-decoder (translation). The architecture choice depends on whether output is a single label or a sequence.",
    explanationChinese: "多对一：RNN读取完整序列并使用最终隐藏状态进行分类（情感分析）。多对多：RNN在每个位置产生输出（词性标注、NER）或通过编码器-解码器（翻译）。架构选择取决于输出是单个标签还是序列。",
    diagram: "",
    terms: ["recurrent_nlp", "sequence_to_sequence", "sentiment_analysis"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 136,
    q: "What is the self-attention mechanism in the Transformer?",
    qChinese: "Transformer中的自注意力机制是什么？",
    options: [
      "A) A mechanism where the model attends to external knowledge bases",
      "B) A pooling operation over the sequence",
      "C) A mechanism that only looks at the previous token",
      "D) A mechanism where each token computes attention scores with all other tokens in the same sequence"
    ],
    optionsChinese: [
      "A) 模型关注外部知识库的机制",
      "B) 对序列的池化操作",
      "C) 仅关注前一个标记的机制",
      "D) 每个标记与同一序列中所有其他标记计算注意力分数的机制"
    ],
    answer: 3,
    explanation: "Self-attention allows each position in a sequence to attend to all other positions. Each token creates Query, Key, and Value vectors. Attention scores are computed as softmax(QK^T/√d_k)V. This captures relationships between any two words regardless of distance, unlike RNNs.",
    explanationChinese: "自注意力允许序列中的每个位置关注所有其他位置。每个标记创建查询（Q）、键（K）和值（V）向量。注意力分数计算为softmax(QK^T/√d_k)V。这捕捉任何两个词之间的关系，不受距离限制，与RNN不同。",
    diagram: "",
    terms: ["attention_nlp", "bert", "gpt"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 137,
    q: "What are Query, Key, and Value in the attention mechanism?",
    qChinese: "注意力机制中的查询、键和值是什么？",
    options: [
      "A) Database operations",
      "B) Three separate neural networks",
      "C) Three types of word embeddings",
      "D) Three linear projections of input embeddings used to compute attention: Query seeks information, Key offers matchable content, Value provides the actual content"
    ],
    optionsChinese: [
      "A) 数据库操作",
      "B) 三个独立的神经网络",
      "C) 三种词嵌入",
      "D) 输入嵌入的三个线性投影用于计算注意力：查询寻求信息，键提供可匹配的内容，值提供实际内容"
    ],
    answer: 3,
    explanation: "Each input token is projected into three vectors via learned weight matrices: Q = XW_Q, K = XW_K, V = XW_V. The Query of one token is compared with Keys of all tokens to get attention weights, which are used to create a weighted sum of Values. This is analogous to information retrieval.",
    explanationChinese: "每个输入标记通过学习的权重矩阵投影为三个向量：Q = XW_Q，K = XW_K，V = XW_V。一个标记的查询与所有标记的键比较以获得注意力权重，用于创建值的加权和。这类似于信息检索。",
    diagram: "",
    terms: ["attention_nlp", "bert"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 138,
    q: "What is multi-head attention?",
    qChinese: "什么是多头注意力？",
    options: [
      "A) Using multiple separate models",
      "B) Running multiple attention operations in parallel with different learned projections, then concatenating results",
      "C) Attending to multiple documents simultaneously",
      "D) Using multiple vocabularies"
    ],
    optionsChinese: [
      "A) 使用多个独立模型",
      "B) 使用不同的学习投影并行运行多个注意力操作，然后拼接结果",
      "C) 同时关注多个文档",
      "D) 使用多个词汇表"
    ],
    answer: 1,
    explanation: "Multi-head attention runs h parallel attention operations, each with different projection matrices (W_Q^i, W_K^i, W_V^i). Each head can learn different relationship types (syntactic, semantic, positional). Outputs are concatenated and linearly projected. BERT-base uses 12 heads; BERT-large uses 16.",
    explanationChinese: "多头注意力运行h个并行的注意力操作，每个使用不同的投影矩阵(W_Q^i, W_K^i, W_V^i)。每个头可以学习不同的关系类型（句法、语义、位置）。输出被拼接并线性投影。BERT-base使用12个头；BERT-large使用16个。",
    diagram: "",
    terms: ["attention_nlp", "bert"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 139,
    q: "Why does the Transformer use scaled dot-product attention (dividing by √d_k)?",
    qChinese: "为什么Transformer使用缩放点积注意力（除以√d_k）？",
    options: [
      "A) To speed up computation",
      "B) To prevent dot products from growing too large in high dimensions, which would push softmax into saturated regions with tiny gradients",
      "C) To reduce memory usage",
      "D) To normalize the vocabulary"
    ],
    optionsChinese: [
      "A) 加速计算",
      "B) 防止高维度中点积变得太大，这会将softmax推入梯度极小的饱和区域",
      "C) 减少内存使用",
      "D) 规范化词汇表"
    ],
    answer: 1,
    explanation: "For large d_k, the dot product QK^T can be very large, causing softmax to have extremely peaked distributions with near-zero gradients. Dividing by √d_k keeps the variance of the dot products at 1 regardless of dimension, ensuring softmax produces well-distributed attention weights with healthy gradients.",
    explanationChinese: "对于大的d_k，点积QK^T可能非常大，导致softmax具有极其尖锐的分布和接近零的梯度。除以√d_k使点积的方差无论维度如何都保持为1，确保softmax产生良好分布的注意力权重和健康的梯度。",
    diagram: "",
    terms: ["attention_nlp", "bert"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 140,
    q: "What is positional encoding in the Transformer?",
    qChinese: "Transformer中的位置编码是什么？",
    options: [
      "A) Encoding the position of the document in a corpus",
      "B) Adding position-dependent signals to input embeddings so the model can distinguish word order",
      "C) Encoding the position of entities in text",
      "D) A technique for data compression"
    ],
    optionsChinese: [
      "A) 编码文档在语料库中的位置",
      "B) 向输入嵌入添加位置相关信号，以便模型可以区分词序",
      "C) 编码文本中实体的位置",
      "D) 数据压缩技术"
    ],
    answer: 1,
    explanation: "Unlike RNNs, Transformers process all positions simultaneously and have no inherent sense of order. Positional encodings (sinusoidal functions or learned embeddings) are added to word embeddings to provide position information. Without them, 'dog bites man' and 'man bites dog' would be identical.",
    explanationChinese: "与RNN不同，Transformer同时处理所有位置，没有固有的顺序感。位置编码（正弦函数或学习的嵌入）被添加到词嵌入中以提供位置信息。没有它们，'dog bites man'和'man bites dog'将是相同的。",
    diagram: "",
    terms: ["attention_nlp", "bert", "gpt"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 141,
    q: "What is the Transformer architecture composed of?",
    qChinese: "Transformer架构由什么组成？",
    options: [
      "A) Only RNN layers",
      "B) A single attention layer",
      "C) Only convolutional layers",
      "D) Stacked encoder and decoder blocks, each containing multi-head self-attention and feed-forward layers with residual connections and layer normalization"
    ],
    optionsChinese: [
      "A) 仅RNN层",
      "B) 单个注意力层",
      "C) 仅卷积层",
      "D) 堆叠的编码器和解码器块，每个包含多头自注意力和前馈层，带残差连接和层归一化"
    ],
    answer: 3,
    explanation: "The original Transformer has an encoder stack and decoder stack. Each encoder block has: multi-head self-attention → add & norm → feed-forward → add & norm. Each decoder block adds cross-attention to encoder outputs. Residual connections and layer normalization ensure stable training.",
    explanationChinese: "原始Transformer有编码器栈和解码器栈。每个编码器块有：多头自注意力 → 加和归一化 → 前馈 → 加和归一化。每个解码器块增加了对编码器输出的交叉注意力。残差连接和层归一化确保稳定训练。",
    diagram: "",
    terms: ["attention_nlp", "bert", "gpt"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 142,
    q: "What is masked self-attention in the Transformer decoder?",
    qChinese: "Transformer解码器中的遮蔽自注意力是什么？",
    options: [
      "A) Randomly masking words for training",
      "B) Masking the encoder output",
      "C) Preventing each position from attending to subsequent positions to maintain autoregressive generation",
      "D) Removing attention heads"
    ],
    optionsChinese: [
      "A) 随机遮蔽词进行训练",
      "B) 遮蔽编码器输出",
      "C) 防止每个位置关注后续位置以维持自回归生成",
      "D) 删除注意力头"
    ],
    answer: 2,
    explanation: "In the decoder, masked (causal) self-attention uses a triangular mask to prevent position i from attending to positions j > i. This ensures the prediction for position t only depends on known outputs at positions less than t, maintaining the autoregressive property needed for generation.",
    explanationChinese: "在解码器中，遮蔽（因果）自注意力使用三角形掩码防止位置i关注位置j > i。这确保位置t的预测仅依赖于位置小于t的已知输出，维持生成所需的自回归属性。",
    diagram: "",
    terms: ["attention_nlp", "gpt"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 143,
    q: "What is the feed-forward network in each Transformer block?",
    qChinese: "每个Transformer块中的前馈网络是什么？",
    options: [
      "A) A recurrent layer",
      "B) A convolution layer",
      "C) A position-wise two-layer MLP applied independently to each position with a non-linear activation",
      "D) An embedding lookup"
    ],
    optionsChinese: [
      "A) 一个循环层",
      "B) 一个卷积层",
      "C) 逐位置的两层MLP，独立应用于每个位置，带有非线性激活",
      "D) 一个嵌入查找"
    ],
    answer: 2,
    explanation: "Each Transformer block contains a position-wise feed-forward network: FFN(x) = max(0, xW1 + b1)W2 + b2. It applies the same two linear transformations with ReLU (or GELU) to each position independently. The inner dimension is typically 4× the model dimension (e.g., 3072 for d=768).",
    explanationChinese: "每个Transformer块包含一个逐位置的前馈网络：FFN(x) = max(0, xW1 + b1)W2 + b2。它对每个位置独立应用相同的两个线性变换和ReLU（或GELU）。内部维度通常是模型维度的4倍（如d=768时为3072）。",
    diagram: "",
    terms: ["attention_nlp", "bert"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 144,
    q: "What is cross-attention in the Transformer decoder?",
    qChinese: "Transformer解码器中的交叉注意力是什么？",
    options: [
      "A) Attention between different documents",
      "B) Attention that crosses language boundaries",
      "C) Attention between different attention heads",
      "D) Attention where decoder queries attend to encoder key-value pairs, connecting input and output sequences"
    ],
    optionsChinese: [
      "A) 不同文档之间的注意力",
      "B) 跨语言边界的注意力",
      "C) 不同注意力头之间的注意力",
      "D) 解码器查询关注编码器键值对的注意力，连接输入和输出序列"
    ],
    answer: 3,
    explanation: "In cross-attention (also called encoder-decoder attention), the Queries come from the decoder, while Keys and Values come from the encoder output. This allows each decoder position to attend to all encoder positions, enabling the decoder to access input information for generating each output token.",
    explanationChinese: "在交叉注意力（也称编码器-解码器注意力）中，查询来自解码器，而键和值来自编码器输出。这允许每个解码器位置关注所有编码器位置，使解码器能够访问输入信息以生成每个输出标记。",
    diagram: "",
    terms: ["attention_nlp", "sequence_to_sequence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 145,
    q: "Why are residual connections important in the Transformer?",
    qChinese: "为什么残差连接在Transformer中很重要？",
    options: [
      "A) They reduce the number of parameters",
      "B) They allow gradients to flow directly through the network, enabling training of deep models",
      "C) They increase the vocabulary size",
      "D) They remove the need for attention"
    ],
    optionsChinese: [
      "A) 它们减少参数数量",
      "B) 它们允许梯度直接流过网络，使深层模型的训练成为可能",
      "C) 它们增加词汇表大小",
      "D) 它们消除了对注意力的需要"
    ],
    answer: 1,
    explanation: "Residual connections add the input of a sublayer to its output: output = sublayer(x) + x. This creates shortcut paths for gradient flow, preventing vanishing gradients in deep networks. Without residual connections, training 12+ layer Transformers would be extremely difficult due to gradient degradation.",
    explanationChinese: "残差连接将子层的输入加到其输出：output = sublayer(x) + x。这为梯度流创建了捷径路径，防止深层网络中的梯度消失。没有残差连接，训练12+层的Transformer将由于梯度退化而极其困难。",
    diagram: "",
    terms: ["attention_nlp", "bert"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 146,
    q: "What is layer normalization in the Transformer?",
    qChinese: "Transformer中的层归一化是什么？",
    options: [
      "A) Normalizing the number of layers",
      "B) Normalizing activations across the feature dimension for each position independently, stabilizing training",
      "C) Removing certain layers during training",
      "D) Normalizing the vocabulary"
    ],
    optionsChinese: [
      "A) 规范化层数",
      "B) 为每个位置独立地跨特征维度归一化激活，稳定训练",
      "C) 在训练期间删除某些层",
      "D) 规范化词汇表"
    ],
    answer: 1,
    explanation: "Layer normalization normalizes activations across the feature dimension (not the batch dimension). For each position, it computes the mean and variance across features, then normalizes. This stabilizes training by reducing internal covariate shift. Pre-LN (normalize before sublayer) is now preferred over post-LN.",
    explanationChinese: "层归一化跨特征维度（而非批次维度）归一化激活。对于每个位置，它跨特征计算均值和方差，然后归一化。这通过减少内部协变量偏移来稳定训练。预层归一化（在子层之前归一化）现在优于后层归一化。",
    diagram: "",
    terms: ["attention_nlp", "bert"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 147,
    q: "How does the Transformer handle variable-length sequences?",
    qChinese: "Transformer如何处理可变长度的序列？",
    options: [
      "A) By padding sequences to the same length and using attention masks to ignore padded positions",
      "B) It cannot handle variable lengths",
      "C) By truncating all sequences to length 10",
      "D) By using recurrence"
    ],
    optionsChinese: [
      "A) 通过将序列填充到相同长度并使用注意力掩码来忽略填充位置",
      "B) 它不能处理可变长度",
      "C) 通过将所有序列截断到长度10",
      "D) 通过使用递归"
    ],
    answer: 0,
    explanation: "Sequences in a batch are padded to the maximum length. An attention mask (binary matrix) marks valid positions with 1 and padded positions with 0. Before softmax, padded positions get a large negative value (-inf), ensuring they receive zero attention weight. This maintains correct computation.",
    explanationChinese: "批次中的序列被填充到最大长度。注意力掩码（二进制矩阵）用1标记有效位置，用0标记填充位置。在softmax之前，填充位置获得一个大的负值（-inf），确保它们接收零注意力权重。这维持了正确的计算。",
    diagram: "",
    terms: ["attention_nlp", "bert"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 148,
    q: "What is the computational complexity of self-attention with respect to sequence length n?",
    qChinese: "自注意力相对于序列长度n的计算复杂度是多少？",
    options: [
      "A) O(n²) because every token attends to every other token",
      "B) O(n)",
      "C) O(log n)",
      "D) O(1)"
    ],
    optionsChinese: [
      "A) O(n²)，因为每个标记关注其他每个标记",
      "B) O(n)",
      "C) O(log n)",
      "D) O(1)"
    ],
    answer: 0,
    explanation: "Self-attention computes attention scores for all pairs of positions, creating an n×n attention matrix. This O(n²) complexity limits the maximum sequence length. Efficient Transformer variants (Longformer, Performer, BigBird) use sparse or approximate attention to achieve O(n) or O(n log n) complexity.",
    explanationChinese: "自注意力计算所有位置对的注意力分数，创建n×n的注意力矩阵。这种O(n²)复杂度限制了最大序列长度。高效Transformer变体（Longformer、Performer、BigBird）使用稀疏或近似注意力实现O(n)或O(n log n)复杂度。",
    diagram: "",
    terms: ["attention_nlp", "bert"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 149,
    q: "What is the 'Attention is All You Need' paper's key contribution?",
    qChinese: "'Attention is All You Need'论文的关键贡献是什么？",
    options: [
      "A) Inventing the RNN",
      "B) Proposing the Transformer architecture that replaces recurrence entirely with self-attention mechanisms",
      "C) Creating word embeddings",
      "D) Inventing the LSTM"
    ],
    optionsChinese: [
      "A) 发明RNN",
      "B) 提出完全用自注意力机制替代递归的Transformer架构",
      "C) 创建词嵌入",
      "D) 发明LSTM"
    ],
    answer: 1,
    explanation: "Vaswani et al. (2017) showed that the Transformer, using only self-attention without any recurrence or convolution, could achieve state-of-the-art results on machine translation. This architecture became the foundation for BERT, GPT, and virtually all modern NLP models.",
    explanationChinese: "Vaswani等人（2017）表明Transformer仅使用自注意力而不使用任何递归或卷积，就可以在机器翻译上实现最先进的结果。这种架构成为BERT、GPT和几乎所有现代NLP模型的基础。",
    diagram: "",
    terms: ["attention_nlp", "machine_translation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 150,
    q: "What is the difference between sinusoidal and learned positional encodings?",
    qChinese: "正弦位置编码和学习位置编码之间的区别是什么？",
    options: [
      "A) They produce identical results",
      "B) Learned encodings are always better",
      "C) Sinusoidal uses fixed mathematical functions; learned encodings are trainable parameters optimized during training",
      "D) Sinusoidal encodings require more parameters"
    ],
    optionsChinese: [
      "A) 它们产生相同的结果",
      "B) 学习编码总是更好",
      "C) 正弦使用固定的数学函数；学习编码是在训练期间优化的可训练参数",
      "D) 正弦编码需要更多参数"
    ],
    answer: 2,
    explanation: "Sinusoidal encodings use sin and cos functions of different frequencies, requiring no training and theoretically generalizing to unseen lengths. Learned encodings are embedding vectors trained like other parameters. The original Transformer found them comparable. BERT and GPT use learned encodings.",
    explanationChinese: "正弦编码使用不同频率的sin和cos函数，不需要训练，理论上可以泛化到未见的长度。学习编码是像其他参数一样训练的嵌入向量。原始Transformer发现它们效果相当。BERT和GPT使用学习编码。",
    diagram: "",
    terms: ["attention_nlp", "bert", "gpt"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 151,
    q: "What is the role of the attention mask in Transformer-based NLP models?",
    qChinese: "注意力掩码在基于Transformer的NLP模型中的作用是什么？",
    options: [
      "A) To increase model speed",
      "B) To reduce the vocabulary",
      "C) To mask the input embeddings",
      "D) To control which positions can attend to which, preventing attention to padding tokens or future tokens"
    ],
    optionsChinese: [
      "A) 提高模型速度",
      "B) 减少词汇表",
      "C) 遮蔽输入嵌入",
      "D) 控制哪些位置可以关注哪些位置，防止关注填充标记或未来标记"
    ],
    answer: 3,
    explanation: "Attention masks serve two purposes: (1) padding masks prevent attention to PAD tokens in batched sequences, and (2) causal masks in decoders prevent attending to future positions. The mask is applied before softmax by adding -inf to forbidden positions, resulting in zero attention weights.",
    explanationChinese: "注意力掩码有两个目的：(1)填充掩码防止关注批处理序列中的PAD标记，(2)解码器中的因果掩码防止关注未来位置。掩码在softmax之前通过向禁止位置添加-inf来应用，导致零注意力权重。",
    diagram: "",
    terms: ["attention_nlp", "bert"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 152,
    q: "What is an attention head and what does it capture?",
    qChinese: "什么是注意力头，它捕捉什么？",
    options: [
      "A) A single attention computation that may learn to focus on specific linguistic relationships like syntax or coreference",
      "B) The first layer of the Transformer",
      "C) The output layer",
      "D) A type of word embedding"
    ],
    optionsChinese: [
      "A) 可能学习关注特定语言关系（如句法或共指）的单个注意力计算",
      "B) Transformer的第一层",
      "C) 输出层",
      "D) 一种词嵌入"
    ],
    answer: 0,
    explanation: "Each attention head has its own Q, K, V projection matrices and learns independently. Research shows different heads specialize: some capture syntactic dependencies (subject-verb), some track positional patterns, some handle coreference. Multi-head attention enables the model to jointly attend to diverse information.",
    explanationChinese: "每个注意力头有自己的Q、K、V投影矩阵并独立学习。研究表明不同的头有专长：一些捕捉句法依赖（主语-动词），一些跟踪位置模式，一些处理共指。多头注意力使模型能够联合关注多样化的信息。",
    diagram: "",
    terms: ["attention_nlp", "bert"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 153,
    q: "What is the Transformer's advantage over RNNs for long-range dependencies?",
    qChinese: "Transformer在长距离依赖方面比RNN有什么优势？",
    options: [
      "A) Transformers use less memory",
      "B) Self-attention directly connects any two positions with a constant number of operations, regardless of distance",
      "C) Transformers have fewer parameters",
      "D) Transformers use recurrence internally"
    ],
    optionsChinese: [
      "A) Transformer使用更少的内存",
      "B) 自注意力直接以恒定数量的操作连接任意两个位置，不受距离限制",
      "C) Transformer有更少的参数",
      "D) Transformer内部使用递归"
    ],
    answer: 1,
    explanation: "In an RNN, information must pass through O(n) sequential steps between distant positions, losing signal. In self-attention, every position directly attends to every other in one step (path length O(1)). This makes learning long-range dependencies like subject-verb agreement much easier for Transformers.",
    explanationChinese: "在RNN中，信息必须通过O(n)个顺序步骤在远距离位置之间传递，信号会丢失。在自注意力中，每个位置在一步中直接关注其他每个位置（路径长度O(1)）。这使Transformer学习长距离依赖（如主谓一致）更加容易。",
    diagram: "",
    terms: ["attention_nlp", "recurrent_nlp"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 154,
    q: "What is the Transformer encoder used for in NLP?",
    qChinese: "Transformer编码器在NLP中用于什么？",
    options: [
      "A) Producing contextual representations of input text for understanding tasks like classification and NER",
      "B) Only text generation",
      "C) Only machine translation",
      "D) Only tokenization"
    ],
    optionsChinese: [
      "A) 为分类和NER等理解任务生成输入文本的上下文表示",
      "B) 仅文本生成",
      "C) 仅机器翻译",
      "D) 仅分词"
    ],
    answer: 0,
    explanation: "The Transformer encoder uses bidirectional self-attention to create rich contextual representations of each token. BERT is an encoder-only model. These representations are useful for classification (using [CLS] token), NER (using token representations), and other understanding tasks where full context is available.",
    explanationChinese: "Transformer编码器使用双向自注意力为每个标记创建丰富的上下文表示。BERT是仅编码器模型。这些表示对分类（使用[CLS]标记）、NER（使用标记表示）和其他可获得完整上下文的理解任务有用。",
    diagram: "",
    terms: ["attention_nlp", "bert", "named_entity_recognition"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 155,
    q: "What is the Transformer decoder used for in NLP?",
    qChinese: "Transformer解码器在NLP中用于什么？",
    options: [
      "A) Autoregressive text generation, predicting the next token based on previous tokens",
      "B) Only classification",
      "C) Only computing embeddings",
      "D) Only parsing"
    ],
    optionsChinese: [
      "A) 自回归文本生成，基于先前标记预测下一个标记",
      "B) 仅分类",
      "C) 仅计算嵌入",
      "D) 仅解析"
    ],
    answer: 0,
    explanation: "The Transformer decoder uses causal (masked) self-attention to generate tokens left-to-right. GPT is a decoder-only model. At each step, it predicts the next token probability distribution based on all previous tokens. It is used for text generation, code completion, dialogue, and other generative tasks.",
    explanationChinese: "Transformer解码器使用因果（遮蔽）自注意力从左到右生成标记。GPT是仅解码器模型。在每一步，它基于所有先前标记预测下一个标记的概率分布。它用于文本生成、代码补全、对话和其他生成任务。",
    diagram: "",
    terms: ["attention_nlp", "gpt"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 156,
    q: "What is Bahdanau attention?",
    qChinese: "什么是Bahdanau注意力？",
    options: [
      "A) An additive attention mechanism that uses a learned neural network to compute alignment scores between encoder and decoder states",
      "B) A type of self-attention",
      "C) A multi-head attention variant",
      "D) An attention mechanism that only uses dot products"
    ],
    optionsChinese: [
      "A) 使用学习的神经网络计算编码器和解码器状态之间对齐分数的加性注意力机制",
      "B) 一种自注意力",
      "C) 多头注意力的变体",
      "D) 仅使用点积的注意力机制"
    ],
    answer: 0,
    explanation: "Bahdanau attention (2014) computes alignment scores using a feedforward network: score(s_i, h_j) = v^T · tanh(W_1·s_i + W_2·h_j). This additive attention was the first neural attention for NMT, allowing the decoder to dynamically focus on relevant source words for each target word.",
    explanationChinese: "Bahdanau注意力（2014）使用前馈网络计算对齐分数：score(s_i, h_j) = v^T · tanh(W_1·s_i + W_2·h_j)。这种加性注意力是第一个用于NMT的神经注意力，允许解码器为每个目标词动态关注相关的源词。",
    diagram: "",
    terms: ["attention_nlp", "machine_translation", "sequence_to_sequence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 157,
    q: "What is Luong attention and how does it differ from Bahdanau?",
    qChinese: "什么是Luong注意力，它与Bahdanau有何不同？",
    options: [
      "A) They are identical",
      "B) Luong uses multiplicative (dot-product) scoring and is simpler, while Bahdanau uses additive scoring with a neural network",
      "C) Luong attention was invented first",
      "D) Luong attention does not use softmax"
    ],
    optionsChinese: [
      "A) 它们是相同的",
      "B) Luong使用乘法（点积）评分且更简单，而Bahdanau使用带神经网络的加法评分",
      "C) Luong注意力先发明",
      "D) Luong注意力不使用softmax"
    ],
    answer: 1,
    explanation: "Luong attention (2015) computes alignment as score(s_i, h_j) = s_i^T · W · h_j (general) or s_i^T · h_j (dot). It is computationally cheaper than Bahdanau's additive form. Luong also proposed local attention that only attends to a window of source positions.",
    explanationChinese: "Luong注意力（2015）计算对齐为score(s_i, h_j) = s_i^T · W · h_j（一般）或s_i^T · h_j（点积）。它比Bahdanau的加法形式计算成本更低。Luong还提出了仅关注源位置窗口的局部注意力。",
    diagram: "",
    terms: ["attention_nlp", "machine_translation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 158,
    q: "What is the attention visualization and what can it reveal about NLP models?",
    qChinese: "什么是注意力可视化，它能揭示NLP模型的什么？",
    options: [
      "A) It only shows model parameters",
      "B) It displays heatmaps of attention weights, revealing which input tokens the model focuses on for each output",
      "C) It visualizes word embeddings only",
      "D) It shows training loss curves"
    ],
    optionsChinese: [
      "A) 它仅显示模型参数",
      "B) 它显示注意力权重的热图，揭示模型对每个输出关注哪些输入标记",
      "C) 它仅可视化词嵌入",
      "D) 它显示训练损失曲线"
    ],
    answer: 1,
    explanation: "Attention visualization plots attention weights as heatmaps where rows are output positions and columns are input positions. Brighter cells indicate higher attention. This reveals alignment patterns in translation, shows which words are important for classification, and helps with model interpretability and debugging.",
    explanationChinese: "注意力可视化将注意力权重绘制为热图，行是输出位置，列是输入位置。更亮的单元格表示更高的注意力。这揭示了翻译中的对齐模式，显示哪些词对分类重要，并有助于模型可解释性和调试。",
    diagram: "",
    terms: ["attention_nlp", "machine_translation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 159,
    q: "What are efficient attention mechanisms designed to address?",
    qChinese: "高效注意力机制旨在解决什么问题？",
    options: [
      "A) Improving accuracy only",
      "B) Handling multiple languages",
      "C) Reducing the O(n²) computational and memory cost of standard self-attention for long sequences",
      "D) Reducing vocabulary size"
    ],
    optionsChinese: [
      "A) 仅提高准确率",
      "B) 处理多种语言",
      "C) 降低长序列标准自注意力的O(n²)计算和内存成本",
      "D) 减少词汇表大小"
    ],
    answer: 2,
    explanation: "Standard self-attention has O(n²) complexity, limiting context length. Efficient variants include: Longformer (local + global attention), Performer (kernel approximation), BigBird (sparse attention), and Flash Attention (IO-aware exact attention). These enable processing documents with thousands or millions of tokens.",
    explanationChinese: "标准自注意力具有O(n²)复杂度，限制了上下文长度。高效变体包括：Longformer（局部+全局注意力）、Performer（核近似）、BigBird（稀疏注意力）和Flash Attention（IO感知的精确注意力）。这些使处理数千或数百万标记的文档成为可能。",
    diagram: "",
    terms: ["attention_nlp", "bert"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 160,
    q: "What is the difference between encoder-only, decoder-only, and encoder-decoder Transformers?",
    qChinese: "仅编码器、仅解码器和编码器-解码器Transformer之间有什么区别？",
    options: [
      "A) They all have the same architecture",
      "B) Encoder-only models generate text",
      "C) Only decoder-only models can do NLP",
      "D) Encoder-only (BERT) uses bidirectional attention for understanding; decoder-only (GPT) uses causal attention for generation; encoder-decoder (T5) uses both for sequence-to-sequence"
    ],
    optionsChinese: [
      "A) 它们都有相同的架构",
      "B) 仅编码器模型生成文本",
      "C) 只有仅解码器模型可以做NLP",
      "D) 仅编码器（BERT）使用双向注意力进行理解；仅解码器（GPT）使用因果注意力进行生成；编码器-解码器（T5）两者都用于序列到序列"
    ],
    answer: 3,
    explanation: "Encoder-only models (BERT, RoBERTa) see full bidirectional context, ideal for classification and extraction. Decoder-only models (GPT, LLaMA) see only left context, ideal for generation. Encoder-decoder models (T5, BART) combine both for translation, summarization, and other seq2seq tasks.",
    explanationChinese: "仅编码器模型（BERT、RoBERTa）看到完整的双向上下文，适合分类和提取。仅解码器模型（GPT、LLaMA）只看到左侧上下文，适合生成。编码器-解码器模型（T5、BART）结合两者用于翻译、摘要和其他seq2seq任务。",
    diagram: "",
    terms: ["attention_nlp", "bert", "gpt"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 161,
    q: "What is relative positional encoding?",
    qChinese: "什么是相对位置编码？",
    options: [
      "A) Encoding absolute position only",
      "B) Encoding the relative distance between token pairs rather than absolute positions",
      "C) Encoding the position of the sentence in the document",
      "D) Not using any position information"
    ],
    optionsChinese: [
      "A) 仅编码绝对位置",
      "B) 编码标记对之间的相对距离而非绝对位置",
      "C) 编码句子在文档中的位置",
      "D) 不使用任何位置信息"
    ],
    answer: 1,
    explanation: "Relative positional encodings (used in Transformer-XL, T5) encode the distance between positions rather than absolute positions. This helps generalize to longer sequences than seen during training and captures the linguistic intuition that what matters is how far apart words are, not their absolute positions.",
    explanationChinese: "相对位置编码（在Transformer-XL、T5中使用）编码位置之间的距离而非绝对位置。这有助于泛化到比训练时更长的序列，并捕捉了语言直觉——重要的是词之间的距离，而不是它们的绝对位置。",
    diagram: "",
    terms: ["attention_nlp", "bert"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 162,
    q: "What is the purpose of the [CLS] token in BERT-style Transformers?",
    qChinese: "[CLS]标记在BERT风格Transformer中的目的是什么？",
    options: [
      "A) To provide a fixed-size representation of the entire input for classification tasks",
      "B) To mark the end of a sentence",
      "C) To separate two sentences",
      "D) To indicate a padding position"
    ],
    optionsChinese: [
      "A) 为分类任务提供整个输入的固定大小表示",
      "B) 标记句子的结束",
      "C) 分隔两个句子",
      "D) 表示填充位置"
    ],
    answer: 0,
    explanation: "The [CLS] (classification) token is prepended to every BERT input. Through self-attention, it aggregates information from all other tokens. Its final hidden state serves as the sequence-level representation for classification tasks. A simple linear layer on top of [CLS] performs the classification.",
    explanationChinese: "[CLS]（分类）标记被添加到每个BERT输入的开头。通过自注意力，它聚合来自所有其他标记的信息。其最终隐藏状态作为分类任务的序列级表示。[CLS]之上的简单线性层执行分类。",
    diagram: "",
    terms: ["attention_nlp", "bert", "text_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 163,
    q: "What is Rotary Position Embedding (RoPE)?",
    qChinese: "什么是旋转位置嵌入（RoPE）？",
    options: [
      "A) A type of word embedding",
      "B) A data augmentation technique",
      "C) A positional encoding that encodes position by rotating query and key vectors, naturally capturing relative positions",
      "D) An optimization algorithm"
    ],
    optionsChinese: [
      "A) 一种词嵌入",
      "B) 一种数据增强技术",
      "C) 通过旋转查询和键向量编码位置的位置编码，自然地捕捉相对位置",
      "D) 一种优化算法"
    ],
    answer: 2,
    explanation: "RoPE applies rotation matrices to query and key vectors based on their absolute positions. The dot product of rotated Q and K naturally becomes a function of relative position. This elegant approach is used in LLaMA, PaLM, and other modern LLMs, providing both absolute and relative position information.",
    explanationChinese: "RoPE根据查询和键向量的绝对位置对其应用旋转矩阵。旋转后的Q和K的点积自然成为相对位置的函数。这种优雅的方法用于LLaMA、PaLM和其他现代LLM中，同时提供绝对和相对位置信息。",
    diagram: "",
    terms: ["attention_nlp", "gpt"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 164,
    q: "What is the KV cache in Transformer inference?",
    qChinese: "Transformer推理中的KV缓存是什么？",
    options: [
      "A) A training optimization",
      "B) A type of attention mechanism",
      "C) Caching computed key and value tensors from previous tokens to avoid redundant computation during autoregressive generation",
      "D) A vocabulary storage method"
    ],
    optionsChinese: [
      "A) 训练优化",
      "B) 一种注意力机制",
      "C) 缓存先前标记计算的键和值张量，以避免自回归生成期间的冗余计算",
      "D) 词汇存储方法"
    ],
    answer: 2,
    explanation: "During autoregressive generation, each new token needs to attend to all previous tokens. Without KV cache, K and V for all previous tokens would be recomputed at each step. The KV cache stores these, so only the new token's K and V need computation. This significantly speeds up inference.",
    explanationChinese: "在自回归生成期间，每个新标记需要关注所有先前标记。没有KV缓存，所有先前标记的K和V将在每步重新计算。KV缓存存储这些，因此只需计算新标记的K和V。这显著加速了推理。",
    diagram: "",
    terms: ["attention_nlp", "gpt"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 165,
    q: "What is the relationship between attention weights and model interpretability in NLP?",
    qChinese: "注意力权重与NLP中模型可解释性之间的关系是什么？",
    options: [
      "A) Attention weights perfectly explain model decisions",
      "B) Attention weights have no relationship to model behavior",
      "C) Attention weights provide a partial window into model focus but may not faithfully represent the full reasoning process",
      "D) Only the last layer's attention is meaningful"
    ],
    optionsChinese: [
      "A) 注意力权重完美地解释模型决策",
      "B) 注意力权重与模型行为没有关系",
      "C) 注意力权重提供了模型关注的部分窗口，但可能不能忠实地代表完整的推理过程",
      "D) 只有最后一层的注意力有意义"
    ],
    answer: 2,
    explanation: "While attention weights show where a model focuses, research (Jain & Wallace, 2019) shows they do not always provide faithful explanations. Alternative attention distributions can produce the same predictions. Attention provides useful but incomplete interpretability. Gradient-based methods offer complementary explanations.",
    explanationChinese: "虽然注意力权重显示模型关注的位置，但研究（Jain & Wallace, 2019）表明它们并不总是提供忠实的解释。替代的注意力分布可以产生相同的预测。注意力提供有用但不完整的可解释性。基于梯度的方法提供互补的解释。",
    diagram: "",
    terms: ["attention_nlp", "bert"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 166,
    q: "What is BERT and what is its pre-training objective?",
    qChinese: "什么是BERT，它的预训练目标是什么？",
    options: [
      "A) A unidirectional model trained with next word prediction",
      "B) A bidirectional encoder pre-trained with masked language modeling (MLM) and next sentence prediction (NSP)",
      "C) A generative model for text completion",
      "D) A translation model"
    ],
    optionsChinese: [
      "A) 用下一个词预测训练的单向模型",
      "B) 用遮蔽语言建模（MLM）和下一句预测（NSP）预训练的双向编码器",
      "C) 用于文本补全的生成模型",
      "D) 翻译模型"
    ],
    answer: 1,
    explanation: "BERT (Bidirectional Encoder Representations from Transformers) randomly masks 15% of tokens and trains the model to predict them using bidirectional context. NSP predicts whether two sentences are consecutive. This pre-training creates powerful representations that can be fine-tuned for downstream NLP tasks.",
    explanationChinese: "BERT（来自Transformer的双向编码器表示）随机遮蔽15%的标记并训练模型使用双向上下文预测它们。NSP预测两个句子是否连续。这种预训练创建了可以为下游NLP任务微调的强大表示。",
    diagram: "",
    terms: ["bert", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 167,
    q: "What is GPT and how does it differ from BERT?",
    qChinese: "什么是GPT，它与BERT有何不同？",
    options: [
      "A) GPT and BERT are identical",
      "B) GPT is a unidirectional decoder pre-trained with causal language modeling, while BERT is a bidirectional encoder using masked language modeling",
      "C) GPT uses bidirectional attention",
      "D) BERT is for generation while GPT is for classification"
    ],
    optionsChinese: [
      "A) GPT和BERT是相同的",
      "B) GPT是用因果语言建模预训练的单向解码器，而BERT是使用遮蔽语言建模的双向编码器",
      "C) GPT使用双向注意力",
      "D) BERT用于生成，GPT用于分类"
    ],
    answer: 1,
    explanation: "GPT (Generative Pre-trained Transformer) uses a decoder-only architecture with causal (left-to-right) attention, predicting the next token. BERT uses an encoder with full bidirectional attention, predicting masked tokens. GPT excels at generation; BERT excels at understanding tasks like classification and QA.",
    explanationChinese: "GPT（生成式预训练Transformer）使用仅解码器架构和因果（从左到右）注意力，预测下一个标记。BERT使用完整双向注意力的编码器，预测遮蔽的标记。GPT擅长生成；BERT擅长分类和问答等理解任务。",
    diagram: "",
    terms: ["gpt", "bert", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 168,
    q: "What is fine-tuning a pre-trained language model?",
    qChinese: "微调预训练语言模型是什么？",
    options: [
      "A) Training the model from scratch",
      "B) Further training a pre-trained model on task-specific labeled data, adapting its representations",
      "C) Reducing the model size",
      "D) Only changing the tokenizer"
    ],
    optionsChinese: [
      "A) 从头训练模型",
      "B) 在特定任务的标注数据上进一步训练预训练模型，调整其表示",
      "C) 减小模型大小",
      "D) 仅更改分词器"
    ],
    answer: 1,
    explanation: "Fine-tuning initializes with pre-trained weights and continues training on a downstream task (classification, NER, QA) with task-specific data and a classification head. Using a small learning rate (e.g., 2e-5) and few epochs prevents catastrophic forgetting of pre-trained knowledge while adapting to the new task.",
    explanationChinese: "微调使用预训练权重初始化，并在下游任务（分类、NER、问答）上使用特定任务数据和分类头继续训练。使用小学习率（如2e-5）和少量轮数可防止预训练知识的灾难性遗忘，同时适应新任务。",
    diagram: "",
    terms: ["bert", "gpt", "text_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 169,
    q: "What is masked language modeling (MLM) in BERT?",
    qChinese: "BERT中的遮蔽语言建模（MLM）是什么？",
    options: [
      "A) Predicting the next word in a sequence",
      "B) Removing all stopwords from input",
      "C) Randomly masking 15% of input tokens and training the model to predict the original tokens using bidirectional context",
      "D) Masking attention heads"
    ],
    optionsChinese: [
      "A) 预测序列中的下一个词",
      "B) 从输入中删除所有停用词",
      "C) 随机遮蔽15%的输入标记并训练模型使用双向上下文预测原始标记",
      "D) 遮蔽注意力头"
    ],
    answer: 2,
    explanation: "In MLM, 15% of tokens are selected for prediction. Of these, 80% are replaced with [MASK], 10% with random tokens, and 10% left unchanged. This mixed strategy prevents the model from only learning to detect [MASK] tokens. The model predicts the original token using full bidirectional context.",
    explanationChinese: "在MLM中，15%的标记被选择进行预测。其中80%被替换为[MASK]，10%被替换为随机标记，10%保持不变。这种混合策略防止模型仅学习检测[MASK]标记。模型使用完整的双向上下文预测原始标记。",
    diagram: "",
    terms: ["bert", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 170,
    q: "What is T5 and what is its approach to NLP tasks?",
    qChinese: "什么是T5，它处理NLP任务的方法是什么？",
    options: [
      "A) A classification-only model",
      "B) A text-to-text model that frames every NLP task as converting input text to output text",
      "C) A model only for translation",
      "D) A word embedding model"
    ],
    optionsChinese: [
      "A) 仅分类模型",
      "B) 将每个NLP任务构建为将输入文本转换为输出文本的文本到文本模型",
      "C) 仅翻译模型",
      "D) 词嵌入模型"
    ],
    answer: 1,
    explanation: "T5 (Text-to-Text Transfer Transformer) by Google frames every NLP task as text generation. Classification becomes 'classify: [text]' → 'positive'. Translation becomes 'translate English to German: [text]' → '[German text]'. This unified framework simplifies multi-task learning and transfer.",
    explanationChinese: "Google的T5（文本到文本转换Transformer）将每个NLP任务构建为文本生成。分类变为'classify: [text]' → 'positive'。翻译变为'translate English to German: [text]' → '[German text]'。这种统一框架简化了多任务学习和迁移。",
    diagram: "",
    terms: ["bert", "gpt", "sequence_to_sequence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 171,
    q: "What is RoBERTa's improvement over BERT?",
    qChinese: "RoBERTa相对于BERT的改进是什么？",
    options: [
      "A) A completely different architecture",
      "B) Using a smaller model",
      "C) Training with more data, larger batches, longer sequences, removing NSP, and dynamic masking",
      "D) Adding convolutional layers"
    ],
    optionsChinese: [
      "A) 完全不同的架构",
      "B) 使用更小的模型",
      "C) 使用更多数据、更大批次、更长序列训练，移除NSP并使用动态遮蔽",
      "D) 添加卷积层"
    ],
    answer: 2,
    explanation: "RoBERTa (Robustly Optimized BERT) showed that BERT was significantly undertrained. Key improvements: 10x more training data, larger batch sizes, longer training, removing NSP objective, and dynamic masking (changing masks each epoch). These simple changes substantially improved performance across NLP benchmarks.",
    explanationChinese: "RoBERTa（稳健优化的BERT）表明BERT的训练严重不足。关键改进：10倍更多的训练数据、更大的批次大小、更长的训练、移除NSP目标和动态遮蔽（每个轮次更改遮蔽）。这些简单的更改大幅提高了NLP基准测试的性能。",
    diagram: "",
    terms: ["bert", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 172,
    q: "What is prompt engineering in the context of large language models?",
    qChinese: "大语言模型语境中的提示工程是什么？",
    options: [
      "A) Training a model from scratch",
      "B) Creating training datasets",
      "C) Building the model architecture",
      "D) Designing input text prompts to elicit desired behavior from pre-trained models without updating parameters"
    ],
    optionsChinese: [
      "A) 从头训练模型",
      "B) 创建训练数据集",
      "C) 构建模型架构",
      "D) 设计输入文本提示以在不更新参数的情况下从预训练模型中引出期望行为"
    ],
    answer: 3,
    explanation: "Prompt engineering crafts input text to guide pre-trained models (GPT-3, GPT-4) toward desired outputs without fine-tuning. Techniques include few-shot examples in the prompt, chain-of-thought reasoning, role-playing instructions, and structured output formats. It leverages knowledge already in the model.",
    explanationChinese: "提示工程制作输入文本以引导预训练模型（GPT-3、GPT-4）产生期望输出而无需微调。技术包括在提示中提供少量样本示例、思维链推理、角色扮演指令和结构化输出格式。它利用了模型中已有的知识。",
    diagram: "",
    terms: ["gpt", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 173,
    q: "What is the difference between few-shot, one-shot, and zero-shot learning with LLMs?",
    qChinese: "LLM的少样本、单样本和零样本学习之间有什么区别？",
    options: [
      "A) They all require fine-tuning",
      "B) They refer to model sizes",
      "C) Zero-shot uses no examples; one-shot uses one example; few-shot uses several examples in the prompt to guide the model",
      "D) They refer to training epochs"
    ],
    optionsChinese: [
      "A) 它们都需要微调",
      "B) 它们指模型大小",
      "C) 零样本不使用示例；单样本使用一个示例；少样本使用多个示例在提示中引导模型",
      "D) 它们指训练轮数"
    ],
    answer: 2,
    explanation: "Zero-shot: only a task description is given ('Translate to French: Hello'). One-shot: one example is provided ('Hello → Bonjour. Goodbye → ?'). Few-shot: several examples demonstrate the pattern. These approaches leverage in-context learning without parameter updates, with performance improving as more examples are given.",
    explanationChinese: "零样本：仅给出任务描述（'Translate to French: Hello'）。单样本：提供一个示例（'Hello → Bonjour. Goodbye → ?'）。少样本：多个示例演示模式。这些方法利用上下文学习而无需参数更新，随着给出更多示例性能会提高。",
    diagram: "",
    terms: ["gpt", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 174,
    q: "What is LoRA (Low-Rank Adaptation) for fine-tuning?",
    qChinese: "什么是LoRA（低秩适应）微调？",
    options: [
      "A) Training all model parameters",
      "B) A parameter-efficient method that adds small trainable low-rank matrices to frozen pre-trained weights",
      "C) Removing layers from the model",
      "D) A data augmentation technique"
    ],
    optionsChinese: [
      "A) 训练所有模型参数",
      "B) 一种参数高效的方法，向冻结的预训练权重添加小的可训练低秩矩阵",
      "C) 从模型中删除层",
      "D) 一种数据增强技术"
    ],
    answer: 1,
    explanation: "LoRA freezes pre-trained weights and injects trainable low-rank decomposition matrices (A and B) into attention layers: W' = W + BA, where B and A have rank r << d. This reduces trainable parameters by 10,000x while achieving performance comparable to full fine-tuning. It is essential for efficiently adapting large LLMs.",
    explanationChinese: "LoRA冻结预训练权重，并在注意力层中注入可训练的低秩分解矩阵（A和B）：W' = W + BA，其中B和A的秩r << d。这将可训练参数减少10,000倍，同时实现与完全微调相当的性能。它对于高效适应大型LLM至关重要。",
    diagram: "",
    terms: ["bert", "gpt"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 175,
    q: "What is BERT-base vs BERT-large?",
    qChinese: "BERT-base与BERT-large有什么区别？",
    options: [
      "A) They have the same size",
      "B) BERT-base has 12 layers and 110M parameters; BERT-large has 24 layers and 340M parameters",
      "C) BERT-large has fewer parameters",
      "D) BERT-base is a newer version"
    ],
    optionsChinese: [
      "A) 它们有相同的大小",
      "B) BERT-base有12层和1.1亿参数；BERT-large有24层和3.4亿参数",
      "C) BERT-large参数更少",
      "D) BERT-base是更新的版本"
    ],
    answer: 1,
    explanation: "BERT-base: 12 layers, 768 hidden size, 12 attention heads, 110M parameters. BERT-large: 24 layers, 1024 hidden size, 16 attention heads, 340M parameters. BERT-large generally performs better but requires significantly more compute. The choice depends on available resources and task requirements.",
    explanationChinese: "BERT-base：12层、768隐藏大小、12个注意力头、1.1亿参数。BERT-large：24层、1024隐藏大小、16个注意力头、3.4亿参数。BERT-large通常表现更好但需要显著更多的计算。选择取决于可用资源和任务需求。",
    diagram: "",
    terms: ["bert", "attention_nlp"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 176,
    q: "What is the next sentence prediction (NSP) task in BERT?",
    qChinese: "BERT中的下一句预测（NSP）任务是什么？",
    options: [
      "A) Predicting the next word",
      "B) A binary classification task predicting whether sentence B actually follows sentence A in the original text",
      "C) Translating the next sentence",
      "D) Generating the next sentence"
    ],
    optionsChinese: [
      "A) 预测下一个词",
      "B) 预测句子B是否实际上在原始文本中跟在句子A之后的二分类任务",
      "C) 翻译下一个句子",
      "D) 生成下一个句子"
    ],
    answer: 1,
    explanation: "NSP trains BERT to understand sentence relationships. 50% of training pairs are actual consecutive sentences (label: IsNext), and 50% are random pairs (label: NotNext). This was intended to help tasks requiring sentence-pair understanding like QA and NLI. However, RoBERTa showed NSP can be removed without loss.",
    explanationChinese: "NSP训练BERT理解句子关系。50%的训练对是实际的连续句子（标签：IsNext），50%是随机对（标签：NotNext）。这旨在帮助需要句子对理解的任务，如问答和NLI。然而，RoBERTa表明可以移除NSP而不损失性能。",
    diagram: "",
    terms: ["bert", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 177,
    q: "What is the difference between GPT-2 and GPT-3?",
    qChinese: "GPT-2和GPT-3之间有什么区别？",
    options: [
      "A) They have the same size",
      "B) GPT-3 uses a different architecture",
      "C) GPT-2 is newer",
      "D) GPT-3 is much larger (175B vs 1.5B parameters) and demonstrates emergent abilities like in-context learning at scale"
    ],
    optionsChinese: [
      "A) 它们有相同的大小",
      "B) GPT-3使用不同的架构",
      "C) GPT-2更新",
      "D) GPT-3更大（1750亿对比15亿参数），并在规模上展示了如上下文学习等涌现能力"
    ],
    answer: 3,
    explanation: "GPT-3 (175B parameters) is ~100x larger than GPT-2 (1.5B). This massive scale enables emergent capabilities: strong few-shot learning from prompts alone, arithmetic reasoning, and code generation, without fine-tuning. GPT-3 demonstrated that scale alone can unlock new capabilities.",
    explanationChinese: "GPT-3（1750亿参数）比GPT-2（15亿）大约100倍。这种大规模使涌现能力成为可能：仅从提示进行强大的少样本学习、算术推理和代码生成，无需微调。GPT-3证明了仅仅规模就可以解锁新能力。",
    diagram: "",
    terms: ["gpt", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 178,
    q: "What is BART and what makes it effective for text generation?",
    qChinese: "什么是BART，是什么使它在文本生成方面有效？",
    options: [
      "A) A denoising autoencoder with an encoder-decoder architecture, pre-trained by corrupting text and learning to reconstruct it",
      "B) A classification-only model",
      "C) A model only for translation",
      "D) A word embedding technique"
    ],
    optionsChinese: [
      "A) 具有编码器-解码器架构的去噪自编码器，通过破坏文本并学习重建来预训练",
      "B) 仅分类模型",
      "C) 仅翻译模型",
      "D) 词嵌入技术"
    ],
    answer: 0,
    explanation: "BART (Bidirectional and Auto-Regressive Transformer) corrupts text using various strategies (masking, deletion, shuffling, infilling) and trains an encoder-decoder to reconstruct the original. This pre-training is particularly effective for generation tasks like summarization and question generation.",
    explanationChinese: "BART（双向和自回归Transformer）使用各种策略（遮蔽、删除、打乱、填充）破坏文本，并训练编码器-解码器重建原始文本。这种预训练对于摘要和问题生成等生成任务特别有效。",
    diagram: "",
    terms: ["bert", "gpt", "sequence_to_sequence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 179,
    q: "What is catastrophic forgetting in the context of fine-tuning?",
    qChinese: "在微调的语境中，灾难性遗忘是什么？",
    options: [
      "A) The model forgets to generate text",
      "B) The model loses its pre-trained knowledge when fine-tuned too aggressively on a new task",
      "C) The model runs out of memory",
      "D) The model forgets the tokenizer"
    ],
    optionsChinese: [
      "A) 模型忘记生成文本",
      "B) 模型在新任务上过度微调时失去其预训练知识",
      "C) 模型内存耗尽",
      "D) 模型忘记分词器"
    ],
    answer: 1,
    explanation: "Catastrophic forgetting occurs when fine-tuning overwrites pre-trained representations. Solutions include: using small learning rates (2e-5 to 5e-5), training for few epochs (2-4), gradual unfreezing (training top layers first), and parameter-efficient methods like LoRA that keep most pre-trained weights frozen.",
    explanationChinese: "灾难性遗忘发生在微调覆盖预训练表示时。解决方案包括：使用小学习率（2e-5到5e-5）、训练少数轮次（2-4）、逐步解冻（先训练顶层）以及像LoRA这样保持大部分预训练权重冻结的参数高效方法。",
    diagram: "",
    terms: ["bert", "gpt"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 180,
    q: "What is the GLUE benchmark?",
    qChinese: "什么是GLUE基准测试？",
    options: [
      "A) A collection of diverse NLU tasks used to evaluate pre-trained language models across multiple capabilities",
      "B) A single NLP task",
      "C) A training dataset",
      "D) A model architecture"
    ],
    optionsChinese: [
      "A) 用于评估预训练语言模型多种能力的多样化NLU任务集合",
      "B) 单个NLP任务",
      "C) 训练数据集",
      "D) 模型架构"
    ],
    answer: 0,
    explanation: "GLUE (General Language Understanding Evaluation) includes 9 tasks: sentiment analysis (SST-2), paraphrase detection (QQP, MRPC), textual entailment (MNLI, RTE), and more. It provides a standardized way to compare language models. SuperGLUE is its harder successor with more challenging tasks.",
    explanationChinese: "GLUE（通用语言理解评估）包括9个任务：情感分析（SST-2）、释义检测（QQP、MRPC）、文本蕴含（MNLI、RTE）等。它提供了比较语言模型的标准化方式。SuperGLUE是其更困难的继任者，具有更具挑战性的任务。",
    diagram: "",
    terms: ["bert", "text_classification", "sentiment_analysis"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 181,
    q: "What is RLHF (Reinforcement Learning from Human Feedback)?",
    qChinese: "什么是RLHF（来自人类反馈的强化学习）？",
    options: [
      "A) Training with labeled data only",
      "B) A type of data augmentation",
      "C) A technique where human preferences guide model training through a reward model and reinforcement learning",
      "D) A pre-training objective"
    ],
    optionsChinese: [
      "A) 仅使用标注数据训练",
      "B) 一种数据增强",
      "C) 通过奖励模型和强化学习让人类偏好引导模型训练的技术",
      "D) 一种预训练目标"
    ],
    answer: 2,
    explanation: "RLHF involves three steps: (1) fine-tune a language model with supervised learning, (2) train a reward model from human preference rankings, (3) use PPO (reinforcement learning) to optimize the LM against the reward model. This aligns models like ChatGPT with human values and preferences.",
    explanationChinese: "RLHF涉及三个步骤：(1)用监督学习微调语言模型，(2)从人类偏好排名训练奖励模型，(3)使用PPO（强化学习）针对奖励模型优化语言模型。这使ChatGPT等模型与人类价值观和偏好保持一致。",
    diagram: "",
    terms: ["gpt", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 182,
    q: "What is knowledge distillation for language models?",
    qChinese: "语言模型的知识蒸馏是什么？",
    options: [
      "A) Extracting knowledge from text",
      "B) Adding more training data",
      "C) Removing knowledge from the model",
      "D) Training a smaller student model to mimic the behavior of a larger teacher model"
    ],
    optionsChinese: [
      "A) 从文本中提取知识",
      "B) 添加更多训练数据",
      "C) 从模型中删除知识",
      "D) 训练一个较小的学生模型来模仿较大教师模型的行为"
    ],
    answer: 3,
    explanation: "Knowledge distillation trains a compact student model to match the soft probability distributions (logits) of a larger teacher model. DistilBERT, for example, is 60% smaller than BERT but retains 97% of its performance. This enables deployment of powerful NLP on resource-constrained devices.",
    explanationChinese: "知识蒸馏训练一个紧凑的学生模型来匹配较大教师模型的软概率分布（logits）。例如，DistilBERT比BERT小60%但保留了97%的性能。这使得在资源受限的设备上部署强大的NLP成为可能。",
    diagram: "",
    terms: ["bert", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 183,
    q: "What is the difference between feature extraction and fine-tuning approaches for using BERT?",
    qChinese: "使用BERT的特征提取和微调方法之间有什么区别？",
    options: [
      "A) They are identical",
      "B) Fine-tuning does not use BERT",
      "C) Feature extraction is always better",
      "D) Feature extraction freezes BERT and uses its outputs as fixed features; fine-tuning updates all BERT parameters for the task"
    ],
    optionsChinese: [
      "A) 它们是相同的",
      "B) 微调不使用BERT",
      "C) 特征提取总是更好",
      "D) 特征提取冻结BERT并将其输出用作固定特征；微调为任务更新所有BERT参数"
    ],
    answer: 3,
    explanation: "Feature extraction treats BERT as a fixed feature extractor: pass text through frozen BERT, take the outputs, and train a simple classifier on top. Fine-tuning updates BERT's weights too. Fine-tuning usually performs better but is more expensive. Feature extraction is faster and useful when compute is limited.",
    explanationChinese: "特征提取将BERT作为固定的特征提取器：通过冻结的BERT传递文本，获取输出，并在其上训练简单分类器。微调也更新BERT的权重。微调通常表现更好但成本更高。特征提取更快，在计算有限时有用。",
    diagram: "",
    terms: ["bert", "text_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 184,
    q: "What is the scaling law for language models?",
    qChinese: "语言模型的缩放定律是什么？",
    options: [
      "A) Model performance improves predictably as a power law of model size, data size, and compute",
      "B) Bigger models always overfit",
      "C) Smaller models are always better",
      "D) Performance is random with respect to scale"
    ],
    optionsChinese: [
      "A) 模型性能随模型大小、数据大小和计算量以幂律可预测地改善",
      "B) 更大的模型总是过拟合",
      "C) 更小的模型总是更好",
      "D) 性能与规模无关"
    ],
    answer: 0,
    explanation: "Kaplan et al. (2020) showed that language model loss follows power-law relationships with model parameters N, dataset size D, and compute C. This means performance improvements are smooth and predictable, enabling researchers to estimate the benefit of scaling before committing expensive resources.",
    explanationChinese: "Kaplan等人（2020）表明语言模型损失与模型参数N、数据集大小D和计算量C遵循幂律关系。这意味着性能改进是平滑且可预测的，使研究人员能够在投入昂贵资源之前估计缩放的收益。",
    diagram: "",
    terms: ["gpt", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 185,
    q: "What is instruction tuning for language models?",
    qChinese: "语言模型的指令调优是什么？",
    options: [
      "A) Tuning hyperparameters manually",
      "B) Tuning the tokenizer",
      "C) Writing instructions for users",
      "D) Fine-tuning a model on a diverse set of tasks described as natural language instructions to improve instruction following"
    ],
    optionsChinese: [
      "A) 手动调整超参数",
      "B) 调整分词器",
      "C) 为用户编写说明",
      "D) 在描述为自然语言指令的多样化任务集上微调模型，以改善指令遵循能力"
    ],
    answer: 3,
    explanation: "Instruction tuning (FLAN, InstructGPT) trains models on datasets of (instruction, input, output) triplets across many tasks. This teaches the model to follow diverse instructions. It dramatically improves zero-shot performance and makes models more helpful, replacing task-specific fine-tuning with general instruction following.",
    explanationChinese: "指令调优（FLAN、InstructGPT）在跨多个任务的（指令、输入、输出）三元组数据集上训练模型。这教会模型遵循各种指令。它大幅改善零样本性能并使模型更有帮助，用通用指令遵循替代特定任务的微调。",
    diagram: "",
    terms: ["gpt", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 186,
    q: "What are adapter layers in the context of efficient fine-tuning?",
    qChinese: "在高效微调的语境中，适配器层是什么？",
    options: [
      "A) Small trainable modules inserted between frozen transformer layers that adapt the model to new tasks",
      "B) Additional pre-training layers",
      "C) Layers that connect different models",
      "D) Input preprocessing layers"
    ],
    optionsChinese: [
      "A) 插入在冻结的transformer层之间的小型可训练模块，使模型适应新任务",
      "B) 额外的预训练层",
      "C) 连接不同模型的层",
      "D) 输入预处理层"
    ],
    answer: 0,
    explanation: "Adapter layers are small bottleneck modules (down-project, nonlinearity, up-project) inserted between transformer sublayers. Only adapter parameters are trained while the original model stays frozen. This achieves near full fine-tuning performance with ~2-4% additional parameters per task, enabling multi-task model sharing.",
    explanationChinese: "适配器层是插入在transformer子层之间的小型瓶颈模块（降维投影、非线性、升维投影）。只训练适配器参数，原始模型保持冻结。这以每个任务约2-4%的额外参数实现接近完全微调的性能，使多任务模型共享成为可能。",
    diagram: "",
    terms: ["bert", "gpt"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 187,
    q: "What is the tokenizer mismatch problem in NLP?",
    qChinese: "NLP中的分词器不匹配问题是什么？",
    options: [
      "A) Using different languages",
      "B) Tokenizer being too slow",
      "C) Using too many tokens",
      "D) When a pre-trained model's tokenizer splits words differently from what the downstream task expects"
    ],
    optionsChinese: [
      "A) 使用不同语言",
      "B) 分词器太慢",
      "C) 使用太多标记",
      "D) 当预训练模型的分词器以与下游任务期望不同的方式分割词时"
    ],
    answer: 3,
    explanation: "Each pre-trained model comes with its specific tokenizer (BERT uses WordPiece, GPT-2 uses BPE). When applying to downstream tasks, you must use the same tokenizer. For tasks like NER where labels are per-word, subword tokens must be realigned. Mixing tokenizers with wrong models produces garbage results.",
    explanationChinese: "每个预训练模型都有其特定的分词器（BERT使用WordPiece，GPT-2使用BPE）。应用于下游任务时，必须使用相同的分词器。对于NER等标签按词的任务，子词标记必须重新对齐。将分词器与错误的模型混合使用会产生无用的结果。",
    diagram: "",
    terms: ["bert", "tokenization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 188,
    q: "What is DeBERTa's key innovation?",
    qChinese: "DeBERTa的关键创新是什么？",
    options: [
      "A) Disentangled attention that separately encodes content and position, combining them in the attention mechanism",
      "B) Using a completely different architecture",
      "C) Using fewer layers",
      "D) Not using attention at all"
    ],
    optionsChinese: [
      "A) 分离注意力，分别编码内容和位置，在注意力机制中将它们组合",
      "B) 使用完全不同的架构",
      "C) 使用更少的层",
      "D) 完全不使用注意力"
    ],
    answer: 0,
    explanation: "DeBERTa (Decoding-enhanced BERT with disentangled Attention) represents each word with two vectors: one for content and one for position. Attention is computed using content-to-content, content-to-position, and position-to-content components. This separation improves the model's ability to capture syntactic and semantic relationships.",
    explanationChinese: "DeBERTa（具有分离注意力的解码增强BERT）用两个向量表示每个词：一个用于内容，一个用于位置。注意力使用内容到内容、内容到位置和位置到内容组件计算。这种分离改善了模型捕捉句法和语义关系的能力。",
    diagram: "",
    terms: ["bert", "attention_nlp"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 189,
    q: "What is the difference between encoder-decoder pre-training (T5) and decoder-only pre-training (GPT)?",
    qChinese: "编码器-解码器预训练（T5）和仅解码器预训练（GPT）之间有什么区别？",
    options: [
      "A) They use the same objective",
      "B) GPT uses bidirectional attention",
      "C) T5 uses span corruption where spans are masked and the decoder generates them; GPT uses next-token prediction in a left-to-right manner",
      "D) T5 cannot generate text"
    ],
    optionsChinese: [
      "A) 它们使用相同的目标",
      "B) GPT使用双向注意力",
      "C) T5使用跨度破坏，遮蔽跨度并由解码器生成；GPT使用从左到右的下一标记预测",
      "D) T5不能生成文本"
    ],
    answer: 2,
    explanation: "T5's encoder sees the corrupted input bidirectionally, while the decoder generates the missing spans. GPT only processes text left-to-right. T5's approach is better for tasks needing input understanding (translation, summarization), while GPT's approach is more natural for open-ended text generation.",
    explanationChinese: "T5的编码器双向查看被破坏的输入，而解码器生成缺失的跨度。GPT只从左到右处理文本。T5的方法更适合需要输入理解的任务（翻译、摘要），而GPT的方法更自然地适合开放式文本生成。",
    diagram: "",
    terms: ["gpt", "bert", "sequence_to_sequence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 190,
    q: "What is in-context learning?",
    qChinese: "什么是上下文学习？",
    options: [
      "A) Learning from textbooks",
      "B) A large language model's ability to learn new tasks from examples provided in the prompt without parameter updates",
      "C) Training on contextual data",
      "D) Learning word contexts"
    ],
    optionsChinese: [
      "A) 从教科书学习",
      "B) 大语言模型从提示中提供的示例学习新任务的能力，无需参数更新",
      "C) 在上下文数据上训练",
      "D) 学习词上下文"
    ],
    answer: 1,
    explanation: "In-context learning is an emergent ability of large LMs where providing examples in the prompt enables the model to perform the task without weight updates. The model uses its attention mechanism to identify the pattern in examples and apply it. This ability typically appears at large scale (>1B parameters).",
    explanationChinese: "上下文学习是大型语言模型的涌现能力，在提示中提供示例使模型能够在不更新权重的情况下执行任务。模型使用其注意力机制识别示例中的模式并应用它。这种能力通常在大规模（>10亿参数）时出现。",
    diagram: "",
    terms: ["gpt", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 191,
    q: "What is the XLNet model?",
    qChinese: "什么是XLNet模型？",
    options: [
      "A) A model for image processing",
      "B) A small language model",
      "C) A generalized autoregressive model that uses permutation language modeling to capture bidirectional context",
      "D) A translation-only model"
    ],
    optionsChinese: [
      "A) 图像处理模型",
      "B) 小型语言模型",
      "C) 使用排列语言建模来捕捉双向上下文的广义自回归模型",
      "D) 仅翻译模型"
    ],
    answer: 2,
    explanation: "XLNet addresses BERT's limitation of training-inference mismatch from [MASK] tokens. It uses permutation language modeling: it trains autoregressively but over all possible token orderings, effectively seeing bidirectional context. It also uses Transformer-XL's segment recurrence for longer contexts.",
    explanationChinese: "XLNet解决了BERT因[MASK]标记造成的训练-推理不匹配限制。它使用排列语言建模：自回归训练但遍历所有可能的标记排列，有效地看到双向上下文。它还使用Transformer-XL的段递归来处理更长的上下文。",
    diagram: "",
    terms: ["bert", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 192,
    q: "What is model quantization for deploying NLP models?",
    qChinese: "部署NLP模型的模型量化是什么？",
    options: [
      "A) Making the model larger",
      "B) Reducing the precision of model weights from 32-bit to 8-bit or 4-bit to decrease memory and improve inference speed",
      "C) Adding more training data",
      "D) Increasing the number of layers"
    ],
    optionsChinese: [
      "A) 使模型更大",
      "B) 将模型权重精度从32位降低到8位或4位，以减少内存并提高推理速度",
      "C) 添加更多训练数据",
      "D) 增加层数"
    ],
    answer: 1,
    explanation: "Quantization converts model weights from FP32 to lower precision (INT8, INT4). This can reduce model size by 4-8x and speed up inference with minimal accuracy loss. Techniques include post-training quantization, quantization-aware training, and GPTQ. It enables running large LLMs on consumer hardware.",
    explanationChinese: "量化将模型权重从FP32转换为较低精度（INT8、INT4）。这可以将模型大小减少4-8倍，并以最小的准确性损失加速推理。技术包括训练后量化、量化感知训练和GPTQ。它使在消费级硬件上运行大型LLM成为可能。",
    diagram: "",
    terms: ["bert", "gpt"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 193,
    q: "What is the concept of emergent abilities in large language models?",
    qChinese: "大语言模型中的涌现能力概念是什么？",
    options: [
      "A) Abilities that decrease with scale",
      "B) Abilities added by engineers",
      "C) Abilities that appear suddenly when models reach a certain scale, not present in smaller models",
      "D) Abilities from the training data only"
    ],
    optionsChinese: [
      "A) 随规模减少的能力",
      "B) 工程师添加的能力",
      "C) 当模型达到一定规模时突然出现的能力，在较小模型中不存在",
      "D) 仅来自训练数据的能力"
    ],
    answer: 2,
    explanation: "Emergent abilities are capabilities that appear in large LMs but not small ones, showing a sharp transition at a critical scale. Examples include chain-of-thought reasoning, multi-step arithmetic, and complex instruction following. This phenomenon suggests that scaling unlocks qualitatively new capabilities.",
    explanationChinese: "涌现能力是出现在大型语言模型中但不在小型模型中的能力，在临界规模处显示急剧转变。例子包括思维链推理、多步算术和复杂指令遵循。这一现象表明缩放可以解锁质的新能力。",
    diagram: "",
    terms: ["gpt", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 194,
    q: "What is chain-of-thought prompting?",
    qChinese: "什么是思维链提示？",
    options: [
      "A) Linking multiple prompts together",
      "B) Using the model in a chain of tasks",
      "C) Prompting the model to show step-by-step reasoning before giving a final answer, improving complex reasoning performance",
      "D) Providing a chain of documents"
    ],
    optionsChinese: [
      "A) 将多个提示链接在一起",
      "B) 在任务链中使用模型",
      "C) 提示模型在给出最终答案之前展示逐步推理，改善复杂推理性能",
      "D) 提供文档链"
    ],
    answer: 2,
    explanation: "Chain-of-thought prompting (Wei et al., 2022) adds 'Let's think step by step' or provides reasoning examples in the prompt. This guides the model to decompose complex problems into intermediate steps. It significantly improves performance on math, logic, and multi-step reasoning tasks in large LLMs.",
    explanationChinese: "思维链提示（Wei等人，2022）在提示中添加'让我们一步步思考'或提供推理示例。这引导模型将复杂问题分解为中间步骤。它显著改善了大型LLM在数学、逻辑和多步推理任务上的性能。",
    diagram: "",
    terms: ["gpt", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 195,
    q: "What is Retrieval-Augmented Generation (RAG)?",
    qChinese: "什么是检索增强生成（RAG）？",
    options: [
      "A) Training a model on retrieval data only",
      "B) A model that only retrieves, never generates",
      "C) Generating retrieval queries",
      "D) Combining a retrieval system that fetches relevant documents with a language model that generates answers based on retrieved context"
    ],
    optionsChinese: [
      "A) 仅在检索数据上训练模型",
      "B) 只检索不生成的模型",
      "C) 生成检索查询",
      "D) 将检索相关文档的检索系统与基于检索上下文生成答案的语言模型结合"
    ],
    answer: 3,
    explanation: "RAG addresses LLM knowledge limitations by retrieving relevant documents from an external knowledge base and including them in the model's context. This reduces hallucinations, allows real-time knowledge updates without retraining, and grounds responses in verifiable sources. It is widely used in enterprise NLP applications.",
    explanationChinese: "RAG通过从外部知识库检索相关文档并将其包含在模型的上下文中来解决LLM知识限制。这减少了幻觉，允许在不重新训练的情况下进行实时知识更新，并将响应建立在可验证的来源上。它在企业NLP应用中广泛使用。",
    diagram: "",
    terms: ["gpt", "bert", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 196,
    q: "What is Named Entity Recognition (NER)?",
    qChinese: "什么是命名实体识别（NER）？",
    options: [
      "A) Classifying entire documents",
      "B) Recognizing speech from audio",
      "C) Naming new entities in a database",
      "D) Identifying and classifying named entities in text into categories like person, organization, location, and date"
    ],
    optionsChinese: [
      "A) 分类整个文档",
      "B) 从音频识别语音",
      "C) 在数据库中命名新实体",
      "D) 识别文本中的命名实体并将其分类为人物、组织、地点和日期等类别"
    ],
    answer: 3,
    explanation: "NER identifies spans of text that refer to real-world entities and classifies them into predefined categories: person (PER), organization (ORG), location (LOC), date, money, etc. In 'Apple Inc. was founded by Steve Jobs in Cupertino', NER identifies Apple Inc.(ORG), Steve Jobs(PER), Cupertino(LOC).",
    explanationChinese: "NER识别引用真实世界实体的文本片段并将其分类为预定义类别：人物(PER)、组织(ORG)、地点(LOC)、日期、货币等。在'Apple Inc. was founded by Steve Jobs in Cupertino'中，NER识别Apple Inc.(ORG)、Steve Jobs(PER)、Cupertino(LOC)。",
    diagram: "",
    terms: ["named_entity_recognition", "pos_tagging"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 197,
    q: "What is the BIO tagging scheme in NER?",
    qChinese: "NER中的BIO标注方案是什么？",
    options: [
      "A) A biological classification system",
      "B) A sentiment labeling scheme",
      "C) A binary tagging system",
      "D) A scheme where B marks the beginning of an entity, I marks inside continuation, and O marks tokens outside any entity"
    ],
    optionsChinese: [
      "A) 生物分类系统",
      "B) 情感标注方案",
      "C) 二进制标注系统",
      "D) B标记实体开始、I标记内部延续、O标记不属于任何实体的标记的方案"
    ],
    answer: 3,
    explanation: "BIO tagging converts NER into a sequence labeling task. B-PER starts a person entity, I-PER continues it, and O means outside any entity. For 'Steve Jobs works at Apple': Steve→B-PER, Jobs→I-PER, works→O, at→O, Apple→B-ORG. BIOES extends this with S(single) and E(end).",
    explanationChinese: "BIO标注将NER转换为序列标注任务。B-PER开始一个人物实体，I-PER继续它，O表示不在任何实体中。对于'Steve Jobs works at Apple'：Steve→B-PER，Jobs→I-PER，works→O，at→O，Apple→B-ORG。BIOES用S（单个）和E（结束）扩展。",
    diagram: "",
    terms: ["named_entity_recognition", "pos_tagging"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 198,
    q: "What is Part-of-Speech (POS) tagging?",
    qChinese: "什么是词性（POS）标注？",
    options: [
      "A) Translating words to their part in a sentence",
      "B) Labeling sentences as questions or statements",
      "C) Tagging positive and negative words",
      "D) Assigning grammatical categories (noun, verb, adjective, etc.) to each word in a sentence"
    ],
    optionsChinese: [
      "A) 将词翻译为其在句子中的部分",
      "B) 将句子标记为问句或陈述句",
      "C) 标注正面和负面词",
      "D) 为句子中的每个词分配语法类别（名词、动词、形容词等）"
    ],
    answer: 3,
    explanation: "POS tagging assigns grammatical tags to each word: noun (NN), verb (VB), adjective (JJ), adverb (RB), etc. In 'The quick brown fox jumps': The→DT, quick→JJ, brown→JJ, fox→NN, jumps→VBZ. POS tags are essential for syntactic parsing, NER, and understanding sentence structure.",
    explanationChinese: "词性标注为每个词分配语法标签：名词(NN)、动词(VB)、形容词(JJ)、副词(RB)等。在'The quick brown fox jumps'中：The→DT，quick→JJ，brown→JJ，fox→NN，jumps→VBZ。词性标签对句法分析、NER和理解句子结构至关重要。",
    diagram: "",
    terms: ["pos_tagging", "named_entity_recognition"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 199,
    q: "What is the Penn Treebank POS tag set?",
    qChinese: "什么是Penn Treebank词性标签集？",
    options: [
      "A) A widely used set of approximately 36 POS tags for English including fine-grained verb and noun distinctions",
      "B) A set of 5 tags",
      "C) A tag set for Chinese only",
      "D) A set of NER labels"
    ],
    optionsChinese: [
      "A) 广泛使用的约36个英语词性标签集，包括细粒度的动词和名词区分",
      "B) 5个标签的集合",
      "C) 仅用于中文的标签集",
      "D) NER标签集"
    ],
    answer: 0,
    explanation: "The Penn Treebank tagset includes about 36 tags such as NN (singular noun), NNS (plural noun), VB (base verb), VBD (past tense), VBG (gerund), JJ (adjective), RB (adverb), DT (determiner), IN (preposition). It is the most commonly used POS tagset for English NLP.",
    explanationChinese: "Penn Treebank标签集包含约36个标签，如NN（单数名词）、NNS（复数名词）、VB（基本动词）、VBD（过去式）、VBG（动名词）、JJ（形容词）、RB（副词）、DT（限定词）、IN（介词）。它是英语NLP中最常用的词性标签集。",
    diagram: "",
    terms: ["pos_tagging", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 200,
    q: "How does BERT perform NER?",
    qChinese: "BERT如何执行NER？",
    options: [
      "A) By classifying the entire document",
      "B) By adding a token classification layer on top that predicts a BIO-NER label for each subword token",
      "C) By using only the [CLS] token",
      "D) By translating entities"
    ],
    optionsChinese: [
      "A) 通过分类整个文档",
      "B) 在顶部添加标记分类层，为每个子词标记预测BIO-NER标签",
      "C) 仅使用[CLS]标记",
      "D) 通过翻译实体"
    ],
    answer: 1,
    explanation: "For NER, BERT's output for each token is fed through a linear classification layer that predicts BIO-NER labels. Since BERT uses subword tokenization, only the first subword of each word is used for prediction, or labels are propagated. Fine-tuned BERT achieves state-of-the-art NER performance on most benchmarks.",
    explanationChinese: "对于NER，BERT每个标记的输出通过线性分类层预测BIO-NER标签。由于BERT使用子词分词，只有每个词的第一个子词用于预测，或者标签被传播。微调后的BERT在大多数基准测试上实现了最先进的NER性能。",
    diagram: "",
    terms: ["named_entity_recognition", "bert"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 201,
    q: "What is dependency parsing?",
    qChinese: "什么是依存句法分析？",
    options: [
      "A) Parsing mathematical dependencies",
      "B) Analyzing the grammatical structure of a sentence by identifying directed relationships between words",
      "C) Parsing file dependencies",
      "D) Counting word dependencies"
    ],
    optionsChinese: [
      "A) 解析数学依赖",
      "B) 通过识别词之间的有向关系来分析句子的语法结构",
      "C) 解析文件依赖",
      "D) 计算词依赖"
    ],
    answer: 1,
    explanation: "Dependency parsing creates a tree structure where each word is connected to its head (governor) with a labeled relation (nsubj, dobj, amod, etc.). In 'The cat sat on the mat', 'sat' is the root, 'cat' is nsubj of 'sat', and 'mat' is pobj of 'on'. It captures syntactic relationships directly.",
    explanationChinese: "依存句法分析创建一个树结构，每个词通过标记关系（nsubj、dobj、amod等）连接到其头词（支配词）。在'The cat sat on the mat'中，'sat'是根，'cat'是'sat'的nsubj，'mat'是'on'的pobj。它直接捕捉句法关系。",
    diagram: "",
    terms: ["dependency_parsing", "pos_tagging"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 202,
    q: "What is the difference between rule-based and statistical NER?",
    qChinese: "基于规则和统计的NER之间有什么区别？",
    options: [
      "A) They are the same approach",
      "B) Rule-based NER always performs better",
      "C) Statistical NER requires no data",
      "D) Rule-based uses handcrafted patterns and gazetteers; statistical uses machine learning from annotated data"
    ],
    optionsChinese: [
      "A) 它们是相同的方法",
      "B) 基于规则的NER总是表现更好",
      "C) 统计NER不需要数据",
      "D) 基于规则使用手工模式和地名辞典；统计使用从标注数据的机器学习"
    ],
    answer: 3,
    explanation: "Rule-based NER uses manually defined patterns (e.g., capitalized words after 'Mr.'), gazetteers (entity lists), and regular expressions. Statistical NER uses ML models (CRF, BiLSTM-CRF, BERT) trained on annotated corpora. Statistical approaches generalize better and adapt to new domains with appropriate training data.",
    explanationChinese: "基于规则的NER使用手动定义的模式（如'Mr.'后的大写词）、地名辞典（实体列表）和正则表达式。统计NER使用在标注语料库上训练的ML模型（CRF、BiLSTM-CRF、BERT）。统计方法泛化更好，并可以使用适当的训练数据适应新领域。",
    diagram: "",
    terms: ["named_entity_recognition", "text_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 203,
    q: "What features help in POS tagging?",
    qChinese: "什么特征有助于词性标注？",
    options: [
      "A) Only the word itself",
      "B) Only word frequency",
      "C) Only the sentence length",
      "D) The word, its suffixes, prefixes, capitalization, surrounding words, and previous POS tags"
    ],
    optionsChinese: [
      "A) 仅单词本身",
      "B) 仅词频",
      "C) 仅句子长度",
      "D) 单词、后缀、前缀、大小写、周围词和先前的词性标签"
    ],
    answer: 3,
    explanation: "POS tagging uses diverse features: the word itself, suffixes (-ing suggests VBG, -ly suggests RB), prefixes (un- suggests JJ), capitalization (proper nouns), surrounding words (context), and previous POS tags (tag bigrams). Neural taggers like BERT learn these features automatically from data.",
    explanationChinese: "词性标注使用多种特征：词本身、后缀（-ing暗示VBG，-ly暗示RB）、前缀（un-暗示JJ）、大小写（专有名词）、周围词（上下文）和先前的词性标签（标签二元组）。像BERT这样的神经标注器从数据中自动学习这些特征。",
    diagram: "",
    terms: ["pos_tagging", "named_entity_recognition"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 204,
    q: "What is the Viterbi algorithm used for in sequence labeling?",
    qChinese: "维特比算法在序列标注中用于什么？",
    options: [
      "A) Training the model",
      "B) Finding the most probable sequence of labels efficiently using dynamic programming",
      "C) Computing word embeddings",
      "D) Tokenizing text"
    ],
    optionsChinese: [
      "A) 训练模型",
      "B) 使用动态规划高效找到最可能的标签序列",
      "C) 计算词嵌入",
      "D) 分词"
    ],
    answer: 1,
    explanation: "The Viterbi algorithm finds the globally optimal label sequence by using dynamic programming. Instead of evaluating all possible tag sequences (exponential), it considers the best path to each state at each step (polynomial time). It is used in HMMs, CRFs, and BiLSTM-CRF models for NER and POS tagging.",
    explanationChinese: "维特比算法使用动态规划找到全局最优标签序列。它不是评估所有可能的标签序列（指数级），而是在每步考虑到每个状态的最佳路径（多项式时间）。它用于HMM、CRF和BiLSTM-CRF模型的NER和词性标注。",
    diagram: "",
    terms: ["named_entity_recognition", "pos_tagging"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 205,
    q: "What is constituency parsing and how does it differ from dependency parsing?",
    qChinese: "成分句法分析是什么，它与依存句法分析有何不同？",
    options: [
      "A) They are identical",
      "B) Dependency parsing uses phrases",
      "C) Constituency parsing is always better",
      "D) Constituency parsing groups words into nested phrases (NP, VP); dependency parsing shows head-dependent relations between individual words"
    ],
    optionsChinese: [
      "A) 它们是相同的",
      "B) 依存句法分析使用短语",
      "C) 成分句法分析总是更好",
      "D) 成分句法分析将词分组为嵌套短语（NP、VP）；依存句法分析显示单个词之间的核心-从属关系"
    ],
    answer: 3,
    explanation: "Constituency parsing produces a tree with phrase-level nodes: S → NP VP, NP → DT NN. It shows how words group into phrases. Dependency parsing shows direct word-to-word relations without phrase nodes. Dependency parsing is more popular for downstream NLP tasks due to its simplicity.",
    explanationChinese: "成分句法分析产生具有短语级节点的树：S → NP VP，NP → DT NN。它显示词如何分组为短语。依存句法分析显示直接的词对词关系，没有短语节点。依存句法分析由于其简单性在下游NLP任务中更受欢迎。",
    diagram: "",
    terms: ["dependency_parsing", "pos_tagging"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 206,
    q: "What is a gazetteer in NER?",
    qChinese: "NER中的地名辞典是什么？",
    options: [
      "A) A machine learning model",
      "B) A type of word embedding",
      "C) A pre-compiled list of known entity names used as features or for lookup-based entity identification",
      "D) A tokenization method"
    ],
    optionsChinese: [
      "A) 机器学习模型",
      "B) 一种词嵌入",
      "C) 用作特征或基于查找的实体识别的预编译已知实体名称列表",
      "D) 一种分词方法"
    ],
    answer: 2,
    explanation: "A gazetteer is a dictionary or list of known entities: country names, city names, person names, organization names, etc. In NER, gazetteer membership is used as a feature (e.g., 'is this word in the cities list?'). While helpful, gazetteers cannot handle novel entities and require maintenance.",
    explanationChinese: "地名辞典是已知实体的词典或列表：国名、城市名、人名、组织名等。在NER中，地名辞典成员资格用作特征（如'这个词在城市列表中吗？'）。虽然有帮助，但地名辞典无法处理新实体且需要维护。",
    diagram: "",
    terms: ["named_entity_recognition", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 207,
    q: "What is the CoNLL-2003 dataset?",
    qChinese: "什么是CoNLL-2003数据集？",
    options: [
      "A) A machine translation dataset",
      "B) A standard benchmark dataset for NER with annotations for person, organization, location, and miscellaneous entities",
      "C) A sentiment analysis dataset",
      "D) A question answering dataset"
    ],
    optionsChinese: [
      "A) 机器翻译数据集",
      "B) 带有人物、组织、地点和其他实体标注的NER标准基准数据集",
      "C) 情感分析数据集",
      "D) 问答数据集"
    ],
    answer: 1,
    explanation: "CoNLL-2003 is the most widely used NER benchmark, containing Reuters news text annotated with four entity types: PER, ORG, LOC, MISC. It uses BIO tagging format. The English portion has ~300K tokens. NER models are routinely evaluated on this dataset, with current state-of-the-art F1 scores above 93%.",
    explanationChinese: "CoNLL-2003是最广泛使用的NER基准，包含标注有四种实体类型的路透社新闻文本：PER、ORG、LOC、MISC。它使用BIO标注格式。英语部分有约30万标记。NER模型定期在此数据集上评估，当前最先进的F1分数超过93%。",
    diagram: "",
    terms: ["named_entity_recognition", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 208,
    q: "What is the challenge of nested named entities?",
    qChinese: "嵌套命名实体的挑战是什么？",
    options: [
      "A) Entities are always flat",
      "B) All NER systems handle nesting already",
      "C) Nested entities are rare",
      "D) Some entities contain other entities within them, which standard BIO tagging cannot represent"
    ],
    optionsChinese: [
      "A) 实体总是平坦的",
      "B) 所有NER系统已经处理嵌套",
      "C) 嵌套实体很少见",
      "D) 某些实体内部包含其他实体，标准BIO标注无法表示"
    ],
    answer: 3,
    explanation: "In 'Bank of America', the full span is ORG but 'America' is LOC. Standard BIO can only assign one label per token. Nested NER approaches include: span-based methods that enumerate and classify spans, layered CRFs, and biaffine models that score all possible spans independently.",
    explanationChinese: "在'Bank of America'中，完整跨度是ORG但'America'是LOC。标准BIO只能为每个标记分配一个标签。嵌套NER方法包括：枚举和分类跨度的基于跨度的方法、分层CRF和独立评分所有可能跨度的双仿射模型。",
    diagram: "",
    terms: ["named_entity_recognition", "pos_tagging"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 209,
    q: "What is the Hidden Markov Model (HMM) for POS tagging?",
    qChinese: "用于词性标注的隐马尔可夫模型（HMM）是什么？",
    options: [
      "A) A deep learning model",
      "B) A generative probabilistic model that uses transition probabilities between tags and emission probabilities of words given tags",
      "C) A rule-based system",
      "D) A clustering algorithm"
    ],
    optionsChinese: [
      "A) 深度学习模型",
      "B) 使用标签之间的转移概率和给定标签的词发射概率的生成概率模型",
      "C) 基于规则的系统",
      "D) 聚类算法"
    ],
    answer: 1,
    explanation: "HMMs model POS tagging using two probability distributions: transition probabilities P(tag_t | tag_{t-1}) and emission probabilities P(word | tag). The Viterbi algorithm finds the optimal tag sequence. HMMs are simple and fast but assume limited context. They have been superseded by CRFs and neural models.",
    explanationChinese: "HMM使用两个概率分布建模词性标注：转移概率P(tag_t | tag_{t-1})和发射概率P(word | tag)。维特比算法找到最优标签序列。HMM简单快速但假设有限的上下文。它们已被CRF和神经模型取代。",
    diagram: "",
    terms: ["pos_tagging", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 210,
    q: "What is the relationship between POS tagging and NER?",
    qChinese: "词性标注和NER之间的关系是什么？",
    options: [
      "A) They are completely unrelated",
      "B) POS tags provide useful features for NER, and both are sequence labeling tasks that share similar architectures",
      "C) NER replaces POS tagging",
      "D) POS tagging is a subtask of NER"
    ],
    optionsChinese: [
      "A) 它们完全无关",
      "B) 词性标签为NER提供有用特征，两者都是共享类似架构的序列标注任务",
      "C) NER取代词性标注",
      "D) 词性标注是NER的子任务"
    ],
    answer: 1,
    explanation: "Both POS tagging and NER assign labels to each token in a sequence. POS tags serve as useful features for NER since named entities tend to be nouns or proper nouns. Both use similar architectures (BiLSTM-CRF, BERT). Multi-task learning frameworks can train both tasks jointly, improving both.",
    explanationChinese: "词性标注和NER都为序列中的每个标记分配标签。词性标签作为NER的有用特征，因为命名实体倾向于是名词或专有名词。两者使用类似的架构（BiLSTM-CRF、BERT）。多任务学习框架可以联合训练两个任务，两者都得到改善。",
    diagram: "",
    terms: ["pos_tagging", "named_entity_recognition"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 211,
    q: "What is entity linking in NER pipelines?",
    qChinese: "NER流程中的实体链接是什么？",
    options: [
      "A) Linking entities to a database",
      "B) Mapping recognized entity mentions to their corresponding entries in a knowledge base like Wikipedia",
      "C) Linking sentences together",
      "D) Creating entity embeddings"
    ],
    optionsChinese: [
      "A) 将实体链接到数据库",
      "B) 将识别的实体提及映射到知识库（如维基百科）中的对应条目",
      "C) 将句子链接在一起",
      "D) 创建实体嵌入"
    ],
    answer: 1,
    explanation: "Entity linking (or entity disambiguation) resolves recognized entity mentions to unique entries in a knowledge base. For example, 'Apple' could refer to Apple Inc. or the fruit. Entity linking uses context to determine the correct referent and connects it to the knowledge base entry.",
    explanationChinese: "实体链接（或实体消歧）将识别的实体提及解析到知识库中的唯一条目。例如，'Apple'可能指Apple Inc.或水果。实体链接使用上下文确定正确的所指对象，并将其连接到知识库条目。",
    diagram: "",
    terms: ["named_entity_recognition", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 212,
    q: "What is the role of context in POS tagging ambiguity resolution?",
    qChinese: "上下文在词性标注歧义消解中的作用是什么？",
    options: [
      "A) Context is not needed for POS tagging",
      "B) All words have exactly one POS tag",
      "C) Context only matters for named entities",
      "D) Many words have multiple POS tags and context determines the correct one, e.g., 'run' can be a noun or verb"
    ],
    optionsChinese: [
      "A) 词性标注不需要上下文",
      "B) 所有词恰好有一个词性标签",
      "C) 上下文仅对命名实体重要",
      "D) 许多词有多个词性标签，上下文确定正确的标签，如'run'可以是名词或动词"
    ],
    answer: 3,
    explanation: "Many English words are ambiguous: 'book' (NN/VB), 'run' (NN/VB), 'light' (NN/JJ/VB). In 'I book a flight', 'book' is VB; in 'I read a book', it is NN. Context from surrounding words and tags is essential for disambiguation. Neural models like BERT handle this through contextual embeddings.",
    explanationChinese: "许多英语词是歧义的：'book'(NN/VB)、'run'(NN/VB)、'light'(NN/JJ/VB)。在'I book a flight'中，'book'是VB；在'I read a book'中，它是NN。来自周围词和标签的上下文对于消歧至关重要。像BERT这样的神经模型通过上下文嵌入处理这一点。",
    diagram: "",
    terms: ["pos_tagging", "bert"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 213,
    q: "What is the BIOES tagging scheme?",
    qChinese: "什么是BIOES标注方案？",
    options: [
      "A) An extended scheme adding S (single-token entity) and E (end of entity) tags for more precise boundary marking",
      "B) A simplified version of BIO",
      "C) A scheme with only two tags",
      "D) A scheme for sentiment analysis"
    ],
    optionsChinese: [
      "A) 增加S（单标记实体）和E（实体结束）标签以更精确地标记边界的扩展方案",
      "B) BIO的简化版本",
      "C) 仅有两个标签的方案",
      "D) 用于情感分析的方案"
    ],
    answer: 0,
    explanation: "BIOES extends BIO with S (single-token entity) and E (end of multi-token entity). For 'Steve Jobs at Apple': Steve→B-PER, Jobs→E-PER, at→O, Apple→S-ORG. This provides more precise boundary information and empirically improves NER performance, especially for multi-token entities.",
    explanationChinese: "BIOES用S（单标记实体）和E（多标记实体结束）扩展了BIO。对于'Steve Jobs at Apple'：Steve→B-PER，Jobs→E-PER，at→O，Apple→S-ORG。这提供了更精确的边界信息，并且经验上改善了NER性能，特别是对于多标记实体。",
    diagram: "",
    terms: ["named_entity_recognition", "pos_tagging"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 214,
    q: "What is cross-domain NER?",
    qChinese: "什么是跨领域NER？",
    options: [
      "A) NER that only works in one domain",
      "B) Applying an NER model trained on one domain to a different domain, often requiring domain adaptation",
      "C) NER across multiple languages",
      "D) NER using multiple models"
    ],
    optionsChinese: [
      "A) 仅在一个领域工作的NER",
      "B) 将在一个领域训练的NER模型应用于不同领域，通常需要领域适应",
      "C) 跨多种语言的NER",
      "D) 使用多个模型的NER"
    ],
    answer: 1,
    explanation: "NER models trained on news may struggle with biomedical or social media text due to different entity types, writing styles, and vocabulary. Cross-domain NER addresses this through domain adaptation, few-shot learning, or pre-training on diverse data. BERT-based models transfer better across domains than traditional methods.",
    explanationChinese: "在新闻上训练的NER模型可能在生物医学或社交媒体文本上表现不佳，因为实体类型、写作风格和词汇不同。跨领域NER通过领域适应、少样本学习或在多样化数据上预训练来解决这个问题。基于BERT的模型比传统方法在跨领域上迁移得更好。",
    diagram: "",
    terms: ["named_entity_recognition", "bert"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 215,
    q: "What is universal POS tagging?",
    qChinese: "什么是通用词性标注？",
    options: [
      "A) POS tagging for the universe",
      "B) POS tagging only for English",
      "C) POS tagging with unlimited tags",
      "D) A cross-lingual POS tag set with 17 tags applicable to many languages"
    ],
    optionsChinese: [
      "A) 为宇宙进行词性标注",
      "B) 仅适用于英语的词性标注",
      "C) 具有无限标签的词性标注",
      "D) 适用于多种语言的17个标签的跨语言词性标签集"
    ],
    answer: 3,
    explanation: "The Universal Dependencies project defines 17 universal POS tags (NOUN, VERB, ADJ, ADV, PRON, DET, ADP, NUM, CONJ, PART, INTJ, SYM, PUNCT, X, AUX, SCONJ, PROPN) applicable across languages. This enables cross-lingual NLP research and multilingual model evaluation on a common standard.",
    explanationChinese: "通用依存项目定义了17个通用词性标签（NOUN、VERB、ADJ、ADV、PRON、DET、ADP、NUM、CONJ、PART、INTJ、SYM、PUNCT、X、AUX、SCONJ、PROPN），适用于多种语言。这使跨语言NLP研究和多语言模型评估有了共同标准。",
    diagram: "",
    terms: ["pos_tagging", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 216,
    q: "What is relation extraction and how does it relate to NER?",
    qChinese: "什么是关系提取，它与NER有何关系？",
    options: [
      "A) They are the same task",
      "B) Relation extraction replaces NER",
      "C) Relation extraction identifies semantic relationships between entities found by NER, such as 'works-for' or 'born-in'",
      "D) NER extracts relations"
    ],
    optionsChinese: [
      "A) 它们是相同的任务",
      "B) 关系提取替代NER",
      "C) 关系提取识别NER发现的实体之间的语义关系，如'works-for'或'born-in'",
      "D) NER提取关系"
    ],
    answer: 2,
    explanation: "Relation extraction identifies typed relationships between entities. After NER finds 'Steve Jobs' (PER) and 'Apple' (ORG), relation extraction determines 'Steve Jobs founded Apple' (founder-of relation). This is essential for knowledge graph construction. Joint NER and RE models perform both tasks simultaneously.",
    explanationChinese: "关系提取识别实体之间的类型化关系。在NER找到'Steve Jobs'(PER)和'Apple'(ORG)后，关系提取确定'Steve Jobs founded Apple'（创始人关系）。这对知识图谱构建至关重要。联合NER和RE模型同时执行两个任务。",
    diagram: "",
    terms: ["named_entity_recognition", "dependency_parsing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 217,
    q: "What is the span-based approach to NER?",
    qChinese: "基于跨度的NER方法是什么？",
    options: [
      "A) Tagging each token individually",
      "B) Using only single-word entities",
      "C) Enumerating all possible text spans and classifying each as an entity type or non-entity",
      "D) Processing sentences as single spans"
    ],
    optionsChinese: [
      "A) 单独标注每个标记",
      "B) 仅使用单词实体",
      "C) 枚举所有可能的文本跨度并将每个分类为实体类型或非实体",
      "D) 将句子作为单个跨度处理"
    ],
    answer: 2,
    explanation: "Span-based NER considers all possible contiguous spans up to a maximum length and classifies each as an entity type or none. This naturally handles nested entities and avoids label dependency issues of sequential tagging. The main challenge is the O(n²) number of spans for a sequence of length n.",
    explanationChinese: "基于跨度的NER考虑到最大长度的所有可能连续跨度，并将每个分类为实体类型或无。这自然地处理嵌套实体并避免顺序标注的标签依赖问题。主要挑战是长度为n的序列有O(n²)个跨度。",
    diagram: "",
    terms: ["named_entity_recognition", "bert"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 218,
    q: "What is the F1 score computation for NER evaluation?",
    qChinese: "NER评估的F1分数如何计算？",
    options: [
      "A) Token-level accuracy",
      "B) Character-level matching",
      "C) Entity-level exact match where both the boundary and type must be correct for a true positive",
      "D) Document-level classification accuracy"
    ],
    optionsChinese: [
      "A) 标记级准确率",
      "B) 字符级匹配",
      "C) 实体级精确匹配，边界和类型都必须正确才算真阳性",
      "D) 文档级分类准确率"
    ],
    answer: 2,
    explanation: "NER evaluation uses entity-level F1: a predicted entity is a true positive only if both its span boundaries AND entity type exactly match a gold entity. Partial matches count as both a false positive and a false negative. This strict metric reflects real-world usefulness of entity extraction.",
    explanationChinese: "NER评估使用实体级F1：预测的实体只有在其跨度边界和实体类型都与金标准实体完全匹配时才是真阳性。部分匹配同时计为假阳性和假阴性。这种严格的指标反映了实体提取的实际有用性。",
    diagram: "",
    terms: ["named_entity_recognition", "text_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 219,
    q: "What is chunking (shallow parsing)?",
    qChinese: "什么是组块分析（浅层解析）？",
    options: [
      "A) Identifying non-overlapping phrases (noun phrases, verb phrases) without building a full parse tree",
      "B) Full syntactic parsing",
      "C) Splitting text into equal chunks",
      "D) A tokenization method"
    ],
    optionsChinese: [
      "A) 识别不重叠的短语（名词短语、动词短语）而不构建完整的分析树",
      "B) 完整的句法分析",
      "C) 将文本分成等大的块",
      "D) 一种分词方法"
    ],
    answer: 0,
    explanation: "Chunking identifies flat, non-overlapping phrases: NP (noun phrase), VP (verb phrase), PP (prepositional phrase). In 'The quick fox / jumps over / the lazy dog', chunks are [NP: The quick fox] [VP: jumps] [PP: over] [NP: the lazy dog]. It is simpler than full parsing and uses BIO-style tagging.",
    explanationChinese: "组块分析识别平坦的、不重叠的短语：NP（名词短语）、VP（动词短语）、PP（介词短语）。在'The quick fox / jumps over / the lazy dog'中，块是[NP: The quick fox] [VP: jumps] [PP: over] [NP: the lazy dog]。它比完整解析更简单，使用BIO风格标注。",
    diagram: "",
    terms: ["pos_tagging", "dependency_parsing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 220,
    q: "How does multi-task learning benefit NER and POS tagging?",
    qChinese: "多任务学习如何使NER和词性标注受益？",
    options: [
      "A) It does not help",
      "B) It only helps POS tagging",
      "C) Training on both tasks simultaneously allows shared representations to capture complementary linguistic information",
      "D) It requires separate models for each task"
    ],
    optionsChinese: [
      "A) 它没有帮助",
      "B) 它仅帮助词性标注",
      "C) 同时在两个任务上训练允许共享表示捕捉互补的语言信息",
      "D) 它需要每个任务单独的模型"
    ],
    answer: 2,
    explanation: "Multi-task learning trains a shared encoder (BiLSTM or BERT) with separate output heads for NER and POS tagging. POS information helps NER (entities are usually nouns), while NER context enriches POS understanding. The shared representations benefit from both supervision signals, often improving both tasks.",
    explanationChinese: "多任务学习训练一个共享编码器（BiLSTM或BERT），为NER和词性标注设置单独的输出头。词性信息帮助NER（实体通常是名词），而NER上下文丰富词性理解。共享表示从两个监督信号中受益，通常改善两个任务。",
    diagram: "",
    terms: ["named_entity_recognition", "pos_tagging", "bert"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 221,
    q: "What is machine translation (MT)?",
    qChinese: "什么是机器翻译（MT）？",
    options: [
      "A) Automatically converting text from one natural language to another",
      "B) Translating programming languages",
      "C) Converting speech to text",
      "D) Summarizing text in the same language"
    ],
    optionsChinese: [
      "A) 自动将文本从一种自然语言转换为另一种",
      "B) 翻译编程语言",
      "C) 将语音转换为文本",
      "D) 用同一语言摘要文本"
    ],
    answer: 0,
    explanation: "Machine translation automatically translates text between natural languages (e.g., English to French). It has evolved from rule-based systems to statistical MT to neural MT. Modern systems use encoder-decoder Transformers and achieve near-human quality for high-resource language pairs.",
    explanationChinese: "机器翻译自动在自然语言之间翻译文本（如英语到法语）。它从基于规则的系统发展到统计MT再到神经MT。现代系统使用编码器-解码器Transformer，对高资源语言对实现接近人类的质量。",
    diagram: "",
    terms: ["machine_translation", "sequence_to_sequence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 222,
    q: "What is the sequence-to-sequence (seq2seq) model?",
    qChinese: "什么是序列到序列（seq2seq）模型？",
    options: [
      "A) A model that classifies sequences",
      "B) An encoder-decoder architecture that maps an input sequence to an output sequence of potentially different length",
      "C) A model that only handles fixed-length sequences",
      "D) A type of word embedding"
    ],
    optionsChinese: [
      "A) 分类序列的模型",
      "B) 将输入序列映射到可能不同长度的输出序列的编码器-解码器架构",
      "C) 仅处理固定长度序列的模型",
      "D) 一种词嵌入"
    ],
    answer: 1,
    explanation: "Seq2seq models use an encoder to read the input sequence into a representation and a decoder to generate the output sequence. Originally with RNNs (Sutskever et al., 2014), now typically with Transformers. Used for translation, summarization, question answering, and any input-to-output text mapping.",
    explanationChinese: "Seq2seq模型使用编码器将输入序列读入表示，使用解码器生成输出序列。最初使用RNN（Sutskever等人，2014），现在通常使用Transformer。用于翻译、摘要、问答和任何输入到输出的文本映射。",
    diagram: "",
    terms: ["sequence_to_sequence", "machine_translation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 223,
    q: "What is beam search in machine translation?",
    qChinese: "机器翻译中的束搜索是什么？",
    options: [
      "A) A training algorithm",
      "B) A tokenization method",
      "C) A method to train the encoder",
      "D) A decoding strategy that maintains the top-k most probable partial sequences at each step"
    ],
    optionsChinese: [
      "A) 训练算法",
      "B) 分词方法",
      "C) 训练编码器的方法",
      "D) 在每步维护前k个最可能的部分序列的解码策略"
    ],
    answer: 3,
    explanation: "Beam search keeps the top-k (beam width) most probable partial translations at each decoding step. Greedy search (k=1) only keeps the best single token, often missing globally better sequences. Beam search with k=4-10 typically produces better translations than greedy search while remaining computationally feasible.",
    explanationChinese: "束搜索在每个解码步骤保留前k个（束宽度）最可能的部分翻译。贪心搜索（k=1）只保留最好的单个标记，经常错过全局更好的序列。束宽度k=4-10的束搜索通常比贪心搜索产生更好的翻译，同时保持计算可行。",
    diagram: "",
    terms: ["beam_search", "machine_translation", "sequence_to_sequence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 224,
    q: "What is the BLEU score used for?",
    qChinese: "BLEU分数用于什么？",
    options: [
      "A) Measuring sentiment accuracy",
      "B) Tokenizing bilingual text",
      "C) Training translation models",
      "D) Evaluating machine translation quality by measuring n-gram overlap between output and reference translations"
    ],
    optionsChinese: [
      "A) 衡量情感准确率",
      "B) 对双语文本进行分词",
      "C) 训练翻译模型",
      "D) 通过测量输出和参考翻译之间的n-gram重叠来评估机器翻译质量"
    ],
    answer: 3,
    explanation: "BLEU computes modified precision for 1-gram through 4-gram matches between the machine translation and one or more reference translations. It applies a brevity penalty for translations shorter than the reference. Scores range from 0 to 1 (often reported as 0-100). It is the standard MT evaluation metric.",
    explanationChinese: "BLEU计算机器翻译与一个或多个参考翻译之间的1-gram到4-gram匹配的修改精确度。它对比参考短的翻译应用简洁惩罚。分数范围从0到1（通常报告为0-100）。它是标准的MT评估指标。",
    diagram: "",
    terms: ["machine_translation", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 225,
    q: "What is the encoder-decoder architecture for neural machine translation?",
    qChinese: "神经机器翻译的编码器-解码器架构是什么？",
    options: [
      "A) Two networks where the encoder compresses the source sentence and the decoder generates the target sentence",
      "B) A single neural network",
      "C) A network that only encodes",
      "D) A network that only decodes"
    ],
    optionsChinese: [
      "A) 两个网络，编码器压缩源句子，解码器生成目标句子",
      "B) 单个神经网络",
      "C) 仅编码的网络",
      "D) 仅解码的网络"
    ],
    answer: 0,
    explanation: "The encoder processes the source language sentence and produces a sequence of hidden representations. The decoder generates the target language sentence one token at a time, conditioned on the encoder output. With attention, the decoder can access all encoder states rather than just the final one.",
    explanationChinese: "编码器处理源语言句子并产生一系列隐藏表示。解码器以编码器输出为条件，一次生成一个目标语言句子标记。通过注意力，解码器可以访问所有编码器状态，而不仅仅是最后一个。",
    diagram: "",
    terms: ["sequence_to_sequence", "machine_translation", "attention_nlp"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 226,
    q: "What is the length penalty in beam search?",
    qChinese: "束搜索中的长度惩罚是什么？",
    options: [
      "A) Penalizing long source sentences",
      "B) A training regularization technique",
      "C) Penalizing the beam width",
      "D) A normalization factor that prevents beam search from favoring shorter translations which have higher raw probability"
    ],
    optionsChinese: [
      "A) 惩罚长源句子",
      "B) 训练正则化技术",
      "C) 惩罚束宽度",
      "D) 防止束搜索偏好具有更高原始概率的较短翻译的归一化因子"
    ],
    answer: 3,
    explanation: "Shorter sequences naturally have higher log-probabilities (fewer terms to multiply). Without length normalization, beam search strongly prefers shorter translations. The length penalty divides the log-probability by the sequence length raised to a power α (typically 0.6-1.0), encouraging appropriate-length outputs.",
    explanationChinese: "较短的序列自然具有更高的对数概率（更少的项相乘）。没有长度归一化，束搜索强烈偏好较短的翻译。长度惩罚将对数概率除以序列长度的α次方（通常0.6-1.0），鼓励适当长度的输出。",
    diagram: "",
    terms: ["beam_search", "machine_translation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 227,
    q: "What is the word alignment problem in machine translation?",
    qChinese: "机器翻译中的词对齐问题是什么？",
    options: [
      "A) Aligning words in a single language",
      "B) Aligning text on a page",
      "C) Determining which source words correspond to which target words, accounting for reordering and many-to-many mappings",
      "D) Aligning word embeddings"
    ],
    optionsChinese: [
      "A) 对齐单一语言中的词",
      "B) 在页面上对齐文本",
      "C) 确定哪些源词对应哪些目标词，考虑重新排序和多对多映射",
      "D) 对齐词嵌入"
    ],
    answer: 2,
    explanation: "Word alignment maps source words to target words. Challenges include one-to-many alignments ('kicked the bucket' → one word in some languages), many-to-one, reordering, and null alignments (words with no counterpart). In statistical MT, this was explicit; in neural MT, attention implicitly learns soft alignments.",
    explanationChinese: "词对齐将源词映射到目标词。挑战包括一对多对齐（'kicked the bucket' → 某些语言中的一个词）、多对一、重新排序和空对齐（没有对应词的词）。在统计MT中这是显式的；在神经MT中，注意力隐式学习软对齐。",
    diagram: "",
    terms: ["machine_translation", "attention_nlp"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 228,
    q: "What is back-translation as a data augmentation technique for MT?",
    qChinese: "回译作为MT数据增强技术是什么？",
    options: [
      "A) Translating the same sentence twice",
      "B) Translating backwards word by word",
      "C) Using a reverse-direction model to translate target-language text into the source language, creating synthetic parallel data",
      "D) Undoing a previous translation"
    ],
    optionsChinese: [
      "A) 翻译同一句子两次",
      "B) 逐词反向翻译",
      "C) 使用反向模型将目标语言文本翻译为源语言，创建合成平行数据",
      "D) 撤销先前的翻译"
    ],
    answer: 2,
    explanation: "Back-translation takes monolingual target-language data, translates it to the source language using an existing MT system, and uses the resulting synthetic parallel pairs for training. This leverages abundant monolingual data and is one of the most effective techniques for improving MT, especially for low-resource languages.",
    explanationChinese: "回译获取目标语言的单语数据，使用现有MT系统将其翻译为源语言，并使用生成的合成平行对进行训练。这利用了丰富的单语数据，是改善MT最有效的技术之一，特别是对于低资源语言。",
    diagram: "",
    terms: ["machine_translation", "sequence_to_sequence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 229,
    q: "What is a parallel corpus in machine translation?",
    qChinese: "机器翻译中的平行语料库是什么？",
    options: [
      "A) A collection of sentences with their translations in another language, aligned at the sentence level",
      "B) A corpus processed on parallel computers",
      "C) Two copies of the same corpus",
      "D) A corpus of parallel sentences in the same language"
    ],
    optionsChinese: [
      "A) 句子及其在另一种语言中的翻译的集合，在句子级别对齐",
      "B) 在并行计算机上处理的语料库",
      "C) 同一语料库的两个副本",
      "D) 同一语言中平行句子的语料库"
    ],
    answer: 0,
    explanation: "A parallel corpus contains source-target sentence pairs (e.g., English-French). Each source sentence is aligned with its translation. Examples include Europarl (EU parliament proceedings), WMT datasets, and OPUS collections. The size and quality of parallel data directly impacts translation quality.",
    explanationChinese: "平行语料库包含源-目标句子对（如英-法）。每个源句子与其翻译对齐。例子包括Europarl（欧盟议会记录）、WMT数据集和OPUS集合。平行数据的大小和质量直接影响翻译质量。",
    diagram: "",
    terms: ["machine_translation", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 230,
    q: "What is greedy decoding vs beam search in MT?",
    qChinese: "MT中贪心解码与束搜索有什么区别？",
    options: [
      "A) They always produce the same result",
      "B) Greedy search is always better",
      "C) Beam search is always faster",
      "D) Greedy selects the single most probable token at each step; beam search maintains multiple hypotheses to find globally better translations"
    ],
    optionsChinese: [
      "A) 它们总是产生相同的结果",
      "B) 贪心搜索总是更好",
      "C) 束搜索总是更快",
      "D) 贪心在每步选择单个最可能的标记；束搜索维护多个假设以找到全局更好的翻译"
    ],
    answer: 3,
    explanation: "Greedy decoding picks the highest probability token at each step, which can lead to suboptimal sequences because a locally good choice may lead to a poor overall translation. Beam search explores multiple paths simultaneously, finding better global solutions at the cost of higher computation.",
    explanationChinese: "贪心解码在每步选择最高概率的标记，这可能导致次优序列，因为局部好的选择可能导致整体翻译不佳。束搜索同时探索多条路径，以更高计算成本找到更好的全局解决方案。",
    diagram: "",
    terms: ["beam_search", "machine_translation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 231,
    q: "What is the coverage problem in neural machine translation?",
    qChinese: "神经机器翻译中的覆盖问题是什么？",
    options: [
      "A) Not covering all languages",
      "B) The decoder may repeatedly attend to the same source words or ignore others, causing over-translation or under-translation",
      "C) Not having enough training data",
      "D) The model covering too many topics"
    ],
    optionsChinese: [
      "A) 未覆盖所有语言",
      "B) 解码器可能反复关注相同的源词或忽略其他词，导致过度翻译或翻译不足",
      "C) 没有足够的训练数据",
      "D) 模型覆盖太多主题"
    ],
    answer: 1,
    explanation: "Without coverage modeling, the attention mechanism may attend to the same source words repeatedly (causing repetition) or never attend to some words (causing omission). Coverage mechanisms track which source positions have been attended to, penalizing re-attention and encouraging full source coverage.",
    explanationChinese: "没有覆盖建模，注意力机制可能反复关注相同的源词（导致重复）或从不关注某些词（导致遗漏）。覆盖机制跟踪已关注的源位置，惩罚重复关注并鼓励完整的源覆盖。",
    diagram: "",
    terms: ["machine_translation", "attention_nlp"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 232,
    q: "What are the main challenges in low-resource machine translation?",
    qChinese: "低资源机器翻译的主要挑战是什么？",
    options: [
      "A) Too much training data",
      "B) Too many GPUs available",
      "C) Limited parallel data, lack of pre-trained models, and morphological complexity of some languages",
      "D) Only speed constraints"
    ],
    optionsChinese: [
      "A) 训练数据太多",
      "B) 可用GPU太多",
      "C) 有限的平行数据、缺乏预训练模型以及某些语言的形态复杂性",
      "D) 仅速度限制"
    ],
    answer: 2,
    explanation: "Most of the world's 7000+ languages lack sufficient parallel data for training high-quality MT. Solutions include: multilingual models (mBART, mT5), transfer learning from related high-resource languages, back-translation from monolingual data, and unsupervised MT using only monolingual corpora.",
    explanationChinese: "世界7000多种语言中的大多数缺乏足够的平行数据来训练高质量MT。解决方案包括：多语言模型（mBART、mT5）、从相关高资源语言迁移学习、从单语数据回译以及仅使用单语语料库的无监督MT。",
    diagram: "",
    terms: ["machine_translation", "corpus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 233,
    q: "What is multilingual machine translation?",
    qChinese: "什么是多语言机器翻译？",
    options: [
      "A) Translating one language at a time",
      "B) Only translating to English",
      "C) Using multiple separate models",
      "D) A single model that can translate between many language pairs, often including zero-shot translation for unseen pairs"
    ],
    optionsChinese: [
      "A) 一次翻译一种语言",
      "B) 仅翻译成英语",
      "C) 使用多个独立模型",
      "D) 可以在多个语言对之间翻译的单个模型，通常包括对未见语言对的零样本翻译"
    ],
    answer: 3,
    explanation: "Multilingual MT trains one model on data from many language pairs. Google's multilingual NMT showed that a single model can handle 100+ languages and even perform zero-shot translation between language pairs it was never directly trained on, by leveraging shared cross-lingual representations.",
    explanationChinese: "多语言MT在来自多个语言对的数据上训练一个模型。Google的多语言NMT表明，单个模型可以处理100多种语言，甚至可以通过利用共享的跨语言表示，在从未直接训练过的语言对之间进行零样本翻译。",
    diagram: "",
    terms: ["machine_translation", "sequence_to_sequence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 234,
    q: "What is the difference between statistical machine translation (SMT) and neural machine translation (NMT)?",
    qChinese: "统计机器翻译（SMT）和神经机器翻译（NMT）之间有什么区别？",
    options: [
      "A) SMT uses phrase tables and separate language models; NMT uses end-to-end neural networks trained jointly",
      "B) They use the same approach",
      "C) SMT is always better",
      "D) NMT does not use parallel data"
    ],
    optionsChinese: [
      "A) SMT使用短语表和独立的语言模型；NMT使用端到端联合训练的神经网络",
      "B) 它们使用相同的方法",
      "C) SMT总是更好",
      "D) NMT不使用平行数据"
    ],
    answer: 0,
    explanation: "SMT decomposes translation into separate components: translation model (phrase table), language model, and reordering model, combined with log-linear models. NMT uses a single end-to-end neural network (encoder-decoder with attention). NMT produces more fluent output and dominates modern MT systems.",
    explanationChinese: "SMT将翻译分解为独立组件：翻译模型（短语表）、语言模型和重排序模型，与对数线性模型结合。NMT使用单个端到端神经网络（带注意力的编码器-解码器）。NMT产生更流畅的输出并主导现代MT系统。",
    diagram: "",
    terms: ["machine_translation", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 235,
    q: "What is the copy mechanism in sequence-to-sequence models?",
    qChinese: "序列到序列模型中的复制机制是什么？",
    options: [
      "A) Copying the entire input as output",
      "B) Allowing the decoder to directly copy tokens from the source input, useful for names and technical terms",
      "C) Copying model weights",
      "D) Duplicating training data"
    ],
    optionsChinese: [
      "A) 将整个输入复制为输出",
      "B) 允许解码器直接从源输入复制标记，对名称和技术术语有用",
      "C) 复制模型权重",
      "D) 复制训练数据"
    ],
    answer: 1,
    explanation: "The copy (pointer) mechanism lets the decoder choose between generating a word from the vocabulary or copying a word directly from the source input. This is essential for handling proper nouns, numbers, and rare words that should be preserved in translation, summarization, and other generation tasks.",
    explanationChinese: "复制（指针）机制让解码器选择从词汇表生成词还是直接从源输入复制词。这对于处理在翻译、摘要和其他生成任务中应保留的专有名词、数字和罕见词至关重要。",
    diagram: "",
    terms: ["sequence_to_sequence", "machine_translation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 236,
    q: "What is the METEOR evaluation metric for MT?",
    qChinese: "MT的METEOR评估指标是什么？",
    options: [
      "A) Identical to BLEU",
      "B) A metric that considers synonyms, stemming, and word order in addition to exact matches, correlating better with human judgment",
      "C) A training loss function",
      "D) A metric for speech recognition"
    ],
    optionsChinese: [
      "A) 与BLEU相同",
      "B) 除精确匹配外还考虑同义词、词干和词序的指标，与人类判断更相关",
      "C) 训练损失函数",
      "D) 语音识别的指标"
    ],
    answer: 1,
    explanation: "METEOR (Metric for Evaluation of Translation with Explicit ORdering) addresses BLEU's limitations by matching words through exact match, stemming, and synonyms. It also considers word order through a fragmentation penalty. METEOR typically correlates better with human judgments than BLEU at the sentence level.",
    explanationChinese: "METEOR（具有显式排序的翻译评估指标）通过精确匹配、词干和同义词匹配词来解决BLEU的局限性。它还通过碎片惩罚考虑词序。METEOR在句子级别通常比BLEU与人类判断的相关性更好。",
    diagram: "",
    terms: ["machine_translation", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 237,
    q: "What is the role of the decoder's start token in sequence generation?",
    qChinese: "解码器的起始标记在序列生成中的作用是什么？",
    options: [
      "A) It signals the beginning of generation; the decoder uses it as the first input to produce the first output token",
      "B) It is not needed",
      "C) It marks the end of input",
      "D) It contains the source sentence"
    ],
    optionsChinese: [
      "A) 它标志着生成的开始；解码器使用它作为第一个输入来产生第一个输出标记",
      "B) 不需要它",
      "C) 它标记输入的结束",
      "D) 它包含源句子"
    ],
    answer: 0,
    explanation: "The decoder needs an initial input to start generating. A special start token (BOS, <s>, or [CLS]) is provided as the first decoder input. The decoder then generates the first real token, which becomes the input for the next step. Generation continues until an end token (EOS) is produced or max length is reached.",
    explanationChinese: "解码器需要初始输入来开始生成。特殊的起始标记（BOS、<s>或[CLS]）作为第一个解码器输入提供。解码器然后生成第一个真实标记，它成为下一步的输入。生成持续到产生结束标记（EOS）或达到最大长度。",
    diagram: "",
    terms: ["sequence_to_sequence", "machine_translation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 238,
    q: "What is the exposure bias problem in sequence-to-sequence models?",
    qChinese: "序列到序列模型中的暴露偏差问题是什么？",
    options: [
      "A) During training, the model sees ground-truth inputs (teacher forcing), but at inference it must use its own predictions, creating a mismatch",
      "B) The model is exposed to too much data",
      "C) The model is biased toward certain languages",
      "D) The model generates too much output"
    ],
    optionsChinese: [
      "A) 训练期间模型看到真实输入（教师强制），但推理时必须使用自己的预测，造成不匹配",
      "B) 模型接触太多数据",
      "C) 模型偏向某些语言",
      "D) 模型生成太多输出"
    ],
    answer: 0,
    explanation: "Teacher forcing provides ground-truth previous tokens during training, but at test time the model uses its own (potentially erroneous) predictions. Errors compound as the model has never learned to recover from its mistakes. Solutions include scheduled sampling, which mixes teacher forcing with model predictions.",
    explanationChinese: "教师强制在训练期间提供真实的前一个标记，但在测试时模型使用自己的（可能错误的）预测。错误会累积，因为模型从未学习过从错误中恢复。解决方案包括计划采样，它混合了教师强制和模型预测。",
    diagram: "",
    terms: ["sequence_to_sequence", "machine_translation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 239,
    q: "What is the role of subword tokenization in machine translation?",
    qChinese: "子词分词在机器翻译中的作用是什么？",
    options: [
      "A) It is not used in MT",
      "B) It replaces the attention mechanism",
      "C) It only works for English",
      "D) It handles open vocabularies and morphological variation by breaking rare words into known subword units"
    ],
    optionsChinese: [
      "A) 它不用于MT",
      "B) 它替代注意力机制",
      "C) 它仅适用于英语",
      "D) 它通过将罕见词分解为已知的子词单元来处理开放词汇表和形态变化"
    ],
    answer: 3,
    explanation: "Subword tokenization (BPE, SentencePiece) is essential for MT because languages have vast vocabularies and productive morphology. It creates a shared vocabulary for source and target languages, enables handling of unknown words, and creates useful cross-lingual token sharing for related languages.",
    explanationChinese: "子词分词（BPE、SentencePiece）对MT至关重要，因为语言有庞大的词汇表和丰富的形态学。它为源语言和目标语言创建共享词汇表，能处理未知词，并为相关语言创建有用的跨语言标记共享。",
    diagram: "",
    terms: ["tokenization", "machine_translation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 240,
    q: "What is the Transformer model's advantage specifically for machine translation?",
    qChinese: "Transformer模型特别在机器翻译方面的优势是什么？",
    options: [
      "A) It is smaller than RNN models",
      "B) It does not need parallel data",
      "C) It captures long-range dependencies better, trains faster via parallelization, and produces higher-quality translations",
      "D) It only works for related languages"
    ],
    optionsChinese: [
      "A) 它比RNN模型更小",
      "B) 它不需要平行数据",
      "C) 它更好地捕捉长距离依赖，通过并行化更快训练，并产生更高质量的翻译",
      "D) 它仅适用于相关语言"
    ],
    answer: 2,
    explanation: "The Transformer revolutionized MT by: (1) capturing long-range dependencies through self-attention with O(1) path length, (2) enabling fully parallel training (no sequential bottleneck), and (3) effectively using cross-attention to align source and target. It improved BLEU scores by 2+ points over RNN-based NMT.",
    explanationChinese: "Transformer通过以下方式革命化了MT：(1)通过O(1)路径长度的自注意力捕捉长距离依赖，(2)实现完全并行训练（无顺序瓶颈），(3)有效使用交叉注意力对齐源和目标。它比基于RNN的NMT提高了2+个BLEU分数。",
    diagram: "",
    terms: ["attention_nlp", "machine_translation", "sequence_to_sequence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 241,
    q: "What is the GPT (Generative Pre-trained Transformer) architecture fundamentally based on?",
    qChinese: "GPT（生成式预训练Transformer）架构的基本基础是什么？",
    options: [
      "A) A bidirectional encoder like BERT",
      "B) A convolutional neural network for text",
      "C) A decoder-only Transformer that uses causal (left-to-right) self-attention for autoregressive language modeling",
      "D) A recurrent neural network with attention"
    ],
    optionsChinese: [
      "A) 像BERT一样的双向编码器",
      "B) 用于文本的卷积神经网络",
      "C) 使用因果（从左到右）自注意力进行自回归语言建模的仅解码器Transformer",
      "D) 带注意力的循环神经网络"
    ],
    answer: 2,
    explanation: "GPT uses a decoder-only Transformer architecture with causal self-attention masking so that each token can only attend to previous tokens. This enables autoregressive generation where the model predicts the next token given all previous tokens. This design differs from BERT's bidirectional encoder approach.",
    explanationChinese: "GPT使用仅解码器的Transformer架构，带有因果自注意力掩码，使每个标记只能关注前面的标记。这实现了自回归生成，模型根据所有先前标记预测下一个标记。这种设计不同于BERT的双向编码器方法。",
    diagram: "",
    terms: ["transformer", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 242,
    q: "What are 'scaling laws' in the context of large language models?",
    qChinese: "在大语言模型的背景下，什么是'缩放定律'？",
    options: [
      "C) Empirical relationships showing that model performance improves predictably as a power law of model size, dataset size, and compute budget",
      "B) Rules about how fast models can be deployed",
      "A) Laws governing GPU manufacturing",
      "D) Legal regulations for AI model size"
    ],
    optionsChinese: [
      "C) 表明模型性能随模型大小、数据集大小和计算预算的幂律可预测地改善的经验关系",
      "B) 关于模型部署速度的规则",
      "A) 管理GPU制造的法律",
      "D) 关于AI模型大小的法律法规"
    ],
    answer: 0,
    explanation: "Scaling laws, notably studied by Kaplan et al. (2020), show that the loss of language models follows a power-law relationship with respect to model parameters, dataset size, and compute. These laws help researchers predict how much performance improvement to expect from scaling up resources, enabling more efficient allocation of training budgets.",
    explanationChinese: "缩放定律，特别是Kaplan等人（2020年）的研究表明，语言模型的损失与模型参数、数据集大小和计算量之间遵循幂律关系。这些定律帮助研究人员预测扩大资源规模可以期待多少性能改善，从而更有效地分配训练预算。",
    diagram: "",
    terms: ["language_model", "transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 243,
    q: "What are 'emergent abilities' in large language models?",
    qChinese: "大语言模型中的'涌现能力'是什么？",
    options: [
      "A) Abilities that are explicitly programmed into the model",
      "B) Abilities that appear only in smaller models",
      "C) Abilities that are absent in smaller models but suddenly appear when the model is scaled beyond a certain threshold",
      "D) Abilities that decrease as the model grows larger"
    ],
    optionsChinese: [
      "A) 明确编程到模型中的能力",
      "B) 仅在较小模型中出现的能力",
      "C) 在较小模型中不存在但当模型扩展超过某个阈值时突然出现的能力",
      "D) 随着模型增大而减弱的能力"
    ],
    answer: 2,
    explanation: "Emergent abilities are capabilities that are not present in smaller models but appear unpredictably once a model reaches a sufficient scale. Examples include multi-step arithmetic, chain-of-thought reasoning, and code generation. These abilities are not explicitly trained but arise from the sheer scale of parameters and training data.",
    explanationChinese: "涌现能力是在较小模型中不存在但一旦模型达到足够规模就不可预测地出现的能力。例子包括多步算术、思维链推理和代码生成。这些能力没有被明确训练，而是从庞大的参数规模和训练数据中产生的。",
    diagram: "",
    terms: ["language_model", "transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 244,
    q: "How does GPT-3 differ from GPT-2 in terms of scale and capability?",
    qChinese: "GPT-3在规模和能力方面与GPT-2有何不同？",
    options: [
      "A) GPT-3 has 175 billion parameters compared to GPT-2's 1.5 billion, enabling strong few-shot learning without fine-tuning",
      "B) GPT-3 is smaller but more efficient",
      "C) GPT-3 uses a completely different architecture",
      "D) GPT-3 is a bidirectional model unlike GPT-2"
    ],
    optionsChinese: [
      "A) GPT-3有1750亿参数，而GPT-2有15亿，使其无需微调即可实现强大的少样本学习",
      "B) GPT-3更小但更高效",
      "C) GPT-3使用完全不同的架构",
      "D) GPT-3与GPT-2不同，是双向模型"
    ],
    answer: 0,
    explanation: "GPT-3 scaled up dramatically to 175 billion parameters (over 100x GPT-2's 1.5 billion) while maintaining the same decoder-only Transformer architecture. This massive scaling enabled remarkable few-shot and zero-shot abilities, where the model can perform tasks from just a few examples in the prompt without any gradient updates.",
    explanationChinese: "GPT-3大幅扩展到1750亿参数（超过GPT-2的15亿的100倍），同时保持相同的仅解码器Transformer架构。这种大规模扩展实现了卓越的少样本和零样本能力，模型可以仅从提示中的几个示例执行任务，无需任何梯度更新。",
    diagram: "",
    terms: ["language_model", "transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 245,
    q: "What is the role of the feed-forward network (FFN) layers in a Transformer-based LLM?",
    qChinese: "基于Transformer的大语言模型中前馈网络（FFN）层的作用是什么？",
    options: [
      "A) They perform attention computations between tokens",
      "B) They are only used during training, not inference",
      "C) They store factual knowledge and apply non-linear transformations to each token's representation independently",
      "D) They reduce the model's memory usage"
    ],
    optionsChinese: [
      "A) 它们执行标记之间的注意力计算",
      "B) 它们仅在训练期间使用，推理时不使用",
      "C) 它们存储事实知识并对每个标记的表示独立应用非线性变换",
      "D) 它们减少模型的内存使用"
    ],
    answer: 2,
    explanation: "The FFN layers in Transformers apply a position-wise two-layer neural network with a non-linear activation to each token independently. Research has shown that these layers act as key-value memories that store factual knowledge learned during pretraining. They complement the attention layers, which handle token interactions.",
    explanationChinese: "Transformer中的FFN层对每个标记独立应用带有非线性激活的逐位置两层神经网络。研究表明，这些层充当键值记忆，存储预训练期间学到的事实知识。它们补充了处理标记交互的注意力层。",
    diagram: "",
    terms: ["transformer", "attention_mechanism"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 246,
    q: "What is the Chinchilla scaling law, and how does it differ from the original GPT-3 scaling approach?",
    qChinese: "Chinchilla缩放定律是什么，它与原始GPT-3缩放方法有何不同？",
    options: [
      "A) Chinchilla says to always maximize model size regardless of data",
      "D) There is no difference between the two approaches",
      "C) Chinchilla recommends smaller datasets for larger models",
      "B) Chinchilla found that for a given compute budget, model size and training data should be scaled equally, suggesting GPT-3 was undertrained on too little data"
    ],
    optionsChinese: [
      "A) Chinchilla认为无论数据如何都要最大化模型大小",
      "D) 两种方法之间没有区别",
      "C) Chinchilla建议较大模型使用较小数据集",
      "B) Chinchilla发现对于给定的计算预算，模型大小和训练数据应等比例扩展，表明GPT-3在太少的数据上训练不足"
    ],
    answer: 3,
    explanation: "The Chinchilla paper by Hoffmann et al. (2022) demonstrated that compute-optimal training requires scaling both model parameters and training tokens equally. This suggested that many large models like GPT-3 were significantly undertrained — using too few tokens relative to their parameter count. Chinchilla (70B params) matched GPT-3 (175B) performance with 4x more data.",
    explanationChinese: "Hoffmann等人（2022年）的Chinchilla论文证明，计算最优训练需要同等扩展模型参数和训练标记。这表明许多大型模型如GPT-3训练严重不足——相对于参数量使用的标记太少。Chinchilla（700亿参数）用4倍数据匹配了GPT-3（1750亿）的性能。",
    diagram: "",
    terms: ["language_model", "transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 247,
    q: "What is RLHF (Reinforcement Learning from Human Feedback) in the context of LLMs?",
    qChinese: "在大语言模型背景下，什么是RLHF（基于人类反馈的强化学习）？",
    options: [
      "A) Training a model purely with supervised learning",
      "B) Using human preferences to train a reward model, then fine-tuning the LLM with reinforcement learning to align outputs with human values",
      "C) A technique for reducing model size",
      "D) Having humans directly edit model weights"
    ],
    optionsChinese: [
      "A) 纯粹用监督学习训练模型",
      "B) 使用人类偏好训练奖励模型，然后用强化学习微调LLM以使输出与人类价值观对齐",
      "C) 一种减小模型大小的技术",
      "D) 让人类直接编辑模型权重"
    ],
    answer: 1,
    explanation: "RLHF is a three-stage process: (1) supervised fine-tuning on demonstrations, (2) training a reward model on human preference comparisons, and (3) using PPO (Proximal Policy Optimization) to fine-tune the LLM against the reward model. This process, used in ChatGPT and InstructGPT, aligns model outputs with human expectations for helpfulness and safety.",
    explanationChinese: "RLHF是一个三阶段过程：(1)在演示数据上进行监督微调，(2)在人类偏好比较上训练奖励模型，(3)使用PPO（近端策略优化）针对奖励模型微调LLM。这个过程用于ChatGPT和InstructGPT，使模型输出与人类对有用性和安全性的期望对齐。",
    diagram: "",
    terms: ["language_model", "natural_language_processing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 248,
    q: "What is the key innovation of the Mixture of Experts (MoE) architecture in LLMs?",
    qChinese: "大语言模型中混合专家（MoE）架构的关键创新是什么？",
    options: [
      "A) It trains multiple small models on different languages",
      "B) It activates only a subset of parameters for each input token via a gating network, allowing massive total parameter counts with efficient computation",
      "C) It uses multiple complete models and averages their outputs",
      "D) It eliminates the need for attention mechanisms"
    ],
    optionsChinese: [
      "A) 它在不同语言上训练多个小模型",
      "B) 它通过门控网络对每个输入标记仅激活参数的子集，允许在高效计算的同时拥有大量总参数",
      "C) 它使用多个完整模型并平均其输出",
      "D) 它消除了对注意力机制的需要"
    ],
    answer: 1,
    explanation: "MoE replaces standard FFN layers with multiple expert FFN layers and a gating network that routes each token to the top-K experts (typically 2). This means a model can have trillions of total parameters but only activate a fraction per token, achieving better quality per FLOP. Models like Mixtral and Switch Transformer use this approach.",
    explanationChinese: "MoE用多个专家FFN层和一个门控网络替代标准FFN层，门控网络将每个标记路由到前K个专家（通常为2个）。这意味着模型可以拥有数万亿总参数但每个标记只激活一小部分，实现更好的每FLOP质量。Mixtral和Switch Transformer等模型使用这种方法。",
    diagram: "",
    terms: ["transformer", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 249,
    q: "What is in-context learning (ICL) in large language models?",
    qChinese: "大语言模型中的上下文学习（ICL）是什么？",
    options: [
      "A) The ability of an LLM to perform tasks by conditioning on examples provided in the prompt without any parameter updates",
      "B) A method of data augmentation",
      "C) Training the model from scratch with context windows",
      "D) Fine-tuning the model on new data"
    ],
    optionsChinese: [
      "A) LLM通过对提示中提供的示例进行条件化来执行任务的能力，无需任何参数更新",
      "B) 一种数据增强方法",
      "C) 使用上下文窗口从头训练模型",
      "D) 在新数据上微调模型"
    ],
    answer: 0,
    explanation: "In-context learning allows LLMs to learn task patterns from a few demonstration examples placed directly in the prompt. The model performs the task by recognizing the pattern without any gradient updates or fine-tuning. This was a breakthrough discovery with GPT-3, fundamentally changing how NLP tasks are approached.",
    explanationChinese: "上下文学习允许LLM从直接放置在提示中的几个演示示例中学习任务模式。模型通过识别模式来执行任务，无需任何梯度更新或微调。这是GPT-3的突破性发现，从根本上改变了NLP任务的处理方式。",
    diagram: "",
    terms: ["language_model", "natural_language_processing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 250,
    q: "What is the difference between zero-shot, one-shot, and few-shot prompting?",
    qChinese: "零样本、单样本和少样本提示之间有什么区别？",
    options: [
      "A) They refer to the number of training epochs",
      "B) They are different model architectures",
      "C) They determine the model's vocabulary size",
      "D) Zero-shot provides no examples, one-shot provides one example, and few-shot provides several examples in the prompt to guide the model's response"
    ],
    optionsChinese: [
      "A) 它们指训练轮次的数量",
      "B) 它们是不同的模型架构",
      "C) 它们决定模型的词汇量大小",
      "D) 零样本不提供示例，单样本提供一个示例，少样本在提示中提供几个示例来引导模型的响应"
    ],
    answer: 3,
    explanation: "These terms describe the number of demonstration examples included in the prompt. Zero-shot gives only the task instruction, one-shot includes a single input-output example, and few-shot includes several examples (typically 3-10). More examples generally improve performance but consume the model's limited context window.",
    explanationChinese: "这些术语描述提示中包含的演示示例数量。零样本只给出任务指令，单样本包含一个输入-输出示例，少样本包含几个示例（通常3-10个）。更多的示例通常能提高性能，但会消耗模型有限的上下文窗口。",
    diagram: "",
    terms: ["language_model", "natural_language_processing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 251,
    q: "What is chain-of-thought (CoT) prompting?",
    qChinese: "什么是思维链（CoT）提示？",
    options: [
      "A) A technique that includes intermediate reasoning steps in the prompt examples, encouraging the model to show its step-by-step reasoning",
      "B) A method for reducing prompt length",
      "C) Chaining multiple models together",
      "D) Asking the model to generate multiple independent answers"
    ],
    optionsChinese: [
      "A) 在提示示例中包含中间推理步骤的技术，鼓励模型展示其逐步推理过程",
      "B) 一种减少提示长度的方法",
      "C) 将多个模型链接在一起",
      "D) 要求模型生成多个独立答案"
    ],
    answer: 0,
    explanation: "Chain-of-thought prompting, introduced by Wei et al. (2022), involves including step-by-step reasoning demonstrations in few-shot examples. This encourages the model to decompose complex problems into intermediate steps before arriving at the answer. CoT dramatically improves performance on arithmetic, commonsense, and symbolic reasoning tasks.",
    explanationChinese: "思维链提示由Wei等人（2022年）提出，涉及在少样本示例中包含逐步推理演示。这鼓励模型在得出答案之前将复杂问题分解为中间步骤。CoT在算术、常识和符号推理任务上显著提高了性能。",
    diagram: "",
    terms: ["language_model", "natural_language_processing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 252,
    q: "What is instruction tuning and why is it important for LLMs?",
    qChinese: "什么是指令调优，为什么它对大语言模型很重要？",
    options: [
      "A) It removes unwanted instructions from the training data",
      "B) It is the same as pre-training with more data",
      "C) It tunes the hardware instructions for faster inference",
      "D) It fine-tunes an LLM on a diverse set of tasks described as natural language instructions, improving zero-shot generalization to new tasks"
    ],
    optionsChinese: [
      "A) 它从训练数据中删除不需要的指令",
      "B) 它与使用更多数据的预训练相同",
      "C) 它调整硬件指令以加速推理",
      "D) 它在描述为自然语言指令的多样化任务集上微调LLM，提高对新任务的零样本泛化能力"
    ],
    answer: 3,
    explanation: "Instruction tuning, as demonstrated in FLAN and InstructGPT, fine-tunes a pre-trained LLM on many tasks formatted as instruction-response pairs. This teaches the model to follow diverse instructions, significantly improving zero-shot performance on unseen tasks. It bridges the gap between pre-training objectives and real-world usage patterns.",
    explanationChinese: "指令调优，如FLAN和InstructGPT所展示的，在格式化为指令-响应对的多个任务上微调预训练的LLM。这教会模型遵循多样化的指令，显著提高了对未见任务的零样本性能。它弥合了预训练目标和实际使用模式之间的差距。",
    diagram: "",
    terms: ["language_model", "natural_language_processing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 253,
    q: "What is the 'self-consistency' prompting technique?",
    qChinese: "什么是'自一致性'提示技术？",
    options: [
      "C) Sampling multiple chain-of-thought reasoning paths and selecting the most frequent final answer via majority voting",
      "B) Training the model to be consistent across languages",
      "A) Ensuring the model always gives the same answer",
      "D) Making the model check its own grammar"
    ],
    optionsChinese: [
      "C) 采样多个思维链推理路径并通过多数投票选择最常见的最终答案",
      "B) 训练模型在不同语言之间保持一致",
      "A) 确保模型始终给出相同答案",
      "D) 让模型检查自己的语法"
    ],
    answer: 0,
    explanation: "Self-consistency, proposed by Wang et al. (2022), generates multiple reasoning paths using temperature sampling with chain-of-thought prompting, then takes a majority vote over the final answers. This leverages the intuition that correct reasoning paths are more likely to converge on the right answer, and consistently outperforms single-path CoT prompting.",
    explanationChinese: "自一致性由Wang等人（2022年）提出，使用温度采样和思维链提示生成多个推理路径，然后对最终答案进行多数投票。这利用了正确推理路径更可能收敛到正确答案的直觉，并且始终优于单路径CoT提示。",
    diagram: "",
    terms: ["language_model", "natural_language_processing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 254,
    q: "What is the purpose of system prompts in modern LLM APIs?",
    qChinese: "现代LLM API中系统提示的目的是什么？",
    options: [
      "A) To set the model's behavior, personality, and constraints before the user's conversation begins",
      "B) To compress the model's parameters",
      "C) To debug system errors",
      "D) To configure the operating system"
    ],
    optionsChinese: [
      "A) 在用户对话开始之前设置模型的行为、个性和约束",
      "B) 压缩模型的参数",
      "C) 调试系统错误",
      "D) 配置操作系统"
    ],
    answer: 0,
    explanation: "System prompts are special instructions placed before the user message that define the model's role, tone, and behavioral constraints. They allow developers to customize the LLM's behavior without fine-tuning, for example instructing it to act as a helpful coding assistant that refuses harmful requests. System prompts persist across the conversation context.",
    explanationChinese: "系统提示是放置在用户消息之前的特殊指令，定义模型的角色、语调和行为约束。它们允许开发者在不微调的情况下自定义LLM的行为，例如指示它充当拒绝有害请求的有用编码助手。系统提示在整个对话上下文中持续存在。",
    diagram: "",
    terms: ["language_model", "natural_language_processing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 255,
    q: "What is 'retrieval-augmented generation' (RAG) in prompt engineering?",
    qChinese: "提示工程中的'检索增强生成'（RAG）是什么？",
    options: [
      "A) Generating retrieval queries from scratch",
      "B) Retrieving relevant documents from a knowledge base and including them in the prompt to ground the LLM's response in factual information",
      "C) Augmenting training data with random text",
      "D) A model architecture that replaces the Transformer"
    ],
    optionsChinese: [
      "A) 从头生成检索查询",
      "B) 从知识库中检索相关文档并将其包含在提示中，使LLM的响应基于事实信息",
      "C) 用随机文本增强训练数据",
      "D) 替代Transformer的模型架构"
    ],
    answer: 1,
    explanation: "RAG combines retrieval and generation by first using a retriever (often dense passage retrieval) to find relevant documents, then including those documents in the prompt context for the LLM to generate grounded responses. This reduces hallucination, enables access to up-to-date information, and allows the model to cite sources.",
    explanationChinese: "RAG通过首先使用检索器（通常是密集段落检索）找到相关文档，然后将这些文档包含在提示上下文中，让LLM生成有据可依的响应，将检索和生成结合起来。这减少了幻觉，能够访问最新信息，并允许模型引用来源。",
    diagram: "",
    terms: ["language_model", "natural_language_processing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 256,
    q: "What is the 'tree-of-thought' prompting method?",
    qChinese: "什么是'思维树'提示方法？",
    options: [
      "A) A technique where the model only uses binary decisions",
      "B) A generalization of chain-of-thought that explores multiple reasoning branches, evaluates them, and uses search algorithms like BFS/DFS to find the best solution path",
      "C) A method that organizes prompts in a hierarchical file structure",
      "D) A method for pruning unnecessary tokens from the prompt"
    ],
    optionsChinese: [
      "A) 模型仅使用二元决策的技术",
      "B) 思维链的泛化，探索多个推理分支，评估它们，并使用BFS/DFS等搜索算法找到最佳解决路径",
      "C) 一种在层次文件结构中组织提示的方法",
      "D) 一种从提示中修剪不必要标记的方法"
    ],
    answer: 1,
    explanation: "Tree-of-thought (ToT), introduced by Yao et al. (2023), extends chain-of-thought by exploring a tree of reasoning steps. At each step, the model generates multiple possible thoughts, evaluates their promise, and uses deliberate search (BFS or DFS) to navigate toward the best solution. This enables solving complex planning and reasoning problems that linear CoT cannot.",
    explanationChinese: "思维树（ToT）由Yao等人（2023年）提出，通过探索推理步骤的树结构扩展思维链。在每一步，模型生成多个可能的想法，评估它们的前景，并使用审慎搜索（BFS或DFS）导航到最佳解决方案。这使得能够解决线性CoT无法解决的复杂规划和推理问题。",
    diagram: "",
    terms: ["language_model", "natural_language_processing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 257,
    q: "What is beam search in text generation?",
    qChinese: "文本生成中的束搜索是什么？",
    options: [
      "A) A random sampling technique",
      "B) A search algorithm that maintains the top-K most probable partial sequences at each decoding step, expanding and pruning to approximate the most likely output",
      "C) A training algorithm for language models",
      "D) A method that always selects the highest probability token"
    ],
    optionsChinese: [
      "A) 一种随机采样技术",
      "B) 在每个解码步骤维护前K个最可能部分序列的搜索算法，通过扩展和修剪来近似最可能的输出",
      "C) 语言模型的训练算法",
      "D) 始终选择最高概率标记的方法"
    ],
    answer: 1,
    explanation: "Beam search keeps track of B (beam width) most probable candidate sequences at each time step. Each candidate is expanded with all possible next tokens, and only the top-B sequences are retained. This provides a balance between greedy decoding (beam=1) and exhaustive search, though it can produce repetitive or generic text.",
    explanationChinese: "束搜索在每个时间步跟踪B个（束宽）最可能的候选序列。每个候选用所有可能的下一个标记扩展，只保留前B个序列。这在贪心解码（束宽=1）和穷举搜索之间提供了平衡，尽管它可能产生重复或通用的文本。",
    diagram: "",
    terms: ["language_model", "sequence_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 258,
    q: "What is nucleus sampling (top-p sampling) in text generation?",
    qChinese: "文本生成中的核采样（top-p采样）是什么？",
    options: [
      "A) Sampling from the entire vocabulary uniformly",
      "B) Always selecting the most probable token",
      "C) Sampling from the smallest set of tokens whose cumulative probability exceeds a threshold p, dynamically adjusting the candidate pool",
      "D) Sampling only from the top 10 tokens"
    ],
    optionsChinese: [
      "A) 从整个词汇表中均匀采样",
      "B) 始终选择最可能的标记",
      "C) 从累积概率超过阈值p的最小标记集合中采样，动态调整候选池",
      "D) 仅从前10个标记中采样"
    ],
    answer: 2,
    explanation: "Nucleus sampling, proposed by Holtzman et al. (2019), dynamically determines the number of tokens to sample from based on a cumulative probability threshold p (e.g., 0.9). Unlike top-k sampling with a fixed k, nucleus sampling adapts to the shape of the probability distribution — using fewer tokens when the model is confident and more when it is uncertain.",
    explanationChinese: "核采样由Holtzman等人（2019年）提出，基于累积概率阈值p（例如0.9）动态确定要采样的标记数量。与固定k值的top-k采样不同，核采样适应概率分布的形状——当模型自信时使用较少标记，不确定时使用更多标记。",
    diagram: "",
    terms: ["language_model", "natural_language_processing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 259,
    q: "What is the 'temperature' parameter in text generation and how does it affect outputs?",
    qChinese: "文本生成中的'温度'参数是什么，它如何影响输出？",
    options: [
      "A) It scales the logits before softmax: lower temperature makes the distribution sharper (more deterministic), higher temperature makes it flatter (more random)",
      "B) It is the GPU's physical temperature",
      "C) It controls the learning rate during training",
      "D) It determines the maximum output length"
    ],
    optionsChinese: [
      "A) 它在softmax之前缩放logits：较低温度使分布更尖锐（更确定性），较高温度使其更平坦（更随机）",
      "B) 它是GPU的物理温度",
      "C) 它控制训练期间的学习率",
      "D) 它决定最大输出长度"
    ],
    answer: 0,
    explanation: "Temperature T divides the logits before applying softmax: softmax(z/T). When T approaches 0, the distribution becomes a one-hot vector (greedy decoding). When T=1, the original distribution is preserved. When T>1, the distribution flattens, increasing randomness and creativity. This is a key parameter for controlling the diversity-quality tradeoff in generation.",
    explanationChinese: "温度T在应用softmax之前除以logits：softmax(z/T)。当T接近0时，分布变成独热向量（贪心解码）。当T=1时，保留原始分布。当T>1时，分布变平，增加随机性和创造性。这是控制生成中多样性-质量权衡的关键参数。",
    diagram: "",
    terms: ["language_model", "natural_language_processing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 260,
    q: "What is the 'repetition penalty' problem in text generation, and how is it addressed?",
    qChinese: "文本生成中的'重复惩罚'问题是什么，如何解决？",
    options: [
      "A) Training data contains too many repeated examples",
      "B) Models generate text too slowly, penalizing user experience",
      "C) The model repeats the input prompt verbatim",
      "D) Neural text generation models tend to produce repetitive phrases or sentences; this is addressed by penalizing previously generated tokens or using n-gram blocking"
    ],
    optionsChinese: [
      "A) 训练数据包含太多重复的示例",
      "B) 模型生成文本太慢，影响用户体验",
      "C) 模型逐字重复输入提示",
      "D) 神经文本生成模型倾向于产生重复的短语或句子；通过惩罚先前生成的标记或使用n-gram阻断来解决"
    ],
    answer: 3,
    explanation: "Neural language models, especially with beam search or greedy decoding, frequently degenerate into repetitive loops. Solutions include: repetition penalty (reducing the logit of previously seen tokens), n-gram blocking (preventing any n-gram from appearing twice), and nucleus sampling which naturally introduces diversity through stochastic decoding.",
    explanationChinese: "神经语言模型，特别是使用束搜索或贪心解码时，经常退化为重复循环。解决方案包括：重复惩罚（降低先前出现的标记的logit）、n-gram阻断（防止任何n-gram出现两次）以及核采样（通过随机解码自然引入多样性）。",
    diagram: "",
    terms: ["language_model", "sequence_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 261,
    q: "What is the difference between greedy decoding and sampling-based decoding?",
    qChinese: "贪心解码和基于采样的解码有什么区别？",
    options: [
      "A) There is no difference between them",
      "B) Greedy decoding always picks the highest probability token at each step, while sampling draws from the probability distribution, introducing diversity at the cost of potential quality",
      "C) Greedy decoding is used for training; sampling for inference",
      "D) Sampling always produces better results than greedy decoding"
    ],
    optionsChinese: [
      "A) 它们之间没有区别",
      "B) 贪心解码在每一步始终选择最高概率的标记，而采样从概率分布中抽取，以潜在质量为代价引入多样性",
      "C) 贪心解码用于训练；采样用于推理",
      "D) 采样总是产生比贪心解码更好的结果"
    ],
    answer: 1,
    explanation: "Greedy decoding selects argmax at each step, which is fast and deterministic but often produces repetitive, dull text. Sampling-based methods (top-k, nucleus, temperature scaling) draw tokens probabilistically, producing more diverse and natural text. The choice depends on the application: factual tasks prefer greedy/beam search while creative tasks benefit from sampling.",
    explanationChinese: "贪心解码在每一步选择argmax，快速且确定性但经常产生重复、乏味的文本。基于采样的方法（top-k、核采样、温度缩放）概率性地抽取标记，产生更多样和自然的文本。选择取决于应用：事实性任务偏好贪心/束搜索，而创意任务受益于采样。",
    diagram: "",
    terms: ["language_model", "sequence_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 262,
    q: "What is top-k sampling in text generation?",
    qChinese: "文本生成中的top-k采样是什么？",
    options: [
      "A) Redistributing the probability mass among only the top-k most probable tokens and sampling from this truncated distribution",
      "B) Selecting the k-th most probable token",
      "C) Generating k complete sequences and selecting the best one",
      "D) Using k different language models for generation"
    ],
    optionsChinese: [
      "A) 仅在前k个最可能的标记之间重新分配概率质量并从这个截断分布中采样",
      "B) 选择第k个最可能的标记",
      "C) 生成k个完整序列并选择最佳序列",
      "D) 使用k个不同的语言模型进行生成"
    ],
    answer: 0,
    explanation: "Top-k sampling restricts the sampling pool to the k most probable tokens, setting the probability of all other tokens to zero and renormalizing. For example, top-k=50 means only the 50 most likely tokens are considered at each step. A limitation is that the fixed k may be too restrictive when the distribution is flat or too permissive when it is peaked.",
    explanationChinese: "Top-k采样将采样池限制在k个最可能的标记，将所有其他标记的概率设为零并重新归一化。例如，top-k=50意味着每一步只考虑50个最可能的标记。一个局限性是当分布平坦时固定的k可能太过限制，当分布尖锐时又太宽松。",
    diagram: "",
    terms: ["language_model", "natural_language_processing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 263,
    q: "What is 'speculative decoding' and why is it useful for LLM inference?",
    qChinese: "什么是'推测性解码'，为什么它对LLM推理有用？",
    options: [
      "A) A method that speculates about future user queries",
      "B) A technique for training models faster",
      "C) Using a smaller draft model to quickly generate candidate tokens that are then verified in parallel by the larger target model, speeding up inference without changing output quality",
      "D) Generating text without any language model"
    ],
    optionsChinese: [
      "A) 推测未来用户查询的方法",
      "B) 一种更快训练模型的技术",
      "C) 使用较小的草稿模型快速生成候选标记，然后由较大的目标模型并行验证，在不改变输出质量的情况下加速推理",
      "D) 不使用任何语言模型生成文本"
    ],
    answer: 2,
    explanation: "Speculative decoding uses a small, fast draft model to generate multiple candidate tokens autoregressively, then the large target model verifies all tokens in a single forward pass (since verification is parallelizable). Accepted tokens are kept; rejected ones trigger re-generation. This can provide 2-3x speedup while producing mathematically identical outputs to the large model alone.",
    explanationChinese: "推测性解码使用一个小而快的草稿模型自回归地生成多个候选标记，然后大型目标模型在一次前向传播中验证所有标记（因为验证是可并行化的）。接受的标记被保留；被拒绝的触发重新生成。这可以提供2-3倍的加速，同时产生与单独使用大模型数学上相同的输出。",
    diagram: "",
    terms: ["language_model", "transformer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 264,
    q: "What is Named Entity Recognition (NER)?",
    qChinese: "什么是命名实体识别（NER）？",
    options: [
      "A) Identifying the topic of a document",
      "B) The task of locating and classifying named entities in text into predefined categories such as person, organization, location, date, and more",
      "C) Translating entity names between languages",
      "D) Removing entity names from text for privacy"
    ],
    optionsChinese: [
      "A) 识别文档的主题",
      "B) 在文本中定位和分类命名实体到预定义类别（如人物、组织、地点、日期等）的任务",
      "C) 在语言之间翻译实体名称",
      "D) 从文本中删除实体名称以保护隐私"
    ],
    answer: 1,
    explanation: "NER is a fundamental information extraction task that identifies spans of text referring to named entities and classifies them into categories (PER, ORG, LOC, DATE, etc.). Modern NER systems use sequence labeling with BIO/BIOES tagging schemes on top of pre-trained models like BERT, achieving near-human performance on standard benchmarks like CoNLL-2003.",
    explanationChinese: "NER是一项基本的信息提取任务，识别文本中指代命名实体的片段并将其分类到类别中（PER、ORG、LOC、DATE等）。现代NER系统在BERT等预训练模型之上使用BIO/BIOES标注方案的序列标注，在CoNLL-2003等标准基准上达到接近人类的性能。",
    diagram: "",
    terms: ["natural_language_processing", "text_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 265,
    q: "What is the BIO tagging scheme used in sequence labeling tasks like NER?",
    qChinese: "在NER等序列标注任务中使用的BIO标注方案是什么？",
    options: [
      "A) A method for biological text processing",
      "B) A binary classification approach",
      "C) A tagging system where B marks the beginning of an entity, I marks inside tokens of the same entity, and O marks tokens outside any entity",
      "D) A technique for tokenizing biological sequences"
    ],
    optionsChinese: [
      "A) 一种生物文本处理方法",
      "B) 一种二元分类方法",
      "C) 一种标注系统，其中B标记实体的开始，I标记同一实体的内部标记，O标记任何实体外部的标记",
      "D) 一种用于标记化生物序列的技术"
    ],
    answer: 2,
    explanation: "BIO (Beginning, Inside, Outside) is the most common tagging scheme for NER. For example, in 'Barack Obama visited Paris', the tags would be B-PER, I-PER, O, B-LOC. The B tag distinguishes the start of a new entity from a continuation (I), which is critical when two entities of the same type appear consecutively.",
    explanationChinese: "BIO（开始、内部、外部）是NER最常用的标注方案。例如，在'Barack Obama visited Paris'中，标签是B-PER、I-PER、O、B-LOC。B标签将新实体的开始与续接（I）区分开来，当两个相同类型的实体连续出现时这很关键。",
    diagram: "",
    terms: ["natural_language_processing", "text_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 266,
    q: "What is relation extraction in NLP?",
    qChinese: "NLP中的关系抽取是什么？",
    options: [
      "A) Extracting mathematical relations from equations",
      "B) Finding synonyms and antonyms in text",
      "C) Extracting grammatical relations like subject-verb-object",
      "D) Identifying and classifying semantic relationships between entities mentioned in text, such as 'founded-by' or 'located-in'"
    ],
    optionsChinese: [
      "A) 从方程中提取数学关系",
      "B) 在文本中查找同义词和反义词",
      "C) 提取像主语-动词-宾语这样的语法关系",
      "D) 识别和分类文本中提到的实体之间的语义关系，如'创立者'或'位于'"
    ],
    answer: 3,
    explanation: "Relation extraction identifies semantic relationships between entity pairs in text. For example, from 'Steve Jobs co-founded Apple in Cupertino,' it extracts (Steve Jobs, founded-by, Apple) and (Apple, headquartered-in, Cupertino). Approaches include pipeline methods (NER then RE), joint extraction, and distant supervision using knowledge bases like Freebase.",
    explanationChinese: "关系抽取识别文本中实体对之间的语义关系。例如，从'Steve Jobs co-founded Apple in Cupertino'中提取（Steve Jobs, founded-by, Apple）和（Apple, headquartered-in, Cupertino）。方法包括流水线方法（先NER后RE）、联合提取和使用Freebase等知识库的远程监督。",
    diagram: "",
    terms: ["natural_language_processing", "text_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 267,
    q: "What is event extraction in NLP?",
    qChinese: "NLP中的事件抽取是什么？",
    options: [
      "A) Detecting the sentiment of news events",
      "B) Scheduling calendar events from emails",
      "C) Identifying event triggers and their arguments (participants, time, location, etc.) from text to create structured event representations",
      "D) Counting the number of events in a document"
    ],
    optionsChinese: [
      "A) 检测新闻事件的情感",
      "B) 从电子邮件中安排日历事件",
      "C) 从文本中识别事件触发词及其论元（参与者、时间、地点等）以创建结构化事件表示",
      "D) 计算文档中事件的数量"
    ],
    answer: 2,
    explanation: "Event extraction identifies event triggers (usually verbs or nouns indicating an event) and their arguments (who, what, when, where). For example, from 'Microsoft acquired LinkedIn in 2016,' it extracts an Acquisition event with trigger 'acquired', buyer 'Microsoft', target 'LinkedIn', and time '2016'. This goes beyond relation extraction by capturing the event structure.",
    explanationChinese: "事件抽取识别事件触发词（通常是表示事件的动词或名词）及其论元（谁、什么、何时、何地）。例如，从'Microsoft acquired LinkedIn in 2016'中提取一个收购事件，触发词'acquired'，买方'Microsoft'，目标'LinkedIn'，时间'2016'。这超越了关系抽取，捕捉了事件结构。",
    diagram: "",
    terms: ["natural_language_processing", "text_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 268,
    q: "What is distant supervision in relation extraction?",
    qChinese: "关系抽取中的远程监督是什么？",
    options: [
      "A) Supervising a model from a remote server",
      "B) Supervision using translated data from distant languages",
      "C) Training with very few labeled examples",
      "D) Using a large knowledge base to automatically label training data by assuming that if two entities have a known relation in the KB, any sentence mentioning both entities expresses that relation"
    ],
    optionsChinese: [
      "A) 从远程服务器监督模型",
      "B) 使用来自远距离语言的翻译数据进行监督",
      "C) 使用很少的标注示例进行训练",
      "D) 使用大型知识库自动标注训练数据，假设如果两个实体在知识库中有已知关系，则任何提到这两个实体的句子都表达该关系"
    ],
    answer: 3,
    explanation: "Distant supervision, introduced by Mintz et al. (2009), automatically creates training data for relation extraction by aligning a knowledge base with text. The key assumption is that any sentence containing two entities with a known KB relation likely expresses that relation. While this creates noisy labels, it enables training on large-scale data without manual annotation.",
    explanationChinese: "远程监督由Mintz等人（2009年）提出，通过将知识库与文本对齐来自动创建关系抽取的训练数据。关键假设是，包含两个具有已知知识库关系的实体的任何句子都可能表达该关系。虽然这会创建噪声标签，但它能够在不需要手动标注的情况下在大规模数据上训练。",
    diagram: "",
    terms: ["natural_language_processing", "text_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 269,
    q: "How are pre-trained language models like BERT used for NER?",
    qChinese: "像BERT这样的预训练语言模型如何用于NER？",
    options: [
      "A) BERT cannot be used for NER",
      "B) By adding a token-level classification layer on top of BERT's output representations and fine-tuning the entire model on NER-labeled data",
      "C) By using BERT only for tokenization",
      "D) By replacing BERT's attention with CRF layers"
    ],
    optionsChinese: [
      "A) BERT不能用于NER",
      "B) 在BERT的输出表示之上添加标记级分类层，并在NER标注数据上微调整个模型",
      "C) 仅将BERT用于分词",
      "D) 用CRF层替换BERT的注意力"
    ],
    answer: 1,
    explanation: "For NER, a linear classification layer is added on top of BERT's contextualized token representations to predict entity tags (B-PER, I-PER, O, etc.) for each token. The entire model is fine-tuned end-to-end. Optionally, a CRF layer can be added on top to model tag dependencies. This approach achieves state-of-the-art results with relatively little labeled data.",
    explanationChinese: "对于NER，在BERT的上下文化标记表示之上添加线性分类层，为每个标记预测实体标签（B-PER、I-PER、O等）。整个模型端到端微调。可选地，可以在顶部添加CRF层来建模标签依赖关系。这种方法用相对较少的标注数据达到了最先进的结果。",
    diagram: "",
    terms: ["transformer", "natural_language_processing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 270,
    q: "What is open information extraction (OpenIE)?",
    qChinese: "什么是开放信息抽取（OpenIE）？",
    options: [
      "A) A method for extracting information from images",
      "B) Information extraction using open-source tools only",
      "C) Extracting information from open-access publications",
      "D) Extracting relation tuples from text without being restricted to a predefined set of relation types, typically outputting (subject, relation, object) triples"
    ],
    optionsChinese: [
      "A) 一种从图像中提取信息的方法",
      "B) 仅使用开源工具的信息抽取",
      "C) 从开放获取出版物中提取信息",
      "D) 从文本中提取关系元组，不限于预定义的关系类型集，通常输出（主语、关系、宾语）三元组"
    ],
    answer: 3,
    explanation: "OpenIE systems like TextRunner and OpenIE 5.0 extract relation triples from text without requiring a pre-specified schema of relation types. For example, from 'Einstein was born in Ulm,' it extracts (Einstein, was born in, Ulm). This domain-independent approach scales to the web but produces noisier extractions compared to supervised relation extraction.",
    explanationChinese: "像TextRunner和OpenIE 5.0这样的OpenIE系统从文本中提取关系三元组，不需要预先指定的关系类型模式。例如，从'Einstein was born in Ulm'中提取（Einstein, was born in, Ulm）。这种领域无关的方法可以扩展到网络规模，但与监督关系抽取相比产生更多噪声提取。",
    diagram: "",
    terms: ["natural_language_processing", "text_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 271,
    q: "What is the fundamental difference between task-oriented and open-domain dialogue systems?",
    qChinese: "任务导向型和开放域对话系统之间的根本区别是什么？",
    options: [
      "A) Open-domain systems are always more accurate",
      "B) Task-oriented systems are designed to help users accomplish specific goals (e.g., booking a flight) with structured dialogue, while open-domain systems aim for free-form conversation on any topic",
      "C) Task-oriented systems can only handle one turn of dialogue",
      "D) There is no meaningful difference between them"
    ],
    optionsChinese: [
      "A) 开放域系统总是更准确",
      "B) 任务导向型系统旨在通过结构化对话帮助用户完成特定目标（如预订航班），而开放域系统旨在就任何话题进行自由形式对话",
      "C) 任务导向型系统只能处理一轮对话",
      "D) 它们之间没有有意义的区别"
    ],
    answer: 1,
    explanation: "Task-oriented dialogue systems have a clear goal structure with slot-filling, dialogue state tracking, and API calls to backend services. They follow a pipeline of NLU, dialogue manager, and NLG. Open-domain (chitchat) systems aim for engaging, coherent conversation without a specific task, typically using retrieval or generative models like DialoGPT or BlenderBot.",
    explanationChinese: "任务导向型对话系统具有明确的目标结构，包含槽填充、对话状态跟踪和后端服务API调用。它们遵循NLU、对话管理器和NLG的流水线。开放域（闲聊）系统旨在进行引人入胜、连贯的对话而没有特定任务，通常使用检索或生成模型如DialoGPT或BlenderBot。",
    diagram: "",
    terms: ["natural_language_processing", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 272,
    q: "What is dialogue state tracking (DST) in task-oriented dialogue systems?",
    qChinese: "任务导向型对话系统中的对话状态跟踪（DST）是什么？",
    options: [
      "A) Tracking how many turns have occurred",
      "B) Maintaining a structured representation of the user's goals and constraints (slot-value pairs) throughout the conversation",
      "C) Recording the full conversation history word by word",
      "D) Tracking the user's emotional state"
    ],
    optionsChinese: [
      "A) 跟踪发生了多少轮对话",
      "B) 在整个对话过程中维护用户目标和约束（槽值对）的结构化表示",
      "C) 逐字记录完整的对话历史",
      "D) 跟踪用户的情感状态"
    ],
    answer: 1,
    explanation: "DST maintains the belief state — a set of slot-value pairs representing the user's requirements at each turn. For a restaurant booking, slots might include cuisine=Italian, price=cheap, area=center. Modern approaches use neural models like TRADE and TripPy that can handle unseen slots and scale to new domains without extensive re-engineering.",
    explanationChinese: "DST维护信念状态——一组表示用户在每一轮需求的槽值对。对于餐厅预订，槽可能包括菜系=意大利、价格=便宜、区域=中心。现代方法使用TRADE和TripPy等神经模型，能够处理未见的槽并扩展到新领域，无需大量重新工程。",
    diagram: "",
    terms: ["natural_language_processing", "sequence_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 273,
    q: "What is retrieval-augmented dialogue generation?",
    qChinese: "什么是检索增强对话生成？",
    options: [
      "A) Generating dialogue scripts for movies",
      "B) Retrieving old conversations from a chat log",
      "C) A system that retrieves relevant knowledge or past responses from a database to inform and ground the generation of dialogue responses",
      "D) A method for data augmentation in dialogue training"
    ],
    optionsChinese: [
      "A) 为电影生成对话脚本",
      "B) 从聊天记录中检索旧对话",
      "C) 从数据库中检索相关知识或过去的响应来通知和支撑对话响应的生成",
      "D) 对话训练中的数据增强方法"
    ],
    answer: 2,
    explanation: "Retrieval-augmented dialogue combines a retriever component that searches a knowledge base or response database with a generator that conditions on both the dialogue context and retrieved information. This grounds responses in factual information, reducing hallucination. Systems like RETRO and BlenderBot 2.0 use this approach to improve factual consistency and knowledge currency.",
    explanationChinese: "检索增强对话将搜索知识库或响应数据库的检索器组件与在对话上下文和检索到的信息上进行条件化的生成器结合起来。这使响应基于事实信息，减少幻觉。RETRO和BlenderBot 2.0等系统使用这种方法来提高事实一致性和知识时效性。",
    diagram: "",
    terms: ["language_model", "natural_language_processing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 274,
    q: "What is the typical pipeline architecture for a task-oriented dialogue system?",
    qChinese: "任务导向型对话系统的典型流水线架构是什么？",
    options: [
      "A) A single end-to-end neural network",
      "B) Input → Output with no intermediate steps",
      "C) Natural Language Understanding (NLU) → Dialogue State Tracking → Dialogue Policy → Natural Language Generation (NLG)",
      "D) Tokenization → Embedding → Classification"
    ],
    optionsChinese: [
      "A) 单个端到端神经网络",
      "B) 没有中间步骤的输入→输出",
      "C) 自然语言理解（NLU）→对话状态跟踪→对话策略→自然语言生成（NLG）",
      "D) 分词→嵌入→分类"
    ],
    answer: 2,
    explanation: "The classic task-oriented dialogue pipeline has four stages: (1) NLU parses user utterances into intents and slots, (2) DST updates the belief state, (3) the dialogue policy decides the next system action (e.g., request information, confirm, or make API call), and (4) NLG converts the system action into natural language. Modern systems increasingly use end-to-end approaches but the pipeline remains conceptually important.",
    explanationChinese: "经典的任务导向型对话流水线有四个阶段：(1)NLU将用户话语解析为意图和槽，(2)DST更新信念状态，(3)对话策略决定下一个系统动作（如请求信息、确认或API调用），(4)NLG将系统动作转换为自然语言。现代系统越来越多地使用端到端方法，但流水线在概念上仍然很重要。",
    diagram: "",
    terms: ["natural_language_processing", "sequence_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 275,
    q: "What are the main challenges in building open-domain dialogue systems?",
    qChinese: "构建开放域对话系统的主要挑战是什么？",
    options: [
      "A) Maintaining consistency, avoiding contradictions, staying on topic, generating engaging responses, and handling long-term memory across turns",
      "B) The only challenge is computational cost",
      "C) Open-domain dialogue has been fully solved",
      "D) They are too easy to build and not worth researching"
    ],
    optionsChinese: [
      "A) 维持一致性、避免矛盾、保持话题、生成引人入胜的响应以及处理跨轮次的长期记忆",
      "B) 唯一的挑战是计算成本",
      "C) 开放域对话已完全解决",
      "D) 它们太容易构建，不值得研究"
    ],
    answer: 0,
    explanation: "Open-domain dialogue systems face multiple challenges: persona consistency (not contradicting previous statements), knowledge grounding (staying factually correct), engagement (avoiding generic responses like 'I don't know'), long-term memory (remembering earlier conversation topics), and safety (avoiding toxic or harmful outputs). Systems like BlenderBot address these through multi-task training on persona, knowledge, and empathy datasets.",
    explanationChinese: "开放域对话系统面临多个挑战：人设一致性（不与之前的陈述矛盾）、知识基础（保持事实正确）、参与度（避免'我不知道'等通用回复）、长期记忆（记住之前的对话话题）和安全性（避免有害输出）。BlenderBot等系统通过在人设、知识和共情数据集上进行多任务训练来解决这些问题。",
    diagram: "",
    terms: ["natural_language_processing", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 276,
    q: "What is intent detection in dialogue systems?",
    qChinese: "对话系统中的意图检测是什么？",
    options: [
      "A) Detecting whether the user is a human or bot",
      "B) Detecting the language of the user",
      "C) Classifying the user's utterance into a predefined intent category that represents the user's goal, such as 'book_flight' or 'check_weather'",
      "D) Determining the sentiment of the user"
    ],
    optionsChinese: [
      "A) 检测用户是人类还是机器人",
      "B) 检测用户的语言",
      "C) 将用户的话语分类到表示用户目标的预定义意图类别中，如'预订航班'或'查询天气'",
      "D) 确定用户的情感"
    ],
    answer: 2,
    explanation: "Intent detection is the classification component of NLU in dialogue systems. It maps a user's utterance to one of predefined intent categories. For example, 'I want to fly to New York tomorrow' maps to the 'book_flight' intent. Modern approaches fine-tune BERT-like models for joint intent detection and slot filling, achieving high accuracy on benchmarks like ATIS and SNIPS.",
    explanationChinese: "意图检测是对话系统中NLU的分类组件。它将用户的话语映射到预定义意图类别之一。例如，'我想明天飞往纽约'映射到'预订航班'意图。现代方法微调类BERT模型进行联合意图检测和槽填充，在ATIS和SNIPS等基准上达到高准确率。",
    diagram: "",
    terms: ["natural_language_processing", "text_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 277,
    q: "What is the persona-based dialogue approach?",
    qChinese: "什么是基于人设的对话方法？",
    options: [
      "A) Training a dialogue system with a defined set of personality traits or background facts to generate consistent and personalized responses",
      "B) Impersonating real people in conversations",
      "C) A system that always responds in third person",
      "D) A system that changes personality every turn"
    ],
    optionsChinese: [
      "A) 用一组定义的性格特征或背景事实训练对话系统，以生成一致和个性化的响应",
      "B) 在对话中冒充真实人物",
      "C) 始终以第三人称回复的系统",
      "D) 每轮改变个性的系统"
    ],
    answer: 0,
    explanation: "Persona-based dialogue, exemplified by the PersonaChat dataset, conditions response generation on a set of persona sentences (e.g., 'I am a vegetarian', 'I have two dogs'). This improves consistency and engagement by giving the model a coherent identity. Models trained this way produce fewer contradictions and more interesting, personalized responses.",
    explanationChinese: "基于人设的对话，以PersonaChat数据集为代表，在一组人设句子（如'我是素食主义者'、'我有两只狗'）上条件化响应生成。这通过赋予模型连贯的身份来提高一致性和参与度。以这种方式训练的模型产生更少的矛盾和更有趣、个性化的响应。",
    diagram: "",
    terms: ["natural_language_processing", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 278,
    q: "What is cross-lingual transfer learning in NLP?",
    qChinese: "NLP中的跨语言迁移学习是什么？",
    options: [
      "A) Transferring text from one document to another",
      "B) Training a model on data from one language (usually high-resource like English) and applying it to another language (usually low-resource) without target language training data",
      "C) Converting code between programming languages",
      "D) Teaching multiple models simultaneously"
    ],
    optionsChinese: [
      "A) 将文本从一个文档转移到另一个",
      "B) 在一种语言（通常是英语等高资源语言）的数据上训练模型并将其应用于另一种语言（通常是低资源语言），无需目标语言训练数据",
      "C) 在编程语言之间转换代码",
      "D) 同时教授多个模型"
    ],
    answer: 1,
    explanation: "Cross-lingual transfer leverages multilingual pre-trained models that learn shared representations across languages. A model fine-tuned for NER in English can be directly applied to German or Chinese with surprisingly good performance, because models like mBERT and XLM-R learn language-agnostic features during multilingual pre-training.",
    explanationChinese: "跨语言迁移利用学习跨语言共享表示的多语言预训练模型。在英语NER上微调的模型可以直接应用于德语或中文，效果出奇地好，因为mBERT和XLM-R等模型在多语言预训练期间学习了语言无关的特征。",
    diagram: "",
    terms: ["transformer", "natural_language_processing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 279,
    q: "What is mBERT (Multilingual BERT) and why was it a significant advancement?",
    qChinese: "什么是mBERT（多语言BERT），为什么它是一个重要进展？",
    options: [
      "A) A BERT model trained only on English but applied to other languages",
      "B) A model that translates between languages before processing",
      "C) A BERT model pre-trained on Wikipedia text from 104 languages with a shared vocabulary, showing surprising cross-lingual transfer abilities despite no explicit cross-lingual objective",
      "D) A smaller version of BERT for mobile devices"
    ],
    optionsChinese: [
      "A) 仅在英语上训练但应用于其他语言的BERT模型",
      "B) 在处理之前在语言之间翻译的模型",
      "C) 在来自104种语言的维基百科文本上预训练的BERT模型，使用共享词汇表，尽管没有显式跨语言目标却展示了令人惊讶的跨语言迁移能力",
      "D) 用于移动设备的较小版本BERT"
    ],
    answer: 2,
    explanation: "mBERT is a single BERT model pre-trained on concatenated Wikipedia data from 104 languages using a shared WordPiece vocabulary of 110K tokens. Despite having no explicit cross-lingual training signal (no parallel data or translation objective), it learns remarkably transferable representations across languages, enabling zero-shot cross-lingual transfer for tasks like NER and question answering.",
    explanationChinese: "mBERT是一个在来自104种语言的连接维基百科数据上预训练的单一BERT模型，使用110K标记的共享WordPiece词汇表。尽管没有显式的跨语言训练信号（无平行数据或翻译目标），它学习了跨语言的高度可迁移表示，使NER和问答等任务的零样本跨语言迁移成为可能。",
    diagram: "",
    terms: ["transformer", "word_embedding"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 280,
    q: "How does XLM-R (Cross-lingual Language Model - RoBERTa) improve upon mBERT?",
    qChinese: "XLM-R（跨语言语言模型-RoBERTa）如何改进了mBERT？",
    options: [
      "A) By using a smaller model",
      "B) By training on 2.5TB of cleaned CommonCrawl data in 100 languages with a larger vocabulary and more compute, significantly improving low-resource language performance",
      "C) By training only on English data",
      "D) By removing the Transformer architecture"
    ],
    optionsChinese: [
      "A) 使用更小的模型",
      "B) 在100种语言的2.5TB清洗CommonCrawl数据上训练，使用更大的词汇表和更多计算，显著提高了低资源语言的性能",
      "C) 仅在英语数据上训练",
      "D) 移除Transformer架构"
    ],
    answer: 1,
    explanation: "XLM-R, developed by Conneau et al. (2020), scales up multilingual pre-training using 2.5TB of CommonCrawl data across 100 languages (vs. mBERT's Wikipedia-only data). It uses a SentencePiece vocabulary of 250K tokens, removes language embeddings, and trains with RoBERTa's optimization. This leads to substantial gains especially for low-resource languages, outperforming mBERT on cross-lingual benchmarks like XNLI by 10+ points.",
    explanationChinese: "XLM-R由Conneau等人（2020年）开发，使用100种语言的2.5TB CommonCrawl数据（与mBERT仅使用维基百科数据相比）扩大多语言预训练。它使用250K标记的SentencePiece词汇表，移除语言嵌入，并使用RoBERTa的优化方法训练。这特别在低资源语言上带来了实质性提升，在XNLI等跨语言基准上超过mBERT 10+分。",
    diagram: "",
    terms: ["transformer", "word_embedding"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 281,
    q: "What is the 'curse of multilinguality' in multilingual models?",
    qChinese: "多语言模型中的'多语言诅咒'是什么？",
    options: [
      "A) Multilingual models are always better than monolingual ones",
      "B) It is impossible to train models on multiple languages",
      "C) Adding more languages to a fixed-capacity model eventually degrades per-language performance because the model must share its limited capacity across all languages",
      "D) Multilingual models can only handle two languages"
    ],
    optionsChinese: [
      "A) 多语言模型总是比单语言模型更好",
      "B) 不可能在多种语言上训练模型",
      "C) 向固定容量模型添加更多语言最终会降低每种语言的性能，因为模型必须在所有语言之间共享其有限容量",
      "D) 多语言模型只能处理两种语言"
    ],
    answer: 2,
    explanation: "The curse of multilinguality, identified by Conneau et al., refers to the tradeoff between language coverage and per-language performance in multilingual models. With a fixed model capacity, adding more languages eventually dilutes the model's ability to represent each language well. This can be mitigated by increasing model capacity, but high-resource languages still tend to perform better than monolingual baselines.",
    explanationChinese: "多语言诅咒由Conneau等人提出，指多语言模型中语言覆盖范围和每种语言性能之间的权衡。在固定模型容量下，添加更多语言最终会削弱模型良好表示每种语言的能力。这可以通过增加模型容量来缓解，但高资源语言仍然倾向于比单语言基线表现更好。",
    diagram: "",
    terms: ["transformer", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 282,
    q: "What is translate-train as a cross-lingual transfer strategy?",
    qChinese: "作为跨语言迁移策略的翻译-训练是什么？",
    options: [
      "A) Training a translation model first",
      "B) Translating the training data from a high-resource language into the target language using machine translation, then training the model on the translated data",
      "C) Training and translating simultaneously in one model",
      "D) Only translating the test data"
    ],
    optionsChinese: [
      "A) 首先训练翻译模型",
      "B) 使用机器翻译将训练数据从高资源语言翻译成目标语言，然后在翻译的数据上训练模型",
      "C) 在一个模型中同时训练和翻译",
      "D) 仅翻译测试数据"
    ],
    answer: 1,
    explanation: "Translate-train is a practical cross-lingual strategy where labeled training data (e.g., English NER data) is machine-translated into the target language, and a model is then trained on this synthetic data. While translation introduces noise, this approach often outperforms zero-shot transfer, especially when combined with multilingual pre-trained models. The alternative, translate-test, translates test inputs to English instead.",
    explanationChinese: "翻译-训练是一种实用的跨语言策略，将标注的训练数据（如英语NER数据）机器翻译成目标语言，然后在这些合成数据上训练模型。虽然翻译会引入噪声，但这种方法通常优于零样本迁移，特别是与多语言预训练模型结合时。替代方法翻译-测试则将测试输入翻译成英语。",
    diagram: "",
    terms: ["machine_translation", "natural_language_processing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 283,
    q: "What is language-agnostic BERT sentence embedding (LaBSE)?",
    qChinese: "什么是语言无关的BERT句子嵌入（LaBSE）？",
    options: [
      "A) A model trained with a dual-encoder framework and translation ranking loss to produce sentence embeddings that are aligned across 109 languages",
      "B) A BERT model that only works for English sentences",
      "C) A method for removing language information from BERT",
      "D) A sentence tokenizer for multiple languages"
    ],
    optionsChinese: [
      "A) 使用双编码器框架和翻译排名损失训练的模型，产生在109种语言之间对齐的句子嵌入",
      "B) 仅适用于英语句子的BERT模型",
      "C) 一种从BERT中删除语言信息的方法",
      "D) 多种语言的句子分词器"
    ],
    answer: 0,
    explanation: "LaBSE produces language-agnostic sentence embeddings by combining masked language model pre-training with a translation ranking objective using a dual-encoder architecture. Sentences that are translations of each other are mapped to nearby points in the embedding space across 109 languages. This enables applications like cross-lingual semantic search and bitext mining.",
    explanationChinese: "LaBSE通过将掩码语言模型预训练与使用双编码器架构的翻译排名目标相结合来产生语言无关的句子嵌入。互为翻译的句子在109种语言的嵌入空间中被映射到相近的点。这使跨语言语义搜索和双语文本挖掘等应用成为可能。",
    diagram: "",
    terms: ["transformer", "word_embedding"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 284,
    q: "What is bias in language models and where does it come from?",
    qChinese: "语言模型中的偏见是什么，它从哪里来？",
    options: [
      "A) Bias only exists in small models and is eliminated by scaling up",
      "B) Bias is intentionally programmed by developers",
      "C) Language models learn and amplify societal biases present in their training data, including stereotypes related to gender, race, religion, and other attributes",
      "D) Language models have no biases because they are mathematical"
    ],
    optionsChinese: [
      "A) 偏见只存在于小模型中，通过扩展可以消除",
      "B) 偏见是开发者故意编程的",
      "C) 语言模型学习并放大训练数据中存在的社会偏见，包括与性别、种族、宗教和其他属性相关的刻板印象",
      "D) 语言模型没有偏见，因为它们是数学的"
    ],
    answer: 2,
    explanation: "Language models trained on internet text inevitably absorb biases present in that data. Studies show that word embeddings encode gender stereotypes (e.g., associating 'nurse' with female, 'doctor' with male), and LLMs can generate racist, sexist, or otherwise biased content. These biases can cause real harm when deployed in hiring, lending, healthcare, or criminal justice applications.",
    explanationChinese: "在互联网文本上训练的语言模型不可避免地吸收数据中存在的偏见。研究表明，词嵌入编码了性别刻板印象（如将'护士'与女性、'医生'与男性关联），LLM可以生成种族主义、性别歧视或其他有偏见的内容。当部署在招聘、贷款、医疗或刑事司法应用中时，这些偏见会造成实际伤害。",
    diagram: "",
    terms: ["language_model", "word_embedding"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 285,
    q: "What is 'hallucination' in the context of large language models?",
    qChinese: "在大语言模型背景下，什么是'幻觉'？",
    options: [
      "A) The model seeing visual hallucinations",
      "B) A hardware malfunction causing random outputs",
      "C) The model generating plausible-sounding but factually incorrect or fabricated information that is not grounded in the input or real-world knowledge",
      "D) The model refusing to generate any output"
    ],
    optionsChinese: [
      "A) 模型看到视觉幻觉",
      "B) 硬件故障导致随机输出",
      "C) 模型生成听起来合理但事实不正确或编造的信息，这些信息没有基于输入或现实世界知识",
      "D) 模型拒绝生成任何输出"
    ],
    answer: 2,
    explanation: "Hallucination occurs when LLMs generate content that is fluent and confident-sounding but factually wrong. This includes fabricating citations, inventing historical events, or stating incorrect facts. It stems from the model optimizing for plausibility rather than truthfulness. Mitigation strategies include retrieval augmentation (RAG), fact verification chains, and training with factuality-focused objectives.",
    explanationChinese: "当LLM生成流畅且听起来自信但事实错误的内容时就发生了幻觉。这包括编造引用、虚构历史事件或陈述不正确的事实。这源于模型优化合理性而非真实性。缓解策略包括检索增强（RAG）、事实验证链和使用以事实性为焦点的目标进行训练。",
    diagram: "",
    terms: ["language_model", "natural_language_processing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 286,
    q: "What is toxicity in language model outputs and how is it measured?",
    qChinese: "语言模型输出中的毒性是什么，如何衡量？",
    options: [
      "A) Toxic outputs include hate speech, threats, profanity, and offensive content; they are measured using classifiers like Perspective API and toxicity benchmarks like RealToxicityPrompts",
      "B) The computational cost of running the model",
      "C) The amount of memory the model uses",
      "D) How quickly the model degrades over time"
    ],
    optionsChinese: [
      "A) 有毒输出包括仇恨言论、威胁、亵渎和攻击性内容；使用Perspective API等分类器和RealToxicityPrompts等毒性基准进行衡量",
      "B) 运行模型的计算成本",
      "C) 模型使用的内存量",
      "D) 模型随时间退化的速度"
    ],
    answer: 0,
    explanation: "Toxicity refers to language model outputs that are offensive, harmful, or inappropriate. The RealToxicityPrompts benchmark by Gehman et al. (2020) showed that even non-toxic prompts can lead to toxic completions in GPT-2. Measurement tools include Perspective API's toxicity classifier. Mitigation approaches include RLHF, output filtering, and detoxification fine-tuning.",
    explanationChinese: "毒性指语言模型输出中攻击性、有害或不当的内容。Gehman等人（2020年）的RealToxicityPrompts基准表明，即使非毒性的提示也可能导致GPT-2产生有毒的续写。衡量工具包括Perspective API的毒性分类器。缓解方法包括RLHF、输出过滤和去毒微调。",
    diagram: "",
    terms: ["language_model", "natural_language_processing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 287,
    q: "What is the concept of 'fairness' in NLP systems?",
    qChinese: "NLP系统中'公平性'的概念是什么？",
    options: [
      "A) Ensuring that NLP systems do not discriminate against or disproportionately harm particular demographic groups, with equal performance and treatment across groups",
      "B) Making sure the system performs equally fast for all users",
      "C) Ensuring all models have the same number of parameters",
      "D) Distributing training data equally among researchers"
    ],
    optionsChinese: [
      "A) 确保NLP系统不歧视或不成比例地伤害特定人口群体，在各群体间实现平等的性能和待遇",
      "B) 确保系统为所有用户运行同样快",
      "C) 确保所有模型具有相同数量的参数",
      "D) 在研究人员之间平等分配训练数据"
    ],
    answer: 0,
    explanation: "Fairness in NLP requires that systems perform equitably across demographic groups. This includes demographic parity (equal positive prediction rates), equalized odds (equal error rates across groups), and individual fairness (similar individuals receive similar outcomes). NLP systems can be unfair due to biased training data, unequal data representation, or evaluation metrics that mask disparate performance.",
    explanationChinese: "NLP中的公平性要求系统在各人口群体间公平地运行。这包括人口统计均等（相等的正预测率）、均等赔率（各群体间相等的错误率）和个体公平性（相似的个体获得相似的结果）。NLP系统可能因有偏见的训练数据、不平等的数据表示或掩盖不同性能的评估指标而不公平。",
    diagram: "",
    terms: ["natural_language_processing", "text_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 288,
    q: "What are debiasing techniques for word embeddings?",
    qChinese: "词嵌入的去偏见技术有哪些？",
    options: [
      "A) Removing all gendered words from the vocabulary",
      "B) Using only one language for training",
      "C) Increasing the embedding dimension",
      "D) Post-processing methods like projecting embeddings to remove bias directions, or training-time approaches like counterfactual data augmentation"
    ],
    optionsChinese: [
      "A) 从词汇表中删除所有性别词",
      "B) 仅使用一种语言进行训练",
      "C) 增加嵌入维度",
      "D) 后处理方法如投影嵌入以去除偏见方向，或训练时方法如反事实数据增强"
    ],
    answer: 3,
    explanation: "Bolukbasi et al. (2016) proposed identifying a 'gender direction' in embedding space and projecting gender-neutral words to remove this component. Other approaches include counterfactual data augmentation (swapping gendered terms in training data), equalized embeddings, and adversarial training. However, critics note that simple debiasing may hide rather than eliminate bias, as it can still be recovered from the embeddings.",
    explanationChinese: "Bolukbasi等人（2016年）提出在嵌入空间中识别'性别方向'并投影性别中性词以去除该成分。其他方法包括反事实数据增强（在训练数据中交换性别术语）、均衡化嵌入和对抗训练。然而，批评者指出简单的去偏见可能隐藏而非消除偏见，因为仍然可以从嵌入中恢复。",
    diagram: "",
    terms: ["word_embedding", "natural_language_processing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 289,
    q: "What are the environmental concerns associated with training large language models?",
    qChinese: "与训练大语言模型相关的环境问题有哪些？",
    options: [
      "A) Large models have no environmental impact",
      "B) The only concern is electricity cost",
      "C) Training large models requires massive compute, leading to significant carbon emissions; Strubell et al. estimated that training a large Transformer produces CO2 comparable to five cars' lifetime emissions",
      "D) Environmental concerns only apply to models trained before 2020"
    ],
    optionsChinese: [
      "A) 大型模型没有环境影响",
      "B) 唯一的担忧是电力成本",
      "C) 训练大型模型需要大量计算，导致显著的碳排放；Strubell等人估计训练一个大型Transformer产生的CO2相当于五辆汽车一生的排放",
      "D) 环境问题仅适用于2020年之前训练的模型"
    ],
    answer: 2,
    explanation: "Strubell et al. (2019) highlighted the enormous energy costs of training large NLP models, estimating that training a large Transformer with neural architecture search emitted 284 tons of CO2 — roughly equivalent to five cars' lifetime emissions. This has spurred research into efficient training methods, model distillation, and the use of renewable energy for data centers.",
    explanationChinese: "Strubell等人（2019年）强调了训练大型NLP模型的巨大能源成本，估计使用神经架构搜索训练一个大型Transformer排放了284吨CO2——大约相当于五辆汽车一生的排放。这推动了对高效训练方法、模型蒸馏和数据中心使用可再生能源的研究。",
    diagram: "",
    terms: ["transformer", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 290,
    q: "What is entity linking in the context of NLP and knowledge graphs?",
    qChinese: "在NLP和知识图谱背景下，什么是实体链接？",
    options: [
      "A) The task of mapping entity mentions in text to their corresponding entries in a knowledge base like Wikipedia or Wikidata",
      "B) Linking two documents that mention the same topic",
      "C) Creating hyperlinks between web pages",
      "D) Connecting two neural network layers"
    ],
    optionsChinese: [
      "A) 将文本中的实体提及映射到知识库（如维基百科或Wikidata）中对应条目的任务",
      "B) 链接提到相同话题的两个文档",
      "C) 在网页之间创建超链接",
      "D) 连接两个神经网络层"
    ],
    answer: 0,
    explanation: "Entity linking (also called entity disambiguation or wikification) resolves ambiguous entity mentions in text to specific knowledge base entries. For example, 'Apple' could refer to Apple Inc. or the fruit, and the system must determine the correct entity based on context. It involves candidate generation (finding possible KB entries) and entity disambiguation (selecting the correct one).",
    explanationChinese: "实体链接（也称实体消歧或维基化）将文本中模糊的实体提及解析到特定的知识库条目。例如，'Apple'可能指苹果公司或水果，系统必须根据上下文确定正确的实体。它涉及候选生成（查找可能的知识库条目）和实体消歧（选择正确的条目）。",
    diagram: "",
    terms: ["natural_language_processing", "word_embedding"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 291,
    q: "What is knowledge-grounded text generation?",
    qChinese: "什么是知识支撑的文本生成？",
    options: [
      "A) Generating text without any knowledge",
      "B) Grounding text in physical reality through robotics",
      "C) Generating text by conditioning on structured knowledge from knowledge graphs or unstructured knowledge from documents to produce factually accurate and informative outputs",
      "D) Generating knowledge graphs from text"
    ],
    optionsChinese: [
      "A) 不使用任何知识生成文本",
      "B) 通过机器人将文本基于物理现实",
      "C) 通过在知识图谱的结构化知识或文档的非结构化知识上进行条件化来生成事实准确和信息丰富的输出",
      "D) 从文本生成知识图谱"
    ],
    answer: 2,
    explanation: "Knowledge-grounded generation incorporates external knowledge into the text generation process. This can involve retrieving relevant knowledge graph triples or documents and conditioning the generator on this information. This approach reduces hallucination and enables the model to discuss topics beyond its training data. Examples include KILT benchmark tasks and knowledge-grounded dialogue systems.",
    explanationChinese: "知识支撑的生成将外部知识纳入文本生成过程。这可以涉及检索相关的知识图谱三元组或文档，并在这些信息上条件化生成器。这种方法减少了幻觉，使模型能够讨论超出其训练数据的话题。例子包括KILT基准任务和知识支撑的对话系统。",
    diagram: "",
    terms: ["language_model", "natural_language_processing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 292,
    q: "What is a knowledge graph and what are its basic components?",
    qChinese: "什么是知识图谱，它的基本组成部分是什么？",
    options: [
      "A) A visualization of neural network weights",
      "B) A chart showing model training progress",
      "C) A graph database where nodes represent entities and edges represent relations between them, storing facts as (subject, predicate, object) triples",
      "D) A type of social media network"
    ],
    optionsChinese: [
      "A) 神经网络权重的可视化",
      "B) 显示模型训练进度的图表",
      "C) 一个图数据库，其中节点代表实体，边代表它们之间的关系，将事实存储为（主语、谓语、宾语）三元组",
      "D) 一种社交媒体网络"
    ],
    answer: 2,
    explanation: "A knowledge graph stores structured world knowledge as a graph of entities (nodes) connected by typed relations (edges). Facts are represented as (subject, predicate, object) triples, e.g., (Paris, capital-of, France). Major knowledge graphs include Wikidata (90M+ entities), Freebase, and DBpedia. They enable applications like question answering, recommendation, and fact verification.",
    explanationChinese: "知识图谱将结构化的世界知识存储为由类型化关系（边）连接的实体（节点）图。事实表示为（主语、谓语、宾语）三元组，例如（Paris, capital-of, France）。主要知识图谱包括Wikidata（9000万+实体）、Freebase和DBpedia。它们支持问答、推荐和事实验证等应用。",
    diagram: "",
    terms: ["natural_language_processing", "word_embedding"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 293,
    q: "What is knowledge graph embedding?",
    qChinese: "什么是知识图谱嵌入？",
    options: [
      "A) Physically embedding a graph into a circuit board",
      "B) Embedding text documents into a graph structure",
      "C) Learning continuous vector representations of entities and relations in a knowledge graph such that the geometric structure preserves the graph's relational patterns",
      "D) Converting knowledge graphs to natural language"
    ],
    optionsChinese: [
      "A) 将图物理嵌入电路板",
      "B) 将文本文档嵌入图结构",
      "C) 学习知识图谱中实体和关系的连续向量表示，使几何结构保留图的关系模式",
      "D) 将知识图谱转换为自然语言"
    ],
    answer: 2,
    explanation: "Knowledge graph embedding methods like TransE, DistMult, and RotatE learn low-dimensional vector representations of entities and relations. TransE models relations as translations (head + relation ≈ tail), while RotatE uses rotation in complex space. These embeddings enable link prediction (predicting missing triples), entity classification, and integration with neural NLP models.",
    explanationChinese: "知识图谱嵌入方法如TransE、DistMult和RotatE学习实体和关系的低维向量表示。TransE将关系建模为平移（头+关系≈尾），而RotatE使用复数空间中的旋转。这些嵌入支持链接预测（预测缺失三元组）、实体分类以及与神经NLP模型的集成。",
    diagram: "",
    terms: ["word_embedding", "natural_language_processing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 294,
    q: "What is knowledge graph completion (link prediction)?",
    qChinese: "什么是知识图谱补全（链接预测）？",
    options: [
      "A) Deleting incorrect triples from a knowledge graph",
      "B) Predicting missing relations or entities in a knowledge graph by inferring new facts from existing ones",
      "C) Completing sentences using knowledge graphs",
      "D) Visualizing the complete knowledge graph"
    ],
    optionsChinese: [
      "A) 从知识图谱中删除不正确的三元组",
      "B) 通过从现有事实推断新事实来预测知识图谱中缺失的关系或实体",
      "C) 使用知识图谱完成句子",
      "D) 可视化完整的知识图谱"
    ],
    answer: 1,
    explanation: "Knowledge graph completion predicts missing links in a KG. Given (Obama, born-in, ?) the system should predict 'Honolulu', or given (?, president-of, USA) it should predict 'Biden'. Methods include embedding-based approaches (TransE, ComplEx), graph neural networks, and rule-based reasoning. This is crucial because even large KGs like Wikidata are highly incomplete.",
    explanationChinese: "知识图谱补全预测知识图谱中缺失的链接。给定（Obama, born-in, ?）系统应预测'Honolulu'，或给定（?, president-of, USA）应预测'Biden'。方法包括基于嵌入的方法（TransE、ComplEx）、图神经网络和基于规则的推理。这很关键，因为即使像Wikidata这样的大型知识图谱也是高度不完整的。",
    diagram: "",
    terms: ["word_embedding", "natural_language_processing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 295,
    q: "How can knowledge graphs be integrated with large language models?",
    qChinese: "知识图谱如何与大语言模型集成？",
    options: [
      "A) They cannot be combined",
      "B) By replacing the LLM with a knowledge graph entirely",
      "C) Through approaches like retrieving relevant KG triples as context, using KG-enhanced pre-training objectives, or verifying LLM outputs against KG facts",
      "D) Only by converting the knowledge graph to plain text"
    ],
    optionsChinese: [
      "A) 它们无法结合",
      "B) 用知识图谱完全替换LLM",
      "C) 通过检索相关知识图谱三元组作为上下文、使用知识图谱增强的预训练目标或针对知识图谱事实验证LLM输出等方法",
      "D) 仅通过将知识图谱转换为纯文本"
    ],
    answer: 2,
    explanation: "KG-LLM integration takes multiple forms: (1) retrieval-augmented approaches that fetch relevant KG triples to include in the prompt, (2) KG-enhanced pre-training like ERNIE that integrates entity embeddings during pre-training, (3) fact verification by checking LLM claims against KG facts, and (4) using LLMs for KG construction and completion. This combination leverages the strengths of both structured knowledge and language understanding.",
    explanationChinese: "知识图谱-LLM集成采取多种形式：(1)检索增强方法，获取相关知识图谱三元组包含在提示中；(2)知识图谱增强预训练，如ERNIE在预训练期间集成实体嵌入；(3)通过对照知识图谱事实检查LLM声明进行事实验证；(4)使用LLM进行知识图谱构建和补全。这种组合利用了结构化知识和语言理解的优势。",
    diagram: "",
    terms: ["language_model", "natural_language_processing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 296,
    q: "What is the BLEU (Bilingual Evaluation Understudy) metric and how does it work?",
    qChinese: "BLEU（双语评估替补）指标是什么，它如何工作？",
    options: [
      "A) A precision-based metric that computes n-gram overlap between a candidate translation and reference translations, using a brevity penalty to discourage overly short outputs",
      "B) A metric that measures translation speed",
      "C) A recall-based metric for summarization",
      "D) A metric that measures grammatical correctness"
    ],
    optionsChinese: [
      "A) 基于精确率的指标，计算候选翻译和参考翻译之间的n-gram重叠，使用简短惩罚来阻止过短的输出",
      "B) 衡量翻译速度的指标",
      "C) 用于摘要的基于召回率的指标",
      "D) 衡量语法正确性的指标"
    ],
    answer: 0,
    explanation: "BLEU, proposed by Papineni et al. (2002), computes modified n-gram precision (typically n=1 to 4) between candidate and reference texts, combined as a geometric mean. A brevity penalty penalizes translations shorter than the reference. While widely used in MT, BLEU has limitations: it ignores recall, synonyms, sentence structure, and correlates poorly with human judgment at the sentence level.",
    explanationChinese: "BLEU由Papineni等人（2002年）提出，计算候选文本和参考文本之间的修正n-gram精确率（通常n=1到4），组合为几何平均。简短惩罚惩罚比参考短的翻译。虽然在机器翻译中广泛使用，BLEU有局限性：它忽略召回率、同义词、句子结构，在句子级别与人类判断的相关性较差。",
    diagram: "",
    terms: ["machine_translation", "natural_language_processing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 297,
    q: "What is the ROUGE metric and what NLP task is it primarily used for?",
    qChinese: "ROUGE指标是什么，它主要用于什么NLP任务？",
    options: [
      "A) A recall-oriented metric primarily used for evaluating text summarization, measuring n-gram overlap between system summaries and reference summaries",
      "B) A metric for measuring model training speed",
      "C) A metric for evaluating sentiment analysis",
      "D) A metric for machine translation that measures precision"
    ],
    optionsChinese: [
      "A) 主要用于评估文本摘要的面向召回率的指标，衡量系统摘要和参考摘要之间的n-gram重叠",
      "B) 衡量模型训练速度的指标",
      "C) 评估情感分析的指标",
      "D) 衡量精确率的机器翻译指标"
    ],
    answer: 0,
    explanation: "ROUGE (Recall-Oriented Understudy for Gisting Evaluation), proposed by Lin (2004), focuses on recall of n-grams. ROUGE-N measures n-gram recall, ROUGE-L uses longest common subsequence, and ROUGE-S uses skip-bigrams. Unlike BLEU's precision focus, ROUGE emphasizes how much of the reference content is captured in the summary, making it the standard metric for summarization evaluation.",
    explanationChinese: "ROUGE（面向召回率的摘要评估替补）由Lin（2004年）提出，专注于n-gram的召回率。ROUGE-N衡量n-gram召回率，ROUGE-L使用最长公共子序列，ROUGE-S使用跳跃双元组。与BLEU的精确率焦点不同，ROUGE强调参考内容有多少被摘要捕获，使其成为摘要评估的标准指标。",
    diagram: "",
    terms: ["natural_language_processing", "text_classification"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 298,
    q: "What is BERTScore and how does it improve upon traditional n-gram metrics?",
    qChinese: "BERTScore是什么，它如何改进了传统的n-gram指标？",
    options: [
      "A) It is identical to BLEU but faster",
      "B) It scores how well BERT can classify the text",
      "C) It computes semantic similarity between candidate and reference texts using contextual embeddings from BERT, capturing meaning beyond exact word matches",
      "D) It measures the perplexity of BERT on the text"
    ],
    optionsChinese: [
      "A) 它与BLEU相同但更快",
      "B) 它评分BERT对文本分类的好坏",
      "C) 它使用BERT的上下文嵌入计算候选文本和参考文本之间的语义相似度，捕获超越精确词匹配的含义",
      "D) 它衡量BERT在文本上的困惑度"
    ],
    answer: 2,
    explanation: "BERTScore, proposed by Zhang et al. (2020), computes token-level similarity using contextual embeddings from pre-trained models like BERT. It performs greedy matching between candidate and reference tokens in embedding space, computing precision, recall, and F1. Unlike BLEU/ROUGE which require exact n-gram matches, BERTScore captures paraphrases and semantic equivalence, correlating much better with human judgment.",
    explanationChinese: "BERTScore由Zhang等人（2020年）提出，使用BERT等预训练模型的上下文嵌入计算标记级相似度。它在嵌入空间中对候选和参考标记执行贪心匹配，计算精确率、召回率和F1。与需要精确n-gram匹配的BLEU/ROUGE不同，BERTScore捕获改述和语义等价性，与人类判断的相关性更好。",
    diagram: "",
    terms: ["transformer", "word_embedding"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 299,
    q: "Why is human evaluation still considered essential for NLP systems despite the availability of automatic metrics?",
    qChinese: "尽管有自动指标可用，为什么人类评估仍被认为对NLP系统至关重要？",
    options: [
      "A) Human evaluation is cheaper than automatic metrics",
      "B) Automatic metrics often fail to capture important qualities like fluency, coherence, factual accuracy, and overall usefulness that humans can readily assess",
      "C) Automatic metrics are always perfect and human evaluation is unnecessary",
      "D) Human evaluation is only needed for translation tasks"
    ],
    optionsChinese: [
      "A) 人类评估比自动指标便宜",
      "B) 自动指标经常无法捕捉人类可以轻松评估的重要质量，如流畅性、连贯性、事实准确性和整体有用性",
      "C) 自动指标总是完美的，不需要人类评估",
      "D) 人类评估仅用于翻译任务"
    ],
    answer: 1,
    explanation: "Automatic metrics like BLEU and ROUGE have known limitations: they miss synonyms, cannot assess factual accuracy, and correlate imperfectly with human judgment. Human evaluation captures nuanced qualities like naturalness, informativeness, and safety. Common approaches include Likert scale ratings, pairwise comparisons (A/B testing), and the Chatbot Arena Elo ranking system. The main drawbacks are cost, time, and inter-annotator variability.",
    explanationChinese: "BLEU和ROUGE等自动指标有已知的局限性：它们忽略同义词，无法评估事实准确性，与人类判断的相关性不完美。人类评估捕获细微的质量，如自然性、信息量和安全性。常用方法包括Likert量表评分、成对比较（A/B测试）和Chatbot Arena Elo排名系统。主要缺点是成本、时间和标注者间的变异性。",
    diagram: "",
    terms: ["natural_language_processing", "language_model"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 300,
    q: "What is perplexity as an evaluation metric for language models?",
    qChinese: "困惑度作为语言模型的评估指标是什么？",
    options: [
      "A) A measure of how confused the developer is",
      "B) The number of unique words the model can generate",
      "C) The exponentiation of the average negative log-likelihood per token; lower perplexity indicates the model assigns higher probability to the test data",
      "D) A measure of computational complexity"
    ],
    optionsChinese: [
      "A) 衡量开发者困惑程度",
      "B) 模型可以生成的唯一词数",
      "C) 每个标记的平均负对数似然的指数；较低的困惑度表示模型对测试数据赋予更高的概率",
      "D) 计算复杂度的衡量"
    ],
    answer: 2,
    explanation: "Perplexity (PPL) equals 2^H(p,q) where H is the cross-entropy between the true distribution and the model. Intuitively, it represents the effective number of equally likely next-word choices the model considers. A perplexity of 10 means the model is as uncertain as choosing uniformly among 10 words. Lower perplexity indicates better language modeling, but it does not directly measure task-specific quality like factuality or safety.",
    explanationChinese: "困惑度（PPL）等于2^H(p,q)，其中H是真实分布和模型之间的交叉熵。直觉上，它代表模型考虑的等概率下一个词选择的有效数量。困惑度为10意味着模型的不确定性相当于在10个词中均匀选择。较低的困惑度表示更好的语言建模，但它不直接衡量任务特定的质量，如事实性或安全性。",
    diagram: "",
    terms: ["language_model", "natural_language_processing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  }
];
