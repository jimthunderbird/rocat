const questionsA5 = [
  // ===== HYDRAULIC / POWER ASSIST / PARKING BRAKE (Questions 1-43) =====
  {
    id: 1,
    q: "A brake pedal gradually sinks to the floor while steady pressure is applied at a stoplight. What is the MOST likely cause?",
    options: [
      "A) Worn brake pads",
      "B) Internal master cylinder bypass leak",
      "C) A sticking caliper slide pin",
      "D) Air in the brake lines"
    ],
    answer: 1,
    explanation: "A sinking pedal under steady pressure indicates fluid is bypassing the internal seals of the master cylinder. External leaks would show fluid loss, worn pads cause a low but firm pedal, and air causes a spongy pedal. Internal bypass is the classic cause of a slowly sinking pedal.",
    diagram: "",
    terms: ["master_cylinder", "brake_fluid", "brake_caliper"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "How the Master Cylinder Works",
    qChinese: "在红灯处持续踩住制动踏板时，踏板逐渐下沉到底。最可能的原因是什么？",
    optionsChinese: [
      "A) 制动片磨损",
      "B) 主缸内部密封泄漏（内漏）",
      "C) 制动钳滑销卡滞",
      "D) 制动管路中有空气"
    ],
    explanationChinese: "在持续施压下踏板下沉，说明制动液正在绕过主缸内部密封件泄漏。外部泄漏会表现为液量减少，制动片磨损会导致踏板低但仍有硬度，空气会导致踏板发软。内部旁通泄漏是踏板缓慢下沉的经典原因。"
  },
  {
    id: 2,
    q: "Technician A says DOT 3 and DOT 4 brake fluids are glycol-based and hygroscopic. Technician B says DOT 5 silicone fluid can be mixed with DOT 3 fluid. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "DOT 3 and DOT 4 are glycol-based fluids that absorb moisture from the atmosphere, making them hygroscopic. DOT 5 is silicone-based and must never be mixed with glycol-based fluids as it causes seal damage and spongy brake feel. Only Technician A is correct.",
    diagram: "",
    terms: ["brake_fluid", "master_cylinder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "Brake Fluid Types and Maintenance",
    qChinese: "技师A说DOT 3和DOT 4制动液是乙二醇基的，具有吸湿性。技师B说DOT 5硅基制动液可以与DOT 3制动液混合使用。谁说得对？",
    optionsChinese: [
      "A) 只有技师A正确",
      "B) 只有技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "DOT 3和DOT 4是乙二醇基制动液，会从大气中吸收水分，具有吸湿性。DOT 5是硅基制动液，绝不能与乙二醇基制动液混合，否则会导致密封件损坏和制动踏板发软。只有技师A正确。"
  },
  {
    id: 3,
    q: "During manual brake bleeding, what is the correct sequence for most rear-wheel-drive vehicles with a split diagonal hydraulic system?",
    options: [
      "A) Right rear, left rear, right front, left front",
      "B) Left rear, right rear, left front, right front",
      "C) Right rear, left front, left rear, right front",
      "D) Start at the wheel closest to the master cylinder first"
    ],
    answer: 2,
    explanation: "A split diagonal system pairs each front wheel with the opposite rear wheel. The correct bleeding order starts at the wheel farthest from the master cylinder and works closer. For most vehicles this is right rear, left front, left rear, right front to ensure all air is removed.",
    diagram: "",
    terms: ["brake_bleeding", "master_cylinder", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=n1NvtMiPYQs",
    youtubeTitle: "How to Bleed Brakes Properly",
    qChinese: "在手动排气制动系统时，大多数后轮驱动且采用对角分路液压系统的车辆，正确的排气顺序是什么？",
    optionsChinese: [
      "A) 右后、左后、右前、左前",
      "B) 左后、右后、左前、右前",
      "C) 右后、左前、左后、右前",
      "D) 从最靠近主缸的车轮开始"
    ],
    explanationChinese: "对角分路系统将每个前轮与对侧后轮配对。正确的排气顺序是从距离主缸最远的车轮开始，逐渐靠近。对于大多数车辆，顺序为右后、左前、左后、右前，以确保排出所有空气。"
  },
  {
    id: 4,
    q: "A vehicle has a low spongy brake pedal. The brake fluid level is full and there are no visible leaks. What is the MOST likely cause?",
    options: [
      "A) Worn brake linings",
      "B) Air trapped in the hydraulic system",
      "C) A faulty proportioning valve",
      "D) Glazed brake pads"
    ],
    answer: 1,
    explanation: "A spongy pedal with full fluid and no leaks strongly indicates air trapped in the hydraulic system. Air is compressible unlike brake fluid, so when the pedal is applied the air compresses before fluid pressure builds. Bleeding the system removes trapped air and restores firm pedal feel.",
    diagram: "",
    terms: ["brake_bleeding", "brake_fluid", "master_cylinder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=n1NvtMiPYQs",
    youtubeTitle: "How to Bleed Brakes Properly",
    qChinese: "车辆制动踏板低且发软。制动液液位正常，没有可见泄漏。最可能的原因是什么？",
    optionsChinese: [
      "A) 制动衬片磨损",
      "B) 液压系统中有空气",
      "C) 比例阀故障",
      "D) 制动片表面釉化"
    ],
    explanationChinese: "液位正常且无泄漏的情况下踏板发软，强烈指示液压系统中有空气。空气是可压缩的，与制动液不同，因此踩踏板时空气先被压缩，然后才能建立液压。对系统排气可去除空气并恢复踏板硬度。"
  },
  {
    id: 5,
    q: "Which component splits the hydraulic brake system into two independent circuits for safety?",
    options: [
      "A) Proportioning valve",
      "B) Metering valve",
      "C) Dual-piston master cylinder",
      "D) Brake pressure differential switch"
    ],
    answer: 2,
    explanation: "A dual-piston master cylinder divides the brake system into two independent hydraulic circuits. If one circuit fails, the other still provides braking. The proportioning valve adjusts front-to-rear bias, the metering valve delays front disc application, and the differential switch triggers the warning light.",
    diagram: "",
    terms: ["master_cylinder", "proportioning_valve", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "How the Master Cylinder Works",
    qChinese: "哪个部件将液压制动系统分成两个独立的回路以确保安全？",
    optionsChinese: [
      "A) 比例阀",
      "B) 计量阀",
      "C) 双活塞主缸",
      "D) 制动压力差动开关"
    ],
    explanationChinese: "双活塞主缸将制动系统分为两个独立的液压回路。如果一个回路失效，另一个仍可提供制动力。比例阀调节前后制动力分配，计量阀延迟前盘式制动的施加，差动开关触发警告灯。"
  },
  {
    id: 6,
    q: "Technician A says a brake line with external corrosion and flaking should be replaced. Technician B says copper-nickel (CuNi) brake tubing is more corrosion-resistant than plain steel tubing. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Corroded and flaking brake lines are structurally weakened and can burst under pressure, so they must be replaced. Copper-nickel alloy tubing resists corrosion far better than standard steel and is easier to bend and flare. Both technicians are correct in their statements.",
    diagram: "",
    terms: ["brake_fluid", "brake_inspection", "master_cylinder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "Brake Fluid Types and Maintenance",
    qChinese: "技师A说外部腐蚀和起皮的制动管路应当更换。技师B说铜镍合金（CuNi）制动管比普通钢管更耐腐蚀。谁说得对？",
    optionsChinese: [
      "A) 只有技师A正确",
      "B) 只有技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "腐蚀和起皮的制动管路结构已被削弱，可能在压力下爆裂，因此必须更换。铜镍合金管的耐腐蚀性远优于标准钢管，且更容易弯曲和扩口。两位技师的说法都是正确的。"
  },
  {
    id: 7,
    q: "What type of flare is required on most domestic vehicle brake lines?",
    options: [
      "A) Single flare",
      "B) Double inverted flare",
      "C) Compression fitting",
      "D) Bubble flare (ISO flare)"
    ],
    answer: 1,
    explanation: "Most domestic vehicles use a double inverted flare, also called a double flare, on brake tubing. This type provides a strong, leak-free seal that can withstand high hydraulic pressure. Single flares are not approved for brake systems. Bubble or ISO flares are used on many import vehicles.",
    diagram: "",
    terms: ["brake_fluid", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "Brake Fluid Types and Maintenance",
    qChinese: "大多数美国国产车辆的制动管路需要使用哪种扩口类型？",
    optionsChinese: [
      "A) 单层扩口",
      "B) 双层内翻扩口",
      "C) 压缩接头",
      "D) 泡形扩口（ISO扩口）"
    ],
    explanationChinese: "大多数美国国产车辆在制动管路上使用双层内翻扩口，也称双层扩口。这种扩口提供牢固、无泄漏的密封，能够承受高液压压力。单层扩口不被批准用于制动系统。泡形扩口或ISO扩口用于许多进口车辆。"
  },
  {
    id: 8,
    q: "A vehicle pulls to one side during braking. All of the following could cause this EXCEPT:",
    options: [
      "A) A restricted brake hose on the pulling side",
      "B) Contaminated brake lining on one side",
      "C) A seized caliper piston on the side the vehicle pulls toward",
      "D) A low master cylinder fluid level"
    ],
    answer: 3,
    explanation: "A low master cylinder fluid level affects both circuits equally and would not cause a pull to one side. A restricted hose can trap pressure, contaminated lining reduces friction on one side, and a seized caliper causes uneven braking force. All create side-to-side imbalance except low fluid level.",
    diagram: "",
    terms: ["brake_caliper", "master_cylinder", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Brake System Diagnosis Basics",
    qChinese: "车辆制动时向一侧偏移。以下所有原因都可能导致此问题，除了：",
    optionsChinese: [
      "A) 偏移侧的制动软管受阻",
      "B) 一侧制动衬片被污染",
      "C) 车辆偏移侧的制动钳活塞卡死",
      "D) 主缸制动液液位低"
    ],
    explanationChinese: "主缸制动液液位低会同时影响两个回路，不会导致向一侧偏移。受阻的软管会截留压力，被污染的衬片会降低一侧的摩擦力，卡死的制动钳会造成不均匀的制动力。除了液位低，其他都会造成左右不平衡。"
  },
  {
    id: 9,
    q: "What does the brake pedal height adjustment primarily affect?",
    options: [
      "A) Power booster vacuum reserve",
      "B) Master cylinder pushrod free play",
      "C) Proportioning valve bias",
      "D) ABS modulator response time"
    ],
    answer: 1,
    explanation: "Brake pedal height directly affects the free play between the brake pedal pushrod and the master cylinder piston. Too little free play can keep the master cylinder compensating port blocked, causing brake drag. Too much free play results in excessive pedal travel before brakes engage.",
    diagram: "",
    terms: ["master_cylinder", "brake_booster"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "How the Master Cylinder Works",
    qChinese: "制动踏板高度调整主要影响什么？",
    optionsChinese: [
      "A) 助力器真空储备",
      "B) 主缸推杆自由间隙",
      "C) 比例阀偏置",
      "D) ABS调节器响应时间"
    ],
    explanationChinese: "制动踏板高度直接影响制动踏板推杆与主缸活塞之间的自由间隙。自由间隙太小会使主缸补偿孔被堵塞，导致制动拖滞。自由间隙太大会导致踏板行程过长才能制动。"
  },
  {
    id: 10,
    q: "Technician A says a vacuum brake booster uses engine intake manifold vacuum to assist braking. Technician B says a failed brake booster will cause a hard brake pedal. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Vacuum brake boosters use engine intake manifold vacuum to amplify the driver's pedal force. When the booster fails or loses its vacuum supply, the driver must provide all braking force manually, resulting in a hard, difficult-to-press pedal. Both technicians are correct.",
    diagram: "",
    terms: ["brake_booster", "master_cylinder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "Power Brake Booster Explained",
    qChinese: "技师A说真空制动助力器利用发动机进气歧管真空来辅助制动。技师B说制动助力器失效会导致制动踏板变硬。谁说得对？",
    optionsChinese: [
      "A) 只有技师A正确",
      "B) 只有技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "真空制动助力器利用发动机进气歧管真空来放大驾驶员的踏板力。当助力器失效或真空供应中断时，驾驶员必须完全靠自身力量制动，导致踏板变硬、难以踩下。两位技师都是正确的。"
  },
  {
    id: 11,
    q: "A vehicle equipped with a vacuum brake booster has a hissing noise when the brake pedal is applied. What is the MOST likely cause?",
    options: [
      "A) Worn brake pads",
      "B) A leaking vacuum booster diaphragm",
      "C) A faulty master cylinder",
      "D) Low brake fluid level"
    ],
    answer: 1,
    explanation: "A hissing noise during brake application points to a vacuum leak in the brake booster, typically from a torn or ruptured diaphragm. Vacuum escapes through the damaged diaphragm causing the hiss. This also leads to a hard pedal and may cause a rough engine idle.",
    diagram: "",
    terms: ["brake_booster", "master_cylinder", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "Power Brake Booster Explained",
    qChinese: "配备真空制动助力器的车辆在踩制动踏板时发出嘶嘶声。最可能的原因是什么？",
    optionsChinese: [
      "A) 制动片磨损",
      "B) 真空助力器膜片泄漏",
      "C) 主缸故障",
      "D) 制动液液位低"
    ],
    explanationChinese: "制动时发出嘶嘶声指向真空助力器的真空泄漏，通常是膜片撕裂或破损造成的。真空通过破损的膜片逸出产生嘶嘶声。这也会导致踏板变硬，还可能导致发动机怠速不稳。"
  },
  {
    id: 12,
    q: "When checking vacuum booster operation, what is the minimum vacuum reserve typically needed for at least one or two power-assisted stops with the engine off?",
    options: [
      "A) 5 inches Hg",
      "B) 10 inches Hg",
      "C) 15 inches Hg",
      "D) 20 inches Hg"
    ],
    answer: 2,
    explanation: "A properly functioning vacuum booster should hold at least 15 inches of mercury vacuum reserve. This stored vacuum allows one or two power-assisted brake applications after the engine is shut off. If vacuum drops quickly, the booster has an internal leak in the diaphragm or check valve.",
    diagram: "",
    terms: ["brake_booster", "vacuum_gauge"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "Power Brake Booster Explained",
    qChinese: "检查真空助力器工作状况时，在发动机熄火后至少需要多少真空储备才能提供一到两次助力制动？",
    optionsChinese: [
      "A) 5英寸汞柱",
      "B) 10英寸汞柱",
      "C) 15英寸汞柱",
      "D) 20英寸汞柱"
    ],
    explanationChinese: "正常工作的真空助力器应至少保持15英寸汞柱的真空储备。这些储存的真空可在发动机熄火后提供一到两次助力制动。如果真空迅速下降，说明助力器膜片或单向阀存在内部泄漏。"
  },
  {
    id: 13,
    q: "What is the function of the one-way check valve in a vacuum brake booster system?",
    options: [
      "A) To regulate brake fluid flow direction",
      "B) To maintain vacuum in the booster when the engine is off or vacuum drops",
      "C) To prevent brake fluid from entering the booster",
      "D) To limit maximum brake line pressure"
    ],
    answer: 1,
    explanation: "The one-way check valve at the vacuum hose connection to the booster traps vacuum inside the booster chamber. When the engine stops or vacuum drops during acceleration, the check valve closes to maintain stored vacuum for one or two additional power-assisted brake applications.",
    diagram: "",
    terms: ["brake_booster", "vacuum_gauge"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "Power Brake Booster Explained",
    qChinese: "真空制动助力器系统中单向阀的功能是什么？",
    optionsChinese: [
      "A) 调节制动液流向",
      "B) 在发动机熄火或真空下降时维持助力器内的真空",
      "C) 防止制动液进入助力器",
      "D) 限制最大制动管路压力"
    ],
    explanationChinese: "位于真空软管与助力器连接处的单向阀将真空封存在助力器腔内。当发动机停止或加速时真空下降，单向阀关闭以维持储存的真空，用于一到两次额外的助力制动。"
  },
  {
    id: 14,
    q: "A hydro-boost power brake system uses what as its source of power assist?",
    options: [
      "A) Engine intake manifold vacuum",
      "B) Electric vacuum pump",
      "C) Power steering pump hydraulic pressure",
      "D) A dedicated electric motor"
    ],
    answer: 2,
    explanation: "Hydro-boost systems use hydraulic pressure from the power steering pump to assist braking. They are commonly used on diesel engines and large vehicles that do not produce sufficient vacuum. The system includes a hydraulic accumulator for reserve pressure if the engine stalls or the pump fails.",
    diagram: "",
    terms: ["brake_booster", "power_steering_pump", "master_cylinder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "Power Brake Booster Explained",
    qChinese: "液压助力制动系统使用什么作为助力源？",
    optionsChinese: [
      "A) 发动机进气歧管真空",
      "B) 电动真空泵",
      "C) 转向助力泵液压压力",
      "D) 专用电动马达"
    ],
    explanationChinese: "液压助力系统使用转向助力泵的液压压力来辅助制动。它们常用于柴油发动机和不能产生足够真空的大型车辆。该系统包含一个液压蓄压器，在发动机熄火或泵失效时提供备用压力。"
  },
  {
    id: 15,
    q: "Technician A says a hydro-boost unit has an accumulator to provide reserve braking if the power steering pump fails. Technician B says a hydro-boost system should be diagnosed by checking power steering pump pressure and flow. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "The hydro-boost accumulator stores pressurized fluid to provide several power-assisted stops if the power steering pump fails. Since the system depends on power steering pump pressure, diagnosing hydro-boost problems requires checking pump output pressure and flow rate. Both technicians are correct.",
    diagram: "",
    terms: ["brake_booster", "power_steering_pump"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "Power Brake Booster Explained",
    qChinese: "技师A说液压助力装置有蓄压器，在转向助力泵失效时提供备用制动。技师B说液压助力系统应通过检查转向助力泵压力和流量来诊断。谁说得对？",
    optionsChinese: [
      "A) 只有技师A正确",
      "B) 只有技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "液压助力蓄压器储存加压液体，在转向助力泵失效时提供数次助力制动。由于系统依赖转向助力泵压力，诊断液压助力问题需要检查泵的输出压力和流量。两位技师都是正确的。"
  },
  {
    id: 16,
    q: "The parking brake on a rear disc brake system typically operates by what mechanism?",
    options: [
      "A) Hydraulic pressure from the master cylinder",
      "B) A small drum brake assembly inside the rotor hat or a caliper-integrated mechanical actuator",
      "C) An electronically controlled solenoid in each caliper",
      "D) The ABS hydraulic control unit"
    ],
    answer: 1,
    explanation: "Most rear disc brake parking brakes use either a small drum-in-hat brake assembly integrated into the rear rotor or a mechanical actuator built into the caliper. These are mechanically engaged by the parking brake cable and are separate from the hydraulic service brakes.",
    diagram: "",
    terms: ["parking_brake", "brake_caliper", "brake_rotor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Drum_brake.svg/640px-Drum_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=PEI16pGxG0w",
    youtubeTitle: "Parking Brake System Explained",
    qChinese: "后盘式制动系统的驻车制动通常通过什么机构工作？",
    optionsChinese: [
      "A) 来自主缸的液压压力",
      "B) 集成在制动盘帽内的小型鼓式制动器或制动钳内置的机械执行器",
      "C) 每个制动钳中的电控电磁阀",
      "D) ABS液压控制单元"
    ],
    explanationChinese: "大多数后盘式制动器的驻车制动使用集成在后制动盘内的小型鼓中盘式制动组件，或制动钳内置的机械执行器。这些由驻车制动拉索机械驱动，与液压制动系统分开工作。"
  },
  {
    id: 17,
    q: "A vehicle's red brake warning light on the dash stays illuminated. All of the following could cause this EXCEPT:",
    options: [
      "A) The parking brake is partially engaged",
      "B) Brake fluid level is low in the master cylinder reservoir",
      "C) There is a pressure differential between the two hydraulic circuits",
      "D) The brake pads have more than 50 percent lining remaining"
    ],
    answer: 3,
    explanation: "Brake pads with over 50 percent lining remaining would not trigger the warning light. The red brake light illuminates for a partially engaged parking brake, low fluid level in the reservoir, or a hydraulic circuit pressure differential detected by the brake pressure differential switch.",
    diagram: "",
    terms: ["parking_brake", "master_cylinder", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Brake System Diagnosis Basics",
    qChinese: "仪表盘上的红色制动警告灯持续亮起。以下所有原因都可能导致此问题，除了：",
    optionsChinese: [
      "A) 驻车制动未完全释放",
      "B) 主缸储液壶制动液液位低",
      "C) 两个液压回路之间存在压力差",
      "D) 制动片剩余摩擦材料超过50%"
    ],
    explanationChinese: "制动片剩余摩擦材料超过50%不会触发警告灯。红色制动灯会因驻车制动未完全释放、储液壶液位低或制动压力差动开关检测到液压回路压力不平衡而亮起。"
  },
  {
    id: 18,
    q: "What is the purpose of the compensating port in a master cylinder?",
    options: [
      "A) To provide fluid to the power booster",
      "B) To allow fluid to return to the reservoir when the brakes are released",
      "C) To meter pressure to the rear brakes",
      "D) To provide ABS modulator fluid supply"
    ],
    answer: 1,
    explanation: "The compensating port allows brake fluid to flow back to the reservoir when the brake pedal is released. This relieves residual pressure and prevents brake drag. If the port is blocked by an improperly adjusted pushrod, the brakes will not fully release and the pads will drag.",
    diagram: "",
    terms: ["master_cylinder", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "How the Master Cylinder Works",
    qChinese: "主缸中补偿孔的作用是什么？",
    optionsChinese: [
      "A) 为助力器提供制动液",
      "B) 在释放制动时允许制动液回流到储液壶",
      "C) 调节后制动器的压力",
      "D) 为ABS调节器提供制动液"
    ],
    explanationChinese: "补偿孔允许制动液在释放制动踏板时回流到储液壶。这可以释放残余压力，防止制动拖滞。如果补偿孔被调整不当的推杆堵塞，制动器将无法完全释放，导致制动片拖滞。"
  },
  {
    id: 19,
    q: "Technician A says bench bleeding a new master cylinder before installation removes air from the internal passages. Technician B says a master cylinder that has not been bench bled can cause a spongy brake pedal. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Bench bleeding forces fluid through the master cylinder and expels trapped air from the internal passages and bore before installation. If this step is skipped, air remains trapped inside the master cylinder making it very difficult to bleed out later, causing a spongy pedal feel.",
    diagram: "",
    terms: ["master_cylinder", "brake_bleeding", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "How the Master Cylinder Works",
    qChinese: "技师A说安装前在台上对新主缸进行排气可以排除内部通道中的空气。技师B说未经台上排气的主缸会导致制动踏板发软。谁说得对？",
    optionsChinese: [
      "A) 只有技师A正确",
      "B) 只有技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "台上排气是在安装前将制动液压入主缸，排出内部通道和缸孔中的空气。如果跳过此步骤，空气会残留在主缸内部，之后很难排出，导致踏板发软。"
  },
  {
    id: 20,
    q: "When pressure bleeding a brake system, what pressure range is typically used?",
    options: [
      "A) 5 to 10 psi",
      "B) 15 to 25 psi",
      "C) 50 to 75 psi",
      "D) 100 to 150 psi"
    ],
    answer: 1,
    explanation: "Pressure bleeding equipment typically uses 15 to 25 psi to push fluid through the system. This pressure is high enough to force fluid and air bubbles out through the bleeder screws but low enough to avoid damaging seals or blowing the cap off the master cylinder reservoir.",
    diagram: "",
    terms: ["brake_bleeding", "brake_fluid", "master_cylinder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=n1NvtMiPYQs",
    youtubeTitle: "How to Bleed Brakes Properly",
    qChinese: "压力排气制动系统时，通常使用什么压力范围？",
    optionsChinese: [
      "A) 5至10 psi",
      "B) 15至25 psi",
      "C) 50至75 psi",
      "D) 100至150 psi"
    ],
    explanationChinese: "压力排气设备通常使用15至25 psi将制动液压入系统。此压力足以将制动液和气泡从放气螺栓排出，但又不会高到损坏密封件或使储液壶盖脱落。"
  },
  {
    id: 21,
    q: "A proportioning valve in the brake system is designed to:",
    options: [
      "A) Increase fluid pressure to the front brakes",
      "B) Reduce fluid pressure to the rear brakes during hard stops",
      "C) Delay front disc brake application",
      "D) Split the hydraulic system into two circuits"
    ],
    answer: 1,
    explanation: "The proportioning valve reduces hydraulic pressure to the rear brakes during hard braking. During heavy deceleration, weight transfers to the front wheels and the rear wheels can lock up easily. The proportioning valve limits rear brake pressure to prevent premature rear wheel lockup.",
    diagram: "",
    terms: ["proportioning_valve", "brake_fluid", "brake_drum"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Brake System Diagnosis Basics",
    qChinese: "制动系统中的比例阀设计用于：",
    optionsChinese: [
      "A) 增加前制动器的液压压力",
      "B) 在急刹车时降低后制动器的液压压力",
      "C) 延迟前盘式制动器的施加",
      "D) 将液压系统分成两个回路"
    ],
    explanationChinese: "比例阀在急刹车时降低后制动器的液压压力。在剧烈减速时，重量转移到前轮，后轮容易抱死。比例阀限制后制动压力，防止后轮过早抱死。"
  },
  {
    id: 22,
    q: "A customer complains of rear wheel lockup during moderate braking on wet roads. What is the MOST likely cause?",
    options: [
      "A) A sticking front caliper",
      "B) A faulty proportioning valve allowing too much rear brake pressure",
      "C) Worn front brake pads",
      "D) A leaking rear wheel cylinder"
    ],
    answer: 1,
    explanation: "Premature rear wheel lockup during moderate braking indicates too much hydraulic pressure reaching the rear brakes. A faulty proportioning valve that fails to limit rear pressure is the most likely cause. A sticking caliper or worn front pads would cause front brake issues, not rear lockup.",
    diagram: "",
    terms: ["proportioning_valve", "wheel_cylinder", "abs"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Brake System Diagnosis Basics",
    qChinese: "客户抱怨在湿滑路面中等制动时后轮抱死。最可能的原因是什么？",
    optionsChinese: [
      "A) 前制动钳卡滞",
      "B) 比例阀故障，允许过多的后制动压力",
      "C) 前制动片磨损",
      "D) 后轮缸泄漏"
    ],
    explanationChinese: "中等制动时后轮过早抱死表明有过多的液压压力到达后制动器。比例阀故障未能限制后制动压力是最可能的原因。制动钳卡滞或前制动片磨损会导致前制动问题，而非后轮抱死。"
  },
  {
    id: 23,
    q: "What is the purpose of the metering valve in a front disc/rear drum brake system?",
    options: [
      "A) To reduce rear brake pressure under hard braking",
      "B) To delay front disc brake application until rear drum shoes contact the drum",
      "C) To increase overall brake line pressure",
      "D) To activate the ABS system"
    ],
    answer: 1,
    explanation: "The metering valve slightly delays front disc brake application to allow rear drum brake shoes to overcome return spring pressure and contact the drum first. This ensures balanced front-to-rear braking during light stops and prevents the front brakes from doing all the work initially.",
    diagram: "",
    terms: ["brake_drum", "brake_rotor", "proportioning_valve"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Drum_brake.svg/640px-Drum_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=PEI16pGxG0w",
    youtubeTitle: "How Drum Brakes Work",
    qChinese: "在前盘后鼓制动系统中，计量阀的作用是什么？",
    optionsChinese: [
      "A) 在急刹车时降低后制动压力",
      "B) 延迟前盘式制动器的施加，直到后鼓式制动蹄接触制动鼓",
      "C) 增加整体制动管路压力",
      "D) 激活ABS系统"
    ],
    explanationChinese: "计量阀稍微延迟前盘式制动器的施加，以便后鼓式制动蹄先克服回位弹簧力并接触制动鼓。这确保了轻制动时前后制动平衡，防止前制动器在初始阶段承担所有制动力。"
  },
  {
    id: 24,
    q: "A brake pedal feels firm but requires excessive travel before the brakes engage. What is the MOST likely cause?",
    options: [
      "A) Air in the hydraulic system",
      "B) Excessive brake shoe-to-drum clearance or worn pads",
      "C) A failed brake booster",
      "D) A plugged brake line"
    ],
    answer: 1,
    explanation: "Excessive pedal travel with a firm feel indicates too much clearance between the friction material and the rotor or drum. This is commonly caused by worn pads, misadjusted drum brakes, or improperly functioning self-adjusters. Air would cause a spongy feel and a failed booster causes a hard pedal.",
    diagram: "",
    terms: ["brake_drum", "brake_inspection", "master_cylinder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Drum_brake.svg/640px-Drum_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Brake System Diagnosis Basics",
    qChinese: "制动踏板感觉坚实但需要过多行程才能制动。最可能的原因是什么？",
    optionsChinese: [
      "A) 液压系统中有空气",
      "B) 制动蹄与鼓之间间隙过大或制动片磨损",
      "C) 制动助力器故障",
      "D) 制动管路堵塞"
    ],
    explanationChinese: "踏板行程过大但感觉坚实，说明摩擦材料与制动盘或鼓之间的间隙过大。常见原因是制动片磨损、鼓式制动调整不当或自调整器工作不正常。空气会导致踏板发软，助力器故障会导致踏板变硬。"
  },
  {
    id: 25,
    q: "Which type of brake fluid has the highest dry boiling point?",
    options: [
      "A) DOT 3",
      "B) DOT 4",
      "C) DOT 5",
      "D) DOT 5.1"
    ],
    answer: 3,
    explanation: "DOT 5.1 has the highest dry boiling point at approximately 500 degrees Fahrenheit or higher. Despite the similar numbering, DOT 5.1 is glycol-based like DOT 3 and DOT 4, not silicone-based like DOT 5. It is compatible with DOT 3 and DOT 4 systems and offers superior heat resistance.",
    diagram: "",
    terms: ["brake_fluid", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "Brake Fluid Types and Maintenance",
    qChinese: "哪种制动液的干沸点最高？",
    optionsChinese: [
      "A) DOT 3",
      "B) DOT 4",
      "C) DOT 5",
      "D) DOT 5.1"
    ],
    explanationChinese: "DOT 5.1的干沸点最高，约为500华氏度或更高。尽管编号相似，DOT 5.1与DOT 3和DOT 4一样是乙二醇基的，而非DOT 5那样的硅基。它与DOT 3和DOT 4系统兼容，并提供更优异的耐热性。"
  },
  {
    id: 26,
    q: "Technician A says brake fluid should be tested with a refractometer to determine its moisture content. Technician B says contaminated brake fluid can lower the boiling point and cause vapor lock. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "A refractometer can measure the boiling point of brake fluid by analyzing its moisture content. Moisture-contaminated brake fluid has a significantly reduced boiling point, which can lead to vapor lock during heavy braking when the fluid boils and creates compressible gas bubbles. Both are correct.",
    diagram: "",
    terms: ["brake_fluid", "brake_inspection", "coolant_flush"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "Brake Fluid Types and Maintenance",
    qChinese: "技师A说应使用折光仪测试制动液的含水量。技师B说被污染的制动液会降低沸点并导致气阻。谁说得对？",
    optionsChinese: [
      "A) 只有技师A正确",
      "B) 只有技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "折光仪可以通过分析制动液的含水量来测量其沸点。含水的制动液沸点显著降低，在剧烈制动时制动液可能沸腾产生可压缩的气泡，导致气阻。两位技师都是正确的。"
  },
  {
    id: 27,
    q: "A combination valve typically includes which of the following components?",
    options: [
      "A) Metering valve, proportioning valve, and pressure differential switch",
      "B) Proportioning valve, ABS modulator, and check valve",
      "C) Master cylinder, booster, and pushrod",
      "D) Metering valve, vacuum check valve, and bleeder screw"
    ],
    answer: 0,
    explanation: "A combination valve integrates three functions into one unit: a metering valve to delay front disc brake application, a proportioning valve to limit rear brake pressure, and a pressure differential switch to activate the brake warning light if one hydraulic circuit fails.",
    diagram: "",
    terms: ["proportioning_valve", "master_cylinder", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Brake System Diagnosis Basics",
    qChinese: "组合阀通常包括以下哪些部件？",
    optionsChinese: [
      "A) 计量阀、比例阀和压力差动开关",
      "B) 比例阀、ABS调节器和单向阀",
      "C) 主缸、助力器和推杆",
      "D) 计量阀、真空单向阀和放气螺栓"
    ],
    explanationChinese: "组合阀将三个功能集成在一个装置中：计量阀用于延迟前盘式制动器的施加，比例阀用于限制后制动压力，压力差动开关用于在一个液压回路失效时激活制动警告灯。"
  },
  {
    id: 28,
    q: "When replacing a flexible brake hose, what should be inspected before installation?",
    options: [
      "A) The hose length, fittings, and routing for kinks or contact with suspension components",
      "B) Only the bleeder screw condition",
      "C) The ABS sensor gap",
      "D) The parking brake cable adjustment"
    ],
    answer: 0,
    explanation: "Before installing a new brake hose, verify the correct length and fitting type match the original. Check the routing path to ensure the hose will not kink, stretch, or contact suspension or steering components during full steering lock and suspension travel to prevent damage and failure.",
    diagram: "",
    terms: ["brake_inspection", "brake_fluid", "brake_caliper"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Brake System Diagnosis Basics",
    qChinese: "更换柔性制动软管时，安装前应检查什么？",
    optionsChinese: [
      "A) 软管长度、接头和走向，检查是否有弯折或与悬挂部件接触",
      "B) 仅检查放气螺栓状况",
      "C) ABS传感器间隙",
      "D) 驻车制动拉索调整"
    ],
    explanationChinese: "安装新制动软管前，要验证正确的长度和接头类型与原件匹配。检查走向路径，确保软管在方向盘打到底和悬挂全行程时不会弯折、拉伸或接触悬挂和转向部件，以防止损坏和故障。"
  },
  {
    id: 29,
    q: "An internally swollen brake hose can cause which symptom?",
    options: [
      "A) Brake pedal vibration during stopping",
      "B) The brake on that wheel drags or the vehicle pulls to one side",
      "C) The ABS light to illuminate",
      "D) Excessive pedal free play"
    ],
    answer: 1,
    explanation: "An internally swollen brake hose acts like a check valve. It allows pressure to reach the caliper during pedal application but restricts fluid from returning when released. This causes the brake to stay partially applied, resulting in drag or a pull toward the affected side.",
    diagram: "",
    terms: ["brake_caliper", "brake_fluid", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "How Disc Brakes Work",
    qChinese: "内部膨胀的制动软管会导致什么症状？",
    optionsChinese: [
      "A) 制动时踏板振动",
      "B) 该轮制动拖滞或车辆向一侧偏移",
      "C) ABS灯亮起",
      "D) 踏板自由间隙过大"
    ],
    explanationChinese: "内部膨胀的制动软管起到单向阀的作用。踩踏板时它允许压力到达制动钳，但释放时阻止制动液回流。这导致制动器保持部分施加状态，造成拖滞或车辆向受影响侧偏移。"
  },
  {
    id: 30,
    q: "What should a technician do FIRST before opening any bleeder screw during brake service?",
    options: [
      "A) Replace the master cylinder",
      "B) Apply penetrating oil to the bleeder screw and verify the reservoir is full",
      "C) Remove the wheel speed sensor",
      "D) Disconnect the battery"
    ],
    answer: 1,
    explanation: "Bleeder screws often seize from corrosion. Applying penetrating oil first helps prevent breaking the screw during removal. The master cylinder reservoir must be full before opening any bleeder to prevent drawing air into the system. These steps prevent complications during brake bleeding.",
    diagram: "",
    terms: ["brake_bleeding", "master_cylinder", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=n1NvtMiPYQs",
    youtubeTitle: "How to Bleed Brakes Properly",
    qChinese: "在制动维修中打开任何放气螺栓之前，技师应首先做什么？",
    optionsChinese: [
      "A) 更换主缸",
      "B) 在放气螺栓上喷渗透剂，并确认储液壶液位已满",
      "C) 拆除轮速传感器",
      "D) 断开蓄电池"
    ],
    explanationChinese: "放气螺栓经常因腐蚀而卡死。先喷渗透剂有助于防止拆卸时折断螺栓。打开任何放气螺栓前，主缸储液壶必须加满，以防止空气被吸入系统。这些步骤可防止排气过程中出现问题。"
  },
  {
    id: 31,
    q: "A vehicle's brake pedal slowly drops while holding steady pressure, but the fluid level in the reservoir does not change. What does this indicate?",
    options: [
      "A) An external brake line leak",
      "B) An external wheel cylinder leak",
      "C) An internal master cylinder seal leak (bypass)",
      "D) Worn brake pads"
    ],
    answer: 2,
    explanation: "A sinking pedal with no visible fluid loss and a stable reservoir level points to an internal master cylinder bypass. Fluid is leaking past worn internal cup seals from the high-pressure side to the low-pressure side within the bore, preventing pressure from being maintained.",
    diagram: "",
    terms: ["master_cylinder", "brake_fluid", "wheel_cylinder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "How the Master Cylinder Works",
    qChinese: "车辆的制动踏板在保持稳定压力时缓慢下沉，但储液壶中的液位没有变化。这说明什么？",
    optionsChinese: [
      "A) 外部制动管路泄漏",
      "B) 外部轮缸泄漏",
      "C) 主缸内部密封件泄漏（内漏）",
      "D) 制动片磨损"
    ],
    explanationChinese: "踏板下沉但无可见液量减少且储液壶液位稳定，说明主缸内部旁通泄漏。制动液从高压侧通过磨损的内部皮碗密封件泄漏到低压侧，导致无法维持压力。"
  },
  {
    id: 32,
    q: "Technician A says the master cylinder pushrod length affects pedal free play. Technician B says a pushrod that is too long can cause the brakes to drag. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "The master cylinder pushrod length directly determines pedal free play. If the pushrod is too long, it holds the master cylinder piston forward, blocking the compensating port. This prevents fluid from returning to the reservoir when brakes are released, causing brake drag. Both are correct.",
    diagram: "",
    terms: ["master_cylinder", "brake_booster", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "How the Master Cylinder Works",
    qChinese: "技师A说主缸推杆长度影响踏板自由间隙。技师B说推杆过长会导致制动拖滞。谁说得对？",
    optionsChinese: [
      "A) 只有技师A正确",
      "B) 只有技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "主缸推杆长度直接决定踏板自由间隙。如果推杆过长，会将主缸活塞向前推，堵塞补偿孔。这阻止制动液在释放制动时回流到储液壶，导致制动拖滞。两位技师都是正确的。"
  },
  {
    id: 33,
    q: "When gravity bleeding brakes, the bleeder screw is opened and fluid is allowed to:",
    options: [
      "A) Flow under power steering pump pressure",
      "B) Drain slowly by gravity with no pedal input while the reservoir is kept full",
      "C) Be pushed out by rapid brake pedal pumping",
      "D) Circulate through the ABS modulator at high pressure"
    ],
    answer: 1,
    explanation: "Gravity bleeding is the simplest method. The bleeder screw is opened and brake fluid flows downward by gravity alone without pressing the brake pedal. The reservoir must be kept full to prevent air from entering. This method is slow but effective and requires no special equipment.",
    diagram: "",
    terms: ["brake_bleeding", "brake_fluid", "master_cylinder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=n1NvtMiPYQs",
    youtubeTitle: "How to Bleed Brakes Properly",
    qChinese: "重力排气制动系统时，打开放气螺栓，制动液被允许：",
    optionsChinese: [
      "A) 在转向助力泵压力下流动",
      "B) 在不踩踏板的情况下靠重力缓慢排出，同时保持储液壶满液位",
      "C) 通过快速踩踏制动踏板推出",
      "D) 在高压下通过ABS调节器循环"
    ],
    explanationChinese: "重力排气是最简单的方法。打开放气螺栓，制动液仅靠重力向下流动，无需踩制动踏板。储液壶必须保持满液位以防止空气进入。此方法速度慢但有效，不需要特殊设备。"
  },
  {
    id: 34,
    q: "What component in the parking brake system automatically maintains proper cable tension on many vehicles?",
    options: [
      "A) The metering valve",
      "B) An automatic slack adjuster or self-adjusting mechanism at the equalizer",
      "C) The ABS control module",
      "D) The vacuum booster check valve"
    ],
    answer: 1,
    explanation: "Many vehicles use an automatic or self-adjusting mechanism at the parking brake equalizer or within the lever assembly to maintain proper cable tension as components wear. This ensures the parking brake remains effective without manual adjustment of the cable tension over time.",
    diagram: "",
    terms: ["parking_brake", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Drum_brake.svg/640px-Drum_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=PEI16pGxG0w",
    youtubeTitle: "Parking Brake System Explained",
    qChinese: "许多车辆的驻车制动系统中，哪个部件自动维持适当的拉索张力？",
    optionsChinese: [
      "A) 计量阀",
      "B) 均衡器处的自动松弛调节器或自调整机构",
      "C) ABS控制模块",
      "D) 真空助力器单向阀"
    ],
    explanationChinese: "许多车辆在驻车制动均衡器或手柄组件内使用自动或自调整机构来维持适当的拉索张力，随部件磨损自动补偿。这确保驻车制动在长期使用后仍然有效，无需手动调整拉索张力。"
  },
  {
    id: 35,
    q: "A customer complains that the parking brake will not hold on a hill. Which should be checked FIRST?",
    options: [
      "A) The vacuum brake booster",
      "B) Parking brake cable adjustment and rear brake lining condition",
      "C) The ABS hydraulic control unit",
      "D) The front brake pad thickness"
    ],
    answer: 1,
    explanation: "The most common causes of a parking brake that will not hold are a stretched or maladjusted parking brake cable and worn rear brake linings. These should be inspected first. The vacuum booster and ABS are unrelated to parking brake function. Front brakes do not contribute to parking brake hold.",
    diagram: "",
    terms: ["parking_brake", "brake_inspection", "brake_drum"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Drum_brake.svg/640px-Drum_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=PEI16pGxG0w",
    youtubeTitle: "Parking Brake System Explained",
    qChinese: "客户抱怨驻车制动在坡道上无法驻车。应首先检查什么？",
    optionsChinese: [
      "A) 真空制动助力器",
      "B) 驻车制动拉索调整和后制动衬片状况",
      "C) ABS液压控制单元",
      "D) 前制动片厚度"
    ],
    explanationChinese: "驻车制动无法驻车的最常见原因是驻车制动拉索伸长或调整不当以及后制动衬片磨损。应首先检查这些。真空助力器和ABS与驻车制动功能无关。前制动器不参与驻车制动。"
  },
  {
    id: 36,
    q: "Which of the following describes the correct method to test a vacuum brake booster for an internal vacuum leak?",
    options: [
      "A) Apply the brakes while monitoring ABS codes",
      "B) With the engine off, pump the brakes to exhaust reserve vacuum, then hold the pedal and start the engine to check for pedal drop",
      "C) Check power steering fluid level",
      "D) Measure brake pad thickness"
    ],
    answer: 1,
    explanation: "To test a vacuum booster, pump the brake pedal with the engine off to deplete vacuum reserve. Hold the pedal firmly and start the engine. If the booster is working, the pedal should drop slightly as vacuum assist engages. No pedal movement indicates a failed booster or vacuum supply issue.",
    diagram: "",
    terms: ["brake_booster", "vacuum_gauge", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "Power Brake Booster Explained",
    qChinese: "以下哪项描述了测试真空制动助力器内部真空泄漏的正确方法？",
    optionsChinese: [
      "A) 踩制动的同时监测ABS故障码",
      "B) 在发动机熄火状态下多次踩踏板耗尽真空储备，然后保持踏板并启动发动机检查踏板是否下沉",
      "C) 检查转向助力液液位",
      "D) 测量制动片厚度"
    ],
    explanationChinese: "测试真空助力器时，在发动机熄火状态下多次踩制动踏板以耗尽真空储备。然后紧踩踏板并启动发动机。如果助力器正常工作，踏板应在真空助力介入时略微下沉。踏板无变化说明助力器或真空供应有问题。"
  },
  {
    id: 37,
    q: "A vehicle's brake warning light comes on only during hard braking and then turns off. What is the MOST likely cause?",
    options: [
      "A) A faulty ABS module",
      "B) Low fluid level in the master cylinder reservoir that shifts during deceleration",
      "C) Worn front rotors",
      "D) A seized parking brake cable"
    ],
    answer: 1,
    explanation: "When brake fluid is slightly low, the fluid in the reservoir can shift forward during hard braking due to deceleration forces. This momentarily uncovers the fluid level sensor, triggering the brake warning light. When the vehicle levels out, fluid covers the sensor and the light turns off.",
    diagram: "",
    terms: ["master_cylinder", "brake_fluid", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "How the Master Cylinder Works",
    qChinese: "车辆的制动警告灯仅在急刹车时亮起，然后熄灭。最可能的原因是什么？",
    optionsChinese: [
      "A) ABS模块故障",
      "B) 主缸储液壶液位偏低，减速时液面晃动",
      "C) 前制动盘磨损",
      "D) 驻车制动拉索卡死"
    ],
    explanationChinese: "当制动液液位略低时，急刹车产生的减速力会使储液壶中的液面前移。这会暂时使液位传感器露出液面，触发制动警告灯。当车辆恢复水平时，液面覆盖传感器，灯熄灭。"
  },
  {
    id: 38,
    q: "All of the following are symptoms of a failed vacuum brake booster EXCEPT:",
    options: [
      "A) A hard brake pedal requiring excessive force",
      "B) A hissing sound when the brake pedal is pressed",
      "C) Engine idle speed changes when the brake is applied",
      "D) A spongy brake pedal with full pedal travel"
    ],
    answer: 3,
    explanation: "A spongy pedal indicates air in the hydraulic system, not a booster failure. A failed vacuum booster causes a hard pedal due to lack of assist, may hiss from a leaking diaphragm, and can cause engine idle issues because a vacuum leak affects manifold vacuum and the air-fuel mixture.",
    diagram: "",
    terms: ["brake_booster", "vacuum_gauge", "brake_bleeding"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "Power Brake Booster Explained",
    qChinese: "以下所有都是真空制动助力器失效的症状，除了：",
    optionsChinese: [
      "A) 制动踏板变硬，需要过大的力",
      "B) 踩制动踏板时发出嘶嘶声",
      "C) 踩制动时发动机怠速变化",
      "D) 制动踏板发软，行程到底"
    ],
    explanationChinese: "踏板发软表示液压系统中有空气，而非助力器故障。真空助力器失效会因缺少助力而导致踏板变硬，膜片泄漏会产生嘶嘶声，还会因真空泄漏影响进气歧管真空和空燃比而导致发动机怠速不稳。"
  },
  {
    id: 39,
    q: "Technician A says DOT 3 brake fluid can damage vehicle paint. Technician B says brake fluid containers should be kept tightly sealed to prevent moisture absorption. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Glycol-based brake fluids such as DOT 3 are corrosive to automotive paint and should be cleaned up immediately if spilled on painted surfaces. Because these fluids are hygroscopic, containers must be kept tightly sealed to prevent moisture absorption that lowers the boiling point. Both are correct.",
    diagram: "",
    terms: ["brake_fluid", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "Brake Fluid Types and Maintenance",
    qChinese: "技师A说DOT 3制动液会损坏车漆。技师B说制动液容器应保持密封以防止吸收水分。谁说得对？",
    optionsChinese: [
      "A) 只有技师A正确",
      "B) 只有技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "乙二醇基制动液如DOT 3对汽车漆面有腐蚀性，溅到漆面应立即清理。由于这些液体具有吸湿性，容器必须密封保存以防止吸收水分降低沸点。两位技师都是正确的。"
  },
  {
    id: 40,
    q: "What is the primary purpose of the residual pressure check valve in a drum brake hydraulic circuit?",
    options: [
      "A) To boost vacuum to the power brake booster",
      "B) To maintain a small residual pressure to keep wheel cylinder cups sealed against the pistons",
      "C) To increase pressure to the front brakes",
      "D) To actuate the ABS warning light"
    ],
    answer: 1,
    explanation: "The residual pressure check valve maintains a slight pressure of about 6 to 10 psi in the drum brake lines after the pedal is released. This small pressure keeps the wheel cylinder cup seals firmly seated against the pistons, preventing air from entering past the seals.",
    diagram: "",
    terms: ["wheel_cylinder", "brake_drum", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Drum_brake.svg/640px-Drum_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=PEI16pGxG0w",
    youtubeTitle: "How Drum Brakes Work",
    qChinese: "鼓式制动液压回路中残余压力单向阀的主要用途是什么？",
    optionsChinese: [
      "A) 为助力器增加真空",
      "B) 维持少量残余压力以保持轮缸皮碗密封在活塞上",
      "C) 增加前制动器压力",
      "D) 触发ABS警告灯"
    ],
    explanationChinese: "残余压力单向阀在释放踏板后维持鼓式制动管路中约6至10 psi的轻微压力。这个小压力使轮缸皮碗密封件紧贴活塞，防止空气从密封件处进入。"
  },
  {
    id: 41,
    q: "A vehicle requires excessive pedal effort to stop, and the engine runs rough when the brakes are applied. Which component is MOST likely at fault?",
    options: [
      "A) Master cylinder",
      "B) Vacuum brake booster with a large internal leak",
      "C) Caliper slide pins",
      "D) Proportioning valve"
    ],
    answer: 1,
    explanation: "A vacuum booster with a large internal leak causes two symptoms simultaneously. The lack of vacuum assist requires excessive pedal effort. The vacuum leak also allows unmetered air into the engine intake manifold through the booster, causing the engine to run rough or stall.",
    diagram: "",
    terms: ["brake_booster", "vacuum_gauge", "master_cylinder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "Power Brake Booster Explained",
    qChinese: "车辆需要过大的踏板力才能停车，且踩制动时发动机运转不平稳。最可能是哪个部件有问题？",
    optionsChinese: [
      "A) 主缸",
      "B) 有严重内部泄漏的真空制动助力器",
      "C) 制动钳滑销",
      "D) 比例阀"
    ],
    explanationChinese: "有严重内部泄漏的真空助力器会同时产生两种症状。缺少真空助力需要过大的踏板力。真空泄漏还会使未计量的空气通过助力器进入发动机进气歧管，导致发动机运转不平稳或熄火。"
  },
  {
    id: 42,
    q: "During brake inspection, the technician finds dark, discolored brake fluid. What service should be recommended?",
    options: [
      "A) Add fresh fluid to the reservoir only",
      "B) A complete brake fluid flush and replacement",
      "C) Replace the master cylinder immediately",
      "D) No service is needed"
    ],
    answer: 1,
    explanation: "Dark or discolored brake fluid indicates contamination from moisture absorption, degraded rubber seals, or oxidation. A complete brake fluid flush replaces all old fluid throughout the system with fresh fluid. Simply topping off mixes contaminated fluid with new fluid and does not address the problem.",
    diagram: "",
    terms: ["brake_fluid", "brake_inspection", "coolant_flush"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "Brake Fluid Types and Maintenance",
    qChinese: "在制动检查中，技师发现制动液颜色深暗变色。应建议什么服务？",
    optionsChinese: [
      "A) 仅向储液壶添加新液",
      "B) 完全冲洗并更换制动液",
      "C) 立即更换主缸",
      "D) 不需要维护"
    ],
    explanationChinese: "制动液变深或变色表示因吸收水分、橡胶密封件降解或氧化造成的污染。完全冲洗制动液可将整个系统中的旧液更换为新液。仅补充液位会将污染液与新液混合，无法解决问题。"
  },
  {
    id: 43,
    q: "The brake pressure differential switch activates the red brake warning light when:",
    options: [
      "A) The ignition is turned on for a bulb check",
      "B) There is an unequal pressure between the two hydraulic circuits indicating a leak",
      "C) The parking brake is fully released",
      "D) The brake pads reach the minimum thickness"
    ],
    answer: 1,
    explanation: "The pressure differential switch is located in the combination valve or brake line junction. It senses a pressure difference between the two hydraulic circuits. When one circuit loses pressure from a leak, the resulting imbalance pushes the switch shuttle to one side, grounding the warning light circuit.",
    diagram: "",
    terms: ["master_cylinder", "proportioning_valve", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Brake System Diagnosis Basics",
    qChinese: "制动压力差动开关在什么情况下激活红色制动警告灯？",
    optionsChinese: [
      "A) 打开点火开关进行灯泡检查时",
      "B) 两个液压回路之间存在不等压力，表示有泄漏",
      "C) 驻车制动完全释放时",
      "D) 制动片达到最小厚度时"
    ],
    explanationChinese: "压力差动开关位于组合阀或制动管路接头处。它感应两个液压回路之间的压力差。当一个回路因泄漏失压时，产生的不平衡将开关梭阀推向一侧，接通警告灯电路。"
  },

  // ===== DRUM BRAKE (Questions 44-54) =====
  {
    id: 44,
    q: "When inspecting a brake drum, the technician measures the inside diameter and finds it exceeds the maximum diameter specification cast into the drum. What action should be taken?",
    options: [
      "A) Machine the drum to smooth the surface",
      "B) Replace the drum because it is beyond the discard specification",
      "C) Install oversize brake shoes",
      "D) Apply brake cleaner and reuse the drum"
    ],
    answer: 1,
    explanation: "Every brake drum has a maximum diameter specification cast or stamped on it. If the measured diameter exceeds this limit, the drum walls are too thin to safely dissipate heat and could crack or fail. The drum must be replaced. Machining would make it even thinner and more dangerous.",
    diagram: "",
    terms: ["brake_drum", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Drum_brake.svg/640px-Drum_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=PEI16pGxG0w",
    youtubeTitle: "How Drum Brakes Work",
    qChinese: "检查制动鼓时，技师测量内径发现超过了铸在鼓上的最大直径规格。应采取什么措施？",
    optionsChinese: [
      "A) 在车床上加工制动鼓以平滑表面",
      "B) 更换制动鼓，因为已超过报废规格",
      "C) 安装加大尺寸的制动蹄",
      "D) 喷制动清洁剂后继续使用"
    ],
    explanationChinese: "每个制动鼓都有铸刻或冲压的最大直径规格。如果测量直径超过此限值，鼓壁太薄无法安全散热，可能开裂或失效。必须更换制动鼓。加工会使其更薄更危险。"
  },
  {
    id: 45,
    q: "Technician A says the leading shoe in a leading-trailing drum brake does more work and wears faster. Technician B says the self-energizing effect causes the leading shoe to be pulled into the drum during forward braking. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "In a leading-trailing drum brake, the leading shoe's friction against the rotating drum pulls it tighter into the drum surface, a self-energizing effect. This causes the leading shoe to generate more friction force and therefore wear faster than the trailing shoe. Both technicians are correct.",
    diagram: "",
    terms: ["brake_drum", "wheel_cylinder", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Drum_brake.svg/640px-Drum_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=PEI16pGxG0w",
    youtubeTitle: "How Drum Brakes Work",
    qChinese: "技师A说在领从蹄式鼓式制动器中，领蹄做更多的工作且磨损更快。技师B说自增力效应使领蹄在前进制动时被拉入制动鼓。谁说得对？",
    optionsChinese: [
      "A) 只有技师A正确",
      "B) 只有技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "在领从蹄式鼓式制动器中，领蹄与旋转制动鼓之间的摩擦力将其拉得更紧贴鼓面，这就是自增力效应。这使领蹄产生更大的摩擦力，因此比从蹄磨损更快。两位技师都是正确的。"
  },
  {
    id: 46,
    q: "A drum brake self-adjuster mechanism is designed to:",
    options: [
      "A) Adjust the parking brake cable tension",
      "B) Automatically maintain proper shoe-to-drum clearance as linings wear",
      "C) Control rear brake fluid pressure",
      "D) Activate the brake warning light when shoes are worn"
    ],
    answer: 1,
    explanation: "Self-adjusters automatically take up the increasing clearance between the brake shoes and drum as the linings wear down. Most activate during reverse braking or when the parking brake is applied. They extend the star wheel or strut to push the shoes closer to the drum surface.",
    diagram: "",
    terms: ["brake_drum", "parking_brake", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Drum_brake.svg/640px-Drum_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=PEI16pGxG0w",
    youtubeTitle: "How Drum Brakes Work",
    qChinese: "鼓式制动自调整机构设计用于：",
    optionsChinese: [
      "A) 调整驻车制动拉索张力",
      "B) 随衬片磨损自动维持蹄与鼓之间的适当间隙",
      "C) 控制后制动液压压力",
      "D) 在制动蹄磨损时激活制动警告灯"
    ],
    explanationChinese: "自调整器随制动蹄衬片磨损自动补偿增大的间隙。大多数在倒车制动或拉驻车制动时激活。它们通过伸展星轮或支撑杆将制动蹄推向更靠近制动鼓表面的位置。"
  },
  {
    id: 47,
    q: "During a drum brake inspection, the technician notices one wheel cylinder has brake fluid seeping around the dust boot. What is the correct action?",
    options: [
      "A) Wipe the fluid off and recheck in 1,000 miles",
      "B) Replace or rebuild the wheel cylinder",
      "C) Add brake fluid to the reservoir and continue",
      "D) Replace only the dust boot"
    ],
    answer: 1,
    explanation: "Any fluid seepage from a wheel cylinder indicates failed internal seals. The wheel cylinder must be replaced or rebuilt. Fluid leakage onto the brake shoe linings contaminates the friction material, reduces braking effectiveness, and the leak will worsen over time if not corrected.",
    diagram: "",
    terms: ["wheel_cylinder", "brake_drum", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Drum_brake.svg/640px-Drum_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=PEI16pGxG0w",
    youtubeTitle: "How Drum Brakes Work",
    qChinese: "在鼓式制动检查中，技师发现一个轮缸的防尘套周围有制动液渗出。正确的做法是什么？",
    optionsChinese: [
      "A) 擦掉液体，1000英里后重新检查",
      "B) 更换或修复轮缸",
      "C) 向储液壶添加制动液后继续使用",
      "D) 仅更换防尘套"
    ],
    explanationChinese: "轮缸有任何液体渗出都说明内部密封件已失效。必须更换或修复轮缸。泄漏到制动蹄衬片上的液体会污染摩擦材料，降低制动效果，且泄漏会随时间恶化。"
  },
  {
    id: 48,
    q: "What is the purpose of the return springs in a drum brake assembly?",
    options: [
      "A) To apply the brake shoes to the drum",
      "B) To pull the brake shoes away from the drum when the brake pedal is released",
      "C) To adjust the shoe-to-drum clearance",
      "D) To hold the wheel cylinder in place"
    ],
    answer: 1,
    explanation: "Return springs retract the brake shoes away from the drum surface when hydraulic pressure is released. Without properly functioning return springs, the shoes would remain in contact with the drum, causing brake drag, excessive heat, premature lining wear, and reduced fuel economy.",
    diagram: "",
    terms: ["brake_drum", "wheel_cylinder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Drum_brake.svg/640px-Drum_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=PEI16pGxG0w",
    youtubeTitle: "How Drum Brakes Work",
    qChinese: "鼓式制动器总成中回位弹簧的作用是什么？",
    optionsChinese: [
      "A) 将制动蹄压向制动鼓",
      "B) 在释放制动踏板时将制动蹄拉离制动鼓",
      "C) 调整蹄与鼓之间的间隙",
      "D) 固定轮缸"
    ],
    explanationChinese: "回位弹簧在液压压力释放后将制动蹄从制动鼓表面拉回。如果回位弹簧功能不正常，制动蹄会保持与制动鼓接触，导致制动拖滞、过热、衬片过早磨损和燃油经济性下降。"
  },
  {
    id: 49,
    q: "Technician A says brake shoe return springs should be replaced any time the drum brakes are serviced. Technician B says stretched return springs can cause brake drag. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "It is recommended practice to replace return springs during drum brake service because heat and age weaken them. Stretched or weak return springs cannot fully retract the shoes from the drum, causing the shoes to drag against the drum surface and overheat. Both technicians are correct.",
    diagram: "",
    terms: ["brake_drum", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Drum_brake.svg/640px-Drum_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=PEI16pGxG0w",
    youtubeTitle: "How Drum Brakes Work",
    qChinese: "技师A说鼓式制动器回位弹簧在每次保养时都应更换。技师B说拉伸的回位弹簧会导致制动拖滞。谁说得对？",
    optionsChinese: [
      "A) 只有技师A正确",
      "B) 只有技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "建议在鼓式制动维修时更换回位弹簧，因为高温和老化会使其变弱。拉伸或变弱的回位弹簧无法将制动蹄完全从鼓面拉回，导致制动蹄拖滞在鼓面上并过热。两位技师都是正确的。"
  },
  {
    id: 50,
    q: "A backing plate in a drum brake assembly serves what primary function?",
    options: [
      "A) It provides a mounting surface for the brake shoes, wheel cylinder, and related hardware",
      "B) It increases hydraulic pressure",
      "C) It cools the brake drum",
      "D) It adjusts the parking brake cable"
    ],
    answer: 0,
    explanation: "The backing plate is a stamped steel plate bolted to the axle flange or spindle. It provides the mounting platform for the brake shoes, wheel cylinder, self-adjuster, return springs, and hold-down hardware. It also acts as a dust and debris shield for the internal drum brake components.",
    diagram: "",
    terms: ["brake_drum", "wheel_cylinder", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Drum_brake.svg/640px-Drum_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=PEI16pGxG0w",
    youtubeTitle: "How Drum Brakes Work",
    qChinese: "鼓式制动器总成中底板的主要功能是什么？",
    optionsChinese: [
      "A) 为制动蹄、轮缸和相关五金件提供安装面",
      "B) 增加液压压力",
      "C) 冷却制动鼓",
      "D) 调整驻车制动拉索"
    ],
    explanationChinese: "底板是一块冲压钢板，用螺栓固定在车桥法兰或转向节上。它为制动蹄、轮缸、自调整器、回位弹簧和固定五金件提供安装平台。它还充当内部鼓式制动部件的防尘防碎屑挡板。"
  },
  {
    id: 51,
    q: "When machining a brake drum on a lathe, what should the technician check after the cut is completed?",
    options: [
      "A) The ABS sensor gap",
      "B) That the final diameter does not exceed the maximum specification and the surface finish is within spec",
      "C) Power steering fluid level",
      "D) Tire pressure"
    ],
    answer: 1,
    explanation: "After machining a brake drum, the technician must verify the final inside diameter is still within the maximum allowable specification. Additionally the surface finish must meet the required roughness specification, typically 60 to 125 microinches, to ensure proper brake shoe contact and quiet operation.",
    diagram: "",
    terms: ["brake_drum", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Drum_brake.svg/640px-Drum_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=PEI16pGxG0w",
    youtubeTitle: "How Drum Brakes Work",
    qChinese: "在车床上加工制动鼓后，技师完成切削后应检查什么？",
    optionsChinese: [
      "A) ABS传感器间隙",
      "B) 最终直径未超过最大规格且表面光洁度符合规范",
      "C) 转向助力液液位",
      "D) 轮胎气压"
    ],
    explanationChinese: "加工制动鼓后，技师必须验证最终内径仍在最大允许规格范围内。此外，表面光洁度必须符合规定的粗糙度规格，通常为60至125微英寸，以确保制动蹄正常接触和安静运行。"
  },
  {
    id: 52,
    q: "A scraping noise is heard from a rear drum brake only when the brakes are not applied. What is the MOST likely cause?",
    options: [
      "A) A defective wheel bearing",
      "B) A broken hold-down spring allowing the shoe to contact the drum",
      "C) A faulty ABS sensor",
      "D) A clogged proportioning valve"
    ],
    answer: 1,
    explanation: "A broken hold-down spring allows the brake shoe to move out of position on the backing plate. The misaligned shoe can intermittently scrape against the inside of the rotating drum even when brakes are not applied. Applying the brakes may temporarily silence the noise as shoes seat properly.",
    diagram: "",
    terms: ["brake_drum", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Drum_brake.svg/640px-Drum_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=PEI16pGxG0w",
    youtubeTitle: "How Drum Brakes Work",
    qChinese: "后鼓式制动器仅在未踩制动时发出刮擦声。最可能的原因是什么？",
    optionsChinese: [
      "A) 轮轴承损坏",
      "B) 固定弹簧断裂导致制动蹄接触制动鼓",
      "C) ABS传感器故障",
      "D) 比例阀堵塞"
    ],
    explanationChinese: "固定弹簧断裂会让制动蹄在底板上移位。错位的制动蹄即使在未施加制动时也会间歇性地刮擦旋转的制动鼓内壁。踩制动可能暂时消除噪音，因为制动蹄此时正确就位。"
  },
  {
    id: 53,
    q: "All of the following are signs of an out-of-round brake drum EXCEPT:",
    options: [
      "A) Pulsation felt in the brake pedal at low speeds",
      "B) A rhythmic grabbing sensation from the rear brakes",
      "C) Uneven shoe lining wear patterns",
      "D) A constantly illuminated ABS warning light"
    ],
    answer: 3,
    explanation: "An out-of-round drum has an inconsistent diameter that causes pulsation, grabbing, and uneven shoe wear as the high and low spots contact the shoes unevenly. A constantly illuminated ABS light is caused by an electronic or sensor fault, not by mechanical drum distortion.",
    diagram: "",
    terms: ["brake_drum", "abs", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Drum_brake.svg/640px-Drum_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=PEI16pGxG0w",
    youtubeTitle: "How Drum Brakes Work",
    qChinese: "以下所有都是制动鼓失圆的迹象，除了：",
    optionsChinese: [
      "A) 低速时制动踏板感到脉动",
      "B) 后制动器有节奏的抓滞感",
      "C) 蹄片衬片磨损不均匀",
      "D) ABS警告灯持续亮起"
    ],
    explanationChinese: "失圆的制动鼓直径不一致，高点和低点与蹄片不均匀接触，导致脉动、抓滞和衬片磨损不均。ABS警告灯持续亮起是电子或传感器故障引起的，而非制动鼓机械变形。"
  },
  {
    id: 54,
    q: "Technician A says drum brake shoe hold-down springs keep the shoes flat against the backing plate. Technician B says missing hold-down springs can cause noise and uneven lining wear. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Hold-down springs press the brake shoes flat against the backing plate so the shoes remain properly aligned. Without them, the shoes can tilt, wobble, or shift, causing noise from uneven drum contact and uneven lining wear because only part of the shoe contacts the drum surface. Both are correct.",
    diagram: "",
    terms: ["brake_drum", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Drum_brake.svg/640px-Drum_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=PEI16pGxG0w",
    youtubeTitle: "How Drum Brakes Work",
    qChinese: "技师A说鼓式制动器固定弹簧使制动蹄平贴在底板上。技师B说缺少固定弹簧会导致噪音和衬片磨损不均。谁说得对？",
    optionsChinese: [
      "A) 只有技师A正确",
      "B) 只有技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "固定弹簧将制动蹄压平贴在底板上，使制动蹄保持正确对齐。没有固定弹簧，制动蹄会倾斜、晃动或移位，因仅部分蹄片接触制动鼓而产生噪音和衬片磨损不均。两位技师都是正确的。"
  },

  // ===== DISC BRAKE (Questions 55-78) =====
  {
    id: 55,
    q: "A vehicle has a brake pulsation felt in the steering wheel during braking. What is the MOST likely cause?",
    options: [
      "A) Worn rear brake shoes",
      "B) Excessive front rotor lateral runout or thickness variation",
      "C) A faulty proportioning valve",
      "D) Low brake fluid"
    ],
    answer: 1,
    explanation: "Brake pulsation felt through the steering wheel indicates a front rotor problem. Excessive lateral runout or rotor thickness variation causes uneven pad contact during rotation. This creates a pulsating force that transmits through the steering linkage. Rear brake issues are typically felt in the pedal only.",
    diagram: "",
    terms: ["brake_rotor", "brake_caliper", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Brake Rotor Inspection and Service",
    qChinese: "车辆制动时方向盘有脉动感。最可能的原因是什么？",
    optionsChinese: [
      "A) 后制动蹄磨损",
      "B) 前制动盘端面跳动过大或厚度差异",
      "C) 比例阀故障",
      "D) 制动液液位低"
    ],
    explanationChinese: "通过方向盘感受到的制动脉动表明前制动盘有问题。端面跳动过大或制动盘厚度差异导致制动片在旋转时接触不均匀。这产生通过转向机构传递到方向盘的脉动力。后制动问题通常仅在踏板上感受到。"
  },
  {
    id: 56,
    q: "What is the maximum allowable rotor thickness variation (parallelism) for most vehicles?",
    options: [
      "A) 0.005 inch (0.127 mm)",
      "B) 0.0005 inch (0.013 mm)",
      "C) 0.050 inch (1.27 mm)",
      "D) 0.100 inch (2.54 mm)"
    ],
    answer: 1,
    explanation: "Most manufacturers specify a maximum rotor thickness variation of 0.0005 inch or 0.5 thousandths. This is measured by taking micrometer readings at multiple points around the rotor. Variation beyond this tolerance causes pedal pulsation during braking and uneven pad wear patterns.",
    diagram: "",
    terms: ["brake_rotor", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Brake Rotor Inspection and Service",
    qChinese: "大多数车辆允许的最大制动盘厚度差异（平行度）是多少？",
    optionsChinese: [
      "A) 0.005英寸（0.127毫米）",
      "B) 0.0005英寸（0.013毫米）",
      "C) 0.050英寸（1.27毫米）",
      "D) 0.100英寸（2.54毫米）"
    ],
    explanationChinese: "大多数制造商规定最大制动盘厚度差异为0.0005英寸或0.5千分之一英寸。通过在制动盘周围多个点用千分尺测量。超过此公差的差异会导致制动时踏板脉动和制动片磨损不均。"
  },
  {
    id: 57,
    q: "Rotor lateral runout is measured using what tool?",
    options: [
      "A) An outside micrometer",
      "B) A dial indicator mounted on a fixed base",
      "C) A brake drum gauge",
      "D) A tire pressure gauge"
    ],
    answer: 1,
    explanation: "Lateral runout is the side-to-side wobble of a rotor as it rotates. It is measured with a dial indicator mounted on a stable base positioned against the rotor braking surface. The rotor is rotated one full turn and the total indicator reading represents the lateral runout.",
    diagram: "",
    terms: ["brake_rotor", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Brake Rotor Inspection and Service",
    qChinese: "制动盘端面跳动使用什么工具测量？",
    optionsChinese: [
      "A) 外径千分尺",
      "B) 安装在固定底座上的百分表",
      "C) 制动鼓量具",
      "D) 轮胎气压表"
    ],
    explanationChinese: "端面跳动是制动盘旋转时的左右摆动。使用安装在稳固底座上的百分表，将其抵在制动盘制动面上测量。旋转制动盘一整圈，指示器的总读数即为端面跳动量。"
  },
  {
    id: 58,
    q: "Technician A says a floating caliper slides on pins or bushings to center itself over the rotor. Technician B says a fixed caliper has pistons on both sides of the rotor. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "A floating caliper has a piston on only one side and slides on guide pins or bushings to apply pressure to both pads evenly. A fixed caliper is rigidly mounted and uses pistons on both the inboard and outboard sides of the rotor to clamp the pads. Both technicians are correct.",
    diagram: "",
    terms: ["brake_caliper", "brake_rotor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "How Disc Brakes Work",
    qChinese: "技师A说浮动制动钳在滑销或衬套上滑动以自动对中在制动盘上。技师B说固定制动钳在制动盘两侧都有活塞。谁说得对？",
    optionsChinese: [
      "A) 只有技师A正确",
      "B) 只有技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "浮动制动钳仅在一侧有活塞，通过导向销或衬套滑动，将压力均匀施加在两块制动片上。固定制动钳刚性安装，使用制动盘内外两侧的活塞来夹紧制动片。两位技师都是正确的。"
  },
  {
    id: 59,
    q: "A vehicle with a floating caliper pulls to one side during braking. Inspection reveals the caliper slides are seized with corrosion. What is the correct repair?",
    options: [
      "A) Replace the master cylinder",
      "B) Clean, lubricate, or replace the caliper slide pins and bushings",
      "C) Replace the ABS module",
      "D) Adjust the parking brake cable"
    ],
    answer: 1,
    explanation: "Seized caliper slide pins prevent the floating caliper from sliding freely and centering over the rotor. This causes uneven pad application and a pull during braking. The correct repair is to remove the pins, clean off all corrosion, inspect for damage, and lubricate with proper brake grease.",
    diagram: "",
    terms: ["brake_caliper", "brake_rotor", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "How Disc Brakes Work",
    qChinese: "配备浮动制动钳的车辆制动时向一侧偏移。检查发现制动钳滑销因腐蚀而卡死。正确的维修是什么？",
    optionsChinese: [
      "A) 更换主缸",
      "B) 清洁、润滑或更换制动钳滑销和衬套",
      "C) 更换ABS模块",
      "D) 调整驻车制动拉索"
    ],
    explanationChinese: "卡死的制动钳滑销阻止浮动制动钳自由滑动和对中在制动盘上。这导致制动片施压不均匀，制动时偏移。正确的维修是拆下滑销，清除所有腐蚀，检查损坏情况，并用适当的制动润滑脂润滑。"
  },
  {
    id: 60,
    q: "What type of lubricant should be used on caliper slide pins?",
    options: [
      "A) Engine oil",
      "B) White lithium grease",
      "C) Silicone-based or synthetic brake caliper grease rated for high temperature",
      "D) Wheel bearing grease"
    ],
    answer: 2,
    explanation: "Caliper slide pins require a high-temperature synthetic or silicone-based brake caliper grease specifically designed for this application. Petroleum-based greases can damage rubber boots and bushings. The lubricant must withstand brake temperatures without melting, drying out, or breaking down.",
    diagram: "",
    terms: ["brake_caliper", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "How Disc Brakes Work",
    qChinese: "制动钳滑销应使用什么类型的润滑脂？",
    optionsChinese: [
      "A) 发动机机油",
      "B) 白色锂基润滑脂",
      "C) 耐高温的硅基或合成制动钳专用润滑脂",
      "D) 轮轴承润滑脂"
    ],
    explanationChinese: "制动钳滑销需要专门为此用途设计的耐高温合成或硅基制动钳润滑脂。石油基润滑脂会损坏橡胶防尘套和衬套。润滑脂必须能承受制动温度而不会熔化、干燥或分解。"
  },
  {
    id: 61,
    q: "Technician A says disc brake pads should be replaced when the friction material reaches the minimum thickness specified by the manufacturer. Technician B says disc brakes are self-adjusting because the caliper piston moves out as pads wear. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Pads must be replaced at the manufacturer's minimum thickness to maintain safe braking. Disc brakes are inherently self-adjusting because the caliper piston automatically extends farther from the bore as the pads wear thinner, keeping the pads close to the rotor surface. Both are correct.",
    diagram: "",
    terms: ["brake_caliper", "brake_rotor", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "How Disc Brakes Work",
    qChinese: "技师A说盘式制动片应在摩擦材料达到制造商规定的最小厚度时更换。技师B说盘式制动器是自调整的，因为制动钳活塞随制动片磨损自动伸出。谁说得对？",
    optionsChinese: [
      "A) 只有技师A正确",
      "B) 只有技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "制动片必须在制造商规定的最小厚度时更换以维持安全制动。盘式制动器本身具有自调整功能，因为制动钳活塞随制动片变薄而自动从缸孔伸出更远，保持制动片靠近制动盘表面。两位技师都是正确的。"
  },
  {
    id: 62,
    q: "A rotor is measured with a micrometer and the thickness is below the minimum thickness specification stamped on the rotor. What should the technician do?",
    options: [
      "A) Machine the rotor to improve the surface",
      "B) Replace the rotor because it is below the discard thickness",
      "C) Install thicker brake pads to compensate",
      "D) Continue using the rotor if there is no pulsation"
    ],
    answer: 1,
    explanation: "The minimum thickness specification is the discard dimension. A rotor below this thickness does not have enough material to safely absorb and dissipate braking heat. It can crack, warp, or fail during hard braking. The rotor must be replaced. Machining would remove even more material.",
    diagram: "",
    terms: ["brake_rotor", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Brake Rotor Inspection and Service",
    qChinese: "用千分尺测量制动盘厚度，发现低于刻在制动盘上的最小厚度规格。技师应怎么做？",
    optionsChinese: [
      "A) 加工制动盘以改善表面",
      "B) 更换制动盘，因为已低于报废厚度",
      "C) 安装更厚的制动片来补偿",
      "D) 如果没有脉动就继续使用"
    ],
    explanationChinese: "最小厚度规格就是报废尺寸。低于此厚度的制动盘没有足够的材料安全吸收和散发制动热量，可能在急刹车时开裂、变形或失效。必须更换制动盘。加工会去除更多材料。"
  },
  {
    id: 63,
    q: "When machining a rotor on a brake lathe, what is the minimum thickness the rotor must remain above after the cut?",
    options: [
      "A) The discard (minimum) thickness specification",
      "B) The nominal (original) thickness",
      "C) The machine-to (refinishing) thickness specification",
      "D) Any thickness as long as the surface is smooth"
    ],
    answer: 2,
    explanation: "After machining, the rotor must remain above the machine-to or refinishing specification, which is thicker than the minimum discard dimension. This ensures enough material remains for normal pad wear before reaching the discard thickness. Machining to exactly the discard limit leaves no wear margin.",
    diagram: "",
    terms: ["brake_rotor", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Brake Rotor Inspection and Service",
    qChinese: "在制动车床上加工制动盘时，切削后制动盘必须保持在什么最小厚度以上？",
    optionsChinese: [
      "A) 报废（最小）厚度规格",
      "B) 标称（原始）厚度",
      "C) 可加工（翻新）厚度规格",
      "D) 只要表面光滑即可，不限厚度"
    ],
    explanationChinese: "加工后，制动盘必须保持在可加工或翻新厚度规格以上，该规格比最小报废尺寸更厚。这确保在正常制动片磨损达到报废厚度之前还有足够的材料余量。加工到恰好报废限值不留磨损余量。"
  },
  {
    id: 64,
    q: "What is the MOST common cause of a disc brake squeal noise?",
    options: [
      "A) Low brake fluid",
      "B) Pad vibration against the rotor surface due to lack of dampening or anti-rattle hardware",
      "C) A faulty ABS wheel speed sensor",
      "D) A worn parking brake cable"
    ],
    answer: 1,
    explanation: "Disc brake squeal is typically caused by high-frequency vibration of the brake pad against the rotor. Missing or damaged anti-rattle clips, shims, or pad insulators allow the pad to vibrate. Proper hardware installation, pad surface preparation, and brake grease on pad backing plates reduce squeal.",
    diagram: "",
    terms: ["brake_caliper", "brake_rotor", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "How Disc Brakes Work",
    qChinese: "盘式制动器尖叫噪音最常见的原因是什么？",
    optionsChinese: [
      "A) 制动液液位低",
      "B) 由于缺少减振或防响卡子，制动片在制动盘表面振动",
      "C) ABS轮速传感器故障",
      "D) 驻车制动拉索磨损"
    ],
    explanationChinese: "盘式制动器尖叫通常由制动片在制动盘上高频振动引起。缺少或损坏的防响卡子、垫片或隔音片允许制动片振动。正确安装五金件、制动片表面处理和在制动片背板上涂抹制动润滑脂可减少尖叫。"
  },
  {
    id: 65,
    q: "All of the following help reduce disc brake squeal EXCEPT:",
    options: [
      "A) Applying brake caliper grease to the back of the pad backing plate",
      "B) Installing anti-rattle clips and pad shims",
      "C) Machining the rotor with a non-directional finish",
      "D) Increasing brake line pressure with a larger master cylinder"
    ],
    answer: 3,
    explanation: "Increasing brake line pressure does not address the vibration that causes squeal. Brake grease on the pad backing plate dampens vibration, anti-rattle clips and shims prevent pad movement, and a non-directional rotor finish breaks up the pattern that can excite pad resonance and produce squeal.",
    diagram: "",
    terms: ["brake_caliper", "brake_rotor", "master_cylinder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "How Disc Brakes Work",
    qChinese: "以下所有都有助于减少盘式制动器尖叫，除了：",
    optionsChinese: [
      "A) 在制动片背板上涂抹制动钳润滑脂",
      "B) 安装防响卡子和制动片垫片",
      "C) 加工制动盘后进行无方向性打磨",
      "D) 用更大的主缸增加制动管路压力"
    ],
    explanationChinese: "增加制动管路压力不能解决导致尖叫的振动问题。制动片背板上的润滑脂可抑制振动，防响卡子和垫片防止制动片移动，无方向性的制动盘表面打磨可打断可能激发制动片共振产生尖叫的纹路。"
  },
  {
    id: 66,
    q: "A technician notices uneven pad wear where the inboard pad is significantly more worn than the outboard pad on a floating caliper. What is the MOST likely cause?",
    options: [
      "A) A seized caliper piston",
      "B) Seized caliper slide pins preventing the caliper from sliding",
      "C) A faulty ABS modulator",
      "D) Incorrect brake fluid type"
    ],
    answer: 1,
    explanation: "On a floating caliper, the piston pushes the inboard pad against the rotor, then the caliper body slides inward to pull the outboard pad against the rotor. If the slide pins are seized, the caliper cannot slide, so only the piston-side inboard pad wears while the outboard pad barely contacts.",
    diagram: "",
    terms: ["brake_caliper", "brake_rotor", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "How Disc Brakes Work",
    qChinese: "技师发现浮动制动钳的内侧制动片比外侧磨损严重得多。最可能的原因是什么？",
    optionsChinese: [
      "A) 制动钳活塞卡死",
      "B) 制动钳滑销卡死导致钳体无法滑动",
      "C) ABS调节器故障",
      "D) 制动液类型不正确"
    ],
    explanationChinese: "在浮动制动钳上，活塞推动内侧制动片抵住制动盘，然后钳体向内滑动将外侧制动片拉向制动盘。如果滑销卡死，钳体无法滑动，只有活塞侧的内侧制动片磨损，而外侧制动片几乎不接触。"
  },
  {
    id: 67,
    q: "What tool is used to retract a rear disc brake caliper piston that has an integrated parking brake mechanism?",
    options: [
      "A) A standard C-clamp",
      "B) A caliper piston wind-back tool that rotates and presses the piston simultaneously",
      "C) A ball peen hammer",
      "D) A hydraulic press"
    ],
    answer: 1,
    explanation: "Rear calipers with integral parking brake mechanisms require the piston to be rotated clockwise while being pushed back into the bore. A caliper piston wind-back tool performs both actions simultaneously. Using a C-clamp alone will damage the parking brake mechanism inside the caliper.",
    diagram: "",
    terms: ["brake_caliper", "parking_brake", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "How Disc Brakes Work",
    qChinese: "集成驻车制动机构的后盘式制动钳活塞需要用什么工具回缩？",
    optionsChinese: [
      "A) 标准C型夹",
      "B) 同时旋转和按压活塞的制动钳活塞回缩工具",
      "C) 球头锤",
      "D) 液压机"
    ],
    explanationChinese: "集成驻车制动机构的后制动钳需要在将活塞推回缸孔的同时顺时针旋转。制动钳活塞回缩工具可同时执行两个动作。仅使用C型夹会损坏制动钳内部的驻车制动机构。"
  },
  {
    id: 68,
    q: "Technician A says applying a non-directional finish to a newly machined rotor helps brake pad seating. Technician B says a non-directional finish is applied using a sanding disc in a swirling pattern. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "A non-directional finish is applied after lathe machining by using a sanding disc or pad in a random swirling motion across the rotor face. This cross-hatched pattern helps new pads seat more quickly, reduces initial brake noise, and provides a better friction surface. Both are correct.",
    diagram: "",
    terms: ["brake_rotor", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Brake Rotor Inspection and Service",
    qChinese: "技师A说对新加工的制动盘施加无方向性打磨有助于制动片磨合。技师B说无方向性打磨是使用砂轮盘以旋转方式进行的。谁说得对？",
    optionsChinese: [
      "A) 只有技师A正确",
      "B) 只有技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "无方向性打磨在车床加工后使用砂轮盘以随机旋转方式在制动盘面上进行。这种交叉纹路有助于新制动片更快磨合，减少初始制动噪音，并提供更好的摩擦表面。两位技师都是正确的。"
  },
  {
    id: 69,
    q: "A rotor has hard spots that appear as dark, discolored patches on the braking surface. What problems can these cause?",
    options: [
      "A) No problems; this is normal wear",
      "B) Pedal pulsation, noise, and uneven pad wear because hard spots resist material transfer differently",
      "C) Improved braking performance",
      "D) Only cosmetic discoloration with no effect on braking"
    ],
    answer: 1,
    explanation: "Hard spots are areas of metallurgical change caused by excessive heat. These areas are harder than surrounding metal, creating thickness variation as pads wear the softer areas faster. This causes pedal pulsation, noise, and uneven pad deposition. Affected rotors should be replaced.",
    diagram: "",
    terms: ["brake_rotor", "brake_caliper", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Brake Rotor Inspection and Service",
    qChinese: "制动盘上出现深色变色斑块的硬点。这会导致什么问题？",
    optionsChinese: [
      "A) 没有问题，这是正常磨损",
      "B) 踏板脉动、噪音和制动片磨损不均，因为硬点对材料转移的阻力不同",
      "C) 制动性能提高",
      "D) 仅是外观变色，不影响制动"
    ],
    explanationChinese: "硬点是由于过热引起的金属组织变化区域。这些区域比周围金属更硬，随着制动片更快地磨损较软的区域，产生厚度差异。这导致踏板脉动、噪音和制动片沉积不均。受影响的制动盘应更换。"
  },
  {
    id: 70,
    q: "What causes a caliper piston to retract slightly when the brake pedal is released?",
    options: [
      "A) Return springs inside the caliper",
      "B) The square-cut O-ring seal flexing back to its original position",
      "C) Vacuum from the brake booster pulling the piston back",
      "D) The ABS modulator releasing pressure"
    ],
    answer: 1,
    explanation: "The square-cut O-ring seal in the caliper bore distorts slightly as the piston moves outward during braking. When hydraulic pressure is released, the seal relaxes back to its original shape, pulling the piston back just enough to create a small running clearance between the pad and rotor.",
    diagram: "",
    terms: ["brake_caliper", "brake_rotor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "How Disc Brakes Work",
    qChinese: "释放制动踏板后，制动钳活塞略微回缩的原因是什么？",
    optionsChinese: [
      "A) 制动钳内的回位弹簧",
      "B) 方形截面O型密封圈恢复到原始位置",
      "C) 制动助力器的真空将活塞拉回",
      "D) ABS调节器释放压力"
    ],
    explanationChinese: "制动钳缸孔中的方形截面O型密封圈在制动时随活塞向外移动时会略微变形。液压压力释放后，密封圈恢复到原始形状，将活塞拉回刚好足够的距离，在制动片和制动盘之间形成微小的运行间隙。"
  },
  {
    id: 71,
    q: "When replacing disc brake pads, what should the technician do before pushing the caliper piston back into its bore?",
    options: [
      "A) Disconnect the ABS sensor",
      "B) Open the bleeder screw or verify the master cylinder cap is loose to prevent forcing contaminated fluid back through the system",
      "C) Remove the brake booster",
      "D) Disconnect the battery"
    ],
    answer: 1,
    explanation: "Before retracting the caliper piston, some technicians open the bleeder screw to prevent forcing old contaminated fluid backward through the ABS modulator and into the master cylinder. At minimum, verify the reservoir cap is loose to prevent pressure buildup that could damage internal seals.",
    diagram: "",
    terms: ["brake_caliper", "master_cylinder", "brake_bleeding"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "How Disc Brakes Work",
    qChinese: "更换盘式制动片时，在将制动钳活塞推回缸孔之前，技师应做什么？",
    optionsChinese: [
      "A) 断开ABS传感器",
      "B) 打开放气螺栓或确认主缸盖松开，以防止将污染的旧液反推回系统",
      "C) 拆除制动助力器",
      "D) 断开蓄电池"
    ],
    explanationChinese: "在回缩制动钳活塞之前，一些技师会打开放气螺栓以防止旧的污染制动液反向通过ABS调节器流入主缸。至少应确认储液壶盖是松开的，以防止压力积聚损坏内部密封件。"
  },
  {
    id: 72,
    q: "A disc brake rotor with excessive lateral runout will MOST likely cause:",
    options: [
      "A) Brake fade on long downhill grades",
      "B) Brake pedal pulsation and uneven pad wear",
      "C) A constantly illuminated ABS light",
      "D) A parking brake that does not hold"
    ],
    answer: 1,
    explanation: "Excessive lateral runout means the rotor wobbles side to side as it rotates. This pushes the pads in and out with each revolution, causing a pulsation felt in the brake pedal. Over time, the high spot wears the pad unevenly and can create thickness variation in the rotor.",
    diagram: "",
    terms: ["brake_rotor", "brake_caliper", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Brake Rotor Inspection and Service",
    qChinese: "端面跳动过大的盘式制动盘最可能导致：",
    optionsChinese: [
      "A) 长下坡时制动衰退",
      "B) 制动踏板脉动和制动片磨损不均",
      "C) ABS灯持续亮起",
      "D) 驻车制动无法驻车"
    ],
    explanationChinese: "端面跳动过大意味着制动盘旋转时左右摆动。这在每次旋转时将制动片推进推出，产生在制动踏板上感受到的脉动。随着时间推移，高点不均匀地磨损制动片，还会在制动盘上产生厚度差异。"
  },
  {
    id: 73,
    q: "Technician A says a fixed caliper does not use slide pins because it does not need to move. Technician B says a fixed caliper typically uses more pistons than a floating caliper. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "A fixed caliper is bolted rigidly to the steering knuckle or bracket and does not slide, so it uses no slide pins. To apply equal force to both pads, it uses pistons on both sides, meaning it has at minimum two pistons but often four or more. Both technicians are correct.",
    diagram: "",
    terms: ["brake_caliper", "brake_rotor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "How Disc Brakes Work",
    qChinese: "技师A说固定制动钳不使用滑销，因为它不需要移动。技师B说固定制动钳通常比浮动制动钳使用更多的活塞。谁说得对？",
    optionsChinese: [
      "A) 只有技师A正确",
      "B) 只有技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "固定制动钳用螺栓刚性固定在转向节或支架上，不滑动，因此不使用滑销。为了对两块制动片施加相等的力，它在两侧都使用活塞，至少有两个活塞，通常有四个或更多。两位技师都是正确的。"
  },
  {
    id: 74,
    q: "During a brake inspection, the technician measures rotor thickness at eight equally spaced points around the rotor. What specification is being checked?",
    options: [
      "A) Lateral runout",
      "B) Thickness variation (parallelism)",
      "C) Minimum thickness",
      "D) Surface finish"
    ],
    answer: 1,
    explanation: "Measuring rotor thickness at multiple points around the circumference with a micrometer checks for thickness variation or parallelism. The difference between the thickest and thinnest reading is the thickness variation. Excessive variation causes pedal pulsation and typically must be less than 0.0005 inch.",
    diagram: "",
    terms: ["brake_rotor", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Brake Rotor Inspection and Service",
    qChinese: "在制动检查中，技师在制动盘周围八个等距点测量厚度。正在检查什么规格？",
    optionsChinese: [
      "A) 端面跳动",
      "B) 厚度差异（平行度）",
      "C) 最小厚度",
      "D) 表面光洁度"
    ],
    explanationChinese: "使用千分尺在制动盘圆周上多个点测量厚度，是检查厚度差异或平行度。最厚和最薄读数之间的差值就是厚度差异。过大的差异会导致踏板脉动，通常必须小于0.0005英寸。"
  },
  {
    id: 75,
    q: "A customer reports a grinding noise when braking. Inspection reveals metal-to-metal contact between the pad backing plate and rotor. What service is needed?",
    options: [
      "A) Replace the brake pads only",
      "B) Replace the brake pads and inspect the rotor; replace or machine the rotor if within spec after machining",
      "C) Lubricate the slide pins only",
      "D) Bleed the brake system"
    ],
    answer: 1,
    explanation: "Metal-to-metal contact means the pad friction material is completely worn. The steel backing plate scores the rotor surface. New pads must be installed and the rotor must be inspected for scoring depth. The rotor needs machining if sufficient material remains, or replacement if it is too thin.",
    diagram: "",
    terms: ["brake_rotor", "brake_caliper", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Brake Rotor Inspection and Service",
    qChinese: "客户报告制动时有磨削声。检查发现制动片背板与制动盘金属对金属接触。需要什么服务？",
    optionsChinese: [
      "A) 仅更换制动片",
      "B) 更换制动片并检查制动盘；如果加工后仍在规格内则加工制动盘，否则更换",
      "C) 仅润滑滑销",
      "D) 对制动系统排气"
    ],
    explanationChinese: "金属对金属接触意味着制动片摩擦材料已完全磨损。钢制背板刮伤制动盘表面。必须安装新制动片并检查制动盘的刮痕深度。如果剩余材料足够则需要加工，如果太薄则需要更换。"
  },
  {
    id: 76,
    q: "What is the purpose of the wear indicator tab on a disc brake pad?",
    options: [
      "A) To adjust pad-to-rotor clearance",
      "B) To create an audible squeal when the pad reaches minimum thickness as a warning to the driver",
      "C) To increase braking force",
      "D) To reduce brake dust"
    ],
    answer: 1,
    explanation: "The wear indicator is a small metal tab attached to the pad backing plate. When the friction material wears down to the minimum safe thickness, the tab contacts the spinning rotor and creates a high-pitched squeal. This audible warning alerts the driver that brake pad replacement is needed.",
    diagram: "",
    terms: ["brake_caliper", "brake_rotor", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "How Disc Brakes Work",
    qChinese: "盘式制动片上磨损指示片的作用是什么？",
    optionsChinese: [
      "A) 调整制动片与制动盘的间隙",
      "B) 在制动片达到最小厚度时产生可听到的尖叫声警告驾驶员",
      "C) 增加制动力",
      "D) 减少制动粉尘"
    ],
    explanationChinese: "磨损指示器是附着在制动片背板上的小金属片。当摩擦材料磨损到最小安全厚度时，金属片接触旋转的制动盘并产生高频尖叫声。这种声音警告驾驶员需要更换制动片。"
  },
  {
    id: 77,
    q: "A vehicle with four-wheel disc brakes has the rear brakes dragging after pad replacement. The caliper pistons were pushed back with a C-clamp. What is the MOST likely cause?",
    options: [
      "A) The new pads are the wrong part number",
      "B) The rear caliper pistons required a wind-back procedure for the integrated parking brake and were damaged by the C-clamp",
      "C) The ABS system is malfunctioning",
      "D) The front brakes are wearing too fast"
    ],
    answer: 1,
    explanation: "Many rear disc brake calipers with integrated parking brake actuators require the piston to be rotated and pressed in simultaneously using a wind-back tool. Forcing them straight back with a C-clamp damages the internal parking brake mechanism, preventing the piston from retracting properly and causing drag.",
    diagram: "",
    terms: ["brake_caliper", "parking_brake", "brake_rotor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "How Disc Brakes Work",
    qChinese: "四轮盘式制动车辆在更换制动片后后制动拖滞。制动钳活塞是用C型夹推回的。最可能的原因是什么？",
    optionsChinese: [
      "A) 新制动片零件号错误",
      "B) 后制动钳活塞需要回缩旋转操作以配合集成驻车制动，被C型夹损坏",
      "C) ABS系统故障",
      "D) 前制动器磨损过快"
    ],
    explanationChinese: "许多集成驻车制动执行器的后盘式制动钳需要使用回缩工具同时旋转和按压活塞。用C型夹直接推入会损坏内部驻车制动机构，导致活塞无法正常回缩而产生拖滞。"
  },
  {
    id: 78,
    q: "After rotor machining, a technician applies a non-directional finish and then cleans the rotor. What is the recommended cleaning method?",
    options: [
      "A) Blow off with compressed air only",
      "B) Wipe with a petroleum-based solvent",
      "C) Wash with warm soapy water or brake cleaner and dry with a clean lint-free cloth",
      "D) No cleaning is necessary"
    ],
    answer: 2,
    explanation: "After machining, metallic debris embeds in the rotor surface. Washing with warm soapy water or brake cleaner and wiping dry with a lint-free cloth removes this debris. Compressed air alone pushes particles but does not remove embedded metal. Petroleum solvents can contaminate the friction surface.",
    diagram: "",
    terms: ["brake_rotor", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=8K2jSj4JPhI",
    youtubeTitle: "Brake Rotor Inspection and Service",
    qChinese: "制动盘加工后，技师施加了无方向性打磨然后清洁制动盘。推荐的清洁方法是什么？",
    optionsChinese: [
      "A) 仅用压缩空气吹",
      "B) 用石油基溶剂擦拭",
      "C) 用温肥皂水或制动清洁剂清洗，然后用干净的无绒布擦干",
      "D) 不需要清洁"
    ],
    explanationChinese: "加工后，金属碎屑会嵌入制动盘表面。用温肥皂水或制动清洁剂清洗并用无绒布擦干可去除这些碎屑。仅用压缩空气吹会推动颗粒但不能去除嵌入的金属。石油基溶剂可能污染摩擦表面。"
  },

  // ===== ELECTRONIC BRAKE CONTROL ABS/TCS/ESC (Questions 79-100) =====
  {
    id: 79,
    q: "What is the primary purpose of an anti-lock braking system (ABS)?",
    options: [
      "A) To shorten stopping distances on dry pavement",
      "B) To prevent wheel lockup during hard braking so the driver can maintain steering control",
      "C) To increase engine braking capability",
      "D) To replace the need for a proportioning valve on all vehicles"
    ],
    answer: 1,
    explanation: "The primary purpose of ABS is to prevent wheel lockup during hard or panic braking. By keeping the wheels rotating, the driver maintains the ability to steer around obstacles. ABS does not always shorten stopping distance, especially on loose gravel or snow, but it preserves directional control.",
    diagram: "",
    terms: ["abs", "speed_sensor", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=rJn2h0-HXYA",
    youtubeTitle: "Anti-Lock Braking System (ABS) Explained",
    qChinese: "防抱死制动系统（ABS）的主要目的是什么？",
    optionsChinese: [
      "A) 缩短干燥路面上的制动距离",
      "B) 在急刹车时防止车轮抱死，使驾驶员保持转向控制",
      "C) 增加发动机制动能力",
      "D) 取代所有车辆上对比例阀的需求"
    ],
    explanationChinese: "ABS的主要目的是在急刹车或紧急制动时防止车轮抱死。通过保持车轮旋转，驾驶员可以保持转向能力以避开障碍物。ABS不一定能缩短制动距离，特别是在松散砂石或雪地上，但能保持方向控制。"
  },
  {
    id: 80,
    q: "Technician A says ABS wheel speed sensors generate an AC voltage signal. Technician B says the frequency of the signal increases with wheel speed. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Passive magnetic wheel speed sensors generate an alternating current signal as the toothed reluctor ring passes by the sensor tip. As wheel speed increases, teeth pass the sensor more rapidly, increasing both the frequency and amplitude of the AC voltage signal. Both technicians are correct.",
    diagram: "",
    terms: ["abs", "speed_sensor", "dmm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=rJn2h0-HXYA",
    youtubeTitle: "Anti-Lock Braking System (ABS) Explained",
    qChinese: "技师A说ABS轮速传感器产生交流电压信号。技师B说信号频率随车轮速度增加而增加。谁说得对？",
    optionsChinese: [
      "A) 只有技师A正确",
      "B) 只有技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "被动磁性轮速传感器在齿形磁环经过传感器头部时产生交流信号。车轮速度增加时，齿更快地经过传感器，交流电压信号的频率和幅值都会增加。两位技师都是正确的。"
  },
  {
    id: 81,
    q: "The ABS amber warning light is on and a scan tool retrieves a code for the right front wheel speed sensor. What should the technician inspect FIRST?",
    options: [
      "A) The brake fluid level",
      "B) The sensor wiring, connector, sensor air gap, and tone ring condition at the right front wheel",
      "C) The master cylinder",
      "D) The rear brake shoes"
    ],
    answer: 1,
    explanation: "A wheel speed sensor code directs diagnosis to that specific corner. The technician should first inspect the sensor wiring for damage or chafing, check the connector for corrosion, measure the sensor air gap to the tone ring, and inspect the tone ring for missing teeth or debris buildup.",
    diagram: "",
    terms: ["abs", "speed_sensor", "scan_tool", "dtc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=rJn2h0-HXYA",
    youtubeTitle: "Anti-Lock Braking System (ABS) Explained",
    qChinese: "ABS琥珀色警告灯亮起，诊断仪读取到右前轮速传感器故障码。技师应首先检查什么？",
    optionsChinese: [
      "A) 制动液液位",
      "B) 右前轮的传感器线路、接头、传感器气隙和齿圈状况",
      "C) 主缸",
      "D) 后制动蹄"
    ],
    explanationChinese: "轮速传感器故障码将诊断指向特定车轮位置。技师应首先检查传感器线路是否损坏或磨擦，检查接头是否腐蚀，测量传感器到齿圈的气隙，并检查齿圈是否有缺齿或碎屑堆积。"
  },
  {
    id: 82,
    q: "During ABS activation, the brake pedal pulsates and a buzzing noise is heard. Is this normal?",
    options: [
      "A) No, this indicates a failed ABS pump motor",
      "B) Yes, pedal pulsation and pump noise are normal during ABS operation",
      "C) No, the ABS modulator needs replacement",
      "D) Yes, but only on rear-wheel-drive vehicles"
    ],
    answer: 1,
    explanation: "Pedal pulsation and a buzzing or chattering noise during ABS activation are completely normal. The hydraulic control unit rapidly cycles pressure to individual wheel circuits multiple times per second. This rapid modulation feeds back through the brake pedal as pulsation and the pump creates audible noise.",
    diagram: "",
    terms: ["abs", "brake_fluid", "master_cylinder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=rJn2h0-HXYA",
    youtubeTitle: "Anti-Lock Braking System (ABS) Explained",
    qChinese: "ABS激活时，制动踏板脉动并听到嗡嗡声。这正常吗？",
    optionsChinese: [
      "A) 不正常，这表明ABS泵电机故障",
      "B) 正常，踏板脉动和泵噪音在ABS工作时是正常的",
      "C) 不正常，需要更换ABS调节器",
      "D) 正常，但仅在后驱车辆上"
    ],
    explanationChinese: "ABS激活时踏板脉动和嗡嗡声或颤振声是完全正常的。液压控制单元每秒多次快速循环各车轮回路的压力。这种快速调节通过制动踏板反馈为脉动感，泵产生可听到的噪音。"
  },
  {
    id: 83,
    q: "What are the three phases of ABS hydraulic pressure modulation during an ABS event?",
    options: [
      "A) Apply, hold, and release",
      "B) Pressure increase, pressure hold, and pressure decrease",
      "C) Pump, dump, and bleed",
      "D) Engage, disengage, and reset"
    ],
    answer: 1,
    explanation: "During an ABS event, the hydraulic control unit modulates brake pressure through three phases. Pressure increase applies the brake, pressure hold maintains current pressure to evaluate wheel behavior, and pressure decrease reduces pressure to allow the wheel to accelerate and regain traction.",
    diagram: "",
    terms: ["abs", "brake_fluid", "speed_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=rJn2h0-HXYA",
    youtubeTitle: "Anti-Lock Braking System (ABS) Explained",
    qChinese: "ABS事件中液压压力调节的三个阶段是什么？",
    optionsChinese: [
      "A) 施加、保持和释放",
      "B) 压力增加、压力保持和压力降低",
      "C) 泵送、排放和排气",
      "D) 接合、脱开和复位"
    ],
    explanationChinese: "在ABS事件中，液压控制单元通过三个阶段调节制动压力。压力增加施加制动，压力保持维持当前压力以评估车轮状态，压力降低减小压力以允许车轮加速恢复附着力。"
  },
  {
    id: 84,
    q: "If the ABS warning light is illuminated but the red brake warning light is off, what does this indicate?",
    options: [
      "A) The entire brake system has failed",
      "B) The ABS is disabled but the base hydraulic brake system still functions normally",
      "C) The parking brake is engaged",
      "D) The brake fluid is contaminated"
    ],
    answer: 1,
    explanation: "When only the amber ABS warning light is on, it means the ABS control module has detected a fault and disabled ABS operation. However, the base hydraulic brake system remains fully functional for normal braking. The vehicle will stop normally but without anti-lock protection during hard braking.",
    diagram: "",
    terms: ["abs", "dtc", "master_cylinder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=rJn2h0-HXYA",
    youtubeTitle: "Anti-Lock Braking System (ABS) Explained",
    qChinese: "如果ABS警告灯亮起但红色制动警告灯未亮，这说明什么？",
    optionsChinese: [
      "A) 整个制动系统已失效",
      "B) ABS已禁用，但基本液压制动系统仍正常工作",
      "C) 驻车制动已拉起",
      "D) 制动液被污染"
    ],
    explanationChinese: "当仅琥珀色ABS警告灯亮起时，表示ABS控制模块检测到故障并禁用了ABS功能。但基本液压制动系统仍完全正常工作。车辆可正常制动停车，但在急刹车时没有防抱死保护。"
  },
  {
    id: 85,
    q: "Technician A says traction control (TCS) uses the ABS hardware to reduce wheel spin during acceleration. Technician B says TCS applies brake pressure to a spinning drive wheel and may also reduce engine power. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Traction control shares the ABS wheel speed sensors and hydraulic control unit. When a drive wheel spins, TCS applies brake pressure to the spinning wheel through the ABS modulator and communicates with the engine control module to reduce throttle or spark. Both technicians are correct.",
    diagram: "",
    terms: ["abs", "speed_sensor", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=rJn2h0-HXYA",
    youtubeTitle: "Anti-Lock Braking System (ABS) Explained",
    qChinese: "技师A说牵引力控制系统（TCS）使用ABS硬件来减少加速时的车轮打滑。技师B说TCS对打滑的驱动轮施加制动压力，还可能降低发动机功率。谁说得对？",
    optionsChinese: [
      "A) 只有技师A正确",
      "B) 只有技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "牵引力控制与ABS共用轮速传感器和液压控制单元。当驱动轮打滑时，TCS通过ABS调节器对打滑车轮施加制动压力，并与发动机控制模块通信以降低油门或点火。两位技师都是正确的。"
  },
  {
    id: 86,
    q: "Electronic stability control (ESC) monitors which additional sensor inputs compared to basic ABS?",
    options: [
      "A) Brake fluid temperature sensor and pad wear sensor",
      "B) Steering angle sensor and yaw rate sensor",
      "C) Tire pressure sensors and ambient temperature sensor",
      "D) Accelerator pedal position sensor only"
    ],
    answer: 1,
    explanation: "ESC adds a steering angle sensor and a yaw rate sensor to the ABS wheel speed sensor inputs. The steering angle sensor detects the driver's intended direction, and the yaw rate sensor measures actual vehicle rotation. ESC compares these inputs to detect and correct skids or loss of control.",
    diagram: "",
    terms: ["abs", "speed_sensor", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=rJn2h0-HXYA",
    youtubeTitle: "Anti-Lock Braking System (ABS) Explained",
    qChinese: "与基本ABS相比，电子稳定控制系统（ESC）额外监测哪些传感器输入？",
    optionsChinese: [
      "A) 制动液温度传感器和制动片磨损传感器",
      "B) 转向角传感器和横摆率传感器",
      "C) 胎压传感器和环境温度传感器",
      "D) 仅加速踏板位置传感器"
    ],
    explanationChinese: "ESC在ABS轮速传感器输入的基础上增加了转向角传感器和横摆率传感器。转向角传感器检测驾驶员的预期行驶方向，横摆率传感器测量车辆的实际旋转。ESC比较这些输入来检测和纠正打滑或失控。"
  },
  {
    id: 87,
    q: "A wheel speed sensor has an air gap specification of 0.030 to 0.050 inch. The measured gap is 0.090 inch. What symptom could this cause?",
    options: [
      "A) The brakes will lock up during normal stopping",
      "B) A weak or erratic sensor signal triggering an ABS fault code",
      "C) Increased stopping distance without ABS activation",
      "D) The brake pads will wear faster"
    ],
    answer: 1,
    explanation: "An excessive air gap between the wheel speed sensor and tone ring weakens the generated signal. The ABS module may receive an erratic or low-amplitude signal that it cannot reliably interpret, setting a diagnostic trouble code and illuminating the ABS warning light. The gap must be corrected.",
    diagram: "",
    terms: ["abs", "speed_sensor", "dtc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=rJn2h0-HXYA",
    youtubeTitle: "Anti-Lock Braking System (ABS) Explained",
    qChinese: "轮速传感器的气隙规格为0.030至0.050英寸。测量气隙为0.090英寸。这可能导致什么症状？",
    optionsChinese: [
      "A) 正常停车时制动器会抱死",
      "B) 传感器信号弱或不稳定，触发ABS故障码",
      "C) 在没有ABS激活的情况下增加制动距离",
      "D) 制动片磨损更快"
    ],
    explanationChinese: "轮速传感器与齿圈之间的气隙过大会削弱产生的信号。ABS模块可能收到不稳定或低幅值的信号而无法可靠解读，从而设置故障码并点亮ABS警告灯。必须纠正气隙。"
  },
  {
    id: 88,
    q: "When using a scan tool to diagnose ABS, the technician can perform all of the following EXCEPT:",
    options: [
      "A) Read ABS diagnostic trouble codes",
      "B) View live wheel speed sensor data",
      "C) Command individual ABS solenoid functional tests",
      "D) Physically adjust the wheel speed sensor air gap"
    ],
    answer: 3,
    explanation: "A scan tool can read codes, view live data from wheel speed sensors, and command bidirectional tests of ABS solenoids and pump motors. However, physically adjusting the sensor air gap is a hands-on mechanical procedure performed at the wheel that no scan tool can accomplish electronically.",
    diagram: "",
    terms: ["scan_tool", "abs", "dtc", "speed_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=rJn2h0-HXYA",
    youtubeTitle: "Anti-Lock Braking System (ABS) Explained",
    qChinese: "使用诊断仪诊断ABS时，技师可以执行以下所有操作，除了：",
    optionsChinese: [
      "A) 读取ABS故障码",
      "B) 查看轮速传感器实时数据",
      "C) 命令执行单个ABS电磁阀功能测试",
      "D) 物理调整轮速传感器气隙"
    ],
    explanationChinese: "诊断仪可以读取故障码、查看轮速传感器实时数据、命令执行ABS电磁阀和泵电机的双向测试。但是，物理调整传感器气隙是在车轮处执行的手动机械操作，任何诊断仪都无法通过电子方式完成。"
  },
  {
    id: 89,
    q: "After replacing an ABS wheel speed sensor, what should the technician verify?",
    options: [
      "A) That the power steering pump is operating",
      "B) Proper sensor air gap, secure mounting, correct wiring routing, and clear all DTCs with a scan tool",
      "C) That the engine oil level is correct",
      "D) That the tire pressure monitoring system is reset"
    ],
    answer: 1,
    explanation: "After wheel speed sensor replacement, verify the air gap to the tone ring is within specification, the sensor is securely mounted, and the wiring is properly routed away from heat and moving parts. Use a scan tool to clear any stored DTCs and test drive to confirm the ABS light stays off.",
    diagram: "",
    terms: ["abs", "speed_sensor", "scan_tool", "dtc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=rJn2h0-HXYA",
    youtubeTitle: "Anti-Lock Braking System (ABS) Explained",
    qChinese: "更换ABS轮速传感器后，技师应验证什么？",
    optionsChinese: [
      "A) 转向助力泵工作正常",
      "B) 传感器气隙正确、安装牢固、线路布线正确，并用诊断仪清除所有故障码",
      "C) 发动机油位正确",
      "D) 胎压监测系统已复位"
    ],
    explanationChinese: "更换轮速传感器后，验证传感器到齿圈的气隙在规格范围内，传感器安装牢固，线路正确布设远离热源和运动部件。使用诊断仪清除存储的故障码并试驾确认ABS灯不再亮起。"
  },
  {
    id: 90,
    q: "What component in the ABS hydraulic control unit is responsible for rapidly increasing and decreasing brake pressure to individual wheels?",
    options: [
      "A) The master cylinder pistons",
      "B) Solenoid valves controlled by the ABS module",
      "C) The brake booster diaphragm",
      "D) The proportioning valve"
    ],
    answer: 1,
    explanation: "The ABS hydraulic control unit contains electrically operated solenoid valves for each wheel circuit. The ABS electronic control module commands these solenoids to open and close rapidly to increase, hold, or decrease brake pressure to individual wheels during an anti-lock braking event.",
    diagram: "",
    terms: ["abs", "brake_fluid", "relay"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=rJn2h0-HXYA",
    youtubeTitle: "Anti-Lock Braking System (ABS) Explained",
    qChinese: "ABS液压控制单元中负责快速增减各车轮制动压力的部件是什么？",
    optionsChinese: [
      "A) 主缸活塞",
      "B) 由ABS模块控制的电磁阀",
      "C) 制动助力器膜片",
      "D) 比例阀"
    ],
    explanationChinese: "ABS液压控制单元包含为每个车轮回路设置的电控电磁阀。ABS电子控制模块命令这些电磁阀快速开关，在防抱死制动事件中增加、保持或降低各车轮的制动压力。"
  },
  {
    id: 91,
    q: "Technician A says a damaged or missing tooth on the ABS tone ring can cause a false ABS activation at low speeds. Technician B says metallic debris on the tone ring can cause erratic wheel speed sensor readings. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "A missing tooth creates a signal dropout that the ABS module may interpret as sudden wheel deceleration, triggering false ABS activation. Metallic debris on the tone ring alters the air gap and disrupts the regular signal pattern, causing erratic speed readings and possible fault codes. Both are correct.",
    diagram: "",
    terms: ["abs", "speed_sensor", "dtc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=rJn2h0-HXYA",
    youtubeTitle: "Anti-Lock Braking System (ABS) Explained",
    qChinese: "技师A说ABS齿圈上缺齿或损坏可导致低速时ABS误触发。技师B说齿圈上的金属碎屑可导致轮速传感器读数不稳定。谁说得对？",
    optionsChinese: [
      "A) 只有技师A正确",
      "B) 只有技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "缺齿会产生信号中断，ABS模块可能将其解读为车轮突然减速，从而触发误激活。齿圈上的金属碎屑改变气隙并破坏正常信号模式，导致读数不稳定和可能的故障码。两位技师都是正确的。"
  },
  {
    id: 92,
    q: "The ABS and traction control warning lights both illuminate simultaneously. What is the MOST likely explanation?",
    options: [
      "A) The brake pads are worn",
      "B) Both systems share sensors and hardware; a fault in a shared component disables both",
      "C) The engine oil level is low",
      "D) The battery voltage is slightly low"
    ],
    answer: 1,
    explanation: "ABS and traction control share the same wheel speed sensors, hydraulic control unit, and electronic control module. A fault in any shared component such as a wheel speed sensor disables both systems simultaneously, illuminating both warning lights. Diagnosis typically reveals a single common root cause.",
    diagram: "",
    terms: ["abs", "speed_sensor", "dtc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=rJn2h0-HXYA",
    youtubeTitle: "Anti-Lock Braking System (ABS) Explained",
    qChinese: "ABS和牵引力控制警告灯同时亮起。最可能的解释是什么？",
    optionsChinese: [
      "A) 制动片磨损",
      "B) 两个系统共用传感器和硬件；共用部件故障会同时禁用两个系统",
      "C) 发动机油位低",
      "D) 蓄电池电压略低"
    ],
    explanationChinese: "ABS和牵引力控制共用同一组轮速传感器、液压控制单元和电子控制模块。任何共用部件（如轮速传感器）的故障都会同时禁用两个系统，同时点亮两个警告灯。诊断通常会发现一个共同的根本原因。"
  },
  {
    id: 93,
    q: "When bleeding an ABS-equipped brake system, some vehicles require a scan tool to cycle the ABS solenoids and pump. Why is this necessary?",
    options: [
      "A) To reset the oil life monitor",
      "B) To open internal ABS solenoid valves and purge air trapped inside the hydraulic control unit",
      "C) To reprogram the ABS module",
      "D) To calibrate the steering angle sensor"
    ],
    answer: 1,
    explanation: "Air can become trapped inside the ABS hydraulic control unit behind closed solenoid valves. Normal bleeding cannot purge this air because the valves are electrically closed. A scan tool commands the solenoids open and cycles the pump motor to push trapped air out through the bleeder screws.",
    diagram: "",
    terms: ["abs", "brake_bleeding", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=rJn2h0-HXYA",
    youtubeTitle: "Anti-Lock Braking System (ABS) Explained",
    qChinese: "对配备ABS的制动系统排气时，某些车辆需要用诊断仪循环ABS电磁阀和泵。为什么有必要这样做？",
    optionsChinese: [
      "A) 复位机油寿命监控",
      "B) 打开内部ABS电磁阀并排出截留在液压控制单元内的空气",
      "C) 重新编程ABS模块",
      "D) 校准转向角传感器"
    ],
    explanationChinese: "空气可能会被截留在ABS液压控制单元内部关闭的电磁阀后方。正常排气无法排出此空气，因为阀门处于电控关闭状态。诊断仪命令电磁阀打开并循环泵电机，将截留的空气通过放气螺栓排出。"
  },
  {
    id: 94,
    q: "A vehicle's ABS activates unexpectedly on dry pavement at low speeds when gently braking. Which component is MOST likely at fault?",
    options: [
      "A) The brake booster",
      "B) A faulty wheel speed sensor or damaged tone ring giving an incorrect speed signal",
      "C) The brake light switch",
      "D) Worn brake pads"
    ],
    answer: 1,
    explanation: "False ABS activation on dry pavement at low speed is caused by an incorrect wheel speed signal. A faulty sensor or damaged tone ring sends erratic data to the ABS module, which interprets it as wheel lockup and activates ABS unnecessarily. This releases brake pressure when it should not.",
    diagram: "",
    terms: ["abs", "speed_sensor", "dtc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=rJn2h0-HXYA",
    youtubeTitle: "Anti-Lock Braking System (ABS) Explained",
    qChinese: "车辆的ABS在干燥路面上低速轻踩制动时意外激活。最可能是哪个部件故障？",
    optionsChinese: [
      "A) 制动助力器",
      "B) 轮速传感器故障或齿圈损坏导致速度信号不正确",
      "C) 制动灯开关",
      "D) 制动片磨损"
    ],
    explanationChinese: "在干燥路面低速时ABS误激活是由不正确的轮速信号引起的。故障的传感器或损坏的齿圈向ABS模块发送不稳定的数据，模块将其解读为车轮抱死并不必要地激活ABS。这在不应该释放制动压力时释放了压力。"
  },
  {
    id: 95,
    q: "All of the following can cause an ABS wheel speed sensor code EXCEPT:",
    options: [
      "A) Excessive sensor-to-tone-ring air gap",
      "B) Damaged sensor wiring or corroded connector",
      "C) A cracked tone ring",
      "D) Worn brake pad friction material"
    ],
    answer: 3,
    explanation: "Worn brake pads do not directly affect the wheel speed sensor signal. The sensor reads the tone ring rotation, which is unrelated to pad thickness. An excessive air gap, damaged wiring, corroded connectors, and a cracked or damaged tone ring all directly impact the sensor signal quality.",
    diagram: "",
    terms: ["abs", "speed_sensor", "dtc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=rJn2h0-HXYA",
    youtubeTitle: "Anti-Lock Braking System (ABS) Explained",
    qChinese: "以下所有都可能导致ABS轮速传感器故障码，除了：",
    optionsChinese: [
      "A) 传感器到齿圈气隙过大",
      "B) 传感器线路损坏或接头腐蚀",
      "C) 齿圈破裂",
      "D) 制动片摩擦材料磨损"
    ],
    explanationChinese: "制动片磨损不会直接影响轮速传感器信号。传感器读取的是齿圈旋转，与制动片厚度无关。气隙过大、线路损坏、接头腐蚀和齿圈破裂或损坏都会直接影响传感器信号质量。"
  },
  {
    id: 96,
    q: "The ABS pump motor runs continuously with the ignition on. What does this indicate?",
    options: [
      "A) Normal operation during startup self-test",
      "B) A fault in the ABS hydraulic control unit or its pressure circuit, such as internal fluid leak or stuck valve",
      "C) The brake pads need replacement",
      "D) The parking brake is stuck"
    ],
    answer: 1,
    explanation: "The ABS pump motor should only run briefly during self-test at startup or during an ABS event. Continuous operation indicates the pump cannot build or maintain the required pressure, typically caused by an internal hydraulic leak, stuck solenoid valve, or faulty pump relay in the control unit.",
    diagram: "",
    terms: ["abs", "brake_fluid", "relay"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=rJn2h0-HXYA",
    youtubeTitle: "Anti-Lock Braking System (ABS) Explained",
    qChinese: "ABS泵电机在点火开启后持续运转。这说明什么？",
    optionsChinese: [
      "A) 启动自检时的正常操作",
      "B) ABS液压控制单元或其压力回路有故障，如内部液体泄漏或阀门卡滞",
      "C) 制动片需要更换",
      "D) 驻车制动卡死"
    ],
    explanationChinese: "ABS泵电机应仅在启动自检或ABS事件期间短暂运行。持续运转表明泵无法建立或维持所需压力，通常由液压控制单元内部的液体泄漏、电磁阀卡滞或泵继电器故障引起。"
  },
  {
    id: 97,
    q: "Technician A says ESC can apply brakes to individual wheels to correct oversteer or understeer. Technician B says ESC may also reduce engine torque to help stabilize the vehicle. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "ESC corrects oversteer by applying the outside front brake and corrects understeer by applying the inside rear brake to create a yaw moment that redirects the vehicle. It simultaneously communicates with the engine control module to reduce torque and help stabilize the vehicle. Both are correct.",
    diagram: "",
    terms: ["abs", "pcm", "speed_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=rJn2h0-HXYA",
    youtubeTitle: "Anti-Lock Braking System (ABS) Explained",
    qChinese: "技师A说ESC可以对单个车轮施加制动来纠正过度转向或转向不足。技师B说ESC还可以降低发动机扭矩来帮助稳定车辆。谁说得对？",
    optionsChinese: [
      "A) 只有技师A正确",
      "B) 只有技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "ESC通过对外侧前轮施加制动来纠正过度转向，通过对内侧后轮施加制动来纠正转向不足，产生偏航力矩重新引导车辆。它同时与发动机控制模块通信以降低扭矩帮助稳定车辆。两位技师都是正确的。"
  },
  {
    id: 98,
    q: "After replacing a steering angle sensor on an ESC-equipped vehicle, what additional procedure is required?",
    options: [
      "A) Replace the brake fluid",
      "B) Calibrate or zero-point the steering angle sensor using a scan tool",
      "C) Replace all four wheel speed sensors",
      "D) Bleed the ABS modulator"
    ],
    answer: 1,
    explanation: "After replacing or disconnecting the steering angle sensor, it must be calibrated to its zero point using a scan tool. The sensor must know the straight-ahead steering wheel position. Without calibration, the ESC system cannot correctly determine the driver's intended direction and will not function properly.",
    diagram: "",
    terms: ["abs", "scan_tool", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=rJn2h0-HXYA",
    youtubeTitle: "Anti-Lock Braking System (ABS) Explained",
    qChinese: "在配备ESC的车辆上更换转向角传感器后，还需要什么额外程序？",
    optionsChinese: [
      "A) 更换制动液",
      "B) 使用诊断仪校准或归零转向角传感器",
      "C) 更换全部四个轮速传感器",
      "D) 对ABS调节器排气"
    ],
    explanationChinese: "更换或断开转向角传感器后，必须使用诊断仪将其校准到零点位置。传感器必须知道方向盘直行位置。未经校准，ESC系统无法正确判断驾驶员的预期行驶方向，将无法正常工作。"
  },
  {
    id: 99,
    q: "What is the function of the ABS accumulator in some ABS systems?",
    options: [
      "A) To store brake fluid for topping off the reservoir",
      "B) To store pressurized brake fluid to provide rapid pressure application during ABS events",
      "C) To filter brake fluid contaminants",
      "D) To absorb road shock from the wheels"
    ],
    answer: 1,
    explanation: "Some ABS systems use a hydraulic accumulator to store pressurized brake fluid. During an ABS event, the accumulator provides a ready supply of pressurized fluid that can be rapidly directed to individual wheel circuits. This enables faster pressure modulation than relying on the pump motor alone.",
    diagram: "",
    terms: ["abs", "brake_fluid", "accumulator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=rJn2h0-HXYA",
    youtubeTitle: "Anti-Lock Braking System (ABS) Explained",
    qChinese: "某些ABS系统中ABS蓄压器的功能是什么？",
    optionsChinese: [
      "A) 储存制动液用于补充储液壶",
      "B) 储存加压制动液以在ABS事件中提供快速压力施加",
      "C) 过滤制动液中的污染物",
      "D) 吸收来自车轮的路面冲击"
    ],
    explanationChinese: "某些ABS系统使用液压蓄压器储存加压制动液。在ABS事件期间，蓄压器提供随时可用的加压液体，可快速引导到各车轮回路。这比仅依靠泵电机实现更快的压力调节。"
  },
  {
    id: 100,
    q: "A vehicle has DTC C0035 stored in the ABS module, indicating a left front wheel speed sensor circuit malfunction. After clearing the code it returns immediately. All of the following should be checked EXCEPT:",
    options: [
      "A) The left front wheel speed sensor resistance and output signal",
      "B) The wiring harness between the sensor and the ABS module for opens, shorts, or chafing",
      "C) The left front tone ring for damage or excessive runout",
      "D) The right rear brake shoe adjustment"
    ],
    answer: 3,
    explanation: "Right rear brake shoe adjustment has no effect on the left front wheel speed sensor circuit. Diagnosis should focus on the sensor itself, its wiring and connectors, and the tone ring at the left front wheel. A returning code after clearing indicates a persistent electrical or mechanical fault at that location.",
    diagram: "",
    terms: ["abs", "speed_sensor", "dtc", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=rJn2h0-HXYA",
    youtubeTitle: "Anti-Lock Braking System (ABS) Explained",
    qChinese: "车辆ABS模块中存储了DTC C0035，指示左前轮速传感器电路故障。清除故障码后立即再次出现。以下所有都应检查，除了：",
    optionsChinese: [
      "A) 左前轮速传感器的电阻和输出信号",
      "B) 传感器与ABS模块之间的线束是否存在断路、短路或磨擦",
      "C) 左前齿圈是否有损坏或跳动过大",
      "D) 右后制动蹄调整"
    ],
    explanationChinese: "右后制动蹄调整对左前轮速传感器电路没有影响。诊断应集中在传感器本身、其线路和接头以及左前轮的齿圈。清除后立即再现的故障码表示该位置存在持续的电气或机械故障。"
  },
  // ===== QUESTIONS 101-200: ADDITIONAL A5 BRAKES =====
  {
    id: 101,
    q: "What component in the hydraulic brake system converts the driver's foot pressure into hydraulic pressure?",
    options: [
      "A) Brake booster",
      "B) Master cylinder",
      "C) Proportioning valve",
      "D) Wheel cylinder"
    ],
    answer: 1,
    explanation: "The master cylinder converts mechanical force from the brake pedal into hydraulic pressure. The brake booster amplifies pedal force before it reaches the master cylinder. The proportioning valve regulates rear brake pressure, and the wheel cylinder applies force at drum brakes.",
    diagram: "",
    terms: ["master_cylinder", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "How the Master Cylinder Works",
    qChinese: "液压制动系统中哪个部件将驾驶员的脚力转换为液压压力？",
    optionsChinese: [
      "A) 制动助力器",
      "B) 主缸",
      "C) 比例阀",
      "D) 轮缸"
    ],
    explanationChinese: "主缸将来自制动踏板的机械力转换为液压压力。制动助力器在力到达主缸之前放大踏板力。比例阀调节后制动压力，轮缸在鼓式制动器处施加力。"
  },
  {
    id: 102,
    q: "A vehicle pulls to the right during braking. Which of the following is the MOST likely cause?",
    options: [
      "A) A stuck closed left front caliper piston",
      "B) A worn right rear brake shoe",
      "C) Low brake fluid in the reservoir",
      "D) A faulty brake light switch"
    ],
    answer: 0,
    explanation: "A stuck closed left front caliper piston prevents the left front brake from applying, causing the vehicle to pull toward the right where braking force is greater. A worn rear shoe or low fluid would affect overall braking, not cause a directional pull. A brake light switch does not affect braking force.",
    diagram: "",
    terms: ["brake_caliper", "brake_pads"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Disk_brake_dbread.jpg/640px-Disk_brake_dread.jpg",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "Brake Caliper Diagnosis and Repair",
    qChinese: "车辆在制动时向右偏。以下哪项是最可能的原因？",
    optionsChinese: [
      "A) 左前制动钳活塞卡死不动",
      "B) 右后制动蹄磨损",
      "C) 储液壶中制动液不足",
      "D) 制动灯开关故障"
    ],
    explanationChinese: "左前制动钳活塞卡死不动会阻止左前制动器施加制动力，导致车辆向制动力较大的右侧偏移。后蹄磨损或液位低会影响整体制动，不会引起方向偏移。制动灯开关不影响制动力。"
  },
  {
    id: 103,
    q: "What is the purpose of the rubber brake hoses used at each wheel?",
    options: [
      "A) To reduce brake noise",
      "B) To allow for suspension and steering movement while carrying brake fluid",
      "C) To filter contaminants from the brake fluid",
      "D) To increase hydraulic pressure at the caliper"
    ],
    answer: 1,
    explanation: "Rubber brake hoses connect the rigid steel brake lines on the vehicle body to the brake calipers or wheel cylinders on the moving suspension and steering components. They flex to accommodate suspension travel and steering movement while maintaining a sealed path for pressurized brake fluid.",
    diagram: "",
    terms: ["brake_hose", "brake_line", "brake_caliper"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=n1NvtMiPYQs",
    youtubeTitle: "Brake Lines and Hoses Explained",
    qChinese: "每个车轮处使用的橡胶制动软管的作用是什么？",
    optionsChinese: [
      "A) 减少制动噪音",
      "B) 在输送制动液的同时允许悬架和转向运动",
      "C) 过滤制动液中的污染物",
      "D) 增加制动钳处的液压压力"
    ],
    explanationChinese: "橡胶制动软管将车身上的刚性钢制动管路与悬架和转向部件上的制动钳或轮缸连接。它们可以弯曲以适应悬架行程和转向运动，同时为加压制动液保持密封通道。"
  },
  {
    id: 104,
    q: "Technician A says a proportioning valve reduces hydraulic pressure to the rear brakes during hard stops. Technician B says a metering valve delays front disc brake application during light braking. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "The proportioning valve limits rear brake pressure during hard stops to prevent rear wheel lockup because weight transfers forward. The metering valve delays front disc brake application slightly during light braking so the rear drums engage first, providing balanced braking. Both technicians are correct.",
    diagram: "",
    terms: ["proportioning_valve", "brake_line"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=n1NvtMiPYQs",
    youtubeTitle: "Proportioning and Metering Valves Explained",
    qChinese: "技师A说比例阀在急刹车时降低后制动器的液压压力。技师B说计量阀在轻刹车时延迟前盘式制动器的施加。谁说得对？",
    optionsChinese: [
      "A) 只有技师A正确",
      "B) 只有技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "比例阀在急刹车时限制后制动器压力，防止后轮锁死，因为重量向前转移。计量阀在轻刹车时稍微延迟前盘式制动器的施加，使后鼓先接合，提供平衡的制动。两位技师都正确。"
  },
  {
    id: 105,
    q: "A technician notices the brake fluid in the master cylinder reservoir appears dark and contaminated. What is the recommended action?",
    options: [
      "A) Top off the reservoir with fresh fluid and continue",
      "B) Flush the entire brake system and refill with the correct specification fluid",
      "C) Add a brake fluid conditioner to the existing fluid",
      "D) Drain only the reservoir and refill it"
    ],
    answer: 1,
    explanation: "Dark and contaminated brake fluid indicates moisture absorption and degraded fluid properties throughout the system. A complete flush pushes new fluid through all lines, calipers, and wheel cylinders, removing all the old contaminated fluid. Topping off or draining only the reservoir does not address contaminated fluid in the lines.",
    diagram: "",
    terms: ["brake_fluid", "brake_bleeding", "master_cylinder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=n1NvtMiPYQs",
    youtubeTitle: "How to Flush Brake Fluid",
    qChinese: "技师注意到主缸储液壶中的制动液颜色变深且受污染。建议采取什么措施？",
    optionsChinese: [
      "A) 用新鲜制动液补满储液壶并继续",
      "B) 冲洗整个制动系统并用正确规格的制动液重新加注",
      "C) 向现有制动液中添加制动液调节剂",
      "D) 仅排空储液壶并重新加注"
    ],
    explanationChinese: "变深且受污染的制动液表明整个系统中的液体已吸收水分并且性能下降。完全冲洗可将新液推过所有管路、制动钳和轮缸，排出所有旧的受污染制动液。仅补满或排空储液壶不能解决管路中的污染液体。"
  },
  {
    id: 106,
    q: "What type of brake caliper slides on pins or rails and uses a single piston?",
    options: [
      "A) Fixed caliper",
      "B) Floating caliper",
      "C) Opposed piston caliper",
      "D) Wedge caliper"
    ],
    answer: 1,
    explanation: "A floating caliper uses a single piston on the inboard side and slides on pins or rails. When hydraulic pressure pushes the piston against the inboard pad, the caliper body slides inward, pulling the outboard pad against the rotor. Fixed calipers have pistons on both sides and do not slide.",
    diagram: "",
    terms: ["brake_caliper", "brake_pads", "brake_rotor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Disk_brake_dread.jpg/640px-Disk_brake_dread.jpg",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "Floating vs Fixed Brake Calipers",
    qChinese: "哪种制动钳在销或导轨上滑动并使用单个活塞？",
    optionsChinese: [
      "A) 固定式制动钳",
      "B) 浮动式制动钳",
      "C) 对置活塞制动钳",
      "D) 楔形制动钳"
    ],
    explanationChinese: "浮动式制动钳在内侧使用单个活塞，并在销或导轨上滑动。当液压压力将活塞推向内侧制动片时，钳体向内滑动，将外侧制动片拉向制动盘。固定式制动钳两侧都有活塞，不会滑动。"
  },
  {
    id: 107,
    q: "A disc brake rotor has a minimum thickness specification stamped on it. What happens if the rotor is machined below this specification?",
    options: [
      "A) The rotor will be stronger due to heat treatment",
      "B) The rotor may overheat, warp, or crack during braking",
      "C) The brake pads will last longer",
      "D) The caliper piston will retract further into the bore"
    ],
    answer: 1,
    explanation: "A rotor machined below minimum thickness cannot dissipate heat effectively because it lacks sufficient mass. This leads to overheating, warping, cracking, and potential brake fade or failure. The minimum thickness specification ensures safe braking performance and structural integrity under repeated hard stops.",
    diagram: "",
    terms: ["brake_rotor", "brake_pads"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "Brake Rotor Inspection and Measurement",
    qChinese: "盘式制动器制动盘上印有最小厚度规格。如果制动盘被车削到低于此规格会怎样？",
    optionsChinese: [
      "A) 由于热处理制动盘会更坚固",
      "B) 制动盘在制动时可能过热、变形或开裂",
      "C) 制动片寿命会更长",
      "D) 制动钳活塞会进一步缩回缸孔"
    ],
    explanationChinese: "车削到低于最小厚度的制动盘由于质量不足无法有效散热。这会导致过热、变形、开裂以及潜在的制动衰退或失效。最小厚度规格确保在反复急刹车下的安全制动性能和结构完整性。"
  },
  {
    id: 108,
    q: "During a drum brake inspection, a technician finds one brake shoe lining worn significantly more than the other on the same wheel. What is the MOST likely cause?",
    options: [
      "A) A leaking wheel cylinder",
      "B) Normal operation due to the self-energizing effect",
      "C) Incorrect brake fluid type",
      "D) A worn brake drum"
    ],
    answer: 1,
    explanation: "In a leading-trailing drum brake design, the leading shoe is self-energizing because drum rotation wedges it tighter against the drum surface, causing it to wear faster than the trailing shoe. This uneven wear is normal. The primary shoe is typically shorter with less lining than the secondary shoe.",
    diagram: "",
    terms: ["brake_shoes", "drum_brake", "wheel_cylinder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Drum_brake.svg/640px-Drum_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=PEI16pGxG0w",
    youtubeTitle: "How Drum Brakes Work",
    qChinese: "在鼓式制动器检查中，技师发现同一车轮上一个制动蹄的衬片比另一个磨损明显更多。最可能的原因是什么？",
    optionsChinese: [
      "A) 轮缸泄漏",
      "B) 由于自增力效应属于正常工作",
      "C) 制动液类型不正确",
      "D) 制动鼓磨损"
    ],
    explanationChinese: "在领从式鼓式制动器设计中，领蹄具有自增力作用，因为鼓的旋转将其更紧地楔入鼓面，导致其比从蹄磨损更快。这种不均匀磨损是正常的。主蹄通常较短，衬片面积较小。"
  },
  {
    id: 109,
    q: "What tool is used to measure brake rotor thickness variation (parallelism)?",
    options: [
      "A) A dial indicator",
      "B) An outside micrometer",
      "C) A brake drum gauge",
      "D) A feeler gauge"
    ],
    answer: 1,
    explanation: "An outside micrometer is used to measure rotor thickness at multiple points around the rotor to determine thickness variation or parallelism. A dial indicator measures lateral runout, not thickness variation. A drum gauge measures brake drum diameter, and a feeler gauge measures small gaps.",
    diagram: "",
    terms: ["brake_rotor", "brake_caliper"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "Measuring Brake Rotor Thickness and Runout",
    qChinese: "用什么工具测量制动盘厚度变化（平行度）？",
    optionsChinese: [
      "A) 百分表",
      "B) 外径千分尺",
      "C) 制动鼓量规",
      "D) 塞尺"
    ],
    explanationChinese: "外径千分尺用于在制动盘周围多个点测量厚度以确定厚度变化或平行度。百分表测量的是横向跳动而非厚度变化。鼓量规测量制动鼓直径，塞尺测量小间隙。"
  },
  {
    id: 110,
    q: "A customer complains of a pulsating brake pedal during normal stops. What is the MOST likely cause?",
    options: [
      "A) Worn brake pads",
      "B) Excessive rotor lateral runout or thickness variation",
      "C) A defective vacuum brake booster",
      "D) Low brake fluid level"
    ],
    answer: 1,
    explanation: "A pulsating brake pedal during normal braking is typically caused by excessive rotor lateral runout or thickness variation. As the rotor spins, the uneven surface pushes the caliper piston back and forth, which transfers as a pulsation through the hydraulic system to the brake pedal.",
    diagram: "",
    terms: ["brake_rotor", "brake_caliper", "brake_pads"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "Diagnosing Brake Pedal Pulsation",
    qChinese: "客户抱怨正常刹车时制动踏板有脉动感。最可能的原因是什么？",
    optionsChinese: [
      "A) 制动片磨损",
      "B) 制动盘横向跳动或厚度变化过大",
      "C) 真空制动助力器故障",
      "D) 制动液液位低"
    ],
    explanationChinese: "正常制动时踏板脉动通常是由制动盘横向跳动或厚度变化过大引起的。当制动盘旋转时，不平整的表面将制动钳活塞来回推动，这种脉动通过液压系统传递到制动踏板。"
  },
  {
    id: 111,
    q: "What is the function of the self-adjuster mechanism in a drum brake assembly?",
    options: [
      "A) To apply the parking brake automatically",
      "B) To maintain proper shoe-to-drum clearance as linings wear",
      "C) To balance brake pressure between front and rear",
      "D) To bleed air from the wheel cylinder"
    ],
    answer: 1,
    explanation: "The self-adjuster mechanism automatically compensates for brake shoe lining wear by incrementally moving the shoes closer to the drum. This maintains proper shoe-to-drum clearance so the brake pedal does not drop excessively low. Self-adjusters typically activate during reverse braking or parking brake application.",
    diagram: "",
    terms: ["drum_brake", "brake_shoes", "parking_brake"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Drum_brake.svg/640px-Drum_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=PEI16pGxG0w",
    youtubeTitle: "Drum Brake Self-Adjuster Explained",
    qChinese: "鼓式制动器总成中自动调整机构的功能是什么？",
    optionsChinese: [
      "A) 自动施加驻车制动",
      "B) 随着衬片磨损保持适当的蹄与鼓间隙",
      "C) 平衡前后制动压力",
      "D) 排出轮缸中的空气"
    ],
    explanationChinese: "自动调整机构通过逐步将制动蹄移近制动鼓来自动补偿制动蹄衬片的磨损。这保持了适当的蹄与鼓间隙，使制动踏板不会降得过低。自动调整器通常在倒车制动或驻车制动操作时激活。"
  },
  {
    id: 112,
    q: "A vehicle equipped with a vacuum-assisted power brake booster has a hard brake pedal that requires excessive force. The engine runs normally. What should be checked FIRST?",
    options: [
      "A) The brake pads for wear",
      "B) The vacuum hose to the booster for leaks or disconnection",
      "C) The ABS module for stored codes",
      "D) The brake fluid level"
    ],
    answer: 1,
    explanation: "A hard brake pedal with a vacuum booster indicates lack of vacuum assist. The first check should be the vacuum supply hose between the intake manifold and the booster for leaks, cracks, or disconnection. Without vacuum, the booster cannot amplify pedal force, resulting in a hard pedal requiring excessive effort.",
    diagram: "",
    terms: ["vacuum_booster", "master_cylinder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=ydoKEPmuIYs",
    youtubeTitle: "Brake Booster Diagnosis",
    qChinese: "配备真空助力制动助力器的车辆制动踏板很硬，需要过大的力。发动机运行正常。应首先检查什么？",
    optionsChinese: [
      "A) 制动片磨损情况",
      "B) 到助力器的真空软管是否泄漏或脱落",
      "C) ABS模块是否有存储的故障码",
      "D) 制动液液位"
    ],
    explanationChinese: "真空助力器下踏板很硬表示缺少真空助力。首先应检查进气歧管与助力器之间的真空供应软管是否有泄漏、裂纹或脱落。没有真空，助力器无法放大踏板力，导致需要过大力量的硬踏板。"
  },
  {
    id: 113,
    q: "Technician A says the parking brake on most vehicles with rear disc brakes uses a small drum brake assembly inside the rotor hat. Technician B says the parking brake cable should have no free play. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Many rear disc brake systems use a small drum-in-hat parking brake inside the rotor hub. Technician A is correct. Technician B is incorrect because parking brake cables require some specified free play to prevent dragging. Cables adjusted too tightly cause the parking brake shoes or pads to drag.",
    diagram: "",
    terms: ["parking_brake", "brake_rotor", "drum_brake"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Drum_brake.svg/640px-Drum_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=PEI16pGxG0w",
    youtubeTitle: "Parking Brake Adjustment and Repair",
    qChinese: "技师A说大多数配备后盘式制动器的车辆的驻车制动使用安装在制动盘帽内的小型鼓式制动器总成。技师B说驻车制动拉索不应有任何游隙。谁说得对？",
    optionsChinese: [
      "A) 只有技师A正确",
      "B) 只有技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "许多后盘式制动系统在制动盘毂内使用小型鼓中帽式驻车制动器。技师A正确。技师B不正确，因为驻车制动拉索需要一些规定的游隙以防止拖滞。调整过紧的拉索会导致驻车制动蹄或片拖滞。"
  },
  {
    id: 114,
    q: "What is the primary purpose of the ABS (Anti-lock Braking System)?",
    options: [
      "A) To reduce stopping distance on dry pavement",
      "B) To prevent wheel lockup and maintain steering control during hard braking",
      "C) To increase brake pad life",
      "D) To eliminate the need for brake fluid changes"
    ],
    answer: 1,
    explanation: "The primary purpose of ABS is to prevent wheel lockup during hard or emergency braking, allowing the driver to maintain steering control. ABS modulates brake pressure rapidly at individual wheels to keep them rotating just below lockup. It does not necessarily shorten stopping distance on all surfaces.",
    diagram: "",
    terms: ["abs", "wheel_speed_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=rJn2h0-HXYA",
    youtubeTitle: "Anti-Lock Braking System (ABS) Explained",
    qChinese: "ABS（防抱死制动系统）的主要目的是什么？",
    optionsChinese: [
      "A) 减少干燥路面上的制动距离",
      "B) 防止车轮锁死并在急刹车时保持转向控制",
      "C) 延长制动片寿命",
      "D) 消除更换制动液的需要"
    ],
    explanationChinese: "ABS的主要目的是防止在急刹车或紧急制动时车轮锁死，使驾驶员保持转向控制。ABS在各个车轮上快速调节制动压力，使其保持在刚好低于锁死的状态旋转。它不一定在所有路面上缩短制动距离。"
  },
  {
    id: 115,
    q: "Which component generates the signal the ABS module uses to detect wheel speed?",
    options: [
      "A) Brake pressure sensor",
      "B) Wheel speed sensor and tone ring",
      "C) Yaw rate sensor",
      "D) Steering angle sensor"
    ],
    answer: 1,
    explanation: "The wheel speed sensor works with a tone ring (reluctor ring) mounted on the hub or axle shaft to generate a signal proportional to wheel rotational speed. The ABS module monitors these signals from each wheel to detect impending lockup. Yaw rate and steering sensors serve stability control functions.",
    diagram: "",
    terms: ["wheel_speed_sensor", "abs"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=rJn2h0-HXYA",
    youtubeTitle: "Wheel Speed Sensors Explained",
    qChinese: "哪个部件产生ABS模块用来检测车轮速度的信号？",
    optionsChinese: [
      "A) 制动压力传感器",
      "B) 轮速传感器和齿圈",
      "C) 横摆率传感器",
      "D) 转向角传感器"
    ],
    explanationChinese: "轮速传感器与安装在轮毂或半轴上的齿圈（磁阻环）配合工作，产生与车轮旋转速度成比例的信号。ABS模块监测每个车轮的这些信号以检测即将锁死的情况。横摆率和转向传感器服务于稳定性控制功能。"
  },
  {
    id: 116,
    q: "During brake bleeding, the brake pedal is pumped several times and then held down while the bleeder screw is opened. What type of bleeding method is this?",
    options: [
      "A) Pressure bleeding",
      "B) Vacuum bleeding",
      "C) Manual (two-person) bleeding",
      "D) Gravity bleeding"
    ],
    answer: 2,
    explanation: "Manual or two-person bleeding involves one person pumping the brake pedal and holding it down while another opens the bleeder screw to release air and fluid. Pressure bleeding uses a pressurized tank, vacuum bleeding uses a vacuum pump at the bleeder, and gravity bleeding lets fluid flow by gravity.",
    diagram: "",
    terms: ["brake_bleeding", "brake_fluid", "master_cylinder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=n1NvtMiPYQs",
    youtubeTitle: "How to Bleed Brakes - All Methods",
    qChinese: "在制动排气过程中，制动踏板被多次踩下然后保持踩住，同时打开放气螺丝。这是什么类型的排气方法？",
    optionsChinese: [
      "A) 压力排气法",
      "B) 真空排气法",
      "C) 手动（双人）排气法",
      "D) 重力排气法"
    ],
    explanationChinese: "手动或双人排气法需要一个人踩制动踏板并保持踩住，另一个人打开放气螺丝释放空气和制动液。压力排气使用加压罐，真空排气在放气口使用真空泵，重力排气让制动液靠重力流出。"
  },
  {
    id: 117,
    q: "A spongy brake pedal after a brake job is MOST likely caused by:",
    options: [
      "A) Brake pads installed backwards",
      "B) Air trapped in the hydraulic system",
      "C) Brake rotor installed on the wrong side",
      "D) Using the wrong torque on the caliper bolts"
    ],
    answer: 1,
    explanation: "A spongy brake pedal after a brake job is most commonly caused by air trapped in the hydraulic system. Air is compressible, unlike brake fluid, so it creates a soft or spongy feeling when the pedal is pressed. The system must be bled properly to remove all air from the lines.",
    diagram: "",
    terms: ["brake_bleeding", "brake_fluid", "brake_caliper"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=n1NvtMiPYQs",
    youtubeTitle: "Spongy Brake Pedal Diagnosis",
    qChinese: "制动维修后踏板发软最可能的原因是：",
    optionsChinese: [
      "A) 制动片装反",
      "B) 液压系统中有空气残留",
      "C) 制动盘装在了错误的一侧",
      "D) 制动钳螺栓扭矩不正确"
    ],
    explanationChinese: "制动维修后踏板发软最常见的原因是液压系统中残留空气。空气可压缩，不像制动液，所以踩踏板时会产生软或发绵的感觉。必须正确排气以排出管路中的所有空气。"
  },
  {
    id: 118,
    q: "What causes brake fade during repeated hard stops from high speed?",
    options: [
      "A) Excessive brake fluid in the system",
      "B) Heat buildup that reduces friction between pads and rotor",
      "C) Cold brake components",
      "D) ABS activation"
    ],
    answer: 1,
    explanation: "Brake fade occurs when excessive heat from repeated hard stops reduces the coefficient of friction between the brake pads and the rotor surface. The pads and rotor become so hot that they cannot generate normal friction levels. This can also cause brake fluid to boil, introducing gas into the hydraulic system.",
    diagram: "",
    terms: ["brake_pads", "brake_rotor", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "What Causes Brake Fade",
    qChinese: "在高速反复急刹车时什么原因导致制动衰退？",
    optionsChinese: [
      "A) 系统中制动液过多",
      "B) 热量积聚降低了制动片与制动盘之间的摩擦力",
      "C) 制动部件过冷",
      "D) ABS激活"
    ],
    explanationChinese: "制动衰退发生在反复急刹车产生的过多热量降低了制动片与制动盘表面之间的摩擦系数时。制动片和制动盘变得过热，无法产生正常的摩擦力水平。这还可能导致制动液沸腾，向液压系统中引入气体。"
  },
  {
    id: 119,
    q: "A vehicle with four-wheel disc brakes has a grinding noise from the left front wheel when braking. What is the MOST likely cause?",
    options: [
      "A) A worn wheel bearing",
      "B) Brake pads worn down to the metal backing plate",
      "C) A loose lug nut",
      "D) Excessive brake fluid"
    ],
    answer: 1,
    explanation: "A grinding noise during braking from one wheel typically indicates the brake pad friction material has worn completely through, leaving the metal backing plate grinding against the rotor surface. This causes rotor damage and reduced braking effectiveness. Immediate replacement of pads and rotor inspection is required.",
    diagram: "",
    terms: ["brake_pads", "brake_rotor", "brake_caliper"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "Brake Noise Diagnosis",
    qChinese: "四轮盘式制动器的车辆在制动时左前轮有磨擦声。最可能的原因是什么？",
    optionsChinese: [
      "A) 轮毂轴承磨损",
      "B) 制动片摩擦材料完全磨损至金属背板",
      "C) 车轮螺母松动",
      "D) 制动液过多"
    ],
    explanationChinese: "制动时来自一个车轮的磨擦声通常表明制动片摩擦材料已完全磨穿，金属背板在制动盘表面上磨擦。这会导致制动盘损坏和制动效果降低。需要立即更换制动片并检查制动盘。"
  },
  {
    id: 120,
    q: "What is the purpose of the brake caliper piston seal (square-cut seal)?",
    options: [
      "A) To prevent brake fluid from entering the caliper bore",
      "B) To seal fluid in the caliper and retract the piston slightly when pressure is released",
      "C) To lubricate the caliper slide pins",
      "D) To hold the brake pad in place"
    ],
    answer: 1,
    explanation: "The square-cut O-ring seal in the caliper bore seals hydraulic fluid and provides piston retraction. When pressure is applied, the seal flexes with the piston. When released, the seal returns to its original shape, pulling the piston back slightly. This creates the proper pad-to-rotor running clearance.",
    diagram: "",
    terms: ["brake_caliper", "brake_pads", "brake_rotor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Disk_brake_dread.jpg/640px-Disk_brake_dread.jpg",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "How Brake Calipers Work",
    qChinese: "制动钳活塞密封圈（方形切面密封圈）的作用是什么？",
    optionsChinese: [
      "A) 防止制动液进入钳体缸孔",
      "B) 密封钳内的制动液并在释放压力时稍微缩回活塞",
      "C) 润滑制动钳滑销",
      "D) 将制动片固定到位"
    ],
    explanationChinese: "制动钳缸孔中的方形切面O型密封圈密封液压油并提供活塞回缩功能。施加压力时，密封圈随活塞弯曲。释放时，密封圈恢复原始形状，稍微拉回活塞。这创造了适当的制动片与制动盘运行间隙。"
  },
  {
    id: 121,
    q: "Technician A says DOT 5.1 brake fluid is silicone-based like DOT 5. Technician B says DOT 5.1 is glycol-based and compatible with DOT 3 and DOT 4 fluids. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 1,
    explanation: "Despite the similar numbering, DOT 5.1 is glycol-based like DOT 3 and DOT 4 and is compatible with them. DOT 5 is silicone-based and must not be mixed with glycol-based fluids. DOT 5.1 has a higher boiling point than DOT 3 or DOT 4 but remains glycol-based and hygroscopic.",
    diagram: "",
    terms: ["brake_fluid", "master_cylinder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "Brake Fluid Types Explained",
    qChinese: "技师A说DOT 5.1制动液与DOT 5一样是硅基的。技师B说DOT 5.1是乙二醇基的，与DOT 3和DOT 4制动液兼容。谁说得对？",
    optionsChinese: [
      "A) 只有技师A正确",
      "B) 只有技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "尽管编号相似，DOT 5.1与DOT 3和DOT 4一样是乙二醇基的，并与它们兼容。DOT 5是硅基的，不能与乙二醇基制动液混合。DOT 5.1的沸点高于DOT 3或DOT 4，但仍然是乙二醇基的且具有吸湿性。"
  },
  {
    id: 122,
    q: "What is the function of the Hydraulic Control Unit (HCU) in an ABS system?",
    options: [
      "A) To generate hydraulic pressure for the brake system",
      "B) To modulate brake pressure to individual wheels by opening and closing solenoid valves",
      "C) To store brake fluid for the master cylinder",
      "D) To provide vacuum assist for the brake booster"
    ],
    answer: 1,
    explanation: "The HCU contains solenoid valves controlled by the ABS module. During an ABS event, these valves can hold, release, or reapply brake pressure to individual wheel circuits. This rapid modulation prevents wheel lockup while maintaining braking force. The master cylinder generates the base hydraulic pressure.",
    diagram: "",
    terms: ["abs", "brake_fluid", "master_cylinder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=rJn2h0-HXYA",
    youtubeTitle: "ABS Hydraulic Control Unit Explained",
    qChinese: "ABS系统中液压控制单元（HCU）的功能是什么？",
    optionsChinese: [
      "A) 为制动系统产生液压压力",
      "B) 通过打开和关闭电磁阀调节各车轮的制动压力",
      "C) 为主缸储存制动液",
      "D) 为制动助力器提供真空助力"
    ],
    explanationChinese: "HCU包含由ABS模块控制的电磁阀。在ABS事件中，这些阀门可以保持、释放或重新施加各车轮回路的制动压力。这种快速调节防止车轮锁死同时保持制动力。主缸产生基础液压压力。"
  },
  {
    id: 123,
    q: "A hydro-boost power brake system uses what fluid to provide brake assist?",
    options: [
      "A) Brake fluid from the master cylinder",
      "B) Power steering fluid from the power steering pump",
      "C) Engine oil",
      "D) Transmission fluid"
    ],
    answer: 1,
    explanation: "A hydro-boost system uses hydraulic pressure from the power steering pump to provide brake assist instead of engine vacuum. This system is commonly found on diesel vehicles or vehicles with insufficient vacuum for a vacuum booster. The power steering fluid provides the hydraulic energy to amplify brake pedal force.",
    diagram: "",
    terms: ["vacuum_booster", "master_cylinder", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=ydoKEPmuIYs",
    youtubeTitle: "Hydro-Boost Brake System Explained",
    qChinese: "液压助力制动系统使用什么液体提供制动助力？",
    optionsChinese: [
      "A) 主缸的制动液",
      "B) 动力转向泵的动力转向液",
      "C) 发动机机油",
      "D) 变速箱油"
    ],
    explanationChinese: "液压助力系统使用动力转向泵的液压压力代替发动机真空来提供制动助力。该系统常见于柴油车辆或真空不足以使用真空助力器的车辆。动力转向液提供液压能量来放大制动踏板力。"
  },
  {
    id: 124,
    q: "When replacing brake pads, a technician should push the caliper piston back into the bore. On a vehicle with rear disc brakes, what special procedure may be required for the rear caliper piston?",
    options: [
      "A) The rear piston must be hammered back in",
      "B) The rear piston must be rotated clockwise while being pushed in",
      "C) The rear piston should be left extended",
      "D) The rear piston retracts automatically when the ignition is turned on"
    ],
    answer: 1,
    explanation: "Many rear disc brake calipers with integrated parking brakes use a screw-type piston that must be rotated clockwise while being pressed back into the bore. A special caliper piston tool is used. Simply pushing without rotating will damage the piston mechanism and the self-adjusting parking brake feature.",
    diagram: "",
    terms: ["brake_caliper", "brake_pads", "parking_brake"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Disk_brake_dread.jpg/640px-Disk_brake_dread.jpg",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "How to Compress Rear Brake Caliper Pistons",
    qChinese: "更换制动片时，技师需要将制动钳活塞推回缸孔。在配备后盘式制动器的车辆上，后制动钳活塞可能需要什么特殊程序？",
    optionsChinese: [
      "A) 后活塞必须被敲回去",
      "B) 后活塞必须在推入的同时顺时针旋转",
      "C) 后活塞应保持伸出状态",
      "D) 打开点火开关时后活塞会自动缩回"
    ],
    explanationChinese: "许多带有集成驻车制动的后盘式制动钳使用螺旋式活塞，必须在将其压回缸孔的同时顺时针旋转。需要使用专用的制动钳活塞工具。不旋转直接推入会损坏活塞机构和自动调整驻车制动功能。"
  },
  {
    id: 125,
    q: "A technician notices blue discoloration on a brake rotor surface. What does this indicate?",
    options: [
      "A) The rotor is brand new",
      "B) The rotor has been overheated",
      "C) The rotor has surface rust",
      "D) The rotor coating is normal"
    ],
    answer: 1,
    explanation: "Blue or purple discoloration on a brake rotor surface indicates the rotor has been subjected to extreme heat. Overheating changes the metallurgy of the cast iron, making it harder and less effective at generating friction. An overheated rotor should be replaced because machining alone cannot restore its properties.",
    diagram: "",
    terms: ["brake_rotor", "brake_pads"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "Signs of Overheated Brake Rotors",
    qChinese: "技师注意到制动盘表面有蓝色变色。这表示什么？",
    optionsChinese: [
      "A) 制动盘是全新的",
      "B) 制动盘已过热",
      "C) 制动盘有表面锈蚀",
      "D) 制动盘涂层正常"
    ],
    explanationChinese: "制动盘表面的蓝色或紫色变色表明制动盘曾承受极端高温。过热改变了铸铁的金相组织，使其变硬并降低产生摩擦力的能力。过热的制动盘应予以更换，因为仅靠车削无法恢复其性能。"
  },
  {
    id: 126,
    q: "What happens if the master cylinder reservoir cap vent is blocked?",
    options: [
      "A) The brakes will apply on their own",
      "B) A vacuum forms in the reservoir that can prevent proper brake release",
      "C) The brake fluid will overheat",
      "D) The ABS system will activate"
    ],
    answer: 1,
    explanation: "The master cylinder reservoir cap has a vent that allows atmospheric pressure above the fluid. If blocked, a vacuum forms as fluid is pushed to the calipers during braking. This vacuum can hold the pistons out, preventing brake release and causing brake drag on all wheels.",
    diagram: "",
    terms: ["master_cylinder", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "Master Cylinder Reservoir Explained",
    qChinese: "如果主缸储液壶盖的通气孔被堵塞会怎样？",
    optionsChinese: [
      "A) 制动器会自行施加",
      "B) 储液壶中形成真空，可能阻止制动器正常释放",
      "C) 制动液会过热",
      "D) ABS系统会激活"
    ],
    explanationChinese: "主缸储液壶盖有一个通气孔，允许大气压力作用在液面上方。如果被堵塞，制动时液体被推向制动钳，储液壶中会形成真空。这个真空可以使活塞保持伸出状态，阻止制动释放并导致所有车轮制动拖滞。"
  },
  {
    id: 127,
    q: "A brake drum has a maximum diameter specification cast into it. What is the consequence of using a drum machined beyond this specification?",
    options: [
      "A) Improved cooling performance",
      "B) The drum may crack, overheat, or the brake shoes may not contact properly",
      "C) Better braking performance",
      "D) Reduced brake noise"
    ],
    answer: 1,
    explanation: "A drum machined beyond maximum diameter has thinner walls that cannot dissipate heat effectively. The oversized drum can crack or distort under braking heat. Additionally, the shoes may not contact the drum surface properly because the self-adjuster cannot compensate for the excessive clearance, reducing braking effectiveness.",
    diagram: "",
    terms: ["drum_brake", "brake_shoes"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Drum_brake.svg/640px-Drum_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=PEI16pGxG0w",
    youtubeTitle: "Brake Drum Inspection and Measurement",
    qChinese: "制动鼓上铸有最大直径规格。使用超过此规格车削的制动鼓会有什么后果？",
    optionsChinese: [
      "A) 改善散热性能",
      "B) 制动鼓可能开裂、过热，或制动蹄无法正确接触",
      "C) 更好的制动性能",
      "D) 减少制动噪音"
    ],
    explanationChinese: "超过最大直径车削的制动鼓壁更薄，无法有效散热。过大的制动鼓在制动高温下可能开裂或变形。此外，由于自动调整器无法补偿过大的间隙，制动蹄可能无法正确接触鼓面，降低制动效果。"
  },
  {
    id: 128,
    q: "What is the primary reason for using two separate hydraulic circuits in a dual-circuit master cylinder?",
    options: [
      "A) To increase braking force",
      "B) To provide a backup circuit if one circuit fails",
      "C) To reduce brake pedal effort",
      "D) To improve ABS performance"
    ],
    answer: 1,
    explanation: "A dual-circuit master cylinder has two separate hydraulic circuits so that if one circuit develops a leak and loses pressure, the other circuit still provides braking to two wheels. This split-circuit design is a critical safety feature required on all modern vehicles to prevent total brake failure from a single leak.",
    diagram: "",
    terms: ["master_cylinder", "brake_fluid", "brake_line"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "Dual Circuit Master Cylinder Explained",
    qChinese: "在双回路主缸中使用两个独立液压回路的主要原因是什么？",
    optionsChinese: [
      "A) 增加制动力",
      "B) 如果一个回路失效，提供备用回路",
      "C) 减少制动踏板力",
      "D) 改善ABS性能"
    ],
    explanationChinese: "双回路主缸有两个独立的液压回路，如果一个回路发生泄漏失去压力，另一个回路仍可为两个车轮提供制动。这种分回路设计是所有现代车辆必需的关键安全特性，防止单一泄漏导致完全制动失效。"
  },
  {
    id: 129,
    q: "A customer reports that the brake warning light on the dashboard is illuminated. Which of the following could cause this?",
    options: [
      "A) Brake pads at proper thickness",
      "B) Low brake fluid level in the master cylinder reservoir",
      "C) New brake rotors installed",
      "D) Properly adjusted parking brake"
    ],
    answer: 1,
    explanation: "The brake warning light can illuminate for several reasons including low brake fluid level, parking brake engaged, or a hydraulic system failure. Low fluid level in the reservoir triggers a float switch or sensor. Since low fluid often indicates worn pads or a leak, the cause must be diagnosed promptly.",
    diagram: "",
    terms: ["brake_fluid", "master_cylinder", "parking_brake"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "Brake Warning Light Diagnosis",
    qChinese: "客户报告仪表盘上的制动警告灯亮起。以下哪项可能导致此现象？",
    optionsChinese: [
      "A) 制动片厚度正常",
      "B) 主缸储液壶中制动液液位低",
      "C) 安装了新的制动盘",
      "D) 驻车制动调整正确"
    ],
    explanationChinese: "制动警告灯可因多种原因亮起，包括制动液液位低、驻车制动接合或液压系统故障。储液壶中液位低会触发浮子开关或传感器。由于低液位通常表示制动片磨损或泄漏，必须及时诊断原因。"
  },
  {
    id: 130,
    q: "Technician A says a stuck caliper slide pin can cause uneven brake pad wear. Technician B says a stuck slide pin can cause the vehicle to pull to one side during braking. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "A stuck caliper slide pin prevents the floating caliper from moving freely, causing one pad to contact the rotor more than the other, leading to uneven pad wear. It also creates unequal braking force compared to the opposite wheel, causing the vehicle to pull to one side. Both technicians are correct.",
    diagram: "",
    terms: ["brake_caliper", "brake_pads", "brake_rotor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Disk_brake_dread.jpg/640px-Disk_brake_dread.jpg",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "Brake Caliper Slide Pin Service",
    qChinese: "技师A说卡滞的制动钳滑销会导致制动片不均匀磨损。技师B说卡滞的滑销会导致制动时车辆向一侧偏。谁说得对？",
    optionsChinese: [
      "A) 只有技师A正确",
      "B) 只有技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "卡滞的制动钳滑销阻止浮动式制动钳自由移动，导致一侧制动片比另一侧更多地接触制动盘，造成不均匀的制动片磨损。它还会与对侧车轮产生不等的制动力，导致车辆向一侧偏移。两位技师都正确。"
  },
  {
    id: 131,
    q: "What instrument is used to measure brake rotor lateral runout?",
    options: [
      "A) Outside micrometer",
      "B) Dial indicator mounted on a fixed base",
      "C) Brake drum gauge",
      "D) Vernier caliper"
    ],
    answer: 1,
    explanation: "A dial indicator mounted on a stable base is positioned against the rotor friction surface while the rotor is rotated by hand. The indicator needle shows the total lateral runout, which is the side-to-side wobble of the rotor. Excessive runout causes pedal pulsation and uneven pad wear.",
    diagram: "",
    terms: ["brake_rotor", "brake_caliper"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "How to Measure Brake Rotor Runout",
    qChinese: "用什么仪器测量制动盘的横向跳动？",
    optionsChinese: [
      "A) 外径千分尺",
      "B) 安装在固定底座上的百分表",
      "C) 制动鼓量规",
      "D) 游标卡尺"
    ],
    explanationChinese: "将安装在稳定底座上的百分表抵在制动盘摩擦面上，用手旋转制动盘。指针显示总横向跳动量，即制动盘的左右摆动。过大的跳动会导致踏板脉动和不均匀的制动片磨损。"
  },
  {
    id: 132,
    q: "A vehicle equipped with ABS has the ABS warning light illuminated but the red brake warning light is off. What does this indicate?",
    options: [
      "A) Total brake failure",
      "B) The ABS system is disabled but normal braking is still available",
      "C) The parking brake is engaged",
      "D) The brake fluid is low"
    ],
    answer: 1,
    explanation: "When only the ABS warning light is on, it indicates a fault in the ABS system that has disabled anti-lock function. However, the base brake system still operates normally. The vehicle will stop as it would without ABS. The system should be scanned for diagnostic codes to identify the ABS fault.",
    diagram: "",
    terms: ["abs", "wheel_speed_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=rJn2h0-HXYA",
    youtubeTitle: "ABS Warning Light Diagnosis",
    qChinese: "配备ABS的车辆ABS警告灯亮起但红色制动警告灯未亮。这表示什么？",
    optionsChinese: [
      "A) 完全制动失效",
      "B) ABS系统已禁用但正常制动仍可用",
      "C) 驻车制动已接合",
      "D) 制动液不足"
    ],
    explanationChinese: "当仅ABS警告灯亮起时，表示ABS系统存在故障已禁用防抱死功能。但基础制动系统仍正常工作。车辆将像没有ABS一样停车。应使用诊断仪扫描故障码以识别ABS故障。"
  },
  {
    id: 133,
    q: "Which brake component is MOST likely to cause a constant scraping or squealing noise that stops when the brakes are applied?",
    options: [
      "A) A worn master cylinder",
      "B) A brake pad wear indicator tab contacting the rotor",
      "C) A leaking wheel cylinder",
      "D) A defective ABS module"
    ],
    answer: 1,
    explanation: "Brake pad wear indicator tabs are small metal strips that contact the rotor when the pad friction material wears thin. They create a squealing noise while the wheel rotates freely. When the brakes are applied, the pad presses flat against the rotor, silencing the indicator. This warns that pad replacement is needed.",
    diagram: "",
    terms: ["brake_pads", "brake_rotor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "Brake Pad Wear Indicators",
    qChinese: "哪个制动部件最可能导致持续的刮擦或尖叫噪音，且在踩制动时停止？",
    optionsChinese: [
      "A) 磨损的主缸",
      "B) 制动片磨损指示片接触制动盘",
      "C) 泄漏的轮缸",
      "D) 故障的ABS模块"
    ],
    explanationChinese: "制动片磨损指示片是小金属条，当制动片摩擦材料磨薄时会接触制动盘。车轮自由旋转时产生尖叫声。踩制动时，制动片平压在制动盘上，使指示片静音。这警告需要更换制动片。"
  },
  {
    id: 134,
    q: "During a vacuum brake booster test, the engine is turned off and the brake pedal is pumped several times to deplete vacuum reserve. What should happen when the pedal is held down and the engine is started?",
    options: [
      "A) The pedal should rise up higher",
      "B) The pedal should drop slightly as vacuum assist is restored",
      "C) The pedal should remain in the same position",
      "D) The pedal should become extremely hard"
    ],
    answer: 1,
    explanation: "When the engine starts, the intake manifold generates vacuum that is supplied to the booster. With the pedal held down, the restored vacuum assist causes the booster to amplify the applied force, making the pedal drop slightly. If the pedal does not drop, the booster or vacuum supply is faulty.",
    diagram: "",
    terms: ["vacuum_booster", "master_cylinder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=ydoKEPmuIYs",
    youtubeTitle: "How to Test a Brake Booster",
    qChinese: "在真空制动助力器测试中，关闭发动机并多次踩制动踏板以耗尽真空储备。保持踏板踩住并启动发动机时应发生什么？",
    optionsChinese: [
      "A) 踏板应升高",
      "B) 随着真空助力恢复踏板应稍微下沉",
      "C) 踏板应保持在同一位置",
      "D) 踏板应变得极硬"
    ],
    explanationChinese: "当发动机启动时，进气歧管产生的真空供应到助力器。保持踏板踩住时，恢复的真空助力使助力器放大施加的力，导致踏板稍微下沉。如果踏板不下沉，则助力器或真空供应有故障。"
  },
  {
    id: 135,
    q: "What type of wheel speed sensor generates its own voltage signal without an external power supply?",
    options: [
      "A) Hall-effect sensor",
      "B) Passive (variable reluctance) sensor",
      "C) Magnetoresistive sensor",
      "D) Piezoelectric sensor"
    ],
    answer: 1,
    explanation: "A passive or variable reluctance wheel speed sensor generates an AC voltage signal as the tone ring teeth pass by its magnetic tip. The signal strength and frequency vary with wheel speed. It requires no external power supply. Hall-effect sensors are active sensors that require a power supply to operate.",
    diagram: "",
    terms: ["wheel_speed_sensor", "abs"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=rJn2h0-HXYA",
    youtubeTitle: "Wheel Speed Sensor Types",
    qChinese: "哪种类型的轮速传感器无需外部电源即可自行产生电压信号？",
    optionsChinese: [
      "A) 霍尔效应传感器",
      "B) 被动式（可变磁阻）传感器",
      "C) 磁阻传感器",
      "D) 压电传感器"
    ],
    explanationChinese: "被动式或可变磁阻轮速传感器在齿圈齿经过其磁性端部时产生交流电压信号。信号强度和频率随车轮速度变化。它不需要外部电源。霍尔效应传感器是需要电源供应才能工作的有源传感器。"
  },
  {
    id: 136,
    q: "A steel brake line has been damaged and needs to be replaced. What type of fitting is commonly used on brake lines?",
    options: [
      "A) Compression fitting",
      "B) Double flare or ISO bubble flare fitting",
      "C) Push-to-connect fitting",
      "D) Soldered fitting"
    ],
    answer: 1,
    explanation: "Steel brake lines use either double flare (inverted flare) or ISO bubble flare fittings. These fittings create a strong, leak-proof connection that withstands high hydraulic pressures. Single flare or compression fittings are not acceptable for brake lines because they cannot handle the high pressures and vibrations.",
    diagram: "",
    terms: ["brake_line", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=n1NvtMiPYQs",
    youtubeTitle: "Brake Line Flaring Techniques",
    qChinese: "钢制制动管路损坏需要更换。制动管路上通常使用什么类型的接头？",
    optionsChinese: [
      "A) 压缩接头",
      "B) 双重扩口或ISO气泡扩口接头",
      "C) 推入式快接接头",
      "D) 焊接接头"
    ],
    explanationChinese: "钢制制动管路使用双重扩口（倒扩口）或ISO气泡扩口接头。这些接头创建牢固、防漏的连接，能承受高液压压力。单扩口或压缩接头不适用于制动管路，因为它们无法承受高压和振动。"
  },
  {
    id: 137,
    q: "A customer complains that the vehicle drifts to the left only when the brakes are released, not during braking. What is the MOST likely cause?",
    options: [
      "A) A seized left front caliper that is not releasing",
      "B) A worn left front brake pad",
      "C) Low brake fluid",
      "D) A faulty ABS sensor"
    ],
    answer: 0,
    explanation: "A seized caliper that does not release after braking will continue to apply braking force to one wheel even when the pedal is released. This creates drag on the affected side, causing the vehicle to drift toward that side during normal driving. The opposite side wheel rolls freely, creating an imbalance.",
    diagram: "",
    terms: ["brake_caliper", "brake_pads", "brake_rotor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Disk_brake_dread.jpg/640px-Disk_brake_dread.jpg",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "Diagnosing a Sticking Brake Caliper",
    qChinese: "客户抱怨车辆仅在释放制动器时向左偏移，制动时不偏。最可能的原因是什么？",
    optionsChinese: [
      "A) 左前制动钳卡死未释放",
      "B) 左前制动片磨损",
      "C) 制动液不足",
      "D) ABS传感器故障"
    ],
    explanationChinese: "制动后不释放的卡死制动钳即使松开踏板也会继续对一个车轮施加制动力。这在受影响的一侧产生阻力，导致正常行驶时车辆向该侧偏移。对侧车轮自由滚动，造成不平衡。"
  },
  {
    id: 138,
    q: "When bench bleeding a new master cylinder, what is being removed from the cylinder?",
    options: [
      "A) Old brake fluid",
      "B) Manufacturing debris",
      "C) Trapped air from the internal passages",
      "D) Excess lubricant"
    ],
    answer: 2,
    explanation: "Bench bleeding removes air trapped in the internal passages and chambers of a new master cylinder before installation. By cycling the piston with the ports connected by tubes back to the reservoir, air bubbles are expelled. Installing an unbled master cylinder would introduce air into the brake system.",
    diagram: "",
    terms: ["master_cylinder", "brake_fluid", "brake_bleeding"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "How to Bench Bleed a Master Cylinder",
    qChinese: "对新主缸进行台架排气时，从缸体中排出的是什么？",
    optionsChinese: [
      "A) 旧制动液",
      "B) 制造碎屑",
      "C) 内部通道中的残留空气",
      "D) 多余的润滑剂"
    ],
    explanationChinese: "台架排气在安装前排出新主缸内部通道和腔室中的残留空气。通过将端口用管子连回储液壶并循环活塞，排出气泡。安装未经排气的主缸会将空气引入制动系统。"
  },
  {
    id: 139,
    q: "A vehicle has rear drum brakes that grab suddenly when applied lightly. What is the MOST likely cause?",
    options: [
      "A) Glazed or contaminated brake shoe linings",
      "B) Weak return springs",
      "C) A leaking wheel cylinder depositing fluid on the shoe linings",
      "D) Improperly adjusted parking brake"
    ],
    answer: 2,
    explanation: "A leaking wheel cylinder can deposit brake fluid onto the brake shoe linings. The contaminated linings initially have reduced friction but can grab suddenly and unevenly as hydraulic pressure builds. The fluid contamination creates inconsistent friction characteristics, causing unpredictable braking behavior.",
    diagram: "",
    terms: ["wheel_cylinder", "brake_shoes", "drum_brake", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Drum_brake.svg/640px-Drum_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=PEI16pGxG0w",
    youtubeTitle: "Drum Brake Wheel Cylinder Inspection",
    qChinese: "车辆的后鼓式制动器在轻踩时突然抱死。最可能的原因是什么？",
    optionsChinese: [
      "A) 制动蹄衬片玻璃化或污染",
      "B) 回位弹簧变弱",
      "C) 轮缸泄漏将制动液沉积在蹄衬片上",
      "D) 驻车制动调整不当"
    ],
    explanationChinese: "泄漏的轮缸可将制动液沉积在制动蹄衬片上。受污染的衬片最初摩擦力降低，但随着液压压力增大会突然且不均匀地抓紧。液体污染造成不一致的摩擦特性，导致不可预测的制动行为。"
  },
  {
    id: 140,
    q: "What is the correct procedure if the brake fluid reservoir runs dry during brake bleeding?",
    options: [
      "A) Continue bleeding and top off the reservoir at the end",
      "B) Stop bleeding, refill the reservoir, and start the entire bleeding process over",
      "C) Switch to gravity bleeding to save fluid",
      "D) Add power steering fluid to the reservoir temporarily"
    ],
    answer: 1,
    explanation: "If the reservoir runs dry during bleeding, air enters the master cylinder and is distributed throughout the hydraulic system. The entire bleeding process must be restarted from scratch after refilling the reservoir. This is why the technician must continuously monitor the fluid level during bleeding.",
    diagram: "",
    terms: ["brake_bleeding", "brake_fluid", "master_cylinder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=n1NvtMiPYQs",
    youtubeTitle: "Brake Bleeding Tips and Mistakes",
    qChinese: "如果在制动排气过程中储液壶干涸，正确的程序是什么？",
    optionsChinese: [
      "A) 继续排气，最后再补满储液壶",
      "B) 停止排气，重新加满储液壶，从头开始整个排气过程",
      "C) 改用重力排气法以节省制动液",
      "D) 临时向储液壶中添加动力转向液"
    ],
    explanationChinese: "如果排气过程中储液壶干涸，空气会进入主缸并分布到整个液压系统。必须在重新加满储液壶后从头重新开始整个排气过程。这就是技师在排气过程中必须持续监控液位的原因。"
  },
  {
    id: 141,
    q: "Technician A says a swollen rubber brake hose can act as a one-way valve, allowing fluid to apply the brake but not release. Technician B says a swollen brake hose should be repaired with a patch. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "A deteriorated rubber brake hose can swell internally, creating a flap that allows pressurized fluid through during braking but traps it when the pedal is released. This causes brake drag on that wheel. Brake hoses must always be replaced, never patched or repaired. Only Technician A is correct.",
    diagram: "",
    terms: ["brake_hose", "brake_caliper", "brake_line"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=n1NvtMiPYQs",
    youtubeTitle: "Brake Hose Inspection and Replacement",
    qChinese: "技师A说膨胀的橡胶制动软管可以像单向阀一样工作，允许制动液施加制动但不释放。技师B说膨胀的制动软管可以用补丁修补。谁说得对？",
    optionsChinese: [
      "A) 只有技师A正确",
      "B) 只有技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "老化的橡胶制动软管可能内部膨胀，形成一个活瓣，制动时允许加压液体通过，但松开踏板时将其困住。这会导致该车轮制动拖滞。制动软管必须始终更换，不能补丁修补。只有技师A正确。"
  },
  {
    id: 142,
    q: "What is the purpose of anti-rattle clips or springs on disc brake pads?",
    options: [
      "A) To increase braking force",
      "B) To prevent pad vibration and noise during driving",
      "C) To hold the caliper piston in place",
      "D) To adjust pad-to-rotor clearance"
    ],
    answer: 1,
    explanation: "Anti-rattle clips, springs, and shims keep the brake pads firmly positioned in the caliper bracket, preventing them from vibrating or rattling during driving and braking. Without these hardware components, the pads can move loosely, creating annoying rattling noises and potentially uneven brake application.",
    diagram: "",
    terms: ["brake_pads", "brake_caliper"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "Brake Pad Hardware Installation",
    qChinese: "盘式制动片上的防抖夹或弹簧的作用是什么？",
    optionsChinese: [
      "A) 增加制动力",
      "B) 防止行驶过程中制动片振动和噪音",
      "C) 将制动钳活塞固定到位",
      "D) 调整制动片与制动盘的间隙"
    ],
    explanationChinese: "防抖夹、弹簧和垫片将制动片牢固地固定在制动钳支架中，防止其在行驶和制动过程中振动或产生噪音。没有这些硬件组件，制动片可能松动移动，产生恼人的噪音并可能导致制动施加不均匀。"
  },
  {
    id: 143,
    q: "A vehicle has a low but firm brake pedal. What is the MOST likely cause?",
    options: [
      "A) Air in the brake system",
      "B) A failed brake booster",
      "C) Excessive brake pad or shoe wear",
      "D) A plugged brake line"
    ],
    answer: 2,
    explanation: "A low but firm brake pedal indicates excessive clearance between the friction material and the rotor or drum surface, usually caused by worn brake pads or shoes. The pedal travels further before the pads or shoes contact the friction surface. Air would cause a spongy pedal, and a failed booster causes a hard pedal.",
    diagram: "",
    terms: ["brake_pads", "brake_shoes", "master_cylinder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "Low Brake Pedal Diagnosis",
    qChinese: "车辆的制动踏板低但坚实。最可能的原因是什么？",
    optionsChinese: [
      "A) 制动系统中有空气",
      "B) 制动助力器失效",
      "C) 制动片或制动蹄过度磨损",
      "D) 制动管路堵塞"
    ],
    explanationChinese: "低但坚实的制动踏板表明摩擦材料与制动盘或制动鼓表面之间的间隙过大，通常由制动片或制动蹄磨损引起。踏板需要更长的行程才能使制动片或蹄接触摩擦面。空气会导致踏板发软，助力器失效会导致踏板很硬。"
  },
  {
    id: 144,
    q: "What should a technician do BEFORE pushing a disc brake caliper piston back into its bore?",
    options: [
      "A) Remove the ABS fuse",
      "B) Open the bleeder screw or remove the reservoir cap to prevent forcing contaminated fluid back through the system",
      "C) Disconnect the battery",
      "D) Remove the brake rotor"
    ],
    answer: 1,
    explanation: "Before pushing the caliper piston back, the technician should open the bleeder screw or at minimum remove the reservoir cap. This prevents old, contaminated brake fluid from being forced backward through the ABS hydraulic control unit and into the master cylinder, where it could damage internal seals and valves.",
    diagram: "",
    terms: ["brake_caliper", "brake_fluid", "brake_bleeding"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Disk_brake_dread.jpg/640px-Disk_brake_dread.jpg",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "Proper Caliper Piston Retraction",
    qChinese: "在将盘式制动钳活塞推回缸孔之前，技师应该做什么？",
    optionsChinese: [
      "A) 拆下ABS保险丝",
      "B) 打开放气螺丝或取下储液壶盖以防止将污染的制动液强行压回系统",
      "C) 断开电池",
      "D) 拆下制动盘"
    ],
    explanationChinese: "在推回制动钳活塞之前，技师应打开放气螺丝或至少取下储液壶盖。这防止将旧的受污染制动液强行压回通过ABS液压控制单元和主缸，否则可能损坏内部密封件和阀门。"
  },
  {
    id: 145,
    q: "Technician A says a brake lathe is used to resurface rotors and drums. Technician B says a non-directional finish should be applied to the rotor after machining. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "A brake lathe machines rotors and drums to restore a smooth, flat friction surface. After machining, a non-directional finish is applied using a sanding disc in a swirling pattern. This crosshatch pattern helps seat new brake pads quickly and reduces brake noise. Both technicians are correct.",
    diagram: "",
    terms: ["brake_rotor", "drum_brake", "brake_pads"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "Brake Rotor Resurfacing",
    qChinese: "技师A说制动车床用于翻修制动盘和制动鼓。技师B说车削后应在制动盘上施加非定向表面处理。谁说得对？",
    optionsChinese: [
      "A) 只有技师A正确",
      "B) 只有技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "制动车床车削制动盘和制动鼓以恢复光滑平整的摩擦表面。车削后，使用砂盘以旋转方式施加非定向表面处理。这种交叉纹理有助于新制动片快速磨合并减少制动噪音。两位技师都正确。"
  },
  {
    id: 146,
    q: "What is the difference between a leading shoe and a trailing shoe in a drum brake?",
    options: [
      "A) The leading shoe is always larger than the trailing shoe",
      "B) The leading shoe is self-energizing because it is applied in the direction of drum rotation",
      "C) The trailing shoe provides more braking force",
      "D) There is no functional difference between them"
    ],
    answer: 1,
    explanation: "The leading shoe is applied so that drum rotation tends to pull it tighter against the drum surface, creating a self-energizing or servo effect that increases braking force. The trailing shoe is applied against the direction of rotation, so drum rotation tends to push it away, producing less braking force.",
    diagram: "",
    terms: ["brake_shoes", "drum_brake"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Drum_brake.svg/640px-Drum_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=PEI16pGxG0w",
    youtubeTitle: "Leading and Trailing Drum Brake Shoes",
    qChinese: "鼓式制动器中领蹄和从蹄有什么区别？",
    optionsChinese: [
      "A) 领蹄总是比从蹄大",
      "B) 领蹄具有自增力作用，因为它沿制动鼓旋转方向施加",
      "C) 从蹄提供更大的制动力",
      "D) 它们之间没有功能差异"
    ],
    explanationChinese: "领蹄的施加方向使制动鼓旋转趋向于将其更紧地拉向鼓面，产生自增力或伺服效应，增加制动力。从蹄的施加方向与旋转相反，因此鼓的旋转趋向于将其推离，产生较小的制动力。"
  },
  {
    id: 147,
    q: "A technician is performing a brake inspection and finds brake fluid on the inner surface of a tire. What component should be inspected?",
    options: [
      "A) The brake rotor",
      "B) The wheel cylinder or caliper at that wheel for leaks",
      "C) The tire pressure monitoring sensor",
      "D) The wheel bearing seal"
    ],
    answer: 1,
    explanation: "Brake fluid on the inner tire surface indicates a hydraulic leak at that wheel. The wheel cylinder on drum brakes or the caliper on disc brakes should be inspected for leaking seals. A leaking wheel cylinder or caliper reduces braking effectiveness at that wheel and can contaminate brake shoe linings.",
    diagram: "",
    terms: ["wheel_cylinder", "brake_caliper", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Drum_brake.svg/640px-Drum_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=PEI16pGxG0w",
    youtubeTitle: "Brake Fluid Leak Inspection",
    qChinese: "技师在进行制动检查时发现轮胎内侧表面有制动液。应检查哪个部件？",
    optionsChinese: [
      "A) 制动盘",
      "B) 该车轮的轮缸或制动钳是否泄漏",
      "C) 胎压监测传感器",
      "D) 轮毂轴承密封件"
    ],
    explanationChinese: "轮胎内表面的制动液表明该车轮有液压泄漏。应检查鼓式制动器的轮缸或盘式制动器的制动钳的密封件是否泄漏。泄漏的轮缸或制动钳会降低该车轮的制动效果，并可能污染制动蹄衬片。"
  },
  {
    id: 148,
    q: "What is the purpose of the check valve in a vacuum brake booster?",
    options: [
      "A) To regulate brake fluid pressure",
      "B) To maintain vacuum in the booster when the engine is off or during low vacuum conditions",
      "C) To prevent brake fluid from entering the booster",
      "D) To control ABS operation"
    ],
    answer: 1,
    explanation: "The one-way check valve at the booster vacuum hose connection holds vacuum in the booster chamber when the engine is off or when manifold vacuum drops during acceleration. This provides a reserve of vacuum for one or two brake applications even without engine vacuum, ensuring brake assist availability.",
    diagram: "",
    terms: ["vacuum_booster", "master_cylinder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=ydoKEPmuIYs",
    youtubeTitle: "Brake Booster Check Valve Function",
    qChinese: "真空制动助力器中单向阀的作用是什么？",
    optionsChinese: [
      "A) 调节制动液压力",
      "B) 在发动机关闭或低真空条件下保持助力器中的真空",
      "C) 防止制动液进入助力器",
      "D) 控制ABS操作"
    ],
    explanationChinese: "助力器真空软管连接处的单向阀在发动机关闭或加速时进气歧管真空降低时保持助力器腔室中的真空。这提供了即使没有发动机真空也能进行一到两次制动操作的真空储备，确保制动助力可用。"
  },
  {
    id: 149,
    q: "Technician A says brake rotors should be replaced in pairs on the same axle. Technician B says mixing different brake pad friction materials on the same axle is acceptable. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Brake rotors should be replaced in pairs on the same axle to ensure even braking performance and prevent pull. Using different friction material types on the same axle would create unequal braking forces between the left and right wheels, causing the vehicle to pull during braking. Only Technician A is correct.",
    diagram: "",
    terms: ["brake_rotor", "brake_pads"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "When to Replace Brake Rotors",
    qChinese: "技师A说制动盘应在同一轴上成对更换。技师B说在同一轴上混用不同的制动片摩擦材料是可以接受的。谁说得对？",
    optionsChinese: [
      "A) 只有技师A正确",
      "B) 只有技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "制动盘应在同一轴上成对更换以确保均匀的制动性能并防止偏移。在同一轴上使用不同类型的摩擦材料会在左右车轮之间产生不等的制动力，导致制动时车辆偏移。只有技师A正确。"
  },
  {
    id: 150,
    q: "What is the MOST common type of master cylinder used on modern vehicles?",
    options: [
      "A) Single-circuit master cylinder",
      "B) Tandem (dual-circuit) master cylinder",
      "C) Triple-circuit master cylinder",
      "D) Gravity-fed master cylinder"
    ],
    answer: 1,
    explanation: "Modern vehicles use a tandem or dual-circuit master cylinder that has two separate pistons in one bore, each pressurizing an independent hydraulic circuit. This provides a safety backup so that if one circuit fails, the other still provides braking to two wheels. Federal safety standards require this design.",
    diagram: "",
    terms: ["master_cylinder", "brake_fluid", "brake_line"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "Tandem Master Cylinder Operation",
    qChinese: "现代车辆上最常用的主缸类型是什么？",
    optionsChinese: [
      "A) 单回路主缸",
      "B) 串联（双回路）主缸",
      "C) 三回路主缸",
      "D) 重力供给主缸"
    ],
    explanationChinese: "现代车辆使用串联或双回路主缸，在一个缸孔中有两个独立的活塞，各自加压一个独立的液压回路。这提供了安全备份，如果一个回路失效，另一个仍可为两个车轮提供制动。联邦安全标准要求此设计。"
  },
  {
    id: 151,
    q: "A brake pedal slowly sinks when held at a stop but the fluid level is not dropping. What does this indicate?",
    options: [
      "A) Normal brake operation",
      "B) An internal master cylinder seal leak allowing fluid to bypass between chambers",
      "C) Worn brake pads",
      "D) A sticking caliper"
    ],
    answer: 1,
    explanation: "A sinking pedal with no external fluid loss points to internal master cylinder bypass. The primary or secondary piston seals are worn, allowing fluid to pass from the high-pressure side to the low-pressure side internally. The fluid stays in the cylinder but the pedal sinks because pressure cannot be maintained.",
    diagram: "",
    terms: ["master_cylinder", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "Internal Master Cylinder Leak Diagnosis",
    qChinese: "停车时踩住制动踏板缓慢下沉但制动液液位没有下降。这表示什么？",
    optionsChinese: [
      "A) 正常制动操作",
      "B) 主缸内部密封泄漏，允许制动液在腔室之间旁通",
      "C) 制动片磨损",
      "D) 制动钳卡滞"
    ],
    explanationChinese: "踏板下沉但无外部液体损失指向主缸内部旁通。主活塞或副活塞密封件磨损，允许制动液从高压侧内部流向低压侧。液体留在缸内但踏板下沉因为无法维持压力。"
  },
  {
    id: 152,
    q: "When servicing disc brakes, why is it important to lubricate the caliper slide pins with the correct silicone-based brake grease?",
    options: [
      "A) To increase braking force",
      "B) To prevent the slide pins from seizing and ensure the caliper floats freely",
      "C) To prevent brake noise from the rotor",
      "D) To protect the brake pads from contamination"
    ],
    answer: 1,
    explanation: "Caliper slide pins must be lubricated with the correct silicone-based grease to prevent corrosion and seizing. If slide pins seize, the floating caliper cannot move, resulting in uneven pad wear, reduced braking, and brake pull. Petroleum-based grease damages the rubber boots and should never be used.",
    diagram: "",
    terms: ["brake_caliper", "brake_pads"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Disk_brake_dread.jpg/640px-Disk_brake_dread.jpg",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "Caliper Slide Pin Maintenance",
    qChinese: "维修盘式制动器时，为什么用正确的硅基制动润滑脂润滑制动钳滑销很重要？",
    optionsChinese: [
      "A) 增加制动力",
      "B) 防止滑销卡死，确保制动钳自由浮动",
      "C) 防止制动盘发出噪音",
      "D) 保护制动片免受污染"
    ],
    explanationChinese: "制动钳滑销必须用正确的硅基润滑脂润滑以防止腐蚀和卡死。如果滑销卡死，浮动式制动钳无法移动，导致制动片不均匀磨损、制动力降低和制动偏移。石油基润滑脂会损坏橡胶防尘套，绝不能使用。"
  },
  {
    id: 153,
    q: "What does the term 'brake pedal free play' refer to?",
    options: [
      "A) The distance the pedal travels before any braking force is applied",
      "B) The total distance the pedal can travel",
      "C) The force required to push the pedal",
      "D) The time it takes for the brakes to release"
    ],
    answer: 0,
    explanation: "Brake pedal free play is the distance the pedal moves from its rest position before the pushrod contacts the master cylinder piston and begins to build hydraulic pressure. Some free play is necessary to ensure the master cylinder piston fully returns and the compensating port remains open for proper brake release.",
    diagram: "",
    terms: ["master_cylinder", "vacuum_booster"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "Brake Pedal Free Play Adjustment",
    qChinese: "'制动踏板游隙'指的是什么？",
    optionsChinese: [
      "A) 踏板在施加任何制动力之前移动的距离",
      "B) 踏板可以移动的总距离",
      "C) 推动踏板所需的力",
      "D) 制动器释放所需的时间"
    ],
    explanationChinese: "制动踏板游隙是踏板从静止位置移动到推杆接触主缸活塞并开始建立液压压力之前的距离。一些游隙是必要的，以确保主缸活塞完全复位且补偿孔保持打开，以便正确释放制动。"
  },
  {
    id: 154,
    q: "During ABS operation, the driver feels a rapid pulsation in the brake pedal and hears a buzzing sound. What is happening?",
    options: [
      "A) The brake system is malfunctioning",
      "B) Normal ABS operation as the system rapidly modulates brake pressure",
      "C) The brake booster is failing",
      "D) The brake pads are worn out"
    ],
    answer: 1,
    explanation: "Pedal pulsation and a buzzing or chattering sound during hard braking is normal ABS operation. The hydraulic control unit solenoid valves and pump motor rapidly cycle brake pressure to prevent wheel lockup. The pulsation feeds back through the brake pedal. Drivers should maintain steady pedal pressure during ABS activation.",
    diagram: "",
    terms: ["abs", "wheel_speed_sensor", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=rJn2h0-HXYA",
    youtubeTitle: "What ABS Feels Like When Activated",
    qChinese: "ABS工作时，驾驶员感到制动踏板快速脉动并听到嗡嗡声。发生了什么？",
    optionsChinese: [
      "A) 制动系统故障",
      "B) 正常的ABS操作，系统快速调节制动压力",
      "C) 制动助力器正在失效",
      "D) 制动片已磨损"
    ],
    explanationChinese: "急刹车时踏板脉动和嗡嗡声或抖动声是正常的ABS操作。液压控制单元的电磁阀和泵电机快速循环制动压力以防止车轮锁死。脉动通过制动踏板反馈。驾驶员在ABS激活期间应保持稳定的踏板压力。"
  },
  {
    id: 155,
    q: "A vehicle has excessive brake pedal travel but good pedal firmness once the brakes engage. Which of the following is the MOST likely cause?",
    options: [
      "A) A failed vacuum booster",
      "B) Rear drum brake shoes out of adjustment",
      "C) A master cylinder internal leak",
      "D) Contaminated brake fluid"
    ],
    answer: 1,
    explanation: "Excessive pedal travel with good firmness once engaged indicates too much clearance between the brake shoes and drum. The pedal must push more fluid to close this gap before braking begins. Out-of-adjustment rear drum brakes are the most common cause. The self-adjuster mechanism may be faulty or need manual adjustment.",
    diagram: "",
    terms: ["drum_brake", "brake_shoes", "master_cylinder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Drum_brake.svg/640px-Drum_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=PEI16pGxG0w",
    youtubeTitle: "Drum Brake Adjustment",
    qChinese: "车辆制动踏板行程过大，但制动接合后踏板硬度良好。以下哪项是最可能的原因？",
    optionsChinese: [
      "A) 真空助力器失效",
      "B) 后鼓式制动蹄调整不当",
      "C) 主缸内部泄漏",
      "D) 制动液受污染"
    ],
    explanationChinese: "踏板行程过大但接合后硬度良好表明制动蹄与制动鼓之间间隙过大。踏板必须推动更多制动液来关闭此间隙才能开始制动。后鼓式制动器调整不当是最常见的原因。自动调整机构可能故障或需要手动调整。"
  },
  {
    id: 156,
    q: "What is the purpose of the hold-down springs in a drum brake assembly?",
    options: [
      "A) To keep the brake shoes flat against the backing plate",
      "B) To apply the brake shoes to the drum",
      "C) To return the shoes to the released position",
      "D) To adjust shoe-to-drum clearance"
    ],
    answer: 0,
    explanation: "Hold-down springs keep the brake shoes flat against the backing plate, preventing them from wobbling or vibrating. This ensures proper shoe contact with the drum surface when the brakes are applied. Return springs are responsible for pulling the shoes away from the drum, and the self-adjuster maintains clearance.",
    diagram: "",
    terms: ["brake_shoes", "drum_brake"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Drum_brake.svg/640px-Drum_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=PEI16pGxG0w",
    youtubeTitle: "Drum Brake Hardware Components",
    qChinese: "鼓式制动器总成中固定弹簧的作用是什么？",
    optionsChinese: [
      "A) 使制动蹄平贴在底板上",
      "B) 将制动蹄施加到制动鼓上",
      "C) 使制动蹄回到释放位置",
      "D) 调整蹄与鼓的间隙"
    ],
    explanationChinese: "固定弹簧使制动蹄平贴在底板上，防止其摇晃或振动。这确保制动施加时制动蹄与制动鼓表面的正确接触。回位弹簧负责将蹄从鼓面拉开，自动调整器维持间隙。"
  },
  {
    id: 157,
    q: "A technician is replacing brake shoes on a drum brake. What hardware should typically be replaced at the same time?",
    options: [
      "A) Only the brake drum",
      "B) The return springs, hold-down springs, and self-adjuster hardware",
      "C) The wheel bearing",
      "D) The brake master cylinder"
    ],
    answer: 1,
    explanation: "When replacing brake shoes, all drum brake hardware including return springs, hold-down springs, and self-adjuster components should be replaced. These components weaken from heat and age. Weak springs cause brake drag, noise, and improper shoe operation. Most brake shoe kits include a hardware set for this reason.",
    diagram: "",
    terms: ["brake_shoes", "drum_brake"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Drum_brake.svg/640px-Drum_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=PEI16pGxG0w",
    youtubeTitle: "Complete Drum Brake Service",
    qChinese: "技师正在更换鼓式制动器的制动蹄。通常应同时更换哪些硬件？",
    optionsChinese: [
      "A) 仅制动鼓",
      "B) 回位弹簧、固定弹簧和自动调整器硬件",
      "C) 轮毂轴承",
      "D) 制动主缸"
    ],
    explanationChinese: "更换制动蹄时，所有鼓式制动器硬件包括回位弹簧、固定弹簧和自动调整器部件都应更换。这些部件因高温和老化而变弱。变弱的弹簧导致制动拖滞、噪音和蹄操作不当。大多数制动蹄套件因此包含硬件组。"
  },
  {
    id: 158,
    q: "Which of the following conditions would require replacement rather than machining of a brake rotor?",
    options: [
      "A) Light surface scoring",
      "B) The rotor is at or below the minimum thickness specification",
      "C) Minor surface rust after overnight parking",
      "D) A small amount of lateral runout within specification"
    ],
    answer: 1,
    explanation: "A rotor at or below minimum thickness must be replaced because there is no material left to machine. Machining would bring it even further below specification, creating a dangerous condition. Light scoring can be machined out, surface rust is normal and wears off, and runout within specification requires no action.",
    diagram: "",
    terms: ["brake_rotor", "brake_pads"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "When to Replace vs Machine Brake Rotors",
    qChinese: "以下哪种情况需要更换制动盘而不是车削？",
    optionsChinese: [
      "A) 轻微表面划痕",
      "B) 制动盘达到或低于最小厚度规格",
      "C) 过夜停车后轻微表面锈蚀",
      "D) 少量横向跳动在规格范围内"
    ],
    explanationChinese: "达到或低于最小厚度的制动盘必须更换，因为没有多余材料可供车削。车削会使其进一步低于规格，造成危险状况。轻微划痕可以车削消除，表面锈蚀是正常的会自行磨掉，规格范围内的跳动不需处理。"
  },
  {
    id: 159,
    q: "A vehicle has a brake pedal that requires much more effort than normal to stop. The engine is running. What system should be checked FIRST?",
    options: [
      "A) The ABS system",
      "B) The power brake assist system (booster)",
      "C) The brake calipers",
      "D) The brake fluid type"
    ],
    answer: 1,
    explanation: "A hard brake pedal with the engine running indicates a loss of power brake assist. The vacuum booster or hydro-boost system should be checked first including the vacuum hose, check valve, and booster diaphragm. Without power assist, the driver must apply much greater force to generate adequate braking pressure.",
    diagram: "",
    terms: ["vacuum_booster", "master_cylinder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=ydoKEPmuIYs",
    youtubeTitle: "Hard Brake Pedal Diagnosis",
    qChinese: "车辆的制动踏板需要比正常情况大得多的力才能停车。发动机正在运行。应首先检查什么系统？",
    optionsChinese: [
      "A) ABS系统",
      "B) 动力制动助力系统（助力器）",
      "C) 制动钳",
      "D) 制动液类型"
    ],
    explanationChinese: "发动机运行时制动踏板很硬表明失去了动力制动助力。应首先检查真空助力器或液压助力系统，包括真空软管、单向阀和助力器膜片。没有动力助力，驾驶员必须施加更大的力才能产生足够的制动压力。"
  },
  {
    id: 160,
    q: "Technician A says the parking brake should hold the vehicle on a moderate incline. Technician B says the parking brake system is independent of the hydraulic brake system. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "The parking brake must be able to hold the vehicle stationary on a moderate grade, which is its primary function. It operates through a mechanical cable system independent of the hydraulic service brakes. Even if the hydraulic system fails completely, the parking brake can still be applied mechanically. Both are correct.",
    diagram: "",
    terms: ["parking_brake", "brake_shoes"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Drum_brake.svg/640px-Drum_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=PEI16pGxG0w",
    youtubeTitle: "Parking Brake System Explained",
    qChinese: "技师A说驻车制动应能在中等坡度上固定车辆。技师B说驻车制动系统独立于液压制动系统。谁说得对？",
    optionsChinese: [
      "A) 只有技师A正确",
      "B) 只有技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "驻车制动必须能在中等坡度上使车辆保持静止，这是其主要功能。它通过独立于液压行车制动的机械拉索系统操作。即使液压系统完全失效，驻车制动仍可机械施加。两位技师都正确。"
  },
  {
    id: 161,
    q: "What is the primary advantage of vented (ventilated) brake rotors compared to solid rotors?",
    options: [
      "A) They are lighter weight",
      "B) They dissipate heat more effectively through internal cooling fins",
      "C) They produce less brake dust",
      "D) They are less expensive to manufacture"
    ],
    answer: 1,
    explanation: "Vented rotors have internal cooling fins or vanes between the two friction surfaces that allow air to flow through the rotor as it spins. This increased airflow dissipates heat much more effectively than a solid rotor, reducing the risk of brake fade, rotor warping, and fluid boiling during heavy braking.",
    diagram: "",
    terms: ["brake_rotor", "brake_pads"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "Vented vs Solid Brake Rotors",
    qChinese: "与实心制动盘相比，通风（通气）制动盘的主要优势是什么？",
    optionsChinese: [
      "A) 重量更轻",
      "B) 通过内部散热翅片更有效地散热",
      "C) 产生更少的制动粉尘",
      "D) 制造成本更低"
    ],
    explanationChinese: "通风制动盘在两个摩擦面之间有内部散热翅片或叶片，允许空气在旋转时穿过制动盘。这种增加的空气流通比实心制动盘更有效地散热，减少了重度制动时制动衰退、制动盘变形和制动液沸腾的风险。"
  },
  {
    id: 162,
    q: "A vehicle has front disc and rear drum brakes. The rear brakes are dragging. Which of the following is the LEAST likely cause?",
    options: [
      "A) Weak return springs",
      "B) A stuck wheel cylinder",
      "C) A misadjusted parking brake cable",
      "D) A worn front brake rotor"
    ],
    answer: 3,
    explanation: "A worn front brake rotor has no connection to rear drum brake drag. Rear brake drag is caused by components in the rear brake assembly such as weak return springs that cannot pull shoes away from the drum, a stuck wheel cylinder that holds shoes against the drum, or a misadjusted parking brake cable.",
    diagram: "",
    terms: ["drum_brake", "brake_shoes", "wheel_cylinder", "parking_brake"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Drum_brake.svg/640px-Drum_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=PEI16pGxG0w",
    youtubeTitle: "Rear Drum Brake Drag Diagnosis",
    qChinese: "车辆配有前盘后鼓制动器。后制动器拖滞。以下哪项是最不可能的原因？",
    optionsChinese: [
      "A) 回位弹簧变弱",
      "B) 轮缸卡死",
      "C) 驻车制动拉索调整不当",
      "D) 前制动盘磨损"
    ],
    explanationChinese: "前制动盘磨损与后鼓式制动器拖滞无关。后制动器拖滞是由后制动器总成中的部件引起的，如无法将蹄从鼓面拉回的变弱回位弹簧、使蹄保持抵在鼓面的卡死轮缸或调整不当的驻车制动拉索。"
  },
  {
    id: 163,
    q: "What causes a thumping noise from the front brakes that occurs once per wheel revolution?",
    options: [
      "A) Worn brake pads",
      "B) A flat spot or hard spot on the brake rotor",
      "C) Low brake fluid",
      "D) A faulty brake booster"
    ],
    answer: 1,
    explanation: "A thumping noise occurring once per wheel revolution during braking typically indicates a flat spot, hard spot, or localized thick spot on the rotor. The uneven surface creates a thump each time that spot passes through the caliper. This can result from the vehicle sitting with heated brakes in one spot for extended periods.",
    diagram: "",
    terms: ["brake_rotor", "brake_pads", "brake_caliper"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "Brake Rotor Hard Spot Diagnosis",
    qChinese: "前制动器每转一圈发出一次撞击声的原因是什么？",
    optionsChinese: [
      "A) 制动片磨损",
      "B) 制动盘上有平点或硬点",
      "C) 制动液不足",
      "D) 制动助力器故障"
    ],
    explanationChinese: "制动时每转一圈发出的撞击声通常表明制动盘上有平点、硬点或局部厚度不均的点。不平整的表面在每次经过制动钳时产生撞击声。这可能是由于车辆在制动发热的状态下长时间停在一个位置造成的。"
  },
  {
    id: 164,
    q: "Technician A says pressure bleeding requires the engine to be running. Technician B says pressure bleeding uses a pressurized canister connected to the master cylinder reservoir. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 1,
    explanation: "Pressure bleeding uses a pressurized tank or canister filled with brake fluid that is connected to the master cylinder reservoir. The pressurized fluid forces air and old fluid out through the bleeder screws. The engine does not need to be running for pressure bleeding. Only Technician B is correct.",
    diagram: "",
    terms: ["brake_bleeding", "brake_fluid", "master_cylinder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=n1NvtMiPYQs",
    youtubeTitle: "Pressure Bleeding Brake Systems",
    qChinese: "技师A说压力排气需要发动机运行。技师B说压力排气使用连接到主缸储液壶的加压罐。谁说得对？",
    optionsChinese: [
      "A) 只有技师A正确",
      "B) 只有技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "压力排气使用装有制动液的加压罐或储罐连接到主缸储液壶。加压的制动液迫使空气和旧液体通过放气螺丝排出。压力排气不需要发动机运行。只有技师B正确。"
  },
  {
    id: 165,
    q: "What should a technician check if a customer complains of a vibration in the steering wheel during braking?",
    options: [
      "A) Rear brake drums",
      "B) Front brake rotors for excessive runout or thickness variation",
      "C) Rear wheel speed sensors",
      "D) Parking brake cable"
    ],
    answer: 1,
    explanation: "Steering wheel vibration during braking is caused by front brake rotor issues. Excessive lateral runout or thickness variation pushes the caliper piston back and forth as the rotor rotates, which transfers through the steering linkage to the steering wheel. Rear brake issues typically cause vibration felt in the body or seat.",
    diagram: "",
    terms: ["brake_rotor", "brake_caliper"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "Steering Wheel Vibration During Braking",
    qChinese: "如果客户抱怨制动时方向盘振动，技师应检查什么？",
    optionsChinese: [
      "A) 后制动鼓",
      "B) 前制动盘是否有过大的跳动或厚度变化",
      "C) 后轮速传感器",
      "D) 驻车制动拉索"
    ],
    explanationChinese: "制动时方向盘振动是由前制动盘问题引起的。过大的横向跳动或厚度变化在制动盘旋转时将制动钳活塞来回推动，通过转向联动机构传递到方向盘。后制动器问题通常导致在车身或座椅上感到振动。"
  },
  {
    id: 166,
    q: "Which of the following is a common cause of rear drum brake squeal?",
    options: [
      "A) Excessive brake fluid",
      "B) Glazed brake shoe linings",
      "C) A new wheel cylinder",
      "D) Properly adjusted self-adjusters"
    ],
    answer: 1,
    explanation: "Glazed brake shoe linings develop a hard, shiny surface from excessive heat or light braking. This glazed surface reduces friction and causes the shoes to vibrate against the drum at high frequency, producing a squeal. The glaze should be removed by lightly sanding the linings or the shoes should be replaced.",
    diagram: "",
    terms: ["brake_shoes", "drum_brake"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Drum_brake.svg/640px-Drum_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=PEI16pGxG0w",
    youtubeTitle: "Drum Brake Squeal Causes and Fixes",
    qChinese: "以下哪项是后鼓式制动器尖叫的常见原因？",
    optionsChinese: [
      "A) 制动液过多",
      "B) 制动蹄衬片玻璃化",
      "C) 新的轮缸",
      "D) 调整正确的自动调整器"
    ],
    explanationChinese: "玻璃化的制动蹄衬片由于过热或轻制动而形成坚硬光亮的表面。这种玻璃化表面降低摩擦力并导致制动蹄在高频下对制动鼓振动，产生尖叫声。应通过轻磨衬片去除玻璃层或更换制动蹄。"
  },
  {
    id: 167,
    q: "A technician is testing a wheel speed sensor with a multimeter. The sensor has two wires. What type of measurement should be taken first?",
    options: [
      "A) Voltage at battery terminals",
      "B) Resistance (ohms) of the sensor compared to specifications",
      "C) Amperage draw of the sensor",
      "D) Fuel pressure at the sensor"
    ],
    answer: 1,
    explanation: "For a passive two-wire wheel speed sensor, the first test is to measure the sensor resistance with an ohmmeter and compare it to the manufacturer specification. Out-of-range resistance indicates a faulty sensor. The technician can also check for an AC voltage signal output while spinning the wheel by hand.",
    diagram: "",
    terms: ["wheel_speed_sensor", "abs"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=rJn2h0-HXYA",
    youtubeTitle: "Testing Wheel Speed Sensors",
    qChinese: "技师正在用万用表测试轮速传感器。传感器有两根线。应首先进行什么测量？",
    optionsChinese: [
      "A) 电池端子电压",
      "B) 传感器电阻（欧姆）与规格比较",
      "C) 传感器电流",
      "D) 传感器处的燃油压力"
    ],
    explanationChinese: "对于被动式两线轮速传感器，第一个测试是用欧姆表测量传感器电阻并与制造商规格比较。超出范围的电阻表明传感器故障。技师还可以在手动旋转车轮时检查交流电压信号输出。"
  },
  {
    id: 168,
    q: "What is the effect of a collapsed (internally swollen) brake hose on the affected wheel?",
    options: [
      "A) The wheel will lock up during normal driving",
      "B) The brake at that wheel may not release fully, causing drag and heat",
      "C) The ABS system will activate constantly",
      "D) The master cylinder will overflow"
    ],
    answer: 1,
    explanation: "A collapsed brake hose restricts fluid flow back from the caliper or wheel cylinder. During braking, high pressure forces fluid through the restriction, but when released, the restriction prevents fluid from returning. This keeps the brake partially applied, causing drag, heat, premature wear, and possible pull.",
    diagram: "",
    terms: ["brake_hose", "brake_caliper", "brake_line"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=n1NvtMiPYQs",
    youtubeTitle: "Collapsed Brake Hose Symptoms",
    qChinese: "塌陷（内部膨胀）的制动软管对受影响车轮有什么影响？",
    optionsChinese: [
      "A) 正常行驶时车轮会锁死",
      "B) 该车轮的制动器可能无法完全释放，导致拖滞和发热",
      "C) ABS系统会持续激活",
      "D) 主缸会溢出"
    ],
    explanationChinese: "塌陷的制动软管限制了制动液从制动钳或轮缸回流。制动时，高压迫使制动液通过限制处，但释放时，限制阻止液体回流。这使制动器保持部分施加状态，导致拖滞、发热、过早磨损和可能的偏移。"
  },
  {
    id: 169,
    q: "During a brake inspection, a technician measures the brake pad friction material and finds it is 1mm thick. What is the recommended action?",
    options: [
      "A) The pads are fine and can continue to be used",
      "B) Replace the brake pads as they are at or below minimum thickness",
      "C) Add brake fluid to compensate",
      "D) Adjust the caliper piston"
    ],
    answer: 1,
    explanation: "Most manufacturers specify a minimum brake pad thickness of 2-3mm of friction material. At 1mm the pads are at or below minimum thickness and must be replaced immediately. Continued use risks metal-to-metal contact, rotor damage, increased stopping distance, and potential brake failure.",
    diagram: "",
    terms: ["brake_pads", "brake_rotor", "brake_caliper"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "Brake Pad Thickness Measurement",
    qChinese: "在制动检查中，技师测量制动片摩擦材料厚度为1mm。建议采取什么措施？",
    optionsChinese: [
      "A) 制动片状况良好可以继续使用",
      "B) 更换制动片因为已达到或低于最小厚度",
      "C) 添加制动液来补偿",
      "D) 调整制动钳活塞"
    ],
    explanationChinese: "大多数制造商规定制动片摩擦材料的最小厚度为2-3mm。1mm时制动片已达到或低于最小厚度，必须立即更换。继续使用可能导致金属对金属接触、制动盘损坏、制动距离增加和潜在的制动失效。"
  },
  {
    id: 170,
    q: "What is the function of the combination valve in a brake system?",
    options: [
      "A) To mix different types of brake fluid",
      "B) To combine the functions of the metering valve, proportioning valve, and pressure differential switch",
      "C) To control ABS brake pressure",
      "D) To adjust the parking brake cable"
    ],
    answer: 1,
    explanation: "The combination valve is a single unit that integrates the metering valve, proportioning valve, and pressure differential switch. The metering valve delays front brake application, the proportioning valve limits rear brake pressure, and the differential switch activates the brake warning light if one circuit loses pressure.",
    diagram: "",
    terms: ["proportioning_valve", "brake_line", "master_cylinder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=n1NvtMiPYQs",
    youtubeTitle: "Brake Combination Valve Explained",
    qChinese: "制动系统中组合阀的功能是什么？",
    optionsChinese: [
      "A) 混合不同类型的制动液",
      "B) 将计量阀、比例阀和压差开关的功能组合在一起",
      "C) 控制ABS制动压力",
      "D) 调整驻车制动拉索"
    ],
    explanationChinese: "组合阀是将计量阀、比例阀和压差开关集成在一个单元中。计量阀延迟前制动器施加，比例阀限制后制动器压力，压差开关在一个回路失去压力时激活制动警告灯。"
  },
  {
    id: 171,
    q: "A vehicle with ABS stores a code indicating an open circuit in the right rear wheel speed sensor. What is the MOST likely cause?",
    options: [
      "A) Contaminated brake fluid",
      "B) A broken wire or damaged connector in the sensor circuit",
      "C) Worn brake pads on the right rear",
      "D) A clogged brake line"
    ],
    answer: 1,
    explanation: "An open circuit code for a wheel speed sensor indicates a break in the electrical path between the sensor and the ABS module. This is most commonly caused by a broken wire, corroded terminal, or disconnected connector in the sensor circuit. Physical inspection of the wiring harness and connectors is required.",
    diagram: "",
    terms: ["wheel_speed_sensor", "abs"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=rJn2h0-HXYA",
    youtubeTitle: "Wheel Speed Sensor Circuit Diagnosis",
    qChinese: "配备ABS的车辆存储了一个表示右后轮速传感器开路的故障码。最可能的原因是什么？",
    optionsChinese: [
      "A) 制动液受污染",
      "B) 传感器电路中的断线或损坏的接头",
      "C) 右后制动片磨损",
      "D) 制动管路堵塞"
    ],
    explanationChinese: "轮速传感器的开路故障码表示传感器与ABS模块之间的电路路径断开。这最常见的原因是传感器电路中的断线、腐蚀的端子或脱落的接头。需要对线束和接头进行物理检查。"
  },
  {
    id: 172,
    q: "What is the correct procedure for adjusting star wheel type drum brake self-adjusters?",
    options: [
      "A) Turn the star wheel until the drum cannot be installed, then back off until the drum slides on with a slight drag",
      "B) Leave maximum clearance between the shoes and drum",
      "C) Tighten the star wheel until the wheel cannot rotate at all",
      "D) Remove the star wheel and replace it with a new one"
    ],
    answer: 0,
    explanation: "The correct procedure is to expand the shoes by turning the star wheel until the drum cannot be placed over them, then back off the star wheel until the drum slides on with a slight drag. This sets the proper shoe-to-drum clearance. The wheel should rotate freely with just a light scraping sound.",
    diagram: "",
    terms: ["drum_brake", "brake_shoes"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Drum_brake.svg/640px-Drum_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=PEI16pGxG0w",
    youtubeTitle: "How to Adjust Drum Brakes",
    qChinese: "调整星轮式鼓式制动器自动调整器的正确程序是什么？",
    optionsChinese: [
      "A) 转动星轮直到制动鼓无法安装，然后回退直到制动鼓滑入时有轻微拖滞",
      "B) 在制动蹄和制动鼓之间留最大间隙",
      "C) 拧紧星轮直到车轮完全不能旋转",
      "D) 拆下星轮并用新的替换"
    ],
    explanationChinese: "正确的程序是通过转动星轮使制动蹄展开直到制动鼓无法套入，然后回退星轮直到制动鼓滑入时有轻微拖滞。这设定了适当的蹄与鼓间隙。车轮应能自由旋转，只有轻微的刮擦声。"
  },
  {
    id: 173,
    q: "A vehicle has a spongy brake pedal only after the vehicle has been driven for a while and the brakes are hot. The pedal is firm when cold. What is the MOST likely cause?",
    options: [
      "A) Worn brake pads",
      "B) Brake fluid with a low boiling point causing vapor lock",
      "C) A faulty ABS module",
      "D) A worn parking brake cable"
    ],
    answer: 1,
    explanation: "A spongy pedal that only occurs when the brakes are hot indicates brake fluid is boiling and creating vapor bubbles in the hydraulic system. Vapor is compressible like air, causing a spongy pedal. This occurs when brake fluid has absorbed moisture, lowering its boiling point. A complete fluid flush is required.",
    diagram: "",
    terms: ["brake_fluid", "brake_bleeding", "master_cylinder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "Brake Fluid Boiling and Vapor Lock",
    qChinese: "车辆行驶一段时间制动器变热后才出现制动踏板发软。冷车时踏板坚实。最可能的原因是什么？",
    optionsChinese: [
      "A) 制动片磨损",
      "B) 制动液沸点低导致气阻",
      "C) ABS模块故障",
      "D) 驻车制动拉索磨损"
    ],
    explanationChinese: "仅在制动器热时出现的踏板发软表明制动液正在沸腾并在液压系统中产生蒸汽气泡。蒸汽像空气一样可压缩，导致踏板发软。当制动液吸收了水分后沸点降低就会发生这种情况。需要完全冲洗制动液。"
  },
  {
    id: 174,
    q: "Technician A says a wheel cylinder is held to the backing plate by bolts or clips. Technician B says wheel cylinder cups seal hydraulic pressure inside the cylinder. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "The wheel cylinder is mounted to the backing plate using bolts or retaining clips, allowing it to be serviced independently. Inside the wheel cylinder, rubber cups (piston seals) seal hydraulic fluid and prevent leakage while allowing the pistons to move outward to apply the brake shoes. Both technicians are correct.",
    diagram: "",
    terms: ["wheel_cylinder", "drum_brake", "brake_shoes"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Drum_brake.svg/640px-Drum_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=PEI16pGxG0w",
    youtubeTitle: "Wheel Cylinder Operation and Service",
    qChinese: "技师A说轮缸通过螺栓或卡夹固定在底板上。技师B说轮缸的皮碗密封缸内的液压压力。谁说得对？",
    optionsChinese: [
      "A) 只有技师A正确",
      "B) 只有技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "轮缸通过螺栓或固定卡夹安装在底板上，可以独立维修。轮缸内部的橡胶皮碗（活塞密封件）密封液压油并防止泄漏，同时允许活塞向外移动以施加制动蹄。两位技师都正确。"
  },
  {
    id: 175,
    q: "What is the purpose of the brake pedal pushrod adjustment?",
    options: [
      "A) To adjust the brake light switch timing",
      "B) To ensure proper free play so the master cylinder piston fully returns and the compensating port opens",
      "C) To increase hydraulic pressure",
      "D) To adjust ABS sensitivity"
    ],
    answer: 1,
    explanation: "The pushrod length between the brake pedal and the master cylinder must be adjusted so there is proper free play. This ensures the master cylinder primary piston fully returns to its rest position, allowing the compensating port to open. If the port is blocked, fluid cannot return, causing brake drag.",
    diagram: "",
    terms: ["master_cylinder", "vacuum_booster"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "Brake Pushrod Adjustment",
    qChinese: "制动踏板推杆调整的目的是什么？",
    optionsChinese: [
      "A) 调整制动灯开关的时机",
      "B) 确保适当的游隙使主缸活塞完全复位并打开补偿孔",
      "C) 增加液压压力",
      "D) 调整ABS灵敏度"
    ],
    explanationChinese: "制动踏板与主缸之间的推杆长度必须调整以保持适当的游隙。这确保主缸主活塞完全回到静止位置，使补偿孔打开。如果端口被堵塞，制动液无法回流，导致制动拖滞。"
  },
  {
    id: 176,
    q: "A vehicle with disc brakes has one front wheel that is noticeably hotter than the other after normal driving. What is the MOST likely cause?",
    options: [
      "A) A new brake pad on that wheel",
      "B) A seized caliper or collapsed brake hose on that wheel",
      "C) Different tire pressure on that wheel",
      "D) A faulty wheel speed sensor"
    ],
    answer: 1,
    explanation: "One wheel significantly hotter than the other after normal driving indicates the brake at that wheel is not releasing properly and is dragging. A seized caliper piston, stuck caliper slide pins, or a collapsed brake hose can all prevent proper brake release, causing continuous friction, heat buildup, and premature wear.",
    diagram: "",
    terms: ["brake_caliper", "brake_hose", "brake_pads"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Disk_brake_dread.jpg/640px-Disk_brake_dread.jpg",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "Diagnosing Overheating Brakes",
    qChinese: "配有盘式制动器的车辆正常行驶后一个前轮明显比另一个热。最可能的原因是什么？",
    optionsChinese: [
      "A) 该车轮上有新的制动片",
      "B) 该车轮上的制动钳卡死或制动软管塌陷",
      "C) 该车轮胎压不同",
      "D) 轮速传感器故障"
    ],
    explanationChinese: "正常行驶后一个车轮明显比另一个热表明该车轮的制动器未正确释放并在拖滞。卡死的制动钳活塞、卡滞的制动钳滑销或塌陷的制动软管都可能阻止制动正确释放，导致持续摩擦、热量积聚和过早磨损。"
  },
  {
    id: 177,
    q: "What fluid specification must be followed when adding brake fluid to a vehicle?",
    options: [
      "A) Any available brake fluid can be used",
      "B) The specification listed on the master cylinder reservoir cap or in the owner's manual",
      "C) The cheapest fluid available",
      "D) Power steering fluid can substitute for brake fluid"
    ],
    answer: 1,
    explanation: "Always use the brake fluid specification (DOT 3, DOT 4, DOT 5, or DOT 5.1) specified on the master cylinder reservoir cap or in the vehicle owner's manual. Using the wrong specification can damage seals, reduce braking performance, or cause complete brake failure. Never use power steering fluid in a brake system.",
    diagram: "",
    terms: ["brake_fluid", "master_cylinder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "Choosing the Right Brake Fluid",
    qChinese: "向车辆添加制动液时必须遵循什么液体规格？",
    optionsChinese: [
      "A) 可以使用任何可用的制动液",
      "B) 主缸储液壶盖上或车主手册中列出的规格",
      "C) 最便宜的可用制动液",
      "D) 动力转向液可以替代制动液"
    ],
    explanationChinese: "始终使用主缸储液壶盖上或车主手册中指定的制动液规格（DOT 3、DOT 4、DOT 5或DOT 5.1）。使用错误规格可能损坏密封件、降低制动性能或导致完全制动失效。绝不能在制动系统中使用动力转向液。"
  },
  {
    id: 178,
    q: "During a road test, the ABS activates at low speed on dry pavement during a normal stop. What could cause this?",
    options: [
      "A) Normal ABS operation",
      "B) A faulty wheel speed sensor providing an incorrect signal to the ABS module",
      "C) New brake pads installed",
      "D) Properly inflated tires"
    ],
    answer: 1,
    explanation: "ABS should not activate during normal stops on dry pavement at low speed. If it does, a wheel speed sensor is likely providing an erratic or incorrect signal, causing the ABS module to falsely detect wheel lockup. The sensor, tone ring, air gap, and wiring should be inspected for damage or contamination.",
    diagram: "",
    terms: ["abs", "wheel_speed_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=rJn2h0-HXYA",
    youtubeTitle: "False ABS Activation Diagnosis",
    qChinese: "在路试中，干燥路面上低速正常停车时ABS激活。什么原因可能导致这种情况？",
    optionsChinese: [
      "A) 正常的ABS操作",
      "B) 故障的轮速传感器向ABS模块提供不正确的信号",
      "C) 安装了新的制动片",
      "D) 轮胎充气正确"
    ],
    explanationChinese: "ABS不应在干燥路面上低速正常停车时激活。如果激活，轮速传感器可能提供了不稳定或不正确的信号，导致ABS模块错误地检测到车轮锁死。应检查传感器、齿圈、气隙和线路是否有损坏或污染。"
  },
  {
    id: 179,
    q: "A technician finds that the inner brake pad is worn more than the outer brake pad on a floating caliper. What is the MOST likely cause?",
    options: [
      "A) Normal wear pattern",
      "B) Stuck caliper slide pins preventing the caliper from floating",
      "C) A leaking master cylinder",
      "D) Incorrect brake fluid"
    ],
    answer: 1,
    explanation: "In a floating caliper, the single piston pushes the inner pad against the rotor and then the caliper slides to pull the outer pad against the rotor. If the slide pins are stuck, the caliper cannot float, so only the inner pad (pushed by the piston) contacts the rotor fully, wearing faster than the outer pad.",
    diagram: "",
    terms: ["brake_caliper", "brake_pads", "brake_rotor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Disk_brake_dread.jpg/640px-Disk_brake_dread.jpg",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "Uneven Brake Pad Wear Causes",
    qChinese: "技师发现浮动式制动钳上内侧制动片比外侧制动片磨损更多。最可能的原因是什么？",
    optionsChinese: [
      "A) 正常磨损模式",
      "B) 制动钳滑销卡滞阻止制动钳浮动",
      "C) 主缸泄漏",
      "D) 制动液不正确"
    ],
    explanationChinese: "在浮动式制动钳中，单个活塞将内侧制动片推向制动盘，然后制动钳滑动将外侧制动片拉向制动盘。如果滑销卡滞，制动钳无法浮动，因此只有内侧制动片（被活塞推动）完全接触制动盘，比外侧制动片磨损更快。"
  },
  {
    id: 180,
    q: "What is the correct brake line material for automotive hydraulic brake systems?",
    options: [
      "A) Copper tubing",
      "B) Double-wall steel or nickel-copper (NiCopp) tubing",
      "C) Aluminum tubing",
      "D) PVC plastic tubing"
    ],
    answer: 1,
    explanation: "Automotive brake lines must be made from double-wall steel (also called bundy tube) or nickel-copper alloy tubing. These materials withstand high hydraulic pressures and resist corrosion. Copper, aluminum, and plastic cannot safely handle brake system pressures and are not approved for brake line use in most regions.",
    diagram: "",
    terms: ["brake_line", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=n1NvtMiPYQs",
    youtubeTitle: "Brake Line Materials and Fabrication",
    qChinese: "汽车液压制动系统正确的制动管路材料是什么？",
    optionsChinese: [
      "A) 铜管",
      "B) 双层钢管或镍铜（NiCopp）管",
      "C) 铝管",
      "D) PVC塑料管"
    ],
    explanationChinese: "汽车制动管路必须由双层钢管（也称为邦迪管）或镍铜合金管制成。这些材料能承受高液压压力并抗腐蚀。铜、铝和塑料无法安全承受制动系统压力，在大多数地区不被批准用于制动管路。"
  },
  {
    id: 181,
    q: "A customer reports a clunking noise from the rear brakes when first applying the brakes in reverse after parking. What is the MOST likely cause?",
    options: [
      "A) Worn brake pads",
      "B) Excessive shoe-to-drum clearance from a worn or improperly functioning self-adjuster",
      "C) Low brake fluid",
      "D) A faulty ABS module"
    ],
    answer: 1,
    explanation: "A clunking noise when first braking in reverse typically indicates excessive shoe-to-drum clearance. The shoes must travel too far before contacting the drum, causing an audible clunk. The self-adjuster may be worn, stuck, or not functioning properly. Manual adjustment or self-adjuster repair is needed.",
    diagram: "",
    terms: ["drum_brake", "brake_shoes"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Drum_brake.svg/640px-Drum_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=PEI16pGxG0w",
    youtubeTitle: "Drum Brake Self-Adjuster Problems",
    qChinese: "客户报告停车后首次在倒车时踩刹车时后制动器有咔嗒声。最可能的原因是什么？",
    optionsChinese: [
      "A) 制动片磨损",
      "B) 由于自动调整器磨损或功能不正常导致蹄与鼓间隙过大",
      "C) 制动液不足",
      "D) ABS模块故障"
    ],
    explanationChinese: "倒车时首次制动出现咔嗒声通常表明蹄与鼓间隙过大。制动蹄在接触制动鼓之前必须移动太远，产生可听到的咔嗒声。自动调整器可能磨损、卡滞或功能不正常。需要手动调整或修理自动调整器。"
  },
  {
    id: 182,
    q: "What is the function of the proportioning valve in a brake system with front disc and rear drum brakes?",
    options: [
      "A) To increase pressure to the rear brakes",
      "B) To limit hydraulic pressure to the rear brakes during hard stops to prevent rear wheel lockup",
      "C) To bleed air from the system",
      "D) To apply the parking brake"
    ],
    answer: 1,
    explanation: "The proportioning valve limits the amount of hydraulic pressure sent to the rear brakes during hard braking. During hard stops, weight transfers to the front, reducing rear wheel traction. Without the proportioning valve, the rear brakes could lock up before the front brakes, causing loss of vehicle stability.",
    diagram: "",
    terms: ["proportioning_valve", "brake_line", "drum_brake"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=n1NvtMiPYQs",
    youtubeTitle: "Proportioning Valve Function",
    qChinese: "在前盘后鼓制动系统中比例阀的功能是什么？",
    optionsChinese: [
      "A) 增加后制动器的压力",
      "B) 在急刹车时限制到后制动器的液压压力以防止后轮锁死",
      "C) 排出系统中的空气",
      "D) 施加驻车制动"
    ],
    explanationChinese: "比例阀在急刹车时限制发送到后制动器的液压压力量。急停时，重量向前转移，减少后轮抓地力。没有比例阀，后制动器可能在前制动器之前锁死，导致车辆稳定性丧失。"
  },
  {
    id: 183,
    q: "A technician notices uneven rotor wear where one area of the rotor is thinner than others. This condition is called:",
    options: [
      "A) Lateral runout",
      "B) Thickness variation (parallelism)",
      "C) Hard spotting",
      "D) Normal wear pattern"
    ],
    answer: 1,
    explanation: "Thickness variation, also called parallelism, occurs when the rotor surface is not uniformly thick around its circumference. This causes brake pedal pulsation because the caliper piston is pushed back at the thick spots and allowed to extend at the thin spots during rotation. It is measured with a micrometer.",
    diagram: "",
    terms: ["brake_rotor", "brake_caliper"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "Rotor Thickness Variation Explained",
    qChinese: "技师注意到制动盘磨损不均匀，其中一个区域比其他区域薄。这种情况称为：",
    optionsChinese: [
      "A) 横向跳动",
      "B) 厚度变化（平行度）",
      "C) 硬点",
      "D) 正常磨损模式"
    ],
    explanationChinese: "厚度变化，也称为平行度，发生在制动盘表面沿圆周厚度不均匀时。这会导致制动踏板脉动，因为旋转时制动钳活塞在厚处被推回，在薄处被允许伸出。使用千分尺测量。"
  },
  {
    id: 184,
    q: "Technician A says a brake hose should be inspected for cracks, bulges, and leaks. Technician B says a brake hose should be replaced if the outer covering shows signs of cracking or deterioration. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Brake hoses should be visually inspected for external cracks, bulges, chafing, and leaks during every brake service. If the outer rubber covering shows cracking, deterioration, or swelling, the hose is compromised and should be replaced immediately. Both inspecting and replacing damaged hoses are correct practices.",
    diagram: "",
    terms: ["brake_hose", "brake_line"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=n1NvtMiPYQs",
    youtubeTitle: "Brake Hose Inspection Guide",
    qChinese: "技师A说应检查制动软管是否有裂纹、鼓包和泄漏。技师B说如果外层覆盖层显示裂纹或老化迹象应更换制动软管。谁说得对？",
    optionsChinese: [
      "A) 只有技师A正确",
      "B) 只有技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "每次制动维修时都应目视检查制动软管的外部裂纹、鼓包、磨损和泄漏。如果外部橡胶覆盖层显示裂纹、老化或膨胀，软管已受损应立即更换。检查和更换损坏的软管都是正确的做法。两位技师都正确。"
  },
  {
    id: 185,
    q: "What happens to brake pedal height when brake pads wear down over time?",
    options: [
      "A) The pedal height increases",
      "B) The pedal gradually gets lower because the caliper pistons extend further",
      "C) The pedal height stays the same",
      "D) The pedal becomes harder to press"
    ],
    answer: 1,
    explanation: "As brake pads wear, the caliper pistons extend further from their bores to maintain contact with the thinner pads and rotor. This requires more fluid from the master cylinder reservoir. The increased fluid displacement results in more pedal travel before the brakes engage, causing a lower brake pedal.",
    diagram: "",
    terms: ["brake_pads", "brake_caliper", "master_cylinder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "Why Brake Pedal Gets Low Over Time",
    qChinese: "随着制动片逐渐磨损，制动踏板高度会怎样？",
    optionsChinese: [
      "A) 踏板高度增加",
      "B) 踏板逐渐降低因为制动钳活塞伸出更远",
      "C) 踏板高度保持不变",
      "D) 踏板变得更难踩"
    ],
    explanationChinese: "随着制动片磨损，制动钳活塞从缸孔伸出更远以保持与变薄的制动片和制动盘的接触。这需要从主缸储液壶中获取更多制动液。增加的液体位移导致制动接合前需要更多的踏板行程，使制动踏板降低。"
  },
  {
    id: 186,
    q: "A vehicle with four-channel ABS has independent pressure control at each wheel. How many wheel speed sensors does this system use?",
    options: [
      "A) One",
      "B) Two",
      "C) Three",
      "D) Four"
    ],
    answer: 3,
    explanation: "A four-channel ABS system uses four wheel speed sensors, one at each wheel. Each sensor monitors the rotational speed of its respective wheel independently. The ABS module compares all four signals to detect any wheel that is decelerating faster than the others and modulates pressure accordingly.",
    diagram: "",
    terms: ["abs", "wheel_speed_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=rJn2h0-HXYA",
    youtubeTitle: "Four-Channel ABS System",
    qChinese: "配备四通道ABS的车辆在每个车轮上有独立的压力控制。该系统使用多少个轮速传感器？",
    optionsChinese: [
      "A) 一个",
      "B) 两个",
      "C) 三个",
      "D) 四个"
    ],
    explanationChinese: "四通道ABS系统使用四个轮速传感器，每个车轮一个。每个传感器独立监测其各自车轮的旋转速度。ABS模块比较所有四个信号以检测任何减速比其他车轮更快的车轮并相应调节压力。"
  },
  {
    id: 187,
    q: "What is the result of contaminated brake fluid that has absorbed excessive moisture?",
    options: [
      "A) Increased braking power",
      "B) A lowered boiling point that can lead to vapor lock and brake fade under heavy use",
      "C) Better cold-weather brake performance",
      "D) Improved ABS function"
    ],
    answer: 1,
    explanation: "Moisture in brake fluid lowers its boiling point. Under heavy braking conditions, the contaminated fluid can boil, creating vapor bubbles in the brake lines. Since vapor is compressible, the brake pedal becomes spongy and braking effectiveness is greatly reduced. This dangerous condition is called vapor lock or brake fade.",
    diagram: "",
    terms: ["brake_fluid", "brake_bleeding"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "Why Brake Fluid Absorbs Moisture",
    qChinese: "吸收了过多水分的受污染制动液会导致什么结果？",
    optionsChinese: [
      "A) 增加制动力",
      "B) 沸点降低，可能在重度使用下导致气阻和制动衰退",
      "C) 更好的寒冷天气制动性能",
      "D) 改善ABS功能"
    ],
    explanationChinese: "制动液中的水分降低其沸点。在重度制动条件下，受污染的制动液可能沸腾，在制动管路中产生蒸汽气泡。由于蒸汽可压缩，制动踏板变软，制动效果大大降低。这种危险状况称为气阻或制动衰退。"
  },
  {
    id: 188,
    q: "Technician A says the tone ring (reluctor ring) is part of the ABS wheel speed sensor assembly. Technician B says a damaged or missing tooth on the tone ring can cause an erratic wheel speed signal. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "The tone ring is an integral part of the wheel speed sensor system, working with the sensor to generate a signal. A damaged or missing tooth creates a gap in the signal pattern, which the ABS module may interpret as a sudden change in wheel speed, causing false ABS activation or a stored trouble code.",
    diagram: "",
    terms: ["wheel_speed_sensor", "abs"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=rJn2h0-HXYA",
    youtubeTitle: "ABS Tone Ring Inspection",
    qChinese: "技师A说齿圈（磁阻环）是ABS轮速传感器总成的一部分。技师B说齿圈上损坏或缺失的齿会导致不稳定的轮速信号。谁说得对？",
    optionsChinese: [
      "A) 只有技师A正确",
      "B) 只有技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "齿圈是轮速传感器系统的组成部分，与传感器配合产生信号。损坏或缺失的齿在信号模式中创建间隙，ABS模块可能将其解释为车轮速度的突然变化，导致错误的ABS激活或存储故障码。两位技师都正确。"
  },
  {
    id: 189,
    q: "A technician needs to fabricate a replacement brake line. What tool is required to create the proper end fittings?",
    options: [
      "A) A pipe cutter only",
      "B) A tubing cutter and a double-flare or bubble-flare tool",
      "C) A soldering iron",
      "D) A compression fitting tool"
    ],
    answer: 1,
    explanation: "Fabricating a brake line requires a tubing cutter to cut the line to length and a flaring tool to create either a double flare (inverted flare) or ISO bubble flare at each end. These flare types are the only acceptable fittings for brake lines due to the high pressures involved in hydraulic brake systems.",
    diagram: "",
    terms: ["brake_line", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=n1NvtMiPYQs",
    youtubeTitle: "How to Fabricate Brake Lines",
    qChinese: "技师需要制作替换制动管路。需要什么工具来制作正确的端部接头？",
    optionsChinese: [
      "A) 仅需管切割器",
      "B) 管切割器和双重扩口或气泡扩口工具",
      "C) 烙铁",
      "D) 压缩接头工具"
    ],
    explanationChinese: "制作制动管路需要管切割器将管路切割到适当长度，以及扩口工具在每端制作双重扩口（倒扩口）或ISO气泡扩口。由于液压制动系统涉及的高压力，这些扩口类型是制动管路唯一可接受的接头。"
  },
  {
    id: 190,
    q: "A vehicle's front brakes are making a high-pitched squeal during braking but the brake pads have adequate thickness. What is the MOST likely cause?",
    options: [
      "A) Brake pads need replacement",
      "B) Missing or worn anti-squeal shims or improper pad installation",
      "C) Low brake fluid",
      "D) ABS malfunction"
    ],
    answer: 1,
    explanation: "Brake squeal with adequate pad thickness is often caused by missing or worn anti-squeal shims, lack of brake pad lubricant on contact points, or glazed pad surfaces. The shims dampen vibrations between the pad and caliper piston that create the high-pitched squeal. Proper installation with shims and lubricant resolves this.",
    diagram: "",
    terms: ["brake_pads", "brake_caliper", "brake_rotor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "How to Fix Brake Squeal",
    qChinese: "车辆前制动器在制动时发出高音尖叫但制动片厚度充足。最可能的原因是什么？",
    optionsChinese: [
      "A) 制动片需要更换",
      "B) 防尖叫垫片缺失或磨损或制动片安装不当",
      "C) 制动液不足",
      "D) ABS故障"
    ],
    explanationChinese: "制动片厚度充足时的尖叫通常是由防尖叫垫片缺失或磨损、接触点缺少制动片润滑剂或制动片表面玻璃化引起的。垫片抑制制动片与制动钳活塞之间产生高频尖叫的振动。正确安装垫片和润滑剂可解决此问题。"
  },
  {
    id: 191,
    q: "What is the purpose of the dust boot on a disc brake caliper piston?",
    options: [
      "A) To seal brake fluid inside the caliper",
      "B) To keep dirt, moisture, and debris out of the caliper bore",
      "C) To provide piston retraction force",
      "D) To lubricate the caliper slide pins"
    ],
    answer: 1,
    explanation: "The dust boot is a flexible rubber or silicone cover that fits over the caliper piston and bore opening. Its primary function is to keep dirt, moisture, road salt, and debris out of the caliper bore. Contamination in the bore causes piston corrosion, sticking, and seal damage. The square-cut seal handles fluid sealing.",
    diagram: "",
    terms: ["brake_caliper", "brake_pads"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Disk_brake_dread.jpg/640px-Disk_brake_dread.jpg",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "Brake Caliper Dust Boot Function",
    qChinese: "盘式制动钳活塞防尘套的作用是什么？",
    optionsChinese: [
      "A) 密封制动钳内的制动液",
      "B) 防止灰尘、水分和碎屑进入制动钳缸孔",
      "C) 提供活塞回缩力",
      "D) 润滑制动钳滑销"
    ],
    explanationChinese: "防尘套是一个柔性橡胶或硅胶罩，安装在制动钳活塞和缸孔开口上。其主要功能是防止灰尘、水分、道路盐分和碎屑进入制动钳缸孔。缸孔中的污染物会导致活塞腐蚀、卡滞和密封件损坏。方形切面密封圈负责液体密封。"
  },
  {
    id: 192,
    q: "A customer says the brake pedal goes almost to the floor on the first application after the vehicle has been sitting overnight, but is normal on subsequent applications. What is the MOST likely cause?",
    options: [
      "A) A master cylinder failure",
      "B) Normal operation as the disc brake pads retract slightly from the rotors",
      "C) Air in the brake lines",
      "D) Worn brake drums"
    ],
    answer: 1,
    explanation: "After sitting overnight, disc brake pads retract slightly from the rotors due to the square-cut seal returning to its natural shape. The first pedal application takes up this additional clearance, requiring more pedal travel. Subsequent applications are normal because the pads are already close to the rotors. This is normal behavior.",
    diagram: "",
    terms: ["brake_caliper", "brake_pads", "brake_rotor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "Low Brake Pedal After Sitting Overnight",
    qChinese: "客户说车辆过夜停放后第一次踩制动踏板几乎到底，但随后踩踏正常。最可能的原因是什么？",
    optionsChinese: [
      "A) 主缸故障",
      "B) 正常操作，因为盘式制动片从制动盘稍微回缩",
      "C) 制动管路中有空气",
      "D) 制动鼓磨损"
    ],
    explanationChinese: "过夜停放后，由于方形切面密封圈恢复其自然形状，盘式制动片从制动盘稍微回缩。第一次踩踏需要弥补这个额外的间隙，需要更多踏板行程。随后踩踏正常因为制动片已经靠近制动盘。这是正常行为。"
  },
  {
    id: 193,
    q: "What is the primary safety concern when working with brake dust?",
    options: [
      "A) It can damage paint finishes",
      "B) Older brake linings may contain asbestos fibers that are hazardous when inhaled",
      "C) It can cause electrical shorts",
      "D) It attracts moisture to the brakes"
    ],
    answer: 1,
    explanation: "Brake dust from older vehicles may contain asbestos fibers, which are a known carcinogen when inhaled. Even on newer vehicles, brake dust should not be blown with compressed air. Wet cleaning methods or approved HEPA vacuum systems should be used. Proper personal protective equipment is required during brake service.",
    diagram: "",
    terms: ["brake_pads", "brake_shoes"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "Brake Dust Safety Precautions",
    qChinese: "处理制动粉尘时的主要安全顾虑是什么？",
    optionsChinese: [
      "A) 它可能损坏油漆表面",
      "B) 旧制动衬片可能含有吸入时有害的石棉纤维",
      "C) 它可能导致电气短路",
      "D) 它会吸引水分到制动器上"
    ],
    explanationChinese: "旧车辆的制动粉尘可能含有石棉纤维，吸入后是已知的致癌物。即使在新车上，也不应用压缩空气吹制动粉尘。应使用湿式清洁方法或经批准的HEPA真空系统。制动维修期间需要适当的个人防护设备。"
  },
  {
    id: 194,
    q: "Technician A says electronically controlled parking brakes use an electric motor to apply and release the parking brake. Technician B says an electronically controlled parking brake system may require a scan tool for brake pad replacement. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Electronic parking brakes use an electric motor at the rear calipers instead of a cable to apply and release the parking brake. Many systems require a scan tool to put the system into service mode to retract the caliper pistons for brake pad replacement. Both technicians are correct about these modern systems.",
    diagram: "",
    terms: ["parking_brake", "brake_caliper", "brake_pads"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "Electronic Parking Brake Service",
    qChinese: "技师A说电子控制驻车制动使用电动马达来施加和释放驻车制动。技师B说电子控制驻车制动系统在更换制动片时可能需要诊断仪。谁说得对？",
    optionsChinese: [
      "A) 只有技师A正确",
      "B) 只有技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "电子驻车制动在后制动钳处使用电动马达代替拉索来施加和释放驻车制动。许多系统需要诊断仪将系统置于维修模式以缩回制动钳活塞进行制动片更换。两位技师对这些现代系统的说法都是正确的。"
  },
  {
    id: 195,
    q: "What is the MOST common reason for a brake fluid level drop in the master cylinder reservoir?",
    options: [
      "A) Evaporation",
      "B) Normal brake pad wear causing the caliper pistons to extend further",
      "C) A faulty reservoir cap",
      "D) Overheating of the engine"
    ],
    answer: 1,
    explanation: "As brake pads wear, the caliper pistons extend further from their bores to maintain pad-to-rotor contact. This additional piston travel displaces more fluid from the reservoir, causing the fluid level to drop gradually. A sudden or significant drop may indicate a leak. Brake fluid does not evaporate under normal conditions.",
    diagram: "",
    terms: ["brake_fluid", "master_cylinder", "brake_pads"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "Why Brake Fluid Level Drops",
    qChinese: "主缸储液壶中制动液液位下降的最常见原因是什么？",
    optionsChinese: [
      "A) 蒸发",
      "B) 正常制动片磨损导致制动钳活塞伸出更远",
      "C) 储液壶盖故障",
      "D) 发动机过热"
    ],
    explanationChinese: "随着制动片磨损，制动钳活塞从缸孔伸出更远以保持制动片与制动盘的接触。这些额外的活塞行程从储液壶中排出更多制动液，导致液位逐渐下降。突然或大幅下降可能表示泄漏。制动液在正常条件下不会蒸发。"
  },
  {
    id: 196,
    q: "What tool should be used to clean brake components during service?",
    options: [
      "A) Compressed air",
      "B) Brake parts cleaner spray or a wet cleaning method",
      "C) Gasoline",
      "D) Engine degreaser"
    ],
    answer: 1,
    explanation: "Brake parts cleaner or an approved wet cleaning method should be used to clean brake components. Compressed air should never be used because it disperses potentially hazardous brake dust into the air. Gasoline and engine degreaser can damage rubber seals and contaminate friction surfaces, reducing braking performance.",
    diagram: "",
    terms: ["brake_pads", "brake_shoes", "brake_caliper"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "Proper Brake Cleaning Methods",
    qChinese: "维修时应使用什么工具清洁制动部件？",
    optionsChinese: [
      "A) 压缩空气",
      "B) 制动零件清洁剂喷雾或湿式清洁方法",
      "C) 汽油",
      "D) 发动机除油剂"
    ],
    explanationChinese: "应使用制动零件清洁剂或经批准的湿式清洁方法清洁制动部件。绝不能使用压缩空气，因为它会将可能有害的制动粉尘吹散到空气中。汽油和发动机除油剂会损坏橡胶密封件并污染摩擦面，降低制动性能。"
  },
  {
    id: 197,
    q: "A vehicle's brake pedal vibrates at highway speed during light braking but not during hard braking. What is the MOST likely cause?",
    options: [
      "A) Air in the brake system",
      "B) Rotor lateral runout that is only noticeable with light pad pressure",
      "C) Worn master cylinder",
      "D) Defective vacuum booster"
    ],
    answer: 1,
    explanation: "Light pedal pulsation at highway speed that disappears during hard braking suggests minor rotor lateral runout. With light braking, the pad barely contacts the rotor, making small surface irregularities more noticeable. During hard braking, the pad is pressed firmly against the rotor surface, masking the minor runout.",
    diagram: "",
    terms: ["brake_rotor", "brake_pads", "brake_caliper"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "Brake Pulsation at Highway Speed",
    qChinese: "车辆在高速公路速度下轻踩制动时踏板振动，但急刹车时不振动。最可能的原因是什么？",
    optionsChinese: [
      "A) 制动系统中有空气",
      "B) 制动盘横向跳动在轻踩制动片压力下才明显",
      "C) 主缸磨损",
      "D) 真空助力器故障"
    ],
    explanationChinese: "高速时轻踩制动的脉动在急刹车时消失，表明制动盘有轻微横向跳动。轻刹车时，制动片仅轻微接触制动盘，使小的表面不规则更加明显。急刹车时，制动片被牢固地压在制动盘表面，掩盖了轻微的跳动。"
  },
  {
    id: 198,
    q: "Technician A says some ABS systems require a scan tool to bleed the ABS hydraulic control unit. Technician B says conventional bleeding methods always remove all air from an ABS system. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Many ABS systems have internal valves and passages in the HCU that can trap air. These systems require a scan tool to cycle the ABS solenoids and pump motor during bleeding to release trapped air from inside the HCU. Conventional bleeding alone may not remove all air from these internal passages. Only Technician A is correct.",
    diagram: "",
    terms: ["abs", "brake_bleeding", "brake_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=rJn2h0-HXYA",
    youtubeTitle: "ABS Brake Bleeding with Scan Tool",
    qChinese: "技师A说某些ABS系统需要诊断仪来排出ABS液压控制单元中的空气。技师B说传统的排气方法总能排出ABS系统中的所有空气。谁说得对？",
    optionsChinese: [
      "A) 只有技师A正确",
      "B) 只有技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "许多ABS系统在HCU中有内部阀门和通道可以困住空气。这些系统需要诊断仪在排气过程中循环ABS电磁阀和泵电机，以从HCU内部释放被困空气。仅靠传统排气可能无法排出这些内部通道中的所有空气。只有技师A正确。"
  },
  {
    id: 199,
    q: "What component prevents the brake pedal from returning too quickly and potentially causing the driver's foot to slip off?",
    options: [
      "A) The master cylinder",
      "B) The brake pedal return spring and pedal stop",
      "C) The ABS module",
      "D) The proportioning valve"
    ],
    answer: 1,
    explanation: "The brake pedal return spring pulls the pedal back to its rest position when released, while the pedal stop limits how far it can return. Together they provide controlled pedal return that is firm enough to prevent the pedal from snapping back dangerously but quick enough for proper brake release.",
    diagram: "",
    terms: ["master_cylinder", "vacuum_booster"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disc_brake.svg/640px-Disc_brake.svg.png",
    youtube: "https://www.youtube.com/watch?v=3HsLYdre4CU",
    youtubeTitle: "Brake Pedal Components Explained",
    qChinese: "什么部件防止制动踏板回弹太快并可能导致驾驶员的脚滑落？",
    optionsChinese: [
      "A) 主缸",
      "B) 制动踏板回位弹簧和踏板限位器",
      "C) ABS模块",
      "D) 比例阀"
    ],
    explanationChinese: "制动踏板回位弹簧在松开时将踏板拉回静止位置，而踏板限位器限制其回弹距离。它们共同提供受控的踏板回弹，既足够坚实防止踏板危险地弹回，又足够快以确保正确的制动释放。"
  },
  {
    id: 200,
    q: "A vehicle pulls to the left during braking and the left front brake is significantly hotter than the right front. What is the MOST likely cause?",
    options: [
      "A) The left front brake is applying more force due to a seized caliper on the right front",
      "B) The left front caliper is sticking and not releasing",
      "C) The right front has a restricted brake hose preventing full application",
      "D) Both A and C could cause this condition"
    ],
    answer: 3,
    explanation: "A vehicle pulling left with the left front hotter can be caused by a seized right front caliper not applying (less braking on right, vehicle pulls left) or a restricted right front brake hose preventing full application. Both conditions result in more braking force on the left, causing pull and heat buildup on that side.",
    diagram: "",
    terms: ["brake_caliper", "brake_hose", "brake_pads", "brake_rotor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Disk_brake_dread.jpg/640px-Disk_brake_dread.jpg",
    youtube: "https://www.youtube.com/watch?v=ztmEBCiTM2o",
    youtubeTitle: "Brake Pull Diagnosis",
    qChinese: "车辆在制动时向左偏且左前制动器明显比右前热。最可能的原因是什么？",
    optionsChinese: [
      "A) 由于右前制动钳卡死，左前制动器施加了更多的力",
      "B) 左前制动钳卡滞未释放",
      "C) 右前制动软管受限阻止完全施加",
      "D) A和C都可能导致此情况"
    ],
    explanationChinese: "车辆向左偏且左前更热可能是由于右前制动钳卡死不施加（右侧制动力较少，车辆向左偏）或右前制动软管受限阻止完全施加。两种情况都导致左侧制动力更大，造成向该侧偏移和热量积聚。"
  }
];
