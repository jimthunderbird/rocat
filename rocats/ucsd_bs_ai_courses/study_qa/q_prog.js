const questionsPROG = [
  // ===== PROGRAMMING FUNDAMENTALS (CSE 8A/11 & CSE 12) =====
  {
    id: 1,
    q: "What is the output of the following Java code?\nint x = 5;\nint y = x++ + ++x;\nSystem.out.println(y);",
    qChinese: "以下Java代码的输出是什么？\nint x = 5;\nint y = x++ + ++x;\nSystem.out.println(y);",
    options: [
      "A) 10",
      "B) 11",
      "C) 12",
      "D) 13"
    ],
    optionsChinese: [
      "A) 10",
      "B) 11",
      "C) 12",
      "D) 13"
    ],
    answer: 2,
    explanation: "In the expression x++ + ++x, the post-increment x++ evaluates to 5 (then x becomes 6), and the pre-increment ++x increments x to 7 before evaluating. So y = 5 + 7 = 12. Understanding the difference between post-increment and pre-increment operators is critical for evaluating complex expressions correctly in Java.",
    explanationChinese: "在表达式 x++ + ++x 中，后置自增 x++ 求值为5（然后x变为6），前置自增 ++x 先将x增加到7再求值。所以 y = 5 + 7 = 12。理解后置自增和前置自增运算符的区别对于正确求值Java中的复杂表达式至关重要。",
    diagram: "",
    terms: ["post_increment", "pre_increment", "operator_precedence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 2,
    q: "Which of the following correctly describes the difference between a while loop and a do-while loop in Java?",
    qChinese: "以下哪项正确描述了Java中while循环和do-while循环的区别？",
    options: [
      "A) A while loop always executes at least once; a do-while loop may not execute at all",
      "B) A do-while loop always executes at least once; a while loop may not execute at all",
      "C) Both loops always execute at least once",
      "D) A do-while loop cannot use a boolean condition"
    ],
    optionsChinese: [
      "A) while循环至少执行一次；do-while循环可能一次都不执行",
      "B) do-while循环至少执行一次；while循环可能一次都不执行",
      "C) 两种循环都至少执行一次",
      "D) do-while循环不能使用布尔条件"
    ],
    answer: 1,
    explanation: "A do-while loop checks its condition after executing the loop body, guaranteeing at least one execution. A while loop checks the condition before the body executes, so if the condition is initially false, the body never runs. This distinction matters when you need guaranteed initial execution, such as prompting user input at least once.",
    explanationChinese: "do-while循环在执行循环体之后检查条件，保证至少执行一次。while循环在执行循环体之前检查条件，如果条件初始为false，循环体不会运行。当你需要保证初始执行时（如至少提示一次用户输入），这个区别很重要。",
    diagram: "",
    terms: ["while_loop", "do_while_loop", "control_flow"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 3,
    q: "Consider the following Java method:\npublic static int mystery(int n) {\n  if (n <= 1) return n;\n  return mystery(n - 1) + mystery(n - 2);\n}\nWhat does mystery(6) return?",
    qChinese: "考虑以下Java方法：\npublic static int mystery(int n) {\n  if (n <= 1) return n;\n  return mystery(n - 1) + mystery(n - 2);\n}\nmystery(6)返回什么？",
    options: [
      "A) 5",
      "B) 8",
      "C) 13",
      "D) 21"
    ],
    optionsChinese: [
      "A) 5",
      "B) 8",
      "C) 13",
      "D) 21"
    ],
    answer: 1,
    explanation: "This method computes the Fibonacci sequence recursively. mystery(0)=0, mystery(1)=1, mystery(2)=1, mystery(3)=2, mystery(4)=3, mystery(5)=5, mystery(6)=8. The base cases return 0 and 1, and each subsequent call sums the two preceding values. This classic recursion example illustrates how overlapping subproblems arise naturally.",
    explanationChinese: "该方法递归地计算斐波那契数列。mystery(0)=0, mystery(1)=1, mystery(2)=1, mystery(3)=2, mystery(4)=3, mystery(5)=5, mystery(6)=8。基本情况返回0和1，每次后续调用对前两个值求和。这个经典递归示例说明了重叠子问题是如何自然产生的。",
    diagram: "",
    terms: ["recursion", "fibonacci", "base_case"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 4,
    q: "In Java, what is the primary purpose of the 'super' keyword when used inside a subclass constructor?",
    qChinese: "在Java中，在子类构造函数中使用'super'关键字的主要目的是什么？",
    options: [
      "A) To call a static method from the parent class",
      "B) To invoke the parent class constructor to initialize inherited fields",
      "C) To create a new instance of the parent class",
      "D) To override a method in the parent class"
    ],
    optionsChinese: [
      "A) 调用父类的静态方法",
      "B) 调用父类构造函数以初始化继承的字段",
      "C) 创建父类的新实例",
      "D) 重写父类中的方法"
    ],
    answer: 1,
    explanation: "The super keyword in a subclass constructor calls the parent class constructor, ensuring inherited fields are properly initialized before the subclass adds its own initialization. It must be the first statement in the constructor. Without it, Java implicitly calls the no-argument parent constructor, which fails if none exists.",
    explanationChinese: "子类构造函数中的super关键字调用父类构造函数，确保在子类添加自己的初始化之前正确初始化继承的字段。它必须是构造函数中的第一条语句。如果不使用它，Java会隐式调用父类的无参构造函数，如果不存在则会失败。",
    diagram: "",
    terms: ["inheritance", "constructor", "super_keyword"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 5,
    q: "Which of the following best describes polymorphism in object-oriented programming?",
    qChinese: "以下哪项最好地描述了面向对象编程中的多态性？",
    options: [
      "A) The ability of a class to inherit from multiple parent classes simultaneously",
      "B) The ability of objects of different classes to respond to the same method call in class-specific ways",
      "C) The practice of hiding internal data by making all fields private",
      "D) The technique of breaking a program into independent functions"
    ],
    optionsChinese: [
      "A) 一个类同时从多个父类继承的能力",
      "B) 不同类的对象以特定于类的方式响应相同方法调用的能力",
      "C) 通过将所有字段设为私有来隐藏内部数据的做法",
      "D) 将程序分解为独立函数的技术"
    ],
    answer: 1,
    explanation: "Polymorphism allows objects of different types to be treated through a common interface. When a method is called on a reference variable, the actual method executed depends on the runtime type of the object, not the declared type. This enables flexible and extensible code, as new subclasses can be added without modifying existing logic.",
    explanationChinese: "多态性允许不同类型的对象通过公共接口被处理。当在引用变量上调用方法时，实际执行的方法取决于对象的运行时类型，而不是声明的类型。这使代码灵活且可扩展，因为可以在不修改现有逻辑的情况下添加新的子类。",
    diagram: "",
    terms: ["polymorphism", "method_overriding", "dynamic_dispatch"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 6,
    q: "What is the output of the following code?\nint[] arr = {3, 7, 2, 8, 1};\nint result = arr[0];\nfor (int i = 1; i < arr.length; i++) {\n  if (arr[i] > result) result = arr[i];\n}\nSystem.out.println(result);",
    qChinese: "以下代码的输出是什么？\nint[] arr = {3, 7, 2, 8, 1};\nint result = arr[0];\nfor (int i = 1; i < arr.length; i++) {\n  if (arr[i] > result) result = arr[i];\n}\nSystem.out.println(result);",
    options: [
      "A) 1",
      "B) 3",
      "C) 7",
      "D) 8"
    ],
    optionsChinese: [
      "A) 1",
      "B) 3",
      "C) 7",
      "D) 8"
    ],
    answer: 3,
    explanation: "This code finds the maximum value in the array by initializing result with the first element and iterating through the remaining elements. Each time a larger value is found, result is updated. After processing all elements {3, 7, 2, 8, 1}, the largest value 8 is stored in result and printed.",
    explanationChinese: "此代码通过将result初始化为第一个元素并遍历其余元素来查找数组中的最大值。每次找到更大的值时，result被更新。处理完所有元素{3, 7, 2, 8, 1}后，最大值8被存储在result中并打印。",
    diagram: "",
    terms: ["array_traversal", "linear_search", "maximum_element"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 7,
    q: "Given a singly linked list with nodes [A -> B -> C -> D -> null], what is the result of removing the node at index 2 (0-indexed)?",
    qChinese: "给定一个单链表，节点为[A -> B -> C -> D -> null]，删除索引为2（从0开始）的节点后结果是什么？",
    options: [
      "A) A -> C -> D -> null",
      "B) A -> B -> D -> null",
      "C) A -> B -> C -> null",
      "D) B -> C -> D -> null"
    ],
    optionsChinese: [
      "A) A -> C -> D -> null",
      "B) A -> B -> D -> null",
      "C) A -> B -> C -> null",
      "D) B -> C -> D -> null"
    ],
    answer: 1,
    explanation: "Index 2 in a 0-indexed list [A, B, C, D] refers to node C. To remove C, we traverse to node B (at index 1), then set B's next pointer to D, bypassing C entirely. The resulting list is A -> B -> D -> null. This operation requires O(n) time because we must traverse to the predecessor node.",
    explanationChinese: "在从0开始索引的列表[A, B, C, D]中，索引2指的是节点C。要删除C，我们遍历到节点B（索引1），然后将B的next指针设置为D，完全跳过C。结果列表为A -> B -> D -> null。此操作需要O(n)时间，因为我们必须遍历到前驱节点。",
    diagram: "",
    terms: ["linked_list", "node_removal", "pointer_manipulation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 8,
    q: "A stack is used to evaluate the postfix expression: 4 5 + 3 *. What is the final result?",
    qChinese: "使用栈来计算后缀表达式：4 5 + 3 *。最终结果是什么？",
    options: [
      "A) 12",
      "B) 17",
      "C) 27",
      "D) 35"
    ],
    optionsChinese: [
      "A) 12",
      "B) 17",
      "C) 27",
      "D) 35"
    ],
    answer: 2,
    explanation: "Postfix evaluation uses a stack: push 4, push 5, encounter '+' so pop 5 and 4, compute 4+5=9, push 9. Push 3. Encounter '*' so pop 3 and 9, compute 9*3=27, push 27. The final value on the stack is 27. Postfix notation eliminates the need for parentheses and operator precedence rules.",
    explanationChinese: "后缀表达式使用栈求值：压入4，压入5，遇到'+'则弹出5和4，计算4+5=9，压入9。压入3。遇到'*'则弹出3和9，计算9*3=27，压入27。栈上的最终值为27。后缀表示法消除了对括号和运算符优先级规则的需要。",
    diagram: "",
    terms: ["stack", "postfix_expression", "stack_evaluation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 9,
    q: "Which data structure operates on a First-In-First-Out (FIFO) principle and is commonly used in breadth-first search?",
    qChinese: "哪种数据结构按先进先出（FIFO）原则操作，并常用于广度优先搜索？",
    options: [
      "A) Stack",
      "B) Queue",
      "C) Priority Queue",
      "D) Binary Search Tree"
    ],
    optionsChinese: [
      "A) 栈",
      "B) 队列",
      "C) 优先队列",
      "D) 二叉搜索树"
    ],
    answer: 1,
    explanation: "A queue follows FIFO ordering, meaning elements are removed in the same order they were added. In breadth-first search (BFS), a queue ensures that nodes are visited level by level. A stack uses LIFO and is used for DFS. A priority queue orders by priority, not insertion order.",
    explanationChinese: "队列遵循FIFO顺序，即元素按添加的顺序被移除。在广度优先搜索（BFS）中，队列确保节点按层级逐层访问。栈使用LIFO，用于DFS。优先队列按优先级排序，而非插入顺序。",
    diagram: "",
    terms: ["queue", "fifo", "breadth_first_search"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 10,
    q: "What is the worst-case time complexity of searching for an element in a balanced binary search tree with n nodes?",
    qChinese: "在有n个节点的平衡二叉搜索树中搜索一个元素的最坏情况时间复杂度是什么？",
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
    explanation: "A balanced BST maintains a height of O(log n), so each comparison eliminates roughly half the remaining nodes. The search follows a path from root to leaf, making at most O(log n) comparisons. An unbalanced BST could degrade to O(n) if it becomes a linear chain, which is why self-balancing trees like AVL or Red-Black trees are preferred.",
    explanationChinese: "平衡BST保持O(log n)的高度，因此每次比较大约淘汰一半的剩余节点。搜索沿着从根到叶的路径进行，最多进行O(log n)次比较。不平衡的BST如果变成线性链则可能退化为O(n)，这就是为什么首选AVL树或红黑树等自平衡树。",
    diagram: "",
    terms: ["binary_search_tree", "time_complexity", "balanced_tree"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 11,
    q: "In Java, what happens when you attempt to access an array element at an index that is out of bounds?",
    qChinese: "在Java中，当你尝试访问超出范围的数组索引时会发生什么？",
    options: [
      "A) The program returns null",
      "B) The program returns 0",
      "C) An ArrayIndexOutOfBoundsException is thrown at runtime",
      "D) A compile-time error is generated"
    ],
    optionsChinese: [
      "A) 程序返回null",
      "B) 程序返回0",
      "C) 运行时抛出ArrayIndexOutOfBoundsException异常",
      "D) 产生编译时错误"
    ],
    answer: 2,
    explanation: "Java performs bounds checking on array accesses at runtime. If the index is negative or greater than or equal to the array length, an ArrayIndexOutOfBoundsException is thrown. Unlike C/C++, Java does not allow silent out-of-bounds memory access, which prevents buffer overflow vulnerabilities but requires careful index management.",
    explanationChinese: "Java在运行时对数组访问执行边界检查。如果索引为负数或大于等于数组长度，将抛出ArrayIndexOutOfBoundsException。与C/C++不同，Java不允许静默的越界内存访问，这可以防止缓冲区溢出漏洞，但需要仔细管理索引。",
    diagram: "",
    terms: ["array", "exception_handling", "bounds_checking"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 12,
    q: "What is the time complexity of inserting an element at the beginning of a singly linked list?",
    qChinese: "在单链表的开头插入一个元素的时间复杂度是什么？",
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
    explanation: "Inserting at the head of a singly linked list is O(1) because you only need to create a new node, set its next pointer to the current head, and update the head reference. No traversal is needed regardless of list size. This constant-time insertion is a key advantage of linked lists over arrays for front-insertion operations.",
    explanationChinese: "在单链表头部插入是O(1)，因为你只需创建一个新节点，将其next指针设置为当前头节点，并更新头引用。无论列表大小如何，都不需要遍历。这种常数时间插入是链表在头部插入操作上相对于数组的关键优势。",
    diagram: "",
    terms: ["linked_list", "insertion", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 13,
    q: "Which of the following is true about abstract classes in Java?",
    qChinese: "关于Java中的抽象类，以下哪项是正确的？",
    options: [
      "A) Abstract classes can be instantiated directly using the new keyword",
      "B) Abstract classes can contain both abstract methods and concrete methods with implementations",
      "C) Abstract classes cannot have constructors",
      "D) A class can extend multiple abstract classes simultaneously"
    ],
    optionsChinese: [
      "A) 抽象类可以直接使用new关键字实例化",
      "B) 抽象类可以同时包含抽象方法和有实现的具体方法",
      "C) 抽象类不能有构造函数",
      "D) 一个类可以同时继承多个抽象类"
    ],
    answer: 1,
    explanation: "Abstract classes in Java can contain a mix of abstract methods (without bodies) and concrete methods (with implementations). They cannot be instantiated directly but can have constructors called via super() from subclasses. Java only supports single inheritance for classes, so a class cannot extend multiple abstract classes. This design promotes code reuse while enforcing contracts.",
    explanationChinese: "Java中的抽象类可以同时包含抽象方法（无方法体）和具体方法（有实现）。它们不能直接实例化，但可以有通过子类的super()调用的构造函数。Java类只支持单继承，所以一个类不能继承多个抽象类。这种设计在强制执行契约的同时促进了代码复用。",
    diagram: "",
    terms: ["abstract_class", "abstract_method", "inheritance"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 14,
    q: "What is the output of the following recursive method call: countDown(3)?\npublic static void countDown(int n) {\n  if (n == 0) { System.out.print(\"Go!\"); return; }\n  System.out.print(n + \" \");\n  countDown(n - 1);\n}",
    qChinese: "以下递归方法调用countDown(3)的输出是什么？\npublic static void countDown(int n) {\n  if (n == 0) { System.out.print(\"Go!\"); return; }\n  System.out.print(n + \" \");\n  countDown(n - 1);\n}",
    options: [
      "A) 3 2 1",
      "B) 3 2 1 Go!",
      "C) Go! 1 2 3",
      "D) 1 2 3 Go!"
    ],
    optionsChinese: [
      "A) 3 2 1",
      "B) 3 2 1 Go!",
      "C) Go! 1 2 3",
      "D) 1 2 3 Go!"
    ],
    answer: 1,
    explanation: "The method prints n before making the recursive call, so output occurs in descending order. countDown(3) prints \"3 \", calls countDown(2) which prints \"2 \", calls countDown(1) which prints \"1 \", calls countDown(0) which prints \"Go!\" and returns. The print-before-recurse pattern produces top-down output.",
    explanationChinese: "该方法在进行递归调用之前打印n，所以输出按降序排列。countDown(3)打印\"3 \"，调用countDown(2)打印\"2 \"，调用countDown(1)打印\"1 \"，调用countDown(0)打印\"Go!\"并返回。先打印后递归的模式产生自顶向下的输出。",
    diagram: "",
    terms: ["recursion", "base_case", "call_stack"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 15,
    q: "Which sorting algorithm has a worst-case time complexity of O(n log n) and uses a divide-and-conquer approach by repeatedly splitting the array in half?",
    qChinese: "哪种排序算法的最坏情况时间复杂度为O(n log n)，并通过反复将数组一分为二来使用分治策略？",
    options: [
      "A) Bubble Sort",
      "B) Insertion Sort",
      "C) Merge Sort",
      "D) Quick Sort"
    ],
    optionsChinese: [
      "A) 冒泡排序",
      "B) 插入排序",
      "C) 归并排序",
      "D) 快速排序"
    ],
    answer: 2,
    explanation: "Merge Sort divides the array into two halves recursively until single-element subarrays are reached, then merges them back in sorted order. Its worst-case complexity is always O(n log n). Quick Sort averages O(n log n) but degrades to O(n^2) in the worst case. Bubble Sort and Insertion Sort are both O(n^2) in the worst case.",
    explanationChinese: "归并排序递归地将数组分成两半，直到达到单元素子数组，然后按排序顺序合并回来。其最坏情况复杂度始终为O(n log n)。快速排序平均为O(n log n)，但最坏情况退化为O(n^2)。冒泡排序和插入排序的最坏情况都是O(n^2)。",
    diagram: "",
    terms: ["merge_sort", "divide_and_conquer", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 16,
    q: "Consider the following Java interface and class:\ninterface Drawable { void draw(); }\nclass Circle implements Drawable {\n  public void draw() { System.out.println(\"Circle\"); }\n}\nWhich statement correctly creates an object and calls draw()?",
    qChinese: "考虑以下Java接口和类：\ninterface Drawable { void draw(); }\nclass Circle implements Drawable {\n  public void draw() { System.out.println(\"Circle\"); }\n}\n哪条语句正确创建对象并调用draw()？",
    options: [
      "A) Drawable d = new Drawable(); d.draw();",
      "B) Drawable d = new Circle(); d.draw();",
      "C) Circle c = new Drawable(); c.draw();",
      "D) Drawable d = Circle.draw();"
    ],
    optionsChinese: [
      "A) Drawable d = new Drawable(); d.draw();",
      "B) Drawable d = new Circle(); d.draw();",
      "C) Circle c = new Drawable(); c.draw();",
      "D) Drawable d = Circle.draw();"
    ],
    answer: 1,
    explanation: "Interfaces cannot be instantiated directly, so options A and C are invalid. Option D treats draw() as a static factory method, which it is not. Option B correctly uses the interface type as the reference variable while instantiating the concrete class Circle. This is programming to the interface, a key OOP principle enabling polymorphism.",
    explanationChinese: "接口不能直接实例化，所以选项A和C无效。选项D将draw()当作静态工厂方法，但它不是。选项B正确地使用接口类型作为引用变量，同时实例化具体类Circle。这就是面向接口编程，是实现多态性的关键OOP原则。",
    diagram: "",
    terms: ["interface", "polymorphism", "programming_to_interface"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 17,
    q: "What is the amortized time complexity of adding an element to the end of a Java ArrayList when the internal array is full?",
    qChinese: "当内部数组已满时，向Java ArrayList末尾添加元素的摊还时间复杂度是什么？",
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
    explanation: "Although a single resize operation copies all n elements (O(n) for that one insert), resizing occurs infrequently because the capacity typically doubles. Over a sequence of n insertions, the total cost of all resizing operations is proportional to n, making each insertion O(1) amortized. This amortized analysis is a fundamental concept in data structure design.",
    explanationChinese: "虽然单次调整大小操作复制所有n个元素（那一次插入为O(n)），但由于容量通常翻倍，调整大小很少发生。在n次插入序列中，所有调整大小操作的总成本与n成正比，使每次插入的摊还复杂度为O(1)。这种摊还分析是数据结构设计中的基本概念。",
    diagram: "",
    terms: ["arraylist", "amortized_analysis", "dynamic_array"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 18,
    q: "In a hash table using separate chaining, what happens when two different keys hash to the same index?",
    qChinese: "在使用分离链接法的哈希表中，当两个不同的键散列到相同索引时会发生什么？",
    options: [
      "A) The second key overwrites the first key's value",
      "B) Both key-value pairs are stored in a linked list at that index",
      "C) The hash table throws an exception",
      "D) The second key is discarded"
    ],
    optionsChinese: [
      "A) 第二个键覆盖第一个键的值",
      "B) 两个键值对都存储在该索引处的链表中",
      "C) 哈希表抛出异常",
      "D) 第二个键被丢弃"
    ],
    answer: 1,
    explanation: "Separate chaining handles hash collisions by maintaining a linked list (or other collection) at each index. When multiple keys hash to the same bucket, all their key-value pairs are stored in the list at that position. Lookup requires traversing the chain to find the matching key. With a good hash function and load factor, chains remain short.",
    explanationChinese: "分离链接法通过在每个索引处维护一个链表（或其他集合）来处理哈希冲突。当多个键散列到同一个桶时，它们的所有键值对都存储在该位置的链表中。查找需要遍历链来找到匹配的键。使用良好的哈希函数和负载因子，链保持较短。",
    diagram: "",
    terms: ["hash_table", "separate_chaining", "hash_collision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 19,
    q: "What is the space complexity of a recursive function that computes factorial(n) using simple recursion (no tail-call optimization)?",
    qChinese: "使用简单递归（无尾调用优化）计算factorial(n)的递归函数的空间复杂度是什么？",
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
    answer: 2,
    explanation: "Each recursive call to factorial(n) creates a new stack frame that remains in memory until the call returns. For factorial(n), there are n recursive calls before reaching the base case, so n stack frames exist simultaneously. This gives O(n) space complexity. This illustrates why deep recursion can cause stack overflow for large inputs.",
    explanationChinese: "每次对factorial(n)的递归调用都会创建一个新的栈帧，该栈帧在调用返回之前一直留在内存中。对于factorial(n)，在到达基本情况之前有n次递归调用，所以同时存在n个栈帧。这给出O(n)的空间复杂度。这说明了为什么深度递归会导致大输入的栈溢出。",
    diagram: "",
    terms: ["recursion", "space_complexity", "call_stack"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 20,
    q: "Given a binary search tree, which traversal method visits nodes in ascending sorted order?",
    qChinese: "给定一棵二叉搜索树，哪种遍历方法按升序访问节点？",
    options: [
      "A) Pre-order traversal (root, left, right)",
      "B) In-order traversal (left, root, right)",
      "C) Post-order traversal (left, right, root)",
      "D) Level-order traversal (breadth-first)"
    ],
    optionsChinese: [
      "A) 前序遍历（根、左、右）",
      "B) 中序遍历（左、根、右）",
      "C) 后序遍历（左、右、根）",
      "D) 层序遍历（广度优先）"
    ],
    answer: 1,
    explanation: "In a BST, all left subtree values are less than the root and all right subtree values are greater. In-order traversal recursively visits the left subtree, then the root, then the right subtree. This naturally produces values in ascending order. This property makes BSTs useful for implementing sorted sets and maps.",
    explanationChinese: "在BST中，所有左子树的值小于根，所有右子树的值大于根。中序遍历递归地先访问左子树，然后访问根，再访问右子树。这自然地产生升序排列的值。这一性质使BST在实现有序集合和映射中非常有用。",
    diagram: "",
    terms: ["binary_search_tree", "inorder_traversal", "tree_traversal"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  }
];
