const questionsSYS = [
  {
    id: 1,
    q: "In C, what is the output of: int x = 5; printf(\"%d\", x++ + ++x);?",
    qChinese: "在 C 语言中，以下代码的输出是什么：int x = 5; printf(\"%d\", x++ + ++x);？",
    options: [
      "A) 10",
      "B) 11",
      "C) 12",
      "D) Undefined behavior"
    ],
    optionsChinese: [
      "A) 10",
      "B) 11",
      "C) 12",
      "D) 未定义行为"
    ],
    answer: 3,
    explanation: "This is undefined behavior in C. The expression modifies the variable x more than once between two sequence points (the start and end of the printf argument evaluation). The C standard does not define the order in which the side effects of ++ occur, so compilers may produce different results. Avoid such expressions.",
    explanationChinese: "这在 C 语言中是未定义行为。该表达式在两个序列点之间（printf 参数求值的开始和结束）多次修改变量 x。C 标准没有定义 ++ 副作用发生的顺序，因此不同编译器可能产生不同结果。应避免此类表达式。",
    diagram: "",
    terms: ["undefined_behavior", "sequence_points", "increment_operators"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 2,
    q: "What does the following C code do? int *p = (int *)malloc(5 * sizeof(int));",
    qChinese: "以下 C 代码做了什么？int *p = (int *)malloc(5 * sizeof(int));",
    options: [
      "A) Declares an integer array of size 5 on the stack",
      "B) Allocates memory for 5 integers on the heap and returns a pointer",
      "C) Creates a pointer to 5 bytes of memory",
      "D) Allocates 5 integer pointers on the heap"
    ],
    optionsChinese: [
      "A) 在栈上声明一个大小为 5 的整型数组",
      "B) 在堆上为 5 个整数分配内存并返回一个指针",
      "C) 创建一个指向 5 个字节内存的指针",
      "D) 在堆上分配 5 个整型指针"
    ],
    answer: 1,
    explanation: "malloc allocates a contiguous block of memory on the heap. The argument 5 * sizeof(int) requests enough bytes for 5 integers (typically 20 bytes on systems where int is 4 bytes). The returned void pointer is cast to int*. The memory is uninitialized and must be freed with free(p) to avoid memory leaks.",
    explanationChinese: "malloc 在堆上分配一块连续的内存。参数 5 * sizeof(int) 请求足够存放 5 个整数的字节数（在 int 为 4 字节的系统上通常为 20 字节）。返回的 void 指针被强制转换为 int*。该内存未初始化，必须用 free(p) 释放以避免内存泄漏。",
    diagram: "",
    terms: ["malloc", "heap_allocation", "pointer", "sizeof"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 3,
    q: "What is a dangling pointer in C?",
    qChinese: "C 语言中什么是悬空指针？",
    options: [
      "A) A pointer that has not been initialized",
      "B) A pointer that points to memory that has been freed or deallocated",
      "C) A pointer that points to the stack",
      "D) A pointer to a function"
    ],
    optionsChinese: [
      "A) 一个未被初始化的指针",
      "B) 一个指向已被释放或回收的内存的指针",
      "C) 一个指向栈的指针",
      "D) 一个指向函数的指针"
    ],
    answer: 1,
    explanation: "A dangling pointer arises when memory it references is freed (via free()) or goes out of scope, but the pointer still holds the old address. Dereferencing a dangling pointer causes undefined behavior, potentially crashing or corrupting data. Best practice is to set pointers to NULL after freeing: free(p); p = NULL;",
    explanationChinese: "悬空指针在其引用的内存被释放（通过 free()）或超出作用域时产生，但指针仍保留旧地址。解引用悬空指针会导致未定义行为，可能导致崩溃或数据损坏。最佳实践是释放后将指针置为 NULL：free(p); p = NULL;",
    diagram: "",
    terms: ["dangling_pointer", "memory_deallocation", "undefined_behavior"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 4,
    q: "In C, what is the difference between char *s = \"hello\" and char s[] = \"hello\"?",
    qChinese: "在 C 中，char *s = \"hello\" 和 char s[] = \"hello\" 有什么区别？",
    options: [
      "A) No difference; they are identical",
      "B) The pointer version stores the string in read-only memory; the array version creates a modifiable copy on the stack",
      "C) The array version is stored on the heap",
      "D) The pointer version allocates 6 bytes on the stack"
    ],
    optionsChinese: [
      "A) 没有区别；它们完全相同",
      "B) 指针版本将字符串存储在只读内存中；数组版本在栈上创建一个可修改的副本",
      "C) 数组版本存储在堆上",
      "D) 指针版本在栈上分配 6 个字节"
    ],
    answer: 1,
    explanation: "char *s = \"hello\" makes s point to a string literal in read-only memory (typically the .rodata section). Modifying it causes undefined behavior. char s[] = \"hello\" creates a local array on the stack initialized with a copy of the string, which can be safely modified. Understanding this distinction prevents common segmentation faults.",
    explanationChinese: "char *s = \"hello\" 使 s 指向只读内存中的字符串字面量（通常在 .rodata 段）。修改它会导致未定义行为。char s[] = \"hello\" 在栈上创建一个用字符串副本初始化的局部数组，可以安全修改。理解这个区别可以防止常见的段错误。",
    diagram: "",
    terms: ["string_literal", "read_only_memory", "stack_array", "pointer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 5,
    q: "What happens when you call free() on the same pointer twice in C?",
    qChinese: "在 C 中对同一个指针调用两次 free() 会发生什么？",
    options: [
      "A) The memory is freed twice safely",
      "B) A compile-time error occurs",
      "C) Undefined behavior (double free vulnerability)",
      "D) The second free() is silently ignored"
    ],
    optionsChinese: [
      "A) 内存被安全地释放两次",
      "B) 发生编译时错误",
      "C) 未定义行为（双重释放漏洞）",
      "D) 第二次 free() 被静默忽略"
    ],
    answer: 2,
    explanation: "Double free is undefined behavior in C. It can corrupt the heap allocator's internal data structures, leading to crashes, data corruption, or exploitable security vulnerabilities. Attackers can exploit double free to execute arbitrary code. Always set pointers to NULL after freeing, since free(NULL) is safe and defined as a no-op.",
    explanationChinese: "双重释放在 C 中是未定义行为。它可能破坏堆分配器的内部数据结构，导致崩溃、数据损坏或可被利用的安全漏洞。攻击者可以利用双重释放执行任意代码。释放后应始终将指针置为 NULL，因为 free(NULL) 是安全的且被定义为无操作。",
    diagram: "",
    terms: ["double_free", "heap_corruption", "undefined_behavior"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 6,
    q: "Which memory region stores local variables and function call information in a typical C program?",
    qChinese: "在典型的 C 程序中，哪个内存区域存储局部变量和函数调用信息？",
    options: [
      "A) Heap",
      "B) Stack",
      "C) BSS segment",
      "D) Text segment"
    ],
    optionsChinese: [
      "A) 堆",
      "B) 栈",
      "C) BSS 段",
      "D) 代码段"
    ],
    answer: 1,
    explanation: "The stack stores local variables, function parameters, return addresses, and saved registers for each function call in a stack frame. It grows and shrinks automatically as functions are called and return. The heap is for dynamic allocation (malloc/free). BSS holds uninitialized global variables, and the text segment contains executable code.",
    explanationChinese: "栈为每次函数调用在栈帧中存储局部变量、函数参数、返回地址和保存的寄存器。它随着函数调用和返回自动增长和缩小。堆用于动态分配（malloc/free）。BSS 保存未初始化的全局变量，代码段包含可执行代码。",
    diagram: "",
    terms: ["stack", "stack_frame", "local_variables", "memory_layout"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 7,
    q: "What is the key difference between stack memory and heap memory in terms of allocation and deallocation?",
    qChinese: "栈内存和堆内存在分配和释放方面的关键区别是什么？",
    options: [
      "A) Stack is slower to allocate than heap",
      "B) Stack allocation is automatic (LIFO); heap allocation is manual and requires explicit freeing",
      "C) Heap memory is always faster to access than stack",
      "D) Stack can store larger objects than heap"
    ],
    optionsChinese: [
      "A) 栈的分配比堆慢",
      "B) 栈分配是自动的（后进先出）；堆分配是手动的，需要显式释放",
      "C) 堆内存的访问总是比栈快",
      "D) 栈可以存储比堆更大的对象"
    ],
    answer: 1,
    explanation: "Stack allocation and deallocation happen automatically by adjusting the stack pointer when functions are called and return (LIFO order). Heap allocation uses malloc/calloc and must be explicitly freed. Stack allocation is faster (just a pointer adjustment), while heap allocation involves complex bookkeeping. Stack size is typically limited (e.g., 8 MB), while heap can grow much larger.",
    explanationChinese: "栈的分配和释放在函数调用和返回时通过调整栈指针自动发生（后进先出顺序）。堆分配使用 malloc/calloc，必须显式释放。栈分配更快（只是指针调整），而堆分配涉及复杂的簿记。栈大小通常有限（如 8 MB），而堆可以增长到更大。",
    diagram: "",
    terms: ["stack_memory", "heap_memory", "lifo", "memory_management"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 8,
    q: "In x86-64 assembly, what does the instruction 'mov rax, [rbx]' do?",
    qChinese: "在 x86-64 汇编中，指令 'mov rax, [rbx]' 做了什么？",
    options: [
      "A) Copies the value of rbx into rax",
      "B) Copies the value stored at the memory address in rbx into rax",
      "C) Stores the value of rax at the memory address in rbx",
      "D) Adds rbx to rax"
    ],
    optionsChinese: [
      "A) 将 rbx 的值复制到 rax",
      "B) 将 rbx 中地址所指向的内存值复制到 rax",
      "C) 将 rax 的值存储到 rbx 中地址所指向的内存",
      "D) 将 rbx 加到 rax"
    ],
    answer: 1,
    explanation: "The square brackets in x86 assembly denote memory dereferencing (indirect addressing). [rbx] means 'the value at the memory address stored in rbx.' So mov rax, [rbx] loads the 8-byte value from the memory location pointed to by rbx into the rax register. Without brackets, mov rax, rbx would copy the register value directly.",
    explanationChinese: "x86 汇编中的方括号表示内存解引用（间接寻址）。[rbx] 意思是'rbx 中存储的内存地址处的值'。因此 mov rax, [rbx] 将 rbx 所指向的内存位置的 8 字节值加载到 rax 寄存器。没有方括号时，mov rax, rbx 会直接复制寄存器值。",
    diagram: "",
    terms: ["x86_assembly", "mov_instruction", "indirect_addressing", "register"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 9,
    q: "What is the purpose of the program counter (PC) register in a CPU?",
    qChinese: "CPU 中程序计数器 (PC) 寄存器的作用是什么？",
    options: [
      "A) It counts the number of programs running",
      "B) It holds the memory address of the next instruction to be executed",
      "C) It stores the result of the last arithmetic operation",
      "D) It tracks the number of clock cycles elapsed"
    ],
    optionsChinese: [
      "A) 它计算正在运行的程序数量",
      "B) 它保存下一条将要执行的指令的内存地址",
      "C) 它存储上一次算术运算的结果",
      "D) 它跟踪已经过的时钟周期数"
    ],
    answer: 1,
    explanation: "The program counter (called RIP in x86-64) holds the address of the next instruction to fetch and execute. After each instruction, the PC is typically incremented to point to the following instruction. Branch and jump instructions modify the PC to alter the control flow. It is fundamental to the fetch-decode-execute cycle of the CPU.",
    explanationChinese: "程序计数器（在 x86-64 中称为 RIP）保存下一条要获取和执行的指令的地址。每条指令执行后，PC 通常递增以指向下一条指令。分支和跳转指令修改 PC 以改变控制流。它是 CPU 取指-解码-执行周期的基础。",
    diagram: "",
    terms: ["program_counter", "instruction_pointer", "fetch_decode_execute"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 10,
    q: "In a 5-stage pipeline (IF, ID, EX, MEM, WB), what is a data hazard?",
    qChinese: "在 5 级流水线（IF、ID、EX、MEM、WB）中，什么是数据冒险？",
    options: [
      "A) When two instructions try to access the same cache line",
      "B) When an instruction depends on the result of a previous instruction that has not yet completed",
      "C) When the branch predictor makes an incorrect prediction",
      "D) When the instruction memory and data memory conflict"
    ],
    optionsChinese: [
      "A) 当两条指令试图访问同一缓存行",
      "B) 当一条指令依赖于尚未完成的前一条指令的结果",
      "C) 当分支预测器做出错误预测",
      "D) 当指令内存和数据内存冲突"
    ],
    answer: 1,
    explanation: "A data hazard occurs when an instruction needs a value that a prior instruction in the pipeline has not yet produced. For example, if instruction 2 reads a register that instruction 1 is still computing in the EX stage. Solutions include forwarding (bypassing), stalling (inserting bubbles), or compiler-level instruction reordering.",
    explanationChinese: "数据冒险发生在一条指令需要流水线中前一条指令尚未产生的值时。例如，指令 2 读取一个寄存器，而指令 1 仍在 EX 阶段计算该值。解决方案包括转发（旁路）、停顿（插入气泡）或编译器级别的指令重排。",
    diagram: "",
    terms: ["pipeline", "data_hazard", "forwarding", "stalling"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 11,
    q: "Which of the following best describes the principle of spatial locality in caching?",
    qChinese: "以下哪项最好地描述了缓存中的空间局部性原理？",
    options: [
      "A) Recently accessed data is likely to be accessed again soon",
      "B) Data stored near recently accessed data is likely to be accessed soon",
      "C) The cache always stores the most frequently accessed data",
      "D) Data is evicted from cache in FIFO order"
    ],
    optionsChinese: [
      "A) 最近访问过的数据很可能很快再次被访问",
      "B) 与最近访问的数据相邻存储的数据很可能很快被访问",
      "C) 缓存总是存储最常访问的数据",
      "D) 数据按先进先出顺序从缓存中驱逐"
    ],
    answer: 1,
    explanation: "Spatial locality means that if a memory address is accessed, nearby addresses are likely to be accessed soon. Caches exploit this by loading entire cache lines (e.g., 64 bytes) on each miss, bringing neighboring data into the cache. Temporal locality (option A) is a separate principle about re-accessing the same data over time.",
    explanationChinese: "空间局部性意味着如果访问了一个内存地址，附近的地址很可能很快被访问。缓存通过在每次缺失时加载整个缓存行（如 64 字节）来利用这一点，将相邻数据带入缓存。时间局部性（选项 A）是关于随时间重新访问相同数据的另一个原理。",
    diagram: "",
    terms: ["spatial_locality", "cache_line", "temporal_locality"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 12,
    q: "In a direct-mapped cache with 256 cache lines and a 32-bit address, how many bits are used for the index if the block size is 64 bytes?",
    qChinese: "在一个有 256 个缓存行、32 位地址的直接映射缓存中，如果块大小为 64 字节，索引使用多少位？",
    options: [
      "A) 6 bits",
      "B) 8 bits",
      "C) 10 bits",
      "D) 18 bits"
    ],
    optionsChinese: [
      "A) 6 位",
      "B) 8 位",
      "C) 10 位",
      "D) 18 位"
    ],
    answer: 1,
    explanation: "With 256 cache lines, we need log2(256) = 8 bits for the index to select which cache line to check. The block offset uses log2(64) = 6 bits to identify a byte within a 64-byte block. The remaining 32 - 8 - 6 = 18 bits form the tag. The address is divided into tag | index | offset.",
    explanationChinese: "有 256 个缓存行，需要 log2(256) = 8 位作为索引来选择检查哪个缓存行。块偏移使用 log2(64) = 6 位来标识 64 字节块中的一个字节。剩余的 32 - 8 - 6 = 18 位构成标签。地址分为 标签 | 索引 | 偏移。",
    diagram: "",
    terms: ["direct_mapped_cache", "cache_index", "tag_bits", "block_offset"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 13,
    q: "What is a TLB (Translation Lookaside Buffer) and what problem does it solve?",
    qChinese: "什么是 TLB（转换后备缓冲区），它解决了什么问题？",
    options: [
      "A) A buffer for disk I/O operations",
      "B) A cache for page table entries to speed up virtual-to-physical address translation",
      "C) A queue for pending memory write operations",
      "D) A buffer that stores recently executed instructions"
    ],
    optionsChinese: [
      "A) 用于磁盘 I/O 操作的缓冲区",
      "B) 页表条目的缓存，用于加速虚拟地址到物理地址的转换",
      "C) 用于待处理内存写操作的队列",
      "D) 存储最近执行的指令的缓冲区"
    ],
    answer: 1,
    explanation: "The TLB is a small, fast hardware cache that stores recently used virtual-to-physical page mappings. Without a TLB, every memory access would require one or more additional memory accesses to walk the page table. A TLB hit resolves the translation in one cycle, while a TLB miss requires a costly page table walk in memory.",
    explanationChinese: "TLB 是一个小型、快速的硬件缓存，存储最近使用的虚拟到物理页面映射。没有 TLB，每次内存访问都需要一次或多次额外的内存访问来遍历页表。TLB 命中在一个周期内完成转换，而 TLB 缺失需要代价高昂的内存中页表遍历。",
    diagram: "",
    terms: ["tlb", "page_table", "virtual_memory", "address_translation"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 14,
    q: "In virtual memory, what happens when a process accesses a page that is not in physical memory (RAM)?",
    qChinese: "在虚拟内存中，当进程访问一个不在物理内存（RAM）中的页面时会发生什么？",
    options: [
      "A) The process is immediately terminated",
      "B) A page fault occurs, and the OS loads the page from disk into RAM",
      "C) The CPU waits until the page appears in RAM",
      "D) The page is automatically created with zero-filled content"
    ],
    optionsChinese: [
      "A) 进程立即终止",
      "B) 发生缺页中断，操作系统从磁盘将页面加载到 RAM",
      "C) CPU 等待直到页面出现在 RAM 中",
      "D) 页面自动创建并填充零内容"
    ],
    answer: 1,
    explanation: "A page fault is a hardware interrupt triggered when the accessed page's present bit is 0 in the page table. The OS page fault handler then locates the page on disk (swap space or file), selects a victim frame if memory is full (using LRU or similar), loads the page into RAM, updates the page table, and resumes the faulting instruction.",
    explanationChinese: "缺页中断是当页表中被访问页面的存在位为 0 时触发的硬件中断。操作系统的缺页处理程序随后在磁盘（交换空间或文件）上定位该页面，如果内存已满则选择一个牺牲帧（使用 LRU 或类似策略），将页面加载到 RAM，更新页表，然后恢复执行引发中断的指令。",
    diagram: "",
    terms: ["page_fault", "virtual_memory", "swap_space", "page_table"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 15,
    q: "What is the size of the virtual address space for a process on a system with 48-bit virtual addresses?",
    qChinese: "在使用 48 位虚拟地址的系统上，一个进程的虚拟地址空间大小是多少？",
    options: [
      "A) 48 KB",
      "B) 256 TB",
      "C) 4 GB",
      "D) 64 TB"
    ],
    optionsChinese: [
      "A) 48 KB",
      "B) 256 TB",
      "C) 4 GB",
      "D) 64 TB"
    ],
    answer: 1,
    explanation: "With 48-bit virtual addresses, the address space is 2^48 bytes = 256 TB. Modern x86-64 processors typically use 48-bit virtual addresses (with the upper 16 bits as a sign extension), giving each process a 256 TB virtual address space. This is far more than physical RAM, which is managed by the virtual memory system and page tables.",
    explanationChinese: "使用 48 位虚拟地址，地址空间为 2^48 字节 = 256 TB。现代 x86-64 处理器通常使用 48 位虚拟地址（高 16 位作为符号扩展），给每个进程 256 TB 的虚拟地址空间。这远大于物理 RAM，由虚拟内存系统和页表管理。",
    diagram: "",
    terms: ["virtual_address_space", "x86_64", "address_bits"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 16,
    q: "What system call creates a new process in Unix/Linux by duplicating the calling process?",
    qChinese: "在 Unix/Linux 中，哪个系统调用通过复制调用进程来创建新进程？",
    options: [
      "A) exec()",
      "B) spawn()",
      "C) fork()",
      "D) create()"
    ],
    optionsChinese: [
      "A) exec()",
      "B) spawn()",
      "C) fork()",
      "D) create()"
    ],
    answer: 2,
    explanation: "fork() creates a new child process that is a near-exact copy of the parent, including code, data, and open file descriptors. It returns 0 to the child and the child's PID to the parent. Modern systems use copy-on-write optimization, where pages are shared until one process modifies them. exec() replaces the process image with a new program.",
    explanationChinese: "fork() 创建一个新的子进程，它是父进程的几乎完全副本，包括代码、数据和打开的文件描述符。它向子进程返回 0，向父进程返回子进程的 PID。现代系统使用写时复制优化，页面在某个进程修改之前是共享的。exec() 用新程序替换进程映像。",
    diagram: "",
    terms: ["fork", "process_creation", "copy_on_write", "system_call"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 17,
    q: "What is the key difference between a process and a thread?",
    qChinese: "进程和线程的关键区别是什么？",
    options: [
      "A) Threads cannot execute code; only processes can",
      "B) Threads within the same process share the same address space and resources, while processes have separate address spaces",
      "C) Processes are always faster than threads",
      "D) A thread can belong to multiple processes simultaneously"
    ],
    optionsChinese: [
      "A) 线程不能执行代码；只有进程可以",
      "B) 同一进程内的线程共享相同的地址空间和资源，而进程有独立的地址空间",
      "C) 进程总是比线程快",
      "D) 一个线程可以同时属于多个进程"
    ],
    answer: 1,
    explanation: "Threads are lightweight execution units within a process that share the same virtual address space, heap, global variables, and file descriptors. Each thread has its own stack, program counter, and register state. This shared memory model makes inter-thread communication faster than inter-process communication but requires careful synchronization to avoid race conditions.",
    explanationChinese: "线程是进程内的轻量级执行单元，共享相同的虚拟地址空间、堆、全局变量和文件描述符。每个线程有自己的栈、程序计数器和寄存器状态。这种共享内存模型使线程间通信比进程间通信更快，但需要仔细同步以避免竞争条件。",
    diagram: "",
    terms: ["process", "thread", "address_space", "shared_memory"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 18,
    q: "What is a race condition in concurrent programming?",
    qChinese: "在并发编程中，什么是竞争条件？",
    options: [
      "A) When two threads finish execution at the same time",
      "B) When the program's outcome depends on the unpredictable order of thread execution",
      "C) When a thread runs faster than another thread",
      "D) When the CPU switches between threads too frequently"
    ],
    optionsChinese: [
      "A) 当两个线程同时完成执行",
      "B) 当程序的结果取决于线程执行的不可预测顺序",
      "C) 当一个线程比另一个线程运行得更快",
      "D) 当 CPU 在线程之间切换过于频繁"
    ],
    answer: 1,
    explanation: "A race condition occurs when multiple threads access shared data concurrently and at least one modifies it, with the final result depending on the nondeterministic scheduling order. For example, two threads incrementing a shared counter may lose updates. Solutions include mutexes, semaphores, and atomic operations to enforce mutual exclusion on critical sections.",
    explanationChinese: "竞争条件发生在多个线程并发访问共享数据且至少一个线程修改数据时，最终结果取决于不确定的调度顺序。例如，两个线程递增共享计数器可能丢失更新。解决方案包括互斥锁、信号量和原子操作，以在临界区强制互斥。",
    diagram: "",
    terms: ["race_condition", "mutual_exclusion", "mutex", "critical_section"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 19,
    q: "In two's complement representation using 8 bits, what decimal value does the binary number 11111110 represent?",
    qChinese: "在 8 位二进制补码表示中，二进制数 11111110 表示的十进制值是多少？",
    options: [
      "A) 254",
      "B) -1",
      "C) -2",
      "D) 126"
    ],
    optionsChinese: [
      "A) 254",
      "B) -1",
      "C) -2",
      "D) 126"
    ],
    answer: 2,
    explanation: "In two's complement, the MSB is the sign bit (1 means negative). To find the magnitude of a negative number: invert all bits (00000001) and add 1 (00000010) = 2, so the value is -2. Alternatively, the value is -128 + 64 + 32 + 16 + 8 + 4 + 2 + 0 = -2. Two's complement is the standard signed integer representation in modern computers.",
    explanationChinese: "在二进制补码中，最高位是符号位（1 表示负数）。求负数的绝对值：取反所有位（00000001）加 1（00000010）= 2，所以值为 -2。或者，值为 -128 + 64 + 32 + 16 + 8 + 4 + 2 + 0 = -2。二进制补码是现代计算机中标准的有符号整数表示。",
    diagram: "",
    terms: ["twos_complement", "binary_representation", "signed_integer"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  },
  {
    id: 20,
    q: "What is a buffer overflow vulnerability and which memory region is most commonly targeted?",
    qChinese: "什么是缓冲区溢出漏洞，最常被攻击的是哪个内存区域？",
    options: [
      "A) Writing beyond array bounds; the heap",
      "B) Writing beyond buffer bounds on the stack, overwriting the return address",
      "C) Reading uninitialized memory in the BSS segment",
      "D) Exceeding the virtual address space limit"
    ],
    optionsChinese: [
      "A) 写入超过数组边界；堆",
      "B) 写入超过栈上缓冲区边界，覆盖返回地址",
      "C) 读取 BSS 段中未初始化的内存",
      "D) 超过虚拟地址空间限制"
    ],
    answer: 1,
    explanation: "A stack buffer overflow occurs when data written to a stack buffer exceeds its allocated size, overwriting adjacent stack memory including the saved return address. An attacker can craft input to redirect execution to injected shellcode or existing code gadgets (ROP). Defenses include stack canaries, ASLR, DEP/NX bit, and using safe functions like strncpy.",
    explanationChinese: "栈缓冲区溢出发生在写入栈缓冲区的数据超过其分配大小时，覆盖相邻的栈内存包括保存的返回地址。攻击者可以精心构造输入将执行重定向到注入的 shellcode 或已有的代码片段（ROP）。防御措施包括栈金丝雀、ASLR、DEP/NX 位和使用安全函数如 strncpy。",
    diagram: "",
    terms: ["buffer_overflow", "stack_smashing", "return_address", "aslr"],
    image: "",
    youtube: "",
    youtubeTitle: ""
  }
];
