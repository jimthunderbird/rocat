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
  }
];
