const questionsA8 = [
  // =============================================
  // GENERAL DIAGNOSIS (Questions 1–24)
  // =============================================
  {
    id: 1,
    q: "A vehicle has white smoke coming from the exhaust that does not clear after the engine reaches operating temperature. What is the MOST likely cause?",
    options: [
      "A) Rich air-fuel mixture",
      "B) Coolant leaking into the combustion chamber",
      "C) Worn piston rings",
      "D) Leaking fuel injector"
    ],
    answer: 1,
    explanation: "Persistent white smoke after warm-up indicates coolant entering the combustion chamber, typically from a blown head gasket, cracked cylinder head, or cracked block. Steam from coolant produces thick white smoke. A rich mixture causes black smoke, and worn rings cause blue smoke.",
    diagram: "",
    terms: ["head_gasket", "cylinder_head", "coolant_temperature_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "一辆车排气管冒白烟，发动机达到工作温度后仍不消散。最可能的原因是什么？",
    optionsChinese: [
      "A) 混合气过浓",
      "B) 冷却液泄漏进入燃烧室",
      "C) 活塞环磨损",
      "D) 喷油器泄漏"
    ],
    explanationChinese: "发动机暖机后持续冒白烟表明冷却液进入了燃烧室，通常是由于气缸垫损坏、气缸盖裂纹或缸体裂纹。冷却液产生的蒸汽会形成浓白烟。混合气过浓会产生黑烟，活塞环磨损会产生蓝烟。"
  },
  {
    id: 2,
    q: "Blue smoke from the exhaust during deceleration is MOST likely caused by:",
    options: [
      "A) Worn piston rings",
      "B) Leaking valve stem seals",
      "C) A blown head gasket",
      "D) An overly rich fuel mixture"
    ],
    answer: 1,
    explanation: "Blue smoke on deceleration typically indicates worn or hardened valve stem seals. During deceleration, high intake manifold vacuum pulls oil past the seals and into the combustion chamber. Worn piston rings usually produce blue smoke under acceleration or load conditions.",
    diagram: "",
    terms: ["valve_stem_seals", "piston_rings", "vacuum_gauge"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "减速时排气管冒蓝烟，最可能的原因是：",
    optionsChinese: [
      "A) 活塞环磨损",
      "B) 气门油封泄漏",
      "C) 气缸垫损坏",
      "D) 混合气过浓"
    ],
    explanationChinese: "减速时冒蓝烟通常表明气门油封磨损或硬化。减速时进气歧管真空度高，会将机油吸过油封进入燃烧室。活塞环磨损通常在加速或负荷工况下产生蓝烟。"
  },
  {
    id: 3,
    q: "A vacuum gauge connected to the intake manifold reads a steady 17 in. Hg at idle. This reading indicates:",
    options: [
      "A) Normal engine operation at sea level",
      "B) A vacuum leak is present",
      "C) Late ignition or valve timing",
      "D) A restricted exhaust system"
    ],
    answer: 2,
    explanation: "Normal intake manifold vacuum at sea level is approximately 17–21 in. Hg at idle. A steady reading of 17 in. Hg is on the low end and most likely indicates late ignition timing or late valve timing. A vacuum leak would produce a lower, possibly fluctuating reading.",
    diagram: "",
    terms: ["vacuum_gauge", "camshaft", "variable_valve_timing"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "在怠速时将真空表连接到进气歧管，读数稳定在17英寸汞柱。该读数表明：",
    optionsChinese: [
      "A) 海平面高度发动机正常运转",
      "B) 存在真空泄漏",
      "C) 点火正时或配气正时偏迟",
      "D) 排气系统受阻"
    ],
    explanationChinese: "海平面高度怠速时正常进气歧管真空度约为17-21英寸汞柱。稳定读数17英寸汞柱偏低，最可能表明点火正时偏迟或配气正时偏迟。真空泄漏会产生更低且可能波动的读数。"
  },
  {
    id: 4,
    q: "Technician A says a compression test should be performed with the throttle held wide open. Technician B says all spark plugs should be removed before performing the test. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. The throttle must be held wide open to allow maximum airflow into the cylinders for an accurate reading. All spark plugs should be removed so the engine cranks at a uniform speed and other cylinders do not create back-pressure that could affect results.",
    diagram: "",
    terms: ["compression_test", "spark_plug", "piston_rings"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Spark Plug Reading and Diagnosis",
    qChinese: "技师A说压缩测试应在节气门全开状态下进行。技师B说在测试前应拆下所有火花塞。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都正确。节气门必须全开以允许最大气流进入气缸，获得准确读数。应拆下所有火花塞，使发动机以均匀速度曲轴转动，其他气缸不会产生影响结果的背压。"
  },
  {
    id: 5,
    q: "A cylinder leak-down test shows 40% leakage with air heard at the tailpipe. What is the MOST likely cause?",
    options: [
      "A) Blown head gasket",
      "B) Intake valve not sealing",
      "C) Exhaust valve not sealing",
      "D) Worn piston rings"
    ],
    answer: 2,
    explanation: "Air escaping from the tailpipe during a leak-down test indicates the exhaust valve is not sealing properly. The air bypasses the exhaust valve and exits through the exhaust system. A leaking intake valve would cause air at the throttle body, and worn rings cause air in the crankcase.",
    diagram: "",
    terms: ["leak_down_test", "cylinder_head", "camshaft"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "气缸漏气测试显示40%泄漏，且在排气管处听到气流声。最可能的原因是什么？",
    optionsChinese: [
      "A) 气缸垫损坏",
      "B) 进气门密封不良",
      "C) 排气门密封不良",
      "D) 活塞环磨损"
    ],
    explanationChinese: "气缸漏气测试时气流从排气管逸出，表明排气门密封不良。空气绕过排气门并通过排气系统排出。进气门泄漏会导致气流出现在节气门体处，活塞环磨损会导致气流进入曲轴箱。"
  },
  {
    id: 6,
    q: "During a power balance test on a four-cylinder engine, disabling cylinder #3 causes no RPM drop. This indicates:",
    options: [
      "A) Cylinder #3 is the strongest cylinder",
      "B) Cylinder #3 is not contributing to engine power",
      "C) The ignition system is functioning normally",
      "D) The fuel injector for cylinder #3 is stuck open"
    ],
    answer: 1,
    explanation: "If disabling a cylinder causes no RPM drop, that cylinder was not contributing power before it was disabled. This could be caused by a misfire, no compression, a faulty injector, or a bad spark plug. A strong cylinder would cause a noticeable RPM drop when disabled.",
    diagram: "",
    terms: ["misfire", "compression_test", "fuel_injector", "spark_plug"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Diagnosing Engine Misfires",
    qChinese: "在四缸发动机的功率平衡测试中，禁用3号气缸后转速没有下降。这表明：",
    optionsChinese: [
      "A) 3号气缸是最强的气缸",
      "B) 3号气缸没有为发动机提供动力",
      "C) 点火系统工作正常",
      "D) 3号气缸的喷油器卡开"
    ],
    explanationChinese: "如果禁用某个气缸后转速没有下降，说明该气缸在被禁用前就没有提供动力。原因可能是失火、无压缩、喷油器故障或火花塞损坏。正常工作的气缸被禁用后会导致明显的转速下降。"
  },
  {
    id: 7,
    q: "A scan tool shows a short-term fuel trim (STFT) of +25% at idle. This indicates the engine is running:",
    options: [
      "A) Rich and the PCM is subtracting fuel",
      "B) Lean and the PCM is adding fuel",
      "C) At the correct air-fuel ratio",
      "D) In open loop mode"
    ],
    answer: 1,
    explanation: "A positive short-term fuel trim of +25% means the PCM is adding 25% more fuel than the base fuel map calls for. This indicates the engine is running lean, and the PCM is compensating by adding fuel. Common causes include vacuum leaks, low fuel pressure, or a dirty MAF sensor.",
    diagram: "",
    terms: ["fuel_trim", "scan_tool", "pcm", "maf_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=cBzsOD3Yl28",
    youtubeTitle: "Understanding Fuel Trims for Diagnosis",
    qChinese: "诊断仪显示怠速时短期燃油修正(STFT)为+25%。这表明发动机运行状态为：",
    optionsChinese: [
      "A) 过浓，PCM正在减少喷油量",
      "B) 过稀，PCM正在增加喷油量",
      "C) 空燃比正确",
      "D) 处于开环模式"
    ],
    explanationChinese: "短期燃油修正为+25%意味着PCM在基础喷油量的基础上多喷了25%的燃油。这表明发动机运行过稀，PCM通过增加喷油来补偿。常见原因包括真空泄漏、燃油压力低或空气流量传感器脏污。"
  },
  {
    id: 8,
    q: "Freeze frame data is captured by the PCM when:",
    options: [
      "A) The engine is first started",
      "B) A diagnostic trouble code (DTC) is set",
      "C) The ignition is turned off",
      "D) The vehicle exceeds 60 mph"
    ],
    answer: 1,
    explanation: "Freeze frame data is a snapshot of engine operating conditions at the exact moment a DTC is stored. It includes parameters such as RPM, coolant temperature, vehicle speed, fuel trim, and engine load. This data helps technicians replicate the conditions under which the fault occurred.",
    diagram: "",
    terms: ["dtc", "scan_tool", "pcm", "obd2"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "冻结帧数据由PCM在以下情况下捕获：",
    optionsChinese: [
      "A) 发动机首次启动时",
      "B) 存储故障码(DTC)时",
      "C) 关闭点火开关时",
      "D) 车速超过60英里/小时时"
    ],
    explanationChinese: "冻结帧数据是DTC存储时发动机工作状态的快照。它包括转速、冷却液温度、车速、燃油修正和发动机负荷等参数。这些数据帮助技师重现故障发生时的工况条件。"
  },
  {
    id: 9,
    q: "A rhythmic knocking noise that increases with engine RPM is MOST likely caused by:",
    options: [
      "A) Worn main bearings",
      "B) A cracked flexplate",
      "C) Piston slap",
      "D) A worn connecting rod bearing"
    ],
    answer: 3,
    explanation: "A rhythmic knocking that follows engine RPM is commonly caused by a worn connecting rod bearing. The noise is produced once per crankshaft revolution on the affected cylinder. Main bearing knock is typically a heavier, duller thud. Piston slap is usually most noticeable when the engine is cold.",
    diagram: "",
    terms: ["crankshaft_position_sensor", "oil_pressure", "piston_rings"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Engine Knock and Detonation Causes",
    qChinese: "随发动机转速增加而加剧的有节奏敲击声，最可能的原因是：",
    optionsChinese: [
      "A) 主轴承磨损",
      "B) 飞轮/柔性板开裂",
      "C) 活塞敲缸",
      "D) 连杆轴承磨损"
    ],
    explanationChinese: "随发动机转速变化的有节奏敲击声通常由连杆轴承磨损引起。该噪音在受影响气缸每转一圈曲轴时产生一次。主轴承敲击声通常更沉闷。活塞敲缸通常在发动机冷态时最明显。"
  },
  {
    id: 10,
    q: "A vacuum gauge needle fluctuates rapidly between 14 and 19 in. Hg at idle. This MOST likely indicates:",
    options: [
      "A) A restricted exhaust",
      "B) Worn valve guides",
      "C) Late valve timing",
      "D) A sticking valve"
    ],
    answer: 1,
    explanation: "A rapidly fluctuating vacuum gauge needle at idle often indicates worn valve guides allowing inconsistent valve seating. The fluctuation increases with RPM. A sticking valve causes an intermittent drop at regular intervals, while a restricted exhaust causes vacuum to gradually decrease at higher RPM.",
    diagram: "",
    terms: ["vacuum_gauge", "valve_stem_seals", "cylinder_head"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "怠速时真空表指针在14至19英寸汞柱之间快速波动。这最可能表明：",
    optionsChinese: [
      "A) 排气受阻",
      "B) 气门导管磨损",
      "C) 配气正时偏迟",
      "D) 气门卡滞"
    ],
    explanationChinese: "怠速时真空表指针快速波动通常表明气门导管磨损，导致气门密封不一致。波动随转速增加而加剧。气门卡滞会导致有规律的间歇性读数下降，排气受阻会导致高转速时真空度逐渐降低。"
  },
  {
    id: 11,
    q: "All of the following can cause black exhaust smoke EXCEPT:",
    options: [
      "A) A stuck-open fuel injector",
      "B) Excessive fuel pressure",
      "C) A restricted air filter",
      "D) A leaking vacuum hose"
    ],
    answer: 3,
    explanation: "A leaking vacuum hose causes a lean condition, not a rich one. Black smoke indicates an excessively rich air-fuel mixture. A stuck-open injector, excessive fuel pressure, and a restricted air filter all cause or contribute to a rich condition that produces black exhaust smoke.",
    diagram: "",
    terms: ["fuel_injector", "air_filter", "fuel_trim"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=Bfq5Dkf7hYs",
    youtubeTitle: "How Fuel Injectors Work",
    qChinese: "以下所有情况都可能导致黑色排气烟雾，除了：",
    optionsChinese: [
      "A) 喷油器卡开",
      "B) 燃油压力过高",
      "C) 空气滤清器堵塞",
      "D) 真空软管泄漏"
    ],
    explanationChinese: "真空软管泄漏会导致混合气过稀，而非过浓。黑烟表明空燃比过浓。喷油器卡开、燃油压力过高和空气滤清器堵塞都会导致或加剧过浓状况，产生黑色排气烟雾。"
  },
  {
    id: 12,
    q: "A technician notices a sweet smell from the exhaust and the coolant level is low. The MOST likely cause is:",
    options: [
      "A) A rich fuel mixture",
      "B) An internal coolant leak",
      "C) A leaking heater core",
      "D) A faulty thermostat"
    ],
    answer: 1,
    explanation: "A sweet smell from the exhaust combined with low coolant indicates coolant is entering the combustion chamber through an internal leak. Common causes include a blown head gasket, cracked head, or cracked block. A heater core leak would produce a sweet smell inside the cabin, not from the tailpipe.",
    diagram: "",
    terms: ["head_gasket", "heater_core", "coolant_flush"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "技师注意到排气有甜味且冷却液液位偏低。最可能的原因是：",
    optionsChinese: [
      "A) 混合气过浓",
      "B) 内部冷却液泄漏",
      "C) 暖风水箱泄漏",
      "D) 恒温器故障"
    ],
    explanationChinese: "排气有甜味且冷却液偏低，表明冷却液通过内部泄漏进入了燃烧室。常见原因包括气缸垫损坏、缸盖裂纹或缸体裂纹。暖风水箱泄漏会在车内产生甜味，而非排气管。"
  },
  {
    id: 13,
    q: "Technician A says a relative compression test can be performed using a current probe on the battery cable. Technician B says a relative compression test compares cranking amperage between cylinders. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. A relative compression test uses a current probe on the battery cable to measure cranking amperage. Each cylinder draws more current on its compression stroke. By comparing the amperage patterns between cylinders, a weak cylinder can be identified quickly without removing spark plugs.",
    diagram: "",
    terms: ["compression_test", "battery", "starter_motor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "技师A说相对压缩测试可以使用电池电缆上的电流探头进行。技师B说相对压缩测试是比较各气缸之间的起动电流。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都正确。相对压缩测试使用电池电缆上的电流探头测量起动电流。每个气缸在压缩冲程时消耗更多电流。通过比较各气缸之间的电流波形，可以快速识别弱缸，而无需拆卸火花塞。"
  },
  {
    id: 14,
    q: "An engine has a steady vacuum reading of 10 in. Hg at idle. The MOST likely cause is:",
    options: [
      "A) A clogged catalytic converter",
      "B) Severely retarded ignition timing",
      "C) A large vacuum leak",
      "D) Worn piston rings"
    ],
    answer: 2,
    explanation: "A steady but very low vacuum reading of 10 in. Hg at idle typically indicates a large vacuum leak, such as a disconnected or cracked vacuum hose, a leaking intake manifold gasket, or a stuck-open brake booster valve. A restricted exhaust would show vacuum rising then dropping as RPM increases.",
    diagram: "",
    terms: ["vacuum_gauge", "brake_booster", "catalytic_converter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lambda_sensor.jpg/640px-Lambda_sensor.jpg",
    youtube: "https://www.youtube.com/watch?v=GmOZvlJ8nxY",
    youtubeTitle: "Catalytic Converter Function and Testing",
    qChinese: "发动机怠速时真空读数稳定在10英寸汞柱。最可能的原因是：",
    optionsChinese: [
      "A) 三元催化器堵塞",
      "B) 点火正时严重偏迟",
      "C) 较大的真空泄漏",
      "D) 活塞环磨损"
    ],
    explanationChinese: "怠速时稳定但很低的真空读数10英寸汞柱通常表明存在较大的真空泄漏，例如真空软管断开或破裂、进气歧管垫泄漏或刹车助力器阀卡开。排气受阻时真空度会随转速升高先上升后下降。"
  },
  {
    id: 15,
    q: "A scan tool indicates long-term fuel trim (LTFT) at -18% at idle and at cruise. This condition indicates:",
    options: [
      "A) The engine is running lean",
      "B) The oxygen sensor is biased lean",
      "C) The engine is running rich and the PCM is subtracting fuel",
      "D) The MAF sensor is reading too low"
    ],
    answer: 2,
    explanation: "A negative long-term fuel trim of -18% means the PCM is consistently subtracting fuel, indicating the engine is running rich. Causes include a leaking fuel injector, excessive fuel pressure, or a contaminated MAF sensor reading higher than actual airflow. The PCM compensates by reducing injector pulse width.",
    diagram: "",
    terms: ["fuel_trim", "maf_sensor", "fuel_injector", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=cBzsOD3Yl28",
    youtubeTitle: "Understanding Fuel Trims for Diagnosis",
    qChinese: "诊断仪显示怠速和巡航时长期燃油修正(LTFT)为-18%。该状况表明：",
    optionsChinese: [
      "A) 发动机运行过稀",
      "B) 氧传感器偏向过稀",
      "C) 发动机运行过浓，PCM正在减少喷油",
      "D) 空气流量传感器读数偏低"
    ],
    explanationChinese: "长期燃油修正为-18%意味着PCM持续减少喷油量，表明发动机运行过浓。原因包括喷油器泄漏、燃油压力过高或空气流量传感器受污染导致读数偏高。PCM通过减少喷油脉宽来补偿。"
  },
  {
    id: 16,
    q: "During a visual inspection, oil is found in the coolant. Which component failure is MOST likely?",
    options: [
      "A) Valve cover gasket",
      "B) Head gasket",
      "C) Oil pan gasket",
      "D) Rear main seal"
    ],
    answer: 1,
    explanation: "Oil in the coolant most commonly results from a head gasket failure between an oil passage and a coolant passage. An oil cooler failure can also cause this. Valve cover, oil pan, and rear main seal leaks cause external oil leaks and would not introduce oil into the cooling system.",
    diagram: "",
    terms: ["head_gasket", "oil_pressure", "coolant_flush"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "目视检查时发现冷却液中有机油。最可能的部件故障是：",
    optionsChinese: [
      "A) 气门室盖垫",
      "B) 气缸垫",
      "C) 油底壳垫",
      "D) 后主油封"
    ],
    explanationChinese: "冷却液中出现机油最常见的原因是气缸垫在油道和水道之间损坏。机油冷却器故障也可能导致此问题。气门室盖垫、油底壳垫和后主油封泄漏导致外部漏油，不会将机油引入冷却系统。"
  },
  {
    id: 17,
    q: "An engine misfires only under load. Compression and fuel pressure are within specifications. The MOST likely cause is:",
    options: [
      "A) A faulty ignition coil breaking down under load",
      "B) A clogged air filter",
      "C) Low idle speed",
      "D) A stuck-open thermostat"
    ],
    answer: 0,
    explanation: "An ignition coil that breaks down under load is a common cause of misfire only during acceleration or heavy load. The increased cylinder pressure requires higher secondary voltage to fire the spark plug. A weak coil may fire at idle but fail under load when voltage demand rises.",
    diagram: "",
    terms: ["ignition_coil", "misfire", "spark_plug", "compression_test"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Ignition System - How It Works",
    qChinese: "发动机仅在负荷工况下失火。压缩和燃油压力均在规格范围内。最可能的原因是：",
    optionsChinese: [
      "A) 点火线圈在负荷下击穿",
      "B) 空气滤清器堵塞",
      "C) 怠速转速低",
      "D) 恒温器卡开"
    ],
    explanationChinese: "点火线圈在负荷下击穿是仅在加速或重负荷时失火的常见原因。气缸压力升高需要更高的次级电压来点燃火花塞。弱的线圈可能在怠速时能正常工作，但在电压需求升高的负荷工况下失效。"
  },
  {
    id: 18,
    q: "A vacuum gauge needle slowly drops from 21 to 12 in. Hg when the engine is held at 2500 RPM. This indicates:",
    options: [
      "A) A vacuum leak",
      "B) A restricted exhaust system",
      "C) Late ignition timing",
      "D) Worn piston rings"
    ],
    answer: 1,
    explanation: "A vacuum reading that gradually decreases at a steady elevated RPM indicates a restricted exhaust. Back-pressure builds up in the exhaust system and pushes back against the pistons, reducing intake vacuum. Common causes include a clogged catalytic converter or a collapsed inner exhaust pipe wall.",
    diagram: "",
    terms: ["vacuum_gauge", "catalytic_converter", "exhaust"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lambda_sensor.jpg/640px-Lambda_sensor.jpg",
    youtube: "https://www.youtube.com/watch?v=GmOZvlJ8nxY",
    youtubeTitle: "Catalytic Converter Function and Testing",
    qChinese: "发动机保持2500转时，真空表指针从21缓慢下降到12英寸汞柱。这表明：",
    optionsChinese: [
      "A) 真空泄漏",
      "B) 排气系统受阻",
      "C) 点火正时偏迟",
      "D) 活塞环磨损"
    ],
    explanationChinese: "在稳定的较高转速下真空读数逐渐降低表明排气受阻。排气系统中的背压积聚并推回活塞，降低进气真空度。常见原因包括三元催化器堵塞或排气管内壁塌陷。"
  },
  {
    id: 19,
    q: "Which scan tool data parameter is MOST useful for identifying a cylinder-specific misfire?",
    options: [
      "A) Engine coolant temperature",
      "B) Misfire count per cylinder",
      "C) Intake air temperature",
      "D) Mass airflow rate"
    ],
    answer: 1,
    explanation: "The misfire count per cylinder (or misfire history) parameter directly identifies which cylinder is misfiring and how frequently. The PCM uses crankshaft position sensor data to detect variations in crankshaft speed that indicate misfires and logs them on a per-cylinder basis.",
    diagram: "",
    terms: ["misfire", "scan_tool", "crankshaft_position_sensor", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Diagnosing Engine Misfires",
    qChinese: "以下哪个诊断仪数据参数最适合识别特定气缸的失火？",
    optionsChinese: [
      "A) 发动机冷却液温度",
      "B) 各缸失火计数",
      "C) 进气温度",
      "D) 空气质量流量"
    ],
    explanationChinese: "各缸失火计数（或失火历史记录）参数直接识别哪个气缸在失火及失火频率。PCM使用曲轴位置传感器数据检测曲轴转速变化来检测失火，并按各缸分别记录。"
  },
  {
    id: 20,
    q: "Technician A says a wet compression test is performed by adding a small amount of oil to each cylinder. Technician B says improved readings during a wet compression test confirm worn piston rings. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. A wet compression test adds a small amount of oil to the cylinder to temporarily seal the piston rings. If compression readings improve significantly, it confirms the rings are worn or not sealing. If readings remain low, the valves or head gasket are the likely cause.",
    diagram: "",
    terms: ["wet_compression_test", "piston_rings", "compression_test"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "技师A说湿压缩测试是向每个气缸加入少量机油进行的。技师B说湿压缩测试读数提高可以确认活塞环磨损。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都正确。湿压缩测试向气缸加入少量机油以临时密封活塞环。如果压缩读数明显提高，则确认活塞环磨损或密封不良。如果读数仍然偏低，则可能是气门或气缸垫问题。"
  },
  {
    id: 21,
    q: "An engine has a ticking noise that increases with RPM and is loudest near the valve cover. The MOST likely cause is:",
    options: [
      "A) Worn main bearings",
      "B) Excessive valve lash or a collapsed lifter",
      "C) Piston pin knock",
      "D) Detonation"
    ],
    answer: 1,
    explanation: "A ticking noise near the valve cover that follows engine speed is typically caused by excessive valve lash, a worn rocker arm, or a collapsed hydraulic lifter. These components are located directly beneath the valve cover. Main bearing and piston pin noises originate from the lower end of the engine.",
    diagram: "",
    terms: ["hydraulic_lifter", "camshaft", "variable_valve_timing"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "发动机有随转速增加而加剧的嗒嗒声，且在气门室盖附近最响。最可能的原因是：",
    optionsChinese: [
      "A) 主轴承磨损",
      "B) 气门间隙过大或液压挺柱塌陷",
      "C) 活塞销敲击",
      "D) 爆震"
    ],
    explanationChinese: "气门室盖附近随发动机转速变化的嗒嗒声通常由气门间隙过大、摇臂磨损或液压挺柱塌陷引起。这些部件位于气门室盖正下方。主轴承和活塞销噪声来源于发动机下部。"
  },
  {
    id: 22,
    q: "A customer complains of a sulfur (rotten egg) smell from the exhaust. The MOST likely cause is:",
    options: [
      "A) A lean air-fuel mixture",
      "B) An excessively rich air-fuel mixture",
      "C) A coolant leak into the combustion chamber",
      "D) Worn piston rings allowing oil burning"
    ],
    answer: 1,
    explanation: "A sulfur or rotten egg smell from the exhaust is caused by hydrogen sulfide produced when the catalytic converter processes an overly rich exhaust mixture. The excess fuel contains sulfur compounds that are not fully converted. Correcting the rich condition typically eliminates the odor.",
    diagram: "",
    terms: ["catalytic_converter", "fuel_trim", "oxygen_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lambda_sensor.jpg/640px-Lambda_sensor.jpg",
    youtube: "https://www.youtube.com/watch?v=GmOZvlJ8nxY",
    youtubeTitle: "Catalytic Converter Function and Testing",
    qChinese: "客户抱怨排气有硫磺（臭鸡蛋）味。最可能的原因是：",
    optionsChinese: [
      "A) 混合气过稀",
      "B) 混合气过浓",
      "C) 冷却液泄漏进入燃烧室",
      "D) 活塞环磨损导致烧机油"
    ],
    explanationChinese: "排气中的硫磺或臭鸡蛋味是由三元催化器处理过浓排气混合物时产生的硫化氢引起的。过量燃油中的硫化合物未被完全转化。纠正过浓状况通常可以消除异味。"
  },
  {
    id: 23,
    q: "A cylinder leak-down test shows 5% leakage on all cylinders. This indicates:",
    options: [
      "A) Worn piston rings on all cylinders",
      "B) Normal engine condition",
      "C) A cracked engine block",
      "D) Worn valve seats"
    ],
    answer: 1,
    explanation: "A leak-down percentage of 5% or less on all cylinders is considered normal and indicates the engine is in good mechanical condition. Up to about 10–15% is generally acceptable on a used engine. Higher or uneven readings suggest specific component wear or damage in those cylinders.",
    diagram: "",
    terms: ["leak_down_test", "piston_rings", "cylinder_head"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "气缸漏气测试显示所有气缸泄漏率为5%。这表明：",
    optionsChinese: [
      "A) 所有气缸活塞环磨损",
      "B) 发动机状况正常",
      "C) 缸体裂纹",
      "D) 气门座磨损"
    ],
    explanationChinese: "所有气缸的漏气率为5%或以下被认为是正常的，表明发动机机械状况良好。二手发动机约10-15%的漏气率通常也是可接受的。更高或不均匀的读数表明相应气缸存在特定部件磨损或损坏。"
  },
  {
    id: 24,
    q: "A scan tool shows Mode $06 data with a failing cylinder contribution test on cylinder #2. This MOST likely indicates:",
    options: [
      "A) An oxygen sensor malfunction",
      "B) A misfire on cylinder #2",
      "C) A faulty PCM",
      "D) Low battery voltage"
    ],
    answer: 1,
    explanation: "Mode $06 provides test results for individual OBD II monitor components. A failing cylinder contribution test means cylinder #2 is not producing adequate power compared to other cylinders. This is a precursor to setting a misfire DTC and could be caused by ignition, fuel, or compression issues.",
    diagram: "",
    terms: ["obd2", "scan_tool", "misfire", "dtc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "诊断仪显示Mode $06数据中2号气缸贡献测试未通过。这最可能表明：",
    optionsChinese: [
      "A) 氧传感器故障",
      "B) 2号气缸失火",
      "C) PCM故障",
      "D) 电池电压低"
    ],
    explanationChinese: "Mode $06提供各OBD II监测器组件的测试结果。气缸贡献测试未通过意味着2号气缸与其他气缸相比未产生足够的动力。这是失火DTC设置的前兆，可能由点火、燃油或压缩问题引起。"
  },

  // =============================================
  // IGNITION SYSTEM (Questions 25–40)
  // =============================================
  {
    id: 25,
    q: "An engine cranks but will not start. There is no spark at any cylinder. All of the following could be the cause EXCEPT:",
    options: [
      "A) A faulty crankshaft position sensor",
      "B) A failed ignition control module",
      "C) A broken timing belt",
      "D) A clogged fuel filter"
    ],
    answer: 3,
    explanation: "A clogged fuel filter would cause a no-fuel condition, not a no-spark condition. A faulty crankshaft position sensor, failed ignition module, and a broken timing belt (preventing CMP signal or CKP correlation) can all result in a complete loss of spark to every cylinder.",
    diagram: "",
    terms: ["crankshaft_position_sensor", "ignition_coil", "timing_chain"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Ignition System - How It Works",
    qChinese: "发动机可以转动但无法启动。所有气缸均无火花。以下所有原因都可能导致该故障，除了：",
    optionsChinese: [
      "A) 曲轴位置传感器故障",
      "B) 点火控制模块故障",
      "C) 正时皮带断裂",
      "D) 燃油滤清器堵塞"
    ],
    explanationChinese: "燃油滤清器堵塞会导致无燃油状况，而非无火花状况。曲轴位置传感器故障、点火控制模块故障和正时皮带断裂（阻止CMP信号或CKP关联）都可能导致所有气缸完全失去火花。"
  },
  {
    id: 26,
    q: "A misfire occurs on cylinder #4 only. The spark plug wire is moved from cylinder #4 to cylinder #2. The misfire now occurs on cylinder #2. The cause is:",
    options: [
      "A) A faulty fuel injector on cylinder #4",
      "B) A defective spark plug wire",
      "C) Low compression on cylinder #4",
      "D) A faulty coil pack for cylinder #4"
    ],
    answer: 1,
    explanation: "When the spark plug wire is moved and the misfire follows the wire to a different cylinder, the wire itself is the problem. If the misfire stayed on cylinder #4, the fault would be related to the injector, compression, or other cylinder-specific component rather than the ignition secondary circuit.",
    diagram: "",
    terms: ["spark_plug", "misfire", "ignition_coil"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Diagnosing Engine Misfires",
    qChinese: "4号气缸发生失火。将火花塞线从4号气缸移到2号气缸后，失火转移到2号气缸。原因是：",
    optionsChinese: [
      "A) 4号气缸的喷油器故障",
      "B) 火花塞线损坏",
      "C) 4号气缸压缩不足",
      "D) 4号气缸的点火线圈组故障"
    ],
    explanationChinese: "当火花塞线移动后失火跟随该线转移到另一个气缸时，说明问题出在该线本身。如果失火仍留在4号气缸，则故障与喷油器、压缩或其他气缸特定部件有关，而非点火次级电路。"
  },
  {
    id: 27,
    q: "Which spark plug condition indicates a lean air-fuel mixture?",
    options: [
      "A) Black, sooty deposits on the electrode",
      "B) White or light gray electrode with blistering",
      "C) Oily, wet deposits on the electrode",
      "D) Light tan or brown deposits on the electrode"
    ],
    answer: 1,
    explanation: "A white or light gray spark plug electrode with possible blistering indicates a lean air-fuel mixture causing high combustion temperatures. Black sooty deposits indicate a rich mixture. Oily deposits indicate oil consumption. Light tan or brown deposits indicate a normal-running engine condition.",
    diagram: "",
    terms: ["spark_plug", "fuel_trim", "stoichiometric"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Spark Plug Reading and Diagnosis",
    qChinese: "哪种火花塞状态表明混合气过稀？",
    optionsChinese: [
      "A) 电极上有黑色碳沉积物",
      "B) 电极呈白色或浅灰色并有气泡",
      "C) 电极上有油腻湿润的沉积物",
      "D) 电极上有浅棕褐色或棕色沉积物"
    ],
    explanationChinese: "白色或浅灰色的火花塞电极并可能有气泡表明混合气过稀，导致燃烧温度过高。黑色碳沉积表明混合气过浓。油腻沉积物表明烧机油。浅棕褐色或棕色沉积物表明发动机运行正常。"
  },
  {
    id: 28,
    q: "Technician A says a coil-on-plug (COP) ignition system does not use spark plug wires. Technician B says a faulty COP coil can cause a single-cylinder misfire. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. In a coil-on-plug system, each ignition coil mounts directly on top of its spark plug, eliminating the need for spark plug wires. Because each cylinder has its own coil, a failure of one COP coil will cause a misfire on only that specific cylinder.",
    diagram: "",
    terms: ["ignition_coil", "spark_plug", "misfire"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Ignition System - How It Works",
    qChinese: "技师A说独立点火(COP)系统不使用火花塞线。技师B说COP线圈故障可导致单缸失火。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都正确。独立点火系统中，每个点火线圈直接安装在火花塞上方，无需火花塞线。由于每个气缸有自己的线圈，一个COP线圈故障只会导致该特定气缸失火。"
  },
  {
    id: 29,
    q: "A crankshaft position (CKP) sensor signal is being tested with an oscilloscope. The signal shows evenly spaced pulses with one gap. The gap represents:",
    options: [
      "A) A damaged reluctor wheel tooth",
      "B) The reference point for cylinder #1 TDC",
      "C) An electrical short in the sensor wiring",
      "D) A failing crankshaft position sensor"
    ],
    answer: 1,
    explanation: "The gap in the CKP reluctor wheel signal pattern is a designed missing tooth that serves as a reference point. The PCM uses this gap to identify crankshaft position and calculate top dead center for synchronizing ignition and fuel injection events. A damaged tooth would create an unexpected irregularity.",
    diagram: "",
    terms: ["crankshaft_position_sensor", "pcm", "ignition_coil"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "使用示波器测试曲轴位置(CKP)传感器信号。信号显示均匀间隔的脉冲和一个间隙。该间隙代表：",
    optionsChinese: [
      "A) 信号轮齿损坏",
      "B) 1号气缸上止点的参考点",
      "C) 传感器线路短路",
      "D) 曲轴位置传感器即将失效"
    ],
    explanationChinese: "CKP信号轮信号波形中的间隙是设计的缺齿，作为参考点。PCM使用该间隙来识别曲轴位置并计算上止点，以同步点火和燃油喷射事件。损坏的齿会产生意外的不规则信号。"
  },
  {
    id: 30,
    q: "Secondary ignition voltage is higher than normal on one cylinder. The MOST likely cause is:",
    options: [
      "A) A shorted spark plug wire",
      "B) A fouled spark plug",
      "C) A wide spark plug gap",
      "D) Low compression on that cylinder"
    ],
    answer: 2,
    explanation: "A wider-than-normal spark plug gap requires higher voltage to bridge the gap and create a spark. A fouled plug or shorted wire would reduce the required voltage. Low compression reduces the cylinder pressure and actually lowers the required firing voltage. A wide gap increases resistance to spark formation.",
    diagram: "",
    terms: ["spark_plug", "ignition_coil", "compression_test"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Spark Plug Reading and Diagnosis",
    qChinese: "某气缸的次级点火电压高于正常值。最可能的原因是：",
    optionsChinese: [
      "A) 火花塞线短路",
      "B) 火花塞积碳",
      "C) 火花塞间隙过大",
      "D) 该气缸压缩不足"
    ],
    explanationChinese: "火花塞间隙过大需要更高的电压来跨越间隙产生火花。积碳的火花塞或短路的高压线会降低所需电压。低压缩降低气缸压力，实际上降低所需的点火电压。间隙过大增加了产生火花的阻力。"
  },
  {
    id: 31,
    q: "An engine has an intermittent misfire that occurs only when it rains or in high humidity. The MOST likely cause is:",
    options: [
      "A) A faulty fuel pump",
      "B) Cracked spark plug wire insulation or coil boot",
      "C) A dirty air filter",
      "D) Low fuel pressure"
    ],
    answer: 1,
    explanation: "Moisture-related intermittent misfires are typically caused by cracked spark plug wire insulation, deteriorated coil boots, or cracked distributor caps. Moisture bridges the gap in the cracked insulation and provides an alternate path for the high-voltage secondary ignition signal to arc to ground.",
    diagram: "",
    terms: ["spark_plug", "ignition_coil", "misfire"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Diagnosing Engine Misfires",
    qChinese: "发动机有间歇性失火，仅在下雨或高湿度时发生。最可能的原因是：",
    optionsChinese: [
      "A) 燃油泵故障",
      "B) 火花塞线绝缘层裂纹或线圈护套破损",
      "C) 空气滤清器脏污",
      "D) 燃油压力低"
    ],
    explanationChinese: "与湿度相关的间歇性失火通常由火花塞线绝缘层裂纹、线圈护套老化或分电器盖裂纹引起。水分在裂纹绝缘层处形成导通路径，使高压次级点火信号沿替代路径对地放电。"
  },
  {
    id: 32,
    q: "The primary ignition circuit includes all of the following components EXCEPT:",
    options: [
      "A) The ignition control module",
      "B) The spark plug",
      "C) The ignition coil primary winding",
      "D) The crankshaft position sensor"
    ],
    answer: 1,
    explanation: "The spark plug is part of the secondary ignition circuit. The primary circuit includes the battery, ignition switch, ignition control module, CKP sensor (or distributor pickup), primary coil winding, and related wiring. The secondary circuit includes the coil secondary winding, spark plug wires, and spark plugs.",
    diagram: "",
    terms: ["ignition_coil", "spark_plug", "crankshaft_position_sensor", "battery"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Ignition System - How It Works",
    qChinese: "初级点火电路包括以下所有部件，除了：",
    optionsChinese: [
      "A) 点火控制模块",
      "B) 火花塞",
      "C) 点火线圈初级绕组",
      "D) 曲轴位置传感器"
    ],
    explanationChinese: "火花塞属于次级点火电路。初级电路包括蓄电池、点火开关、点火控制模块、CKP传感器（或分电器拾取器）、初级线圈绕组和相关线路。次级电路包括线圈次级绕组、火花塞线和火花塞。"
  },
  {
    id: 33,
    q: "A camshaft position (CMP) sensor is used by the PCM primarily to:",
    options: [
      "A) Control idle speed",
      "B) Determine which cylinder is on its compression stroke for sequential fuel injection",
      "C) Measure engine oil pressure",
      "D) Regulate alternator output"
    ],
    answer: 1,
    explanation: "The CMP sensor identifies camshaft position so the PCM can determine which cylinder is on its compression stroke. This is essential for sequential fuel injection timing, which requires injecting fuel only into the cylinder that is about to enter the intake stroke. It also aids ignition timing in some systems.",
    diagram: "",
    terms: ["camshaft", "pcm", "fuel_injector", "crankshaft_position_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=Bfq5Dkf7hYs",
    youtubeTitle: "How Fuel Injectors Work",
    qChinese: "凸轮轴位置(CMP)传感器主要用于PCM：",
    optionsChinese: [
      "A) 控制怠速转速",
      "B) 确定哪个气缸处于压缩冲程以进行顺序喷射",
      "C) 测量发动机机油压力",
      "D) 调节发电机输出"
    ],
    explanationChinese: "CMP传感器识别凸轮轴位置，使PCM能确定哪个气缸处于压缩冲程。这对于顺序燃油喷射正时至关重要，需要仅向即将进入进气冲程的气缸喷射燃油。在某些系统中它还辅助点火正时。"
  },
  {
    id: 34,
    q: "Ignition timing that is too far advanced will cause:",
    options: [
      "A) Black exhaust smoke",
      "B) Engine detonation (knock)",
      "C) Rich fuel mixture",
      "D) Low exhaust temperatures"
    ],
    answer: 1,
    explanation: "Excessively advanced ignition timing causes the air-fuel mixture to ignite too early, before the piston reaches TDC. This creates high cylinder pressure and temperatures that can cause detonation or spark knock. The PCM uses a knock sensor to detect this and retard timing to prevent engine damage.",
    diagram: "",
    terms: ["detonation", "ignition_coil", "pcm", "crankshaft_position_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Engine Knock and Detonation Causes",
    qChinese: "点火正时过度提前会导致：",
    optionsChinese: [
      "A) 黑色排气烟雾",
      "B) 发动机爆震（敲缸）",
      "C) 混合气过浓",
      "D) 排气温度低"
    ],
    explanationChinese: "点火正时过度提前导致混合气在活塞到达上止点之前过早点燃。这产生过高的气缸压力和温度，可能导致爆震或敲缸。PCM使用爆震传感器检测并推迟正时以防止发动机损坏。"
  },
  {
    id: 35,
    q: "Technician A says a no-start condition with no CKP sensor signal could be caused by a damaged reluctor wheel. Technician B says an open in the CKP sensor wiring can also cause a no-start. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. A damaged or missing reluctor wheel will not generate the signal needed by the PCM to fire the ignition and injectors, causing a no-start. Similarly, an open circuit in the CKP sensor wiring prevents the signal from reaching the PCM, producing the same no-start result.",
    diagram: "",
    terms: ["crankshaft_position_sensor", "pcm", "wiring_diagram"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "技师A说没有CKP传感器信号的无法启动状况可能由信号轮损坏引起。技师B说CKP传感器线路断路也可导致无法启动。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都正确。损坏或缺失的信号轮无法产生PCM点火和喷油所需的信号，导致无法启动。同样，CKP传感器线路断路会阻止信号传输到PCM，产生相同的无法启动结果。"
  },
  {
    id: 36,
    q: "An oscilloscope pattern of the secondary ignition shows a very short spark duration (burn time). The MOST likely cause is:",
    options: [
      "A) High secondary resistance",
      "B) A lean air-fuel mixture",
      "C) A rich air-fuel mixture or fouled spark plug",
      "D) A wide spark plug gap"
    ],
    answer: 2,
    explanation: "A short spark duration indicates low resistance in the secondary circuit. A rich mixture or a fouled spark plug provides additional conductive paths across the plug gap, reducing resistance and shortening burn time. A lean mixture or high resistance increases burn time because the voltage must sustain longer.",
    diagram: "",
    terms: ["spark_plug", "ignition_coil", "fuel_trim"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Spark Plug Reading and Diagnosis",
    qChinese: "次级点火示波器波形显示火花持续时间（燃烧时间）很短。最可能的原因是：",
    optionsChinese: [
      "A) 次级电路电阻高",
      "B) 混合气过稀",
      "C) 混合气过浓或火花塞积碳",
      "D) 火花塞间隙过大"
    ],
    explanationChinese: "火花持续时间短表明次级电路电阻低。过浓的混合气或积碳的火花塞在火花塞间隙处提供了额外的导通路径，降低了电阻并缩短了燃烧时间。过稀的混合气或高电阻会增加燃烧时间，因为电压需要维持更长时间。"
  },
  {
    id: 37,
    q: "What is the purpose of the ignition control module (ICM)?",
    options: [
      "A) To regulate fuel pressure",
      "B) To switch the primary ignition circuit on and off",
      "C) To generate secondary voltage directly",
      "D) To control the alternator output"
    ],
    answer: 1,
    explanation: "The ignition control module switches the primary circuit current on and off at the correct time. When the ICM turns off the primary current, the magnetic field in the coil collapses, inducing high secondary voltage. In modern systems, the PCM often controls this function directly through coil drivers.",
    diagram: "",
    terms: ["ignition_coil", "pcm", "crankshaft_position_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Ignition System - How It Works",
    qChinese: "点火控制模块(ICM)的作用是什么？",
    optionsChinese: [
      "A) 调节燃油压力",
      "B) 接通和断开初级点火电路",
      "C) 直接产生次级电压",
      "D) 控制发电机输出"
    ],
    explanationChinese: "点火控制模块在正确的时间接通和断开初级电路电流。当ICM断开初级电流时，线圈中的磁场塌缩，感应出高次级电压。在现代系统中，PCM通常通过线圈驱动器直接控制此功能。"
  },
  {
    id: 38,
    q: "A spark plug has an iridium tip with a gap specification of 0.044 inch. The measured gap is 0.065 inch. The technician should:",
    options: [
      "A) Install the plug as-is since iridium plugs are self-adjusting",
      "B) Replace the spark plug with a new one",
      "C) Use a gapping tool to close the gap to specification",
      "D) Widen the gap further for better ignition"
    ],
    answer: 1,
    explanation: "Iridium and platinum spark plugs should not be gapped with a conventional tool because the delicate precious-metal tip can be damaged or broken. If the gap is out of specification, the plug should be replaced with a new one gapped correctly from the factory to prevent misfires.",
    diagram: "",
    terms: ["spark_plug", "misfire", "ignition_coil"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Spark Plug Reading and Diagnosis",
    qChinese: "一颗铱金火花塞间隙规格为0.044英寸。测量间隙为0.065英寸。技师应该：",
    optionsChinese: [
      "A) 直接安装，因为铱金火花塞可自动调节",
      "B) 更换新的火花塞",
      "C) 使用调隙工具将间隙调至规格值",
      "D) 进一步加大间隙以改善点火"
    ],
    explanationChinese: "铱金和铂金火花塞不应使用传统工具调间隙，因为精密的贵金属尖端可能被损坏或折断。如果间隙不在规格范围内，应更换出厂已正确调好间隙的新火花塞，以防止失火。"
  },
  {
    id: 39,
    q: "An engine with a waste spark ignition system misfires on cylinders 1 and 4. The MOST likely cause is:",
    options: [
      "A) A faulty fuel injector on cylinder #1",
      "B) A faulty ignition coil that fires the #1/#4 companion pair",
      "C) Low compression on cylinder #4 only",
      "D) A faulty camshaft position sensor"
    ],
    answer: 1,
    explanation: "In a waste spark system, one coil fires two companion cylinders simultaneously. If the coil serving the #1/#4 pair fails, both cylinders lose spark. A faulty injector or low compression would affect only one cylinder. This paired failure pattern is a key diagnostic indicator of a waste spark coil issue.",
    diagram: "",
    terms: ["ignition_coil", "misfire", "spark_plug"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Ignition System - How It Works",
    qChinese: "配备废气火花点火系统的发动机在1号和4号气缸失火。最可能的原因是：",
    optionsChinese: [
      "A) 1号气缸的喷油器故障",
      "B) 负责1号/4号配对气缸的点火线圈故障",
      "C) 仅4号气缸压缩不足",
      "D) 凸轮轴位置传感器故障"
    ],
    explanationChinese: "在废气火花系统中，一个线圈同时点燃两个配对气缸。如果负责1号/4号配对的线圈失效，两个气缸都会失去火花。喷油器故障或压缩不足只会影响一个气缸。这种配对故障模式是废气火花线圈问题的关键诊断指标。"
  },
  {
    id: 40,
    q: "A vehicle has a DTC P0335 (Crankshaft Position Sensor A Circuit Malfunction). All of the following should be checked EXCEPT:",
    options: [
      "A) CKP sensor wiring and connector",
      "B) CKP sensor air gap",
      "C) Reluctor wheel condition",
      "D) Throttle position sensor voltage"
    ],
    answer: 3,
    explanation: "A P0335 DTC relates specifically to the crankshaft position sensor circuit. The technician should inspect the CKP sensor wiring, connector, air gap, and reluctor wheel for damage. The throttle position sensor is unrelated to the CKP circuit and would not cause this code to set.",
    diagram: "",
    terms: ["crankshaft_position_sensor", "dtc", "wiring_diagram", "throttle_position_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "车辆有DTC P0335（曲轴位置传感器A电路故障）。以下所有项目都应检查，除了：",
    optionsChinese: [
      "A) CKP传感器线路和接插件",
      "B) CKP传感器气隙",
      "C) 信号轮状况",
      "D) 节气门位置传感器电压"
    ],
    explanationChinese: "P0335 DTC专门与曲轴位置传感器电路相关。技师应检查CKP传感器线路、接插件、气隙和信号轮是否损坏。节气门位置传感器与CKP电路无关，不会导致该故障码。"
  },

  // =============================================
  // FUEL, AIR INDUCTION & EXHAUST (Questions 41–58)
  // =============================================
  {
    id: 41,
    q: "A fuel pressure test on a port fuel-injected engine shows 25 psi. The specification is 40–45 psi. The MOST likely cause is:",
    options: [
      "A) A restricted fuel return line",
      "B) A weak fuel pump or clogged fuel filter",
      "C) A faulty fuel pressure regulator stuck closed",
      "D) Leaking fuel injectors"
    ],
    answer: 1,
    explanation: "Low fuel pressure is most commonly caused by a weak fuel pump or a clogged fuel filter restricting fuel flow. A restricted return line or stuck-closed regulator would cause high pressure. Leaking injectors would cause a slight drop in pressure but typically not a drop to 25 psi during operation.",
    diagram: "",
    terms: ["fuel_injector", "fuel_trim", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=Bfq5Dkf7hYs",
    youtubeTitle: "How Fuel Injectors Work",
    qChinese: "对进气道喷射发动机进行燃油压力测试，显示25 psi。规格值为40-45 psi。最可能的原因是：",
    optionsChinese: [
      "A) 燃油回油管路受阻",
      "B) 燃油泵衰弱或燃油滤清器堵塞",
      "C) 燃油压力调节器卡闭",
      "D) 喷油器泄漏"
    ],
    explanationChinese: "燃油压力低最常见的原因是燃油泵衰弱或燃油滤清器堵塞限制了燃油流量。回油管路受阻或调节器卡闭会导致压力偏高。喷油器泄漏会导致压力略有下降，但运行时通常不会降至25 psi。"
  },
  {
    id: 42,
    q: "Fuel pressure drops rapidly after the engine is shut off. The MOST likely cause is:",
    options: [
      "A) A faulty fuel pressure regulator or leaking injector",
      "B) A clogged fuel filter",
      "C) A restricted fuel return line",
      "D) A faulty MAF sensor"
    ],
    answer: 0,
    explanation: "Fuel pressure should hold for an extended period after engine shutdown. A rapid pressure drop indicates a leak in the system, commonly from a faulty fuel pressure regulator leaking fuel into the intake manifold or a leaking fuel injector allowing fuel into the cylinder. Both prevent pressure retention.",
    diagram: "",
    terms: ["fuel_injector", "fuel_trim", "maf_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=Bfq5Dkf7hYs",
    youtubeTitle: "How Fuel Injectors Work",
    qChinese: "发动机熄火后燃油压力迅速下降。最可能的原因是：",
    optionsChinese: [
      "A) 燃油压力调节器故障或喷油器泄漏",
      "B) 燃油滤清器堵塞",
      "C) 燃油回油管路受阻",
      "D) 空气流量传感器故障"
    ],
    explanationChinese: "发动机熄火后燃油压力应保持较长时间。压力迅速下降表明系统存在泄漏，常见原因是燃油压力调节器故障导致燃油泄漏进入进气歧管，或喷油器泄漏允许燃油进入气缸。两者都会导致无法保持压力。"
  },
  {
    id: 43,
    q: "A dirty throttle body can cause all of the following symptoms EXCEPT:",
    options: [
      "A) Rough or unstable idle",
      "B) Higher-than-normal idle speed",
      "C) Stalling at idle",
      "D) Excessive exhaust back-pressure"
    ],
    answer: 3,
    explanation: "A dirty throttle body restricts airflow at the throttle plate, causing rough idle, stalling, or erratic idle speed. Carbon buildup changes the effective opening size. However, it does not cause excessive exhaust back-pressure, which is caused by restrictions in the exhaust system such as a clogged catalytic converter.",
    diagram: "",
    terms: ["throttle_position_sensor", "catalytic_converter", "air_filter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=Bfq5Dkf7hYs",
    youtubeTitle: "Throttle Body and TPS Explained",
    qChinese: "脏污的节气门体可导致以下所有症状，除了：",
    optionsChinese: [
      "A) 怠速粗糙或不稳",
      "B) 怠速转速偏高",
      "C) 怠速熄火",
      "D) 排气背压过高"
    ],
    explanationChinese: "脏污的节气门体会限制节气门板处的气流，导致怠速粗糙、熄火或怠速不稳。积碳改变了有效开度。但它不会导致排气背压过高，排气背压过高是由排气系统堵塞（如三元催化器堵塞）引起的。"
  },
  {
    id: 44,
    q: "A MAF sensor reads lower airflow than actual. This will cause the engine to run:",
    options: [
      "A) Rich because the PCM adds too much fuel",
      "B) Lean because the PCM delivers insufficient fuel",
      "C) At the correct air-fuel ratio",
      "D) With advanced ignition timing only"
    ],
    answer: 1,
    explanation: "If the MAF sensor underreports airflow, the PCM calculates a fuel delivery amount based on less air than is actually entering the engine. This results in a lean condition because not enough fuel is injected. Common causes of low MAF readings include a contaminated sensing element or air leaks after the MAF.",
    diagram: "",
    terms: ["maf_sensor", "pcm", "fuel_trim", "fuel_injector"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=cBzsOD3Yl28",
    youtubeTitle: "MAF Sensor Testing and Cleaning",
    qChinese: "空气流量传感器(MAF)读数低于实际值。这将导致发动机运行：",
    optionsChinese: [
      "A) 过浓，因为PCM添加了过多燃油",
      "B) 过稀，因为PCM供油不足",
      "C) 空燃比正确",
      "D) 仅点火正时提前"
    ],
    explanationChinese: "如果MAF传感器低报气流量，PCM将基于比实际进入发动机的空气少的量来计算喷油量。这导致过稀状况，因为喷油量不足。MAF读数偏低的常见原因包括传感器元件受污染或MAF之后的空气泄漏。"
  },
  {
    id: 45,
    q: "Technician A says a MAP sensor measures intake manifold pressure. Technician B says a MAP sensor can be used in place of a MAF sensor on speed-density fuel injection systems. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. A MAP sensor measures manifold absolute pressure, which reflects engine load and vacuum. In speed-density systems, the PCM uses MAP sensor data along with RPM, air temperature, and volumetric efficiency tables to calculate airflow, eliminating the need for a MAF sensor.",
    diagram: "",
    terms: ["map_sensor", "maf_sensor", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=kEIO1jjV-GQ",
    youtubeTitle: "MAP Sensor Function and Testing",
    qChinese: "技师A说MAP传感器测量进气歧管压力。技师B说在速度-密度燃油喷射系统中MAP传感器可以替代MAF传感器使用。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都正确。MAP传感器测量歧管绝对压力，反映发动机负荷和真空度。在速度-密度系统中，PCM使用MAP传感器数据与转速、进气温度和容积效率表来计算气流量，无需MAF传感器。"
  },
  {
    id: 46,
    q: "An engine surges at idle. The fuel pressure is within specification. A propane enrichment test causes the idle to smooth out. The MOST likely cause is:",
    options: [
      "A) A rich fuel condition",
      "B) A vacuum leak",
      "C) High fuel pressure",
      "D) A faulty ignition coil"
    ],
    answer: 1,
    explanation: "If adding propane (fuel) smooths the idle, the engine is running lean. Since fuel pressure is normal, the lean condition is most likely caused by a vacuum leak allowing unmetered air into the intake manifold. The added propane compensates for the extra air, confirming the lean condition from the vacuum leak.",
    diagram: "",
    terms: ["vacuum_gauge", "fuel_trim", "fuel_injector"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=cBzsOD3Yl28",
    youtubeTitle: "Understanding Fuel Trims for Diagnosis",
    qChinese: "发动机怠速时有喘振。燃油压力在规格范围内。丙烷加浓测试后怠速变平稳。最可能的原因是：",
    optionsChinese: [
      "A) 混合气过浓",
      "B) 真空泄漏",
      "C) 燃油压力偏高",
      "D) 点火线圈故障"
    ],
    explanationChinese: "如果添加丙烷（燃油）使怠速平稳，说明发动机运行过稀。由于燃油压力正常，过稀状况最可能是由真空泄漏导致未经计量的空气进入进气歧管。添加的丙烷补偿了额外的空气，确认了真空泄漏导致的过稀状况。"
  },
  {
    id: 47,
    q: "A fuel injector is electrically tested and found to have infinite resistance. This means the injector:",
    options: [
      "A) Is functioning normally",
      "B) Has a short circuit",
      "C) Has an open circuit and must be replaced",
      "D) Has low resistance and is partially shorted"
    ],
    answer: 2,
    explanation: "Infinite resistance indicates an open circuit within the injector coil winding, meaning no current can flow through it and the injector cannot open. Normal injector resistance varies by type but is typically between 2 and 16 ohms. An open injector will cause a dead cylinder and must be replaced.",
    diagram: "",
    terms: ["fuel_injector", "ohms_law", "dmm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=Bfq5Dkf7hYs",
    youtubeTitle: "How Fuel Injectors Work",
    qChinese: "对喷油器进行电气测试，发现电阻为无穷大。这意味着喷油器：",
    optionsChinese: [
      "A) 工作正常",
      "B) 存在短路",
      "C) 存在断路，必须更换",
      "D) 电阻低，部分短路"
    ],
    explanationChinese: "无穷大电阻表明喷油器线圈绕组内部断路，意味着没有电流可以通过，喷油器无法打开。正常喷油器电阻因类型而异，通常在2到16欧姆之间。断路的喷油器会导致该缸不工作，必须更换。"
  },
  {
    id: 48,
    q: "An intake manifold vacuum leak will cause all of the following EXCEPT:",
    options: [
      "A) Rough idle",
      "B) A lean DTC",
      "C) Positive fuel trim values",
      "D) High fuel pressure readings"
    ],
    answer: 3,
    explanation: "A vacuum leak introduces unmetered air, causing a lean condition with rough idle, lean DTCs, and positive fuel trims as the PCM adds fuel to compensate. However, a vacuum leak does not affect fuel pressure readings because the fuel pressure regulator operates on fuel rail pressure independent of the leak.",
    diagram: "",
    terms: ["fuel_trim", "dtc", "vacuum_gauge"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=cBzsOD3Yl28",
    youtubeTitle: "Understanding Fuel Trims for Diagnosis",
    qChinese: "进气歧管真空泄漏会导致以下所有症状，除了：",
    optionsChinese: [
      "A) 怠速粗糙",
      "B) 过稀故障码(DTC)",
      "C) 正值燃油修正",
      "D) 燃油压力读数偏高"
    ],
    explanationChinese: "真空泄漏引入未经计量的空气，导致过稀状况，出现怠速粗糙、过稀DTC以及正值燃油修正（PCM增加喷油来补偿）。但真空泄漏不会影响燃油压力读数，因为燃油压力调节器独立于泄漏处工作。"
  },
  {
    id: 49,
    q: "A restricted exhaust system can be confirmed by:",
    options: [
      "A) Checking fuel pressure at idle",
      "B) Measuring exhaust back-pressure with a gauge",
      "C) Testing battery voltage",
      "D) Inspecting the air filter"
    ],
    answer: 1,
    explanation: "An exhaust back-pressure test using a pressure gauge installed in the exhaust before the suspected restriction is the most direct method. Normal back-pressure at 2500 RPM should be below 1.5 psi. Excessive readings confirm a restricted catalytic converter, muffler, or collapsed exhaust pipe.",
    diagram: "",
    terms: ["catalytic_converter", "vacuum_gauge", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lambda_sensor.jpg/640px-Lambda_sensor.jpg",
    youtube: "https://www.youtube.com/watch?v=GmOZvlJ8nxY",
    youtubeTitle: "Catalytic Converter Function and Testing",
    qChinese: "排气系统受阻可通过以下方法确认：",
    optionsChinese: [
      "A) 怠速时检查燃油压力",
      "B) 使用压力表测量排气背压",
      "C) 测试蓄电池电压",
      "D) 检查空气滤清器"
    ],
    explanationChinese: "使用压力表在疑似堵塞处上游安装在排气管上进行排气背压测试是最直接的方法。2500转时正常背压应低于1.5 psi。读数过高确认三元催化器堵塞、消声器堵塞或排气管塌陷。"
  },
  {
    id: 50,
    q: "Technician A says a turbocharger uses exhaust gases to spin a turbine that compresses intake air. Technician B says a wastegate controls maximum boost pressure. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. A turbocharger uses an exhaust-driven turbine connected by a shaft to a compressor wheel that pressurizes intake air. The wastegate is a bypass valve that diverts exhaust gases away from the turbine when boost pressure reaches the desired limit, preventing over-boost damage.",
    diagram: "",
    terms: ["map_sensor", "air_filter", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=kEIO1jjV-GQ",
    youtubeTitle: "MAP Sensor Function and Testing",
    qChinese: "技师A说涡轮增压器利用排气推动涡轮压缩进气。技师B说废气旁通阀控制最大增压压力。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都正确。涡轮增压器使用排气驱动的涡轮通过轴连接的压缩机叶轮来增压进气。废气旁通阀是一个旁通阀，当增压压力达到设定限值时将排气从涡轮旁路引导，防止过度增压损坏。"
  },
  {
    id: 51,
    q: "A catalytic converter efficiency test using a scan tool shows the downstream O2 sensor signal closely mimics the upstream O2 sensor. This indicates:",
    options: [
      "A) A properly functioning catalytic converter",
      "B) A deteriorated or failing catalytic converter",
      "C) A faulty upstream O2 sensor",
      "D) Normal closed-loop fuel control"
    ],
    answer: 1,
    explanation: "When the catalytic converter is working properly, the downstream O2 sensor should show a relatively steady voltage because the converter stores and releases oxygen. If the downstream sensor mimics the upstream switching pattern, the converter is no longer effectively processing exhaust gases.",
    diagram: "",
    terms: ["catalytic_converter", "oxygen_sensor", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lambda_sensor.jpg/640px-Lambda_sensor.jpg",
    youtube: "https://www.youtube.com/watch?v=GmOZvlJ8nxY",
    youtubeTitle: "Catalytic Converter Function and Testing",
    qChinese: "使用诊断仪进行三元催化器效率测试时，下游氧传感器信号与上游氧传感器信号高度相似。这表明：",
    optionsChinese: [
      "A) 三元催化器工作正常",
      "B) 三元催化器劣化或即将失效",
      "C) 上游氧传感器故障",
      "D) 正常闭环燃油控制"
    ],
    explanationChinese: "当三元催化器正常工作时，下游氧传感器应显示相对稳定的电压，因为催化器储存和释放氧气。如果下游传感器模仿上游的切换波形，说明催化器不再有效处理排气。"
  },
  {
    id: 52,
    q: "A returnless fuel system maintains fuel pressure by:",
    options: [
      "A) A mechanical fuel pressure regulator in the engine compartment",
      "B) The PCM controlling fuel pump speed or a regulator at the fuel tank",
      "C) A vacuum-referenced regulator on the fuel rail",
      "D) Gravity feed from an elevated fuel tank"
    ],
    answer: 1,
    explanation: "In a returnless fuel system, fuel pressure is regulated at or near the fuel tank, either by a regulator in the tank module or by the PCM controlling fuel pump voltage and speed through the fuel pump driver module. This eliminates the return line and reduces underhood fuel vapor and temperatures.",
    diagram: "",
    terms: ["pcm", "fuel_injector", "fuel_trim"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=Bfq5Dkf7hYs",
    youtubeTitle: "How Fuel Injectors Work",
    qChinese: "无回油管式燃油系统通过以下方式维持燃油压力：",
    optionsChinese: [
      "A) 发动机舱内的机械式燃油压力调节器",
      "B) PCM控制燃油泵转速或油箱处的调节器",
      "C) 燃油轨上的真空参考调节器",
      "D) 从高位油箱重力供油"
    ],
    explanationChinese: "在无回油管式燃油系统中，燃油压力在油箱处或附近调节，通过油箱模块中的调节器或PCM通过燃油泵驱动模块控制泵电压和转速。这消除了回油管，减少了发动机舱燃油蒸气和温度。"
  },
  {
    id: 53,
    q: "An engine has a whistling noise that increases with RPM and stops when spraying carburetor cleaner on the intake manifold gasket area. The cause is:",
    options: [
      "A) A faulty PCV valve",
      "B) An intake manifold gasket vacuum leak",
      "C) A stuck-open EGR valve",
      "D) A faulty idle air control valve"
    ],
    answer: 1,
    explanation: "A whistling noise from the intake area that changes when sealant or cleaner is sprayed on the gasket surface indicates an intake manifold vacuum leak. The cleaner temporarily seals the leak, changing or stopping the noise. This confirms the gasket as the leak source and the intake manifold gasket should be replaced.",
    diagram: "",
    terms: ["vacuum_gauge", "fuel_trim", "pcv_valve"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=cBzsOD3Yl28",
    youtubeTitle: "Understanding Fuel Trims for Diagnosis",
    qChinese: "发动机在进气歧管垫区域有随转速增加而加剧的啸叫声，喷涂化油器清洗剂后啸叫停止。原因是：",
    optionsChinese: [
      "A) PCV阀故障",
      "B) 进气歧管垫真空泄漏",
      "C) EGR阀卡开",
      "D) 怠速空气控制阀故障"
    ],
    explanationChinese: "进气区域的啸叫声在向垫片表面喷涂清洗剂或密封剂后改变或停止，表明存在进气歧管真空泄漏。清洗剂暂时密封了泄漏处，改变或停止了噪声。这确认垫片是泄漏源，应更换进气歧管垫。"
  },
  {
    id: 54,
    q: "A supercharger differs from a turbocharger in that a supercharger is driven by:",
    options: [
      "A) Exhaust gas pressure",
      "B) An electric motor only",
      "C) A belt connected to the crankshaft",
      "D) Engine oil pressure"
    ],
    answer: 2,
    explanation: "A supercharger is mechanically driven by a belt connected to the engine crankshaft, providing boost proportional to engine RPM with no lag. A turbocharger is driven by exhaust gas flow. The supercharger draws engine power through the belt drive but provides immediate throttle response without turbo lag.",
    diagram: "",
    terms: ["serpentine_belt", "map_sensor", "air_filter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=kEIO1jjV-GQ",
    youtubeTitle: "MAP Sensor Function and Testing",
    qChinese: "机械增压器与涡轮增压器的区别在于机械增压器由以下方式驱动：",
    optionsChinese: [
      "A) 排气压力",
      "B) 仅电动机",
      "C) 与曲轴相连的皮带",
      "D) 发动机机油压力"
    ],
    explanationChinese: "机械增压器通过与发动机曲轴相连的皮带机械驱动，提供与发动机转速成正比的增压且无迟滞。涡轮增压器由排气流驱动。机械增压器通过皮带传动消耗发动机功率，但提供即时油门响应，没有涡轮迟滞。"
  },
  {
    id: 55,
    q: "A port fuel injector is found to be dripping fuel with the engine off and key on. The MOST likely result is:",
    options: [
      "A) A lean condition on that cylinder",
      "B) Fuel washing of the cylinder wall and hard starting",
      "C) Increased fuel economy",
      "D) Higher-than-normal fuel pressure"
    ],
    answer: 1,
    explanation: "A dripping or leaking fuel injector allows raw fuel to enter the cylinder when the engine is off, washing oil from the cylinder wall and pooling in the combustion chamber. This causes hard starting due to a flooded condition, potential hydro-lock risk, and accelerated cylinder wall and ring wear.",
    diagram: "",
    terms: ["fuel_injector", "piston_rings", "fuel_trim"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=Bfq5Dkf7hYs",
    youtubeTitle: "How Fuel Injectors Work",
    qChinese: "进气道喷射的喷油器在发动机关闭、钥匙接通时发现滴油。最可能的结果是：",
    optionsChinese: [
      "A) 该气缸过稀",
      "B) 燃油冲刷缸壁并导致难启动",
      "C) 燃油经济性提高",
      "D) 燃油压力偏高"
    ],
    explanationChinese: "泄漏的喷油器在发动机关闭时让原始燃油进入气缸，冲刷缸壁上的机油并积聚在燃烧室中。这导致由于淹缸而难以启动，存在液压锁定风险，以及加速缸壁和活塞环磨损。"
  },
  {
    id: 56,
    q: "A fuel pump amperage draw test shows 12 amps. The specification is 4–7 amps. This indicates:",
    options: [
      "A) A weak fuel pump",
      "B) A restricted fuel filter or kinked fuel line causing the pump to work harder",
      "C) Normal operation under load",
      "D) A faulty fuel pressure regulator"
    ],
    answer: 1,
    explanation: "Excessive fuel pump amperage indicates the pump motor is working harder than normal, typically due to a restricted fuel filter, kinked fuel line, or mechanical binding within the pump itself. A weak pump would often draw less current. Normal amperage for most electric fuel pumps is between 4 and 7 amps.",
    diagram: "",
    terms: ["dmm", "fuse", "relay"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=Bfq5Dkf7hYs",
    youtubeTitle: "How Fuel Injectors Work",
    qChinese: "燃油泵电流消耗测试显示12安培。规格值为4-7安培。这表明：",
    optionsChinese: [
      "A) 燃油泵衰弱",
      "B) 燃油滤清器堵塞或燃油管路折弯导致泵工作负荷增大",
      "C) 负荷下正常运行",
      "D) 燃油压力调节器故障"
    ],
    explanationChinese: "燃油泵电流消耗过高表明泵电机工作负荷超出正常，通常由燃油滤清器堵塞、燃油管路折弯或泵内部机械卡滞引起。衰弱的泵通常电流消耗较低。大多数电动燃油泵的正常电流在4到7安培之间。"
  },
  {
    id: 57,
    q: "A vehicle with a GDI (gasoline direct injection) system has excessive carbon buildup on the intake valves. This occurs because:",
    options: [
      "A) Fuel pressure is too high",
      "B) Fuel is injected directly into the cylinder and does not wash the intake valves",
      "C) The PCV system is not functioning",
      "D) The air filter is clogged"
    ],
    answer: 1,
    explanation: "In GDI systems, fuel is sprayed directly into the combustion chamber rather than onto the intake valves as in port injection. Without fuel washing over the intake valves, oil vapors from the PCV system and crankcase ventilation accumulate as carbon deposits on the valve backs over time.",
    diagram: "",
    terms: ["fuel_injector", "pcv_valve", "valve_stem_seals"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=Bfq5Dkf7hYs",
    youtubeTitle: "How Fuel Injectors Work",
    qChinese: "配备GDI（缸内直喷）系统的车辆进气门上有大量积碳。这是因为：",
    optionsChinese: [
      "A) 燃油压力过高",
      "B) 燃油直接喷入气缸，不冲洗进气门",
      "C) PCV系统不工作",
      "D) 空气滤清器堵塞"
    ],
    explanationChinese: "在GDI系统中，燃油直接喷入燃烧室而非像进气道喷射那样喷到进气门上。没有燃油冲洗进气门，PCV系统和曲轴箱通风的油蒸气随时间在气门背面积聚形成积碳。"
  },
  {
    id: 58,
    q: "A vehicle fails an emissions test for high NOx. Exhaust back-pressure is normal and the EGR system is functioning. A possible cause is:",
    options: [
      "A) A rich fuel mixture",
      "B) An engine that is running too hot due to a cooling system issue",
      "C) A stuck-open PCV valve",
      "D) A leaking EVAP system"
    ],
    answer: 1,
    explanation: "High NOx emissions result from high combustion temperatures. If the EGR is working and exhaust flow is normal, the engine may be overheating due to a faulty thermostat, low coolant, inoperative cooling fan, or restricted radiator. Elevated temperatures increase nitrogen oxide formation during combustion.",
    diagram: "",
    terms: ["egr_valve", "thermostat", "radiator", "coolant_temperature_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=yx4LkP8yjVQ",
    youtubeTitle: "EGR Valve Function and Diagnosis",
    qChinese: "车辆排放测试NOx偏高。排气背压正常，EGR系统功能正常。可能的原因是：",
    optionsChinese: [
      "A) 混合气过浓",
      "B) 由于冷却系统问题导致发动机过热",
      "C) PCV阀卡开",
      "D) EVAP系统泄漏"
    ],
    explanationChinese: "高NOx排放源于高燃烧温度。如果EGR正常工作且排气流正常，发动机可能因恒温器故障、冷却液不足、冷却风扇不工作或散热器堵塞而过热。温度升高增加了燃烧过程中氮氧化物的生成。"
  },

  // =============================================
  // EMISSIONS CONTROL (Questions 59–74)
  // =============================================
  {
    id: 59,
    q: "The PCV valve is pulled from the valve cover while the engine is idling. A strong vacuum is felt at the PCV valve inlet. This indicates:",
    options: [
      "A) The PCV valve and hose are functioning normally",
      "B) The PCV valve is stuck closed",
      "C) The PCV system is clogged",
      "D) The intake manifold has a vacuum leak"
    ],
    answer: 0,
    explanation: "Feeling strong vacuum at the PCV valve inlet with the engine running at idle confirms the PCV valve and hose are clear and the system is functioning properly. A stuck-closed PCV valve or clogged hose would result in little or no vacuum at the valve inlet, indicating a restriction.",
    diagram: "",
    terms: ["pcv_valve", "vacuum_gauge", "oil_pressure"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=yx4LkP8yjVQ",
    youtubeTitle: "PCV Valve Function and Testing",
    qChinese: "发动机怠速时从气门室盖上拔出PCV阀。在PCV阀入口处感觉到强烈真空。这表明：",
    optionsChinese: [
      "A) PCV阀和软管工作正常",
      "B) PCV阀卡闭",
      "C) PCV系统堵塞",
      "D) 进气歧管有真空泄漏"
    ],
    explanationChinese: "发动机怠速运转时在PCV阀入口处感觉到强烈真空，确认PCV阀和软管畅通，系统工作正常。卡闭的PCV阀或堵塞的软管会导致阀入口处真空很小或没有真空，表明存在堵塞。"
  },
  {
    id: 60,
    q: "A stuck-open EGR valve will cause:",
    options: [
      "A) Increased NOx emissions",
      "B) Rough idle or stalling",
      "C) Higher combustion temperatures",
      "D) Improved fuel economy"
    ],
    answer: 1,
    explanation: "A stuck-open EGR valve allows exhaust gas to recirculate at idle, when EGR flow is not wanted. The inert exhaust gas displaces the fresh air-fuel charge, causing a rough idle, stalling, and poor driveability. EGR should only flow during specific cruise and light load conditions, not at idle.",
    diagram: "",
    terms: ["egr_valve", "pcm", "vacuum_gauge"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=yx4LkP8yjVQ",
    youtubeTitle: "EGR Valve Function and Diagnosis",
    qChinese: "EGR阀卡开会导致：",
    optionsChinese: [
      "A) NOx排放增加",
      "B) 怠速粗糙或熄火",
      "C) 燃烧温度升高",
      "D) 燃油经济性改善"
    ],
    explanationChinese: "EGR阀卡开允许排气在怠速时回流，而怠速时不需要EGR流量。惰性排气取代了新鲜的空燃混合气，导致怠速粗糙、熄火和驾驶性能差。EGR应仅在特定巡航和轻负荷工况下流通，而非怠速时。"
  },
  {
    id: 61,
    q: "Technician A says the EVAP system prevents fuel vapors from escaping to the atmosphere. Technician B says the EVAP canister stores fuel vapors until they can be purged into the engine. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. The EVAP system captures fuel vapors from the fuel tank to prevent hydrocarbon emissions. The charcoal canister adsorbs and stores these vapors. When conditions are right, the PCM opens the purge valve to draw stored vapors into the intake manifold for combustion.",
    diagram: "",
    terms: ["evap_system", "pcm", "dtc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=yx4LkP8yjVQ",
    youtubeTitle: "EVAP System Operation and Testing",
    qChinese: "技师A说EVAP系统防止燃油蒸气逸散到大气中。技师B说EVAP碳罐储存燃油蒸气直到它们可以被清洗进入发动机。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都正确。EVAP系统捕获油箱中的燃油蒸气以防止碳氢化合物排放。活性炭罐吸附并储存这些蒸气。当条件合适时，PCM打开清洗阀将储存的蒸气吸入进气歧管进行燃烧。"
  },
  {
    id: 62,
    q: "A DTC P0440 (EVAP System Malfunction) is set. The FIRST step in diagnosis should be:",
    options: [
      "A) Replace the charcoal canister",
      "B) Replace the purge solenoid",
      "C) Inspect the fuel cap for proper seal and damage",
      "D) Replace the fuel tank pressure sensor"
    ],
    answer: 2,
    explanation: "A P0440 is a general EVAP system malfunction code. The most common and simplest cause is a loose, damaged, or missing fuel cap. Inspecting the fuel cap for damage, proper sealing, and correct tightening is the logical and cost-effective first step before pursuing more complex EVAP system testing.",
    diagram: "",
    terms: ["evap_system", "dtc", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=yx4LkP8yjVQ",
    youtubeTitle: "EVAP System Operation and Testing",
    qChinese: "存储了DTC P0440（EVAP系统故障）。诊断的第一步应该是：",
    optionsChinese: [
      "A) 更换活性炭罐",
      "B) 更换清洗电磁阀",
      "C) 检查油箱盖的密封性和损坏情况",
      "D) 更换油箱压力传感器"
    ],
    explanationChinese: "P0440是EVAP系统一般故障码。最常见且最简单的原因是油箱盖松动、损坏或丢失。检查油箱盖的损坏、密封性和正确拧紧是合理且经济的第一步，然后再进行更复杂的EVAP系统测试。"
  },
  {
    id: 63,
    q: "The secondary air injection (AIR) system pumps air into the exhaust to:",
    options: [
      "A) Increase engine power output",
      "B) Reduce HC and CO by providing oxygen for further oxidation",
      "C) Cool the exhaust system",
      "D) Increase fuel pressure"
    ],
    answer: 1,
    explanation: "The secondary air injection system pumps fresh air into the exhaust manifold or downstream of the exhaust manifold to provide oxygen for oxidizing unburned hydrocarbons (HC) and carbon monoxide (CO). It also helps the catalytic converter reach operating temperature more quickly during cold start conditions.",
    diagram: "",
    terms: ["catalytic_converter", "oxygen_sensor", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lambda_sensor.jpg/640px-Lambda_sensor.jpg",
    youtube: "https://www.youtube.com/watch?v=GmOZvlJ8nxY",
    youtubeTitle: "Catalytic Converter Function and Testing",
    qChinese: "二次空气喷射(AIR)系统向排气中泵入空气是为了：",
    optionsChinese: [
      "A) 增加发动机输出功率",
      "B) 提供氧气进一步氧化以降低HC和CO",
      "C) 冷却排气系统",
      "D) 增加燃油压力"
    ],
    explanationChinese: "二次空气喷射系统向排气歧管或其下游泵入新鲜空气，为未燃碳氢化合物(HC)和一氧化碳(CO)的氧化提供氧气。它还帮助三元催化器在冷启动时更快达到工作温度。"
  },
  {
    id: 64,
    q: "A three-way catalytic converter reduces which three pollutants?",
    options: [
      "A) HC, CO, and NOx",
      "B) CO2, O2, and HC",
      "C) NOx, CO2, and water vapor",
      "D) HC, CO2, and sulfur dioxide"
    ],
    answer: 0,
    explanation: "A three-way catalytic converter uses oxidation and reduction catalysts to convert hydrocarbons (HC), carbon monoxide (CO), and oxides of nitrogen (NOx) into harmless water vapor (H2O), carbon dioxide (CO2), and nitrogen (N2). It requires near-stoichiometric air-fuel ratio for maximum efficiency.",
    diagram: "",
    terms: ["catalytic_converter", "stoichiometric", "oxygen_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lambda_sensor.jpg/640px-Lambda_sensor.jpg",
    youtube: "https://www.youtube.com/watch?v=GmOZvlJ8nxY",
    youtubeTitle: "Catalytic Converter Function and Testing",
    qChinese: "三元催化转化器降低哪三种污染物？",
    optionsChinese: [
      "A) HC、CO和NOx",
      "B) CO2、O2和HC",
      "C) NOx、CO2和水蒸气",
      "D) HC、CO2和二氧化硫"
    ],
    explanationChinese: "三元催化转化器使用氧化和还原催化剂将碳氢化合物(HC)、一氧化碳(CO)和氮氧化物(NOx)转化为无害的水蒸气(H2O)、二氧化碳(CO2)和氮气(N2)。它需要接近理论空燃比才能达到最高效率。"
  },
  {
    id: 65,
    q: "A DTC P0401 (EGR Insufficient Flow) is stored. All of the following could be the cause EXCEPT:",
    options: [
      "A) A clogged EGR passage",
      "B) A faulty EGR valve that does not open",
      "C) A disconnected vacuum hose to the EGR valve",
      "D) A stuck-open purge solenoid"
    ],
    answer: 3,
    explanation: "A P0401 indicates insufficient EGR flow. A clogged EGR passage, faulty EGR valve, or disconnected vacuum hose can all prevent proper EGR flow. A stuck-open purge solenoid is part of the EVAP system and does not affect EGR operation or flow through the EGR passages.",
    diagram: "",
    terms: ["egr_valve", "dtc", "evap_system"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=yx4LkP8yjVQ",
    youtubeTitle: "EGR Valve Function and Diagnosis",
    qChinese: "存储了DTC P0401（EGR流量不足）。以下所有原因都可能导致该故障，除了：",
    optionsChinese: [
      "A) EGR通道堵塞",
      "B) EGR阀故障无法打开",
      "C) EGR阀真空软管脱落",
      "D) 清洗电磁阀卡开"
    ],
    explanationChinese: "P0401表明EGR流量不足。EGR通道堵塞、EGR阀故障或真空软管脱落都可能阻止正常的EGR流通。清洗电磁阀卡开属于EVAP系统部件，不影响EGR的运行或流量。"
  },
  {
    id: 66,
    q: "A PCV valve that is stuck closed will cause:",
    options: [
      "A) Increased crankcase pressure and possible oil leaks",
      "B) A lean air-fuel mixture",
      "C) Reduced crankcase pressure",
      "D) Lower engine oil consumption"
    ],
    answer: 0,
    explanation: "A stuck-closed PCV valve prevents crankcase vapors from being drawn into the intake manifold. Blow-by gases accumulate and increase crankcase pressure, which can push oil past seals and gaskets causing external oil leaks. It may also force oil vapors out through the breather into the air filter housing.",
    diagram: "",
    terms: ["pcv_valve", "oil_pressure", "valve_stem_seals"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=yx4LkP8yjVQ",
    youtubeTitle: "PCV Valve Function and Testing",
    qChinese: "PCV阀卡闭会导致：",
    optionsChinese: [
      "A) 曲轴箱压力增大并可能漏油",
      "B) 混合气过稀",
      "C) 曲轴箱压力降低",
      "D) 发动机机油消耗减少"
    ],
    explanationChinese: "PCV阀卡闭阻止曲轴箱蒸气被吸入进气歧管。窜气积聚增加曲轴箱压力，可能将机油从油封和垫片处挤出造成外部漏油。还可能迫使油蒸气通过通气管进入空气滤清器壳体。"
  },
  {
    id: 67,
    q: "During an EVAP system smoke test, smoke is visible at the fuel filler neck area. The MOST likely cause is:",
    options: [
      "A) A faulty purge valve",
      "B) A cracked or deteriorated fuel filler neck seal or hose",
      "C) A faulty canister vent valve",
      "D) A faulty fuel tank pressure sensor"
    ],
    answer: 1,
    explanation: "A smoke test introduces smoke into the sealed EVAP system under low pressure. Smoke visible at the fuel filler neck indicates a cracked filler neck, deteriorated rubber hose, or damaged seal allowing vapors to escape. This leak would cause EVAP DTCs related to system leaks being detected.",
    diagram: "",
    terms: ["evap_system", "refrigerant_leak_detection", "dtc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=yx4LkP8yjVQ",
    youtubeTitle: "EVAP System Operation and Testing",
    qChinese: "EVAP系统烟雾测试时，在加油口颈部区域可见烟雾。最可能的原因是：",
    optionsChinese: [
      "A) 清洗阀故障",
      "B) 加油口颈部密封件或软管裂纹或老化",
      "C) 碳罐排放阀故障",
      "D) 油箱压力传感器故障"
    ],
    explanationChinese: "烟雾测试在低压下向密封的EVAP系统注入烟雾。在加油口颈部可见烟雾表明颈部裂纹、橡胶软管老化或密封件损坏，允许蒸气逸出。此泄漏会导致与系统泄漏检测相关的EVAP DTC。"
  },
  {
    id: 68,
    q: "The EGR system reduces NOx emissions by:",
    options: [
      "A) Adding fuel to the exhaust",
      "B) Recirculating inert exhaust gas to lower combustion temperatures",
      "C) Increasing the air-fuel ratio",
      "D) Pumping fresh air into the exhaust manifold"
    ],
    answer: 1,
    explanation: "The EGR system recirculates a measured amount of inert exhaust gas back into the intake manifold. This dilutes the incoming air-fuel mixture and absorbs heat, lowering peak combustion chamber temperatures. Since NOx formation increases with temperature, reducing combustion temperatures directly reduces NOx output.",
    diagram: "",
    terms: ["egr_valve", "pcm", "stoichiometric"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=yx4LkP8yjVQ",
    youtubeTitle: "EGR Valve Function and Diagnosis",
    qChinese: "EGR系统通过以下方式降低NOx排放：",
    optionsChinese: [
      "A) 向排气中添加燃油",
      "B) 回流惰性排气以降低燃烧温度",
      "C) 增大空燃比",
      "D) 向排气歧管泵入新鲜空气"
    ],
    explanationChinese: "EGR系统将一定量的惰性排气回流到进气歧管。这稀释了进入的空燃混合气并吸收热量，降低了峰值燃烧室温度。由于NOx的生成随温度增加而增加，降低燃烧温度直接减少NOx排放。"
  },
  {
    id: 69,
    q: "Technician A says a catalytic converter can be damaged by a rich air-fuel mixture. Technician B says engine misfires can overheat and damage a catalytic converter. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. A rich mixture sends excess unburned fuel into the converter, where it oxidizes and generates extreme heat that can melt the catalyst substrate. Engine misfires send unburned air-fuel mixture into the converter with the same overheating result, potentially causing converter failure.",
    diagram: "",
    terms: ["catalytic_converter", "misfire", "fuel_trim"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lambda_sensor.jpg/640px-Lambda_sensor.jpg",
    youtube: "https://www.youtube.com/watch?v=GmOZvlJ8nxY",
    youtubeTitle: "Catalytic Converter Function and Testing",
    qChinese: "技师A说过浓的混合气会损坏三元催化器。技师B说发动机失火会使三元催化器过热并损坏。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都正确。过浓的混合气将过量未燃燃油送入催化器，在那里被氧化产生极高温度，可能熔化催化基体。发动机失火将未燃的空燃混合气送入催化器产生同样的过热结果，可能导致催化器失效。"
  },
  {
    id: 70,
    q: "A DTC P0420 (Catalyst System Efficiency Below Threshold Bank 1) can be caused by all of the following EXCEPT:",
    options: [
      "A) A deteriorated catalytic converter",
      "B) An exhaust leak before the downstream O2 sensor",
      "C) A faulty downstream oxygen sensor",
      "D) A clogged air filter"
    ],
    answer: 3,
    explanation: "A P0420 indicates reduced catalytic converter efficiency. A deteriorated converter, exhaust leak affecting O2 sensor readings, or a faulty downstream sensor can all trigger this code. A clogged air filter restricts airflow but does not directly cause the downstream O2 sensor to indicate poor converter efficiency.",
    diagram: "",
    terms: ["catalytic_converter", "oxygen_sensor", "dtc", "air_filter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lambda_sensor.jpg/640px-Lambda_sensor.jpg",
    youtube: "https://www.youtube.com/watch?v=GmOZvlJ8nxY",
    youtubeTitle: "Catalytic Converter Function and Testing",
    qChinese: "DTC P0420（催化器系统效率低于阈值 Bank 1）可由以下所有原因引起，除了：",
    optionsChinese: [
      "A) 三元催化器劣化",
      "B) 下游氧传感器前方排气泄漏",
      "C) 下游氧传感器故障",
      "D) 空气滤清器堵塞"
    ],
    explanationChinese: "P0420表明三元催化器效率降低。催化器劣化、影响氧传感器读数的排气泄漏或下游传感器故障都可能触发该故障码。空气滤清器堵塞限制气流，但不会直接导致下游氧传感器指示催化器效率差。"
  },
  {
    id: 71,
    q: "The EVAP canister vent valve is normally:",
    options: [
      "A) Closed and opens only during purge",
      "B) Open and closes during leak testing",
      "C) Controlled by fuel tank pressure only",
      "D) Electrically connected to the fuel pump relay"
    ],
    answer: 1,
    explanation: "The EVAP canister vent valve is normally open, allowing the canister to breathe through a fresh air filter. During EVAP leak testing, the PCM commands the vent valve closed to seal the system and monitor pressure changes. During normal purge operation, the vent valve remains open while the purge valve opens.",
    diagram: "",
    terms: ["evap_system", "pcm", "dtc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=yx4LkP8yjVQ",
    youtubeTitle: "EVAP System Operation and Testing",
    qChinese: "EVAP碳罐排放阀通常是：",
    optionsChinese: [
      "A) 关闭的，仅在清洗时打开",
      "B) 打开的，在泄漏测试时关闭",
      "C) 仅由油箱压力控制",
      "D) 与燃油泵继电器电气相连"
    ],
    explanationChinese: "EVAP碳罐排放阀通常处于打开状态，允许碳罐通过空气滤清器呼吸。在EVAP泄漏测试期间，PCM命令排放阀关闭以密封系统并监测压力变化。在正常清洗操作期间，排放阀保持打开，清洗阀打开。"
  },
  {
    id: 72,
    q: "High HC emissions at idle are MOST commonly caused by:",
    options: [
      "A) A lean air-fuel mixture",
      "B) Engine misfire or incomplete combustion",
      "C) Excessive EGR flow",
      "D) Overadvanced ignition timing"
    ],
    answer: 1,
    explanation: "High hydrocarbon (HC) emissions indicate unburned or partially burned fuel exiting the exhaust. At idle, this is most commonly caused by engine misfire from faulty spark plugs, ignition components, or fuel delivery problems that prevent complete combustion. Worn engine components can also contribute.",
    diagram: "",
    terms: ["misfire", "spark_plug", "ignition_coil", "catalytic_converter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Diagnosing Engine Misfires",
    qChinese: "怠速时HC排放偏高，最常见的原因是：",
    optionsChinese: [
      "A) 混合气过稀",
      "B) 发动机失火或燃烧不完全",
      "C) EGR流量过大",
      "D) 点火正时过度提前"
    ],
    explanationChinese: "高碳氢化合物(HC)排放表明未燃或不完全燃烧的燃油从排气排出。在怠速时，这最常见的原因是由火花塞故障、点火部件故障或燃油供给问题导致的发动机失火，阻止了完全燃烧。磨损的发动机部件也可能导致。"
  },
  {
    id: 73,
    q: "A secondary air injection pump is running but no air is entering the exhaust manifold. The MOST likely cause is:",
    options: [
      "A) A faulty pump motor",
      "B) A stuck-closed check valve or air switching valve",
      "C) A clogged air filter",
      "D) A faulty PCM"
    ],
    answer: 1,
    explanation: "If the pump is running but air is not reaching the exhaust manifold, a stuck-closed check valve or air switching valve is preventing air delivery. The check valve prevents exhaust gas from entering the pump, and the switching valve directs airflow. Either component stuck closed blocks air to the exhaust.",
    diagram: "",
    terms: ["catalytic_converter", "oxygen_sensor", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lambda_sensor.jpg/640px-Lambda_sensor.jpg",
    youtube: "https://www.youtube.com/watch?v=GmOZvlJ8nxY",
    youtubeTitle: "Catalytic Converter Function and Testing",
    qChinese: "二次空气喷射泵在运转但没有空气进入排气歧管。最可能的原因是：",
    optionsChinese: [
      "A) 泵电机故障",
      "B) 单向阀或空气切换阀卡闭",
      "C) 空气滤清器堵塞",
      "D) PCM故障"
    ],
    explanationChinese: "如果泵在运转但空气没有到达排气歧管，说明单向阀或空气切换阀卡闭阻止了空气输送。单向阀防止排气进入泵，切换阀引导气流方向。任一部件卡闭都会阻断空气到达排气系统。"
  },
  {
    id: 74,
    q: "A vehicle has high CO emissions. This is MOST likely caused by:",
    options: [
      "A) A lean air-fuel mixture",
      "B) A rich air-fuel mixture",
      "C) Excessive EGR flow",
      "D) A stuck-open secondary air injection valve"
    ],
    answer: 1,
    explanation: "High carbon monoxide (CO) emissions indicate an overly rich air-fuel mixture where there is insufficient oxygen for complete combustion. Causes include high fuel pressure, leaking injectors, a faulty O2 sensor, or a contaminated MAF sensor. A lean mixture would cause high HC and NOx instead.",
    diagram: "",
    terms: ["fuel_trim", "oxygen_sensor", "maf_sensor", "fuel_injector"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=cBzsOD3Yl28",
    youtubeTitle: "Understanding Fuel Trims for Diagnosis",
    qChinese: "车辆CO排放偏高。最可能的原因是：",
    optionsChinese: [
      "A) 混合气过稀",
      "B) 混合气过浓",
      "C) EGR流量过大",
      "D) 二次空气喷射阀卡开"
    ],
    explanationChinese: "高一氧化碳(CO)排放表明混合气过浓，缺乏足够的氧气进行完全燃烧。原因包括燃油压力偏高、喷油器泄漏、氧传感器故障或空气流量传感器受污染。过稀的混合气会导致HC和NOx偏高。"
  },

  // =============================================
  // COMPUTERIZED ENGINE CONTROLS (Questions 75–100)
  // =============================================
  {
    id: 75,
    q: "An OBD II system is required to illuminate the MIL (check engine light) when:",
    options: [
      "A) Any sensor reads out of range",
      "B) A DTC is set that indicates an emissions-related fault",
      "C) The engine oil pressure is low",
      "D) The coolant temperature exceeds normal"
    ],
    answer: 1,
    explanation: "The MIL is required to illuminate when the OBD II system detects an emissions-related fault that could cause the vehicle to exceed 1.5 times the applicable emissions standard. The DTC is stored in the PCM memory and the MIL alerts the driver that service is needed for an emissions concern.",
    diagram: "",
    terms: ["obd2", "dtc", "pcm", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "OBD II系统在以下情况下需要点亮MIL（发动机故障指示灯）：",
    optionsChinese: [
      "A) 任何传感器读数超出范围",
      "B) 设置了表明排放相关故障的DTC",
      "C) 发动机机油压力低",
      "D) 冷却液温度超出正常范围"
    ],
    explanationChinese: "当OBD II系统检测到可能导致车辆超过适用排放标准1.5倍的排放相关故障时，MIL必须点亮。DTC存储在PCM存储器中，MIL提醒驾驶员需要针对排放问题进行维修。"
  },
  {
    id: 76,
    q: "How many OBD II monitors must be ready (complete) for a 1996 and newer vehicle to pass an OBD II emissions inspection in most states?",
    options: [
      "A) All monitors must be ready",
      "B) All monitors except one non-continuous monitor may be not ready",
      "C) Only the continuous monitors must be ready",
      "D) No monitors need to be ready as long as the MIL is off"
    ],
    answer: 1,
    explanation: "Most states allow one non-continuous monitor to be not ready for 1996–2000 vehicles and one for 2001+ vehicles. However, continuous monitors (misfire, fuel system, comprehensive components) must always be ready. If too many monitors are incomplete, the vehicle fails the inspection and a drive cycle must be completed.",
    diagram: "",
    terms: ["obd2", "scan_tool", "dtc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "在大多数州，1996年及更新的车辆通过OBD II排放检测需要多少个监测器就绪（完成）？",
    optionsChinese: [
      "A) 所有监测器必须就绪",
      "B) 除一个非连续监测器外所有监测器必须就绪",
      "C) 仅连续监测器必须就绪",
      "D) 只要MIL关闭就不需要任何监测器就绪"
    ],
    explanationChinese: "大多数州允许1996-2000年车辆一个非连续监测器未就绪，2001年及以后车辆也允许一个。但连续监测器（失火、燃油系统、综合部件）必须始终就绪。如果太多监测器未完成，车辆将无法通过检测，需要完成行驶循环。"
  },
  {
    id: 77,
    q: "A DTC P0171 (System Too Lean Bank 1) is stored. All of the following could cause this code EXCEPT:",
    options: [
      "A) A vacuum leak on bank 1",
      "B) A dirty MAF sensor reading low",
      "C) Low fuel pressure",
      "D) A stuck-open fuel injector on bank 1"
    ],
    answer: 3,
    explanation: "A P0171 indicates a lean condition on bank 1. Vacuum leaks, a dirty MAF sensor reading low airflow, and low fuel pressure all cause lean conditions. A stuck-open fuel injector would deliver excess fuel to that cylinder, causing a rich condition rather than a lean one, so it would not trigger P0171.",
    diagram: "",
    terms: ["dtc", "fuel_trim", "maf_sensor", "fuel_injector"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=cBzsOD3Yl28",
    youtubeTitle: "Understanding Fuel Trims for Diagnosis",
    qChinese: "存储了DTC P0171（系统过稀 Bank 1）。以下所有原因都可能导致该故障码，除了：",
    optionsChinese: [
      "A) Bank 1侧真空泄漏",
      "B) 空气流量传感器脏污读数偏低",
      "C) 燃油压力低",
      "D) Bank 1侧喷油器卡开"
    ],
    explanationChinese: "P0171表明Bank 1过稀状况。真空泄漏、MAF传感器脏污读数偏低和燃油压力低都会导致过稀。喷油器卡开会向该气缸输送过多燃油，导致过浓而非过稀，因此不会触发P0171。"
  },
  {
    id: 78,
    q: "Freeze frame data is MOST useful for:",
    options: [
      "A) Clearing stored DTCs",
      "B) Reprogramming the PCM",
      "C) Replicating the operating conditions when the DTC was set",
      "D) Testing individual actuators"
    ],
    answer: 2,
    explanation: "Freeze frame data records a snapshot of key engine parameters at the moment a DTC was stored. This information allows the technician to understand what conditions the engine was operating under when the fault occurred, helping to replicate those conditions during diagnosis and verification of the repair.",
    diagram: "",
    terms: ["scan_tool", "dtc", "obd2", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "冻结帧数据最适合用于：",
    optionsChinese: [
      "A) 清除已存储的DTC",
      "B) 重新编程PCM",
      "C) 重现DTC设置时的工作条件",
      "D) 测试各执行器"
    ],
    explanationChinese: "冻结帧数据记录了DTC存储时关键发动机参数的快照。该信息使技师能够了解故障发生时发动机的工作条件，帮助在诊断和维修验证期间重现这些条件。"
  },
  {
    id: 79,
    q: "Technician A says clearing DTCs also resets all OBD II monitor status to not ready. Technician B says after clearing DTCs a drive cycle must be performed to reset the monitors. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. When DTCs are cleared with a scan tool, all OBD II monitor readiness flags are reset to not ready. The vehicle must then be driven through the appropriate drive cycle conditions so each monitor can run its self-test and return to a ready status.",
    diagram: "",
    terms: ["dtc", "obd2", "scan_tool", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "技师A说清除DTC也会将所有OBD II监测器状态重置为未就绪。技师B说清除DTC后必须执行行驶循环以重置监测器。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都正确。使用诊断仪清除DTC时，所有OBD II监测器就绪标志会重置为未就绪。然后车辆必须在适当的行驶循环条件下行驶，以便每个监测器运行自检并恢复就绪状态。"
  },
  {
    id: 80,
    q: "The MIL flashes on and off while driving. This indicates:",
    options: [
      "A) A pending DTC that has not been confirmed",
      "B) A severe misfire that could damage the catalytic converter",
      "C) The OBD II system is performing a self-test",
      "D) A minor emissions fault"
    ],
    answer: 1,
    explanation: "A flashing MIL indicates a severe engine misfire that can cause catalytic converter overheating and damage. Unburned fuel entering the converter is oxidized, generating extreme heat. The driver should reduce speed and load immediately and have the vehicle diagnosed as soon as possible to prevent converter failure.",
    diagram: "",
    terms: ["misfire", "catalytic_converter", "obd2", "dtc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Diagnosing Engine Misfires",
    qChinese: "行驶中MIL灯闪烁。这表明：",
    optionsChinese: [
      "A) 尚未确认的待定DTC",
      "B) 可能损坏三元催化器的严重失火",
      "C) OBD II系统正在执行自检",
      "D) 轻微排放故障"
    ],
    explanationChinese: "MIL闪烁表明发生严重的发动机失火，可能导致三元催化器过热和损坏。未燃燃油进入催化器被氧化，产生极高温度。驾驶员应立即降低车速和负荷，并尽快进行诊断以防止催化器失效。"
  },
  {
    id: 81,
    q: "The PCM receives input from all of the following sensors EXCEPT:",
    options: [
      "A) Engine coolant temperature sensor",
      "B) Fuel injectors",
      "C) Throttle position sensor",
      "D) Oxygen sensor"
    ],
    answer: 1,
    explanation: "Fuel injectors are output devices (actuators) controlled by the PCM, not input sensors. The ECT, TPS, and O2 sensors are all input devices that send voltage signals to the PCM. The PCM uses input data to make calculations and control output actuators such as injectors, coils, and solenoids.",
    diagram: "",
    terms: ["pcm", "fuel_injector", "coolant_temperature_sensor", "throttle_position_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=Bfq5Dkf7hYs",
    youtubeTitle: "How Fuel Injectors Work",
    qChinese: "PCM接收以下所有传感器的输入信号，除了：",
    optionsChinese: [
      "A) 发动机冷却液温度传感器",
      "B) 喷油器",
      "C) 节气门位置传感器",
      "D) 氧传感器"
    ],
    explanationChinese: "喷油器是由PCM控制的输出装置（执行器），而非输入传感器。ECT、TPS和氧传感器都是向PCM发送电压信号的输入装置。PCM使用输入数据进行计算并控制喷油器、线圈和电磁阀等输出执行器。"
  },
  {
    id: 82,
    q: "An oxygen sensor switches voltage between 0.1V and 0.9V as the air-fuel mixture changes from lean to rich. How many cross-counts per second indicates a normally functioning O2 sensor?",
    options: [
      "A) 0–1 cross-counts",
      "B) 2–5 cross-counts",
      "C) 6–10 cross-counts",
      "D) More than 20 cross-counts"
    ],
    answer: 2,
    explanation: "A properly functioning conventional zirconia oxygen sensor should produce approximately 6–10 cross-counts per 10 seconds at 2500 RPM, switching between rich and lean. Fewer cross-counts indicate a lazy or slow-responding sensor. This switching speed is essential for proper closed-loop fuel control by the PCM.",
    diagram: "",
    terms: ["oxygen_sensor", "pcm", "fuel_trim"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lambda_sensor.jpg/640px-Lambda_sensor.jpg",
    youtube: "https://www.youtube.com/watch?v=GmOZvlJ8nxY",
    youtubeTitle: "Oxygen Sensor Operation and Diagnosis",
    qChinese: "氧传感器在0.1V和0.9V之间切换，随空燃比从稀到浓变化。每秒多少次穿越计数表明氧传感器工作正常？",
    optionsChinese: [
      "A) 0-1次穿越计数",
      "B) 2-5次穿越计数",
      "C) 6-10次穿越计数",
      "D) 超过20次穿越计数"
    ],
    explanationChinese: "正常工作的传统氧化锆氧传感器在2500转时应每10秒产生约6-10次穿越计数，在浓和稀之间切换。穿越计数较少表明传感器响应迟缓。这种切换速度对PCM正确进行闭环燃油控制至关重要。"
  },
  {
    id: 83,
    q: "A wideband (air-fuel ratio) oxygen sensor differs from a conventional O2 sensor in that it:",
    options: [
      "A) Only measures rich conditions",
      "B) Provides a precise air-fuel ratio reading across a wide range, not just rich or lean switching",
      "C) Does not require a heater circuit",
      "D) Only works at cold engine temperatures"
    ],
    answer: 1,
    explanation: "A wideband air-fuel ratio sensor provides a linear voltage or current signal proportional to the exact air-fuel ratio, unlike a conventional O2 sensor that only switches between rich and lean. This allows the PCM to make more precise fuel adjustments and achieve better emissions control and fuel economy.",
    diagram: "",
    terms: ["oxygen_sensor", "stoichiometric", "pcm", "fuel_trim"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lambda_sensor.jpg/640px-Lambda_sensor.jpg",
    youtube: "https://www.youtube.com/watch?v=GmOZvlJ8nxY",
    youtubeTitle: "Oxygen Sensor Operation and Diagnosis",
    qChinese: "宽带（空燃比）氧传感器与传统氧传感器的区别在于它：",
    optionsChinese: [
      "A) 仅测量过浓状况",
      "B) 在宽范围内提供精确的空燃比读数，而不仅是浓稀切换",
      "C) 不需要加热电路",
      "D) 仅在发动机冷态时工作"
    ],
    explanationChinese: "宽带空燃比传感器提供与精确空燃比成正比的线性电压或电流信号，不像传统氧传感器仅在浓和稀之间切换。这使PCM能进行更精确的燃油调整，实现更好的排放控制和燃油经济性。"
  },
  {
    id: 84,
    q: "The MAF sensor on a hot-wire type measures airflow by:",
    options: [
      "A) Counting the number of air vane deflections",
      "B) Measuring the current needed to keep a heated wire at a constant temperature as air flows past it",
      "C) Monitoring air pressure changes in the intake manifold",
      "D) Using ultrasonic pulses to measure air velocity"
    ],
    answer: 1,
    explanation: "A hot-wire MAF sensor maintains a heated wire or film element at a constant temperature above ambient. As airflow increases, more current is needed to maintain the temperature. The PCM interprets this current draw or resulting voltage change as a direct measure of the mass of air entering the engine.",
    diagram: "",
    terms: ["maf_sensor", "pcm", "fuel_injector"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=cBzsOD3Yl28",
    youtubeTitle: "MAF Sensor Testing and Cleaning",
    qChinese: "热线式空气流量传感器通过以下方式测量气流量：",
    optionsChinese: [
      "A) 计算空气翼板偏转次数",
      "B) 测量在空气流过时保持加热丝恒温所需的电流",
      "C) 监测进气歧管内的气压变化",
      "D) 使用超声波脉冲测量空气速度"
    ],
    explanationChinese: "热线式MAF传感器将加热丝或薄膜元件保持在高于环境温度的恒定温度。随着气流增加，需要更多电流来维持温度。PCM将该电流消耗或由此产生的电压变化解读为进入发动机的空气质量的直接测量。"
  },
  {
    id: 85,
    q: "A MAP sensor output voltage of approximately 4.5V with the engine off and the key on indicates:",
    options: [
      "A) A faulty MAP sensor",
      "B) Normal atmospheric pressure reading",
      "C) High intake manifold vacuum",
      "D) A shorted MAP sensor signal wire"
    ],
    answer: 1,
    explanation: "With the engine off and key on, the MAP sensor reads atmospheric pressure (barometric pressure). A reading of approximately 4.5V is normal for sea level conditions. When the engine starts, vacuum is applied and the voltage drops. This key-on, engine-off reading serves as a built-in BARO reference.",
    diagram: "",
    terms: ["map_sensor", "pcm", "dmm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=kEIO1jjV-GQ",
    youtubeTitle: "MAP Sensor Function and Testing",
    qChinese: "发动机关闭、钥匙接通时MAP传感器输出电压约4.5V表明：",
    optionsChinese: [
      "A) MAP传感器故障",
      "B) 正常大气压读数",
      "C) 进气歧管真空度高",
      "D) MAP传感器信号线短路"
    ],
    explanationChinese: "发动机关闭、钥匙接通时，MAP传感器读取大气压力（气压计压力）。海平面条件下约4.5V的读数是正常的。发动机启动后产生真空，电压下降。这个钥匙接通、发动机关闭的读数作为内置的BARO参考。"
  },
  {
    id: 86,
    q: "A TPS voltage reading of 0.2V at closed throttle and 4.5V at wide-open throttle indicates:",
    options: [
      "A) A faulty throttle position sensor",
      "B) Normal TPS operation",
      "C) A short in the TPS signal circuit",
      "D) An open in the TPS ground circuit"
    ],
    answer: 1,
    explanation: "A TPS reading of approximately 0.2–0.8V at closed throttle and 4.5V at wide-open throttle is within the normal range for most vehicles. The voltage should increase smoothly and proportionally as the throttle opens. Any dead spots, dropouts, or erratic readings during sweep would indicate a faulty sensor.",
    diagram: "",
    terms: ["throttle_position_sensor", "pcm", "dmm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=Bfq5Dkf7hYs",
    youtubeTitle: "Throttle Body and TPS Explained",
    qChinese: "节气门关闭时TPS电压读数为0.2V，全开时为4.5V表明：",
    optionsChinese: [
      "A) 节气门位置传感器故障",
      "B) TPS工作正常",
      "C) TPS信号电路短路",
      "D) TPS接地电路断路"
    ],
    explanationChinese: "节气门关闭时约0.2-0.8V，全开时4.5V的TPS读数在大多数车辆的正常范围内。电压应随节气门开度平滑且成比例地增加。扫描过程中出现任何死区、信号丢失或不稳定读数都表明传感器故障。"
  },
  {
    id: 87,
    q: "The engine coolant temperature (ECT) sensor is a negative temperature coefficient (NTC) thermistor. This means its resistance:",
    options: [
      "A) Increases as temperature increases",
      "B) Decreases as temperature increases",
      "C) Remains constant regardless of temperature",
      "D) Only changes above 200°F"
    ],
    answer: 1,
    explanation: "A negative temperature coefficient thermistor has resistance that decreases as temperature rises. When the engine is cold, ECT resistance is high and signal voltage is high. As the engine warms, resistance drops and voltage decreases. The PCM uses this voltage change to determine engine temperature for fuel and timing corrections.",
    diagram: "",
    terms: ["coolant_temperature_sensor", "ohms_law", "pcm", "dmm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "发动机冷却液温度(ECT)传感器是负温度系数(NTC)热敏电阻。这意味着其电阻：",
    optionsChinese: [
      "A) 随温度升高而增大",
      "B) 随温度升高而降低",
      "C) 不随温度变化保持恒定",
      "D) 仅在200°F以上才变化"
    ],
    explanationChinese: "负温度系数热敏电阻的电阻随温度升高而降低。发动机冷态时ECT电阻高、信号电压高。发动机暖机后电阻降低、电压降低。PCM利用该电压变化确定发动机温度，进行燃油和正时修正。"
  },
  {
    id: 88,
    q: "The IAT sensor reads -40°F when unplugged. Technician A says the PCM will default to a preprogrammed value. Technician B says this will cause the PCM to deliver more fuel than needed. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. When the IAT sensor is unplugged, the PCM detects an out-of-range signal and typically defaults to a fixed value. Since the PCM may interpret the signal as extremely cold air (high density), it enriches the mixture more than necessary, causing a rich condition.",
    diagram: "",
    terms: ["pcm", "fuel_trim", "dtc", "dmm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=cBzsOD3Yl28",
    youtubeTitle: "Understanding Fuel Trims for Diagnosis",
    qChinese: "拔掉IAT传感器插头后读数为-40°F。技师A说PCM会默认使用预编程值。技师B说这会导致PCM供油过多。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都正确。当IAT传感器拔掉后，PCM检测到超出范围的信号，通常默认使用固定值。由于PCM可能将信号解读为极冷空气（高密度），会比实际需要多加浓混合气，导致过浓状况。"
  },
  {
    id: 89,
    q: "A DTC P0300 indicates:",
    options: [
      "A) Misfire detected on cylinder #3",
      "B) Random or multiple cylinder misfire detected",
      "C) Oxygen sensor circuit malfunction",
      "D) Catalyst efficiency below threshold"
    ],
    answer: 1,
    explanation: "DTC P0300 indicates a random or multiple cylinder misfire. The last two digits 00 mean the misfire is not isolated to one specific cylinder. Cylinder-specific misfire codes are P0301 through P0312, where the last digit identifies the cylinder number. P0300 suggests a systemic issue affecting multiple cylinders.",
    diagram: "",
    terms: ["misfire", "dtc", "scan_tool", "crankshaft_position_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Diagnosing Engine Misfires",
    qChinese: "DTC P0300表明：",
    optionsChinese: [
      "A) 3号气缸检测到失火",
      "B) 检测到随机或多缸失火",
      "C) 氧传感器电路故障",
      "D) 催化器效率低于阈值"
    ],
    explanationChinese: "DTC P0300表明随机或多缸失火。最后两位数字00意味着失火不局限于某一特定气缸。特定气缸失火码为P0301到P0312，最后一位数字标识气缸号。P0300提示影响多个气缸的系统性问题。"
  },
  {
    id: 90,
    q: "Technician A says the PCM uses the CKP sensor to determine engine speed. Technician B says the PCM uses the CKP sensor to detect misfires. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. The CKP sensor generates pulses as the crankshaft rotates, allowing the PCM to calculate engine RPM. The PCM also monitors slight variations in crankshaft acceleration between power strokes. A misfire causes a detectable deceleration when the affected cylinder fails to produce power.",
    diagram: "",
    terms: ["crankshaft_position_sensor", "pcm", "misfire"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "技师A说PCM使用CKP传感器确定发动机转速。技师B说PCM使用CKP传感器检测失火。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都正确。CKP传感器在曲轴旋转时产生脉冲，使PCM能计算发动机转速。PCM还监测各动力冲程之间曲轴加速度的微小变化。失火会在受影响气缸未产生动力时导致可检测的减速。"
  },
  {
    id: 91,
    q: "A vehicle has DTC P0128 (Coolant Thermostat Below Thermostat Regulating Temperature). The MOST likely cause is:",
    options: [
      "A) An overheating engine",
      "B) A thermostat stuck open",
      "C) A faulty fuel pump",
      "D) A clogged catalytic converter"
    ],
    answer: 1,
    explanation: "DTC P0128 sets when the PCM determines the engine is not reaching expected operating temperature within a specified time. A thermostat stuck open allows coolant to circulate through the radiator constantly, preventing the engine from warming up properly. This affects emissions, fuel economy, and heater performance.",
    diagram: "",
    terms: ["thermostat", "coolant_temperature_sensor", "dtc", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "车辆有DTC P0128（冷却液恒温器低于恒温器调节温度）。最可能的原因是：",
    optionsChinese: [
      "A) 发动机过热",
      "B) 恒温器卡开",
      "C) 燃油泵故障",
      "D) 三元催化器堵塞"
    ],
    explanationChinese: "DTC P0128在PCM判断发动机在规定时间内未达到预期工作温度时设置。恒温器卡开允许冷却液持续通过散热器循环，阻止发动机正常暖机。这影响排放、燃油经济性和暖风性能。"
  },
  {
    id: 92,
    q: "The CAN (Controller Area Network) data bus is used to:",
    options: [
      "A) Charge the vehicle battery",
      "B) Allow multiple control modules to communicate and share data",
      "C) Power the fuel injectors",
      "D) Drive the electric cooling fans"
    ],
    answer: 1,
    explanation: "The CAN bus is a serial communication network that allows multiple electronic control modules to share sensor data and coordinate functions. This reduces the number of individual sensors and wiring needed, as one sensor signal can be shared among many modules over the two-wire twisted-pair bus.",
    diagram: "",
    terms: ["can_bus", "pcm", "wiring_diagram"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "CAN（控制器局域网络）数据总线用于：",
    optionsChinese: [
      "A) 为车辆蓄电池充电",
      "B) 允许多个控制模块通信和共享数据",
      "C) 为喷油器供电",
      "D) 驱动电子冷却风扇"
    ],
    explanationChinese: "CAN总线是一种串行通信网络，允许多个电子控制模块共享传感器数据和协调功能。这减少了所需的单独传感器和线束数量，因为一个传感器信号可以通过双绞线总线在多个模块之间共享。"
  },
  {
    id: 93,
    q: "A scan tool cannot communicate with the PCM through the DLC. All other modules communicate normally. The MOST likely cause is:",
    options: [
      "A) A blown fuse for the DLC",
      "B) A faulty PCM or PCM communication circuit",
      "C) An open CAN bus high wire",
      "D) A missing DLC ground pin"
    ],
    answer: 1,
    explanation: "If the scan tool communicates with other modules but not the PCM, the CAN bus itself is functional. The problem is isolated to the PCM or its specific communication circuit. A blown DLC fuse or CAN bus fault would affect communication with all modules, not just the PCM.",
    diagram: "",
    terms: ["pcm", "can_bus", "scan_tool", "wiring_diagram"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "诊断仪无法通过DLC与PCM通信。其他所有模块通信正常。最可能的原因是：",
    optionsChinese: [
      "A) DLC保险丝烧断",
      "B) PCM故障或PCM通信电路故障",
      "C) CAN总线高压线断路",
      "D) DLC接地脚缺失"
    ],
    explanationChinese: "如果诊断仪能与其他模块通信但不能与PCM通信，说明CAN总线本身功能正常。问题仅限于PCM或其特定通信电路。DLC保险丝烧断或CAN总线故障会影响与所有模块的通信，而非仅PCM。"
  },
  {
    id: 94,
    q: "An upstream O2 sensor is stuck at 0.1V. The engine will run:",
    options: [
      "A) Rich because the PCM thinks the mixture is lean and keeps adding fuel",
      "B) Lean because the PCM reduces fuel delivery",
      "C) At the correct air-fuel ratio",
      "D) In open loop only at idle"
    ],
    answer: 0,
    explanation: "A 0.1V O2 sensor reading indicates a lean exhaust to the PCM. In response, the PCM continuously adds fuel to richen the mixture. Since the stuck sensor never reports a rich condition, the PCM keeps adding fuel, causing the engine to run excessively rich with high fuel consumption and black smoke.",
    diagram: "",
    terms: ["oxygen_sensor", "fuel_trim", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lambda_sensor.jpg/640px-Lambda_sensor.jpg",
    youtube: "https://www.youtube.com/watch?v=GmOZvlJ8nxY",
    youtubeTitle: "Oxygen Sensor Operation and Diagnosis",
    qChinese: "上游氧传感器固定在0.1V。发动机将运行：",
    optionsChinese: [
      "A) 过浓，因为PCM认为混合气过稀并持续加油",
      "B) 过稀，因为PCM减少供油",
      "C) 空燃比正确",
      "D) 仅在怠速时以开环模式运行"
    ],
    explanationChinese: "0.1V的氧传感器读数向PCM指示排气过稀。PCM持续增加喷油以加浓混合气。由于传感器卡死永远不会报告过浓状况，PCM持续加油，导致发动机运行严重过浓，油耗增高并冒黑烟。"
  },
  {
    id: 95,
    q: "Which OBD II monitor is classified as a continuous monitor?",
    options: [
      "A) Catalyst efficiency monitor",
      "B) EVAP system monitor",
      "C) Misfire monitor",
      "D) EGR system monitor"
    ],
    answer: 2,
    explanation: "The three continuous monitors are the misfire monitor, fuel system monitor, and comprehensive component monitor. These run constantly whenever the engine is operating. Non-continuous monitors, such as catalyst, EVAP, EGR, O2 sensor, and secondary air, run only when specific driving conditions are met.",
    diagram: "",
    terms: ["obd2", "misfire", "dtc", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "以下哪个OBD II监测器被归类为连续监测器？",
    optionsChinese: [
      "A) 催化器效率监测器",
      "B) EVAP系统监测器",
      "C) 失火监测器",
      "D) EGR系统监测器"
    ],
    explanationChinese: "三个连续监测器是失火监测器、燃油系统监测器和综合部件监测器。这些监测器在发动机运行时持续运行。非连续监测器（如催化器、EVAP、EGR、氧传感器和二次空气）仅在满足特定行驶条件时运行。"
  },
  {
    id: 96,
    q: "A pending DTC is stored in the PCM. This means:",
    options: [
      "A) The fault has been confirmed and the MIL is on",
      "B) A fault was detected on one trip but has not yet been confirmed on a second trip",
      "C) The DTC was cleared by the technician",
      "D) The vehicle has passed all OBD II monitors"
    ],
    answer: 1,
    explanation: "A pending DTC means the PCM detected a potential fault during one drive cycle but requires a second consecutive trip with the fault present to confirm the code and illuminate the MIL. Pending codes are useful for diagnosing intermittent faults before they become confirmed stored codes.",
    diagram: "",
    terms: ["dtc", "pcm", "obd2", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "PCM中存储了待定DTC。这意味着：",
    optionsChinese: [
      "A) 故障已确认，MIL已点亮",
      "B) 在一次行程中检测到故障，但尚未在第二次行程中确认",
      "C) DTC已被技师清除",
      "D) 车辆已通过所有OBD II监测器"
    ],
    explanationChinese: "待定DTC意味着PCM在一个行驶循环中检测到潜在故障，但需要在第二个连续行程中再次出现故障才能确认故障码并点亮MIL。待定码对于在成为确认存储码之前诊断间歇性故障很有用。"
  },
  {
    id: 97,
    q: "Technician A says the PCM controls the idle air control (IAC) valve to maintain target idle speed. Technician B says an electronic throttle body can control idle speed without a separate IAC valve. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. On older systems, the PCM uses an IAC valve to bypass air around the throttle plate to control idle speed. On newer vehicles with electronic throttle control, the PCM directly controls the throttle plate position via a motor, eliminating the need for a separate IAC valve.",
    diagram: "",
    terms: ["pcm", "throttle_position_sensor", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=Bfq5Dkf7hYs",
    youtubeTitle: "Throttle Body and TPS Explained",
    qChinese: "技师A说PCM控制怠速空气控制(IAC)阀以维持目标怠速转速。技师B说电子节气门体可以在没有单独IAC阀的情况下控制怠速转速。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都正确。在较老的系统中，PCM使用IAC阀绕过节气门板旁路进气来控制怠速转速。在配备电子节气门控制的较新车辆中，PCM通过电机直接控制节气门板位置，无需单独的IAC阀。"
  },
  {
    id: 98,
    q: "A DTC P0106 (MAP/BARO Circuit Range/Performance) is set. The technician should check all of the following EXCEPT:",
    options: [
      "A) The MAP sensor vacuum hose for leaks or restrictions",
      "B) The MAP sensor signal and reference voltage",
      "C) The transmission fluid level",
      "D) The MAP sensor connector for damage or corrosion"
    ],
    answer: 2,
    explanation: "DTC P0106 relates to the MAP or barometric pressure sensor circuit. The technician should inspect the vacuum hose, signal voltage, reference voltage, and connector. Transmission fluid level is unrelated to the MAP sensor circuit and would not cause this DTC to set in the engine control system.",
    diagram: "",
    terms: ["map_sensor", "dtc", "pcm", "dmm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=kEIO1jjV-GQ",
    youtubeTitle: "MAP Sensor Function and Testing",
    qChinese: "存储了DTC P0106（MAP/BARO电路范围/性能）。技师应检查以下所有项目，除了：",
    optionsChinese: [
      "A) MAP传感器真空软管是否泄漏或堵塞",
      "B) MAP传感器信号和参考电压",
      "C) 变速箱油液位",
      "D) MAP传感器接插件是否损坏或腐蚀"
    ],
    explanationChinese: "DTC P0106与MAP或气压传感器电路相关。技师应检查真空软管、信号电压、参考电压和接插件。变速箱油液位与MAP传感器电路无关，不会导致发动机控制系统中设置该DTC。"
  },
  {
    id: 99,
    q: "The PCM operates in open loop mode during all of the following conditions EXCEPT:",
    options: [
      "A) Engine cold start",
      "B) Wide-open throttle",
      "C) Normal cruising at operating temperature",
      "D) When the oxygen sensor has not reached operating temperature"
    ],
    answer: 2,
    explanation: "During normal cruising at operating temperature, the PCM operates in closed loop, using oxygen sensor feedback to adjust the air-fuel ratio. Open loop mode is used during cold start, wide-open throttle, and before the O2 sensor is warm enough to provide a reliable signal. In open loop, fuel is based on preset maps.",
    diagram: "",
    terms: ["pcm", "oxygen_sensor", "coolant_temperature_sensor", "fuel_trim"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lambda_sensor.jpg/640px-Lambda_sensor.jpg",
    youtube: "https://www.youtube.com/watch?v=GmOZvlJ8nxY",
    youtubeTitle: "Oxygen Sensor Operation and Diagnosis",
    qChinese: "PCM在以下所有条件下以开环模式运行，除了：",
    optionsChinese: [
      "A) 发动机冷启动",
      "B) 节气门全开",
      "C) 工作温度下正常巡航",
      "D) 氧传感器未达到工作温度时"
    ],
    explanationChinese: "在工作温度下正常巡航时，PCM以闭环模式运行，利用氧传感器反馈调整空燃比。开环模式用于冷启动、节气门全开以及氧传感器温度不够高无法提供可靠信号时。在开环模式下，燃油基于预设映射表。"
  },
  {
    id: 100,
    q: "A DTC P0562 (System Voltage Low) is stored. Which of the following is the MOST likely cause?",
    options: [
      "A) A faulty charging system or failing alternator",
      "B) A stuck-open EGR valve",
      "C) A faulty MAP sensor",
      "D) A restricted exhaust system"
    ],
    answer: 0,
    explanation: "DTC P0562 indicates the PCM detected system voltage below the normal threshold, typically below about 10V. The most common cause is a failing alternator, loose or corroded battery connections, or a worn drive belt. The EGR valve, MAP sensor, and exhaust system do not directly affect system voltage.",
    diagram: "",
    terms: ["alternator", "battery", "dtc", "serpentine_belt"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "存储了DTC P0562（系统电压低）。以下哪项是最可能的原因？",
    optionsChinese: [
      "A) 充电系统故障或发电机失效",
      "B) EGR阀卡开",
      "C) MAP传感器故障",
      "D) 排气系统受阻"
    ],
    explanationChinese: "DTC P0562表明PCM检测到系统电压低于正常阈值，通常低于约10V。最常见的原因是发电机失效、蓄电池连接松动或腐蚀，或传动皮带磨损。EGR阀、MAP传感器和排气系统不会直接影响系统电压。"
  },

  // =============================================
  // QUESTIONS 101–200: ADVANCED A8 ENGINE PERFORMANCE
  // =============================================

  // --- GENERAL ENGINE DIAGNOSIS (101–115) ---
  {
    id: 101,
    q: "A vehicle cranks normally but will not start. A noid light connected to an injector connector does not flash during cranking. The MOST likely cause is:",
    options: [
      "A) A faulty fuel injector",
      "B) No signal from the PCM to the injectors",
      "C) A clogged fuel filter",
      "D) Low fuel pressure"
    ],
    answer: 1,
    explanation: "A noid light tests for injector pulse signals from the PCM. If the noid light does not flash, the PCM is not sending a trigger signal. This could be due to a faulty CKP or CMP sensor, a defective PCM, or a wiring issue. A clogged filter or low pressure would not prevent the pulse signal.",
    diagram: "",
    terms: ["fuel_injector", "pcm", "crankshaft_position_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=Bfq5Dkf7hYs",
    youtubeTitle: "How Fuel Injectors Work",
    qChinese: "车辆正常起动但无法启动。连接到喷油器插头的脉冲指示灯在起动时不闪烁。最可能的原因是：",
    optionsChinese: [
      "A) 喷油器故障",
      "B) PCM没有向喷油器发送信号",
      "C) 燃油滤清器堵塞",
      "D) 燃油压力低"
    ],
    explanationChinese: "脉冲指示灯测试PCM发出的喷油器脉冲信号。如果指示灯不闪烁，说明PCM没有发送触发信号。原因可能是CKP或CMP传感器故障、PCM缺陷或线路问题。滤清器堵塞或压力低不会阻止脉冲信号。"
  },
  {
    id: 102,
    q: "A vehicle stalls intermittently at idle but restarts immediately. Scan tool data shows no DTCs. The MOST effective diagnostic approach is:",
    options: [
      "A) Replace the PCM",
      "B) Monitor live data for fuel trim, IAC counts, and RPM fluctuations during the stall event",
      "C) Replace all ignition coils",
      "D) Perform a transmission fluid change"
    ],
    answer: 1,
    explanation: "Monitoring live data during an intermittent stall helps identify the root cause by capturing parameter changes at the moment of failure. Fuel trim spikes, IAC count changes, or RPM drops can point to vacuum leaks, fuel delivery, or idle control issues without unnecessary parts replacement.",
    diagram: "",
    terms: ["scan_tool", "pcm", "fuel_trim"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "车辆怠速时间歇性熄火但可立即重启。诊断仪无DTC。最有效的诊断方法是：",
    optionsChinese: [
      "A) 更换PCM",
      "B) 在熄火时监测实时数据中的燃油修正、IAC计数和转速波动",
      "C) 更换所有点火线圈",
      "D) 进行变速箱油液更换"
    ],
    explanationChinese: "在间歇性熄火期间监测实时数据有助于捕获故障时刻的参数变化来识别根本原因。燃油修正突变、IAC计数变化或转速下降可以指向真空泄漏、燃油供给或怠速控制问题，避免不必要的更换零件。"
  },
  {
    id: 103,
    q: "An engine has a rough idle that smooths out above 1500 RPM. Fuel trims are normal at cruise but STFT is +20% at idle. The MOST likely cause is:",
    options: [
      "A) A faulty fuel pump",
      "B) A vacuum leak near the intake manifold",
      "C) A clogged catalytic converter",
      "D) A faulty ignition control module"
    ],
    answer: 1,
    explanation: "High positive fuel trim at idle that normalizes at cruise speed is a classic sign of a vacuum leak. At idle, the unmetered air from the leak is a larger percentage of total airflow, causing a significant lean condition. At higher RPM, the leak becomes a smaller fraction of total airflow.",
    diagram: "",
    terms: ["fuel_trim", "vacuum_gauge", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=cBzsOD3Yl28",
    youtubeTitle: "Understanding Fuel Trims for Diagnosis",
    qChinese: "发动机怠速粗糙，但在1500转以上变平稳。巡航时燃油修正正常，但怠速时STFT为+20%。最可能的原因是：",
    optionsChinese: [
      "A) 燃油泵故障",
      "B) 进气歧管附近真空泄漏",
      "C) 三元催化器堵塞",
      "D) 点火控制模块故障"
    ],
    explanationChinese: "怠速时正值燃油修正高但巡航时恢复正常是真空泄漏的典型标志。怠速时泄漏的未计量空气占总气流量的较大比例，导致明显过稀。在较高转速时，泄漏占总气流量的比例变小。"
  },
  {
    id: 104,
    q: "A technician performs a cylinder power balance test using a scan tool to disable individual injectors. Cylinder #3 shows no RPM change when disabled. What should the technician check FIRST on cylinder #3?",
    options: [
      "A) Engine oil level",
      "B) Spark, compression, and fuel delivery",
      "C) Transmission mount",
      "D) Exhaust back-pressure"
    ],
    answer: 1,
    explanation: "No RPM change when a cylinder is disabled means it was not contributing power. The three requirements for combustion are spark, compression, and fuel. The technician should verify all three on that cylinder by checking spark output, performing a compression test, and testing injector operation.",
    diagram: "",
    terms: ["misfire", "compression_test", "fuel_injector", "spark_plug"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Diagnosing Engine Misfires",
    qChinese: "技师使用诊断仪禁用各喷油器进行功率平衡测试。禁用3号气缸时转速没有变化。技师应首先检查3号气缸的什么？",
    optionsChinese: [
      "A) 发动机油位",
      "B) 火花、压缩和燃油供给",
      "C) 变速箱悬置",
      "D) 排气背压"
    ],
    explanationChinese: "禁用气缸后转速不变意味着该缸之前就没有贡献动力。燃烧的三个要素是火花、压缩和燃油。技师应检查该缸的火花输出、进行压缩测试并测试喷油器工作状况来验证这三个要素。"
  },
  {
    id: 105,
    q: "A vehicle has a P0301 (Cylinder 1 Misfire Detected). The technician swaps the coil from cylinder #1 with cylinder #3. The misfire now occurs on cylinder #3 (P0303). This confirms:",
    options: [
      "A) A faulty fuel injector on cylinder #1",
      "B) The ignition coil that was originally on cylinder #1 is defective",
      "C) Low compression on cylinder #1",
      "D) A wiring problem in the coil harness for cylinder #1"
    ],
    answer: 1,
    explanation: "When a component is swapped between cylinders and the misfire follows the component, the swapped part is faulty. Since the misfire moved from cylinder #1 to cylinder #3 with the coil, the coil is defective. A wiring fault or injector issue would keep the misfire on the original cylinder.",
    diagram: "",
    terms: ["ignition_coil", "misfire", "dtc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Diagnosing Engine Misfires",
    qChinese: "车辆有P0301（1号气缸失火）。技师将1号气缸的线圈与3号气缸互换。失火现在发生在3号气缸（P0303）。这确认了：",
    optionsChinese: [
      "A) 1号气缸的喷油器故障",
      "B) 原来在1号气缸上的点火线圈有缺陷",
      "C) 1号气缸压缩不足",
      "D) 1号气缸线圈线束的线路问题"
    ],
    explanationChinese: "当部件在气缸之间互换后失火跟随该部件移动时，被换的部件是故障件。由于失火随线圈从1号缸转移到3号缸，说明线圈有缺陷。线路故障或喷油器问题会使失火保留在原来的气缸上。"
  },
  {
    id: 106,
    q: "A running compression test shows significantly lower pressure on one cylinder compared to others. This indicates:",
    options: [
      "A) Normal engine operation",
      "B) A possible restriction in the intake or exhaust for that cylinder",
      "C) The oil is overfilled",
      "D) The fuel octane is too low"
    ],
    answer: 1,
    explanation: "A running compression test measures pressure while the engine is running, unlike a cranking compression test. Low pressure on one cylinder during a running test can indicate a restricted intake or exhaust valve, a cam lobe worn flat, or a valve timing issue specific to that cylinder.",
    diagram: "",
    terms: ["compression_test", "camshaft", "cylinder_head"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "运转压缩测试显示某一气缸的压力明显低于其他气缸。这表明：",
    optionsChinese: [
      "A) 发动机正常运转",
      "B) 该气缸的进气或排气可能受阻",
      "C) 机油加注过多",
      "D) 燃油辛烷值太低"
    ],
    explanationChinese: "运转压缩测试在发动机运行时测量压力，与起动压缩测试不同。运转测试中某一气缸压力低可能表明进气或排气门受限、凸轮凸起磨平或该气缸存在配气正时问题。"
  },
  {
    id: 107,
    q: "An exhaust gas analyzer shows high O2 and high HC readings. This combination MOST likely indicates:",
    options: [
      "A) A rich air-fuel mixture",
      "B) An engine misfire allowing unburned fuel and air to pass through",
      "C) Normal combustion",
      "D) A stuck-open EGR valve"
    ],
    answer: 1,
    explanation: "High O2 combined with high HC indicates that both unburned fuel and unused oxygen are exiting the exhaust. This pattern is characteristic of a misfire, where the air-fuel mixture passes through the cylinder without being ignited. A rich condition would show high HC but low O2.",
    diagram: "",
    terms: ["misfire", "oxygen_sensor", "catalytic_converter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lambda_sensor.jpg/640px-Lambda_sensor.jpg",
    youtube: "https://www.youtube.com/watch?v=GmOZvlJ8nxY",
    youtubeTitle: "Exhaust Gas Analysis for Diagnosis",
    qChinese: "排气分析仪显示O2偏高且HC偏高。这种组合最可能表明：",
    optionsChinese: [
      "A) 混合气过浓",
      "B) 发动机失火导致未燃燃油和空气通过",
      "C) 正常燃烧",
      "D) EGR阀卡开"
    ],
    explanationChinese: "O2偏高同时HC偏高表明未燃燃油和未使用的氧气都从排气排出。这种模式是失火的特征，空燃混合气通过气缸而未被点燃。过浓状况会显示HC偏高但O2偏低。"
  },
  {
    id: 108,
    q: "Technician A says a scope pattern of the ignition primary circuit can reveal a shorted coil winding. Technician B says a DMM ohms test on the primary winding can also detect a short. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. An oscilloscope shows the primary circuit waveform including dwell, firing voltage, and coil oscillations that reveal shorted turns. A DMM resistance test on the primary winding showing lower-than-specification ohms also confirms shorted windings reducing effective coil inductance.",
    diagram: "",
    terms: ["ignition_coil", "dmm", "spark_plug"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Ignition System - How It Works",
    qChinese: "技师A说点火初级电路的示波器波形可以发现线圈绕组短路。技师B说用万用表测初级绕组电阻也可以检测短路。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都正确。示波器显示初级电路波形，包括通电时间、点火电压和线圈振荡，可揭示短路匝。万用表电阻测试中初级绕组读数低于规格值也可确认短路匝，降低了线圈有效电感。"
  },
  {
    id: 109,
    q: "A vehicle hesitates and bogs down on hard acceleration but runs fine at light throttle. Fuel pressure under load is 28 psi (spec: 40-45 psi). The MOST likely cause is:",
    options: [
      "A) A faulty MAP sensor",
      "B) A weak fuel pump that cannot maintain pressure under high demand",
      "C) A stuck-open EGR valve",
      "D) A faulty knock sensor"
    ],
    answer: 1,
    explanation: "Fuel pressure that drops below specification under load indicates the fuel pump cannot deliver adequate volume. Under light throttle the demand is lower and pressure stays acceptable. A weak pump, restricted filter, or pinched fuel line can all cause insufficient pressure under high fuel demand.",
    diagram: "",
    terms: ["fuel_injector", "fuel_trim", "map_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=Bfq5Dkf7hYs",
    youtubeTitle: "How Fuel Injectors Work",
    qChinese: "车辆在急加速时犹豫和迟滞，但轻踩油门时运行正常。负荷下燃油压力为28 psi（规格：40-45 psi）。最可能的原因是：",
    optionsChinese: [
      "A) MAP传感器故障",
      "B) 燃油泵衰弱，无法在高需求下维持压力",
      "C) EGR阀卡开",
      "D) 爆震传感器故障"
    ],
    explanationChinese: "负荷下燃油压力低于规格值表明燃油泵无法提供足够的流量。轻油门时需求较低，压力可保持在可接受范围。衰弱的泵、堵塞的滤清器或被夹住的燃油管路都可能在高燃油需求时导致压力不足。"
  },
  {
    id: 110,
    q: "A scan tool shows calculated engine load at 95% while the vehicle is idling in park. This indicates:",
    options: [
      "A) Normal idle conditions",
      "B) A possible restricted exhaust or significant engine mechanical problem",
      "C) The scan tool is malfunctioning",
      "D) The transmission is slipping"
    ],
    answer: 1,
    explanation: "Calculated engine load at idle should typically be between 15% and 35%. A reading of 95% at idle suggests the engine is working extremely hard, possibly due to a severely restricted exhaust such as a plugged catalytic converter, or a major mechanical problem creating excessive internal friction.",
    diagram: "",
    terms: ["scan_tool", "catalytic_converter", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "诊断仪显示车辆在驻车怠速时计算发动机负荷为95%。这表明：",
    optionsChinese: [
      "A) 正常怠速条件",
      "B) 可能排气受阻或发动机机械问题严重",
      "C) 诊断仪故障",
      "D) 变速箱打滑"
    ],
    explanationChinese: "怠速时计算发动机负荷通常应在15%至35%之间。怠速时读数为95%表明发动机工作极其费力，可能由于排气严重受阻（如三元催化器堵塞）或重大机械问题导致过大的内部摩擦。"
  },
  {
    id: 111,
    q: "A vehicle with variable valve timing (VVT) has a DTC P0011 (Camshaft Position A - Timing Over-Advanced Bank 1). The FIRST thing to check is:",
    options: [
      "A) The spark plug gap",
      "B) Engine oil level and condition",
      "C) The fuel filter",
      "D) The alternator output"
    ],
    answer: 1,
    explanation: "VVT systems use oil pressure to actuate cam phasers. Low oil level, dirty oil, or incorrect viscosity can prevent proper cam phaser operation, causing timing to be over-advanced or retarded. Checking oil level and condition is the simplest and most common cause of VVT-related DTCs.",
    diagram: "",
    terms: ["variable_valve_timing", "camshaft", "pcm", "dtc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "配备可变气门正时(VVT)的车辆有DTC P0011（凸轮轴位置A - 正时过度提前 Bank 1）。首先应检查的是：",
    optionsChinese: [
      "A) 火花塞间隙",
      "B) 发动机油位和油质",
      "C) 燃油滤清器",
      "D) 发电机输出"
    ],
    explanationChinese: "VVT系统使用油压来驱动凸轮相位器。油位低、机油脏污或粘度不正确会阻止凸轮相位器正常工作，导致正时过度提前或推迟。检查油位和油质是VVT相关DTC最简单和最常见的原因。"
  },
  {
    id: 112,
    q: "An engine has a tapping noise that is loudest at cold startup and fades as the engine warms up. The MOST likely cause is:",
    options: [
      "A) A worn timing chain",
      "B) Hydraulic valve lifters bleeding down overnight",
      "C) A cracked exhaust manifold",
      "D) Excessive piston ring gap"
    ],
    answer: 1,
    explanation: "Hydraulic lifters can lose oil and bleed down when the engine sits overnight, causing a tapping noise at cold startup. As oil pressure builds and the lifters pump up, the noise fades. This is a common characteristic of aging hydraulic lifters or low oil pressure at initial startup.",
    diagram: "",
    terms: ["hydraulic_lifter", "oil_pressure", "camshaft"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "发动机冷启动时有嗒嗒声最响，暖机后逐渐消失。最可能的原因是：",
    optionsChinese: [
      "A) 正时链条磨损",
      "B) 液压挺柱隔夜漏油",
      "C) 排气歧管裂纹",
      "D) 活塞环间隙过大"
    ],
    explanationChinese: "液压挺柱在发动机停放过夜后可能漏油和泄压，导致冷启动时出现嗒嗒声。随着油压建立和挺柱充油，噪声消退。这是老化液压挺柱或初始启动时油压低的常见特征。"
  },
  {
    id: 113,
    q: "A technician uses an infrared pyrometer to measure exhaust manifold runner temperatures. One runner reads significantly cooler than the others. This indicates:",
    options: [
      "A) That cylinder is running rich",
      "B) That cylinder is misfiring or not contributing combustion",
      "C) The exhaust manifold is cracked",
      "D) Normal variation between cylinders"
    ],
    answer: 1,
    explanation: "A cooler exhaust runner indicates that the corresponding cylinder is not producing normal combustion heat, likely due to a misfire. Without combustion, the exhaust gases from that cylinder are significantly cooler. This technique helps identify a dead or weak cylinder without scan tool access.",
    diagram: "",
    terms: ["misfire", "spark_plug", "fuel_injector"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Diagnosing Engine Misfires",
    qChinese: "技师使用红外测温仪测量排气歧管各支管温度。一个支管温度明显低于其他支管。这表明：",
    optionsChinese: [
      "A) 该气缸运行过浓",
      "B) 该气缸失火或未产生燃烧",
      "C) 排气歧管裂纹",
      "D) 各气缸之间的正常差异"
    ],
    explanationChinese: "较冷的排气支管表明对应气缸未产生正常的燃烧热量，很可能是由于失火。没有燃烧时，该气缸的排气温度明显较低。这种技术有助于在没有诊断仪的情况下识别失火或弱缸。"
  },
  {
    id: 114,
    q: "A vehicle has a P0456 (EVAP System Small Leak Detected). After a smoke test reveals no visible leaks, the technician should check:",
    options: [
      "A) The fuel injectors",
      "B) The gas cap seal and the EVAP purge and vent valve sealing",
      "C) The spark plugs",
      "D) The alternator belt tension"
    ],
    answer: 1,
    explanation: "Small EVAP leaks are often caused by a worn or cracked gas cap O-ring seal, a purge valve not fully sealing, or a vent valve that does not seal completely. These components can pass a smoke test but still leak under the precise pressure monitoring conditions of the OBD II EVAP test.",
    diagram: "",
    terms: ["evap_system", "dtc", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=yx4LkP8yjVQ",
    youtubeTitle: "EVAP System Operation and Testing",
    qChinese: "车辆有P0456（EVAP系统检测到小泄漏）。烟雾测试未发现可见泄漏后，技师应检查：",
    optionsChinese: [
      "A) 喷油器",
      "B) 油箱盖密封件以及EVAP清洗阀和排放阀的密封性",
      "C) 火花塞",
      "D) 发电机皮带张力"
    ],
    explanationChinese: "EVAP小泄漏通常由磨损或裂纹的油箱盖O形密封圈、清洗阀未完全密封或排放阀未完全密封引起。这些部件可能通过烟雾测试但在OBD II EVAP测试的精确压力监测条件下仍会泄漏。"
  },
  {
    id: 115,
    q: "A compression test shows 150 psi on cylinders 1, 2, and 4, but cylinders 3 and 5 both read 90 psi. These two low cylinders are adjacent. The MOST likely cause is:",
    options: [
      "A) Worn piston rings on both cylinders",
      "B) A head gasket leak between cylinders 3 and 5",
      "C) Fouled spark plugs on cylinders 3 and 5",
      "D) Faulty fuel injectors on cylinders 3 and 5"
    ],
    answer: 1,
    explanation: "When two adjacent cylinders show equally low compression, a head gasket breach between those cylinders is the most likely cause. Combustion pressure leaks from one cylinder to the other through the failed gasket area, reducing compression in both. Worn rings or valve problems typically affect cylinders independently.",
    diagram: "",
    terms: ["compression_test", "head_gasket", "cylinder_head"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "压缩测试显示1、2、4号气缸为150 psi，但相邻的3号和5号气缸仅为90 psi。最可能的原因是：",
    optionsChinese: [
      "A) 两个气缸的活塞环磨损",
      "B) 3号和5号气缸之间的气缸垫泄漏",
      "C) 3号和5号气缸的火花塞积碳",
      "D) 3号和5号气缸的喷油器故障"
    ],
    explanationChinese: "当两个相邻气缸显示同样低的压缩值时，这两个气缸之间的气缸垫损坏是最可能的原因。燃烧压力通过损坏的垫片区域从一个气缸泄漏到另一个，降低两者的压缩值。活塞环或气门问题通常独立影响各气缸。"
  },

  // --- IGNITION SYSTEM (116–135) ---
  {
    id: 116,
    q: "A coil-on-plug (COP) ignition system has a DTC P0352 (Ignition Coil B Primary/Secondary Circuit). The technician should check all of the following EXCEPT:",
    options: [
      "A) The coil connector and wiring for damage",
      "B) The coil primary resistance with a DMM",
      "C) The PCM coil driver signal",
      "D) The fuel pump relay"
    ],
    answer: 3,
    explanation: "P0352 relates to the ignition coil B circuit. The technician should check the coil connector, wiring, primary and secondary resistance, and the PCM driver signal. The fuel pump relay powers the fuel system and is unrelated to the ignition coil circuit malfunction indicated by this DTC.",
    diagram: "",
    terms: ["ignition_coil", "dtc", "pcm", "dmm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Ignition System - How It Works",
    qChinese: "独立点火(COP)系统有DTC P0352（点火线圈B初级/次级电路）。技师应检查以下所有项目，除了：",
    optionsChinese: [
      "A) 线圈接插件和线路是否损坏",
      "B) 用万用表测线圈初级电阻",
      "C) PCM线圈驱动信号",
      "D) 燃油泵继电器"
    ],
    explanationChinese: "P0352与点火线圈B电路相关。技师应检查线圈接插件、线路、初级和次级电阻以及PCM驱动信号。燃油泵继电器为燃油系统供电，与该DTC指示的点火线圈电路故障无关。"
  },
  {
    id: 117,
    q: "In a distributorless ignition system (DIS), each coil pack fires:",
    options: [
      "A) All cylinders simultaneously",
      "B) Two paired cylinders simultaneously (waste spark)",
      "C) Only one cylinder at a time, same as a COP system",
      "D) Cylinders in the reverse firing order"
    ],
    answer: 1,
    explanation: "A DIS waste spark system uses one coil to fire two companion cylinders simultaneously. One cylinder is on its compression stroke and the other on its exhaust stroke. The spark on the exhaust stroke cylinder is wasted since there is no combustible mixture, hence the name waste spark.",
    diagram: "",
    terms: ["ignition_coil", "spark_plug", "crankshaft_position_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Ignition System - How It Works",
    qChinese: "在无分电器点火系统(DIS)中，每个线圈组同时点燃：",
    optionsChinese: [
      "A) 所有气缸同时点火",
      "B) 两个配对气缸同时点火（废气火花）",
      "C) 一次只点一个气缸，与COP系统相同",
      "D) 按相反点火顺序点燃气缸"
    ],
    explanationChinese: "DIS废气火花系统使用一个线圈同时点燃两个配对气缸。一个气缸处于压缩冲程，另一个处于排气冲程。排气冲程气缸的火花被浪费，因为没有可燃混合气，因此称为废气火花。"
  },
  {
    id: 118,
    q: "A spark plug shows heavy black carbon deposits. This condition is called:",
    options: [
      "A) Pre-ignition damage",
      "B) Carbon fouling from a rich mixture or weak ignition",
      "C) Normal wear",
      "D) Detonation damage"
    ],
    answer: 1,
    explanation: "Heavy black carbon deposits on a spark plug indicate carbon fouling, caused by an excessively rich air-fuel mixture, prolonged idling, a weak ignition system, or an incorrect heat range plug. The carbon creates a conductive path that can short the spark to ground, preventing proper ignition.",
    diagram: "",
    terms: ["spark_plug", "fuel_trim", "ignition_coil"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Spark Plug Reading and Diagnosis",
    qChinese: "火花塞上有厚重的黑色积碳沉积物。这种状况称为：",
    optionsChinese: [
      "A) 早燃损坏",
      "B) 过浓混合气或点火弱导致的积碳污染",
      "C) 正常磨损",
      "D) 爆震损坏"
    ],
    explanationChinese: "火花塞上厚重的黑色积碳沉积物表明积碳污染，由混合气过浓、长时间怠速、点火系统弱或火花塞热值不正确引起。积碳形成导电路径可使火花对地短路，阻止正常点火。"
  },
  {
    id: 119,
    q: "Technician A says ignition timing on most modern vehicles is controlled entirely by the PCM and cannot be manually adjusted. Technician B says the PCM uses inputs from the CKP, CMP, knock sensor, and engine load to determine timing. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Modern engines use electronic ignition timing controlled entirely by the PCM with no mechanical adjustment. The PCM uses CKP and CMP signals for position, knock sensor for detonation detection, and engine load data from the MAP or MAF sensor to calculate optimal timing.",
    diagram: "",
    terms: ["pcm", "crankshaft_position_sensor", "ignition_coil"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "技师A说大多数现代车辆的点火正时完全由PCM控制，无法手动调节。技师B说PCM使用CKP、CMP、爆震传感器和发动机负荷输入来确定正时。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都正确。现代发动机使用完全由PCM控制的电子点火正时，没有机械调节。PCM使用CKP和CMP信号确定位置，爆震传感器检测爆震，以及来自MAP或MAF传感器的发动机负荷数据来计算最佳正时。"
  },
  {
    id: 120,
    q: "A knock sensor detects engine detonation and signals the PCM to:",
    options: [
      "A) Advance ignition timing",
      "B) Retard ignition timing",
      "C) Increase fuel pressure",
      "D) Open the EGR valve"
    ],
    answer: 1,
    explanation: "When the knock sensor detects detonation vibrations, it sends a signal to the PCM to retard ignition timing. Retarding timing reduces cylinder pressure and temperature, eliminating the knock condition. Once detonation stops, the PCM gradually advances timing back toward the optimal setting for performance.",
    diagram: "",
    terms: ["pcm", "ignition_coil", "detonation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Engine Knock and Detonation Causes",
    qChinese: "爆震传感器检测到发动机爆震后向PCM发送信号以：",
    optionsChinese: [
      "A) 提前点火正时",
      "B) 推迟点火正时",
      "C) 增加燃油压力",
      "D) 打开EGR阀"
    ],
    explanationChinese: "当爆震传感器检测到爆震振动时，向PCM发送信号以推迟点火正时。推迟正时降低气缸压力和温度，消除爆震状况。爆震停止后，PCM逐渐将正时恢复到性能最佳的设定。"
  },
  {
    id: 121,
    q: "The ignition coil secondary winding typically has a resistance of:",
    options: [
      "A) Less than 1 ohm",
      "B) 1 to 5 ohms",
      "C) 6,000 to 15,000 ohms",
      "D) Over 100,000 ohms"
    ],
    answer: 2,
    explanation: "The secondary winding of an ignition coil typically has between 6,000 and 15,000 ohms of resistance, depending on the coil design. This winding has thousands of turns of fine wire to step up the primary voltage to the 25,000-45,000 volts needed to fire the spark plugs.",
    diagram: "",
    terms: ["ignition_coil", "ohms_law", "dmm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Ignition System - How It Works",
    qChinese: "点火线圈次级绕组通常的电阻为：",
    optionsChinese: [
      "A) 小于1欧姆",
      "B) 1至5欧姆",
      "C) 6,000至15,000欧姆",
      "D) 超过100,000欧姆"
    ],
    explanationChinese: "点火线圈的次级绕组通常有6,000至15,000欧姆的电阻，取决于线圈设计。该绕组有数千匝细线，将初级电压升压至点燃火花塞所需的25,000-45,000伏特。"
  },
  {
    id: 122,
    q: "A vehicle with a COP ignition system has a misfire under heavy load only. The spark plug and coil test fine. The MOST likely cause is:",
    options: [
      "A) A worn COP coil boot allowing voltage to arc to the valve cover",
      "B) A clogged air filter",
      "C) A faulty alternator",
      "D) Low transmission fluid"
    ],
    answer: 0,
    explanation: "Under heavy load, cylinder pressure is high and more voltage is needed to fire the spark plug. A worn or deteriorated COP coil boot can allow the high secondary voltage to arc to the valve cover or spark plug well instead of firing the plug. This only occurs under high-demand conditions.",
    diagram: "",
    terms: ["ignition_coil", "spark_plug", "misfire"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Diagnosing Engine Misfires",
    qChinese: "配备COP点火系统的车辆仅在重负荷下失火。火花塞和线圈测试正常。最可能的原因是：",
    optionsChinese: [
      "A) COP线圈护套磨损导致电压对气门室盖放电",
      "B) 空气滤清器堵塞",
      "C) 发电机故障",
      "D) 变速箱油液位低"
    ],
    explanationChinese: "重负荷下气缸压力高，需要更高电压来点燃火花塞。磨损或老化的COP线圈护套可能允许高次级电压对气门室盖或火花塞井壁放电，而不是点燃火花塞。这仅在高需求条件下发生。"
  },
  {
    id: 123,
    q: "Spark plug heat range refers to the plug's ability to:",
    options: [
      "A) Generate more voltage",
      "B) Transfer heat from the firing tip to the cylinder head",
      "C) Withstand fuel pressure",
      "D) Resist corrosion from exhaust gases"
    ],
    answer: 1,
    explanation: "Spark plug heat range describes how quickly the plug transfers heat from its firing tip to the cylinder head and cooling system. A hot plug retains more heat with a longer insulator nose for burn-off of deposits. A cold plug transfers heat faster, suitable for high-performance or high-load conditions.",
    diagram: "",
    terms: ["spark_plug", "cylinder_head", "detonation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Spark Plug Reading and Diagnosis",
    qChinese: "火花塞热值是指火花塞的什么能力：",
    optionsChinese: [
      "A) 产生更高电压",
      "B) 将热量从点火端传递到气缸盖",
      "C) 承受燃油压力",
      "D) 抵抗排气腐蚀"
    ],
    explanationChinese: "火花塞热值描述火花塞从点火端将热量传递到气缸盖和冷却系统的速度。热型火花塞绝缘体鼻部较长，保持更多热量以烧除沉积物。冷型火花塞传热更快，适合高性能或高负荷工况。"
  },
  {
    id: 124,
    q: "An ignition system produces 35,000 volts but only 10,000 volts are needed to fire the spark plug. The remaining 25,000 volts is called:",
    options: [
      "A) Dwell voltage",
      "B) Available voltage or reserve voltage",
      "C) Primary voltage",
      "D) Saturation voltage"
    ],
    answer: 1,
    explanation: "The difference between the maximum voltage the ignition system can produce and the voltage actually needed to fire the plug is the available or reserve voltage. Adequate reserve ensures reliable ignition under varying conditions such as high load, wide gap, or lean mixtures that increase voltage demand.",
    diagram: "",
    terms: ["ignition_coil", "spark_plug", "compression_test"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Ignition System - How It Works",
    qChinese: "点火系统产生35,000伏电压，但只需10,000伏即可点燃火花塞。剩余的25,000伏称为：",
    optionsChinese: [
      "A) 通电电压",
      "B) 可用电压或储备电压",
      "C) 初级电压",
      "D) 饱和电压"
    ],
    explanationChinese: "点火系统能产生的最大电压与实际点燃火花塞所需电压之差是可用电压或储备电压。足够的储备确保在高负荷、大间隙或稀薄混合气等增加电压需求的各种条件下可靠点火。"
  },
  {
    id: 125,
    q: "A DTC P0351 (Ignition Coil A Primary/Secondary Circuit) is stored. The technician measures the coil primary resistance at 0.2 ohms. The specification is 0.5-1.5 ohms. This indicates:",
    options: [
      "A) The coil is within specification",
      "B) The coil has a shorted primary winding",
      "C) The coil has an open primary winding",
      "D) Normal coil resistance for a COP system"
    ],
    answer: 1,
    explanation: "A primary resistance reading of 0.2 ohms is below the specification of 0.5-1.5 ohms, indicating shorted turns in the primary winding. Shorted turns reduce resistance and prevent the coil from building a proper magnetic field, resulting in weak or no secondary voltage output. The coil should be replaced.",
    diagram: "",
    terms: ["ignition_coil", "ohms_law", "dmm", "dtc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Ignition System - How It Works",
    qChinese: "存储了DTC P0351（点火线圈A初级/次级电路）。技师测量线圈初级电阻为0.2欧姆。规格值为0.5-1.5欧姆。这表明：",
    optionsChinese: [
      "A) 线圈在规格范围内",
      "B) 线圈初级绕组短路",
      "C) 线圈初级绕组断路",
      "D) COP系统正常的线圈电阻"
    ],
    explanationChinese: "初级电阻读数0.2欧姆低于0.5-1.5欧姆的规格值，表明初级绕组存在短路匝。短路匝降低电阻并阻止线圈建立正常的磁场，导致次级电压输出弱或无输出。应更换线圈。"
  },
  {
    id: 126,
    q: "The firing voltage required to fire a spark plug INCREASES with all of the following EXCEPT:",
    options: [
      "A) A wider spark plug gap",
      "B) Higher cylinder compression pressure",
      "C) A lean air-fuel mixture",
      "D) A fouled spark plug"
    ],
    answer: 3,
    explanation: "A fouled spark plug has carbon deposits that create conductive paths across the gap, actually reducing the voltage needed for the spark to jump. A wider gap, higher compression, and a lean mixture all increase the resistance and voltage required to ionize the gas and create a spark arc.",
    diagram: "",
    terms: ["spark_plug", "ignition_coil", "compression_test"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Spark Plug Reading and Diagnosis",
    qChinese: "点燃火花塞所需的点火电压在以下所有情况下都会增加，除了：",
    optionsChinese: [
      "A) 火花塞间隙加大",
      "B) 气缸压缩压力更高",
      "C) 混合气过稀",
      "D) 火花塞积碳"
    ],
    explanationChinese: "积碳的火花塞在间隙处有碳沉积物形成导电路径，实际上降低了火花跳过所需的电压。更大的间隙、更高的压缩和更稀的混合气都增加了电离气体和产生火花弧所需的电阻和电压。"
  },
  {
    id: 127,
    q: "A vehicle has no spark on any cylinder. Battery voltage is 12.6V. The CKP sensor signal is verified good on a scope. The MOST likely cause is:",
    options: [
      "A) A faulty CKP sensor",
      "B) A faulty ignition control module or PCM coil driver failure",
      "C) Low battery voltage",
      "D) Worn spark plugs"
    ],
    answer: 1,
    explanation: "With a good CKP signal and adequate battery voltage, the lack of spark on all cylinders points to the component that triggers all coils: the ignition control module or the PCM coil drivers. A failed ICM or PCM driver circuit prevents the primary circuit from switching on and off to generate spark.",
    diagram: "",
    terms: ["ignition_coil", "pcm", "crankshaft_position_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Ignition System - How It Works",
    qChinese: "所有气缸均无火花。电池电压12.6V。示波器上验证CKP传感器信号正常。最可能的原因是：",
    optionsChinese: [
      "A) CKP传感器故障",
      "B) 点火控制模块故障或PCM线圈驱动器故障",
      "C) 电池电压低",
      "D) 火花塞磨损"
    ],
    explanationChinese: "CKP信号正常且电池电压充足的情况下，所有气缸无火花指向触发所有线圈的部件：点火控制模块或PCM线圈驱动器。ICM或PCM驱动器电路故障阻止初级电路的接通和断开以产生火花。"
  },
  {
    id: 128,
    q: "Technician A says a worn timing chain can cause ignition timing to be retarded. Technician B says a worn timing chain can set a CMP/CKP correlation DTC. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. A stretched timing chain allows the camshaft to lag behind its expected position relative to the crankshaft, effectively retarding valve and ignition timing. The PCM detects the discrepancy between CMP and CKP signals and may set a correlation DTC such as P0016.",
    diagram: "",
    terms: ["camshaft", "crankshaft_position_sensor", "dtc", "timing_chain"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "技师A说磨损的正时链条可导致点火正时偏迟。技师B说磨损的正时链条可设置CMP/CKP关联DTC。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都正确。拉长的正时链条允许凸轮轴相对于曲轴滞后于预期位置，有效地推迟了配气和点火正时。PCM检测到CMP和CKP信号之间的偏差，可能设置P0016等关联DTC。"
  },
  {
    id: 129,
    q: "During a secondary ignition pattern analysis, one cylinder shows a firing voltage of 5 kV while others are at 12 kV. This indicates:",
    options: [
      "A) That cylinder has high compression",
      "B) That cylinder has a fouled plug or shorted secondary path",
      "C) The ignition system is normal",
      "D) That cylinder has a wide spark plug gap"
    ],
    answer: 1,
    explanation: "A firing voltage significantly lower than the other cylinders indicates reduced resistance in the secondary circuit. A fouled spark plug provides a conductive path, or the secondary voltage may be shorting to ground through a cracked boot or wire. The spark takes the easiest path with least resistance.",
    diagram: "",
    terms: ["spark_plug", "ignition_coil", "misfire"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Spark Plug Reading and Diagnosis",
    qChinese: "次级点火波形分析中，一个气缸的点火电压为5 kV，其他气缸为12 kV。这表明：",
    optionsChinese: [
      "A) 该气缸压缩压力高",
      "B) 该气缸火花塞积碳或次级通路短路",
      "C) 点火系统正常",
      "D) 该气缸火花塞间隙大"
    ],
    explanationChinese: "点火电压明显低于其他气缸表明次级电路中电阻降低。积碳的火花塞提供了导电路径，或次级电压通过破裂的护套或高压线对地短路。火花选择阻力最小的最容易的路径。"
  },
  {
    id: 130,
    q: "A vehicle equipped with an electronic spark advance system has a DTC P0327 (Knock Sensor 1 Circuit Low). The MOST likely cause is:",
    options: [
      "A) A faulty knock sensor or open wiring",
      "B) A clogged fuel filter",
      "C) A faulty MAP sensor",
      "D) Low engine oil pressure"
    ],
    answer: 0,
    explanation: "P0327 indicates the knock sensor circuit voltage is below the expected range. This is typically caused by a faulty knock sensor, an open or high-resistance connection in the sensor wiring, or a loose sensor mounting. Proper torque on the sensor mounting bolt is critical for accurate vibration detection.",
    diagram: "",
    terms: ["pcm", "dtc", "dmm", "detonation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "配备电子点火提前系统的车辆有DTC P0327（爆震传感器1电路低）。最可能的原因是：",
    optionsChinese: [
      "A) 爆震传感器故障或线路断路",
      "B) 燃油滤清器堵塞",
      "C) MAP传感器故障",
      "D) 发动机机油压力低"
    ],
    explanationChinese: "P0327表明爆震传感器电路电压低于预期范围。通常由爆震传感器故障、传感器线路断路或高电阻连接、或传感器安装松动引起。传感器安装螺栓的正确扭矩对准确的振动检测至关重要。"
  },
  {
    id: 131,
    q: "A spark plug wire has a resistance of 25,000 ohms per foot. The specification is 10,000 ohms per foot maximum. This wire will cause:",
    options: [
      "A) No effect on engine performance",
      "B) Possible misfire due to excessive resistance reducing spark energy",
      "C) The engine to run rich",
      "D) Increased fuel pressure"
    ],
    answer: 1,
    explanation: "Excessive spark plug wire resistance limits the current flow through the secondary circuit, weakening the spark. This can cause intermittent misfires, especially under load when higher firing voltage is needed. The wire should be replaced with one meeting the manufacturer's specification for resistance per foot.",
    diagram: "",
    terms: ["spark_plug", "ignition_coil", "misfire", "ohms_law"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Ignition System - How It Works",
    qChinese: "火花塞线电阻为每英尺25,000欧姆。规格要求最大每英尺10,000欧姆。这根线将导致：",
    optionsChinese: [
      "A) 对发动机性能无影响",
      "B) 由于电阻过大降低火花能量而可能失火",
      "C) 发动机运行过浓",
      "D) 燃油压力增加"
    ],
    explanationChinese: "过大的火花塞线电阻限制次级电路中的电流流动，削弱火花。这可能导致间歇性失火，尤其在需要更高点火电压的负荷工况下。应更换符合制造商每英尺电阻规格的线。"
  },
  {
    id: 132,
    q: "The CMP sensor in a sequential fuel injection system is used to identify:",
    options: [
      "A) Engine oil level",
      "B) Which cylinder is on its compression stroke for correct injector sequencing",
      "C) The air-fuel ratio",
      "D) Exhaust gas temperature"
    ],
    answer: 1,
    explanation: "Sequential fuel injection requires knowing which cylinder is ready for its intake stroke. The CMP sensor identifies camshaft position, allowing the PCM to determine which cylinder is on compression and fire the correct injector just before the intake valve opens. Without it, the system defaults to batch fire.",
    diagram: "",
    terms: ["camshaft", "fuel_injector", "pcm", "crankshaft_position_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=Bfq5Dkf7hYs",
    youtubeTitle: "How Fuel Injectors Work",
    qChinese: "顺序喷射系统中的CMP传感器用于识别：",
    optionsChinese: [
      "A) 发动机油位",
      "B) 哪个气缸处于压缩冲程以正确排序喷油",
      "C) 空燃比",
      "D) 排气温度"
    ],
    explanationChinese: "顺序喷射需要知道哪个气缸准备进入进气冲程。CMP传感器识别凸轮轴位置，使PCM能确定哪个气缸在压缩冲程，并在进气门打开前触发正确的喷油器。没有CMP信号，系统会默认为分组喷射。"
  },
  {
    id: 133,
    q: "A vehicle with a DIS ignition system has spark on cylinders 2 and 3 (companion pair) but no spark on cylinders 1 and 4 (companion pair). The MOST likely cause is:",
    options: [
      "A) A faulty CKP sensor",
      "B) A faulty coil pack for the 1/4 companion pair",
      "C) A defective PCM",
      "D) All spark plugs need replacement"
    ],
    answer: 1,
    explanation: "In a DIS system, each coil fires a companion pair. Since cylinders 2 and 3 have spark, the CKP sensor and PCM are functioning. The lack of spark only on the 1/4 pair isolates the problem to the coil pack responsible for that pair, its wiring, or its connector.",
    diagram: "",
    terms: ["ignition_coil", "spark_plug", "crankshaft_position_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Ignition System - How It Works",
    qChinese: "配备DIS点火系统的车辆2号和3号气缸（配对气缸）有火花，但1号和4号气缸（配对气缸）无火花。最可能的原因是：",
    optionsChinese: [
      "A) CKP传感器故障",
      "B) 负责1/4配对气缸的线圈组故障",
      "C) PCM缺陷",
      "D) 所有火花塞需要更换"
    ],
    explanationChinese: "在DIS系统中，每个线圈点燃一对配对气缸。由于2号和3号气缸有火花，CKP传感器和PCM工作正常。仅1/4配对无火花将问题隔离到负责该配对的线圈组、其线路或接插件。"
  },
  {
    id: 134,
    q: "Pre-ignition differs from detonation in that pre-ignition:",
    options: [
      "A) Occurs after the spark plug fires",
      "B) Is caused by a hot spot in the combustion chamber igniting the mixture before the spark event",
      "C) Only occurs at idle",
      "D) Is detected by the MAF sensor"
    ],
    answer: 1,
    explanation: "Pre-ignition occurs when a hot spot such as a glowing carbon deposit, overheated spark plug tip, or sharp edge ignites the air-fuel mixture before the spark plug fires. Detonation occurs after normal ignition when remaining unburned mixture spontaneously combusts due to pressure and heat. Both damage engines.",
    diagram: "",
    terms: ["spark_plug", "detonation", "ignition_coil"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Spark_plug.jpg/640px-Spark_plug.jpg",
    youtube: "https://www.youtube.com/watch?v=LpHw_VK7izo",
    youtubeTitle: "Engine Knock and Detonation Causes",
    qChinese: "早燃与爆震的区别在于早燃：",
    optionsChinese: [
      "A) 发生在火花塞点火之后",
      "B) 由燃烧室中的热点在点火事件之前点燃混合气引起",
      "C) 仅在怠速时发生",
      "D) 由MAF传感器检测"
    ],
    explanationChinese: "早燃发生在热点（如发光的积碳、过热的火花塞尖端或尖锐边缘）在火花塞点火之前点燃空燃混合气时。爆震发生在正常点火后，剩余未燃混合气由于压力和热量自发燃烧。两者都会损坏发动机。"
  },
  {
    id: 135,
    q: "A scan tool shows ignition timing at 0 degrees BTDC at idle. The specification is 10 degrees BTDC. A possible cause is:",
    options: [
      "A) A faulty oxygen sensor",
      "B) The PCM is retarding timing due to knock sensor input or a fault condition",
      "C) The EGR valve is stuck closed",
      "D) The air filter is new"
    ],
    answer: 1,
    explanation: "If the PCM is commanding zero timing advance, it may be responding to knock sensor activity by retarding timing to protect the engine. A faulty knock sensor sending false knock signals, low-octane fuel, carbon buildup, or a PCM fault condition can cause excessive timing retard at idle.",
    diagram: "",
    terms: ["pcm", "ignition_coil", "scan_tool", "detonation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "诊断仪显示怠速时点火正时为上止点前0度。规格值为上止点前10度。可能的原因是：",
    optionsChinese: [
      "A) 氧传感器故障",
      "B) PCM由于爆震传感器输入或故障条件而推迟正时",
      "C) EGR阀卡闭",
      "D) 空气滤清器是新的"
    ],
    explanationChinese: "如果PCM命令零正时提前，可能是响应爆震传感器活动而推迟正时以保护发动机。爆震传感器发送错误信号、低辛烷值燃油、积碳或PCM故障条件都可能导致怠速时正时过度推迟。"
  },

  // --- FUEL SYSTEM (136–155) ---
  {
    id: 136,
    q: "A GDI engine requires fuel pressure in the range of:",
    options: [
      "A) 30-60 psi",
      "B) 500-3,000 psi",
      "C) 5-15 psi",
      "D) 100-200 psi"
    ],
    answer: 1,
    explanation: "Gasoline direct injection systems operate at much higher fuel pressures than port fuel injection, typically 500 to 3,000 psi or more. A high-pressure mechanical pump driven by the camshaft boosts fuel pressure from the low-pressure electric pump to enable precise injection directly into the combustion chamber.",
    diagram: "",
    terms: ["fuel_injector", "pcm", "camshaft"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=Bfq5Dkf7hYs",
    youtubeTitle: "How Fuel Injectors Work",
    qChinese: "GDI发动机所需的燃油压力范围为：",
    optionsChinese: [
      "A) 30-60 psi",
      "B) 500-3,000 psi",
      "C) 5-15 psi",
      "D) 100-200 psi"
    ],
    explanationChinese: "缸内直喷系统的燃油压力远高于进气道喷射，通常为500至3,000 psi或更高。由凸轮轴驱动的高压机械泵将低压电动泵的燃油压力升高，以实现精确地直接喷入燃烧室。"
  },
  {
    id: 137,
    q: "Fuel trim values of STFT +5% and LTFT +3% at idle and cruise indicate:",
    options: [
      "A) A significant lean condition",
      "B) A significant rich condition",
      "C) Normal fuel system operation within acceptable range",
      "D) A faulty oxygen sensor"
    ],
    answer: 2,
    explanation: "Fuel trim values within plus or minus 10% are generally considered normal. STFT of +5% and LTFT of +3% indicate the PCM is making only minor fuel corrections, which is within the acceptable range for normal closed-loop operation. Values exceeding plus or minus 10% warrant further investigation.",
    diagram: "",
    terms: ["fuel_trim", "scan_tool", "pcm", "oxygen_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=cBzsOD3Yl28",
    youtubeTitle: "Understanding Fuel Trims for Diagnosis",
    qChinese: "怠速和巡航时燃油修正值STFT +5%和LTFT +3%表明：",
    optionsChinese: [
      "A) 明显的过稀状况",
      "B) 明显的过浓状况",
      "C) 燃油系统在可接受范围内正常运行",
      "D) 氧传感器故障"
    ],
    explanationChinese: "燃油修正值在正负10%以内通常被认为是正常的。STFT +5%和LTFT +3%表明PCM仅进行了微小的燃油调整，在正常闭环运行的可接受范围内。超过正负10%的值需要进一步检查。"
  },
  {
    id: 138,
    q: "A fuel injector balance test (injector drop test) shows one injector causing a 5 psi pressure drop while the others cause a 3 psi drop. This indicates that injector is:",
    options: [
      "A) Clogged and restricted",
      "B) Delivering more fuel than the others (leaking or stuck open longer)",
      "C) Operating normally",
      "D) Electrically open"
    ],
    answer: 1,
    explanation: "In a fuel injector balance test, each injector is pulsed for the same duration. A larger pressure drop means more fuel was delivered. The injector causing a 5 psi drop versus 3 psi is flowing more fuel, indicating it may be leaking, have a worn pintle, or not sealing properly when closed.",
    diagram: "",
    terms: ["fuel_injector", "scan_tool", "fuel_trim"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=Bfq5Dkf7hYs",
    youtubeTitle: "How Fuel Injectors Work",
    qChinese: "喷油器平衡测试（喷油器压降测试）显示一个喷油器导致5 psi压降，而其他喷油器为3 psi。这表明该喷油器：",
    optionsChinese: [
      "A) 堵塞受限",
      "B) 比其他喷油器供油更多（泄漏或开启时间过长）",
      "C) 工作正常",
      "D) 电气断路"
    ],
    explanationChinese: "在喷油器平衡测试中，每个喷油器脉冲相同的时间。更大的压降意味着供油更多。导致5 psi压降的喷油器比3 psi的流量更大，表明它可能泄漏、针阀磨损或关闭时密封不良。"
  },
  {
    id: 139,
    q: "A vehicle with a returnless fuel system has a DTC P0087 (Fuel Rail Pressure Too Low). The technician should check all of the following EXCEPT:",
    options: [
      "A) Fuel pump output and wiring",
      "B) Fuel filter for restriction",
      "C) Fuel rail pressure sensor and its wiring",
      "D) The secondary air injection pump"
    ],
    answer: 3,
    explanation: "P0087 indicates fuel rail pressure is below the expected level. The technician should check the fuel pump, fuel filter, fuel lines for restriction, and the pressure sensor. The secondary air injection pump is part of the emissions system and does not affect fuel rail pressure.",
    diagram: "",
    terms: ["fuel_injector", "dtc", "pcm", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=Bfq5Dkf7hYs",
    youtubeTitle: "How Fuel Injectors Work",
    qChinese: "无回油管燃油系统车辆有DTC P0087（燃油轨压力过低）。技师应检查以下所有项目，除了：",
    optionsChinese: [
      "A) 燃油泵输出和线路",
      "B) 燃油滤清器是否堵塞",
      "C) 燃油轨压力传感器及其线路",
      "D) 二次空气喷射泵"
    ],
    explanationChinese: "P0087表明燃油轨压力低于预期水平。技师应检查燃油泵、燃油滤清器、燃油管路是否受阻以及压力传感器。二次空气喷射泵属于排放系统，不影响燃油轨压力。"
  },
  {
    id: 140,
    q: "Technician A says a MAF sensor can be cleaned with MAF-specific electronic cleaner. Technician B says using carburetor cleaner on a MAF sensor can damage the sensing element. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. A contaminated MAF sensor can often be restored by spraying it with MAF-specific electronic cleaner that evaporates without residue. Carburetor cleaner, brake cleaner, or other solvents can leave residues or damage the delicate hot-wire or hot-film sensing element.",
    diagram: "",
    terms: ["maf_sensor", "pcm", "fuel_trim"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=cBzsOD3Yl28",
    youtubeTitle: "MAF Sensor Testing and Cleaning",
    qChinese: "技师A说MAF传感器可以用MAF专用电子清洗剂清洁。技师B说使用化油器清洗剂清洁MAF传感器会损坏传感元件。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都正确。受污染的MAF传感器通常可以通过喷涂MAF专用电子清洗剂恢复，该清洗剂蒸发后不留残留。化油器清洗剂、制动器清洗剂或其他溶剂可能留下残留物或损坏精密的热线或热膜传感元件。"
  },
  {
    id: 141,
    q: "A fuel pressure regulator vacuum hose is pulled off at idle and raw fuel drips from the nipple. This indicates:",
    options: [
      "A) Normal operation",
      "B) A ruptured fuel pressure regulator diaphragm",
      "C) Low fuel pressure",
      "D) A clogged fuel filter"
    ],
    answer: 1,
    explanation: "Fuel dripping from the vacuum nipple of a fuel pressure regulator indicates the internal diaphragm has ruptured. Fuel passes through the torn diaphragm into the vacuum hose and is drawn into the intake manifold, causing a rich condition, possible rough idle, and fuel odor from the exhaust.",
    diagram: "",
    terms: ["fuel_injector", "fuel_trim", "vacuum_gauge"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=Bfq5Dkf7hYs",
    youtubeTitle: "How Fuel Injectors Work",
    qChinese: "怠速时拔掉燃油压力调节器真空软管，接头处有燃油滴出。这表明：",
    optionsChinese: [
      "A) 正常运行",
      "B) 燃油压力调节器膜片破裂",
      "C) 燃油压力低",
      "D) 燃油滤清器堵塞"
    ],
    explanationChinese: "燃油从燃油压力调节器的真空接头滴出表明内部膜片已破裂。燃油通过撕裂的膜片进入真空软管并被吸入进气歧管，导致过浓状况、可能的怠速粗糙和排气燃油味。"
  },
  {
    id: 142,
    q: "A vehicle has positive fuel trims (+15% LTFT) at idle but negative fuel trims (-8% LTFT) at cruise. The MOST likely cause is:",
    options: [
      "A) A clogged fuel filter",
      "B) A vacuum leak that is a larger percentage of airflow at idle",
      "C) A faulty fuel pump",
      "D) A restricted catalytic converter"
    ],
    answer: 1,
    explanation: "Positive fuel trim at idle that changes to negative at cruise is characteristic of a vacuum leak. At idle the leak is a large percentage of total air, causing lean. At cruise the total airflow is much higher, the leak becomes insignificant, and the base fuel maps may overcompensate causing slightly rich trims.",
    diagram: "",
    terms: ["fuel_trim", "vacuum_gauge", "scan_tool", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=cBzsOD3Yl28",
    youtubeTitle: "Understanding Fuel Trims for Diagnosis",
    qChinese: "车辆怠速时正燃油修正（LTFT +15%），巡航时负燃油修正（LTFT -8%）。最可能的原因是：",
    optionsChinese: [
      "A) 燃油滤清器堵塞",
      "B) 真空泄漏在怠速时占气流比例较大",
      "C) 燃油泵故障",
      "D) 三元催化器受阻"
    ],
    explanationChinese: "怠速时正燃油修正变为巡航时负修正是真空泄漏的特征。怠速时泄漏占总空气量的大比例，导致过稀。巡航时总气流量大得多，泄漏变得不重要，基础燃油映射可能过度补偿导致略微偏浓的修正值。"
  },
  {
    id: 143,
    q: "A scan tool shows the MAF sensor reading 3.5 grams per second at idle. The specification is 5-7 grams per second. This will cause the engine to run:",
    options: [
      "A) Rich, because the PCM delivers too much fuel",
      "B) Lean, because the PCM calculates fuel based on the low MAF reading",
      "C) Normally, since the O2 sensor compensates",
      "D) With advanced ignition timing only"
    ],
    answer: 1,
    explanation: "The PCM uses the MAF reading to calculate fuel delivery. If the MAF reads lower than actual airflow, the PCM delivers less fuel than needed, causing a lean condition. The O2 sensor and fuel trims will try to compensate, but the initial fueling calculation will be insufficient for the actual air entering the engine.",
    diagram: "",
    terms: ["maf_sensor", "pcm", "fuel_trim", "fuel_injector"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=cBzsOD3Yl28",
    youtubeTitle: "MAF Sensor Testing and Cleaning",
    qChinese: "诊断仪显示MAF传感器怠速读数为3.5克/秒。规格值为5-7克/秒。这将导致发动机运行：",
    optionsChinese: [
      "A) 过浓，因为PCM供油过多",
      "B) 过稀，因为PCM基于偏低的MAF读数计算燃油",
      "C) 正常，因为氧传感器会补偿",
      "D) 仅点火正时提前"
    ],
    explanationChinese: "PCM使用MAF读数计算燃油供给。如果MAF读数低于实际气流量，PCM供油量少于所需，导致过稀。氧传感器和燃油修正会尝试补偿，但初始供油计算对实际进入发动机的空气量不足。"
  },
  {
    id: 144,
    q: "A fuel injector cleaning service is recommended when:",
    options: [
      "A) The engine has low mileage and runs well",
      "B) Injector flow tests show uneven flow rates between cylinders",
      "C) The battery voltage is low",
      "D) The transmission shifts harshly"
    ],
    answer: 1,
    explanation: "Fuel injector cleaning is recommended when flow testing reveals significant differences in flow rates between injectors, indicating partial clogging or deposit buildup on the injector tips. Uneven flow causes cylinder-to-cylinder fuel delivery variations leading to rough idle, misfires, and poor emissions.",
    diagram: "",
    terms: ["fuel_injector", "misfire", "fuel_trim"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=Bfq5Dkf7hYs",
    youtubeTitle: "How Fuel Injectors Work",
    qChinese: "以下情况建议进行喷油器清洗服务：",
    optionsChinese: [
      "A) 发动机里程低且运行良好",
      "B) 喷油器流量测试显示各缸之间流量不均",
      "C) 蓄电池电压低",
      "D) 变速箱换挡粗暴"
    ],
    explanationChinese: "当流量测试显示各喷油器之间的流量差异显著时，建议进行喷油器清洗，表明部分堵塞或喷嘴沉积物积累。不均匀的流量导致各缸燃油供给差异，引起怠速粗糙、失火和排放不良。"
  },
  {
    id: 145,
    q: "The stoichiometric air-fuel ratio for gasoline is approximately:",
    options: [
      "A) 8:1",
      "B) 14.7:1",
      "C) 20:1",
      "D) 10:1"
    ],
    answer: 1,
    explanation: "The stoichiometric air-fuel ratio for gasoline is approximately 14.7 parts air to 1 part fuel by weight. This ratio provides the most complete combustion with minimal excess air or fuel. The PCM targets this ratio during closed-loop operation for optimal catalytic converter efficiency and lowest emissions.",
    diagram: "",
    terms: ["stoichiometric", "fuel_trim", "oxygen_sensor", "catalytic_converter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=cBzsOD3Yl28",
    youtubeTitle: "Understanding Fuel Trims for Diagnosis",
    qChinese: "汽油的化学计量空燃比约为：",
    optionsChinese: [
      "A) 8:1",
      "B) 14.7:1",
      "C) 20:1",
      "D) 10:1"
    ],
    explanationChinese: "汽油的化学计量空燃比约为14.7份空气对1份燃油（按重量）。此比例提供最完全的燃烧，最少的多余空气或燃油。PCM在闭环运行期间以此比例为目标，以获得最佳的催化转化器效率和最低排放。"
  },
  {
    id: 146,
    q: "An electric fuel pump is not running when the key is turned to ON. The FIRST thing to check is:",
    options: [
      "A) The fuel injectors",
      "B) The fuel pump fuse and relay",
      "C) The spark plugs",
      "D) The catalytic converter"
    ],
    answer: 1,
    explanation: "The fuel pump fuse and relay are the simplest and most common causes of a non-running fuel pump. A blown fuse or faulty relay prevents power from reaching the pump. Checking these first follows proper diagnostic procedure from simplest to most complex before testing the pump motor or wiring directly.",
    diagram: "",
    terms: ["fuse", "relay", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=Bfq5Dkf7hYs",
    youtubeTitle: "How Fuel Injectors Work",
    qChinese: "钥匙转到ON位置时电动燃油泵不运转。首先应检查的是：",
    optionsChinese: [
      "A) 喷油器",
      "B) 燃油泵保险丝和继电器",
      "C) 火花塞",
      "D) 三元催化器"
    ],
    explanationChinese: "燃油泵保险丝和继电器是燃油泵不运转最简单和最常见的原因。保险丝烧断或继电器故障阻止电力到达泵。先检查这些遵循从简单到复杂的正确诊断程序，然后再直接测试泵电机或线路。"
  },
  {
    id: 147,
    q: "A MAP sensor output should be approximately 1.0-1.5V at idle on a naturally aspirated engine. A reading of 4.0V at idle indicates:",
    options: [
      "A) Normal operation",
      "B) Very low manifold vacuum, possibly a large vacuum leak or open throttle",
      "C) The sensor is working perfectly",
      "D) High manifold vacuum"
    ],
    answer: 1,
    explanation: "A MAP sensor reads higher voltage with higher pressure (lower vacuum). A 4.0V reading at idle indicates the sensor sees near-atmospheric pressure, meaning very little vacuum is present. This suggests a large vacuum leak, a disconnected MAP hose, or the throttle is stuck open, preventing normal vacuum development.",
    diagram: "",
    terms: ["map_sensor", "pcm", "vacuum_gauge"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=kEIO1jjV-GQ",
    youtubeTitle: "MAP Sensor Function and Testing",
    qChinese: "自然吸气发动机怠速时MAP传感器输出应约为1.0-1.5V。怠速时读数为4.0V表明：",
    optionsChinese: [
      "A) 正常运行",
      "B) 歧管真空度很低，可能有较大真空泄漏或节气门开启",
      "C) 传感器工作完好",
      "D) 歧管真空度高"
    ],
    explanationChinese: "MAP传感器在压力较高（真空度较低）时电压较高。怠速时4.0V的读数表明传感器检测到接近大气压力，意味着几乎没有真空。这提示存在较大真空泄漏、MAP软管脱落或节气门卡开，阻止了正常真空的形成。"
  },
  {
    id: 148,
    q: "A vehicle has a no-start condition. The fuel pump runs and fuel pressure is within specification. A spark test shows good spark at all cylinders. The MOST likely cause is:",
    options: [
      "A) The fuel pump is weak",
      "B) No ignition spark",
      "C) Injectors not pulsing or a loss of injector pulse signal from the PCM",
      "D) A clogged air filter"
    ],
    answer: 2,
    explanation: "With confirmed good fuel pressure and spark, the three requirements for combustion are nearly met. The remaining issue is whether fuel is actually being injected. If the PCM is not sending pulse signals to the injectors due to a CMP sensor fault, wiring issue, or PCM problem, fuel will not enter the cylinders.",
    diagram: "",
    terms: ["fuel_injector", "pcm", "camshaft", "crankshaft_position_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=Bfq5Dkf7hYs",
    youtubeTitle: "How Fuel Injectors Work",
    qChinese: "车辆无法启动。燃油泵运转且燃油压力在规格范围内。火花测试显示所有气缸火花正常。最可能的原因是：",
    optionsChinese: [
      "A) 燃油泵衰弱",
      "B) 无点火火花",
      "C) 喷油器未脉冲或PCM丢失喷油器脉冲信号",
      "D) 空气滤清器堵塞"
    ],
    explanationChinese: "确认燃油压力和火花正常后，燃烧的三个要素几乎满足。剩余问题是燃油是否实际被喷射。如果PCM由于CMP传感器故障、线路问题或PCM问题未向喷油器发送脉冲信号，燃油将无法进入气缸。"
  },
  {
    id: 149,
    q: "Technician A says an air leak between the MAF sensor and the throttle body can cause a lean condition. Technician B says an air leak after the MAF sensor introduces unmetered air. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Any air that enters the intake after the MAF sensor is not measured by the sensor. The PCM calculates fuel based on the MAF reading, so the extra unmetered air creates a lean condition. Common leak points include cracked intake boots, loose clamps, and PCV hoses.",
    diagram: "",
    terms: ["maf_sensor", "fuel_trim", "pcm", "vacuum_gauge"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=cBzsOD3Yl28",
    youtubeTitle: "MAF Sensor Testing and Cleaning",
    qChinese: "技师A说MAF传感器与节气门体之间的空气泄漏会导致过稀。技师B说MAF传感器之后的空气泄漏引入了未计量的空气。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都正确。MAF传感器之后进入进气系统的任何空气都未被传感器测量。PCM基于MAF读数计算燃油，因此额外的未计量空气造成过稀状况。常见泄漏点包括进气管裂纹、卡箍松动和PCV软管。"
  },
  {
    id: 150,
    q: "The PCM controls injector pulse width based primarily on:",
    options: [
      "A) Battery voltage and alternator output",
      "B) Airflow (MAF or MAP), engine RPM, and oxygen sensor feedback",
      "C) Transmission gear position only",
      "D) Exhaust back-pressure readings"
    ],
    answer: 1,
    explanation: "Injector pulse width determines how long the injector stays open and how much fuel is delivered. The PCM calculates this based on airflow data from the MAF or MAP sensor, engine speed from the CKP sensor, and fine-tunes it using oxygen sensor feedback in closed loop for precise air-fuel ratio control.",
    diagram: "",
    terms: ["fuel_injector", "maf_sensor", "map_sensor", "pcm", "oxygen_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=Bfq5Dkf7hYs",
    youtubeTitle: "How Fuel Injectors Work",
    qChinese: "PCM主要基于以下因素控制喷油器脉宽：",
    optionsChinese: [
      "A) 蓄电池电压和发电机输出",
      "B) 气流量（MAF或MAP）、发动机转速和氧传感器反馈",
      "C) 仅变速箱挡位",
      "D) 排气背压读数"
    ],
    explanationChinese: "喷油器脉宽决定喷油器保持开启的时间和供油量。PCM基于来自MAF或MAP传感器的气流数据、来自CKP传感器的发动机转速进行计算，并在闭环中使用氧传感器反馈进行微调以精确控制空燃比。"
  },
  {
    id: 151,
    q: "A vehicle cranks for an extended time before starting, especially after sitting overnight. Fuel pressure bleeds down to 0 psi after shutdown. The MOST likely cause is:",
    options: [
      "A) A faulty ignition switch",
      "B) A leaking fuel injector or a faulty check valve in the fuel pump",
      "C) A worn starter motor",
      "D) A faulty CKP sensor"
    ],
    answer: 1,
    explanation: "Extended crank time after sitting is often caused by loss of residual fuel pressure. A leaking fuel injector or a faulty check valve in the fuel pump module allows fuel to drain back to the tank. The pump must rebuild pressure during cranking before the engine can start, causing extended crank time.",
    diagram: "",
    terms: ["fuel_injector", "pcm", "starter_motor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=Bfq5Dkf7hYs",
    youtubeTitle: "How Fuel Injectors Work",
    qChinese: "车辆启动时需要长时间起动，尤其是停放过夜后。熄火后燃油压力降至0 psi。最可能的原因是：",
    optionsChinese: [
      "A) 点火开关故障",
      "B) 喷油器泄漏或燃油泵单向阀故障",
      "C) 起动机磨损",
      "D) CKP传感器故障"
    ],
    explanationChinese: "停放后起动时间延长通常由残余燃油压力丧失引起。泄漏的喷油器或燃油泵模块中的单向阀故障允许燃油回流至油箱。泵必须在起动期间重建压力后发动机才能启动，导致起动时间延长。"
  },
  {
    id: 152,
    q: "A throttle position sensor (TPS) voltage sweeps from 0.5V to 4.5V but has a dead spot at 2.0V where the voltage drops to 0V momentarily. This indicates:",
    options: [
      "A) Normal TPS operation",
      "B) A worn resistive element in the TPS causing an intermittent open circuit",
      "C) A faulty MAP sensor",
      "D) Low battery voltage"
    ],
    answer: 1,
    explanation: "A TPS uses a resistive element and a wiper contact. A dead spot where voltage drops to zero during a smooth sweep indicates a worn area on the resistive track causing an open circuit at that position. This can cause hesitation or stumble when the throttle passes through that position.",
    diagram: "",
    terms: ["throttle_position_sensor", "pcm", "dmm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=Bfq5Dkf7hYs",
    youtubeTitle: "Throttle Body and TPS Explained",
    qChinese: "节气门位置传感器(TPS)电压从0.5V扫到4.5V，但在2.0V处有死区，电压瞬间降至0V。这表明：",
    optionsChinese: [
      "A) TPS正常运行",
      "B) TPS电阻元件磨损导致间歇性断路",
      "C) MAP传感器故障",
      "D) 蓄电池电压低"
    ],
    explanationChinese: "TPS使用电阻元件和滑动触点。在平滑扫描过程中电压降至零的死区表明电阻轨道上磨损区域在该位置导致断路。这可能在节气门经过该位置时导致犹豫或迟滞。"
  },
  {
    id: 153,
    q: "A vehicle runs fine at idle but bogs down under acceleration. The fuel pressure gauge shows pressure dropping from 40 psi at idle to 25 psi under load. The MOST likely cause is:",
    options: [
      "A) A faulty oxygen sensor",
      "B) A fuel pump that cannot maintain volume under high demand",
      "C) An EGR valve stuck closed",
      "D) A faulty knock sensor"
    ],
    answer: 1,
    explanation: "Fuel pressure that drops significantly under load indicates the fuel pump cannot deliver adequate volume at higher demand. The pump may be worn, the fuel filter may be restricted, or there may be a kink in the fuel line. The pump maintains pressure at low flow but fails when demand increases.",
    diagram: "",
    terms: ["fuel_injector", "fuel_trim", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=Bfq5Dkf7hYs",
    youtubeTitle: "How Fuel Injectors Work",
    qChinese: "车辆怠速运行正常但加速时迟滞。燃油压力表显示压力从怠速时40 psi降至负荷下25 psi。最可能的原因是：",
    optionsChinese: [
      "A) 氧传感器故障",
      "B) 燃油泵在高需求下无法维持流量",
      "C) EGR阀卡闭",
      "D) 爆震传感器故障"
    ],
    explanationChinese: "负荷下燃油压力明显下降表明燃油泵无法在高需求下提供充足的流量。泵可能磨损、燃油滤清器可能受阻或燃油管路可能被折弯。泵在低流量时维持压力但在需求增加时无法满足。"
  },
  {
    id: 154,
    q: "An electronic throttle control (ETC) system uses a throttle actuator motor and TPS sensors. If both TPS sensors fail simultaneously, the PCM will:",
    options: [
      "A) Continue operating normally",
      "B) Enter a limp-home or reduced power mode and limit engine speed",
      "C) Increase fuel pressure",
      "D) Advance ignition timing to compensate"
    ],
    answer: 1,
    explanation: "The electronic throttle control system relies on redundant TPS sensors for safety. If both sensors fail, the PCM cannot determine throttle position and enters a reduced power or limp-home mode to protect the vehicle and driver. Engine speed and power are severely limited until the fault is repaired.",
    diagram: "",
    terms: ["throttle_position_sensor", "pcm", "dtc", "mil_light"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=Bfq5Dkf7hYs",
    youtubeTitle: "Throttle Body and TPS Explained",
    qChinese: "电子节气门控制(ETC)系统使用节气门执行器电机和TPS传感器。如果两个TPS传感器同时失效，PCM将：",
    optionsChinese: [
      "A) 继续正常运行",
      "B) 进入跛行模式或降功率模式并限制发动机转速",
      "C) 增加燃油压力",
      "D) 提前点火正时进行补偿"
    ],
    explanationChinese: "电子节气门控制系统依赖冗余TPS传感器保障安全。如果两个传感器都失效，PCM无法确定节气门位置，进入降功率或跛行模式以保护车辆和驾驶员。发动机转速和功率被严重限制，直到故障修复。"
  },
  {
    id: 155,
    q: "A vehicle with a speed-density fuel system does NOT use a MAF sensor. Instead, the PCM calculates airflow using:",
    options: [
      "A) The oxygen sensor and fuel pressure only",
      "B) MAP sensor, IAT sensor, RPM, and volumetric efficiency tables",
      "C) The TPS and battery voltage",
      "D) Exhaust back-pressure readings"
    ],
    answer: 1,
    explanation: "A speed-density system calculates air entering the engine using manifold absolute pressure from the MAP sensor, intake air temperature from the IAT sensor, engine RPM from the CKP sensor, and pre-programmed volumetric efficiency tables in the PCM. This combination allows accurate airflow calculation without a MAF sensor.",
    diagram: "",
    terms: ["map_sensor", "pcm", "fuel_injector", "crankshaft_position_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=kEIO1jjV-GQ",
    youtubeTitle: "MAP Sensor Function and Testing",
    qChinese: "速度-密度燃油系统的车辆不使用MAF传感器。PCM通过以下方式计算气流量：",
    optionsChinese: [
      "A) 仅氧传感器和燃油压力",
      "B) MAP传感器、IAT传感器、转速和容积效率表",
      "C) TPS和蓄电池电压",
      "D) 排气背压读数"
    ],
    explanationChinese: "速度-密度系统使用来自MAP传感器的歧管绝对压力、来自IAT传感器的进气温度、来自CKP传感器的发动机转速以及PCM中预编程的容积效率表来计算进入发动机的空气量。这种组合无需MAF传感器即可准确计算气流量。"
  },

  // --- EMISSION CONTROLS (156–175) ---
  {
    id: 156,
    q: "A DTC P0402 (EGR Excessive Flow) is stored. The MOST likely cause is:",
    options: ["A) A clogged EGR passage", "B) An EGR valve stuck open or a leaking EGR gasket", "C) A faulty fuel pump", "D) A restricted catalytic converter"],
    answer: 1,
    explanation: "P0402 indicates more EGR flow than expected. An EGR valve stuck open allows exhaust gas to recirculate constantly, including at idle when EGR is not desired. A leaking EGR gasket or vacuum line holding the valve open can also cause excessive EGR flow detected by the PCM.",
    diagram: "",
    terms: ["egr_valve", "dtc", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=yx4LkP8yjVQ",
    youtubeTitle: "EGR Valve Function and Diagnosis",
    qChinese: "存储了DTC P0402（EGR过量流量）。最可能的原因是：",
    optionsChinese: ["A) EGR通道堵塞", "B) EGR阀卡开或EGR垫片泄漏", "C) 燃油泵故障", "D) 三元催化器受阻"],
    explanationChinese: "P0402表明EGR流量超过预期。EGR阀卡开允许排气持续回流，包括不需要EGR的怠速时。EGR垫片泄漏或保持阀门开启的真空管路也可导致PCM检测到的过量流量。"
  },
  {
    id: 157,
    q: "An O2 sensor heater circuit DTC P0135 (O2 Sensor Heater Circuit Bank 1 Sensor 1) is stored. The technician should check:",
    options: ["A) The fuel pressure regulator", "B) The O2 sensor heater resistance, power supply fuse, and ground circuit", "C) The EGR valve position", "D) The MAF sensor output"],
    answer: 1,
    explanation: "P0135 indicates a problem with the heated oxygen sensor heater element circuit. The technician should measure heater resistance with a DMM, verify the power supply fuse is intact, and check the ground circuit. The heater brings the sensor to operating temperature quickly for fast closed-loop entry.",
    diagram: "",
    terms: ["oxygen_sensor", "dtc", "dmm", "fuse"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lambda_sensor.jpg/640px-Lambda_sensor.jpg",
    youtube: "https://www.youtube.com/watch?v=GmOZvlJ8nxY",
    youtubeTitle: "Oxygen Sensor Operation and Diagnosis",
    qChinese: "存储了氧传感器加热器电路DTC P0135。技师应检查：",
    optionsChinese: ["A) 燃油压力调节器", "B) 氧传感器加热器电阻、电源保险丝和接地电路", "C) EGR阀位置", "D) MAF传感器输出"],
    explanationChinese: "P0135表明加热式氧传感器的加热元件电路有问题。技师应用万用表测量加热器电阻、验证电源保险丝完好并检查接地电路。加热器使传感器快速达到工作温度以快速进入闭环。"
  },
  {
    id: 158,
    q: "A catalytic converter temperature test shows the outlet temperature 50 degrees F COOLER than the inlet. This indicates:",
    options: ["A) Normal catalytic converter operation", "B) The converter is not functioning and is not converting pollutants", "C) The engine is overheating", "D) The O2 sensor is faulty"],
    answer: 1,
    explanation: "A properly functioning catalytic converter generates heat through exothermic chemical reactions. The outlet should be hotter than the inlet, typically 50-100 degrees F warmer. A cooler outlet indicates the converter is not performing its catalytic reactions and needs replacement.",
    diagram: "",
    terms: ["catalytic_converter", "oxygen_sensor", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lambda_sensor.jpg/640px-Lambda_sensor.jpg",
    youtube: "https://www.youtube.com/watch?v=GmOZvlJ8nxY",
    youtubeTitle: "Catalytic Converter Function and Testing",
    qChinese: "催化转化器温度测试显示出口温度比入口低50华氏度。这表明：",
    optionsChinese: ["A) 催化转化器正常运行", "B) 催化转化器未工作，未转化污染物", "C) 发动机过热", "D) 氧传感器故障"],
    explanationChinese: "正常工作的催化转化器通过放热化学反应产生热量。出口应比入口温度高，通常高50-100华氏度。出口温度较低表明催化器未执行催化反应，需要更换。"
  },
  {
    id: 159,
    q: "Technician A says the PCV system routes crankcase vapors into the intake manifold for combustion. Technician B says a stuck-open PCV valve can cause a lean condition at idle. Who is correct?",
    options: ["A) Technician A only", "B) Technician B only", "C) Both Technician A and Technician B", "D) Neither Technician A nor Technician B"],
    answer: 2,
    explanation: "Both technicians are correct. The PCV system draws crankcase blow-by gases into the intake for re-burning. A stuck-open PCV valve allows too much air from the crankcase into the intake at idle, creating a lean condition similar to a vacuum leak causing rough idle and increased emissions.",
    diagram: "",
    terms: ["pcv_valve", "vacuum_gauge", "fuel_trim"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=yx4LkP8yjVQ",
    youtubeTitle: "PCV Valve Function and Testing",
    qChinese: "技师A说PCV系统将曲轴箱蒸气引入进气歧管燃烧。技师B说PCV阀卡开可在怠速时导致过稀。谁是正确的？",
    optionsChinese: ["A) 仅技师A正确", "B) 仅技师B正确", "C) 技师A和技师B都正确", "D) 技师A和技师B都不正确"],
    explanationChinese: "两位技师都正确。PCV系统将曲轴箱窜气吸入进气系统再次燃烧。PCV阀卡开允许过多曲轴箱空气在怠速时进入进气，造成类似真空泄漏的过稀状况，导致怠速粗糙和排放增加。"
  },
  {
    id: 160,
    q: "A DTC P0443 (EVAP Purge Control Valve Circuit) is stored. The technician should check:",
    options: ["A) The catalytic converter efficiency", "B) The purge valve connector, wiring, and valve solenoid resistance", "C) The spark plug gap", "D) The fuel injector pulse width"],
    answer: 1,
    explanation: "P0443 indicates a problem with the EVAP purge control valve electrical circuit. The technician should check the connector for damage or corrosion, test the wiring for opens or shorts, and measure the solenoid resistance with a DMM to verify the valve is operational.",
    diagram: "",
    terms: ["evap_system", "dtc", "dmm", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=yx4LkP8yjVQ",
    youtubeTitle: "EVAP System Operation and Testing",
    qChinese: "存储了DTC P0443（EVAP清洗控制阀电路）。技师应检查：",
    optionsChinese: ["A) 催化转化器效率", "B) 清洗阀接插件、线路和阀电磁线圈电阻", "C) 火花塞间隙", "D) 喷油器脉宽"],
    explanationChinese: "P0443表明EVAP清洗控制阀电气电路有问题。技师应检查接插件是否损坏或腐蚀、测试线路是否断路或短路，并用万用表测量电磁线圈电阻以验证阀门工作正常。"
  },
  {
    id: 161,
    q: "High NOx emissions from the tailpipe are MOST commonly caused by:",
    options: ["A) A rich air-fuel mixture", "B) High combustion temperatures from a lean condition, inoperative EGR, or cooling system problem", "C) A clogged air filter", "D) A stuck-open PCV valve"],
    answer: 1,
    explanation: "NOx forms when combustion temperatures exceed approximately 2500 degrees F. Common causes include a lean air-fuel mixture, inoperative EGR system, overadvanced timing, carbon deposits raising compression, or cooling system issues causing the engine to run hot and increase nitrogen oxide formation.",
    diagram: "",
    terms: ["egr_valve", "oxygen_sensor", "coolant_temperature_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lambda_sensor.jpg/640px-Lambda_sensor.jpg",
    youtube: "https://www.youtube.com/watch?v=yx4LkP8yjVQ",
    youtubeTitle: "EGR Valve Function and Diagnosis",
    qChinese: "排气管NOx排放偏高最常见的原因是：",
    optionsChinese: ["A) 混合气过浓", "B) 过稀、EGR不工作或冷却系统问题导致的高燃烧温度", "C) 空气滤清器堵塞", "D) PCV阀卡开"],
    explanationChinese: "NOx在燃烧温度超过约2500华氏度时形成。常见原因包括混合气过稀、EGR系统不工作、正时过度提前、积碳提高压缩比或冷却系统问题导致发动机过热运行。"
  },
  {
    id: 162,
    q: "A DTC P0442 (EVAP System Small Leak Detected) is stored. The MOST appropriate test to locate the leak is:",
    options: ["A) A compression test", "B) An EVAP smoke test", "C) A fuel pressure test", "D) A power balance test"],
    answer: 1,
    explanation: "A smoke test introduces low-pressure smoke into the sealed EVAP system. Smoke escaping from any point identifies the leak location visually. This is the most effective method for finding small EVAP leaks required to be detected by OBD II for emissions compliance.",
    diagram: "",
    terms: ["evap_system", "dtc", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=yx4LkP8yjVQ",
    youtubeTitle: "EVAP System Operation and Testing",
    qChinese: "存储了DTC P0442（EVAP系统检测到小泄漏）。定位泄漏最合适的测试是：",
    optionsChinese: ["A) 压缩测试", "B) EVAP烟雾测试", "C) 燃油压力测试", "D) 功率平衡测试"],
    explanationChinese: "烟雾测试向密封的EVAP系统注入低压烟雾。从任何点逸出的烟雾可目视识别泄漏位置。这是找到OBD II排放要求检测的小型EVAP泄漏最有效的方法。"
  },
  {
    id: 163,
    q: "A stuck-closed EGR valve will cause:",
    options: ["A) Rough idle and stalling", "B) Increased NOx emissions and possible engine ping under load", "C) Decreased engine temperature", "D) Rich exhaust conditions"],
    answer: 1,
    explanation: "A stuck-closed EGR valve prevents exhaust gas recirculation during cruise and load conditions when EGR lowers combustion temperatures. Without EGR, combustion temperatures rise increasing NOx formation. The engine may also experience detonation under load due to excessive heat.",
    diagram: "",
    terms: ["egr_valve", "detonation", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=yx4LkP8yjVQ",
    youtubeTitle: "EGR Valve Function and Diagnosis",
    qChinese: "EGR阀卡闭会导致：",
    optionsChinese: ["A) 怠速粗糙和熄火", "B) NOx排放增加，负荷下可能出现爆震", "C) 发动机温度降低", "D) 排气过浓"],
    explanationChinese: "EGR阀卡闭在需要EGR降低燃烧温度的巡航和负荷工况下阻止排气再循环。没有EGR，燃烧温度升高增加NOx生成。由于过热，发动机在负荷下还可能出现爆震。"
  },
  {
    id: 164,
    q: "The upstream oxygen sensor is used by the PCM to:",
    options: ["A) Monitor catalytic converter efficiency", "B) Control the air-fuel ratio through closed-loop fuel management", "C) Measure exhaust back-pressure", "D) Regulate EGR valve position"],
    answer: 1,
    explanation: "The upstream O2 sensor provides air-fuel ratio feedback to the PCM for closed-loop fuel control. It switches between rich and lean signals, allowing the PCM to constantly adjust injector pulse width to maintain the stoichiometric ratio. The downstream sensor monitors catalytic converter efficiency.",
    diagram: "",
    terms: ["oxygen_sensor", "pcm", "fuel_trim", "catalytic_converter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lambda_sensor.jpg/640px-Lambda_sensor.jpg",
    youtube: "https://www.youtube.com/watch?v=GmOZvlJ8nxY",
    youtubeTitle: "Oxygen Sensor Operation and Diagnosis",
    qChinese: "上游氧传感器由PCM用于：",
    optionsChinese: ["A) 监测催化转化器效率", "B) 通过闭环燃油管理控制空燃比", "C) 测量排气背压", "D) 调节EGR阀位置"],
    explanationChinese: "上游氧传感器为PCM提供空燃比反馈进行闭环燃油控制。它在浓和稀信号之间切换，使PCM能持续调整喷油脉宽以维持化学计量比。下游传感器监测催化转化器效率。"
  },
  {
    id: 165,
    q: "A vehicle fails emissions for high CO and high HC but low NOx. This pattern indicates:",
    options: ["A) A lean air-fuel mixture", "B) A rich air-fuel mixture causing incomplete combustion", "C) An inoperative EGR system", "D) Overadvanced ignition timing"],
    answer: 1,
    explanation: "High CO and high HC with low NOx is a classic rich exhaust pattern. Excess fuel produces high CO from incomplete combustion and high HC from unburned fuel. Low NOx occurs because the rich mixture lowers combustion temperatures below the threshold for NOx formation.",
    diagram: "",
    terms: ["fuel_trim", "catalytic_converter", "oxygen_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=cBzsOD3Yl28",
    youtubeTitle: "Understanding Fuel Trims for Diagnosis",
    qChinese: "车辆排放测试CO和HC偏高但NOx低。这种模式表明：",
    optionsChinese: ["A) 混合气过稀", "B) 混合气过浓导致不完全燃烧", "C) EGR系统不工作", "D) 点火正时过度提前"],
    explanationChinese: "CO和HC偏高同时NOx低是典型的排气过浓模式。过量燃油产生不完全燃烧的高CO和未燃燃油的高HC。低NOx是因为过浓混合气将燃烧温度降至NOx形成阈值以下。"
  },
  {
    id: 166,
    q: "An EVAP system enhanced leak test requires the PCM to seal the system by closing the:",
    options: ["A) EGR valve and PCV valve", "B) Canister vent valve and monitoring fuel tank pressure changes", "C) Throttle body and MAP sensor", "D) Fuel injectors and ignition coils"],
    answer: 1,
    explanation: "During an enhanced EVAP leak test, the PCM closes the canister vent valve to seal the system and then monitors the fuel tank pressure sensor for pressure decay. A leak causes pressure to drop faster than the allowable rate, triggering an EVAP leak DTC.",
    diagram: "",
    terms: ["evap_system", "pcm", "dtc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=yx4LkP8yjVQ",
    youtubeTitle: "EVAP System Operation and Testing",
    qChinese: "EVAP系统增强泄漏测试要求PCM通过关闭以下部件密封系统：",
    optionsChinese: ["A) EGR阀和PCV阀", "B) 碳罐排放阀并监测油箱压力变化", "C) 节气门体和MAP传感器", "D) 喷油器和点火线圈"],
    explanationChinese: "在增强EVAP泄漏测试期间，PCM关闭碳罐排放阀以密封系统，然后监测油箱压力传感器的压力衰减。泄漏导致压力下降速度超过允许速率，触发EVAP泄漏DTC。"
  },
  {
    id: 167,
    q: "A five-gas exhaust analyzer shows 0% CO, 0 ppm HC, 14% CO2, 0.5% O2, and 0 ppm NOx. These readings indicate:",
    options: ["A) A rich air-fuel mixture", "B) Near-perfect combustion efficiency", "C) An engine misfire", "D) A faulty catalytic converter"],
    answer: 1,
    explanation: "These readings indicate excellent combustion. High CO2 near 14-15% with very low CO, HC, O2, and NOx means fuel is being almost completely burned at the stoichiometric ratio. This is the ideal exhaust composition for minimal pollution output.",
    diagram: "",
    terms: ["stoichiometric", "catalytic_converter", "oxygen_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lambda_sensor.jpg/640px-Lambda_sensor.jpg",
    youtube: "https://www.youtube.com/watch?v=GmOZvlJ8nxY",
    youtubeTitle: "Exhaust Gas Analysis for Diagnosis",
    qChinese: "五气排放分析仪显示CO 0%、HC 0 ppm、CO2 14%、O2 0.5%、NOx 0 ppm。这些读数表明：",
    optionsChinese: ["A) 混合气过浓", "B) 接近完美的燃烧效率", "C) 发动机失火", "D) 催化转化器故障"],
    explanationChinese: "这些读数表明燃烧效率极佳。CO2接近14-15%，CO、HC、O2和NOx都很低，意味着燃油在化学计量比下几乎完全燃烧。这是最低污染的理想排气成分。"
  },
  {
    id: 168,
    q: "Technician A says a failing catalytic converter can cause a P0420 DTC. Technician B says an exhaust leak upstream of the downstream O2 sensor can also cause a P0420 DTC. Who is correct?",
    options: ["A) Technician A only", "B) Technician B only", "C) Both Technician A and Technician B", "D) Neither Technician A nor Technician B"],
    answer: 2,
    explanation: "Both technicians are correct. P0420 indicates catalyst efficiency below threshold. A failing converter is the primary cause. However, an exhaust leak before the downstream O2 sensor can introduce outside air causing the sensor to mimic a failed converter pattern and trigger the same DTC.",
    diagram: "",
    terms: ["catalytic_converter", "oxygen_sensor", "dtc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lambda_sensor.jpg/640px-Lambda_sensor.jpg",
    youtube: "https://www.youtube.com/watch?v=GmOZvlJ8nxY",
    youtubeTitle: "Catalytic Converter Function and Testing",
    qChinese: "技师A说劣化的催化转化器可导致P0420 DTC。技师B说下游氧传感器上游的排气泄漏也可导致P0420。谁是正确的？",
    optionsChinese: ["A) 仅技师A正确", "B) 仅技师B正确", "C) 技师A和技师B都正确", "D) 技师A和技师B都不正确"],
    explanationChinese: "两位技师都正确。P0420表明催化器效率低于阈值。劣化催化器是主要原因。但下游氧传感器前的排气泄漏可引入外部空气，导致传感器模仿催化器失效模式并触发相同DTC。"
  },
  {
    id: 169,
    q: "A secondary air injection system that is not functioning during cold start will cause:",
    options: ["A) Increased HC and CO during the warm-up period", "B) Decreased engine power", "C) Increased fuel pressure", "D) Lower coolant temperature"],
    answer: 0,
    explanation: "The secondary air injection system provides additional oxygen during cold start to help oxidize HC and CO and to heat the catalytic converter faster. Without it, unburned hydrocarbons and carbon monoxide levels remain elevated during warm-up until the converter reaches its light-off temperature.",
    diagram: "",
    terms: ["catalytic_converter", "oxygen_sensor", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lambda_sensor.jpg/640px-Lambda_sensor.jpg",
    youtube: "https://www.youtube.com/watch?v=GmOZvlJ8nxY",
    youtubeTitle: "Catalytic Converter Function and Testing",
    qChinese: "冷启动时二次空气喷射系统不工作会导致：",
    optionsChinese: ["A) 暖机期间HC和CO排放增加", "B) 发动机功率降低", "C) 燃油压力增加", "D) 冷却液温度降低"],
    explanationChinese: "二次空气喷射系统在冷启动时提供额外氧气帮助氧化HC和CO，并加快催化转化器升温。没有它，HC和CO水平在暖机期间保持升高，直到催化器达到起燃温度。"
  },
  {
    id: 170,
    q: "DTCs P0171 (System Too Lean Bank 1) and P0174 (System Too Lean Bank 2) are both stored on a V6 engine. The MOST likely cause is:",
    options: ["A) A faulty injector on bank 1 only", "B) A common issue affecting both banks such as low fuel pressure or a MAF sensor fault", "C) A single vacuum leak on bank 2", "D) A faulty downstream O2 sensor"],
    answer: 1,
    explanation: "When lean codes are set on both banks simultaneously, the cause is likely something common to the entire engine. Low fuel pressure, a contaminated MAF sensor reading low, or a large vacuum leak at a common intake point affects fuel delivery to all cylinders on both banks equally.",
    diagram: "",
    terms: ["dtc", "fuel_trim", "maf_sensor", "fuel_injector"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=cBzsOD3Yl28",
    youtubeTitle: "Understanding Fuel Trims for Diagnosis",
    qChinese: "V6发动机同时存储了P0171和P0174过稀故障码。最可能的原因是：",
    optionsChinese: ["A) 仅Bank 1的喷油器故障", "B) 影响两侧的共同问题，如燃油压力低或MAF传感器故障", "C) 仅Bank 2侧的单一真空泄漏", "D) 下游氧传感器故障"],
    explanationChinese: "当两侧同时设置过稀故障码时，原因很可能是影响整台发动机的共同问题。燃油压力低、MAF传感器受污染读数偏低或公共进气处的大真空泄漏会同等影响两侧所有气缸的燃油供给。"
  },
  {
    id: 171,
    q: "The EVAP purge valve is normally:",
    options: ["A) Open at all times", "B) Closed and opened by the PCM when purge conditions are met", "C) Controlled by fuel pressure", "D) Mechanically operated by engine vacuum only"],
    answer: 1,
    explanation: "The EVAP purge valve is normally closed to keep fuel vapors stored in the charcoal canister. The PCM opens the purge valve when specific conditions are met such as operating temperature, closed-loop operation, and steady cruise to draw stored vapors into the intake for combustion.",
    diagram: "",
    terms: ["evap_system", "pcm", "fuel_trim"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=yx4LkP8yjVQ",
    youtubeTitle: "EVAP System Operation and Testing",
    qChinese: "EVAP清洗阀通常是：",
    optionsChinese: ["A) 始终打开", "B) 关闭的，当满足清洗条件时由PCM打开", "C) 由燃油压力控制", "D) 仅由发动机真空机械操作"],
    explanationChinese: "EVAP清洗阀通常处于关闭状态，将燃油蒸气储存在活性炭罐中。当满足特定条件时PCM打开清洗阀，如工作温度、闭环运行和稳定巡航，将储存的蒸气吸入进气歧管燃烧。"
  },
  {
    id: 172,
    q: "A vehicle with DTC P0141 has a blown O2 sensor heater fuse. After replacing the fuse, it blows again immediately. The MOST likely cause is:",
    options: ["A) A weak battery", "B) A short circuit in the O2 sensor heater element or its wiring", "C) A faulty MAF sensor", "D) Low coolant level"],
    answer: 1,
    explanation: "A fuse that blows immediately after replacement indicates a short circuit. The O2 sensor heater element may be internally shorted, or the heater wiring may be shorted to ground. The technician should disconnect the sensor and check for a short in the wiring before replacing the sensor.",
    diagram: "",
    terms: ["oxygen_sensor", "fuse", "dtc", "dmm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lambda_sensor.jpg/640px-Lambda_sensor.jpg",
    youtube: "https://www.youtube.com/watch?v=GmOZvlJ8nxY",
    youtubeTitle: "Oxygen Sensor Operation and Diagnosis",
    qChinese: "有DTC P0141的车辆氧传感器加热器保险丝烧断。更换后立即再次烧断。最可能的原因是：",
    optionsChinese: ["A) 蓄电池弱", "B) 氧传感器加热元件或其线路短路", "C) MAF传感器故障", "D) 冷却液液位低"],
    explanationChinese: "保险丝更换后立即烧断表明存在短路。氧传感器加热元件可能内部短路，或加热器线路可能对地短路。技师应断开传感器并检查线路短路后再更换传感器。"
  },
  {
    id: 173,
    q: "A catalytic converter substrate rattle is heard when tapping the converter. This indicates:",
    options: ["A) Normal converter operation", "B) The internal substrate has broken apart and the converter needs replacement", "C) The exhaust hangers are loose", "D) The oxygen sensor is faulty"],
    answer: 1,
    explanation: "A rattling sound when tapping the catalytic converter indicates the internal ceramic honeycomb substrate has broken apart. Broken substrate pieces can restrict exhaust flow, reduce converter efficiency, and potentially create a blockage. The converter must be replaced as it cannot be repaired.",
    diagram: "",
    terms: ["catalytic_converter", "oxygen_sensor", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lambda_sensor.jpg/640px-Lambda_sensor.jpg",
    youtube: "https://www.youtube.com/watch?v=GmOZvlJ8nxY",
    youtubeTitle: "Catalytic Converter Function and Testing",
    qChinese: "敲击催化转化器时听到基体碎裂声。这表明：",
    optionsChinese: ["A) 催化转化器正常工作", "B) 内部基体已破碎，催化器需要更换", "C) 排气吊架松动", "D) 氧传感器故障"],
    explanationChinese: "敲击催化转化器时发出碎裂声表明内部陶瓷蜂窝基体已破碎。破碎的基体碎片可限制排气流量、降低催化器效率并可能造成堵塞。催化器必须更换，因为无法修复。"
  },
  {
    id: 174,
    q: "An exhaust gas analyzer shows high CO2 readings above 15%. This indicates:",
    options: ["A) A lean air-fuel mixture", "B) Very efficient combustion near stoichiometric ratio", "C) A rich air-fuel mixture", "D) A severe engine misfire"],
    answer: 1,
    explanation: "CO2 is the product of complete combustion. High CO2 readings above 14-15% indicate the engine is burning fuel very efficiently at or near the stoichiometric ratio. Maximum CO2 output occurs when combustion is most complete, which is the goal of modern emissions systems.",
    diagram: "",
    terms: ["stoichiometric", "oxygen_sensor", "fuel_trim"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lambda_sensor.jpg/640px-Lambda_sensor.jpg",
    youtube: "https://www.youtube.com/watch?v=GmOZvlJ8nxY",
    youtubeTitle: "Exhaust Gas Analysis for Diagnosis",
    qChinese: "排气分析仪显示CO2读数超过15%。这表明：",
    optionsChinese: ["A) 混合气过稀", "B) 接近化学计量比的非常高效燃烧", "C) 混合气过浓", "D) 严重的发动机失火"],
    explanationChinese: "CO2是完全燃烧的产物。CO2读数超过14-15%表明发动机在化学计量比或接近该比例下非常高效地燃烧燃油。最大CO2输出发生在燃烧最完全时，这是现代排放系统的目标。"
  },
  {
    id: 175,
    q: "A PCV valve that rattles when shaken indicates:",
    options: ["A) The valve is stuck closed", "B) The valve is functioning and the internal plunger moves freely", "C) The valve is stuck open", "D) The valve needs immediate replacement"],
    answer: 1,
    explanation: "A PCV valve should rattle when shaken, confirming the internal plunger moves freely. A valve that does not rattle is stuck, either open or closed, and should be replaced. The plunger must move freely to regulate crankcase ventilation flow based on engine vacuum conditions.",
    diagram: "",
    terms: ["pcv_valve", "vacuum_gauge", "oil_pressure"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=yx4LkP8yjVQ",
    youtubeTitle: "PCV Valve Function and Testing",
    qChinese: "摇动PCV阀时发出咔嗒声表明：",
    optionsChinese: ["A) 阀门卡闭", "B) 阀门正常工作，内部柱塞自由移动", "C) 阀门卡开", "D) 阀门需要立即更换"],
    explanationChinese: "PCV阀摇动时应发出咔嗒声，确认内部柱塞自由移动。不发出咔嗒声的阀门卡住应更换。柱塞必须自由移动以根据发动机真空条件调节曲轴箱通风流量。"
  },

  // --- COMPUTERIZED ENGINE CONTROLS (176–200) ---
  {
    id: 176,
    q: "A scan tool displays PIDs (Parameter Identification Data). Which PID is MOST useful for determining if the engine has reached operating temperature?",
    options: ["A) Mass airflow rate", "B) Engine coolant temperature", "C) Throttle position", "D) Vehicle speed"],
    answer: 1,
    explanation: "The engine coolant temperature PID directly indicates whether the engine has reached operating temperature, typically 195-220 degrees F. This is critical for determining closed-loop readiness, thermostat operation, and whether temperature-dependent diagnostics should proceed.",
    diagram: "",
    terms: ["scan_tool", "coolant_temperature_sensor", "pcm", "obd2"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "诊断仪显示PID（参数识别数据）。以下哪个PID最适合判断发动机是否达到工作温度？",
    optionsChinese: ["A) 空气质量流量", "B) 发动机冷却液温度", "C) 节气门位置", "D) 车速"],
    explanationChinese: "发动机冷却液温度PID直接指示发动机是否达到工作温度，通常195-220华氏度。这对于确定闭环就绪状态、恒温器运行以及温度相关诊断是否应进行至关重要。"
  },
  {
    id: 177,
    q: "The OBD II DLC (Data Link Connector) is standardized to have how many pins?",
    options: ["A) 9 pins", "B) 12 pins", "C) 16 pins", "D) 20 pins"],
    answer: 2,
    explanation: "The OBD II DLC is a standardized 16-pin connector located within reach of the driver's seat, typically under the dashboard on the driver's side. Specific pins are assigned for battery power, ground, CAN communication lines, and manufacturer-specific protocols to ensure universal scan tool compatibility.",
    diagram: "",
    terms: ["obd2", "scan_tool", "can_bus"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "OBD II DLC（数据链接接插件）标准化为多少针脚？",
    optionsChinese: ["A) 9针", "B) 12针", "C) 16针", "D) 20针"],
    explanationChinese: "OBD II DLC是标准化的16针接插件，位于驾驶员座位可触及范围内，通常在驾驶员侧仪表板下方。特定针脚分配用于蓄电池电源、接地、CAN通信线路和制造商专用协议以确保通用诊断仪兼容性。"
  },
  {
    id: 178,
    q: "A DTC that begins with P0 indicates:",
    options: ["A) A manufacturer-specific powertrain code", "B) A generic (SAE standard) powertrain code", "C) A body control module code", "D) A chassis code"],
    answer: 1,
    explanation: "OBD II DTCs starting with P0 are generic SAE-standard powertrain codes that are the same across all manufacturers. P1 codes are manufacturer-specific powertrain codes. B codes are body, C codes are chassis, and U codes are network communication codes.",
    diagram: "",
    terms: ["dtc", "obd2", "scan_tool", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "以P0开头的DTC表明：",
    optionsChinese: ["A) 制造商专用动力总成故障码", "B) 通用（SAE标准）动力总成故障码", "C) 车身控制模块故障码", "D) 底盘故障码"],
    explanationChinese: "以P0开头的OBD II DTC是通用SAE标准动力总成故障码，在所有制造商中相同。P1码是制造商专用动力总成码。B码是车身，C码是底盘，U码是网络通信码。"
  },
  {
    id: 179,
    q: "Technician A says the PCM can adapt fuel delivery over time using long-term fuel trims. Technician B says long-term fuel trim corrections are stored in the PCM memory even after the engine is turned off. Who is correct?",
    options: ["A) Technician A only", "B) Technician B only", "C) Both Technician A and Technician B", "D) Neither Technician A nor Technician B"],
    answer: 2,
    explanation: "Both technicians are correct. Long-term fuel trim is a learned correction that the PCM stores in keep-alive memory to compensate for gradual changes like injector fouling, sensor drift, or small vacuum leaks. These values are retained with key off and are only reset when DTCs are cleared or battery is disconnected.",
    diagram: "",
    terms: ["fuel_trim", "pcm", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=cBzsOD3Yl28",
    youtubeTitle: "Understanding Fuel Trims for Diagnosis",
    qChinese: "技师A说PCM可以使用长期燃油修正随时间调整燃油供给。技师B说长期燃油修正值即使发动机关闭后仍存储在PCM存储器中。谁是正确的？",
    optionsChinese: ["A) 仅技师A正确", "B) 仅技师B正确", "C) 技师A和技师B都正确", "D) 技师A和技师B都不正确"],
    explanationChinese: "两位技师都正确。长期燃油修正是PCM存储在保活存储器中的学习修正，用于补偿喷油器积碳、传感器漂移或小真空泄漏等渐进变化。这些值在钥匙关闭时保留，仅在清除DTC或断开蓄电池时重置。"
  },
  {
    id: 180,
    q: "A bidirectional scan tool test is used to:",
    options: ["A) Only read sensor data", "B) Command the PCM to activate specific actuators for testing", "C) Replace the PCM software", "D) Charge the vehicle battery"],
    answer: 1,
    explanation: "Bidirectional scan tool tests allow the technician to command the PCM to activate specific actuators such as fuel injectors, ignition coils, EGR valves, and EVAP solenoids. This verifies actuator operation and PCM output driver function without relying on normal operating conditions to trigger them.",
    diagram: "",
    terms: ["scan_tool", "pcm", "fuel_injector", "egr_valve"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "双向诊断仪测试用于：",
    optionsChinese: ["A) 仅读取传感器数据", "B) 命令PCM激活特定执行器进行测试", "C) 更换PCM软件", "D) 为车辆蓄电池充电"],
    explanationChinese: "双向诊断仪测试允许技师命令PCM激活特定执行器，如喷油器、点火线圈、EGR阀和EVAP电磁阀。这验证了执行器操作和PCM输出驱动功能，无需依赖正常工况条件来触发。"
  },
  {
    id: 181,
    q: "After a battery disconnect and reconnect, the engine idles roughly for a short time. This is because:",
    options: ["A) The battery is weak", "B) The PCM lost its learned idle and fuel trim values and must relearn them", "C) The spark plugs need replacement", "D) The fuel filter is clogged"],
    answer: 1,
    explanation: "Disconnecting the battery clears the PCM keep-alive memory, including learned idle speed position, fuel trim corrections, and shift points. The rough idle occurs while the PCM relearns these values through its adaptive strategy during the first several drive cycles after power is restored.",
    diagram: "",
    terms: ["pcm", "fuel_trim", "battery"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "蓄电池断开并重新连接后，发动机怠速短时间内粗糙。这是因为：",
    optionsChinese: ["A) 蓄电池弱", "B) PCM丢失了学习的怠速和燃油修正值，需要重新学习", "C) 火花塞需要更换", "D) 燃油滤清器堵塞"],
    explanationChinese: "断开蓄电池清除了PCM保活存储器，包括学习的怠速位置、燃油修正值和换挡点。粗糙怠速发生在PCM通过自适应策略在恢复电源后的最初几个行驶循环中重新学习这些值时。"
  },
  {
    id: 182,
    q: "A DTC P0131 (O2 Sensor Circuit Low Voltage Bank 1 Sensor 1) is stored. The MOST likely cause is:",
    options: ["A) A rich air-fuel mixture", "B) A lean exhaust condition, a faulty O2 sensor, or an open in the sensor signal wire", "C) A stuck-open EGR valve", "D) High fuel pressure"],
    answer: 1,
    explanation: "P0131 indicates the upstream O2 sensor voltage is consistently below the normal operating range. This can be caused by a persistent lean exhaust condition, a failed O2 sensor with low output, or an open circuit in the sensor signal wiring preventing the signal from reaching the PCM.",
    diagram: "",
    terms: ["oxygen_sensor", "dtc", "fuel_trim", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lambda_sensor.jpg/640px-Lambda_sensor.jpg",
    youtube: "https://www.youtube.com/watch?v=GmOZvlJ8nxY",
    youtubeTitle: "Oxygen Sensor Operation and Diagnosis",
    qChinese: "存储了DTC P0131（氧传感器电路低电压 Bank 1 传感器1）。最可能的原因是：",
    optionsChinese: ["A) 混合气过浓", "B) 排气过稀、氧传感器故障或传感器信号线断路", "C) EGR阀卡开", "D) 燃油压力偏高"],
    explanationChinese: "P0131表明上游氧传感器电压持续低于正常工作范围。可能由持续的排气过稀、氧传感器故障输出偏低或传感器信号线断路阻止信号到达PCM引起。"
  },
  {
    id: 183,
    q: "Mode $06 data on a scan tool provides:",
    options: ["A) Freeze frame data only", "B) Non-continuous monitor test results with pass/fail thresholds", "C) Fuel pump voltage readings", "D) Transmission shift schedules"],
    answer: 1,
    explanation: "Mode $06 provides detailed test results for non-continuous OBD II monitors including specific test values and their pass/fail thresholds. This data helps the technician see how close a system is to failing before a DTC is actually set, enabling proactive diagnosis of borderline conditions.",
    diagram: "",
    terms: ["obd2", "scan_tool", "dtc", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "诊断仪上的Mode $06数据提供：",
    optionsChinese: ["A) 仅冻结帧数据", "B) 非连续监测器测试结果及通过/失败阈值", "C) 燃油泵电压读数", "D) 变速箱换挡程序"],
    explanationChinese: "Mode $06提供非连续OBD II监测器的详细测试结果，包括具体测试值及其通过/失败阈值。这些数据帮助技师在DTC实际设置之前了解系统离失败有多近，实现对临界状况的主动诊断。"
  },
  {
    id: 184,
    q: "A vehicle has a P0136 (O2 Sensor Circuit Bank 1 Sensor 2). This sensor is located:",
    options: ["A) Before the catalytic converter", "B) After the catalytic converter", "C) In the intake manifold", "D) On the fuel rail"],
    answer: 1,
    explanation: "Bank 1 Sensor 2 refers to the downstream oxygen sensor located after the catalytic converter. Sensor 1 is the upstream sensor before the converter. The downstream sensor monitors catalytic converter efficiency by comparing its signal pattern to the upstream sensor signal pattern.",
    diagram: "",
    terms: ["oxygen_sensor", "catalytic_converter", "dtc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lambda_sensor.jpg/640px-Lambda_sensor.jpg",
    youtube: "https://www.youtube.com/watch?v=GmOZvlJ8nxY",
    youtubeTitle: "Oxygen Sensor Operation and Diagnosis",
    qChinese: "车辆有P0136（氧传感器电路 Bank 1 传感器2）。该传感器位于：",
    optionsChinese: ["A) 催化转化器之前", "B) 催化转化器之后", "C) 进气歧管内", "D) 燃油轨上"],
    explanationChinese: "Bank 1传感器2指位于催化转化器之后的下游氧传感器。传感器1是催化器之前的上游传感器。下游传感器通过将其信号模式与上游传感器信号模式比较来监测催化转化器效率。"
  },
  {
    id: 185,
    q: "A PCM reference voltage circuit typically provides:",
    options: ["A) 12 volts", "B) 5 volts", "C) 1 volt", "D) 9 volts"],
    answer: 1,
    explanation: "The PCM provides a regulated 5-volt reference voltage to many sensors including the TPS, MAP, and some pressure sensors. The sensor varies this voltage based on its reading, and the PCM interprets the return signal voltage to determine the measured parameter value for engine management calculations.",
    diagram: "",
    terms: ["pcm", "throttle_position_sensor", "map_sensor", "dmm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "PCM参考电压电路通常提供：",
    optionsChinese: ["A) 12伏", "B) 5伏", "C) 1伏", "D) 9伏"],
    explanationChinese: "PCM向许多传感器提供稳定的5伏参考电压，包括TPS、MAP和某些压力传感器。传感器根据其读数改变该电压，PCM解读返回信号电压来确定测量参数值用于发动机管理计算。"
  },
  {
    id: 186,
    q: "An OBD II drive cycle is performed to:",
    options: ["A) Break in a new engine", "B) Run all OBD II monitors to completion so they return to ready status", "C) Clean the fuel injectors", "D) Recharge the A/C system"],
    answer: 1,
    explanation: "An OBD II drive cycle is a specific sequence of driving conditions designed to allow all OBD II monitors to run and complete their self-tests. This is necessary after DTCs have been cleared, because clearing codes resets all monitors to not-ready status which must be restored for emissions testing.",
    diagram: "",
    terms: ["obd2", "dtc", "scan_tool", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "执行OBD II行驶循环是为了：",
    optionsChinese: ["A) 磨合新发动机", "B) 运行所有OBD II监测器至完成使其恢复就绪状态", "C) 清洗喷油器", "D) 为空调系统充注制冷剂"],
    explanationChinese: "OBD II行驶循环是设计的特定行驶条件序列，允许所有OBD II监测器运行并完成自检。这在清除DTC后是必要的，因为清除故障码将所有监测器重置为未就绪状态，必须恢复以进行排放测试。"
  },
  {
    id: 187,
    q: "Technician A says a scan tool can read live sensor data in real time. Technician B says a scan tool can display freeze frame data captured when a DTC was set. Who is correct?",
    options: ["A) Technician A only", "B) Technician B only", "C) Both Technician A and Technician B", "D) Neither Technician A nor Technician B"],
    answer: 2,
    explanation: "Both technicians are correct. Modern scan tools can display real-time live data streams showing current sensor values as the engine operates. They can also retrieve freeze frame data, which is a stored snapshot of sensor readings at the exact moment a DTC was triggered and stored in PCM memory.",
    diagram: "",
    terms: ["scan_tool", "dtc", "obd2", "freeze_frame"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "技师A说诊断仪可以实时读取传感器数据。技师B说诊断仪可以显示DTC设置时捕获的冻结帧数据。谁是正确的？",
    optionsChinese: ["A) 仅技师A正确", "B) 仅技师B正确", "C) 技师A和技师B都正确", "D) 技师A和技师B都不正确"],
    explanationChinese: "两位技师都正确。现代诊断仪可以显示发动机运行时当前传感器值的实时数据流。它们还可以检索冻结帧数据，这是DTC触发和存储在PCM存储器中时传感器读数的存储快照。"
  },
  {
    id: 188,
    q: "A DTC P0101 (MAF Circuit Range/Performance) is stored. This means:",
    options: ["A) The MAF sensor signal is outside the expected range for current operating conditions", "B) The MAF sensor has been unplugged", "C) The fuel filter is clogged", "D) The EGR valve is stuck open"],
    answer: 0,
    explanation: "P0101 indicates the MAF sensor signal does not match what the PCM expects based on other inputs like RPM, TPS position, and MAP sensor data. Common causes include a contaminated MAF element, air leaks after the MAF, an incorrect air filter, or an intake tract leak altering airflow readings.",
    diagram: "",
    terms: ["maf_sensor", "dtc", "pcm", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=cBzsOD3Yl28",
    youtubeTitle: "MAF Sensor Testing and Cleaning",
    qChinese: "存储了DTC P0101（MAF电路范围/性能）。这意味着：",
    optionsChinese: ["A) MAF传感器信号超出当前工况的预期范围", "B) MAF传感器已被拔掉", "C) 燃油滤清器堵塞", "D) EGR阀卡开"],
    explanationChinese: "P0101表明MAF传感器信号与PCM基于其他输入（如转速、TPS位置和MAP传感器数据）的预期不匹配。常见原因包括MAF元件受污染、MAF后空气泄漏、不正确的空气滤清器或进气管路泄漏改变气流读数。"
  },
  {
    id: 189,
    q: "The PCM uses the vehicle speed sensor (VSS) signal for all of the following EXCEPT:",
    options: ["A) Speedometer operation", "B) Torque converter clutch engagement", "C) Fuel injector pulse width at idle", "D) Cruise control operation"],
    answer: 2,
    explanation: "At idle, vehicle speed is zero and the VSS signal does not significantly influence injector pulse width calculation. The PCM uses the VSS for speedometer display, torque converter lockup control, cruise control, and speed-based emission strategies. Idle fuel delivery is based on airflow, RPM, and sensor feedback.",
    diagram: "",
    terms: ["pcm", "scan_tool", "fuel_injector"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "PCM使用车速传感器(VSS)信号用于以下所有功能，除了：",
    optionsChinese: ["A) 车速表操作", "B) 液力变矩器离合器接合", "C) 怠速时的喷油器脉宽", "D) 巡航控制操作"],
    explanationChinese: "怠速时车速为零，VSS信号不会显著影响喷油脉宽计算。PCM将VSS用于车速表显示、变矩器锁止控制、巡航控制和基于车速的排放策略。怠速供油基于气流量、转速和传感器反馈。"
  },
  {
    id: 190,
    q: "A DTC P0505 (Idle Air Control System) is stored on a vehicle with a cable-operated throttle body and IAC valve. The MOST likely cause is:",
    options: ["A) A faulty CKP sensor", "B) A faulty IAC valve, carbon buildup in the IAC passages, or a wiring fault", "C) Low transmission fluid", "D) A faulty knock sensor"],
    answer: 1,
    explanation: "P0505 indicates the idle air control system is not functioning as commanded by the PCM. Common causes include a faulty IAC valve motor, carbon buildup restricting the IAC bypass air passages, corroded electrical connections, or a wiring open or short in the IAC circuit.",
    diagram: "",
    terms: ["pcm", "dtc", "throttle_position_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=Bfq5Dkf7hYs",
    youtubeTitle: "Throttle Body and TPS Explained",
    qChinese: "拉线节气门体和IAC阀车辆存储了DTC P0505（怠速空气控制系统）。最可能的原因是：",
    optionsChinese: ["A) CKP传感器故障", "B) IAC阀故障、IAC通道积碳或线路故障", "C) 变速箱油液位低", "D) 爆震传感器故障"],
    explanationChinese: "P0505表明怠速空气控制系统未按PCM命令工作。常见原因包括IAC阀电机故障、限制IAC旁路气道的积碳、腐蚀的电气连接或IAC电路中的线路断路或短路。"
  },
  {
    id: 191,
    q: "A CAN bus communication failure between the PCM and other modules will MOST likely cause:",
    options: ["A) Only a rough idle condition", "B) Multiple DTCs, loss of communication codes (U-codes), and potential no-start", "C) A flat tire warning", "D) Only a fuel trim issue"],
    answer: 1,
    explanation: "CAN bus failures prevent modules from sharing data. This results in U-codes (network communication DTCs) in multiple modules. The PCM may lose critical inputs needed for engine operation causing no-start or limp mode. Multiple seemingly unrelated symptoms and codes across different systems often indicate a bus fault.",
    diagram: "",
    terms: ["can_bus", "pcm", "dtc", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "PCM与其他模块之间的CAN总线通信故障最可能导致：",
    optionsChinese: ["A) 仅怠速粗糙", "B) 多个DTC、通信丢失码（U码）和可能无法启动", "C) 轮胎气压警告", "D) 仅燃油修正问题"],
    explanationChinese: "CAN总线故障阻止模块共享数据。这导致多个模块中出现U码（网络通信DTC）。PCM可能丢失发动机运行所需的关键输入导致无法启动或跛行模式。跨不同系统的多个看似不相关的症状和故障码通常表明总线故障。"
  },
  {
    id: 192,
    q: "Technician A says the PCM grounds the fuel injector to turn it on. Technician B says the PCM controls injector pulse width by varying the ground time. Who is correct?",
    options: ["A) Technician A only", "B) Technician B only", "C) Both Technician A and Technician B", "D) Neither Technician A nor Technician B"],
    answer: 2,
    explanation: "Both technicians are correct. Most fuel injection systems supply battery voltage to the injector through a fuse or relay. The PCM completes the circuit by providing the ground path through an internal driver transistor. The duration of this ground signal is the injector pulse width which controls fuel delivery.",
    diagram: "",
    terms: ["fuel_injector", "pcm", "fuel_trim"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=Bfq5Dkf7hYs",
    youtubeTitle: "How Fuel Injectors Work",
    qChinese: "技师A说PCM通过接地喷油器来开启它。技师B说PCM通过改变接地时间来控制喷油脉宽。谁是正确的？",
    optionsChinese: ["A) 仅技师A正确", "B) 仅技师B正确", "C) 技师A和技师B都正确", "D) 技师A和技师B都不正确"],
    explanationChinese: "两位技师都正确。大多数燃油喷射系统通过保险丝或继电器向喷油器供应蓄电池电压。PCM通过内部驱动晶体管提供接地通路来完成电路。该接地信号的持续时间就是控制燃油供给的喷油脉宽。"
  },
  {
    id: 193,
    q: "A DTC P0340 (Camshaft Position Sensor Circuit) is set. The engine cranks but does not start. The technician should check:",
    options: ["A) The transmission fluid level", "B) The CMP sensor, its wiring, connector, and the reluctor wheel condition", "C) The brake pads", "D) The power steering fluid"],
    answer: 1,
    explanation: "P0340 indicates a problem with the CMP sensor circuit. Without a valid CMP signal, the PCM cannot determine cylinder position for sequential fuel injection and may prevent starting. The technician should inspect the sensor, wiring, connector for damage, and verify the reluctor ring is intact.",
    diagram: "",
    terms: ["camshaft", "dtc", "pcm", "crankshaft_position_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "设置了DTC P0340（凸轮轴位置传感器电路）。发动机可起动但无法启动。技师应检查：",
    optionsChinese: ["A) 变速箱油液位", "B) CMP传感器、其线路、接插件和信号轮状况", "C) 制动片", "D) 转向助力油液"],
    explanationChinese: "P0340表明CMP传感器电路有问题。没有有效的CMP信号，PCM无法确定气缸位置进行顺序喷射，可能阻止启动。技师应检查传感器、线路、接插件是否损坏，并验证信号环完好。"
  },
  {
    id: 194,
    q: "The three continuous OBD II monitors are:",
    options: ["A) Catalyst, EVAP, and EGR", "B) Misfire, fuel system, and comprehensive component", "C) O2 sensor, catalyst, and secondary air", "D) EVAP, EGR, and O2 sensor heater"],
    answer: 1,
    explanation: "The three continuous monitors run constantly whenever the engine is operating: the misfire monitor uses the CKP sensor to detect misfires, the fuel system monitor checks fuel trim corrections, and the comprehensive component monitor checks all input and output device circuits for electrical faults.",
    diagram: "",
    terms: ["obd2", "misfire", "fuel_trim", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "三个连续OBD II监测器是：",
    optionsChinese: ["A) 催化器、EVAP和EGR", "B) 失火、燃油系统和综合部件", "C) 氧传感器、催化器和二次空气", "D) EVAP、EGR和氧传感器加热器"],
    explanationChinese: "三个连续监测器在发动机运行时持续运行：失火监测器使用CKP传感器检测失火，燃油系统监测器检查燃油修正，综合部件监测器检查所有输入和输出装置电路的电气故障。"
  },
  {
    id: 195,
    q: "A scan tool shows the ECT sensor reading 240 degrees F but the engine temperature gauge on the dashboard shows normal. This indicates:",
    options: ["A) The ECT sensor is accurate and the gauge is faulty", "B) Possible ECT sensor fault since the gauge uses a separate sending unit on many vehicles", "C) The engine is severely overheating", "D) Normal operation during warm-up"],
    answer: 1,
    explanation: "Many vehicles use separate sensors for the dashboard gauge and the PCM. If the scan tool shows an abnormally high reading but the gauge reads normal, the ECT sensor sending data to the PCM may be faulty while the gauge sender is working correctly. The sensor should be tested with a DMM.",
    diagram: "",
    terms: ["coolant_temperature_sensor", "scan_tool", "pcm", "dmm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "诊断仪显示ECT传感器读数240华氏度，但仪表板温度表显示正常。这表明：",
    optionsChinese: ["A) ECT传感器准确，温度表故障", "B) 可能ECT传感器故障，因为许多车辆的温度表使用单独的发送器", "C) 发动机严重过热", "D) 暖机期间正常运行"],
    explanationChinese: "许多车辆为仪表板温度表和PCM使用独立的传感器。如果诊断仪显示异常高读数但温度表读数正常，则向PCM发送数据的ECT传感器可能故障，而温度表发送器工作正常。应用万用表测试传感器。"
  },
  {
    id: 196,
    q: "A technician needs to verify PCM output to an actuator. The BEST tool for this test is:",
    options: ["A) A compression gauge", "B) An oscilloscope or DMM measuring the control signal at the actuator connector", "C) A tire pressure gauge", "D) A coolant hydrometer"],
    answer: 1,
    explanation: "An oscilloscope or DMM at the actuator connector directly verifies that the PCM is sending the correct control signal. The scope shows signal waveform including frequency, duty cycle, and pulse width. A DMM can verify voltage presence and ground signals to confirm the PCM output driver is functioning.",
    diagram: "",
    terms: ["pcm", "dmm", "scan_tool", "fuel_injector"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "技师需要验证PCM对执行器的输出。最佳测试工具是：",
    optionsChinese: ["A) 压缩表", "B) 在执行器接插件处用示波器或万用表测量控制信号", "C) 轮胎气压表", "D) 冷却液比重计"],
    explanationChinese: "在执行器接插件处的示波器或万用表直接验证PCM是否发送正确的控制信号。示波器显示信号波形包括频率、占空比和脉宽。万用表可验证电压和接地信号以确认PCM输出驱动器工作正常。"
  },
  {
    id: 197,
    q: "A DTC P0507 (Idle Air Control System RPM Higher Than Expected) is stored. The MOST likely cause is:",
    options: ["A) A clogged fuel filter", "B) A vacuum leak or stuck-open IAC valve allowing excess air at idle", "C) A faulty alternator", "D) Worn brake pads"],
    answer: 1,
    explanation: "P0507 indicates the idle RPM is higher than the PCM target. A vacuum leak introduces unmetered air raising idle speed. A stuck-open IAC valve allows too much bypass air. A dirty throttle body with carbon holding the plate slightly open can also cause higher-than-expected idle RPM.",
    diagram: "",
    terms: ["pcm", "dtc", "vacuum_gauge", "throttle_position_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuel_injection_system.jpg/640px-Fuel_injection_system.jpg",
    youtube: "https://www.youtube.com/watch?v=Bfq5Dkf7hYs",
    youtubeTitle: "Throttle Body and TPS Explained",
    qChinese: "存储了DTC P0507（怠速空气控制系统转速高于预期）。最可能的原因是：",
    optionsChinese: ["A) 燃油滤清器堵塞", "B) 真空泄漏或IAC阀卡开允许怠速时过量空气", "C) 发电机故障", "D) 制动片磨损"],
    explanationChinese: "P0507表明怠速转速高于PCM目标。真空泄漏引入未计量空气提高怠速转速。IAC阀卡开允许过多旁路空气。节气门体积碳使节气门板微开也可导致怠速转速高于预期。"
  },
  {
    id: 198,
    q: "The PCM enters closed-loop fuel control when:",
    options: ["A) The engine is first cranked", "B) The oxygen sensor has reached operating temperature and is providing a valid signal", "C) The engine is at wide-open throttle", "D) The battery voltage drops below 10V"],
    answer: 1,
    explanation: "Closed-loop operation begins when the oxygen sensor reaches operating temperature and starts switching between rich and lean voltages. The PCM uses this feedback to continuously adjust fuel trim. Until the O2 sensor is ready, the PCM operates in open loop using preprogrammed fuel maps without feedback correction.",
    diagram: "",
    terms: ["pcm", "oxygen_sensor", "fuel_trim", "coolant_temperature_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lambda_sensor.jpg/640px-Lambda_sensor.jpg",
    youtube: "https://www.youtube.com/watch?v=GmOZvlJ8nxY",
    youtubeTitle: "Oxygen Sensor Operation and Diagnosis",
    qChinese: "PCM在以下情况下进入闭环燃油控制：",
    optionsChinese: ["A) 发动机首次起动时", "B) 氧传感器达到工作温度并提供有效信号时", "C) 发动机节气门全开时", "D) 蓄电池电压降至10V以下时"],
    explanationChinese: "闭环运行在氧传感器达到工作温度并开始在浓和稀电压之间切换时开始。PCM使用此反馈持续调整燃油修正。在氧传感器就绪之前，PCM以开环模式运行，使用预编程燃油映射表而无反馈修正。"
  },
  {
    id: 199,
    q: "A DTC P0420 is stored after a catalytic converter replacement with an aftermarket converter. The MOST likely cause is:",
    options: ["A) The new converter is defective or does not meet OEM efficiency specifications", "B) The fuel filter needs replacement", "C) The spark plugs are worn", "D) The EGR passage is clogged"],
    answer: 0,
    explanation: "Some aftermarket catalytic converters may not meet the OEM efficiency threshold required by the OBD II catalyst monitor. The downstream O2 sensor detects the lower conversion efficiency and the PCM sets P0420. An OEM-equivalent or CARB-certified converter may be required to clear the code.",
    diagram: "",
    terms: ["catalytic_converter", "dtc", "oxygen_sensor", "obd2"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lambda_sensor.jpg/640px-Lambda_sensor.jpg",
    youtube: "https://www.youtube.com/watch?v=GmOZvlJ8nxY",
    youtubeTitle: "Catalytic Converter Function and Testing",
    qChinese: "更换副厂催化转化器后存储了P0420 DTC。最可能的原因是：",
    optionsChinese: ["A) 新催化器有缺陷或不符合OEM效率规格", "B) 燃油滤清器需要更换", "C) 火花塞磨损", "D) EGR通道堵塞"],
    explanationChinese: "某些副厂催化转化器可能不满足OBD II催化器监测器要求的OEM效率阈值。下游氧传感器检测到较低的转化效率，PCM设置P0420。可能需要OEM等效或CARB认证的催化器才能清除该故障码。"
  },
  {
    id: 200,
    q: "A technician is diagnosing an intermittent no-start. The engine sometimes cranks and starts normally, other times it cranks but will not start. Wiggling the CKP sensor connector sometimes restores starting. The MOST likely cause is:",
    options: ["A) A faulty fuel pump", "B) A damaged or corroded CKP sensor connector causing intermittent signal loss", "C) Worn spark plugs", "D) A clogged air filter"],
    answer: 1,
    explanation: "An intermittent no-start that is affected by wiggling a connector strongly indicates a wiring or connector fault. Corrosion, damaged pins, loose terminals, or chafed wiring at the CKP sensor connector can cause intermittent signal loss. Without the CKP signal the PCM cannot fire the ignition or injectors.",
    diagram: "",
    terms: ["crankshaft_position_sensor", "pcm", "wiring_diagram", "dtc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OBD2_connector.jpg/640px-OBD2_connector.jpg",
    youtube: "https://www.youtube.com/watch?v=yBUxkrm3gGg",
    youtubeTitle: "Using a Scan Tool for Engine Diagnosis",
    qChinese: "技师正在诊断间歇性无法启动。发动机有时正常起动启动，有时起动但无法启动。摇动CKP传感器接插件有时可恢复启动。最可能的原因是：",
    optionsChinese: ["A) 燃油泵故障", "B) CKP传感器接插件损坏或腐蚀导致间歇性信号丢失", "C) 火花塞磨损", "D) 空气滤清器堵塞"],
    explanationChinese: "受摇动接插件影响的间歇性无法启动强烈表明线路或接插件故障。CKP传感器接插件处的腐蚀、针脚损坏、端子松动或线束磨损可导致间歇性信号丢失。没有CKP信号，PCM无法触发点火或喷油器。"
  }
];
