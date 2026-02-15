const questionsMATH = [
  // ===== MATHEMATICS FOR CS (MATH 20A-C, MATH 18, CSE 20, CSE 21) =====
  {
    id: 1,
    q: "What is the derivative of f(x) = x^3 * e^x?",
    qChinese: "f(x) = x^3 * e^x 的导数是什么？",
    options: [
      "A) 3x^2 * e^x",
      "B) x^3 * e^x + 3x^2 * e^x",
      "C) x^3 * e^x + 3x^2",
      "D) 3x^2 * e^(x-1)"
    ],
    optionsChinese: [
      "A) 3x^2 * e^x",
      "B) x^3 * e^x + 3x^2 * e^x",
      "C) x^3 * e^x + 3x^2",
      "D) 3x^2 * e^(x-1)"
    ],
    answer: 1,
    explanation: "Using the product rule: d/dx[f*g] = f'*g + f*g'. Here f = x^3 and g = e^x. So f' = 3x^2 and g' = e^x. The derivative is 3x^2 * e^x + x^3 * e^x, which factors as e^x(x^3 + 3x^2). The product rule is essential whenever two functions are multiplied together.",
    explanationChinese: "使用乘法法则：d/dx[f*g] = f'*g + f*g'。这里 f = x^3，g = e^x。所以 f' = 3x^2，g' = e^x。导数为 3x^2 * e^x + x^3 * e^x，可提取公因式为 e^x(x^3 + 3x^2)。当两个函数相乘时，乘法法则是必不可少的。",
    diagram: "",
    terms: ["product_rule", "derivative", "exponential_function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 2,
    q: "Evaluate the definite integral: integral from 0 to 1 of (3x^2 + 2x) dx.",
    qChinese: "计算定积分：从0到1对(3x^2 + 2x) dx求积分。",
    options: [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    optionsChinese: [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    answer: 1,
    explanation: "The antiderivative of 3x^2 + 2x is x^3 + x^2. Evaluating from 0 to 1: F(1) - F(0) = (1 + 1) - (0 + 0) = 2. The Fundamental Theorem of Calculus connects antiderivatives to definite integrals, allowing us to compute the exact area under the curve by evaluating the antiderivative at the bounds.",
    explanationChinese: "3x^2 + 2x 的不定积分为 x^3 + x^2。从0到1求值：F(1) - F(0) = (1 + 1) - (0 + 0) = 2。微积分基本定理将不定积分与定积分联系起来，使我们能够通过在边界处求值不定积分来计算曲线下的精确面积。",
    diagram: "",
    terms: ["definite_integral", "antiderivative", "fundamental_theorem_of_calculus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 3,
    q: "What is the gradient of f(x, y) = x^2*y + y^3 at the point (1, 2)?",
    qChinese: "f(x, y) = x^2*y + y^3 在点(1, 2)处的梯度是什么？",
    options: [
      "A) (4, 13)",
      "B) (2, 12)",
      "C) (4, 12)",
      "D) (2, 13)"
    ],
    optionsChinese: [
      "A) (4, 13)",
      "B) (2, 12)",
      "C) (4, 12)",
      "D) (2, 13)"
    ],
    answer: 0,
    explanation: "The gradient is (partial f/partial x, partial f/partial y). The partial derivative with respect to x is 2xy, and with respect to y is x^2 + 3y^2. At (1,2): partial_x = 2(1)(2) = 4, partial_y = 1 + 3(4) = 13. So the gradient is (4, 13). The gradient points in the direction of steepest ascent, critical for optimization.",
    explanationChinese: "梯度为(偏f/偏x, 偏f/偏y)。对x的偏导数为2xy，对y的偏导数为x^2 + 3y^2。在(1,2)处：偏x = 2(1)(2) = 4，偏y = 1 + 3(4) = 13。所以梯度为(4, 13)。梯度指向最陡上升方向，这对优化至关重要。",
    diagram: "",
    terms: ["gradient", "partial_derivative", "multivariable_calculus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 4,
    q: "Given matrices A = [[1, 2], [3, 4]] and B = [[5, 6], [7, 8]], what is the element in row 1, column 1 (0-indexed) of the product AB?",
    qChinese: "给定矩阵 A = [[1, 2], [3, 4]] 和 B = [[5, 6], [7, 8]]，乘积AB中第1行第1列（从0开始索引）的元素是什么？",
    options: [
      "A) 19",
      "B) 22",
      "C) 43",
      "D) 50"
    ],
    optionsChinese: [
      "A) 19",
      "B) 22",
      "C) 43",
      "D) 50"
    ],
    answer: 3,
    explanation: "For matrix multiplication, element (i,j) of AB equals the dot product of row i of A and column j of B. Row 1 of A is [3, 4] and column 1 of B is [6, 8]. The dot product is 3*6 + 4*8 = 18 + 32 = 50. Matrix multiplication is O(n^3) for n x n matrices and is fundamental to linear algebra and machine learning.",
    explanationChinese: "对于矩阵乘法，AB的元素(i,j)等于A的第i行与B的第j列的点积。A的第1行为[3, 4]，B的第1列为[6, 8]。点积为 3*6 + 4*8 = 18 + 32 = 50。矩阵乘法对于n x n矩阵为O(n^3)，是线性代数和机器学习的基础。",
    diagram: "",
    terms: ["matrix_multiplication", "dot_product", "linear_algebra"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 5,
    q: "What are the eigenvalues of the matrix A = [[4, 1], [2, 3]]?",
    qChinese: "矩阵 A = [[4, 1], [2, 3]] 的特征值是什么？",
    options: [
      "A) 1 and 6",
      "B) 2 and 5",
      "C) 3 and 4",
      "D) 1 and 5"
    ],
    optionsChinese: [
      "A) 1和6",
      "B) 2和5",
      "C) 3和4",
      "D) 1和5"
    ],
    answer: 1,
    explanation: "Eigenvalues satisfy det(A - lambda*I) = 0. The characteristic equation is (4-lambda)(3-lambda) - 2 = 0, giving lambda^2 - 7*lambda + 10 = 0. Factoring: (lambda - 2)(lambda - 5) = 0, so lambda = 2 and lambda = 5. Eigenvalues reveal scaling factors along principal directions and are essential in PCA, stability analysis, and quantum mechanics.",
    explanationChinese: "特征值满足 det(A - lambda*I) = 0。特征方程为 (4-lambda)(3-lambda) - 2 = 0，得到 lambda^2 - 7*lambda + 10 = 0。因式分解：(lambda - 2)(lambda - 5) = 0，所以 lambda = 2 和 lambda = 5。特征值揭示了沿主方向的缩放因子，在PCA、稳定性分析和量子力学中至关重要。",
    diagram: "",
    terms: ["eigenvalue", "characteristic_equation", "determinant"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 6,
    q: "Which proof technique assumes the statement to be proved is false and derives a logical contradiction?",
    qChinese: "哪种证明技术假设要证明的命题为假，然后推导出逻辑矛盾？",
    options: [
      "A) Direct proof",
      "B) Proof by contrapositive",
      "C) Proof by contradiction",
      "D) Proof by induction"
    ],
    optionsChinese: [
      "A) 直接证明",
      "B) 逆否证明",
      "C) 反证法",
      "D) 数学归纳法"
    ],
    answer: 2,
    explanation: "Proof by contradiction (reductio ad absurdum) assumes the negation of what we want to prove and shows this leads to a contradiction with known facts or axioms. This forces us to conclude the original statement must be true. Classic examples include proving that the square root of 2 is irrational and that there are infinitely many primes.",
    explanationChinese: "反证法假设我们要证明的命题的否定成立，并证明这会导致与已知事实或公理的矛盾。这迫使我们得出原始命题必须为真的结论。经典例子包括证明根号2是无理数以及素数有无穷多个。",
    diagram: "",
    terms: ["proof_by_contradiction", "logical_reasoning", "mathematical_proof"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 7,
    q: "Using mathematical induction, what are the two steps required to prove a statement P(n) holds for all natural numbers n >= 1?",
    qChinese: "使用数学归纳法，证明命题P(n)对所有自然数n >= 1成立需要哪两个步骤？",
    options: [
      "A) Prove P(0) and prove P(n) implies P(n+2)",
      "B) Prove P(1) and prove P(n) implies P(n+1)",
      "C) Prove P(1) and prove P(n+1) implies P(n)",
      "D) Prove P(n) for any specific value and prove P(n) = P(n+1)"
    ],
    optionsChinese: [
      "A) 证明P(0)并证明P(n)蕴含P(n+2)",
      "B) 证明P(1)并证明P(n)蕴含P(n+1)",
      "C) 证明P(1)并证明P(n+1)蕴含P(n)",
      "D) 对任意特定值证明P(n)并证明P(n) = P(n+1)"
    ],
    answer: 1,
    explanation: "Mathematical induction requires two steps: the base case (proving P(1) is true) and the inductive step (assuming P(n) is true and proving P(n+1) follows). Together, these establish a chain of implications: P(1) implies P(2) implies P(3), and so on for all natural numbers. This technique is widely used to prove summation formulas and algorithm correctness.",
    explanationChinese: "数学归纳法需要两个步骤：基本情况（证明P(1)为真）和归纳步骤（假设P(n)为真并证明P(n+1)成立）。这两步共同建立了一个蕴含链：P(1)蕴含P(2)蕴含P(3)，以此类推对所有自然数成立。该技术广泛用于证明求和公式和算法正确性。",
    diagram: "",
    terms: ["mathematical_induction", "base_case", "inductive_step"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 8,
    q: "Let A = {1, 2, 3, 4, 5} and B = {3, 4, 5, 6, 7}. What is |A union B| - |A intersect B|?",
    qChinese: "设 A = {1, 2, 3, 4, 5}，B = {3, 4, 5, 6, 7}。|A并B| - |A交B| 等于多少？",
    options: [
      "A) 2",
      "B) 4",
      "C) 5",
      "D) 7"
    ],
    optionsChinese: [
      "A) 2",
      "B) 4",
      "C) 5",
      "D) 7"
    ],
    answer: 1,
    explanation: "A union B = {1,2,3,4,5,6,7} so |A union B| = 7. A intersect B = {3,4,5} so |A intersect B| = 3. Therefore |A union B| - |A intersect B| = 7 - 3 = 4. By inclusion-exclusion, |A union B| = |A| + |B| - |A intersect B| = 5 + 5 - 3 = 7, confirming the union count.",
    explanationChinese: "A并B = {1,2,3,4,5,6,7}，所以|A并B| = 7。A交B = {3,4,5}，所以|A交B| = 3。因此|A并B| - |A交B| = 7 - 3 = 4。根据容斥原理，|A并B| = |A| + |B| - |A交B| = 5 + 5 - 3 = 7，验证了并集计数。",
    diagram: "",
    terms: ["set_union", "set_intersection", "inclusion_exclusion"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 9,
    q: "How many ways can a committee of 3 people be chosen from a group of 10?",
    qChinese: "从10人中选出3人组成委员会有多少种方式？",
    options: [
      "A) 30",
      "B) 120",
      "C) 720",
      "D) 1000"
    ],
    optionsChinese: [
      "A) 30",
      "B) 120",
      "C) 720",
      "D) 1000"
    ],
    answer: 1,
    explanation: "This is a combination problem since the order of selection does not matter. C(10,3) = 10! / (3! * 7!) = (10 * 9 * 8) / (3 * 2 * 1) = 720 / 6 = 120. Combinations count subsets of a given size, unlike permutations which count ordered arrangements. This distinction is fundamental in combinatorics and probability.",
    explanationChinese: "这是一个组合问题，因为选择的顺序无关紧要。C(10,3) = 10! / (3! * 7!) = (10 * 9 * 8) / (3 * 2 * 1) = 720 / 6 = 120。组合计算给定大小的子集数量，不同于排列计算有序排列。这种区别在组合数学和概率论中是基本的。",
    diagram: "",
    terms: ["combination", "binomial_coefficient", "combinatorics"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 10,
    q: "In a simple undirected graph with 6 vertices where every vertex has degree 2, how many edges does the graph have?",
    qChinese: "在一个有6个顶点且每个顶点度数为2的简单无向图中，图有多少条边？",
    options: [
      "A) 3",
      "B) 6",
      "C) 9",
      "D) 12"
    ],
    optionsChinese: [
      "A) 3",
      "B) 6",
      "C) 9",
      "D) 12"
    ],
    answer: 1,
    explanation: "By the Handshaking Lemma, the sum of all vertex degrees equals twice the number of edges: sum(degrees) = 2|E|. With 6 vertices each of degree 2, the sum is 12. So 2|E| = 12, giving |E| = 6. Such a graph forms a single cycle (C6) or multiple disjoint cycles. The Handshaking Lemma is a direct consequence of each edge contributing to two vertex degrees.",
    explanationChinese: "根据握手引理，所有顶点度数之和等于边数的两倍：sum(度数) = 2|E|。6个顶点各自度数为2，总和为12。所以2|E| = 12，得|E| = 6。这样的图形成一个单环(C6)或多个不相交的环。握手引理是每条边贡献两个顶点度数的直接结果。",
    diagram: "",
    terms: ["handshaking_lemma", "graph_theory", "vertex_degree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 11,
    q: "What is the limit as x approaches 0 of sin(x)/x?",
    qChinese: "当x趋近于0时，sin(x)/x的极限是什么？",
    options: [
      "A) 0",
      "B) 1",
      "C) infinity",
      "D) The limit does not exist"
    ],
    optionsChinese: [
      "A) 0",
      "B) 1",
      "C) 无穷大",
      "D) 极限不存在"
    ],
    answer: 1,
    explanation: "This is one of the most fundamental limits in calculus. As x approaches 0, sin(x)/x approaches 1. This can be proven using the squeeze theorem with geometric arguments involving a unit circle. It can also be verified using L'Hopital's rule: the derivative of sin(x) is cos(x) and the derivative of x is 1, giving cos(0)/1 = 1.",
    explanationChinese: "这是微积分中最基本的极限之一。当x趋近于0时，sin(x)/x趋近于1。这可以使用涉及单位圆的几何论证的夹逼定理来证明。也可以使用洛必达法则验证：sin(x)的导数是cos(x)，x的导数是1，给出cos(0)/1 = 1。",
    diagram: "",
    terms: ["limit", "squeeze_theorem", "lhopitals_rule"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 12,
    q: "Which of the following is the correct chain rule result for d/dx[sin(x^2)]?",
    qChinese: "以下哪项是 d/dx[sin(x^2)] 的正确链式法则结果？",
    options: [
      "A) cos(x^2)",
      "B) 2x * cos(x^2)",
      "C) 2x * sin(x^2)",
      "D) cos(2x)"
    ],
    optionsChinese: [
      "A) cos(x^2)",
      "B) 2x * cos(x^2)",
      "C) 2x * sin(x^2)",
      "D) cos(2x)"
    ],
    answer: 1,
    explanation: "The chain rule states d/dx[f(g(x))] = f'(g(x)) * g'(x). Here, f(u) = sin(u) and g(x) = x^2. So f'(u) = cos(u) and g'(x) = 2x. The result is cos(x^2) * 2x = 2x*cos(x^2). The chain rule is essential for differentiating composite functions and appears frequently in neural network backpropagation.",
    explanationChinese: "链式法则指出 d/dx[f(g(x))] = f'(g(x)) * g'(x)。这里 f(u) = sin(u)，g(x) = x^2。所以 f'(u) = cos(u)，g'(x) = 2x。结果为 cos(x^2) * 2x = 2x*cos(x^2)。链式法则对于求复合函数的导数至关重要，在神经网络反向传播中频繁出现。",
    diagram: "",
    terms: ["chain_rule", "composite_function", "derivative"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 13,
    q: "What is the determinant of the 3x3 matrix [[1, 2, 3], [0, 1, 4], [5, 6, 0]]?",
    qChinese: "3x3矩阵 [[1, 2, 3], [0, 1, 4], [5, 6, 0]] 的行列式是什么？",
    options: [
      "A) 1",
      "B) -1",
      "C) 0",
      "D) 2"
    ],
    optionsChinese: [
      "A) 1",
      "B) -1",
      "C) 0",
      "D) 2"
    ],
    answer: 0,
    explanation: "Expanding along the first row: det = 1*(1*0 - 4*6) - 2*(0*0 - 4*5) + 3*(0*6 - 1*5) = 1*(-24) - 2*(-20) + 3*(-5) = -24 + 40 - 15 = 1. Cofactor expansion along a row or column with zeros simplifies computation. A nonzero determinant confirms the matrix is invertible and the columns are linearly independent.",
    explanationChinese: "沿第一行展开：det = 1*(1*0 - 4*6) - 2*(0*0 - 4*5) + 3*(0*6 - 1*5) = 1*(-24) - 2*(-20) + 3*(-5) = -24 + 40 - 15 = 1。沿含零元素的行或列展开可简化计算。非零行列式确认矩阵可逆且列向量线性无关。",
    diagram: "",
    terms: ["determinant", "cofactor_expansion", "matrix"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 14,
    q: "How many bit strings of length 8 contain exactly three 1s?",
    qChinese: "长度为8的位串中恰好包含三个1的有多少个？",
    options: [
      "A) 24",
      "B) 56",
      "C) 84",
      "D) 112"
    ],
    optionsChinese: [
      "A) 24",
      "B) 56",
      "C) 84",
      "D) 112"
    ],
    answer: 1,
    explanation: "We need to choose 3 positions out of 8 for the 1s; the remaining positions are 0s. This is C(8,3) = 8! / (3! * 5!) = (8*7*6) / (3*2*1) = 336/6 = 56. This is a direct application of combinations where we select positions rather than objects. Counting bit strings is a classic discrete mathematics exercise with applications in coding theory.",
    explanationChinese: "我们需要从8个位置中选择3个放置1，其余位置为0。这是C(8,3) = 8! / (3! * 5!) = (8*7*6) / (3*2*1) = 336/6 = 56。这是组合的直接应用，选择的是位置而非对象。计算位串是经典的离散数学练习，在编码理论中有应用。",
    diagram: "",
    terms: ["combination", "bit_string", "counting_principle"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 15,
    q: "What does it mean for a set of vectors to be linearly independent?",
    qChinese: "一组向量线性无关意味着什么？",
    options: [
      "A) Each vector is a scalar multiple of another vector in the set",
      "B) No vector in the set can be written as a linear combination of the others",
      "C) All vectors in the set are orthogonal to each other",
      "D) The vectors span the entire vector space"
    ],
    optionsChinese: [
      "A) 每个向量是集合中另一个向量的标量倍数",
      "B) 集合中没有向量可以写成其他向量的线性组合",
      "C) 集合中所有向量彼此正交",
      "D) 这些向量张成整个向量空间"
    ],
    answer: 1,
    explanation: "Vectors are linearly independent if the only solution to c1*v1 + c2*v2 + ... + cn*vn = 0 is c1 = c2 = ... = cn = 0. Equivalently, no vector can be expressed as a linear combination of the others. Orthogonality implies independence but is a stronger condition. Spanning the space is a separate property; a basis requires both independence and spanning.",
    explanationChinese: "如果 c1*v1 + c2*v2 + ... + cn*vn = 0 的唯一解是 c1 = c2 = ... = cn = 0，则向量是线性无关的。等价地，没有向量可以表示为其他向量的线性组合。正交性蕴含线性无关但条件更强。张成空间是独立的性质；基需要同时满足线性无关和张成。",
    diagram: "",
    terms: ["linear_independence", "linear_combination", "vector_space"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 16,
    q: "Evaluate the double integral of (x + y) over the region R = {(x,y) : 0 <= x <= 1, 0 <= y <= 1}.",
    qChinese: "在区域 R = {(x,y) : 0 <= x <= 1, 0 <= y <= 1} 上计算(x + y)的二重积分。",
    options: [
      "A) 1/2",
      "B) 1",
      "C) 3/2",
      "D) 2"
    ],
    optionsChinese: [
      "A) 1/2",
      "B) 1",
      "C) 3/2",
      "D) 2"
    ],
    answer: 1,
    explanation: "Integrate (x+y) with respect to y from 0 to 1: integral = xy + y^2/2 evaluated from 0 to 1 = x + 1/2. Then integrate with respect to x from 0 to 1: integral = x^2/2 + x/2 evaluated from 0 to 1 = 1/2 + 1/2 = 1. Double integrals compute volume under a surface over a planar region.",
    explanationChinese: "先对y从0到1积分(x+y)：积分 = xy + y^2/2 从0到1求值 = x + 1/2。然后对x从0到1积分：积分 = x^2/2 + x/2 从0到1求值 = 1/2 + 1/2 = 1。二重积分计算平面区域上曲面下方的体积。",
    diagram: "",
    terms: ["double_integral", "iterated_integral", "multivariable_calculus"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 17,
    q: "In a connected simple graph with n vertices and no cycles, how many edges does it have?",
    qChinese: "在一个有n个顶点且无环的连通简单图中，它有多少条边？",
    options: [
      "A) n",
      "B) n - 1",
      "C) n + 1",
      "D) 2n - 1"
    ],
    optionsChinese: [
      "A) n",
      "B) n - 1",
      "C) n + 1",
      "D) 2n - 1"
    ],
    answer: 1,
    explanation: "A connected acyclic graph is a tree, and every tree with n vertices has exactly n-1 edges. This can be proven by induction: a tree with 1 vertex has 0 edges, and adding a new vertex requires exactly one edge to maintain connectivity without creating a cycle. Trees are fundamental structures in computer science, appearing in file systems, databases, and network routing.",
    explanationChinese: "连通无环图是树，每棵有n个顶点的树恰好有n-1条边。这可以用归纳法证明：1个顶点的树有0条边，每添加一个新顶点恰好需要一条边来保持连通性而不创建环。树是计算机科学中的基本结构，出现在文件系统、数据库和网络路由中。",
    diagram: "",
    terms: ["tree", "connected_graph", "acyclic_graph"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 18,
    q: "If f(x) = integral from 0 to x of e^(t^2) dt, what is f'(x)?",
    qChinese: "如果 f(x) = 从0到x对e^(t^2) dt的积分，f'(x)是什么？",
    options: [
      "A) e^(x^2)",
      "B) 2x * e^(x^2)",
      "C) e^(t^2)",
      "D) The derivative cannot be computed"
    ],
    optionsChinese: [
      "A) e^(x^2)",
      "B) 2x * e^(x^2)",
      "C) e^(t^2)",
      "D) 无法计算导数"
    ],
    answer: 0,
    explanation: "By the Fundamental Theorem of Calculus Part 1, if f(x) = integral from a to x of g(t) dt, then f'(x) = g(x). Here g(t) = e^(t^2), so f'(x) = e^(x^2). Note that while e^(t^2) has no elementary antiderivative, the FTC still guarantees the derivative of the integral function equals the integrand evaluated at x.",
    explanationChinese: "根据微积分基本定理第一部分，如果 f(x) = 从a到x对g(t) dt的积分，则 f'(x) = g(x)。这里 g(t) = e^(t^2)，所以 f'(x) = e^(x^2)。注意虽然 e^(t^2) 没有初等不定积分，微积分基本定理仍然保证积分函数的导数等于被积函数在x处的值。",
    diagram: "",
    terms: ["fundamental_theorem_of_calculus", "derivative", "definite_integral"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 19,
    q: "What is the rank of the matrix [[1, 2, 3], [2, 4, 6], [1, 1, 1]]?",
    qChinese: "矩阵 [[1, 2, 3], [2, 4, 6], [1, 1, 1]] 的秩是什么？",
    options: [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 0"
    ],
    optionsChinese: [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 0"
    ],
    answer: 1,
    explanation: "Row 2 is exactly 2 times Row 1, so they are linearly dependent. After row reduction, Row 2 becomes all zeros. Row 3 [1,1,1] is not a scalar multiple of Row 1 [1,2,3], so it is independent from Row 1. The reduced matrix has 2 non-zero rows, giving rank 2. The rank tells us the dimension of the column space and the number of pivot columns.",
    explanationChinese: "第2行恰好是第1行的2倍，所以它们线性相关。行化简后，第2行变为全零。第3行[1,1,1]不是第1行[1,2,3]的标量倍数，所以与第1行线性无关。化简后的矩阵有2个非零行，秩为2。秩告诉我们列空间的维度和主元列的数量。",
    diagram: "",
    terms: ["matrix_rank", "row_reduction", "linear_dependence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 20,
    q: "Using the Master Theorem, what is the solution to the recurrence T(n) = 2T(n/2) + n?",
    qChinese: "使用主定理，递推关系 T(n) = 2T(n/2) + n 的解是什么？",
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
    answer: 1,
    explanation: "The recurrence T(n) = 2T(n/2) + n has a = 2, b = 2, and f(n) = n. We compute log_b(a) = log_2(2) = 1. Since f(n) = n = Theta(n^1), we are in Case 2 of the Master Theorem where f(n) = Theta(n^(log_b(a))). The solution is T(n) = Theta(n log n). This recurrence describes Merge Sort's running time.",
    explanationChinese: "递推关系 T(n) = 2T(n/2) + n 中 a = 2，b = 2，f(n) = n。我们计算 log_b(a) = log_2(2) = 1。由于 f(n) = n = Theta(n^1)，我们处于主定理第二种情况，其中 f(n) = Theta(n^(log_b(a)))。解为 T(n) = Theta(n log n)。这个递推关系描述了归并排序的运行时间。",
    diagram: "",
    terms: ["master_theorem", "recurrence_relation", "divide_and_conquer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  }
];
