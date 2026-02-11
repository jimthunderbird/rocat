const questionsA1 = [
  // ===== GENERAL ENGINE DIAGNOSIS (Questions 1–40) =====
  {
    id: 1,
    q: "A vehicle cranks but will not start. A spark test shows no spark at any cylinder. A fuel pressure test shows adequate pressure. Which of the following is the MOST likely cause?",
    options: [
      "A) Clogged fuel filter",
      "B) Faulty crankshaft position sensor",
      "C) Worn piston rings",
      "D) Low engine oil level"
    ],
    answer: 1,
    explanation: "The crankshaft position sensor provides the signal the ignition module and PCM need to fire the ignition coils. Without a valid crank signal, the PCM cannot determine engine position and will not trigger spark events, causing a crank-no-start condition even when fuel pressure is normal.",
    diagram: "",
    terms: ["crankshaft_position_sensor", "pcm", "ignition_coil"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Crankshaft.jpg/640px-Crankshaft.jpg",
    youtube: "https://www.youtube.com/watch?v=i70X4-RCBKs",
    youtubeTitle: "Crankshaft Position Sensor Testing",
    qChinese: "车辆能转动曲轴但无法启动。火花测试显示所有气缸均无火花。燃油压力测试显示压力正常。以下哪项是最可能的原因？",
    optionsChinese: [
      "A) 堵塞的燃油滤清器",
      "B) 故障的曲轴位置传感器",
      "C) 磨损的活塞环",
      "D) 发动机机油液位低"
    ],
    explanationChinese: "曲轴位置传感器为点火模块和PCM提供触发点火线圈所需的信号。没有有效的曲轴信号，PCM无法确定发动机位置，不会触发点火事件，即使燃油压力正常也会导致能cranking但无法启动的状况。"
  },
  {
    id: 2,
    q: "A compression test on a four-cylinder engine yields the following results: Cylinder 1 – 155 psi, Cylinder 2 – 150 psi, Cylinder 3 – 90 psi, Cylinder 4 – 152 psi. A wet compression test on Cylinder 3 raises the reading to 140 psi. What does this indicate?",
    options: [
      "A) A burned exhaust valve on Cylinder 3",
      "B) A blown head gasket between Cylinders 3 and 4",
      "C) Worn piston rings on Cylinder 3",
      "D) A cracked cylinder head"
    ],
    answer: 2,
    explanation: "When adding oil to the cylinder raises the compression reading significantly, it indicates that the piston rings are not sealing properly. The oil temporarily fills the gap between the rings and cylinder wall, restoring compression. A valve or head gasket issue would not improve with added oil.",
    diagram: "",
    terms: ["compression_test", "wet_compression_test", "piston_rings"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Four_stroke_engine_diagram.jpg/640px-Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=_SE-HmuReKA",
    youtubeTitle: "How to Do a Compression Test",
    qChinese: "对一台四缸发动机进行压缩测试，结果如下：1缸 - 155 psi，2缸 - 150 psi，3缸 - 90 psi，4缸 - 152 psi。对3缸进行湿压缩测试后读数升至140 psi。这说明什么？",
    optionsChinese: [
      "A) 3缸排气门烧蚀",
      "B) 3缸和4缸之间的缸垫漏气",
      "C) 3缸活塞环磨损",
      "D) 气缸盖开裂"
    ],
    explanationChinese: "向气缸内加入机油后压缩读数显著升高，说明活塞环密封不良。机油暂时填补了活塞环与缸壁之间的间隙，恢复了压缩。气门或缸垫问题不会因加入机油而改善。"
  },
  {
    id: 3,
    q: "A vacuum gauge connected to the intake manifold reads a steady 17 in-Hg at idle. The specification calls for 18–21 in-Hg. Which condition is MOST likely?",
    options: [
      "A) Retarded ignition timing or restricted exhaust",
      "B) A stuck-open EGR valve",
      "C) A burned intake valve",
      "D) A worn camshaft lobe"
    ],
    answer: 0,
    explanation: "A steady but low vacuum reading typically points to retarded ignition timing or a restricted exhaust system. A burned valve would cause the needle to drop regularly, a stuck-open EGR would cause a rough idle with fluctuating vacuum, and a worn cam lobe would also produce an intermittent drop.",
    diagram: "",
    terms: ["vacuum_gauge", "catalytic_converter", "egr_valve"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Gasoline_engine_with_carburetor.jpg/640px-Gasoline_engine_with_carburetor.jpg",
    youtube: "https://www.youtube.com/watch?v=0z_HFLOKKSk",
    youtubeTitle: "How to Use a Vacuum Gauge for Engine Diagnosis",
    qChinese: "将真空表连接到进气歧管，怠速时读数稳定在17英寸汞柱。规格要求为18-21英寸汞柱。最可能的状况是什么？",
    optionsChinese: [
      "A) 点火正时延迟或排气受限",
      "B) EGR阀卡在打开位置",
      "C) 进气门烧蚀",
      "D) 凸轮轴凸轮磨损"
    ],
    explanationChinese: "稳定但偏低的真空读数通常指向点火正时延迟或排气系统受限。烧蚀的气门会导致指针有规律地下降，EGR阀卡开会导致怠速不稳且真空波动，凸轮轴凸轮磨损也会产生间歇性下降。"
  },
  {
    id: 4,
    q: "An engine has a ticking noise that increases with engine speed. The noise is loudest near the top of the engine. Oil level and pressure are within specification. What is the MOST likely cause?",
    options: [
      "A) Worn main bearings",
      "B) Excessive valve lash or a worn rocker arm",
      "C) Piston slap",
      "D) A cracked flexplate"
    ],
    answer: 1,
    explanation: "A ticking noise that increases with RPM and originates from the top of the engine is characteristic of a valve train issue such as excessive valve lash or a worn rocker arm. Main bearing knock is a lower-pitched sound from the bottom end, while piston slap is typically loudest when the engine is cold.",
    diagram: "",
    terms: ["hydraulic_lifter", "camshaft", "oil_pressure"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Camshaft.JPG/640px-Camshaft.JPG",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Diagnosing Engine Noises",
    qChinese: "发动机有一种随转速增加而加剧的滴答声。噪音在发动机顶部最响。机油液位和油压均在规格范围内。最可能的原因是什么？",
    optionsChinese: [
      "A) 主轴承磨损",
      "B) 气门间隙过大或摇臂磨损",
      "C) 活塞敲缸",
      "D) 挠性飞轮开裂"
    ],
    explanationChinese: "随转速增加并来自发动机顶部的滴答声是气门系统问题的典型特征，如气门间隙过大或摇臂磨损。主轴承敲击是来自底部的低沉声音，而活塞敲缸通常在发动机冷态时最响。"
  },
  {
    id: 5,
    q: "Technician A says blue smoke from the exhaust at startup that clears after a few minutes indicates worn valve stem seals. Technician B says it indicates worn piston rings. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Blue smoke on startup that clears shortly afterward is a classic symptom of worn valve stem seals. Oil seeps past the seals while the engine sits and burns off when the engine starts. Worn piston rings typically produce continuous blue smoke under load and acceleration, not just at startup.",
    diagram: "",
    terms: ["valve_stem_seals", "piston_rings", "cylinder_head"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Automobile_exhaust_gas.jpg/640px-Automobile_exhaust_gas.jpg",
    youtube: "https://www.youtube.com/watch?v=cFrUJCG2HZ0",
    youtubeTitle: "What Different Exhaust Smoke Colors Mean",
    qChinese: "技师A说启动时排出蓝烟且几分钟后消失表明气门油封磨损。技师B说这表明活塞环磨损。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "启动时出现蓝烟且很快消失是气门油封磨损的典型症状。发动机停止运转时机油渗过油封，启动时被燃烧掉。活塞环磨损通常在负载和加速时持续产生蓝烟，而不仅仅在启动时。"
  },
  {
    id: 6,
    q: "An engine overheats only at highway speed but runs at normal temperature in city driving. Which of the following is the MOST likely cause?",
    options: [
      "A) A faulty thermostat stuck open",
      "B) A restricted radiator",
      "C) A faulty cooling fan relay",
      "D) Low coolant level"
    ],
    answer: 1,
    explanation: "A restricted radiator cannot dissipate enough heat at higher engine loads and RPMs encountered at highway speed. A faulty fan relay would cause overheating at idle or low speed when airflow depends on the fan. A thermostat stuck open would cause the engine to run cool, not overheat.",
    diagram: "",
    terms: ["radiator", "thermostat", "water_pump", "relay"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pqFZY6v6OQI",
    youtubeTitle: "How a Car Cooling System Works",
    qChinese: "发动机仅在高速公路行驶时过热，但在市区行驶时温度正常。以下哪项是最可能的原因？",
    optionsChinese: [
      "A) 节温器卡在打开位置",
      "B) 散热器堵塞",
      "C) 冷却风扇继电器故障",
      "D) 冷却液液位低"
    ],
    explanationChinese: "堵塞的散热器在高速公路行驶时发动机负荷和转速较高的情况下无法散发足够的热量。风扇继电器故障会在怠速或低速时导致过热，因为此时气流依赖风扇。节温器卡在打开位置会导致发动机温度偏低，而非过热。"
  },
  {
    id: 7,
    q: "A cylinder leak-down test on Cylinder 4 shows 35% leakage. Air can be heard hissing from the tailpipe. What is the MOST likely cause?",
    options: [
      "A) Worn piston rings",
      "B) A cracked piston",
      "C) A burned or improperly seating exhaust valve",
      "D) A blown head gasket"
    ],
    answer: 2,
    explanation: "During a leak-down test, air escaping from the tailpipe indicates that the exhaust valve is not sealing. This can be caused by a burned exhaust valve, carbon buildup on the valve seat, or a bent valve. If rings were worn, air would escape into the crankcase through the oil filler cap or dipstick tube.",
    diagram: "",
    terms: ["leak_down_test", "cylinder_head", "valve_stem_seals"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Cylinder_head.jpg/640px-Cylinder_head.jpg",
    youtube: "https://www.youtube.com/watch?v=rIeBsFBqMCk",
    youtubeTitle: "Cylinder Leak-Down Test Explained",
    qChinese: "4缸的气缸漏气测试显示35%的泄漏。可以听到空气从排气管嘶嘶漏出。最可能的原因是什么？",
    optionsChinese: [
      "A) 活塞环磨损",
      "B) 活塞开裂",
      "C) 排气门烧蚀或密封不良",
      "D) 缸垫漏气"
    ],
    explanationChinese: "在漏气测试中，空气从排气管逸出说明排气门没有密封。这可能是由排气门烧蚀、气门座积碳或气门弯曲引起的。如果活塞环磨损，空气会通过机油加注口或油尺管逸入曲轴箱。"
  },
  {
    id: 8,
    q: "An oil pressure gauge reads low at idle but increases to normal at higher RPMs. All of the following could cause this EXCEPT:",
    options: [
      "A) Worn main bearings",
      "B) A weak oil pressure relief valve spring",
      "C) A clogged oil pickup screen",
      "D) Using the manufacturer-recommended oil viscosity"
    ],
    answer: 3,
    explanation: "Using the manufacturer-recommended oil viscosity is the correct practice and would not cause low oil pressure. Worn main bearings increase clearance and leak oil faster at low RPM. A weak relief spring bleeds off pressure. A clogged pickup screen restricts oil flow, especially at lower pump speeds.",
    diagram: "",
    terms: ["oil_pressure", "oil_change", "crankshaft_position_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Oil_pump_of_an_automobile_engine.jpg/640px-Oil_pump_of_an_automobile_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=05n6VzLJg7E",
    youtubeTitle: "Engine Oil Pressure - How It Works",
    qChinese: "机油压力表在怠速时读数偏低，但在高转速时恢复正常。以下所有原因都可能导致此问题，除了：",
    optionsChinese: [
      "A) 主轴承磨损",
      "B) 机油泄压阀弹簧过弱",
      "C) 机油吸油滤网堵塞",
      "D) 使用制造商推荐的机油粘度"
    ],
    explanationChinese: "使用制造商推荐的机油粘度是正确的做法，不会导致低油压。磨损的主轴承增加间隙，在低转速时泄漏机油更快。泄压阀弹簧过弱会泄放压力。堵塞的吸油滤网会限制机油流动，特别是在泵速较低时。"
  },
  {
    id: 9,
    q: "White smoke continuously coming from the exhaust of a warm engine MOST likely indicates:",
    options: [
      "A) A rich air-fuel mixture",
      "B) Coolant entering the combustion chamber",
      "C) Worn valve stem seals",
      "D) A stuck-open PCV valve"
    ],
    answer: 1,
    explanation: "Continuous white smoke from a fully warmed engine is a classic sign of coolant entering the combustion chambers and being converted to steam. This is commonly caused by a blown head gasket, cracked cylinder head, or cracked engine block. Blue smoke indicates oil burning; black smoke indicates a rich mixture.",
    diagram: "",
    terms: ["head_gasket", "cylinder_head", "coolant_temperature_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Cylinder_head.jpg/640px-Cylinder_head.jpg",
    youtube: "https://www.youtube.com/watch?v=LjBnOajR1Nw",
    youtubeTitle: "Head Gasket Failure - Signs and Diagnosis",
    qChinese: "暖机后的发动机持续从排气管排出白烟，最可能表明：",
    optionsChinese: [
      "A) 空燃比过浓",
      "B) 冷却液进入燃烧室",
      "C) 气门油封磨损",
      "D) PCV阀卡在打开位置"
    ],
    explanationChinese: "完全暖机后持续排出白烟是冷却液进入燃烧室并转化为蒸汽的典型标志。这通常由缸垫漏气、气缸盖开裂或发动机缸体开裂引起。蓝烟表明烧机油；黑烟表明混合气过浓。"
  },
  {
    id: 10,
    q: "A technician is using a DMM to test an engine coolant temperature sensor. As engine temperature increases, the resistance reading should:",
    options: [
      "A) Increase steadily",
      "B) Decrease steadily",
      "C) Remain the same",
      "D) Fluctuate rapidly"
    ],
    answer: 1,
    explanation: "Most engine coolant temperature sensors are negative temperature coefficient (NTC) thermistors. As temperature rises, resistance decreases. The PCM uses this changing resistance to determine engine temperature for fuel delivery, ignition timing, and emission control calculations.",
    diagram: "",
    terms: ["coolant_temperature_sensor", "dmm", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pqFZY6v6OQI",
    youtubeTitle: "How a Car Cooling System Works",
    qChinese: "技师正在使用数字万用表测试发动机冷却液温度传感器。随着发动机温度升高，电阻读数应该：",
    optionsChinese: [
      "A) 稳定上升",
      "B) 稳定下降",
      "C) 保持不变",
      "D) 快速波动"
    ],
    explanationChinese: "大多数发动机冷却液温度传感器是负温度系数（NTC）热敏电阻。随着温度升高，电阻降低。PCM利用这种变化的电阻来确定发动机温度，用于燃油喷射、点火正时和排放控制计算。"
  },
  {
    id: 11,
    q: "An engine has a knocking noise under load that gets quieter at idle. Oil pressure is within specification. Technician A says the cause is likely worn rod bearings. Technician B says the cause is likely carbon buildup in the combustion chambers causing detonation. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 1,
    explanation: "Knocking under load that diminishes at idle is characteristic of detonation, often caused by carbon buildup in the combustion chambers. The carbon raises compression ratio and creates hot spots. Rod bearing knock tends to be present at all speeds and worsens with RPM, so Technician B is correct.",
    diagram: "",
    terms: ["detonation", "spark_plug", "oil_pressure"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Diagnosing Engine Noises",
    qChinese: "发动机在负载下有敲击声，怠速时变轻。油压在规格范围内。技师A说原因可能是连杆轴承磨损。技师B说原因可能是燃烧室积碳导致爆震。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "负载下出现敲击声且怠速时减轻是爆震的特征，通常由燃烧室积碳引起。积碳提高了压缩比并产生热点。连杆轴承敲击往往在所有转速下都存在并随转速恶化，因此技师B是正确的。"
  },
  {
    id: 12,
    q: "Technician A says a vacuum gauge reading that fluctuates between 14 and 19 in-Hg at idle indicates a vacuum leak. Technician B says it indicates a burned valve or weak valve spring. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 1,
    explanation: "A vacuum gauge needle that regularly drops and returns at idle typically indicates a burned valve or a weak valve spring allowing intermittent sealing loss. A vacuum leak usually produces a steady low reading or a slightly fluctuating reading, not the rhythmic dropping pattern associated with valve problems.",
    diagram: "",
    terms: ["vacuum_gauge", "cylinder_head", "valve_stem_seals"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Gasoline_engine_with_carburetor.jpg/640px-Gasoline_engine_with_carburetor.jpg",
    youtube: "https://www.youtube.com/watch?v=0z_HFLOKKSk",
    youtubeTitle: "How to Use a Vacuum Gauge for Engine Diagnosis",
    qChinese: "技师A说真空表在怠速时读数在14到19英寸汞柱之间波动表明有真空泄漏。技师B说这表明气门烧蚀或气门弹簧过弱。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "真空表指针在怠速时有规律地下降和恢复通常表明气门烧蚀或气门弹簧过弱导致间歇性密封丧失。真空泄漏通常产生稳定的低读数或略微波动的读数，而不是与气门问题相关的有节奏的下降模式。"
  },
  {
    id: 13,
    q: "During a relative compression test using a current probe on the starter circuit, one cylinder shows significantly lower current draw than the others. This indicates:",
    options: [
      "A) Higher compression in that cylinder",
      "B) Lower compression in that cylinder",
      "C) A faulty starter motor",
      "D) Excessive resistance in the battery cables"
    ],
    answer: 1,
    explanation: "During cranking, each cylinder creates a current spike as the starter compresses the air-fuel charge. A cylinder with low compression requires less effort to compress, producing a lower current draw peak. This is a quick way to identify a weak cylinder without removing spark plugs for a traditional test.",
    diagram: "",
    terms: ["compression_test", "starter_motor", "piston_rings"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Four_stroke_engine_diagram.jpg/640px-Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=_SE-HmuReKA",
    youtubeTitle: "How to Do a Compression Test",
    qChinese: "在使用电流探头对起动机电路进行相对压缩测试时，某一个气缸显示的电流消耗明显低于其他气缸。这表明：",
    optionsChinese: [
      "A) 该气缸压缩压力较高",
      "B) 该气缸压缩压力较低",
      "C) 起动机故障",
      "D) 蓄电池电缆电阻过大"
    ],
    explanationChinese: "在起动过程中，每个气缸在压缩空气-燃油混合物时都会产生一个电流峰值。压缩压力低的气缸压缩所需的力更小，产生的电流消耗峰值更低。这是一种无需拆卸火花塞即可快速识别薄弱气缸的方法。"
  },
  {
    id: 14,
    q: "A vehicle exhibits excessive exhaust backpressure. All of the following symptoms may be present EXCEPT:",
    options: [
      "A) Loss of power at higher RPMs",
      "B) Engine overheating",
      "C) Improved fuel economy",
      "D) A lower-than-normal vacuum reading"
    ],
    answer: 2,
    explanation: "Excessive exhaust backpressure restricts exhaust flow, causing power loss at high RPM, potential overheating from retained heat, and lower intake vacuum. It would never improve fuel economy—it worsens it because the engine must work harder to expel exhaust gases, reducing overall volumetric efficiency.",
    diagram: "",
    terms: ["catalytic_converter", "vacuum_gauge", "exhaust system"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Automobile_exhaust_gas.jpg/640px-Automobile_exhaust_gas.jpg",
    youtube: "https://www.youtube.com/watch?v=cFrUJCG2HZ0",
    youtubeTitle: "What Different Exhaust Smoke Colors Mean",
    qChinese: "车辆表现出过大的排气背压。以下所有症状都可能出现，除了：",
    optionsChinese: [
      "A) 高转速时动力损失",
      "B) 发动机过热",
      "C) 燃油经济性改善",
      "D) 低于正常水平的真空读数"
    ],
    explanationChinese: "过大的排气背压限制排气流动，导致高转速时动力损失、因热量滞留而可能过热以及进气真空降低。它绝不会改善燃油经济性——反而会恶化，因为发动机必须更努力地排出废气，降低了整体容积效率。"
  },
  {
    id: 15,
    q: "An engine vibrates excessively at idle but smooths out above 1,500 RPM. All other engine parameters are normal. What is the MOST likely cause?",
    options: [
      "A) A broken or collapsed engine mount",
      "B) A misfiring spark plug",
      "C) An exhaust leak at the manifold",
      "D) A worn timing chain"
    ],
    answer: 0,
    explanation: "A broken or collapsed engine mount cannot properly absorb engine vibrations at idle. At higher RPMs, gyroscopic forces and inertia tend to mask the vibration. A misfire would typically set a code and cause roughness at all speeds. An exhaust leak would produce noise but not necessarily a vibration felt in the vehicle.",
    diagram: "",
    terms: ["engine_mount", "misfire", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=Bvp2eMfnFSo",
    youtubeTitle: "Engine Diagnosis Basics for Beginners",
    qChinese: "发动机在怠速时振动过大，但在1500转以上变得平稳。其他所有发动机参数正常。最可能的原因是什么？",
    optionsChinese: [
      "A) 发动机支架断裂或塌陷",
      "B) 火花塞失火",
      "C) 排气歧管处排气泄漏",
      "D) 正时链条磨损"
    ],
    explanationChinese: "断裂或塌陷的发动机支架无法在怠速时正确吸收发动机振动。在较高转速下，陀螺效应和惯性往往会掩盖振动。失火通常会设置故障码并在所有转速下引起粗糙运转。排气泄漏会产生噪音但不一定会产生车内感觉到的振动。"
  },
  {
    id: 16,
    q: "A technician connects a vacuum gauge to the intake manifold and the needle drifts slowly between 14 and 17 in-Hg. This reading MOST likely indicates:",
    options: [
      "A) A restricted exhaust",
      "B) Incorrect air-fuel mixture or an ignition timing problem",
      "C) A blown head gasket",
      "D) Normal engine operation"
    ],
    answer: 1,
    explanation: "A vacuum gauge needle that drifts slowly back and forth over a range of a few inches of mercury typically indicates an incorrect air-fuel mixture or an ignition timing issue. A restricted exhaust causes the needle to initially read normal then gradually drop. A blown head gasket causes irregular fluctuations.",
    diagram: "",
    terms: ["vacuum_gauge", "fuel_trim", "ignition_coil"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Gasoline_engine_with_carburetor.jpg/640px-Gasoline_engine_with_carburetor.jpg",
    youtube: "https://www.youtube.com/watch?v=0z_HFLOKKSk",
    youtubeTitle: "How to Use a Vacuum Gauge for Engine Diagnosis",
    qChinese: "技师将真空表连接到进气歧管，指针在14到17英寸汞柱之间缓慢漂移。此读数最可能表明：",
    optionsChinese: [
      "A) 排气受限",
      "B) 空燃比不正确或点火正时问题",
      "C) 缸垫漏气",
      "D) 发动机正常运行"
    ],
    explanationChinese: "真空表指针在几英寸汞柱范围内缓慢来回漂移通常表明空燃比不正确或点火正时问题。排气受限会导致指针先读数正常然后逐渐下降。缸垫漏气会导致不规则波动。"
  },
  {
    id: 17,
    q: "Black smoke from the exhaust during acceleration is MOST likely caused by:",
    options: [
      "A) A leaking head gasket",
      "B) An excessively rich air-fuel mixture",
      "C) Worn valve stem seals",
      "D) A stuck-closed thermostat"
    ],
    answer: 1,
    explanation: "Black exhaust smoke indicates unburned fuel, which means the air-fuel mixture is too rich. Causes include a stuck fuel injector, high fuel pressure, a faulty MAP or MAF sensor, or a saturated charcoal canister. Blue smoke indicates oil burning, and white smoke indicates coolant entering the combustion chamber.",
    diagram: "",
    terms: ["fuel_injector", "maf_sensor", "stoichiometric"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Automobile_exhaust_gas.jpg/640px-Automobile_exhaust_gas.jpg",
    youtube: "https://www.youtube.com/watch?v=cFrUJCG2HZ0",
    youtubeTitle: "What Different Exhaust Smoke Colors Mean",
    qChinese: "加速时排气管排出黑烟，最可能的原因是：",
    optionsChinese: [
      "A) 缸垫泄漏",
      "B) 空燃比过浓",
      "C) 气门油封磨损",
      "D) 节温器卡在关闭位置"
    ],
    explanationChinese: "排气黑烟表明有未燃烧的燃油，即空燃比过浓。原因包括喷油器卡住、燃油压力过高、MAP或MAF传感器故障或活性炭罐饱和。蓝烟表明烧机油，白烟表明冷却液进入燃烧室。"
  },
  {
    id: 18,
    q: "A technician is using a digital multimeter to check for voltage drop across the engine ground strap. With the engine cranking, the reading is 0.8V. This indicates:",
    options: [
      "A) The ground strap is in good condition",
      "B) Excessive resistance in the ground circuit",
      "C) A faulty starter solenoid",
      "D) A weak battery"
    ],
    answer: 1,
    explanation: "Maximum acceptable voltage drop on a ground circuit is typically 0.2V (200 mV). A reading of 0.8V indicates excessive resistance in the ground strap or its connections, which can cause slow cranking, hard starting, and erratic electrical behavior. The strap or its connections should be cleaned or replaced.",
    diagram: "",
    terms: ["voltage_drop_test", "ground_circuit", "dmm", "starter_motor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=Bvp2eMfnFSo",
    youtubeTitle: "Engine Diagnosis Basics for Beginners",
    qChinese: "技师正在使用数字万用表检查发动机接地线的压降。在起动过程中读数为0.8V。这表明：",
    optionsChinese: [
      "A) 接地线状况良好",
      "B) 接地电路电阻过大",
      "C) 起动机电磁开关故障",
      "D) 蓄电池电量不足"
    ],
    explanationChinese: "接地电路的最大可接受压降通常为0.2V（200mV）。0.8V的读数表明接地线或其连接处电阻过大，这可能导致起动缓慢、启动困难和电气行为异常。应清洁或更换接地线及其连接。"
  },
  {
    id: 19,
    q: "A cylinder leak-down test shows 5% leakage on all cylinders. This result indicates:",
    options: [
      "A) The engine has serious internal problems",
      "B) The engine is in good mechanical condition",
      "C) The head gaskets need replacement",
      "D) The piston rings are worn beyond service limits"
    ],
    answer: 1,
    explanation: "A leak-down reading of 5% or less on all cylinders indicates excellent sealing of the rings, valves, and head gaskets. Most manufacturers consider up to 10–15% leakage acceptable. Uniform readings across all cylinders also confirm consistent engine condition with no individual cylinder weaknesses.",
    diagram: "",
    terms: ["leak_down_test", "piston_rings", "head_gasket"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Four_stroke_engine_diagram.jpg/640px-Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=rIeBsFBqMCk",
    youtubeTitle: "Cylinder Leak-Down Test Explained",
    qChinese: "气缸漏气测试显示所有气缸的泄漏率为5%。此结果表明：",
    optionsChinese: [
      "A) 发动机有严重的内部问题",
      "B) 发动机机械状况良好",
      "C) 缸垫需要更换",
      "D) 活塞环磨损超过使用极限"
    ],
    explanationChinese: "所有气缸漏气率为5%或更低表明活塞环、气门和缸垫密封状况优良。大多数制造商认为10-15%的泄漏率是可接受的。所有气缸读数一致也确认了发动机状况均匀，没有个别气缸的薄弱环节。"
  },
  {
    id: 20,
    q: "An engine cranks slowly on a cold morning. The battery tests good and cables show no visible corrosion. What should the technician check NEXT?",
    options: [
      "A) Fuel injector resistance",
      "B) Voltage drop across the starter circuit cables during cranking",
      "C) Intake manifold vacuum",
      "D) Exhaust backpressure"
    ],
    answer: 1,
    explanation: "Even when a battery tests good and cables look clean externally, internal corrosion in the cables or poor terminal connections can cause high resistance. A voltage drop test during cranking will reveal hidden resistance in the positive and ground cables that visual inspection cannot detect.",
    diagram: "",
    terms: ["voltage_drop_test", "starter_motor", "battery"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=Bvp2eMfnFSo",
    youtubeTitle: "Engine Diagnosis Basics for Beginners",
    qChinese: "在寒冷的早晨发动机起动缓慢。蓄电池测试正常，电缆无可见腐蚀。技师接下来应检查什么？",
    optionsChinese: [
      "A) 喷油器电阻",
      "B) 起动过程中起动机电路电缆的压降",
      "C) 进气歧管真空度",
      "D) 排气背压"
    ],
    explanationChinese: "即使蓄电池测试正常且电缆外观干净，电缆内部腐蚀或端子连接不良仍可能导致高电阻。起动过程中的压降测试可以发现目视检查无法检测到的正极和接地电缆中的隐藏电阻。"
  },
  {
    id: 21,
    q: "Technician A says an engine noise that changes when a spark plug wire is disconnected from one cylinder is likely coming from that cylinder's reciprocating components. Technician B says the noise could be from a cracked spark plug. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Shorting out or disconnecting a spark plug wire removes the combustion load from that cylinder. If a noise changes, it indicates the source is related to that cylinder's reciprocating parts such as the piston, wrist pin, or connecting rod bearing. A cracked spark plug would not typically cause an audible engine noise.",
    diagram: "",
    terms: ["spark_plug", "piston_rings", "misfire"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Diagnosing Engine Noises",
    qChinese: "技师A说断开某一缸的火花塞线后发动机噪音发生变化，说明噪音可能来自该缸的往复运动部件。技师B说噪音可能来自开裂的火花塞。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "短接或断开火花塞线会消除该缸的燃烧负荷。如果噪音发生变化，说明噪音源与该缸的往复运动部件有关，如活塞、活塞销或连杆轴承。开裂的火花塞通常不会产生可听到的发动机噪音。"
  },
  {
    id: 22,
    q: "An engine has a compression reading of 0 psi on two adjacent cylinders. All other cylinders read 150 psi. What is the MOST likely cause?",
    options: [
      "A) Both cylinders have broken valve springs",
      "B) A blown head gasket between the two cylinders",
      "C) Worn piston rings on both cylinders",
      "D) A clogged catalytic converter"
    ],
    answer: 1,
    explanation: "Zero compression on two adjacent cylinders strongly suggests a blown head gasket between them, allowing compression to leak from one cylinder to the other. Worn rings would not cause zero compression, and two valve springs failing simultaneously on adjacent cylinders is highly unlikely. A clogged converter does not affect compression.",
    diagram: "",
    terms: ["head_gasket", "compression_test", "cylinder_head"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Cylinder_head.jpg/640px-Cylinder_head.jpg",
    youtube: "https://www.youtube.com/watch?v=LjBnOajR1Nw",
    youtubeTitle: "Head Gasket Failure - Signs and Diagnosis",
    qChinese: "发动机有两个相邻气缸的压缩读数为0 psi。其他所有气缸读数为150 psi。最可能的原因是什么？",
    optionsChinese: [
      "A) 两个气缸的气门弹簧都断裂",
      "B) 两个气缸之间的缸垫漏气",
      "C) 两个气缸的活塞环都磨损",
      "D) 催化转化器堵塞"
    ],
    explanationChinese: "两个相邻气缸压缩为零强烈暗示两缸之间的缸垫漏气，导致压缩从一个气缸泄漏到另一个。活塞环磨损不会导致压缩为零，两个相邻气缸的气门弹簧同时失效的可能性极低。催化转化器堵塞不影响压缩。"
  },
  {
    id: 23,
    q: "A technician observes milky residue on the inside of the oil filler cap. The engine does not overheat and there is no white smoke from the exhaust. What is the MOST likely cause?",
    options: [
      "A) A blown head gasket",
      "B) Moisture from condensation due to short driving trips",
      "C) A cracked engine block",
      "D) A failed oil cooler"
    ],
    answer: 1,
    explanation: "Milky residue on the oil filler cap without other coolant contamination symptoms usually indicates moisture condensation. Short driving trips that do not allow the engine to fully reach operating temperature prevent moisture from evaporating out of the crankcase. A blown gasket would typically show other symptoms.",
    diagram: "",
    terms: ["oil_pressure", "head_gasket", "thermostat"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Oil_pump_of_an_automobile_engine.jpg/640px-Oil_pump_of_an_automobile_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=05n6VzLJg7E",
    youtubeTitle: "Engine Oil Pressure - How It Works",
    qChinese: "技师在机油加注口盖内侧观察到乳白色残留物。发动机不过热，排气管也没有白烟。最可能的原因是什么？",
    optionsChinese: [
      "A) 缸垫漏气",
      "B) 由于短途行驶导致的水分凝结",
      "C) 发动机缸体开裂",
      "D) 机油冷却器失效"
    ],
    explanationChinese: "机油加注口盖上出现乳白色残留物但没有其他冷却液污染症状，通常表明是水分凝结。短途行驶未使发动机完全达到工作温度，妨碍水分从曲轴箱蒸发。缸垫漏气通常会有其他症状。"
  },
  {
    id: 24,
    q: "An engine exhibits a thumping noise from the lower end that gets louder with increased engine load. Oil pressure is slightly below specification. What is the MOST likely cause?",
    options: [
      "A) Worn camshaft bearings",
      "B) Excessive connecting rod bearing clearance",
      "C) A loose timing chain tensioner",
      "D) Worn valve lifters"
    ],
    answer: 1,
    explanation: "A thumping noise from the lower engine that increases with load, combined with low oil pressure, is characteristic of worn connecting rod bearings. Excessive bearing clearance allows the rod to pound against the crankshaft journal under combustion loads and also allows oil to escape faster, reducing pressure.",
    diagram: "",
    terms: ["oil_pressure", "crankshaft_position_sensor", "compression_test"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Crankshaft.jpg/640px-Crankshaft.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Diagnosing Engine Noises",
    qChinese: "发动机底部发出砰砰声，随发动机负荷增加而变大。油压略低于规格。最可能的原因是什么？",
    optionsChinese: [
      "A) 凸轮轴轴承磨损",
      "B) 连杆轴承间隙过大",
      "C) 正时链条张紧器松动",
      "D) 气门挺柱磨损"
    ],
    explanationChinese: "来自发动机底部并随负荷增加而变大的砰砰声，结合低油压，是连杆轴承磨损的特征。轴承间隙过大使连杆在燃烧负荷下撞击曲轴轴颈，同时允许机油更快地逸出，降低油压。"
  },
  {
    id: 25,
    q: "During a power balance test, disabling Cylinder 5 produces no change in engine RPM. What does this indicate?",
    options: [
      "A) Cylinder 5 is the strongest cylinder",
      "B) Cylinder 5 is not contributing to engine power",
      "C) The ignition system for Cylinder 5 is working correctly",
      "D) The fuel injector for Cylinder 5 is operating normally"
    ],
    answer: 1,
    explanation: "In a power balance test, disabling each cylinder should cause a noticeable RPM drop. If disabling a cylinder produces no RPM change, that cylinder was already not contributing to engine power output. The cause could be a dead fuel injector, no spark, low compression, or a combination of these factors.",
    diagram: "",
    terms: ["misfire", "fuel_injector", "ignition_coil", "compression_test"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=Bvp2eMfnFSo",
    youtubeTitle: "Engine Diagnosis Basics for Beginners",
    qChinese: "在动力平衡测试中，禁用5缸后发动机转速没有变化。这说明什么？",
    optionsChinese: [
      "A) 5缸是最强的气缸",
      "B) 5缸没有对发动机动力做出贡献",
      "C) 5缸的点火系统工作正常",
      "D) 5缸的喷油器工作正常"
    ],
    explanationChinese: "在动力平衡测试中，禁用每个气缸应导致明显的转速下降。如果禁用某个气缸后转速没有变化，说明该气缸之前就没有对发动机动力输出做出贡献。原因可能是喷油器不工作、无火花、低压缩或这些因素的组合。"
  },
  {
    id: 26,
    q: "Technician A says a running compression test is more accurate than a cranking compression test for diagnosing valve train problems. Technician B says a running compression test can identify restricted exhaust. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "A running compression test is performed with the engine running at various RPMs and can detect problems that a static cranking test misses, such as subtle valve sealing issues and restricted exhaust conditions. High running compression readings that increase with RPM can indicate exhaust restriction.",
    diagram: "",
    terms: ["compression_test", "camshaft", "catalytic_converter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Four_stroke_engine_diagram.jpg/640px-Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=_SE-HmuReKA",
    youtubeTitle: "How to Do a Compression Test",
    qChinese: "技师A说运转压缩测试比起动压缩测试更能准确诊断气门系统问题。技师B说运转压缩测试可以识别排气受限。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "运转压缩测试在发动机运转的不同转速下进行，可以检测到静态起动测试遗漏的问题，如微小的气门密封问题和排气受限。随转速增加而升高的运转压缩读数可以表明排气受限。"
  },
  {
    id: 27,
    q: "A vehicle stalls at idle when the air conditioning is turned on. What is the MOST likely cause?",
    options: [
      "A) An overcharged A/C system",
      "B) A faulty idle air control (IAC) valve or electronic throttle body",
      "C) A defective A/C compressor clutch",
      "D) Low refrigerant charge"
    ],
    answer: 1,
    explanation: "When the A/C compressor engages, it places an additional load on the engine. The PCM should compensate by commanding the IAC valve or electronic throttle body to increase idle speed. If the IAC or throttle body is faulty, it cannot increase airflow and the engine stalls under the added load.",
    diagram: "",
    terms: ["compressor", "throttle_position_sensor", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=Bvp2eMfnFSo",
    youtubeTitle: "Engine Diagnosis Basics for Beginners",
    qChinese: "开启空调后车辆在怠速时熄火。最可能的原因是什么？",
    optionsChinese: [
      "A) 空调系统充注过量",
      "B) 怠速空气控制（IAC）阀或电子节气门体故障",
      "C) 空调压缩机离合器缺陷",
      "D) 制冷剂充注不足"
    ],
    explanationChinese: "当空调压缩机接合时，会给发动机增加额外负荷。PCM应通过指令IAC阀或电子节气门体来提高怠速转速进行补偿。如果IAC或节气门体故障，则无法增加气流量，发动机在额外负荷下熄火。"
  },
  {
    id: 28,
    q: "A technician measures 45 psi of oil pressure at 2,500 RPM but only 5 psi at hot idle. The specification is 10 psi minimum at hot idle. Which component should be inspected FIRST?",
    options: [
      "A) The oil pump",
      "B) The oil pressure sending unit",
      "C) The main bearings",
      "D) The oil filter bypass valve"
    ],
    answer: 1,
    explanation: "Before condemning internal engine components, the technician should verify the accuracy of the reading by checking the oil pressure sending unit. A faulty sender can give misleading readings. If a mechanical gauge confirms low pressure, then further diagnosis of the pump, bearings, or bypass valve is warranted.",
    diagram: "",
    terms: ["oil_pressure", "dmm", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Oil_pump_of_an_automobile_engine.jpg/640px-Oil_pump_of_an_automobile_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=05n6VzLJg7E",
    youtubeTitle: "Engine Oil Pressure - How It Works",
    qChinese: "技师在2500转时测量油压为45 psi，但热怠速时仅为5 psi。规格要求热怠速最低10 psi。应首先检查哪个部件？",
    optionsChinese: [
      "A) 机油泵",
      "B) 机油压力发送器",
      "C) 主轴承",
      "D) 机油滤清器旁通阀"
    ],
    explanationChinese: "在判定发动机内部部件故障之前，技师应通过检查机油压力发送器来验证读数的准确性。故障的发送器可能给出误导性读数。如果机械压力表确认低油压，则需进一步诊断油泵、轴承或旁通阀。"
  },
  {
    id: 29,
    q: "An engine has a rhythmic exhaust puffing sound at idle. A vacuum gauge shows the needle dropping about 2 in-Hg at regular intervals. What is the MOST likely cause?",
    options: [
      "A) A leaking intake manifold gasket",
      "B) A burned exhaust valve",
      "C) A clogged catalytic converter",
      "D) Excessive valve overlap from incorrect timing"
    ],
    answer: 1,
    explanation: "A regular, rhythmic drop on the vacuum gauge combined with an exhaust puffing noise indicates a burned exhaust valve. Each time the affected cylinder fires, the leaking valve allows compression and combustion gases to escape into the exhaust, causing both the puff and the momentary vacuum drop.",
    diagram: "",
    terms: ["vacuum_gauge", "cylinder_head", "compression_test"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Camshaft.JPG/640px-Camshaft.JPG",
    youtube: "https://www.youtube.com/watch?v=W8AUGRkb4YM",
    youtubeTitle: "How Valve Train Components Work",
    qChinese: "发动机在怠速时有节奏性的排气喷气声。真空表显示指针以规律的间隔下降约2英寸汞柱。最可能的原因是什么？",
    optionsChinese: [
      "A) 进气歧管垫片泄漏",
      "B) 排气门烧蚀",
      "C) 催化转化器堵塞",
      "D) 因正时不正确导致的过度气门重叠"
    ],
    explanationChinese: "真空表上的有规律、有节奏的下降加上排气喷气噪音表明排气门烧蚀。每次受影响的气缸点火时，泄漏的气门允许压缩和燃烧气体逸入排气，导致喷气声和瞬间真空下降。"
  },
  {
    id: 30,
    q: "A DMM is used to check the reference voltage signal from the PCM to the throttle position sensor. The reading should be approximately:",
    options: [
      "A) 0.5V",
      "B) 1.0V",
      "C) 5.0V",
      "D) 12.0V"
    ],
    answer: 2,
    explanation: "Most engine sensors that use a three-wire configuration receive a 5-volt reference signal from the PCM. The throttle position sensor uses this reference voltage and provides a variable return signal based on throttle blade angle, typically ranging from about 0.5V at closed throttle to 4.5V at wide open throttle.",
    diagram: "",
    terms: ["throttle_position_sensor", "pcm", "dmm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=Bvp2eMfnFSo",
    youtubeTitle: "Engine Diagnosis Basics for Beginners",
    qChinese: "技师使用数字万用表检查PCM到节气门位置传感器的参考电压信号。读数应约为：",
    optionsChinese: [
      "A) 0.5V",
      "B) 1.0V",
      "C) 5.0V",
      "D) 12.0V"
    ],
    explanationChinese: "大多数使用三线配置的发动机传感器从PCM接收5伏参考电压信号。节气门位置传感器使用此参考电压，根据节气门翻板角度提供可变回馈信号，通常从节气门关闭时的约0.5V到全开时的4.5V。"
  },
  {
    id: 31,
    q: "An engine has a chirping noise that changes with engine RPM but does not change when the accessory drive belt is removed. What is the MOST likely cause?",
    options: [
      "A) A worn serpentine belt",
      "B) A failing alternator bearing",
      "C) A timing belt or chain tensioner issue",
      "D) A worn A/C compressor clutch"
    ],
    answer: 2,
    explanation: "If the chirping noise persists after the accessory belt is removed, the source is internal to the engine. A timing belt or chain tensioner that is worn or improperly adjusted can produce a chirping or rattling noise that varies with engine speed since the timing components rotate with the crankshaft.",
    diagram: "",
    terms: ["timing_chain", "serpentine_belt", "camshaft"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Timing_belt.jpg/640px-Timing_belt.jpg",
    youtube: "https://www.youtube.com/watch?v=Sj5mJKCuvLc",
    youtubeTitle: "Timing Belt vs Chain - How They Work",
    qChinese: "发动机有一种随转速变化的吱吱声，但拆下附件传动皮带后噪音不变。最可能的原因是什么？",
    optionsChinese: [
      "A) 多楔带磨损",
      "B) 发电机轴承失效",
      "C) 正时皮带或正时链条张紧器问题",
      "D) 空调压缩机离合器磨损"
    ],
    explanationChinese: "如果拆下附件皮带后吱吱声仍然存在，说明噪音源在发动机内部。磨损或调整不当的正时皮带或链条张紧器会产生随发动机转速变化的吱吱声或嘎嘎声，因为正时部件与曲轴同步转动。"
  },
  {
    id: 32,
    q: "A vehicle has intermittent overheating only in stop-and-go traffic. The cooling fan operates correctly when tested manually. Technician A says the coolant temperature sensor signal to the fan relay should be checked. Technician B says the water pump impeller may be eroded. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "If the fan works manually but the vehicle overheats at low speed, the fan is likely not activating automatically at the correct temperature. The coolant temperature sensor or its circuit to the fan relay is the most likely cause. A worn water pump impeller would cause overheating at all driving conditions, not just stop-and-go.",
    diagram: "",
    terms: ["coolant_temperature_sensor", "relay", "water_pump", "radiator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pqFZY6v6OQI",
    youtubeTitle: "How a Car Cooling System Works",
    qChinese: "车辆仅在走走停停的交通中间歇性过热。手动测试时冷却风扇工作正常。技师A说应检查冷却液温度传感器到风扇继电器的信号。技师B说水泵叶轮可能被侵蚀。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "如果风扇手动可以工作但车辆在低速时过热，说明风扇可能没有在正确温度自动启动。冷却液温度传感器或其到风扇继电器的电路是最可能的原因。水泵叶轮磨损会在所有驾驶条件下都导致过热，而不仅仅是走走停停时。"
  },
  {
    id: 33,
    q: "A compression test shows all cylinders within specification, but a leak-down test reveals 25% leakage on Cylinder 2 with air heard at the oil filler cap. What does this indicate?",
    options: [
      "A) A burned intake valve on Cylinder 2",
      "B) A blown head gasket adjacent to Cylinder 2",
      "C) Worn or broken piston rings on Cylinder 2",
      "D) A cracked cylinder head"
    ],
    answer: 2,
    explanation: "Air escaping from the oil filler cap or dipstick tube during a leak-down test means air is entering the crankcase past the piston rings. This indicates worn, broken, or stuck piston rings on that cylinder. A valve problem would direct air to the intake or exhaust; a gasket issue would show at the coolant or adjacent cylinder.",
    diagram: "",
    terms: ["leak_down_test", "piston_rings", "compression_test"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Kolben_2.jpg/640px-Kolben_2.jpg",
    youtube: "https://www.youtube.com/watch?v=rIeBsFBqMCk",
    youtubeTitle: "Cylinder Leak-Down Test Explained",
    qChinese: "压缩测试显示所有气缸在规格范围内，但漏气测试显示2缸有25%的泄漏，且可以在机油加注口处听到空气声。这说明什么？",
    optionsChinese: [
      "A) 2缸进气门烧蚀",
      "B) 2缸旁边的缸垫漏气",
      "C) 2缸活塞环磨损或断裂",
      "D) 气缸盖开裂"
    ],
    explanationChinese: "漏气测试中空气从机油加注口或油尺管逸出意味着空气正通过活塞环进入曲轴箱。这表明该缸的活塞环磨损、断裂或卡滞。气门问题会将空气引向进气或排气；缸垫问题会在冷却液或相邻气缸处显示。"
  },
  {
    id: 34,
    q: "Technician A says a scan tool can be used to monitor engine misfire data. Technician B says an oscilloscope can be used to identify a misfiring cylinder by monitoring ignition secondary patterns. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Modern OBD-II systems track misfire data per cylinder, which a scan tool can display. An oscilloscope connected to the secondary ignition circuit can show the firing voltage and burn time for each cylinder, revealing misfires through abnormal patterns. Both tools are valid diagnostic methods.",
    diagram: "",
    terms: ["scan_tool", "misfire", "obd2", "ignition_coil"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=Bvp2eMfnFSo",
    youtubeTitle: "Engine Diagnosis Basics for Beginners",
    qChinese: "技师A说诊断仪可以用来监控发动机失火数据。技师B说示波器可以通过监控点火次级波形来识别失火气缸。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "现代OBD-II系统按气缸跟踪失火数据，诊断仪可以显示这些数据。连接到次级点火电路的示波器可以显示每个气缸的点火电压和燃烧时间，通过异常波形揭示失火。两种工具都是有效的诊断方法。"
  },
  {
    id: 35,
    q: "A vehicle has a persistent coolant smell inside the cabin but shows no external leaks and coolant level slowly drops. What is the MOST likely cause?",
    options: [
      "A) A leaking radiator hose",
      "B) A leaking heater core",
      "C) A blown head gasket",
      "D) A cracked overflow reservoir"
    ],
    answer: 1,
    explanation: "A coolant smell inside the cabin with no visible external leaks and a slowly dropping coolant level points to a leaking heater core. The heater core is located inside the HVAC housing behind the dashboard. Small leaks vaporize coolant into the cabin air, creating the sweet smell before visible puddles appear.",
    diagram: "",
    terms: ["heater_core", "radiator", "coolant_flush"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pqFZY6v6OQI",
    youtubeTitle: "How a Car Cooling System Works",
    qChinese: "车辆在车内有持续的冷却液气味，但没有外部泄漏，冷却液液位缓慢下降。最可能的原因是什么？",
    optionsChinese: [
      "A) 散热器水管泄漏",
      "B) 暖风水箱泄漏",
      "C) 缸垫漏气",
      "D) 膨胀水壶开裂"
    ],
    explanationChinese: "车内有冷却液气味但无可见外部泄漏且冷却液液位缓慢下降，指向暖风水箱泄漏。暖风水箱位于仪表板后方的空调外壳内。小泄漏将冷却液蒸发到车内空气中，在出现可见水渍之前先产生甜味。"
  },
  {
    id: 36,
    q: "An engine idle speed surges between 500 and 1,500 RPM. A smoke machine test reveals no vacuum leaks. Technician A says a faulty idle air control valve could cause this. Technician B says a dirty electronic throttle body could cause this. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both a faulty idle air control valve and a dirty electronic throttle body can cause idle surge. These components regulate airflow at idle, and erratic operation from sticking or carbon buildup causes the PCM to constantly hunt for the correct idle speed. Either condition should be inspected after ruling out vacuum leaks.",
    diagram: "",
    terms: ["throttle_position_sensor", "pcm", "fuel_trim"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=Bvp2eMfnFSo",
    youtubeTitle: "Engine Diagnosis Basics for Beginners",
    qChinese: "发动机怠速转速在500和1500转之间波动。烟雾机测试未发现真空泄漏。技师A说故障的怠速空气控制阀可能导致此问题。技师B说脏污的电子节气门体可能导致此问题。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "故障的怠速空气控制阀和脏污的电子节气门体都可能导致怠速波动。这些部件在怠速时调节气流，卡滞或积碳导致的不稳定运行使PCM不断寻找正确的怠速转速。在排除真空泄漏后应检查这两种情况。"
  },
  {
    id: 37,
    q: "A vehicle with a V6 engine has a misfire on Cylinder 3. Swapping the ignition coil from Cylinder 3 to Cylinder 5 causes the misfire to move to Cylinder 5. What is the cause?",
    options: [
      "A) A faulty fuel injector on Cylinder 3",
      "B) A faulty ignition coil",
      "C) Low compression on Cylinder 3",
      "D) A wiring issue in the Cylinder 3 coil circuit"
    ],
    answer: 1,
    explanation: "When swapping a coil from the misfiring cylinder to a different cylinder causes the misfire to follow the coil, the coil is the faulty component. If the misfire stayed on Cylinder 3, it would indicate a problem with the injector, wiring, or mechanical condition of that cylinder.",
    diagram: "",
    terms: ["ignition_coil", "misfire", "spark_plug"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=Bvp2eMfnFSo",
    youtubeTitle: "Engine Diagnosis Basics for Beginners",
    qChinese: "一辆V6发动机的车辆3缸失火。将3缸的点火线圈换到5缸后，失火转移到5缸。原因是什么？",
    optionsChinese: [
      "A) 3缸喷油器故障",
      "B) 点火线圈故障",
      "C) 3缸压缩低",
      "D) 3缸线圈电路的线路问题"
    ],
    explanationChinese: "将失火气缸的线圈换到另一个气缸后失火跟随线圈转移，说明线圈是故障部件。如果失火仍留在3缸，则表明问题出在喷油器、线路或该缸的机械状况。"
  },
  {
    id: 38,
    q: "An engine makes a loud rattling noise on cold startup that diminishes after about 30 seconds. Oil pressure is normal after warmup. What is the MOST likely cause?",
    options: [
      "A) A collapsed hydraulic lifter due to oil drain-back",
      "B) A failed piston pin retainer",
      "C) A worn crankshaft thrust bearing",
      "D) An exhaust manifold leak"
    ],
    answer: 0,
    explanation: "Hydraulic lifters can collapse and rattle on cold startup when oil drains out of them during extended sitting. Once oil pressure builds and refills the lifters, the noise diminishes. This is commonly caused by worn check valves within the lifters or oil that is too thin for the application.",
    diagram: "",
    terms: ["hydraulic_lifter", "oil_pressure", "camshaft"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Camshaft.JPG/640px-Camshaft.JPG",
    youtube: "https://www.youtube.com/watch?v=W8AUGRkb4YM",
    youtubeTitle: "How Valve Train Components Work",
    qChinese: "发动机冷启动时发出很大的嘎嘎声，约30秒后减弱。暖机后油压正常。最可能的原因是什么？",
    optionsChinese: [
      "A) 液压挺柱因机油回流而塌陷",
      "B) 活塞销固定器失效",
      "C) 曲轴止推轴承磨损",
      "D) 排气歧管泄漏"
    ],
    explanationChinese: "液压挺柱在长时间停放后机油从中流出，可能在冷启动时塌陷并产生嘎嘎声。一旦油压建立并重新充满挺柱，噪音就会减弱。这通常是由挺柱内磨损的止回阀或机油粘度过低引起的。"
  },
  {
    id: 39,
    q: "A technician uses a DMM to measure battery voltage with the engine running. The reading is 13.2V. After turning on the headlights, rear defroster, and blower motor, the voltage drops to 12.1V. What does this indicate?",
    options: [
      "A) The battery is undercharged",
      "B) The alternator is not meeting electrical load demands",
      "C) The voltage regulator is set correctly",
      "D) This is a normal reading under load"
    ],
    answer: 1,
    explanation: "With the engine running, charging system voltage should remain between approximately 13.5V and 14.5V even under electrical load. A drop to 12.1V under load indicates the alternator cannot keep up with demand, suggesting a failing alternator, loose belt, or poor electrical connections.",
    diagram: "",
    terms: ["alternator", "battery", "dmm", "serpentine_belt"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=Bvp2eMfnFSo",
    youtubeTitle: "Engine Diagnosis Basics for Beginners",
    qChinese: "技师使用数字万用表在发动机运转时测量蓄电池电压。读数为13.2V。打开大灯、后除霜和鼓风机后，电压降至12.1V。这表明：",
    optionsChinese: [
      "A) 蓄电池充电不足",
      "B) 发电机无法满足电气负荷需求",
      "C) 电压调节器设置正确",
      "D) 这是负载下的正常读数"
    ],
    explanationChinese: "发动机运转时，充电系统电压即使在电气负荷下也应保持在约13.5V至14.5V之间。在负载下降至12.1V表明发电机无法满足需求，暗示发电机失效、皮带松动或电气连接不良。"
  },
  {
    id: 40,
    q: "During a cylinder leak-down test, air is heard bubbling in the radiator. What does this indicate?",
    options: [
      "A) A burned exhaust valve",
      "B) Worn piston rings",
      "C) A blown head gasket or cracked cylinder head allowing combustion gas into the cooling system",
      "D) A leaking intake manifold gasket"
    ],
    answer: 2,
    explanation: "Air entering the cooling system during a leak-down test confirms a breach between the combustion chamber and a coolant passage. This is typically caused by a failed head gasket, cracked cylinder head, or cracked block. This path allows both compression loss and coolant contamination of the combustion chamber.",
    diagram: "",
    terms: ["leak_down_test", "head_gasket", "cylinder_head", "radiator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Cylinder_head.jpg/640px-Cylinder_head.jpg",
    youtube: "https://www.youtube.com/watch?v=LjBnOajR1Nw",
    youtubeTitle: "Head Gasket Failure - Signs and Diagnosis",
    qChinese: "在气缸漏气测试中，可以听到空气在散热器中冒泡。这说明什么？",
    optionsChinese: [
      "A) 排气门烧蚀",
      "B) 活塞环磨损",
      "C) 缸垫漏气或气缸盖开裂，导致燃烧气体进入冷却系统",
      "D) 进气歧管垫片泄漏"
    ],
    explanationChinese: "漏气测试中空气进入冷却系统确认了燃烧室与冷却液通道之间存在泄漏。这通常由缸垫失效、气缸盖开裂或缸体开裂引起。这条通路既会导致压缩损失，也会导致冷却液污染燃烧室。"
  },

  // ===== CYLINDER HEAD & VALVE TRAIN (Questions 41–53) =====
  {
    id: 41,
    q: "A variable valve timing (VVT) system uses a camshaft phaser actuated by engine oil pressure. What could cause a VVT-related diagnostic trouble code?",
    options: [
      "A) Using the correct oil viscosity",
      "B) A clogged oil control valve screen or low oil level",
      "C) A new timing chain",
      "D) A properly functioning oil pump"
    ],
    answer: 1,
    explanation: "VVT systems rely on clean oil at proper pressure to actuate camshaft phasers. A clogged oil control valve screen, sludge buildup, low oil level, or incorrect oil viscosity can prevent the phaser from moving to the correct position, causing the PCM to set a VVT performance code.",
    diagram: "",
    terms: ["variable_valve_timing", "camshaft", "oil_pressure", "dtc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Camshaft.JPG/640px-Camshaft.JPG",
    youtube: "https://www.youtube.com/watch?v=W8AUGRkb4YM",
    youtubeTitle: "How Valve Train Components Work",
    qChinese: "可变气门正时（VVT）系统使用由发动机油压驱动的凸轮轴相位器。什么可能导致VVT相关的诊断故障码？",
    optionsChinese: [
      "A) 使用正确的机油粘度",
      "B) 机油控制阀滤网堵塞或机油液位低",
      "C) 新的正时链条",
      "D) 工作正常的机油泵"
    ],
    explanationChinese: "VVT系统依靠清洁的、压力适当的机油来驱动凸轮轴相位器。堵塞的机油控制阀滤网、油泥积聚、低机油液位或不正确的机油粘度都会阻止相位器移动到正确位置，导致PCM设置VVT性能故障码。"
  },
  {
    id: 42,
    q: "Technician A says valve springs should be tested for installed height and tension during a cylinder head rebuild. Technician B says valve springs only need to be inspected visually for cracks. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Valve springs must be tested for proper installed height, tension (open and closed), and squareness during a rebuild. A spring can appear visually perfect but have lost tension from heat fatigue, leading to valve float, poor sealing, and reduced engine performance. Visual inspection alone is insufficient.",
    diagram: "",
    terms: ["cylinder_head", "camshaft", "valve_stem_seals"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Camshaft.JPG/640px-Camshaft.JPG",
    youtube: "https://www.youtube.com/watch?v=W8AUGRkb4YM",
    youtubeTitle: "How Valve Train Components Work",
    qChinese: "技师A说在气缸盖翻新时应测试气门弹簧的安装高度和张力。技师B说气门弹簧只需目视检查裂纹。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "在翻新过程中必须测试气门弹簧的正确安装高度、张力（开启和关闭）和垂直度。弹簧可能外观完好但因热疲劳而失去张力，导致气门浮动、密封不良和发动机性能降低。仅目视检查是不够的。"
  },
  {
    id: 43,
    q: "Excessive valve guide-to-stem clearance can cause all of the following EXCEPT:",
    options: [
      "A) Oil consumption",
      "B) Blue exhaust smoke",
      "C) Increased exhaust backpressure",
      "D) Poor valve sealing and compression loss"
    ],
    answer: 2,
    explanation: "Worn valve guides allow the valve to wobble, causing oil to be drawn past the stem seal into the combustion chamber, resulting in oil consumption and blue smoke. The wobble also prevents proper valve seating, causing compression loss. However, excessive guide clearance does not cause increased exhaust backpressure.",
    diagram: "",
    terms: ["valve_stem_seals", "cylinder_head", "compression_test"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Cylinder_head.jpg/640px-Cylinder_head.jpg",
    youtube: "https://www.youtube.com/watch?v=W8AUGRkb4YM",
    youtubeTitle: "How Valve Train Components Work",
    qChinese: "过大的气门导管与气门杆间隙可导致以下所有问题，除了：",
    optionsChinese: [
      "A) 机油消耗",
      "B) 排气蓝烟",
      "C) 排气背压增大",
      "D) 气门密封不良和压缩损失"
    ],
    explanationChinese: "磨损的气门导管允许气门摆动，导致机油被吸过油封进入燃烧室，造成机油消耗和蓝烟。摆动还妨碍气门正确就座，导致压缩损失。然而，过大的导管间隙不会导致排气背压增大。"
  },
  {
    id: 44,
    q: "A head gasket failure between a cylinder and an oil passage could cause:",
    options: [
      "A) Coolant in the oil",
      "B) Oil in the coolant",
      "C) Oil in the combustion chamber and blue exhaust smoke",
      "D) White exhaust smoke"
    ],
    answer: 2,
    explanation: "When a head gasket fails between a cylinder and an oil passage, pressurized oil can be forced into the combustion chamber, where it burns and produces blue exhaust smoke. If the failure were between a cylinder and coolant passage, white smoke and coolant-in-oil contamination would result instead.",
    diagram: "",
    terms: ["head_gasket", "cylinder_head", "oil_pressure"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Cylinder_head.jpg/640px-Cylinder_head.jpg",
    youtube: "https://www.youtube.com/watch?v=LjBnOajR1Nw",
    youtubeTitle: "Head Gasket Failure - Signs and Diagnosis",
    qChinese: "缸垫在气缸和机油通道之间失效可能导致：",
    optionsChinese: [
      "A) 机油中有冷却液",
      "B) 冷却液中有机油",
      "C) 机油进入燃烧室并排出蓝色排气烟",
      "D) 排出白色排气烟"
    ],
    explanationChinese: "当缸垫在气缸和机油通道之间失效时，加压的机油可被压入燃烧室，在那里燃烧并产生蓝色排气烟。如果失效发生在气缸和冷却液通道之间，则会产生白烟和机油中冷却液污染。"
  },
  {
    id: 45,
    q: "When resurfacing a cylinder head, what must the technician verify to ensure proper valve train geometry?",
    options: [
      "A) The rocker arm ratio",
      "B) The cylinder head's minimum thickness specification and installed valve spring height",
      "C) The spark plug thread depth",
      "D) The oil drain hole alignment"
    ],
    answer: 1,
    explanation: "Removing material from the cylinder head surface reduces head thickness and changes installed valve spring height and compression ratio. The technician must verify that the head remains within the manufacturer's minimum thickness specification and correct the installed spring height with shims if necessary.",
    diagram: "",
    terms: ["cylinder_head", "camshaft", "head_gasket"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Cylinder_head.jpg/640px-Cylinder_head.jpg",
    youtube: "https://www.youtube.com/watch?v=W8AUGRkb4YM",
    youtubeTitle: "How Valve Train Components Work",
    qChinese: "研磨气缸盖时，技师必须验证什么以确保正确的气门系统几何关系？",
    optionsChinese: [
      "A) 摇臂比率",
      "B) 气缸盖最小厚度规格和气门弹簧安装高度",
      "C) 火花塞螺纹深度",
      "D) 回油孔对齐"
    ],
    explanationChinese: "从气缸盖表面去除材料会减少缸盖厚度并改变气门弹簧安装高度和压缩比。技师必须验证缸盖仍在制造商最小厚度规格范围内，并在必要时使用垫片校正安装弹簧高度。"
  },
  {
    id: 46,
    q: "A camshaft lobe is measured with a micrometer and found to be below the minimum lift specification. What is the MOST likely result of this condition?",
    options: [
      "A) The valve opens too far",
      "B) Reduced valve lift and duration, causing loss of performance",
      "C) Increased valve spring pressure",
      "D) Higher compression ratio"
    ],
    answer: 1,
    explanation: "A worn camshaft lobe has a reduced profile, which decreases both the lift and effective duration of the valve opening. This results in less airflow into or out of the cylinder, reduced volumetric efficiency, and noticeable power loss, especially at higher engine speeds where airflow demand is greatest.",
    diagram: "",
    terms: ["camshaft", "cylinder_head", "vacuum_gauge"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Camshaft.JPG/640px-Camshaft.JPG",
    youtube: "https://www.youtube.com/watch?v=W8AUGRkb4YM",
    youtubeTitle: "How Valve Train Components Work",
    qChinese: "用千分尺测量凸轮轴凸轮，发现低于最小升程规格。此状况最可能导致什么结果？",
    optionsChinese: [
      "A) 气门开启过大",
      "B) 气门升程和持续时间减少，导致性能损失",
      "C) 气门弹簧压力增大",
      "D) 压缩比升高"
    ],
    explanationChinese: "磨损的凸轮轴凸轮轮廓减小，降低了气门开启的升程和有效持续时间。这导致进出气缸的气流减少、容积效率降低和明显的动力损失，特别是在对气流需求最大的高发动机转速下。"
  },
  {
    id: 47,
    q: "A rocker arm on an overhead valve engine shows wear on the tip that contacts the valve stem. What is the MOST likely consequence if this is not corrected?",
    options: [
      "A) Increased valve lift",
      "B) Insufficient valve lash and possible valve burning from not fully closing",
      "C) Increased oil pressure",
      "D) Reduced engine noise"
    ],
    answer: 1,
    explanation: "Wear on the rocker arm tip effectively changes the valve adjustment, which can prevent the valve from fully closing. An exhaust valve that does not seat completely will overheat because it cannot transfer heat to the seat, eventually leading to a burned valve and compression loss in that cylinder.",
    diagram: "",
    terms: ["hydraulic_lifter", "camshaft", "cylinder_head"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Camshaft.JPG/640px-Camshaft.JPG",
    youtube: "https://www.youtube.com/watch?v=W8AUGRkb4YM",
    youtubeTitle: "How Valve Train Components Work",
    qChinese: "顶置气门发动机的摇臂在接触气门杆的端部显示磨损。如果不纠正，最可能的后果是什么？",
    optionsChinese: [
      "A) 气门升程增加",
      "B) 气门间隙不足，可能因气门无法完全关闭而导致气门烧蚀",
      "C) 油压增加",
      "D) 发动机噪音减少"
    ],
    explanationChinese: "摇臂端部磨损实际上改变了气门调整，可能阻止气门完全关闭。排气门如果不能完全就座将过热，因为它无法将热量传递给气门座，最终导致气门烧蚀和该缸压缩损失。"
  },
  {
    id: 48,
    q: "A cylinder head is being checked for warpage using a straightedge and feeler gauge. The maximum allowable warpage for most aluminum heads is typically:",
    options: [
      "A) 0.001 inch (0.025 mm)",
      "B) 0.002 to 0.004 inch (0.05 to 0.10 mm)",
      "C) 0.010 inch (0.25 mm)",
      "D) 0.020 inch (0.50 mm)"
    ],
    answer: 1,
    explanation: "Most manufacturers specify a maximum warpage of 0.002 to 0.004 inch for aluminum cylinder heads. Warpage beyond this limit prevents proper head gasket sealing, leading to coolant or compression leaks. The head must be resurfaced or replaced if warpage exceeds the specification.",
    diagram: "",
    terms: ["cylinder_head", "head_gasket"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Cylinder_head.jpg/640px-Cylinder_head.jpg",
    youtube: "https://www.youtube.com/watch?v=LjBnOajR1Nw",
    youtubeTitle: "Head Gasket Failure - Signs and Diagnosis",
    qChinese: "使用直尺和塞尺检查气缸盖翘曲。大多数铝制气缸盖的最大允许翘曲量通常为：",
    optionsChinese: [
      "A) 0.001英寸（0.025毫米）",
      "B) 0.002至0.004英寸（0.05至0.10毫米）",
      "C) 0.010英寸（0.25毫米）",
      "D) 0.020英寸（0.50毫米）"
    ],
    explanationChinese: "大多数制造商规定铝制气缸盖的最大翘曲量为0.002至0.004英寸。超过此限值的翘曲会妨碍缸垫正确密封，导致冷却液或压缩泄漏。如果翘曲超过规格，气缸盖必须进行研磨或更换。"
  },
  {
    id: 49,
    q: "Technician A says that overhead cam engines use timing chains or belts to drive the camshaft. Technician B says that failure to replace a timing belt at the recommended interval can result in catastrophic engine damage on an interference engine. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Overhead cam engines use timing chains or belts to synchronize camshaft rotation with the crankshaft. In an interference engine, if the timing belt breaks, the pistons will contact the open valves, causing bent valves, damaged pistons, and potentially more severe engine damage. Timely belt replacement is critical.",
    diagram: "",
    terms: ["timing_chain", "camshaft", "cylinder_head"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Timing_belt.jpg/640px-Timing_belt.jpg",
    youtube: "https://www.youtube.com/watch?v=Sj5mJKCuvLc",
    youtubeTitle: "Timing Belt vs Chain - How They Work",
    qChinese: "技师A说顶置凸轮轴发动机使用正时链条或皮带来驱动凸轮轴。技师B说在干涉型发动机上，未按推荐间隔更换正时皮带可能导致灾难性发动机损坏。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "顶置凸轮轴发动机使用正时链条或皮带将凸轮轴旋转与曲轴同步。在干涉型发动机中，如果正时皮带断裂，活塞会撞击打开的气门，导致气门弯曲、活塞损坏和可能更严重的发动机损坏。及时更换皮带至关重要。"
  },
  {
    id: 50,
    q: "A VVT solenoid is commanded to advance the intake camshaft, but an oscilloscope shows no change in cam position sensor signal relative to the crank signal. What is the MOST likely cause?",
    options: [
      "A) A faulty crankshaft position sensor",
      "B) A stuck or clogged VVT oil control solenoid",
      "C) A faulty knock sensor",
      "D) A weak ignition coil"
    ],
    answer: 1,
    explanation: "If the PCM commands the VVT solenoid but the camshaft does not advance, the most likely cause is a stuck or clogged oil control solenoid that cannot direct oil pressure to the phaser. Sludge or debris can block the solenoid valve or its screen, preventing phaser movement.",
    diagram: "",
    terms: ["variable_valve_timing", "camshaft", "crankshaft_position_sensor", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Camshaft.JPG/640px-Camshaft.JPG",
    youtube: "https://www.youtube.com/watch?v=W8AUGRkb4YM",
    youtubeTitle: "How Valve Train Components Work",
    qChinese: "VVT电磁阀被指令使进气凸轮轴提前，但示波器显示凸轮轴位置传感器信号相对于曲轴信号没有变化。最可能的原因是什么？",
    optionsChinese: [
      "A) 曲轴位置传感器故障",
      "B) VVT机油控制电磁阀卡滞或堵塞",
      "C) 爆震传感器故障",
      "D) 点火线圈过弱"
    ],
    explanationChinese: "如果PCM指令VVT电磁阀但凸轮轴没有提前，最可能的原因是机油控制电磁阀卡滞或堵塞，无法将油压引导到相位器。油泥或碎屑可能堵塞电磁阀或其滤网，阻止相位器移动。"
  },
  {
    id: 51,
    q: "When performing a valve job, the valve seat is cut at three angles: a top cut, a seat angle, and a throat cut. The purpose of the three-angle valve job is to:",
    options: [
      "A) Increase the compression ratio",
      "B) Improve airflow into and out of the cylinder",
      "C) Reduce valve guide clearance",
      "D) Decrease valve spring tension"
    ],
    answer: 1,
    explanation: "A three-angle valve job narrows the actual seating surface while smoothing the transition angles above and below it. This improves the flow of the air-fuel charge into the cylinder and exhaust gas out of the cylinder, resulting in better volumetric efficiency and engine performance.",
    diagram: "",
    terms: ["cylinder_head", "valve_stem_seals", "compression_test"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Cylinder_head.jpg/640px-Cylinder_head.jpg",
    youtube: "https://www.youtube.com/watch?v=W8AUGRkb4YM",
    youtubeTitle: "How Valve Train Components Work",
    qChinese: "进行气门维修时，气门座被切削成三个角度：顶部切角、座面角度和喉部切角。三角度气门维修的目的是：",
    optionsChinese: [
      "A) 提高压缩比",
      "B) 改善进出气缸的气流",
      "C) 减小气门导管间隙",
      "D) 降低气门弹簧张力"
    ],
    explanationChinese: "三角度气门维修缩窄了实际密封面，同时平滑了其上下方的过渡角度。这改善了空气-燃油混合物进入气缸和废气排出气缸的流动，从而提高容积效率和发动机性能。"
  },
  {
    id: 52,
    q: "An engine with hydraulic valve lifters has a persistent tapping noise even after the engine reaches operating temperature. What should be checked?",
    options: [
      "A) The ignition timing",
      "B) Oil pressure and oil level; if adequate, the lifters may be worn and need replacement",
      "C) The exhaust manifold gaskets",
      "D) The intake air temperature sensor"
    ],
    answer: 1,
    explanation: "Hydraulic lifters automatically adjust to maintain zero valve lash using oil pressure. A persistent tapping noise after warmup suggests one or more lifters are not holding oil pressure due to wear, a stuck check valve, or inadequate oil supply. Oil level and pressure should be verified first before replacing lifters.",
    diagram: "",
    terms: ["hydraulic_lifter", "oil_pressure", "camshaft"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Camshaft.JPG/640px-Camshaft.JPG",
    youtube: "https://www.youtube.com/watch?v=W8AUGRkb4YM",
    youtubeTitle: "How Valve Train Components Work",
    qChinese: "装有液压挺柱的发动机即使在达到工作温度后仍有持续的敲击声。应检查什么？",
    optionsChinese: [
      "A) 点火正时",
      "B) 油压和机油液位；如果正常，挺柱可能磨损需要更换",
      "C) 排气歧管垫片",
      "D) 进气温度传感器"
    ],
    explanationChinese: "液压挺柱利用油压自动调整以保持零气门间隙。暖机后仍有持续的敲击声说明一个或多个挺柱因磨损、止回阀卡滞或供油不足而无法保持油压。应先验证机油液位和油压，然后再更换挺柱。"
  },
  {
    id: 53,
    q: "Positive valve stem seals are being replaced on an OHV engine without removing the cylinder head. What must the technician use to keep the valve from dropping into the cylinder?",
    options: [
      "A) A valve spring compressor only",
      "B) Compressed air supplied through the spark plug hole to pressurize the cylinder",
      "C) A magnetic retrieval tool",
      "D) A piston stop tool"
    ],
    answer: 1,
    explanation: "When replacing valve stem seals with the head installed, compressed air is fed into the cylinder through the spark plug hole to hold the valve in place while the spring is compressed and removed. Without air pressure, the valve would fall into the cylinder once the spring and keepers are removed.",
    diagram: "",
    terms: ["valve_stem_seals", "cylinder_head", "spark_plug"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Cylinder_head.jpg/640px-Cylinder_head.jpg",
    youtube: "https://www.youtube.com/watch?v=W8AUGRkb4YM",
    youtubeTitle: "How Valve Train Components Work",
    qChinese: "在不拆卸气缸盖的情况下更换OHV发动机的正压式气门油封。技师必须使用什么来防止气门掉入气缸？",
    optionsChinese: [
      "A) 仅气门弹簧压缩器",
      "B) 通过火花塞孔向气缸供应压缩空气以加压气缸",
      "C) 磁性取物工具",
      "D) 活塞止动工具"
    ],
    explanationChinese: "在气缸盖安装状态下更换气门油封时，通过火花塞孔向气缸输送压缩空气以将气门固定到位，同时压缩和拆卸弹簧。没有空气压力，一旦弹簧和锁夹被拆除，气门就会掉入气缸。"
  },

  // ===== ENGINE BLOCK (Questions 54–62) =====
  {
    id: 54,
    q: "A crankshaft journal is measured with a micrometer and found to be out-of-round by 0.0015 inch. What is the correct repair?",
    options: [
      "A) Install a standard-size bearing",
      "B) Grind the journal to the next undersize and install matching undersize bearings",
      "C) Polish the journal and reuse the old bearings",
      "D) Apply bearing adhesive to the existing bearings"
    ],
    answer: 1,
    explanation: "An out-of-round crankshaft journal must be ground to the next available undersize specification to restore a true round shape with the correct surface finish. Matching undersize bearings are then installed to maintain proper oil clearance. Reusing old bearings on a worn journal will result in rapid failure.",
    diagram: "",
    terms: ["crankshaft_position_sensor", "oil_pressure", "camshaft"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Crankshaft.jpg/640px-Crankshaft.jpg",
    youtube: "https://www.youtube.com/watch?v=i70X4-RCBKs",
    youtubeTitle: "Crankshaft Position Sensor Testing",
    qChinese: "用千分尺测量曲轴轴颈，发现不圆度为0.0015英寸。正确的修复方法是什么？",
    optionsChinese: [
      "A) 安装标准尺寸轴瓦",
      "B) 将轴颈磨削至下一个缩小尺寸并安装匹配的缩小尺寸轴瓦",
      "C) 抛光轴颈并重新使用旧轴瓦",
      "D) 在现有轴瓦上涂抹轴瓦胶"
    ],
    explanationChinese: "不圆的曲轴轴颈必须磨削至下一个可用的缩小尺寸规格以恢复真圆度和正确的表面光洁度。然后安装匹配的缩小尺寸轴瓦以保持正确的油间隙。在磨损的轴颈上重新使用旧轴瓦会导致快速失效。"
  },
  {
    id: 55,
    q: "Technician A says piston ring end gap should be measured with the ring installed in the cylinder bore. Technician B says the ring gap can be measured outside the engine using a caliper. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Piston ring end gap must be measured with the ring squarely positioned in the cylinder bore it will be used in, because bore diameter directly affects the gap. A feeler gauge is inserted into the ring gap to measure the distance. Measuring outside the bore would not account for the actual bore diameter.",
    diagram: "",
    terms: ["piston_rings", "compression_test", "cylinder_head"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Kolben_2.jpg/640px-Kolben_2.jpg",
    youtube: "https://www.youtube.com/watch?v=_SE-HmuReKA",
    youtubeTitle: "How to Do a Compression Test",
    qChinese: "技师A说活塞环端隙应在活塞环安装在缸筒内时测量。技师B说端隙可以在发动机外部使用卡尺测量。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "活塞环端隙必须在环方正地放置在将要使用的缸筒内进行测量，因为缸径直接影响端隙。用塞尺插入环隙测量距离。在缸筒外测量不能反映实际缸径。"
  },
  {
    id: 56,
    q: "A connecting rod bearing has a shiny, worn spot on one side of the bearing surface. This pattern MOST likely indicates:",
    options: [
      "A) Normal wear",
      "B) A bent connecting rod",
      "C) Oil starvation",
      "D) Improper bearing crush"
    ],
    answer: 1,
    explanation: "Uneven wear on one side of a connecting rod bearing indicates that the rod is not straight, causing the bearing to be loaded unevenly. A bent rod tilts the bearing surface, concentrating the load on one side. Normal wear would appear uniformly across the bearing surface. Oil starvation causes widespread damage.",
    diagram: "",
    terms: ["oil_pressure", "piston_rings", "crankshaft_position_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Crankshaft.jpg/640px-Crankshaft.jpg",
    youtube: "https://www.youtube.com/watch?v=05n6VzLJg7E",
    youtubeTitle: "Engine Oil Pressure - How It Works",
    qChinese: "连杆轴瓦的一侧有光亮的磨损痕迹。这种磨损模式最可能表明：",
    optionsChinese: [
      "A) 正常磨损",
      "B) 连杆弯曲",
      "C) 缺油",
      "D) 轴瓦压紧量不当"
    ],
    explanationChinese: "连杆轴瓦一侧的不均匀磨损表明连杆不直，导致轴瓦承受不均匀的载荷。弯曲的连杆使轴瓦表面倾斜，将载荷集中在一侧。正常磨损会均匀分布在轴瓦表面。缺油会导致大范围损伤。"
  },
  {
    id: 57,
    q: "A cylinder bore is measured at the top, middle, and bottom with a bore gauge. The top of the bore measures 0.003 inch larger than the bottom. This condition is called:",
    options: [
      "A) Out-of-round",
      "B) Taper",
      "C) Barrel-shaped",
      "D) Hourglass-shaped"
    ],
    answer: 1,
    explanation: "Cylinder taper refers to the difference in diameter between the top and bottom of the cylinder bore. The top of the bore wears more because it is exposed to the highest combustion pressures and temperatures, and the piston rings reverse direction at top dead center. Excessive taper requires boring or honing.",
    diagram: "",
    terms: ["piston_rings", "compression_test", "cylinder_head"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Kolben_2.jpg/640px-Kolben_2.jpg",
    youtube: "https://www.youtube.com/watch?v=_SE-HmuReKA",
    youtubeTitle: "How to Do a Compression Test",
    qChinese: "用缸径规在顶部、中部和底部测量缸筒。顶部测量值比底部大0.003英寸。这种状况称为：",
    optionsChinese: [
      "A) 不圆度",
      "B) 锥度",
      "C) 桶形",
      "D) 沙漏形"
    ],
    explanationChinese: "气缸锥度是指缸筒顶部和底部直径之差。缸筒顶部磨损更大，因为它承受最高的燃烧压力和温度，而且活塞环在上止点处换向。过大的锥度需要镗缸或珩磨。"
  },
  {
    id: 58,
    q: "When torquing main bearing cap bolts, the technician should follow which procedure?",
    options: [
      "A) Tighten all bolts at once to final torque",
      "B) Start from the outer bolts and work inward",
      "C) Start from the center and work outward in a specific sequence using multiple steps",
      "D) Tighten in any order as long as final torque is correct"
    ],
    answer: 2,
    explanation: "Main bearing cap bolts should be tightened starting from the center and working outward in multiple progressive steps to evenly distribute clamping force and avoid distorting the block or bearing bores. This ensures proper bearing crush, alignment, and oil clearance across all journals.",
    diagram: "",
    terms: ["oil_pressure", "lug_nut_torque", "crankshaft_position_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Crankshaft.jpg/640px-Crankshaft.jpg",
    youtube: "https://www.youtube.com/watch?v=05n6VzLJg7E",
    youtubeTitle: "Engine Oil Pressure - How It Works",
    qChinese: "拧紧主轴承盖螺栓时，技师应遵循哪种程序？",
    optionsChinese: [
      "A) 一次性将所有螺栓拧至最终扭矩",
      "B) 从外部螺栓开始向内拧紧",
      "C) 从中心开始向外按特定顺序分多步拧紧",
      "D) 以任意顺序拧紧，只要最终扭矩正确即可"
    ],
    explanationChinese: "主轴承盖螺栓应从中心开始向外分多个递进步骤拧紧，以均匀分布夹紧力，避免变形缸体或轴承孔。这确保了所有轴颈上正确的轴瓦压紧量、对齐和油间隙。"
  },
  {
    id: 59,
    q: "A piston makes a slapping sound that is most noticeable when cold and diminishes as the engine warms. Technician A says excessive piston-to-wall clearance is the cause. Technician B says a worn wrist pin bushing is the cause. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Piston slap occurs when piston-to-wall clearance is excessive, allowing the piston to rock in the bore. It is loudest cold because the aluminum piston has not expanded yet. A worn wrist pin bushing produces a double-knock sound that does not diminish with warmup, so only Technician A is correct.",
    diagram: "",
    terms: ["piston_rings", "compression_test", "oil_pressure"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Kolben_2.jpg/640px-Kolben_2.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Diagnosing Engine Noises",
    qChinese: "活塞在冷态时发出拍击声，发动机暖机后减弱。技师A说原因是活塞与缸壁间隙过大。技师B说原因是活塞销衬套磨损。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "活塞敲缸发生在活塞与缸壁间隙过大时，允许活塞在缸筒内摇摆。冷态时最响，因为铝制活塞尚未膨胀。磨损的活塞销衬套会产生不随暖机减弱的双敲声，因此仅技师A正确。"
  },
  {
    id: 60,
    q: "A cylinder bore is being honed before installing new piston rings. The crosshatch pattern provides all of the following benefits EXCEPT:",
    options: [
      "A) Oil retention on the cylinder walls",
      "B) Helping new piston rings seat properly",
      "C) Increasing the cylinder bore compression ratio",
      "D) Providing a consistent surface finish for ring sealing"
    ],
    answer: 2,
    explanation: "The crosshatch honing pattern retains oil, helps rings seat, and provides a consistent surface finish for proper sealing. It does not increase the compression ratio. Compression ratio is determined by the relationship between cylinder volume and combustion chamber volume, not by the surface finish of the bore walls.",
    diagram: "",
    terms: ["piston_rings", "oil_pressure", "compression_test"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Kolben_2.jpg/640px-Kolben_2.jpg",
    youtube: "https://www.youtube.com/watch?v=_SE-HmuReKA",
    youtubeTitle: "How to Do a Compression Test",
    qChinese: "安装新活塞环前正在珩磨缸筒。交叉珩磨纹路提供以下所有好处，除了：",
    optionsChinese: [
      "A) 缸壁上的储油能力",
      "B) 帮助新活塞环正确磨合",
      "C) 增加缸筒压缩比",
      "D) 为活塞环密封提供一致的表面光洁度"
    ],
    explanationChinese: "交叉珩磨纹路保留机油、帮助活塞环磨合并提供一致的表面光洁度以确保正确密封。它不会增加压缩比。压缩比由气缸容积与燃烧室容积之间的关系决定，而非缸壁的表面光洁度。"
  },
  {
    id: 61,
    q: "Bearing oil clearance is being measured using Plastigage. The technician installs the bearing and cap, torques the bolts to specification, then removes the cap. The flattened Plastigage strip is widest on one end and narrow on the other. What does this indicate?",
    options: [
      "A) Correct oil clearance",
      "B) A tapered journal or misaligned bearing cap",
      "C) Too much oil clearance uniformly",
      "D) Too little oil clearance"
    ],
    answer: 1,
    explanation: "If the Plastigage strip varies in width from one side to the other, it indicates uneven clearance across the bearing, which suggests a tapered crankshaft journal or a misaligned bearing cap. A uniform width would indicate consistent clearance. The journal should be measured with a micrometer to confirm.",
    diagram: "",
    terms: ["oil_pressure", "crankshaft_position_sensor", "dmm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Crankshaft.jpg/640px-Crankshaft.jpg",
    youtube: "https://www.youtube.com/watch?v=05n6VzLJg7E",
    youtubeTitle: "Engine Oil Pressure - How It Works",
    qChinese: "使用塑性测量条（Plastigage）测量轴瓦油间隙。技师安装轴瓦和轴承盖，按规格拧紧螺栓，然后拆下轴承盖。压扁的塑性条一端最宽另一端最窄。这说明什么？",
    optionsChinese: [
      "A) 油间隙正确",
      "B) 轴颈锥度或轴承盖未对正",
      "C) 油间隙均匀过大",
      "D) 油间隙过小"
    ],
    explanationChinese: "如果塑性测量条从一侧到另一侧宽度不同，说明轴瓦间隙不均匀，这暗示曲轴轴颈存在锥度或轴承盖未对正。均匀的宽度表示间隙一致。应使用千分尺测量轴颈以确认。"
  },
  {
    id: 62,
    q: "All of the following are reasons to replace connecting rod bolts during an engine rebuild EXCEPT:",
    options: [
      "A) Bolts are torque-to-yield and are designed for one-time use",
      "B) Bolts may have stretched beyond their elastic limit",
      "C) New bolts are less expensive than the labor cost of a repeat repair",
      "D) Bolts increase in strength with repeated use"
    ],
    answer: 3,
    explanation: "Connecting rod bolts do not increase in strength with repeated use. Torque-to-yield bolts stretch into their plastic deformation zone during tightening and may not maintain proper clamping force if reused. The small cost of new bolts is justified by the catastrophic engine damage that a failed rod bolt can cause.",
    diagram: "",
    terms: ["piston_rings", "oil_pressure", "lug_nut_torque"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Kolben_2.jpg/640px-Kolben_2.jpg",
    youtube: "https://www.youtube.com/watch?v=Bvp2eMfnFSo",
    youtubeTitle: "Engine Diagnosis Basics for Beginners",
    qChinese: "以下所有都是发动机翻新时更换连杆螺栓的原因，除了：",
    optionsChinese: [
      "A) 螺栓是扭矩屈服型的，设计为一次性使用",
      "B) 螺栓可能已超过其弹性极限而拉伸",
      "C) 新螺栓的成本低于重复维修的人工成本",
      "D) 螺栓随反复使用而强度增加"
    ],
    explanationChinese: "连杆螺栓不会随反复使用而强度增加。扭矩屈服型螺栓在拧紧时拉伸进入塑性变形区域，重复使用可能无法保持适当的夹紧力。新螺栓的小额成本相比连杆螺栓断裂可能导致的灾难性发动机损坏是合理的。"
  },

  // ===== LUBRICATION & COOLING (Questions 63–80) =====
  {
    id: 63,
    q: "An engine's oil pressure drops to near zero at hot idle but is normal when cold. What is the MOST likely cause?",
    options: [
      "A) A faulty oil pressure gauge",
      "B) Excessive bearing clearance allowing oil to flow too freely when hot and thin",
      "C) A clogged oil filter",
      "D) An overfilled crankcase"
    ],
    answer: 1,
    explanation: "When the engine is hot, oil viscosity decreases and flows more easily. If bearing clearances are excessive due to wear, the thin, hot oil escapes through the bearings faster than the pump can supply it, causing pressure to drop at low RPM. Cold, thicker oil temporarily masks the problem.",
    diagram: "",
    terms: ["oil_pressure", "oil_change", "thermostat"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Oil_pump_of_an_automobile_engine.jpg/640px-Oil_pump_of_an_automobile_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=05n6VzLJg7E",
    youtubeTitle: "Engine Oil Pressure - How It Works",
    qChinese: "发动机热怠速时油压降至接近零，但冷态时正常。最可能的原因是什么？",
    optionsChinese: [
      "A) 机油压力表故障",
      "B) 轴承间隙过大，热态稀机油流失过快",
      "C) 机油滤清器堵塞",
      "D) 曲轴箱加注过量"
    ],
    explanationChinese: "发动机热态时，机油粘度降低更容易流动。如果轴承间隙因磨损而过大，热态稀机油通过轴承逸出的速度快于油泵供应速度，导致低转速时压力下降。冷态较稠的机油暂时掩盖了问题。"
  },
  {
    id: 64,
    q: "A thermostat that is stuck open will cause which of the following symptoms?",
    options: [
      "A) Engine overheating",
      "B) The engine takes longer to reach operating temperature and poor heater output",
      "C) Coolant boil-over",
      "D) Increased oil pressure"
    ],
    answer: 1,
    explanation: "A stuck-open thermostat allows coolant to circulate through the radiator continuously, even when the engine is cold. This prevents the engine from reaching proper operating temperature in a timely manner, reduces heater output, increases fuel consumption, and may trigger a DTC for insufficient coolant temperature.",
    diagram: "",
    terms: ["thermostat", "radiator", "heater_core", "coolant_temperature_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pqFZY6v6OQI",
    youtubeTitle: "How a Car Cooling System Works",
    qChinese: "节温器卡在打开位置会导致以下哪种症状？",
    optionsChinese: [
      "A) 发动机过热",
      "B) 发动机需要更长时间达到工作温度且暖风效果差",
      "C) 冷却液沸腾溢出",
      "D) 油压升高"
    ],
    explanationChinese: "节温器卡在打开位置允许冷却液持续通过散热器循环，即使发动机处于冷态。这妨碍发动机及时达到正常工作温度，降低暖风输出，增加油耗，并可能触发冷却液温度不足的故障码。"
  },
  {
    id: 65,
    q: "Technician A says the oil pump pressure relief valve limits maximum oil pressure to protect engine components. Technician B says a stuck-open relief valve can cause low oil pressure at all engine speeds. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "The pressure relief valve opens at a set pressure to divert excess oil back to the pan, protecting seals and gaskets from over-pressurization. If the valve sticks open, it bleeds off oil pressure continuously, causing low pressure at all speeds since oil is constantly bypassing back to the sump.",
    diagram: "",
    terms: ["oil_pressure", "oil_change", "engine_mount"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Oil_pump_of_an_automobile_engine.jpg/640px-Oil_pump_of_an_automobile_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=05n6VzLJg7E",
    youtubeTitle: "Engine Oil Pressure - How It Works",
    qChinese: "技师A说机油泵泄压阀限制最大油压以保护发动机部件。技师B说泄压阀卡在打开位置会导致所有发动机转速下油压偏低。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "泄压阀在设定压力时打开，将多余的机油引回油底壳，保护密封件和垫片免受过压损害。如果阀门卡在打开位置，它会持续泄放油压，导致所有转速下油压偏低，因为机油不断旁通回油底壳。"
  },
  {
    id: 66,
    q: "A water pump is suspected of having a failing bearing. Which of the following would confirm this diagnosis?",
    options: [
      "A) Coolant leaking from the weep hole at the bottom of the pump",
      "B) Shaft play or noise when the pulley is rocked by hand with the belt removed",
      "C) A low coolant level in the reservoir",
      "D) An illuminated temperature warning light"
    ],
    answer: 1,
    explanation: "Rocking the water pump pulley by hand with the belt removed will reveal excessive shaft bearing play through noticeable movement or a grinding feel. While a coolant leak from the weep hole indicates seal failure, shaft play directly confirms bearing wear. The other options are symptoms, not confirmations.",
    diagram: "",
    terms: ["water_pump", "serpentine_belt", "radiator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pqFZY6v6OQI",
    youtubeTitle: "How a Car Cooling System Works",
    qChinese: "怀疑水泵轴承失效。以下哪项可以确认这一诊断？",
    optionsChinese: [
      "A) 冷却液从泵底部的泄水孔泄漏",
      "B) 拆下皮带后用手摇动皮带轮时发现轴间隙或噪音",
      "C) 膨胀壶中冷却液液位低",
      "D) 水温警告灯亮起"
    ],
    explanationChinese: "拆下皮带后用手摇动水泵皮带轮可以通过明显的晃动或磨削感发现过大的轴承间隙。虽然泄水孔冷却液泄漏表明密封失效，但轴间隙直接确认轴承磨损。其他选项是症状而非确认。"
  },
  {
    id: 67,
    q: "A radiator pressure cap maintains system pressure for which of the following reasons?",
    options: [
      "A) To force coolant through the heater core faster",
      "B) To raise the boiling point of the coolant",
      "C) To increase water pump efficiency",
      "D) To prevent air from entering the system"
    ],
    answer: 1,
    explanation: "Pressurizing the cooling system raises the boiling point of the coolant by approximately 3 degrees Fahrenheit per pound of pressure. A typical 15 psi cap raises the boiling point by about 45 degrees F, allowing the cooling system to operate at higher temperatures without boiling over.",
    diagram: "",
    terms: ["radiator", "water_pump", "thermostat"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pqFZY6v6OQI",
    youtubeTitle: "How a Car Cooling System Works",
    qChinese: "散热器压力盖维持系统压力的原因是以下哪项？",
    optionsChinese: [
      "A) 迫使冷却液更快地通过暖风水箱",
      "B) 提高冷却液的沸点",
      "C) 提高水泵效率",
      "D) 防止空气进入系统"
    ],
    explanationChinese: "加压冷却系统使冷却液的沸点每增加一磅压力约升高3华氏度。典型的15 psi压力盖将沸点提高约45华氏度，使冷却系统能够在更高温度下运行而不会沸腾溢出。"
  },
  {
    id: 68,
    q: "An engine has a low oil level. After topping off, the oil level drops again within 500 miles with no visible external leaks. All of the following could be the cause EXCEPT:",
    options: [
      "A) Worn valve stem seals",
      "B) Worn piston rings",
      "C) A leaking rear main seal that drips only while driving",
      "D) A properly functioning PCV system"
    ],
    answer: 3,
    explanation: "A properly functioning PCV system should not cause oil consumption. It routes crankcase vapors back to the intake for combustion, but its baffles and valve prevent liquid oil from being drawn in. Worn valve seals, piston rings, or a rear main seal that leaks under pressure can all cause oil loss.",
    diagram: "",
    terms: ["pcv_valve", "valve_stem_seals", "piston_rings", "oil_change"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Oil_pump_of_an_automobile_engine.jpg/640px-Oil_pump_of_an_automobile_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=05n6VzLJg7E",
    youtubeTitle: "Engine Oil Pressure - How It Works",
    qChinese: "发动机机油液位低。加满后500英里内液位再次下降，无可见的外部泄漏。以下所有原因都可能导致此问题，除了：",
    optionsChinese: [
      "A) 气门油封磨损",
      "B) 活塞环磨损",
      "C) 仅在行驶时滴漏的后主油封泄漏",
      "D) 工作正常的PCV系统"
    ],
    explanationChinese: "工作正常的PCV系统不应导致机油消耗。它将曲轴箱蒸气引回进气管进行燃烧，但其挡板和阀门阻止液态机油被吸入。磨损的气门油封、活塞环或在压力下泄漏的后主油封都可能导致机油损失。"
  },
  {
    id: 69,
    q: "A coolant recovery system reservoir is found to be empty after the engine cools down. What is the MOST likely cause?",
    options: [
      "A) A stuck-closed thermostat",
      "B) A faulty radiator cap that is not holding pressure or allowing coolant to return",
      "C) An oversized water pump pulley",
      "D) A restricted heater hose"
    ],
    answer: 1,
    explanation: "The radiator cap has two valves: a pressure valve that releases expanding coolant to the reservoir, and a vacuum valve that draws coolant back as the engine cools. If either valve is faulty, coolant may be pushed out but not returned, leaving the reservoir empty after the engine cools down.",
    diagram: "",
    terms: ["radiator", "thermostat", "coolant_flush"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pqFZY6v6OQI",
    youtubeTitle: "How a Car Cooling System Works",
    qChinese: "发动机冷却后发现冷却液回收壶是空的。最可能的原因是什么？",
    optionsChinese: [
      "A) 节温器卡在关闭位置",
      "B) 散热器盖故障，不保压或不允许冷却液回流",
      "C) 水泵皮带轮过大",
      "D) 暖风水管受限"
    ],
    explanationChinese: "散热器盖有两个阀门：压力阀将膨胀的冷却液释放到回收壶，真空阀在发动机冷却时将冷却液抽回。如果任一阀门故障，冷却液可能被推出但无法回流，导致发动机冷却后回收壶为空。"
  },
  {
    id: 70,
    q: "An electric cooling fan does not come on when the engine reaches operating temperature. The fan works when connected directly to battery voltage. What should be tested NEXT?",
    options: [
      "A) The fan blade pitch",
      "B) The coolant temperature sensor, fan relay, and associated wiring",
      "C) The serpentine belt tension",
      "D) The heater control valve"
    ],
    answer: 1,
    explanation: "Since the fan motor works on direct power, the motor and fan are good. The control circuit must be tested: the coolant temperature sensor that signals the PCM, the relay the PCM activates, and the wiring between these components. A fault anywhere in this circuit would prevent automatic fan operation.",
    diagram: "",
    terms: ["coolant_temperature_sensor", "relay", "pcm", "wiring_diagram"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pqFZY6v6OQI",
    youtubeTitle: "How a Car Cooling System Works",
    qChinese: "电动冷却风扇在发动机达到工作温度时不启动。直接连接到蓄电池电压时风扇工作正常。接下来应测试什么？",
    optionsChinese: [
      "A) 风扇叶片角度",
      "B) 冷却液温度传感器、风扇继电器及相关线路",
      "C) 多楔带张力",
      "D) 暖风控制阀"
    ],
    explanationChinese: "既然风扇电机在直接供电时工作正常，说明电机和风扇是好的。必须测试控制电路：向PCM发送信号的冷却液温度传感器、PCM激活的继电器以及这些部件之间的线路。此电路中任何地方的故障都会阻止风扇自动运行。"
  },
  {
    id: 71,
    q: "A drive belt squeals loudly on startup, especially in cold or wet conditions. What is the MOST common cause?",
    options: [
      "A) A worn belt or improper belt tension",
      "B) An over-tightened belt",
      "C) A new belt that has not broken in",
      "D) A misaligned crankshaft pulley"
    ],
    answer: 0,
    explanation: "A worn belt with glazed or cracked surface material loses grip on the pulleys, especially in cold or wet conditions when the belt is stiff or water acts as a lubricant. Improper tension also allows slipping. The belt and tensioner should be inspected and replaced if worn or stretched beyond limits.",
    diagram: "",
    terms: ["serpentine_belt", "alternator", "water_pump"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=Bvp2eMfnFSo",
    youtubeTitle: "Engine Diagnosis Basics for Beginners",
    qChinese: "传动皮带在启动时大声尖叫，特别是在寒冷或潮湿条件下。最常见的原因是什么？",
    optionsChinese: [
      "A) 皮带磨损或皮带张力不当",
      "B) 皮带过紧",
      "C) 新皮带尚未磨合",
      "D) 曲轴皮带轮未对正"
    ],
    explanationChinese: "表面光滑或开裂的磨损皮带在皮带轮上失去抓力，特别是在皮带僵硬或水充当润滑剂的寒冷或潮湿条件下。张力不当也会导致打滑。应检查皮带和张紧器，如磨损或伸展超限则更换。"
  },
  {
    id: 72,
    q: "Technician A says mixing different types of coolant (such as IAT and OAT) can cause cooling system damage. Technician B says all coolants are the same as long as they are the correct color. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Mixing incompatible coolant types, such as Inorganic Acid Technology (IAT) and Organic Acid Technology (OAT), can cause chemical reactions that form gel or sediment, clog passages, and accelerate corrosion. Coolant color alone does not determine compatibility. Always use the manufacturer-specified coolant type.",
    diagram: "",
    terms: ["coolant_flush", "radiator", "water_pump"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pqFZY6v6OQI",
    youtubeTitle: "How a Car Cooling System Works",
    qChinese: "技师A说混合不同类型的冷却液（如IAT和OAT）可能导致冷却系统损坏。技师B说只要颜色正确，所有冷却液都是一样的。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "混合不兼容的冷却液类型，如无机酸技术（IAT）和有机酸技术（OAT），可能引起化学反应形成凝胶或沉淀物，堵塞通道并加速腐蚀。仅凭冷却液颜色不能确定兼容性。务必使用制造商指定的冷却液类型。"
  },
  {
    id: 73,
    q: "An oil pressure warning light comes on intermittently during hard braking. The oil level checks at the full mark. What is the MOST likely cause?",
    options: [
      "A) A failing oil pump",
      "B) Oil sloshing forward in the pan, uncovering the pickup tube",
      "C) A faulty oil pressure sending unit",
      "D) A clogged oil filter"
    ],
    answer: 1,
    explanation: "During hard braking, oil surges forward in the pan due to inertia. If the oil level is borderline or the pan is not baffled, the oil pickup tube can become momentarily uncovered, causing a temporary loss of oil pressure. This is more common with low-profile oil pans or high-performance driving conditions.",
    diagram: "",
    terms: ["oil_pressure", "oil_change", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Oil_pump_of_an_automobile_engine.jpg/640px-Oil_pump_of_an_automobile_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=05n6VzLJg7E",
    youtubeTitle: "Engine Oil Pressure - How It Works",
    qChinese: "机油压力警告灯在急刹车时间歇性亮起。机油液位检查在满刻度。最可能的原因是什么？",
    optionsChinese: [
      "A) 机油泵失效",
      "B) 机油在油底壳中向前涌动，使吸油管露出",
      "C) 机油压力发送器故障",
      "D) 机油滤清器堵塞"
    ],
    explanationChinese: "急刹车时，机油因惯性在油底壳中向前涌动。如果机油液位处于临界点或油底壳没有挡板，吸油管可能瞬间露出，导致暂时的油压损失。这在低矮型油底壳或高性能驾驶条件下更常见。"
  },
  {
    id: 74,
    q: "A vehicle's temperature gauge goes to hot within minutes of starting, but the upper radiator hose is cold. Technician A says the thermostat is likely stuck closed. Technician B says the water pump has likely failed. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "A thermostat stuck closed prevents coolant from flowing to the radiator, explaining why the upper hose stays cold while the engine rapidly overheats. A faulty water pump would cause overheating but the upper hose would typically still become warm from heat conduction, so only Technician A is correct.",
    diagram: "",
    terms: ["thermostat", "radiator", "water_pump"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pqFZY6v6OQI",
    youtubeTitle: "How a Car Cooling System Works",
    qChinese: "车辆温度表在启动几分钟内就升到高温，但上散热器水管是冷的。技师A说节温器可能卡在关闭位置。技师B说水泵可能已失效。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "卡在关闭位置的节温器阻止冷却液流向散热器，解释了为什么上水管保持冷态而发动机快速过热。水泵故障会导致过热，但上水管通常仍会因热传导而变温，因此仅技师A正确。"
  },
  {
    id: 75,
    q: "After an engine rebuild, the oil pressure reads higher than specification. Which of the following is the MOST likely cause?",
    options: [
      "A) New tight-fitting bearings creating reduced clearance",
      "B) A weak oil pump relief valve spring",
      "C) Excessive bearing clearance",
      "D) An incorrect oil filter"
    ],
    answer: 0,
    explanation: "New bearings on a freshly machined crankshaft result in tighter clearances, which restrict oil flow and increase pressure. As the bearings wear in during the break-in period, clearances increase slightly and oil pressure should settle to the normal specification range. This is an expected condition.",
    diagram: "",
    terms: ["oil_pressure", "oil_change", "crankshaft_position_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Oil_pump_of_an_automobile_engine.jpg/640px-Oil_pump_of_an_automobile_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=05n6VzLJg7E",
    youtubeTitle: "Engine Oil Pressure - How It Works",
    qChinese: "发动机翻新后，油压读数高于规格。以下哪项是最可能的原因？",
    optionsChinese: [
      "A) 新的紧配合轴瓦使间隙减小",
      "B) 机油泵泄压阀弹簧过弱",
      "C) 轴承间隙过大",
      "D) 机油滤清器不正确"
    ],
    explanationChinese: "新轴瓦安装在新磨削的曲轴上产生更紧的间隙，限制了机油流动并增加了压力。随着磨合期轴瓦磨合，间隙会略微增大，油压应稳定在正常规格范围内。这是预期状况。"
  },
  {
    id: 76,
    q: "A cooling system pressure test holds pressure for several hours, but the vehicle still loses coolant over time. What should the technician check NEXT?",
    options: [
      "A) The head gasket for an internal leak that only occurs under combustion pressure",
      "B) The water pump bearing",
      "C) The radiator fins",
      "D) The serpentine belt routing"
    ],
    answer: 0,
    explanation: "A static pressure test only applies about 15 psi. An internal head gasket leak may only occur under combustion pressure, which far exceeds the test pressure. A combustion gas test using a block tester or exhaust gas analyzer on the coolant can confirm if combustion gases are leaking into the cooling system.",
    diagram: "",
    terms: ["head_gasket", "radiator", "coolant_flush", "cylinder_head"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Cylinder_head.jpg/640px-Cylinder_head.jpg",
    youtube: "https://www.youtube.com/watch?v=LjBnOajR1Nw",
    youtubeTitle: "Head Gasket Failure - Signs and Diagnosis",
    qChinese: "冷却系统加压测试保持压力数小时，但车辆仍然随时间流失冷却液。技师接下来应检查什么？",
    optionsChinese: [
      "A) 缸垫是否存在仅在燃烧压力下才发生的内部泄漏",
      "B) 水泵轴承",
      "C) 散热器翅片",
      "D) 多楔带走向"
    ],
    explanationChinese: "静态加压测试仅施加约15 psi。内部缸垫泄漏可能仅在远超测试压力的燃烧压力下才会发生。可以使用缸体测试仪或对冷却液进行废气分析来确认燃烧气体是否泄漏进入冷却系统。"
  },
  {
    id: 77,
    q: "An oil pump is being inspected during an engine rebuild. The measurement being taken between the gear teeth and the pump housing is called:",
    options: [
      "A) End play",
      "B) Gear-to-housing clearance (body clearance)",
      "C) Backlash",
      "D) Side clearance"
    ],
    answer: 1,
    explanation: "Gear-to-housing clearance, also called body clearance, is the measurement between the outer surface of the pump gears and the inner bore of the pump housing. Excessive clearance allows oil to leak past the gears, reducing pump efficiency and output pressure. This is a critical measurement during pump inspection.",
    diagram: "",
    terms: ["oil_pressure", "oil_change", "dmm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Oil_pump_of_an_automobile_engine.jpg/640px-Oil_pump_of_an_automobile_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=05n6VzLJg7E",
    youtubeTitle: "Engine Oil Pressure - How It Works",
    qChinese: "发动机翻新期间正在检查机油泵。在齿轮齿与泵壳之间进行的测量称为：",
    optionsChinese: [
      "A) 端隙",
      "B) 齿轮与壳体间隙（体间隙）",
      "C) 齿隙",
      "D) 侧间隙"
    ],
    explanationChinese: "齿轮与壳体间隙，也称为体间隙，是泵齿轮外表面与泵壳内孔之间的测量值。过大的间隙允许机油从齿轮旁泄漏，降低泵效率和输出压力。这是泵检查中的关键测量值。"
  },
  {
    id: 78,
    q: "A coolant leak is observed at the water pump weep hole. Technician A says this indicates a failing water pump seal. Technician B says it is normal for a small amount of coolant to seep from the weep hole. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "An active coolant leak from the water pump weep hole indicates that the internal seal has failed and the pump should be replaced. The weep hole is a drain that sits between the seal and the bearing, designed to alert the technician to seal failure before coolant reaches and destroys the bearing.",
    diagram: "",
    terms: ["water_pump", "coolant_flush", "radiator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pqFZY6v6OQI",
    youtubeTitle: "How a Car Cooling System Works",
    qChinese: "在水泵泄水孔处观察到冷却液泄漏。技师A说这表明水泵密封失效。技师B说少量冷却液从泄水孔渗出是正常的。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "水泵泄水孔处出现活跃的冷却液泄漏表明内部密封已失效，应更换水泵。泄水孔是位于密封和轴承之间的排水口，设计用于在冷却液到达并损坏轴承之前提醒技师密封失效。"
  },
  {
    id: 79,
    q: "An engine equipped with an oil cooler shows coolant contamination in the oil. There are no other symptoms of head gasket failure. What is the MOST likely cause?",
    options: [
      "A) A cracked engine block",
      "B) A failed oil cooler allowing coolant and oil to mix",
      "C) Condensation in the crankcase",
      "D) An incorrect oil filter"
    ],
    answer: 1,
    explanation: "An engine oil cooler uses coolant to regulate oil temperature. If the internal barrier in the cooler fails, coolant and oil mix. Since there are no other head gasket symptoms such as white exhaust smoke or compression loss, the oil cooler is the most likely source of cross-contamination.",
    diagram: "",
    terms: ["oil_pressure", "transmission_cooler", "coolant_flush"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Oil_pump_of_an_automobile_engine.jpg/640px-Oil_pump_of_an_automobile_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=05n6VzLJg7E",
    youtubeTitle: "Engine Oil Pressure - How It Works",
    qChinese: "装有机油冷却器的发动机显示机油中有冷却液污染。没有其他缸垫失效的症状。最可能的原因是什么？",
    optionsChinese: [
      "A) 发动机缸体开裂",
      "B) 机油冷却器失效导致冷却液和机油混合",
      "C) 曲轴箱中的水分凝结",
      "D) 机油滤清器不正确"
    ],
    explanationChinese: "发动机机油冷却器使用冷却液来调节机油温度。如果冷却器内部隔层失效，冷却液和机油会混合。由于没有其他缸垫症状如白色排气烟或压缩损失，机油冷却器是最可能的交叉污染来源。"
  },
  {
    id: 80,
    q: "The purpose of an oil filter bypass valve is to:",
    options: [
      "A) Prevent oil from flowing to the bearings when the engine is cold",
      "B) Allow unfiltered oil to reach engine components rather than starving them when the filter is clogged",
      "C) Regulate oil pressure at high RPM",
      "D) Direct oil to the turbocharger first"
    ],
    answer: 1,
    explanation: "The bypass valve opens when the filter becomes clogged or when cold, thick oil creates excessive resistance across the filter element. It allows unfiltered oil to bypass the filter and reach the bearings and other components, because unfiltered oil is better than no oil at all.",
    diagram: "",
    terms: ["oil_pressure", "oil_change", "multipoint_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Oil_pump_of_an_automobile_engine.jpg/640px-Oil_pump_of_an_automobile_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=05n6VzLJg7E",
    youtubeTitle: "Engine Oil Pressure - How It Works",
    qChinese: "机油滤清器旁通阀的作用是：",
    optionsChinese: [
      "A) 在发动机冷态时阻止机油流向轴承",
      "B) 当滤清器堵塞时允许未过滤的机油到达发动机部件，而非使其缺油",
      "C) 在高转速时调节油压",
      "D) 将机油优先引导至涡轮增压器"
    ],
    explanationChinese: "旁通阀在滤清器堵塞或冷态粘稠机油在滤芯上产生过大阻力时打开。它允许未过滤的机油绕过滤清器到达轴承和其他部件，因为未过滤的机油总比没有机油好。"
  },

  // ===== FUEL, ELECTRICAL, IGNITION, AIR INDUCTION & EXHAUST (Questions 81–100) =====
  {
    id: 81,
    q: "A fuel injector is suspected of being stuck open. Which of the following symptoms would this cause?",
    options: [
      "A) A lean misfire on the affected cylinder",
      "B) A rich condition, rough idle, and possible hydrostatic lock",
      "C) No change in engine operation",
      "D) Increased fuel economy"
    ],
    answer: 1,
    explanation: "A stuck-open fuel injector continuously dumps fuel into its cylinder, causing an extremely rich condition on that cylinder, a rough idle, black smoke, and spark plug fouling. In severe cases, liquid fuel can fill the cylinder and cause hydrostatic lock, potentially bending a connecting rod during cranking.",
    diagram: "",
    terms: ["fuel_injector", "misfire", "stoichiometric", "spark_plug"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=Bvp2eMfnFSo",
    youtubeTitle: "Engine Diagnosis Basics for Beginners",
    qChinese: "怀疑喷油器卡在打开位置。这会导致以下哪种症状？",
    optionsChinese: [
      "A) 受影响气缸的稀混合气失火",
      "B) 过浓状态、怠速粗糙和可能的液压锁",
      "C) 发动机运行无变化",
      "D) 燃油经济性提高"
    ],
    explanationChinese: "卡在打开位置的喷油器持续向其气缸注入燃油，导致该缸极度过浓、怠速粗糙、黑烟和火花塞积碳。严重时，液态燃油可能充满气缸导致液压锁，在起动过程中可能弯曲连杆。"
  },
  {
    id: 82,
    q: "An engine equipped with a mass airflow (MAF) sensor has poor performance and a P0101 DTC. Cleaning the MAF sensor element does not resolve the issue. What should the technician check NEXT?",
    options: [
      "A) The spark plug gap",
      "B) The air intake duct between the MAF sensor and the throttle body for leaks",
      "C) The fuel tank pressure sensor",
      "D) The exhaust oxygen sensor heater circuit"
    ],
    answer: 1,
    explanation: "A crack or leak in the air duct between the MAF sensor and the throttle body allows unmetered air into the engine. The PCM does not account for this air, causing an incorrect fuel calculation. This results in a lean condition, poor performance, and a MAF sensor performance code.",
    diagram: "",
    terms: ["maf_sensor", "dtc", "air_filter", "fuel_trim"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Gasoline_engine_with_carburetor.jpg/640px-Gasoline_engine_with_carburetor.jpg",
    youtube: "https://www.youtube.com/watch?v=Bvp2eMfnFSo",
    youtubeTitle: "Engine Diagnosis Basics for Beginners",
    qChinese: "装有空气流量计（MAF）传感器的发动机性能差并有P0101故障码。清洁MAF传感器元件未解决问题。技师接下来应检查什么？",
    optionsChinese: [
      "A) 火花塞间隙",
      "B) MAF传感器与节气门体之间的进气管道是否有泄漏",
      "C) 油箱压力传感器",
      "D) 排气氧传感器加热电路"
    ],
    explanationChinese: "MAF传感器与节气门体之间的进气管道裂缝或泄漏允许未经计量的空气进入发动机。PCM不计算这部分空气，导致燃油计算不正确。这会导致混合气偏稀、性能差和MAF传感器性能故障码。"
  },
  {
    id: 83,
    q: "Technician A says a weak ignition coil can cause a misfire under load but may test normal at idle. Technician B says ignition coil problems only appear at idle. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "A weak ignition coil may produce enough voltage to fire the spark plug at idle when cylinder pressure is low, but fail under load when higher compression requires greater ignition voltage. This causes a misfire that is more noticeable during acceleration or at highway speeds. Idle-only problems are less common.",
    diagram: "",
    terms: ["ignition_coil", "misfire", "spark_plug"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=Bvp2eMfnFSo",
    youtubeTitle: "Engine Diagnosis Basics for Beginners",
    qChinese: "技师A说弱点火线圈可能在负载下导致失火，但在怠速时测试可能正常。技师B说点火线圈问题仅在怠速时出现。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "弱点火线圈在怠速时气缸压力低的情况下可能产生足够的电压来点燃火花塞，但在负载下更高压缩需要更大点火电压时则会失败。这导致在加速或高速行驶时更明显的失火。仅怠速出现的问题较少见。"
  },
  {
    id: 84,
    q: "A catalytic converter efficiency code (P0420) is set. All of the following can cause this EXCEPT:",
    options: [
      "A) A deteriorated catalytic converter substrate",
      "B) An exhaust leak before the rear oxygen sensor",
      "C) A contaminated catalytic converter from coolant or oil",
      "D) A properly functioning evaporative emission system"
    ],
    answer: 3,
    explanation: "A properly functioning EVAP system does not affect catalytic converter efficiency. A deteriorated substrate, exhaust leaks near oxygen sensors, or contamination from coolant or oil can all affect the converter's ability to process emissions, causing the rear O2 sensor to mirror the front sensor's signal and set P0420.",
    diagram: "",
    terms: ["catalytic_converter", "oxygen_sensor", "evap_system", "dtc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Automobile_exhaust_gas.jpg/640px-Automobile_exhaust_gas.jpg",
    youtube: "https://www.youtube.com/watch?v=cFrUJCG2HZ0",
    youtubeTitle: "What Different Exhaust Smoke Colors Mean",
    qChinese: "催化转化器效率故障码（P0420）被设置。以下所有原因都可能导致此问题，除了：",
    optionsChinese: [
      "A) 催化转化器基质老化",
      "B) 后氧传感器前方的排气泄漏",
      "C) 催化转化器被冷却液或机油污染",
      "D) 工作正常的蒸发排放系统"
    ],
    explanationChinese: "工作正常的蒸发排放（EVAP）系统不影响催化转化器效率。老化的基质、氧传感器附近的排气泄漏或冷却液/机油污染都会影响转化器处理排放的能力，导致后氧传感器信号镜像前传感器信号而设置P0420。"
  },
  {
    id: 85,
    q: "A vehicle exhibits a hesitation during acceleration from a stop. Fuel pressure is within specification. Technician A says a faulty throttle position sensor could cause this. Technician B says a dirty mass airflow sensor could cause this. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both a faulty TPS and a dirty MAF sensor can cause hesitation on acceleration. The TPS must accurately report throttle opening so the PCM can increase fuel delivery during the transition. A dirty MAF underreports airflow, causing a lean condition and hesitation. Both are valid causes when fuel pressure is normal.",
    diagram: "",
    terms: ["throttle_position_sensor", "maf_sensor", "fuel_trim", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=Bvp2eMfnFSo",
    youtubeTitle: "Engine Diagnosis Basics for Beginners",
    qChinese: "车辆从起步加速时出现迟疑。燃油压力在规格范围内。技师A说故障的节气门位置传感器可能导致此问题。技师B说脏污的空气流量计可能导致此问题。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "故障的节气门位置传感器和脏污的空气流量计都可能导致加速迟疑。节气门位置传感器必须准确报告节气门开度，以便PCM在过渡期增加燃油供给。脏污的MAF低估气流量，导致混合气偏稀和迟疑。在燃油压力正常时两者都是有效原因。"
  },
  {
    id: 86,
    q: "An exhaust manifold gasket leak will MOST likely affect which sensor reading?",
    options: [
      "A) The mass airflow sensor",
      "B) The upstream oxygen sensor",
      "C) The coolant temperature sensor",
      "D) The knock sensor"
    ],
    answer: 1,
    explanation: "An exhaust manifold gasket leak allows outside air to enter the exhaust stream before the upstream oxygen sensor. This extra oxygen makes the exhaust appear leaner than it actually is, causing the O2 sensor to send a lean signal and the PCM to add fuel, resulting in a rich running condition.",
    diagram: "",
    terms: ["oxygen_sensor", "fuel_trim", "stoichiometric"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Automobile_exhaust_gas.jpg/640px-Automobile_exhaust_gas.jpg",
    youtube: "https://www.youtube.com/watch?v=cFrUJCG2HZ0",
    youtubeTitle: "What Different Exhaust Smoke Colors Mean",
    qChinese: "排气歧管垫片泄漏最可能影响哪个传感器的读数？",
    optionsChinese: [
      "A) 空气流量计传感器",
      "B) 上游氧传感器",
      "C) 冷却液温度传感器",
      "D) 爆震传感器"
    ],
    explanationChinese: "排气歧管垫片泄漏允许外界空气在上游氧传感器之前进入排气。这些额外的氧气使废气看起来比实际更稀，导致氧传感器发送偏稀信号，PCM增加燃油，结果发动机实际运行过浓。"
  },
  {
    id: 87,
    q: "A scan tool shows long-term fuel trim at +25% at idle. This indicates the engine is running:",
    options: [
      "A) Rich, and the PCM is removing fuel",
      "B) Lean, and the PCM is adding fuel to compensate",
      "C) At stoichiometric ratio",
      "D) In open loop"
    ],
    answer: 1,
    explanation: "Positive long-term fuel trim means the PCM is adding fuel above the base fuel calculation to maintain stoichiometric ratio. A value of +25% indicates a significant lean condition that the PCM is trying to correct. Common causes include vacuum leaks, low fuel pressure, or a dirty MAF sensor.",
    diagram: "",
    terms: ["fuel_trim", "scan_tool", "stoichiometric", "maf_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=Bvp2eMfnFSo",
    youtubeTitle: "Engine Diagnosis Basics for Beginners",
    qChinese: "诊断仪显示怠速时长期燃油修正为+25%。这表明发动机正在：",
    optionsChinese: [
      "A) 过浓运行，PCM正在减少燃油",
      "B) 偏稀运行，PCM正在增加燃油进行补偿",
      "C) 以理论空燃比运行",
      "D) 在开环模式下运行"
    ],
    explanationChinese: "正的长期燃油修正意味着PCM正在基础燃油计算之上增加燃油以维持理论空燃比。+25%的值表明PCM正在试图纠正显著的偏稀状况。常见原因包括真空泄漏、低燃油压力或脏污的MAF传感器。"
  },
  {
    id: 88,
    q: "An engine has a no-start condition. The ignition coil has battery voltage on the positive terminal but the engine will not spark. What should the technician check?",
    options: [
      "A) The coil's ground and trigger signal from the ignition module or PCM",
      "B) The fuel injector wiring",
      "C) The alternator output",
      "D) The transmission range sensor"
    ],
    answer: 0,
    explanation: "An ignition coil needs battery voltage on one side and a switched ground (trigger signal) from the ignition module or PCM on the other. If battery voltage is present but there is no spark, the trigger circuit is not completing the ground path. The module, PCM output, and wiring should be tested.",
    diagram: "",
    terms: ["ignition_coil", "pcm", "ground_circuit", "crankshaft_position_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Crankshaft.jpg/640px-Crankshaft.jpg",
    youtube: "https://www.youtube.com/watch?v=i70X4-RCBKs",
    youtubeTitle: "Crankshaft Position Sensor Testing",
    qChinese: "发动机有无法启动的状况。点火线圈正极端子有蓄电池电压，但发动机不产生火花。技师应检查什么？",
    optionsChinese: [
      "A) 线圈的搭铁和来自点火模块或PCM的触发信号",
      "B) 喷油器线路",
      "C) 发电机输出",
      "D) 变速箱档位传感器"
    ],
    explanationChinese: "点火线圈需要一侧有蓄电池电压，另一侧有来自点火模块或PCM的开关搭铁（触发信号）。如果蓄电池电压存在但没有火花，说明触发电路没有完成搭铁通路。应测试模块、PCM输出和线路。"
  },
  {
    id: 89,
    q: "Technician A says a restricted air filter can cause a rich air-fuel mixture. Technician B says a restricted air filter will cause a lean air-fuel mixture. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "A restricted air filter limits the amount of air entering the engine while the fuel delivery remains relatively unchanged, creating a rich air-fuel mixture. On modern vehicles with MAF sensors, the PCM may partially compensate, but a severely restricted filter still causes a measurable rich shift and reduced power.",
    diagram: "",
    terms: ["air_filter", "stoichiometric", "maf_sensor", "fuel_trim"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Gasoline_engine_with_carburetor.jpg/640px-Gasoline_engine_with_carburetor.jpg",
    youtube: "https://www.youtube.com/watch?v=Bvp2eMfnFSo",
    youtubeTitle: "Engine Diagnosis Basics for Beginners",
    qChinese: "技师A说堵塞的空气滤清器可能导致空燃比过浓。技师B说堵塞的空气滤清器会导致空燃比偏稀。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "堵塞的空气滤清器限制了进入发动机的空气量，而燃油供给保持相对不变，产生过浓的空燃比。在装有MAF传感器的现代车辆上，PCM可能部分补偿，但严重堵塞的滤清器仍会导致可测量的过浓偏移和动力降低。"
  },
  {
    id: 90,
    q: "A fuel pressure regulator diaphragm has ruptured. The vacuum hose connected to it will show:",
    options: [
      "A) No vacuum present",
      "B) Fuel inside the hose",
      "C) Higher-than-normal vacuum",
      "D) Condensation only"
    ],
    answer: 1,
    explanation: "When the diaphragm in a vacuum-referenced fuel pressure regulator ruptures, fuel passes through the tear and into the vacuum hose connected to the intake manifold. This can be checked by removing the vacuum hose and inspecting for fuel. This condition also causes a rich mixture and potential engine flooding.",
    diagram: "",
    terms: ["fuel_injector", "vacuum_gauge", "stoichiometric"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Gasoline_engine_with_carburetor.jpg/640px-Gasoline_engine_with_carburetor.jpg",
    youtube: "https://www.youtube.com/watch?v=0z_HFLOKKSk",
    youtubeTitle: "How to Use a Vacuum Gauge for Engine Diagnosis",
    qChinese: "燃油压力调节器膜片破裂。连接到它的真空管会显示：",
    optionsChinese: [
      "A) 无真空存在",
      "B) 管内有燃油",
      "C) 真空度高于正常",
      "D) 仅有凝结水"
    ],
    explanationChinese: "当真空参考式燃油压力调节器中的膜片破裂时，燃油会通过裂口进入连接到进气歧管的真空管。可以通过拆下真空管并检查是否有燃油来验证。此状况还会导致混合气过浓和可能的发动机淹缸。"
  },
  {
    id: 91,
    q: "An engine equipped with a distributorless ignition system (DIS) has a misfire on Cylinders 1 and 4, which share a waste-spark coil. What is the MOST likely cause?",
    options: [
      "A) A faulty fuel injector on Cylinder 1",
      "B) The ignition coil pack for Cylinders 1 and 4",
      "C) A vacuum leak at Cylinder 4",
      "D) A worn camshaft lobe for Cylinder 1"
    ],
    answer: 1,
    explanation: "In a waste-spark DIS system, two companion cylinders share one coil. If both cylinders misfire, the shared coil is the most likely cause. If only one cylinder misfired, the cause would more likely be cylinder-specific, such as a faulty injector, plug, or wire. A shared coil failure affects both paired cylinders.",
    diagram: "",
    terms: ["ignition_coil", "misfire", "spark_plug"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=Bvp2eMfnFSo",
    youtubeTitle: "Engine Diagnosis Basics for Beginners",
    qChinese: "装有无分电器点火系统（DIS）的发动机在共用一个废火花线圈的1缸和4缸上失火。最可能的原因是什么？",
    optionsChinese: [
      "A) 1缸喷油器故障",
      "B) 1缸和4缸的点火线圈包",
      "C) 4缸处真空泄漏",
      "D) 1缸凸轮轴凸轮磨损"
    ],
    explanationChinese: "在废火花DIS系统中，两个配对气缸共用一个线圈。如果两个气缸都失火，共用的线圈是最可能的原因。如果只有一个气缸失火，原因更可能是特定于该缸的问题，如喷油器、火花塞或导线故障。共用线圈失效会影响两个配对气缸。"
  },
  {
    id: 92,
    q: "A throttle body is removed for cleaning and heavy carbon deposits are found. Carbon buildup on the throttle plate and bore can cause all of the following EXCEPT:",
    options: [
      "A) Erratic or unstable idle speed",
      "B) Stalling at idle",
      "C) Increased fuel injector flow rate",
      "D) The throttle plate sticking during operation"
    ],
    answer: 2,
    explanation: "Throttle body carbon causes erratic idle, stalling, and a sticking throttle plate. However, carbon in the throttle body does not increase fuel injector flow rate, as the injectors are separate components controlled by the PCM. On electronic throttle bodies, carbon can also cause the throttle position to deviate from command.",
    diagram: "",
    terms: ["throttle_position_sensor", "fuel_injector", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Gasoline_engine_with_carburetor.jpg/640px-Gasoline_engine_with_carburetor.jpg",
    youtube: "https://www.youtube.com/watch?v=Bvp2eMfnFSo",
    youtubeTitle: "Engine Diagnosis Basics for Beginners",
    qChinese: "拆下节气门体进行清洁，发现大量积碳。节气门板和孔上的积碳可导致以下所有问题，除了：",
    optionsChinese: [
      "A) 怠速转速不稳或不规则",
      "B) 怠速熄火",
      "C) 喷油器流量增加",
      "D) 节气门板在运行中卡滞"
    ],
    explanationChinese: "节气门体积碳会导致怠速不稳、熄火和节气门板卡滞。然而，节气门体中的积碳不会增加喷油器流量，因为喷油器是由PCM控制的独立部件。在电子节气门体上，积碳还可能导致节气门位置偏离指令。"
  },
  {
    id: 93,
    q: "A vehicle fails an emissions test for high HC (hydrocarbon) readings. All of the following could be causes EXCEPT:",
    options: [
      "A) A misfiring cylinder",
      "B) A lean air-fuel mixture",
      "C) A faulty ignition coil",
      "D) A properly functioning catalytic converter"
    ],
    answer: 3,
    explanation: "A properly functioning catalytic converter reduces HC emissions, it does not cause them. High HC readings indicate unburned fuel in the exhaust, caused by misfires from ignition system faults, lean misfires from fuel delivery issues, or mechanical problems that prevent complete combustion.",
    diagram: "",
    terms: ["catalytic_converter", "misfire", "ignition_coil", "obd2"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Automobile_exhaust_gas.jpg/640px-Automobile_exhaust_gas.jpg",
    youtube: "https://www.youtube.com/watch?v=cFrUJCG2HZ0",
    youtubeTitle: "What Different Exhaust Smoke Colors Mean",
    qChinese: "车辆因高HC（碳氢化合物）读数未通过排放测试。以下所有原因都可能导致此问题，除了：",
    optionsChinese: [
      "A) 气缸失火",
      "B) 空燃比偏稀",
      "C) 点火线圈故障",
      "D) 工作正常的催化转化器"
    ],
    explanationChinese: "工作正常的催化转化器降低HC排放，不会导致HC升高。高HC读数表明排气中有未燃烧的燃油，由点火系统故障导致的失火、燃油供给问题导致的稀混合气失火或妨碍完全燃烧的机械问题引起。"
  },
  {
    id: 94,
    q: "A PCV valve that is stuck closed will MOST likely cause:",
    options: [
      "A) A rich air-fuel mixture",
      "B) Increased crankcase pressure, oil leaks, and oil forced past seals",
      "C) Decreased crankcase pressure",
      "D) Improved fuel economy"
    ],
    answer: 1,
    explanation: "A stuck-closed PCV valve prevents crankcase vapors from being evacuated. Blowby gases accumulate and increase crankcase pressure, which can force oil past seals and gaskets, causing external leaks at the valve covers, rear main seal, and other locations. It can also contaminate the oil with moisture and acids.",
    diagram: "",
    terms: ["pcv_valve", "oil_pressure", "vacuum_gauge"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Oil_pump_of_an_automobile_engine.jpg/640px-Oil_pump_of_an_automobile_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=05n6VzLJg7E",
    youtubeTitle: "Engine Oil Pressure - How It Works",
    qChinese: "PCV阀卡在关闭位置最可能导致：",
    optionsChinese: [
      "A) 空燃比过浓",
      "B) 曲轴箱压力升高、漏油和机油被压过密封件",
      "C) 曲轴箱压力降低",
      "D) 燃油经济性改善"
    ],
    explanationChinese: "PCV阀卡在关闭位置阻止曲轴箱蒸气被排出。窜气积聚增加曲轴箱压力，可能将机油压过密封件和垫片，导致气门室盖、后主油封和其他位置的外部泄漏。还会导致机油被水分和酸污染。"
  },
  {
    id: 95,
    q: "Technician A says that a loose or missing gas cap can cause the check engine light to illuminate. Technician B says the EVAP system monitors fuel tank vapor integrity. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "The EVAP system monitors fuel vapor containment, including the gas cap seal. A loose or missing gas cap causes a large leak that the EVAP monitor detects, setting a DTC and illuminating the MIL. The EVAP system tests the entire vapor path from the tank through the purge and vent valves for integrity.",
    diagram: "",
    terms: ["evap_system", "dtc", "obd2", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=Bvp2eMfnFSo",
    youtubeTitle: "Engine Diagnosis Basics for Beginners",
    qChinese: "技师A说松动或缺失的油箱盖可以导致发动机故障灯亮起。技师B说蒸发排放系统监控油箱蒸气完整性。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "蒸发排放（EVAP）系统监控燃油蒸气密封性，包括油箱盖密封。松动或缺失的油箱盖造成大泄漏，EVAP监控器检测到后会设置故障码并点亮故障指示灯。EVAP系统测试从油箱通过净化阀和通气阀的整个蒸气路径的完整性。"
  },
  {
    id: 96,
    q: "An intake manifold runner control (IMRC) system is designed to:",
    options: [
      "A) Control exhaust gas recirculation",
      "B) Vary the intake runner length or volume to optimize torque across the RPM range",
      "C) Regulate fuel pressure",
      "D) Control the cooling fan speed"
    ],
    answer: 1,
    explanation: "The IMRC system uses butterfly valves or similar mechanisms to change the effective length or volume of the intake runners. Shorter runners improve high-RPM airflow and power, while longer runners improve low-RPM torque. The PCM actuates the system based on engine speed and load conditions.",
    diagram: "",
    terms: ["map_sensor", "pcm", "throttle_position_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Gasoline_engine_with_carburetor.jpg/640px-Gasoline_engine_with_carburetor.jpg",
    youtube: "https://www.youtube.com/watch?v=Bvp2eMfnFSo",
    youtubeTitle: "Engine Diagnosis Basics for Beginners",
    qChinese: "进气歧管气道控制（IMRC）系统的设计目的是：",
    optionsChinese: [
      "A) 控制废气再循环",
      "B) 改变进气道长度或容积以在转速范围内优化扭矩",
      "C) 调节燃油压力",
      "D) 控制冷却风扇转速"
    ],
    explanationChinese: "IMRC系统使用蝶形阀或类似机构改变进气道的有效长度或容积。较短的气道改善高转速气流和功率，较长的气道改善低转速扭矩。PCM根据发动机转速和负荷条件驱动该系统。"
  },
  {
    id: 97,
    q: "A spark plug removed from a cylinder has a white, blistered electrode with melted deposits. This condition indicates:",
    options: [
      "A) A rich air-fuel mixture",
      "B) Normal combustion",
      "C) Overheating from a lean mixture, advanced timing, or insufficient cooling",
      "D) Oil fouling"
    ],
    answer: 2,
    explanation: "A white, blistered spark plug electrode with melted deposits indicates excessive combustion chamber temperatures. Causes include a lean air-fuel mixture, overly advanced ignition timing, insufficient cooling, or a heat range plug that is too hot. This condition can lead to pre-ignition and engine damage if not corrected.",
    diagram: "",
    terms: ["spark_plug", "detonation", "stoichiometric", "ignition_coil"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=Bvp2eMfnFSo",
    youtubeTitle: "Engine Diagnosis Basics for Beginners",
    qChinese: "从气缸中拆下的火花塞电极呈白色、起泡并有熔化沉积物。此状况表明：",
    optionsChinese: [
      "A) 空燃比过浓",
      "B) 正常燃烧",
      "C) 因混合气偏稀、点火正时过早或冷却不足导致的过热",
      "D) 机油污染"
    ],
    explanationChinese: "白色、起泡的火花塞电极伴有熔化沉积物表明燃烧室温度过高。原因包括空燃比偏稀、点火正时过度提前、冷却不足或火花塞热值过高。如不纠正，此状况可能导致早燃和发动机损坏。"
  },
  {
    id: 98,
    q: "A vehicle has a rough idle and a P0171 (system too lean, Bank 1) code. Spraying carburetor cleaner around the intake manifold causes the idle to temporarily smooth out. What does this confirm?",
    options: [
      "A) A faulty fuel injector",
      "B) A vacuum leak at the intake manifold area",
      "C) A clogged fuel filter",
      "D) A faulty MAP sensor"
    ],
    answer: 1,
    explanation: "When spraying carburetor cleaner or propane around the intake manifold momentarily smooths the idle, it confirms a vacuum leak in that area. The spray is temporarily drawn into the leak point, providing additional fuel that compensates for the extra unmetered air and briefly enriches the mixture.",
    diagram: "",
    terms: ["fuel_trim", "dtc", "vacuum_gauge", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Gasoline_engine_with_carburetor.jpg/640px-Gasoline_engine_with_carburetor.jpg",
    youtube: "https://www.youtube.com/watch?v=0z_HFLOKKSk",
    youtubeTitle: "How to Use a Vacuum Gauge for Engine Diagnosis",
    qChinese: "车辆怠速粗糙并有P0171（系统偏稀，第1组）故障码。在进气歧管周围喷射化油器清洁剂后怠速暂时变得平稳。这确认了什么？",
    optionsChinese: [
      "A) 喷油器故障",
      "B) 进气歧管区域的真空泄漏",
      "C) 燃油滤清器堵塞",
      "D) MAP传感器故障"
    ],
    explanationChinese: "在进气歧管周围喷射化油器清洁剂或丙烷后怠速瞬间变平稳，确认该区域存在真空泄漏。喷射物被暂时吸入泄漏点，提供额外燃油补偿多余的未计量空气，短暂地使混合气变浓。"
  },
  {
    id: 99,
    q: "All of the following describe symptoms of a restricted exhaust system EXCEPT:",
    options: [
      "A) Loss of power at higher RPMs",
      "B) The engine stalls when put in gear",
      "C) A vacuum reading that drops as RPM is held steady at 2,500",
      "D) Increased fuel economy at highway speed"
    ],
    answer: 3,
    explanation: "A restricted exhaust does not improve fuel economy. It causes power loss, especially at higher RPMs when exhaust volume is greatest. Holding RPM at 2,500 causes the vacuum gauge to gradually drop as backpressure builds. Severe restriction can cause stalling when the torque converter loads the engine at low speed.",
    diagram: "",
    terms: ["catalytic_converter", "vacuum_gauge", "egr_valve"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Automobile_exhaust_gas.jpg/640px-Automobile_exhaust_gas.jpg",
    youtube: "https://www.youtube.com/watch?v=cFrUJCG2HZ0",
    youtubeTitle: "What Different Exhaust Smoke Colors Mean",
    qChinese: "以下所有都是排气系统受限的症状，除了：",
    optionsChinese: [
      "A) 高转速时动力损失",
      "B) 挂入档位时发动机熄火",
      "C) 在2500转稳定保持时真空读数下降",
      "D) 高速公路行驶时燃油经济性提高"
    ],
    explanationChinese: "排气受限不会改善燃油经济性。它会导致动力损失，特别是在排气量最大的高转速时。在2500转保持时真空表会因背压积聚而逐渐下降。严重受限可能在液力变矩器在低速加载发动机时导致熄火。"
  },
  {
    id: 100,
    q: "A fuel-injected engine has a crank-no-start condition. A noid light connected in place of a fuel injector does not flash during cranking. What does this indicate?",
    options: [
      "A) The fuel pump is inoperative",
      "B) The injector circuit is not receiving a pulse signal from the PCM",
      "C) The injector is clogged",
      "D) The fuel pressure regulator has failed"
    ],
    answer: 1,
    explanation: "A noid light tests for the presence of an injector driver signal from the PCM. If it does not flash during cranking, the PCM is not pulsing the injectors. This could be caused by a missing crank sensor signal, a PCM fault, a blown injector fuse, or a wiring issue in the injector control circuit.",
    diagram: "",
    terms: ["fuel_injector", "pcm", "crankshaft_position_sensor", "fuse"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Crankshaft.jpg/640px-Crankshaft.jpg",
    youtube: "https://www.youtube.com/watch?v=i70X4-RCBKs",
    youtubeTitle: "Crankshaft Position Sensor Testing",
    qChinese: "电喷发动机有无法启动的状况。将测试灯连接到喷油器位置，起动过程中不闪烁。这说明什么？",
    optionsChinese: [
      "A) 燃油泵不工作",
      "B) 喷油器电路没有收到来自PCM的脉冲信号",
      "C) 喷油器堵塞",
      "D) 燃油压力调节器失效"
    ],
    explanationChinese: "测试灯（noid light）测试PCM是否发出喷油器驱动信号。如果在起动过程中不闪烁，说明PCM没有向喷油器发送脉冲。这可能由缺失的曲轴传感器信号、PCM故障、喷油器保险丝熔断或喷油器控制电路的线路问题引起。"
  }
];
