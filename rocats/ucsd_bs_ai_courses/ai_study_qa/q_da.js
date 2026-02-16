const questionsDA = [
  {
    id: 1,
    q: "What is the worst-case time complexity of searching in an unbalanced binary search tree?",
    qChinese: "在不平衡的二叉搜索树中搜索的最坏时间复杂度是多少？",
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
    explanation: "An unbalanced BST can degenerate into a linked list where every node has only one child. In this worst case, searching requires traversing all n nodes sequentially, giving O(n) time complexity instead of the ideal O(log n) of a balanced tree.",
    explanationChinese: "不平衡的BST可能退化为链表，每个节点只有一个子节点。在这种最坏情况下，搜索需要顺序遍历所有n个节点，时间复杂度为O(n)，而非平衡树理想的O(log n)。",
    diagram: "",
    terms: ["binary_search_tree", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 2,
    q: "In a BST, which traversal visits nodes in sorted (ascending) order?",
    qChinese: "在BST中，哪种遍历方式按升序访问节点？",
    options: [
      "A) Preorder",
      "B) Inorder",
      "C) Postorder",
      "D) Level-order"
    ],
    optionsChinese: [
      "A) 前序遍历",
      "B) 中序遍历",
      "C) 后序遍历",
      "D) 层序遍历"
    ],
    answer: 1,
    explanation: "Inorder traversal of a BST visits the left subtree, then the current node, then the right subtree. Because the BST property ensures left children are smaller and right children are larger, inorder traversal naturally produces elements in ascending sorted order.",
    explanationChinese: "BST的中序遍历先访问左子树，再访问当前节点，最后访问右子树。由于BST的性质保证左子节点较小、右子节点较大，中序遍历自然按升序产生元素。",
    diagram: "",
    terms: ["binary_search_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 3,
    q: "What is the height of an AVL tree with n nodes in the worst case?",
    qChinese: "含n个节点的AVL树在最坏情况下的高度是多少？",
    options: [
      "A) O(n)",
      "B) O(n log n)",
      "C) O(log n)",
      "D) O(sqrt(n))"
    ],
    optionsChinese: [
      "A) O(n)",
      "B) O(n log n)",
      "C) O(log n)",
      "D) O(sqrt(n))"
    ],
    answer: 2,
    explanation: "AVL trees maintain a balance factor of at most 1 between the heights of left and right subtrees at every node. This strict balancing guarantees the height is always O(log n), ensuring efficient search, insertion, and deletion operations in logarithmic time.",
    explanationChinese: "AVL树在每个节点维持左右子树高度差最多为1的平衡因子。这种严格的平衡保证高度始终为O(log n)，确保搜索、插入和删除操作在对数时间内高效完成。",
    diagram: "",
    terms: ["binary_search_tree", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 4,
    q: "Which rotation is needed when a node is inserted into the right subtree of the right child causing an AVL imbalance?",
    qChinese: "当一个节点插入到右子节点的右子树中导致AVL不平衡时，需要哪种旋转？",
    options: [
      "A) Right-Left rotation",
      "B) Right rotation",
      "C) Left-Right rotation",
      "D) Left rotation"
    ],
    optionsChinese: [
      "A) 右左旋",
      "B) 右旋",
      "C) 左右旋",
      "D) 左旋"
    ],
    answer: 3,
    explanation: "A right-right imbalance (insertion into the right subtree of the right child) is fixed with a single left rotation. This rotation moves the right child up to replace the unbalanced node, restoring the AVL balance property efficiently in O(1) time.",
    explanationChinese: "右右不平衡（插入到右子节点的右子树）通过单次左旋修复。左旋将右子节点上移替换不平衡节点，在O(1)时间内高效恢复AVL平衡性质。",
    diagram: "",
    terms: ["binary_search_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 5,
    q: "In a Red-Black tree, what color must the root node always be?",
    qChinese: "在红黑树中，根节点必须始终是什么颜色？",
    options: [
      "A) Red",
      "B) Black",
      "C) Either red or black",
      "D) Depends on the number of nodes"
    ],
    optionsChinese: [
      "A) 红色",
      "B) 黑色",
      "C) 红色或黑色均可",
      "D) 取决于节点数量"
    ],
    answer: 1,
    explanation: "One of the fundamental properties of a Red-Black tree is that the root must always be black. This property, combined with the rule that red nodes cannot have red children and all paths have equal black height, ensures the tree remains approximately balanced.",
    explanationChinese: "红黑树的基本性质之一是根节点必须始终为黑色。此性质与红色节点不能有红色子节点以及所有路径黑色高度相等的规则一起，确保树保持近似平衡。",
    diagram: "",
    terms: ["red_black_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 6,
    q: "What is the maximum number of children a node can have in a binary search tree?",
    qChinese: "二叉搜索树中一个节点最多可以有多少个子节点？",
    options: [
      "A) 2",
      "B) 1",
      "C) 3",
      "D) Unlimited"
    ],
    optionsChinese: [
      "A) 2个",
      "B) 1个",
      "C) 3个",
      "D) 无限制"
    ],
    answer: 0,
    explanation: "A binary search tree is a type of binary tree, meaning each node can have at most two children: a left child and a right child. The left child holds values less than the parent, and the right child holds values greater than the parent node.",
    explanationChinese: "二叉搜索树是一种二叉树，意味着每个节点最多有两个子节点：左子节点和右子节点。左子节点保存比父节点小的值，右子节点保存比父节点大的值。",
    diagram: "",
    terms: ["binary_search_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 7,
    q: "When deleting a node with two children in a BST, which node typically replaces it?",
    qChinese: "在BST中删除有两个子节点的节点时，通常用哪个节点替换？",
    options: [
      "A) The left child",
      "B) The right child",
      "C) The inorder successor or predecessor",
      "D) The parent node"
    ],
    optionsChinese: [
      "A) 左子节点",
      "B) 右子节点",
      "C) 中序后继或前驱",
      "D) 父节点"
    ],
    answer: 2,
    explanation: "When deleting a node with two children, we replace it with its inorder successor (smallest node in the right subtree) or inorder predecessor (largest node in the left subtree). This preserves the BST property since the replacement maintains correct ordering.",
    explanationChinese: "删除有两个子节点的节点时，用其中序后继（右子树最小节点）或中序前驱（左子树最大节点）替换。这保持了BST性质，因为替换节点维持正确的排序顺序。",
    diagram: "",
    terms: ["binary_search_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 8,
    q: "What is the balance factor of a node in an AVL tree?",
    qChinese: "AVL树中节点的平衡因子是什么？",
    options: [
      "A) Depth of node divided by height",
      "B) Number of left children minus right children",
      "C) Height of left subtree minus height of right subtree",
      "D) Number of nodes in left subtree minus right subtree"
    ],
    optionsChinese: [
      "A) 节点深度除以高度",
      "B) 左子节点数减去右子节点数",
      "C) 左子树高度减去右子树高度",
      "D) 左子树节点数减去右子树节点数"
    ],
    answer: 2,
    explanation: "The balance factor of a node in an AVL tree is defined as the height of its left subtree minus the height of its right subtree. For an AVL tree to remain balanced, this factor must be -1, 0, or 1 at every node in the tree.",
    explanationChinese: "AVL树中节点的平衡因子定义为其左子树高度减去右子树高度。为保持AVL树的平衡，每个节点的平衡因子必须为-1、0或1。",
    diagram: "",
    terms: ["binary_search_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 9,
    q: "Which double rotation fixes a left-right imbalance in an AVL tree?",
    qChinese: "哪种双旋转可以修复AVL树中的左右不平衡？",
    options: [
      "A) Two left rotations",
      "B) Two right rotations",
      "C) Left rotation then right rotation",
      "D) Right rotation then left rotation"
    ],
    optionsChinese: [
      "A) 两次左旋",
      "B) 两次右旋",
      "C) 先左旋再右旋",
      "D) 先右旋再左旋"
    ],
    answer: 2,
    explanation: "A left-right imbalance occurs when insertion is in the right subtree of the left child. The fix requires a left rotation on the left child followed by a right rotation on the unbalanced node. This double rotation restores the AVL balance property at that node.",
    explanationChinese: "左右不平衡发生在插入到左子节点的右子树时。修复需要先对左子节点进行左旋，再对不平衡节点进行右旋。这种双旋转恢复该节点的AVL平衡性质。",
    diagram: "",
    terms: ["binary_search_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 10,
    q: "In a Red-Black tree, what is the maximum ratio of the longest path to the shortest path from root to any leaf?",
    qChinese: "在红黑树中，从根到任意叶子的最长路径与最短路径的最大比率是多少？",
    options: [
      "A) 1:1",
      "B) 2:1",
      "C) 3:1",
      "D) log n : 1"
    ],
    optionsChinese: [
      "A) 1:1",
      "B) 2:1",
      "C) 3:1",
      "D) log n : 1"
    ],
    answer: 1,
    explanation: "In a Red-Black tree, the longest path can be at most twice the length of the shortest path. This is because all paths have the same black height, and red nodes cannot be consecutive, so the longest path alternates red and black while the shortest is all black.",
    explanationChinese: "在红黑树中，最长路径最多是最短路径的两倍。因为所有路径有相同的黑色高度，且红色节点不能连续，所以最长路径红黑交替，而最短路径全为黑色。",
    diagram: "",
    terms: ["red_black_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 11,
    q: "Which property is NOT required for a valid Red-Black tree?",
    qChinese: "以下哪个性质不是有效红黑树所要求的？",
    options: [
      "A) Every node must have exactly two children",
      "B) Root is black",
      "C) Red node cannot have red children",
      "D) Every node is red or black"
    ],
    optionsChinese: [
      "A) 每个节点必须恰好有两个子节点",
      "B) 根节点是黑色",
      "C) 红色节点不能有红色子节点",
      "D) 每个节点是红色或黑色"
    ],
    answer: 0,
    explanation: "Red-Black trees do not require every node to have exactly two children. Nodes can have zero, one, or two children. The actual properties are: nodes are red or black, root is black, no consecutive red nodes, and all paths to null leaves have equal black height.",
    explanationChinese: "红黑树不要求每个节点恰好有两个子节点。节点可以有零个、一个或两个子节点。实际性质是：节点为红或黑，根为黑色，无连续红节点，到空叶子的所有路径黑色高度相等。",
    diagram: "",
    terms: ["red_black_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 12,
    q: "What is the time complexity of inserting a node into an AVL tree?",
    qChinese: "在AVL树中插入节点的时间复杂度是多少？",
    options: [
      "A) O(1)",
      "B) O(n log n)",
      "C) O(n)",
      "D) O(log n)"
    ],
    optionsChinese: [
      "A) O(1)",
      "B) O(n log n)",
      "C) O(n)",
      "D) O(log n)"
    ],
    answer: 3,
    explanation: "Inserting into an AVL tree takes O(log n) time. First, we traverse down the tree to find the insertion point in O(log n). Then, we may need to perform at most two rotations while backtracking up, each taking O(1), so the total remains O(log n).",
    explanationChinese: "在AVL树中插入需要O(log n)时间。首先在O(log n)内向下遍历找到插入点。然后回溯时最多执行两次旋转，每次O(1)，所以总时间仍为O(log n)。",
    diagram: "",
    terms: ["binary_search_tree", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 13,
    q: "How many rotations are needed at most to fix an AVL tree after a single insertion?",
    qChinese: "在AVL树中单次插入后，最多需要多少次旋转来修复？",
    options: [
      "A) 0",
      "B) 2",
      "C) 1",
      "D) O(log n)"
    ],
    optionsChinese: [
      "A) 0次",
      "B) 2次",
      "C) 1次",
      "D) O(log n)次"
    ],
    answer: 1,
    explanation: "After a single insertion in an AVL tree, at most two rotations (a double rotation) are needed to restore balance. A single imbalance case (LL or RR) requires one rotation, while a double imbalance case (LR or RL) requires two rotations to fix.",
    explanationChinese: "在AVL树中单次插入后，最多需要两次旋转（双旋转）来恢复平衡。单一不平衡情况（LL或RR）需要一次旋转，双重不平衡情况（LR或RL）需要两次旋转来修复。",
    diagram: "",
    terms: ["binary_search_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 14,
    q: "What is the minimum number of nodes in an AVL tree of height h?",
    qChinese: "高度为h的AVL树的最少节点数是多少？",
    options: [
      "A) 2^h - 1",
      "B) h + 1",
      "C) 2^(h+1) - 1",
      "D) N(h) = N(h-1) + N(h-2) + 1"
    ],
    optionsChinese: [
      "A) 2^h - 1",
      "B) h + 1",
      "C) 2^(h+1) - 1",
      "D) N(h) = N(h-1) + N(h-2) + 1"
    ],
    answer: 3,
    explanation: "The minimum number of nodes in an AVL tree of height h follows a Fibonacci-like recurrence: N(h) = N(h-1) + N(h-2) + 1, with N(0)=1 and N(1)=2. This is because the worst case has subtrees differing in height by exactly 1.",
    explanationChinese: "高度为h的AVL树最少节点数遵循类Fibonacci递推：N(h) = N(h-1) + N(h-2) + 1，其中N(0)=1，N(1)=2。这是因为最坏情况下子树高度恰好相差1。",
    diagram: "",
    terms: ["binary_search_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 15,
    q: "Which of the following is true about a BST with n nodes stored in a sorted array?",
    qChinese: "关于将n个节点存储在排序数组中的BST，以下哪项是正确的？",
    options: [
      "A) Search takes O(n)",
      "B) Insertion takes O(1)",
      "C) Deletion takes O(1)",
      "D) Binary search on the array gives O(log n) search"
    ],
    optionsChinese: [
      "A) 搜索需要O(n)",
      "B) 插入需要O(1)",
      "C) 删除需要O(1)",
      "D) 数组上的二分搜索提供O(log n)搜索"
    ],
    answer: 3,
    explanation: "A sorted array supports binary search in O(log n) time, matching the search efficiency of a balanced BST. However, insertion and deletion in a sorted array require O(n) time due to shifting elements, which is a disadvantage compared to tree structures.",
    explanationChinese: "排序数组支持O(log n)时间的二分搜索，与平衡BST的搜索效率相匹配。但排序数组的插入和删除需要O(n)时间来移动元素，这是相比树结构的缺点。",
    diagram: "",
    terms: ["binary_search_tree", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 16,
    q: "In a Red-Black tree, after inserting a red node, which case requires only recoloring (no rotation)?",
    qChinese: "在红黑树中，插入红色节点后，哪种情况只需要重新着色（无需旋转）？",
    options: [
      "A) Parent is black",
      "B) Parent is red and uncle is black",
      "C) Parent and uncle are both red",
      "D) Node is the root"
    ],
    optionsChinese: [
      "A) 父节点是黑色",
      "B) 父节点是红色且叔节点是黑色",
      "C) 父节点和叔节点都是红色",
      "D) 节点是根节点"
    ],
    answer: 2,
    explanation: "When both the parent and uncle of the newly inserted red node are red, we fix the violation by recoloring the parent and uncle to black and the grandparent to red. No rotations are needed, but we must then check the grandparent for further violations upward.",
    explanationChinese: "当新插入红色节点的父节点和叔节点都是红色时，通过将父节点和叔节点重新着色为黑色、祖父节点着色为红色来修复违规。无需旋转，但需继续向上检查祖父节点。",
    diagram: "",
    terms: ["red_black_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 17,
    q: "What is the black-height of a Red-Black tree?",
    qChinese: "红黑树的黑色高度是什么？",
    options: [
      "A) Number of black nodes on any path from root to a null leaf",
      "B) Total number of black nodes",
      "C) Height of the tree minus red nodes",
      "D) Depth of the deepest black node"
    ],
    optionsChinese: [
      "A) 从根到任意空叶子路径上的黑色节点数",
      "B) 黑色节点总数",
      "C) 树高度减去红色节点数",
      "D) 最深黑色节点的深度"
    ],
    answer: 0,
    explanation: "The black-height of a Red-Black tree is the number of black nodes on any path from the root to a null leaf, not counting the root itself in some definitions. This value is the same for all paths, which is a fundamental property ensuring balance.",
    explanationChinese: "红黑树的黑色高度是从根到任意空叶子路径上的黑色节点数（某些定义不计根节点）。此值对所有路径相同，这是确保平衡的基本性质。",
    diagram: "",
    terms: ["red_black_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 18,
    q: "What is the worst-case height of a Red-Black tree with n nodes?",
    qChinese: "含n个节点的红黑树的最坏情况高度是多少？",
    options: [
      "A) log n",
      "B) n/2",
      "C) 2 log(n+1)",
      "D) sqrt(n)"
    ],
    optionsChinese: [
      "A) log n",
      "B) n/2",
      "C) 2 log(n+1)",
      "D) sqrt(n)"
    ],
    answer: 2,
    explanation: "The worst-case height of a Red-Black tree with n internal nodes is at most 2*log2(n+1). This is because the black-height is at least half the total height (no consecutive red nodes), and a subtree rooted at any node has at least 2^bh - 1 internal nodes.",
    explanationChinese: "含n个内部节点的红黑树最坏情况高度最多为2*log2(n+1)。因为黑色高度至少是总高度的一半（无连续红节点），且任意节点为根的子树至少有2^bh - 1个内部节点。",
    diagram: "",
    terms: ["red_black_tree", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 19,
    q: "Which self-balancing BST generally requires fewer rotations during insertion?",
    qChinese: "哪种自平衡BST在插入时通常需要更少的旋转？",
    options: [
      "A) AVL tree",
      "B) Red-Black tree",
      "C) Both require the same",
      "D) Neither uses rotations"
    ],
    optionsChinese: [
      "A) AVL树",
      "B) 红黑树",
      "C) 两者相同",
      "D) 两者都不使用旋转"
    ],
    answer: 1,
    explanation: "Red-Black trees generally require fewer rotations during insertion (at most 2) and deletion (at most 3) compared to AVL trees. AVL trees are more strictly balanced, so they may need rotations at multiple levels during deletion, though insertion needs at most 2 for both.",
    explanationChinese: "红黑树在插入（最多2次）和删除（最多3次）时通常需要比AVL树更少的旋转。AVL树平衡更严格，删除时可能需要在多个层级旋转，尽管插入时两者最多都需2次。",
    diagram: "",
    terms: ["red_black_tree", "binary_search_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 20,
    q: "Which tree provides faster lookups on average: AVL tree or Red-Black tree?",
    qChinese: "平均而言，哪种树提供更快的查找：AVL树还是红黑树？",
    options: [
      "A) Both are identical",
      "B) Red-Black tree",
      "C) AVL tree",
      "D) Depends on the data"
    ],
    optionsChinese: [
      "A) 两者完全相同",
      "B) 红黑树",
      "C) AVL树",
      "D) 取决于数据"
    ],
    answer: 2,
    explanation: "AVL trees provide faster lookups on average because they are more strictly balanced than Red-Black trees. The height of an AVL tree is at most 1.44*log(n), while a Red-Black tree can be up to 2*log(n), making AVL trees slightly shorter and faster to search.",
    explanationChinese: "AVL树平均提供更快的查找，因为它比红黑树更严格地平衡。AVL树高度最多为1.44*log(n)，而红黑树可达2*log(n)，使AVL树略矮，搜索更快。",
    diagram: "",
    terms: ["binary_search_tree", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 21,
    q: "What is a Trie primarily used for?",
    qChinese: "Trie树主要用于什么？",
    options: [
      "A) Sorting integers",
      "B) Graph traversal",
      "C) Balancing binary trees",
      "D) Storing and searching strings efficiently"
    ],
    optionsChinese: [
      "A) 整数排序",
      "B) 图遍历",
      "C) 平衡二叉树",
      "D) 高效存储和搜索字符串"
    ],
    answer: 3,
    explanation: "A Trie (prefix tree) is primarily used for efficient storage and retrieval of strings. Each node represents a character, and paths from root to leaves represent complete strings. Tries support O(m) search where m is the string length, independent of the number of stored strings.",
    explanationChinese: "Trie（前缀树）主要用于高效存储和检索字符串。每个节点表示一个字符，从根到叶子的路径表示完整字符串。Trie支持O(m)搜索，其中m为字符串长度，与存储的字符串数量无关。",
    diagram: "",
    terms: ["trie"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 22,
    q: "What is the time complexity of searching for a word of length m in a Trie?",
    qChinese: "在Trie中搜索长度为m的单词的时间复杂度是多少？",
    options: [
      "A) O(n)",
      "B) O(m log n)",
      "C) O(log n)",
      "D) O(m)"
    ],
    optionsChinese: [
      "A) O(n)",
      "B) O(m log n)",
      "C) O(log n)",
      "D) O(m)"
    ],
    answer: 3,
    explanation: "Searching in a Trie takes O(m) time where m is the length of the search word. We traverse from the root, following one edge per character. This is independent of n (the total number of words stored), making Tries very efficient for string lookups.",
    explanationChinese: "在Trie中搜索需要O(m)时间，其中m为搜索单词的长度。从根开始遍历，每个字符跟随一条边。这与n（存储的单词总数）无关，使Trie对字符串查找非常高效。",
    diagram: "",
    terms: ["trie", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 23,
    q: "In a BST, what is the time complexity of finding the minimum element?",
    qChinese: "在BST中，找到最小元素的时间复杂度是多少？",
    options: [
      "A) O(1)",
      "B) O(log n) in balanced BST",
      "C) O(n) always",
      "D) O(n log n)"
    ],
    optionsChinese: [
      "A) O(1)",
      "B) 平衡BST中O(log n)",
      "C) 始终O(n)",
      "D) O(n log n)"
    ],
    answer: 1,
    explanation: "Finding the minimum in a BST requires traversing left children from the root until reaching a node with no left child. In a balanced BST this takes O(log n) time since the height is O(log n). In an unbalanced BST, it could take O(n) in the worst case.",
    explanationChinese: "在BST中找最小值需要从根开始沿左子节点遍历直到没有左子节点。在平衡BST中这需要O(log n)时间，因为高度为O(log n)。在不平衡BST中，最坏情况可能需要O(n)。",
    diagram: "",
    terms: ["binary_search_tree", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 24,
    q: "What happens when you insert keys 1, 2, 3, 4, 5 in order into an empty BST?",
    qChinese: "将键1、2、3、4、5按顺序插入空BST会发生什么？",
    options: [
      "A) A balanced tree is formed",
      "B) A left-skewed tree is formed",
      "C) A complete binary tree is formed",
      "D) A right-skewed tree (like a linked list) is formed"
    ],
    optionsChinese: [
      "A) 形成平衡树",
      "B) 形成左偏树",
      "C) 形成完全二叉树",
      "D) 形成右偏树（类似链表）"
    ],
    answer: 3,
    explanation: "Inserting sorted keys into a BST creates a right-skewed tree resembling a linked list. Each new key is larger than all existing keys, so it always becomes the right child of the current rightmost node. This degrades all operations to O(n) time complexity.",
    explanationChinese: "将排序的键插入BST会创建类似链表的右偏树。每个新键都大于所有现有键，因此总是成为当前最右节点的右子节点。这使所有操作退化为O(n)时间复杂度。",
    diagram: "",
    terms: ["binary_search_tree", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 25,
    q: "Which augmented BST allows efficient order-statistic queries (find kth smallest element)?",
    qChinese: "哪种增强BST可以高效地进行顺序统计查询（找第k小的元素）？",
    options: [
      "A) Splay tree",
      "B) B-tree",
      "C) Order-statistic tree",
      "D) Treap"
    ],
    optionsChinese: [
      "A) 伸展树",
      "B) B树",
      "C) 顺序统计树",
      "D) 树堆"
    ],
    answer: 2,
    explanation: "An order-statistic tree is an augmented BST where each node stores the size of its subtree. This allows finding the kth smallest element in O(log n) time by comparing k with subtree sizes to decide whether to go left, right, or return the current node.",
    explanationChinese: "顺序统计树是一种增强BST，每个节点存储其子树大小。这允许在O(log n)时间内找到第k小的元素，通过将k与子树大小比较来决定向左、向右或返回当前节点。",
    diagram: "",
    terms: ["binary_search_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 26,
    q: "What is a splay tree?",
    qChinese: "什么是伸展树？",
    options: [
      "A) A tree that always maintains perfect balance",
      "B) A self-adjusting BST that moves accessed nodes to the root",
      "C) A tree used only for string storage",
      "D) A type of B-tree"
    ],
    optionsChinese: [
      "A) 始终保持完美平衡的树",
      "B) 将访问的节点移到根的自调整BST",
      "C) 仅用于字符串存储的树",
      "D) B树的一种"
    ],
    answer: 1,
    explanation: "A splay tree is a self-adjusting BST that performs splaying (a sequence of rotations) to move the most recently accessed node to the root. This provides amortized O(log n) time for operations and exploits temporal locality, making frequently accessed elements faster to find.",
    explanationChinese: "伸展树是一种自调整BST，通过展开操作（一系列旋转）将最近访问的节点移到根。这提供摊还O(log n)时间的操作，并利用时间局部性，使频繁访问的元素更快被找到。",
    diagram: "",
    terms: ["binary_search_tree", "amortized_analysis"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 27,
    q: "In AVL tree deletion, how many rotations might be needed in the worst case?",
    qChinese: "在AVL树删除中，最坏情况下可能需要多少次旋转？",
    options: [
      "A) 0",
      "B) O(log n)",
      "C) 2",
      "D) 1"
    ],
    optionsChinese: [
      "A) 0次",
      "B) O(log n)次",
      "C) 2次",
      "D) 1次"
    ],
    answer: 1,
    explanation: "Unlike insertion which needs at most 2 rotations, AVL deletion may require rotations at every level from the deleted node up to the root. Since the height is O(log n), up to O(log n) rotations may be needed in the worst case to restore balance throughout the tree.",
    explanationChinese: "与最多需要2次旋转的插入不同，AVL删除可能需要从删除节点到根的每一层都进行旋转。由于高度为O(log n)，最坏情况下可能需要O(log n)次旋转来恢复整棵树的平衡。",
    diagram: "",
    terms: ["binary_search_tree", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 28,
    q: "A BST contains values {5, 3, 8, 1, 4, 7, 9}. What is the result of an inorder traversal?",
    qChinese: "一个BST包含值{5, 3, 8, 1, 4, 7, 9}。中序遍历的结果是什么？",
    options: [
      "A) 1, 3, 4, 5, 7, 8, 9",
      "B) 5, 3, 8, 1, 4, 7, 9",
      "C) 9, 8, 7, 5, 4, 3, 1",
      "D) 1, 4, 3, 7, 9, 8, 5"
    ],
    optionsChinese: [
      "A) 1, 3, 4, 5, 7, 8, 9",
      "B) 5, 3, 8, 1, 4, 7, 9",
      "C) 9, 8, 7, 5, 4, 3, 1",
      "D) 1, 4, 3, 7, 9, 8, 5"
    ],
    answer: 0,
    explanation: "Inorder traversal of a BST always produces elements in ascending sorted order. The traversal visits left subtree, root, then right subtree recursively. For this BST rooted at 5 with left subtree {3,1,4} and right subtree {8,7,9}, we get 1,3,4,5,7,8,9.",
    explanationChinese: "BST的中序遍历总是按升序产生元素。遍历递归地访问左子树、根、然后右子树。对于以5为根、左子树{3,1,4}和右子树{8,7,9}的BST，得到1,3,4,5,7,8,9。",
    diagram: "",
    terms: ["binary_search_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 29,
    q: "Which data structure is used to implement std::map in C++ standard library?",
    qChinese: "C++标准库中std::map使用哪种数据结构实现？",
    options: [
      "A) Hash table",
      "B) Red-Black tree",
      "C) AVL tree",
      "D) Skip list"
    ],
    optionsChinese: [
      "A) 哈希表",
      "B) 红黑树",
      "C) AVL树",
      "D) 跳表"
    ],
    answer: 1,
    explanation: "The C++ std::map is typically implemented using a Red-Black tree. Red-Black trees offer guaranteed O(log n) worst-case time for insertion, deletion, and search while requiring fewer rotations than AVL trees during modifications, making them practical for general-purpose use.",
    explanationChinese: "C++的std::map通常使用红黑树实现。红黑树提供插入、删除和搜索的O(log n)最坏情况时间保证，同时修改时比AVL树需要更少的旋转，使其适合通用用途。",
    diagram: "",
    terms: ["red_black_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 30,
    q: "What is the space complexity of a Trie storing n words with average length m over an alphabet of size k?",
    qChinese: "存储n个平均长度为m的单词、字母表大小为k的Trie的空间复杂度是多少？",
    options: [
      "A) O(n)",
      "B) O(n * m)",
      "C) O(n * m * k)",
      "D) O(k^m)"
    ],
    optionsChinese: [
      "A) O(n)",
      "B) O(n * m)",
      "C) O(n * m * k)",
      "D) O(k^m)"
    ],
    answer: 2,
    explanation: "In the worst case, a Trie needs O(n*m*k) space because there can be up to n*m nodes (n words of average length m), and each node may store an array of k child pointers for the alphabet. This makes Tries memory-intensive compared to hash-based alternatives.",
    explanationChinese: "最坏情况下，Trie需要O(n*m*k)空间，因为可能有多达n*m个节点（n个平均长度m的单词），每个节点可能存储k个子指针数组。这使Trie比基于哈希的替代方案更占内存。",
    diagram: "",
    terms: ["trie", "space_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 31,
    q: "Which traversal of a BST is useful for creating a copy of the tree?",
    qChinese: "BST的哪种遍历方式适用于创建树的副本？",
    options: [
      "A) Inorder",
      "B) Preorder",
      "C) Postorder",
      "D) Level-order"
    ],
    optionsChinese: [
      "A) 中序遍历",
      "B) 前序遍历",
      "C) 后序遍历",
      "D) 层序遍历"
    ],
    answer: 1,
    explanation: "Preorder traversal visits the root before its children, making it ideal for creating a copy of the tree. By processing nodes in preorder, we can insert them into a new BST in the same order, reconstructing the exact same tree structure as the original.",
    explanationChinese: "前序遍历在子节点之前访问根节点，使其非常适合创建树的副本。按前序处理节点，可以按相同顺序插入新BST，重建与原始树完全相同的结构。",
    diagram: "",
    terms: ["binary_search_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 32,
    q: "In a BST with n nodes, what is the best-case time complexity of searching for a key?",
    qChinese: "在有n个节点的BST中，搜索一个键的最佳时间复杂度是多少？",
    options: [
      "A) O(1)",
      "B) O(log n)",
      "C) O(n)",
      "D) O(n^2)"
    ],
    optionsChinese: [
      "A) O(1)",
      "B) O(log n)",
      "C) O(n)",
      "D) O(n^2)"
    ],
    answer: 0,
    explanation: "The best case for searching in a BST is O(1), which occurs when the key being searched for is at the root node. In general, the best case for a balanced BST is O(1) for finding the root element, though typical searches take O(log n) in a balanced tree.",
    explanationChinese: "BST搜索的最佳情况是O(1)，当搜索的键恰好在根节点时发生。一般来说，平衡BST找到根元素的最佳情况是O(1)，尽管典型搜索在平衡树中需要O(log n)。",
    diagram: "",
    terms: ["binary_search_tree", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 33,
    q: "What is the purpose of the sentinel NIL nodes in a Red-Black tree?",
    qChinese: "红黑树中哨兵NIL节点的目的是什么？",
    options: [
      "A) To simplify boundary conditions and represent null leaves as black",
      "B) To store extra data",
      "C) To speed up rotations",
      "D) To reduce memory usage"
    ],
    optionsChinese: [
      "A) 简化边界条件并将空叶子表示为黑色",
      "B) 存储额外数据",
      "C) 加速旋转",
      "D) 减少内存使用"
    ],
    answer: 0,
    explanation: "Sentinel NIL nodes in Red-Black trees are used to simplify the implementation by replacing null pointers with black sentinel nodes. This ensures every leaf is black (property 3) and simplifies the code for rotations and recoloring, avoiding special cases for null children.",
    explanationChinese: "红黑树中的哨兵NIL节点用于简化实现，用黑色哨兵节点替代空指针。这确保每个叶子是黑色的（性质3），并简化旋转和重新着色的代码，避免空子节点的特殊情况处理。",
    diagram: "",
    terms: ["red_black_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 34,
    q: "Given a preorder traversal [10, 5, 3, 7, 15, 12, 20] of a BST, what is the root?",
    qChinese: "给定BST的前序遍历[10, 5, 3, 7, 15, 12, 20]，根节点是什么？",
    options: [
      "A) 10",
      "B) 5",
      "C) 3",
      "D) 20"
    ],
    optionsChinese: [
      "A) 10",
      "B) 5",
      "C) 3",
      "D) 20"
    ],
    answer: 0,
    explanation: "In preorder traversal, the first element visited is always the root of the tree. Therefore, 10 is the root of this BST. Elements less than 10 (5,3,7) form the left subtree and elements greater than 10 (15,12,20) form the right subtree.",
    explanationChinese: "在前序遍历中，第一个被访问的元素总是树的根。因此10是这棵BST的根。小于10的元素（5,3,7）构成左子树，大于10的元素（15,12,20）构成右子树。",
    diagram: "",
    terms: ["binary_search_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 35,
    q: "How does a B-tree differ from a binary search tree?",
    qChinese: "B树与二叉搜索树有什么不同？",
    options: [
      "A) B-tree only stores strings",
      "B) B-tree does not maintain sorted order",
      "C) B-tree is always unbalanced",
      "D) B-tree nodes can have more than 2 children"
    ],
    optionsChinese: [
      "A) B树只存储字符串",
      "B) B树不维持排序顺序",
      "C) B树总是不平衡的",
      "D) B树节点可以有两个以上的子节点"
    ],
    answer: 3,
    explanation: "A B-tree is a generalization of a BST where each node can have more than 2 children and store multiple keys. B-trees maintain sorted order, are always balanced, and are optimized for disk-based storage systems where minimizing disk accesses is critical.",
    explanationChinese: "B树是BST的泛化，每个节点可以有两个以上的子节点并存储多个键。B树维持排序顺序，始终平衡，并针对基于磁盘的存储系统优化，其中最小化磁盘访问至关重要。",
    diagram: "",
    terms: ["binary_search_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 36,
    q: "What is the average time complexity of searching in a hash table?",
    qChinese: "在哈希表中搜索的平均时间复杂度是多少？",
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
    explanation: "Hash tables provide O(1) average-case time complexity for search, insertion, and deletion operations. The hash function maps keys directly to array indices, enabling constant-time access. However, worst-case is O(n) when many collisions occur and all keys hash to the same bucket.",
    explanationChinese: "哈希表为搜索、插入和删除操作提供O(1)的平均时间复杂度。哈希函数将键直接映射到数组索引，实现常数时间访问。但最坏情况是O(n)，当大量冲突导致所有键哈希到同一桶时。",
    diagram: "",
    terms: ["hash_table", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 37,
    q: "What is a hash collision?",
    qChinese: "什么是哈希冲突？",
    options: [
      "A) When two different keys map to the same index",
      "B) When two hash tables merge",
      "C) When a hash function fails",
      "D) When the hash table is full"
    ],
    optionsChinese: [
      "A) 两个不同的键映射到同一索引时",
      "B) 两个哈希表合并时",
      "C) 哈希函数失败时",
      "D) 哈希表已满时"
    ],
    answer: 0,
    explanation: "A hash collision occurs when two different keys are mapped to the same index (bucket) by the hash function. Since hash functions map a large key space to a smaller index space, collisions are inevitable by the pigeonhole principle and must be handled through resolution strategies.",
    explanationChinese: "哈希冲突发生在两个不同的键被哈希函数映射到同一索引（桶）时。由于哈希函数将大的键空间映射到较小的索引空间，根据鸽巢原理冲突是不可避免的，必须通过解决策略来处理。",
    diagram: "",
    terms: ["hash_table"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 38,
    q: "Which collision resolution technique uses a linked list at each bucket?",
    qChinese: "哪种冲突解决技术在每个桶中使用链表？",
    options: [
      "A) Linear probing",
      "B) Quadratic probing",
      "C) Double hashing",
      "D) Separate chaining"
    ],
    optionsChinese: [
      "A) 线性探测",
      "B) 二次探测",
      "C) 双重哈希",
      "D) 分离链接"
    ],
    answer: 3,
    explanation: "Separate chaining resolves collisions by maintaining a linked list (or other data structure) at each bucket. When multiple keys hash to the same index, they are stored in the linked list at that bucket. This allows the load factor to exceed 1 without issues.",
    explanationChinese: "分离链接通过在每个桶维护链表（或其他数据结构）来解决冲突。当多个键哈希到同一索引时，它们被存储在该桶的链表中。这允许负载因子超过1而不会出问题。",
    diagram: "",
    terms: ["hash_table"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 39,
    q: "In linear probing, if index h(k) is occupied, where is the next probe?",
    qChinese: "在线性探测中，如果索引h(k)已被占用，下一次探测在哪里？",
    options: [
      "A) h(k) + 1",
      "B) h(k) * 2",
      "C) h(k)^2",
      "D) h2(k)"
    ],
    optionsChinese: [
      "A) h(k) + 1",
      "B) h(k) * 2",
      "C) h(k)^2",
      "D) h2(k)"
    ],
    answer: 0,
    explanation: "In linear probing, when a collision occurs at index h(k), the algorithm probes the next sequential index h(k)+1, then h(k)+2, and so on (modulo table size). This is simple but can cause primary clustering, where consecutive occupied slots form long runs.",
    explanationChinese: "在线性探测中，当索引h(k)发生冲突时，算法探测下一个顺序索引h(k)+1，然后h(k)+2，依此类推（对表大小取模）。这很简单但会导致主聚集，连续占用的槽位形成长串。",
    diagram: "",
    terms: ["hash_table"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 40,
    q: "What is the load factor of a hash table?",
    qChinese: "哈希表的负载因子是什么？",
    options: [
      "A) Number of buckets / Number of elements",
      "B) Number of elements / Number of buckets",
      "C) Number of collisions / Number of elements",
      "D) Table size * Number of elements"
    ],
    optionsChinese: [
      "A) 桶数 / 元素数",
      "B) 元素数 / 桶数",
      "C) 冲突数 / 元素数",
      "D) 表大小 × 元素数"
    ],
    answer: 1,
    explanation: "The load factor (alpha) of a hash table is the ratio of the number of stored elements to the number of buckets (table size). A higher load factor means more collisions and degraded performance. Typically, hash tables resize when the load factor exceeds a threshold like 0.75.",
    explanationChinese: "哈希表的负载因子（alpha）是存储元素数与桶数（表大小）的比值。较高的负载因子意味着更多冲突和性能下降。通常，当负载因子超过0.75等阈值时，哈希表会调整大小。",
    diagram: "",
    terms: ["hash_table"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 41,
    q: "What problem does quadratic probing help solve compared to linear probing?",
    qChinese: "与线性探测相比，二次探测有助于解决什么问题？",
    options: [
      "A) Secondary clustering",
      "B) Primary clustering",
      "C) Hash function design",
      "D) Memory allocation"
    ],
    optionsChinese: [
      "A) 二次聚集",
      "B) 主聚集",
      "C) 哈希函数设计",
      "D) 内存分配"
    ],
    answer: 1,
    explanation: "Quadratic probing reduces primary clustering that occurs in linear probing. Instead of probing consecutive slots, it probes at intervals of 1, 4, 9, 16, etc. (i^2). This spreads out entries more evenly, though it can still suffer from secondary clustering where keys with the same hash follow the same probe sequence.",
    explanationChinese: "二次探测减少了线性探测中出现的主聚集。它不是探测连续槽位，而是以1、4、9、16等（i^2）间隔探测。这更均匀地分散条目，但仍可能有二次聚集，即相同哈希的键跟随相同探测序列。",
    diagram: "",
    terms: ["hash_table"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 42,
    q: "What is double hashing?",
    qChinese: "什么是双重哈希？",
    options: [
      "A) Hashing the key twice with the same function",
      "B) Hashing the hash value",
      "C) Having two hash tables",
      "D) Using two different hash functions for probing"
    ],
    optionsChinese: [
      "A) 用同一函数对键哈希两次",
      "B) 对哈希值再哈希",
      "C) 拥有两个哈希表",
      "D) 使用两个不同的哈希函数进行探测"
    ],
    answer: 3,
    explanation: "Double hashing uses two different hash functions: h1(k) for the initial index and h2(k) for the step size. The probe sequence is h1(k) + i*h2(k) mod m. This virtually eliminates clustering since different keys produce different probe sequences even if they initially collide.",
    explanationChinese: "双重哈希使用两个不同的哈希函数：h1(k)用于初始索引，h2(k)用于步长。探测序列为h1(k) + i*h2(k) mod m。这实际上消除了聚集，因为不同的键产生不同的探测序列，即使它们最初冲突。",
    diagram: "",
    terms: ["hash_table"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 43,
    q: "What is the worst-case time complexity of searching in a hash table using separate chaining?",
    qChinese: "使用分离链接的哈希表搜索的最坏时间复杂度是多少？",
    options: [
      "A) O(n)",
      "B) O(log n)",
      "C) O(1)",
      "D) O(n^2)"
    ],
    optionsChinese: [
      "A) O(n)",
      "B) O(log n)",
      "C) O(1)",
      "D) O(n^2)"
    ],
    answer: 0,
    explanation: "The worst case for hash table search with separate chaining is O(n), occurring when all n keys hash to the same bucket. In this scenario, the linked list at that bucket contains all n elements, requiring linear traversal to find the desired key.",
    explanationChinese: "使用分离链接的哈希表搜索最坏情况为O(n)，当所有n个键哈希到同一桶时发生。此场景中，该桶的链表包含所有n个元素，需要线性遍历来找到目标键。",
    diagram: "",
    terms: ["hash_table", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 44,
    q: "What property must a good hash function satisfy?",
    qChinese: "好的哈希函数必须满足什么性质？",
    options: [
      "A) Distributes keys uniformly across the table",
      "B) Always returns the same value",
      "C) Always avoids collisions",
      "D) Uses only multiplication"
    ],
    optionsChinese: [
      "A) 将键均匀分布在整个表中",
      "B) 总是返回相同的值",
      "C) 总是避免冲突",
      "D) 只使用乘法"
    ],
    answer: 0,
    explanation: "A good hash function should distribute keys uniformly across all buckets to minimize collisions. It should be deterministic (same key always gives same hash), fast to compute, and minimize clustering. No hash function can always avoid collisions due to the pigeonhole principle.",
    explanationChinese: "好的哈希函数应将键均匀分布在所有桶中以最小化冲突。它应该是确定性的（相同键总是给出相同哈希值），计算快速，并最小化聚集。由于鸽巢原理，没有哈希函数能完全避免冲突。",
    diagram: "",
    terms: ["hash_table"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 45,
    q: "When should a hash table be resized?",
    qChinese: "什么时候应该调整哈希表的大小？",
    options: [
      "A) When any collision occurs",
      "B) When a deletion occurs",
      "C) After every insertion",
      "D) When load factor exceeds a threshold"
    ],
    optionsChinese: [
      "A) 发生任何冲突时",
      "B) 发生删除时",
      "C) 每次插入后",
      "D) 负载因子超过阈值时"
    ],
    answer: 3,
    explanation: "A hash table should be resized (rehashed) when the load factor exceeds a predefined threshold, typically 0.75. At this point, collisions become frequent enough to degrade performance. Resizing involves creating a larger table and rehashing all existing elements into the new table.",
    explanationChinese: "当负载因子超过预定阈值（通常为0.75）时，应调整哈希表大小（重新哈希）。此时冲突足够频繁以降低性能。调整大小包括创建更大的表并将所有现有元素重新哈希到新表中。",
    diagram: "",
    terms: ["hash_table"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 46,
    q: "What is the time complexity of resizing a hash table with n elements?",
    qChinese: "调整含n个元素的哈希表大小的时间复杂度是多少？",
    options: [
      "A) O(1)",
      "B) O(n)",
      "C) O(log n)",
      "D) O(n^2)"
    ],
    optionsChinese: [
      "A) O(1)",
      "B) O(n)",
      "C) O(log n)",
      "D) O(n^2)"
    ],
    answer: 1,
    explanation: "Resizing a hash table takes O(n) time because every element must be rehashed and inserted into the new larger table. Although this is expensive, it happens infrequently. Using amortized analysis, the cost per insertion remains O(1) on average over a sequence of operations.",
    explanationChinese: "调整哈希表大小需要O(n)时间，因为每个元素都必须重新哈希并插入新的更大表中。虽然这很昂贵，但很少发生。使用摊还分析，在一系列操作中每次插入的平均成本仍为O(1)。",
    diagram: "",
    terms: ["hash_table", "time_complexity", "amortized_analysis"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 47,
    q: "Which hash function technique uses h(k) = k mod m?",
    qChinese: "哪种哈希函数技术使用h(k) = k mod m？",
    options: [
      "A) Multiplication method",
      "B) Division method",
      "C) Universal hashing",
      "D) Perfect hashing"
    ],
    optionsChinese: [
      "A) 乘法方法",
      "B) 除法方法",
      "C) 通用哈希",
      "D) 完美哈希"
    ],
    answer: 1,
    explanation: "The division method computes h(k) = k mod m, where k is the key and m is the table size. For best results, m should be a prime number not close to a power of 2. This is the simplest hash function method but sensitive to the choice of m.",
    explanationChinese: "除法方法计算h(k) = k mod m，其中k是键，m是表大小。为获最佳结果，m应为不接近2的幂的质数。这是最简单的哈希函数方法，但对m的选择很敏感。",
    diagram: "",
    terms: ["hash_table"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 48,
    q: "What is a perfect hash function?",
    qChinese: "什么是完美哈希函数？",
    options: [
      "A) A function that runs in O(1)",
      "B) A function that works for any input",
      "C) A function that produces no collisions for a specific set of keys",
      "D) A function that uses minimal memory"
    ],
    optionsChinese: [
      "A) 运行时间为O(1)的函数",
      "B) 对任何输入都有效的函数",
      "C) 对特定键集不产生冲突的函数",
      "D) 使用最小内存的函数"
    ],
    answer: 2,
    explanation: "A perfect hash function maps a specific set of n keys to n distinct indices with no collisions. It can only be constructed when the set of keys is known in advance. A minimal perfect hash function additionally maps n keys to exactly n consecutive indices.",
    explanationChinese: "完美哈希函数将特定的n个键映射到n个不同的索引，没有冲突。只有当键集预先已知时才能构造。最小完美哈希函数额外将n个键映射到恰好n个连续索引。",
    diagram: "",
    terms: ["hash_table"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 49,
    q: "What is cuckoo hashing?",
    qChinese: "什么是布谷鸟哈希？",
    options: [
      "A) Hashing with random salt values",
      "B) A hash function based on bird calls",
      "C) Using two hash tables and displacing existing keys on collision",
      "D) Hashing with three hash functions"
    ],
    optionsChinese: [
      "A) 使用随机盐值的哈希",
      "B) 基于鸟叫的哈希函数",
      "C) 使用两个哈希表并在冲突时替换现有键",
      "D) 使用三个哈希函数的哈希"
    ],
    answer: 2,
    explanation: "Cuckoo hashing uses two hash tables (or two hash functions with one table). On collision, the existing key is displaced and rehashed to its alternative location, potentially causing a chain of displacements. It guarantees O(1) worst-case lookup time at the cost of more complex insertion.",
    explanationChinese: "布谷鸟哈希使用两个哈希表（或一个表配两个哈希函数）。冲突时，现有键被替换并重新哈希到其替代位置，可能引起连锁替换。它保证O(1)最坏情况查找时间，代价是更复杂的插入。",
    diagram: "",
    terms: ["hash_table"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 50,
    q: "What is the expected number of probes for a successful search in open addressing with load factor alpha?",
    qChinese: "在负载因子为alpha的开放寻址中，成功搜索的期望探测次数是多少？",
    options: [
      "A) 1/(1-alpha)",
      "B) (1/alpha) * ln(1/(1-alpha))",
      "C) alpha",
      "D) 1 + alpha"
    ],
    optionsChinese: [
      "A) 1/(1-alpha)",
      "B) (1/alpha) * ln(1/(1-alpha))",
      "C) alpha",
      "D) 1 + alpha"
    ],
    answer: 1,
    explanation: "For a successful search in open addressing with uniform hashing, the expected number of probes is (1/alpha) * ln(1/(1-alpha)). For an unsuccessful search, it is 1/(1-alpha). These formulas assume uniform hashing and demonstrate why keeping load factor low is important.",
    explanationChinese: "在使用均匀哈希的开放寻址中，成功搜索的期望探测次数为(1/alpha) * ln(1/(1-alpha))。不成功搜索为1/(1-alpha)。这些公式假设均匀哈希，说明了保持低负载因子的重要性。",
    diagram: "",
    terms: ["hash_table", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 51,
    q: "What is universal hashing?",
    qChinese: "什么是通用哈希？",
    options: [
      "A) Randomly selecting a hash function from a family of functions",
      "B) A single hash function that works for all data",
      "C) Using the same hash function universally",
      "D) A hash function based on universal constants"
    ],
    optionsChinese: [
      "A) 从函数族中随机选择哈希函数",
      "B) 适用于所有数据的单一哈希函数",
      "C) 通用地使用相同的哈希函数",
      "D) 基于通用常数的哈希函数"
    ],
    answer: 0,
    explanation: "Universal hashing randomly selects a hash function from a carefully designed family of functions at runtime. This ensures that for any two distinct keys, the probability of collision is at most 1/m (where m is table size), regardless of the input distribution.",
    explanationChinese: "通用哈希在运行时从精心设计的函数族中随机选择哈希函数。这确保对于任意两个不同的键，冲突概率最多为1/m（其中m为表大小），无论输入分布如何。",
    diagram: "",
    terms: ["hash_table"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 52,
    q: "In open addressing, what is the problem of deletion?",
    qChinese: "在开放寻址中，删除的问题是什么？",
    options: [
      "A) Deleting a key may break the probe sequence for other keys",
      "B) Deletion is impossible",
      "C) Deletion takes O(n^2) time",
      "D) Deletion causes memory leaks"
    ],
    optionsChinese: [
      "A) 删除一个键可能破坏其他键的探测序列",
      "B) 删除是不可能的",
      "C) 删除需要O(n^2)时间",
      "D) 删除会导致内存泄漏"
    ],
    answer: 0,
    explanation: "In open addressing, simply removing an element can break probe sequences of other elements that were inserted after it. The solution is to use lazy deletion with tombstone markers that indicate a slot was previously occupied, allowing probe sequences to continue past deleted slots.",
    explanationChinese: "在开放寻址中，简单删除元素可能破坏在其之后插入的其他元素的探测序列。解决方案是使用带墓碑标记的惰性删除，指示槽位之前被占用过，允许探测序列继续跳过已删除的槽位。",
    diagram: "",
    terms: ["hash_table"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 53,
    q: "Which data structure does Python's dictionary use internally?",
    qChinese: "Python的字典内部使用哪种数据结构？",
    options: [
      "A) Red-Black tree",
      "B) AVL tree",
      "C) Hash table with open addressing",
      "D) Skip list"
    ],
    optionsChinese: [
      "A) 红黑树",
      "B) AVL树",
      "C) 使用开放寻址的哈希表",
      "D) 跳表"
    ],
    answer: 2,
    explanation: "Python dictionaries use a hash table with open addressing (specifically, a form of probing). The implementation uses a compact hash table design that stores hash values, keys, and values in separate arrays for cache efficiency and memory optimization.",
    explanationChinese: "Python字典使用带开放寻址（特别是一种探测形式）的哈希表。实现使用紧凑的哈希表设计，将哈希值、键和值存储在单独的数组中，以提高缓存效率和内存优化。",
    diagram: "",
    terms: ["hash_table"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 54,
    q: "What is the amortized time complexity of insertion into a hash table that doubles in size when full?",
    qChinese: "当哈希表满时大小翻倍，插入的摊还时间复杂度是多少？",
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
    answer: 0,
    explanation: "Using amortized analysis, the cost of insertion into a dynamically resizing hash table is O(1). Although resizing costs O(n), it happens after n insertions. Distributing the O(n) resize cost over the n insertions that triggered it gives O(1) amortized cost per insertion.",
    explanationChinese: "使用摊还分析，向动态调整大小的哈希表插入的成本为O(1)。虽然调整大小花费O(n)，但它在n次插入后发生。将O(n)的调整成本分摊到触发它的n次插入上，每次插入的摊还成本为O(1)。",
    diagram: "",
    terms: ["hash_table", "amortized_analysis"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 55,
    q: "What is a Bloom filter?",
    qChinese: "什么是布隆过滤器？",
    options: [
      "A) A type of hash table with no collisions",
      "B) A graph search technique",
      "C) A sorting algorithm",
      "D) A probabilistic data structure for set membership testing"
    ],
    optionsChinese: [
      "A) 没有冲突的哈希表类型",
      "B) 一种图搜索技术",
      "C) 一种排序算法",
      "D) 用于集合成员测试的概率数据结构"
    ],
    answer: 3,
    explanation: "A Bloom filter is a space-efficient probabilistic data structure that tests whether an element is a member of a set. It can have false positives (saying an element exists when it does not) but never false negatives. It uses multiple hash functions mapping to a bit array.",
    explanationChinese: "布隆过滤器是一种空间高效的概率数据结构，测试元素是否属于集合。它可能有假阳性（说元素存在但实际不存在），但永远没有假阴性。它使用多个哈希函数映射到位数组。",
    diagram: "",
    terms: ["hash_table"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 56,
    q: "Which of the following is NOT an open addressing strategy?",
    qChinese: "以下哪项不是开放寻址策略？",
    options: [
      "A) Linear probing",
      "B) Quadratic probing",
      "C) Separate chaining",
      "D) Double hashing"
    ],
    optionsChinese: [
      "A) 线性探测",
      "B) 二次探测",
      "C) 分离链接",
      "D) 双重哈希"
    ],
    answer: 2,
    explanation: "Separate chaining is NOT an open addressing strategy. It uses a different approach where each bucket contains a linked list of colliding elements. Open addressing strategies (linear probing, quadratic probing, double hashing) store all elements directly in the hash table array itself.",
    explanationChinese: "分离链接不是开放寻址策略。它使用不同的方法，每个桶包含冲突元素的链表。开放寻址策略（线性探测、二次探测、双重哈希）将所有元素直接存储在哈希表数组本身中。",
    diagram: "",
    terms: ["hash_table"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 57,
    q: "Why is it recommended that hash table sizes be prime numbers?",
    qChinese: "为什么建议哈希表大小为质数？",
    options: [
      "A) Prime numbers are easier to compute",
      "B) To save memory",
      "C) To reduce clustering and distribute keys more uniformly",
      "D) Prime numbers make deletion easier"
    ],
    optionsChinese: [
      "A) 质数更容易计算",
      "B) 节省内存",
      "C) 减少聚集并更均匀地分布键",
      "D) 质数使删除更容易"
    ],
    answer: 2,
    explanation: "Prime table sizes help distribute keys more uniformly because the modulo operation with a prime number is less likely to have patterns that align with common key distributions. This reduces clustering, especially when keys share common factors with non-prime table sizes.",
    explanationChinese: "质数表大小有助于更均匀地分布键，因为与质数的取模运算不太可能与常见键分布的模式对齐。这减少了聚集，特别是当键与非质数表大小有公因子时。",
    diagram: "",
    terms: ["hash_table"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 58,
    q: "What is consistent hashing primarily used for?",
    qChinese: "一致性哈希主要用于什么？",
    options: [
      "A) Database indexing",
      "B) Distributed systems to minimize key remapping on node changes",
      "C) Sorting data",
      "D) Encrypting passwords"
    ],
    optionsChinese: [
      "A) 数据库索引",
      "B) 分布式系统中在节点变化时最小化键重映射",
      "C) 数据排序",
      "D) 密码加密"
    ],
    answer: 1,
    explanation: "Consistent hashing is primarily used in distributed systems (like distributed caches and databases) to minimize the number of keys that need to be remapped when nodes are added or removed. On average, only K/n keys need remapping, where K is keys and n is nodes.",
    explanationChinese: "一致性哈希主要用于分布式系统（如分布式缓存和数据库），在添加或删除节点时最小化需要重新映射的键数。平均只有K/n个键需要重新映射，其中K是键数，n是节点数。",
    diagram: "",
    terms: ["hash_table"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 59,
    q: "What is the space complexity of a hash table storing n elements?",
    qChinese: "存储n个元素的哈希表的空间复杂度是多少？",
    options: [
      "A) O(n)",
      "B) O(log n)",
      "C) O(1)",
      "D) O(n^2)"
    ],
    optionsChinese: [
      "A) O(n)",
      "B) O(log n)",
      "C) O(1)",
      "D) O(n^2)"
    ],
    answer: 0,
    explanation: "A hash table storing n elements requires O(n) space. The table needs at least n slots for the elements, plus some extra space to keep the load factor reasonable (typically the table is 1.33x to 2x the number of elements). The space grows linearly with n.",
    explanationChinese: "存储n个元素的哈希表需要O(n)空间。表至少需要n个槽位存储元素，加上一些额外空间保持合理的负载因子（通常表大小是元素数的1.33到2倍）。空间随n线性增长。",
    diagram: "",
    terms: ["hash_table", "space_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 60,
    q: "In Robin Hood hashing, what happens when a new key collides with an existing key?",
    qChinese: "在罗宾汉哈希中，当新键与现有键冲突时会发生什么？",
    options: [
      "A) The new key is always placed in the next slot",
      "B) The collision is ignored",
      "C) Both keys are moved to a new table",
      "D) The key with shorter probe distance is displaced"
    ],
    optionsChinese: [
      "A) 新键总是放在下一个槽位",
      "B) 忽略冲突",
      "C) 两个键都移到新表",
      "D) 探测距离较短的键被替换"
    ],
    answer: 3,
    explanation: "Robin Hood hashing is a variant of open addressing where, during insertion, if the new key has a longer probe distance than the existing key at a position, they swap places. This equalizes probe distances across all keys, reducing variance in search time and improving worst-case performance.",
    explanationChinese: "罗宾汉哈希是开放寻址的一种变体，在插入时，如果新键的探测距离比当前位置的现有键长，则交换位置。这均衡了所有键的探测距离，减少搜索时间的方差，改善最坏情况性能。",
    diagram: "",
    terms: ["hash_table"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 61,
    q: "What type of binary tree is a max-heap?",
    qChinese: "最大堆是什么类型的二叉树？",
    options: [
      "A) Complete binary tree where parent >= children",
      "B) Binary search tree",
      "C) Full binary tree where parent <= children",
      "D) Balanced BST"
    ],
    optionsChinese: [
      "A) 父节点>=子节点的完全二叉树",
      "B) 二叉搜索树",
      "C) 父节点<=子节点的满二叉树",
      "D) 平衡BST"
    ],
    answer: 0,
    explanation: "A max-heap is a complete binary tree where every parent node has a value greater than or equal to its children. Being complete means all levels are fully filled except possibly the last, which is filled from left to right. This structure enables efficient array-based implementation.",
    explanationChinese: "最大堆是一个完全二叉树，其中每个父节点的值大于或等于其子节点。完全意味着除最后一层外所有层都完全填满，最后一层从左到右填充。这种结构使高效的基于数组的实现成为可能。",
    diagram: "",
    terms: ["heap"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 62,
    q: "In an array-based heap (0-indexed), what is the index of the left child of node at index i?",
    qChinese: "在基于数组的堆（0索引）中，索引为i的节点的左子节点索引是多少？",
    options: [
      "A) 2i",
      "B) 2i + 2",
      "C) 2i + 1",
      "D) i/2"
    ],
    optionsChinese: [
      "A) 2i",
      "B) 2i + 2",
      "C) 2i + 1",
      "D) i/2"
    ],
    answer: 2,
    explanation: "In a 0-indexed array representation of a heap, the left child of node at index i is at index 2i+1, the right child is at 2i+2, and the parent is at floor((i-1)/2). This compact mapping eliminates the need for pointers, making heaps very memory efficient.",
    explanationChinese: "在堆的0索引数组表示中，索引i节点的左子节点在索引2i+1，右子节点在2i+2，父节点在floor((i-1)/2)。这种紧凑映射消除了指针需求，使堆非常节省内存。",
    diagram: "",
    terms: ["heap"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 63,
    q: "What is the time complexity of extracting the maximum element from a max-heap?",
    qChinese: "从最大堆中提取最大元素的时间复杂度是多少？",
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
    explanation: "Extracting the max from a max-heap takes O(log n). The maximum is at the root (found in O(1)), but after removal, we replace it with the last element and perform heapify-down (sift-down), which may traverse the entire height of the tree, taking O(log n) time.",
    explanationChinese: "从最大堆提取最大值需要O(log n)。最大值在根节点（O(1)找到），但移除后，用最后一个元素替换并执行向下堆化（下沉），可能遍历整个树的高度，需要O(log n)时间。",
    diagram: "",
    terms: ["heap", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 64,
    q: "What is the time complexity of building a heap from an unsorted array of n elements?",
    qChinese: "从n个元素的未排序数组构建堆的时间复杂度是多少？",
    options: [
      "A) O(n log n)",
      "B) O(n)",
      "C) O(n^2)",
      "D) O(log n)"
    ],
    optionsChinese: [
      "A) O(n log n)",
      "B) O(n)",
      "C) O(n^2)",
      "D) O(log n)"
    ],
    answer: 1,
    explanation: "Building a heap using the bottom-up (Floyd's) method takes O(n) time. Although naive insertion of n elements takes O(n log n), the bottom-up approach heapifies from leaves to root. Most nodes are near the bottom and require few swaps, making the total work O(n) by summation.",
    explanationChinese: "使用自底向上（Floyd）方法构建堆需要O(n)时间。虽然逐个插入n个元素需O(n log n)，但自底向上方法从叶子到根进行堆化。大部分节点在底部附近只需少量交换，总工作量通过求和为O(n)。",
    diagram: "",
    terms: ["heap", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 65,
    q: "What is a priority queue?",
    qChinese: "什么是优先队列？",
    options: [
      "A) A queue that processes elements in FIFO order",
      "B) An abstract data type where elements are dequeued by priority",
      "C) A stack with priority levels",
      "D) A sorted linked list"
    ],
    optionsChinese: [
      "A) 按FIFO顺序处理元素的队列",
      "B) 元素按优先级出队的抽象数据类型",
      "C) 有优先级的栈",
      "D) 排序链表"
    ],
    answer: 1,
    explanation: "A priority queue is an abstract data type where each element has a priority, and elements are dequeued in order of their priority (highest or lowest first). It supports insert and extract-min/max operations. A binary heap is the most common implementation of a priority queue.",
    explanationChinese: "优先队列是一种抽象数据类型，每个元素有优先级，元素按优先级顺序出队（最高或最低优先）。它支持插入和提取最小/最大值操作。二叉堆是优先队列最常见的实现。",
    diagram: "",
    terms: ["heap"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 66,
    q: "What is the time complexity of inserting an element into a binary heap?",
    qChinese: "将元素插入二叉堆的时间复杂度是多少？",
    options: [
      "A) O(log n)",
      "B) O(1)",
      "C) O(n)",
      "D) O(n log n)"
    ],
    optionsChinese: [
      "A) O(log n)",
      "B) O(1)",
      "C) O(n)",
      "D) O(n log n)"
    ],
    answer: 0,
    explanation: "Inserting into a binary heap takes O(log n) time. The new element is placed at the end of the array (next available position in the complete tree) and then bubbled up (sift-up) by comparing with its parent, swapping if needed, up to the root at most O(log n) times.",
    explanationChinese: "插入二叉堆需要O(log n)时间。新元素放在数组末尾（完全树中下一个可用位置），然后通过与父节点比较向上冒泡（上浮），需要时交换，最多到根节点O(log n)次。",
    diagram: "",
    terms: ["heap", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 67,
    q: "In a min-heap, which element is at the root?",
    qChinese: "在最小堆中，哪个元素在根节点？",
    options: [
      "A) The largest element",
      "B) The median element",
      "C) A random element",
      "D) The smallest element"
    ],
    optionsChinese: [
      "A) 最大元素",
      "B) 中位数元素",
      "C) 随机元素",
      "D) 最小元素"
    ],
    answer: 3,
    explanation: "In a min-heap, the root contains the smallest element because the heap property requires every parent to be less than or equal to its children. This makes finding the minimum O(1), which is why min-heaps are ideal for implementing priority queues that need quick access to the minimum.",
    explanationChinese: "在最小堆中，根节点包含最小元素，因为堆性质要求每个父节点小于或等于其子节点。这使查找最小值为O(1)，这就是为什么最小堆非常适合实现需要快速访问最小值的优先队列。",
    diagram: "",
    terms: ["heap"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 68,
    q: "What is the heapify-down (sift-down) operation?",
    qChinese: "向下堆化（下沉）操作是什么？",
    options: [
      "A) Moving an element up the heap",
      "B) Deleting all elements",
      "C) Moving an element down by swapping with larger/smaller child to restore heap property",
      "D) Sorting the heap"
    ],
    optionsChinese: [
      "A) 将元素向上移动",
      "B) 删除所有元素",
      "C) 通过与较大/较小子节点交换将元素向下移动以恢复堆性质",
      "D) 对堆排序"
    ],
    answer: 2,
    explanation: "Heapify-down (sift-down) moves an element downward in the heap by repeatedly swapping it with its larger child (max-heap) or smaller child (min-heap) until the heap property is restored. It is used after extracting the root element or during bottom-up heap construction.",
    explanationChinese: "向下堆化（下沉）通过反复将元素与其较大子节点（最大堆）或较小子节点（最小堆）交换来向下移动，直到恢复堆性质。它在提取根元素后或自底向上堆构建时使用。",
    diagram: "",
    terms: ["heap"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 69,
    q: "Can you efficiently search for an arbitrary element in a heap?",
    qChinese: "能否在堆中高效搜索任意元素？",
    options: [
      "A) Yes, in O(1)",
      "B) Yes, in O(log n)",
      "C) No, it requires O(n) in the worst case",
      "D) Yes, using binary search in O(log n)"
    ],
    optionsChinese: [
      "A) 是，O(1)",
      "B) 是，O(log n)",
      "C) 不能，最坏情况需要O(n)",
      "D) 是，使用二分搜索O(log n)"
    ],
    answer: 2,
    explanation: "Heaps do not support efficient arbitrary element search. Unlike BSTs, the heap property only guarantees parent-child ordering, not left-right ordering. To find an arbitrary element, you may need to examine every node, resulting in O(n) worst-case time. Heaps are optimized for min/max access only.",
    explanationChinese: "堆不支持高效的任意元素搜索。与BST不同，堆性质只保证父子排序，不保证左右排序。要找任意元素，可能需要检查每个节点，最坏情况为O(n)。堆仅优化了最小/最大值访问。",
    diagram: "",
    terms: ["heap", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 70,
    q: "What is a d-ary heap?",
    qChinese: "什么是d叉堆？",
    options: [
      "A) A heap where each node has at most d children",
      "B) A heap with d levels",
      "C) A heap storing d elements",
      "D) A heap with d arrays"
    ],
    optionsChinese: [
      "A) 每个节点最多有d个子节点的堆",
      "B) 有d层的堆",
      "C) 存储d个元素的堆",
      "D) 有d个数组的堆"
    ],
    answer: 0,
    explanation: "A d-ary heap is a generalization of a binary heap where each node has at most d children instead of 2. This reduces the tree height to O(log_d n), making decrease-key operations faster at O(log_d n), but extract-min becomes slower because each level requires comparing d children.",
    explanationChinese: "d叉堆是二叉堆的泛化，每个节点最多有d个子节点而不是2个。这将树高减少到O(log_d n)，使decrease-key操作更快为O(log_d n)，但extract-min变慢因为每层需比较d个子节点。",
    diagram: "",
    terms: ["heap"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 71,
    q: "What is the advantage of a Fibonacci heap over a binary heap?",
    qChinese: "斐波那契堆相比二叉堆有什么优势？",
    options: [
      "A) Simpler implementation",
      "B) Uses less memory",
      "C) Better cache performance",
      "D) O(1) amortized decrease-key and insert operations"
    ],
    optionsChinese: [
      "A) 实现更简单",
      "B) 使用更少内存",
      "C) 更好的缓存性能",
      "D) O(1)摊还的decrease-key和插入操作"
    ],
    answer: 3,
    explanation: "Fibonacci heaps provide O(1) amortized time for insert, decrease-key, and merge operations, compared to O(log n) for binary heaps. This makes algorithms like Dijkstra's run in O(V log V + E) instead of O((V+E) log V). However, Fibonacci heaps have high constant factors and complex implementation.",
    explanationChinese: "斐波那契堆为插入、decrease-key和合并操作提供O(1)摊还时间，而二叉堆为O(log n)。这使Dijkstra算法运行在O(V log V + E)而非O((V+E) log V)。但斐波那契堆有高常数因子和复杂实现。",
    diagram: "",
    terms: ["heap", "amortized_analysis"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 72,
    q: "How is heap sort performed?",
    qChinese: "堆排序是如何执行的？",
    options: [
      "A) Use quicksort with a heap",
      "B) Sort using a BST",
      "C) Build a heap, then repeatedly extract the min/max",
      "D) Recursively divide and merge using heaps"
    ],
    optionsChinese: [
      "A) 使用堆的快速排序",
      "B) 使用BST排序",
      "C) 构建堆，然后重复提取最小/最大值",
      "D) 使用堆递归分割和合并"
    ],
    answer: 2,
    explanation: "Heap sort works by first building a max-heap from the array in O(n) time, then repeatedly extracting the maximum element and placing it at the end of the array. Each extraction takes O(log n), so the total sorting time is O(n log n). It sorts in-place with O(1) extra space.",
    explanationChinese: "堆排序先在O(n)时间内从数组构建最大堆，然后重复提取最大元素并放在数组末尾。每次提取O(log n)，总排序时间为O(n log n)。它原地排序，只需O(1)额外空间。",
    diagram: "",
    terms: ["heap", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 73,
    q: "What is the space complexity of a binary heap implemented with an array?",
    qChinese: "用数组实现的二叉堆的空间复杂度是多少？",
    options: [
      "A) O(n)",
      "B) O(log n)",
      "C) O(1)",
      "D) O(n^2)"
    ],
    optionsChinese: [
      "A) O(n)",
      "B) O(log n)",
      "C) O(1)",
      "D) O(n^2)"
    ],
    answer: 0,
    explanation: "A binary heap implemented with an array uses O(n) space for n elements. The array stores all heap elements contiguously without needing pointers. This is more space-efficient than pointer-based tree implementations, which require additional memory for left, right, and parent pointers.",
    explanationChinese: "用数组实现的二叉堆对n个元素使用O(n)空间。数组连续存储所有堆元素，不需要指针。这比基于指针的树实现更节省空间，后者需要额外内存存储左、右和父指针。",
    diagram: "",
    terms: ["heap", "space_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 74,
    q: "What is the decrease-key operation in a heap?",
    qChinese: "堆中的decrease-key操作是什么？",
    options: [
      "A) Reducing the value of a key and restoring heap property",
      "B) Removing the smallest key",
      "C) Decreasing the heap size",
      "D) Finding the minimum key"
    ],
    optionsChinese: [
      "A) 减小键值并恢复堆性质",
      "B) 删除最小键",
      "C) 减小堆的大小",
      "D) 找到最小键"
    ],
    answer: 0,
    explanation: "Decrease-key reduces the value of a specific key in the heap and then restores the heap property by moving the element up (in a min-heap) using sift-up. This operation is crucial for algorithms like Dijkstra's and Prim's, taking O(log n) in a binary heap.",
    explanationChinese: "decrease-key减小堆中特定键的值，然后通过上浮操作（在最小堆中向上移动元素）恢复堆性质。此操作对Dijkstra和Prim算法至关重要，在二叉堆中需O(log n)时间。",
    diagram: "",
    terms: ["heap", "dijkstra"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 75,
    q: "Is a sorted array a valid heap?",
    qChinese: "排序数组是有效的堆吗？",
    options: [
      "A) Never",
      "B) Only if it has 2^k - 1 elements",
      "C) A sorted ascending array is a valid min-heap",
      "D) Only for max-heaps"
    ],
    optionsChinese: [
      "A) 永远不是",
      "B) 只有当它有2^k - 1个元素时",
      "C) 升序排序的数组是有效的最小堆",
      "D) 只对最大堆有效"
    ],
    answer: 2,
    explanation: "A sorted ascending array is a valid min-heap because every parent element is smaller than or equal to its children elements in the array-based heap representation. Similarly, a descending sorted array is a valid max-heap. The heap property is automatically satisfied by the sorted order.",
    explanationChinese: "升序排序的数组是有效的最小堆，因为在基于数组的堆表示中，每个父元素都小于或等于其子元素。类似地，降序排序的数组是有效的最大堆。排序顺序自动满足堆性质。",
    diagram: "",
    terms: ["heap"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 76,
    q: "What is the time complexity of merging two binary heaps of size n?",
    qChinese: "合并两个大小为n的二叉堆的时间复杂度是多少？",
    options: [
      "A) O(log n)",
      "B) O(n)",
      "C) O(n log n)",
      "D) O(1)"
    ],
    optionsChinese: [
      "A) O(log n)",
      "B) O(n)",
      "C) O(n log n)",
      "D) O(1)"
    ],
    answer: 1,
    explanation: "Merging two binary heaps of size n takes O(n) time. The simplest approach concatenates both arrays and builds a new heap using the bottom-up heapify method, which runs in O(n). There is no way to merge binary heaps faster than O(n) without using specialized heap structures.",
    explanationChinese: "合并两个大小为n的二叉堆需要O(n)时间。最简单的方法是连接两个数组并使用自底向上堆化方法构建新堆，运行时间为O(n)。不使用专用堆结构无法比O(n)更快地合并二叉堆。",
    diagram: "",
    terms: ["heap", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 77,
    q: "Which heap supports O(1) merge operation?",
    qChinese: "哪种堆支持O(1)合并操作？",
    options: [
      "A) Binary heap",
      "B) Array-based heap",
      "C) d-ary heap",
      "D) Fibonacci heap"
    ],
    optionsChinese: [
      "A) 二叉堆",
      "B) 基于数组的堆",
      "C) d叉堆",
      "D) 斐波那契堆"
    ],
    answer: 3,
    explanation: "Fibonacci heaps support O(1) merge (union) by simply concatenating the root lists of the two heaps and updating the minimum pointer. This is possible because Fibonacci heaps use a lazy structure with a collection of trees rather than a single complete binary tree.",
    explanationChinese: "斐波那契堆通过简单连接两个堆的根列表并更新最小指针来支持O(1)合并（联合）。这是因为斐波那契堆使用惰性结构，包含一组树而非单个完全二叉树。",
    diagram: "",
    terms: ["heap"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 78,
    q: "In a max-heap with array representation [90, 80, 70, 50, 60, 65, 30], what is the parent of element 60?",
    qChinese: "在数组表示为[90, 80, 70, 50, 60, 65, 30]的最大堆中，元素60的父节点是什么？",
    options: [
      "A) 90",
      "B) 50",
      "C) 70",
      "D) 80"
    ],
    optionsChinese: [
      "A) 90",
      "B) 50",
      "C) 70",
      "D) 80"
    ],
    answer: 3,
    explanation: "Element 60 is at index 4 (0-indexed). The parent index is floor((4-1)/2) = floor(1.5) = 1, which contains 80. In the tree structure, 80 is the left child of 90, and 60 is the right child of 80, with 50 being the left child of 80.",
    explanationChinese: "元素60在索引4（0索引）。父节点索引为floor((4-1)/2) = floor(1.5) = 1，包含80。在树结构中，80是90的左子节点，60是80的右子节点，50是80的左子节点。",
    diagram: "",
    terms: ["heap"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 79,
    q: "What is a binomial heap?",
    qChinese: "什么是二项堆？",
    options: [
      "A) A heap with exactly two children per node",
      "B) A collection of binomial trees satisfying heap order",
      "C) A heap for binomial coefficients",
      "D) A probabilistic heap structure"
    ],
    optionsChinese: [
      "A) 每个节点恰好有两个子节点的堆",
      "B) 满足堆序的二项树集合",
      "C) 用于二项式系数的堆",
      "D) 概率堆结构"
    ],
    answer: 1,
    explanation: "A binomial heap is a collection of binomial trees that satisfy the heap property. A binomial tree B_k has 2^k nodes and specific structure. Binomial heaps support merge in O(log n), and all other operations in O(log n). They bridge the gap between binary heaps and Fibonacci heaps.",
    explanationChinese: "二项堆是满足堆性质的二项树集合。二项树B_k有2^k个节点和特定结构。二项堆支持O(log n)合并，所有其他操作也是O(log n)。它们在二叉堆和斐波那契堆之间架起桥梁。",
    diagram: "",
    terms: ["heap"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 80,
    q: "Which operation is NOT efficiently supported by a standard binary heap?",
    qChinese: "标准二叉堆不高效支持哪种操作？",
    options: [
      "A) Find minimum (in min-heap)",
      "B) Insert",
      "C) Extract minimum",
      "D) Search for arbitrary element"
    ],
    optionsChinese: [
      "A) 查找最小值（在最小堆中）",
      "B) 插入",
      "C) 提取最小值",
      "D) 搜索任意元素"
    ],
    answer: 3,
    explanation: "A standard binary heap does not efficiently support searching for an arbitrary element. Find-min is O(1), insert is O(log n), and extract-min is O(log n). But searching for a specific value requires O(n) because the heap property only constrains parent-child relationships, not sibling ordering.",
    explanationChinese: "标准二叉堆不高效支持搜索任意元素。查找最小值为O(1)，插入为O(log n)，提取最小值为O(log n)。但搜索特定值需要O(n)，因为堆性质只约束父子关系，不约束兄弟节点排序。",
    diagram: "",
    terms: ["heap", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 81,
    q: "How can you find the median efficiently using two heaps?",
    qChinese: "如何使用两个堆高效地找到中位数？",
    options: [
      "A) Use two max-heaps",
      "B) Use two min-heaps",
      "C) Use a max-heap for lower half and min-heap for upper half",
      "D) Use a single heap with special indexing"
    ],
    optionsChinese: [
      "A) 使用两个最大堆",
      "B) 使用两个最小堆",
      "C) 使用最大堆存储下半部分，最小堆存储上半部分",
      "D) 使用带特殊索引的单个堆"
    ],
    answer: 2,
    explanation: "To find a running median, maintain a max-heap for the lower half of elements and a min-heap for the upper half. The median is the top of the max-heap (or average of both tops). Balancing the heap sizes after each insertion ensures O(log n) insertion and O(1) median retrieval.",
    explanationChinese: "要找运行中位数，维护一个最大堆存储元素的下半部分和一个最小堆存储上半部分。中位数是最大堆的堆顶（或两个堆顶的平均值）。每次插入后平衡堆大小确保O(log n)插入和O(1)中位数检索。",
    diagram: "",
    terms: ["heap"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 82,
    q: "What is the relationship between a heap and a priority queue?",
    qChinese: "堆和优先队列之间的关系是什么？",
    options: [
      "A) They are the same thing",
      "B) A priority queue is an implementation of a heap",
      "C) A heap is one implementation of a priority queue",
      "D) They are unrelated"
    ],
    optionsChinese: [
      "A) 它们是同一事物",
      "B) 优先队列是堆的实现",
      "C) 堆是优先队列的一种实现",
      "D) 它们无关"
    ],
    answer: 2,
    explanation: "A priority queue is an abstract data type (ADT) that defines operations like insert and extract-min/max. A heap is one concrete implementation of a priority queue. Other implementations include sorted arrays, unsorted arrays, balanced BSTs, and Fibonacci heaps, each with different performance tradeoffs.",
    explanationChinese: "优先队列是一种抽象数据类型（ADT），定义了插入和提取最小/最大值等操作。堆是优先队列的一种具体实现。其他实现包括排序数组、未排序数组、平衡BST和斐波那契堆，各有不同性能权衡。",
    diagram: "",
    terms: ["heap"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 83,
    q: "What is the time complexity of finding the kth largest element using a min-heap of size k?",
    qChinese: "使用大小为k的最小堆找到第k大元素的时间复杂度是多少？",
    options: [
      "A) O(k)",
      "B) O(k log n)",
      "C) O(n log n)",
      "D) O(n log k)"
    ],
    optionsChinese: [
      "A) O(k)",
      "B) O(k log n)",
      "C) O(n log n)",
      "D) O(n log k)"
    ],
    answer: 3,
    explanation: "To find the kth largest element from n elements, maintain a min-heap of size k. For each of the n elements, if it is larger than the heap's minimum, replace the minimum and heapify in O(log k). After processing all n elements in O(n log k), the root is the kth largest.",
    explanationChinese: "从n个元素中找第k大元素，维护一个大小为k的最小堆。对n个元素中的每一个，如果它大于堆的最小值，替换最小值并在O(log k)内堆化。处理所有n个元素后为O(n log k)，根就是第k大元素。",
    diagram: "",
    terms: ["heap", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 84,
    q: "What is a leftist heap?",
    qChinese: "什么是左式堆？",
    options: [
      "A) A heap where every node leans left",
      "B) A heap where the left subtree is always at least as heavy as the right",
      "C) A heap stored in the left half of an array",
      "D) A heap that only allows left rotations"
    ],
    optionsChinese: [
      "A) 每个节点都向左倾斜的堆",
      "B) 左子树总是至少与右子树一样重的堆",
      "C) 存储在数组左半部分的堆",
      "D) 只允许左旋的堆"
    ],
    answer: 1,
    explanation: "A leftist heap is a variant of a binary heap where the rank (length of rightmost path to null) of the left child is always at least as large as the right child. This ensures the rightmost path is short (O(log n)), enabling efficient O(log n) merge operations along this path.",
    explanationChinese: "左式堆是二叉堆的变体，其中左子节点的秩（到空节点的最右路径长度）总是至少与右子节点一样大。这确保最右路径很短（O(log n)），使沿此路径的O(log n)合并操作高效。",
    diagram: "",
    terms: ["heap"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 85,
    q: "Given a min-heap [2, 5, 3, 8, 7, 6, 4], what happens after extracting the minimum?",
    qChinese: "给定最小堆[2, 5, 3, 8, 7, 6, 4]，提取最小值后会发生什么？",
    options: [
      "A) [4, 5, 3, 8, 7, 6]",
      "B) [5, 3, 8, 7, 6, 4]",
      "C) [3, 5, 6, 8, 7, 4]",
      "D) [3, 5, 4, 8, 7, 6]"
    ],
    optionsChinese: [
      "A) [4, 5, 3, 8, 7, 6]",
      "B) [5, 3, 8, 7, 6, 4]",
      "C) [3, 5, 6, 8, 7, 4]",
      "D) [3, 5, 4, 8, 7, 6]"
    ],
    answer: 3,
    explanation: "After extracting min (2), the last element (4) replaces the root: [4, 5, 3, 8, 7, 6]. Heapify-down: 4 vs children 5,3 -> swap with 3: [3, 5, 4, 8, 7, 6]. Then 4 vs children 6 -> no swap needed since 4 < 6. Final result: [3, 5, 4, 8, 7, 6].",
    explanationChinese: "提取最小值（2）后，最后一个元素（4）替换根：[4, 5, 3, 8, 7, 6]。向下堆化：4与子节点5,3比较->与3交换：[3, 5, 4, 8, 7, 6]。然后4与子节点6比较->无需交换因为4<6。最终结果：[3, 5, 4, 8, 7, 6]。",
    diagram: "",
    terms: ["heap"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 86,
    q: "What are the two main ways to represent a graph in memory?",
    qChinese: "在内存中表示图的两种主要方式是什么？",
    options: [
      "A) Array and linked list",
      "B) Stack and queue",
      "C) Hash table and tree",
      "D) Adjacency matrix and adjacency list"
    ],
    optionsChinese: [
      "A) 数组和链表",
      "B) 栈和队列",
      "C) 哈希表和树",
      "D) 邻接矩阵和邻接表"
    ],
    answer: 3,
    explanation: "The two main graph representations are adjacency matrix (a 2D array where entry [i][j] indicates an edge between vertices i and j) and adjacency list (an array of lists where each vertex stores its neighbors). The choice depends on graph density and required operations.",
    explanationChinese: "两种主要的图表示是邻接矩阵（2D数组，其中条目[i][j]表示顶点i和j之间的边）和邻接表（列表数组，每个顶点存储其邻居）。选择取决于图的密度和所需操作。",
    diagram: "",
    terms: ["graph", "adjacency_list"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 87,
    q: "What is the space complexity of an adjacency matrix for a graph with V vertices?",
    qChinese: "具有V个顶点的图的邻接矩阵的空间复杂度是多少？",
    options: [
      "A) O(V)",
      "B) O(V + E)",
      "C) O(V^2)",
      "D) O(E)"
    ],
    optionsChinese: [
      "A) O(V)",
      "B) O(V + E)",
      "C) O(V^2)",
      "D) O(E)"
    ],
    answer: 2,
    explanation: "An adjacency matrix requires O(V^2) space because it stores a V x V grid regardless of the number of edges. This is efficient for dense graphs where E is close to V^2, but wasteful for sparse graphs where most entries are zero.",
    explanationChinese: "邻接矩阵需要O(V^2)空间，因为它存储V x V网格，与边数无关。这对密集图（E接近V^2）高效，但对稀疏图（大多数条目为零）浪费空间。",
    diagram: "",
    terms: ["graph", "space_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 88,
    q: "What is the space complexity of an adjacency list for a graph with V vertices and E edges?",
    qChinese: "具有V个顶点和E条边的图的邻接表的空间复杂度是多少？",
    options: [
      "A) O(V + E)",
      "B) O(V)",
      "C) O(V^2)",
      "D) O(E^2)"
    ],
    optionsChinese: [
      "A) O(V + E)",
      "B) O(V)",
      "C) O(V^2)",
      "D) O(E^2)"
    ],
    answer: 0,
    explanation: "An adjacency list uses O(V + E) space: O(V) for the array of vertex lists and O(E) for storing all edge entries across the lists. For undirected graphs, each edge appears twice, but space remains O(V + E). This is efficient for sparse graphs.",
    explanationChinese: "邻接表使用O(V + E)空间：O(V)用于顶点列表数组，O(E)用于存储所有列表中的边条目。对于无向图，每条边出现两次，但空间仍为O(V + E)。这对稀疏图很高效。",
    diagram: "",
    terms: ["graph", "adjacency_list", "space_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 89,
    q: "What data structure does BFS use?",
    qChinese: "BFS使用什么数据结构？",
    options: [
      "A) Stack",
      "B) Heap",
      "C) Queue",
      "D) Hash table"
    ],
    optionsChinese: [
      "A) 栈",
      "B) 堆",
      "C) 队列",
      "D) 哈希表"
    ],
    answer: 2,
    explanation: "BFS (Breadth-First Search) uses a queue to process vertices level by level. Starting from the source, it enqueues all unvisited neighbors before moving to the next level. The FIFO property of the queue ensures vertices are explored in order of their distance from the source.",
    explanationChinese: "BFS（广度优先搜索）使用队列逐层处理顶点。从源开始，在移到下一层之前将所有未访问的邻居入队。队列的FIFO性质确保顶点按它们与源的距离顺序被探索。",
    diagram: "",
    terms: ["bfs", "graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 90,
    q: "What data structure does DFS use (iterative implementation)?",
    qChinese: "DFS（迭代实现）使用什么数据结构？",
    options: [
      "A) Queue",
      "B) Deque",
      "C) Heap",
      "D) Stack"
    ],
    optionsChinese: [
      "A) 队列",
      "B) 双端队列",
      "C) 堆",
      "D) 栈"
    ],
    answer: 3,
    explanation: "DFS (Depth-First Search) uses a stack for its iterative implementation. It pushes unvisited neighbors onto the stack and pops the top element to explore. The LIFO property of the stack causes DFS to go as deep as possible before backtracking. Recursive DFS uses the call stack implicitly.",
    explanationChinese: "DFS（深度优先搜索）在迭代实现中使用栈。它将未访问的邻居压入栈中并弹出栈顶元素进行探索。栈的LIFO性质使DFS尽可能深入然后回溯。递归DFS隐式使用调用栈。",
    diagram: "",
    terms: ["dfs", "graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 91,
    q: "What is the time complexity of BFS on a graph with V vertices and E edges?",
    qChinese: "在具有V个顶点和E条边的图上BFS的时间复杂度是多少？",
    options: [
      "A) O(V)",
      "B) O(E)",
      "C) O(V + E)",
      "D) O(V * E)"
    ],
    optionsChinese: [
      "A) O(V)",
      "B) O(E)",
      "C) O(V + E)",
      "D) O(V * E)"
    ],
    answer: 2,
    explanation: "BFS visits each vertex once (O(V)) and examines each edge once (O(E)) when using an adjacency list representation. Therefore, the total time complexity is O(V + E). With an adjacency matrix, the time would be O(V^2) since checking all potential neighbors takes O(V) per vertex.",
    explanationChinese: "使用邻接表表示时，BFS访问每个顶点一次（O(V)）并检查每条边一次（O(E)）。因此总时间复杂度为O(V + E)。使用邻接矩阵时，时间为O(V^2)，因为每个顶点检查所有潜在邻居需O(V)。",
    diagram: "",
    terms: ["bfs", "graph", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 92,
    q: "BFS finds the shortest path in which type of graph?",
    qChinese: "BFS在哪种类型的图中找到最短路径？",
    options: [
      "A) Weighted graphs",
      "B) Unweighted graphs",
      "C) Directed acyclic graphs only",
      "D) Complete graphs only"
    ],
    optionsChinese: [
      "A) 加权图",
      "B) 无权图",
      "C) 仅有向无环图",
      "D) 仅完全图"
    ],
    answer: 1,
    explanation: "BFS finds the shortest path (minimum number of edges) in unweighted graphs because it explores vertices in order of their distance from the source. Each level represents one more edge from the source, so the first time a vertex is reached, it is via the shortest path.",
    explanationChinese: "BFS在无权图中找到最短路径（最少边数），因为它按顶点与源的距离顺序探索。每一层代表离源多一条边，所以第一次到达顶点时就是通过最短路径。",
    diagram: "",
    terms: ["bfs", "graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 93,
    q: "What is the purpose of the 'visited' array in BFS and DFS?",
    qChinese: "BFS和DFS中'visited'数组的目的是什么？",
    options: [
      "A) To sort vertices",
      "B) To store edge weights",
      "C) To prevent revisiting vertices and infinite loops",
      "D) To count the number of edges"
    ],
    optionsChinese: [
      "A) 对顶点排序",
      "B) 存储边权重",
      "C) 防止重复访问顶点和无限循环",
      "D) 计算边数"
    ],
    answer: 2,
    explanation: "The visited array marks vertices that have already been explored, preventing the algorithm from revisiting them. Without it, the algorithm could enter infinite loops in cyclic graphs. Each vertex is processed exactly once, ensuring the time complexity remains O(V + E).",
    explanationChinese: "visited数组标记已经被探索的顶点，防止算法重复访问。没有它，算法可能在有环图中进入无限循环。每个顶点恰好被处理一次，确保时间复杂度保持为O(V + E)。",
    diagram: "",
    terms: ["bfs", "dfs", "graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 94,
    q: "Which algorithm can detect cycles in a directed graph?",
    qChinese: "哪种算法可以检测有向图中的环？",
    options: [
      "A) DFS with back edge detection",
      "B) BFS only",
      "C) Dijkstra's algorithm",
      "D) Prim's algorithm"
    ],
    optionsChinese: [
      "A) 带后向边检测的DFS",
      "B) 仅BFS",
      "C) Dijkstra算法",
      "D) Prim算法"
    ],
    answer: 0,
    explanation: "DFS can detect cycles in a directed graph by identifying back edges - edges that point from a descendant to an ancestor in the DFS tree. If DFS encounters a vertex that is currently on the recursion stack (gray/in-progress), a cycle exists. This runs in O(V + E) time.",
    explanationChinese: "DFS可以通过识别后向边（从后代指向DFS树中祖先的边）来检测有向图中的环。如果DFS遇到当前在递归栈上的顶点（灰色/进行中），则存在环。运行时间为O(V + E)。",
    diagram: "",
    terms: ["dfs", "graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 95,
    q: "What is topological sorting?",
    qChinese: "什么是拓扑排序？",
    options: [
      "A) Sorting vertices by their degree",
      "B) Arranging vertices in a circle",
      "C) Sorting edges by weight",
      "D) A linear ordering of vertices such that for every edge (u,v), u comes before v"
    ],
    optionsChinese: [
      "A) 按顶点度数排序",
      "B) 将顶点排列成圆",
      "C) 按边权重排序",
      "D) 顶点的线性排序，使得对于每条边(u,v)，u在v之前"
    ],
    answer: 3,
    explanation: "Topological sorting produces a linear ordering of vertices in a directed acyclic graph (DAG) such that for every directed edge (u,v), vertex u appears before vertex v. It is used for task scheduling, dependency resolution, and course prerequisite planning.",
    explanationChinese: "拓扑排序产生有向无环图（DAG）中顶点的线性排序，使得对于每条有向边(u,v)，顶点u出现在顶点v之前。它用于任务调度、依赖解析和课程先修课程规划。",
    diagram: "",
    terms: ["topological_sort", "graph", "dfs"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 96,
    q: "Which graphs can have a topological ordering?",
    qChinese: "哪些图可以有拓扑排序？",
    options: [
      "A) Any graph",
      "B) Only directed acyclic graphs (DAGs)",
      "C) Only undirected graphs",
      "D) Only complete graphs"
    ],
    optionsChinese: [
      "A) 任何图",
      "B) 仅有向无环图（DAG）",
      "C) 仅无向图",
      "D) 仅完全图"
    ],
    answer: 1,
    explanation: "Only directed acyclic graphs (DAGs) can have a topological ordering. If a graph has a cycle, no valid topological ordering exists because there is no way to linearly order vertices involved in a cycle such that all edges point forward. A DAG always has at least one valid topological sort.",
    explanationChinese: "只有有向无环图（DAG）可以有拓扑排序。如果图有环，则不存在有效的拓扑排序，因为无法将参与环的顶点线性排序使所有边向前指向。DAG总是至少有一个有效的拓扑排序。",
    diagram: "",
    terms: ["topological_sort", "graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 97,
    q: "What is Kahn's algorithm used for?",
    qChinese: "Kahn算法用于什么？",
    options: [
      "A) Finding shortest paths",
      "B) Finding minimum spanning trees",
      "C) Topological sorting using BFS",
      "D) Detecting bridges in a graph"
    ],
    optionsChinese: [
      "A) 寻找最短路径",
      "B) 寻找最小生成树",
      "C) 使用BFS进行拓扑排序",
      "D) 检测图中的桥"
    ],
    answer: 2,
    explanation: "Kahn's algorithm performs topological sorting using a BFS approach. It starts with vertices having zero in-degree, removes them from the graph, updates in-degrees of neighbors, and repeats. If all vertices are processed, the order is a valid topological sort; otherwise, a cycle exists.",
    explanationChinese: "Kahn算法使用BFS方法执行拓扑排序。它从入度为零的顶点开始，将它们从图中移除，更新邻居的入度，然后重复。如果所有顶点都被处理，顺序是有效的拓扑排序；否则存在环。",
    diagram: "",
    terms: ["topological_sort", "bfs", "graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 98,
    q: "What are strongly connected components (SCCs) in a directed graph?",
    qChinese: "有向图中的强连通分量（SCC）是什么？",
    options: [
      "A) Maximal sets of vertices where every vertex is reachable from every other",
      "B) Components where every vertex has the same degree",
      "C) Components with the most edges",
      "D) Components that form trees"
    ],
    optionsChinese: [
      "A) 每个顶点都可从其他每个顶点到达的最大顶点集",
      "B) 每个顶点度数相同的分量",
      "C) 边数最多的分量",
      "D) 形成树的分量"
    ],
    answer: 0,
    explanation: "Strongly connected components are maximal subsets of vertices in a directed graph where every vertex is reachable from every other vertex within the subset. Algorithms like Kosaraju's and Tarjan's can find all SCCs in O(V + E) time using DFS-based approaches.",
    explanationChinese: "强连通分量是有向图中的最大顶点子集，其中子集内的每个顶点都可从其他每个顶点到达。Kosaraju和Tarjan等算法可以使用基于DFS的方法在O(V + E)时间内找到所有SCC。",
    diagram: "",
    terms: ["graph", "dfs"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 99,
    q: "In DFS, what is a back edge?",
    qChinese: "在DFS中，什么是后向边？",
    options: [
      "A) An edge to an unvisited vertex",
      "B) An edge to a vertex currently on the recursion stack",
      "C) An edge to a previously finished vertex",
      "D) An edge connecting two trees"
    ],
    optionsChinese: [
      "A) 到未访问顶点的边",
      "B) 到当前在递归栈上的顶点的边",
      "C) 到之前已完成的顶点的边",
      "D) 连接两棵树的边"
    ],
    answer: 1,
    explanation: "A back edge in DFS connects a vertex to one of its ancestors in the DFS tree (a vertex currently on the recursion stack). Back edges indicate the presence of a cycle in directed graphs. Tree edges go to unvisited nodes, forward edges go to descendants, and cross edges go to other branches.",
    explanationChinese: "DFS中的后向边将顶点连接到DFS树中的祖先（当前在递归栈上的顶点）。后向边表示有向图中存在环。树边到未访问节点，前向边到后代，交叉边到其他分支。",
    diagram: "",
    terms: ["dfs", "graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 100,
    q: "What is the time complexity of checking if an edge exists between two vertices in an adjacency matrix?",
    qChinese: "在邻接矩阵中检查两个顶点之间是否存在边的时间复杂度是多少？",
    options: [
      "A) O(1)",
      "B) O(V)",
      "C) O(E)",
      "D) O(V + E)"
    ],
    optionsChinese: [
      "A) O(1)",
      "B) O(V)",
      "C) O(E)",
      "D) O(V + E)"
    ],
    answer: 0,
    explanation: "Checking if an edge exists between vertices i and j in an adjacency matrix takes O(1) time by simply accessing matrix[i][j]. This is the main advantage of adjacency matrices. In contrast, an adjacency list requires O(degree(i)) time to search through vertex i's neighbor list.",
    explanationChinese: "在邻接矩阵中检查顶点i和j之间是否存在边只需O(1)时间，只需访问matrix[i][j]。这是邻接矩阵的主要优势。相比之下，邻接表需要O(degree(i))时间来搜索顶点i的邻居列表。",
    diagram: "",
    terms: ["graph", "adjacency_list", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 101,
    q: "Which algorithm finds all articulation points (cut vertices) in a graph?",
    qChinese: "哪种算法可以找到图中所有的关节点（割点）？",
    options: [
      "A) BFS",
      "B) Tarjan's DFS-based algorithm",
      "C) Dijkstra's",
      "D) Kruskal's"
    ],
    optionsChinese: [
      "A) BFS",
      "B) Tarjan基于DFS的算法",
      "C) Dijkstra算法",
      "D) Kruskal算法"
    ],
    answer: 1,
    explanation: "Tarjan's DFS-based algorithm finds all articulation points in O(V + E) time. An articulation point is a vertex whose removal disconnects the graph. The algorithm uses DFS discovery times and low values to identify vertices that are critical for graph connectivity.",
    explanationChinese: "Tarjan基于DFS的算法在O(V + E)时间内找到所有关节点。关节点是移除后会使图断开的顶点。该算法使用DFS发现时间和low值来识别对图连通性至关重要的顶点。",
    diagram: "",
    terms: ["graph", "dfs"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 102,
    q: "What is a bipartite graph?",
    qChinese: "什么是二部图？",
    options: [
      "A) A graph with exactly two vertices",
      "B) A graph with two connected components",
      "C) A graph whose vertices can be divided into two disjoint sets with edges only between sets",
      "D) A graph where every vertex has degree 2"
    ],
    optionsChinese: [
      "A) 恰好有两个顶点的图",
      "B) 有两个连通分量的图",
      "C) 顶点可分为两个不相交集合且边只在集合间的图",
      "D) 每个顶点度数为2的图"
    ],
    answer: 2,
    explanation: "A bipartite graph is one whose vertices can be divided into two disjoint sets such that every edge connects a vertex in one set to a vertex in the other set. Equivalently, a graph is bipartite if and only if it contains no odd-length cycles. BFS can verify bipartiteness in O(V + E).",
    explanationChinese: "二部图是其顶点可以分为两个不相交集合的图，使得每条边连接一个集合中的顶点到另一个集合中的顶点。等价地，图是二部图当且仅当它不包含奇数长度的环。BFS可以在O(V + E)内验证二部性。",
    diagram: "",
    terms: ["graph", "bfs"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 103,
    q: "How can BFS be used to check if a graph is bipartite?",
    qChinese: "如何使用BFS检查图是否为二部图？",
    options: [
      "A) Check if BFS visits all vertices",
      "B) Check if BFS tree is balanced",
      "C) Count the number of levels in BFS",
      "D) Try to 2-color the graph during BFS; if a conflict arises, it is not bipartite"
    ],
    optionsChinese: [
      "A) 检查BFS是否访问所有顶点",
      "B) 检查BFS树是否平衡",
      "C) 计算BFS中的层数",
      "D) 在BFS过程中尝试2着色；如果出现冲突则不是二部图"
    ],
    answer: 3,
    explanation: "BFS can check bipartiteness by attempting to 2-color the graph: assign the source one color and alternate colors at each BFS level. If an edge is found between two vertices of the same color, the graph is not bipartite. This runs in O(V + E) time.",
    explanationChinese: "BFS通过尝试2着色来检查二部性：给源分配一种颜色，在每个BFS层交替颜色。如果发现相同颜色的两个顶点之间有边，则图不是二部图。运行时间为O(V + E)。",
    diagram: "",
    terms: ["bfs", "graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 104,
    q: "What is the difference between a directed graph and an undirected graph?",
    qChinese: "有向图和无向图有什么区别？",
    options: [
      "A) Directed graphs have weighted edges",
      "B) Directed graphs must be connected",
      "C) Undirected graphs cannot have cycles",
      "D) In directed graphs, edges have a direction from one vertex to another"
    ],
    optionsChinese: [
      "A) 有向图有加权边",
      "B) 有向图必须是连通的",
      "C) 无向图不能有环",
      "D) 在有向图中，边有从一个顶点到另一个顶点的方向"
    ],
    answer: 3,
    explanation: "In a directed graph (digraph), edges have a direction: edge (u,v) goes from u to v but not necessarily from v to u. In an undirected graph, edges are bidirectional: edge {u,v} connects u to v and v to u equally. This affects algorithms and properties like connectivity and cycles.",
    explanationChinese: "在有向图中，边有方向：边(u,v)从u到v但不一定从v到u。在无向图中，边是双向的：边{u,v}同等地连接u到v和v到u。这影响算法和连通性、环等性质。",
    diagram: "",
    terms: ["graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 105,
    q: "What is the degree of a vertex in an undirected graph?",
    qChinese: "无向图中顶点的度数是什么？",
    options: [
      "A) The number of vertices in the graph",
      "B) The shortest path to any other vertex",
      "C) The number of edges incident to the vertex",
      "D) The weight of the vertex"
    ],
    optionsChinese: [
      "A) 图中顶点的数量",
      "B) 到任何其他顶点的最短路径",
      "C) 与该顶点关联的边数",
      "D) 顶点的权重"
    ],
    answer: 2,
    explanation: "The degree of a vertex in an undirected graph is the number of edges incident to it (connected to it). The sum of all vertex degrees equals twice the number of edges (handshaking lemma). In directed graphs, we distinguish between in-degree and out-degree.",
    explanationChinese: "无向图中顶点的度数是与之关联（连接）的边数。所有顶点度数之和等于边数的两倍（握手定理）。在有向图中，我们区分入度和出度。",
    diagram: "",
    terms: ["graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 106,
    q: "What is a connected component in an undirected graph?",
    qChinese: "无向图中的连通分量是什么？",
    options: [
      "A) A subgraph with no edges",
      "B) A maximal set of vertices where every pair is connected by a path",
      "C) A cycle in the graph",
      "D) A vertex with maximum degree"
    ],
    optionsChinese: [
      "A) 没有边的子图",
      "B) 每对顶点都通过路径连接的最大顶点集",
      "C) 图中的环",
      "D) 度数最大的顶点"
    ],
    answer: 1,
    explanation: "A connected component is a maximal subgraph where every pair of vertices is connected by a path, and no additional vertex from the rest of the graph can be added while maintaining this property. BFS or DFS can find all connected components in O(V + E) time.",
    explanationChinese: "连通分量是一个最大子图，其中每对顶点都通过路径连接，且不能从图的其余部分添加额外顶点而保持此性质。BFS或DFS可以在O(V + E)时间内找到所有连通分量。",
    diagram: "",
    terms: ["graph", "bfs", "dfs"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 107,
    q: "How many edges does a tree with n vertices have?",
    qChinese: "有n个顶点的树有多少条边？",
    options: [
      "A) n",
      "B) n * (n-1) / 2",
      "C) n + 1",
      "D) n - 1"
    ],
    optionsChinese: [
      "A) n条",
      "B) n * (n-1) / 2条",
      "C) n + 1条",
      "D) n - 1条"
    ],
    answer: 3,
    explanation: "A tree with n vertices always has exactly n-1 edges. A tree is a connected acyclic graph, and removing any edge disconnects it while adding any edge creates a cycle. This property is fundamental and can be proved by induction on the number of vertices.",
    explanationChinese: "有n个顶点的树总是恰好有n-1条边。树是连通无环图，删除任何边会使其断开，添加任何边会创建环。这个性质是基本的，可以通过对顶点数的归纳来证明。",
    diagram: "",
    terms: ["graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 108,
    q: "What does DFS post-order numbering help with in directed graphs?",
    qChinese: "DFS后序编号在有向图中有什么帮助？",
    options: [
      "A) Finding shortest paths",
      "B) Counting connected components",
      "C) Finding minimum spanning trees",
      "D) Topological sorting (reverse post-order gives topological order)"
    ],
    optionsChinese: [
      "A) 寻找最短路径",
      "B) 计算连通分量",
      "C) 寻找最小生成树",
      "D) 拓扑排序（逆后序给出拓扑顺序）"
    ],
    answer: 3,
    explanation: "The reverse of DFS post-order numbering gives a valid topological ordering for a DAG. When DFS finishes processing a vertex (all descendants explored), it assigns a post-order number. Reversing this order ensures that for every edge (u,v), u appears before v in the ordering.",
    explanationChinese: "DFS后序编号的逆序给出DAG的有效拓扑排序。当DFS完成处理一个顶点（所有后代已探索），它分配后序编号。逆转此顺序确保对于每条边(u,v)，u在排序中出现在v之前。",
    diagram: "",
    terms: ["dfs", "topological_sort", "graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 109,
    q: "When is an adjacency matrix preferred over an adjacency list?",
    qChinese: "什么时候邻接矩阵优于邻接表？",
    options: [
      "A) When the graph is dense or edge existence queries are frequent",
      "B) When the graph is sparse",
      "C) When memory is limited",
      "D) When the graph is a tree"
    ],
    optionsChinese: [
      "A) 当图是密集的或频繁查询边是否存在",
      "B) 当图是稀疏的",
      "C) 当内存有限时",
      "D) 当图是树时"
    ],
    answer: 0,
    explanation: "An adjacency matrix is preferred for dense graphs (where E is close to V^2) because the O(V^2) space is comparable to the number of edges. It is also preferred when frequent O(1) edge existence queries are needed. For sparse graphs, adjacency lists are more space-efficient.",
    explanationChinese: "邻接矩阵适用于密集图（E接近V^2），因为O(V^2)空间与边数相当。当需要频繁O(1)边存在查询时也更优。对于稀疏图，邻接表更节省空间。",
    diagram: "",
    terms: ["graph", "adjacency_list"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 110,
    q: "What is a DAG?",
    qChinese: "什么是DAG？",
    options: [
      "A) Directed Acyclic Graph - a directed graph with no cycles",
      "B) Double Adjacency Graph",
      "C) Depth-Adjusted Graph",
      "D) Dynamic Array Graph"
    ],
    optionsChinese: [
      "A) 有向无环图——没有环的有向图",
      "B) 双邻接图",
      "C) 深度调整图",
      "D) 动态数组图"
    ],
    answer: 0,
    explanation: "DAG stands for Directed Acyclic Graph, which is a directed graph containing no cycles. DAGs are fundamental in computer science, used for representing dependencies, task scheduling, and data processing pipelines. Every DAG has at least one topological ordering of its vertices.",
    explanationChinese: "DAG代表有向无环图，是不包含环的有向图。DAG在计算机科学中是基础性的，用于表示依赖关系、任务调度和数据处理管道。每个DAG至少有一个其顶点的拓扑排序。",
    diagram: "",
    terms: ["graph", "topological_sort"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 111,
    q: "What is an Euler path in a graph?",
    qChinese: "图中的欧拉路径是什么？",
    options: [
      "A) A path visiting every vertex exactly once",
      "B) A path traversing every edge exactly once",
      "C) The shortest path between two vertices",
      "D) A path with no repeated vertices"
    ],
    optionsChinese: [
      "A) 恰好访问每个顶点一次的路径",
      "B) 恰好遍历每条边一次的路径",
      "C) 两个顶点之间的最短路径",
      "D) 没有重复顶点的路径"
    ],
    answer: 1,
    explanation: "An Euler path traverses every edge in the graph exactly once. For an undirected graph, an Euler path exists if exactly 0 or 2 vertices have odd degree. An Euler circuit (path that starts and ends at the same vertex) exists if all vertices have even degree.",
    explanationChinese: "欧拉路径恰好遍历图中每条边一次。对于无向图，当恰好有0或2个顶点有奇数度时存在欧拉路径。欧拉回路（起点和终点相同的路径）在所有顶点度数为偶数时存在。",
    diagram: "",
    terms: ["graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 112,
    q: "What is DFS discovery time and finish time used for?",
    qChinese: "DFS的发现时间和完成时间用于什么？",
    options: [
      "A) Measuring algorithm speed",
      "B) Computing shortest paths",
      "C) Classifying edges and detecting properties like cycles and SCCs",
      "D) Balancing trees"
    ],
    optionsChinese: [
      "A) 测量算法速度",
      "B) 计算最短路径",
      "C) 分类边和检测环、SCC等性质",
      "D) 平衡树"
    ],
    answer: 2,
    explanation: "DFS timestamps (discovery and finish time) classify edges into tree, back, forward, and cross edges. Back edges indicate cycles, and finish times help find topological order and strongly connected components. The parenthesis theorem states that intervals are either nested or disjoint.",
    explanationChinese: "DFS时间戳（发现时间和完成时间）将边分类为树边、后向边、前向边和交叉边。后向边表示环，完成时间帮助找到拓扑顺序和强连通分量。括号定理指出时间区间要么嵌套要么不相交。",
    diagram: "",
    terms: ["dfs", "graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 113,
    q: "How many connected components can BFS find in a single run?",
    qChinese: "BFS在单次运行中可以找到多少个连通分量？",
    options: [
      "A) Only 1",
      "B) All of them if run from each unvisited vertex",
      "C) Exactly 2",
      "D) It cannot find connected components"
    ],
    optionsChinese: [
      "A) 只有1个",
      "B) 如果从每个未访问顶点运行则全部",
      "C) 恰好2个",
      "D) 它不能找到连通分量"
    ],
    answer: 1,
    explanation: "A single BFS from one source finds only the connected component containing that source. To find all connected components, we run BFS from each unvisited vertex. Each BFS call discovers one component. The total time across all calls remains O(V + E) since each vertex and edge is processed once.",
    explanationChinese: "从一个源开始的单次BFS只找到包含该源的连通分量。要找到所有连通分量，从每个未访问顶点运行BFS。每次BFS调用发现一个分量。所有调用的总时间仍为O(V + E)，因为每个顶点和边只处理一次。",
    diagram: "",
    terms: ["bfs", "graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 114,
    q: "What is the time complexity of DFS on a graph represented as an adjacency list?",
    qChinese: "在邻接表表示的图上DFS的时间复杂度是多少？",
    options: [
      "A) O(V^2)",
      "B) O(V + E)",
      "C) O(V * E)",
      "D) O(E^2)"
    ],
    optionsChinese: [
      "A) O(V^2)",
      "B) O(V + E)",
      "C) O(V * E)",
      "D) O(E^2)"
    ],
    answer: 1,
    explanation: "DFS on a graph with adjacency list representation runs in O(V + E). Each vertex is visited once (O(V)), and for each vertex, all its adjacent edges are examined once (total O(E)). With an adjacency matrix, DFS takes O(V^2) because checking all neighbors of a vertex takes O(V).",
    explanationChinese: "在邻接表表示的图上DFS运行时间为O(V + E)。每个顶点被访问一次（O(V)），对每个顶点，其所有相邻边被检查一次（总共O(E)）。用邻接矩阵时DFS需O(V^2)，因为检查顶点的所有邻居需O(V)。",
    diagram: "",
    terms: ["dfs", "graph", "adjacency_list", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 115,
    q: "What is a bridge in a graph?",
    qChinese: "图中的桥是什么？",
    options: [
      "A) A vertex connecting two components",
      "B) An edge whose removal disconnects the graph",
      "C) The shortest edge in the graph",
      "D) An edge between two components"
    ],
    optionsChinese: [
      "A) 连接两个分量的顶点",
      "B) 移除后使图断开的边",
      "C) 图中最短的边",
      "D) 两个分量之间的边"
    ],
    answer: 1,
    explanation: "A bridge is an edge whose removal increases the number of connected components in the graph. Bridges can be found in O(V + E) using a modified DFS that tracks discovery times and low values. An edge (u,v) is a bridge if there is no back edge from any descendant of v reaching u or an ancestor of u.",
    explanationChinese: "桥是移除后增加图中连通分量数量的边。可以使用跟踪发现时间和low值的修改DFS在O(V + E)内找到桥。如果v的任何后代没有后向边到达u或u的祖先，则边(u,v)是桥。",
    diagram: "",
    terms: ["graph", "dfs"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 116,
    q: "In BFS, the shortest path distance from the source is determined by which measure?",
    qChinese: "在BFS中，从源到目标的最短路径距离由什么度量确定？",
    options: [
      "A) Sum of edge weights",
      "B) DFS depth",
      "C) Number of vertices visited",
      "D) Number of edges (hops)"
    ],
    optionsChinese: [
      "A) 边权重之和",
      "B) DFS深度",
      "C) 访问的顶点数",
      "D) 边数（跳数）"
    ],
    answer: 3,
    explanation: "BFS determines shortest paths by counting the number of edges (hops) between vertices. It processes vertices level by level, where each level represents one additional edge from the source. This only gives shortest paths for unweighted graphs; weighted graphs need Dijkstra's or similar.",
    explanationChinese: "BFS通过计算顶点之间的边数（跳数）来确定最短路径。它逐层处理顶点，每一层代表离源多一条边。这只对无权图给出最短路径；加权图需要Dijkstra等算法。",
    diagram: "",
    terms: ["bfs", "graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 117,
    q: "How can you find the shortest cycle in an undirected unweighted graph?",
    qChinese: "如何在无向无权图中找到最短环？",
    options: [
      "A) DFS from every vertex",
      "B) BFS from every vertex and find the minimum cycle length",
      "C) Topological sort",
      "D) Floyd-Warshall algorithm"
    ],
    optionsChinese: [
      "A) 从每个顶点进行DFS",
      "B) 从每个顶点进行BFS并找到最小环长度",
      "C) 拓扑排序",
      "D) Floyd-Warshall算法"
    ],
    answer: 1,
    explanation: "To find the shortest cycle (girth) in an undirected unweighted graph, run BFS from each vertex. During BFS, if an already-visited vertex at the same or previous level is found, a cycle is detected. The minimum across all BFS runs gives the girth. Total time is O(V*(V+E)).",
    explanationChinese: "要在无向无权图中找最短环（围长），从每个顶点运行BFS。在BFS过程中，如果发现同层或上一层已访问的顶点，则检测到环。所有BFS运行中的最小值给出围长。总时间为O(V*(V+E))。",
    diagram: "",
    terms: ["bfs", "graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 118,
    q: "What is the purpose of Kosaraju's algorithm?",
    qChinese: "Kosaraju算法的目的是什么？",
    options: [
      "A) Finding shortest paths",
      "B) Sorting vertices",
      "C) Finding minimum spanning trees",
      "D) Finding strongly connected components"
    ],
    optionsChinese: [
      "A) 寻找最短路径",
      "B) 排序顶点",
      "C) 寻找最小生成树",
      "D) 寻找强连通分量"
    ],
    answer: 3,
    explanation: "Kosaraju's algorithm finds all strongly connected components (SCCs) in a directed graph in O(V+E) time. It performs two DFS passes: first on the original graph to get finish-time ordering, then on the transposed graph in reverse finish-time order to identify each SCC.",
    explanationChinese: "Kosaraju算法在O(V+E)时间内找到有向图中所有强连通分量（SCC）。它执行两次DFS：首先在原图上获取完成时间顺序，然后在转置图上按逆完成时间顺序识别每个SCC。",
    diagram: "",
    terms: ["graph", "dfs"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 119,
    q: "What type of graph can have a negative-weight cycle?",
    qChinese: "什么类型的图可以有负权环？",
    options: [
      "A) Unweighted graph",
      "B) Tree",
      "C) Unweighted undirected graph",
      "D) Weighted directed graph"
    ],
    optionsChinese: [
      "A) 无权图",
      "B) 树",
      "C) 无权无向图",
      "D) 加权有向图"
    ],
    answer: 3,
    explanation: "Negative-weight cycles can only exist in weighted directed graphs where edges have negative weights. In undirected graphs, a negative edge creates a 2-edge negative cycle immediately. Trees have no cycles at all. Negative cycles make shortest path undefined since you can always reduce path length.",
    explanationChinese: "负权环只能存在于边有负权重的加权有向图中。在无向图中，负权边立即创建2条边的负环。树根本没有环。负权环使最短路径无定义，因为总可以继续减少路径长度。",
    diagram: "",
    terms: ["graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 120,
    q: "What is the adjacency list representation of an edge (u, v) with weight w in a weighted graph?",
    qChinese: "加权图中边(u, v)权重为w的邻接表表示是什么？",
    options: [
      "A) adj[u] stores v only",
      "B) adj[u] stores w only",
      "C) A separate weight matrix is needed",
      "D) adj[u] stores the pair (v, w)"
    ],
    optionsChinese: [
      "A) adj[u]只存储v",
      "B) adj[u]只存储w",
      "C) 需要单独的权重矩阵",
      "D) adj[u]存储对(v, w)"
    ],
    answer: 3,
    explanation: "In a weighted graph's adjacency list, each entry in adj[u] stores a pair (v, w) representing the neighbor vertex v and the edge weight w. For undirected graphs, (v, w) is added to adj[u] and (u, w) is added to adj[v]. This allows efficient traversal with weight information.",
    explanationChinese: "在加权图的邻接表中，adj[u]中的每个条目存储对(v, w)，表示邻居顶点v和边权重w。对于无向图，(v, w)加到adj[u]，(u, w)加到adj[v]。这允许带权重信息的高效遍历。",
    diagram: "",
    terms: ["graph", "adjacency_list"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 121,
    q: "What is Dijkstra's algorithm used for?",
    qChinese: "Dijkstra算法用于什么？",
    options: [
      "A) Finding minimum spanning trees",
      "B) Finding single-source shortest paths in graphs with non-negative weights",
      "C) Sorting a graph",
      "D) Finding all pairs shortest paths"
    ],
    optionsChinese: [
      "A) 寻找最小生成树",
      "B) 在非负权重图中寻找单源最短路径",
      "C) 对图排序",
      "D) 寻找所有对最短路径"
    ],
    answer: 1,
    explanation: "Dijkstra's algorithm finds the shortest paths from a single source vertex to all other vertices in a graph with non-negative edge weights. It uses a greedy approach with a priority queue, always processing the vertex with the smallest known distance. It cannot handle negative edge weights.",
    explanationChinese: "Dijkstra算法在非负边权重的图中找从单个源顶点到所有其他顶点的最短路径。它使用带优先队列的贪心方法，总是处理具有最小已知距离的顶点。它不能处理负边权重。",
    diagram: "",
    terms: ["dijkstra", "graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 122,
    q: "What is the time complexity of Dijkstra's algorithm using a binary min-heap?",
    qChinese: "使用二叉最小堆的Dijkstra算法的时间复杂度是多少？",
    options: [
      "A) O(V^2)",
      "B) O((V + E) log V)",
      "C) O(V * E)",
      "D) O(E log E)"
    ],
    optionsChinese: [
      "A) O(V^2)",
      "B) O((V + E) log V)",
      "C) O(V * E)",
      "D) O(E log E)"
    ],
    answer: 1,
    explanation: "With a binary min-heap, Dijkstra's runs in O((V + E) log V). Each vertex is extracted from the heap once (V * log V), and each edge may trigger a decrease-key operation (E * log V). For sparse graphs this is efficient; for dense graphs, the simple O(V^2) array implementation may be faster.",
    explanationChinese: "使用二叉最小堆，Dijkstra运行在O((V + E) log V)。每个顶点从堆中提取一次（V * log V），每条边可能触发decrease-key操作（E * log V）。对稀疏图这很高效；对密集图，简单的O(V^2)数组实现可能更快。",
    diagram: "",
    terms: ["dijkstra", "heap", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 123,
    q: "Why does Dijkstra's algorithm fail with negative edge weights?",
    qChinese: "为什么Dijkstra算法在负边权重时失败？",
    options: [
      "A) Once a vertex is finalized, a negative edge could later provide a shorter path",
      "B) It cannot handle large numbers",
      "C) It runs out of memory",
      "D) It enters an infinite loop"
    ],
    optionsChinese: [
      "A) 一旦顶点被确定，负边可能后来提供更短路径",
      "B) 它不能处理大数",
      "C) 它耗尽内存",
      "D) 它进入无限循环"
    ],
    answer: 0,
    explanation: "Dijkstra's algorithm assumes that once a vertex is removed from the priority queue with its shortest distance, no shorter path exists. Negative edges violate this assumption because a path through a negative edge discovered later could be shorter than the already-finalized distance.",
    explanationChinese: "Dijkstra算法假设一旦顶点以其最短距离从优先队列中移除，就不存在更短的路径。负边违反此假设，因为后来发现的通过负边的路径可能比已确定的距离更短。",
    diagram: "",
    terms: ["dijkstra", "graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 124,
    q: "What is the Bellman-Ford algorithm used for?",
    qChinese: "Bellman-Ford算法用于什么？",
    options: [
      "A) Finding shortest paths in unweighted graphs",
      "B) Finding minimum spanning trees",
      "C) Single-source shortest paths that can handle negative edge weights",
      "D) Topological sorting"
    ],
    optionsChinese: [
      "A) 在无权图中寻找最短路径",
      "B) 寻找最小生成树",
      "C) 可以处理负边权重的单源最短路径",
      "D) 拓扑排序"
    ],
    answer: 2,
    explanation: "The Bellman-Ford algorithm finds single-source shortest paths and can handle negative edge weights, unlike Dijkstra's. It relaxes all edges V-1 times. It can also detect negative-weight cycles: if any distance decreases on the Vth iteration, a negative cycle exists.",
    explanationChinese: "Bellman-Ford算法寻找单源最短路径，与Dijkstra不同，它可以处理负边权重。它对所有边松弛V-1次。它还可以检测负权环：如果在第V次迭代中任何距离减小，则存在负权环。",
    diagram: "",
    terms: ["graph", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 125,
    q: "What is the time complexity of the Bellman-Ford algorithm?",
    qChinese: "Bellman-Ford算法的时间复杂度是多少？",
    options: [
      "A) O(V + E)",
      "B) O(E log V)",
      "C) O(V^2)",
      "D) O(V * E)"
    ],
    optionsChinese: [
      "A) O(V + E)",
      "B) O(E log V)",
      "C) O(V^2)",
      "D) O(V * E)"
    ],
    answer: 3,
    explanation: "The Bellman-Ford algorithm has O(V * E) time complexity. It performs V-1 iterations, and in each iteration, it relaxes all E edges. This is slower than Dijkstra's O((V+E) log V) but necessary for graphs with negative weights. Early termination can improve practical performance.",
    explanationChinese: "Bellman-Ford算法的时间复杂度为O(V * E)。它执行V-1次迭代，每次迭代松弛所有E条边。这比Dijkstra的O((V+E) log V)慢，但对于有负权重的图是必要的。提前终止可以改善实际性能。",
    diagram: "",
    terms: ["graph", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 126,
    q: "What does the Floyd-Warshall algorithm compute?",
    qChinese: "Floyd-Warshall算法计算什么？",
    options: [
      "A) Single-source shortest paths",
      "B) Maximum flow",
      "C) Minimum spanning tree",
      "D) All-pairs shortest paths"
    ],
    optionsChinese: [
      "A) 单源最短路径",
      "B) 最大流",
      "C) 最小生成树",
      "D) 所有对最短路径"
    ],
    answer: 3,
    explanation: "Floyd-Warshall computes shortest paths between all pairs of vertices simultaneously. It uses dynamic programming with the recurrence: dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]) for each intermediate vertex k. It handles negative edges but not negative cycles.",
    explanationChinese: "Floyd-Warshall同时计算所有顶点对之间的最短路径。它使用动态规划，递推为：dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])，对每个中间顶点k。它处理负边但不处理负权环。",
    diagram: "",
    terms: ["graph", "dynamic_programming"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 127,
    q: "What is the time complexity of Floyd-Warshall?",
    qChinese: "Floyd-Warshall的时间复杂度是多少？",
    options: [
      "A) O(V^2)",
      "B) O(V^3)",
      "C) O(V^2 * E)",
      "D) O(V * E)"
    ],
    optionsChinese: [
      "A) O(V^2)",
      "B) O(V^3)",
      "C) O(V^2 * E)",
      "D) O(V * E)"
    ],
    answer: 1,
    explanation: "Floyd-Warshall runs in O(V^3) time due to its three nested loops: for each intermediate vertex k, for each source i, and for each destination j. The space complexity is O(V^2) for the distance matrix. It is simple to implement and efficient for dense graphs with moderate V.",
    explanationChinese: "Floyd-Warshall运行时间为O(V^3)，因为有三个嵌套循环：对每个中间顶点k、每个源i和每个目标j。空间复杂度为O(V^2)用于距离矩阵。它实现简单，对中等V的密集图高效。",
    diagram: "",
    terms: ["graph", "time_complexity", "dynamic_programming"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 128,
    q: "What is edge relaxation in shortest path algorithms?",
    qChinese: "最短路径算法中的边松弛是什么？",
    options: [
      "A) Updating the distance to a vertex if a shorter path is found through an edge",
      "B) Removing an edge from the graph",
      "C) Adding a new edge",
      "D) Reversing an edge direction"
    ],
    optionsChinese: [
      "A) 如果通过一条边找到更短路径则更新到顶点的距离",
      "B) 从图中删除边",
      "C) 添加新边",
      "D) 反转边的方向"
    ],
    answer: 0,
    explanation: "Edge relaxation checks if the current shortest known distance to vertex v can be improved by going through edge (u,v): if dist[u] + weight(u,v) < dist[v], then dist[v] is updated. This is the fundamental operation in Dijkstra's, Bellman-Ford, and other shortest path algorithms.",
    explanationChinese: "边松弛检查到顶点v的当前已知最短距离是否可以通过边(u,v)改善：如果dist[u] + weight(u,v) < dist[v]，则更新dist[v]。这是Dijkstra、Bellman-Ford和其他最短路径算法的基本操作。",
    diagram: "",
    terms: ["dijkstra", "graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 129,
    q: "For a DAG, what is the most efficient shortest path algorithm?",
    qChinese: "对于DAG，最高效的最短路径算法是什么？",
    options: [
      "A) Topological sort followed by relaxation",
      "B) Bellman-Ford",
      "C) Dijkstra's algorithm",
      "D) Floyd-Warshall"
    ],
    optionsChinese: [
      "A) 拓扑排序后松弛",
      "B) Bellman-Ford",
      "C) Dijkstra算法",
      "D) Floyd-Warshall"
    ],
    answer: 0,
    explanation: "For a DAG, the most efficient approach is to topologically sort the vertices first, then relax edges in topological order. This runs in O(V + E) time, which is faster than Dijkstra's or Bellman-Ford. It works even with negative weights because DAGs have no cycles.",
    explanationChinese: "对于DAG，最高效的方法是先拓扑排序顶点，然后按拓扑顺序松弛边。运行时间为O(V + E)，比Dijkstra或Bellman-Ford更快。即使有负权重也有效，因为DAG没有环。",
    diagram: "",
    terms: ["topological_sort", "graph", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 130,
    q: "In Dijkstra's algorithm, what initial distance is assigned to the source vertex?",
    qChinese: "在Dijkstra算法中，源顶点被赋予什么初始距离？",
    options: [
      "A) Infinity",
      "B) 0",
      "C) 1",
      "D) -1"
    ],
    optionsChinese: [
      "A) 无穷大",
      "B) 0",
      "C) 1",
      "D) -1"
    ],
    answer: 1,
    explanation: "In Dijkstra's algorithm, the source vertex is initialized with distance 0 (the distance from the source to itself), and all other vertices are initialized with infinity (unknown/unreachable). As the algorithm progresses, distances are updated through edge relaxation.",
    explanationChinese: "在Dijkstra算法中，源顶点初始化距离为0（源到自身的距离），所有其他顶点初始化为无穷大（未知/不可达）。随着算法进行，距离通过边松弛更新。",
    diagram: "",
    terms: ["dijkstra"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 131,
    q: "How does Bellman-Ford detect a negative-weight cycle?",
    qChinese: "Bellman-Ford如何检测负权环？",
    options: [
      "A) If the algorithm takes more than V iterations",
      "B) If the priority queue is empty",
      "C) If any vertex is visited twice",
      "D) If any distance decreases on the Vth iteration of relaxation"
    ],
    optionsChinese: [
      "A) 如果算法超过V次迭代",
      "B) 如果优先队列为空",
      "C) 如果任何顶点被访问两次",
      "D) 如果在第V次松弛迭代中任何距离减小"
    ],
    answer: 3,
    explanation: "After V-1 iterations of relaxing all edges, the shortest paths are finalized (if no negative cycle exists). A Vth iteration is then run: if any edge can still be relaxed (distance decreases), a negative-weight cycle exists because distances should have stabilized after V-1 rounds.",
    explanationChinese: "在对所有边进行V-1次松弛迭代后，最短路径被确定（如果不存在负权环）。然后运行第V次迭代：如果任何边仍可松弛（距离减小），则存在负权环，因为距离在V-1轮后应该已经稳定。",
    diagram: "",
    terms: ["graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 132,
    q: "When should you use Floyd-Warshall instead of running Dijkstra from every vertex?",
    qChinese: "什么时候应该使用Floyd-Warshall而不是从每个顶点运行Dijkstra？",
    options: [
      "A) When the graph is dense or has negative weights (no negative cycles)",
      "B) When the graph is sparse",
      "C) When you need only single-source shortest paths",
      "D) When the graph is a tree"
    ],
    optionsChinese: [
      "A) 当图是密集的或有负权重（无负权环）",
      "B) 当图是稀疏的",
      "C) 当只需要单源最短路径",
      "D) 当图是树时"
    ],
    answer: 0,
    explanation: "Floyd-Warshall is preferred for dense graphs because its O(V^3) complexity is comparable to running Dijkstra V times on dense graphs O(V * V^2). It also handles negative edge weights (without negative cycles), which Dijkstra cannot. For sparse graphs, V runs of Dijkstra is usually faster.",
    explanationChinese: "Floyd-Warshall适用于密集图，因为其O(V^3)复杂度与在密集图上运行V次Dijkstra的O(V * V^2)相当。它还处理负边权重（无负权环），而Dijkstra不能。对稀疏图，V次Dijkstra通常更快。",
    diagram: "",
    terms: ["graph", "dijkstra", "dynamic_programming"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 133,
    q: "What is the A* algorithm?",
    qChinese: "什么是A*算法？",
    options: [
      "A) An informed shortest path algorithm using heuristics",
      "B) A brute-force search algorithm",
      "C) A minimum spanning tree algorithm",
      "D) A sorting algorithm"
    ],
    optionsChinese: [
      "A) 使用启发式的知情最短路径算法",
      "B) 一种暴力搜索算法",
      "C) 最小生成树算法",
      "D) 一种排序算法"
    ],
    answer: 0,
    explanation: "A* is an informed search algorithm that finds the shortest path using a heuristic function h(n) to estimate the remaining distance. It expands nodes with the smallest f(n) = g(n) + h(n), where g(n) is the known cost. With an admissible heuristic, A* guarantees optimal solutions.",
    explanationChinese: "A*是一种知情搜索算法，使用启发式函数h(n)估计剩余距离来找最短路径。它扩展f(n) = g(n) + h(n)最小的节点，其中g(n)是已知成本。使用可采纳启发式时，A*保证最优解。",
    diagram: "",
    terms: ["dijkstra", "graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 134,
    q: "What property must an A* heuristic have to guarantee optimal solutions?",
    qChinese: "A*启发式必须具有什么性质才能保证最优解？",
    options: [
      "A) It must be admissible (never overestimate the true cost)",
      "B) It must overestimate distances",
      "C) It must be exactly accurate",
      "D) It must return zero for all nodes"
    ],
    optionsChinese: [
      "A) 它必须是可采纳的（永不高估真实成本）",
      "B) 它必须高估距离",
      "C) 它必须完全准确",
      "D) 它必须对所有节点返回零"
    ],
    answer: 0,
    explanation: "An admissible heuristic never overestimates the true cost to the goal. This property guarantees A* finds an optimal (shortest) path. Common admissible heuristics include Euclidean distance and Manhattan distance for grid-based pathfinding. A consistent heuristic also ensures efficiency.",
    explanationChinese: "可采纳启发式永不高估到目标的真实成本。此性质保证A*找到最优（最短）路径。常见的可采纳启发式包括欧几里得距离和曼哈顿距离（用于网格寻路）。一致启发式还确保效率。",
    diagram: "",
    terms: ["dijkstra", "graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 135,
    q: "What is the shortest path in an unweighted graph from vertex A to vertex D given edges: A-B, A-C, B-D, C-D?",
    qChinese: "在无权图中给定边A-B、A-C、B-D、C-D，从顶点A到顶点D的最短路径是什么？",
    options: [
      "A) Both A and B are correct",
      "B) A -> C -> D (length 2)",
      "C) A -> B -> C -> D (length 3)",
      "D) A -> B -> D (length 2)"
    ],
    optionsChinese: [
      "A) A和B都正确",
      "B) A -> C -> D（长度2）",
      "C) A -> B -> C -> D（长度3）",
      "D) A -> B -> D（长度2）"
    ],
    answer: 0,
    explanation: "Both A->B->D and A->C->D have length 2 (two edges each), which is the shortest possible path. BFS from A would discover B and C at distance 1, then D at distance 2 from either path. Multiple shortest paths of equal length can exist in a graph.",
    explanationChinese: "A->B->D和A->C->D都有长度2（各两条边），是最短的可能路径。从A开始的BFS会在距离1发现B和C，然后在距离2从任一路径发现D。图中可以存在多条等长的最短路径。",
    diagram: "",
    terms: ["bfs", "graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 136,
    q: "What is the space complexity of Dijkstra's algorithm?",
    qChinese: "Dijkstra算法的空间复杂度是多少？",
    options: [
      "A) O(V)",
      "B) O(V^2)",
      "C) O(V + E)",
      "D) O(E log V)"
    ],
    optionsChinese: [
      "A) O(V)",
      "B) O(V^2)",
      "C) O(V + E)",
      "D) O(E log V)"
    ],
    answer: 2,
    explanation: "Dijkstra's algorithm uses O(V + E) space: O(V) for the distance array and visited set, plus O(V) for the priority queue, and O(V + E) for the adjacency list representation of the graph. The priority queue never contains more than V elements at any time.",
    explanationChinese: "Dijkstra算法使用O(V + E)空间：O(V)用于距离数组和已访问集合，O(V)用于优先队列，O(V + E)用于图的邻接表表示。优先队列在任何时候都不会包含超过V个元素。",
    diagram: "",
    terms: ["dijkstra", "space_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 137,
    q: "Can Dijkstra's algorithm handle graphs with zero-weight edges?",
    qChinese: "Dijkstra算法能处理具有零权重边的图吗？",
    options: [
      "A) Yes, zero is non-negative so Dijkstra's works correctly",
      "B) No, it requires positive weights only",
      "C) Only if all edges have zero weight",
      "D) Only for undirected graphs"
    ],
    optionsChinese: [
      "A) 能，零是非负的所以Dijkstra正确工作",
      "B) 不能，它只需要正权重",
      "C) 只有当所有边权重为零时",
      "D) 只对无向图"
    ],
    answer: 0,
    explanation: "Dijkstra's algorithm works correctly with zero-weight edges because it only requires non-negative edge weights. Zero is non-negative, so the greedy property that finalized distances are optimal still holds. The algorithm fails only when edges have strictly negative weights.",
    explanationChinese: "Dijkstra算法可以正确处理零权重边，因为它只要求非负边权重。零是非负的，所以已确定距离是最优的贪心性质仍然成立。算法只在边有严格负权重时才失败。",
    diagram: "",
    terms: ["dijkstra"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 138,
    q: "Johnson's algorithm combines which two algorithms?",
    qChinese: "Johnson算法结合了哪两种算法？",
    options: [
      "A) BFS and DFS",
      "B) Floyd-Warshall and BFS",
      "C) Prim's and Kruskal's",
      "D) Bellman-Ford and Dijkstra's"
    ],
    optionsChinese: [
      "A) BFS和DFS",
      "B) Floyd-Warshall和BFS",
      "C) Prim和Kruskal",
      "D) Bellman-Ford和Dijkstra"
    ],
    answer: 3,
    explanation: "Johnson's algorithm first uses Bellman-Ford to reweight edges (making all weights non-negative) and then runs Dijkstra's from each vertex. This gives O(V^2 log V + VE) time for all-pairs shortest paths, which is better than Floyd-Warshall O(V^3) for sparse graphs.",
    explanationChinese: "Johnson算法先使用Bellman-Ford重新加权边（使所有权重非负），然后从每个顶点运行Dijkstra。这给出所有对最短路径的O(V^2 log V + VE)时间，对稀疏图比Floyd-Warshall的O(V^3)更好。",
    diagram: "",
    terms: ["dijkstra", "graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 139,
    q: "In Dijkstra's algorithm, when is a vertex considered 'finalized'?",
    qChinese: "在Dijkstra算法中，顶点什么时候被视为'已确定'？",
    options: [
      "A) When it is first discovered",
      "B) When all its neighbors are processed",
      "C) When it is extracted from the priority queue with minimum distance",
      "D) When the algorithm terminates"
    ],
    optionsChinese: [
      "A) 当它首次被发现时",
      "B) 当它所有邻居都被处理后",
      "C) 当它以最小距离从优先队列中被提取时",
      "D) 当算法终止时"
    ],
    answer: 2,
    explanation: "A vertex is finalized when it is extracted from the priority queue. At this point, its distance is guaranteed to be the shortest possible (with non-negative weights). After extraction, the vertex is not processed again. All edges from this vertex are then relaxed to potentially update neighbor distances.",
    explanationChinese: "顶点在从优先队列中提取时被确定。此时，其距离保证是最短的（非负权重下）。提取后，该顶点不会再被处理。然后松弛该顶点的所有边以可能更新邻居距离。",
    diagram: "",
    terms: ["dijkstra", "heap"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 140,
    q: "What does Bellman-Ford guarantee after i iterations?",
    qChinese: "Bellman-Ford在i次迭代后保证什么？",
    options: [
      "A) All paths with at most i edges are optimally computed",
      "B) i vertices have been finalized",
      "C) The algorithm is i% complete",
      "D) i edges have been relaxed"
    ],
    optionsChinese: [
      "A) 最多i条边的所有路径被最优计算",
      "B) i个顶点已被确定",
      "C) 算法完成了i%",
      "D) i条边已被松弛"
    ],
    answer: 0,
    explanation: "After i iterations of Bellman-Ford, all shortest paths using at most i edges have been correctly computed. Since the shortest path in a graph with V vertices has at most V-1 edges (without negative cycles), V-1 iterations guarantee all shortest paths are found.",
    explanationChinese: "Bellman-Ford进行i次迭代后，使用最多i条边的所有最短路径已被正确计算。由于V个顶点的图中最短路径最多有V-1条边（无负权环），V-1次迭代保证找到所有最短路径。",
    diagram: "",
    terms: ["graph", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 141,
    q: "What is the SPFA (Shortest Path Faster Algorithm)?",
    qChinese: "什么是SPFA（最短路径快速算法）？",
    options: [
      "A) A faster version of Floyd-Warshall",
      "B) A queue-based optimization of Bellman-Ford",
      "C) A variant of Dijkstra's",
      "D) A graph coloring algorithm"
    ],
    optionsChinese: [
      "A) Floyd-Warshall的更快版本",
      "B) Bellman-Ford的基于队列的优化",
      "C) Dijkstra的变体",
      "D) 图着色算法"
    ],
    answer: 1,
    explanation: "SPFA is a queue-based optimization of Bellman-Ford. Instead of relaxing all edges in each iteration, it uses a queue to track vertices whose distances have decreased, only relaxing edges from those vertices. Its expected time is O(E) but worst case remains O(V*E).",
    explanationChinese: "SPFA是Bellman-Ford的基于队列的优化。它不是在每次迭代中松弛所有边，而是使用队列跟踪距离已减小的顶点，只松弛那些顶点的边。期望时间为O(E)但最坏情况仍为O(V*E)。",
    diagram: "",
    terms: ["graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 142,
    q: "In a weighted graph with all edges having weight 1, Dijkstra's becomes equivalent to which algorithm?",
    qChinese: "在所有边权重为1的加权图中，Dijkstra等价于哪种算法？",
    options: [
      "A) DFS",
      "B) Bellman-Ford",
      "C) BFS",
      "D) Floyd-Warshall"
    ],
    optionsChinese: [
      "A) DFS",
      "B) Bellman-Ford",
      "C) BFS",
      "D) Floyd-Warshall"
    ],
    answer: 2,
    explanation: "When all edge weights are 1, Dijkstra's algorithm behaves identically to BFS. The priority queue degenerates to a FIFO queue since all vertices at the same level have the same distance. BFS is simpler and more efficient for this case, running in O(V + E) without a priority queue.",
    explanationChinese: "当所有边权重为1时，Dijkstra算法的行为与BFS相同。优先队列退化为FIFO队列，因为同一层的所有顶点距离相同。BFS对此情况更简单高效，无需优先队列运行在O(V + E)。",
    diagram: "",
    terms: ["dijkstra", "bfs"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 143,
    q: "What is the shortest path problem called when we want the path from every vertex to every other vertex?",
    qChinese: "当我们需要每个顶点到每个其他顶点的路径时，最短路径问题叫什么？",
    options: [
      "A) Single-source shortest path",
      "B) Single-destination shortest path",
      "C) All-pairs shortest path",
      "D) Single-pair shortest path"
    ],
    optionsChinese: [
      "A) 单源最短路径",
      "B) 单目标最短路径",
      "C) 所有对最短路径",
      "D) 单对最短路径"
    ],
    answer: 2,
    explanation: "The all-pairs shortest path (APSP) problem requires finding shortest paths between every pair of vertices. Floyd-Warshall solves this in O(V^3). For sparse graphs with non-negative weights, running Dijkstra from each vertex (Johnson's approach) can be more efficient at O(V^2 log V + VE).",
    explanationChinese: "所有对最短路径（APSP）问题要求找到每对顶点之间的最短路径。Floyd-Warshall在O(V^3)内解决。对于非负权重的稀疏图，从每个顶点运行Dijkstra（Johnson方法）可以更高效，为O(V^2 log V + VE)。",
    diagram: "",
    terms: ["dijkstra", "graph", "dynamic_programming"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 144,
    q: "What is the main idea behind Floyd-Warshall's dynamic programming approach?",
    qChinese: "Floyd-Warshall动态规划方法的主要思想是什么？",
    options: [
      "A) Gradually include more vertices as possible intermediates",
      "B) Process edges in sorted order",
      "C) Use divide and conquer on the graph",
      "D) Randomly sample paths"
    ],
    optionsChinese: [
      "A) 逐步包含更多顶点作为可能的中间节点",
      "B) 按排序顺序处理边",
      "C) 对图使用分治法",
      "D) 随机采样路径"
    ],
    answer: 0,
    explanation: "Floyd-Warshall iteratively considers each vertex as a potential intermediate node on paths between other vertices. At step k, it computes the shortest path from i to j using only vertices {1,...,k} as intermediates. The recurrence is: dist_k[i][j] = min(dist_{k-1}[i][j], dist_{k-1}[i][k] + dist_{k-1}[k][j]).",
    explanationChinese: "Floyd-Warshall迭代地考虑每个顶点作为其他顶点之间路径上的潜在中间节点。在步骤k，它计算从i到j仅使用顶点{1,...,k}作为中间节点的最短路径。递推为：dist_k[i][j] = min(dist_{k-1}[i][j], dist_{k-1}[i][k] + dist_{k-1}[k][j])。",
    diagram: "",
    terms: ["dynamic_programming", "graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 145,
    q: "Which shortest path algorithm is best for finding the shortest path in a graph with exactly one negative edge?",
    qChinese: "哪种最短路径算法最适合在恰好有一条负边的图中寻找最短路径？",
    options: [
      "A) Dijkstra's",
      "B) BFS",
      "C) Bellman-Ford",
      "D) DFS"
    ],
    optionsChinese: [
      "A) Dijkstra",
      "B) BFS",
      "C) Bellman-Ford",
      "D) DFS"
    ],
    answer: 2,
    explanation: "Bellman-Ford is the correct choice because it handles negative edge weights correctly. Dijkstra's cannot handle negative edges at all. BFS only works for unweighted graphs. While having only one negative edge, the graph could still create issues for Dijkstra's greedy approach, so Bellman-Ford is needed.",
    explanationChinese: "Bellman-Ford是正确的选择，因为它正确处理负边权重。Dijkstra完全不能处理负边。BFS只适用于无权图。虽然只有一条负边，图仍可能对Dijkstra的贪心方法造成问题，因此需要Bellman-Ford。",
    diagram: "",
    terms: ["graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 146,
    q: "What is a minimum spanning tree (MST)?",
    qChinese: "什么是最小生成树（MST）？",
    options: [
      "A) The shortest path tree from a source",
      "B) A balanced binary tree",
      "C) The tree with the fewest nodes",
      "D) A spanning tree of a graph with minimum total edge weight"
    ],
    optionsChinese: [
      "A) 从源出发的最短路径树",
      "B) 平衡二叉树",
      "C) 节点最少的树",
      "D) 具有最小总边权重的图的生成树"
    ],
    answer: 3,
    explanation: "A minimum spanning tree is a subset of edges that connects all vertices in a weighted undirected graph with the minimum possible total edge weight, forming a tree (connected and acyclic). An MST has exactly V-1 edges for a graph with V vertices.",
    explanationChinese: "最小生成树是加权无向图中连接所有顶点的边子集，具有最小可能的总边权重，形成树（连通且无环）。对于有V个顶点的图，MST恰好有V-1条边。",
    diagram: "",
    terms: ["minimum_spanning_tree", "graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 147,
    q: "What is the time complexity of Kruskal's algorithm with union-find?",
    qChinese: "使用并查集的Kruskal算法的时间复杂度是多少？",
    options: [
      "A) O(V^2)",
      "B) O(V + E)",
      "C) O(E log E)",
      "D) O(V * E)"
    ],
    optionsChinese: [
      "A) O(V^2)",
      "B) O(V + E)",
      "C) O(E log E)",
      "D) O(V * E)"
    ],
    answer: 2,
    explanation: "Kruskal's algorithm with union-find runs in O(E log E) time, dominated by sorting all edges. After sorting, the union-find operations (with path compression and union by rank) are nearly O(1) per operation (amortized). Since E <= V^2, O(E log E) = O(E log V).",
    explanationChinese: "使用并查集的Kruskal算法运行时间为O(E log E)，主要由排序所有边决定。排序后，并查集操作（使用路径压缩和按秩合并）每次操作几乎为O(1)（摊还）。由于E <= V^2，O(E log E) = O(E log V)。",
    diagram: "",
    terms: ["minimum_spanning_tree", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 148,
    q: "How does Kruskal's algorithm build an MST?",
    qChinese: "Kruskal算法如何构建MST？",
    options: [
      "A) Start from a vertex and grow the tree",
      "B) Sort edges by weight and add them if they do not form a cycle",
      "C) Use BFS from the minimum weight vertex",
      "D) Remove the heaviest edges first"
    ],
    optionsChinese: [
      "A) 从一个顶点开始生长树",
      "B) 按权重排序边并在不形成环的情况下添加",
      "C) 从最小权重顶点使用BFS",
      "D) 先删除最重的边"
    ],
    answer: 1,
    explanation: "Kruskal's algorithm sorts all edges by weight in ascending order. Then it greedily adds the next lightest edge to the MST if it does not create a cycle (checked using union-find). This continues until V-1 edges are added, forming the complete MST.",
    explanationChinese: "Kruskal算法按权重升序排序所有边。然后贪心地将下一条最轻的边添加到MST中，前提是它不创建环（使用并查集检查）。这继续直到添加V-1条边，形成完整的MST。",
    diagram: "",
    terms: ["minimum_spanning_tree", "greedy_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 149,
    q: "How does Prim's algorithm build an MST?",
    qChinese: "Prim算法如何构建MST？",
    options: [
      "A) Sort all edges first",
      "B) Remove edges from the original graph",
      "C) Use DFS and add all edges",
      "D) Start from any vertex and repeatedly add the cheapest edge connecting the tree to a non-tree vertex"
    ],
    optionsChinese: [
      "A) 先排序所有边",
      "B) 从原图删除边",
      "C) 使用DFS并添加所有边",
      "D) 从任意顶点开始，重复添加连接树与非树顶点的最便宜边"
    ],
    answer: 3,
    explanation: "Prim's algorithm starts from an arbitrary vertex and grows the MST one vertex at a time. At each step, it adds the minimum-weight edge that connects a vertex in the MST to a vertex not yet in the MST. A priority queue efficiently selects the cheapest crossing edge.",
    explanationChinese: "Prim算法从任意顶点开始，每次增加一个顶点来生长MST。每一步添加连接MST中顶点与不在MST中顶点的最小权重边。优先队列高效地选择最便宜的跨越边。",
    diagram: "",
    terms: ["minimum_spanning_tree", "greedy_algorithm", "heap"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 150,
    q: "What is the time complexity of Prim's algorithm using a binary heap?",
    qChinese: "使用二叉堆的Prim算法的时间复杂度是多少？",
    options: [
      "A) O(V^2)",
      "B) O(V * E)",
      "C) O(E log V)",
      "D) O(E^2)"
    ],
    optionsChinese: [
      "A) O(V^2)",
      "B) O(V * E)",
      "C) O(E log V)",
      "D) O(E^2)"
    ],
    answer: 2,
    explanation: "Prim's algorithm with a binary heap runs in O(E log V). Each edge may trigger a decrease-key operation (O(log V)), and there are E edges total. Each vertex is extracted once from the heap (V * log V). The total is O((V + E) log V), which simplifies to O(E log V) for connected graphs.",
    explanationChinese: "使用二叉堆的Prim算法运行时间为O(E log V)。每条边可能触发decrease-key操作（O(log V)），共有E条边。每个顶点从堆中提取一次（V * log V）。总计O((V + E) log V)，对连通图简化为O(E log V)。",
    diagram: "",
    terms: ["minimum_spanning_tree", "heap", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 151,
    q: "When is Kruskal's algorithm preferred over Prim's?",
    qChinese: "什么时候Kruskal算法优于Prim算法？",
    options: [
      "A) Dense graphs",
      "B) Sparse graphs where E is much less than V^2",
      "C) Complete graphs",
      "D) Graphs with negative weights"
    ],
    optionsChinese: [
      "A) 密集图",
      "B) E远小于V^2的稀疏图",
      "C) 完全图",
      "D) 有负权重的图"
    ],
    answer: 1,
    explanation: "Kruskal's is preferred for sparse graphs because its O(E log E) complexity is efficient when E is small. Prim's with a simple array is O(V^2), which is better for dense graphs. For sparse graphs, Kruskal's edge-centric approach and efficient union-find operations make it the practical choice.",
    explanationChinese: "Kruskal适用于稀疏图，因为当E较小时其O(E log E)复杂度很高效。使用简单数组的Prim为O(V^2)，对密集图更好。对稀疏图，Kruskal的以边为中心的方法和高效并查集操作使其成为实际选择。",
    diagram: "",
    terms: ["minimum_spanning_tree", "greedy_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 152,
    q: "What is the cut property in MST theory?",
    qChinese: "MST理论中的切割性质是什么？",
    options: [
      "A) Cuts divide the MST into equal parts",
      "B) The heaviest edge must be removed",
      "C) All edges must be cut in half",
      "D) The lightest edge crossing any cut must be in the MST"
    ],
    optionsChinese: [
      "A) 切割将MST分成相等部分",
      "B) 最重的边必须被删除",
      "C) 所有边必须被切成两半",
      "D) 跨越任何切割的最轻边必须在MST中"
    ],
    answer: 3,
    explanation: "The cut property states that for any cut (partition of vertices into two disjoint sets), the minimum weight edge crossing the cut must be included in the MST (assuming unique edge weights). This property is the theoretical foundation for both Kruskal's and Prim's algorithms.",
    explanationChinese: "切割性质表明，对于任何切割（将顶点分为两个不相交集合），跨越切割的最小权重边必须包含在MST中（假设边权重唯一）。此性质是Kruskal和Prim算法的理论基础。",
    diagram: "",
    terms: ["minimum_spanning_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 153,
    q: "What data structure is used in Kruskal's algorithm to detect cycles?",
    qChinese: "Kruskal算法中使用什么数据结构来检测环？",
    options: [
      "A) Stack",
      "B) Queue",
      "C) Hash table",
      "D) Union-Find (Disjoint Set)"
    ],
    optionsChinese: [
      "A) 栈",
      "B) 队列",
      "C) 哈希表",
      "D) 并查集（不相交集合）"
    ],
    answer: 3,
    explanation: "Kruskal's algorithm uses the Union-Find (Disjoint Set Union) data structure to efficiently detect whether adding an edge would create a cycle. If both endpoints of an edge are in the same set, adding the edge creates a cycle. Union-Find with path compression and union by rank gives nearly O(1) operations.",
    explanationChinese: "Kruskal算法使用并查集（不相交集合联合）数据结构来高效检测添加边是否会创建环。如果边的两个端点在同一集合中，添加该边会创建环。使用路径压缩和按秩合并的并查集给出几乎O(1)的操作。",
    diagram: "",
    terms: ["minimum_spanning_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 154,
    q: "How many edges does an MST of a connected graph with V vertices have?",
    qChinese: "有V个顶点的连通图的MST有多少条边？",
    options: [
      "A) V",
      "B) V - 1",
      "C) V + 1",
      "D) E - 1"
    ],
    optionsChinese: [
      "A) V条",
      "B) V - 1条",
      "C) V + 1条",
      "D) E - 1条"
    ],
    answer: 1,
    explanation: "An MST of a connected graph with V vertices always has exactly V-1 edges. This is because a tree with V vertices always has V-1 edges - it is the minimum number of edges needed to keep V vertices connected without any cycles.",
    explanationChinese: "有V个顶点的连通图的MST总是恰好有V-1条边。这是因为V个顶点的树总是有V-1条边——这是保持V个顶点连通且无环所需的最少边数。",
    diagram: "",
    terms: ["minimum_spanning_tree", "graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 155,
    q: "Can a graph have multiple MSTs with the same total weight?",
    qChinese: "一个图可以有多个总权重相同的MST吗？",
    options: [
      "A) No, MST is always unique",
      "B) Only for directed graphs",
      "C) Yes, if there are edges with equal weights",
      "D) Only for complete graphs"
    ],
    optionsChinese: [
      "A) 不能，MST总是唯一的",
      "B) 仅对有向图",
      "C) 能，如果有权重相等的边",
      "D) 仅对完全图"
    ],
    answer: 2,
    explanation: "A graph can have multiple MSTs with the same total weight when there are ties in edge weights. If all edge weights are distinct, the MST is unique. When edges have equal weights, different choices can lead to different trees that share the same minimum total weight.",
    explanationChinese: "当边权重有相同值时，图可以有多个总权重相同的MST。如果所有边权重不同，MST是唯一的。当边有相等权重时，不同的选择可以导致共享相同最小总权重的不同树。",
    diagram: "",
    terms: ["minimum_spanning_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 156,
    q: "What is Boruvka's algorithm for MST?",
    qChinese: "什么是Boruvka的MST算法？",
    options: [
      "A) A single-source shortest path algorithm",
      "B) An algorithm that repeatedly adds the cheapest edge from each component",
      "C) A topological sort variant",
      "D) A hash-based MST algorithm"
    ],
    optionsChinese: [
      "A) 单源最短路径算法",
      "B) 重复从每个分量添加最便宜边的算法",
      "C) 拓扑排序变体",
      "D) 基于哈希的MST算法"
    ],
    answer: 1,
    explanation: "Boruvka's algorithm builds an MST by repeatedly finding the cheapest edge leaving each connected component and adding it. In each phase, the number of components at least halves, giving O(log V) phases. Each phase takes O(E), so the total time is O(E log V). It is parallelizable.",
    explanationChinese: "Boruvka算法通过重复找到离开每个连通分量的最便宜边并添加来构建MST。每个阶段中分量数至少减半，给出O(log V)个阶段。每个阶段花费O(E)，总时间为O(E log V)。它可以并行化。",
    diagram: "",
    terms: ["minimum_spanning_tree", "greedy_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 157,
    q: "If the heaviest edge in a cycle of a graph is unique, will it be in the MST?",
    qChinese: "如果图中一个环的最重边是唯一的，它会在MST中吗？",
    options: [
      "A) No, the heaviest edge in a cycle is never in the MST",
      "B) Yes, always",
      "C) Sometimes",
      "D) Only if it connects two components"
    ],
    optionsChinese: [
      "A) 不，环中最重的边永远不在MST中",
      "B) 是，总是",
      "C) 有时",
      "D) 仅当它连接两个分量时"
    ],
    answer: 0,
    explanation: "The cycle property states that the unique heaviest edge in any cycle is never part of the MST. This is because we can always replace it with a lighter edge from the same cycle to reduce the total weight while maintaining connectivity. This complements the cut property.",
    explanationChinese: "环性质表明任何环中唯一的最重边永远不是MST的一部分。这是因为我们总可以用同一环中更轻的边替换它来减少总权重同时保持连通性。这与切割性质互补。",
    diagram: "",
    terms: ["minimum_spanning_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 158,
    q: "What is the union-find 'path compression' optimization?",
    qChinese: "并查集的'路径压缩'优化是什么？",
    options: [
      "A) Making all nodes in a find path point directly to the root",
      "B) Compressing the graph edges",
      "C) Reducing the number of sets",
      "D) Compressing the memory used"
    ],
    optionsChinese: [
      "A) 使查找路径中的所有节点直接指向根",
      "B) 压缩图的边",
      "C) 减少集合数量",
      "D) 压缩使用的内存"
    ],
    answer: 0,
    explanation: "Path compression flattens the tree structure during find operations by making every node along the path point directly to the root. This dramatically reduces the tree height, making subsequent find operations nearly O(1). Combined with union by rank, the amortized cost per operation is O(alpha(n)), nearly constant.",
    explanationChinese: "路径压缩在查找操作期间通过使路径上的每个节点直接指向根来扁平化树结构。这大大减少了树高度，使后续查找操作几乎为O(1)。结合按秩合并，每次操作的摊还成本为O(alpha(n))，几乎为常数。",
    diagram: "",
    terms: ["minimum_spanning_tree", "amortized_analysis"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 159,
    q: "What is the inverse Ackermann function alpha(n) in the context of union-find?",
    qChinese: "在并查集上下文中，逆阿克曼函数alpha(n)是什么？",
    options: [
      "A) An extremely slowly growing function, effectively constant for all practical inputs",
      "B) O(log n)",
      "C) O(n)",
      "D) O(1) exactly"
    ],
    optionsChinese: [
      "A) 增长极其缓慢的函数，对所有实际输入实际上是常数",
      "B) O(log n)",
      "C) O(n)",
      "D) 恰好O(1)"
    ],
    answer: 0,
    explanation: "The inverse Ackermann function alpha(n) grows so slowly that for all practical purposes (n up to 2^65536), alpha(n) <= 5. Union-Find with path compression and union by rank achieves O(alpha(n)) amortized time per operation, which is effectively constant but technically not O(1).",
    explanationChinese: "逆阿克曼函数alpha(n)增长如此缓慢，对所有实际目的（n到2^65536），alpha(n) <= 5。使用路径压缩和按秩合并的并查集实现每次操作O(alpha(n))摊还时间，实际上是常数但技术上不是O(1)。",
    diagram: "",
    terms: ["minimum_spanning_tree", "amortized_analysis"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 160,
    q: "Can Prim's algorithm work on a disconnected graph?",
    qChinese: "Prim算法能在不连通的图上工作吗？",
    options: [
      "A) No, it only finds the MST of the connected component containing the start vertex",
      "B) Yes, it finds the MST of the entire graph",
      "C) Yes, it connects all components",
      "D) No, it crashes on disconnected graphs"
    ],
    optionsChinese: [
      "A) 不能，它只找到包含起始顶点的连通分量的MST",
      "B) 能，它找到整个图的MST",
      "C) 能，它连接所有分量",
      "D) 不能，它在不连通图上崩溃"
    ],
    answer: 0,
    explanation: "Prim's algorithm starts from a single vertex and grows the MST by adding edges to adjacent vertices. It can only reach vertices in the same connected component as the start vertex. For a disconnected graph, it produces a spanning tree of only one component. To find a minimum spanning forest, run Prim's from each component.",
    explanationChinese: "Prim算法从单个顶点开始，通过添加到相邻顶点的边来生长MST。它只能到达与起始顶点在同一连通分量中的顶点。对于不连通图，它只产生一个分量的生成树。要找最小生成森林，从每个分量运行Prim。",
    diagram: "",
    terms: ["minimum_spanning_tree", "graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 161,
    q: "What is a minimum spanning forest?",
    qChinese: "什么是最小生成森林？",
    options: [
      "A) A forest with the minimum number of trees",
      "B) A single tree with minimum depth",
      "C) A collection of MSTs, one for each connected component of a disconnected graph",
      "D) The MST with fewest edges"
    ],
    optionsChinese: [
      "A) 树数最少的森林",
      "B) 深度最小的单棵树",
      "C) 不连通图每个连通分量一棵MST的集合",
      "D) 边数最少的MST"
    ],
    answer: 2,
    explanation: "A minimum spanning forest is the union of minimum spanning trees for each connected component of a disconnected graph. Kruskal's algorithm naturally produces a minimum spanning forest on disconnected graphs since it processes edges globally regardless of component boundaries.",
    explanationChinese: "最小生成森林是不连通图每个连通分量的最小生成树的并集。Kruskal算法在不连通图上自然产生最小生成森林，因为它全局处理边，不考虑分量边界。",
    diagram: "",
    terms: ["minimum_spanning_tree", "graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 162,
    q: "What is the relationship between MST and shortest path tree?",
    qChinese: "MST和最短路径树之间的关系是什么？",
    options: [
      "A) They are always the same",
      "B) They are generally different; MST minimizes total weight, shortest path tree minimizes distance from source",
      "C) MST is always a subset of the shortest path tree",
      "D) Shortest path tree is always a subset of the MST"
    ],
    optionsChinese: [
      "A) 它们总是相同的",
      "B) 它们通常不同；MST最小化总权重，最短路径树最小化从源的距离",
      "C) MST总是最短路径树的子集",
      "D) 最短路径树总是MST的子集"
    ],
    answer: 1,
    explanation: "MST and shortest path trees serve different purposes and are generally different. MST minimizes the total edge weight of the spanning tree. A shortest path tree (from Dijkstra's) minimizes individual distances from the source. They may share some edges but can differ significantly in structure.",
    explanationChinese: "MST和最短路径树用途不同，通常也不相同。MST最小化生成树的总边权重。最短路径树（来自Dijkstra）最小化从源的个体距离。它们可能共享一些边，但结构上可能有很大不同。",
    diagram: "",
    terms: ["minimum_spanning_tree", "dijkstra"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 163,
    q: "What happens if you add an edge to an MST?",
    qChinese: "如果向MST添加一条边会怎样？",
    options: [
      "A) It remains an MST",
      "B) Nothing changes",
      "C) The graph becomes disconnected",
      "D) A cycle is created; removing the heaviest edge in the cycle gives a new MST"
    ],
    optionsChinese: [
      "A) 它仍然是MST",
      "B) 没有变化",
      "C) 图变得不连通",
      "D) 创建一个环；删除环中最重的边得到新的MST"
    ],
    answer: 3,
    explanation: "Adding an edge to an MST creates exactly one cycle (since a tree with V-1 edges becomes V edges). To restore a spanning tree, remove the heaviest edge in that cycle. If the added edge was the heaviest, the MST is unchanged. Otherwise, removing the old heaviest edge gives a lighter MST.",
    explanationChinese: "向MST添加边恰好创建一个环（因为V-1条边的树变为V条边）。要恢复生成树，删除该环中最重的边。如果添加的边是最重的，MST不变。否则删除旧的最重边得到更轻的MST。",
    diagram: "",
    terms: ["minimum_spanning_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 164,
    q: "Is Prim's algorithm a greedy algorithm?",
    qChinese: "Prim算法是贪心算法吗？",
    options: [
      "A) Yes, it always picks the locally optimal edge",
      "B) No, it uses dynamic programming",
      "C) No, it uses divide and conquer",
      "D) Yes, but it does not guarantee an optimal solution"
    ],
    optionsChinese: [
      "A) 是，它总是选择局部最优的边",
      "B) 不是，它使用动态规划",
      "C) 不是，它使用分治法",
      "D) 是，但它不保证最优解"
    ],
    answer: 0,
    explanation: "Prim's is a greedy algorithm that always adds the minimum-weight edge connecting the current MST to a non-tree vertex. This local greedy choice leads to a globally optimal solution (proven via the cut property). Both Prim's and Kruskal's are greedy algorithms that correctly find the MST.",
    explanationChinese: "Prim是贪心算法，总是添加连接当前MST与非树顶点的最小权重边。这种局部贪心选择导致全局最优解（通过切割性质证明）。Prim和Kruskal都是正确找到MST的贪心算法。",
    diagram: "",
    terms: ["minimum_spanning_tree", "greedy_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 165,
    q: "Given a graph with vertices {A,B,C,D} and edges A-B(1), A-C(4), B-C(2), B-D(5), C-D(3), what is the MST total weight?",
    qChinese: "给定顶点{A,B,C,D}和边A-B(1)、A-C(4)、B-C(2)、B-D(5)、C-D(3)的图，MST的总权重是多少？",
    options: [
      "A) 7",
      "B) 6",
      "C) 8",
      "D) 10"
    ],
    optionsChinese: [
      "A) 7",
      "B) 6",
      "C) 8",
      "D) 10"
    ],
    answer: 1,
    explanation: "Using Kruskal's: sort edges: A-B(1), B-C(2), C-D(3), A-C(4), B-D(5). Add A-B(1): no cycle. Add B-C(2): no cycle. Add C-D(3): no cycle. Now we have 3 edges connecting 4 vertices (a spanning tree). Total weight = 1 + 2 + 3 = 6.",
    explanationChinese: "使用Kruskal：排序边：A-B(1), B-C(2), C-D(3), A-C(4), B-D(5)。添加A-B(1)：无环。添加B-C(2)：无环。添加C-D(3)：无环。现在有3条边连接4个顶点（生成树）。总权重 = 1 + 2 + 3 = 6。",
    diagram: "",
    terms: ["minimum_spanning_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 166,
    q: "What is dynamic programming?",
    qChinese: "什么是动态规划？",
    options: [
      "A) Programming that changes dynamically at runtime",
      "B) An optimization technique that solves problems by breaking them into overlapping subproblems",
      "C) A type of parallel programming",
      "D) A programming paradigm for web applications"
    ],
    optionsChinese: [
      "A) 在运行时动态变化的编程",
      "B) 通过将问题分解为重叠子问题来解决的优化技术",
      "C) 一种并行编程类型",
      "D) 用于Web应用的编程范式"
    ],
    answer: 1,
    explanation: "Dynamic programming (DP) solves optimization problems by breaking them into overlapping subproblems and storing their solutions to avoid redundant computation. It requires optimal substructure (optimal solution contains optimal solutions to subproblems) and overlapping subproblems (same subproblems recur).",
    explanationChinese: "动态规划（DP）通过将问题分解为重叠子问题并存储其解来避免冗余计算来解决优化问题。它需要最优子结构（最优解包含子问题的最优解）和重叠子问题（相同子问题重复出现）。",
    diagram: "",
    terms: ["dynamic_programming"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 167,
    q: "What is memoization?",
    qChinese: "什么是记忆化？",
    options: [
      "A) Caching the results of expensive function calls for reuse",
      "B) Memorizing the code",
      "C) A type of compression",
      "D) A sorting technique"
    ],
    optionsChinese: [
      "A) 缓存昂贵函数调用的结果以便重用",
      "B) 记忆代码",
      "C) 一种压缩类型",
      "D) 一种排序技术"
    ],
    answer: 0,
    explanation: "Memoization is the top-down approach to dynamic programming where recursive function results are cached (stored) so that when the same inputs occur again, the cached result is returned instead of recomputing. This transforms exponential-time recursive solutions into polynomial-time ones.",
    explanationChinese: "记忆化是动态规划的自顶向下方法，递归函数的结果被缓存（存储），以便当相同输入再次出现时返回缓存结果而不是重新计算。这将指数时间的递归解转化为多项式时间解。",
    diagram: "",
    terms: ["dynamic_programming"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 168,
    q: "What is the difference between top-down and bottom-up dynamic programming?",
    qChinese: "自顶向下和自底向上动态规划有什么区别？",
    options: [
      "A) Top-down is faster",
      "B) They solve different types of problems",
      "C) Bottom-up uses more memory",
      "D) Top-down uses recursion with memoization; bottom-up uses iteration with tabulation"
    ],
    optionsChinese: [
      "A) 自顶向下更快",
      "B) 它们解决不同类型的问题",
      "C) 自底向上使用更多内存",
      "D) 自顶向下使用带记忆化的递归；自底向上使用带制表的迭代"
    ],
    answer: 3,
    explanation: "Top-down DP uses recursion with memoization: it starts from the original problem and recurses into subproblems, caching results. Bottom-up DP uses iteration with tabulation: it fills a table starting from the smallest subproblems up to the final answer. Both give the same result.",
    explanationChinese: "自顶向下DP使用带记忆化的递归：从原问题开始递归到子问题，缓存结果。自底向上DP使用带制表的迭代：从最小子问题开始填表直到最终答案。两者给出相同结果。",
    diagram: "",
    terms: ["dynamic_programming"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 169,
    q: "What is the time complexity of the naive recursive Fibonacci algorithm?",
    qChinese: "朴素递归斐波那契算法的时间复杂度是多少？",
    options: [
      "A) O(n)",
      "B) O(n^2)",
      "C) O(n log n)",
      "D) O(2^n)"
    ],
    optionsChinese: [
      "A) O(n)",
      "B) O(n^2)",
      "C) O(n log n)",
      "D) O(2^n)"
    ],
    answer: 3,
    explanation: "The naive recursive Fibonacci has O(2^n) time complexity because each call branches into two recursive calls, creating an exponential number of redundant computations. Using dynamic programming (memoization or tabulation), this is reduced to O(n) by storing previously computed values.",
    explanationChinese: "朴素递归斐波那契有O(2^n)时间复杂度，因为每次调用分支为两个递归调用，产生指数数量的冗余计算。使用动态规划（记忆化或制表），通过存储先前计算的值将其减少到O(n)。",
    diagram: "",
    terms: ["dynamic_programming", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 170,
    q: "What is the 0/1 knapsack problem?",
    qChinese: "什么是0/1背包问题？",
    options: [
      "A) Filling a bag with unlimited copies of items",
      "B) Sorting items by weight",
      "C) Selecting items (each used at most once) to maximize value within a weight limit",
      "D) Finding the lightest item"
    ],
    optionsChinese: [
      "A) 用无限份物品填满背包",
      "B) 按重量排序物品",
      "C) 选择物品（每个最多使用一次）在重量限制内最大化价值",
      "D) 找到最轻的物品"
    ],
    answer: 2,
    explanation: "The 0/1 knapsack problem asks: given n items with weights and values, and a knapsack capacity W, select items (each either taken or not, no fractions) to maximize total value without exceeding W. It is solved by DP in O(nW) time using a 2D table of subproblems.",
    explanationChinese: "0/1背包问题问：给定n个有重量和价值的物品以及背包容量W，选择物品（每个要么拿要么不拿，不能分割）在不超过W的情况下最大化总价值。用DP在O(nW)时间内解决，使用子问题的2D表。",
    diagram: "",
    terms: ["dynamic_programming"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 171,
    q: "What is the time complexity of the DP solution for the 0/1 knapsack problem with n items and capacity W?",
    qChinese: "具有n个物品和容量W的0/1背包问题DP解的时间复杂度是多少？",
    options: [
      "A) O(n)",
      "B) O(nW)",
      "C) O(2^n)",
      "D) O(n^2)"
    ],
    optionsChinese: [
      "A) O(n)",
      "B) O(nW)",
      "C) O(2^n)",
      "D) O(n^2)"
    ],
    answer: 1,
    explanation: "The DP solution for 0/1 knapsack uses a table of size n x W, filling each cell in O(1). The total time is O(nW), which is pseudo-polynomial because W is a numeric value, not the input size. If W is exponentially large relative to n, this can still be slow.",
    explanationChinese: "0/1背包的DP解使用大小为n x W的表，每个单元格在O(1)内填充。总时间为O(nW)，这是伪多项式的，因为W是数值而非输入大小。如果W相对于n指数级大，这仍然可能很慢。",
    diagram: "",
    terms: ["dynamic_programming", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 172,
    q: "What is the longest common subsequence (LCS) problem?",
    qChinese: "什么是最长公共子序列（LCS）问题？",
    options: [
      "A) Finding the longest substring common to two strings",
      "B) Finding the longest subsequence common to two sequences",
      "C) Finding the longest increasing sequence",
      "D) Finding the shortest common sequence"
    ],
    optionsChinese: [
      "A) 找两个字符串共有的最长子串",
      "B) 找两个序列共有的最长子序列",
      "C) 找最长递增序列",
      "D) 找最短公共序列"
    ],
    answer: 1,
    explanation: "The LCS problem finds the longest subsequence that appears in both input sequences. A subsequence maintains relative order but need not be contiguous. For sequences of length m and n, the DP solution runs in O(mn) time and space, using a 2D table.",
    explanationChinese: "LCS问题找到出现在两个输入序列中的最长子序列。子序列保持相对顺序但不必连续。对于长度为m和n的序列，DP解在O(mn)时间和空间内运行，使用2D表。",
    diagram: "",
    terms: ["dynamic_programming"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 173,
    q: "What is the time complexity of the DP solution for LCS of two strings of length m and n?",
    qChinese: "两个长度为m和n的字符串LCS的DP解的时间复杂度是多少？",
    options: [
      "A) O(m + n)",
      "B) O(2^(m+n))",
      "C) O(mn)",
      "D) O(m^2 + n^2)"
    ],
    optionsChinese: [
      "A) O(m + n)",
      "B) O(2^(m+n))",
      "C) O(mn)",
      "D) O(m^2 + n^2)"
    ],
    answer: 2,
    explanation: "The DP solution for LCS uses a 2D table of size (m+1) x (n+1), filling each cell in O(1). The recurrence compares characters: if they match, LCS[i][j] = LCS[i-1][j-1] + 1; otherwise, LCS[i][j] = max(LCS[i-1][j], LCS[i][j-1]). Total time and space is O(mn).",
    explanationChinese: "LCS的DP解使用大小为(m+1) x (n+1)的2D表，每个单元格在O(1)内填充。递推比较字符：如果匹配，LCS[i][j] = LCS[i-1][j-1] + 1；否则LCS[i][j] = max(LCS[i-1][j], LCS[i][j-1])。总时间和空间为O(mn)。",
    diagram: "",
    terms: ["dynamic_programming", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 174,
    q: "What is optimal substructure?",
    qChinese: "什么是最优子结构？",
    options: [
      "A) The subproblems must be independent",
      "B) An optimal solution to the problem contains optimal solutions to subproblems",
      "C) The problem can be divided into exactly two parts",
      "D) The structure of the code is optimal"
    ],
    optionsChinese: [
      "A) 子问题必须独立",
      "B) 问题的最优解包含子问题的最优解",
      "C) 问题可以恰好分为两部分",
      "D) 代码结构是最优的"
    ],
    answer: 1,
    explanation: "Optimal substructure means that an optimal solution to a problem can be constructed from optimal solutions to its subproblems. This is a key requirement for dynamic programming and greedy algorithms. For example, the shortest path from A to C via B contains the shortest paths from A to B and B to C.",
    explanationChinese: "最优子结构意味着问题的最优解可以由子问题的最优解构造。这是动态规划和贪心算法的关键要求。例如，从A经B到C的最短路径包含从A到B和从B到C的最短路径。",
    diagram: "",
    terms: ["dynamic_programming", "greedy_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 175,
    q: "What is the edit distance (Levenshtein distance) between two strings?",
    qChinese: "两个字符串之间的编辑距离（Levenshtein距离）是什么？",
    options: [
      "A) The number of common characters",
      "B) The minimum number of insertions, deletions, and substitutions to transform one string into another",
      "C) The length difference between two strings",
      "D) The number of positions where characters differ"
    ],
    optionsChinese: [
      "A) 共同字符数",
      "B) 将一个字符串转换为另一个字符串所需的最少插入、删除和替换次数",
      "C) 两个字符串的长度差",
      "D) 字符不同的位置数"
    ],
    answer: 1,
    explanation: "Edit distance measures the minimum number of single-character operations (insert, delete, substitute) needed to transform one string into another. It is computed using DP in O(mn) time, where m and n are the string lengths. Applications include spell checking, DNA sequence alignment, and diff tools.",
    explanationChinese: "编辑距离衡量将一个字符串转换为另一个所需的最少单字符操作（插入、删除、替换）次数。使用DP在O(mn)时间内计算，其中m和n是字符串长度。应用包括拼写检查、DNA序列比对和diff工具。",
    diagram: "",
    terms: ["dynamic_programming"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 176,
    q: "What is the longest increasing subsequence (LIS) problem?",
    qChinese: "什么是最长递增子序列（LIS）问题？",
    options: [
      "A) Finding the longest sorted subarray",
      "B) Sorting the array",
      "C) Finding the longest subsequence where elements are strictly increasing",
      "D) Finding consecutive increasing numbers"
    ],
    optionsChinese: [
      "A) 找最长的排序子数组",
      "B) 对数组排序",
      "C) 找元素严格递增的最长子序列",
      "D) 找连续递增的数字"
    ],
    answer: 2,
    explanation: "The LIS problem finds the longest subsequence of a given sequence where elements are in strictly increasing order. Elements need not be contiguous. A basic DP solution runs in O(n^2). An optimized approach using binary search (patience sorting) achieves O(n log n) time complexity.",
    explanationChinese: "LIS问题找给定序列中元素严格递增的最长子序列。元素不必连续。基本DP解在O(n^2)内运行。使用二分搜索（耐心排序）的优化方法实现O(n log n)时间复杂度。",
    diagram: "",
    terms: ["dynamic_programming", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 177,
    q: "What is the coin change problem?",
    qChinese: "什么是硬币找零问题？",
    options: [
      "A) Counting the number of coins in a purse",
      "B) Finding the minimum number of coins to make a given amount",
      "C) Sorting coins by value",
      "D) Exchanging coins for bills"
    ],
    optionsChinese: [
      "A) 数钱包里的硬币",
      "B) 找凑出给定金额的最少硬币数",
      "C) 按面值排序硬币",
      "D) 将硬币兑换为纸币"
    ],
    answer: 1,
    explanation: "The coin change problem asks for the minimum number of coins needed to make a target amount, given coin denominations. The DP solution uses a 1D array where dp[i] = minimum coins to make amount i. For each amount, try each coin denomination. Time complexity is O(amount * number_of_coins).",
    explanationChinese: "硬币找零问题问给定硬币面额，凑出目标金额所需的最少硬币数。DP解使用1D数组，dp[i] = 凑出金额i的最少硬币数。对每个金额尝试每种面额。时间复杂度为O(金额 * 硬币种类数)。",
    diagram: "",
    terms: ["dynamic_programming"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 178,
    q: "What is the matrix chain multiplication problem?",
    qChinese: "什么是矩阵链乘法问题？",
    options: [
      "A) Multiplying all elements of a matrix",
      "B) Finding the optimal parenthesization to minimize scalar multiplications",
      "C) Computing the determinant of a matrix chain",
      "D) Adding matrices together"
    ],
    optionsChinese: [
      "A) 乘以矩阵的所有元素",
      "B) 找最优括号化以最小化标量乘法次数",
      "C) 计算矩阵链的行列式",
      "D) 将矩阵相加"
    ],
    answer: 1,
    explanation: "The matrix chain multiplication problem finds the most efficient way to parenthesize a sequence of matrix multiplications to minimize the total number of scalar multiplications. The DP solution runs in O(n^3) time and O(n^2) space for n matrices.",
    explanationChinese: "矩阵链乘法问题找对矩阵乘法序列进行括号化的最有效方式，以最小化标量乘法总数。DP解对n个矩阵运行时间为O(n^3)，空间为O(n^2)。",
    diagram: "",
    terms: ["dynamic_programming", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 179,
    q: "What two properties must a problem have for dynamic programming to be applicable?",
    qChinese: "问题必须具有哪两个性质才能适用动态规划？",
    options: [
      "A) Sorted input and unique elements",
      "B) Linear structure and constant space",
      "C) Optimal substructure and overlapping subproblems",
      "D) Binary choices and independent subproblems"
    ],
    optionsChinese: [
      "A) 排序输入和唯一元素",
      "B) 线性结构和常数空间",
      "C) 最优子结构和重叠子问题",
      "D) 二元选择和独立子问题"
    ],
    answer: 2,
    explanation: "Dynamic programming requires: (1) Optimal substructure - the optimal solution contains optimal solutions to subproblems, and (2) Overlapping subproblems - the same subproblems are solved multiple times. Without overlapping subproblems, divide and conquer is more appropriate.",
    explanationChinese: "动态规划需要：(1) 最优子结构——最优解包含子问题的最优解，(2) 重叠子问题——相同子问题被多次求解。没有重叠子问题时，分治法更合适。",
    diagram: "",
    terms: ["dynamic_programming"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 180,
    q: "What is the rod cutting problem?",
    qChinese: "什么是钢条切割问题？",
    options: [
      "A) Cutting a rod into equal pieces",
      "B) Finding the longest rod",
      "C) Cutting a rod into pieces to maximize total selling price",
      "D) Welding rods together"
    ],
    optionsChinese: [
      "A) 将钢条切成相等的块",
      "B) 找最长的钢条",
      "C) 将钢条切割成块以最大化总售价",
      "D) 将钢条焊接在一起"
    ],
    answer: 2,
    explanation: "The rod cutting problem asks: given a rod of length n and a price table for each length, determine the maximum revenue obtainable by cutting the rod. The DP recurrence is: r(n) = max(p(i) + r(n-i)) for i = 1 to n. Time complexity is O(n^2) with bottom-up DP.",
    explanationChinese: "钢条切割问题问：给定长度为n的钢条和每种长度的价格表，确定通过切割可获得的最大收益。DP递推为：r(n) = max(p(i) + r(n-i))，i从1到n。自底向上DP的时间复杂度为O(n^2)。",
    diagram: "",
    terms: ["dynamic_programming"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 181,
    q: "How can the space complexity of the 0/1 knapsack DP be optimized?",
    qChinese: "如何优化0/1背包DP的空间复杂度？",
    options: [
      "A) Use a hash table",
      "B) It cannot be optimized",
      "C) Use recursion instead of iteration",
      "D) Use a 1D array instead of 2D by processing weights in reverse"
    ],
    optionsChinese: [
      "A) 使用哈希表",
      "B) 不能优化",
      "C) 使用递归代替迭代",
      "D) 通过反向处理重量使用1D数组代替2D"
    ],
    answer: 3,
    explanation: "The 0/1 knapsack can be optimized from O(nW) space to O(W) by using a single 1D array. The key is iterating through weights in reverse (from W down to w_i) to ensure each item is used at most once. This trick is possible because each row only depends on the previous row.",
    explanationChinese: "0/1背包可以通过使用单个1D数组将空间从O(nW)优化到O(W)。关键是反向迭代重量（从W到w_i）以确保每个物品最多使用一次。这个技巧可行因为每行只依赖前一行。",
    diagram: "",
    terms: ["dynamic_programming", "space_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 182,
    q: "What is the maximum subarray problem solved by Kadane's algorithm?",
    qChinese: "Kadane算法解决的最大子数组问题是什么？",
    options: [
      "A) Finding the subarray with the most elements",
      "B) Finding two arrays that sum to zero",
      "C) Finding the sorted subarray",
      "D) Finding the contiguous subarray with the largest sum"
    ],
    optionsChinese: [
      "A) 找元素最多的子数组",
      "B) 找和为零的两个数组",
      "C) 找排序的子数组",
      "D) 找和最大的连续子数组"
    ],
    answer: 3,
    explanation: "Kadane's algorithm finds the contiguous subarray with the maximum sum in O(n) time. It maintains the maximum sum ending at the current position: maxEndingHere = max(arr[i], maxEndingHere + arr[i]). This is a DP approach where each subproblem depends on the previous one.",
    explanationChinese: "Kadane算法在O(n)时间内找到和最大的连续子数组。它维护在当前位置结束的最大和：maxEndingHere = max(arr[i], maxEndingHere + arr[i])。这是DP方法，每个子问题依赖前一个。",
    diagram: "",
    terms: ["dynamic_programming", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 183,
    q: "What is the subset sum problem?",
    qChinese: "什么是子集和问题？",
    options: [
      "A) Finding all subsets of a set",
      "B) Determining if a subset exists whose elements sum to a target value",
      "C) Computing the sum of all elements",
      "D) Finding the maximum element"
    ],
    optionsChinese: [
      "A) 找集合的所有子集",
      "B) 确定是否存在元素和等于目标值的子集",
      "C) 计算所有元素的和",
      "D) 找最大元素"
    ],
    answer: 1,
    explanation: "The subset sum problem determines whether there is a subset of given integers that sums to a target value. It is NP-complete in general but has a pseudo-polynomial DP solution running in O(n * target) time, similar to the 0/1 knapsack problem where values equal weights.",
    explanationChinese: "子集和问题确定给定整数集中是否存在和等于目标值的子集。它一般是NP完全的，但有伪多项式DP解，运行时间为O(n * target)，类似于价值等于重量的0/1背包问题。",
    diagram: "",
    terms: ["dynamic_programming"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 184,
    q: "How does DP differ from divide and conquer?",
    qChinese: "DP与分治法有什么区别？",
    options: [
      "A) DP is always faster",
      "B) DP handles overlapping subproblems; divide and conquer has independent subproblems",
      "C) Divide and conquer uses more memory",
      "D) They are the same technique"
    ],
    optionsChinese: [
      "A) DP总是更快",
      "B) DP处理重叠子问题；分治法有独立子问题",
      "C) 分治法使用更多内存",
      "D) 它们是相同的技术"
    ],
    answer: 1,
    explanation: "Both DP and divide and conquer break problems into subproblems, but DP is used when subproblems overlap (are solved repeatedly), storing results to avoid recomputation. Divide and conquer is used when subproblems are independent (e.g., merge sort), so no storage is needed.",
    explanationChinese: "DP和分治法都将问题分解为子问题，但DP用于子问题重叠（被重复求解）时，存储结果避免重新计算。分治法用于子问题独立时（如归并排序），不需要存储。",
    diagram: "",
    terms: ["dynamic_programming"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 185,
    q: "What is the traveling salesman problem (TSP)?",
    qChinese: "什么是旅行商问题（TSP）？",
    options: [
      "A) Finding the nearest city",
      "B) Finding the minimum spanning tree",
      "C) Sorting cities by distance",
      "D) Finding the shortest route visiting all cities exactly once and returning to start"
    ],
    optionsChinese: [
      "A) 找最近的城市",
      "B) 找最小生成树",
      "C) 按距离排序城市",
      "D) 找恰好访问所有城市一次并返回起点的最短路线"
    ],
    answer: 3,
    explanation: "TSP finds the shortest Hamiltonian cycle (visiting each city exactly once and returning to start). It is NP-hard with brute-force O(n!). A DP solution using bitmask (Held-Karp) runs in O(n^2 * 2^n), which is much better than factorial but still exponential.",
    explanationChinese: "TSP找最短哈密顿回路（恰好访问每个城市一次并返回起点）。它是NP困难的，暴力O(n!)。使用位掩码的DP解（Held-Karp）运行在O(n^2 * 2^n)，比阶乘好得多但仍是指数级。",
    diagram: "",
    terms: ["dynamic_programming", "graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 186,
    q: "What is the unbounded knapsack problem?",
    qChinese: "什么是无界背包问题？",
    options: [
      "A) A knapsack with infinite capacity",
      "B) A knapsack problem where items can be used unlimited times",
      "C) A knapsack with no items",
      "D) A knapsack that grows dynamically"
    ],
    optionsChinese: [
      "A) 容量无限的背包",
      "B) 物品可以无限次使用的背包问题",
      "C) 没有物品的背包",
      "D) 动态增长的背包"
    ],
    answer: 1,
    explanation: "The unbounded knapsack problem allows unlimited copies of each item. Unlike the 0/1 version where each item is used at most once, here you can select any item multiple times. The DP solution processes weights in forward order (not reverse), using a 1D array in O(nW) time.",
    explanationChinese: "无界背包问题允许每种物品的无限份副本。与每个物品最多使用一次的0/1版本不同，这里可以多次选择任何物品。DP解按正向顺序处理重量（非反向），使用1D数组在O(nW)时间内完成。",
    diagram: "",
    terms: ["dynamic_programming"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 187,
    q: "What is the number of ways to climb n stairs if you can take 1 or 2 steps at a time?",
    qChinese: "如果每次可以走1或2个台阶，爬n个台阶有多少种方式？",
    options: [
      "A) n",
      "B) 2^n",
      "C) Fibonacci(n+1)",
      "D) n^2"
    ],
    optionsChinese: [
      "A) n",
      "B) 2^n",
      "C) Fibonacci(n+1)",
      "D) n^2"
    ],
    answer: 2,
    explanation: "The number of ways to climb n stairs with 1 or 2 steps follows the Fibonacci sequence. dp[n] = dp[n-1] + dp[n-2], because you can reach step n from step n-1 (1 step) or step n-2 (2 steps). With dp[1]=1, dp[2]=2, this gives the (n+1)th Fibonacci number.",
    explanationChinese: "每次走1或2个台阶爬n个台阶的方式数遵循斐波那契数列。dp[n] = dp[n-1] + dp[n-2]，因为可以从第n-1个台阶（1步）或第n-2个台阶（2步）到达第n个台阶。dp[1]=1，dp[2]=2，给出第(n+1)个斐波那契数。",
    diagram: "",
    terms: ["dynamic_programming"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 188,
    q: "What is the minimum number of multiplications for matrix chain A(10x30) * B(30x5) * C(5x60)?",
    qChinese: "矩阵链A(10x30) * B(30x5) * C(5x60)的最少乘法次数是多少？",
    options: [
      "A) 9000",
      "B) 27000",
      "C) 1500 + 3000 = 4500",
      "D) 4500"
    ],
    optionsChinese: [
      "A) 9000",
      "B) 27000",
      "C) 1500 + 3000 = 4500",
      "D) 4500"
    ],
    answer: 3,
    explanation: "Two parenthesizations: (AB)C = 10*30*5 + 10*5*60 = 1500 + 3000 = 4500. A(BC) = 30*5*60 + 10*30*60 = 9000 + 18000 = 27000. The optimal is (AB)C with 4500 multiplications. This demonstrates how parenthesization dramatically affects computation cost.",
    explanationChinese: "两种括号化：(AB)C = 10*30*5 + 10*5*60 = 1500 + 3000 = 4500。A(BC) = 30*5*60 + 10*30*60 = 9000 + 18000 = 27000。最优是(AB)C为4500次乘法。这展示了括号化如何显著影响计算成本。",
    diagram: "",
    terms: ["dynamic_programming"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 189,
    q: "What is the DP recurrence for the coin change problem (minimum coins for amount A)?",
    qChinese: "硬币找零问题（凑出金额A的最少硬币数）的DP递推是什么？",
    options: [
      "A) dp[A] = dp[A-1] + 1",
      "B) dp[A] = dp[A/2] + 1",
      "C) dp[A] = A / max_coin",
      "D) dp[A] = min(dp[A - coin] + 1) for each coin denomination"
    ],
    optionsChinese: [
      "A) dp[A] = dp[A-1] + 1",
      "B) dp[A] = dp[A/2] + 1",
      "C) dp[A] = A / 最大硬币",
      "D) dp[A] = min(dp[A - coin] + 1) 对每种硬币面额"
    ],
    answer: 3,
    explanation: "For the coin change problem, dp[i] represents the minimum number of coins to make amount i. The recurrence is dp[i] = min(dp[i - c] + 1) for all coin denominations c where c <= i. Base case is dp[0] = 0. This tries using each coin and picks the option needing fewest total coins.",
    explanationChinese: "对于硬币找零问题，dp[i]表示凑出金额i的最少硬币数。递推为dp[i] = min(dp[i - c] + 1)，对所有面额c且c <= i。基本情况dp[0] = 0。这尝试使用每种硬币并选择需要最少总硬币数的选项。",
    diagram: "",
    terms: ["dynamic_programming"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 190,
    q: "What is the partition problem?",
    qChinese: "什么是分割问题？",
    options: [
      "A) Determining if a set can be partitioned into two subsets with equal sum",
      "B) Dividing an array into sorted halves",
      "C) Splitting a graph into components",
      "D) Dividing a number into prime factors"
    ],
    optionsChinese: [
      "A) 确定集合是否可以分成两个和相等的子集",
      "B) 将数组分成排序的两半",
      "C) 将图分成分量",
      "D) 将数字分解为质因数"
    ],
    answer: 0,
    explanation: "The partition problem asks whether a set of integers can be divided into two subsets with equal sum. It is a special case of the subset sum problem where the target is half the total sum. It is NP-complete but has a pseudo-polynomial DP solution in O(n * sum/2) time.",
    explanationChinese: "分割问题问一组整数是否可以分成两个和相等的子集。它是子集和问题的特例，目标是总和的一半。它是NP完全的，但有伪多项式DP解，时间为O(n * sum/2)。",
    diagram: "",
    terms: ["dynamic_programming"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 191,
    q: "What is the DP approach to counting the number of paths in a grid from top-left to bottom-right?",
    qChinese: "用DP方法计算网格中从左上角到右下角的路径数是什么？",
    options: [
      "A) BFS",
      "B) dp[i][j] = dp[i-1][j] + dp[i][j-1] (only right and down moves)",
      "C) DFS",
      "D) Sorting the grid"
    ],
    optionsChinese: [
      "A) BFS",
      "B) dp[i][j] = dp[i-1][j] + dp[i][j-1]（只能向右和向下移动）",
      "C) DFS",
      "D) 对网格排序"
    ],
    answer: 1,
    explanation: "For an m x n grid with only right and down moves allowed, dp[i][j] = dp[i-1][j] + dp[i][j-1]. Each cell can be reached from the cell above or to the left. Base cases: dp[0][j] = dp[i][0] = 1 (only one way along edges). The answer is dp[m-1][n-1], computed in O(mn) time.",
    explanationChinese: "对于只允许向右和向下移动的m x n网格，dp[i][j] = dp[i-1][j] + dp[i][j-1]。每个格子可以从上方或左方到达。基本情况：dp[0][j] = dp[i][0] = 1（沿边只有一种方式）。答案是dp[m-1][n-1]，在O(mn)时间内计算。",
    diagram: "",
    terms: ["dynamic_programming"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 192,
    q: "What is the Bellman equation in the context of DP?",
    qChinese: "在DP上下文中，Bellman方程是什么？",
    options: [
      "A) A recursive equation expressing the value of a decision problem in terms of subproblems",
      "B) A graph algorithm equation",
      "C) An equation for computing hash values",
      "D) A sorting equation"
    ],
    optionsChinese: [
      "A) 用子问题表达决策问题值的递归方程",
      "B) 图算法方程",
      "C) 计算哈希值的方程",
      "D) 排序方程"
    ],
    answer: 0,
    explanation: "The Bellman equation (principle of optimality) is the fundamental recursive relationship in DP, expressing the optimal value of a problem as a function of optimal values of its subproblems. It is named after Richard Bellman who coined the term 'dynamic programming'.",
    explanationChinese: "Bellman方程（最优性原理）是DP中的基本递归关系，将问题的最优值表示为其子问题最优值的函数。它以创造'动态规划'一词的Richard Bellman命名。",
    diagram: "",
    terms: ["dynamic_programming"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 193,
    q: "What is the state in DP for the longest palindromic subsequence problem?",
    qChinese: "最长回文子序列问题的DP状态是什么？",
    options: [
      "A) dp[i] = length of palindrome starting at index i",
      "B) dp[i] = 1 if character i is part of a palindrome",
      "C) dp[i][j] = length of longest palindromic subsequence in substring from i to j",
      "D) dp[i][j] = 1 if substring i..j is a palindrome"
    ],
    optionsChinese: [
      "A) dp[i] = 从索引i开始的回文长度",
      "B) dp[i] = 如果字符i是回文的一部分则为1",
      "C) dp[i][j] = 从i到j子串中最长回文子序列的长度",
      "D) dp[i][j] = 如果子串i..j是回文则为1"
    ],
    answer: 2,
    explanation: "For the longest palindromic subsequence, dp[i][j] represents the length of the longest palindromic subsequence in the substring from index i to j. If s[i]==s[j], dp[i][j]=dp[i+1][j-1]+2; otherwise dp[i][j]=max(dp[i+1][j], dp[i][j-1]). Time and space are O(n^2).",
    explanationChinese: "对于最长回文子序列，dp[i][j]表示从索引i到j的子串中最长回文子序列的长度。如果s[i]==s[j]，dp[i][j]=dp[i+1][j-1]+2；否则dp[i][j]=max(dp[i+1][j], dp[i][j-1])。时间和空间为O(n^2)。",
    diagram: "",
    terms: ["dynamic_programming"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 194,
    q: "What is bitmask DP?",
    qChinese: "什么是位掩码DP？",
    options: [
      "A) DP with binary numbers",
      "B) A type of compression for DP tables",
      "C) Masking certain bits in data",
      "D) Using bitmasks to represent subsets as DP states for exponential-state problems"
    ],
    optionsChinese: [
      "A) 使用二进制数的DP",
      "B) DP表的一种压缩",
      "C) 屏蔽数据中的某些位",
      "D) 使用位掩码表示子集作为指数状态问题的DP状态"
    ],
    answer: 3,
    explanation: "Bitmask DP uses an integer's binary representation to encode which elements of a set are included in a subset. This allows iterating over all 2^n subsets efficiently. It is used for problems like TSP and assignment problems where the state involves which items have been selected.",
    explanationChinese: "位掩码DP使用整数的二进制表示来编码集合中哪些元素包含在子集中。这允许高效遍历所有2^n个子集。它用于TSP和分配问题等，状态涉及哪些项目已被选择。",
    diagram: "",
    terms: ["dynamic_programming"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 195,
    q: "What is the recurrence for the edit distance between strings X[1..m] and Y[1..n]?",
    qChinese: "字符串X[1..m]和Y[1..n]之间编辑距离的递推是什么？",
    options: [
      "A) dp[i][j] = dp[i-1][j-1] always",
      "B) dp[i][j] = max(dp[i-1][j], dp[i][j-1])",
      "C) dp[i][j] = i + j",
      "D) dp[i][j] = dp[i-1][j-1] if X[i]=Y[j], else 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])"
    ],
    optionsChinese: [
      "A) dp[i][j] = dp[i-1][j-1] 总是",
      "B) dp[i][j] = max(dp[i-1][j], dp[i][j-1])",
      "C) dp[i][j] = i + j",
      "D) 如果X[i]=Y[j]则dp[i][j] = dp[i-1][j-1]，否则1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])"
    ],
    answer: 3,
    explanation: "If characters match (X[i]=Y[j]), no operation is needed: dp[i][j] = dp[i-1][j-1]. Otherwise, take the minimum of insert (dp[i][j-1]+1), delete (dp[i-1][j]+1), or substitute (dp[i-1][j-1]+1). Base cases are dp[i][0]=i and dp[0][j]=j representing all insertions or deletions.",
    explanationChinese: "如果字符匹配（X[i]=Y[j]），不需操作：dp[i][j] = dp[i-1][j-1]。否则取插入（dp[i][j-1]+1）、删除（dp[i-1][j]+1）或替换（dp[i-1][j-1]+1）的最小值。基本情况dp[i][0]=i和dp[0][j]=j表示全插入或全删除。",
    diagram: "",
    terms: ["dynamic_programming"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 196,
    q: "What is the time complexity of computing Fibonacci using DP?",
    qChinese: "使用DP计算斐波那契的时间复杂度是多少？",
    options: [
      "A) O(2^n)",
      "B) O(n^2)",
      "C) O(n)",
      "D) O(log n)"
    ],
    optionsChinese: [
      "A) O(2^n)",
      "B) O(n^2)",
      "C) O(n)",
      "D) O(log n)"
    ],
    answer: 2,
    explanation: "Using DP (either memoization or tabulation), each Fibonacci value from 1 to n is computed exactly once in O(1) time. The total is O(n) time with O(n) space (or O(1) space using only two variables). This is a dramatic improvement over the O(2^n) naive recursive approach.",
    explanationChinese: "使用DP（记忆化或制表），从1到n的每个斐波那契值恰好计算一次，每次O(1)。总共O(n)时间，O(n)空间（或使用两个变量的O(1)空间）。这比O(2^n)的朴素递归方法有巨大改进。",
    diagram: "",
    terms: ["dynamic_programming", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 197,
    q: "What is the optimal BST problem?",
    qChinese: "什么是最优BST问题？",
    options: [
      "A) Finding the tallest BST",
      "B) Finding the BST with most nodes",
      "C) Balancing any BST",
      "D) Constructing a BST that minimizes expected search cost given access probabilities"
    ],
    optionsChinese: [
      "A) 找最高的BST",
      "B) 找节点最多的BST",
      "C) 平衡任何BST",
      "D) 构造给定访问概率下最小化期望搜索成本的BST"
    ],
    answer: 3,
    explanation: "The optimal BST problem constructs a BST to minimize expected search cost, given the access frequency of each key. More frequently accessed keys should be near the root. The DP solution runs in O(n^3) time using a 2D table where dp[i][j] is the minimum cost BST for keys i through j.",
    explanationChinese: "最优BST问题构造BST以最小化给定每个键访问频率的期望搜索成本。更频繁访问的键应靠近根。DP解运行时间为O(n^3)，使用2D表，dp[i][j]是键i到j的最小成本BST。",
    diagram: "",
    terms: ["dynamic_programming", "binary_search_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 198,
    q: "What is tabulation in dynamic programming?",
    qChinese: "动态规划中的制表法是什么？",
    options: [
      "A) Using tables to display results",
      "B) A table-based hash function",
      "C) Creating spreadsheets",
      "D) The bottom-up approach of filling a table iteratively from smallest subproblems"
    ],
    optionsChinese: [
      "A) 使用表格显示结果",
      "B) 基于表的哈希函数",
      "C) 创建电子表格",
      "D) 从最小子问题开始迭代填表的自底向上方法"
    ],
    answer: 3,
    explanation: "Tabulation is the bottom-up DP approach where a table is filled iteratively starting from the base cases (smallest subproblems) up to the final answer. Unlike memoization (top-down), tabulation avoids recursion overhead and stack overflow risks, and typically has better cache performance.",
    explanationChinese: "制表法是自底向上DP方法，从基本情况（最小子问题）开始迭代填表直到最终答案。与记忆化（自顶向下）不同，制表法避免递归开销和栈溢出风险，通常有更好的缓存性能。",
    diagram: "",
    terms: ["dynamic_programming"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 199,
    q: "What is the DP solution for counting the number of ways to make change for amount n using given coin denominations?",
    qChinese: "使用给定硬币面额凑出金额n的方式数的DP解是什么？",
    options: [
      "A) dp[i] = dp[i-1] + 1",
      "B) dp[i] = i * number_of_coins",
      "C) dp[i] += dp[i - coin] for each coin",
      "D) dp[i] = min(dp[i], dp[i-coin]+1)"
    ],
    optionsChinese: [
      "A) dp[i] = dp[i-1] + 1",
      "B) dp[i] = i * 硬币数",
      "C) dp[i] += dp[i - coin] 对每种硬币",
      "D) dp[i] = min(dp[i], dp[i-coin]+1)"
    ],
    answer: 2,
    explanation: "To count the number of ways (not minimum coins), iterate through coins in the outer loop and amounts in the inner loop. For each coin, dp[i] += dp[i - coin]. This counts combinations (not permutations). dp[0] = 1 (one way to make 0: use no coins).",
    explanationChinese: "要计算方式数（不是最少硬币），外层循环遍历硬币，内层循环遍历金额。对每种硬币，dp[i] += dp[i - coin]。这计算组合（不是排列）。dp[0] = 1（凑出0的一种方式：不使用硬币）。",
    diagram: "",
    terms: ["dynamic_programming"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 200,
    q: "What is the catalan number and what does it count?",
    qChinese: "什么是卡塔兰数，它计算什么？",
    options: [
      "A) The number of prime numbers up to n",
      "B) The number of subsets",
      "C) The number of permutations",
      "D) The number of valid parenthesizations, BST shapes, and other combinatorial structures"
    ],
    optionsChinese: [
      "A) n以内的质数数量",
      "B) 子集数",
      "C) 排列数",
      "D) 有效括号化、BST形状和其他组合结构的数量"
    ],
    answer: 3,
    explanation: "The nth Catalan number counts many combinatorial structures: the number of valid parenthesizations with n pairs, the number of distinct BSTs with n nodes, the number of paths in a grid that do not cross the diagonal, and more. C(n) = (2n)! / ((n+1)! * n!), computed by DP in O(n^2).",
    explanationChinese: "第n个卡塔兰数计算许多组合结构：n对有效括号化的数量、n个节点的不同BST数量、网格中不越过对角线的路径数等。C(n) = (2n)! / ((n+1)! * n!)，通过DP在O(n^2)内计算。",
    diagram: "",
    terms: ["dynamic_programming", "binary_search_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 201,
    q: "What is a greedy algorithm?",
    qChinese: "什么是贪心算法？",
    options: [
      "A) An algorithm that makes the locally optimal choice at each step",
      "B) An algorithm that always finds the global optimum",
      "C) An algorithm that tries all possibilities",
      "D) An algorithm that uses dynamic programming"
    ],
    optionsChinese: [
      "A) 在每一步做出局部最优选择的算法",
      "B) 总是找到全局最优的算法",
      "C) 尝试所有可能的算法",
      "D) 使用动态规划的算法"
    ],
    answer: 0,
    explanation: "A greedy algorithm makes the locally optimal choice at each step, hoping to find a global optimum. It never reconsiders past choices. Greedy algorithms work when the problem has the greedy choice property and optimal substructure. They do not always produce optimal solutions for all problems.",
    explanationChinese: "贪心算法在每一步做出局部最优选择，希望找到全局最优。它不会重新考虑过去的选择。当问题具有贪心选择性质和最优子结构时，贪心算法有效。它们并不总是对所有问题产生最优解。",
    diagram: "",
    terms: ["greedy_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 202,
    q: "What is the greedy choice property?",
    qChinese: "什么是贪心选择性质？",
    options: [
      "A) The algorithm must be fast",
      "B) All choices must be exhaustively evaluated",
      "C) A globally optimal solution can be arrived at by making locally optimal choices",
      "D) The choices must be sorted first"
    ],
    optionsChinese: [
      "A) 算法必须快速",
      "B) 所有选择必须被穷举评估",
      "C) 通过做出局部最优选择可以得到全局最优解",
      "D) 选择必须先排序"
    ],
    answer: 2,
    explanation: "The greedy choice property means that a globally optimal solution can be constructed by making locally optimal choices at each step. This must be proven for each specific problem. Unlike DP which considers multiple possibilities, greedy commits to one choice per step without backtracking.",
    explanationChinese: "贪心选择性质意味着通过在每一步做出局部最优选择可以构造全局最优解。这必须针对每个具体问题证明。与考虑多种可能性的DP不同，贪心在每步承诺一个选择且不回溯。",
    diagram: "",
    terms: ["greedy_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 203,
    q: "Which of these problems can be solved optimally with a greedy algorithm?",
    qChinese: "以下哪些问题可以用贪心算法获得最优解？",
    options: [
      "A) 0/1 Knapsack",
      "B) Activity selection problem",
      "C) Traveling salesman problem",
      "D) Longest common subsequence"
    ],
    optionsChinese: [
      "A) 0/1背包",
      "B) 活动选择问题",
      "C) 旅行商问题",
      "D) 最长公共子序列"
    ],
    answer: 1,
    explanation: "The activity selection problem can be solved optimally with a greedy approach by always selecting the activity that finishes earliest. This maximizes the number of non-overlapping activities. The 0/1 knapsack, TSP, and LCS all require DP or other approaches for optimal solutions.",
    explanationChinese: "活动选择问题可以通过贪心方法获得最优解，始终选择最早结束的活动。这最大化不重叠活动的数量。0/1背包、TSP和LCS都需要DP或其他方法获得最优解。",
    diagram: "",
    terms: ["greedy_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 204,
    q: "How does the fractional knapsack differ from 0/1 knapsack?",
    qChinese: "分数背包与0/1背包有什么不同？",
    options: [
      "A) In fractional knapsack, items can be partially taken (fractions allowed)",
      "B) Fractional knapsack has fractional weights",
      "C) Fractional knapsack is always harder",
      "D) There is no difference"
    ],
    optionsChinese: [
      "A) 在分数背包中，物品可以部分拿取（允许分数）",
      "B) 分数背包有分数重量",
      "C) 分数背包总是更难",
      "D) 没有区别"
    ],
    answer: 0,
    explanation: "In fractional knapsack, you can take fractions of items (e.g., half of an item). This makes the problem solvable by a greedy algorithm: sort items by value/weight ratio and take as much as possible of each item. The greedy approach gives an optimal solution in O(n log n) time.",
    explanationChinese: "在分数背包中，可以拿取物品的部分（如物品的一半）。这使问题可以用贪心算法解决：按价值/重量比排序物品并尽可能多地拿取。贪心方法在O(n log n)时间内给出最优解。",
    diagram: "",
    terms: ["greedy_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 205,
    q: "What is Huffman coding?",
    qChinese: "什么是霍夫曼编码？",
    options: [
      "A) A greedy algorithm for optimal variable-length prefix-free encoding",
      "B) A fixed-length encoding scheme",
      "C) An encryption algorithm",
      "D) A hash function"
    ],
    optionsChinese: [
      "A) 用于最优可变长度无前缀编码的贪心算法",
      "B) 固定长度编码方案",
      "C) 加密算法",
      "D) 哈希函数"
    ],
    answer: 0,
    explanation: "Huffman coding is a greedy algorithm that creates an optimal prefix-free variable-length encoding. Characters with higher frequencies get shorter codes. It builds a binary tree bottom-up by repeatedly merging the two least frequent symbols. The result minimizes the total encoded message length.",
    explanationChinese: "霍夫曼编码是一种贪心算法，创建最优的无前缀可变长度编码。频率更高的字符获得更短的编码。它通过重复合并两个频率最低的符号自底向上构建二叉树。结果最小化编码消息的总长度。",
    diagram: "",
    terms: ["greedy_algorithm", "heap"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 206,
    q: "What data structure is used to efficiently implement Huffman coding?",
    qChinese: "什么数据结构用于高效实现霍夫曼编码？",
    options: [
      "A) Min-heap (priority queue)",
      "B) Stack",
      "C) Hash table",
      "D) BST"
    ],
    optionsChinese: [
      "A) 最小堆（优先队列）",
      "B) 栈",
      "C) 哈希表",
      "D) BST"
    ],
    answer: 0,
    explanation: "Huffman coding uses a min-heap (priority queue) to efficiently select the two nodes with the lowest frequencies at each step. Extracting two minimums and inserting their combined node takes O(log n) each, giving O(n log n) total time for building the Huffman tree from n symbols.",
    explanationChinese: "霍夫曼编码使用最小堆（优先队列）在每一步高效选择频率最低的两个节点。提取两个最小值并插入它们的组合节点各需O(log n)，从n个符号构建霍夫曼树总时间为O(n log n)。",
    diagram: "",
    terms: ["greedy_algorithm", "heap"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 207,
    q: "What is the activity selection problem?",
    qChinese: "什么是活动选择问题？",
    options: [
      "A) Selecting activities to maximize cost",
      "B) Finding the longest activity",
      "C) Scheduling all activities",
      "D) Selecting the maximum number of non-overlapping activities"
    ],
    optionsChinese: [
      "A) 选择活动以最大化成本",
      "B) 找最长的活动",
      "C) 安排所有活动",
      "D) 选择最多数量的不重叠活动"
    ],
    answer: 3,
    explanation: "The activity selection problem asks to select the maximum number of mutually compatible (non-overlapping) activities from a set of activities with start and finish times. The greedy solution sorts by finish time and always picks the next activity that starts after the last selected one finishes.",
    explanationChinese: "活动选择问题要求从一组有开始和结束时间的活动中选择最多数量的互相兼容（不重叠）的活动。贪心解按结束时间排序，始终选择在上一个选定活动结束后开始的下一个活动。",
    diagram: "",
    terms: ["greedy_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 208,
    q: "When does a greedy algorithm NOT produce an optimal solution?",
    qChinese: "什么时候贪心算法不能产生最优解？",
    options: [
      "A) When the problem has the greedy choice property",
      "B) When the problem lacks the greedy choice property (e.g., 0/1 knapsack)",
      "C) When the input is sorted",
      "D) When the problem is small"
    ],
    optionsChinese: [
      "A) 当问题具有贪心选择性质时",
      "B) 当问题缺乏贪心选择性质时（如0/1背包）",
      "C) 当输入已排序时",
      "D) 当问题规模小时"
    ],
    answer: 1,
    explanation: "Greedy fails when the locally optimal choice does not lead to a globally optimal solution. For example, in the 0/1 knapsack, greedily picking the highest value-per-weight item may miss a better combination. The problem must have both greedy choice property and optimal substructure for greedy to work.",
    explanationChinese: "当局部最优选择不能导致全局最优解时贪心失败。例如在0/1背包中，贪心选择最高价值/重量比的物品可能错过更好的组合。问题必须同时具有贪心选择性质和最优子结构才能使贪心有效。",
    diagram: "",
    terms: ["greedy_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 209,
    q: "What greedy strategy is used for the job scheduling problem with deadlines and profits?",
    qChinese: "带截止日期和利润的作业调度问题使用什么贪心策略？",
    options: [
      "A) Schedule by earliest deadline",
      "B) Schedule by shortest job first",
      "C) Schedule jobs in decreasing order of profit, assigning latest available slot",
      "D) Schedule randomly"
    ],
    optionsChinese: [
      "A) 按最早截止日期调度",
      "B) 按最短作业优先调度",
      "C) 按利润递减顺序调度作业，分配最晚的可用时间槽",
      "D) 随机调度"
    ],
    answer: 2,
    explanation: "For job scheduling with deadlines and profits, the greedy approach sorts jobs by profit in decreasing order. For each job, assign it to the latest available time slot before its deadline. This maximizes total profit by prioritizing high-profit jobs while respecting deadline constraints.",
    explanationChinese: "对于带截止日期和利润的作业调度，贪心方法按利润递减排序。对每个作业，分配到截止日期前最晚的可用时间槽。这通过优先高利润作业同时尊重截止日期约束来最大化总利润。",
    diagram: "",
    terms: ["greedy_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 210,
    q: "What is the interval scheduling maximization problem?",
    qChinese: "什么是区间调度最大化问题？",
    options: [
      "A) Finding the longest interval",
      "B) Selecting the maximum number of non-overlapping intervals",
      "C) Merging overlapping intervals",
      "D) Splitting intervals into equal parts"
    ],
    optionsChinese: [
      "A) 找最长的区间",
      "B) 选择最多数量的不重叠区间",
      "C) 合并重叠区间",
      "D) 将区间分成相等部分"
    ],
    answer: 1,
    explanation: "The interval scheduling maximization problem selects the maximum number of non-overlapping intervals. The greedy solution sorts intervals by end time and greedily selects each interval that does not conflict with the previously selected one. This is equivalent to the activity selection problem.",
    explanationChinese: "区间调度最大化问题选择最多数量的不重叠区间。贪心解按结束时间排序区间，贪心地选择不与之前选择的区间冲突的每个区间。这等价于活动选择问题。",
    diagram: "",
    terms: ["greedy_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 211,
    q: "What is the time complexity of the greedy solution for the fractional knapsack problem?",
    qChinese: "分数背包问题贪心解的时间复杂度是多少？",
    options: [
      "A) O(n log n)",
      "B) O(n)",
      "C) O(n^2)",
      "D) O(2^n)"
    ],
    optionsChinese: [
      "A) O(n log n)",
      "B) O(n)",
      "C) O(n^2)",
      "D) O(2^n)"
    ],
    answer: 0,
    explanation: "The fractional knapsack greedy solution runs in O(n log n) time, dominated by sorting items by their value-to-weight ratio. After sorting, a single linear pass greedily takes items from highest ratio to lowest, taking fractions of the last item if needed, which takes O(n).",
    explanationChinese: "分数背包贪心解运行时间为O(n log n)，由按价值/重量比排序物品决定。排序后，一次线性遍历从最高比到最低贪心地拿取物品，必要时拿最后一个物品的部分，这需要O(n)。",
    diagram: "",
    terms: ["greedy_algorithm", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 212,
    q: "Which algorithm technique is used by Dijkstra's shortest path algorithm?",
    qChinese: "Dijkstra最短路径算法使用哪种算法技术？",
    options: [
      "A) Divide and conquer",
      "B) Greedy",
      "C) Backtracking",
      "D) Brute force"
    ],
    optionsChinese: [
      "A) 分治法",
      "B) 贪心",
      "C) 回溯",
      "D) 蛮力"
    ],
    answer: 1,
    explanation: "Dijkstra's algorithm uses a greedy strategy: it always selects the unvisited vertex with the smallest known distance. Once selected, the vertex is finalized and never reconsidered. This greedy choice is provably optimal for graphs with non-negative edge weights.",
    explanationChinese: "Dijkstra算法使用贪心策略：它总是选择已知距离最小的未访问顶点。一旦选择，顶点被确定且不再重新考虑。这种贪心选择对非负边权重的图被证明是最优的。",
    diagram: "",
    terms: ["greedy_algorithm", "dijkstra"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 213,
    q: "What is the minimum number of platforms needed for a train station given arrival and departure times?",
    qChinese: "给定到达和出发时间，火车站最少需要多少个站台？",
    options: [
      "A) Total number of trains",
      "B) Number of overlapping arrivals only",
      "C) Maximum number of trains present at any time (found by greedy sweep)",
      "D) Half the total number of trains"
    ],
    optionsChinese: [
      "A) 火车总数",
      "B) 仅重叠到达数",
      "C) 任何时刻存在的最大火车数（通过贪心扫描找到）",
      "D) 火车总数的一半"
    ],
    answer: 2,
    explanation: "The minimum platforms needed equals the maximum number of trains at the station simultaneously. The greedy approach sorts all arrival and departure events, then sweeps through them: increment count on arrival, decrement on departure. The maximum count during the sweep is the answer.",
    explanationChinese: "最少站台数等于同时在站的最大火车数。贪心方法排序所有到达和出发事件，然后扫描：到达时计数加1，出发时减1。扫描期间的最大计数就是答案。",
    diagram: "",
    terms: ["greedy_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 214,
    q: "In the coin change problem, when does the greedy approach of always using the largest coin work?",
    qChinese: "在硬币找零问题中，始终使用最大硬币的贪心方法什么时候有效？",
    options: [
      "A) Only for certain canonical coin systems like US coins (1, 5, 10, 25)",
      "B) Always",
      "C) Never",
      "D) Only when all coins have the same value"
    ],
    optionsChinese: [
      "A) 仅对某些标准硬币系统如美国硬币（1, 5, 10, 25）",
      "B) 总是有效",
      "C) 从不有效",
      "D) 仅当所有硬币面值相同时"
    ],
    answer: 0,
    explanation: "The greedy approach works for canonical coin systems (like US denominations 1,5,10,25) where each denomination is a multiple of smaller ones in a specific way. For non-canonical systems (e.g., coins 1,3,4 with target 6), greedy gives 4+1+1=3 coins but optimal is 3+3=2 coins.",
    explanationChinese: "贪心方法对标准硬币系统（如美国面额1,5,10,25）有效，其中每种面额以特定方式是较小面额的倍数。对非标准系统（如硬币1,3,4目标6），贪心给出4+1+1=3枚但最优是3+3=2枚。",
    diagram: "",
    terms: ["greedy_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 215,
    q: "What is the difference between greedy algorithms and dynamic programming?",
    qChinese: "贪心算法和动态规划有什么区别？",
    options: [
      "A) Greedy is always faster",
      "B) DP is always greedy",
      "C) Greedy makes one choice per step without reconsidering; DP considers multiple choices and picks the best",
      "D) There is no difference"
    ],
    optionsChinese: [
      "A) 贪心总是更快",
      "B) DP总是贪心的",
      "C) 贪心每步做一个选择不重新考虑；DP考虑多种选择并选最优",
      "D) 没有区别"
    ],
    answer: 2,
    explanation: "Greedy algorithms make an irrevocable locally optimal choice at each step. DP explores multiple options at each step and combines their optimal solutions. Greedy is typically faster but only works when the greedy choice property holds. DP is more general but often slower due to exploring more states.",
    explanationChinese: "贪心算法在每步做出不可撤销的局部最优选择。DP在每步探索多个选项并组合其最优解。贪心通常更快但只在贪心选择性质成立时有效。DP更通用但由于探索更多状态通常更慢。",
    diagram: "",
    terms: ["greedy_algorithm", "dynamic_programming"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 216,
    q: "What greedy criterion is used in Kruskal's MST algorithm?",
    qChinese: "Kruskal MST算法使用什么贪心准则？",
    options: [
      "A) Always pick the edge with maximum weight",
      "B) Always pick the edge nearest to the root",
      "C) Always pick the lightest edge that does not form a cycle",
      "D) Always pick random edges"
    ],
    optionsChinese: [
      "A) 总是选最大权重的边",
      "B) 总是选离根最近的边",
      "C) 总是选不形成环的最轻边",
      "D) 总是随机选边"
    ],
    answer: 2,
    explanation: "Kruskal's algorithm uses the greedy criterion of always selecting the minimum weight edge that does not form a cycle with previously selected edges. This is proven optimal by the cut property: the minimum weight edge crossing any cut must be in the MST.",
    explanationChinese: "Kruskal算法使用的贪心准则是总是选择不与之前选择的边形成环的最小权重边。这通过切割性质证明是最优的：跨越任何切割的最小权重边必须在MST中。",
    diagram: "",
    terms: ["greedy_algorithm", "minimum_spanning_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 217,
    q: "What is the interval partitioning (coloring) problem?",
    qChinese: "什么是区间分割（着色）问题？",
    options: [
      "A) Coloring a graph with minimum colors",
      "B) Splitting an interval in half",
      "C) Partitioning intervals into minimum number of groups where no two in the same group overlap",
      "D) Finding the longest non-overlapping set"
    ],
    optionsChinese: [
      "A) 用最少颜色给图着色",
      "B) 将区间对半分",
      "C) 将区间分成最少数量的组使同组中没有两个重叠",
      "D) 找最长的不重叠集合"
    ],
    answer: 2,
    explanation: "The interval partitioning problem assigns intervals to the minimum number of groups (resources/classrooms) such that no two intervals in the same group overlap. The greedy solution sorts by start time and assigns each interval to an available group, creating a new group if needed. The answer equals the maximum overlap.",
    explanationChinese: "区间分割问题将区间分配到最少数量的组（资源/教室），使同组中没有两个区间重叠。贪心解按开始时间排序，将每个区间分配到可用的组，需要时创建新组。答案等于最大重叠数。",
    diagram: "",
    terms: ["greedy_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 218,
    q: "What is the time complexity of Huffman coding for n symbols?",
    qChinese: "n个符号的霍夫曼编码的时间复杂度是多少？",
    options: [
      "A) O(n log n)",
      "B) O(n)",
      "C) O(n^2)",
      "D) O(2^n)"
    ],
    optionsChinese: [
      "A) O(n log n)",
      "B) O(n)",
      "C) O(n^2)",
      "D) O(2^n)"
    ],
    answer: 0,
    explanation: "Huffman coding runs in O(n log n) time. Building the initial min-heap takes O(n). Then, n-1 merge operations are performed, each involving two extract-min and one insert, each O(log n). The total is O(n) + O(n log n) = O(n log n). If frequencies are pre-sorted, it can be done in O(n).",
    explanationChinese: "霍夫曼编码运行时间为O(n log n)。构建初始最小堆需O(n)。然后执行n-1次合并操作，每次涉及两次extract-min和一次insert，各O(log n)。总计O(n) + O(n log n) = O(n log n)。如果频率预排序，可在O(n)内完成。",
    diagram: "",
    terms: ["greedy_algorithm", "heap", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 219,
    q: "Which problem is solved by the greedy algorithm known as the 'scheduling to minimize lateness'?",
    qChinese: "哪个问题通过称为'最小化延迟调度'的贪心算法解决？",
    options: [
      "A) Order jobs by deadline (earliest deadline first) to minimize maximum lateness",
      "B) Assign jobs to minimize total completion time",
      "C) Randomly assign job order",
      "D) Assign jobs to maximize profit"
    ],
    optionsChinese: [
      "A) 按截止日期排序作业（最早截止日期优先）以最小化最大延迟",
      "B) 分配作业以最小化总完成时间",
      "C) 随机分配作业顺序",
      "D) 分配作业以最大化利润"
    ],
    answer: 0,
    explanation: "The scheduling to minimize maximum lateness problem is optimally solved by the earliest deadline first (EDF) greedy strategy. Jobs are sorted by deadline and executed in that order. This minimizes the maximum lateness across all jobs, which is provable by exchange argument.",
    explanationChinese: "最小化最大延迟调度问题通过最早截止日期优先（EDF）贪心策略最优解决。按截止日期排序作业并按该顺序执行。这最小化所有作业的最大延迟，可通过交换论证证明。",
    diagram: "",
    terms: ["greedy_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 220,
    q: "What is the exchange argument used for in proving greedy algorithm correctness?",
    qChinese: "交换论证在证明贪心算法正确性中用于什么？",
    options: [
      "A) Showing any optimal solution can be transformed into the greedy solution without worsening it",
      "B) Exchanging data between algorithms",
      "C) Swapping elements in an array",
      "D) Trading resources between processes"
    ],
    optionsChinese: [
      "A) 证明任何最优解都可以转换为贪心解而不会变差",
      "B) 在算法之间交换数据",
      "C) 交换数组中的元素",
      "D) 在进程之间交换资源"
    ],
    answer: 0,
    explanation: "The exchange argument is a proof technique showing that any optimal solution can be converted into the greedy solution by swapping elements without increasing cost. This proves the greedy solution is at least as good as any optimal solution, establishing its optimality.",
    explanationChinese: "交换论证是一种证明技术，表明任何最优解都可以通过交换元素转换为贪心解而不增加成本。这证明贪心解至少与任何最优解一样好，确立其最优性。",
    diagram: "",
    terms: ["greedy_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 221,
    q: "What is a matroid and why is it relevant to greedy algorithms?",
    qChinese: "什么是拟阵，它为什么与贪心算法相关？",
    options: [
      "A) A type of matrix used in linear algebra",
      "B) A type of graph",
      "C) A sorting technique",
      "D) A combinatorial structure where greedy algorithms are guaranteed to find optimal solutions"
    ],
    optionsChinese: [
      "A) 线性代数中使用的矩阵类型",
      "B) 一种图类型",
      "C) 一种排序技术",
      "D) 贪心算法保证找到最优解的组合结构"
    ],
    answer: 3,
    explanation: "A matroid is an abstract mathematical structure with an independence system satisfying certain axioms. When a problem can be modeled as a matroid, greedy algorithms are guaranteed to find the optimal solution. Examples include MST (graphic matroid) and the scheduling problem.",
    explanationChinese: "拟阵是一种具有满足某些公理的独立系统的抽象数学结构。当问题可以建模为拟阵时，贪心算法保证找到最优解。例子包括MST（图拟阵）和调度问题。",
    diagram: "",
    terms: ["greedy_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 222,
    q: "What greedy strategy solves the minimum number of coins problem for US currency {1, 5, 10, 25}?",
    qChinese: "什么贪心策略解决美国货币{1, 5, 10, 25}的最少硬币数问题？",
    options: [
      "A) Use the smallest coin first",
      "B) Use an equal number of each coin",
      "C) Use coins randomly",
      "D) Use the largest denomination that does not exceed the remaining amount"
    ],
    optionsChinese: [
      "A) 先使用最小的硬币",
      "B) 每种硬币使用相同数量",
      "C) 随机使用硬币",
      "D) 使用不超过剩余金额的最大面额"
    ],
    answer: 3,
    explanation: "For US currency, greedily using the largest denomination that fits (25, then 10, then 5, then 1) gives the minimum number of coins. For 41 cents: one 25 + one 10 + one 5 + one 1 = 4 coins. This works because US denominations form a canonical coin system.",
    explanationChinese: "对于美国货币，贪心使用适合的最大面额（25，然后10，然后5，然后1）给出最少硬币数。41美分：一个25 + 一个10 + 一个5 + 一个1 = 4枚硬币。这有效是因为美国面额形成标准硬币系统。",
    diagram: "",
    terms: ["greedy_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 223,
    q: "What is the set cover problem?",
    qChinese: "什么是集合覆盖问题？",
    options: [
      "A) Choosing the minimum number of sets from a collection to cover all elements",
      "B) Finding the smallest set",
      "C) Covering a graph with edges",
      "D) Finding the maximum set"
    ],
    optionsChinese: [
      "A) 从集合中选择最少数量的集合来覆盖所有元素",
      "B) 找最小的集合",
      "C) 用边覆盖图",
      "D) 找最大的集合"
    ],
    answer: 0,
    explanation: "The set cover problem asks: given a universe of elements and a collection of subsets, find the minimum number of subsets that cover all elements. It is NP-hard, but the greedy approach (always pick the set covering the most uncovered elements) achieves an O(log n) approximation ratio.",
    explanationChinese: "集合覆盖问题问：给定元素全集和子集集合，找覆盖所有元素的最少子集数。它是NP困难的，但贪心方法（总是选覆盖最多未覆盖元素的集合）达到O(log n)的近似比。",
    diagram: "",
    terms: ["greedy_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 224,
    q: "Why are greedy algorithms generally preferred when they produce optimal solutions?",
    qChinese: "为什么当贪心算法产生最优解时通常被优先选择？",
    options: [
      "A) They use less memory than any other approach",
      "B) They work for all problems",
      "C) They always run in O(1)",
      "D) They are typically simpler and faster than DP solutions"
    ],
    optionsChinese: [
      "A) 它们比任何其他方法使用更少内存",
      "B) 它们对所有问题都有效",
      "C) 它们总是在O(1)内运行",
      "D) 它们通常比DP解更简单更快"
    ],
    answer: 3,
    explanation: "When a greedy algorithm produces an optimal solution, it is preferred because it is typically simpler to implement and runs faster than DP. Greedy algorithms avoid the overhead of storing and looking up subproblem solutions. However, proving optimality requires careful analysis of the problem structure.",
    explanationChinese: "当贪心算法产生最优解时被优先选择，因为它通常实现更简单、运行更快。贪心算法避免了存储和查找子问题解的开销。但证明最优性需要仔细分析问题结构。",
    diagram: "",
    terms: ["greedy_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 225,
    q: "What is a greedy approximation algorithm?",
    qChinese: "什么是贪心近似算法？",
    options: [
      "A) A greedy algorithm that always finds the exact answer",
      "B) A slow version of a greedy algorithm",
      "C) An algorithm that approximates the input",
      "D) A greedy algorithm that finds a solution within a proven factor of the optimal"
    ],
    optionsChinese: [
      "A) 总是找到精确答案的贪心算法",
      "B) 贪心算法的慢速版本",
      "C) 近似输入的算法",
      "D) 找到在最优的已证因子范围内的解的贪心算法"
    ],
    answer: 3,
    explanation: "A greedy approximation algorithm provides a solution that is guaranteed to be within a provable factor of the optimal solution. For NP-hard problems where finding the exact optimum is infeasible, greedy approximation offers efficient solutions with quality guarantees, like the O(log n) ratio for set cover.",
    explanationChinese: "贪心近似算法提供保证在最优解的可证因子范围内的解。对于找到精确最优不可行的NP困难问题，贪心近似提供具有质量保证的高效解，如集合覆盖的O(log n)比率。",
    diagram: "",
    terms: ["greedy_algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 226,
    q: "What is the time complexity of merge sort?",
    qChinese: "归并排序的时间复杂度是多少？",
    options: [
      "A) O(n)",
      "B) O(n^2)",
      "C) O(n log n)",
      "D) O(log n)"
    ],
    optionsChinese: [
      "A) O(n)",
      "B) O(n^2)",
      "C) O(n log n)",
      "D) O(log n)"
    ],
    answer: 2,
    explanation: "Merge sort always runs in O(n log n) time. It divides the array into halves (log n levels), and at each level, merging takes O(n) total work. The recurrence T(n) = 2T(n/2) + O(n) solves to O(n log n). This time complexity is guaranteed regardless of input order.",
    explanationChinese: "归并排序始终运行在O(n log n)时间。它将数组分成两半（log n层），每层合并共需O(n)工作。递推T(n) = 2T(n/2) + O(n)解为O(n log n)。无论输入顺序如何，此时间复杂度都有保证。",
    diagram: "",
    terms: ["merge_sort", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 227,
    q: "Is merge sort a stable sorting algorithm?",
    qChinese: "归并排序是稳定的排序算法吗？",
    options: [
      "A) No",
      "B) Yes",
      "C) Only for integers",
      "D) Depends on implementation"
    ],
    optionsChinese: [
      "A) 不是",
      "B) 是",
      "C) 仅对整数",
      "D) 取决于实现"
    ],
    answer: 1,
    explanation: "Merge sort is stable: equal elements maintain their relative order from the original array. During the merge step, when two elements are equal, the element from the left subarray is placed first, preserving the original ordering. This makes merge sort suitable for sorting by multiple keys.",
    explanationChinese: "归并排序是稳定的：相等元素保持它们在原始数组中的相对顺序。在合并步骤中，当两个元素相等时，来自左子数组的元素先放置，保持原始顺序。这使归并排序适合按多个键排序。",
    diagram: "",
    terms: ["merge_sort"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 228,
    q: "What is the space complexity of merge sort?",
    qChinese: "归并排序的空间复杂度是多少？",
    options: [
      "A) O(n)",
      "B) O(log n)",
      "C) O(1)",
      "D) O(n^2)"
    ],
    optionsChinese: [
      "A) O(n)",
      "B) O(log n)",
      "C) O(1)",
      "D) O(n^2)"
    ],
    answer: 0,
    explanation: "Standard merge sort requires O(n) extra space for the temporary array used during merging. The recursion also uses O(log n) stack space. The total space complexity is O(n). In-place merge sort exists but is complex and has worse constant factors.",
    explanationChinese: "标准归并排序需要O(n)额外空间用于合并时的临时数组。递归还使用O(log n)栈空间。总空间复杂度为O(n)。原地归并排序存在但复杂且常数因子更差。",
    diagram: "",
    terms: ["merge_sort", "space_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 229,
    q: "What is the average-case time complexity of quicksort?",
    qChinese: "快速排序的平均情况时间复杂度是多少？",
    options: [
      "A) O(n log n)",
      "B) O(n)",
      "C) O(n^2)",
      "D) O(n^3)"
    ],
    optionsChinese: [
      "A) O(n log n)",
      "B) O(n)",
      "C) O(n^2)",
      "D) O(n^3)"
    ],
    answer: 0,
    explanation: "Quicksort has O(n log n) average-case time complexity. With a randomly chosen pivot, the expected partition divides the array roughly in half, giving log n levels of recursion with O(n) work per level. However, the worst case is O(n^2) when the pivot is consistently the smallest or largest element.",
    explanationChinese: "快速排序的平均情况时间复杂度为O(n log n)。使用随机选择的枢纽，期望的分区大致将数组一分为二，给出log n层递归，每层O(n)工作。但最坏情况是O(n^2)，当枢纽始终是最小或最大元素时。",
    diagram: "",
    terms: ["quick_sort", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 230,
    q: "What is the worst-case time complexity of quicksort?",
    qChinese: "快速排序的最坏情况时间复杂度是多少？",
    options: [
      "A) O(n log n)",
      "B) O(n)",
      "C) O(n^2)",
      "D) O(2^n)"
    ],
    optionsChinese: [
      "A) O(n log n)",
      "B) O(n)",
      "C) O(n^2)",
      "D) O(2^n)"
    ],
    answer: 2,
    explanation: "Quicksort's worst case is O(n^2), occurring when the pivot is always the minimum or maximum element (e.g., sorting an already sorted array with the first element as pivot). Each partition only removes one element, leading to n levels of recursion with O(n) work each.",
    explanationChinese: "快速排序最坏情况为O(n^2)，当枢纽始终是最小或最大元素时发生（如用第一个元素作枢纽排序已排序数组）。每次分区只移除一个元素，导致n层递归每层O(n)工作。",
    diagram: "",
    terms: ["quick_sort", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 231,
    q: "How can quicksort's worst case be mitigated?",
    qChinese: "如何缓解快速排序的最坏情况？",
    options: [
      "A) Use random pivot selection or median-of-three",
      "B) Always pick the first element as pivot",
      "C) Sort the array first",
      "D) Use a larger array"
    ],
    optionsChinese: [
      "A) 使用随机枢纽选择或三数取中",
      "B) 总是选第一个元素作枢纽",
      "C) 先排序数组",
      "D) 使用更大的数组"
    ],
    answer: 0,
    explanation: "Random pivot selection or median-of-three (choosing the median of the first, middle, and last elements) helps avoid the O(n^2) worst case. Randomized quicksort has O(n log n) expected time for any input. Median-of-three also avoids worst case for sorted or reverse-sorted inputs.",
    explanationChinese: "随机枢纽选择或三数取中（选择第一个、中间和最后一个元素的中位数）有助于避免O(n^2)最坏情况。随机快速排序对任何输入有O(n log n)期望时间。三数取中也避免了排序或逆序输入的最坏情况。",
    diagram: "",
    terms: ["quick_sort"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 232,
    q: "Is quicksort a stable sorting algorithm?",
    qChinese: "快速排序是稳定的排序算法吗？",
    options: [
      "A) Yes, always",
      "B) Only for strings",
      "C) Only with merge sort as backup",
      "D) No, the standard implementation is not stable"
    ],
    optionsChinese: [
      "A) 是，总是",
      "B) 仅对字符串",
      "C) 仅在以归并排序为备用时",
      "D) 不是，标准实现不稳定"
    ],
    answer: 3,
    explanation: "Standard quicksort is NOT stable because the partitioning step can change the relative order of equal elements. When elements equal to the pivot are swapped during partitioning, their original order may not be preserved. A stable version exists but requires extra space.",
    explanationChinese: "标准快速排序不稳定，因为分区步骤可能改变相等元素的相对顺序。当分区过程中等于枢纽的元素被交换时，它们的原始顺序可能不被保持。稳定版本存在但需要额外空间。",
    diagram: "",
    terms: ["quick_sort"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 233,
    q: "What is the space complexity of quicksort?",
    qChinese: "快速排序的空间复杂度是多少？",
    options: [
      "A) O(1)",
      "B) O(n^2)",
      "C) O(n)",
      "D) O(log n) average for recursion stack"
    ],
    optionsChinese: [
      "A) O(1)",
      "B) O(n^2)",
      "C) O(n)",
      "D) 递归栈平均O(log n)"
    ],
    answer: 3,
    explanation: "Quicksort sorts in-place but uses O(log n) average space for the recursion stack (with balanced partitions). In the worst case, the recursion depth is O(n). Tail-call optimization (always recursing on the smaller partition first) limits worst-case stack depth to O(log n).",
    explanationChinese: "快速排序原地排序但递归栈平均使用O(log n)空间（平衡分区时）。最坏情况下递归深度为O(n)。尾调用优化（总是先递归较小的分区）将最坏情况栈深度限制为O(log n)。",
    diagram: "",
    terms: ["quick_sort", "space_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 234,
    q: "What is heap sort's time and space complexity?",
    qChinese: "堆排序的时间和空间复杂度是多少？",
    options: [
      "A) O(n log n) time, O(n) space",
      "B) O(n^2) time, O(1) space",
      "C) O(n log n) time, O(1) space",
      "D) O(n) time, O(n) space"
    ],
    optionsChinese: [
      "A) O(n log n)时间，O(n)空间",
      "B) O(n^2)时间，O(1)空间",
      "C) O(n log n)时间，O(1)空间",
      "D) O(n)时间，O(n)空间"
    ],
    answer: 2,
    explanation: "Heap sort runs in O(n log n) time in all cases (worst, average, best) and uses only O(1) extra space since it sorts in-place. Building the heap takes O(n), and n extract-max operations each take O(log n). It combines the time guarantee of merge sort with the space efficiency of quicksort.",
    explanationChinese: "堆排序在所有情况（最坏、平均、最好）下运行在O(n log n)时间，只使用O(1)额外空间因为它原地排序。建堆O(n)，n次extract-max每次O(log n)。它结合了归并排序的时间保证和快速排序的空间效率。",
    diagram: "",
    terms: ["heap", "time_complexity", "space_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 235,
    q: "What is radix sort?",
    qChinese: "什么是基数排序？",
    options: [
      "A) A non-comparison sort that sorts by individual digits/characters",
      "B) A comparison-based sort",
      "C) A type of quicksort",
      "D) A sort based on hash functions"
    ],
    optionsChinese: [
      "A) 按单个数字/字符排序的非比较排序",
      "B) 基于比较的排序",
      "C) 快速排序的一种",
      "D) 基于哈希函数的排序"
    ],
    answer: 0,
    explanation: "Radix sort is a non-comparison sorting algorithm that sorts integers by processing individual digits from least significant to most significant (LSD) or vice versa (MSD). Using counting sort as a stable subroutine, radix sort runs in O(d*(n+k)) time where d is digits and k is the radix.",
    explanationChinese: "基数排序是一种非比较排序算法，通过从最低有效位到最高有效位（LSD）或反之（MSD）处理单个数字来排序整数。使用计数排序作为稳定子程序，基数排序运行时间为O(d*(n+k))，其中d是位数，k是基数。",
    diagram: "",
    terms: ["time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 236,
    q: "What is the lower bound for comparison-based sorting?",
    qChinese: "基于比较的排序的下界是多少？",
    options: [
      "A) O(n)",
      "B) O(log n)",
      "C) O(n^2)",
      "D) O(n log n)"
    ],
    optionsChinese: [
      "A) O(n)",
      "B) O(log n)",
      "C) O(n^2)",
      "D) O(n log n)"
    ],
    answer: 3,
    explanation: "Any comparison-based sorting algorithm must make at least Omega(n log n) comparisons in the worst case. This is proven using decision trees: with n! possible permutations, at least log(n!) = Omega(n log n) comparisons are needed. Merge sort and heap sort achieve this bound.",
    explanationChinese: "任何基于比较的排序算法在最坏情况下必须进行至少Omega(n log n)次比较。使用决策树证明：有n!种可能的排列，至少需要log(n!) = Omega(n log n)次比较。归并排序和堆排序达到此界。",
    diagram: "",
    terms: ["time_complexity", "big_o_notation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 237,
    q: "What is counting sort?",
    qChinese: "什么是计数排序？",
    options: [
      "A) A comparison-based sort that counts swaps",
      "B) A non-comparison sort that counts occurrences of each value",
      "C) A sort that counts the number of elements",
      "D) A recursive sorting method"
    ],
    optionsChinese: [
      "A) 计算交换次数的比较排序",
      "B) 计算每个值出现次数的非比较排序",
      "C) 计算元素数量的排序",
      "D) 递归排序方法"
    ],
    answer: 1,
    explanation: "Counting sort counts the occurrences of each distinct value, then uses these counts to place elements in sorted order. It runs in O(n + k) time and space, where k is the range of input values. It is stable and works best when k is not significantly larger than n.",
    explanationChinese: "计数排序计算每个不同值的出现次数，然后使用这些计数将元素放在排序位置。运行时间和空间为O(n + k)，其中k是输入值的范围。它是稳定的，当k不显著大于n时效果最好。",
    diagram: "",
    terms: ["time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 238,
    q: "Which sorting algorithm is best for nearly sorted data?",
    qChinese: "哪种排序算法最适合几乎排序的数据？",
    options: [
      "A) Insertion sort",
      "B) Quicksort",
      "C) Heap sort",
      "D) Radix sort"
    ],
    optionsChinese: [
      "A) 插入排序",
      "B) 快速排序",
      "C) 堆排序",
      "D) 基数排序"
    ],
    answer: 0,
    explanation: "Insertion sort is best for nearly sorted data because it runs in O(n) time when the input is almost sorted. Each element is close to its final position, so very few shifts are needed. Quicksort with a bad pivot could degrade to O(n^2) on nearly sorted data.",
    explanationChinese: "插入排序最适合几乎排序的数据，因为当输入几乎排序时它在O(n)时间内运行。每个元素接近其最终位置，所以只需很少的移动。快速排序在几乎排序的数据上使用坏枢纽可能退化到O(n^2)。",
    diagram: "",
    terms: ["time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 239,
    q: "What is the partitioning step in quicksort?",
    qChinese: "快速排序中的分区步骤是什么？",
    options: [
      "A) Dividing the array into equal halves",
      "B) Rearranging elements so those less than pivot are before it and those greater are after",
      "C) Sorting each half",
      "D) Merging two sorted arrays"
    ],
    optionsChinese: [
      "A) 将数组分成相等的两半",
      "B) 重排元素使小于枢纽的在前面，大于枢纽的在后面",
      "C) 对每半排序",
      "D) 合并两个排序数组"
    ],
    answer: 1,
    explanation: "Quicksort's partition step selects a pivot and rearranges the array so all elements less than the pivot come before it and all greater come after it. After partitioning, the pivot is in its final sorted position. The Lomuto and Hoare schemes are two common partition implementations.",
    explanationChinese: "快速排序的分区步骤选择枢纽并重排数组，使所有小于枢纽的元素在其前面，所有大于的在后面。分区后，枢纽在其最终排序位置。Lomuto和Hoare方案是两种常见的分区实现。",
    diagram: "",
    terms: ["quick_sort"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 240,
    q: "What is the quickselect algorithm?",
    qChinese: "什么是快速选择算法？",
    options: [
      "A) A sorting algorithm",
      "B) A selection algorithm that finds the kth smallest element using partitioning",
      "C) A graph algorithm",
      "D) A search algorithm for trees"
    ],
    optionsChinese: [
      "A) 排序算法",
      "B) 使用分区找第k小元素的选择算法",
      "C) 图算法",
      "D) 树的搜索算法"
    ],
    answer: 1,
    explanation: "Quickselect finds the kth smallest element using the same partitioning idea as quicksort. After partitioning, if the pivot is at position k, we are done. If k is less, recurse on the left; if greater, recurse on the right. Average case is O(n), worst case O(n^2).",
    explanationChinese: "快速选择使用与快速排序相同的分区思想找第k小元素。分区后，如果枢纽在位置k，则完成。如果k更小，递归左边；如果更大，递归右边。平均情况O(n)，最坏情况O(n^2)。",
    diagram: "",
    terms: ["quick_sort", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 241,
    q: "What is the time complexity of bucket sort?",
    qChinese: "桶排序的时间复杂度是多少？",
    options: [
      "A) O(n^2) always",
      "B) O(n + k) average when data is uniformly distributed",
      "C) O(n log n) always",
      "D) O(k) where k is number of buckets"
    ],
    optionsChinese: [
      "A) 始终O(n^2)",
      "B) 数据均匀分布时平均O(n + k)",
      "C) 始终O(n log n)",
      "D) O(k)其中k是桶数"
    ],
    answer: 1,
    explanation: "Bucket sort distributes elements into buckets, sorts each bucket, then concatenates. With uniformly distributed data and n buckets, the expected time is O(n + k). Each bucket has O(1) expected elements, so sorting each is O(1). Worst case (all elements in one bucket) is O(n^2).",
    explanationChinese: "桶排序将元素分配到桶中，排序每个桶，然后连接。数据均匀分布且n个桶时，期望时间为O(n + k)。每个桶期望有O(1)个元素，所以每个桶排序O(1)。最坏情况（所有元素在一个桶）O(n^2)。",
    diagram: "",
    terms: ["time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 242,
    q: "Which sorting algorithm would you choose for sorting 1 million 32-bit integers?",
    qChinese: "排序一百万个32位整数你会选择哪种排序算法？",
    options: [
      "A) Bubble sort",
      "B) Insertion sort",
      "C) Selection sort",
      "D) Radix sort"
    ],
    optionsChinese: [
      "A) 冒泡排序",
      "B) 插入排序",
      "C) 选择排序",
      "D) 基数排序"
    ],
    answer: 3,
    explanation: "Radix sort is excellent for sorting large numbers of fixed-width integers. For 1 million 32-bit integers, radix sort with base 256 makes 4 passes over the data (32/8=4 digits), each O(n+256). Total time is O(4*(n+256)) which is essentially O(n), faster than O(n log n) comparison sorts.",
    explanationChinese: "基数排序非常适合排序大量固定宽度整数。对一百万个32位整数，以256为基的基数排序需4次遍历（32/8=4个数字），每次O(n+256)。总时间O(4*(n+256))实质上是O(n)，比O(n log n)比较排序更快。",
    diagram: "",
    terms: ["time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 243,
    q: "What is the best-case time complexity of quicksort?",
    qChinese: "快速排序的最佳情况时间复杂度是多少？",
    options: [
      "A) O(n log n)",
      "B) O(n)",
      "C) O(n^2)",
      "D) O(log n)"
    ],
    optionsChinese: [
      "A) O(n log n)",
      "B) O(n)",
      "C) O(n^2)",
      "D) O(log n)"
    ],
    answer: 0,
    explanation: "Quicksort's best case is O(n log n), occurring when each partition divides the array into two approximately equal halves. This gives log n levels of recursion, with O(n) work at each level. Even the best case cannot be better than O(n log n) since each element must be examined at least once per level.",
    explanationChinese: "快速排序的最佳情况是O(n log n)，当每次分区将数组分成大约相等的两半时发生。这给出log n层递归，每层O(n)工作。即使最佳情况也不能比O(n log n)更好，因为每层每个元素至少被检查一次。",
    diagram: "",
    terms: ["quick_sort", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 244,
    q: "What is an in-place sorting algorithm?",
    qChinese: "什么是原地排序算法？",
    options: [
      "A) An algorithm that sorts without moving elements",
      "B) An algorithm that sorts in ascending order",
      "C) An algorithm that uses at most O(1) or O(log n) extra space",
      "D) An algorithm that does not use recursion"
    ],
    optionsChinese: [
      "A) 不移动元素的算法",
      "B) 按升序排序的算法",
      "C) 最多使用O(1)或O(log n)额外空间的算法",
      "D) 不使用递归的算法"
    ],
    answer: 2,
    explanation: "An in-place sorting algorithm uses only a constant amount O(1) of extra memory beyond the input array (or O(log n) for recursion stack). Examples include quicksort, heap sort, and insertion sort. Merge sort typically requires O(n) extra space, so it is not considered in-place.",
    explanationChinese: "原地排序算法除输入数组外只使用常数O(1)的额外内存（或递归栈的O(log n)）。例子包括快速排序、堆排序和插入排序。归并排序通常需要O(n)额外空间，因此不被认为是原地的。",
    diagram: "",
    terms: ["space_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 245,
    q: "Why is quicksort often faster than merge sort in practice despite having a worse worst case?",
    qChinese: "为什么快速排序在实践中通常比归并排序快，尽管有更差的最坏情况？",
    options: [
      "A) Quicksort has better worst case",
      "B) Better cache locality, in-place sorting, and smaller constant factors",
      "C) Quicksort uses less comparisons",
      "D) Merge sort has bugs"
    ],
    optionsChinese: [
      "A) 快速排序有更好的最坏情况",
      "B) 更好的缓存局部性、原地排序和更小的常数因子",
      "C) 快速排序使用更少的比较",
      "D) 归并排序有bug"
    ],
    answer: 1,
    explanation: "Quicksort is often faster in practice due to better cache locality (it accesses contiguous memory), sorting in-place (no extra array allocation), and smaller constant factors. Merge sort requires copying data to temporary arrays, causing more cache misses and memory allocation overhead.",
    explanationChinese: "快速排序在实践中通常更快，因为更好的缓存局部性（访问连续内存）、原地排序（无额外数组分配）和更小的常数因子。归并排序需要复制数据到临时数组，导致更多缓存未命中和内存分配开销。",
    diagram: "",
    terms: ["quick_sort", "merge_sort"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 246,
    q: "What is timsort?",
    qChinese: "什么是Timsort？",
    options: [
      "A) A hybrid sorting algorithm combining merge sort and insertion sort",
      "B) A variant of quicksort",
      "C) A sort based on timing elements",
      "D) A parallel sorting algorithm"
    ],
    optionsChinese: [
      "A) 结合归并排序和插入排序的混合排序算法",
      "B) 快速排序的变体",
      "C) 基于计时元素的排序",
      "D) 并行排序算法"
    ],
    answer: 0,
    explanation: "Timsort is a hybrid sorting algorithm combining merge sort and insertion sort, designed to perform well on real-world data. It identifies natural runs (already sorted subsequences), extends them with insertion sort, and merges them. It is used in Python and Java's built-in sort.",
    explanationChinese: "Timsort是结合归并排序和插入排序的混合排序算法，设计用于在实际数据上表现良好。它识别自然运行（已排序子序列），用插入排序扩展它们，然后合并。它用于Python和Java的内置排序。",
    diagram: "",
    terms: ["merge_sort"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 247,
    q: "What sorting algorithm does the C++ STL std::sort use?",
    qChinese: "C++ STL的std::sort使用什么排序算法？",
    options: [
      "A) Pure quicksort",
      "B) Bubble sort",
      "C) Merge sort",
      "D) Introsort (quicksort + heapsort + insertion sort)"
    ],
    optionsChinese: [
      "A) 纯快速排序",
      "B) 冒泡排序",
      "C) 归并排序",
      "D) 内省排序（快速排序+堆排序+插入排序）"
    ],
    answer: 3,
    explanation: "C++ std::sort typically uses introsort, which starts with quicksort but switches to heapsort if recursion depth exceeds O(log n) (avoiding O(n^2) worst case) and switches to insertion sort for small subarrays. This guarantees O(n log n) worst-case with quicksort's practical speed.",
    explanationChinese: "C++的std::sort通常使用内省排序，从快速排序开始，但当递归深度超过O(log n)时切换到堆排序（避免O(n^2)最坏情况），对小子数组切换到插入排序。这保证O(n log n)最坏情况同时具有快速排序的实际速度。",
    diagram: "",
    terms: ["quick_sort", "heap"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 248,
    q: "What is the time complexity of radix sort for n numbers with d digits in base b?",
    qChinese: "对n个在基b中有d位的数进行基数排序的时间复杂度是多少？",
    options: [
      "A) O(n log n)",
      "B) O(n^2)",
      "C) O(n * d * b)",
      "D) O(d * (n + b))"
    ],
    optionsChinese: [
      "A) O(n log n)",
      "B) O(n^2)",
      "C) O(n * d * b)",
      "D) O(d * (n + b))"
    ],
    answer: 3,
    explanation: "Radix sort makes d passes over the data (one per digit), and each pass uses counting sort in O(n + b) time where b is the base. Total time is O(d * (n + b)). Choosing b = n gives O(d * n), and for fixed-width integers, d is constant, making it linear in n.",
    explanationChinese: "基数排序对数据进行d次遍历（每个数字一次），每次使用O(n + b)时间的计数排序，b是基数。总时间O(d * (n + b))。选b = n给O(d * n)，对固定宽度整数d为常数，使其在n上线性。",
    diagram: "",
    terms: ["time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 249,
    q: "Which of the following sorting algorithms is NOT comparison-based?",
    qChinese: "以下哪种排序算法不是基于比较的？",
    options: [
      "A) Counting sort",
      "B) Quicksort",
      "C) Merge sort",
      "D) Heap sort"
    ],
    optionsChinese: [
      "A) 计数排序",
      "B) 快速排序",
      "C) 归并排序",
      "D) 堆排序"
    ],
    answer: 0,
    explanation: "Counting sort is not comparison-based; it sorts by counting occurrences of each value. Merge sort, quicksort, and heap sort all rely on comparing elements to determine order. Non-comparison sorts like counting sort, radix sort, and bucket sort can beat the O(n log n) lower bound for comparison sorts.",
    explanationChinese: "计数排序不是基于比较的；它通过计算每个值的出现次数排序。归并排序、快速排序和堆排序都依赖比较元素来确定顺序。计数排序、基数排序和桶排序等非比较排序可以突破比较排序的O(n log n)下界。",
    diagram: "",
    terms: ["time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 250,
    q: "What is the merge step in merge sort?",
    qChinese: "归并排序中的合并步骤是什么？",
    options: [
      "A) Dividing the array in half",
      "B) Finding the pivot",
      "C) Combining two sorted subarrays into one sorted array",
      "D) Heapifying the array"
    ],
    optionsChinese: [
      "A) 将数组一分为二",
      "B) 找枢纽",
      "C) 将两个排序子数组合并为一个排序数组",
      "D) 堆化数组"
    ],
    answer: 2,
    explanation: "The merge step combines two sorted subarrays into one sorted array by comparing elements from both subarrays and placing the smaller one first. This runs in O(n) time using two pointers. The merge step is the key operation in merge sort and is what makes it a stable sort.",
    explanationChinese: "合并步骤通过比较两个子数组的元素并将较小的先放置，将两个排序子数组合并为一个排序数组。使用两个指针运行在O(n)时间。合并步骤是归并排序的关键操作，也是使其成为稳定排序的原因。",
    diagram: "",
    terms: ["merge_sort"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 251,
    q: "What does Big-O notation represent?",
    qChinese: "大O符号表示什么？",
    options: [
      "A) The exact running time",
      "B) The minimum running time",
      "C) An upper bound on the growth rate of a function",
      "D) The average running time"
    ],
    optionsChinese: [
      "A) 精确运行时间",
      "B) 最小运行时间",
      "C) 函数增长率的上界",
      "D) 平均运行时间"
    ],
    answer: 2,
    explanation: "Big-O notation provides an asymptotic upper bound on the growth rate of a function. f(n) = O(g(n)) means f(n) grows no faster than g(n) for sufficiently large n, up to a constant factor. It describes the worst-case scenario for how an algorithm's time or space scales with input size.",
    explanationChinese: "大O符号提供函数增长率的渐近上界。f(n) = O(g(n))意味着对于足够大的n，f(n)的增长不超过g(n)，相差一个常数因子。它描述算法时间或空间随输入大小增长的最坏情况。",
    diagram: "",
    terms: ["big_o_notation", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 252,
    q: "What does Big-Omega notation represent?",
    qChinese: "大Omega符号表示什么？",
    options: [
      "A) An upper bound",
      "B) The average growth rate",
      "C) The exact growth rate",
      "D) A lower bound on the growth rate of a function"
    ],
    optionsChinese: [
      "A) 上界",
      "B) 平均增长率",
      "C) 精确增长率",
      "D) 函数增长率的下界"
    ],
    answer: 3,
    explanation: "Big-Omega notation provides an asymptotic lower bound. f(n) = Omega(g(n)) means f(n) grows at least as fast as g(n) for sufficiently large n. For example, any comparison-based sort is Omega(n log n), meaning no comparison sort can do better than n log n in the worst case.",
    explanationChinese: "大Omega符号提供渐近下界。f(n) = Omega(g(n))意味着对于足够大的n，f(n)至少增长与g(n)一样快。例如，任何基于比较的排序是Omega(n log n)，意味着没有比较排序在最坏情况下能比n log n更好。",
    diagram: "",
    terms: ["big_o_notation", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 253,
    q: "What does Big-Theta notation represent?",
    qChinese: "大Theta符号表示什么？",
    options: [
      "A) A tight bound (both upper and lower)",
      "B) Only a lower bound",
      "C) Only an upper bound",
      "D) The best case only"
    ],
    optionsChinese: [
      "A) 紧界（上界和下界）",
      "B) 仅下界",
      "C) 仅上界",
      "D) 仅最佳情况"
    ],
    answer: 0,
    explanation: "Big-Theta provides a tight asymptotic bound. f(n) = Theta(g(n)) means f(n) grows at the same rate as g(n), within constant factors. This means f(n) is both O(g(n)) and Omega(g(n)). For example, merge sort is Theta(n log n) because it always takes n log n time.",
    explanationChinese: "大Theta提供紧渐近界。f(n) = Theta(g(n))意味着f(n)以与g(n)相同的速率增长，在常数因子内。这意味着f(n)既是O(g(n))又是Omega(g(n))。例如归并排序是Theta(n log n)因为它总是需要n log n时间。",
    diagram: "",
    terms: ["big_o_notation", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 254,
    q: "Which of the following is the correct ordering from slowest to fastest growth rate?",
    qChinese: "以下哪项是从最慢到最快增长率的正确排序？",
    options: [
      "A) O(n!) < O(2^n) < O(n^2) < O(n log n) < O(n) < O(log n) < O(1)",
      "B) O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n) < O(n!)",
      "C) O(1) < O(n) < O(log n) < O(n^2) < O(n log n) < O(2^n)",
      "D) O(log n) < O(1) < O(n) < O(n^2) < O(2^n)"
    ],
    optionsChinese: [
      "A) O(n!) < O(2^n) < O(n^2) < O(n log n) < O(n) < O(log n) < O(1)",
      "B) O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n) < O(n!)",
      "C) O(1) < O(n) < O(log n) < O(n^2) < O(n log n) < O(2^n)",
      "D) O(log n) < O(1) < O(n) < O(n^2) < O(2^n)"
    ],
    answer: 1,
    explanation: "The correct ordering from slowest to fastest growth is: O(1) constant < O(log n) logarithmic < O(n) linear < O(n log n) linearithmic < O(n^2) quadratic < O(2^n) exponential < O(n!) factorial. This hierarchy is fundamental for evaluating algorithm efficiency.",
    explanationChinese: "从最慢到最快增长的正确排序是：O(1)常数 < O(log n)对数 < O(n)线性 < O(n log n)线性对数 < O(n^2)二次 < O(2^n)指数 < O(n!)阶乘。此层次结构是评估算法效率的基础。",
    diagram: "",
    terms: ["big_o_notation", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 255,
    q: "What is amortized analysis?",
    qChinese: "什么是摊还分析？",
    options: [
      "A) Averaging the cost of operations over a sequence to find the per-operation cost",
      "B) Analyzing the worst case of each operation",
      "C) Analyzing only the best case",
      "D) Measuring actual running time"
    ],
    optionsChinese: [
      "A) 在操作序列上平均成本以找到每次操作成本",
      "B) 分析每个操作的最坏情况",
      "C) 仅分析最佳情况",
      "D) 测量实际运行时间"
    ],
    answer: 0,
    explanation: "Amortized analysis determines the average time per operation over a worst-case sequence of operations. Unlike average-case analysis (which assumes random input), amortized analysis guarantees the average cost for ANY sequence. Techniques include aggregate, accounting, and potential methods.",
    explanationChinese: "摊还分析确定最坏情况操作序列中每次操作的平均时间。与平均情况分析（假设随机输入）不同，摊还分析保证任何序列的平均成本。技术包括聚合法、记账法和势能法。",
    diagram: "",
    terms: ["amortized_analysis", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 256,
    q: "What is the amortized cost of push/pop operations on a dynamic array that doubles when full?",
    qChinese: "当满时翻倍的动态数组的push/pop操作的摊还成本是多少？",
    options: [
      "A) O(n)",
      "B) O(n log n)",
      "C) O(log n)",
      "D) O(1)"
    ],
    optionsChinese: [
      "A) O(n)",
      "B) O(n log n)",
      "C) O(log n)",
      "D) O(1)"
    ],
    answer: 3,
    explanation: "The amortized cost of appending to a dynamic array that doubles in size is O(1). Although resizing costs O(n), it happens after n insertions. Using the aggregate method: n insertions plus O(n) total copying gives O(2n)/n = O(1) amortized cost per operation.",
    explanationChinese: "向大小翻倍的动态数组追加的摊还成本为O(1)。虽然调整大小花费O(n)，但在n次插入后发生。使用聚合法：n次插入加O(n)总复制给出O(2n)/n = O(1)每次操作的摊还成本。",
    diagram: "",
    terms: ["amortized_analysis", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 257,
    q: "What is the difference between amortized analysis and average-case analysis?",
    qChinese: "摊还分析和平均情况分析有什么区别？",
    options: [
      "A) They are the same thing",
      "B) Average-case is always more pessimistic",
      "C) Amortized guarantees the average over ANY sequence; average-case assumes random input distribution",
      "D) Amortized only applies to sorting"
    ],
    optionsChinese: [
      "A) 它们是同一事物",
      "B) 平均情况总是更悲观",
      "C) 摊还保证任何序列的平均值；平均情况假设随机输入分布",
      "D) 摊还仅适用于排序"
    ],
    answer: 2,
    explanation: "Amortized analysis guarantees the average cost per operation over the worst-case sequence of operations (no probability involved). Average-case analysis assumes a probability distribution over inputs and computes expected cost. Amortized gives stronger guarantees as it holds for any input sequence.",
    explanationChinese: "摊还分析保证最坏情况操作序列中每次操作的平均成本（不涉及概率）。平均情况分析假设输入的概率分布并计算期望成本。摊还给出更强的保证因为它对任何输入序列成立。",
    diagram: "",
    terms: ["amortized_analysis", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 258,
    q: "What is the Master Theorem used for?",
    qChinese: "主定理用于什么？",
    options: [
      "A) Solving any recurrence relation",
      "B) Computing exact running times",
      "C) Finding the master node in a graph",
      "D) Solving divide-and-conquer recurrences of the form T(n) = aT(n/b) + f(n)"
    ],
    optionsChinese: [
      "A) 求解任何递推关系",
      "B) 计算精确运行时间",
      "C) 找图中的主节点",
      "D) 求解T(n) = aT(n/b) + f(n)形式的分治递推"
    ],
    answer: 3,
    explanation: "The Master Theorem solves recurrences of the form T(n) = aT(n/b) + f(n). It has three cases comparing f(n) with n^(log_b(a)). Case 1: f(n) is polynomially smaller, T(n)=Theta(n^log_b(a)). Case 2: they are equal, T(n)=Theta(n^log_b(a) * log n). Case 3: f(n) dominates.",
    explanationChinese: "主定理求解T(n) = aT(n/b) + f(n)形式的递推。它有三种情况比较f(n)与n^(log_b(a))。情况1：f(n)多项式地小，T(n)=Theta(n^log_b(a))。情况2：相等，T(n)=Theta(n^log_b(a) * log n)。情况3：f(n)主导。",
    diagram: "",
    terms: ["time_complexity", "big_o_notation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 259,
    q: "Using the Master Theorem, what is the solution to T(n) = 2T(n/2) + O(n)?",
    qChinese: "使用主定理，T(n) = 2T(n/2) + O(n)的解是什么？",
    options: [
      "A) O(n)",
      "B) O(log n)",
      "C) O(n^2)",
      "D) O(n log n)"
    ],
    optionsChinese: [
      "A) O(n)",
      "B) O(log n)",
      "C) O(n^2)",
      "D) O(n log n)"
    ],
    answer: 3,
    explanation: "Here a=2, b=2, f(n)=O(n). We compute n^(log_b(a)) = n^(log_2(2)) = n^1 = n. Since f(n) = Theta(n) = Theta(n^log_b(a)), this is Case 2 of the Master Theorem, giving T(n) = Theta(n log n). This is the recurrence for merge sort.",
    explanationChinese: "这里a=2, b=2, f(n)=O(n)。计算n^(log_b(a)) = n^(log_2(2)) = n^1 = n。由于f(n) = Theta(n) = Theta(n^log_b(a))，这是主定理的情况2，给出T(n) = Theta(n log n)。这是归并排序的递推。",
    diagram: "",
    terms: ["time_complexity", "big_o_notation", "merge_sort"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 260,
    q: "What is the time complexity of an algorithm with a nested loop where both loops run n times?",
    qChinese: "内外循环都运行n次的算法的时间复杂度是多少？",
    options: [
      "A) O(n)",
      "B) O(n^2)",
      "C) O(n log n)",
      "D) O(2n)"
    ],
    optionsChinese: [
      "A) O(n)",
      "B) O(n^2)",
      "C) O(n log n)",
      "D) O(2n)"
    ],
    answer: 1,
    explanation: "Two nested loops each running n times perform n * n = n^2 iterations total, giving O(n^2) time complexity. Each iteration of the outer loop runs the inner loop n times. This pattern appears in algorithms like bubble sort, selection sort, and naive matrix multiplication.",
    explanationChinese: "两个嵌套循环各运行n次，总共执行n * n = n^2次迭代，给出O(n^2)时间复杂度。外循环的每次迭代运行内循环n次。此模式出现在冒泡排序、选择排序和朴素矩阵乘法等算法中。",
    diagram: "",
    terms: ["time_complexity", "big_o_notation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 261,
    q: "What is the time complexity of binary search?",
    qChinese: "二分搜索的时间复杂度是多少？",
    options: [
      "A) O(log n)",
      "B) O(n)",
      "C) O(n log n)",
      "D) O(1)"
    ],
    optionsChinese: [
      "A) O(log n)",
      "B) O(n)",
      "C) O(n log n)",
      "D) O(1)"
    ],
    answer: 0,
    explanation: "Binary search runs in O(log n) time because it halves the search space with each comparison. Starting with n elements, after k comparisons, the remaining space is n/2^k. The search ends when n/2^k = 1, giving k = log n. This requires a sorted array as input.",
    explanationChinese: "二分搜索在O(log n)时间内运行，因为每次比较将搜索空间减半。从n个元素开始，k次比较后剩余空间为n/2^k。当n/2^k = 1时搜索结束，给出k = log n。这需要排序数组作为输入。",
    diagram: "",
    terms: ["time_complexity", "big_o_notation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 262,
    q: "What does it mean for an algorithm to have O(1) space complexity?",
    qChinese: "算法具有O(1)空间复杂度意味着什么？",
    options: [
      "A) It uses a constant amount of extra memory regardless of input size",
      "B) It uses exactly 1 byte",
      "C) It uses no memory at all",
      "D) It uses 1 variable"
    ],
    optionsChinese: [
      "A) 它使用与输入大小无关的常数量额外内存",
      "B) 它恰好使用1字节",
      "C) 它根本不使用内存",
      "D) 它使用1个变量"
    ],
    answer: 0,
    explanation: "O(1) space complexity means the algorithm uses a constant amount of extra memory that does not grow with input size n. It might use 10 or 100 variables, but the number is fixed. Examples include in-place sorting algorithms like heap sort and finding the maximum element in an array.",
    explanationChinese: "O(1)空间复杂度意味着算法使用不随输入大小n增长的常数量额外内存。它可能使用10或100个变量，但数量是固定的。例子包括堆排序等原地排序算法和在数组中查找最大元素。",
    diagram: "",
    terms: ["space_complexity", "big_o_notation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 263,
    q: "If f(n) = 3n^2 + 5n + 7, what is the Big-O classification?",
    qChinese: "如果f(n) = 3n^2 + 5n + 7，大O分类是什么？",
    options: [
      "A) O(n^2)",
      "B) O(n)",
      "C) O(3n^2)",
      "D) O(n^2 + n)"
    ],
    optionsChinese: [
      "A) O(n^2)",
      "B) O(n)",
      "C) O(3n^2)",
      "D) O(n^2 + n)"
    ],
    answer: 0,
    explanation: "In Big-O notation, we drop constant factors and lower-order terms. 3n^2 + 5n + 7 is dominated by the n^2 term for large n. The coefficient 3 and the lower-order terms 5n and 7 become negligible. Therefore, f(n) = O(n^2).",
    explanationChinese: "在大O符号中，我们去掉常数因子和低阶项。对于大n，3n^2 + 5n + 7由n^2项主导。系数3和低阶项5n和7变得可忽略。因此f(n) = O(n^2)。",
    diagram: "",
    terms: ["big_o_notation", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 264,
    q: "What is the time complexity of accessing an element by index in an array?",
    qChinese: "通过索引访问数组中元素的时间复杂度是多少？",
    options: [
      "A) O(n)",
      "B) O(1)",
      "C) O(log n)",
      "D) O(n^2)"
    ],
    optionsChinese: [
      "A) O(n)",
      "B) O(1)",
      "C) O(log n)",
      "D) O(n^2)"
    ],
    answer: 1,
    explanation: "Array access by index is O(1) because the memory address can be directly computed: address = base + index * element_size. This constant-time direct access is the fundamental advantage of arrays over linked lists, where accessing the kth element requires O(k) traversal.",
    explanationChinese: "通过索引访问数组是O(1)，因为内存地址可以直接计算：address = base + index * element_size。这种常数时间直接访问是数组相比链表的基本优势，链表访问第k个元素需要O(k)遍历。",
    diagram: "",
    terms: ["time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 265,
    q: "What is the potential method in amortized analysis?",
    qChinese: "摊还分析中的势能法是什么？",
    options: [
      "A) Measuring electrical potential",
      "B) Assigning a potential function to the data structure to account for cheap and expensive operations",
      "C) Computing potential energy in physics",
      "D) Maximizing algorithm potential"
    ],
    optionsChinese: [
      "A) 测量电势",
      "B) 为数据结构分配势函数以考虑廉价和昂贵操作",
      "C) 计算物理中的势能",
      "D) 最大化算法潜力"
    ],
    answer: 1,
    explanation: "The potential method defines a potential function Phi over data structure states. The amortized cost of an operation is its actual cost plus the change in potential. Cheap operations increase potential (saving for later), and expensive operations decrease it. The total amortized cost bounds the actual total cost.",
    explanationChinese: "势能法定义数据结构状态上的势函数Phi。操作的摊还成本是其实际成本加势能变化。廉价操作增加势能（为以后储蓄），昂贵操作减少势能。总摊还成本限制实际总成本。",
    diagram: "",
    terms: ["amortized_analysis"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 266,
    q: "What is the time complexity of the recurrence T(n) = T(n/2) + O(1)?",
    qChinese: "递推T(n) = T(n/2) + O(1)的时间复杂度是多少？",
    options: [
      "A) O(n)",
      "B) O(n log n)",
      "C) O(log n)",
      "D) O(1)"
    ],
    optionsChinese: [
      "A) O(n)",
      "B) O(n log n)",
      "C) O(log n)",
      "D) O(1)"
    ],
    answer: 2,
    explanation: "T(n) = T(n/2) + O(1) describes binary search: halve the problem and do constant work. By the Master Theorem (a=1, b=2, f(n)=O(1)), n^(log_2(1)) = n^0 = 1. Since f(n)=Theta(1)=Theta(n^0), it is Case 2, giving T(n) = Theta(log n).",
    explanationChinese: "T(n) = T(n/2) + O(1)描述二分搜索：将问题减半并做常数工作。由主定理（a=1, b=2, f(n)=O(1)），n^(log_2(1)) = n^0 = 1。由于f(n)=Theta(1)=Theta(n^0)，是情况2，给出T(n) = Theta(log n)。",
    diagram: "",
    terms: ["time_complexity", "big_o_notation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 267,
    q: "What is the time complexity of the recurrence T(n) = 2T(n/2) + O(1)?",
    qChinese: "递推T(n) = 2T(n/2) + O(1)的时间复杂度是多少？",
    options: [
      "A) O(n)",
      "B) O(log n)",
      "C) O(n log n)",
      "D) O(n^2)"
    ],
    optionsChinese: [
      "A) O(n)",
      "B) O(log n)",
      "C) O(n log n)",
      "D) O(n^2)"
    ],
    answer: 0,
    explanation: "Using the Master Theorem with a=2, b=2, f(n)=O(1): n^(log_2(2)) = n. Since f(n)=O(1) is polynomially smaller than n (Case 1), T(n) = Theta(n). This represents traversing all nodes in a binary tree with constant work per node.",
    explanationChinese: "使用主定理，a=2, b=2, f(n)=O(1)：n^(log_2(2)) = n。由于f(n)=O(1)多项式地小于n（情况1），T(n) = Theta(n)。这表示遍历二叉树所有节点，每个节点做常数工作。",
    diagram: "",
    terms: ["time_complexity", "big_o_notation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 268,
    q: "What is the significance of P vs NP in complexity theory?",
    qChinese: "P vs NP在复杂性理论中的意义是什么？",
    options: [
      "A) P is faster than NP",
      "B) NP problems are unsolvable",
      "C) It asks whether every problem whose solution can be verified in polynomial time can also be solved in polynomial time",
      "D) P problems require exponential time"
    ],
    optionsChinese: [
      "A) P比NP快",
      "B) NP问题不可解",
      "C) 它问每个解可以在多项式时间内验证的问题是否也可以在多项式时间内解决",
      "D) P问题需要指数时间"
    ],
    answer: 2,
    explanation: "P vs NP asks whether every problem whose solution can be verified in polynomial time (NP) can also be solved in polynomial time (P). It is the most famous open problem in computer science. If P=NP, many hard problems (TSP, SAT) would have efficient solutions. Most experts believe P != NP.",
    explanationChinese: "P vs NP问每个解可以在多项式时间内验证的问题（NP）是否也可以在多项式时间内解决（P）。这是计算机科学中最著名的开放问题。如果P=NP，许多困难问题（TSP、SAT）将有高效解。大多数专家认为P != NP。",
    diagram: "",
    terms: ["time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 269,
    q: "What is an NP-complete problem?",
    qChinese: "什么是NP完全问题？",
    options: [
      "A) A problem in NP that is at least as hard as every other NP problem",
      "B) A problem that cannot be solved",
      "C) A problem that runs in polynomial time",
      "D) A problem with no practical applications"
    ],
    optionsChinese: [
      "A) 在NP中且至少与每个其他NP问题一样难的问题",
      "B) 不能解决的问题",
      "C) 在多项式时间内运行的问题",
      "D) 没有实际应用的问题"
    ],
    answer: 0,
    explanation: "An NP-complete problem is in NP (verifiable in polynomial time) and is NP-hard (every NP problem can be reduced to it in polynomial time). If any NP-complete problem is solved in polynomial time, all NP problems can be. Examples include SAT, 3-coloring, and subset sum.",
    explanationChinese: "NP完全问题在NP中（可在多项式时间内验证）且是NP困难的（每个NP问题都可以在多项式时间内归约到它）。如果任何NP完全问题在多项式时间内解决，所有NP问题都可以。例子包括SAT、3着色和子集和。",
    diagram: "",
    terms: ["time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 270,
    q: "What is the accounting method in amortized analysis?",
    qChinese: "摊还分析中的记账法是什么？",
    options: [
      "A) Tracking financial costs of algorithms",
      "B) Charging some operations more than actual cost and using credit for expensive operations",
      "C) Counting the number of operations",
      "D) Balancing a checkbook"
    ],
    optionsChinese: [
      "A) 跟踪算法的财务成本",
      "B) 对某些操作收取超过实际成本的费用并将信用用于昂贵操作",
      "C) 计算操作数",
      "D) 平衡支票簿"
    ],
    answer: 1,
    explanation: "The accounting method assigns amortized costs to operations such that cheap operations are overcharged (building credit) and expensive operations are undercharged (using credit). As long as total amortized cost >= total actual cost, the amortized costs are valid upper bounds.",
    explanationChinese: "记账法为操作分配摊还成本，使廉价操作被多收（积累信用），昂贵操作被少收（使用信用）。只要总摊还成本 >= 总实际成本，摊还成本就是有效的上界。",
    diagram: "",
    terms: ["amortized_analysis"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 271,
    q: "What is the time complexity of matrix multiplication using the standard algorithm?",
    qChinese: "使用标准算法的矩阵乘法的时间复杂度是多少？",
    options: [
      "A) O(n^2)",
      "B) O(n^2 log n)",
      "C) O(n^3)",
      "D) O(n^4)"
    ],
    optionsChinese: [
      "A) O(n^2)",
      "B) O(n^2 log n)",
      "C) O(n^3)",
      "D) O(n^4)"
    ],
    answer: 2,
    explanation: "Standard matrix multiplication of two n x n matrices runs in O(n^3) time using three nested loops. For each of the n^2 entries in the result matrix, we compute a dot product of length n. Strassen's algorithm improves this to O(n^2.807) using divide and conquer.",
    explanationChinese: "两个n x n矩阵的标准矩阵乘法使用三个嵌套循环运行在O(n^3)。对结果矩阵的n^2个条目中的每一个，计算长度为n的点积。Strassen算法使用分治法将其改进到O(n^2.807)。",
    diagram: "",
    terms: ["time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 272,
    q: "Is O(2n) the same as O(n)?",
    qChinese: "O(2n)与O(n)相同吗？",
    options: [
      "A) No, O(2n) is twice as fast",
      "B) No, O(2n) is a different complexity class",
      "C) Yes, constant factors are dropped in Big-O notation",
      "D) Only for small n"
    ],
    optionsChinese: [
      "A) 不，O(2n)快两倍",
      "B) 不，O(2n)是不同的复杂度类",
      "C) 是，大O符号中去掉常数因子",
      "D) 仅对小n"
    ],
    answer: 2,
    explanation: "Yes, O(2n) = O(n) because Big-O notation ignores constant factors. The definition states f(n) = O(g(n)) if there exist constants c and n0 such that f(n) <= c*g(n) for all n >= n0. For 2n, choosing c=2 satisfies 2n <= 2*n, confirming 2n = O(n).",
    explanationChinese: "是的，O(2n) = O(n)因为大O符号忽略常数因子。定义指出f(n) = O(g(n))如果存在常数c和n0使得对所有n >= n0有f(n) <= c*g(n)。对于2n，选c=2满足2n <= 2*n，确认2n = O(n)。",
    diagram: "",
    terms: ["big_o_notation", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 273,
    q: "What is the time complexity of finding all subsets of a set with n elements?",
    qChinese: "找到有n个元素的集合的所有子集的时间复杂度是多少？",
    options: [
      "A) O(2^n)",
      "B) O(n^2)",
      "C) O(n)",
      "D) O(n!)"
    ],
    optionsChinese: [
      "A) O(2^n)",
      "B) O(n^2)",
      "C) O(n)",
      "D) O(n!)"
    ],
    answer: 0,
    explanation: "A set with n elements has 2^n subsets (each element is either included or not). Enumerating all subsets requires O(2^n) time minimum, since there are that many subsets to output. This exponential complexity makes brute-force subset enumeration infeasible for large n.",
    explanationChinese: "有n个元素的集合有2^n个子集（每个元素要么包含要么不包含）。枚举所有子集至少需要O(2^n)时间，因为有那么多子集需要输出。这种指数复杂度使暴力子集枚举对大n不可行。",
    diagram: "",
    terms: ["time_complexity", "big_o_notation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 274,
    q: "What is the difference between worst-case, average-case, and best-case complexity?",
    qChinese: "最坏情况、平均情况和最佳情况复杂度有什么区别？",
    options: [
      "A) Worst case is the maximum time, average is expected time, best is minimum time over all inputs",
      "B) They are all the same",
      "C) Best case is for small inputs, worst for large",
      "D) They differ only by constant factors"
    ],
    optionsChinese: [
      "A) 最坏情况是最大时间，平均是期望时间，最佳是所有输入的最小时间",
      "B) 它们都相同",
      "C) 最佳情况是小输入，最坏是大输入",
      "D) 它们只相差常数因子"
    ],
    answer: 0,
    explanation: "Worst case: maximum time over all possible inputs of size n. Average case: expected time over a distribution of inputs. Best case: minimum time over all inputs. For quicksort, worst is O(n^2), average is O(n log n), and best is O(n log n). Different inputs of the same size can have different times.",
    explanationChinese: "最坏情况：大小为n的所有可能输入的最大时间。平均情况：输入分布上的期望时间。最佳情况：所有输入的最小时间。快速排序最坏O(n^2)，平均O(n log n)，最佳O(n log n)。相同大小的不同输入可有不同时间。",
    diagram: "",
    terms: ["time_complexity", "big_o_notation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 275,
    q: "What does it mean for a problem to be NP-hard?",
    qChinese: "问题是NP困难意味着什么？",
    options: [
      "A) It is in NP",
      "B) It requires exactly exponential time",
      "C) It cannot be solved at all",
      "D) It is at least as hard as the hardest problems in NP"
    ],
    optionsChinese: [
      "A) 它在NP中",
      "B) 它需要恰好指数时间",
      "C) 它完全不能解决",
      "D) 它至少与NP中最难的问题一样难"
    ],
    answer: 3,
    explanation: "NP-hard means a problem is at least as hard as every problem in NP: every NP problem can be reduced to it in polynomial time. An NP-hard problem need not be in NP itself (its solution might not be verifiable in polynomial time). NP-complete = NP-hard AND in NP.",
    explanationChinese: "NP困难意味着问题至少与NP中的每个问题一样难：每个NP问题都可以在多项式时间内归约到它。NP困难问题不一定在NP中（其解可能无法在多项式时间内验证）。NP完全 = NP困难且在NP中。",
    diagram: "",
    terms: ["time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 276,
    q: "What is a randomized algorithm?",
    qChinese: "什么是随机化算法？",
    options: [
      "A) An algorithm with unpredictable output",
      "B) An algorithm that works on random data only",
      "C) An algorithm that uses random numbers to make decisions during execution",
      "D) An algorithm with no deterministic steps"
    ],
    optionsChinese: [
      "A) 输出不可预测的算法",
      "B) 仅对随机数据有效的算法",
      "C) 在执行过程中使用随机数做决策的算法",
      "D) 没有确定性步骤的算法"
    ],
    answer: 2,
    explanation: "A randomized algorithm uses random numbers as part of its logic to make decisions. Examples include randomized quicksort (random pivot), random sampling, and Monte Carlo algorithms. Randomization often provides better expected performance or simpler algorithms compared to deterministic approaches.",
    explanationChinese: "随机化算法使用随机数作为其逻辑的一部分来做决策。例子包括随机快速排序（随机枢纽）、随机采样和蒙特卡洛算法。随机化通常比确定性方法提供更好的期望性能或更简单的算法。",
    diagram: "",
    terms: ["quick_sort"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 277,
    q: "What is the difference between Las Vegas and Monte Carlo algorithms?",
    qChinese: "拉斯维加斯算法和蒙特卡洛算法有什么区别？",
    options: [
      "A) Las Vegas is faster",
      "B) Monte Carlo is always better",
      "C) Las Vegas always gives correct results (randomness affects runtime); Monte Carlo may give incorrect results (randomness affects correctness)",
      "D) They are the same"
    ],
    optionsChinese: [
      "A) 拉斯维加斯更快",
      "B) 蒙特卡洛总是更好",
      "C) 拉斯维加斯总是给出正确结果（随机性影响运行时间）；蒙特卡洛可能给出错误结果（随机性影响正确性）",
      "D) 它们相同"
    ],
    answer: 2,
    explanation: "Las Vegas algorithms always produce correct output but have random running time (e.g., randomized quicksort). Monte Carlo algorithms have deterministic running time but may produce incorrect output with bounded probability (e.g., randomized primality testing). The tradeoff is correctness vs. speed guarantee.",
    explanationChinese: "拉斯维加斯算法总是产生正确输出但运行时间随机（如随机快速排序）。蒙特卡洛算法有确定性运行时间但可能以有界概率产生错误输出（如随机素性测试）。权衡是正确性vs速度保证。",
    diagram: "",
    terms: ["quick_sort"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 278,
    q: "What is the expected number of comparisons in randomized quicksort?",
    qChinese: "随机快速排序的期望比较次数是多少？",
    options: [
      "A) O(n log n)",
      "B) O(n)",
      "C) O(n^2)",
      "D) O(log n)"
    ],
    optionsChinese: [
      "A) O(n log n)",
      "B) O(n)",
      "C) O(n^2)",
      "D) O(log n)"
    ],
    answer: 0,
    explanation: "Randomized quicksort makes O(n log n) expected comparisons. By choosing a random pivot each time, the expected partition is reasonably balanced. The exact expected comparisons are 2n*ln(n), which is approximately 1.39*n*log2(n). This holds regardless of the input distribution.",
    explanationChinese: "随机快速排序做O(n log n)次期望比较。每次选择随机枢纽，期望分区相当平衡。精确的期望比较次数为2n*ln(n)，约为1.39*n*log2(n)。这无论输入分布如何都成立。",
    diagram: "",
    terms: ["quick_sort", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 279,
    q: "What is the birthday paradox?",
    qChinese: "什么是生日悖论？",
    options: [
      "A) No two people share a birthday",
      "B) In a group of ~23 people, there is >50% probability that two share a birthday",
      "C) Birthdays are uniformly distributed",
      "D) Everyone has a unique birthday"
    ],
    optionsChinese: [
      "A) 没有两个人生日相同",
      "B) 在约23人的组中，两人生日相同的概率超过50%",
      "C) 生日均匀分布",
      "D) 每个人有唯一的生日"
    ],
    answer: 1,
    explanation: "The birthday paradox states that in a group of only 23 people, there is a greater than 50% chance that two share a birthday. This is relevant to hashing: with n buckets, collisions become likely after only about sqrt(n) insertions. It demonstrates that collisions occur sooner than intuition suggests.",
    explanationChinese: "生日悖论指出在仅23人的组中，两人生日相同的概率超过50%。这与哈希相关：有n个桶时，仅约sqrt(n)次插入后冲突就变得可能。它表明冲突比直觉更早发生。",
    diagram: "",
    terms: ["hash_table"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 280,
    q: "What is the expected value of a discrete random variable?",
    qChinese: "离散随机变量的期望值是什么？",
    options: [
      "A) The most common value",
      "B) The median value",
      "C) The weighted average of all possible values where weights are probabilities",
      "D) The maximum value"
    ],
    optionsChinese: [
      "A) 最常见的值",
      "B) 中位数值",
      "C) 所有可能值的加权平均，权重是概率",
      "D) 最大值"
    ],
    answer: 2,
    explanation: "The expected value E[X] of a discrete random variable X is the sum of each possible value multiplied by its probability: E[X] = sum(x * P(X=x)). It represents the long-run average over many trials. Expected value is fundamental to analyzing randomized algorithm performance.",
    explanationChinese: "离散随机变量X的期望值E[X]是每个可能值乘以其概率的和：E[X] = sum(x * P(X=x))。它代表多次试验的长期平均。期望值是分析随机化算法性能的基础。",
    diagram: "",
    terms: ["time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 281,
    q: "What is linearity of expectation?",
    qChinese: "什么是期望的线性性？",
    options: [
      "A) Expected values grow linearly with input",
      "B) E[X + Y] = E[X] + E[Y] for any random variables X and Y, even dependent ones",
      "C) Expected value is always a linear function",
      "D) E[XY] = E[X] * E[Y] always"
    ],
    optionsChinese: [
      "A) 期望值随输入线性增长",
      "B) 对任何随机变量X和Y，E[X + Y] = E[X] + E[Y]，即使它们相关",
      "C) 期望值总是线性函数",
      "D) E[XY] = E[X] * E[Y]总是成立"
    ],
    answer: 1,
    explanation: "Linearity of expectation states that E[X + Y] = E[X] + E[Y] for ANY random variables X and Y, regardless of whether they are independent or dependent. This powerful property simplifies many algorithm analyses, like computing the expected number of comparisons in randomized quicksort.",
    explanationChinese: "期望的线性性指出E[X + Y] = E[X] + E[Y]对任何随机变量X和Y成立，无论它们是否独立。这个强大的性质简化了许多算法分析，如计算随机快速排序的期望比较次数。",
    diagram: "",
    terms: ["time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 282,
    q: "What is the coupon collector problem?",
    qChinese: "什么是赠券收集问题？",
    options: [
      "A) Collecting the cheapest coupons",
      "B) Finding duplicate coupons",
      "C) Counting coupons in a store",
      "D) Expected number of random draws to collect all n distinct types is O(n log n)"
    ],
    optionsChinese: [
      "A) 收集最便宜的赠券",
      "B) 找重复赠券",
      "C) 在商店数赠券",
      "D) 收集所有n种不同类型的期望随机抽取次数为O(n log n)"
    ],
    answer: 3,
    explanation: "The coupon collector problem asks: how many random draws (with replacement) are needed to collect all n distinct coupons? The expected number is n*H(n) = n*(1 + 1/2 + ... + 1/n) = O(n log n). This has applications in analyzing random hashing and randomized algorithms.",
    explanationChinese: "赠券收集问题问：需要多少次随机抽取（有放回）才能收集所有n种不同赠券？期望次数是n*H(n) = n*(1 + 1/2 + ... + 1/n) = O(n log n)。这在分析随机哈希和随机化算法中有应用。",
    diagram: "",
    terms: ["hash_table"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 283,
    q: "What is the Markov inequality?",
    qChinese: "什么是马尔可夫不等式？",
    options: [
      "A) P(X < a) >= 1 - E[X]/a",
      "B) E[X] >= a * P(X >= a) only for normal distributions",
      "C) P(X = a) = E[X]/a",
      "D) P(X >= a) <= E[X]/a for non-negative X and a > 0"
    ],
    optionsChinese: [
      "A) P(X < a) >= 1 - E[X]/a",
      "B) E[X] >= a * P(X >= a)仅对正态分布",
      "C) P(X = a) = E[X]/a",
      "D) 对非负X且a > 0，P(X >= a) <= E[X]/a"
    ],
    answer: 3,
    explanation: "Markov's inequality states that for a non-negative random variable X and a > 0: P(X >= a) <= E[X]/a. It gives a weak upper bound on tail probabilities using only the expected value. It is used as a building block for stronger concentration inequalities like Chebyshev's.",
    explanationChinese: "马尔可夫不等式指出对非负随机变量X和a > 0：P(X >= a) <= E[X]/a。它仅使用期望值给出尾概率的弱上界。它是更强的集中不等式如切比雪夫不等式的基础。",
    diagram: "",
    terms: ["time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 284,
    q: "What is the Chebyshev inequality used for?",
    qChinese: "切比雪夫不等式用于什么？",
    options: [
      "A) Computing exact probabilities",
      "B) Sorting random variables",
      "C) Finding the median",
      "D) Bounding the probability that a random variable deviates from its mean"
    ],
    optionsChinese: [
      "A) 计算精确概率",
      "B) 排序随机变量",
      "C) 找中位数",
      "D) 限制随机变量偏离其均值的概率"
    ],
    answer: 3,
    explanation: "Chebyshev's inequality bounds the probability that a random variable X deviates from its mean by more than k standard deviations: P(|X - E[X]| >= k*sigma) <= 1/k^2. It is stronger than Markov's inequality and works for any distribution with finite variance.",
    explanationChinese: "切比雪夫不等式限制随机变量X偏离其均值超过k个标准差的概率：P(|X - E[X]| >= k*sigma) <= 1/k^2。它比马尔可夫不等式更强，适用于任何有有限方差的分布。",
    diagram: "",
    terms: ["time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 285,
    q: "What is a hash function's relationship to probability?",
    qChinese: "哈希函数与概率的关系是什么？",
    options: [
      "A) Hash functions are random",
      "B) Hash functions always avoid collisions",
      "C) Probability is not related to hashing",
      "D) Good hash functions approximate uniform random distribution of keys to buckets"
    ],
    optionsChinese: [
      "A) 哈希函数是随机的",
      "B) 哈希函数总是避免冲突",
      "C) 概率与哈希无关",
      "D) 好的哈希函数近似键到桶的均匀随机分布"
    ],
    answer: 3,
    explanation: "Good hash functions approximate uniform random distribution: each key is equally likely to map to any bucket. This assumption (simple uniform hashing) enables probabilistic analysis of hash table performance. Universal hashing makes this rigorous by randomly selecting from a family of hash functions.",
    explanationChinese: "好的哈希函数近似均匀随机分布：每个键等可能映射到任何桶。这个假设（简单均匀哈希）使哈希表性能的概率分析成为可能。通用哈希通过从函数族中随机选择使其严格。",
    diagram: "",
    terms: ["hash_table"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 286,
    q: "What is the probability that a random pivot in quicksort gives a balanced partition (within 25%-75%)?",
    qChinese: "快速排序中随机枢纽给出平衡分区（25%-75%范围内）的概率是多少？",
    options: [
      "A) 25%",
      "B) 100%",
      "C) 75%",
      "D) 50%"
    ],
    optionsChinese: [
      "A) 25%",
      "B) 100%",
      "C) 75%",
      "D) 50%"
    ],
    answer: 3,
    explanation: "A balanced partition (between 25%-75% split) occurs when the pivot falls in the middle 50% of the sorted order. The probability of this is 50% (half the elements are in the middle half). Even with only 50% balanced partitions, randomized quicksort achieves O(n log n) expected time.",
    explanationChinese: "平衡分区（25%-75%分割之间）发生在枢纽落在排序顺序的中间50%时。概率是50%（一半元素在中间一半）。即使只有50%的平衡分区，随机快速排序也能实现O(n log n)期望时间。",
    diagram: "",
    terms: ["quick_sort"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 287,
    q: "What is reservoir sampling?",
    qChinese: "什么是蓄水池采样？",
    options: [
      "A) Sampling water from a reservoir",
      "B) A type of hash function",
      "C) An algorithm for randomly selecting k items from a stream of unknown size",
      "D) Sorting elements into reservoirs"
    ],
    optionsChinese: [
      "A) 从水库采样水",
      "B) 一种哈希函数",
      "C) 从未知大小的流中随机选择k个项目的算法",
      "D) 将元素排序到水库中"
    ],
    answer: 2,
    explanation: "Reservoir sampling selects k items uniformly at random from a data stream of unknown or very large size n, using only O(k) memory. For each new item at position i, it replaces a random item in the reservoir with probability k/i. This guarantees each item has exactly k/n probability of being selected.",
    explanationChinese: "蓄水池采样从未知或非常大的数据流中均匀随机选择k个项目，只使用O(k)内存。对位置i的每个新项目，以概率k/i替换蓄水池中的随机项目。这保证每个项目被选中的概率恰好为k/n。",
    diagram: "",
    terms: ["time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 288,
    q: "What is the expected time to find an element in a skip list?",
    qChinese: "在跳表中查找元素的期望时间是多少？",
    options: [
      "A) O(n)",
      "B) O(log n)",
      "C) O(n log n)",
      "D) O(1)"
    ],
    optionsChinese: [
      "A) O(n)",
      "B) O(log n)",
      "C) O(n log n)",
      "D) O(1)"
    ],
    answer: 1,
    explanation: "A skip list is a randomized data structure providing O(log n) expected time for search, insert, and delete. It uses multiple levels of linked lists where each level is a random subset of the level below. Higher levels allow skipping over many elements, similar to a balanced BST but simpler to implement.",
    explanationChinese: "跳表是一种随机化数据结构，提供搜索、插入和删除的O(log n)期望时间。它使用多层链表，每层是下层的随机子集。更高层允许跳过许多元素，类似平衡BST但实现更简单。",
    diagram: "",
    terms: ["time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 289,
    q: "What is the Chernoff bound?",
    qChinese: "什么是Chernoff界？",
    options: [
      "A) A bound on the minimum of random variables",
      "B) The maximum number of collisions",
      "C) A bound on hash table size",
      "D) An exponentially decreasing bound on the tail probability of sums of independent random variables"
    ],
    optionsChinese: [
      "A) 随机变量最小值的界",
      "B) 最大冲突数",
      "C) 哈希表大小的界",
      "D) 独立随机变量和的尾概率的指数递减界"
    ],
    answer: 3,
    explanation: "The Chernoff bound provides exponentially tight bounds on the probability that the sum of independent random variables deviates far from its expected value. It is stronger than both Markov and Chebyshev bounds. It is widely used in analyzing randomized algorithms and probabilistic data structures.",
    explanationChinese: "Chernoff界提供独立随机变量之和偏离其期望值较远的概率的指数紧界。它比马尔可夫和切比雪夫界更强。它广泛用于分析随机化算法和概率数据结构。",
    diagram: "",
    terms: ["time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 290,
    q: "What is the randomized min-cut algorithm (Karger's algorithm)?",
    qChinese: "什么是随机最小割算法（Karger算法）？",
    options: [
      "A) Randomly contracting edges until two vertices remain to find the minimum cut",
      "B) Deterministically finding the minimum edge",
      "C) Using DFS to find cuts",
      "D) Sorting edges and removing the smallest"
    ],
    optionsChinese: [
      "A) 随机收缩边直到剩两个顶点来找最小割",
      "B) 确定性地找最小边",
      "C) 使用DFS找割",
      "D) 排序边并删除最小的"
    ],
    answer: 0,
    explanation: "Karger's algorithm finds the minimum cut by repeatedly contracting randomly chosen edges (merging the two endpoints into one vertex) until only two vertices remain. The edges between them form a cut. Running this O(n^2 log n) times and taking the minimum gives the min-cut with high probability.",
    explanationChinese: "Karger算法通过重复收缩随机选择的边（将两个端点合并为一个顶点）直到只剩两个顶点来找最小割。它们之间的边形成割。运行O(n^2 log n)次并取最小值以高概率给出最小割。",
    diagram: "",
    terms: ["graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 291,
    q: "What is the probability of Karger's algorithm finding the min-cut in a single run?",
    qChinese: "Karger算法在单次运行中找到最小割的概率是多少？",
    options: [
      "A) 1/n",
      "B) Always 100%",
      "C) At least 2/(n(n-1)) which is at least 1/n^2",
      "D) 1/2"
    ],
    optionsChinese: [
      "A) 1/n",
      "B) 总是100%",
      "C) 至少2/(n(n-1))即至少1/n^2",
      "D) 1/2"
    ],
    answer: 2,
    explanation: "In a single run, Karger's algorithm finds the minimum cut with probability at least 2/(n*(n-1)), which is >= 1/n^2. By repeating O(n^2 log n) times, the failure probability drops to 1/n. The algorithm demonstrates how simple randomized approaches can solve complex graph problems.",
    explanationChinese: "在单次运行中，Karger算法以至少2/(n*(n-1))的概率找到最小割，即>= 1/n^2。重复O(n^2 log n)次，失败概率降到1/n。该算法展示了简单的随机方法如何解决复杂图问题。",
    diagram: "",
    terms: ["graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 292,
    q: "What is the expected number of hash collisions when inserting n items into a hash table with n buckets?",
    qChinese: "将n个项目插入有n个桶的哈希表时，期望的哈希冲突数是多少？",
    options: [
      "A) 0",
      "B) About n/2",
      "C) About n - n*(1-1/n)^n which is approximately n(1 - 1/e)",
      "D) n"
    ],
    optionsChinese: [
      "A) 0",
      "B) 约n/2",
      "C) 约n - n*(1-1/n)^n即约n(1 - 1/e)",
      "D) n"
    ],
    answer: 2,
    explanation: "With n items and n buckets under uniform hashing, the expected number of items that collide (hash to an already-occupied bucket) is approximately n - n*(1-1/n)^(n-1), which approaches n*(1-1/e) for large n, about 0.632n. This relates to the birthday paradox analysis.",
    explanationChinese: "在均匀哈希下有n个项目和n个桶，期望冲突的项目数（哈希到已占用桶）约为n - n*(1-1/n)^(n-1)，大n时趋近n*(1-1/e)，约0.632n。这与生日悖论分析相关。",
    diagram: "",
    terms: ["hash_table"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 293,
    q: "What is randomized selection (median finding) expected time?",
    qChinese: "随机选择（中位数查找）的期望时间是多少？",
    options: [
      "A) O(n)",
      "B) O(n log n)",
      "C) O(n^2)",
      "D) O(log n)"
    ],
    optionsChinese: [
      "A) O(n)",
      "B) O(n log n)",
      "C) O(n^2)",
      "D) O(log n)"
    ],
    answer: 0,
    explanation: "Randomized selection (quickselect) finds the kth smallest element in O(n) expected time. Unlike quicksort, it only recurses on one side of the partition. The expected time satisfies T(n) = T(3n/4) + O(n) on average (since a random pivot gives a 25-75 split 50% of the time), solving to O(n).",
    explanationChinese: "随机选择（快速选择）在O(n)期望时间内找到第k小元素。与快速排序不同，它只递归分区的一侧。期望时间平均满足T(n) = T(3n/4) + O(n)（因为随机枢纽50%概率给出25-75分割），解为O(n)。",
    diagram: "",
    terms: ["quick_sort", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 294,
    q: "What is the balls-into-bins problem?",
    qChinese: "什么是球入桶问题？",
    options: [
      "A) Sorting balls by color",
      "B) Finding the heaviest ball",
      "C) Counting bins in a warehouse",
      "D) Analyzing the distribution when n balls are thrown randomly into m bins"
    ],
    optionsChinese: [
      "A) 按颜色排序球",
      "B) 找最重的球",
      "C) 计算仓库中的桶数",
      "D) 分析n个球随机投入m个桶时的分布"
    ],
    answer: 3,
    explanation: "The balls-into-bins problem studies what happens when n balls are thrown uniformly at random into m bins. Key results: with n balls and n bins, the maximum load is O(log n / log log n) with high probability. This models hash table behavior, load balancing, and randomized assignments.",
    explanationChinese: "球入桶问题研究当n个球均匀随机投入m个桶时会发生什么。关键结果：n个球和n个桶时，最大负载以高概率为O(log n / log log n)。这模拟哈希表行为、负载均衡和随机分配。",
    diagram: "",
    terms: ["hash_table"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 295,
    q: "What does 'with high probability' mean in randomized algorithms?",
    qChinese: "随机化算法中'以高概率'意味着什么？",
    options: [
      "A) Probability > 50%",
      "B) Probability >= 1 - 1/n^c for some constant c > 0",
      "C) Probability = 100%",
      "D) Probability > 90%"
    ],
    optionsChinese: [
      "A) 概率 > 50%",
      "B) 对某个常数c > 0，概率 >= 1 - 1/n^c",
      "C) 概率 = 100%",
      "D) 概率 > 90%"
    ],
    answer: 1,
    explanation: "In algorithm analysis, 'with high probability' (w.h.p.) means the probability is at least 1 - 1/n^c for some constant c > 0. As n grows, this probability approaches 1 very rapidly. The constant c can often be made arbitrarily large by adjusting algorithm parameters.",
    explanationChinese: "'以高概率'（w.h.p.）在算法分析中意味着概率至少为1 - 1/n^c，对某个常数c > 0。随着n增长，此概率非常快速地趋近1。常数c通常可以通过调整算法参数任意增大。",
    diagram: "",
    terms: ["time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 296,
    q: "What is the power of two choices in random load balancing?",
    qChinese: "随机负载均衡中的'两个选择的力量'是什么？",
    options: [
      "A) Choosing the larger of two servers",
      "B) Using two hash functions",
      "C) Placing each ball in the less loaded of two randomly chosen bins dramatically reduces maximum load",
      "D) Running the algorithm twice"
    ],
    optionsChinese: [
      "A) 选择两个服务器中较大的",
      "B) 使用两个哈希函数",
      "C) 将每个球放入两个随机选择桶中较空的一个可显著减少最大负载",
      "D) 运行算法两次"
    ],
    answer: 2,
    explanation: "The power of two choices shows that choosing two random bins and placing the ball in the less loaded one reduces the maximum load from O(log n / log log n) to O(log log n) with high probability. This exponential improvement is widely used in load balancing and hash table design.",
    explanationChinese: "两个选择的力量表明选择两个随机桶并将球放入较空的一个将最大负载从O(log n / log log n)减少到O(log log n)以高概率。这种指数级改进广泛用于负载均衡和哈希表设计。",
    diagram: "",
    terms: ["hash_table"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 297,
    q: "What is the Miller-Rabin primality test?",
    qChinese: "什么是Miller-Rabin素性测试？",
    options: [
      "A) A randomized Monte Carlo algorithm that tests whether a number is likely prime",
      "B) A deterministic prime factoring algorithm",
      "C) A method to find the largest prime",
      "D) A sorting algorithm for prime numbers"
    ],
    optionsChinese: [
      "A) 测试一个数是否可能是质数的随机蒙特卡洛算法",
      "B) 确定性质因数分解算法",
      "C) 找最大质数的方法",
      "D) 质数排序算法"
    ],
    answer: 0,
    explanation: "Miller-Rabin is a randomized primality test (Monte Carlo algorithm). For a number n, it randomly selects witnesses and checks conditions derived from Fermat's Little Theorem. If n fails any test, it is definitely composite. If it passes k rounds, it is prime with probability >= 1 - 4^(-k).",
    explanationChinese: "Miller-Rabin是一种随机素性测试（蒙特卡洛算法）。对数n，它随机选择见证数并检查从费马小定理推导的条件。如果n未通过任何测试，它一定是合数。如果通过k轮，它是质数的概率 >= 1 - 4^(-k)。",
    diagram: "",
    terms: ["time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 298,
    q: "What is a random variable's variance?",
    qChinese: "随机变量的方差是什么？",
    options: [
      "A) The difference between max and min values",
      "B) The most common value",
      "C) E[(X - E[X])^2], measuring the spread of values around the mean",
      "D) The sum of all probabilities"
    ],
    optionsChinese: [
      "A) 最大值和最小值之差",
      "B) 最常见的值",
      "C) E[(X - E[X])^2]，衡量值围绕均值的散布",
      "D) 所有概率之和"
    ],
    answer: 2,
    explanation: "Variance Var(X) = E[(X - E[X])^2] = E[X^2] - (E[X])^2 measures how spread out the values of a random variable are around its mean. Standard deviation is sqrt(Var(X)). Low variance means values are concentrated near the mean, important for algorithm performance guarantees.",
    explanationChinese: "方差Var(X) = E[(X - E[X])^2] = E[X^2] - (E[X])^2衡量随机变量的值围绕其均值的散布程度。标准差是sqrt(Var(X))。低方差意味着值集中在均值附近，对算法性能保证很重要。",
    diagram: "",
    terms: ["time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 299,
    q: "What is a treap?",
    qChinese: "什么是树堆？",
    options: [
      "A) A tree that traps elements",
      "B) A randomized BST where nodes have random priorities maintained as a heap",
      "C) A type of trie",
      "D) A graph traversal technique"
    ],
    optionsChinese: [
      "A) 捕获元素的树",
      "B) 节点有随机优先级并维护为堆的随机化BST",
      "C) 一种trie",
      "D) 一种图遍历技术"
    ],
    answer: 1,
    explanation: "A treap combines a BST and a heap: each node has a key (maintaining BST order) and a random priority (maintaining heap order). The random priorities ensure the tree is balanced with high probability, giving O(log n) expected time for search, insert, and delete without explicit rebalancing.",
    explanationChinese: "树堆结合了BST和堆：每个节点有键（维持BST顺序）和随机优先级（维持堆顺序）。随机优先级确保树以高概率平衡，给出搜索、插入和删除的O(log n)期望时间，无需显式重平衡。",
    diagram: "",
    terms: ["binary_search_tree", "heap"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 300,
    q: "What is the Monte Carlo method for estimating pi?",
    qChinese: "估计pi的蒙特卡洛方法是什么？",
    options: [
      "A) Computing pi using a formula",
      "B) Randomly generating points in a square and counting those inside the inscribed circle",
      "C) Measuring a circle with a ruler",
      "D) Using a lookup table"
    ],
    optionsChinese: [
      "A) 使用公式计算pi",
      "B) 在正方形中随机生成点并计算落在内切圆内的点",
      "C) 用尺子测量圆",
      "D) 使用查找表"
    ],
    answer: 1,
    explanation: "The Monte Carlo method estimates pi by randomly generating points in a unit square and counting how many fall inside the inscribed quarter circle (x^2 + y^2 <= 1). The ratio of points inside to total approximates pi/4. With n points, the error is O(1/sqrt(n)). This demonstrates randomized numerical computation.",
    explanationChinese: "蒙特卡洛方法通过在单位正方形中随机生成点并计算多少落在内切四分之一圆内（x^2 + y^2 <= 1）来估计pi。内部点数与总数的比值近似pi/4。n个点的误差为O(1/sqrt(n))。这展示了随机数值计算。",
    diagram: "",
    terms: ["time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  }
];
