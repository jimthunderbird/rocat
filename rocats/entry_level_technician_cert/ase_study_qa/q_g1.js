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
  }
];
