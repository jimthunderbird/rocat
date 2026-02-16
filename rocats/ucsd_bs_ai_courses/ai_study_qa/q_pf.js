const questionsPF = [
  {
    id: 1,
    q: "What is the default value of an uninitialized int instance variable in Java?",
    qChinese: "Java中未初始化的int实例变量的默认值是什么？",
    options: [
      "A) null",
      "B) Compilation error",
      "C) -1",
      "D) 0"
    ],
    optionsChinese: [
      "A) null",
      "B) 编译错误",
      "C) -1",
      "D) 0"
    ],
    answer: 3,
    explanation: "In Java, instance variables of primitive numeric types like int are automatically initialized to 0. This differs from local variables, which must be explicitly initialized before use. Understanding default initialization helps prevent bugs when relying on field values before assignment.",
    explanationChinese: "在Java中，int等原始数字类型的实例变量会自动初始化为0。这与局部变量不同，局部变量必须在使用前显式初始化。理解默认初始化有助于防止在赋值前依赖字段值时出现错误。",
    diagram: "",
    terms: ["variable", "data_type", "initialization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 2,
    q: "Which of the following is a valid Java variable declaration?",
    qChinese: "以下哪个是有效的Java变量声明？",
    options: [
      "A) int 2ndValue = 10;",
      "B) boolean class = true;",
      "C) float price$ = 9.99f;",
      "D) double my-salary = 5000.0;"
    ],
    optionsChinese: [
      "A) int 2ndValue = 10;",
      "B) boolean class = true;",
      "C) float price$ = 9.99f;",
      "D) double my-salary = 5000.0;"
    ],
    answer: 2,
    explanation: "Java variable names can contain letters, digits, underscores, and dollar signs but cannot start with a digit or use reserved words. 'price$' is valid because $ is allowed. '2ndValue' starts with a digit, 'class' is a reserved keyword, and 'my-salary' contains a hyphen, which is not permitted.",
    explanationChinese: "Java变量名可以包含字母、数字、下划线和美元符号，但不能以数字开头或使用保留字。'price$'是有效的，因为$是允许的。'2ndValue'以数字开头，'class'是保留关键字，'my-salary'包含连字符，这是不允许的。",
    diagram: "",
    terms: ["variable", "identifier", "reserved_word"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 3,
    q: "What is the result of the expression 17 % 5 in Java?",
    qChinese: "Java中表达式17 % 5的结果是什么？",
    options: [
      "A) 3",
      "B) 2",
      "C) 3.4",
      "D) 5"
    ],
    optionsChinese: [
      "A) 3",
      "B) 2",
      "C) 3.4",
      "D) 5"
    ],
    answer: 1,
    explanation: "The modulo operator % returns the remainder after integer division. 17 divided by 5 equals 3 with a remainder of 2, so 17 % 5 evaluates to 2. This operator is commonly used for checking divisibility, cycling through indices, and implementing circular data structures.",
    explanationChinese: "取模运算符%返回整数除法后的余数。17除以5等于3余2，所以17 % 5求值为2。该运算符常用于检查整除性、循环索引以及实现循环数据结构。",
    diagram: "",
    terms: ["operator", "modulo", "integer_division"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 4,
    q: "What happens when you cast a double value 9.99 to an int in Java?\nint x = (int) 9.99;",
    qChinese: "在Java中将double值9.99转换为int时会发生什么？\nint x = (int) 9.99;",
    options: [
      "A) x is 9 (truncates)",
      "B) x is 10 (rounds up)",
      "C) x is 9.99",
      "D) Compilation error"
    ],
    optionsChinese: [
      "A) x为9（截断）",
      "B) x为10（向上取整）",
      "C) x为9.99",
      "D) 编译错误"
    ],
    answer: 0,
    explanation: "Casting a double to an int in Java performs truncation, not rounding. The decimal portion is simply discarded, so 9.99 becomes 9. This is a narrowing conversion that may lose precision. Use Math.round() if you need proper rounding behavior instead of truncation.",
    explanationChinese: "在Java中将double转换为int执行的是截断而非四舍五入。小数部分直接丢弃，所以9.99变成9。这是一种可能丢失精度的窄化转换。如果需要正确的四舍五入行为而非截断，请使用Math.round()。",
    diagram: "",
    terms: ["data_type", "type_casting", "narrowing_conversion"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 5,
    q: "Which primitive data type in Java can store the largest range of integer values?",
    qChinese: "Java中哪种原始数据类型可以存储最大范围的整数值？",
    options: [
      "A) int",
      "B) short",
      "C) long",
      "D) byte"
    ],
    optionsChinese: [
      "A) int",
      "B) short",
      "C) long",
      "D) byte"
    ],
    answer: 2,
    explanation: "The long type in Java uses 64 bits and can store values from -2^63 to 2^63-1, which is the largest range among integer primitives. In comparison, int uses 32 bits, short uses 16 bits, and byte uses 8 bits. Choose the appropriate type based on your data range requirements.",
    explanationChinese: "Java中的long类型使用64位，可以存储从-2^63到2^63-1的值，是整数原始类型中范围最大的。相比之下，int使用32位，short使用16位，byte使用8位。根据数据范围需求选择合适的类型。",
    diagram: "",
    terms: ["data_type", "primitive_type", "memory_allocation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 6,
    q: "What is the output of the following code?\nboolean a = true;\nboolean b = false;\nSystem.out.println(a && b || !b);",
    qChinese: "以下代码的输出是什么？\nboolean a = true;\nboolean b = false;\nSystem.out.println(a && b || !b);",
    options: [
      "A) Compilation error",
      "B) false",
      "C) true",
      "D) Runtime error"
    ],
    optionsChinese: [
      "A) 编译错误",
      "B) false",
      "C) true",
      "D) 运行时错误"
    ],
    answer: 2,
    explanation: "Operator precedence: ! has highest priority, then &&, then ||. First, !b evaluates to true. Then a && b evaluates to false. Finally, false || true evaluates to true. Understanding boolean operator precedence is essential for writing correct conditional logic in Java programs.",
    explanationChinese: "运算符优先级：!优先级最高，然后是&&，然后是||。首先，!b求值为true。然后a && b求值为false。最后，false || true求值为true。理解布尔运算符优先级对于编写正确的条件逻辑至关重要。",
    diagram: "",
    terms: ["operator", "boolean", "operator_precedence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 7,
    q: "What does the following Java code print?\nString s1 = \"Hello\";\nString s2 = \"Hello\";\nSystem.out.println(s1 == s2);",
    qChinese: "以下Java代码打印什么？\nString s1 = \"Hello\";\nString s2 = \"Hello\";\nSystem.out.println(s1 == s2);",
    options: [
      "A) true",
      "B) false",
      "C) Compilation error",
      "D) Hello"
    ],
    optionsChinese: [
      "A) true",
      "B) false",
      "C) 编译错误",
      "D) Hello"
    ],
    answer: 0,
    explanation: "When string literals are used, Java interns them in the string pool. Both s1 and s2 reference the same object in the pool, so == returns true. However, using 'new String()' would create separate objects on the heap. Always use .equals() for reliable string content comparison.",
    explanationChinese: "使用字符串字面量时，Java将它们存入字符串池。s1和s2引用池中的同一个对象，所以==返回true。但使用'new String()'会在堆上创建单独的对象。始终使用.equals()进行可靠的字符串内容比较。",
    diagram: "",
    terms: ["string", "reference", "string_pool"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 8,
    q: "Which of the following statements about Java's switch statement is correct?",
    qChinese: "关于Java的switch语句，以下哪个说法是正确的？",
    options: [
      "A) switch can only work with int types",
      "B) switch supports String since Java 7",
      "C) switch does not need break statements",
      "D) switch cannot have a default case"
    ],
    optionsChinese: [
      "A) switch只能用于int类型",
      "B) switch从Java 7开始支持String",
      "C) switch不需要break语句",
      "D) switch不能有default分支"
    ],
    answer: 1,
    explanation: "Java 7 introduced String support in switch statements. Before that, switch worked with byte, short, char, int, and their wrapper classes plus enums. While break statements are optional, omitting them causes fall-through behavior. The default case handles any unmatched values.",
    explanationChinese: "Java 7引入了switch语句中的String支持。在此之前，switch适用于byte、short、char、int及其包装类和枚举。虽然break语句是可选的，但省略它们会导致穿透行为。default分支处理任何未匹配的值。",
    diagram: "",
    terms: ["control_flow", "switch_statement"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 9,
    q: "What is the output of the following code?\nfor (int i = 0; i < 5; i++) {\n  if (i == 3) continue;\n  System.out.print(i + \" \");\n}",
    qChinese: "以下代码的输出是什么？\nfor (int i = 0; i < 5; i++) {\n  if (i == 3) continue;\n  System.out.print(i + \" \");\n}",
    options: [
      "A) 0 1 2 3 4",
      "B) 0 1 2 4",
      "C) 0 1 2",
      "D) 1 2 4 5"
    ],
    optionsChinese: [
      "A) 0 1 2 3 4",
      "B) 0 1 2 4",
      "C) 0 1 2",
      "D) 1 2 4 5"
    ],
    answer: 1,
    explanation: "The continue statement skips the rest of the current iteration and proceeds to the next one. When i equals 3, continue is executed, so 3 is not printed. The loop prints 0, 1, 2, then skips 3, and prints 4. This is useful for filtering specific iterations within a loop.",
    explanationChinese: "continue语句跳过当前迭代的剩余部分，继续下一次迭代。当i等于3时，执行continue，所以3不被打印。循环打印0、1、2，然后跳过3，打印4。这在循环中过滤特定迭代时很有用。",
    diagram: "",
    terms: ["loop", "control_flow", "continue_statement"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 10,
    q: "What is the difference between == and .equals() when comparing two Integer objects in Java?",
    qChinese: "在Java中比较两个Integer对象时，==和.equals()有什么区别？",
    options: [
      "A) They always produce the same result",
      "B) Neither works for Integer objects",
      "C) == compares values, .equals() compares references",
      "D) == compares references, .equals() compares values"
    ],
    optionsChinese: [
      "A) 它们总是产生相同的结果",
      "B) 两者都不适用于Integer对象",
      "C) ==比较值，.equals()比较引用",
      "D) ==比较引用，.equals()比较值"
    ],
    answer: 3,
    explanation: "For objects in Java, == checks if two references point to the same memory location, while .equals() checks logical equality of values. Integer caches values from -128 to 127, so == may return true for small values but false for larger ones. Always use .equals() for value comparison of objects.",
    explanationChinese: "对于Java中的对象，==检查两个引用是否指向同一内存位置，而.equals()检查值的逻辑相等性。Integer缓存-128到127的值，所以==对小值可能返回true但对较大值返回false。对象值比较始终使用.equals()。",
    diagram: "",
    terms: ["reference", "object", "equality"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 11,
    q: "What is the output of the following Java code?\nint x = 10;\nint y = 3;\nSystem.out.println(x / y);",
    qChinese: "以下Java代码的输出是什么？\nint x = 10;\nint y = 3;\nSystem.out.println(x / y);",
    options: [
      "A) 3",
      "B) 3.0",
      "C) 3.33",
      "D) 4"
    ],
    optionsChinese: [
      "A) 3",
      "B) 3.0",
      "C) 3.33",
      "D) 4"
    ],
    answer: 0,
    explanation: "When both operands of the division operator are integers, Java performs integer division, which truncates the decimal portion. 10 / 3 equals 3 with the .33 discarded. To get a floating-point result, at least one operand must be a double or float, e.g., 10.0 / 3.",
    explanationChinese: "当除法运算符的两个操作数都是整数时，Java执行整数除法，截断小数部分。10 / 3等于3，.33被丢弃。要获得浮点结果，至少一个操作数必须是double或float，例如10.0 / 3。",
    diagram: "",
    terms: ["operator", "integer_division", "data_type"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 12,
    q: "Which keyword is used to define a constant in Java?",
    qChinese: "Java中使用哪个关键字定义常量？",
    options: [
      "A) const",
      "B) static",
      "C) final",
      "D) constant"
    ],
    optionsChinese: [
      "A) const",
      "B) static",
      "C) final",
      "D) constant"
    ],
    answer: 2,
    explanation: "The 'final' keyword in Java makes a variable's value unchangeable after initialization, effectively creating a constant. While 'const' is a reserved word in Java, it is not used. Constants are typically declared as 'static final' with uppercase naming convention like MAX_SIZE.",
    explanationChinese: "Java中的'final'关键字使变量的值在初始化后不可更改，有效地创建了常量。虽然'const'是Java中的保留字，但并未使用。常量通常声明为'static final'，并使用大写命名约定，如MAX_SIZE。",
    diagram: "",
    terms: ["variable", "constant", "final_keyword"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 13,
    q: "What will this code print?\nint[] arr = {1, 2, 3};\nSystem.out.println(arr.length);",
    qChinese: "这段代码会打印什么？\nint[] arr = {1, 2, 3};\nSystem.out.println(arr.length);",
    options: [
      "A) 2",
      "B) 4",
      "C) 3",
      "D) Compilation error"
    ],
    optionsChinese: [
      "A) 2",
      "B) 4",
      "C) 3",
      "D) 编译错误"
    ],
    answer: 2,
    explanation: "In Java, the length property of an array returns the number of elements it contains. The array {1, 2, 3} has 3 elements, so arr.length returns 3. Note that length is a field for arrays (no parentheses), unlike .length() method for Strings and .size() method for collections.",
    explanationChinese: "在Java中，数组的length属性返回它包含的元素数量。数组{1, 2, 3}有3个元素，所以arr.length返回3。注意length是数组的字段（没有括号），不同于String的.length()方法和集合的.size()方法。",
    diagram: "",
    terms: ["array", "variable"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 14,
    q: "What is the scope of a variable declared inside a for loop in Java?",
    qChinese: "在Java中，在for循环内声明的变量的作用域是什么？",
    options: [
      "A) Only within the for loop block",
      "B) The entire class",
      "C) The entire method",
      "D) The entire file"
    ],
    optionsChinese: [
      "A) 仅在for循环块内",
      "B) 整个类",
      "C) 整个方法",
      "D) 整个文件"
    ],
    answer: 0,
    explanation: "Variables declared inside a for loop header or body are local to that loop block. They are created when the loop starts and destroyed when the loop ends. Attempting to access such a variable outside the loop results in a compilation error. This is called block scope.",
    explanationChinese: "在for循环头部或循环体内声明的变量局限于该循环块。它们在循环开始时创建，在循环结束时销毁。试图在循环外访问此类变量会导致编译错误。这称为块作用域。",
    diagram: "",
    terms: ["variable", "scope", "loop"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 15,
    q: "What does the ternary operator ? : do in Java?\nint result = (a > b) ? a : b;",
    qChinese: "Java中的三元运算符? :的作用是什么？\nint result = (a > b) ? a : b;",
    options: [
      "A) Always assigns a to result",
      "B) Assigns the larger of a and b to result",
      "C) Throws an exception if a equals b",
      "D) Assigns the sum of a and b to result"
    ],
    optionsChinese: [
      "A) 总是将a赋给result",
      "B) 将a和b中较大的赋给result",
      "C) 如果a等于b则抛出异常",
      "D) 将a和b的和赋给result"
    ],
    answer: 1,
    explanation: "The ternary operator evaluates a condition before the ?. If true, it returns the value after ?; if false, it returns the value after :. Here, if a > b is true, result gets a; otherwise result gets b. It is a compact alternative to an if-else statement for simple conditional assignments.",
    explanationChinese: "三元运算符计算?前的条件。如果为true，返回?后的值；如果为false，返回:后的值。这里，如果a > b为true，result得到a；否则result得到b。它是简单条件赋值的if-else语句的紧凑替代。",
    diagram: "",
    terms: ["operator", "control_flow", "conditional"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 16,
    q: "What is autoboxing in Java?",
    qChinese: "Java中的自动装箱是什么？",
    options: [
      "A) Automatic conversion between primitive types and their wrapper classes",
      "B) Converting a String to an int",
      "C) Automatically creating arrays from lists",
      "D) Converting objects to byte streams"
    ],
    optionsChinese: [
      "A) 原始类型和其包装类之间的自动转换",
      "B) 将String转换为int",
      "C) 自动从列表创建数组",
      "D) 将对象转换为字节流"
    ],
    answer: 0,
    explanation: "Autoboxing is Java's automatic conversion of primitive types to their corresponding wrapper classes (e.g., int to Integer) and vice versa (unboxing). This feature, introduced in Java 5, allows primitives to be used where objects are required, such as in collections like ArrayList.",
    explanationChinese: "自动装箱是Java将原始类型自动转换为对应包装类（如int到Integer）的功能，反之亦然（拆箱）。此功能在Java 5中引入，允许在需要对象的地方使用原始类型，如ArrayList等集合中。",
    diagram: "",
    terms: ["data_type", "autoboxing", "wrapper_class"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 17,
    q: "What is the output of the following code?\nString str = \"Java Programming\";\nSystem.out.println(str.substring(5, 9));",
    qChinese: "以下代码的输出是什么？\nString str = \"Java Programming\";\nSystem.out.println(str.substring(5, 9));",
    options: [
      "A) \"Progr\"",
      "B) \"Prog\"",
      "C) \" Pro\"",
      "D) \"rogr\""
    ],
    optionsChinese: [
      "A) \"Progr\"",
      "B) \"Prog\"",
      "C) \" Pro\"",
      "D) \"rogr\""
    ],
    answer: 1,
    explanation: "The substring(beginIndex, endIndex) method returns characters from beginIndex (inclusive) to endIndex (exclusive). In \"Java Programming\", index 5 is 'P', index 6 is 'r', index 7 is 'o', index 8 is 'g'. So substring(5,9) returns \"Prog\". Remember that indexing is zero-based in Java strings.",
    explanationChinese: "substring(beginIndex, endIndex)方法返回从beginIndex（包含）到endIndex（不包含）的字符。在\"Java Programming\"中，索引5是'P'，索引6是'r'，索引7是'o'，索引8是'g'。所以substring(5,9)返回\"Prog\"。记住Java字符串的索引从零开始。",
    diagram: "",
    terms: ["string", "method", "indexing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 18,
    q: "What exception is thrown when accessing an array with an invalid index in Java?",
    qChinese: "在Java中使用无效索引访问数组时抛出什么异常？",
    options: [
      "A) ArrayIndexOutOfBoundsException",
      "B) NullPointerException",
      "C) IndexOutOfRangeException",
      "D) InvalidArrayAccessException"
    ],
    optionsChinese: [
      "A) ArrayIndexOutOfBoundsException",
      "B) NullPointerException",
      "C) IndexOutOfRangeException",
      "D) InvalidArrayAccessException"
    ],
    answer: 0,
    explanation: "Java throws ArrayIndexOutOfBoundsException when you try to access an array element with an index that is negative or greater than or equal to the array's length. This is a runtime exception that indicates a programming error. Always validate indices before accessing array elements.",
    explanationChinese: "当你尝试使用负索引或大于等于数组长度的索引访问数组元素时，Java抛出ArrayIndexOutOfBoundsException。这是一个表示编程错误的运行时异常。始终在访问数组元素之前验证索引。",
    diagram: "",
    terms: ["array", "exception", "runtime_error"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 19,
    q: "What is the output of the following code?\nint x = 5;\nSystem.out.println(x++ + \" \" + ++x);",
    qChinese: "以下代码的输出是什么？\nint x = 5;\nSystem.out.println(x++ + \" \" + ++x);",
    options: [
      "A) 6 7",
      "B) 5 7",
      "C) 5 6",
      "D) 6 6"
    ],
    optionsChinese: [
      "A) 6 7",
      "B) 5 7",
      "C) 5 6",
      "D) 6 6"
    ],
    answer: 1,
    explanation: "x++ is post-increment: it uses the current value (5) then increments x to 6. Then ++x is pre-increment: it increments x from 6 to 7, then uses 7. So the output is \"5 7\". The key distinction is whether the increment happens before or after the value is used in the expression.",
    explanationChinese: "x++是后置自增：使用当前值（5），然后将x增加到6。然后++x是前置自增：将x从6增加到7，然后使用7。所以输出是\"5 7\"。关键区别在于增量是在表达式中使用值之前还是之后发生。",
    diagram: "",
    terms: ["operator", "post_increment", "pre_increment"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 20,
    q: "Which of the following is NOT a valid way to create a Scanner to read user input in Java?",
    qChinese: "以下哪个不是在Java中创建Scanner来读取用户输入的有效方法？",
    options: [
      "A) Scanner sc = new Scanner(System.in);",
      "B) Scanner sc = new Scanner(new File(\"input.txt\"));",
      "C) Scanner sc = Scanner.create(System.in);",
      "D) Scanner sc = new Scanner(\"Hello World\");"
    ],
    optionsChinese: [
      "A) Scanner sc = new Scanner(System.in);",
      "B) Scanner sc = new Scanner(new File(\"input.txt\"));",
      "C) Scanner sc = Scanner.create(System.in);",
      "D) Scanner sc = new Scanner(\"Hello World\");"
    ],
    answer: 2,
    explanation: "Scanner does not have a static create() factory method. Valid constructors accept System.in for keyboard input, a File object for file input, or a String for parsing string data. The Scanner class is part of java.util package and must be imported before use.",
    explanationChinese: "Scanner没有静态的create()工厂方法。有效的构造函数接受System.in用于键盘输入，File对象用于文件输入，或String用于解析字符串数据。Scanner类属于java.util包，使用前必须导入。",
    diagram: "",
    terms: ["class", "object", "constructor"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 21,
    q: "What is the difference between a while loop and a do-while loop in Java?",
    qChinese: "Java中while循环和do-while循环有什么区别？",
    options: [
      "A) while loops are faster",
      "B) do-while loops cannot be nested",
      "C) while loops cannot use boolean conditions",
      "D) do-while always executes at least once"
    ],
    optionsChinese: [
      "A) while循环更快",
      "B) do-while循环不能嵌套",
      "C) while循环不能使用布尔条件",
      "D) do-while至少执行一次"
    ],
    answer: 3,
    explanation: "A do-while loop checks its condition after executing the loop body, guaranteeing at least one execution. A while loop checks the condition first, so if it is initially false, the body never executes. Choose do-while when you need at least one iteration, such as input validation prompts.",
    explanationChinese: "do-while循环在执行循环体之后检查条件，保证至少执行一次。while循环先检查条件，如果初始为false，循环体不会执行。当需要至少一次迭代时选择do-while，例如输入验证提示。",
    diagram: "",
    terms: ["loop", "control_flow", "do_while_loop"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 22,
    q: "What is the output of the following code?\nchar c = 'A';\nSystem.out.println(c + 1);",
    qChinese: "以下代码的输出是什么？\nchar c = 'A';\nSystem.out.println(c + 1);",
    options: [
      "A) B",
      "B) 66",
      "C) A1",
      "D) Compilation error"
    ],
    optionsChinese: [
      "A) B",
      "B) 66",
      "C) A1",
      "D) 编译错误"
    ],
    answer: 1,
    explanation: "When a char is used in an arithmetic expression with an int, it is promoted to its Unicode value. 'A' has Unicode value 65, so 'A' + 1 = 66. The result is an int, not a char. To get 'B', you would need to cast: (char)(c + 1). This demonstrates Java's type promotion rules.",
    explanationChinese: "当char在与int的算术表达式中使用时，它被提升为其Unicode值。'A'的Unicode值为65，所以'A' + 1 = 66。结果是int而非char。要得到'B'，需要强制转换：(char)(c + 1)。这演示了Java的类型提升规则。",
    diagram: "",
    terms: ["data_type", "type_casting", "unicode"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 23,
    q: "Which of the following correctly declares a two-dimensional array in Java?",
    qChinese: "以下哪个正确声明了Java中的二维数组？",
    options: [
      "A) int arr = new int[3,4];",
      "B) int arr[3][4] = new int;",
      "C) int[][] arr = new int[3][4];",
      "D) int[3][4] arr = new int[][];"
    ],
    optionsChinese: [
      "A) int arr = new int[3,4];",
      "B) int arr[3][4] = new int;",
      "C) int[][] arr = new int[3][4];",
      "D) int[3][4] arr = new int[][];"
    ],
    answer: 2,
    explanation: "In Java, a 2D array is declared using double brackets. 'int[][] arr = new int[3][4]' creates a 3x4 matrix. Java actually implements 2D arrays as arrays of arrays, allowing ragged arrays where rows can have different lengths. The other syntaxes shown are not valid Java.",
    explanationChinese: "在Java中，二维数组使用双括号声明。'int[][] arr = new int[3][4]'创建一个3x4矩阵。Java实际上将二维数组实现为数组的数组，允许不规则数组（行可以有不同长度）。其他语法不是有效的Java。",
    diagram: "",
    terms: ["array", "data_type", "matrix"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 24,
    q: "What happens if you try to compile and run this code?\nint x;\nSystem.out.println(x);",
    qChinese: "如果你尝试编译并运行这段代码会发生什么？\nint x;\nSystem.out.println(x);",
    options: [
      "A) Prints 0",
      "B) Compilation error",
      "C) Prints null",
      "D) Runtime error"
    ],
    optionsChinese: [
      "A) 打印0",
      "B) 编译错误",
      "C) 打印null",
      "D) 运行时错误"
    ],
    answer: 1,
    explanation: "Local variables in Java must be explicitly initialized before use. Unlike instance variables which get default values, local variables have no default. The compiler detects this and refuses to compile, producing an error like 'variable x might not have been initialized'. Always initialize local variables.",
    explanationChinese: "Java中的局部变量必须在使用前显式初始化。与获得默认值的实例变量不同，局部变量没有默认值。编译器检测到这一点并拒绝编译，产生类似'变量x可能未初始化'的错误。始终初始化局部变量。",
    diagram: "",
    terms: ["variable", "initialization", "compiler"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 25,
    q: "What is the purpose of the 'break' statement in a loop?",
    qChinese: "'break'语句在循环中的目的是什么？",
    options: [
      "A) Pauses the loop temporarily",
      "B) Restarts the loop from the beginning",
      "C) Skips to the next iteration",
      "D) Immediately exits the innermost enclosing loop"
    ],
    optionsChinese: [
      "A) 暂时暂停循环",
      "B) 从头重新开始循环",
      "C) 跳到下一次迭代",
      "D) 立即退出最内层的循环"
    ],
    answer: 3,
    explanation: "The break statement immediately terminates the innermost loop or switch statement. Execution continues with the statement following the loop. It is commonly used when a search finds its target or when a special termination condition is met. Use labeled breaks to exit outer loops from nested loops.",
    explanationChinese: "break语句立即终止最内层的循环或switch语句。执行继续循环后面的语句。它通常在搜索找到目标或满足特殊终止条件时使用。使用带标签的break从嵌套循环退出外层循环。",
    diagram: "",
    terms: ["loop", "control_flow", "break_statement"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 26,
    q: "What is the result of \"Hello\" + 3 + 4 in Java?",
    qChinese: "Java中\"Hello\" + 3 + 4的结果是什么？",
    options: [
      "A) \"Hello7\"",
      "B) \"Hello34\"",
      "C) Compilation error",
      "D) \"Hello 3 4\""
    ],
    optionsChinese: [
      "A) \"Hello7\"",
      "B) \"Hello34\"",
      "C) 编译错误",
      "D) \"Hello 3 4\""
    ],
    answer: 1,
    explanation: "String concatenation in Java is evaluated left to right. \"Hello\" + 3 first produces \"Hello3\" (string concatenation). Then \"Hello3\" + 4 produces \"Hello34\". If you want 7, use parentheses: \"Hello\" + (3 + 4). This demonstrates how operator associativity affects string expressions.",
    explanationChinese: "Java中的字符串连接从左到右求值。\"Hello\" + 3首先产生\"Hello3\"（字符串连接）。然后\"Hello3\" + 4产生\"Hello34\"。如果想要7，使用括号：\"Hello\" + (3 + 4)。这演示了运算符结合性如何影响字符串表达式。",
    diagram: "",
    terms: ["string", "operator", "concatenation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 27,
    q: "Which of the following is a checked exception in Java?",
    qChinese: "以下哪个是Java中的受检异常？",
    options: [
      "A) NullPointerException",
      "B) ArrayIndexOutOfBoundsException",
      "C) IOException",
      "D) ArithmeticException"
    ],
    optionsChinese: [
      "A) NullPointerException",
      "B) ArrayIndexOutOfBoundsException",
      "C) IOException",
      "D) ArithmeticException"
    ],
    answer: 2,
    explanation: "IOException is a checked exception that must be either caught with try-catch or declared with throws in the method signature. NullPointerException, ArrayIndexOutOfBoundsException, and ArithmeticException are unchecked exceptions extending RuntimeException. Checked exceptions enforce error handling at compile time.",
    explanationChinese: "IOException是受检异常，必须用try-catch捕获或在方法签名中用throws声明。NullPointerException、ArrayIndexOutOfBoundsException和ArithmeticException是继承RuntimeException的非受检异常。受检异常在编译时强制错误处理。",
    diagram: "",
    terms: ["exception", "error_handling", "compiler"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 28,
    q: "What does the 'finally' block do in a try-catch-finally statement?",
    qChinese: "try-catch-finally语句中的'finally'块做什么？",
    options: [
      "A) Executes only if an exception occurs",
      "B) Executes only if no exception occurs",
      "C) Executes only for checked exceptions",
      "D) Always executes regardless of exceptions"
    ],
    optionsChinese: [
      "A) 仅在发生异常时执行",
      "B) 仅在没有异常时执行",
      "C) 仅对受检异常执行",
      "D) 无论是否有异常都始终执行"
    ],
    answer: 3,
    explanation: "The finally block always executes after the try and catch blocks, whether an exception was thrown or not. It is typically used for cleanup operations like closing files, database connections, or releasing resources. Even if a return statement is in try or catch, finally still executes.",
    explanationChinese: "finally块总是在try和catch块之后执行，无论是否抛出异常。它通常用于清理操作，如关闭文件、数据库连接或释放资源。即使try或catch中有return语句，finally仍然执行。",
    diagram: "",
    terms: ["exception", "error_handling", "resource_management"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 29,
    q: "What is the output of the following code?\nint a = 5, b = 10;\na += b -= 3;\nSystem.out.println(a + \" \" + b);",
    qChinese: "以下代码的输出是什么？\nint a = 5, b = 10;\na += b -= 3;\nSystem.out.println(a + \" \" + b);",
    options: [
      "A) 8 7",
      "B) 15 7",
      "C) 12 10",
      "D) 12 7"
    ],
    optionsChinese: [
      "A) 8 7",
      "B) 15 7",
      "C) 12 10",
      "D) 12 7"
    ],
    answer: 3,
    explanation: "Compound assignment operators are right-associative. First, b -= 3 makes b = 10 - 3 = 7. Then a += 7 makes a = 5 + 7 = 12. So the output is \"12 7\". Understanding operator associativity and compound assignment is important for reading and writing concise Java code.",
    explanationChinese: "复合赋值运算符是右结合的。首先，b -= 3使b = 10 - 3 = 7。然后a += 7使a = 5 + 7 = 12。所以输出是\"12 7\"。理解运算符结合性和复合赋值对于阅读和编写简洁的Java代码很重要。",
    diagram: "",
    terms: ["operator", "assignment", "operator_precedence"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 30,
    q: "What is the size of a boolean variable in Java?",
    qChinese: "Java中boolean变量的大小是多少？",
    options: [
      "A) 1 bit",
      "B) Not precisely defined by JVM spec",
      "C) 1 byte",
      "D) 4 bytes"
    ],
    optionsChinese: [
      "A) 1位",
      "B) JVM规范未精确定义",
      "C) 1字节",
      "D) 4字节"
    ],
    answer: 1,
    explanation: "The Java Virtual Machine specification does not mandate a specific size for boolean. In practice, most JVMs use 1 byte or even 4 bytes (int-sized) for a single boolean for alignment purposes. Boolean arrays may use 1 byte per element. This is an implementation detail that varies across JVMs.",
    explanationChinese: "Java虚拟机规范未规定boolean的具体大小。实际上，大多数JVM对单个boolean使用1字节甚至4字节（int大小）以进行对齐。布尔数组可能每个元素使用1字节。这是跨JVM变化的实现细节。",
    diagram: "",
    terms: ["data_type", "boolean", "memory_allocation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 31,
    q: "Which method is used to convert a String to an integer in Java?",
    qChinese: "Java中使用哪个方法将String转换为整数？",
    options: [
      "A) Integer.valueOf()",
      "B) Both A and B",
      "C) String.toInt()",
      "D) Integer.parseInt()"
    ],
    optionsChinese: [
      "A) Integer.valueOf()",
      "B) A和B都可以",
      "C) String.toInt()",
      "D) Integer.parseInt()"
    ],
    answer: 1,
    explanation: "Both Integer.parseInt() and Integer.valueOf() can convert a String to a numeric value. parseInt() returns a primitive int, while valueOf() returns an Integer object. String.toInt() does not exist in Java. Choose parseInt() when you need a primitive and valueOf() when you need a wrapper object.",
    explanationChinese: "Integer.parseInt()和Integer.valueOf()都可以将String转换为数字值。parseInt()返回原始int，而valueOf()返回Integer对象。String.toInt()在Java中不存在。需要原始类型时选择parseInt()，需要包装对象时选择valueOf()。",
    diagram: "",
    terms: ["string", "data_type", "type_casting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 32,
    q: "What does the 'static' keyword mean when applied to a method in Java?",
    qChinese: "Java中'static'关键字应用于方法时是什么意思？",
    options: [
      "A) The method cannot be overridden",
      "B) The method is private",
      "C) The method runs only once",
      "D) The method belongs to the class rather than instances"
    ],
    optionsChinese: [
      "A) 该方法不能被覆盖",
      "B) 该方法是私有的",
      "C) 该方法只运行一次",
      "D) 该方法属于类而不是实例"
    ],
    answer: 3,
    explanation: "A static method belongs to the class itself rather than any particular instance. It can be called without creating an object, using ClassName.methodName(). Static methods cannot access instance variables or use 'this'. The main() method is the most common example of a static method.",
    explanationChinese: "静态方法属于类本身而非任何特定实例。它可以在不创建对象的情况下调用，使用ClassName.methodName()。静态方法不能访问实例变量或使用'this'。main()方法是静态方法最常见的例子。",
    diagram: "",
    terms: ["method", "static", "class"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 33,
    q: "What is the output of this enhanced for loop?\nint[] nums = {10, 20, 30};\nfor (int n : nums) {\n  System.out.print(n + \" \");\n}",
    qChinese: "这个增强for循环的输出是什么？\nint[] nums = {10, 20, 30};\nfor (int n : nums) {\n  System.out.print(n + \" \");\n}",
    options: [
      "A) 0 1 2",
      "B) 10 20 30 (with newlines)",
      "C) 10 20 30",
      "D) Compilation error"
    ],
    optionsChinese: [
      "A) 0 1 2",
      "B) 10 20 30（带换行）",
      "C) 10 20 30",
      "D) 编译错误"
    ],
    answer: 2,
    explanation: "The enhanced for loop (for-each) iterates over each element of the array directly, not the indices. Variable n takes values 10, 20, 30 sequentially. System.out.print outputs without newlines, producing '10 20 30 '. This syntax is cleaner than index-based loops when you don't need the index.",
    explanationChinese: "增强for循环（for-each）直接遍历数组的每个元素，而不是索引。变量n依次取值10、20、30。System.out.print输出不换行，产生'10 20 30 '。当不需要索引时，此语法比基于索引的循环更简洁。",
    diagram: "",
    terms: ["loop", "array", "iteration"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 34,
    q: "What will happen if you divide an integer by zero in Java?",
    qChinese: "在Java中如果将整数除以零会发生什么？",
    options: [
      "A) Returns 0",
      "B) Returns Infinity",
      "C) ArithmeticException is thrown",
      "D) Compilation error"
    ],
    optionsChinese: [
      "A) 返回0",
      "B) 返回Infinity",
      "C) 抛出ArithmeticException",
      "D) 编译错误"
    ],
    answer: 2,
    explanation: "Dividing an integer by zero in Java throws an ArithmeticException at runtime. However, dividing a floating-point number by zero returns Infinity (or -Infinity) rather than throwing an exception, following IEEE 754 standards. This is an important distinction between integer and floating-point arithmetic.",
    explanationChinese: "在Java中将整数除以零会在运行时抛出ArithmeticException。但是，将浮点数除以零返回Infinity（或-Infinity）而不是抛出异常，遵循IEEE 754标准。这是整数和浮点运算之间的重要区别。",
    diagram: "",
    terms: ["exception", "operator", "runtime_error"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 35,
    q: "What is the correct way to compare two strings for equality in Java?",
    qChinese: "在Java中比较两个字符串相等的正确方法是什么？",
    options: [
      "A) str1.equals(str2)",
      "B) str1 == str2",
      "C) str1.compareTo(str2)",
      "D) str1.isEqual(str2)"
    ],
    optionsChinese: [
      "A) str1.equals(str2)",
      "B) str1 == str2",
      "C) str1.compareTo(str2)",
      "D) str1.isEqual(str2)"
    ],
    answer: 0,
    explanation: "The .equals() method compares the content of two strings. The == operator compares object references, not content. compareTo() returns an integer for ordering, not a boolean for equality. isEqual() does not exist. Using == for string comparison is a common bug in Java programs.",
    explanationChinese: ".equals()方法比较两个字符串的内容。==运算符比较对象引用，而非内容。compareTo()返回用于排序的整数，不是用于相等的布尔值。isEqual()不存在。使用==进行字符串比较是Java程序中的常见错误。",
    diagram: "",
    terms: ["string", "equality", "method"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 36,
    q: "What does System.exit(0) do in Java?",
    qChinese: "Java中System.exit(0)做什么？",
    options: [
      "A) Exits the current method",
      "B) Exits the current loop",
      "C) Terminates the JVM with status code 0",
      "D) Restarts the program"
    ],
    optionsChinese: [
      "A) 退出当前方法",
      "B) 退出当前循环",
      "C) 以状态码0终止JVM",
      "D) 重启程序"
    ],
    answer: 2,
    explanation: "System.exit(0) terminates the Java Virtual Machine immediately. The argument 0 indicates normal termination; non-zero values indicate abnormal termination. This stops all threads and exits the program. It should be used sparingly, as it prevents proper cleanup of resources and finally blocks.",
    explanationChinese: "System.exit(0)立即终止Java虚拟机。参数0表示正常终止；非零值表示异常终止。这会停止所有线程并退出程序。应谨慎使用，因为它会阻止资源的正确清理和finally块的执行。",
    diagram: "",
    terms: ["method", "runtime_error", "process"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 37,
    q: "What is the output of the following code?\nint[] arr = new int[5];\nSystem.out.println(arr[2]);",
    qChinese: "以下代码的输出是什么？\nint[] arr = new int[5];\nSystem.out.println(arr[2]);",
    options: [
      "A) null",
      "B) 2",
      "C) 0",
      "D) Compilation error"
    ],
    optionsChinese: [
      "A) null",
      "B) 2",
      "C) 0",
      "D) 编译错误"
    ],
    answer: 2,
    explanation: "When an int array is created with 'new', all elements are initialized to 0 by default. This applies to all numeric primitive arrays: int gets 0, double gets 0.0, boolean gets false, and object references get null. Element arr[2] is therefore 0 without explicit assignment.",
    explanationChinese: "当使用'new'创建int数组时，所有元素默认初始化为0。这适用于所有数字原始类型数组：int得到0，double得到0.0，boolean得到false，对象引用得到null。因此arr[2]在没有显式赋值的情况下为0。",
    diagram: "",
    terms: ["array", "initialization", "data_type"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 38,
    q: "What is short-circuit evaluation in Java?",
    qChinese: "Java中的短路求值是什么？",
    options: [
      "A) Skipping the second operand when the result is already determined",
      "B) Evaluating expressions in parallel",
      "C) Evaluating only even-indexed elements",
      "D) Optimizing loops at compile time"
    ],
    optionsChinese: [
      "A) 当结果已经确定时跳过第二个操作数",
      "B) 并行求值表达式",
      "C) 仅求值偶数索引元素",
      "D) 在编译时优化循环"
    ],
    answer: 0,
    explanation: "Short-circuit evaluation means Java stops evaluating a boolean expression as soon as the result is determined. For &&, if the left operand is false, the right is skipped. For ||, if the left is true, the right is skipped. This is useful for null checks: if (obj != null && obj.method()).",
    explanationChinese: "短路求值意味着Java在结果确定后立即停止计算布尔表达式。对于&&，如果左操作数为false，则跳过右操作数。对于||，如果左操作数为true，则跳过右操作数。这对空值检查很有用：if (obj != null && obj.method())。",
    diagram: "",
    terms: ["operator", "boolean", "evaluation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 39,
    q: "What is the difference between print() and println() in Java?",
    qChinese: "Java中print()和println()有什么区别？",
    options: [
      "A) print() adds a newline, println() does not",
      "B) println() adds a newline, print() does not",
      "C) print() only works with strings",
      "D) println() only works with numbers"
    ],
    optionsChinese: [
      "A) print()添加换行，println()不添加",
      "B) println()添加换行，print()不添加",
      "C) print()仅适用于字符串",
      "D) println()仅适用于数字"
    ],
    answer: 1,
    explanation: "System.out.println() prints the argument and then moves the cursor to a new line. System.out.print() prints the argument but keeps the cursor on the same line. Both methods accept various types including strings, numbers, and objects through method overloading.",
    explanationChinese: "System.out.println()打印参数然后将光标移到新行。System.out.print()打印参数但将光标保持在同一行。两种方法通过方法重载接受各种类型，包括字符串、数字和对象。",
    diagram: "",
    terms: ["method", "output", "overloading"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 40,
    q: "What is the output of the following code?\nString s = null;\nSystem.out.println(s + \" world\");",
    qChinese: "以下代码的输出是什么？\nString s = null;\nSystem.out.println(s + \" world\");",
    options: [
      "A) NullPointerException",
      "B) \" world\"",
      "C) \"null world\"",
      "D) Compilation error"
    ],
    optionsChinese: [
      "A) NullPointerException",
      "B) \" world\"",
      "C) \"null world\"",
      "D) 编译错误"
    ],
    answer: 2,
    explanation: "When null is concatenated with a string using the + operator, Java converts null to the string \"null\". So null + \" world\" produces \"null world\". This does not throw NullPointerException because string concatenation handles null specially. However, calling methods on null (e.g., s.length()) would throw NPE.",
    explanationChinese: "当null使用+运算符与字符串连接时，Java将null转换为字符串\"null\"。所以null + \" world\"产生\"null world\"。这不会抛出NullPointerException，因为字符串连接特殊处理null。但是，在null上调用方法（如s.length()）会抛出NPE。",
    diagram: "",
    terms: ["string", "null", "concatenation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 41,
    q: "What is encapsulation in object-oriented programming?",
    qChinese: "面向对象编程中的封装是什么？",
    options: [
      "A) Inheriting from multiple classes",
      "B) Overriding methods in subclasses",
      "C) Creating multiple objects from a class",
      "D) Bundling data and methods that operate on that data within a single unit and restricting access"
    ],
    optionsChinese: [
      "A) 从多个类继承",
      "B) 在子类中覆盖方法",
      "C) 从一个类创建多个对象",
      "D) 将数据和操作该数据的方法捆绑在一个单元中并限制访问"
    ],
    answer: 3,
    explanation: "Encapsulation is the OOP principle of bundling data (fields) and methods that operate on that data within a class, while restricting direct access to internal state through access modifiers like private. This protects data integrity and allows controlled access via getters and setters.",
    explanationChinese: "封装是OOP原则，将数据（字段）和操作该数据的方法捆绑在一个类中，同时通过private等访问修饰符限制对内部状态的直接访问。这保护了数据完整性，并允许通过getter和setter进行受控访问。",
    diagram: "",
    terms: ["encapsulation", "class", "access_modifier"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 42,
    q: "What is the output of the following code?\nclass Animal {\n  void speak() { System.out.println(\"Animal\"); }\n}\nclass Dog extends Animal {\n  void speak() { System.out.println(\"Woof\"); }\n}\nAnimal a = new Dog();\na.speak();",
    qChinese: "以下代码的输出是什么？\nclass Animal {\n  void speak() { System.out.println(\"Animal\"); }\n}\nclass Dog extends Animal {\n  void speak() { System.out.println(\"Woof\"); }\n}\nAnimal a = new Dog();\na.speak();",
    options: [
      "A) Animal",
      "B) Compilation error",
      "C) Woof",
      "D) Runtime error"
    ],
    optionsChinese: [
      "A) Animal",
      "B) 编译错误",
      "C) Woof",
      "D) 运行时错误"
    ],
    answer: 2,
    explanation: "This demonstrates runtime polymorphism. Although the reference type is Animal, the actual object is a Dog. Java uses dynamic method dispatch to call the Dog's speak() method at runtime. The method that executes depends on the actual object type, not the reference type.",
    explanationChinese: "这演示了运行时多态性。虽然引用类型是Animal，但实际对象是Dog。Java使用动态方法分派在运行时调用Dog的speak()方法。执行的方法取决于实际对象类型，而不是引用类型。",
    diagram: "",
    terms: ["polymorphism", "inheritance", "dynamic_dispatch"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 43,
    q: "Which access modifier in Java makes a member accessible only within its own class?",
    qChinese: "Java中哪个访问修饰符使成员仅在其自己的类中可访问？",
    options: [
      "A) public",
      "B) protected",
      "C) private",
      "D) default (no modifier)"
    ],
    optionsChinese: [
      "A) public",
      "B) protected",
      "C) private",
      "D) 默认（无修饰符）"
    ],
    answer: 2,
    explanation: "The private access modifier restricts access to the declaring class only. Public allows access from anywhere, protected allows access within the package and subclasses, and default (package-private) allows access within the same package. Private is key to achieving encapsulation in Java.",
    explanationChinese: "private访问修饰符将访问限制在声明类内。public允许从任何地方访问，protected允许在包内和子类中访问，默认（包私有）允许在同一包内访问。private是在Java中实现封装的关键。",
    diagram: "",
    terms: ["access_modifier", "encapsulation", "class"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 44,
    q: "What is the purpose of the 'super' keyword in Java?",
    qChinese: "Java中'super'关键字的目的是什么？",
    options: [
      "A) To refer to the parent class's members and constructors",
      "B) To create a new superclass",
      "C) To make a method static",
      "D) To prevent inheritance"
    ],
    optionsChinese: [
      "A) 引用父类的成员和构造函数",
      "B) 创建一个新的超类",
      "C) 使方法成为静态的",
      "D) 防止继承"
    ],
    answer: 0,
    explanation: "The 'super' keyword refers to the parent class. It is used to call the parent's constructor (super()), access parent's methods (super.method()), and access parent's fields. In a constructor, super() must be the first statement if used. It enables code reuse through the inheritance hierarchy.",
    explanationChinese: "super'关键字引用父类。它用于调用父类构造函数（super()）、访问父类方法（super.method()）和访问父类字段。在构造函数中，如果使用super()，它必须是第一条语句。它通过继承层次结构实现代码重用。",
    diagram: "",
    terms: ["inheritance", "constructor", "class"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 45,
    q: "What is method overloading in Java?",
    qChinese: "Java中的方法重载是什么？",
    options: [
      "A) Defining multiple methods with the same name but different parameter lists",
      "B) Defining a method in a subclass with the same signature as the parent",
      "C) Calling a method multiple times",
      "D) Making a method run faster"
    ],
    optionsChinese: [
      "A) 定义多个同名但参数列表不同的方法",
      "B) 在子类中定义与父类相同签名的方法",
      "C) 多次调用一个方法",
      "D) 使方法运行更快"
    ],
    answer: 0,
    explanation: "Method overloading allows multiple methods with the same name but different parameter types, numbers, or order in the same class. The compiler determines which method to call based on the arguments at compile time. Return type alone cannot distinguish overloaded methods. This is compile-time polymorphism.",
    explanationChinese: "方法重载允许在同一类中存在多个同名但参数类型、数量或顺序不同的方法。编译器在编译时根据参数确定调用哪个方法。仅靠返回类型不能区分重载方法。这是编译时多态性。",
    diagram: "",
    terms: ["method", "overloading", "polymorphism"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 46,
    q: "What is the difference between method overloading and method overriding?",
    qChinese: "方法重载和方法覆盖有什么区别？",
    options: [
      "A) Overriding is in the same class; overloading is in a subclass",
      "B) Overloading changes return type; overriding changes parameters",
      "C) They are the same thing",
      "D) Overloading is in the same class; overriding is in a subclass"
    ],
    optionsChinese: [
      "A) 覆盖在同一类中；重载在子类中",
      "B) 重载改变返回类型；覆盖改变参数",
      "C) 它们是同一回事",
      "D) 重载在同一类中；覆盖在子类中"
    ],
    answer: 3,
    explanation: "Overloading occurs within the same class with methods having the same name but different parameters (compile-time polymorphism). Overriding occurs in a subclass with a method having the same signature as the parent (runtime polymorphism). Overriding enables dynamic dispatch based on object type.",
    explanationChinese: "重载发生在同一类中，方法同名但参数不同（编译时多态性）。覆盖发生在子类中，方法与父类有相同的签名（运行时多态性）。覆盖使基于对象类型的动态分派成为可能。",
    diagram: "",
    terms: ["overloading", "overriding", "polymorphism"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 47,
    q: "What is an abstract class in Java?",
    qChinese: "Java中的抽象类是什么？",
    options: [
      "A) A class that cannot have any methods",
      "B) A class that cannot be instantiated and may contain abstract methods",
      "C) A class with only static methods",
      "D) A class that is automatically garbage collected"
    ],
    optionsChinese: [
      "A) 不能有任何方法的类",
      "B) 不能被实例化的类，可以包含抽象方法",
      "C) 只有静态方法的类",
      "D) 自动被垃圾回收的类"
    ],
    answer: 1,
    explanation: "An abstract class is declared with the 'abstract' keyword and cannot be instantiated directly. It can contain both abstract methods (without body) and concrete methods (with body). Subclasses must implement all abstract methods or be declared abstract themselves. Abstract classes define common behavior for related classes.",
    explanationChinese: "抽象类用'abstract'关键字声明，不能直接实例化。它可以包含抽象方法（没有方法体）和具体方法（有方法体）。子类必须实现所有抽象方法，否则必须声明自己为抽象类。抽象类为相关类定义共同行为。",
    diagram: "",
    terms: ["abstract_class", "inheritance", "method"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 48,
    q: "What is the difference between an abstract class and an interface in Java?",
    qChinese: "Java中抽象类和接口有什么区别？",
    options: [
      "A) Abstract classes can have state (fields) and constructors; interfaces traditionally cannot",
      "B) Interfaces can have constructors; abstract classes cannot",
      "C) Abstract classes support multiple inheritance; interfaces do not",
      "D) There is no difference"
    ],
    optionsChinese: [
      "A) 抽象类可以有状态（字段）和构造函数；接口传统上不可以",
      "B) 接口可以有构造函数；抽象类不可以",
      "C) 抽象类支持多继承；接口不支持",
      "D) 没有区别"
    ],
    answer: 0,
    explanation: "Abstract classes can have instance fields, constructors, and both abstract and concrete methods. Interfaces traditionally only had abstract methods, though Java 8 added default and static methods. A class can implement multiple interfaces but extend only one abstract class. Interfaces define contracts; abstract classes define partial implementations.",
    explanationChinese: "抽象类可以有实例字段、构造函数以及抽象和具体方法。接口传统上只有抽象方法，尽管Java 8添加了默认和静态方法。一个类可以实现多个接口但只能继承一个抽象类。接口定义契约；抽象类定义部分实现。",
    diagram: "",
    terms: ["abstract_class", "interface", "inheritance"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 49,
    q: "What does the 'this' keyword refer to in Java?",
    qChinese: "Java中'this'关键字指的是什么？",
    options: [
      "A) The current object instance",
      "B) The parent class",
      "C) The main method",
      "D) A static reference"
    ],
    optionsChinese: [
      "A) 当前对象实例",
      "B) 父类",
      "C) main方法",
      "D) 静态引用"
    ],
    answer: 0,
    explanation: "The 'this' keyword refers to the current object instance within a non-static method or constructor. It is used to distinguish instance variables from parameters with the same name, to call other constructors in the same class (this()), and to pass the current object as an argument to other methods.",
    explanationChinese: "this'关键字在非静态方法或构造函数中引用当前对象实例。它用于区分实例变量和同名参数，调用同一类中的其他构造函数（this()），以及将当前对象作为参数传递给其他方法。",
    diagram: "",
    terms: ["object", "constructor", "reference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 50,
    q: "Which of the following is true about Java constructors?",
    qChinese: "关于Java构造函数，以下哪个是正确的？",
    options: [
      "A) Constructors must have a return type",
      "B) Constructors can be inherited",
      "C) A class can have multiple constructors through overloading",
      "D) Constructors must be public"
    ],
    optionsChinese: [
      "A) 构造函数必须有返回类型",
      "B) 构造函数可以被继承",
      "C) 一个类可以通过重载拥有多个构造函数",
      "D) 构造函数必须是public"
    ],
    answer: 2,
    explanation: "A class can have multiple constructors with different parameter lists, known as constructor overloading. Constructors do not have return types and are not inherited by subclasses. They can have any access modifier, including private (used in singleton pattern). Java provides a default no-arg constructor only if none is defined.",
    explanationChinese: "一个类可以有多个参数列表不同的构造函数，称为构造函数重载。构造函数没有返回类型，不会被子类继承。它们可以有任何访问修饰符，包括private（用于单例模式）。只有在没有定义构造函数时，Java才提供默认的无参构造函数。",
    diagram: "",
    terms: ["constructor", "overloading", "class"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 51,
    q: "What is the output of the following code?\nclass Parent {\n  Parent() { System.out.println(\"Parent\"); }\n}\nclass Child extends Parent {\n  Child() { System.out.println(\"Child\"); }\n}\nnew Child();",
    qChinese: "以下代码的输出是什么？\nclass Parent {\n  Parent() { System.out.println(\"Parent\"); }\n}\nclass Child extends Parent {\n  Child() { System.out.println(\"Child\"); }\n}\nnew Child();",
    options: [
      "A) Parent\\nChild",
      "B) Parent",
      "C) Child",
      "D) Child\\nParent"
    ],
    optionsChinese: [
      "A) Parent\\nChild",
      "B) Parent",
      "C) Child",
      "D) Child\\nParent"
    ],
    answer: 0,
    explanation: "When creating a Child object, Java automatically calls the parent constructor first (implicit super()). So \"Parent\" prints first, then \"Child\". Constructor chaining ensures parent classes are properly initialized before child classes. If the parent has no no-arg constructor, super() with arguments must be explicitly called.",
    explanationChinese: "创建Child对象时，Java自动先调用父构造函数（隐式super()）。所以先打印\"Parent\"，然后打印\"Child\"。构造函数链确保在子类之前正确初始化父类。如果父类没有无参构造函数，必须显式调用带参数的super()。",
    diagram: "",
    terms: ["constructor", "inheritance", "constructor_chaining"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 52,
    q: "Can a Java class implement multiple interfaces?",
    qChinese: "Java类可以实现多个接口吗？",
    options: [
      "A) No, only one interface",
      "B) Yes, using the 'implements' keyword with comma separation",
      "C) Yes, but only if they have no conflicting methods",
      "D) Only abstract classes can implement multiple interfaces"
    ],
    optionsChinese: [
      "A) 不，只能一个接口",
      "B) 是，使用'implements'关键字用逗号分隔",
      "C) 是，但仅当它们没有冲突方法时",
      "D) 只有抽象类可以实现多个接口"
    ],
    answer: 1,
    explanation: "Java supports implementing multiple interfaces using comma separation: class MyClass implements Interface1, Interface2. This is Java's way of achieving multiple inheritance of type. If two interfaces have methods with the same signature, the implementing class provides one implementation that satisfies both.",
    explanationChinese: "Java支持使用逗号分隔实现多个接口：class MyClass implements Interface1, Interface2。这是Java实现类型多继承的方式。如果两个接口有相同签名的方法，实现类提供一个满足两者的实现。",
    diagram: "",
    terms: ["interface", "inheritance", "class"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 53,
    q: "What does the @Override annotation do in Java?",
    qChinese: "Java中@Override注解的作用是什么？",
    options: [
      "A) It makes the method run faster",
      "B) It automatically calls the parent method",
      "C) It prevents the method from being overridden",
      "D) It tells the compiler to verify the method overrides a superclass method"
    ],
    optionsChinese: [
      "A) 它使方法运行更快",
      "B) 它自动调用父方法",
      "C) 它防止方法被覆盖",
      "D) 它告诉编译器验证该方法覆盖了超类方法"
    ],
    answer: 3,
    explanation: "@Override is an annotation that instructs the compiler to check that the method actually overrides a method in a superclass or interface. If the method signature does not match any parent method, a compilation error occurs. This prevents subtle bugs from misspelling method names or using wrong parameters.",
    explanationChinese: "@Override是一个注解，指示编译器检查该方法是否确实覆盖了超类或接口中的方法。如果方法签名不匹配任何父方法，会发生编译错误。这防止了因方法名拼写错误或使用错误参数而产生的微妙错误。",
    diagram: "",
    terms: ["overriding", "annotation", "compiler"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 54,
    q: "What is the purpose of the 'final' keyword when applied to a class in Java?",
    qChinese: "Java中'final'关键字应用于类时的目的是什么？",
    options: [
      "A) The class cannot be extended (subclassed)",
      "B) The class becomes abstract",
      "C) The class is loaded first by the JVM",
      "D) The class can only have final methods"
    ],
    optionsChinese: [
      "A) 类不能被继承（子类化）",
      "B) 类变成抽象的",
      "C) 类由JVM首先加载",
      "D) 类只能有final方法"
    ],
    answer: 0,
    explanation: "A final class cannot be subclassed. This is useful for security and design reasons, ensuring the class behavior cannot be altered through inheritance. String, Integer, and other wrapper classes in Java are declared final. Final methods cannot be overridden but the class itself can still be instantiated.",
    explanationChinese: "final类不能被子类化。这出于安全和设计原因有用，确保类行为不能通过继承被修改。Java中的String、Integer和其他包装类被声明为final。final方法不能被覆盖，但类本身仍然可以被实例化。",
    diagram: "",
    terms: ["final_keyword", "inheritance", "class"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 55,
    q: "What is a getter and setter pattern used for in Java?",
    qChinese: "Java中getter和setter模式的用途是什么？",
    options: [
      "A) To directly access public fields",
      "B) To override inherited methods",
      "C) To provide controlled access to private fields",
      "D) To create static utility methods"
    ],
    optionsChinese: [
      "A) 直接访问公共字段",
      "B) 覆盖继承的方法",
      "C) 提供对私有字段的受控访问",
      "D) 创建静态实用方法"
    ],
    answer: 2,
    explanation: "Getters and setters are methods that provide controlled read and write access to private instance variables. Getters return field values; setters validate and assign values. This encapsulation pattern allows adding validation logic, maintaining data invariants, and changing internal representation without affecting client code.",
    explanationChinese: "Getter和setter是提供对私有实例变量受控读写访问的方法。Getter返回字段值；setter验证并赋值。这种封装模式允许添加验证逻辑、维护数据不变量，以及在不影响客户端代码的情况下更改内部表示。",
    diagram: "",
    terms: ["encapsulation", "method", "access_modifier"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 56,
    q: "What is the diamond problem in OOP, and how does Java handle it?",
    qChinese: "OOP中的菱形问题是什么，Java如何处理它？",
    options: [
      "A) A memory leak issue; Java uses garbage collection",
      "B) A naming conflict; Java uses packages",
      "C) A deadlock situation; Java uses synchronized blocks",
      "D) Ambiguity from multiple inheritance of classes; Java forbids multiple class inheritance"
    ],
    optionsChinese: [
      "A) 内存泄漏问题；Java使用垃圾回收",
      "B) 命名冲突；Java使用包",
      "C) 死锁情况；Java使用同步块",
      "D) 类的多继承产生的歧义；Java禁止多类继承"
    ],
    answer: 3,
    explanation: "The diamond problem occurs when a class inherits from two classes that share a common ancestor, creating ambiguity about which inherited method to use. Java avoids this by allowing only single class inheritance. Multiple inheritance of type is achieved through interfaces, where default methods resolve conflicts explicitly.",
    explanationChinese: "菱形问题发生在一个类从共享共同祖先的两个类继承时，产生关于使用哪个继承方法的歧义。Java通过只允许单类继承来避免这个问题。类型的多继承通过接口实现，其中默认方法显式解决冲突。",
    diagram: "",
    terms: ["inheritance", "interface", "class"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 57,
    q: "What is the toString() method used for in Java?",
    qChinese: "Java中toString()方法的用途是什么？",
    options: [
      "A) Converting an int to a String",
      "B) Providing a string representation of an object",
      "C) Checking if two objects are equal",
      "D) Cloning an object"
    ],
    optionsChinese: [
      "A) 将int转换为String",
      "B) 提供对象的字符串表示",
      "C) 检查两个对象是否相等",
      "D) 克隆一个对象"
    ],
    answer: 1,
    explanation: "The toString() method, inherited from Object, returns a string representation of an object. By default, it returns the class name and hash code. Overriding toString() provides meaningful output when printing objects or using string concatenation. It is automatically called by println() and string concatenation operators.",
    explanationChinese: "toString()方法从Object继承，返回对象的字符串表示。默认情况下，它返回类名和哈希码。覆盖toString()在打印对象或使用字符串连接时提供有意义的输出。它被println()和字符串连接运算符自动调用。",
    diagram: "",
    terms: ["method", "object", "overriding"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 58,
    q: "What is composition in OOP?",
    qChinese: "OOP中的组合是什么？",
    options: [
      "A) A class inheriting from another class",
      "B) A class containing instances of other classes as fields",
      "C) Multiple classes in the same file",
      "D) Converting one type to another"
    ],
    optionsChinese: [
      "A) 一个类继承另一个类",
      "B) 一个类包含其他类的实例作为字段",
      "C) 同一文件中的多个类",
      "D) 将一种类型转换为另一种类型"
    ],
    answer: 1,
    explanation: "Composition is a 'has-a' relationship where a class contains objects of other classes as fields. For example, a Car has an Engine. It provides code reuse without the tight coupling of inheritance. The design principle 'favor composition over inheritance' promotes flexibility and easier maintenance.",
    explanationChinese: "组合是一种'有一个'关系，其中一个类包含其他类的对象作为字段。例如，Car有一个Engine。它提供代码重用而没有继承的紧密耦合。'优先组合而非继承'的设计原则促进灵活性和更容易的维护。",
    diagram: "",
    terms: ["composition", "class", "object"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 59,
    q: "What happens if a subclass does not implement all abstract methods of its abstract parent class?",
    qChinese: "如果子类没有实现其抽象父类的所有抽象方法会发生什么？",
    options: [
      "A) Runtime error",
      "B) The methods return null by default",
      "C) The subclass must also be declared abstract",
      "D) The compiler uses default implementations"
    ],
    optionsChinese: [
      "A) 运行时错误",
      "B) 方法默认返回null",
      "C) 子类也必须声明为抽象的",
      "D) 编译器使用默认实现"
    ],
    answer: 2,
    explanation: "If a subclass does not implement all abstract methods from its abstract parent, it must also be declared abstract. Only concrete (non-abstract) classes must implement every abstract method. This creates an inheritance chain where implementation responsibility passes down until a concrete class provides all implementations.",
    explanationChinese: "如果子类没有实现其抽象父类的所有抽象方法，它也必须声明为抽象的。只有具体（非抽象）类必须实现每个抽象方法。这创建了一个继承链，实现责任向下传递，直到一个具体类提供所有实现。",
    diagram: "",
    terms: ["abstract_class", "inheritance", "method"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 60,
    q: "What is the purpose of the instanceof operator in Java?",
    qChinese: "Java中instanceof运算符的目的是什么？",
    options: [
      "A) Checking if an object is an instance of a specific class or interface",
      "B) Creating a new instance of a class",
      "C) Counting the number of instances created",
      "D) Comparing two objects for equality"
    ],
    optionsChinese: [
      "A) 检查对象是否是特定类或接口的实例",
      "B) 创建类的新实例",
      "C) 计算创建的实例数量",
      "D) 比较两个对象是否相等"
    ],
    answer: 0,
    explanation: "The instanceof operator returns true if an object is an instance of a specified class, subclass, or implements a specified interface. It is commonly used before type casting to prevent ClassCastException. For example: if (animal instanceof Dog) { Dog d = (Dog) animal; }. It returns false if the reference is null.",
    explanationChinese: "instanceof运算符在对象是指定类、子类的实例或实现指定接口时返回true。它通常在类型转换前使用以防止ClassCastException。例如：if (animal instanceof Dog) { Dog d = (Dog) animal; }。如果引用为null则返回false。",
    diagram: "",
    terms: ["operator", "inheritance", "type_casting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 61,
    q: "What is an inner class in Java?",
    qChinese: "Java中的内部类是什么？",
    options: [
      "A) A class defined inside a method only",
      "B) A class defined within another class",
      "C) A class that cannot have methods",
      "D) A class that extends Object explicitly"
    ],
    optionsChinese: [
      "A) 仅在方法内定义的类",
      "B) 在另一个类内定义的类",
      "C) 不能有方法的类",
      "D) 显式继承Object的类"
    ],
    answer: 1,
    explanation: "An inner class is a class defined within another class. Java supports four types: member inner classes, static nested classes, local inner classes (inside methods), and anonymous inner classes. Inner classes can access the enclosing class's members, including private ones, enabling tight encapsulation of related functionality.",
    explanationChinese: "内部类是在另一个类内定义的类。Java支持四种类型：成员内部类、静态嵌套类、局部内部类（在方法内）和匿名内部类。内部类可以访问外围类的成员，包括私有成员，实现相关功能的紧密封装。",
    diagram: "",
    terms: ["class", "encapsulation", "inner_class"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 62,
    q: "What is polymorphism in Java?",
    qChinese: "Java中的多态性是什么？",
    options: [
      "A) The ability to create multiple classes",
      "B) The ability to inherit from multiple classes",
      "C) The ability to hide implementation details",
      "D) The ability of an object to take many forms and respond differently to the same method call"
    ],
    optionsChinese: [
      "A) 创建多个类的能力",
      "B) 从多个类继承的能力",
      "C) 隐藏实现细节的能力",
      "D) 对象采取多种形式并对相同方法调用做出不同响应的能力"
    ],
    answer: 3,
    explanation: "Polymorphism allows objects of different classes to be treated as objects of a common superclass. The same method call can produce different behaviors depending on the actual object type. Java achieves this through method overriding (runtime polymorphism) and method overloading (compile-time polymorphism).",
    explanationChinese: "多态性允许不同类的对象被视为共同超类的对象。相同的方法调用可以根据实际对象类型产生不同的行为。Java通过方法覆盖（运行时多态性）和方法重载（编译时多态性）实现这一点。",
    diagram: "",
    terms: ["polymorphism", "inheritance", "overriding"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 63,
    q: "What is the output of the following code?\nclass A {\n  int x = 10;\n}\nclass B extends A {\n  int x = 20;\n}\nA obj = new B();\nSystem.out.println(obj.x);",
    qChinese: "以下代码的输出是什么？\nclass A {\n  int x = 10;\n}\nclass B extends A {\n  int x = 20;\n}\nA obj = new B();\nSystem.out.println(obj.x);",
    options: [
      "A) Compilation error",
      "B) 20",
      "C) 30",
      "D) 10"
    ],
    optionsChinese: [
      "A) 编译错误",
      "B) 20",
      "C) 30",
      "D) 10"
    ],
    answer: 3,
    explanation: "Fields in Java are not polymorphic - they use static binding based on the reference type, not the object type. Since obj is declared as type A, obj.x accesses A's field x = 10, even though the actual object is B. Only methods participate in dynamic dispatch. This is called field hiding.",
    explanationChinese: "Java中的字段不是多态的——它们使用基于引用类型的静态绑定，而非对象类型。由于obj声明为A类型，obj.x访问A的字段x = 10，即使实际对象是B。只有方法参与动态分派。这称为字段隐藏。",
    diagram: "",
    terms: ["inheritance", "polymorphism", "static_binding"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 64,
    q: "Which of the following correctly defines an interface in Java?",
    qChinese: "以下哪个正确定义了Java中的接口？",
    options: [
      "A) class interface Drawable { void draw(); }",
      "B) interface Drawable { void draw() { } }",
      "C) interface Drawable { void draw(); }",
      "D) abstract interface Drawable { void draw() {} }"
    ],
    optionsChinese: [
      "A) class interface Drawable { void draw(); }",
      "B) interface Drawable { void draw() { } }",
      "C) interface Drawable { void draw(); }",
      "D) abstract interface Drawable { void draw() {} }"
    ],
    answer: 2,
    explanation: "An interface is declared with the 'interface' keyword and traditionally contains abstract method declarations without bodies. Option A correctly declares an abstract method draw() in the interface. Option B has a body making it a default method (valid in Java 8+ but needs 'default' keyword). Options C and D use incorrect syntax.",
    explanationChinese: "接口用'interface'关键字声明，传统上包含没有方法体的抽象方法声明。选项A正确声明了接口中的抽象方法draw()。选项B有方法体使其成为默认方法（Java 8+中有效但需要'default'关键字）。选项C和D使用不正确的语法。",
    diagram: "",
    terms: ["interface", "abstract_class", "method"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 65,
    q: "What are default methods in Java interfaces (introduced in Java 8)?",
    qChinese: "Java接口中的默认方法（Java 8引入）是什么？",
    options: [
      "A) Methods that must be overridden",
      "B) Methods with a default implementation in the interface",
      "C) Private methods in interfaces",
      "D) Static methods that cannot be changed"
    ],
    optionsChinese: [
      "A) 必须被覆盖的方法",
      "B) 接口中带有默认实现的方法",
      "C) 接口中的私有方法",
      "D) 不能被更改的静态方法"
    ],
    answer: 1,
    explanation: "Default methods, declared with the 'default' keyword, provide a method body in an interface. Implementing classes inherit this default behavior but can override it. This feature was added in Java 8 to allow interface evolution without breaking existing implementations, enabling backward compatibility.",
    explanationChinese: "默认方法用'default'关键字声明，在接口中提供方法体。实现类继承此默认行为但可以覆盖它。此功能在Java 8中添加，允许接口演进而不破坏现有实现，实现向后兼容。",
    diagram: "",
    terms: ["interface", "method", "default_method"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 66,
    q: "What is the Comparable interface used for in Java?",
    qChinese: "Java中Comparable接口的用途是什么？",
    options: [
      "A) Defining natural ordering for objects of a class",
      "B) Comparing memory addresses",
      "C) Comparing string lengths only",
      "D) Making objects printable"
    ],
    optionsChinese: [
      "A) 为类的对象定义自然排序",
      "B) 比较内存地址",
      "C) 仅比较字符串长度",
      "D) 使对象可打印"
    ],
    answer: 0,
    explanation: "The Comparable interface defines a natural ordering for objects by requiring implementation of compareTo(). Returning negative, zero, or positive indicates less than, equal to, or greater than. Classes like String and Integer implement Comparable. Collections.sort() uses this interface to sort objects.",
    explanationChinese: "Comparable接口通过要求实现compareTo()为对象定义自然排序。返回负数、零或正数表示小于、等于或大于。String和Integer等类实现了Comparable。Collections.sort()使用此接口对对象排序。",
    diagram: "",
    terms: ["interface", "sorting", "comparable"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 67,
    q: "What is the difference between shallow copy and deep copy in Java?",
    qChinese: "Java中浅拷贝和深拷贝有什么区别？",
    options: [
      "A) Shallow copy is faster; deep copy is slower",
      "B) Shallow copy works only with primitives",
      "C) Shallow copy copies references; deep copy copies the actual objects",
      "D) Deep copy only works with arrays"
    ],
    optionsChinese: [
      "A) 浅拷贝更快；深拷贝更慢",
      "B) 浅拷贝仅适用于原始类型",
      "C) 浅拷贝复制引用；深拷贝复制实际对象",
      "D) 深拷贝仅适用于数组"
    ],
    answer: 2,
    explanation: "A shallow copy duplicates the object but shares references to nested objects. Modifying a nested object affects both copies. A deep copy duplicates everything, including nested objects, creating fully independent copies. Shallow copies are created by clone() by default; deep copies require manual implementation.",
    explanationChinese: "浅拷贝复制对象但共享对嵌套对象的引用。修改嵌套对象会影响两个副本。深拷贝复制所有内容，包括嵌套对象，创建完全独立的副本。clone()默认创建浅拷贝；深拷贝需要手动实现。",
    diagram: "",
    terms: ["object", "reference", "clone"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 68,
    q: "What is an enum in Java?",
    qChinese: "Java中的枚举是什么？",
    options: [
      "A) A type of exception",
      "B) A type of array",
      "C) A numeric data type",
      "D) A special class that represents a fixed set of constants"
    ],
    optionsChinese: [
      "A) 一种异常类型",
      "B) 一种数组类型",
      "C) 数字数据类型",
      "D) 表示一组固定常量的特殊类"
    ],
    answer: 3,
    explanation: "An enum is a special Java type used to define collections of constants. Enums are type-safe, can have fields, methods, and constructors, and implicitly extend java.lang.Enum. Common uses include days of the week, directions, or states. Enums are preferred over integer constants for fixed sets of values.",
    explanationChinese: "枚举是用于定义常量集合的特殊Java类型。枚举是类型安全的，可以有字段、方法和构造函数，并隐式继承java.lang.Enum。常见用途包括星期几、方向或状态。对于固定值集合，枚举优于整数常量。",
    diagram: "",
    terms: ["enum", "constant", "class"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 69,
    q: "What does the 'abstract' keyword mean when applied to a method?",
    qChinese: "'abstract'关键字应用于方法时是什么意思？",
    options: [
      "A) The method has no body and must be implemented by subclasses",
      "B) The method is optimized by the compiler",
      "C) The method can only accept abstract parameters",
      "D) The method is automatically synchronized"
    ],
    optionsChinese: [
      "A) 方法没有方法体，必须由子类实现",
      "B) 方法由编译器优化",
      "C) 方法只能接受抽象参数",
      "D) 方法自动同步"
    ],
    answer: 0,
    explanation: "An abstract method is declared without a body (no curly braces, ends with semicolon). It can only exist in an abstract class or interface. Concrete subclasses must provide an implementation. Abstract methods define a contract that subclasses must fulfill, enabling polymorphic behavior through a common interface.",
    explanationChinese: "抽象方法声明时没有方法体（没有花括号，以分号结尾）。它只能存在于抽象类或接口中。具体子类必须提供实现。抽象方法定义了子类必须满足的契约，通过共同接口实现多态行为。",
    diagram: "",
    terms: ["abstract_class", "method", "inheritance"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 70,
    q: "What is the hashCode() method used for in Java?",
    qChinese: "Java中hashCode()方法的用途是什么？",
    options: [
      "A) Encrypting object data",
      "B) Creating unique object IDs",
      "C) Generating an integer hash value for efficient storage in hash-based collections",
      "D) Comparing object sizes"
    ],
    optionsChinese: [
      "A) 加密对象数据",
      "B) 创建唯一对象ID",
      "C) 生成整数哈希值以在基于哈希的集合中高效存储",
      "D) 比较对象大小"
    ],
    answer: 2,
    explanation: "hashCode() returns an integer hash value used by hash-based collections like HashMap and HashSet. If two objects are equal according to equals(), they must have the same hashCode(). The contract between equals() and hashCode() must be maintained for correct behavior of hash-based data structures.",
    explanationChinese: "hashCode()返回一个整数哈希值，供HashMap和HashSet等基于哈希的集合使用。如果两个对象根据equals()相等，它们必须有相同的hashCode()。必须维护equals()和hashCode()之间的契约，以确保基于哈希的数据结构的正确行为。",
    diagram: "",
    terms: ["object", "hash_code", "collection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 71,
    q: "What is an anonymous inner class in Java?",
    qChinese: "Java中的匿名内部类是什么？",
    options: [
      "A) A class with all private members",
      "B) A class that cannot be accessed from outside",
      "C) A class with no name defined inline, often to implement an interface or extend a class",
      "D) A class with no constructor"
    ],
    optionsChinese: [
      "A) 所有成员都是私有的类",
      "B) 不能从外部访问的类",
      "C) 内联定义的无名类，通常用于实现接口或继承类",
      "D) 没有构造函数的类"
    ],
    answer: 2,
    explanation: "An anonymous inner class is a class without a name, declared and instantiated simultaneously. It is commonly used to provide quick implementations of interfaces or extend classes for one-time use. Lambda expressions (Java 8+) often replace anonymous inner classes for functional interfaces.",
    explanationChinese: "匿名内部类是没有名称的类，同时声明和实例化。它通常用于快速实现接口或为一次性使用而继承类。Lambda表达式（Java 8+）经常替代匿名内部类用于函数式接口。",
    diagram: "",
    terms: ["inner_class", "interface", "lambda"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 72,
    q: "What is upcasting and downcasting in Java?",
    qChinese: "Java中的向上转型和向下转型是什么？",
    options: [
      "A) Upcasting converts subclass to superclass reference; downcasting converts superclass to subclass reference",
      "B) Upcasting increases value; downcasting decreases value",
      "C) Both are the same as autoboxing",
      "D) Upcasting only works with interfaces"
    ],
    optionsChinese: [
      "A) 向上转型将子类转换为超类引用；向下转型将超类转换为子类引用",
      "B) 向上转型增加值；向下转型减少值",
      "C) 两者与自动装箱相同",
      "D) 向上转型仅适用于接口"
    ],
    answer: 0,
    explanation: "Upcasting treats a subclass object as its superclass type and is implicit (Animal a = new Dog()). Downcasting converts a superclass reference back to a subclass type and requires explicit casting (Dog d = (Dog) a). Downcasting can throw ClassCastException if the actual object is not the target type.",
    explanationChinese: "向上转型将子类对象视为其超类类型，是隐式的（Animal a = new Dog()）。向下转型将超类引用转换回子类类型，需要显式转换（Dog d = (Dog) a）。如果实际对象不是目标类型，向下转型可能抛出ClassCastException。",
    diagram: "",
    terms: ["inheritance", "type_casting", "polymorphism"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 73,
    q: "What is a static nested class in Java?",
    qChinese: "Java中的静态嵌套类是什么？",
    options: [
      "A) A nested class that can access outer class instance members",
      "B) A class that contains only static methods",
      "C) A nested class declared static that can only access outer class static members",
      "D) A class that cannot be instantiated"
    ],
    optionsChinese: [
      "A) 可以访问外部类实例成员的嵌套类",
      "B) 只包含静态方法的类",
      "C) 声明为static的嵌套类，只能访问外部类的静态成员",
      "D) 不能被实例化的类"
    ],
    answer: 2,
    explanation: "A static nested class is declared with the static modifier inside another class. Unlike inner classes, it cannot directly access instance members of the outer class. It can access static members of the outer class. It behaves like a top-level class but is logically grouped with the outer class for organizational purposes.",
    explanationChinese: "静态嵌套类在另一个类内用static修饰符声明。与内部类不同，它不能直接访问外部类的实例成员。它可以访问外部类的静态成员。它的行为像顶级类，但为了组织目的在逻辑上与外部类分组。",
    diagram: "",
    terms: ["class", "static", "inner_class"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 74,
    q: "What is the Iterable interface used for in Java?",
    qChinese: "Java中Iterable接口的用途是什么？",
    options: [
      "A) Making objects comparable",
      "B) Enabling multi-threading",
      "C) Making objects serializable",
      "D) Allowing objects to be used in enhanced for-each loops"
    ],
    optionsChinese: [
      "A) 使对象可比较",
      "B) 启用多线程",
      "C) 使对象可序列化",
      "D) 允许对象在增强for-each循环中使用"
    ],
    answer: 3,
    explanation: "The Iterable interface requires implementing the iterator() method, which returns an Iterator. Classes implementing Iterable can be used in enhanced for-each loops. All Collection classes implement Iterable. The Iterator provides hasNext() and next() methods for sequential element access.",
    explanationChinese: "Iterable接口要求实现iterator()方法，该方法返回一个Iterator。实现Iterable的类可以在增强for-each循环中使用。所有Collection类都实现了Iterable。Iterator提供hasNext()和next()方法用于顺序元素访问。",
    diagram: "",
    terms: ["interface", "iterator", "loop"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 75,
    q: "What is the difference between composition and inheritance?",
    qChinese: "组合和继承有什么区别？",
    options: [
      "A) Composition is 'is-a'; inheritance is 'has-a'",
      "B) They are identical concepts",
      "C) Composition is 'has-a'; inheritance is 'is-a'",
      "D) Composition only works with interfaces"
    ],
    optionsChinese: [
      "A) 组合是'是一个'；继承是'有一个'",
      "B) 它们是相同的概念",
      "C) 组合是'有一个'；继承是'是一个'",
      "D) 组合仅适用于接口"
    ],
    answer: 2,
    explanation: "Inheritance represents an 'is-a' relationship (Dog is-a Animal). Composition represents a 'has-a' relationship (Car has-a Engine). Composition is generally preferred because it provides looser coupling, greater flexibility, and easier testing. Inheritance creates tighter coupling between parent and child classes.",
    explanationChinese: "继承表示'是一个'关系（Dog是Animal）。组合表示'有一个'关系（Car有Engine）。通常优先使用组合，因为它提供更松散的耦合、更大的灵活性和更容易的测试。继承在父类和子类之间创建更紧密的耦合。",
    diagram: "",
    terms: ["composition", "inheritance", "class"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 76,
    q: "What is method hiding in Java?",
    qChinese: "Java中的方法隐藏是什么？",
    options: [
      "A) Making a method private",
      "B) Removing a method at runtime",
      "C) When a static method in a subclass has the same signature as a static method in the superclass",
      "D) Using encryption on method bodies"
    ],
    optionsChinese: [
      "A) 使方法为private",
      "B) 在运行时删除方法",
      "C) 当子类中的静态方法与超类中的静态方法具有相同签名时",
      "D) 对方法体使用加密"
    ],
    answer: 2,
    explanation: "Method hiding occurs when a subclass defines a static method with the same signature as a static method in the superclass. Unlike instance method overriding, static methods are resolved at compile time based on the reference type. This is static binding, not dynamic dispatch, so polymorphism does not apply.",
    explanationChinese: "方法隐藏发生在子类定义一个与超类中静态方法具有相同签名的静态方法时。与实例方法覆盖不同，静态方法在编译时根据引用类型解析。这是静态绑定而非动态分派，所以多态不适用。",
    diagram: "",
    terms: ["method", "static", "inheritance"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 77,
    q: "What is the purpose of the equals() method in Java?",
    qChinese: "Java中equals()方法的目的是什么？",
    options: [
      "A) Comparing primitive values",
      "B) Checking if an object is null",
      "C) Defining logical equality between objects",
      "D) Comparing memory sizes"
    ],
    optionsChinese: [
      "A) 比较原始值",
      "B) 检查对象是否为null",
      "C) 定义对象之间的逻辑相等性",
      "D) 比较内存大小"
    ],
    answer: 2,
    explanation: "The equals() method defines logical equality between objects. By default, it behaves like == (reference comparison). Classes should override equals() to compare meaningful fields. When overriding equals(), you must also override hashCode() to maintain the contract that equal objects have equal hash codes.",
    explanationChinese: "equals()方法定义对象之间的逻辑相等性。默认情况下，它的行为类似==（引用比较）。类应该覆盖equals()来比较有意义的字段。覆盖equals()时，还必须覆盖hashCode()以维护相等对象具有相等哈希码的契约。",
    diagram: "",
    terms: ["object", "equality", "method"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 78,
    q: "What is a functional interface in Java?",
    qChinese: "Java中的函数式接口是什么？",
    options: [
      "A) An interface with multiple abstract methods",
      "B) An interface with no methods",
      "C) An interface with exactly one abstract method",
      "D) An interface that extends Function class"
    ],
    optionsChinese: [
      "A) 具有多个抽象方法的接口",
      "B) 没有方法的接口",
      "C) 恰好有一个抽象方法的接口",
      "D) 继承Function类的接口"
    ],
    answer: 2,
    explanation: "A functional interface has exactly one abstract method, making it eligible for lambda expressions. The @FunctionalInterface annotation enforces this constraint. Common examples include Runnable, Comparator, and Predicate. Default and static methods do not count toward the single abstract method requirement.",
    explanationChinese: "函数式接口恰好有一个抽象方法，使其适用于lambda表达式。@FunctionalInterface注解强制此约束。常见示例包括Runnable、Comparator和Predicate。默认方法和静态方法不计入单一抽象方法要求。",
    diagram: "",
    terms: ["interface", "lambda", "functional_interface"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 79,
    q: "What is the Singleton design pattern?",
    qChinese: "单例设计模式是什么？",
    options: [
      "A) A pattern that uses only one thread",
      "B) A pattern where a class has only one method",
      "C) A pattern for single inheritance",
      "D) A pattern that creates exactly one instance of a class"
    ],
    optionsChinese: [
      "A) 只使用一个线程的模式",
      "B) 一个类只有一个方法的模式",
      "C) 单继承的模式",
      "D) 创建一个类恰好一个实例的模式"
    ],
    answer: 3,
    explanation: "The Singleton pattern ensures a class has only one instance and provides a global access point. It uses a private constructor, a private static instance field, and a public static getInstance() method. Common uses include database connections, configuration managers, and logging services.",
    explanationChinese: "单例模式确保一个类只有一个实例并提供全局访问点。它使用私有构造函数、私有静态实例字段和公共静态getInstance()方法。常见用途包括数据库连接、配置管理器和日志服务。",
    diagram: "",
    terms: ["design_pattern", "class", "constructor"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 80,
    q: "What is the difference between aggregation and composition in OOP?",
    qChinese: "OOP中聚合和组合有什么区别？",
    options: [
      "A) They are identical concepts",
      "B) Aggregation uses interfaces; composition uses classes",
      "C) In composition the contained object cannot exist without the container; in aggregation it can",
      "D) Composition is faster than aggregation"
    ],
    optionsChinese: [
      "A) 它们是相同的概念",
      "B) 聚合使用接口；组合使用类",
      "C) 在组合中被包含的对象不能独立于容器存在；在聚合中可以",
      "D) 组合比聚合更快"
    ],
    answer: 2,
    explanation: "Both represent 'has-a' relationships but differ in ownership. Composition implies strong ownership: the contained object's lifecycle depends on the container (Room-Wall). Aggregation implies weak ownership: the contained object can exist independently (Department-Employee). Composition creates tighter coupling between objects.",
    explanationChinese: "两者都表示'有一个'关系，但所有权不同。组合意味着强所有权：被包含对象的生命周期取决于容器（Room-Wall）。聚合意味着弱所有权：被包含对象可以独立存在（Department-Employee）。组合在对象之间创建更紧密的耦合。",
    diagram: "",
    terms: ["composition", "aggregation", "object"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 81,
    q: "What is the output of the following code?\ninterface Greeting {\n  default String greet() { return \"Hello\"; }\n}\nclass MyGreeting implements Greeting {\n  public String greet() { return \"Hi\"; }\n}\nGreeting g = new MyGreeting();\nSystem.out.println(g.greet());",
    qChinese: "以下代码的输出是什么？\ninterface Greeting {\n  default String greet() { return \"Hello\"; }\n}\nclass MyGreeting implements Greeting {\n  public String greet() { return \"Hi\"; }\n}\nGreeting g = new MyGreeting();\nSystem.out.println(g.greet());",
    options: [
      "A) Hi",
      "B) Hello",
      "C) Compilation error",
      "D) null"
    ],
    optionsChinese: [
      "A) Hi",
      "B) Hello",
      "C) 编译错误",
      "D) null"
    ],
    answer: 0,
    explanation: "MyGreeting overrides the default greet() method from the Greeting interface. When g.greet() is called, dynamic dispatch selects the overridden method in MyGreeting, printing \"Hi\". Default methods provide fallback implementations that can be overridden, following the same polymorphic behavior as class methods.",
    explanationChinese: "MyGreeting覆盖了Greeting接口中的默认greet()方法。调用g.greet()时，动态分派选择MyGreeting中被覆盖的方法，打印\"Hi\"。默认方法提供可被覆盖的后备实现，遵循与类方法相同的多态行为。",
    diagram: "",
    terms: ["interface", "default_method", "polymorphism"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 82,
    q: "Can an abstract class have a constructor in Java?",
    qChinese: "Java中的抽象类可以有构造函数吗？",
    options: [
      "A) Yes, and it is called when a subclass is instantiated",
      "B) No, abstract classes cannot have constructors",
      "C) Yes, but it must be private",
      "D) Only if the class has no abstract methods"
    ],
    optionsChinese: [
      "A) 是的，当子类被实例化时调用",
      "B) 不，抽象类不能有构造函数",
      "C) 是的，但它必须是私有的",
      "D) 仅当类没有抽象方法时"
    ],
    answer: 0,
    explanation: "Abstract classes can have constructors. Although you cannot instantiate an abstract class directly, its constructor is called through super() when a concrete subclass is created. This allows the abstract class to initialize its own fields and enforce invariants before the subclass constructor completes.",
    explanationChinese: "抽象类可以有构造函数。虽然不能直接实例化抽象类，但当创建具体子类时，其构造函数通过super()调用。这允许抽象类在子类构造函数完成之前初始化自己的字段并强制不变量。",
    diagram: "",
    terms: ["abstract_class", "constructor", "inheritance"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 83,
    q: "What is the principle of least privilege in OOP design?",
    qChinese: "OOP设计中的最小权限原则是什么？",
    options: [
      "A) Give every method public access",
      "B) Grant only the minimum access level necessary for each member",
      "C) Use only private classes",
      "D) Avoid using inheritance"
    ],
    optionsChinese: [
      "A) 给每个方法公共访问权限",
      "B) 仅授予每个成员必要的最低访问级别",
      "C) 仅使用私有类",
      "D) 避免使用继承"
    ],
    answer: 1,
    explanation: "The principle of least privilege states that code should be granted only the minimum access necessary. Make fields private, methods as restrictive as possible, and classes package-private when not needed externally. This reduces coupling, limits the impact of changes, and minimizes the attack surface for security.",
    explanationChinese: "最小权限原则规定代码应仅被授予必要的最低访问权限。使字段为private，方法尽可能限制访问，当不需要外部访问时使类为包私有。这减少了耦合，限制了变更的影响，并最小化了安全攻击面。",
    diagram: "",
    terms: ["encapsulation", "access_modifier", "design_pattern"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 84,
    q: "What is covariant return type in Java?",
    qChinese: "Java中的协变返回类型是什么？",
    options: [
      "A) A method that returns void",
      "B) A method that returns multiple types",
      "C) An overriding method can return a subtype of the return type declared in the parent",
      "D) A method with a generic return type"
    ],
    optionsChinese: [
      "A) 返回void的方法",
      "B) 返回多种类型的方法",
      "C) 覆盖方法可以返回父类声明的返回类型的子类型",
      "D) 具有泛型返回类型的方法"
    ],
    answer: 2,
    explanation: "Covariant return types, introduced in Java 5, allow an overriding method to return a more specific type than the overridden method. For example, if the parent returns Animal, the child can return Dog. This is type-safe because Dog is-a Animal, and it avoids unnecessary casting in client code.",
    explanationChinese: "协变返回类型在Java 5中引入，允许覆盖方法返回比被覆盖方法更具体的类型。例如，如果父类返回Animal，子类可以返回Dog。这是类型安全的，因为Dog是Animal，它避免了客户端代码中不必要的类型转换。",
    diagram: "",
    terms: ["overriding", "inheritance", "type_casting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 85,
    q: "What are generics in Java and why are they useful?",
    qChinese: "Java中的泛型是什么，为什么有用？",
    options: [
      "A) A way to create generic error messages",
      "B) Type parameters that enable type-safe code reuse without casting",
      "C) A way to generate code automatically",
      "D) Special classes that handle generic I/O"
    ],
    optionsChinese: [
      "A) 创建通用错误消息的方法",
      "B) 允许无需类型转换的类型安全代码重用的类型参数",
      "C) 自动生成代码的方法",
      "D) 处理通用I/O的特殊类"
    ],
    answer: 1,
    explanation: "Generics allow classes, interfaces, and methods to operate on parameterized types. For example, ArrayList<String> ensures only Strings are added, catching type errors at compile time rather than runtime. Generics eliminate the need for explicit casting and provide stronger type checking, improving code safety and readability.",
    explanationChinese: "泛型允许类、接口和方法对参数化类型进行操作。例如，ArrayList<String>确保只添加String，在编译时而非运行时捕获类型错误。泛型消除了显式类型转换的需要，提供更强的类型检查，提高代码安全性和可读性。",
    diagram: "",
    terms: ["generics", "class", "type_casting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 86,
    q: "What is the time complexity of accessing an element by index in an array?",
    qChinese: "按索引访问数组元素的时间复杂度是什么？",
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
    answer: 2,
    explanation: "Array access by index is O(1) constant time because elements are stored in contiguous memory. The address of any element can be calculated directly using: base_address + index * element_size. This makes arrays ideal for random access but less efficient for insertions and deletions in the middle.",
    explanationChinese: "按索引访问数组是O(1)常数时间，因为元素存储在连续内存中。任何元素的地址可以直接计算：基地址 + 索引 * 元素大小。这使数组非常适合随机访问，但在中间插入和删除效率较低。",
    diagram: "",
    terms: ["array", "time_complexity", "random_access"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 87,
    q: "What is the main difference between an array and an ArrayList in Java?",
    qChinese: "Java中数组和ArrayList的主要区别是什么？",
    options: [
      "A) Arrays are faster for all operations",
      "B) ArrayList can dynamically resize; arrays have fixed size",
      "C) Arrays can store objects; ArrayList cannot",
      "D) ArrayList uses less memory"
    ],
    optionsChinese: [
      "A) 数组在所有操作中都更快",
      "B) ArrayList可以动态调整大小；数组大小固定",
      "C) 数组可以存储对象；ArrayList不行",
      "D) ArrayList使用更少的内存"
    ],
    answer: 1,
    explanation: "Arrays have a fixed size set at creation time. ArrayList dynamically grows and shrinks as elements are added or removed. ArrayList uses an internal array that is resized (typically doubled) when capacity is exceeded. Arrays can store primitives directly; ArrayList requires wrapper classes for primitives.",
    explanationChinese: "数组在创建时大小固定。ArrayList随着元素的添加或删除动态增长和缩小。ArrayList使用内部数组，当容量超出时调整大小（通常翻倍）。数组可以直接存储原始类型；ArrayList需要原始类型的包装类。",
    diagram: "",
    terms: ["array", "arraylist", "dynamic_array"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 88,
    q: "What is the time complexity of inserting an element at the beginning of an ArrayList?",
    qChinese: "在ArrayList开头插入元素的时间复杂度是什么？",
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
    explanation: "Inserting at the beginning of an ArrayList requires shifting all existing elements one position to the right, which takes O(n) time. This is because ArrayList is backed by an array with contiguous storage. For frequent insertions at the front, LinkedList (O(1) for head insertion) is more efficient.",
    explanationChinese: "在ArrayList开头插入需要将所有现有元素向右移动一个位置，这需要O(n)时间。这是因为ArrayList由连续存储的数组支持。对于频繁的前端插入，LinkedList（头部插入O(1)）更高效。",
    diagram: "",
    terms: ["arraylist", "time_complexity", "linked_list"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 89,
    q: "What data structure follows the LIFO (Last In, First Out) principle?",
    qChinese: "哪种数据结构遵循LIFO（后进先出）原则？",
    options: [
      "A) Queue",
      "B) ArrayList",
      "C) Stack",
      "D) HashMap"
    ],
    optionsChinese: [
      "A) 队列",
      "B) ArrayList",
      "C) 栈",
      "D) HashMap"
    ],
    answer: 2,
    explanation: "A stack follows LIFO: the last element pushed onto the stack is the first to be popped off. Key operations are push (add to top), pop (remove from top), and peek (view top without removing). Stacks are used for function call tracking, undo operations, expression evaluation, and backtracking algorithms.",
    explanationChinese: "栈遵循LIFO：最后压入栈的元素第一个被弹出。关键操作是push（添加到顶部）、pop（从顶部移除）和peek（查看顶部但不移除）。栈用于函数调用跟踪、撤销操作、表达式求值和回溯算法。",
    diagram: "",
    terms: ["stack", "lifo", "data_structure"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 90,
    q: "What data structure follows the FIFO (First In, First Out) principle?",
    qChinese: "哪种数据结构遵循FIFO（先进先出）原则？",
    options: [
      "A) Queue",
      "B) Stack",
      "C) Binary Tree",
      "D) Hash Table"
    ],
    optionsChinese: [
      "A) 队列",
      "B) 栈",
      "C) 二叉树",
      "D) 哈希表"
    ],
    answer: 0,
    explanation: "A queue follows FIFO: elements are added at the rear (enqueue) and removed from the front (dequeue). This models real-world queues like waiting lines. Queues are used in BFS traversal, task scheduling, print job management, and message buffering in concurrent systems.",
    explanationChinese: "队列遵循FIFO：元素在后端添加（入队）并从前端移除（出队）。这模拟了现实世界的等待队列。队列用于BFS遍历、任务调度、打印作业管理和并发系统中的消息缓冲。",
    diagram: "",
    terms: ["queue", "fifo", "data_structure"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 91,
    q: "What is a singly linked list?",
    qChinese: "什么是单链表？",
    options: [
      "A) A list where each element has two links",
      "B) A list where each node points to the next node",
      "C) A list stored in contiguous memory",
      "D) A list with a fixed size"
    ],
    optionsChinese: [
      "A) 每个元素有两个链接的列表",
      "B) 每个节点指向下一个节点的列表",
      "C) 存储在连续内存中的列表",
      "D) 大小固定的列表"
    ],
    answer: 1,
    explanation: "A singly linked list consists of nodes where each node contains data and a reference (pointer) to the next node. The last node points to null. Unlike arrays, linked lists do not require contiguous memory. Insertion and deletion at known positions are O(1), but accessing an element by index requires O(n) traversal.",
    explanationChinese: "单链表由节点组成，每个节点包含数据和指向下一个节点的引用（指针）。最后一个节点指向null。与数组不同，链表不需要连续内存。在已知位置的插入和删除是O(1)，但按索引访问元素需要O(n)遍历。",
    diagram: "",
    terms: ["linked_list", "node", "pointer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 92,
    q: "What advantage does a doubly linked list have over a singly linked list?",
    qChinese: "双链表相对于单链表有什么优势？",
    options: [
      "A) Allows traversal in both directions",
      "B) Uses less memory",
      "C) Faster element access by index",
      "D) Simpler implementation"
    ],
    optionsChinese: [
      "A) 允许双向遍历",
      "B) 使用更少的内存",
      "C) 按索引更快地访问元素",
      "D) 实现更简单"
    ],
    answer: 0,
    explanation: "A doubly linked list has nodes with references to both the next and previous nodes, enabling bidirectional traversal. This makes operations like deletion of a known node O(1) without needing to find the predecessor. The trade-off is extra memory for the additional pointer and slightly more complex insertion logic.",
    explanationChinese: "双链表的节点有指向下一个和前一个节点的引用，实现双向遍历。这使已知节点的删除操作为O(1)，无需查找前驱。代价是额外指针的内存开销和稍微复杂的插入逻辑。",
    diagram: "",
    terms: ["linked_list", "node", "pointer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 93,
    q: "Which Java class implements a resizable array?",
    qChinese: "哪个Java类实现了可调整大小的数组？",
    options: [
      "A) ArrayList",
      "B) LinkedList",
      "C) Stack",
      "D) TreeSet"
    ],
    optionsChinese: [
      "A) ArrayList",
      "B) LinkedList",
      "C) Stack",
      "D) TreeSet"
    ],
    answer: 0,
    explanation: "ArrayList implements a dynamic resizable array. It stores elements in a contiguous internal array and automatically grows when capacity is exceeded, typically by 50% or doubling. ArrayList provides O(1) random access, O(1) amortized append, but O(n) insertion/deletion at arbitrary positions due to element shifting.",
    explanationChinese: "ArrayList实现了动态可调整大小的数组。它将元素存储在连续的内部数组中，当容量超出时自动增长，通常增长50%或翻倍。ArrayList提供O(1)随机访问、O(1)摊销追加，但由于元素移动，在任意位置的插入/删除为O(n)。",
    diagram: "",
    terms: ["arraylist", "dynamic_array", "data_structure"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 94,
    q: "What is the output of the following code?\nStack<Integer> s = new Stack<>();\ns.push(1); s.push(2); s.push(3);\nSystem.out.println(s.pop());\nSystem.out.println(s.peek());",
    qChinese: "以下代码的输出是什么？\nStack<Integer> s = new Stack<>();\ns.push(1); s.push(2); s.push(3);\nSystem.out.println(s.pop());\nSystem.out.println(s.peek());",
    options: [
      "A) 3 then 3",
      "B) 1 then 2",
      "C) 3 then 2",
      "D) 1 then 1"
    ],
    optionsChinese: [
      "A) 3然后3",
      "B) 1然后2",
      "C) 3然后2",
      "D) 1然后1"
    ],
    answer: 2,
    explanation: "After pushing 1, 2, 3, the stack top is 3. pop() removes and returns 3 (top), leaving 2 at the top. peek() returns 2 without removing it. The LIFO order means the most recently pushed element (3) is popped first. pop() modifies the stack; peek() does not.",
    explanationChinese: "推入1、2、3后，栈顶是3。pop()移除并返回3（顶部），留下2在顶部。peek()返回2但不移除。LIFO顺序意味着最近推入的元素（3）首先被弹出。pop()修改栈；peek()不修改。",
    diagram: "",
    terms: ["stack", "lifo", "method"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 95,
    q: "Which interface should you use for a FIFO queue in Java?",
    qChinese: "在Java中应该使用哪个接口实现FIFO队列？",
    options: [
      "A) List",
      "B) Set",
      "C) Queue",
      "D) Map"
    ],
    optionsChinese: [
      "A) List",
      "B) Set",
      "C) Queue",
      "D) Map"
    ],
    answer: 2,
    explanation: "The Queue interface in java.util provides FIFO operations. Common implementations include LinkedList and ArrayDeque. Key methods are offer() (add to rear), poll() (remove from front), and peek() (view front). LinkedList implements both List and Queue interfaces, making it versatile for different use cases.",
    explanationChinese: "java.util中的Queue接口提供FIFO操作。常见实现包括LinkedList和ArrayDeque。关键方法是offer()（添加到后端）、poll()（从前端移除）和peek()（查看前端）。LinkedList同时实现List和Queue接口，使其适用于不同的用例。",
    diagram: "",
    terms: ["queue", "interface", "fifo"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 96,
    q: "What is the time complexity of searching for an element in an unsorted array?",
    qChinese: "在未排序数组中搜索元素的时间复杂度是什么？",
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
    explanation: "Searching an unsorted array requires linear search, checking each element sequentially until the target is found or the end is reached. This is O(n) in the worst case. Binary search achieves O(log n) but requires a sorted array. For frequent searches, consider using a HashSet for O(1) average lookup.",
    explanationChinese: "搜索未排序数组需要线性搜索，按顺序检查每个元素直到找到目标或到达末尾。最坏情况下为O(n)。二分搜索可达O(log n)但需要已排序的数组。对于频繁搜索，考虑使用HashSet以获得O(1)平均查找。",
    diagram: "",
    terms: ["array", "searching", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 97,
    q: "What happens when an ArrayList needs to grow beyond its current capacity?",
    qChinese: "当ArrayList需要增长超出其当前容量时会发生什么？",
    options: [
      "A) It creates a new larger array and copies elements",
      "B) It throws an exception",
      "C) It uses a linked list for overflow",
      "D) It compresses existing elements"
    ],
    optionsChinese: [
      "A) 它创建一个更大的新数组并复制元素",
      "B) 它抛出异常",
      "C) 它对溢出使用链表",
      "D) 它压缩现有元素"
    ],
    answer: 0,
    explanation: "When an ArrayList exceeds its capacity, it allocates a new internal array (typically 1.5x the old size), copies all existing elements to the new array, and discards the old one. This resizing operation is O(n) but happens infrequently, resulting in O(1) amortized time for append operations.",
    explanationChinese: "当ArrayList超出其容量时，它分配一个新的内部数组（通常是旧大小的1.5倍），将所有现有元素复制到新数组，并丢弃旧数组。此调整大小操作为O(n)，但很少发生，导致追加操作的摊销时间为O(1)。",
    diagram: "",
    terms: ["arraylist", "dynamic_array", "memory_allocation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 98,
    q: "What is the difference between the add() and offer() methods in a Java Queue?",
    qChinese: "Java Queue中add()和offer()方法有什么区别？",
    options: [
      "A) add() adds to front; offer() adds to rear",
      "B) They are exactly the same",
      "C) add() throws exception on failure; offer() returns false",
      "D) offer() is faster than add()"
    ],
    optionsChinese: [
      "A) add()添加到前端；offer()添加到后端",
      "B) 它们完全相同",
      "C) add()在失败时抛出异常；offer()返回false",
      "D) offer()比add()更快"
    ],
    answer: 2,
    explanation: "Both add() and offer() insert an element into the queue. The difference is failure behavior: add() throws IllegalStateException if the queue is full (capacity-restricted), while offer() returns false. For bounded queues, offer() is preferred as it allows graceful handling of full queues without exceptions.",
    explanationChinese: "add()和offer()都向队列插入元素。区别在于失败行为：add()在队列满时（容量受限）抛出IllegalStateException，而offer()返回false。对于有界队列，offer()更受欢迎，因为它允许优雅地处理满队列而无需异常。",
    diagram: "",
    terms: ["queue", "method", "exception"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 99,
    q: "How do you iterate through an ArrayList in Java using an Iterator?",
    qChinese: "如何在Java中使用Iterator遍历ArrayList？",
    options: [
      "A) for (int i : list) {}",
      "B) while(list.hasElements()) { list.get(); }",
      "C) list.forEach(System.out.println);",
      "D) Iterator<String> it = list.iterator(); while(it.hasNext()) { it.next(); }"
    ],
    optionsChinese: [
      "A) for (int i : list) {}",
      "B) while(list.hasElements()) { list.get(); }",
      "C) list.forEach(System.out.println);",
      "D) Iterator<String> it = list.iterator(); while(it.hasNext()) { it.next(); }"
    ],
    answer: 3,
    explanation: "An Iterator is obtained via list.iterator(). The hasNext() method checks if more elements exist, and next() returns the next element. Iterators also support safe removal during iteration via remove(). Using a for-each loop is simpler but does not allow modification during traversal.",
    explanationChinese: "通过list.iterator()获取Iterator。hasNext()方法检查是否存在更多元素，next()返回下一个元素。Iterator还支持通过remove()在迭代期间安全删除。使用for-each循环更简单，但不允许在遍历期间修改。",
    diagram: "",
    terms: ["iterator", "arraylist", "loop"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 100,
    q: "What is a ConcurrentModificationException in Java?",
    qChinese: "Java中的ConcurrentModificationException是什么？",
    options: [
      "A) Error when a collection is modified while being iterated using a for-each loop",
      "B) Error when two threads access a variable simultaneously",
      "C) Error when a file is accessed by two programs",
      "D) Error when casting between incompatible types"
    ],
    optionsChinese: [
      "A) 使用for-each循环迭代时修改集合的错误",
      "B) 两个线程同时访问变量时的错误",
      "C) 两个程序访问文件时的错误",
      "D) 不兼容类型之间转换时的错误"
    ],
    answer: 0,
    explanation: "ConcurrentModificationException is thrown when a collection is structurally modified (add/remove) during iteration with a for-each loop or standard iterator. To safely modify during iteration, use Iterator.remove() or use a ConcurrentHashMap/CopyOnWriteArrayList for concurrent access scenarios.",
    explanationChinese: "当使用for-each循环或标准迭代器迭代期间对集合进行结构修改（添加/删除）时，抛出ConcurrentModificationException。要在迭代期间安全修改，使用Iterator.remove()或使用ConcurrentHashMap/CopyOnWriteArrayList处理并发访问场景。",
    diagram: "",
    terms: ["exception", "iterator", "collection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 101,
    q: "What is the time complexity of inserting a node at the head of a singly linked list?",
    qChinese: "在单链表头部插入节点的时间复杂度是什么？",
    options: [
      "A) O(n)",
      "B) O(log n)",
      "C) O(n^2)",
      "D) O(1)"
    ],
    optionsChinese: [
      "A) O(n)",
      "B) O(log n)",
      "C) O(n^2)",
      "D) O(1)"
    ],
    answer: 3,
    explanation: "Inserting at the head of a singly linked list is O(1) because you only need to create a new node, set its next pointer to the current head, and update the head reference. No elements need to be shifted. This is a major advantage of linked lists over arrays for front insertions.",
    explanationChinese: "在单链表头部插入为O(1)，因为只需要创建一个新节点，将其next指针设置为当前头部，并更新头引用。不需要移动任何元素。这是链表在前端插入方面相对于数组的主要优势。",
    diagram: "",
    terms: ["linked_list", "time_complexity", "insertion"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 102,
    q: "What is a circular linked list?",
    qChinese: "什么是循环链表？",
    options: [
      "A) A linked list where the last node points back to the first node",
      "B) A linked list stored in a circular array",
      "C) A doubly linked list",
      "D) A linked list with two head pointers"
    ],
    optionsChinese: [
      "A) 最后一个节点指回第一个节点的链表",
      "B) 存储在循环数组中的链表",
      "C) 双链表",
      "D) 有两个头指针的链表"
    ],
    answer: 0,
    explanation: "In a circular linked list, the last node's next pointer refers back to the first node instead of null, forming a circle. This is useful for round-robin scheduling, circular buffers, and applications where you need continuous cycling through elements. Traversal must check for revisiting the start node to avoid infinite loops.",
    explanationChinese: "在循环链表中，最后一个节点的next指针指回第一个节点而不是null，形成一个环。这对循环调度、循环缓冲区和需要持续循环遍历元素的应用很有用。遍历必须检查是否重新访问起始节点以避免无限循环。",
    diagram: "",
    terms: ["linked_list", "circular_list", "node"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 103,
    q: "What is the advantage of using ArrayDeque over Stack in Java?",
    qChinese: "在Java中使用ArrayDeque代替Stack有什么优势？",
    options: [
      "A) ArrayDeque is thread-safe",
      "B) ArrayDeque is faster because it is not synchronized and uses a resizable array",
      "C) ArrayDeque supports random access",
      "D) Stack has been removed from Java"
    ],
    optionsChinese: [
      "A) ArrayDeque是线程安全的",
      "B) ArrayDeque更快因为它不是同步的且使用可调整大小的数组",
      "C) ArrayDeque支持随机访问",
      "D) Stack已从Java中移除"
    ],
    answer: 1,
    explanation: "ArrayDeque is preferred over Stack because Stack extends Vector, which is synchronized (thread-safe but slower). ArrayDeque is not synchronized, making it faster for single-threaded use. ArrayDeque also implements the Deque interface, supporting both stack (LIFO) and queue (FIFO) operations efficiently.",
    explanationChinese: "ArrayDeque优于Stack，因为Stack继承自Vector，Vector是同步的（线程安全但更慢）。ArrayDeque不是同步的，使其在单线程使用中更快。ArrayDeque还实现了Deque接口，高效支持栈（LIFO）和队列（FIFO）操作。",
    diagram: "",
    terms: ["stack", "queue", "data_structure"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 104,
    q: "What is the purpose of the Collections.sort() method?",
    qChinese: "Collections.sort()方法的目的是什么？",
    options: [
      "A) Sorting arrays only",
      "B) Sorting strings alphabetically only",
      "C) Sorting Map entries",
      "D) Sorting any List implementation in natural or custom order"
    ],
    optionsChinese: [
      "A) 仅排序数组",
      "B) 仅按字母顺序排序字符串",
      "C) 排序Map条目",
      "D) 按自然或自定义顺序排序任何List实现"
    ],
    answer: 3,
    explanation: "Collections.sort() sorts a List in place. With one argument, it sorts by natural ordering (elements must implement Comparable). With a Comparator argument, it sorts by custom criteria. It uses TimSort algorithm (a hybrid merge sort and insertion sort) with O(n log n) time complexity.",
    explanationChinese: "Collections.sort()原地排序List。使用一个参数时，按自然顺序排序（元素必须实现Comparable）。使用Comparator参数时，按自定义条件排序。它使用TimSort算法（归并排序和插入排序的混合），时间复杂度为O(n log n)。",
    diagram: "",
    terms: ["sorting", "collection", "comparable"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 105,
    q: "What is the difference between HashMap and TreeMap in Java?",
    qChinese: "Java中HashMap和TreeMap有什么区别？",
    options: [
      "A) HashMap maintains insertion order; TreeMap does not",
      "B) They have identical performance",
      "C) TreeMap allows null keys; HashMap does not",
      "D) HashMap has O(1) average operations; TreeMap has O(log n) and maintains sorted key order"
    ],
    optionsChinese: [
      "A) HashMap维护插入顺序；TreeMap不维护",
      "B) 它们性能相同",
      "C) TreeMap允许null键；HashMap不允许",
      "D) HashMap平均操作为O(1)；TreeMap为O(log n)且维护有序键顺序"
    ],
    answer: 3,
    explanation: "HashMap provides O(1) average-case for get/put using hash table structure but does not maintain order. TreeMap uses a Red-Black tree giving O(log n) for get/put but keeps keys in sorted order. Use HashMap for performance; use TreeMap when sorted key traversal is needed.",
    explanationChinese: "HashMap使用哈希表结构提供O(1)平均情况的get/put，但不维护顺序。TreeMap使用红黑树，get/put为O(log n)，但保持键有序。性能优先时使用HashMap；需要有序键遍历时使用TreeMap。",
    diagram: "",
    terms: ["hash_map", "tree_map", "data_structure"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 106,
    q: "How do you implement a queue using two stacks?",
    qChinese: "如何使用两个栈实现队列？",
    options: [
      "A) It is not possible to implement a queue with stacks",
      "B) Push to both stacks simultaneously",
      "C) Use one stack for even elements and one for odd",
      "D) Push to stack1; to dequeue, move all from stack1 to stack2 and pop stack2"
    ],
    optionsChinese: [
      "A) 不可能用栈实现队列",
      "B) 同时压入两个栈",
      "C) 一个栈用于偶数元素，一个用于奇数",
      "D) 压入stack1；出队时，将所有元素从stack1移到stack2并从stack2弹出"
    ],
    answer: 3,
    explanation: "Use stack1 for enqueue (push) operations. For dequeue, if stack2 is empty, transfer all elements from stack1 to stack2 (reversing the order), then pop from stack2. This achieves amortized O(1) time per operation. This is a classic interview question demonstrating how data structures can simulate each other.",
    explanationChinese: "使用stack1进行入队（push）操作。出队时，如果stack2为空，将所有元素从stack1转移到stack2（反转顺序），然后从stack2弹出。这实现了每个操作的摊销O(1)时间。这是一个经典面试题，展示了数据结构如何相互模拟。",
    diagram: "",
    terms: ["queue", "stack", "data_structure"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 107,
    q: "What is a priority queue?",
    qChinese: "什么是优先队列？",
    options: [
      "A) A faster version of a regular queue",
      "B) A queue where elements are processed by priority rather than insertion order",
      "C) A queue with limited capacity",
      "D) A queue that only stores integers"
    ],
    optionsChinese: [
      "A) 普通队列的更快版本",
      "B) 按优先级而非插入顺序处理元素的队列",
      "C) 容量有限的队列",
      "D) 只存储整数的队列"
    ],
    answer: 1,
    explanation: "A priority queue serves elements based on their priority rather than insertion order. In Java, PriorityQueue uses a min-heap by default, dequeuing the smallest element first. Custom ordering can be achieved with a Comparator. Operations offer/poll are O(log n). Used in Dijkstra's algorithm and task scheduling.",
    explanationChinese: "优先队列根据优先级而非插入顺序服务元素。在Java中，PriorityQueue默认使用最小堆，先出队最小元素。可以通过Comparator实现自定义排序。offer/poll操作为O(log n)。用于Dijkstra算法和任务调度。",
    diagram: "",
    terms: ["queue", "heap", "sorting"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 108,
    q: "What is the difference between a HashSet and a TreeSet in Java?",
    qChinese: "Java中HashSet和TreeSet有什么区别？",
    options: [
      "A) HashSet has O(1) average operations; TreeSet has O(log n) and maintains sorted order",
      "B) HashSet maintains sorted order; TreeSet does not",
      "C) TreeSet allows duplicates; HashSet does not",
      "D) Both have the same performance characteristics"
    ],
    optionsChinese: [
      "A) HashSet平均操作为O(1)；TreeSet为O(log n)且维护排序顺序",
      "B) HashSet维护排序顺序；TreeSet不维护",
      "C) TreeSet允许重复；HashSet不允许",
      "D) 两者有相同的性能特征"
    ],
    answer: 0,
    explanation: "HashSet uses a hash table with O(1) average-case add/remove/contains but no ordering guarantee. TreeSet uses a Red-Black tree with O(log n) operations but maintains elements in sorted order. Neither allows duplicates. Choose HashSet for performance; TreeSet when sorted iteration is required.",
    explanationChinese: "HashSet使用哈希表，add/remove/contains平均为O(1)，但不保证顺序。TreeSet使用红黑树，操作为O(log n)，但维护元素有序。两者都不允许重复。性能优先选HashSet；需要有序迭代时选TreeSet。",
    diagram: "",
    terms: ["hash_set", "tree_set", "data_structure"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 109,
    q: "What is the time complexity of deleting a node from the middle of a singly linked list, given a reference to the previous node?",
    qChinese: "给定前一个节点的引用，从单链表中间删除节点的时间复杂度是什么？",
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
    explanation: "With a reference to the previous node, deletion is O(1): simply set prev.next = prev.next.next, bypassing the node to delete. Without the previous reference, finding it requires O(n) traversal from the head. This is why doubly linked lists are advantageous: each node already has a reference to its predecessor.",
    explanationChinese: "有前一个节点的引用时，删除为O(1)：只需设置prev.next = prev.next.next，绕过要删除的节点。没有前一个引用时，从头部找到它需要O(n)遍历。这就是双链表的优势：每个节点已经有对其前驱的引用。",
    diagram: "",
    terms: ["linked_list", "time_complexity", "deletion"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 110,
    q: "Which Java collection class is best for checking if an element exists in a large dataset?",
    qChinese: "哪个Java集合类最适合检查元素是否存在于大型数据集中？",
    options: [
      "A) ArrayList",
      "B) LinkedList",
      "C) TreeMap",
      "D) HashSet"
    ],
    optionsChinese: [
      "A) ArrayList",
      "B) LinkedList",
      "C) TreeMap",
      "D) HashSet"
    ],
    answer: 3,
    explanation: "HashSet provides O(1) average-time contains() operation using hash-based lookup. ArrayList and LinkedList require O(n) linear search. TreeMap provides O(log n) but is designed for key-value pairs. For pure membership testing on large datasets, HashSet is the most efficient choice.",
    explanationChinese: "HashSet使用基于哈希的查找提供O(1)平均时间的contains()操作。ArrayList和LinkedList需要O(n)线性搜索。TreeMap提供O(log n)但设计用于键值对。对于大型数据集上的纯成员测试，HashSet是最高效的选择。",
    diagram: "",
    terms: ["hash_set", "time_complexity", "searching"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 111,
    q: "What are the main operations of a stack?",
    qChinese: "栈的主要操作是什么？",
    options: [
      "A) push, pop, peek",
      "B) insert, delete, search",
      "C) enqueue, dequeue, front",
      "D) add, remove, get"
    ],
    optionsChinese: [
      "A) push、pop、peek",
      "B) insert、delete、search",
      "C) enqueue、dequeue、front",
      "D) add、remove、get"
    ],
    answer: 0,
    explanation: "The three fundamental stack operations are: push (add element to top), pop (remove and return top element), and peek (view top element without removing). All three operations run in O(1) time. A stack may also provide isEmpty() and size() utility methods for checking its state.",
    explanationChinese: "栈的三个基本操作是：push（将元素添加到顶部）、pop（移除并返回顶部元素）和peek（查看顶部元素但不移除）。三个操作都在O(1)时间运行。栈还可能提供isEmpty()和size()实用方法来检查其状态。",
    diagram: "",
    terms: ["stack", "method", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 112,
    q: "What is a HashMap in Java?",
    qChinese: "Java中的HashMap是什么？",
    options: [
      "A) A sorted collection of unique elements",
      "B) A resizable array",
      "C) A key-value pair data structure with O(1) average access time",
      "D) A thread-safe collection"
    ],
    optionsChinese: [
      "A) 唯一元素的排序集合",
      "B) 可调整大小的数组",
      "C) 具有O(1)平均访问时间的键值对数据结构",
      "D) 线程安全的集合"
    ],
    answer: 2,
    explanation: "HashMap stores key-value pairs using a hash table. Keys are hashed to determine storage location (bucket). It provides O(1) average-case for get, put, and remove. HashMap allows one null key and multiple null values. It is not synchronized; use ConcurrentHashMap for thread-safe operations.",
    explanationChinese: "HashMap使用哈希表存储键值对。键被哈希以确定存储位置（桶）。它为get、put和remove提供O(1)平均情况。HashMap允许一个null键和多个null值。它不是同步的；对线程安全操作使用ConcurrentHashMap。",
    diagram: "",
    terms: ["hash_map", "data_structure", "hash_code"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 113,
    q: "What happens when two different keys have the same hash code in a HashMap?",
    qChinese: "当HashMap中两个不同的键有相同的哈希码时会发生什么？",
    options: [
      "A) The second key replaces the first",
      "B) The HashMap automatically resizes",
      "C) The HashMap throws an exception",
      "D) A hash collision occurs and elements are stored in the same bucket using a linked list or tree"
    ],
    optionsChinese: [
      "A) 第二个键替换第一个",
      "B) HashMap自动调整大小",
      "C) HashMap抛出异常",
      "D) 发生哈希冲突，元素使用链表或树存储在同一桶中"
    ],
    answer: 3,
    explanation: "When a hash collision occurs, multiple entries map to the same bucket. Java HashMap uses separate chaining: elements in the same bucket are stored in a linked list. Since Java 8, when a bucket exceeds 8 entries, the linked list converts to a balanced tree for O(log n) worst-case lookup.",
    explanationChinese: "当发生哈希冲突时，多个条目映射到同一个桶。Java HashMap使用分离链接法：同一桶中的元素存储在链表中。从Java 8起，当桶超过8个条目时，链表转换为平衡树以实现O(log n)最坏情况查找。",
    diagram: "",
    terms: ["hash_map", "hash_code", "collision"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 114,
    q: "What is the default initial capacity and load factor of a Java HashMap?",
    qChinese: "Java HashMap的默认初始容量和负载因子是什么？",
    options: [
      "A) Capacity 10, load factor 0.5",
      "B) Capacity 8, load factor 0.6",
      "C) Capacity 32, load factor 0.8",
      "D) Capacity 16, load factor 0.75"
    ],
    optionsChinese: [
      "A) 容量10，负载因子0.5",
      "B) 容量8，负载因子0.6",
      "C) 容量32，负载因子0.8",
      "D) 容量16，负载因子0.75"
    ],
    answer: 3,
    explanation: "HashMap has a default initial capacity of 16 buckets and a load factor of 0.75. When the number of entries exceeds capacity * load_factor (12 for default), the HashMap rehashes and doubles its capacity. The 0.75 load factor balances memory usage and collision probability for optimal performance.",
    explanationChinese: "HashMap的默认初始容量为16个桶，负载因子为0.75。当条目数超过容量 * 负载因子（默认为12）时，HashMap重新哈希并将容量翻倍。0.75的负载因子平衡了内存使用和冲突概率以获得最佳性能。",
    diagram: "",
    terms: ["hash_map", "memory_allocation", "data_structure"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 115,
    q: "What is the difference between poll() and remove() in a Java Queue?",
    qChinese: "Java Queue中poll()和remove()有什么区别？",
    options: [
      "A) poll() blocks until an element is available",
      "B) They behave identically",
      "C) remove() is faster",
      "D) poll() returns null when empty; remove() throws NoSuchElementException"
    ],
    optionsChinese: [
      "A) poll()阻塞直到有元素可用",
      "B) 它们行为相同",
      "C) remove()更快",
      "D) poll()在为空时返回null；remove()抛出NoSuchElementException"
    ],
    answer: 3,
    explanation: "Both poll() and remove() retrieve and remove the head of the queue. The difference is when the queue is empty: poll() returns null gracefully, while remove() throws NoSuchElementException. In general, use poll() when emptiness is expected, and remove() when emptiness indicates a programming error.",
    explanationChinese: "poll()和remove()都检索并移除队列头部。区别在于队列为空时：poll()优雅地返回null，而remove()抛出NoSuchElementException。一般来说，当预期队列为空时使用poll()，当空表示编程错误时使用remove()。",
    diagram: "",
    terms: ["queue", "method", "exception"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 116,
    q: "What is a Deque in Java?",
    qChinese: "Java中的Deque是什么？",
    options: [
      "A) A double-ended queue that supports insertion and removal at both ends",
      "B) A queue that only allows removal",
      "C) A synchronized queue",
      "D) A queue with priority ordering"
    ],
    optionsChinese: [
      "A) 支持在两端插入和移除的双端队列",
      "B) 只允许移除的队列",
      "C) 同步队列",
      "D) 具有优先级排序的队列"
    ],
    answer: 0,
    explanation: "Deque (Double-Ended Queue) supports insertion and removal at both front and rear. It can function as both a stack (LIFO) and a queue (FIFO). ArrayDeque and LinkedList implement Deque. Key methods include offerFirst(), offerLast(), pollFirst(), pollLast(). ArrayDeque is the preferred implementation for most cases.",
    explanationChinese: "Deque（双端队列）支持在前端和后端的插入和移除。它可以同时作为栈（LIFO）和队列（FIFO）使用。ArrayDeque和LinkedList实现了Deque。关键方法包括offerFirst()、offerLast()、pollFirst()、pollLast()。ArrayDeque是大多数情况的首选实现。",
    diagram: "",
    terms: ["queue", "stack", "data_structure"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 117,
    q: "What is the time complexity of the contains() method for a LinkedList?",
    qChinese: "LinkedList的contains()方法的时间复杂度是什么？",
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
    explanation: "LinkedList.contains() must traverse nodes sequentially from the head to find the target element, resulting in O(n) worst-case time. Unlike arrays, linked lists do not support random access or binary search. For frequent lookups, a HashSet (O(1) average) or ArrayList with binary search on sorted data is more efficient.",
    explanationChinese: "LinkedList.contains()必须从头部顺序遍历节点以找到目标元素，导致O(n)最坏情况时间。与数组不同，链表不支持随机访问或二分搜索。对于频繁查找，HashSet（平均O(1)）或对排序数据使用二分搜索的ArrayList更高效。",
    diagram: "",
    terms: ["linked_list", "time_complexity", "searching"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 118,
    q: "How can you reverse an ArrayList in Java?",
    qChinese: "如何在Java中反转ArrayList？",
    options: [
      "A) list.reverse()",
      "B) Collections.reverse(list)",
      "C) Arrays.reverse(list)",
      "D) list.flip()"
    ],
    optionsChinese: [
      "A) list.reverse()",
      "B) Collections.reverse(list)",
      "C) Arrays.reverse(list)",
      "D) list.flip()"
    ],
    answer: 1,
    explanation: "Collections.reverse(list) reverses the order of elements in the specified list in place. ArrayList does not have a built-in reverse() method. Arrays.reverse() does not exist in Java standard library. The Collections utility class provides many helpful methods for manipulating collections, including sort, shuffle, and reverse.",
    explanationChinese: "Collections.reverse(list)原地反转指定列表中元素的顺序。ArrayList没有内置的reverse()方法。Java标准库中不存在Arrays.reverse()。Collections实用类提供了许多有用的集合操作方法，包括sort、shuffle和reverse。",
    diagram: "",
    terms: ["arraylist", "collection", "method"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 119,
    q: "What is the difference between an array and a linked list in terms of memory allocation?",
    qChinese: "数组和链表在内存分配方面有什么区别？",
    options: [
      "A) Arrays use contiguous memory; linked lists use non-contiguous nodes connected by pointers",
      "B) Both use contiguous memory",
      "C) Linked lists use contiguous memory; arrays do not",
      "D) Both use non-contiguous memory"
    ],
    optionsChinese: [
      "A) 数组使用连续内存；链表使用由指针连接的非连续节点",
      "B) 两者都使用连续内存",
      "C) 链表使用连续内存；数组不使用",
      "D) 两者都使用非连续内存"
    ],
    answer: 0,
    explanation: "Arrays store elements in contiguous memory blocks, enabling direct index calculation for O(1) access. Linked lists store elements in separate node objects scattered in memory, each containing data and a pointer to the next node. This non-contiguous storage allows efficient insertion/deletion but sacrifices cache locality.",
    explanationChinese: "数组在连续内存块中存储元素，实现O(1)访问的直接索引计算。链表将元素存储在分散在内存中的单独节点对象中，每个节点包含数据和指向下一个节点的指针。这种非连续存储允许高效的插入/删除，但牺牲了缓存局部性。",
    diagram: "",
    terms: ["array", "linked_list", "memory_allocation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 120,
    q: "What is the Java Collections Framework?",
    qChinese: "Java集合框架是什么？",
    options: [
      "A) A unified architecture for representing and manipulating collections of objects",
      "B) A set of C++ libraries ported to Java",
      "C) A graphical user interface library",
      "D) A testing framework for Java"
    ],
    optionsChinese: [
      "A) 用于表示和操作对象集合的统一架构",
      "B) 移植到Java的C++库集合",
      "C) 图形用户界面库",
      "D) Java的测试框架"
    ],
    answer: 0,
    explanation: "The Java Collections Framework (JCF) provides interfaces (List, Set, Map, Queue), implementations (ArrayList, HashSet, HashMap), and algorithms (sort, search). It standardizes how collections are created and manipulated, promoting code reuse. The framework is in the java.util package and is fundamental to Java programming.",
    explanationChinese: "Java集合框架（JCF）提供接口（List、Set、Map、Queue）、实现（ArrayList、HashSet、HashMap）和算法（排序、搜索）。它标准化了集合的创建和操作方式，促进代码重用。该框架在java.util包中，是Java编程的基础。",
    diagram: "",
    terms: ["collection", "interface", "data_structure"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 121,
    q: "How do you convert an array to an ArrayList in Java?",
    qChinese: "如何在Java中将数组转换为ArrayList？",
    options: [
      "A) Arrays.asList(array)",
      "B) new ArrayList(array)",
      "C) ArrayList.fromArray(array)",
      "D) Collections.toList(array)"
    ],
    optionsChinese: [
      "A) Arrays.asList(array)",
      "B) new ArrayList(array)",
      "C) ArrayList.fromArray(array)",
      "D) Collections.toList(array)"
    ],
    answer: 0,
    explanation: "Arrays.asList(array) converts an array to a fixed-size List backed by the original array. To get a modifiable ArrayList, wrap it: new ArrayList<>(Arrays.asList(array)). Note that asList() returns a fixed-size list; add/remove operations will throw UnsupportedOperationException on the returned list.",
    explanationChinese: "Arrays.asList(array)将数组转换为由原始数组支持的固定大小List。要获得可修改的ArrayList，请包装它：new ArrayList<>(Arrays.asList(array))。注意asList()返回固定大小列表；在返回的列表上执行add/remove操作会抛出UnsupportedOperationException。",
    diagram: "",
    terms: ["array", "arraylist", "method"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 122,
    q: "What is the purpose of the ListIterator in Java?",
    qChinese: "Java中ListIterator的目的是什么？",
    options: [
      "A) Iterating over Maps",
      "B) Iterating over arrays only",
      "C) Parallel iteration of lists",
      "D) Bidirectional iteration over a List with modification support"
    ],
    optionsChinese: [
      "A) 遍历Map",
      "B) 仅遍历数组",
      "C) 列表的并行迭代",
      "D) 支持修改的List双向迭代"
    ],
    answer: 3,
    explanation: "ListIterator extends Iterator and adds bidirectional traversal with previous() and hasPrevious() methods. It also supports add(), set(), and nextIndex()/previousIndex(). Unlike basic Iterator, ListIterator can modify the list during iteration and traverse in both forward and backward directions.",
    explanationChinese: "ListIterator扩展了Iterator，添加了使用previous()和hasPrevious()方法的双向遍历。它还支持add()、set()和nextIndex()/previousIndex()。与基本Iterator不同，ListIterator可以在迭代期间修改列表并在前后两个方向遍历。",
    diagram: "",
    terms: ["iterator", "linked_list", "method"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 123,
    q: "What is the amortized time complexity of adding an element to the end of an ArrayList?",
    qChinese: "向ArrayList末尾添加元素的摊销时间复杂度是什么？",
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
    explanation: "Adding to the end of an ArrayList is O(1) amortized time. Most additions simply place the element at the next available position. Occasionally, when the internal array is full, resizing (O(n) copy) occurs. However, since resizing doubles capacity, the cost is spread across many additions, averaging O(1) per operation.",
    explanationChinese: "向ArrayList末尾添加是O(1)摊销时间。大多数添加只是将元素放在下一个可用位置。偶尔，当内部数组满时，会发生调整大小（O(n)复制）。但由于调整大小将容量翻倍，成本分摊到多次添加中，每次操作平均为O(1)。",
    diagram: "",
    terms: ["arraylist", "time_complexity", "amortized"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 124,
    q: "What is the purpose of the compareTo() method in the Comparable interface?",
    qChinese: "Comparable接口中compareTo()方法的目的是什么？",
    options: [
      "A) Check equality of two objects",
      "B) Convert an object to a string",
      "C) Define natural ordering by returning negative, zero, or positive values",
      "D) Clone an object"
    ],
    optionsChinese: [
      "A) 检查两个对象的相等性",
      "B) 将对象转换为字符串",
      "C) 通过返回负数、零或正数定义自然排序",
      "D) 克隆一个对象"
    ],
    answer: 2,
    explanation: "compareTo() returns a negative integer if this object is less than the argument, zero if equal, and a positive integer if greater. It defines the natural ordering used by Collections.sort() and sorted collections like TreeSet. The contract requires consistency with equals(): if compareTo returns 0, equals should return true.",
    explanationChinese: "compareTo()在此对象小于参数时返回负整数，相等时返回零，大于时返回正整数。它定义了Collections.sort()和TreeSet等排序集合使用的自然排序。契约要求与equals()一致：如果compareTo返回0，equals应返回true。",
    diagram: "",
    terms: ["comparable", "sorting", "interface"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 125,
    q: "What is the difference between fail-fast and fail-safe iterators in Java?",
    qChinese: "Java中快速失败和安全失败迭代器有什么区别？",
    options: [
      "A) Fail-fast throws ConcurrentModificationException on modification; fail-safe works on a copy",
      "B) Fail-fast is slower; fail-safe is faster",
      "C) Fail-safe throws exceptions; fail-fast does not",
      "D) They are the same concept"
    ],
    optionsChinese: [
      "A) 快速失败在修改时抛出ConcurrentModificationException；安全失败在副本上工作",
      "B) 快速失败更慢；安全失败更快",
      "C) 安全失败抛出异常；快速失败不抛出",
      "D) 它们是相同的概念"
    ],
    answer: 0,
    explanation: "Fail-fast iterators (ArrayList, HashMap) detect structural modification during iteration and throw ConcurrentModificationException. Fail-safe iterators (ConcurrentHashMap, CopyOnWriteArrayList) work on a copy of the collection, so modifications do not affect iteration. Fail-safe avoids exceptions but may not reflect the latest changes.",
    explanationChinese: "快速失败迭代器（ArrayList、HashMap）在迭代期间检测到结构修改并抛出ConcurrentModificationException。安全失败迭代器（ConcurrentHashMap、CopyOnWriteArrayList）在集合副本上工作，因此修改不影响迭代。安全失败避免了异常但可能不反映最新更改。",
    diagram: "",
    terms: ["iterator", "exception", "collection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 126,
    q: "What are the two essential components of a recursive function?",
    qChinese: "递归函数的两个基本组成部分是什么？",
    options: [
      "A) Base case and recursive case",
      "B) Header and body",
      "C) Input and output",
      "D) Loop and condition"
    ],
    optionsChinese: [
      "A) 基本情况和递归情况",
      "B) 头部和主体",
      "C) 输入和输出",
      "D) 循环和条件"
    ],
    answer: 0,
    explanation: "Every recursive function needs a base case (termination condition that stops recursion) and a recursive case (the function calls itself with a smaller or simpler input). Without a base case, the function recurses infinitely, causing a StackOverflowError. The recursive case must progress toward the base case.",
    explanationChinese: "每个递归函数都需要基本情况（停止递归的终止条件）和递归情况（函数用更小或更简单的输入调用自身）。没有基本情况，函数会无限递归，导致StackOverflowError。递归情况必须向基本情况推进。",
    diagram: "",
    terms: ["recursion", "base_case", "stack"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 127,
    q: "What is the output of the following recursive method?\npublic static int factorial(int n) {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}\nSystem.out.println(factorial(5));",
    qChinese: "以下递归方法的输出是什么？\npublic static int factorial(int n) {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}\nSystem.out.println(factorial(5));",
    options: [
      "A) 15",
      "B) 120",
      "C) 25",
      "D) 60"
    ],
    optionsChinese: [
      "A) 15",
      "B) 120",
      "C) 25",
      "D) 60"
    ],
    answer: 1,
    explanation: "This computes 5! = 5 * 4 * 3 * 2 * 1 = 120. The recursive calls are: factorial(5) = 5 * factorial(4) = 5 * 4 * factorial(3) = 5 * 4 * 3 * factorial(2) = 5 * 4 * 3 * 2 * factorial(1) = 5 * 4 * 3 * 2 * 1 = 120. The base case n <= 1 returns 1.",
    explanationChinese: "这计算5! = 5 * 4 * 3 * 2 * 1 = 120。递归调用为：factorial(5) = 5 * factorial(4) = 5 * 4 * factorial(3) = 5 * 4 * 3 * factorial(2) = 5 * 4 * 3 * 2 * factorial(1) = 5 * 4 * 3 * 2 * 1 = 120。基本情况n <= 1返回1。",
    diagram: "",
    terms: ["recursion", "base_case", "factorial"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 128,
    q: "What error occurs when a recursive function has no base case?",
    qChinese: "当递归函数没有基本情况时会发生什么错误？",
    options: [
      "A) NullPointerException",
      "B) StackOverflowError",
      "C) ArrayIndexOutOfBoundsException",
      "D) OutOfMemoryError"
    ],
    optionsChinese: [
      "A) NullPointerException",
      "B) StackOverflowError",
      "C) ArrayIndexOutOfBoundsException",
      "D) OutOfMemoryError"
    ],
    answer: 1,
    explanation: "Without a base case, a recursive function calls itself indefinitely, consuming stack memory for each call frame. When the call stack exceeds its limit, the JVM throws StackOverflowError. Each method call adds a frame to the stack containing local variables and return address. Proper base cases prevent this.",
    explanationChinese: "没有基本情况时，递归函数无限调用自身，每次调用帧都消耗栈内存。当调用栈超过其限制时，JVM抛出StackOverflowError。每次方法调用都向栈添加一个包含局部变量和返回地址的帧。正确的基本情况可以防止这种情况。",
    diagram: "",
    terms: ["recursion", "stack", "runtime_error"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 129,
    q: "What is tail recursion?",
    qChinese: "什么是尾递归？",
    options: [
      "A) Recursion that uses a tail pointer",
      "B) Recursion where the recursive call is the last operation in the function",
      "C) Recursion that starts from the end of an array",
      "D) Recursion with two base cases"
    ],
    optionsChinese: [
      "A) 使用尾指针的递归",
      "B) 递归调用是函数中最后一个操作的递归",
      "C) 从数组末尾开始的递归",
      "D) 有两个基本情况的递归"
    ],
    answer: 1,
    explanation: "Tail recursion occurs when the recursive call is the last operation before the function returns, with no pending computation. Some compilers optimize tail recursion into iteration, reusing the same stack frame (tail call optimization). Java does not optimize tail recursion, but languages like Scala and Scheme do.",
    explanationChinese: "尾递归发生在递归调用是函数返回前的最后一个操作时，没有待处理的计算。一些编译器将尾递归优化为迭代，重用同一栈帧（尾调用优化）。Java不优化尾递归，但Scala和Scheme等语言会优化。",
    diagram: "",
    terms: ["recursion", "optimization", "stack"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 130,
    q: "How does binary search use recursion?",
    qChinese: "二分搜索如何使用递归？",
    options: [
      "A) It does not use recursion",
      "B) It searches both halves simultaneously",
      "C) It searches element by element recursively",
      "D) It splits the array in half and recursively searches the relevant half"
    ],
    optionsChinese: [
      "A) 它不使用递归",
      "B) 同时搜索两半",
      "C) 逐个元素递归搜索",
      "D) 将数组分成两半并递归搜索相关的一半"
    ],
    answer: 3,
    explanation: "Recursive binary search compares the target with the middle element. If equal, it returns the index. If the target is smaller, it recursively searches the left half; if larger, the right half. Each call halves the search space, achieving O(log n) time complexity. The array must be sorted for binary search to work.",
    explanationChinese: "递归二分搜索将目标与中间元素比较。如果相等，返回索引。如果目标较小，递归搜索左半部分；如果较大，搜索右半部分。每次调用将搜索空间减半，达到O(log n)时间复杂度。数组必须排序才能使用二分搜索。",
    diagram: "",
    terms: ["recursion", "binary_search", "searching"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 131,
    q: "What is the time complexity of the recursive Fibonacci function?\nint fib(int n) {\n  if (n <= 1) return n;\n  return fib(n-1) + fib(n-2);\n}",
    qChinese: "递归斐波那契函数的时间复杂度是什么？\nint fib(int n) {\n  if (n <= 1) return n;\n  return fib(n-1) + fib(n-2);\n}",
    options: [
      "A) O(2^n)",
      "B) O(n log n)",
      "C) O(n)",
      "D) O(n^2)"
    ],
    optionsChinese: [
      "A) O(2^n)",
      "B) O(n log n)",
      "C) O(n)",
      "D) O(n^2)"
    ],
    answer: 0,
    explanation: "The naive recursive Fibonacci has exponential O(2^n) time complexity because it recomputes the same subproblems many times. The call tree doubles in size at each level. This can be optimized to O(n) using memoization (storing computed results) or dynamic programming with an iterative approach.",
    explanationChinese: "朴素递归斐波那契的时间复杂度为指数级O(2^n)，因为它多次重复计算相同的子问题。调用树在每一层翻倍。这可以使用记忆化（存储已计算结果）或动态规划的迭代方法优化为O(n)。",
    diagram: "",
    terms: ["recursion", "time_complexity", "fibonacci"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 132,
    q: "What is memoization?",
    qChinese: "什么是记忆化？",
    options: [
      "A) A memory management technique",
      "B) Caching results of function calls to avoid redundant computation",
      "C) Storing data in ROM",
      "D) A type of database indexing"
    ],
    optionsChinese: [
      "A) 内存管理技术",
      "B) 缓存函数调用结果以避免冗余计算",
      "C) 将数据存储在ROM中",
      "D) 一种数据库索引类型"
    ],
    answer: 1,
    explanation: "Memoization is an optimization technique that stores the results of expensive function calls and returns the cached result when the same inputs occur again. It converts exponential recursive algorithms to polynomial time. For Fibonacci, memoization reduces O(2^n) to O(n) by storing previously computed values.",
    explanationChinese: "记忆化是一种优化技术，存储昂贵函数调用的结果，当相同输入再次出现时返回缓存结果。它将指数级递归算法转换为多项式时间。对于斐波那契，记忆化通过存储先前计算的值将O(2^n)降低为O(n)。",
    diagram: "",
    terms: ["recursion", "optimization", "dynamic_programming"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 133,
    q: "What is the output of this recursive method?\npublic static void printReverse(String s) {\n  if (s.isEmpty()) return;\n  printReverse(s.substring(1));\n  System.out.print(s.charAt(0));\n}\nprintReverse(\"ABC\");",
    qChinese: "这个递归方法的输出是什么？\npublic static void printReverse(String s) {\n  if (s.isEmpty()) return;\n  printReverse(s.substring(1));\n  System.out.print(s.charAt(0));\n}\nprintReverse(\"ABC\");",
    options: [
      "A) ABC",
      "B) CBA",
      "C) ACB",
      "D) BAC"
    ],
    optionsChinese: [
      "A) ABC",
      "B) CBA",
      "C) ACB",
      "D) BAC"
    ],
    answer: 1,
    explanation: "The recursive call happens before the print statement. printReverse(\"ABC\") calls printReverse(\"BC\"), which calls printReverse(\"C\"), which calls printReverse(\"\"). As the calls return, they print: C, then B, then A, resulting in \"CBA\". This demonstrates how recursion can reverse the order of operations.",
    explanationChinese: "递归调用在打印语句之前发生。printReverse(\"ABC\")调用printReverse(\"BC\")，后者调用printReverse(\"C\")，后者调用printReverse(\"\")。当调用返回时，打印：C，然后B，然后A，结果为\"CBA\"。这演示了递归如何反转操作顺序。",
    diagram: "",
    terms: ["recursion", "string", "base_case"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 134,
    q: "What is the Tower of Hanoi problem?",
    qChinese: "汉诺塔问题是什么？",
    options: [
      "A) A sorting algorithm",
      "B) Moving disks between three pegs following size constraints, solvable with recursion",
      "C) A graph traversal problem",
      "D) A string matching problem"
    ],
    optionsChinese: [
      "A) 排序算法",
      "B) 在三个柱子之间按大小约束移动圆盘，可用递归解决",
      "C) 图遍历问题",
      "D) 字符串匹配问题"
    ],
    answer: 1,
    explanation: "Tower of Hanoi involves moving n disks from source to destination using an auxiliary peg, with the rule that larger disks cannot be placed on smaller ones. The recursive solution: move n-1 disks to auxiliary, move the largest disk to destination, move n-1 disks from auxiliary to destination. It requires 2^n - 1 moves.",
    explanationChinese: "汉诺塔涉及使用辅助柱将n个圆盘从源移到目标，规则是大圆盘不能放在小圆盘上。递归解法：将n-1个圆盘移到辅助柱，将最大圆盘移到目标，将n-1个圆盘从辅助柱移到目标。需要2^n - 1次移动。",
    diagram: "",
    terms: ["recursion", "algorithm", "problem_solving"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 135,
    q: "What is the recursive formula for computing the sum of an array?\nint sum(int[] arr, int n)",
    qChinese: "计算数组求和的递归公式是什么？\nint sum(int[] arr, int n)",
    options: [
      "A) sum(arr, n) = arr[n] + sum(arr, n+1)",
      "B) sum(arr, n) = arr[n-1] + sum(arr, n-1), base: n==0 returns 0",
      "C) sum(arr, n) = sum(arr, n/2) + sum(arr, n/2)",
      "D) sum(arr, n) = arr[0] * n"
    ],
    optionsChinese: [
      "A) sum(arr, n) = arr[n] + sum(arr, n+1)",
      "B) sum(arr, n) = arr[n-1] + sum(arr, n-1)，基本情况：n==0返回0",
      "C) sum(arr, n) = sum(arr, n/2) + sum(arr, n/2)",
      "D) sum(arr, n) = arr[0] * n"
    ],
    answer: 1,
    explanation: "The recursive approach sums the last element arr[n-1] with the sum of the remaining n-1 elements. The base case is n==0, returning 0 (empty subarray). Each call processes one element and reduces the problem size by one, making n recursive calls total with O(n) time complexity.",
    explanationChinese: "递归方法将最后一个元素arr[n-1]与剩余n-1个元素的和相加。基本情况是n==0，返回0（空子数组）。每次调用处理一个元素并将问题规模减少一个，总共进行n次递归调用，时间复杂度为O(n)。",
    diagram: "",
    terms: ["recursion", "array", "base_case"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 136,
    q: "What is divide and conquer?",
    qChinese: "什么是分治法？",
    options: [
      "A) Splitting work between multiple threads",
      "B) Breaking a problem into smaller subproblems, solving them recursively, and combining results",
      "C) Using two loops instead of one",
      "D) Dividing memory between stack and heap"
    ],
    optionsChinese: [
      "A) 在多个线程之间分配工作",
      "B) 将问题分解为更小的子问题，递归求解，然后合并结果",
      "C) 使用两个循环代替一个",
      "D) 在栈和堆之间划分内存"
    ],
    answer: 1,
    explanation: "Divide and conquer is an algorithm design paradigm that: (1) divides the problem into smaller subproblems of the same type, (2) conquers by solving subproblems recursively, and (3) combines subproblem solutions. Examples include merge sort, quicksort, binary search, and the Karatsuba multiplication algorithm.",
    explanationChinese: "分治法是一种算法设计范式：(1)将问题分成同类型的更小子问题，(2)通过递归解决子问题来征服，(3)合并子问题解。示例包括归并排序、快速排序、二分搜索和Karatsuba乘法算法。",
    diagram: "",
    terms: ["recursion", "algorithm", "divide_and_conquer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 137,
    q: "How many recursive calls does merge sort make for an array of n elements?",
    qChinese: "归并排序对n个元素的数组进行多少次递归调用？",
    options: [
      "A) n calls",
      "B) 2 calls per level, O(log n) levels",
      "C) n^2 calls",
      "D) 1 call"
    ],
    optionsChinese: [
      "A) n次调用",
      "B) 每层2次调用，O(log n)层",
      "C) n^2次调用",
      "D) 1次调用"
    ],
    answer: 1,
    explanation: "Merge sort divides the array into two halves (2 recursive calls per level) and recurses until single elements remain. There are O(log n) levels of recursion since the array is halved each time. The merge step at each level processes O(n) elements, giving overall O(n log n) time complexity.",
    explanationChinese: "归并排序将数组分成两半（每层2次递归调用），递归直到单个元素。由于数组每次减半，有O(log n)层递归。每层的合并步骤处理O(n)个元素，总体时间复杂度为O(n log n)。",
    diagram: "",
    terms: ["recursion", "sorting", "divide_and_conquer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 138,
    q: "What is backtracking in recursion?",
    qChinese: "递归中的回溯是什么？",
    options: [
      "A) Going back to the beginning of an array",
      "B) Exploring all possible solutions and undoing choices that lead to dead ends",
      "C) Reversing a linked list",
      "D) Debugging recursive code"
    ],
    optionsChinese: [
      "A) 回到数组的开头",
      "B) 探索所有可能的解决方案并撤销导致死胡同的选择",
      "C) 反转链表",
      "D) 调试递归代码"
    ],
    answer: 1,
    explanation: "Backtracking is a technique where you incrementally build a solution and abandon a path as soon as you determine it cannot lead to a valid solution. You make a choice, recurse, then undo the choice (backtrack) if it fails. Classic examples include N-Queens, maze solving, Sudoku, and subset generation problems.",
    explanationChinese: "回溯是一种逐步构建解决方案的技术，一旦确定某条路径不能导致有效解就放弃该路径。你做一个选择，递归，然后如果失败就撤销选择（回溯）。经典示例包括N皇后、迷宫求解、数独和子集生成问题。",
    diagram: "",
    terms: ["recursion", "backtracking", "algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 139,
    q: "What is the space complexity of a recursive function with depth d?",
    qChinese: "深度为d的递归函数的空间复杂度是什么？",
    options: [
      "A) O(d)",
      "B) O(1)",
      "C) O(d^2)",
      "D) O(2^d)"
    ],
    optionsChinese: [
      "A) O(d)",
      "B) O(1)",
      "C) O(d^2)",
      "D) O(2^d)"
    ],
    answer: 0,
    explanation: "Each recursive call adds a frame to the call stack containing local variables and the return address. The maximum stack depth determines space complexity. For a function with recursion depth d, the space used is O(d). For example, a linear recursion on n elements uses O(n) space; binary search recursion uses O(log n).",
    explanationChinese: "每次递归调用向调用栈添加一个包含局部变量和返回地址的帧。最大栈深度决定空间复杂度。对于递归深度为d的函数，使用的空间为O(d)。例如，对n个元素的线性递归使用O(n)空间；二分搜索递归使用O(log n)。",
    diagram: "",
    terms: ["recursion", "stack", "space_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 140,
    q: "How can recursion be converted to iteration?",
    qChinese: "如何将递归转换为迭代？",
    options: [
      "A) It is impossible",
      "B) Using an explicit stack data structure or loop with state variables",
      "C) By using more recursive calls",
      "D) Only tail recursion can be converted"
    ],
    optionsChinese: [
      "A) 不可能",
      "B) 使用显式栈数据结构或带状态变量的循环",
      "C) 通过使用更多递归调用",
      "D) 只有尾递归可以转换"
    ],
    answer: 1,
    explanation: "Any recursive algorithm can be converted to iteration. Tail recursion can be directly replaced with a loop. For non-tail recursion, an explicit stack simulates the call stack. This eliminates the overhead of function calls and risk of stack overflow. Iterative solutions typically use less memory than recursive ones.",
    explanationChinese: "任何递归算法都可以转换为迭代。尾递归可以直接替换为循环。对于非尾递归，显式栈模拟调用栈。这消除了函数调用的开销和栈溢出的风险。迭代解通常比递归解使用更少的内存。",
    diagram: "",
    terms: ["recursion", "iteration", "stack"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 141,
    q: "What is mutual recursion?",
    qChinese: "什么是相互递归？",
    options: [
      "A) A function that calls itself",
      "B) Recursive functions in different classes",
      "C) Recursion with multiple base cases",
      "D) Two or more functions that call each other recursively"
    ],
    optionsChinese: [
      "A) 调用自身的函数",
      "B) 不同类中的递归函数",
      "C) 有多个基本情况的递归",
      "D) 两个或多个函数相互递归调用"
    ],
    answer: 3,
    explanation: "Mutual recursion occurs when two or more functions call each other. For example, isEven(n) calls isOdd(n-1), and isOdd(n) calls isEven(n-1). Both functions need base cases. Mutual recursion appears in parsers, state machines, and mathematical definitions where concepts are interdependent.",
    explanationChinese: "相互递归发生在两个或多个函数相互调用时。例如，isEven(n)调用isOdd(n-1)，isOdd(n)调用isEven(n-1)。两个函数都需要基本情况。相互递归出现在解析器、状态机和概念相互依赖的数学定义中。",
    diagram: "",
    terms: ["recursion", "base_case", "function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 142,
    q: "What is the recursive approach to check if a string is a palindrome?",
    qChinese: "检查字符串是否为回文的递归方法是什么？",
    options: [
      "A) Compare first and last characters, then recurse on the remaining substring",
      "B) Reverse the entire string and compare",
      "C) Check each character against the middle",
      "D) Use a stack to compare characters"
    ],
    optionsChinese: [
      "A) 比较第一个和最后一个字符，然后对剩余子字符串递归",
      "B) 反转整个字符串并比较",
      "C) 将每个字符与中间字符比较",
      "D) 使用栈比较字符"
    ],
    answer: 0,
    explanation: "The recursive palindrome check compares the first and last characters. If they match, it recurses on the substring without those characters. Base cases: a string of length 0 or 1 is a palindrome. If characters do not match at any step, it returns false. This reduces the problem by 2 characters each recursion.",
    explanationChinese: "递归回文检查比较第一个和最后一个字符。如果匹配，对去除这两个字符的子串递归。基本情况：长度为0或1的字符串是回文。如果在任何步骤中字符不匹配，返回false。每次递归将问题减少2个字符。",
    diagram: "",
    terms: ["recursion", "string", "base_case"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 143,
    q: "What is the time complexity of recursive binary search?",
    qChinese: "递归二分搜索的时间复杂度是什么？",
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
    answer: 3,
    explanation: "Recursive binary search halves the search space with each call. Starting with n elements, after one call you have n/2, then n/4, and so on. The number of calls is log2(n), giving O(log n) time complexity. Each call does O(1) work (one comparison and index calculation). The array must be sorted.",
    explanationChinese: "递归二分搜索每次调用将搜索空间减半。从n个元素开始，一次调用后有n/2，然后n/4，依此类推。调用次数为log2(n)，时间复杂度为O(log n)。每次调用做O(1)工作（一次比较和索引计算）。数组必须排序。",
    diagram: "",
    terms: ["recursion", "binary_search", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 144,
    q: "What problem does the recursive power function solve?\npublic static int power(int base, int exp) {\n  if (exp == 0) return 1;\n  return base * power(base, exp - 1);\n}",
    qChinese: "递归幂函数解决什么问题？\npublic static int power(int base, int exp) {\n  if (exp == 0) return 1;\n  return base * power(base, exp - 1);\n}",
    options: [
      "A) Computes base / exp",
      "B) Computes base % exp",
      "C) Computes base + exp",
      "D) Computes base ^ exp (exponentiation)"
    ],
    optionsChinese: [
      "A) 计算base / exp",
      "B) 计算base % exp",
      "C) 计算base + exp",
      "D) 计算base ^ exp（指数运算）"
    ],
    answer: 3,
    explanation: "This function computes base^exp using recursion. The base case is exp == 0, returning 1 (any number to the power 0 is 1). Each recursive call multiplies base one more time. This linear recursion has O(n) time where n is exp. A more efficient approach uses exponentiation by squaring: O(log n).",
    explanationChinese: "此函数使用递归计算base^exp。基本情况是exp == 0，返回1（任何数的0次方是1）。每次递归调用多乘一次base。此线性递归的时间为O(n)，其中n是exp。更高效的方法使用快速幂：O(log n)。",
    diagram: "",
    terms: ["recursion", "base_case", "algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 145,
    q: "What is the difference between direct and indirect recursion?",
    qChinese: "直接递归和间接递归有什么区别？",
    options: [
      "A) Direct recursion calls itself; indirect recursion involves a chain of function calls that cycles back",
      "B) Direct recursion is faster",
      "C) Indirect recursion uses less memory",
      "D) They are the same"
    ],
    optionsChinese: [
      "A) 直接递归调用自身；间接递归涉及循环回来的函数调用链",
      "B) 直接递归更快",
      "C) 间接递归使用更少的内存",
      "D) 它们相同"
    ],
    answer: 0,
    explanation: "Direct recursion is when a function calls itself directly (f calls f). Indirect recursion is when function A calls function B, which eventually calls function A again. Both require proper base cases to terminate. Indirect recursion is harder to trace and debug but appears in parsers and mutually dependent computations.",
    explanationChinese: "直接递归是函数直接调用自身（f调用f）。间接递归是函数A调用函数B，B最终再次调用函数A。两者都需要正确的基本情况来终止。间接递归更难跟踪和调试，但出现在解析器和相互依赖的计算中。",
    diagram: "",
    terms: ["recursion", "function", "base_case"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 146,
    q: "How does recursion relate to the call stack?",
    qChinese: "递归与调用栈有什么关系？",
    options: [
      "A) Recursion does not use the call stack",
      "B) Recursion uses the heap instead of the stack",
      "C) Each recursive call pushes a new frame onto the call stack",
      "D) The call stack is only used for iterative code"
    ],
    optionsChinese: [
      "A) 递归不使用调用栈",
      "B) 递归使用堆而不是栈",
      "C) 每次递归调用将新帧压入调用栈",
      "D) 调用栈仅用于迭代代码"
    ],
    answer: 2,
    explanation: "Each recursive call creates a new stack frame containing parameters, local variables, and the return address. These frames are pushed onto the call stack. When a call returns, its frame is popped. Deep recursion can exhaust stack memory (default ~512KB to 1MB in Java), causing StackOverflowError.",
    explanationChinese: "每次递归调用创建一个新的栈帧，包含参数、局部变量和返回地址。这些帧被压入调用栈。当调用返回时，其帧被弹出。深度递归可能耗尽栈内存（Java中默认约512KB到1MB），导致StackOverflowError。",
    diagram: "",
    terms: ["recursion", "stack", "memory_allocation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 147,
    q: "What is the recursive approach to generating all permutations of a string?",
    qChinese: "生成字符串所有排列的递归方法是什么？",
    options: [
      "A) Sort the string and iterate",
      "B) Reverse the string repeatedly",
      "C) Fix each character in turn at the first position, then recursively permute the remaining characters",
      "D) Use binary search on the characters"
    ],
    optionsChinese: [
      "A) 排序字符串并迭代",
      "B) 反复反转字符串",
      "C) 依次将每个字符固定在第一个位置，然后递归排列剩余字符",
      "D) 对字符使用二分搜索"
    ],
    answer: 2,
    explanation: "To generate permutations recursively: for each position, swap the current character with each subsequent character, recursively permute the rest, then swap back (backtrack). For a string of length n, this generates n! permutations. The base case is when the string length is 1 or 0.",
    explanationChinese: "递归生成排列：对于每个位置，将当前字符与每个后续字符交换，递归排列其余字符，然后交换回来（回溯）。对于长度为n的字符串，这生成n!个排列。基本情况是字符串长度为1或0时。",
    diagram: "",
    terms: ["recursion", "backtracking", "permutation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 148,
    q: "What is the GCD (Greatest Common Divisor) computed recursively using Euclid's algorithm?",
    qChinese: "使用欧几里得算法递归计算的GCD（最大公约数）是什么？",
    options: [
      "A) gcd(a, b) = gcd(b, a - b)",
      "B) gcd(a, b) = min(a, b)",
      "C) gcd(a, b) = a * b / (a + b)",
      "D) gcd(a, b) = gcd(b, a % b), base case: b == 0 returns a"
    ],
    optionsChinese: [
      "A) gcd(a, b) = gcd(b, a - b)",
      "B) gcd(a, b) = min(a, b)",
      "C) gcd(a, b) = a * b / (a + b)",
      "D) gcd(a, b) = gcd(b, a % b)，基本情况：b == 0返回a"
    ],
    answer: 3,
    explanation: "Euclid's algorithm computes GCD recursively: gcd(a, b) = gcd(b, a % b). The base case is when b equals 0, returning a. For example, gcd(48, 18) = gcd(18, 12) = gcd(12, 6) = gcd(6, 0) = 6. The algorithm has O(log(min(a,b))) time complexity, making it very efficient.",
    explanationChinese: "欧几里得算法递归计算GCD：gcd(a, b) = gcd(b, a % b)。基本情况是b等于0时返回a。例如，gcd(48, 18) = gcd(18, 12) = gcd(12, 6) = gcd(6, 0) = 6。算法时间复杂度为O(log(min(a,b)))，非常高效。",
    diagram: "",
    terms: ["recursion", "algorithm", "base_case"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 149,
    q: "What is a recursive data structure?",
    qChinese: "什么是递归数据结构？",
    options: [
      "A) A data structure that stores functions",
      "B) A data structure that cannot change size",
      "C) A data structure defined in terms of itself, like linked lists and trees",
      "D) A data structure with circular references only"
    ],
    optionsChinese: [
      "A) 存储函数的数据结构",
      "B) 不能改变大小的数据结构",
      "C) 根据自身定义的数据结构，如链表和树",
      "D) 仅具有循环引用的数据结构"
    ],
    answer: 2,
    explanation: "A recursive data structure contains references to instances of the same type. A linked list node contains data and a reference to another node. A binary tree node contains data and references to left and right child nodes. These structures naturally lend themselves to recursive algorithms for traversal and manipulation.",
    explanationChinese: "递归数据结构包含对同一类型实例的引用。链表节点包含数据和对另一个节点的引用。二叉树节点包含数据和对左右子节点的引用。这些结构自然适合用递归算法进行遍历和操作。",
    diagram: "",
    terms: ["recursion", "linked_list", "data_structure"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 150,
    q: "What is the recursive solution to the subset sum problem?",
    qChinese: "子集和问题的递归解是什么？",
    options: [
      "A) Sort the array and use binary search",
      "B) Use a hash table to find pairs",
      "C) For each element, either include or exclude it and recurse on the remaining elements",
      "D) Multiply all elements together"
    ],
    optionsChinese: [
      "A) 排序数组并使用二分搜索",
      "B) 使用哈希表找配对",
      "C) 对每个元素，选择包含或排除它，然后对剩余元素递归",
      "D) 将所有元素相乘"
    ],
    answer: 2,
    explanation: "The subset sum problem asks if a subset with a target sum exists. The recursive approach considers each element: either include it (subtract from target sum) or exclude it, then recurse on the remaining elements. Base cases: target equals 0 (found), or no elements left with non-zero target (not found). Time is O(2^n).",
    explanationChinese: "子集和问题询问是否存在目标和的子集。递归方法考虑每个元素：包含它（从目标和中减去）或排除它，然后对剩余元素递归。基本情况：目标等于0（找到），或目标非零但没有剩余元素（未找到）。时间为O(2^n)。",
    diagram: "",
    terms: ["recursion", "backtracking", "algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 151,
    q: "What is the output of this recursive function?\npublic static int mystery(int n) {\n  if (n == 0) return 0;\n  return n % 10 + mystery(n / 10);\n}\nSystem.out.println(mystery(1234));",
    qChinese: "这个递归函数的输出是什么？\npublic static int mystery(int n) {\n  if (n == 0) return 0;\n  return n % 10 + mystery(n / 10);\n}\nSystem.out.println(mystery(1234));",
    options: [
      "A) 10",
      "B) 4321",
      "C) 1234",
      "D) 24"
    ],
    optionsChinese: [
      "A) 10",
      "B) 4321",
      "C) 1234",
      "D) 24"
    ],
    answer: 0,
    explanation: "This function computes the sum of digits. mystery(1234) = 4 + mystery(123) = 4 + 3 + mystery(12) = 4 + 3 + 2 + mystery(1) = 4 + 3 + 2 + 1 + mystery(0) = 4 + 3 + 2 + 1 + 0 = 10. n % 10 extracts the last digit; n / 10 removes it. This is a classic recursive digit-processing pattern.",
    explanationChinese: "此函数计算数字之和。mystery(1234) = 4 + mystery(123) = 4 + 3 + mystery(12) = 4 + 3 + 2 + mystery(1) = 4 + 3 + 2 + 1 + mystery(0) = 4 + 3 + 2 + 1 + 0 = 10。n % 10提取最后一位；n / 10删除它。这是经典的递归数字处理模式。",
    diagram: "",
    terms: ["recursion", "base_case", "modulo"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 152,
    q: "What is the recursion tree for fib(4)?",
    qChinese: "fib(4)的递归树是什么？",
    options: [
      "A) A linear chain of 4 calls",
      "B) A single node",
      "C) A tree with 4 branches at each level",
      "D) A binary tree where fib(4) calls fib(3) and fib(2), each branching further"
    ],
    optionsChinese: [
      "A) 4次调用的线性链",
      "B) 单个节点",
      "C) 每层有4个分支的树",
      "D) 一棵二叉树，fib(4)调用fib(3)和fib(2)，每个进一步分支"
    ],
    answer: 3,
    explanation: "The recursion tree for fib(4) is a binary tree. fib(4) branches into fib(3) and fib(2). fib(3) branches into fib(2) and fib(1). fib(2) branches into fib(1) and fib(0). Notice fib(2) is computed twice, illustrating the overlapping subproblems that make naive Fibonacci exponential in time.",
    explanationChinese: "fib(4)的递归树是一棵二叉树。fib(4)分支为fib(3)和fib(2)。fib(3)分支为fib(2)和fib(1)。fib(2)分支为fib(1)和fib(0)。注意fib(2)被计算了两次，说明了使朴素斐波那契时间为指数级的重叠子问题。",
    diagram: "",
    terms: ["recursion", "fibonacci", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 153,
    q: "When should you prefer iteration over recursion?",
    qChinese: "什么时候应该优先使用迭代而不是递归？",
    options: [
      "A) Always; recursion is never preferred",
      "B) When stack overflow is a concern and the problem has a simple iterative solution",
      "C) Only when the language does not support recursion",
      "D) When the problem is very complex"
    ],
    optionsChinese: [
      "A) 总是；永远不应使用递归",
      "B) 当栈溢出是关注点且问题有简单的迭代解法时",
      "C) 仅当语言不支持递归时",
      "D) 当问题非常复杂时"
    ],
    answer: 1,
    explanation: "Prefer iteration when the recursion depth could be very large (risking StackOverflowError), or when a straightforward loop achieves the same result more efficiently. Recursion excels at problems with natural recursive structure like tree traversal and divide-and-conquer. Iteration generally uses less memory and has less function call overhead.",
    explanationChinese: "当递归深度可能非常大（有StackOverflowError风险）或简单循环可以更高效地实现相同结果时，优先使用迭代。递归擅长具有自然递归结构的问题，如树遍历和分治。迭代通常使用更少的内存，函数调用开销更小。",
    diagram: "",
    terms: ["recursion", "iteration", "stack"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 154,
    q: "What is the difference between head recursion and tail recursion?",
    qChinese: "头递归和尾递归有什么区别？",
    options: [
      "A) Head recursion is faster",
      "B) Tail recursion uses more memory",
      "C) They produce different results",
      "D) In head recursion, the recursive call is first; in tail recursion, it is last"
    ],
    optionsChinese: [
      "A) 头递归更快",
      "B) 尾递归使用更多内存",
      "C) 它们产生不同的结果",
      "D) 在头递归中，递归调用在前；在尾递归中，在最后"
    ],
    answer: 3,
    explanation: "In head recursion, the recursive call occurs before processing the current element. In tail recursion, all processing happens before the recursive call, which is the last operation. Tail recursion can be optimized by compilers into iteration. Head recursion requires the stack to unwind before completing computation.",
    explanationChinese: "在头递归中，递归调用在处理当前元素之前发生。在尾递归中，所有处理在递归调用之前完成，递归调用是最后一个操作。尾递归可以被编译器优化为迭代。头递归需要栈展开才能完成计算。",
    diagram: "",
    terms: ["recursion", "optimization", "stack"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 155,
    q: "How does recursion solve the N-Queens problem?",
    qChinese: "递归如何解决N皇后问题？",
    options: [
      "A) By trying all possible board configurations at once",
      "B) By placing queens one row at a time and backtracking when conflicts arise",
      "C) By sorting the queens by size",
      "D) By using dynamic programming only"
    ],
    optionsChinese: [
      "A) 通过同时尝试所有可能的棋盘配置",
      "B) 通过每次放置一行的皇后，当出现冲突时回溯",
      "C) 通过按大小排序皇后",
      "D) 仅使用动态规划"
    ],
    answer: 1,
    explanation: "The N-Queens recursive solution places one queen per row. For each row, try each column; if the queen is safe (no conflicts with previously placed queens), recurse to the next row. If no valid column exists, backtrack to the previous row and try the next column. This explores the search space systematically.",
    explanationChinese: "N皇后的递归解决方案每行放置一个皇后。对于每行，尝试每列；如果皇后安全（与先前放置的皇后没有冲突），递归到下一行。如果没有有效列，回溯到上一行尝试下一列。这系统地探索搜索空间。",
    diagram: "",
    terms: ["recursion", "backtracking", "algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 156,
    q: "What is a pointer in C?",
    qChinese: "C语言中的指针是什么？",
    options: [
      "A) A variable that stores a numeric value",
      "B) A type of array",
      "C) A function that returns an address",
      "D) A variable that stores the memory address of another variable"
    ],
    optionsChinese: [
      "A) 存储数值的变量",
      "B) 一种数组",
      "C) 返回地址的函数",
      "D) 存储另一个变量内存地址的变量"
    ],
    answer: 3,
    explanation: "A pointer is a variable that holds the memory address of another variable. Declared with * (e.g., int *ptr), it allows indirect access to data. Pointers enable dynamic memory allocation, efficient array manipulation, and data structures like linked lists. They are fundamental to C and C++ programming.",
    explanationChinese: "指针是保存另一个变量内存地址的变量。用*声明（如int *ptr），它允许间接访问数据。指针支持动态内存分配、高效数组操作和链表等数据结构。它们是C和C++编程的基础。",
    diagram: "",
    terms: ["pointer", "memory_allocation", "variable"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 157,
    q: "What does the & operator do in C?",
    qChinese: "C语言中&运算符的作用是什么？",
    options: [
      "A) Logical AND",
      "B) Dereferences a pointer",
      "C) Bitwise OR",
      "D) Returns the memory address of a variable"
    ],
    optionsChinese: [
      "A) 逻辑与",
      "B) 解引用指针",
      "C) 按位或",
      "D) 返回变量的内存地址"
    ],
    answer: 3,
    explanation: "The & (address-of) operator returns the memory address of a variable. For example, if int x = 10, then &x gives the address where x is stored. This is used to initialize pointers: int *ptr = &x. The & operator is also used for bitwise AND when applied between two values, but as a unary prefix it means address-of.",
    explanationChinese: "（取地址）运算符返回变量的内存地址。例如，如果int x = 10，则&x给出x存储的地址。这用于初始化指针：int *ptr = &x。&运算符在两个值之间应用时也用于按位与，但作为一元前缀意味着取地址。",
    diagram: "",
    terms: ["pointer", "operator", "memory_allocation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 158,
    q: "What does the * operator do when used with a pointer in C?",
    qChinese: "C语言中*运算符与指针一起使用时做什么？",
    options: [
      "A) Dereferences the pointer to access the value at the stored address",
      "B) Multiplies the pointer value",
      "C) Creates a new pointer",
      "D) Calculates the size of the pointer"
    ],
    optionsChinese: [
      "A) 解引用指针以访问存储地址的值",
      "B) 乘以指针值",
      "C) 创建新指针",
      "D) 计算指针的大小"
    ],
    answer: 0,
    explanation: "The * (dereference) operator accesses the value stored at the address a pointer holds. If int *ptr = &x and x = 10, then *ptr evaluates to 10. You can also modify the value: *ptr = 20 changes x to 20. Dereferencing a null or invalid pointer causes undefined behavior, often a segmentation fault.",
    explanationChinese: "（解引用）运算符访问指针所保存地址处存储的值。如果int *ptr = &x且x = 10，则*ptr求值为10。你也可以修改值：*ptr = 20将x更改为20。解引用null或无效指针会导致未定义行为，通常是段错误。",
    diagram: "",
    terms: ["pointer", "operator", "dereference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 159,
    q: "What is the output of the following C code?\nint x = 10;\nint *p = &x;\n*p = 20;\nprintf(\"%d\", x);",
    qChinese: "以下C代码的输出是什么？\nint x = 10;\nint *p = &x;\n*p = 20;\nprintf(\"%d\", x);",
    options: [
      "A) 10",
      "B) Compilation error",
      "C) Address of x",
      "D) 20"
    ],
    optionsChinese: [
      "A) 10",
      "B) 编译错误",
      "C) x的地址",
      "D) 20"
    ],
    answer: 3,
    explanation: "The pointer p stores the address of x. When *p = 20 is executed, it modifies the value at that address, which is x itself. So x becomes 20. This demonstrates how pointers provide indirect access to variables, allowing functions to modify caller's variables through pointer parameters (pass by reference semantics).",
    explanationChinese: "指针p存储x的地址。当执行*p = 20时，它修改该地址处的值，即x本身。所以x变为20。这演示了指针如何提供对变量的间接访问，允许函数通过指针参数修改调用者的变量（传引用语义）。",
    diagram: "",
    terms: ["pointer", "dereference", "variable"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 160,
    q: "What is the difference between pass by value and pass by pointer in C?",
    qChinese: "C语言中按值传递和按指针传递有什么区别？",
    options: [
      "A) Pass by value copies the data; pass by pointer passes the address allowing modification of the original",
      "B) They are the same",
      "C) Pass by pointer is slower",
      "D) Pass by value can modify the original variable"
    ],
    optionsChinese: [
      "A) 按值传递复制数据；按指针传递传递地址允许修改原始变量",
      "B) 它们相同",
      "C) 按指针传递更慢",
      "D) 按值传递可以修改原始变量"
    ],
    answer: 0,
    explanation: "Pass by value copies the argument's value into the parameter; changes to the parameter do not affect the original. Pass by pointer passes the address; the function can modify the original variable through dereferencing. C only supports pass by value, but pass-by-pointer simulates pass by reference semantics.",
    explanationChinese: "按值传递将参数的值复制到形参中；对形参的更改不影响原始变量。按指针传递传递地址；函数可以通过解引用修改原始变量。C只支持按值传递，但按指针传递模拟了传引用语义。",
    diagram: "",
    terms: ["pointer", "function", "parameter"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 161,
    q: "What does malloc() do in C?",
    qChinese: "C语言中malloc()做什么？",
    options: [
      "A) Allocates memory on the stack",
      "B) Allocates a block of memory on the heap and returns a pointer to it",
      "C) Frees allocated memory",
      "D) Initializes memory to zero"
    ],
    optionsChinese: [
      "A) 在栈上分配内存",
      "B) 在堆上分配一块内存并返回指向它的指针",
      "C) 释放已分配的内存",
      "D) 将内存初始化为零"
    ],
    answer: 1,
    explanation: "malloc() (memory allocation) allocates a specified number of bytes on the heap and returns a void pointer to the first byte. The memory is not initialized (contains garbage values). Use calloc() for zero-initialized memory. Always check if malloc returns NULL (allocation failure) and free() when done.",
    explanationChinese: "malloc()（内存分配）在堆上分配指定数量的字节，并返回指向第一个字节的void指针。内存未初始化（包含垃圾值）。使用calloc()获取零初始化的内存。始终检查malloc是否返回NULL（分配失败），完成后使用free()。",
    diagram: "",
    terms: ["memory_allocation", "pointer", "heap"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 162,
    q: "What is the difference between malloc() and calloc() in C?",
    qChinese: "C语言中malloc()和calloc()有什么区别？",
    options: [
      "A) malloc() initializes to zero; calloc() does not",
      "B) calloc() is faster",
      "C) calloc() initializes to zero and takes two arguments (count, size); malloc() does not initialize",
      "D) malloc() allocates on the stack; calloc() on the heap"
    ],
    optionsChinese: [
      "A) malloc()初始化为零；calloc()不初始化",
      "B) calloc()更快",
      "C) calloc()初始化为零并接受两个参数（数量，大小）；malloc()不初始化",
      "D) malloc()在栈上分配；calloc()在堆上"
    ],
    answer: 2,
    explanation: "malloc(size) allocates 'size' bytes of uninitialized memory. calloc(count, size) allocates memory for 'count' elements of 'size' bytes each and initializes all bytes to zero. calloc is useful when you need zero-initialized arrays. Both return NULL on failure and require free() to deallocate.",
    explanationChinese: "malloc(size)分配'size'字节的未初始化内存。calloc(count, size)为'count'个'size'字节的元素分配内存，并将所有字节初始化为零。当需要零初始化数组时calloc很有用。两者在失败时返回NULL，需要free()来释放。",
    diagram: "",
    terms: ["memory_allocation", "pointer", "initialization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 163,
    q: "What is a memory leak in C?",
    qChinese: "C语言中的内存泄漏是什么？",
    options: [
      "A) Memory being accessed by unauthorized programs",
      "B) Allocated heap memory that is no longer accessible but not freed",
      "C) Writing past array bounds",
      "D) Using uninitialized variables"
    ],
    optionsChinese: [
      "A) 内存被未授权程序访问",
      "B) 已分配但不再可访问且未释放的堆内存",
      "C) 写入超出数组边界",
      "D) 使用未初始化的变量"
    ],
    answer: 1,
    explanation: "A memory leak occurs when dynamically allocated memory (via malloc/calloc) is not freed with free(), and the pointer to it is lost or overwritten. The memory remains allocated but inaccessible, reducing available memory over time. In long-running programs, leaks can exhaust system memory. Tools like Valgrind help detect leaks.",
    explanationChinese: "当通过malloc/calloc动态分配的内存未用free()释放，且指向它的指针丢失或被覆盖时，就发生内存泄漏。内存保持分配但不可访问，随时间减少可用内存。在长时间运行的程序中，泄漏可能耗尽系统内存。Valgrind等工具帮助检测泄漏。",
    diagram: "",
    terms: ["memory_allocation", "pointer", "heap"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 164,
    q: "What is a struct in C?",
    qChinese: "C语言中的结构体是什么？",
    options: [
      "A) A type of function",
      "B) A built-in array type",
      "C) A user-defined composite data type that groups related variables",
      "D) A control flow statement"
    ],
    optionsChinese: [
      "A) 一种函数类型",
      "B) 内置数组类型",
      "C) 将相关变量组合在一起的用户定义复合数据类型",
      "D) 控制流语句"
    ],
    answer: 2,
    explanation: "A struct in C groups variables of different types under a single name. For example: struct Point { int x; int y; }; Members are accessed with the dot operator (point.x) or arrow operator for pointers (ptr->x). Structs enable creating complex data types and are the foundation for C data structures.",
    explanationChinese: "C中的结构体将不同类型的变量组合在一个名称下。例如：struct Point { int x; int y; };成员使用点运算符（point.x）或指针的箭头运算符（ptr->x）访问。结构体能创建复杂数据类型，是C数据结构的基础。",
    diagram: "",
    terms: ["struct", "data_type", "variable"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 165,
    q: "What is the difference between -> and . operators in C?",
    qChinese: "C语言中->和.运算符有什么区别？",
    options: [
      "A) They are the same",
      "B) . accesses struct members directly; -> accesses members through a pointer to a struct",
      "C) -> is for arrays; . is for structs",
      "D) . is for C; -> is for C++"
    ],
    optionsChinese: [
      "A) 它们相同",
      "B) .直接访问结构体成员；->通过结构体指针访问成员",
      "C) ->用于数组；.用于结构体",
      "D) .用于C；->用于C++"
    ],
    answer: 1,
    explanation: "The dot operator (.) accesses members of a struct variable directly: point.x. The arrow operator (->) accesses members through a pointer to a struct: ptr->x, which is shorthand for (*ptr).x. The arrow operator dereferences the pointer and accesses the member in one step, improving code readability.",
    explanationChinese: "点运算符（.）直接访问结构体变量的成员：point.x。箭头运算符（->）通过结构体指针访问成员：ptr->x，这是(*ptr).x的简写。箭头运算符在一步中解引用指针并访问成员，提高代码可读性。",
    diagram: "",
    terms: ["struct", "pointer", "operator"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 166,
    q: "What is a segmentation fault in C?",
    qChinese: "C语言中的段错误是什么？",
    options: [
      "A) A compilation error",
      "B) An error in the linker",
      "C) A logical error in the code",
      "D) A runtime error caused by accessing memory that the program does not have permission to access"
    ],
    optionsChinese: [
      "A) 编译错误",
      "B) 链接器中的错误",
      "C) 代码中的逻辑错误",
      "D) 由访问程序无权访问的内存引起的运行时错误"
    ],
    answer: 3,
    explanation: "A segmentation fault (segfault) occurs when a program tries to access memory it is not allowed to, such as dereferencing a null pointer, accessing freed memory, writing to read-only memory, or buffer overflow. The operating system terminates the program with signal SIGSEGV. Use tools like GDB and AddressSanitizer to debug.",
    explanationChinese: "段错误（segfault）发生在程序试图访问它不被允许访问的内存时，如解引用null指针、访问已释放的内存、写入只读内存或缓冲区溢出。操作系统以SIGSEGV信号终止程序。使用GDB和AddressSanitizer等工具调试。",
    diagram: "",
    terms: ["pointer", "runtime_error", "memory_allocation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 167,
    q: "What is the size of a pointer on a 64-bit system?",
    qChinese: "在64位系统上指针的大小是多少？",
    options: [
      "A) 4 bytes",
      "B) Depends on the data type it points to",
      "C) 8 bytes",
      "D) 2 bytes"
    ],
    optionsChinese: [
      "A) 4字节",
      "B) 取决于它指向的数据类型",
      "C) 8字节",
      "D) 2字节"
    ],
    answer: 2,
    explanation: "On a 64-bit system, all pointers are 8 bytes (64 bits) regardless of the data type they point to. This is because pointers store memory addresses, and 64-bit systems use 64-bit addresses. On 32-bit systems, pointers are 4 bytes. The pointer size determines the addressable memory space of the system.",
    explanationChinese: "在64位系统上，所有指针都是8字节（64位），无论它们指向什么数据类型。这是因为指针存储内存地址，64位系统使用64位地址。在32位系统上，指针是4字节。指针大小决定了系统的可寻址内存空间。",
    diagram: "",
    terms: ["pointer", "memory_allocation", "data_type"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 168,
    q: "What is pointer arithmetic in C?",
    qChinese: "C语言中的指针运算是什么？",
    options: [
      "A) Performing math on the value a pointer points to",
      "B) Dividing a pointer by an integer",
      "C) Multiplying two pointers together",
      "D) Adding or subtracting values to/from a pointer, which moves it by that many elements"
    ],
    optionsChinese: [
      "A) 对指针指向的值执行数学运算",
      "B) 将指针除以整数",
      "C) 将两个指针相乘",
      "D) 向指针加或减值，将其移动那么多个元素"
    ],
    answer: 3,
    explanation: "Pointer arithmetic adjusts the pointer by multiples of the size of the pointed-to type. If int *p points to an array, p+1 points to the next int (4 bytes later on most systems). This makes array traversal with pointers efficient. Subtracting two pointers gives the number of elements between them.",
    explanationChinese: "指针运算按指向类型大小的倍数调整指针。如果int *p指向数组，p+1指向下一个int（大多数系统上4字节后）。这使得用指针遍历数组高效。两个指针相减给出它们之间的元素数量。",
    diagram: "",
    terms: ["pointer", "array", "memory_allocation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 169,
    q: "What is the NULL pointer in C?",
    qChinese: "C语言中的NULL指针是什么？",
    options: [
      "A) A special pointer value indicating it points to nothing",
      "B) A pointer that has not been declared",
      "C) A pointer that points to address 0",
      "D) A pointer to an empty string"
    ],
    optionsChinese: [
      "A) 表示不指向任何东西的特殊指针值",
      "B) 未声明的指针",
      "C) 指向地址0的指针",
      "D) 指向空字符串的指针"
    ],
    answer: 0,
    explanation: "NULL is a macro (typically defined as ((void *)0)) representing a pointer that intentionally points to no valid memory location. It is used to indicate an uninitialized or invalid pointer. Dereferencing NULL causes a segmentation fault. Always check pointers for NULL before dereferencing, especially after malloc().",
    explanationChinese: "NULL是一个宏（通常定义为((void *)0)），表示故意不指向任何有效内存位置的指针。它用于表示未初始化或无效的指针。解引用NULL导致段错误。始终在解引用前检查指针是否为NULL，特别是在malloc()之后。",
    diagram: "",
    terms: ["pointer", "null", "runtime_error"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 170,
    q: "What is the difference between a C array and a pointer?",
    qChinese: "C数组和指针有什么区别？",
    options: [
      "A) They are identical",
      "B) Pointers cannot access array elements",
      "C) An array name is a constant pointer to the first element; a pointer variable can be reassigned",
      "D) Arrays are stored on the heap; pointers on the stack"
    ],
    optionsChinese: [
      "A) 它们相同",
      "B) 指针不能访问数组元素",
      "C) 数组名是指向第一个元素的常量指针；指针变量可以重新赋值",
      "D) 数组存储在堆上；指针在栈上"
    ],
    answer: 2,
    explanation: "An array name decays to a pointer to its first element in most expressions but is not a variable (cannot be reassigned). sizeof(array) gives total array size, while sizeof(pointer) gives pointer size. Arrays allocate contiguous memory for all elements; pointers just store an address. Both support [] indexing syntax.",
    explanationChinese: "数组名在大多数表达式中退化为指向其第一个元素的指针，但不是变量（不能重新赋值）。sizeof(array)给出数组总大小，而sizeof(pointer)给出指针大小。数组为所有元素分配连续内存；指针只存储地址。两者都支持[]索引语法。",
    diagram: "",
    terms: ["array", "pointer", "memory_allocation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 171,
    q: "What is a double pointer (pointer to pointer) in C?",
    qChinese: "C语言中的双重指针（指向指针的指针）是什么？",
    options: [
      "A) A pointer that stores twice the address",
      "B) A pointer with double the size",
      "C) Two pointers pointing to the same variable",
      "D) A pointer that stores the address of another pointer"
    ],
    optionsChinese: [
      "A) 存储两倍地址的指针",
      "B) 大小翻倍的指针",
      "C) 两个指针指向同一变量",
      "D) 存储另一个指针地址的指针"
    ],
    answer: 3,
    explanation: "A double pointer (int **pp) stores the address of another pointer. This allows functions to modify a pointer passed as an argument, enables 2D dynamic arrays, and is used for arrays of strings (char **argv in main). Dereferencing twice (**pp) accesses the final value. Each level of indirection adds flexibility.",
    explanationChinese: "双重指针（int **pp）存储另一个指针的地址。这允许函数修改作为参数传递的指针，支持二维动态数组，并用于字符串数组（main中的char **argv）。解引用两次（**pp）访问最终值。每级间接引用增加灵活性。",
    diagram: "",
    terms: ["pointer", "memory_allocation", "indirection"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 172,
    q: "What is the purpose of the free() function in C?",
    qChinese: "C语言中free()函数的目的是什么？",
    options: [
      "A) Freeing stack memory",
      "B) Deallocating heap memory previously allocated by malloc/calloc/realloc",
      "C) Closing a file",
      "D) Removing a variable from scope"
    ],
    optionsChinese: [
      "A) 释放栈内存",
      "B) 释放之前由malloc/calloc/realloc分配的堆内存",
      "C) 关闭文件",
      "D) 从作用域中移除变量"
    ],
    answer: 1,
    explanation: "free() deallocates heap memory that was allocated by malloc(), calloc(), or realloc(). After calling free(ptr), the memory is returned to the system for reuse. Using a pointer after free (dangling pointer) causes undefined behavior. Best practice: set the pointer to NULL after freeing.",
    explanationChinese: "free()释放由malloc()、calloc()或realloc()分配的堆内存。调用free(ptr)后，内存返回系统以供重用。在free后使用指针（悬空指针）导致未定义行为。最佳实践：释放后将指针设为NULL。",
    diagram: "",
    terms: ["memory_allocation", "pointer", "heap"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 173,
    q: "What is a dangling pointer?",
    qChinese: "什么是悬空指针？",
    options: [
      "A) A pointer that is NULL",
      "B) A pointer to a local variable in main",
      "C) A pointer that points to memory that has been freed or is no longer valid",
      "D) A pointer that was never initialized"
    ],
    optionsChinese: [
      "A) NULL指针",
      "B) 指向main中局部变量的指针",
      "C) 指向已释放或不再有效的内存的指针",
      "D) 从未初始化的指针"
    ],
    answer: 2,
    explanation: "A dangling pointer points to memory that has been freed (via free()) or to a local variable whose scope has ended. Using a dangling pointer leads to undefined behavior: it might work, crash, or corrupt data. To prevent: set pointers to NULL after free(), and never return addresses of local variables from functions.",
    explanationChinese: "悬空指针指向已释放（通过free()）的内存或作用域已结束的局部变量。使用悬空指针导致未定义行为：可能正常工作、崩溃或损坏数据。预防方法：free()后将指针设为NULL，永远不要从函数返回局部变量的地址。",
    diagram: "",
    terms: ["pointer", "memory_allocation", "runtime_error"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 174,
    q: "What is the difference between C and C++ in terms of object-oriented features?",
    qChinese: "C和C++在面向对象特性方面有什么区别？",
    options: [
      "A) Both fully support OOP",
      "B) There is no difference",
      "C) C supports classes; C++ does not",
      "D) C is procedural; C++ adds classes, inheritance, polymorphism, and encapsulation"
    ],
    optionsChinese: [
      "A) 两者都完全支持OOP",
      "B) 没有区别",
      "C) C支持类；C++不支持",
      "D) C是过程式的；C++添加了类、继承、多态和封装"
    ],
    answer: 3,
    explanation: "C is a procedural language using functions and structs. C++ extends C with object-oriented features: classes (with access modifiers), inheritance, polymorphism (virtual functions), encapsulation, templates, and more. C++ also adds references, namespaces, exceptions, and the Standard Template Library (STL).",
    explanationChinese: "C是使用函数和结构体的过程式语言。C++用面向对象特性扩展了C：类（带访问修饰符）、继承、多态（虚函数）、封装、模板等。C++还添加了引用、命名空间、异常和标准模板库（STL）。",
    diagram: "",
    terms: ["class", "inheritance", "polymorphism"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 175,
    q: "What is the #include preprocessor directive in C?",
    qChinese: "C语言中#include预处理指令是什么？",
    options: [
      "A) A function call",
      "B) A directive that inserts the contents of a header file into the source file before compilation",
      "C) A command to link libraries",
      "D) A way to define variables"
    ],
    optionsChinese: [
      "A) 函数调用",
      "B) 在编译前将头文件内容插入源文件的指令",
      "C) 链接库的命令",
      "D) 定义变量的方式"
    ],
    answer: 1,
    explanation: "#include is a preprocessor directive that copies the contents of the specified file into the current file. <stdio.h> searches system directories; \"myheader.h\" searches the current directory first. Header files typically contain function declarations, macros, and type definitions that enable modular programming.",
    explanationChinese: "#include是一个预处理指令，将指定文件的内容复制到当前文件中。<stdio.h>搜索系统目录；\"myheader.h\"先搜索当前目录。头文件通常包含函数声明、宏和类型定义，实现模块化编程。",
    diagram: "",
    terms: ["compiler", "preprocessor", "header_file"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 176,
    q: "What is a buffer overflow in C?",
    qChinese: "C语言中的缓冲区溢出是什么？",
    options: [
      "A) When a buffer has too much free space",
      "B) When a file is too large to read",
      "C) Writing data beyond the bounds of an allocated buffer, potentially overwriting adjacent memory",
      "D) When a print buffer is full"
    ],
    optionsChinese: [
      "A) 当缓冲区有太多空闲空间时",
      "B) 当文件太大无法读取时",
      "C) 将数据写入超出已分配缓冲区边界，可能覆盖相邻内存",
      "D) 当打印缓冲区满时"
    ],
    answer: 2,
    explanation: "A buffer overflow occurs when a program writes data past the end of an allocated buffer. This can corrupt adjacent variables, crash the program, or create security vulnerabilities (exploits can inject malicious code). C does not perform bounds checking. Use safe functions like strncpy instead of strcpy, and fgets instead of gets.",
    explanationChinese: "缓冲区溢出发生在程序将数据写入超出已分配缓冲区末尾时。这可能损坏相邻变量、使程序崩溃或创建安全漏洞（攻击者可以注入恶意代码）。C不执行边界检查。使用安全函数如strncpy替代strcpy，fgets替代gets。",
    diagram: "",
    terms: ["array", "memory_allocation", "security"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 177,
    q: "What is the difference between stack and heap memory in C?",
    qChinese: "C语言中栈内存和堆内存有什么区别？",
    options: [
      "A) Stack is slower; heap is faster",
      "B) They are the same region of memory",
      "C) Heap is for local variables; stack is for global",
      "D) Stack stores local variables with automatic management; heap stores dynamically allocated memory requiring manual management"
    ],
    optionsChinese: [
      "A) 栈更慢；堆更快",
      "B) 它们是相同的内存区域",
      "C) 堆用于局部变量；栈用于全局变量",
      "D) 栈存储具有自动管理的局部变量；堆存储需要手动管理的动态分配内存"
    ],
    answer: 3,
    explanation: "Stack memory is managed automatically by the compiler for local variables and function calls. It is fast but limited in size. Heap memory is managed manually via malloc/free for dynamic allocation. It is larger but slower and prone to leaks. Stack variables are freed when the function returns; heap variables persist until explicitly freed.",
    explanationChinese: "栈内存由编译器自动管理，用于局部变量和函数调用。它快速但大小有限。堆内存通过malloc/free手动管理，用于动态分配。它更大但更慢，容易泄漏。栈变量在函数返回时释放；堆变量在显式释放前持续存在。",
    diagram: "",
    terms: ["stack", "heap", "memory_allocation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 178,
    q: "What is a typedef in C?",
    qChinese: "C语言中的typedef是什么？",
    options: [
      "A) A way to create new data types from scratch",
      "B) A way to create an alias for an existing type",
      "C) A function declaration",
      "D) A loop construct"
    ],
    optionsChinese: [
      "A) 从头创建新数据类型的方式",
      "B) 为现有类型创建别名的方式",
      "C) 函数声明",
      "D) 循环构造"
    ],
    answer: 1,
    explanation: "typedef creates an alias for an existing type, improving code readability. For example: typedef unsigned long ulong; or typedef struct Node { int data; struct Node *next; } Node; This allows using 'Node' instead of 'struct Node'. typedef is especially useful with structs, function pointers, and complex type declarations.",
    explanationChinese: "typedef为现有类型创建别名，提高代码可读性。例如：typedef unsigned long ulong;或typedef struct Node { int data; struct Node *next; } Node;这允许使用'Node'而不是'struct Node'。typedef在结构体、函数指针和复杂类型声明中特别有用。",
    diagram: "",
    terms: ["data_type", "struct", "typedef"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 179,
    q: "What is the difference between char *str and char str[] in C?",
    qChinese: "C语言中char *str和char str[]有什么区别？",
    options: [
      "A) No difference",
      "B) char *str is always on the heap",
      "C) char str[] is a pointer; char *str is an array",
      "D) char *str points to a string literal (read-only); char str[] creates a modifiable local copy"
    ],
    optionsChinese: [
      "A) 没有区别",
      "B) char *str总是在堆上",
      "C) char str[]是指针；char *str是数组",
      "D) char *str指向字符串字面量（只读）；char str[]创建可修改的本地副本"
    ],
    answer: 3,
    explanation: "char *str = \"hello\" creates a pointer to a string literal stored in read-only memory; modifying it causes undefined behavior. char str[] = \"hello\" creates a local array on the stack with a copy of the string that can be modified. This distinction is crucial for avoiding segfaults when modifying strings.",
    explanationChinese: "char *str = \"hello\"创建指向存储在只读内存中的字符串字面量的指针；修改它导致未定义行为。char str[] = \"hello\"在栈上创建一个字符串副本的本地数组，可以修改。这个区别对于避免修改字符串时的段错误至关重要。",
    diagram: "",
    terms: ["pointer", "array", "string"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 180,
    q: "What is the volatile keyword in C?",
    qChinese: "C语言中volatile关键字是什么？",
    options: [
      "A) Makes a variable constant",
      "B) Tells the compiler the variable may change unexpectedly, preventing optimization",
      "C) Makes a variable thread-safe",
      "D) Allocates variable on the heap"
    ],
    optionsChinese: [
      "A) 使变量成为常量",
      "B) 告诉编译器变量可能意外改变，防止优化",
      "C) 使变量线程安全",
      "D) 在堆上分配变量"
    ],
    answer: 1,
    explanation: "The volatile keyword tells the compiler that a variable's value may change at any time without any action being taken by the code (e.g., hardware registers, memory-mapped I/O, or variables modified by interrupt handlers). The compiler will not optimize away reads or cache the variable's value, ensuring fresh reads from memory.",
    explanationChinese: "volatile关键字告诉编译器变量的值可能在任何时候改变，而不需要代码采取任何操作（如硬件寄存器、内存映射I/O或被中断处理程序修改的变量）。编译器不会优化掉读取或缓存变量的值，确保从内存中新鲜读取。",
    diagram: "",
    terms: ["variable", "compiler", "optimization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 181,
    q: "What is a function pointer in C?",
    qChinese: "C语言中的函数指针是什么？",
    options: [
      "A) A pointer returned by a function",
      "B) A function that takes no parameters",
      "C) A pointer inside a function",
      "D) A pointer that stores the address of a function, enabling dynamic function calls"
    ],
    optionsChinese: [
      "A) 函数返回的指针",
      "B) 不带参数的函数",
      "C) 函数内部的指针",
      "D) 存储函数地址的指针，实现动态函数调用"
    ],
    answer: 3,
    explanation: "A function pointer stores the address of a function and allows calling functions indirectly. Declaration: int (*fptr)(int, int); enables fptr to point to any function taking two ints and returning an int. Function pointers enable callbacks, strategy patterns, and jump tables in C programs.",
    explanationChinese: "函数指针存储函数的地址，允许间接调用函数。声明：int (*fptr)(int, int);使fptr可以指向任何接受两个int并返回int的函数。函数指针在C程序中实现回调、策略模式和跳转表。",
    diagram: "",
    terms: ["pointer", "function", "callback"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 182,
    q: "What is the sizeof operator in C?",
    qChinese: "C语言中sizeof运算符是什么？",
    options: [
      "A) Returns the number of elements in an array",
      "B) Returns the memory address size",
      "C) Returns the length of a string",
      "D) Returns the size in bytes of a type or variable at compile time"
    ],
    optionsChinese: [
      "A) 返回数组中的元素数量",
      "B) 返回内存地址大小",
      "C) 返回字符串的长度",
      "D) 在编译时返回类型或变量的字节大小"
    ],
    answer: 3,
    explanation: "sizeof is a compile-time operator that returns the size in bytes of a data type or variable. sizeof(int) is typically 4, sizeof(char) is always 1. For arrays, sizeof(arr) returns total byte size. To get element count: sizeof(arr) / sizeof(arr[0]). sizeof is evaluated at compile time, not runtime.",
    explanationChinese: "sizeof是一个编译时运算符，返回数据类型或变量的字节大小。sizeof(int)通常为4，sizeof(char)总是1。对于数组，sizeof(arr)返回总字节大小。获取元素数量：sizeof(arr) / sizeof(arr[0])。sizeof在编译时求值，而非运行时。",
    diagram: "",
    terms: ["operator", "data_type", "memory_allocation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 183,
    q: "What is the difference between const int *p and int *const p in C?",
    qChinese: "C语言中const int *p和int *const p有什么区别？",
    options: [
      "A) They are the same",
      "B) const int *p is faster",
      "C) const int *p: pointed value is constant; int *const p: the pointer itself is constant",
      "D) int *const p points to NULL"
    ],
    optionsChinese: [
      "A) 它们相同",
      "B) const int *p更快",
      "C) const int *p：指向的值是常量；int *const p：指针本身是常量",
      "D) int *const p指向NULL"
    ],
    answer: 2,
    explanation: "const int *p (pointer to const int): you cannot modify the value through p (*p = 5 is illegal), but you can change what p points to. int *const p (const pointer to int): the pointer p cannot be reassigned, but you can modify the value it points to. Read declarations right to left for clarity.",
    explanationChinese: "const int *p（指向const int的指针）：不能通过p修改值（*p = 5非法），但可以改变p指向的对象。int *const p（指向int的const指针）：指针p不能重新赋值，但可以修改它指向的值。从右到左阅读声明以更清晰。",
    diagram: "",
    terms: ["pointer", "constant", "variable"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 184,
    q: "What is the purpose of realloc() in C?",
    qChinese: "C语言中realloc()的目的是什么？",
    options: [
      "A) Resizing a previously allocated memory block, preserving existing data",
      "B) Allocating new memory",
      "C) Freeing memory",
      "D) Copying memory between two blocks"
    ],
    optionsChinese: [
      "A) 调整之前分配的内存块大小，保留现有数据",
      "B) 分配新内存",
      "C) 释放内存",
      "D) 在两个块之间复制内存"
    ],
    answer: 0,
    explanation: "realloc(ptr, new_size) changes the size of a previously allocated memory block. If the block can be extended in place, it does so. Otherwise, it allocates new memory, copies existing data, and frees the old block. Returns NULL on failure (original block unchanged). Always assign result to a temporary pointer to avoid memory leaks.",
    explanationChinese: "realloc(ptr, new_size)更改之前分配的内存块的大小。如果可以在原地扩展，就原地扩展。否则，分配新内存，复制现有数据，并释放旧块。失败时返回NULL（原块不变）。始终将结果赋给临时指针以避免内存泄漏。",
    diagram: "",
    terms: ["memory_allocation", "pointer", "heap"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 185,
    q: "What is the difference between a union and a struct in C?",
    qChinese: "C语言中联合体和结构体有什么区别？",
    options: [
      "A) Struct allocates memory for all members; union shares memory among members, using only the largest member's size",
      "B) They are the same",
      "C) Union is faster than struct",
      "D) Struct can only have one member"
    ],
    optionsChinese: [
      "A) 结构体为所有成员分配内存；联合体在成员之间共享内存，只使用最大成员的大小",
      "B) 它们相同",
      "C) 联合体比结构体更快",
      "D) 结构体只能有一个成员"
    ],
    answer: 0,
    explanation: "A struct allocates separate memory for each member; its size is at least the sum of all member sizes (with padding). A union shares the same memory location for all members; its size equals the largest member. Only one member can hold a valid value at a time. Unions save memory when only one field is needed at a time.",
    explanationChinese: "结构体为每个成员分配单独的内存；其大小至少是所有成员大小之和（加上填充）。联合体为所有成员共享相同的内存位置；其大小等于最大成员。同一时间只有一个成员可以保存有效值。当同一时间只需要一个字段时，联合体节省内存。",
    diagram: "",
    terms: ["struct", "union", "memory_allocation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 186,
    q: "What is the difference between #define and const in C?",
    qChinese: "C语言中#define和const有什么区别？",
    options: [
      "A) #define is a preprocessor text substitution; const creates a typed, scoped constant variable",
      "B) They are identical",
      "C) const is faster than #define",
      "D) #define creates variables; const creates macros"
    ],
    optionsChinese: [
      "A) #define是预处理器文本替换；const创建有类型、有作用域的常量变量",
      "B) 它们相同",
      "C) const比#define更快",
      "D) #define创建变量；const创建宏"
    ],
    answer: 0,
    explanation: "#define is a preprocessor macro that performs text substitution before compilation; it has no type checking or scope. const creates a typed variable whose value cannot be changed. const respects scope rules and enables type checking by the compiler. Modern C practice prefers const for type safety, but #define is needed for conditional compilation.",
    explanationChinese: "#define是预处理器宏，在编译前执行文本替换；它没有类型检查或作用域。const创建一个值不能更改的有类型变量。const遵守作用域规则并允许编译器进行类型检查。现代C实践出于类型安全优先使用const，但条件编译需要#define。",
    diagram: "",
    terms: ["preprocessor", "constant", "compiler"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 187,
    q: "What is the purpose of header guards (#ifndef) in C?",
    qChinese: "C语言中头文件保护（#ifndef）的目的是什么？",
    options: [
      "A) Preventing multiple inclusion of the same header file",
      "B) Preventing syntax errors",
      "C) Speeding up compilation",
      "D) Encrypting header file contents"
    ],
    optionsChinese: [
      "A) 防止同一头文件被多次包含",
      "B) 防止语法错误",
      "C) 加速编译",
      "D) 加密头文件内容"
    ],
    answer: 0,
    explanation: "Header guards (#ifndef HEADER_H, #define HEADER_H, ... #endif) prevent a header file from being included multiple times in a compilation unit, which would cause duplicate definition errors. The first inclusion defines the guard macro; subsequent inclusions skip the content. #pragma once is a modern alternative supported by most compilers.",
    explanationChinese: "头文件保护（#ifndef HEADER_H、#define HEADER_H、...#endif）防止头文件在编译单元中被多次包含，这会导致重复定义错误。第一次包含定义保护宏；后续包含跳过内容。#pragma once是大多数编译器支持的现代替代方案。",
    diagram: "",
    terms: ["preprocessor", "header_file", "compiler"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 188,
    q: "What does the static keyword mean for a local variable in C?",
    qChinese: "C语言中static关键字对局部变量意味着什么？",
    options: [
      "A) The variable persists between function calls, retaining its value",
      "B) The variable cannot be modified",
      "C) The variable is stored on the heap",
      "D) The variable is accessible from other files"
    ],
    optionsChinese: [
      "A) 变量在函数调用之间持续存在，保留其值",
      "B) 变量不能被修改",
      "C) 变量存储在堆上",
      "D) 变量可从其他文件访问"
    ],
    answer: 0,
    explanation: "A static local variable is initialized once and persists for the lifetime of the program, retaining its value between function calls. Unlike normal local variables that are created and destroyed with each call, static locals are stored in the data segment. The variable's scope remains local to the function.",
    explanationChinese: "静态局部变量初始化一次，在程序的整个生命周期内持续存在，在函数调用之间保留其值。与每次调用时创建和销毁的普通局部变量不同，静态局部变量存储在数据段中。变量的作用域仍然局限于函数。",
    diagram: "",
    terms: ["variable", "static", "scope"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 189,
    q: "What is the difference between printf() and fprintf() in C?",
    qChinese: "C语言中printf()和fprintf()有什么区别？",
    options: [
      "A) printf() is faster",
      "B) printf() writes to stdout; fprintf() writes to any specified file stream",
      "C) fprintf() only works with strings",
      "D) They are identical"
    ],
    optionsChinese: [
      "A) printf()更快",
      "B) printf()写入stdout；fprintf()写入任何指定的文件流",
      "C) fprintf()仅适用于字符串",
      "D) 它们相同"
    ],
    answer: 1,
    explanation: "printf() writes formatted output to the standard output (stdout/console). fprintf() writes formatted output to a specified file stream, which can be stdout, stderr, or any FILE pointer opened with fopen(). fprintf(stderr, \"Error\") is common for error messages. printf(\"...\") is equivalent to fprintf(stdout, \"...\").",
    explanationChinese: "printf()将格式化输出写入标准输出（stdout/控制台）。fprintf()将格式化输出写入指定的文件流，可以是stdout、stderr或用fopen()打开的任何FILE指针。fprintf(stderr, \"Error\")常用于错误消息。printf(\"...\")等同于fprintf(stdout, \"...\")。",
    diagram: "",
    terms: ["function", "file_io", "output"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 190,
    q: "What is an enum in C?",
    qChinese: "C语言中的枚举是什么？",
    options: [
      "A) A dynamic array type",
      "B) A pointer type",
      "C) A string type",
      "D) A user-defined type consisting of named integer constants"
    ],
    optionsChinese: [
      "A) 动态数组类型",
      "B) 指针类型",
      "C) 字符串类型",
      "D) 由命名整数常量组成的用户定义类型"
    ],
    answer: 3,
    explanation: "An enum in C defines a set of named integer constants. enum Color { RED, GREEN, BLUE }; assigns RED=0, GREEN=1, BLUE=2 by default. You can assign specific values: enum Status { OK=200, NOT_FOUND=404 }. Enums improve code readability by replacing magic numbers with meaningful names.",
    explanationChinese: "C中的枚举定义一组命名的整数常量。enum Color { RED, GREEN, BLUE };默认赋值RED=0、GREEN=1、BLUE=2。你可以指定特定值：enum Status { OK=200, NOT_FOUND=404 }。枚举通过用有意义的名称替换魔术数字来提高代码可读性。",
    diagram: "",
    terms: ["enum", "constant", "data_type"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 191,
    q: "What is the purpose of the extern keyword in C?",
    qChinese: "C语言中extern关键字的目的是什么？",
    options: [
      "A) To declare a variable or function defined in another file",
      "B) To make a variable local to a function",
      "C) To allocate memory on the heap",
      "D) To create a constant"
    ],
    optionsChinese: [
      "A) 声明在另一个文件中定义的变量或函数",
      "B) 使变量局限于函数",
      "C) 在堆上分配内存",
      "D) 创建常量"
    ],
    answer: 0,
    explanation: "The extern keyword declares that a variable or function exists in another translation unit (source file). It tells the compiler the definition is elsewhere, resolved by the linker. extern int count; declares count without allocating memory. This enables sharing global variables and functions across multiple source files.",
    explanationChinese: "extern关键字声明变量或函数存在于另一个翻译单元（源文件）中。它告诉编译器定义在别处，由链接器解析。extern int count;声明count但不分配内存。这实现了跨多个源文件共享全局变量和函数。",
    diagram: "",
    terms: ["variable", "compiler", "linker"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 192,
    q: "What is the output of this C code?\nint arr[] = {10, 20, 30, 40};\nint *p = arr;\nprintf(\"%d\", *(p + 2));",
    qChinese: "这段C代码的输出是什么？\nint arr[] = {10, 20, 30, 40};\nint *p = arr;\nprintf(\"%d\", *(p + 2));",
    options: [
      "A) 10",
      "B) 30",
      "C) 20",
      "D) 40"
    ],
    optionsChinese: [
      "A) 10",
      "B) 30",
      "C) 20",
      "D) 40"
    ],
    answer: 1,
    explanation: "p points to arr[0] (value 10). p + 2 advances the pointer by 2 int positions, pointing to arr[2]. Dereferencing with *(p + 2) gives the value 30. This is equivalent to arr[2] or p[2]. Pointer arithmetic automatically scales by the size of the pointed-to type (4 bytes for int).",
    explanationChinese: "p指向arr[0]（值10）。p + 2将指针前进2个int位置，指向arr[2]。用*(p + 2)解引用得到值30。这等同于arr[2]或p[2]。指针运算自动按指向类型的大小缩放（int为4字节）。",
    diagram: "",
    terms: ["pointer", "array", "dereference"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 193,
    q: "What is a reference in C++?",
    qChinese: "C++中的引用是什么？",
    options: [
      "A) An alias for an existing variable that must be initialized and cannot be reassigned",
      "B) Same as a pointer",
      "C) A copy of a variable",
      "D) A type of array"
    ],
    optionsChinese: [
      "A) 现有变量的别名，必须初始化且不能重新赋值",
      "B) 与指针相同",
      "C) 变量的副本",
      "D) 一种数组"
    ],
    answer: 0,
    explanation: "A C++ reference (int &ref = x) creates an alias for an existing variable. Unlike pointers, references must be initialized at declaration, cannot be null, and cannot be reassigned to refer to a different variable. They provide cleaner syntax for pass-by-reference parameters and are safer than pointers for most use cases.",
    explanationChinese: "C++引用（int &ref = x）为现有变量创建别名。与指针不同，引用必须在声明时初始化，不能为null，不能重新赋值为引用不同的变量。它们为按引用传递参数提供更简洁的语法，在大多数用例中比指针更安全。",
    diagram: "",
    terms: ["reference", "pointer", "variable"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 194,
    q: "What is the purpose of the new and delete operators in C++?",
    qChinese: "C++中new和delete运算符的目的是什么？",
    options: [
      "A) Creating and deleting files",
      "B) Creating and removing variables from scope",
      "C) Allocating and deallocating dynamic memory on the heap",
      "D) Starting and stopping threads"
    ],
    optionsChinese: [
      "A) 创建和删除文件",
      "B) 从作用域中创建和移除变量",
      "C) 在堆上分配和释放动态内存",
      "D) 启动和停止线程"
    ],
    answer: 2,
    explanation: "In C++, 'new' allocates memory on the heap and calls the constructor. 'delete' calls the destructor and frees the memory. For arrays, use new[] and delete[]. Unlike C's malloc/free, new/delete are type-safe and invoke constructors/destructors. Modern C++ prefers smart pointers (unique_ptr, shared_ptr) over raw new/delete.",
    explanationChinese: "在C++中，'new'在堆上分配内存并调用构造函数。'delete'调用析构函数并释放内存。对于数组，使用new[]和delete[]。与C的malloc/free不同，new/delete是类型安全的，并调用构造函数/析构函数。现代C++优先使用智能指针（unique_ptr、shared_ptr）而非原始new/delete。",
    diagram: "",
    terms: ["memory_allocation", "constructor", "heap"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 195,
    q: "What is the Standard Template Library (STL) in C++?",
    qChinese: "C++中的标准模板库（STL）是什么？",
    options: [
      "A) A collection of template-based containers, algorithms, and iterators",
      "B) A GUI library",
      "C) A database library",
      "D) A networking library"
    ],
    optionsChinese: [
      "A) 基于模板的容器、算法和迭代器的集合",
      "B) GUI库",
      "C) 数据库库",
      "D) 网络库"
    ],
    answer: 0,
    explanation: "The STL provides generic containers (vector, list, map, set), algorithms (sort, find, transform), and iterators for traversal. Templates enable type-safe generic programming. vector<int> is a dynamic array, map<string,int> is an associative container. STL is fundamental to modern C++ and promotes code reuse.",
    explanationChinese: "STL提供泛型容器（vector、list、map、set）、算法（sort、find、transform）和用于遍历的迭代器。模板实现类型安全的泛型编程。vector<int>是动态数组，map<string,int>是关联容器。STL是现代C++的基础，促进代码重用。",
    diagram: "",
    terms: ["template", "container", "algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 196,
    q: "What is a system call?",
    qChinese: "什么是系统调用？",
    options: [
      "A) A call to a library function",
      "B) A network request",
      "C) A function call within the same program",
      "D) A request from a user program to the operating system kernel for a service"
    ],
    optionsChinese: [
      "A) 对库函数的调用",
      "B) 网络请求",
      "C) 同一程序内的函数调用",
      "D) 用户程序向操作系统内核请求服务"
    ],
    answer: 3,
    explanation: "A system call is an interface between a user-space program and the operating system kernel. Programs use system calls for operations like file I/O (open, read, write, close), process management (fork, exec, wait), and memory allocation (mmap, brk). System calls switch from user mode to kernel mode for privileged operations.",
    explanationChinese: "系统调用是用户空间程序和操作系统内核之间的接口。程序使用系统调用进行文件I/O（open、read、write、close）、进程管理（fork、exec、wait）和内存分配（mmap、brk）等操作。系统调用从用户模式切换到内核模式执行特权操作。",
    diagram: "",
    terms: ["system_call", "kernel", "process"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 197,
    q: "What is the purpose of the fork() system call in Unix/Linux?",
    qChinese: "Unix/Linux中fork()系统调用的目的是什么？",
    options: [
      "A) Creating a new child process that is a copy of the parent",
      "B) Creating a new thread",
      "C) Terminating a process",
      "D) Opening a file"
    ],
    optionsChinese: [
      "A) 创建一个父进程副本的新子进程",
      "B) 创建新线程",
      "C) 终止进程",
      "D) 打开文件"
    ],
    answer: 0,
    explanation: "fork() creates a new child process that is an exact copy of the parent process, including code, data, and open file descriptors. After fork(), both processes continue from the same point. fork() returns 0 in the child and the child's PID in the parent. This is the primary mechanism for process creation in Unix.",
    explanationChinese: "fork()创建一个父进程的精确副本的新子进程，包括代码、数据和打开的文件描述符。fork()后，两个进程从同一点继续。fork()在子进程中返回0，在父进程中返回子进程的PID。这是Unix中进程创建的主要机制。",
    diagram: "",
    terms: ["process", "system_call", "fork"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 198,
    q: "What is a file descriptor in Unix?",
    qChinese: "Unix中的文件描述符是什么？",
    options: [
      "A) A non-negative integer that the kernel uses to identify an open file",
      "B) A string name of a file",
      "C) A pointer to a file on disk",
      "D) A file's metadata"
    ],
    optionsChinese: [
      "A) 内核用来标识打开文件的非负整数",
      "B) 文件的字符串名称",
      "C) 指向磁盘上文件的指针",
      "D) 文件的元数据"
    ],
    answer: 0,
    explanation: "A file descriptor is a non-negative integer that uniquely identifies an open file within a process. Standard file descriptors are: 0 (stdin), 1 (stdout), 2 (stderr). System calls like open() return new file descriptors. The kernel maintains a per-process file descriptor table mapping these integers to internal file structures.",
    explanationChinese: "文件描述符是一个非负整数，在进程中唯一标识一个打开的文件。标准文件描述符是：0（stdin）、1（stdout）、2（stderr）。open()等系统调用返回新的文件描述符。内核维护每个进程的文件描述符表，将这些整数映射到内部文件结构。",
    diagram: "",
    terms: ["file_io", "system_call", "process"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 199,
    q: "What is the difference between a process and a thread?",
    qChinese: "进程和线程有什么区别？",
    options: [
      "A) They are the same concept",
      "B) Processes are faster than threads",
      "C) Threads have their own memory space; processes share memory",
      "D) A process has its own memory space; threads share the same memory space within a process"
    ],
    optionsChinese: [
      "A) 它们是相同的概念",
      "B) 进程比线程更快",
      "C) 线程有自己的内存空间；进程共享内存",
      "D) 进程有自己的内存空间；线程在进程内共享相同的内存空间"
    ],
    answer: 3,
    explanation: "A process is an independent program execution with its own memory space, file descriptors, and resources. Threads are lightweight units of execution within a process that share the same memory space, heap, and global variables. Each thread has its own stack and program counter. Thread creation is cheaper than process creation.",
    explanationChinese: "进程是具有自己内存空间、文件描述符和资源的独立程序执行。线程是进程内共享相同内存空间、堆和全局变量的轻量级执行单元。每个线程有自己的栈和程序计数器。线程创建比进程创建开销更小。",
    diagram: "",
    terms: ["process", "thread", "memory_allocation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 200,
    q: "What does the exec() family of functions do in Unix?",
    qChinese: "Unix中exec()系列函数做什么？",
    options: [
      "A) Creates a new process",
      "B) Suspends the current process",
      "C) Terminates the current process",
      "D) Replaces the current process image with a new program"
    ],
    optionsChinese: [
      "A) 创建新进程",
      "B) 挂起当前进程",
      "C) 终止当前进程",
      "D) 用新程序替换当前进程映像"
    ],
    answer: 3,
    explanation: "The exec() family (execl, execv, execvp, etc.) replaces the current process's code, data, and stack with a new program. The PID remains the same. exec() does not return on success (the old program is gone). It is commonly used after fork(): the child calls exec() to run a different program while the parent continues.",
    explanationChinese: "exec()系列（execl、execv、execvp等）用新程序替换当前进程的代码、数据和栈。PID保持不变。exec()在成功时不返回（旧程序已消失）。它通常在fork()后使用：子进程调用exec()运行不同程序，而父进程继续。",
    diagram: "",
    terms: ["process", "system_call", "exec"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 201,
    q: "What is a pipe in Unix?",
    qChinese: "Unix中的管道是什么？",
    options: [
      "A) A type of file system",
      "B) A unidirectional inter-process communication channel",
      "C) A network protocol",
      "D) A memory allocation method"
    ],
    optionsChinese: [
      "A) 一种文件系统",
      "B) 单向进程间通信通道",
      "C) 网络协议",
      "D) 内存分配方法"
    ],
    answer: 1,
    explanation: "A pipe is a one-way communication channel between related processes. Created by pipe(fd), it provides two file descriptors: fd[0] for reading and fd[1] for writing. Data written to the write end can be read from the read end. Pipes are commonly used with fork() to connect parent and child process I/O, like the | operator in shell.",
    explanationChinese: "管道是相关进程之间的单向通信通道。由pipe(fd)创建，提供两个文件描述符：fd[0]用于读取，fd[1]用于写入。写入写端的数据可以从读端读取。管道常与fork()一起使用以连接父子进程的I/O，类似shell中的|运算符。",
    diagram: "",
    terms: ["process", "file_io", "ipc"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 202,
    q: "What is the wait() system call used for?",
    qChinese: "wait()系统调用的用途是什么？",
    options: [
      "A) Blocking the parent process until a child process terminates",
      "B) Pausing a thread for a specified time",
      "C) Waiting for user input",
      "D) Waiting for a file to be available"
    ],
    optionsChinese: [
      "A) 阻塞父进程直到子进程终止",
      "B) 将线程暂停指定时间",
      "C) 等待用户输入",
      "D) 等待文件可用"
    ],
    answer: 0,
    explanation: "wait() suspends the calling (parent) process until one of its child processes terminates. It returns the terminated child's PID and stores exit status information. waitpid() allows waiting for a specific child. Without wait(), terminated children become zombie processes consuming system resources until the parent collects their status.",
    explanationChinese: "wait()挂起调用（父）进程，直到其一个子进程终止。它返回已终止子进程的PID并存储退出状态信息。waitpid()允许等待特定子进程。没有wait()，终止的子进程成为僵尸进程，消耗系统资源直到父进程收集其状态。",
    diagram: "",
    terms: ["process", "system_call", "fork"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 203,
    q: "What is a zombie process?",
    qChinese: "什么是僵尸进程？",
    options: [
      "A) A process that consumes excessive CPU",
      "B) A process waiting for I/O",
      "C) A process in an infinite loop",
      "D) A terminated child process whose exit status has not been collected by its parent"
    ],
    optionsChinese: [
      "A) 消耗过多CPU的进程",
      "B) 等待I/O的进程",
      "C) 处于无限循环的进程",
      "D) 退出状态未被父进程收集的已终止子进程"
    ],
    answer: 3,
    explanation: "A zombie process is a child process that has finished execution but still has an entry in the process table because the parent has not called wait() to retrieve its exit status. Zombies consume a small amount of system resources (PID and process table entry). Too many zombies can exhaust process table entries.",
    explanationChinese: "僵尸进程是已完成执行但仍在进程表中有条目的子进程，因为父进程没有调用wait()来检索其退出状态。僵尸消耗少量系统资源（PID和进程表条目）。太多僵尸可能耗尽进程表条目。",
    diagram: "",
    terms: ["process", "system_call", "fork"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 204,
    q: "What are the standard file streams in C?",
    qChinese: "C语言中的标准文件流是什么？",
    options: [
      "A) input, output, log",
      "B) file1, file2, file3",
      "C) read, write, append",
      "D) stdin (standard input), stdout (standard output), stderr (standard error)"
    ],
    optionsChinese: [
      "A) input、output、log",
      "B) file1、file2、file3",
      "C) read、write、append",
      "D) stdin（标准输入）、stdout（标准输出）、stderr（标准错误）"
    ],
    answer: 3,
    explanation: "C provides three standard streams: stdin (file descriptor 0) for input, stdout (fd 1) for normal output, and stderr (fd 2) for error output. By default, stdin reads from keyboard, stdout and stderr write to terminal. They can be redirected in the shell: > for stdout, 2> for stderr, < for stdin.",
    explanationChinese: "C提供三个标准流：stdin（文件描述符0）用于输入，stdout（fd 1）用于正常输出，stderr（fd 2）用于错误输出。默认情况下，stdin从键盘读取，stdout和stderr写入终端。它们可以在shell中重定向：>用于stdout，2>用于stderr，<用于stdin。",
    diagram: "",
    terms: ["file_io", "stream", "output"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 205,
    q: "What is the difference between fopen() and open() in C?",
    qChinese: "C语言中fopen()和open()有什么区别？",
    options: [
      "A) fopen() is a C library function returning FILE*; open() is a system call returning a file descriptor",
      "B) They are identical",
      "C) open() is for C++; fopen() is for C",
      "D) fopen() is faster"
    ],
    optionsChinese: [
      "A) fopen()是返回FILE*的C库函数；open()是返回文件描述符的系统调用",
      "B) 它们相同",
      "C) open()用于C++；fopen()用于C",
      "D) fopen()更快"
    ],
    answer: 0,
    explanation: "fopen() is a high-level C standard library function that returns a FILE* pointer and provides buffered I/O with functions like fprintf, fscanf, fgets. open() is a low-level POSIX system call that returns an integer file descriptor and uses read/write for unbuffered I/O. fopen() is more portable; open() offers finer control.",
    explanationChinese: "fopen()是高级C标准库函数，返回FILE*指针，提供带缓冲的I/O操作（如fprintf、fscanf、fgets）。open()是低级POSIX系统调用，返回整数文件描述符，使用read/write进行无缓冲I/O。fopen()更具可移植性；open()提供更精细的控制。",
    diagram: "",
    terms: ["file_io", "system_call", "function"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 206,
    q: "What is a race condition?",
    qChinese: "什么是竞态条件？",
    options: [
      "A) A program that runs too fast",
      "B) A type of deadlock",
      "C) A situation where the outcome depends on the unpredictable timing of multiple threads or processes",
      "D) An optimization technique"
    ],
    optionsChinese: [
      "A) 运行太快的程序",
      "B) 一种死锁",
      "C) 结果取决于多个线程或进程不可预测时序的情况",
      "D) 一种优化技术"
    ],
    answer: 2,
    explanation: "A race condition occurs when two or more threads/processes access shared data concurrently, and the final result depends on the timing of their execution. This leads to unpredictable bugs. Solutions include mutexes, semaphores, and atomic operations. Race conditions are among the hardest bugs to debug because they may not reproduce consistently.",
    explanationChinese: "竞态条件发生在两个或多个线程/进程并发访问共享数据时，最终结果取决于它们执行的时序。这导致不可预测的错误。解决方案包括互斥锁、信号量和原子操作。竞态条件是最难调试的错误之一，因为它们可能不会一致地重现。",
    diagram: "",
    terms: ["thread", "synchronization", "concurrency"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 207,
    q: "What is a mutex?",
    qChinese: "什么是互斥锁？",
    options: [
      "A) A type of process",
      "B) A type of file lock",
      "C) A memory allocation method",
      "D) A synchronization primitive that ensures only one thread accesses a shared resource at a time"
    ],
    optionsChinese: [
      "A) 一种进程",
      "B) 一种文件锁",
      "C) 内存分配方法",
      "D) 确保同一时间只有一个线程访问共享资源的同步原语"
    ],
    answer: 3,
    explanation: "A mutex (mutual exclusion) is a synchronization object that allows only one thread to access a shared resource at a time. A thread must acquire (lock) the mutex before accessing the resource and release (unlock) it afterward. This prevents race conditions. In POSIX: pthread_mutex_lock() and pthread_mutex_unlock().",
    explanationChinese: "互斥锁（mutual exclusion）是一种同步对象，同一时间只允许一个线程访问共享资源。线程必须在访问资源前获取（锁定）互斥锁，之后释放（解锁）它。这防止竞态条件。在POSIX中：pthread_mutex_lock()和pthread_mutex_unlock()。",
    diagram: "",
    terms: ["thread", "synchronization", "mutex"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 208,
    q: "What is a deadlock?",
    qChinese: "什么是死锁？",
    options: [
      "A) A program that runs forever",
      "B) A memory leak that crashes the system",
      "C) A situation where two or more threads are blocked forever, each waiting for a resource held by the other",
      "D) A type of race condition"
    ],
    optionsChinese: [
      "A) 永远运行的程序",
      "B) 导致系统崩溃的内存泄漏",
      "C) 两个或多个线程永久阻塞的情况，每个都等待另一个持有的资源",
      "D) 一种竞态条件"
    ],
    answer: 2,
    explanation: "Deadlock occurs when threads hold resources and wait for resources held by other threads, forming a circular dependency. Four conditions are needed: mutual exclusion, hold-and-wait, no preemption, and circular wait. Prevention strategies include ordering lock acquisition, using timeouts, and avoiding hold-and-wait patterns.",
    explanationChinese: "死锁发生在线程持有资源并等待其他线程持有的资源时，形成循环依赖。需要四个条件：互斥、持有并等待、不可抢占和循环等待。预防策略包括排序锁获取、使用超时和避免持有并等待模式。",
    diagram: "",
    terms: ["thread", "synchronization", "deadlock"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 209,
    q: "What is the purpose of the dup2() system call?",
    qChinese: "dup2()系统调用的目的是什么？",
    options: [
      "A) Duplicating a process",
      "B) Creating a backup of a file",
      "C) Copying file contents",
      "D) Redirecting one file descriptor to refer to the same file as another"
    ],
    optionsChinese: [
      "A) 复制进程",
      "B) 创建文件备份",
      "C) 复制文件内容",
      "D) 重定向一个文件描述符引用与另一个相同的文件"
    ],
    answer: 3,
    explanation: "dup2(oldfd, newfd) makes newfd refer to the same file description as oldfd. If newfd was previously open, it is closed first. This is commonly used for I/O redirection: dup2(fd, STDOUT_FILENO) redirects stdout to a file. It is essential for implementing shell pipelines and output redirection.",
    explanationChinese: "dup2(oldfd, newfd)使newfd引用与oldfd相同的文件描述。如果newfd之前是打开的，会先关闭它。这常用于I/O重定向：dup2(fd, STDOUT_FILENO)将stdout重定向到文件。它对于实现shell管道和输出重定向至关重要。",
    diagram: "",
    terms: ["file_io", "system_call", "process"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 210,
    q: "What is a signal in Unix?",
    qChinese: "Unix中的信号是什么？",
    options: [
      "A) A network packet",
      "B) An asynchronous notification sent to a process to indicate an event",
      "C) A type of pipe",
      "D) A synchronization mechanism"
    ],
    optionsChinese: [
      "A) 网络数据包",
      "B) 发送给进程以指示事件的异步通知",
      "C) 一种管道",
      "D) 同步机制"
    ],
    answer: 1,
    explanation: "Signals are software interrupts sent to a process to notify it of events. Common signals: SIGINT (Ctrl+C), SIGTERM (termination request), SIGKILL (force kill), SIGSEGV (segfault). Processes can catch and handle most signals using signal() or sigaction(). SIGKILL and SIGSTOP cannot be caught or ignored.",
    explanationChinese: "信号是发送给进程以通知事件的软件中断。常见信号：SIGINT（Ctrl+C）、SIGTERM（终止请求）、SIGKILL（强制终止）、SIGSEGV（段错误）。进程可以使用signal()或sigaction()捕获和处理大多数信号。SIGKILL和SIGSTOP不能被捕获或忽略。",
    diagram: "",
    terms: ["process", "signal", "system_call"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 211,
    q: "What is the difference between buffered and unbuffered I/O?",
    qChinese: "缓冲I/O和非缓冲I/O有什么区别？",
    options: [
      "A) Buffered I/O is slower",
      "B) Unbuffered I/O uses more memory",
      "C) Buffered I/O collects data in a buffer before writing; unbuffered I/O writes immediately",
      "D) They perform identically"
    ],
    optionsChinese: [
      "A) 缓冲I/O更慢",
      "B) 非缓冲I/O使用更多内存",
      "C) 缓冲I/O在写入前在缓冲区中收集数据；非缓冲I/O立即写入",
      "D) 它们性能相同"
    ],
    answer: 2,
    explanation: "Buffered I/O (fread, fwrite, fprintf) accumulates data in a user-space buffer and performs actual system calls in larger batches, reducing the overhead of frequent small I/O operations. Unbuffered I/O (read, write) invokes a system call for every operation. Buffered I/O is generally more efficient for sequential access patterns.",
    explanationChinese: "缓冲I/O（fread、fwrite、fprintf）在用户空间缓冲区中积累数据，以较大批次执行实际系统调用，减少频繁小I/O操作的开销。非缓冲I/O（read、write）每次操作调用一次系统调用。缓冲I/O通常对顺序访问模式更高效。",
    diagram: "",
    terms: ["file_io", "buffer", "system_call"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 212,
    q: "What is the purpose of the chmod command in Unix?",
    qChinese: "Unix中chmod命令的目的是什么？",
    options: [
      "A) Changing file ownership",
      "B) Compiling source code",
      "C) Changing file access permissions (read, write, execute)",
      "D) Compressing files"
    ],
    optionsChinese: [
      "A) 更改文件所有权",
      "B) 编译源代码",
      "C) 更改文件访问权限（读、写、执行）",
      "D) 压缩文件"
    ],
    answer: 2,
    explanation: "chmod changes file permissions for owner, group, and others. Permissions are read (r=4), write (w=2), execute (x=1). chmod 755 file gives owner rwx (7), group r-x (5), others r-x (5). chmod can also use symbolic notation: chmod u+x file adds execute for the user. File permissions are crucial for Unix security.",
    explanationChinese: "chmod更改文件对所有者、组和其他人的权限。权限是读（r=4）、写（w=2）、执行（x=1）。chmod 755 file给所有者rwx（7）、组r-x（5）、其他人r-x（5）。chmod也可使用符号表示法：chmod u+x file为用户添加执行权限。文件权限对Unix安全至关重要。",
    diagram: "",
    terms: ["file_io", "permission", "security"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 213,
    q: "What is a semaphore?",
    qChinese: "什么是信号量？",
    options: [
      "A) A type of signal",
      "B) A synchronization primitive that controls access to a shared resource using a counter",
      "C) A memory allocation technique",
      "D) A type of process"
    ],
    optionsChinese: [
      "A) 一种信号",
      "B) 使用计数器控制对共享资源访问的同步原语",
      "C) 内存分配技术",
      "D) 一种进程"
    ],
    answer: 1,
    explanation: "A semaphore is a synchronization tool with an integer counter. sem_wait() decrements the counter (blocks if 0), and sem_post() increments it. A binary semaphore (0 or 1) acts like a mutex. A counting semaphore allows up to N threads to access a resource simultaneously. Semaphores solve producer-consumer and readers-writers problems.",
    explanationChinese: "信号量是具有整数计数器的同步工具。sem_wait()减少计数器（如果为0则阻塞），sem_post()增加计数器。二进制信号量（0或1）类似互斥锁。计数信号量允许最多N个线程同时访问资源。信号量解决生产者-消费者和读者-写者问题。",
    diagram: "",
    terms: ["synchronization", "thread", "semaphore"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 214,
    q: "What is the difference between a named pipe (FIFO) and an anonymous pipe?",
    qChinese: "命名管道（FIFO）和匿名管道有什么区别？",
    options: [
      "A) Named pipes are faster",
      "B) Named pipes are bidirectional; anonymous pipes are not",
      "C) Anonymous pipes work between related processes; named pipes can connect any processes via a filesystem path",
      "D) Anonymous pipes persist after the process ends"
    ],
    optionsChinese: [
      "A) 命名管道更快",
      "B) 命名管道是双向的；匿名管道不是",
      "C) 匿名管道在相关进程间工作；命名管道可以通过文件系统路径连接任何进程",
      "D) 匿名管道在进程结束后持续存在"
    ],
    answer: 2,
    explanation: "Anonymous pipes (created by pipe()) only work between related processes (parent-child). Named pipes (FIFOs, created by mkfifo()) have a filesystem path name and can connect unrelated processes. Both are unidirectional. Named pipes persist in the filesystem until deleted. Anonymous pipes exist only as long as the processes use them.",
    explanationChinese: "匿名管道（由pipe()创建）只在相关进程（父子）之间工作。命名管道（FIFO，由mkfifo()创建）有文件系统路径名，可以连接不相关的进程。两者都是单向的。命名管道在文件系统中持续存在直到被删除。匿名管道只在进程使用时存在。",
    diagram: "",
    terms: ["process", "file_io", "ipc"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 215,
    q: "What is the purpose of the select() system call?",
    qChinese: "select()系统调用的目的是什么？",
    options: [
      "A) Monitoring multiple file descriptors for readiness (readable, writable, or error)",
      "B) Selecting files to delete",
      "C) Selecting which process to run",
      "D) Choosing a network interface"
    ],
    optionsChinese: [
      "A) 监控多个文件描述符的就绪状态（可读、可写或错误）",
      "B) 选择要删除的文件",
      "C) 选择运行哪个进程",
      "D) 选择网络接口"
    ],
    answer: 0,
    explanation: "select() monitors multiple file descriptors to see if any are ready for I/O operations. It blocks until at least one descriptor is ready or a timeout occurs. This enables a single thread to handle multiple I/O sources efficiently (I/O multiplexing). Modern alternatives include poll() and epoll() which handle large numbers of descriptors better.",
    explanationChinese: "select()监控多个文件描述符以查看是否有任何准备好进行I/O操作。它阻塞直到至少一个描述符就绪或超时发生。这使单个线程能高效处理多个I/O源（I/O多路复用）。现代替代方案包括poll()和epoll()，它们能更好地处理大量描述符。",
    diagram: "",
    terms: ["file_io", "system_call", "concurrency"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 216,
    q: "What does the lseek() system call do?",
    qChinese: "lseek()系统调用做什么？",
    options: [
      "A) Searches for a string in a file",
      "B) Lists all open files",
      "C) Locks a file for exclusive access",
      "D) Repositions the file offset for read/write operations"
    ],
    optionsChinese: [
      "A) 在文件中搜索字符串",
      "B) 列出所有打开的文件",
      "C) 锁定文件以供独占访问",
      "D) 重新定位读/写操作的文件偏移量"
    ],
    answer: 3,
    explanation: "lseek(fd, offset, whence) repositions the read/write file offset. whence can be SEEK_SET (beginning), SEEK_CUR (current position), or SEEK_END (end of file). This enables random access to file contents. lseek() with SEEK_END can be used to determine file size. It works with regular files but not pipes or sockets.",
    explanationChinese: "lseek(fd, offset, whence)重新定位读/写文件偏移量。whence可以是SEEK_SET（开头）、SEEK_CUR（当前位置）或SEEK_END（文件末尾）。这实现了对文件内容的随机访问。lseek()与SEEK_END可用于确定文件大小。它适用于普通文件但不适用于管道或套接字。",
    diagram: "",
    terms: ["file_io", "system_call", "random_access"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 217,
    q: "What is the difference between a hard link and a soft (symbolic) link in Unix?",
    qChinese: "Unix中硬链接和软（符号）链接有什么区别？",
    options: [
      "A) Hard links share the same inode; soft links are separate files pointing to a path name",
      "B) They are the same",
      "C) Soft links are faster",
      "D) Hard links work across filesystems; soft links do not"
    ],
    optionsChinese: [
      "A) 硬链接共享相同的inode；软链接是指向路径名的单独文件",
      "B) 它们相同",
      "C) 软链接更快",
      "D) 硬链接跨文件系统工作；软链接不能"
    ],
    answer: 0,
    explanation: "A hard link is another directory entry for the same inode (same file data). Deleting one link does not affect others. A soft link (symlink) is a special file containing a path to the target. Soft links can cross filesystems and link to directories; hard links cannot. If the target of a symlink is deleted, the link becomes broken.",
    explanationChinese: "硬链接是同一inode的另一个目录条目（相同的文件数据）。删除一个链接不影响其他链接。软链接（符号链接）是包含目标路径的特殊文件。软链接可以跨文件系统并链接到目录；硬链接不能。如果软链接的目标被删除，链接变为断开的。",
    diagram: "",
    terms: ["file_io", "filesystem", "inode"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 218,
    q: "What is a thread pool?",
    qChinese: "什么是线程池？",
    options: [
      "A) A collection of all running threads on the system",
      "B) A debugging tool for threads",
      "C) A pre-created set of reusable threads that execute tasks from a queue",
      "D) A type of memory pool"
    ],
    optionsChinese: [
      "A) 系统上所有运行线程的集合",
      "B) 线程的调试工具",
      "C) 预创建的可重用线程集，从队列中执行任务",
      "D) 一种内存池"
    ],
    answer: 2,
    explanation: "A thread pool maintains a set of pre-created threads that wait for tasks. When a task arrives, an available thread executes it. This avoids the overhead of creating and destroying threads for each task. Thread pools are used in web servers, database systems, and any application that handles many concurrent requests efficiently.",
    explanationChinese: "线程池维护一组预创建的等待任务的线程。当任务到达时，可用线程执行它。这避免了为每个任务创建和销毁线程的开销。线程池用于Web服务器、数据库系统和任何需要高效处理许多并发请求的应用。",
    diagram: "",
    terms: ["thread", "concurrency", "optimization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 219,
    q: "What is the purpose of the mmap() system call?",
    qChinese: "mmap()系统调用的目的是什么？",
    options: [
      "A) Creating a new directory",
      "B) Managing mutex operations",
      "C) Measuring memory usage",
      "D) Mapping a file or device into the process's virtual memory space"
    ],
    optionsChinese: [
      "A) 创建新目录",
      "B) 管理互斥锁操作",
      "C) 测量内存使用",
      "D) 将文件或设备映射到进程的虚拟内存空间"
    ],
    answer: 3,
    explanation: "mmap() maps a file or device into the virtual address space of a process. This allows file access through memory reads/writes instead of read/write system calls. Benefits include avoiding copy overhead and enabling shared memory between processes. Memory-mapped files are efficient for large file random access and inter-process communication.",
    explanationChinese: "mmap()将文件或设备映射到进程的虚拟地址空间。这允许通过内存读写而非read/write系统调用访问文件。好处包括避免复制开销和实现进程间共享内存。内存映射文件对大文件随机访问和进程间通信高效。",
    diagram: "",
    terms: ["memory_allocation", "system_call", "virtual_memory"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 220,
    q: "What is the difference between user mode and kernel mode?",
    qChinese: "用户模式和内核模式有什么区别？",
    options: [
      "A) User mode is faster",
      "B) Kernel mode is for networking only",
      "C) They have the same privileges",
      "D) User mode has restricted access; kernel mode has full hardware access for privileged operations"
    ],
    optionsChinese: [
      "A) 用户模式更快",
      "B) 内核模式仅用于网络",
      "C) 它们有相同的权限",
      "D) 用户模式有限制访问；内核模式有完全硬件访问权限用于特权操作"
    ],
    answer: 3,
    explanation: "User mode restricts programs from directly accessing hardware or critical memory regions. Kernel mode allows the OS full access to all hardware and memory. System calls transition from user mode to kernel mode. This separation protects the system from buggy or malicious user programs and ensures stability and security.",
    explanationChinese: "用户模式限制程序直接访问硬件或关键内存区域。内核模式允许OS完全访问所有硬件和内存。系统调用从用户模式转换到内核模式。这种分离保护系统免受有错误或恶意的用户程序影响，确保稳定性和安全性。",
    diagram: "",
    terms: ["kernel", "process", "system_call"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 221,
    q: "What is a shared library (.so file) in Linux?",
    qChinese: "Linux中的共享库（.so文件）是什么？",
    options: [
      "A) A library loaded at runtime and shared among multiple programs to save memory",
      "B) A compressed source code file",
      "C) A configuration file",
      "D) A shell script"
    ],
    optionsChinese: [
      "A) 在运行时加载并在多个程序间共享以节省内存的库",
      "B) 压缩的源代码文件",
      "C) 配置文件",
      "D) Shell脚本"
    ],
    answer: 0,
    explanation: "Shared libraries (.so on Linux, .dll on Windows, .dylib on macOS) contain compiled code loaded at runtime by the dynamic linker. Multiple programs share a single copy in memory, reducing memory usage and disk space. Updates to the library benefit all programs without recompilation. Use -l flag to link and ldconfig to manage.",
    explanationChinese: "共享库（Linux上的.so、Windows上的.dll、macOS上的.dylib）包含由动态链接器在运行时加载的编译代码。多个程序共享内存中的单个副本，减少内存使用和磁盘空间。对库的更新使所有程序受益而无需重新编译。使用-l标志链接，用ldconfig管理。",
    diagram: "",
    terms: ["compiler", "linker", "memory_allocation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 222,
    q: "What is the purpose of the Makefile in C/C++ projects?",
    qChinese: "C/C++项目中Makefile的目的是什么？",
    options: [
      "A) A configuration file for the IDE",
      "B) A testing framework",
      "C) A documentation file",
      "D) An automation script for compiling, linking, and building projects"
    ],
    optionsChinese: [
      "A) IDE的配置文件",
      "B) 测试框架",
      "C) 文档文件",
      "D) 用于编译、链接和构建项目的自动化脚本"
    ],
    answer: 3,
    explanation: "A Makefile contains rules for the make build tool to compile and link source files. It specifies targets, dependencies, and commands. Make only recompiles files that changed, saving time. Rules follow the format: target: dependencies \\n\\t command. Makefiles are essential for managing complex C/C++ projects with multiple source files.",
    explanationChinese: "Makefile包含make构建工具编译和链接源文件的规则。它指定目标、依赖项和命令。Make只重新编译已更改的文件，节省时间。规则遵循格式：target: dependencies \\n\\t command。Makefile对于管理具有多个源文件的复杂C/C++项目至关重要。",
    diagram: "",
    terms: ["compiler", "build_system", "automation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 223,
    q: "What is the difference between static linking and dynamic linking?",
    qChinese: "静态链接和动态链接有什么区别？",
    options: [
      "A) Static linking is faster at runtime",
      "B) Static linking includes library code in the executable; dynamic linking loads libraries at runtime",
      "C) Dynamic linking produces smaller executables but requires libraries present at runtime",
      "D) Both B and C"
    ],
    optionsChinese: [
      "A) 静态链接在运行时更快",
      "B) 静态链接将库代码包含在可执行文件中；动态链接在运行时加载库",
      "C) 动态链接产生更小的可执行文件但需要运行时库存在",
      "D) B和C都对"
    ],
    answer: 3,
    explanation: "Static linking copies all used library code into the executable at compile time, creating a larger but self-contained binary. Dynamic linking stores references to shared libraries loaded at runtime, creating smaller executables but requiring the libraries to be present. Static linking has no runtime dependency; dynamic linking enables library updates without recompilation.",
    explanationChinese: "静态链接在编译时将所有使用的库代码复制到可执行文件中，创建更大但自包含的二进制文件。动态链接存储对运行时加载的共享库的引用，创建更小的可执行文件但要求库存在。静态链接没有运行时依赖；动态链接允许不重新编译就更新库。",
    diagram: "",
    terms: ["compiler", "linker", "library"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 224,
    q: "What is the purpose of environment variables in Unix?",
    qChinese: "Unix中环境变量的目的是什么？",
    options: [
      "A) Storing file contents",
      "B) Defining C variables",
      "C) Providing configuration values accessible to processes, like PATH and HOME",
      "D) Managing memory allocation"
    ],
    optionsChinese: [
      "A) 存储文件内容",
      "B) 定义C变量",
      "C) 提供进程可访问的配置值，如PATH和HOME",
      "D) 管理内存分配"
    ],
    answer: 2,
    explanation: "Environment variables are name-value pairs available to all processes. Common examples: PATH (executable search directories), HOME (user's home directory), USER (current user). Programs access them via getenv() in C. Child processes inherit parent's environment. They configure system behavior without hardcoding values in programs.",
    explanationChinese: "环境变量是所有进程可用的名称-值对。常见示例：PATH（可执行文件搜索目录）、HOME（用户主目录）、USER（当前用户）。程序通过C中的getenv()访问它们。子进程继承父进程的环境。它们在不在程序中硬编码值的情况下配置系统行为。",
    diagram: "",
    terms: ["process", "variable", "configuration"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 225,
    q: "What is a socket in network programming?",
    qChinese: "网络编程中的套接字是什么？",
    options: [
      "A) A physical network port",
      "B) An endpoint for communication between two processes, possibly on different machines",
      "C) A type of file",
      "D) A network cable connector"
    ],
    optionsChinese: [
      "A) 物理网络端口",
      "B) 两个进程之间通信的端点，可能在不同机器上",
      "C) 一种文件",
      "D) 网络电缆连接器"
    ],
    answer: 1,
    explanation: "A socket is an abstraction for network communication, providing an endpoint for sending and receiving data. In Unix, sockets use the file descriptor model. Key steps: socket() creates one, bind() assigns an address, listen()/accept() for servers, connect() for clients. TCP sockets provide reliable streams; UDP provides datagrams.",
    explanationChinese: "套接字是网络通信的抽象，提供发送和接收数据的端点。在Unix中，套接字使用文件描述符模型。关键步骤：socket()创建、bind()分配地址、listen()/accept()用于服务器、connect()用于客户端。TCP套接字提供可靠流；UDP提供数据报。",
    diagram: "",
    terms: ["network", "system_call", "ipc"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 226,
    q: "What is the role of the linker in the C compilation process?",
    qChinese: "C编译过程中链接器的作用是什么？",
    options: [
      "A) Combining object files and resolving external references to produce an executable",
      "B) Converting source code to assembly",
      "C) Checking syntax errors",
      "D) Optimizing the code"
    ],
    optionsChinese: [
      "A) 组合目标文件并解析外部引用以生成可执行文件",
      "B) 将源代码转换为汇编",
      "C) 检查语法错误",
      "D) 优化代码"
    ],
    answer: 0,
    explanation: "The linker combines multiple object files (.o) into a single executable. It resolves external symbol references (functions and variables defined in other files or libraries) and assigns final memory addresses. The full C compilation pipeline is: preprocessor -> compiler -> assembler -> linker. Linker errors indicate unresolved symbols.",
    explanationChinese: "链接器将多个目标文件（.o）组合成一个可执行文件。它解析外部符号引用（在其他文件或库中定义的函数和变量）并分配最终内存地址。完整的C编译流水线是：预处理器 -> 编译器 -> 汇编器 -> 链接器。链接器错误表示未解析的符号。",
    diagram: "",
    terms: ["compiler", "linker", "build_system"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 227,
    q: "What is the difference between blocking and non-blocking I/O?",
    qChinese: "阻塞I/O和非阻塞I/O有什么区别？",
    options: [
      "A) Blocking I/O is faster",
      "B) Non-blocking I/O is not supported in C",
      "C) Blocking I/O suspends the process until complete; non-blocking returns immediately, even if not ready",
      "D) They are identical in behavior"
    ],
    optionsChinese: [
      "A) 阻塞I/O更快",
      "B) C中不支持非阻塞I/O",
      "C) 阻塞I/O暂停进程直到完成；非阻塞立即返回，即使未就绪",
      "D) 它们行为相同"
    ],
    answer: 2,
    explanation: "Blocking I/O causes the calling thread to wait (block) until the operation completes. Non-blocking I/O returns immediately with an error code if the operation cannot be completed right away. Non-blocking I/O is used with select/poll/epoll for handling multiple connections in servers. Set with fcntl(fd, F_SETFL, O_NONBLOCK).",
    explanationChinese: "阻塞I/O使调用线程等待（阻塞）直到操作完成。非阻塞I/O如果操作不能立即完成则立即返回错误码。非阻塞I/O与select/poll/epoll一起用于服务器中处理多个连接。通过fcntl(fd, F_SETFL, O_NONBLOCK)设置。",
    diagram: "",
    terms: ["file_io", "thread", "system_call"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 228,
    q: "What is a context switch?",
    qChinese: "什么是上下文切换？",
    options: [
      "A) The process of saving and restoring the state of a CPU so multiple processes can share the CPU",
      "B) Switching between programming languages",
      "C) Switching between files",
      "D) Changing user accounts"
    ],
    optionsChinese: [
      "A) 保存和恢复CPU状态以使多个进程共享CPU的过程",
      "B) 在编程语言之间切换",
      "C) 在文件之间切换",
      "D) 更改用户账户"
    ],
    answer: 0,
    explanation: "A context switch occurs when the OS saves the state (registers, program counter, stack pointer) of the currently running process/thread and loads the state of another. This enables multitasking on a single CPU. Context switches have overhead and occur during time-slice expiration, I/O waits, and higher-priority process arrival.",
    explanationChinese: "上下文切换发生在OS保存当前运行进程/线程的状态（寄存器、程序计数器、栈指针）并加载另一个的状态时。这在单CPU上实现多任务。上下文切换有开销，发生在时间片到期、I/O等待和高优先级进程到达时。",
    diagram: "",
    terms: ["process", "thread", "scheduling"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 229,
    q: "What is the difference between a process and a program?",
    qChinese: "进程和程序有什么区别？",
    options: [
      "A) They are the same thing",
      "B) A process is stored on disk; a program is in memory",
      "C) A program is a static file on disk; a process is a running instance of a program",
      "D) A program can only have one process"
    ],
    optionsChinese: [
      "A) 它们是同一回事",
      "B) 进程存储在磁盘上；程序在内存中",
      "C) 程序是磁盘上的静态文件；进程是程序的运行实例",
      "D) 一个程序只能有一个进程"
    ],
    answer: 2,
    explanation: "A program is a passive entity: executable code stored on disk. A process is an active entity: a program loaded into memory and executing with its own address space, registers, and resources. Multiple processes can run the same program simultaneously (e.g., multiple terminal windows running bash). A process has a lifecycle; a program does not.",
    explanationChinese: "程序是被动实体：存储在磁盘上的可执行代码。进程是主动实体：加载到内存中执行的程序，具有自己的地址空间、寄存器和资源。多个进程可以同时运行同一程序（例如，多个终端窗口运行bash）。进程有生命周期；程序没有。",
    diagram: "",
    terms: ["process", "program", "memory_allocation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 230,
    q: "What is the purpose of the GDB debugger?",
    qChinese: "GDB调试器的目的是什么？",
    options: [
      "A) Compiling C code",
      "B) Formatting source code",
      "C) Profiling memory usage",
      "D) Debugging programs by setting breakpoints, stepping through code, and inspecting variables at runtime"
    ],
    optionsChinese: [
      "A) 编译C代码",
      "B) 格式化源代码",
      "C) 分析内存使用",
      "D) 通过设置断点、逐步执行代码和在运行时检查变量来调试程序"
    ],
    answer: 3,
    explanation: "GDB (GNU Debugger) is a command-line debugger for C/C++. It allows setting breakpoints, stepping through code line by line, inspecting and modifying variables, examining the call stack, and analyzing core dumps from crashed programs. Compile with -g flag for debug symbols. Key commands: break, run, next, step, print, backtrace.",
    explanationChinese: "GDB（GNU调试器）是C/C++的命令行调试器。它允许设置断点、逐行执行代码、检查和修改变量、检查调用栈以及分析崩溃程序的核心转储。使用-g标志编译以获取调试符号。关键命令：break、run、next、step、print、backtrace。",
    diagram: "",
    terms: ["debugging", "compiler", "breakpoint"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 231,
    q: "What is the stack memory used for in a program?",
    qChinese: "程序中栈内存用于什么？",
    options: [
      "A) Storing dynamically allocated objects",
      "B) Storing local variables, function parameters, and return addresses",
      "C) Storing global variables",
      "D) Storing file data"
    ],
    optionsChinese: [
      "A) 存储动态分配的对象",
      "B) 存储局部变量、函数参数和返回地址",
      "C) 存储全局变量",
      "D) 存储文件数据"
    ],
    answer: 1,
    explanation: "The stack stores local variables, function parameters, return addresses, and saved registers for each function call. Memory is allocated and deallocated automatically in LIFO order as functions are called and return. Stack allocation is very fast (just adjusting the stack pointer) but limited in size (typically 1-8 MB).",
    explanationChinese: "栈为每次函数调用存储局部变量、函数参数、返回地址和保存的寄存器。内存随着函数调用和返回以LIFO顺序自动分配和释放。栈分配非常快（只需调整栈指针），但大小有限（通常1-8 MB）。",
    diagram: "",
    terms: ["stack", "memory_allocation", "variable"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 232,
    q: "What is the heap memory used for in a program?",
    qChinese: "程序中堆内存用于什么？",
    options: [
      "A) Storing function call information",
      "B) Dynamically allocated memory that persists until explicitly freed",
      "C) Storing machine code",
      "D) Storing constant strings only"
    ],
    optionsChinese: [
      "A) 存储函数调用信息",
      "B) 持续存在直到显式释放的动态分配内存",
      "C) 存储机器代码",
      "D) 仅存储常量字符串"
    ],
    answer: 1,
    explanation: "The heap is a region of memory used for dynamic allocation (malloc/free in C, new/delete in C++). Heap memory persists until explicitly freed or the program ends. It is larger than the stack but slower to allocate and prone to fragmentation and leaks. The programmer is responsible for managing heap memory lifetime.",
    explanationChinese: "堆是用于动态分配的内存区域（C中的malloc/free，C++中的new/delete）。堆内存持续存在直到显式释放或程序结束。它比栈大但分配更慢，容易产生碎片和泄漏。程序员负责管理堆内存的生命周期。",
    diagram: "",
    terms: ["heap", "memory_allocation", "pointer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 233,
    q: "What is garbage collection?",
    qChinese: "什么是垃圾回收？",
    options: [
      "A) Deleting unused source code files",
      "B) Compressing files to save disk space",
      "C) Automatic memory management that reclaims memory occupied by objects no longer in use",
      "D) Removing syntax errors from code"
    ],
    optionsChinese: [
      "A) 删除未使用的源代码文件",
      "B) 压缩文件以节省磁盘空间",
      "C) 自动内存管理，回收不再使用的对象占用的内存",
      "D) 从代码中删除语法错误"
    ],
    answer: 2,
    explanation: "Garbage collection (GC) is an automatic memory management feature in languages like Java, Python, and Go. The GC identifies objects that are no longer reachable from any active reference and reclaims their memory. This eliminates manual memory management (malloc/free) and prevents memory leaks and dangling pointers, but adds runtime overhead.",
    explanationChinese: "垃圾回收（GC）是Java、Python和Go等语言中的自动内存管理功能。GC识别从任何活动引用不再可达的对象并回收其内存。这消除了手动内存管理（malloc/free），防止内存泄漏和悬空指针，但增加了运行时开销。",
    diagram: "",
    terms: ["garbage_collection", "memory_allocation", "heap"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 234,
    q: "How does Java's garbage collector determine which objects to collect?",
    qChinese: "Java的垃圾回收器如何确定收集哪些对象？",
    options: [
      "A) Objects older than a certain age",
      "B) Objects not reachable from any GC root reference",
      "C) Objects that use too much memory",
      "D) Objects of a specific class"
    ],
    optionsChinese: [
      "A) 超过一定年龄的对象",
      "B) 从任何GC根引用不可达的对象",
      "C) 使用过多内存的对象",
      "D) 特定类的对象"
    ],
    answer: 1,
    explanation: "Java's GC uses reachability analysis starting from GC roots (stack variables, static fields, JNI references). Objects reachable through any chain of references from roots are alive; unreachable objects are eligible for collection. The JVM uses generational collection: young generation (frequent, fast) and old generation (infrequent, thorough).",
    explanationChinese: "Java的GC使用从GC根（栈变量、静态字段、JNI引用）开始的可达性分析。通过从根的任何引用链可达的对象是活的；不可达的对象有资格被回收。JVM使用分代回收：年轻代（频繁、快速）和老年代（不频繁、彻底）。",
    diagram: "",
    terms: ["garbage_collection", "reference", "heap"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 235,
    q: "What is a memory layout of a typical C program?",
    qChinese: "典型C程序的内存布局是什么？",
    options: [
      "A) Text, data, BSS, heap, and stack segments",
      "B) Only stack and heap",
      "C) Code and data only",
      "D) A single flat memory region"
    ],
    optionsChinese: [
      "A) 文本段、数据段、BSS段、堆和栈段",
      "B) 仅栈和堆",
      "C) 仅代码和数据",
      "D) 单个平坦内存区域"
    ],
    answer: 0,
    explanation: "A C program's memory has: text segment (compiled code, read-only), data segment (initialized global/static variables), BSS segment (uninitialized global/static variables, zeroed), heap (dynamic allocation, grows upward), and stack (local variables, grows downward). Understanding this layout helps debug memory issues and segfaults.",
    explanationChinese: "C程序的内存有：文本段（编译代码，只读）、数据段（初始化的全局/静态变量）、BSS段（未初始化的全局/静态变量，置零）、堆（动态分配，向上增长）和栈（局部变量，向下增长）。理解此布局有助于调试内存问题和段错误。",
    diagram: "",
    terms: ["memory_allocation", "stack", "heap"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 236,
    q: "What is the difference between stack overflow and heap overflow?",
    qChinese: "栈溢出和堆溢出有什么区别？",
    options: [
      "A) They are the same",
      "B) Stack overflow: exceeding stack size (deep recursion); heap overflow: writing beyond allocated heap buffer",
      "C) Heap overflow is less dangerous",
      "D) Stack overflow only happens in Java"
    ],
    optionsChinese: [
      "A) 它们相同",
      "B) 栈溢出：超过栈大小（深度递归）；堆溢出：写入超出分配的堆缓冲区",
      "C) 堆溢出危险性较小",
      "D) 栈溢出只在Java中发生"
    ],
    answer: 1,
    explanation: "Stack overflow occurs when the call stack exceeds its size limit, usually from infinite/deep recursion or large local arrays. Heap overflow (buffer overflow) occurs when a program writes past the end of a heap-allocated buffer. Both are serious: stack overflow crashes the program; heap overflow can corrupt data and create security vulnerabilities.",
    explanationChinese: "栈溢出发生在调用栈超过其大小限制时，通常由无限/深度递归或大型局部数组引起。堆溢出（缓冲区溢出）发生在程序写入超出堆分配缓冲区末尾时。两者都严重：栈溢出使程序崩溃；堆溢出可能损坏数据并创建安全漏洞。",
    diagram: "",
    terms: ["stack", "heap", "memory_allocation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 237,
    q: "What is memory fragmentation?",
    qChinese: "什么是内存碎片？",
    options: [
      "A) Breaking memory into equal chunks",
      "B) Dividing memory between processes",
      "C) Memory used by the operating system",
      "D) Wasted memory due to small, non-contiguous free blocks between allocated blocks"
    ],
    optionsChinese: [
      "A) 将内存分成相等的块",
      "B) 在进程之间划分内存",
      "C) 操作系统使用的内存",
      "D) 由于分配块之间小的、不连续的空闲块而浪费的内存"
    ],
    answer: 3,
    explanation: "Memory fragmentation occurs when free memory is broken into small, non-contiguous blocks. External fragmentation: enough total free memory exists but no single block is large enough. Internal fragmentation: allocated blocks have unused padding. Fragmentation degrades performance and can cause allocation failures despite sufficient total free memory.",
    explanationChinese: "内存碎片发生在空闲内存被分成小的、不连续的块时。外部碎片：总空闲内存足够但没有单个块足够大。内部碎片：分配的块有未使用的填充。碎片降低性能，尽管总空闲内存足够，仍可能导致分配失败。",
    diagram: "",
    terms: ["memory_allocation", "heap", "fragmentation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 238,
    q: "What is the difference between strong and weak references in Java?",
    qChinese: "Java中强引用和弱引用有什么区别？",
    options: [
      "A) Strong references are faster",
      "B) Strong references prevent GC; weak references allow GC to collect the object if no strong references exist",
      "C) Weak references are only for strings",
      "D) There is no difference"
    ],
    optionsChinese: [
      "A) 强引用更快",
      "B) 强引用防止GC；弱引用允许GC在没有强引用存在时回收对象",
      "C) 弱引用仅用于字符串",
      "D) 没有区别"
    ],
    answer: 1,
    explanation: "Strong references are normal references that prevent garbage collection. Weak references (WeakReference class) do not prevent GC: if only weak references exist to an object, the GC can collect it. Soft references are similar but collected only under memory pressure. Weak references are useful for caches and preventing memory leaks in listeners.",
    explanationChinese: "强引用是阻止垃圾回收的普通引用。弱引用（WeakReference类）不阻止GC：如果只有弱引用指向对象，GC可以回收它。软引用类似但仅在内存压力下被回收。弱引用在缓存和防止监听器中的内存泄漏时很有用。",
    diagram: "",
    terms: ["garbage_collection", "reference", "memory_allocation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 239,
    q: "What is a double free error?",
    qChinese: "什么是重复释放错误？",
    options: [
      "A) Allocating memory twice",
      "B) Using two pointers to the same memory",
      "C) Calling free() on the same pointer twice, causing undefined behavior",
      "D) Freeing stack memory"
    ],
    optionsChinese: [
      "A) 两次分配内存",
      "B) 使用两个指针指向同一内存",
      "C) 对同一指针调用free()两次，导致未定义行为",
      "D) 释放栈内存"
    ],
    answer: 2,
    explanation: "A double free occurs when free() is called twice on the same pointer without a new allocation in between. This corrupts the heap's internal data structures, potentially causing crashes or security vulnerabilities. Prevention: set the pointer to NULL after free (free(ptr); ptr = NULL;) so the second free on NULL is harmless.",
    explanationChinese: "重复释放发生在对同一指针调用两次free()而中间没有新的分配时。这会破坏堆的内部数据结构，可能导致崩溃或安全漏洞。预防方法：free后将指针设为NULL（free(ptr); ptr = NULL;），这样对NULL的第二次free是无害的。",
    diagram: "",
    terms: ["memory_allocation", "pointer", "runtime_error"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 240,
    q: "What is virtual memory?",
    qChinese: "什么是虚拟内存？",
    options: [
      "A) RAM installed in the computer",
      "B) Memory on the GPU",
      "C) An abstraction that gives each process the illusion of having its own large, contiguous address space",
      "D) Cache memory in the CPU"
    ],
    optionsChinese: [
      "A) 计算机中安装的RAM",
      "B) GPU上的内存",
      "C) 给每个进程拥有自己大的连续地址空间幻觉的抽象",
      "D) CPU中的缓存内存"
    ],
    answer: 2,
    explanation: "Virtual memory is an abstraction layer between processes and physical RAM. Each process sees its own virtual address space, mapped to physical memory by the OS and MMU (Memory Management Unit). This provides isolation between processes, allows running programs larger than physical RAM (using disk swap), and simplifies memory management.",
    explanationChinese: "虚拟内存是进程和物理RAM之间的抽象层。每个进程看到自己的虚拟地址空间，由OS和MMU（内存管理单元）映射到物理内存。这提供了进程间隔离，允许运行大于物理RAM的程序（使用磁盘交换），并简化了内存管理。",
    diagram: "",
    terms: ["virtual_memory", "memory_allocation", "process"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 241,
    q: "What is a page fault?",
    qChinese: "什么是页面错误？",
    options: [
      "A) An interrupt triggered when a program accesses a virtual page not currently in physical memory",
      "B) A bug in the paging system",
      "C) An error in page formatting",
      "D) A disk read error"
    ],
    optionsChinese: [
      "A) 当程序访问不在物理内存中的虚拟页面时触发的中断",
      "B) 分页系统中的错误",
      "C) 页面格式错误",
      "D) 磁盘读取错误"
    ],
    answer: 0,
    explanation: "A page fault occurs when a program accesses a virtual memory page not currently loaded in physical RAM. The OS handles it by loading the required page from disk (swap space) into RAM. This is transparent to the program but causes a performance hit. Excessive page faults (thrashing) severely degrade performance.",
    explanationChinese: "页面错误发生在程序访问当前未加载到物理RAM中的虚拟内存页面时。OS通过从磁盘（交换空间）将所需页面加载到RAM来处理它。这对程序透明但会导致性能下降。过多的页面错误（抖动）严重降低性能。",
    diagram: "",
    terms: ["virtual_memory", "memory_allocation", "page_fault"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 242,
    q: "What is the difference between the text segment and data segment in memory?",
    qChinese: "内存中文本段和数据段有什么区别？",
    options: [
      "A) Text stores executable code (read-only); data stores initialized global and static variables",
      "B) Text stores strings; data stores numbers",
      "C) They are the same",
      "D) Data stores code; text stores variables"
    ],
    optionsChinese: [
      "A) 文本存储可执行代码（只读）；数据存储初始化的全局和静态变量",
      "B) 文本存储字符串；数据存储数字",
      "C) 它们相同",
      "D) 数据存储代码；文本存储变量"
    ],
    answer: 0,
    explanation: "The text (code) segment contains the compiled machine instructions and is typically read-only to prevent accidental modification. The data segment stores initialized global and static variables that persist for the program's lifetime. The BSS segment holds uninitialized global/static variables, initialized to zero by the OS at program start.",
    explanationChinese: "文本（代码）段包含编译的机器指令，通常是只读的以防止意外修改。数据段存储在程序生命周期内持续存在的初始化全局和静态变量。BSS段保存未初始化的全局/静态变量，程序启动时由OS初始化为零。",
    diagram: "",
    terms: ["memory_allocation", "variable", "compiler"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 243,
    q: "What is memory alignment and why does it matter?",
    qChinese: "什么是内存对齐，为什么它重要？",
    options: [
      "A) Sorting memory addresses",
      "B) Formatting memory for display",
      "C) Aligning files on disk",
      "D) Storing data at addresses that are multiples of the data size for efficient CPU access"
    ],
    optionsChinese: [
      "A) 排序内存地址",
      "B) 格式化内存以供显示",
      "C) 在磁盘上对齐文件",
      "D) 在数据大小的倍数地址处存储数据以实现高效的CPU访问"
    ],
    answer: 3,
    explanation: "Memory alignment means placing data at addresses divisible by the data's size (e.g., 4-byte int at addresses divisible by 4). CPUs access aligned data more efficiently; misaligned access may require multiple memory reads or cause exceptions on some architectures. Compilers add padding to struct members to maintain alignment.",
    explanationChinese: "内存对齐意味着将数据放在可被数据大小整除的地址上（例如，4字节int在可被4整除的地址上）。CPU更高效地访问对齐数据；未对齐访问可能需要多次内存读取或在某些架构上导致异常。编译器向结构体成员添加填充以维持对齐。",
    diagram: "",
    terms: ["memory_allocation", "struct", "optimization"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 244,
    q: "What is the purpose of Valgrind?",
    qChinese: "Valgrind的目的是什么？",
    options: [
      "A) Compiling C++ code",
      "B) Optimizing code performance",
      "C) Detecting memory errors like leaks, invalid reads/writes, and use of uninitialized memory",
      "D) Formatting source code"
    ],
    optionsChinese: [
      "A) 编译C++代码",
      "B) 优化代码性能",
      "C) 检测内存错误如泄漏、无效读写和使用未初始化的内存",
      "D) 格式化源代码"
    ],
    answer: 2,
    explanation: "Valgrind is a programming tool suite, with Memcheck being its most popular tool. It detects memory leaks, reads/writes of freed memory, use of uninitialized values, buffer overflows, and double frees. It runs programs on a virtual CPU, making it thorough but slow (10-50x). Essential for C/C++ development and debugging.",
    explanationChinese: "Valgrind是一套编程工具，Memcheck是其最流行的工具。它检测内存泄漏、读写已释放内存、使用未初始化的值、缓冲区溢出和重复释放。它在虚拟CPU上运行程序，彻底但缓慢（10-50倍）。对C/C++开发和调试至关重要。",
    diagram: "",
    terms: ["debugging", "memory_allocation", "memory_leak"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 245,
    q: "What is the difference between automatic and dynamic storage duration in C?",
    qChinese: "C语言中自动存储期和动态存储期有什么区别？",
    options: [
      "A) They are the same",
      "B) Automatic requires malloc()",
      "C) Dynamic is on the stack; automatic is on the heap",
      "D) Automatic: local variables on stack, freed when scope exits; dynamic: heap allocation, freed manually"
    ],
    optionsChinese: [
      "A) 它们相同",
      "B) 自动需要malloc()",
      "C) 动态在栈上；自动在堆上",
      "D) 自动：栈上的局部变量，作用域退出时释放；动态：堆分配，手动释放"
    ],
    answer: 3,
    explanation: "Automatic storage duration applies to local variables: they are allocated on the stack when the block is entered and freed when it exits. Dynamic storage duration applies to memory allocated with malloc/calloc: it persists until explicitly freed with free(). There is also static storage duration for global and static variables that persist for the program's lifetime.",
    explanationChinese: "自动存储期适用于局部变量：它们在进入块时在栈上分配，退出时释放。动态存储期适用于用malloc/calloc分配的内存：它持续存在直到用free()显式释放。还有静态存储期，用于在程序生命周期内持续存在的全局和静态变量。",
    diagram: "",
    terms: ["memory_allocation", "stack", "heap"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 246,
    q: "What are smart pointers in C++?",
    qChinese: "C++中的智能指针是什么？",
    options: [
      "A) Pointers that are faster than regular pointers",
      "B) Pointers that can point to multiple objects",
      "C) Objects that manage dynamically allocated memory and automatically deallocate when no longer needed",
      "D) Pointers used in smart devices"
    ],
    optionsChinese: [
      "A) 比普通指针更快的指针",
      "B) 可以指向多个对象的指针",
      "C) 管理动态分配内存并在不再需要时自动释放的对象",
      "D) 用于智能设备的指针"
    ],
    answer: 2,
    explanation: "Smart pointers (unique_ptr, shared_ptr, weak_ptr) are C++ template classes that manage heap memory automatically. unique_ptr has sole ownership and deletes on destruction. shared_ptr uses reference counting for shared ownership. weak_ptr is a non-owning reference to shared_ptr. They prevent memory leaks by ensuring proper deallocation via RAII.",
    explanationChinese: "智能指针（unique_ptr、shared_ptr、weak_ptr）是自动管理堆内存的C++模板类。unique_ptr具有独占所有权，在析构时删除。shared_ptr使用引用计数实现共享所有权。weak_ptr是对shared_ptr的非所有引用。它们通过RAII确保正确释放来防止内存泄漏。",
    diagram: "",
    terms: ["pointer", "memory_allocation", "raii"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 247,
    q: "What is RAII (Resource Acquisition Is Initialization) in C++?",
    qChinese: "C++中的RAII（资源获取即初始化）是什么？",
    options: [
      "A) A design pattern for databases",
      "B) A C++ idiom where resources are acquired in constructors and released in destructors",
      "C) A memory allocation algorithm",
      "D) A Java garbage collection strategy"
    ],
    optionsChinese: [
      "A) 数据库的设计模式",
      "B) C++惯用法，在构造函数中获取资源，在析构函数中释放",
      "C) 内存分配算法",
      "D) Java垃圾回收策略"
    ],
    answer: 1,
    explanation: "RAII ties resource management to object lifetime. Resources (memory, file handles, locks) are acquired in the constructor and released in the destructor. When the object goes out of scope, the destructor automatically runs, ensuring cleanup. This prevents leaks even when exceptions occur. Smart pointers are a key RAII application.",
    explanationChinese: "RAII将资源管理与对象生命周期绑定。资源（内存、文件句柄、锁）在构造函数中获取，在析构函数中释放。当对象超出作用域时，析构函数自动运行，确保清理。即使发生异常也能防止泄漏。智能指针是RAII的关键应用。",
    diagram: "",
    terms: ["memory_allocation", "constructor", "resource_management"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 248,
    q: "What is the difference between reference counting and tracing garbage collection?",
    qChinese: "引用计数和跟踪垃圾回收有什么区别？",
    options: [
      "A) Reference counting tracks the number of references to each object; tracing periodically finds unreachable objects from roots",
      "B) They are identical",
      "C) Reference counting is only for C++",
      "D) Tracing is faster than reference counting"
    ],
    optionsChinese: [
      "A) 引用计数跟踪每个对象的引用数；跟踪定期从根查找不可达对象",
      "B) 它们相同",
      "C) 引用计数仅用于C++",
      "D) 跟踪比引用计数更快"
    ],
    answer: 0,
    explanation: "Reference counting increments/decrements a counter for each object as references are added/removed; the object is freed when the count reaches zero. Tracing GC (used in Java) periodically traces all reachable objects from root references and collects unreachable ones. Reference counting cannot handle circular references; tracing GC can.",
    explanationChinese: "引用计数在添加/移除引用时递增/递减每个对象的计数器；计数达到零时释放对象。跟踪GC（Java中使用）定期从根引用跟踪所有可达对象并回收不可达对象。引用计数无法处理循环引用；跟踪GC可以。",
    diagram: "",
    terms: ["garbage_collection", "reference", "memory_allocation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 249,
    q: "What is memory-mapped I/O?",
    qChinese: "什么是内存映射I/O？",
    options: [
      "A) Using RAM as a hard drive",
      "B) Accessing hardware device registers through memory addresses instead of special I/O instructions",
      "C) Both B and C are forms of memory mapping",
      "D) Mapping files to memory using mmap"
    ],
    optionsChinese: [
      "A) 将RAM用作硬盘",
      "B) 通过内存地址而非特殊I/O指令访问硬件设备寄存器",
      "C) B和C都是内存映射的形式",
      "D) 使用mmap将文件映射到内存"
    ],
    answer: 2,
    explanation: "Memory-mapped I/O has two meanings: (1) hardware MMIO where device registers are accessed at specific memory addresses, and (2) file mapping with mmap() where file contents are mapped into process address space. Both use the same concept: accessing external resources through memory read/write operations instead of specialized system calls.",
    explanationChinese: "内存映射I/O有两个含义：(1)硬件MMIO，通过特定内存地址访问设备寄存器；(2)使用mmap()的文件映射，将文件内容映射到进程地址空间。两者使用相同概念：通过内存读写操作而非专门系统调用访问外部资源。",
    diagram: "",
    terms: ["memory_allocation", "file_io", "virtual_memory"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 250,
    q: "What is the purpose of the finalize() method in Java?",
    qChinese: "Java中finalize()方法的目的是什么？",
    options: [
      "A) Finalizing a class definition",
      "B) Closing all open files",
      "C) A deprecated method called by GC before reclaiming an object's memory",
      "D) Terminating the program"
    ],
    optionsChinese: [
      "A) 完成类定义",
      "B) 关闭所有打开的文件",
      "C) GC在回收对象内存前调用的已弃用方法",
      "D) 终止程序"
    ],
    answer: 2,
    explanation: "finalize() is called by the garbage collector before reclaiming an object's memory. It was intended for cleanup of non-memory resources. However, it is unreliable (no guarantee when or if it runs), deprecated since Java 9, and removed in later versions. Use try-with-resources or explicit close() methods instead for deterministic cleanup.",
    explanationChinese: "finalize()在垃圾回收器回收对象内存之前调用。它旨在清理非内存资源。但它不可靠（不保证何时或是否运行），自Java 9起已弃用，在后续版本中移除。使用try-with-resources或显式close()方法代替，以实现确定性清理。",
    diagram: "",
    terms: ["garbage_collection", "method", "resource_management"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 251,
    q: "What is a memory pool allocator?",
    qChinese: "什么是内存池分配器？",
    options: [
      "A) A swimming pool-shaped memory region",
      "B) Pre-allocating a large block and subdividing it for fixed-size allocations to reduce malloc overhead",
      "C) A type of garbage collector",
      "D) Virtual memory management"
    ],
    optionsChinese: [
      "A) 游泳池形状的内存区域",
      "B) 预分配大块并将其细分为固定大小分配以减少malloc开销",
      "C) 一种垃圾回收器",
      "D) 虚拟内存管理"
    ],
    answer: 1,
    explanation: "A memory pool pre-allocates a large chunk of memory and manages fixed-size blocks from it. Allocation and deallocation are very fast (O(1)) compared to general-purpose malloc. Pools reduce fragmentation and overhead for applications that frequently allocate and free many small objects of the same size, like game engines and network servers.",
    explanationChinese: "内存池预分配一大块内存并从中管理固定大小的块。与通用malloc相比，分配和释放非常快（O(1)）。对于频繁分配和释放许多相同大小小对象的应用，池减少了碎片和开销，如游戏引擎和网络服务器。",
    diagram: "",
    terms: ["memory_allocation", "optimization", "data_structure"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 252,
    q: "What is the try-with-resources statement in Java?",
    qChinese: "Java中的try-with-resources语句是什么？",
    options: [
      "A) A loop that tries multiple resources",
      "B) A resource monitoring tool",
      "C) A way to catch multiple exceptions",
      "D) A try statement that automatically closes resources implementing AutoCloseable"
    ],
    optionsChinese: [
      "A) 尝试多个资源的循环",
      "B) 资源监控工具",
      "C) 捕获多个异常的方式",
      "D) 自动关闭实现AutoCloseable的资源的try语句"
    ],
    answer: 3,
    explanation: "Try-with-resources (Java 7+) automatically closes resources that implement AutoCloseable when the try block exits, even if an exception occurs. Syntax: try (FileReader fr = new FileReader(file)) { ... }. This eliminates the need for explicit finally blocks to close resources and prevents resource leaks from forgotten close() calls.",
    explanationChinese: "try-with-resources（Java 7+）在try块退出时自动关闭实现AutoCloseable的资源，即使发生异常。语法：try (FileReader fr = new FileReader(file)) { ... }。这消除了显式finally块关闭资源的需要，防止因忘记close()调用而导致的资源泄漏。",
    diagram: "",
    terms: ["resource_management", "exception", "file_io"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 253,
    q: "What is the difference between the BSS segment and the data segment?",
    qChinese: "BSS段和数据段有什么区别？",
    options: [
      "A) Data segment stores initialized globals; BSS stores uninitialized globals (zeroed by OS)",
      "B) They store the same type of data",
      "C) BSS is for heap data; data segment is for stack",
      "D) BSS is read-only; data is read-write"
    ],
    optionsChinese: [
      "A) 数据段存储初始化的全局变量；BSS存储未初始化的全局变量（由OS置零）",
      "B) 它们存储相同类型的数据",
      "C) BSS用于堆数据；数据段用于栈",
      "D) BSS是只读的；数据是读写的"
    ],
    answer: 0,
    explanation: "The data segment stores global and static variables with explicit initial values (e.g., int x = 5). The BSS (Block Started by Symbol) segment stores uninitialized global and static variables, which the OS initializes to zero. BSS saves space in the executable file because it only records the size needed, not the actual zero values.",
    explanationChinese: "数据段存储具有显式初始值的全局和静态变量（如int x = 5）。BSS（Block Started by Symbol）段存储未初始化的全局和静态变量，由OS初始化为零。BSS在可执行文件中节省空间，因为它只记录所需大小，而不是实际的零值。",
    diagram: "",
    terms: ["memory_allocation", "variable", "compiler"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 254,
    q: "What is cache locality and why is it important for performance?",
    qChinese: "什么是缓存局部性，为什么它对性能重要？",
    options: [
      "A) Accessing memory addresses close together in time or space to maximize CPU cache hits",
      "B) Storing frequently used files locally",
      "C) Using local variables instead of global",
      "D) Keeping data on the same disk partition"
    ],
    optionsChinese: [
      "A) 在时间或空间上访问相近的内存地址以最大化CPU缓存命中",
      "B) 在本地存储常用文件",
      "C) 使用局部变量而非全局变量",
      "D) 将数据保持在同一磁盘分区"
    ],
    answer: 0,
    explanation: "Cache locality means accessing memory in patterns that keep data in the CPU cache. Temporal locality: recently accessed data is accessed again soon. Spatial locality: accessing nearby memory addresses. Arrays have excellent spatial locality; linked lists do not. Cache-friendly code can be 10-100x faster due to the speed difference between cache and main memory.",
    explanationChinese: "缓存局部性意味着以将数据保持在CPU缓存中的模式访问内存。时间局部性：最近访问的数据很快再次被访问。空间局部性：访问相近的内存地址。数组具有优秀的空间局部性；链表没有。缓存友好的代码由于缓存和主内存之间的速度差异可以快10-100倍。",
    diagram: "",
    terms: ["memory_allocation", "optimization", "cache"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 255,
    q: "What happens when you call malloc(0) in C?",
    qChinese: "在C中调用malloc(0)时会发生什么？",
    options: [
      "A) Always returns NULL",
      "B) Behavior is implementation-defined: may return NULL or a unique pointer that should not be dereferenced",
      "C) Allocates 1 byte",
      "D) Causes a compilation error"
    ],
    optionsChinese: [
      "A) 总是返回NULL",
      "B) 行为是实现定义的：可能返回NULL或不应解引用的唯一指针",
      "C) 分配1字节",
      "D) 导致编译错误"
    ],
    answer: 1,
    explanation: "The C standard says malloc(0) is implementation-defined. It may return NULL or a unique non-null pointer. If non-null, the returned pointer must not be dereferenced (no usable memory) but must be valid for free(). In practice, avoid malloc(0) as it creates confusion and potential bugs.",
    explanationChinese: "C标准规定malloc(0)是实现定义的。它可能返回NULL或唯一的非空指针。如果非空，返回的指针不得解引用（没有可用内存）但必须对free()有效。在实践中，避免malloc(0)因为它造成混乱和潜在错误。",
    diagram: "",
    terms: ["memory_allocation", "pointer", "compiler"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 256,
    q: "What is the role of the Memory Management Unit (MMU)?",
    qChinese: "内存管理单元（MMU）的作用是什么？",
    options: [
      "A) Managing disk storage",
      "B) Translating virtual addresses to physical addresses and enforcing memory protection",
      "C) Allocating heap memory",
      "D) Managing CPU registers"
    ],
    optionsChinese: [
      "A) 管理磁盘存储",
      "B) 将虚拟地址转换为物理地址并强制内存保护",
      "C) 分配堆内存",
      "D) 管理CPU寄存器"
    ],
    answer: 1,
    explanation: "The MMU is a hardware component that translates virtual addresses used by programs into physical memory addresses. It uses page tables maintained by the OS to perform this translation. The MMU also enforces memory protection by checking access permissions, preventing processes from accessing each other's memory. TLBs cache recent translations for speed.",
    explanationChinese: "MMU是一个硬件组件，将程序使用的虚拟地址转换为物理内存地址。它使用OS维护的页表来执行此转换。MMU还通过检查访问权限来强制内存保护，防止进程访问彼此的内存。TLB缓存最近的转换以提高速度。",
    diagram: "",
    terms: ["virtual_memory", "memory_allocation", "hardware"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 257,
    q: "What is the generational hypothesis in garbage collection?",
    qChinese: "垃圾回收中的分代假设是什么？",
    options: [
      "A) Most objects die young; long-lived objects tend to stay alive",
      "B) Older programs need more memory",
      "C) Each generation uses different memory",
      "D) GC improves with each software version"
    ],
    optionsChinese: [
      "A) 大多数对象早死；长寿对象倾向于保持存活",
      "B) 较旧的程序需要更多内存",
      "C) 每代使用不同的内存",
      "D) GC随每个软件版本改进"
    ],
    answer: 0,
    explanation: "The generational hypothesis observes that most objects have short lifetimes (created and discarded quickly), while a minority live long. Generational GCs exploit this by dividing the heap into young and old generations. Young generation is collected frequently (minor GC); objects surviving multiple collections are promoted to old generation, collected less often (major GC).",
    explanationChinese: "分代假设观察到大多数对象生命周期短（快速创建和丢弃），而少数对象存活时间长。分代GC通过将堆分为年轻代和老年代来利用这一点。年轻代频繁回收（小GC）；存活多次回收的对象被提升到老年代，较少回收（大GC）。",
    diagram: "",
    terms: ["garbage_collection", "heap", "memory_allocation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 258,
    q: "What is a use-after-free vulnerability?",
    qChinese: "什么是释放后使用漏洞？",
    options: [
      "A) Using free software without a license",
      "B) Accessing memory through a pointer after it has been freed, causing undefined behavior",
      "C) Freeing memory that was not allocated",
      "D) Using malloc after free in the same line"
    ],
    optionsChinese: [
      "A) 未经许可使用免费软件",
      "B) 在指针被释放后通过它访问内存，导致未定义行为",
      "C) 释放未分配的内存",
      "D) 在同一行中在free后使用malloc"
    ],
    answer: 1,
    explanation: "Use-after-free occurs when a program accesses memory through a pointer after that memory has been freed. The memory may have been reallocated for other purposes, leading to data corruption, crashes, or exploitable security vulnerabilities. Attackers can manipulate freed memory to execute arbitrary code. Prevention: null pointers after free.",
    explanationChinese: "释放后使用发生在程序在内存被释放后通过指针访问该内存时。内存可能已被重新分配用于其他目的，导致数据损坏、崩溃或可利用的安全漏洞。攻击者可以操纵已释放的内存来执行任意代码。预防方法：free后将指针置为null。",
    diagram: "",
    terms: ["pointer", "memory_allocation", "security"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 259,
    q: "What is the difference between heap allocation in C (malloc) and Java (new)?",
    qChinese: "C（malloc）和Java（new）中堆分配有什么区别？",
    options: [
      "A) They work identically",
      "B) Java's new is faster than C's malloc",
      "C) C requires manual free(); Java has automatic garbage collection",
      "D) C's malloc initializes memory; Java's new does not"
    ],
    optionsChinese: [
      "A) 它们工作方式相同",
      "B) Java的new比C的malloc更快",
      "C) C需要手动free()；Java有自动垃圾回收",
      "D) C的malloc初始化内存；Java的new不初始化"
    ],
    answer: 2,
    explanation: "In C, malloc() allocates raw bytes on the heap and the programmer must call free() to prevent leaks. In Java, new allocates memory and calls the constructor; the garbage collector automatically reclaims unused objects. C offers more control but is error-prone; Java is safer but has GC overhead and less predictable deallocation timing.",
    explanationChinese: "在C中，malloc()在堆上分配原始字节，程序员必须调用free()以防止泄漏。在Java中，new分配内存并调用构造函数；垃圾回收器自动回收未使用的对象。C提供更多控制但容易出错；Java更安全但有GC开销和不可预测的释放时机。",
    diagram: "",
    terms: ["memory_allocation", "garbage_collection", "heap"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 260,
    q: "What is address space layout randomization (ASLR)?",
    qChinese: "什么是地址空间布局随机化（ASLR）？",
    options: [
      "A) A memory allocation algorithm",
      "B) A garbage collection strategy",
      "C) A security technique that randomizes the positions of stack, heap, and libraries in memory",
      "D) A disk encryption method"
    ],
    optionsChinese: [
      "A) 内存分配算法",
      "B) 垃圾回收策略",
      "C) 随机化内存中栈、堆和库位置的安全技术",
      "D) 磁盘加密方法"
    ],
    answer: 2,
    explanation: "ASLR is an OS security feature that randomizes the base addresses of the stack, heap, shared libraries, and executable in each program execution. This makes it harder for attackers to predict memory addresses for exploits like buffer overflow attacks. ASLR is a defense-in-depth measure used alongside DEP (Data Execution Prevention).",
    explanationChinese: "ASLR是一种OS安全功能，在每次程序执行时随机化栈、堆、共享库和可执行文件的基地址。这使攻击者更难预测内存地址以进行缓冲区溢出等攻击。ASLR是与DEP（数据执行保护）一起使用的纵深防御措施。",
    diagram: "",
    terms: ["memory_allocation", "security", "virtual_memory"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 261,
    q: "What is unit testing?",
    qChinese: "什么是单元测试？",
    options: [
      "A) Testing the entire application at once",
      "B) Testing with real users",
      "C) Testing individual methods or classes in isolation to verify correct behavior",
      "D) Testing hardware components"
    ],
    optionsChinese: [
      "A) 一次测试整个应用",
      "B) 与真实用户测试",
      "C) 隔离测试单个方法或类以验证正确行为",
      "D) 测试硬件组件"
    ],
    answer: 2,
    explanation: "Unit testing verifies that individual units of code (methods, functions, classes) work correctly in isolation. Tests are automated, fast, and repeatable. In Java, JUnit is the standard framework. Each test should cover one specific behavior with assertions like assertEquals and assertTrue. Unit tests catch bugs early and enable safe refactoring.",
    explanationChinese: "单元测试验证单个代码单元（方法、函数、类）在隔离中正确工作。测试是自动化的、快速的和可重复的。在Java中，JUnit是标准框架。每个测试应该用assertEquals和assertTrue等断言覆盖一个特定行为。单元测试早期捕获错误并支持安全重构。",
    diagram: "",
    terms: ["testing", "debugging", "method"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 262,
    q: "What is the difference between black-box testing and white-box testing?",
    qChinese: "黑盒测试和白盒测试有什么区别？",
    options: [
      "A) Black-box uses dark theme; white-box uses light theme",
      "B) Black-box tests without knowing internal code; white-box tests with knowledge of internal implementation",
      "C) Black-box is for hardware; white-box is for software",
      "D) They are the same approach"
    ],
    optionsChinese: [
      "A) 黑盒使用深色主题；白盒使用浅色主题",
      "B) 黑盒在不知道内部代码的情况下测试；白盒在了解内部实现的情况下测试",
      "C) 黑盒用于硬件；白盒用于软件",
      "D) 它们是相同的方法"
    ],
    answer: 1,
    explanation: "Black-box testing treats the code as an opaque box, testing inputs and expected outputs without knowledge of internal logic. White-box testing examines internal code structure to test specific paths, branches, and conditions. Black-box validates requirements; white-box ensures code coverage. Both are complementary and necessary for thorough testing.",
    explanationChinese: "黑盒测试将代码视为不透明的盒子，在不知道内部逻辑的情况下测试输入和预期输出。白盒测试检查内部代码结构以测试特定路径、分支和条件。黑盒验证需求；白盒确保代码覆盖。两者是互补的，全面测试都需要。",
    diagram: "",
    terms: ["testing", "debugging", "design_pattern"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 263,
    q: "What is version control and why is Git important?",
    qChinese: "什么是版本控制，为什么Git重要？",
    options: [
      "A) A system that tracks changes to files over time, enabling collaboration, history, and rollback",
      "B) A way to number software releases",
      "C) A backup system only",
      "D) A code compiler"
    ],
    optionsChinese: [
      "A) 跟踪文件随时间变化的系统，实现协作、历史记录和回滚",
      "B) 对软件版本编号的方式",
      "C) 仅是备份系统",
      "D) 代码编译器"
    ],
    answer: 0,
    explanation: "Version control systems track every change to code over time. Git is a distributed VCS where every developer has a full repository copy. Key benefits: track who changed what and when, revert to previous versions, create branches for features, merge changes from multiple contributors, and maintain a complete project history.",
    explanationChinese: "版本控制系统跟踪代码随时间的每一次更改。Git是分布式VCS，每个开发者都有完整的仓库副本。关键好处：跟踪谁在何时更改了什么、恢复到以前版本、为功能创建分支、合并多个贡献者的更改以及维护完整的项目历史。",
    diagram: "",
    terms: ["version_control", "git", "collaboration"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 264,
    q: "What is the purpose of a branch in Git?",
    qChinese: "Git中分支的目的是什么？",
    options: [
      "A) Creating a backup of the code",
      "B) Dividing the team into groups",
      "C) An independent line of development that allows working on features without affecting the main code",
      "D) Splitting a file into parts"
    ],
    optionsChinese: [
      "A) 创建代码备份",
      "B) 将团队分成组",
      "C) 允许在不影响主代码的情况下开发功能的独立开发线",
      "D) 将文件分成部分"
    ],
    answer: 2,
    explanation: "A Git branch is a lightweight, movable pointer to a commit that creates an isolated line of development. Developers create feature branches to work on changes without affecting the main branch. Once complete and tested, branches are merged back. This enables parallel development, experimentation, and clean project history.",
    explanationChinese: "Git分支是指向提交的轻量级、可移动指针，创建隔离的开发线。开发者创建功能分支以在不影响主分支的情况下进行更改。完成并测试后，分支被合并回去。这实现了并行开发、实验和清晰的项目历史。",
    diagram: "",
    terms: ["version_control", "git", "branch"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 265,
    q: "What is test-driven development (TDD)?",
    qChinese: "什么是测试驱动开发（TDD）？",
    options: [
      "A) Testing after the code is complete",
      "B) Using test environments for deployment",
      "C) Writing tests before writing the implementation code, then coding to pass the tests",
      "D) Driving development with user feedback only"
    ],
    optionsChinese: [
      "A) 代码完成后测试",
      "B) 使用测试环境进行部署",
      "C) 在编写实现代码之前编写测试，然后编写代码使测试通过",
      "D) 仅通过用户反馈驱动开发"
    ],
    answer: 2,
    explanation: "TDD follows the Red-Green-Refactor cycle: (1) Red: write a failing test for the desired behavior. (2) Green: write the minimum code to pass the test. (3) Refactor: improve the code while keeping tests green. TDD leads to better-designed, well-tested code and serves as living documentation of expected behavior.",
    explanationChinese: "TDD遵循红-绿-重构循环：(1)红色：为期望行为编写失败测试。(2)绿色：编写最少代码使测试通过。(3)重构：在保持测试通过的同时改进代码。TDD导致设计更好、测试更充分的代码，并作为预期行为的活文档。",
    diagram: "",
    terms: ["testing", "design_pattern", "method"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 266,
    q: "What is the purpose of code review?",
    qChinese: "代码审查的目的是什么？",
    options: [
      "A) Checking code for compilation errors",
      "B) Running automated tests",
      "C) Counting lines of code",
      "D) Having peers examine code for bugs, design issues, and adherence to standards before merging"
    ],
    optionsChinese: [
      "A) 检查代码的编译错误",
      "B) 运行自动化测试",
      "C) 统计代码行数",
      "D) 让同事在合并前检查代码的错误、设计问题和是否遵守标准"
    ],
    answer: 3,
    explanation: "Code review is a software quality practice where developers examine each other's code before it is merged into the main branch. Benefits include catching bugs early, sharing knowledge across the team, improving code quality, enforcing coding standards, and identifying potential security vulnerabilities. GitHub pull requests facilitate code review.",
    explanationChinese: "代码审查是一种软件质量实践，开发者在代码合并到主分支之前互相检查。好处包括早期捕获错误、在团队中共享知识、提高代码质量、执行编码标准和识别潜在的安全漏洞。GitHub拉取请求促进代码审查。",
    diagram: "",
    terms: ["code_review", "version_control", "collaboration"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 267,
    q: "What is the Observer design pattern?",
    qChinese: "什么是观察者设计模式？",
    options: [
      "A) A pattern for creating objects",
      "B) A pattern for accessing databases",
      "C) A pattern for sorting data",
      "D) A pattern where objects subscribe to events and are notified when the subject's state changes"
    ],
    optionsChinese: [
      "A) 创建对象的模式",
      "B) 访问数据库的模式",
      "C) 排序数据的模式",
      "D) 对象订阅事件并在主题状态改变时被通知的模式"
    ],
    answer: 3,
    explanation: "The Observer pattern defines a one-to-many dependency: when one object (subject) changes state, all its dependents (observers) are notified automatically. This decouples the subject from its observers. Common uses include event handling systems, MVC architecture, and publish-subscribe messaging. Java's PropertyChangeListener implements this pattern.",
    explanationChinese: "观察者模式定义一对多依赖：当一个对象（主题）改变状态时，其所有依赖者（观察者）被自动通知。这将主题与其观察者解耦。常见用途包括事件处理系统、MVC架构和发布-订阅消息。Java的PropertyChangeListener实现了此模式。",
    diagram: "",
    terms: ["design_pattern", "interface", "decoupling"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 268,
    q: "What is the Factory design pattern?",
    qChinese: "什么是工厂设计模式？",
    options: [
      "A) A pattern for creating factories",
      "B) A pattern for manufacturing hardware",
      "C) A pattern that provides an interface for creating objects without specifying their exact class",
      "D) A pattern for deleting objects"
    ],
    optionsChinese: [
      "A) 创建工厂的模式",
      "B) 制造硬件的模式",
      "C) 提供创建对象接口而不指定确切类的模式",
      "D) 删除对象的模式"
    ],
    answer: 2,
    explanation: "The Factory pattern provides a method for creating objects without specifying the concrete class. A factory method returns an instance of a common interface/superclass. This encapsulates object creation, promotes loose coupling, and makes it easy to add new types without modifying existing code. Example: Shape createShape(String type).",
    explanationChinese: "工厂模式提供创建对象的方法而不指定具体类。工厂方法返回公共接口/超类的实例。这封装了对象创建，促进松耦合，并使添加新类型变得容易而无需修改现有代码。示例：Shape createShape(String type)。",
    diagram: "",
    terms: ["design_pattern", "interface", "class"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 269,
    q: "What is refactoring?",
    qChinese: "什么是重构？",
    options: [
      "A) Rewriting the entire program from scratch",
      "B) Translating code to another language",
      "C) Adding new features to the code",
      "D) Restructuring existing code to improve its design without changing its external behavior"
    ],
    optionsChinese: [
      "A) 从头重写整个程序",
      "B) 将代码翻译成另一种语言",
      "C) 向代码添加新功能",
      "D) 重构现有代码以改善其设计而不改变其外部行为"
    ],
    answer: 3,
    explanation: "Refactoring improves code structure, readability, and maintainability without changing its observable behavior. Examples include renaming variables for clarity, extracting methods from long functions, removing duplicate code, and applying design patterns. Unit tests ensure behavior is preserved during refactoring. Clean code is easier to understand, test, and modify.",
    explanationChinese: "重构改善代码结构、可读性和可维护性，而不改变其可观察行为。示例包括为清晰重命名变量、从长函数中提取方法、移除重复代码和应用设计模式。单元测试确保重构期间行为被保留。干净的代码更容易理解、测试和修改。",
    diagram: "",
    terms: ["refactoring", "design_pattern", "testing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 270,
    q: "What is the DRY principle in software engineering?",
    qChinese: "软件工程中的DRY原则是什么？",
    options: [
      "A) Delete Redundant Yields",
      "B) Don't Repeat Yourself - avoid code duplication",
      "C) Develop Reliable Yields",
      "D) Debug Run Yourself"
    ],
    optionsChinese: [
      "A) 删除冗余产出",
      "B) 不要重复自己——避免代码重复",
      "C) 开发可靠产出",
      "D) 自己调试运行"
    ],
    answer: 1,
    explanation: "DRY (Don't Repeat Yourself) states that every piece of knowledge should have a single, authoritative representation. Duplicated code leads to inconsistencies when one copy is updated but not others. Extract common logic into methods, use inheritance or composition, and create shared utility classes. The opposite of DRY is WET (Write Everything Twice).",
    explanationChinese: "DRY（不要重复自己）规定每条知识应有单一的、权威的表示。重复代码在更新一份但不更新其他时导致不一致。将公共逻辑提取到方法中，使用继承或组合，创建共享实用类。DRY的反面是WET（所有东西写两遍）。",
    diagram: "",
    terms: ["design_pattern", "refactoring", "code_quality"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 271,
    q: "What is continuous integration (CI)?",
    qChinese: "什么是持续集成（CI）？",
    options: [
      "A) Continuously writing code without breaks",
      "B) Deploying code to production continuously",
      "C) Integrating third-party libraries",
      "D) Automatically building and testing code whenever changes are committed to the repository"
    ],
    optionsChinese: [
      "A) 不间断地持续编写代码",
      "B) 持续部署代码到生产环境",
      "C) 集成第三方库",
      "D) 每当更改提交到仓库时自动构建和测试代码"
    ],
    answer: 3,
    explanation: "CI is the practice of automatically building and running tests every time code is pushed to the repository. This catches integration errors early, ensures the codebase stays in a working state, and provides rapid feedback. Popular CI tools include GitHub Actions, Jenkins, and Travis CI. CI is the foundation of modern DevOps practices.",
    explanationChinese: "CI是每次代码推送到仓库时自动构建和运行测试的实践。这早期捕获集成错误，确保代码库保持工作状态，并提供快速反馈。流行的CI工具包括GitHub Actions、Jenkins和Travis CI。CI是现代DevOps实践的基础。",
    diagram: "",
    terms: ["testing", "version_control", "automation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 272,
    q: "What is the SOLID principle in OOP?",
    qChinese: "OOP中的SOLID原则是什么？",
    options: [
      "A) A way to make code run faster",
      "B) A database design approach",
      "C) A testing methodology",
      "D) Five design principles: Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion"
    ],
    optionsChinese: [
      "A) 使代码运行更快的方式",
      "B) 数据库设计方法",
      "C) 测试方法论",
      "D) 五个设计原则：单一职责、开闭、里氏替换、接口隔离、依赖倒置"
    ],
    answer: 3,
    explanation: "SOLID is five OOP design principles: S-Single Responsibility (one reason to change), O-Open/Closed (open for extension, closed for modification), L-Liskov Substitution (subtypes must be substitutable), I-Interface Segregation (specific interfaces over general), D-Dependency Inversion (depend on abstractions). Following SOLID leads to maintainable, flexible code.",
    explanationChinese: "SOLID是五个OOP设计原则：S-单一职责（一个改变的理由）、O-开闭（对扩展开放，对修改关闭）、L-里氏替换（子类型必须可替换）、I-接口隔离（具体接口优于通用接口）、D-依赖倒置（依赖抽象）。遵循SOLID导致可维护、灵活的代码。",
    diagram: "",
    terms: ["design_pattern", "class", "interface"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 273,
    q: "What is an assertion in testing?",
    qChinese: "测试中的断言是什么？",
    options: [
      "A) A statement that verifies an expected condition is true, failing the test if not",
      "B) A comment in the code",
      "C) A variable declaration",
      "D) A loop condition"
    ],
    optionsChinese: [
      "A) 验证预期条件为真的语句，如果不是则使测试失败",
      "B) 代码中的注释",
      "C) 变量声明",
      "D) 循环条件"
    ],
    answer: 0,
    explanation: "An assertion checks that a condition is true during testing. If the condition is false, the test fails with a descriptive message. Common assertions include assertEquals(expected, actual), assertTrue(condition), assertNotNull(obj), and assertThrows(exception, code). Assertions make tests self-checking and clearly express expected behavior.",
    explanationChinese: "断言在测试期间检查条件是否为真。如果条件为假，测试以描述性消息失败。常见断言包括assertEquals(expected, actual)、assertTrue(condition)、assertNotNull(obj)和assertThrows(exception, code)。断言使测试自检查并清楚地表达预期行为。",
    diagram: "",
    terms: ["testing", "assertion", "debugging"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 274,
    q: "What is the purpose of a debugger?",
    qChinese: "调试器的目的是什么？",
    options: [
      "A) Automatically fixing bugs",
      "B) Compiling code faster",
      "C) Writing test cases",
      "D) Allowing step-by-step code execution and inspection of program state to find bugs"
    ],
    optionsChinese: [
      "A) 自动修复错误",
      "B) 更快地编译代码",
      "C) 编写测试用例",
      "D) 允许逐步执行代码和检查程序状态以查找错误"
    ],
    answer: 3,
    explanation: "A debugger allows programmers to execute code step by step, set breakpoints, inspect variable values, examine the call stack, and evaluate expressions at runtime. This helps identify the exact location and cause of bugs. Common debuggers include GDB for C/C++, the Java debugger in IDEs, and browser DevTools for JavaScript.",
    explanationChinese: "调试器允许程序员逐步执行代码、设置断点、检查变量值、检查调用栈和在运行时评估表达式。这有助于识别错误的确切位置和原因。常见调试器包括C/C++的GDB、IDE中的Java调试器和JavaScript的浏览器DevTools。",
    diagram: "",
    terms: ["debugging", "breakpoint", "testing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 275,
    q: "What is a merge conflict in Git?",
    qChinese: "Git中的合并冲突是什么？",
    options: [
      "A) When Git cannot automatically merge files",
      "B) When two branches modify the same lines of the same file and Git cannot auto-resolve",
      "C) When a branch is deleted",
      "D) When the repository is corrupted"
    ],
    optionsChinese: [
      "A) 当Git不能自动合并文件时",
      "B) 当两个分支修改同一文件的相同行且Git无法自动解决时",
      "C) 当分支被删除时",
      "D) 当仓库损坏时"
    ],
    answer: 1,
    explanation: "A merge conflict occurs when Git cannot automatically reconcile changes from two branches that modified the same lines. Git marks the conflicting sections with <<<<<<<, =======, and >>>>>>> markers. The developer must manually edit the file to resolve conflicts, then stage and commit. Clear communication and small, frequent merges minimize conflicts.",
    explanationChinese: "合并冲突发生在Git无法自动协调修改了相同行的两个分支的更改时。Git用<<<<<<<、=======和>>>>>>>标记标记冲突部分。开发者必须手动编辑文件解决冲突，然后暂存并提交。清晰的沟通和频繁的小合并可以最小化冲突。",
    diagram: "",
    terms: ["version_control", "git", "collaboration"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 276,
    q: "What is the MVC (Model-View-Controller) pattern?",
    qChinese: "什么是MVC（模型-视图-控制器）模式？",
    options: [
      "A) A testing framework",
      "B) An architectural pattern separating data (Model), UI (View), and logic (Controller)",
      "C) A version control system",
      "D) A database schema"
    ],
    optionsChinese: [
      "A) 测试框架",
      "B) 将数据（模型）、UI（视图）和逻辑（控制器）分离的架构模式",
      "C) 版本控制系统",
      "D) 数据库模式"
    ],
    answer: 1,
    explanation: "MVC separates concerns into three components: Model (data and business logic), View (user interface presentation), and Controller (handles user input and coordinates Model and View). This separation allows independent development and testing of each component. MVC is widely used in web frameworks like Spring MVC and Ruby on Rails.",
    explanationChinese: "MVC将关注点分为三个组件：模型（数据和业务逻辑）、视图（用户界面展示）和控制器（处理用户输入并协调模型和视图）。这种分离允许每个组件的独立开发和测试。MVC广泛用于Spring MVC和Ruby on Rails等Web框架。",
    diagram: "",
    terms: ["design_pattern", "architecture", "decoupling"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 277,
    q: "What is edge case testing?",
    qChinese: "什么是边界情况测试？",
    options: [
      "A) Testing at the edges of the screen",
      "B) Testing boundary conditions, extreme inputs, and unusual scenarios that may reveal bugs",
      "C) Testing with edge computing",
      "D) Testing the latest version only"
    ],
    optionsChinese: [
      "A) 在屏幕边缘测试",
      "B) 测试可能揭示错误的边界条件、极端输入和不寻常场景",
      "C) 使用边缘计算测试",
      "D) 仅测试最新版本"
    ],
    answer: 1,
    explanation: "Edge case testing targets boundary conditions and unusual inputs that may break the program. Examples: empty arrays, null inputs, maximum/minimum integer values, empty strings, single-element collections, and division by zero. These cases often expose off-by-one errors, null pointer exceptions, and overflow bugs that normal inputs miss.",
    explanationChinese: "边界情况测试针对可能破坏程序的边界条件和不寻常输入。示例：空数组、null输入、最大/最小整数值、空字符串、单元素集合和除以零。这些情况经常暴露正常输入遗漏的偏移一错误、空指针异常和溢出错误。",
    diagram: "",
    terms: ["testing", "debugging", "assertion"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 278,
    q: "What is the Strategy design pattern?",
    qChinese: "什么是策略设计模式？",
    options: [
      "A) A planning methodology",
      "B) A testing strategy",
      "C) A pattern that defines a family of algorithms and makes them interchangeable at runtime",
      "D) A deployment strategy"
    ],
    optionsChinese: [
      "A) 规划方法论",
      "B) 测试策略",
      "C) 定义算法族并使其在运行时可互换的模式",
      "D) 部署策略"
    ],
    answer: 2,
    explanation: "The Strategy pattern encapsulates algorithms into separate classes implementing a common interface. The context object can switch between strategies at runtime without modifying its own code. Example: a sorting context that can use BubbleSort, QuickSort, or MergeSort interchangeably. This follows the Open/Closed principle of SOLID.",
    explanationChinese: "策略模式将算法封装到实现公共接口的单独类中。上下文对象可以在运行时切换策略而无需修改自己的代码。示例：可以互换使用BubbleSort、QuickSort或MergeSort的排序上下文。这遵循SOLID的开闭原则。",
    diagram: "",
    terms: ["design_pattern", "interface", "algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 279,
    q: "What is code coverage in testing?",
    qChinese: "测试中的代码覆盖率是什么？",
    options: [
      "A) The amount of documentation for the code",
      "B) The number of developers who reviewed the code",
      "C) The number of files in the project",
      "D) The percentage of code lines, branches, or paths executed by tests"
    ],
    optionsChinese: [
      "A) 代码文档的数量",
      "B) 审查代码的开发者数量",
      "C) 项目中的文件数量",
      "D) 测试执行的代码行、分支或路径的百分比"
    ],
    answer: 3,
    explanation: "Code coverage measures the percentage of code executed by tests. Types include line coverage (lines executed), branch coverage (all if/else paths taken), and path coverage (all possible execution paths). Higher coverage generally means more thorough testing, but 100% coverage does not guarantee bug-free code. Tools: JaCoCo (Java), gcov (C).",
    explanationChinese: "代码覆盖率衡量测试执行的代码百分比。类型包括行覆盖率（执行的行）、分支覆盖率（所有if/else路径被执行）和路径覆盖率（所有可能的执行路径）。更高的覆盖率通常意味着更彻底的测试，但100%覆盖率不保证没有错误。工具：JaCoCo（Java）、gcov（C）。",
    diagram: "",
    terms: ["testing", "code_coverage", "debugging"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 280,
    q: "What is the difference between integration testing and system testing?",
    qChinese: "集成测试和系统测试有什么区别？",
    options: [
      "A) Integration tests verify interactions between components; system tests verify the entire application as a whole",
      "B) They test the same thing",
      "C) System testing is done first",
      "D) Integration testing is only for databases"
    ],
    optionsChinese: [
      "A) 集成测试验证组件之间的交互；系统测试验证整个应用作为一个整体",
      "B) 它们测试相同的东西",
      "C) 系统测试先进行",
      "D) 集成测试仅用于数据库"
    ],
    answer: 0,
    explanation: "Integration testing verifies that different modules or services work correctly together (e.g., testing API calls between frontend and backend). System testing validates the entire application against requirements in an environment resembling production. The testing pyramid: many unit tests, fewer integration tests, fewest system/E2E tests.",
    explanationChinese: "集成测试验证不同模块或服务正确地协同工作（例如，测试前端和后端之间的API调用）。系统测试在类似生产的环境中根据需求验证整个应用。测试金字塔：大量单元测试、较少的集成测试、最少的系统/E2E测试。",
    diagram: "",
    terms: ["testing", "integration", "system_testing"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 281,
    q: "What is the time complexity of bubble sort?",
    qChinese: "冒泡排序的时间复杂度是什么？",
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
    answer: 1,
    explanation: "Bubble sort has O(n^2) average and worst-case time complexity because it uses nested loops: the outer loop runs n times and the inner loop compares adjacent elements. In each pass, the largest unsorted element 'bubbles' to its correct position. While simple to understand, it is inefficient for large datasets compared to O(n log n) algorithms.",
    explanationChinese: "冒泡排序的平均和最坏情况时间复杂度为O(n^2)，因为它使用嵌套循环：外层循环运行n次，内层循环比较相邻元素。每次遍历中，最大的未排序元素'冒泡'到其正确位置。虽然容易理解，但与O(n log n)算法相比，对大数据集效率低。",
    diagram: "",
    terms: ["sorting", "time_complexity", "algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 282,
    q: "What is the best-case time complexity of insertion sort?",
    qChinese: "插入排序的最佳情况时间复杂度是什么？",
    options: [
      "A) O(n)",
      "B) O(n log n)",
      "C) O(n^2)",
      "D) O(1)"
    ],
    optionsChinese: [
      "A) O(n)",
      "B) O(n log n)",
      "C) O(n^2)",
      "D) O(1)"
    ],
    answer: 0,
    explanation: "Insertion sort achieves O(n) best-case time when the array is already sorted. In this case, each element is compared once with its predecessor and no shifts are needed. The worst case (reverse-sorted) is O(n^2). Insertion sort is efficient for small arrays and nearly sorted data, which is why TimSort uses it for small subarrays.",
    explanationChinese: "插入排序在数组已经排序时达到O(n)最佳情况时间。在这种情况下，每个元素只与其前驱比较一次，不需要移位。最坏情况（逆序）是O(n^2)。插入排序对小数组和几乎排序的数据高效，这就是TimSort对小子数组使用它的原因。",
    diagram: "",
    terms: ["sorting", "time_complexity", "algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 283,
    q: "What is the time complexity of merge sort?",
    qChinese: "归并排序的时间复杂度是什么？",
    options: [
      "A) O(n^2)",
      "B) O(log n)",
      "C) O(n)",
      "D) O(n log n)"
    ],
    optionsChinese: [
      "A) O(n^2)",
      "B) O(log n)",
      "C) O(n)",
      "D) O(n log n)"
    ],
    answer: 3,
    explanation: "Merge sort has O(n log n) time complexity in all cases (best, average, worst). It divides the array into halves (log n levels) and merges them back (O(n) per level). It is stable (preserves equal element order) but requires O(n) extra space. Merge sort is the go-to choice when guaranteed O(n log n) performance is needed.",
    explanationChinese: "归并排序在所有情况（最佳、平均、最坏）下的时间复杂度为O(n log n)。它将数组分成两半（log n层）并合并回去（每层O(n)）。它是稳定的（保持相等元素的顺序）但需要O(n)额外空间。当需要保证O(n log n)性能时，归并排序是首选。",
    diagram: "",
    terms: ["sorting", "time_complexity", "divide_and_conquer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 284,
    q: "What is the average-case time complexity of quicksort?",
    qChinese: "快速排序的平均情况时间复杂度是什么？",
    options: [
      "A) O(n^2)",
      "B) O(log n)",
      "C) O(n)",
      "D) O(n log n)"
    ],
    optionsChinese: [
      "A) O(n^2)",
      "B) O(log n)",
      "C) O(n)",
      "D) O(n log n)"
    ],
    answer: 3,
    explanation: "Quicksort has O(n log n) average-case time complexity. It picks a pivot, partitions elements around it, and recursively sorts the partitions. The worst case is O(n^2) when the pivot is always the smallest or largest element (already sorted array with first-element pivot). Random pivot selection and median-of-three mitigate worst-case scenarios.",
    explanationChinese: "快速排序的平均情况时间复杂度为O(n log n)。它选择一个基准，围绕它对元素分区，并递归排序分区。最坏情况是O(n^2)，当基准总是最小或最大元素时（已排序数组使用第一个元素作为基准）。随机选择基准和三数取中法缓解最坏情况。",
    diagram: "",
    terms: ["sorting", "time_complexity", "recursion"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 285,
    q: "What does Big O notation represent?",
    qChinese: "大O符号表示什么？",
    options: [
      "A) The exact running time of an algorithm",
      "B) An upper bound on the growth rate of an algorithm's time or space usage as input size increases",
      "C) The minimum running time",
      "D) The amount of memory used"
    ],
    optionsChinese: [
      "A) 算法的精确运行时间",
      "B) 随输入大小增加，算法时间或空间使用增长率的上界",
      "C) 最小运行时间",
      "D) 使用的内存量"
    ],
    answer: 1,
    explanation: "Big O notation describes the upper bound of an algorithm's growth rate, ignoring constants and lower-order terms. O(n) means linear growth, O(n^2) means quadratic, O(log n) means logarithmic. It focuses on how performance scales with input size, not the exact time. Common hierarchy: O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n).",
    explanationChinese: "大O符号描述算法增长率的上界，忽略常数和低阶项。O(n)意味着线性增长，O(n^2)意味着二次，O(log n)意味着对数。它关注性能如何随输入大小扩展，而非精确时间。常见层次：O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n)。",
    diagram: "",
    terms: ["time_complexity", "algorithm", "big_o"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 286,
    q: "What is the time complexity of binary search?",
    qChinese: "二分搜索的时间复杂度是什么？",
    options: [
      "A) O(log n)",
      "B) O(n^2)",
      "C) O(n)",
      "D) O(1)"
    ],
    optionsChinese: [
      "A) O(log n)",
      "B) O(n^2)",
      "C) O(n)",
      "D) O(1)"
    ],
    answer: 0,
    explanation: "Binary search has O(log n) time complexity because it halves the search space with each comparison. For 1 million elements, it needs at most ~20 comparisons (log2(1,000,000) ≈ 20). The prerequisite is that the array must be sorted. Binary search is vastly more efficient than linear search O(n) for large sorted datasets.",
    explanationChinese: "二分搜索的时间复杂度为O(log n)，因为每次比较将搜索空间减半。对于100万个元素，最多需要约20次比较（log2(1,000,000) ≈ 20）。前提是数组必须排序。对于大型排序数据集，二分搜索远比线性搜索O(n)高效。",
    diagram: "",
    terms: ["binary_search", "time_complexity", "searching"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 287,
    q: "What is a stable sorting algorithm?",
    qChinese: "什么是稳定排序算法？",
    options: [
      "A) An algorithm that preserves the relative order of equal elements",
      "B) An algorithm that never crashes",
      "C) An algorithm with O(n log n) complexity",
      "D) An algorithm that uses constant memory"
    ],
    optionsChinese: [
      "A) 保持相等元素相对顺序的算法",
      "B) 永不崩溃的算法",
      "C) O(n log n)复杂度的算法",
      "D) 使用常量内存的算法"
    ],
    answer: 0,
    explanation: "A stable sort preserves the relative order of elements with equal keys. If two records have the same sort key, they appear in the same order in the output as in the input. Merge sort and insertion sort are stable; quicksort and heap sort are not. Stability matters when sorting by multiple criteria sequentially.",
    explanationChinese: "稳定排序保持具有相等键的元素的相对顺序。如果两个记录有相同的排序键，它们在输出中的顺序与输入中相同。归并排序和插入排序是稳定的；快速排序和堆排序不是。在按多个条件顺序排序时，稳定性很重要。",
    diagram: "",
    terms: ["sorting", "algorithm", "stability"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 288,
    q: "What is selection sort and what is its time complexity?",
    qChinese: "什么是选择排序，它的时间复杂度是什么？",
    options: [
      "A) O(n^2) - finds the minimum in the unsorted portion and swaps it to the front",
      "B) O(n) - selects the minimum each pass",
      "C) O(n log n) - uses divide and conquer",
      "D) O(log n) - uses binary selection"
    ],
    optionsChinese: [
      "A) O(n^2) - 在未排序部分找到最小值并交换到前面",
      "B) O(n) - 每次选择最小值",
      "C) O(n log n) - 使用分治",
      "D) O(log n) - 使用二分选择"
    ],
    answer: 0,
    explanation: "Selection sort repeatedly finds the minimum element from the unsorted portion and places it at the beginning. It uses nested loops: outer loop for positions, inner loop to find the minimum. Time complexity is O(n^2) in all cases. It makes at most n swaps, which is an advantage when writes are expensive, but it is not stable.",
    explanationChinese: "选择排序重复从未排序部分找到最小元素并将其放在开头。它使用嵌套循环：外层循环用于位置，内层循环用于找到最小值。所有情况下时间复杂度为O(n^2)。它最多进行n次交换，当写入成本高时这是一个优势，但它不是稳定的。",
    diagram: "",
    terms: ["sorting", "time_complexity", "algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 289,
    q: "What is the space complexity of merge sort?",
    qChinese: "归并排序的空间复杂度是什么？",
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
    explanation: "Merge sort requires O(n) additional space for the temporary arrays used during merging. Each merge step creates a temporary array to hold the merged result. This is a trade-off: merge sort guarantees O(n log n) time but uses extra memory. In contrast, quicksort sorts in-place with O(log n) stack space on average.",
    explanationChinese: "归并排序需要O(n)额外空间用于合并期间使用的临时数组。每个合并步骤创建一个临时数组来保存合并结果。这是一个权衡：归并排序保证O(n log n)时间但使用额外内存。相比之下，快速排序原地排序，平均使用O(log n)栈空间。",
    diagram: "",
    terms: ["sorting", "space_complexity", "memory_allocation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 290,
    q: "What is the difference between linear search and binary search?",
    qChinese: "线性搜索和二分搜索有什么区别？",
    options: [
      "A) Linear search is always faster",
      "B) They have the same time complexity",
      "C) Binary search works on unsorted arrays",
      "D) Linear search checks every element O(n); binary search halves the search space O(log n) but requires sorted data"
    ],
    optionsChinese: [
      "A) 线性搜索总是更快",
      "B) 它们有相同的时间复杂度",
      "C) 二分搜索适用于未排序数组",
      "D) 线性搜索检查每个元素O(n)；二分搜索将搜索空间减半O(log n)但需要排序数据"
    ],
    answer: 3,
    explanation: "Linear search sequentially checks each element, working on any array with O(n) time. Binary search compares the target with the middle element and eliminates half the array each step, achieving O(log n) time but requiring the array to be sorted. For small arrays, linear search may be faster due to simplicity and cache efficiency.",
    explanationChinese: "线性搜索按顺序检查每个元素，适用于任何数组，时间O(n)。二分搜索将目标与中间元素比较，每步消除一半数组，达到O(log n)时间，但要求数组排序。对于小数组，由于简单性和缓存效率，线性搜索可能更快。",
    diagram: "",
    terms: ["searching", "binary_search", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 291,
    q: "What is the partitioning step in quicksort?",
    qChinese: "快速排序中的分区步骤是什么？",
    options: [
      "A) Dividing the array into two equal halves",
      "B) Merging two sorted subarrays",
      "C) Sorting each element individually",
      "D) Rearranging elements so those less than the pivot are on the left and greater on the right"
    ],
    optionsChinese: [
      "A) 将数组分成两个相等的半部分",
      "B) 合并两个已排序子数组",
      "C) 单独排序每个元素",
      "D) 重新排列元素使小于基准的在左边，大于的在右边"
    ],
    answer: 3,
    explanation: "Quicksort's partition step selects a pivot element and rearranges the array so all elements less than the pivot come before it and all greater elements come after. The pivot is then in its final sorted position. The Lomuto and Hoare partition schemes are two common implementations. After partitioning, recursion sorts the two sub-arrays independently.",
    explanationChinese: "快速排序的分区步骤选择一个基准元素并重新排列数组，使所有小于基准的元素在它之前，所有大于的在之后。基准然后在其最终排序位置。Lomuto和Hoare分区方案是两种常见实现。分区后，递归独立排序两个子数组。",
    diagram: "",
    terms: ["sorting", "recursion", "algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 292,
    q: "What does O(1) space complexity mean?",
    qChinese: "O(1)空间复杂度意味着什么？",
    options: [
      "A) The algorithm uses no memory",
      "B) The algorithm uses a constant amount of extra memory regardless of input size",
      "C) The algorithm uses exactly 1 byte",
      "D) The algorithm uses memory equal to the input size"
    ],
    optionsChinese: [
      "A) 算法不使用内存",
      "B) 算法使用与输入大小无关的常量额外内存",
      "C) 算法恰好使用1字节",
      "D) 算法使用等于输入大小的内存"
    ],
    answer: 1,
    explanation: "O(1) space complexity means the algorithm uses a fixed amount of extra memory that does not grow with input size. For example, swapping two variables uses O(1) space. In-place sorting algorithms like insertion sort and selection sort use O(1) extra space (not counting the input). This is also called constant space complexity.",
    explanationChinese: "O(1)空间复杂度意味着算法使用不随输入大小增长的固定额外内存量。例如，交换两个变量使用O(1)空间。插入排序和选择排序等原地排序算法使用O(1)额外空间（不计输入）。这也称为常量空间复杂度。",
    diagram: "",
    terms: ["space_complexity", "algorithm", "memory_allocation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 293,
    q: "What is the difference between best case, average case, and worst case complexity?",
    qChinese: "最佳情况、平均情况和最坏情况复杂度有什么区别？",
    options: [
      "A) They are always the same",
      "B) Best case applies to small inputs only",
      "C) Best case is the minimum operations; worst case is the maximum; average is the expected over all inputs",
      "D) Worst case is theoretical and never occurs"
    ],
    optionsChinese: [
      "A) 它们总是相同的",
      "B) 最佳情况仅适用于小输入",
      "C) 最佳情况是最少操作；最坏情况是最多；平均情况是所有输入的期望值",
      "D) 最坏情况是理论上的，从不发生"
    ],
    answer: 2,
    explanation: "Best case is the input that causes the fewest operations (e.g., sorted array for insertion sort: O(n)). Worst case is the input causing the most operations (e.g., reverse-sorted for insertion sort: O(n^2)). Average case is the expected performance over all possible inputs. Worst case is most commonly used for algorithm analysis and guarantees.",
    explanationChinese: "最佳情况是导致最少操作的输入（如插入排序的已排序数组：O(n)）。最坏情况是导致最多操作的输入（如插入排序的逆序：O(n^2)）。平均情况是所有可能输入的期望性能。最坏情况最常用于算法分析和保证。",
    diagram: "",
    terms: ["time_complexity", "algorithm", "big_o"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 294,
    q: "What is counting sort and when is it efficient?",
    qChinese: "什么是计数排序，什么时候高效？",
    options: [
      "A) An O(n^2) general-purpose sort",
      "B) An O(n + k) sort for integers with a limited range k, using counting rather than comparisons",
      "C) A comparison-based O(n log n) sort",
      "D) A sorting algorithm that only works with strings"
    ],
    optionsChinese: [
      "A) O(n^2)的通用排序",
      "B) 对范围有限k的整数使用计数而非比较的O(n + k)排序",
      "C) 基于比较的O(n log n)排序",
      "D) 仅适用于字符串的排序算法"
    ],
    answer: 1,
    explanation: "Counting sort is a non-comparison sort that counts occurrences of each value, then reconstructs the sorted array. Time complexity is O(n + k) where k is the range of values. It is efficient when k is small relative to n. It is stable and works only with integers or items that can be mapped to integers. Not suitable for large value ranges.",
    explanationChinese: "计数排序是一种非比较排序，计算每个值的出现次数，然后重建排序数组。时间复杂度为O(n + k)，其中k是值的范围。当k相对于n较小时高效。它是稳定的，仅适用于整数或可以映射到整数的项目。不适合大值范围。",
    diagram: "",
    terms: ["sorting", "time_complexity", "algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 295,
    q: "What is the lower bound for comparison-based sorting?",
    qChinese: "基于比较的排序的下界是什么？",
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
    explanation: "Any comparison-based sorting algorithm must make at least O(n log n) comparisons in the worst case. This is proven using a decision tree argument: n! possible orderings require log(n!) = O(n log n) comparisons to distinguish. Merge sort and heap sort achieve this lower bound. Non-comparison sorts (counting, radix) can be faster for specific data types.",
    explanationChinese: "任何基于比较的排序算法在最坏情况下必须进行至少O(n log n)次比较。这通过决策树论证证明：n!种可能的排列需要log(n!) = O(n log n)次比较来区分。归并排序和堆排序达到了这个下界。非比较排序（计数、基数）对特定数据类型可以更快。",
    diagram: "",
    terms: ["sorting", "time_complexity", "algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 296,
    q: "What is the two-pointer technique in algorithm design?",
    qChinese: "算法设计中的双指针技术是什么？",
    options: [
      "A) Using two mouse pointers",
      "B) Pointing to two different files",
      "C) Using two arrays instead of one",
      "D) Using two indices that traverse data from different positions to solve problems efficiently"
    ],
    optionsChinese: [
      "A) 使用两个鼠标指针",
      "B) 指向两个不同的文件",
      "C) 使用两个数组代替一个",
      "D) 使用两个从不同位置遍历数据的索引来高效解决问题"
    ],
    answer: 3,
    explanation: "The two-pointer technique uses two indices (often starting from different ends or moving at different speeds) to solve problems in O(n) time that might otherwise require O(n^2). Common applications: finding pairs that sum to a target in sorted arrays, detecting cycles in linked lists (fast/slow pointers), and removing duplicates from sorted arrays.",
    explanationChinese: "双指针技术使用两个索引（通常从不同端开始或以不同速度移动）在O(n)时间内解决否则可能需要O(n^2)的问题。常见应用：在排序数组中找到和为目标的配对、检测链表中的循环（快慢指针）以及从排序数组中删除重复项。",
    diagram: "",
    terms: ["algorithm", "pointer", "time_complexity"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 297,
    q: "What is the difference between O(n) and O(n^2) in practical terms?",
    qChinese: "O(n)和O(n^2)在实际中有什么区别？",
    options: [
      "A) O(n^2) is always exactly twice as slow",
      "B) O(n^2) is faster for large inputs",
      "C) They perform similarly for all input sizes",
      "D) For n=1000, O(n) does ~1000 operations while O(n^2) does ~1,000,000 operations"
    ],
    optionsChinese: [
      "A) O(n^2)总是慢两倍",
      "B) O(n^2)对大输入更快",
      "C) 对所有输入大小它们性能相似",
      "D) 对于n=1000，O(n)做约1000次操作，而O(n^2)做约1,000,000次操作"
    ],
    answer: 3,
    explanation: "O(n) grows linearly: doubling input doubles the time. O(n^2) grows quadratically: doubling input quadruples the time. For n=1000, O(n) performs ~1,000 operations while O(n^2) performs ~1,000,000. For n=1,000,000, O(n) is 1M operations vs O(n^2) at 1 trillion. This dramatic difference is why algorithm choice matters for large datasets.",
    explanationChinese: "O(n)线性增长：输入翻倍，时间翻倍。O(n^2)二次增长：输入翻倍，时间变为四倍。对于n=1000，O(n)执行约1,000次操作，而O(n^2)执行约1,000,000次。对于n=1,000,000，O(n)是100万次操作，而O(n^2)是1万亿次。这种巨大差异是算法选择对大数据集重要的原因。",
    diagram: "",
    terms: ["time_complexity", "algorithm", "big_o"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 298,
    q: "What is a greedy algorithm?",
    qChinese: "什么是贪心算法？",
    options: [
      "A) An algorithm that uses the most memory possible",
      "B) An algorithm that tries all possible solutions",
      "C) An algorithm that makes the locally optimal choice at each step, hoping for a global optimum",
      "D) An algorithm that minimizes code length"
    ],
    optionsChinese: [
      "A) 使用尽可能多内存的算法",
      "B) 尝试所有可能解决方案的算法",
      "C) 在每一步做局部最优选择，期望达到全局最优的算法",
      "D) 最小化代码长度的算法"
    ],
    answer: 2,
    explanation: "A greedy algorithm makes the best possible choice at each step without reconsidering previous decisions. It does not always produce the optimal solution, but works well for certain problems like coin change (with standard denominations), activity selection, Huffman coding, and Dijkstra's shortest path. Greedy algorithms are typically efficient and simple to implement.",
    explanationChinese: "贪心算法在每一步做出最佳可能的选择，不重新考虑之前的决定。它不总是产生最优解，但对某些问题效果良好，如零钱兑换（标准面额）、活动选择、霍夫曼编码和Dijkstra最短路径。贪心算法通常高效且易于实现。",
    diagram: "",
    terms: ["algorithm", "optimization", "greedy"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 299,
    q: "What is the difference between in-place and out-of-place sorting algorithms?",
    qChinese: "原地排序和非原地排序算法有什么区别？",
    options: [
      "A) In-place is faster",
      "B) In-place sorts use O(1) extra space; out-of-place sorts require additional memory proportional to input",
      "C) Out-of-place sorts are always stable",
      "D) In-place sorts cannot handle duplicates"
    ],
    optionsChinese: [
      "A) 原地更快",
      "B) 原地排序使用O(1)额外空间；非原地排序需要与输入成比例的额外内存",
      "C) 非原地排序总是稳定的",
      "D) 原地排序不能处理重复项"
    ],
    answer: 1,
    explanation: "In-place sorting algorithms like quicksort, insertion sort, and selection sort rearrange elements within the original array using O(1) extra space. Out-of-place algorithms like merge sort require O(n) additional memory for temporary arrays. In-place sorting is memory-efficient but may sacrifice stability or simplicity. The choice depends on memory constraints.",
    explanationChinese: "原地排序算法如快速排序、插入排序和选择排序在原始数组中使用O(1)额外空间重新排列元素。非原地算法如归并排序需要O(n)额外内存用于临时数组。原地排序内存高效，但可能牺牲稳定性或简单性。选择取决于内存约束。",
    diagram: "",
    terms: ["sorting", "space_complexity", "algorithm"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 300,
    q: "What is the time complexity of accessing an element in a hash table (average case)?",
    qChinese: "在哈希表中访问元素的时间复杂度（平均情况）是什么？",
    options: [
      "A) O(n)",
      "B) O(1)",
      "C) O(log n)",
      "D) O(n log n)"
    ],
    optionsChinese: [
      "A) O(n)",
      "B) O(1)",
      "C) O(log n)",
      "D) O(n log n)"
    ],
    answer: 1,
    explanation: "Hash tables provide O(1) average-case time for insert, lookup, and delete operations. A hash function maps the key to an index in the array. Collisions (multiple keys mapping to the same index) are handled by chaining or open addressing. Worst case is O(n) if all keys hash to the same bucket, but good hash functions make this extremely unlikely.",
    explanationChinese: "哈希表为插入、查找和删除操作提供O(1)平均情况时间。哈希函数将键映射到数组中的索引。冲突（多个键映射到相同索引）通过链接或开放寻址处理。最坏情况是O(n)，如果所有键哈希到同一桶，但好的哈希函数使这极不可能发生。",
    diagram: "",
    terms: ["hash_map", "time_complexity", "searching"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  }
];
