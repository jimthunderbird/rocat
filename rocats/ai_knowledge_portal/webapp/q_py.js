const questionsPY = [
  {
    "id": 1,
    "q": "What is the output of type(3.14) in Python?",
    "qChinese": "Python中type(3.14)的输出是什么？",
    "options": [
      "A) <class 'float'>",
      "B) <class 'int'>",
      "C) <class 'decimal'>",
      "D) <class 'double'>"
    ],
    "optionsChinese": [
      "A) <class 'float'>",
      "B) <class 'int'>",
      "C) <class 'decimal'>",
      "D) <class 'double'>"
    ],
    "answer": 0,
    "explanation": "In Python, 3.14 is a floating-point literal, so type(3.14) returns <class 'float'>. Python does not have a built-in double type like Java or C++. All floating-point numbers in Python are represented as float objects, which internally use double-precision (64-bit) IEEE 754 format.",
    "explanationChinese": "在Python中，3.14是浮点数字面量，因此type(3.14)返回<class 'float'>。Python没有像Java或C++那样的内置double类型。Python中所有浮点数都表示为float对象，内部使用双精度（64位）IEEE 754格式。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 2,
    "q": "Which of the following is an immutable data type in Python?",
    "qChinese": "以下哪个是Python中的不可变数据类型？",
    "options": [
      "A) list",
      "B) dict",
      "C) set",
      "D) tuple"
    ],
    "optionsChinese": [
      "A) 列表(list)",
      "B) 字典(dict)",
      "C) 集合(set)",
      "D) 元组(tuple)"
    ],
    "answer": 3,
    "explanation": "Tuples are immutable sequences in Python, meaning their elements cannot be changed after creation. Lists, dicts, and sets are all mutable. Immutability makes tuples hashable (if all elements are hashable), so they can be used as dictionary keys or set elements, unlike lists.",
    "explanationChinese": "元组是Python中的不可变序列，这意味着它们的元素在创建后不能更改。列表、字典和集合都是可变的。不可变性使元组可哈希（如果所有元素都可哈希），因此它们可以用作字典键或集合元素，而列表不行。",
    "diagram": "",
    "terms": [
      "dictionary"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 3,
    "q": "What does the // operator do in Python?",
    "qChinese": "Python中//运算符的作用是什么？",
    "options": [
      "A) Regular division",
      "B) Modulo operation",
      "C) Floor division",
      "D) Exponentiation"
    ],
    "optionsChinese": [
      "A) 常规除法",
      "B) 取模运算",
      "C) 地板除法",
      "D) 幂运算"
    ],
    "answer": 2,
    "explanation": "The // operator performs floor division, returning the largest integer less than or equal to the result. For example, 7 // 2 returns 3, and -7 // 2 returns -4 (not -3). Regular division uses /, modulo uses %, and exponentiation uses **. Floor division always rounds toward negative infinity.",
    "explanationChinese": "//运算符执行地板除法，返回小于或等于结果的最大整数。例如，7 // 2返回3，-7 // 2返回-4（不是-3）。常规除法使用/，取模使用%，幂运算使用**。地板除法总是向负无穷方向取整。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 4,
    "q": "What is the result of bool('') in Python?",
    "qChinese": "Python中bool('')的结果是什么？",
    "options": [
      "A) False",
      "B) True",
      "C) None",
      "D) Error"
    ],
    "optionsChinese": [
      "A) False",
      "B) True",
      "C) None",
      "D) 错误"
    ],
    "answer": 0,
    "explanation": "An empty string is a falsy value in Python, so bool('') returns False. Other falsy values include 0, None, empty collections ([], {}, set()), and 0.0. Any non-empty string, even a single space ' ', evaluates to True. This truthiness concept is fundamental to Python conditional logic.",
    "explanationChinese": "空字符串在Python中是假值，因此bool('')返回False。其他假值包括0、None、空集合（[]、{}、set()）和0.0。任何非空字符串，即使是单个空格' '，都求值为True。这种真值概念是Python条件逻辑的基础。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 5,
    "q": "What does the 'is' keyword check in Python?",
    "qChinese": "Python中'is'关键字检查什么？",
    "options": [
      "A) Value equality",
      "B) Type equality",
      "C) Object identity",
      "D) String matching"
    ],
    "optionsChinese": [
      "A) 值相等",
      "B) 类型相等",
      "C) 对象标识",
      "D) 字符串匹配"
    ],
    "answer": 2,
    "explanation": "The 'is' keyword checks whether two variables refer to the same object in memory (identity), not whether they have the same value. Use == for value comparison. For example, a = [1,2] and b = [1,2] means a == b is True but a is b is False, because they are different list objects.",
    "explanationChinese": "'is'关键字检查两个变量是否引用内存中的同一对象（标识），而不是它们是否具有相同的值。使用==进行值比较。例如，a = [1,2]和b = [1,2]意味着a == b为True但a is b为False，因为它们是不同的列表对象。",
    "diagram": "",
    "terms": [
      "duck_typing"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 6,
    "q": "Which statement correctly creates a complex number in Python?",
    "qChinese": "哪个语句正确地创建了Python中的复数？",
    "options": [
      "A) x = 3 + 4j",
      "B) x = 3 + 4i",
      "C) x = complex(3, 4i)",
      "D) x = 3 + imaginary(4)"
    ],
    "optionsChinese": [
      "A) x = 3 + 4j",
      "B) x = 3 + 4i",
      "C) x = complex(3, 4i)",
      "D) x = 3 + imaginary(4)"
    ],
    "answer": 0,
    "explanation": "Python uses 'j' (not 'i') to represent the imaginary part of complex numbers. So 3 + 4j creates a complex number with real part 3 and imaginary part 4. You can also use complex(3, 4). The .real and .imag attributes access each part. This follows engineering convention rather than mathematical convention.",
    "explanationChinese": "Python使用'j'（而不是'i'）来表示复数的虚部。因此3 + 4j创建一个实部为3、虚部为4的复数。也可以使用complex(3, 4)。.real和.imag属性访问各部分。这遵循工程惯例而非数学惯例。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 7,
    "q": "What is the output of print(0.1 + 0.2 == 0.3)?",
    "qChinese": "print(0.1 + 0.2 == 0.3)的输出是什么？",
    "options": [
      "A) False",
      "B) True",
      "C) 0.3",
      "D) Error"
    ],
    "optionsChinese": [
      "A) False",
      "B) True",
      "C) 0.3",
      "D) 错误"
    ],
    "answer": 0,
    "explanation": "Due to floating-point representation in IEEE 754 binary format, 0.1 + 0.2 actually equals 0.30000000000000004, not exactly 0.3. This is a common pitfall in all languages using binary floating-point. Use math.isclose() or the decimal module for precise comparisons when exact decimal arithmetic is needed.",
    "explanationChinese": "由于IEEE 754二进制格式的浮点数表示，0.1 + 0.2实际上等于0.30000000000000004，而不是精确的0.3。这是所有使用二进制浮点数的语言中的常见陷阱。当需要精确的十进制运算时，使用math.isclose()或decimal模块进行精确比较。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 8,
    "q": "What is the result of 2 ** 3 ** 2 in Python?",
    "qChinese": "Python中2 ** 3 ** 2的结果是什么？",
    "options": [
      "A) 512",
      "B) 64",
      "C) 36",
      "D) 81"
    ],
    "optionsChinese": [
      "A) 512",
      "B) 64",
      "C) 36",
      "D) 81"
    ],
    "answer": 0,
    "explanation": "The ** operator is right-associative in Python, so 2 ** 3 ** 2 is evaluated as 2 ** (3 ** 2) = 2 ** 9 = 512, not as (2 ** 3) ** 2 = 64. This is one of the few right-associative operators in Python. Understanding operator associativity is crucial for writing correct mathematical expressions.",
    "explanationChinese": "**运算符在Python中是右结合的，因此2 ** 3 ** 2被计算为2 **（3 ** 2）= 2 ** 9 = 512，而不是（2 ** 3）** 2 = 64。这是Python中少数右结合运算符之一。理解运算符结合性对于编写正确的数学表达式至关重要。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 9,
    "q": "What does the walrus operator := do in Python 3.8+?",
    "qChinese": "Python 3.8+中的海象运算符:=做什么？",
    "options": [
      "A) Assigns and returns a value in an expression",
      "B) Compares two values",
      "C) Creates a constant",
      "D) Defines a type alias"
    ],
    "optionsChinese": [
      "A) 在表达式中赋值并返回值",
      "B) 比较两个值",
      "C) 创建常量",
      "D) 定义类型别名"
    ],
    "answer": 0,
    "explanation": "The walrus operator := (assignment expression) assigns a value to a variable as part of an expression. For example: if (n := len(a)) > 10 assigns len(a) to n and checks the condition. Introduced in PEP 572 for Python 3.8, it reduces redundant function calls and makes while loops reading input more concise.",
    "explanationChinese": "海象运算符:=（赋值表达式）在表达式中将值赋给变量。例如：if (n := len(a)) > 10将len(a)赋给n并检查条件。在PEP 572中为Python 3.8引入，它减少了冗余函数调用，使读取输入的while循环更简洁。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 10,
    "q": "What is the output of print(type(None))?",
    "qChinese": "print(type(None))的输出是什么？",
    "options": [
      "A) <class 'NoneType'>",
      "B) <class 'None'>",
      "C) <class 'null'>",
      "D) <class 'void'>"
    ],
    "optionsChinese": [
      "A) <class 'NoneType'>",
      "B) <class 'None'>",
      "C) <class 'null'>",
      "D) <class 'void'>"
    ],
    "answer": 0,
    "explanation": "None is a singleton object of type NoneType. It represents the absence of a value. There is only one None object in Python, so 'is None' is preferred over '== None'. Functions without a return statement implicitly return None. NoneType cannot be subclassed or instantiated to create additional instances.",
    "explanationChinese": "None是NoneType类型的单例对象。它表示没有值。Python中只有一个None对象，因此'is None'优于'== None'。没有return语句的函数隐式返回None。NoneType不能被子类化或实例化来创建额外的实例。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 11,
    "q": "Which of the following is NOT a valid Python variable name?",
    "qChinese": "以下哪个不是有效的Python变量名？",
    "options": [
      "A) _private",
      "B) __dunder__",
      "C) 2nd_value",
      "D) CamelCase"
    ],
    "optionsChinese": [
      "A) _private",
      "B) __dunder__",
      "C) 2nd_value",
      "D) CamelCase"
    ],
    "answer": 2,
    "explanation": "Python variable names cannot start with a digit. 2nd_value is invalid because it begins with '2'. Variable names must start with a letter or underscore, followed by letters, digits, or underscores. _private and __dunder__ are valid naming conventions for private attributes and special methods respectively.",
    "explanationChinese": "Python变量名不能以数字开头。2nd_value无效因为它以'2'开头。变量名必须以字母或下划线开头，后跟字母、数字或下划线。_private和__dunder__分别是私有属性和特殊方法的有效命名约定。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 12,
    "q": "What is the result of 'hello'[1:4]?",
    "qChinese": "'hello'[1:4]的结果是什么？",
    "options": [
      "A) 'ell'",
      "B) 'hel'",
      "C) 'ello'",
      "D) 'hell'"
    ],
    "optionsChinese": [
      "A) 'ell'",
      "B) 'hel'",
      "C) 'ello'",
      "D) 'hell'"
    ],
    "answer": 0,
    "explanation": "Python slicing uses the syntax [start:stop], where start is inclusive and stop is exclusive. 'hello'[1:4] extracts characters at indices 1, 2, 3 which are 'e', 'l', 'l' giving 'ell'. Remember that Python strings are zero-indexed. Slicing never raises IndexError even if indices exceed string length.",
    "explanationChinese": "Python切片使用语法[start:stop]，其中start是包含的，stop是排除的。'hello'[1:4]提取索引1、2、3处的字符，即'e'、'l'、'l'，得到'ell'。记住Python字符串是零索引的。即使索引超出字符串长度，切片也不会引发IndexError。",
    "diagram": "",
    "terms": [
      "slice_notation"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 13,
    "q": "What is the output of print(10 % 3)?",
    "qChinese": "print(10 % 3)的输出是什么？",
    "options": [
      "A) 1",
      "B) 3",
      "C) 3.33",
      "D) 0"
    ],
    "optionsChinese": [
      "A) 1",
      "B) 3",
      "C) 3.33",
      "D) 0"
    ],
    "answer": 0,
    "explanation": "The % operator returns the remainder of division. 10 divided by 3 is 3 with a remainder of 1. In Python, the modulo result always has the same sign as the divisor. So -10 % 3 gives 2 (not -1). This operator is commonly used to check if a number is even/odd or for cyclic operations.",
    "explanationChinese": "%运算符返回除法的余数。10除以3等于3余1。在Python中，模运算结果总是与除数符号相同。因此-10 % 3得到2（不是-1）。此运算符常用于检查数字是否为偶数/奇数或用于循环操作。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 14,
    "q": "Which built-in function converts a string to an integer?",
    "qChinese": "哪个内置函数将字符串转换为整数？",
    "options": [
      "A) str()",
      "B) float()",
      "C) int()",
      "D) num()"
    ],
    "optionsChinese": [
      "A) str()",
      "B) float()",
      "C) int()",
      "D) num()"
    ],
    "answer": 2,
    "explanation": "The int() function converts a string or float to an integer. int('42') returns 42. It can also accept a second argument for the base: int('1010', 2) returns 10 from binary. int() truncates floats toward zero: int(3.9) returns 3, int(-3.9) returns -3. ValueError is raised for invalid strings.",
    "explanationChinese": "int()函数将字符串或浮点数转换为整数。int('42')返回42。它还可以接受第二个参数作为进制：int('1010', 2)从二进制返回10。int()向零截断浮点数：int(3.9)返回3，int(-3.9)返回-3。无效字符串会引发ValueError。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 15,
    "q": "What is the output of print('Python'[-1])?",
    "qChinese": "print('Python'[-1])的输出是什么？",
    "options": [
      "A) 'n'",
      "B) 'P'",
      "C) 'o'",
      "D) Error"
    ],
    "optionsChinese": [
      "A) 'n'",
      "B) 'P'",
      "C) 'o'",
      "D) 错误"
    ],
    "answer": 0,
    "explanation": "Negative indexing in Python starts from -1 for the last element. 'Python'[-1] returns 'n', the last character. -2 would give 'o', -3 gives 'h', and so on. This is a convenient way to access elements from the end without knowing the length. It works on all sequence types: strings, lists, and tuples.",
    "explanationChinese": "Python中负索引从-1开始表示最后一个元素。'Python'[-1]返回'n'，即最后一个字符。-2会给出'o'，-3给出'h'，依此类推。这是一种方便的方式，无需知道长度即可从末尾访问元素。它适用于所有序列类型：字符串、列表和元组。",
    "diagram": "",
    "terms": [
      "slice_notation"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 16,
    "q": "What does the id() function return in Python?",
    "qChinese": "Python中id()函数返回什么？",
    "options": [
      "A) The object's memory address",
      "B) The variable name",
      "C) The object's type",
      "D) The object's hash value"
    ],
    "optionsChinese": [
      "A) 对象的内存地址",
      "B) 变量名",
      "C) 对象的类型",
      "D) 对象的哈希值"
    ],
    "answer": 0,
    "explanation": "The id() function returns the unique identity (memory address in CPython) of an object. Two objects with non-overlapping lifetimes may have the same id. The 'is' operator actually compares id() values. In CPython, id() returns the memory address, but this is an implementation detail not guaranteed by other implementations.",
    "explanationChinese": "id()函数返回对象的唯一标识（在CPython中是内存地址）。生命周期不重叠的两个对象可能具有相同的id。'is'运算符实际上比较id()值。在CPython中，id()返回内存地址，但这是其他实现不保证的实现细节。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 17,
    "q": "What is the result of 'abc' * 3?",
    "qChinese": "'abc' * 3的结果是什么？",
    "options": [
      "A) 'abcabcabc'",
      "B) 'abc3'",
      "C) Error",
      "D) 9"
    ],
    "optionsChinese": [
      "A) 'abcabcabc'",
      "B) 'abc3'",
      "C) 错误",
      "D) 9"
    ],
    "answer": 0,
    "explanation": "The * operator with strings performs repetition. 'abc' * 3 creates 'abcabcabc' by repeating the string three times. This also works with lists: [1,2] * 3 gives [1,2,1,2,1,2]. Note that 'abc' * 0 returns an empty string ''. This is Python's way of implementing sequence repetition via the __mul__ method.",
    "explanationChinese": "*运算符与字符串一起执行重复操作。'abc' * 3通过重复字符串三次创建'abcabcabc'。这也适用于列表：[1,2] * 3得到[1,2,1,2,1,2]。注意'abc' * 0返回空字符串''。这是Python通过__mul__方法实现序列重复的方式。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 18,
    "q": "Which of the following correctly creates a multi-line string?",
    "qChinese": "以下哪个正确创建了多行字符串？",
    "options": [
      "A) 'line1\\nline2'",
      "B) '''line1\\nline2'''",
      "C) Both A and B",
      "D) Neither A nor B"
    ],
    "optionsChinese": [
      "A) 'line1\\nline2'",
      "B) '''line1\\nline2'''",
      "C) A和B都对",
      "D) A和B都不对"
    ],
    "answer": 2,
    "explanation": "Both methods create multi-line strings. Single/double quotes with \\n create a string with a newline character. Triple quotes (''' or \"\"\") allow literal newlines in the source code. Triple-quoted strings are also used for docstrings. Both approaches result in equivalent string objects containing newline characters.",
    "explanationChinese": "两种方法都能创建多行字符串。带\\n的单/双引号创建包含换行符的字符串。三引号（'''或\"\"\"）允许源代码中的字面换行。三引号字符串也用于文档字符串。两种方法都会产生包含换行符的等效字符串对象。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 19,
    "q": "What is the output of print(isinstance(True, int))?",
    "qChinese": "print(isinstance(True, int))的输出是什么？",
    "options": [
      "A) True",
      "B) False",
      "C) Error",
      "D) None"
    ],
    "optionsChinese": [
      "A) True",
      "B) False",
      "C) 错误",
      "D) None"
    ],
    "answer": 0,
    "explanation": "In Python, bool is a subclass of int. True is equivalent to 1 and False to 0. Therefore isinstance(True, int) returns True. You can even do arithmetic: True + True equals 2. This design choice was made in PEP 285 for backward compatibility and to allow booleans in numeric contexts seamlessly.",
    "explanationChinese": "在Python中，bool是int的子类。True等价于1，False等价于0。因此isinstance(True, int)返回True。你甚至可以做算术：True + True等于2。这个设计选择在PEP 285中做出，是为了向后兼容并允许布尔值无缝用于数值上下文。",
    "diagram": "",
    "terms": [
      "class_inheritance"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 20,
    "q": "What is the difference between = and == in Python?",
    "qChinese": "Python中=和==的区别是什么？",
    "options": [
      "A) = assigns, == compares",
      "B) Both compare values",
      "C) = compares, == assigns",
      "D) Both assign values"
    ],
    "optionsChinese": [
      "A) =赋值，==比较",
      "B) 两者都比较值",
      "C) =比较，==赋值",
      "D) 两者都赋值"
    ],
    "answer": 0,
    "explanation": "The single = is the assignment operator, used to assign a value to a variable (x = 5). The double == is the equality operator, used to compare two values (x == 5 returns True or False). Confusing these is a common bug in programming. Python prevents accidental assignment in if statements unlike C.",
    "explanationChinese": "单个=是赋值运算符，用于将值赋给变量（x = 5）。双等号==是相等运算符，用于比较两个值（x == 5返回True或False）。混淆这两者是编程中的常见错误。Python与C不同，防止在if语句中意外赋值。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 21,
    "q": "What does the enumerate() function return?",
    "qChinese": "enumerate()函数返回什么？",
    "options": [
      "A) A list of indices",
      "B) A list of values",
      "C) An iterator of (index, value) tuples",
      "D) A dictionary"
    ],
    "optionsChinese": [
      "A) 索引列表",
      "B) 值列表",
      "C) (索引, 值)元组的迭代器",
      "D) 字典"
    ],
    "answer": 2,
    "explanation": "enumerate() returns an iterator that yields tuples of (index, value) pairs. It takes an optional start parameter: enumerate(items, start=1). This is the Pythonic way to iterate with indices instead of using range(len(items)). The returned object is lazy and memory-efficient for large iterables.",
    "explanationChinese": "enumerate()返回一个产生(索引, 值)对元组的迭代器。它接受可选的start参数：enumerate(items, start=1)。这是Python式的带索引迭代方式，而不是使用range(len(items))。返回的对象是惰性的，对于大型可迭代对象内存效率高。",
    "diagram": "",
    "terms": [
      "generator"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 22,
    "q": "What is the output of print(3 in [1, 2, 3])?",
    "qChinese": "print(3 in [1, 2, 3])的输出是什么？",
    "options": [
      "A) True",
      "B) False",
      "C) 2",
      "D) Error"
    ],
    "optionsChinese": [
      "A) True",
      "B) False",
      "C) 2",
      "D) 错误"
    ],
    "answer": 0,
    "explanation": "The 'in' operator tests membership in a sequence. 3 in [1, 2, 3] returns True because 3 is an element of the list. It works with lists, tuples, strings, sets, and dictionary keys. For dictionaries, 'in' checks keys, not values. Sets and dicts provide O(1) membership testing versus O(n) for lists.",
    "explanationChinese": "'in'运算符测试序列中的成员关系。3 in [1, 2, 3]返回True，因为3是列表的元素。它适用于列表、元组、字符串、集合和字典键。对于字典，'in'检查键而不是值。集合和字典提供O(1)的成员测试，而列表为O(n)。",
    "diagram": "",
    "terms": [
      "dictionary"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 23,
    "q": "Which operator is used for string concatenation in Python?",
    "qChinese": "Python中哪个运算符用于字符串连接？",
    "options": [
      "A) +",
      "B) &",
      "C) .",
      "D) ,"
    ],
    "optionsChinese": [
      "A) +",
      "B) &",
      "C) .",
      "D) ,"
    ],
    "answer": 0,
    "explanation": "The + operator concatenates strings in Python: 'hello' + ' ' + 'world' gives 'hello world'. Unlike some languages, Python does not auto-convert types, so 'age: ' + 42 raises TypeError. Use str() or f-strings for type conversion. For joining many strings, ''.join(list) is more efficient than repeated + concatenation.",
    "explanationChinese": "+运算符在Python中连接字符串：'hello' + ' ' + 'world'得到'hello world'。与某些语言不同，Python不自动转换类型，因此'age: ' + 42会引发TypeError。使用str()或f-string进行类型转换。连接多个字符串时，''.join(list)比重复+连接更高效。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 24,
    "q": "What is the output of print(bin(10))?",
    "qChinese": "print(bin(10))的输出是什么？",
    "options": [
      "A) '0b1010'",
      "B) '1010'",
      "C) 10",
      "D) '0x0a'"
    ],
    "optionsChinese": [
      "A) '0b1010'",
      "B) '1010'",
      "C) 10",
      "D) '0x0a'"
    ],
    "answer": 0,
    "explanation": "The bin() function converts an integer to its binary string representation prefixed with '0b'. bin(10) returns '0b1010'. Similarly, oct() returns octal strings prefixed with '0o', and hex() returns hexadecimal prefixed with '0x'. To get the binary without the prefix, use bin(10)[2:] or format(10, 'b').",
    "explanationChinese": "bin()函数将整数转换为前缀为'0b'的二进制字符串表示。bin(10)返回'0b1010'。类似地，oct()返回前缀为'0o'的八进制字符串，hex()返回前缀为'0x'的十六进制。要获取不带前缀的二进制，使用bin(10)[2:]或format(10, 'b')。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 25,
    "q": "What are Python's bitwise operators?",
    "qChinese": "Python的位运算符有哪些？",
    "options": [
      "A) & | ^ ~ << >>",
      "B) && || ! << >>",
      "C) and or not xor",
      "D) + - * / %"
    ],
    "optionsChinese": [
      "A) & | ^ ~ << >>",
      "B) && || ! << >>",
      "C) and or not xor",
      "D) + - * / %"
    ],
    "answer": 0,
    "explanation": "Python's bitwise operators are & (AND), | (OR), ^ (XOR), ~ (NOT), << (left shift), and >> (right shift). These operate on individual bits of integers. Python uses 'and', 'or', 'not' for logical operations, unlike C/Java which use && || !. Bitwise operators are useful for flags, masks, and low-level operations.",
    "explanationChinese": "Python的位运算符是&（与）、|（或）、^（异或）、~（取反）、<<（左移）和>>（右移）。这些对整数的各个位进行操作。Python使用'and'、'or'、'not'进行逻辑操作，不像C/Java使用&& || !。位运算符对标志、掩码和低级操作很有用。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 26,
    "q": "What is the output of: [x for x in range(5)]?",
    "qChinese": "[x for x in range(5)]的输出是什么？",
    "options": [
      "A) [0, 1, 2, 3, 4]",
      "B) [1, 2, 3, 4, 5]",
      "C) [0, 1, 2, 3, 4, 5]",
      "D) [1, 2, 3, 4]"
    ],
    "optionsChinese": [
      "A) [0, 1, 2, 3, 4]",
      "B) [1, 2, 3, 4, 5]",
      "C) [0, 1, 2, 3, 4, 5]",
      "D) [1, 2, 3, 4]"
    ],
    "answer": 0,
    "explanation": "range(5) generates numbers from 0 to 4 (5 is excluded). The list comprehension [x for x in range(5)] creates the list [0, 1, 2, 3, 4]. Python ranges always start at 0 by default and exclude the stop value. This zero-based, half-open interval convention is consistent throughout Python's design.",
    "explanationChinese": "range(5)生成从0到4的数字（5被排除）。列表推导式[x for x in range(5)]创建列表[0, 1, 2, 3, 4]。Python范围默认总是从0开始，排除停止值。这种从零开始的半开区间约定在Python的设计中是一致的。",
    "diagram": "",
    "terms": [
      "list_comprehension"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 27,
    "q": "How do you write a conditional expression (ternary operator) in Python?",
    "qChinese": "如何在Python中编写条件表达式（三元运算符）？",
    "options": [
      "A) true if condition else false",
      "B) condition ? true : false",
      "C) if condition then true else false",
      "D) condition && true || false"
    ],
    "optionsChinese": [
      "A) true if condition else false",
      "B) condition ? true : false",
      "C) if condition then true else false",
      "D) condition && true || false"
    ],
    "answer": 0,
    "explanation": "Python's ternary operator syntax is: value_if_true if condition else value_if_false. For example: x = 'even' if n % 2 == 0 else 'odd'. Unlike C-style languages that use ? :, Python uses this readable English-like syntax. It can be nested but should be kept simple for readability.",
    "explanationChinese": "Python的三元运算符语法是：condition为真时的值 if condition else condition为假时的值。例如：x = 'even' if n % 2 == 0 else 'odd'。不像使用? :的C风格语言，Python使用这种可读的类英语语法。可以嵌套但应保持简单以提高可读性。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 28,
    "q": "What is the output of: [x**2 for x in range(4) if x % 2 == 0]?",
    "qChinese": "[x**2 for x in range(4) if x % 2 == 0]的输出是什么？",
    "options": [
      "A) [0, 4]",
      "B) [0, 1, 4, 9]",
      "C) [4]",
      "D) [0, 2, 4]"
    ],
    "optionsChinese": [
      "A) [0, 4]",
      "B) [0, 1, 4, 9]",
      "C) [4]",
      "D) [0, 2, 4]"
    ],
    "answer": 0,
    "explanation": "This list comprehension filters even numbers from range(4) which are 0, 1, 2, 3. Even numbers (x % 2 == 0) are 0 and 2. Squaring them gives 0 and 4, so the result is [0, 4]. The if clause acts as a filter, and the expression x**2 transforms each filtered value before adding it to the list.",
    "explanationChinese": "这个列表推导式从range(4)即0、1、2、3中过滤偶数。偶数（x % 2 == 0）是0和2。对它们求平方得到0和4，所以结果是[0, 4]。if子句充当过滤器，表达式x**2在将每个过滤值添加到列表之前进行转换。",
    "diagram": "",
    "terms": [
      "list_comprehension"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 29,
    "q": "What does the 'break' statement do inside a loop?",
    "qChinese": "'break'语句在循环内做什么？",
    "options": [
      "A) Exits the loop entirely",
      "B) Skips current iteration",
      "C) Restarts the loop",
      "D) Pauses the loop"
    ],
    "optionsChinese": [
      "A) 完全退出循环",
      "B) 跳过当前迭代",
      "C) 重新开始循环",
      "D) 暂停循环"
    ],
    "answer": 0,
    "explanation": "The break statement immediately terminates the innermost enclosing loop. Execution continues with the statement after the loop. In contrast, continue skips only the current iteration. When break is used, the else clause of the loop (if any) is NOT executed. Break only affects the immediately enclosing loop in nested loops.",
    "explanationChinese": "break语句立即终止最内层的封闭循环。执行继续循环之后的语句。相比之下，continue仅跳过当前迭代。当使用break时，循环的else子句（如果有）不会被执行。在嵌套循环中，break仅影响直接封闭的循环。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 30,
    "q": "What is the purpose of the 'else' clause in a for loop?",
    "qChinese": "for循环中'else'子句的目的是什么？",
    "options": [
      "A) Runs when the loop completes without break",
      "B) Runs when the loop condition is False",
      "C) Runs on every iteration",
      "D) Runs only if the loop body raises an error"
    ],
    "optionsChinese": [
      "A) 当循环完成且没有break时运行",
      "B) 当循环条件为False时运行",
      "C) 在每次迭代时运行",
      "D) 仅当循环体引发错误时运行"
    ],
    "answer": 0,
    "explanation": "The else clause in a for or while loop executes when the loop completes normally (without encountering a break). If break is triggered, the else block is skipped. This is useful for search patterns: loop through items, break if found, else handle the 'not found' case. It is a unique Python feature not found in most other languages.",
    "explanationChinese": "for或while循环中的else子句在循环正常完成（没有遇到break）时执行。如果触发break，else块被跳过。这对搜索模式很有用：遍历项目，如果找到则break，否则处理'未找到'的情况。这是Python独有的功能，在大多数其他语言中找不到。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 31,
    "q": "What is the output of: {x: x**2 for x in range(3)}?",
    "qChinese": "{x: x**2 for x in range(3)}的输出是什么？",
    "options": [
      "A) {0: 0, 1: 1, 2: 4}",
      "B) {0, 1, 4}",
      "C) [(0,0), (1,1), (2,4)]",
      "D) {1: 1, 2: 4}"
    ],
    "optionsChinese": [
      "A) {0: 0, 1: 1, 2: 4}",
      "B) {0, 1, 4}",
      "C) [(0,0), (1,1), (2,4)]",
      "D) {1: 1, 2: 4}"
    ],
    "answer": 0,
    "explanation": "This is a dictionary comprehension that creates a dict mapping each number to its square. range(3) gives 0, 1, 2. The resulting dictionary is {0: 0, 1: 1, 2: 4}. Dictionary comprehensions use {key: value for ...} syntax. Without the colon, {x**2 for x in range(3)} would create a set comprehension instead.",
    "explanationChinese": "这是一个字典推导式，创建将每个数字映射到其平方的字典。range(3)给出0、1、2。结果字典是{0: 0, 1: 1, 2: 4}。字典推导式使用{key: value for ...}语法。没有冒号时，{x**2 for x in range(3)}会创建集合推导式。",
    "diagram": "",
    "terms": [
      "list_comprehension",
      "dictionary"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 32,
    "q": "What does 'continue' do inside a loop?",
    "qChinese": "'continue'在循环内做什么？",
    "options": [
      "A) Skips to the next iteration",
      "B) Exits the loop",
      "C) Repeats the current iteration",
      "D) Terminates the program"
    ],
    "optionsChinese": [
      "A) 跳到下一次迭代",
      "B) 退出循环",
      "C) 重复当前迭代",
      "D) 终止程序"
    ],
    "answer": 0,
    "explanation": "The continue statement skips the remaining code in the current iteration and jumps to the next iteration of the loop. In a for loop, it moves to the next item. In a while loop, it re-evaluates the condition. Unlike break which exits the loop, continue only skips the rest of the current iteration's body.",
    "explanationChinese": "continue语句跳过当前迭代中剩余的代码并跳转到循环的下一次迭代。在for循环中，它移到下一个项目。在while循环中，它重新评估条件。与退出循环的break不同，continue仅跳过当前迭代体的其余部分。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 33,
    "q": "What is a nested list comprehension: [[j for j in range(3)] for i in range(2)]?",
    "qChinese": "嵌套列表推导式[[j for j in range(3)] for i in range(2)]的结果是什么？",
    "options": [
      "A) [[0, 1, 2], [0, 1, 2]]",
      "B) [0, 1, 2, 0, 1, 2]",
      "C) [[0, 1], [0, 1], [0, 1]]",
      "D) [0, 1, 2]"
    ],
    "optionsChinese": [
      "A) [[0, 1, 2], [0, 1, 2]]",
      "B) [0, 1, 2, 0, 1, 2]",
      "C) [[0, 1], [0, 1], [0, 1]]",
      "D) [0, 1, 2]"
    ],
    "answer": 0,
    "explanation": "The outer comprehension runs 2 times (range(2)), and for each iteration creates an inner list [0, 1, 2] from range(3). The result is a 2D list: [[0, 1, 2], [0, 1, 2]]. Nested comprehensions are read from outer to inner. They are useful for creating matrices but can become hard to read if overly complex.",
    "explanationChinese": "外部推导式运行2次（range(2)），每次迭代从range(3)创建一个内部列表[0, 1, 2]。结果是一个二维列表：[[0, 1, 2], [0, 1, 2]]。嵌套推导式从外到内阅读。它们对创建矩阵很有用，但过于复杂时会变得难以阅读。",
    "diagram": "",
    "terms": [
      "list_comprehension"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 34,
    "q": "What is the output of: list(range(1, 10, 3))?",
    "qChinese": "list(range(1, 10, 3))的输出是什么？",
    "options": [
      "A) [1, 4, 7]",
      "B) [1, 4, 7, 10]",
      "C) [3, 6, 9]",
      "D) [1, 3, 6, 9]"
    ],
    "optionsChinese": [
      "A) [1, 4, 7]",
      "B) [1, 4, 7, 10]",
      "C) [3, 6, 9]",
      "D) [1, 3, 6, 9]"
    ],
    "answer": 0,
    "explanation": "range(1, 10, 3) starts at 1, goes up to (but not including) 10, stepping by 3. This gives 1, 4, 7. The next value would be 10 but it is excluded. The three arguments are start, stop, step. Negative steps allow counting down: range(10, 0, -1) gives 10 down to 1. The stop value is always excluded.",
    "explanationChinese": "range(1, 10, 3)从1开始，到（但不包括）10，步长为3。这给出1、4、7。下一个值将是10但被排除。三个参数是start、stop、step。负步长允许倒数：range(10, 0, -1)从10倒数到1。停止值始终被排除。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 35,
    "q": "Which of the following creates a set comprehension?",
    "qChinese": "以下哪个创建了集合推导式？",
    "options": [
      "A) [x for x in range(5)]",
      "B) (x for x in range(5))",
      "C) {x for x in range(5)}",
      "D) <x for x in range(5)>"
    ],
    "optionsChinese": [
      "A) [x for x in range(5)]",
      "B) (x for x in range(5))",
      "C) {x for x in range(5)}",
      "D) <x for x in range(5)>"
    ],
    "answer": 2,
    "explanation": "Curly braces without key:value syntax create a set comprehension: {x for x in range(5)} produces {0, 1, 2, 3, 4}. Square brackets create list comprehensions. Parentheses create generator expressions, not tuple comprehensions. There is no angle bracket comprehension syntax. Set comprehensions automatically eliminate duplicate values.",
    "explanationChinese": "不带key:value语法的花括号创建集合推导式：{x for x in range(5)}产生{0, 1, 2, 3, 4}。方括号创建列表推导式。圆括号创建生成器表达式，不是元组推导式。没有尖括号推导式语法。集合推导式自动消除重复值。",
    "diagram": "",
    "terms": [
      "list_comprehension"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 36,
    "q": "What does 'pass' do in Python?",
    "qChinese": "Python中'pass'做什么？",
    "options": [
      "A) Exits the function",
      "B) Skips to next iteration",
      "C) Does nothing (placeholder)",
      "D) Raises an error"
    ],
    "optionsChinese": [
      "A) 退出函数",
      "B) 跳到下一次迭代",
      "C) 什么都不做（占位符）",
      "D) 引发错误"
    ],
    "answer": 2,
    "explanation": "The pass statement is a null operation that does nothing. It is used as a placeholder where a statement is syntactically required but no action is needed. Common uses include empty class bodies, empty function stubs, and empty except blocks. It allows you to write skeleton code that can be filled in later.",
    "explanationChinese": "pass语句是一个不做任何事的空操作。它用作语法上需要语句但不需要操作的占位符。常见用途包括空类体、空函数桩和空except块。它允许你编写可以稍后填充的框架代码。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 37,
    "q": "How do you iterate over both index and value of a list?",
    "qChinese": "如何同时迭代列表的索引和值？",
    "options": [
      "A) for i, v in enumerate(list):",
      "B) for i, v in list:",
      "C) for i, v in range(list):",
      "D) for i, v in index(list):"
    ],
    "optionsChinese": [
      "A) for i, v in enumerate(list):",
      "B) for i, v in list:",
      "C) for i, v in range(list):",
      "D) for i, v in index(list):"
    ],
    "answer": 0,
    "explanation": "enumerate() is the Pythonic way to get both index and value during iteration. It returns (index, element) tuples that can be unpacked: for i, v in enumerate(my_list). This is preferred over for i in range(len(my_list)) with my_list[i]. The optional start parameter changes the starting index number.",
    "explanationChinese": "enumerate()是在迭代期间同时获取索引和值的Python式方法。它返回可以解包的(索引, 元素)元组：for i, v in enumerate(my_list)。这优于for i in range(len(my_list))配合my_list[i]。可选的start参数改变起始索引号。",
    "diagram": "",
    "terms": [
      "generator"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 38,
    "q": "What is the output of: [i for i in range(10) if i % 2 != 0]?",
    "qChinese": "[i for i in range(10) if i % 2 != 0]的输出是什么？",
    "options": [
      "A) [1, 3, 5, 7, 9]",
      "B) [0, 2, 4, 6, 8]",
      "C) [1, 2, 3, 4, 5]",
      "D) [2, 4, 6, 8, 10]"
    ],
    "optionsChinese": [
      "A) [1, 3, 5, 7, 9]",
      "B) [0, 2, 4, 6, 8]",
      "C) [1, 2, 3, 4, 5]",
      "D) [2, 4, 6, 8, 10]"
    ],
    "answer": 0,
    "explanation": "This list comprehension filters odd numbers from range(10). The condition i % 2 != 0 selects values where the remainder when divided by 2 is not zero, i.e., odd numbers. From 0-9, the odd numbers are 1, 3, 5, 7, 9. List comprehensions with filters are a concise alternative to filter() with lambda functions.",
    "explanationChinese": "这个列表推导式从range(10)中过滤奇数。条件i % 2 != 0选择除以2余数不为零的值，即奇数。从0-9中，奇数是1、3、5、7、9。带过滤器的列表推导式是filter()与lambda函数的简洁替代方案。",
    "diagram": "",
    "terms": [
      "list_comprehension"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 39,
    "q": "What is the difference between while and for loops in Python?",
    "qChinese": "Python中while循环和for循环的区别是什么？",
    "options": [
      "A) for iterates over sequences, while uses conditions",
      "B) while iterates over sequences, for uses conditions",
      "C) They are identical",
      "D) while is faster than for"
    ],
    "optionsChinese": [
      "A) for迭代序列，while使用条件",
      "B) while迭代序列，for使用条件",
      "C) 它们相同",
      "D) while比for快"
    ],
    "answer": 0,
    "explanation": "For loops iterate over items in a sequence (list, string, range, etc.), while while loops continue executing as long as a condition is True. For loops are preferred when the number of iterations is known or when iterating over collections. While loops are used for indefinite iteration where the termination condition depends on runtime logic.",
    "explanationChinese": "for循环迭代序列中的项目（列表、字符串、范围等），而while循环在条件为True时继续执行。当迭代次数已知或迭代集合时，优先使用for循环。while循环用于终止条件取决于运行时逻辑的不确定迭代。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 40,
    "q": "What does zip() do in Python?",
    "qChinese": "Python中zip()做什么？",
    "options": [
      "A) Combines iterables element-wise into tuples",
      "B) Compresses files",
      "C) Sorts two lists",
      "D) Merges two dictionaries"
    ],
    "optionsChinese": [
      "A) 将可迭代对象按元素组合成元组",
      "B) 压缩文件",
      "C) 对两个列表排序",
      "D) 合并两个字典"
    ],
    "answer": 0,
    "explanation": "zip() takes multiple iterables and returns an iterator of tuples, pairing elements at the same index. zip([1,2], ['a','b']) gives [(1,'a'), (2,'b')]. It stops at the shortest iterable. Use itertools.zip_longest() to continue until the longest. zip() is commonly used for parallel iteration and creating dictionaries from two lists.",
    "explanationChinese": "zip()接受多个可迭代对象并返回元组迭代器，将相同索引的元素配对。zip([1,2], ['a','b'])给出[(1,'a'), (2,'b')]。它在最短的可迭代对象处停止。使用itertools.zip_longest()继续直到最长的。zip()常用于并行迭代和从两个列表创建字典。",
    "diagram": "",
    "terms": [
      "generator"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 41,
    "q": "What is the output of: any([0, '', None, 5])?",
    "qChinese": "any([0, '', None, 5])的输出是什么？",
    "options": [
      "A) True",
      "B) False",
      "C) 5",
      "D) None"
    ],
    "optionsChinese": [
      "A) True",
      "B) False",
      "C) 5",
      "D) None"
    ],
    "answer": 0,
    "explanation": "any() returns True if at least one element in the iterable is truthy. In [0, '', None, 5], the value 5 is truthy, so any() returns True. Conversely, all() returns True only if ALL elements are truthy. Both any() and all() short-circuit: any() stops at the first truthy value, all() stops at the first falsy value.",
    "explanationChinese": "any()如果可迭代对象中至少有一个元素为真值则返回True。在[0, '', None, 5]中，值5是真值，所以any()返回True。相反，all()仅当所有元素都为真值时返回True。any()和all()都会短路：any()在第一个真值处停止，all()在第一个假值处停止。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 42,
    "q": "How do you unpack a list into variables in Python?",
    "qChinese": "如何在Python中将列表解包到变量中？",
    "options": [
      "A) a, b, c = [1, 2, 3]",
      "B) [a, b, c] := [1, 2, 3]",
      "C) unpack(a, b, c, [1, 2, 3])",
      "D) a & b & c = [1, 2, 3]"
    ],
    "optionsChinese": [
      "A) a, b, c = [1, 2, 3]",
      "B) [a, b, c] := [1, 2, 3]",
      "C) unpack(a, b, c, [1, 2, 3])",
      "D) a & b & c = [1, 2, 3]"
    ],
    "answer": 0,
    "explanation": "Python supports tuple unpacking (also works with lists): a, b, c = [1, 2, 3] assigns a=1, b=2, c=3. The number of variables must match the number of elements unless using the star operator: a, *b = [1, 2, 3] gives a=1, b=[2, 3]. This feature is called iterable unpacking and works with any iterable.",
    "explanationChinese": "Python支持元组解包（也适用于列表）：a, b, c = [1, 2, 3]赋值a=1, b=2, c=3。变量数量必须与元素数量匹配，除非使用星号运算符：a, *b = [1, 2, 3]给出a=1, b=[2, 3]。这个特性称为可迭代解包，适用于任何可迭代对象。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 43,
    "q": "What does the 'match' statement do in Python 3.10+?",
    "qChinese": "Python 3.10+中的'match'语句做什么？",
    "options": [
      "A) Structural pattern matching",
      "B) Regular expression matching",
      "C) String comparison",
      "D) Type checking"
    ],
    "optionsChinese": [
      "A) 结构化模式匹配",
      "B) 正则表达式匹配",
      "C) 字符串比较",
      "D) 类型检查"
    ],
    "answer": 0,
    "explanation": "Python 3.10 introduced structural pattern matching with match/case statements (PEP 634). It goes beyond simple switch/case by matching against patterns including sequences, mappings, classes, and wildcards. For example: match command: case 'quit': ... case ['go', direction]: ... The underscore _ serves as a wildcard catch-all pattern.",
    "explanationChinese": "Python 3.10引入了match/case语句的结构化模式匹配（PEP 634）。它超越了简单的switch/case，可以匹配包括序列、映射、类和通配符在内的模式。例如：match command: case 'quit': ... case ['go', direction]: ...下划线_充当通配符捕获所有模式。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 44,
    "q": "What is the output of: sum(x for x in range(1, 4))?",
    "qChinese": "sum(x for x in range(1, 4))的输出是什么？",
    "options": [
      "A) 6",
      "B) 10",
      "C) 3",
      "D) 7"
    ],
    "optionsChinese": [
      "A) 6",
      "B) 10",
      "C) 3",
      "D) 7"
    ],
    "answer": 0,
    "explanation": "This uses a generator expression inside sum(). range(1, 4) produces 1, 2, 3. Their sum is 1 + 2 + 3 = 6. Generator expressions in function calls do not need extra parentheses. The generator is memory-efficient as it produces values one at a time rather than creating an entire list. sum() also accepts an optional start value.",
    "explanationChinese": "这在sum()内使用了生成器表达式。range(1, 4)产生1、2、3。它们的和是1 + 2 + 3 = 6。函数调用中的生成器表达式不需要额外的括号。生成器内存效率高，因为它一次产生一个值而不是创建整个列表。sum()还接受可选的起始值。",
    "diagram": "",
    "terms": [
      "generator",
      "list_comprehension"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 45,
    "q": "How do you write an infinite loop in Python?",
    "qChinese": "如何在Python中编写无限循环？",
    "options": [
      "A) while True:",
      "B) for(;;):",
      "C) loop:",
      "D) repeat:"
    ],
    "optionsChinese": [
      "A) while True:",
      "B) for(;;):",
      "C) loop:",
      "D) repeat:"
    ],
    "answer": 0,
    "explanation": "while True: creates an infinite loop because the condition True never becomes False. Use break to exit the loop based on a condition inside. This pattern is common for menu-driven programs, server loops, and event listeners. Python does not have for(;;) like C or a dedicated loop keyword for infinite loops.",
    "explanationChinese": "while True:创建无限循环，因为条件True永远不会变成False。使用break根据内部条件退出循环。这种模式常用于菜单驱动程序、服务器循环和事件监听器。Python没有像C那样的for(;;)或专用的无限循环关键字。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 46,
    "q": "What is the result of: {k: v for k, v in zip('abc', [1,2,3])}?",
    "qChinese": "{k: v for k, v in zip('abc', [1,2,3])}的结果是什么？",
    "options": [
      "A) {'a': 1, 'b': 2, 'c': 3}",
      "B) {'abc': [1,2,3]}",
      "C) [('a',1), ('b',2), ('c',3)]",
      "D) {'a','b','c': 1,2,3}"
    ],
    "optionsChinese": [
      "A) {'a': 1, 'b': 2, 'c': 3}",
      "B) {'abc': [1,2,3]}",
      "C) [('a',1), ('b',2), ('c',3)]",
      "D) {'a','b','c': 1,2,3}"
    ],
    "answer": 0,
    "explanation": "This combines zip() with a dictionary comprehension. zip('abc', [1,2,3]) pairs each character with a number: ('a',1), ('b',2), ('c',3). The dict comprehension creates key-value pairs from these tuples, resulting in {'a': 1, 'b': 2, 'c': 3}. Alternatively, dict(zip('abc', [1,2,3])) achieves the same result more concisely.",
    "explanationChinese": "这将zip()与字典推导式结合。zip('abc', [1,2,3])将每个字符与数字配对：('a',1), ('b',2), ('c',3)。字典推导式从这些元组创建键值对，结果为{'a': 1, 'b': 2, 'c': 3}。或者，dict(zip('abc', [1,2,3]))可以更简洁地实现相同结果。",
    "diagram": "",
    "terms": [
      "list_comprehension",
      "dictionary"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 47,
    "q": "What happens when you nest if statements inside a list comprehension?",
    "qChinese": "在列表推导式中嵌套if语句会发生什么？",
    "options": [
      "A) Multiple filters are applied with AND logic",
      "B) SyntaxError",
      "C) Only the last if is used",
      "D) Multiple lists are created"
    ],
    "optionsChinese": [
      "A) 多个过滤器以AND逻辑应用",
      "B) SyntaxError",
      "C) 只使用最后一个if",
      "D) 创建多个列表"
    ],
    "answer": 0,
    "explanation": "Multiple if clauses in a list comprehension act as combined AND conditions. [x for x in range(20) if x % 2 == 0 if x % 3 == 0] gives numbers divisible by both 2 AND 3: [0, 6, 12, 18]. This is equivalent to using 'and' in a single condition but can improve readability for complex independent filters.",
    "explanationChinese": "列表推导式中的多个if子句作为组合的AND条件。[x for x in range(20) if x % 2 == 0 if x % 3 == 0]给出同时能被2和3整除的数：[0, 6, 12, 18]。这等同于在单个条件中使用'and'，但对于复杂的独立过滤器可以提高可读性。",
    "diagram": "",
    "terms": [
      "list_comprehension"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 48,
    "q": "What is the output of: list(map(str, [1, 2, 3]))?",
    "qChinese": "list(map(str, [1, 2, 3]))的输出是什么？",
    "options": [
      "A) ['1', '2', '3']",
      "B) [1, 2, 3]",
      "C) '123'",
      "D) ['123']"
    ],
    "optionsChinese": [
      "A) ['1', '2', '3']",
      "B) [1, 2, 3]",
      "C) '123'",
      "D) ['123']"
    ],
    "answer": 0,
    "explanation": "map() applies a function to every item in an iterable. map(str, [1, 2, 3]) converts each integer to a string, returning a map object. Wrapping with list() gives ['1', '2', '3']. The equivalent list comprehension is [str(x) for x in [1, 2, 3]]. map() returns a lazy iterator and can accept multiple iterables for multi-argument functions.",
    "explanationChinese": "map()将函数应用于可迭代对象中的每个项目。map(str, [1, 2, 3])将每个整数转换为字符串，返回map对象。用list()包装得到['1', '2', '3']。等效的列表推导式是[str(x) for x in [1, 2, 3]]。map()返回惰性迭代器，可以接受多个可迭代对象用于多参数函数。",
    "diagram": "",
    "terms": [
      "lambda_function"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 49,
    "q": "What is the output of: list(filter(lambda x: x > 3, [1, 2, 3, 4, 5]))?",
    "qChinese": "list(filter(lambda x: x > 3, [1, 2, 3, 4, 5]))的输出是什么？",
    "options": [
      "A) [4, 5]",
      "B) [1, 2, 3]",
      "C) [3, 4, 5]",
      "D) [True, True]"
    ],
    "optionsChinese": [
      "A) [4, 5]",
      "B) [1, 2, 3]",
      "C) [3, 4, 5]",
      "D) [True, True]"
    ],
    "answer": 0,
    "explanation": "filter() returns elements for which the function returns True. The lambda checks if x > 3, so only 4 and 5 pass. filter(None, iterable) removes falsy values. The equivalent list comprehension is [x for x in [1,2,3,4,5] if x > 3]. Like map(), filter() returns a lazy iterator that must be consumed with list() or iteration.",
    "explanationChinese": "filter()返回函数返回True的元素。lambda检查x > 3，所以只有4和5通过。filter(None, iterable)删除假值。等效的列表推导式是[x for x in [1,2,3,4,5] if x > 3]。像map()一样，filter()返回惰性迭代器，必须用list()或迭代来消费。",
    "diagram": "",
    "terms": [
      "lambda_function",
      "list_comprehension"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 50,
    "q": "What does the 'elif' keyword stand for in Python?",
    "qChinese": "Python中'elif'关键字代表什么？",
    "options": [
      "A) else if",
      "B) else loop if",
      "C) element if",
      "D) eliminate if"
    ],
    "optionsChinese": [
      "A) else if",
      "B) else loop if",
      "C) element if",
      "D) eliminate if"
    ],
    "answer": 0,
    "explanation": "elif is short for 'else if' and provides additional conditions to check after the initial if. Python uses elif instead of 'else if' to avoid excessive indentation. You can have multiple elif blocks but only one if and one optional else. The conditions are checked top-to-bottom, and only the first matching block executes.",
    "explanationChinese": "elif是'else if'的缩写，在初始if之后提供额外的条件检查。Python使用elif而不是'else if'以避免过度缩进。你可以有多个elif块但只能有一个if和一个可选的else。条件从上到下检查，只有第一个匹配的块执行。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 51,
    "q": "What is the correct syntax to define a function in Python?",
    "qChinese": "在Python中定义函数的正确语法是什么？",
    "options": [
      "A) def myFunc():",
      "B) function myFunc():",
      "C) func myFunc():",
      "D) define myFunc():"
    ],
    "optionsChinese": [
      "A) def myFunc():",
      "B) function myFunc():",
      "C) func myFunc():",
      "D) define myFunc():"
    ],
    "answer": 0,
    "explanation": "Python uses the 'def' keyword to define functions, followed by the function name, parentheses with optional parameters, and a colon. The function body is indented. Unlike JavaScript's 'function' keyword, Python uses the shorter 'def'. Functions are first-class objects in Python and can be assigned to variables, passed as arguments, or returned from other functions.",
    "explanationChinese": "Python使用'def'关键字定义函数，后跟函数名、带可选参数的括号和冒号。函数体是缩进的。与JavaScript的'function'关键字不同，Python使用更短的'def'。函数在Python中是一等对象，可以赋值给变量、作为参数传递或从其他函数返回。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 52,
    "q": "What is the output of: (lambda x, y: x + y)(3, 4)?",
    "qChinese": "(lambda x, y: x + y)(3, 4)的输出是什么？",
    "options": [
      "A) 7",
      "B) 34",
      "C) Error",
      "D) lambda"
    ],
    "optionsChinese": [
      "A) 7",
      "B) 34",
      "C) 错误",
      "D) lambda"
    ],
    "answer": 0,
    "explanation": "This creates an anonymous lambda function that adds two arguments and immediately calls it with 3 and 4. The result is 3 + 4 = 7. Lambda functions are limited to single expressions. The equivalent def would be: def add(x, y): return x + y. Immediately invoked lambdas are useful in functional programming patterns.",
    "explanationChinese": "这创建了一个将两个参数相加的匿名lambda函数并立即用3和4调用它。结果是3 + 4 = 7。Lambda函数限于单个表达式。等效的def是：def add(x, y): return x + y。立即调用的lambda在函数式编程模式中很有用。",
    "diagram": "",
    "terms": [
      "lambda_function"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 53,
    "q": "What is the purpose of *args in a function definition?",
    "qChinese": "函数定义中*args的用途是什么？",
    "options": [
      "A) Accepts variable number of positional arguments",
      "B) Defines required arguments",
      "C) Accepts keyword arguments",
      "D) Creates a pointer to arguments"
    ],
    "optionsChinese": [
      "A) 接受可变数量的位置参数",
      "B) 定义必需参数",
      "C) 接受关键字参数",
      "D) 创建参数指针"
    ],
    "answer": 0,
    "explanation": "*args collects extra positional arguments into a tuple. def func(*args) can accept any number of positional arguments. Inside the function, args is a tuple. For example, func(1, 2, 3) makes args = (1, 2, 3). The name 'args' is convention; any name works after the asterisk. *args must come before **kwargs in parameters.",
    "explanationChinese": "*args将额外的位置参数收集到元组中。def func(*args)可以接受任意数量的位置参数。在函数内部，args是一个元组。例如，func(1, 2, 3)使args = (1, 2, 3)。'args'这个名称是约定；星号后面可以使用任何名称。*args必须在参数中位于**kwargs之前。",
    "diagram": "",
    "terms": [
      "args_kwargs"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 54,
    "q": "What is the purpose of **kwargs in a function definition?",
    "qChinese": "函数定义中**kwargs的用途是什么？",
    "options": [
      "A) Accepts positional arguments",
      "B) Creates keyword constants",
      "C) Accepts variable number of keyword arguments",
      "D) Defines default values"
    ],
    "optionsChinese": [
      "A) 接受位置参数",
      "B) 创建关键字常量",
      "C) 接受可变数量的关键字参数",
      "D) 定义默认值"
    ],
    "answer": 2,
    "explanation": "**kwargs collects extra keyword arguments into a dictionary. def func(**kwargs) accepts any number of keyword arguments. Inside the function, kwargs is a dict. func(name='Alice', age=30) makes kwargs = {'name': 'Alice', 'age': 30}. The name 'kwargs' is convention. Combined with *args, a function can accept any combination of arguments.",
    "explanationChinese": "**kwargs将额外的关键字参数收集到字典中。def func(**kwargs)接受任意数量的关键字参数。在函数内部，kwargs是一个字典。func(name='Alice', age=30)使kwargs = {'name': 'Alice', 'age': 30}。'kwargs'是约定名称。结合*args，函数可以接受任何参数组合。",
    "diagram": "",
    "terms": [
      "args_kwargs",
      "dictionary"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 55,
    "q": "What is a closure in Python?",
    "qChinese": "Python中的闭包是什么？",
    "options": [
      "A) A nested function that remembers the enclosing scope",
      "B) A function that closes files",
      "C) A class method",
      "D) A function that cannot be called"
    ],
    "optionsChinese": [
      "A) 记住封闭作用域的嵌套函数",
      "B) 关闭文件的函数",
      "C) 类方法",
      "D) 不能被调用的函数"
    ],
    "answer": 0,
    "explanation": "A closure is a nested function that captures and remembers variables from its enclosing scope even after the outer function has finished. For example: def outer(x): def inner(y): return x + y; return inner. Calling outer(10) returns a function that always adds 10. Closures enable data encapsulation and are the foundation of decorators.",
    "explanationChinese": "闭包是一个嵌套函数，即使在外部函数完成后也能捕获和记住其封闭作用域中的变量。例如：def outer(x): def inner(y): return x + y; return inner。调用outer(10)返回一个总是加10的函数。闭包实现了数据封装，是装饰器的基础。",
    "diagram": "",
    "terms": [
      "decorator"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 56,
    "q": "What is the output of a function without a return statement?",
    "qChinese": "没有return语句的函数的输出是什么？",
    "options": [
      "A) 0",
      "B) Empty string",
      "C) None",
      "D) Error"
    ],
    "optionsChinese": [
      "A) 0",
      "B) 空字符串",
      "C) None",
      "D) 错误"
    ],
    "answer": 2,
    "explanation": "A Python function without an explicit return statement implicitly returns None. Similarly, a bare 'return' with no value also returns None. This is consistent with Python's design philosophy. You can verify this: result = print('hello') assigns None to result because print() itself returns None. Always check return values in debugging.",
    "explanationChinese": "没有显式return语句的Python函数隐式返回None。同样，不带值的裸'return'也返回None。这与Python的设计哲学一致。你可以验证：result = print('hello')将None赋给result，因为print()本身返回None。调试时总是检查返回值。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 57,
    "q": "What is the correct way to write a decorator in Python?",
    "qChinese": "在Python中编写装饰器的正确方式是什么？",
    "options": [
      "A) @decorator before function definition",
      "B) @decorator before class only",
      "C) decorator() after function definition",
      "D) #decorator before function"
    ],
    "optionsChinese": [
      "A) @decorator在函数定义之前",
      "B) @decorator仅在类之前",
      "C) decorator()在函数定义之后",
      "D) #decorator在函数之前"
    ],
    "answer": 0,
    "explanation": "Decorators use the @decorator_name syntax placed on the line before a function definition. @my_decorator followed by def func(): is equivalent to func = my_decorator(func). Decorators can be applied to both functions and classes. Multiple decorators can be stacked, with the bottommost applied first. Use functools.wraps to preserve metadata.",
    "explanationChinese": "装饰器使用@decorator_name语法放在函数定义之前的行上。@my_decorator后跟def func():等同于func = my_decorator(func)。装饰器可以应用于函数和类。多个装饰器可以堆叠，最底部的先应用。使用functools.wraps保留元数据。",
    "diagram": "",
    "terms": [
      "decorator"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 58,
    "q": "What is the difference between a parameter and an argument?",
    "qChinese": "参数(parameter)和实参(argument)的区别是什么？",
    "options": [
      "A) They are the same thing",
      "B) Arguments are in definition, parameters in calls",
      "C) Parameters are in definition, arguments are in calls",
      "D) Parameters are for classes only"
    ],
    "optionsChinese": [
      "A) 它们是同一件事",
      "B) 实参在定义中，参数在调用中",
      "C) 参数在定义中，实参在调用中",
      "D) 参数仅用于类"
    ],
    "answer": 2,
    "explanation": "Parameters are variables listed in the function definition: def greet(name). Arguments are the actual values passed during the function call: greet('Alice'). Here 'name' is the parameter and 'Alice' is the argument. Python supports positional, keyword, default, and variable-length parameters (*args, **kwargs) for flexible function signatures.",
    "explanationChinese": "参数(parameter)是函数定义中列出的变量：def greet(name)。实参(argument)是函数调用时传递的实际值：greet('Alice')。这里'name'是参数，'Alice'是实参。Python支持位置、关键字、默认和可变长度参数（*args, **kwargs）以实现灵活的函数签名。",
    "diagram": "",
    "terms": [
      "args_kwargs"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 59,
    "q": "What is the output of: def f(a, b=2): return a * b; f(3)?",
    "qChinese": "def f(a, b=2): return a * b; f(3)的输出是什么？",
    "options": [
      "A) 3",
      "B) Error",
      "C) 6",
      "D) 5"
    ],
    "optionsChinese": [
      "A) 3",
      "B) 错误",
      "C) 6",
      "D) 5"
    ],
    "answer": 2,
    "explanation": "The function f has a default parameter b=2. When called with f(3), a=3 and b uses its default value 2. So 3 * 2 = 6. Default parameters are evaluated once at function definition time, not at each call. This is important: mutable defaults like lists can cause bugs because they are shared across calls.",
    "explanationChinese": "函数f有一个默认参数b=2。用f(3)调用时，a=3，b使用其默认值2。所以3 * 2 = 6。默认参数在函数定义时评估一次，而不是在每次调用时。这很重要：像列表这样的可变默认值可能导致错误，因为它们在调用之间共享。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 60,
    "q": "Why is using a mutable default argument dangerous?",
    "qChinese": "为什么使用可变默认参数是危险的？",
    "options": [
      "A) It causes SyntaxError",
      "B) It makes the function slower",
      "C) It is shared across all calls",
      "D) It prevents garbage collection"
    ],
    "optionsChinese": [
      "A) 它导致SyntaxError",
      "B) 它使函数更慢",
      "C) 它在所有调用之间共享",
      "D) 它阻止垃圾回收"
    ],
    "answer": 2,
    "explanation": "Mutable default arguments (like lists or dicts) are created once at function definition and shared across all calls. def f(lst=[]): lst.append(1); return lst will accumulate values: f() returns [1], then [1,1], etc. The fix is to use None as default: def f(lst=None): lst = lst or []. This is a classic Python gotcha.",
    "explanationChinese": "可变默认参数（如列表或字典）在函数定义时创建一次，并在所有调用之间共享。def f(lst=[]): lst.append(1); return lst会累积值：f()返回[1]，然后[1,1]等。修复方法是使用None作为默认值：def f(lst=None): lst = lst or []。这是一个经典的Python陷阱。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 61,
    "q": "What does the 'global' keyword do inside a function?",
    "qChinese": "'global'关键字在函数内做什么？",
    "options": [
      "A) Creates a new global variable type",
      "B) Imports global modules",
      "C) Allows modifying a global variable inside a function",
      "D) Makes the function accessible globally"
    ],
    "optionsChinese": [
      "A) 创建新的全局变量类型",
      "B) 导入全局模块",
      "C) 允许在函数内修改全局变量",
      "D) 使函数全局可访问"
    ],
    "answer": 2,
    "explanation": "The 'global' keyword declares that a variable inside a function refers to the global scope variable. Without it, assigning to a variable creates a local variable. global x tells Python that x refers to the module-level variable. Overuse of global is discouraged as it makes code harder to debug. The 'nonlocal' keyword serves a similar purpose for enclosing scopes.",
    "explanationChinese": "'global'关键字声明函数内的变量引用全局作用域变量。没有它，对变量赋值会创建局部变量。global x告诉Python x引用模块级变量。过度使用global不被鼓励，因为它使代码更难调试。'nonlocal'关键字对封闭作用域起类似作用。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 62,
    "q": "What does the 'nonlocal' keyword do?",
    "qChinese": "'nonlocal'关键字做什么？",
    "options": [
      "A) Declares a variable as not local to the machine",
      "B) Creates a constant",
      "C) Refers to a variable in the nearest enclosing scope",
      "D) Deletes a local variable"
    ],
    "optionsChinese": [
      "A) 声明变量不在本机上",
      "B) 创建常量",
      "C) 引用最近封闭作用域中的变量",
      "D) 删除局部变量"
    ],
    "answer": 2,
    "explanation": "The 'nonlocal' keyword allows a nested function to modify a variable in its enclosing (non-global) scope. Without nonlocal, the inner function would create a new local variable. This is essential for closures that need to update state. nonlocal was introduced in Python 3 and only works for enclosing function scopes, not global scope.",
    "explanationChinese": "'nonlocal'关键字允许嵌套函数修改其封闭（非全局）作用域中的变量。没有nonlocal，内部函数会创建新的局部变量。这对需要更新状态的闭包至关重要。nonlocal在Python 3中引入，仅适用于封闭函数作用域，不适用于全局作用域。",
    "diagram": "",
    "terms": [
      "decorator"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 63,
    "q": "What is a recursive function?",
    "qChinese": "什么是递归函数？",
    "options": [
      "A) A function that runs in a loop",
      "B) A function with multiple returns",
      "C) A function that calls itself",
      "D) A function inside a class"
    ],
    "optionsChinese": [
      "A) 在循环中运行的函数",
      "B) 有多个返回值的函数",
      "C) 调用自身的函数",
      "D) 类内的函数"
    ],
    "answer": 2,
    "explanation": "A recursive function calls itself to solve smaller subproblems. It must have a base case to prevent infinite recursion. Example: factorial(n) = n * factorial(n-1) with base case factorial(0) = 1. Python has a default recursion limit of 1000 (changeable via sys.setrecursionlimit). Tail recursion is not optimized in Python.",
    "explanationChinese": "递归函数调用自身来解决更小的子问题。它必须有一个基本情况来防止无限递归。例如：factorial(n) = n * factorial(n-1)，基本情况factorial(0) = 1。Python的默认递归限制为1000（可通过sys.setrecursionlimit更改）。Python不优化尾递归。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 64,
    "q": "What does functools.wraps do in a decorator?",
    "qChinese": "functools.wraps在装饰器中做什么？",
    "options": [
      "A) Makes the decorator faster",
      "B) Adds error handling",
      "C) Preserves the original function's metadata",
      "D) Enables async support"
    ],
    "optionsChinese": [
      "A) 使装饰器更快",
      "B) 添加错误处理",
      "C) 保留原始函数的元数据",
      "D) 启用异步支持"
    ],
    "answer": 2,
    "explanation": "functools.wraps copies the original function's attributes (__name__, __doc__, __module__, etc.) to the wrapper function. Without it, the decorated function loses its original name and docstring, making debugging harder. Usage: @functools.wraps(func) before the wrapper function definition inside the decorator. It is considered a best practice for all decorators.",
    "explanationChinese": "functools.wraps将原始函数的属性（__name__、__doc__、__module__等）复制到包装函数。没有它，被装饰的函数会丢失其原始名称和文档字符串，使调试更困难。用法：在装饰器内的包装函数定义之前加@functools.wraps(func)。这被认为是所有装饰器的最佳实践。",
    "diagram": "",
    "terms": [
      "decorator"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 65,
    "q": "What is the order of parameter types in a function definition?",
    "qChinese": "函数定义中参数类型的顺序是什么？",
    "options": [
      "A) **kwargs, *args, default, positional",
      "B) *args, positional, **kwargs, default",
      "C) positional, default, *args, **kwargs",
      "D) default, positional, *args, **kwargs"
    ],
    "optionsChinese": [
      "A) **kwargs, *args, 默认, 位置",
      "B) *args, 位置, **kwargs, 默认",
      "C) 位置, 默认, *args, **kwargs",
      "D) 默认, 位置, *args, **kwargs"
    ],
    "answer": 2,
    "explanation": "Python requires parameters in this order: regular positional, then default values, then *args, then keyword-only parameters, then **kwargs. For example: def func(a, b=10, *args, key=True, **kwargs). Keyword-only parameters come after *args. Violating this order causes a SyntaxError. This ordering ensures unambiguous argument binding.",
    "explanationChinese": "Python要求参数按此顺序：常规位置参数、然后是默认值、然后是*args、然后是仅关键字参数、然后是**kwargs。例如：def func(a, b=10, *args, key=True, **kwargs)。仅关键字参数在*args之后。违反此顺序会导致SyntaxError。此排序确保无歧义的参数绑定。",
    "diagram": "",
    "terms": [
      "args_kwargs"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 66,
    "q": "What is a higher-order function?",
    "qChinese": "什么是高阶函数？",
    "options": [
      "A) A function defined in a higher scope",
      "B) A function with many parameters",
      "C) A function that takes or returns another function",
      "D) A function in a superclass"
    ],
    "optionsChinese": [
      "A) 在更高作用域中定义的函数",
      "B) 有很多参数的函数",
      "C) 接受或返回另一个函数的函数",
      "D) 超类中的函数"
    ],
    "answer": 2,
    "explanation": "A higher-order function either takes one or more functions as arguments or returns a function. Python built-ins like map(), filter(), sorted() (with key=), and functools.reduce() are higher-order functions. Decorators are also higher-order functions. This concept comes from functional programming and enables powerful abstractions and code reuse.",
    "explanationChinese": "高阶函数要么接受一个或多个函数作为参数，要么返回一个函数。Python内置的map()、filter()、sorted()（带key=）和functools.reduce()都是高阶函数。装饰器也是高阶函数。这个概念来自函数式编程，能实现强大的抽象和代码重用。",
    "diagram": "",
    "terms": [
      "decorator",
      "lambda_function"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 67,
    "q": "What does sorted(lst, key=lambda x: x[1]) do?",
    "qChinese": "sorted(lst, key=lambda x: x[1])做什么？",
    "options": [
      "A) Sorts by the first element",
      "B) Reverses the list",
      "C) Sorts by the second element",
      "D) Removes duplicates"
    ],
    "optionsChinese": [
      "A) 按第一个元素排序",
      "B) 反转列表",
      "C) 按第二个元素排序",
      "D) 删除重复项"
    ],
    "answer": 2,
    "explanation": "sorted() with a key function sorts based on the value returned by that function. lambda x: x[1] extracts the element at index 1 (second element). So for a list of tuples like [(1,'b'), (2,'a')], it sorts by the second element, giving [(2,'a'), (1,'b')]. The key function is called once per element and the results determine sort order.",
    "explanationChinese": "带key函数的sorted()根据该函数返回的值排序。lambda x: x[1]提取索引1处的元素（第二个元素）。对于元组列表如[(1,'b'), (2,'a')]，它按第二个元素排序，得到[(2,'a'), (1,'b')]。key函数对每个元素调用一次，结果决定排序顺序。",
    "diagram": "",
    "terms": [
      "lambda_function"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 68,
    "q": "What is a decorator with arguments?",
    "qChinese": "带参数的装饰器是什么？",
    "options": [
      "A) A decorator that modifies arguments",
      "B) A decorator with default parameters",
      "C) A function returning a decorator (triple nesting)",
      "D) A decorator applied to arguments"
    ],
    "optionsChinese": [
      "A) 修改参数的装饰器",
      "B) 带默认参数的装饰器",
      "C) 返回装饰器的函数（三层嵌套）",
      "D) 应用于参数的装饰器"
    ],
    "answer": 2,
    "explanation": "A decorator with arguments requires three levels of nesting: the outer function accepts the decorator's arguments and returns the actual decorator, which accepts the function, which returns the wrapper. Example: def repeat(n): def decorator(func): def wrapper(*args): ... This pattern allows @repeat(3) syntax for configurable decorators.",
    "explanationChinese": "带参数的装饰器需要三层嵌套：外部函数接受装饰器的参数并返回实际装饰器，装饰器接受函数，函数返回包装器。例如：def repeat(n): def decorator(func): def wrapper(*args): ... 这种模式允许@repeat(3)语法用于可配置装饰器。",
    "diagram": "",
    "terms": [
      "decorator"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 69,
    "q": "What does functools.lru_cache do?",
    "qChinese": "functools.lru_cache做什么？",
    "options": [
      "A) Limits function calls",
      "B) Reduces memory usage",
      "C) Caches function results for repeated calls",
      "D) Locks the function for thread safety"
    ],
    "optionsChinese": [
      "A) 限制函数调用",
      "B) 减少内存使用",
      "C) 缓存函数结果用于重复调用",
      "D) 锁定函数以保证线程安全"
    ],
    "answer": 2,
    "explanation": "functools.lru_cache is a decorator that memoizes function results. It stores results of expensive function calls and returns the cached result when the same inputs occur again. LRU stands for Least Recently Used. @lru_cache(maxsize=128) keeps the 128 most recent results. Arguments must be hashable. It dramatically speeds up recursive algorithms.",
    "explanationChinese": "functools.lru_cache是一个记忆化函数结果的装饰器。它存储昂贵函数调用的结果，当相同输入再次出现时返回缓存结果。LRU代表最近最少使用。@lru_cache(maxsize=128)保留128个最近的结果。参数必须是可哈希的。它显著加速递归算法。",
    "diagram": "",
    "terms": [
      "decorator"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 70,
    "q": "What is the scope resolution order in Python (LEGB rule)?",
    "qChinese": "Python中的作用域解析顺序（LEGB规则）是什么？",
    "options": [
      "A) Local, External, Global, Built-in",
      "B) Logical, Enclosing, General, Base",
      "C) Local, Enclosing, Global, Built-in",
      "D) Level, Environment, Global, Base"
    ],
    "optionsChinese": [
      "A) 局部, 外部, 全局, 内置",
      "B) 逻辑, 封闭, 通用, 基础",
      "C) 局部, 封闭, 全局, 内置",
      "D) 级别, 环境, 全局, 基础"
    ],
    "answer": 2,
    "explanation": "Python resolves variable names using the LEGB rule: Local (inside the current function), Enclosing (in enclosing functions for nested functions), Global (module level), Built-in (Python's built-in names). Python searches these scopes in order and uses the first match. Understanding LEGB is crucial for avoiding name shadowing and scope-related bugs.",
    "explanationChinese": "Python使用LEGB规则解析变量名：Local（当前函数内部）、Enclosing（嵌套函数的封闭函数中）、Global（模块级别）、Built-in（Python的内置名称）。Python按顺序搜索这些作用域并使用第一个匹配。理解LEGB对于避免名称遮蔽和作用域相关错误至关重要。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 71,
    "q": "What is the output of: (lambda *args: sum(args))(1, 2, 3)?",
    "qChinese": "(lambda *args: sum(args))(1, 2, 3)的输出是什么？",
    "options": [
      "A) [1, 2, 3]",
      "B) (1, 2, 3)",
      "C) 6",
      "D) Error"
    ],
    "optionsChinese": [
      "A) [1, 2, 3]",
      "B) (1, 2, 3)",
      "C) 6",
      "D) 错误"
    ],
    "answer": 2,
    "explanation": "This lambda uses *args to accept any number of positional arguments, collected as a tuple. sum(args) adds them: 1 + 2 + 3 = 6. Lambda functions can use *args and **kwargs just like regular functions. This demonstrates that lambdas, despite being single-expression, can be quite flexible with variable arguments.",
    "explanationChinese": "这个lambda使用*args接受任意数量的位置参数，收集为元组。sum(args)将它们相加：1 + 2 + 3 = 6。Lambda函数可以像常规函数一样使用*args和**kwargs。这表明lambda尽管只有单个表达式，但通过可变参数可以相当灵活。",
    "diagram": "",
    "terms": [
      "lambda_function",
      "args_kwargs"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 72,
    "q": "What is a keyword-only argument in Python?",
    "qChinese": "Python中的仅关键字参数是什么？",
    "options": [
      "A) An argument with a default value",
      "B) The first argument of any function",
      "C) An argument that must be passed by keyword after *",
      "D) An argument that is a Python keyword"
    ],
    "optionsChinese": [
      "A) 有默认值的参数",
      "B) 任何函数的第一个参数",
      "C) 必须在*之后通过关键字传递的参数",
      "D) 是Python关键字的参数"
    ],
    "answer": 2,
    "explanation": "Parameters defined after * or *args in a function signature are keyword-only: they must be passed by name. def func(a, *, b): means b must be called as func(1, b=2). This prevents accidental positional passing and improves API clarity. Python 3 introduced this feature. Keyword-only arguments can have defaults or be required.",
    "explanationChinese": "在函数签名中*或*args之后定义的参数是仅关键字参数：它们必须按名称传递。def func(a, *, b):意味着b必须以func(1, b=2)方式调用。这防止意外的位置传递并提高API清晰度。Python 3引入了此功能。仅关键字参数可以有默认值或是必需的。",
    "diagram": "",
    "terms": [
      "args_kwargs"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 73,
    "q": "What is the purpose of the @staticmethod decorator?",
    "qChinese": "@staticmethod装饰器的用途是什么？",
    "options": [
      "A) Makes a method thread-safe",
      "B) Makes a method immutable",
      "C) Defines a method that doesn't access instance or class",
      "D) Prevents method overriding"
    ],
    "optionsChinese": [
      "A) 使方法线程安全",
      "B) 使方法不可变",
      "C) 定义不访问实例或类的方法",
      "D) 防止方法覆盖"
    ],
    "answer": 2,
    "explanation": "@staticmethod defines a method that belongs to the class but does not receive the instance (self) or class (cls) as a first argument. It behaves like a regular function but lives in the class namespace. Static methods are used for utility functions related to the class that do not need to access any instance or class state.",
    "explanationChinese": "@staticmethod定义一个属于类但不接收实例（self）或类（cls）作为第一个参数的方法。它的行为像常规函数但存在于类命名空间中。静态方法用于与类相关但不需要访问任何实例或类状态的工具函数。",
    "diagram": "",
    "terms": [
      "decorator",
      "class_inheritance"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 74,
    "q": "What is the purpose of the @classmethod decorator?",
    "qChinese": "@classmethod装饰器的用途是什么？",
    "options": [
      "A) Creates a new class",
      "B) Makes the method private",
      "C) Receives the class as the first argument (cls)",
      "D) Converts a function to a class"
    ],
    "optionsChinese": [
      "A) 创建新类",
      "B) 使方法私有",
      "C) 接收类作为第一个参数（cls）",
      "D) 将函数转换为类"
    ],
    "answer": 2,
    "explanation": "@classmethod makes a method receive the class (cls) as the first argument instead of the instance (self). It can access and modify class state. Class methods are commonly used as alternative constructors: @classmethod def from_string(cls, s): ... They work correctly with inheritance since cls refers to the actual calling class, not the defining class.",
    "explanationChinese": "@classmethod使方法接收类（cls）作为第一个参数，而不是实例（self）。它可以访问和修改类状态。类方法通常用作替代构造函数：@classmethod def from_string(cls, s): ... 它们在继承中正确工作，因为cls引用的是实际调用的类，而不是定义的类。",
    "diagram": "",
    "terms": [
      "decorator",
      "class_inheritance"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 75,
    "q": "What is function currying in Python?",
    "qChinese": "Python中的函数柯里化是什么？",
    "options": [
      "A) Cooking functions",
      "B) Removing arguments from a function",
      "C) Transforming a multi-arg function into a chain of single-arg functions",
      "D) Optimizing function speed"
    ],
    "optionsChinese": [
      "A) 烹饪函数",
      "B) 从函数中删除参数",
      "C) 将多参数函数转换为单参数函数链",
      "D) 优化函数速度"
    ],
    "answer": 2,
    "explanation": "Currying transforms a function with multiple arguments into a sequence of functions each taking a single argument. In Python, functools.partial is commonly used for partial application: from functools import partial; double = partial(multiply, 2). While Python does not natively support currying, closures and partial achieve similar results for building specialized functions.",
    "explanationChinese": "柯里化将有多个参数的函数转换为一系列各取一个参数的函数。在Python中，functools.partial常用于部分应用：from functools import partial; double = partial(multiply, 2)。虽然Python不原生支持柯里化，但闭包和partial可以实现类似结果来构建专门化函数。",
    "diagram": "",
    "terms": [
      "lambda_function",
      "decorator"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 76,
    "q": "How do you add an element to the end of a list?",
    "qChinese": "如何在列表末尾添加元素？",
    "options": [
      "A) list.add(x)",
      "B) list.insert(x)",
      "C) list.append(x)",
      "D) list.push(x)"
    ],
    "optionsChinese": [
      "A) list.add(x)",
      "B) list.insert(x)",
      "C) list.append(x)",
      "D) list.push(x)"
    ],
    "answer": 2,
    "explanation": "list.append(x) adds a single element to the end of the list. It modifies the list in-place and returns None. To add multiple elements, use list.extend(iterable). list.insert(index, x) adds at a specific position. Python lists do not have push() like JavaScript arrays. append() has O(1) amortized time complexity.",
    "explanationChinese": "list.append(x)在列表末尾添加单个元素。它就地修改列表并返回None。要添加多个元素，使用list.extend(iterable)。list.insert(index, x)在特定位置添加。Python列表没有像JavaScript数组那样的push()。append()的摊销时间复杂度为O(1)。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 77,
    "q": "What is the difference between list.append() and list.extend()?",
    "qChinese": "list.append()和list.extend()的区别是什么？",
    "options": [
      "A) append adds iterable as single element, extend adds each element",
      "B) They are identical",
      "C) append adds multiple, extend adds one",
      "D) extend creates a new list"
    ],
    "optionsChinese": [
      "A) append将可迭代对象作为单个元素添加，extend添加每个元素",
      "B) 它们相同",
      "C) append添加多个，extend添加一个",
      "D) extend创建新列表"
    ],
    "answer": 0,
    "explanation": "append() adds its argument as a single element: [1].append([2,3]) gives [1, [2,3]]. extend() iterates over its argument and adds each element: [1].extend([2,3]) gives [1, 2, 3]. Both modify the list in-place. Use += as shorthand for extend: lst += [2,3] is equivalent to lst.extend([2,3]). Choose based on whether you want nesting.",
    "explanationChinese": "append()将其参数作为单个元素添加：[1].append([2,3])给出[1, [2,3]]。extend()迭代其参数并添加每个元素：[1].extend([2,3])给出[1, 2, 3]。两者都就地修改列表。使用+=作为extend的简写：lst += [2,3]等同于lst.extend([2,3])。根据是否需要嵌套来选择。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 78,
    "q": "How do you create a tuple with a single element?",
    "qChinese": "如何创建只有一个元素的元组？",
    "options": [
      "A) t = (1)",
      "B) t = tuple[1]",
      "C) t = (1,)",
      "D) t = {1}"
    ],
    "optionsChinese": [
      "A) t = (1)",
      "B) t = tuple[1]",
      "C) t = (1,)",
      "D) t = {1}"
    ],
    "answer": 2,
    "explanation": "A single-element tuple requires a trailing comma: t = (1,). Without the comma, (1) is just the integer 1 in parentheses (grouping expression). This is a common Python gotcha. You can verify: type((1)) is int, but type((1,)) is tuple. The comma defines the tuple, not the parentheses. t = 1, also works without parentheses.",
    "explanationChinese": "单元素元组需要尾随逗号：t = (1,)。没有逗号，(1)只是括号中的整数1（分组表达式）。这是一个常见的Python陷阱。你可以验证：type((1))是int，但type((1,))是tuple。逗号定义元组，而不是括号。t = 1,不加括号也可以。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 79,
    "q": "What is the output of: set([1, 2, 2, 3, 3, 3])?",
    "qChinese": "set([1, 2, 2, 3, 3, 3])的输出是什么？",
    "options": [
      "A) [1, 2, 3]",
      "B) (1, 2, 3)",
      "C) {1, 2, 3}",
      "D) {1: 1, 2: 2, 3: 3}"
    ],
    "optionsChinese": [
      "A) [1, 2, 3]",
      "B) (1, 2, 3)",
      "C) {1, 2, 3}",
      "D) {1: 1, 2: 2, 3: 3}"
    ],
    "answer": 2,
    "explanation": "Sets automatically remove duplicates and store only unique elements. set([1, 2, 2, 3, 3, 3]) creates {1, 2, 3}. Sets are unordered collections, so elements have no guaranteed order. They use hash tables for O(1) average lookup. Elements must be hashable (immutable). Sets support mathematical operations like union, intersection, and difference.",
    "explanationChinese": "集合自动删除重复项，只存储唯一元素。set([1, 2, 2, 3, 3, 3])创建{1, 2, 3}。集合是无序集合，元素没有保证的顺序。它们使用哈希表实现平均O(1)查找。元素必须是可哈希的（不可变的）。集合支持并集、交集和差集等数学运算。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 80,
    "q": "How do you access a dictionary value safely without raising KeyError?",
    "qChinese": "如何安全地访问字典值而不引发KeyError？",
    "options": [
      "A) dict[key]",
      "B) dict.find(key)",
      "C) dict.get(key, default)",
      "D) dict.access(key)"
    ],
    "optionsChinese": [
      "A) dict[key]",
      "B) dict.find(key)",
      "C) dict.get(key, default)",
      "D) dict.access(key)"
    ],
    "answer": 2,
    "explanation": "dict.get(key, default) returns the value for key if it exists, otherwise returns the default value (None if not specified). Unlike dict[key] which raises KeyError for missing keys, get() never raises an exception. Another option is dict.setdefault(key, default) which also sets the key if missing. Use 'key in dict' to check existence first.",
    "explanationChinese": "dict.get(key, default)如果键存在则返回值，否则返回默认值（如未指定则为None）。与dict[key]在键缺失时引发KeyError不同，get()从不引发异常。另一个选项是dict.setdefault(key, default)，它在键缺失时也会设置键。使用'key in dict'先检查存在性。",
    "diagram": "",
    "terms": [
      "dictionary"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 81,
    "q": "What is the output of: [1, 2, 3] + [4, 5]?",
    "qChinese": "[1, 2, 3] + [4, 5]的输出是什么？",
    "options": [
      "A) [5, 7]",
      "B) [[1,2,3], [4,5]]",
      "C) [1, 2, 3, 4, 5]",
      "D) Error"
    ],
    "optionsChinese": [
      "A) [5, 7]",
      "B) [[1,2,3], [4,5]]",
      "C) [1, 2, 3, 4, 5]",
      "D) 错误"
    ],
    "answer": 2,
    "explanation": "The + operator concatenates two lists into a new list. [1, 2, 3] + [4, 5] produces [1, 2, 3, 4, 5]. This creates a new list object; the originals are unchanged. For in-place extension, use extend() or +=. Note: + requires both operands to be lists; you cannot add a list and a tuple without conversion.",
    "explanationChinese": "+运算符将两个列表连接成新列表。[1, 2, 3] + [4, 5]产生[1, 2, 3, 4, 5]。这创建一个新列表对象；原始列表不变。对于就地扩展，使用extend()或+=。注意：+要求两个操作数都是列表；不能在不转换的情况下将列表和元组相加。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 82,
    "q": "What does list.pop() do without arguments?",
    "qChinese": "list.pop()不带参数时做什么？",
    "options": [
      "A) Removes the first element",
      "B) Returns the last element without removing",
      "C) Removes and returns the last element",
      "D) Clears the entire list"
    ],
    "optionsChinese": [
      "A) 删除第一个元素",
      "B) 不删除就返回最后一个元素",
      "C) 删除并返回最后一个元素",
      "D) 清空整个列表"
    ],
    "answer": 2,
    "explanation": "list.pop() without arguments removes and returns the last element, operating like a stack (LIFO). list.pop(0) removes the first element but is O(n) because all elements shift. For efficient removal from both ends, use collections.deque. pop() raises IndexError on an empty list. pop(index) removes at any valid index position.",
    "explanationChinese": "list.pop()不带参数时删除并返回最后一个元素，像栈（LIFO）一样操作。list.pop(0)删除第一个元素但是O(n)，因为所有元素需要移位。要从两端高效删除，使用collections.deque。pop()在空列表上引发IndexError。pop(index)在任何有效索引位置删除。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 83,
    "q": "How do you merge two dictionaries in Python 3.9+?",
    "qChinese": "如何在Python 3.9+中合并两个字典？",
    "options": [
      "A) dict1.merge(dict2)",
      "B) dict1 + dict2",
      "C) dict1 | dict2",
      "D) dict1.concat(dict2)"
    ],
    "optionsChinese": [
      "A) dict1.merge(dict2)",
      "B) dict1 + dict2",
      "C) dict1 | dict2",
      "D) dict1.concat(dict2)"
    ],
    "answer": 2,
    "explanation": "Python 3.9 introduced the | operator for dictionary merging: dict1 | dict2 creates a new dict with entries from both, with dict2's values taking precedence for duplicate keys. The |= operator updates in-place. Before 3.9, use {**dict1, **dict2} or dict1.update(dict2). The | operator also works for set union operations.",
    "explanationChinese": "Python 3.9引入了|运算符用于字典合并：dict1 | dict2创建包含两者条目的新字典，重复键以dict2的值为准。|=运算符就地更新。在3.9之前，使用{**dict1, **dict2}或dict1.update(dict2)。|运算符也适用于集合并集操作。",
    "diagram": "",
    "terms": [
      "dictionary"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 84,
    "q": "What is the output of: sorted([3, 1, 4, 1, 5], reverse=True)?",
    "qChinese": "sorted([3, 1, 4, 1, 5], reverse=True)的输出是什么？",
    "options": [
      "A) [1, 1, 3, 4, 5]",
      "B) [5, 4, 3, 2, 1]",
      "C) [5, 4, 3, 1, 1]",
      "D) [1, 3, 4, 5]"
    ],
    "optionsChinese": [
      "A) [1, 1, 3, 4, 5]",
      "B) [5, 4, 3, 2, 1]",
      "C) [5, 4, 3, 1, 1]",
      "D) [1, 3, 4, 5]"
    ],
    "answer": 2,
    "explanation": "sorted() returns a new sorted list. With reverse=True, it sorts in descending order. The original list is unchanged. sorted() works with any iterable, not just lists. Unlike list.sort() which sorts in-place and returns None, sorted() always returns a new list. Python uses the Timsort algorithm which is stable and O(n log n).",
    "explanationChinese": "sorted()返回新的已排序列表。使用reverse=True时，按降序排序。原始列表不变。sorted()适用于任何可迭代对象，不仅是列表。与就地排序并返回None的list.sort()不同，sorted()总是返回新列表。Python使用Timsort算法，它是稳定的且为O(n log n)。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 85,
    "q": "What is the difference between a shallow copy and a deep copy?",
    "qChinese": "浅拷贝和深拷贝的区别是什么？",
    "options": [
      "A) Shallow copies everything, deep copies references",
      "B) They are identical for all objects",
      "C) Shallow copies top-level, deep copies all nested objects",
      "D) Deep copy is faster than shallow copy"
    ],
    "optionsChinese": [
      "A) 浅拷贝复制所有内容，深拷贝复制引用",
      "B) 对所有对象它们相同",
      "C) 浅拷贝复制顶层，深拷贝复制所有嵌套对象",
      "D) 深拷贝比浅拷贝快"
    ],
    "answer": 2,
    "explanation": "A shallow copy (copy.copy() or list.copy()) creates a new object but references the same nested objects. A deep copy (copy.deepcopy()) recursively copies all nested objects. For flat lists, both behave identically. For nested structures like [[1,2],[3,4]], modifying a nested list in a shallow copy affects the original. Deep copy is independent.",
    "explanationChinese": "浅拷贝（copy.copy()或list.copy()）创建新对象但引用相同的嵌套对象。深拷贝（copy.deepcopy()）递归复制所有嵌套对象。对于扁平列表，两者行为相同。对于嵌套结构如[[1,2],[3,4]]，修改浅拷贝中的嵌套列表会影响原始列表。深拷贝是独立的。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 86,
    "q": "What does collections.defaultdict do?",
    "qChinese": "collections.defaultdict做什么？",
    "options": [
      "A) Creates a read-only dictionary",
      "B) Sorts dictionary keys",
      "C) Provides default values for missing keys automatically",
      "D) Limits dictionary size"
    ],
    "optionsChinese": [
      "A) 创建只读字典",
      "B) 对字典键排序",
      "C) 自动为缺失键提供默认值",
      "D) 限制字典大小"
    ],
    "answer": 2,
    "explanation": "defaultdict is a dict subclass that calls a factory function for missing keys. defaultdict(int) returns 0 for missing keys, defaultdict(list) returns []. This eliminates the need to check if a key exists before using it. Common pattern: d = defaultdict(list); d['key'].append(value) works without initializing the list first.",
    "explanationChinese": "defaultdict是dict的子类，为缺失键调用工厂函数。defaultdict(int)为缺失键返回0，defaultdict(list)返回[]。这消除了在使用键之前检查键是否存在的需要。常见模式：d = defaultdict(list); d['key'].append(value)无需先初始化列表即可工作。",
    "diagram": "",
    "terms": [
      "dictionary"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 87,
    "q": "What is the output of: tuple([1, 2, 3])?",
    "qChinese": "tuple([1, 2, 3])的输出是什么？",
    "options": [
      "A) [1, 2, 3]",
      "B) {1, 2, 3}",
      "C) (1, 2, 3)",
      "D) Error"
    ],
    "optionsChinese": [
      "A) [1, 2, 3]",
      "B) {1, 2, 3}",
      "C) (1, 2, 3)",
      "D) 错误"
    ],
    "answer": 2,
    "explanation": "tuple() converts any iterable to a tuple. tuple([1, 2, 3]) creates (1, 2, 3). Similarly, list() converts to list, set() to set, and dict() to dictionary. These constructor functions accept any iterable. Tuples are immutable, so once created, elements cannot be added, removed, or changed, making them useful as dictionary keys.",
    "explanationChinese": "tuple()将任何可迭代对象转换为元组。tuple([1, 2, 3])创建(1, 2, 3)。类似地，list()转换为列表，set()转换为集合，dict()转换为字典。这些构造函数接受任何可迭代对象。元组是不可变的，创建后不能添加、删除或更改元素，使其可用作字典键。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 88,
    "q": "What is the output of: {1, 2, 3} & {2, 3, 4}?",
    "qChinese": "{1, 2, 3} & {2, 3, 4}的输出是什么？",
    "options": [
      "A) {1, 2, 3, 4}",
      "B) {1, 4}",
      "C) {2, 3}",
      "D) {1, 2, 3, 2, 3, 4}"
    ],
    "optionsChinese": [
      "A) {1, 2, 3, 4}",
      "B) {1, 4}",
      "C) {2, 3}",
      "D) {1, 2, 3, 2, 3, 4}"
    ],
    "answer": 2,
    "explanation": "The & operator performs set intersection, returning elements common to both sets. {1, 2, 3} & {2, 3, 4} gives {2, 3}. Other set operators: | for union, - for difference, ^ for symmetric difference. These correspond to methods: intersection(), union(), difference(), symmetric_difference(). Set operations are highly optimized using hash tables.",
    "explanationChinese": "&运算符执行集合交集，返回两个集合共有的元素。{1, 2, 3} & {2, 3, 4}给出{2, 3}。其他集合运算符：|表示并集，-表示差集，^表示对称差集。对应方法：intersection()、union()、difference()、symmetric_difference()。集合操作使用哈希表高度优化。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 89,
    "q": "What is a named tuple in Python?",
    "qChinese": "Python中的命名元组是什么？",
    "options": [
      "A) A tuple with string keys",
      "B) A dictionary disguised as a tuple",
      "C) A tuple subclass with named fields",
      "D) A mutable tuple"
    ],
    "optionsChinese": [
      "A) 有字符串键的元组",
      "B) 伪装成元组的字典",
      "C) 有命名字段的元组子类",
      "D) 可变元组"
    ],
    "answer": 2,
    "explanation": "collections.namedtuple creates tuple subclasses with named fields. Point = namedtuple('Point', ['x', 'y']); p = Point(1, 2) allows p.x and p.y access in addition to p[0] and p[1]. Named tuples are immutable, memory-efficient, and self-documenting. They are ideal for representing simple data structures without the overhead of a full class definition.",
    "explanationChinese": "collections.namedtuple创建有命名字段的元组子类。Point = namedtuple('Point', ['x', 'y']); p = Point(1, 2)允许p.x和p.y访问，以及p[0]和p[1]。命名元组是不可变的、内存高效的和自我文档化的。它们非常适合表示简单数据结构，无需完整类定义的开销。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 90,
    "q": "What is the output of: list(reversed([1, 2, 3]))?",
    "qChinese": "list(reversed([1, 2, 3]))的输出是什么？",
    "options": [
      "A) [1, 2, 3]",
      "B) [3, 1, 2]",
      "C) [3, 2, 1]",
      "D) Error"
    ],
    "optionsChinese": [
      "A) [1, 2, 3]",
      "B) [3, 1, 2]",
      "C) [3, 2, 1]",
      "D) 错误"
    ],
    "answer": 2,
    "explanation": "reversed() returns a reverse iterator. Wrapping with list() gives [3, 2, 1]. Unlike list.reverse() which reverses in-place and returns None, reversed() creates a new iterator without modifying the original. You can also use slicing: [1, 2, 3][::-1] returns [3, 2, 1]. reversed() works with any object that implements __reversed__ or __len__ and __getitem__.",
    "explanationChinese": "reversed()返回反向迭代器。用list()包装得到[3, 2, 1]。与就地反转并返回None的list.reverse()不同，reversed()创建新迭代器不修改原始列表。也可以使用切片：[1, 2, 3][::-1]返回[3, 2, 1]。reversed()适用于任何实现了__reversed__或__len__和__getitem__的对象。",
    "diagram": "",
    "terms": [
      "slice_notation"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 91,
    "q": "What does collections.Counter do?",
    "qChinese": "collections.Counter做什么？",
    "options": [
      "A) Counts from 1 to n",
      "B) Creates a countdown timer",
      "C) Counts occurrences of elements in an iterable",
      "D) Tracks function call counts"
    ],
    "optionsChinese": [
      "A) 从1计数到n",
      "B) 创建倒计时器",
      "C) 计算可迭代对象中元素的出现次数",
      "D) 跟踪函数调用次数"
    ],
    "answer": 2,
    "explanation": "Counter is a dict subclass that counts hashable objects. Counter('abracadabra') gives Counter({'a': 5, 'b': 2, 'r': 2, 'c': 1, 'd': 1}). It provides most_common(n) for top elements and supports arithmetic: Counter1 + Counter2 combines counts. Counter is invaluable for frequency analysis, histograms, and multiset operations in data processing.",
    "explanationChinese": "Counter是计算可哈希对象数量的dict子类。Counter('abracadabra')给出Counter({'a': 5, 'b': 2, 'r': 2, 'c': 1, 'd': 1})。它提供most_common(n)获取最常见元素，支持算术：Counter1 + Counter2合并计数。Counter对频率分析、直方图和数据处理中的多重集操作非常有价值。",
    "diagram": "",
    "terms": [
      "dictionary"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 92,
    "q": "What is the output of: [1, 2, 3][::−1]?",
    "qChinese": "[1, 2, 3][::-1]的输出是什么？",
    "options": [
      "A) [1, 2, 3]",
      "B) [3, 2]",
      "C) [3, 2, 1]",
      "D) Error"
    ],
    "optionsChinese": [
      "A) [1, 2, 3]",
      "B) [3, 2]",
      "C) [3, 2, 1]",
      "D) 错误"
    ],
    "answer": 2,
    "explanation": "The slice notation [::−1] reverses a sequence. The full syntax is [start:stop:step] where −1 step means go backwards. This works on lists, strings, and tuples. 'hello'[::-1] gives 'olleh'. It creates a new object; the original is not modified. This is one of the most idiomatic ways to reverse sequences in Python.",
    "explanationChinese": "切片符号[::-1]反转序列。完整语法是[start:stop:step]，其中-1步长表示向后。这适用于列表、字符串和元组。'hello'[::-1]给出'olleh'。它创建新对象；原始对象不被修改。这是Python中反转序列最惯用的方式之一。",
    "diagram": "",
    "terms": [
      "slice_notation"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 93,
    "q": "How do you remove a key from a dictionary?",
    "qChinese": "如何从字典中删除键？",
    "options": [
      "A) dict.remove(key)",
      "B) dict.delete(key)",
      "C) del dict[key]",
      "D) dict.discard(key)"
    ],
    "optionsChinese": [
      "A) dict.remove(key)",
      "B) dict.delete(key)",
      "C) del dict[key]",
      "D) dict.discard(key)"
    ],
    "answer": 2,
    "explanation": "del dict[key] removes the key-value pair and raises KeyError if the key doesn't exist. dict.pop(key) also removes and returns the value, with an optional default: dict.pop(key, None). dict.popitem() removes and returns the last inserted pair. discard() is a set method, not dict. Use pop with default for safe removal.",
    "explanationChinese": "del dict[key]删除键值对，如果键不存在则引发KeyError。dict.pop(key)也删除并返回值，有可选默认值：dict.pop(key, None)。dict.popitem()删除并返回最后插入的对。discard()是集合方法，不是字典方法。使用带默认值的pop进行安全删除。",
    "diagram": "",
    "terms": [
      "dictionary"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 94,
    "q": "What is the output of: dict.fromkeys(['a', 'b', 'c'], 0)?",
    "qChinese": "dict.fromkeys(['a', 'b', 'c'], 0)的输出是什么？",
    "options": [
      "A) {'a': 0, 'b': 0, 'c': 0}",
      "B) {0: 'a', 0: 'b', 0: 'c'}",
      "C) ['a', 'b', 'c']",
      "D) Error"
    ],
    "optionsChinese": [
      "A) {'a': 0, 'b': 0, 'c': 0}",
      "B) {0: 'a', 0: 'b', 0: 'c'}",
      "C) ['a', 'b', 'c']",
      "D) 错误"
    ],
    "answer": 0,
    "explanation": "dict.fromkeys(keys, value) creates a new dictionary with the given keys all set to the same value. dict.fromkeys(['a', 'b', 'c'], 0) gives {'a': 0, 'b': 0, 'c': 0}. Caution: if the value is mutable (like a list), all keys share the same object. Use a dict comprehension instead for independent mutable values per key.",
    "explanationChinese": "dict.fromkeys(keys, value)创建一个新字典，所有给定键都设置为相同的值。dict.fromkeys(['a', 'b', 'c'], 0)给出{'a': 0, 'b': 0, 'c': 0}。注意：如果值是可变的（如列表），所有键共享同一对象。对于每个键独立的可变值，使用字典推导式代替。",
    "diagram": "",
    "terms": [
      "dictionary"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 95,
    "q": "What is collections.OrderedDict used for?",
    "qChinese": "collections.OrderedDict用于什么？",
    "options": [
      "A) Sorting dictionary keys alphabetically",
      "B) Creating read-only dictionaries",
      "C) Maintaining insertion order (historically important)",
      "D) Limiting dictionary size"
    ],
    "optionsChinese": [
      "A) 按字母顺序排序字典键",
      "B) 创建只读字典",
      "C) 维护插入顺序（历史上重要）",
      "D) 限制字典大小"
    ],
    "answer": 2,
    "explanation": "OrderedDict remembers the order in which items were inserted. Since Python 3.7, regular dicts also maintain insertion order, making OrderedDict less critical. However, OrderedDict still offers move_to_end(), equality comparisons that consider order, and a different __repr__. It is useful when order-dependent equality matters or for Python 3.6 compatibility.",
    "explanationChinese": "OrderedDict记住项目插入的顺序。自Python 3.7起，常规dict也维护插入顺序，使OrderedDict不那么关键。但OrderedDict仍提供move_to_end()、考虑顺序的相等比较和不同的__repr__。当顺序相关的相等性重要或需要Python 3.6兼容性时很有用。",
    "diagram": "",
    "terms": [
      "dictionary"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 96,
    "q": "What is the output of: list(zip([1,2,3], [4,5]))?",
    "qChinese": "list(zip([1,2,3], [4,5]))的输出是什么？",
    "options": [
      "A) [(1,4), (2,5), (3,None)]",
      "B) [(1,4,2,5,3)]",
      "C) [(1,4), (2,5)]",
      "D) Error"
    ],
    "optionsChinese": [
      "A) [(1,4), (2,5), (3,None)]",
      "B) [(1,4,2,5,3)]",
      "C) [(1,4), (2,5)]",
      "D) 错误"
    ],
    "answer": 2,
    "explanation": "zip() stops at the shortest iterable. With [1,2,3] and [4,5], it produces only two pairs: [(1,4), (2,5)]. The element 3 is discarded. Use itertools.zip_longest(fillvalue=None) to include all elements, filling missing values with the specified fillvalue. In Python 3.10+, zip(strict=True) raises ValueError for unequal lengths.",
    "explanationChinese": "zip()在最短的可迭代对象处停止。对于[1,2,3]和[4,5]，它只产生两对：[(1,4), (2,5)]。元素3被丢弃。使用itertools.zip_longest(fillvalue=None)包含所有元素，用指定的fillvalue填充缺失值。在Python 3.10+中，zip(strict=True)对不等长度引发ValueError。",
    "diagram": "",
    "terms": [
      "generator"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 97,
    "q": "What is a deque and when should you use it?",
    "qChinese": "什么是deque，什么时候应该使用它？",
    "options": [
      "A) A type of dictionary",
      "B) A debugging tool",
      "C) A double-ended queue for efficient append/pop from both ends",
      "D) A type of decorator"
    ],
    "optionsChinese": [
      "A) 一种字典",
      "B) 调试工具",
      "C) 从两端高效append/pop的双端队列",
      "D) 一种装饰器"
    ],
    "answer": 2,
    "explanation": "collections.deque (double-ended queue) provides O(1) append and pop from both ends, unlike lists which are O(n) for operations on the left end. deque supports appendleft(), popleft(), rotate(), and maxlen for bounded buffers. Use deque for queues, BFS algorithms, sliding windows, and any scenario requiring efficient operations on both ends.",
    "explanationChinese": "collections.deque（双端队列）提供从两端O(1)的append和pop，不像列表在左端操作是O(n)。deque支持appendleft()、popleft()、rotate()和maxlen用于有界缓冲区。对于队列、BFS算法、滑动窗口和任何需要两端高效操作的场景使用deque。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 98,
    "q": "What is the difference between list.sort() and sorted()?",
    "qChinese": "list.sort()和sorted()的区别是什么？",
    "options": [
      "A) sort() returns a new list, sorted() modifies in-place",
      "B) They are identical",
      "C) sort() modifies in-place, sorted() returns a new list",
      "D) sorted() only works on tuples"
    ],
    "optionsChinese": [
      "A) sort()返回新列表，sorted()就地修改",
      "B) 它们相同",
      "C) sort()就地修改，sorted()返回新列表",
      "D) sorted()仅适用于元组"
    ],
    "answer": 2,
    "explanation": "list.sort() sorts the list in-place and returns None. sorted() takes any iterable and returns a new sorted list, leaving the original unchanged. Use sort() when you do not need the original order and want to save memory. Use sorted() when you need to preserve the original or sort non-list iterables. Both accept key and reverse parameters.",
    "explanationChinese": "list.sort()就地排序列表并返回None。sorted()接受任何可迭代对象并返回新的已排序列表，原始不变。当不需要原始顺序且想节省内存时使用sort()。当需要保留原始数据或排序非列表可迭代对象时使用sorted()。两者都接受key和reverse参数。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 99,
    "q": "What does the ** operator do with dictionaries?",
    "qChinese": "**运算符对字典做什么？",
    "options": [
      "A) Raises dict to a power",
      "B) Compares two dictionaries",
      "C) Creates a deep copy",
      "D) Unpacks dictionary into keyword arguments"
    ],
    "optionsChinese": [
      "A) 将字典提升到幂",
      "B) 比较两个字典",
      "C) 创建深拷贝",
      "D) 将字典解包为关键字参数"
    ],
    "answer": 3,
    "explanation": "The ** operator unpacks a dictionary into keyword arguments. func(**{'a': 1, 'b': 2}) is equivalent to func(a=1, b=2). It can also merge dicts: {**d1, **d2} creates a new dict combining both. In function definitions, **kwargs collects keyword arguments. Dictionary unpacking is fundamental to Python's flexible argument passing mechanism.",
    "explanationChinese": "**运算符将字典解包为关键字参数。func(**{'a': 1, 'b': 2})等同于func(a=1, b=2)。它还可以合并字典：{**d1, **d2}创建合并两者的新字典。在函数定义中，**kwargs收集关键字参数。字典解包是Python灵活参数传递机制的基础。",
    "diagram": "",
    "terms": [
      "args_kwargs",
      "dictionary"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 100,
    "q": "What is the output of: len({1: 'a', 2: 'b', 3: 'c'})?",
    "qChinese": "len({1: 'a', 2: 'b', 3: 'c'})的输出是什么？",
    "options": [
      "A) 6",
      "B) Error",
      "C) 2",
      "D) 3"
    ],
    "optionsChinese": [
      "A) 6",
      "B) 错误",
      "C) 2",
      "D) 3"
    ],
    "answer": 3,
    "explanation": "len() returns the number of key-value pairs in a dictionary. The dict {1: 'a', 2: 'b', 3: 'c'} has 3 pairs, so len() returns 3. len() works on all built-in collections: lists, tuples, sets, strings, and dicts. For strings, it counts characters. For nested structures, it only counts top-level elements.",
    "explanationChinese": "len()返回字典中键值对的数量。字典{1: 'a', 2: 'b', 3: 'c'}有3对，所以len()返回3。len()适用于所有内置集合：列表、元组、集合、字符串和字典。对于字符串，它计算字符数。对于嵌套结构，它只计算顶层元素。",
    "diagram": "",
    "terms": [
      "dictionary"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 101,
    "q": "How do you define a class in Python?",
    "qChinese": "如何在Python中定义类？",
    "options": [
      "A) class MyClass {}",
      "B) new class MyClass:",
      "C) define class MyClass:",
      "D) class MyClass:"
    ],
    "optionsChinese": [
      "A) class MyClass {}",
      "B) new class MyClass:",
      "C) define class MyClass:",
      "D) class MyClass:"
    ],
    "answer": 3,
    "explanation": "Python uses the 'class' keyword followed by the class name and a colon. The class body is indented. Unlike Java or C++, Python does not use curly braces. Classes typically include an __init__ method as the constructor. By convention, class names use CamelCase while methods and variables use snake_case. All classes implicitly inherit from object.",
    "explanationChinese": "Python使用'class'关键字后跟类名和冒号。类体是缩进的。与Java或C++不同，Python不使用花括号。类通常包含__init__方法作为构造函数。按照惯例，类名使用CamelCase，方法和变量使用snake_case。所有类隐式继承自object。",
    "diagram": "",
    "terms": [
      "class_inheritance"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 102,
    "q": "What is the __init__ method in a Python class?",
    "qChinese": "Python类中的__init__方法是什么？",
    "options": [
      "A) A destructor",
      "B) A static factory method",
      "C) The constructor/initializer",
      "D) A class method"
    ],
    "optionsChinese": [
      "A) 析构函数",
      "B) 静态工厂方法",
      "C) 构造函数/初始化器",
      "D) 类方法"
    ],
    "answer": 2,
    "explanation": "__init__ is called automatically when a new instance is created. It initializes the object's attributes. The first parameter is always 'self' (the instance). Example: def __init__(self, name): self.name = name. Note: __init__ is not technically a constructor (__new__ creates the object), but an initializer that sets up the instance after creation.",
    "explanationChinese": "__init__在创建新实例时自动调用。它初始化对象的属性。第一个参数始终是'self'（实例）。例如：def __init__(self, name): self.name = name。注意：__init__在技术上不是构造函数（__new__创建对象），而是在创建后设置实例的初始化器。",
    "diagram": "",
    "terms": [
      "class_inheritance"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 103,
    "q": "What is the purpose of 'self' in Python class methods?",
    "qChinese": "Python类方法中'self'的用途是什么？",
    "options": [
      "A) It is a keyword that must be used",
      "B) It creates a new instance",
      "C) It refers to the parent class",
      "D) It refers to the current instance of the class"
    ],
    "optionsChinese": [
      "A) 它是必须使用的关键字",
      "B) 它创建新实例",
      "C) 它引用父类",
      "D) 它引用类的当前实例"
    ],
    "answer": 3,
    "explanation": "self refers to the current instance of the class and is used to access instance attributes and methods. It must be the first parameter of instance methods but is passed automatically when calling. The name 'self' is a strong convention, not a keyword; any name works but using something else is considered poor style and confuses other developers.",
    "explanationChinese": "self引用类的当前实例，用于访问实例属性和方法。它必须是实例方法的第一个参数，但在调用时自动传递。名称'self'是一个强约定，不是关键字；任何名称都可以，但使用其他名称被认为是不好的风格，会让其他开发者困惑。",
    "diagram": "",
    "terms": [
      "class_inheritance"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 104,
    "q": "How do you create a child class that inherits from a parent class?",
    "qChinese": "如何创建继承自父类的子类？",
    "options": [
      "A) class Child extends Parent:",
      "B) class Child <- Parent:",
      "C) class Child inherits Parent:",
      "D) class Child(Parent):"
    ],
    "optionsChinese": [
      "A) class Child extends Parent:",
      "B) class Child <- Parent:",
      "C) class Child inherits Parent:",
      "D) class Child(Parent):"
    ],
    "answer": 3,
    "explanation": "Python uses parentheses after the class name to specify parent classes: class Child(Parent). Multiple inheritance is supported: class Child(Parent1, Parent2). The child inherits all attributes and methods from parents. Use super() to call parent methods. Python uses the C3 linearization algorithm (MRO) to resolve method lookup in multiple inheritance.",
    "explanationChinese": "Python在类名后使用括号指定父类：class Child(Parent)。支持多重继承：class Child(Parent1, Parent2)。子类继承父类的所有属性和方法。使用super()调用父类方法。Python使用C3线性化算法（MRO）来解析多重继承中的方法查找。",
    "diagram": "",
    "terms": [
      "class_inheritance"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 105,
    "q": "What is the __str__ magic method used for?",
    "qChinese": "__str__魔术方法用于什么？",
    "options": [
      "A) Converting to integer",
      "B) Encrypting the object",
      "C) Comparing strings",
      "D) Providing a human-readable string representation"
    ],
    "optionsChinese": [
      "A) 转换为整数",
      "B) 加密对象",
      "C) 比较字符串",
      "D) 提供人类可读的字符串表示"
    ],
    "answer": 3,
    "explanation": "__str__ defines the human-readable string representation of an object, called by str() and print(). __repr__ is the developer-oriented representation called by repr() and in the REPL. Best practice: __repr__ should be unambiguous (ideally producing valid Python), while __str__ should be readable. If only one is defined, __repr__ is used as fallback.",
    "explanationChinese": "__str__定义对象的人类可读字符串表示，由str()和print()调用。__repr__是面向开发者的表示，由repr()和REPL调用。最佳实践：__repr__应该是明确的（理想情况下产生有效的Python），而__str__应该是可读的。如果只定义一个，__repr__用作后备。",
    "diagram": "",
    "terms": [
      "class_inheritance"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 106,
    "q": "What is polymorphism in Python?",
    "qChinese": "Python中的多态性是什么？",
    "options": [
      "A) Having multiple constructors",
      "B) Creating multiple instances",
      "C) Using multiple inheritance",
      "D) Objects of different types responding to the same method"
    ],
    "optionsChinese": [
      "A) 有多个构造函数",
      "B) 创建多个实例",
      "C) 使用多重继承",
      "D) 不同类型的对象响应相同的方法"
    ],
    "answer": 3,
    "explanation": "Polymorphism allows objects of different classes to be treated through the same interface. In Python, this is achieved through duck typing: if an object has the needed method, it works regardless of its class. len() works on strings, lists, and dicts because they all implement __len__. Python's polymorphism does not require a common base class, unlike Java.",
    "explanationChinese": "多态性允许不同类的对象通过相同的接口处理。在Python中，这通过鸭子类型实现：如果对象有所需的方法，它就可以工作，无论其类。len()适用于字符串、列表和字典，因为它们都实现了__len__。Python的多态性不需要公共基类，与Java不同。",
    "diagram": "",
    "terms": [
      "duck_typing",
      "class_inheritance"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 107,
    "q": "What does super() do in Python?",
    "qChinese": "Python中super()做什么？",
    "options": [
      "A) Creates a superclass",
      "B) Checks if a class is a superclass",
      "C) Makes a method superior",
      "D) Calls a method from the parent class"
    ],
    "optionsChinese": [
      "A) 创建超类",
      "B) 检查类是否是超类",
      "C) 使方法更优越",
      "D) 调用父类的方法"
    ],
    "answer": 3,
    "explanation": "super() returns a proxy object that delegates method calls to the parent class. Commonly used in __init__: super().__init__(). In Python 3, super() without arguments works correctly. It follows the Method Resolution Order (MRO) for multiple inheritance, ensuring each class is called only once. This is the cooperative multiple inheritance pattern.",
    "explanationChinese": "super()返回一个代理对象，将方法调用委托给父类。常在__init__中使用：super().__init__()。在Python 3中，不带参数的super()正常工作。它遵循方法解析顺序（MRO）处理多重继承，确保每个类只被调用一次。这是协作式多重继承模式。",
    "diagram": "",
    "terms": [
      "class_inheritance"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 108,
    "q": "What is the __len__ magic method used for?",
    "qChinese": "__len__魔术方法用于什么？",
    "options": [
      "A) Getting the length of a string",
      "B) Counting class instances",
      "C) Limiting object size",
      "D) Allowing len() to work on custom objects"
    ],
    "optionsChinese": [
      "A) 获取字符串长度",
      "B) 计算类实例数",
      "C) 限制对象大小",
      "D) 允许len()在自定义对象上工作"
    ],
    "answer": 3,
    "explanation": "Defining __len__ in a class allows the built-in len() function to work on instances of that class. For example: class MyList: def __len__(self): return self.count. Then len(my_obj) calls my_obj.__len__(). This is part of Python's data model where magic methods enable operator overloading and protocol compliance for built-in functions.",
    "explanationChinese": "在类中定义__len__允许内置len()函数在该类的实例上工作。例如：class MyList: def __len__(self): return self.count。然后len(my_obj)调用my_obj.__len__()。这是Python数据模型的一部分，魔术方法启用运算符重载和内置函数的协议遵从。",
    "diagram": "",
    "terms": [
      "duck_typing"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 109,
    "q": "What is the difference between __repr__ and __str__?",
    "qChinese": "__repr__和__str__的区别是什么？",
    "options": [
      "A) __repr__ is for users, __str__ for developers",
      "B) __repr__ is for printing, __str__ for logging",
      "C) They are identical",
      "D) __repr__ is for developers, __str__ for users"
    ],
    "optionsChinese": [
      "A) __repr__用于用户，__str__用于开发者",
      "B) __repr__用于打印，__str__用于日志",
      "C) 它们相同",
      "D) __repr__用于开发者，__str__用于用户"
    ],
    "answer": 3,
    "explanation": "__repr__ provides an unambiguous, developer-oriented string (ideally eval-able). __str__ provides a readable, user-friendly string. print() uses __str__, the REPL uses __repr__. If __str__ is not defined, Python falls back to __repr__. Best practice: always define __repr__; define __str__ only when a different user-facing representation is needed.",
    "explanationChinese": "__repr__提供明确的、面向开发者的字符串（理想情况下可eval）。__str__提供可读的、用户友好的字符串。print()使用__str__，REPL使用__repr__。如果未定义__str__，Python回退到__repr__。最佳实践：始终定义__repr__；仅当需要不同的面向用户的表示时定义__str__。",
    "diagram": "",
    "terms": [
      "class_inheritance"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 110,
    "q": "What is multiple inheritance in Python?",
    "qChinese": "Python中的多重继承是什么？",
    "options": [
      "A) Inheriting from the same class twice",
      "B) Having multiple __init__ methods",
      "C) Creating multiple child classes",
      "D) A class inheriting from more than one parent class"
    ],
    "optionsChinese": [
      "A) 从同一个类继承两次",
      "B) 有多个__init__方法",
      "C) 创建多个子类",
      "D) 一个类从多个父类继承"
    ],
    "answer": 3,
    "explanation": "Multiple inheritance allows a class to inherit from multiple parent classes: class C(A, B). Python resolves method conflicts using the C3 Linearization algorithm, creating the Method Resolution Order (MRO). Check it with C.__mro__. The diamond problem is handled gracefully. Use super() for cooperative multiple inheritance to ensure all parent inits are called.",
    "explanationChinese": "多重继承允许一个类从多个父类继承：class C(A, B)。Python使用C3线性化算法解决方法冲突，创建方法解析顺序（MRO）。用C.__mro__检查。菱形问题被优雅处理。使用super()进行协作式多重继承以确保所有父类init被调用。",
    "diagram": "",
    "terms": [
      "class_inheritance"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 111,
    "q": "What is the @property decorator used for?",
    "qChinese": "@property装饰器用于什么？",
    "options": [
      "A) Making attributes read-only by default",
      "B) Making methods static",
      "C) Declaring class constants",
      "D) Creating managed attributes with getter/setter methods"
    ],
    "optionsChinese": [
      "A) 默认使属性只读",
      "B) 使方法静态",
      "C) 声明类常量",
      "D) 创建带getter/setter方法的受管属性"
    ],
    "answer": 3,
    "explanation": "@property creates managed attributes that use method calls disguised as attribute access. Define a getter with @property, a setter with @name.setter, and a deleter with @name.deleter. This enables validation, computed attributes, and encapsulation while maintaining clean attribute-style access syntax. It is Python's way of implementing the descriptor protocol.",
    "explanationChinese": "@property创建使用伪装成属性访问的方法调用的受管属性。用@property定义getter，@name.setter定义setter，@name.deleter定义deleter。这在保持干净的属性式访问语法的同时实现了验证、计算属性和封装。这是Python实现描述符协议的方式。",
    "diagram": "",
    "terms": [
      "decorator",
      "class_inheritance"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 112,
    "q": "What is name mangling in Python?",
    "qChinese": "Python中的名称改编是什么？",
    "options": [
      "A) Renaming variables at import",
      "B) Converting snake_case to camelCase",
      "C) Encrypting variable names",
      "D) Prefixing __name with _ClassName to prevent accidental override"
    ],
    "optionsChinese": [
      "A) 在导入时重命名变量",
      "B) 将snake_case转换为camelCase",
      "C) 加密变量名",
      "D) 用_ClassName前缀__name以防止意外覆盖"
    ],
    "answer": 3,
    "explanation": "Name mangling transforms attributes with double leading underscores (e.g., __attr) into _ClassName__attr. This prevents accidental access or override in subclasses. It is not true privacy (you can still access _ClassName__attr). Single underscore _attr is a convention for 'internal use'. Python's philosophy is 'we are all consenting adults' regarding access control.",
    "explanationChinese": "名称改编将双前导下划线的属性（如__attr）转换为_ClassName__attr。这防止子类中的意外访问或覆盖。这不是真正的私有性（你仍然可以访问_ClassName__attr）。单下划线_attr是'内部使用'的约定。Python关于访问控制的哲学是'我们都是负责任的成年人'。",
    "diagram": "",
    "terms": [
      "class_inheritance"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 113,
    "q": "What is the __eq__ magic method used for?",
    "qChinese": "__eq__魔术方法用于什么？",
    "options": [
      "A) Checking if an object exists",
      "B) Equating two classes",
      "C) Creating equal copies",
      "D) Defining equality comparison (==)"
    ],
    "optionsChinese": [
      "A) 检查对象是否存在",
      "B) 等同两个类",
      "C) 创建相等副本",
      "D) 定义相等比较（==）"
    ],
    "answer": 3,
    "explanation": "__eq__ defines the behavior of the == operator for custom objects. Without it, == compares object identity (like 'is'). When you define __eq__, Python automatically makes instances unhashable unless you also define __hash__. Other comparison methods: __lt__ (<), __gt__ (>), __le__ (<=), __ge__ (>=). Use functools.total_ordering for convenience.",
    "explanationChinese": "__eq__定义自定义对象的==运算符行为。没有它，==比较对象标识（像'is'）。定义__eq__时，Python自动使实例不可哈希，除非也定义__hash__。其他比较方法：__lt__(<)、__gt__(>)、__le__(<=)、__ge__(>=)。使用functools.total_ordering方便实现。",
    "diagram": "",
    "terms": [
      "class_inheritance"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 114,
    "q": "What is an abstract base class (ABC) in Python?",
    "qChinese": "Python中的抽象基类（ABC）是什么？",
    "options": [
      "A) A class that cannot have methods",
      "B) A class without __init__",
      "C) A class with only static methods",
      "D) A class that cannot be instantiated and defines an interface"
    ],
    "optionsChinese": [
      "A) 不能有方法的类",
      "B) 没有__init__的类",
      "C) 只有静态方法的类",
      "D) 不能被实例化并定义接口的类"
    ],
    "answer": 3,
    "explanation": "Abstract base classes (from abc module) define interfaces that subclasses must implement. Use ABC as base class and @abstractmethod decorator. Attempting to instantiate an ABC directly raises TypeError. Subclasses must implement all abstract methods. ABCs enforce contracts and enable isinstance() checks. The collections.abc module provides many useful ABCs like Iterable and Mapping.",
    "explanationChinese": "抽象基类（来自abc模块）定义子类必须实现的接口。使用ABC作为基类和@abstractmethod装饰器。尝试直接实例化ABC会引发TypeError。子类必须实现所有抽象方法。ABC强制执行契约并启用isinstance()检查。collections.abc模块提供许多有用的ABC，如Iterable和Mapping。",
    "diagram": "",
    "terms": [
      "class_inheritance",
      "decorator"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 115,
    "q": "What is the __getitem__ magic method used for?",
    "qChinese": "__getitem__魔术方法用于什么？",
    "options": [
      "A) Getting all items in a list",
      "B) Finding items in a database",
      "C) Getting item prices",
      "D) Enabling indexing with [] on custom objects"
    ],
    "optionsChinese": [
      "A) 获取列表中的所有项目",
      "B) 在数据库中查找项目",
      "C) 获取项目价格",
      "D) 在自定义对象上启用[]索引"
    ],
    "answer": 3,
    "explanation": "__getitem__ allows objects to support indexing with square brackets: obj[key]. Implementing it makes the object subscriptable. Combined with __len__, it also makes the object iterable. __setitem__ enables obj[key] = value, and __delitem__ enables del obj[key]. These methods are the foundation of Python's sequence and mapping protocols.",
    "explanationChinese": "__getitem__允许对象支持方括号索引：obj[key]。实现它使对象可下标。结合__len__，它还使对象可迭代。__setitem__启用obj[key] = value，__delitem__启用del obj[key]。这些方法是Python序列和映射协议的基础。",
    "diagram": "",
    "terms": [
      "duck_typing"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 116,
    "q": "What is a dataclass in Python 3.7+?",
    "qChinese": "Python 3.7+中的dataclass是什么？",
    "options": [
      "A) A database connection class",
      "B) A class that only stores data in files",
      "C) A class for data validation",
      "D) A decorator that auto-generates __init__, __repr__, etc."
    ],
    "optionsChinese": [
      "A) 数据库连接类",
      "B) 只在文件中存储数据的类",
      "C) 用于数据验证的类",
      "D) 自动生成__init__、__repr__等的装饰器"
    ],
    "answer": 3,
    "explanation": "@dataclass (from dataclasses module) automatically generates __init__, __repr__, __eq__, and optionally __hash__, __lt__, etc. based on class attributes with type annotations. It reduces boilerplate for data-holding classes. Options include frozen=True for immutability and order=True for comparison. Field() provides default factories and metadata.",
    "explanationChinese": "@dataclass（来自dataclasses模块）根据带类型注解的类属性自动生成__init__、__repr__、__eq__，以及可选的__hash__、__lt__等。它减少了数据持有类的样板代码。选项包括frozen=True用于不可变性和order=True用于比较。Field()提供默认工厂和元数据。",
    "diagram": "",
    "terms": [
      "decorator",
      "type_hints"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 117,
    "q": "What does the __call__ magic method enable?",
    "qChinese": "__call__魔术方法启用什么？",
    "options": [
      "A) Calling the phone",
      "B) Creating callback functions",
      "C) Calling parent methods",
      "D) Making an instance callable like a function"
    ],
    "optionsChinese": [
      "A) 打电话",
      "B) 创建回调函数",
      "C) 调用父类方法",
      "D) 使实例像函数一样可调用"
    ],
    "answer": 3,
    "explanation": "__call__ makes instances callable using parentheses: obj(). If a class defines __call__, its instances can be used like functions. This is useful for stateful functions, implementing strategy patterns, and creating class-based decorators. callable(obj) returns True for objects with __call__. It blurs the line between objects and functions in Python.",
    "explanationChinese": "__call__使实例可以使用括号调用：obj()。如果类定义了__call__，其实例可以像函数一样使用。这对有状态函数、实现策略模式和创建基于类的装饰器很有用。callable(obj)对有__call__的对象返回True。它模糊了Python中对象和函数的界限。",
    "diagram": "",
    "terms": [
      "duck_typing",
      "decorator"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 118,
    "q": "What is method resolution order (MRO)?",
    "qChinese": "什么是方法解析顺序（MRO）？",
    "options": [
      "A) The order methods are defined in a class",
      "B) The order of method parameters",
      "C) The order methods execute",
      "D) The order Python searches classes for a method in inheritance"
    ],
    "optionsChinese": [
      "A) 方法在类中定义的顺序",
      "B) 方法参数的顺序",
      "C) 方法执行的顺序",
      "D) Python在继承中搜索方法的类的顺序"
    ],
    "answer": 3,
    "explanation": "MRO determines the order in which base classes are searched when looking for a method. Python uses C3 linearization to compute the MRO. View it with ClassName.__mro__ or ClassName.mro(). For class D(B, C) where B and C inherit from A, Python ensures each class appears once and maintains a consistent order. This solves the diamond problem.",
    "explanationChinese": "MRO确定查找方法时搜索基类的顺序。Python使用C3线性化来计算MRO。用ClassName.__mro__或ClassName.mro()查看。对于class D(B, C)其中B和C继承自A，Python确保每个类出现一次并维护一致的顺序。这解决了菱形问题。",
    "diagram": "",
    "terms": [
      "class_inheritance"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 119,
    "q": "What are slots (__slots__) in Python classes?",
    "qChinese": "Python类中的__slots__是什么？",
    "options": [
      "A) Time slots for method execution",
      "B) Database slots for data storage",
      "C) Slots for plugin systems",
      "D) Fixed set of allowed attributes for memory optimization"
    ],
    "optionsChinese": [
      "A) 方法执行的时间段",
      "B) 数据存储的数据库插槽",
      "C) 插件系统的插槽",
      "D) 用于内存优化的允许属性的固定集合"
    ],
    "answer": 3,
    "explanation": "__slots__ defines a fixed set of instance attributes, preventing the creation of __dict__ for each instance. This significantly reduces memory usage (up to 40-50%) for classes with many instances. __slots__ = ('x', 'y') only allows x and y attributes. Drawbacks: no dynamic attributes, complications with multiple inheritance, and no weak references unless __weakref__ is included.",
    "explanationChinese": "__slots__定义实例属性的固定集合，防止为每个实例创建__dict__。这显著减少了有许多实例的类的内存使用（高达40-50%）。__slots__ = ('x', 'y')只允许x和y属性。缺点：没有动态属性、多重继承复杂化，除非包含__weakref__否则没有弱引用。",
    "diagram": "",
    "terms": [
      "class_inheritance"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 120,
    "q": "What is operator overloading in Python?",
    "qChinese": "Python中的运算符重载是什么？",
    "options": [
      "A) Using too many operators",
      "B) Using operators in conditions",
      "C) Overloading CPU with operations",
      "D) Defining custom behavior for operators via magic methods"
    ],
    "optionsChinese": [
      "A) 使用太多运算符",
      "B) 在条件中使用运算符",
      "C) 用操作过载CPU",
      "D) 通过魔术方法定义运算符的自定义行为"
    ],
    "answer": 3,
    "explanation": "Operator overloading allows custom classes to use operators like +, -, *, ==, etc. by defining magic methods: __add__ for +, __sub__ for -, __mul__ for *, __eq__ for ==. Example: defining __add__ lets you write obj1 + obj2. Python also supports reflected operators (__radd__) and augmented assignment (__iadd__ for +=).",
    "explanationChinese": "运算符重载允许自定义类通过定义魔术方法使用+、-、*、==等运算符：__add__对应+，__sub__对应-，__mul__对应*，__eq__对应==。例如：定义__add__让你可以写obj1 + obj2。Python还支持反射运算符（__radd__）和增强赋值（__iadd__对应+=）。",
    "diagram": "",
    "terms": [
      "class_inheritance"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 121,
    "q": "What is the difference between isinstance() and type()?",
    "qChinese": "isinstance()和type()的区别是什么？",
    "options": [
      "A) They are identical",
      "B) isinstance is deprecated",
      "C) type checks inheritance, isinstance checks exact type",
      "D) isinstance checks inheritance chain, type checks exact type"
    ],
    "optionsChinese": [
      "A) 它们相同",
      "B) isinstance已弃用",
      "C) type检查继承，isinstance检查确切类型",
      "D) isinstance检查继承链，type检查确切类型"
    ],
    "answer": 3,
    "explanation": "isinstance(obj, cls) returns True if obj is an instance of cls or any of its subclasses. type(obj) == cls checks for the exact class only. isinstance() is generally preferred because it respects inheritance. isinstance(True, int) is True (bool inherits from int), but type(True) == int is False. isinstance also accepts tuples: isinstance(x, (int, float)).",
    "explanationChinese": "isinstance(obj, cls)如果obj是cls或其任何子类的实例则返回True。type(obj) == cls只检查确切类。isinstance()通常更受青睐因为它尊重继承。isinstance(True, int)为True（bool继承自int），但type(True) == int为False。isinstance还接受元组：isinstance(x, (int, float))。",
    "diagram": "",
    "terms": [
      "class_inheritance",
      "duck_typing"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 122,
    "q": "What is the __enter__ and __exit__ pattern for?",
    "qChinese": "__enter__和__exit__模式用于什么？",
    "options": [
      "A) Login and logout functionality",
      "B) Opening and closing classes",
      "C) Starting and stopping threads",
      "D) Implementing context managers for 'with' statements"
    ],
    "optionsChinese": [
      "A) 登录和注销功能",
      "B) 打开和关闭类",
      "C) 启动和停止线程",
      "D) 为'with'语句实现上下文管理器"
    ],
    "answer": 3,
    "explanation": "__enter__ and __exit__ make an object usable with the 'with' statement. __enter__ is called when entering the with block and can return a value (bound by 'as'). __exit__ is called when leaving, even if an exception occurs, receiving exception info. If __exit__ returns True, the exception is suppressed. This pattern ensures reliable resource cleanup.",
    "explanationChinese": "__enter__和__exit__使对象可以与'with'语句一起使用。__enter__在进入with块时调用，可以返回值（由'as'绑定）。__exit__在离开时调用，即使发生异常也会调用，接收异常信息。如果__exit__返回True，异常被抑制。这种模式确保可靠的资源清理。",
    "diagram": "",
    "terms": [
      "context_manager"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 123,
    "q": "What is a mixin class in Python?",
    "qChinese": "Python中的mixin类是什么？",
    "options": [
      "A) A class that mixes data types",
      "B) A class that randomly assigns methods",
      "C) A class that blends two objects",
      "D) A class providing methods for use in multiple inheritance"
    ],
    "optionsChinese": [
      "A) 混合数据类型的类",
      "B) 随机分配方法的类",
      "C) 混合两个对象的类",
      "D) 提供方法供多重继承使用的类"
    ],
    "answer": 3,
    "explanation": "A mixin is a class that provides methods to other classes through multiple inheritance but is not meant to stand alone. Mixins add functionality without being a primary base class. For example, a LoggingMixin might add logging methods to any class. Mixins should be small, focused, and use super() for cooperative inheritance. They promote code reuse without deep hierarchies.",
    "explanationChinese": "mixin是通过多重继承向其他类提供方法的类，但不打算单独使用。Mixin在不作为主要基类的情况下添加功能。例如，LoggingMixin可以向任何类添加日志方法。Mixin应该小而专注，使用super()进行协作继承。它们促进代码重用而不需要深层次结构。",
    "diagram": "",
    "terms": [
      "class_inheritance"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 124,
    "q": "What is the __new__ method used for?",
    "qChinese": "__new__方法用于什么？",
    "options": [
      "A) Creating new classes",
      "B) Creating new namespaces",
      "C) Importing new modules",
      "D) Creating the instance before __init__ initializes it"
    ],
    "optionsChinese": [
      "A) 创建新类",
      "B) 创建新命名空间",
      "C) 导入新模块",
      "D) 在__init__初始化之前创建实例"
    ],
    "answer": 3,
    "explanation": "__new__ is a static method called before __init__ to create and return a new instance. It receives the class as its first argument. __new__ is rarely overridden, but it is essential for immutable types (like subclassing int or str), implementing singletons, and metaclass programming. __new__ creates the object, __init__ initializes its attributes.",
    "explanationChinese": "__new__是在__init__之前调用的静态方法，用于创建并返回新实例。它接收类作为第一个参数。__new__很少被覆盖，但对于不可变类型（如子类化int或str）、实现单例模式和元类编程至关重要。__new__创建对象，__init__初始化其属性。",
    "diagram": "",
    "terms": [
      "class_inheritance"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 125,
    "q": "What is the descriptor protocol in Python?",
    "qChinese": "Python中的描述符协议是什么？",
    "options": [
      "A) A way to describe variables",
      "B) A documentation standard",
      "C) A protocol for network communication",
      "D) Objects with __get__, __set__, or __delete__ that customize attribute access"
    ],
    "optionsChinese": [
      "A) 描述变量的方式",
      "B) 文档标准",
      "C) 网络通信协议",
      "D) 具有__get__、__set__或__delete__的对象，自定义属性访问"
    ],
    "answer": 3,
    "explanation": "Descriptors are objects defining __get__, __set__, and/or __delete__ methods that customize attribute access on another class. Data descriptors define __set__ or __delete__; non-data descriptors only define __get__. property, classmethod, and staticmethod are all implemented as descriptors. Descriptors are Python's mechanism behind attribute lookup and are fundamental to the language.",
    "explanationChinese": "描述符是定义了__get__、__set__和/或__delete__方法的对象，用于自定义另一个类的属性访问。数据描述符定义__set__或__delete__；非数据描述符只定义__get__。property、classmethod和staticmethod都作为描述符实现。描述符是Python属性查找背后的机制，是语言的基础。",
    "diagram": "",
    "terms": [
      "class_inheritance",
      "decorator"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 126,
    "q": "How do you import a specific function from a module?",
    "qChinese": "如何从模块导入特定函数？",
    "options": [
      "A) import math.sqrt",
      "B) using math.sqrt",
      "C) include math.sqrt",
      "D) from math import sqrt"
    ],
    "optionsChinese": [
      "A) import math.sqrt",
      "B) using math.sqrt",
      "C) include math.sqrt",
      "D) from math import sqrt"
    ],
    "answer": 3,
    "explanation": "'from math import sqrt' imports only the sqrt function, allowing you to call sqrt(16) directly without the module prefix. 'import math' imports the whole module requiring math.sqrt(16). 'from math import *' imports everything but is discouraged as it pollutes the namespace. Use aliases: from math import sqrt as square_root for clarity.",
    "explanationChinese": "'from math import sqrt'只导入sqrt函数，允许你直接调用sqrt(16)而不需要模块前缀。'import math'导入整个模块，需要math.sqrt(16)。'from math import *'导入所有但不推荐，因为它污染命名空间。使用别名：from math import sqrt as square_root以提高清晰度。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 127,
    "q": "What is a Python package?",
    "qChinese": "什么是Python包？",
    "options": [
      "A) A compressed Python file",
      "B) A pip installation file",
      "C) A single Python module",
      "D) A directory with __init__.py containing modules"
    ],
    "optionsChinese": [
      "A) 压缩的Python文件",
      "B) pip安装文件",
      "C) 单个Python模块",
      "D) 包含__init__.py的模块目录"
    ],
    "answer": 3,
    "explanation": "A Python package is a directory containing modules and an __init__.py file (which can be empty). The __init__.py marks the directory as a package, enabling imports like 'from package import module'. Since Python 3.3, namespace packages allow packages without __init__.py, but regular packages with __init__.py are still the standard for most projects.",
    "explanationChinese": "Python包是包含模块和__init__.py文件（可以为空）的目录。__init__.py将目录标记为包，启用如'from package import module'的导入。自Python 3.3起，命名空间包允许不带__init__.py的包，但带__init__.py的常规包仍然是大多数项目的标准。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 128,
    "q": "What does 'if __name__ == \"__main__\":' do?",
    "qChinese": "'if __name__ == \"__main__\":'做什么？",
    "options": [
      "A) Checks if the module is the newest version",
      "B) Creates the main module",
      "C) Names the main function",
      "D) Runs code only when the file is executed directly"
    ],
    "optionsChinese": [
      "A) 检查模块是否是最新版本",
      "B) 创建主模块",
      "C) 命名主函数",
      "D) 仅当文件直接执行时运行代码"
    ],
    "answer": 3,
    "explanation": "When a Python file is run directly, __name__ is set to '__main__'. When imported as a module, __name__ is set to the module's name. This guard ensures code inside the block only runs during direct execution, not when imported. It is essential for making modules both importable and executable, a common pattern for test code and CLI entry points.",
    "explanationChinese": "当Python文件直接运行时，__name__被设置为'__main__'。当作为模块导入时，__name__被设置为模块名。这个守卫确保块内代码仅在直接执行时运行，而不是在导入时。它对于使模块既可导入又可执行至关重要，是测试代码和CLI入口点的常见模式。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 129,
    "q": "How do you create a virtual environment in Python 3?",
    "qChinese": "如何在Python 3中创建虚拟环境？",
    "options": [
      "A) pip install venv",
      "B) python --venv myenv",
      "C) virtualenv create myenv",
      "D) python -m venv myenv"
    ],
    "optionsChinese": [
      "A) pip install venv",
      "B) python --venv myenv",
      "C) virtualenv create myenv",
      "D) python -m venv myenv"
    ],
    "answer": 3,
    "explanation": "'python -m venv myenv' creates a virtual environment using Python's built-in venv module. Activate it with 'source myenv/bin/activate' on Unix or 'myenv\\Scripts\\activate' on Windows. Virtual environments isolate project dependencies, preventing conflicts between projects. The venv module is included in Python 3.3+ and does not require separate installation.",
    "explanationChinese": "'python -m venv myenv'使用Python内置的venv模块创建虚拟环境。在Unix上用'source myenv/bin/activate'激活，Windows上用'myenv\\Scripts\\activate'。虚拟环境隔离项目依赖，防止项目间冲突。venv模块包含在Python 3.3+中，不需要单独安装。",
    "diagram": "",
    "terms": [
      "virtual_environment"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 130,
    "q": "What is the purpose of requirements.txt?",
    "qChinese": "requirements.txt的目的是什么？",
    "options": [
      "A) Lists Python syntax rules",
      "B) Stores environment variables",
      "C) Contains project documentation",
      "D) Lists project dependencies with versions"
    ],
    "optionsChinese": [
      "A) 列出Python语法规则",
      "B) 存储环境变量",
      "C) 包含项目文档",
      "D) 列出带版本的项目依赖"
    ],
    "answer": 3,
    "explanation": "requirements.txt lists project dependencies with optional version constraints. Generate it with 'pip freeze > requirements.txt'. Install dependencies with 'pip install -r requirements.txt'. Format: package==version for exact versions, package>=version for minimum. This enables reproducible environments across machines and is standard practice for Python project dependency management.",
    "explanationChinese": "requirements.txt列出带可选版本约束的项目依赖。用'pip freeze > requirements.txt'生成。用'pip install -r requirements.txt'安装依赖。格式：package==version表示精确版本，package>=version表示最低版本。这使跨机器的可重现环境成为可能，是Python项目依赖管理的标准实践。",
    "diagram": "",
    "terms": [
      "virtual_environment"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 131,
    "q": "What is the difference between 'import module' and 'from module import *'?",
    "qChinese": "'import module'和'from module import *'的区别是什么？",
    "options": [
      "A) They are identical",
      "B) import only gets classes",
      "C) from * is faster",
      "D) import keeps namespace; from * puts all names in current scope"
    ],
    "optionsChinese": [
      "A) 它们相同",
      "B) import只获取类",
      "C) from *更快",
      "D) import保持命名空间；from *将所有名称放入当前作用域"
    ],
    "answer": 3,
    "explanation": "'import module' keeps all names under the module namespace (module.func()). 'from module import *' imports all public names directly into the current scope (func()). Wildcard imports are discouraged in production code because they can shadow existing names and make it unclear where names come from. The __all__ variable controls what * imports.",
    "explanationChinese": "'import module'将所有名称保持在模块命名空间下（module.func()）。'from module import *'将所有公共名称直接导入当前作用域（func()）。通配符导入在生产代码中不被推荐，因为它们可能遮蔽现有名称，使名称来源不清楚。__all__变量控制*导入什么。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 132,
    "q": "What does pip stand for and what does it do?",
    "qChinese": "pip代表什么，它做什么？",
    "options": [
      "A) Python Internal Package - compiles code",
      "B) Package Import Protocol - manages imports",
      "C) Python Installation Program - installs Python",
      "D) Pip Installs Packages - installs Python packages"
    ],
    "optionsChinese": [
      "A) Python Internal Package - 编译代码",
      "B) Package Import Protocol - 管理导入",
      "C) Python Installation Program - 安装Python",
      "D) Pip Installs Packages - 安装Python包"
    ],
    "answer": 3,
    "explanation": "pip (Pip Installs Packages) is Python's package manager that downloads and installs packages from PyPI (Python Package Index). Common commands: pip install package, pip uninstall package, pip list, pip freeze. pip automatically resolves dependencies. Since Python 3.4, pip is included with Python. Use pip within a virtual environment for project isolation.",
    "explanationChinese": "pip（Pip Installs Packages）是Python的包管理器，从PyPI（Python包索引）下载和安装包。常用命令：pip install package, pip uninstall package, pip list, pip freeze。pip自动解析依赖。自Python 3.4起，pip随Python一起包含。在虚拟环境中使用pip进行项目隔离。",
    "diagram": "",
    "terms": [
      "virtual_environment"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 133,
    "q": "What is the __all__ variable used for in a module?",
    "qChinese": "模块中__all__变量用于什么？",
    "options": [
      "A) Lists all classes in the module",
      "B) Defines all global variables",
      "C) Shows all module dependencies",
      "D) Controls what is exported with 'from module import *'"
    ],
    "optionsChinese": [
      "A) 列出模块中的所有类",
      "B) 定义所有全局变量",
      "C) 显示所有模块依赖",
      "D) 控制'from module import *'导出什么"
    ],
    "answer": 3,
    "explanation": "__all__ is a list of strings defining which names are exported when 'from module import *' is used. If __all__ is defined, only those names are imported. If not defined, all names not starting with underscore are imported. It serves as the module's public API declaration and helps tools like linters understand the intended public interface.",
    "explanationChinese": "__all__是一个字符串列表，定义当使用'from module import *'时导出哪些名称。如果定义了__all__，只有那些名称被导入。如果未定义，所有不以下划线开头的名称都被导入。它作为模块的公共API声明，帮助linter等工具理解预期的公共接口。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 134,
    "q": "What is the sys module used for?",
    "qChinese": "sys模块用于什么？",
    "options": [
      "A) System administration",
      "B) Managing system users",
      "C) Creating system files",
      "D) Accessing Python interpreter settings and system-specific parameters"
    ],
    "optionsChinese": [
      "A) 系统管理",
      "B) 管理系统用户",
      "C) 创建系统文件",
      "D) 访问Python解释器设置和系统特定参数"
    ],
    "answer": 3,
    "explanation": "The sys module provides access to Python interpreter variables and functions. sys.argv contains command-line arguments. sys.path lists module search paths. sys.exit() terminates the program. sys.stdin/stdout/stderr are standard I/O streams. sys.version shows the Python version. sys.getrecursionlimit() and sys.setrecursionlimit() manage recursion depth.",
    "explanationChinese": "sys模块提供对Python解释器变量和函数的访问。sys.argv包含命令行参数。sys.path列出模块搜索路径。sys.exit()终止程序。sys.stdin/stdout/stderr是标准I/O流。sys.version显示Python版本。sys.getrecursionlimit()和sys.setrecursionlimit()管理递归深度。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 135,
    "q": "What is a relative import in Python?",
    "qChinese": "Python中的相对导入是什么？",
    "options": [
      "A) Importing from a relative URL",
      "B) Importing based on file modification time",
      "C) Importing related modules",
      "D) Importing using dots to indicate current/parent package"
    ],
    "optionsChinese": [
      "A) 从相对URL导入",
      "B) 基于文件修改时间导入",
      "C) 导入相关模块",
      "D) 使用点号指示当前/父包进行导入"
    ],
    "answer": 3,
    "explanation": "Relative imports use dot notation to import from the current or parent package. 'from . import module' imports from the same package. 'from .. import module' imports from the parent package. 'from .sibling import func' imports from a sibling module. Relative imports only work inside packages and cannot be used in top-level scripts run directly.",
    "explanationChinese": "相对导入使用点号表示法从当前或父包导入。'from . import module'从同一包导入。'from .. import module'从父包导入。'from .sibling import func'从兄弟模块导入。相对导入只在包内工作，不能在直接运行的顶级脚本中使用。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 136,
    "q": "What is the os module commonly used for?",
    "qChinese": "os模块通常用于什么？",
    "options": [
      "A) Opening web browsers",
      "B) Optimizing code speed",
      "C) Operating on strings",
      "D) Interacting with the operating system (files, paths, env)"
    ],
    "optionsChinese": [
      "A) 打开网络浏览器",
      "B) 优化代码速度",
      "C) 操作字符串",
      "D) 与操作系统交互（文件、路径、环境）"
    ],
    "answer": 3,
    "explanation": "The os module provides operating system interactions: os.path for path manipulation, os.listdir() for directory contents, os.mkdir() for creating directories, os.environ for environment variables, and os.getcwd() for current directory. For modern path handling, pathlib (Python 3.4+) is preferred over os.path for its object-oriented, more readable API.",
    "explanationChinese": "os模块提供操作系统交互：os.path用于路径操作，os.listdir()获取目录内容，os.mkdir()创建目录，os.environ获取环境变量，os.getcwd()获取当前目录。对于现代路径处理，pathlib（Python 3.4+）因其面向对象、更可读的API而优于os.path。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 137,
    "q": "What is pathlib in Python 3?",
    "qChinese": "Python 3中的pathlib是什么？",
    "options": [
      "A) A library for drawing paths",
      "B) A library for PATH environment variable",
      "C) A URL path parser",
      "D) An object-oriented filesystem path library"
    ],
    "optionsChinese": [
      "A) 绘制路径的库",
      "B) PATH环境变量的库",
      "C) URL路径解析器",
      "D) 面向对象的文件系统路径库"
    ],
    "answer": 3,
    "explanation": "pathlib provides an object-oriented interface for filesystem paths. Path objects support / operator for joining: Path('dir') / 'file.txt'. Methods include .exists(), .is_file(), .read_text(), .mkdir(), .glob(). It is more intuitive than os.path string manipulation. Path objects are cross-platform, automatically handling OS-specific path separators.",
    "explanationChinese": "pathlib为文件系统路径提供面向对象的接口。Path对象支持/运算符进行连接：Path('dir') / 'file.txt'。方法包括.exists()、.is_file()、.read_text()、.mkdir()、.glob()。它比os.path字符串操作更直观。Path对象是跨平台的，自动处理特定操作系统的路径分隔符。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 138,
    "q": "What is the difference between a module and a package?",
    "qChinese": "模块和包的区别是什么？",
    "options": [
      "A) They are the same thing",
      "B) Modules are for Python 2, packages for Python 3",
      "C) A package is a single file; a module is a directory",
      "D) A module is a single file; a package is a directory of modules"
    ],
    "optionsChinese": [
      "A) 它们相同",
      "B) 模块用于Python 2，包用于Python 3",
      "C) 包是单个文件；模块是目录",
      "D) 模块是单个文件；包是模块的目录"
    ],
    "answer": 3,
    "explanation": "A module is a single .py file containing Python code. A package is a directory containing multiple modules and an __init__.py file. Packages organize related modules hierarchically. For example, 'requests' is a package with modules like requests.models, requests.api. Subpackages are packages within packages, creating a tree structure for large codebases.",
    "explanationChinese": "模块是包含Python代码的单个.py文件。包是包含多个模块和__init__.py文件的目录。包按层次组织相关模块。例如，'requests'是一个包含requests.models、requests.api等模块的包。子包是包中的包，为大型代码库创建树状结构。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 139,
    "q": "What is the purpose of setup.py or pyproject.toml?",
    "qChinese": "setup.py或pyproject.toml的目的是什么？",
    "options": [
      "A) Setting up the Python interpreter",
      "B) Configuring IDE settings",
      "C) Setting up virtual environments",
      "D) Configuring package metadata and build instructions"
    ],
    "optionsChinese": [
      "A) 设置Python解释器",
      "B) 配置IDE设置",
      "C) 设置虚拟环境",
      "D) 配置包元数据和构建指令"
    ],
    "answer": 3,
    "explanation": "setup.py (using setuptools) or pyproject.toml (PEP 517/518) define package metadata: name, version, dependencies, entry points, and build configuration. pyproject.toml is the modern standard, replacing setup.py. These files enable 'pip install .' for local development and package distribution via PyPI. They are essential for making Python code distributable.",
    "explanationChinese": "setup.py（使用setuptools）或pyproject.toml（PEP 517/518）定义包元数据：名称、版本、依赖、入口点和构建配置。pyproject.toml是现代标准，取代setup.py。这些文件启用'pip install .'用于本地开发和通过PyPI分发包。它们对于使Python代码可分发至关重要。",
    "diagram": "",
    "terms": [
      "virtual_environment"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 140,
    "q": "What is the importlib module used for?",
    "qChinese": "importlib模块用于什么？",
    "options": [
      "A) Installing packages",
      "B) Fixing import errors",
      "C) Listing all imports",
      "D) Programmatically importing modules at runtime"
    ],
    "optionsChinese": [
      "A) 安装包",
      "B) 修复导入错误",
      "C) 列出所有导入",
      "D) 在运行时以编程方式导入模块"
    ],
    "answer": 3,
    "explanation": "importlib provides functions for programmatic imports. importlib.import_module('os') is equivalent to import os but allows dynamic module names from strings. importlib.reload() re-imports a previously imported module. This is useful for plugin systems, dynamic loading, and testing. It replaced the deprecated __import__ for most dynamic import use cases.",
    "explanationChinese": "importlib提供编程式导入的函数。importlib.import_module('os')等同于import os但允许从字符串动态获取模块名。importlib.reload()重新导入先前导入的模块。这对插件系统、动态加载和测试很有用。它替代了已弃用的__import__用于大多数动态导入用例。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 141,
    "q": "How do you open a file for reading in Python?",
    "qChinese": "如何在Python中打开文件进行读取？",
    "options": [
      "A) file = read('file.txt')",
      "B) file = load('file.txt')",
      "C) file = File('file.txt')",
      "D) file = open('file.txt', 'r')"
    ],
    "optionsChinese": [
      "A) file = read('file.txt')",
      "B) file = load('file.txt')",
      "C) file = File('file.txt')",
      "D) file = open('file.txt', 'r')"
    ],
    "answer": 3,
    "explanation": "open('file.txt', 'r') opens a file for reading. The mode 'r' is default and can be omitted. Other modes: 'w' (write), 'a' (append), 'rb' (read binary), 'x' (exclusive create). Always use the 'with' statement for automatic closing: with open('file.txt') as f. The encoding parameter defaults to the system encoding; specify encoding='utf-8' for portability.",
    "explanationChinese": "open('file.txt', 'r')打开文件进行读取。模式'r'是默认的，可以省略。其他模式：'w'（写入）、'a'（追加）、'rb'（读取二进制）、'x'（独占创建）。始终使用'with'语句自动关闭：with open('file.txt') as f。encoding参数默认为系统编码；为可移植性指定encoding='utf-8'。",
    "diagram": "",
    "terms": [
      "context_manager"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 142,
    "q": "Why should you use 'with open()' instead of just open()?",
    "qChinese": "为什么应该使用'with open()'而不是仅使用open()？",
    "options": [
      "A) It is faster",
      "B) It supports more file formats",
      "C) It allows writing",
      "D) It automatically closes the file, even if an exception occurs"
    ],
    "optionsChinese": [
      "A) 它更快",
      "B) 它支持更多文件格式",
      "C) 它允许写入",
      "D) 它自动关闭文件，即使发生异常"
    ],
    "answer": 3,
    "explanation": "The 'with' statement ensures the file is properly closed when the block exits, even if an exception occurs. Without it, you must manually call f.close(), and forgetting to do so can lead to resource leaks and data corruption. The 'with' statement uses the context manager protocol (__enter__/__exit__) to guarantee cleanup, making it the recommended file handling pattern.",
    "explanationChinese": "'with'语句确保当块退出时文件被正确关闭，即使发生异常。没有它，你必须手动调用f.close()，忘记这样做可能导致资源泄漏和数据损坏。'with'语句使用上下文管理器协议（__enter__/__exit__）来保证清理，使其成为推荐的文件处理模式。",
    "diagram": "",
    "terms": [
      "context_manager"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 143,
    "q": "What does the contextlib.contextmanager decorator do?",
    "qChinese": "contextlib.contextmanager装饰器做什么？",
    "options": [
      "A) Creates a class-based context manager",
      "B) Creates thread-safe contexts",
      "C) Manages program context",
      "D) Turns a generator function into a context manager"
    ],
    "optionsChinese": [
      "A) 创建基于类的上下文管理器",
      "B) 创建线程安全上下文",
      "C) 管理程序上下文",
      "D) 将生成器函数转换为上下文管理器"
    ],
    "answer": 3,
    "explanation": "@contextmanager allows creating context managers using a generator with a single yield. Code before yield runs on __enter__, code after runs on __exit__. Example: @contextmanager def timer(): start = time.time(); yield; print(time.time() - start). This is simpler than writing a class with __enter__/__exit__ for straightforward setup/teardown patterns.",
    "explanationChinese": "@contextmanager允许使用带单个yield的生成器创建上下文管理器。yield之前的代码在__enter__时运行，之后的代码在__exit__时运行。例如：@contextmanager def timer(): start = time.time(); yield; print(time.time() - start)。这比为简单的设置/拆除模式编写带__enter__/__exit__的类更简单。",
    "diagram": "",
    "terms": [
      "context_manager",
      "generator",
      "decorator"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 144,
    "q": "What is the correct way to handle multiple exceptions?",
    "qChinese": "处理多个异常的正确方式是什么？",
    "options": [
      "A) except Error1, Error2:",
      "B) except [Error1, Error2]:",
      "C) except Error1 and Error2:",
      "D) except (Error1, Error2):"
    ],
    "optionsChinese": [
      "A) except Error1, Error2:",
      "B) except [Error1, Error2]:",
      "C) except Error1 and Error2:",
      "D) except (Error1, Error2):"
    ],
    "answer": 3,
    "explanation": "To catch multiple exception types in one block, use a tuple: except (ValueError, TypeError): or except (ValueError, TypeError) as e:. Each exception type can also have its own except block for different handling. Order matters: put more specific exceptions before general ones. In Python 3, except Error1, Error2 is a syntax error.",
    "explanationChinese": "要在一个块中捕获多种异常类型，使用元组：except (ValueError, TypeError):或except (ValueError, TypeError) as e:。每种异常类型也可以有自己的except块进行不同处理。顺序很重要：将更具体的异常放在一般异常之前。在Python 3中，except Error1, Error2是语法错误。",
    "diagram": "",
    "terms": [
      "exception_handling"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 145,
    "q": "What is the purpose of the 'finally' block in exception handling?",
    "qChinese": "异常处理中'finally'块的目的是什么？",
    "options": [
      "A) Runs only when no exception occurs",
      "B) Runs only when an exception occurs",
      "C) Finalizes the exception object",
      "D) Runs always, whether or not an exception occurred"
    ],
    "optionsChinese": [
      "A) 仅当没有异常时运行",
      "B) 仅当发生异常时运行",
      "C) 最终化异常对象",
      "D) 无论是否发生异常都始终运行"
    ],
    "answer": 3,
    "explanation": "The finally block always executes, regardless of whether an exception was raised, caught, or propagated. It runs even if a return statement is in the try or except block. This makes it ideal for cleanup code: closing files, releasing locks, or disconnecting from databases. The finally block guarantees execution, making it essential for resource management.",
    "explanationChinese": "finally块始终执行，无论异常是否被引发、捕获或传播。即使try或except块中有return语句也会运行。这使其非常适合清理代码：关闭文件、释放锁或断开数据库连接。finally块保证执行，使其对资源管理至关重要。",
    "diagram": "",
    "terms": [
      "exception_handling"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 146,
    "q": "What does 'raise' do in Python?",
    "qChinese": "Python中'raise'做什么？",
    "options": [
      "A) Increases a variable's value",
      "B) Promotes a variable to global scope",
      "C) Elevates function priority",
      "D) Manually triggers an exception"
    ],
    "optionsChinese": [
      "A) 增加变量的值",
      "B) 将变量提升到全局作用域",
      "C) 提升函数优先级",
      "D) 手动触发异常"
    ],
    "answer": 3,
    "explanation": "'raise' manually triggers an exception. raise ValueError('invalid input') creates and raises a ValueError. Bare 'raise' re-raises the current exception in an except block, preserving the traceback. raise ExceptionType from cause creates exception chaining. Custom exceptions should inherit from Exception (not BaseException) for proper handling by generic except clauses.",
    "explanationChinese": "'raise'手动触发异常。raise ValueError('invalid input')创建并引发ValueError。裸'raise'在except块中重新引发当前异常，保留回溯。raise ExceptionType from cause创建异常链。自定义异常应继承自Exception（不是BaseException）以便通用except子句正确处理。",
    "diagram": "",
    "terms": [
      "exception_handling"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 147,
    "q": "What is the 'else' clause in try/except used for?",
    "qChinese": "try/except中的'else'子句用于什么？",
    "options": [
      "A) Runs when any exception occurs",
      "B) Runs before the finally block only",
      "C) Provides an alternative try block",
      "D) Runs when no exception occurred in the try block"
    ],
    "optionsChinese": [
      "A) 当任何异常发生时运行",
      "B) 仅在finally块之前运行",
      "C) 提供替代的try块",
      "D) 当try块中没有异常发生时运行"
    ],
    "answer": 3,
    "explanation": "The else clause in try/except runs only if no exception was raised in the try block. It separates code that might raise exceptions from code that should only run on success. This is cleaner than putting everything in the try block. The full order is: try, except (if error), else (if no error), finally (always). else keeps the try block minimal.",
    "explanationChinese": "try/except中的else子句仅在try块中没有引发异常时运行。它将可能引发异常的代码与仅在成功时运行的代码分开。这比将所有内容放在try块中更干净。完整顺序是：try、except（如果出错）、else（如果没有错误）、finally（总是）。else保持try块最小化。",
    "diagram": "",
    "terms": [
      "exception_handling"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 148,
    "q": "How do you create a custom exception in Python?",
    "qChinese": "如何在Python中创建自定义异常？",
    "options": [
      "A) class MyError(Error):",
      "B) def MyError(Exception):",
      "C) exception MyError:",
      "D) class MyError(Exception):"
    ],
    "optionsChinese": [
      "A) class MyError(Error):",
      "B) def MyError(Exception):",
      "C) exception MyError:",
      "D) class MyError(Exception):"
    ],
    "answer": 3,
    "explanation": "Custom exceptions are created by subclassing Exception: class MyError(Exception): pass. You can add custom attributes and methods. Convention: exception class names end with 'Error'. Custom exceptions should inherit from Exception (or its subclasses), not BaseException. This ensures they are caught by 'except Exception' while allowing KeyboardInterrupt to propagate.",
    "explanationChinese": "自定义异常通过继承Exception创建：class MyError(Exception): pass。你可以添加自定义属性和方法。约定：异常类名以'Error'结尾。自定义异常应继承自Exception（或其子类），而不是BaseException。这确保它们被'except Exception'捕获，同时允许KeyboardInterrupt传播。",
    "diagram": "",
    "terms": [
      "exception_handling",
      "class_inheritance"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 149,
    "q": "What is the difference between reading modes 'r' and 'rb'?",
    "qChinese": "'r'和'rb'读取模式的区别是什么？",
    "options": [
      "A) r is faster, rb is slower",
      "B) r reads text with encoding, rb reads raw bytes",
      "C) r reads binary, rb reads regular",
      "D) They are identical"
    ],
    "optionsChinese": [
      "A) r更快，rb更慢",
      "B) r读取带编码的文本，rb读取原始字节",
      "C) r读取二进制，rb读取常规",
      "D) 它们相同"
    ],
    "answer": 1,
    "explanation": "'r' mode reads text, decoding bytes to strings using the specified encoding (default: system encoding). 'rb' reads raw bytes without decoding, returning bytes objects. Use 'r' for text files (.txt, .csv, .json) and 'rb' for binary files (.jpg, .pdf, .pkl). Mixing modes can corrupt data. Always specify encoding='utf-8' for text mode portability.",
    "explanationChinese": "'r'模式读取文本，使用指定编码（默认：系统编码）将字节解码为字符串。'rb'读取原始字节而不解码，返回bytes对象。对文本文件（.txt、.csv、.json）使用'r'，对二进制文件（.jpg、.pdf、.pkl）使用'rb'。混合模式可能损坏数据。始终为文本模式可移植性指定encoding='utf-8'。",
    "diagram": "",
    "terms": [
      "context_manager"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 150,
    "q": "What does json.dumps() do?",
    "qChinese": "json.dumps()做什么？",
    "options": [
      "A) Deletes a JSON file",
      "B) Converts a Python object to a JSON string",
      "C) Downloads JSON from URL",
      "D) Dumps memory to JSON"
    ],
    "optionsChinese": [
      "A) 删除JSON文件",
      "B) 将Python对象转换为JSON字符串",
      "C) 从URL下载JSON",
      "D) 将内存转储为JSON"
    ],
    "answer": 1,
    "explanation": "json.dumps() serializes a Python object (dict, list, etc.) to a JSON-formatted string. json.loads() does the reverse. json.dump() writes directly to a file, and json.load() reads from a file. Use indent parameter for pretty printing: json.dumps(data, indent=2). The default parameter handles non-serializable objects via a custom serialization function.",
    "explanationChinese": "json.dumps()将Python对象（字典、列表等）序列化为JSON格式的字符串。json.loads()执行反向操作。json.dump()直接写入文件，json.load()从文件读取。使用indent参数美化打印：json.dumps(data, indent=2)。default参数通过自定义序列化函数处理不可序列化的对象。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 151,
    "q": "What is exception chaining with 'raise from'?",
    "qChinese": "'raise from'的异常链是什么？",
    "options": [
      "A) Raising multiple exceptions simultaneously",
      "B) Linking a new exception to its cause for better debugging",
      "C) Importing exceptions from other modules",
      "D) Creating a chain of try/except blocks"
    ],
    "optionsChinese": [
      "A) 同时引发多个异常",
      "B) 将新异常链接到其原因以更好地调试",
      "C) 从其他模块导入异常",
      "D) 创建try/except块链"
    ],
    "answer": 1,
    "explanation": "'raise NewError() from original_error' creates explicit exception chaining, linking the new exception to its cause. The __cause__ attribute stores the original exception. This provides clear tracebacks showing both errors. 'raise NewError() from None' suppresses the chain context. Exception chaining is invaluable for wrapping low-level errors into domain-specific exceptions.",
    "explanationChinese": "'raise NewError() from original_error'创建显式异常链，将新异常链接到其原因。__cause__属性存储原始异常。这提供显示两个错误的清晰回溯。'raise NewError() from None'抑制链上下文。异常链对于将低级错误包装成领域特定异常非常有价值。",
    "diagram": "",
    "terms": [
      "exception_handling"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 152,
    "q": "What is the csv module used for?",
    "qChinese": "csv模块用于什么？",
    "options": [
      "A) Creating spreadsheets",
      "B) Reading and writing CSV files",
      "C) Converting CSV to JSON",
      "D) Compressing CSV files"
    ],
    "optionsChinese": [
      "A) 创建电子表格",
      "B) 读取和写入CSV文件",
      "C) 将CSV转换为JSON",
      "D) 压缩CSV文件"
    ],
    "answer": 1,
    "explanation": "The csv module provides csv.reader and csv.writer for reading and writing CSV files. csv.DictReader reads rows as dictionaries using the header row as keys. csv.DictWriter writes dictionaries to CSV. It handles quoting, escaping, and different delimiters automatically. Always open CSV files with newline='' to prevent issues with line endings across platforms.",
    "explanationChinese": "csv模块提供csv.reader和csv.writer用于读取和写入CSV文件。csv.DictReader将行作为字典读取，使用标题行作为键。csv.DictWriter将字典写入CSV。它自动处理引号、转义和不同分隔符。始终使用newline=''打开CSV文件以防止跨平台的行尾问题。",
    "diagram": "",
    "terms": [
      "context_manager"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 153,
    "q": "What is pickle used for in Python?",
    "qChinese": "Python中pickle用于什么？",
    "options": [
      "A) Data encryption",
      "B) Serializing Python objects to bytes",
      "C) Parsing pickle files",
      "D) Converting to JSON"
    ],
    "optionsChinese": [
      "A) 数据加密",
      "B) 将Python对象序列化为字节",
      "C) 解析pickle文件",
      "D) 转换为JSON"
    ],
    "answer": 1,
    "explanation": "pickle serializes Python objects into a byte stream (pickling) and reconstructs them (unpickling). pickle.dump(obj, file) saves to file; pickle.load(file) restores it. Unlike JSON, pickle handles complex Python objects (classes, functions). WARNING: Never unpickle untrusted data as it can execute arbitrary code. Use JSON for data exchange between systems.",
    "explanationChinese": "pickle将Python对象序列化为字节流（pickling）并重建它们（unpickling）。pickle.dump(obj, file)保存到文件；pickle.load(file)恢复它。与JSON不同，pickle处理复杂的Python对象（类、函数）。警告：永远不要unpickle不受信任的数据，因为它可以执行任意代码。使用JSON在系统之间交换数据。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 154,
    "q": "What are the file writing modes 'w' and 'a'?",
    "qChinese": "文件写入模式'w'和'a'是什么？",
    "options": [
      "A) w=wide, a=abbreviated",
      "B) w=write (overwrite), a=append",
      "C) w=append, a=write",
      "D) w=write-only, a=all-access"
    ],
    "optionsChinese": [
      "A) w=宽，a=缩写",
      "B) w=写入（覆盖），a=追加",
      "C) w=追加，a=写入",
      "D) w=只写，a=全访问"
    ],
    "answer": 1,
    "explanation": "'w' mode opens a file for writing, creating it if it doesn't exist and truncating (erasing) it if it does. 'a' mode opens for appending, adding content to the end without erasing existing content. 'x' mode creates a new file and fails if it already exists. Always consider which mode you need to prevent accidental data loss with 'w' mode.",
    "explanationChinese": "'w'模式打开文件进行写入，如果不存在则创建，如果存在则截断（清除）。'a'模式打开进行追加，在末尾添加内容而不清除现有内容。'x'模式创建新文件，如果已存在则失败。始终考虑你需要哪种模式，以防止'w'模式造成意外数据丢失。",
    "diagram": "",
    "terms": [
      "context_manager"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 155,
    "q": "What does the logging module provide over print()?",
    "qChinese": "logging模块比print()提供了什么？",
    "options": [
      "A) Colored output",
      "B) Severity levels, file output, formatting, and filtering",
      "C) Faster output",
      "D) Automatic error fixing"
    ],
    "optionsChinese": [
      "A) 彩色输出",
      "B) 严重级别、文件输出、格式化和过滤",
      "C) 更快的输出",
      "D) 自动错误修复"
    ],
    "answer": 1,
    "explanation": "The logging module provides severity levels (DEBUG, INFO, WARNING, ERROR, CRITICAL), output to files and streams, custom formatting with timestamps, filtering, and multiple handlers. Unlike print(), logging can be configured once and controlled globally. logging.basicConfig() sets up default configuration. Use logging in production code; reserve print() for quick debugging only.",
    "explanationChinese": "logging模块提供严重级别（DEBUG、INFO、WARNING、ERROR、CRITICAL）、输出到文件和流、带时间戳的自定义格式化、过滤和多个处理器。与print()不同，logging可以配置一次并全局控制。logging.basicConfig()设置默认配置。在生产代码中使用logging；仅将print()保留用于快速调试。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 156,
    "q": "What is the tempfile module used for?",
    "qChinese": "tempfile模块用于什么？",
    "options": [
      "A) Managing templates",
      "B) Creating temporary files and directories",
      "C) Measuring temperature",
      "D) Storing temporary variables"
    ],
    "optionsChinese": [
      "A) 管理模板",
      "B) 创建临时文件和目录",
      "C) 测量温度",
      "D) 存储临时变量"
    ],
    "answer": 1,
    "explanation": "tempfile creates temporary files and directories that are automatically cleaned up. tempfile.NamedTemporaryFile() creates a file with a name in the filesystem. tempfile.TemporaryDirectory() creates a temp directory. Used as context managers, they auto-delete on exit. This is useful for testing, caching, and processing intermediate data without managing cleanup manually.",
    "explanationChinese": "tempfile创建自动清理的临时文件和目录。tempfile.NamedTemporaryFile()在文件系统中创建带名称的文件。tempfile.TemporaryDirectory()创建临时目录。作为上下文管理器使用时，它们在退出时自动删除。这对测试、缓存和处理中间数据很有用，无需手动管理清理。",
    "diagram": "",
    "terms": [
      "context_manager"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 157,
    "q": "What is the difference between read(), readline(), and readlines()?",
    "qChinese": "read()、readline()和readlines()的区别是什么？",
    "options": [
      "A) They all read the entire file",
      "B) read() gets all content, readline() one line, readlines() list of lines",
      "C) read() is for binary, readline() for text",
      "D) They are aliases for the same function"
    ],
    "optionsChinese": [
      "A) 它们都读取整个文件",
      "B) read()获取所有内容，readline()一行，readlines()行列表",
      "C) read()用于二进制，readline()用于文本",
      "D) 它们是同一函数的别名"
    ],
    "answer": 1,
    "explanation": "read() returns the entire file content as a single string. readline() reads one line at a time (including the newline character). readlines() returns a list of all lines. For large files, iterate directly: for line in file. This is most memory-efficient as it reads one line at a time. read(n) reads n characters/bytes for controlled reading.",
    "explanationChinese": "read()将整个文件内容作为单个字符串返回。readline()一次读取一行（包括换行符）。readlines()返回所有行的列表。对于大文件，直接迭代：for line in file。这是最内存高效的，因为它一次读取一行。read(n)读取n个字符/字节用于受控读取。",
    "diagram": "",
    "terms": [
      "context_manager"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 158,
    "q": "What does the 'assert' statement do?",
    "qChinese": "'assert'语句做什么？",
    "options": [
      "A) Prints a message",
      "B) Raises AssertionError if the condition is False",
      "C) Assigns a value",
      "D) Creates a test case"
    ],
    "optionsChinese": [
      "A) 打印消息",
      "B) 如果条件为False则引发AssertionError",
      "C) 赋值",
      "D) 创建测试用例"
    ],
    "answer": 1,
    "explanation": "assert condition, message raises AssertionError if the condition is False. It is used for debugging and internal consistency checks. assert x > 0, 'x must be positive'. Assertions can be disabled with python -O (optimize), so never use them for input validation or security checks. Use them for catching programmer errors during development.",
    "explanationChinese": "assert condition, message如果条件为False则引发AssertionError。它用于调试和内部一致性检查。assert x > 0, 'x must be positive'。断言可以用python -O（优化）禁用，因此永远不要用它们进行输入验证或安全检查。在开发期间用它们来捕获程序员错误。",
    "diagram": "",
    "terms": [
      "exception_handling"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 159,
    "q": "How do you suppress an exception using contextlib?",
    "qChinese": "如何使用contextlib抑制异常？",
    "options": [
      "A) contextlib.ignore(Exception)",
      "B) contextlib.suppress(Exception)",
      "C) contextlib.silence(Exception)",
      "D) contextlib.skip(Exception)"
    ],
    "optionsChinese": [
      "A) contextlib.ignore(Exception)",
      "B) contextlib.suppress(Exception)",
      "C) contextlib.silence(Exception)",
      "D) contextlib.skip(Exception)"
    ],
    "answer": 1,
    "explanation": "contextlib.suppress(*exceptions) is a context manager that silently suppresses specified exceptions. with suppress(FileNotFoundError): os.remove('file.txt') does nothing if the file doesn't exist. This is cleaner than try/except/pass for simple suppression. Only suppress specific exceptions you expect, never use it with bare Exception to avoid hiding bugs.",
    "explanationChinese": "contextlib.suppress(*exceptions)是一个静默抑制指定异常的上下文管理器。with suppress(FileNotFoundError): os.remove('file.txt')如果文件不存在则什么都不做。对于简单的抑制，这比try/except/pass更干净。只抑制你预期的特定异常，永远不要用裸Exception使用它以避免隐藏错误。",
    "diagram": "",
    "terms": [
      "context_manager",
      "exception_handling"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 160,
    "q": "What is the ExceptionGroup introduced in Python 3.11?",
    "qChinese": "Python 3.11中引入的ExceptionGroup是什么？",
    "options": [
      "A) A way to group exception handlers",
      "B) A container for multiple exceptions raised simultaneously",
      "C) A logging group for exceptions",
      "D) A way to categorize exception types"
    ],
    "optionsChinese": [
      "A) 分组异常处理器的方式",
      "B) 同时引发的多个异常的容器",
      "C) 异常的日志分组",
      "D) 分类异常类型的方式"
    ],
    "answer": 1,
    "explanation": "ExceptionGroup (PEP 654) allows raising and handling multiple exceptions simultaneously. Useful for concurrent operations where several tasks may fail. Use 'except*' (exception star) syntax to handle specific types within the group. ExceptionGroup('msg', [Error1(), Error2()]) bundles exceptions. This is essential for asyncio.TaskGroup and modern concurrent error handling patterns.",
    "explanationChinese": "ExceptionGroup（PEP 654）允许同时引发和处理多个异常。对于多个任务可能失败的并发操作很有用。使用'except*'（异常星号）语法处理组内的特定类型。ExceptionGroup('msg', [Error1(), Error2()])捆绑异常。这对asyncio.TaskGroup和现代并发错误处理模式至关重要。",
    "diagram": "",
    "terms": [
      "exception_handling"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 161,
    "q": "What is an iterator in Python?",
    "qChinese": "Python中什么是迭代器？",
    "options": [
      "A) A loop variable",
      "B) An object implementing __iter__ and __next__",
      "C) A function that repeats",
      "D) A type of list"
    ],
    "optionsChinese": [
      "A) 循环变量",
      "B) 实现__iter__和__next__的对象",
      "C) 重复的函数",
      "D) 一种列表"
    ],
    "answer": 1,
    "explanation": "An iterator is an object that implements the iterator protocol: __iter__() returns the iterator itself, and __next__() returns the next value or raises StopIteration when exhausted. For loops internally call iter() on iterables and repeatedly call next() until StopIteration. All generators are iterators, but not all iterators are generators. Iterators are single-pass and stateful.",
    "explanationChinese": "迭代器是实现迭代器协议的对象：__iter__()返回迭代器本身，__next__()返回下一个值或在耗尽时引发StopIteration。for循环内部对可迭代对象调用iter()并重复调用next()直到StopIteration。所有生成器都是迭代器，但不是所有迭代器都是生成器。迭代器是单遍的和有状态的。",
    "diagram": "",
    "terms": [
      "generator"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 162,
    "q": "What is the difference between an iterable and an iterator?",
    "qChinese": "可迭代对象和迭代器的区别是什么？",
    "options": [
      "A) They are the same",
      "B) Iterable has __iter__, iterator has __iter__ and __next__",
      "C) Iterator has __iter__, iterable has __next__",
      "D) Iterables are faster than iterators"
    ],
    "optionsChinese": [
      "A) 它们相同",
      "B) 可迭代对象有__iter__，迭代器有__iter__和__next__",
      "C) 迭代器有__iter__，可迭代对象有__next__",
      "D) 可迭代对象比迭代器快"
    ],
    "answer": 1,
    "explanation": "An iterable is any object with __iter__() that returns an iterator (lists, tuples, strings, dicts). An iterator additionally has __next__() to produce values one by one. Lists are iterables but not iterators: you can create multiple independent iterators from a list. Iterators are consumed after one pass. iter(iterable) creates an iterator from an iterable.",
    "explanationChinese": "可迭代对象是任何具有__iter__()返回迭代器的对象（列表、元组、字符串、字典）。迭代器还有__next__()逐个产生值。列表是可迭代对象但不是迭代器：你可以从列表创建多个独立的迭代器。迭代器在一次遍历后被消耗。iter(iterable)从可迭代对象创建迭代器。",
    "diagram": "",
    "terms": [
      "generator"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 163,
    "q": "What does the 'yield' keyword do in a function?",
    "qChinese": "'yield'关键字在函数中做什么？",
    "options": [
      "A) Returns a value and ends the function",
      "B) Produces a value and suspends the function's state",
      "C) Yields control to another thread",
      "D) Creates a new variable"
    ],
    "optionsChinese": [
      "A) 返回值并结束函数",
      "B) 产生值并暂停函数状态",
      "C) 将控制权让给另一个线程",
      "D) 创建新变量"
    ],
    "answer": 1,
    "explanation": "yield turns a function into a generator. When called, it produces a value and suspends execution, saving all local state. The next call to next() resumes from where it left off. Unlike return, which terminates the function, yield allows the function to produce a sequence of values lazily. Multiple yield statements can exist in one generator function.",
    "explanationChinese": "yield将函数转换为生成器。调用时，它产生一个值并暂停执行，保存所有局部状态。下次调用next()从中断处恢复。与终止函数的return不同，yield允许函数惰性地产生一系列值。一个生成器函数中可以有多个yield语句。",
    "diagram": "",
    "terms": [
      "generator"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 164,
    "q": "What is a generator expression?",
    "qChinese": "什么是生成器表达式？",
    "options": [
      "A) A list comprehension in parentheses",
      "B) A lazy evaluation expression using () that produces values on demand",
      "C) An expression that generates random numbers",
      "D) A regular expression generator"
    ],
    "optionsChinese": [
      "A) 括号中的列表推导式",
      "B) 使用()按需产生值的惰性求值表达式",
      "C) 生成随机数的表达式",
      "D) 正则表达式生成器"
    ],
    "answer": 1,
    "explanation": "Generator expressions use parentheses: (x**2 for x in range(10)). Unlike list comprehensions [x**2 for x in range(10)] which create the entire list in memory, generators produce values lazily one at a time. They are memory-efficient for large datasets. Pass directly to functions: sum(x**2 for x in range(10)). They can only be iterated once.",
    "explanationChinese": "生成器表达式使用圆括号：(x**2 for x in range(10))。与在内存中创建整个列表的列表推导式[x**2 for x in range(10)]不同，生成器惰性地一次产生一个值。它们对大数据集内存效率高。直接传递给函数：sum(x**2 for x in range(10))。它们只能迭代一次。",
    "diagram": "",
    "terms": [
      "generator",
      "list_comprehension"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 165,
    "q": "What does 'yield from' do in Python?",
    "qChinese": "Python中'yield from'做什么？",
    "options": [
      "A) Yields a value from a file",
      "B) Delegates to a sub-generator or iterable",
      "C) Imports yield from another module",
      "D) Creates a new generator from scratch"
    ],
    "optionsChinese": [
      "A) 从文件产生值",
      "B) 委托给子生成器或可迭代对象",
      "C) 从另一个模块导入yield",
      "D) 从头创建新生成器"
    ],
    "answer": 1,
    "explanation": "'yield from iterable' delegates generation to another iterable or sub-generator. It replaces: for item in iterable: yield item, but also properly handles send(), throw(), and close() for sub-generators. This is essential for generator composition and recursive generators. Example: yield from range(5) yields 0, 1, 2, 3, 4 from within a generator.",
    "explanationChinese": "'yield from iterable'将生成委托给另一个可迭代对象或子生成器。它替代了：for item in iterable: yield item，但也正确处理子生成器的send()、throw()和close()。这对生成器组合和递归生成器至关重要。例如：yield from range(5)从生成器内部产生0、1、2、3、4。",
    "diagram": "",
    "terms": [
      "generator"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 166,
    "q": "How does generator.send() work?",
    "qChinese": "generator.send()如何工作？",
    "options": [
      "A) Sends the generator to another function",
      "B) Sends a value into the generator at the yield point",
      "C) Sends an email",
      "D) Sends output to a file"
    ],
    "optionsChinese": [
      "A) 将生成器发送到另一个函数",
      "B) 在yield点向生成器发送值",
      "C) 发送电子邮件",
      "D) 将输出发送到文件"
    ],
    "answer": 1,
    "explanation": "send(value) resumes the generator and sends a value that becomes the result of the yield expression. value = yield produces None initially; gen.send(42) makes value = 42. The first call must be gen.send(None) or next(gen) to advance to the first yield. This enables two-way communication with generators, useful for coroutines and cooperative multitasking.",
    "explanationChinese": "send(value)恢复生成器并发送一个值，该值成为yield表达式的结果。value = yield最初产生None；gen.send(42)使value = 42。第一次调用必须是gen.send(None)或next(gen)以前进到第一个yield。这启用了与生成器的双向通信，对协程和协作式多任务处理很有用。",
    "diagram": "",
    "terms": [
      "generator"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 167,
    "q": "What is the itertools module used for?",
    "qChinese": "itertools模块用于什么？",
    "options": [
      "A) Installing tools",
      "B) Providing efficient iterator building blocks",
      "C) Debugging iterators",
      "D) Converting iterators to lists"
    ],
    "optionsChinese": [
      "A) 安装工具",
      "B) 提供高效的迭代器构建块",
      "C) 调试迭代器",
      "D) 将迭代器转换为列表"
    ],
    "answer": 1,
    "explanation": "itertools provides memory-efficient iterator functions. Key functions: chain() concatenates iterables, cycle() repeats infinitely, islice() slices iterators, product() for cartesian products, permutations() and combinations() for combinatorics, groupby() for grouping, accumulate() for running totals. All return lazy iterators, ideal for processing large datasets.",
    "explanationChinese": "itertools提供内存高效的迭代器函数。关键函数：chain()连接可迭代对象，cycle()无限重复，islice()切片迭代器，product()笛卡尔积，permutations()和combinations()用于组合数学，groupby()分组，accumulate()累计总数。所有都返回惰性迭代器，适合处理大数据集。",
    "diagram": "",
    "terms": [
      "generator"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 168,
    "q": "What does itertools.chain() do?",
    "qChinese": "itertools.chain()做什么？",
    "options": [
      "A) Creates a blockchain",
      "B) Chains multiple iterables into a single iterator",
      "C) Links functions together",
      "D) Creates a chain of exceptions"
    ],
    "optionsChinese": [
      "A) 创建区块链",
      "B) 将多个可迭代对象链接成单个迭代器",
      "C) 将函数链接在一起",
      "D) 创建异常链"
    ],
    "answer": 1,
    "explanation": "itertools.chain(*iterables) takes multiple iterables and yields all elements from the first, then the second, and so on. chain([1,2], [3,4]) yields 1, 2, 3, 4. chain.from_iterable([[1,2], [3,4]]) flattens one level. This is more memory-efficient than concatenating lists with + because it does not create intermediate lists in memory.",
    "explanationChinese": "itertools.chain(*iterables)接受多个可迭代对象，先从第一个产生所有元素，然后第二个，依此类推。chain([1,2], [3,4])产生1、2、3、4。chain.from_iterable([[1,2], [3,4]])展平一层。这比用+连接列表更内存高效，因为它不在内存中创建中间列表。",
    "diagram": "",
    "terms": [
      "generator"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 169,
    "q": "What is the difference between a generator and a list comprehension?",
    "qChinese": "生成器和列表推导式的区别是什么？",
    "options": [
      "A) Generators use [], comprehensions use ()",
      "B) Generators are lazy and use (), comprehensions are eager and use []",
      "C) They produce identical results",
      "D) Comprehensions are slower"
    ],
    "optionsChinese": [
      "A) 生成器使用[]，推导式使用()",
      "B) 生成器是惰性的使用()，推导式是急切的使用[]",
      "C) 它们产生相同的结果",
      "D) 推导式更慢"
    ],
    "answer": 1,
    "explanation": "Generator expressions (x for x in range(n)) produce values lazily on demand, using minimal memory. List comprehensions [x for x in range(n)] create the entire list immediately in memory. Use generators for large datasets where you process one item at a time. Use list comprehensions when you need random access, length, or will iterate multiple times.",
    "explanationChinese": "生成器表达式(x for x in range(n))按需惰性地产生值，使用最少内存。列表推导式[x for x in range(n)]立即在内存中创建整个列表。对于一次处理一个项目的大数据集使用生成器。当需要随机访问、长度或多次迭代时使用列表推导式。",
    "diagram": "",
    "terms": [
      "generator",
      "list_comprehension"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 170,
    "q": "What does next() do with an iterator?",
    "qChinese": "next()对迭代器做什么？",
    "options": [
      "A) Moves to the previous element",
      "B) Returns the next value or raises StopIteration",
      "C) Skips an element",
      "D) Resets the iterator"
    ],
    "optionsChinese": [
      "A) 移到前一个元素",
      "B) 返回下一个值或引发StopIteration",
      "C) 跳过一个元素",
      "D) 重置迭代器"
    ],
    "answer": 1,
    "explanation": "next(iterator) calls the iterator's __next__() method, returning the next value. When exhausted, it raises StopIteration. A default value prevents the error: next(iter, default). For example: it = iter([1,2]); next(it) returns 1; next(it) returns 2; next(it) raises StopIteration. next(it, 'done') returns 'done' instead of raising an error.",
    "explanationChinese": "next(iterator)调用迭代器的__next__()方法，返回下一个值。耗尽时引发StopIteration。默认值防止错误：next(iter, default)。例如：it = iter([1,2]); next(it)返回1; next(it)返回2; next(it)引发StopIteration。next(it, 'done')返回'done'而不是引发错误。",
    "diagram": "",
    "terms": [
      "generator"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 171,
    "q": "How do you create an infinite generator?",
    "qChinese": "如何创建无限生成器？",
    "options": [
      "A) def gen(): while True: yield value",
      "B) def gen(): for i in infinity: yield i",
      "C) gen = infinite_generator()",
      "D) def gen(): return infinite"
    ],
    "optionsChinese": [
      "A) def gen(): while True: yield value",
      "B) def gen(): for i in infinity: yield i",
      "C) gen = infinite_generator()",
      "D) def gen(): return infinite"
    ],
    "answer": 0,
    "explanation": "An infinite generator uses while True with yield: def count(): n = 0; while True: yield n; n += 1. It produces values endlessly, relying on the consumer to stop. itertools.count() and itertools.cycle() are built-in infinite iterators. Infinite generators are memory-efficient since they only hold current state. Use itertools.islice() to take a finite number of values.",
    "explanationChinese": "无限生成器使用while True配合yield：def count(): n = 0; while True: yield n; n += 1。它无限产生值，依赖消费者来停止。itertools.count()和itertools.cycle()是内置的无限迭代器。无限生成器内存高效，因为它们只保持当前状态。使用itertools.islice()取有限数量的值。",
    "diagram": "",
    "terms": [
      "generator"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 172,
    "q": "What does itertools.product() do?",
    "qChinese": "itertools.product()做什么？",
    "options": [
      "A) Multiplies numbers",
      "B) Creates cartesian product of iterables",
      "C) Produces product descriptions",
      "D) Calculates dot product"
    ],
    "optionsChinese": [
      "A) 乘以数字",
      "B) 创建可迭代对象的笛卡尔积",
      "C) 产生产品描述",
      "D) 计算点积"
    ],
    "answer": 1,
    "explanation": "itertools.product() computes the cartesian product of input iterables, equivalent to nested for loops. product('AB', '12') yields ('A','1'), ('A','2'), ('B','1'), ('B','2'). The repeat parameter enables product(range(2), repeat=3) for all 3-digit binary numbers. This is cleaner and more efficient than writing multiple nested loops.",
    "explanationChinese": "itertools.product()计算输入可迭代对象的笛卡尔积，等同于嵌套for循环。product('AB', '12')产生('A','1'), ('A','2'), ('B','1'), ('B','2')。repeat参数启用product(range(2), repeat=3)用于所有3位二进制数。这比编写多个嵌套循环更干净和高效。",
    "diagram": "",
    "terms": [
      "generator"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 173,
    "q": "What is the purpose of generator.throw()?",
    "qChinese": "generator.throw()的目的是什么？",
    "options": [
      "A) Throws the generator away",
      "B) Throws an exception at the yield point inside the generator",
      "C) Sends a value to the generator",
      "D) Throws an error to the caller"
    ],
    "optionsChinese": [
      "A) 丢弃生成器",
      "B) 在生成器内部的yield点抛出异常",
      "C) 向生成器发送值",
      "D) 向调用者抛出错误"
    ],
    "answer": 1,
    "explanation": "generator.throw(type, value, traceback) raises an exception at the point where the generator was paused (at yield). The generator can catch it with try/except. If not caught, it propagates to the caller. This enables error signaling to generators, useful for cancellation, timeout handling, and coroutine-style programming patterns in cooperative multitasking.",
    "explanationChinese": "generator.throw(type, value, traceback)在生成器暂停的点（yield处）引发异常。生成器可以用try/except捕获它。如果未捕获，它传播到调用者。这启用了向生成器的错误信号，对取消、超时处理和协作式多任务编程模式中的协程式编程很有用。",
    "diagram": "",
    "terms": [
      "generator",
      "exception_handling"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 174,
    "q": "What does itertools.groupby() do?",
    "qChinese": "itertools.groupby()做什么？",
    "options": [
      "A) Groups elements in a database",
      "B) Groups consecutive elements by a key function",
      "C) Creates groups of random size",
      "D) Groups files in a directory"
    ],
    "optionsChinese": [
      "A) 在数据库中分组元素",
      "B) 按键函数分组连续元素",
      "C) 创建随机大小的组",
      "D) 分组目录中的文件"
    ],
    "answer": 1,
    "explanation": "itertools.groupby(iterable, key) groups consecutive elements that have the same key value. IMPORTANT: data must be sorted by the key first, as groupby only groups adjacent elements. For [1,1,2,2,1], groupby produces (1,[1,1]), (2,[2,2]), (1,[1]) not (1,[1,1,1]). Sort first for full grouping. The key function defaults to identity.",
    "explanationChinese": "itertools.groupby(iterable, key)将具有相同键值的连续元素分组。重要：数据必须先按键排序，因为groupby只分组相邻元素。对于[1,1,2,2,1]，groupby产生(1,[1,1]), (2,[2,2]), (1,[1])而不是(1,[1,1,1])。先排序以获得完整分组。键函数默认为恒等函数。",
    "diagram": "",
    "terms": [
      "generator"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 175,
    "q": "How do you make a custom class iterable?",
    "qChinese": "如何使自定义类可迭代？",
    "options": [
      "A) Add a loop method",
      "B) Implement __iter__ and __next__ methods",
      "C) Inherit from list",
      "D) Add an iterate() method"
    ],
    "optionsChinese": [
      "A) 添加loop方法",
      "B) 实现__iter__和__next__方法",
      "C) 继承自list",
      "D) 添加iterate()方法"
    ],
    "answer": 1,
    "explanation": "To make a class iterable, implement __iter__() returning an iterator (often self) and __next__() returning the next value or raising StopIteration. Alternatively, __iter__ can return a generator: def __iter__(self): for item in self.data: yield item. This is simpler and preferred when the iteration logic is straightforward. Implementing __getitem__ also provides iteration.",
    "explanationChinese": "要使类可迭代，实现__iter__()返回迭代器（通常是self）和__next__()返回下一个值或引发StopIteration。或者，__iter__可以返回生成器：def __iter__(self): for item in self.data: yield item。当迭代逻辑简单时，这更简单且更受青睐。实现__getitem__也提供迭代。",
    "diagram": "",
    "terms": [
      "generator",
      "duck_typing"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 176,
    "q": "What does str.split() do without arguments?",
    "qChinese": "str.split()不带参数时做什么？",
    "options": [
      "A) Splits on commas",
      "B) Splits on any whitespace and removes empty strings",
      "C) Returns the string unchanged",
      "D) Splits each character"
    ],
    "optionsChinese": [
      "A) 按逗号分割",
      "B) 按任何空白字符分割并删除空字符串",
      "C) 返回不变的字符串",
      "D) 分割每个字符"
    ],
    "answer": 1,
    "explanation": "str.split() without arguments splits on any whitespace (spaces, tabs, newlines) and removes empty strings from the result. 'a  b  c'.split() gives ['a', 'b', 'c']. With an argument, split(',') splits on commas but keeps empty strings: 'a,,b'.split(',') gives ['a', '', 'b']. The maxsplit parameter limits the number of splits performed.",
    "explanationChinese": "str.split()不带参数时按任何空白字符（空格、制表符、换行符）分割，并从结果中删除空字符串。'a  b  c'.split()给出['a', 'b', 'c']。带参数时，split(',')按逗号分割但保留空字符串：'a,,b'.split(',')给出['a', '', 'b']。maxsplit参数限制执行的分割次数。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 177,
    "q": "What does str.join() do?",
    "qChinese": "str.join()做什么？",
    "options": [
      "A) Joins two strings with +",
      "B) Joins an iterable of strings with the separator",
      "C) Joins a string to a list",
      "D) Combines two lists"
    ],
    "optionsChinese": [
      "A) 用+连接两个字符串",
      "B) 用分隔符连接字符串的可迭代对象",
      "C) 将字符串连接到列表",
      "D) 合并两个列表"
    ],
    "answer": 1,
    "explanation": "str.join(iterable) concatenates strings from an iterable with the separator string. ', '.join(['a', 'b', 'c']) gives 'a, b, c'. The separator is the string calling join. All elements must be strings; use map(str, items) for non-strings. join() is much more efficient than repeated + concatenation because it allocates memory once for the result.",
    "explanationChinese": "str.join(iterable)用分隔符字符串连接可迭代对象中的字符串。', '.join(['a', 'b', 'c'])给出'a, b, c'。分隔符是调用join的字符串。所有元素必须是字符串；对非字符串使用map(str, items)。join()比重复的+连接高效得多，因为它为结果一次性分配内存。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 178,
    "q": "What are f-strings in Python 3.6+?",
    "qChinese": "Python 3.6+中的f-string是什么？",
    "options": [
      "A) File strings",
      "B) Formatted string literals with embedded expressions",
      "C) Fast strings",
      "D) Function strings"
    ],
    "optionsChinese": [
      "A) 文件字符串",
      "B) 带嵌入表达式的格式化字符串字面量",
      "C) 快速字符串",
      "D) 函数字符串"
    ],
    "answer": 1,
    "explanation": "f-strings (formatted string literals) allow embedding Python expressions inside strings with f'...{expr}...'. f'Hello, {name}!' inserts the variable name. Expressions can include function calls, math, and formatting: f'{price:.2f}'. They are faster than .format() and % formatting. Python 3.12 added support for backslashes and nested quotes inside f-string expressions.",
    "explanationChinese": "f-string（格式化字符串字面量）允许在字符串中嵌入Python表达式：f'...{expr}...'。f'Hello, {name}!'插入变量name。表达式可以包括函数调用、数学和格式化：f'{price:.2f}'。它们比.format()和%格式化更快。Python 3.12添加了对f-string表达式中反斜杠和嵌套引号的支持。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 179,
    "q": "What does the re module provide?",
    "qChinese": "re模块提供什么？",
    "options": [
      "A) Resource management",
      "B) Regular expression pattern matching",
      "C) Remote execution",
      "D) Record management"
    ],
    "optionsChinese": [
      "A) 资源管理",
      "B) 正则表达式模式匹配",
      "C) 远程执行",
      "D) 记录管理"
    ],
    "answer": 1,
    "explanation": "The re module provides regular expression operations. Key functions: re.search() finds first match, re.match() matches at string start, re.findall() returns all matches, re.sub() replaces matches, re.compile() pre-compiles patterns for reuse. Use raw strings r'pattern' to avoid escaping backslashes. Regular expressions are powerful for text parsing and validation.",
    "explanationChinese": "re模块提供正则表达式操作。关键函数：re.search()找到第一个匹配，re.match()在字符串开头匹配，re.findall()返回所有匹配，re.sub()替换匹配，re.compile()预编译模式以重用。使用原始字符串r'pattern'避免转义反斜杠。正则表达式对文本解析和验证很强大。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 180,
    "q": "What is the difference between re.match() and re.search()?",
    "qChinese": "re.match()和re.search()的区别是什么？",
    "options": [
      "A) match is case-sensitive, search is not",
      "B) match checks only the start of string, search checks anywhere",
      "C) search is faster than match",
      "D) They are identical"
    ],
    "optionsChinese": [
      "A) match区分大小写，search不区分",
      "B) match只检查字符串开头，search在任何位置检查",
      "C) search比match快",
      "D) 它们相同"
    ],
    "answer": 1,
    "explanation": "re.match() only matches at the beginning of the string. re.search() scans the entire string for the first match. re.match('cat', 'the cat') returns None, but re.search('cat', 'the cat') finds it. For matching the entire string, use re.fullmatch() (Python 3.4+) or anchor with ^ and $. Both return Match objects or None.",
    "explanationChinese": "re.match()只在字符串开头匹配。re.search()扫描整个字符串寻找第一个匹配。re.match('cat', 'the cat')返回None，但re.search('cat', 'the cat')找到它。要匹配整个字符串，使用re.fullmatch()（Python 3.4+）或用^和$锚定。两者返回Match对象或None。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 181,
    "q": "What does str.strip() do?",
    "qChinese": "str.strip()做什么？",
    "options": [
      "A) Removes all spaces from the string",
      "B) Removes leading and trailing whitespace",
      "C) Strips HTML tags",
      "D) Removes the first and last characters"
    ],
    "optionsChinese": [
      "A) 删除字符串中的所有空格",
      "B) 删除前导和尾随空白字符",
      "C) 去除HTML标签",
      "D) 删除第一个和最后一个字符"
    ],
    "answer": 1,
    "explanation": "str.strip() removes leading and trailing whitespace (spaces, tabs, newlines). str.lstrip() removes only leading, str.rstrip() only trailing. With an argument, strip('abc') removes any combination of those characters from both ends. Note: it removes individual characters, not the substring. '  hello  '.strip() gives 'hello'. Interior whitespace is preserved.",
    "explanationChinese": "str.strip()删除前导和尾随空白字符（空格、制表符、换行符）。str.lstrip()只删除前导，str.rstrip()只删除尾随。带参数时，strip('abc')从两端删除这些字符的任何组合。注意：它删除单个字符，而不是子字符串。'  hello  '.strip()给出'hello'。内部空白被保留。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 182,
    "q": "What does str.replace() return?",
    "qChinese": "str.replace()返回什么？",
    "options": [
      "A) None, modifies in place",
      "B) A new string with replacements made",
      "C) The number of replacements",
      "D) A boolean indicating success"
    ],
    "optionsChinese": [
      "A) None，就地修改",
      "B) 进行了替换的新字符串",
      "C) 替换次数",
      "D) 表示成功的布尔值"
    ],
    "answer": 1,
    "explanation": "str.replace(old, new) returns a NEW string with all occurrences of 'old' replaced by 'new'. Strings are immutable, so the original is unchanged. An optional count parameter limits replacements: 'aaa'.replace('a', 'b', 2) gives 'bba'. If 'old' is not found, the original string is returned unchanged. For complex replacements, use re.sub().",
    "explanationChinese": "str.replace(old, new)返回一个新字符串，所有'old'出现的地方被'new'替换。字符串是不可变的，所以原始字符串不变。可选的count参数限制替换次数：'aaa'.replace('a', 'b', 2)给出'bba'。如果'old'未找到，返回不变的原始字符串。对于复杂替换，使用re.sub()。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 183,
    "q": "What does the str.format() method do?",
    "qChinese": "str.format()方法做什么？",
    "options": [
      "A) Formats disk drives",
      "B) Inserts values into string placeholders {}",
      "C) Changes string encoding",
      "D) Formats the string as title case"
    ],
    "optionsChinese": [
      "A) 格式化磁盘驱动器",
      "B) 将值插入字符串占位符{}",
      "C) 更改字符串编码",
      "D) 将字符串格式化为标题格式"
    ],
    "answer": 1,
    "explanation": "'Hello, {}!'.format('Alice') inserts values into {} placeholders. Supports positional '{0} {1}', keyword '{name}', and format specs '{:.2f}'. Before f-strings, this was the preferred formatting method. It still has advantages: can be used with stored format strings (template.format(**data)) and supports the format_map() method for lazy dictionary access.",
    "explanationChinese": "'Hello, {}!'.format('Alice')将值插入{}占位符。支持位置'{0} {1}'、关键字'{name}'和格式规范'{:.2f}'。在f-string之前，这是首选的格式化方法。它仍有优势：可以与存储的格式字符串一起使用（template.format(**data)）并支持format_map()方法进行惰性字典访问。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 184,
    "q": "What is the output of: 'hello world'.title()?",
    "qChinese": "'hello world'.title()的输出是什么？",
    "options": [
      "A) 'Hello world'",
      "B) 'Hello World'",
      "C) 'HELLO WORLD'",
      "D) 'hello World'"
    ],
    "optionsChinese": [
      "A) 'Hello world'",
      "B) 'Hello World'",
      "C) 'HELLO WORLD'",
      "D) 'hello World'"
    ],
    "answer": 1,
    "explanation": "str.title() capitalizes the first letter of every word. 'hello world'.title() gives 'Hello World'. Other case methods: upper() makes all uppercase, lower() makes all lowercase, capitalize() only capitalizes the first letter of the string, swapcase() inverts case. Note: title() may not handle apostrophes correctly: \"it's\".title() gives \"It'S\".",
    "explanationChinese": "str.title()将每个单词的首字母大写。'hello world'.title()给出'Hello World'。其他大小写方法：upper()全部大写，lower()全部小写，capitalize()只将字符串第一个字母大写，swapcase()反转大小写。注意：title()可能不正确处理撇号：\"it's\".title()给出\"It'S\"。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 185,
    "q": "What does re.findall() return?",
    "qChinese": "re.findall()返回什么？",
    "options": [
      "A) The first match only",
      "B) A list of all non-overlapping matches",
      "C) A match object",
      "D) The count of matches"
    ],
    "optionsChinese": [
      "A) 仅第一个匹配",
      "B) 所有非重叠匹配的列表",
      "C) 匹配对象",
      "D) 匹配计数"
    ],
    "answer": 1,
    "explanation": "re.findall(pattern, string) returns a list of all non-overlapping matches as strings. If the pattern has groups, it returns a list of groups or tuples of groups. re.findall(r'\\d+', 'age 25, height 180') returns ['25', '180']. For overlapping matches, use re.finditer() with lookaheads. findall() is the simplest way to extract all pattern matches.",
    "explanationChinese": "re.findall(pattern, string)返回所有非重叠匹配的字符串列表。如果模式有分组，它返回分组列表或分组元组。re.findall(r'\\d+', 'age 25, height 180')返回['25', '180']。对于重叠匹配，使用带前瞻的re.finditer()。findall()是提取所有模式匹配的最简单方式。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 186,
    "q": "What does str.startswith() do?",
    "qChinese": "str.startswith()做什么？",
    "options": [
      "A) Adds a prefix to the string",
      "B) Checks if the string starts with a given prefix",
      "C) Returns the first character",
      "D) Moves the string to the start of a file"
    ],
    "optionsChinese": [
      "A) 为字符串添加前缀",
      "B) 检查字符串是否以给定前缀开头",
      "C) 返回第一个字符",
      "D) 将字符串移到文件开头"
    ],
    "answer": 1,
    "explanation": "str.startswith(prefix) returns True if the string starts with the specified prefix. It can accept a tuple of prefixes: 'hello'.startswith(('he', 'ha')) returns True. Optional start and end parameters limit the check range. Similarly, str.endswith() checks the suffix. These are more readable and efficient than slicing for prefix/suffix checks.",
    "explanationChinese": "str.startswith(prefix)如果字符串以指定前缀开头则返回True。它可以接受前缀元组：'hello'.startswith(('he', 'ha'))返回True。可选的start和end参数限制检查范围。类似地，str.endswith()检查后缀。这些比切片进行前缀/后缀检查更可读和高效。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 187,
    "q": "What is a raw string in Python?",
    "qChinese": "Python中的原始字符串是什么？",
    "options": [
      "A) An unprocessed file",
      "B) A string where backslashes are treated literally (r'...')",
      "C) A string without encoding",
      "D) A string from raw input"
    ],
    "optionsChinese": [
      "A) 未处理的文件",
      "B) 反斜杠被字面处理的字符串(r'...')",
      "C) 没有编码的字符串",
      "D) 来自原始输入的字符串"
    ],
    "answer": 1,
    "explanation": "Raw strings (r'...') treat backslashes as literal characters instead of escape sequences. r'\\n' is two characters (backslash and n), not a newline. Essential for regex patterns: re.search(r'\\d+', text) avoids double-escaping. r'C:\\Users\\name' is cleaner than 'C:\\\\Users\\\\name'. Raw strings cannot end with an odd number of backslashes.",
    "explanationChinese": "原始字符串(r'...')将反斜杠作为字面字符而不是转义序列。r'\\n'是两个字符（反斜杠和n），而不是换行符。对正则表达式模式至关重要：re.search(r'\\d+', text)避免双重转义。r'C:\\Users\\name'比'C:\\\\Users\\\\name'更干净。原始字符串不能以奇数个反斜杠结尾。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 188,
    "q": "What does str.encode() do?",
    "qChinese": "str.encode()做什么？",
    "options": [
      "A) Encrypts the string",
      "B) Converts the string to bytes using a specified encoding",
      "C) Compresses the string",
      "D) Converts to a number"
    ],
    "optionsChinese": [
      "A) 加密字符串",
      "B) 使用指定编码将字符串转换为字节",
      "C) 压缩字符串",
      "D) 转换为数字"
    ],
    "answer": 1,
    "explanation": "str.encode(encoding='utf-8') converts a string to a bytes object using the specified encoding. 'hello'.encode() returns b'hello'. bytes.decode() does the reverse. UTF-8 is the default and most common encoding. UnicodeEncodeError occurs if the string contains characters not representable in the target encoding. Always specify encoding explicitly for portability.",
    "explanationChinese": "str.encode(encoding='utf-8')使用指定编码将字符串转换为bytes对象。'hello'.encode()返回b'hello'。bytes.decode()执行反向操作。UTF-8是默认和最常见的编码。如果字符串包含目标编码中无法表示的字符，会发生UnicodeEncodeError。始终明确指定编码以提高可移植性。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 189,
    "q": "What does re.sub() do?",
    "qChinese": "re.sub()做什么？",
    "options": [
      "A) Subtracts matches",
      "B) Replaces all matches of a pattern with a replacement",
      "C) Subscribes to a pattern",
      "D) Creates a sub-pattern"
    ],
    "optionsChinese": [
      "A) 减去匹配",
      "B) 用替换内容替换模式的所有匹配",
      "C) 订阅模式",
      "D) 创建子模式"
    ],
    "answer": 1,
    "explanation": "re.sub(pattern, replacement, string) replaces all occurrences of the pattern with the replacement string. re.sub(r'\\d+', 'NUM', 'age 25') gives 'age NUM'. The replacement can be a function for dynamic substitution. The count parameter limits replacements. re.subn() additionally returns the number of substitutions made as a tuple (result, count).",
    "explanationChinese": "re.sub(pattern, replacement, string)用替换字符串替换模式的所有出现。re.sub(r'\\d+', 'NUM', 'age 25')给出'age NUM'。替换可以是函数用于动态替换。count参数限制替换次数。re.subn()额外返回替换次数作为元组(result, count)。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 190,
    "q": "What is the difference between str.find() and str.index()?",
    "qChinese": "str.find()和str.index()的区别是什么？",
    "options": [
      "A) find returns boolean, index returns position",
      "B) find returns -1 if not found, index raises ValueError",
      "C) They are identical",
      "D) index is faster than find"
    ],
    "optionsChinese": [
      "A) find返回布尔值，index返回位置",
      "B) find如果未找到返回-1，index引发ValueError",
      "C) 它们相同",
      "D) index比find快"
    ],
    "answer": 1,
    "explanation": "Both find() and index() return the position of the first occurrence of a substring. The key difference: find() returns -1 if the substring is not found, while index() raises ValueError. Use find() when the substring might not exist and you want to check. Use index() when absence is an error. Both accept optional start and end parameters for range searching.",
    "explanationChinese": "find()和index()都返回子字符串第一次出现的位置。关键区别：find()如果子字符串未找到返回-1，而index()引发ValueError。当子字符串可能不存在且你想检查时使用find()。当缺失是错误时使用index()。两者都接受可选的start和end参数用于范围搜索。",
    "diagram": "",
    "terms": [
      "python_interpreter"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 191,
    "q": "What is the Global Interpreter Lock (GIL)?",
    "qChinese": "什么是全局解释器锁（GIL）？",
    "options": [
      "A) A security feature preventing unauthorized access",
      "B) A mutex allowing only one thread to execute Python bytecode at a time",
      "C) A lock on global variables",
      "D) A file locking mechanism"
    ],
    "optionsChinese": [
      "A) 防止未授权访问的安全功能",
      "B) 一次只允许一个线程执行Python字节码的互斥锁",
      "C) 全局变量的锁",
      "D) 文件锁定机制"
    ],
    "answer": 1,
    "explanation": "The GIL is a mutex in CPython that prevents multiple native threads from executing Python bytecode simultaneously. It simplifies memory management but limits CPU-bound parallelism. I/O-bound threads release the GIL while waiting. Workarounds: use multiprocessing for CPU-bound tasks, asyncio for I/O-bound tasks, or C extensions that release the GIL. Python 3.13 introduces an experimental free-threaded mode.",
    "explanationChinese": "GIL是CPython中的互斥锁，防止多个原生线程同时执行Python字节码。它简化了内存管理但限制了CPU密集型并行性。I/O密集型线程在等待时释放GIL。解决方法：对CPU密集型任务使用multiprocessing，对I/O密集型任务使用asyncio，或使用释放GIL的C扩展。Python 3.13引入了实验性的自由线程模式。",
    "diagram": "",
    "terms": [
      "gil"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 192,
    "q": "What are type hints used for in Python?",
    "qChinese": "Python中类型提示用于什么？",
    "options": [
      "A) Enforcing types at runtime",
      "B) Providing optional annotations for static analysis",
      "C) Converting between types automatically",
      "D) Restricting variable assignments"
    ],
    "optionsChinese": [
      "A) 在运行时强制类型",
      "B) 为静态分析提供可选注解",
      "C) 自动在类型之间转换",
      "D) 限制变量赋值"
    ],
    "answer": 1,
    "explanation": "Type hints (PEP 484) are optional annotations that specify expected types: def greet(name: str) -> str. They do NOT enforce types at runtime but enable static type checkers like mypy to catch errors before execution. The typing module provides Union, Optional, List, Dict, Callable, and other complex types. Type hints improve code documentation and IDE support significantly.",
    "explanationChinese": "类型提示（PEP 484）是指定预期类型的可选注解：def greet(name: str) -> str。它们不在运行时强制类型，但使mypy等静态类型检查器能在执行前捕获错误。typing模块提供Union、Optional、List、Dict、Callable和其他复杂类型。类型提示显著改善代码文档和IDE支持。",
    "diagram": "",
    "terms": [
      "type_hints"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 193,
    "q": "What is a metaclass in Python?",
    "qChinese": "Python中的元类是什么？",
    "options": [
      "A) A class about metadata",
      "B) A class whose instances are classes (the class of a class)",
      "C) A superclass of all classes",
      "D) An abstract class"
    ],
    "optionsChinese": [
      "A) 关于元数据的类",
      "B) 实例是类的类（类的类）",
      "C) 所有类的超类",
      "D) 抽象类"
    ],
    "answer": 1,
    "explanation": "A metaclass is a class whose instances are classes themselves. type is the default metaclass. Define custom metaclasses by inheriting from type and overriding __new__ or __init__. Use: class MyClass(metaclass=MyMeta). Metaclasses control class creation, enabling validation, automatic registration, and API enforcement. They are advanced and rarely needed; decorators and __init_subclass__ often suffice.",
    "explanationChinese": "元类是其实例本身就是类的类。type是默认元类。通过继承type并覆盖__new__或__init__来定义自定义元类。使用：class MyClass(metaclass=MyMeta)。元类控制类创建，启用验证、自动注册和API执行。它们是高级的，很少需要；装饰器和__init_subclass__通常就够了。",
    "diagram": "",
    "terms": [
      "class_inheritance"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 194,
    "q": "What is asyncio used for in Python?",
    "qChinese": "Python中asyncio用于什么？",
    "options": [
      "A) Asynchronous file operations only",
      "B) Writing concurrent code using async/await syntax",
      "C) Parallel CPU processing",
      "D) Synchronizing threads"
    ],
    "optionsChinese": [
      "A) 仅异步文件操作",
      "B) 使用async/await语法编写并发代码",
      "C) 并行CPU处理",
      "D) 同步线程"
    ],
    "answer": 1,
    "explanation": "asyncio is Python's framework for writing concurrent code using async/await. It uses a single-threaded event loop to handle I/O-bound operations efficiently. Define coroutines with 'async def', await them with 'await'. asyncio.gather() runs coroutines concurrently. It excels at network I/O, web scraping, and API calls. Not suitable for CPU-bound tasks where multiprocessing is preferred.",
    "explanationChinese": "asyncio是Python使用async/await编写并发代码的框架。它使用单线程事件循环高效处理I/O密集型操作。用'async def'定义协程，用'await'等待。asyncio.gather()并发运行协程。它擅长网络I/O、网页抓取和API调用。不适合CPU密集型任务，那些情况下优先使用multiprocessing。",
    "diagram": "",
    "terms": [
      "gil"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 195,
    "q": "What is the typing.Optional type hint?",
    "qChinese": "typing.Optional类型提示是什么？",
    "options": [
      "A) Makes a parameter optional",
      "B) Indicates a value can be the specified type or None",
      "C) Creates optional classes",
      "D) Marks a function as optional"
    ],
    "optionsChinese": [
      "A) 使参数可选",
      "B) 表示值可以是指定类型或None",
      "C) 创建可选类",
      "D) 将函数标记为可选"
    ],
    "answer": 1,
    "explanation": "Optional[X] is equivalent to Union[X, None], meaning the value can be type X or None. def find(name: str) -> Optional[int] means the function returns an int or None. In Python 3.10+, use X | None instead: def find(name: str) -> int | None. Optional does NOT make a parameter have a default value; it only describes the type as nullable.",
    "explanationChinese": "Optional[X]等同于Union[X, None]，意味着值可以是类型X或None。def find(name: str) -> Optional[int]表示函数返回int或None。在Python 3.10+中，使用X | None代替：def find(name: str) -> int | None。Optional不使参数有默认值；它只描述类型为可空。",
    "diagram": "",
    "terms": [
      "type_hints"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 196,
    "q": "What is the difference between threading and multiprocessing?",
    "qChinese": "threading和multiprocessing的区别是什么？",
    "options": [
      "A) Threading is for I/O, multiprocessing for CPU tasks (bypasses GIL)",
      "B) They are identical",
      "C) Multiprocessing is slower in all cases",
      "D) Threading bypasses the GIL"
    ],
    "optionsChinese": [
      "A) Threading用于I/O，multiprocessing用于CPU任务（绕过GIL）",
      "B) 它们相同",
      "C) Multiprocessing在所有情况下都更慢",
      "D) Threading绕过GIL"
    ],
    "answer": 0,
    "explanation": "threading uses threads sharing the same memory space but is limited by the GIL for CPU-bound tasks. multiprocessing uses separate processes with independent memory, bypassing the GIL for true parallelism. Use threading for I/O-bound tasks (network, file I/O) and multiprocessing for CPU-bound tasks (calculations, data processing). multiprocessing has higher overhead for inter-process communication.",
    "explanationChinese": "threading使用共享相同内存空间的线程，但对CPU密集型任务受GIL限制。multiprocessing使用具有独立内存的独立进程，绕过GIL实现真正的并行。对I/O密集型任务（网络、文件I/O）使用threading，对CPU密集型任务（计算、数据处理）使用multiprocessing。multiprocessing的进程间通信开销更高。",
    "diagram": "",
    "terms": [
      "gil"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 197,
    "q": "What does the typing.Protocol class enable?",
    "qChinese": "typing.Protocol类启用什么？",
    "options": [
      "A) Network protocol handling",
      "B) Structural subtyping (static duck typing)",
      "C) Communication between processes",
      "D) File transfer protocols"
    ],
    "optionsChinese": [
      "A) 网络协议处理",
      "B) 结构化子类型（静态鸭子类型）",
      "C) 进程间通信",
      "D) 文件传输协议"
    ],
    "answer": 1,
    "explanation": "typing.Protocol (PEP 544) enables structural subtyping in static type checking. A class satisfies a Protocol if it implements the required methods, without explicit inheritance. class Drawable(Protocol): def draw(self) -> None: ... Any class with a draw() method satisfies Drawable. This is static duck typing: type checking based on structure, not inheritance hierarchy.",
    "explanationChinese": "typing.Protocol（PEP 544）在静态类型检查中启用结构化子类型。如果一个类实现了所需的方法，它就满足Protocol，无需显式继承。class Drawable(Protocol): def draw(self) -> None: ... 任何有draw()方法的类都满足Drawable。这是静态鸭子类型：基于结构而非继承层次进行类型检查。",
    "diagram": "",
    "terms": [
      "type_hints",
      "duck_typing"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 198,
    "q": "What are class decorators used for?",
    "qChinese": "类装饰器用于什么？",
    "options": [
      "A) Decorating class UI appearance",
      "B) Modifying or enhancing classes at definition time",
      "C) Creating decorative patterns",
      "D) Adding CSS to classes"
    ],
    "optionsChinese": [
      "A) 装饰类的UI外观",
      "B) 在定义时修改或增强类",
      "C) 创建装饰模式",
      "D) 为类添加CSS"
    ],
    "answer": 1,
    "explanation": "Class decorators are functions that take a class and return a modified class. @dataclass, @functools.total_ordering are examples. They can add methods, modify attributes, register classes, or wrap the class entirely. Syntax: @decorator class MyClass: ... is equivalent to MyClass = decorator(MyClass). Class decorators are often simpler alternatives to metaclasses for class modification.",
    "explanationChinese": "类装饰器是接受类并返回修改后的类的函数。@dataclass、@functools.total_ordering是例子。它们可以添加方法、修改属性、注册类或完全包装类。语法：@decorator class MyClass: ... 等同于MyClass = decorator(MyClass)。类装饰器通常是修改类时比元类更简单的替代方案。",
    "diagram": "",
    "terms": [
      "decorator"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 199,
    "q": "What is __init_subclass__ used for?",
    "qChinese": "__init_subclass__用于什么？",
    "options": [
      "A) Initializing subclass instances",
      "B) A hook called when a class is subclassed",
      "C) Creating sub-initialization",
      "D) Importing subclass modules"
    ],
    "optionsChinese": [
      "A) 初始化子类实例",
      "B) 当类被子类化时调用的钩子",
      "C) 创建子初始化",
      "D) 导入子类模块"
    ],
    "answer": 1,
    "explanation": "__init_subclass__(cls) is a classmethod hook called whenever the containing class is subclassed. It is a simpler alternative to metaclasses for customizing subclass creation. Use cases: validating subclass attributes, automatic registration, enforcing naming conventions. Example: class Plugin: def __init_subclass__(cls, **kwargs): registry.append(cls). Introduced in Python 3.6 via PEP 487.",
    "explanationChinese": "__init_subclass__(cls)是一个类方法钩子，在包含类被子类化时调用。它是自定义子类创建时比元类更简单的替代方案。用例：验证子类属性、自动注册、强制命名约定。例如：class Plugin: def __init_subclass__(cls, **kwargs): registry.append(cls)。通过PEP 487在Python 3.6中引入。",
    "diagram": "",
    "terms": [
      "class_inheritance"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  },
  {
    "id": 200,
    "q": "What is the async/await syntax in Python?",
    "qChinese": "Python中的async/await语法是什么？",
    "options": [
      "A) A way to handle synchronous code",
      "B) Keywords for defining and awaiting coroutines",
      "C) A threading API",
      "D) Async file reading functions"
    ],
    "optionsChinese": [
      "A) 处理同步代码的方式",
      "B) 定义和等待协程的关键字",
      "C) 线程API",
      "D) 异步文件读取函数"
    ],
    "answer": 1,
    "explanation": "'async def' defines a coroutine function. 'await' suspends execution until the awaited coroutine completes. Coroutines run on an event loop (asyncio.run()). await can only be used inside async functions. Async for loops (async for) iterate over async iterables, and async with enables async context managers. This model excels at concurrent I/O without thread overhead.",
    "explanationChinese": "'async def'定义协程函数。'await'暂停执行直到等待的协程完成。协程在事件循环上运行（asyncio.run()）。await只能在async函数内使用。异步for循环（async for）迭代异步可迭代对象，async with启用异步上下文管理器。这种模型擅长无线程开销的并发I/O。",
    "diagram": "",
    "terms": [
      "gil"
    ],
    "image": "",
    "youtube": "",
    "youtubeTitle": ""
  }
];
