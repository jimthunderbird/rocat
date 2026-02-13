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
  },
  // ============================================================
  // ADDITIONAL A2 QUESTIONS (Questions 101-200)
  // ============================================================
  {
    id: 101,
    q: "What is the primary purpose of automatic transmission fluid (ATF) in an automatic transmission?",
    qChinese: "自动变速箱油（ATF）在自动变速箱中的主要用途是什么？",
    options: [
      "A) Only to lubricate gears",
      "B) To act as a hydraulic medium, lubricant, and coolant for the transmission",
      "C) Only to cool the torque converter",
      "D) To increase engine horsepower"
    ],
    optionsChinese: [
      "A) 仅润滑齿轮",
      "B) 作为变速箱的液压介质、润滑剂和冷却剂",
      "C) 仅冷却液力变矩器",
      "D) 增加发动机马力"
    ],
    answer: 1,
    explanation: "ATF serves multiple critical functions in an automatic transmission. It acts as the hydraulic fluid that operates clutches and bands, lubricates all moving parts including gears and bearings, and transfers heat away from internal components to the cooler. Without proper ATF, the transmission cannot function.",
    explanationChinese: "ATF在自动变速箱中具有多项关键功能。它作为液压油操作离合器和制动带，润滑包括齿轮和轴承在内的所有运动部件，并将内部部件的热量传递到冷却器。没有合适的ATF，变速箱无法正常工作。",
    diagram: "",
    terms: ["transmission_fluid", "torque_converter", "clutch_pack"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Automatic Transmission Fluid - What You Need to Know"
  },
  {
    id: 102,
    q: "What happens if an automatic transmission is overfilled with ATF?",
    qChinese: "如果自动变速箱加注了过多的ATF会发生什么？",
    options: [
      "A) The transmission will shift more smoothly",
      "B) The fluid may become aerated (foamy), causing erratic shifting and slipping",
      "C) The torque converter will lock up permanently",
      "D) The transmission cooler will become more efficient"
    ],
    optionsChinese: [
      "A) 变速箱换挡会更平顺",
      "B) 油液可能充气（起泡），导致换挡不规律和打滑",
      "C) 液力变矩器会永久锁止",
      "D) 变速箱冷却器会更高效"
    ],
    answer: 1,
    explanation: "Overfilling an automatic transmission causes the rotating gears and components to whip the fluid into a foam. Aerated fluid cannot maintain proper hydraulic pressure, leading to slipping clutches, erratic shifting, and potential overheating. The fluid may also be forced out through seals and vents.",
    explanationChinese: "自动变速箱加注过量会导致旋转的齿轮和部件将油液搅成泡沫。充气的油液无法维持适当的液压压力，导致离合器打滑、换挡不规律和可能的过热。油液也可能从密封件和通气孔中被挤出。",
    diagram: "",
    terms: ["transmission_fluid", "clutch_pack", "valve_body"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Automatic Transmission Fluid - What You Need to Know"
  },
  {
    id: 103,
    q: "Which three main components make up a torque converter?",
    qChinese: "液力变矩器由哪三个主要部件组成？",
    options: [
      "A) Sun gear, ring gear, and planet carrier",
      "B) Impeller (pump), turbine, and stator",
      "C) Clutch pack, band, and servo",
      "D) Input shaft, output shaft, and governor"
    ],
    optionsChinese: [
      "A) 太阳轮、齿圈和行星架",
      "B) 泵轮（叶轮）、涡轮和导轮",
      "C) 离合器片组、制动带和伺服器",
      "D) 输入轴、输出轴和调速器"
    ],
    answer: 1,
    explanation: "A torque converter consists of three main elements: the impeller (pump) driven by the engine, the turbine connected to the transmission input shaft, and the stator that redirects fluid flow to multiply torque. These components work together using fluid coupling to transfer engine power to the transmission.",
    explanationChinese: "液力变矩器由三个主要元件组成：由发动机驱动的泵轮（叶轮）、连接到变速箱输入轴的涡轮以及重新引导油液流向以倍增扭矩的导轮。这些部件通过液力耦合共同工作，将发动机动力传递给变速箱。",
    diagram: "",
    terms: ["torque_converter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Torque_converter_cutaway.svg/640px-Torque_converter_cutaway.svg.png",
    youtube: "https://www.youtube.com/watch?v=z1ZlC7OAiNk",
    youtubeTitle: "How a Torque Converter Works"
  },
  {
    id: 104,
    q: "What is the function of the stator in a torque converter?",
    qChinese: "液力变矩器中导轮的功能是什么？",
    options: [
      "A) To drive the transmission oil pump",
      "B) To redirect fluid flow from the turbine back to the impeller to multiply torque",
      "C) To connect the engine directly to the transmission input shaft",
      "D) To filter debris from the transmission fluid"
    ],
    optionsChinese: [
      "A) 驱动变速箱油泵",
      "B) 将涡轮回流的油液重新导向泵轮以倍增扭矩",
      "C) 将发动机直接连接到变速箱输入轴",
      "D) 过滤变速箱油中的杂质"
    ],
    answer: 1,
    explanation: "The stator sits between the turbine and impeller and redirects fluid exiting the turbine so it assists the impeller rotation rather than opposing it. This redirection multiplies engine torque during acceleration. The stator is mounted on a one-way clutch so it freewheels at cruising speeds when torque multiplication is not needed.",
    explanationChinese: "导轮位于涡轮和泵轮之间，重新引导从涡轮流出的油液，使其辅助泵轮旋转而非阻碍。这种重新导向在加速时倍增发动机扭矩。导轮安装在单向离合器上，在不需要扭矩倍增的巡航速度下自由旋转。",
    diagram: "",
    terms: ["torque_converter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Torque_converter_cutaway.svg/640px-Torque_converter_cutaway.svg.png",
    youtube: "https://www.youtube.com/watch?v=z1ZlC7OAiNk",
    youtubeTitle: "How a Torque Converter Works"
  },
  {
    id: 105,
    q: "In a Simpson planetary gear set, which component is held stationary to achieve second gear (intermediate)?",
    qChinese: "在辛普森行星齿轮组中，哪个部件被固定以实现二挡（中间挡）？",
    options: [
      "A) The front ring gear",
      "B) The rear planet carrier",
      "C) The front sun gear using the intermediate band",
      "D) The output shaft"
    ],
    optionsChinese: [
      "A) 前齿圈",
      "B) 后行星架",
      "C) 使用中间制动带固定前太阳轮",
      "D) 输出轴"
    ],
    answer: 2,
    explanation: "In a typical Simpson gear train, second gear is achieved by holding the front sun gear stationary using the intermediate band while the forward clutch remains applied. This forces the front planet carrier to rotate at a reduced speed, providing a gear reduction between first and third gear ratios.",
    explanationChinese: "在典型的辛普森齿轮系中，通过使用中间制动带固定前太阳轮来实现二挡，同时前进挡离合器保持接合。这迫使前行星架以较低的速度旋转，提供介于一挡和三挡齿轮比之间的减速比。",
    diagram: "",
    terms: ["planetary_gear_set", "band", "gear_ratio"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Epicyclic_gear_ratios.png/640px-Epicyclic_gear_ratios.png",
    youtube: "https://www.youtube.com/watch?v=ARd-Om2VyiE",
    youtubeTitle: "How Planetary Gear Sets Work"
  },
  {
    id: 106,
    q: "What is the primary function of the valve body in an automatic transmission?",
    qChinese: "自动变速箱中阀体的主要功能是什么？",
    options: [
      "A) To store transmission fluid",
      "B) To direct hydraulic fluid flow to the appropriate clutch packs and bands for gear selection",
      "C) To multiply engine torque",
      "D) To connect the transmission to the driveshaft"
    ],
    optionsChinese: [
      "A) 储存变速箱油",
      "B) 将液压油引导到适当的离合器片组和制动带以选择挡位",
      "C) 倍增发动机扭矩",
      "D) 将变速箱连接到传动轴"
    ],
    answer: 1,
    explanation: "The valve body is the hydraulic control center of the automatic transmission. It contains numerous valves, passages, and check balls that direct pressurized ATF to the correct clutch packs and bands to achieve the desired gear. Modern valve bodies work in conjunction with electronic solenoids controlled by the TCM.",
    explanationChinese: "阀体是自动变速箱的液压控制中心。它包含许多阀门、油道和单向球阀，将加压的ATF引导到正确的离合器片组和制动带以实现所需挡位。现代阀体与由TCM控制的电子电磁阀协同工作。",
    diagram: "",
    terms: ["valve_body", "clutch_pack", "band", "shift_solenoid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "Automatic Transmission Valve Body Explained"
  },
  {
    id: 107,
    q: "What does a shift solenoid do in an electronically controlled automatic transmission?",
    qChinese: "在电子控制自动变速箱中，换挡电磁阀的作用是什么？",
    options: [
      "A) It generates electrical power for the TCM",
      "B) It is an electro-hydraulic valve that controls fluid flow to shift valves based on TCM commands",
      "C) It mechanically connects the engine to the wheels",
      "D) It measures vehicle speed"
    ],
    optionsChinese: [
      "A) 为TCM产生电力",
      "B) 它是一种电液阀，根据TCM指令控制流向换挡阀的油液",
      "C) 机械地将发动机连接到车轮",
      "D) 测量车速"
    ],
    answer: 1,
    explanation: "Shift solenoids are electro-hydraulic valves commanded by the TCM. When energized or de-energized, they open or close hydraulic passages in the valve body, directing fluid pressure to engage or release specific clutch packs and bands. Different solenoid combinations produce different gear selections.",
    explanationChinese: "换挡电磁阀是由TCM控制的电液阀。当通电或断电时，它们打开或关闭阀体中的液压通道，引导油压接合或释放特定的离合器片组和制动带。不同的电磁阀组合产生不同的挡位选择。",
    diagram: "",
    terms: ["shift_solenoid", "tcm", "valve_body"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=hE-bFcLHbGc",
    youtubeTitle: "How Shift Solenoids Work"
  },
  {
    id: 108,
    q: "A clutch pack in an automatic transmission consists of alternating friction discs and steel plates. What applies the clutch pack?",
    qChinese: "自动变速箱中的离合器片组由交替排列的摩擦片和钢片组成。什么接合离合器片组？",
    options: [
      "A) A mechanical cable from the shift lever",
      "B) Hydraulic pressure acting on a piston behind the clutch pack",
      "C) An electric motor inside the transmission",
      "D) Spring pressure alone"
    ],
    optionsChinese: [
      "A) 来自换挡杆的机械钢缆",
      "B) 作用在离合器片组后方活塞上的液压压力",
      "C) 变速箱内部的电动机",
      "D) 仅弹簧压力"
    ],
    answer: 1,
    explanation: "Clutch packs are applied by hydraulic pressure. When the valve body directs ATF pressure to a clutch circuit, the pressurized fluid pushes a piston that squeezes the friction discs and steel plates together. When pressure is released, return springs push the piston back, releasing the clutch pack.",
    explanationChinese: "离合器片组通过液压压力接合。当阀体将ATF压力引导到离合器回路时，加压油液推动活塞，将摩擦片和钢片压紧在一起。当压力释放时，回位弹簧将活塞推回，释放离合器片组。",
    diagram: "",
    terms: ["clutch_pack", "valve_body", "line_pressure"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "How Automatic Transmission Clutches Work"
  },
  {
    id: 109,
    q: "What is the purpose of a band in an automatic transmission?",
    qChinese: "自动变速箱中制动带的用途是什么？",
    options: [
      "A) To connect the torque converter to the flywheel",
      "B) To hold a drum connected to a planetary gear member stationary to achieve a specific gear ratio",
      "C) To filter the transmission fluid",
      "D) To measure transmission temperature"
    ],
    optionsChinese: [
      "A) 将液力变矩器连接到飞轮",
      "B) 固定连接到行星齿轮构件的鼓以实现特定的齿轮比",
      "C) 过滤变速箱油",
      "D) 测量变速箱温度"
    ],
    answer: 1,
    explanation: "A transmission band wraps around a drum that is connected to a member of the planetary gear set. When the band is applied by its servo, it holds the drum stationary, which holds a specific planetary member to create a desired gear ratio. Bands are released and applied during shifting.",
    explanationChinese: "变速箱制动带环绕在连接到行星齿轮组某个构件的鼓上。当制动带由其伺服器接合时，它固定住鼓，从而固定特定的行星构件以创建所需的齿轮比。制动带在换挡过程中释放和接合。",
    diagram: "",
    terms: ["band", "servo", "planetary_gear_set", "gear_ratio"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=ARd-Om2VyiE",
    youtubeTitle: "Automatic Transmission Bands and Servos"
  },
  {
    id: 110,
    q: "What component applies a band in an automatic transmission?",
    qChinese: "什么部件接合自动变速箱中的制动带？",
    options: [
      "A) A clutch pack",
      "B) A hydraulic servo piston",
      "C) The torque converter stator",
      "D) The parking pawl"
    ],
    optionsChinese: [
      "A) 离合器片组",
      "B) 液压伺服活塞",
      "C) 液力变矩器导轮",
      "D) 驻车棘爪"
    ],
    answer: 1,
    explanation: "A servo consists of a piston inside a bore in the transmission case. When hydraulic pressure is applied to the servo, the piston moves outward and pushes a rod that tightens the band around its drum. When pressure is released, a return spring retracts the piston and the band loosens.",
    explanationChinese: "伺服器由变速箱壳体内孔中的活塞组成。当液压压力施加到伺服器时，活塞向外移动并推动一根杆将制动带收紧在其鼓上。当压力释放时，回位弹簧使活塞缩回，制动带松开。",
    diagram: "",
    terms: ["servo", "band", "line_pressure"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "Automatic Transmission Bands and Servos"
  },
  {
    id: 111,
    q: "What is the function of the transmission cooler?",
    qChinese: "变速箱冷却器的功能是什么？",
    options: [
      "A) To warm the transmission fluid during cold starts only",
      "B) To remove heat from the transmission fluid to prevent overheating",
      "C) To filter metal particles from the fluid",
      "D) To increase line pressure"
    ],
    optionsChinese: [
      "A) 仅在冷启动时加热变速箱油",
      "B) 从变速箱油中散热以防止过热",
      "C) 过滤油液中的金属颗粒",
      "D) 增加主油压"
    ],
    answer: 1,
    explanation: "The transmission cooler removes heat from the ATF to keep it within safe operating temperatures. Most factory coolers are located inside the radiator, using engine coolant to cool the ATF. Auxiliary coolers mounted in front of the radiator provide additional cooling for towing or severe-duty applications.",
    explanationChinese: "变速箱冷却器从ATF中散热，使其保持在安全的工作温度范围内。大多数原厂冷却器位于散热器内部，使用发动机冷却液冷却ATF。安装在散热器前方的辅助冷却器为拖曳或重负荷应用提供额外冷却。",
    diagram: "",
    terms: ["transmission_cooler", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Transmission Cooling System Explained"
  },
  {
    id: 112,
    q: "What does CVT stand for, and how does it differ from a conventional automatic transmission?",
    qChinese: "CVT代表什么，它与传统自动变速箱有何不同？",
    options: [
      "A) Constant Voltage Transformer; it uses electrical power instead of fluid",
      "B) Continuously Variable Transmission; it uses a belt and pulley system instead of fixed gear ratios",
      "C) Computer Validated Transmission; it is fully computer controlled",
      "D) Converter Vacuum Transfer; it uses vacuum to shift gears"
    ],
    optionsChinese: [
      "A) 恒压变压器；它使用电力而非油液",
      "B) 无级变速器；它使用皮带和滑轮系统代替固定齿轮比",
      "C) 计算机验证变速器；它完全由计算机控制",
      "D) 变矩器真空传递；它使用真空来换挡"
    ],
    answer: 1,
    explanation: "CVT stands for Continuously Variable Transmission. Instead of using planetary gear sets with fixed ratios, a CVT uses a belt or chain running between two variable-diameter pulleys. By changing the effective diameter of each pulley, the CVT provides an infinite number of gear ratios within its range.",
    explanationChinese: "CVT代表无级变速器。CVT不使用具有固定比率的行星齿轮组，而是使用在两个可变直径滑轮之间运行的皮带或链条。通过改变每个滑轮的有效直径，CVT在其范围内提供无限数量的齿轮比。",
    diagram: "",
    terms: ["cvt", "gear_ratio"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nissan_Extroid_CVT_cutaway.jpg/640px-Nissan_Extroid_CVT_cutaway.jpg",
    youtube: "https://www.youtube.com/watch?v=PEq5_b4LWNY",
    youtubeTitle: "How a CVT Works"
  },
  {
    id: 113,
    q: "What is the role of the Transmission Control Module (TCM)?",
    qChinese: "变速箱控制模块（TCM）的作用是什么？",
    options: [
      "A) To supply hydraulic pressure to the valve body",
      "B) To electronically control shift timing, shift feel, and torque converter clutch operation based on sensor inputs",
      "C) To mechanically connect the engine to the transmission",
      "D) To cool the transmission fluid"
    ],
    optionsChinese: [
      "A) 向阀体供应液压压力",
      "B) 根据传感器输入电子控制换挡时机、换挡感觉和液力变矩器离合器工作",
      "C) 机械地将发动机连接到变速箱",
      "D) 冷却变速箱油"
    ],
    answer: 1,
    explanation: "The TCM is the electronic brain of the transmission. It receives inputs from sensors such as throttle position, vehicle speed, engine load, and transmission temperature, then commands shift solenoids and pressure control solenoids to optimize shift timing, shift quality, and TCC engagement for efficiency and driveability.",
    explanationChinese: "TCM是变速箱的电子大脑。它接收来自节气门位置、车速、发动机负载和变速箱温度等传感器的输入，然后指令换挡电磁阀和压力控制电磁阀，以优化换挡时机、换挡质量和TCC接合，实现效率和驾驶性能。",
    diagram: "",
    terms: ["tcm", "shift_solenoid", "torque_converter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "Transmission Control Module Function"
  },
  {
    id: 114,
    q: "What is a gear ratio in an automatic transmission?",
    qChinese: "自动变速箱中的齿轮比是什么？",
    options: [
      "A) The ratio of transmission fluid to coolant",
      "B) The ratio of input shaft speed to output shaft speed",
      "C) The ratio of engine oil pressure to transmission line pressure",
      "D) The number of forward gears divided by reverse gears"
    ],
    optionsChinese: [
      "A) 变速箱油与冷却液的比率",
      "B) 输入轴转速与输出轴转速的比率",
      "C) 发动机油压与变速箱主油压的比率",
      "D) 前进挡数除以倒挡数"
    ],
    answer: 1,
    explanation: "A gear ratio represents the relationship between input speed and output speed. For example, a 2.5:1 ratio means the input shaft turns 2.5 times for every one revolution of the output shaft. Lower gears have higher numerical ratios for more torque, while higher gears have lower ratios for fuel efficiency.",
    explanationChinese: "齿轮比表示输入转速与输出转速之间的关系。例如，2.5:1的比率意味着输出轴每转一圈，输入轴转2.5圈。低挡位具有较高的数值比率以提供更多扭矩，而高挡位具有较低的比率以提高燃油效率。",
    diagram: "",
    terms: ["gear_ratio", "planetary_gear_set"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Epicyclic_gear_ratios.png/640px-Epicyclic_gear_ratios.png",
    youtube: "https://www.youtube.com/watch?v=ARd-Om2VyiE",
    youtubeTitle: "Understanding Gear Ratios"
  },
  {
    id: 115,
    q: "What is overdrive in an automatic transmission?",
    qChinese: "自动变速箱中的超速挡是什么？",
    options: [
      "A) A gear ratio less than 1:1 where the output shaft turns faster than the input shaft",
      "B) A gear that provides maximum torque for towing",
      "C) A feature that increases engine RPM at highway speeds",
      "D) An emergency mode when the transmission overheats"
    ],
    optionsChinese: [
      "A) 输出轴转速快于输入轴的小于1:1的齿轮比",
      "B) 为拖曳提供最大扭矩的挡位",
      "C) 在高速公路速度下增加发动机转速的功能",
      "D) 变速箱过热时的紧急模式"
    ],
    answer: 0,
    explanation: "Overdrive is a gear ratio where the output shaft rotates faster than the input shaft, such as 0.70:1. This reduces engine RPM at highway speeds, improving fuel economy and reducing engine wear. Most modern automatic transmissions have one or two overdrive ratios in their highest gears.",
    explanationChinese: "超速挡是输出轴旋转速度快于输入轴的齿轮比，例如0.70:1。这降低了高速公路速度下的发动机转速，提高了燃油经济性并减少了发动机磨损。大多数现代自动变速箱在其最高挡位具有一到两个超速比。",
    diagram: "",
    terms: ["overdrive", "gear_ratio"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=ARd-Om2VyiE",
    youtubeTitle: "Overdrive Explained"
  },
  {
    id: 116,
    q: "What is line pressure in an automatic transmission?",
    qChinese: "自动变速箱中的主油压是什么？",
    options: [
      "A) The pressure of the engine oil that lubricates the transmission",
      "B) The main hydraulic pressure generated by the transmission oil pump that operates all clutches and bands",
      "C) The air pressure inside the torque converter",
      "D) The pressure of the transmission fluid at the dipstick"
    ],
    optionsChinese: [
      "A) 润滑变速箱的发动机油压力",
      "B) 由变速箱油泵产生的操作所有离合器和制动带的主液压压力",
      "C) 液力变矩器内部的气压",
      "D) 油尺处变速箱油的压力"
    ],
    answer: 1,
    explanation: "Line pressure is the main system pressure generated by the transmission oil pump and regulated by the pressure regulator valve. It is the source of hydraulic force used to apply clutch packs and bands. Line pressure is adjusted by the TCM based on engine load and driving conditions to optimize shift feel.",
    explanationChinese: "主油压是由变速箱油泵产生并由压力调节阀调节的主系统压力。它是用于接合离合器片组和制动带的液压力来源。主油压由TCM根据发动机负载和驾驶条件进行调整，以优化换挡感觉。",
    diagram: "",
    terms: ["line_pressure", "valve_body", "clutch_pack"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "Transmission Line Pressure Explained"
  },
  {
    id: 117,
    q: "What is the purpose of an accumulator in an automatic transmission?",
    qChinese: "自动变速箱中蓄压器的用途是什么？",
    options: [
      "A) To store electrical energy for the solenoids",
      "B) To cushion the application of a clutch or band for a smoother shift",
      "C) To increase the maximum line pressure",
      "D) To filter debris from the transmission fluid"
    ],
    optionsChinese: [
      "A) 为电磁阀储存电能",
      "B) 缓冲离合器或制动带的接合以实现更平顺的换挡",
      "C) 增加最大主油压",
      "D) 过滤变速箱油中的杂质"
    ],
    answer: 1,
    explanation: "An accumulator is a spring-loaded piston that absorbs some of the hydraulic pressure surge when a clutch or band is applied. By temporarily absorbing fluid, it slows the rate of pressure buildup, allowing the clutch or band to engage progressively rather than abruptly, resulting in a smoother shift feel.",
    explanationChinese: "蓄压器是一个弹簧加载的活塞，在离合器或制动带接合时吸收部分液压压力冲击。通过暂时吸收油液，它减慢了压力建立的速率，允许离合器或制动带逐渐接合而非突然接合，从而产生更平顺的换挡感觉。",
    diagram: "",
    terms: ["accumulator", "clutch_pack", "band"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "Transmission Accumulators Explained"
  },
  {
    id: 118,
    q: "What does the parking pawl do in an automatic transmission?",
    qChinese: "自动变速箱中驻车棘爪的作用是什么？",
    options: [
      "A) It applies the service brakes when the vehicle is in Park",
      "B) It mechanically locks the output shaft by engaging a toothed parking gear",
      "C) It engages the torque converter clutch at idle",
      "D) It controls line pressure in Park"
    ],
    optionsChinese: [
      "A) 当车辆在驻车挡时施加行车制动器",
      "B) 通过与带齿的驻车齿轮啮合来机械锁定输出轴",
      "C) 在怠速时接合液力变矩器离合器",
      "D) 在驻车挡控制主油压"
    ],
    answer: 1,
    explanation: "The parking pawl is a small metal latch that swings into engagement with a toothed parking gear on the output shaft when the driver selects Park. This mechanically prevents the output shaft from rotating, holding the vehicle stationary. It is not a substitute for the parking brake on hills.",
    explanationChinese: "驻车棘爪是一个小金属锁扣，当驾驶员选择驻车挡时，它摆入与输出轴上带齿的驻车齿轮啮合。这机械地防止输出轴旋转，使车辆静止不动。它不能替代在坡道上使用的驻车制动器。",
    diagram: "",
    terms: ["parking_pawl"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "How the Parking Pawl Works"
  },
  {
    id: 119,
    q: "What is a flexplate, and what is its purpose?",
    qChinese: "挠性板是什么，它的用途是什么？",
    options: [
      "A) A rigid disc that replaces the clutch in a manual transmission",
      "B) A thin, flexible metal plate that connects the engine crankshaft to the torque converter",
      "C) A rubber mount that supports the transmission",
      "D) A spring plate inside the valve body"
    ],
    optionsChinese: [
      "A) 替代手动变速箱离合器的刚性圆盘",
      "B) 连接发动机曲轴和液力变矩器的薄而柔韧的金属板",
      "C) 支撑变速箱的橡胶支架",
      "D) 阀体内部的弹簧板"
    ],
    answer: 1,
    explanation: "A flexplate is a thin stamped-steel plate bolted to the engine crankshaft on one side and to the torque converter on the other. Unlike a flywheel used with manual transmissions, the flexplate is flexible to absorb slight misalignment. It also has a ring gear for the starter motor to engage.",
    explanationChinese: "挠性板是一块薄冲压钢板，一侧用螺栓固定在发动机曲轴上，另一侧固定在液力变矩器上。与手动变速箱使用的飞轮不同，挠性板是柔性的，可吸收轻微的不对中。它还有一个齿圈供起动机啮合。",
    diagram: "",
    terms: ["flexplate", "torque_converter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=z1ZlC7OAiNk",
    youtubeTitle: "Flexplate vs Flywheel Explained"
  },
  {
    id: 120,
    q: "Technician A says the input speed sensor measures the rotational speed of the turbine shaft. Technician B says the output speed sensor measures the rotational speed of the transmission output shaft. Who is correct?",
    qChinese: "技师A说输入速度传感器测量涡轮轴的旋转速度。技师B说输出速度传感器测量变速箱输出轴的旋转速度。谁是正确的？",
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
    explanation: "Both technicians are correct. The input (turbine) speed sensor monitors the speed of the torque converter turbine, which equals input shaft speed. The output speed sensor monitors the output shaft speed, which corresponds to vehicle speed. The TCM compares both signals to calculate actual gear ratios and shift quality.",
    explanationChinese: "两位技师都是正确的。输入（涡轮）速度传感器监测液力变矩器涡轮的速度，即输入轴转速。输出速度传感器监测输出轴转速，对应车速。TCM比较两个信号以计算实际齿轮比和换挡质量。",
    diagram: "",
    terms: ["speed_sensor", "torque_converter", "tcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=hE-bFcLHbGc",
    youtubeTitle: "Transmission Speed Sensor Testing"
  },
  {
    id: 121,
    q: "A vehicle in limp mode (failsafe) is stuck in one gear and the MIL is illuminated. What is the most likely reason the TCM has entered this mode?",
    qChinese: "一辆处于跛行模式（故障保护）的车辆卡在一个挡位且故障指示灯亮起。TCM进入此模式最可能的原因是什么？",
    options: [
      "A) The transmission fluid is slightly low",
      "B) A critical sensor or solenoid circuit failure has been detected",
      "C) The vehicle needs a routine oil change",
      "D) The battery voltage is slightly above normal"
    ],
    optionsChinese: [
      "A) 变速箱油略微偏低",
      "B) 检测到关键传感器或电磁阀电路故障",
      "C) 车辆需要常规换油",
      "D) 电池电压略高于正常值"
    ],
    answer: 1,
    explanation: "Limp mode or failsafe mode is triggered when the TCM detects a critical fault such as a failed speed sensor, shorted solenoid circuit, or major electrical problem. The transmission defaults to a single gear (usually second or third) to allow the driver to reach a repair facility without causing further damage.",
    explanationChinese: "当TCM检测到关键故障，如速度传感器失效、电磁阀电路短路或重大电气问题时，会触发跛行模式或故障保护模式。变速箱默认为单一挡位（通常是二挡或三挡），以允许驾驶员到达维修站而不造成进一步损坏。",
    diagram: "",
    terms: ["tcm", "shift_solenoid", "speed_sensor", "dtc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "Transmission Limp Mode Explained"
  },
  {
    id: 122,
    q: "What type of fluid is typically required for a CVT transmission?",
    qChinese: "CVT变速箱通常需要什么类型的油液？",
    options: [
      "A) Standard Dexron III ATF",
      "B) CVT-specific fluid designed for belt and pulley operation",
      "C) Manual transmission gear oil (75W-90)",
      "D) Engine oil (5W-30)"
    ],
    optionsChinese: [
      "A) 标准Dexron III ATF",
      "B) 专为皮带和滑轮操作设计的CVT专用油液",
      "C) 手动变速箱齿轮油（75W-90）",
      "D) 发动机油（5W-30）"
    ],
    answer: 1,
    explanation: "CVT transmissions require a specially formulated CVT fluid that provides the correct friction characteristics for the belt-and-pulley system. Using conventional ATF in a CVT can cause belt slippage, premature wear, and transmission damage. Always refer to the manufacturer's specifications for the correct fluid type.",
    explanationChinese: "CVT变速箱需要专门配方的CVT油液，为皮带-滑轮系统提供正确的摩擦特性。在CVT中使用传统ATF可能导致皮带打滑、过早磨损和变速箱损坏。始终参考制造商的规格以确定正确的油液类型。",
    diagram: "",
    terms: ["cvt", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nissan_Extroid_CVT_cutaway.jpg/640px-Nissan_Extroid_CVT_cutaway.jpg",
    youtube: "https://www.youtube.com/watch?v=PEq5_b4LWNY",
    youtubeTitle: "CVT Fluid - What You Need to Know"
  },
  {
    id: 123,
    q: "Technician A says governor pressure increases with vehicle speed. Technician B says throttle pressure increases with throttle opening. Who is correct?",
    qChinese: "技师A说调速器压力随车速增加而增大。技师B说节气门压力随节气门开度增大而增大。谁是正确的？",
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
    explanation: "Both technicians are correct. In hydraulically controlled transmissions, the governor produces a speed-sensitive pressure signal that increases with vehicle speed to initiate upshifts. Throttle pressure increases with throttle opening to delay upshifts under heavy load. These two pressures work together to determine shift points.",
    explanationChinese: "两位技师都是正确的。在液压控制的变速箱中，调速器产生随车速增加而增大的速度敏感压力信号以启动升挡。节气门压力随节气门开度增大而增大，以在重负载下延迟升挡。这两个压力共同决定换挡点。",
    diagram: "",
    terms: ["valve_body", "line_pressure", "gear_ratio"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "Governor and Throttle Pressure Explained"
  },
  {
    id: 124,
    q: "What is the consequence of using the wrong type of ATF in a transmission?",
    qChinese: "在变速箱中使用错误类型的ATF会有什么后果？",
    options: [
      "A) No consequence; all ATF types are interchangeable",
      "B) Potential clutch slippage, harsh shifting, seal damage, or premature transmission failure",
      "C) Only a minor color difference in the fluid",
      "D) Improved shift quality in all conditions"
    ],
    optionsChinese: [
      "A) 没有后果；所有ATF类型可互换",
      "B) 可能导致离合器打滑、换挡生硬、密封件损坏或变速箱过早故障",
      "C) 仅油液颜色略有不同",
      "D) 在所有条件下改善换挡质量"
    ],
    answer: 1,
    explanation: "Different transmissions require specific ATF formulations with particular friction modifiers, viscosity, and additive packages. Using the wrong fluid can cause clutch slippage from incorrect friction characteristics, harsh or delayed shifts, swelling or deterioration of seals, and ultimately premature transmission failure.",
    explanationChinese: "不同的变速箱需要具有特定摩擦改性剂、粘度和添加剂包的特定ATF配方。使用错误的油液可能导致因摩擦特性不正确而离合器打滑、换挡生硬或延迟、密封件膨胀或劣化，最终导致变速箱过早故障。",
    diagram: "",
    terms: ["transmission_fluid", "clutch_pack"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Automatic Transmission Fluid Types Explained"
  },
  {
    id: 125,
    q: "A planetary gear set in an automatic transmission consists of which three main components?",
    qChinese: "自动变速箱中的行星齿轮组由哪三个主要部件组成？",
    options: [
      "A) Impeller, turbine, and stator",
      "B) Sun gear, planet carrier with pinion gears, and ring gear",
      "C) Input shaft, output shaft, and countershaft",
      "D) Servo, band, and accumulator"
    ],
    optionsChinese: [
      "A) 泵轮、涡轮和导轮",
      "B) 太阳轮、带有行星小齿轮的行星架和齿圈",
      "C) 输入轴、输出轴和中间轴",
      "D) 伺服器、制动带和蓄压器"
    ],
    answer: 1,
    explanation: "A planetary gear set consists of a central sun gear, a ring (annulus) gear surrounding it, and a planet carrier holding pinion gears that mesh with both the sun and ring gears. By holding, driving, or releasing different members, various gear ratios including forward, reverse, and overdrive are achieved.",
    explanationChinese: "行星齿轮组由中央太阳轮、围绕其的齿圈（环形齿轮）和持有与太阳轮和齿圈啮合的行星小齿轮的行星架组成。通过固定、驱动或释放不同的构件，可实现包括前进、倒挡和超速挡在内的各种齿轮比。",
    diagram: "",
    terms: ["planetary_gear_set", "gear_ratio"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Epicyclic_gear_ratios.png/640px-Epicyclic_gear_ratios.png",
    youtube: "https://www.youtube.com/watch?v=ARd-Om2VyiE",
    youtubeTitle: "How Planetary Gear Sets Work"
  },
  {
    id: 126,
    q: "During a transmission fluid change, a technician notices metal shavings on the drain plug magnet. What does this indicate?",
    qChinese: "在更换变速箱油时，技师注意到排油塞磁铁上有金属碎屑。这表明什么？",
    options: [
      "A) Normal wear during break-in of a new transmission",
      "B) Internal component wear or damage requiring further inspection",
      "C) The transmission fluid is the wrong type",
      "D) The drain plug magnet needs to be demagnetized"
    ],
    optionsChinese: [
      "A) 新变速箱磨合期间的正常磨损",
      "B) 内部部件磨损或损坏需要进一步检查",
      "C) 变速箱油类型错误",
      "D) 排油塞磁铁需要消磁"
    ],
    answer: 1,
    explanation: "Metal shavings or particles on the drain plug magnet indicate internal wear of metal components such as gears, bearings, or clutch plates. A small amount of fine particles may be normal, but larger or excessive metal debris suggests significant internal damage that requires further diagnosis and possible overhaul.",
    explanationChinese: "排油塞磁铁上的金属碎屑或颗粒表明齿轮、轴承或离合器片等金属部件的内部磨损。少量细微颗粒可能是正常的，但较大或过多的金属碎屑表明存在需要进一步诊断和可能大修的重大内部损坏。",
    diagram: "",
    terms: ["transmission_fluid", "planetary_gear_set", "clutch_pack"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Transmission Fluid Inspection Tips"
  },
  {
    id: 127,
    q: "What is torque multiplication in a torque converter, and when does it occur?",
    qChinese: "液力变矩器中的扭矩倍增是什么，它何时发生？",
    options: [
      "A) It occurs at highway speed when the TCC is locked",
      "B) It occurs at low speeds when there is a large speed difference between the impeller and turbine, and the stator redirects fluid",
      "C) It occurs only in reverse gear",
      "D) It occurs when the transmission is in neutral"
    ],
    optionsChinese: [
      "A) 在TCC锁止时的高速公路速度下发生",
      "B) 在低速时泵轮和涡轮之间存在大速度差且导轮重新导向油液时发生",
      "C) 仅在倒挡时发生",
      "D) 在变速箱处于空挡时发生"
    ],
    answer: 1,
    explanation: "Torque multiplication occurs during acceleration from a stop when there is a large speed difference between the impeller and turbine. The stator redirects fluid exiting the turbine back into the impeller in a favorable direction, adding energy to the fluid flow. This can multiply engine torque by a factor of 2:1 or more.",
    explanationChinese: "扭矩倍增发生在从停车状态加速时，此时泵轮和涡轮之间存在大的速度差。导轮将从涡轮流出的油液以有利的方向重新导回泵轮，为油液流动增加能量。这可以将发动机扭矩倍增2:1或更多。",
    diagram: "",
    terms: ["torque_converter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Torque_converter_cutaway.svg/640px-Torque_converter_cutaway.svg.png",
    youtube: "https://www.youtube.com/watch?v=z1ZlC7OAiNk",
    youtubeTitle: "Torque Converter Torque Multiplication"
  },
  {
    id: 128,
    q: "Technician A says a pressure control solenoid regulates line pressure based on TCM commands. Technician B says a pressure control solenoid is only used in the torque converter clutch circuit. Who is correct?",
    qChinese: "技师A说压力控制电磁阀根据TCM指令调节主油压。技师B说压力控制电磁阀仅用于液力变矩器离合器回路。谁是正确的？",
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
    explanation: "Technician A is correct. Pressure control solenoids are used to regulate line pressure, shift feel, and other hydraulic pressures based on TCM commands. They are not limited to the TCC circuit. The TCM varies the duty cycle of these solenoids to precisely control hydraulic pressure for optimal shift quality under all conditions.",
    explanationChinese: "技师A是正确的。压力控制电磁阀用于根据TCM指令调节主油压、换挡感觉和其他液压压力。它们不限于TCC回路。TCM改变这些电磁阀的占空比，以在所有条件下精确控制液压压力，实现最佳换挡质量。",
    diagram: "",
    terms: ["shift_solenoid", "tcm", "line_pressure", "valve_body"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=hE-bFcLHbGc",
    youtubeTitle: "Pressure Control Solenoids Explained"
  },
  {
    id: 129,
    q: "A transmission has a DTC P0741 (Torque Converter Clutch Circuit Performance or Stuck Off). What does this code indicate?",
    qChinese: "变速箱有DTC P0741（液力变矩器离合器电路性能或卡在断开位置）。此代码表明什么？",
    options: [
      "A) The TCC is engaging too early",
      "B) The TCC is not locking up as commanded, resulting in excessive slippage",
      "C) The torque converter is physically broken",
      "D) The transmission fluid is overfilled"
    ],
    optionsChinese: [
      "A) TCC接合过早",
      "B) TCC未按指令锁止，导致过度滑差",
      "C) 液力变矩器物理损坏",
      "D) 变速箱油加注过量"
    ],
    answer: 1,
    explanation: "P0741 indicates the TCM has detected excessive slippage in the torque converter clutch when it should be locked. Causes include a faulty TCC solenoid, worn converter clutch friction material, valve body issues, or wiring problems. The converter is not mechanically applying when commanded by the TCM.",
    explanationChinese: "P0741表示TCM检测到液力变矩器离合器在应该锁止时存在过度滑差。原因包括TCC电磁阀故障、变矩器离合器摩擦材料磨损、阀体问题或线路问题。变矩器未在TCM指令时机械接合。",
    diagram: "",
    terms: ["torque_converter", "shift_solenoid", "dtc", "tcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Torque_converter_cutaway.svg/640px-Torque_converter_cutaway.svg.png",
    youtube: "https://www.youtube.com/watch?v=z1ZlC7OAiNk",
    youtubeTitle: "TCC Solenoid Diagnosis"
  },
  {
    id: 130,
    q: "What is the coupling phase in a torque converter?",
    qChinese: "液力变矩器中的耦合阶段是什么？",
    options: [
      "A) When the engine is cranking but not yet running",
      "B) When the impeller and turbine reach nearly the same speed and the stator freewheels",
      "C) When the parking pawl is engaged",
      "D) When the transmission is in neutral"
    ],
    optionsChinese: [
      "A) 当发动机在起动但尚未运转时",
      "B) 当泵轮和涡轮达到几乎相同的速度且导轮自由旋转时",
      "C) 当驻车棘爪接合时",
      "D) 当变速箱处于空挡时"
    ],
    answer: 1,
    explanation: "The coupling phase occurs at cruising speeds when the turbine speed nearly equals the impeller speed. At this point, fluid returning from the turbine strikes the back of the stator vanes, causing the stator one-way clutch to unlock, allowing it to freewheel. No torque multiplication occurs during coupling phase.",
    explanationChinese: "耦合阶段发生在巡航速度下，此时涡轮速度几乎等于泵轮速度。此时从涡轮返回的油液冲击导轮叶片的背面，使导轮单向离合器解锁，允许其自由旋转。在耦合阶段不发生扭矩倍增。",
    diagram: "",
    terms: ["torque_converter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Torque_converter_cutaway.svg/640px-Torque_converter_cutaway.svg.png",
    youtube: "https://www.youtube.com/watch?v=z1ZlC7OAiNk",
    youtubeTitle: "Torque Converter Phases Explained"
  },
  {
    id: 131,
    q: "What is the purpose of the torque converter clutch (TCC)?",
    qChinese: "液力变矩器离合器（TCC）的用途是什么？",
    options: [
      "A) To multiply torque during acceleration",
      "B) To mechanically lock the impeller and turbine together to eliminate slippage and improve fuel economy",
      "C) To prevent the engine from stalling at idle",
      "D) To engage reverse gear"
    ],
    optionsChinese: [
      "A) 在加速期间倍增扭矩",
      "B) 机械地将泵轮和涡轮锁在一起以消除滑差并提高燃油经济性",
      "C) 防止发动机在怠速时熄火",
      "D) 接合倒挡"
    ],
    answer: 1,
    explanation: "The TCC mechanically locks the turbine to the impeller housing at cruising speeds, creating a direct mechanical connection between the engine and transmission. This eliminates the inherent fluid slippage in the converter, improving fuel economy and reducing heat generation in the transmission fluid.",
    explanationChinese: "TCC在巡航速度下机械地将涡轮锁定到泵轮壳体上，在发动机和变速箱之间创建直接的机械连接。这消除了变矩器中固有的液体滑差，提高了燃油经济性并减少了变速箱油中的热量产生。",
    diagram: "",
    terms: ["torque_converter", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Torque_converter_cutaway.svg/640px-Torque_converter_cutaway.svg.png",
    youtube: "https://www.youtube.com/watch?v=z1ZlC7OAiNk",
    youtubeTitle: "Torque Converter Clutch Operation"
  },
  {
    id: 132,
    q: "A transmission oil pump is driven by which component?",
    qChinese: "变速箱油泵由哪个部件驱动？",
    options: [
      "A) The output shaft",
      "B) The torque converter hub, which is connected to the engine",
      "C) An electric motor",
      "D) The governor assembly"
    ],
    optionsChinese: [
      "A) 输出轴",
      "B) 连接到发动机的液力变矩器轮毂",
      "C) 电动机",
      "D) 调速器总成"
    ],
    answer: 1,
    explanation: "The transmission oil pump is driven by the torque converter housing, which is bolted to the flexplate and turns at engine speed. This means the pump only operates when the engine is running. This is why a vehicle with an automatic transmission cannot be push-started, as the pump needs engine power to create pressure.",
    explanationChinese: "变速箱油泵由液力变矩器壳体驱动，该壳体用螺栓固定在挠性板上并以发动机转速旋转。这意味着油泵仅在发动机运转时才工作。这就是为什么配备自动变速箱的车辆不能推启动，因为油泵需要发动机动力来产生压力。",
    diagram: "",
    terms: ["torque_converter", "flexplate", "line_pressure"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "Transmission Oil Pump Operation"
  },
  {
    id: 133,
    q: "What does DTC P0720 indicate?",
    qChinese: "DTC P0720表示什么？",
    options: [
      "A) Torque converter clutch malfunction",
      "B) Output speed sensor circuit malfunction",
      "C) Shift solenoid A stuck on",
      "D) Transmission fluid temperature too high"
    ],
    optionsChinese: [
      "A) 液力变矩器离合器故障",
      "B) 输出速度传感器电路故障",
      "C) 换挡电磁阀A卡在开启位置",
      "D) 变速箱油温过高"
    ],
    answer: 1,
    explanation: "DTC P0720 indicates an output speed sensor circuit malfunction. The output speed sensor provides the TCM with vehicle speed data used to calculate gear ratios and determine shift points. A faulty output speed sensor can cause erratic shifting, no shifting, or incorrect speedometer readings.",
    explanationChinese: "DTC P0720表示输出速度传感器电路故障。输出速度传感器向TCM提供用于计算齿轮比和确定换挡点的车速数据。故障的输出速度传感器可能导致换挡不规律、不换挡或车速表读数不正确。",
    diagram: "",
    terms: ["speed_sensor", "dtc", "tcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=hE-bFcLHbGc",
    youtubeTitle: "Output Speed Sensor Diagnosis"
  },
  {
    id: 134,
    q: "When performing a transmission pressure test, the technician connects a pressure gauge to which port?",
    qChinese: "进行变速箱压力测试时，技师将压力表连接到哪个端口？",
    options: [
      "A) The transmission cooler return line",
      "B) The designated pressure test port on the transmission case",
      "C) The dipstick tube",
      "D) The torque converter drain plug"
    ],
    optionsChinese: [
      "A) 变速箱冷却器回油管路",
      "B) 变速箱壳体上指定的压力测试端口",
      "C) 油尺管",
      "D) 液力变矩器排油塞"
    ],
    answer: 1,
    explanation: "Transmission cases have designated pressure test ports with threaded fittings for connecting a pressure gauge. These ports tap into specific hydraulic circuits such as line pressure, servo apply, and clutch apply circuits. The technician compares measured pressures against manufacturer specifications in each gear range.",
    explanationChinese: "变速箱壳体上有带螺纹接头的指定压力测试端口，用于连接压力表。这些端口接入特定的液压回路，如主油压、伺服器接合和离合器接合回路。技师在每个挡位范围内将测量的压力与制造商规格进行比较。",
    diagram: "",
    terms: ["line_pressure", "valve_body", "servo"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "Transmission Pressure Testing"
  },
  {
    id: 135,
    q: "A band adjustment is too tight. What symptom will this cause?",
    qChinese: "制动带调整过紧。这会导致什么症状？",
    options: [
      "A) Slipping in the gear that uses that band",
      "B) Harsh or early engagement of the gear controlled by that band and possible drag in other gears",
      "C) The transmission will not go into Park",
      "D) Improved fuel economy"
    ],
    optionsChinese: [
      "A) 在使用该制动带的挡位打滑",
      "B) 该制动带控制的挡位接合生硬或过早，其他挡位可能有拖滞",
      "C) 变速箱无法进入驻车挡",
      "D) 提高燃油经济性"
    ],
    answer: 1,
    explanation: "A band adjusted too tight may partially drag on the drum even when released, causing binding or delayed disengagement in other gears. When applied, it engages too abruptly, causing harsh shifts. The drum may overheat from friction caused by the dragging band. A band too loose will cause slipping.",
    explanationChinese: "调整过紧的制动带即使在释放时也可能部分拖在鼓上，导致其他挡位卡滞或延迟脱离。接合时，它会过于突然地接合，导致换挡生硬。鼓可能因拖滞制动带造成的摩擦而过热。制动带过松则会导致打滑。",
    diagram: "",
    terms: ["band", "servo", "valve_body"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "Transmission Band Adjustment"
  },
  {
    id: 136,
    q: "Technician A says a cracked flexplate can cause a knocking noise at idle that changes with engine load. Technician B says a cracked flexplate will have no noticeable symptoms. Who is correct?",
    qChinese: "技师A说破裂的挠性板会导致怠速时随发动机负载变化的敲击噪声。技师B说破裂的挠性板没有明显的症状。谁是正确的？",
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
    explanation: "Technician A is correct. A cracked flexplate often produces a rhythmic clicking or knocking noise, most noticeable at idle, that may change in intensity when the transmission is shifted into gear (adding load). The crack flexes open and closed as the plate rotates under engine power. This noise is often mistaken for an internal engine knock.",
    explanationChinese: "技师A是正确的。破裂的挠性板通常产生有节奏的咔嗒或敲击噪声，在怠速时最明显，当变速箱挂入挡位（增加负载）时强度可能变化。裂缝在挠性板在发动机动力下旋转时张开和闭合。这种噪声常被误认为是发动机内部的敲击。",
    diagram: "",
    terms: ["flexplate", "torque_converter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=z1ZlC7OAiNk",
    youtubeTitle: "Cracked Flexplate Symptoms"
  },
  {
    id: 137,
    q: "What is an electronic pressure control (EPC) solenoid?",
    qChinese: "电子压力控制（EPC）电磁阀是什么？",
    options: [
      "A) A solenoid that controls the starter motor circuit",
      "B) A variable-force solenoid that regulates transmission line pressure based on TCM commands",
      "C) A solenoid that controls the air conditioning compressor",
      "D) A solenoid that opens and closes the transmission dipstick tube"
    ],
    optionsChinese: [
      "A) 控制起动机电路的电磁阀",
      "B) 根据TCM指令调节变速箱主油压的可变力电磁阀",
      "C) 控制空调压缩机的电磁阀",
      "D) 打开和关闭变速箱油尺管的电磁阀"
    ],
    answer: 1,
    explanation: "The EPC solenoid is a variable-force solenoid that regulates mainline pressure in the transmission. The TCM adjusts the current supplied to the EPC solenoid to vary line pressure based on engine torque, gear selection, and driving conditions. This provides optimal clutch and band apply pressure for smooth, firm shifts.",
    explanationChinese: "EPC电磁阀是一种可变力电磁阀，用于调节变速箱中的主管路压力。TCM调整供给EPC电磁阀的电流，以根据发动机扭矩、挡位选择和驾驶条件来改变主油压。这为平顺、稳健的换挡提供最佳的离合器和制动带接合压力。",
    diagram: "",
    terms: ["shift_solenoid", "line_pressure", "tcm", "valve_body"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=hE-bFcLHbGc",
    youtubeTitle: "EPC Solenoid Operation and Testing"
  },
  {
    id: 138,
    q: "A vehicle with an automatic transmission has no movement in any gear but the engine revs freely. What is the most likely cause?",
    qChinese: "一辆配备自动变速箱的车辆在任何挡位都没有移动，但发动机自由升速。最可能的原因是什么？",
    options: [
      "A) A stuck throttle cable",
      "B) Very low or no transmission fluid, or a failed oil pump",
      "C) A faulty ignition switch",
      "D) Worn engine mounts"
    ],
    optionsChinese: [
      "A) 节气门拉索卡滞",
      "B) 变速箱油非常低或没有，或油泵故障",
      "C) 点火开关故障",
      "D) 发动机支架磨损"
    ],
    answer: 1,
    explanation: "No movement in any gear with a freely revving engine indicates the transmission has no hydraulic pressure to apply any clutch packs or bands. The most common causes are extremely low or no fluid level, or a completely failed transmission oil pump. Without pressure, no holding devices can engage.",
    explanationChinese: "在任何挡位都没有移动且发动机自由升速表明变速箱没有液压压力来接合任何离合器片组或制动带。最常见的原因是油液位极低或没有油液，或变速箱油泵完全故障。没有压力，任何保持装置都无法接合。",
    diagram: "",
    terms: ["transmission_fluid", "line_pressure", "clutch_pack"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "Transmission No Movement Diagnosis"
  },
  {
    id: 139,
    q: "What should a technician check if a transmission makes a buzzing or whining noise only in Park and Neutral?",
    qChinese: "如果变速箱仅在驻车挡和空挡时发出嗡嗡声或啸叫声，技师应检查什么？",
    options: [
      "A) The planetary gear set",
      "B) The torque converter and transmission oil pump",
      "C) The output shaft bearing",
      "D) The drive shaft U-joints"
    ],
    optionsChinese: [
      "A) 行星齿轮组",
      "B) 液力变矩器和变速箱油泵",
      "C) 输出轴轴承",
      "D) 传动轴万向节"
    ],
    answer: 1,
    explanation: "Noises present only in Park and Neutral, where no gear train is loaded, point to components that are always spinning with the engine: the torque converter and the oil pump. A worn pump, damaged converter, or low fluid level causing cavitation in the pump can produce buzzing or whining sounds in these ranges.",
    explanationChinese: "仅在驻车挡和空挡（齿轮系无负载）时出现的噪声指向始终与发动机一起旋转的部件：液力变矩器和油泵。磨损的油泵、损坏的变矩器或导致油泵气蚀的低油液位都可能在这些位置产生嗡嗡声或啸叫声。",
    diagram: "",
    terms: ["torque_converter", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Torque_converter_cutaway.svg/640px-Torque_converter_cutaway.svg.png",
    youtube: "https://www.youtube.com/watch?v=z1ZlC7OAiNk",
    youtubeTitle: "Transmission Noise Diagnosis"
  },
  {
    id: 140,
    q: "Technician A says a clogged transmission filter can cause low line pressure. Technician B says a clogged filter can cause the transmission to overheat. Who is correct?",
    qChinese: "技师A说堵塞的变速箱滤清器会导致主油压偏低。技师B说堵塞的滤清器会导致变速箱过热。谁是正确的？",
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
    explanation: "Both technicians are correct. A clogged filter restricts fluid flow to the oil pump, reducing line pressure and causing slipping clutches. Reduced fluid flow also means less fluid passes through the cooler, leading to overheating. Additionally, the pump works harder trying to draw fluid through the restriction, generating extra heat.",
    explanationChinese: "两位技师都是正确的。堵塞的滤清器限制了流向油泵的油液流量，降低了主油压并导致离合器打滑。减少的油液流量也意味着流经冷却器的油液减少，导致过热。此外，油泵努力通过堵塞抽取油液时工作更加费力，产生额外热量。",
    diagram: "",
    terms: ["transmission_fluid", "line_pressure", "transmission_cooler"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Transmission Filter Service"
  },
  {
    id: 141,
    q: "In a Ravigneaux planetary gear set, how many sun gears are used?",
    qChinese: "在拉维娜式行星齿轮组中，使用了多少个太阳轮？",
    options: [
      "A) One",
      "B) Two",
      "C) Three",
      "D) None"
    ],
    optionsChinese: [
      "A) 一个",
      "B) 两个",
      "C) 三个",
      "D) 没有"
    ],
    answer: 1,
    explanation: "A Ravigneaux gear set uses two sun gears of different sizes, a single ring gear, and two sets of planet pinions (short and long) sharing one common planet carrier. This compact design achieves multiple gear ratios in a smaller package than two separate Simpson-type gear sets and is popular in modern transmissions.",
    explanationChinese: "拉维娜式齿轮组使用两个不同大小的太阳轮、一个齿圈和两组共用一个行星架的行星小齿轮（短齿轮和长齿轮）。这种紧凑设计在比两个独立辛普森式齿轮组更小的空间内实现了多个齿轮比，在现代变速箱中很受欢迎。",
    diagram: "",
    terms: ["planetary_gear_set", "gear_ratio"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Epicyclic_gear_ratios.png/640px-Epicyclic_gear_ratios.png",
    youtube: "https://www.youtube.com/watch?v=ARd-Om2VyiE",
    youtubeTitle: "Ravigneaux Gear Set Explained"
  },
  {
    id: 142,
    q: "What is the function of check balls in an automatic transmission valve body?",
    qChinese: "自动变速箱阀体中单向球阀的功能是什么？",
    options: [
      "A) To permanently block fluid passages",
      "B) To act as one-way valves that allow fluid flow in one direction and block it in the other",
      "C) To filter metal particles from the fluid",
      "D) To adjust band tension"
    ],
    optionsChinese: [
      "A) 永久阻塞油液通道",
      "B) 作为单向阀，允许油液在一个方向流动并在另一个方向阻止流动",
      "C) 过滤油液中的金属颗粒",
      "D) 调整制动带张力"
    ],
    answer: 1,
    explanation: "Check balls in the valve body act as one-way valves. They seat against a specific passage opening under fluid pressure to block flow in one direction but unseat and allow flow in the opposite direction. They control fluid routing during shifts and prevent pressure bleed-off in certain circuits.",
    explanationChinese: "阀体中的单向球阀起单向阀的作用。它们在油液压力下抵住特定的通道开口以阻止一个方向的流动，但在相反方向离开阀座并允许流动。它们在换挡时控制油液路径并防止某些回路中的压力泄漏。",
    diagram: "",
    terms: ["valve_body"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "Valve Body Check Balls and Their Function"
  },
  {
    id: 143,
    q: "A vehicle equipped with a CVT transmission makes a loud droning or humming noise during acceleration. What is the most likely cause?",
    qChinese: "一辆配备CVT变速箱的车辆在加速期间发出响亮的嗡鸣声或嗡嗡声。最可能的原因是什么？",
    options: [
      "A) Normal CVT operation",
      "B) A worn or slipping CVT belt or chain",
      "C) A faulty radio speaker",
      "D) Low engine oil level"
    ],
    optionsChinese: [
      "A) CVT正常运行",
      "B) CVT皮带或链条磨损或打滑",
      "C) 收音机扬声器故障",
      "D) 发动机油液位低"
    ],
    answer: 1,
    explanation: "A loud droning or humming noise during acceleration in a CVT vehicle often indicates a worn or slipping belt or chain. CVT belts and chains operate under high clamping pressure between the pulleys. As they wear, slippage increases, producing noise and reducing power transfer efficiency.",
    explanationChinese: "CVT车辆在加速时发出响亮的嗡鸣声或嗡嗡声通常表明皮带或链条磨损或打滑。CVT皮带和链条在滑轮之间高夹紧压力下运行。随着磨损，滑移增加，产生噪声并降低动力传递效率。",
    diagram: "",
    terms: ["cvt", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nissan_Extroid_CVT_cutaway.jpg/640px-Nissan_Extroid_CVT_cutaway.jpg",
    youtube: "https://www.youtube.com/watch?v=PEq5_b4LWNY",
    youtubeTitle: "CVT Noise Diagnosis"
  },
  {
    id: 144,
    q: "Technician A says the transmission fluid temperature sensor is used by the TCM to adjust shift strategy. Technician B says the TCM may activate the TCC earlier when fluid temperature is high. Who is correct?",
    qChinese: "技师A说变速箱油温传感器由TCM用于调整换挡策略。技师B说当油温高时TCM可能更早激活TCC。谁是正确的？",
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
    explanation: "Both technicians are correct. The TCM uses transmission fluid temperature to modify shift points, line pressure, and TCC operation. When fluid is hot, the TCM may engage the TCC earlier to reduce slippage and heat generation. When fluid is cold, shifts may be delayed until proper operating temperature is reached.",
    explanationChinese: "两位技师都是正确的。TCM使用变速箱油温来修改换挡点、主油压和TCC操作。当油液过热时，TCM可能更早接合TCC以减少滑差和热量产生。当油液冷时，换挡可能会延迟直到达到适当的工作温度。",
    diagram: "",
    terms: ["tcm", "torque_converter", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "Transmission Temperature Sensor Function"
  },
  {
    id: 145,
    q: "What is adaptive learning in a modern automatic transmission?",
    qChinese: "现代自动变速箱中的自适应学习是什么？",
    options: [
      "A) A feature that allows the driver to manually select gears",
      "B) The TCM's ability to adjust shift parameters over time to compensate for clutch wear and maintain shift quality",
      "C) A training mode for new drivers",
      "D) A method of diagnosing transmission problems"
    ],
    optionsChinese: [
      "A) 允许驾驶员手动选择挡位的功能",
      "B) TCM随时间调整换挡参数以补偿离合器磨损并保持换挡质量的能力",
      "C) 新驾驶员的训练模式",
      "D) 诊断变速箱问题的方法"
    ],
    answer: 1,
    explanation: "Adaptive learning allows the TCM to continuously adjust shift timing, pressure, and TCC apply parameters based on real-time feedback from speed sensors. As clutch friction material wears, the TCM increases apply pressure slightly to maintain consistent shift quality. These learned values are stored in TCM memory.",
    explanationChinese: "自适应学习允许TCM根据速度传感器的实时反馈持续调整换挡时机、压力和TCC接合参数。随着离合器摩擦材料磨损，TCM略微增加接合压力以保持一致的换挡质量。这些学习值存储在TCM存储器中。",
    diagram: "",
    terms: ["tcm", "shift_solenoid", "clutch_pack"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "Transmission Adaptive Learning Explained"
  },
  {
    id: 146,
    q: "What is the purpose of the manual valve in the valve body?",
    qChinese: "阀体中手动阀的用途是什么？",
    options: [
      "A) To regulate line pressure automatically",
      "B) To direct line pressure to the appropriate hydraulic circuits based on the gear selector position chosen by the driver",
      "C) To engage the torque converter clutch",
      "D) To control transmission fluid temperature"
    ],
    optionsChinese: [
      "A) 自动调节主油压",
      "B) 根据驾驶员选择的挡位位置将主油压引导到适当的液压回路",
      "C) 接合液力变矩器离合器",
      "D) 控制变速箱油温度"
    ],
    answer: 1,
    explanation: "The manual valve is mechanically linked to the gear selector (shift lever) through a cable or linkage. When the driver moves the selector to Park, Reverse, Neutral, Drive, or Low, the manual valve moves to corresponding positions, directing line pressure to the correct hydraulic circuits for that selected range.",
    explanationChinese: "手动阀通过钢缆或连杆机构与挡位选择器（换挡杆）机械连接。当驾驶员将选择器移到驻车挡、倒挡、空挡、前进挡或低挡时，手动阀移动到相应位置，将主油压引导到该选择范围的正确液压回路。",
    diagram: "",
    terms: ["valve_body", "line_pressure"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "Manual Valve and Shift Linkage"
  },
  {
    id: 147,
    q: "What is the difference between a transmission and a transaxle?",
    qChinese: "变速箱和变速驱动桥有什么区别？",
    options: [
      "A) They are exactly the same component",
      "B) A transaxle combines the transmission and differential into one unit, typically used in front-wheel-drive vehicles",
      "C) A transaxle is used only in rear-wheel-drive vehicles",
      "D) A transmission is smaller than a transaxle in all cases"
    ],
    optionsChinese: [
      "A) 它们是完全相同的部件",
      "B) 变速驱动桥将变速箱和差速器组合成一个单元，通常用于前轮驱动车辆",
      "C) 变速驱动桥仅用于后轮驱动车辆",
      "D) 变速箱在所有情况下都比变速驱动桥小"
    ],
    answer: 1,
    explanation: "A transaxle is a single unit that combines the transmission, final drive gears, and differential into one housing. It is typically used in front-wheel-drive vehicles and some rear-engine vehicles. A separate transmission, used in rear-wheel-drive vehicles, sends power through a driveshaft to a separate rear differential.",
    explanationChinese: "变速驱动桥是将变速箱、最终传动齿轮和差速器组合在一个壳体中的单一单元。它通常用于前轮驱动车辆和一些后置发动机车辆。后轮驱动车辆使用的独立变速箱通过传动轴将动力传递到独立的后差速器。",
    diagram: "",
    terms: ["planetary_gear_set", "gear_ratio"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=ARd-Om2VyiE",
    youtubeTitle: "Transmission vs Transaxle Explained"
  },
  {
    id: 148,
    q: "A vehicle shifts late (at higher RPMs than normal) under light throttle. What is the most likely cause?",
    qChinese: "一辆车在轻油门下换挡迟（转速比正常高）。最可能的原因是什么？",
    options: [
      "A) A faulty transmission cooler",
      "B) A misadjusted or faulty throttle position sensor providing a higher-than-actual throttle signal",
      "C) An overcharged battery",
      "D) Worn brake pads"
    ],
    optionsChinese: [
      "A) 变速箱冷却器故障",
      "B) 油门位置传感器失调或故障，提供高于实际的节气门信号",
      "C) 电池过度充电",
      "D) 制动片磨损"
    ],
    answer: 1,
    explanation: "The TCM uses throttle position sensor data to determine engine load and set shift points. If the TPS sends a signal indicating higher throttle than actual, the TCM interprets this as a demand for more power and delays upshifts. This results in late, high-RPM shifts even under light throttle conditions.",
    explanationChinese: "TCM使用节气门位置传感器数据来确定发动机负载并设定换挡点。如果TPS发送高于实际节气门的信号，TCM将其解释为对更多动力的需求并延迟升挡。这导致即使在轻油门条件下也出现迟到的高转速换挡。",
    diagram: "",
    terms: ["tcm", "shift_solenoid", "valve_body"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "Throttle Position Sensor and Shifting"
  },
  {
    id: 149,
    q: "What precaution should be taken when towing a vehicle with an automatic transmission?",
    qChinese: "拖曳配备自动变速箱的车辆时应采取什么预防措施？",
    options: [
      "A) Always tow with the drive wheels on the ground at any speed",
      "B) Follow manufacturer guidelines; many require the drive wheels to be off the ground or a maximum tow speed and distance",
      "C) Disconnect the battery before towing",
      "D) Fill the transmission to double the normal fluid level"
    ],
    optionsChinese: [
      "A) 始终将驱动轮着地以任何速度拖曳",
      "B) 遵循制造商指南；许多要求驱动轮离地或限制最大拖曳速度和距离",
      "C) 拖曳前断开电池",
      "D) 将变速箱油加注到正常液位的两倍"
    ],
    answer: 1,
    explanation: "Towing an automatic transmission vehicle with the drive wheels on the ground can damage the transmission because the oil pump only operates when the engine is running. Without pump pressure, internal components lack lubrication. Manufacturer guidelines specify maximum tow speeds, distances, or require the drive wheels to be raised.",
    explanationChinese: "将驱动轮着地拖曳自动变速箱车辆可能损坏变速箱，因为油泵仅在发动机运转时才工作。没有油泵压力，内部部件缺乏润滑。制造商指南规定了最大拖曳速度、距离，或要求将驱动轮抬起。",
    diagram: "",
    terms: ["transmission_fluid", "torque_converter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "Towing Automatic Transmission Vehicles"
  },
  {
    id: 150,
    q: "Technician A says the transmission range sensor tells the TCM which gear the driver has selected. Technician B says a faulty range sensor can prevent the engine from starting. Who is correct?",
    qChinese: "技师A说变速箱档位传感器告诉TCM驾驶员选择了哪个挡位。技师B说故障的档位传感器可能导致发动机无法启动。谁是正确的？",
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
    explanation: "Both technicians are correct. The transmission range sensor (also called neutral safety switch) informs the TCM/PCM of the gear selector position. It also serves as a safety device that allows the engine to start only in Park or Neutral. A faulty sensor may prevent starting or cause incorrect gear indication.",
    explanationChinese: "两位技师都是正确的。变速箱档位传感器（也称为空挡安全开关）向TCM/PCM报告挡位选择器的位置。它还作为安全装置，仅允许在驻车挡或空挡时启动发动机。故障的传感器可能阻止启动或导致挡位显示不正确。",
    diagram: "",
    terms: ["tcm", "shift_solenoid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "Transmission Range Sensor Testing"
  },
  {
    id: 151,
    q: "What causes a delayed or soft reverse engagement in an automatic transmission?",
    qChinese: "什么导致自动变速箱倒挡接合延迟或无力？",
    options: [
      "A) A worn overdrive band",
      "B) Leaking reverse clutch seals or a worn reverse band",
      "C) A faulty speedometer",
      "D) An overcharged air conditioning system"
    ],
    optionsChinese: [
      "A) 磨损的超速挡制动带",
      "B) 倒挡离合器密封泄漏或倒挡制动带磨损",
      "C) 车速表故障",
      "D) 空调系统过度充注"
    ],
    answer: 1,
    explanation: "Delayed or soft reverse engagement typically results from worn seals on the reverse clutch piston or a worn reverse band that cannot hold firmly. These conditions allow fluid to leak past the piston or the band to slip, reducing the clamping force needed for firm engagement in reverse gear.",
    explanationChinese: "倒挡接合延迟或无力通常是由倒挡离合器活塞密封磨损或无法牢固保持的倒挡制动带磨损造成的。这些情况允许油液从活塞旁泄漏或制动带打滑，减少了在倒挡中牢固接合所需的夹紧力。",
    diagram: "",
    terms: ["clutch_pack", "band", "servo"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "Reverse Engagement Problems"
  },
  {
    id: 152,
    q: "What is the purpose of the transmission fluid dipstick markings (HOT and COLD)?",
    qChinese: "变速箱油尺标记（HOT和COLD）的用途是什么？",
    options: [
      "A) To indicate the color of the fluid",
      "B) To provide different fluid level reference points depending on fluid temperature",
      "C) To show the age of the fluid",
      "D) To indicate which type of fluid to use"
    ],
    optionsChinese: [
      "A) 指示油液颜色",
      "B) 根据油液温度提供不同的油液液位参考点",
      "C) 显示油液使用时间",
      "D) 指示使用哪种类型的油液"
    ],
    answer: 1,
    explanation: "ATF expands as it heats up. The HOT marking on the dipstick shows the correct level when the fluid is at normal operating temperature (about 170-200 degrees F). The COLD marking shows the correct level when the fluid is at ambient temperature. Checking at the wrong temperature will give an inaccurate reading.",
    explanationChinese: "ATF随温度升高而膨胀。油尺上的HOT标记显示油液在正常工作温度（约170-200华氏度）时的正确液位。COLD标记显示油液在环境温度时的正确液位。在错误温度下检查会得到不准确的读数。",
    diagram: "",
    terms: ["transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "How to Check Transmission Fluid Level"
  },
  {
    id: 153,
    q: "A vehicle with an automatic transmission surges or bucks at steady highway speed. The issue stops when the overdrive is turned off. What is the most likely cause?",
    qChinese: "一辆自动变速箱车辆在稳定高速公路速度下出现冲击或颠簸。关闭超速挡后问题消失。最可能的原因是什么？",
    options: [
      "A) A faulty engine mount",
      "B) TCC cycling on and off due to a fault in the TCC solenoid or circuit",
      "C) Low tire pressure",
      "D) A worn exhaust manifold gasket"
    ],
    optionsChinese: [
      "A) 发动机支架故障",
      "B) TCC因TCC电磁阀或电路故障而反复接合和断开",
      "C) 轮胎气压低",
      "D) 排气歧管垫片磨损"
    ],
    answer: 1,
    explanation: "Surging at steady highway speed that disappears when overdrive is canceled is a classic sign of the TCC cycling on and off. The TCC engages, then slips or disengages, then re-engages repeatedly. Causes include a faulty TCC solenoid, worn converter clutch material, or intermittent wiring problems.",
    explanationChinese: "在稳定高速公路速度下的冲击，当取消超速挡后消失，是TCC反复接合和断开的典型标志。TCC接合后又滑动或断开，然后反复重新接合。原因包括TCC电磁阀故障、变矩器离合器材料磨损或间歇性线路问题。",
    diagram: "",
    terms: ["torque_converter", "shift_solenoid", "overdrive"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Torque_converter_cutaway.svg/640px-Torque_converter_cutaway.svg.png",
    youtube: "https://www.youtube.com/watch?v=z1ZlC7OAiNk",
    youtubeTitle: "TCC Cycling Diagnosis"
  },
  {
    id: 154,
    q: "When removing a transmission from a vehicle, what must be done with the torque converter?",
    qChinese: "从车辆上拆卸变速箱时，液力变矩器必须怎么处理？",
    options: [
      "A) Leave it bolted to the flexplate",
      "B) Ensure it is separated from the flexplate and slides back onto the transmission input shaft so it comes out with the transmission",
      "C) Remove it before pulling the transmission",
      "D) Drain all fluid from it before removal"
    ],
    optionsChinese: [
      "A) 将其用螺栓固定在挠性板上",
      "B) 确保它与挠性板分离并滑回变速箱输入轴上，以便与变速箱一起取出",
      "C) 在拉出变速箱之前将其拆除",
      "D) 拆卸前排尽其中所有油液"
    ],
    answer: 1,
    explanation: "During transmission removal, the torque converter bolts must be removed from the flexplate first. The converter should slide back onto the transmission input shaft and pump drive hub so it stays with the transmission as it is lowered. If the converter stays on the flexplate, it can be damaged or fall.",
    explanationChinese: "在拆卸变速箱时，必须先从挠性板上拆除液力变矩器螺栓。变矩器应滑回变速箱输入轴和油泵驱动毂上，以便在降下变速箱时与变速箱一起。如果变矩器留在挠性板上，可能会损坏或掉落。",
    diagram: "",
    terms: ["torque_converter", "flexplate"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Torque_converter_cutaway.svg/640px-Torque_converter_cutaway.svg.png",
    youtube: "https://www.youtube.com/watch?v=z1ZlC7OAiNk",
    youtubeTitle: "Transmission Removal Procedure"
  },
  {
    id: 155,
    q: "What does the abbreviation ATF stand for?",
    qChinese: "ATF的缩写代表什么？",
    options: [
      "A) Automatic Transfer Function",
      "B) Automatic Transmission Fluid",
      "C) Auxiliary Torque Factor",
      "D) Advanced Throttle Feedback"
    ],
    optionsChinese: [
      "A) 自动传递功能",
      "B) 自动变速箱油",
      "C) 辅助扭矩系数",
      "D) 高级节气门反馈"
    ],
    answer: 1,
    explanation: "ATF stands for Automatic Transmission Fluid. It is a specially formulated hydraulic fluid used in automatic transmissions and transaxles. ATF serves as the hydraulic medium for shifting, lubricates internal components, cools the transmission, and provides the correct friction characteristics for clutch operation.",
    explanationChinese: "ATF代表自动变速箱油。它是用于自动变速箱和变速驱动桥的特殊配方液压油。ATF作为换挡的液压介质，润滑内部部件，冷却变速箱，并为离合器操作提供正确的摩擦特性。",
    diagram: "",
    terms: ["transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "What is ATF - Automatic Transmission Fluid"
  },
  {
    id: 156,
    q: "Technician A says a worn one-way clutch in the torque converter stator will cause poor acceleration from a stop. Technician B says it will cause the transmission to overheat at highway speeds. Who is correct?",
    qChinese: "技师A说液力变矩器导轮中磨损的单向离合器会导致从停车状态加速不良。技师B说它会导致变速箱在高速公路速度下过热。谁是正确的？",
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
    explanation: "Technician A is correct. If the stator one-way clutch slips, the stator cannot redirect fluid to multiply torque, resulting in poor acceleration. At highway speed, the stator should freewheel anyway, so a slipping one-way clutch would not cause overheating at cruise. A locked stator would cause overheating at highway speed.",
    explanationChinese: "技师A是正确的。如果导轮单向离合器打滑，导轮无法重新导向油液以倍增扭矩，导致加速不良。在高速公路速度下，导轮本身应自由旋转，因此打滑的单向离合器不会在巡航时导致过热。锁死的导轮会在高速公路速度下导致过热。",
    diagram: "",
    terms: ["torque_converter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Torque_converter_cutaway.svg/640px-Torque_converter_cutaway.svg.png",
    youtube: "https://www.youtube.com/watch?v=z1ZlC7OAiNk",
    youtubeTitle: "Stator One-Way Clutch Testing"
  },
  {
    id: 157,
    q: "What is the purpose of the pressure regulator valve in an automatic transmission?",
    qChinese: "自动变速箱中压力调节阀的用途是什么？",
    options: [
      "A) To increase line pressure to maximum at all times",
      "B) To control and maintain line pressure at a specified level by diverting excess pump output",
      "C) To shift the transmission into overdrive",
      "D) To engage the parking pawl"
    ],
    optionsChinese: [
      "A) 始终将主油压增加到最大值",
      "B) 通过分流多余的油泵输出来控制和维持主油压在规定水平",
      "C) 将变速箱切换到超速挡",
      "D) 接合驻车棘爪"
    ],
    answer: 1,
    explanation: "The pressure regulator valve controls mainline pressure by balancing spring force against hydraulic pressure. When pump output exceeds what is needed, the regulator valve opens, diverting excess fluid to the converter circuit, lubrication system, or back to the pump inlet. This prevents excessively high system pressure.",
    explanationChinese: "压力调节阀通过平衡弹簧力与液压压力来控制主管路压力。当油泵输出超过需要时，调节阀打开，将多余的油液分流到变矩器回路、润滑系统或回到油泵进口。这防止了系统压力过高。",
    diagram: "",
    terms: ["valve_body", "line_pressure"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "Pressure Regulator Valve Operation"
  },
  {
    id: 158,
    q: "A transmission leaks fluid from the front seal area. What should be inspected?",
    qChinese: "变速箱从前密封区域泄漏油液。应检查什么？",
    options: [
      "A) The rear output shaft seal only",
      "B) The front pump seal, converter hub surface, and pump bushing",
      "C) The valve body gaskets only",
      "D) The parking pawl mechanism"
    ],
    optionsChinese: [
      "A) 仅后输出轴密封",
      "B) 前油泵密封、变矩器轮毂表面和油泵衬套",
      "C) 仅阀体垫片",
      "D) 驻车棘爪机构"
    ],
    answer: 1,
    explanation: "A front seal leak can be caused by a worn or damaged front pump seal, a scored or worn torque converter hub that rides against the seal, or a worn pump bushing that allows the converter to wobble. All three components should be inspected during repair to prevent a repeat failure after seal replacement.",
    explanationChinese: "前密封泄漏可能由磨损或损坏的前油泵密封、与密封件接触的磨损或划伤的液力变矩器轮毂、或允许变矩器晃动的磨损油泵衬套引起。在维修期间应检查所有三个部件，以防止密封更换后重复故障。",
    diagram: "",
    terms: ["torque_converter", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=z1ZlC7OAiNk",
    youtubeTitle: "Transmission Front Seal Replacement"
  },
  {
    id: 159,
    q: "What scan tool data parameter indicates torque converter clutch slip?",
    qChinese: "什么扫描工具数据参数指示液力变矩器离合器滑差？",
    options: [
      "A) Engine oil temperature",
      "B) The difference between engine RPM and transmission input shaft RPM (TCC slip speed)",
      "C) Battery voltage",
      "D) Fuel trim values"
    ],
    optionsChinese: [
      "A) 发动机油温",
      "B) 发动机转速与变速箱输入轴转速之间的差值（TCC滑差转速）",
      "C) 电池电压",
      "D) 燃油修正值"
    ],
    answer: 1,
    explanation: "TCC slip is calculated as the difference between engine RPM (from the crankshaft position sensor) and transmission input RPM (from the turbine speed sensor). When the TCC is fully locked, slip should be near zero. Excessive slip when commanded on indicates a worn converter clutch or solenoid problem.",
    explanationChinese: "TCC滑差计算为发动机转速（来自曲轴位置传感器）与变速箱输入转速（来自涡轮速度传感器）之间的差值。当TCC完全锁止时，滑差应接近零。当指令接合时出现过度滑差表明变矩器离合器磨损或电磁阀问题。",
    diagram: "",
    terms: ["torque_converter", "speed_sensor", "tcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Torque_converter_cutaway.svg/640px-Torque_converter_cutaway.svg.png",
    youtube: "https://www.youtube.com/watch?v=z1ZlC7OAiNk",
    youtubeTitle: "TCC Slip Diagnosis with Scan Tool"
  },
  {
    id: 160,
    q: "In a planetary gear set, what gear results when the ring gear is the input, the sun gear is held, and the planet carrier is the output?",
    qChinese: "在行星齿轮组中，当齿圈为输入、太阳轮被固定、行星架为输出时，会产生什么挡位？",
    options: [
      "A) Reverse",
      "B) A forward gear reduction (underdrive)",
      "C) Direct drive (1:1)",
      "D) Overdrive"
    ],
    optionsChinese: [
      "A) 倒挡",
      "B) 前进减速挡（欠速）",
      "C) 直接挡（1:1）",
      "D) 超速挡"
    ],
    answer: 1,
    explanation: "When the ring gear is the input, the sun gear is held stationary, and the planet carrier is the output, the result is a forward gear reduction. The carrier turns in the same direction as the ring gear but at a slower speed, providing a torque increase. The exact ratio depends on the number of teeth.",
    explanationChinese: "当齿圈为输入、太阳轮被固定、行星架为输出时，结果是前进减速挡。行星架与齿圈同方向旋转但速度较慢，提供扭矩增加。确切的比率取决于齿数。",
    diagram: "",
    terms: ["planetary_gear_set", "gear_ratio"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Epicyclic_gear_ratios.png/640px-Epicyclic_gear_ratios.png",
    youtube: "https://www.youtube.com/watch?v=ARd-Om2VyiE",
    youtubeTitle: "Planetary Gear Ratios Explained"
  },
  {
    id: 161,
    q: "Technician A says direct drive (1:1 ratio) in a planetary gear set is achieved when any two members are locked together. Technician B says direct drive can only be achieved by holding the sun gear. Who is correct?",
    qChinese: "技师A说在行星齿轮组中，当任意两个构件锁在一起时可实现直接挡（1:1比率）。技师B说直接挡只能通过固定太阳轮来实现。谁是正确的？",
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
    explanation: "Technician A is correct. When any two members of a planetary gear set are locked together (for example, the sun gear to the planet carrier), the entire gear set must rotate as a unit, producing a 1:1 direct drive ratio. Holding the sun gear does not produce direct drive; it produces a gear reduction.",
    explanationChinese: "技师A是正确的。当行星齿轮组的任意两个构件锁在一起时（例如太阳轮与行星架），整个齿轮组必须作为一个整体旋转，产生1:1的直接驱动比率。固定太阳轮不会产生直接挡；它会产生减速挡。",
    diagram: "",
    terms: ["planetary_gear_set", "gear_ratio", "clutch_pack"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Epicyclic_gear_ratios.png/640px-Epicyclic_gear_ratios.png",
    youtube: "https://www.youtube.com/watch?v=ARd-Om2VyiE",
    youtubeTitle: "Direct Drive in Planetary Gear Sets"
  },
  {
    id: 162,
    q: "What is the function of the transmission fluid temperature sensor?",
    qChinese: "变速箱油温传感器的功能是什么？",
    options: [
      "A) To heat the transmission fluid",
      "B) To measure ATF temperature and send the data to the TCM for shift strategy adjustments",
      "C) To control the transmission cooler fan speed",
      "D) To display fluid level on the dashboard"
    ],
    optionsChinese: [
      "A) 加热变速箱油",
      "B) 测量ATF温度并将数据发送给TCM用于换挡策略调整",
      "C) 控制变速箱冷却器风扇速度",
      "D) 在仪表板上显示油液位"
    ],
    answer: 1,
    explanation: "The transmission fluid temperature sensor is a thermistor that measures ATF temperature and sends a voltage signal to the TCM. The TCM uses this data to adjust shift points, line pressure, and TCC operation. If fluid is too hot, the TCM may inhibit TCC lockup or trigger a temperature warning.",
    explanationChinese: "变速箱油温传感器是一个热敏电阻，测量ATF温度并向TCM发送电压信号。TCM使用此数据调整换挡点、主油压和TCC操作。如果油液过热，TCM可能禁止TCC锁止或触发温度警告。",
    diagram: "",
    terms: ["tcm", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "Transmission Temperature Sensor"
  },
  {
    id: 163,
    q: "What is the most common type of transmission oil pump used in modern automatic transmissions?",
    qChinese: "现代自动变速箱中最常用的变速箱油泵类型是什么？",
    options: [
      "A) A centrifugal pump",
      "B) A gear-type or gerotor (internal/external gear) pump",
      "C) A piston pump",
      "D) A diaphragm pump"
    ],
    optionsChinese: [
      "A) 离心泵",
      "B) 齿轮式或摆线泵（内/外齿轮）泵",
      "C) 活塞泵",
      "D) 膜片泵"
    ],
    answer: 1,
    explanation: "Modern automatic transmissions typically use gear-type or gerotor (internal-external gear) pumps. These positive-displacement pumps provide consistent flow and pressure across a wide RPM range. The pump is driven by the torque converter housing and supplies all hydraulic pressure needed for transmission operation.",
    explanationChinese: "现代自动变速箱通常使用齿轮式或摆线（内-外齿轮）泵。这些容积式泵在宽转速范围内提供一致的流量和压力。油泵由液力变矩器壳体驱动，提供变速箱运行所需的所有液压压力。",
    diagram: "",
    terms: ["line_pressure", "torque_converter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "Transmission Oil Pump Types"
  },
  {
    id: 164,
    q: "During a CVT inspection, what component should be checked for wear or damage?",
    qChinese: "在CVT检查期间，应检查哪个部件是否磨损或损坏？",
    options: [
      "A) The clutch packs and bands",
      "B) The drive belt or chain and the pulley surfaces",
      "C) The planetary gear sets",
      "D) The governor assembly"
    ],
    optionsChinese: [
      "A) 离合器片组和制动带",
      "B) 传动皮带或链条和滑轮表面",
      "C) 行星齿轮组",
      "D) 调速器总成"
    ],
    answer: 1,
    explanation: "CVTs use a belt or chain running between two variable-diameter pulleys instead of traditional clutch packs and planetary gears. During inspection, the belt or chain should be checked for stretching, cracks, or glazing, and the pulley surfaces should be examined for scoring, pitting, or wear that could cause slippage.",
    explanationChinese: "CVT使用在两个可变直径滑轮之间运行的皮带或链条，而不是传统的离合器片组和行星齿轮。检查时，应检查皮带或链条是否有拉伸、裂纹或发亮，滑轮表面应检查是否有刮痕、点蚀或可能导致打滑的磨损。",
    diagram: "",
    terms: ["cvt"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nissan_Extroid_CVT_cutaway.jpg/640px-Nissan_Extroid_CVT_cutaway.jpg",
    youtube: "https://www.youtube.com/watch?v=PEq5_b4LWNY",
    youtubeTitle: "CVT Belt and Pulley Inspection"
  },
  {
    id: 165,
    q: "What is the result of a stuck-open shift solenoid in an automatic transmission?",
    qChinese: "自动变速箱中换挡电磁阀卡在开启位置会产生什么结果？",
    options: [
      "A) Normal shifting in all gears",
      "B) The transmission may be stuck in one gear or unable to shift properly",
      "C) Improved fuel economy",
      "D) The engine will not start"
    ],
    optionsChinese: [
      "A) 所有挡位正常换挡",
      "B) 变速箱可能卡在一个挡位或无法正常换挡",
      "C) 提高燃油经济性",
      "D) 发动机无法启动"
    ],
    answer: 1,
    explanation: "A shift solenoid that is stuck open continuously directs hydraulic pressure to a clutch or band circuit that should only be pressurized during certain gears. This can prevent normal gear changes, cause the transmission to be stuck in a wrong gear, or produce simultaneous engagement of incompatible elements.",
    explanationChinese: "卡在开启位置的换挡电磁阀持续将液压压力引导到仅应在某些挡位加压的离合器或制动带回路。这可能阻止正常的换挡、导致变速箱卡在错误挡位或产生不兼容元件的同时接合。",
    diagram: "",
    terms: ["shift_solenoid", "valve_body", "clutch_pack"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=hE-bFcLHbGc",
    youtubeTitle: "Stuck Shift Solenoid Symptoms"
  },
  {
    id: 166,
    q: "Technician A says you should always replace the torque converter when rebuilding a transmission. Technician B says the converter can be reused if the transmission failure was minor and the converter passes inspection. Who is correct?",
    qChinese: "技师A说在重建变速箱时应始终更换液力变矩器。技师B说如果变速箱故障轻微且变矩器通过检查，可以重新使用。谁是正确的？",
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
    explanation: "Technician B is correct. While many shops recommend converter replacement as best practice, it is not always mandatory. If the failure was external (like a broken linkage) and no debris entered the converter, and the converter hub, one-way clutch, and TCC material are in good condition, reuse is acceptable.",
    explanationChinese: "技师B是正确的。虽然许多维修店建议更换变矩器作为最佳做法，但并非总是强制性的。如果故障是外部的（如断裂的连杆），没有碎屑进入变矩器，且变矩器轮毂、单向离合器和TCC材料状况良好，则可以重新使用。",
    diagram: "",
    terms: ["torque_converter", "clutch_pack"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Torque_converter_cutaway.svg/640px-Torque_converter_cutaway.svg.png",
    youtube: "https://www.youtube.com/watch?v=z1ZlC7OAiNk",
    youtubeTitle: "Torque Converter Inspection During Rebuild"
  },
  {
    id: 167,
    q: "What does DTC P0760 indicate?",
    qChinese: "DTC P0760表示什么？",
    options: [
      "A) Engine misfire detected",
      "B) Shift solenoid C malfunction",
      "C) Transmission fluid over-temperature",
      "D) Output speed sensor intermittent"
    ],
    optionsChinese: [
      "A) 检测到发动机失火",
      "B) 换挡电磁阀C故障",
      "C) 变速箱油过温",
      "D) 输出速度传感器间歇性故障"
    ],
    answer: 1,
    explanation: "DTC P0760 indicates a malfunction in the shift solenoid C circuit. This could be an electrical issue such as an open or short circuit, or a mechanical problem with the solenoid itself. The technician should check wiring, connectors, and the solenoid resistance before replacing the solenoid.",
    explanationChinese: "DTC P0760表示换挡电磁阀C电路故障。这可能是电气问题如开路或短路，或电磁阀本身的机械问题。技师应在更换电磁阀之前检查线路、接头和电磁阀电阻。",
    diagram: "",
    terms: ["shift_solenoid", "dtc", "tcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=hE-bFcLHbGc",
    youtubeTitle: "Shift Solenoid C Diagnosis"
  },
  {
    id: 168,
    q: "What is the purpose of a servo return spring?",
    qChinese: "伺服回位弹簧的用途是什么？",
    options: [
      "A) To apply the band with more force",
      "B) To release the band by pushing the servo piston back when hydraulic pressure is removed",
      "C) To increase line pressure during shifts",
      "D) To hold the parking pawl in place"
    ],
    optionsChinese: [
      "A) 以更大的力接合制动带",
      "B) 当液压压力移除时将伺服活塞推回以释放制动带",
      "C) 在换挡时增加主油压",
      "D) 将驻车棘爪固定到位"
    ],
    answer: 1,
    explanation: "The servo return spring pushes the servo piston back to its rest position when hydraulic apply pressure is released. This action releases the band from the drum, allowing the planetary member to rotate freely. Without the return spring, the band would remain partially applied, causing drag and overheating.",
    explanationChinese: "当液压接合压力释放时，伺服回位弹簧将伺服活塞推回其静止位置。此动作从鼓上释放制动带，允许行星构件自由旋转。没有回位弹簧，制动带将保持部分接合状态，导致拖滞和过热。",
    diagram: "",
    terms: ["servo", "band"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "Servo and Band Operation"
  },
  {
    id: 169,
    q: "Which of the following is NOT a common cause of transmission overheating?",
    qChinese: "以下哪项不是变速箱过热的常见原因？",
    options: [
      "A) A plugged transmission cooler",
      "B) Towing beyond the vehicle's rated capacity",
      "C) A properly functioning auxiliary cooler",
      "D) Low transmission fluid level"
    ],
    optionsChinese: [
      "A) 堵塞的变速箱冷却器",
      "B) 超出车辆额定能力的拖曳",
      "C) 正常工作的辅助冷却器",
      "D) 变速箱油液位低"
    ],
    answer: 2,
    explanation: "A properly functioning auxiliary cooler helps prevent overheating by providing additional cooling capacity. A plugged cooler restricts fluid flow and heat dissipation. Towing beyond capacity creates excessive heat from increased load. Low fluid means less fluid to absorb and dissipate heat, causing temperatures to rise.",
    explanationChinese: "正常工作的辅助冷却器通过提供额外的冷却能力帮助防止过热。堵塞的冷却器限制油液流动和散热。超出能力的拖曳因负载增加产生过多热量。低油液位意味着更少的油液来吸收和散发热量，导致温度升高。",
    diagram: "",
    terms: ["transmission_cooler", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Preventing Transmission Overheating"
  },
  {
    id: 170,
    q: "A technician is replacing the transmission pan gasket. What else should be serviced at the same time?",
    qChinese: "技师正在更换变速箱油底壳垫片。同时还应维修什么？",
    options: [
      "A) The engine air filter",
      "B) The transmission filter and fluid",
      "C) The spark plugs",
      "D) The brake fluid"
    ],
    optionsChinese: [
      "A) 发动机空气滤清器",
      "B) 变速箱滤清器和油液",
      "C) 火花塞",
      "D) 制动液"
    ],
    answer: 1,
    explanation: "When the pan is removed to replace the gasket, the transmission filter is accessible and should be replaced at the same time. Fresh ATF should also be added. This is standard transmission service practice, as the filter traps debris and contaminants that can restrict fluid flow and degrade performance over time.",
    explanationChinese: "当拆除油底壳更换垫片时，变速箱滤清器可以接触到，应同时更换。还应添加新的ATF。这是标准的变速箱维护做法，因为滤清器捕获的碎屑和污染物会随时间限制油液流动并降低性能。",
    diagram: "",
    terms: ["transmission_fluid", "transmission_cooler"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Transmission Pan and Filter Service"
  },
  {
    id: 171,
    q: "What happens when two incompatible holding devices in a planetary gear set are applied simultaneously?",
    qChinese: "当行星齿轮组中两个不兼容的保持装置同时接合时会发生什么？",
    options: [
      "A) The transmission shifts more smoothly",
      "B) The transmission locks up internally, potentially stalling the engine or damaging components",
      "C) The vehicle goes faster",
      "D) The torque converter multiplies extra torque"
    ],
    optionsChinese: [
      "A) 变速箱换挡更平顺",
      "B) 变速箱内部锁死，可能导致发动机熄火或损坏部件",
      "C) 车辆速度更快",
      "D) 液力变矩器倍增额外扭矩"
    ],
    answer: 1,
    explanation: "Applying two incompatible holding devices simultaneously locks the planetary gear set, preventing rotation. This is called a tie-up and can stall the engine, cause a severe jolt, or break internal hard parts like shafts and gear teeth. This condition usually results from a valve body malfunction or solenoid error.",
    explanationChinese: "同时接合两个不兼容的保持装置会锁死行星齿轮组，阻止旋转。这称为锁挡，可能导致发动机熄火、严重的冲击或折断轴和齿轮齿等内部硬部件。这种情况通常由阀体故障或电磁阀错误引起。",
    diagram: "",
    terms: ["planetary_gear_set", "clutch_pack", "band", "valve_body"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Epicyclic_gear_ratios.png/640px-Epicyclic_gear_ratios.png",
    youtube: "https://www.youtube.com/watch?v=ARd-Om2VyiE",
    youtubeTitle: "Transmission Tie-Up Explained"
  },
  {
    id: 172,
    q: "Technician A says a scan tool can be used to command individual shift solenoids on and off for testing. Technician B says solenoid resistance should be tested with an ohmmeter. Who is correct?",
    qChinese: "技师A说扫描工具可用于指令单个换挡电磁阀接通和断开进行测试。技师B说电磁阀电阻应使用欧姆表测试。谁是正确的？",
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
    explanation: "Both technicians are correct. Modern scan tools have bi-directional control capabilities that allow the technician to command solenoids on and off to verify operation. Measuring solenoid resistance with an ohmmeter confirms whether the coil is open, shorted, or within specification. Both tests are valuable diagnostic procedures.",
    explanationChinese: "两位技师都是正确的。现代扫描工具具有双向控制功能，允许技师指令电磁阀接通和断开以验证操作。使用欧姆表测量电磁阀电阻可确认线圈是否断路、短路或在规格范围内。两种测试都是有价值的诊断程序。",
    diagram: "",
    terms: ["shift_solenoid", "tcm", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=hE-bFcLHbGc",
    youtubeTitle: "Testing Shift Solenoids"
  },
  {
    id: 173,
    q: "What is a common symptom of a faulty vehicle speed sensor in a vehicle with an automatic transmission?",
    qChinese: "在配备自动变速箱的车辆中，故障的车速传感器的常见症状是什么？",
    options: [
      "A) The engine overheats",
      "B) Erratic or no shifting, inoperative speedometer, and possible limp mode",
      "C) The air conditioning stops working",
      "D) The headlights flicker"
    ],
    optionsChinese: [
      "A) 发动机过热",
      "B) 不规律换挡或不换挡、车速表不工作以及可能进入跛行模式",
      "C) 空调停止工作",
      "D) 大灯闪烁"
    ],
    answer: 1,
    explanation: "The vehicle speed sensor provides critical data to both the TCM and the instrument cluster. A faulty VSS can cause the TCM to lose vehicle speed information, resulting in erratic shifting or no upshifts. The speedometer will also be inoperative, and the TCM may enter limp mode to protect the transmission.",
    explanationChinese: "车速传感器向TCM和仪表板提供关键数据。故障的VSS可能导致TCM丢失车速信息，导致换挡不规律或不升挡。车速表也将不工作，TCM可能进入跛行模式以保护变速箱。",
    diagram: "",
    terms: ["speed_sensor", "tcm", "shift_solenoid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=hE-bFcLHbGc",
    youtubeTitle: "Vehicle Speed Sensor Symptoms"
  },
  {
    id: 174,
    q: "What should be checked if a vehicle's Park position on the gear selector does not hold the vehicle on an incline?",
    qChinese: "如果车辆的挡位选择器驻车位置无法在斜坡上固定车辆，应检查什么？",
    options: [
      "A) The torque converter clutch",
      "B) The parking pawl, parking gear, shift linkage adjustment, and parking pawl spring",
      "C) The transmission fluid level",
      "D) The valve body solenoids"
    ],
    optionsChinese: [
      "A) 液力变矩器离合器",
      "B) 驻车棘爪、驻车齿轮、换挡连杆调整和驻车棘爪弹簧",
      "C) 变速箱油液位",
      "D) 阀体电磁阀"
    ],
    answer: 1,
    explanation: "If Park does not hold, the parking pawl may be worn, broken, or not fully engaging the parking gear teeth. The shift linkage may be misadjusted, preventing the manual valve from reaching the full Park position. The pawl actuating spring may be weak or broken, preventing proper engagement of the pawl.",
    explanationChinese: "如果驻车挡不能保持，驻车棘爪可能磨损、断裂或未完全与驻车齿轮齿啮合。换挡连杆可能调整不当，阻止手动阀到达完全驻车位置。棘爪驱动弹簧可能虚弱或断裂，阻止棘爪正确啮合。",
    diagram: "",
    terms: ["parking_pawl"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "Parking Pawl Inspection"
  },
  {
    id: 175,
    q: "During an air pressure test of a transmission clutch circuit, what indicates a leaking seal?",
    qChinese: "在变速箱离合器回路的气压测试中，什么表明密封件泄漏？",
    options: [
      "A) A firm thud sound when air is applied",
      "B) A continuous hissing of air escaping and failure of the clutch piston to apply firmly",
      "C) The transmission shifting into gear",
      "D) A clicking noise from the parking pawl"
    ],
    optionsChinese: [
      "A) 施加气压时发出坚实的砰声",
      "B) 空气持续泄漏的嘶嘶声且离合器活塞无法牢固接合",
      "C) 变速箱挂入挡位",
      "D) 驻车棘爪的咔嗒声"
    ],
    answer: 1,
    explanation: "During an air test, applying compressed air to a clutch circuit should produce a firm thud as the piston moves and applies the clutch. A continuous hissing sound indicates air is leaking past a worn or damaged piston seal, preventing the circuit from holding pressure. This confirms the need for seal replacement.",
    explanationChinese: "在气压测试中，向离合器回路施加压缩空气应产生活塞移动并接合离合器时的坚实砰声。持续的嘶嘶声表明空气正从磨损或损坏的活塞密封件旁泄漏，阻止回路保持压力。这确认需要更换密封件。",
    diagram: "",
    terms: ["clutch_pack", "servo"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "Transmission Air Test Procedure"
  },
  {
    id: 176,
    q: "What is the typical color of new, healthy automatic transmission fluid?",
    qChinese: "新的、健康的自动变速箱油的典型颜色是什么？",
    options: [
      "A) Dark brown",
      "B) Clear red or light pink",
      "C) Milky white",
      "D) Green"
    ],
    optionsChinese: [
      "A) 深棕色",
      "B) 清澈的红色或浅粉色",
      "C) 乳白色",
      "D) 绿色"
    ],
    answer: 1,
    explanation: "New ATF is typically dyed clear red or light pink for easy identification. As the fluid ages and is subjected to heat and contamination, it gradually darkens. Brown or dark fluid suggests deterioration, black fluid with a burnt smell indicates severe overheating, and milky pink indicates coolant contamination.",
    explanationChinese: "新ATF通常被染成清澈的红色或浅粉色以便于识别。随着油液老化并受到热量和污染，它逐渐变暗。棕色或深色油液表明劣化，伴有烧焦气味的黑色油液表明严重过热，乳白粉色表明有冷却液污染。",
    diagram: "",
    terms: ["transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Transmission Fluid Color Guide"
  },
  {
    id: 177,
    q: "Technician A says shift linkage misadjustment can cause the gear indicator on the dashboard to not match the actual gear selected. Technician B says it can also cause the vehicle to start in gears other than Park or Neutral. Who is correct?",
    qChinese: "技师A说换挡连杆调整不当会导致仪表板上的挡位指示器与实际选择的挡位不匹配。技师B说它还可能导致车辆在驻车挡或空挡以外的挡位启动。谁是正确的？",
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
    explanation: "Both technicians are correct. Misadjusted shift linkage causes the manual valve and neutral safety switch positions to not correspond with the driver's selected gear. This can result in a mismatch between the indicator display and actual gear, and potentially allow starting in gear if the switch position is incorrect.",
    explanationChinese: "两位技师都是正确的。换挡连杆调整不当导致手动阀和空挡安全开关位置与驾驶员选择的挡位不对应。这可能导致指示器显示与实际挡位不匹配，如果开关位置不正确，还可能允许在挡位中启动。",
    diagram: "",
    terms: ["valve_body", "parking_pawl"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "Shift Linkage Adjustment"
  },
  {
    id: 178,
    q: "What is the function of the sprag-type one-way clutch in an automatic transmission?",
    qChinese: "自动变速箱中棘爪式单向离合器的功能是什么？",
    options: [
      "A) To lock a planetary member in one direction of rotation and allow it to freewheel in the other",
      "B) To regulate line pressure",
      "C) To filter transmission fluid",
      "D) To engage the parking pawl"
    ],
    optionsChinese: [
      "A) 在一个旋转方向锁定行星构件并允许其在另一个方向自由旋转",
      "B) 调节主油压",
      "C) 过滤变速箱油",
      "D) 接合驻车棘爪"
    ],
    answer: 0,
    explanation: "A sprag-type one-way clutch contains small figure-eight shaped sprags between inner and outer races. When the races rotate in one direction, the sprags tilt and lock the races together. In the other direction, the sprags tilt to allow freewheel. This provides smooth, instantaneous engagement during shifts.",
    explanationChinese: "棘爪式单向离合器在内外滚道之间包含小的八字形棘爪。当滚道在一个方向旋转时，棘爪倾斜并将滚道锁在一起。在另一个方向，棘爪倾斜以允许自由旋转。这在换挡时提供平顺、即时的接合。",
    diagram: "",
    terms: ["clutch_pack", "planetary_gear_set"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "One-Way Clutch Operation"
  },
  {
    id: 179,
    q: "Why is it important to install the correct number and position of check balls when reassembling a valve body?",
    qChinese: "为什么在重新组装阀体时安装正确数量和位置的单向球阀很重要？",
    options: [
      "A) They are decorative and have no function",
      "B) Incorrect check ball placement will cause improper fluid routing, leading to harsh shifts, slipping, or no shifts",
      "C) They prevent the valve body from overheating",
      "D) They are only needed for reverse gear"
    ],
    optionsChinese: [
      "A) 它们是装饰性的，没有功能",
      "B) 单向球阀放置不正确会导致油液路径不当，引起换挡生硬、打滑或不换挡",
      "C) 它们防止阀体过热",
      "D) 它们仅在倒挡时需要"
    ],
    answer: 1,
    explanation: "Check balls control fluid flow direction and timing within the valve body. A missing, extra, or misplaced check ball can block a needed fluid passage or allow fluid to flow where it should not, causing incorrect clutch or band application, harsh shifts, slipping, or complete failure to shift in certain gears.",
    explanationChinese: "单向球阀控制阀体内油液流动的方向和时序。缺少、多余或放错位置的单向球阀可能阻塞所需的油液通道或允许油液流到不应该去的地方，导致离合器或制动带接合不正确、换挡生硬、打滑或在某些挡位完全无法换挡。",
    diagram: "",
    terms: ["valve_body"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "Valve Body Reassembly Tips"
  },
  {
    id: 180,
    q: "What is the purpose of the transmission vent?",
    qChinese: "变速箱通气孔的用途是什么？",
    options: [
      "A) To allow fresh air into the combustion chamber",
      "B) To equalize pressure inside the transmission case and prevent seal damage from pressure buildup",
      "C) To release exhaust gases",
      "D) To cool the transmission fluid directly"
    ],
    optionsChinese: [
      "A) 允许新鲜空气进入燃烧室",
      "B) 平衡变速箱壳体内部的压力并防止压力积聚造成密封件损坏",
      "C) 排放废气",
      "D) 直接冷却变速箱油"
    ],
    answer: 1,
    explanation: "The transmission vent allows air to escape as internal components heat up and fluid expands, preventing pressure buildup that could force fluid past seals. A clogged vent causes internal pressure to rise, potentially blowing out seals and causing fluid leaks from multiple locations on the transmission.",
    explanationChinese: "变速箱通气孔允许内部部件加热和油液膨胀时空气排出，防止压力积聚迫使油液通过密封件。堵塞的通气孔导致内部压力升高，可能吹坏密封件并导致变速箱多个位置的油液泄漏。",
    diagram: "",
    terms: ["transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Transmission Vent and Seal Leaks"
  },
  {
    id: 181,
    q: "Technician A says the transmission cooler lines should be flushed when replacing a failed transmission. Technician B says the old cooler can be reused without flushing. Who is correct?",
    qChinese: "技师A说在更换故障变速箱时应冲洗变速箱冷却管路。技师B说旧冷却器可以不冲洗直接重新使用。谁是正确的？",
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
    explanation: "Technician A is correct. When a transmission fails internally, metal debris and clutch material can be trapped in the cooler and lines. If not flushed, this contamination will be pumped into the new or rebuilt transmission, causing premature failure. Thorough flushing or cooler replacement is essential during transmission replacement.",
    explanationChinese: "技师A是正确的。当变速箱内部故障时，金属碎屑和离合器材料可能滞留在冷却器和管路中。如果不冲洗，这些污染物将被泵入新的或重建的变速箱，导致过早故障。在更换变速箱时，彻底冲洗或更换冷却器是必要的。",
    diagram: "",
    terms: ["transmission_cooler", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Radiator.jpg/640px-Radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Transmission Cooler Flushing"
  },
  {
    id: 182,
    q: "What is the purpose of the reaction member in a planetary gear set?",
    qChinese: "行星齿轮组中反作用构件的用途是什么？",
    options: [
      "A) To provide the input power",
      "B) To be held stationary by a band or clutch to provide a reaction point for gear reduction or overdrive",
      "C) To output power to the driveshaft",
      "D) To lubricate the gear teeth"
    ],
    optionsChinese: [
      "A) 提供输入动力",
      "B) 由制动带或离合器固定以提供减速或超速的反作用点",
      "C) 将动力输出到传动轴",
      "D) 润滑齿轮齿"
    ],
    answer: 1,
    explanation: "The reaction member is whichever planetary component (sun gear, ring gear, or carrier) is held stationary. By holding one member, the other two are forced into a specific speed and direction relationship, creating a gear ratio. Different members held as reaction points produce different gear ratios.",
    explanationChinese: "反作用构件是被固定的任何行星部件（太阳轮、齿圈或行星架）。通过固定一个构件，其他两个被迫进入特定的速度和方向关系，创建齿轮比。作为反作用点的不同构件产生不同的齿轮比。",
    diagram: "",
    terms: ["planetary_gear_set", "band", "clutch_pack", "gear_ratio"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Epicyclic_gear_ratios.png/640px-Epicyclic_gear_ratios.png",
    youtube: "https://www.youtube.com/watch?v=ARd-Om2VyiE",
    youtubeTitle: "Planetary Gear Set Reaction Members"
  },
  {
    id: 183,
    q: "What does it mean when a transmission is described as having a 'flare' during a shift?",
    qChinese: "当描述变速箱在换挡时出现'空转'是什么意思？",
    options: [
      "A) The engine temperature increases during the shift",
      "B) Engine RPM increases momentarily between gears because the off-going gear releases before the on-coming gear fully applies",
      "C) The transmission makes a visual spark",
      "D) The shift indicator light flashes"
    ],
    optionsChinese: [
      "A) 换挡时发动机温度升高",
      "B) 发动机转速在两个挡位之间短暂升高，因为释放挡位比接合挡位先释放",
      "C) 变速箱产生可见的火花",
      "D) 换挡指示灯闪烁"
    ],
    answer: 1,
    explanation: "A shift flare occurs when the releasing (off-going) holding device disengages before the applying (on-coming) device is fully engaged. During this brief overlap gap, no gear is fully applied, causing the engine to rev up momentarily. This indicates a timing or pressure problem in the shift overlap.",
    explanationChinese: "换挡空转发生在释放的保持装置脱离后接合的装置尚未完全接合时。在这个短暂的重叠间隙中，没有挡位完全接合，导致发动机转速短暂升高。这表明换挡重叠的时序或压力存在问题。",
    diagram: "",
    terms: ["clutch_pack", "band", "valve_body", "shift_solenoid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "Shift Flare Diagnosis"
  },
  {
    id: 184,
    q: "What information does the Transmission Fluid Temperature (TFT) sensor provide to the TCM?",
    qChinese: "变速箱油温（TFT）传感器向TCM提供什么信息？",
    options: [
      "A) The viscosity of the fluid",
      "B) The current temperature of the transmission fluid in degrees",
      "C) The fluid level in the pan",
      "D) The age of the transmission fluid"
    ],
    optionsChinese: [
      "A) 油液的粘度",
      "B) 变速箱油当前的温度（度数）",
      "C) 油底壳中的油液位",
      "D) 变速箱油的使用年限"
    ],
    answer: 1,
    explanation: "The TFT sensor provides the TCM with the current transmission fluid temperature as a voltage or resistance value. The TCM uses this information to modify shift schedules, adjust line pressure, control TCC engagement, and activate overheating protection strategies when the fluid exceeds safe temperature limits.",
    explanationChinese: "TFT传感器以电压或电阻值的形式向TCM提供当前变速箱油温。TCM使用此信息修改换挡计划、调整主油压、控制TCC接合，并在油液超过安全温度限值时启动过热保护策略。",
    diagram: "",
    terms: ["tcm", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "TFT Sensor Operation"
  },
  {
    id: 185,
    q: "When installing a torque converter onto a transmission, how do you verify proper seating?",
    qChinese: "将液力变矩器安装到变速箱上时，如何验证正确安装？",
    options: [
      "A) Push it on until it stops and measure nothing",
      "B) Rotate the converter while pushing it on; it should engage in multiple stages and sit recessed from the bell housing surface by a specified distance",
      "C) Bolt it to the flexplate first, then slide the transmission on",
      "D) Fill it with fluid before installation"
    ],
    optionsChinese: [
      "A) 推到底不测量任何东西",
      "B) 在推入时旋转变矩器；它应在多个阶段接合并从变速箱壳体表面凹入规定的距离",
      "C) 先将其用螺栓固定到挠性板上，然后滑入变速箱",
      "D) 安装前注满油液"
    ],
    answer: 1,
    explanation: "Proper converter installation requires rotating it while pushing it onto the input shaft, stator support, and pump drive hub. You should feel two or three distinct engagements as it seats on each splined component. The converter should sit recessed from the bell housing face by the manufacturer-specified measurement.",
    explanationChinese: "正确的变矩器安装需要在将其推到输入轴、导轮支撑和油泵驱动毂上时旋转它。当它在每个花键部件上安装到位时，您应该感觉到两到三个明显的接合。变矩器应从变速箱壳体面凹入制造商规定的测量距离。",
    diagram: "",
    terms: ["torque_converter", "flexplate"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Torque_converter_cutaway.svg/640px-Torque_converter_cutaway.svg.png",
    youtube: "https://www.youtube.com/watch?v=z1ZlC7OAiNk",
    youtubeTitle: "Torque Converter Installation"
  },
  {
    id: 186,
    q: "What is the most likely cause of a grinding noise when shifting from Park to Reverse?",
    qChinese: "从驻车挡切换到倒挡时出现研磨噪声最可能的原因是什么？",
    options: [
      "A) Low engine oil",
      "B) A worn parking pawl not fully disengaging from the parking gear before reverse is applied",
      "C) A faulty alternator",
      "D) Worn brake rotors"
    ],
    optionsChinese: [
      "A) 发动机油低",
      "B) 磨损的驻车棘爪在倒挡接合前未完全从驻车齿轮上脱离",
      "C) 发电机故障",
      "D) 制动盘磨损"
    ],
    answer: 1,
    explanation: "A grinding noise when shifting from Park to Reverse can indicate the parking pawl is not fully retracting before the reverse clutch or band engages. This can be caused by a worn pawl, weak return spring, or shift linkage misadjustment that does not fully move the manual valve out of the Park position.",
    explanationChinese: "从驻车挡切换到倒挡时的研磨噪声可能表明驻车棘爪在倒挡离合器或制动带接合前未完全缩回。这可能由棘爪磨损、回位弹簧虚弱或未将手动阀完全移出驻车位置的换挡连杆调整不当引起。",
    diagram: "",
    terms: ["parking_pawl", "band", "clutch_pack"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "Park to Reverse Grinding Noise"
  },
  {
    id: 187,
    q: "Technician A says a PWM (Pulse Width Modulated) solenoid can vary hydraulic pressure by changing the on-off duty cycle. Technician B says a PWM solenoid is either fully on or fully off. Who is correct?",
    qChinese: "技师A说PWM（脉宽调制）电磁阀可以通过改变通断占空比来改变液压压力。技师B说PWM电磁阀要么完全接通要么完全断开。谁是正确的？",
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
    explanation: "Technician A is correct. PWM solenoids rapidly cycle on and off at varying duty cycles to precisely control hydraulic pressure. By changing the percentage of time the solenoid is energized versus de-energized, the effective fluid flow and pressure can be varied smoothly. They are not simple on-off devices.",
    explanationChinese: "技师A是正确的。PWM电磁阀以不同的占空比快速循环通断，精确控制液压压力。通过改变电磁阀通电与断电时间的百分比，可以平滑地改变有效的油液流量和压力。它们不是简单的开关装置。",
    diagram: "",
    terms: ["shift_solenoid", "tcm", "line_pressure"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=hE-bFcLHbGc",
    youtubeTitle: "PWM Solenoid Operation"
  },
  {
    id: 188,
    q: "What is the purpose of the clutch return springs (Belleville spring or coil springs) in a clutch pack assembly?",
    qChinese: "离合器片组总成中离合器回位弹簧（碟形弹簧或螺旋弹簧）的用途是什么？",
    options: [
      "A) To help apply the clutch with more force",
      "B) To push the piston back and release the clutch pack when hydraulic pressure is removed",
      "C) To increase the gear ratio",
      "D) To filter fluid entering the clutch circuit"
    ],
    optionsChinese: [
      "A) 帮助以更大的力接合离合器",
      "B) 当液压压力移除时将活塞推回并释放离合器片组",
      "C) 增加齿轮比",
      "D) 过滤进入离合器回路的油液"
    ],
    answer: 1,
    explanation: "Clutch return springs push the apply piston away from the clutch pack when hydraulic pressure is released, creating clearance between the friction discs and steel plates. This ensures the clutch is fully released and does not drag, which would cause heat generation and premature wear of the friction material.",
    explanationChinese: "离合器回位弹簧在液压压力释放时将接合活塞推离离合器片组，在摩擦片和钢片之间创建间隙。这确保离合器完全释放且不拖滞，否则会产生热量并导致摩擦材料过早磨损。",
    diagram: "",
    terms: ["clutch_pack"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "Clutch Pack Assembly Explained"
  },
  {
    id: 189,
    q: "A customer complains that the engine stalls when coming to a stop with the transmission in Drive. What is the most likely cause?",
    qChinese: "客户投诉在前进挡停车时发动机熄火。最可能的原因是什么？",
    options: [
      "A) A slipping overdrive band",
      "B) The torque converter clutch not releasing at low speeds",
      "C) A faulty speedometer",
      "D) An overfilled transmission"
    ],
    optionsChinese: [
      "A) 超速挡制动带打滑",
      "B) 液力变矩器离合器在低速时不释放",
      "C) 车速表故障",
      "D) 变速箱加注过量"
    ],
    answer: 1,
    explanation: "If the TCC does not disengage as the vehicle slows down, the engine is mechanically locked to the drivetrain. Without the fluid coupling effect of the torque converter, the engine cannot idle independently and will stall when the vehicle stops. Common causes include a stuck TCC solenoid or faulty brake switch signal.",
    explanationChinese: "如果TCC在车辆减速时不脱离，发动机就与传动系统机械锁定。没有液力变矩器的液力耦合效果，发动机无法独立怠速并在车辆停止时熄火。常见原因包括TCC电磁阀卡滞或制动开关信号故障。",
    diagram: "",
    terms: ["torque_converter", "shift_solenoid", "tcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Torque_converter_cutaway.svg/640px-Torque_converter_cutaway.svg.png",
    youtube: "https://www.youtube.com/watch?v=z1ZlC7OAiNk",
    youtubeTitle: "TCC Not Releasing - Engine Stall"
  },
  {
    id: 190,
    q: "What is the purpose of clutch pack clearance measurement during transmission overhaul?",
    qChinese: "在变速箱大修期间离合器片组间隙测量的目的是什么？",
    options: [
      "A) To determine the transmission fluid capacity",
      "B) To ensure proper clutch apply and release by selecting the correct thickness selective snap ring or pressure plate",
      "C) To measure the torque converter size",
      "D) To set the band adjustment"
    ],
    optionsChinese: [
      "A) 确定变速箱油容量",
      "B) 通过选择正确厚度的选择性卡环或压盘来确保离合器正确接合和释放",
      "C) 测量液力变矩器尺寸",
      "D) 设定制动带调整"
    ],
    answer: 1,
    explanation: "Clutch pack clearance must be within manufacturer specifications. Too much clearance causes delayed engagement and slipping. Too little clearance can cause the clutch to drag when released. The technician measures the clearance and selects the appropriate thickness selective snap ring or pressure plate to achieve proper clearance.",
    explanationChinese: "离合器片组间隙必须在制造商规格范围内。间隙过大导致接合延迟和打滑。间隙过小可能导致离合器在释放时拖滞。技师测量间隙并选择适当厚度的选择性卡环或压盘以实现正确的间隙。",
    diagram: "",
    terms: ["clutch_pack"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "Clutch Pack Clearance Measurement"
  },
  {
    id: 191,
    q: "What type of sensor is commonly used as a transmission speed sensor?",
    qChinese: "什么类型的传感器通常用作变速箱速度传感器？",
    options: [
      "A) A thermocouple",
      "B) A Hall-effect or magnetic reluctance (variable reluctance) sensor",
      "C) A piezoelectric pressure sensor",
      "D) An oxygen sensor"
    ],
    optionsChinese: [
      "A) 热电偶",
      "B) 霍尔效应或磁阻（可变磁阻）传感器",
      "C) 压电压力传感器",
      "D) 氧传感器"
    ],
    answer: 1,
    explanation: "Transmission speed sensors typically use either Hall-effect or variable reluctance (magnetic) technology. These sensors detect the passage of teeth on a tone ring or reluctor wheel attached to the shaft. Hall-effect sensors produce a digital square wave signal, while variable reluctance sensors produce an analog AC signal that varies with speed.",
    explanationChinese: "变速箱速度传感器通常使用霍尔效应或可变磁阻（磁性）技术。这些传感器检测安装在轴上的信号齿圈或磁阻轮齿的通过。霍尔效应传感器产生数字方波信号，而可变磁阻传感器产生随速度变化的模拟交流信号。",
    diagram: "",
    terms: ["speed_sensor", "tcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=hE-bFcLHbGc",
    youtubeTitle: "Speed Sensor Types Explained"
  },
  {
    id: 192,
    q: "Technician A says that low reverse gear in an automatic transmission often uses the same holding devices as low forward gear. Technician B says reverse gear requires a different combination of clutches and bands than any forward gear. Who is correct?",
    qChinese: "技师A说自动变速箱中的低挡倒挡通常使用与低挡前进相同的保持装置。技师B说倒挡需要与任何前进挡不同的离合器和制动带组合。谁是正确的？",
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
    explanation: "Technician B is correct. Reverse gear requires a unique combination of clutch and band applications different from any forward gear. In a typical planetary gear set, reverse is achieved by driving one member, holding a different member than in forward gears, and outputting through a third member to reverse the rotation direction.",
    explanationChinese: "技师B是正确的。倒挡需要与任何前进挡不同的独特离合器和制动带接合组合。在典型的行星齿轮组中，倒挡通过驱动一个构件、固定与前进挡不同的构件并通过第三个构件输出来反转旋转方向来实现。",
    diagram: "",
    terms: ["planetary_gear_set", "clutch_pack", "band", "gear_ratio"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Epicyclic_gear_ratios.png/640px-Epicyclic_gear_ratios.png",
    youtube: "https://www.youtube.com/watch?v=ARd-Om2VyiE",
    youtubeTitle: "Reverse Gear in Planetary Gear Sets"
  },
  {
    id: 193,
    q: "A transmission pan gasket is leaking. What is the LEAST likely cause?",
    qChinese: "变速箱油底壳垫片泄漏。最不可能的原因是什么？",
    options: [
      "A) Overtightened pan bolts that warped the pan",
      "B) A damaged or worn gasket",
      "C) A clogged transmission vent causing internal pressure buildup",
      "D) A faulty shift solenoid"
    ],
    optionsChinese: [
      "A) 油底壳螺栓过紧导致油底壳变形",
      "B) 损坏或磨损的垫片",
      "C) 堵塞的变速箱通气孔导致内部压力积聚",
      "D) 故障的换挡电磁阀"
    ],
    answer: 3,
    explanation: "A faulty shift solenoid affects gear selection and shift quality but does not cause pan gasket leaks. Overtightened bolts warp the pan flange, creating gaps. A worn gasket loses its sealing ability. A clogged vent builds internal pressure that forces fluid past gaskets and seals. All three are common leak causes.",
    explanationChinese: "故障的换挡电磁阀影响挡位选择和换挡质量，但不会导致油底壳垫片泄漏。螺栓过紧使油底壳法兰变形，产生间隙。磨损的垫片失去密封能力。堵塞的通气孔积聚内部压力，迫使油液通过垫片和密封件。这三者都是常见的泄漏原因。",
    diagram: "",
    terms: ["transmission_fluid", "shift_solenoid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Transmission Pan Leak Repair"
  },
  {
    id: 194,
    q: "Why is it important to properly torque the flexplate-to-torque converter bolts?",
    qChinese: "为什么正确扭紧挠性板到液力变矩器的螺栓很重要？",
    options: [
      "A) Loose bolts can cause the flexplate to crack, vibration, and noise; overtightened bolts can distort the converter",
      "B) It only affects the paint finish",
      "C) It changes the gear ratio",
      "D) It adjusts the band tension"
    ],
    optionsChinese: [
      "A) 松动的螺栓可能导致挠性板破裂、振动和噪声；过紧的螺栓可能使变矩器变形",
      "B) 仅影响油漆表面",
      "C) 改变齿轮比",
      "D) 调整制动带张力"
    ],
    answer: 0,
    explanation: "Proper torque on flexplate-to-converter bolts is critical. Loose bolts allow the converter to wobble, causing vibration, noise, and eventual flexplate cracking. Overtightened bolts can distort the converter housing or pull the converter forward, damaging the pump bushing and seal. Always torque to manufacturer specifications.",
    explanationChinese: "挠性板到变矩器螺栓的正确扭矩至关重要。松动的螺栓允许变矩器晃动，导致振动、噪声并最终导致挠性板破裂。过紧的螺栓可能使变矩器壳体变形或将变矩器向前拉，损坏油泵衬套和密封件。始终按制造商规格扭紧。",
    diagram: "",
    terms: ["flexplate", "torque_converter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=z1ZlC7OAiNk",
    youtubeTitle: "Flexplate to Converter Bolt Torque"
  },
  {
    id: 195,
    q: "What scan tool parameter indicates the gear the TCM is commanding?",
    qChinese: "什么扫描工具参数指示TCM正在指令的挡位？",
    options: [
      "A) Engine coolant temperature",
      "B) Commanded gear or current gear state PID",
      "C) Mass air flow rate",
      "D) Oxygen sensor voltage"
    ],
    optionsChinese: [
      "A) 发动机冷却液温度",
      "B) 指令挡位或当前挡位状态PID",
      "C) 空气流量",
      "D) 氧传感器电压"
    ],
    answer: 1,
    explanation: "The commanded gear PID shows which gear the TCM is attempting to engage. Comparing this with the actual gear ratio calculated from input and output speed sensors helps diagnose whether the transmission is achieving the correct gear. If commanded and actual gears differ, a mechanical or hydraulic problem exists.",
    explanationChinese: "指令挡位PID显示TCM正试图接合哪个挡位。将此与从输入和输出速度传感器计算的实际齿轮比进行比较，有助于诊断变速箱是否达到了正确的挡位。如果指令挡位与实际挡位不同，则存在机械或液压问题。",
    diagram: "",
    terms: ["tcm", "scan_tool", "gear_ratio"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "Using Scan Tool for Transmission Diagnosis"
  },
  {
    id: 196,
    q: "What is the most likely cause of a whining noise from the transmission that increases in pitch with vehicle speed?",
    qChinese: "变速箱发出随车速增加而音调升高的啸叫声最可能的原因是什么？",
    options: [
      "A) A faulty radio",
      "B) Worn or damaged planetary gear set bearings or gear teeth",
      "C) A clogged cabin air filter",
      "D) Low windshield washer fluid"
    ],
    optionsChinese: [
      "A) 收音机故障",
      "B) 磨损或损坏的行星齿轮组轴承或齿轮齿",
      "C) 堵塞的车厢空气滤清器",
      "D) 挡风玻璃清洗液低"
    ],
    answer: 1,
    explanation: "A whining noise that increases in pitch with vehicle speed typically indicates worn bearings or damaged gear teeth in the planetary gear set or output shaft area. As the output shaft speed increases with vehicle speed, the frequency of the noise increases accordingly. This usually requires internal inspection and repair.",
    explanationChinese: "随车速增加而音调升高的啸叫声通常表明行星齿轮组或输出轴区域的轴承磨损或齿轮齿损坏。随着输出轴速度随车速增加，噪声频率相应增加。这通常需要内部检查和维修。",
    diagram: "",
    terms: ["planetary_gear_set"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=ARd-Om2VyiE",
    youtubeTitle: "Transmission Bearing Noise Diagnosis"
  },
  {
    id: 197,
    q: "Technician A says a worn servo bore in the transmission case can cause a band to not apply fully. Technician B says a worn servo bore can be repaired using an oversized servo piston. Who is correct?",
    qChinese: "技师A说变速箱壳体中磨损的伺服器孔会导致制动带无法完全接合。技师B说磨损的伺服器孔可以使用加大尺寸的伺服器活塞进行修复。谁是正确的？",
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
    explanation: "Both technicians are correct. A worn servo bore allows hydraulic fluid to leak past the piston seal, reducing the force applied to the band and causing slippage. Many aftermarket suppliers offer oversized servo pistons and seals that fit the worn bore, restoring proper sealing without replacing the entire case.",
    explanationChinese: "两位技师都是正确的。磨损的伺服器孔允许液压油从活塞密封件旁泄漏，减少施加到制动带的力并导致打滑。许多售后市场供应商提供适合磨损孔的加大尺寸伺服器活塞和密封件，恢复正确的密封而无需更换整个壳体。",
    diagram: "",
    terms: ["servo", "band", "line_pressure"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "Servo Bore Wear and Repair"
  },
  {
    id: 198,
    q: "What is the most common cause of automatic transmission external fluid leaks?",
    qChinese: "自动变速箱外部油液泄漏最常见的原因是什么？",
    options: [
      "A) Cracked transmission case",
      "B) Worn or damaged seals, gaskets, and O-rings",
      "C) Overfilled engine oil",
      "D) A faulty catalytic converter"
    ],
    optionsChinese: [
      "A) 变速箱壳体破裂",
      "B) 磨损或损坏的密封件、垫片和O形圈",
      "C) 发动机油加注过量",
      "D) 三元催化器故障"
    ],
    answer: 1,
    explanation: "The most common sources of external transmission leaks are worn or deteriorated seals, gaskets, and O-rings. Common leak points include the pan gasket, front pump seal, rear output shaft seal, cooler line fittings, and electrical connector seals. Heat cycling and age cause these components to harden and lose their sealing ability.",
    explanationChinese: "外部变速箱泄漏最常见的来源是磨损或劣化的密封件、垫片和O形圈。常见泄漏点包括油底壳垫片、前油泵密封、后输出轴密封、冷却管路接头和电气接头密封。热循环和老化导致这些部件硬化并失去密封能力。",
    diagram: "",
    terms: ["transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Finding Transmission Leaks"
  },
  {
    id: 199,
    q: "What is the result of not properly seating the transmission filter during installation?",
    qChinese: "变速箱滤清器在安装过程中未正确安装到位会产生什么结果？",
    options: [
      "A) Improved fluid flow",
      "B) An air leak at the filter seal that causes the pump to cavitate, lose pressure, and produce a whining noise",
      "C) Increased line pressure",
      "D) Better fuel economy"
    ],
    optionsChinese: [
      "A) 改善油液流量",
      "B) 滤清器密封处的空气泄漏导致油泵气蚀、失压和产生啸叫噪声",
      "C) 增加主油压",
      "D) 更好的燃油经济性"
    ],
    answer: 1,
    explanation: "If the filter is not properly seated, an air leak occurs at the filter-to-pump seal. The pump draws in air along with fluid, causing cavitation and aeration. This results in a whining noise from the pump, low and erratic line pressure, foamy fluid, and potential slipping or delayed shifts throughout the transmission.",
    explanationChinese: "如果滤清器未正确安装到位，滤清器到油泵密封处会发生空气泄漏。油泵连同油液一起吸入空气，导致气蚀和充气。这导致油泵发出啸叫噪声、主油压低且不稳定、油液起泡以及整个变速箱可能出现打滑或换挡延迟。",
    diagram: "",
    terms: ["transmission_fluid", "line_pressure"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=fRPHIDSYLi4",
    youtubeTitle: "Transmission Filter Installation"
  },
  {
    id: 200,
    q: "Technician A says the TCM must be reprogrammed or have its adaptive values reset after a transmission replacement. Technician B says the old adaptive values will work fine with the new transmission. Who is correct?",
    qChinese: "技师A说在更换变速箱后必须重新编程TCM或重置其自适应值。技师B说旧的自适应值对新变速箱同样适用。谁是正确的？",
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
    explanation: "Technician A is correct. The TCM adaptive values were learned based on the wear characteristics of the old transmission. A new or rebuilt transmission has different friction and clearance characteristics. If the old adaptive values are not reset, the TCM will apply incorrect pressures, causing harsh or soft shifts until it relearns.",
    explanationChinese: "技师A是正确的。TCM自适应值是根据旧变速箱的磨损特性学习的。新的或重建的变速箱具有不同的摩擦和间隙特性。如果不重置旧的自适应值，TCM将施加不正确的压力，导致在重新学习之前换挡生硬或无力。",
    diagram: "",
    terms: ["tcm", "shift_solenoid", "clutch_pack"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Automatic_transmission.jpg/640px-Automatic_transmission.jpg",
    youtube: "https://www.youtube.com/watch?v=gpBtQozOkA8",
    youtubeTitle: "TCM Reset After Transmission Replacement"
  }
];
