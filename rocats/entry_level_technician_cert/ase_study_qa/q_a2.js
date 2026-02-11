const questionsA2 = [
  // ============================================================
  // TRANSMISSION/TRANSAXLE DIAGNOSIS (Questions 1-58)
  // ============================================================
  {
    id: 1,
    q: "A vehicle equipped with an automatic transmission has dark brown fluid with a burnt odor. What does this most likely indicate?",
    qChinese: "一辆配备自动变速箱的车辆，变速箱油呈深棕色且有烧焦气味。这最可能表明什么？",
    options: [
      "A) Normal fluid condition after 30,000 miles",
      "B) Overheated or worn clutch material in the transmission",
      "C) Coolant contamination from a leaking radiator",
      "D) Incorrect fluid type was used during the last service"
    ],
    optionsChinese: [
      "A) 行驶30,000英里后的正常油液状态",
      "B) 变速箱内离合器材料过热或磨损",
      "C) 散热器泄漏导致冷却液污染",
      "D) 上次保养时使用了错误的油液类型"
    ],
    answer: 1,
    explanation: "Dark brown or black transmission fluid with a burnt smell is a strong indicator of overheating or deteriorated clutch friction material. Normal ATF is red or light pink. This condition often means internal damage has occurred and a rebuild or replacement may be needed.",
    explanationChinese: "深棕色或黑色的变速箱油伴有烧焦气味，是过热或离合器摩擦材料劣化的强烈信号。正常的ATF（自动变速箱油）呈红色或浅粉色。这种情况通常意味着已经发生了内部损坏，可能需要大修或更换。",
    diagram: "",
    terms: ["transmission_fluid", "clutch_pack", "transmission_cooler"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Automatic Transmission Fluid - What You Need to Know"
  },
  {
    id: 2,
    q: "Transmission fluid appears milky pink. What is the most likely cause?",
    qChinese: "变速箱油呈乳白粉色。最可能的原因是什么？",
    options: [
      "A) Overheating of the torque converter",
      "B) Coolant contamination from a failed transmission cooler",
      "C) Aerated fluid from an overfilled transmission",
      "D) Normal oxidation of the fluid over time"
    ],
    optionsChinese: [
      "A) 液力变矩器过热",
      "B) 变速箱冷却器故障导致冷却液污染",
      "C) 变速箱加注过量导致油液充气",
      "D) 油液随时间正常氧化"
    ],
    answer: 1,
    explanation: "Milky pink or strawberry-colored ATF indicates coolant contamination, typically from a crack in the transmission cooler inside the radiator. Coolant mixes with ATF, creating the milky appearance. This requires immediate repair, as coolant destroys clutch friction material and seals rapidly.",
    explanationChinese: "乳白粉色或草莓色的ATF表明有冷却液污染，通常是由于散热器内部变速箱冷却器破裂所致。冷却液与ATF混合产生乳白色外观。这需要立即修理，因为冷却液会迅速破坏离合器摩擦材料和密封件。",
    diagram: "",
    terms: ["transmission_fluid", "transmission_cooler", "radiator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Transmission Cooling System Explained"
  },
  {
    id: 3,
    q: "Technician A says a DTC P0700 indicates a specific transmission solenoid failure. Technician B says P0700 is a general powertrain control module code indicating a transmission-related fault has been stored. Who is correct?",
    qChinese: "技师A说DTC P0700表示某个特定的变速箱电磁阀故障。技师B说P0700是动力总成控制模块的通用代码，表示已存储了与变速箱相关的故障。谁是正确的？",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    answer: 1,
    explanation: "P0700 is a generic OBD II code that simply alerts the PCM that the TCM has stored a transmission-related DTC. It does not specify which component has failed. The technician must retrieve the specific transmission code to pinpoint the problem. Technician B is correct.",
    explanationChinese: "P0700是一个通用OBD II代码，仅提醒PCM（动力总成控制模块）TCM（变速箱控制模块）已存储了与变速箱相关的DTC。它不指定哪个部件发生了故障。技师必须读取具体的变速箱故障代码来定位问题。技师B是正确的。",
    diagram: "",
    terms: ["dtc", "pcm", "tcm", "obd2"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "Transmission Control Module Function"
  },
  {
    id: 4,
    q: "A vehicle sets DTC P0730 (Incorrect Gear Ratio). All of the following could cause this code EXCEPT:",
    qChinese: "一辆车设置了DTC P0730（齿轮比不正确）。以下所有原因都可能导致此代码，除了：",
    options: [
      "A) Worn clutch packs",
      "B) A faulty output speed sensor",
      "C) A clogged transmission cooler line",
      "D) Slipping one-way clutch"
    ],
    optionsChinese: [
      "A) 磨损的离合器片组",
      "B) 故障的输出速度传感器",
      "C) 堵塞的变速箱冷却管路",
      "D) 打滑的单向离合器"
    ],
    answer: 2,
    explanation: "P0730 is set when the PCM detects that the actual gear ratio does not match the expected gear ratio. Worn clutches, a faulty output speed sensor giving incorrect readings, and a slipping one-way clutch can all cause this. A clogged cooler line causes overheating, not a direct gear ratio error.",
    explanationChinese: "当PCM检测到实际齿轮比与预期齿轮比不匹配时，会设置P0730。磨损的离合器、给出不正确读数的故障输出速度传感器以及打滑的单向离合器都可能导致此代码。堵塞的冷却管路会导致过热，而不是直接的齿轮比错误。",
    diagram: "",
    terms: ["dtc", "clutch_pack", "speed_sensor", "transmission_cooler"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "Automatic Transmission Diagnosis Basics"
  },
  {
    id: 5,
    q: "During an OBD II scan, a technician retrieves DTC P0750 (Shift Solenoid A Malfunction). What should be checked first?",
    qChinese: "在OBD II扫描期间，技师读取到DTC P0750（换挡电磁阀A故障）。应首先检查什么？",
    options: [
      "A) Transmission fluid level and condition",
      "B) Electrical connector and wiring to shift solenoid A",
      "C) Torque converter clutch operation",
      "D) Transmission mount condition"
    ],
    optionsChinese: [
      "A) 变速箱油液位和状态",
      "B) 换挡电磁阀A的电气接头和线路",
      "C) 液力变矩器离合器工作情况",
      "D) 变速箱支架状况"
    ],
    answer: 1,
    explanation: "When diagnosing a shift solenoid malfunction code, the technician should first inspect the electrical connector and wiring for damage, corrosion, or loose connections before replacing the solenoid. Many solenoid codes are caused by wiring or connector issues rather than a failed solenoid itself.",
    explanationChinese: "在诊断换挡电磁阀故障代码时，技师应首先检查电气接头和线路是否有损坏、腐蚀或松动连接，然后再更换电磁阀。许多电磁阀代码是由线路或接头问题引起的，而非电磁阀本身故障。",
    diagram: "",
    terms: ["shift_solenoid", "dtc", "scan_tool", "obd2"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=hE-bFcLHbGc",
    youtubeTitle: "How Shift Solenoids Work"
  },
  {
    id: 6,
    q: "A vehicle experiences harsh 1-2 upshifts but all other shifts are normal. What is the most likely cause?",
    qChinese: "一辆车在1-2升挡时感觉生硬，但其他所有换挡正常。最可能的原因是什么？",
    options: [
      "A) Low transmission fluid level",
      "B) A faulty 1-2 accumulator piston or spring",
      "C) A worn torque converter",
      "D) Incorrect engine idle speed"
    ],
    optionsChinese: [
      "A) 变速箱油液位低",
      "B) 1-2挡蓄压器活塞或弹簧故障",
      "C) 液力变矩器磨损",
      "D) 发动机怠速不正确"
    ],
    answer: 1,
    explanation: "A harsh or firm shift isolated to one particular shift point typically indicates a problem with the accumulator for that specific shift. The 1-2 accumulator cushions the apply of the band or clutch during the 1-2 shift. A damaged piston seal or broken spring causes a harsh engagement.",
    explanationChinese: "仅在某个特定换挡点出现的生硬或坚硬换挡，通常表明该特定换挡的蓄压器有问题。1-2挡蓄压器在1-2升挡过程中缓冲制动带或离合器的接合。活塞密封损坏或弹簧断裂会导致接合生硬。",
    diagram: "",
    terms: ["valve_body", "clutch_pack", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "Automatic Transmission Valve Body Explained"
  },
  {
    id: 7,
    q: "Technician A says a whining noise that changes with engine RPM but not vehicle speed is likely from the torque converter or oil pump. Technician B says the noise is likely from the planetary gear set. Who is correct?",
    qChinese: "技师A说随发动机转速变化但不随车速变化的啸叫声可能来自液力变矩器或油泵。技师B说该噪声可能来自行星齿轮组。谁是正确的？",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    answer: 0,
    explanation: "A whining noise that varies with engine RPM but not vehicle speed points to components that rotate with the engine, such as the torque converter or transmission oil pump. Planetary gear noise would change with vehicle speed and gear selection. Technician A is correct.",
    explanationChinese: "随发动机转速变化但不随车速变化的啸叫声指向与发动机一起旋转的部件，如液力变矩器或变速箱油泵。行星齿轮的噪声会随车速和挡位选择而变化。技师A是正确的。",
    diagram: "",
    terms: ["torque_converter", "planetary_gear_set"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Torque_converter_cutaway.svg/640px-Torque_converter_cutaway.svg.png",
    youtube: "https://www.youtube.com/watch?v=z1ZlC7OAiNk",
    youtubeTitle: "How a Torque Converter Works"
  },
  {
    id: 8,
    q: "During a road test, a transmission slips in third gear only. All other gears function normally. What is the most likely cause?",
    qChinese: "在路试中，变速箱仅在三挡打滑。所有其他挡位功能正常。最可能的原因是什么？",
    options: [
      "A) Low fluid level",
      "B) A worn third gear clutch pack",
      "C) A faulty governor",
      "D) A stuck pressure regulator valve"
    ],
    optionsChinese: [
      "A) 油液位低",
      "B) 三挡离合器片组磨损",
      "C) 调速器故障",
      "D) 压力调节阀卡滞"
    ],
    answer: 1,
    explanation: "Slipping isolated to one specific gear indicates a problem with the apply device (clutch pack or band) used exclusively in that gear. If the fluid level or main pressure were low, slipping would occur in multiple gears. A worn third gear clutch pack is the most likely cause.",
    explanationChinese: "仅在某一特定挡位出现打滑表明该挡位专用的接合装置（离合器片组或制动带）有问题。如果油液位或主油压低，多个挡位都会出现打滑。三挡离合器片组磨损是最可能的原因。",
    diagram: "",
    terms: ["clutch_pack", "valve_body", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "How Automatic Transmission Clutches Work"
  },
  {
    id: 9,
    q: "Technician A says ATF level should be checked with the engine running and the transmission at operating temperature. Technician B says the gear selector should be in Park or Neutral during the check. Who is correct?",
    qChinese: "技师A说应在发动机运转且变速箱达到工作温度时检查ATF液位。技师B说检查时挡位选择器应在驻车挡（P）或空挡（N）。谁是正确的？",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Most manufacturers specify checking ATF with the engine running at idle, the fluid at operating temperature, and the selector in Park or Neutral. This ensures the converter is full and fluid is circulating, giving an accurate dipstick reading.",
    explanationChinese: "两位技师都是正确的。大多数制造商规定检查ATF时发动机应怠速运转，油液达到工作温度，选择器在驻车挡或空挡位置。这确保变矩器已充满油液且油液在循环，从而获得准确的油尺读数。",
    diagram: "",
    terms: ["transmission_fluid", "torque_converter", "transmission_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Automatic Transmission Fluid - What You Need to Know"
  },
  {
    id: 10,
    q: "A transmission has normal line pressure in all forward gears but low pressure in reverse. What is the most likely cause?",
    qChinese: "一台变速箱在所有前进挡中主油压正常，但在倒挡中油压偏低。最可能的原因是什么？",
    options: [
      "A) A worn oil pump",
      "B) A leaking reverse servo or clutch circuit",
      "C) A stuck pressure regulator valve",
      "D) A clogged transmission filter"
    ],
    optionsChinese: [
      "A) 油泵磨损",
      "B) 倒挡伺服器或离合器回路泄漏",
      "C) 压力调节阀卡滞",
      "D) 变速箱滤清器堵塞"
    ],
    answer: 1,
    explanation: "If line pressure is normal in all forward gears but low only in reverse, the problem is isolated to the reverse hydraulic circuit. A leaking reverse servo seal, damaged reverse clutch piston seal, or cracked reverse apply circuit would cause this condition without affecting forward gear pressure.",
    explanationChinese: "如果所有前进挡主油压正常但仅倒挡油压偏低，则问题局限于倒挡液压回路。倒挡伺服器密封泄漏、倒挡离合器活塞密封损坏或倒挡接合回路破裂都会导致此状况，而不影响前进挡油压。",
    diagram: "",
    terms: ["clutch_pack", "valve_body", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "How Automatic Transmission Clutches Work"
  },
  {
    id: 11,
    q: "Hydraulic pressure tests show low line pressure in all gears and all ranges. All of the following could cause this EXCEPT:",
    qChinese: "液压压力测试显示所有挡位和所有范围的主油压均偏低。以下所有原因都可能导致此问题，除了：",
    options: [
      "A) A worn oil pump",
      "B) A stuck-open pressure regulator valve",
      "C) Low transmission fluid level",
      "D) A worn second gear band"
    ],
    optionsChinese: [
      "A) 油泵磨损",
      "B) 压力调节阀卡在开启位置",
      "C) 变速箱油液位低",
      "D) 二挡制动带磨损"
    ],
    answer: 3,
    explanation: "Low line pressure across all ranges indicates a problem in the main pressure supply system. A worn oil pump, stuck pressure regulator, and low fluid level all affect overall system pressure. A worn second gear band would only affect second gear operation, not system-wide line pressure.",
    explanationChinese: "所有范围内主油压偏低表明主压力供给系统存在问题。油泵磨损、压力调节阀卡滞和油液位低都会影响整个系统的油压。而二挡制动带磨损只会影响二挡的工作，不会影响全系统主油压。",
    diagram: "",
    terms: ["valve_body", "transmission_fluid", "clutch_pack"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "Automatic Transmission Valve Body Explained"
  },
  {
    id: 12,
    q: "A torque converter clutch (TCC) does not engage. The vehicle has poor fuel economy and the engine runs at higher RPM on the highway. What should be checked first?",
    qChinese: "液力变矩器离合器（TCC）不接合。车辆油耗高且在高速公路上发动机转速偏高。应首先检查什么？",
    options: [
      "A) The stator one-way clutch",
      "B) The TCC solenoid, wiring, and related DTCs",
      "C) The planetary gear set",
      "D) The transmission output shaft seal"
    ],
    optionsChinese: [
      "A) 导轮单向离合器",
      "B) TCC电磁阀、线路和相关故障代码",
      "C) 行星齿轮组",
      "D) 变速箱输出轴密封"
    ],
    answer: 1,
    explanation: "A non-engaging torque converter clutch causes the engine to run at higher RPM than expected at highway speed, reducing fuel economy. The TCC solenoid, its electrical circuit, and any stored DTCs should be checked first because electrical faults are the most common cause of TCC non-engagement.",
    explanationChinese: "液力变矩器离合器不接合会导致发动机在高速公路速度下转速高于预期，降低燃油经济性。应首先检查TCC电磁阀、其电气回路及任何已存储的DTC，因为电气故障是TCC不接合最常见的原因。",
    diagram: "",
    terms: ["torque_converter", "shift_solenoid", "dtc", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Torque_converter_cutaway.svg/640px-Torque_converter_cutaway.svg.png",
    youtube: "https://www.youtube.com/watch?v=z1ZlC7OAiNk",
    youtubeTitle: "How a Torque Converter Works"
  },
  {
    id: 13,
    q: "Technician A says a shudder felt at light throttle during TCC lockup could be caused by contaminated transmission fluid. Technician B says it could be caused by a worn torque converter clutch friction surface. Who is correct?",
    qChinese: "技师A说在TCC锁止时轻踩油门感觉到的抖动可能是由变速箱油污染引起的。技师B说可能是由液力变矩器离合器摩擦面磨损引起的。谁是正确的？",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    answer: 2,
    explanation: "Both technicians are correct. TCC shudder at light throttle can be caused by contaminated or degraded ATF that has lost its friction modifier properties, or by a worn or glazed converter clutch friction surface. Fluid replacement sometimes resolves the issue; otherwise, the converter must be replaced.",
    explanationChinese: "两位技师都是正确的。轻踩油门时TCC抖动可能是由污染或劣化的ATF失去其摩擦改性剂性能引起的，也可能是由变矩器离合器摩擦面磨损或发亮引起的。更换油液有时可以解决问题；否则必须更换变矩器。",
    diagram: "",
    terms: ["torque_converter", "transmission_fluid", "clutch_pack"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Torque_converter_cutaway.svg/640px-Torque_converter_cutaway.svg.png",
    youtube: "https://www.youtube.com/watch?v=z1ZlC7OAiNk",
    youtubeTitle: "How a Torque Converter Works"
  },
  {
    id: 14,
    q: "A vehicle's transmission will not shift out of first gear. The speedometer also does not work. What is the most likely cause?",
    qChinese: "一辆车的变速箱无法从一挡升挡。车速表也不工作。最可能的原因是什么？",
    options: [
      "A) A faulty turbine (input) speed sensor",
      "B) A faulty vehicle speed sensor (VSS) or output speed sensor",
      "C) A stuck shift solenoid",
      "D) A broken overdrive band"
    ],
    optionsChinese: [
      "A) 涡轮（输入）速度传感器故障",
      "B) 车速传感器（VSS）或输出速度传感器故障",
      "C) 换挡电磁阀卡滞",
      "D) 超速挡制动带断裂"
    ],
    answer: 1,
    explanation: "Both the speedometer and the shift strategy rely on the vehicle speed sensor or output speed sensor signal. Without a valid speed signal, the PCM/TCM cannot determine when to command upshifts and the speedometer reads zero. Replacing the faulty sensor typically restores both functions.",
    explanationChinese: "车速表和换挡策略都依赖于车速传感器或输出速度传感器的信号。没有有效的速度信号，PCM/TCM无法确定何时指令升挡，车速表读数为零。更换故障传感器通常可恢复两项功能。",
    diagram: "",
    terms: ["speed_sensor", "tcm", "shift_solenoid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=hE-bFcLHbGc",
    youtubeTitle: "Transmission Speed Sensor Testing"
  },
  {
    id: 15,
    q: "DTC P0715 (Input/Turbine Speed Sensor Circuit Malfunction) is set. What does this sensor measure?",
    qChinese: "设置了DTC P0715（输入/涡轮速度传感器电路故障）。该传感器测量什么？",
    options: [
      "A) Engine crankshaft speed",
      "B) Rotational speed of the torque converter turbine shaft",
      "C) Vehicle road speed at the differential",
      "D) Governor pressure in the valve body"
    ],
    optionsChinese: [
      "A) 发动机曲轴转速",
      "B) 液力变矩器涡轮轴的旋转速度",
      "C) 差速器处的车辆行驶速度",
      "D) 阀体中的调速器压力"
    ],
    answer: 1,
    explanation: "The input or turbine speed sensor measures the rotational speed of the torque converter turbine, which is also the transmission input shaft speed. The PCM/TCM compares this with the output speed sensor to calculate gear ratios and monitor shift quality and torque converter clutch slip.",
    explanationChinese: "输入或涡轮速度传感器测量液力变矩器涡轮的旋转速度，即变速箱输入轴转速。PCM/TCM将此与输出速度传感器进行比较，以计算齿轮比并监控换挡质量和液力变矩器离合器滑差。",
    diagram: "",
    terms: ["speed_sensor", "torque_converter", "dtc", "tcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=hE-bFcLHbGc",
    youtubeTitle: "Transmission Speed Sensor Testing"
  },
  {
    id: 16,
    q: "Which of the following is NOT a function of the OBD II system related to automatic transmissions?",
    qChinese: "以下哪项不是OBD II系统与自动变速箱相关的功能？",
    options: [
      "A) Monitoring shift solenoid circuit integrity",
      "B) Detecting gear ratio errors",
      "C) Adjusting clutch pack clearances automatically",
      "D) Monitoring torque converter clutch slippage"
    ],
    optionsChinese: [
      "A) 监控换挡电磁阀电路完整性",
      "B) 检测齿轮比错误",
      "C) 自动调整离合器片组间隙",
      "D) 监控液力变矩器离合器滑差"
    ],
    answer: 2,
    explanation: "The OBD II system monitors electrical circuits, gear ratios, and TCC slippage to detect malfunctions and illuminate the MIL. However, the OBD II system cannot physically adjust clutch pack clearances. That is a mechanical procedure performed during transmission overhaul by a technician.",
    explanationChinese: "OBD II系统监控电气回路、齿轮比和TCC滑差以检测故障并点亮故障指示灯（MIL）。然而，OBD II系统无法物理地调整离合器片组间隙。这是技师在变速箱大修期间执行的机械操作。",
    diagram: "",
    terms: ["obd2", "shift_solenoid", "clutch_pack", "torque_converter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "Automatic Transmission Diagnosis Basics"
  },
  {
    id: 17,
    q: "Technician A says delayed forward engagement from Park to Drive can be caused by low fluid level. Technician B says it can be caused by worn forward clutch seals. Who is correct?",
    qChinese: "技师A说从驻车挡（P）挂入前进挡（D）时接合延迟可能是由油液位低引起的。技师B说可能是由前进挡离合器密封磨损引起的。谁是正确的？",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Low fluid level means the clutch pack takes longer to fill and apply, causing a delay. Worn forward clutch seals allow fluid to leak past the piston, reducing apply pressure and delaying engagement. Both are common causes of delayed forward engagement.",
    explanationChinese: "两位技师都是正确的。油液位低意味着离合器片组需要更长时间充液和接合，导致延迟。前进挡离合器密封磨损允许油液从活塞旁泄漏，降低接合压力并延迟接合。两者都是前进挡接合延迟的常见原因。",
    diagram: "",
    terms: ["transmission_fluid", "clutch_pack", "valve_body"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "How Automatic Transmission Clutches Work"
  },
  {
    id: 18,
    q: "During a stall test, engine RPM exceeds the specified stall speed. What does this indicate?",
    qChinese: "在失速测试中，发动机转速超过规定的失速转速。这表明什么？",
    options: [
      "A) A restricted exhaust system",
      "B) Slipping clutches or bands inside the transmission",
      "C) A locked-up stator in the torque converter",
      "D) An engine that is producing too much power"
    ],
    optionsChinese: [
      "A) 排气系统受阻",
      "B) 变速箱内部离合器或制动带打滑",
      "C) 液力变矩器中导轮锁死",
      "D) 发动机产生过多动力"
    ],
    answer: 1,
    explanation: "If stall speed is higher than specifications, the transmission clutches or bands are slipping, allowing the engine to rev beyond the normal stall point. A locked stator would produce low stall speed. A restricted exhaust would cause lower-than-normal stall speed due to reduced engine power output.",
    explanationChinese: "如果失速转速高于规格值，则变速箱离合器或制动带正在打滑，使发动机转速超过正常失速点。导轮锁死会产生低失速转速。排气系统受阻会因发动机输出功率降低而导致失速转速低于正常值。",
    diagram: "",
    terms: ["torque_converter", "clutch_pack", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Torque_converter_cutaway.svg/640px-Torque_converter_cutaway.svg.png",
    youtube: "https://www.youtube.com/watch?v=z1ZlC7OAiNk",
    youtubeTitle: "How a Torque Converter Works"
  },
  {
    id: 19,
    q: "During a stall test, engine RPM is significantly below the specified stall speed. What is the most likely cause?",
    qChinese: "在失速测试中，发动机转速明显低于规定的失速转速。最可能的原因是什么？",
    options: [
      "A) Slipping transmission clutch packs",
      "B) A stator one-way clutch that is not holding",
      "C) Low engine power output or a stator one-way clutch that is locked up",
      "D) An incorrect ATF type"
    ],
    optionsChinese: [
      "A) 变速箱离合器片组打滑",
      "B) 导轮单向离合器未锁止",
      "C) 发动机输出功率低或导轮单向离合器锁死",
      "D) ATF类型不正确"
    ],
    answer: 2,
    explanation: "Low stall speed indicates the engine cannot reach the expected RPM against the converter load. This can be caused by low engine power (fuel, ignition, or exhaust issue) or a stator that is locked in place, increasing resistance. A slipping stator would produce low efficiency at cruise, not low stall speed.",
    explanationChinese: "低失速转速表明发动机无法在变矩器负载下达到预期转速。这可能是由发动机功率低（燃油、点火或排气问题）或导轮锁死在原位增加阻力引起的。导轮打滑会在巡航时产生低效率，而不是低失速转速。",
    diagram: "",
    terms: ["torque_converter", "clutch_pack", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Torque_converter_cutaway.svg/640px-Torque_converter_cutaway.svg.png",
    youtube: "https://www.youtube.com/watch?v=z1ZlC7OAiNk",
    youtubeTitle: "How a Torque Converter Works"
  },
  {
    id: 20,
    q: "A vehicle has good acceleration from a stop but poor highway passing performance. The engine revs freely but the vehicle does not accelerate as expected. What is the most likely cause?",
    qChinese: "一辆车从停车状态加速良好，但高速公路超车性能差。发动机自由升速但车辆未按预期加速。最可能的原因是什么？",
    options: [
      "A) A slipping overdrive clutch or band",
      "B) A plugged catalytic converter",
      "C) Worn front brake pads",
      "D) A faulty mass air flow sensor"
    ],
    optionsChinese: [
      "A) 超速挡离合器或制动带打滑",
      "B) 三元催化器堵塞",
      "C) 前制动片磨损",
      "D) 空气流量传感器故障"
    ],
    answer: 0,
    explanation: "Good acceleration from a stop but poor passing power at highway speed suggests that the overdrive or high-gear holding device is slipping. When the driver demands more power, the transmission should downshift, but if the apply device slips, the engine revs without delivering power to the wheels.",
    explanationChinese: "从停车状态加速良好但高速公路超车动力不足，表明超速挡或高挡保持装置正在打滑。当驾驶员需要更多动力时，变速箱应降挡，但如果接合装置打滑，发动机会升速而不将动力传递到车轮。",
    diagram: "",
    terms: ["clutch_pack", "torque_converter", "shift_solenoid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "How Automatic Transmission Clutches Work"
  },
  {
    id: 21,
    q: "Technician A says an electronic pressure control (EPC) solenoid regulates transmission line pressure. Technician B says line pressure is controlled only by the mechanical pressure regulator valve. Who is correct?",
    qChinese: "技师A说电子压力控制（EPC）电磁阀调节变速箱主油压。技师B说主油压仅由机械压力调节阀控制。谁是正确的？",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    answer: 0,
    explanation: "In modern electronically controlled transmissions, the EPC solenoid controls line pressure by modulating the pressure regulator valve based on signals from the PCM/TCM. While the pressure regulator valve still physically regulates pressure, the EPC solenoid directs its operation. Technician A is correct.",
    explanationChinese: "在现代电控变速箱中，EPC电磁阀根据PCM/TCM的信号通过调制压力调节阀来控制主油压。虽然压力调节阀仍然物理地调节压力，但EPC电磁阀指导其工作。技师A是正确的。",
    diagram: "",
    terms: ["shift_solenoid", "valve_body", "tcm", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=hE-bFcLHbGc",
    youtubeTitle: "How Shift Solenoids Work"
  },
  {
    id: 22,
    q: "A transmission intermittently shifts erratically and the MIL illuminates. Wiggling the wiring harness connector at the transmission causes the MIL to flash. What is the most likely cause?",
    qChinese: "变速箱间歇性地换挡异常且故障指示灯（MIL）点亮。晃动变速箱处的线束接头会导致MIL闪烁。最可能的原因是什么？",
    options: [
      "A) A failed PCM",
      "B) An internal transmission mechanical failure",
      "C) A damaged or corroded wiring harness connector",
      "D) A faulty torque converter"
    ],
    optionsChinese: [
      "A) PCM故障",
      "B) 变速箱内部机械故障",
      "C) 线束接头损坏或腐蚀",
      "D) 液力变矩器故障"
    ],
    answer: 2,
    explanation: "Intermittent electrical problems that respond to physical manipulation of the connector indicate a damaged or corroded connector or wiring issue. This causes intermittent loss of signal to solenoids or sensors, resulting in erratic shifting and DTC storage. Repair or replace the connector and wiring.",
    explanationChinese: "对接头进行物理晃动时出现的间歇性电气问题表明接头或线路损坏或腐蚀。这会导致电磁阀或传感器信号间歇性丢失，造成换挡异常和DTC存储。应修理或更换接头和线路。",
    diagram: "",
    terms: ["shift_solenoid", "dtc", "tcm", "ground_circuit"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "Automatic Transmission Diagnosis Basics"
  },
  {
    id: 23,
    q: "What does a DTC P0740 (Torque Converter Clutch Circuit Malfunction) indicate?",
    qChinese: "DTC P0740（液力变矩器离合器电路故障）表示什么？",
    options: [
      "A) The TCC mechanical components are worn out",
      "B) An electrical problem in the TCC solenoid circuit",
      "C) The torque converter is physically damaged",
      "D) The transmission oil pump has failed"
    ],
    optionsChinese: [
      "A) TCC机械部件磨损",
      "B) TCC电磁阀电路存在电气问题",
      "C) 液力变矩器物理损坏",
      "D) 变速箱油泵故障"
    ],
    answer: 1,
    explanation: "P0740 indicates an electrical malfunction in the TCC solenoid circuit, such as an open or short. The PCM detected that the TCC solenoid circuit did not respond as expected. This requires diagnosis of the solenoid, wiring, and connector before assuming the converter itself is faulty.",
    explanationChinese: "P0740表示TCC电磁阀电路存在电气故障，如断路或短路。PCM检测到TCC电磁阀电路未按预期响应。在假定变矩器本身有故障之前，需要诊断电磁阀、线路和接头。",
    diagram: "",
    terms: ["torque_converter", "dtc", "shift_solenoid", "obd2"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Torque_converter_cutaway.svg/640px-Torque_converter_cutaway.svg.png",
    youtube: "https://www.youtube.com/watch?v=z1ZlC7OAiNk",
    youtubeTitle: "How a Torque Converter Works"
  },
  {
    id: 24,
    q: "A vehicle experiences a flare (RPM increase) during the 2-3 upshift. What is the most likely cause?",
    qChinese: "一辆车在2-3升挡时出现空转（转速上升）。最可能的原因是什么？",
    options: [
      "A) The 2-3 shift overlap is too short due to a worn clutch or apply device",
      "B) The engine is producing too much power",
      "C) The tires are overinflated",
      "D) The exhaust system has a leak"
    ],
    optionsChinese: [
      "A) 由于离合器或接合装置磨损导致2-3挡换挡重叠时间过短",
      "B) 发动机产生过多动力",
      "C) 轮胎气压过高",
      "D) 排气系统泄漏"
    ],
    answer: 0,
    explanation: "A flare during an upshift means there is a momentary loss of power transfer between gears. This occurs when one holding device releases before the next one fully applies, causing the engine to briefly rev up. This indicates worn or burned clutches, leaking seals, or low apply pressure for that shift.",
    explanationChinese: "升挡时出现空转意味着挡位之间动力传递瞬间中断。这发生在一个保持装置释放而下一个尚未完全接合时，导致发动机短暂升速。这表明离合器磨损或烧蚀、密封泄漏或该换挡的接合压力不足。",
    diagram: "",
    terms: ["clutch_pack", "valve_body", "shift_solenoid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "How Automatic Transmission Clutches Work"
  },
  {
    id: 25,
    q: "Technician A says a transmission that shifts normally when cold but slips when hot may have worn internal seals. Technician B says this condition is caused only by using the wrong ATF type. Who is correct?",
    qChinese: "技师A说变速箱冷态时换挡正常但热态时打滑可能是内部密封磨损。技师B说这种状况仅由使用了错误的ATF类型引起。谁是正确的？",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    answer: 0,
    explanation: "Technician A is correct. Hardened or worn clutch piston seals may seal adequately when cold but leak as components expand at operating temperature, causing slipping. While wrong ATF can cause issues, it is not the only cause of this symptom. Worn internal seals are the most common reason.",
    explanationChinese: "技师A是正确的。硬化或磨损的离合器活塞密封在冷态时可能密封良好，但在工作温度下部件膨胀时会泄漏，导致打滑。虽然使用错误的ATF可能导致问题，但它不是此症状的唯一原因。内部密封磨损是最常见的原因。",
    diagram: "",
    terms: ["clutch_pack", "transmission_fluid", "transmission_cooler"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "How Automatic Transmission Clutches Work"
  },
  {
    id: 26,
    q: "All of the following conditions can cause transmission overheating EXCEPT:",
    qChinese: "以下所有情况都可能导致变速箱过热，除了：",
    options: [
      "A) Towing a heavy trailer",
      "B) A clogged transmission cooler",
      "C) A properly functioning TCC solenoid engaging at highway speed",
      "D) Slipping clutch packs"
    ],
    optionsChinese: [
      "A) 拖拽重型拖车",
      "B) 变速箱冷却器堵塞",
      "C) TCC电磁阀在高速公路速度下正常接合",
      "D) 离合器片组打滑"
    ],
    answer: 2,
    explanation: "A properly functioning TCC solenoid that locks up the converter at highway speed actually reduces heat generation by eliminating converter slippage. Towing, a clogged cooler, and slipping clutches all generate excessive heat. The TCC lockup improves efficiency and lowers fluid temperature.",
    explanationChinese: "在高速公路速度下正常锁止变矩器的TCC电磁阀实际上通过消除变矩器滑差来减少热量产生。拖拽、冷却器堵塞和离合器打滑都会产生过多热量。TCC锁止提高效率并降低油液温度。",
    diagram: "",
    terms: ["transmission_cooler", "torque_converter", "clutch_pack", "shift_solenoid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Transmission Cooling System Explained"
  },
  {
    id: 27,
    q: "A buzzing noise is heard from the transmission at idle in Park. The noise goes away when the vehicle is placed in Drive. What is the most likely source?",
    qChinese: "在驻车挡（P）怠速时，变速箱发出嗡嗡声。当车辆挂入前进挡（D）时噪声消失。最可能的来源是什么？",
    options: [
      "A) The torque converter",
      "B) The oil pump or pressure regulator valve",
      "C) The output shaft bearing",
      "D) The planetary gear set"
    ],
    optionsChinese: [
      "A) 液力变矩器",
      "B) 油泵或压力调节阀",
      "C) 输出轴轴承",
      "D) 行星齿轮组"
    ],
    answer: 1,
    explanation: "A buzzing or whining noise at idle in Park that disappears in Drive often comes from the oil pump or pressure regulator valve. In Park, hydraulic flow patterns change when no clutch circuits are being charged. A resonating pressure regulator valve or worn pump gears can produce this noise.",
    explanationChinese: "在驻车挡怠速时出现的嗡嗡声或啸叫声在挂入前进挡后消失，通常来自油泵或压力调节阀。在驻车挡时，由于没有离合器回路被充压，液压流动模式会改变。共振的压力调节阀或磨损的泵齿轮会产生这种噪声。",
    diagram: "",
    terms: ["valve_body", "transmission_fluid", "torque_converter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "Automatic Transmission Valve Body Explained"
  },
  {
    id: 28,
    q: "Technician A says the transmission range (TR) sensor tells the PCM what gear the driver has selected. Technician B says the TR sensor only controls the backup lights. Who is correct?",
    qChinese: "技师A说变速箱挡位（TR）传感器告诉PCM驾驶员选择了哪个挡位。技师B说TR传感器仅控制倒车灯。谁是正确的？",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    answer: 0,
    explanation: "The transmission range sensor informs the PCM/TCM of the driver's selected gear position (P, R, N, D, etc.), which is critical for shift scheduling, engine management, and starting circuit operation. While it may also control backup lights, that is not its only function. Technician A is correct.",
    explanationChinese: "变速箱挡位传感器将驾驶员选择的挡位（P、R、N、D等）告知PCM/TCM，这对换挡调度、发动机管理和起动电路操作至关重要。虽然它也可能控制倒车灯，但这不是它唯一的功能。技师A是正确的。",
    diagram: "",
    terms: ["tcm", "pcm", "speed_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "Transmission Control Module Function"
  },
  {
    id: 29,
    q: "A vehicle will not move in any gear, but the engine runs normally. Transmission fluid is at the correct level and appears clean. What is the most likely cause?",
    qChinese: "一辆车在任何挡位都无法移动，但发动机运转正常。变速箱油液位正确且外观清洁。最可能的原因是什么？",
    options: [
      "A) A severely slipping torque converter stator",
      "B) A broken input shaft or failed oil pump drive",
      "C) A clogged transmission filter",
      "D) A faulty ignition coil"
    ],
    optionsChinese: [
      "A) 液力变矩器导轮严重打滑",
      "B) 输入轴断裂或油泵驱动失效",
      "C) 变速箱滤清器堵塞",
      "D) 点火线圈故障"
    ],
    answer: 1,
    explanation: "If the vehicle will not move in any gear despite correct fluid level, a broken input shaft, failed oil pump drive, or sheared torque converter hub is likely. These conditions prevent hydraulic pressure from being generated or torque from being transmitted. A clogged filter would cause some slipping but usually not total failure.",
    explanationChinese: "如果油液位正确但车辆在任何挡位都无法移动，则可能是输入轴断裂、油泵驱动失效或液力变矩器轮毂剪断。这些情况会阻止产生液压压力或传递扭矩。滤清器堵塞会导致一些打滑，但通常不会完全失效。",
    diagram: "",
    terms: ["torque_converter", "transmission_fluid", "planetary_gear_set"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Torque_converter_cutaway.svg/640px-Torque_converter_cutaway.svg.png",
    youtube: "https://www.youtube.com/watch?v=z1ZlC7OAiNk",
    youtubeTitle: "How a Torque Converter Works"
  },
  {
    id: 30,
    q: "A DTC P0731 (Gear 1 Incorrect Ratio) is stored. What does this code mean?",
    qChinese: "存储了DTC P0731（一挡齿轮比不正确）。此代码是什么意思？",
    options: [
      "A) The transmission cannot physically engage first gear",
      "B) The PCM has detected that the actual first gear ratio does not match the expected ratio",
      "C) The first gear synchronizer is worn",
      "D) The shift solenoid for first gear has an open circuit"
    ],
    optionsChinese: [
      "A) 变速箱物理上无法接合一挡",
      "B) PCM检测到实际一挡齿轮比与预期比值不匹配",
      "C) 一挡同步器磨损",
      "D) 一挡换挡电磁阀断路"
    ],
    answer: 1,
    explanation: "P0731 means the PCM/TCM compared the input speed sensor reading to the output speed sensor reading and determined the calculated gear ratio does not match the expected first gear ratio. This can indicate clutch slippage, sensor errors, or mechanical wear affecting first gear operation.",
    explanationChinese: "P0731意味着PCM/TCM比较了输入速度传感器和输出速度传感器的读数，确定计算出的齿轮比与预期的一挡齿轮比不匹配。这可能表示离合器打滑、传感器错误或影响一挡工作的机械磨损。",
    diagram: "",
    terms: ["dtc", "speed_sensor", "pcm", "clutch_pack"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "Automatic Transmission Diagnosis Basics"
  },
  {
    id: 31,
    q: "Which component in an electronic automatic transmission directly controls the timing and sequencing of shifts?",
    qChinese: "在电控自动变速箱中，哪个部件直接控制换挡的时机和顺序？",
    options: [
      "A) The governor",
      "B) The throttle valve cable",
      "C) The transmission control module (TCM) or PCM",
      "D) The manual valve"
    ],
    optionsChinese: [
      "A) 调速器",
      "B) 节气门阀拉线",
      "C) 变速箱控制模块（TCM）或PCM",
      "D) 手动阀"
    ],
    answer: 2,
    explanation: "In electronically controlled transmissions, the TCM or PCM determines shift timing based on inputs from various sensors including throttle position, vehicle speed, and engine load. It commands shift solenoids to direct hydraulic fluid, controlling the precise timing and sequencing of each shift.",
    explanationChinese: "在电控变速箱中，TCM或PCM根据各种传感器的输入（包括节气门位置、车速和发动机负载）来确定换挡时机。它指令换挡电磁阀引导液压油，精确控制每次换挡的时机和顺序。",
    diagram: "",
    terms: ["tcm", "pcm", "shift_solenoid", "throttle_position_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "Transmission Control Module Function"
  },
  {
    id: 32,
    q: "Technician A says a transmission stuck in second gear that will not upshift or downshift is in limp mode. Technician B says limp mode is caused by a serious electronic fault detected by the TCM/PCM. Who is correct?",
    qChinese: "技师A说变速箱卡在二挡无法升挡或降挡是处于跛行模式。技师B说跛行模式是由TCM/PCM检测到严重电子故障引起的。谁是正确的？",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Limp mode (failsafe mode) locks the transmission in second or third gear to protect it from further damage. It is triggered when the TCM/PCM detects a serious electrical or electronic fault, allowing the vehicle to be driven to a repair facility at reduced performance.",
    explanationChinese: "两位技师都是正确的。跛行模式（故障保护模式）将变速箱锁定在二挡或三挡以保护其免受进一步损坏。当TCM/PCM检测到严重的电气或电子故障时触发此模式，允许车辆以降低的性能驶向维修设施。",
    diagram: "",
    terms: ["tcm", "pcm", "dtc", "shift_solenoid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "Transmission Control Module Function"
  },
  {
    id: 33,
    q: "A road test reveals the transmission downshifts harshly when coming to a stop. What is the most likely cause?",
    qChinese: "路试显示变速箱在减速停车时降挡生硬。最可能的原因是什么？",
    options: [
      "A) A sticking throttle position sensor",
      "B) Excessive line pressure or a faulty EPC solenoid",
      "C) A worn torque converter turbine",
      "D) Low engine coolant level"
    ],
    optionsChinese: [
      "A) 节气门位置传感器卡滞",
      "B) 主油压过高或EPC电磁阀故障",
      "C) 液力变矩器涡轮磨损",
      "D) 发动机冷却液液位低"
    ],
    answer: 1,
    explanation: "Harsh downshifts typically result from excessive line pressure, which causes clutches and bands to apply too aggressively. A faulty EPC solenoid that commands maximum pressure, or a stuck pressure regulator valve, can cause this. The TCM normally reduces line pressure during coast-down shifts for smooth operation.",
    explanationChinese: "降挡生硬通常是主油压过高导致的，使离合器和制动带接合过于猛烈。指令最大压力的故障EPC电磁阀或卡滞的压力调节阀可导致此问题。TCM通常在滑行降挡时降低主油压以实现平顺操作。",
    diagram: "",
    terms: ["shift_solenoid", "valve_body", "tcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=hE-bFcLHbGc",
    youtubeTitle: "How Shift Solenoids Work"
  },
  {
    id: 34,
    q: "All of the following are used during automatic transmission diagnosis EXCEPT:",
    qChinese: "以下所有工具都用于自动变速箱诊断，除了：",
    options: [
      "A) A hydraulic pressure gauge",
      "B) A scan tool with bidirectional controls",
      "C) A cylinder leakage tester",
      "D) A digital multimeter"
    ],
    optionsChinese: [
      "A) 液压压力表",
      "B) 带双向控制的诊断仪",
      "C) 气缸泄漏测试仪",
      "D) 数字万用表"
    ],
    answer: 2,
    explanation: "A cylinder leakage tester is used for engine diagnosis to check cylinder sealing, not for automatic transmission diagnosis. Hydraulic pressure gauges, scan tools with bidirectional controls, and digital multimeters are all standard tools used when diagnosing transmission problems.",
    explanationChinese: "气缸泄漏测试仪用于发动机诊断以检查气缸密封性，不用于自动变速箱诊断。液压压力表、带双向控制的诊断仪和数字万用表都是诊断变速箱问题时使用的标准工具。",
    diagram: "",
    terms: ["scan_tool", "dmm", "leak_down_test"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "Automatic Transmission Diagnosis Basics"
  },
  {
    id: 35,
    q: "Technician A says a faulty throttle position sensor (TPS) can cause harsh shifting. Technician B says a faulty TPS can cause delayed shifts. Who is correct?",
    qChinese: "技师A说故障的节气门位置传感器（TPS）会导致换挡生硬。技师B说故障的TPS会导致换挡延迟。谁是正确的？",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    answer: 2,
    explanation: "Both technicians are correct. The TPS signal is used by the PCM/TCM to determine shift points and line pressure. A TPS reading higher than actual can cause harsh, late shifts (transmission thinks throttle is wide open). A TPS reading lower than actual can cause early, soft, or delayed shifts.",
    explanationChinese: "两位技师都是正确的。TPS信号被PCM/TCM用于确定换挡点和主油压。TPS读数高于实际值会导致换挡生硬和延迟（变速箱认为节气门全开）。TPS读数低于实际值会导致过早、柔和或延迟换挡。",
    diagram: "",
    terms: ["throttle_position_sensor", "tcm", "pcm", "shift_solenoid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "Transmission Control Module Function"
  },
  {
    id: 36,
    q: "A clicking noise is heard from the transmission area that increases with vehicle speed. What is the most likely cause?",
    qChinese: "从变速箱区域听到随车速增加而加剧的咔嗒声。最可能的原因是什么？",
    options: [
      "A) A worn oil pump",
      "B) A chipped or damaged output shaft gear or differential component",
      "C) A slipping torque converter clutch",
      "D) A loose exhaust heat shield"
    ],
    optionsChinese: [
      "A) 油泵磨损",
      "B) 输出轴齿轮或差速器部件崩裂或损坏",
      "C) 液力变矩器离合器打滑",
      "D) 排气隔热罩松动"
    ],
    answer: 1,
    explanation: "A clicking noise that varies with vehicle speed rather than engine RPM indicates a component rotating with the output shaft or driveline. A chipped gear tooth on the output shaft, transfer gear, or differential gear can produce a rhythmic clicking that increases as the vehicle goes faster.",
    explanationChinese: "随车速而非发动机转速变化的咔嗒声表明有一个随输出轴或传动系旋转的部件存在问题。输出轴、传递齿轮或差速器齿轮上的崩裂齿会产生有节奏的咔嗒声，随车速增加而加快。",
    diagram: "",
    terms: ["differential", "planetary_gear_set", "speed_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Epicyclic_gear_ratios.png/640px-Epicyclic_gear_ratios.png",
    youtube: "https://www.youtube.com/watch?v=ARd-Om2VyiE",
    youtubeTitle: "How Planetary Gears Work"
  },
  {
    id: 37,
    q: "Visible metal particles in the ATF on the dipstick could indicate all of the following EXCEPT:",
    qChinese: "油尺上ATF中可见的金属颗粒可能表示以下所有情况，除了：",
    options: [
      "A) Bearing failure",
      "B) Gear tooth damage",
      "C) Shaft wear",
      "D) A clogged cabin air filter"
    ],
    optionsChinese: [
      "A) 轴承失效",
      "B) 齿轮齿损坏",
      "C) 轴磨损",
      "D) 空调滤清器堵塞"
    ],
    answer: 3,
    explanation: "Visible metal particles or shavings in ATF indicate significant internal hard part wear or damage to bearings, gears, or shafts. A clogged cabin air filter is completely unrelated to the transmission and would not produce metallic contamination in the ATF. Internal inspection is typically required.",
    explanationChinese: "ATF中可见的金属颗粒或碎屑表明轴承、齿轮或轴等内部硬件存在显著磨损或损坏。空调滤清器堵塞与变速箱完全无关，不会在ATF中产生金属污染物。通常需要进行内部检查。",
    diagram: "",
    terms: ["transmission_fluid", "planetary_gear_set", "transmission_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Automatic Transmission Fluid - What You Need to Know"
  },
  {
    id: 38,
    q: "A DTC P0756 (Shift Solenoid B Performance/Stuck Off) is stored. What is the first diagnostic step?",
    qChinese: "存储了DTC P0756（换挡电磁阀B性能/卡在关闭位置）。第一个诊断步骤是什么？",
    options: [
      "A) Replace the transmission",
      "B) Replace shift solenoid B immediately",
      "C) Check shift solenoid B resistance, wiring, connector, and fluid condition",
      "D) Perform a stall speed test"
    ],
    optionsChinese: [
      "A) 更换变速箱",
      "B) 立即更换换挡电磁阀B",
      "C) 检查换挡电磁阀B的电阻、线路、接头和油液状态",
      "D) 进行失速转速测试"
    ],
    answer: 2,
    explanation: "Before replacing any component, verify the electrical integrity of the solenoid circuit by measuring resistance and checking for wiring damage or connector corrosion. Also check for contaminated fluid that could cause the solenoid to stick. A stuck solenoid may respond to cleaning if contamination is the issue.",
    explanationChinese: "在更换任何部件之前，应通过测量电阻并检查线路损坏或接头腐蚀来验证电磁阀电路的电气完整性。还要检查可能导致电磁阀卡滞的污染油液。如果污染是问题所在，卡滞的电磁阀可能通过清洗来恢复。",
    diagram: "",
    terms: ["shift_solenoid", "dtc", "dmm", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=hE-bFcLHbGc",
    youtubeTitle: "How Shift Solenoids Work"
  },
  {
    id: 39,
    q: "A vehicle surges at steady highway speed with the TCC engaged. What is the most likely cause?",
    qChinese: "一辆车在TCC接合状态下以稳定的高速公路速度行驶时出现抖动。最可能的原因是什么？",
    options: [
      "A) Worn rear tires",
      "B) An intermittently engaging and disengaging TCC",
      "C) Low brake fluid",
      "D) A faulty alternator"
    ],
    optionsChinese: [
      "A) 后轮胎磨损",
      "B) TCC间歇性接合和脱开",
      "C) 制动液液位低",
      "D) 发电机故障"
    ],
    answer: 1,
    explanation: "Surging at highway speed with TCC engaged is typically caused by the torque converter clutch rapidly engaging and disengaging. This creates a cycle of RPM change felt as a surge. Common causes include a faulty TCC solenoid, marginal TCC control circuit, or TCC apply pressure issues.",
    explanationChinese: "在TCC接合状态下高速公路速度时出现的抖动通常是由液力变矩器离合器快速接合和脱开引起的。这会产生感觉像抖动的转速变化周期。常见原因包括TCC电磁阀故障、TCC控制电路不良或TCC接合压力问题。",
    diagram: "",
    terms: ["torque_converter", "shift_solenoid", "tcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Torque_converter_cutaway.svg/640px-Torque_converter_cutaway.svg.png",
    youtube: "https://www.youtube.com/watch?v=z1ZlC7OAiNk",
    youtubeTitle: "How a Torque Converter Works"
  },
  {
    id: 40,
    q: "What is the purpose of the transmission oil temperature (TOT) sensor?",
    qChinese: "变速箱油温（TOT）传感器的作用是什么？",
    options: [
      "A) To control the engine cooling fan",
      "B) To provide fluid temperature data to the PCM/TCM for shift strategy and TCC control",
      "C) To activate the transmission warning light at all times",
      "D) To regulate the ATF cooler bypass valve mechanically"
    ],
    optionsChinese: [
      "A) 控制发动机冷却风扇",
      "B) 向PCM/TCM提供油液温度数据用于换挡策略和TCC控制",
      "C) 始终激活变速箱警告灯",
      "D) 机械调节ATF冷却器旁通阀"
    ],
    answer: 1,
    explanation: "The TOT sensor provides the PCM/TCM with real-time transmission fluid temperature data. This information is used to modify shift points, TCC engagement strategy, and line pressure to protect the transmission. At extreme temperatures, the system may disable TCC or modify shift schedules.",
    explanationChinese: "TOT传感器向PCM/TCM提供实时变速箱油液温度数据。该信息用于修改换挡点、TCC接合策略和主油压以保护变速箱。在极端温度下，系统可能会禁用TCC或修改换挡时间表。",
    diagram: "",
    terms: ["tcm", "pcm", "transmission_fluid", "transmission_cooler"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "Transmission Control Module Function"
  },
  {
    id: 41,
    q: "A technician is road testing a vehicle and notices the transmission will not shift into overdrive. All other gears work normally. Which of the following is the LEAST likely cause?",
    qChinese: "技师在路试车辆时发现变速箱不会换入超速挡。所有其他挡位工作正常。以下哪个原因最不可能？",
    options: [
      "A) A faulty overdrive solenoid",
      "B) A worn overdrive clutch pack",
      "C) An overdrive cancel switch that is stuck on",
      "D) A broken flexplate"
    ],
    optionsChinese: [
      "A) 超速挡电磁阀故障",
      "B) 超速挡离合器片组磨损",
      "C) 超速挡取消开关卡在开启状态",
      "D) 挠性板断裂"
    ],
    answer: 3,
    explanation: "A broken flexplate would affect all gear operation, not just overdrive. A faulty overdrive solenoid, worn overdrive clutch pack, or an overdrive cancel switch that is accidentally engaged could all prevent overdrive engagement while allowing normal operation in all other gears.",
    explanationChinese: "挠性板断裂会影响所有挡位的工作，而不仅是超速挡。超速挡电磁阀故障、超速挡离合器片组磨损或意外接通的超速挡取消开关都可能阻止超速挡接合，同时允许其他所有挡位正常工作。",
    diagram: "",
    terms: ["shift_solenoid", "clutch_pack", "flywheel"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=hE-bFcLHbGc",
    youtubeTitle: "How Shift Solenoids Work"
  },
  {
    id: 42,
    q: "A transmission produces a growling noise only in third gear. What is the most likely cause?",
    qChinese: "变速箱仅在三挡时产生咆哮声。最可能的原因是什么？",
    options: [
      "A) A worn torque converter bearing",
      "B) A damaged planetary gear set component used in third gear",
      "C) Low engine oil level",
      "D) A faulty catalytic converter"
    ],
    optionsChinese: [
      "A) 液力变矩器轴承磨损",
      "B) 三挡使用的行星齿轮组部件损坏",
      "C) 发动机油液位低",
      "D) 三元催化器故障"
    ],
    answer: 1,
    explanation: "A growling noise isolated to one specific gear indicates damage to a component that is under load or rotating differently in that gear. This typically points to a planetary gear set component, such as a worn sun gear, ring gear, or planet pinion bearing that is stressed only in third gear.",
    explanationChinese: "仅在某一特定挡位出现的咆哮声表明在该挡位承受负载或以不同方式旋转的部件损坏。这通常指向行星齿轮组部件，如仅在三挡受力的磨损太阳轮、齿圈或行星小齿轮轴承。",
    diagram: "",
    terms: ["planetary_gear_set", "clutch_pack", "torque_converter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Epicyclic_gear_ratios.png/640px-Epicyclic_gear_ratios.png",
    youtube: "https://www.youtube.com/watch?v=ARd-Om2VyiE",
    youtubeTitle: "How Planetary Gears Work"
  },
  {
    id: 43,
    q: "Technician A says a scan tool can command individual shift solenoids on and off for testing. Technician B says solenoids can only be tested by removing the valve body. Who is correct?",
    qChinese: "技师A说诊断仪可以指令各个换挡电磁阀开关进行测试。技师B说电磁阀只能通过拆卸阀体来测试。谁是正确的？",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    answer: 0,
    explanation: "Modern scan tools have bidirectional control capability that allows technicians to command individual solenoids on and off while monitoring the transmission response. This is a valuable diagnostic technique that does not require valve body removal. Technician A is correct.",
    explanationChinese: "现代诊断仪具有双向控制功能，允许技师在监控变速箱响应的同时指令各个电磁阀开关。这是一种有价值的诊断技术，不需要拆卸阀体。技师A是正确的。",
    diagram: "",
    terms: ["scan_tool", "shift_solenoid", "valve_body"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=hE-bFcLHbGc",
    youtubeTitle: "How Shift Solenoids Work"
  },
  {
    id: 44,
    q: "Which sensor input does the PCM/TCM use to determine engine load for shift scheduling?",
    qChinese: "PCM/TCM使用哪个传感器输入来确定换挡调度的发动机负载？",
    options: [
      "A) Oxygen sensor",
      "B) Throttle position sensor (TPS) or manifold absolute pressure (MAP) sensor",
      "C) Knock sensor",
      "D) Camshaft position sensor"
    ],
    optionsChinese: [
      "A) 氧传感器",
      "B) 节气门位置传感器（TPS）或进气歧管绝对压力（MAP）传感器",
      "C) 爆震传感器",
      "D) 凸轮轴位置传感器"
    ],
    answer: 1,
    explanation: "The PCM/TCM uses the throttle position sensor and/or the MAP sensor to determine engine load. These signals help determine the appropriate shift points and line pressure. Under high load, shifts occur at higher RPM and line pressure increases for firmer clutch application.",
    explanationChinese: "PCM/TCM使用节气门位置传感器和/或MAP传感器来确定发动机负载。这些信号有助于确定适当的换挡点和主油压。在高负载下，换挡在较高转速时进行，主油压升高以实现更牢固的离合器接合。",
    diagram: "",
    terms: ["throttle_position_sensor", "map_sensor", "tcm", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "Transmission Control Module Function"
  },
  {
    id: 45,
    q: "A vehicle has no engine braking when manually selecting a lower gear range. What is the most likely cause?",
    qChinese: "手动选择低挡位范围时车辆没有发动机制动。最可能的原因是什么？",
    options: [
      "A) A worn one-way clutch or overrunning clutch that is slipping",
      "B) A faulty fuel injector",
      "C) A clogged air filter",
      "D) An underinflated spare tire"
    ],
    optionsChinese: [
      "A) 单向离合器或超越离合器磨损打滑",
      "B) 喷油器故障",
      "C) 空气滤清器堵塞",
      "D) 备胎气压不足"
    ],
    answer: 0,
    explanation: "In automatic transmissions, one-way or overrunning clutches allow freewheeling in certain gears. Manual low-range engagement uses additional holding devices to provide engine braking. If the overrunning clutch or the manual low apply device is slipping or not engaging, engine braking is lost.",
    explanationChinese: "在自动变速箱中，单向离合器或超越离合器允许在某些挡位自由滑行。手动低挡接合使用额外的保持装置来提供发动机制动。如果超越离合器或手动低挡接合装置打滑或未接合，则会丧失发动机制动力。",
    diagram: "",
    terms: ["clutch_pack", "planetary_gear_set", "valve_body"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "How Automatic Transmission Clutches Work"
  },
  {
    id: 46,
    q: "DTC P0720 (Output Speed Sensor Circuit Malfunction) is set. All of the following could be the cause EXCEPT:",
    qChinese: "设置了DTC P0720（输出速度传感器电路故障）。以下所有原因都可能是原因，除了：",
    options: [
      "A) A damaged output speed sensor",
      "B) A broken wire in the output speed sensor circuit",
      "C) A corroded sensor connector",
      "D) An overfilled transmission"
    ],
    optionsChinese: [
      "A) 输出速度传感器损坏",
      "B) 输出速度传感器电路中导线断裂",
      "C) 传感器接头腐蚀",
      "D) 变速箱加注过量"
    ],
    answer: 3,
    explanation: "P0720 is an electrical circuit malfunction code for the output speed sensor. A damaged sensor, broken wiring, or corroded connector can all cause this DTC. An overfilled transmission may cause shifting issues or foaming but does not directly cause a speed sensor circuit malfunction.",
    explanationChinese: "P0720是输出速度传感器的电气电路故障代码。传感器损坏、导线断裂或接头腐蚀都可能导致此DTC。变速箱加注过量可能导致换挡问题或油液起泡，但不会直接导致速度传感器电路故障。",
    diagram: "",
    terms: ["speed_sensor", "dtc", "ground_circuit", "tcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=hE-bFcLHbGc",
    youtubeTitle: "Transmission Speed Sensor Testing"
  },
  {
    id: 47,
    q: "What does the torque converter stator do?",
    qChinese: "液力变矩器导轮的作用是什么？",
    options: [
      "A) It drives the transmission oil pump",
      "B) It redirects fluid flow between the turbine and impeller to multiply torque",
      "C) It locks the converter to the flywheel at highway speeds",
      "D) It generates the electrical signal for the speed sensor"
    ],
    optionsChinese: [
      "A) 驱动变速箱油泵",
      "B) 在涡轮和泵轮之间重新引导油液流向以倍增扭矩",
      "C) 在高速公路速度下将变矩器锁定到飞轮",
      "D) 为速度传感器产生电信号"
    ],
    answer: 1,
    explanation: "The stator sits between the turbine and impeller inside the torque converter. It redirects the fluid exiting the turbine back into the impeller at an efficient angle, multiplying engine torque during acceleration. The stator rides on a one-way clutch that allows it to freewheel at coupling speed.",
    explanationChinese: "导轮位于液力变矩器内部涡轮和泵轮之间。它以高效的角度将从涡轮流出的油液重新引导回泵轮，在加速过程中倍增发动机扭矩。导轮安装在单向离合器上，使其在耦合转速时可以自由旋转。",
    diagram: "",
    terms: ["torque_converter", "transmission_fluid", "planetary_gear_set"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Torque_converter_cutaway.svg/640px-Torque_converter_cutaway.svg.png",
    youtube: "https://www.youtube.com/watch?v=z1ZlC7OAiNk",
    youtubeTitle: "How a Torque Converter Works"
  },
  {
    id: 48,
    q: "Technician A says a speed-specific vibration at 40-50 mph could be caused by an unbalanced torque converter. Technician B says it could be caused by a worn universal joint. Who is correct?",
    qChinese: "技师A说在40-50英里/小时出现的特定速度振动可能是由液力变矩器不平衡引起的。技师B说可能是由万向节磨损引起的。谁是正确的？",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    answer: 2,
    explanation: "Both technicians are correct. A speed-specific vibration can be caused by an unbalanced torque converter or a worn universal joint, as both are rotating components whose imbalance becomes pronounced at certain speeds. The driveshaft and converter should both be inspected when diagnosing this type of vibration.",
    explanationChinese: "两位技师都是正确的。特定速度的振动可能是由不平衡的液力变矩器或磨损的万向节引起的，因为两者都是旋转部件，其不平衡在特定速度下会变得明显。诊断此类振动时应检查传动轴和变矩器。",
    diagram: "",
    terms: ["torque_converter", "universal_joint", "differential"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Torque_converter_cutaway.svg/640px-Torque_converter_cutaway.svg.png",
    youtube: "https://www.youtube.com/watch?v=z1ZlC7OAiNk",
    youtubeTitle: "How a Torque Converter Works"
  },
  {
    id: 49,
    q: "Which DTC range is specifically assigned to transmission-related faults in the OBD II system?",
    qChinese: "在OBD II系统中，哪个DTC范围专门分配给变速箱相关故障？",
    options: [
      "A) P0100-P0199",
      "B) P0300-P0399",
      "C) P0700-P0899",
      "D) P0400-P0499"
    ],
    optionsChinese: [
      "A) P0100-P0199",
      "B) P0300-P0399",
      "C) P0700-P0899",
      "D) P0400-P0499"
    ],
    answer: 2,
    explanation: "In the OBD II DTC structure, the P0700-P0899 range is designated for transmission-related faults. P0100s cover fuel and air metering, P0300s cover misfires, and P0400s cover emissions. Knowing the DTC range helps technicians quickly identify the system involved in a malfunction.",
    explanationChinese: "在OBD II DTC结构中，P0700-P0899范围被指定用于变速箱相关故障。P0100系列涵盖燃油和空气计量，P0300系列涵盖失火，P0400系列涵盖排放。了解DTC范围有助于技师快速识别故障涉及的系统。",
    diagram: "",
    terms: ["dtc", "obd2", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "Automatic Transmission Diagnosis Basics"
  },
  {
    id: 50,
    q: "A customer reports the transmission sometimes slams into gear from a stop. This occurs most often on cold mornings. What is the most likely cause?",
    qChinese: "客户反映变速箱有时从停车状态猛烈挂入挡位。这种情况在寒冷的早晨最常发生。最可能的原因是什么？",
    options: [
      "A) Worn tires",
      "B) Excessive line pressure caused by a faulty EPC solenoid or stuck pressure regulator",
      "C) A broken motor mount only",
      "D) A faulty oxygen sensor"
    ],
    optionsChinese: [
      "A) 轮胎磨损",
      "B) 由故障EPC电磁阀或卡滞的压力调节器引起的主油压过高",
      "C) 仅发动机支架断裂",
      "D) 氧传感器故障"
    ],
    answer: 1,
    explanation: "A harsh engagement from a stop, especially when cold, often points to excessive line pressure. A faulty EPC solenoid commanding maximum pressure or a stuck pressure regulator valve can cause the clutch to apply too aggressively. Cold, thick fluid may also contribute to momentary pressure spikes.",
    explanationChinese: "从停车状态的猛烈接合，特别是在冷态时，通常指向主油压过高。指令最大压力的故障EPC电磁阀或卡滞的压力调节阀可导致离合器接合过于猛烈。冷态下黏稠的油液也可能导致瞬时压力尖峰。",
    diagram: "",
    terms: ["shift_solenoid", "valve_body", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=hE-bFcLHbGc",
    youtubeTitle: "How Shift Solenoids Work"
  },
  {
    id: 51,
    q: "Which of the following solenoids in a modern automatic transmission directly controls torque converter lockup?",
    qChinese: "在现代自动变速箱中，以下哪个电磁阀直接控制液力变矩器锁止？",
    options: [
      "A) Shift solenoid A",
      "B) Shift solenoid B",
      "C) TCC (torque converter clutch) solenoid",
      "D) EPC (electronic pressure control) solenoid"
    ],
    optionsChinese: [
      "A) 换挡电磁阀A",
      "B) 换挡电磁阀B",
      "C) TCC（液力变矩器离合器）电磁阀",
      "D) EPC（电子压力控制）电磁阀"
    ],
    answer: 2,
    explanation: "The TCC solenoid specifically controls the application and release of the torque converter clutch. When energized by the PCM/TCM, it directs hydraulic pressure to engage the lockup clutch in the converter. Shift solenoids control gear changes and the EPC solenoid controls line pressure.",
    explanationChinese: "TCC电磁阀专门控制液力变矩器离合器的接合和释放。当被PCM/TCM通电时，它引导液压压力接合变矩器中的锁止离合器。换挡电磁阀控制挡位变换，EPC电磁阀控制主油压。",
    diagram: "",
    terms: ["torque_converter", "shift_solenoid", "tcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Torque_converter_cutaway.svg/640px-Torque_converter_cutaway.svg.png",
    youtube: "https://www.youtube.com/watch?v=z1ZlC7OAiNk",
    youtubeTitle: "How a Torque Converter Works"
  },
  {
    id: 52,
    q: "A vehicle experiences a neutral condition (engine revs with no forward movement) for two to three seconds after the 1-2 upshift. What is the most likely cause?",
    qChinese: "一辆车在1-2升挡后出现空挡状态（发动机升速但无前进运动）持续两到三秒。最可能的原因是什么？",
    options: [
      "A) An engine misfire",
      "B) A leaking or burned second gear apply device",
      "C) A faulty alternator",
      "D) An incorrect tire size"
    ],
    optionsChinese: [
      "A) 发动机失火",
      "B) 二挡接合装置泄漏或烧蚀",
      "C) 发电机故障",
      "D) 轮胎尺寸不正确"
    ],
    answer: 1,
    explanation: "A brief neutral condition after the 1-2 upshift means the second gear clutch or band is not applying quickly or firmly enough. A leaking servo piston seal, burned clutch pack, or blocked apply orifice for the second gear circuit can all cause this delayed or failed engagement after the shift.",
    explanationChinese: "1-2升挡后短暂的空挡状态意味着二挡离合器或制动带接合不够快速或牢固。伺服活塞密封泄漏、离合器片组烧蚀或二挡回路接合孔堵塞都可能导致换挡后接合延迟或失败。",
    diagram: "",
    terms: ["clutch_pack", "valve_body", "shift_solenoid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "How Automatic Transmission Clutches Work"
  },
  {
    id: 53,
    q: "Technician A says that a restricted transmission cooler can cause overheating. Technician B says a restricted cooler can cause high line pressure. Who is correct?",
    qChinese: "技师A说受限的变速箱冷却器会导致过热。技师B说受限的冷却器会导致主油压升高。谁是正确的？",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    answer: 2,
    explanation: "Both technicians are correct. A restricted cooler reduces fluid flow, which decreases the cooler's ability to dissipate heat, causing overheating. Additionally, the restriction creates backpressure in the hydraulic circuit, which can raise line pressure. Both conditions can lead to transmission damage.",
    explanationChinese: "两位技师都是正确的。受限的冷却器减少油液流量，降低冷却器散热能力，导致过热。此外，限制在液压回路中产生背压，可能升高主油压。两种情况都可能导致变速箱损坏。",
    diagram: "",
    terms: ["transmission_cooler", "transmission_fluid", "radiator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Transmission Cooling System Explained"
  },
  {
    id: 54,
    q: "A scan tool shows that the transmission input speed sensor reads 0 RPM while the engine is running and the vehicle is moving. What is the most likely cause?",
    qChinese: "诊断仪显示发动机运转且车辆行驶时变速箱输入速度传感器读数为0 RPM。最可能的原因是什么？",
    options: [
      "A) A failed input speed sensor or its circuit",
      "B) A slipping transmission",
      "C) An overheated torque converter",
      "D) A worn drive belt"
    ],
    optionsChinese: [
      "A) 输入速度传感器或其电路失效",
      "B) 变速箱打滑",
      "C) 液力变矩器过热",
      "D) 驱动皮带磨损"
    ],
    answer: 0,
    explanation: "If the input speed sensor reads zero RPM while the engine is running and the vehicle is moving, the sensor or its circuit has failed. The turbine always spins when the vehicle is in gear and moving, so a zero reading is electrically impossible during driving and indicates a sensor or wiring fault.",
    explanationChinese: "如果发动机运转且车辆行驶时输入速度传感器读数为零RPM，则传感器或其电路已失效。当车辆挂挡行驶时涡轮始终旋转，因此行驶中零读数在电气上是不可能的，表明传感器或线路故障。",
    diagram: "",
    terms: ["speed_sensor", "scan_tool", "torque_converter", "tcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=hE-bFcLHbGc",
    youtubeTitle: "Transmission Speed Sensor Testing"
  },
  {
    id: 55,
    q: "During a road test for transmission diagnosis, the technician should evaluate all of the following EXCEPT:",
    qChinese: "在进行变速箱诊断路试时，技师应评估以下所有项目，除了：",
    options: [
      "A) Shift quality and shift timing",
      "B) Torque converter clutch engagement and release",
      "C) Spark plug electrode gap",
      "D) Abnormal noise and vibration during shifts"
    ],
    optionsChinese: [
      "A) 换挡质量和换挡时机",
      "B) 液力变矩器离合器的接合和释放",
      "C) 火花塞电极间隙",
      "D) 换挡时的异常噪声和振动"
    ],
    answer: 2,
    explanation: "During a transmission road test, the technician evaluates shift quality, timing, TCC engagement, noise, and vibration under actual driving conditions. Spark plug electrode gap is an engine maintenance item that is checked with a feeler gauge during a tune-up, not during a transmission road test.",
    explanationChinese: "在变速箱路试中，技师在实际驾驶条件下评估换挡质量、时机、TCC接合、噪声和振动。火花塞电极间隙是在调试时用塞尺检查的发动机维护项目，不在变速箱路试中检查。",
    diagram: "",
    terms: ["torque_converter", "shift_solenoid", "scan_tool", "spark_plug"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "Automatic Transmission Diagnosis Basics"
  },
  {
    id: 56,
    q: "A vehicle with an electronically controlled transmission has a check engine light on and the transmission is in limp mode. The battery was recently replaced. What should the technician do first?",
    qChinese: "一辆配备电控变速箱的车辆发动机故障灯亮起且变速箱处于跛行模式。蓄电池最近被更换过。技师应首先做什么？",
    options: [
      "A) Replace the transmission control module",
      "B) Clear DTCs and perform a transmission relearn procedure",
      "C) Replace all shift solenoids",
      "D) Overhaul the transmission"
    ],
    optionsChinese: [
      "A) 更换变速箱控制模块",
      "B) 清除DTC并执行变速箱再学习程序",
      "C) 更换所有换挡电磁阀",
      "D) 大修变速箱"
    ],
    answer: 1,
    explanation: "After a battery replacement or disconnect, the adaptive learning values for the transmission may be lost. The PCM/TCM may enter limp mode until it relearns shift parameters. Clearing DTCs and performing the manufacturer's relearn or reset procedure should be the first step before further diagnosis.",
    explanationChinese: "蓄电池更换或断开后，变速箱的自适应学习值可能会丢失。PCM/TCM可能进入跛行模式直到重新学习换挡参数。清除DTC并执行制造商的再学习或复位程序应该是进一步诊断前的第一步。",
    diagram: "",
    terms: ["dtc", "tcm", "battery", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "Transmission Control Module Function"
  },
  {
    id: 57,
    q: "Technician A says a transmission that slips only under heavy throttle has worn clutch packs. Technician B says it could also be caused by low line pressure that is insufficient under load. Who is correct?",
    qChinese: "技师A说仅在大油门下打滑的变速箱有磨损的离合器片组。技师B说也可能是由负载下不足的低主油压引起的。谁是正确的？",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Worn clutch friction material may hold under light loads but slip under heavy throttle when torque increases. Similarly, low line pressure that is adequate for light-load shifts can be insufficient under heavy acceleration, causing clutch or band slippage at high engine torque output.",
    explanationChinese: "两位技师都是正确的。磨损的离合器摩擦材料在轻负载下可能保持不打滑，但在大油门扭矩增加时会打滑。同样，在轻负载换挡时足够的低主油压在重加速下可能不足，导致在高发动机扭矩输出时离合器或制动带打滑。",
    diagram: "",
    terms: ["clutch_pack", "valve_body", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "How Automatic Transmission Clutches Work"
  },
  {
    id: 58,
    q: "A vehicle exhibits a repeated bump or shudder during light acceleration in second gear. What should be checked?",
    qChinese: "一辆车在二挡轻加速时出现反复颠簸或抖动。应检查什么？",
    options: [
      "A) Tire balance",
      "B) The second gear band adjustment or servo apply circuit",
      "C) The windshield wiper motor",
      "D) The power steering pump"
    ],
    optionsChinese: [
      "A) 轮胎平衡",
      "B) 二挡制动带调整或伺服接合回路",
      "C) 雨刮器电机",
      "D) 转向助力泵"
    ],
    answer: 1,
    explanation: "A shudder or repeated bump during light acceleration in a specific gear suggests the apply device for that gear is partially engaging and slipping, then catching again. The second gear band adjustment, servo piston seal, or the clutch pack apply circuit should be inspected for proper operation.",
    explanationChinese: "在特定挡位轻加速时的抖动或反复颠簸表明该挡位的接合装置部分接合后打滑，然后再次抓紧。应检查二挡制动带调整、伺服活塞密封或离合器片组接合回路是否正常工作。",
    diagram: "",
    terms: ["clutch_pack", "valve_body", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "How Automatic Transmission Clutches Work"
  },

  // ============================================================
  // IN-VEHICLE MAINTENANCE & REPAIR (Questions 59-85)
  // ============================================================
  {
    id: 59,
    q: "When replacing a transmission filter, what else should always be inspected?",
    qChinese: "更换变速箱滤清器时，还应始终检查什么？",
    options: [
      "A) The radiator cap",
      "B) The transmission pan gasket, pan magnet, and pan for debris",
      "C) The drive belt tensioner",
      "D) The engine oil filter"
    ],
    optionsChinese: [
      "A) 散热器盖",
      "B) 变速箱油底壳垫片、油底壳磁铁和油底壳内的碎屑",
      "C) 驱动皮带张紧器",
      "D) 发动机机油滤清器"
    ],
    answer: 1,
    explanation: "During a filter replacement, the transmission pan must be removed. The technician should always inspect the pan for metal debris or friction material particles, clean or replace the pan magnet, and install a new pan gasket or reseal the pan. This provides diagnostic clues about internal wear.",
    explanationChinese: "在更换滤清器时，必须拆卸变速箱油底壳。技师应始终检查油底壳中的金属碎屑或摩擦材料颗粒，清洁或更换油底壳磁铁，并安装新的油底壳垫片或重新密封油底壳。这可提供有关内部磨损的诊断线索。",
    diagram: "",
    terms: ["transmission_service", "transmission_fluid", "clutch_pack"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Automatic Transmission Fluid - What You Need to Know"
  },
  {
    id: 60,
    q: "Technician A says the manual shift linkage should be checked if the vehicle starts in gears other than Park and Neutral. Technician B says only the neutral safety switch needs replacement. Who is correct?",
    qChinese: "技师A说如果车辆在驻车挡和空挡以外的挡位可以启动，应检查手动换挡拉杆。技师B说只需更换空挡安全开关。谁是正确的？",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    answer: 0,
    explanation: "If the vehicle starts in positions other than Park and Neutral, the shift linkage adjustment should be checked first. A misadjusted linkage means the indicator may show Park, but the transmission is not actually in Park. The neutral safety switch may be functioning correctly with incorrect linkage position.",
    explanationChinese: "如果车辆在驻车挡和空挡以外的位置可以启动，应首先检查换挡拉杆调整。拉杆调整不当意味着指示器可能显示驻车挡，但变速箱实际并未处于驻车挡。空挡安全开关可能在拉杆位置不正确的情况下正常工作。",
    diagram: "",
    terms: ["tcm", "starter_motor", "relay"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "Automatic Transmission Diagnosis Basics"
  },
  {
    id: 61,
    q: "What is the correct procedure for adjusting the manual shift linkage on most automatic transmissions?",
    qChinese: "大多数自动变速箱手动换挡拉杆的正确调整程序是什么？",
    options: [
      "A) Tighten the linkage with the selector in Drive",
      "B) Place the transmission in Neutral, align the selector to the Neutral position, and tighten the linkage",
      "C) Adjust the linkage with the engine running in Park",
      "D) No adjustment is needed; the linkage is self-adjusting"
    ],
    optionsChinese: [
      "A) 在选择器处于前进挡时紧固拉杆",
      "B) 将变速箱置于空挡，将选择器对准空挡位置，然后紧固拉杆",
      "C) 在发动机运转且处于驻车挡时调整拉杆",
      "D) 不需要调整；拉杆是自调节的"
    ],
    answer: 1,
    explanation: "The standard procedure involves placing the transmission manual valve in the Neutral detent, placing the gear selector in the Neutral position, then tightening the linkage clamp or adjustment. This ensures the shift positions on the indicator correctly correspond to the actual transmission gear ranges.",
    explanationChinese: "标准程序包括将变速箱手动阀置于空挡定位位置，将挡位选择器置于空挡位置，然后紧固拉杆夹或调整件。这确保指示器上的挡位位置正确对应实际的变速箱挡位范围。",
    diagram: "",
    terms: ["valve_body", "transmission_service", "tcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "Automatic Transmission Valve Body Explained"
  },
  {
    id: 62,
    q: "A transmission is leaking fluid from the front of the transmission bell housing area. What is the most likely source?",
    qChinese: "变速箱从变速箱钟形壳前部区域漏油。最可能的来源是什么？",
    options: [
      "A) The rear output shaft seal",
      "B) The front pump seal or torque converter seal",
      "C) The valve body gasket",
      "D) The transmission pan gasket"
    ],
    optionsChinese: [
      "A) 后输出轴密封",
      "B) 前泵密封或液力变矩器密封",
      "C) 阀体垫片",
      "D) 变速箱油底壳垫片"
    ],
    answer: 1,
    explanation: "Fluid leaking from the front of the bell housing indicates a front pump seal or converter seal failure. The front pump seal prevents fluid from escaping between the pump and the torque converter. Transmission removal is usually required to access and replace this seal.",
    explanationChinese: "从钟形壳前部漏油表明前泵密封或变矩器密封失效。前泵密封防止油液从泵和液力变矩器之间泄漏。通常需要拆卸变速箱才能接触和更换此密封。",
    diagram: "",
    terms: ["torque_converter", "transmission_fluid", "transmission_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Torque_converter_cutaway.svg/640px-Torque_converter_cutaway.svg.png",
    youtube: "https://www.youtube.com/watch?v=z1ZlC7OAiNk",
    youtubeTitle: "How a Torque Converter Works"
  },
  {
    id: 63,
    q: "After replacing the transmission pan gasket, the transmission leaks. What is the most likely cause?",
    qChinese: "更换变速箱油底壳垫片后，变速箱漏油。最可能的原因是什么？",
    options: [
      "A) The torque converter is damaged",
      "B) The pan bolts are unevenly torqued or the pan mating surface is warped",
      "C) The transmission input shaft is worn",
      "D) The shift solenoids are leaking"
    ],
    optionsChinese: [
      "A) 液力变矩器损坏",
      "B) 油底壳螺栓扭矩不均匀或油底壳配合面翘曲",
      "C) 变速箱输入轴磨损",
      "D) 换挡电磁阀泄漏"
    ],
    answer: 1,
    explanation: "A transmission pan leak after gasket replacement is typically caused by unevenly torqued pan bolts, a warped pan, or a damaged gasket. Pan bolts should be torqued in the proper sequence to the correct specification. A straightedge should be used to check the pan mating surface for warpage.",
    explanationChinese: "更换垫片后油底壳漏油通常是由油底壳螺栓扭矩不均匀、油底壳翘曲或垫片损坏引起的。油底壳螺栓应按正确顺序拧紧到规定扭矩。应使用直尺检查油底壳配合面是否翘曲。",
    diagram: "",
    terms: ["transmission_service", "transmission_fluid", "lug_nut_torque"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Automatic Transmission Fluid - What You Need to Know"
  },
  {
    id: 64,
    q: "What is the purpose of the transmission cooler?",
    qChinese: "变速箱冷却器的作用是什么？",
    options: [
      "A) To warm the transmission fluid during cold starts",
      "B) To remove excess heat from the ATF and maintain proper operating temperature",
      "C) To filter contaminants from the ATF",
      "D) To provide lubrication to the torque converter"
    ],
    optionsChinese: [
      "A) 在冷启动时加热变速箱油",
      "B) 从ATF中去除多余热量并保持适当的工作温度",
      "C) 过滤ATF中的污染物",
      "D) 为液力变矩器提供润滑"
    ],
    answer: 1,
    explanation: "The transmission cooler removes heat from the ATF, maintaining it within the proper operating temperature range. It is typically located within the radiator or as a separate auxiliary unit. Proper cooling is essential because excessive heat is the primary cause of ATF breakdown and transmission failure.",
    explanationChinese: "变速箱冷却器从ATF中去除热量，将其保持在适当的工作温度范围内。它通常位于散热器内部或作为单独的辅助装置。适当的冷却至关重要，因为过热是ATF劣化和变速箱故障的主要原因。",
    diagram: "",
    terms: ["transmission_cooler", "radiator", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Transmission Cooling System Explained"
  },
  {
    id: 65,
    q: "When servicing a valve body, all of the following precautions should be taken EXCEPT:",
    qChinese: "维修阀体时，应采取以下所有预防措施，除了：",
    options: [
      "A) Keeping all check balls and springs organized and in their correct positions",
      "B) Using compressed air to clean the valve body passages",
      "C) Using a wire brush to clean the valve bore surfaces",
      "D) Inspecting valves for scoring, wear, and free movement in their bores"
    ],
    optionsChinese: [
      "A) 保持所有止回球和弹簧有序并在正确位置",
      "B) 使用压缩空气清洁阀体通道",
      "C) 使用钢丝刷清洁阀孔表面",
      "D) 检查阀芯是否有划痕、磨损及在阀孔中的自由移动"
    ],
    answer: 2,
    explanation: "A wire brush should never be used to clean valve body bore surfaces because it can scratch the precision-machined surfaces, causing valve sticking or fluid leaks. Valve bodies should be cleaned with solvent and lint-free cloths. Compressed air is acceptable for cleaning passages when used carefully.",
    explanationChinese: "绝不能使用钢丝刷清洁阀体阀孔表面，因为它会刮伤精密加工的表面，导致阀芯卡滞或油液泄漏。阀体应使用溶剂和无绒布清洁。谨慎使用压缩空气清洁通道是可以接受的。",
    diagram: "",
    terms: ["valve_body", "shift_solenoid", "transmission_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "Automatic Transmission Valve Body Explained"
  },
  {
    id: 66,
    q: "A technician is replacing the transmission output shaft seal. What must be inspected before installing the new seal?",
    qChinese: "技师正在更换变速箱输出轴密封。安装新密封之前必须检查什么？",
    options: [
      "A) The engine oil level",
      "B) The output shaft surface for grooves, nicks, or wear where the seal rides",
      "C) The transmission fluid color only",
      "D) The brake pad thickness"
    ],
    optionsChinese: [
      "A) 发动机油液位",
      "B) 密封唇接触处的输出轴表面是否有凹槽、缺口或磨损",
      "C) 仅变速箱油颜色",
      "D) 制动片厚度"
    ],
    answer: 1,
    explanation: "Before installing a new output shaft seal, the shaft surface where the seal lip rides must be inspected for grooves, scoring, or wear. A damaged shaft surface will cause the new seal to leak immediately. A seal sleeve or shaft repair may be necessary if surface damage is found.",
    explanationChinese: "在安装新的输出轴密封之前，必须检查密封唇接触的轴表面是否有凹槽、划痕或磨损。损坏的轴表面会导致新密封立即泄漏。如果发现表面损坏，可能需要安装密封套管或修复轴。",
    diagram: "",
    terms: ["transmission_service", "transmission_fluid", "differential"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Automatic Transmission Fluid - What You Need to Know"
  },
  {
    id: 67,
    q: "When replacing a transmission servo, what should the technician check?",
    qChinese: "更换变速箱伺服器时，技师应检查什么？",
    options: [
      "A) The spark plug gap",
      "B) The servo bore for scoring, the piston seal condition, and the apply pin length",
      "C) The radiator hose condition",
      "D) The brake master cylinder level"
    ],
    optionsChinese: [
      "A) 火花塞间隙",
      "B) 伺服器阀孔是否有划痕、活塞密封状况及推杆长度",
      "C) 散热器软管状况",
      "D) 制动主缸液位"
    ],
    answer: 1,
    explanation: "When replacing a servo, inspect the servo bore for scoring or damage that could cause leaking. Check the piston seal for cuts or deterioration. Verify the apply pin length matches specifications, as an incorrect pin length changes band adjustment and shift quality. Use new seals during reassembly.",
    explanationChinese: "更换伺服器时，检查伺服器阀孔是否有划痕或可能导致泄漏的损坏。检查活塞密封是否有切口或劣化。验证推杆长度是否符合规格，因为不正确的推杆长度会改变制动带调整和换挡质量。组装时使用新密封件。",
    diagram: "",
    terms: ["valve_body", "clutch_pack", "transmission_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "Automatic Transmission Valve Body Explained"
  },
  {
    id: 68,
    q: "Technician A says a transmission cooler should be flushed when replacing a transmission due to contamination. Technician B says the cooler does not need flushing if the fluid appeared clean. Who is correct?",
    qChinese: "技师A说由于污染问题，更换变速箱时应冲洗变速箱冷却器。技师B说如果油液看起来干净则不需要冲洗冷却器。谁是正确的？",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    answer: 0,
    explanation: "When replacing or rebuilding a transmission, the cooler and cooler lines should always be thoroughly flushed to remove any debris, old fluid, or contamination. Even fluid that appears clean can contain microscopic particles that can damage a new or rebuilt transmission. Technician A is correct.",
    explanationChinese: "更换或重建变速箱时，应始终彻底冲洗冷却器和冷却管路以去除任何碎屑、旧油液或污染物。即使看起来干净的油液也可能含有微小颗粒，可能损坏新的或重建的变速箱。技师A是正确的。",
    diagram: "",
    terms: ["transmission_cooler", "transmission_fluid", "transmission_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Transmission Cooling System Explained"
  },
  {
    id: 69,
    q: "What type of ATF should be used when servicing an automatic transmission?",
    qChinese: "维修自动变速箱时应使用什么类型的ATF？",
    options: [
      "A) Any universal ATF will work in all transmissions",
      "B) The ATF type specified by the vehicle manufacturer",
      "C) The cheapest ATF available at the parts store",
      "D) Engine oil in an emergency can permanently replace ATF"
    ],
    optionsChinese: [
      "A) 任何通用ATF都适用于所有变速箱",
      "B) 车辆制造商指定的ATF类型",
      "C) 零件店中最便宜的ATF",
      "D) 紧急情况下发动机油可以永久替代ATF"
    ],
    answer: 1,
    explanation: "Always use the ATF type specified by the vehicle manufacturer. Different transmissions require specific fluid formulations for proper friction characteristics, viscosity, and additive packages. Using incorrect ATF can cause shift quality problems, clutch damage, seal deterioration, and void the warranty.",
    explanationChinese: "始终使用车辆制造商指定的ATF类型。不同的变速箱需要特定的油液配方以获得适当的摩擦特性、粘度和添加剂组合。使用不正确的ATF可能导致换挡质量问题、离合器损坏、密封劣化并使保修失效。",
    diagram: "",
    terms: ["transmission_fluid", "transmission_service", "clutch_pack"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Automatic Transmission Fluid - What You Need to Know"
  },
  {
    id: 70,
    q: "A transmission cooler line is leaking at the radiator fitting. What is the correct repair?",
    qChinese: "变速箱冷却管路在散热器接头处漏油。正确的修理方法是什么？",
    options: [
      "A) Apply silicone sealant over the leak",
      "B) Replace the fitting, line, or use the manufacturer-approved repair method",
      "C) Wrap the fitting with electrical tape",
      "D) Pinch the line closed with pliers"
    ],
    optionsChinese: [
      "A) 在泄漏处涂硅酮密封胶",
      "B) 更换接头、管路或使用制造商认可的修理方法",
      "C) 用电工胶带包裹接头",
      "D) 用钳子夹住管路"
    ],
    answer: 1,
    explanation: "Cooler line leaks must be properly repaired by replacing the damaged line, fitting, or using manufacturer-approved repair fittings. Makeshift repairs like sealant or tape cannot withstand the pressure and heat of ATF and will eventually fail, potentially causing fluid loss and transmission damage.",
    explanationChinese: "冷却管路泄漏必须通过更换损坏的管路、接头或使用制造商认可的修理接头来正确修理。临时修理如密封胶或胶带无法承受ATF的压力和温度，最终会失效，可能导致油液损失和变速箱损坏。",
    diagram: "",
    terms: ["transmission_cooler", "radiator", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Transmission Cooling System Explained"
  },
  {
    id: 71,
    q: "When removing a valve body, what should the technician be especially careful about?",
    qChinese: "拆卸阀体时，技师应特别注意什么？",
    options: [
      "A) Keeping the engine running during removal",
      "B) Noting the position and location of check balls, springs, and separator plates",
      "C) Removing the torque converter first",
      "D) Draining the engine oil"
    ],
    optionsChinese: [
      "A) 拆卸时保持发动机运转",
      "B) 记录止回球、弹簧和隔板的位置",
      "C) 先拆卸液力变矩器",
      "D) 排放发动机油"
    ],
    answer: 1,
    explanation: "When removing a valve body, check balls, springs, and separator plate gaskets must be carefully noted and documented because they are easily lost or misplaced. A misplaced check ball or spring can cause incorrect hydraulic routing, leading to shift problems or complete loss of a gear.",
    explanationChinese: "拆卸阀体时，必须仔细记录止回球、弹簧和隔板垫片的位置，因为它们很容易丢失或放错位置。放错位置的止回球或弹簧会导致液压路线错误，造成换挡问题或完全丧失某个挡位。",
    diagram: "",
    terms: ["valve_body", "shift_solenoid", "transmission_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "Automatic Transmission Valve Body Explained"
  },
  {
    id: 72,
    q: "What component prevents the vehicle from being started in any gear other than Park or Neutral?",
    qChinese: "什么部件防止车辆在驻车挡和空挡以外的挡位启动？",
    options: [
      "A) The transmission range sensor or neutral safety switch",
      "B) The torque converter clutch solenoid",
      "C) The shift interlock solenoid",
      "D) The overdrive cancel switch"
    ],
    optionsChinese: [
      "A) 变速箱挡位传感器或空挡安全开关",
      "B) 液力变矩器离合器电磁阀",
      "C) 换挡互锁电磁阀",
      "D) 超速挡取消开关"
    ],
    answer: 0,
    explanation: "The neutral safety switch or transmission range sensor prevents the starter circuit from completing unless the transmission is in Park or Neutral. This is a critical safety device that prevents the vehicle from lurching forward or backward when the engine is cranked while in gear.",
    explanationChinese: "空挡安全开关或变速箱挡位传感器防止起动电路在变速箱不在驻车挡或空挡时接通。这是一个关键的安全装置，防止在挂挡状态下启动发动机时车辆前冲或后退。",
    diagram: "",
    terms: ["starter_motor", "tcm", "relay"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "Transmission Control Module Function"
  },
  {
    id: 73,
    q: "A technician is replacing the electrical connector on a transmission. What is the most important step?",
    qChinese: "技师正在更换变速箱上的电气接头。最重要的步骤是什么？",
    options: [
      "A) Disconnecting the battery before working on the connector",
      "B) Using a hammer to seat the connector",
      "C) Leaving the old sealing ring in place",
      "D) Applying engine oil to the connector pins"
    ],
    optionsChinese: [
      "A) 在操作接头之前断开蓄电池",
      "B) 用锤子将接头安装到位",
      "C) 保留旧密封圈",
      "D) 在接头针脚上涂发动机油"
    ],
    answer: 0,
    explanation: "Always disconnect the battery before servicing any electrical connector on the transmission to prevent short circuits, solenoid damage, or PCM/TCM damage. Additionally, use proper connector release tools, replace damaged seals, and apply dielectric grease to prevent future corrosion of the connector pins.",
    explanationChinese: "在维修变速箱上的任何电气接头之前，始终应断开蓄电池以防止短路、电磁阀损坏或PCM/TCM损坏。此外，使用正确的接头释放工具，更换损坏的密封件，并涂抹绝缘油脂以防止接头针脚未来腐蚀。",
    diagram: "",
    terms: ["battery", "tcm", "pcm", "ground_circuit"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "Transmission Control Module Function"
  },
  {
    id: 74,
    q: "Overfilled transmission fluid can cause all of the following problems EXCEPT:",
    qChinese: "变速箱油加注过量可能导致以下所有问题，除了：",
    options: [
      "A) Aerated (foamy) fluid",
      "B) Erratic shifting and slipping",
      "C) Fluid overflow from the vent tube",
      "D) A cracked torque converter housing"
    ],
    optionsChinese: [
      "A) 油液充气（起泡）",
      "B) 换挡异常和打滑",
      "C) 油液从通气管溢出",
      "D) 液力变矩器壳体破裂"
    ],
    answer: 3,
    explanation: "Overfilled ATF contacts rotating components, causing foaming. Aerated fluid transmits hydraulic pressure poorly, leading to erratic shifts and slipping. Excess fluid can also overflow from the vent tube. However, overfilling does not crack the torque converter housing, which is a sealed welded assembly.",
    explanationChinese: "加注过量的ATF会接触旋转部件导致起泡。充气的油液传递液压压力不良，导致换挡异常和打滑。多余的油液也可能从通气管溢出。然而，加注过量不会导致液力变矩器壳体破裂，因为它是密封焊接的组件。",
    diagram: "",
    terms: ["transmission_fluid", "torque_converter", "shift_solenoid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Automatic Transmission Fluid - What You Need to Know"
  },
  {
    id: 75,
    q: "When replacing a shift solenoid in the valve body, what should also be done?",
    qChinese: "在阀体中更换换挡电磁阀时，还应做什么？",
    options: [
      "A) Replace the engine spark plugs",
      "B) Replace the solenoid O-rings or seals and check for debris in the valve body",
      "C) Adjust the transmission bands",
      "D) Replace the torque converter"
    ],
    optionsChinese: [
      "A) 更换发动机火花塞",
      "B) 更换电磁阀O型圈或密封件并检查阀体中的碎屑",
      "C) 调整变速箱制动带",
      "D) 更换液力变矩器"
    ],
    answer: 1,
    explanation: "When replacing a shift solenoid, always install new O-rings or seals to prevent leaks. Inspect the valve body for debris or contamination that may have caused the original failure. If debris is found, the valve body passages should be cleaned thoroughly to prevent the new solenoid from failing.",
    explanationChinese: "更换换挡电磁阀时，始终安装新的O型圈或密封件以防止泄漏。检查阀体中是否有可能导致原始故障的碎屑或污染物。如果发现碎屑，应彻底清洁阀体通道以防止新电磁阀故障。",
    diagram: "",
    terms: ["shift_solenoid", "valve_body", "transmission_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=hE-bFcLHbGc",
    youtubeTitle: "How Shift Solenoids Work"
  },
  {
    id: 76,
    q: "Technician A says the shift interlock solenoid prevents the shifter from moving out of Park without pressing the brake pedal. Technician B says the shift interlock solenoid is the same as the neutral safety switch. Who is correct?",
    qChinese: "技师A说换挡互锁电磁阀防止不踩制动踏板就将换挡杆从驻车挡移出。技师B说换挡互锁电磁阀与空挡安全开关相同。谁是正确的？",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    answer: 0,
    explanation: "Technician A is correct. The shift interlock solenoid locks the gear selector in Park until the brake pedal is depressed and the ignition is on, preventing accidental vehicle movement. It is a separate component from the neutral safety switch, which controls the starter circuit. They serve different functions.",
    explanationChinese: "技师A是正确的。换挡互锁电磁阀将挡位选择器锁定在驻车挡，直到踩下制动踏板且点火开关打开，防止车辆意外移动。它与控制起动电路的空挡安全开关是不同的部件。它们具有不同的功能。",
    diagram: "",
    terms: ["relay", "starter_motor", "tcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "Transmission Control Module Function"
  },
  {
    id: 77,
    q: "A transmission pan has a significant amount of fine metallic dust on the magnet. What does this indicate?",
    qChinese: "变速箱油底壳磁铁上有大量细小的金属粉末。这表明什么？",
    options: [
      "A) Normal wear of internal components",
      "B) A catastrophic transmission failure requiring immediate rebuild",
      "C) Contaminated ATF from the factory",
      "D) A failing oil pump gear"
    ],
    optionsChinese: [
      "A) 内部部件的正常磨损",
      "B) 需要立即大修的灾难性变速箱故障",
      "C) 工厂出厂时ATF已污染",
      "D) 油泵齿轮失效"
    ],
    answer: 0,
    explanation: "A small amount of fine metallic dust on the transmission pan magnet is considered normal wear over the fluid service interval. However, large metal chunks, brass-colored particles, or excessive amounts of metallic material indicate abnormal wear or damage that requires further investigation.",
    explanationChinese: "变速箱油底壳磁铁上少量细小的金属粉末被认为是换油周期内的正常磨损。然而，大块金属碎片、黄铜色颗粒或过量的金属材料表明异常磨损或损坏，需要进一步调查。",
    diagram: "",
    terms: ["transmission_service", "transmission_fluid", "planetary_gear_set"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Automatic Transmission Fluid - What You Need to Know"
  },
  {
    id: 78,
    q: "After a fluid and filter change, the transmission now shifts late. What is the most likely cause?",
    qChinese: "更换油液和滤清器后，变速箱现在换挡延迟。最可能的原因是什么？",
    options: [
      "A) The wrong type of ATF was used",
      "B) The transmission pan was not cleaned properly",
      "C) The oil pressure switch was disconnected",
      "D) The new filter is the wrong size"
    ],
    optionsChinese: [
      "A) 使用了错误类型的ATF",
      "B) 变速箱油底壳没有正确清洁",
      "C) 油压开关被断开",
      "D) 新滤清器尺寸不对"
    ],
    answer: 0,
    explanation: "Using the wrong ATF type can significantly affect shift quality and timing. Different friction modifier packages in ATFs are designed for specific transmissions. An incorrect ATF type can cause delayed shifts, harsh shifts, or slipping because the friction characteristics do not match the clutch material design.",
    explanationChinese: "使用错误类型的ATF会显著影响换挡质量和时机。不同ATF中的摩擦改性剂配方针对特定变速箱设计。不正确的ATF类型可能导致换挡延迟、换挡生硬或打滑，因为摩擦特性与离合器材料设计不匹配。",
    diagram: "",
    terms: ["transmission_fluid", "transmission_service", "clutch_pack"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Automatic Transmission Fluid - What You Need to Know"
  },
  {
    id: 79,
    q: "What is the purpose of the accumulator in an automatic transmission?",
    qChinese: "自动变速箱中蓄压器的作用是什么？",
    options: [
      "A) To store excess ATF",
      "B) To cushion the apply of a clutch or band for smoother shift quality",
      "C) To increase overall line pressure",
      "D) To filter contamination from the ATF"
    ],
    optionsChinese: [
      "A) 储存多余的ATF",
      "B) 缓冲离合器或制动带的接合以获得更平顺的换挡质量",
      "C) 增加整体主油压",
      "D) 过滤ATF中的污染物"
    ],
    answer: 1,
    explanation: "Accumulators are spring-loaded pistons in the valve body or transmission case that absorb some of the hydraulic pressure during clutch or band application. They provide a controlled, progressive apply to cushion the shift, making it smoother. Each shift circuit may have its own dedicated accumulator.",
    explanationChinese: "蓄压器是阀体或变速箱壳体中的弹簧加载活塞，在离合器或制动带接合时吸收部分液压压力。它们提供受控的渐进式接合以缓冲换挡，使其更平顺。每个换挡回路可能有其专用的蓄压器。",
    diagram: "",
    terms: ["valve_body", "clutch_pack", "shift_solenoid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "Automatic Transmission Valve Body Explained"
  },
  {
    id: 80,
    q: "When replacing an external transmission seal, what should be applied to the new seal lip?",
    qChinese: "更换外部变速箱密封时，应在新密封唇上涂什么？",
    options: [
      "A) RTV silicone sealant",
      "B) A thin coat of clean ATF or assembly lube",
      "C) Brake cleaner",
      "D) Wheel bearing grease"
    ],
    optionsChinese: [
      "A) RTV硅酮密封胶",
      "B) 薄薄一层干净的ATF或装配润滑剂",
      "C) 制动器清洗剂",
      "D) 轮毂轴承润滑脂"
    ],
    answer: 1,
    explanation: "Before installation, the seal lip should be lightly coated with clean ATF or manufacturer-recommended assembly lubricant. This prevents the seal from running dry on initial startup, which can cause premature wear and early failure. Never use sealants or incompatible greases that may damage the seal material.",
    explanationChinese: "安装前，密封唇应轻涂一层干净的ATF或制造商推荐的装配润滑剂。这可防止密封在初次启动时干摩擦，否则可能导致过早磨损和提前失效。切勿使用可能损坏密封材料的密封胶或不兼容的润滑脂。",
    diagram: "",
    terms: ["transmission_fluid", "transmission_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Automatic Transmission Fluid - What You Need to Know"
  },
  {
    id: 81,
    q: "A transmission external electrical connector shows green corrosion on the pins. What is the correct repair?",
    qChinese: "变速箱外部电气接头的针脚上显示绿色腐蚀。正确的修理方法是什么？",
    options: [
      "A) Ignore it if the transmission shifts normally",
      "B) Clean the pins, repair or replace the connector, and apply dielectric grease",
      "C) Spray the connector with WD-40 and reconnect",
      "D) Replace the entire wiring harness"
    ],
    optionsChinese: [
      "A) 如果变速箱换挡正常则忽略",
      "B) 清洁针脚，修理或更换接头，并涂抹绝缘油脂",
      "C) 向接头喷WD-40然后重新连接",
      "D) 更换整条线束"
    ],
    answer: 1,
    explanation: "Corroded connector pins increase resistance and can cause intermittent electrical signals, leading to erratic transmission behavior. The pins should be cleaned with an appropriate electrical contact cleaner, and damaged connectors should be repaired or replaced. Dielectric grease helps prevent future corrosion.",
    explanationChinese: "腐蚀的接头针脚会增加电阻并可能导致间歇性电信号，造成变速箱行为异常。应使用适当的电气触点清洁剂清洁针脚，损坏的接头应修理或更换。绝缘油脂有助于防止未来腐蚀。",
    diagram: "",
    terms: ["ground_circuit", "voltage_drop_test", "shift_solenoid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "Automatic Transmission Diagnosis Basics"
  },
  {
    id: 82,
    q: "What should be checked when diagnosing an ATF leak at the transmission-to-engine mating surface?",
    qChinese: "诊断变速箱与发动机配合面处的ATF泄漏时应检查什么？",
    options: [
      "A) The oxygen sensor",
      "B) The front pump seal, converter seal, and pump-to-case gasket or O-ring",
      "C) The rear main engine seal only",
      "D) The valve cover gaskets"
    ],
    optionsChinese: [
      "A) 氧传感器",
      "B) 前泵密封、变矩器密封和泵对壳体垫片或O型圈",
      "C) 仅发动机后主密封",
      "D) 气门室盖垫片"
    ],
    answer: 1,
    explanation: "Leaks at the bell housing area can originate from the front pump seal, torque converter neck seal, or the pump-to-case gasket or O-ring. It is important to differentiate between a transmission leak and an engine rear main seal leak, as both can present similarly in this area.",
    explanationChinese: "钟形壳区域的泄漏可能来自前泵密封、液力变矩器颈部密封或泵对壳体垫片或O型圈。重要的是要区分变速箱泄漏和发动机后主密封泄漏，因为两者在此区域可能表现相似。",
    diagram: "",
    terms: ["torque_converter", "transmission_fluid", "transmission_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Torque_converter_cutaway.svg/640px-Torque_converter_cutaway.svg.png",
    youtube: "https://www.youtube.com/watch?v=z1ZlC7OAiNk",
    youtubeTitle: "How a Torque Converter Works"
  },
  {
    id: 83,
    q: "A band adjustment is specified at three turns back from finger-tight. What does this mean?",
    qChinese: "制动带调整规定为从手紧位置回退三圈。这是什么意思？",
    options: [
      "A) Tighten the adjusting screw to the torque specification, then back off exactly three turns",
      "B) Tighten the adjusting screw finger-tight only, then back off three turns",
      "C) Turn the band anchor pin three full turns clockwise",
      "D) Loosen the locknut three turns and retighten"
    ],
    optionsChinese: [
      "A) 将调整螺钉拧紧到规定扭矩，然后恰好回退三圈",
      "B) 仅将调整螺钉手紧，然后回退三圈",
      "C) 将制动带锚销顺时针转三整圈",
      "D) 松开锁紧螺母三圈再重新拧紧"
    ],
    answer: 0,
    explanation: "Band adjustment typically involves tightening the adjusting screw to a specified torque value using a torque wrench, then backing off the screw the specified number of turns (in this case three). This sets the proper clearance between the band and drum for correct shift feel and holding capacity.",
    explanationChinese: "制动带调整通常包括使用扭矩扳手将调整螺钉拧紧到规定扭矩值，然后将螺钉回退规定的圈数（在此例中为三圈）。这为制动带和鼓之间设置了适当的间隙，以获得正确的换挡感觉和保持能力。",
    diagram: "",
    terms: ["clutch_pack", "transmission_service", "valve_body"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "How Automatic Transmission Clutches Work"
  },
  {
    id: 84,
    q: "When installing a new transmission filter, what should be verified?",
    qChinese: "安装新的变速箱滤清器时，应验证什么？",
    options: [
      "A) That the old filter seal or O-ring has been completely removed from the case",
      "B) That the filter is installed backward for better flow",
      "C) That the filter is a different brand than the original",
      "D) That the filter is lubricated with engine oil"
    ],
    optionsChinese: [
      "A) 旧滤清器密封或O型圈已从壳体上完全取下",
      "B) 滤清器反向安装以获得更好的流量",
      "C) 滤清器是与原装不同的品牌",
      "D) 滤清器用发动机油润滑"
    ],
    answer: 0,
    explanation: "Before installing a new filter, verify that the old filter seal or O-ring has been completely removed from the case or pickup tube. A double-stacked seal will prevent proper seating and can cause an air leak at the filter, resulting in pump cavitation, low pressure, and transmission damage.",
    explanationChinese: "在安装新滤清器之前，验证旧滤清器密封或O型圈已从壳体或吸油管上完全取下。双层叠放的密封会阻止正确就位，并可能导致滤清器处漏气，造成油泵气蚀、低压和变速箱损坏。",
    diagram: "",
    terms: ["transmission_service", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Automatic Transmission Fluid - What You Need to Know"
  },
  {
    id: 85,
    q: "What is the correct procedure when refilling a transmission after a fluid and filter service?",
    qChinese: "更换油液和滤清器后重新加注变速箱的正确程序是什么？",
    options: [
      "A) Add the full factory-fill capacity at once",
      "B) Add approximately half the factory capacity, start the engine, cycle through all gears, then check and adjust the level",
      "C) Fill until fluid runs out the fill plug",
      "D) Overfill by one quart to account for the cooler"
    ],
    optionsChinese: [
      "A) 一次加满出厂标准容量",
      "B) 先加入约出厂容量的一半，启动发动机，挂遍所有挡位，然后检查并调整液位",
      "C) 加注直到油液从加注塞溢出",
      "D) 多加一夸脱以弥补冷却器中的油液"
    ],
    answer: 1,
    explanation: "A fluid and filter change only drains a portion of the total ATF capacity since fluid remains in the converter and cooler. Add approximately half the factory capacity, start the engine, cycle through all gear ranges, warm the fluid to operating temperature, then check the dipstick and adjust accordingly.",
    explanationChinese: "更换油液和滤清器只能排出ATF总容量的一部分，因为油液留在变矩器和冷却器中。加入约出厂容量的一半，启动发动机，切换所有挡位范围，将油液加热到工作温度，然后检查油尺并相应调整。",
    diagram: "",
    terms: ["transmission_fluid", "transmission_service", "torque_converter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Automatic Transmission Fluid - What You Need to Know"
  },

  // ============================================================
  // UNIT REMOVAL/INSPECTION/INSTALLATION (Questions 86-100)
  // ============================================================
  {
    id: 86,
    q: "Before removing an automatic transmission from the vehicle, all of the following must be done EXCEPT:",
    qChinese: "从车辆上拆卸自动变速箱之前，必须完成以下所有操作，除了：",
    options: [
      "A) Disconnecting the battery",
      "B) Marking the driveshaft and companion flange for reinstallation",
      "C) Removing the cylinder head",
      "D) Disconnecting cooler lines, wiring harness, and shift linkage"
    ],
    optionsChinese: [
      "A) 断开蓄电池",
      "B) 标记传动轴和配合法兰以便重新安装",
      "C) 拆卸气缸盖",
      "D) 断开冷却管路、线束和换挡拉杆"
    ],
    answer: 2,
    explanation: "Removing the cylinder head is not required or related to transmission removal. The battery should be disconnected, the driveshaft marked and removed, cooler lines disconnected, the wiring harness unplugged, shift linkage detached, and the torque converter-to-flexplate bolts removed before pulling the unit.",
    explanationChinese: "拆卸气缸盖不是必需的，也与变速箱拆卸无关。应断开蓄电池，标记并拆卸传动轴，断开冷却管路，拔出线束，拆开换挡拉杆，拆除变矩器到挠性板的螺栓，然后再取出总成。",
    diagram: "",
    terms: ["battery", "torque_converter", "transmission_cooler", "universal_joint"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "Automatic Transmission Diagnosis Basics"
  },
  {
    id: 87,
    q: "Technician A says the torque converter must be properly seated on the oil pump drive before the transmission is bolted to the engine. Technician B says the converter will seat itself as the bolts are tightened. Who is correct?",
    qChinese: "技师A说在将变速箱用螺栓固定到发动机之前，液力变矩器必须正确就位在油泵驱动上。技师B说拧紧螺栓时变矩器会自行就位。谁是正确的？",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    answer: 0,
    explanation: "Technician A is correct. The torque converter must be fully seated onto the pump drive, the stator support, and the input shaft before installation. If the converter is not fully engaged and the transmission is forced against the engine, the oil pump can be damaged or destroyed. Never pull it into position with the bolts.",
    explanationChinese: "技师A是正确的。液力变矩器必须在安装前完全就位在油泵驱动、导轮支撑和输入轴上。如果变矩器未完全接合而强行将变速箱推向发动机，油泵可能被损坏或毁坏。切勿用螺栓将其拉到位。",
    diagram: "",
    terms: ["torque_converter", "transmission_service", "flywheel"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Torque_converter_cutaway.svg/640px-Torque_converter_cutaway.svg.png",
    youtube: "https://www.youtube.com/watch?v=z1ZlC7OAiNk",
    youtubeTitle: "How a Torque Converter Works"
  },
  {
    id: 88,
    q: "How can a technician verify that the torque converter is fully seated on the transmission input shaft and pump drive?",
    qChinese: "技师如何验证液力变矩器已完全就位在变速箱输入轴和油泵驱动上？",
    options: [
      "A) By spinning the converter and listening for noise",
      "B) By measuring the distance from the converter mounting pads to the bell housing face",
      "C) By checking the fluid level",
      "D) By testing the stall speed"
    ],
    optionsChinese: [
      "A) 旋转变矩器并听是否有噪声",
      "B) 测量变矩器安装面到钟形壳端面的距离",
      "C) 检查油液位",
      "D) 测试失速转速"
    ],
    answer: 1,
    explanation: "The technician should measure the distance from the torque converter mounting pads or pilot to the front edge of the bell housing. This measurement should meet the manufacturer's specification, ensuring the converter is fully engaged on all three engagement points: the input shaft, stator support, and pump drive.",
    explanationChinese: "技师应测量从液力变矩器安装面或导向到钟形壳前端面的距离。此测量值应符合制造商的规格，确保变矩器在所有三个接合点完全接合：输入轴、导轮支撑和油泵驱动。",
    diagram: "",
    terms: ["torque_converter", "transmission_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Torque_converter_cutaway.svg/640px-Torque_converter_cutaway.svg.png",
    youtube: "https://www.youtube.com/watch?v=z1ZlC7OAiNk",
    youtubeTitle: "How a Torque Converter Works"
  },
  {
    id: 89,
    q: "What is the purpose of measuring transmission end play during overhaul?",
    qChinese: "在大修期间测量变速箱轴向间隙的目的是什么？",
    options: [
      "A) To determine the correct ATF type",
      "B) To verify proper internal clearances and select the correct thrust washer or shim",
      "C) To check the torque converter balance",
      "D) To measure the flexplate runout"
    ],
    optionsChinese: [
      "A) 确定正确的ATF类型",
      "B) 验证适当的内部间隙并选择正确的止推垫片或垫片",
      "C) 检查液力变矩器平衡",
      "D) 测量挠性板跳动"
    ],
    answer: 1,
    explanation: "End play measurement determines the total axial clearance of the internal rotating components. Proper end play is critical for smooth operation and component longevity. Selective thrust washers or shims are used to bring end play within the manufacturer's specified range during reassembly.",
    explanationChinese: "轴向间隙测量确定内部旋转部件的总轴向间隙。适当的轴向间隙对于平稳运行和部件寿命至关重要。在重新组装过程中使用选择性止推垫片或垫片将轴向间隙调整到制造商规定的范围内。",
    diagram: "",
    terms: ["transmission_service", "planetary_gear_set", "clutch_pack"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Epicyclic_gear_ratios.png/640px-Epicyclic_gear_ratios.png",
    youtube: "https://www.youtube.com/watch?v=ARd-Om2VyiE",
    youtubeTitle: "How Planetary Gears Work"
  },
  {
    id: 90,
    q: "When inspecting a planetary gear set during overhaul, what should the technician look for?",
    qChinese: "在大修期间检查行星齿轮组时，技师应注意什么？",
    options: [
      "A) Chipped, pitted, or worn gear teeth and rough planet pinion bearings",
      "B) ATF color and odor only",
      "C) Wire harness routing",
      "D) Exhaust manifold bolt torque"
    ],
    optionsChinese: [
      "A) 崩裂、点蚀或磨损的齿轮齿以及粗糙的行星小齿轮轴承",
      "B) 仅ATF颜色和气味",
      "C) 线束走向",
      "D) 排气歧管螺栓扭矩"
    ],
    answer: 0,
    explanation: "During planetary gear set inspection, the technician should check for chipped, pitted, or worn gear teeth on all sun, ring, and planet gears. Each planet pinion should spin freely on its pin without roughness or excess play. Worn needle bearings or thrust washers should also be replaced.",
    explanationChinese: "在行星齿轮组检查过程中，技师应检查所有太阳轮、齿圈和行星齿轮上是否有崩裂、点蚀或磨损的齿。每个行星小齿轮应在其轴上自由旋转且无粗糙感或过大间隙。磨损的滚针轴承或止推垫片也应更换。",
    diagram: "",
    terms: ["planetary_gear_set", "transmission_service", "clutch_pack"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Epicyclic_gear_ratios.png/640px-Epicyclic_gear_ratios.png",
    youtube: "https://www.youtube.com/watch?v=ARd-Om2VyiE",
    youtubeTitle: "How Planetary Gears Work"
  },
  {
    id: 91,
    q: "Technician A says clutch pack clearance is measured with a feeler gauge. Technician B says it is measured with a dial indicator. Who is correct?",
    qChinese: "技师A说离合器片组间隙用塞尺测量。技师B说用百分表测量。谁是正确的？",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    answer: 2,
    explanation: "Both methods can be used depending on the manufacturer's specifications. Feeler gauges can be inserted between the snap ring and top pressure plate to measure clearance directly. A dial indicator can be set up to measure the total clutch pack travel. Both techniques are acceptable and commonly used.",
    explanationChinese: "两种方法都可以使用，取决于制造商的规格。塞尺可以插入卡簧和顶部压板之间直接测量间隙。百分表可以设置来测量离合器片组的总行程。两种技术都是可接受的且常用的。",
    diagram: "",
    terms: ["clutch_pack", "transmission_service", "dmm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "How Automatic Transmission Clutches Work"
  },
  {
    id: 92,
    q: "What determines the proper clutch pack clearance in most automatic transmissions?",
    qChinese: "在大多数自动变速箱中，什么决定了适当的离合器片组间隙？",
    options: [
      "A) The number of friction and steel plates and the selective snap ring or pressure plate thickness",
      "B) The transmission fluid type",
      "C) The engine displacement",
      "D) The tire size"
    ],
    optionsChinese: [
      "A) 摩擦片和钢片的数量以及选择性卡簧或压板的厚度",
      "B) 变速箱油类型",
      "C) 发动机排量",
      "D) 轮胎尺寸"
    ],
    answer: 0,
    explanation: "Clutch pack clearance is set by the number and thickness of friction plates, steel plates, and often a selective snap ring or selective pressure plate. During overhaul, the technician measures the clearance and selects the correct snap ring or plate thickness to achieve the specified clearance.",
    explanationChinese: "离合器片组间隙由摩擦片和钢片的数量和厚度以及通常的选择性卡簧或选择性压板来设定。在大修期间，技师测量间隙并选择正确的卡簧或压板厚度以达到规定的间隙。",
    diagram: "",
    terms: ["clutch_pack", "transmission_service", "pressure_plate"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "How Automatic Transmission Clutches Work"
  },
  {
    id: 93,
    q: "When installing a transmission onto the engine, what is critical regarding the torque converter-to-flexplate bolt holes?",
    qChinese: "将变速箱安装到发动机上时，关于液力变矩器到挠性板螺栓孔的关键要求是什么？",
    options: [
      "A) The bolts should be installed finger-tight only",
      "B) The converter must be rotated to align with the flexplate bolt holes without forcing, then bolts are torqued to specification",
      "C) Impact tools should always be used for converter bolts",
      "D) Converter bolts do not need torquing"
    ],
    optionsChinese: [
      "A) 螺栓仅需手紧安装",
      "B) 必须旋转变矩器使其与挠性板螺栓孔对齐而不强行对准，然后按规定扭矩拧紧螺栓",
      "C) 变矩器螺栓应始终使用冲击工具",
      "D) 变矩器螺栓不需要拧紧扭矩"
    ],
    answer: 1,
    explanation: "The torque converter mounting pads must be rotated to align with the flexplate bolt holes. Never force the converter to align. Once aligned, the bolts should be tightened evenly in a star pattern to the manufacturer's torque specification. Impact tools should not be used because of the risk of cracking the flexplate.",
    explanationChinese: "液力变矩器安装面必须旋转以与挠性板螺栓孔对齐。切勿强行对准变矩器。对齐后，螺栓应按星形图案均匀拧紧到制造商规定的扭矩。不应使用冲击工具，因为有导致挠性板破裂的风险。",
    diagram: "",
    terms: ["torque_converter", "flywheel", "lug_nut_torque"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Torque_converter_cutaway.svg/640px-Torque_converter_cutaway.svg.png",
    youtube: "https://www.youtube.com/watch?v=z1ZlC7OAiNk",
    youtubeTitle: "How a Torque Converter Works"
  },
  {
    id: 94,
    q: "Technician A says clutch friction plates should be inspected for discoloration and glazing during overhaul. Technician B says steel separator plates should be checked for warping with a straightedge. Who is correct?",
    qChinese: "技师A说大修期间应检查离合器摩擦片是否变色和发亮。技师B说应使用直尺检查钢制隔板是否翘曲。谁是正确的？",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Friction plates must be inspected for discoloration, glazing, flaking material, and measured for minimum thickness. Steel separator plates should be checked for warping using a straightedge and for scoring or heat discoloration. Both types must meet specifications for reuse.",
    explanationChinese: "两位技师都是正确的。摩擦片必须检查是否变色、发亮、材料剥落，并测量最小厚度。钢制隔板应使用直尺检查是否翘曲，以及是否有划痕或热变色。两种类型都必须符合再使用规格。",
    diagram: "",
    terms: ["clutch_pack", "clutch_disc", "transmission_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "How Automatic Transmission Clutches Work"
  },
  {
    id: 95,
    q: "What must be done before removing the transmission from a front-wheel-drive vehicle with a transaxle?",
    qChinese: "在从前轮驱动车辆上拆卸变速驱动桥之前必须做什么？",
    options: [
      "A) Remove the rear axle assembly",
      "B) Support the engine, remove axle shafts or disconnect them, and remove subframe bolts if required",
      "C) Remove the fuel tank",
      "D) Disconnect the exhaust at the manifold only"
    ],
    optionsChinese: [
      "A) 拆卸后桥总成",
      "B) 支撑发动机，拆卸或断开半轴，如需要则拆除副车架螺栓",
      "C) 拆卸油箱",
      "D) 仅在歧管处断开排气"
    ],
    answer: 1,
    explanation: "On front-wheel-drive vehicles, the engine must be supported since the transaxle provides structural support. The CV axle shafts must be removed or disconnected from the transaxle. The subframe or cradle may need to be lowered or removed depending on the vehicle design for adequate clearance.",
    explanationChinese: "在前轮驱动车辆上，由于变速驱动桥提供结构支撑，必须支撑发动机。必须从变速驱动桥上拆卸或断开等速万向节半轴。根据车辆设计，可能需要降低或拆卸副车架以获得足够的操作空间。",
    diagram: "",
    terms: ["cv_joint", "engine_mount", "transmission_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "Automatic Transmission Diagnosis Basics"
  },
  {
    id: 96,
    q: "What tool is used to measure transmission end play?",
    qChinese: "用什么工具测量变速箱轴向间隙？",
    options: [
      "A) A torque wrench",
      "B) A dial indicator",
      "C) A vacuum gauge",
      "D) A scan tool"
    ],
    optionsChinese: [
      "A) 扭矩扳手",
      "B) 百分表",
      "C) 真空表",
      "D) 诊断仪"
    ],
    answer: 1,
    explanation: "A dial indicator is the standard tool for measuring transmission end play. It is mounted to the case and the plunger is placed against the input shaft or drum. The shaft or drum is pushed and pulled to measure total axial movement, which is the end play. This measurement determines the selective thrust washer needed.",
    explanationChinese: "百分表是测量变速箱轴向间隙的标准工具。将其安装在壳体上，测杆抵住输入轴或鼓。推拉轴或鼓以测量总轴向移动量，即轴向间隙。此测量值决定了所需的选择性止推垫片。",
    diagram: "",
    terms: ["transmission_service", "planetary_gear_set", "dmm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Epicyclic_gear_ratios.png/640px-Epicyclic_gear_ratios.png",
    youtube: "https://www.youtube.com/watch?v=ARd-Om2VyiE",
    youtubeTitle: "How Planetary Gears Work"
  },
  {
    id: 97,
    q: "During reassembly, new clutch friction plates should be soaked in what before installation?",
    qChinese: "在重新组装期间，新的离合器摩擦片在安装前应浸泡在什么中？",
    options: [
      "A) Engine oil",
      "B) Clean ATF of the correct type for at least 30 minutes",
      "C) Brake fluid",
      "D) Water"
    ],
    optionsChinese: [
      "A) 发动机油",
      "B) 正确类型的干净ATF中至少浸泡30分钟",
      "C) 制动液",
      "D) 水"
    ],
    answer: 1,
    explanation: "New clutch friction plates must be pre-soaked in clean ATF of the correct type for at least 30 minutes (or per manufacturer instructions) before installation. This saturates the friction material and prevents the clutch from burning on initial engagement. Dry plates will glaze and fail prematurely.",
    explanationChinese: "新的离合器摩擦片必须在安装前在正确类型的干净ATF中预浸泡至少30分钟（或按制造商说明）。这使摩擦材料充分吸油，防止离合器在初次接合时烧损。干燥的摩擦片会发亮并过早失效。",
    diagram: "",
    terms: ["clutch_pack", "transmission_fluid", "transmission_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "How Automatic Transmission Clutches Work"
  },
  {
    id: 98,
    q: "What should be checked on the flexplate before reinstalling the transmission?",
    qChinese: "在重新安装变速箱之前应检查挠性板的什么？",
    options: [
      "A) Flexplate runout, cracks, and ring gear tooth condition",
      "B) The flexplate paint color",
      "C) Nothing; flexplates never fail",
      "D) Only the number of bolt holes"
    ],
    optionsChinese: [
      "A) 挠性板跳动、裂纹和齿圈齿况",
      "B) 挠性板油漆颜色",
      "C) 不需要检查；挠性板不会失效",
      "D) 仅螺栓孔数量"
    ],
    answer: 0,
    explanation: "The flexplate should be inspected for cracks (especially around bolt holes), ring gear tooth damage, and runout. Excessive flexplate runout can cause torque converter seal leaks, vibration, and abnormal wear. A cracked flexplate must be replaced to avoid catastrophic failure during operation.",
    explanationChinese: "应检查挠性板是否有裂纹（尤其是螺栓孔周围）、齿圈齿损坏和跳动。过大的挠性板跳动会导致液力变矩器密封泄漏、振动和异常磨损。有裂纹的挠性板必须更换以避免运行中的灾难性故障。",
    diagram: "",
    terms: ["flywheel", "torque_converter", "starter_motor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Torque_converter_cutaway.svg/640px-Torque_converter_cutaway.svg.png",
    youtube: "https://www.youtube.com/watch?v=z1ZlC7OAiNk",
    youtubeTitle: "How a Torque Converter Works"
  },
  {
    id: 99,
    q: "When inspecting a one-way (overrunning) clutch during overhaul, what should the technician check?",
    qChinese: "在大修期间检查单向（超越）离合器时，技师应检查什么？",
    options: [
      "A) That it locks in one direction and freewheels in the other with no roughness or slipping",
      "B) That it spins freely in both directions",
      "C) That it is locked in both directions",
      "D) Only that the clutch springs are present"
    ],
    optionsChinese: [
      "A) 它在一个方向锁止并在另一个方向自由旋转且无粗糙感或打滑",
      "B) 它在两个方向都自由旋转",
      "C) 它在两个方向都锁止",
      "D) 仅离合器弹簧是否存在"
    ],
    answer: 0,
    explanation: "A one-way clutch must lock firmly in one rotational direction and freewheel smoothly in the opposite direction. The technician should check for worn sprags or rollers, damaged inner and outer races, and any roughness during rotation. A slipping one-way clutch will cause shift quality and engine braking issues.",
    explanationChinese: "单向离合器必须在一个旋转方向牢固锁止，在相反方向顺畅自由旋转。技师应检查是否有磨损的棘爪或滚柱、损坏的内外滚道以及旋转时的任何粗糙感。打滑的单向离合器会导致换挡质量和发动机制动问题。",
    diagram: "",
    terms: ["clutch_pack", "planetary_gear_set", "transmission_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "How Automatic Transmission Clutches Work"
  },
  {
    id: 100,
    q: "After installing a rebuilt transmission, the vehicle should be road tested. What should the technician verify during the road test?",
    qChinese: "安装重建的变速箱后，应对车辆进行路试。技师在路试中应验证什么？",
    options: [
      "A) Only that the vehicle moves forward",
      "B) All shift points, shift quality, TCC engagement, noise levels, fluid leaks, and proper operation in all ranges",
      "C) Only the speedometer accuracy",
      "D) That the radio works properly"
    ],
    optionsChinese: [
      "A) 仅验证车辆能前进",
      "B) 所有换挡点、换挡质量、TCC接合、噪声水平、油液泄漏以及所有挡位范围的正常工作",
      "C) 仅车速表准确性",
      "D) 收音机是否正常工作"
    ],
    answer: 1,
    explanation: "A thorough post-installation road test should verify smooth engagement in all ranges, correct shift timing and quality for all gears, proper TCC lockup, absence of abnormal noise or vibration, and no fluid leaks. The technician should check operation under various throttle conditions and confirm all DTCs are clear.",
    explanationChinese: "彻底的安装后路试应验证所有挡位范围的平顺接合、所有挡位的正确换挡时机和质量、正常的TCC锁止、无异常噪声或振动以及无油液泄漏。技师应在各种油门条件下检查操作并确认所有DTC已清除。",
    diagram: "",
    terms: ["torque_converter", "shift_solenoid", "scan_tool", "dtc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "Automatic Transmission Diagnosis Basics"
  }
];
