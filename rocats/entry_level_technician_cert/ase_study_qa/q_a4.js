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
  },
  // ===== STEERING SYSTEMS II (Questions 101-125) =====
  {
    id: 101,
    q: "A vehicle equipped with electronic power steering (EPS) has a warning light on the dash and no power assist. What should be checked FIRST?",
    options: [
      "A) The power steering fluid level",
      "B) The EPS control module and related DTCs",
      "C) The serpentine belt tension",
      "D) The steering gear for internal leaks"
    ],
    answer: 1,
    explanation: "Electronic power steering uses an electric motor rather than a hydraulic pump, so there is no fluid or belt to check. The first step is to scan for diagnostic trouble codes in the EPS control module, which will indicate the root cause of the assist loss.",
    diagram: "",
    terms: ["power_steering_pump", "rack_and_pinion", "steering_gear"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rack_and_pinion_animation.gif/400px-Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=BnEE0ORchHM",
    youtubeTitle: "Electronic Power Steering Explained",
    qChinese: "一辆配备电子助力转向(EPS)的车辆仪表盘上警告灯亮起且没有助力。应首先检查什么？",
    optionsChinese: [
      "A) 助力转向液面",
      "B) EPS控制模块及相关故障码",
      "C) 蛇形皮带张力",
      "D) 转向器是否有内部泄漏"
    ],
    explanationChinese: "电子助力转向使用电动马达而非液压泵，因此无需检查液面或皮带。第一步是扫描EPS控制模块中的故障码，以确定助力丧失的根本原因。"
  },
  {
    id: 102,
    q: "Which component in a recirculating ball steering system converts rotary motion to linear motion?",
    options: [
      "A) The Pitman arm",
      "B) The worm gear and sector shaft",
      "C) The idler arm",
      "D) The center link"
    ],
    answer: 1,
    explanation: "The worm gear and sector shaft inside the steering gearbox convert the rotary input from the steering column into linear output motion. The sector shaft moves the Pitman arm, which then transfers the motion to the steering linkage and ultimately turns the wheels.",
    diagram: "",
    terms: ["steering_gear", "pitman_arm", "idler_arm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Recirculating_ball_steering_gear.svg/500px-Recirculating_ball_steering_gear.svg.png",
    youtube: "https://www.youtube.com/watch?v=YDl1UxCrEhM",
    youtubeTitle: "Power Steering System Explained",
    qChinese: "循环球式转向系统中哪个部件将旋转运动转换为直线运动？",
    optionsChinese: [
      "A) 摇臂",
      "B) 蜗杆和扇形轴",
      "C) 惰臂",
      "D) 中间连杆"
    ],
    explanationChinese: "转向器内的蜗杆和扇形轴将来自转向柱的旋转输入转换为直线输出运动。扇形轴带动摇臂，然后将运动传递到转向连杆机构，最终使车轮转向。"
  },
  {
    id: 103,
    q: "A technician notices the power steering fluid is foamy and light brown in color. What does this indicate?",
    options: [
      "A) The fluid is contaminated with water",
      "B) The fluid has air mixed in (aerated)",
      "C) The fluid is overheated and oxidized",
      "D) The wrong type of fluid was installed"
    ],
    answer: 1,
    explanation: "Foamy, light-colored power steering fluid indicates aeration, meaning air has entered the system. Common causes include a low fluid level, a leaking suction hose, or a loose fitting. The air mixes with fluid and creates foam, reducing hydraulic assist and causing pump noise.",
    diagram: "",
    terms: ["power_steering_fluid", "power_steering_pump"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rack_and_pinion_animation.gif/400px-Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=YDl1UxCrEhM",
    youtubeTitle: "Power Steering System Explained",
    qChinese: "技师注意到助力转向液呈泡沫状且颜色为浅棕色。这表明什么？",
    optionsChinese: [
      "A) 液体被水污染",
      "B) 液体中混入了空气（充气）",
      "C) 液体过热并氧化",
      "D) 使用了错误类型的液体"
    ],
    explanationChinese: "泡沫状、颜色偏浅的助力转向液表明系统中混入了空气。常见原因包括液位偏低、吸油管泄漏或接头松动。空气与液体混合产生泡沫，降低液压助力并引起泵噪音。"
  },
  {
    id: 104,
    q: "What is the purpose of the inner tie rod boot on a rack and pinion steering system?",
    options: [
      "A) To lubricate the tie rod end",
      "B) To protect the rack seals from dirt and moisture",
      "C) To act as a bump stop for the rack",
      "D) To dampen steering vibrations"
    ],
    answer: 1,
    explanation: "The inner tie rod boot (bellows boot) seals the opening where the inner tie rod exits the steering rack housing. It keeps dirt, water, and road debris from entering and damaging the internal rack seals. A torn boot allows contamination that leads to premature rack failure.",
    diagram: "",
    terms: ["tie_rod", "rack_and_pinion"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rack_and_pinion_animation.gif/400px-Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=dL0mMEjwjMI",
    youtubeTitle: "Tie Rod End Replacement Guide",
    qChinese: "齿条齿轮转向系统上内拉杆防尘套的作用是什么？",
    optionsChinese: [
      "A) 润滑拉杆端部",
      "B) 保护齿条密封件免受灰尘和水分侵害",
      "C) 作为齿条的限位缓冲",
      "D) 抑制转向振动"
    ],
    explanationChinese: "内拉杆防尘套（波纹套）密封内拉杆从转向齿条壳体伸出的开口。它防止灰尘、水和路面碎屑进入并损坏齿条内部密封件。破裂的防尘套会导致污染物进入，造成齿条过早损坏。"
  },
  {
    id: 105,
    q: "A vehicle pulls to the left during braking but tracks straight while driving. Technician A says a worn left outer tie rod could be the cause. Technician B says a caliper issue is more likely. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 1,
    explanation: "A pull only during braking points to a brake issue rather than a steering or alignment concern. A seized or sticking caliper, restricted brake hose, or contaminated pad on one side causes uneven braking force. A worn tie rod would cause a constant pull or wandering.",
    diagram: "",
    terms: ["tie_rod", "rack_and_pinion", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rack_and_pinion_animation.gif/400px-Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=dL0mMEjwjMI",
    youtubeTitle: "Tie Rod End Replacement Guide",
    qChinese: "一辆车在制动时向左跑偏，但正常行驶时直行。技师A说磨损的左侧外拉杆可能是原因。技师B说制动卡钳问题更可能。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "仅在制动时跑偏指向制动问题而非转向或四轮定位问题。一侧卡钳卡滞、制动软管受限或刹车片污染会导致制动力不均。磨损的拉杆会导致持续跑偏或方向不稳。"
  },
  {
    id: 106,
    q: "What happens when the power steering pressure relief valve opens?",
    options: [
      "A) Fluid is routed back to the reservoir to prevent pump damage",
      "B) Fluid is directed to the steering gear for maximum assist",
      "C) The pump output pressure increases",
      "D) The flow control valve closes"
    ],
    answer: 0,
    explanation: "The pressure relief valve opens when system pressure exceeds a predetermined maximum. It routes high-pressure fluid back to the reservoir or pump inlet to prevent damage to the pump, hoses, and steering gear seals. This occurs when the steering wheel is held at full lock.",
    diagram: "",
    terms: ["power_steering_pump", "power_steering_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rack_and_pinion_animation.gif/400px-Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=YDl1UxCrEhM",
    youtubeTitle: "Power Steering System Explained",
    qChinese: "助力转向压力释放阀打开时会发生什么？",
    optionsChinese: [
      "A) 液体被导回储液罐以防止泵损坏",
      "B) 液体被引导至转向器以获得最大助力",
      "C) 泵的输出压力增加",
      "D) 流量控制阀关闭"
    ],
    explanationChinese: "当系统压力超过预定最大值时，压力释放阀打开。它将高压液体导回储液罐或泵入口，以防止泵、软管和转向器密封件损坏。当方向盘打到头时会发生这种情况。"
  },
  {
    id: 107,
    q: "A steering wheel is not centered after a front-end alignment. Which adjustment corrects this?",
    options: [
      "A) Camber adjustment",
      "B) Caster adjustment",
      "C) Toe adjustment by equal amounts on each tie rod",
      "D) Thrust angle adjustment"
    ],
    answer: 2,
    explanation: "An off-center steering wheel with correct total toe is corrected by adjusting each tie rod equally in opposite directions. This centers the steering wheel without changing the total toe setting. Adjusting only one side would change toe and cause a pull or tire wear.",
    diagram: "",
    terms: ["toe", "tie_rod", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=MXGi6CaKtaY",
    youtubeTitle: "How to Perform a Wheel Alignment",
    qChinese: "前轮定位后方向盘未居中。哪项调整可以纠正这个问题？",
    optionsChinese: [
      "A) 外倾角调整",
      "B) 主销后倾角调整",
      "C) 通过在每个拉杆上等量调整前束",
      "D) 推力角调整"
    ],
    explanationChinese: "在总前束正确的情况下方向盘偏移，通过在两侧拉杆上进行等量反向调整来纠正。这样可以在不改变总前束设定的情况下使方向盘居中。仅调整一侧会改变前束并导致跑偏或轮胎磨损。"
  },
  {
    id: 108,
    q: "What component connects the Pitman arm to the steering knuckle on a parallelogram steering linkage?",
    options: [
      "A) The inner tie rod",
      "B) The center link and outer tie rod",
      "C) The drag link",
      "D) The rack and pinion"
    ],
    answer: 1,
    explanation: "In a parallelogram steering linkage, the Pitman arm connects to the center link (relay rod). The center link connects to the outer tie rods, which attach to the steering knuckles. The idler arm supports the opposite end of the center link from the Pitman arm.",
    diagram: "",
    terms: ["pitman_arm", "idler_arm", "tie_rod", "steering_gear"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Recirculating_ball_steering_gear.svg/500px-Recirculating_ball_steering_gear.svg.png",
    youtube: "https://www.youtube.com/watch?v=YDl1UxCrEhM",
    youtubeTitle: "Power Steering System Explained",
    qChinese: "在平行四边形转向连杆机构中，哪个部件连接摇臂和转向节？",
    optionsChinese: [
      "A) 内拉杆",
      "B) 中间连杆和外拉杆",
      "C) 拖杆",
      "D) 齿条和小齿轮"
    ],
    explanationChinese: "在平行四边形转向连杆机构中，摇臂连接到中间连杆（中继杆）。中间连杆连接到外拉杆，外拉杆连接到转向节。惰臂支撑中间连杆与摇臂相对的另一端。"
  },
  {
    id: 109,
    q: "A technician is replacing a power steering pump. What should be done before starting the engine?",
    options: [
      "A) Fill the reservoir and turn the steering wheel lock to lock several times with the engine off",
      "B) Add fluid only to the minimum mark",
      "C) Start the engine immediately and add fluid as needed",
      "D) Pressurize the system with compressed air"
    ],
    answer: 0,
    explanation: "Before starting the engine, the reservoir should be filled and the steering wheel turned lock to lock with the engine off. This primes the pump and bleeds air from the system. Starting a dry pump can cause instant damage to the pump vanes and cavitation noise.",
    diagram: "",
    terms: ["power_steering_pump", "power_steering_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rack_and_pinion_animation.gif/400px-Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=YDl1UxCrEhM",
    youtubeTitle: "Power Steering System Explained",
    qChinese: "技师正在更换助力转向泵。启动发动机前应该做什么？",
    optionsChinese: [
      "A) 加满储液罐并在发动机关闭状态下将方向盘从一侧打到另一侧转动几次",
      "B) 仅将液面加至最低刻度线",
      "C) 立即启动发动机并根据需要添加液体",
      "D) 用压缩空气对系统加压"
    ],
    explanationChinese: "启动发动机前，应加满储液罐并在发动机关闭状态下将方向盘从一侧打到另一侧转动。这样可以给泵排气并排出系统中的空气。干运转泵会立即损坏泵叶片并产生气蚀噪音。"
  },
  {
    id: 110,
    q: "Excessive play in the steering wheel before the front tires respond is MOST likely caused by:",
    options: [
      "A) Over-inflated tires",
      "B) Worn tie rod ends or steering linkage components",
      "C) Excessive negative camber",
      "D) A bent steering wheel"
    ],
    answer: 1,
    explanation: "Excessive steering wheel play (free play) before the wheels respond indicates wear in the steering linkage. Worn tie rod ends, a loose steering gear adjustment, worn center link sockets, or a worn idler arm all allow the steering wheel to move without transmitting motion to the wheels.",
    diagram: "",
    terms: ["tie_rod", "idler_arm", "pitman_arm", "steering_gear"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Recirculating_ball_steering_gear.svg/500px-Recirculating_ball_steering_gear.svg.png",
    youtube: "https://www.youtube.com/watch?v=dL0mMEjwjMI",
    youtubeTitle: "Tie Rod End Replacement Guide",
    qChinese: "方向盘有过多的游隙才能使前轮响应，最可能的原因是：",
    optionsChinese: [
      "A) 轮胎过度充气",
      "B) 拉杆端部或转向连杆机构部件磨损",
      "C) 过大的负外倾角",
      "D) 方向盘弯曲"
    ],
    explanationChinese: "方向盘在车轮响应之前有过多的游隙（自由间隙）表明转向连杆机构存在磨损。磨损的拉杆端部、转向器调整松动、中间连杆球头磨损或惰臂磨损都会导致方向盘转动而不能将运动传递至车轮。"
  },
  {
    id: 111,
    q: "During a dry park check, a technician finds vertical movement at the outer tie rod end. What does this indicate?",
    options: [
      "A) A worn tie rod end ball stud",
      "B) A worn wheel bearing",
      "C) A worn ball joint",
      "D) A bent spindle"
    ],
    answer: 0,
    explanation: "Vertical movement detected at the outer tie rod end during a dry park check indicates a worn tie rod end ball stud. The ball stud should fit snugly in its socket with no perceptible vertical play. A worn ball joint would show play at the knuckle, not the tie rod.",
    diagram: "",
    terms: ["tie_rod", "ball_joint"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rack_and_pinion_animation.gif/400px-Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=dL0mMEjwjMI",
    youtubeTitle: "Tie Rod End Replacement Guide",
    qChinese: "在原地检查中，技师发现外拉杆端部有上下运动。这表明什么？",
    optionsChinese: [
      "A) 拉杆端部球头磨损",
      "B) 车轮轴承磨损",
      "C) 球头磨损",
      "D) 转向节弯曲"
    ],
    explanationChinese: "在原地检查中，外拉杆端部出现上下运动表明拉杆端部球头磨损。球头应紧密配合在球窝中，没有明显的上下间隙。球头磨损会在转向节处显示间隙，而不是拉杆处。"
  },
  {
    id: 112,
    q: "Which type of power steering fluid should NEVER be mixed with the manufacturer-specified fluid?",
    options: [
      "A) ATF-compatible power steering fluid",
      "B) Synthetic power steering fluid of the same specification",
      "C) Any fluid not meeting the vehicle manufacturer's specification",
      "D) Fluid from the same manufacturer but a different color"
    ],
    answer: 2,
    explanation: "Using fluid that does not meet the vehicle manufacturer's specification can damage seals, cause leaks, and reduce system performance. Some systems require specific synthetic fluids, while others use ATF. Always consult the owner's manual or service information for the correct fluid type.",
    diagram: "",
    terms: ["power_steering_fluid", "power_steering_pump"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rack_and_pinion_animation.gif/400px-Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=YDl1UxCrEhM",
    youtubeTitle: "Power Steering System Explained",
    qChinese: "哪种助力转向液绝对不能与制造商指定的液体混合？",
    optionsChinese: [
      "A) 兼容ATF的助力转向液",
      "B) 相同规格的合成助力转向液",
      "C) 任何不符合车辆制造商规格的液体",
      "D) 来自同一制造商但颜色不同的液体"
    ],
    explanationChinese: "使用不符合车辆制造商规格的液体会损坏密封件、导致泄漏并降低系统性能。某些系统需要特定的合成液体，而其他系统使用ATF。请始终查阅车主手册或维修资料以确认正确的液体类型。"
  },
  {
    id: 113,
    q: "A vehicle with variable-assist power steering loses assist at low speeds but has normal assist at highway speeds. What is the MOST likely cause?",
    options: [
      "A) A faulty vehicle speed sensor signal to the steering module",
      "B) Low power steering fluid",
      "C) A worn power steering pump",
      "D) A restricted return hose"
    ],
    answer: 0,
    explanation: "Variable-assist power steering adjusts assist level based on vehicle speed, providing more assist at low speeds and less at highway speeds. If the speed sensor signal is incorrect, the module may reduce assist at low speeds. Low fluid or a worn pump would affect assist at all speeds.",
    diagram: "",
    terms: ["power_steering_pump", "rack_and_pinion", "steering_gear"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rack_and_pinion_animation.gif/400px-Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=BnEE0ORchHM",
    youtubeTitle: "Electronic Power Steering Explained",
    qChinese: "一辆配备可变助力转向的车辆在低速时失去助力，但在高速公路速度下助力正常。最可能的原因是什么？",
    optionsChinese: [
      "A) 车速传感器信号传送至转向模块故障",
      "B) 助力转向液偏低",
      "C) 助力转向泵磨损",
      "D) 回油管路受限"
    ],
    explanationChinese: "可变助力转向根据车速调整助力大小，低速时提供更多助力，高速时减少助力。如果车速传感器信号不正确，模块可能会在低速时减少助力。液位偏低或泵磨损会影响所有速度下的助力。"
  },
  {
    id: 114,
    q: "What is the correct method to check for worn idler arm bushings?",
    options: [
      "A) Measure steering wheel free play",
      "B) Grasp the center link near the idler arm and push up and down to check for vertical movement",
      "C) Check the toe setting with an alignment machine",
      "D) Listen for noise while turning the steering wheel"
    ],
    answer: 1,
    explanation: "To check the idler arm, grasp the center link near where it attaches to the idler arm and push up and down. Excessive vertical movement beyond manufacturer specifications indicates worn idler arm bushings. This is a standard parallelogram linkage inspection procedure.",
    diagram: "",
    terms: ["idler_arm", "pitman_arm", "tie_rod"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Recirculating_ball_steering_gear.svg/500px-Recirculating_ball_steering_gear.svg.png",
    youtube: "https://www.youtube.com/watch?v=YDl1UxCrEhM",
    youtubeTitle: "Power Steering System Explained",
    qChinese: "检查惰臂衬套磨损的正确方法是什么？",
    optionsChinese: [
      "A) 测量方向盘自由间隙",
      "B) 抓住惰臂附近的中间连杆上下推动检查垂直运动",
      "C) 使用四轮定位仪检查前束设定",
      "D) 转动方向盘时听是否有噪音"
    ],
    explanationChinese: "检查惰臂时，抓住中间连杆靠近惰臂连接处上下推动。超出制造商规格的过大垂直运动表明惰臂衬套磨损。这是标准的平行四边形连杆机构检查程序。"
  },
  {
    id: 115,
    q: "A clunking noise is heard when turning the steering wheel from left to right while the vehicle is stationary. What is the MOST likely cause?",
    options: [
      "A) Worn strut mounts",
      "B) Loose or worn steering gear mounting bolts or coupling",
      "C) Low tire pressure",
      "D) Worn engine mounts"
    ],
    answer: 1,
    explanation: "A clunking noise when reversing steering direction while stationary typically indicates looseness in the steering system. A loose steering gear, worn coupling, or loose mounting bolts allow movement and create a clunk. Strut mount noise is more common over bumps than during stationary steering.",
    diagram: "",
    terms: ["steering_gear", "rack_and_pinion"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rack_and_pinion_animation.gif/400px-Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=YDl1UxCrEhM",
    youtubeTitle: "Power Steering System Explained",
    qChinese: "车辆静止时将方向盘从左打到右时听到咔嗒声。最可能的原因是什么？",
    optionsChinese: [
      "A) 减震器顶部支座磨损",
      "B) 转向器安装螺栓松动或联轴器磨损",
      "C) 轮胎气压偏低",
      "D) 发动机支撑座磨损"
    ],
    explanationChinese: "静止时改变转向方向出现咔嗒声通常表明转向系统中存在松动。转向器松动、联轴器磨损或安装螺栓松动会产生间隙并发出咔嗒声。减震器顶部支座噪音更常见于过减速带时而非静止转向时。"
  },
  // ===== SUSPENSION SYSTEMS II (Questions 116-150) =====
  {
    id: 116,
    q: "A MacPherson strut is being replaced. Why must a spring compressor be used during disassembly?",
    options: [
      "A) To prevent damage to the strut body",
      "B) To release stored energy in the coil spring safely",
      "C) To align the spring perch properly",
      "D) To remove the strut bearing"
    ],
    answer: 1,
    explanation: "The coil spring on a MacPherson strut holds tremendous stored energy when compressed. A spring compressor tool must be used to hold the spring compressed so the upper strut nut can be safely removed. Without it, the spring can violently release, causing serious injury or death.",
    diagram: "",
    terms: ["strut", "coil_spring", "shock_absorber"],
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Mcpherson_strut.jpg",
    youtube: "https://www.youtube.com/watch?v=0gUkBWHGfRs",
    youtubeTitle: "MacPherson Strut Replacement",
    qChinese: "正在更换麦弗逊式减震器。为什么拆卸时必须使用弹簧压缩工具？",
    optionsChinese: [
      "A) 防止损坏减震器本体",
      "B) 安全释放螺旋弹簧中储存的能量",
      "C) 正确对齐弹簧座",
      "D) 拆卸减震器轴承"
    ],
    explanationChinese: "麦弗逊减震器上的螺旋弹簧在压缩状态下储存巨大的能量。必须使用弹簧压缩工具将弹簧保持在压缩状态，以便安全地拆卸上部减震器螺母。否则弹簧可能会猛烈弹出，造成严重伤害甚至死亡。"
  },
  {
    id: 117,
    q: "What is the primary function of a shock absorber in the suspension system?",
    options: [
      "A) To support the vehicle's weight",
      "B) To control spring oscillation and dampen road impacts",
      "C) To maintain wheel alignment",
      "D) To connect the control arm to the frame"
    ],
    answer: 1,
    explanation: "The shock absorber's primary function is to dampen or control the oscillation of the springs. It converts kinetic energy to heat energy through hydraulic fluid resistance. Without shocks, the vehicle would continue bouncing after hitting a bump. Shocks do not support vehicle weight; springs do.",
    diagram: "",
    terms: ["shock_absorber", "coil_spring"],
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Mcpherson_strut.jpg",
    youtube: "https://www.youtube.com/watch?v=0gUkBWHGfRs",
    youtubeTitle: "MacPherson Strut Replacement",
    qChinese: "减震器在悬挂系统中的主要功能是什么？",
    optionsChinese: [
      "A) 支撑车辆重量",
      "B) 控制弹簧振荡并缓冲路面冲击",
      "C) 维持车轮定位",
      "D) 将控制臂连接到车架"
    ],
    explanationChinese: "减震器的主要功能是阻尼或控制弹簧的振荡。它通过液压流体阻力将动能转化为热能。没有减震器，车辆在经过颠簸后会持续弹跳。减震器不支撑车辆重量，弹簧才是。"
  },
  {
    id: 118,
    q: "A vehicle bounces excessively after going over a bump. A bounce test shows the vehicle continues to bounce more than two times. What is the MOST likely cause?",
    options: [
      "A) Worn shock absorbers or struts",
      "B) Over-inflated tires",
      "C) Broken sway bar links",
      "D) Worn control arm bushings"
    ],
    answer: 0,
    explanation: "The bounce test is a quick check for worn shocks or struts. Push down firmly on the vehicle corner and release. If it bounces more than one to two times before stopping, the shocks or struts are worn and cannot properly dampen spring oscillation. They should be replaced.",
    diagram: "",
    terms: ["shock_absorber", "strut", "coil_spring"],
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Mcpherson_strut.jpg",
    youtube: "https://www.youtube.com/watch?v=0gUkBWHGfRs",
    youtubeTitle: "MacPherson Strut Replacement",
    qChinese: "车辆过减速带后过度弹跳。弹跳测试显示车辆弹跳超过两次。最可能的原因是什么？",
    optionsChinese: [
      "A) 减震器或支柱磨损",
      "B) 轮胎过度充气",
      "C) 稳定杆连杆断裂",
      "D) 控制臂衬套磨损"
    ],
    explanationChinese: "弹跳测试是快速检查减震器或支柱磨损的方法。在车辆一角用力按下然后释放。如果弹跳超过一到两次才停止，说明减震器或支柱磨损，无法正确阻尼弹簧振荡，应予以更换。"
  },
  {
    id: 119,
    q: "Technician A says worn ball joints can cause a clunking noise over bumps. Technician B says worn ball joints can affect camber and caster angles. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Worn ball joints create play in the suspension that causes clunking noises over bumps and during turns. Additionally, because ball joints serve as pivot points, wear allows the knuckle to shift, changing camber and caster alignment angles.",
    diagram: "",
    terms: ["ball_joint", "camber", "caster", "control_arm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Mcpherson_strut.jpg",
    youtube: "https://www.youtube.com/watch?v=MgCxvRCHbhQ",
    youtubeTitle: "Ball Joint Inspection and Replacement",
    qChinese: "技师A说磨损的球头会导致过减速带时发出咔嗒声。技师B说磨损的球头会影响外倾角和主销后倾角。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都是正确的。磨损的球头在悬挂中产生间隙，导致过减速带和转弯时发出咔嗒声。此外，由于球头是枢轴点，磨损会导致转向节移位，改变外倾角和主销后倾角定位角度。"
  },
  {
    id: 120,
    q: "What is the purpose of a sway bar (stabilizer bar) in the suspension system?",
    options: [
      "A) To support the vehicle's weight during cornering",
      "B) To reduce body roll during turns",
      "C) To maintain ride height",
      "D) To dampen spring oscillation"
    ],
    answer: 1,
    explanation: "The sway bar (stabilizer bar) connects the left and right sides of the suspension. During cornering, it transfers force from the loaded side to the unloaded side, resisting body roll and keeping the vehicle more level. It does not support weight or dampen springs.",
    diagram: "",
    terms: ["sway_bar", "control_arm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Mcpherson_strut.jpg",
    youtube: "https://www.youtube.com/watch?v=KJH4E85jW7I",
    youtubeTitle: "Sway Bar and Stabilizer Bar Explained",
    qChinese: "悬挂系统中稳定杆（防倾杆）的作用是什么？",
    optionsChinese: [
      "A) 在转弯时支撑车辆重量",
      "B) 减少转弯时的车身侧倾",
      "C) 维持车身高度",
      "D) 抑制弹簧振荡"
    ],
    explanationChinese: "稳定杆（防倾杆）连接悬挂系统的左右两侧。在转弯时，它将力从受载侧传递到非受载侧，抵抗车身侧倾并保持车辆更加平稳。它不支撑重量也不抑制弹簧振荡。"
  },
  {
    id: 121,
    q: "A vehicle with a SLA (Short-Long Arm) front suspension has a worn lower ball joint. How should the ball joint be inspected?",
    options: [
      "A) Jack under the lower control arm and check for vertical play at the ball joint",
      "B) Jack under the frame and check for horizontal play at the tie rod",
      "C) Jack under the frame and check for vertical play at the ball joint",
      "D) Jack under the lower control arm and check for horizontal play at the tie rod"
    ],
    answer: 0,
    explanation: "On an SLA suspension where the spring sits on the lower control arm, the lower ball joint is the load-carrying joint. To properly unload it for inspection, jack under the lower control arm. Then check for vertical play by prying up on the tire. This unloads the joint for accurate measurement.",
    diagram: "",
    terms: ["ball_joint", "control_arm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Mcpherson_strut.jpg",
    youtube: "https://www.youtube.com/watch?v=MgCxvRCHbhQ",
    youtubeTitle: "Ball Joint Inspection and Replacement",
    qChinese: "一辆配备SLA（短长臂）前悬挂的车辆下球头磨损。应如何检查球头？",
    optionsChinese: [
      "A) 在下控制臂下方举升并检查球头的垂直间隙",
      "B) 在车架下方举升并检查拉杆的水平间隙",
      "C) 在车架下方举升并检查球头的垂直间隙",
      "D) 在下控制臂下方举升并检查拉杆的水平间隙"
    ],
    explanationChinese: "在弹簧位于下控制臂上的SLA悬挂中，下球头是承载球头。为了正确卸载以进行检查，应在下控制臂下方举升。然后通过向上撬动轮胎来检查垂直间隙。这样可以卸载球头以进行准确测量。"
  },
  {
    id: 122,
    q: "On a MacPherson strut suspension, which ball joint is the load-carrying joint?",
    options: [
      "A) The upper ball joint",
      "B) The lower ball joint",
      "C) There is no load-carrying ball joint; the strut carries the load",
      "D) Both upper and lower ball joints share the load"
    ],
    answer: 2,
    explanation: "On a MacPherson strut suspension, the strut assembly carries the vehicle weight through the coil spring and upper strut mount. There is no upper ball joint. The lower ball joint serves as a pivot point (follower joint) and does not carry the vehicle weight. Inspection is done by jacking under the frame.",
    diagram: "",
    terms: ["strut", "ball_joint", "coil_spring"],
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Mcpherson_strut.jpg",
    youtube: "https://www.youtube.com/watch?v=0gUkBWHGfRs",
    youtubeTitle: "MacPherson Strut Replacement",
    qChinese: "在麦弗逊式悬挂中，哪个球头是承载球头？",
    optionsChinese: [
      "A) 上球头",
      "B) 下球头",
      "C) 没有承载球头；减震器支柱承载负荷",
      "D) 上下球头共同承载负荷"
    ],
    explanationChinese: "在麦弗逊式悬挂中，减震器支柱总成通过螺旋弹簧和上部支座承载车辆重量。没有上球头。下球头仅作为枢轴点（随动球头），不承载车辆重量。检查时应在车架下方举升。"
  },
  {
    id: 123,
    q: "A vehicle with rear leaf springs sags on one side. What is the MOST likely cause?",
    options: [
      "A) A broken leaf spring or weak spring pack",
      "B) A worn rear shock absorber",
      "C) A disconnected sway bar link",
      "D) Over-inflated rear tires"
    ],
    answer: 0,
    explanation: "A sagging or lower ride height on one side of a leaf spring-equipped vehicle typically indicates a broken leaf or a fatigued spring pack. Broken leaves cannot support the vehicle's weight properly. Shock absorbers control oscillation but do not support weight or affect ride height.",
    diagram: "",
    terms: ["leaf_spring", "shock_absorber"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Leafs1.jpg/640px-Leafs1.jpg",
    youtube: "https://www.youtube.com/watch?v=YA8RGICM4zU",
    youtubeTitle: "Leaf Spring Suspension Explained",
    qChinese: "一辆配备后钢板弹簧的车辆一侧下沉。最可能的原因是什么？",
    optionsChinese: [
      "A) 钢板弹簧断裂或弹簧组疲劳",
      "B) 后减震器磨损",
      "C) 稳定杆连杆断开",
      "D) 后轮胎过度充气"
    ],
    explanationChinese: "配备钢板弹簧的车辆一侧下沉或车身高度偏低，通常表明弹簧片断裂或弹簧组疲劳。断裂的弹簧片无法正确支撑车辆重量。减震器控制振荡但不支撑重量或影响车身高度。"
  },
  {
    id: 124,
    q: "What is the function of a torsion bar in a suspension system?",
    options: [
      "A) To dampen spring oscillation",
      "B) To act as the spring element by resisting twisting force",
      "C) To connect the sway bar to the control arm",
      "D) To maintain caster angle"
    ],
    answer: 1,
    explanation: "A torsion bar is a spring element that uses its resistance to twisting to support the vehicle's weight. One end is anchored to the frame and the other to the control arm. As the control arm moves, the bar twists and then returns to its original position, acting like a coil spring.",
    diagram: "",
    terms: ["torsion_bar", "control_arm", "coil_spring"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Torsion_bar_suspension.jpg/640px-Torsion_bar_suspension.jpg",
    youtube: "https://www.youtube.com/watch?v=YA8RGICM4zU",
    youtubeTitle: "Leaf Spring Suspension Explained",
    qChinese: "扭力杆在悬挂系统中的功能是什么？",
    optionsChinese: [
      "A) 抑制弹簧振荡",
      "B) 通过抵抗扭转力作为弹簧元件",
      "C) 将稳定杆连接到控制臂",
      "D) 维持主销后倾角"
    ],
    explanationChinese: "扭力杆是一种弹簧元件，利用其对扭转的抵抗力来支撑车辆重量。一端固定在车架上，另一端固定在控制臂上。当控制臂运动时，杆件扭转然后恢复到原来的位置，其作用类似于螺旋弹簧。"
  },
  {
    id: 125,
    q: "A technician hears a rattling noise from the front suspension when driving over small bumps. Which component is MOST likely worn?",
    options: [
      "A) Coil springs",
      "B) Sway bar end links",
      "C) Strut cartridge",
      "D) Control arm pivot shaft"
    ],
    answer: 1,
    explanation: "Sway bar end links are one of the most common causes of front-end rattling over small bumps. They contain small ball studs and bushings that wear out, creating a rattling or clunking noise. They are an inexpensive and frequently replaced suspension component.",
    diagram: "",
    terms: ["sway_bar", "sway_bar_link", "shock_absorber"],
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Mcpherson_strut.jpg",
    youtube: "https://www.youtube.com/watch?v=KJH4E85jW7I",
    youtubeTitle: "Sway Bar and Stabilizer Bar Explained",
    qChinese: "技师在行驶过小颠簸时听到前悬挂发出哗啦声。哪个部件最可能磨损？",
    optionsChinese: [
      "A) 螺旋弹簧",
      "B) 稳定杆连杆",
      "C) 减震器内芯",
      "D) 控制臂枢轴"
    ],
    explanationChinese: "稳定杆连杆是前悬挂在过小颠簸时发出哗啦声最常见的原因之一。它们包含小球头和衬套，磨损后会产生哗啦声或咔嗒声。这是一种价格低廉且经常更换的悬挂部件。"
  },
  {
    id: 126,
    q: "A vehicle has a cupped or scalloped tire wear pattern on the front tires. What is the MOST likely cause?",
    options: [
      "A) Excessive toe-out",
      "B) Worn shock absorbers or struts",
      "C) Excessive positive camber",
      "D) Over-inflation"
    ],
    answer: 1,
    explanation: "Cupped or scalloped tire wear (dips or cups around the tread) is caused by worn shock absorbers or struts. When the shock cannot control the tire's contact with the road, the tire bounces and skips, creating alternating high and low wear spots around the circumference.",
    diagram: "",
    terms: ["shock_absorber", "strut", "tire_rotation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "车辆前轮有凹坑状或波浪状磨损。最可能的原因是什么？",
    optionsChinese: [
      "A) 过大的外前束",
      "B) 减震器或支柱磨损",
      "C) 过大的正外倾角",
      "D) 过度充气"
    ],
    explanationChinese: "凹坑状或波浪状轮胎磨损（胎面上的凹陷或杯状痕迹）是由减震器或支柱磨损引起的。当减震器无法控制轮胎与路面的接触时，轮胎会弹跳和跳动，在周向产生交替的高低磨损点。"
  },
  {
    id: 127,
    q: "What happens when a control arm bushing wears out?",
    options: [
      "A) The steering wheel vibrates at all speeds",
      "B) The suspension alignment shifts and clunking noise occurs",
      "C) The brake pedal feels spongy",
      "D) The power steering assist increases"
    ],
    answer: 1,
    explanation: "Control arm bushings cushion the connection between the control arm and the vehicle frame. When they wear out, the control arm can shift during driving and braking, causing alignment changes, clunking noises over bumps, and uneven tire wear. Braking may also cause the front end to shift.",
    diagram: "",
    terms: ["control_arm", "ball_joint", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Mcpherson_strut.jpg",
    youtube: "https://www.youtube.com/watch?v=MgCxvRCHbhQ",
    youtubeTitle: "Ball Joint Inspection and Replacement",
    qChinese: "控制臂衬套磨损后会发生什么？",
    optionsChinese: [
      "A) 方向盘在所有速度下振动",
      "B) 悬挂定位偏移并出现咔嗒声",
      "C) 刹车踏板感觉海绵状",
      "D) 助力转向助力增加"
    ],
    explanationChinese: "控制臂衬套缓冲控制臂与车架之间的连接。当它们磨损时，控制臂在行驶和制动时会移位，导致定位变化、过减速带时咔嗒声和轮胎不均匀磨损。制动时也可能导致前端移位。"
  },
  {
    id: 128,
    q: "A vehicle with rear coil spring suspension has one corner sitting lower than the other. What should be inspected?",
    options: [
      "A) The rear shock absorbers",
      "B) The rear coil springs for sagging or breakage",
      "C) The rear sway bar",
      "D) The rear wheel bearings"
    ],
    answer: 1,
    explanation: "An uneven ride height with one corner sitting lower indicates a sagging or broken coil spring on that corner. Coil springs support the vehicle weight and maintain ride height. A weak spring compresses more under load, lowering that corner. Shock absorbers do not affect ride height.",
    diagram: "",
    terms: ["coil_spring", "shock_absorber"],
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Mcpherson_strut.jpg",
    youtube: "https://www.youtube.com/watch?v=0gUkBWHGfRs",
    youtubeTitle: "MacPherson Strut Replacement",
    qChinese: "一辆后螺旋弹簧悬挂的车辆一角比另一角低。应检查什么？",
    optionsChinese: [
      "A) 后减震器",
      "B) 后螺旋弹簧是否下沉或断裂",
      "C) 后稳定杆",
      "D) 后轮轴承"
    ],
    explanationChinese: "一角车身高度偏低表明该角的螺旋弹簧下沉或断裂。螺旋弹簧支撑车辆重量并维持车身高度。弱化的弹簧在负载下压缩更多，导致该角偏低。减震器不影响车身高度。"
  },
  {
    id: 129,
    q: "Technician A says struts should always be replaced in pairs (both sides of the same axle). Technician B says a single strut can be replaced if only one is leaking. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Struts should be replaced in pairs on the same axle. Even if only one is visibly leaking, the other has the same mileage and wear. Replacing only one creates uneven damping characteristics side to side, which can affect handling, braking stability, and tire wear patterns.",
    diagram: "",
    terms: ["strut", "shock_absorber"],
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Mcpherson_strut.jpg",
    youtube: "https://www.youtube.com/watch?v=0gUkBWHGfRs",
    youtubeTitle: "MacPherson Strut Replacement",
    qChinese: "技师A说减震器支柱应始终成对更换（同一轴的两侧）。技师B说如果只有一个漏油可以单独更换。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "减震器支柱应在同一轴上成对更换。即使只有一个明显漏油，另一个也有相同的里程和磨损。仅更换一个会导致两侧阻尼特性不均，影响操控性、制动稳定性和轮胎磨损模式。"
  },
  {
    id: 130,
    q: "A creaking noise is heard from the front suspension when going over bumps at low speed. The noise goes away when the suspension components are sprayed with silicone lubricant. What is the MOST likely cause?",
    options: [
      "A) Worn ball joints",
      "B) Dry or deteriorated rubber bushings or strut mounts",
      "C) Loose wheel lug nuts",
      "D) A bent control arm"
    ],
    answer: 1,
    explanation: "A creaking noise that temporarily disappears when lubricated with silicone spray indicates dry or deteriorated rubber suspension bushings or strut mounts. The rubber-to-metal contact creates a creaking or groaning sound. While lubrication provides temporary relief, the worn components should be replaced.",
    diagram: "",
    terms: ["strut_mount", "control_arm", "ball_joint"],
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Mcpherson_strut.jpg",
    youtube: "https://www.youtube.com/watch?v=0gUkBWHGfRs",
    youtubeTitle: "MacPherson Strut Replacement",
    qChinese: "低速过减速带时前悬挂发出吱吱声。用硅润滑剂喷洒悬挂部件后噪音消失。最可能的原因是什么？",
    optionsChinese: [
      "A) 球头磨损",
      "B) 橡胶衬套或减震器顶部支座干燥或老化",
      "C) 车轮螺母松动",
      "D) 控制臂弯曲"
    ],
    explanationChinese: "用硅润滑剂润滑后暂时消失的吱吱声表明橡胶悬挂衬套或减震器顶部支座干燥或老化。橡胶与金属的接触产生吱吱声或嘎嘎声。虽然润滑可以暂时缓解，但应更换磨损的部件。"
  },
  {
    id: 131,
    q: "What type of suspension uses a single lower control arm and strut with no upper control arm?",
    options: [
      "A) Short-Long Arm (SLA) suspension",
      "B) MacPherson strut suspension",
      "C) Solid axle suspension",
      "D) Multi-link suspension"
    ],
    answer: 1,
    explanation: "MacPherson strut suspension uses a single lower control arm and a strut assembly that serves as both the upper suspension pivot and the damping element. There is no upper control arm. The strut connects to the steering knuckle and the strut tower in the body.",
    diagram: "",
    terms: ["strut", "control_arm", "ball_joint"],
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Mcpherson_strut.jpg",
    youtube: "https://www.youtube.com/watch?v=0gUkBWHGfRs",
    youtubeTitle: "MacPherson Strut Replacement",
    qChinese: "哪种悬挂类型使用单个下控制臂和支柱而没有上控制臂？",
    optionsChinese: [
      "A) 短长臂(SLA)悬挂",
      "B) 麦弗逊式悬挂",
      "C) 整体桥悬挂",
      "D) 多连杆悬挂"
    ],
    explanationChinese: "麦弗逊式悬挂使用单个下控制臂和一个同时作为上悬挂枢轴和阻尼元件的支柱总成。没有上控制臂。支柱连接到转向节和车身上的支柱塔。"
  },
  {
    id: 132,
    q: "A vehicle has excessive body roll during turns. All shocks and struts are in good condition. What other component should be checked?",
    options: [
      "A) The tie rod ends",
      "B) The sway bar, bushings, and end links",
      "C) The wheel bearings",
      "D) The steering gear"
    ],
    answer: 1,
    explanation: "The sway bar resists body roll during turns. If the sway bar is broken, disconnected, or its bushings and end links are severely worn, the bar cannot effectively transfer anti-roll force. This results in excessive body lean. Shocks and struts also help but the sway bar is the primary anti-roll device.",
    diagram: "",
    terms: ["sway_bar", "sway_bar_link", "control_arm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Mcpherson_strut.jpg",
    youtube: "https://www.youtube.com/watch?v=KJH4E85jW7I",
    youtubeTitle: "Sway Bar and Stabilizer Bar Explained",
    qChinese: "车辆转弯时车身侧倾过大。所有减震器和支柱状态良好。还应检查哪个部件？",
    optionsChinese: [
      "A) 拉杆端部",
      "B) 稳定杆、衬套和连杆",
      "C) 车轮轴承",
      "D) 转向器"
    ],
    explanationChinese: "稳定杆在转弯时抵抗车身侧倾。如果稳定杆断裂、断开或其衬套和连杆严重磨损，杆件无法有效传递抗侧倾力。这会导致车身过度倾斜。减震器和支柱也有帮助，但稳定杆是主要的抗侧倾装置。"
  },
  {
    id: 133,
    q: "During a strut replacement, what alignment angle is MOST affected and should be checked afterward?",
    options: [
      "A) Caster only",
      "B) Camber only",
      "C) Toe only",
      "D) Camber and toe"
    ],
    answer: 3,
    explanation: "When a strut is removed and reinstalled, camber can change based on the strut position in the tower and knuckle attachment. Toe is also affected because the steering geometry changes when the knuckle position shifts. A full alignment check of at least camber and toe is recommended after strut replacement.",
    diagram: "",
    terms: ["strut", "camber", "toe", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=MXGi6CaKtaY",
    youtubeTitle: "How to Perform a Wheel Alignment",
    qChinese: "更换减震器支柱后，哪个定位角度最受影响应该检查？",
    optionsChinese: [
      "A) 仅主销后倾角",
      "B) 仅外倾角",
      "C) 仅前束",
      "D) 外倾角和前束"
    ],
    explanationChinese: "拆卸和重新安装支柱时，外倾角会因支柱在塔架中的位置和转向节连接而改变。前束也会受影响，因为转向节位置变化时转向几何也会改变。建议在更换支柱后至少检查外倾角和前束。"
  },
  {
    id: 134,
    q: "What does a blue stain on a shock absorber or strut body indicate?",
    options: [
      "A) Normal manufacturing residue",
      "B) A heat-related failure from overheating",
      "C) Oil seepage that requires replacement",
      "D) Corrosion from road salt"
    ],
    answer: 2,
    explanation: "Oil seepage or a wet, oily film on the shock absorber or strut body indicates that the internal seals have failed. The hydraulic fluid is leaking out, reducing the shock's damping ability. A light film may be acceptable, but active leaking or dripping means the unit should be replaced.",
    diagram: "",
    terms: ["shock_absorber", "strut"],
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Mcpherson_strut.jpg",
    youtube: "https://www.youtube.com/watch?v=0gUkBWHGfRs",
    youtubeTitle: "MacPherson Strut Replacement",
    qChinese: "减震器或支柱本体上的蓝色污渍表明什么？",
    optionsChinese: [
      "A) 正常的制造残留物",
      "B) 过热导致的热失效",
      "C) 需要更换的油液渗漏",
      "D) 道路盐分造成的腐蚀"
    ],
    explanationChinese: "减震器或支柱本体上的油液渗漏或湿润油膜表明内部密封件已失效。液压油正在泄漏，降低了减震器的阻尼能力。轻微的油膜可能可以接受，但活跃的泄漏或滴漏意味着该部件应该更换。"
  },
  {
    id: 135,
    q: "A vehicle equipped with air suspension has one corner that drops overnight. What is the MOST likely cause?",
    options: [
      "A) A faulty compressor relay",
      "B) A leaking air spring or air line on that corner",
      "C) A faulty ride height sensor",
      "D) A weak battery"
    ],
    answer: 1,
    explanation: "A single corner that drops overnight indicates an air leak specific to that corner. The most common causes are a leaking air spring (air bag), a cracked or disconnected air line, or a leaking valve block. The compressor only runs to maintain height and cannot compensate for a continuous leak when the vehicle is off.",
    diagram: "",
    terms: ["coil_spring", "shock_absorber"],
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Mcpherson_strut.jpg",
    youtube: "https://www.youtube.com/watch?v=0gUkBWHGfRs",
    youtubeTitle: "MacPherson Strut Replacement",
    qChinese: "一辆配备空气悬挂的车辆一角在过夜后下沉。最可能的原因是什么？",
    optionsChinese: [
      "A) 压缩机继电器故障",
      "B) 该角的空气弹簧或气管泄漏",
      "C) 车身高度传感器故障",
      "D) 蓄电池电力不足"
    ],
    explanationChinese: "单个角落过夜后下沉表明该角有特定的空气泄漏。最常见的原因是空气弹簧（气囊）泄漏、气管破裂或断开、或阀体泄漏。压缩机仅在车辆运行时运转以维持高度，车辆关闭时无法补偿持续泄漏。"
  },
  {
    id: 136,
    q: "Technician A says a worn strut mount bearing can cause steering binding. Technician B says a worn strut mount can cause a clunking noise when turning. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. The strut mount bearing allows the strut to rotate with steering. If the bearing is worn or seized, it creates resistance and a binding feel when turning. A worn strut mount also produces clunking noises over bumps and when the steering direction is changed.",
    diagram: "",
    terms: ["strut_mount", "strut", "shock_absorber"],
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Mcpherson_strut.jpg",
    youtube: "https://www.youtube.com/watch?v=0gUkBWHGfRs",
    youtubeTitle: "MacPherson Strut Replacement",
    qChinese: "技师A说磨损的减震器顶部支座轴承会导致转向卡滞。技师B说磨损的减震器顶部支座会在转向时发出咔嗒声。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位技师都是正确的。减震器顶部支座轴承允许支柱随转向旋转。如果轴承磨损或卡住，转向时会产生阻力和卡滞感。磨损的减震器顶部支座在过减速带和改变转向方向时也会产生咔嗒声。"
  },
  {
    id: 137,
    q: "What is the correct procedure to measure ball joint axial play on a load-carrying ball joint?",
    options: [
      "A) Lift the vehicle by the frame, place a dial indicator on the knuckle, and pry up on the tire",
      "B) Lift the vehicle by the lower control arm and check for lateral play",
      "C) Unload the ball joint by proper jacking and use a dial indicator to measure vertical play",
      "D) Rock the tire side to side at 12 and 6 o'clock"
    ],
    answer: 2,
    explanation: "To accurately measure ball joint axial (vertical) play, the joint must first be unloaded by jacking at the correct point. A dial indicator is then placed to measure vertical movement while prying. The maximum allowable play is specified by the vehicle manufacturer.",
    diagram: "",
    terms: ["ball_joint", "control_arm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Mcpherson_strut.jpg",
    youtube: "https://www.youtube.com/watch?v=MgCxvRCHbhQ",
    youtubeTitle: "Ball Joint Inspection and Replacement",
    qChinese: "测量承载球头轴向间隙的正确程序是什么？",
    optionsChinese: [
      "A) 用车架举升车辆，将百分表放在转向节上，向上撬动轮胎",
      "B) 用下控制臂举升车辆并检查横向间隙",
      "C) 通过正确的举升位置卸载球头并使用百分表测量垂直间隙",
      "D) 在12点和6点方向左右摇晃轮胎"
    ],
    explanationChinese: "要准确测量球头的轴向（垂直）间隙，必须首先在正确的位置举升以卸载球头。然后放置百分表在撬动时测量垂直运动。最大允许间隙由车辆制造商规定。"
  },
  {
    id: 138,
    q: "A vehicle with independent rear suspension has a knocking noise from the rear when going over bumps. What should be inspected FIRST?",
    options: [
      "A) The rear differential mount",
      "B) The rear control arm bushings and shock absorbers",
      "C) The rear brake pads",
      "D) The rear exhaust hangers"
    ],
    answer: 1,
    explanation: "On independent rear suspension, knocking over bumps is commonly caused by worn control arm bushings, worn shock absorbers, or worn sway bar end links. These components absorb impact and maintain alignment. The bushings and shocks should be inspected first as they are the most common causes.",
    diagram: "",
    terms: ["control_arm", "shock_absorber", "sway_bar_link"],
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Mcpherson_strut.jpg",
    youtube: "https://www.youtube.com/watch?v=0gUkBWHGfRs",
    youtubeTitle: "MacPherson Strut Replacement",
    qChinese: "配备独立后悬挂的车辆过减速带时后部有敲击声。应首先检查什么？",
    optionsChinese: [
      "A) 后差速器支座",
      "B) 后控制臂衬套和减震器",
      "C) 后刹车片",
      "D) 后排气管吊架"
    ],
    explanationChinese: "在独立后悬挂上，过减速带时的敲击声通常由磨损的控制臂衬套、减震器或稳定杆连杆引起。这些部件吸收冲击并维持定位。衬套和减震器应首先检查，因为它们是最常见的原因。"
  },
  {
    id: 139,
    q: "What is the purpose of a jounce bumper (bump stop) on a strut or shock absorber?",
    options: [
      "A) To limit maximum suspension droop",
      "B) To prevent metal-to-metal contact when the suspension fully compresses",
      "C) To support the vehicle weight",
      "D) To maintain proper ride height"
    ],
    answer: 1,
    explanation: "The jounce bumper (bump stop) is a rubber or foam cushion on the strut or shock shaft that prevents metal-to-metal contact when the suspension reaches full compression (jounce). Without it, the suspension would bottom out harshly, potentially damaging the strut, spring, or body mounting points.",
    diagram: "",
    terms: ["strut", "shock_absorber", "coil_spring"],
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Mcpherson_strut.jpg",
    youtube: "https://www.youtube.com/watch?v=0gUkBWHGfRs",
    youtubeTitle: "MacPherson Strut Replacement",
    qChinese: "减震器或支柱上缓冲块（限位块）的作用是什么？",
    optionsChinese: [
      "A) 限制悬挂最大拉伸量",
      "B) 防止悬挂完全压缩时金属与金属接触",
      "C) 支撑车辆重量",
      "D) 维持正确的车身高度"
    ],
    explanationChinese: "缓冲块（限位块）是安装在支柱或减震器轴上的橡胶或泡沫垫，防止悬挂达到完全压缩（跳动）时金属与金属接触。没有它，悬挂会剧烈触底，可能损坏支柱、弹簧或车身安装点。"
  },
  {
    id: 140,
    q: "A vehicle with a solid rear axle and leaf springs wanders at highway speed. What is the MOST likely cause?",
    options: [
      "A) Worn front ball joints",
      "B) Worn or broken rear leaf spring center bolt or U-bolts",
      "C) Low tire pressure in the front tires",
      "D) A worn steering gear"
    ],
    answer: 1,
    explanation: "On a solid rear axle with leaf springs, the center bolt and U-bolts locate the axle to the springs. If the center bolt shears or U-bolts loosen, the axle can shift, causing the thrust angle to change. This makes the rear axle point in a different direction than the front, causing highway wandering.",
    diagram: "",
    terms: ["leaf_spring", "thrust_angle", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Leafs1.jpg/640px-Leafs1.jpg",
    youtube: "https://www.youtube.com/watch?v=YA8RGICM4zU",
    youtubeTitle: "Leaf Spring Suspension Explained",
    qChinese: "一辆配备整体后桥和钢板弹簧的车辆在高速公路上行驶不稳。最可能的原因是什么？",
    optionsChinese: [
      "A) 前球头磨损",
      "B) 后钢板弹簧中心螺栓或U型螺栓磨损或断裂",
      "C) 前轮胎气压偏低",
      "D) 转向器磨损"
    ],
    explanationChinese: "在配备钢板弹簧的整体后桥上，中心螺栓和U型螺栓将车桥定位在弹簧上。如果中心螺栓剪断或U型螺栓松动，车桥可以移位，导致推力角改变。这使得后桥指向与前部不同的方向，导致高速公路上行驶不稳。"
  },
  {
    id: 141,
    q: "What is the primary difference between a strut and a shock absorber?",
    options: [
      "A) A strut is a structural component that supports vehicle weight; a shock is not",
      "B) A shock absorber supports vehicle weight; a strut does not",
      "C) A strut uses gas; a shock uses oil only",
      "D) There is no functional difference between the two"
    ],
    answer: 0,
    explanation: "A strut is a structural component that is part of the suspension's load-bearing structure, serving as the upper pivot point for the steering knuckle and supporting vehicle weight through its spring. A shock absorber only controls spring oscillation and is not a structural member.",
    diagram: "",
    terms: ["strut", "shock_absorber", "coil_spring"],
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Mcpherson_strut.jpg",
    youtube: "https://www.youtube.com/watch?v=0gUkBWHGfRs",
    youtubeTitle: "MacPherson Strut Replacement",
    qChinese: "支柱和减震器之间的主要区别是什么？",
    optionsChinese: [
      "A) 支柱是支撑车辆重量的结构部件；减震器不是",
      "B) 减震器支撑车辆重量；支柱不支撑",
      "C) 支柱使用气体；减震器仅使用油液",
      "D) 两者之间没有功能差异"
    ],
    explanationChinese: "支柱是悬挂承载结构的一部分，作为转向节的上枢轴点并通过其弹簧支撑车辆重量。减震器仅控制弹簧振荡，不是结构部件。"
  },
  // ===== WHEEL ALIGNMENT II (Questions 142-175) =====
  {
    id: 142,
    q: "What tire wear pattern does excessive positive camber cause?",
    options: [
      "A) Wear on the inside edge of the tire",
      "B) Wear on the outside edge of the tire",
      "C) Center wear on the tire",
      "D) Cupped or scalloped wear"
    ],
    answer: 1,
    explanation: "Excessive positive camber tilts the top of the tire outward, placing more load on the outside edge of the tire tread. Over time, this causes accelerated wear on the outside edge. Negative camber causes inside edge wear. Center wear is from over-inflation.",
    diagram: "",
    terms: ["camber", "wheel_alignment", "tire_rotation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=MXGi6CaKtaY",
    youtubeTitle: "How to Perform a Wheel Alignment",
    qChinese: "过大的正外倾角会导致什么轮胎磨损模式？",
    optionsChinese: [
      "A) 轮胎内侧边缘磨损",
      "B) 轮胎外侧边缘磨损",
      "C) 轮胎中心磨损",
      "D) 凹坑状或波浪状磨损"
    ],
    explanationChinese: "过大的正外倾角使轮胎顶部向外倾斜，在轮胎胎面外侧边缘施加更多负载。随着时间推移，这会导致外侧边缘加速磨损。负外倾角导致内侧边缘磨损。中心磨损是由过度充气引起的。"
  },
  {
    id: 143,
    q: "A vehicle pulls to the right while driving on a flat, level road. The tire pressures are equal and correct. Which alignment angle is MOST likely the cause?",
    options: [
      "A) Unequal toe settings",
      "B) Unequal caster angles side to side",
      "C) Excessive positive camber on the left side",
      "D) Excessive thrust angle"
    ],
    answer: 1,
    explanation: "Unequal caster angles side to side are the primary alignment cause of a pull. The vehicle pulls toward the side with less positive caster. While unequal camber can contribute to a pull, caster is the dominant factor. Toe affects tire wear more than directional pull.",
    diagram: "",
    terms: ["caster", "camber", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=MXGi6CaKtaY",
    youtubeTitle: "How to Perform a Wheel Alignment",
    qChinese: "车辆在平坦水平路面上行驶时向右跑偏。轮胎气压相等且正确。哪个定位角度最可能是原因？",
    optionsChinese: [
      "A) 不等的前束设定",
      "B) 两侧不等的主销后倾角",
      "C) 左侧过大的正外倾角",
      "D) 过大的推力角"
    ],
    explanationChinese: "两侧不等的主销后倾角是导致跑偏的主要定位原因。车辆向正主销后倾角较小的一侧跑偏。虽然不等的外倾角也可能导致跑偏，但主销后倾角是主导因素。前束主要影响轮胎磨损而非方向性跑偏。"
  },
  {
    id: 144,
    q: "What is the thrust angle?",
    options: [
      "A) The angle between the vehicle's centerline and the direction the rear axle points",
      "B) The angle of the steering axis when viewed from the side",
      "C) The inward or outward tilt of the tire viewed from the front",
      "D) The angle of the tie rod relative to the center link"
    ],
    answer: 0,
    explanation: "The thrust angle is the angle between the vehicle's geometric centerline and the thrust line (the direction the rear wheels are pointing). A non-zero thrust angle means the rear axle is not perpendicular to the centerline, which can cause the vehicle to drive at a slight angle (dog tracking).",
    diagram: "",
    terms: ["thrust_angle", "wheel_alignment", "toe"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=MXGi6CaKtaY",
    youtubeTitle: "How to Perform a Wheel Alignment",
    qChinese: "什么是推力角？",
    optionsChinese: [
      "A) 车辆中心线与后桥指向之间的角度",
      "B) 从侧面看转向轴的角度",
      "C) 从前面看轮胎向内或向外的倾斜",
      "D) 拉杆相对于中间连杆的角度"
    ],
    explanationChinese: "推力角是车辆几何中心线与推力线（后轮指向的方向）之间的角度。非零推力角意味着后桥不垂直于中心线，这会导致车辆以轻微的角度行驶（蟹行）。"
  },
  {
    id: 145,
    q: "Excessive toe-in on the front wheels causes what type of tire wear?",
    options: [
      "A) Wear on the outside edges of both tires",
      "B) Feathered wear with the sharp edge pointing outward",
      "C) Center wear on both tires",
      "D) Cupped wear on both tires"
    ],
    answer: 1,
    explanation: "Excessive toe-in causes a feathered wear pattern across the tread. Each tread block develops a sharp edge on the outside and a smooth edge on the inside. This occurs because the tires are pointed slightly inward but must travel straight, scrubbing the tread at an angle.",
    diagram: "",
    terms: ["toe", "wheel_alignment", "tire_rotation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=MXGi6CaKtaY",
    youtubeTitle: "How to Perform a Wheel Alignment",
    qChinese: "前轮过大的内前束会导致什么类型的轮胎磨损？",
    optionsChinese: [
      "A) 两个轮胎外侧边缘磨损",
      "B) 锯齿状磨损，锐边朝外",
      "C) 两个轮胎中心磨损",
      "D) 两个轮胎凹坑状磨损"
    ],
    explanationChinese: "过大的内前束导致胎面出现锯齿状磨损。每个胎面花纹块外侧形成锐边，内侧形成平滑边。这是因为轮胎略微向内指向但必须直线行驶，导致胎面以一定角度摩擦磨损。"
  },
  {
    id: 146,
    q: "Which alignment angle promotes steering wheel return-to-center after a turn?",
    options: [
      "A) Camber",
      "B) Toe",
      "C) Caster",
      "D) Thrust angle"
    ],
    answer: 2,
    explanation: "Positive caster tilts the steering axis rearward at the top, creating a trailing effect similar to a shopping cart caster. This creates a self-centering force that causes the steering wheel to return to center after a turn. More positive caster provides stronger return-to-center feel.",
    diagram: "",
    terms: ["caster", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=MXGi6CaKtaY",
    youtubeTitle: "How to Perform a Wheel Alignment",
    qChinese: "哪个定位角度促进转向后方向盘回正？",
    optionsChinese: [
      "A) 外倾角",
      "B) 前束",
      "C) 主销后倾角",
      "D) 推力角"
    ],
    explanationChinese: "正主销后倾角使转向轴顶部向后倾斜，产生类似购物车脚轮的拖曳效应。这产生自回正力，使方向盘在转弯后回到中心位置。更大的正主销后倾角提供更强的回正感。"
  },
  {
    id: 147,
    q: "A four-wheel alignment shows the rear toe is toe-out on one side. What will this cause?",
    options: [
      "A) Inside edge wear on the front tires",
      "B) Dog tracking and off-center steering wheel",
      "C) Excessive body roll",
      "D) A harsh ride"
    ],
    answer: 1,
    explanation: "Rear toe-out on one side creates a thrust angle that points the rear of the vehicle off to one side. This causes the vehicle to dog track (drive at a slight angle) and the steering wheel to be off-center as the front wheels compensate. It can also cause accelerated rear tire wear.",
    diagram: "",
    terms: ["toe", "thrust_angle", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=MXGi6CaKtaY",
    youtubeTitle: "How to Perform a Wheel Alignment",
    qChinese: "四轮定位显示后轮一侧为外前束。这会导致什么？",
    optionsChinese: [
      "A) 前轮胎内侧边缘磨损",
      "B) 蟹行和方向盘偏移",
      "C) 车身侧倾过大",
      "D) 颠簸的乘坐感"
    ],
    explanationChinese: "一侧后轮外前束会产生将车辆后部指向一侧的推力角。这导致车辆蟹行（以轻微角度行驶），前轮补偿时方向盘偏离中心。还可能导致后轮胎加速磨损。"
  },
  {
    id: 148,
    q: "Technician A says SAI (Steering Axis Inclination) is adjustable on most vehicles. Technician B says SAI is a diagnostic angle used to identify bent or damaged components. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 1,
    explanation: "SAI (Steering Axis Inclination) is not adjustable because it is determined by the physical geometry of the steering knuckle and suspension mounting points. It is used as a diagnostic angle to identify bent spindles, knuckles, strut towers, or control arms by comparing side-to-side readings.",
    diagram: "",
    terms: ["wheel_alignment", "camber", "caster"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=MXGi6CaKtaY",
    youtubeTitle: "How to Perform a Wheel Alignment",
    qChinese: "技师A说转向轴倾角(SAI)在大多数车辆上是可调的。技师B说SAI是用于识别弯曲或损坏部件的诊断角度。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "转向轴倾角(SAI)不可调，因为它由转向节和悬挂安装点的物理几何形状决定。它用作诊断角度，通过比较两侧读数来识别弯曲的主轴、转向节、减震器塔或控制臂。"
  },
  {
    id: 149,
    q: "When performing a wheel alignment, which angle should be adjusted FIRST?",
    options: [
      "A) Front toe",
      "B) Rear toe",
      "C) Front camber",
      "D) Caster"
    ],
    answer: 3,
    explanation: "The correct alignment sequence is caster first, then camber, then toe. Caster is adjusted first because it can affect camber readings. Camber is set next because it can affect toe. Toe is always adjusted last. On a four-wheel alignment, rear angles should be set before front angles.",
    diagram: "",
    terms: ["caster", "camber", "toe", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=MXGi6CaKtaY",
    youtubeTitle: "How to Perform a Wheel Alignment",
    qChinese: "进行四轮定位时，应首先调整哪个角度？",
    optionsChinese: [
      "A) 前轮前束",
      "B) 后轮前束",
      "C) 前轮外倾角",
      "D) 主销后倾角"
    ],
    explanationChinese: "正确的定位调整顺序是先主销后倾角，然后外倾角，最后前束。首先调整主销后倾角因为它会影响外倾角读数。然后设定外倾角因为它会影响前束。前束总是最后调整。在四轮定位中，后部角度应在前部角度之前设定。"
  },
  {
    id: 150,
    q: "A vehicle has a memory steer condition where the steering wheel stays turned slightly in the direction of the last turn. What is the MOST likely cause?",
    options: [
      "A) Excessive positive caster",
      "B) A binding upper strut mount bearing",
      "C) Low power steering fluid",
      "D) Worn tie rod ends"
    ],
    answer: 1,
    explanation: "Memory steer is a condition where the steering does not return to center after a turn and remembers the last steering input. This is typically caused by a binding strut mount bearing, a tight steering column bearing, or a binding ball joint that prevents the steering from self-centering.",
    diagram: "",
    terms: ["strut_mount", "caster", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=MXGi6CaKtaY",
    youtubeTitle: "How to Perform a Wheel Alignment",
    qChinese: "车辆有记忆转向现象，方向盘在最后一次转弯后保持略微转向该方向。最可能的原因是什么？",
    optionsChinese: [
      "A) 过大的正主销后倾角",
      "B) 减震器顶部支座轴承卡滞",
      "C) 助力转向液偏低",
      "D) 拉杆端部磨损"
    ],
    explanationChinese: "记忆转向是转向在转弯后不回正并记住最后转向输入的现象。这通常由减震器顶部支座轴承卡滞、转向柱轴承紧固或球头卡滞导致，阻止了转向自回正。"
  },
  {
    id: 151,
    q: "What is the included angle in wheel alignment?",
    options: [
      "A) The sum of camber and SAI (Steering Axis Inclination)",
      "B) The sum of caster and camber",
      "C) The difference between left and right toe",
      "D) The angle between the thrust line and the vehicle centerline"
    ],
    answer: 0,
    explanation: "The included angle is the sum of camber and SAI on the same wheel. It is used as a diagnostic angle to determine if a spindle or knuckle is bent. If SAI is correct but the included angle is wrong, the spindle is bent. If SAI is also wrong, the strut tower or control arm may be damaged.",
    diagram: "",
    terms: ["camber", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=MXGi6CaKtaY",
    youtubeTitle: "How to Perform a Wheel Alignment",
    qChinese: "四轮定位中的包含角是什么？",
    optionsChinese: [
      "A) 外倾角和转向轴倾角(SAI)之和",
      "B) 主销后倾角和外倾角之和",
      "C) 左右前束之差",
      "D) 推力线与车辆中心线之间的角度"
    ],
    explanationChinese: "包含角是同一车轮上外倾角和转向轴倾角的总和。它用作诊断角度来确定主轴或转向节是否弯曲。如果SAI正确但包含角错误，则主轴弯曲。如果SAI也错误，则减震器塔或控制臂可能损坏。"
  },
  {
    id: 152,
    q: "A customer complains that the vehicle drifts to the right on a crowned road but tracks straight on a flat road. Is this normal?",
    options: [
      "A) No, this indicates incorrect caster",
      "B) No, this indicates incorrect camber",
      "C) Yes, this is normal due to road crown",
      "D) No, this indicates a thrust angle problem"
    ],
    answer: 2,
    explanation: "A slight drift toward the right on a crowned road is normal. Road crown is the slight slope built into roads for water drainage that causes vehicles to drift toward the lower (right) side. Many manufacturers specify slightly more positive caster on the left to compensate.",
    diagram: "",
    terms: ["caster", "camber", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=MXGi6CaKtaY",
    youtubeTitle: "How to Perform a Wheel Alignment",
    qChinese: "客户抱怨车辆在有路拱的道路上向右漂移，但在平坦路面上直行正常。这正常吗？",
    optionsChinese: [
      "A) 不正常，这表明主销后倾角不正确",
      "B) 不正常，这表明外倾角不正确",
      "C) 正常，这是由路拱引起的",
      "D) 不正常，这表明推力角有问题"
    ],
    explanationChinese: "在有路拱的道路上轻微向右漂移是正常的。路拱是道路为排水而设计的轻微坡度，导致车辆向较低的（右侧）漂移。许多制造商规定左侧稍大的正主销后倾角来补偿。"
  },
  {
    id: 153,
    q: "What is the result of too much toe-out on the front wheels?",
    options: [
      "A) Feathered tire wear with sharp edges pointing inward",
      "B) Wear on the outside edges only",
      "C) Center wear on both tires",
      "D) No effect on tire wear"
    ],
    answer: 0,
    explanation: "Excessive toe-out causes a feathered tire wear pattern, but the sharp edges of the tread blocks point inward (opposite of toe-in wear). The tires are pointing slightly outward but must travel straight, scrubbing the tread and creating the feathered pattern in the opposite direction.",
    diagram: "",
    terms: ["toe", "wheel_alignment", "tire_rotation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=MXGi6CaKtaY",
    youtubeTitle: "How to Perform a Wheel Alignment",
    qChinese: "前轮过大的外前束会导致什么结果？",
    optionsChinese: [
      "A) 锯齿状轮胎磨损，锐边朝内",
      "B) 仅外侧边缘磨损",
      "C) 两个轮胎中心磨损",
      "D) 对轮胎磨损无影响"
    ],
    explanationChinese: "过大的外前束导致锯齿状轮胎磨损，但胎面花纹块的锐边朝内（与内前束磨损相反）。轮胎略微向外指向但必须直线行驶，摩擦胎面并在相反方向产生锯齿状磨损。"
  },
  {
    id: 154,
    q: "After hitting a large pothole, a vehicle's steering wheel is now off-center but the vehicle tracks straight. What is the MOST likely cause?",
    options: [
      "A) A bent rim",
      "B) The front toe was knocked out of specification, shifting equally on both sides",
      "C) A broken coil spring",
      "D) A damaged TPMS sensor"
    ],
    answer: 1,
    explanation: "An off-center steering wheel with straight tracking after an impact typically means the toe setting was disturbed equally on both sides, or one tie rod was pushed. Total toe may still be in spec but is not equally distributed. A realignment adjusting individual toe will center the steering wheel.",
    diagram: "",
    terms: ["toe", "tie_rod", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=MXGi6CaKtaY",
    youtubeTitle: "How to Perform a Wheel Alignment",
    qChinese: "撞到大坑后，车辆方向盘偏移但车辆直行正常。最可能的原因是什么？",
    optionsChinese: [
      "A) 轮辋弯曲",
      "B) 前轮前束被撞出规格，两侧等量偏移",
      "C) 螺旋弹簧断裂",
      "D) TPMS传感器损坏"
    ],
    explanationChinese: "撞击后方向盘偏移但直行正常通常意味着两侧前束设定被等量扰动，或一个拉杆被推移。总前束可能仍在规格内但分布不均。通过调整各侧前束的四轮定位可以使方向盘回正。"
  },
  {
    id: 155,
    q: "What effect does negative camber have on tire wear?",
    options: [
      "A) Wear on the outside edge of the tire",
      "B) Wear on the inside edge of the tire",
      "C) Center wear on the tire",
      "D) Even wear across the tread"
    ],
    answer: 1,
    explanation: "Negative camber tilts the top of the tire inward toward the vehicle center. This places more load on the inside edge of the tire tread, causing accelerated wear on that edge. Slight negative camber is normal for handling, but excessive negative camber causes rapid inside edge wear.",
    diagram: "",
    terms: ["camber", "wheel_alignment", "tire_rotation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=MXGi6CaKtaY",
    youtubeTitle: "How to Perform a Wheel Alignment",
    qChinese: "负外倾角对轮胎磨损有什么影响？",
    optionsChinese: [
      "A) 轮胎外侧边缘磨损",
      "B) 轮胎内侧边缘磨损",
      "C) 轮胎中心磨损",
      "D) 胎面均匀磨损"
    ],
    explanationChinese: "负外倾角使轮胎顶部向车辆中心倾斜。这在轮胎胎面内侧边缘施加更多负载，导致该边缘加速磨损。轻微的负外倾角对操控是正常的，但过大的负外倾角会导致内侧边缘快速磨损。"
  },
  {
    id: 156,
    q: "What must be done before performing a wheel alignment on a vehicle?",
    options: [
      "A) Replace all four tires",
      "B) Inspect and correct any worn suspension and steering components",
      "C) Disconnect the battery",
      "D) Remove the spare tire"
    ],
    answer: 1,
    explanation: "Before performing an alignment, all suspension and steering components must be inspected and any worn parts replaced. Aligning a vehicle with worn ball joints, tie rod ends, or bushings is pointless because the alignment will not hold. Tire condition and pressures should also be checked.",
    diagram: "",
    terms: ["wheel_alignment", "ball_joint", "tie_rod", "control_arm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=MXGi6CaKtaY",
    youtubeTitle: "How to Perform a Wheel Alignment",
    qChinese: "在进行四轮定位之前必须做什么？",
    optionsChinese: [
      "A) 更换全部四条轮胎",
      "B) 检查并修复任何磨损的悬挂和转向部件",
      "C) 断开蓄电池",
      "D) 取下备胎"
    ],
    explanationChinese: "在进行定位之前，必须检查所有悬挂和转向部件并更换任何磨损的零件。在球头、拉杆端部或衬套磨损的情况下进行定位是无意义的，因为定位无法保持。还应检查轮胎状况和气压。"
  },
  {
    id: 157,
    q: "On a vehicle with adjustable camber, what is typically used to make the adjustment?",
    options: [
      "A) Shims, eccentric bolts, or slotted holes",
      "B) Adjusting the tie rod length",
      "C) Rotating the torsion bar key",
      "D) Adjusting the sway bar preload"
    ],
    answer: 0,
    explanation: "Camber is typically adjusted using shims between the upper control arm and frame, eccentric (cam) bolts at the control arm pivot or strut-to-knuckle connection, or slotted mounting holes. The specific method depends on the vehicle design. Tie rod adjustment changes toe, not camber.",
    diagram: "",
    terms: ["camber", "wheel_alignment", "control_arm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=MXGi6CaKtaY",
    youtubeTitle: "How to Perform a Wheel Alignment",
    qChinese: "在可调外倾角的车辆上，通常使用什么进行调整？",
    optionsChinese: [
      "A) 垫片、偏心螺栓或长圆孔",
      "B) 调整拉杆长度",
      "C) 旋转扭力杆键",
      "D) 调整稳定杆预载"
    ],
    explanationChinese: "外倾角通常使用上控制臂和车架之间的垫片、控制臂枢轴或支柱与转向节连接处的偏心（凸轮）螺栓或长圆安装孔来调整。具体方法取决于车辆设计。拉杆调整改变前束而非外倾角。"
  },
  {
    id: 158,
    q: "A vehicle has both front tires wearing rapidly on the inside edges. The camber readings are within specification. What else should be checked?",
    options: [
      "A) Caster angle",
      "B) Rear toe and thrust angle",
      "C) Tire pressure and negative camber at ride height under load",
      "D) Power steering fluid level"
    ],
    answer: 2,
    explanation: "If camber readings are in spec on the alignment machine but tires show inside edge wear, the loaded camber (with passengers and cargo) may be excessively negative. Also check tire pressures, as under-inflation causes both edges to wear. The vehicle should be aligned at its normal loaded condition.",
    diagram: "",
    terms: ["camber", "tire_pressure", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=MXGi6CaKtaY",
    youtubeTitle: "How to Perform a Wheel Alignment",
    qChinese: "车辆两个前轮胎内侧边缘快速磨损。外倾角读数在规格范围内。还应检查什么？",
    optionsChinese: [
      "A) 主销后倾角",
      "B) 后轮前束和推力角",
      "C) 轮胎气压和负载下实际车身高度时的负外倾角",
      "D) 助力转向液面"
    ],
    explanationChinese: "如果四轮定位仪上的外倾角读数在规格内但轮胎显示内侧边缘磨损，负载状态（有乘客和货物）下的外倾角可能过度偏负。还应检查轮胎气压，因为充气不足会导致两侧边缘磨损。车辆应在正常负载条件下进行定位。"
  },
  {
    id: 159,
    q: "What is the purpose of a toe-out on turns (turning radius) specification?",
    options: [
      "A) To ensure both front wheels turn the same angle",
      "B) To allow the inside wheel to turn a sharper angle than the outside wheel during a turn",
      "C) To maintain equal tire wear during turns",
      "D) To reduce power steering effort"
    ],
    answer: 1,
    explanation: "Toe-out on turns (Ackermann geometry) ensures the inside wheel turns at a sharper angle than the outside wheel during a turn. This is necessary because the inside wheel follows a smaller radius arc. This specification is not adjustable and is built into the steering arm angles.",
    diagram: "",
    terms: ["toe", "wheel_alignment", "tie_rod"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=MXGi6CaKtaY",
    youtubeTitle: "How to Perform a Wheel Alignment",
    qChinese: "转向时前束外展（转弯半径）规格的目的是什么？",
    optionsChinese: [
      "A) 确保两个前轮转动相同角度",
      "B) 允许转弯时内侧车轮比外侧车轮转动更大的角度",
      "C) 维持转弯时均匀的轮胎磨损",
      "D) 减少助力转向力度"
    ],
    explanationChinese: "转向时前束外展（阿克曼几何）确保转弯时内侧车轮比外侧车轮转动更大的角度。这是必要的，因为内侧车轮沿着更小半径的弧线行驶。此规格不可调，内置于转向臂角度中。"
  },
  {
    id: 160,
    q: "A vehicle has a setback condition on the front axle. What does this mean?",
    options: [
      "A) One front wheel is farther back than the other",
      "B) The steering wheel is set back too far from the driver",
      "C) The rear axle is shifted backward",
      "D) The camber is set to negative on both sides"
    ],
    answer: 0,
    explanation: "Setback means one front wheel is positioned farther back or forward than the other when viewed from above. This is usually caused by collision damage that shifted a subframe, cradle, or control arm. Setback affects caster readings and can cause a steering pull.",
    diagram: "",
    terms: ["caster", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=MXGi6CaKtaY",
    youtubeTitle: "How to Perform a Wheel Alignment",
    qChinese: "车辆前桥有回退现象。这意味着什么？",
    optionsChinese: [
      "A) 一个前轮比另一个更靠后",
      "B) 方向盘离驾驶员太远",
      "C) 后桥向后移位",
      "D) 两侧外倾角都设为负值"
    ],
    explanationChinese: "回退意味着从上方看一个前轮比另一个更靠前或靠后。这通常由碰撞损坏导致副车架、摇篮或控制臂移位引起。回退影响主销后倾角读数并可能导致转向跑偏。"
  },
  {
    id: 161,
    q: "When adjusting toe on a rack and pinion steering system, what component is turned?",
    options: [
      "A) The outer tie rod end",
      "B) The inner tie rod adjusting sleeve or outer tie rod jam nut area",
      "C) The rack housing",
      "D) The steering column coupling"
    ],
    answer: 1,
    explanation: "On rack and pinion systems, toe is adjusted by turning the inner tie rod or the adjusting sleeve where the inner and outer tie rods thread together. Loosening the jam nut and rotating the inner tie rod changes its effective length, which changes the toe angle of that wheel.",
    diagram: "",
    terms: ["toe", "tie_rod", "rack_and_pinion"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=MXGi6CaKtaY",
    youtubeTitle: "How to Perform a Wheel Alignment",
    qChinese: "在齿条齿轮转向系统上调整前束时，转动哪个部件？",
    optionsChinese: [
      "A) 外拉杆端部",
      "B) 内拉杆调整套筒或外拉杆锁紧螺母区域",
      "C) 齿条壳体",
      "D) 转向柱联轴器"
    ],
    explanationChinese: "在齿条齿轮系统上，通过转动内拉杆或内外拉杆螺纹连接处的调整套筒来调整前束。松开锁紧螺母并旋转内拉杆改变其有效长度，从而改变该车轮的前束角度。"
  },
  {
    id: 162,
    q: "A vehicle has a cradle (subframe) that has shifted 5mm to the right after a collision repair. What alignment angles will be affected?",
    options: [
      "A) Toe only",
      "B) Camber, caster, and SAI on both sides",
      "C) Thrust angle only",
      "D) Ride height only"
    ],
    answer: 1,
    explanation: "A shifted cradle or subframe moves the lower suspension mounting points, affecting camber, caster, and SAI. Since the steering rack is also mounted to the subframe, the steering center will shift. The subframe must be properly repositioned before alignment can be performed correctly.",
    diagram: "",
    terms: ["camber", "caster", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=MXGi6CaKtaY",
    youtubeTitle: "How to Perform a Wheel Alignment",
    qChinese: "碰撞修复后车辆副车架向右移位5毫米。哪些定位角度会受影响？",
    optionsChinese: [
      "A) 仅前束",
      "B) 两侧的外倾角、主销后倾角和SAI",
      "C) 仅推力角",
      "D) 仅车身高度"
    ],
    explanationChinese: "移位的副车架移动了下悬挂安装点，影响外倾角、主销后倾角和SAI。由于转向齿条也安装在副车架上，转向中心也会移位。必须在正确定位副车架后才能正确进行四轮定位。"
  },
  {
    id: 163,
    q: "What alignment angle is NOT adjustable on most vehicles and is used only for diagnosis?",
    options: [
      "A) Camber",
      "B) Toe",
      "C) SAI (Steering Axis Inclination)",
      "D) Caster"
    ],
    answer: 2,
    explanation: "SAI (Steering Axis Inclination) is determined by the physical geometry of the knuckle, ball joints, and suspension mounting points. It is not adjustable and is used as a diagnostic angle to identify bent or damaged suspension components by comparing left and right readings.",
    diagram: "",
    terms: ["wheel_alignment", "camber", "caster"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=MXGi6CaKtaY",
    youtubeTitle: "How to Perform a Wheel Alignment",
    qChinese: "哪个定位角度在大多数车辆上不可调，仅用于诊断？",
    optionsChinese: [
      "A) 外倾角",
      "B) 前束",
      "C) 转向轴倾角(SAI)",
      "D) 主销后倾角"
    ],
    explanationChinese: "转向轴倾角(SAI)由转向节、球头和悬挂安装点的物理几何形状决定。它不可调，用作诊断角度，通过比较左右读数来识别弯曲或损坏的悬挂部件。"
  },
  {
    id: 164,
    q: "A vehicle needs a four-wheel alignment. The rear alignment is adjusted first. Why?",
    options: [
      "A) The rear tires wear faster",
      "B) The rear alignment establishes the thrust angle that the front must reference",
      "C) The rear shocks are always replaced first",
      "D) It is easier to access the rear adjustments"
    ],
    answer: 1,
    explanation: "On a four-wheel alignment, the rear is adjusted first to set the thrust angle. The front alignment is then referenced to the rear thrust angle so the steering wheel is centered and the vehicle tracks straight. Adjusting the front first without a correct rear reference would result in a crooked steering wheel.",
    diagram: "",
    terms: ["thrust_angle", "toe", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=MXGi6CaKtaY",
    youtubeTitle: "How to Perform a Wheel Alignment",
    qChinese: "车辆需要四轮定位。先调整后轮定位。为什么？",
    optionsChinese: [
      "A) 后轮胎磨损更快",
      "B) 后部定位确定前部必须参考的推力角",
      "C) 后减震器总是先更换",
      "D) 后部调整更容易操作"
    ],
    explanationChinese: "在四轮定位中，先调整后部以设定推力角。然后参照后部推力角调整前部定位，使方向盘居中且车辆直行。不先设定正确的后部参考而调整前部会导致方向盘偏斜。"
  },
  {
    id: 165,
    q: "Unequal caster side to side will cause:",
    options: [
      "A) Rapid tire wear on both front tires",
      "B) The vehicle to pull toward the side with less positive caster",
      "C) Excessive body roll",
      "D) A vibration at highway speed"
    ],
    answer: 1,
    explanation: "Unequal caster causes the vehicle to pull toward the side with less positive caster. The side with more caster creates more steering effort, so the vehicle naturally drifts toward the easier-turning side. Caster does not directly cause tire wear but significantly affects directional stability.",
    diagram: "",
    terms: ["caster", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=MXGi6CaKtaY",
    youtubeTitle: "How to Perform a Wheel Alignment",
    qChinese: "两侧不等的主销后倾角会导致：",
    optionsChinese: [
      "A) 两个前轮胎快速磨损",
      "B) 车辆向正主销后倾角较小的一侧跑偏",
      "C) 车身侧倾过大",
      "D) 高速公路速度时振动"
    ],
    explanationChinese: "不等的主销后倾角导致车辆向正主销后倾角较小的一侧跑偏。主销后倾角较大的一侧产生更大的转向力，因此车辆自然向转向更轻松的一侧漂移。主销后倾角不直接导致轮胎磨损但显著影响方向稳定性。"
  },
  // ===== WHEEL BEARINGS AND TIRES II (Questions 166-200) =====
  {
    id: 166,
    q: "A humming noise from the front of the vehicle changes pitch when the steering wheel is turned slightly. What is the MOST likely cause?",
    options: [
      "A) A worn power steering pump",
      "B) A worn front wheel bearing",
      "C) Unbalanced front tires",
      "D) A worn CV joint"
    ],
    answer: 1,
    explanation: "A humming or growling noise that changes pitch when the steering wheel is turned slightly indicates a worn wheel bearing. Turning the wheel shifts the load between bearings, changing the noise. The noise gets louder when turning away from the bad bearing side and quieter when turning toward it.",
    diagram: "",
    terms: ["wheel_bearing"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=bNEJzSIBxFQ",
    youtubeTitle: "Wheel Bearing Noise and Diagnosis",
    qChinese: "车辆前部的嗡嗡声在方向盘轻微转动时音调变化。最可能的原因是什么？",
    optionsChinese: [
      "A) 助力转向泵磨损",
      "B) 前轮轴承磨损",
      "C) 前轮胎不平衡",
      "D) CV万向节磨损"
    ],
    explanationChinese: "方向盘轻微转动时音调变化的嗡嗡声或咆哮声表明车轮轴承磨损。转动方向盘在轴承之间转移负载，改变噪音。向故障轴承反方向转动时噪音更大，向故障侧转动时更安静。"
  },
  {
    id: 167,
    q: "What is the correct procedure for adjusting a serviceable tapered roller wheel bearing?",
    options: [
      "A) Tighten the spindle nut to 25 ft-lbs and back off 1/4 turn",
      "B) Tighten the spindle nut while rotating the wheel, back off, then tighten finger-tight and install cotter pin",
      "C) Tighten the spindle nut until there is zero end play",
      "D) Use a torque wrench to tighten to 100 ft-lbs"
    ],
    answer: 1,
    explanation: "The standard procedure is to tighten the spindle nut while rotating the wheel to seat the bearings, then back off the nut and retighten to finger-tight (or per manufacturer specification). The cotter pin or lock nut is then installed. The goal is slight end play, not preload.",
    diagram: "",
    terms: ["wheel_bearing"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=bNEJzSIBxFQ",
    youtubeTitle: "Wheel Bearing Noise and Diagnosis",
    qChinese: "调整可维修锥形滚子车轮轴承的正确程序是什么？",
    optionsChinese: [
      "A) 将主轴螺母拧紧至25英尺磅然后退回1/4圈",
      "B) 旋转车轮同时拧紧主轴螺母，退回，然后用手拧紧并安装开口销",
      "C) 拧紧主轴螺母直到没有端部间隙",
      "D) 使用扭力扳手拧紧至100英尺磅"
    ],
    explanationChinese: "标准程序是在旋转车轮的同时拧紧主轴螺母以使轴承就位，然后退回螺母并重新拧到手紧（或按制造商规格）。然后安装开口销或锁紧螺母。目标是保持轻微的端部间隙，而非预载。"
  },
  {
    id: 168,
    q: "A sealed hub bearing assembly has excessive play. What is the correct repair?",
    options: [
      "A) Repack the bearing with fresh grease",
      "B) Tighten the axle nut to remove the play",
      "C) Replace the entire hub bearing assembly",
      "D) Add shims behind the bearing race"
    ],
    answer: 2,
    explanation: "Sealed hub bearing assemblies are not serviceable. They cannot be repacked, adjusted, or repaired. When a sealed hub bearing develops excessive play or noise, the entire assembly must be replaced as a unit. They are common on most modern front-wheel-drive and many rear-wheel-drive vehicles.",
    diagram: "",
    terms: ["wheel_bearing"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=bNEJzSIBxFQ",
    youtubeTitle: "Wheel Bearing Noise and Diagnosis",
    qChinese: "密封式轮毂轴承总成有过大间隙。正确的维修方法是什么？",
    optionsChinese: [
      "A) 用新润滑脂重新填充轴承",
      "B) 拧紧车轴螺母以消除间隙",
      "C) 更换整个轮毂轴承总成",
      "D) 在轴承座圈后面加垫片"
    ],
    explanationChinese: "密封式轮毂轴承总成不可维修。不能重新填充润滑脂、调整或修理。当密封式轮毂轴承出现过大间隙或噪音时，必须整体更换。它们常见于大多数现代前驱和许多后驱车辆。"
  },
  {
    id: 169,
    q: "How is a front wheel bearing typically checked for play?",
    options: [
      "A) Spin the wheel and listen for noise",
      "B) Grasp the tire at 12 and 6 o'clock and rock it in and out while checking for movement at the bearing",
      "C) Measure the tire tread depth",
      "D) Check the brake pad thickness"
    ],
    answer: 1,
    explanation: "To check a wheel bearing for play, raise the vehicle and grasp the tire at 12 and 6 o'clock positions. Rock the tire in and out (top to bottom). Any perceptible movement indicates bearing wear. Use a dial indicator for precise measurement. Rocking at 3 and 9 checks tie rod play.",
    diagram: "",
    terms: ["wheel_bearing", "ball_joint"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=bNEJzSIBxFQ",
    youtubeTitle: "Wheel Bearing Noise and Diagnosis",
    qChinese: "前轮轴承通常如何检查间隙？",
    optionsChinese: [
      "A) 转动车轮听是否有噪音",
      "B) 在12点和6点位置抓住轮胎前后摇晃，同时检查轴承处的运动",
      "C) 测量轮胎胎面深度",
      "D) 检查刹车片厚度"
    ],
    explanationChinese: "检查车轮轴承间隙时，举升车辆并在12点和6点位置抓住轮胎。前后摇晃（上下方向）。任何可感知的运动都表明轴承磨损。使用百分表进行精确测量。在3点和9点方向摇晃是检查拉杆间隙。"
  },
  {
    id: 170,
    q: "A direct TPMS system uses sensors mounted where?",
    options: [
      "A) On the vehicle body near each wheel well",
      "B) Inside each tire, usually attached to the valve stem",
      "C) In the engine compartment",
      "D) On the instrument cluster"
    ],
    answer: 1,
    explanation: "Direct TPMS systems use individual pressure sensors mounted inside each tire, typically attached to the valve stem assembly. Each sensor transmits tire pressure and temperature data wirelessly to the TPMS receiver module. These sensors require battery replacement or complete sensor replacement over time.",
    diagram: "",
    terms: ["tpms", "tire_pressure"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "直接式TPMS系统使用安装在哪里的传感器？",
    optionsChinese: [
      "A) 在每个轮拱附近的车身上",
      "B) 在每个轮胎内部，通常连接在气门嘴上",
      "C) 在发动机舱内",
      "D) 在仪表盘上"
    ],
    explanationChinese: "直接式TPMS系统在每个轮胎内部使用单独的压力传感器，通常连接在气门嘴总成上。每个传感器以无线方式将轮胎压力和温度数据传输到TPMS接收模块。这些传感器随时间需要更换电池或完全更换传感器。"
  },
  {
    id: 171,
    q: "After a tire rotation, the TPMS warning light comes on. What is the MOST likely cause?",
    options: [
      "A) The tire pressures are incorrect",
      "B) The TPMS sensors need to be relearned to their new positions",
      "C) The TPMS sensors are damaged",
      "D) The TPMS module has failed"
    ],
    answer: 1,
    explanation: "After rotating tires on a direct TPMS system, the sensors move to different positions. The TPMS module must relearn which sensor is at which location. Most vehicles require a relearn procedure using a TPMS tool or a specific drive cycle to update the sensor positions.",
    diagram: "",
    terms: ["tpms", "tire_rotation", "tire_pressure"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "轮胎换位后TPMS警告灯亮起。最可能的原因是什么？",
    optionsChinese: [
      "A) 轮胎气压不正确",
      "B) TPMS传感器需要在新位置重新学习",
      "C) TPMS传感器损坏",
      "D) TPMS模块故障"
    ],
    explanationChinese: "在直接式TPMS系统上换位轮胎后，传感器移动到不同位置。TPMS模块必须重新学习哪个传感器在哪个位置。大多数车辆需要使用TPMS工具或特定行驶循环执行重新学习程序来更新传感器位置。"
  },
  {
    id: 172,
    q: "What is the difference between a direct and indirect TPMS system?",
    options: [
      "A) Direct measures pressure with sensors; indirect uses ABS wheel speed sensors to detect pressure differences",
      "B) Direct is installed at the factory; indirect is aftermarket",
      "C) Direct monitors only front tires; indirect monitors all four",
      "D) There is no functional difference"
    ],
    answer: 0,
    explanation: "Direct TPMS uses pressure sensors inside each tire that transmit actual pressure readings. Indirect TPMS uses the ABS wheel speed sensors to detect rotational speed differences, since an under-inflated tire has a smaller effective rolling radius and spins faster than a properly inflated tire.",
    diagram: "",
    terms: ["tpms", "tire_pressure"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "直接式和间接式TPMS系统有什么区别？",
    optionsChinese: [
      "A) 直接式用传感器测量压力；间接式用ABS车轮转速传感器检测压力差异",
      "B) 直接式是工厂安装的；间接式是后装市场的",
      "C) 直接式仅监测前轮胎；间接式监测所有四个",
      "D) 没有功能差异"
    ],
    explanationChinese: "直接式TPMS在每个轮胎内使用压力传感器传输实际压力读数。间接式TPMS使用ABS车轮转速传感器检测旋转速度差异，因为充气不足的轮胎有效滚动半径更小，转速比正常充气的轮胎更快。"
  },
  {
    id: 173,
    q: "A tire shows excessive wear in the center of the tread with normal wear on the edges. What is the cause?",
    options: [
      "A) Under-inflation",
      "B) Over-inflation",
      "C) Excessive negative camber",
      "D) Worn shock absorbers"
    ],
    answer: 1,
    explanation: "Center tread wear is caused by over-inflation. When a tire is over-inflated, the center of the tread bulges outward and carries more load than the edges. This concentrates wear in the center. Under-inflation causes both edge wear. Camber causes single-edge wear.",
    diagram: "",
    terms: ["tire_pressure", "tire_rotation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "轮胎胎面中心过度磨损而边缘磨损正常。原因是什么？",
    optionsChinese: [
      "A) 充气不足",
      "B) 过度充气",
      "C) 过大的负外倾角",
      "D) 减震器磨损"
    ],
    explanationChinese: "胎面中心磨损是由过度充气引起的。当轮胎过度充气时，胎面中心向外凸出并承载比边缘更多的负荷。这导致磨损集中在中心。充气不足导致两侧边缘磨损。外倾角导致单侧边缘磨损。"
  },
  {
    id: 174,
    q: "A tire shows wear on both the inside and outside edges but the center tread is normal. What is the cause?",
    options: [
      "A) Over-inflation",
      "B) Under-inflation",
      "C) Excessive toe",
      "D) Worn wheel bearings"
    ],
    answer: 1,
    explanation: "Both-edge wear is caused by under-inflation. When a tire is under-inflated, the sidewalls flex inward and the edges of the tread carry more load than the center. This wears both edges while the center remains relatively normal. Correct tire pressure prevents this wear pattern.",
    diagram: "",
    terms: ["tire_pressure", "tire_rotation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "轮胎内外两侧边缘磨损但中心胎面正常。原因是什么？",
    optionsChinese: [
      "A) 过度充气",
      "B) 充气不足",
      "C) 过大的前束",
      "D) 车轮轴承磨损"
    ],
    explanationChinese: "两侧边缘磨损是由充气不足引起的。当轮胎充气不足时，胎壁向内弯曲，胎面边缘承载比中心更多的负荷。这导致两侧边缘磨损而中心相对正常。正确的轮胎气压可以防止这种磨损模式。"
  },
  {
    id: 175,
    q: "What is the legal minimum tread depth for passenger tires in most US states?",
    options: [
      "A) 1/32 inch",
      "B) 2/32 inch (1/16 inch)",
      "C) 4/32 inch",
      "D) 6/32 inch"
    ],
    answer: 1,
    explanation: "The legal minimum tread depth for passenger tires in most US states is 2/32 inch (1/16 inch). Tread wear indicators (wear bars) molded into the tire become flush with the tread at this depth, providing a visual indication that the tire has reached its minimum legal tread depth.",
    diagram: "",
    terms: ["tire_pressure", "tire_rotation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "美国大多数州乘用车轮胎的法定最小胎面深度是多少？",
    optionsChinese: [
      "A) 1/32英寸",
      "B) 2/32英寸（1/16英寸）",
      "C) 4/32英寸",
      "D) 6/32英寸"
    ],
    explanationChinese: "美国大多数州乘用车轮胎的法定最小胎面深度为2/32英寸（1/16英寸）。模制在轮胎中的胎面磨损指示器（磨损条）在此深度时与胎面齐平，提供轮胎已达到最小法定胎面深度的视觉指示。"
  },
  {
    id: 176,
    q: "Technician A says tire rotation should follow the vehicle manufacturer's recommended pattern. Technician B says directional tires can only be rotated front to rear on the same side. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both are correct. Tire rotation should follow the manufacturer's recommended pattern for optimal wear. Directional tires have a specific rotation direction molded into the sidewall and can only be moved front to rear on the same side. Switching sides would reverse the rotation direction.",
    diagram: "",
    terms: ["tire_rotation", "tire_pressure"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "技师A说轮胎换位应遵循车辆制造商推荐的模式。技师B说方向性轮胎只能在同侧前后换位。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位都正确。轮胎换位应遵循制造商推荐的模式以获得最佳磨损。方向性轮胎在胎壁上模制有特定的旋转方向，只能在同侧前后移动。换侧会逆转旋转方向。"
  },
  {
    id: 177,
    q: "What is the MOST important safety concern when inflating a tire?",
    options: [
      "A) The tire may get too hot",
      "B) The bead may break loose from the rim",
      "C) Never exceed the maximum pressure listed on the tire sidewall",
      "D) Always use nitrogen instead of air"
    ],
    answer: 2,
    explanation: "Never exceed the maximum pressure listed on the tire sidewall. Over-inflating a tire beyond its rated capacity can cause the tire to explode, resulting in serious injury or death. When seating beads, never exceed 40 PSI. Use a clip-on chuck and stand back from the tire.",
    diagram: "",
    terms: ["tire_pressure"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "给轮胎充气时最重要的安全注意事项是什么？",
    optionsChinese: [
      "A) 轮胎可能变得过热",
      "B) 胎圈可能从轮辋上脱落",
      "C) 切勿超过轮胎侧壁上标注的最大压力",
      "D) 始终使用氮气而非空气"
    ],
    explanationChinese: "切勿超过轮胎侧壁上标注的最大压力。超过额定容量充气可能导致轮胎爆炸，造成严重伤害甚至死亡。安装胎圈时，切勿超过40 PSI。使用夹式充气嘴并远离轮胎。"
  },
  {
    id: 178,
    q: "Where is the recommended tire pressure specification for a vehicle found?",
    options: [
      "A) On the tire sidewall",
      "B) On the vehicle door jamb placard or owner's manual",
      "C) On the wheel rim",
      "D) On the valve stem cap"
    ],
    answer: 1,
    explanation: "The recommended tire inflation pressure is found on the vehicle door jamb placard (usually the driver's door) or in the owner's manual. The pressure on the tire sidewall is the maximum pressure for the tire, not the recommended operating pressure for the specific vehicle.",
    diagram: "",
    terms: ["tire_pressure"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "车辆的推荐轮胎气压规格在哪里可以找到？",
    optionsChinese: [
      "A) 在轮胎侧壁上",
      "B) 在车辆门框标牌或车主手册上",
      "C) 在轮辋上",
      "D) 在气门帽上"
    ],
    explanationChinese: "推荐的轮胎充气压力在车辆门框标牌（通常在驾驶员侧门）或车主手册中找到。轮胎侧壁上的压力是轮胎的最大压力，不是特定车辆的推荐操作压力。"
  },
  {
    id: 179,
    q: "A customer reports a shimmy or vibration in the steering wheel at 55-65 mph that goes away at other speeds. The tires are in good condition. What should be done FIRST?",
    options: [
      "A) Replace the front struts",
      "B) Check the wheel balance",
      "C) Perform a wheel alignment",
      "D) Replace the tie rod ends"
    ],
    answer: 1,
    explanation: "A speed-specific vibration felt in the steering wheel is most commonly caused by a tire or wheel balance issue. An out-of-balance tire creates a vibration that occurs at a specific speed range. Checking and correcting wheel balance is the first and simplest diagnostic step.",
    diagram: "",
    terms: ["tire_rotation", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "客户报告方向盘在55-65英里/小时时有抖动或振动，其他速度下消失。轮胎状况良好。应首先做什么？",
    optionsChinese: [
      "A) 更换前支柱",
      "B) 检查车轮平衡",
      "C) 进行四轮定位",
      "D) 更换拉杆端部"
    ],
    explanationChinese: "方向盘上感觉到的与特定速度相关的振动最常见的原因是轮胎或车轮平衡问题。不平衡的轮胎产生在特定速度范围内出现的振动。检查和修正车轮平衡是最先且最简单的诊断步骤。"
  },
  {
    id: 180,
    q: "What does a TPMS warning light that flashes for 60-90 seconds then stays on solid indicate?",
    options: [
      "A) Low tire pressure in one or more tires",
      "B) A TPMS system malfunction (faulty sensor, dead battery, or communication error)",
      "C) The tires need to be rotated",
      "D) The TPMS system is initializing"
    ],
    answer: 1,
    explanation: "A TPMS light that flashes for 60-90 seconds at startup and then remains on solid indicates a system malfunction, not low tire pressure. This can be caused by a dead sensor battery, a missing sensor, or a communication error. A steady light without flashing indicates low pressure.",
    diagram: "",
    terms: ["tpms", "tire_pressure"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "TPMS警告灯闪烁60-90秒然后常亮表示什么？",
    optionsChinese: [
      "A) 一个或多个轮胎气压偏低",
      "B) TPMS系统故障（传感器故障、电池耗尽或通信错误）",
      "C) 轮胎需要换位",
      "D) TPMS系统正在初始化"
    ],
    explanationChinese: "TPMS灯在启动时闪烁60-90秒然后常亮表示系统故障，而非气压偏低。可能由传感器电池耗尽、传感器缺失或通信错误引起。不闪烁的常亮灯表示气压偏低。"
  },
  {
    id: 181,
    q: "A lug nut should be tightened to the manufacturer's specified torque using what pattern?",
    options: [
      "A) Clockwise around the wheel",
      "B) Counterclockwise around the wheel",
      "C) A star (crisscross) pattern",
      "D) Any order is acceptable"
    ],
    answer: 2,
    explanation: "Lug nuts must be tightened in a star (crisscross) pattern to ensure even clamping force across the wheel. Tightening in a circular pattern can warp the brake rotor and cause uneven wheel seating. Each nut should be gradually tightened in multiple passes to the final torque specification.",
    diagram: "",
    terms: ["lug_nut_torque", "tire_rotation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "轮毂螺母应使用什么顺序拧紧到制造商指定的扭矩？",
    optionsChinese: [
      "A) 围绕车轮顺时针方向",
      "B) 围绕车轮逆时针方向",
      "C) 星形（交叉）顺序",
      "D) 任何顺序都可以"
    ],
    explanationChinese: "轮毂螺母必须以星形（交叉）顺序拧紧，以确保车轮上的夹紧力均匀。按圆形顺序拧紧可能导致制动盘变形和车轮贴合不均。每个螺母应分多次逐渐拧紧至最终扭矩规格。"
  },
  {
    id: 182,
    q: "What can happen if lug nuts are over-torqued with an impact wrench?",
    options: [
      "A) The wheel will come loose",
      "B) The brake rotor can warp and the wheel studs can stretch or break",
      "C) The tire will lose air pressure",
      "D) The wheel bearing will fail"
    ],
    answer: 1,
    explanation: "Over-torquing lug nuts can warp brake rotors, stretch or break wheel studs, and damage the wheel. Warped rotors cause a pulsation felt in the brake pedal. Always use a calibrated torque wrench for final tightening and never rely solely on an impact wrench for final torque.",
    diagram: "",
    terms: ["lug_nut_torque"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "使用冲击扳手过度拧紧轮毂螺母会发生什么？",
    optionsChinese: [
      "A) 车轮会松脱",
      "B) 制动盘可能变形且轮毂螺栓可能拉伸或断裂",
      "C) 轮胎会漏气",
      "D) 车轮轴承会失效"
    ],
    explanationChinese: "过度拧紧轮毂螺母可能导致制动盘变形、轮毂螺栓拉伸或断裂以及车轮损坏。变形的制动盘导致制动踏板产生脉动感。最终拧紧时应始终使用校准的扭力扳手，不要仅依赖冲击扳手进行最终力矩紧固。"
  },
  {
    id: 183,
    q: "A vehicle with rack and pinion steering has fluid leaking from the passenger side inner tie rod boot. What does this indicate?",
    options: [
      "A) The outer tie rod is worn",
      "B) The rack seal on that side is leaking",
      "C) The power steering pump is failing",
      "D) The boot itself is torn and letting in water"
    ],
    answer: 1,
    explanation: "Power steering fluid leaking from inside the inner tie rod boot indicates a leaking rack seal on that side. The rack seals prevent fluid from leaking out of the rack housing. When they fail, fluid accumulates in the boot. The rack typically needs to be replaced or rebuilt.",
    diagram: "",
    terms: ["rack_and_pinion", "tie_rod", "power_steering_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rack_and_pinion_animation.gif/400px-Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=YDl1UxCrEhM",
    youtubeTitle: "Power Steering System Explained",
    qChinese: "一辆齿条齿轮转向车辆副驾驶侧内拉杆防尘套处漏液。这表明什么？",
    optionsChinese: [
      "A) 外拉杆磨损",
      "B) 该侧齿条密封件泄漏",
      "C) 助力转向泵故障",
      "D) 防尘套本身破裂进水"
    ],
    explanationChinese: "内拉杆防尘套内部泄漏助力转向液表明该侧齿条密封件泄漏。齿条密封件防止液体从齿条壳体泄漏。当密封件失效时，液体在防尘套内积聚。齿条通常需要更换或翻修。"
  },
  {
    id: 184,
    q: "Which tire wear pattern indicates a bent wheel or out-of-round tire?",
    options: [
      "A) Center wear",
      "B) Edge wear on one side only",
      "C) Flat spots or patchy uneven wear in one area of the tread",
      "D) Feathered wear across the tread"
    ],
    answer: 2,
    explanation: "A bent wheel or out-of-round tire causes localized flat spots or patchy wear because the tire does not maintain consistent contact with the road surface. One section of the tread receives more pressure and wears faster, creating an isolated area of heavy wear.",
    diagram: "",
    terms: ["tire_rotation", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "哪种轮胎磨损模式表明车轮弯曲或轮胎不圆？",
    optionsChinese: [
      "A) 中心磨损",
      "B) 仅一侧边缘磨损",
      "C) 胎面某一区域出现平斑或不均匀的斑块状磨损",
      "D) 胎面上的锯齿状磨损"
    ],
    explanationChinese: "弯曲的车轮或不圆的轮胎导致局部平斑或斑块状磨损，因为轮胎无法与路面保持一致的接触。胎面的某一部分受到更多压力并磨损更快，形成一个孤立的严重磨损区域。"
  },
  {
    id: 185,
    q: "A vehicle has a vibration that gets worse as speed increases and does not change with engine load. What is the MOST likely cause?",
    options: [
      "A) An engine misfire",
      "B) A transmission problem",
      "C) A tire or wheel imbalance or a bent rim",
      "D) A worn engine mount"
    ],
    answer: 2,
    explanation: "A vibration that increases proportionally with vehicle speed and is unaffected by engine load (accelerating vs. coasting) is related to the wheels and tires. An imbalanced tire, bent rim, or tire defect creates a vibration that worsens with speed. Engine-related vibrations change with load.",
    diagram: "",
    terms: ["tire_rotation", "wheel_alignment", "tire_pressure"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "车辆有一种随速度增加而加剧的振动，与发动机负载无关。最可能的原因是什么？",
    optionsChinese: [
      "A) 发动机失火",
      "B) 变速箱问题",
      "C) 轮胎或车轮不平衡或轮辋弯曲",
      "D) 发动机支撑座磨损"
    ],
    explanationChinese: "随车辆速度成比例增加且不受发动机负载（加速与滑行）影响的振动与车轮和轮胎有关。不平衡的轮胎、弯曲的轮辋或轮胎缺陷会产生随速度加剧的振动。与发动机相关的振动随负载变化。"
  },
  {
    id: 186,
    q: "Technician A says a TPMS sensor battery can be replaced separately. Technician B says most TPMS sensors require complete replacement when the battery dies. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 1,
    explanation: "Most TPMS sensors have sealed, non-replaceable batteries. When the battery dies (typically after 5-10 years), the entire sensor must be replaced. The sensor is then programmed to the vehicle during a relearn procedure. A few aftermarket sensors have replaceable batteries but most OEM sensors do not.",
    diagram: "",
    terms: ["tpms", "tire_pressure"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "技师A说TPMS传感器电池可以单独更换。技师B说大多数TPMS传感器在电池耗尽时需要完全更换。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "大多数TPMS传感器具有密封的不可更换电池。当电池耗尽（通常5-10年后），必须更换整个传感器。然后在重新学习程序中将传感器编程到车辆上。少数售后传感器有可更换电池，但大多数原厂传感器没有。"
  },
  {
    id: 187,
    q: "What causes a vehicle to dog track (rear end offset from the front)?",
    options: [
      "A) Excessive positive caster",
      "B) A non-zero thrust angle caused by misaligned rear wheels",
      "C) Excessive negative camber on the front",
      "D) Over-inflated front tires"
    ],
    answer: 1,
    explanation: "Dog tracking occurs when the rear wheels point in a different direction than the vehicle's centerline, creating a non-zero thrust angle. The rear of the vehicle travels offset from the front. Common causes include a shifted rear axle, rear toe misalignment, or a bent rear suspension component.",
    diagram: "",
    terms: ["thrust_angle", "toe", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=MXGi6CaKtaY",
    youtubeTitle: "How to Perform a Wheel Alignment",
    qChinese: "什么导致车辆蟹行（后部与前部偏移）？",
    optionsChinese: [
      "A) 过大的正主销后倾角",
      "B) 后轮定位不正导致的非零推力角",
      "C) 前部过大的负外倾角",
      "D) 前轮胎过度充气"
    ],
    explanationChinese: "蟹行发生在后轮指向与车辆中心线不同的方向，产生非零推力角。车辆后部与前部偏移行驶。常见原因包括后桥移位、后轮前束不正或后悬挂部件弯曲。"
  },
  {
    id: 188,
    q: "When mounting a tire on a rim, what is applied to the tire bead to help seat it properly?",
    options: [
      "A) Engine oil",
      "B) Tire mounting lubricant (bead lubricant)",
      "C) Brake cleaner",
      "D) Silicone spray"
    ],
    answer: 1,
    explanation: "Tire mounting lubricant (bead lubricant) is applied to the tire bead and rim flange to allow the bead to slide into position during mounting and inflation. Using the wrong lubricant can damage the rubber or prevent proper bead seating. Never use petroleum-based products.",
    diagram: "",
    terms: ["tire_pressure", "tire_rotation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "将轮胎安装到轮辋上时，在轮胎胎圈上涂抹什么以帮助正确就位？",
    optionsChinese: [
      "A) 机油",
      "B) 轮胎安装润滑剂（胎圈润滑剂）",
      "C) 制动器清洁剂",
      "D) 硅喷雾"
    ],
    explanationChinese: "轮胎安装润滑剂（胎圈润滑剂）涂在轮胎胎圈和轮辋边缘上，使胎圈在安装和充气时能滑入正确位置。使用错误的润滑剂可能损坏橡胶或阻碍胎圈正确就位。切勿使用石油基产品。"
  },
  {
    id: 189,
    q: "A vehicle with electronic power steering (EPS) requires what special procedure after certain repairs?",
    options: [
      "A) Bleeding the power steering system",
      "B) A steering angle sensor calibration or zero-point reset",
      "C) Adjusting the drive belt tension",
      "D) Flushing the power steering fluid"
    ],
    answer: 1,
    explanation: "After alignment, steering component replacement, or certain other repairs, many EPS systems require a steering angle sensor calibration or zero-point reset. This tells the EPS module where straight-ahead is. Without calibration, the EPS may provide uneven assist or trigger warning lights.",
    diagram: "",
    terms: ["steering_gear", "rack_and_pinion", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rack_and_pinion_animation.gif/400px-Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=BnEE0ORchHM",
    youtubeTitle: "Electronic Power Steering Explained",
    qChinese: "配备电子助力转向(EPS)的车辆在某些维修后需要什么特殊程序？",
    optionsChinese: [
      "A) 排放助力转向系统空气",
      "B) 转向角传感器校准或零点重置",
      "C) 调整驱动皮带张力",
      "D) 冲洗助力转向液"
    ],
    explanationChinese: "在定位、转向部件更换或某些其他维修后，许多EPS系统需要转向角传感器校准或零点重置。这告诉EPS模块直行位置在哪里。不进行校准，EPS可能提供不均匀的助力或触发警告灯。"
  },
  {
    id: 190,
    q: "A vehicle has one tire that is wearing much faster than the others. All alignment angles are within specification. What should be checked?",
    options: [
      "A) The engine oil level",
      "B) The brake on that wheel for dragging",
      "C) The air filter",
      "D) The battery voltage"
    ],
    answer: 1,
    explanation: "If alignment is correct and one tire wears faster than the others, a dragging brake on that wheel is a likely cause. A seized caliper slide pin, collapsed brake hose, or sticking parking brake cable can cause constant friction on one wheel, generating heat and accelerating tire wear.",
    diagram: "",
    terms: ["tire_rotation", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "一辆车有一个轮胎比其他轮胎磨损快得多。所有定位角度都在规格范围内。应检查什么？",
    optionsChinese: [
      "A) 发动机油位",
      "B) 该车轮的制动器是否拖滞",
      "C) 空气滤清器",
      "D) 蓄电池电压"
    ],
    explanationChinese: "如果定位正确但一个轮胎比其他轮胎磨损更快，该车轮的制动拖滞是可能的原因。卡滞的卡钳滑销、塌陷的制动软管或粘滞的驻车制动拉线可能导致一个车轮持续摩擦，产生热量并加速轮胎磨损。"
  },
  {
    id: 191,
    q: "Technician A says ride height must be checked before performing a wheel alignment. Technician B says sagging springs can affect alignment readings. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both are correct. Ride height must be within specification before performing an alignment because all alignment angles change with ride height. Sagging springs lower the ride height and shift camber, caster, and toe readings. Aligning a vehicle with incorrect ride height will produce incorrect settings.",
    diagram: "",
    terms: ["wheel_alignment", "coil_spring", "camber", "caster"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=MXGi6CaKtaY",
    youtubeTitle: "How to Perform a Wheel Alignment",
    qChinese: "技师A说在进行四轮定位前必须检查车身高度。技师B说下沉的弹簧会影响定位读数。谁是正确的？",
    optionsChinese: [
      "A) 仅技师A正确",
      "B) 仅技师B正确",
      "C) 技师A和技师B都正确",
      "D) 技师A和技师B都不正确"
    ],
    explanationChinese: "两位都正确。在进行定位前车身高度必须在规格内，因为所有定位角度都随车身高度变化。下沉的弹簧降低车身高度并改变外倾角、主销后倾角和前束读数。在车身高度不正确的情况下定位会产生不正确的设定。"
  },
  {
    id: 192,
    q: "What type of wheel bearing is used in most modern front-wheel-drive vehicles?",
    options: [
      "A) Tapered roller bearing with manual adjustment",
      "B) Sealed hub bearing assembly (unitized bearing)",
      "C) Loose ball bearing with races",
      "D) Needle roller bearing"
    ],
    answer: 1,
    explanation: "Most modern front-wheel-drive vehicles use a sealed hub bearing assembly, also called a unitized bearing. It is a pre-assembled, pre-adjusted, sealed unit that bolts to the knuckle. It contains the wheel speed sensor ring and cannot be serviced. When it fails, the entire assembly is replaced.",
    diagram: "",
    terms: ["wheel_bearing"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=bNEJzSIBxFQ",
    youtubeTitle: "Wheel Bearing Noise and Diagnosis",
    qChinese: "大多数现代前驱车辆使用什么类型的车轮轴承？",
    optionsChinese: [
      "A) 带手动调整的锥形滚子轴承",
      "B) 密封式轮毂轴承总成（整体式轴承）",
      "C) 带座圈的散装球轴承",
      "D) 滚针轴承"
    ],
    explanationChinese: "大多数现代前驱车辆使用密封式轮毂轴承总成，也称为整体式轴承。它是预组装、预调整的密封装置，用螺栓固定在转向节上。它包含车轮转速传感器环且不可维修。当它失效时，必须更换整个总成。"
  },
  {
    id: 193,
    q: "A clicking noise from the front wheels during tight turns at low speed is MOST likely caused by:",
    options: [
      "A) Worn wheel bearings",
      "B) A worn outer CV joint",
      "C) Worn sway bar links",
      "D) A loose heat shield"
    ],
    answer: 1,
    explanation: "A clicking or popping noise during tight turns at low speed is the classic symptom of a worn outer CV (constant velocity) joint. The outer joint operates at the greatest angle during turns. A torn CV boot allows grease to escape and contamination to enter, leading to joint failure.",
    diagram: "",
    terms: ["wheel_bearing", "ball_joint"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=bNEJzSIBxFQ",
    youtubeTitle: "Wheel Bearing Noise and Diagnosis",
    qChinese: "低速紧弯时前轮发出咔嗒声最可能的原因是：",
    optionsChinese: [
      "A) 车轮轴承磨损",
      "B) 外CV万向节磨损",
      "C) 稳定杆连杆磨损",
      "D) 热屏蔽板松动"
    ],
    explanationChinese: "低速紧弯时的咔嗒声或啪嗒声是外CV（等速）万向节磨损的典型症状。外万向节在转弯时以最大角度工作。CV防尘套破裂导致润滑脂泄出和污染物进入，导致万向节失效。"
  },
  {
    id: 194,
    q: "When removing a pressed-in wheel bearing from a steering knuckle, what tool is typically used?",
    options: [
      "A) A slide hammer",
      "B) A hydraulic press",
      "C) A pry bar",
      "D) A torque wrench"
    ],
    answer: 1,
    explanation: "Pressed-in wheel bearings require a hydraulic press for removal and installation. The bearing is pressed into the knuckle bore with precise alignment. Improper installation methods such as hammering can damage the new bearing and cause premature failure. Some can also be removed with a special puller.",
    diagram: "",
    terms: ["wheel_bearing"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=bNEJzSIBxFQ",
    youtubeTitle: "Wheel Bearing Noise and Diagnosis",
    qChinese: "从转向节中拆卸压入式车轮轴承时通常使用什么工具？",
    optionsChinese: [
      "A) 滑锤",
      "B) 液压压力机",
      "C) 撬棒",
      "D) 扭力扳手"
    ],
    explanationChinese: "压入式车轮轴承需要液压压力机进行拆卸和安装。轴承以精确对准的方式压入转向节孔中。不正确的安装方法如锤击可能损坏新轴承并导致过早失效。某些也可以用专用拉拔器拆卸。"
  },
  {
    id: 195,
    q: "A vehicle with four-wheel independent suspension has a pull to the left. All tire pressures are correct. The alignment shows left caster is 2 degrees less than the right. What is the repair?",
    options: [
      "A) Adjust the left caster to match the right",
      "B) Adjust the toe to compensate",
      "C) Rotate the tires",
      "D) Replace the left front tire"
    ],
    answer: 0,
    explanation: "The vehicle pulls toward the side with less positive caster. With the left caster 2 degrees less than the right, the vehicle pulls left. The repair is to adjust the left caster to match the right side. Caster is adjusted using eccentric bolts, shims, or slotted mountings depending on the vehicle design.",
    diagram: "",
    terms: ["caster", "wheel_alignment", "control_arm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=MXGi6CaKtaY",
    youtubeTitle: "How to Perform a Wheel Alignment",
    qChinese: "配备四轮独立悬挂的车辆向左跑偏。所有轮胎气压正确。定位显示左侧主销后倾角比右侧少2度。如何维修？",
    optionsChinese: [
      "A) 调整左侧主销后倾角使其与右侧匹配",
      "B) 调整前束来补偿",
      "C) 进行轮胎换位",
      "D) 更换左前轮胎"
    ],
    explanationChinese: "车辆向正主销后倾角较小的一侧跑偏。左侧主销后倾角比右侧少2度，车辆向左跑偏。维修方法是调整左侧主销后倾角使其与右侧匹配。主销后倾角通过偏心螺栓、垫片或长圆安装孔调整，取决于车辆设计。"
  },
  {
    id: 196,
    q: "What is the consequence of not performing a TPMS relearn after rotating tires on a direct TPMS system?",
    options: [
      "A) The TPMS light will not illuminate",
      "B) The system will display incorrect tire positions on the dash display",
      "C) The tires will lose air faster",
      "D) The wheel bearings will be damaged"
    ],
    answer: 1,
    explanation: "Without a TPMS relearn, the system still monitors pressures but identifies the wrong tire position. A low-pressure alert may indicate the wrong wheel location on the dash display, confusing the driver. The sensors still function, but the position data is incorrect until a relearn is performed.",
    diagram: "",
    terms: ["tpms", "tire_pressure", "tire_rotation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "在直接式TPMS系统上换位轮胎后不执行TPMS重新学习的后果是什么？",
    optionsChinese: [
      "A) TPMS灯不会亮起",
      "B) 系统将在仪表盘显示上显示错误的轮胎位置",
      "C) 轮胎会更快漏气",
      "D) 车轮轴承会损坏"
    ],
    explanationChinese: "不进行TPMS重新学习，系统仍然监测压力但识别错误的轮胎位置。低压警报可能在仪表盘显示上指示错误的车轮位置，误导驾驶员。传感器仍然工作，但位置数据不正确，直到执行重新学习。"
  },
  {
    id: 197,
    q: "A vehicle has a shimmy or wobble at low speeds (under 30 mph) that smooths out at higher speeds. What is the MOST likely cause?",
    options: [
      "A) An out-of-balance tire",
      "B) A separated tire (tread separation or belt shift)",
      "C) Low power steering fluid",
      "D) Worn brake pads"
    ],
    answer: 1,
    explanation: "A shimmy or wobble at low speeds that smooths out at higher speeds often indicates a tire with internal damage such as a tread separation or shifted belt. This creates a physical lump in the tire that is more noticeable at lower speeds. A balance issue typically causes vibrations at higher speeds.",
    diagram: "",
    terms: ["tire_pressure", "tire_rotation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "车辆在低速（30英里/小时以下）时有摆振或摇摆，在高速时消失。最可能的原因是什么？",
    optionsChinese: [
      "A) 轮胎不平衡",
      "B) 轮胎内部损伤（胎面分离或帘布层移位）",
      "C) 助力转向液偏低",
      "D) 刹车片磨损"
    ],
    explanationChinese: "低速时出现而高速时消失的摆振或摇摆通常表明轮胎存在内部损伤，如胎面分离或帘布层移位。这在轮胎上形成一个物理隆起，在低速时更明显。平衡问题通常在高速时产生振动。"
  },
  {
    id: 198,
    q: "When installing TPMS-equipped wheels, what precaution must be taken to avoid damaging the sensors?",
    options: [
      "A) Remove the sensors before mounting tires",
      "B) Position the tire bead away from the sensor during mounting and use care with tire irons",
      "C) Only inflate to 20 PSI",
      "D) Use extra bead lubricant on the sensor"
    ],
    answer: 1,
    explanation: "When mounting and demounting tires on TPMS-equipped wheels, the tire bead and tire machine tools must be positioned away from the sensor to avoid breaking it. The sensor valve stem and body are fragile. Marking the sensor location and starting the bead opposite the sensor prevents damage.",
    diagram: "",
    terms: ["tpms", "tire_pressure"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=DepYSarbCVg",
    youtubeTitle: "Tire Wear Patterns and What They Mean",
    qChinese: "安装配有TPMS的车轮时，必须采取什么预防措施以避免损坏传感器？",
    optionsChinese: [
      "A) 装胎前取下传感器",
      "B) 装胎时将胎圈远离传感器，使用撬胎棒时要小心",
      "C) 仅充气至20 PSI",
      "D) 在传感器上多涂胎圈润滑剂"
    ],
    explanationChinese: "在配有TPMS的车轮上装卸轮胎时，轮胎胎圈和轮胎机工具必须远离传感器以避免损坏。传感器气门嘴和本体很脆弱。标记传感器位置并从传感器对面开始操作胎圈可以防止损坏。"
  },
  {
    id: 199,
    q: "A vehicle pulls to one side only when braking hard. The alignment is within specification. What is the MOST likely cause?",
    options: [
      "A) Unequal caster",
      "B) A restricted brake hose or sticking caliper on one side",
      "C) Worn sway bar links",
      "D) A faulty TPMS sensor"
    ],
    answer: 1,
    explanation: "A pull only during braking indicates a brake issue, not alignment. A restricted brake hose that prevents fluid from reaching or releasing a caliper, or a sticking caliper, causes uneven braking force between sides. The vehicle pulls toward the side with more braking force.",
    diagram: "",
    terms: ["wheel_alignment", "tie_rod"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Wheel_alignment.jpg/640px-Wheel_alignment.jpg",
    youtube: "https://www.youtube.com/watch?v=MXGi6CaKtaY",
    youtubeTitle: "How to Perform a Wheel Alignment",
    qChinese: "车辆仅在急刹车时向一侧跑偏。定位在规格范围内。最可能的原因是什么？",
    optionsChinese: [
      "A) 不等的主销后倾角",
      "B) 一侧制动软管受限或卡钳卡滞",
      "C) 稳定杆连杆磨损",
      "D) TPMS传感器故障"
    ],
    explanationChinese: "仅在制动时跑偏表明是制动问题而非定位问题。制动软管受限导致液体无法到达或释放卡钳，或卡钳卡滞，会导致两侧制动力不均。车辆向制动力更大的一侧跑偏。"
  },
  {
    id: 200,
    q: "A customer complains of a steering wheel that oscillates (shakes back and forth) at highway speeds, especially over uneven pavement. What suspension component is MOST likely worn?",
    options: [
      "A) The sway bar links",
      "B) The steering damper (steering stabilizer)",
      "C) The coil springs",
      "D) The leaf springs"
    ],
    answer: 1,
    explanation: "A steering damper (steering stabilizer) controls oscillation of the steering linkage, much like a shock absorber controls spring movement. When worn, it cannot dampen the back-and-forth oscillation caused by road irregularities, resulting in a steering wheel that shakes at highway speeds over bumps.",
    diagram: "",
    terms: ["shock_absorber", "steering_gear", "tie_rod"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rack_and_pinion_animation.gif/400px-Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=YDl1UxCrEhM",
    youtubeTitle: "Power Steering System Explained",
    qChinese: "客户抱怨方向盘在高速公路速度下特别是在不平路面上来回摆动。哪个悬挂部件最可能磨损？",
    optionsChinese: [
      "A) 稳定杆连杆",
      "B) 转向减震器（转向稳定器）",
      "C) 螺旋弹簧",
      "D) 钢板弹簧"
    ],
    explanationChinese: "转向减震器（转向稳定器）控制转向连杆机构的摆动，类似于减震器控制弹簧运动。磨损后无法抑制路面不规则引起的来回摆动，导致方向盘在高速公路速度下过颠簸时摆动。"
  }
];
