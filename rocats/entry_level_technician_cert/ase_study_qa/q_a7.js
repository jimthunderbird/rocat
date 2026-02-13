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
  },
  // ============================================================
  // ADDITIONAL HVAC QUESTIONS (Questions 101–200)
  // ============================================================
  {
    id: 101,
    q: "What component in an A/C system changes low-pressure refrigerant gas into high-pressure refrigerant gas?",
    options: [
      "A) Condenser",
      "B) Compressor",
      "C) Evaporator",
      "D) Expansion valve"
    ],
    answer: 1,
    explanation: "The compressor is the heart of the A/C system. It receives low-pressure refrigerant vapor from the evaporator and compresses it into high-pressure, high-temperature gas. This pressurized gas then flows to the condenser where it releases heat and changes state to a liquid.",
    diagram: "",
    terms: ["compressor", "refrigerant", "evaporator", "condenser"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "How Car Air Conditioning Works",
    qChinese: "空调系统中哪个部件将低压制冷剂气体转化为高压制冷剂气体？",
    optionsChinese: [
      "A) 冷凝器",
      "B) 压缩机",
      "C) 蒸发器",
      "D) 膨胀阀"
    ],
    explanationChinese: "压缩机是空调系统的核心。它从蒸发器接收低压制冷剂蒸气并将其压缩为高压高温气体。然后这种加压气体流向冷凝器，在那里释放热量并转变为液态。"
  },
  {
    id: 102,
    q: "Which component is located between the condenser and the evaporator in a TXV-based A/C system and stores liquid refrigerant?",
    options: [
      "A) Accumulator",
      "B) Compressor",
      "C) Receiver-drier",
      "D) Suction line"
    ],
    answer: 2,
    explanation: "The receiver-drier is used in TXV (thermostatic expansion valve) systems. It is located on the high-pressure side between the condenser and the expansion valve. It stores liquid refrigerant, removes moisture with a desiccant, and filters debris from the system.",
    diagram: "",
    terms: ["receiver_drier", "condenser", "expansion_valve", "refrigerant"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "Thermal Expansion Valve Explained",
    qChinese: "在基于TXV的空调系统中，哪个部件位于冷凝器和蒸发器之间并储存液态制冷剂？",
    optionsChinese: [
      "A) 蓄液器",
      "B) 压缩机",
      "C) 储液干燥器",
      "D) 吸气管"
    ],
    explanationChinese: "储液干燥器用于TXV（热力膨胀阀）系统。它位于冷凝器和膨胀阀之间的高压侧。它储存液态制冷剂，用干燥剂去除水分，并过滤系统中的碎屑。"
  },
  {
    id: 103,
    q: "In an orifice tube A/C system, which component is located on the low-pressure side between the evaporator and the compressor?",
    options: [
      "A) Receiver-drier",
      "B) Condenser",
      "C) Accumulator",
      "D) Expansion valve"
    ],
    answer: 2,
    explanation: "The accumulator is used in orifice tube systems. It is located on the low-pressure suction side between the evaporator outlet and the compressor inlet. It stores excess liquid refrigerant, contains desiccant to remove moisture, and ensures only vapor reaches the compressor.",
    diagram: "",
    terms: ["accumulator", "orifice_tube", "compressor", "evaporator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "How Car Air Conditioning Works",
    qChinese: "在孔管式空调系统中，哪个部件位于蒸发器和压缩机之间的低压侧？",
    optionsChinese: [
      "A) 储液干燥器",
      "B) 冷凝器",
      "C) 蓄液器",
      "D) 膨胀阀"
    ],
    explanationChinese: "蓄液器用于孔管式系统。它位于蒸发器出口和压缩机进口之间的低压吸气侧。它储存多余的液态制冷剂，含有干燥剂去除水分，并确保只有蒸气到达压缩机。"
  },
  {
    id: 104,
    q: "What is the primary purpose of the condenser in an automotive A/C system?",
    options: [
      "A) To absorb heat from the passenger compartment",
      "B) To compress refrigerant gas",
      "C) To reject heat from the refrigerant to the outside air",
      "D) To meter refrigerant flow into the evaporator"
    ],
    answer: 2,
    explanation: "The condenser is a heat exchanger mounted in front of the radiator. It receives high-pressure, high-temperature refrigerant gas from the compressor and rejects heat to the outside air. As the refrigerant cools, it condenses from a gas into a high-pressure liquid.",
    diagram: "",
    terms: ["condenser", "compressor", "refrigerant", "evaporator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "How Car Air Conditioning Works",
    qChinese: "汽车空调系统中冷凝器的主要作用是什么？",
    optionsChinese: [
      "A) 吸收乘客舱的热量",
      "B) 压缩制冷剂气体",
      "C) 将制冷剂的热量排放到外部空气中",
      "D) 计量进入蒸发器的制冷剂流量"
    ],
    explanationChinese: "冷凝器是安装在散热器前方的热交换器。它从压缩机接收高压高温制冷剂气体，并将热量排放到外部空气中。当制冷剂冷却时，它从气态冷凝为高压液态。"
  },
  {
    id: 105,
    q: "A vehicle's A/C system has both high-side and low-side pressures that are higher than normal. What is the MOST likely cause?",
    options: [
      "A) Low refrigerant charge",
      "B) Overcharged system or poor condenser airflow",
      "C) A stuck-open expansion valve",
      "D) A faulty evaporator temperature sensor"
    ],
    answer: 1,
    explanation: "When both high-side and low-side pressures are above specification, the system is likely overcharged with refrigerant or the condenser cannot dissipate heat properly due to restricted airflow. A faulty condenser fan, debris blocking the condenser, or excess refrigerant all cause elevated pressures.",
    diagram: "",
    terms: ["condenser", "refrigerant", "manifold_gauge", "compressor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "A/C System Diagnosis with Gauges",
    qChinese: "车辆空调系统的高压侧和低压侧压力都高于正常值。最可能的原因是什么？",
    optionsChinese: [
      "A) 制冷剂充注不足",
      "B) 系统充注过量或冷凝器气流不良",
      "C) 膨胀阀卡在打开位置",
      "D) 蒸发器温度传感器故障"
    ],
    explanationChinese: "当高压侧和低压侧压力都高于规格时，系统可能制冷剂充注过量，或冷凝器由于气流受阻无法正常散热。冷凝器风扇故障、碎屑阻挡冷凝器或制冷剂过量都会导致压力升高。"
  },
  {
    id: 106,
    q: "Both high-side and low-side A/C pressures are lower than normal. What is the MOST likely cause?",
    options: [
      "A) An overcharged system",
      "B) A restricted condenser",
      "C) Low refrigerant charge due to a leak",
      "D) A stuck-closed blend door"
    ],
    answer: 2,
    explanation: "When both high-side and low-side pressures are below normal specifications, the system is low on refrigerant, usually due to a leak. With less refrigerant circulating, there is less pressure throughout the entire system. A leak test should be performed to find and repair the source.",
    diagram: "",
    terms: ["refrigerant", "manifold_gauge", "compressor", "condenser"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "A/C System Diagnosis with Gauges",
    qChinese: "空调的高压侧和低压侧压力都低于正常值。最可能的原因是什么？",
    optionsChinese: [
      "A) 系统充注过量",
      "B) 冷凝器受限",
      "C) 由于泄漏导致制冷剂不足",
      "D) 混合风门卡在关闭位置"
    ],
    explanationChinese: "当高压侧和低压侧压力都低于正常规格时，系统制冷剂不足，通常是由于泄漏。随着循环的制冷剂减少，整个系统的压力降低。应进行泄漏测试以找到并修复泄漏源。"
  },
  {
    id: 107,
    q: "What federal regulation governs the handling and recovery of automotive refrigerants in the United States?",
    options: [
      "A) OSHA Section 301",
      "B) EPA Section 609",
      "C) DOT Section 410",
      "D) NHTSA Regulation 208"
    ],
    answer: 1,
    explanation: "EPA Section 609 of the Clean Air Act specifically governs the service and repair of motor vehicle air conditioning systems. It requires technician certification, prohibits venting refrigerants, and mandates the use of approved recovery and recycling equipment for automotive refrigerants.",
    diagram: "",
    terms: ["refrigerant", "compressor", "r134a"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=_z1LchPP5GQ",
    youtubeTitle: "R-134a vs R-1234yf Refrigerant Explained",
    qChinese: "在美国，哪项联邦法规管理汽车制冷剂的处理和回收？",
    optionsChinese: [
      "A) OSHA第301条",
      "B) EPA第609条",
      "C) DOT第410条",
      "D) NHTSA法规208"
    ],
    explanationChinese: "EPA（美国环保署）《清洁空气法》第609条专门管理机动车空调系统的维修和保养。它要求技师取得认证，禁止排放制冷剂，并强制使用经批准的回收和再生设备处理汽车制冷剂。"
  },
  {
    id: 108,
    q: "What is the function of the blend door in an HVAC system?",
    options: [
      "A) It directs airflow to different outlets (floor, dash, defrost)",
      "B) It mixes heated and cooled air to achieve the desired temperature",
      "C) It controls the amount of outside air entering the system",
      "D) It prevents refrigerant from flooding the compressor"
    ],
    answer: 1,
    explanation: "The blend door (also called a temperature door) controls the mix of heated and cooled air passing through the HVAC case. By adjusting its position, it directs varying amounts of air over the heater core and evaporator to achieve the desired cabin temperature set by the driver.",
    diagram: "",
    terms: ["blend_door", "heater_core", "evaporator", "blower_motor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Blend Door Actuator Replacement",
    qChinese: "HVAC系统中混合风门的功能是什么？",
    optionsChinese: [
      "A) 将气流引导到不同的出风口（脚部、仪表板、除霜）",
      "B) 混合加热和冷却的空气以达到所需温度",
      "C) 控制进入系统的外部空气量",
      "D) 防止制冷剂涌入压缩机"
    ],
    explanationChinese: "混合风门（也称为温度风门）控制通过HVAC壳体的加热和冷却空气的混合比例。通过调整其位置，它引导不同数量的空气流过加热器芯和蒸发器，以达到驾驶员设定的车内温度。"
  },
  {
    id: 109,
    q: "A customer complains of a sweet smell inside the vehicle and the windshield fogs up on the inside. What is the MOST likely cause?",
    options: [
      "A) A leaking evaporator core",
      "B) A leaking heater core",
      "C) A clogged cabin air filter",
      "D) A stuck-open recirculation door"
    ],
    answer: 1,
    explanation: "A sweet smell (from ethylene glycol coolant) combined with interior windshield fogging is a classic symptom of a leaking heater core. Coolant vapor escapes into the HVAC case and is blown into the cabin. The passenger floor may also be damp with coolant.",
    diagram: "",
    terms: ["heater_core", "blend_door", "blower_motor", "evaporator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Heater Core Replacement Tips",
    qChinese: "客户投诉车内有甜味并且挡风玻璃内侧起雾。最可能的原因是什么？",
    optionsChinese: [
      "A) 蒸发器芯泄漏",
      "B) 加热器芯泄漏",
      "C) 座舱空气滤清器堵塞",
      "D) 再循环风门卡在打开位置"
    ],
    explanationChinese: "甜味（来自乙二醇冷却液）加上挡风玻璃内侧起雾是加热器芯泄漏的典型症状。冷却液蒸气从HVAC壳体逸出并吹入车内。乘客侧地板也可能被冷却液浸湿。"
  },
  {
    id: 110,
    q: "What refrigerant is being used in most newer vehicles as a replacement for R-134a?",
    options: [
      "A) R-12",
      "B) R-22",
      "C) R-1234yf",
      "D) R-410a"
    ],
    answer: 2,
    explanation: "R-1234yf (HFO-1234yf) is the replacement refrigerant for R-134a in most newer vehicles. It has a much lower global warming potential (GWP) than R-134a. R-1234yf is classified as mildly flammable (A2L) and requires dedicated service equipment and special handling procedures.",
    diagram: "",
    terms: ["refrigerant", "r134a", "compressor", "condenser"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=_z1LchPP5GQ",
    youtubeTitle: "R-134a vs R-1234yf Refrigerant Explained",
    qChinese: "大多数较新的车辆使用什么制冷剂来替代R-134a？",
    optionsChinese: [
      "A) R-12",
      "B) R-22",
      "C) R-1234yf",
      "D) R-410a"
    ],
    explanationChinese: "R-1234yf（HFO-1234yf）是大多数较新车辆中R-134a的替代制冷剂。它的全球变暖潜值（GWP）远低于R-134a。R-1234yf被归类为微可燃（A2L），需要专用维修设备和特殊处理程序。"
  },
  {
    id: 111,
    q: "Technician A says the A/C compressor clutch uses an electromagnetic coil to engage the compressor. Technician B says a clutchless compressor uses an internal valve to control displacement. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. A traditional compressor clutch uses an electromagnetic coil that, when energized, pulls the clutch plate against the pulley to engage the compressor. Variable displacement clutchless compressors run continuously and use an internal control valve to vary displacement.",
    diagram: "",
    terms: ["ac_clutch", "compressor", "refrigerant", "evaporator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Compressor Clutch Explained",
    qChinese: "技师A说空调压缩机离合器使用电磁线圈来接合压缩机。技师B说无离合器压缩机使用内部阀门控制排量。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都正确。传统的压缩机离合器使用电磁线圈，通电时将离合器盘拉向皮带轮以接合压缩机。可变排量无离合器压缩机持续运转，使用内部控制阀来改变排量。"
  },
  {
    id: 112,
    q: "What is the correct procedure before opening an A/C system for repair?",
    options: [
      "A) Discharge the refrigerant to the atmosphere",
      "B) Recover the refrigerant using approved equipment",
      "C) Add dye to locate the leak first",
      "D) Flush the system with solvent"
    ],
    answer: 1,
    explanation: "Before opening any A/C system for repair, the refrigerant must be recovered using approved recovery equipment. It is illegal under EPA Section 609 to intentionally vent or release refrigerant into the atmosphere. The recovered refrigerant can be recycled and reused after proper processing.",
    diagram: "",
    terms: ["refrigerant", "compressor", "r134a", "manifold_gauge"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=_z1LchPP5GQ",
    youtubeTitle: "Refrigerant Recovery and Recharge",
    qChinese: "在打开空调系统进行维修之前，正确的程序是什么？",
    optionsChinese: [
      "A) 将制冷剂排放到大气中",
      "B) 使用经批准的设备回收制冷剂",
      "C) 先加入染料定位泄漏",
      "D) 用溶剂冲洗系统"
    ],
    explanationChinese: "在打开任何空调系统进行维修之前，必须使用经批准的回收设备回收制冷剂。根据EPA第609条，故意向大气排放制冷剂是违法的。回收的制冷剂经过适当处理后可以再生和重复使用。"
  },
  {
    id: 113,
    q: "What is the purpose of evacuating an A/C system with a vacuum pump?",
    options: [
      "A) To charge the system with refrigerant",
      "B) To remove air and moisture from the system",
      "C) To test the compressor output",
      "D) To flush contaminants from the condenser"
    ],
    answer: 1,
    explanation: "Evacuating an A/C system with a vacuum pump removes air and moisture from the system. The deep vacuum (typically 29.92 inches Hg or below 500 microns) lowers the boiling point of water so moisture evaporates and is drawn out. Air and moisture cause poor performance and component damage.",
    diagram: "",
    terms: ["refrigerant", "compressor", "receiver_drier", "accumulator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "A/C System Evacuation and Recharge",
    qChinese: "用真空泵对空调系统抽真空的目的是什么？",
    optionsChinese: [
      "A) 向系统充注制冷剂",
      "B) 从系统中去除空气和水分",
      "C) 测试压缩机输出",
      "D) 冲洗冷凝器中的污染物"
    ],
    explanationChinese: "用真空泵对空调系统抽真空可以去除系统中的空气和水分。深度真空（通常为29.92英寸汞柱或低于500微米）降低了水的沸点，使水分蒸发并被抽出。空气和水分会导致性能不佳和部件损坏。"
  },
  {
    id: 114,
    q: "A cabin air filter is severely clogged. What symptom will the driver MOST likely notice?",
    options: [
      "A) The A/C compressor cycles rapidly",
      "B) Reduced airflow from the HVAC vents",
      "C) The engine overheats",
      "D) Refrigerant pressure is too high"
    ],
    answer: 1,
    explanation: "A severely clogged cabin air filter restricts airflow through the HVAC system, resulting in noticeably reduced airflow from the vents regardless of blower speed setting. The blower motor may also become noisier as it works harder against the restriction. Regular replacement is recommended.",
    diagram: "",
    terms: ["cabin_air_filter", "blower_motor", "evaporator", "blend_door"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Cabin Air Filter Replacement",
    qChinese: "座舱空气滤清器严重堵塞。驾驶员最可能注意到什么症状？",
    optionsChinese: [
      "A) 空调压缩机快速循环",
      "B) HVAC出风口气流减少",
      "C) 发动机过热",
      "D) 制冷剂压力过高"
    ],
    explanationChinese: "严重堵塞的座舱空气滤清器限制了通过HVAC系统的气流，导致无论鼓风机速度设置如何，出风口的气流都明显减少。鼓风机电机在克服阻力时也可能变得更嘈杂。建议定期更换。"
  },
  {
    id: 115,
    q: "Which leak detection method uses a fluorescent additive injected into the A/C system?",
    options: [
      "A) Electronic leak detector",
      "B) Soap bubble test",
      "C) UV dye test",
      "D) Nitrogen pressure test"
    ],
    answer: 2,
    explanation: "The UV dye test involves injecting a fluorescent dye into the A/C system. After the system operates, a UV/blacklight is used to inspect all fittings, hoses, and components. The dye glows brightly under UV light at the leak location, making even small leaks easy to identify visually.",
    diagram: "",
    terms: ["refrigerant", "compressor", "condenser", "evaporator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "A/C Leak Detection Methods",
    qChinese: "哪种泄漏检测方法使用注入空调系统的荧光添加剂？",
    optionsChinese: [
      "A) 电子检漏仪",
      "B) 肥皂泡测试",
      "C) 紫外线染料测试",
      "D) 氮气压力测试"
    ],
    explanationChinese: "紫外线染料测试是将荧光染料注入空调系统。系统运行后，使用紫外线/黑光灯检查所有接头、软管和部件。染料在泄漏位置的紫外线下发出明亮的光，使即使是小的泄漏也容易被目视识别。"
  },
  {
    id: 116,
    q: "The blower motor only works on the highest speed setting. What is the MOST likely cause?",
    options: [
      "A) A faulty blower motor",
      "B) A failed blower motor resistor or control module",
      "C) A clogged evaporator core",
      "D) A blown A/C fuse"
    ],
    answer: 1,
    explanation: "The blower motor resistor (or electronic control module on newer vehicles) controls blower speed by varying resistance or voltage. When it fails, only the highest speed works because that speed bypasses the resistor through a direct circuit. Lower speeds require the resistor to reduce voltage.",
    diagram: "",
    terms: ["blower_motor", "cabin_air_filter", "blend_door", "evaporator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Blower Motor and Resistor Diagnosis",
    qChinese: "鼓风机电机仅在最高速设置下工作。最可能的原因是什么？",
    optionsChinese: [
      "A) 鼓风机电机故障",
      "B) 鼓风机电机电阻器或控制模块失效",
      "C) 蒸发器芯堵塞",
      "D) 空调保险丝烧断"
    ],
    explanationChinese: "鼓风机电机电阻器（或较新车辆上的电子控制模块）通过改变电阻或电压来控制鼓风机速度。当它失效时，只有最高速工作，因为该速度通过直接电路绕过电阻器。较低速度需要电阻器来降低电压。"
  },
  {
    id: 117,
    q: "What type of oil is typically used in an R-134a A/C system?",
    options: [
      "A) Mineral oil",
      "B) PAG (polyalkylene glycol) oil",
      "C) Conventional engine oil",
      "D) Silicone-based oil"
    ],
    answer: 1,
    explanation: "R-134a A/C systems use PAG (polyalkylene glycol) oil for compressor lubrication. PAG oil is hygroscopic, meaning it readily absorbs moisture, so containers must be kept sealed. The correct viscosity (PAG 46, 100, or 150) varies by vehicle and must match the manufacturer's specification.",
    diagram: "",
    terms: ["compressor", "refrigerant", "r134a", "receiver_drier"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C System Oil and Refrigerant",
    qChinese: "R-134a空调系统通常使用哪种类型的油？",
    optionsChinese: [
      "A) 矿物油",
      "B) PAG（聚烷二醇）油",
      "C) 传统发动机油",
      "D) 硅基油"
    ],
    explanationChinese: "R-134a空调系统使用PAG（聚烷二醇）油进行压缩机润滑。PAG油具有吸湿性，容易吸收水分，因此容器必须保持密封。正确的粘度（PAG 46、100或150）因车辆而异，必须符合制造商规格。"
  },
  {
    id: 118,
    q: "A manifold gauge set is connected to an A/C system. The blue gauge reads system pressure and the red gauge reads system pressure. Which sides do they represent?",
    options: [
      "A) Blue is high side, red is low side",
      "B) Blue is low side, red is high side",
      "C) Both read the same side",
      "D) Blue is discharge, red is suction"
    ],
    answer: 1,
    explanation: "On a manifold gauge set, the blue gauge and hose connect to the low-pressure (suction) side of the A/C system, and the red gauge and hose connect to the high-pressure (discharge) side. The yellow center hose is used for charging, recovery, or evacuation procedures.",
    diagram: "",
    terms: ["manifold_gauge", "compressor", "refrigerant", "evaporator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "How to Use A/C Manifold Gauges",
    qChinese: "歧管压力表组连接到空调系统。蓝色表和红色表分别代表哪一侧？",
    optionsChinese: [
      "A) 蓝色是高压侧，红色是低压侧",
      "B) 蓝色是低压侧，红色是高压侧",
      "C) 两者读取同一侧",
      "D) 蓝色是排气侧，红色是吸气侧"
    ],
    explanationChinese: "在歧管压力表组上，蓝色压力表和软管连接到空调系统的低压（吸气）侧，红色压力表和软管连接到高压（排气）侧。黄色中间软管用于充注、回收或抽真空操作。"
  },
  {
    id: 119,
    q: "What component controls the direction of airflow to the floor, dash vents, or defrost outlets in an HVAC system?",
    options: [
      "A) Blend door",
      "B) Mode door",
      "C) Recirculation door",
      "D) Heater control valve"
    ],
    answer: 1,
    explanation: "The mode door (also called the function door or panel door) directs airflow to the various HVAC outlets including floor, dash (panel) vents, and defrost. It is controlled by a cable, vacuum actuator, or electric actuator depending on the vehicle. The blend door controls temperature, not direction.",
    diagram: "",
    terms: ["blend_door", "blower_motor", "evaporator", "heater_core"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "HVAC Mode Door Actuator Diagnosis",
    qChinese: "在HVAC系统中，哪个部件控制气流方向到地板、仪表板出风口或除霜出风口？",
    optionsChinese: [
      "A) 混合风门",
      "B) 模式风门",
      "C) 再循环风门",
      "D) 加热器控制阀"
    ],
    explanationChinese: "模式风门（也称为功能风门或面板风门）将气流引导到各个HVAC出风口，包括地板、仪表板（面板）出风口和除霜口。根据车辆不同，它由拉线、真空执行器或电动执行器控制。混合风门控制温度而非方向。"
  },
  {
    id: 120,
    q: "A heater control valve is stuck closed. What symptom will the driver experience?",
    options: [
      "A) No A/C cooling",
      "B) No heat from the HVAC system",
      "C) The blower motor does not work",
      "D) The engine runs cold"
    ],
    answer: 1,
    explanation: "The heater control valve regulates the flow of hot engine coolant into the heater core. When it is stuck closed, no hot coolant can enter the heater core, so the HVAC system cannot produce heat. The A/C and blower motor will still function normally since they are independent of the valve.",
    diagram: "",
    terms: ["heater_core", "blend_door", "blower_motor", "evaporator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Heater Control Valve Diagnosis",
    qChinese: "加热器控制阀卡在关闭位置。驾驶员会遇到什么症状？",
    optionsChinese: [
      "A) 没有空调制冷",
      "B) HVAC系统没有暖风",
      "C) 鼓风机电机不工作",
      "D) 发动机运行温度低"
    ],
    explanationChinese: "加热器控制阀调节流入加热器芯的热发动机冷却液。当它卡在关闭位置时，热冷却液无法进入加热器芯，因此HVAC系统无法产生暖风。空调和鼓风机电机仍会正常运行，因为它们与该阀门无关。"
  },
  {
    id: 121,
    q: "An A/C system shows high-side pressure that is normal but low-side pressure that is too low. What is the MOST likely cause?",
    options: [
      "A) An overcharged system",
      "B) A restriction in the high-pressure line",
      "C) A restriction at the orifice tube or TXV",
      "D) A slipping compressor clutch"
    ],
    answer: 2,
    explanation: "Normal high-side pressure with abnormally low low-side pressure indicates a restriction on the metering device side. A clogged orifice tube or stuck-closed TXV restricts refrigerant flow into the evaporator, causing starvation on the low side while the high side remains relatively normal.",
    diagram: "",
    terms: ["orifice_tube", "expansion_valve", "manifold_gauge", "evaporator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "A/C System Diagnosis with Gauges",
    qChinese: "空调系统高压侧压力正常但低压侧压力过低。最可能的原因是什么？",
    optionsChinese: [
      "A) 系统充注过量",
      "B) 高压管路中有限制",
      "C) 孔管或TXV处有限制",
      "D) 压缩机离合器打滑"
    ],
    explanationChinese: "高压侧压力正常但低压侧压力异常低表明计量装置侧有限制。堵塞的孔管或卡在关闭位置的TXV限制了制冷剂流入蒸发器，导致低压侧供给不足，而高压侧保持相对正常。"
  },
  {
    id: 122,
    q: "What happens to refrigerant as it passes through the expansion valve or orifice tube?",
    options: [
      "A) It changes from a gas to a liquid",
      "B) It is compressed to a higher pressure",
      "C) It drops in pressure and temperature rapidly",
      "D) It is heated by the engine coolant"
    ],
    answer: 2,
    explanation: "As high-pressure liquid refrigerant passes through the metering device (TXV or orifice tube), it experiences a rapid drop in pressure. This pressure drop causes the refrigerant temperature to decrease significantly, creating the cold, low-pressure mixture that enters the evaporator to absorb cabin heat.",
    diagram: "",
    terms: ["expansion_valve", "orifice_tube", "refrigerant", "evaporator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "How the Refrigeration Cycle Works",
    qChinese: "制冷剂通过膨胀阀或孔管时会发生什么？",
    optionsChinese: [
      "A) 从气态变为液态",
      "B) 被压缩到更高压力",
      "C) 压力和温度迅速下降",
      "D) 被发动机冷却液加热"
    ],
    explanationChinese: "当高压液态制冷剂通过计量装置（TXV或孔管）时，它经历压力的急剧下降。这种压力下降导致制冷剂温度显著降低，产生进入蒸发器吸收车内热量的低温低压混合物。"
  },
  {
    id: 123,
    q: "Where does the evaporator absorb heat in an automotive A/C system?",
    options: [
      "A) From the engine compartment",
      "B) From the refrigerant in the high-pressure line",
      "C) From the air in the passenger compartment",
      "D) From the condenser"
    ],
    answer: 2,
    explanation: "The evaporator is located inside the HVAC housing in the dashboard area. The blower motor forces cabin air across the evaporator fins. Cold, low-pressure refrigerant inside the evaporator absorbs heat from this passing air, cooling the air before it enters the passenger compartment.",
    diagram: "",
    terms: ["evaporator", "blower_motor", "refrigerant", "compressor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "How Car Air Conditioning Works",
    qChinese: "在汽车空调系统中，蒸发器从哪里吸收热量？",
    optionsChinese: [
      "A) 从发动机舱",
      "B) 从高压管路中的制冷剂",
      "C) 从乘客舱的空气中",
      "D) 从冷凝器"
    ],
    explanationChinese: "蒸发器位于仪表板区域的HVAC壳体内。鼓风机电机将车内空气强制吹过蒸发器翅片。蒸发器内的低温低压制冷剂吸收通过空气的热量，在空气进入乘客舱之前对其进行冷却。"
  },
  {
    id: 124,
    q: "What is the purpose of the desiccant found in the receiver-drier and accumulator?",
    options: [
      "A) To lubricate the compressor",
      "B) To filter refrigerant oil",
      "C) To absorb moisture from the refrigerant",
      "D) To regulate refrigerant pressure"
    ],
    answer: 2,
    explanation: "The desiccant (a moisture-absorbing material such as silica gel or molecular sieve) inside the receiver-drier or accumulator absorbs moisture from the refrigerant. Moisture in the system can form corrosive acids, cause freezing at the metering device, and damage internal components.",
    diagram: "",
    terms: ["receiver_drier", "accumulator", "refrigerant", "expansion_valve"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "Receiver Drier and Accumulator Explained",
    qChinese: "储液干燥器和蓄液器中干燥剂的作用是什么？",
    optionsChinese: [
      "A) 润滑压缩机",
      "B) 过滤制冷剂油",
      "C) 吸收制冷剂中的水分",
      "D) 调节制冷剂压力"
    ],
    explanationChinese: "储液干燥器或蓄液器内的干燥剂（如硅胶或分子筛等吸湿材料）吸收制冷剂中的水分。系统中的水分可能形成腐蚀性酸，导致计量装置处结冰，并损坏内部部件。"
  },
  {
    id: 125,
    q: "A technician is recharging an A/C system. How should liquid refrigerant be added to the system?",
    options: [
      "A) Through the low-pressure service port with the engine off",
      "B) Through the high-pressure service port with the engine running",
      "C) Through the low-pressure service port with the engine running as a vapor",
      "D) Directly into the compressor"
    ],
    answer: 2,
    explanation: "When recharging an A/C system, refrigerant is added as a vapor through the low-pressure (suction) service port with the engine running and the A/C on maximum. The running compressor draws the vapor in. Liquid refrigerant must never be fed directly into the low side as it could damage the compressor.",
    diagram: "",
    terms: ["refrigerant", "compressor", "manifold_gauge", "r134a"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=_z1LchPP5GQ",
    youtubeTitle: "How to Recharge Your Car A/C System",
    qChinese: "技师正在给空调系统充注制冷剂。应如何向系统添加制冷剂？",
    optionsChinese: [
      "A) 发动机关闭时通过低压维修口",
      "B) 发动机运行时通过高压维修口",
      "C) 发动机运行时通过低压维修口以蒸气形式添加",
      "D) 直接加入压缩机"
    ],
    explanationChinese: "给空调系统充注时，制冷剂以蒸气形式通过低压（吸气）维修口添加，发动机运行且空调设置为最大。运行中的压缩机吸入蒸气。液态制冷剂绝不能直接送入低压侧，因为这可能损坏压缩机。"
  },
  {
    id: 126,
    q: "Technician A says a refrigerant identifier should be used before recovering refrigerant from an unknown vehicle. Technician B says mixing different refrigerant types in recovery equipment is acceptable. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Technician A is correct. A refrigerant identifier must be used to verify refrigerant purity and type before recovery to prevent contamination of recovery equipment. Mixing different refrigerant types (such as R-134a and R-1234yf or contaminated blends) in recovery machines damages equipment and violates regulations.",
    diagram: "",
    terms: ["refrigerant", "r134a", "compressor", "manifold_gauge"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=_z1LchPP5GQ",
    youtubeTitle: "Refrigerant Identification and Recovery",
    qChinese: "技师A说在从未知车辆回收制冷剂之前应使用制冷剂识别器。技师B说在回收设备中混合不同类型的制冷剂是可以接受的。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "技师A正确。在回收前必须使用制冷剂识别器验证制冷剂的纯度和类型，以防止回收设备被污染。在回收机中混合不同类型的制冷剂（如R-134a和R-1234yf或受污染的混合物）会损坏设备并违反法规。"
  },
  {
    id: 127,
    q: "What does the low-pressure cut-off switch do in an A/C system?",
    options: [
      "A) It prevents the compressor from running if refrigerant pressure is too low",
      "B) It activates the condenser fan at high speed",
      "C) It controls the blend door position",
      "D) It regulates the blower motor speed"
    ],
    answer: 0,
    explanation: "The low-pressure cut-off switch (also called the cycling clutch switch) monitors low-side pressure and disengages the compressor clutch if pressure drops below a set threshold. This protects the compressor from damage due to low refrigerant charge or loss of lubrication oil.",
    diagram: "",
    terms: ["compressor", "ac_clutch", "refrigerant", "evaporator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Pressure Switch Operation",
    qChinese: "空调系统中低压切断开关的作用是什么？",
    optionsChinese: [
      "A) 当制冷剂压力过低时防止压缩机运行",
      "B) 激活冷凝器风扇高速运转",
      "C) 控制混合风门位置",
      "D) 调节鼓风机电机速度"
    ],
    explanationChinese: "低压切断开关（也称为循环离合器开关）监控低压侧压力，当压力降至设定阈值以下时脱开压缩机离合器。这保护压缩机免受制冷剂不足或润滑油损失造成的损坏。"
  },
  {
    id: 128,
    q: "A high-pressure cut-off switch opens the compressor clutch circuit. What condition is MOST likely present?",
    options: [
      "A) The system is low on refrigerant",
      "B) The system pressure has exceeded a safe limit",
      "C) The evaporator is frozen",
      "D) The blower motor has failed"
    ],
    answer: 1,
    explanation: "The high-pressure cut-off switch disengages the compressor clutch when high-side pressure exceeds a safe limit, typically around 400-450 psi. This can be caused by an overcharged system, a blocked condenser, a failed condenser fan, or restricted airflow. It prevents compressor and hose damage.",
    diagram: "",
    terms: ["compressor", "ac_clutch", "condenser", "refrigerant"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C High Pressure Switch Diagnosis",
    qChinese: "高压切断开关断开了压缩机离合器电路。最可能存在什么情况？",
    optionsChinese: [
      "A) 系统制冷剂不足",
      "B) 系统压力已超过安全极限",
      "C) 蒸发器结冰",
      "D) 鼓风机电机失效"
    ],
    explanationChinese: "当高压侧压力超过安全极限（通常约400-450 psi）时，高压切断开关脱开压缩机离合器。这可能由系统充注过量、冷凝器堵塞、冷凝器风扇故障或气流受限引起。它防止压缩机和软管损坏。"
  },
  {
    id: 129,
    q: "What is the function of the A/C compressor clutch relay?",
    options: [
      "A) It provides variable speed control to the compressor",
      "B) It supplies high current to the compressor clutch coil when energized by the control circuit",
      "C) It regulates refrigerant pressure",
      "D) It controls the condenser fan speed"
    ],
    answer: 1,
    explanation: "The A/C compressor clutch relay is an electromagnetic switch controlled by the PCM or A/C control module. When energized, it closes the high-current circuit to the compressor clutch coil, engaging the clutch. The relay allows a small control signal to switch the larger clutch coil current.",
    diagram: "",
    terms: ["ac_clutch", "compressor", "refrigerant", "evaporator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Compressor Clutch Relay Test",
    qChinese: "空调压缩机离合器继电器的功能是什么？",
    optionsChinese: [
      "A) 为压缩机提供可变速度控制",
      "B) 当控制电路通电时向压缩机离合器线圈提供大电流",
      "C) 调节制冷剂压力",
      "D) 控制冷凝器风扇速度"
    ],
    explanationChinese: "空调压缩机离合器继电器是由PCM或空调控制模块控制的电磁开关。通电时，它闭合到压缩机离合器线圈的大电流电路，接合离合器。继电器允许小的控制信号来切换较大的离合器线圈电流。"
  },
  {
    id: 130,
    q: "During A/C service, why must the system be evacuated for a minimum of 30 minutes?",
    options: [
      "A) To fully charge the refrigerant",
      "B) To allow the compressor oil to circulate",
      "C) To ensure all air and moisture are removed",
      "D) To cool down the condenser"
    ],
    answer: 2,
    explanation: "A minimum 30-minute evacuation ensures the vacuum pump removes all air and moisture from the system. Under deep vacuum, the boiling point of water drops significantly, causing trapped moisture to boil off and be extracted. Insufficient evacuation leaves moisture that causes corrosion and ice blockage.",
    diagram: "",
    terms: ["refrigerant", "receiver_drier", "accumulator", "compressor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "A/C System Evacuation Procedure",
    qChinese: "在空调维修期间，为什么系统必须至少抽真空30分钟？",
    optionsChinese: [
      "A) 为了完全充注制冷剂",
      "B) 为了让压缩机油循环",
      "C) 为了确保所有空气和水分被去除",
      "D) 为了冷却冷凝器"
    ],
    explanationChinese: "最少30分钟的抽真空确保真空泵从系统中去除所有空气和水分。在深度真空下，水的沸点显著降低，使被困的水分沸腾并被抽出。抽真空不充分会留下导致腐蚀和结冰堵塞的水分。"
  },
  {
    id: 131,
    q: "A technician notices frost forming on the outside of the A/C accumulator. What does this indicate?",
    options: [
      "A) The system is working normally",
      "B) The system is overcharged",
      "C) Liquid refrigerant is reaching the accumulator, possibly indicating a flooding evaporator",
      "D) The condenser is restricted"
    ],
    answer: 2,
    explanation: "Frost on the accumulator exterior indicates liquid refrigerant is present at that point, which means the evaporator is being flooded with more refrigerant than it can evaporate. This can be caused by an overcharge, a stuck-open metering device, or low airflow across the evaporator.",
    diagram: "",
    terms: ["accumulator", "evaporator", "orifice_tube", "refrigerant"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "A/C System Frost Diagnosis",
    qChinese: "技师注意到空调蓄液器外部结霜。这表明什么？",
    optionsChinese: [
      "A) 系统工作正常",
      "B) 系统充注过量",
      "C) 液态制冷剂到达蓄液器，可能表明蒸发器溢流",
      "D) 冷凝器受限"
    ],
    explanationChinese: "蓄液器外部结霜表明该处存在液态制冷剂，这意味着蒸发器被超过其蒸发能力的制冷剂淹没。这可能由充注过量、计量装置卡在打开位置或蒸发器气流不足引起。"
  },
  {
    id: 132,
    q: "What is the MOST common cause of an A/C system that gradually loses cooling over several months?",
    options: [
      "A) A faulty thermostat",
      "B) A small refrigerant leak",
      "C) A worn serpentine belt",
      "D) A clogged radiator"
    ],
    answer: 1,
    explanation: "A gradual loss of cooling performance over weeks or months is typically caused by a small refrigerant leak. Refrigerant slowly escapes through a damaged O-ring, corroded fitting, or pinhole in a line or component. A leak test with UV dye or electronic detector is needed to locate the source.",
    diagram: "",
    terms: ["refrigerant", "compressor", "condenser", "evaporator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "Finding A/C Refrigerant Leaks",
    qChinese: "空调系统在几个月内逐渐失去制冷效果，最常见的原因是什么？",
    optionsChinese: [
      "A) 恒温器故障",
      "B) 制冷剂小泄漏",
      "C) 蛇形皮带磨损",
      "D) 散热器堵塞"
    ],
    explanationChinese: "在几周或几个月内制冷性能逐渐下降通常是由制冷剂小泄漏引起的。制冷剂通过损坏的O型圈、腐蚀的接头或管路或部件上的针孔缓慢逸出。需要使用紫外线染料或电子检漏仪进行泄漏测试以定位泄漏源。"
  },
  {
    id: 133,
    q: "What does the term 'subcooling' refer to in an A/C system?",
    options: [
      "A) Cooling the refrigerant below its condensing temperature in the condenser",
      "B) Heating the refrigerant above its boiling point in the evaporator",
      "C) The temperature of the cabin air",
      "D) The difference between high and low side pressures"
    ],
    answer: 0,
    explanation: "Subcooling is the amount of cooling below the condensing (saturation) temperature of the refrigerant in the condenser. It ensures the refrigerant leaving the condenser is fully liquid. Measuring subcooling helps verify proper charge level, particularly in TXV systems where it is a key diagnostic value.",
    diagram: "",
    terms: ["condenser", "refrigerant", "expansion_valve", "compressor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "Subcooling and Superheat Explained",
    qChinese: "空调系统中'过冷'一词指的是什么？",
    optionsChinese: [
      "A) 在冷凝器中将制冷剂冷却到其冷凝温度以下",
      "B) 在蒸发器中将制冷剂加热到其沸点以上",
      "C) 车内空气的温度",
      "D) 高压侧和低压侧压力之间的差异"
    ],
    explanationChinese: "过冷是指在冷凝器中制冷剂冷却到其冷凝（饱和）温度以下的量。它确保离开冷凝器的制冷剂完全是液态。测量过冷度有助于验证正确的充注量，特别是在TXV系统中，它是一个关键的诊断值。"
  },
  {
    id: 134,
    q: "What does 'superheat' measure in an A/C system?",
    options: [
      "A) The temperature of the condenser outlet",
      "B) The amount of heating above the boiling point of refrigerant at the evaporator outlet",
      "C) The cabin air temperature",
      "D) The compressor discharge temperature"
    ],
    answer: 1,
    explanation: "Superheat is the temperature increase of refrigerant vapor above its boiling (saturation) point at the evaporator outlet. It confirms that all liquid refrigerant has evaporated before reaching the compressor. Proper superheat prevents liquid slugging and indicates correct metering device operation.",
    diagram: "",
    terms: ["evaporator", "refrigerant", "compressor", "expansion_valve"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "Subcooling and Superheat Explained",
    qChinese: "空调系统中'过热度'测量的是什么？",
    optionsChinese: [
      "A) 冷凝器出口温度",
      "B) 蒸发器出口处制冷剂蒸气高于沸点的温度量",
      "C) 车内空气温度",
      "D) 压缩机排气温度"
    ],
    explanationChinese: "过热度是蒸发器出口处制冷剂蒸气高于其沸点（饱和）温度的增加量。它确认所有液态制冷剂在到达压缩机之前已经蒸发。适当的过热度防止液击并表明计量装置正确运行。"
  },
  {
    id: 135,
    q: "An A/C system has high-side pressure that is too high and low-side pressure that is also too high. The center vent temperature is warm. What is the MOST likely cause?",
    options: [
      "A) The compressor is not running",
      "B) The system is overcharged with refrigerant",
      "C) The evaporator is frozen",
      "D) The orifice tube is clogged"
    ],
    answer: 1,
    explanation: "Both high and low side pressures above normal with warm vent temperatures indicate an overcharged system. Excess refrigerant overwhelms the condenser capacity, preventing proper heat rejection. The result is elevated pressures throughout the system and poor cooling performance at the vents.",
    diagram: "",
    terms: ["refrigerant", "condenser", "manifold_gauge", "compressor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "A/C Overcharge Symptoms and Fix",
    qChinese: "空调系统高压侧压力过高，低压侧压力也过高。中央出风口温度偏暖。最可能的原因是什么？",
    optionsChinese: [
      "A) 压缩机没有运行",
      "B) 系统制冷剂充注过量",
      "C) 蒸发器结冰",
      "D) 孔管堵塞"
    ],
    explanationChinese: "高压侧和低压侧压力都高于正常值且出风口温度偏暖表明系统充注过量。过多的制冷剂超过了冷凝器的散热能力，阻碍了正常的热量排放。结果是整个系统压力升高，出风口制冷性能差。"
  },
  {
    id: 136,
    q: "Which component prevents liquid refrigerant from entering the compressor in an orifice tube system?",
    options: [
      "A) Receiver-drier",
      "B) Condenser",
      "C) Accumulator",
      "D) Expansion valve"
    ],
    answer: 2,
    explanation: "In an orifice tube system, the accumulator is positioned between the evaporator outlet and the compressor inlet. It stores liquid refrigerant that has not fully evaporated and allows only refrigerant vapor to pass to the compressor, protecting it from liquid slugging damage.",
    diagram: "",
    terms: ["accumulator", "compressor", "orifice_tube", "evaporator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "Accumulator Function in A/C System",
    qChinese: "在孔管式系统中，哪个部件防止液态制冷剂进入压缩机？",
    optionsChinese: [
      "A) 储液干燥器",
      "B) 冷凝器",
      "C) 蓄液器",
      "D) 膨胀阀"
    ],
    explanationChinese: "在孔管式系统中，蓄液器位于蒸发器出口和压缩机进口之间。它储存未完全蒸发的液态制冷剂，只允许制冷剂蒸气通过到压缩机，保护压缩机免受液击损坏。"
  },
  {
    id: 137,
    q: "A vehicle's A/C works fine at highway speeds but blows warm at idle. What is the MOST likely cause?",
    options: [
      "A) A faulty expansion valve",
      "B) An inoperative condenser cooling fan",
      "C) A clogged cabin air filter",
      "D) A faulty blower motor resistor"
    ],
    answer: 1,
    explanation: "At highway speeds, ram air flows through the condenser providing adequate cooling. At idle, the condenser fan must provide this airflow. If the fan is inoperative, the condenser cannot reject enough heat at idle, causing high-side pressure to rise and cooling performance to drop significantly.",
    diagram: "",
    terms: ["condenser", "compressor", "refrigerant", "ac_clutch"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "Condenser Fan Diagnosis",
    qChinese: "车辆在高速行驶时空调工作正常，但在怠速时吹暖风。最可能的原因是什么？",
    optionsChinese: [
      "A) 膨胀阀故障",
      "B) 冷凝器冷却风扇不工作",
      "C) 座舱空气滤清器堵塞",
      "D) 鼓风机电机电阻器故障"
    ],
    explanationChinese: "在高速行驶时，冲压空气流过冷凝器提供足够的冷却。在怠速时，冷凝器风扇必须提供这种气流。如果风扇不工作，冷凝器在怠速时无法排出足够的热量，导致高压侧压力升高，制冷性能显著下降。"
  },
  {
    id: 138,
    q: "What is the FIRST step when diagnosing an A/C system complaint?",
    options: [
      "A) Connect the manifold gauge set",
      "B) Add refrigerant to the system",
      "C) Verify the complaint and perform a visual inspection",
      "D) Replace the compressor"
    ],
    answer: 2,
    explanation: "The first step in any A/C diagnosis is to verify the customer complaint and perform a thorough visual inspection. Check the drive belt, compressor clutch engagement, condenser condition, electrical connections, and listen for unusual noises before connecting gauges or adding refrigerant.",
    diagram: "",
    terms: ["compressor", "condenser", "ac_clutch", "manifold_gauge"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "A/C System Diagnostic Steps",
    qChinese: "诊断空调系统故障时的第一步是什么？",
    optionsChinese: [
      "A) 连接歧管压力表组",
      "B) 向系统添加制冷剂",
      "C) 验证故障并进行目视检查",
      "D) 更换压缩机"
    ],
    explanationChinese: "任何空调诊断的第一步是验证客户投诉并进行彻底的目视检查。在连接压力表或添加制冷剂之前，检查驱动皮带、压缩机离合器接合情况、冷凝器状况、电气连接，并倾听异常噪音。"
  },
  {
    id: 139,
    q: "Technician A says the receiver-drier should be replaced whenever the A/C system has been opened to the atmosphere. Technician B says the receiver-drier only needs replacement if it is leaking. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Technician A is correct. The receiver-drier (or accumulator) should be replaced whenever the system is opened to the atmosphere for repair. The desiccant inside quickly becomes saturated with moisture from ambient air, losing its ability to protect the system from moisture contamination.",
    diagram: "",
    terms: ["receiver_drier", "accumulator", "refrigerant", "compressor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "When to Replace the Receiver Drier",
    qChinese: "技师A说每当空调系统暴露在大气中时都应更换储液干燥器。技师B说储液干燥器只有在泄漏时才需要更换。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "技师A正确。每当系统因维修而暴露在大气中时，都应更换储液干燥器（或蓄液器）。内部的干燥剂很快会被环境空气中的水分饱和，失去保护系统免受水分污染的能力。"
  },
  {
    id: 140,
    q: "What tool is used to measure the vacuum level during A/C system evacuation?",
    options: [
      "A) A manifold gauge set only",
      "B) A micron gauge",
      "C) A tire pressure gauge",
      "D) An infrared thermometer"
    ],
    answer: 1,
    explanation: "A micron gauge (also called a vacuum gauge or digital micron meter) measures the vacuum level in microns during evacuation. Standard manifold gauges lack the precision needed. A reading of 500 microns or less held for several minutes indicates the system is properly evacuated and leak-free.",
    diagram: "",
    terms: ["manifold_gauge", "refrigerant", "compressor", "receiver_drier"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "Using a Micron Gauge for A/C Evacuation",
    qChinese: "在空调系统抽真空期间使用什么工具测量真空度？",
    optionsChinese: [
      "A) 仅歧管压力表组",
      "B) 微米表",
      "C) 轮胎压力表",
      "D) 红外线温度计"
    ],
    explanationChinese: "微米表（也称为真空表或数字微米计）在抽真空期间测量微米级的真空度。标准歧管压力表缺乏所需的精度。500微米或更低的读数保持几分钟表明系统已正确抽真空且无泄漏。"
  },
  {
    id: 141,
    q: "A blend door actuator makes a clicking noise when changing temperature settings. What does this indicate?",
    options: [
      "A) The blower motor is failing",
      "B) The actuator motor gears are stripped or the door is binding",
      "C) The refrigerant charge is low",
      "D) The cabin air filter needs replacement"
    ],
    answer: 1,
    explanation: "A clicking or ticking noise from behind the dashboard when adjusting temperature usually indicates a blend door actuator with stripped gears or a door that is binding against debris or a broken pivot. The actuator motor keeps trying to move the door but cannot reach the commanded position.",
    diagram: "",
    terms: ["blend_door", "heater_core", "evaporator", "blower_motor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Blend Door Actuator Clicking Fix",
    qChinese: "更改温度设置时，混合风门执行器发出咔嗒声。这表明什么？",
    optionsChinese: [
      "A) 鼓风机电机故障",
      "B) 执行器电机齿轮磨损或风门卡住",
      "C) 制冷剂充量不足",
      "D) 座舱空气滤清器需要更换"
    ],
    explanationChinese: "调节温度时仪表板后方的咔嗒声或滴答声通常表明混合风门执行器齿轮磨损或风门被碎屑卡住或枢轴损坏。执行器电机不断尝试移动风门但无法到达指令位置。"
  },
  {
    id: 142,
    q: "What safety precaution should be taken when working with R-1234yf refrigerant?",
    options: [
      "A) No special precautions are needed",
      "B) Wear safety glasses and gloves; avoid open flames since R-1234yf is mildly flammable",
      "C) Work only outdoors",
      "D) Use only R-134a equipment"
    ],
    answer: 1,
    explanation: "R-1234yf is classified as mildly flammable (A2L). Technicians must wear safety glasses and gloves, avoid open flames and sparks near the work area, and use dedicated R-1234yf certified equipment. Liquid refrigerant contact with skin can cause frostbite, making protective gear essential.",
    diagram: "",
    terms: ["refrigerant", "r134a", "compressor", "condenser"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=_z1LchPP5GQ",
    youtubeTitle: "R-1234yf Safety Precautions",
    qChinese: "使用R-1234yf制冷剂时应采取什么安全预防措施？",
    optionsChinese: [
      "A) 不需要特殊预防措施",
      "B) 佩戴安全眼镜和手套；由于R-1234yf微可燃，避免明火",
      "C) 仅在室外工作",
      "D) 仅使用R-134a设备"
    ],
    explanationChinese: "R-1234yf被归类为微可燃（A2L）。技师必须佩戴安全眼镜和手套，避免工作区域附近的明火和火花，并使用专用的R-1234yf认证设备。液态制冷剂接触皮肤可能导致冻伤，因此防护装备至关重要。"
  },
  {
    id: 143,
    q: "A vehicle has no heat output. The engine reaches normal operating temperature. Both heater hoses are warm. What is the MOST likely cause?",
    options: [
      "A) A stuck-open thermostat",
      "B) A blend door stuck in the cold position",
      "C) A plugged heater core",
      "D) Low engine coolant level"
    ],
    answer: 1,
    explanation: "If the engine is at normal temperature and both heater hoses are warm, coolant is flowing through the heater core properly. The lack of heat indicates the blend door is stuck in the full cold (A/C) position, preventing heated air from reaching the cabin. The actuator or door mechanism needs inspection.",
    diagram: "",
    terms: ["blend_door", "heater_core", "blower_motor", "evaporator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "No Heat Diagnosis - Blend Door",
    qChinese: "车辆没有暖风输出。发动机达到正常工作温度。两根加热器软管都是温热的。最可能的原因是什么？",
    optionsChinese: [
      "A) 恒温器卡在打开位置",
      "B) 混合风门卡在冷风位置",
      "C) 加热器芯堵塞",
      "D) 发动机冷却液液位低"
    ],
    explanationChinese: "如果发动机处于正常温度且两根加热器软管都是温热的，冷却液正在正常流过加热器芯。没有暖风表明混合风门卡在完全冷风（空调）位置，阻止加热的空气到达车内。需要检查执行器或风门机构。"
  },
  {
    id: 144,
    q: "What is the purpose of the A/C system sight glass on vehicles that have one?",
    options: [
      "A) To check engine oil level",
      "B) To visually check refrigerant flow and condition",
      "C) To measure compressor output pressure",
      "D) To test the blower motor"
    ],
    answer: 1,
    explanation: "The sight glass, typically found on the receiver-drier of older systems, allows a visual check of refrigerant flow and condition. Clear flow indicates a full charge, bubbles indicate low charge, and a cloudy appearance indicates desiccant breakdown. Many modern systems have eliminated the sight glass.",
    diagram: "",
    terms: ["receiver_drier", "refrigerant", "condenser", "compressor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "A/C Sight Glass Inspection",
    qChinese: "在配备观察窗的车辆上，空调系统观察窗的作用是什么？",
    optionsChinese: [
      "A) 检查发动机油位",
      "B) 目视检查制冷剂流动和状况",
      "C) 测量压缩机输出压力",
      "D) 测试鼓风机电机"
    ],
    explanationChinese: "观察窗通常位于旧系统的储液干燥器上，可以目视检查制冷剂的流动和状况。清澈的流动表示充量充足，气泡表示充量不足，混浊外观表示干燥剂分解。许多现代系统已取消了观察窗。"
  },
  {
    id: 145,
    q: "What is the correct action if an A/C system vacuum test shows the vacuum level rising (losing vacuum) after the pump is shut off?",
    options: [
      "A) Recharge the system immediately",
      "B) The system has a leak that must be found and repaired",
      "C) Add more compressor oil",
      "D) Replace the cabin air filter"
    ],
    answer: 1,
    explanation: "If the vacuum level rises (loses vacuum) after the pump is turned off, it means air is entering the system through a leak. The leak must be located and repaired before evacuation can continue. A properly sealed system will hold vacuum without significant rise over a 10-15 minute period.",
    diagram: "",
    terms: ["refrigerant", "manifold_gauge", "compressor", "condenser"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "A/C Vacuum Leak Test Procedure",
    qChinese: "如果空调系统真空测试显示关闭泵后真空度上升（失去真空），正确的做法是什么？",
    optionsChinese: [
      "A) 立即充注系统",
      "B) 系统有泄漏，必须找到并修复",
      "C) 添加更多压缩机油",
      "D) 更换座舱空气滤清器"
    ],
    explanationChinese: "如果关闭泵后真空度上升（失去真空），意味着空气通过泄漏进入系统。必须找到并修复泄漏才能继续抽真空。密封良好的系统在10-15分钟内不会出现显著的真空度上升。"
  },
  {
    id: 146,
    q: "Which sensor provides temperature information to the automatic climate control module to regulate cabin temperature?",
    options: [
      "A) The oxygen sensor",
      "B) The in-car temperature sensor (aspirator sensor)",
      "C) The mass airflow sensor",
      "D) The throttle position sensor"
    ],
    answer: 1,
    explanation: "The in-car temperature sensor (also called the aspirator sensor) measures the actual cabin air temperature. It typically uses a small aspirator tube with a mini-fan to draw cabin air across a thermistor. The automatic climate control module compares this reading with the set temperature to adjust HVAC output.",
    diagram: "",
    terms: ["blend_door", "evaporator", "blower_motor", "heater_core"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Automatic Climate Control Sensors",
    qChinese: "哪个传感器向自动气候控制模块提供温度信息以调节车内温度？",
    optionsChinese: [
      "A) 氧传感器",
      "B) 车内温度传感器（吸气传感器）",
      "C) 质量空气流量传感器",
      "D) 节气门位置传感器"
    ],
    explanationChinese: "车内温度传感器（也称为吸气传感器）测量实际的车内空气温度。它通常使用带有小风扇的吸气管将车内空气吸过热敏电阻。自动气候控制模块将此读数与设定温度进行比较以调整HVAC输出。"
  },
  {
    id: 147,
    q: "What is the purpose of the evaporator temperature sensor or thermistor?",
    options: [
      "A) To measure outside ambient temperature",
      "B) To prevent the evaporator from freezing by cycling the compressor",
      "C) To control the heater control valve",
      "D) To regulate refrigerant charge level"
    ],
    answer: 1,
    explanation: "The evaporator temperature sensor monitors the evaporator core surface temperature. When the temperature drops near freezing (typically around 32-35°F), the control module disengages the compressor clutch to prevent ice formation on the evaporator. Once the temperature rises, the compressor re-engages.",
    diagram: "",
    terms: ["evaporator", "compressor", "ac_clutch", "refrigerant"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "Evaporator Temperature Sensor Function",
    qChinese: "蒸发器温度传感器或热敏电阻的作用是什么？",
    optionsChinese: [
      "A) 测量外部环境温度",
      "B) 通过循环压缩机防止蒸发器结冰",
      "C) 控制加热器控制阀",
      "D) 调节制冷剂充量水平"
    ],
    explanationChinese: "蒸发器温度传感器监控蒸发器芯的表面温度。当温度降至接近冰点（通常约32-35°F）时，控制模块脱开压缩机离合器以防止蒸发器上结冰。温度升高后，压缩机重新接合。"
  },
  {
    id: 148,
    q: "A technician is checking for A/C leaks with an electronic leak detector. Where should the detector probe be positioned relative to fittings?",
    options: [
      "A) Above the fittings since refrigerant rises",
      "B) Below the fittings since R-134a is heavier than air",
      "C) Inside the cabin only",
      "D) At the exhaust tailpipe"
    ],
    answer: 1,
    explanation: "R-134a refrigerant vapor is heavier than air, so leaked refrigerant tends to settle below the leak point. The electronic leak detector probe should be moved slowly beneath and around all fittings, connections, and components to detect the small concentrations of escaped refrigerant gas.",
    diagram: "",
    terms: ["refrigerant", "r134a", "condenser", "compressor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "Electronic Leak Detector Technique",
    qChinese: "技师正在使用电子检漏仪检查空调泄漏。检测探头应相对于接头放置在什么位置？",
    optionsChinese: [
      "A) 在接头上方，因为制冷剂会上升",
      "B) 在接头下方，因为R-134a比空气重",
      "C) 仅在车内",
      "D) 在排气尾管处"
    ],
    explanationChinese: "R-134a制冷剂蒸气比空气重，因此泄漏的制冷剂倾向于沉降到泄漏点下方。电子检漏仪探头应在所有接头、连接处和部件的下方和周围缓慢移动，以检测逸出的少量制冷剂气体。"
  },
  {
    id: 149,
    q: "Technician A says the A/C compressor requires a specific amount of refrigerant oil for proper operation. Technician B says oil should be added whenever a major component is replaced. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both are correct. The compressor requires a precise amount of refrigerant oil for lubrication. When major components like the compressor, condenser, evaporator, or accumulator are replaced, oil is lost with the old part. The replacement part must receive the correct amount of new oil per manufacturer specifications.",
    diagram: "",
    terms: ["compressor", "refrigerant", "condenser", "evaporator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Compressor Oil Requirements",
    qChinese: "技师A说空调压缩机需要特定量的制冷剂油才能正常运行。技师B说每当更换主要部件时都应添加油。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都正确。压缩机需要精确量的制冷剂油进行润滑。当压缩机、冷凝器、蒸发器或蓄液器等主要部件被更换时，油会随旧部件流失。更换部件必须按制造商规格添加正确量的新油。"
  },
  {
    id: 150,
    q: "What is the typical low-side pressure reading for a properly charged R-134a system at 80°F ambient temperature?",
    options: [
      "A) 5-10 psi",
      "B) 25-35 psi",
      "C) 60-80 psi",
      "D) 150-200 psi"
    ],
    answer: 1,
    explanation: "A properly charged R-134a system at 80°F ambient temperature typically shows low-side pressure of approximately 25-35 psi. Readings significantly below this range suggest low charge or a restriction, while readings significantly above indicate overcharge or a compressor issue.",
    diagram: "",
    terms: ["manifold_gauge", "refrigerant", "r134a", "compressor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "Reading A/C Manifold Gauges",
    qChinese: "在80°F环境温度下，正常充注的R-134a系统的典型低压侧压力读数是多少？",
    optionsChinese: [
      "A) 5-10 psi",
      "B) 25-35 psi",
      "C) 60-80 psi",
      "D) 150-200 psi"
    ],
    explanationChinese: "在80°F环境温度下，正常充注的R-134a系统通常显示低压侧压力约25-35 psi。读数明显低于此范围表示充量不足或有限制，而读数明显高于此范围表示充量过多或压缩机问题。"
  },
  {
    id: 151,
    q: "Why is it important to use the correct type of refrigerant specified for a vehicle?",
    options: [
      "A) Different refrigerants are the same chemically",
      "B) Mixing refrigerants can cause system damage, poor performance, and equipment contamination",
      "C) It only affects the color of the system",
      "D) Any refrigerant works in any system"
    ],
    answer: 1,
    explanation: "Using the correct refrigerant is critical because different types (R-12, R-134a, R-1234yf) have different pressures, chemical properties, and oil compatibility. Mixing refrigerants causes poor cooling performance, potential chemical reactions, compressor damage, and contaminates recovery equipment.",
    diagram: "",
    terms: ["refrigerant", "r134a", "compressor", "condenser"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=_z1LchPP5GQ",
    youtubeTitle: "Why Refrigerant Type Matters",
    qChinese: "为什么使用车辆指定的正确类型制冷剂很重要？",
    optionsChinese: [
      "A) 不同的制冷剂化学成分相同",
      "B) 混合制冷剂可能导致系统损坏、性能下降和设备污染",
      "C) 它只影响系统的颜色",
      "D) 任何制冷剂都适用于任何系统"
    ],
    explanationChinese: "使用正确的制冷剂至关重要，因为不同类型（R-12、R-134a、R-1234yf）具有不同的压力、化学性质和油相容性。混合制冷剂会导致制冷性能差、潜在的化学反应、压缩机损坏和回收设备污染。"
  },
  {
    id: 152,
    q: "What is the function of the recirculation door in an HVAC system?",
    options: [
      "A) It controls the temperature of the air",
      "B) It switches between drawing outside fresh air and recirculating cabin air",
      "C) It meters refrigerant flow",
      "D) It controls the blower motor speed"
    ],
    answer: 1,
    explanation: "The recirculation door switches the air source between outside fresh air and recirculated cabin air. Recirculation mode helps cool the cabin faster by recooling already-cooled interior air and also helps keep out exhaust fumes and outside odors during driving in heavy traffic.",
    diagram: "",
    terms: ["blend_door", "blower_motor", "evaporator", "cabin_air_filter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "HVAC Recirculation Door Explained",
    qChinese: "HVAC系统中再循环风门的功能是什么？",
    optionsChinese: [
      "A) 控制空气温度",
      "B) 在引入外部新鲜空气和再循环车内空气之间切换",
      "C) 计量制冷剂流量",
      "D) 控制鼓风机电机速度"
    ],
    explanationChinese: "再循环风门在外部新鲜空气和再循环车内空气之间切换空气来源。再循环模式通过重新冷却已冷却的车内空气来帮助更快地冷却车厢，还有助于在繁忙交通中行驶时隔绝排气烟雾和外部异味。"
  },
  {
    id: 153,
    q: "A vehicle has poor heat output. One heater hose is hot and the other is cool. What is the MOST likely cause?",
    options: [
      "A) A faulty blend door actuator",
      "B) A plugged or restricted heater core",
      "C) A bad blower motor",
      "D) An overcharged A/C system"
    ],
    answer: 1,
    explanation: "When one heater hose is hot (inlet) and the other is significantly cooler (outlet), it indicates restricted coolant flow through the heater core. The core is likely clogged with deposits or debris. A heater core flush may resolve the issue, but severely clogged cores typically require replacement.",
    diagram: "",
    terms: ["heater_core", "blend_door", "blower_motor", "evaporator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Clogged Heater Core Diagnosis",
    qChinese: "车辆暖风输出不佳。一根加热器软管是热的，另一根是凉的。最可能的原因是什么？",
    optionsChinese: [
      "A) 混合风门执行器故障",
      "B) 加热器芯堵塞或受限",
      "C) 鼓风机电机故障",
      "D) 空调系统充注过量"
    ],
    explanationChinese: "当一根加热器软管是热的（进口）而另一根明显较凉（出口）时，表明通过加热器芯的冷却液流动受限。芯体可能被沉积物或碎屑堵塞。冲洗加热器芯可能解决问题，但严重堵塞的芯体通常需要更换。"
  },
  {
    id: 154,
    q: "What happens when air is trapped in an A/C system?",
    options: [
      "A) The system operates more efficiently",
      "B) High-side pressure increases and cooling performance decreases",
      "C) The compressor runs quieter",
      "D) Low-side pressure drops to zero"
    ],
    answer: 1,
    explanation: "Air trapped in an A/C system acts as a non-condensable gas. It takes up space in the condenser, reducing the effective heat exchange area and causing high-side pressure to increase above normal. This leads to reduced cooling efficiency, higher discharge temperatures, and increased compressor workload.",
    diagram: "",
    terms: ["condenser", "compressor", "refrigerant", "manifold_gauge"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "Air in A/C System Effects",
    qChinese: "当空气被困在空调系统中时会发生什么？",
    optionsChinese: [
      "A) 系统运行更高效",
      "B) 高压侧压力升高，制冷性能下降",
      "C) 压缩机运行更安静",
      "D) 低压侧压力降至零"
    ],
    explanationChinese: "困在空调系统中的空气充当不可冷凝气体。它占据冷凝器中的空间，减少有效的热交换面积，导致高压侧压力升高超过正常值。这导致制冷效率降低、排气温度升高和压缩机负荷增加。"
  },
  {
    id: 155,
    q: "A technician measures 12 volts at the A/C compressor clutch connector but the clutch does not engage. What should be checked next?",
    options: [
      "A) The refrigerant charge level",
      "B) The ground circuit for the clutch coil",
      "C) The cabin air filter",
      "D) The blend door position"
    ],
    answer: 1,
    explanation: "If 12 volts are present at the compressor clutch connector but the clutch does not engage, the ground circuit should be checked next. A poor or open ground prevents current from flowing through the clutch coil. The coil itself may also have failed open, which can be verified with a resistance check.",
    diagram: "",
    terms: ["ac_clutch", "compressor", "refrigerant", "evaporator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Clutch Not Engaging - Diagnosis",
    qChinese: "技师在空调压缩机离合器连接器处测量到12伏电压，但离合器不接合。接下来应检查什么？",
    optionsChinese: [
      "A) 制冷剂充量水平",
      "B) 离合器线圈的接地电路",
      "C) 座舱空气滤清器",
      "D) 混合风门位置"
    ],
    explanationChinese: "如果压缩机离合器连接器处存在12伏电压但离合器不接合，应接下来检查接地电路。不良或断开的接地阻止电流流过离合器线圈。线圈本身也可能断路失效，可以通过电阻检查来验证。"
  },
  {
    id: 156,
    q: "What is the purpose of the A/C system's high-pressure relief valve?",
    options: [
      "A) To regulate low-side pressure",
      "B) To vent excess pressure to prevent system damage in an overpressure condition",
      "C) To control compressor speed",
      "D) To meter refrigerant to the evaporator"
    ],
    answer: 1,
    explanation: "The high-pressure relief valve is a safety device that opens when system pressure exceeds a critical threshold, venting refrigerant to prevent catastrophic failure of hoses, fittings, or the compressor. It reseats after pressure drops. Frequent activation indicates a system malfunction needing diagnosis.",
    diagram: "",
    terms: ["compressor", "condenser", "refrigerant", "manifold_gauge"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Pressure Relief Valve Function",
    qChinese: "空调系统高压泄压阀的作用是什么？",
    optionsChinese: [
      "A) 调节低压侧压力",
      "B) 在超压情况下排出多余压力以防止系统损坏",
      "C) 控制压缩机速度",
      "D) 将制冷剂计量到蒸发器"
    ],
    explanationChinese: "高压泄压阀是一种安全装置，当系统压力超过临界阈值时打开，排出制冷剂以防止软管、接头或压缩机发生灾难性故障。压力下降后它会重新关闭。频繁激活表明系统存在需要诊断的故障。"
  },
  {
    id: 157,
    q: "Technician A says the serpentine belt must be inspected for cracks and wear during A/C service. Technician B says a loose belt can cause the compressor clutch to slip. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. The serpentine belt drives the A/C compressor and should be inspected for cracks, glazing, and wear during service. A loose or worn belt can slip on the compressor pulley, reducing compressor speed and causing inadequate refrigerant circulation and poor cooling performance.",
    diagram: "",
    terms: ["compressor", "ac_clutch", "condenser", "refrigerant"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "Serpentine Belt and A/C Compressor",
    qChinese: "技师A说在空调维修期间必须检查蛇形皮带是否有裂纹和磨损。技师B说松弛的皮带会导致压缩机离合器打滑。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都正确。蛇形皮带驱动空调压缩机，在维修期间应检查是否有裂纹、光泽化和磨损。松弛或磨损的皮带可能在压缩机皮带轮上打滑，降低压缩机转速，导致制冷剂循环不足和制冷性能差。"
  },
  {
    id: 158,
    q: "What condition causes the evaporator to freeze up?",
    options: [
      "A) High ambient temperature",
      "B) The compressor not cycling off due to a faulty thermostat or sensor",
      "C) A restricted condenser",
      "D) Excess compressor oil"
    ],
    answer: 1,
    explanation: "The evaporator freezes when the compressor runs continuously without cycling off, typically due to a faulty evaporator temperature sensor, stuck pressure cycling switch, or control module issue. The evaporator surface drops below 32°F, causing condensation to freeze and block airflow through the core.",
    diagram: "",
    terms: ["evaporator", "compressor", "ac_clutch", "refrigerant"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "Frozen Evaporator Diagnosis",
    qChinese: "什么情况会导致蒸发器结冰？",
    optionsChinese: [
      "A) 环境温度高",
      "B) 由于恒温器或传感器故障，压缩机不循环关闭",
      "C) 冷凝器受限",
      "D) 压缩机油过多"
    ],
    explanationChinese: "当压缩机持续运行不循环关闭时蒸发器会结冰，通常由蒸发器温度传感器故障、压力循环开关卡住或控制模块问题引起。蒸发器表面降至32°F以下，导致冷凝水结冰并阻塞通过芯体的气流。"
  },
  {
    id: 159,
    q: "How does a variable displacement compressor control cooling output?",
    options: [
      "A) By cycling the clutch on and off",
      "B) By changing the angle of the wobble plate to vary piston stroke",
      "C) By adjusting the expansion valve opening",
      "D) By changing the blower motor speed"
    ],
    answer: 1,
    explanation: "A variable displacement compressor adjusts cooling output by changing the angle of its internal wobble plate (swash plate). By varying the plate angle, the piston stroke changes, which alters the volume of refrigerant pumped per revolution. This provides smoother, more efficient cooling without clutch cycling.",
    diagram: "",
    terms: ["compressor", "refrigerant", "ac_clutch", "evaporator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "Variable Displacement Compressor Explained",
    qChinese: "可变排量压缩机如何控制制冷输出？",
    optionsChinese: [
      "A) 通过离合器的通断循环",
      "B) 通过改变斜盘角度来改变活塞行程",
      "C) 通过调节膨胀阀开度",
      "D) 通过改变鼓风机电机速度"
    ],
    explanationChinese: "可变排量压缩机通过改变内部斜盘（摆盘）的角度来调节制冷输出。通过改变斜盘角度，活塞行程改变，从而改变每转泵送的制冷剂量。这提供了更平稳、更高效的制冷而无需离合器循环。"
  },
  {
    id: 160,
    q: "What is the MOST common type of A/C compressor used in modern vehicles?",
    options: [
      "A) Reciprocating piston compressor",
      "B) Scroll compressor",
      "C) Rotary vane compressor",
      "D) Centrifugal compressor"
    ],
    answer: 1,
    explanation: "Scroll compressors have become the most common type in modern vehicles due to their efficiency, quiet operation, and compact size. They use two interleaving spiral scrolls to compress refrigerant. Some vehicles also use variable displacement swash plate compressors for further efficiency gains.",
    diagram: "",
    terms: ["compressor", "refrigerant", "ac_clutch", "condenser"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "Types of A/C Compressors",
    qChinese: "现代车辆中最常见的空调压缩机类型是什么？",
    optionsChinese: [
      "A) 往复活塞式压缩机",
      "B) 涡旋式压缩机",
      "C) 旋转叶片式压缩机",
      "D) 离心式压缩机"
    ],
    explanationChinese: "涡旋式压缩机因其效率高、运行安静和体积紧凑，已成为现代车辆中最常见的类型。它们使用两个相互交错的螺旋涡旋来压缩制冷剂。一些车辆还使用可变排量斜盘压缩机以进一步提高效率。"
  },
  {
    id: 161,
    q: "What does the ambient air temperature sensor provide to the HVAC control module?",
    options: [
      "A) The temperature of the refrigerant",
      "B) The temperature of the outside air for automatic climate adjustments",
      "C) The temperature of the engine coolant",
      "D) The temperature of the compressor discharge"
    ],
    answer: 1,
    explanation: "The ambient air temperature sensor measures the outside air temperature and sends this data to the HVAC control module. The module uses this information, along with the cabin temperature sensor and sunload sensor, to automatically adjust compressor operation, blend door position, and blower speed.",
    diagram: "",
    terms: ["blend_door", "compressor", "evaporator", "blower_motor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Ambient Temperature Sensor Function",
    qChinese: "环境空气温度传感器向HVAC控制模块提供什么信息？",
    optionsChinese: [
      "A) 制冷剂的温度",
      "B) 用于自动气候调节的外部空气温度",
      "C) 发动机冷却液的温度",
      "D) 压缩机排气温度"
    ],
    explanationChinese: "环境空气温度传感器测量外部空气温度并将此数据发送到HVAC控制模块。控制模块使用此信息以及车内温度传感器和日照传感器数据，自动调节压缩机运行、混合风门位置和鼓风机速度。"
  },
  {
    id: 162,
    q: "During an A/C performance test, the center vent temperature reads 65°F on a 90°F day. What does this indicate?",
    options: [
      "A) The system is operating normally",
      "B) The system is not cooling adequately",
      "C) The heater core is leaking",
      "D) The blower motor is running too fast"
    ],
    answer: 1,
    explanation: "A properly functioning A/C system should produce center vent temperatures of approximately 38-48°F on a 90°F day. A reading of 65°F indicates the system is not cooling adequately. Possible causes include low refrigerant charge, a faulty compressor, restricted condenser, or a blend door issue.",
    diagram: "",
    terms: ["evaporator", "compressor", "refrigerant", "manifold_gauge"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "A/C Performance Test Procedure",
    qChinese: "在空调性能测试中，90°F的日子中央出风口温度读数为65°F。这表明什么？",
    optionsChinese: [
      "A) 系统运行正常",
      "B) 系统制冷不足",
      "C) 加热器芯泄漏",
      "D) 鼓风机电机运转太快"
    ],
    explanationChinese: "正常运行的空调系统在90°F的日子应产生约38-48°F的中央出风口温度。65°F的读数表明系统制冷不足。可能的原因包括制冷剂充量不足、压缩机故障、冷凝器受限或混合风门问题。"
  },
  {
    id: 163,
    q: "What is the purpose of the orifice tube in an A/C system?",
    options: [
      "A) To compress the refrigerant",
      "B) To meter and reduce the pressure of liquid refrigerant entering the evaporator",
      "C) To store excess refrigerant",
      "D) To remove moisture from the system"
    ],
    answer: 1,
    explanation: "The orifice tube is a fixed metering device that restricts and reduces the pressure of high-pressure liquid refrigerant as it enters the evaporator. Unlike a TXV, it has no moving parts and cannot adjust flow based on demand. It relies on compressor clutch cycling to control evaporator temperature.",
    diagram: "",
    terms: ["orifice_tube", "evaporator", "refrigerant", "compressor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "Orifice Tube vs TXV Explained",
    qChinese: "空调系统中孔管的作用是什么？",
    optionsChinese: [
      "A) 压缩制冷剂",
      "B) 计量并降低进入蒸发器的液态制冷剂压力",
      "C) 储存多余的制冷剂",
      "D) 从系统中去除水分"
    ],
    explanationChinese: "孔管是一种固定的计量装置，限制并降低进入蒸发器的高压液态制冷剂的压力。与TXV不同，它没有运动部件，无法根据需求调节流量。它依靠压缩机离合器循环来控制蒸发器温度。"
  },
  {
    id: 164,
    q: "A vehicle's A/C compressor engages but makes a loud knocking noise. What is the MOST likely cause?",
    options: [
      "A) Low refrigerant charge",
      "B) Internal compressor failure or liquid slugging",
      "C) A clogged cabin air filter",
      "D) A faulty blend door actuator"
    ],
    answer: 1,
    explanation: "A loud knocking noise from the compressor when engaged usually indicates internal mechanical failure such as broken valves, worn bearings, or liquid slugging (liquid refrigerant entering the compressor). The compressor should be shut off immediately to prevent further damage and the system diagnosed.",
    diagram: "",
    terms: ["compressor", "ac_clutch", "refrigerant", "accumulator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Compressor Noise Diagnosis",
    qChinese: "车辆的空调压缩机接合但发出响亮的敲击声。最可能的原因是什么？",
    optionsChinese: [
      "A) 制冷剂充量不足",
      "B) 压缩机内部故障或液击",
      "C) 座舱空气滤清器堵塞",
      "D) 混合风门执行器故障"
    ],
    explanationChinese: "压缩机接合时发出响亮的敲击声通常表明内部机械故障，如阀片断裂、轴承磨损或液击（液态制冷剂进入压缩机）。应立即关闭压缩机以防止进一步损坏并诊断系统。"
  },
  {
    id: 165,
    q: "When replacing an A/C compressor, what additional components should typically be replaced?",
    options: [
      "A) Only the drive belt",
      "B) The receiver-drier or accumulator and the orifice tube or expansion valve",
      "C) The radiator and thermostat",
      "D) The blower motor and resistor"
    ],
    answer: 1,
    explanation: "When replacing an A/C compressor, the receiver-drier or accumulator should be replaced because its desiccant may be contaminated or saturated. The orifice tube should also be inspected or replaced as compressor debris may clog it. All O-rings at connections should be replaced as well.",
    diagram: "",
    terms: ["compressor", "receiver_drier", "accumulator", "orifice_tube"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Compressor Replacement Guide",
    qChinese: "更换空调压缩机时，通常还应更换哪些附加部件？",
    optionsChinese: [
      "A) 仅驱动皮带",
      "B) 储液干燥器或蓄液器以及孔管或膨胀阀",
      "C) 散热器和恒温器",
      "D) 鼓风机电机和电阻器"
    ],
    explanationChinese: "更换空调压缩机时，应更换储液干燥器或蓄液器，因为其干燥剂可能被污染或饱和。孔管也应检查或更换，因为压缩机碎屑可能堵塞它。连接处的所有O型圈也应更换。"
  },
  {
    id: 166,
    q: "What does a sunload sensor measure in an automatic climate control system?",
    options: [
      "A) The engine temperature",
      "B) The intensity of sunlight hitting the vehicle to adjust HVAC output",
      "C) The exhaust gas temperature",
      "D) The transmission fluid temperature"
    ],
    answer: 1,
    explanation: "The sunload sensor (solar sensor) is mounted on the dashboard and measures the intensity of sunlight entering the vehicle. The climate control module uses this data to increase cooling output on the sunny side of the vehicle, providing more even cabin temperature distribution automatically.",
    diagram: "",
    terms: ["blend_door", "evaporator", "compressor", "blower_motor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Sunload Sensor in Climate Control",
    qChinese: "在自动气候控制系统中，日照传感器测量什么？",
    optionsChinese: [
      "A) 发动机温度",
      "B) 照射到车辆的阳光强度，以调整HVAC输出",
      "C) 排气温度",
      "D) 变速箱油温度"
    ],
    explanationChinese: "日照传感器（太阳能传感器）安装在仪表板上，测量进入车辆的阳光强度。气候控制模块使用此数据增加车辆阳光照射侧的制冷输出，自动提供更均匀的车内温度分布。"
  },
  {
    id: 167,
    q: "Which refrigerant has a higher global warming potential (GWP)?",
    options: [
      "A) R-1234yf (GWP of 4)",
      "B) R-134a (GWP of 1,430)",
      "C) Both have the same GWP",
      "D) Neither contributes to global warming"
    ],
    answer: 1,
    explanation: "R-134a has a significantly higher global warming potential (GWP of 1,430) compared to R-1234yf (GWP of only 4). This environmental difference is the primary reason the automotive industry is transitioning from R-134a to R-1234yf in compliance with international environmental regulations.",
    diagram: "",
    terms: ["refrigerant", "r134a", "compressor", "condenser"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=_z1LchPP5GQ",
    youtubeTitle: "R-134a vs R-1234yf Environmental Impact",
    qChinese: "哪种制冷剂具有更高的全球变暖潜值（GWP）？",
    optionsChinese: [
      "A) R-1234yf（GWP为4）",
      "B) R-134a（GWP为1,430）",
      "C) 两者的GWP相同",
      "D) 两者都不会导致全球变暖"
    ],
    explanationChinese: "R-134a的全球变暖潜值（GWP为1,430）远高于R-1234yf（GWP仅为4）。这种环境差异是汽车行业从R-134a过渡到R-1234yf以符合国际环境法规的主要原因。"
  },
  {
    id: 168,
    q: "What is the correct sequence of the refrigeration cycle in an automotive A/C system?",
    options: [
      "A) Evaporator → Compressor → Condenser → Metering device",
      "B) Compressor → Condenser → Metering device → Evaporator",
      "C) Condenser → Evaporator → Compressor → Metering device",
      "D) Metering device → Compressor → Condenser → Evaporator"
    ],
    answer: 1,
    explanation: "The correct refrigeration cycle sequence is: Compressor (compresses low-pressure gas to high-pressure gas) → Condenser (rejects heat, gas becomes liquid) → Metering device (reduces pressure) → Evaporator (absorbs heat, liquid becomes gas) → back to Compressor to repeat the cycle.",
    diagram: "",
    terms: ["compressor", "condenser", "expansion_valve", "evaporator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "The Refrigeration Cycle Explained",
    qChinese: "汽车空调系统制冷循环的正确顺序是什么？",
    optionsChinese: [
      "A) 蒸发器 → 压缩机 → 冷凝器 → 计量装置",
      "B) 压缩机 → 冷凝器 → 计量装置 → 蒸发器",
      "C) 冷凝器 → 蒸发器 → 压缩机 → 计量装置",
      "D) 计量装置 → 压缩机 → 冷凝器 → 蒸发器"
    ],
    explanationChinese: "正确的制冷循环顺序是：压缩机（将低压气体压缩为高压气体）→冷凝器（排放热量，气体变为液体）→计量装置（降低压力）→蒸发器（吸收热量，液体变为气体）→返回压缩机重复循环。"
  },
  {
    id: 169,
    q: "A dual-zone climate control system allows different temperatures on the driver and passenger sides. What controls this?",
    options: [
      "A) Two separate A/C compressors",
      "B) Individual blend doors for each zone",
      "C) Two separate condensers",
      "D) Different refrigerant types for each side"
    ],
    answer: 1,
    explanation: "Dual-zone climate control uses individual blend doors (or separate temperature control doors) for the driver and passenger sides. Each zone has its own blend door actuator that independently mixes heated and cooled air to achieve the temperature set for that zone. They share one A/C system.",
    diagram: "",
    terms: ["blend_door", "heater_core", "evaporator", "blower_motor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Dual Zone Climate Control Explained",
    qChinese: "双区气候控制系统允许驾驶员侧和乘客侧设置不同的温度。什么控制这个功能？",
    optionsChinese: [
      "A) 两个独立的空调压缩机",
      "B) 每个区域的独立混合风门",
      "C) 两个独立的冷凝器",
      "D) 每侧使用不同类型的制冷剂"
    ],
    explanationChinese: "双区气候控制使用驾驶员侧和乘客侧的独立混合风门（或独立温度控制风门）。每个区域都有自己的混合风门执行器，独立混合加热和冷却的空气以达到该区域设定的温度。它们共享一个空调系统。"
  },
  {
    id: 170,
    q: "What is the MOST likely result of an A/C system that has too much compressor oil?",
    options: [
      "A) Improved cooling performance",
      "B) Reduced cooling performance due to oil taking up refrigerant space",
      "C) Faster compressor operation",
      "D) Lower system pressures"
    ],
    answer: 1,
    explanation: "Excess compressor oil circulates through the system and coats the inside of the condenser and evaporator, reducing heat transfer efficiency. The oil also takes up space that should contain refrigerant, effectively reducing the system charge. The result is decreased cooling performance.",
    diagram: "",
    terms: ["compressor", "condenser", "evaporator", "refrigerant"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "Correct A/C Oil Amount",
    qChinese: "空调系统中压缩机油过多最可能导致什么结果？",
    optionsChinese: [
      "A) 制冷性能提高",
      "B) 由于油占据制冷剂空间导致制冷性能下降",
      "C) 压缩机运转更快",
      "D) 系统压力更低"
    ],
    explanationChinese: "过多的压缩机油在系统中循环并涂覆在冷凝器和蒸发器内部，降低热传递效率。油还占据了应该容纳制冷剂的空间，有效减少了系统充量。结果是制冷性能下降。"
  },
  {
    id: 171,
    q: "A musty or mildew smell comes from the HVAC vents when the system is first turned on. What is the MOST likely cause?",
    options: [
      "A) A refrigerant leak",
      "B) Mold and bacteria growth on the evaporator core",
      "C) A leaking heater core",
      "D) A worn compressor"
    ],
    answer: 1,
    explanation: "A musty or mildew smell from the vents is caused by mold, mildew, and bacteria growing on the damp evaporator core and in the HVAC housing. Moisture from condensation collects on the evaporator and provides a breeding ground. An evaporator cleaner spray and cabin air filter replacement can help.",
    diagram: "",
    terms: ["evaporator", "cabin_air_filter", "blower_motor", "blend_door"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Musty A/C Smell Fix - Evaporator Cleaning",
    qChinese: "系统首次开启时HVAC出风口有霉味。最可能的原因是什么？",
    optionsChinese: [
      "A) 制冷剂泄漏",
      "B) 蒸发器芯上的霉菌和细菌生长",
      "C) 加热器芯泄漏",
      "D) 压缩机磨损"
    ],
    explanationChinese: "出风口的霉味是由蒸发器芯潮湿表面和HVAC壳体内生长的霉菌和细菌引起的。冷凝产生的水分聚集在蒸发器上，为滋生提供了环境。蒸发器清洁喷雾和更换座舱空气滤清器可以帮助解决。"
  },
  {
    id: 172,
    q: "What is the purpose of the evaporator drain tube?",
    options: [
      "A) To drain refrigerant from the system",
      "B) To drain condensation water from the HVAC housing to the outside of the vehicle",
      "C) To drain compressor oil",
      "D) To relieve excess system pressure"
    ],
    answer: 1,
    explanation: "The evaporator drain tube allows condensation water to drain from the HVAC case to the ground beneath the vehicle. As warm, humid cabin air passes over the cold evaporator, moisture condenses and collects in the drain pan. A clogged drain tube causes water to back up and leak into the cabin.",
    diagram: "",
    terms: ["evaporator", "blower_motor", "cabin_air_filter", "blend_door"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Clogged Evaporator Drain Fix",
    qChinese: "蒸发器排水管的作用是什么？",
    optionsChinese: [
      "A) 从系统中排放制冷剂",
      "B) 将冷凝水从HVAC壳体排到车外",
      "C) 排放压缩机油",
      "D) 释放多余的系统压力"
    ],
    explanationChinese: "蒸发器排水管允许冷凝水从HVAC壳体排到车辆下方的地面。当温暖潮湿的车内空气通过冰冷的蒸发器时，水分冷凝并聚集在排水盘中。堵塞的排水管会导致水倒流并渗漏到车内。"
  },
  {
    id: 173,
    q: "A customer reports water pooling on the passenger floor. The A/C system is working. What is the MOST likely cause?",
    options: [
      "A) A refrigerant leak",
      "B) A clogged evaporator drain tube",
      "C) An overcharged system",
      "D) A faulty compressor"
    ],
    answer: 1,
    explanation: "Water on the passenger floor while the A/C is operating is typically caused by a clogged evaporator drain tube. Condensation that should drain outside instead backs up into the HVAC case and overflows into the cabin, usually on the passenger side where the evaporator is located.",
    diagram: "",
    terms: ["evaporator", "cabin_air_filter", "blower_motor", "blend_door"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Water Leak on Passenger Floor Fix",
    qChinese: "客户报告乘客侧地板有积水。空调系统正在工作。最可能的原因是什么？",
    optionsChinese: [
      "A) 制冷剂泄漏",
      "B) 蒸发器排水管堵塞",
      "C) 系统充注过量",
      "D) 压缩机故障"
    ],
    explanationChinese: "空调运行时乘客侧地板有水通常是由蒸发器排水管堵塞引起的。应该排到车外的冷凝水反而倒流进HVAC壳体并溢出到车内，通常在蒸发器所在的乘客侧。"
  },
  {
    id: 174,
    q: "Technician A says the A/C compressor should be turned by hand several times before starting after a long period of inactivity. Technician B says this helps distribute oil throughout the compressor. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. After a new compressor installation or extended inactivity, manually rotating the compressor shaft several times helps distribute oil to internal bearings and seals. Starting the compressor dry can cause immediate wear or damage to internal components that rely on oil film lubrication.",
    diagram: "",
    terms: ["compressor", "ac_clutch", "refrigerant", "condenser"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Compressor Installation Tips",
    qChinese: "技师A说在长时间不使用后启动前应手动转动空调压缩机几次。技师B说这有助于将油分布到整个压缩机中。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都正确。安装新压缩机或长时间不使用后，手动转动压缩机轴几圈有助于将油分布到内部轴承和密封件。在干燥状态下启动压缩机可能导致依赖油膜润滑的内部部件立即磨损或损坏。"
  },
  {
    id: 175,
    q: "What is the effect of a restricted or clogged condenser on A/C system pressures?",
    options: [
      "A) Both high-side and low-side pressures decrease",
      "B) High-side pressure increases and low-side pressure may decrease",
      "C) Both pressures remain normal",
      "D) Low-side pressure increases and high-side decreases"
    ],
    answer: 1,
    explanation: "A restricted condenser cannot properly reject heat, causing high-side pressure to increase. The restriction also limits the flow of refrigerant to the metering device, which can cause low-side pressure to decrease. Cooling performance drops significantly as the refrigerant cannot properly change state.",
    diagram: "",
    terms: ["condenser", "compressor", "manifold_gauge", "refrigerant"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "Restricted Condenser Diagnosis",
    qChinese: "冷凝器受限或堵塞对空调系统压力有什么影响？",
    optionsChinese: [
      "A) 高压侧和低压侧压力都降低",
      "B) 高压侧压力升高，低压侧压力可能降低",
      "C) 两个压力保持正常",
      "D) 低压侧压力升高，高压侧降低"
    ],
    explanationChinese: "受限的冷凝器无法正常排热，导致高压侧压力升高。限制也限制了流向计量装置的制冷剂，可能导致低压侧压力降低。由于制冷剂无法正常改变状态，制冷性能显著下降。"
  },
  {
    id: 176,
    q: "What type of fitting is used on A/C service ports to prevent cross-contamination between R-134a and R-1234yf systems?",
    options: [
      "A) They use the same fittings",
      "B) Different sized and shaped service port fittings specific to each refrigerant",
      "C) Color-coded but identical fittings",
      "D) Threaded fittings vs. press-fit fittings"
    ],
    answer: 1,
    explanation: "R-134a and R-1234yf systems use different sized and shaped service port fittings to prevent cross-contamination. R-1234yf service ports have a unique coupler design that does not fit R-134a equipment. This ensures technicians cannot accidentally connect the wrong recovery or charging equipment.",
    diagram: "",
    terms: ["refrigerant", "r134a", "manifold_gauge", "compressor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=_z1LchPP5GQ",
    youtubeTitle: "R-134a vs R-1234yf Service Ports",
    qChinese: "空调维修口使用什么类型的接头来防止R-134a和R-1234yf系统之间的交叉污染？",
    optionsChinese: [
      "A) 它们使用相同的接头",
      "B) 每种制冷剂专用的不同尺寸和形状的维修口接头",
      "C) 颜色编码但相同的接头",
      "D) 螺纹接头与压入式接头"
    ],
    explanationChinese: "R-134a和R-1234yf系统使用不同尺寸和形状的维修口接头以防止交叉污染。R-1234yf维修口具有独特的耦合器设计，不适合R-134a设备。这确保技师不会意外连接错误的回收或充注设备。"
  },
  {
    id: 177,
    q: "What happens when the A/C is turned on and the engine idle speed increases slightly?",
    options: [
      "A) This is abnormal and indicates a problem",
      "B) This is normal; the PCM increases idle speed to compensate for the compressor load",
      "C) The blower motor is overloaded",
      "D) The condenser fan is malfunctioning"
    ],
    answer: 1,
    explanation: "A slight increase in engine idle speed when the A/C is turned on is normal operation. The PCM (Powertrain Control Module) increases the idle speed to compensate for the additional load the A/C compressor places on the engine, preventing the engine from stalling or running rough.",
    diagram: "",
    terms: ["compressor", "ac_clutch", "refrigerant", "condenser"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Compressor and Engine Load",
    qChinese: "开启空调后发动机怠速略有提高，这说明什么？",
    optionsChinese: [
      "A) 这是异常的，表明有问题",
      "B) 这是正常的；PCM提高怠速以补偿压缩机负载",
      "C) 鼓风机电机过载",
      "D) 冷凝器风扇故障"
    ],
    explanationChinese: "开启空调时发动机怠速略有提高是正常运行。PCM（动力总成控制模块）提高怠速以补偿空调压缩机对发动机施加的额外负载，防止发动机熄火或运转不稳。"
  },
  {
    id: 178,
    q: "A technician is performing an A/C system flush. What is the purpose of this procedure?",
    options: [
      "A) To add refrigerant to the system",
      "B) To remove debris, contaminated oil, and metal particles from the system",
      "C) To test the compressor output",
      "D) To check for leaks"
    ],
    answer: 1,
    explanation: "An A/C system flush removes contaminants including debris, metal shavings from a failed compressor, sludge, and old contaminated oil from the condenser, evaporator, and lines. Flushing is essential after a compressor failure to prevent the new compressor from being damaged by residual debris.",
    diagram: "",
    terms: ["compressor", "condenser", "evaporator", "refrigerant"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "How to Flush an A/C System",
    qChinese: "技师正在执行空调系统冲洗。这个程序的目的是什么？",
    optionsChinese: [
      "A) 向系统添加制冷剂",
      "B) 从系统中去除碎屑、污染的油和金属颗粒",
      "C) 测试压缩机输出",
      "D) 检查泄漏"
    ],
    explanationChinese: "空调系统冲洗从冷凝器、蒸发器和管路中去除污染物，包括碎屑、压缩机故障产生的金属屑、油泥和旧的污染油。在压缩机故障后冲洗是必要的，以防止新压缩机被残留碎屑损坏。"
  },
  {
    id: 179,
    q: "Which HVAC door controls whether air comes out of the defrost vents, dash vents, or floor vents?",
    options: [
      "A) Blend door",
      "B) Recirculation door",
      "C) Mode door (panel door)",
      "D) Heater control valve"
    ],
    answer: 2,
    explanation: "The mode door (also called the panel door or function door) directs conditioned air to the appropriate outlet: defrost (windshield), dash/panel vents (face), floor vents, or combinations. Common mode positions include face, bi-level, floor, and defrost. The blend door controls temperature, not outlet direction.",
    diagram: "",
    terms: ["blend_door", "blower_motor", "evaporator", "heater_core"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "HVAC Mode Door Operation",
    qChinese: "哪个HVAC风门控制空气从除霜出风口、仪表板出风口还是脚部出风口吹出？",
    optionsChinese: [
      "A) 混合风门",
      "B) 再循环风门",
      "C) 模式风门（面板风门）",
      "D) 加热器控制阀"
    ],
    explanationChinese: "模式风门（也称为面板风门或功能风门）将调节后的空气引导到适当的出口：除霜（挡风玻璃）、仪表板/面板出风口（面部）、脚部出风口或组合模式。常见的模式位置包括面部、双层、脚部和除霜。混合风门控制温度而非出口方向。"
  },
  {
    id: 180,
    q: "What is the proper method to check an A/C compressor clutch air gap?",
    options: [
      "A) Use a manifold gauge set",
      "B) Use a feeler gauge to measure the gap between the clutch plate and pulley",
      "C) Use an ohmmeter on the compressor terminals",
      "D) Use a vacuum gauge"
    ],
    answer: 1,
    explanation: "The compressor clutch air gap is measured using a feeler gauge inserted between the clutch plate (friction disc) and the pulley face. The typical air gap specification is 0.015 to 0.040 inches, depending on the manufacturer. An incorrect gap can cause clutch slippage, noise, or failure to engage.",
    diagram: "",
    terms: ["ac_clutch", "compressor", "refrigerant", "condenser"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Clutch Air Gap Adjustment",
    qChinese: "检查空调压缩机离合器间隙的正确方法是什么？",
    optionsChinese: [
      "A) 使用歧管压力表组",
      "B) 使用塞尺测量离合器盘和皮带轮之间的间隙",
      "C) 在压缩机端子上使用欧姆表",
      "D) 使用真空表"
    ],
    explanationChinese: "压缩机离合器间隙使用塞尺在离合器盘（摩擦片）和皮带轮表面之间测量。典型的间隙规格为0.015至0.040英寸，取决于制造商。不正确的间隙可能导致离合器打滑、噪音或无法接合。"
  },
  {
    id: 181,
    q: "A vehicle's rear A/C system blows warm while the front A/C works properly. What should be checked FIRST?",
    options: [
      "A) The front evaporator",
      "B) The rear expansion valve or control valve and rear A/C lines",
      "C) The compressor",
      "D) The front blend door"
    ],
    answer: 1,
    explanation: "When the front A/C works but the rear does not, the issue is isolated to the rear system components. Check the rear expansion valve or control valve, rear A/C lines for restrictions, and the rear blower motor. Since the front works, the compressor and main refrigerant charge are likely adequate.",
    diagram: "",
    terms: ["expansion_valve", "evaporator", "compressor", "refrigerant"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "Rear A/C Diagnosis",
    qChinese: "车辆的后排空调吹暖风而前排空调正常工作。首先应检查什么？",
    optionsChinese: [
      "A) 前蒸发器",
      "B) 后膨胀阀或控制阀及后排空调管路",
      "C) 压缩机",
      "D) 前混合风门"
    ],
    explanationChinese: "当前排空调工作但后排不工作时，问题仅限于后排系统部件。检查后膨胀阀或控制阀、后排空调管路是否有限制以及后排鼓风机电机。由于前排正常工作，压缩机和主制冷剂充量可能是足够的。"
  },
  {
    id: 182,
    q: "What device is used to measure the resistance of a blower motor resistor?",
    options: [
      "A) A manifold gauge set",
      "B) A digital multimeter (ohmmeter function)",
      "C) A tire pressure gauge",
      "D) A refractometer"
    ],
    answer: 1,
    explanation: "A digital multimeter set to the ohms (resistance) function is used to measure the resistance values of a blower motor resistor. Each speed setting has a specific resistance value. An open circuit (infinite resistance) on any resistor element confirms the resistor has failed for that speed setting.",
    diagram: "",
    terms: ["blower_motor", "cabin_air_filter", "blend_door", "evaporator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Testing a Blower Motor Resistor",
    qChinese: "使用什么设备测量鼓风机电机电阻器的电阻？",
    optionsChinese: [
      "A) 歧管压力表组",
      "B) 数字万用表（欧姆表功能）",
      "C) 轮胎压力表",
      "D) 折光仪"
    ],
    explanationChinese: "将数字万用表设置为欧姆（电阻）功能用于测量鼓风机电机电阻器的电阻值。每个速度设置都有特定的电阻值。任何电阻元件上的开路（无穷大电阻）确认该速度设置的电阻器已失效。"
  },
  {
    id: 183,
    q: "Technician A says PAG oil is hygroscopic and absorbs moisture from the air. Technician B says opened containers of PAG oil should be used quickly or sealed tightly. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. PAG (polyalkylene glycol) oil is highly hygroscopic, meaning it readily absorbs moisture from the atmosphere. Opened containers should be resealed immediately and used as soon as possible. Moisture-contaminated oil introduced into the A/C system causes corrosion and ice formation.",
    diagram: "",
    terms: ["compressor", "refrigerant", "r134a", "receiver_drier"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "PAG Oil for A/C Systems",
    qChinese: "技师A说PAG油具有吸湿性，会吸收空气中的水分。技师B说打开的PAG油容器应尽快使用或密封保存。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都正确。PAG（聚烷二醇）油具有强吸湿性，容易吸收大气中的水分。打开的容器应立即重新密封并尽快使用。引入空调系统的受水分污染的油会导致腐蚀和结冰。"
  },
  {
    id: 184,
    q: "What is the purpose of the A/C system's cycling clutch switch on an orifice tube system?",
    options: [
      "A) To control the blend door position",
      "B) To cycle the compressor on and off to maintain proper evaporator temperature",
      "C) To regulate the condenser fan speed",
      "D) To control the heater control valve"
    ],
    answer: 1,
    explanation: "The cycling clutch switch (or pressure cycling switch) monitors low-side pressure and cycles the compressor clutch on and off to maintain the evaporator at the correct temperature. It engages the clutch when pressure rises and disengages it before the evaporator can freeze, typically around 25-45 psi range.",
    diagram: "",
    terms: ["ac_clutch", "compressor", "orifice_tube", "evaporator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "Cycling Clutch Switch Operation",
    qChinese: "在孔管式系统中，空调系统循环离合器开关的作用是什么？",
    optionsChinese: [
      "A) 控制混合风门位置",
      "B) 通过压缩机的通断循环维持适当的蒸发器温度",
      "C) 调节冷凝器风扇速度",
      "D) 控制加热器控制阀"
    ],
    explanationChinese: "循环离合器开关（或压力循环开关）监控低压侧压力，通过压缩机离合器的通断循环维持蒸发器在正确温度。当压力升高时接合离合器，在蒸发器可能结冰前脱开离合器，通常在25-45 psi范围内。"
  },
  {
    id: 185,
    q: "What is the effect of a stuck-open TXV on A/C system operation?",
    options: [
      "A) High-side pressure drops, low-side pressure increases, and the evaporator may flood",
      "B) Both pressures drop to zero",
      "C) The compressor shuts off immediately",
      "D) The blower motor stops working"
    ],
    answer: 0,
    explanation: "A stuck-open TXV allows too much refrigerant to flow into the evaporator, causing the low-side pressure to be higher than normal. The high-side pressure may drop because refrigerant is moving through too quickly. The evaporator floods with liquid refrigerant, risking compressor liquid slugging damage.",
    diagram: "",
    terms: ["expansion_valve", "evaporator", "compressor", "refrigerant"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "TXV Stuck Open Symptoms",
    qChinese: "TXV卡在打开位置对空调系统运行有什么影响？",
    optionsChinese: [
      "A) 高压侧压力下降，低压侧压力升高，蒸发器可能溢流",
      "B) 两个压力都降至零",
      "C) 压缩机立即关闭",
      "D) 鼓风机电机停止工作"
    ],
    explanationChinese: "卡在打开位置的TXV允许过多的制冷剂流入蒸发器，导致低压侧压力高于正常值。高压侧压力可能下降，因为制冷剂流过太快。蒸发器被液态制冷剂淹没，有压缩机液击损坏的风险。"
  },
  {
    id: 186,
    q: "How can a technician verify that the correct amount of refrigerant has been charged into an A/C system?",
    options: [
      "A) By feeling the temperature of the lines by hand",
      "B) By using a calibrated charging scale or the recovery/recharge machine's built-in scale",
      "C) By adding refrigerant until frost appears on the accumulator",
      "D) By running the engine at high RPM"
    ],
    answer: 1,
    explanation: "The most accurate method to ensure the correct refrigerant charge is by using a calibrated charging scale or the built-in scale on a recovery/recharge machine. The exact charge amount specified on the underhood label or service manual is weighed in. Guessing or using pressure alone is inaccurate.",
    diagram: "",
    terms: ["refrigerant", "r134a", "manifold_gauge", "compressor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=_z1LchPP5GQ",
    youtubeTitle: "Proper Refrigerant Charging by Weight",
    qChinese: "技师如何验证空调系统中已充入正确量的制冷剂？",
    optionsChinese: [
      "A) 用手感觉管路温度",
      "B) 使用校准的充注秤或回收/充注机的内置秤",
      "C) 添加制冷剂直到蓄液器出现霜冻",
      "D) 高转速运行发动机"
    ],
    explanationChinese: "确保正确制冷剂充量的最准确方法是使用校准的充注秤或回收/充注机上的内置秤。按照发动机罩下标签或维修手册上指定的确切充量进行称重充注。猜测或仅使用压力是不准确的。"
  },
  {
    id: 187,
    q: "What causes the A/C compressor clutch to chatter or slip?",
    options: [
      "A) A fully charged system",
      "B) Low refrigerant charge, incorrect air gap, or low voltage to the clutch coil",
      "C) A new cabin air filter",
      "D) A properly working blend door"
    ],
    answer: 1,
    explanation: "Compressor clutch chatter or slipping can be caused by low refrigerant charge (causing rapid cycling), excessive clutch air gap, low voltage to the clutch coil, oil contamination on the clutch friction surfaces, or a weak clutch coil. Diagnosis should include checking charge level, voltage, and air gap.",
    diagram: "",
    terms: ["ac_clutch", "compressor", "refrigerant", "manifold_gauge"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Clutch Chatter Diagnosis",
    qChinese: "什么导致空调压缩机离合器抖动或打滑？",
    optionsChinese: [
      "A) 系统充量充足",
      "B) 制冷剂充量不足、间隙不正确或离合器线圈电压低",
      "C) 新的座舱空气滤清器",
      "D) 混合风门正常工作"
    ],
    explanationChinese: "压缩机离合器抖动或打滑可能由制冷剂充量不足（导致快速循环）、离合器间隙过大、离合器线圈电压低、离合器摩擦面油污染或离合器线圈弱引起。诊断应包括检查充量水平、电压和间隙。"
  },
  {
    id: 188,
    q: "What is the FIRST thing a technician should check if the A/C compressor will not engage at all?",
    options: [
      "A) The refrigerant charge level",
      "B) The A/C fuse and compressor clutch relay",
      "C) The blend door actuator",
      "D) The cabin air filter"
    ],
    answer: 1,
    explanation: "When the compressor will not engage at all, the technician should first check basic electrical components: the A/C fuse, compressor clutch relay, and wiring. A blown fuse or failed relay will prevent voltage from reaching the clutch coil. These are quick, simple checks before more complex diagnosis.",
    diagram: "",
    terms: ["ac_clutch", "compressor", "refrigerant", "evaporator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "A/C Compressor Not Engaging Fix",
    qChinese: "如果空调压缩机完全不接合，技师首先应该检查什么？",
    optionsChinese: [
      "A) 制冷剂充量水平",
      "B) 空调保险丝和压缩机离合器继电器",
      "C) 混合风门执行器",
      "D) 座舱空气滤清器"
    ],
    explanationChinese: "当压缩机完全不接合时，技师应首先检查基本电气部件：空调保险丝、压缩机离合器继电器和线路。烧断的保险丝或失效的继电器会阻止电压到达离合器线圈。这些是进行更复杂诊断之前的快速简单检查。"
  },
  {
    id: 189,
    q: "Technician A says nitrogen can be used for leak testing an A/C system. Technician B says compressed air is the preferred method for leak testing. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Technician A is correct. Dry nitrogen (OFN - oxygen-free nitrogen) is used for pressure leak testing A/C systems because it is dry, inert, and will not introduce moisture or contaminants. Compressed shop air should not be used because it contains moisture and oxygen that can damage the system.",
    diagram: "",
    terms: ["refrigerant", "compressor", "condenser", "evaporator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "Nitrogen Leak Test for A/C Systems",
    qChinese: "技师A说可以使用氮气对空调系统进行泄漏测试。技师B说压缩空气是泄漏测试的首选方法。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "技师A正确。干燥氮气（OFN-无氧氮气）用于空调系统的压力泄漏测试，因为它干燥、惰性，不会引入水分或污染物。不应使用车间压缩空气，因为它含有可能损坏系统的水分和氧气。"
  },
  {
    id: 190,
    q: "What information is found on the underhood A/C system label?",
    options: [
      "A) The engine firing order",
      "B) The type and amount of refrigerant and compressor oil specified for the system",
      "C) The tire pressure specifications",
      "D) The transmission fluid type"
    ],
    answer: 1,
    explanation: "The underhood A/C system label provides critical service information including the type of refrigerant (R-134a or R-1234yf), the total system charge amount in ounces or grams, and the type and amount of compressor oil required. This information is essential for proper A/C service.",
    diagram: "",
    terms: ["refrigerant", "r134a", "compressor", "condenser"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=_z1LchPP5GQ",
    youtubeTitle: "Reading the A/C System Label",
    qChinese: "发动机罩下的空调系统标签上有什么信息？",
    optionsChinese: [
      "A) 发动机点火顺序",
      "B) 系统指定的制冷剂类型和数量以及压缩机油",
      "C) 轮胎压力规格",
      "D) 变速箱油类型"
    ],
    explanationChinese: "发动机罩下的空调系统标签提供关键的维修信息，包括制冷剂类型（R-134a或R-1234yf）、以盎司或克为单位的总系统充量，以及所需的压缩机油类型和数量。这些信息对于正确的空调维修至关重要。"
  },
  {
    id: 191,
    q: "What is the consequence of operating an A/C system that is significantly undercharged?",
    options: [
      "A) The system will cool better than normal",
      "B) The compressor may overheat and fail due to insufficient lubrication",
      "C) The condenser will freeze over",
      "D) The blower motor will run faster"
    ],
    answer: 1,
    explanation: "A significantly undercharged A/C system can cause the compressor to overheat and fail. Refrigerant oil circulates with the refrigerant, so a low charge means less oil returns to the compressor for lubrication and cooling. Extended operation in this condition can cause catastrophic compressor failure.",
    diagram: "",
    terms: ["compressor", "refrigerant", "ac_clutch", "condenser"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "Low Refrigerant Damage to Compressor",
    qChinese: "运行制冷剂严重不足的空调系统会有什么后果？",
    optionsChinese: [
      "A) 系统制冷效果会比正常更好",
      "B) 压缩机可能因润滑不足而过热并失效",
      "C) 冷凝器会结冰",
      "D) 鼓风机电机会运转更快"
    ],
    explanationChinese: "制冷剂严重不足的空调系统可能导致压缩机过热并失效。制冷剂油随制冷剂循环，因此充量不足意味着返回压缩机进行润滑和冷却的油更少。在此条件下长时间运行可能导致压缩机灾难性故障。"
  },
  {
    id: 192,
    q: "Which component in the HVAC system creates airflow through the ductwork?",
    options: [
      "A) The compressor",
      "B) The condenser fan",
      "C) The blower motor",
      "D) The expansion valve"
    ],
    answer: 2,
    explanation: "The blower motor and its squirrel cage fan create airflow through the HVAC ductwork and into the passenger compartment. The blower motor forces air across the evaporator and heater core, and through the various ducts to the selected outlet vents. Speed is controlled by a resistor or electronic module.",
    diagram: "",
    terms: ["blower_motor", "evaporator", "heater_core", "cabin_air_filter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Blower Motor Operation Explained",
    qChinese: "HVAC系统中哪个部件产生通过管道的气流？",
    optionsChinese: [
      "A) 压缩机",
      "B) 冷凝器风扇",
      "C) 鼓风机电机",
      "D) 膨胀阀"
    ],
    explanationChinese: "鼓风机电机及其鼠笼式风扇产生通过HVAC管道并进入乘客舱的气流。鼓风机电机强制空气流过蒸发器和加热器芯，并通过各种管道到达选定的出风口。速度由电阻器或电子模块控制。"
  },
  {
    id: 193,
    q: "A vehicle equipped with automatic climate control has a temperature that is 10°F warmer on one side. What is the MOST likely cause?",
    options: [
      "A) Low refrigerant",
      "B) A faulty blend door actuator on the warmer side",
      "C) A clogged condenser",
      "D) A broken compressor"
    ],
    answer: 1,
    explanation: "In a dual-zone automatic climate control system, a significant temperature difference between sides typically indicates a faulty blend door actuator on the warmer side. The actuator may not be moving the blend door to the correct position, allowing too much heated air to mix with the cooled air on that side.",
    diagram: "",
    terms: ["blend_door", "heater_core", "evaporator", "blower_motor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Dual Zone Temperature Problem Fix",
    qChinese: "配备自动气候控制的车辆一侧温度比另一侧高10°F。最可能的原因是什么？",
    optionsChinese: [
      "A) 制冷剂不足",
      "B) 较暖一侧的混合风门执行器故障",
      "C) 冷凝器堵塞",
      "D) 压缩机损坏"
    ],
    explanationChinese: "在双区自动气候控制系统中，两侧之间的显著温差通常表明较暖一侧的混合风门执行器故障。执行器可能没有将混合风门移动到正确位置，允许过多的热空气与该侧的冷空气混合。"
  },
  {
    id: 194,
    q: "Technician A says the A/C system should be turned on periodically during winter months. Technician B says this helps keep compressor seals lubricated. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Running the A/C periodically during winter keeps the compressor shaft seal and internal seals lubricated with refrigerant oil. Extended periods without operation can cause seals to dry out, shrink, and leak. Most vehicles also engage the A/C automatically in defrost mode.",
    diagram: "",
    terms: ["compressor", "ac_clutch", "refrigerant", "condenser"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "Why Run A/C in Winter",
    qChinese: "技师A说在冬季应定期开启空调系统。技师B说这有助于保持压缩机密封件的润滑。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都正确。在冬季定期运行空调可以用制冷剂油保持压缩机轴封和内部密封件的润滑。长时间不运行会导致密封件干燥、收缩和泄漏。大多数车辆在除霜模式下也会自动接合空调。"
  },
  {
    id: 195,
    q: "What does a TXV sense to regulate refrigerant flow?",
    options: [
      "A) High-side pressure only",
      "B) Evaporator outlet temperature and pressure (superheat)",
      "C) Ambient air temperature",
      "D) Engine coolant temperature"
    ],
    answer: 1,
    explanation: "The thermostatic expansion valve (TXV) senses the temperature at the evaporator outlet via a sensing bulb and the evaporator pressure via an internal equalizer. It uses these inputs to calculate superheat and modulate the valve opening, precisely controlling refrigerant flow to maintain optimal evaporator performance.",
    diagram: "",
    terms: ["expansion_valve", "evaporator", "refrigerant", "compressor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "TXV Operation and Superheat",
    qChinese: "TXV感知什么来调节制冷剂流量？",
    optionsChinese: [
      "A) 仅高压侧压力",
      "B) 蒸发器出口温度和压力（过热度）",
      "C) 环境空气温度",
      "D) 发动机冷却液温度"
    ],
    explanationChinese: "热力膨胀阀（TXV）通过感温包感知蒸发器出口温度，通过内部均压器感知蒸发器压力。它使用这些输入计算过热度并调节阀门开度，精确控制制冷剂流量以维持最佳蒸发器性能。"
  },
  {
    id: 196,
    q: "What is the consequence of a clogged orifice tube?",
    options: [
      "A) Both pressures increase",
      "B) Low-side pressure drops very low and high-side pressure may increase; poor or no cooling",
      "C) The blower motor speeds up",
      "D) The heater core leaks"
    ],
    answer: 1,
    explanation: "A clogged orifice tube restricts refrigerant flow to the evaporator, causing low-side pressure to drop very low or near vacuum. High-side pressure may increase because refrigerant backs up before the restriction. The result is poor or no cooling because the evaporator is starved of refrigerant.",
    diagram: "",
    terms: ["orifice_tube", "evaporator", "refrigerant", "manifold_gauge"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "Clogged Orifice Tube Diagnosis",
    qChinese: "孔管堵塞有什么后果？",
    optionsChinese: [
      "A) 两个压力都升高",
      "B) 低压侧压力降得很低，高压侧压力可能升高；制冷效果差或没有",
      "C) 鼓风机电机加速",
      "D) 加热器芯泄漏"
    ],
    explanationChinese: "堵塞的孔管限制了流向蒸发器的制冷剂，导致低压侧压力降得很低或接近真空。高压侧压力可能升高，因为制冷剂在限制处前堆积。结果是制冷效果差或没有，因为蒸发器缺少制冷剂供给。"
  },
  {
    id: 197,
    q: "Why is it important to check for the correct refrigerant type before connecting service equipment?",
    options: [
      "A) It is not important; all refrigerants are compatible",
      "B) To prevent equipment contamination and ensure proper system operation",
      "C) To determine the engine oil type",
      "D) To check the transmission fluid level"
    ],
    answer: 1,
    explanation: "Verifying the refrigerant type before service prevents cross-contamination of recovery and recycling equipment. Using the wrong refrigerant can also damage the A/C system components, degrade system seals, and create unsafe conditions, especially with flammable R-1234yf. A refrigerant identifier tool is recommended.",
    diagram: "",
    terms: ["refrigerant", "r134a", "compressor", "manifold_gauge"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=_z1LchPP5GQ",
    youtubeTitle: "Refrigerant Identification Before Service",
    qChinese: "为什么在连接维修设备之前检查正确的制冷剂类型很重要？",
    optionsChinese: [
      "A) 不重要；所有制冷剂都是兼容的",
      "B) 防止设备污染并确保系统正常运行",
      "C) 确定发动机油类型",
      "D) 检查变速箱油位"
    ],
    explanationChinese: "在维修前验证制冷剂类型可防止回收和再生设备的交叉污染。使用错误的制冷剂还可能损坏空调系统部件、降解系统密封件，并造成不安全的条件，特别是对于可燃的R-1234yf。建议使用制冷剂识别工具。"
  },
  {
    id: 198,
    q: "What is the function of the condenser fan in an A/C system?",
    options: [
      "A) To cool the evaporator",
      "B) To provide airflow across the condenser for heat dissipation, especially at low vehicle speeds",
      "C) To circulate cabin air",
      "D) To cool the compressor clutch"
    ],
    answer: 1,
    explanation: "The condenser fan provides airflow across the condenser to help dissipate heat from the hot refrigerant, especially when the vehicle is idling or moving slowly and there is insufficient ram air. Without the fan, high-side pressure would rise excessively at low speeds, reducing cooling performance.",
    diagram: "",
    terms: ["condenser", "compressor", "refrigerant", "ac_clutch"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=pBKd4bKMZSc",
    youtubeTitle: "Condenser Fan Operation and Testing",
    qChinese: "空调系统中冷凝器风扇的功能是什么？",
    optionsChinese: [
      "A) 冷却蒸发器",
      "B) 为冷凝器提供气流以散热，特别是在低车速时",
      "C) 循环车内空气",
      "D) 冷却压缩机离合器"
    ],
    explanationChinese: "冷凝器风扇为冷凝器提供气流以帮助散发热制冷剂的热量，特别是当车辆怠速或缓慢行驶且冲压空气不足时。没有风扇，高压侧压力在低速时会过度升高，降低制冷性能。"
  },
  {
    id: 199,
    q: "Technician A says the cabin air filter should be replaced according to the manufacturer's maintenance schedule. Technician B says a dirty cabin air filter can cause premature blower motor failure. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. The cabin air filter should be replaced per the manufacturer's schedule, typically every 15,000 to 30,000 miles. A severely clogged filter restricts airflow, causing the blower motor to work harder and overheat, which can lead to premature motor bearing wear and failure.",
    diagram: "",
    terms: ["cabin_air_filter", "blower_motor", "evaporator", "blend_door"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=n4I94Nq4MFQ",
    youtubeTitle: "Cabin Air Filter Maintenance",
    qChinese: "技师A说应按照制造商的维护计划更换座舱空气滤清器。技师B说脏的座舱空气滤清器可能导致鼓风机电机提前失效。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都正确。座舱空气滤清器应按制造商的计划更换，通常每15,000至30,000英里。严重堵塞的滤清器限制气流，导致鼓风机电机工作更努力并过热，可能导致电机轴承提前磨损和失效。"
  },
  {
    id: 200,
    q: "What is the proper procedure for connecting a manifold gauge set to an A/C system?",
    options: [
      "A) Connect gauges while the engine is running at high RPM",
      "B) Connect the blue hose to the low-side port and red hose to the high-side port with the engine off",
      "C) Connect both hoses to the high-side port",
      "D) Connect the red hose to the low-side port and blue hose to the high-side port"
    ],
    answer: 1,
    explanation: "The correct procedure is to connect the blue hose to the low-pressure service port and the red hose to the high-pressure service port with the engine off. The yellow center hose connects to the vacuum pump or refrigerant supply. Read static pressure first, then start the engine and A/C for operational readings.",
    diagram: "",
    terms: ["manifold_gauge", "compressor", "refrigerant", "r134a"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Heatpump.svg/640px-Heatpump.svg.png",
    youtube: "https://www.youtube.com/watch?v=jIQ6S7xqNSc",
    youtubeTitle: "How to Connect A/C Manifold Gauges",
    qChinese: "将歧管压力表组连接到空调系统的正确程序是什么？",
    optionsChinese: [
      "A) 在发动机高转速运行时连接压力表",
      "B) 发动机关闭时将蓝色软管连接到低压侧维修口，红色软管连接到高压侧维修口",
      "C) 将两根软管都连接到高压侧维修口",
      "D) 将红色软管连接到低压侧维修口，蓝色软管连接到高压侧维修口"
    ],
    explanationChinese: "正确的程序是在发动机关闭时将蓝色软管连接到低压维修口，红色软管连接到高压维修口。黄色中间软管连接到真空泵或制冷剂供应。先读取静态压力，然后启动发动机和空调以获取运行读数。"
  }

];
