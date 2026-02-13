const questionsG1 = [
  // ===== ENGINE SYSTEMS (Questions 1–16) =====
  {
    id: 1,
    q: "During an oil change, the technician notices metal shavings in the drained oil. What should the technician do NEXT?",
    options: [
      "A) Install a new oil filter and refill with fresh oil",
      "B) Inform the customer and recommend further engine diagnosis",
      "C) Flush the engine with solvent before adding new oil",
      "D) Add an oil additive to reduce engine wear"
    ],
    answer: 1,
    explanation: "Metal shavings in the oil indicate potential internal engine damage such as bearing wear or component failure. The technician should inform the customer and recommend further diagnosis before simply completing the oil change. Ignoring this could lead to catastrophic engine failure.",
    diagram: "",
    terms: ["oil_change", "oil_pressure", "multipoint_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Oil_pump_of_an_automobile_engine.jpg/640px-Oil_pump_of_an_automobile_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "How to Change Your Engine Oil",
    qChinese: "在换油过程中，技师发现排出的机油中有金属碎屑。技师下一步应该怎么做？",
    optionsChinese: [
      "A) 安装新的机油滤清器并加注新机油",
      "B) 通知客户并建议进一步进行发动机诊断",
      "C) 在加注新机油之前用溶剂冲洗发动机",
      "D) 添加机油添加剂以减少发动机磨损"
    ],
    explanationChinese: "机油中的金属碎屑表明可能存在发动机内部损坏，如轴承磨损或部件故障。技师应通知客户并建议进一步诊断，而不是简单地完成换油。忽视这一问题可能导致发动机灾难性故障。",
  },
  {
    id: 2,
    q: "A vehicle's engine coolant is brown and has an oily film on the surface. What is the MOST likely cause?",
    options: [
      "A) The coolant has not been changed according to the maintenance schedule",
      "B) Engine oil or transmission fluid is leaking into the cooling system",
      "C) The wrong type of coolant was previously installed",
      "D) The radiator cap is not holding proper pressure"
    ],
    answer: 1,
    explanation: "An oily film on the coolant surface indicates that oil or automatic transmission fluid is contaminating the cooling system. This can be caused by a failed head gasket, cracked head, or a failed oil cooler or transmission cooler built into the radiator. Further diagnosis is required.",
    diagram: "",
    terms: ["head_gasket", "radiator", "transmission_cooler", "coolant_flush"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pqFZY6v6OQI",
    youtubeTitle: "Cooling System Flush and Fill",
    qChinese: "一辆车的发动机冷却液呈褐色，表面有油膜。最可能的原因是什么？",
    optionsChinese: [
      "A) 冷却液未按保养计划更换",
      "B) 发动机机油或变速箱油泄漏到冷却系统中",
      "C) 之前加注了错误类型的冷却液",
      "D) 散热器盖无法保持正常压力"
    ],
    explanationChinese: "冷却液表面的油膜表明机油或自动变速箱油正在污染冷却系统。这可能是由于气缸垫损坏、气缸盖开裂，或散热器内置的机油冷却器或变速箱冷却器故障造成的。需要进一步诊断。",
  },
  {
    id: 3,
    q: "Technician A says the engine oil level should be checked with the engine running. Technician B says the vehicle should be on a level surface when checking the oil. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 1,
    explanation: "Technician B is correct. The oil level should be checked with the engine off and the vehicle on a level surface so the oil can settle in the pan for an accurate reading. Checking with the engine running would give an inaccurate low reading since oil is circulating through the engine.",
    diagram: "",
    terms: ["oil_change", "oil_pressure", "multipoint_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Oil_pump_of_an_automobile_engine.jpg/640px-Oil_pump_of_an_automobile_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "How to Change Your Engine Oil",
    qChinese: "技师A说应在发动机运转时检查机油油位。技师B说检查机油时车辆应在水平面上。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "技师B是正确的。应在发动机熄火且车辆停在水平面上时检查机油油位，这样机油才能沉降到油底壳中以获得准确读数。在发动机运转时检查会得到偏低的不准确读数，因为机油正在发动机中循环。",
  },
  {
    id: 4,
    q: "Which of the following is the correct procedure for replacing a serpentine drive belt?",
    options: [
      "A) Pry the belt off the pulleys with a screwdriver",
      "B) Use the belt tensioner tool to release tension, then slide the belt off",
      "C) Loosen all accessory mounting bolts to create slack",
      "D) Cut the old belt off with a razor blade and install the new one"
    ],
    answer: 1,
    explanation: "The correct procedure is to use a wrench or belt tensioner tool to release the spring-loaded automatic tensioner, then slide the belt off the pulleys. A belt routing diagram should be referenced when installing the new belt to ensure it is routed correctly around all pulleys.",
    diagram: "",
    terms: ["serpentine_belt", "alternator", "power_steering_pump"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=W7_3viOGo18",
    youtubeTitle: "Serpentine Belt Replacement Guide",
    qChinese: "以下哪项是更换蛇形传动皮带的正确步骤？",
    optionsChinese: [
      "A) 用螺丝刀将皮带从皮带轮上撬下来",
      "B) 使用皮带张紧器工具释放张力，然后将皮带滑下",
      "C) 松开所有附件安装螺栓以产生松弛",
      "D) 用刀片切断旧皮带，然后安装新皮带"
    ],
    explanationChinese: "正确的步骤是使用扳手或皮带张紧器工具释放弹簧自动张紧器，然后将皮带从皮带轮上滑下。安装新皮带时应参考皮带走向图，确保皮带正确绕过所有皮带轮。",
  },
  {
    id: 5,
    q: "An engine air filter is being inspected during routine maintenance. All of the following are reasons to replace the air filter EXCEPT:",
    options: [
      "A) The filter is excessively dirty or clogged with debris",
      "B) The filter has been in service past the manufacturer's recommended interval",
      "C) The filter appears slightly dusty on the inlet side",
      "D) The filter element is torn or has holes in the media"
    ],
    answer: 2,
    explanation: "A slightly dusty air filter is normal and does not require replacement. Air filters should be replaced when they are excessively dirty, clogged, damaged, or have exceeded the manufacturer's recommended service interval. A light coating of dust shows the filter is doing its job.",
    diagram: "",
    terms: ["air_filter", "multipoint_inspection", "maf_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Engine Air Filter Replacement",
    qChinese: "在例行保养中检查发动机空气滤清器。以下所有情况都是更换空气滤清器的理由，除了：",
    optionsChinese: [
      "A) 滤清器过度脏污或被杂物堵塞",
      "B) 滤清器使用时间已超过制造商建议的更换周期",
      "C) 滤清器进气侧有轻微灰尘",
      "D) 滤清器滤芯破裂或有孔洞"
    ],
    explanationChinese: "空气滤清器上有轻微灰尘是正常的，不需要更换。空气滤清器应在过度脏污、堵塞、损坏或超过制造商建议的保养周期时更换。轻微的灰尘附着说明滤清器正在正常工作。",
  },
  {
    id: 6,
    q: "A vehicle has a glowing check engine light (MIL) and a DTC P0420 stored. What does this code MOST likely indicate?",
    options: [
      "A) Engine misfire detected",
      "B) Catalyst system efficiency below threshold",
      "C) Evaporative emission system leak detected",
      "D) Oxygen sensor heater circuit malfunction"
    ],
    answer: 1,
    explanation: "DTC P0420 indicates that the catalytic converter efficiency has fallen below the acceptable threshold for Bank 1. The PCM monitors converter efficiency by comparing upstream and downstream oxygen sensor signals. This code typically means the catalytic converter is no longer functioning properly.",
    diagram: "",
    terms: ["catalytic_converter", "oxygen_sensor", "dtc", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Essential Car Maintenance Checklist",
    qChinese: "一辆车的发动机故障灯（MIL）亮起，并存储了故障码P0420。该代码最可能表示什么？",
    optionsChinese: [
      "A) 检测到发动机失火",
      "B) 催化转化器系统效率低于阈值",
      "C) 检测到蒸发排放系统泄漏",
      "D) 氧传感器加热电路故障"
    ],
    explanationChinese: "故障码P0420表示第一组催化转化器效率已降至可接受阈值以下。PCM通过比较上游和下游氧传感器信号来监测催化转化器效率。该代码通常意味着催化转化器不再正常工作。",
  },
  {
    id: 7,
    q: "During an exhaust system inspection, a technician finds a small hole in the exhaust pipe between the catalytic converter and the muffler. What is the correct action?",
    options: [
      "A) Wrap the area with exhaust tape and return the vehicle to service",
      "B) Inform the customer the exhaust pipe needs to be repaired or replaced",
      "C) Ignore it if the vehicle passes an emissions test",
      "D) Plug the hole with exhaust putty as a permanent repair"
    ],
    answer: 1,
    explanation: "A hole in the exhaust pipe can allow toxic exhaust gases including carbon monoxide to enter the passenger compartment, creating a serious safety hazard. The customer should be informed and the pipe should be properly repaired or replaced. Tape and putty are only temporary fixes.",
    diagram: "",
    terms: ["catalytic_converter", "multipoint_inspection", "egr_valve"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Multi-Point Vehicle Inspection Walkthrough",
    qChinese: "在排气系统检查中，技师发现催化转化器和消声器之间的排气管上有一个小孔。正确的做法是什么？",
    optionsChinese: [
      "A) 用排气胶带包裹该区域并将车辆恢复使用",
      "B) 通知客户排气管需要维修或更换",
      "C) 如果车辆通过排放测试则忽略它",
      "D) 用排气腻子堵住孔作为永久修复"
    ],
    explanationChinese: "排气管上的孔会使包括一氧化碳在内的有毒排气进入乘客舱，造成严重的安全隐患。应通知客户并正确修复或更换排气管。胶带和腻子只是临时修复方法。",
  },
  {
    id: 8,
    q: "Technician A says spark plugs should be installed to the manufacturer's specified torque. Technician B says over-torquing spark plugs can damage the cylinder head threads. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Spark plugs must be torqued to the manufacturer's specification to ensure proper sealing and heat transfer. Over-torquing can strip or damage the aluminum cylinder head threads, which is a costly repair. Under-torquing can cause compression leaks and overheating.",
    diagram: "",
    terms: ["spark_plug", "cylinder_head", "lug_nut_torque"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Essential Car Maintenance Checklist",
    qChinese: "技师A说火花塞应按制造商规定的扭矩安装。技师B说火花塞过度拧紧会损坏气缸盖螺纹。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都是正确的。火花塞必须按制造商规格拧紧，以确保正确密封和热传递。过度拧紧可能会损坏铝制气缸盖的螺纹，这是一项昂贵的维修。拧紧不足可能导致压缩泄漏和过热。",
  },
  {
    id: 9,
    q: "What is the purpose of the EVAP system on a modern vehicle?",
    options: [
      "A) To recirculate exhaust gases back into the intake manifold",
      "B) To capture and store fuel vapors from the fuel tank to prevent them from entering the atmosphere",
      "C) To cool the engine by evaporating coolant in the radiator",
      "D) To remove moisture from the air conditioning system"
    ],
    answer: 1,
    explanation: "The Evaporative Emission Control (EVAP) system captures fuel vapors from the fuel tank and fuel system, stores them in a charcoal canister, and then purges them into the engine intake to be burned during normal combustion. This prevents harmful hydrocarbon vapors from escaping into the atmosphere.",
    diagram: "",
    terms: ["evap_system", "pcm", "dtc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Essential Car Maintenance Checklist",
    qChinese: "现代车辆上EVAP系统的作用是什么？",
    optionsChinese: [
      "A) 将废气再循环回进气歧管",
      "B) 捕获并储存燃油箱中的燃油蒸汽，防止其进入大气",
      "C) 通过在散热器中蒸发冷却液来冷却发动机",
      "D) 去除空调系统中的水分"
    ],
    explanationChinese: "蒸发排放控制（EVAP）系统捕获燃油箱和燃油系统中的燃油蒸汽，将其储存在活性炭罐中，然后将其排入发动机进气系统在正常燃烧中烧掉。这可以防止有害的碳氢化合物蒸汽排入大气。",
  },
  {
    id: 10,
    q: "A diesel vehicle requires Diesel Exhaust Fluid (DEF). All of the following statements about DEF are true EXCEPT:",
    options: [
      "A) DEF is a mixture of urea and deionized water",
      "B) DEF is injected into the exhaust stream to reduce NOx emissions",
      "C) DEF should be stored in a sealed container away from direct sunlight",
      "D) DEF can be substituted with regular water in an emergency"
    ],
    answer: 3,
    explanation: "DEF cannot be substituted with water. DEF is a precisely mixed solution of 32.5% urea and 67.5% deionized water that reacts in the SCR catalyst to convert harmful NOx emissions into harmless nitrogen and water. Using water would damage the SCR system and cause emission system failure.",
    diagram: "",
    terms: ["catalytic_converter", "egr_valve", "obd2"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Essential Car Maintenance Checklist",
    qChinese: "一辆柴油车需要柴油排放处理液（DEF）。以下关于DEF的说法都是正确的，除了：",
    optionsChinese: [
      "A) DEF是尿素和去离子水的混合物",
      "B) DEF被注入排气流中以减少氮氧化物排放",
      "C) DEF应储存在密封容器中，远离阳光直射",
      "D) 紧急情况下可以用普通水替代DEF"
    ],
    explanationChinese: "DEF不能用水替代。DEF是由32.5%尿素和67.5%去离子水精确混合的溶液，在SCR催化剂中反应，将有害的氮氧化物排放转化为无害的氮气和水。使用水会损坏SCR系统并导致排放系统故障。",
  },
  {
    id: 11,
    q: "An engine oil leak is observed at the front of the engine. Which of the following is the MOST likely source?",
    options: [
      "A) Rear main seal",
      "B) Front crankshaft seal or timing cover gasket",
      "C) Oil pan drain plug at the rear of the pan",
      "D) Valve cover gasket at the rear of the head"
    ],
    answer: 1,
    explanation: "An oil leak at the front of the engine is most likely from the front crankshaft seal or the timing cover gasket. The rear main seal would leak at the back of the engine near the transmission. Proper identification of the leak source requires cleaning the area and using UV dye if necessary.",
    diagram: "",
    terms: ["crankshaft_position_sensor", "timing_chain", "oil_pressure"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Oil_pump_of_an_automobile_engine.jpg/640px-Oil_pump_of_an_automobile_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "How to Change Your Engine Oil",
    qChinese: "在发动机前部观察到机油泄漏。以下哪个是最可能的泄漏源？",
    optionsChinese: [
      "A) 后主油封",
      "B) 前曲轴油封或正时盖垫片",
      "C) 油底壳后部的放油螺塞",
      "D) 气缸盖后部的气门室盖垫片"
    ],
    explanationChinese: "发动机前部的机油泄漏最可能来自前曲轴油封或正时盖垫片。后主油封的泄漏会出现在发动机后部靠近变速箱的位置。正确识别泄漏源需要清洁该区域，必要时使用紫外线染料。",
  },
  {
    id: 12,
    q: "A vehicle's temperature warning light comes on while driving. What should the technician advise the customer to do?",
    options: [
      "A) Continue driving to the nearest repair shop",
      "B) Turn on the heater to maximum and safely pull over as soon as possible",
      "C) Turn off the engine immediately regardless of traffic conditions",
      "D) Add cold water to the radiator immediately"
    ],
    answer: 1,
    explanation: "When the temperature warning light illuminates, the driver should turn the heater to maximum to help dissipate engine heat and safely pull over as soon as possible. The engine should then be shut off. Never open the radiator cap on a hot engine, and never add cold water to an overheated engine.",
    diagram: "",
    terms: ["thermostat", "radiator", "coolant_temperature_sensor", "heater_core"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pqFZY6v6OQI",
    youtubeTitle: "Cooling System Flush and Fill",
    qChinese: "车辆行驶中水温警告灯亮起。技师应建议客户怎么做？",
    optionsChinese: [
      "A) 继续行驶到最近的维修店",
      "B) 将暖风开到最大并尽快安全靠边停车",
      "C) 不顾交通状况立即关闭发动机",
      "D) 立即向散热器加冷水"
    ],
    explanationChinese: "当水温警告灯亮起时，驾驶员应将暖风开到最大以帮助散热，并尽快安全靠边停车。然后应关闭发动机。切勿在发动机过热时打开散热器盖，也切勿向过热的发动机中加冷水。",
  },
  {
    id: 13,
    q: "When replacing an engine oil filter, the technician should do all of the following EXCEPT:",
    options: [
      "A) Apply a thin film of clean oil to the new filter gasket before installation",
      "B) Pre-fill the new oil filter with fresh engine oil when possible",
      "C) Tighten the filter with a filter wrench to maximum torque",
      "D) Check for leaks after starting the engine"
    ],
    answer: 2,
    explanation: "Oil filters should be hand-tightened according to the manufacturer's instructions, typically three-quarter to one full turn after the gasket contacts the sealing surface. Over-tightening with a filter wrench can crush the gasket, cause leaks, and make future removal extremely difficult.",
    diagram: "",
    terms: ["oil_change", "oil_pressure", "multipoint_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Oil_pump_of_an_automobile_engine.jpg/640px-Oil_pump_of_an_automobile_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "How to Change Your Engine Oil",
    qChinese: "更换发动机机油滤清器时，技师应做以下所有操作，除了：",
    optionsChinese: [
      "A) 在安装前在新滤清器垫圈上涂抹一层薄薄的清洁机油",
      "B) 在可能的情况下用新机油预注满新机油滤清器",
      "C) 用滤清器扳手将滤清器拧到最大扭矩",
      "D) 启动发动机后检查是否有泄漏"
    ],
    explanationChinese: "机油滤清器应按制造商说明手动拧紧，通常在垫圈接触密封面后再拧紧四分之三圈到一整圈。用滤清器扳手过度拧紧可能压碎垫圈、导致泄漏，并使将来拆卸极其困难。",
  },
  {
    id: 14,
    q: "A cooling system pressure test reveals the system cannot hold pressure. There are no visible external leaks. What is the MOST likely cause?",
    options: [
      "A) A defective radiator cap",
      "B) An internal engine leak such as a blown head gasket",
      "C) A loose hose clamp on the upper radiator hose",
      "D) A cracked coolant reservoir"
    ],
    answer: 1,
    explanation: "If the cooling system loses pressure but no external leaks are visible, the most likely cause is an internal leak such as a blown head gasket, cracked cylinder head, or cracked block. Coolant may be leaking into the combustion chamber or mixing with engine oil internally.",
    diagram: "",
    terms: ["head_gasket", "cylinder_head", "radiator", "coolant_flush"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pqFZY6v6OQI",
    youtubeTitle: "Cooling System Flush and Fill",
    qChinese: "冷却系统压力测试显示系统无法保持压力。没有可见的外部泄漏。最可能的原因是什么？",
    optionsChinese: [
      "A) 散热器盖故障",
      "B) 内部发动机泄漏，如气缸垫损坏",
      "C) 上水管夹子松动",
      "D) 冷却液储液罐开裂"
    ],
    explanationChinese: "如果冷却系统失去压力但没有可见的外部泄漏，最可能的原因是内部泄漏，如气缸垫损坏、气缸盖开裂或缸体开裂。冷却液可能泄漏到燃烧室内或在内部与发动机机油混合。",
  },
  {
    id: 15,
    q: "What is the correct procedure to check the condition of a serpentine belt during routine inspection?",
    options: [
      "A) Check only the smooth side of the belt for cracks",
      "B) Inspect for cracks, fraying, glazing, and proper tension on all belt surfaces",
      "C) Measure only the belt deflection at the longest span",
      "D) Check only that the belt is not making noise"
    ],
    answer: 1,
    explanation: "A thorough serpentine belt inspection includes checking both the ribbed and smooth sides for cracks, fraying, glazing, chunking, and uneven wear. Belt tension and alignment should also be verified. Modern EPDM belts may show rib wear rather than cracking, so a belt wear gauge should be used.",
    diagram: "",
    terms: ["serpentine_belt", "multipoint_inspection", "alternator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=W7_3viOGo18",
    youtubeTitle: "Serpentine Belt Replacement Guide",
    qChinese: "在例行检查中检查蛇形皮带状况的正确方法是什么？",
    optionsChinese: [
      "A) 仅检查皮带光滑面是否有裂纹",
      "B) 检查所有皮带表面是否有裂纹、磨损、老化光泽以及张力是否合适",
      "C) 仅测量最长跨度处的皮带挠度",
      "D) 仅检查皮带是否发出噪音"
    ],
    explanationChinese: "全面的蛇形皮带检查包括检查肋面和光滑面是否有裂纹、磨损、老化光泽、剥落和不均匀磨损。还应验证皮带张力和对齐方式。现代EPDM皮带可能显示肋部磨损而非裂纹，因此应使用皮带磨损规进行检测。",
  },
  {
    id: 16,
    q: "Technician A says a low oil pressure warning light that flickers at idle may indicate a worn engine. Technician B says it could also be caused by a low oil level. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. A flickering oil pressure warning light at idle can be caused by worn engine bearings that allow excessive oil clearance, reducing oil pressure. It can also be caused by a low oil level that allows the oil pump to draw in air. Both conditions should be investigated promptly.",
    diagram: "",
    terms: ["oil_pressure", "oil_change", "crankshaft_position_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Oil_pump_of_an_automobile_engine.jpg/640px-Oil_pump_of_an_automobile_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "How to Change Your Engine Oil",
    qChinese: "技师A说怠速时闪烁的机油压力警告灯可能表示发动机已磨损。技师B说也可能是机油液位过低造成的。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都是正确的。怠速时机油压力警告灯闪烁可能是由于发动机轴承磨损导致油隙过大，降低了机油压力。也可能是机油液位过低导致机油泵吸入空气。两种情况都应及时排查。",
  },

  // ===== AUTOMATIC TRANSMISSION/TRANSAXLE (Questions 17–23) =====
  {
    id: 17,
    q: "When checking automatic transmission fluid, the fluid appears dark brown and has a burnt smell. What does this indicate?",
    options: [
      "A) The fluid is normal and does not need to be changed",
      "B) The transmission has been overheated or has internal damage",
      "C) The wrong type of fluid was installed",
      "D) The fluid level is too high"
    ],
    answer: 1,
    explanation: "Dark brown or black automatic transmission fluid with a burnt odor indicates the fluid has been overheated or that internal clutch material is breaking down. This condition suggests possible internal transmission damage and the customer should be advised that further diagnosis is needed.",
    diagram: "",
    terms: ["transmission_fluid", "clutch_pack", "transmission_cooler", "transmission_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Transmission Fluid Service Guide",
    qChinese: "检查自动变速箱油时，油液呈深褐色并有烧焦气味。这表示什么？",
    optionsChinese: [
      "A) 油液正常，不需要更换",
      "B) 变速箱曾过热或有内部损坏",
      "C) 加注了错误类型的油液",
      "D) 油液液位过高"
    ],
    explanationChinese: "深褐色或黑色且有烧焦气味的自动变速箱油表明油液曾过热或内部离合器材料正在分解。这种情况暗示可能存在变速箱内部损坏，应建议客户需要进一步诊断。",
  },
  {
    id: 18,
    q: "A DTC P0700 is stored in the powertrain control module. What does this code indicate?",
    options: [
      "A) Engine misfire detected",
      "B) Transmission control system malfunction — check TCM for additional codes",
      "C) Vehicle speed sensor failure",
      "D) Torque converter clutch stuck off"
    ],
    answer: 1,
    explanation: "DTC P0700 is a generic code that indicates the transmission control module (TCM) has detected a malfunction and set a code. It serves as a flag to the technician to scan the TCM for specific transmission-related diagnostic trouble codes that provide more detail about the problem.",
    diagram: "",
    terms: ["tcm", "dtc", "scan_tool", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Transmission Fluid Service Guide",
    qChinese: "动力总成控制模块中存储了故障码P0700。该代码表示什么？",
    optionsChinese: [
      "A) 检测到发动机失火",
      "B) 变速箱控制系统故障——检查TCM以获取更多故障码",
      "C) 车速传感器故障",
      "D) 液力变矩器离合器未接合"
    ],
    explanationChinese: "故障码P0700是一个通用代码，表示变速箱控制模块（TCM）已检测到故障并设置了代码。它作为一个标志提醒技师扫描TCM以获取更详细的变速箱相关故障码。",
  },
  {
    id: 19,
    q: "During an inspection, transmission fluid is found leaking from the area where the transmission meets the engine. What is the MOST likely source?",
    options: [
      "A) Transmission oil pan gasket",
      "B) Front transmission pump seal or torque converter seal",
      "C) Rear transmission extension housing seal",
      "D) Transmission cooler line fitting"
    ],
    answer: 1,
    explanation: "A fluid leak at the bell housing area where the transmission meets the engine is most commonly caused by a failed front pump seal or torque converter seal. This allows fluid to seep out between the engine and transmission. Diagnosis may require removing the transmission inspection cover.",
    diagram: "",
    terms: ["torque_converter", "transmission_fluid", "transmission_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Transmission Fluid Service Guide",
    qChinese: "在检查中发现变速箱与发动机连接处有变速箱油泄漏。最可能的泄漏源是什么？",
    optionsChinese: [
      "A) 变速箱油底壳垫片",
      "B) 变速箱前泵油封或液力变矩器油封",
      "C) 变速箱后延伸壳油封",
      "D) 变速箱冷却管接头"
    ],
    explanationChinese: "在变速箱与发动机连接的钟形壳区域泄漏，最常见的原因是前泵油封或液力变矩器油封故障。这会导致油液从发动机和变速箱之间渗出。诊断时可能需要拆除变速箱检查盖。",
  },
  {
    id: 20,
    q: "Technician A says a torn CV boot should be replaced promptly to prevent joint damage. Technician B says a slight tear in a CV boot is acceptable as long as no grease has leaked out yet. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Technician A is correct. Any tear in a CV boot, no matter how small, will allow grease to leak out and contaminants such as dirt and moisture to enter the joint. This will quickly cause CV joint wear and failure. The boot should be replaced as soon as a tear is discovered.",
    diagram: "",
    terms: ["cv_joint", "multipoint_inspection", "differential"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Multi-Point Vehicle Inspection Walkthrough",
    qChinese: "技师A说破裂的CV防尘套应及时更换以防止万向节损坏。技师B说只要还没有润滑脂泄漏，CV防尘套上的轻微裂口是可以接受的。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "技师A是正确的。CV防尘套上的任何裂口，无论多小，都会导致润滑脂泄漏，并使污垢和水分等污染物进入万向节。这将很快导致CV万向节磨损和故障。一旦发现裂口应立即更换防尘套。",
  },
  {
    id: 21,
    q: "What is the purpose of the transmission cooler in an automatic transmission system?",
    options: [
      "A) To warm the transmission fluid during cold weather startup",
      "B) To maintain transmission fluid at a safe operating temperature and prevent overheating",
      "C) To filter contaminants from the transmission fluid",
      "D) To regulate transmission line pressure"
    ],
    answer: 1,
    explanation: "The transmission cooler removes excess heat from the automatic transmission fluid to keep it within a safe operating temperature range. Overheated fluid breaks down rapidly, losing its lubricating and hydraulic properties. The cooler is typically located in the radiator or as a separate auxiliary unit.",
    diagram: "",
    terms: ["transmission_cooler", "transmission_fluid", "radiator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Transmission Fluid Service Guide",
    qChinese: "自动变速箱系统中变速箱冷却器的作用是什么？",
    optionsChinese: [
      "A) 在寒冷天气启动时加热变速箱油",
      "B) 将变速箱油保持在安全工作温度，防止过热",
      "C) 过滤变速箱油中的污染物",
      "D) 调节变速箱管路压力"
    ],
    explanationChinese: "变速箱冷却器将自动变速箱油中的多余热量带走，使其保持在安全的工作温度范围内。过热的油液会迅速分解，失去润滑和液压性能。冷却器通常位于散热器内或作为独立的辅助装置。",
  },
  {
    id: 22,
    q: "A vehicle has excessive vibration that increases with speed. The powertrain mounts appear cracked and oil-soaked. What should the technician recommend?",
    options: [
      "A) Balancing the tires to correct the vibration",
      "B) Replacing the damaged powertrain mounts",
      "C) Performing a wheel alignment",
      "D) Replacing the transmission fluid"
    ],
    answer: 1,
    explanation: "Cracked and oil-soaked powertrain mounts have lost their ability to dampen engine and transmission vibrations and properly support the powertrain. This allows excessive movement and vibration to be transmitted to the vehicle body. The damaged mounts should be replaced to restore proper operation.",
    diagram: "",
    terms: ["engine_mount", "multipoint_inspection", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Multi-Point Vehicle Inspection Walkthrough",
    qChinese: "一辆车有随速度增加而加剧的过度振动。动力总成支架出现裂纹并浸满油渍。技师应建议什么？",
    optionsChinese: [
      "A) 做轮胎动平衡以消除振动",
      "B) 更换损坏的动力总成支架",
      "C) 做四轮定位",
      "D) 更换变速箱油"
    ],
    explanationChinese: "开裂且浸满油渍的动力总成支架已失去减震和支撑动力总成的能力。这会导致过度的运动和振动传递到车身。应更换损坏的支架以恢复正常运行。",
  },
  {
    id: 23,
    q: "On most vehicles, how should automatic transmission fluid level be checked?",
    options: [
      "A) With the engine off and cold, on a level surface",
      "B) With the engine running at idle, transmission at operating temperature, and in Park or Neutral",
      "C) With the engine running at 2,500 RPM and the transmission in Drive",
      "D) Immediately after a long highway drive without idling"
    ],
    answer: 1,
    explanation: "Most manufacturers require the automatic transmission fluid to be checked with the engine running at idle, the transmission at normal operating temperature, the gear selector cycled through all positions and placed in Park or Neutral, and the vehicle on a level surface. Always consult the owner's manual.",
    diagram: "",
    terms: ["transmission_fluid", "transmission_service", "multipoint_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Transmission Fluid Service Guide",
    qChinese: "在大多数车辆上，应如何检查自动变速箱油液位？",
    optionsChinese: [
      "A) 发动机熄火且冷车状态下，在水平面上检查",
      "B) 发动机怠速运转，变速箱达到工作温度，挂P挡或N挡时检查",
      "C) 发动机转速2500转，变速箱挂D挡时检查",
      "D) 长途高速行驶后立即检查，无需怠速"
    ],
    explanationChinese: "大多数制造商要求在发动机怠速运转、变速箱达到正常工作温度、换挡杆循环经过所有挡位后置于P挡或N挡、且车辆停在水平面上时检查自动变速箱油液位。请务必查阅车主手册。",
  },

  // ===== MANUAL DRIVE TRAIN & AXLES (Questions 24–34) =====
  {
    id: 24,
    q: "A vehicle with a hydraulic clutch has a soft, spongy clutch pedal. What is the MOST likely cause?",
    options: [
      "A) Worn clutch disc",
      "B) Air in the hydraulic clutch system",
      "C) Weak clutch pressure plate springs",
      "D) Worn pilot bearing"
    ],
    answer: 1,
    explanation: "A soft or spongy clutch pedal in a hydraulic clutch system most commonly indicates air trapped in the hydraulic lines, master cylinder, or slave cylinder. Air is compressible, unlike hydraulic fluid, so it causes a spongy feel. The system should be bled to remove the air.",
    diagram: "",
    terms: ["clutch_disc", "pressure_plate", "master_cylinder", "brake_bleeding"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Transmission Fluid Service Guide",
    qChinese: "一辆配备液压离合器的车辆，离合器踏板松软有海绵感。最可能的原因是什么？",
    optionsChinese: [
      "A) 离合器片磨损",
      "B) 液压离合器系统中有空气",
      "C) 离合器压盘弹簧变弱",
      "D) 导向轴承磨损"
    ],
    explanationChinese: "液压离合器系统中离合器踏板松软或有海绵感，最常见的原因是液压管路、主缸或从缸中有空气。空气是可压缩的，不像液压油那样不可压缩，因此会导致海绵般的脚感。应对系统进行排气以排除空气。",
  },
  {
    id: 25,
    q: "Fluid is leaking from the rear axle pinion seal. Which of the following is the correct repair procedure?",
    options: [
      "A) Add more gear oil to compensate for the leak",
      "B) Replace the pinion seal, noting the pinion nut torque and crush sleeve requirements",
      "C) Tighten the pinion nut to stop the leak",
      "D) Apply sealant to the outside of the seal"
    ],
    answer: 1,
    explanation: "Replacing the pinion seal requires careful attention to pinion bearing preload. The technician must mark the pinion nut position or measure preload before removal. A new crush sleeve may be required depending on the manufacturer's procedure. Simply tightening the nut can change bearing preload.",
    diagram: "",
    terms: ["differential", "universal_joint", "lug_nut_torque"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Transmission Fluid Service Guide",
    qChinese: "后桥小齿轮油封泄漏。以下哪项是正确的维修步骤？",
    optionsChinese: [
      "A) 添加更多齿轮油以补偿泄漏",
      "B) 更换小齿轮油封，注意小齿轮螺母扭矩和压溃套筒要求",
      "C) 拧紧小齿轮螺母以止漏",
      "D) 在油封外部涂抹密封胶"
    ],
    explanationChinese: "更换小齿轮油封时需要仔细注意小齿轮轴承预紧力。技师必须在拆卸前标记小齿轮螺母位置或测量预紧力。根据制造商的步骤，可能需要新的压溃套筒。仅拧紧螺母可能改变轴承预紧力。",
  },
  {
    id: 26,
    q: "A manual transmission is hard to shift into gear. Technician A says the clutch may not be fully releasing. Technician B says the transmission synchronizers may be worn. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Hard shifting can be caused by a clutch that does not fully disengage, allowing the input shaft to continue spinning. It can also be caused by worn synchronizer rings that cannot match gear speeds properly. Both conditions should be investigated during diagnosis.",
    diagram: "",
    terms: ["synchronizer", "clutch_disc", "pressure_plate", "flywheel"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Transmission Fluid Service Guide",
    qChinese: "手动变速箱难以挂挡。技师A说可能是离合器没有完全分离。技师B说可能是变速箱同步器磨损。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都是正确的。难以挂挡可能是因为离合器未完全分离，导致输入轴继续旋转。也可能是由于同步器环磨损无法正确匹配齿轮速度。诊断时应检查这两种情况。",
  },
  {
    id: 27,
    q: "When checking the fluid level in a manual transmission, where is the fluid level typically checked?",
    options: [
      "A) Using a dipstick on top of the transmission",
      "B) At the fill plug on the side of the transmission case",
      "C) Through the shifter boot opening",
      "D) At the drain plug on the bottom of the case"
    ],
    answer: 1,
    explanation: "Most manual transmissions use a fill plug located on the side of the transmission case to check and add fluid. The fluid level should be at the bottom of the fill plug opening. The vehicle must be level when checking. Manual transmissions typically do not have a dipstick for fluid checking.",
    diagram: "",
    terms: ["transmission_fluid", "transmission_service", "synchronizer"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Transmission Fluid Service Guide",
    qChinese: "检查手动变速箱油液位时，通常在哪里检查？",
    optionsChinese: [
      "A) 使用变速箱顶部的油尺",
      "B) 在变速箱壳体侧面的注油塞处",
      "C) 通过换挡杆防尘套开口",
      "D) 在壳体底部的放油塞处"
    ],
    explanationChinese: "大多数手动变速箱使用位于变速箱壳体侧面的注油塞来检查和添加油液。油液液位应在注油塞开口的底部边缘。检查时车辆必须保持水平。手动变速箱通常没有用于检查油液的油尺。",
  },
  {
    id: 28,
    q: "A clicking noise is heard from the front of a front-wheel-drive vehicle during sharp turns. What is the MOST likely cause?",
    options: [
      "A) Worn front wheel bearings",
      "B) Worn outer CV joint",
      "C) Loose lug nuts",
      "D) Worn tie rod ends"
    ],
    answer: 1,
    explanation: "A clicking or popping noise from the front of a front-wheel-drive vehicle during turns is the classic symptom of a worn outer CV joint. The joint wears due to loss of grease from a torn boot, allowing dirt and moisture contamination. The CV axle or joint should be replaced.",
    diagram: "",
    terms: ["cv_joint", "tie_rod", "lug_nut_torque"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Multi-Point Vehicle Inspection Walkthrough",
    qChinese: "一辆前轮驱动车辆在急转弯时前部发出咔嗒声。最可能的原因是什么？",
    optionsChinese: [
      "A) 前轮轴承磨损",
      "B) 外侧CV万向节磨损",
      "C) 轮毂螺母松动",
      "D) 横拉杆球头磨损"
    ],
    explanationChinese: "前轮驱动车辆在转弯时前部发出咔嗒声或爆裂声是外侧CV万向节磨损的典型症状。由于防尘套破裂导致润滑脂流失，污垢和水分污染使万向节磨损。应更换CV半轴或万向节。",
  },
  {
    id: 29,
    q: "A vibration is felt at highway speeds that increases in intensity. The U-joints on the drive shaft show rust-colored dust around the bearing caps. What does this indicate?",
    options: [
      "A) Normal U-joint operation",
      "B) The U-joints are worn and need replacement",
      "C) The drive shaft is out of phase",
      "D) The transmission output shaft is damaged"
    ],
    answer: 1,
    explanation: "Rust-colored dust around U-joint bearing caps indicates the needle bearings inside have worn through their case hardening and are deteriorating. This causes vibration that increases with speed. Worn U-joints should be replaced promptly to prevent driveshaft failure and potential vehicle damage.",
    diagram: "",
    terms: ["universal_joint", "differential", "multipoint_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Multi-Point Vehicle Inspection Walkthrough",
    qChinese: "在高速行驶时感到振动并随速度增加而加剧。传动轴上的万向节轴承盖周围有锈色粉末。这表示什么？",
    optionsChinese: [
      "A) 万向节工作正常",
      "B) 万向节已磨损，需要更换",
      "C) 传动轴相位不对",
      "D) 变速箱输出轴损坏"
    ],
    explanationChinese: "万向节轴承盖周围的锈色粉末表明内部滚针轴承已经磨穿表面硬化层并正在劣化。这会导致随速度增加而加剧的振动。磨损的万向节应及时更换，以防传动轴故障和潜在的车辆损坏。",
  },
  {
    id: 30,
    q: "What is the purpose of the drive shaft slip yoke?",
    options: [
      "A) To connect the drive shaft to the rear axle",
      "B) To allow the drive shaft to change length as the suspension moves",
      "C) To provide a universal joint connection point",
      "D) To balance the drive shaft at high speeds"
    ],
    answer: 1,
    explanation: "The slip yoke allows the drive shaft to change its effective length as the rear axle moves up and down with suspension travel. The splined slip yoke slides in and out of the transmission extension housing, accommodating changes in the distance between the transmission and rear axle.",
    diagram: "",
    terms: ["universal_joint", "differential", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Transmission Fluid Service Guide",
    qChinese: "传动轴滑动叉的作用是什么？",
    optionsChinese: [
      "A) 将传动轴连接到后桥",
      "B) 允许传动轴在悬挂运动时改变长度",
      "C) 提供万向节连接点",
      "D) 在高速时平衡传动轴"
    ],
    explanationChinese: "滑动叉允许传动轴在后桥随悬挂行程上下移动时改变其有效长度。花键滑动叉在变速箱延伸壳内滑进滑出，适应变速箱与后桥之间距离的变化。",
  },
  {
    id: 31,
    q: "A wheel bearing is being inspected. All of the following are signs of a worn wheel bearing EXCEPT:",
    options: [
      "A) A humming or growling noise that changes with vehicle speed",
      "B) Excessive play when the wheel is rocked top to bottom",
      "C) A rhythmic clicking noise only during sharp turns",
      "D) Roughness felt when rotating the wheel by hand with the vehicle raised"
    ],
    answer: 2,
    explanation: "A rhythmic clicking noise during sharp turns is the classic symptom of a worn CV joint, not a wheel bearing. Worn wheel bearings typically produce a humming or growling noise that changes with speed, show excessive play when the wheel is rocked, and feel rough when spun by hand.",
    diagram: "",
    terms: ["cv_joint", "ball_joint", "multipoint_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Multi-Point Vehicle Inspection Walkthrough",
    qChinese: "正在检查轮毂轴承。以下所有都是轮毂轴承磨损的迹象，除了：",
    optionsChinese: [
      "A) 随车速变化的嗡嗡声或隆隆声",
      "B) 上下摇晃车轮时有过度间隙",
      "C) 仅在急转弯时发出有节奏的咔嗒声",
      "D) 举升车辆后手动旋转车轮时感到粗糙"
    ],
    explanationChinese: "急转弯时有节奏的咔嗒声是CV万向节磨损的典型症状，而非轮毂轴承。磨损的轮毂轴承通常会产生随车速变化的嗡嗡声或隆隆声，摇晃车轮时有过度间隙，手动旋转时感觉粗糙。",
  },
  {
    id: 32,
    q: "When checking transfer case fluid, what type of fluid do most transfer cases require?",
    options: [
      "A) Automatic transmission fluid only",
      "B) The specific fluid type listed in the manufacturer's service information",
      "C) 80W-90 gear oil in all cases",
      "D) Engine oil of the same weight as the engine"
    ],
    answer: 1,
    explanation: "Transfer case fluid requirements vary significantly by manufacturer and model. Some use ATF, some use specific synthetic fluids, and others use gear oil. Always consult the manufacturer's service information for the correct fluid type and capacity. Using the wrong fluid can cause damage.",
    diagram: "",
    terms: ["transfer_case", "transmission_fluid", "transmission_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Transmission Fluid Service Guide",
    qChinese: "检查分动箱油液时，大多数分动箱需要什么类型的油液？",
    optionsChinese: [
      "A) 仅自动变速箱油",
      "B) 制造商维修资料中列出的特定油液类型",
      "C) 所有情况下都使用80W-90齿轮油",
      "D) 与发动机相同黏度的发动机油"
    ],
    explanationChinese: "分动箱油液要求因制造商和车型而异。有些使用ATF，有些使用特定合成油液，还有些使用齿轮油。请务必查阅制造商维修资料以获取正确的油液类型和容量。使用错误的油液可能导致损坏。",
  },
  {
    id: 33,
    q: "A customer reports that the 4WD indicator light flashes and the system will not engage. What should the technician check FIRST?",
    options: [
      "A) Transfer case internal components",
      "B) 4WD actuator operation, linkage, and electrical connections",
      "C) Front differential ring and pinion gears",
      "D) Rear axle fluid level"
    ],
    answer: 1,
    explanation: "When a 4WD system will not engage and the indicator light flashes, the technician should first check the most accessible external components: the actuator motor, shift linkage or cable, vacuum lines, and electrical connections. These are common failure points and can be inspected without disassembly.",
    diagram: "",
    terms: ["transfer_case", "differential", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Transmission Fluid Service Guide",
    qChinese: "客户报告四驱指示灯闪烁且系统无法接合。技师应首先检查什么？",
    optionsChinese: [
      "A) 分动箱内部部件",
      "B) 四驱执行器工作状况、连杆机构和电气连接",
      "C) 前差速器主减速齿轮",
      "D) 后桥油液位"
    ],
    explanationChinese: "当四驱系统无法接合且指示灯闪烁时，技师应首先检查最容易接触的外部部件：执行器电机、换挡连杆或拉线、真空管路和电气连接。这些是常见的故障点，无需拆卸即可检查。",
  },
  {
    id: 34,
    q: "Technician A says AWD systems operate automatically and do not require driver input. Technician B says some AWD systems have a center differential or coupling that may require periodic fluid service. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Most modern AWD systems operate automatically, distributing torque between the front and rear axles without driver input. Many AWD systems also have a center differential, transfer unit, or coupling device that requires periodic fluid changes per the maintenance schedule.",
    diagram: "",
    terms: ["transfer_case", "differential", "transmission_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Transmission Fluid Service Guide",
    qChinese: "技师A说全时四驱（AWD）系统自动工作，不需要驾驶员操作。技师B说某些AWD系统有中央差速器或耦合装置，可能需要定期更换油液。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都是正确的。大多数现代AWD系统自动运行，无需驾驶员干预即可在前后轴之间分配扭矩。许多AWD系统还有中央差速器、传动装置或耦合装置，需要按保养计划定期更换油液。",
  },

  // ===== SUSPENSION & STEERING (Questions 35–58) =====
  {
    id: 35,
    q: "When checking power steering fluid, the technician notices the fluid is foamy. What is the MOST likely cause?",
    options: [
      "A) The system has too much fluid",
      "B) Air is being drawn into the system through a leak or low fluid level",
      "C) The fluid has been contaminated with brake fluid",
      "D) The power steering pump is producing too much pressure"
    ],
    answer: 1,
    explanation: "Foamy power steering fluid indicates air is being drawn into the system. This is commonly caused by a low fluid level that allows the pump to draw in air, or a leak in the suction side of the system. Air in the system causes noise, poor steering assist, and can damage the pump.",
    diagram: "",
    terms: ["power_steering_pump", "rack_and_pinion", "multipoint_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Multi-Point Vehicle Inspection Walkthrough",
    qChinese: "检查转向助力液时，技师发现油液有泡沫。最可能的原因是什么？",
    optionsChinese: [
      "A) 系统油液过多",
      "B) 由于泄漏或液位过低，空气被吸入系统",
      "C) 油液被制动液污染",
      "D) 转向助力泵产生过高压力"
    ],
    explanationChinese: "转向助力液有泡沫表明空气正被吸入系统。这通常是由于液位过低导致泵吸入空气，或系统吸入侧有泄漏。系统中的空气会导致噪音、转向助力不足，并可能损坏泵。",
  },
  {
    id: 36,
    q: "A power steering pump is making a whining noise that increases with engine RPM. What is the MOST likely cause?",
    options: [
      "A) The drive belt is too tight",
      "B) Low power steering fluid level or a worn pump",
      "C) The steering gear is binding",
      "D) The power steering pressure hose is kinked"
    ],
    answer: 1,
    explanation: "A whining noise from the power steering pump that increases with RPM is most commonly caused by a low fluid level, which causes the pump to cavitate and whine. A worn pump with internal damage can also produce this noise. The fluid level should be checked and the pump inspected.",
    diagram: "",
    terms: ["power_steering_pump", "serpentine_belt", "rack_and_pinion"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Multi-Point Vehicle Inspection Walkthrough",
    qChinese: "转向助力泵发出随发动机转速增加而加剧的啸叫声。最可能的原因是什么？",
    optionsChinese: [
      "A) 驱动皮带过紧",
      "B) 转向助力液液位低或泵磨损",
      "C) 转向器卡滞",
      "D) 转向助力高压油管弯折"
    ],
    explanationChinese: "转向助力泵发出的随转速增加的啸叫声最常见的原因是液位过低，导致泵产生气蚀并发出啸叫声。泵内部磨损也可能产生这种噪音。应检查液位并检查泵的状况。",
  },
  {
    id: 37,
    q: "During a rack and pinion steering gear inspection, fluid is found leaking from both bellows boots. What does this indicate?",
    options: [
      "A) The tie rod ends need replacement",
      "B) The rack and pinion internal seals have failed",
      "C) The power steering pump has too much pressure",
      "D) The bellows boots have been torn by road debris"
    ],
    answer: 1,
    explanation: "Fluid leaking from both bellows boots on a rack and pinion steering unit indicates that the internal rack seals have failed. Power steering fluid bypasses the seals and fills the bellows. The rack and pinion unit typically needs to be rebuilt or replaced when this occurs.",
    diagram: "",
    terms: ["rack_and_pinion", "power_steering_pump", "tie_rod"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Multi-Point Vehicle Inspection Walkthrough",
    qChinese: "在齿条齿轮转向器检查中，发现两个防尘套都有油液泄漏。这表示什么？",
    optionsChinese: [
      "A) 横拉杆球头需要更换",
      "B) 齿条齿轮内部油封已损坏",
      "C) 转向助力泵压力过高",
      "D) 防尘套被路面碎石撕裂"
    ],
    explanationChinese: "齿条齿轮转向器两个防尘套都有油液泄漏，表明内部齿条油封已损坏。转向助力液绕过油封并充满防尘套。出现这种情况时，齿条齿轮转向器通常需要重建或更换。",
  },
  {
    id: 38,
    q: "What is the correct way to check a tie rod end for wear?",
    options: [
      "A) Visually inspect the tie rod end boot only",
      "B) Grasp the tire at the 3 and 9 o'clock positions and check for looseness while observing the tie rod end",
      "C) Bounce the front of the vehicle and listen for noise",
      "D) Check that the tie rod end boot is not torn"
    ],
    answer: 1,
    explanation: "To check a tie rod end, raise the vehicle and grasp the tire at the 3 and 9 o'clock positions. Push in and pull out while having an assistant observe the tie rod end for play or looseness. Any detectable movement in the tie rod end indicates it is worn and should be replaced.",
    diagram: "",
    terms: ["tie_rod", "rack_and_pinion", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Multi-Point Vehicle Inspection Walkthrough",
    qChinese: "检查横拉杆球头磨损的正确方法是什么？",
    optionsChinese: [
      "A) 仅目视检查横拉杆球头防尘套",
      "B) 在3点和9点位置握住轮胎，检查松动情况同时观察横拉杆球头",
      "C) 上下弹压车辆前部并听是否有噪音",
      "D) 检查横拉杆球头防尘套是否破裂"
    ],
    explanationChinese: "要检查横拉杆球头，举升车辆并在3点和9点位置握住轮胎。推拉的同时让助手观察横拉杆球头是否有间隙或松动。横拉杆球头中任何可检测到的运动都表明其已磨损，应予更换。",
  },
  {
    id: 39,
    q: "Technician A says a worn ball joint can cause a pull to one side during braking. Technician B says a worn ball joint can cause uneven tire wear. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. A worn ball joint allows uncontrolled movement of the steering knuckle, which can change wheel alignment angles. This can cause the vehicle to pull to one side, especially during braking, and also cause uneven tire wear patterns due to changed camber or caster angles.",
    diagram: "",
    terms: ["ball_joint", "camber", "caster", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Multi-Point Vehicle Inspection Walkthrough",
    qChinese: "技师A说磨损的球头节会导致制动时车辆向一侧跑偏。技师B说磨损的球头节会导致轮胎不均匀磨损。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都是正确的。磨损的球头节会导致转向节不受控制地运动，从而改变车轮定位角度。这可能导致车辆向一侧跑偏（尤其在制动时），还会因外倾角或主销后倾角变化而导致轮胎不均匀磨损。",
  },
  {
    id: 40,
    q: "Which component connects the steering knuckle to the vehicle frame on a MacPherson strut suspension?",
    options: [
      "A) Upper and lower control arms",
      "B) The strut assembly serves as the upper suspension pivot",
      "C) A separate upper ball joint and mounting plate",
      "D) Trailing arms and a panhard rod"
    ],
    answer: 1,
    explanation: "In a MacPherson strut suspension, the strut assembly itself serves as the upper suspension mounting point. The steering knuckle is attached to the bottom of the strut, and the top of the strut is mounted to the strut tower in the body. A lower control arm with a ball joint provides the lower pivot.",
    diagram: "",
    terms: ["strut", "ball_joint", "control_arm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Multi-Point Vehicle Inspection Walkthrough",
    qChinese: "在麦弗逊支柱悬挂中，哪个部件将转向节连接到车身？",
    optionsChinese: [
      "A) 上下控制臂",
      "B) 支柱总成充当上悬挂支撑点",
      "C) 独立的上球头节和安装板",
      "D) 纵臂和横向推杆"
    ],
    explanationChinese: "在麦弗逊支柱悬挂中，支柱总成本身充当上悬挂安装点。转向节连接在支柱底部，支柱顶部安装在车身的支柱塔上。带球头节的下控制臂提供下部枢轴点。",
  },
  {
    id: 41,
    q: "A vehicle sags on one corner when parked. What is the MOST likely cause?",
    options: [
      "A) Worn shock absorber on that corner",
      "B) Broken or weak spring on that corner",
      "C) Worn stabilizer bar link",
      "D) Loose wheel bearing"
    ],
    answer: 1,
    explanation: "A vehicle sagging on one corner is most likely caused by a broken or weakened spring on that corner. Springs support the vehicle's weight and maintain ride height. Shock absorbers control spring oscillation but do not support vehicle weight, so a worn shock would not cause sagging.",
    diagram: "",
    terms: ["strut", "shock_absorber", "control_arm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Multi-Point Vehicle Inspection Walkthrough",
    qChinese: "一辆车停放时一个角下沉。最可能的原因是什么？",
    optionsChinese: [
      "A) 该角的减振器磨损",
      "B) 该角的弹簧断裂或变弱",
      "C) 稳定杆连杆磨损",
      "D) 轮毂轴承松动"
    ],
    explanationChinese: "车辆一个角下沉最可能是由该角的弹簧断裂或变弱造成的。弹簧承载车辆重量并维持行驶高度。减振器控制弹簧振荡但不承载车辆重量，因此磨损的减振器不会导致车身下沉。",
  },
  {
    id: 42,
    q: "What is the primary purpose of stabilizer bars (sway bars) in a suspension system?",
    options: [
      "A) To support the weight of the vehicle",
      "B) To reduce body roll during cornering",
      "C) To absorb road impacts and bumps",
      "D) To maintain proper wheel alignment"
    ],
    answer: 1,
    explanation: "Stabilizer bars, also called sway bars or anti-roll bars, connect opposite sides of the suspension to resist body roll during cornering. When the vehicle turns, the bar twists, transferring force from the outside wheel to the inside wheel, keeping the body more level and improving handling stability.",
    diagram: "",
    terms: ["sway_bar", "control_arm", "strut"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Multi-Point Vehicle Inspection Walkthrough",
    qChinese: "悬挂系统中稳定杆（横向稳定杆）的主要作用是什么？",
    optionsChinese: [
      "A) 承载车辆重量",
      "B) 减少转弯时的车身侧倾",
      "C) 吸收路面冲击和颠簸",
      "D) 保持正确的车轮定位"
    ],
    explanationChinese: "稳定杆，也称横向稳定杆或防侧倾杆，连接悬挂的两侧以抵抗转弯时的车身侧倾。当车辆转弯时，稳定杆扭转，将力从外侧车轮传递到内侧车轮，使车身更加平稳并提高操控稳定性。",
  },
  {
    id: 43,
    q: "A vehicle pulls to the right during straight-line driving. All of the following could be causes EXCEPT:",
    options: [
      "A) Incorrect wheel alignment with excessive positive camber on the right",
      "B) Low tire pressure on the right front tire",
      "C) A worn right front stabilizer bar end link",
      "D) A brake caliper dragging on the left front"
    ],
    answer: 2,
    explanation: "A worn stabilizer bar end link does not typically cause a pull to one side during straight-line driving. Incorrect alignment, uneven tire pressure, and a dragging brake caliper can all cause directional pull. A worn sway bar link would more likely cause clunking noises during cornering.",
    diagram: "",
    terms: ["wheel_alignment", "camber", "sway_bar", "tire_pressure"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tire_valve_stem.jpg/640px-Tire_valve_stem.jpg",
    youtube: "https://www.youtube.com/watch?v=NDqpgT5Yl1o",
    youtubeTitle: "Tire Pressure and TPMS Explained",
    qChinese: "一辆车在直线行驶时向右跑偏。以下所有都可能是原因，除了：",
    optionsChinese: [
      "A) 车轮定位不正确，右侧正外倾角过大",
      "B) 右前轮胎气压过低",
      "C) 右前稳定杆连杆磨损",
      "D) 左前制动钳拖滞"
    ],
    explanationChinese: "磨损的稳定杆连杆通常不会导致直线行驶时向一侧跑偏。不正确的定位、不均匀的胎压和拖滞的制动钳都可能导致方向性跑偏。磨损的稳定杆连杆更可能在转弯时导致异响。",
  },
  {
    id: 44,
    q: "What tire wear pattern indicates excessive positive camber?",
    options: [
      "A) Wear on the inside edge of the tire",
      "B) Wear on the outside edge of the tire",
      "C) Wear in the center of the tread",
      "D) Cupping or scalloping of the tread"
    ],
    answer: 1,
    explanation: "Excessive positive camber causes the top of the tire to lean outward, placing more load on the outside edge of the tread. This results in accelerated wear on the outer shoulder of the tire. Negative camber causes inside edge wear, and over-inflation causes center tread wear.",
    diagram: "",
    terms: ["camber", "wheel_alignment", "tire_rotation", "tire_pressure"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tire_valve_stem.jpg/640px-Tire_valve_stem.jpg",
    youtube: "https://www.youtube.com/watch?v=NDqpgT5Yl1o",
    youtubeTitle: "How to Rotate Tires Properly",
    qChinese: "什么轮胎磨损模式表明正外倾角过大？",
    optionsChinese: [
      "A) 轮胎内侧边缘磨损",
      "B) 轮胎外侧边缘磨损",
      "C) 胎面中心磨损",
      "D) 胎面杯状或波浪状磨损"
    ],
    explanationChinese: "正外倾角过大导致轮胎顶部向外倾斜，在胎面外侧边缘施加更多载荷。这导致轮胎外侧胎肩加速磨损。负外倾角导致内侧边缘磨损，轮胎过度充气导致胎面中心磨损。",
  },
  {
    id: 45,
    q: "A humming noise from the front of a vehicle gets louder during a left turn. What is the MOST likely cause?",
    options: [
      "A) Left front wheel bearing",
      "B) Right front wheel bearing",
      "C) Worn front tires",
      "D) Power steering pump noise"
    ],
    answer: 1,
    explanation: "A humming noise that gets louder during a left turn indicates a failing right front wheel bearing. During a left turn, body weight shifts to the right, increasing the load on the right wheel bearing. If the bearing is worn, the increased load amplifies the noise it produces.",
    diagram: "",
    terms: ["ball_joint", "cv_joint", "multipoint_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Multi-Point Vehicle Inspection Walkthrough",
    qChinese: "车辆前部发出嗡嗡声，在左转时变得更大。最可能的原因是什么？",
    optionsChinese: [
      "A) 左前轮毂轴承",
      "B) 右前轮毂轴承",
      "C) 前轮胎磨损",
      "D) 转向助力泵噪音"
    ],
    explanationChinese: "左转时变大的嗡嗡声表明右前轮毂轴承故障。左转时车身重量转移到右侧，增加了右侧轮毂轴承的载荷。如果轴承磨损，增加的载荷会放大其产生的噪音。",
  },
  {
    id: 46,
    q: "The TPMS warning light is illuminated on the dashboard. What does this indicate?",
    options: [
      "A) The tire tread is worn below the minimum depth",
      "B) One or more tires have pressure below or above the recommended level, or a sensor malfunction",
      "C) The tires need to be rotated",
      "D) The wheel alignment is out of specification"
    ],
    answer: 1,
    explanation: "The Tire Pressure Monitoring System (TPMS) warning light illuminates when one or more tires have pressure significantly below the recommended level (typically 25% below). A flashing TPMS light usually indicates a system malfunction such as a failed sensor. The tire pressures should be checked immediately.",
    diagram: "",
    terms: ["tire_pressure", "tire_rotation", "multipoint_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tire_valve_stem.jpg/640px-Tire_valve_stem.jpg",
    youtube: "https://www.youtube.com/watch?v=NDqpgT5Yl1o",
    youtubeTitle: "Tire Pressure and TPMS Explained",
    qChinese: "仪表盘上的TPMS警告灯亮起。这表示什么？",
    optionsChinese: [
      "A) 轮胎花纹深度低于最低标准",
      "B) 一个或多个轮胎气压低于或高于建议值，或传感器故障",
      "C) 轮胎需要换位",
      "D) 车轮定位超出规范"
    ],
    explanationChinese: "胎压监测系统（TPMS）警告灯在一个或多个轮胎气压明显低于建议值（通常低于25%）时亮起。TPMS灯闪烁通常表示系统故障，如传感器损坏。应立即检查胎压。",
  },
  {
    id: 47,
    q: "What is the recommended tire rotation pattern for a vehicle with non-directional tires and the same size on all four wheels?",
    options: [
      "A) Front to rear on the same side only",
      "B) A cross pattern such as forward cross or rearward cross",
      "C) Only the front tires are rotated to the rear",
      "D) Tires should not be rotated on modern vehicles"
    ],
    answer: 1,
    explanation: "For vehicles with non-directional tires of the same size, a cross rotation pattern is recommended. In a forward cross, rear tires move straight to the front, and front tires cross to the opposite rear. This promotes even wear. Directional tires must stay on the same side and go front to rear only.",
    diagram: "",
    terms: ["tire_rotation", "tire_pressure", "lug_nut_torque"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tire_valve_stem.jpg/640px-Tire_valve_stem.jpg",
    youtube: "https://www.youtube.com/watch?v=NDqpgT5Yl1o",
    youtubeTitle: "How to Rotate Tires Properly",
    qChinese: "对于装有非定向轮胎且四轮尺寸相同的车辆，推荐的轮胎换位方式是什么？",
    optionsChinese: [
      "A) 仅同侧前后对调",
      "B) 交叉换位方式，如前交叉或后交叉",
      "C) 仅将前轮换到后面",
      "D) 现代车辆不应进行轮胎换位"
    ],
    explanationChinese: "对于装有相同尺寸非定向轮胎的车辆，推荐交叉换位方式。在前交叉换位中，后轮直接移到前面，前轮交叉移到对面的后方位置。这有助于均匀磨损。定向轮胎必须留在同侧，仅前后对调。",
  },
  {
    id: 48,
    q: "Technician A says feathered tire wear is caused by incorrect toe alignment. Technician B says cupped tire wear is caused by worn shock absorbers. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Feathered or sawtooth wear across the tread is a classic sign of incorrect toe alignment, where the tires are either toed-in or toed-out excessively. Cupped or scalloped tire wear is commonly caused by worn shock absorbers that allow the tire to bounce on the road surface.",
    diagram: "",
    terms: ["toe", "shock_absorber", "wheel_alignment", "tire_rotation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tire_valve_stem.jpg/640px-Tire_valve_stem.jpg",
    youtube: "https://www.youtube.com/watch?v=NDqpgT5Yl1o",
    youtubeTitle: "How to Rotate Tires Properly",
    qChinese: "技师A说羽状轮胎磨损是由不正确的前束定位引起的。技师B说杯状轮胎磨损是由减振器磨损引起的。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都是正确的。胎面上的羽状或锯齿状磨损是前束定位不正确的典型标志，即前束角过大或过小。杯状或波浪状轮胎磨损通常是由磨损的减振器导致轮胎在路面上弹跳造成的。",
  },
  {
    id: 49,
    q: "During a control arm inspection, what should the technician look for?",
    options: [
      "A) Only check the ball joint for play",
      "B) Inspect the control arm bushings for cracking, the ball joint for wear, and the arm for bending or damage",
      "C) Only verify the control arm mounting bolts are tight",
      "D) Check the control arm for rust only"
    ],
    answer: 1,
    explanation: "A thorough control arm inspection includes checking the bushings for cracking, deterioration, and excessive play; inspecting the ball joint for wear and looseness; and examining the control arm itself for bending, collision damage, or corrosion. All components affect alignment and handling.",
    diagram: "",
    terms: ["control_arm", "ball_joint", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Multi-Point Vehicle Inspection Walkthrough",
    qChinese: "在控制臂检查中，技师应检查什么？",
    optionsChinese: [
      "A) 仅检查球头节是否有间隙",
      "B) 检查控制臂衬套是否开裂、球头节是否磨损，以及控制臂是否弯曲或损坏",
      "C) 仅确认控制臂安装螺栓拧紧",
      "D) 仅检查控制臂是否生锈"
    ],
    explanationChinese: "全面的控制臂检查包括检查衬套是否开裂、老化和过度间隙；检查球头节是否磨损和松动；以及检查控制臂本身是否有弯曲、碰撞损坏或腐蚀。所有部件都会影响定位和操控性。",
  },
  {
    id: 50,
    q: "A vehicle has a shimmy or vibration in the steering wheel at highway speed. What should the technician check FIRST?",
    options: [
      "A) Power steering fluid level",
      "B) Tire balance and tire condition",
      "C) Steering gear mounting bolts",
      "D) Stabilizer bar links"
    ],
    answer: 1,
    explanation: "A steering wheel shimmy at highway speed is most commonly caused by tire imbalance or tire condition issues such as flat spots, separated belts, or uneven wear. Tire balance and condition should be checked first as this is the most common and easiest to verify cause of this symptom.",
    diagram: "",
    terms: ["tire_rotation", "tire_pressure", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tire_valve_stem.jpg/640px-Tire_valve_stem.jpg",
    youtube: "https://www.youtube.com/watch?v=NDqpgT5Yl1o",
    youtubeTitle: "How to Rotate Tires Properly",
    qChinese: "一辆车在高速公路速度下方向盘抖动或振动。技师应首先检查什么？",
    optionsChinese: [
      "A) 转向助力液液位",
      "B) 轮胎平衡和轮胎状况",
      "C) 转向器安装螺栓",
      "D) 稳定杆连杆"
    ],
    explanationChinese: "高速公路速度下方向盘抖动最常见的原因是轮胎不平衡或轮胎状况问题，如平斑、帘布层分离或不均匀磨损。轮胎平衡和状况应首先检查，因为这是最常见且最容易验证的原因。",
  },
  {
    id: 51,
    q: "What is the purpose of a strut bearing plate (strut mount)?",
    options: [
      "A) To connect the strut to the steering knuckle",
      "B) To provide a pivot point that allows the strut to rotate during steering while mounting the strut to the body",
      "C) To limit suspension travel",
      "D) To support the weight of the engine"
    ],
    answer: 1,
    explanation: "The strut bearing plate, or strut mount, connects the top of the strut to the vehicle body structure. It contains a bearing that allows the strut to rotate with the steering knuckle during steering input. A worn strut mount can cause noise, binding during steering, and alignment changes.",
    diagram: "",
    terms: ["strut", "wheel_alignment", "control_arm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Multi-Point Vehicle Inspection Walkthrough",
    qChinese: "支柱轴承板（支柱顶座）的作用是什么？",
    optionsChinese: [
      "A) 将支柱连接到转向节",
      "B) 提供一个枢转点，使支柱在转向时旋转，同时将支柱安装到车身",
      "C) 限制悬挂行程",
      "D) 支撑发动机重量"
    ],
    explanationChinese: "支柱轴承板或支柱顶座将支柱顶部连接到车身结构。它包含一个轴承，允许支柱随转向节在转向时旋转。磨损的支柱顶座可能导致噪音、转向时卡滞以及定位变化。",
  },
  {
    id: 52,
    q: "A vehicle has a clunking noise from the front end when going over bumps. The noise disappears on smooth roads. Which component is MOST likely worn?",
    options: [
      "A) Wheel bearing",
      "B) Stabilizer bar end link or control arm bushing",
      "C) Tire belt separation",
      "D) CV joint"
    ],
    answer: 1,
    explanation: "A clunking noise over bumps that disappears on smooth roads is typically caused by worn stabilizer bar end links, control arm bushings, or ball joints. These components develop play as they wear, allowing metal-to-metal contact during suspension movement over bumps. A visual and physical inspection is needed.",
    diagram: "",
    terms: ["sway_bar", "control_arm", "ball_joint"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Multi-Point Vehicle Inspection Walkthrough",
    qChinese: "一辆车在过减速带时前部发出咯噔声。在平坦路面上噪音消失。哪个部件最可能磨损？",
    optionsChinese: [
      "A) 轮毂轴承",
      "B) 稳定杆连杆或控制臂衬套",
      "C) 轮胎帘布层分离",
      "D) CV万向节"
    ],
    explanationChinese: "过减速带时的咯噔声在平坦路面上消失，通常是由磨损的稳定杆连杆、控制臂衬套或球头节造成的。这些部件磨损后会产生间隙，在悬挂过减速带时导致金属对金属的碰撞。需要进行目视和手动检查。",
  },
  {
    id: 53,
    q: "What does excessive toe-out on a front-wheel alignment cause?",
    options: [
      "A) Center tread wear on both front tires",
      "B) Inside edge wear on both front tires",
      "C) Outside edge wear on both front tires",
      "D) Feathered wear with the edges worn smooth on the inside"
    ],
    answer: 3,
    explanation: "Excessive toe-out causes feathered tire wear where each tread block is worn smooth on the inside edge and sharp on the outside edge. This occurs because the fronts of the tires point outward, causing each tire to scrub sideways slightly as it rolls. Toe-in creates the opposite feathering direction.",
    diagram: "",
    terms: ["toe", "wheel_alignment", "tire_rotation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tire_valve_stem.jpg/640px-Tire_valve_stem.jpg",
    youtube: "https://www.youtube.com/watch?v=NDqpgT5Yl1o",
    youtubeTitle: "How to Rotate Tires Properly",
    qChinese: "前轮定位中过度的前束外张会导致什么？",
    optionsChinese: [
      "A) 两个前轮胎面中心磨损",
      "B) 两个前轮胎面内侧边缘磨损",
      "C) 两个前轮胎面外侧边缘磨损",
      "D) 羽状磨损，内侧边缘磨损光滑"
    ],
    explanationChinese: "过度的前束外张导致羽状轮胎磨损，每个花纹块的内侧边缘磨损光滑，外侧边缘锋利。这是因为轮胎前端向外指，导致每个轮胎在滚动时略微横向摩擦。前束内收产生相反方向的羽状磨损。",
  },
  {
    id: 54,
    q: "During a suspension inspection, a shock absorber is found leaking oil from the upper seal. What should the technician recommend?",
    options: [
      "A) Wipe off the oil and recheck at the next service",
      "B) Replace the shock absorber, and replace both if on the same axle",
      "C) Tighten the shock absorber mounting bolts",
      "D) Add fluid to the shock absorber"
    ],
    answer: 1,
    explanation: "A leaking shock absorber has failed and should be replaced. Shock absorbers should be replaced in pairs on the same axle to maintain even handling and braking characteristics. A single worn shock can cause uneven tire wear and handling imbalance. Shocks cannot be refilled or repaired.",
    diagram: "",
    terms: ["shock_absorber", "strut", "multipoint_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Multi-Point Vehicle Inspection Walkthrough",
    qChinese: "在悬挂检查中，发现一个减振器上部密封处漏油。技师应建议什么？",
    optionsChinese: [
      "A) 擦去油液，在下次保养时再次检查",
      "B) 更换减振器，如果在同一轴上则两个一起更换",
      "C) 拧紧减振器安装螺栓",
      "D) 向减振器中添加油液"
    ],
    explanationChinese: "漏油的减振器已经损坏，应予更换。同一轴上的减振器应成对更换，以保持均匀的操控和制动特性。单个磨损的减振器会导致轮胎不均匀磨损和操控失衡。减振器无法补充油液或修复。",
  },
  {
    id: 55,
    q: "What symptom does a worn or damaged strut typically cause?",
    options: [
      "A) Engine misfires at idle",
      "B) Excessive bouncing, nose diving during braking, and poor ride quality",
      "C) Transmission slipping",
      "D) Low power steering assist"
    ],
    answer: 1,
    explanation: "Worn struts cause excessive bouncing, nose diving during braking, rear squat during acceleration, and poor ride quality. They may also cause cupped tire wear and increased stopping distances. Struts are a structural part of the suspension and affect alignment, ride, and handling.",
    diagram: "",
    terms: ["strut", "shock_absorber", "wheel_alignment", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Multi-Point Vehicle Inspection Walkthrough",
    qChinese: "磨损或损坏的支柱通常会导致什么症状？",
    optionsChinese: [
      "A) 怠速时发动机失火",
      "B) 过度弹跳、制动时车头下沉以及行驶品质差",
      "C) 变速箱打滑",
      "D) 转向助力不足"
    ],
    explanationChinese: "磨损的支柱会导致过度弹跳、制动时车头下沉、加速时车尾下蹲以及行驶品质差。还可能导致轮胎杯状磨损和制动距离增加。支柱是悬挂的结构部件，影响定位、行驶品质和操控性。",
  },
  {
    id: 56,
    q: "Technician A says TPMS sensors must be relearned after tire rotation on some vehicles. Technician B says TPMS sensors are powered by a battery and will eventually need replacement. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Many direct TPMS systems require a relearn procedure after tire rotation so the system knows the new position of each sensor. TPMS sensors contain a lithium battery with a typical lifespan of five to ten years, after which the sensor must be replaced.",
    diagram: "",
    terms: ["tire_pressure", "tire_rotation", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tire_valve_stem.jpg/640px-Tire_valve_stem.jpg",
    youtube: "https://www.youtube.com/watch?v=NDqpgT5Yl1o",
    youtubeTitle: "Tire Pressure and TPMS Explained",
    qChinese: "技师A说某些车辆在轮胎换位后TPMS传感器必须重新学习。技师B说TPMS传感器由电池供电，最终需要更换。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都是正确的。许多直接式TPMS系统在轮胎换位后需要重新学习程序，以便系统知道每个传感器的新位置。TPMS传感器内含锂电池，典型寿命为五到十年，之后传感器必须更换。",
  },
  {
    id: 57,
    q: "Over-inflation of a tire MOST commonly causes which wear pattern?",
    options: [
      "A) Inside and outside edge wear",
      "B) Center tread wear",
      "C) Cupping or scalloping",
      "D) Feathered wear pattern"
    ],
    answer: 1,
    explanation: "Over-inflation causes the tire to ride on the center of the tread, reducing the contact patch to the middle portion. This results in accelerated center tread wear while the shoulders remain relatively unworn. Under-inflation causes the opposite pattern with both edge shoulders wearing faster.",
    diagram: "",
    terms: ["tire_pressure", "tire_rotation", "multipoint_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tire_valve_stem.jpg/640px-Tire_valve_stem.jpg",
    youtube: "https://www.youtube.com/watch?v=NDqpgT5Yl1o",
    youtubeTitle: "Tire Pressure and TPMS Explained",
    qChinese: "轮胎过度充气最常导致哪种磨损模式？",
    optionsChinese: [
      "A) 内外侧边缘磨损",
      "B) 胎面中心磨损",
      "C) 杯状或波浪状磨损",
      "D) 羽状磨损"
    ],
    explanationChinese: "轮胎过度充气导致轮胎仅以胎面中心接触路面，将接触面积减少到中间部分。这导致胎面中心加速磨损，而胎肩相对未磨损。充气不足则产生相反的模式，两侧胎肩磨损更快。",
  },
  {
    id: 58,
    q: "A vehicle requires a wheel alignment. All of the following should be checked and corrected BEFORE performing the alignment EXCEPT:",
    options: [
      "A) Tire pressures should be set to specification",
      "B) Worn suspension and steering components should be replaced",
      "C) The fuel tank should be full",
      "D) The vehicle should be at normal ride height"
    ],
    answer: 2,
    explanation: "While tire pressure, ride height, and worn suspension components must be corrected before alignment, a full fuel tank is not required. Some manufacturers specify a certain fuel level, but it is not universally required. The vehicle should be at proper ride height with no extra cargo in the trunk.",
    diagram: "",
    terms: ["wheel_alignment", "camber", "caster", "toe"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Multi-Point Vehicle Inspection Walkthrough",
    qChinese: "一辆车需要做四轮定位。以下所有项目在定位前应检查并纠正，除了：",
    optionsChinese: [
      "A) 胎压应调整到规定值",
      "B) 磨损的悬挂和转向部件应更换",
      "C) 油箱应加满",
      "D) 车辆应处于正常行驶高度"
    ],
    explanationChinese: "虽然胎压、行驶高度和磨损的悬挂部件在定位前必须纠正，但不要求油箱加满。一些制造商会规定特定的油量水平，但这不是普遍要求。车辆应处于正常行驶高度，后备箱内不应有额外货物。",
  },

  // ===== BRAKES (Questions 59–78) =====
  {
    id: 59,
    q: "When checking brake fluid, the fluid appears dark and contaminated. What should the technician recommend?",
    options: [
      "A) Top off the fluid and recheck at the next service",
      "B) Flush and replace the brake fluid per manufacturer specifications",
      "C) Switch to a different brand of brake fluid",
      "D) Add a fluid conditioner to clean the fluid"
    ],
    answer: 1,
    explanation: "Dark, contaminated brake fluid should be flushed and replaced. Brake fluid is hygroscopic, meaning it absorbs moisture over time. Moisture lowers the boiling point, which can cause brake fade and vapor lock. Contaminated fluid can also corrode internal brake components causing costly damage.",
    diagram: "",
    terms: ["brake_fluid", "brake_bleeding", "master_cylinder", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Basic Brake Inspection Guide",
    qChinese: "检查制动液时，液体颜色发暗且受到污染。技师应建议什么？",
    optionsChinese: [
      "A) 补充液面并在下次保养时重新检查",
      "B) 按制造商规格冲洗并更换制动液",
      "C) 更换为不同品牌的制动液",
      "D) 添加液体调节剂以清洁液体"
    ],
    explanationChinese: "发暗、受污染的制动液应进行冲洗和更换。制动液具有吸湿性，会随时间吸收水分。水分会降低沸点，可能导致制动衰退和气阻。受污染的液体还会腐蚀内部制动部件，造成昂贵的损坏。",
  },
  {
    id: 60,
    q: "During a brake inspection, a technician finds a brake hose with a bulge. What is the correct action?",
    options: [
      "A) Monitor the hose and check again in 3,000 miles",
      "B) Replace the hose immediately as it could rupture under pressure",
      "C) Wrap the hose with tape to reinforce it",
      "D) Clamp the hose above the bulge"
    ],
    answer: 1,
    explanation: "A bulging brake hose indicates the internal reinforcement has weakened and the hose is at risk of rupture under hydraulic pressure. This is a critical safety concern as a burst hose would cause complete loss of braking on that circuit. The hose must be replaced immediately.",
    diagram: "",
    terms: ["brake_inspection", "brake_fluid", "brake_caliper"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Basic Brake Inspection Guide",
    qChinese: "在制动检查中，技师发现一根制动软管有鼓包。正确的做法是什么？",
    optionsChinese: [
      "A) 监控软管并在行驶3000英里后再次检查",
      "B) 立即更换软管，因为它可能在压力下爆裂",
      "C) 用胶带包裹软管以加固它",
      "D) 在鼓包上方夹紧软管"
    ],
    explanationChinese: "鼓包的制动软管表明内部增强层已减弱，软管有在液压压力下爆裂的风险。这是一个严重的安全问题，因为软管破裂会导致该回路完全失去制动力。必须立即更换软管。",
  },
  {
    id: 61,
    q: "The brake warning light on the dashboard is illuminated. All of the following are possible causes EXCEPT:",
    options: [
      "A) The parking brake is engaged",
      "B) The brake fluid level is low",
      "C) The ABS module has detected a wheel speed sensor fault",
      "D) There is a hydraulic pressure loss in one brake circuit"
    ],
    answer: 2,
    explanation: "A wheel speed sensor fault illuminates the ABS warning light, not the red brake warning light. The red brake warning light is activated by the parking brake switch, low brake fluid level sensor, or the hydraulic pressure differential switch that detects a loss of pressure in one brake circuit.",
    diagram: "",
    terms: ["abs", "parking_brake", "brake_fluid", "speed_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Basic Brake Inspection Guide",
    qChinese: "仪表盘上的制动警告灯亮起。以下所有都是可能的原因，除了：",
    optionsChinese: [
      "A) 驻车制动已拉起",
      "B) 制动液液位过低",
      "C) ABS模块检测到轮速传感器故障",
      "D) 一个制动回路液压压力丢失"
    ],
    explanationChinese: "轮速传感器故障会点亮ABS警告灯，而不是红色制动警告灯。红色制动警告灯由驻车制动开关、制动液液位传感器或检测到一个制动回路压力丢失的液压压力差动开关触发。",
  },
  {
    id: 62,
    q: "When inspecting drum brakes, the technician measures the brake drum and finds it is beyond the maximum diameter specification stamped on the drum. What should the technician do?",
    options: [
      "A) Machine the drum to a smooth surface",
      "B) Replace the drum because it cannot be safely machined",
      "C) Install the new shoes and reuse the drum",
      "D) Machine only the high spots on the drum surface"
    ],
    answer: 1,
    explanation: "If a brake drum's diameter exceeds the maximum diameter specification, the drum is too thin to be safely machined or reused. An oversized drum has thinner walls that can overheat, distort, and potentially crack during braking. The drum must be replaced with a new or properly sized unit.",
    diagram: "",
    terms: ["brake_drum", "wheel_cylinder", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Basic Brake Inspection Guide",
    qChinese: "检查鼓式制动器时，技师测量制动鼓发现其直径已超过鼓上标记的最大直径规格。技师应该怎么做？",
    optionsChinese: [
      "A) 将制动鼓车光",
      "B) 更换制动鼓，因为它无法安全车削",
      "C) 安装新制动蹄并继续使用该鼓",
      "D) 仅车削制动鼓表面的高点"
    ],
    explanationChinese: "如果制动鼓的直径超过最大直径规格，制动鼓壁太薄，无法安全车削或继续使用。超大的制动鼓壁更薄，在制动时可能过热、变形甚至开裂。必须更换为新的或尺寸合适的制动鼓。",
  },
  {
    id: 63,
    q: "Technician A says disc brake pads should be replaced when they reach the minimum thickness specification. Technician B says brake pad wear indicators provide an audible warning when pads are worn. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Brake pads must be replaced when they reach minimum thickness to maintain safe braking. Many brake pads include a metal wear indicator tab that contacts the rotor when the pad is worn, creating a squealing noise to alert the driver that service is needed.",
    diagram: "",
    terms: ["brake_caliper", "brake_rotor", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Basic Brake Inspection Guide",
    qChinese: "技师A说盘式制动片应在达到最小厚度规格时更换。技师B说制动片磨损指示器在制动片磨损时会发出声音警告。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都是正确的。制动片在达到最小厚度时必须更换以保持安全制动。许多制动片包含一个金属磨损指示片，当制动片磨损时接触制动盘，产生尖叫声提醒驾驶员需要保养。",
  },
  {
    id: 64,
    q: "What is the purpose of bleeding the brake system?",
    options: [
      "A) To drain and replace all the brake fluid",
      "B) To remove air from the hydraulic brake lines and components",
      "C) To test the brake booster for proper operation",
      "D) To adjust the brake pedal height"
    ],
    answer: 1,
    explanation: "Bleeding the brake system removes air that has entered the hydraulic lines and components. Air is compressible, so any air trapped in the system will cause a soft or spongy brake pedal and reduce braking effectiveness. Bleeding ensures the system is filled with incompressible brake fluid only.",
    diagram: "",
    terms: ["brake_bleeding", "brake_fluid", "master_cylinder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Basic Brake Inspection Guide",
    qChinese: "制动系统排气的目的是什么？",
    optionsChinese: [
      "A) 排出并更换所有制动液",
      "B) 排除液压制动管路和部件中的空气",
      "C) 测试制动助力器是否正常工作",
      "D) 调整制动踏板高度"
    ],
    explanationChinese: "制动系统排气是为了排除进入液压管路和部件中的空气。空气是可压缩的，因此系统中残留的空气会导致制动踏板松软或有海绵感，降低制动效能。排气确保系统中只有不可压缩的制动液。",
  },
  {
    id: 65,
    q: "What is the correct brake bleeding sequence for most vehicles?",
    options: [
      "A) Start with the wheel closest to the master cylinder",
      "B) Start with the wheel farthest from the master cylinder",
      "C) Bleed all four wheels simultaneously",
      "D) Start with the front wheels only"
    ],
    answer: 1,
    explanation: "The standard brake bleeding sequence starts with the wheel farthest from the master cylinder and works toward the closest. This is typically right rear, left rear, right front, left front. However, some vehicles with specific hydraulic circuits may require a different sequence per manufacturer specifications.",
    diagram: "",
    terms: ["brake_bleeding", "master_cylinder", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Basic Brake Inspection Guide",
    qChinese: "大多数车辆正确的制动排气顺序是什么？",
    optionsChinese: [
      "A) 从离主缸最近的车轮开始",
      "B) 从离主缸最远的车轮开始",
      "C) 同时对四个车轮排气",
      "D) 仅从前轮开始"
    ],
    explanationChinese: "标准的制动排气顺序从离主缸最远的车轮开始，向最近的车轮进行。通常是右后、左后、右前、左前。但是，一些具有特定液压回路的车辆可能需要按制造商规格采用不同的顺序。",
  },
  {
    id: 66,
    q: "A vehicle's parking brake does not hold the vehicle on a slight incline. What should the technician check FIRST?",
    options: [
      "A) The parking brake cable adjustment",
      "B) The rear brake shoes or pads for wear",
      "C) The transmission parking pawl",
      "D) The brake master cylinder"
    ],
    answer: 0,
    explanation: "The technician should first check the parking brake cable adjustment. Over time, cables stretch and rear brakes wear, causing excessive cable travel. The parking brake cable adjustment should be checked and adjusted if necessary. If adjustment does not correct the problem, then rear brake components should be inspected.",
    diagram: "",
    terms: ["parking_brake", "brake_drum", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Basic Brake Inspection Guide",
    qChinese: "一辆车的驻车制动器无法在轻微坡道上固定车辆。技师应首先检查什么？",
    optionsChinese: [
      "A) 驻车制动拉线调整",
      "B) 后制动蹄或制动片磨损",
      "C) 变速箱驻车棘爪",
      "D) 制动主缸"
    ],
    explanationChinese: "技师应首先检查驻车制动拉线调整。随时间推移，拉线会拉伸，后制动器会磨损，导致拉线行程过大。应检查并在必要时调整驻车制动拉线。如果调整后问题仍未解决，则应检查后制动部件。",
  },
  {
    id: 67,
    q: "Technician A says the brake power booster uses engine vacuum to assist brake pedal application. Technician B says a failed brake booster will cause a hard brake pedal. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. The vacuum brake booster uses engine intake manifold vacuum to multiply the force applied to the brake pedal. When the booster fails or loses vacuum, the driver must apply much greater pedal force, resulting in a hard brake pedal that requires excessive effort to stop.",
    diagram: "",
    terms: ["brake_booster", "vacuum_gauge", "master_cylinder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Basic Brake Inspection Guide",
    qChinese: "技师A说制动助力器利用发动机真空来辅助制动踏板施力。技师B说制动助力器故障会导致制动踏板发硬。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都是正确的。真空制动助力器利用发动机进气歧管真空来放大施加在制动踏板上的力。当助力器故障或失去真空时，驾驶员必须施加更大的踏板力，导致制动踏板很硬，需要过大的力才能停车。",
  },
  {
    id: 68,
    q: "What is the basic function of an ABS (Anti-lock Braking System)?",
    options: [
      "A) To reduce stopping distance in all conditions",
      "B) To prevent wheel lockup during hard braking, allowing the driver to maintain steering control",
      "C) To automatically apply the brakes when an obstacle is detected",
      "D) To increase brake pad life by reducing braking force"
    ],
    answer: 1,
    explanation: "The primary function of ABS is to prevent wheel lockup during hard braking so the driver can maintain steering control. ABS modulates brake pressure rapidly at each wheel to keep the tires near the limit of traction without locking. It does not necessarily shorten stopping distance on all surfaces.",
    diagram: "",
    terms: ["abs", "speed_sensor", "brake_caliper"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Basic Brake Inspection Guide",
    qChinese: "ABS（防抱死制动系统）的基本功能是什么？",
    optionsChinese: [
      "A) 在所有条件下缩短制动距离",
      "B) 防止紧急制动时车轮锁死，使驾驶员保持转向控制",
      "C) 检测到障碍物时自动制动",
      "D) 通过减少制动力来延长制动片寿命"
    ],
    explanationChinese: "ABS的主要功能是防止紧急制动时车轮锁死，使驾驶员保持转向控制。ABS在每个车轮上快速调节制动压力，使轮胎保持在附着力极限附近而不锁死。它不一定在所有路面上都缩短制动距离。",
  },
  {
    id: 69,
    q: "During a disc brake service, the technician finds the rotor has a lateral runout measurement that exceeds specification. What should be done?",
    options: [
      "A) Install new brake pads and return to service",
      "B) Machine the rotor if sufficient thickness remains, or replace the rotor",
      "C) Apply anti-seize to the rotor mounting surface",
      "D) Tighten the lug nuts to a higher torque"
    ],
    answer: 1,
    explanation: "Excessive lateral runout causes brake pulsation and uneven pad wear. The rotor should be machined on a lathe to correct the runout if it has enough thickness remaining after machining to stay above the minimum specification. If machining would take it below minimum thickness, the rotor must be replaced.",
    diagram: "",
    terms: ["brake_rotor", "brake_caliper", "lug_nut_torque"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Basic Brake Inspection Guide",
    qChinese: "在盘式制动保养中，技师发现制动盘的横向跳动测量值超出规格。应该怎么做？",
    optionsChinese: [
      "A) 安装新制动片并恢复使用",
      "B) 如果剩余厚度足够则车削制动盘，否则更换制动盘",
      "C) 在制动盘安装面涂抹防咬合剂",
      "D) 将轮毂螺母拧到更高的扭矩"
    ],
    explanationChinese: "过度的横向跳动会导致制动抖动和制动片不均匀磨损。如果制动盘在车削后厚度仍能保持在最小规格以上，则应在车床上车削以纠正跳动。如果车削后厚度低于最小值，则必须更换制动盘。",
  },
  {
    id: 70,
    q: "A vehicle pulls to the left during braking only. Which of the following is the MOST likely cause?",
    options: [
      "A) A sticking caliper or restricted brake hose on the right front",
      "B) Worn front tires",
      "C) Low power steering fluid",
      "D) A worn left front wheel bearing"
    ],
    answer: 0,
    explanation: "A brake pull to the left during braking suggests uneven braking force between the left and right front brakes. A sticking caliper or restricted brake hose on the right front would reduce braking force on that side, causing the vehicle to pull toward the stronger left brake during braking.",
    diagram: "",
    terms: ["brake_caliper", "brake_rotor", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Basic Brake Inspection Guide",
    qChinese: "一辆车仅在制动时向左跑偏。以下哪个是最可能的原因？",
    optionsChinese: [
      "A) 右前制动钳卡滞或制动软管堵塞",
      "B) 前轮胎磨损",
      "C) 转向助力液位低",
      "D) 左前轮毂轴承磨损"
    ],
    explanationChinese: "制动时向左跑偏表明左右前轮制动力不均匀。右前制动钳卡滞或制动软管堵塞会减少该侧制动力，导致车辆在制动时被更强的左侧制动力拉向左侧。",
  },
  {
    id: 71,
    q: "What type of brake fluid is MOST commonly specified for modern vehicles?",
    options: [
      "A) DOT 2",
      "B) DOT 3 or DOT 4",
      "C) DOT 6",
      "D) Automatic transmission fluid"
    ],
    answer: 1,
    explanation: "DOT 3 and DOT 4 are the most commonly specified brake fluids for modern vehicles. DOT 4 has a higher boiling point than DOT 3. Some performance and European vehicles specify DOT 4 or DOT 5.1. DOT 5 is silicone-based and is not compatible with conventional systems. Always use the specified type.",
    diagram: "",
    terms: ["brake_fluid", "master_cylinder", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Basic Brake Inspection Guide",
    qChinese: "现代车辆最常指定使用什么类型的制动液？",
    optionsChinese: [
      "A) DOT 2",
      "B) DOT 3 或 DOT 4",
      "C) DOT 6",
      "D) 自动变速箱油"
    ],
    explanationChinese: "DOT 3和DOT 4是现代车辆最常指定使用的制动液。DOT 4的沸点高于DOT 3。一些性能车和欧洲车辆指定使用DOT 4或DOT 5.1。DOT 5是硅基的，与传统系统不兼容。请务必使用规定的类型。",
  },
  {
    id: 72,
    q: "When installing new brake pads, the caliper piston must be pushed back into the bore. On rear calipers with an integral parking brake, how is this typically accomplished?",
    options: [
      "A) Push the piston straight in with a C-clamp",
      "B) Use a special tool to rotate the piston clockwise while pressing it in",
      "C) Use compressed air to force the piston back",
      "D) Remove the bleeder screw and hammer the piston in"
    ],
    answer: 1,
    explanation: "Rear calipers with an integral parking brake mechanism typically require the piston to be rotated clockwise while being pressed inward. A special cube or pin-style tool fits into the piston face to turn it. Simply pushing straight in will damage the parking brake mechanism inside the caliper.",
    diagram: "",
    terms: ["brake_caliper", "parking_brake", "brake_rotor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Basic Brake Inspection Guide",
    qChinese: "安装新制动片时，需要将制动钳活塞推回缸体。对于带有集成驻车制动的后制动钳，通常如何操作？",
    optionsChinese: [
      "A) 用C型夹具直接推入活塞",
      "B) 使用专用工具顺时针旋转活塞同时向内压",
      "C) 用压缩空气将活塞强制推回",
      "D) 拆下排气螺钉用锤子敲回活塞"
    ],
    explanationChinese: "带有集成驻车制动机构的后制动钳通常需要在向内压的同时顺时针旋转活塞。一种方块或销式专用工具安装在活塞表面来转动它。直接推入会损坏制动钳内部的驻车制动机构。",
  },
  {
    id: 73,
    q: "A customer complains of a grinding noise when braking. What is the MOST likely cause?",
    options: [
      "A) Glazed brake pads",
      "B) Brake pads worn to the metal backing plate contacting the rotor",
      "C) Loose caliper mounting bolts",
      "D) Contaminated brake fluid"
    ],
    answer: 1,
    explanation: "A grinding noise during braking most commonly indicates the brake pads have worn completely through the friction material, allowing the metal backing plate to contact the rotor. This causes rapid rotor damage and significantly reduces braking ability. Immediate brake service is needed.",
    diagram: "",
    terms: ["brake_rotor", "brake_caliper", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Basic Brake Inspection Guide",
    qChinese: "客户抱怨制动时有磨削噪音。最可能的原因是什么？",
    optionsChinese: [
      "A) 制动片表面釉化",
      "B) 制动片磨损到金属背板接触制动盘",
      "C) 制动钳安装螺栓松动",
      "D) 制动液受污染"
    ],
    explanationChinese: "制动时的磨削噪音最常见的原因是制动片的摩擦材料已完全磨尽，金属背板直接接触制动盘。这会迅速损坏制动盘并显著降低制动能力。需要立即进行制动保养。",
  },
  {
    id: 74,
    q: "All of the following are types of drum brake self-adjusters EXCEPT:",
    options: [
      "A) Star wheel adjuster",
      "B) Ratcheting adjuster activated by the parking brake",
      "C) Hydraulic automatic adjuster built into the wheel cylinder",
      "D) Vacuum-operated adjuster"
    ],
    answer: 3,
    explanation: "Vacuum-operated adjusters are not used in drum brake systems. Common drum brake self-adjusting mechanisms include the star wheel adjuster that operates during reverse braking application, ratcheting adjusters activated by parking brake application, and some wheel cylinders with built-in automatic adjustment features.",
    diagram: "",
    terms: ["brake_drum", "wheel_cylinder", "parking_brake"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Basic Brake Inspection Guide",
    qChinese: "以下所有都是鼓式制动自调整器的类型，除了：",
    optionsChinese: [
      "A) 星形轮调整器",
      "B) 由驻车制动激活的棘轮调整器",
      "C) 内置在轮缸中的液压自动调整器",
      "D) 真空操作调整器"
    ],
    explanationChinese: "鼓式制动系统中不使用真空操作调整器。常见的鼓式制动自调整机构包括在倒车制动时工作的星形轮调整器、由驻车制动操作激活的棘轮调整器，以及一些带内置自动调整功能的轮缸。",
  },
  {
    id: 75,
    q: "After replacing brake components, the brake pedal goes to the floor on the first application. What should the technician do?",
    options: [
      "A) Inform the customer the brakes need time to break in",
      "B) Pump the brake pedal several times to seat the pads against the rotor or shoes against the drum",
      "C) Drive the vehicle slowly to allow the brakes to adjust automatically",
      "D) Bleed the brake system again"
    ],
    answer: 1,
    explanation: "After brake service, the pistons may be pushed back, creating a gap between the pads and rotor or shoes and drum. Pumping the brake pedal several times pushes the pistons out to take up this gap. The pedal should become firm. If it remains soft, the system should be inspected for air or leaks.",
    diagram: "",
    terms: ["brake_caliper", "master_cylinder", "brake_drum"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Basic Brake Inspection Guide",
    qChinese: "更换制动部件后，第一次踩制动踏板时踏板踩到底。技师应该怎么做？",
    optionsChinese: [
      "A) 通知客户制动器需要时间磨合",
      "B) 多次踩制动踏板，使制动片贴合制动盘或制动蹄贴合制动鼓",
      "C) 缓慢驾驶车辆让制动器自动调整",
      "D) 重新对制动系统排气"
    ],
    explanationChinese: "制动保养后，活塞可能被推回，在制动片和制动盘或制动蹄和制动鼓之间产生间隙。多次踩制动踏板将活塞推出以消除间隙。踏板应变得坚实。如果踏板仍然松软，应检查系统是否有空气或泄漏。",
  },
  {
    id: 76,
    q: "Technician A says brake lines should be inspected for corrosion, dents, and kinks. Technician B says a corroded brake line should be repaired with a compression fitting. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Technician A is correct. Brake lines must be regularly inspected for corrosion, dents, kinks, and leaks. Technician B is incorrect because compression fittings are not approved for brake line repair. Brake lines must be repaired using double-flare or ISO flare fittings as specified by the manufacturer.",
    diagram: "",
    terms: ["brake_inspection", "brake_fluid", "proportioning_valve"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Basic Brake Inspection Guide",
    qChinese: "技师A说制动管路应检查腐蚀、凹痕和弯折。技师B说腐蚀的制动管路应使用压缩接头修复。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "技师A是正确的。制动管路必须定期检查是否有腐蚀、凹痕、弯折和泄漏。技师B是不正确的，因为压缩接头不被批准用于制动管路维修。制动管路必须使用制造商规定的双重扩口或ISO扩口接头进行维修。",
  },
  {
    id: 77,
    q: "What causes a pulsating brake pedal during normal braking?",
    options: [
      "A) Worn brake pads",
      "B) Brake rotor thickness variation or excessive runout",
      "C) Air in the brake lines",
      "D) A weak brake booster"
    ],
    answer: 1,
    explanation: "A pulsating brake pedal during normal braking is caused by brake rotor thickness variation (parallelism) or excessive lateral runout. As the rotor spins, the uneven thickness pushes the pads in and out, which is felt through the brake pedal. The rotor should be machined or replaced.",
    diagram: "",
    terms: ["brake_rotor", "brake_caliper", "brake_booster"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Basic Brake Inspection Guide",
    qChinese: "正常制动时制动踏板脉动是什么原因？",
    optionsChinese: [
      "A) 制动片磨损",
      "B) 制动盘厚度变化或过度跳动",
      "C) 制动管路中有空气",
      "D) 制动助力器变弱"
    ],
    explanationChinese: "正常制动时制动踏板脉动是由制动盘厚度变化（平行度不良）或过度横向跳动引起的。当制动盘旋转时，不均匀的厚度将制动片推进推出，这种感觉通过制动踏板传递。应车削或更换制动盘。",
  },
  {
    id: 78,
    q: "The ABS warning light is on but the red brake warning light is off. What does this indicate?",
    options: [
      "A) The base brake system has failed completely",
      "B) The ABS has a malfunction but the base hydraulic brake system is still functional",
      "C) Both the ABS and base brakes have failed",
      "D) The brake fluid level is critically low"
    ],
    answer: 1,
    explanation: "When the ABS light is on but the red brake warning light is off, it means the ABS system has detected a fault and disabled itself, but the base hydraulic brake system remains operational. The vehicle can still stop normally but will not have anti-lock protection during hard braking.",
    diagram: "",
    terms: ["abs", "speed_sensor", "dtc", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Basic Brake Inspection Guide",
    qChinese: "ABS警告灯亮起但红色制动警告灯未亮。这表示什么？",
    optionsChinese: [
      "A) 基本制动系统已完全失效",
      "B) ABS有故障但基本液压制动系统仍然正常工作",
      "C) ABS和基本制动器都已失效",
      "D) 制动液液位严重不足"
    ],
    explanationChinese: "当ABS灯亮起但红色制动警告灯未亮时，意味着ABS系统检测到故障并已自行禁用，但基本液压制动系统仍然可以正常工作。车辆仍能正常停车，但在紧急制动时不会有防抱死保护。",
  },

  // ===== ELECTRICAL (Questions 79–93) =====
  {
    id: 79,
    q: "A battery load test is performed on a fully charged battery. What reading indicates a good battery?",
    options: [
      "A) Voltage drops below 7.2 volts during the test",
      "B) Voltage remains at or above 9.6 volts for 15 seconds at half the CCA rating",
      "C) Voltage reads exactly 12.0 volts with no load",
      "D) Voltage reads 10.0 volts for 5 seconds"
    ],
    answer: 1,
    explanation: "During a battery load test, the battery is loaded to half its CCA rating for 15 seconds. A good battery will maintain at least 9.6 volts at 70 degrees Fahrenheit during this test. A voltage drop below 9.6 volts indicates the battery cannot deliver adequate cranking power and should be replaced.",
    diagram: "",
    terms: ["battery", "battery_service", "dmm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Battery_for_a_car.jpg/640px-Battery_for_a_car.jpg",
    youtube: "https://www.youtube.com/watch?v=LGB6ZEjGm7E",
    youtubeTitle: "Car Battery Testing and Maintenance",
    qChinese: "对一块充满电的蓄电池进行负载测试。什么读数表示蓄电池良好？",
    optionsChinese: [
      "A) 测试期间电压降至7.2伏以下",
      "B) 在CCA额定值一半的负载下，电压在15秒内保持在9.6伏或以上",
      "C) 无负载时电压恰好为12.0伏",
      "D) 电压在5秒内为10.0伏"
    ],
    explanationChinese: "蓄电池负载测试中，对蓄电池施加其CCA额定值一半的负载持续15秒。良好的蓄电池在华氏70度时应在此测试中保持至少9.6伏。电压降至9.6伏以下表示蓄电池无法提供足够的起动功率，应予更换。",
  },
  {
    id: 80,
    q: "When jump starting a vehicle, what is the correct sequence for connecting the jumper cables?",
    options: [
      "A) Negative on dead battery, negative on good battery, positive on dead battery, positive on good battery",
      "B) Positive on dead battery, positive on good battery, negative on good battery, negative on engine ground away from dead battery",
      "C) Negative on good battery, positive on good battery, positive on dead battery, negative on dead battery",
      "D) Connect both positives first, then both negatives directly to the batteries"
    ],
    answer: 1,
    explanation: "The correct jump starting sequence is: connect positive to dead battery, positive to good battery, negative to good battery, then negative to an engine ground on the dead vehicle away from the battery. The last connection is made away from the battery to prevent a spark near hydrogen gas.",
    diagram: "",
    terms: ["battery", "battery_service", "ground_circuit"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Battery_for_a_car.jpg/640px-Battery_for_a_car.jpg",
    youtube: "https://www.youtube.com/watch?v=LGB6ZEjGm7E",
    youtubeTitle: "Car Battery Testing and Maintenance",
    qChinese: "跨接启动车辆时，连接跨接电缆的正确顺序是什么？",
    optionsChinese: [
      "A) 亏电蓄电池负极、正常蓄电池负极、亏电蓄电池正极、正常蓄电池正极",
      "B) 亏电蓄电池正极、正常蓄电池正极、正常蓄电池负极、亏电车辆发动机接地（远离蓄电池）",
      "C) 正常蓄电池负极、正常蓄电池正极、亏电蓄电池正极、亏电蓄电池负极",
      "D) 先连接两个正极，然后将两个负极直接连接到蓄电池"
    ],
    explanationChinese: "正确的跨接启动顺序是：连接亏电蓄电池正极、连接正常蓄电池正极、连接正常蓄电池负极，然后将负极连接到亏电车辆远离蓄电池的发动机接地点。最后一个连接远离蓄电池是为了防止在氢气附近产生火花。",
  },
  {
    id: 81,
    q: "A vehicle cranks slowly on a cold morning but the battery tests good. What should the technician check NEXT?",
    options: [
      "A) The alternator output",
      "B) The starter circuit including cables, connections, and voltage drop",
      "C) The ignition switch",
      "D) The fuel pump relay"
    ],
    answer: 1,
    explanation: "If the battery tests good but cranking is slow, the problem is likely in the starter circuit. The technician should perform voltage drop tests on the battery cables, check cable connections for corrosion and tightness, and test the starter motor draw. High resistance in the circuit reduces cranking speed.",
    diagram: "",
    terms: ["starter_motor", "voltage_drop_test", "battery", "ground_circuit"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Battery_for_a_car.jpg/640px-Battery_for_a_car.jpg",
    youtube: "https://www.youtube.com/watch?v=LGB6ZEjGm7E",
    youtubeTitle: "Car Battery Testing and Maintenance",
    qChinese: "一辆车在寒冷的早晨起动缓慢，但蓄电池测试正常。技师接下来应检查什么？",
    optionsChinese: [
      "A) 发电机输出",
      "B) 起动机电路，包括电缆、连接和电压降",
      "C) 点火开关",
      "D) 燃油泵继电器"
    ],
    explanationChinese: "如果蓄电池测试正常但起动缓慢，问题可能在起动机电路。技师应对蓄电池电缆进行电压降测试，检查电缆连接是否有腐蚀和松动，并测试起动机电流消耗。电路中的高电阻会降低起动速度。",
  },
  {
    id: 82,
    q: "Technician A says a voltage drop test on the positive battery cable should be less than 0.5 volts while cranking. Technician B says high resistance in battery cables causes slow cranking. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. A voltage drop test on the positive cable from the battery post to the starter terminal should show no more than 0.5 volts while cranking. Higher readings indicate excessive resistance from corroded connections, damaged cables, or loose terminals that cause slow cranking.",
    diagram: "",
    terms: ["voltage_drop_test", "starter_motor", "battery", "dmm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Battery_for_a_car.jpg/640px-Battery_for_a_car.jpg",
    youtube: "https://www.youtube.com/watch?v=LGB6ZEjGm7E",
    youtubeTitle: "Car Battery Testing and Maintenance",
    qChinese: "技师A说正极蓄电池电缆在起动时的电压降应小于0.5伏。技师B说蓄电池电缆高电阻会导致起动缓慢。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都是正确的。从蓄电池正极柱到起动机端子的正极电缆电压降测试，在起动时应不超过0.5伏。更高的读数表示由腐蚀的连接、损坏的电缆或松动的端子造成的过大电阻导致起动缓慢。",
  },
  {
    id: 83,
    q: "What is the normal charging system voltage range at idle with accessories off?",
    options: [
      "A) 10.5 to 11.5 volts",
      "B) 12.0 to 12.6 volts",
      "C) 13.5 to 14.8 volts",
      "D) 15.5 to 16.5 volts"
    ],
    answer: 2,
    explanation: "A properly functioning charging system should produce between 13.5 and 14.8 volts at idle with accessories off. This voltage is needed to charge the battery and power electrical systems. Voltage below this range indicates under-charging, while voltage above 15 volts indicates over-charging, both requiring diagnosis.",
    diagram: "",
    terms: ["alternator", "battery", "dmm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Battery_for_a_car.jpg/640px-Battery_for_a_car.jpg",
    youtube: "https://www.youtube.com/watch?v=LGB6ZEjGm7E",
    youtubeTitle: "Car Battery Testing and Maintenance",
    qChinese: "怠速且关闭附件时，正常的充电系统电压范围是多少？",
    optionsChinese: [
      "A) 10.5至11.5伏",
      "B) 12.0至12.6伏",
      "C) 13.5至14.8伏",
      "D) 15.5至16.5伏"
    ],
    explanationChinese: "正常工作的充电系统在怠速且关闭附件时应产生13.5至14.8伏的电压。该电压用于为蓄电池充电和为电气系统供电。低于此范围表示充电不足，高于15伏表示过充，两者都需要诊断。",
  },
  {
    id: 84,
    q: "A vehicle's headlights are dim at idle but brighten when the engine is revved. What is the MOST likely cause?",
    options: [
      "A) A faulty headlight switch",
      "B) A weak alternator or loose alternator drive belt",
      "C) High-resistance headlight ground connections",
      "D) A short circuit in the headlight wiring"
    ],
    answer: 1,
    explanation: "Headlights that are dim at idle but brighten at higher RPM indicate the alternator is not producing sufficient output at idle speed. This can be caused by a worn alternator with weak output, a slipping drive belt, or a faulty voltage regulator. The charging system should be tested.",
    diagram: "",
    terms: ["alternator", "serpentine_belt", "battery"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Battery_for_a_car.jpg/640px-Battery_for_a_car.jpg",
    youtube: "https://www.youtube.com/watch?v=LGB6ZEjGm7E",
    youtubeTitle: "Car Battery Testing and Maintenance",
    qChinese: "一辆车的前照灯在怠速时变暗，但提高转速时变亮。最可能的原因是什么？",
    optionsChinese: [
      "A) 前照灯开关故障",
      "B) 发电机输出不足或发电机驱动皮带松动",
      "C) 前照灯接地连接高电阻",
      "D) 前照灯线路短路"
    ],
    explanationChinese: "前照灯在怠速时暗但在高转速时变亮，表明发电机在怠速时输出不足。这可能是由磨损的发电机输出变弱、驱动皮带打滑或电压调节器故障造成的。应测试充电系统。",
  },
  {
    id: 85,
    q: "A technician is replacing a headlight bulb. All of the following are important precautions EXCEPT:",
    options: [
      "A) Avoid touching the glass of a halogen bulb with bare fingers",
      "B) Verify the replacement bulb is the correct type and wattage",
      "C) Aim the headlights after replacement if required",
      "D) Apply dielectric grease directly to the bulb glass for better heat dissipation"
    ],
    answer: 3,
    explanation: "Dielectric grease should not be applied to the bulb glass. It is applied to the electrical connector to prevent corrosion. Touching a halogen bulb with bare fingers leaves oils that create hot spots and shorten bulb life. The correct bulb type must be used, and headlight aim should be checked.",
    diagram: "",
    terms: ["fuse", "relay", "wiring_diagram"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Battery_for_a_car.jpg/640px-Battery_for_a_car.jpg",
    youtube: "https://www.youtube.com/watch?v=LGB6ZEjGm7E",
    youtubeTitle: "Car Battery Testing and Maintenance",
    qChinese: "技师正在更换前照灯灯泡。以下所有都是重要注意事项，除了：",
    optionsChinese: [
      "A) 避免用裸手触摸卤素灯泡的玻璃",
      "B) 确认更换灯泡的类型和瓦数正确",
      "C) 更换后如有需要应调整前照灯指向",
      "D) 在灯泡玻璃上直接涂抹硅脂以改善散热"
    ],
    explanationChinese: "不应在灯泡玻璃上涂抹硅脂。硅脂应涂在电气连接器上以防止腐蚀。用裸手触摸卤素灯泡会留下油脂，产生热点并缩短灯泡寿命。必须使用正确的灯泡类型，并应检查前照灯指向。",
  },
  {
    id: 86,
    q: "Several exterior lights on a vehicle are not working, but the fuses are all good. What should the technician check NEXT?",
    options: [
      "A) Replace all the light bulbs",
      "B) Check the common ground connection for the affected lights",
      "C) Replace the light switch",
      "D) Check the alternator output"
    ],
    answer: 1,
    explanation: "When multiple lights on the same circuit fail simultaneously with good fuses, a bad common ground connection is the most likely cause. Exterior lights often share ground points that can corrode. Checking and cleaning the ground connection is the most logical next step before replacing components.",
    diagram: "",
    terms: ["ground_circuit", "wiring_diagram", "fuse", "voltage_drop_test"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Battery_for_a_car.jpg/640px-Battery_for_a_car.jpg",
    youtube: "https://www.youtube.com/watch?v=LGB6ZEjGm7E",
    youtubeTitle: "Car Battery Testing and Maintenance",
    qChinese: "一辆车的多个外部灯不工作，但保险丝都完好。技师接下来应检查什么？",
    optionsChinese: [
      "A) 更换所有灯泡",
      "B) 检查受影响灯的公共接地连接",
      "C) 更换灯光开关",
      "D) 检查发电机输出"
    ],
    explanationChinese: "当同一电路上的多个灯在保险丝完好的情况下同时失效时，公共接地连接不良是最可能的原因。外部灯通常共用接地点，这些接地点可能会腐蚀。在更换部件之前，检查和清洁接地连接是最合理的下一步。",
  },
  {
    id: 87,
    q: "The horn on a vehicle does not work. The fuse is good. What should the technician check NEXT?",
    options: [
      "A) Replace the horn relay",
      "B) Check for power and ground at the horn and test the horn relay and switch circuit",
      "C) Replace the clock spring",
      "D) Replace the horn"
    ],
    answer: 1,
    explanation: "With a good fuse, the technician should systematically test the horn circuit. Check for power and ground at the horn connector, test the horn relay operation, and verify the horn switch is providing a ground signal through the clock spring. This identifies the specific failed component.",
    diagram: "",
    terms: ["relay", "fuse", "wiring_diagram", "dmm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Battery_for_a_car.jpg/640px-Battery_for_a_car.jpg",
    youtube: "https://www.youtube.com/watch?v=LGB6ZEjGm7E",
    youtubeTitle: "Car Battery Testing and Maintenance",
    qChinese: "一辆车的喇叭不工作。保险丝完好。技师接下来应检查什么？",
    optionsChinese: [
      "A) 更换喇叭继电器",
      "B) 检查喇叭处的电源和接地，并测试喇叭继电器和开关电路",
      "C) 更换时钟弹簧",
      "D) 更换喇叭"
    ],
    explanationChinese: "在保险丝完好的情况下，技师应系统地测试喇叭电路。检查喇叭连接器处的电源和接地，测试喇叭继电器工作情况，并验证喇叭开关是否通过时钟弹簧提供接地信号。这样可以确定具体的故障部件。",
  },
  {
    id: 88,
    q: "A vehicle's windshield wipers operate on low speed only. High speed does not work. What is the MOST likely cause?",
    options: [
      "A) A blown wiper fuse",
      "B) A faulty wiper motor high-speed brush or internal connection",
      "C) A clogged washer nozzle",
      "D) Worn wiper blades"
    ],
    answer: 1,
    explanation: "When wipers work on low speed but not high speed, the most likely cause is a failure in the high-speed circuit of the wiper motor, such as a worn brush or open internal winding. The multi-speed switch or its wiring could also be at fault. The low-speed circuit is separate and still functional.",
    diagram: "",
    terms: ["wiper_blade", "fuse", "wiring_diagram"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tire_valve_stem.jpg/640px-Tire_valve_stem.jpg",
    youtube: "https://www.youtube.com/watch?v=W7_3viOGo18",
    youtubeTitle: "Wiper Blade Selection and Replacement",
    qChinese: "一辆车的雨刮器只能在低速工作。高速不工作。最可能的原因是什么？",
    optionsChinese: [
      "A) 雨刮器保险丝烧断",
      "B) 雨刮器电机高速电刷或内部连接故障",
      "C) 喷水嘴堵塞",
      "D) 雨刮片磨损"
    ],
    explanationChinese: "雨刮器在低速工作但高速不工作时，最可能的原因是雨刮器电机高速电路故障，如电刷磨损或内部绕组断路。多速开关或其线路也可能有故障。低速电路是独立的，仍然功能正常。",
  },
  {
    id: 89,
    q: "A vehicle's fuel gauge reads empty constantly even though the tank is full. What is the MOST likely cause?",
    options: [
      "A) A faulty instrument cluster voltage regulator",
      "B) A faulty fuel tank sending unit or open circuit in its wiring",
      "C) A blown fuse for the instrument panel",
      "D) A bad fuel pump"
    ],
    answer: 1,
    explanation: "A fuel gauge that constantly reads empty with a full tank most likely has a faulty fuel tank sending unit or an open circuit in the wiring between the sending unit and the gauge. The sending unit contains a float-operated variable resistor that changes resistance with fuel level. An open circuit reads as empty.",
    diagram: "",
    terms: ["ohms_law", "wiring_diagram", "dmm", "fuse"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Battery_for_a_car.jpg/640px-Battery_for_a_car.jpg",
    youtube: "https://www.youtube.com/watch?v=LGB6ZEjGm7E",
    youtubeTitle: "Car Battery Testing and Maintenance",
    qChinese: "一辆车的燃油表始终显示空，即使油箱是满的。最可能的原因是什么？",
    optionsChinese: [
      "A) 仪表盘电压调节器故障",
      "B) 油箱传感器故障或其线路断路",
      "C) 仪表盘保险丝烧断",
      "D) 燃油泵故障"
    ],
    explanationChinese: "燃油表在油箱满的情况下始终显示空，最可能是油箱传感器故障或传感器与仪表之间的线路断路。传感器包含一个随燃油液位变化电阻的浮子式可变电阻器。断路会读为空。",
  },
  {
    id: 90,
    q: "When a fuse blows repeatedly after replacement, what does this indicate?",
    options: [
      "A) The replacement fuse is defective",
      "B) There is a short circuit or excessive current draw in the protected circuit",
      "C) The battery voltage is too high",
      "D) The fuse box needs to be replaced"
    ],
    answer: 1,
    explanation: "A fuse that blows repeatedly indicates a short circuit or excessive current draw in the circuit it protects. The technician should diagnose the circuit to find the cause, such as a pinched wire, water intrusion, or a failed component. Installing a higher-rated fuse is never the correct solution.",
    diagram: "",
    terms: ["fuse", "series_circuit", "wiring_diagram", "dmm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Battery_for_a_car.jpg/640px-Battery_for_a_car.jpg",
    youtube: "https://www.youtube.com/watch?v=LGB6ZEjGm7E",
    youtubeTitle: "Car Battery Testing and Maintenance",
    qChinese: "保险丝在更换后反复烧断，这表示什么？",
    optionsChinese: [
      "A) 更换的保险丝有缺陷",
      "B) 被保护电路中存在短路或过大电流消耗",
      "C) 蓄电池电压过高",
      "D) 保险丝盒需要更换"
    ],
    explanationChinese: "反复烧断的保险丝表示其保护的电路中存在短路或过大电流消耗。技师应诊断电路以找到原因，如线束被夹住、进水或部件故障。安装更高额定值的保险丝绝不是正确的解决方案。",
  },
  {
    id: 91,
    q: "Technician A says corroded battery cable terminals can cause a no-start condition. Technician B says battery cable ends should be cleaned and coated with a protective spray or grease during service. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Corrosion on battery cable terminals creates high resistance that can prevent sufficient current flow to the starter motor, causing a no-start condition. After cleaning, terminals should be coated with battery terminal protector spray or dielectric grease to prevent future corrosion.",
    diagram: "",
    terms: ["battery", "battery_service", "voltage_drop_test", "starter_motor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Battery_for_a_car.jpg/640px-Battery_for_a_car.jpg",
    youtube: "https://www.youtube.com/watch?v=LGB6ZEjGm7E",
    youtubeTitle: "Car Battery Testing and Maintenance",
    qChinese: "技师A说蓄电池电缆端子腐蚀会导致无法启动。技师B说保养时应清洁蓄电池电缆端子并涂上保护喷剂或油脂。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都是正确的。蓄电池电缆端子上的腐蚀会产生高电阻，阻止足够的电流流向起动机，导致无法启动。清洁后，端子应涂上蓄电池端子保护喷剂或硅脂以防止将来腐蚀。",
  },
  {
    id: 92,
    q: "A fully charged 12-volt automotive battery should read approximately what voltage with no load?",
    options: [
      "A) 11.0 volts",
      "B) 12.6 volts",
      "C) 13.5 volts",
      "D) 14.2 volts"
    ],
    answer: 1,
    explanation: "A fully charged 12-volt automotive battery should read approximately 12.6 volts with no load and the engine off. A reading of 12.4 volts indicates about 75% charge. Below 12.0 volts, the battery is significantly discharged. Readings of 13.5 volts and above indicate the charging system is operating.",
    diagram: "",
    terms: ["battery", "dmm", "battery_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Battery_for_a_car.jpg/640px-Battery_for_a_car.jpg",
    youtube: "https://www.youtube.com/watch?v=LGB6ZEjGm7E",
    youtubeTitle: "Car Battery Testing and Maintenance",
    qChinese: "一块充满电的12伏汽车蓄电池在无负载时应读取大约多少电压？",
    optionsChinese: [
      "A) 11.0伏",
      "B) 12.6伏",
      "C) 13.5伏",
      "D) 14.2伏"
    ],
    explanationChinese: "充满电的12伏汽车蓄电池在无负载且发动机熄火时应读取大约12.6伏。读数为12.4伏表示约75%的电量。低于12.0伏表示蓄电池明显亏电。13.5伏及以上的读数表示充电系统正在工作。",
  },
  {
    id: 93,
    q: "What is the purpose of a starter relay or solenoid?",
    options: [
      "A) To regulate alternator output voltage",
      "B) To switch high starter motor current using a low-current signal from the ignition switch",
      "C) To provide a ground path for the ignition system",
      "D) To boost battery voltage for starting"
    ],
    answer: 1,
    explanation: "The starter relay or solenoid acts as a high-current switch that connects the battery directly to the starter motor. It is activated by a low-current signal from the ignition switch. This design protects the ignition switch from the high current draw of the starter motor, which can exceed 200 amps.",
    diagram: "",
    terms: ["starter_motor", "relay", "battery"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Battery_for_a_car.jpg/640px-Battery_for_a_car.jpg",
    youtube: "https://www.youtube.com/watch?v=LGB6ZEjGm7E",
    youtubeTitle: "Car Battery Testing and Maintenance",
    qChinese: "起动机继电器或电磁开关的作用是什么？",
    optionsChinese: [
      "A) 调节发电机输出电压",
      "B) 使用点火开关的小电流信号来切换起动机的大电流",
      "C) 为点火系统提供接地通路",
      "D) 提升蓄电池电压用于启动"
    ],
    explanationChinese: "起动机继电器或电磁开关作为大电流开关，将蓄电池直接连接到起动机。它由点火开关发出的小电流信号激活。这种设计保护点火开关免受起动机高达200安培以上的大电流损害。",
  },

  // ===== HVAC (Questions 94–100) =====
  {
    id: 94,
    q: "A customer complains the A/C is not blowing cold air. What should the technician verify FIRST?",
    options: [
      "A) Recover and recharge the refrigerant",
      "B) Verify the compressor is engaging and check system pressures and operation",
      "C) Replace the expansion valve",
      "D) Replace the compressor clutch"
    ],
    answer: 1,
    explanation: "Before performing any repairs, the technician should verify the A/C compressor clutch is engaging, check the system pressures with a manifold gauge set, and assess overall system operation. This basic diagnosis determines whether the issue is low charge, compressor failure, or a restriction.",
    diagram: "",
    terms: ["compressor", "refrigerant", "txv", "condenser"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Essential Car Maintenance Checklist",
    qChinese: "客户抱怨空调不出冷风。技师应首先验证什么？",
    optionsChinese: [
      "A) 回收并重新充注制冷剂",
      "B) 验证压缩机是否接合并检查系统压力和运行状况",
      "C) 更换膨胀阀",
      "D) 更换压缩机离合器"
    ],
    explanationChinese: "在进行任何维修之前，技师应验证空调压缩机离合器是否接合，使用歧管压力表检查系统压力，并评估系统整体运行状况。这一基本诊断确定问题是制冷剂不足、压缩机故障还是系统堵塞。",
  },
  {
    id: 95,
    q: "Technician A says using the wrong refrigerant type can damage the A/C system. Technician B says the refrigerant type is listed on a label under the hood. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Mixing refrigerant types or using the wrong type can damage compressors, seals, and other A/C components. The vehicle has an underhood label that specifies the correct refrigerant type and system capacity. Most modern vehicles use R-134a or R-1234yf refrigerant.",
    diagram: "",
    terms: ["refrigerant", "compressor", "condenser", "evaporator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Essential Car Maintenance Checklist",
    qChinese: "技师A说使用错误类型的制冷剂会损坏空调系统。技师B说制冷剂类型标注在发动机舱标签上。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都是正确的。混用制冷剂类型或使用错误类型会损坏压缩机、密封件和其他空调部件。车辆发动机舱有一个标签，注明正确的制冷剂类型和系统容量。大多数现代车辆使用R-134a或R-1234yf制冷剂。",
  },
  {
    id: 96,
    q: "During an A/C system inspection, what should the technician visually check?",
    options: [
      "A) Only the refrigerant charge level using sight glass",
      "B) Compressor, hoses, fittings for leaks and damage; condenser for debris; drive belt condition",
      "C) Only the compressor clutch air gap",
      "D) Only the cabin air filter"
    ],
    answer: 1,
    explanation: "A visual A/C inspection includes checking the compressor for leaks and damage, inspecting all hoses and fittings for signs of oil leaks that indicate refrigerant loss, examining the condenser for debris and damage, checking the drive belt condition, and verifying electrical connections are secure.",
    diagram: "",
    terms: ["compressor", "condenser", "refrigerant_leak_detection", "serpentine_belt"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Multi-Point Vehicle Inspection Walkthrough",
    qChinese: "在空调系统检查中，技师应目视检查什么？",
    optionsChinese: [
      "A) 仅通过视液镜检查制冷剂充注量",
      "B) 检查压缩机、软管、接头是否有泄漏和损坏；冷凝器是否有杂物；驱动皮带状况",
      "C) 仅检查压缩机离合器间隙",
      "D) 仅检查空调滤芯"
    ],
    explanationChinese: "空调目视检查包括检查压缩机是否有泄漏和损坏，检查所有软管和接头是否有表明制冷剂泄漏的油渍，检查冷凝器是否有杂物和损坏，检查驱动皮带状况，以及验证电气连接是否牢固。",
  },
  {
    id: 97,
    q: "The A/C condenser is partially blocked by leaves and debris. What effect does this have on system operation?",
    options: [
      "A) No effect on A/C performance",
      "B) Reduced cooling performance and higher than normal high-side pressures",
      "C) Lower than normal high-side pressures",
      "D) The compressor will not engage"
    ],
    answer: 1,
    explanation: "A condenser blocked by debris cannot dissipate heat effectively, causing higher than normal high-side pressures and reduced cooling performance. The system must work harder to reject heat, which can lead to compressor damage. The condenser should be carefully cleaned to restore proper airflow.",
    diagram: "",
    terms: ["condenser", "compressor", "subcooling", "refrigerant"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Essential Car Maintenance Checklist",
    qChinese: "空调冷凝器被树叶和杂物部分堵塞。这对系统运行有什么影响？",
    optionsChinese: [
      "A) 对空调性能没有影响",
      "B) 制冷性能下降，高压侧压力高于正常值",
      "C) 高压侧压力低于正常值",
      "D) 压缩机将无法接合"
    ],
    explanationChinese: "被杂物堵塞的冷凝器无法有效散热，导致高压侧压力高于正常值和制冷性能下降。系统必须更加努力地排放热量，可能导致压缩机损坏。应仔细清洁冷凝器以恢复正常气流。",
  },
  {
    id: 98,
    q: "When should the cabin air filter be replaced?",
    options: [
      "A) Only when the A/C stops working",
      "B) At the interval recommended by the manufacturer or when visibly dirty or restricted",
      "C) Every oil change",
      "D) Only when a musty odor is present"
    ],
    answer: 1,
    explanation: "The cabin air filter should be replaced at the manufacturer's recommended interval, typically every 15,000 to 30,000 miles, or sooner if it is visibly dirty or restricted. A clogged cabin air filter reduces airflow through the HVAC system and can cause poor heating and cooling performance.",
    diagram: "",
    terms: ["cabin_air_filter", "blower_motor", "evaporator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Cabin Air Filter Replacement",
    qChinese: "空调滤芯应在什么时候更换？",
    optionsChinese: [
      "A) 仅在空调停止工作时",
      "B) 按制造商建议的周期或在明显脏污或堵塞时",
      "C) 每次换油时",
      "D) 仅在出现霉味时"
    ],
    explanationChinese: "空调滤芯应按制造商建议的周期更换，通常每15,000至30,000英里，或在明显脏污或堵塞时提前更换。堵塞的空调滤芯会减少通过HVAC系统的气流，导致制热和制冷性能不佳。",
  },
  {
    id: 99,
    q: "The A/C compressor drive belt is cracked and glazed. What should the technician do?",
    options: [
      "A) Apply belt dressing to extend belt life",
      "B) Replace the drive belt and inspect the tensioner and pulleys",
      "C) Tighten the belt to increase tension",
      "D) Continue to use it until the next scheduled service"
    ],
    answer: 1,
    explanation: "A cracked and glazed drive belt should be replaced immediately. Belt dressing is a temporary fix that can actually accelerate deterioration. When replacing the belt, the tensioner and all pulleys should be inspected for wear, bearing roughness, and proper operation to prevent premature new belt failure.",
    diagram: "",
    terms: ["serpentine_belt", "compressor", "multipoint_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=W7_3viOGo18",
    youtubeTitle: "Serpentine Belt Replacement Guide",
    qChinese: "空调压缩机驱动皮带出现裂纹和老化光泽。技师应该怎么做？",
    optionsChinese: [
      "A) 涂皮带保养剂以延长皮带寿命",
      "B) 更换驱动皮带并检查张紧器和皮带轮",
      "C) 拧紧皮带以增加张力",
      "D) 继续使用到下次定期保养"
    ],
    explanationChinese: "出现裂纹和老化光泽的驱动皮带应立即更换。皮带保养剂是临时措施，实际上可能加速劣化。更换皮带时，应检查张紧器和所有皮带轮的磨损情况、轴承粗糙度和正常运行状态，以防新皮带过早故障。",
  },
  {
    id: 100,
    q: "Water is dripping from under the dashboard on the passenger side when the A/C is running. What is the MOST likely cause?",
    options: [
      "A) A leaking heater core",
      "B) A clogged evaporator drain tube",
      "C) A refrigerant leak at the evaporator",
      "D) An overfilled cooling system"
    ],
    answer: 1,
    explanation: "A clogged evaporator drain tube is the most likely cause. The evaporator removes humidity from cabin air, and the condensation normally drains outside the vehicle through a drain tube. When this tube is clogged with debris, water backs up and drips inside the vehicle onto the passenger floor.",
    diagram: "",
    terms: ["evaporator", "heater_core", "blower_motor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Essential Car Maintenance Checklist",
    qChinese: "空调运行时，副驾驶侧仪表板下方有水滴落。最可能的原因是什么？",
    optionsChinese: [
      "A) 暖风水箱泄漏",
      "B) 蒸发器排水管堵塞",
      "C) 蒸发器处制冷剂泄漏",
      "D) 冷却系统加注过多"
    ],
    explanationChinese: "蒸发器排水管堵塞是最可能的原因。蒸发器从车厢空气中去除湿气，冷凝水通常通过排水管排到车外。当排水管被杂物堵塞时，水会积聚并滴到车内副驾驶侧地板上。",
  },
  // ===== G1 ADDITIONAL QUESTIONS (101–200) =====
  // ===== ENGINE OIL SERVICE (Questions 101–115) =====
  {
    id: 101,
    q: "What does the 'W' stand for in a multi-viscosity oil rating such as 5W-30?",
    options: [
      "A) Weight",
      "B) Winter",
      "C) Width",
      "D) Wax"
    ],
    answer: 1,
    explanation: "The 'W' in a multi-viscosity oil rating stands for Winter. The number before the W indicates the oil's cold-temperature flow characteristics. A lower W number means the oil flows more easily when cold, providing better cold-start protection and faster lubrication at startup.",
    diagram: "",
    terms: ["engine_oil", "oil_filter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Motor_oil_refill_with_funnel.JPG/640px-Motor_oil_refill_with_funnel.JPG",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Understanding Motor Oil Viscosity Ratings",
    qChinese: "在多级机油等级如5W-30中，'W'代表什么？",
    optionsChinese: [
      "A) 重量",
      "B) 冬季",
      "C) 宽度",
      "D) 蜡"
    ],
    explanationChinese: "'W'在多级机油等级中代表冬季（Winter）。W前面的数字表示机油在低温下的流动特性。W数字越低，机油在寒冷时流动性越好，可在启动时提供更好的冷启动保护和更快的润滑。",
  },
  {
    id: 102,
    q: "A customer asks for a synthetic blend oil change. Which statement about synthetic blend oil is correct?",
    options: [
      "A) It is 100% chemically engineered oil",
      "B) It is a mixture of conventional and full synthetic oil",
      "C) It is the same as conventional oil with additives",
      "D) It cannot be used in high-mileage engines"
    ],
    answer: 1,
    explanation: "Synthetic blend oil is a mixture of conventional mineral-based oil and full synthetic oil. It offers improved protection and performance over conventional oil at a lower cost than full synthetic. It is suitable for light trucks and SUVs or drivers who want better protection than conventional oil provides.",
    diagram: "",
    terms: ["engine_oil", "oil_filter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Motor_oil_refill_with_funnel.JPG/640px-Motor_oil_refill_with_funnel.JPG",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Synthetic vs Conventional Motor Oil",
    qChinese: "客户要求更换半合成机油。关于半合成机油，哪项说法是正确的？",
    optionsChinese: [
      "A) 它是100%化学合成的机油",
      "B) 它是矿物油和全合成油的混合物",
      "C) 它与添加了添加剂的矿物油相同",
      "D) 它不能用于高里程发动机"
    ],
    explanationChinese: "半合成机油是矿物基础油和全合成油的混合物。它以低于全合成油的价格提供比矿物油更好的保护和性能。适用于轻型卡车和SUV，或希望获得比矿物油更好保护的驾驶者。",
  },
  {
    id: 103,
    q: "What is the PRIMARY purpose of the oil filter bypass valve?",
    options: [
      "A) To filter debris from the oil more effectively",
      "B) To allow oil to flow to the engine when the filter is clogged",
      "C) To regulate oil pressure in the system",
      "D) To prevent oil from draining back into the pan"
    ],
    answer: 1,
    explanation: "The oil filter bypass valve allows oil to flow around a clogged filter so the engine still receives lubrication. Without this valve, a severely clogged filter could starve the engine of oil, causing catastrophic damage. Unfiltered oil is better than no oil at all for engine survival.",
    diagram: "",
    terms: ["oil_filter", "engine_oil"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Oil_filter_-_after_1000_km.jpg/640px-Oil_filter_-_after_1000_km.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "How Oil Filters Work",
    qChinese: "机油滤清器旁通阀的主要目的是什么？",
    optionsChinese: [
      "A) 更有效地过滤机油中的杂质",
      "B) 当滤清器堵塞时允许机油流向发动机",
      "C) 调节系统中的机油压力",
      "D) 防止机油回流到油底壳"
    ],
    explanationChinese: "机油滤清器旁通阀允许机油绕过堵塞的滤清器，使发动机仍能获得润滑。没有此阀门，严重堵塞的滤清器可能使发动机缺少机油，导致灾难性损坏。未过滤的机油总比没有机油对发动机生存更好。",
  },
  {
    id: 104,
    q: "When installing a new spin-on oil filter, how should the gasket be prepared?",
    options: [
      "A) Leave the gasket dry for a tight seal",
      "B) Apply a thin film of clean engine oil to the gasket",
      "C) Apply thread sealant to the gasket",
      "D) Apply silicone RTV to the gasket surface"
    ],
    answer: 1,
    explanation: "Before installing a spin-on oil filter, a thin film of clean engine oil should be applied to the rubber gasket. This ensures a proper seal, prevents the gasket from twisting or tearing during installation, and allows easier removal at the next oil change service interval.",
    diagram: "",
    terms: ["oil_filter", "engine_oil"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Oil_filter_-_after_1000_km.jpg/640px-Oil_filter_-_after_1000_km.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Proper Oil Filter Installation",
    qChinese: "安装新的旋装式机油滤清器时，应如何处理密封垫圈？",
    optionsChinese: [
      "A) 保持密封垫圈干燥以获得紧密密封",
      "B) 在密封垫圈上涂抹一薄层清洁的发动机机油",
      "C) 在密封垫圈上涂抹螺纹密封剂",
      "D) 在密封垫圈表面涂抹硅酮RTV密封胶"
    ],
    explanationChinese: "安装旋装式机油滤清器之前，应在橡胶密封垫圈上涂抹一薄层清洁的发动机机油。这可确保正确密封，防止密封垫圈在安装过程中扭曲或撕裂，并在下次换油保养时更容易拆卸。",
  },
  {
    id: 105,
    q: "An engine oil dipstick reading shows the oil level is above the full mark. What is the MOST likely concern?",
    options: [
      "A) The engine is running too hot",
      "B) Overfilling can cause foaming, leading to reduced lubrication and possible seal damage",
      "C) The dipstick is reading incorrectly due to temperature",
      "D) The oil filter needs immediate replacement"
    ],
    answer: 1,
    explanation: "Overfilling the engine with oil can cause the crankshaft to whip the oil into foam. Foamy oil does not lubricate properly and can cause bearing damage. Excess oil pressure from overfilling can also damage seals and gaskets, leading to oil leaks and potential engine damage.",
    diagram: "",
    terms: ["engine_oil", "oil_filter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Motor_oil_refill_with_funnel.JPG/640px-Motor_oil_refill_with_funnel.JPG",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Checking Engine Oil Level Correctly",
    qChinese: "发动机机油尺读数显示油位超过满刻度线。最可能的问题是什么？",
    optionsChinese: [
      "A) 发动机运行温度过高",
      "B) 加注过多会导致机油起泡，降低润滑效果并可能损坏密封件",
      "C) 由于温度原因，机油尺读数不正确",
      "D) 机油滤清器需要立即更换"
    ],
    explanationChinese: "发动机机油加注过多会导致曲轴将机油搅成泡沫。泡沫状的机油无法正常润滑，可能导致轴承损坏。过多的机油压力还可能损坏密封件和垫圈，导致机油泄漏和潜在的发动机损坏。",
  },
  {
    id: 106,
    q: "Which API service category indicates an oil is designed for current gasoline engines?",
    options: [
      "A) API GL-5",
      "B) API SP",
      "C) API CK-4",
      "D) API CF"
    ],
    answer: 1,
    explanation: "API SP is the current service category for gasoline engine oils. It provides improved protection against low-speed pre-ignition, timing chain wear, and high-temperature deposits. API CK-4 and CF categories are for diesel engines, while GL-5 is a gear lubricant classification.",
    diagram: "",
    terms: ["engine_oil", "oil_filter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Motor_oil_refill_with_funnel.JPG/640px-Motor_oil_refill_with_funnel.JPG",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Understanding API Oil Ratings",
    qChinese: "哪个API服务类别表示机油是为当前汽油发动机设计的？",
    optionsChinese: [
      "A) API GL-5",
      "B) API SP",
      "C) API CK-4",
      "D) API CF"
    ],
    explanationChinese: "API SP是当前汽油发动机机油的服务类别。它提供了改进的低速预点火保护、正时链磨损保护和高温沉积物保护。API CK-4和CF类别用于柴油发动机，而GL-5是齿轮润滑油分类。",
  },
  {
    id: 107,
    q: "After draining the engine oil, the technician notices the old oil filter gasket is stuck to the engine block. What should be done?",
    options: [
      "A) Install the new filter on top of the old gasket",
      "B) Remove the old gasket before installing the new filter",
      "C) Apply extra sealant to the new filter gasket",
      "D) Use a thicker replacement gasket"
    ],
    answer: 1,
    explanation: "The old gasket must be completely removed before installing the new filter. Installing a new filter over an old gasket creates a double-gasket condition that will cause a severe oil leak, potentially resulting in total oil loss and catastrophic engine failure within minutes of startup.",
    diagram: "",
    terms: ["oil_filter", "engine_oil"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Oil_filter_-_after_1000_km.jpg/640px-Oil_filter_-_after_1000_km.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Avoiding Double Gasket Oil Filter Mistakes",
    qChinese: "排出发动机机油后，技师发现旧机油滤清器密封垫圈粘在发动机缸体上。应该怎么做？",
    optionsChinese: [
      "A) 在旧密封垫圈上安装新滤清器",
      "B) 在安装新滤清器之前拆除旧密封垫圈",
      "C) 在新滤清器密封垫圈上涂抹额外的密封剂",
      "D) 使用更厚的替换密封垫圈"
    ],
    explanationChinese: "在安装新滤清器之前必须完全拆除旧密封垫圈。在旧密封垫圈上安装新滤清器会造成双垫圈情况，导致严重的机油泄漏，可能在启动几分钟内导致机油完全流失和灾难性的发动机故障。",
  },
  {
    id: 108,
    q: "A vehicle requires 0W-20 oil but the technician only has 5W-30 available. What is the correct action?",
    options: [
      "A) Use the 5W-30 since it is close enough",
      "B) Do not substitute; obtain the correct 0W-20 oil specified by the manufacturer",
      "C) Mix the two oils together to approximate the correct viscosity",
      "D) Use 5W-30 and add an oil viscosity reducer additive"
    ],
    answer: 1,
    explanation: "Always use the oil viscosity specified by the vehicle manufacturer. Modern engines are designed with tight tolerances and specific oil passage sizes. Using incorrect viscosity can affect variable valve timing systems, reduce fuel economy, and potentially void the manufacturer's warranty.",
    diagram: "",
    terms: ["engine_oil", "oil_filter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Motor_oil_refill_with_funnel.JPG/640px-Motor_oil_refill_with_funnel.JPG",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Choosing the Right Motor Oil",
    qChinese: "一辆车需要0W-20机油，但技师只有5W-30可用。正确的做法是什么？",
    optionsChinese: [
      "A) 使用5W-30因为足够接近",
      "B) 不要替代；获取制造商指定的正确0W-20机油",
      "C) 将两种机油混合以接近正确的粘度",
      "D) 使用5W-30并添加机油粘度降低剂"
    ],
    explanationChinese: "始终使用车辆制造商指定的机油粘度。现代发动机设计有严格的公差和特定的油道尺寸。使用不正确的粘度会影响可变气门正时系统，降低燃油经济性，并可能使制造商的保修失效。",
  },
  {
    id: 109,
    q: "How should used engine oil be disposed of at the shop?",
    options: [
      "A) Pour it into the storm drain",
      "B) Collect it in an approved container and arrange for recycling by a licensed waste hauler",
      "C) Mix it with other waste fluids and dispose in regular trash",
      "D) Burn it in a waste oil heater without any permits"
    ],
    answer: 1,
    explanation: "Used engine oil must be collected in approved containers and recycled by a licensed waste hauler per EPA regulations. Pouring oil into drains or soil is illegal and harmful. Some shops use permitted waste oil heaters, but proper permits and equipment are required by local regulations.",
    diagram: "",
    terms: ["engine_oil", "oil_filter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Motor_oil_refill_with_funnel.JPG/640px-Motor_oil_refill_with_funnel.JPG",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Proper Used Oil Disposal Procedures",
    qChinese: "在车间应如何处理废旧发动机机油？",
    optionsChinese: [
      "A) 倒入雨水排水沟",
      "B) 收集在认可的容器中，并安排由持证废物运输商回收",
      "C) 与其他废液混合并放入普通垃圾处理",
      "D) 无需任何许可证即可在废油加热器中燃烧"
    ],
    explanationChinese: "废旧发动机机油必须按照EPA法规收集在认可的容器中，并由持证废物运输商回收。将机油倒入排水沟或土壤是违法且有害的。一些车间使用获许可的废油加热器，但当地法规要求必须有适当的许可证和设备。",
  },
  {
    id: 110,
    q: "What does the oil life monitoring system in modern vehicles measure to determine when an oil change is needed?",
    options: [
      "A) Only the mileage driven since the last oil change",
      "B) Engine operating conditions such as temperature, RPM, and load to calculate oil degradation",
      "C) The color of the oil through an optical sensor",
      "D) The oil level in the crankcase only"
    ],
    answer: 1,
    explanation: "Modern oil life monitoring systems use algorithms that track engine operating conditions including temperature, RPM, load, cold starts, and trip length to calculate how much the oil has degraded. This is more accurate than simple mileage-based intervals and helps optimize oil change frequency.",
    diagram: "",
    terms: ["engine_oil", "oil_filter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Motor_oil_refill_with_funnel.JPG/640px-Motor_oil_refill_with_funnel.JPG",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "How Oil Life Monitors Work",
    qChinese: "现代车辆中的机油寿命监测系统通过测量什么来确定何时需要换油？",
    optionsChinese: [
      "A) 仅测量自上次换油以来的行驶里程",
      "B) 发动机运行条件如温度、转速和负荷来计算机油降解程度",
      "C) 通过光学传感器检测机油颜色",
      "D) 仅测量曲轴箱中的机油液位"
    ],
    explanationChinese: "现代机油寿命监测系统使用算法跟踪发动机运行条件，包括温度、转速、负荷、冷启动和行程长度，以计算机油降解程度。这比简单的基于里程的间隔更准确，有助于优化换油频率。",
  },
  {
    id: 111,
    q: "After completing an oil change, the oil pressure warning light remains on after starting the engine. What should the technician do FIRST?",
    options: [
      "A) Continue running the engine to build oil pressure",
      "B) Shut off the engine immediately and verify the oil level and filter installation",
      "C) Add an oil pressure additive",
      "D) Replace the oil pressure sending unit"
    ],
    answer: 1,
    explanation: "If the oil pressure light stays on after an oil change, the engine should be shut off immediately to prevent damage. The technician should verify the correct oil level and check that the oil filter is properly installed and not leaking. Running without oil pressure causes rapid engine damage.",
    diagram: "",
    terms: ["engine_oil", "oil_filter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Oil_filter_-_after_1000_km.jpg/640px-Oil_filter_-_after_1000_km.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Oil Pressure Warning Light Diagnosis",
    qChinese: "完成换油后，启动发动机后机油压力警告灯仍然亮着。技师应首先做什么？",
    optionsChinese: [
      "A) 继续运转发动机以建立机油压力",
      "B) 立即关闭发动机并验证机油液位和滤清器安装",
      "C) 添加机油压力添加剂",
      "D) 更换机油压力传感器"
    ],
    explanationChinese: "如果换油后机油压力灯仍然亮着，应立即关闭发动机以防止损坏。技师应验证正确的机油液位并检查机油滤清器是否正确安装且没有泄漏。在没有机油压力的情况下运转会导致发动机迅速损坏。",
  },
  {
    id: 112,
    q: "What is the purpose of the anti-drain back valve in an oil filter?",
    options: [
      "A) To regulate the flow of oil through the filter",
      "B) To prevent oil from draining out of the filter when the engine is shut off",
      "C) To filter out larger debris particles",
      "D) To increase oil pressure during cold starts"
    ],
    answer: 1,
    explanation: "The anti-drain back valve prevents oil from draining out of the filter when the engine is off. This ensures oil is immediately available to the engine on startup, reducing dry-start wear. Without this valve, the engine would briefly run without filtered oil each time it is started.",
    diagram: "",
    terms: ["oil_filter", "engine_oil"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Oil_filter_-_after_1000_km.jpg/640px-Oil_filter_-_after_1000_km.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Oil Filter Components Explained",
    qChinese: "机油滤清器中防回流阀的目的是什么？",
    optionsChinese: [
      "A) 调节通过滤清器的机油流量",
      "B) 防止发动机熄火时机油从滤清器中流出",
      "C) 过滤较大的杂质颗粒",
      "D) 在冷启动时增加机油压力"
    ],
    explanationChinese: "防回流阀防止发动机熄火时机油从滤清器中流出。这确保启动时机油立即可用于发动机，减少干启动磨损。没有此阀门，发动机每次启动时都会短暂在没有过滤机油的情况下运转。",
  },
  {
    id: 113,
    q: "Technician A says high-mileage oil contains seal conditioners to help reduce oil leaks. Technician B says high-mileage oil has a different viscosity than standard oil. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Technician A is correct. High-mileage oils contain seal conditioners that help soften and swell aging seals to reduce oil seepage and leaks. They are available in the same viscosity grades as standard oils, so Technician B is incorrect about having different viscosity ratings.",
    diagram: "",
    terms: ["engine_oil", "oil_filter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Motor_oil_refill_with_funnel.JPG/640px-Motor_oil_refill_with_funnel.JPG",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "High Mileage Oil Benefits",
    qChinese: "技师A说高里程机油含有密封调理剂以帮助减少机油泄漏。技师B说高里程机油与标准机油的粘度不同。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "技师A是正确的。高里程机油含有密封调理剂，可帮助软化和膨胀老化的密封件以减少机油渗漏。它们与标准机油具有相同的粘度等级，因此技师B关于粘度不同的说法是不正确的。",
  },
  {
    id: 114,
    q: "What is the recommended method for tightening a spin-on oil filter?",
    options: [
      "A) Use an oil filter wrench to tighten it as much as possible",
      "B) Hand-tighten until the gasket contacts, then turn an additional 3/4 to 1 turn by hand",
      "C) Tighten with a wrench until the filter deforms slightly",
      "D) Apply the filter loosely to allow for expansion"
    ],
    answer: 1,
    explanation: "The proper method is to hand-tighten the filter until the gasket contacts the mounting surface, then turn an additional three-quarter to one full turn by hand. Over-tightening with a wrench can crush the gasket or damage the filter, making it difficult to remove at the next service.",
    diagram: "",
    terms: ["oil_filter", "engine_oil"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Oil_filter_-_after_1000_km.jpg/640px-Oil_filter_-_after_1000_km.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "How to Install an Oil Filter",
    qChinese: "旋装式机油滤清器的推荐拧紧方法是什么？",
    optionsChinese: [
      "A) 使用机油滤清器扳手尽可能拧紧",
      "B) 手动拧紧直到密封垫圈接触，然后手动再拧3/4到1圈",
      "C) 用扳手拧紧直到滤清器略微变形",
      "D) 松散安装滤清器以留出膨胀空间"
    ],
    explanationChinese: "正确的方法是手动拧紧滤清器直到密封垫圈接触安装面，然后手动再拧四分之三到一整圈。用扳手过度拧紧可能会压坏密封垫圈或损坏滤清器，使其在下次保养时难以拆卸。",
  },
  {
    id: 115,
    q: "A vehicle's engine oil appears milky white on the dipstick. What is the MOST likely cause?",
    options: [
      "A) The wrong type of oil was installed",
      "B) Coolant is mixing with the engine oil due to an internal leak",
      "C) The oil is overfilled",
      "D) Normal condensation from short trips in cold weather only"
    ],
    answer: 1,
    explanation: "Milky white engine oil typically indicates coolant contamination from an internal leak such as a blown head gasket, cracked cylinder head, or cracked block. While condensation can cause mild milkiness on the oil cap, milky oil on the dipstick warrants immediate diagnosis for coolant intrusion.",
    diagram: "",
    terms: ["engine_oil", "coolant", "thermostat"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Motor_oil_refill_with_funnel.JPG/640px-Motor_oil_refill_with_funnel.JPG",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Milky Oil Diagnosis - Head Gasket Failure",
    qChinese: "车辆发动机机油在机油尺上呈乳白色。最可能的原因是什么？",
    optionsChinese: [
      "A) 安装了错误类型的机油",
      "B) 由于内部泄漏，冷却液与发动机机油混合",
      "C) 机油加注过多",
      "D) 仅在寒冷天气短途行驶时的正常冷凝"
    ],
    explanationChinese: "乳白色的发动机机油通常表示冷却液由于内部泄漏而污染机油，如气缸垫损坏、气缸盖开裂或缸体开裂。虽然冷凝可能导致油盖上轻微的乳化，但机油尺上的乳白色机油需要立即诊断冷却液入侵。",
  },
  // ===== COOLING SYSTEM SERVICE (Questions 116–130) =====
  {
    id: 116,
    q: "What is the PRIMARY function of the thermostat in an engine cooling system?",
    options: [
      "A) To pump coolant through the engine",
      "B) To regulate engine temperature by controlling coolant flow to the radiator",
      "C) To pressurize the cooling system",
      "D) To mix coolant with water"
    ],
    answer: 1,
    explanation: "The thermostat regulates engine operating temperature by controlling coolant flow to the radiator. It stays closed when the engine is cold to allow faster warm-up and opens at a preset temperature to allow coolant circulation through the radiator for cooling. This improves efficiency and reduces emissions.",
    diagram: "",
    terms: ["thermostat", "coolant", "water_pump"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pqFZY6v6OQI",
    youtubeTitle: "How a Thermostat Works",
    qChinese: "发动机冷却系统中恒温器的主要功能是什么？",
    optionsChinese: [
      "A) 将冷却液泵送通过发动机",
      "B) 通过控制冷却液流向散热器来调节发动机温度",
      "C) 对冷却系统加压",
      "D) 将冷却液与水混合"
    ],
    explanationChinese: "恒温器通过控制冷却液流向散热器来调节发动机运行温度。当发动机冷时它保持关闭以允许更快预热，在预设温度时打开以允许冷却液通过散热器循环进行冷却。这提高了效率并减少了排放。",
  },
  {
    id: 117,
    q: "What type of coolant should NEVER be mixed with another type?",
    options: [
      "A) Distilled water and any coolant type",
      "B) Organic Acid Technology (OAT) coolant with Inorganic Acid Technology (IAT) coolant",
      "C) Pre-mixed coolant with concentrate coolant of the same type",
      "D) Coolant from the same manufacturer in different containers"
    ],
    answer: 1,
    explanation: "OAT and IAT coolants should never be mixed. OAT coolant uses organic acids for long-life corrosion protection, while IAT uses silicates and phosphates. Mixing them creates a gel-like substance that can clog the cooling system, reduce heat transfer, and cause engine overheating damage.",
    diagram: "",
    terms: ["coolant", "thermostat", "water_pump"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pqFZY6v6OQI",
    youtubeTitle: "Types of Engine Coolant Explained",
    qChinese: "哪种类型的冷却液绝对不能与另一种类型混合？",
    optionsChinese: [
      "A) 蒸馏水和任何类型的冷却液",
      "B) 有机酸技术（OAT）冷却液与无机酸技术（IAT）冷却液",
      "C) 预混冷却液与相同类型的浓缩冷却液",
      "D) 同一制造商不同容器的冷却液"
    ],
    explanationChinese: "OAT和IAT冷却液绝不能混合。OAT冷却液使用有机酸进行长效防腐保护，而IAT使用硅酸盐和磷酸盐。混合它们会产生凝胶状物质，可能堵塞冷却系统，降低散热效率，并导致发动机过热损坏。",
  },
  {
    id: 118,
    q: "A radiator pressure cap is rated at 16 psi. What happens if it is replaced with a 10 psi cap?",
    options: [
      "A) Nothing, the engine will run the same",
      "B) The coolant boiling point will be lower, increasing the risk of overheating",
      "C) The engine will warm up faster",
      "D) The water pump will work more efficiently"
    ],
    answer: 1,
    explanation: "A lower pressure cap reduces the system pressure, which lowers the coolant boiling point. For every pound of pressure, the boiling point increases about 3 degrees Fahrenheit. Using a 10 psi cap instead of 16 psi reduces the boiling point by approximately 18 degrees, increasing overheating risk.",
    diagram: "",
    terms: ["coolant", "thermostat", "water_pump"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pqFZY6v6OQI",
    youtubeTitle: "Radiator Pressure Cap Function",
    qChinese: "散热器压力盖额定为16 psi。如果更换为10 psi的压力盖会怎样？",
    optionsChinese: [
      "A) 没有影响，发动机运行相同",
      "B) 冷却液沸点会降低，增加过热风险",
      "C) 发动机会更快预热",
      "D) 水泵会更高效地工作"
    ],
    explanationChinese: "较低压力的盖会降低系统压力，从而降低冷却液沸点。每增加一磅压力，沸点约升高3华氏度。使用10 psi的盖代替16 psi会使沸点降低约18度，增加过热风险。",
  },
  {
    id: 119,
    q: "When performing a cooling system flush, what is the correct procedure for refilling with new coolant?",
    options: [
      "A) Fill rapidly to save time",
      "B) Fill slowly and bleed air from the system using the bleeder valve or by following the manufacturer's procedure",
      "C) Fill only with water first, then add coolant concentrate later",
      "D) Fill to the top of the radiator and ignore the overflow reservoir"
    ],
    answer: 1,
    explanation: "When refilling the cooling system, coolant should be added slowly while bleeding trapped air using bleeder valves or the manufacturer's specified procedure. Air pockets can cause hot spots leading to overheating, inaccurate temperature gauge readings, and potential heater core performance issues.",
    diagram: "",
    terms: ["coolant", "thermostat", "water_pump"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pqFZY6v6OQI",
    youtubeTitle: "Cooling System Flush and Refill",
    qChinese: "进行冷却系统冲洗时，加注新冷却液的正确程序是什么？",
    optionsChinese: [
      "A) 快速加注以节省时间",
      "B) 缓慢加注并使用放气阀或按照制造商程序排出系统中的空气",
      "C) 先只加水，然后再添加冷却液浓缩液",
      "D) 加注到散热器顶部并忽略溢流储液壶"
    ],
    explanationChinese: "重新加注冷却系统时，应缓慢添加冷却液，同时使用放气阀或制造商指定的程序排出滞留的空气。气泡会导致热点从而引起过热、温度表读数不准确以及潜在的暖风水箱性能问题。",
  },
  {
    id: 120,
    q: "A coolant hydrometer or refractometer is used to test what property of the coolant?",
    options: [
      "A) The flow rate of the coolant",
      "B) The freeze point and boil-over protection level of the coolant mixture",
      "C) The pH level of the coolant",
      "D) The color of the coolant"
    ],
    answer: 1,
    explanation: "A coolant hydrometer or refractometer tests the concentration of antifreeze in the coolant mixture to determine its freeze point and boil-over protection. The typical recommended mixture is 50/50 antifreeze and water, providing protection to approximately minus 34 degrees Fahrenheit.",
    diagram: "",
    terms: ["coolant", "thermostat"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pqFZY6v6OQI",
    youtubeTitle: "Testing Coolant Concentration",
    qChinese: "冷却液比重计或折光仪用于测试冷却液的什么特性？",
    optionsChinese: [
      "A) 冷却液的流速",
      "B) 冷却液混合物的冰点和防沸保护水平",
      "C) 冷却液的pH值",
      "D) 冷却液的颜色"
    ],
    explanationChinese: "冷却液比重计或折光仪测试冷却液混合物中防冻液的浓度，以确定其冰点和防沸保护。典型的推荐混合比例是50/50防冻液和水，可提供约零下34华氏度的保护。",
  },
  {
    id: 121,
    q: "A vehicle is overheating and the upper radiator hose is cold while the engine is hot. What is the MOST likely cause?",
    options: [
      "A) A faulty water pump",
      "B) A thermostat stuck in the closed position",
      "C) A clogged radiator",
      "D) A faulty radiator fan"
    ],
    answer: 1,
    explanation: "A cold upper radiator hose with a hot engine indicates the thermostat is stuck closed, preventing hot coolant from flowing to the radiator. If the water pump were faulty, there would still be some heat transfer. A clogged radiator or faulty fan would still allow hot coolant into the hose.",
    diagram: "",
    terms: ["thermostat", "coolant", "water_pump"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pqFZY6v6OQI",
    youtubeTitle: "Diagnosing a Stuck Thermostat",
    qChinese: "车辆过热，发动机很热但上水管是冷的。最可能的原因是什么？",
    optionsChinese: [
      "A) 水泵故障",
      "B) 恒温器卡在关闭位置",
      "C) 散热器堵塞",
      "D) 散热器风扇故障"
    ],
    explanationChinese: "发动机很热但上水管冷表明恒温器卡在关闭位置，阻止了热冷却液流向散热器。如果水泵故障，仍然会有一些热量传递。散热器堵塞或风扇故障仍会允许热冷却液进入水管。",
  },
  {
    id: 122,
    q: "What is the correct coolant-to-water ratio for most vehicles in normal climates?",
    options: [
      "A) 70% coolant and 30% water",
      "B) 50% coolant and 50% water",
      "C) 30% coolant and 70% water",
      "D) 100% coolant with no water"
    ],
    answer: 1,
    explanation: "The standard recommended ratio is 50% coolant and 50% distilled water for most vehicles. This mixture provides freeze protection to about minus 34 degrees Fahrenheit and boil-over protection to about 265 degrees Fahrenheit. Pure coolant actually transfers heat less efficiently than a proper mixture.",
    diagram: "",
    terms: ["coolant", "thermostat"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pqFZY6v6OQI",
    youtubeTitle: "Correct Coolant Mixing Ratio",
    qChinese: "在正常气候条件下，大多数车辆的正确冷却液与水的比例是多少？",
    optionsChinese: [
      "A) 70%冷却液和30%水",
      "B) 50%冷却液和50%水",
      "C) 30%冷却液和70%水",
      "D) 100%冷却液不加水"
    ],
    explanationChinese: "大多数车辆的标准推荐比例是50%冷却液和50%蒸馏水。这种混合物提供约零下34华氏度的防冻保护和约265华氏度的防沸保护。纯冷却液的散热效率实际上低于正确比例的混合物。",
  },
  {
    id: 123,
    q: "A technician notices coolant weeping from the water pump weep hole. What does this indicate?",
    options: [
      "A) Normal operation to relieve excess pressure",
      "B) The water pump internal seal is failing and the pump should be replaced",
      "C) The cooling system has too much pressure",
      "D) The coolant level is too high"
    ],
    answer: 1,
    explanation: "Coolant weeping from the water pump weep hole indicates that the internal shaft seal is failing. The weep hole is designed to allow coolant to escape externally rather than contaminating the engine oil through the bearing. The pump should be replaced before complete seal failure occurs.",
    diagram: "",
    terms: ["water_pump", "coolant", "serpentine_belt"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pqFZY6v6OQI",
    youtubeTitle: "Water Pump Failure Signs",
    qChinese: "技师注意到冷却液从水泵泄漏孔渗出。这表明什么？",
    optionsChinese: [
      "A) 正常运行以释放过多压力",
      "B) 水泵内部密封件正在失效，应更换水泵",
      "C) 冷却系统压力过高",
      "D) 冷却液液位太高"
    ],
    explanationChinese: "冷却液从水泵泄漏孔渗出表明内部轴密封件正在失效。泄漏孔的设计目的是让冷却液向外部泄漏，而不是通过轴承污染发动机机油。应在密封完全失效之前更换水泵。",
  },
  {
    id: 124,
    q: "Before removing the radiator cap on a hot engine, what MUST the technician do?",
    options: [
      "A) Remove the cap quickly to release pressure all at once",
      "B) Allow the engine to cool down, then carefully release pressure by turning the cap to the first stop",
      "C) Pour cold water on the radiator cap to cool it",
      "D) Squeeze the upper radiator hose to check for pressure"
    ],
    answer: 1,
    explanation: "The technician must allow the engine to cool before removing the radiator cap. A hot cooling system is under pressure and removing the cap while hot can cause superheated coolant to spray out, causing severe burns. Turn the cap to the first stop to release pressure before fully removing it.",
    diagram: "",
    terms: ["coolant", "thermostat"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pqFZY6v6OQI",
    youtubeTitle: "Safe Radiator Cap Removal",
    qChinese: "在热发动机上拆卸散热器盖之前，技师必须做什么？",
    optionsChinese: [
      "A) 快速拆卸盖子以一次性释放压力",
      "B) 等发动机冷却后，小心地将盖转到第一挡以释放压力",
      "C) 将冷水倒在散热器盖上使其冷却",
      "D) 挤压上水管以检查是否有压力"
    ],
    explanationChinese: "技师必须在拆卸散热器盖之前等发动机冷却。热的冷却系统处于压力之下，在热时拆卸盖子可能导致过热的冷却液喷出，造成严重烫伤。将盖转到第一挡以释放压力，然后再完全拆卸。",
  },
  {
    id: 125,
    q: "What is the purpose of the coolant overflow reservoir (expansion tank)?",
    options: [
      "A) To store extra coolant for emergencies",
      "B) To allow coolant to expand when hot and return to the radiator when the engine cools",
      "C) To filter debris from the coolant",
      "D) To add pressure to the cooling system"
    ],
    answer: 1,
    explanation: "The overflow reservoir allows coolant to expand as it heats up, storing the excess. When the engine cools, a vacuum draws the coolant back into the radiator, maintaining the proper level. This prevents coolant loss from thermal expansion and keeps the system properly filled at all times.",
    diagram: "",
    terms: ["coolant", "thermostat"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pqFZY6v6OQI",
    youtubeTitle: "Coolant Reservoir Function",
    qChinese: "冷却液溢流储液壶（膨胀箱）的目的是什么？",
    optionsChinese: [
      "A) 储存额外冷却液以备紧急情况",
      "B) 允许冷却液在热时膨胀，并在发动机冷却时返回散热器",
      "C) 过滤冷却液中的杂质",
      "D) 为冷却系统增加压力"
    ],
    explanationChinese: "溢流储液壶允许冷却液在加热时膨胀，存储多余的冷却液。当发动机冷却时，真空将冷却液吸回散热器，维持正确的液位。这防止了热膨胀造成的冷却液损失，并始终保持系统正确加注。",
  },
  {
    id: 126,
    q: "A cooling system pressure test shows the system will not hold pressure. The radiator hoses and cap test okay. What should be checked NEXT?",
    options: [
      "A) The thermostat",
      "B) The heater core, water pump, freeze plugs, and head gasket for leaks",
      "C) The coolant temperature sensor",
      "D) The radiator fan clutch"
    ],
    answer: 1,
    explanation: "If hoses and the radiator cap pass the pressure test, other components should be checked for leaks. The heater core, water pump seals, freeze plugs, and head gasket are common sources of coolant leaks. A UV dye test or visual inspection under pressure can help locate the leak source.",
    diagram: "",
    terms: ["coolant", "water_pump", "thermostat"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pqFZY6v6OQI",
    youtubeTitle: "Cooling System Pressure Testing",
    qChinese: "冷却系统压力测试显示系统无法保持压力。散热器水管和盖测试正常。接下来应检查什么？",
    optionsChinese: [
      "A) 恒温器",
      "B) 暖风水箱、水泵、防冻塞和气缸垫是否泄漏",
      "C) 冷却液温度传感器",
      "D) 散热器风扇离合器"
    ],
    explanationChinese: "如果水管和散热器盖通过了压力测试，应检查其他部件是否泄漏。暖风水箱、水泵密封件、防冻塞和气缸垫是常见的冷却液泄漏源。紫外线染料测试或在压力下进行目视检查可以帮助定位泄漏源。",
  },
  {
    id: 127,
    q: "What tool is used to perform a cooling system pressure test?",
    options: [
      "A) A vacuum pump",
      "B) A cooling system pressure tester with adapter fittings",
      "C) A compression gauge",
      "D) A fuel pressure gauge"
    ],
    answer: 1,
    explanation: "A cooling system pressure tester with the correct adapter fitting is used to pressurize the system to the cap rating and check for leaks. The tester connects to the radiator or reservoir neck. If pressure drops, there is a leak in the system that must be found and repaired.",
    diagram: "",
    terms: ["coolant", "water_pump"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pqFZY6v6OQI",
    youtubeTitle: "How to Pressure Test a Cooling System",
    qChinese: "什么工具用于进行冷却系统压力测试？",
    optionsChinese: [
      "A) 真空泵",
      "B) 带适配器接头的冷却系统压力测试仪",
      "C) 压缩测试表",
      "D) 燃油压力表"
    ],
    explanationChinese: "带有正确适配器接头的冷却系统压力测试仪用于将系统加压到压力盖额定值并检查泄漏。测试仪连接到散热器或储液壶口。如果压力下降，则系统中存在泄漏，必须找到并修复。",
  },
  {
    id: 128,
    q: "A radiator hose feels soft and spongy when squeezed. What does this indicate?",
    options: [
      "A) The hose is in good condition",
      "B) The hose is deteriorating internally and should be replaced",
      "C) The cooling system pressure is too low",
      "D) The coolant concentration is too weak"
    ],
    answer: 1,
    explanation: "A soft, spongy radiator hose indicates internal deterioration of the rubber material. The hose may be breaking down from the inside, with particles potentially clogging the radiator or heater core. It should be replaced before it fails and causes a coolant leak or engine overheating.",
    diagram: "",
    terms: ["coolant", "thermostat"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pqFZY6v6OQI",
    youtubeTitle: "Inspecting Radiator Hoses",
    qChinese: "散热器水管在挤压时感觉柔软和海绵状。这表明什么？",
    optionsChinese: [
      "A) 水管状况良好",
      "B) 水管内部正在老化，应更换",
      "C) 冷却系统压力太低",
      "D) 冷却液浓度太低"
    ],
    explanationChinese: "柔软、海绵状的散热器水管表明橡胶材料内部正在老化。水管可能从内部分解，颗粒可能堵塞散热器或暖风水箱。应在其失效并导致冷却液泄漏或发动机过热之前更换。",
  },
  {
    id: 129,
    q: "Technician A says the electric cooling fan should turn on when the A/C is engaged. Technician B says the cooling fan only runs when the engine temperature is above normal. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Technician A is correct. The electric cooling fan is designed to turn on whenever the A/C is engaged to provide airflow across the condenser, regardless of engine temperature. It also turns on when coolant temperature reaches a set threshold, but it is not limited to only high-temperature situations.",
    diagram: "",
    terms: ["coolant", "thermostat"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pqFZY6v6OQI",
    youtubeTitle: "Electric Cooling Fan Operation",
    qChinese: "技师A说当空调开启时电动冷却风扇应该打开。技师B说冷却风扇仅在发动机温度高于正常时运转。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "技师A是正确的。电动冷却风扇设计为在空调开启时启动，以提供通过冷凝器的气流，与发动机温度无关。它也会在冷却液温度达到设定阈值时启动，但不仅限于高温情况。",
  },
  {
    id: 130,
    q: "During a coolant flush, why is it important to flush the heater core as well?",
    options: [
      "A) The heater core has its own separate coolant supply",
      "B) Deposits and debris in the heater core can restrict flow and reduce cabin heating performance",
      "C) The heater core filters the coolant",
      "D) Flushing the heater core resets the climate control computer"
    ],
    answer: 1,
    explanation: "The heater core is part of the cooling system and can accumulate deposits and debris that restrict flow and reduce heating performance. Flushing ensures all old coolant and contaminants are removed from the entire system, restoring proper flow through the heater core for effective cabin heating.",
    diagram: "",
    terms: ["coolant", "thermostat"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pqFZY6v6OQI",
    youtubeTitle: "Heater Core Flushing Procedure",
    qChinese: "在进行冷却液冲洗时，为什么冲洗暖风水箱也很重要？",
    optionsChinese: [
      "A) 暖风水箱有自己独立的冷却液供应",
      "B) 暖风水箱中的沉积物和杂质会限制流量并降低车厢供暖性能",
      "C) 暖风水箱过滤冷却液",
      "D) 冲洗暖风水箱会重置空调控制电脑"
    ],
    explanationChinese: "暖风水箱是冷却系统的一部分，可能积累沉积物和杂质，限制流量并降低供暖性能。冲洗确保从整个系统中清除所有旧冷却液和污染物，恢复通过暖风水箱的正常流量以实现有效的车厢供暖。",
  },
  // ===== BATTERY SERVICE (Questions 131–140) =====
  {
    id: 131,
    q: "What instrument is used to test a battery's state of charge by measuring the specific gravity of the electrolyte?",
    options: [
      "A) A digital multimeter",
      "B) A battery hydrometer",
      "C) An ammeter",
      "D) A load tester"
    ],
    answer: 1,
    explanation: "A battery hydrometer measures the specific gravity of the battery electrolyte to determine its state of charge. A fully charged battery has a specific gravity of about 1.265. This test is only applicable to serviceable batteries with removable cell caps and not sealed maintenance-free batteries.",
    diagram: "",
    terms: ["battery"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Varta_car_battery.jpg/640px-Varta_car_battery.jpg",
    youtube: "https://www.youtube.com/watch?v=LGB6ZEjGm7Q",
    youtubeTitle: "Battery Testing Methods Explained",
    qChinese: "什么仪器通过测量电解液比重来测试电池的充电状态？",
    optionsChinese: [
      "A) 数字万用表",
      "B) 电池比重计",
      "C) 电流表",
      "D) 负载测试仪"
    ],
    explanationChinese: "电池比重计测量电池电解液的比重以确定其充电状态。完全充电的电池比重约为1.265。此测试仅适用于带有可拆卸电池盖的可维护电池，不适用于密封免维护电池。",
  },
  {
    id: 132,
    q: "When jump-starting a vehicle, what is the correct order for connecting the jumper cables?",
    options: [
      "A) Connect negative cables first, then positive cables",
      "B) Connect positive to dead battery, positive to good battery, negative to good battery, negative to engine ground on dead vehicle",
      "C) Connect both cables to the dead battery first",
      "D) Connect negative to dead battery, positive to dead battery, then to good battery"
    ],
    answer: 1,
    explanation: "The correct order is: positive cable to dead battery positive terminal, positive cable to good battery positive terminal, negative cable to good battery negative terminal, then negative cable to an engine ground on the dead vehicle away from the battery to prevent sparks near hydrogen gas.",
    diagram: "",
    terms: ["battery"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Varta_car_battery.jpg/640px-Varta_car_battery.jpg",
    youtube: "https://www.youtube.com/watch?v=LGB6ZEjGm7Q",
    youtubeTitle: "How to Jump Start a Car Safely",
    qChinese: "搭电启动车辆时，连接跨接电缆的正确顺序是什么？",
    optionsChinese: [
      "A) 先连接负极电缆，再连接正极电缆",
      "B) 正极连亏电电池，正极连好电池，负极连好电池，负极连亏电车辆的发动机接地",
      "C) 先将两根电缆都连接到亏电电池",
      "D) 负极连亏电电池，正极连亏电电池，然后再连接好电池"
    ],
    explanationChinese: "正确的顺序是：正极电缆连接亏电电池正极端子，正极电缆连接好电池正极端子，负极电缆连接好电池负极端子，然后负极电缆连接亏电车辆远离电池的发动机接地点，以防止在氢气附近产生火花。",
  },
  {
    id: 133,
    q: "A battery load test is performed. The battery voltage drops below 9.6 volts during the test. What does this indicate?",
    options: [
      "A) The battery is in good condition",
      "B) The battery has failed the load test and should be replaced",
      "C) The battery needs to be recharged and retested",
      "D) The alternator is not charging properly"
    ],
    answer: 1,
    explanation: "During a battery load test, if the voltage drops below 9.6 volts at 70 degrees Fahrenheit while applying a load equal to half the CCA rating for 15 seconds, the battery has failed and should be replaced. A good battery maintains voltage above 9.6 volts under load conditions.",
    diagram: "",
    terms: ["battery"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Varta_car_battery.jpg/640px-Varta_car_battery.jpg",
    youtube: "https://www.youtube.com/watch?v=LGB6ZEjGm7Q",
    youtubeTitle: "Battery Load Test Procedure",
    qChinese: "进行电池负载测试。测试期间电池电压降到9.6伏以下。这表明什么？",
    optionsChinese: [
      "A) 电池状况良好",
      "B) 电池未通过负载测试，应更换",
      "C) 电池需要充电后重新测试",
      "D) 发电机充电不正常"
    ],
    explanationChinese: "在电池负载测试中，如果在70华氏度下施加等于CCA额定值一半的负载15秒，电压降到9.6伏以下，则电池未通过测试，应更换。良好的电池在负载条件下保持电压高于9.6伏。",
  },
  {
    id: 134,
    q: "What should be disconnected FIRST when removing a vehicle battery?",
    options: [
      "A) The positive terminal",
      "B) The negative terminal",
      "C) Either terminal, order does not matter",
      "D) The battery hold-down clamp"
    ],
    answer: 1,
    explanation: "Always disconnect the negative terminal first when removing a battery. This eliminates the risk of accidentally shorting the positive terminal to ground with a wrench. If the positive were removed first, touching the wrench to any metal part of the vehicle would create a dangerous short circuit.",
    diagram: "",
    terms: ["battery"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Varta_car_battery.jpg/640px-Varta_car_battery.jpg",
    youtube: "https://www.youtube.com/watch?v=LGB6ZEjGm7Q",
    youtubeTitle: "Safe Battery Removal and Installation",
    qChinese: "拆卸车辆电池时应先断开什么？",
    optionsChinese: [
      "A) 正极端子",
      "B) 负极端子",
      "C) 任一端子，顺序无关",
      "D) 电池固定夹"
    ],
    explanationChinese: "拆卸电池时始终先断开负极端子。这消除了用扳手意外将正极端子短路到接地的风险。如果先拆正极，扳手触碰到车辆任何金属部分都会造成危险的短路。",
  },
  {
    id: 135,
    q: "White or greenish corrosion is found on the battery terminals. What is the recommended cleaning method?",
    options: [
      "A) Scrape it off with a flathead screwdriver only",
      "B) Clean with a baking soda and water solution, then use a battery terminal brush",
      "C) Spray it with brake cleaner",
      "D) Ignore it if the vehicle still starts"
    ],
    answer: 1,
    explanation: "Battery terminal corrosion should be cleaned using a baking soda and water solution to neutralize the acid, followed by scrubbing with a battery terminal brush or post cleaner. After cleaning, apply terminal protectant or dielectric grease to prevent future corrosion buildup.",
    diagram: "",
    terms: ["battery"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Varta_car_battery.jpg/640px-Varta_car_battery.jpg",
    youtube: "https://www.youtube.com/watch?v=LGB6ZEjGm7Q",
    youtubeTitle: "Cleaning Battery Terminal Corrosion",
    qChinese: "在电池端子上发现白色或绿色腐蚀。推荐的清洁方法是什么？",
    optionsChinese: [
      "A) 仅用平头螺丝刀刮掉",
      "B) 用小苏打和水溶液清洁，然后使用电池端子刷",
      "C) 用刹车清洁剂喷洒",
      "D) 如果车辆仍能启动就忽略它"
    ],
    explanationChinese: "电池端子腐蚀应使用小苏打和水溶液清洁以中和酸液，然后用电池端子刷或柱桩清洁器擦洗。清洁后，涂抹端子保护剂或绝缘脂以防止未来腐蚀积聚。",
  },
  {
    id: 136,
    q: "A fully charged 12-volt automotive battery should read approximately what voltage with no load?",
    options: [
      "A) 11.0 volts",
      "B) 12.6 volts",
      "C) 13.5 volts",
      "D) 14.2 volts"
    ],
    answer: 1,
    explanation: "A fully charged 12-volt automotive battery should read approximately 12.6 volts with no load (open circuit voltage). A reading of 12.4 volts indicates about 75% charge, 12.2 volts about 50%, and 12.0 volts about 25%. Below 12.0 volts the battery is considered discharged.",
    diagram: "",
    terms: ["battery"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Varta_car_battery.jpg/640px-Varta_car_battery.jpg",
    youtube: "https://www.youtube.com/watch?v=LGB6ZEjGm7Q",
    youtubeTitle: "Testing Battery Voltage with a Multimeter",
    qChinese: "完全充电的12伏汽车电池在无负载时应读取大约多少伏特？",
    optionsChinese: [
      "A) 11.0伏",
      "B) 12.6伏",
      "C) 13.5伏",
      "D) 14.2伏"
    ],
    explanationChinese: "完全充电的12伏汽车电池在无负载（开路电压）时应读取约12.6伏。12.4伏表示约75%充电，12.2伏约50%，12.0伏约25%。低于12.0伏的电池被认为已放电。",
  },
  {
    id: 137,
    q: "What does CCA stand for on a battery rating label?",
    options: [
      "A) Current Charging Amperage",
      "B) Cold Cranking Amps",
      "C) Continuous Current Availability",
      "D) Cranking Capacity Assessment"
    ],
    answer: 1,
    explanation: "CCA stands for Cold Cranking Amps. It measures the number of amps a battery can deliver at 0 degrees Fahrenheit for 30 seconds while maintaining at least 7.2 volts. A higher CCA rating indicates better cold-weather starting ability, which is critical in colder climates.",
    diagram: "",
    terms: ["battery"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Varta_car_battery.jpg/640px-Varta_car_battery.jpg",
    youtube: "https://www.youtube.com/watch?v=LGB6ZEjGm7Q",
    youtubeTitle: "Understanding Battery CCA Ratings",
    qChinese: "电池标签上的CCA代表什么？",
    optionsChinese: [
      "A) 电流充电安培数",
      "B) 冷启动安培数",
      "C) 持续电流可用性",
      "D) 启动容量评估"
    ],
    explanationChinese: "CCA代表冷启动安培数（Cold Cranking Amps）。它测量电池在0华氏度下能在30秒内提供的安培数，同时保持至少7.2伏。更高的CCA额定值表示更好的寒冷天气启动能力，这在较冷的气候中至关重要。",
  },
  {
    id: 138,
    q: "When charging a battery with an external charger, what safety precaution is MOST important?",
    options: [
      "A) Charge the battery as quickly as possible using the highest amperage setting",
      "B) Ensure adequate ventilation because charging produces hydrogen gas which is explosive",
      "C) Remove the battery from the vehicle before charging",
      "D) Disconnect only the positive terminal before charging"
    ],
    answer: 1,
    explanation: "Adequate ventilation is critical when charging a battery because the process produces hydrogen gas, which is highly flammable and explosive. Charging should be done in a well-ventilated area away from sparks, flames, and ignition sources. Slow charging at lower amperage is also preferred for battery health.",
    diagram: "",
    terms: ["battery"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Varta_car_battery.jpg/640px-Varta_car_battery.jpg",
    youtube: "https://www.youtube.com/watch?v=LGB6ZEjGm7Q",
    youtubeTitle: "Safe Battery Charging Procedures",
    qChinese: "使用外部充电器给电池充电时，最重要的安全预防措施是什么？",
    optionsChinese: [
      "A) 使用最高安培设置尽快充电",
      "B) 确保充分通风，因为充电会产生易爆的氢气",
      "C) 充电前从车辆上拆卸电池",
      "D) 充电前仅断开正极端子"
    ],
    explanationChinese: "充电时充分通风至关重要，因为充电过程会产生高度易燃和易爆的氢气。应在通风良好的地方远离火花、明火和点火源进行充电。以较低安培数慢速充电也更有利于电池健康。",
  },
  {
    id: 139,
    q: "After replacing a battery, what electronic systems may need to be reset or relearned?",
    options: [
      "A) Only the clock needs to be reset",
      "B) Radio presets, power window positions, idle relearn, and security system may need attention",
      "C) No systems are affected by battery replacement",
      "D) Only the tire pressure monitoring system"
    ],
    answer: 1,
    explanation: "After battery replacement, many electronic systems may need resetting or relearning, including radio presets, clock, power window auto-up positions, idle speed relearn, security or anti-theft system, and memory seats. Some vehicles may require a scan tool for proper initialization procedures.",
    diagram: "",
    terms: ["battery"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Varta_car_battery.jpg/640px-Varta_car_battery.jpg",
    youtube: "https://www.youtube.com/watch?v=LGB6ZEjGm7Q",
    youtubeTitle: "Resetting Systems After Battery Replacement",
    qChinese: "更换电池后，哪些电子系统可能需要重置或重新学习？",
    optionsChinese: [
      "A) 只需重置时钟",
      "B) 收音机预设、电动车窗位置、怠速重新学习和防盗系统可能需要处理",
      "C) 更换电池不影响任何系统",
      "D) 仅轮胎压力监测系统"
    ],
    explanationChinese: "更换电池后，许多电子系统可能需要重置或重新学习，包括收音机预设、时钟、电动车窗自动升降位置、怠速重新学习、防盗系统和记忆座椅。某些车辆可能需要诊断工具进行正确的初始化程序。",
  },
  {
    id: 140,
    q: "A vehicle with a good battery cranks slowly on a cold morning. What should the technician check FIRST?",
    options: [
      "A) The ignition switch",
      "B) Battery cable connections for corrosion or looseness",
      "C) The fuel pump",
      "D) The engine compression"
    ],
    answer: 1,
    explanation: "Slow cranking with a good battery often indicates high resistance in the electrical connections. The technician should first check battery cable connections for corrosion, looseness, or damage. Corroded or loose connections increase resistance and reduce the current available to the starter motor.",
    diagram: "",
    terms: ["battery"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Varta_car_battery.jpg/640px-Varta_car_battery.jpg",
    youtube: "https://www.youtube.com/watch?v=LGB6ZEjGm7Q",
    youtubeTitle: "Diagnosing Slow Crank Conditions",
    qChinese: "一辆电池良好的车辆在寒冷早晨启动缓慢。技师应首先检查什么？",
    optionsChinese: [
      "A) 点火开关",
      "B) 电池电缆连接是否有腐蚀或松动",
      "C) 燃油泵",
      "D) 发动机压缩"
    ],
    explanationChinese: "电池良好但启动缓慢通常表明电气连接中存在高电阻。技师应首先检查电池电缆连接是否有腐蚀、松动或损坏。腐蚀或松动的连接会增加电阻，减少可供起动机使用的电流。",
  },
  // ===== TIRE SERVICE (Questions 141–155) =====
  {
    id: 141,
    q: "What is the PRIMARY purpose of tire rotation?",
    options: [
      "A) To improve fuel economy",
      "B) To promote even tread wear and extend tire life",
      "C) To improve vehicle handling in wet conditions",
      "D) To reset the tire pressure monitoring system"
    ],
    answer: 1,
    explanation: "The primary purpose of tire rotation is to promote even tread wear across all four tires and extend their useful life. Different wheel positions cause different wear patterns. Regular rotation ensures all tires wear evenly, maximizing tire investment and maintaining consistent traction and handling.",
    diagram: "",
    terms: ["tire_rotation", "tire_pressure"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tire_valve_stem.jpg/640px-Tire_valve_stem.jpg",
    youtube: "https://www.youtube.com/watch?v=NDqpgT5Yl1o",
    youtubeTitle: "How to Rotate Your Tires",
    qChinese: "轮胎换位的主要目的是什么？",
    optionsChinese: [
      "A) 提高燃油经济性",
      "B) 促进胎面均匀磨损并延长轮胎寿命",
      "C) 改善车辆在湿滑条件下的操控性",
      "D) 重置轮胎压力监测系统"
    ],
    explanationChinese: "轮胎换位的主要目的是促进所有四个轮胎的胎面均匀磨损并延长其使用寿命。不同的车轮位置会导致不同的磨损模式。定期换位确保所有轮胎均匀磨损，最大化轮胎投资并保持一致的抓地力和操控性。",
  },
  {
    id: 142,
    q: "What is the recommended tire rotation pattern for a front-wheel-drive vehicle with non-directional tires?",
    options: [
      "A) Rotate side to side only",
      "B) Front tires move straight to the rear; rear tires cross to the opposite front positions",
      "C) All tires rotate clockwise one position",
      "D) Only rotate the front tires to the rear"
    ],
    answer: 1,
    explanation: "For front-wheel-drive vehicles with non-directional tires, the forward cross pattern is recommended. The front tires move straight to the rear positions, and the rear tires cross to the opposite front positions. This pattern accounts for the higher wear on the front driving and steering tires.",
    diagram: "",
    terms: ["tire_rotation", "tire_pressure"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tire_valve_stem.jpg/640px-Tire_valve_stem.jpg",
    youtube: "https://www.youtube.com/watch?v=NDqpgT5Yl1o",
    youtubeTitle: "Tire Rotation Patterns Explained",
    qChinese: "前轮驱动车辆使用非定向轮胎时，推荐的轮胎换位模式是什么？",
    optionsChinese: [
      "A) 仅左右互换",
      "B) 前轮直接移到后方；后轮交叉移到对面前方位置",
      "C) 所有轮胎顺时针旋转一个位置",
      "D) 仅将前轮换到后方"
    ],
    explanationChinese: "对于配备非定向轮胎的前轮驱动车辆，推荐前交叉换位模式。前轮直接移到后方位置，后轮交叉移到对面前方位置。此模式考虑了前驱动和转向轮胎的较高磨损。",
  },
  {
    id: 143,
    q: "A tire is marked P215/65R15 95H. What does the '65' represent?",
    options: [
      "A) The tire width in millimeters",
      "B) The aspect ratio, meaning the sidewall height is 65% of the tire width",
      "C) The rim diameter in inches",
      "D) The load index of the tire"
    ],
    answer: 1,
    explanation: "The number 65 is the aspect ratio, which means the sidewall height is 65 percent of the tire width. In this case, the sidewall height is 65 percent of 215 millimeters, equaling approximately 140 millimeters. A lower aspect ratio indicates a shorter sidewall for sportier handling characteristics.",
    diagram: "",
    terms: ["tire_pressure", "tire_rotation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tire_valve_stem.jpg/640px-Tire_valve_stem.jpg",
    youtube: "https://www.youtube.com/watch?v=NDqpgT5Yl1o",
    youtubeTitle: "Reading Tire Size Numbers",
    qChinese: "轮胎标记为P215/65R15 95H。'65'代表什么？",
    optionsChinese: [
      "A) 轮胎宽度（毫米）",
      "B) 扁平比，表示侧壁高度是轮胎宽度的65%",
      "C) 轮辋直径（英寸）",
      "D) 轮胎的载荷指数"
    ],
    explanationChinese: "数字65是扁平比，表示侧壁高度是轮胎宽度的65%。在这种情况下，侧壁高度是215毫米的65%，约等于140毫米。较低的扁平比表示较短的侧壁，具有更运动化的操控特性。",
  },
  {
    id: 144,
    q: "Where should a technician look to find the correct tire pressure specification for a vehicle?",
    options: [
      "A) The tire sidewall maximum pressure rating",
      "B) The vehicle's tire information placard on the driver's door jamb",
      "C) The tire manufacturer's website only",
      "D) The floor mat label"
    ],
    answer: 1,
    explanation: "The correct tire pressure for a specific vehicle is found on the tire information placard located on the driver's door jamb or in the owner's manual. The pressure on the tire sidewall is the maximum pressure the tire can safely hold, not the recommended operating pressure for the vehicle.",
    diagram: "",
    terms: ["tire_pressure", "tpms"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tire_valve_stem.jpg/640px-Tire_valve_stem.jpg",
    youtube: "https://www.youtube.com/watch?v=NDqpgT5Yl1o",
    youtubeTitle: "Finding Correct Tire Pressure",
    qChinese: "技师应在哪里找到车辆的正确轮胎压力规格？",
    optionsChinese: [
      "A) 轮胎侧壁上的最大压力额定值",
      "B) 驾驶员门框上的车辆轮胎信息标牌",
      "C) 仅在轮胎制造商的网站上",
      "D) 脚垫标签"
    ],
    explanationChinese: "特定车辆的正确轮胎压力可在驾驶员门框上的轮胎信息标牌或车主手册中找到。轮胎侧壁上的压力是轮胎可以安全承受的最大压力，而不是车辆的推荐运行压力。",
  },
  {
    id: 145,
    q: "What is the MINIMUM legal tread depth for passenger vehicle tires in most states?",
    options: [
      "A) 1/16 inch (2/32 inch)",
      "B) 2/32 inch (1/16 inch)",
      "C) 4/32 inch",
      "D) 6/32 inch"
    ],
    answer: 1,
    explanation: "The minimum legal tread depth for passenger vehicle tires in most states is 2/32 of an inch. Tires have built-in tread wear indicators (wear bars) that become visible at this depth. Driving on tires below this depth significantly increases the risk of hydroplaning and reduces braking effectiveness.",
    diagram: "",
    terms: ["tire_pressure", "tire_rotation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tire_valve_stem.jpg/640px-Tire_valve_stem.jpg",
    youtube: "https://www.youtube.com/watch?v=NDqpgT5Yl1o",
    youtubeTitle: "Checking Tire Tread Depth",
    qChinese: "大多数州对乘用车轮胎的最低合法胎面深度是多少？",
    optionsChinese: [
      "A) 1/16英寸（2/32英寸）",
      "B) 2/32英寸（1/16英寸）",
      "C) 4/32英寸",
      "D) 6/32英寸"
    ],
    explanationChinese: "大多数州乘用车轮胎的最低合法胎面深度为2/32英寸。轮胎有内置的胎面磨损指示器（磨损条），在此深度时变得可见。使用低于此深度的轮胎会显著增加水漂风险并降低制动效果。",
  },
  {
    id: 146,
    q: "The TPMS warning light is illuminated on the dashboard. What does this indicate?",
    options: [
      "A) The tires need rotation",
      "B) One or more tires have pressure significantly below the recommended level",
      "C) The tires are worn and need replacement",
      "D) The wheel alignment is off"
    ],
    answer: 1,
    explanation: "The TPMS (Tire Pressure Monitoring System) warning light illuminates when one or more tires have pressure that is 25 percent or more below the manufacturer's recommended pressure. The technician should check all tire pressures with a gauge, adjust as needed, and inspect for leaks or damage.",
    diagram: "",
    terms: ["tpms", "tire_pressure"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tire_valve_stem.jpg/640px-Tire_valve_stem.jpg",
    youtube: "https://www.youtube.com/watch?v=NDqpgT5Yl1o",
    youtubeTitle: "TPMS Warning Light Explained",
    qChinese: "仪表板上TPMS警告灯亮起。这表明什么？",
    optionsChinese: [
      "A) 轮胎需要换位",
      "B) 一个或多个轮胎的压力明显低于推荐水平",
      "C) 轮胎磨损需要更换",
      "D) 车轮定位偏差"
    ],
    explanationChinese: "TPMS（轮胎压力监测系统）警告灯在一个或多个轮胎的压力低于制造商推荐压力25%或更多时亮起。技师应使用气压表检查所有轮胎压力，根据需要调整，并检查是否有泄漏或损坏。",
  },
  {
    id: 147,
    q: "When should tire pressure be checked for the most accurate reading?",
    options: [
      "A) After driving at highway speed for at least 30 minutes",
      "B) When the tires are cold, before the vehicle has been driven",
      "C) After the tires have been in direct sunlight",
      "D) Immediately after inflating the tires"
    ],
    answer: 1,
    explanation: "Tire pressure should be checked when the tires are cold, meaning the vehicle has not been driven for at least three hours or driven less than one mile. Driving heats the tires and increases pressure readings by several PSI, giving a falsely high reading that does not reflect the base inflation pressure.",
    diagram: "",
    terms: ["tire_pressure", "tpms"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tire_valve_stem.jpg/640px-Tire_valve_stem.jpg",
    youtube: "https://www.youtube.com/watch?v=NDqpgT5Yl1o",
    youtubeTitle: "When to Check Tire Pressure",
    qChinese: "什么时候检查轮胎压力能获得最准确的读数？",
    optionsChinese: [
      "A) 在高速公路行驶至少30分钟后",
      "B) 在轮胎冷态时，车辆尚未行驶前",
      "C) 轮胎在阳光直射后",
      "D) 给轮胎充气后立即检查"
    ],
    explanationChinese: "应在轮胎冷态时检查轮胎压力，即车辆至少三小时未行驶或行驶不超过一英里。行驶会加热轮胎并使压力读数增加几个PSI，给出不反映基础充气压力的偏高读数。",
  },
  {
    id: 148,
    q: "What causes excessive wear on both edges of a tire tread?",
    options: [
      "A) Over-inflation",
      "B) Under-inflation",
      "C) Excessive positive camber",
      "D) Excessive toe-out"
    ],
    answer: 1,
    explanation: "Under-inflation causes excessive wear on both outer edges of the tire tread. When a tire is under-inflated, the center of the tread lifts off the road surface, causing the edges to carry more of the vehicle's weight. This leads to rapid shoulder wear and reduced tire life and fuel economy.",
    diagram: "",
    terms: ["tire_pressure", "tire_rotation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tire_valve_stem.jpg/640px-Tire_valve_stem.jpg",
    youtube: "https://www.youtube.com/watch?v=NDqpgT5Yl1o",
    youtubeTitle: "Tire Wear Patterns and Causes",
    qChinese: "什么原因导致轮胎胎面两边缘过度磨损？",
    optionsChinese: [
      "A) 过度充气",
      "B) 充气不足",
      "C) 过度正外倾",
      "D) 过度前束外张"
    ],
    explanationChinese: "充气不足导致轮胎胎面两个外缘过度磨损。当轮胎充气不足时，胎面中心抬离路面，导致边缘承受更多车辆重量。这导致胎肩快速磨损，缩短轮胎寿命并降低燃油经济性。",
  },
  {
    id: 149,
    q: "What causes excessive wear in the CENTER of a tire tread?",
    options: [
      "A) Under-inflation",
      "B) Over-inflation",
      "C) Negative camber",
      "D) Worn shock absorbers"
    ],
    answer: 1,
    explanation: "Over-inflation causes excessive wear in the center of the tire tread. When a tire is over-inflated, the center of the tread bulges outward and makes more contact with the road than the edges. This leads to faster center wear, reduced traction, and a harsher ride quality.",
    diagram: "",
    terms: ["tire_pressure", "tire_rotation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tire_valve_stem.jpg/640px-Tire_valve_stem.jpg",
    youtube: "https://www.youtube.com/watch?v=NDqpgT5Yl1o",
    youtubeTitle: "Over-Inflation Tire Wear",
    qChinese: "什么原因导致轮胎胎面中心过度磨损？",
    optionsChinese: [
      "A) 充气不足",
      "B) 过度充气",
      "C) 负外倾",
      "D) 减振器磨损"
    ],
    explanationChinese: "过度充气导致轮胎胎面中心过度磨损。当轮胎过度充气时，胎面中心向外凸起，与路面接触多于边缘。这导致中心磨损加快、抓地力降低和行驶质量变差。",
  },
  {
    id: 150,
    q: "What is the purpose of wheel balancing?",
    options: [
      "A) To align the wheels for straight tracking",
      "B) To equalize the weight distribution around the tire and wheel assembly to eliminate vibration",
      "C) To adjust the tire pressure to the correct level",
      "D) To measure the tread depth on all tires"
    ],
    answer: 1,
    explanation: "Wheel balancing equalizes the weight distribution around the tire and wheel assembly by adding small counterweights. An unbalanced wheel causes vibration, typically felt in the steering wheel at highway speeds. Proper balancing extends tire life, reduces vibration, and improves ride comfort.",
    diagram: "",
    terms: ["tire_rotation", "tire_pressure"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tire_valve_stem.jpg/640px-Tire_valve_stem.jpg",
    youtube: "https://www.youtube.com/watch?v=NDqpgT5Yl1o",
    youtubeTitle: "Wheel Balancing Explained",
    qChinese: "车轮平衡的目的是什么？",
    optionsChinese: [
      "A) 调整车轮使其直线行驶",
      "B) 均衡轮胎和车轮组件周围的重量分布以消除振动",
      "C) 将轮胎压力调整到正确水平",
      "D) 测量所有轮胎的胎面深度"
    ],
    explanationChinese: "车轮平衡通过添加小配重块来均衡轮胎和车轮组件周围的重量分布。不平衡的车轮会引起振动，通常在高速公路速度下通过方向盘感受到。适当的平衡延长轮胎寿命，减少振动并改善乘坐舒适性。",
  },
  {
    id: 151,
    q: "A direct TPMS system uses what component to monitor tire pressure?",
    options: [
      "A) The ABS wheel speed sensors",
      "B) Pressure sensors mounted inside each tire on the valve stem or wheel",
      "C) A pressure gauge built into the dashboard",
      "D) Temperature sensors in the brake calipers"
    ],
    answer: 1,
    explanation: "Direct TPMS systems use individual pressure sensors mounted inside each tire, typically on the valve stem assembly or banded to the wheel. These sensors wirelessly transmit real-time pressure and temperature data to the vehicle's TPMS module for display and warning activation.",
    diagram: "",
    terms: ["tpms", "tire_pressure"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tire_valve_stem.jpg/640px-Tire_valve_stem.jpg",
    youtube: "https://www.youtube.com/watch?v=NDqpgT5Yl1o",
    youtubeTitle: "Direct vs Indirect TPMS Systems",
    qChinese: "直接式TPMS系统使用什么组件来监测轮胎压力？",
    optionsChinese: [
      "A) ABS车轮速度传感器",
      "B) 安装在每个轮胎内部气门嘴或车轮上的压力传感器",
      "C) 内置在仪表板中的压力表",
      "D) 制动卡钳中的温度传感器"
    ],
    explanationChinese: "直接式TPMS系统使用安装在每个轮胎内部的独立压力传感器，通常安装在气门嘴组件上或绑在车轮上。这些传感器将实时压力和温度数据无线传输到车辆的TPMS模块以供显示和警告激活。",
  },
  {
    id: 152,
    q: "After performing a tire rotation on a vehicle with direct TPMS, what additional step may be required?",
    options: [
      "A) No additional steps are needed",
      "B) The TPMS sensors may need to be relearned to their new wheel positions",
      "C) The TPMS sensors must be replaced",
      "D) The tire pressure must be set 5 PSI higher than recommended"
    ],
    answer: 1,
    explanation: "After rotating tires on a vehicle with direct TPMS, the sensors may need to be relearned to their new positions so the system displays the correct pressure for each tire location. The relearn procedure varies by manufacturer and may require a TPMS tool or a specific sequence of steps.",
    diagram: "",
    terms: ["tpms", "tire_rotation", "tire_pressure"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tire_valve_stem.jpg/640px-Tire_valve_stem.jpg",
    youtube: "https://www.youtube.com/watch?v=NDqpgT5Yl1o",
    youtubeTitle: "TPMS Relearn After Tire Rotation",
    qChinese: "在配备直接式TPMS的车辆上进行轮胎换位后，可能需要什么额外步骤？",
    optionsChinese: [
      "A) 不需要额外步骤",
      "B) TPMS传感器可能需要重新学习到新的车轮位置",
      "C) 必须更换TPMS传感器",
      "D) 轮胎压力必须设置为高于推荐值5 PSI"
    ],
    explanationChinese: "在配备直接式TPMS的车辆上换位轮胎后，传感器可能需要重新学习到新位置，以便系统为每个轮胎位置显示正确的压力。重新学习程序因制造商而异，可能需要TPMS工具或特定的步骤序列。",
  },
  {
    id: 153,
    q: "A tire has a nail in the tread area. What is the MOST appropriate repair method?",
    options: [
      "A) Apply an external plug only from outside the tire",
      "B) Remove the tire from the rim, inspect internally, and install a combination plug-patch from the inside",
      "C) Inject tire sealant through the valve stem",
      "D) Leave the nail in place and monitor the tire pressure"
    ],
    answer: 1,
    explanation: "The industry standard for a proper tire repair is to remove the tire from the rim, inspect the interior for damage, and install a combination plug-patch from the inside. External-only plugs are considered temporary. The puncture must be in the tread area and not exceed specified size limits.",
    diagram: "",
    terms: ["tire_pressure", "tire_rotation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tire_valve_stem.jpg/640px-Tire_valve_stem.jpg",
    youtube: "https://www.youtube.com/watch?v=NDqpgT5Yl1o",
    youtubeTitle: "Proper Tire Puncture Repair",
    qChinese: "轮胎胎面区域有一颗钉子。最合适的修补方法是什么？",
    optionsChinese: [
      "A) 仅从轮胎外部使用外部塞子",
      "B) 将轮胎从轮辋上拆下，从内部检查，并从内部安装组合式塞子-贴片",
      "C) 通过气门嘴注入轮胎密封剂",
      "D) 保留钉子并监测轮胎压力"
    ],
    explanationChinese: "行业标准的正确轮胎修补方法是将轮胎从轮辋上拆下，检查内部是否有损坏，并从内部安装组合式塞子-贴片。仅外部塞子被认为是临时性的。穿刺必须在胎面区域且不超过规定的尺寸限制。",
  },
  {
    id: 154,
    q: "What does the 'R' in a tire size designation such as P215/65R15 indicate?",
    options: [
      "A) Racing tire construction",
      "B) Radial tire construction",
      "C) Reinforced sidewall",
      "D) Recapped tire"
    ],
    answer: 1,
    explanation: "The 'R' indicates radial tire construction, which means the tire's body plies run radially from bead to bead, perpendicular to the direction of travel. Radial construction provides better road contact, improved fuel economy, longer tread life, and a smoother ride compared to bias-ply tires.",
    diagram: "",
    terms: ["tire_pressure", "tire_rotation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tire_valve_stem.jpg/640px-Tire_valve_stem.jpg",
    youtube: "https://www.youtube.com/watch?v=NDqpgT5Yl1o",
    youtubeTitle: "Understanding Tire Size Designations",
    qChinese: "轮胎尺寸标识如P215/65R15中的'R'表示什么？",
    optionsChinese: [
      "A) 赛车轮胎结构",
      "B) 子午线轮胎结构",
      "C) 加强侧壁",
      "D) 翻新轮胎"
    ],
    explanationChinese: "'R'表示子午线轮胎结构，这意味着轮胎的胎体帘布层从胎圈到胎圈径向排列，垂直于行驶方向。与斜交轮胎相比，子午线结构提供更好的路面接触、改善的燃油经济性、更长的胎面寿命和更平稳的行驶。",
  },
  {
    id: 155,
    q: "When mounting a tire on a wheel, what should be applied to the tire bead?",
    options: [
      "A) Motor oil",
      "B) Approved tire mounting lubricant",
      "C) Silicone spray",
      "D) Brake fluid"
    ],
    answer: 1,
    explanation: "Approved tire mounting lubricant should be applied to the tire bead during mounting. This allows the bead to slide into position and seat properly on the rim. Using unapproved lubricants like motor oil can deteriorate the rubber and prevent proper bead seating, creating an unsafe condition.",
    diagram: "",
    terms: ["tire_pressure", "tire_rotation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tire_valve_stem.jpg/640px-Tire_valve_stem.jpg",
    youtube: "https://www.youtube.com/watch?v=NDqpgT5Yl1o",
    youtubeTitle: "Proper Tire Mounting Technique",
    qChinese: "将轮胎安装到车轮上时，应在轮胎胎唇上涂抹什么？",
    optionsChinese: [
      "A) 发动机机油",
      "B) 认可的轮胎安装润滑剂",
      "C) 硅酮喷雾",
      "D) 制动液"
    ],
    explanationChinese: "安装时应在轮胎胎唇上涂抹认可的轮胎安装润滑剂。这允许胎唇滑入位置并正确坐落在轮辋上。使用未经批准的润滑剂如机油可能会使橡胶劣化并阻止胎唇正确就位，造成不安全状况。",
  },
  // ===== BRAKE SERVICE (Questions 156–170) =====
  {
    id: 156,
    q: "What is the MINIMUM acceptable thickness for most brake rotors determined by?",
    options: [
      "A) The technician's experience and judgment",
      "B) The discard or minimum thickness specification stamped on the rotor",
      "C) Measuring the brake pad thickness",
      "D) The vehicle's mileage"
    ],
    answer: 1,
    explanation: "The minimum acceptable rotor thickness is determined by the discard specification stamped or cast into the rotor. Operating a rotor below this thickness is unsafe as it may overheat, warp, or crack under braking. Always measure rotor thickness with a micrometer and compare to the specification.",
    diagram: "",
    terms: ["brake_pads", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Disc_brake.jpg/640px-Disc_brake.jpg",
    youtube: "https://www.youtube.com/watch?v=lGqExDIaMhU",
    youtubeTitle: "Measuring Brake Rotor Thickness",
    qChinese: "大多数制动盘的最小可接受厚度由什么决定？",
    optionsChinese: [
      "A) 技师的经验和判断",
      "B) 刻在制动盘上的报废或最小厚度规格",
      "C) 测量制动片厚度",
      "D) 车辆的里程数"
    ],
    explanationChinese: "制动盘的最小可接受厚度由刻印或铸造在制动盘上的报废规格决定。使用低于此厚度的制动盘是不安全的，因为它可能在制动时过热、变形或开裂。始终使用千分尺测量制动盘厚度并与规格进行比较。",
  },
  {
    id: 157,
    q: "What tool is used to measure brake rotor thickness?",
    options: [
      "A) A ruler",
      "B) A micrometer",
      "C) A dial indicator",
      "D) A tape measure"
    ],
    answer: 1,
    explanation: "A micrometer is used to accurately measure brake rotor thickness. Measurements should be taken at multiple points around the rotor to check for thickness variation (parallelism). A rotor that varies in thickness beyond specification will cause brake pedal pulsation during braking.",
    diagram: "",
    terms: ["brake_pads", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Disc_brake.jpg/640px-Disc_brake.jpg",
    youtube: "https://www.youtube.com/watch?v=lGqExDIaMhU",
    youtubeTitle: "Using a Micrometer on Brake Rotors",
    qChinese: "什么工具用于测量制动盘厚度？",
    optionsChinese: [
      "A) 直尺",
      "B) 千分尺",
      "C) 百分表",
      "D) 卷尺"
    ],
    explanationChinese: "千分尺用于精确测量制动盘厚度。应在制动盘周围多个点进行测量以检查厚度变化（平行度）。厚度变化超出规格的制动盘会在制动时导致制动踏板脉动。",
  },
  {
    id: 158,
    q: "Brake pedal pulsation during braking is MOST commonly caused by what condition?",
    options: [
      "A) Air in the brake lines",
      "B) Rotor thickness variation (parallelism issue)",
      "C) Worn brake pads",
      "D) Low brake fluid level"
    ],
    answer: 1,
    explanation: "Brake pedal pulsation is most commonly caused by rotor thickness variation, where the rotor is not uniform in thickness around its circumference. As the rotor turns, the thicker and thinner spots push the pads in and out, creating a pulsation felt through the brake pedal during braking.",
    diagram: "",
    terms: ["brake_pads", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Disc_brake.jpg/640px-Disc_brake.jpg",
    youtube: "https://www.youtube.com/watch?v=lGqExDIaMhU",
    youtubeTitle: "Causes of Brake Pedal Pulsation",
    qChinese: "制动时制动踏板脉动最常见的原因是什么？",
    optionsChinese: [
      "A) 制动管路中有空气",
      "B) 制动盘厚度变化（平行度问题）",
      "C) 制动片磨损",
      "D) 制动液液位低"
    ],
    explanationChinese: "制动踏板脉动最常见的原因是制动盘厚度变化，即制动盘在其圆周上厚度不均匀。当制动盘转动时，较厚和较薄的部分将制动片推进推出，产生制动时通过制动踏板感受到的脉动。",
  },
  {
    id: 159,
    q: "What is the correct DOT rating for brake fluid commonly used in most passenger vehicles?",
    options: [
      "A) DOT 1",
      "B) DOT 3 or DOT 4",
      "C) DOT 6",
      "D) ATF"
    ],
    answer: 1,
    explanation: "DOT 3 and DOT 4 are the most commonly used brake fluid types in passenger vehicles. DOT 4 has a higher boiling point than DOT 3. Both are glycol-based and hygroscopic, meaning they absorb moisture over time. Always use the type specified by the vehicle manufacturer for safe brake operation.",
    diagram: "",
    terms: ["brake_fluid", "brake_pads"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Disc_brake.jpg/640px-Disc_brake.jpg",
    youtube: "https://www.youtube.com/watch?v=lGqExDIaMhU",
    youtubeTitle: "Brake Fluid Types Explained",
    qChinese: "大多数乘用车常用的制动液正确DOT等级是什么？",
    optionsChinese: [
      "A) DOT 1",
      "B) DOT 3或DOT 4",
      "C) DOT 6",
      "D) ATF"
    ],
    explanationChinese: "DOT 3和DOT 4是乘用车中最常用的制动液类型。DOT 4的沸点高于DOT 3。两者都是乙二醇基的吸湿性液体，会随时间吸收水分。始终使用车辆制造商指定的类型以确保安全的制动操作。",
  },
  {
    id: 160,
    q: "Why is it important to keep brake fluid containers sealed when not in use?",
    options: [
      "A) To prevent evaporation",
      "B) Because brake fluid is hygroscopic and absorbs moisture from the air, which lowers its boiling point",
      "C) To prevent the fluid from changing color",
      "D) To keep insects and debris out of the container"
    ],
    answer: 1,
    explanation: "Brake fluid is hygroscopic, meaning it readily absorbs moisture from the atmosphere. Moisture contamination lowers the fluid's boiling point, which can cause brake fade or vapor lock under heavy braking. Sealed containers prevent moisture absorption, maintaining the fluid's performance characteristics.",
    diagram: "",
    terms: ["brake_fluid", "brake_pads"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Disc_brake.jpg/640px-Disc_brake.jpg",
    youtube: "https://www.youtube.com/watch?v=lGqExDIaMhU",
    youtubeTitle: "Why Brake Fluid Absorbs Moisture",
    qChinese: "为什么不使用时保持制动液容器密封很重要？",
    optionsChinese: [
      "A) 防止蒸发",
      "B) 因为制动液是吸湿性的，会从空气中吸收水分，从而降低其沸点",
      "C) 防止液体变色",
      "D) 防止昆虫和杂物进入容器"
    ],
    explanationChinese: "制动液是吸湿性的，意味着它容易从大气中吸收水分。水分污染会降低液体的沸点，在重度制动时可能导致制动衰退或气阻。密封容器防止水分吸收，维持液体的性能特性。",
  },
  {
    id: 161,
    q: "When replacing disc brake pads, why should the caliper piston be pushed back into the caliper bore?",
    options: [
      "A) To test the caliper for proper operation",
      "B) To create clearance so the caliper can fit over the new, thicker brake pads",
      "C) To check the brake fluid level",
      "D) To release air from the brake system"
    ],
    answer: 1,
    explanation: "The caliper piston must be pushed back into the bore to create clearance for the new thicker brake pads. As pads wear, the piston extends further out. New pads are thicker than worn ones, so the piston must be retracted. Always open the bleeder or monitor the fluid reservoir to prevent overflow.",
    diagram: "",
    terms: ["brake_pads", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Disc_brake.jpg/640px-Disc_brake.jpg",
    youtube: "https://www.youtube.com/watch?v=lGqExDIaMhU",
    youtubeTitle: "How to Replace Brake Pads",
    qChinese: "更换盘式制动片时，为什么需要将卡钳活塞推回卡钳缸孔？",
    optionsChinese: [
      "A) 测试卡钳是否正常工作",
      "B) 创造间隙使卡钳能够安装在新的更厚的制动片上",
      "C) 检查制动液液位",
      "D) 从制动系统中释放空气"
    ],
    explanationChinese: "必须将卡钳活塞推回缸孔以为新的更厚的制动片创造间隙。随着制动片磨损，活塞会进一步伸出。新制动片比磨损的更厚，因此必须回缩活塞。始终打开放气阀或监控液体储液壶以防止溢出。",
  },
  {
    id: 162,
    q: "A vehicle pulls to one side when braking. What is a likely cause?",
    options: [
      "A) Worn engine mounts",
      "B) A sticking caliper or uneven brake pad wear on one side",
      "C) A bad oxygen sensor",
      "D) Low transmission fluid"
    ],
    answer: 1,
    explanation: "A vehicle pulling to one side during braking often indicates a sticking caliper, collapsed brake hose, or uneven brake pad wear. The side with more braking force pulls the vehicle toward it. A thorough inspection of brake components on both sides is needed to identify the cause.",
    diagram: "",
    terms: ["brake_pads", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Disc_brake.jpg/640px-Disc_brake.jpg",
    youtube: "https://www.youtube.com/watch?v=lGqExDIaMhU",
    youtubeTitle: "Diagnosing Brake Pull",
    qChinese: "车辆制动时向一侧偏移。可能的原因是什么？",
    optionsChinese: [
      "A) 发动机支架磨损",
      "B) 一侧卡钳卡滞或制动片磨损不均",
      "C) 氧传感器故障",
      "D) 变速箱油液位低"
    ],
    explanationChinese: "车辆制动时向一侧偏移通常表明卡钳卡滞、制动软管塌陷或制动片磨损不均。制动力较大的一侧将车辆拉向该侧。需要对两侧的制动部件进行全面检查以确定原因。",
  },
  {
    id: 163,
    q: "What is the purpose of brake bleeding?",
    options: [
      "A) To replace the brake pads",
      "B) To remove air from the hydraulic brake system to restore proper pedal feel and braking",
      "C) To adjust the parking brake",
      "D) To lubricate the brake caliper slides"
    ],
    answer: 1,
    explanation: "Brake bleeding removes air bubbles trapped in the hydraulic brake system. Air is compressible, unlike brake fluid, so air in the lines causes a soft or spongy brake pedal and reduced braking effectiveness. Bleeding restores a firm pedal and proper hydraulic pressure transfer to the brakes.",
    diagram: "",
    terms: ["brake_fluid", "brake_pads"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Disc_brake.jpg/640px-Disc_brake.jpg",
    youtube: "https://www.youtube.com/watch?v=lGqExDIaMhU",
    youtubeTitle: "How to Bleed Brakes Properly",
    qChinese: "制动排气的目的是什么？",
    optionsChinese: [
      "A) 更换制动片",
      "B) 从液压制动系统中排出空气以恢复正常的踏板感觉和制动力",
      "C) 调整驻车制动",
      "D) 润滑制动卡钳导销"
    ],
    explanationChinese: "制动排气可去除液压制动系统中滞留的气泡。空气是可压缩的，与制动液不同，因此管路中的空气会导致制动踏板软绵绵的并降低制动效果。排气可恢复坚实的踏板感觉和正确的液压压力传递。",
  },
  {
    id: 164,
    q: "Technician A says drum brake shoes should be replaced when the lining is worn to the rivets. Technician B says bonded drum brake linings should be replaced when the lining thickness reaches 1/16 inch. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Riveted brake shoe linings should be replaced before they wear down to the rivets, as exposed rivets will score the drum. Bonded linings, which are glued directly to the shoe, should be replaced when they reach a minimum thickness of 1/16 inch for safe operation.",
    diagram: "",
    terms: ["brake_pads", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Disc_brake.jpg/640px-Disc_brake.jpg",
    youtube: "https://www.youtube.com/watch?v=lGqExDIaMhU",
    youtubeTitle: "Drum Brake Shoe Inspection",
    qChinese: "技师A说鼓式制动蹄片在衬片磨损到铆钉时应更换。技师B说粘合式鼓式制动衬片在衬片厚度达到1/16英寸时应更换。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都正确。铆接式制动蹄衬片应在磨损到铆钉之前更换，因为露出的铆钉会划伤制动鼓。粘合式衬片直接粘合在蹄片上，应在达到最小厚度1/16英寸时更换以确保安全操作。",
  },
  {
    id: 165,
    q: "What should a technician inspect when performing a visual brake inspection?",
    options: [
      "A) Only the brake pad thickness",
      "B) Pad/shoe thickness, rotor/drum condition, brake lines and hoses, fluid level, and hardware condition",
      "C) Only the brake fluid color",
      "D) Only the brake pedal height"
    ],
    answer: 1,
    explanation: "A complete visual brake inspection includes checking pad and shoe thickness, rotor and drum condition for scoring or cracks, brake lines and hoses for leaks or damage, fluid level and condition, caliper and wheel cylinder operation, and hardware such as springs, clips, and slide pins.",
    diagram: "",
    terms: ["brake_pads", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Disc_brake.jpg/640px-Disc_brake.jpg",
    youtube: "https://www.youtube.com/watch?v=lGqExDIaMhU",
    youtubeTitle: "Complete Brake Inspection Guide",
    qChinese: "技师在进行目视制动检查时应检查什么？",
    optionsChinese: [
      "A) 仅制动片厚度",
      "B) 片/蹄厚度、盘/鼓状况、制动管路和软管、液位以及硬件状况",
      "C) 仅制动液颜色",
      "D) 仅制动踏板高度"
    ],
    explanationChinese: "完整的目视制动检查包括检查制动片和蹄片厚度、制动盘和鼓的刻痕或裂纹状况、制动管路和软管是否泄漏或损坏、液位和状况、卡钳和轮缸操作，以及弹簧、卡扣和导销等硬件。",
  },
  {
    id: 166,
    q: "After replacing brake pads, the brake pedal goes to the floor on the first application. What is the MOST likely cause?",
    options: [
      "A) The brake pads are defective",
      "B) The caliper pistons need to be pumped out to contact the new pads against the rotor",
      "C) The master cylinder has failed",
      "D) The brake booster is not working"
    ],
    answer: 1,
    explanation: "After brake pad replacement, the pistons are pushed fully back and there is a gap between the pads and rotor. The brake pedal must be pumped several times to move the pistons out and bring the pads into contact with the rotors. This is a normal and expected step after pad replacement.",
    diagram: "",
    terms: ["brake_pads", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Disc_brake.jpg/640px-Disc_brake.jpg",
    youtube: "https://www.youtube.com/watch?v=lGqExDIaMhU",
    youtubeTitle: "After Brake Pad Replacement Tips",
    qChinese: "更换制动片后，第一次踩制动踏板时踏板踩到底。最可能的原因是什么？",
    optionsChinese: [
      "A) 制动片有缺陷",
      "B) 卡钳活塞需要通过踩踏板泵出以使新制动片接触制动盘",
      "C) 主缸故障",
      "D) 制动助力器不工作"
    ],
    explanationChinese: "更换制动片后，活塞被完全推回，制动片和制动盘之间有间隙。必须多次踩制动踏板以将活塞移出，使制动片与制动盘接触。这是更换制动片后正常且预期的步骤。",
  },
  {
    id: 167,
    q: "What is the purpose of caliper slide pin lubrication during a brake service?",
    options: [
      "A) To prevent the caliper from making noise",
      "B) To ensure the caliper slides freely so brake pads wear evenly",
      "C) To reduce brake dust",
      "D) To protect the caliper from corrosion only"
    ],
    answer: 1,
    explanation: "Caliper slide pins must be lubricated with high-temperature brake grease to ensure the caliper floats freely on the bracket. If the slide pins are dry or seized, the caliper cannot center over the rotor, causing uneven pad wear, reduced braking, and potential pulling to one side.",
    diagram: "",
    terms: ["brake_pads", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Disc_brake.jpg/640px-Disc_brake.jpg",
    youtube: "https://www.youtube.com/watch?v=lGqExDIaMhU",
    youtubeTitle: "Lubricating Brake Caliper Slide Pins",
    qChinese: "制动保养期间卡钳导销润滑的目的是什么？",
    optionsChinese: [
      "A) 防止卡钳产生噪音",
      "B) 确保卡钳自由滑动以使制动片均匀磨损",
      "C) 减少制动灰尘",
      "D) 仅保护卡钳免受腐蚀"
    ],
    explanationChinese: "卡钳导销必须用高温制动脂润滑，以确保卡钳在支架上自由浮动。如果导销干燥或卡死，卡钳无法在制动盘上居中，导致制动片磨损不均、制动力降低以及可能向一侧偏移。",
  },
  {
    id: 168,
    q: "A spongy brake pedal that slowly sinks to the floor with steady pressure indicates what problem?",
    options: [
      "A) Worn brake pads",
      "B) An internal leak in the master cylinder",
      "C) A sticking caliper",
      "D) Glazed brake rotors"
    ],
    answer: 1,
    explanation: "A brake pedal that feels spongy and slowly sinks to the floor under steady pressure typically indicates an internal leak in the master cylinder. Internal seals are bypassing fluid rather than holding pressure. This is a safety-critical condition requiring immediate master cylinder replacement.",
    diagram: "",
    terms: ["brake_fluid", "brake_pads"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Disc_brake.jpg/640px-Disc_brake.jpg",
    youtube: "https://www.youtube.com/watch?v=lGqExDIaMhU",
    youtubeTitle: "Master Cylinder Failure Symptoms",
    qChinese: "在稳定压力下制动踏板发软并缓慢下沉到底表明什么问题？",
    optionsChinese: [
      "A) 制动片磨损",
      "B) 主缸内部泄漏",
      "C) 卡钳卡滞",
      "D) 制动盘釉化"
    ],
    explanationChinese: "制动踏板在稳定压力下发软并缓慢下沉到底通常表明主缸内部泄漏。内部密封件绕过液体而不是保持压力。这是一个关键的安全状况，需要立即更换主缸。",
  },
  {
    id: 169,
    q: "What type of measurement tool is used to check brake rotor lateral runout?",
    options: [
      "A) A micrometer",
      "B) A dial indicator",
      "C) A brake gauge",
      "D) A feeler gauge"
    ],
    answer: 1,
    explanation: "A dial indicator is used to measure brake rotor lateral runout (wobble). The indicator base is clamped to a fixed point and the plunger contacts the rotor face. The rotor is then rotated by hand and the dial shows the total runout. Excessive runout causes brake pedal pulsation.",
    diagram: "",
    terms: ["brake_pads", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Disc_brake.jpg/640px-Disc_brake.jpg",
    youtube: "https://www.youtube.com/watch?v=lGqExDIaMhU",
    youtubeTitle: "Measuring Brake Rotor Runout",
    qChinese: "什么类型的测量工具用于检查制动盘横向跳动？",
    optionsChinese: [
      "A) 千分尺",
      "B) 百分表",
      "C) 制动量规",
      "D) 塞规"
    ],
    explanationChinese: "百分表用于测量制动盘横向跳动（摆动）。指示器底座夹紧在固定点上，探针接触制动盘表面。然后用手旋转制动盘，百分表显示总跳动量。过大的跳动会导致制动踏板脉动。",
  },
  {
    id: 170,
    q: "What is the FIRST step before beginning any brake service work?",
    options: [
      "A) Remove the wheels",
      "B) Safely raise and support the vehicle on jack stands or a lift",
      "C) Loosen the lug nuts",
      "D) Pump the brake pedal"
    ],
    answer: 1,
    explanation: "Safety is the first priority. Before any brake work, the vehicle must be safely raised and supported on jack stands or a vehicle lift. Lug nuts should be loosened while the vehicle is still on the ground, but the vehicle must be secure before removing wheels and working underneath.",
    diagram: "",
    terms: ["brake_pads", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Disc_brake.jpg/640px-Disc_brake.jpg",
    youtube: "https://www.youtube.com/watch?v=lGqExDIaMhU",
    youtubeTitle: "Safe Vehicle Lifting for Brake Work",
    qChinese: "在开始任何制动保养工作之前的第一步是什么？",
    optionsChinese: [
      "A) 拆卸车轮",
      "B) 安全地将车辆升起并用千斤顶支架或举升机支撑",
      "C) 松开车轮螺母",
      "D) 踩制动踏板"
    ],
    explanationChinese: "安全是第一优先事项。在进行任何制动工作之前，必须安全地将车辆升起并用千斤顶支架或车辆举升机支撑。车轮螺母应在车辆仍在地面上时松开，但在拆卸车轮和在底部工作之前车辆必须固定好。",
  },
  // ===== FLUID CHECKS AND SERVICE (Questions 171–180) =====
  {
    id: 171,
    q: "How is automatic transmission fluid level typically checked on most vehicles?",
    options: [
      "A) With the engine off and the vehicle cold",
      "B) With the engine running, transmission in park or neutral, and at normal operating temperature",
      "C) By removing the transmission pan",
      "D) Using a scan tool only"
    ],
    answer: 1,
    explanation: "On most vehicles with a dipstick, automatic transmission fluid is checked with the engine running, the transmission in park or neutral, and at normal operating temperature. This ensures the torque converter is filled and fluid is circulating, giving an accurate level reading on the dipstick.",
    diagram: "",
    terms: ["transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Automatikgetriebe.jpg/640px-Automatikgetriebe.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Checking Automatic Transmission Fluid",
    qChinese: "大多数车辆上自动变速箱油液位通常如何检查？",
    optionsChinese: [
      "A) 发动机熄火且车辆冷态时",
      "B) 发动机运转、变速箱在P或N档且在正常工作温度下",
      "C) 通过拆卸变速箱油底壳",
      "D) 仅使用诊断工具"
    ],
    explanationChinese: "在大多数有量油尺的车辆上，自动变速箱油在发动机运转、变速箱在P或N档且在正常工作温度下检查。这确保液力变矩器已充满且液体在循环，在量油尺上给出准确的液位读数。",
  },
  {
    id: 172,
    q: "Normal automatic transmission fluid should be what color?",
    options: [
      "A) Dark brown or black",
      "B) Red or pink and translucent",
      "C) Green",
      "D) Milky white"
    ],
    answer: 1,
    explanation: "Normal automatic transmission fluid is typically red or pink and translucent when in good condition. Dark brown or black fluid with a burnt smell indicates overheating and degradation, requiring a fluid change. Milky or foamy fluid suggests water contamination, requiring further diagnosis.",
    diagram: "",
    terms: ["transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Automatikgetriebe.jpg/640px-Automatikgetriebe.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Transmission Fluid Color Guide",
    qChinese: "正常的自动变速箱油应该是什么颜色？",
    optionsChinese: [
      "A) 深棕色或黑色",
      "B) 红色或粉红色且半透明",
      "C) 绿色",
      "D) 乳白色"
    ],
    explanationChinese: "正常的自动变速箱油在良好状态下通常是红色或粉红色且半透明的。带有烧焦气味的深棕色或黑色液体表明过热和降解，需要更换液体。乳白色或泡沫状液体表明水污染，需要进一步诊断。",
  },
  {
    id: 173,
    q: "Power steering fluid is low. Before topping off, what should the technician do?",
    options: [
      "A) Simply add fluid and move on",
      "B) Inspect the power steering system for leaks at the pump, hoses, rack, and connections",
      "C) Flush the entire power steering system",
      "D) Replace the power steering pump"
    ],
    answer: 1,
    explanation: "Before adding fluid, the technician should inspect the system for leaks since power steering fluid does not normally decrease. Check the pump, hoses, fittings, rack or gear seals, and cooler lines for leaks. Simply topping off without investigating the cause will lead to repeated low levels.",
    diagram: "",
    terms: ["power_steering_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Checking Power Steering Fluid",
    qChinese: "助力转向液液位低。在添加之前，技师应该做什么？",
    optionsChinese: [
      "A) 只需添加液体并继续",
      "B) 检查助力转向系统的泵、软管、齿条和接头是否泄漏",
      "C) 冲洗整个助力转向系统",
      "D) 更换助力转向泵"
    ],
    explanationChinese: "在添加液体之前，技师应检查系统是否泄漏，因为助力转向液通常不会减少。检查泵、软管、接头、齿条或齿轮密封件和冷却管路是否泄漏。不调查原因就简单添加液体会导致液位反复偏低。",
  },
  {
    id: 174,
    q: "What type of fluid is typically used in a conventional hydraulic power steering system?",
    options: [
      "A) Engine oil",
      "B) Power steering fluid or the manufacturer-specified ATF",
      "C) Brake fluid",
      "D) Gear oil"
    ],
    answer: 1,
    explanation: "Conventional hydraulic power steering systems use power steering fluid or the manufacturer-specified automatic transmission fluid. Using the wrong fluid type can damage seals and components. Always check the reservoir cap or owner's manual for the correct fluid specification for the vehicle.",
    diagram: "",
    terms: ["power_steering_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Power Steering Fluid Types",
    qChinese: "传统液压助力转向系统通常使用什么类型的液体？",
    optionsChinese: [
      "A) 发动机机油",
      "B) 助力转向液或制造商指定的ATF",
      "C) 制动液",
      "D) 齿轮油"
    ],
    explanationChinese: "传统液压助力转向系统使用助力转向液或制造商指定的自动变速箱油。使用错误类型的液体会损坏密封件和组件。始终检查储液壶盖或车主手册以确认车辆的正确液体规格。",
  },
  {
    id: 175,
    q: "What fluid is used in a manual transmission or transaxle?",
    options: [
      "A) Automatic transmission fluid only",
      "B) The manufacturer-specified gear oil or manual transmission fluid",
      "C) Engine oil in all cases",
      "D) Power steering fluid"
    ],
    answer: 1,
    explanation: "Manual transmissions use manufacturer-specified gear oil or manual transmission fluid. Some modern manuals require specific synthetic fluids or even ATF. Using the wrong fluid can cause shifting problems, gear damage, or synchronizer failure. Always consult the service manual for the correct specification.",
    diagram: "",
    terms: ["transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Automatikgetriebe.jpg/640px-Automatikgetriebe.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Manual Transmission Fluid Types",
    qChinese: "手动变速箱或变速驱动桥使用什么液体？",
    optionsChinese: [
      "A) 仅自动变速箱油",
      "B) 制造商指定的齿轮油或手动变速箱油",
      "C) 所有情况下都用发动机机油",
      "D) 助力转向液"
    ],
    explanationChinese: "手动变速箱使用制造商指定的齿轮油或手动变速箱油。一些现代手动变速箱需要特定的合成油甚至ATF。使用错误的液体会导致换挡问题、齿轮损坏或同步器故障。始终查阅维修手册以获取正确的规格。",
  },
  {
    id: 176,
    q: "Differential fluid should be changed at what interval?",
    options: [
      "A) Every oil change",
      "B) According to the manufacturer's recommended maintenance schedule",
      "C) Only when the differential makes noise",
      "D) It never needs to be changed"
    ],
    answer: 1,
    explanation: "Differential fluid should be changed according to the manufacturer's recommended maintenance schedule, which varies by vehicle and driving conditions. Severe-duty conditions like towing or off-road use typically require more frequent changes. Neglected differential fluid loses its protective properties over time.",
    diagram: "",
    terms: ["transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Automatikgetriebe.jpg/640px-Automatikgetriebe.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Differential Fluid Change",
    qChinese: "差速器油应按什么间隔更换？",
    optionsChinese: [
      "A) 每次换油时",
      "B) 按照制造商推荐的保养计划",
      "C) 仅在差速器产生噪音时",
      "D) 永远不需要更换"
    ],
    explanationChinese: "差速器油应按照制造商推荐的保养计划更换，该计划因车辆和驾驶条件而异。拖拽或越野等重负荷条件通常需要更频繁地更换。被忽视的差速器油会随时间失去其保护性能。",
  },
  {
    id: 177,
    q: "Windshield washer fluid is not spraying. The reservoir is full. What should be checked NEXT?",
    options: [
      "A) The wiper blade condition",
      "B) The washer pump, hoses for clogs or disconnection, and nozzles for blockage",
      "C) The windshield for cracks",
      "D) The headlight fluid level"
    ],
    answer: 1,
    explanation: "If the reservoir is full but fluid is not spraying, check the washer pump for operation by listening for the motor when activated. Then check the hoses for kinks, disconnections, or cracks, and the spray nozzles for blockage from debris or wax. A blown fuse could also disable the pump.",
    diagram: "",
    terms: ["wiper_blades"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Windshield Washer System Diagnosis",
    qChinese: "挡风玻璃清洗液不喷射。储液壶是满的。接下来应该检查什么？",
    optionsChinese: [
      "A) 雨刷片状况",
      "B) 清洗泵、软管是否堵塞或断开，以及喷嘴是否堵塞",
      "C) 挡风玻璃是否有裂纹",
      "D) 大灯液液位"
    ],
    explanationChinese: "如果储液壶满了但液体不喷射，激活时倾听电机以检查清洗泵是否工作。然后检查软管是否有扭结、断开或裂纹，以及喷嘴是否被杂物或蜡堵塞。保险丝烧断也可能禁用泵。",
  },
  {
    id: 178,
    q: "What is the purpose of the transfer case fluid in a four-wheel-drive vehicle?",
    options: [
      "A) To cool the engine",
      "B) To lubricate the gears, chains, and bearings that distribute power between the front and rear axles",
      "C) To clean the fuel system",
      "D) To cool the transmission"
    ],
    answer: 1,
    explanation: "Transfer case fluid lubricates the internal gears, chains or gear sets, and bearings that split engine power between the front and rear axles. Proper fluid level and condition are essential for smooth operation. Low or contaminated fluid can cause noise, binding, and component failure.",
    diagram: "",
    terms: ["transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Automatikgetriebe.jpg/640px-Automatikgetriebe.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Transfer Case Fluid Service",
    qChinese: "四轮驱动车辆中分动箱油的目的是什么？",
    optionsChinese: [
      "A) 冷却发动机",
      "B) 润滑在前后轴之间分配动力的齿轮、链条和轴承",
      "C) 清洁燃油系统",
      "D) 冷却变速箱"
    ],
    explanationChinese: "分动箱油润滑在前后轴之间分配发动机动力的内部齿轮、链条或齿轮组和轴承。适当的液位和状况对于平稳运行至关重要。液位低或污染的液体会导致噪音、卡滞和组件故障。",
  },
  {
    id: 179,
    q: "When checking fluid levels during a multi-point inspection, which fluids should be checked?",
    options: [
      "A) Only engine oil",
      "B) Engine oil, coolant, brake fluid, power steering fluid, transmission fluid, and washer fluid",
      "C) Only coolant and oil",
      "D) Only brake fluid and transmission fluid"
    ],
    answer: 1,
    explanation: "A thorough multi-point inspection includes checking all vehicle fluids: engine oil, coolant, brake fluid, power steering fluid, automatic transmission fluid, differential fluid if accessible, and windshield washer fluid. Each fluid should be checked for proper level and condition as part of preventive maintenance.",
    diagram: "",
    terms: ["engine_oil", "coolant", "brake_fluid", "power_steering_fluid", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Multi-Point Vehicle Inspection Guide",
    qChinese: "在多点检查中检查液位时，应检查哪些液体？",
    optionsChinese: [
      "A) 仅发动机机油",
      "B) 发动机机油、冷却液、制动液、助力转向液、变速箱油和清洗液",
      "C) 仅冷却液和机油",
      "D) 仅制动液和变速箱油"
    ],
    explanationChinese: "全面的多点检查包括检查所有车辆液体：发动机机油、冷却液、制动液、助力转向液、自动变速箱油、如果可以接触到的差速器油以及挡风玻璃清洗液。每种液体都应检查适当的液位和状况，作为预防性维护的一部分。",
  },
  {
    id: 180,
    q: "What color is typical new DOT 3 brake fluid?",
    options: [
      "A) Red",
      "B) Clear to light amber",
      "C) Dark brown",
      "D) Green"
    ],
    answer: 1,
    explanation: "New DOT 3 brake fluid is typically clear to light amber in color. As it ages and absorbs moisture, it gradually darkens to a darker amber or brown color. Dark brown or black brake fluid indicates it is contaminated and has exceeded its useful life, requiring a brake fluid flush.",
    diagram: "",
    terms: ["brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Disc_brake.jpg/640px-Disc_brake.jpg",
    youtube: "https://www.youtube.com/watch?v=lGqExDIaMhU",
    youtubeTitle: "Brake Fluid Condition Inspection",
    qChinese: "新的DOT 3制动液通常是什么颜色？",
    optionsChinese: [
      "A) 红色",
      "B) 透明至浅琥珀色",
      "C) 深棕色",
      "D) 绿色"
    ],
    explanationChinese: "新的DOT 3制动液通常是透明至浅琥珀色。随着老化和吸收水分，它会逐渐变暗为较深的琥珀色或棕色。深棕色或黑色的制动液表明它已被污染并超过了使用寿命，需要进行制动液冲洗。",
  },
  // ===== BELT/HOSE INSPECTION, FILTERS, WIPERS, LIGHTS, SAFETY (Questions 181–200) =====
  {
    id: 181,
    q: "What is the recommended method for inspecting a serpentine belt?",
    options: [
      "A) Only check for cracks on the ribbed side",
      "B) Check for cracks, fraying, glazing, chunking, and proper tension on both sides of the belt",
      "C) Only measure the belt width",
      "D) Spray water on it to check for slipping"
    ],
    answer: 1,
    explanation: "A thorough serpentine belt inspection includes checking both sides for cracks, fraying, glazing, oil contamination, chunking (missing pieces), and proper tension. Modern EPDM belts may wear without visible cracks, so a belt wear gauge should be used to measure rib depth for accurate assessment.",
    diagram: "",
    terms: ["serpentine_belt"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=W7_3viOGo18",
    youtubeTitle: "Serpentine Belt Inspection Guide",
    qChinese: "检查蛇形皮带的推荐方法是什么？",
    optionsChinese: [
      "A) 仅检查肋面是否有裂纹",
      "B) 检查皮带两面是否有裂纹、磨损、老化光泽、碎裂，以及是否有适当的张力",
      "C) 仅测量皮带宽度",
      "D) 在上面喷水以检查是否打滑"
    ],
    explanationChinese: "全面的蛇形皮带检查包括检查两面是否有裂纹、磨损、老化光泽、油污、碎裂（缺失部分）以及适当的张力。现代EPDM皮带可能在没有可见裂纹的情况下磨损，因此应使用皮带磨损量规测量肋深度以进行准确评估。",
  },
  {
    id: 182,
    q: "A squealing noise from the engine bay that changes with engine RPM is MOST likely caused by what?",
    options: [
      "A) A faulty exhaust system",
      "B) A worn or loose serpentine belt or a failing belt tensioner",
      "C) A bad spark plug",
      "D) Low engine oil"
    ],
    answer: 1,
    explanation: "A squealing noise that varies with engine RPM typically indicates a worn, loose, or glazed serpentine belt, or a failing belt tensioner that is not maintaining proper belt tension. The noise is caused by the belt slipping on the pulleys. The belt and tensioner should be inspected and replaced as needed.",
    diagram: "",
    terms: ["serpentine_belt"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=W7_3viOGo18",
    youtubeTitle: "Diagnosing Belt Squeal Noise",
    qChinese: "发动机舱中随发动机转速变化的尖叫声最可能由什么引起？",
    optionsChinese: [
      "A) 排气系统故障",
      "B) 蛇形皮带磨损或松动，或皮带张紧器故障",
      "C) 火花塞不良",
      "D) 发动机机油不足"
    ],
    explanationChinese: "随发动机转速变化的尖叫声通常表明蛇形皮带磨损、松动或老化光泽，或皮带张紧器故障未能保持适当的皮带张力。噪音是由皮带在皮带轮上打滑引起的。应检查皮带和张紧器，并根据需要更换。",
  },
  {
    id: 183,
    q: "What is the PRIMARY purpose of the engine air filter?",
    options: [
      "A) To regulate engine temperature",
      "B) To prevent dirt, dust, and debris from entering the engine intake and causing wear",
      "C) To improve exhaust emissions",
      "D) To control engine noise"
    ],
    answer: 1,
    explanation: "The engine air filter prevents dirt, dust, insects, and other debris from entering the engine through the air intake. Contaminants can cause accelerated wear of cylinder walls, pistons, and rings. A clean air filter ensures proper airflow for optimal engine performance and fuel efficiency.",
    diagram: "",
    terms: ["air_filter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Air_filter.jpg/640px-Air_filter.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Engine Air Filter Replacement",
    qChinese: "发动机空气滤清器的主要目的是什么？",
    optionsChinese: [
      "A) 调节发动机温度",
      "B) 防止灰尘、尘土和杂物进入发动机进气道并造成磨损",
      "C) 改善排放",
      "D) 控制发动机噪音"
    ],
    explanationChinese: "发动机空气滤清器防止灰尘、尘土、昆虫和其他杂物通过进气道进入发动机。污染物会导致气缸壁、活塞和活塞环加速磨损。清洁的空气滤清器确保适当的气流以获得最佳发动机性能和燃油效率。",
  },
  {
    id: 184,
    q: "What is the difference between the engine air filter and the cabin air filter?",
    options: [
      "A) They are the same filter",
      "B) The engine air filter cleans air entering the engine; the cabin air filter cleans air entering the passenger compartment",
      "C) The cabin air filter is only found in diesel vehicles",
      "D) The engine air filter also filters the cabin air"
    ],
    answer: 1,
    explanation: "The engine air filter cleans the air that enters the engine for combustion, while the cabin air filter cleans the air that enters the passenger compartment through the HVAC system. They serve different systems and are located in different areas. Both should be replaced at manufacturer-recommended intervals.",
    diagram: "",
    terms: ["air_filter", "cabin_air_filter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Air_filter.jpg/640px-Air_filter.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Engine Air Filter vs Cabin Air Filter",
    qChinese: "发动机空气滤清器和车厢空调滤清器有什么区别？",
    optionsChinese: [
      "A) 它们是同一个滤清器",
      "B) 发动机空气滤清器过滤进入发动机的空气；车厢空调滤清器过滤进入乘客舱的空气",
      "C) 车厢空调滤清器仅在柴油车中使用",
      "D) 发动机空气滤清器也过滤车厢空气"
    ],
    explanationChinese: "发动机空气滤清器过滤进入发动机用于燃烧的空气，而车厢空调滤清器过滤通过HVAC系统进入乘客舱的空气。它们服务于不同的系统并位于不同的区域。两者都应按制造商推荐的间隔更换。",
  },
  {
    id: 185,
    q: "A dirty cabin air filter can cause which of the following symptoms?",
    options: [
      "A) Engine misfires",
      "B) Reduced airflow from the HVAC vents, musty odor, and foggy windows",
      "C) Transmission shifting problems",
      "D) Engine overheating"
    ],
    answer: 1,
    explanation: "A dirty cabin air filter restricts airflow through the HVAC system, resulting in reduced air volume from the vents. It can also cause musty or unpleasant odors and contribute to foggy windows due to poor air circulation. Replacing the cabin filter restores proper airflow and air quality.",
    diagram: "",
    terms: ["cabin_air_filter", "air_filter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Air_filter.jpg/640px-Air_filter.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Cabin Air Filter Replacement",
    qChinese: "脏的车厢空调滤清器可能导致以下哪种症状？",
    optionsChinese: [
      "A) 发动机缺火",
      "B) HVAC出风口气流减少、异味和车窗起雾",
      "C) 变速箱换挡问题",
      "D) 发动机过热"
    ],
    explanationChinese: "脏的车厢空调滤清器限制通过HVAC系统的气流，导致出风口气量减少。它还可能导致霉味或不愉快的气味，并因空气流通不良而导致车窗起雾。更换车厢滤清器可恢复正常气流和空气质量。",
  },
  {
    id: 186,
    q: "When should wiper blades be replaced?",
    options: [
      "A) Only when they completely fall off",
      "B) When they streak, chatter, skip, or leave areas unwiped on the windshield",
      "C) Every 5,000 miles with the oil change",
      "D) Only during the annual state inspection"
    ],
    answer: 1,
    explanation: "Wiper blades should be replaced when they show signs of deterioration such as streaking, chattering, skipping, smearing, or leaving unwiped areas on the windshield. Wiper blades typically last six to twelve months depending on climate and use. Worn blades compromise visibility and safety.",
    diagram: "",
    terms: ["wiper_blades"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "When to Replace Wiper Blades",
    qChinese: "什么时候应该更换雨刷片？",
    optionsChinese: [
      "A) 仅在它们完全脱落时",
      "B) 当它们在挡风玻璃上出现条纹、颤动、跳动或留下未擦净区域时",
      "C) 每5000英里随换油一起更换",
      "D) 仅在年度国家检查期间"
    ],
    explanationChinese: "雨刷片应在出现劣化迹象时更换，如条纹、颤动、跳动、涂抹或在挡风玻璃上留下未擦净区域。雨刷片通常根据气候和使用情况持续六到十二个月。磨损的雨刷片会影响能见度和安全性。",
  },
  {
    id: 187,
    q: "A headlight bulb needs replacement. Which safety precaution is important when handling halogen bulbs?",
    options: [
      "A) Wear rubber boots",
      "B) Do not touch the glass part of the bulb with bare fingers as skin oils can cause the bulb to fail prematurely",
      "C) Only replace bulbs with the engine running",
      "D) Wear ear protection"
    ],
    answer: 1,
    explanation: "When handling halogen bulbs, never touch the glass envelope with bare fingers. Oils from skin create hot spots on the glass that can cause the bulb to overheat and fail prematurely. Handle the bulb by its base or use clean gloves. If touched, clean with rubbing alcohol before installation.",
    diagram: "",
    terms: ["wiper_blades"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Headlight Bulb Replacement Tips",
    qChinese: "大灯灯泡需要更换。处理卤素灯泡时哪项安全注意事项很重要？",
    optionsChinese: [
      "A) 穿橡胶靴",
      "B) 不要用裸手触摸灯泡玻璃部分，因为皮肤油脂会导致灯泡过早失效",
      "C) 仅在发动机运转时更换灯泡",
      "D) 佩戴耳部保护"
    ],
    explanationChinese: "处理卤素灯泡时，切勿用裸手触摸玻璃外壳。皮肤上的油脂会在玻璃上产生热点，可能导致灯泡过热和过早失效。应通过底座握住灯泡或使用干净手套。如果触摸了，安装前用酒精擦拭清洁。",
  },
  {
    id: 188,
    q: "What personal protective equipment (PPE) should be worn when working with automotive batteries?",
    options: [
      "A) Only work gloves",
      "B) Safety glasses and acid-resistant gloves to protect from acid and explosion hazards",
      "C) A dust mask only",
      "D) Steel-toed boots only"
    ],
    answer: 1,
    explanation: "When working with batteries, safety glasses and acid-resistant gloves should be worn. Battery acid (sulfuric acid) can cause severe chemical burns to skin and eyes. Batteries also produce hydrogen gas during charging which is explosive. Proper PPE protects against acid splashes and potential explosions.",
    diagram: "",
    terms: ["battery"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Varta_car_battery.jpg/640px-Varta_car_battery.jpg",
    youtube: "https://www.youtube.com/watch?v=LGB6ZEjGm7Q",
    youtubeTitle: "Battery Safety Precautions",
    qChinese: "处理汽车电池时应佩戴什么个人防护装备（PPE）？",
    optionsChinese: [
      "A) 仅工作手套",
      "B) 安全眼镜和耐酸手套以防止酸液和爆炸危险",
      "C) 仅防尘口罩",
      "D) 仅钢头靴"
    ],
    explanationChinese: "处理电池时应佩戴安全眼镜和耐酸手套。电池酸（硫酸）会对皮肤和眼睛造成严重的化学灼伤。电池在充电过程中还会产生易爆的氢气。适当的PPE可保护免受酸液飞溅和潜在爆炸的伤害。",
  },
  {
    id: 189,
    q: "What is the correct procedure for using a floor jack to lift a vehicle?",
    options: [
      "A) Place the jack under any part of the vehicle's body",
      "B) Position the jack under the manufacturer-specified lift points and always use jack stands before working under the vehicle",
      "C) Use the floor jack as the sole support while working underneath",
      "D) Jack the vehicle from the bumper"
    ],
    answer: 1,
    explanation: "The floor jack must be positioned at manufacturer-specified lift points to prevent damage to the vehicle. After lifting, jack stands must be placed under designated support points before anyone works under the vehicle. A floor jack alone is not a safe support as it can fail or be released accidentally.",
    diagram: "",
    terms: ["battery"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Safe Vehicle Lifting Procedures",
    qChinese: "使用地板千斤顶举升车辆的正确程序是什么？",
    optionsChinese: [
      "A) 将千斤顶放在车辆车身的任何部分下面",
      "B) 将千斤顶放在制造商指定的举升点下方，在车辆下方工作前始终使用千斤顶支架",
      "C) 在底部工作时使用地板千斤顶作为唯一支撑",
      "D) 从保险杠处举升车辆"
    ],
    explanationChinese: "地板千斤顶必须放置在制造商指定的举升点以防止损坏车辆。举升后，在任何人在车辆下方工作之前，必须将千斤顶支架放在指定的支撑点下。仅使用地板千斤顶不安全，因为它可能故障或被意外释放。",
  },
  {
    id: 190,
    q: "What should a technician do FIRST before starting any underhood service work?",
    options: [
      "A) Start the engine to warm it up",
      "B) Verify the engine is off, the ignition is off, and remove rings, watches, and loose clothing that could get caught",
      "C) Disconnect the battery",
      "D) Raise the vehicle on the lift"
    ],
    answer: 1,
    explanation: "Before performing underhood work, ensure the engine and ignition are off. Remove rings, watches, necklaces, and ties that could get caught in moving parts or create electrical shorts. Long hair should be tied back. These simple precautions prevent serious injuries from rotating components and electrical hazards.",
    diagram: "",
    terms: ["battery", "serpentine_belt"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Shop Safety Best Practices",
    qChinese: "在开始任何发动机舱维修工作之前，技师应首先做什么？",
    optionsChinese: [
      "A) 启动发动机让其预热",
      "B) 确认发动机关闭、点火关闭，并取下可能被卡住的戒指、手表和宽松衣物",
      "C) 断开电池",
      "D) 将车辆升到举升机上"
    ],
    explanationChinese: "在进行发动机舱工作之前，确保发动机和点火已关闭。取下可能被运动部件卡住或造成电气短路的戒指、手表、项链和领带。长发应扎好。这些简单的预防措施可防止旋转部件和电气危险造成的严重伤害。",
  },
  {
    id: 191,
    q: "A vehicle's brake warning light on the dash is illuminated. What should the technician check FIRST?",
    options: [
      "A) The alternator output",
      "B) The brake fluid level in the master cylinder reservoir",
      "C) The engine oil level",
      "D) The tire pressure"
    ],
    answer: 1,
    explanation: "The brake warning light can indicate low brake fluid, which is the first thing to check. Low fluid may be caused by worn brake pads or a leak in the system. The light can also indicate the parking brake is engaged. Check the fluid level first as it is the quickest and most common cause.",
    diagram: "",
    terms: ["brake_fluid", "brake_pads"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Disc_brake.jpg/640px-Disc_brake.jpg",
    youtube: "https://www.youtube.com/watch?v=lGqExDIaMhU",
    youtubeTitle: "Brake Warning Light Diagnosis",
    qChinese: "车辆仪表板上的制动警告灯亮起。技师应首先检查什么？",
    optionsChinese: [
      "A) 发电机输出",
      "B) 主缸储液壶中的制动液液位",
      "C) 发动机机油液位",
      "D) 轮胎压力"
    ],
    explanationChinese: "制动警告灯可能表示制动液不足，这是首先要检查的。液位低可能是由于制动片磨损或系统泄漏。该灯也可能表示驻车制动已接合。首先检查液位，因为这是最快且最常见的原因。",
  },
  {
    id: 192,
    q: "What is the torque specification for lug nuts primarily used to ensure?",
    options: [
      "A) The wheels spin freely",
      "B) Proper and even clamping force to prevent wheel loosening and rotor warping",
      "C) The tires wear evenly",
      "D) The TPMS sensors are calibrated"
    ],
    answer: 1,
    explanation: "Lug nuts must be tightened to the manufacturer's torque specification to ensure proper and even clamping force. Under-torquing can allow wheels to loosen, while over-torquing can warp brake rotors, stretch studs, or crack wheels. A torque wrench should always be used for final tightening.",
    diagram: "",
    terms: ["tire_rotation", "brake_pads"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tire_valve_stem.jpg/640px-Tire_valve_stem.jpg",
    youtube: "https://www.youtube.com/watch?v=NDqpgT5Yl1o",
    youtubeTitle: "Proper Lug Nut Torque Procedure",
    qChinese: "车轮螺母的扭矩规格主要用于确保什么？",
    optionsChinese: [
      "A) 车轮自由旋转",
      "B) 适当且均匀的夹紧力以防止车轮松动和制动盘变形",
      "C) 轮胎均匀磨损",
      "D) TPMS传感器已校准"
    ],
    explanationChinese: "车轮螺母必须按照制造商的扭矩规格拧紧，以确保适当且均匀的夹紧力。扭矩不足可能导致车轮松动，而过度拧紧可能使制动盘变形、螺柱拉伸或车轮开裂。最终拧紧时应始终使用扭矩扳手。",
  },
  {
    id: 193,
    q: "What pattern should be used when tightening lug nuts?",
    options: [
      "A) Tighten them in a clockwise circle pattern",
      "B) Tighten them in a star (criss-cross) pattern to ensure even seating",
      "C) Tighten the top ones first, then the bottom ones",
      "D) Tighten them in any random order"
    ],
    answer: 1,
    explanation: "Lug nuts should always be tightened in a star or criss-cross pattern. This ensures the wheel is pulled evenly against the hub, preventing warping and uneven clamping. Tightening in a circular pattern can cause the wheel to seat unevenly, leading to vibration and potential brake rotor warping.",
    diagram: "",
    terms: ["tire_rotation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tire_valve_stem.jpg/640px-Tire_valve_stem.jpg",
    youtube: "https://www.youtube.com/watch?v=NDqpgT5Yl1o",
    youtubeTitle: "Correct Lug Nut Tightening Pattern",
    qChinese: "拧紧车轮螺母时应使用什么模式？",
    optionsChinese: [
      "A) 按顺时针圆形模式拧紧",
      "B) 按星形（交叉）模式拧紧以确保均匀就位",
      "C) 先拧紧上面的，再拧紧下面的",
      "D) 按任意随机顺序拧紧"
    ],
    explanationChinese: "车轮螺母应始终按星形或交叉模式拧紧。这确保车轮均匀地被拉紧到轮毂上，防止变形和不均匀夹紧。按圆形模式拧紧可能导致车轮不均匀就位，导致振动和潜在的制动盘变形。",
  },
  {
    id: 194,
    q: "What should be checked during a vehicle lighting system inspection?",
    options: [
      "A) Only the headlights",
      "B) Headlights, taillights, brake lights, turn signals, reverse lights, marker lights, and license plate lights",
      "C) Only the turn signals",
      "D) Only lights that the customer complains about"
    ],
    answer: 1,
    explanation: "A complete lighting inspection includes all exterior lights: headlights on low and high beam, taillights, brake lights, turn signals, hazard flashers, reverse lights, side marker lights, fog lights if equipped, and license plate lights. All bulbs should be functional and lenses free of damage.",
    diagram: "",
    terms: ["wiper_blades"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Complete Vehicle Light Inspection",
    qChinese: "在车辆照明系统检查中应检查什么？",
    optionsChinese: [
      "A) 仅大灯",
      "B) 大灯、尾灯、制动灯、转向灯、倒车灯、示宽灯和牌照灯",
      "C) 仅转向灯",
      "D) 仅客户投诉的灯"
    ],
    explanationChinese: "完整的照明检查包括所有外部灯光：近光和远光大灯、尾灯、制动灯、转向灯、危险闪光灯、倒车灯、侧示宽灯、如有配备的雾灯以及牌照灯。所有灯泡应功能正常，灯罩无损坏。",
  },
  {
    id: 195,
    q: "What information is found on an MSDS/SDS (Material Safety Data Sheet/Safety Data Sheet)?",
    options: [
      "A) Only the price of the product",
      "B) Chemical composition, health hazards, first aid measures, handling and storage procedures, and disposal information",
      "C) Only the product manufacturer's phone number",
      "D) Vehicle repair procedures"
    ],
    answer: 1,
    explanation: "SDS sheets provide critical safety information including chemical composition, physical properties, health hazards, exposure limits, first aid procedures, firefighting measures, handling and storage guidelines, and proper disposal methods. OSHA requires SDS sheets be available for all hazardous materials in the workplace.",
    diagram: "",
    terms: ["engine_oil", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Understanding Safety Data Sheets",
    qChinese: "MSDS/SDS（材料安全数据表/安全数据表）上有什么信息？",
    optionsChinese: [
      "A) 仅产品价格",
      "B) 化学成分、健康危害、急救措施、处理和储存程序以及处置信息",
      "C) 仅产品制造商的电话号码",
      "D) 车辆维修程序"
    ],
    explanationChinese: "SDS表提供关键安全信息，包括化学成分、物理性质、健康危害、暴露限值、急救程序、消防措施、处理和储存指南以及正确的处置方法。OSHA要求工作场所所有危险材料都必须有可用的SDS表。",
  },
  {
    id: 196,
    q: "What is the correct way to dispose of used coolant?",
    options: [
      "A) Pour it down the shop floor drain",
      "B) Collect it in a labeled approved container and dispose of it according to local environmental regulations",
      "C) Mix it with used oil for disposal",
      "D) Pour it on the ground outside the shop"
    ],
    answer: 1,
    explanation: "Used coolant must be collected in a labeled approved container and disposed of according to local environmental regulations. Coolant is toxic to animals and children due to its sweet taste. It should never be poured down drains or onto the ground. Many shops recycle coolant through authorized programs.",
    diagram: "",
    terms: ["coolant"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pqFZY6v6OQI",
    youtubeTitle: "Proper Coolant Disposal",
    qChinese: "处置废旧冷却液的正确方法是什么？",
    optionsChinese: [
      "A) 倒入车间地面排水沟",
      "B) 收集在标记的认可容器中，按照当地环保法规处置",
      "C) 与废机油混合处置",
      "D) 倒在车间外面的地上"
    ],
    explanationChinese: "废旧冷却液必须收集在标记的认可容器中，并按照当地环保法规处置。冷却液因其甜味对动物和儿童有毒。绝不应倒入排水沟或地面。许多车间通过授权项目回收冷却液。",
  },
  {
    id: 197,
    q: "A fire extinguisher in the shop should be what class for use on electrical fires?",
    options: [
      "A) Class A",
      "B) Class C or a multi-purpose ABC extinguisher",
      "C) Class D",
      "D) Class K"
    ],
    answer: 1,
    explanation: "Class C fire extinguishers are rated for electrical fires. Most automotive shops use multi-purpose ABC extinguishers that handle ordinary combustibles, flammable liquids, and electrical fires. Class D is for combustible metals and Class K is for commercial kitchen fires. Technicians should know extinguisher locations.",
    diagram: "",
    terms: ["battery"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Fire Extinguisher Types for Auto Shops",
    qChinese: "车间中用于电气火灾的灭火器应该是什么级别？",
    optionsChinese: [
      "A) A级",
      "B) C级或多功能ABC灭火器",
      "C) D级",
      "D) K级"
    ],
    explanationChinese: "C级灭火器适用于电气火灾。大多数汽车维修车间使用多功能ABC灭火器，可处理普通可燃物、可燃液体和电气火灾。D级用于可燃金属，K级用于商业厨房火灾。技师应知道灭火器的位置。",
  },
  {
    id: 198,
    q: "A technician needs to use a torque wrench. What type provides the MOST accurate reading for lug nut tightening?",
    options: [
      "A) A breaker bar",
      "B) A click-type or digital torque wrench",
      "C) An impact wrench",
      "D) A standard ratchet"
    ],
    answer: 1,
    explanation: "A click-type or digital torque wrench provides the most accurate torque reading for lug nut tightening. The click-type wrench clicks when the preset torque is reached. Digital models display the exact torque in real time. Impact wrenches should not be used for final torque as they are not precise enough.",
    diagram: "",
    terms: ["tire_rotation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tire_valve_stem.jpg/640px-Tire_valve_stem.jpg",
    youtube: "https://www.youtube.com/watch?v=NDqpgT5Yl1o",
    youtubeTitle: "How to Use a Torque Wrench",
    qChinese: "技师需要使用扭矩扳手。什么类型对车轮螺母拧紧提供最准确的读数？",
    optionsChinese: [
      "A) 断路杆",
      "B) 卡嗒型或数字式扭矩扳手",
      "C) 冲击扳手",
      "D) 标准棘轮扳手"
    ],
    explanationChinese: "卡嗒型或数字式扭矩扳手为车轮螺母拧紧提供最准确的扭矩读数。卡嗒型扳手在达到预设扭矩时发出咔嗒声。数字型号实时显示精确扭矩。冲击扳手不应用于最终扭矩，因为它们不够精确。",
  },
  {
    id: 199,
    q: "When performing a spark plug replacement, why is it important to use the correct gap specification?",
    options: [
      "A) To prevent the spark plug from falling out",
      "B) The correct gap ensures proper ignition of the air-fuel mixture for smooth engine operation",
      "C) To change the engine's compression ratio",
      "D) To reduce engine noise"
    ],
    answer: 1,
    explanation: "The spark plug gap must be set to the manufacturer's specification to ensure a proper spark for complete combustion. Too wide a gap may cause misfires, while too narrow a gap can cause weak ignition and poor performance. Always verify the gap with a feeler gauge before installation.",
    diagram: "",
    terms: ["spark_plug"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Spark Plug Gap and Replacement",
    qChinese: "进行火花塞更换时，为什么使用正确的间隙规格很重要？",
    optionsChinese: [
      "A) 防止火花塞脱落",
      "B) 正确的间隙确保空气-燃油混合物的正常点火，以实现平稳的发动机运行",
      "C) 改变发动机的压缩比",
      "D) 减少发动机噪音"
    ],
    explanationChinese: "火花塞间隙必须设置为制造商规格，以确保完全燃烧的正确火花。间隙太宽可能导致缺火，而太窄可能导致点火弱和性能差。安装前始终用塞规验证间隙。",
  },
  {
    id: 200,
    q: "During a multi-point inspection, the technician discovers multiple maintenance items are needed. What is the correct course of action?",
    options: [
      "A) Perform all repairs without notifying the customer",
      "B) Document all findings, prioritize safety items, and present a written estimate to the customer for authorization before performing any work",
      "C) Only mention the most expensive repair to the customer",
      "D) Ignore minor items and only address critical safety concerns"
    ],
    answer: 1,
    explanation: "The technician should document all findings clearly, prioritize safety-critical items, and present the customer with a written estimate for review and authorization. No work should be performed without customer approval. This builds trust, ensures informed consent, and complies with consumer protection regulations.",
    diagram: "",
    terms: ["engine_oil", "brake_pads", "tire_rotation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2015_Nissan_VQ35DE_engine.jpg/640px-2015_Nissan_VQ35DE_engine.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Multi-Point Inspection Best Practices",
    qChinese: "在多点检查期间，技师发现需要多项保养项目。正确的做法是什么？",
    optionsChinese: [
      "A) 不通知客户就执行所有维修",
      "B) 记录所有发现，优先处理安全项目，并在执行任何工作之前向客户提供书面估价以获得授权",
      "C) 仅向客户提及最昂贵的维修",
      "D) 忽略小项目，仅处理关键安全问题"
    ],
    explanationChinese: "技师应清楚地记录所有发现，优先处理安全关键项目，并向客户提供书面估价供审查和授权。未经客户批准不应执行任何工作。这建立信任，确保知情同意，并遵守消费者保护法规。",
  },
];
