const questionsA7 = [
  // ============================================================
  // HVAC & ENGINE COOLING SERVICE (Questions 1–42)
  // ============================================================
  {
    id: 1,
    q: "A vehicle's A/C blows warm air intermittently. High-side pressure is normal, but low-side pressure fluctuates between 10 and 40 psi. What is the MOST likely cause?",
    options: [
      "A) Overcharged refrigerant system",
      "B) Moisture in the system causing the TXV to freeze intermittently",
      "C) A restricted condenser",
      "D) A slipping compressor drive belt"
    ],
    answer: 1,
    explanation: "Moisture in the refrigerant system can freeze at the TXV orifice, temporarily blocking refrigerant flow. As the ice melts, flow resumes, causing the characteristic fluctuation in low-side pressure and intermittent warm air from the vents. Evacuation and a new receiver/drier are required to remove moisture.",
    diagram: "",
    terms: ["txv", "refrigerant", "receiver_drier", "evaporator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "Thermal Expansion Valve Explained",
    qChinese: "一辆车的空调间歇性地吹出暖风。高压侧压力正常，但低压侧压力在10到40 psi之间波动。最可能的原因是什么？",
    optionsChinese: [
      "A) 制冷剂充注过量",
      "B) 系统中有水分导致热力膨胀阀间歇性结冰",
      "C) 冷凝器堵塞",
      "D) 压缩机驱动皮带打滑"
    ],
    explanationChinese: "制冷剂系统中的水分会在热力膨胀阀（TXV）的节流口处结冰，暂时阻断制冷剂流动。冰融化后流动恢复，导致低压侧压力特征性波动和出风口间歇性吹暖风。需要抽真空并更换储液干燥器以去除水分。"
  },
  {
    id: 2,
    q: "When performing a performance test on an A/C system, which set of readings indicates a properly functioning R-134a system at an ambient temperature of 90°F?",
    options: [
      "A) High side 225 psi, low side 35 psi, center vent 42°F",
      "B) High side 350 psi, low side 60 psi, center vent 65°F",
      "C) High side 100 psi, low side 10 psi, center vent 55°F",
      "D) High side 225 psi, low side 5 psi, center vent 60°F"
    ],
    answer: 0,
    explanation: "At 90°F ambient, a properly charged R-134a system typically shows high-side pressures around 200–250 psi, low-side pressures around 25–40 psi, and center vent temperatures around 38–48°F. Option A falls within these normal operating parameters for a healthy system.",
    diagram: "",
    terms: ["refrigerant", "compressor", "condenser", "evaporator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "How Car Air Conditioning Works",
    qChinese: "对空调系统进行性能测试时，在环境温度为90°F的条件下，哪组读数表示R-134a系统工作正常？",
    optionsChinese: [
      "A) 高压侧225 psi，低压侧35 psi，中央出风口42°F",
      "B) 高压侧350 psi，低压侧60 psi，中央出风口65°F",
      "C) 高压侧100 psi，低压侧10 psi，中央出风口55°F",
      "D) 高压侧225 psi，低压侧5 psi，中央出风口60°F"
    ],
    explanationChinese: "在90°F环境温度下，正常充注的R-134a系统通常显示高压侧压力约200-250 psi，低压侧压力约25-40 psi，中央出风口温度约38-48°F。选项A在这些正常工作参数范围内。"
  },
  {
    id: 3,
    q: "Technician A says R-1234yf is mildly flammable and requires a dedicated recovery machine. Technician B says R-1234yf can be recovered using the same machine as R-134a. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "R-1234yf is classified as mildly flammable (A2L rating) and must be serviced with a dedicated recovery/recycling/recharging machine that meets SAE J2843 standards. Using an R-134a machine for R-1234yf is not permitted due to contamination risk and safety concerns related to flammability.",
    diagram: "",
    terms: ["refrigerant", "compressor", "refrigerant_leak_detection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=_z1LchPP5GQ",
    youtubeTitle: "R-134a vs R-1234yf Refrigerant Explained",
    qChinese: "技师A说R-1234yf是微可燃的，需要专用的回收设备。技师B说R-1234yf可以使用与R-134a相同的设备进行回收。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "R-1234yf被归类为微可燃制冷剂（A2L等级），必须使用符合SAE J2843标准的专用回收/再生/充注设备进行维修。由于污染风险和可燃性安全问题，不允许使用R-134a设备处理R-1234yf。"
  },
  {
    id: 4,
    q: "During a leak test, an electronic refrigerant leak detector alarms near the evaporator case drain tube. What should the technician do NEXT?",
    options: [
      "A) Immediately replace the evaporator",
      "B) Add UV dye and recheck after running the system",
      "C) Verify the leak by using a secondary method such as UV dye or soap bubbles",
      "D) Recharge the system and retest in one week"
    ],
    answer: 2,
    explanation: "Electronic leak detectors can give false readings from residual refrigerant or contaminants. Best practice requires confirming any detected leak using a second method such as UV dye with a UV light or soap solution before committing to an expensive evaporator replacement.",
    diagram: "",
    terms: ["refrigerant_leak_detection", "evaporator", "refrigerant"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=_z1LchPP5GQ",
    youtubeTitle: "Refrigerant Leak Detection Methods",
    qChinese: "在泄漏测试期间，电子制冷剂泄漏检测仪在蒸发器壳体排水管附近报警。技师下一步应该怎么做？",
    optionsChinese: [
      "A) 立即更换蒸发器",
      "B) 添加荧光剂并在运行系统后重新检查",
      "C) 使用第二种方法（如荧光剂或肥皂泡）验证泄漏",
      "D) 给系统充注制冷剂并在一周后重新测试"
    ],
    explanationChinese: "电子泄漏检测仪可能因残留制冷剂或污染物而产生误报。最佳做法要求在进行昂贵的蒸发器更换之前，使用第二种方法（如荧光剂配合紫外灯或肥皂溶液）确认检测到的泄漏。"
  },
  {
    id: 5,
    q: "What is the MINIMUM vacuum level that should be achieved during evacuation of an A/C system before charging?",
    options: [
      "A) 20 inches of mercury (in. Hg)",
      "B) 25 inches of mercury (in. Hg)",
      "C) 29.92 inches of mercury (in. Hg)",
      "D) 500 microns or less"
    ],
    answer: 3,
    explanation: "The industry standard for proper evacuation is achieving a vacuum of 500 microns or less, as measured by a micron gauge. This level ensures that moisture is boiled off at low temperature and removed from the system. Inches of mercury alone is not precise enough.",
    diagram: "",
    terms: ["refrigerant", "receiver_drier", "compressor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=_z1LchPP5GQ",
    youtubeTitle: "R-134a vs R-1234yf Refrigerant Explained",
    qChinese: "在充注前对空调系统进行抽真空时，应达到的最低真空度是多少？",
    optionsChinese: [
      "A) 20英寸汞柱（in. Hg）",
      "B) 25英寸汞柱（in. Hg）",
      "C) 29.92英寸汞柱（in. Hg）",
      "D) 500微米或更低"
    ],
    explanationChinese: "行业标准要求达到500微米或更低的真空度（用微米计测量）才算正确抽真空。该真空度确保水分在低温下沸腾并从系统中排出。仅用英寸汞柱不够精确。"
  },
  {
    id: 6,
    q: "A technician is recovering refrigerant from a vehicle. Which of the following is required by EPA regulations?",
    options: [
      "A) Refrigerant must be vented to atmosphere if contaminated",
      "B) Refrigerant must be recovered to a DOT-approved container using certified equipment",
      "C) Only systems with more than 2 lbs of refrigerant need recovery",
      "D) Recovery is optional if the system has a leak"
    ],
    answer: 1,
    explanation: "EPA Section 608/609 regulations prohibit venting refrigerant to the atmosphere. All refrigerant must be recovered using certified equipment into DOT-approved containers regardless of quantity or system condition. Technicians must also hold a valid Section 609 certification.",
    diagram: "",
    terms: ["refrigerant", "compressor", "refrigerant_leak_detection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=_z1LchPP5GQ",
    youtubeTitle: "R-134a vs R-1234yf Refrigerant Explained",
    qChinese: "技师正在从车辆中回收制冷剂。以下哪项是EPA法规要求的？",
    optionsChinese: [
      "A) 如果制冷剂被污染，可以排放到大气中",
      "B) 制冷剂必须使用认证设备回收到DOT批准的容器中",
      "C) 只有制冷剂超过2磅的系统才需要回收",
      "D) 如果系统有泄漏，回收是可选的"
    ],
    explanationChinese: "EPA第608/609条法规禁止将制冷剂排放到大气中。无论数量或系统状况如何，所有制冷剂都必须使用认证设备回收到DOT批准的容器中。技师还必须持有有效的第609条认证。"
  },
  {
    id: 7,
    q: "Technician A says PAG oil is compatible with both R-134a and R-1234yf systems. Technician B says the specific PAG oil viscosity must match the compressor manufacturer's recommendation. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 1,
    explanation: "While PAG oil is used in both R-134a and R-1234yf systems, different formulations are required for each refrigerant type. R-1234yf uses a double-end-capped PAG oil. However, Technician B is correct that the specific viscosity (e.g., PAG 46, 100, 150) must always match the OEM specification.",
    diagram: "",
    terms: ["refrigerant", "compressor", "receiver_drier"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Compressor Operation Explained",
    qChinese: "技师A说PAG油与R-134a和R-1234yf系统都兼容。技师B说特定的PAG油粘度必须符合压缩机制造商的建议。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "虽然PAG油在R-134a和R-1234yf系统中都使用，但每种制冷剂类型需要不同的配方。R-1234yf使用双端封PAG油。然而，技师B是正确的，特定粘度（如PAG 46、100、150）必须始终符合OEM规格。"
  },
  {
    id: 8,
    q: "A cabin air filter is found to be heavily contaminated with debris and mold. All of the following are potential symptoms of a clogged cabin filter EXCEPT:",
    options: [
      "A) Reduced airflow from the vents",
      "B) Musty odor from the HVAC system",
      "C) Elevated high-side refrigerant pressure",
      "D) Fogging of the windshield"
    ],
    answer: 2,
    explanation: "A clogged cabin air filter restricts airflow through the evaporator, causing reduced vent output, musty odors, and poor windshield defogging. However, it does not significantly affect high-side refrigerant pressure since it restricts air across the evaporator, not the condenser.",
    diagram: "",
    terms: ["cabin_air_filter", "evaporator", "blower_motor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Blower Motor and Resistor Diagnosis",
    qChinese: "发现一个座舱空气滤清器被碎屑和霉菌严重污染。以下所有都是堵塞的座舱滤清器可能出现的症状，除了：",
    optionsChinese: [
      "A) 出风口气流减弱",
      "B) HVAC系统发出霉味",
      "C) 高压侧制冷剂压力升高",
      "D) 挡风玻璃起雾"
    ],
    explanationChinese: "堵塞的座舱空气滤清器限制了通过蒸发器的气流，导致出风口风量减小、霉味和挡风玻璃除雾效果差。但它不会显著影响高压侧制冷剂压力，因为它限制的是蒸发器的空气流通，而不是冷凝器。"
  },
  {
    id: 9,
    q: "A thermostat is stuck open. What symptoms will the vehicle exhibit?",
    options: [
      "A) Engine overheating and high coolant temperature",
      "B) Longer engine warm-up time and lower-than-normal operating temperature",
      "C) Coolant leaking from the thermostat housing",
      "D) Fluctuating oil pressure readings"
    ],
    answer: 1,
    explanation: "A thermostat stuck in the open position allows coolant to flow through the radiator continuously, preventing the engine from reaching normal operating temperature. This results in extended warm-up times, poor heater output, reduced fuel economy, and a possible check engine light for coolant temperature.",
    diagram: "",
    terms: ["thermostat", "radiator", "coolant_temperature_sensor", "heater_core"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "How Car Air Conditioning Works",
    qChinese: "恒温器卡在开启位置。车辆会出现什么症状？",
    optionsChinese: [
      "A) 发动机过热和冷却液温度过高",
      "B) 发动机预热时间延长，工作温度低于正常值",
      "C) 冷却液从恒温器壳体泄漏",
      "D) 机油压力读数波动"
    ],
    explanationChinese: "恒温器卡在开启位置会让冷却液持续流过散热器，阻止发动机达到正常工作温度。这导致预热时间延长、暖风输出不足、燃油经济性降低，以及可能因冷却液温度而亮起发动机故障灯。"
  },
  {
    id: 10,
    q: "A water pump is being inspected. Which of the following indicates the water pump needs replacement?",
    options: [
      "A) The weep hole shows a small amount of dry residue",
      "B) Coolant is actively dripping from the weep hole",
      "C) The serpentine belt is slightly glazed",
      "D) Coolant temperature reaches 195°F during normal operation"
    ],
    answer: 1,
    explanation: "Active coolant leakage from the water pump weep hole indicates a failed internal seal and requires pump replacement. A small amount of dry residue at the weep hole is normal seepage. The other options describe unrelated conditions that do not directly indicate water pump failure.",
    diagram: "",
    terms: ["water_pump", "coolant_flush", "serpentine_belt"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "How Car Air Conditioning Works",
    qChinese: "正在检查水泵。以下哪项表明水泵需要更换？",
    optionsChinese: [
      "A) 泄液孔显示少量干燥残留物",
      "B) 冷却液正从泄液孔积极滴漏",
      "C) 多楔皮带轻微釉化",
      "D) 冷却液温度在正常运行时达到195°F"
    ],
    explanationChinese: "从水泵泄液孔有冷却液积极泄漏表明内部密封失效，需要更换水泵。泄液孔处少量干燥残留物属于正常渗漏。其他选项描述的是与水泵故障无直接关系的情况。"
  },
  {
    id: 11,
    q: "When pressure testing a cooling system, the gauge shows a steady drop in pressure over two minutes with no visible external leaks. What is the MOST likely cause?",
    options: [
      "A) A faulty pressure cap",
      "B) An internal head gasket leak",
      "C) A loose hose clamp",
      "D) Air trapped in the cooling system"
    ],
    answer: 1,
    explanation: "A steady pressure drop with no visible external leaks strongly suggests an internal leak, most commonly through a failed head gasket allowing coolant to enter the combustion chamber or oil passages. A combustion leak test using block test fluid can confirm this diagnosis.",
    diagram: "",
    terms: ["head_gasket", "radiator", "coolant_flush", "cylinder_head"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "How Car Air Conditioning Works",
    qChinese: "对冷却系统进行压力测试时，压力表在两分钟内显示压力持续下降，但没有可见的外部泄漏。最可能的原因是什么？",
    optionsChinese: [
      "A) 压力盖故障",
      "B) 缸垫内部泄漏",
      "C) 软管卡箍松动",
      "D) 冷却系统中有空气"
    ],
    explanationChinese: "在没有可见外部泄漏的情况下压力持续下降，强烈提示存在内部泄漏，最常见的是缸垫损坏导致冷却液进入燃烧室或机油通道。可以使用废气检测液进行燃烧泄漏测试来确认诊断。"
  },
  {
    id: 12,
    q: "A radiator cap is rated at 16 psi. What is the purpose of the pressure rating?",
    options: [
      "A) To limit the maximum pressure the water pump can produce",
      "B) To raise the boiling point of the coolant",
      "C) To regulate refrigerant pressure in the A/C system",
      "D) To maintain negative pressure in the cooling system"
    ],
    answer: 1,
    explanation: "The radiator pressure cap raises the boiling point of the coolant by approximately 3°F for every 1 psi of pressure. A 16 psi cap raises the boiling point roughly 48°F above the normal atmospheric boiling point, preventing coolant from boiling during normal high-temperature engine operation.",
    diagram: "",
    terms: ["radiator", "coolant_flush", "thermostat"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "How Car Air Conditioning Works",
    qChinese: "散热器盖额定压力为16 psi。压力额定值的目的是什么？",
    optionsChinese: [
      "A) 限制水泵产生的最大压力",
      "B) 提高冷却液的沸点",
      "C) 调节空调系统中的制冷剂压力",
      "D) 维持冷却系统中的负压"
    ],
    explanationChinese: "散热器压力盖通过每1 psi压力使冷却液沸点大约升高3°F。16 psi的盖子使沸点在常压沸点基础上升高约48°F，防止冷却液在发动机正常高温运行期间沸腾。"
  },
  {
    id: 13,
    q: "A customer complains of poor heater output. The coolant level is full and the engine reaches normal operating temperature. What should the technician check FIRST?",
    options: [
      "A) The A/C compressor clutch engagement",
      "B) The heater core hoses for a temperature difference",
      "C) The radiator fan motor operation",
      "D) The condenser for airflow restrictions"
    ],
    answer: 1,
    explanation: "Feeling both heater core hoses for a temperature difference is a quick diagnostic step. If the inlet hose is hot and the outlet is cool or cold, the heater core may be restricted. If both hoses are equally hot, the issue is likely a blend door or airflow problem.",
    diagram: "",
    terms: ["heater_core", "blend_door", "thermostat", "coolant_flush"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "How Car Air Conditioning Works",
    qChinese: "客户抱怨暖风输出不足。冷却液液位正常，发动机达到正常工作温度。技师应首先检查什么？",
    optionsChinese: [
      "A) 空调压缩机离合器接合情况",
      "B) 暖风水箱软管的温差",
      "C) 散热器风扇电机运行情况",
      "D) 冷凝器是否有气流阻碍"
    ],
    explanationChinese: "触摸暖风水箱两根软管感受温差是快速诊断步骤。如果进水管很热而出水管凉或冷，暖风水箱可能堵塞。如果两根管温度一样热，问题可能是混合风门或气流方面的问题。"
  },
  {
    id: 14,
    q: "Technician A says a heater core can be flushed to restore flow if it is partially restricted. Technician B says a partially restricted heater core must always be replaced. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "A partially restricted heater core can often be flushed with water or a chemical flush to restore adequate coolant flow and heater output. Replacement is only necessary if flushing fails to restore proper flow or if the core is leaking. Flushing is a valid first repair attempt.",
    diagram: "",
    terms: ["heater_core", "coolant_flush", "radiator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "How Car Air Conditioning Works",
    qChinese: "技师A说如果暖风水箱部分堵塞，可以通过冲洗恢复流量。技师B说部分堵塞的暖风水箱必须始终更换。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "部分堵塞的暖风水箱通常可以用水或化学冲洗液冲洗以恢复足够的冷却液流量和暖风输出。只有当冲洗无法恢复正常流量或水箱泄漏时才需要更换。冲洗是有效的首选维修方法。"
  },
  {
    id: 15,
    q: "An electric cooling fan does not turn on and the engine overheats. All of the following could be the cause EXCEPT:",
    options: [
      "A) A faulty coolant temperature sensor",
      "B) A blown cooling fan relay",
      "C) A stuck-open thermostat",
      "D) A failed cooling fan motor"
    ],
    answer: 2,
    explanation: "A stuck-open thermostat causes the engine to run cooler than normal, not overheat. It would actually reduce the need for the cooling fan. A faulty temperature sensor, blown relay, or failed fan motor can all prevent the cooling fan from turning on, leading to engine overheating.",
    diagram: "",
    terms: ["thermostat", "coolant_temperature_sensor", "relay", "radiator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Condenser Function and Diagnosis",
    qChinese: "电动冷却风扇不转，发动机过热。以下所有都可能是原因，除了：",
    optionsChinese: [
      "A) 冷却液温度传感器故障",
      "B) 冷却风扇继电器烧毁",
      "C) 恒温器卡在开启位置",
      "D) 冷却风扇电机故障"
    ],
    explanationChinese: "恒温器卡在开启位置会导致发动机运行温度低于正常值，而不是过热。它实际上会减少对冷却风扇的需求。冷却液温度传感器故障、继电器烧毁或风扇电机故障都会阻止冷却风扇转动，导致发动机过热。"
  },
  {
    id: 16,
    q: "Which refrigerant identifier reading indicates a contaminated refrigerant sample?",
    options: [
      "A) 98% R-134a, 2% air",
      "B) 100% R-134a, 0% air",
      "C) 85% R-134a, 10% R-22, 5% air",
      "D) 99% R-134a, 1% air"
    ],
    answer: 2,
    explanation: "A refrigerant identifier showing multiple refrigerant types such as R-22 mixed with R-134a indicates contamination. Industry standards typically allow up to 2% air content as acceptable. The presence of R-22 or other non-approved refrigerants means the charge cannot be recovered into a standard tank.",
    diagram: "",
    terms: ["refrigerant", "refrigerant_leak_detection", "compressor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=_z1LchPP5GQ",
    youtubeTitle: "R-134a vs R-1234yf Refrigerant Explained",
    qChinese: "哪个制冷剂识别仪读数表明制冷剂样品被污染？",
    optionsChinese: [
      "A) 98% R-134a，2%空气",
      "B) 100% R-134a，0%空气",
      "C) 85% R-134a，10% R-22，5%空气",
      "D) 99% R-134a，1%空气"
    ],
    explanationChinese: "制冷剂识别仪显示多种制冷剂类型（如R-22与R-134a混合）表明存在污染。行业标准通常允许最高2%的空气含量。存在R-22或其他未经批准的制冷剂意味着不能将充注物回收到标准储罐中。"
  },
  {
    id: 17,
    q: "During A/C system charging, refrigerant is added as a vapor to which side of the system?",
    options: [
      "A) The high side only",
      "B) The low side only",
      "C) Both high and low sides simultaneously",
      "D) Through the receiver/drier"
    ],
    answer: 1,
    explanation: "When charging a running system, refrigerant must be added as a vapor through the low-side service port. Adding liquid refrigerant to the low side of a running system can cause liquid slugging and damage the compressor. Liquid charging is only done with the system off on the high side.",
    diagram: "",
    terms: ["refrigerant", "compressor", "receiver_drier"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=_z1LchPP5GQ",
    youtubeTitle: "R-134a vs R-1234yf Refrigerant Explained",
    qChinese: "在空调系统充注过程中，制冷剂以气态形式添加到系统的哪一侧？",
    optionsChinese: [
      "A) 仅高压侧",
      "B) 仅低压侧",
      "C) 同时从高压侧和低压侧",
      "D) 通过储液干燥器"
    ],
    explanationChinese: "在系统运行时充注，制冷剂必须以气态形式通过低压侧维修口添加。向运行中系统的低压侧添加液态制冷剂会导致液击并损坏压缩机。液态充注仅在系统关闭时从高压侧进行。"
  },
  {
    id: 18,
    q: "A vehicle has both high-side and low-side pressures that are higher than normal. What is the MOST likely cause?",
    options: [
      "A) An undercharged system",
      "B) An overcharged system or restricted airflow across the condenser",
      "C) A leaking evaporator",
      "D) A stuck-open TXV"
    ],
    answer: 1,
    explanation: "Both pressures reading higher than normal typically indicates either an overcharged refrigerant system or insufficient airflow across the condenser. Restricted condenser airflow or excess refrigerant prevents adequate heat rejection, raising pressures on both sides of the system throughout operation.",
    diagram: "",
    terms: ["refrigerant", "condenser", "compressor", "txv"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Condenser Function and Diagnosis",
    qChinese: "空调系统的高压侧和低压侧压力都高于正常值。最可能的原因是什么？",
    optionsChinese: [
      "A) 系统充注不足",
      "B) 系统充注过量或冷凝器气流受阻",
      "C) 蒸发器泄漏",
      "D) 热力膨胀阀卡在开启位置"
    ],
    explanationChinese: "高压侧和低压侧压力都高于正常值通常表明制冷剂充注过量或冷凝器气流不足。冷凝器气流受阻或制冷剂过多会阻碍充分散热，导致整个系统运行中两侧压力升高。"
  },
  {
    id: 19,
    q: "What type of oil is used in MOST R-134a mobile A/C systems?",
    options: [
      "A) Mineral oil",
      "B) Ester oil (POE)",
      "C) PAG (polyalkylene glycol) oil",
      "D) Synthetic motor oil"
    ],
    answer: 2,
    explanation: "PAG (polyalkylene glycol) oil is the most commonly specified lubricant for R-134a mobile A/C systems. It is hygroscopic and must be handled carefully to prevent moisture absorption. The correct viscosity (PAG 46, 100, or 150) must match the compressor manufacturer's specification.",
    diagram: "",
    terms: ["refrigerant", "compressor", "receiver_drier"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Compressor Operation Explained",
    qChinese: "大多数R-134a车载空调系统使用什么类型的润滑油？",
    optionsChinese: [
      "A) 矿物油",
      "B) 酯类油（POE）",
      "C) PAG（聚烯烃二醇）油",
      "D) 合成发动机油"
    ],
    explanationChinese: "PAG（聚烯烃二醇）油是R-134a车载空调系统最常用的润滑剂。它具有吸湿性，必须小心处理以防止吸收水分。正确的粘度（PAG 46、100或150）必须符合压缩机制造商的规格。"
  },
  {
    id: 20,
    q: "A technician is evacuating an A/C system. After reaching 500 microns, the vacuum pump is isolated and the system rises to 1500 microns within five minutes. What does this indicate?",
    options: [
      "A) The system has been properly evacuated",
      "B) Moisture remains in the system",
      "C) The vacuum pump is faulty",
      "D) The gauge set is defective"
    ],
    answer: 1,
    explanation: "When vacuum rises significantly after isolating the pump, it typically indicates residual moisture is boiling off and creating vapor pressure inside the system. The technician should continue evacuation until the system holds below 500 microns for at least five minutes after isolation.",
    diagram: "",
    terms: ["refrigerant", "receiver_drier", "compressor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=_z1LchPP5GQ",
    youtubeTitle: "R-134a vs R-1234yf Refrigerant Explained",
    qChinese: "技师正在对空调系统抽真空。达到500微米后，隔离真空泵，五分钟内系统升至1500微米。这表明什么？",
    optionsChinese: [
      "A) 系统已正确抽真空",
      "B) 系统中仍有水分",
      "C) 真空泵故障",
      "D) 压力表组有缺陷"
    ],
    explanationChinese: "隔离真空泵后真空度显著升高，通常表明残留水分正在沸腾并在系统内产生蒸汽压力。技师应继续抽真空，直到隔离后系统在五分钟内保持在500微米以下。"
  },
  {
    id: 21,
    q: "Which of the following tools is used to verify refrigerant purity before recovery?",
    options: [
      "A) A manifold gauge set",
      "B) A refrigerant identifier",
      "C) An electronic leak detector",
      "D) A micron gauge"
    ],
    answer: 1,
    explanation: "A refrigerant identifier analyzes a sample from the system and displays the percentage of each refrigerant type and air content. This confirms purity before recovery to prevent cross-contamination of the recovery machine and storage tank with unknown or mixed refrigerants.",
    diagram: "",
    terms: ["refrigerant", "refrigerant_leak_detection", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=_z1LchPP5GQ",
    youtubeTitle: "R-134a vs R-1234yf Refrigerant Explained",
    qChinese: "以下哪种工具用于在回收前验证制冷剂纯度？",
    optionsChinese: [
      "A) 歧管压力表组",
      "B) 制冷剂识别仪",
      "C) 电子泄漏检测仪",
      "D) 微米计"
    ],
    explanationChinese: "制冷剂识别仪分析系统中的样品并显示每种制冷剂类型和空气含量的百分比。这在回收前确认纯度，防止未知或混合的制冷剂污染回收设备和储罐。"
  },
  {
    id: 22,
    q: "Technician A says a coolant hydrometer measures the freezing point of the coolant mixture. Technician B says a refractometer is more accurate than a hydrometer for coolant testing. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "A hydrometer measures specific gravity of the coolant to determine the freezing point of the antifreeze mixture. A refractometer uses light refraction and is generally considered more accurate because it is not affected by coolant temperature. Both statements are correct.",
    diagram: "",
    terms: ["coolant_flush", "radiator", "thermostat"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "How Car Air Conditioning Works",
    qChinese: "技师A说冷却液比重计测量冷却液混合物的冰点。技师B说折射计比比重计更精确。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "比重计通过测量冷却液的比重来确定防冻液混合物的冰点。折射计利用光折射原理，通常被认为更精确，因为它不受冷却液温度影响。两种说法都是正确的。"
  },
  {
    id: 23,
    q: "When replacing a radiator, which of the following should also be inspected and replaced if necessary?",
    options: [
      "A) The serpentine belt tensioner",
      "B) The radiator hoses and clamps",
      "C) The engine oil filter",
      "D) The brake fluid reservoir"
    ],
    answer: 1,
    explanation: "When replacing a radiator, the upper and lower radiator hoses, clamps, and the radiator cap should be inspected and replaced if they show signs of deterioration such as swelling, cracking, or softness. Old hoses are a common source of leaks after radiator replacement.",
    diagram: "",
    terms: ["radiator", "coolant_flush", "water_pump", "thermostat"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "How Car Air Conditioning Works",
    qChinese: "更换散热器时，以下哪项也应检查并在必要时更换？",
    optionsChinese: [
      "A) 多楔皮带张紧器",
      "B) 散热器软管和卡箍",
      "C) 发动机机油滤清器",
      "D) 制动液储液壶"
    ],
    explanationChinese: "更换散热器时，应检查上下散热器软管、卡箍和散热器盖，如有膨胀、裂纹或软化等老化迹象则应更换。旧软管是散热器更换后常见的泄漏源。"
  },
  {
    id: 24,
    q: "A customer reports a sweet smell inside the vehicle and the windshield fogs up when the defroster is turned on. What is the MOST likely cause?",
    options: [
      "A) A leaking evaporator core",
      "B) A leaking heater core",
      "C) A clogged cabin air filter",
      "D) A stuck-open blend door"
    ],
    answer: 1,
    explanation: "A sweet smell (from ethylene glycol coolant) combined with windshield fogging when using the defroster is a classic symptom of a leaking heater core. Coolant vapor enters the passenger compartment through the HVAC ducts and deposits on the windshield glass.",
    diagram: "",
    terms: ["heater_core", "coolant_flush", "blend_door"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "How Car Air Conditioning Works",
    qChinese: "客户报告车内有甜味，打开除霜器时挡风玻璃起雾。最可能的原因是什么？",
    optionsChinese: [
      "A) 蒸发器芯泄漏",
      "B) 暖风水箱泄漏",
      "C) 座舱空气滤清器堵塞",
      "D) 混合风门卡在开启位置"
    ],
    explanationChinese: "甜味（来自乙二醇冷却液）加上使用除霜器时挡风玻璃起雾是暖风水箱泄漏的典型症状。冷却液蒸汽通过HVAC管道进入乘客舱并沉积在挡风玻璃上。"
  },
  {
    id: 25,
    q: "During a cooling system pressure test, the radiator cap fails to hold its rated pressure. What should the technician do?",
    options: [
      "A) Replace the radiator",
      "B) Replace the radiator cap",
      "C) Replace the water pump",
      "D) Flush the cooling system"
    ],
    answer: 1,
    explanation: "If the radiator cap cannot hold its rated pressure during a cap pressure test, it should be replaced. A cap that does not hold pressure allows the coolant boiling point to drop, potentially causing overheating and coolant loss through the overflow or degas bottle.",
    diagram: "",
    terms: ["radiator", "coolant_flush", "water_pump"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "How Car Air Conditioning Works",
    qChinese: "在冷却系统压力测试中，散热器盖无法保持其额定压力。技师应该怎么做？",
    optionsChinese: [
      "A) 更换散热器",
      "B) 更换散热器盖",
      "C) 更换水泵",
      "D) 冲洗冷却系统"
    ],
    explanationChinese: "如果散热器盖在压力测试中无法保持其额定压力，应更换。无法保持压力的盖子会使冷却液沸点降低，可能导致过热和通过溢流壶或脱气瓶的冷却液流失。"
  },
  {
    id: 26,
    q: "Which of the following describes the correct procedure for adding coolant to a system with an air bleed valve?",
    options: [
      "A) Fill the system, start the engine, and open the bleed valve until a steady stream of coolant flows with no air bubbles",
      "B) Open the bleed valve and pour coolant directly into it",
      "C) Fill the system with the bleed valve closed and never open it",
      "D) Add coolant only through the overflow reservoir"
    ],
    answer: 0,
    explanation: "The correct procedure is to fill the system through the radiator or degas bottle, then start the engine and open the bleed valve until a steady stream of coolant with no air bubbles emerges. This removes trapped air pockets that can cause overheating and poor heater output.",
    diagram: "",
    terms: ["coolant_flush", "radiator", "thermostat", "heater_core"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "How Car Air Conditioning Works",
    qChinese: "以下哪项描述了向带有排气阀的系统添加冷却液的正确程序？",
    optionsChinese: [
      "A) 加满系统，启动发动机，打开排气阀直到冷却液稳定流出且无气泡",
      "B) 打开排气阀并直接向其中倒入冷却液",
      "C) 在排气阀关闭的情况下加满系统，永不打开",
      "D) 仅通过溢流壶添加冷却液"
    ],
    explanationChinese: "正确的程序是通过散热器或脱气瓶加满系统，然后启动发动机并打开排气阀，直到冷却液稳定流出且无气泡。这可以排出可能导致过热和暖风输出不足的气阱。"
  },
  {
    id: 27,
    q: "Both high-side and low-side A/C pressures are lower than specifications. The compressor clutch is engaging. What is the MOST likely cause?",
    options: [
      "A) An overcharged system",
      "B) A low refrigerant charge due to a leak",
      "C) A restricted condenser",
      "D) A faulty compressor clutch"
    ],
    answer: 1,
    explanation: "When both high-side and low-side pressures are below normal with the compressor engaged, the system is most likely low on refrigerant due to a leak. Less refrigerant means less mass flow, resulting in reduced pressures throughout the entire system. A leak test should be performed.",
    diagram: "",
    terms: ["refrigerant", "compressor", "refrigerant_leak_detection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=_z1LchPP5GQ",
    youtubeTitle: "Refrigerant Leak Detection Methods",
    qChinese: "空调系统的高压侧和低压侧压力都低于规格值。压缩机离合器已接合。最可能的原因是什么？",
    optionsChinese: [
      "A) 系统充注过量",
      "B) 由于泄漏导致制冷剂不足",
      "C) 冷凝器堵塞",
      "D) 压缩机离合器故障"
    ],
    explanationChinese: "当压缩机接合时高压侧和低压侧压力都低于正常值，系统最可能因泄漏而制冷剂不足。较少的制冷剂意味着质量流量减少，导致整个系统压力降低。应进行泄漏测试。"
  },
  {
    id: 28,
    q: "A technician notices oil residue around an A/C hose fitting. What does this MOST likely indicate?",
    options: [
      "A) Normal condensation",
      "B) A refrigerant leak at the fitting",
      "C) Excess lubricant added during last service",
      "D) A clogged cabin air filter"
    ],
    answer: 1,
    explanation: "Refrigerant oil travels with the refrigerant throughout the system. When a leak occurs, refrigerant gas escapes and leaves behind oil residue at the leak point. Oil stains or accumulation at fittings, hose connections, or component joints are strong indicators of refrigerant leaks.",
    diagram: "",
    terms: ["refrigerant_leak_detection", "refrigerant", "compressor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=_z1LchPP5GQ",
    youtubeTitle: "Refrigerant Leak Detection Methods",
    qChinese: "技师注意到空调软管接头周围有油渍。这最可能表明什么？",
    optionsChinese: [
      "A) 正常冷凝",
      "B) 接头处制冷剂泄漏",
      "C) 上次维修时添加了过多润滑油",
      "D) 座舱空气滤清器堵塞"
    ],
    explanationChinese: "制冷剂油随制冷剂在整个系统中循环。当泄漏发生时，制冷剂气体逸出并在泄漏点留下油渍。接头、软管连接处或部件接合处的油污或积聚是制冷剂泄漏的有力指标。"
  },
  {
    id: 29,
    q: "What is the PRIMARY purpose of the receiver/drier in an A/C system using a TXV?",
    options: [
      "A) To meter refrigerant flow to the evaporator",
      "B) To store excess refrigerant and remove moisture from the liquid line",
      "C) To compress refrigerant vapor",
      "D) To separate oil from the refrigerant"
    ],
    answer: 1,
    explanation: "The receiver/drier is located in the high-pressure liquid line of TXV systems. Its primary functions are to store excess liquid refrigerant, remove moisture with a desiccant, filter contaminants, and ensure only liquid refrigerant reaches the TXV for proper metering and system operation.",
    diagram: "",
    terms: ["receiver_drier", "txv", "refrigerant", "condenser"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "Receiver Drier vs Accumulator Explained",
    qChinese: "在使用热力膨胀阀的空调系统中，储液干燥器的主要作用是什么？",
    optionsChinese: [
      "A) 计量流向蒸发器的制冷剂流量",
      "B) 储存多余的制冷剂并去除液管中的水分",
      "C) 压缩制冷剂蒸汽",
      "D) 将油从制冷剂中分离"
    ],
    explanationChinese: "储液干燥器位于TXV系统的高压液管中。其主要功能是储存多余的液态制冷剂、通过干燥剂去除水分、过滤污染物，并确保只有液态制冷剂到达TXV以实现正确的计量和系统运行。"
  },
  {
    id: 30,
    q: "A vehicle's engine temperature gauge reads higher than normal, and the upper radiator hose is collapsed. What is the MOST likely cause?",
    options: [
      "A) A faulty water pump impeller",
      "B) A stuck-closed thermostat",
      "C) A faulty radiator cap vacuum valve",
      "D) An overcharged A/C system"
    ],
    answer: 2,
    explanation: "A collapsed upper radiator hose during cool-down indicates the radiator cap vacuum valve is not releasing to equalize pressure. This prevents coolant from returning from the overflow tank, creating a vacuum that collapses the hose. The cap should be replaced.",
    diagram: "",
    terms: ["radiator", "thermostat", "water_pump", "coolant_temperature_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "How Car Air Conditioning Works",
    qChinese: "车辆的发动机温度表读数高于正常值，上散热器软管塌陷。最可能的原因是什么？",
    optionsChinese: [
      "A) 水泵叶轮故障",
      "B) 恒温器卡在关闭位置",
      "C) 散热器盖真空阀故障",
      "D) 空调系统充注过量"
    ],
    explanationChinese: "冷却过程中上散热器软管塌陷表明散热器盖真空阀未释放以平衡压力。这阻止冷却液从溢流壶返回，产生负压使软管塌陷。应更换散热器盖。"
  },
  {
    id: 31,
    q: "Technician A says the A/C system should be leak tested before evacuation. Technician B says evacuation alone will reveal all leaks. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "The system should be leak tested under positive pressure before evacuation. A vacuum test during evacuation can indicate a gross leak but cannot reliably locate small leaks. Pressurized leak testing with nitrogen or refrigerant and an electronic detector is the correct procedure.",
    diagram: "",
    terms: ["refrigerant_leak_detection", "refrigerant", "compressor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=_z1LchPP5GQ",
    youtubeTitle: "Refrigerant Leak Detection Methods",
    qChinese: "技师A说空调系统应在抽真空前进行泄漏测试。技师B说仅靠抽真空就能发现所有泄漏。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "系统应在抽真空前在正压下进行泄漏测试。抽真空期间的真空测试可以指示大泄漏，但不能可靠地定位小泄漏。使用氮气或制冷剂加压并配合电子检测仪进行泄漏测试是正确的程序。"
  },
  {
    id: 32,
    q: "Which coolant color is typically associated with OAT (Organic Acid Technology) extended-life coolant?",
    options: [
      "A) Green",
      "B) Orange or red",
      "C) Blue",
      "D) Clear"
    ],
    answer: 1,
    explanation: "OAT (Organic Acid Technology) extended-life coolants are typically dyed orange or red (such as Dex-Cool). Traditional IAT (Inorganic Acid Technology) coolants are usually green. Color alone should not be the sole identifier; always refer to the manufacturer's specification.",
    diagram: "",
    terms: ["coolant_flush", "radiator", "thermostat"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "How Car Air Conditioning Works",
    qChinese: "哪种冷却液颜色通常与OAT（有机酸技术）长效冷却液相关？",
    optionsChinese: [
      "A) 绿色",
      "B) 橙色或红色",
      "C) 蓝色",
      "D) 无色透明"
    ],
    explanationChinese: "OAT（有机酸技术）长效冷却液通常染成橙色或红色（如Dex-Cool）。传统的IAT（无机酸技术）冷却液通常为绿色。仅凭颜色不应作为唯一标识；始终参考制造商规格。"
  },
  {
    id: 33,
    q: "A customer complains that the A/C works well at highway speed but blows warm at idle. What is the MOST likely cause?",
    options: [
      "A) Low refrigerant charge",
      "B) The condenser fan is not operating",
      "C) The evaporator is restricted",
      "D) The cabin air filter is clogged"
    ],
    answer: 1,
    explanation: "At highway speed, ram air through the condenser provides adequate cooling. At idle, the condenser fan must operate to provide airflow. If the condenser fan is inoperative, high-side pressure rises excessively at idle, reducing system efficiency and causing warm air output.",
    diagram: "",
    terms: ["condenser", "compressor", "relay", "refrigerant"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Condenser Function and Diagnosis",
    qChinese: "客户抱怨空调在高速行驶时制冷良好，但在怠速时吹暖风。最可能的原因是什么？",
    optionsChinese: [
      "A) 制冷剂不足",
      "B) 冷凝器风扇未运行",
      "C) 蒸发器堵塞",
      "D) 座舱空气滤清器堵塞"
    ],
    explanationChinese: "在高速行驶时，迎面气流为冷凝器提供足够的冷却。在怠速时，冷凝器风扇必须运行以提供气流。如果冷凝器风扇不工作，怠速时高压侧压力过度升高，降低系统效率，导致吹暖风。"
  },
  {
    id: 34,
    q: "What precaution must be taken when charging an A/C system with a scale?",
    options: [
      "A) Always charge by high-side pressure only",
      "B) Charge the exact amount specified by the manufacturer",
      "C) Add refrigerant until frost forms on the accumulator",
      "D) Charge until both high and low pressures equalize"
    ],
    answer: 1,
    explanation: "Modern A/C systems hold precise amounts of refrigerant. Overcharging or undercharging as little as a few ounces can significantly affect performance and compressor life. Always charge the exact amount specified on the underhood label or in the service manual using a calibrated scale.",
    diagram: "",
    terms: ["refrigerant", "compressor", "accumulator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=_z1LchPP5GQ",
    youtubeTitle: "R-134a vs R-1234yf Refrigerant Explained",
    qChinese: "使用电子秤充注空调系统时必须注意什么？",
    optionsChinese: [
      "A) 始终仅根据高压侧压力充注",
      "B) 按制造商规定的准确量充注",
      "C) 添加制冷剂直到储液器上结霜",
      "D) 充注直到高压侧和低压侧压力平衡"
    ],
    explanationChinese: "现代空调系统需要精确的制冷剂充注量。过多或过少几盎司都会显著影响性能和压缩机寿命。始终使用校准的电子秤按照机舱标签或维修手册上规定的确切量进行充注。"
  },
  {
    id: 35,
    q: "During an A/C performance test, the low-side pressure is near vacuum and the high-side pressure is lower than normal. What is the MOST likely cause?",
    options: [
      "A) Overcharged system",
      "B) Restricted orifice tube or TXV",
      "C) Faulty condenser fan",
      "D) Leaking compressor reed valves"
    ],
    answer: 1,
    explanation: "A restriction at the metering device (orifice tube or TXV) severely limits refrigerant flow to the evaporator. This causes the low side to pull into a vacuum while starving the suction side. The high side may read lower than normal due to reduced mass flow through the system.",
    diagram: "",
    terms: ["txv", "evaporator", "compressor", "refrigerant"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "Thermal Expansion Valve Explained",
    qChinese: "在空调性能测试中，低压侧压力接近真空，高压侧压力低于正常值。最可能的原因是什么？",
    optionsChinese: [
      "A) 系统充注过量",
      "B) 节流管或热力膨胀阀堵塞",
      "C) 冷凝器风扇故障",
      "D) 压缩机阀片泄漏"
    ],
    explanationChinese: "计量装置（节流管或TXV）处的堵塞严重限制了流向蒸发器的制冷剂流量。这导致低压侧被抽至真空状态，同时使吸入侧缺乏制冷剂。由于整个系统的质量流量减少，高压侧可能读数低于正常值。"
  },
  {
    id: 36,
    q: "Technician A says the cooling system should be flushed when changing from one coolant type to another. Technician B says different coolant types can be mixed without issue. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Mixing different coolant types (IAT, OAT, HOAT) can cause chemical incompatibilities that lead to gelling, reduced corrosion protection, and cooling system component damage. The system should be thoroughly flushed when switching coolant types to remove all traces of the previous coolant.",
    diagram: "",
    terms: ["coolant_flush", "radiator", "water_pump", "thermostat"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "How Car Air Conditioning Works",
    qChinese: "技师A说从一种冷却液类型更换为另一种时应冲洗冷却系统。技师B说不同类型的冷却液可以混合使用而没有问题。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "混合不同类型的冷却液（IAT、OAT、HOAT）会导致化学不兼容，引起凝胶化、防腐保护降低和冷却系统部件损坏。更换冷却液类型时应彻底冲洗系统以去除所有残留的旧冷却液。"
  },
  {
    id: 37,
    q: "What is the function of the coolant degas bottle (expansion tank)?",
    options: [
      "A) To pressurize the cooling system beyond the cap rating",
      "B) To provide a reservoir for coolant expansion, contraction, and air separation",
      "C) To filter contaminants from the coolant",
      "D) To cool the coolant before it returns to the engine"
    ],
    answer: 1,
    explanation: "The degas bottle (expansion tank) serves as a reservoir for coolant that expands when hot and contracts when cooled. It also helps separate air from the coolant through its design. The pressurized cap is typically located on the degas bottle in modern vehicles.",
    diagram: "",
    terms: ["radiator", "coolant_flush", "thermostat"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "How Car Air Conditioning Works",
    qChinese: "冷却液脱气瓶（膨胀箱）的功能是什么？",
    optionsChinese: [
      "A) 将冷却系统加压至超过盖子额定值",
      "B) 为冷却液膨胀、收缩和空气分离提供储液壶",
      "C) 过滤冷却液中的污染物",
      "D) 在冷却液返回发动机前冷却它"
    ],
    explanationChinese: "脱气瓶（膨胀箱）作为冷却液热膨胀和冷却收缩的储液壶。它还通过其设计帮助从冷却液中分离空气。在现代车辆中，加压盖通常位于脱气瓶上。"
  },
  {
    id: 38,
    q: "A vehicle with a serpentine belt-driven water pump has a coolant leak near the front of the engine. The belt is soaked with coolant. What component is MOST likely leaking?",
    options: [
      "A) The heater core",
      "B) The water pump seal",
      "C) The radiator",
      "D) The intake manifold gasket"
    ],
    answer: 1,
    explanation: "A coolant leak near the front of the engine that is soaking the serpentine belt is most likely coming from the water pump shaft seal or weep hole. The water pump is driven by the belt and is located at the front of the engine where the belt runs.",
    diagram: "",
    terms: ["water_pump", "serpentine_belt", "radiator", "coolant_flush"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "How Car Air Conditioning Works",
    qChinese: "一辆由多楔皮带驱动水泵的车辆在发动机前部附近有冷却液泄漏。皮带被冷却液浸湿。最可能泄漏的部件是什么？",
    optionsChinese: [
      "A) 暖风水箱",
      "B) 水泵密封",
      "C) 散热器",
      "D) 进气歧管垫片"
    ],
    explanationChinese: "发动机前部附近浸湿多楔皮带的冷却液泄漏最可能来自水泵轴密封或泄液孔。水泵由皮带驱动，位于皮带运行的发动机前部。"
  },
  {
    id: 39,
    q: "Which of the following is the correct refrigerant charge label location on most vehicles?",
    options: [
      "A) Inside the glove box",
      "B) On the underhood service information label or sticker",
      "C) On the rear bumper",
      "D) Inside the trunk"
    ],
    answer: 1,
    explanation: "The refrigerant type, charge amount, and lubricant type are specified on the underhood service information label. This label is typically found on the radiator support, strut tower, or underside of the hood. Always refer to this label before servicing the A/C system.",
    diagram: "",
    terms: ["refrigerant", "compressor", "multipoint_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=_z1LchPP5GQ",
    youtubeTitle: "R-134a vs R-1234yf Refrigerant Explained",
    qChinese: "大多数车辆上制冷剂充注标签的正确位置在哪里？",
    optionsChinese: [
      "A) 手套箱内",
      "B) 机舱维修信息标签或贴纸上",
      "C) 后保险杠上",
      "D) 行李箱内"
    ],
    explanationChinese: "制冷剂类型、充注量和润滑油类型在机舱维修信息标签上标明。该标签通常位于散热器支架、减震塔或引擎盖内侧。在维修空调系统前应始终参考此标签。"
  },
  {
    id: 40,
    q: "A cooling system shows evidence of combustion gases in the coolant. Which test confirms a head gasket leak?",
    options: [
      "A) A pressure cap test",
      "B) A block test (chemical combustion leak test)",
      "C) A coolant hydrometer test",
      "D) An infrared thermometer scan of the radiator"
    ],
    answer: 1,
    explanation: "A block test (combustion leak test) uses a chemical fluid that changes color when exposed to combustion gases (hydrocarbons) in the coolant. The test fluid is drawn through a tester placed over the radiator filler neck while the engine runs, confirming a head gasket leak.",
    diagram: "",
    terms: ["head_gasket", "cylinder_head", "radiator", "coolant_flush"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "How Car Air Conditioning Works",
    qChinese: "冷却系统显示冷却液中有燃烧气体的迹象。哪种测试可以确认缸垫泄漏？",
    optionsChinese: [
      "A) 压力盖测试",
      "B) 废气检测（化学燃烧泄漏测试）",
      "C) 冷却液比重计测试",
      "D) 红外温度计扫描散热器"
    ],
    explanationChinese: "废气检测（燃烧泄漏测试）使用一种化学液体，当暴露于冷却液中的燃烧气体（碳氢化合物）时会变色。在发动机运行时，将测试液通过放置在散热器加注口上的检测器吸取，可确认缸垫泄漏。"
  },
  {
    id: 41,
    q: "All of the following are symptoms of a restricted A/C system EXCEPT:",
    options: [
      "A) Frost forming on the liquid line after the restriction",
      "B) Low-side pressure near vacuum",
      "C) Higher than normal high-side pressure",
      "D) Poor cooling performance"
    ],
    answer: 2,
    explanation: "A restriction reduces refrigerant mass flow throughout the system. The low side pulls into a vacuum due to starvation, frost may form at the restriction point, and cooling performance suffers. However, high-side pressure typically drops because reduced mass flow means less refrigerant is being compressed.",
    diagram: "",
    terms: ["refrigerant", "txv", "compressor", "evaporator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "Thermal Expansion Valve Explained",
    qChinese: "以下所有都是空调系统堵塞的症状，除了：",
    optionsChinese: [
      "A) 堵塞点之后的液管上结霜",
      "B) 低压侧压力接近真空",
      "C) 高压侧压力高于正常值",
      "D) 制冷性能差"
    ],
    explanationChinese: "堵塞减少了整个系统的制冷剂质量流量。低压侧因缺乏制冷剂而被抽至真空，堵塞点可能结霜，制冷性能下降。然而，高压侧压力通常会下降，因为质量流量减少意味着被压缩的制冷剂更少。"
  },
  {
    id: 42,
    q: "Before opening any A/C system fitting for repair, what must the technician do FIRST?",
    options: [
      "A) Add UV dye to the system",
      "B) Recover all refrigerant from the system",
      "C) Disconnect the battery",
      "D) Remove the drive belt"
    ],
    answer: 1,
    explanation: "Before opening any A/C system fitting or component for repair, all refrigerant must be properly recovered using certified equipment into an approved container. Releasing refrigerant into the atmosphere is illegal under EPA regulations and subject to significant fines.",
    diagram: "",
    terms: ["refrigerant", "compressor", "refrigerant_leak_detection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=_z1LchPP5GQ",
    youtubeTitle: "R-134a vs R-1234yf Refrigerant Explained",
    qChinese: "在打开任何空调系统接头进行维修之前，技师首先必须做什么？",
    optionsChinese: [
      "A) 向系统中添加荧光剂",
      "B) 从系统中回收所有制冷剂",
      "C) 断开蓄电池",
      "D) 拆下驱动皮带"
    ],
    explanationChinese: "在打开任何空调系统接头或部件进行维修之前，必须使用认证设备将所有制冷剂正确回收到批准的容器中。根据EPA法规，将制冷剂释放到大气中是违法的，可能面临重大罚款。"
  },

  // ============================================================
  // REFRIGERATION SYSTEM COMPONENTS (Questions 43–62)
  // ============================================================
  {
    id: 43,
    q: "Which type of A/C compressor uses a wobble plate to vary displacement based on system demand?",
    options: [
      "A) Scroll compressor",
      "B) Variable displacement compressor",
      "C) Rotary vane compressor",
      "D) Reciprocating fixed displacement compressor"
    ],
    answer: 1,
    explanation: "A variable displacement compressor uses a wobble plate (swash plate) whose angle changes based on suction pressure to vary piston stroke and displacement. This eliminates the need for compressor clutch cycling and provides continuous, demand-based cooling output for smoother operation.",
    diagram: "",
    terms: ["compressor", "refrigerant", "evaporator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Compressor Operation Explained",
    qChinese: "哪种类型的空调压缩机使用摆盘根据系统需求改变排量？",
    optionsChinese: [
      "A) 涡旋压缩机",
      "B) 可变排量压缩机",
      "C) 旋转叶片式压缩机",
      "D) 往复式固定排量压缩机"
    ],
    explanationChinese: "可变排量压缩机使用摆盘（斜盘），其角度根据吸入压力变化来改变活塞行程和排量。这消除了压缩机离合器循环的需要，并提供连续的、按需制冷输出，使运行更平稳。"
  },
  {
    id: 44,
    q: "A compressor clutch is not engaging. Battery voltage is present at the clutch connector. What is the MOST likely cause?",
    options: [
      "A) A faulty clutch relay",
      "B) An open clutch coil",
      "C) A blown fuse",
      "D) A low refrigerant pressure switch"
    ],
    answer: 1,
    explanation: "If battery voltage is present at the clutch connector but the clutch does not engage, the compressor clutch coil itself is likely open (failed). The relay, fuse, and pressure switch are all upstream in the circuit and would prevent voltage from reaching the connector if they were faulty.",
    diagram: "",
    terms: ["compressor", "relay", "fuse", "dmm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Compressor Operation Explained",
    qChinese: "压缩机离合器未接合。离合器连接器处有蓄电池电压。最可能的原因是什么？",
    optionsChinese: [
      "A) 离合器继电器故障",
      "B) 离合器线圈断路",
      "C) 保险丝烧断",
      "D) 低压制冷剂压力开关"
    ],
    explanationChinese: "如果离合器连接器处有蓄电池电压但离合器未接合，压缩机离合器线圈本身可能断路（失效）。继电器、保险丝和压力开关都在电路上游，如果它们故障会阻止电压到达连接器。"
  },
  {
    id: 45,
    q: "What is the function of the A/C compressor clutch air gap?",
    options: [
      "A) To cool the compressor clutch assembly",
      "B) To allow the clutch plate to disengage from the pulley when deenergized",
      "C) To reduce belt wear",
      "D) To prevent refrigerant leaks from the compressor shaft seal"
    ],
    answer: 1,
    explanation: "The air gap between the clutch friction plate and the pulley allows the plate to separate from the spinning pulley when the electromagnetic coil is deenergized. The air gap must be within specification; too large a gap causes slipping, while too small a gap prevents disengagement.",
    diagram: "",
    terms: ["compressor", "serpentine_belt", "relay"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Compressor Operation Explained",
    qChinese: "空调压缩机离合器间隙的功能是什么？",
    optionsChinese: [
      "A) 冷却压缩机离合器总成",
      "B) 允许离合器片在断电时与皮带轮分离",
      "C) 减少皮带磨损",
      "D) 防止制冷剂从压缩机轴封泄漏"
    ],
    explanationChinese: "离合器摩擦片和皮带轮之间的间隙使摩擦片在电磁线圈断电时能与旋转的皮带轮分离。间隙必须在规格范围内；间隙过大导致打滑，间隙过小则无法分离。"
  },
  {
    id: 46,
    q: "Technician A says a serpentine belt should be inspected for cracks on the rib side. Technician B says a belt with more than three cracks per inch should be replaced. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Serpentine belts should be inspected for cracking, fraying, chunking, and glazing on the rib side. A belt with more than three cracks per inch of rib length or any missing chunks should be replaced to prevent unexpected belt failure.",
    diagram: "",
    terms: ["serpentine_belt", "compressor", "water_pump", "multipoint_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Compressor Operation Explained",
    qChinese: "技师A说应检查多楔皮带肋侧是否有裂纹。技师B说每英寸超过三条裂纹的皮带应更换。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都是正确的。多楔皮带应检查肋侧是否有裂纹、磨损、脱落和釉化。每英寸肋长超过三条裂纹或有任何缺失块的皮带应更换，以防止意外皮带断裂。"
  },
  {
    id: 47,
    q: "Which device protects the A/C compressor from damage due to low refrigerant charge?",
    options: [
      "A) The high-pressure relief valve",
      "B) The low-pressure cutoff switch",
      "C) The orifice tube",
      "D) The thermal fuse on the compressor"
    ],
    answer: 1,
    explanation: "The low-pressure cutoff switch (cycling switch or pressure transducer) disengages the compressor clutch when suction pressure drops too low, indicating insufficient refrigerant. Running the compressor without adequate refrigerant starves it of lubricant oil, causing rapid internal damage.",
    diagram: "",
    terms: ["compressor", "refrigerant", "relay", "refrigerant_leak_detection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Compressor Operation Explained",
    qChinese: "哪个装置保护空调压缩机免受低制冷剂充注量造成的损坏？",
    optionsChinese: [
      "A) 高压释放阀",
      "B) 低压切断开关",
      "C) 节流管",
      "D) 压缩机上的热熔断器"
    ],
    explanationChinese: "低压切断开关（循环开关或压力传感器）在吸入压力过低时断开压缩机离合器，表明制冷剂不足。在没有足够制冷剂的情况下运行压缩机会使其缺乏润滑油，导致内部快速损坏。"
  },
  {
    id: 48,
    q: "What is the PRIMARY function of the evaporator in an A/C system?",
    options: [
      "A) To compress refrigerant vapor into high-pressure gas",
      "B) To absorb heat from the passenger compartment air",
      "C) To reject heat to the outside ambient air",
      "D) To store liquid refrigerant"
    ],
    answer: 1,
    explanation: "The evaporator absorbs heat from the air passing through the HVAC case. Low-pressure liquid refrigerant entering the evaporator absorbs heat and changes state from liquid to vapor (boils). This heat absorption cools and dehumidifies the air blown across the evaporator fins.",
    diagram: "",
    terms: ["evaporator", "refrigerant", "blower_motor", "txv"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "Evaporator Core Function and Problems",
    qChinese: "蒸发器在空调系统中的主要功能是什么？",
    optionsChinese: [
      "A) 将制冷剂蒸汽压缩成高压气体",
      "B) 从乘客舱空气中吸收热量",
      "C) 将热量排放到外部环境空气中",
      "D) 储存液态制冷剂"
    ],
    explanationChinese: "蒸发器从通过HVAC箱体的空气中吸收热量。进入蒸发器的低压液态制冷剂吸收热量并从液态变为气态（沸腾）。这种热量吸收冷却并除湿了吹过蒸发器翅片的空气。"
  },
  {
    id: 49,
    q: "A condenser is found to have bent fins covering approximately 30% of its surface area. What effect does this have on A/C performance?",
    options: [
      "A) No effect on system operation",
      "B) Reduced heat rejection causing higher high-side pressures and poor cooling",
      "C) Increased cooling efficiency",
      "D) Lower than normal low-side pressures"
    ],
    answer: 1,
    explanation: "Bent or blocked condenser fins significantly restrict airflow through the condenser, reducing its ability to reject heat. This causes elevated high-side pressures, reduced subcooling, and degraded overall cooling performance. A fin comb can straighten bent fins to restore proper airflow.",
    diagram: "",
    terms: ["condenser", "subcooling", "refrigerant", "compressor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Condenser Function and Diagnosis",
    qChinese: "发现冷凝器翅片约30%的表面积被弯曲。这对空调性能有什么影响？",
    optionsChinese: [
      "A) 对系统运行没有影响",
      "B) 散热减少导致高压侧压力升高和制冷效果差",
      "C) 制冷效率提高",
      "D) 低压侧压力低于正常值"
    ],
    explanationChinese: "弯曲或堵塞的冷凝器翅片严重限制了通过冷凝器的气流，降低了其散热能力。这导致高压侧压力升高、过冷度降低以及整体制冷性能下降。可以使用翅片梳恢复翅片以恢复正常气流。"
  },
  {
    id: 50,
    q: "When should the receiver/drier be replaced?",
    options: [
      "A) Only when the refrigerant is contaminated",
      "B) Whenever the system has been open to atmosphere for service",
      "C) Every oil change interval",
      "D) Only when a leak is detected"
    ],
    answer: 1,
    explanation: "The receiver/drier contains desiccant that absorbs moisture. Whenever the system is opened to atmosphere for repair, the desiccant becomes saturated with ambient moisture and loses its effectiveness. The receiver/drier must be replaced to ensure moisture-free operation after reassembly.",
    diagram: "",
    terms: ["receiver_drier", "refrigerant", "txv", "condenser"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "Receiver Drier vs Accumulator Explained",
    qChinese: "储液干燥器应在何时更换？",
    optionsChinese: [
      "A) 仅在制冷剂被污染时",
      "B) 每当系统打开暴露在大气中进行维修时",
      "C) 每次换机油时",
      "D) 仅在检测到泄漏时"
    ],
    explanationChinese: "储液干燥器含有吸收水分的干燥剂。每当系统打开暴露在大气中进行维修时，干燥剂会被环境湿气饱和并失去效力。重新组装后必须更换储液干燥器以确保无水分运行。"
  },
  {
    id: 51,
    q: "What component is found on the low side of an orifice tube system but not on a TXV system?",
    options: [
      "A) A receiver/drier",
      "B) An accumulator",
      "C) A condenser",
      "D) A compressor"
    ],
    answer: 1,
    explanation: "An accumulator is located between the evaporator outlet and compressor inlet in orifice tube systems. It stores excess liquid refrigerant, prevents liquid slugging of the compressor, contains desiccant to remove moisture, and meters oil return to the compressor. TXV systems use a receiver/drier instead.",
    diagram: "",
    terms: ["accumulator", "compressor", "evaporator", "receiver_drier"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "Receiver Drier vs Accumulator Explained",
    qChinese: "在节流管系统中存在但在TXV系统中不存在的低压侧部件是什么？",
    optionsChinese: [
      "A) 储液干燥器",
      "B) 储液器",
      "C) 冷凝器",
      "D) 压缩机"
    ],
    explanationChinese: "储液器位于节流管系统中蒸发器出口和压缩机入口之间。它储存多余的液态制冷剂、防止液击损坏压缩机、含有干燥剂去除水分，并计量润滑油回流到压缩机。TXV系统使用储液干燥器代替。"
  },
  {
    id: 52,
    q: "A TXV (thermostatic expansion valve) regulates refrigerant flow based on which of the following?",
    options: [
      "A) High-side pressure only",
      "B) Evaporator outlet temperature (superheat)",
      "C) Ambient air temperature",
      "D) Engine RPM"
    ],
    answer: 1,
    explanation: "The TXV regulates refrigerant flow by sensing evaporator outlet temperature through a sensing bulb and capillary tube. It maintains proper superheat at the evaporator outlet by modulating the valve opening, ensuring the evaporator operates at peak efficiency without flooding the compressor.",
    diagram: "",
    terms: ["txv", "superheat", "evaporator", "refrigerant"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "Thermal Expansion Valve Explained",
    qChinese: "热力膨胀阀（TXV）根据以下哪项调节制冷剂流量？",
    optionsChinese: [
      "A) 仅高压侧压力",
      "B) 蒸发器出口温度（过热度）",
      "C) 环境空气温度",
      "D) 发动机转速"
    ],
    explanationChinese: "TXV通过感温包和毛细管感应蒸发器出口温度来调节制冷剂流量。它通过调节阀门开度维持蒸发器出口适当的过热度，确保蒸发器以最佳效率运行而不会淹没压缩机。"
  },
  {
    id: 53,
    q: "Technician A says a fixed orifice tube is a simple metering device with no moving parts. Technician B says the orifice tube is located between the condenser outlet and evaporator inlet. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "A fixed orifice tube is a simple calibrated restriction with a fine mesh screen and no moving parts. It is located in the liquid line between the condenser outlet and evaporator inlet, where it meters high-pressure liquid refrigerant into the low-pressure evaporator.",
    diagram: "",
    terms: ["condenser", "evaporator", "refrigerant", "accumulator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "Thermal Expansion Valve Explained",
    qChinese: "技师A说固定节流管是没有活动部件的简单计量装置。技师B说节流管位于冷凝器出口和蒸发器入口之间。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "固定节流管是一种带有细网筛且没有活动部件的简单校准节流装置。它位于冷凝器出口和蒸发器入口之间的液管中，将高压液态制冷剂计量进入低压蒸发器。"
  },
  {
    id: 54,
    q: "What is the purpose of the high-pressure relief valve on an A/C compressor?",
    options: [
      "A) To regulate normal operating pressure",
      "B) To vent refrigerant if system pressure exceeds a dangerous level",
      "C) To meter refrigerant to the evaporator",
      "D) To prevent low-pressure compressor damage"
    ],
    answer: 1,
    explanation: "The high-pressure relief valve is a safety device that vents refrigerant if system pressure exceeds a preset dangerous level, typically around 450–550 psi. This protects the compressor, hoses, and other components from catastrophic failure due to excessive pressure from overcharging or restrictions.",
    diagram: "",
    terms: ["compressor", "refrigerant", "condenser"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Compressor Operation Explained",
    qChinese: "空调压缩机上高压释放阀的作用是什么？",
    optionsChinese: [
      "A) 调节正常工作压力",
      "B) 当系统压力超过危险水平时排放制冷剂",
      "C) 将制冷剂计量到蒸发器",
      "D) 防止低压损坏压缩机"
    ],
    explanationChinese: "高压释放阀是一个安全装置，当系统压力超过预设的危险水平（通常约450-550 psi）时排放制冷剂。这保护压缩机、软管和其他部件免受因过度充注或堵塞造成的过高压力导致的灾难性故障。"
  },
  {
    id: 55,
    q: "Which type of A/C hose is most resistant to refrigerant permeation?",
    options: [
      "A) Standard rubber hose",
      "B) Barrier-type hose with a nylon inner liner",
      "C) Copper tubing only",
      "D) PVC plastic tubing"
    ],
    answer: 1,
    explanation: "Barrier-type hoses feature a nylon or similar inner liner that greatly reduces refrigerant permeation through the hose walls. These are standard on modern vehicles to comply with emissions regulations and maintain system charge levels over the life of the vehicle.",
    diagram: "",
    terms: ["refrigerant", "refrigerant_leak_detection", "compressor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=_z1LchPP5GQ",
    youtubeTitle: "Refrigerant Leak Detection Methods",
    qChinese: "哪种类型的空调软管最能抵抗制冷剂渗透？",
    optionsChinese: [
      "A) 标准橡胶软管",
      "B) 带尼龙内衬的屏障型软管",
      "C) 仅铜管",
      "D) PVC塑料管"
    ],
    explanationChinese: "屏障型软管具有尼龙或类似内衬，大大减少了制冷剂通过软管壁的渗透。这些是现代车辆的标准配置，以符合排放法规并在车辆使用寿命内维持系统充注量。"
  },
  {
    id: 56,
    q: "An orifice tube removed during service shows a brown or black discoloration on the inlet screen. What does this indicate?",
    options: [
      "A) Normal system operation",
      "B) Compressor internal damage producing debris and contamination",
      "C) Excess refrigerant oil in the system",
      "D) The wrong refrigerant type was used"
    ],
    answer: 1,
    explanation: "Brown or black debris on the orifice tube inlet screen indicates internal compressor wear or failure. Metal particles, gasket material, and degraded oil collect on the screen. This contamination requires flushing the system and inspecting or replacing the compressor and other components.",
    diagram: "",
    terms: ["compressor", "accumulator", "refrigerant", "condenser"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Compressor Operation Explained",
    qChinese: "维修中取出的节流管入口滤网显示棕色或黑色变色。这表明什么？",
    optionsChinese: [
      "A) 系统正常运行",
      "B) 压缩机内部损坏产生碎屑和污染",
      "C) 系统中制冷剂油过多",
      "D) 使用了错误类型的制冷剂"
    ],
    explanationChinese: "节流管入口滤网上的棕色或黑色碎屑表明压缩机内部磨损或故障。金属颗粒、垫片材料和降解的油会聚集在滤网上。这种污染需要冲洗系统并检查或更换压缩机和其他部件。"
  },
  {
    id: 57,
    q: "All of the following describe the condenser's role in the refrigeration cycle EXCEPT:",
    options: [
      "A) Rejecting heat absorbed from the passenger compartment",
      "B) Changing refrigerant from high-pressure vapor to high-pressure liquid",
      "C) Lowering the temperature of the refrigerant below its condensation point",
      "D) Absorbing heat from outside ambient air"
    ],
    answer: 3,
    explanation: "The condenser rejects heat from the hot, high-pressure refrigerant to the cooler outside ambient air, not the other way around. It changes refrigerant from vapor to liquid through heat rejection and subcools the liquid below its condensation point for proper metering device operation.",
    diagram: "",
    terms: ["condenser", "subcooling", "refrigerant", "compressor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Condenser Function and Diagnosis",
    qChinese: "以下所有都描述了冷凝器在制冷循环中的作用，除了：",
    optionsChinese: [
      "A) 排放从乘客舱吸收的热量",
      "B) 将制冷剂从高压蒸汽变为高压液体",
      "C) 将制冷剂温度降至其冷凝点以下",
      "D) 从外部环境空气中吸收热量"
    ],
    explanationChinese: "冷凝器将热量从高温高压的制冷剂排放到较冷的外部环境空气中，而不是相反。它通过排热将制冷剂从气态变为液态，并将液体过冷至冷凝点以下，以确保计量装置正常工作。"
  },
  {
    id: 58,
    q: "A scroll compressor differs from a piston compressor in that it:",
    options: [
      "A) Uses pistons and cylinders for compression",
      "B) Uses two interlocking spiral-shaped scrolls to compress refrigerant",
      "C) Cannot be used with R-134a",
      "D) Requires a clutch cycling switch to operate"
    ],
    answer: 1,
    explanation: "A scroll compressor uses two interlocking spiral-shaped scrolls—one fixed and one orbiting—to trap and progressively compress refrigerant vapor. Scroll compressors are known for smooth, quiet operation, fewer moving parts, and higher efficiency compared to reciprocating piston designs.",
    diagram: "",
    terms: ["compressor", "refrigerant", "evaporator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Compressor Operation Explained",
    qChinese: "涡旋压缩机与活塞压缩机的不同之处在于它：",
    optionsChinese: [
      "A) 使用活塞和气缸进行压缩",
      "B) 使用两个互锁的螺旋形涡旋盘压缩制冷剂",
      "C) 不能与R-134a一起使用",
      "D) 需要离合器循环开关才能运行"
    ],
    explanationChinese: "涡旋压缩机使用两个互锁的螺旋形涡旋盘——一个固定的和一个公转的——来捕获并逐步压缩制冷剂蒸汽。涡旋压缩机以平稳、安静的运行、更少的运动部件和比往复活塞设计更高的效率而闻名。"
  },
  {
    id: 59,
    q: "What fitting type is commonly used on R-134a service ports to prevent cross-contamination with R-12?",
    options: [
      "A) Flare fittings",
      "B) Quick-connect fittings with a different diameter than R-12 ports",
      "C) Standard Schrader valve fittings identical to R-12",
      "D) Compression fittings"
    ],
    answer: 1,
    explanation: "R-134a systems use quick-connect service port fittings that are physically larger than R-12 fittings. The high-side and low-side ports are different sizes from each other and from R-12 ports, preventing accidental cross-connection and refrigerant contamination between systems.",
    diagram: "",
    terms: ["refrigerant", "compressor", "refrigerant_leak_detection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=_z1LchPP5GQ",
    youtubeTitle: "R-134a vs R-1234yf Refrigerant Explained",
    qChinese: "R-134a维修口通常使用什么类型的接头来防止与R-12交叉污染？",
    optionsChinese: [
      "A) 扩口接头",
      "B) 直径与R-12端口不同的快接接头",
      "C) 与R-12相同的标准气门芯接头",
      "D) 压缩接头"
    ],
    explanationChinese: "R-134a系统使用物理尺寸大于R-12接头的快接维修口接头。高压侧和低压侧端口彼此以及与R-12端口的尺寸不同，防止意外交叉连接和系统间的制冷剂污染。"
  },
  {
    id: 60,
    q: "Technician A says the evaporator also removes humidity from the air. Technician B says condensation on the evaporator should drain out of the HVAC case through a drain tube. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "When warm, humid air passes over the cold evaporator surface, moisture condenses on the fins, effectively dehumidifying the cabin air. This condensation collects in the evaporator case and drains out through a drain tube. A clogged drain can cause water to leak into the passenger compartment.",
    diagram: "",
    terms: ["evaporator", "blower_motor", "cabin_air_filter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "Evaporator Core Function and Problems",
    qChinese: "技师A说蒸发器还能去除空气中的湿度。技师B说蒸发器上的冷凝水应通过排水管从HVAC箱体排出。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "当温暖潮湿的空气经过冷的蒸发器表面时，水分在翅片上凝结，有效地为座舱空气除湿。凝结水汇集在蒸发器箱体中并通过排水管排出。排水管堵塞会导致水漏入乘客舱。"
  },
  {
    id: 61,
    q: "Which component in a TXV system provides subcooling and liquid refrigerant storage?",
    options: [
      "A) The accumulator",
      "B) The evaporator",
      "C) The receiver/drier",
      "D) The compressor"
    ],
    answer: 2,
    explanation: "In a TXV system, the receiver/drier located in the high-side liquid line provides liquid refrigerant storage, ensures only liquid reaches the TXV, contains desiccant for moisture removal, and contributes to subcooling the liquid refrigerant for proper system efficiency.",
    diagram: "",
    terms: ["receiver_drier", "subcooling", "txv", "refrigerant"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "Receiver Drier vs Accumulator Explained",
    qChinese: "在TXV系统中，哪个部件提供过冷和液态制冷剂储存？",
    optionsChinese: [
      "A) 储液器",
      "B) 蒸发器",
      "C) 储液干燥器",
      "D) 压缩机"
    ],
    explanationChinese: "在TXV系统中，位于高压侧液管中的储液干燥器提供液态制冷剂储存、确保只有液态制冷剂到达TXV、含有干燥剂去除水分，并有助于将液态制冷剂过冷以提高系统效率。"
  },
  {
    id: 62,
    q: "What happens when a compressor clutch air gap becomes excessive?",
    options: [
      "A) The compressor runs continuously without cycling",
      "B) The clutch may slip, chatter, or fail to fully engage",
      "C) The compressor output pressure increases",
      "D) The evaporator frosts over completely"
    ],
    answer: 1,
    explanation: "An excessive air gap weakens the magnetic pull of the clutch coil on the friction plate. This causes the clutch to slip, chatter, or fail to engage fully, resulting in poor compressor operation, burned clutch surfaces, and inadequate cooling. The gap should be checked and adjusted or replaced.",
    diagram: "",
    terms: ["compressor", "serpentine_belt", "refrigerant"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Compressor Operation Explained",
    qChinese: "当压缩机离合器间隙过大时会发生什么？",
    optionsChinese: [
      "A) 压缩机不循环连续运行",
      "B) 离合器可能打滑、抖动或无法完全接合",
      "C) 压缩机输出压力增加",
      "D) 蒸发器完全结霜"
    ],
    explanationChinese: "过大的间隙削弱了离合器线圈对摩擦片的磁力吸引。这导致离合器打滑、抖动或无法完全接合，造成压缩机运行不良、离合器表面烧蚀和制冷不足。应检查间隙并进行调整或更换。"
  },

  // ============================================================
  // OPERATING SYSTEMS & RELATED CONTROLS (Questions 63–100)
  // ============================================================
  {
    id: 63,
    q: "A blower motor operates on high speed only. All lower speeds are inoperative. What is the MOST likely cause?",
    options: [
      "A) A faulty blower motor",
      "B) A failed blower motor resistor",
      "C) A broken blower motor ground wire",
      "D) A faulty high-speed relay"
    ],
    answer: 1,
    explanation: "The blower motor resistor provides resistance to reduce voltage for lower fan speeds. If the resistor burns out or fails, only the high-speed circuit (which bypasses the resistor) remains functional. Replacing the blower motor resistor and inspecting the connector for heat damage is required.",
    diagram: "",
    terms: ["blower_motor", "relay", "fuse", "series_circuit"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Blower Motor and Resistor Diagnosis",
    qChinese: "鼓风机电机仅在高速档运行。所有低速档均不工作。最可能的原因是什么？",
    optionsChinese: [
      "A) 鼓风机电机故障",
      "B) 鼓风机电机电阻器损坏",
      "C) 鼓风机电机接地线断裂",
      "D) 高速继电器故障"
    ],
    explanationChinese: "鼓风机电机电阻器提供电阻以降低低速档的电压。如果电阻器烧毁或失效，只有旁路电阻器的高速电路仍然可用。需要更换鼓风机电机电阻器并检查连接器是否有热损坏。"
  },
  {
    id: 64,
    q: "A blower motor does not operate on any speed. There is battery voltage at the blower motor connector. What should the technician check NEXT?",
    options: [
      "A) The blower motor resistor",
      "B) The blower motor fuse",
      "C) The blower motor ground circuit",
      "D) The A/C compressor clutch relay"
    ],
    answer: 2,
    explanation: "If battery voltage is present at the blower motor connector but the motor does not operate, the ground circuit should be checked next. A poor or open ground connection prevents current flow through the motor. If the ground is good, the blower motor itself is likely faulty.",
    diagram: "",
    terms: ["blower_motor", "ground_circuit", "dmm", "voltage_drop_test"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Blower Motor and Resistor Diagnosis",
    qChinese: "鼓风机电机在任何速度下都不运行。鼓风机电机连接器处有蓄电池电压。技师下一步应检查什么？",
    optionsChinese: [
      "A) 鼓风机电机电阻器",
      "B) 鼓风机电机保险丝",
      "C) 鼓风机电机接地回路",
      "D) 空调压缩机离合器继电器"
    ],
    explanationChinese: "如果鼓风机电机连接器处有蓄电池电压但电机不运行，下一步应检查接地回路。接地连接不良或开路会阻止电流流过电机。如果接地正常，鼓风机电机本身可能故障。"
  },
  {
    id: 65,
    q: "Which component controls blower motor speed in a system using automatic temperature control (ATC)?",
    options: [
      "A) A blower motor resistor block",
      "B) A blower motor control module (power transistor or solid-state module)",
      "C) A manual fan speed switch",
      "D) The A/C compressor clutch relay"
    ],
    answer: 1,
    explanation: "Automatic temperature control systems use a blower motor control module (power transistor or solid-state speed controller) to infinitely vary blower speed based on commands from the ATC control module. This provides precise temperature control compared to the fixed speeds of a resistor block.",
    diagram: "",
    terms: ["blower_motor", "pcm", "blend_door"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Blower Motor and Resistor Diagnosis",
    qChinese: "在使用自动温控（ATC）的系统中，哪个部件控制鼓风机电机速度？",
    optionsChinese: [
      "A) 鼓风机电机电阻块",
      "B) 鼓风机电机控制模块（功率晶体管或固态模块）",
      "C) 手动风速开关",
      "D) 空调压缩机离合器继电器"
    ],
    explanationChinese: "自动温控系统使用鼓风机电机控制模块（功率晶体管或固态速度控制器），根据ATC控制模块的指令无级调节鼓风机速度。与电阻块的固定速度相比，这提供了更精确的温度控制。"
  },
  {
    id: 66,
    q: "A relay is used to control the A/C compressor clutch. Which terminals on the relay receive the control signal from the PCM?",
    options: [
      "A) The load-side terminals (normally open contacts)",
      "B) The coil terminals (control side)",
      "C) The power supply terminal only",
      "D) The ground terminal only"
    ],
    answer: 1,
    explanation: "The PCM controls the relay by providing either power or ground to the relay coil terminals (control side). When the coil is energized, the internal contacts close, connecting the load-side terminals and supplying power to the compressor clutch. The coil side draws minimal current.",
    diagram: "",
    terms: ["relay", "pcm", "compressor", "ground_circuit"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Compressor Operation Explained",
    qChinese: "继电器用于控制空调压缩机离合器。继电器上哪些端子接收来自PCM的控制信号？",
    optionsChinese: [
      "A) 负载侧端子（常开触点）",
      "B) 线圈端子（控制侧）",
      "C) 仅电源端子",
      "D) 仅接地端子"
    ],
    explanationChinese: "PCM通过向继电器线圈端子（控制侧）提供电源或接地来控制继电器。当线圈通电时，内部触点闭合，连接负载侧端子并向压缩机离合器供电。线圈侧消耗的电流很小。"
  },
  {
    id: 67,
    q: "Technician A says the A/C clutch coil can be tested with an ohmmeter for proper resistance. Technician B says applying 12 volts directly to the clutch coil connector can verify clutch engagement. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "The clutch coil can be checked with an ohmmeter to verify the winding resistance is within specification (typically 3–5 ohms). Applying 12V directly to the coil connector with a jumper wire can also verify that the clutch physically engages, bypassing the control circuit for testing.",
    diagram: "",
    terms: ["compressor", "dmm", "ohms_law", "relay"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Compressor Operation Explained",
    qChinese: "技师A说可以用欧姆表测试空调离合器线圈的正确电阻。技师B说直接将12伏电压施加到离合器线圈连接器可以验证离合器接合。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "可以用欧姆表检查离合器线圈，以验证绕组电阻是否在规格范围内（通常3-5欧姆）。用跳线直接向线圈连接器施加12V也可以验证离合器是否物理接合，从而绕过控制电路进行测试。"
  },
  {
    id: 68,
    q: "Vacuum-operated HVAC mode doors fail to change positions. The engine runs normally. What should the technician check FIRST?",
    options: [
      "A) The A/C compressor",
      "B) The vacuum supply hose from the engine to the HVAC control head",
      "C) The blower motor resistor",
      "D) The coolant temperature sensor"
    ],
    answer: 1,
    explanation: "If all vacuum-operated mode doors fail to change position, the most likely cause is a loss of vacuum supply. The technician should first check the vacuum supply hose from the intake manifold to the HVAC control head for disconnection, cracks, or leaks that would prevent vacuum from reaching the actuators.",
    diagram: "",
    terms: ["blend_door", "vacuum_gauge", "blower_motor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Blend Door Actuator Diagnosis and Repair",
    qChinese: "真空操作的HVAC模式风门无法改变位置。发动机正常运行。技师应首先检查什么？",
    optionsChinese: [
      "A) 空调压缩机",
      "B) 从发动机到HVAC控制面板的真空供应软管",
      "C) 鼓风机电机电阻器",
      "D) 冷却液温度传感器"
    ],
    explanationChinese: "如果所有真空操作的模式风门都无法改变位置，最可能的原因是真空供应中断。技师应首先检查从进气歧管到HVAC控制面板的真空供应软管是否断开、裂纹或泄漏，这些会阻止真空到达执行器。"
  },
  {
    id: 69,
    q: "An ATC (automatic temperature control) system uses which of the following sensors to determine cabin temperature?",
    options: [
      "A) An engine coolant temperature sensor only",
      "B) An in-car temperature sensor (aspirator sensor)",
      "C) A manifold absolute pressure sensor",
      "D) A mass airflow sensor"
    ],
    answer: 1,
    explanation: "The in-car temperature sensor, often combined with an aspirator that draws cabin air across the sensor using a small tube connected to the HVAC airflow, provides the ATC module with actual cabin temperature data. This reading is compared to the set temperature to adjust system output.",
    diagram: "",
    terms: ["blend_door", "blower_motor", "coolant_temperature_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Blend Door Actuator Diagnosis and Repair",
    qChinese: "ATC（自动温控）系统使用以下哪种传感器来确定座舱温度？",
    optionsChinese: [
      "A) 仅发动机冷却液温度传感器",
      "B) 车内温度传感器（吸气传感器）",
      "C) 进气歧管绝对压力传感器",
      "D) 空气质量流量传感器"
    ],
    explanationChinese: "车内温度传感器通常与吸气器配合使用，吸气器通过一根连接到HVAC气流的小管将座舱空气吸过传感器，为ATC模块提供实际座舱温度数据。该读数与设定温度进行比较以调整系统输出。"
  },
  {
    id: 70,
    q: "A blend door actuator is suspected of being faulty. What is the MOST efficient diagnostic step?",
    options: [
      "A) Replace the actuator and see if the problem is fixed",
      "B) Use a scan tool to command the blend door through its full range of motion",
      "C) Remove the entire dashboard to inspect the door",
      "D) Check the A/C compressor clutch operation"
    ],
    answer: 1,
    explanation: "Using a scan tool to command the blend door actuator through its full range of motion is the most efficient diagnostic method. The technician can verify whether the actuator responds to commands, check for DTCs, and listen for abnormal clicking or binding that indicates a mechanical failure.",
    diagram: "",
    terms: ["blend_door", "scan_tool", "dtc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Blend Door Actuator Diagnosis and Repair",
    qChinese: "怀疑混合风门执行器故障。最有效的诊断步骤是什么？",
    optionsChinese: [
      "A) 更换执行器看问题是否解决",
      "B) 使用诊断仪命令混合风门完成全行程运动",
      "C) 拆除整个仪表台以检查风门",
      "D) 检查空调压缩机离合器运行"
    ],
    explanationChinese: "使用诊断仪命令混合风门执行器完成全行程运动是最有效的诊断方法。技师可以验证执行器是否响应命令，检查DTC，并监听异常的咔嗒声或卡滞声，以判断是否存在机械故障。"
  },
  {
    id: 71,
    q: "What is the function of the mode door in an HVAC system?",
    options: [
      "A) To control the temperature of the air entering the cabin",
      "B) To direct airflow to the selected outlet (dash vents, floor, defrost)",
      "C) To control the amount of refrigerant flowing to the evaporator",
      "D) To engage and disengage the A/C compressor"
    ],
    answer: 1,
    explanation: "The mode door (also called a distribution door) directs conditioned air to the appropriate outlet ducts based on the selected mode: dash panel vents, floor outlets, defrost vents, or a combination. This is separate from the blend door, which controls air temperature.",
    diagram: "",
    terms: ["blend_door", "blower_motor", "evaporator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Blend Door Actuator Diagnosis and Repair",
    qChinese: "HVAC系统中模式风门的功能是什么？",
    optionsChinese: [
      "A) 控制进入座舱的空气温度",
      "B) 将气流导向选定的出口（仪表板出风口、脚部、除霜口）",
      "C) 控制流向蒸发器的制冷剂量",
      "D) 接合和脱开空调压缩机"
    ],
    explanationChinese: "模式风门（也称为分配风门）根据选定的模式将调节后的空气导向相应的出风管道：仪表板出风口、地板出口、除霜口或组合模式。这与控制空气温度的混合风门是分开的。"
  },
  {
    id: 72,
    q: "A vehicle's ATC system displays a DTC for the ambient air temperature sensor. What does this sensor measure?",
    options: [
      "A) The temperature of air inside the passenger cabin",
      "B) The temperature of the outside air",
      "C) The temperature of the evaporator core",
      "D) The temperature of the engine coolant"
    ],
    answer: 1,
    explanation: "The ambient air temperature sensor measures outside air temperature. This data is used by the ATC system to calculate the required heating or cooling demand. It is typically mounted behind the front bumper or grille, away from engine heat, for accurate outside temperature readings.",
    diagram: "",
    terms: ["dtc", "scan_tool", "coolant_temperature_sensor", "blend_door"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "A/C System Diagnosis with Gauges",
    qChinese: "车辆的ATC系统显示环境空气温度传感器的DTC。该传感器测量什么？",
    optionsChinese: [
      "A) 乘客舱内的空气温度",
      "B) 车外空气温度",
      "C) 蒸发器芯的温度",
      "D) 发动机冷却液的温度"
    ],
    explanationChinese: "环境空气温度传感器测量车外空气温度。ATC系统使用此数据来计算所需的加热或制冷需求。它通常安装在前保险杠或格栅后面，远离发动机热量，以获得准确的外部温度读数。"
  },
  {
    id: 73,
    q: "In a dual-zone HVAC system, one side blows cold air while the other blows warm air. Both passengers have the same temperature set. What is the MOST likely cause?",
    options: [
      "A) Low refrigerant charge",
      "B) A faulty blend door actuator on one side",
      "C) A clogged cabin air filter",
      "D) A faulty condenser fan"
    ],
    answer: 1,
    explanation: "In a dual-zone system, each side has its own blend door actuator to independently control air temperature. If one side produces the wrong temperature while the other works correctly, the blend door actuator on the malfunctioning side is most likely stuck, failed, or has a calibration error.",
    diagram: "",
    terms: ["blend_door", "scan_tool", "dtc", "blower_motor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Blend Door Actuator Diagnosis and Repair",
    qChinese: "在双区HVAC系统中，一侧吹冷风而另一侧吹暖风。两位乘客设定了相同的温度。最可能的原因是什么？",
    optionsChinese: [
      "A) 制冷剂不足",
      "B) 一侧的混合风门执行器故障",
      "C) 座舱空气滤清器堵塞",
      "D) 冷凝器风扇故障"
    ],
    explanationChinese: "在双区系统中，每侧都有自己的混合风门执行器来独立控制空气温度。如果一侧产生错误的温度而另一侧正常工作，故障一侧的混合风门执行器最可能卡住、失效或存在校准错误。"
  },
  {
    id: 74,
    q: "Technician A says a scan tool can be used to read HVAC-related DTCs. Technician B says a scan tool can command individual HVAC actuators for testing. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Modern scan tools can retrieve HVAC diagnostic trouble codes stored in the body control module or ATC module. They can also perform bi-directional control tests to command individual actuators such as blend doors, mode doors, and the blower motor to verify proper operation.",
    diagram: "",
    terms: ["scan_tool", "dtc", "blend_door", "blower_motor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "A/C System Diagnosis with Gauges",
    qChinese: "技师A说可以使用诊断仪读取HVAC相关的DTC。技师B说诊断仪可以命令各个HVAC执行器进行测试。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "现代诊断仪可以读取存储在车身控制模块或ATC模块中的HVAC诊断故障代码。它们还可以执行双向控制测试，命令各个执行器（如混合风门、模式风门和鼓风机电机）以验证其正常运行。"
  },
  {
    id: 75,
    q: "A recirculation door is stuck in the recirculated air position. What symptom will the driver notice?",
    options: [
      "A) The A/C system will not cool at all",
      "B) The windshield will fog up easily, especially in humid conditions",
      "C) The engine will overheat",
      "D) The blower motor will not operate"
    ],
    answer: 1,
    explanation: "When the recirculation door is stuck closed (recirculated position), outside fresh air cannot enter the HVAC system. Continuously recirculating cabin air causes excessive moisture buildup, leading to windshield fogging, especially in humid or cold conditions when defogging requires fresh air.",
    diagram: "",
    terms: ["blend_door", "evaporator", "blower_motor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Blend Door Actuator Diagnosis and Repair",
    qChinese: "循环风门卡在内循环位置。驾驶员会注意到什么症状？",
    optionsChinese: [
      "A) 空调系统完全不制冷",
      "B) 挡风玻璃容易起雾，特别是在潮湿条件下",
      "C) 发动机过热",
      "D) 鼓风机电机不运行"
    ],
    explanationChinese: "当循环风门卡在关闭位置（内循环位置）时，外部新鲜空气无法进入HVAC系统。持续循环座舱空气导致湿度过度积累，尤其在潮湿或寒冷条件下需要新鲜空气除雾时，会导致挡风玻璃起雾。"
  },
  {
    id: 76,
    q: "The A/C compressor clutch engages and disengages rapidly (short cycling). Which of the following is the MOST likely cause?",
    options: [
      "A) An overcharged system",
      "B) A low refrigerant charge causing the low-pressure switch to cycle",
      "C) A clogged cabin air filter",
      "D) A faulty blower motor resistor"
    ],
    answer: 1,
    explanation: "Rapid compressor clutch cycling (short cycling) is commonly caused by a low refrigerant charge. As the compressor runs, suction pressure drops to the low-pressure switch cutoff point, disengaging the clutch. Pressure then rises slightly, re-engaging the clutch, creating a rapid on/off cycle.",
    diagram: "",
    terms: ["compressor", "refrigerant", "refrigerant_leak_detection", "relay"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Compressor Operation Explained",
    qChinese: "空调压缩机离合器快速接合和脱开（短周期循环）。以下哪项是最可能的原因？",
    optionsChinese: [
      "A) 系统充注过量",
      "B) 制冷剂不足导致低压开关循环",
      "C) 座舱空气滤清器堵塞",
      "D) 鼓风机电机电阻器故障"
    ],
    explanationChinese: "压缩机离合器快速循环（短周期循环）通常由制冷剂不足引起。压缩机运行时，吸入压力降至低压开关切断点，脱开离合器。然后压力略微回升，重新接合离合器，形成快速开关循环。"
  },
  {
    id: 77,
    q: "What type of sensor is typically used as the evaporator temperature sensor?",
    options: [
      "A) A potentiometer",
      "B) A negative temperature coefficient (NTC) thermistor",
      "C) A piezoelectric sensor",
      "D) A Hall-effect sensor"
    ],
    answer: 1,
    explanation: "The evaporator temperature sensor is typically an NTC thermistor whose resistance decreases as temperature increases. It is inserted into or mounted on the evaporator fins to monitor temperature and prevent evaporator freeze-up by disengaging the compressor clutch near 32°F.",
    diagram: "",
    terms: ["evaporator", "compressor", "dmm", "ohms_law"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "Evaporator Core Function and Problems",
    qChinese: "通常用作蒸发器温度传感器的是什么类型的传感器？",
    optionsChinese: [
      "A) 电位器",
      "B) 负温度系数（NTC）热敏电阻",
      "C) 压电传感器",
      "D) 霍尔效应传感器"
    ],
    explanationChinese: "蒸发器温度传感器通常是NTC热敏电阻，其电阻随温度升高而降低。它插入或安装在蒸发器翅片上，监测温度并在接近32°F时脱开压缩机离合器以防止蒸发器结冰。"
  },
  {
    id: 78,
    q: "A sunload sensor is used in an ATC system. What does it measure?",
    options: [
      "A) The outside ambient temperature",
      "B) The intensity of solar radiation entering the vehicle cabin",
      "C) The temperature of the evaporator core",
      "D) The humidity level inside the cabin"
    ],
    answer: 1,
    explanation: "The sunload sensor is a photodiode typically mounted on the dashboard that measures the intensity of direct solar radiation entering the cabin. The ATC module uses this data to adjust cooling output to compensate for the additional heat load from direct sunlight.",
    diagram: "",
    terms: ["blend_door", "blower_motor", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "A/C System Diagnosis with Gauges",
    qChinese: "ATC系统中使用日照传感器。它测量什么？",
    optionsChinese: [
      "A) 外部环境温度",
      "B) 进入车辆座舱的太阳辐射强度",
      "C) 蒸发器芯的温度",
      "D) 座舱内的湿度水平"
    ],
    explanationChinese: "日照传感器是一个通常安装在仪表板上的光电二极管，测量进入座舱的直射太阳辐射强度。ATC模块利用此数据调整制冷输出，以补偿来自直射阳光的额外热负荷。"
  },
  {
    id: 79,
    q: "Technician A says the PCM may disable the A/C compressor during wide-open throttle for engine performance. Technician B says the PCM may disable the A/C compressor when engine coolant temperature is critically high. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "The PCM can disengage the A/C compressor during wide-open throttle to provide maximum engine power for acceleration. It also disengages the compressor when engine coolant temperature reaches a critical level to reduce engine load and help prevent overheating. Both are standard protective strategies.",
    diagram: "",
    terms: ["pcm", "compressor", "coolant_temperature_sensor", "throttle_position_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Compressor Operation Explained",
    qChinese: "技师A说PCM可能在全油门时禁用空调压缩机以提高发动机性能。技师B说PCM可能在发动机冷却液温度危急过高时禁用空调压缩机。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "PCM可以在全油门时脱开空调压缩机，以提供最大发动机功率用于加速。当发动机冷却液温度达到危急水平时，它也会脱开压缩机以降低发动机负荷，帮助防止过热。两者都是标准保护策略。"
  },
  {
    id: 80,
    q: "A vehicle's defrost mode is selected, but air only comes from the floor vents. What is the MOST likely cause?",
    options: [
      "A) A faulty evaporator temperature sensor",
      "B) A mode door actuator that is stuck or has failed",
      "C) An overcharged refrigerant system",
      "D) A slipping compressor drive belt"
    ],
    answer: 1,
    explanation: "The mode door directs air to the selected outlet. If defrost is selected but air comes from the floor, the mode door actuator is likely stuck in the floor position or has failed. The actuator motor, linkage, or the door itself may be broken, preventing it from moving to the defrost position.",
    diagram: "",
    terms: ["blend_door", "scan_tool", "dtc", "blower_motor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Blend Door Actuator Diagnosis and Repair",
    qChinese: "选择了除霜模式，但空气只从脚部出风口吹出。最可能的原因是什么？",
    optionsChinese: [
      "A) 蒸发器温度传感器故障",
      "B) 模式风门执行器卡住或失效",
      "C) 制冷剂系统充注过量",
      "D) 压缩机驱动皮带打滑"
    ],
    explanationChinese: "模式风门将空气导向选定的出口。如果选择了除霜但空气从脚部出来，模式风门执行器可能卡在脚部位置或已失效。执行器电机、连杆或风门本身可能损坏，阻止其移动到除霜位置。"
  },
  {
    id: 81,
    q: "What happens to A/C system operation when the evaporator temperature sensor detects a temperature near freezing?",
    options: [
      "A) The blower motor speed increases",
      "B) The compressor clutch is disengaged to prevent evaporator icing",
      "C) The condenser fan turns off",
      "D) The blend door moves to full heat"
    ],
    answer: 1,
    explanation: "When the evaporator temperature sensor detects a temperature approaching 32°F, the control module disengages the compressor clutch to prevent the evaporator from freezing and blocking airflow. Once the temperature rises, the clutch re-engages. This cycling maintains cooling without ice formation.",
    diagram: "",
    terms: ["evaporator", "compressor", "pcm", "relay"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "Evaporator Core Function and Problems",
    qChinese: "当蒸发器温度传感器检测到接近冰点的温度时，空调系统会如何运行？",
    optionsChinese: [
      "A) 鼓风机电机速度增加",
      "B) 压缩机离合器脱开以防止蒸发器结冰",
      "C) 冷凝器风扇关闭",
      "D) 混合风门移到全加热位置"
    ],
    explanationChinese: "当蒸发器温度传感器检测到温度接近32°F时，控制模块脱开压缩机离合器以防止蒸发器结冰和阻塞气流。温度升高后，离合器重新接合。这种循环在不结冰的情况下维持制冷效果。"
  },
  {
    id: 82,
    q: "A blower motor resistor connector is melted and discolored. What is the MOST likely cause?",
    options: [
      "A) The blower motor is drawing excessive current due to a worn motor",
      "B) The A/C system is overcharged",
      "C) The evaporator is restricted",
      "D) The refrigerant type is incorrect"
    ],
    answer: 0,
    explanation: "A worn blower motor draws excessive amperage, causing high current flow through the resistor and its connector. This excess current generates heat that melts and discolors the connector. Both the resistor and connector should be replaced, and the blower motor current draw should be tested.",
    diagram: "",
    terms: ["blower_motor", "ohms_law", "fuse", "dmm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Blower Motor and Resistor Diagnosis",
    qChinese: "鼓风机电机电阻器连接器熔化变色。最可能的原因是什么？",
    optionsChinese: [
      "A) 鼓风机电机因磨损而吸收过大电流",
      "B) 空调系统充注过量",
      "C) 蒸发器堵塞",
      "D) 制冷剂类型不正确"
    ],
    explanationChinese: "磨损的鼓风机电机吸收过大的电流，导致通过电阻器及其连接器的电流过高。这种过大的电流产生热量，使连接器熔化变色。应更换电阻器和连接器，并测试鼓风机电机的电流消耗。"
  },
  {
    id: 83,
    q: "All of the following HVAC components can be controlled by the body control module (BCM) EXCEPT:",
    options: [
      "A) Blend door actuator position",
      "B) Blower motor speed",
      "C) Refrigerant charge amount",
      "D) Mode door actuator position"
    ],
    answer: 2,
    explanation: "The BCM or ATC module can electronically control blend door position, blower motor speed, and mode door position based on sensor inputs and driver settings. However, the refrigerant charge amount is a physical quantity set during service and cannot be controlled by any electronic module.",
    diagram: "",
    terms: ["pcm", "blend_door", "blower_motor", "can_bus"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "A/C System Diagnosis with Gauges",
    qChinese: "以下所有HVAC部件都可以由车身控制模块（BCM）控制，除了：",
    optionsChinese: [
      "A) 混合风门执行器位置",
      "B) 鼓风机电机速度",
      "C) 制冷剂充注量",
      "D) 模式风门执行器位置"
    ],
    explanationChinese: "BCM或ATC模块可以根据传感器输入和驾驶员设置电子控制混合风门位置、鼓风机电机速度和模式风门位置。然而，制冷剂充注量是在维修期间设定的物理量，无法由任何电子模块控制。"
  },
  {
    id: 84,
    q: "A high-pressure A/C cutoff switch opens at approximately 400 psi. What is the purpose of this switch?",
    options: [
      "A) To engage the compressor at high ambient temperatures",
      "B) To disengage the compressor to protect the system from dangerously high pressure",
      "C) To increase refrigerant flow to the evaporator",
      "D) To activate the condenser fan at low speeds"
    ],
    answer: 1,
    explanation: "The high-pressure cutoff switch disengages the compressor clutch when system pressure reaches a dangerous level (typically 375–450 psi). This protects the compressor, hoses, and other components from potential damage or rupture caused by excessive pressure from overcharge or restricted airflow.",
    diagram: "",
    terms: ["compressor", "refrigerant", "condenser", "relay"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Compressor Operation Explained",
    qChinese: "高压空调切断开关在大约400 psi时断开。该开关的作用是什么？",
    optionsChinese: [
      "A) 在高环境温度下接合压缩机",
      "B) 脱开压缩机以保护系统免受危险高压",
      "C) 增加流向蒸发器的制冷剂流量",
      "D) 在低速时启动冷凝器风扇"
    ],
    explanationChinese: "高压切断开关在系统压力达到危险水平（通常375-450 psi）时脱开压缩机离合器。这保护压缩机、软管和其他部件免受因过度充注或气流受阻造成的过高压力导致的潜在损坏或爆裂。"
  },
  {
    id: 85,
    q: "Technician A says electric blend door actuators use a feedback signal to report position to the control module. Technician B says the control module can detect a blend door actuator that is stuck. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Electric blend door actuators contain a feedback potentiometer or encoder that reports the door's actual position to the control module. If the actual position does not match the commanded position within a specified time, the module sets a DTC indicating the actuator is stuck or inoperative.",
    diagram: "",
    terms: ["blend_door", "dtc", "scan_tool", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Blend Door Actuator Diagnosis and Repair",
    qChinese: "技师A说电动混合风门执行器使用反馈信号向控制模块报告位置。技师B说控制模块可以检测到卡住的混合风门执行器。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "电动混合风门执行器包含一个反馈电位器或编码器，向控制模块报告风门的实际位置。如果实际位置在规定时间内与命令位置不匹配，模块会设置一个DTC，表明执行器卡住或不工作。"
  },
  {
    id: 86,
    q: "A vehicle equipped with a pressure transducer for A/C system control provides what advantage over a simple pressure switch?",
    options: [
      "A) It is less expensive to manufacture",
      "B) It provides a variable voltage signal allowing proportional control of the compressor and fan",
      "C) It eliminates the need for an evaporator temperature sensor",
      "D) It replaces the orifice tube"
    ],
    answer: 1,
    explanation: "A pressure transducer provides a continuously variable voltage signal proportional to system pressure, unlike a simple on/off switch. This allows the PCM to proportionally control condenser fan speed, compressor clutch cycling, and even variable displacement compressor output for optimal efficiency.",
    diagram: "",
    terms: ["compressor", "pcm", "condenser", "refrigerant"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "A/C System Diagnosis with Gauges",
    qChinese: "装有用于空调系统控制的压力传感器的车辆与简单的压力开关相比有什么优势？",
    optionsChinese: [
      "A) 制造成本更低",
      "B) 提供可变电压信号，允许对压缩机和风扇进行比例控制",
      "C) 消除了对蒸发器温度传感器的需求",
      "D) 取代了节流管"
    ],
    explanationChinese: "压力传感器提供与系统压力成比例的连续可变电压信号，不同于简单的开/关开关。这使PCM能够按比例控制冷凝器风扇速度、压缩机离合器循环，甚至可变排量压缩机输出，以实现最佳效率。"
  },
  {
    id: 87,
    q: "When the defrost mode is selected in most HVAC systems, which of the following also occurs automatically?",
    options: [
      "A) The heater valve closes",
      "B) The A/C compressor engages to dehumidify the air",
      "C) The blower motor shuts off",
      "D) The recirculation door opens fully"
    ],
    answer: 1,
    explanation: "In most HVAC systems, selecting defrost mode automatically engages the A/C compressor. The A/C system dehumidifies the air before it reaches the windshield, greatly improving defogging effectiveness. The system also typically switches to fresh air mode for the same reason.",
    diagram: "",
    terms: ["compressor", "evaporator", "blend_door", "blower_motor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "How Car Air Conditioning Works",
    qChinese: "在大多数HVAC系统中，选择除霜模式时，以下哪项也会自动发生？",
    optionsChinese: [
      "A) 暖风阀关闭",
      "B) 空调压缩机接合以除湿空气",
      "C) 鼓风机电机关闭",
      "D) 循环风门完全打开"
    ],
    explanationChinese: "在大多数HVAC系统中，选择除霜模式会自动接合空调压缩机。空调系统在空气到达挡风玻璃之前对其进行除湿，大大提高除雾效果。系统通常也会切换到新鲜空气模式以达到同样的效果。"
  },
  {
    id: 88,
    q: "A vehicle's rear A/C system has no cooling, but the front system works normally. All of the following could be the cause EXCEPT:",
    options: [
      "A) A faulty rear expansion valve",
      "B) A closed or restricted rear A/C refrigerant line",
      "C) A faulty rear blower motor",
      "D) A faulty front evaporator temperature sensor"
    ],
    answer: 3,
    explanation: "A faulty front evaporator temperature sensor would affect front A/C operation, not the rear. A faulty rear expansion valve, a restricted rear refrigerant line, or a failed rear blower motor would all directly affect rear A/C performance while leaving the front system working normally.",
    diagram: "",
    terms: ["evaporator", "txv", "blower_motor", "refrigerant"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "Evaporator Core Function and Problems",
    qChinese: "车辆的后排空调系统没有制冷，但前排系统工作正常。以下所有都可能是原因，除了：",
    optionsChinese: [
      "A) 后排膨胀阀故障",
      "B) 后排空调制冷剂管路关闭或堵塞",
      "C) 后排鼓风机电机故障",
      "D) 前排蒸发器温度传感器故障"
    ],
    explanationChinese: "前排蒸发器温度传感器故障会影响前排空调运行，而不是后排。后排膨胀阀故障、后排制冷剂管路堵塞或后排鼓风机电机失效都会直接影响后排空调性能，同时前排系统正常工作。"
  },
  {
    id: 89,
    q: "Which type of motor is commonly used for HVAC blend door actuators?",
    options: [
      "A) A high-speed DC motor",
      "B) A small DC gear motor or stepper motor",
      "C) An AC induction motor",
      "D) A hydraulic motor"
    ],
    answer: 1,
    explanation: "Blend door actuators typically use a small DC gear motor or stepper motor combined with a gear reduction mechanism. These provide the precise, slow-speed rotation and high torque needed to accurately position the blend door. They include position feedback for closed-loop control by the HVAC module.",
    diagram: "",
    terms: ["blend_door", "pcm", "series_circuit"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Blend Door Actuator Diagnosis and Repair",
    qChinese: "HVAC混合风门执行器通常使用哪种类型的电机？",
    optionsChinese: [
      "A) 高速直流电机",
      "B) 小型直流齿轮电机或步进电机",
      "C) 交流感应电机",
      "D) 液压电机"
    ],
    explanationChinese: "混合风门执行器通常使用带有减速齿轮机构的小型直流齿轮电机或步进电机。这些电机提供精确的低速旋转和高扭矩，以准确定位混合风门。它们包含位置反馈以供HVAC模块进行闭环控制。"
  },
  {
    id: 90,
    q: "A DTC indicates an open circuit for the A/C clutch relay control circuit. What should the technician inspect?",
    options: [
      "A) The evaporator drain tube",
      "B) The wiring and connector between the PCM and the relay coil",
      "C) The cabin air filter",
      "D) The condenser fan blade"
    ],
    answer: 1,
    explanation: "An open-circuit DTC for the A/C clutch relay control circuit indicates a break in the wiring between the PCM/BCM and the relay coil. The technician should inspect the wiring harness, connectors, and relay coil for damage, corrosion, loose pins, or a broken wire that prevents the control signal.",
    diagram: "",
    terms: ["relay", "pcm", "dtc", "wiring_diagram"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "A/C System Diagnosis with Gauges",
    qChinese: "DTC指示空调离合器继电器控制电路开路。技师应检查什么？",
    optionsChinese: [
      "A) 蒸发器排水管",
      "B) PCM和继电器线圈之间的线路和连接器",
      "C) 座舱空气滤清器",
      "D) 冷凝器风扇叶片"
    ],
    explanationChinese: "空调离合器继电器控制电路的开路DTC表明PCM/BCM与继电器线圈之间的线路存在断裂。技师应检查线束、连接器和继电器线圈是否有损坏、腐蚀、松动的针脚或阻止控制信号的断线。"
  },
  {
    id: 91,
    q: "An HVAC system with vacuum-operated doors works correctly when the engine is running but defaults to defrost mode when the engine is turned off and restarted. What is the MOST likely cause?",
    options: [
      "A) A faulty blower motor",
      "B) A leaking vacuum reservoir or check valve",
      "C) A clogged evaporator drain",
      "D) An overcharged A/C system"
    ],
    answer: 1,
    explanation: "Vacuum-operated HVAC systems use a vacuum reservoir and check valve to maintain vacuum when the engine is off or during low vacuum conditions. A leaking reservoir or check valve allows vacuum to bleed off, causing doors to default to the defrost position (spring-loaded default) on restart.",
    diagram: "",
    terms: ["blend_door", "vacuum_gauge", "blower_motor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Blend Door Actuator Diagnosis and Repair",
    qChinese: "带有真空操作风门的HVAC系统在发动机运行时工作正常，但发动机关闭后重新启动时默认为除霜模式。最可能的原因是什么？",
    optionsChinese: [
      "A) 鼓风机电机故障",
      "B) 真空储罐或单向阀泄漏",
      "C) 蒸发器排水管堵塞",
      "D) 空调系统充注过量"
    ],
    explanationChinese: "真空操作的HVAC系统使用真空储罐和单向阀在发动机关闭或低真空条件下维持真空。泄漏的储罐或单向阀允许真空泄失，导致风门在重新启动时默认回到除霜位置（弹簧默认位置）。"
  },
  {
    id: 92,
    q: "Technician A says the A/C compressor may be controlled by a dedicated relay. Technician B says the PCM can ground the relay coil to engage the compressor. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Most modern A/C systems use a dedicated relay to handle the high current required by the compressor clutch coil. The PCM typically provides a ground path for the relay coil, energizing it when all operating conditions are met, including proper pressure, temperature, and driver request.",
    diagram: "",
    terms: ["relay", "pcm", "compressor", "ground_circuit"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Compressor Operation Explained",
    qChinese: "技师A说空调压缩机可能由专用继电器控制。技师B说PCM可以对继电器线圈接地以接合压缩机。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "大多数现代空调系统使用专用继电器来处理压缩机离合器线圈所需的大电流。PCM通常为继电器线圈提供接地通路，当所有运行条件满足时（包括适当的压力、温度和驾驶员请求）使其通电。"
  },
  {
    id: 93,
    q: "A dual-zone HVAC system has separate controls for driver and passenger temperature. Which component allows each zone to independently control air temperature?",
    options: [
      "A) A single shared blend door",
      "B) Separate blend door actuators for each zone",
      "C) A single blower motor resistor",
      "D) A shared mode door actuator"
    ],
    answer: 1,
    explanation: "Dual-zone HVAC systems use separate blend door actuators for the driver and passenger sides. Each actuator independently positions its blend door based on the respective zone temperature setting, allowing different air temperatures to be delivered to each side of the cabin simultaneously.",
    diagram: "",
    terms: ["blend_door", "blower_motor", "pcm", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Blend Door Actuator Diagnosis and Repair",
    qChinese: "双区HVAC系统有驾驶员和乘客独立的温度控制。哪个部件允许每个区域独立控制空气温度？",
    optionsChinese: [
      "A) 单个共用混合风门",
      "B) 每个区域独立的混合风门执行器",
      "C) 单个鼓风机电机电阻器",
      "D) 共用的模式风门执行器"
    ],
    explanationChinese: "双区HVAC系统对驾驶员侧和乘客侧使用独立的混合风门执行器。每个执行器根据各自区域的温度设定独立定位其混合风门，允许同时向座舱两侧输送不同温度的空气。"
  },
  {
    id: 94,
    q: "What is the purpose of the aspirator tube connected to the in-car temperature sensor?",
    options: [
      "A) To provide vacuum for the mode doors",
      "B) To draw cabin air across the sensor for an accurate temperature reading",
      "C) To supply fresh air to the evaporator",
      "D) To drain condensation from the evaporator"
    ],
    answer: 1,
    explanation: "The aspirator tube uses a small amount of HVAC airflow to draw cabin air across the in-car temperature sensor. This ensures the sensor continuously samples actual cabin air temperature rather than reading the temperature of stagnant air immediately surrounding it inside the dashboard.",
    diagram: "",
    terms: ["blend_door", "blower_motor", "evaporator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Blend Door Actuator Diagnosis and Repair",
    qChinese: "连接到车内温度传感器的吸气管的作用是什么？",
    optionsChinese: [
      "A) 为模式风门提供真空",
      "B) 将座舱空气吸过传感器以获得准确的温度读数",
      "C) 向蒸发器供应新鲜空气",
      "D) 排出蒸发器的冷凝水"
    ],
    explanationChinese: "吸气管利用少量HVAC气流将座舱空气吸过车内温度传感器。这确保传感器持续采样实际座舱空气温度，而不是读取仪表板内部传感器周围停滞空气的温度。"
  },
  {
    id: 95,
    q: "A technician retrieves a DTC for the blend door actuator circuit. After clearing the code, the DTC returns immediately. What should the technician do NEXT?",
    options: [
      "A) Replace the blend door actuator without further testing",
      "B) Inspect the wiring, connectors, and actuator for mechanical binding or electrical faults",
      "C) Replace the HVAC control module",
      "D) Recharge the A/C system"
    ],
    answer: 1,
    explanation: "A DTC that returns immediately after clearing indicates an active fault. Before replacing parts, the technician should inspect wiring and connectors for opens, shorts, or corrosion, and check the actuator for mechanical binding from a broken blend door or debris preventing movement.",
    diagram: "",
    terms: ["dtc", "blend_door", "scan_tool", "wiring_diagram"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "A/C System Diagnosis with Gauges",
    qChinese: "技师读取到混合风门执行器电路的DTC。清除代码后，DTC立即返回。技师下一步应该怎么做？",
    optionsChinese: [
      "A) 不做进一步测试直接更换混合风门执行器",
      "B) 检查线路、连接器和执行器是否有机械卡滞或电气故障",
      "C) 更换HVAC控制模块",
      "D) 重新充注空调系统"
    ],
    explanationChinese: "清除后立即返回的DTC表明存在当前故障。在更换零件之前，技师应检查线路和连接器是否有开路、短路或腐蚀，并检查执行器是否因混合风门损坏或碎屑阻碍运动而机械卡滞。"
  },
  {
    id: 96,
    q: "Technician A says the condenser fan relay can be tested by swapping it with an identical relay in the fuse box. Technician B says the relay can also be bench-tested using a jumper wire and test light. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Swapping the suspect relay with a known-good identical relay from the fuse box is a quick and effective diagnostic method. A relay can also be bench-tested by applying 12V to the coil terminals and using a test light or multimeter to verify the contacts close, confirming functionality.",
    diagram: "",
    terms: ["relay", "fuse", "dmm", "condenser"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Condenser Function and Diagnosis",
    qChinese: "技师A说可以通过与保险丝盒中相同的继电器互换来测试冷凝器风扇继电器。技师B说也可以使用跳线和测试灯在台架上测试继电器。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "将可疑继电器与保险丝盒中已知良好的相同继电器互换是快速有效的诊断方法。继电器也可以在台架上通过向线圈端子施加12V并使用测试灯或万用表验证触点是否闭合来确认功能。"
  },
  {
    id: 97,
    q: "All of the following sensors provide input to an automatic temperature control module EXCEPT:",
    options: [
      "A) In-car temperature sensor",
      "B) Ambient air temperature sensor",
      "C) Engine oil pressure sensor",
      "D) Sunload sensor"
    ],
    answer: 2,
    explanation: "The ATC module uses inputs from the in-car temperature sensor, ambient temperature sensor, sunload sensor, evaporator temperature sensor, and coolant temperature sensor to calculate heating and cooling demand. The engine oil pressure sensor is unrelated to HVAC operation.",
    diagram: "",
    terms: ["oil_pressure", "coolant_temperature_sensor", "blend_door", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "A/C System Diagnosis with Gauges",
    qChinese: "以下所有传感器都向自动温控模块提供输入，除了：",
    optionsChinese: [
      "A) 车内温度传感器",
      "B) 环境空气温度传感器",
      "C) 发动机机油压力传感器",
      "D) 日照传感器"
    ],
    explanationChinese: "ATC模块使用车内温度传感器、环境温度传感器、日照传感器、蒸发器温度传感器和冷却液温度传感器的输入来计算加热和制冷需求。发动机机油压力传感器与HVAC操作无关。"
  },
  {
    id: 98,
    q: "A blower motor operates but makes a loud squealing noise. What is the MOST likely cause?",
    options: [
      "A) A clogged cabin air filter",
      "B) Worn blower motor bearings or debris in the blower wheel",
      "C) An overcharged A/C system",
      "D) A faulty blower motor resistor"
    ],
    answer: 1,
    explanation: "A squealing or grinding noise from a blower motor typically indicates worn bearings or foreign debris caught in the blower wheel (squirrel cage). Leaves, acorns, or other material can enter through the fresh air intake and contact the spinning wheel, producing noise during operation.",
    diagram: "",
    terms: ["blower_motor", "cabin_air_filter", "multipoint_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Blower Motor and Resistor Diagnosis",
    qChinese: "鼓风机电机运行但发出尖锐的啸叫声。最可能的原因是什么？",
    optionsChinese: [
      "A) 座舱空气滤清器堵塞",
      "B) 鼓风机电机轴承磨损或鼓风机叶轮中有碎屑",
      "C) 空调系统充注过量",
      "D) 鼓风机电机电阻器故障"
    ],
    explanationChinese: "鼓风机电机发出啸叫或研磨声通常表明轴承磨损或外来碎屑卡在鼓风机叶轮（鼠笼式）中。树叶、果壳或其他材料可以通过新鲜空气进气口进入并接触旋转的叶轮，在运行期间产生噪音。"
  },
  {
    id: 99,
    q: "In a semi-automatic temperature control system, which function is typically controlled manually by the driver?",
    options: [
      "A) Blend door position",
      "B) Compressor clutch engagement",
      "C) Blower motor speed",
      "D) Condenser fan speed"
    ],
    answer: 2,
    explanation: "In a semi-automatic temperature control (SATC) system, the control module automatically adjusts the blend door and compressor operation to maintain the set temperature, but the driver manually selects the blower motor speed. Full ATC systems automate blower speed as well.",
    diagram: "",
    terms: ["blower_motor", "blend_door", "compressor", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Blower Motor and Resistor Diagnosis",
    qChinese: "在半自动温控系统中，哪项功能通常由驾驶员手动控制？",
    optionsChinese: [
      "A) 混合风门位置",
      "B) 压缩机离合器接合",
      "C) 鼓风机电机速度",
      "D) 冷凝器风扇速度"
    ],
    explanationChinese: "在半自动温控（SATC）系统中，控制模块自动调节混合风门和压缩机运行以维持设定温度，但驾驶员手动选择鼓风机电机速度。全自动ATC系统也会自动调节鼓风机速度。"
  },
  {
    id: 100,
    q: "Technician A says a HVAC control head with a digital display that is blank could have a power or ground fault. Technician B says a faulty control head can prevent all HVAC functions from operating. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "A blank digital display on the HVAC control head can result from a loss of power or ground to the unit. Since the control head sends commands to all HVAC actuators, relays, and the blower, a completely failed control head can render all HVAC functions inoperative until repaired or replaced.",
    diagram: "",
    terms: ["ground_circuit", "fuse", "blower_motor", "blend_door"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "A/C System Diagnosis with Gauges",
    qChinese: "技师A说HVAC控制面板的数字显示屏空白可能是电源或接地故障。技师B说控制面板故障可能导致所有HVAC功能无法运行。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "HVAC控制面板上数字显示屏空白可能是由于该装置的电源或接地中断。由于控制面板向所有HVAC执行器、继电器和鼓风机发送命令，控制面板完全失效会导致所有HVAC功能无法运行，直到维修或更换。"
  }
];
