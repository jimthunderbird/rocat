const questionsA4 = [
  // ===== STEERING SYSTEMS (Questions 1-30) =====
  {
    id: 1,
    q: "A vehicle with hydraulic power steering has a whining noise that increases with engine RPM. The fluid level is correct and there are no visible leaks. What is the MOST likely cause?",
    options: [
      "A) Worn power steering pump vanes",
      "B) A restricted power steering return hose",
      "C) Air trapped in the power steering system",
      "D) A faulty steering gear valve body"
    ],
    answer: 2,
    explanation: "Air trapped in the power steering fluid causes a whining noise that changes with engine speed. Even with a correct fluid level, air can enter the system through a loose hose connection or during service. Bleeding the system typically resolves the concern.",
    diagram: "",
    terms: ["power_steering_pump", "rack_and_pinion"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rack_and_pinion_animation.gif/400px-Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=YDl1UxCrEhM",
    youtubeTitle: "Power Steering System Explained",
    qChinese: "一辆配备液压助力转向的车辆有一种随发动机转速升高而加剧的呜呜声。液面正常且没有可见泄漏。最可能的原因是什么？",
    optionsChinese: [
      "A) 助力转向泵叶片磨损",
      "B) 助力转向回油管路受阻",
      "C) 助力转向系统中混入空气",
      "D) 转向器阀体故障"
    ],
    explanationChinese: "助力转向液中混入的空气会导致随发动机转速变化的呜呜声。即使液面正常，空气也可能通过松动的软管接头或维修过程中进入系统。排空系统中的空气通常可以解决该问题。"
  },
  {
    id: 2,
    q: "Technician A says a worn upper steering column bearing can cause a binding feeling when turning the wheel. Technician B says a tight universal joint in the intermediate shaft can cause the same symptom. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. A worn or dry upper steering column bearing creates friction and binding. Similarly, a tight or corroded universal joint in the intermediate shaft restricts smooth rotation, causing a binding or notchy feeling when turning the steering wheel.",
    diagram: "",
    terms: ["universal_joint", "rack_and_pinion", "power_steering_pump"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rack_and_pinion_animation.gif/400px-Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=YDl1UxCrEhM",
    youtubeTitle: "Power Steering System Explained",
    qChinese: "技师A说磨损的转向柱上轴承会导致转动方向盘时有卡滞感。技师B说中间轴上紧固的万向节也会导致同样的症状。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都是正确的。磨损或干燥的转向柱上轴承会产生摩擦和卡滞。同样，中间轴上紧固或锈蚀的万向节也会限制顺畅转动，导致转动方向盘时出现卡滞或顿挫感。"
  },
  {
    id: 3,
    q: "During a power steering pressure test, the pump produces adequate pressure with the valve closed but low pressure during a turn. What does this indicate?",
    options: [
      "A) A worn power steering pump",
      "B) An internal leak in the steering gear or rack",
      "C) A restricted pressure hose",
      "D) A faulty flow control valve"
    ],
    answer: 1,
    explanation: "If the pump produces correct pressure with the test valve closed but pressure drops during steering input, the steering gear or rack has an internal leak. Worn seals inside the unit allow fluid to bypass internally, reducing assist pressure during turns.",
    diagram: "",
    terms: ["power_steering_pump", "rack_and_pinion"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rack_and_pinion_animation.gif/400px-Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=YDl1UxCrEhM",
    youtubeTitle: "Power Steering System Explained",
    qChinese: "在助力转向压力测试中，关闭阀门时泵能产生足够的压力，但转向时压力偏低。这说明什么？",
    optionsChinese: [
      "A) 助力转向泵磨损",
      "B) 转向器或转向齿条内部泄漏",
      "C) 压力管路受阻",
      "D) 流量控制阀故障"
    ],
    explanationChinese: "如果关闭测试阀时泵产生正确的压力，但在转向输入时压力下降，则转向器或齿条存在内部泄漏。装置内部磨损的密封件允许液体内部旁通，降低了转向时的助力压力。"
  },
  {
    id: 4,
    q: "What is the function of the flow control valve in a hydraulic power steering pump?",
    options: [
      "A) It regulates maximum system pressure",
      "B) It maintains a constant flow rate regardless of engine speed",
      "C) It directs fluid to the correct side of the steering gear piston",
      "D) It prevents fluid from returning to the reservoir"
    ],
    answer: 1,
    explanation: "The flow control valve in a power steering pump maintains a relatively constant flow rate to the steering gear regardless of engine RPM. As engine speed increases, excess fluid is bypassed back to the pump inlet, ensuring consistent steering assist at all speeds.",
    diagram: "",
    terms: ["power_steering_pump", "rack_and_pinion", "valve_body"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rack_and_pinion_animation.gif/400px-Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=YDl1UxCrEhM",
    youtubeTitle: "Power Steering System Explained",
    qChinese: "液压助力转向泵中流量控制阀的功能是什么？",
    optionsChinese: [
      "A) 调节系统最大压力",
      "B) 无论发动机转速如何，保持恒定的流量",
      "C) 将液体引导至转向器活塞的正确侧",
      "D) 防止液体回流至储液罐"
    ],
    explanationChinese: "助力转向泵中的流量控制阀无论发动机转速如何，都能保持相对恒定的流量输出至转向器。随着发动机转速升高，多余的液体被旁通回泵的入口，确保在所有转速下提供一致的转向助力。"
  },
  {
    id: 5,
    q: "A vehicle pulls to one side during straight-ahead driving. The power steering fluid is contaminated and dark. Which component should be inspected FIRST?",
    options: [
      "A) The steering column",
      "B) The spool valve in the steering gear",
      "C) The power steering pump pressure relief valve",
      "D) The steering wheel clock spring"
    ],
    answer: 1,
    explanation: "Contaminated dark fluid can cause the spool valve in the steering gear to stick, resulting in unequal hydraulic assist and a pull to one side. The spool valve directs fluid to provide assist; if it sticks off-center, it creates a constant pull condition.",
    diagram: "",
    terms: ["power_steering_pump", "rack_and_pinion", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rack_and_pinion_animation.gif/400px-Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=YDl1UxCrEhM",
    youtubeTitle: "Power Steering System Explained",
    qChinese: "一辆车在直线行驶时向一侧偏移。助力转向液受到污染且颜色发黑。应首先检查哪个部件？",
    optionsChinese: [
      "A) 转向柱",
      "B) 转向器中的滑阀",
      "C) 助力转向泵的压力释放阀",
      "D) 方向盘时钟弹簧"
    ],
    explanationChinese: "受污染的深色液体可能导致转向器中的滑阀卡滞，造成液压助力不均匀，从而导致车辆向一侧偏移。滑阀负责引导液体提供助力；如果它卡在偏离中心的位置，就会产生持续的偏移现象。"
  },
  {
    id: 6,
    q: "All of the following are symptoms of a failing electric power steering (EPS) motor EXCEPT:",
    options: [
      "A) Intermittent loss of power assist",
      "B) A grinding noise when turning the wheel",
      "C) The EPS warning light is illuminated",
      "D) Fluid leaking from the steering rack boots"
    ],
    answer: 3,
    explanation: "Electric power steering systems do not use hydraulic fluid, so fluid leaking from the rack boots is not a symptom of EPS motor failure. That symptom indicates a hydraulic rack issue. Intermittent assist loss, grinding noises, and warning lights are all EPS motor concerns.",
    diagram: "",
    terms: ["rack_and_pinion", "power_steering_pump", "dtc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rack_and_pinion_animation.gif/400px-Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=YDl1UxCrEhM",
    youtubeTitle: "Power Steering System Explained",
    qChinese: "以下所有情况都是电动助力转向（EPS）电机故障的症状，除了：",
    optionsChinese: [
      "A) 间歇性失去助力",
      "B) 转动方向盘时有研磨噪音",
      "C) EPS警告灯亮起",
      "D) 转向齿条防尘套处漏液"
    ],
    explanationChinese: "电动助力转向系统不使用液压液，因此齿条防尘套处漏液不是EPS电机故障的症状。该症状表明液压齿条有问题。间歇性助力丧失、研磨噪音和警告灯亮起都是EPS电机的相关故障。"
  },
  {
    id: 7,
    q: "Technician A says the torque sensor in an EPS system measures how much the driver is turning the steering wheel. Technician B says the torque sensor measures the effort the driver applies to the steering wheel. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 1,
    explanation: "Technician B is correct. The torque sensor in an EPS system measures the torque or effort applied by the driver to the steering shaft, not the angle of rotation. The EPS control module uses this input to determine how much electric motor assist to provide.",
    diagram: "",
    terms: ["rack_and_pinion", "pcm", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rack_and_pinion_animation.gif/400px-Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=YDl1UxCrEhM",
    youtubeTitle: "Power Steering System Explained",
    qChinese: "技师A说EPS系统中的扭矩传感器测量驾驶员转动方向盘的幅度。技师B说扭矩传感器测量驾驶员施加在方向盘上的力。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "技师B是正确的。EPS系统中的扭矩传感器测量驾驶员施加在转向轴上的扭矩或力，而不是旋转角度。EPS控制模块利用该输入来确定需要提供多大的电动机助力。"
  },
  {
    id: 8,
    q: "What happens if the power steering pressure relief valve sticks open?",
    options: [
      "A) Steering effort increases significantly",
      "B) The pump makes excessive noise",
      "C) The steering wheel jerks during turns",
      "D) The power steering hose may rupture"
    ],
    answer: 0,
    explanation: "If the pressure relief valve sticks open, hydraulic pressure is constantly vented back to the reservoir and cannot build to the level needed for assist. This results in significantly increased steering effort, especially at low speeds and during parking maneuvers.",
    diagram: "",
    terms: ["power_steering_pump", "rack_and_pinion", "proportioning_valve"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rack_and_pinion_animation.gif/400px-Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=YDl1UxCrEhM",
    youtubeTitle: "Power Steering System Explained",
    qChinese: "如果助力转向压力释放阀卡在打开位置会怎样？",
    optionsChinese: [
      "A) 转向力明显增大",
      "B) 泵发出过大噪音",
      "C) 转弯时方向盘抖动",
      "D) 助力转向软管可能爆裂"
    ],
    explanationChinese: "如果压力释放阀卡在打开位置，液压压力会不断排回储液罐，无法建立到助力所需的水平。这导致转向力显著增大，尤其在低速行驶和泊车操作时最为明显。"
  },
  {
    id: 9,
    q: "A rack-and-pinion steering system has excessive play at the steering wheel center position. What is the MOST likely cause?",
    options: [
      "A) Worn outer tie rod ends",
      "B) A loose rack mounting bushing",
      "C) Worn rack guide and spring assembly",
      "D) A bent steering rack"
    ],
    answer: 2,
    explanation: "The rack guide and spring assembly maintains proper contact between the rack and pinion gear teeth. When the guide wears or the spring weakens, backlash develops between the gear teeth, creating excessive play felt at the steering wheel center position.",
    diagram: "",
    terms: ["rack_and_pinion", "tie_rod"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rack_and_pinion_animation.gif/400px-Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=YDl1UxCrEhM",
    youtubeTitle: "Rack and Pinion Steering Explained",
    qChinese: "齿条齿轮式转向系统在方向盘中间位置有过大的游隙。最可能的原因是什么？",
    optionsChinese: [
      "A) 外横拉杆球头磨损",
      "B) 齿条安装衬套松动",
      "C) 齿条导向块和弹簧总成磨损",
      "D) 转向齿条弯曲"
    ],
    explanationChinese: "齿条导向块和弹簧总成保持齿条与小齿轮齿面之间的适当接触。当导向块磨损或弹簧变弱时，齿面之间产生间隙，造成在方向盘中间位置感觉到的过大游隙。"
  },
  {
    id: 10,
    q: "During a dry park test, a clunking noise is heard when the steering wheel is rocked back and forth. Which component is LEAST likely to cause this symptom?",
    options: [
      "A) Worn inner tie rod socket",
      "B) Loose steering gear mounting bolts",
      "C) A faulty power steering pump bearing",
      "D) Worn intermediate shaft universal joint"
    ],
    answer: 2,
    explanation: "A faulty power steering pump bearing typically causes a whining or growling noise related to engine speed, not a clunk during steering input. Worn tie rod sockets, loose gear mounting bolts, and worn intermediate shaft U-joints all produce clunking during direction changes.",
    diagram: "",
    terms: ["tie_rod", "power_steering_pump", "universal_joint"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ball_joint.jpg/640px-Ball_joint.jpg",
    youtube: "https://www.youtube.com/watch?v=T2mwJOsRk5c",
    youtubeTitle: "Tie Rod End Inspection and Replacement",
    qChinese: "在干态转向测试中，来回转动方向盘时听到咔哒声。哪个部件最不可能导致此症状？",
    optionsChinese: [
      "A) 内横拉杆球头磨损",
      "B) 转向器安装螺栓松动",
      "C) 助力转向泵轴承故障",
      "D) 中间轴万向节磨损"
    ],
    explanationChinese: "助力转向泵轴承故障通常产生与发动机转速相关的呜呜声或嗡嗡声，而不是转向输入时的咔哒声。磨损的横拉杆球头、松动的转向器安装螺栓和磨损的中间轴万向节在方向变换时都会产生咔哒声。"
  },
  {
    id: 11,
    q: "What is the correct procedure for bleeding air from a hydraulic power steering system?",
    options: [
      "A) Run the engine at high RPM while turning lock to lock rapidly",
      "B) Turn the steering wheel lock to lock with the engine off, then start the engine and repeat",
      "C) Remove the return hose and flush with new fluid while running the engine",
      "D) Pressurize the reservoir with shop air to force air out"
    ],
    answer: 1,
    explanation: "The correct bleeding procedure involves turning the steering wheel lock to lock several times with the engine off to move air to the reservoir. Then start the engine and repeat the process slowly. This prevents pump cavitation and ensures complete air removal.",
    diagram: "",
    terms: ["power_steering_pump", "rack_and_pinion"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rack_and_pinion_animation.gif/400px-Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=YDl1UxCrEhM",
    youtubeTitle: "Power Steering System Explained",
    qChinese: "液压助力转向系统排空气的正确步骤是什么？",
    optionsChinese: [
      "A) 在高转速下运行发动机并快速左右打满方向",
      "B) 在发动机关闭状态下左右打满方向，然后启动发动机重复操作",
      "C) 拆下回油管，在发动机运行时用新液冲洗",
      "D) 用压缩空气对储液罐加压以排出空气"
    ],
    explanationChinese: "正确的排气步骤是在发动机关闭状态下将方向盘左右打满转动数次，将空气移至储液罐。然后启动发动机，缓慢重复该过程。这可以防止泵气蚀，确保彻底排除空气。"
  },
  {
    id: 12,
    q: "A vehicle with electric power steering requires a steering angle sensor calibration. When is this procedure typically required?",
    options: [
      "A) After every oil change",
      "B) After a wheel alignment or component replacement affecting steering geometry",
      "C) Only when the battery is replaced",
      "D) Every 30,000 miles as scheduled maintenance"
    ],
    answer: 1,
    explanation: "Steering angle sensor calibration is required after a wheel alignment, replacement of steering or suspension components that affect geometry, or after an airbag deployment. The sensor must relearn the straight-ahead position for proper EPS and stability control operation.",
    diagram: "",
    terms: ["wheel_alignment", "scan_tool", "rack_and_pinion"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Wheel Alignment Explained - Camber, Caster, Toe",
    qChinese: "一辆配备电动助力转向的车辆需要进行转向角传感器标定。通常在什么情况下需要此步骤？",
    optionsChinese: [
      "A) 每次更换机油后",
      "B) 进行四轮定位或更换影响转向几何的零部件后",
      "C) 仅在更换电池时",
      "D) 每30,000英里作为定期保养"
    ],
    explanationChinese: "转向角传感器标定需要在四轮定位、更换影响几何角度的转向或悬架零部件后，或安全气囊展开后进行。传感器必须重新学习直行位置，以确保EPS和稳定控制系统正常工作。"
  },
  {
    id: 13,
    q: "Technician A says a power steering pump that moans only during cold starts likely has a worn pump. Technician B says the noise is likely caused by cold, thick fluid cavitating in the pump. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 1,
    explanation: "Technician B is correct. Cold power steering fluid is thicker and harder for the pump to draw through the system, causing temporary cavitation and a moaning noise. As the fluid warms and thins, the noise goes away. A worn pump would moan consistently regardless of temperature.",
    diagram: "",
    terms: ["power_steering_pump", "serpentine_belt"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rack_and_pinion_animation.gif/400px-Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=YDl1UxCrEhM",
    youtubeTitle: "Power Steering System Explained",
    qChinese: "技师A说助力转向泵仅在冷启动时发出嗡嗡声，说明泵已磨损。技师B说该噪音可能是由于冷的粘稠液体在泵中气蚀引起的。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "技师B是正确的。冷的助力转向液更粘稠，泵更难将其抽入系统，导致暂时性气蚀和嗡嗡声。液体变暖变稀后，噪音就会消失。磨损的泵无论温度如何都会持续发出嗡嗡声。"
  },
  {
    id: 14,
    q: "What is the purpose of the torsion bar in a hydraulic power steering gear valve assembly?",
    options: [
      "A) It returns the steering wheel to center after a turn",
      "B) It twists proportionally to steering effort to control valve position",
      "C) It absorbs road shock before it reaches the steering wheel",
      "D) It limits maximum steering wheel rotation"
    ],
    answer: 1,
    explanation: "The torsion bar in the power steering valve assembly connects the input shaft to the worm shaft or pinion. When the driver applies effort, the torsion bar twists, repositioning the spool valve to direct hydraulic fluid proportionally to the steering effort applied.",
    diagram: "",
    terms: ["power_steering_pump", "rack_and_pinion", "valve_body"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rack_and_pinion_animation.gif/400px-Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=YDl1UxCrEhM",
    youtubeTitle: "Power Steering System Explained",
    qChinese: "液压助力转向器阀总成中扭力杆的作用是什么？",
    optionsChinese: [
      "A) 转弯后使方向盘回正",
      "B) 根据转向力的大小成比例地扭转以控制阀的位置",
      "C) 在路面冲击传到方向盘之前吸收冲击",
      "D) 限制方向盘的最大旋转范围"
    ],
    explanationChinese: "助力转向阀总成中的扭力杆连接输入轴和蜗杆轴或小齿轮。当驾驶员施加力时，扭力杆发生扭转，重新定位滑阀以按比例引导液压液，使助力与驾驶员施加的转向力相匹配。"
  },
  {
    id: 15,
    q: "A vehicle with variable-assist electric power steering provides less assist at highway speeds. What is the reason for this design?",
    options: [
      "A) To conserve battery power at higher speeds",
      "B) To improve steering feel and stability at higher speeds",
      "C) To reduce EPS motor wear during extended highway driving",
      "D) To prevent overheating of the EPS control module"
    ],
    answer: 1,
    explanation: "Variable-assist EPS reduces assist at higher speeds to provide better road feel, steering precision, and directional stability. At low speeds, maximum assist is provided for easy maneuvering. The EPS module uses vehicle speed input to vary the assist level appropriately.",
    diagram: "",
    terms: ["rack_and_pinion", "speed_sensor", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rack_and_pinion_animation.gif/400px-Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=YDl1UxCrEhM",
    youtubeTitle: "Power Steering System Explained",
    qChinese: "一辆配备可变助力电动转向的车辆在高速公路速度下提供较少的助力。这种设计的原因是什么？",
    optionsChinese: [
      "A) 在较高速度下节省电池电量",
      "B) 在较高速度下改善转向手感和稳定性",
      "C) 减少长时间高速行驶时EPS电机的磨损",
      "D) 防止EPS控制模块过热"
    ],
    explanationChinese: "可变助力EPS在较高速度下减少助力，以提供更好的路感、转向精度和方向稳定性。在低速时提供最大助力以便于操控。EPS模块使用车速输入来适当调节助力水平。"
  },
  {
    id: 16,
    q: "The inner tie rod on a rack-and-pinion steering system is being replaced. Which of the following is the correct procedure?",
    options: [
      "A) Remove the rack boot and use an inner tie rod removal tool to unthread the socket",
      "B) Remove the entire rack assembly to access the inner tie rod",
      "C) Cut the rack boot and press the inner tie rod off the rack",
      "D) Unbolt the inner tie rod from the rack housing end cap"
    ],
    answer: 0,
    explanation: "To replace an inner tie rod, the rack boot is removed or pulled back to expose the inner tie rod socket. A special inner tie rod removal tool is then used to hold the rack while unthreading the socket. The rack assembly does not need to be removed.",
    diagram: "",
    terms: ["tie_rod", "rack_and_pinion", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ball_joint.jpg/640px-Ball_joint.jpg",
    youtube: "https://www.youtube.com/watch?v=T2mwJOsRk5c",
    youtubeTitle: "Tie Rod End Inspection and Replacement",
    qChinese: "更换齿条齿轮式转向系统的内横拉杆时，以下哪项是正确的操作步骤？",
    optionsChinese: [
      "A) 拆下齿条防尘套，使用内横拉杆拆卸工具拧下球头",
      "B) 拆下整个齿条总成以接触内横拉杆",
      "C) 切开齿条防尘套，将内横拉杆从齿条上压出",
      "D) 从齿条壳体端盖上拆下内横拉杆螺栓"
    ],
    explanationChinese: "更换内横拉杆时，需要拆下或翻开齿条防尘套以露出内横拉杆球头。然后使用专用的内横拉杆拆卸工具固定齿条并拧下球头。无需拆卸齿条总成。"
  },
  {
    id: 17,
    q: "A customer complains of a shimmy in the steering wheel at highway speeds that goes away when braking. What is the MOST likely cause?",
    options: [
      "A) Worn inner tie rod ends",
      "B) An out-of-balance front tire",
      "C) Warped front brake rotors",
      "D) A worn steering damper"
    ],
    answer: 1,
    explanation: "A shimmy felt in the steering wheel at highway speeds that disappears when braking is typically caused by an out-of-balance front tire. Warped rotors cause a shimmy during braking only. Tire imbalance creates a speed-dependent vibration that dampens under brake application.",
    diagram: "",
    terms: ["tire_rotation", "tire_pressure", "rack_and_pinion"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "客户抱怨在高速公路速度下方向盘抖动，但刹车时抖动消失。最可能的原因是什么？",
    optionsChinese: [
      "A) 内横拉杆球头磨损",
      "B) 前轮轮胎动平衡不良",
      "C) 前刹车盘变形",
      "D) 转向阻尼器磨损"
    ],
    explanationChinese: "在高速公路速度下方向盘抖动但刹车时消失，通常是由前轮轮胎动平衡不良引起的。刹车盘变形仅在制动时引起抖动。轮胎不平衡产生的速度相关振动在制动时会被减弱。"
  },
  {
    id: 18,
    q: "What type of fluid is typically recommended for most hydraulic power steering systems?",
    options: [
      "A) Automatic transmission fluid (ATF)",
      "B) Engine oil (5W-30)",
      "C) Brake fluid (DOT 3)",
      "D) Gear oil (80W-90)"
    ],
    answer: 0,
    explanation: "Most hydraulic power steering systems use automatic transmission fluid (ATF) or a manufacturer-specific power steering fluid. ATF provides proper lubrication, viscosity, and seal compatibility. Always consult the vehicle owner manual, as some manufacturers require specific formulations.",
    diagram: "",
    terms: ["power_steering_pump", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rack_and_pinion_animation.gif/400px-Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=YDl1UxCrEhM",
    youtubeTitle: "Power Steering System Explained",
    qChinese: "大多数液压助力转向系统通常推荐使用哪种液体？",
    optionsChinese: [
      "A) 自动变速箱油（ATF）",
      "B) 发动机机油（5W-30）",
      "C) 制动液（DOT 3）",
      "D) 齿轮油（80W-90）"
    ],
    explanationChinese: "大多数液压助力转向系统使用自动变速箱油（ATF）或制造商指定的助力转向液。ATF提供适当的润滑、粘度和密封兼容性。务必查阅车辆用户手册，因为某些制造商要求使用特定配方。"
  },
  {
    id: 19,
    q: "Technician A says a worn sector shaft bearing in a recirculating ball steering gear causes excessive steering play. Technician B says the over-center adjustment on the sector shaft can compensate for normal wear. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both are correct. A worn sector shaft bearing allows excessive play in the steering gear. The over-center adjustment screw on the sector shaft can be tightened to take up normal wear and reduce play. However, severely worn components will need replacement rather than adjustment.",
    diagram: "",
    terms: ["rack_and_pinion", "power_steering_pump", "ball_joint"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rack_and_pinion_animation.gif/400px-Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=YDl1UxCrEhM",
    youtubeTitle: "Power Steering System Explained",
    qChinese: "技师A说循环球式转向器中磨损的扇形轴轴承会导致转向游隙过大。技师B说扇形轴的中心调整可以补偿正常磨损。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都是正确的。磨损的扇形轴轴承会导致转向器出现过大的游隙。扇形轴上的中心调整螺丝可以拧紧以补偿正常磨损并减少游隙。但是，严重磨损的部件需要更换而不是调整。"
  },
  {
    id: 20,
    q: "A vehicle with column-mounted electric power steering has an intermittent EPS warning light. A scan tool shows a torque sensor circuit fault. What should be inspected FIRST?",
    options: [
      "A) The EPS motor windings",
      "B) The wiring harness connectors at the steering column",
      "C) The vehicle battery voltage",
      "D) The steering wheel position sensor"
    ],
    answer: 1,
    explanation: "When a torque sensor circuit fault is present, the wiring harness connectors at the steering column should be inspected first. Loose, corroded, or damaged connectors are the most common cause of intermittent circuit faults in column-mounted EPS systems before condemning internal components.",
    diagram: "",
    terms: ["scan_tool", "dtc", "wiring_diagram"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rack_and_pinion_animation.gif/400px-Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=YDl1UxCrEhM",
    youtubeTitle: "Power Steering System Explained",
    qChinese: "一辆配备转向柱式电动助力转向的车辆，EPS警告灯间歇性亮起。诊断仪显示扭矩传感器电路故障。应首先检查什么？",
    optionsChinese: [
      "A) EPS电机绕组",
      "B) 转向柱处的线束连接器",
      "C) 车辆电池电压",
      "D) 方向盘位置传感器"
    ],
    explanationChinese: "当存在扭矩传感器电路故障时，应首先检查转向柱处的线束连接器。松动、腐蚀或损坏的连接器是转向柱式EPS系统中间歇性电路故障最常见的原因，应在判定内部部件故障之前先行检查。"
  },
  {
    id: 21,
    q: "What is the function of the bellows boots on a rack-and-pinion steering assembly?",
    options: [
      "A) To dampen road vibrations transmitted through the rack",
      "B) To protect the inner tie rods and rack seals from contamination",
      "C) To maintain hydraulic pressure within the steering rack",
      "D) To limit the travel of the rack from lock to lock"
    ],
    answer: 1,
    explanation: "The bellows boots on a rack-and-pinion assembly seal the ends of the rack housing, protecting the inner tie rod sockets and rack seals from water, dirt, and road debris contamination. Torn boots should be replaced immediately to prevent premature inner component failure.",
    diagram: "",
    terms: ["rack_and_pinion", "tie_rod", "cv_joint"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rack_and_pinion_animation.gif/400px-Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=YDl1UxCrEhM",
    youtubeTitle: "Rack and Pinion Steering Explained",
    qChinese: "齿条齿轮式转向总成上波纹防尘套的作用是什么？",
    optionsChinese: [
      "A) 减弱通过齿条传递的路面振动",
      "B) 保护内横拉杆和齿条密封件免受污染",
      "C) 维持转向齿条内部的液压压力",
      "D) 限制齿条从左满打到右满打的行程"
    ],
    explanationChinese: "齿条齿轮总成上的波纹防尘套密封齿条壳体两端，保护内横拉杆球头和齿条密封件免受水、灰尘和路面碎屑的污染。破损的防尘套应立即更换，以防止内部部件过早失效。"
  },
  {
    id: 22,
    q: "A power steering pump pressure test shows that pressure is below specification with the test valve fully closed. What does this indicate?",
    options: [
      "A) The steering gear has an internal leak",
      "B) The power steering pump is worn or faulty",
      "C) The flow control valve is stuck open",
      "D) The return hose is restricted"
    ],
    answer: 1,
    explanation: "When the test valve is fully closed, it isolates the pump from the rest of the system. If pressure is still below specification in this condition, the pump itself is worn or faulty and cannot generate adequate pressure. The steering gear is bypassed during this test.",
    diagram: "",
    terms: ["power_steering_pump", "rack_and_pinion"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rack_and_pinion_animation.gif/400px-Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=YDl1UxCrEhM",
    youtubeTitle: "Power Steering System Explained",
    qChinese: "助力转向泵压力测试显示，在测试阀完全关闭时压力低于规格。这说明什么？",
    optionsChinese: [
      "A) 转向器有内部泄漏",
      "B) 助力转向泵磨损或故障",
      "C) 流量控制阀卡在打开位置",
      "D) 回油管路受阻"
    ],
    explanationChinese: "当测试阀完全关闭时，泵与系统其他部分隔离。如果在此条件下压力仍低于规格，则泵本身磨损或故障，无法产生足够的压力。在此测试中，转向器已被旁通。"
  },
  {
    id: 23,
    q: "A vehicle with electronic power steering pulls to the right. The alignment is within specification. What should be checked?",
    options: [
      "A) The EPS motor for a short circuit",
      "B) The steering angle sensor zero-point calibration",
      "C) The power steering fluid level",
      "D) The steering column tilt mechanism"
    ],
    answer: 1,
    explanation: "If a vehicle with EPS pulls to one side and the alignment is correct, the steering angle sensor zero-point calibration may be off. An incorrectly calibrated sensor tells the EPS module the steering is centered when it is not, causing unequal assist and a pull.",
    diagram: "",
    terms: ["rack_and_pinion", "wheel_alignment", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Wheel Alignment Explained - Camber, Caster, Toe",
    qChinese: "一辆配备电子助力转向的车辆向右偏移。四轮定位在规格范围内。应检查什么？",
    optionsChinese: [
      "A) EPS电机是否短路",
      "B) 转向角传感器零点标定",
      "C) 助力转向液液位",
      "D) 转向柱倾斜机构"
    ],
    explanationChinese: "如果配备EPS的车辆向一侧偏移且定位正确，转向角传感器零点标定可能偏差。标定不正确的传感器告诉EPS模块转向已居中，但实际并非如此，导致助力不均匀并产生偏移。"
  },
  {
    id: 24,
    q: "Which component connects the pitman arm to the steering knuckle in a parallelogram steering linkage?",
    options: [
      "A) The center link and tie rods",
      "B) The drag link only",
      "C) The intermediate shaft",
      "D) The idler arm only"
    ],
    answer: 0,
    explanation: "In a parallelogram steering linkage, the pitman arm connects to the center link (relay rod), which connects through the tie rods to the steering knuckles. The idler arm supports the opposite end of the center link. Together they form the parallelogram geometry.",
    diagram: "",
    terms: ["tie_rod", "rack_and_pinion", "ball_joint"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ball_joint.jpg/640px-Ball_joint.jpg",
    youtube: "https://www.youtube.com/watch?v=T2mwJOsRk5c",
    youtubeTitle: "Tie Rod End Inspection and Replacement",
    qChinese: "在平行四边形转向连杆机构中，哪个部件连接摇臂和转向节？",
    optionsChinese: [
      "A) 中间连杆和横拉杆",
      "B) 仅拖曳连杆",
      "C) 中间轴",
      "D) 仅惰臂"
    ],
    explanationChinese: "在平行四边形转向连杆机构中，摇臂连接到中间连杆（中继杆），中间连杆通过横拉杆连接到转向节。惰臂支撑中间连杆的另一端。它们共同构成平行四边形几何结构。"
  },
  {
    id: 25,
    q: "A customer reports that the steering wheel does not return to center after a turn. All of the following could cause this EXCEPT:",
    options: [
      "A) Low caster angle",
      "B) Binding in the upper strut mount",
      "C) Excessive positive camber",
      "D) Tight steering gear preload adjustment"
    ],
    answer: 2,
    explanation: "Excessive positive camber does not affect steering wheel returnability. Low caster reduces the self-centering force. Binding in the upper strut mount creates friction preventing return. An overly tight steering gear preload creates resistance that prevents the wheel from returning to center.",
    diagram: "",
    terms: ["caster", "camber", "strut", "rack_and_pinion"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Wheel Alignment Explained - Camber, Caster, Toe",
    qChinese: "客户反映转弯后方向盘不能回正。以下所有原因都可能导致此问题，除了：",
    optionsChinese: [
      "A) 主销后倾角过小",
      "B) 上支撑座轴承卡滞",
      "C) 正外倾角过大",
      "D) 转向器预紧力调整过紧"
    ],
    explanationChinese: "正外倾角过大不影响方向盘的回正性能。主销后倾角过小会降低自动回正力。上支撑座轴承卡滞会产生阻碍回正的摩擦力。转向器预紧力过大会产生阻力，阻止方向盘回到中心位置。"
  },
  {
    id: 26,
    q: "During a power steering system inspection, the drive belt is found to be glazed and slipping. What effect does this have?",
    options: [
      "A) The steering will lock up intermittently",
      "B) Steering effort increases, especially at low speed and during parking",
      "C) The power steering pump will overheat",
      "D) The steering wheel will vibrate at idle"
    ],
    answer: 1,
    explanation: "A glazed, slipping drive belt cannot properly turn the power steering pump at the correct speed. This results in reduced pump output and increased steering effort, which is most noticeable at low speeds and during parking maneuvers when maximum assist is needed.",
    diagram: "",
    terms: ["serpentine_belt", "power_steering_pump", "rack_and_pinion"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rack_and_pinion_animation.gif/400px-Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=YDl1UxCrEhM",
    youtubeTitle: "Power Steering System Explained",
    qChinese: "在助力转向系统检查中，发现驱动皮带表面光滑打滑。这会产生什么影响？",
    optionsChinese: [
      "A) 转向会间歇性锁死",
      "B) 转向力增大，尤其在低速和泊车时",
      "C) 助力转向泵会过热",
      "D) 方向盘在怠速时会振动"
    ],
    explanationChinese: "表面光滑、打滑的驱动皮带无法以正确的速度驱动助力转向泵。这导致泵输出降低，转向力增大，在低速和泊车操作时最为明显，因为此时需要最大助力。"
  },
  {
    id: 27,
    q: "What is the purpose of the steering damper (stabilizer) found on some vehicles?",
    options: [
      "A) To provide additional power assist during turns",
      "B) To absorb road shock and dampen steering wheel oscillations",
      "C) To limit steering wheel rotation to prevent over-travel",
      "D) To maintain proper steering gear preload"
    ],
    answer: 1,
    explanation: "A steering damper is essentially a shock absorber for the steering linkage. It absorbs road shock and dampens steering wheel oscillations or shimmy that can be transmitted through the steering system, improving driver comfort and steering stability on rough roads.",
    diagram: "",
    terms: ["shock_absorber", "rack_and_pinion", "tie_rod"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/McPherson_strut.png/400px-McPherson_strut.png",
    youtube: "https://www.youtube.com/watch?v=4bse5dIVRDk",
    youtubeTitle: "How Struts and Shocks Work",
    qChinese: "某些车辆上配备的转向阻尼器（稳定器）的作用是什么？",
    optionsChinese: [
      "A) 在转弯时提供额外的助力",
      "B) 吸收路面冲击并抑制方向盘振荡",
      "C) 限制方向盘旋转以防止过度行程",
      "D) 维持转向器的正确预紧力"
    ],
    explanationChinese: "转向阻尼器本质上是转向连杆机构的减震器。它吸收路面冲击并抑制通过转向系统传递的方向盘振荡或摆振，改善驾驶员舒适性和在颠簸路面上的转向稳定性。"
  },
  {
    id: 28,
    q: "Technician A says an EPS system can adjust assist based on vehicle speed input. Technician B says an EPS system can provide active return-to-center control. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both are correct. EPS systems use vehicle speed signals to vary assist levels, providing more assist at low speeds and less at high speeds. Many EPS systems also actively control return-to-center action using the electric motor, improving steering feel and centering force.",
    diagram: "",
    terms: ["rack_and_pinion", "speed_sensor", "pcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rack_and_pinion_animation.gif/400px-Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=YDl1UxCrEhM",
    youtubeTitle: "Power Steering System Explained",
    qChinese: "技师A说EPS系统可以根据车速输入调节助力。技师B说EPS系统可以提供主动回正控制。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都是正确的。EPS系统使用车速信号来调节助力水平，在低速时提供更多助力，在高速时减少助力。许多EPS系统还使用电动机主动控制回正动作，改善转向手感和回正力。"
  },
  {
    id: 29,
    q: "A vehicle with hydraulic power steering has hard steering only when turning right. What is the MOST likely cause?",
    options: [
      "A) A worn power steering pump",
      "B) An internal seal leak in the steering gear on one side",
      "C) A restricted suction hose",
      "D) Low power steering fluid"
    ],
    answer: 1,
    explanation: "Hard steering in one direction only indicates an internal seal leak in the steering gear or rack on one side. The internal piston seals allow fluid to bypass in one direction of travel. A worn pump, restricted hose, or low fluid would cause hard steering in both directions.",
    diagram: "",
    terms: ["rack_and_pinion", "power_steering_pump"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rack_and_pinion_animation.gif/400px-Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=YDl1UxCrEhM",
    youtubeTitle: "Rack and Pinion Steering Explained",
    qChinese: "一辆配备液压助力转向的车辆仅在向右转时转向沉重。最可能的原因是什么？",
    optionsChinese: [
      "A) 助力转向泵磨损",
      "B) 转向器一侧的内部密封泄漏",
      "C) 吸油管路受阻",
      "D) 助力转向液不足"
    ],
    explanationChinese: "仅在一个方向上转向沉重表明转向器或齿条一侧存在内部密封泄漏。内部活塞密封件允许液体在一个行程方向上旁通。泵磨损、管路受阻或液位不足会导致双向转向沉重。"
  },
  {
    id: 30,
    q: "What precaution must be taken when servicing a vehicle equipped with a supplemental restraint system (SRS) and a clock spring in the steering column?",
    options: [
      "A) The battery must be disconnected and a waiting period observed before working on the steering column",
      "B) The steering wheel must be locked in the straight-ahead position at all times",
      "C) The airbag fuse must be pulled but the battery can remain connected",
      "D) Only the negative battery cable needs to be disconnected momentarily"
    ],
    answer: 0,
    explanation: "Before servicing the steering column or clock spring, the battery must be disconnected and a manufacturer-specified waiting period (typically 1-2 minutes minimum) must be observed. This allows the SRS backup capacitor to discharge, preventing accidental airbag deployment during service.",
    diagram: "",
    terms: ["battery", "rack_and_pinion", "wiring_diagram"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rack_and_pinion_animation.gif/400px-Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=YDl1UxCrEhM",
    youtubeTitle: "Power Steering System Explained",
    qChinese: "在维修配备辅助约束系统（SRS）和转向柱时钟弹簧的车辆时，必须采取什么预防措施？",
    optionsChinese: [
      "A) 必须断开电池连接并等待规定时间后才能操作转向柱",
      "B) 方向盘必须始终锁定在直行位置",
      "C) 只需拔掉安全气囊保险丝，电池可以保持连接",
      "D) 只需暂时断开蓄电池负极电缆"
    ],
    explanationChinese: "在维修转向柱或时钟弹簧之前，必须断开蓄电池连接并等待制造商规定的时间（通常至少1-2分钟）。这使SRS备用电容器放电，防止维修期间安全气囊意外展开。"
  },

  // ===== SUSPENSION SYSTEMS (Questions 31-60) =====
  {
    id: 31,
    q: "A vehicle has a clunking noise from the front end when driving over bumps. A visual inspection reveals a torn ball joint boot. What should be done?",
    options: [
      "A) Replace only the boot and repack with grease",
      "B) Replace the ball joint assembly",
      "C) Tighten the ball joint castle nut and install a new cotter pin",
      "D) Lubricate the ball joint through the grease fitting"
    ],
    answer: 1,
    explanation: "A torn ball joint boot allows contamination that accelerates wear, and the clunking noise confirms the joint is worn. The entire ball joint assembly should be replaced. Simply replacing the boot or lubricating will not restore a worn joint to proper operation.",
    diagram: "",
    terms: ["ball_joint", "control_arm", "strut"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ball_joint.jpg/640px-Ball_joint.jpg",
    youtube: "https://www.youtube.com/watch?v=T2mwJOsRk5c",
    youtubeTitle: "Ball Joint Inspection and Replacement",
    qChinese: "车辆前端在过颠簸时发出咔哒声。目视检查发现球头防尘套破损。应该怎么做？",
    optionsChinese: [
      "A) 仅更换防尘套并重新填充润滑脂",
      "B) 更换球头总成",
      "C) 拧紧球头城堡螺母并安装新的开口销",
      "D) 通过润滑脂嘴对球头进行润滑"
    ],
    explanationChinese: "破损的球头防尘套允许污染物进入加速磨损，咔哒声确认球头已经磨损。应更换整个球头总成。仅更换防尘套或润滑无法使磨损的球头恢复正常功能。"
  },
  {
    id: 32,
    q: "Technician A says a weak coil spring on one side of the front suspension can cause the vehicle to pull to that side. Technician B says a weak coil spring will cause that side of the vehicle to sit lower. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both are correct. A weak coil spring will sag, causing that side to sit lower, which changes the camber and caster angles on that side. These alignment changes can cause the vehicle to pull toward the side with the weak spring during straight-ahead driving.",
    diagram: "",
    terms: ["strut", "camber", "caster", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/McPherson_strut.png/400px-McPherson_strut.png",
    youtube: "https://www.youtube.com/watch?v=4bse5dIVRDk",
    youtubeTitle: "How Struts and Shocks Work",
    qChinese: "技师A说前悬架一侧的弹簧弱化会导致车辆向该侧偏移。技师B说弱化的弹簧会导致该侧车身下沉。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都是正确的。弱化的弹簧会下沉，导致该侧车身降低，从而改变该侧的外倾角和主销后倾角。这些定位角度的变化会导致车辆在直线行驶时向弹簧弱化的一侧偏移。"
  },
  {
    id: 33,
    q: "What is the purpose of a stabilizer bar (sway bar) in a vehicle's suspension?",
    options: [
      "A) To support the weight of the vehicle",
      "B) To reduce body roll during cornering",
      "C) To absorb road shock from bumps",
      "D) To maintain correct wheel alignment"
    ],
    answer: 1,
    explanation: "A stabilizer bar (sway bar) connects the left and right sides of the suspension. During cornering, it transfers force from the loaded side to the unloaded side, reducing body roll and improving vehicle stability. It does not significantly support vehicle weight or absorb bumps.",
    diagram: "",
    terms: ["sway_bar", "control_arm", "strut"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/McPherson_strut.png/400px-McPherson_strut.png",
    youtube: "https://www.youtube.com/watch?v=4bse5dIVRDk",
    youtubeTitle: "Sway Bar and End Links Explained",
    qChinese: "车辆悬架中稳定杆（横向稳定杆）的作用是什么？",
    optionsChinese: [
      "A) 支撑车辆重量",
      "B) 减少转弯时的车身侧倾",
      "C) 吸收颠簸的路面冲击",
      "D) 保持正确的车轮定位"
    ],
    explanationChinese: "稳定杆（横向稳定杆）连接悬架的左右两侧。在转弯时，它将受力侧的力传递到非受力侧，减少车身侧倾并改善车辆稳定性。它不能显著支撑车辆重量或吸收颠簸冲击。"
  },
  {
    id: 34,
    q: "A MacPherson strut assembly is being replaced. Which of the following requires the use of a spring compressor tool?",
    options: [
      "A) Removing the strut from the vehicle",
      "B) Separating the strut cartridge from the housing",
      "C) Removing the upper strut mount to replace the strut cartridge or assembly",
      "D) Disconnecting the stabilizer bar link from the strut"
    ],
    answer: 2,
    explanation: "A spring compressor must be used when removing the upper strut mount nut because the coil spring is under heavy compression. Without compressing the spring first, removing the top nut would release the spring energy violently, causing serious injury or death.",
    diagram: "",
    terms: ["strut", "sway_bar", "control_arm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/McPherson_strut.png/400px-McPherson_strut.png",
    youtube: "https://www.youtube.com/watch?v=4bse5dIVRDk",
    youtubeTitle: "How Struts and Shocks Work",
    qChinese: "正在更换麦弗逊支柱总成。以下哪项操作需要使用弹簧压缩工具？",
    optionsChinese: [
      "A) 从车辆上拆下支柱",
      "B) 将支柱芯从壳体中分离",
      "C) 拆下上支撑座以更换支柱芯或总成",
      "D) 从支柱上断开稳定杆连杆"
    ],
    explanationChinese: "拆下上支撑座螺母时必须使用弹簧压缩器，因为螺旋弹簧处于高度压缩状态。如果不先压缩弹簧就拆下顶部螺母，弹簧能量会猛烈释放，造成严重伤害甚至死亡。"
  },
  {
    id: 35,
    q: "A vehicle bounces excessively after hitting a bump. A bounce test shows the vehicle oscillates more than two times before settling. What is the MOST likely cause?",
    options: [
      "A) Worn shock absorbers or struts",
      "B) Weak coil springs",
      "C) Worn control arm bushings",
      "D) A broken stabilizer bar link"
    ],
    answer: 0,
    explanation: "Worn shock absorbers or struts cannot properly dampen spring oscillation. A properly functioning shock should stop the vehicle from bouncing within one to two oscillations. More than two bounces during a jounce test indicates the dampers are worn and need replacement.",
    diagram: "",
    terms: ["shock_absorber", "strut", "control_arm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/McPherson_strut.png/400px-McPherson_strut.png",
    youtube: "https://www.youtube.com/watch?v=4bse5dIVRDk",
    youtubeTitle: "How Struts and Shocks Work",
    qChinese: "车辆在碰到颠簸后过度弹跳。弹跳测试显示车辆在稳定前振荡超过两次。最可能的原因是什么？",
    optionsChinese: [
      "A) 减震器或支柱磨损",
      "B) 螺旋弹簧弱化",
      "C) 控制臂衬套磨损",
      "D) 稳定杆连杆断裂"
    ],
    explanationChinese: "磨损的减震器或支柱无法正常抑制弹簧振荡。功能正常的减震器应在一到两次振荡内使车辆停止弹跳。弹跳测试中超过两次振荡表明阻尼器已磨损，需要更换。"
  },
  {
    id: 36,
    q: "All of the following are symptoms of worn control arm bushings EXCEPT:",
    options: [
      "A) Clunking noise over bumps",
      "B) Wandering or vague steering feel",
      "C) Steering wheel vibration at highway speed",
      "D) Uneven tire wear on the affected side"
    ],
    answer: 2,
    explanation: "Steering wheel vibration at highway speed is typically caused by tire imbalance or warped brake rotors, not worn control arm bushings. Worn bushings cause clunking over bumps, vague steering, and alignment changes that lead to uneven tire wear on the affected side.",
    diagram: "",
    terms: ["control_arm", "wheel_alignment", "tire_rotation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/McPherson_strut.png/400px-McPherson_strut.png",
    youtube: "https://www.youtube.com/watch?v=4bse5dIVRDk",
    youtubeTitle: "Suspension Control Arms Explained",
    qChinese: "以下所有情况都是控制臂衬套磨损的症状，除了：",
    optionsChinese: [
      "A) 过颠簸时发出咔哒声",
      "B) 转向感觉飘忽不定",
      "C) 高速公路速度下方向盘振动",
      "D) 受影响一侧轮胎不均匀磨损"
    ],
    explanationChinese: "高速公路速度下方向盘振动通常由轮胎不平衡或刹车盘变形引起，而非控制臂衬套磨损。磨损的衬套会导致过颠簸时发出咔哒声、转向感觉模糊以及定位角度变化引起的受影响一侧轮胎不均匀磨损。"
  },
  {
    id: 37,
    q: "A vehicle with rear leaf springs has a sagging rear end on one side. What should be inspected?",
    options: [
      "A) The rear shock absorbers",
      "B) The leaf spring for broken or cracked leaves",
      "C) The rear stabilizer bar bushings",
      "D) The rear axle bearing"
    ],
    answer: 1,
    explanation: "A sagging rear end on one side is most commonly caused by broken, cracked, or fatigued leaf spring leaves that can no longer support the vehicle weight on that side. Shock absorbers control bounce but do not support vehicle weight. The spring pack should be inspected first.",
    diagram: "",
    terms: ["shock_absorber", "sway_bar", "differential"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/McPherson_strut.png/400px-McPherson_strut.png",
    youtube: "https://www.youtube.com/watch?v=4bse5dIVRDk",
    youtubeTitle: "Suspension System Components Overview",
    qChinese: "一辆配备后钢板弹簧的车辆后部一侧下沉。应检查什么？",
    optionsChinese: [
      "A) 后减震器",
      "B) 钢板弹簧是否有断裂或开裂的簧片",
      "C) 后稳定杆衬套",
      "D) 后桥轴承"
    ],
    explanationChinese: "后部一侧下沉最常见的原因是钢板弹簧的簧片断裂、开裂或疲劳，无法继续支撑该侧的车辆重量。减震器控制弹跳但不支撑车辆重量。应首先检查弹簧组。"
  },
  {
    id: 38,
    q: "What is the function of the upper strut mount bearing plate in a MacPherson strut suspension?",
    options: [
      "A) It allows the strut to pivot when the steering wheel is turned",
      "B) It absorbs vertical road shock before it reaches the body",
      "C) It maintains proper camber angle during suspension travel",
      "D) It prevents the coil spring from shifting on the strut"
    ],
    answer: 0,
    explanation: "The upper strut mount bearing plate allows the strut assembly to rotate when the steering wheel is turned, since the MacPherson strut is part of the steering knuckle. Without a functioning bearing, the steering would bind and feel stiff during turning maneuvers.",
    diagram: "",
    terms: ["strut", "rack_and_pinion", "camber"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/McPherson_strut.png/400px-McPherson_strut.png",
    youtube: "https://www.youtube.com/watch?v=4bse5dIVRDk",
    youtubeTitle: "How Struts and Shocks Work",
    qChinese: "麦弗逊支柱悬架中上支撑座轴承板的功能是什么？",
    optionsChinese: [
      "A) 允许支柱在转动方向盘时旋转",
      "B) 在垂直路面冲击传到车身之前吸收冲击",
      "C) 在悬架行程中保持正确的外倾角",
      "D) 防止螺旋弹簧在支柱上移位"
    ],
    explanationChinese: "上支撑座轴承板允许支柱总成在转动方向盘时旋转，因为麦弗逊支柱是转向节的一部分。如果轴承功能失效，转向操作时会出现卡滞和沉重感。"
  },
  {
    id: 39,
    q: "Technician A says ball joints should be unloaded before checking for wear. Technician B says the method of unloading depends on whether the spring is on the upper or lower control arm. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both are correct. Ball joints must be unloaded from spring tension to accurately check for wear. If the spring sits on the lower control arm, the lower ball joint is load-carrying and must be unloaded by supporting the lower arm. The opposite applies for upper spring placement.",
    diagram: "",
    terms: ["ball_joint", "control_arm", "strut"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ball_joint.jpg/640px-Ball_joint.jpg",
    youtube: "https://www.youtube.com/watch?v=T2mwJOsRk5c",
    youtubeTitle: "Ball Joint Inspection and Replacement",
    qChinese: "技师A说检查球头磨损前应先卸载球头。技师B说卸载方法取决于弹簧安装在上控制臂还是下控制臂上。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都是正确的。球头必须从弹簧张力中卸载才能准确检查磨损。如果弹簧安装在下控制臂上，下球头为承载型球头，需要通过支撑下控制臂来卸载。弹簧安装在上方时则相反。"
  },
  {
    id: 40,
    q: "A vehicle has a knocking noise from the rear when going over bumps. The shock absorbers are in good condition. What is the MOST likely cause?",
    options: [
      "A) Worn rear stabilizer bar end links or bushings",
      "B) A worn rear axle pinion bearing",
      "C) A bent rear rim",
      "D) A faulty rear brake caliper"
    ],
    answer: 0,
    explanation: "Worn rear stabilizer bar end links or bushings are a common cause of rear knocking noises over bumps. When the rubber bushings wear or the links become loose, they allow the stabilizer bar to knock against the body or suspension components during bump travel.",
    diagram: "",
    terms: ["sway_bar", "shock_absorber", "control_arm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/McPherson_strut.png/400px-McPherson_strut.png",
    youtube: "https://www.youtube.com/watch?v=4bse5dIVRDk",
    youtubeTitle: "Sway Bar and End Links Explained",
    qChinese: "车辆后部在过颠簸时发出敲击声。减震器状况良好。最可能的原因是什么？",
    optionsChinese: [
      "A) 后稳定杆连杆或衬套磨损",
      "B) 后桥主减速器轴承磨损",
      "C) 后轮辋弯曲",
      "D) 后刹车卡钳故障"
    ],
    explanationChinese: "磨损的后稳定杆连杆或衬套是后部过颠簸时敲击声的常见原因。当橡胶衬套磨损或连杆松动时，稳定杆在悬架行程中会撞击车身或悬架部件，发出敲击声。"
  },
  {
    id: 41,
    q: "What tool is used to measure ball joint axial (vertical) play?",
    options: [
      "A) A micrometer",
      "B) A dial indicator",
      "C) A torque wrench",
      "D) A tread depth gauge"
    ],
    answer: 1,
    explanation: "A dial indicator is used to measure ball joint axial (vertical) play. The indicator is positioned against the steering knuckle near the ball joint, and the suspension is pried upward. The measured movement is compared to manufacturer specifications to determine if replacement is needed.",
    diagram: "",
    terms: ["ball_joint", "control_arm", "dmm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ball_joint.jpg/640px-Ball_joint.jpg",
    youtube: "https://www.youtube.com/watch?v=T2mwJOsRk5c",
    youtubeTitle: "Ball Joint Inspection and Replacement",
    qChinese: "使用什么工具测量球头轴向（垂直）间隙？",
    optionsChinese: [
      "A) 千分尺",
      "B) 百分表",
      "C) 扭力扳手",
      "D) 胎纹深度计"
    ],
    explanationChinese: "百分表用于测量球头轴向（垂直）间隙。将百分表抵在球头附近的转向节上，然后用撬棍向上撬动悬架。测量值与制造商规格进行比较，以确定是否需要更换。"
  },
  {
    id: 42,
    q: "A vehicle with an independent rear suspension has excessive negative camber on one rear wheel. What is the MOST likely cause?",
    options: [
      "A) A worn rear trailing arm bushing",
      "B) A bent rear upper control arm",
      "C) A broken rear stabilizer bar",
      "D) Worn rear shock absorber mounts"
    ],
    answer: 1,
    explanation: "A bent rear upper control arm will pull the top of the wheel inward, creating excessive negative camber on that wheel. In an independent rear suspension, the upper control arm geometry directly controls camber angle. This typically occurs from hitting a curb or pothole.",
    diagram: "",
    terms: ["camber", "control_arm", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Wheel Alignment Explained - Camber, Caster, Toe",
    qChinese: "一辆配备独立后悬架的车辆，一个后轮有过大的负外倾角。最可能的原因是什么？",
    optionsChinese: [
      "A) 后拖臂衬套磨损",
      "B) 后上控制臂弯曲",
      "C) 后稳定杆断裂",
      "D) 后减震器上支撑座磨损"
    ],
    explanationChinese: "弯曲的后上控制臂会将车轮顶部向内拉，在该车轮上产生过大的负外倾角。在独立后悬架中，上控制臂的几何形状直接控制外倾角。这通常是因为撞到路肩或路面坑洞导致的。"
  },
  {
    id: 43,
    q: "A vehicle equipped with electronically controlled air suspension will not raise to the normal ride height. The compressor runs but the vehicle stays low. What is the MOST likely cause?",
    options: [
      "A) A faulty ride height sensor",
      "B) A leak in one or more air springs or lines",
      "C) A bad compressor relay",
      "D) A malfunctioning suspension control module"
    ],
    answer: 1,
    explanation: "If the air suspension compressor runs but the vehicle stays low, there is a leak in the system. Air is escaping from an air spring, line, or fitting faster than the compressor can inflate the system. A soapy water test can locate the leak source.",
    diagram: "",
    terms: ["compressor", "relay", "refrigerant_leak_detection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/McPherson_strut.png/400px-McPherson_strut.png",
    youtube: "https://www.youtube.com/watch?v=4bse5dIVRDk",
    youtubeTitle: "Suspension System Components Overview",
    qChinese: "一辆配备电控空气悬架的车辆无法升至正常行驶高度。压缩机运转但车辆保持低位。最可能的原因是什么？",
    optionsChinese: [
      "A) 行驶高度传感器故障",
      "B) 一个或多个空气弹簧或管路泄漏",
      "C) 压缩机继电器损坏",
      "D) 悬架控制模块故障"
    ],
    explanationChinese: "如果空气悬架压缩机运转但车辆保持低位，说明系统存在泄漏。空气从空气弹簧、管路或接头逸出的速度快于压缩机充气的速度。可以使用肥皂水检测泄漏源。"
  },
  {
    id: 44,
    q: "What is the purpose of the jounce bumper (bump stop) on a suspension strut or shock absorber?",
    options: [
      "A) To prevent the suspension from bottoming out during heavy compression",
      "B) To reduce tire noise at highway speeds",
      "C) To keep the coil spring in position on the strut",
      "D) To provide additional damping at highway speeds"
    ],
    answer: 0,
    explanation: "The jounce bumper (bump stop) is a rubber or foam cushion on the shock or strut shaft that contacts the lower mount area during heavy compression travel. It prevents metal-to-metal contact when the suspension bottoms out, protecting suspension components from damage.",
    diagram: "",
    terms: ["strut", "shock_absorber", "control_arm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/McPherson_strut.png/400px-McPherson_strut.png",
    youtube: "https://www.youtube.com/watch?v=4bse5dIVRDk",
    youtubeTitle: "How Struts and Shocks Work",
    qChinese: "悬架支柱或减震器上缓冲块（限位块）的作用是什么？",
    optionsChinese: [
      "A) 防止悬架在重度压缩时触底",
      "B) 降低高速公路速度下的轮胎噪音",
      "C) 保持螺旋弹簧在支柱上的位置",
      "D) 在高速公路速度下提供额外的阻尼"
    ],
    explanationChinese: "缓冲块（限位块）是安装在减震器或支柱杆上的橡胶或泡沫缓冲垫，在重度压缩行程中与下安装区域接触。它防止悬架触底时的金属对金属接触，保护悬架部件免受损坏。"
  },
  {
    id: 45,
    q: "Technician A says worn rear shock absorbers can cause cupping (scalloped wear) on the rear tires. Technician B says worn shock absorbers increase stopping distances. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both are correct. Worn shocks allow the tires to bounce, creating a cupped or scalloped wear pattern from the uneven contact with the road surface. They also increase stopping distances because the tire loses consistent contact with the road during braking.",
    diagram: "",
    terms: ["shock_absorber", "tire_rotation", "brake_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/McPherson_strut.png/400px-McPherson_strut.png",
    youtube: "https://www.youtube.com/watch?v=4bse5dIVRDk",
    youtubeTitle: "How Struts and Shocks Work",
    qChinese: "技师A说磨损的后减震器会导致后轮胎出现杯状（扇贝状）磨损。技师B说磨损的减震器会增加制动距离。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都是正确的。磨损的减震器允许轮胎弹跳，由于与路面不均匀接触而产生杯状或扇贝状磨损花纹。它们还会增加制动距离，因为轮胎在制动时无法与路面保持一致接触。"
  },
  {
    id: 46,
    q: "A vehicle with a short/long arm (SLA) front suspension has uneven ride height. The left side sits one inch lower than the right. What should be checked FIRST?",
    options: [
      "A) The upper and lower ball joints on the left side",
      "B) The left front coil spring for sag or breakage",
      "C) The left front shock absorber for leaks",
      "D) The left stabilizer bar end link"
    ],
    answer: 1,
    explanation: "A one-inch ride height difference between sides is most commonly caused by a sagged, weakened, or broken coil spring on the lower side. The spring is the primary component supporting vehicle weight. Shock absorbers control bounce but do not significantly affect ride height.",
    diagram: "",
    terms: ["control_arm", "ball_joint", "shock_absorber"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/McPherson_strut.png/400px-McPherson_strut.png",
    youtube: "https://www.youtube.com/watch?v=4bse5dIVRDk",
    youtubeTitle: "Suspension System Components Overview",
    qChinese: "一辆配备短长臂（SLA）前悬架的车辆行驶高度不均匀。左侧比右侧低一英寸。应首先检查什么？",
    optionsChinese: [
      "A) 左侧的上下球头",
      "B) 左前螺旋弹簧是否下沉或断裂",
      "C) 左前减震器是否泄漏",
      "D) 左侧稳定杆连杆"
    ],
    explanationChinese: "两侧一英寸的行驶高度差异最常见的原因是较低一侧的螺旋弹簧下沉、弱化或断裂。弹簧是支撑车辆重量的主要部件。减震器控制弹跳但不会显著影响行驶高度。"
  },
  {
    id: 47,
    q: "What type of rear suspension uses two lateral links and a trailing arm per side to locate each wheel?",
    options: [
      "A) Solid axle with leaf springs",
      "B) Multi-link independent rear suspension",
      "C) Twist-beam semi-independent suspension",
      "D) MacPherson strut rear suspension"
    ],
    answer: 1,
    explanation: "A multi-link independent rear suspension uses multiple links (typically two lateral and one trailing per side) to precisely control wheel movement and alignment during suspension travel. This design provides superior handling and ride quality compared to solid axle designs.",
    diagram: "",
    terms: ["control_arm", "shock_absorber", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/McPherson_strut.png/400px-McPherson_strut.png",
    youtube: "https://www.youtube.com/watch?v=4bse5dIVRDk",
    youtubeTitle: "Suspension System Components Overview",
    qChinese: "哪种后悬架类型使用每侧两个横向连杆和一个拖臂来定位每个车轮？",
    optionsChinese: [
      "A) 带钢板弹簧的整体桥",
      "B) 多连杆独立后悬架",
      "C) 扭力梁半独立悬架",
      "D) 麦弗逊支柱后悬架"
    ],
    explanationChinese: "多连杆独立后悬架使用多个连杆（通常每侧两个横向连杆和一个拖臂）在悬架行程中精确控制车轮运动和定位。与整体桥设计相比，这种设计提供更好的操控性和乘坐舒适性。"
  },
  {
    id: 48,
    q: "A strut assembly is being inspected. Fluid is weeping from the upper shaft seal area of the strut body. What is the correct action?",
    options: [
      "A) Wipe the fluid off and recheck after 50 miles of driving",
      "B) Replace the strut assembly",
      "C) Top off the strut fluid and monitor",
      "D) Tighten the strut shaft nut to stop the leak"
    ],
    answer: 1,
    explanation: "A strut or shock absorber that is leaking fluid from the shaft seal area has lost its ability to properly dampen suspension movement. Struts are sealed, non-serviceable units. The strut assembly must be replaced, as there is no way to repair or refill the unit.",
    diagram: "",
    terms: ["strut", "shock_absorber"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/McPherson_strut.png/400px-McPherson_strut.png",
    youtube: "https://www.youtube.com/watch?v=4bse5dIVRDk",
    youtubeTitle: "How Struts and Shocks Work",
    qChinese: "正在检查一个支柱总成。支柱体上部轴封处有液体渗出。正确的处理方式是什么？",
    optionsChinese: [
      "A) 擦掉液体，行驶50英里后再次检查",
      "B) 更换支柱总成",
      "C) 补充支柱液体并监控",
      "D) 拧紧支柱杆螺母以止漏"
    ],
    explanationChinese: "从轴封处漏液的支柱或减震器已经失去正常抑制悬架运动的能力。支柱是密封的、不可维修的单元。支柱总成必须更换，因为无法修复或重新加注。"
  },
  {
    id: 49,
    q: "Which suspension component in a MacPherson strut system acts as the upper steering pivot?",
    options: [
      "A) The upper control arm",
      "B) The upper strut mount and bearing",
      "C) The upper ball joint",
      "D) The steering knuckle"
    ],
    answer: 1,
    explanation: "In a MacPherson strut suspension, the upper strut mount and bearing assembly serves as the upper steering pivot point. The strut is attached to the steering knuckle, and the upper mount connects to the body. This eliminates the need for an upper control arm and ball joint.",
    diagram: "",
    terms: ["strut", "ball_joint", "rack_and_pinion"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/McPherson_strut.png/400px-McPherson_strut.png",
    youtube: "https://www.youtube.com/watch?v=4bse5dIVRDk",
    youtubeTitle: "How Struts and Shocks Work",
    qChinese: "麦弗逊支柱悬架系统中，哪个部件充当上转向枢轴？",
    optionsChinese: [
      "A) 上控制臂",
      "B) 上支撑座和轴承",
      "C) 上球头",
      "D) 转向节"
    ],
    explanationChinese: "在麦弗逊支柱悬架中，上支撑座和轴承总成作为上转向枢轴点。支柱连接到转向节，上支撑座连接到车身。这消除了对上控制臂和上球头的需求。"
  },
  {
    id: 50,
    q: "A vehicle has a popping noise from the front suspension during slow turns in a parking lot. What is the MOST likely cause?",
    options: [
      "A) A worn wheel bearing",
      "B) A binding upper strut mount bearing",
      "C) A worn inner tie rod end",
      "D) A loose brake caliper bracket"
    ],
    answer: 1,
    explanation: "A popping or creaking noise during slow turns, especially in a parking lot, is a classic symptom of a binding or dry upper strut mount bearing. The strut must rotate during steering, and a failing bearing creates popping or snapping sounds as it resists rotation.",
    diagram: "",
    terms: ["strut", "rack_and_pinion", "tie_rod"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/McPherson_strut.png/400px-McPherson_strut.png",
    youtube: "https://www.youtube.com/watch?v=4bse5dIVRDk",
    youtubeTitle: "How Struts and Shocks Work",
    qChinese: "车辆在停车场低速转弯时前悬架发出啪啪声。最可能的原因是什么？",
    optionsChinese: [
      "A) 车轮轴承磨损",
      "B) 上支撑座轴承卡滞",
      "C) 内横拉杆球头磨损",
      "D) 刹车卡钳支架松动"
    ],
    explanationChinese: "低速转弯时发出啪啪声或吱吱声，尤其是在停车场中，是上支撑座轴承卡滞或干燥的典型症状。支柱在转向时必须旋转，失效的轴承会在抵抗旋转时产生啪啪声或爆裂声。"
  },
  {
    id: 51,
    q: "What is the purpose of a rear trailing arm in an independent rear suspension?",
    options: [
      "A) To control rear wheel camber during cornering",
      "B) To locate the rear wheel fore and aft and resist braking forces",
      "C) To provide ride height adjustment",
      "D) To reduce rear body roll during turns"
    ],
    answer: 1,
    explanation: "The trailing arm in a rear independent suspension locates the wheel in the fore-and-aft direction relative to the vehicle body. It resists forces that try to push the wheel forward or rearward, particularly braking forces, while allowing vertical suspension travel.",
    diagram: "",
    terms: ["control_arm", "shock_absorber", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/McPherson_strut.png/400px-McPherson_strut.png",
    youtube: "https://www.youtube.com/watch?v=4bse5dIVRDk",
    youtubeTitle: "Suspension Control Arms Explained",
    qChinese: "独立后悬架中后拖臂的作用是什么？",
    optionsChinese: [
      "A) 控制转弯时后轮外倾角",
      "B) 在前后方向定位后轮并抵抗制动力",
      "C) 提供行驶高度调节",
      "D) 减少转弯时后部车身侧倾"
    ],
    explanationChinese: "后独立悬架中的拖臂在前后方向上相对于车身定位车轮。它抵抗试图将车轮向前或向后推动的力，特别是制动力，同时允许垂直悬架行程。"
  },
  {
    id: 52,
    q: "Technician A says a loaded strut assembly includes the coil spring and upper mount, making installation easier. Technician B says a loaded strut eliminates the need for a spring compressor. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both are correct. A loaded (quick) strut assembly comes preassembled with a new strut, coil spring, upper mount, and bearing. Because it arrives fully assembled, no spring compressor is needed. The old assembly is removed as a unit and the new one bolts directly in.",
    diagram: "",
    terms: ["strut", "shock_absorber", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/McPherson_strut.png/400px-McPherson_strut.png",
    youtube: "https://www.youtube.com/watch?v=4bse5dIVRDk",
    youtubeTitle: "How Struts and Shocks Work",
    qChinese: "技师A说预装支柱总成包括螺旋弹簧和上支撑座，使安装更简便。技师B说预装支柱无需使用弹簧压缩器。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都是正确的。预装（快装）支柱总成预先组装了新支柱、螺旋弹簧、上支撑座和轴承。由于出厂时已完全组装，无需弹簧压缩器。拆下旧总成后直接装上新总成即可。"
  },
  {
    id: 53,
    q: "A vehicle with a solid rear axle and coil springs has a lateral pull during acceleration. What component should be inspected?",
    options: [
      "A) The rear coil springs",
      "B) The rear track bar (Panhard bar) and bushings",
      "C) The rear shock absorbers",
      "D) The rear differential fluid level"
    ],
    answer: 1,
    explanation: "The track bar (Panhard bar) locates the solid rear axle laterally under the vehicle. Worn bushings or a bent track bar allows the axle to shift sideways under acceleration, causing a lateral pull. Coil springs and shocks do not control lateral axle position.",
    diagram: "",
    terms: ["differential", "sway_bar", "control_arm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/McPherson_strut.png/400px-McPherson_strut.png",
    youtube: "https://www.youtube.com/watch?v=4bse5dIVRDk",
    youtubeTitle: "Suspension System Components Overview",
    qChinese: "一辆配备整体后桥和螺旋弹簧的车辆在加速时有横向偏移。应检查哪个部件？",
    optionsChinese: [
      "A) 后螺旋弹簧",
      "B) 后横向稳定杆（潘哈德杆）及衬套",
      "C) 后减震器",
      "D) 后差速器油位"
    ],
    explanationChinese: "横向稳定杆（潘哈德杆）将整体后桥横向定位在车辆下方。磨损的衬套或弯曲的横向杆允许车桥在加速时横向移动，导致横向偏移。螺旋弹簧和减震器不控制车桥的横向位置。"
  },
  {
    id: 54,
    q: "What happens to ride quality if the wrong rate coil springs are installed on a vehicle (springs that are too stiff)?",
    options: [
      "A) The ride becomes softer and the vehicle sways more",
      "B) The ride becomes harsh and the vehicle transmits more road shock to the cabin",
      "C) The vehicle ride height decreases",
      "D) The shock absorbers wear out faster"
    ],
    answer: 1,
    explanation: "Installing springs with a rate that is too stiff results in a harsh, rough ride. The stiffer springs resist compression more, transmitting more road shock directly to the vehicle body and occupants. The correct spring rate balances load support with ride comfort.",
    diagram: "",
    terms: ["strut", "shock_absorber"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/McPherson_strut.png/400px-McPherson_strut.png",
    youtube: "https://www.youtube.com/watch?v=4bse5dIVRDk",
    youtubeTitle: "Suspension System Components Overview",
    qChinese: "如果在车辆上安装了刚度过高的螺旋弹簧，乘坐舒适性会怎样？",
    optionsChinese: [
      "A) 乘坐变得更柔软，车辆摇摆更大",
      "B) 乘坐变得生硬，车辆向座舱传递更多路面冲击",
      "C) 车辆行驶高度降低",
      "D) 减震器磨损更快"
    ],
    explanationChinese: "安装刚度过高的弹簧会导致生硬粗糙的乘坐感受。较硬的弹簧更加抵抗压缩，将更多的路面冲击直接传递给车身和乘员。正确的弹簧刚度需要在承载能力和乘坐舒适性之间取得平衡。"
  },
  {
    id: 55,
    q: "A vehicle has excessive body roll when cornering. The shock absorbers and springs are in good condition. What is the MOST likely cause?",
    options: [
      "A) Worn steering gear mounting bushings",
      "B) Worn or disconnected stabilizer bar components",
      "C) Excessive caster angle",
      "D) Worn wheel bearings"
    ],
    answer: 1,
    explanation: "The stabilizer bar is the primary component that resists body roll during cornering. If the stabilizer bar links, bushings, or the bar itself are worn, damaged, or disconnected, the vehicle will exhibit excessive body roll even if the springs and shocks are functional.",
    diagram: "",
    terms: ["sway_bar", "shock_absorber", "control_arm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/McPherson_strut.png/400px-McPherson_strut.png",
    youtube: "https://www.youtube.com/watch?v=4bse5dIVRDk",
    youtubeTitle: "Sway Bar and End Links Explained",
    qChinese: "车辆转弯时车身侧倾过大。减震器和弹簧状况良好。最可能的原因是什么？",
    optionsChinese: [
      "A) 转向器安装衬套磨损",
      "B) 稳定杆部件磨损或断开",
      "C) 主销后倾角过大",
      "D) 车轮轴承磨损"
    ],
    explanationChinese: "稳定杆是抵抗转弯时车身侧倾的主要部件。如果稳定杆连杆、衬套或稳定杆本身磨损、损坏或断开，即使弹簧和减震器功能正常，车辆也会出现过大的车身侧倾。"
  },
  {
    id: 56,
    q: "What is the primary difference between a gas-charged shock absorber and a standard hydraulic shock absorber?",
    options: [
      "A) Gas-charged shocks use nitrogen to prevent fluid foaming and improve response",
      "B) Gas-charged shocks are lighter weight",
      "C) Gas-charged shocks do not contain any hydraulic fluid",
      "D) Gas-charged shocks have a longer service life warranty"
    ],
    answer: 0,
    explanation: "Gas-charged shock absorbers contain pressurized nitrogen gas in addition to hydraulic fluid. The gas pressure prevents the fluid from foaming (aerating) during rapid compression and extension cycles, resulting in more consistent damping performance, especially on rough roads.",
    diagram: "",
    terms: ["shock_absorber", "strut"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/McPherson_strut.png/400px-McPherson_strut.png",
    youtube: "https://www.youtube.com/watch?v=4bse5dIVRDk",
    youtubeTitle: "How Struts and Shocks Work",
    qChinese: "充气式减震器与标准液压减震器的主要区别是什么？",
    optionsChinese: [
      "A) 充气式减震器使用氮气防止液体起泡并改善响应",
      "B) 充气式减震器重量更轻",
      "C) 充气式减震器不含任何液压液",
      "D) 充气式减震器有更长的保修期"
    ],
    explanationChinese: "充气式减震器除了液压液外还含有加压氮气。气体压力防止液体在快速压缩和伸展循环中起泡（混入空气），从而提供更一致的阻尼性能，尤其在颠簸路面上效果更好。"
  },
  {
    id: 57,
    q: "A vehicle's rear suspension has a torsion beam (twist beam) axle. What advantage does this design offer?",
    options: [
      "A) It provides fully independent rear wheel movement",
      "B) It is a simple, cost-effective, space-saving semi-independent design",
      "C) It allows for rear wheel steering capability",
      "D) It eliminates the need for rear shock absorbers"
    ],
    answer: 1,
    explanation: "A torsion beam (twist beam) rear suspension is a semi-independent design that is simple, lightweight, cost-effective, and compact. The beam twists slightly to allow limited independent wheel movement while taking up less trunk space than a fully independent setup.",
    diagram: "",
    terms: ["shock_absorber", "control_arm", "sway_bar"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/McPherson_strut.png/400px-McPherson_strut.png",
    youtube: "https://www.youtube.com/watch?v=4bse5dIVRDk",
    youtubeTitle: "Suspension System Components Overview",
    qChinese: "车辆后悬架采用扭力梁（扭转梁）桥。这种设计有什么优势？",
    optionsChinese: [
      "A) 提供完全独立的后轮运动",
      "B) 结构简单、经济高效、节省空间的半独立设计",
      "C) 允许后轮转向功能",
      "D) 消除对后减震器的需求"
    ],
    explanationChinese: "扭力梁（扭转梁）后悬架是一种半独立设计，结构简单、重量轻、经济高效且紧凑。横梁可以轻微扭转以允许有限的独立车轮运动，同时比全独立悬架占用更少的行李箱空间。"
  },
  {
    id: 58,
    q: "Technician A says lower ball joints on a strut suspension are typically non-load-carrying follower joints. Technician B says load-carrying ball joints wear faster than follower joints. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both are correct. In a MacPherson strut suspension, the strut carries the vehicle weight, so the lower ball joint is a non-load-carrying follower joint that allows the knuckle to pivot. Load-carrying ball joints support vehicle weight and experience more stress, causing faster wear.",
    diagram: "",
    terms: ["ball_joint", "strut", "control_arm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ball_joint.jpg/640px-Ball_joint.jpg",
    youtube: "https://www.youtube.com/watch?v=T2mwJOsRk5c",
    youtubeTitle: "Ball Joint Inspection and Replacement",
    qChinese: "技师A说支柱悬架上的下球头通常是非承载型随动球头。技师B说承载型球头比随动型球头磨损更快。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都是正确的。在麦弗逊支柱悬架中，支柱承载车辆重量，因此下球头是非承载型随动球头，仅允许转向节枢转。承载型球头支撑车辆重量，承受更大应力，因此磨损更快。"
  },
  {
    id: 59,
    q: "A cradle (subframe) mount is found to be cracked during suspension service. What is the recommended repair?",
    options: [
      "A) Weld the crack and reinforce with a plate",
      "B) Replace the cradle mount or subframe as necessary",
      "C) Apply epoxy adhesive to seal the crack",
      "D) Monitor the crack and replace at next service"
    ],
    answer: 1,
    explanation: "A cracked cradle or subframe mount is a safety concern because it supports critical suspension and steering components. The mount or subframe must be replaced, not welded or repaired with adhesive. Welding can alter the metal properties and may not restore structural integrity.",
    diagram: "",
    terms: ["control_arm", "engine_mount", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/McPherson_strut.png/400px-McPherson_strut.png",
    youtube: "https://www.youtube.com/watch?v=4bse5dIVRDk",
    youtubeTitle: "Suspension System Components Overview",
    qChinese: "在悬架维修中发现副车架（子框架）支撑座开裂。推荐的维修方式是什么？",
    optionsChinese: [
      "A) 焊接裂缝并用钢板加固",
      "B) 根据需要更换副车架支撑座或子框架",
      "C) 使用环氧胶粘剂密封裂缝",
      "D) 监控裂缝，在下次保养时更换"
    ],
    explanationChinese: "开裂的副车架或子框架支撑座是安全隐患，因为它支撑着关键的悬架和转向部件。支撑座或子框架必须更换，不能焊接或用胶粘剂修复。焊接可能改变金属性能，无法恢复结构完整性。"
  },
  {
    id: 60,
    q: "During a front suspension inspection, the lower control arm can be moved up and down at the outer end with a pry bar, causing a clunking noise. What is the MOST likely cause?",
    options: [
      "A) A worn lower control arm bushing",
      "B) A worn lower ball joint",
      "C) A worn strut mount bearing",
      "D) A loose wheel bearing"
    ],
    answer: 1,
    explanation: "If the lower control arm can be moved up and down at the outer pivot point with accompanying clunking, the lower ball joint is worn. The ball joint connects the control arm to the steering knuckle. Excessive vertical play in this joint indicates it needs replacement.",
    diagram: "",
    terms: ["ball_joint", "control_arm", "strut"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ball_joint.jpg/640px-Ball_joint.jpg",
    youtube: "https://www.youtube.com/watch?v=T2mwJOsRk5c",
    youtubeTitle: "Ball Joint Inspection and Replacement",
    qChinese: "在前悬架检查中，用撬棍可以上下移动下控制臂外端，并伴有咔哒声。最可能的原因是什么？",
    optionsChinese: [
      "A) 下控制臂衬套磨损",
      "B) 下球头磨损",
      "C) 支柱上支撑座轴承磨损",
      "D) 车轮轴承松动"
    ],
    explanationChinese: "如果下控制臂可以在外侧枢轴点上下移动并伴有咔哒声，说明下球头已经磨损。球头连接控制臂和转向节。该球头处过大的垂直间隙表明需要更换。"
  },

  // ===== WHEEL ALIGNMENT (Questions 61-88) =====
  {
    id: 61,
    q: "A vehicle has excessive wear on the inside edge of both front tires. What alignment angle is MOST likely out of specification?",
    options: [
      "A) Excessive positive camber",
      "B) Excessive negative camber",
      "C) Excessive positive caster",
      "D) Excessive toe-out"
    ],
    answer: 1,
    explanation: "Excessive negative camber tilts the top of the tire inward, causing the inside edge of the tire to bear more load and wear faster. When both front tires show inside edge wear, the negative camber on both sides is likely out of specification.",
    diagram: "",
    terms: ["camber", "wheel_alignment", "tire_rotation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Wheel Alignment Explained - Camber, Caster, Toe",
    qChinese: "车辆两个前轮胎内侧边缘磨损严重。哪个定位角度最可能超出规格？",
    optionsChinese: [
      "A) 正外倾角过大",
      "B) 负外倾角过大",
      "C) 正主销后倾角过大",
      "D) 前束角过大"
    ],
    explanationChinese: "过大的负外倾角使轮胎顶部向内倾斜，导致轮胎内侧边缘承受更多载荷而磨损更快。当两个前轮胎都显示内侧边缘磨损时，两侧的负外倾角很可能超出规格。"
  },
  {
    id: 62,
    q: "What is thrust angle?",
    options: [
      "A) The angle of the steering axis relative to vertical",
      "B) The direction the rear axle points compared to the vehicle centerline",
      "C) The difference in camber between the left and right wheels",
      "D) The total toe measurement of the front wheels"
    ],
    answer: 1,
    explanation: "Thrust angle is the angle between the vehicle's geometric centerline and the direction the rear wheels point (thrust line). If the rear wheels do not point straight ahead, the thrust angle is off, which can cause the vehicle to crab or dog-track down the road.",
    diagram: "",
    terms: ["wheel_alignment", "toe", "camber"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Wheel Alignment Explained - Camber, Caster, Toe",
    qChinese: "什么是推力角？",
    optionsChinese: [
      "A) 转向轴相对于垂直线的角度",
      "B) 后桥指向方向与车辆中心线之间的夹角",
      "C) 左右车轮外倾角之差",
      "D) 前轮总前束值"
    ],
    explanationChinese: "推力角是车辆几何中心线与后轮指向方向（推力线）之间的夹角。如果后轮不指向正前方，推力角就会偏差，这会导致车辆在行驶时出现蟹行或斜行现象。"
  },
  {
    id: 63,
    q: "Technician A says toe is the most common cause of tire wear related to alignment. Technician B says toe is typically the last angle adjusted during a wheel alignment. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both are correct. Incorrect toe is the most common alignment-related cause of tire wear because even small toe errors create a scrubbing action on the tread. Toe is adjusted last during an alignment because adjusting camber and caster can change the toe setting.",
    diagram: "",
    terms: ["toe", "wheel_alignment", "camber", "caster"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Wheel Alignment Explained - Camber, Caster, Toe",
    qChinese: "技师A说前束是与定位相关的最常见轮胎磨损原因。技师B说前束通常是四轮定位中最后调整的角度。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都是正确的。不正确的前束是与定位相关的最常见轮胎磨损原因，因为即使微小的前束误差也会在胎面产生擦刮作用。前束最后调整是因为调整外倾角和主销后倾角会改变前束设定。"
  },
  {
    id: 64,
    q: "A vehicle pulls to the left during straight-ahead driving. The alignment shows the left caster is 1.5 degrees less than the right. What is the effect of this caster difference?",
    options: [
      "A) The vehicle pulls toward the side with less caster",
      "B) The vehicle pulls toward the side with more caster",
      "C) Caster difference does not affect vehicle pull",
      "D) The vehicle drifts toward whichever side has more positive camber"
    ],
    answer: 0,
    explanation: "A vehicle pulls toward the side with less positive caster. Caster creates a self-centering force; the side with less caster has less centering force, so the vehicle drifts or pulls toward that side. Cross-caster should typically be within 0.5 degrees or less.",
    diagram: "",
    terms: ["caster", "wheel_alignment", "camber"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Wheel Alignment Explained - Camber, Caster, Toe",
    qChinese: "车辆在直线行驶时向左偏移。定位显示左侧主销后倾角比右侧小1.5度。这种后倾角差异有什么影响？",
    optionsChinese: [
      "A) 车辆向主销后倾角较小的一侧偏移",
      "B) 车辆向主销后倾角较大的一侧偏移",
      "C) 主销后倾角差异不影响车辆偏移",
      "D) 车辆向正外倾角较大的一侧漂移"
    ],
    explanationChinese: "车辆会向正主销后倾角较小的一侧偏移。主销后倾角产生自动回正力；后倾角较小的一侧回正力较弱，因此车辆向该侧漂移或偏移。左右后倾角差通常应在0.5度以内。"
  },
  {
    id: 65,
    q: "What is the included angle in wheel alignment?",
    options: [
      "A) The sum of camber and SAI (steering axis inclination)",
      "B) The total toe of both front wheels",
      "C) The difference between left and right caster",
      "D) The angle between the thrust line and geometric centerline"
    ],
    answer: 0,
    explanation: "The included angle is the sum of the camber angle and the steering axis inclination (SAI) on the same side. It is a diagnostic angle used to identify bent suspension components. A bent spindle or knuckle will change the included angle from specifications.",
    diagram: "",
    terms: ["camber", "wheel_alignment", "strut"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Wheel Alignment Explained - Camber, Caster, Toe",
    qChinese: "四轮定位中的包容角是什么？",
    optionsChinese: [
      "A) 外倾角和转向轴倾斜角（SAI）之和",
      "B) 两个前轮的总前束",
      "C) 左右主销后倾角之差",
      "D) 推力线与几何中心线之间的夹角"
    ],
    explanationChinese: "包容角是同侧外倾角和转向轴倾斜角（SAI）之和。它是一个诊断角度，用于识别弯曲的悬架部件。弯曲的转向节或轮轴会使包容角偏离规格。"
  },
  {
    id: 66,
    q: "A vehicle has a feathered wear pattern on the front tires. What alignment condition causes this?",
    options: [
      "A) Excessive camber",
      "B) Incorrect toe setting",
      "C) Insufficient caster",
      "D) Excessive positive caster"
    ],
    answer: 1,
    explanation: "A feathered tire wear pattern, where the tread ribs are smooth on one side and sharp on the other, is caused by an incorrect toe setting. Toe-in causes the sharp edge to point outward, while toe-out causes it to point inward as the tires scrub sideways.",
    diagram: "",
    terms: ["toe", "wheel_alignment", "tire_rotation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "车辆前轮胎出现羽毛状磨损花纹。哪种定位状况导致了这种情况？",
    optionsChinese: [
      "A) 外倾角过大",
      "B) 前束设定不正确",
      "C) 主销后倾角不足",
      "D) 正主销后倾角过大"
    ],
    explanationChinese: "羽毛状轮胎磨损花纹，即胎面肋条一侧光滑另一侧锋利，是由不正确的前束设定引起的。内束使锋利边缘朝外，外束使锋利边缘朝内，这是轮胎侧向擦刮的结果。"
  },
  {
    id: 67,
    q: "Technician A says SAI (steering axis inclination) is adjustable on most vehicles. Technician B says SAI is a diagnostic angle used to detect bent components. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 1,
    explanation: "Technician B is correct. SAI is not adjustable because it is determined by the angle of the steering knuckle, strut, and suspension mounting points built into the vehicle. It is used as a diagnostic angle; if SAI is incorrect, a component such as the knuckle or strut is bent.",
    diagram: "",
    terms: ["wheel_alignment", "strut", "camber"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Wheel Alignment Explained - Camber, Caster, Toe",
    qChinese: "技师A说大多数车辆上的SAI（转向轴倾斜角）是可调的。技师B说SAI是用于检测弯曲部件的诊断角度。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "技师B是正确的。SAI不可调，因为它由转向节、支柱和悬架安装点的角度决定，这些是车辆制造时内置的。它被用作诊断角度；如果SAI不正确，则转向节或支柱等部件已弯曲。"
  },
  {
    id: 68,
    q: "What is the correct order for adjusting alignment angles during a four-wheel alignment?",
    options: [
      "A) Front toe, rear toe, camber, caster",
      "B) Rear camber and toe first, then front caster, camber, and toe",
      "C) Front caster and camber first, then rear, then front toe",
      "D) Toe first on all four wheels, then camber and caster"
    ],
    answer: 1,
    explanation: "The correct alignment adjustment order is rear angles first (camber and toe), then front caster, front camber, and finally front toe. Rear alignment sets the thrust angle, and caster/camber adjustments affect toe, so toe must always be the last adjustment made.",
    diagram: "",
    terms: ["wheel_alignment", "caster", "camber", "toe"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Wheel Alignment Explained - Camber, Caster, Toe",
    qChinese: "四轮定位中调整定位角度的正确顺序是什么？",
    optionsChinese: [
      "A) 前轮前束、后轮前束、外倾角、主销后倾角",
      "B) 先调后轮外倾角和前束，再调前轮主销后倾角、外倾角和前束",
      "C) 先调前轮主销后倾角和外倾角，再调后轮，最后调前轮前束",
      "D) 先调四个车轮的前束，再调外倾角和主销后倾角"
    ],
    explanationChinese: "正确的定位调整顺序是先调后轮角度（外倾角和前束），然后调前轮主销后倾角、前轮外倾角，最后调前轮前束。后轮定位确定推力角，而主销后倾角/外倾角调整会影响前束，所以前束必须最后调整。"
  },
  {
    id: 69,
    q: "A vehicle has excessive toe-out on the front wheels. What type of tire wear will this cause?",
    options: [
      "A) Wear on the outside edge of both front tires",
      "B) Wear on the inside edge of both front tires",
      "C) Feathered wear with sharp edges pointing inward on the tread blocks",
      "D) Cupped or scalloped wear across the tread"
    ],
    answer: 2,
    explanation: "Excessive toe-out causes the front of each tire to point outward. This creates a feathered wear pattern on the tread where the blocks have smooth edges on the outside and sharp edges pointing inward (toward the vehicle center) due to the scrubbing action.",
    diagram: "",
    terms: ["toe", "wheel_alignment", "tire_rotation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "前轮外束过大会导致哪种轮胎磨损？",
    optionsChinese: [
      "A) 两个前轮胎外侧边缘磨损",
      "B) 两个前轮胎内侧边缘磨损",
      "C) 胎面花纹块锋利边缘朝内的羽毛状磨损",
      "D) 胎面上的杯状或扇贝状磨损"
    ],
    explanationChinese: "过大的外束使每个轮胎前端向外偏。这在胎面上产生羽毛状磨损花纹，花纹块外侧边缘光滑，锋利边缘朝内（朝向车辆中心），这是由擦刮作用造成的。"
  },
  {
    id: 70,
    q: "What alignment angle is MOST affected by ride height?",
    options: [
      "A) Toe",
      "B) Camber",
      "C) Caster",
      "D) Both camber and caster"
    ],
    answer: 3,
    explanation: "Both camber and caster are significantly affected by ride height changes. As the vehicle sags, the geometry of the control arms changes, altering both camber and caster angles. This is why ride height must be checked and corrected before performing a wheel alignment.",
    diagram: "",
    terms: ["camber", "caster", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Wheel Alignment Explained - Camber, Caster, Toe",
    qChinese: "哪个定位角度受行驶高度影响最大？",
    optionsChinese: [
      "A) 前束",
      "B) 外倾角",
      "C) 主销后倾角",
      "D) 外倾角和主销后倾角都受影响"
    ],
    explanationChinese: "外倾角和主销后倾角都受行驶高度变化的显著影响。当车辆下沉时，控制臂的几何形状发生变化，改变外倾角和主销后倾角。这就是为什么在进行四轮定位之前必须检查和修正行驶高度。"
  },
  {
    id: 71,
    q: "A vehicle has a steering wheel that is off-center to the right during straight-ahead driving, but the vehicle tracks straight. What is the MOST likely cause?",
    options: [
      "A) The rear thrust angle is incorrect",
      "B) The front toe was adjusted without centering the steering wheel",
      "C) The left front camber is excessive",
      "D) The right front caster is too high"
    ],
    answer: 1,
    explanation: "An off-center steering wheel with straight tracking indicates the front toe was set correctly in total but the individual toe adjustments were not equal, or the steering wheel was not centered before adjusting. The toe must be split evenly side to side with the wheel centered.",
    diagram: "",
    terms: ["toe", "wheel_alignment", "rack_and_pinion"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Wheel Alignment Explained - Camber, Caster, Toe",
    qChinese: "车辆直线行驶时方向盘偏向右侧，但车辆行驶轨迹是直的。最可能的原因是什么？",
    optionsChinese: [
      "A) 后推力角不正确",
      "B) 调整前束时未将方向盘居中",
      "C) 左前外倾角过大",
      "D) 右前主销后倾角过大"
    ],
    explanationChinese: "方向盘偏心但车辆直行表明前束总值设定正确，但左右各侧的前束分配不均匀，或者调整前调整前未将方向盘居中。前束必须在方向盘居中的情况下两侧均匀分配。"
  },
  {
    id: 72,
    q: "Which alignment angle provides directional stability and steering wheel returnability?",
    options: [
      "A) Camber",
      "B) Caster",
      "C) Toe",
      "D) SAI"
    ],
    answer: 1,
    explanation: "Caster provides directional stability and helps the steering wheel return to center after a turn. Positive caster tilts the steering axis rearward at the top, creating a trailing effect similar to a shopping cart caster. More positive caster increases the self-centering force.",
    diagram: "",
    terms: ["caster", "wheel_alignment", "rack_and_pinion"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Wheel Alignment Explained - Camber, Caster, Toe",
    qChinese: "哪个定位角度提供方向稳定性和方向盘回正性？",
    optionsChinese: [
      "A) 外倾角",
      "B) 主销后倾角",
      "C) 前束",
      "D) 转向轴倾斜角（SAI）"
    ],
    explanationChinese: "主销后倾角提供方向稳定性并帮助方向盘在转弯后回正。正主销后倾角使转向轴顶部向后倾斜，产生类似购物车脚轮的拖拽效果。更大的正主销后倾角增加自动回正力。"
  },
  {
    id: 73,
    q: "Technician A says a setback condition exists when one front wheel is farther back than the other. Technician B says setback can be caused by a collision or bent cradle. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both are correct. Setback is the condition where one front wheel is positioned farther rearward than the other relative to the vehicle centerline. It is commonly caused by collision damage, a bent cradle or subframe, or bent suspension components that shift the wheel position.",
    diagram: "",
    terms: ["wheel_alignment", "caster", "control_arm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Wheel Alignment Explained - Camber, Caster, Toe",
    qChinese: "技师A说当一个前轮比另一个更靠后时，存在后退量。技师B说后退量可能由碰撞事故或弯曲的副车架引起。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都是正确的。后退量是指一个前轮相对于车辆中心线比另一个位置更靠后的状态。它通常由碰撞损坏、弯曲的副车架或子框架，或改变车轮位置的弯曲悬架部件引起。"
  },
  {
    id: 74,
    q: "A vehicle has wear on the outside edge of the right front tire only. Which alignment condition is the MOST likely cause?",
    options: [
      "A) Excessive negative camber on the right side",
      "B) Excessive positive camber on the right side",
      "C) Excessive toe-in on the right side",
      "D) Excessive positive caster on the right side"
    ],
    answer: 1,
    explanation: "Excessive positive camber on the right side tilts the top of the right wheel outward, placing more load on the outside edge of the tire tread. This one-sided edge wear on a single tire points to a camber problem on that specific wheel.",
    diagram: "",
    terms: ["camber", "wheel_alignment", "tire_rotation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "车辆仅右前轮胎外侧边缘磨损。最可能的定位状况是什么？",
    optionsChinese: [
      "A) 右侧负外倾角过大",
      "B) 右侧正外倾角过大",
      "C) 右侧内束过大",
      "D) 右侧正主销后倾角过大"
    ],
    explanationChinese: "右侧正外倾角过大使右轮顶部向外倾斜，将更多载荷施加在轮胎胎面的外侧边缘。单个轮胎的单侧边缘磨损指向该特定车轮的外倾角问题。"
  },
  {
    id: 75,
    q: "When measuring ride height, what reference points are typically used?",
    options: [
      "A) The top of the fender to the ground",
      "B) Specific suspension or body points as specified by the manufacturer",
      "C) The center of the wheel hub to the fender lip",
      "D) The bumper height from the ground"
    ],
    answer: 1,
    explanation: "Ride height must be measured at specific manufacturer-designated reference points, which vary by vehicle. These typically involve measuring from a specific point on the body or frame to a corresponding suspension component or the ground, following exact factory procedures.",
    diagram: "",
    terms: ["wheel_alignment", "strut", "control_arm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Wheel Alignment Explained - Camber, Caster, Toe",
    qChinese: "测量行驶高度时，通常使用哪些参考点？",
    optionsChinese: [
      "A) 翼子板顶部到地面",
      "B) 制造商指定的特定悬架或车身参考点",
      "C) 车轮中心到翼子板唇边",
      "D) 保险杠离地高度"
    ],
    explanationChinese: "行驶高度必须在制造商指定的特定参考点处测量，这些参考点因车辆而异。通常涉及从车身或车架上的特定点到相应悬架部件或地面的测量，需要遵循精确的出厂步骤。"
  },
  {
    id: 76,
    q: "A vehicle dog-tracks (the rear end is offset to one side). What alignment measurement will confirm this condition?",
    options: [
      "A) Front toe",
      "B) Rear camber",
      "C) Thrust angle",
      "D) Front caster"
    ],
    answer: 2,
    explanation: "Dog-tracking occurs when the rear axle or rear wheels are not aligned with the vehicle centerline, creating a non-zero thrust angle. The rear of the vehicle follows a different path than the front. Measuring the thrust angle confirms and quantifies this condition.",
    diagram: "",
    terms: ["wheel_alignment", "toe", "camber"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Wheel Alignment Explained - Camber, Caster, Toe",
    qChinese: "车辆出现蟹行（后部偏向一侧）。哪个定位测量值可以确认此状况？",
    optionsChinese: [
      "A) 前束",
      "B) 后轮外倾角",
      "C) 推力角",
      "D) 前轮主销后倾角"
    ],
    explanationChinese: "蟹行发生在后桥或后轮未与车辆中心线对齐，产生非零推力角时。车辆后部跟随与前部不同的路径行驶。测量推力角可以确认并量化此状况。"
  },
  {
    id: 77,
    q: "What is the purpose of the turning angle (Ackermann angle) in a steering system?",
    options: [
      "A) To allow the inner wheel to turn at a sharper angle than the outer wheel during a turn",
      "B) To keep both wheels at the same angle during a turn",
      "C) To provide self-centering action after a turn",
      "D) To reduce tire scrub during straight-ahead driving"
    ],
    answer: 0,
    explanation: "The Ackermann angle or toe-out on turns allows the inner wheel to turn at a greater angle than the outer wheel during cornering. Since the inner wheel follows a tighter radius, it must turn more sharply to prevent tire scrubbing and maintain proper geometry.",
    diagram: "",
    terms: ["toe", "rack_and_pinion", "tie_rod"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Wheel Alignment Explained - Camber, Caster, Toe",
    qChinese: "转向系统中转弯角度（阿克曼角）的作用是什么？",
    optionsChinese: [
      "A) 允许内侧车轮在转弯时以比外侧车轮更大的角度转向",
      "B) 使两个车轮在转弯时保持相同角度",
      "C) 转弯后提供自动回正作用",
      "D) 减少直线行驶时的轮胎擦刮"
    ],
    explanationChinese: "阿克曼角或转弯时外束允许内侧车轮在转弯时以比外侧车轮更大的角度转向。由于内侧车轮沿着更小的半径行驶，它必须转动更多角度以防止轮胎擦刮并保持正确的几何关系。"
  },
  {
    id: 78,
    q: "A vehicle with a non-adjustable rear suspension has the rear thrust angle out of specification. What should be inspected?",
    options: [
      "A) The front alignment angles",
      "B) The rear suspension for bent or damaged components",
      "C) The steering gear mounting",
      "D) The front wheel bearings"
    ],
    answer: 1,
    explanation: "If the thrust angle is out of specification on a non-adjustable rear suspension, bent or damaged rear suspension components are the likely cause. Bent trailing arms, control arms, or a shifted rear axle from collision damage will create a thrust angle error.",
    diagram: "",
    terms: ["wheel_alignment", "control_arm", "toe"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Wheel Alignment Explained - Camber, Caster, Toe",
    qChinese: "一辆后悬架不可调的车辆，后推力角超出规格。应检查什么？",
    optionsChinese: [
      "A) 前轮定位角度",
      "B) 后悬架是否有弯曲或损坏的部件",
      "C) 转向器安装",
      "D) 前轮轴承"
    ],
    explanationChinese: "如果不可调后悬架的推力角超出规格，弯曲或损坏的后悬架部件是最可能的原因。弯曲的拖臂、控制臂或因碰撞事故移位的后桥都会产生推力角误差。"
  },
  {
    id: 79,
    q: "Technician A says camber is the inward or outward tilt of the wheel viewed from the front of the vehicle. Technician B says positive camber means the top of the wheel tilts outward. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both are correct. Camber is the angle of the wheel as viewed from the front, measured as the tilt from true vertical. Positive camber means the top of the wheel tilts outward from the vehicle centerline, while negative camber tilts the top inward.",
    diagram: "",
    terms: ["camber", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Wheel Alignment Explained - Camber, Caster, Toe",
    qChinese: "技师A说外倾角是从车辆前方观察时车轮向内或向外倾斜的角度。技师B说正外倾角表示车轮顶部向外倾斜。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都是正确的。外倾角是从前方观察时车轮相对于垂直线的倾斜角度。正外倾角指车轮顶部从车辆中心线向外倾斜，负外倾角则是车轮顶部向内倾斜。"
  },
  {
    id: 80,
    q: "A vehicle with excessive toe-in will exhibit which type of tire wear?",
    options: [
      "A) Wear on the inside edges of both front tires",
      "B) Wear on the outside edges of both front tires",
      "C) Feathered wear with sharp edges pointing outward on tread blocks",
      "D) Center tread wear on both front tires"
    ],
    answer: 2,
    explanation: "Excessive toe-in causes the front of each tire to point inward. This creates a feathered wear pattern where the tread blocks develop sharp edges pointing outward (away from the vehicle center). The scrubbing action from toe-in dragging the outer edge is the cause.",
    diagram: "",
    terms: ["toe", "wheel_alignment", "tire_rotation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "内束过大的车辆会出现哪种轮胎磨损？",
    optionsChinese: [
      "A) 两个前轮胎内侧边缘磨损",
      "B) 两个前轮胎外侧边缘磨损",
      "C) 胎面花纹块锋利边缘朝外的羽毛状磨损",
      "D) 两个前轮胎中心胎面磨损"
    ],
    explanationChinese: "过大的内束使每个轮胎前端向内偏。这产生羽毛状磨损花纹，胎面花纹块形成锋利边缘朝外（远离车辆中心）。内束拖拽外侧边缘的擦刮作用是原因所在。"
  },
  {
    id: 81,
    q: "What tool is used to perform a four-wheel alignment?",
    options: [
      "A) A wheel balancer",
      "B) A computerized alignment machine with wheel sensors",
      "C) A dial indicator and turning plates",
      "D) A tape measure and camber gauge only"
    ],
    answer: 1,
    explanation: "A modern four-wheel alignment requires a computerized alignment machine with sensors mounted on each wheel. The machine measures all alignment angles simultaneously using cameras or laser technology and compares readings to manufacturer specifications for accurate adjustment.",
    diagram: "",
    terms: ["wheel_alignment", "camber", "caster", "toe"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Wheel Alignment Explained - Camber, Caster, Toe",
    qChinese: "使用什么工具进行四轮定位？",
    optionsChinese: [
      "A) 轮胎平衡机",
      "B) 带车轮传感器的电脑定位仪",
      "C) 百分表和转向盘",
      "D) 仅卷尺和外倾角量规"
    ],
    explanationChinese: "现代四轮定位需要使用在每个车轮上安装传感器的电脑定位仪。该设备使用摄像头或激光技术同时测量所有定位角度，并与制造商规格进行比较以实现精确调整。"
  },
  {
    id: 82,
    q: "What effect does a memory steer condition have on vehicle handling?",
    options: [
      "A) The vehicle pulls in the direction of the last turn made",
      "B) The vehicle always pulls to the right",
      "C) The steering wheel vibrates at highway speed",
      "D) The steering becomes heavy at low speeds"
    ],
    answer: 0,
    explanation: "Memory steer causes the vehicle to pull in the direction of the last turn. This is typically caused by binding in the upper strut mount, steering column bearing, or ball joint. The binding prevents the steering from fully returning to its neutral position after turning.",
    diagram: "",
    terms: ["strut", "ball_joint", "rack_and_pinion"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/McPherson_strut.png/400px-McPherson_strut.png",
    youtube: "https://www.youtube.com/watch?v=4bse5dIVRDk",
    youtubeTitle: "How Struts and Shocks Work",
    qChinese: "记忆转向症状对车辆操控有什么影响？",
    optionsChinese: [
      "A) 车辆向上一次转弯的方向偏移",
      "B) 车辆始终向右偏移",
      "C) 高速公路速度下方向盘振动",
      "D) 低速时转向变沉"
    ],
    explanationChinese: "记忆转向导致车辆向上一次转弯的方向偏移。这通常由上支撑座轴承、转向柱轴承或球头卡滞引起。卡滞阻止转向在转弯后完全回到中立位置。"
  },
  {
    id: 83,
    q: "Before performing a wheel alignment, all of the following should be checked EXCEPT:",
    options: [
      "A) Tire pressures and tire condition",
      "B) Suspension and steering component wear",
      "C) Engine oil level and condition",
      "D) Ride height and vehicle loading"
    ],
    answer: 2,
    explanation: "Engine oil level and condition have no effect on wheel alignment. Before performing an alignment, tire pressures, tire condition, suspension and steering component wear, ride height, and vehicle loading must be checked and corrected to ensure accurate alignment measurements.",
    diagram: "",
    terms: ["wheel_alignment", "tire_pressure", "multipoint_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Wheel Alignment Explained - Camber, Caster, Toe",
    qChinese: "在进行四轮定位之前，应检查以下所有项目，除了：",
    optionsChinese: [
      "A) 胎压和轮胎状况",
      "B) 悬架和转向部件磨损",
      "C) 发动机机油液位和状况",
      "D) 行驶高度和车辆载荷"
    ],
    explanationChinese: "发动机机油液位和状况对四轮定位没有影响。在进行定位前，必须检查并纠正胎压、轮胎状况、悬架和转向部件磨损、行驶高度和车辆载荷，以确保定位测量的准确性。"
  },
  {
    id: 84,
    q: "A vehicle has a pull to the right that changes to a pull to the left when the front tires are swapped side to side. What is the cause?",
    options: [
      "A) The wheel alignment is out of specification",
      "B) A tire with a conicity or ply steer condition",
      "C) A worn right front ball joint",
      "D) Unequal front brake pressure"
    ],
    answer: 1,
    explanation: "When a pull reverses direction after swapping tires side to side, the cause is a tire with a conicity or ply steer condition. The tire has an internal belt or ply defect that generates a lateral force. The pull follows the defective tire to whichever side it is mounted on.",
    diagram: "",
    terms: ["tire_rotation", "wheel_alignment", "tire_pressure"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "车辆向右偏移，将前轮胎左右互换后变为向左偏移。原因是什么？",
    optionsChinese: [
      "A) 四轮定位超出规格",
      "B) 轮胎存在锥度或帘布层偏移问题",
      "C) 右前球头磨损",
      "D) 前刹车压力不均匀"
    ],
    explanationChinese: "当轮胎左右互换后偏移方向反转时，原因是轮胎存在锥度或帘布层偏移问题。轮胎内部皮带层或帘布层有缺陷，产生横向力。偏移随缺陷轮胎移至哪一侧而改变方向。"
  },
  {
    id: 85,
    q: "On a vehicle with adjustable caster, how is caster typically adjusted?",
    options: [
      "A) By turning an eccentric cam bolt on the control arm",
      "B) By adding or removing shims behind the upper control arm mounting points",
      "C) By rotating the strut tower cam bolts",
      "D) All of the above, depending on vehicle design"
    ],
    answer: 3,
    explanation: "Caster adjustment methods vary by vehicle design. Eccentric cam bolts on control arms, shims behind upper control arm mounts, and strut tower cam bolts are all used depending on the manufacturer and suspension type. Always follow the specific vehicle service procedures.",
    diagram: "",
    terms: ["caster", "wheel_alignment", "control_arm", "strut"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Wheel Alignment Explained - Camber, Caster, Toe",
    qChinese: "在可调主销后倾角的车辆上，主销后倾角通常如何调整？",
    optionsChinese: [
      "A) 通过转动控制臂上的偏心凸轮螺栓",
      "B) 通过在上控制臂安装点后方增减垫片",
      "C) 通过旋转支柱塔凸轮螺栓",
      "D) 以上所有方式，取决于车辆设计"
    ],
    explanationChinese: "主销后倾角的调整方法因车辆设计而异。控制臂上的偏心凸轮螺栓、上控制臂安装点后方的垫片以及支柱塔凸轮螺栓都根据制造商和悬架类型使用。始终遵循特定车辆的维修程序。"
  },
  {
    id: 86,
    q: "What is the relationship between KPI (King Pin Inclination) and SAI (Steering Axis Inclination)?",
    options: [
      "A) KPI applies to solid axle suspensions; SAI applies to independent suspensions, but both measure the same angle",
      "B) KPI is twice the value of SAI",
      "C) They are completely unrelated angles",
      "D) KPI measures vertical tilt; SAI measures horizontal tilt"
    ],
    answer: 0,
    explanation: "KPI and SAI both measure the inward tilt of the steering axis viewed from the front. KPI specifically refers to the kingpin angle on solid axle or kingpin-type suspensions, while SAI refers to the same angle on independent suspensions using ball joints. They describe the same geometric concept.",
    diagram: "",
    terms: ["wheel_alignment", "ball_joint", "camber"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Wheel Alignment Explained - Camber, Caster, Toe",
    qChinese: "KPI（主销倾斜角）和SAI（转向轴倾斜角）之间是什么关系？",
    optionsChinese: [
      "A) KPI适用于整体桥悬架；SAI适用于独立悬架，但两者测量相同的角度",
      "B) KPI是SAI的两倍",
      "C) 它们是完全不相关的角度",
      "D) KPI测量垂直倾斜；SAI测量水平倾斜"
    ],
    explanationChinese: "KPI和SAI都是从前方观察时测量转向轴的内倾角度。KPI特指整体桥或主销型悬架上的主销角度，而SAI指使用球头的独立悬架上的相同角度。它们描述的是相同的几何概念。"
  },
  {
    id: 87,
    q: "A customer complains of rapid inside edge wear on the rear tires of a front-wheel-drive vehicle. What should be checked?",
    options: [
      "A) The rear wheel camber and toe settings",
      "B) The front wheel alignment only",
      "C) The rear differential fluid",
      "D) The tire rotation schedule"
    ],
    answer: 0,
    explanation: "Rapid inside edge wear on rear tires indicates excessive negative camber or toe misalignment at the rear. On a front-wheel-drive vehicle with independent rear suspension, the rear camber and toe should be checked and adjusted to manufacturer specifications.",
    diagram: "",
    terms: ["camber", "toe", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "客户抱怨前轮驱动车辆后轮胎内侧边缘快速磨损。应检查什么？",
    optionsChinese: [
      "A) 后轮外倾角和前束设定",
      "B) 仅前轮定位",
      "C) 后差速器油",
      "D) 轮胎换位周期"
    ],
    explanationChinese: "后轮胎内侧边缘快速磨损表明后轮存在过大的负外倾角或前束偏差。对于配备独立后悬架的前轮驱动车辆，应检查后轮外倾角和前束并调整至制造商规格。"
  },
  {
    id: 88,
    q: "Technician A says a worn cradle (subframe) bushing can affect wheel alignment. Technician B says a shifted cradle can cause a pull and uneven tire wear. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both are correct. A worn or collapsed cradle bushing allows the subframe to shift, changing the position of the lower control arm mounting points and altering camber, caster, and toe angles. A shifted cradle commonly causes a pull and accelerated tire wear.",
    diagram: "",
    terms: ["wheel_alignment", "control_arm", "camber", "caster"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Wheel Alignment Explained - Camber, Caster, Toe",
    qChinese: "技师A说磨损的副车架（子框架）衬套会影响四轮定位。技师B说移位的副车架会导致偏移和轮胎不均匀磨损。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都是正确的。磨损或塌陷的副车架衬套允许子框架移位，改变下控制臂安装点的位置，从而改变外倾角、主销后倾角和前束角度。移位的副车架通常导致偏移和轮胎加速磨损。"
  },

  // ===== WHEEL AND TIRE SERVICE (Questions 89-100) =====
  {
    id: 89,
    q: "A TPMS warning light illuminates on the dashboard. The tire pressures are checked and found to be correct. What is the MOST likely cause?",
    options: [
      "A) The TPMS sensors need to be reset or relearned after tire service",
      "B) A TPMS sensor battery has died or a sensor is faulty",
      "C) The tire pressure gauge is inaccurate",
      "D) The TPMS light is a maintenance reminder for tire rotation"
    ],
    answer: 1,
    explanation: "If tire pressures are correct but the TPMS light is on, a TPMS sensor has likely failed or its internal battery has died. Direct TPMS sensors have batteries that last 5-10 years. A dead battery means the sensor cannot transmit pressure data to the receiver module.",
    diagram: "",
    terms: ["tire_pressure", "battery", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "仪表板上TPMS警告灯亮起。检查后发现胎压正常。最可能的原因是什么？",
    optionsChinese: [
      "A) TPMS传感器需要在轮胎服务后重新设置或学习",
      "B) TPMS传感器电池耗尽或传感器故障",
      "C) 胎压表不准确",
      "D) TPMS灯是轮胎换位的保养提醒"
    ],
    explanationChinese: "如果胎压正常但TPMS灯亮起，很可能是TPMS传感器故障或其内部电池耗尽。直接式TPMS传感器的电池寿命为5-10年。电池耗尽意味着传感器无法向接收模块发送压力数据。"
  },
  {
    id: 90,
    q: "What is the recommended tire rotation pattern for a vehicle with non-directional tires of the same size on all four wheels?",
    options: [
      "A) Front to rear on the same side only",
      "B) Forward cross pattern (rear tires cross to opposite front positions)",
      "C) X-pattern (every tire crosses to the opposite corner)",
      "D) Any of the above patterns may be acceptable"
    ],
    answer: 3,
    explanation: "For vehicles with non-directional, same-size tires, several rotation patterns are acceptable including the forward cross, rearward cross, and X-pattern. The Tire and Rim Association and tire manufacturers provide recommended patterns. Consistency is more important than the specific pattern.",
    diagram: "",
    terms: ["tire_rotation", "tire_pressure", "multipoint_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "四轮尺寸相同且使用非方向性轮胎的车辆，推荐的轮胎换位模式是什么？",
    optionsChinese: [
      "A) 仅同侧前后互换",
      "B) 前交叉模式（后轮胎交叉到对侧前方位置）",
      "C) X模式（每个轮胎交叉到对角位置）",
      "D) 以上任何模式都可接受"
    ],
    explanationChinese: "对于使用非方向性、相同尺寸轮胎的车辆，多种换位模式都可接受，包括前交叉、后交叉和X模式。轮胎与轮辋协会和轮胎制造商提供推荐的模式。保持一致性比具体模式更重要。"
  },
  {
    id: 91,
    q: "Technician A says a tire with a speed rating of H is rated for up to 130 mph. Technician B says replacement tires should have a speed rating equal to or higher than the original equipment specification. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both are correct. An H-rated tire is certified for sustained speeds up to 130 mph. Replacement tires should always meet or exceed the OE speed rating to maintain safe handling characteristics and ensure the tire can withstand the forces the vehicle is capable of generating.",
    diagram: "",
    terms: ["tire_pressure", "tire_rotation", "multipoint_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "技师A说速度等级为H的轮胎额定最高速度为130英里/小时。技师B说更换轮胎的速度等级应等于或高于原厂规格。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都是正确的。H级轮胎经认证可在最高130英里/小时的速度下持续行驶。更换轮胎时应始终达到或超过原厂速度等级，以保持安全的操控特性，确保轮胎能承受车辆所能产生的力。"
  },
  {
    id: 92,
    q: "During tire mounting, what is the purpose of applying tire bead lubricant?",
    options: [
      "A) To seal small punctures in the bead area",
      "B) To help the tire bead slide over the rim flange and seat properly",
      "C) To reduce road noise from the tire",
      "D) To prevent corrosion between the tire and rim"
    ],
    answer: 1,
    explanation: "Tire bead lubricant reduces friction between the tire bead and the rim flange during mounting, allowing the bead to slide into position and seat properly without damage. It also aids in achieving an even bead seat, which is essential for proper tire balance and sealing.",
    diagram: "",
    terms: ["tire_rotation", "tire_pressure", "lug_nut_torque"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "安装轮胎时涂抹胎唇润滑剂的目的是什么？",
    optionsChinese: [
      "A) 密封胎唇区域的小穿孔",
      "B) 帮助胎唇滑过轮辋边缘并正确就位",
      "C) 减少轮胎的路面噪音",
      "D) 防止轮胎与轮辋之间的腐蚀"
    ],
    explanationChinese: "胎唇润滑剂减少安装过程中胎唇与轮辋边缘之间的摩擦，使胎唇能够滑入位置并正确就位而不会损坏。它还有助于实现均匀的胎唇就位，这对轮胎平衡和密封至关重要。"
  },
  {
    id: 93,
    q: "A tire has a sidewall marking of 225/55R17 97V. What does the number 97 represent?",
    options: [
      "A) The maximum tire pressure in PSI",
      "B) The load index rating of the tire",
      "C) The treadwear rating",
      "D) The tire's UTQG temperature rating"
    ],
    answer: 1,
    explanation: "The number 97 in the tire size designation is the load index, which indicates the maximum weight the tire can support when properly inflated. A load index of 97 corresponds to 1,609 pounds per tire. This rating must meet or exceed the vehicle manufacturer's specification.",
    diagram: "",
    terms: ["tire_pressure", "tire_rotation", "multipoint_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "轮胎侧壁标记为225/55R17 97V。数字97代表什么？",
    optionsChinese: [
      "A) 最大胎压（PSI）",
      "B) 轮胎的载荷指数等级",
      "C) 胎面磨耗等级",
      "D) 轮胎的UTQG温度等级"
    ],
    explanationChinese: "轮胎尺寸标识中的数字97是载荷指数，表示轮胎在正确充气时可以承受的最大重量。载荷指数97对应每个轮胎1,609磅。该等级必须达到或超过车辆制造商的规格。"
  },
  {
    id: 94,
    q: "What type of wheel imbalance causes a side-to-side wobble or shimmy?",
    options: [
      "A) Static imbalance",
      "B) Dynamic imbalance",
      "C) Radial runout",
      "D) Lateral runout"
    ],
    answer: 1,
    explanation: "Dynamic imbalance occurs when the weight distribution is uneven across the width of the tire and wheel assembly. This creates a wobbling force that causes a side-to-side shimmy felt in the steering wheel. Dynamic balance requires weight correction on both the inner and outer planes.",
    diagram: "",
    terms: ["tire_rotation", "wheel_alignment", "tire_pressure"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "哪种车轮不平衡会导致左右摆动或摆振？",
    optionsChinese: [
      "A) 静态不平衡",
      "B) 动态不平衡",
      "C) 径向跳动",
      "D) 侧向跳动"
    ],
    explanationChinese: "动态不平衡发生在轮胎和车轮总成宽度方向上重量分布不均匀时。这产生摆动力，导致方向盘感觉到左右摆振。动态平衡需要在内外两个平面上进行配重校正。"
  },
  {
    id: 95,
    q: "A tire is worn more in the center of the tread than on the edges. What is the MOST likely cause?",
    options: [
      "A) Underinflation",
      "B) Overinflation",
      "C) Excessive negative camber",
      "D) Excessive toe-out"
    ],
    answer: 1,
    explanation: "Center tread wear is caused by overinflation. When a tire is inflated above the recommended pressure, the center of the tread bulges outward and bears more of the load, causing the center to wear faster than the shoulders. Always inflate to the vehicle placard specification.",
    diagram: "",
    terms: ["tire_pressure", "tire_rotation", "multipoint_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "轮胎胎面中心磨损比边缘严重。最可能的原因是什么？",
    optionsChinese: [
      "A) 胎压不足",
      "B) 胎压过高",
      "C) 负外倾角过大",
      "D) 外束过大"
    ],
    explanationChinese: "胎面中心磨损是由胎压过高引起的。当轮胎充气超过推荐压力时，胎面中心向外凸起承受更多载荷，导致中心磨损快于胎肩。始终按照车辆铭牌规格充气。"
  },
  {
    id: 96,
    q: "All of the following are types of TPMS systems EXCEPT:",
    options: [
      "A) Direct TPMS using pressure sensors in each wheel",
      "B) Indirect TPMS using ABS wheel speed sensors",
      "C) Hybrid TPMS using both direct and indirect methods",
      "D) Passive TPMS using tire temperature sensors only"
    ],
    answer: 3,
    explanation: "There is no passive TPMS system that uses only temperature sensors. Direct TPMS uses pressure sensors in each wheel. Indirect TPMS monitors ABS wheel speed variations to detect underinflation. Some systems use a hybrid approach combining both methods for improved accuracy.",
    diagram: "",
    terms: ["tire_pressure", "abs", "speed_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "以下所有都是TPMS系统类型，除了：",
    optionsChinese: [
      "A) 使用每个车轮压力传感器的直接式TPMS",
      "B) 使用ABS车轮速度传感器的间接式TPMS",
      "C) 同时使用直接和间接方式的混合式TPMS",
      "D) 仅使用轮胎温度传感器的被动式TPMS"
    ],
    explanationChinese: "不存在仅使用温度传感器的被动式TPMS系统。直接式TPMS在每个车轮中使用压力传感器。间接式TPMS监测ABS车轮速度变化来检测轮胎气压不足。有些系统采用混合方式结合两种方法以提高精度。"
  },
  {
    id: 97,
    q: "What is the maximum acceptable lateral runout for most passenger car wheels?",
    options: [
      "A) 0.005 inch (0.13 mm)",
      "B) 0.030 inch (0.76 mm)",
      "C) 0.045 inch (1.14 mm)",
      "D) 0.125 inch (3.18 mm)"
    ],
    answer: 2,
    explanation: "Maximum acceptable lateral runout for most passenger car wheels is approximately 0.045 inch (1.14 mm). Excessive lateral runout causes a side-to-side wobble that can create a shimmy in the steering wheel. Wheels exceeding this specification should be replaced.",
    diagram: "",
    terms: ["tire_rotation", "wheel_alignment", "lug_nut_torque"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "大多数乘用车车轮的最大可接受侧向跳动量是多少？",
    optionsChinese: [
      "A) 0.005英寸（0.13毫米）",
      "B) 0.030英寸（0.76毫米）",
      "C) 0.045英寸（1.14毫米）",
      "D) 0.125英寸（3.18毫米）"
    ],
    explanationChinese: "大多数乘用车车轮的最大可接受侧向跳动量约为0.045英寸（1.14毫米）。过大的侧向跳动会导致左右摆动，在方向盘上产生摆振感。超出此规格的车轮应予以更换。"
  },
  {
    id: 98,
    q: "Technician A says directional tires must be mounted with the rotation arrow pointing in the direction of forward wheel rotation. Technician B says directional tires can only be rotated front to rear on the same side. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both are correct. Directional tires have a tread pattern designed to rotate in one specific direction for optimal performance. They must be mounted with the arrow matching forward rotation. During rotation, they can only move front to rear on the same side to maintain correct direction.",
    diagram: "",
    terms: ["tire_rotation", "tire_pressure", "lug_nut_torque"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "技师A说方向性轮胎必须按照旋转箭头指示的前进方向安装。技师B说方向性轮胎只能在同侧前后互换。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都是正确的。方向性轮胎的胎面花纹设计为沿特定方向旋转以获得最佳性能。安装时箭头必须与前进旋转方向一致。换位时只能在同侧前后互换以保持正确的旋转方向。"
  },
  {
    id: 99,
    q: "What should be done when installing a new TPMS sensor during tire service?",
    options: [
      "A) Use the original valve core and nut from the old sensor",
      "B) Install a new valve core, seal, and nut from the TPMS service kit",
      "C) Apply thread sealant to the sensor threads",
      "D) Torque the sensor nut to 25 ft-lbs"
    ],
    answer: 1,
    explanation: "When installing a new TPMS sensor, a new valve core, grommet or seal, and retaining nut from the TPMS service kit must be used. Reusing old seals or hardware risks air leaks and sensor damage. The nut should be torqued to the manufacturer-specified value, typically 6-9 Nm.",
    diagram: "",
    terms: ["tire_pressure", "tire_rotation", "lug_nut_torque"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "在轮胎服务中安装新的TPMS传感器时应怎么做？",
    optionsChinese: [
      "A) 使用旧传感器的原始气门芯和螺母",
      "B) 从TPMS服务套件中安装新的气门芯、密封件和螺母",
      "C) 在传感器螺纹上涂抹螺纹密封剂",
      "D) 将传感器螺母拧紧至25英尺磅"
    ],
    explanationChinese: "安装新TPMS传感器时，必须使用TPMS服务套件中的新气门芯、垫圈或密封件和固定螺母。重复使用旧密封件或硬件有漏气和传感器损坏的风险。螺母应按制造商规定的扭矩值拧紧，通常为6-9牛米。"
  },
  {
    id: 100,
    q: "A customer complains of a vibration that is felt in the steering wheel at 60-70 mph but goes away above and below that speed range. The tires have been recently balanced. What should be checked NEXT?",
    options: [
      "A) The wheel balance using a road force balancer",
      "B) The engine mounts",
      "C) The exhaust system hangers",
      "D) The transmission mount"
    ],
    answer: 0,
    explanation: "A speed-specific steering vibration that persists after standard balancing should be rechecked using a road force balancer. This machine detects tire stiffness variations and excessive radial force that a standard balancer cannot measure. It can also match-mount tires to minimize vibration.",
    diagram: "",
    terms: ["tire_rotation", "tire_pressure", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "客户抱怨在60-70英里/小时时方向盘振动，但超出或低于该速度范围时振动消失。轮胎最近已做过动平衡。接下来应检查什么？",
    optionsChinese: [
      "A) 使用路面力平衡机重新检查车轮平衡",
      "B) 发动机支撑座",
      "C) 排气系统吊架",
      "D) 变速箱支撑座"
    ],
    explanationChinese: "在标准平衡后仍然存在的与特定速度相关的方向盘振动，应使用路面力平衡机重新检查。该设备能检测标准平衡机无法测量的轮胎刚度变化和过大的径向力。它还可以进行匹配安装以最大限度地减少振动。"
  }
];
