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
  }
];
