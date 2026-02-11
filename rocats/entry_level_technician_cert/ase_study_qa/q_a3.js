const questionsA3 = [
  // ===== CLUTCH DIAGNOSIS & REPAIR (Questions 1–16) =====
  {
    id: 1,
    q: "A vehicle equipped with a manual transmission exhibits clutch slippage during heavy acceleration but operates normally at light throttle. Which of the following is the MOST likely cause?",
    options: [
      "A) Worn clutch disc friction material",
      "B) A broken clutch fork return spring",
      "C) Excessive clutch pedal free play",
      "D) A worn pilot bearing"
    ],
    answer: 0,
    explanation: "Clutch slippage under load is most commonly caused by worn friction material on the clutch disc. As the lining wears thin, the pressure plate cannot clamp the disc firmly enough to transmit high-torque loads, causing slippage that is most noticeable during heavy acceleration or when climbing hills.",
    diagram: "",
    terms: ["clutch_disc", "pressure_plate", "flywheel"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Clutch_disc.jpg/640px-Clutch_disc.jpg",
    youtube: "https://www.youtube.com/watch?v=devo3kdSPQY",
    youtubeTitle: "How a Clutch Works",
    qChinese: "一辆配备手动变速器的车辆在大油门加速时出现离合器打滑，但在小油门时工作正常。以下哪项是最可能的原因？",
    optionsChinese: [
      "A) 离合器摩擦片磨损",
      "B) 离合器拨叉回位弹簧断裂",
      "C) 离合器踏板自由行程过大",
      "D) 导轴承磨损"
    ],
    explanationChinese: "负载下的离合器打滑最常见的原因是离合器摩擦片磨损。当摩擦片变薄时，压盘无法将摩擦片牢固地夹紧以传递大扭矩负载，导致在大油门加速或爬坡时最明显的打滑现象。"
  },
  {
    id: 2,
    q: "A chattering sensation is felt through the clutch pedal during engagement. Technician A says a contaminated clutch disc could be the cause. Technician B says broken or weakened pressure plate diaphragm spring fingers could be the cause. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Oil or grease contamination on the clutch disc causes uneven friction that produces chatter during engagement. Likewise, broken or weakened diaphragm spring fingers apply uneven clamping force across the pressure plate, which also results in a chattering sensation as the clutch engages.",
    diagram: "",
    terms: ["clutch_disc", "pressure_plate", "flywheel"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Clutch_disc.jpg/640px-Clutch_disc.jpg",
    youtube: "https://www.youtube.com/watch?v=devo3kdSPQY",
    youtubeTitle: "How a Clutch Works",
    qChinese: "在离合器接合过程中，通过离合器踏板感觉到抖动。技师A说离合器摩擦片被污染可能是原因。技师B说压盘膜片弹簧指断裂或变弱可能是原因。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "两位技师都是正确的。离合器摩擦片上的油脂污染会导致不均匀的摩擦力，在接合过程中产生抖动。同样，膜片弹簧指断裂或变弱会在压盘上施加不均匀的夹紧力，这也会在离合器接合时产生抖动感。"
  },
  {
    id: 3,
    q: "A grinding noise is heard only when the clutch pedal is fully depressed with the engine running. Which component is MOST likely at fault?",
    options: [
      "A) Pilot bearing or bushing",
      "B) Clutch release (throwout) bearing",
      "C) Input shaft bearing",
      "D) Crankshaft main bearing"
    ],
    answer: 1,
    explanation: "The clutch release bearing, also called the throwout bearing, is engaged and spinning against the pressure plate diaphragm spring when the pedal is fully depressed. A worn or dry release bearing will produce a grinding or squealing noise under these conditions since it is loaded during pedal depression.",
    diagram: "",
    terms: ["release_bearing", "pressure_plate", "clutch_disc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Clutch_disc.jpg/640px-Clutch_disc.jpg",
    youtube: "https://www.youtube.com/watch?v=devo3kdSPQY",
    youtubeTitle: "Clutch Release Bearing Function",
    qChinese: "发动机运转时，只有在离合器踏板完全踩下时才能听到研磨噪音。哪个零件最可能出了问题？",
    optionsChinese: [
      "A) 导轴承或衬套",
      "B) 离合器分离轴承（释放轴承）",
      "C) 输入轴轴承",
      "D) 曲轴主轴承"
    ],
    explanationChinese: "离合器分离轴承，也称为释放轴承，在踏板完全踩下时会与压盘膜片弹簧接触并旋转。磨损或缺少润滑的分离轴承在这种条件下会产生研磨或尖叫噪音，因为它在踏板踩下时承受负载。"
  },
  {
    id: 4,
    q: "A vehicle's clutch pedal feels spongy and does not fully disengage the clutch. The hydraulic fluid level is correct. What is the MOST likely cause?",
    options: [
      "A) A worn clutch disc",
      "B) Air in the hydraulic clutch system",
      "C) A broken pressure plate spring",
      "D) Excessive flywheel runout"
    ],
    answer: 1,
    explanation: "A spongy clutch pedal with correct fluid level strongly indicates air trapped in the hydraulic system. Air is compressible, so it prevents the master and slave cylinders from transmitting full hydraulic force, resulting in incomplete clutch disengagement. Bleeding the system should restore proper pedal feel and operation.",
    diagram: "",
    terms: ["master_cylinder", "clutch_disc", "pressure_plate"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Clutch_disc.jpg/640px-Clutch_disc.jpg",
    youtube: "https://www.youtube.com/watch?v=devo3kdSPQY",
    youtubeTitle: "How a Clutch Works",
    qChinese: "车辆的离合器踏板感觉松软，无法完全分离离合器。液压油液位正常。最可能的原因是什么？",
    optionsChinese: [
      "A) 离合器摩擦片磨损",
      "B) 液压离合器系统中有空气",
      "C) 压盘弹簧断裂",
      "D) 飞轮跳动量过大"
    ],
    explanationChinese: "液压油液位正常但离合器踏板松软，强烈表明液压系统中有空气。空气是可压缩的，因此它阻止主缸和从缸传递全部液压力，导致离合器分离不完全。排出系统中的空气应能恢复正常的踏板感觉和操作。"
  },
  {
    id: 5,
    q: "All of the following can cause clutch pedal pulsation EXCEPT:",
    options: [
      "A) Warped flywheel surface",
      "B) Misaligned bell housing",
      "C) Excessive clutch pedal free play",
      "D) Flywheel with excessive lateral runout"
    ],
    answer: 2,
    explanation: "Excessive clutch pedal free play affects engagement point but does not cause pulsation. Pedal pulsation is caused by components that create a rhythmic push-back against the release bearing, such as a warped flywheel, flywheel lateral runout, or a misaligned bell housing that causes the disc to orbit eccentrically.",
    diagram: "",
    terms: ["flywheel", "release_bearing", "clutch_disc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flywheel.jpg/640px-Flywheel.jpg",
    youtube: "https://www.youtube.com/watch?v=devo3kdSPQY",
    youtubeTitle: "Flywheel and Clutch System Explained",
    qChinese: "以下所有情况都可能导致离合器踏板脉动，除了：",
    optionsChinese: [
      "A) 飞轮表面翘曲",
      "B) 离合器壳体未对中",
      "C) 离合器踏板自由行程过大",
      "D) 飞轮横向跳动量过大"
    ],
    explanationChinese: "离合器踏板自由行程过大会影响接合点，但不会导致脉动。踏板脉动是由对分离轴承产生周期性反推力的部件引起的，例如翘曲的飞轮、飞轮横向跳动或未对中的离合器壳体导致摩擦片偏心运行。"
  },
  {
    id: 6,
    q: "A noise is heard from the clutch area only when the clutch pedal is released and the transmission is in neutral. The noise disappears when the pedal is depressed. Which component is MOST likely causing the noise?",
    options: [
      "A) Release bearing",
      "B) Pilot bearing",
      "C) Input shaft bearing",
      "D) Clutch disc damper springs"
    ],
    answer: 2,
    explanation: "When the clutch is engaged in neutral, the input shaft spins with the engine. A worn input shaft bearing will make noise under this condition. Depressing the clutch stops the input shaft from spinning, which eliminates the noise. The release bearing would make noise when the pedal is depressed, not released.",
    diagram: "",
    terms: ["release_bearing", "clutch_disc", "synchronizer"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "How Manual Transmission Works",
    qChinese: "只有在离合器踏板松开且变速器处于空挡时，才能从离合器区域听到噪音。踩下踏板时噪音消失。哪个零件最可能导致了噪音？",
    optionsChinese: [
      "A) 分离轴承",
      "B) 导轴承",
      "C) 输入轴轴承",
      "D) 离合器摩擦片减振弹簧"
    ],
    explanationChinese: "当离合器在空挡接合时，输入轴随发动机旋转。磨损的输入轴轴承在这种情况下会产生噪音。踩下离合器会使输入轴停止旋转，从而消除噪音。分离轴承会在踩下踏板时而非松开时产生噪音。"
  },
  {
    id: 7,
    q: "During a clutch hydraulic system inspection, the technician notices the clutch master cylinder pushrod has no free play. What could result from this condition?",
    options: [
      "A) Clutch slippage due to incomplete engagement",
      "B) Hard clutch pedal effort",
      "C) Clutch chatter during engagement",
      "D) Gear clash when shifting"
    ],
    answer: 0,
    explanation: "If the master cylinder pushrod has no free play, the piston may partially block the compensating port, keeping residual pressure in the hydraulic line. This prevents the pressure plate from fully clamping the clutch disc against the flywheel, resulting in clutch slippage because the clutch never fully engages.",
    diagram: "",
    terms: ["master_cylinder", "pressure_plate", "clutch_disc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Clutch_disc.jpg/640px-Clutch_disc.jpg",
    youtube: "https://www.youtube.com/watch?v=devo3kdSPQY",
    youtubeTitle: "How a Clutch Works",
    qChinese: "在离合器液压系统检查中，技师注意到离合器主缸推杆没有自由间隙。这种情况可能导致什么结果？",
    optionsChinese: [
      "A) 由于不完全接合导致离合器打滑",
      "B) 离合器踏板操作力大",
      "C) 接合时离合器抖动",
      "D) 换挡时齿轮撞击"
    ],
    explanationChinese: "如果主缸推杆没有自由间隙，活塞可能部分堵塞补偿孔，使液压管路中保持残余压力。这会阻止压盘将离合器摩擦片完全夹紧在飞轮上，导致离合器打滑，因为离合器永远无法完全接合。"
  },
  {
    id: 8,
    q: "A dual-mass flywheel is being inspected. Which of the following conditions would require replacement?",
    options: [
      "A) Minor surface glazing on the friction surface",
      "B) Excessive rotational play between the primary and secondary masses",
      "C) Light heat discoloration on the friction surface",
      "D) Small surface scratches from normal clutch disc wear"
    ],
    answer: 1,
    explanation: "Dual-mass flywheels use internal springs to dampen torsional vibration between the primary and secondary masses. Excessive rotational free play indicates the internal springs are worn or broken, meaning the flywheel can no longer properly dampen vibration. Unlike conventional flywheels, dual-mass units cannot be resurfaced and must be replaced.",
    diagram: "",
    terms: ["flywheel", "clutch_disc", "pressure_plate"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flywheel.jpg/640px-Flywheel.jpg",
    youtube: "https://www.youtube.com/watch?v=devo3kdSPQY",
    youtubeTitle: "Flywheel and Clutch System Explained",
    qChinese: "正在检查双质量飞轮。以下哪种情况需要更换？",
    optionsChinese: [
      "A) 摩擦表面轻微玻璃化",
      "B) 主质量和副质量之间旋转间隙过大",
      "C) 摩擦表面轻微热变色",
      "D) 正常离合器摩擦片磨损造成的表面轻微划痕"
    ],
    explanationChinese: "双质量飞轮使用内部弹簧来衰减主质量和副质量之间的扭转振动。旋转自由间隙过大表明内部弹簧已磨损或断裂，意味着飞轮无法再正常衰减振动。与传统飞轮不同，双质量飞轮不能重新研磨表面，必须更换。"
  },
  {
    id: 9,
    q: "Technician A says a clutch slave cylinder can be bench-bled before installation. Technician B says the entire hydraulic clutch system must always be bled at the slave cylinder bleeder valve. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. A slave cylinder can be bench-bled before installation to remove most of the air, making the final bleeding process easier. However, the complete system should also be bled at the bleeder valve to ensure all residual air is removed from the lines and master cylinder as well.",
    diagram: "",
    terms: ["master_cylinder", "brake_bleeding", "clutch_disc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Clutch_disc.jpg/640px-Clutch_disc.jpg",
    youtube: "https://www.youtube.com/watch?v=devo3kdSPQY",
    youtubeTitle: "How a Clutch Works",
    qChinese: "技师A说离合器从缸可以在安装前进行台架排气。技师B说整个液压离合器系统必须始终在从缸排气阀处排气。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "两位技师都是正确的。从缸可以在安装前进行台架排气，以排出大部分空气，使最终排气过程更容易。但是，完整系统也应在排气阀处排气，以确保从管路和主缸中排出所有残留空气。"
  },
  {
    id: 10,
    q: "A conventional flywheel is being resurfaced. What is the primary concern when removing material from the flywheel surface?",
    options: [
      "A) It may affect the balance of the crankshaft",
      "B) It will increase clutch pedal free play",
      "C) It changes the pressure plate clamp load and engagement point",
      "D) It will cause premature pilot bearing failure"
    ],
    answer: 2,
    explanation: "Removing material from the flywheel surface effectively moves the pressure plate closer to the flywheel. This changes the diaphragm spring geometry, altering the clamp load on the clutch disc and shifting the engagement point of the clutch pedal. Excessive material removal reduces clamp load and causes slippage.",
    diagram: "",
    terms: ["flywheel", "pressure_plate", "clutch_disc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flywheel.jpg/640px-Flywheel.jpg",
    youtube: "https://www.youtube.com/watch?v=devo3kdSPQY",
    youtubeTitle: "Flywheel and Clutch System Explained",
    qChinese: "正在对传统飞轮进行表面重新研磨。从飞轮表面去除材料时，主要需要关注什么？",
    optionsChinese: [
      "A) 可能影响曲轴的平衡",
      "B) 会增加离合器踏板自由行程",
      "C) 会改变压盘夹紧力和接合点",
      "D) 会导致导轴承过早失效"
    ],
    explanationChinese: "从飞轮表面去除材料实际上会使压盘更靠近飞轮。这改变了膜片弹簧的几何形状，从而改变了对离合器摩擦片的夹紧力并移动了离合器踏板的接合点。去除过多材料会降低夹紧力并导致打滑。"
  },
  {
    id: 11,
    q: "A vehicle has a clutch that drags, making it difficult to shift into first gear from a stop. Which of the following is the LEAST likely cause?",
    options: [
      "A) Warped clutch disc",
      "B) Incorrect clutch pedal free play adjustment",
      "C) Worn clutch disc friction material",
      "D) Hydraulic system leak at the slave cylinder"
    ],
    answer: 2,
    explanation: "Worn friction material primarily causes clutch slippage, not dragging. Clutch drag means the disc does not fully release from the flywheel. A warped disc, incorrect pedal free play preventing full release travel, or a slave cylinder leak reducing hydraulic pressure all prevent complete clutch disengagement, causing drag.",
    diagram: "",
    terms: ["clutch_disc", "flywheel", "master_cylinder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Clutch_disc.jpg/640px-Clutch_disc.jpg",
    youtube: "https://www.youtube.com/watch?v=devo3kdSPQY",
    youtubeTitle: "How a Clutch Works",
    qChinese: "车辆的离合器拖滞，导致停车时难以挂入一挡。以下哪项是最不可能的原因？",
    optionsChinese: [
      "A) 离合器摩擦片翘曲",
      "B) 离合器踏板自由行程调整不当",
      "C) 离合器摩擦片摩擦材料磨损",
      "D) 从缸处液压系统泄漏"
    ],
    explanationChinese: "摩擦材料磨损主要导致离合器打滑，而非拖滞。离合器拖滞意味着摩擦片未能完全从飞轮分离。翘曲的摩擦片、不正确的踏板自由行程阻止了完整的释放行程、或从缸泄漏降低液压压力，都会阻止离合器完全分离，导致拖滞。"
  },
  {
    id: 12,
    q: "After replacing the clutch assembly, the release bearing begins making noise at low mileage. What is the MOST likely cause?",
    options: [
      "A) The clutch disc was installed backward",
      "B) The release bearing was not properly lubricated or aligned on the guide sleeve",
      "C) The flywheel was not resurfaced",
      "D) The pressure plate bolts were overtorqued"
    ],
    answer: 1,
    explanation: "Premature release bearing noise after replacement is most commonly caused by improper installation. If the bearing is not properly lubricated on the guide sleeve or is misaligned, it will bind and wear rapidly. The guide sleeve should be clean and lightly greased to allow smooth bearing travel.",
    diagram: "",
    terms: ["release_bearing", "clutch_disc", "pressure_plate"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Clutch_disc.jpg/640px-Clutch_disc.jpg",
    youtube: "https://www.youtube.com/watch?v=devo3kdSPQY",
    youtubeTitle: "Clutch Release Bearing Function",
    qChinese: "更换离合器总成后，分离轴承在低里程时就开始产生噪音。最可能的原因是什么？",
    optionsChinese: [
      "A) 离合器摩擦片装反了",
      "B) 分离轴承未在导管上正确润滑或对中",
      "C) 飞轮未重新研磨表面",
      "D) 压盘螺栓扭矩过大"
    ],
    explanationChinese: "更换后过早出现分离轴承噪音，最常见的原因是安装不当。如果轴承在导管上未正确润滑或未对中，它会卡滞并快速磨损。导管应清洁并涂少量润滑脂，以确保轴承平稳移动。"
  },
  {
    id: 13,
    q: "Which component's failure would cause the clutch to remain disengaged even after the pedal is released?",
    options: [
      "A) A broken clutch fork return spring",
      "B) A worn pilot bearing",
      "C) A glazed flywheel surface",
      "D) Weak pressure plate diaphragm springs"
    ],
    answer: 0,
    explanation: "The clutch fork return spring pulls the fork and release bearing away from the pressure plate when the pedal is released. If this spring breaks, the release bearing stays in contact with the diaphragm spring, keeping the clutch partially or fully disengaged. This prevents proper power transfer to the transmission.",
    diagram: "",
    terms: ["release_bearing", "pressure_plate", "clutch_disc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Clutch_disc.jpg/640px-Clutch_disc.jpg",
    youtube: "https://www.youtube.com/watch?v=devo3kdSPQY",
    youtubeTitle: "Clutch Release Bearing Function",
    qChinese: "哪个零件的失效会导致即使松开踏板后离合器仍保持分离状态？",
    optionsChinese: [
      "A) 离合器拨叉回位弹簧断裂",
      "B) 导轴承磨损",
      "C) 飞轮表面玻璃化",
      "D) 压盘膜片弹簧变弱"
    ],
    explanationChinese: "离合器拨叉回位弹簧在踏板松开时将拨叉和分离轴承从压盘拉开。如果此弹簧断裂，分离轴承会持续与膜片弹簧接触，使离合器保持部分或完全分离状态。这会阻止正常的动力传递到变速器。"
  },
  {
    id: 14,
    q: "A technician notices a burnt smell and blue discoloration on the flywheel surface during a clutch replacement. What does this indicate?",
    options: [
      "A) Normal wear from the clutch disc",
      "B) The flywheel has been overheated from clutch slippage",
      "C) Incorrect flywheel bolt torque",
      "D) Contaminated transmission fluid"
    ],
    answer: 1,
    explanation: "Blue discoloration and a burnt smell on the flywheel surface indicate excessive heat caused by prolonged clutch slippage. This heat can warp the flywheel, create hard spots, and reduce the friction coefficient of the surface. The flywheel must be inspected for warpage and hard spots before resurfacing or replacement.",
    diagram: "",
    terms: ["flywheel", "clutch_disc", "pressure_plate"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flywheel.jpg/640px-Flywheel.jpg",
    youtube: "https://www.youtube.com/watch?v=devo3kdSPQY",
    youtubeTitle: "Flywheel and Clutch System Explained",
    qChinese: "技师在更换离合器时注意到飞轮表面有烧焦气味和蓝色变色。这说明了什么？",
    optionsChinese: [
      "A) 离合器摩擦片的正常磨损",
      "B) 飞轮因离合器打滑而过热",
      "C) 飞轮螺栓扭矩不正确",
      "D) 变速器油液被污染"
    ],
    explanationChinese: "飞轮表面的蓝色变色和烧焦气味表明由于长时间离合器打滑而产生了过高温度。这种高温可能使飞轮翘曲、产生硬点，并降低表面的摩擦系数。在重新研磨或更换之前，必须检查飞轮是否有翘曲和硬点。"
  },
  {
    id: 15,
    q: "What is the purpose of the torsional damper springs located in the hub of a clutch disc?",
    options: [
      "A) To increase the clamping force of the pressure plate",
      "B) To absorb torsional vibrations during engagement and prevent drivetrain shock loads",
      "C) To reduce the effort required to press the clutch pedal",
      "D) To maintain alignment between the transmission input shaft and the crankshaft"
    ],
    answer: 1,
    explanation: "The torsional damper springs in the clutch disc hub absorb rotational vibrations and cushion the engagement between the engine and transmission. They compress and extend slightly during torque fluctuations, preventing harsh drivetrain shock loads and reducing gear rattle, particularly at low engine speeds and during engagement.",
    diagram: "",
    terms: ["clutch_disc", "flywheel", "pressure_plate"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Clutch_disc.jpg/640px-Clutch_disc.jpg",
    youtube: "https://www.youtube.com/watch?v=devo3kdSPQY",
    youtubeTitle: "How a Clutch Works",
    qChinese: "离合器摩擦片轮毂中扭转减振弹簧的作用是什么？",
    optionsChinese: [
      "A) 增加压盘的夹紧力",
      "B) 吸收接合过程中的扭转振动并防止传动系统冲击载荷",
      "C) 减少踩离合器踏板所需的力",
      "D) 保持变速器输入轴与曲轴之间的对中"
    ],
    explanationChinese: "离合器摩擦片轮毂中的扭转减振弹簧吸收旋转振动并缓冲发动机与变速器之间的接合过程。它们在扭矩波动期间略微压缩和伸展，防止剧烈的传动系统冲击载荷，并减少齿轮噪音，特别是在低发动机转速和接合过程中。"
  },
  {
    id: 16,
    q: "A vehicle with a hydraulic clutch system has a slowly sinking clutch pedal when held in the depressed position. What is the MOST likely cause?",
    options: [
      "A) Air in the hydraulic system",
      "B) An internal seal leak in the clutch master cylinder",
      "C) A worn clutch disc",
      "D) Weak pressure plate springs"
    ],
    answer: 1,
    explanation: "A pedal that slowly sinks when held down indicates an internal seal leak in the master cylinder. Fluid bypasses the worn internal seals under sustained pressure, causing a gradual loss of hydraulic force. Air in the system would cause a spongy pedal rather than a sinking one under constant pressure.",
    diagram: "",
    terms: ["master_cylinder", "clutch_disc", "pressure_plate"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Clutch_disc.jpg/640px-Clutch_disc.jpg",
    youtube: "https://www.youtube.com/watch?v=devo3kdSPQY",
    youtubeTitle: "How a Clutch Works",
    qChinese: "配备液压离合器系统的车辆，在踏板保持踩下位置时离合器踏板缓慢下沉。最可能的原因是什么？",
    optionsChinese: [
      "A) 液压系统中有空气",
      "B) 离合器主缸内部密封件泄漏",
      "C) 离合器摩擦片磨损",
      "D) 压盘弹簧变弱"
    ],
    explanationChinese: "踏板在保持踩下时缓慢下沉，表明主缸内部密封件泄漏。液压油在持续压力下绕过磨损的内部密封件，导致液压力逐渐损失。系统中有空气会导致踏板松软，而非在恒定压力下下沉。"
  },

  // ===== TRANSMISSION DIAGNOSIS & REPAIR (Questions 17–33) =====
  {
    id: 17,
    q: "A manual transmission jumps out of third gear under deceleration. Which of the following is the MOST likely cause?",
    options: [
      "A) Worn synchronizer sleeve and hub",
      "B) Low transmission fluid level",
      "C) A damaged input shaft bearing",
      "D) Worn shift fork pads"
    ],
    answer: 0,
    explanation: "Jumping out of gear, especially under deceleration, is most commonly caused by worn synchronizer sleeve and hub engagement teeth. When these components are worn, the sleeve cannot maintain a solid lock on the gear, and the reversing thrust forces during deceleration push the sleeve out of engagement.",
    diagram: "",
    terms: ["synchronizer", "transmission_fluid", "clutch_disc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "Manual Transmission Synchronizers",
    qChinese: "手动变速器在减速时三挡跳挡。以下哪项是最可能的原因？",
    optionsChinese: [
      "A) 同步器套筒和花键毂磨损",
      "B) 变速器油液位低",
      "C) 输入轴轴承损坏",
      "D) 拨叉垫磨损"
    ],
    explanationChinese: "跳挡，特别是在减速时，最常见的原因是同步器套筒和花键毂接合齿磨损。当这些部件磨损时，套筒无法牢固地锁定在齿轮上，减速时的反向推力会将套筒推出接合位置。"
  },
  {
    id: 18,
    q: "Gear clash occurs when shifting into second gear. All other gears shift smoothly. What is the MOST likely cause?",
    options: [
      "A) Low transmission lubricant",
      "B) A worn or damaged second gear synchronizer assembly",
      "C) A bent shift fork for the 1-2 shift rail",
      "D) Worn input shaft bearings"
    ],
    answer: 1,
    explanation: "Gear clash isolated to a single gear most commonly indicates a worn or damaged synchronizer for that specific gear. The synchronizer's brass blocker ring and friction cone equalize shaft speeds before engagement. When worn, they cannot slow the gear sufficiently, causing the clash during the shift into second.",
    diagram: "",
    terms: ["synchronizer", "transmission_fluid", "clutch_disc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "Manual Transmission Synchronizers",
    qChinese: "换入二挡时发生齿轮撞击。其他所有挡位换挡顺畅。最可能的原因是什么？",
    optionsChinese: [
      "A) 变速器润滑油不足",
      "B) 二挡同步器总成磨损或损坏",
      "C) 1-2挡换挡轨拨叉弯曲",
      "D) 输入轴轴承磨损"
    ],
    explanationChinese: "仅在单个挡位出现齿轮撞击，最常见的原因是该特定挡位的同步器磨损或损坏。同步器的黄铜锁止环和摩擦锥面在接合前使轴速同步。磨损后无法充分降低齿轮速度，导致换入二挡时产生撞击。"
  },
  {
    id: 19,
    q: "A whining noise from a manual transmission increases with vehicle speed and is present in all gears but disappears in neutral. Which component is MOST likely at fault?",
    options: [
      "A) Input shaft bearing",
      "B) Output shaft (mainshaft) bearing",
      "C) Countershaft bearings",
      "D) Reverse idler gear"
    ],
    answer: 1,
    explanation: "A speed-related whine present in all forward gears but absent in neutral points to the output shaft bearing. The output shaft is loaded in all forward gears since it carries the driving torque. In neutral, no torque is transmitted through the output shaft, unloading the bearing and eliminating the noise.",
    diagram: "",
    terms: ["transmission_fluid", "synchronizer", "speed_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "How Manual Transmission Works",
    qChinese: "手动变速器发出的嗡嗡声随车速增加而增大，在所有挡位中都存在，但在空挡时消失。哪个部件最可能出了问题？",
    optionsChinese: [
      "A) 输入轴轴承",
      "B) 输出轴（主轴）轴承",
      "C) 中间轴轴承",
      "D) 倒挡惰轮"
    ],
    explanationChinese: "在所有前进挡中都存在、与车速相关的嗡嗡声，但在空挡时消失，表明输出轴轴承有问题。输出轴在所有前进挡中都承载驱动扭矩，因此都在受载。在空挡时，没有扭矩通过输出轴传递，轴承卸载，噪音消除。"
  },
  {
    id: 20,
    q: "Technician A says that using the incorrect viscosity lubricant in a manual transmission can cause hard shifting in cold weather. Technician B says a worn or stretched shift cable can cause hard shifting. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Lubricant that is too thick in cold temperatures increases drag on the synchronizers and gears, making shifts difficult until the fluid warms up. A worn or stretched shift cable cannot deliver the full range of motion to the internal shift mechanism, also causing hard or incomplete shifts.",
    diagram: "",
    terms: ["transmission_fluid", "synchronizer", "transmission_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "How Manual Transmission Works",
    qChinese: "技师A说在手动变速器中使用不正确粘度的润滑油会导致冷天换挡困难。技师B说换挡拉索磨损或拉伸可能导致换挡困难。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "两位技师都是正确的。在低温下过于粘稠的润滑油会增加同步器和齿轮的阻力，使换挡困难，直到油液升温。磨损或拉伸的换挡拉索无法向内部换挡机构传递全部运动行程，同样导致换挡困难或不完全。"
  },
  {
    id: 21,
    q: "During a manual transmission disassembly, a technician finds metal particles on the magnetic drain plug. What should the technician do NEXT?",
    options: [
      "A) Clean the plug and reassemble the transmission",
      "B) Inspect all bearings, gears, and shafts for damage",
      "C) Replace only the bearings and reassemble",
      "D) Flush the transmission and refill with new lubricant"
    ],
    answer: 1,
    explanation: "Metal particles on the drain plug indicate internal component wear. Before reassembly, the technician must inspect all bearings, gears, and shafts to identify the source of the metal contamination. Simply cleaning the plug or flushing without identifying the worn component would result in continued damage and eventual failure.",
    diagram: "",
    terms: ["transmission_fluid", "transmission_service", "synchronizer"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "How Manual Transmission Works",
    qChinese: "在手动变速器拆卸过程中，技师在磁性放油塞上发现金属颗粒。技师接下来应该怎么做？",
    optionsChinese: [
      "A) 清洁放油塞并重新组装变速器",
      "B) 检查所有轴承、齿轮和轴是否有损坏",
      "C) 仅更换轴承后重新组装",
      "D) 冲洗变速器并重新加注新润滑油"
    ],
    explanationChinese: "放油塞上的金属颗粒表明内部部件有磨损。在重新组装之前，技师必须检查所有轴承、齿轮和轴，以确定金属污染的来源。仅清洁放油塞或冲洗而不找到磨损部件会导致持续损坏和最终失效。"
  },
  {
    id: 22,
    q: "A manual transmission makes a clicking noise only in reverse. What is the MOST likely cause?",
    options: [
      "A) Worn reverse idler gear or shaft",
      "B) Damaged countershaft bearing",
      "C) Worn output shaft splines",
      "D) Damaged input shaft retaining ring"
    ],
    answer: 0,
    explanation: "A clicking noise isolated to reverse gear indicates a worn reverse idler gear or its shaft. The reverse idler is only engaged during reverse operation. Worn teeth on the idler gear or excessive play on the idler shaft produces a rhythmic clicking as the damaged teeth mesh with the mating gears.",
    diagram: "",
    terms: ["transmission_fluid", "synchronizer", "planetary_gear_set"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "How Manual Transmission Works",
    qChinese: "手动变速器只在倒挡时发出咔嗒声。最可能的原因是什么？",
    optionsChinese: [
      "A) 倒挡惰轮或轴磨损",
      "B) 中间轴轴承损坏",
      "C) 输出轴花键磨损",
      "D) 输入轴卡簧损坏"
    ],
    explanationChinese: "仅在倒挡时出现的咔嗒声表明倒挡惰轮或其轴已磨损。倒挡惰轮仅在倒挡操作期间接合。惰轮齿磨损或惰轮轴间隙过大会在损坏的齿与配合齿轮啮合时产生有节奏的咔嗒声。"
  },
  {
    id: 23,
    q: "All of the following are functions of a synchronizer assembly EXCEPT:",
    options: [
      "A) Matching the speed of the gear to the output shaft before engagement",
      "B) Locking the selected gear to the output shaft",
      "C) Providing gear reduction between the input and output shafts",
      "D) Preventing the shift sleeve from engaging until speeds are equalized"
    ],
    answer: 2,
    explanation: "The synchronizer assembly matches shaft and gear speeds, locks the selected gear to the shaft, and uses a blocking ring to prevent premature engagement. Gear reduction is provided by the different-sized gear pairs on the countershaft and mainshaft, not by the synchronizer assembly itself.",
    diagram: "",
    terms: ["synchronizer", "transmission_fluid", "planetary_gear_set"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "Manual Transmission Synchronizers",
    qChinese: "以下所有都是同步器总成的功能，除了：",
    optionsChinese: [
      "A) 在接合前使齿轮速度与输出轴速度匹配",
      "B) 将选定的齿轮锁定在输出轴上",
      "C) 提供输入轴和输出轴之间的齿轮减速",
      "D) 防止在速度同步之前换挡套筒接合"
    ],
    explanationChinese: "同步器总成匹配轴和齿轮的速度，将选定的齿轮锁定在轴上，并使用锁止环防止过早接合。齿轮减速是由中间轴和主轴上不同尺寸的齿轮副提供的，而非同步器总成本身。"
  },
  {
    id: 24,
    q: "A transmission is difficult to shift into any gear. The clutch hydraulic system has been verified to be operating correctly. What should the technician inspect NEXT?",
    options: [
      "A) The shift lever and internal shift rail mechanism for binding",
      "B) The flywheel for excessive runout",
      "C) The engine mounts for wear",
      "D) The driveshaft for balance"
    ],
    answer: 0,
    explanation: "If the clutch system is working correctly, hard shifting into all gears indicates a problem with the shift mechanism itself. The technician should inspect the shift lever, linkage, shift rails, and detent mechanisms for binding, corrosion, or misadjustment that would prevent smooth movement of the internal components.",
    diagram: "",
    terms: ["synchronizer", "transmission_fluid", "clutch_disc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "How Manual Transmission Works",
    qChinese: "变速器难以挂入任何挡位。离合器液压系统已验证工作正常。技师接下来应检查什么？",
    optionsChinese: [
      "A) 换挡杆和内部换挡轨机构是否有卡滞",
      "B) 飞轮跳动量是否过大",
      "C) 发动机支架是否磨损",
      "D) 传动轴是否平衡"
    ],
    explanationChinese: "如果离合器系统工作正常，所有挡位都难以换挡表明换挡机构本身有问题。技师应检查换挡杆、连杆、换挡轨和定位机构是否有卡滞、腐蚀或调整不当，这些都会阻止内部部件的顺畅运动。"
  },
  {
    id: 25,
    q: "What is the purpose of the detent mechanism in a manual transmission?",
    options: [
      "A) To synchronize gear speeds during shifting",
      "B) To hold the shift rail in the selected gear position and prevent accidental disengagement",
      "C) To provide lubrication to the shift forks",
      "D) To limit the travel of the clutch release bearing"
    ],
    answer: 1,
    explanation: "The detent mechanism consists of a spring-loaded ball or plunger that seats in grooves on the shift rail. It holds the transmission in the selected gear position and prevents the shift rail from moving out of position due to vibration or thrust forces, which would cause the transmission to jump out of gear.",
    diagram: "",
    terms: ["synchronizer", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "How Manual Transmission Works",
    qChinese: "手动变速器中定位机构的作用是什么？",
    optionsChinese: [
      "A) 在换挡过程中同步齿轮速度",
      "B) 将换挡轨保持在选定的挡位位置，防止意外脱挡",
      "C) 为拨叉提供润滑",
      "D) 限制离合器分离轴承的行程"
    ],
    explanationChinese: "定位机构由弹簧加载的钢球或柱塞组成，嵌入换挡轨上的凹槽中。它将变速器保持在选定的挡位位置，防止换挡轨因振动或推力而移动，否则会导致变速器跳挡。"
  },
  {
    id: 26,
    q: "A manual transmission leaks fluid from the input shaft seal area. What should the technician check before replacing the seal?",
    options: [
      "A) The transmission fluid level only",
      "B) The input shaft surface and bearing for wear that could cause the seal to leak",
      "C) The clutch disc for oil contamination",
      "D) The flywheel bolts for proper torque"
    ],
    answer: 1,
    explanation: "Before replacing the input shaft seal, the technician should inspect the shaft surface where the seal rides for grooves, scoring, or wear. A damaged shaft surface will quickly destroy a new seal. The input shaft bearing should also be checked, as excessive play allows shaft movement that causes seal leakage.",
    diagram: "",
    terms: ["transmission_fluid", "transmission_service", "clutch_disc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "How Manual Transmission Works",
    qChinese: "手动变速器从输入轴密封处漏油。在更换密封件之前，技师应检查什么？",
    optionsChinese: [
      "A) 仅检查变速器油液位",
      "B) 输入轴表面和轴承是否有磨损，这些磨损可能导致密封件泄漏",
      "C) 离合器摩擦片是否有油污染",
      "D) 飞轮螺栓扭矩是否正确"
    ],
    explanationChinese: "在更换输入轴密封件之前，技师应检查密封唇接触的轴表面是否有沟槽、划痕或磨损。损坏的轴表面会很快毁坏新密封件。还应检查输入轴轴承，因为过大的间隙允许轴移动，导致密封件泄漏。"
  },
  {
    id: 27,
    q: "Technician A says the interlock mechanism in a manual transmission prevents selecting two gears simultaneously. Technician B says the interlock mechanism is part of the synchronizer assembly. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Only Technician A is correct. The interlock mechanism uses pins or balls positioned between the shift rails to prevent more than one rail from moving at a time, which would engage two gears simultaneously and lock or damage the transmission. It is part of the shift rail assembly, not the synchronizer assembly.",
    diagram: "",
    terms: ["synchronizer", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "Manual Transmission Synchronizers",
    qChinese: "技师A说手动变速器中的互锁机构防止同时选择两个挡位。技师B说互锁机构是同步器总成的一部分。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "只有技师A是正确的。互锁机构使用定位在换挡轨之间的销或钢球来防止多根换挡轨同时移动，否则会同时接合两个挡位并锁死或损坏变速器。它是换挡轨总成的一部分，而非同步器总成。"
  },
  {
    id: 28,
    q: "A growling noise is heard from a manual transmission in neutral with the engine running. The noise goes away when the clutch pedal is depressed. What is the MOST likely cause?",
    options: [
      "A) Worn countershaft bearings",
      "B) Worn output shaft bearing",
      "C) Worn input shaft bearing",
      "D) Worn reverse idler bushing"
    ],
    answer: 2,
    explanation: "In neutral with the engine running and clutch engaged, the input shaft and countershaft spin while the output shaft is stationary. Depressing the clutch disconnects engine rotation from the input shaft. A noise that disappears when the clutch is depressed indicates a worn input shaft bearing, since it stops rotating.",
    diagram: "",
    terms: ["transmission_fluid", "clutch_disc", "synchronizer"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "How Manual Transmission Works",
    qChinese: "手动变速器在空挡、发动机运转时发出隆隆声。踩下离合器踏板后噪音消失。最可能的原因是什么？",
    optionsChinese: [
      "A) 中间轴轴承磨损",
      "B) 输出轴轴承磨损",
      "C) 输入轴轴承磨损",
      "D) 倒挡惰轮衬套磨损"
    ],
    explanationChinese: "在空挡、发动机运转且离合器接合时，输入轴和中间轴旋转而输出轴静止。踩下离合器将发动机旋转与输入轴断开。踩下离合器后消失的噪音表明输入轴轴承磨损，因为它停止了旋转。"
  },
  {
    id: 29,
    q: "What is the correct procedure for checking the fluid level in most manual transmissions?",
    options: [
      "A) Check the dipstick with the engine running",
      "B) Remove the fill plug and verify fluid is level with the bottom of the fill hole",
      "C) Check the sight glass on the side of the case",
      "D) Drain and measure the fluid, then compare to specifications"
    ],
    answer: 1,
    explanation: "Most manual transmissions do not have a dipstick. The correct procedure is to remove the fill plug, which is typically located on the side of the transmission case. The fluid should be level with the bottom edge of the fill hole. If fluid flows out when the plug is removed, the level is correct.",
    diagram: "",
    terms: ["transmission_fluid", "transmission_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "How Manual Transmission Works",
    qChinese: "大多数手动变速器检查油液位的正确程序是什么？",
    optionsChinese: [
      "A) 发动机运转时检查油尺",
      "B) 拆下加油塞，确认油液与加油孔底部齐平",
      "C) 检查壳体侧面的油位观察窗",
      "D) 排出并测量油液量，然后与规格对比"
    ],
    explanationChinese: "大多数手动变速器没有油尺。正确的程序是拆下加油塞，该塞通常位于变速器壳体侧面。油液应与加油孔底部边缘齐平。如果拆下塞子时有油液流出，则液位正确。"
  },
  {
    id: 30,
    q: "A five-speed manual transmission has excessive end play on the output shaft. Which of the following symptoms would this MOST likely cause?",
    options: [
      "A) Hard shifting into all gears",
      "B) Noise and possible jumping out of gear",
      "C) Clutch slippage at high RPM",
      "D) Transmission fluid leaks at the rear seal"
    ],
    answer: 1,
    explanation: "Excessive output shaft end play allows the shaft and its gears to move axially, which misaligns the synchronizer assemblies with their mating gears. This misalignment produces noise from improper gear mesh and can cause the transmission to jump out of gear because the synchronizer sleeve cannot fully engage.",
    diagram: "",
    terms: ["synchronizer", "transmission_fluid", "speed_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "Manual Transmission Synchronizers",
    qChinese: "五速手动变速器的输出轴轴向间隙过大。这最可能导致以下哪种症状？",
    optionsChinese: [
      "A) 所有挡位换挡困难",
      "B) 噪音和可能的跳挡",
      "C) 高转速时离合器打滑",
      "D) 后密封处变速器油液泄漏"
    ],
    explanationChinese: "输出轴轴向间隙过大允许轴及其齿轮沿轴向移动，使同步器总成与配合齿轮错位。这种错位会因齿轮啮合不当产生噪音，并可能导致变速器跳挡，因为同步器套筒无法完全接合。"
  },
  {
    id: 31,
    q: "When reassembling a manual transmission, what is the purpose of measuring synchronizer blocker ring clearance?",
    options: [
      "A) To verify proper gear backlash",
      "B) To ensure there is adequate friction material for speed synchronization",
      "C) To set proper input shaft end play",
      "D) To verify the interlock mechanism is functioning"
    ],
    answer: 1,
    explanation: "Blocker ring clearance is the gap between the blocker ring and the gear's dog teeth. This measurement indicates the remaining friction material on the ring's cone surface. If the clearance is below specification, the ring cannot generate enough friction to synchronize speeds, resulting in gear clash during shifting.",
    diagram: "",
    terms: ["synchronizer", "transmission_fluid", "transmission_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "Manual Transmission Synchronizers",
    qChinese: "重新组装手动变速器时，测量同步器锁止环间隙的目的是什么？",
    optionsChinese: [
      "A) 验证齿轮间隙是否正确",
      "B) 确保有足够的摩擦材料用于速度同步",
      "C) 设定正确的输入轴轴向间隙",
      "D) 验证互锁机构是否正常工作"
    ],
    explanationChinese: "锁止环间隙是锁止环与齿轮犬齿之间的间距。此测量值表明锁止环锥面上剩余摩擦材料的量。如果间隙低于规格值，锁止环无法产生足够的摩擦力来同步速度，导致换挡时齿轮撞击。"
  },
  {
    id: 32,
    q: "A vehicle with a manual transmission makes a clunking noise when shifting from first to second gear. The noise is not present when shifting slowly. What is the MOST likely cause?",
    options: [
      "A) Worn engine mounts allowing excessive drivetrain movement",
      "B) Low transmission fluid",
      "C) Worn synchronizer blocker ring",
      "D) Broken input shaft retaining snap ring"
    ],
    answer: 0,
    explanation: "A clunk during quick shifts that disappears with slow shifts often indicates worn engine or transmission mounts. During quick shifts, the torque reversal causes excessive drivetrain movement on the soft mounts, producing a clunk. Slow shifts minimize the torque change, preventing the noise from worn mounts.",
    diagram: "",
    terms: ["engine_mount", "synchronizer", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "How Manual Transmission Works",
    qChinese: "配备手动变速器的车辆在从一挡换到二挡时发出撞击声。慢速换挡时不存在此噪音。最可能的原因是什么？",
    optionsChinese: [
      "A) 发动机支架磨损导致传动系统过度移动",
      "B) 变速器油液不足",
      "C) 同步器锁止环磨损",
      "D) 输入轴卡环断裂"
    ],
    explanationChinese: "快速换挡时出现的撞击声在慢速换挡时消失，通常表明发动机或变速器支架磨损。快速换挡时扭矩反转导致传动系统在松软的支架上过度移动，产生撞击声。慢速换挡将扭矩变化最小化，防止磨损支架产生噪音。"
  },
  {
    id: 33,
    q: "Which of the following transmission problems would be indicated by finding brass-colored particles in the transmission fluid?",
    options: [
      "A) Worn gear teeth",
      "B) Worn synchronizer blocker rings",
      "C) Worn output shaft bearings",
      "D) A cracked transmission case"
    ],
    answer: 1,
    explanation: "Synchronizer blocker rings are commonly made of brass or a brass alloy. Brass-colored particles in the transmission fluid indicate that the blocker rings are wearing. As these rings wear, they lose their ability to synchronize gear speeds effectively, which eventually leads to gear clash during shifting.",
    diagram: "",
    terms: ["synchronizer", "transmission_fluid", "transmission_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "Manual Transmission Synchronizers",
    qChinese: "在变速器油液中发现黄铜色颗粒表明以下哪种变速器问题？",
    optionsChinese: [
      "A) 齿轮齿磨损",
      "B) 同步器锁止环磨损",
      "C) 输出轴轴承磨损",
      "D) 变速器壳体裂纹"
    ],
    explanationChinese: "同步器锁止环通常由黄铜或黄铜合金制成。变速器油液中的黄铜色颗粒表明锁止环正在磨损。随着这些环的磨损，它们有效同步齿轮速度的能力降低，最终导致换挡时齿轮撞击。"
  },

  // ===== TRANSAXLE DIAGNOSIS & REPAIR (Questions 34–50) =====
  {
    id: 34,
    q: "A front-wheel-drive vehicle exhibits a clicking noise during tight turns. The noise increases with speed. What is the MOST likely cause?",
    options: [
      "A) Worn transaxle bearings",
      "B) Worn outer CV joint",
      "C) Worn inner CV joint",
      "D) Damaged transaxle differential gears"
    ],
    answer: 1,
    explanation: "A clicking noise during tight turns is the classic symptom of a worn outer CV joint. The outer joint operates at larger angles during turning, and when the internal ball tracks are worn, the balls click as they ride over the damaged surfaces. This symptom is most pronounced during slow, tight turns.",
    diagram: "",
    terms: ["cv_joint", "differential", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Constant_velocity_joint.jpg/640px-Constant_velocity_joint.jpg",
    youtube: "https://www.youtube.com/watch?v=m_aGMPSljfg",
    youtubeTitle: "CV Joint Explained and Diagnosis",
    qChinese: "前轮驱动车辆在急转弯时发出咔嗒声。噪音随车速增加而增大。最可能的原因是什么？",
    optionsChinese: [
      "A) 变速驱动桥轴承磨损",
      "B) 外侧等速万向节磨损",
      "C) 内侧等速万向节磨损",
      "D) 变速驱动桥差速器齿轮损坏"
    ],
    explanationChinese: "急转弯时的咔嗒声是外侧等速万向节磨损的典型症状。外侧万向节在转弯时以较大角度工作，当内部球道磨损时，滚珠在损坏的表面上滚动会发出咔嗒声。这种症状在慢速急转弯时最为明显。"
  },
  {
    id: 35,
    q: "A transaxle has a whining noise that changes with vehicle speed but does not change when shifting gears. Which component is MOST likely at fault?",
    options: [
      "A) The synchronizer assembly",
      "B) The differential ring and pinion gears",
      "C) The countershaft bearings",
      "D) The input shaft bearing"
    ],
    answer: 1,
    explanation: "A whine that varies with vehicle speed but remains constant regardless of the selected gear indicates a differential ring and pinion gear issue. These gears are always in mesh and turning whenever the vehicle moves, regardless of which transmission gear is selected, making them speed-dependent but gear-independent.",
    diagram: "",
    terms: ["differential", "transmission_fluid", "speed_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Differential_gear.jpg/640px-Differential_gear.jpg",
    youtube: "https://www.youtube.com/watch?v=yYAw79386WI",
    youtubeTitle: "How a Differential Works",
    qChinese: "变速驱动桥发出的嗡嗡声随车速变化但换挡时不变。哪个部件最可能出了问题？",
    optionsChinese: [
      "A) 同步器总成",
      "B) 差速器环形齿轮和小齿轮",
      "C) 中间轴轴承",
      "D) 输入轴轴承"
    ],
    explanationChinese: "随车速变化但不受选定挡位影响的嗡嗡声表明差速器环形齿轮和小齿轮有问题。这些齿轮在车辆行驶时始终啮合和旋转，无论选择哪个变速器挡位，使其与速度相关但与挡位无关。"
  },
  {
    id: 36,
    q: "Technician A says transaxle bearing preload is adjusted with shims. Technician B says transaxle bearing preload is adjusted by selective fit snap rings. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Transaxle bearing preload is set using different methods depending on the manufacturer's design. Some transaxles use shims of varying thickness between the bearing and its seat, while others use selective-fit snap rings of different thicknesses to achieve the specified bearing preload.",
    diagram: "",
    terms: ["differential", "transmission_fluid", "transmission_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Differential_gear.jpg/640px-Differential_gear.jpg",
    youtube: "https://www.youtube.com/watch?v=yYAw79386WI",
    youtubeTitle: "How a Differential Works",
    qChinese: "技师A说变速驱动桥轴承预紧力通过垫片调整。技师B说变速驱动桥轴承预紧力通过选配卡环调整。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "两位技师都是正确的。变速驱动桥轴承预紧力根据制造商的设计采用不同方法设定。一些变速驱动桥使用不同厚度的垫片放在轴承和轴承座之间，而其他则使用不同厚度的选配卡环来达到规定的轴承预紧力。"
  },
  {
    id: 37,
    q: "A front-wheel-drive vehicle pulls to one side during acceleration but drives straight during cruising. What is the MOST likely cause?",
    options: [
      "A) Incorrect wheel alignment",
      "B) Unequal-length half-shaft torque steer",
      "C) Worn transaxle differential side gears",
      "D) A stuck brake caliper"
    ],
    answer: 1,
    explanation: "Torque steer occurs during acceleration in front-wheel-drive vehicles with unequal-length half-shafts. The different shaft lengths create unequal deflection angles under torque, causing one wheel to receive slightly more driving force. This pulls the vehicle to one side only during acceleration, not during cruising.",
    diagram: "",
    terms: ["cv_joint", "differential", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Constant_velocity_joint.jpg/640px-Constant_velocity_joint.jpg",
    youtube: "https://www.youtube.com/watch?v=m_aGMPSljfg",
    youtubeTitle: "CV Joint Explained and Diagnosis",
    qChinese: "前轮驱动车辆在加速时向一侧跑偏，但巡航时直线行驶。最可能的原因是什么？",
    optionsChinese: [
      "A) 车轮定位不正确",
      "B) 不等长半轴扭矩转向",
      "C) 变速驱动桥差速器侧齿轮磨损",
      "D) 制动钳卡滞"
    ],
    explanationChinese: "扭矩转向发生在具有不等长半轴的前轮驱动车辆加速时。不同的轴长在扭矩作用下产生不相等的偏转角度，导致一个车轮接收略多的驱动力。这仅在加速时将车辆拉向一侧，巡航时则不会。"
  },
  {
    id: 38,
    q: "All of the following are inspected during transaxle differential service EXCEPT:",
    options: [
      "A) Ring gear backlash",
      "B) Differential side gear clearance",
      "C) Synchronizer hub end play",
      "D) Pinion bearing preload"
    ],
    answer: 2,
    explanation: "Synchronizer hub end play is a transmission section measurement, not a differential service item. During differential service, the technician inspects ring gear backlash, differential side gear and pinion gear clearances, pinion bearing preload, and the condition of the ring and pinion gear tooth contact patterns.",
    diagram: "",
    terms: ["differential", "synchronizer", "transmission_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Differential_gear.jpg/640px-Differential_gear.jpg",
    youtube: "https://www.youtube.com/watch?v=yYAw79386WI",
    youtubeTitle: "How a Differential Works",
    qChinese: "以下所有项目都在变速驱动桥差速器保养时检查，除了：",
    optionsChinese: [
      "A) 环形齿轮齿隙",
      "B) 差速器侧齿轮间隙",
      "C) 同步器花键毂轴向间隙",
      "D) 小齿轮轴承预紧力"
    ],
    explanationChinese: "同步器花键毂轴向间隙是变速器部分的测量项目，而非差速器保养项目。在差速器保养期间，技师检查环形齿轮齿隙、差速器侧齿轮和行星齿轮间隙、小齿轮轴承预紧力以及环形齿轮和小齿轮齿面接触斑型。"
  },
  {
    id: 39,
    q: "A transaxle is leaking fluid from the area where the half-shaft enters the case. What is the MOST likely failed component?",
    options: [
      "A) The transaxle case gasket",
      "B) The differential side bearing",
      "C) The half-shaft seal (axle seal)",
      "D) The CV joint boot"
    ],
    answer: 2,
    explanation: "The half-shaft seal, also called the axle seal, is located where each half-shaft enters the transaxle case. This seal prevents fluid from escaping along the shaft. A worn or damaged seal at this location is the most likely source of a leak in the half-shaft entry area of the transaxle.",
    diagram: "",
    terms: ["cv_joint", "transmission_fluid", "differential"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Constant_velocity_joint.jpg/640px-Constant_velocity_joint.jpg",
    youtube: "https://www.youtube.com/watch?v=m_aGMPSljfg",
    youtubeTitle: "CV Joint Explained and Diagnosis",
    qChinese: "变速驱动桥在半轴进入壳体的位置漏油。最可能失效的部件是什么？",
    optionsChinese: [
      "A) 变速驱动桥壳体垫片",
      "B) 差速器侧轴承",
      "C) 半轴油封（轴封）",
      "D) 等速万向节防尘套"
    ],
    explanationChinese: "半轴油封，也称为轴封，位于每根半轴进入变速驱动桥壳体的位置。该密封件防止油液沿轴溢出。在变速驱动桥半轴入口区域磨损或损坏的密封件是最可能的泄漏源。"
  },
  {
    id: 40,
    q: "A vibration is felt in a front-wheel-drive vehicle at highway speed and is present in all gears. The vibration goes away when the vehicle is in neutral and coasting. What is the MOST likely cause?",
    options: [
      "A) Worn tires",
      "B) Worn transaxle output bearings",
      "C) A damaged inner CV joint",
      "D) An unbalanced driveshaft"
    ],
    answer: 1,
    explanation: "A vibration present in all gears at highway speed that disappears in neutral indicates a transaxle output bearing issue. In neutral, the output components are unloaded and spin freely, reducing the vibration. Tire-related vibration would persist in neutral. CV joint issues typically cause clicking or clunking, not a sustained vibration.",
    diagram: "",
    terms: ["differential", "cv_joint", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Differential_gear.jpg/640px-Differential_gear.jpg",
    youtube: "https://www.youtube.com/watch?v=yYAw79386WI",
    youtubeTitle: "How a Differential Works",
    qChinese: "前轮驱动车辆在高速公路速度下在所有挡位中感到振动。车辆在空挡滑行时振动消失。最可能的原因是什么？",
    optionsChinese: [
      "A) 轮胎磨损",
      "B) 变速驱动桥输出轴承磨损",
      "C) 内侧等速万向节损坏",
      "D) 传动轴不平衡"
    ],
    explanationChinese: "在所有挡位、高速公路速度下存在、但在空挡时消失的振动表明变速驱动桥输出轴承有问题。在空挡时，输出部件未受载并自由旋转，减轻了振动。轮胎相关的振动在空挡时会持续存在。等速万向节问题通常导致咔嗒声或撞击声，而非持续振动。"
  },
  {
    id: 41,
    q: "When setting differential bearing preload in a transaxle, what tool is used to measure the rolling torque of the bearings?",
    options: [
      "A) A dial indicator",
      "B) An inch-pound torque wrench",
      "C) A micrometer",
      "D) A feeler gauge"
    ],
    answer: 1,
    explanation: "An inch-pound torque wrench is used to measure the rolling torque, or turning resistance, of the differential bearings. The wrench is attached to the pinion shaft or ring gear bolt, and the force required to rotate the assembly is measured. This value is compared to specifications to verify proper preload.",
    diagram: "",
    terms: ["differential", "transmission_service", "lug_nut_torque"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Differential_gear.jpg/640px-Differential_gear.jpg",
    youtube: "https://www.youtube.com/watch?v=yYAw79386WI",
    youtubeTitle: "How a Differential Works",
    qChinese: "在变速驱动桥中设定差速器轴承预紧力时，使用什么工具测量轴承的滚动扭矩？",
    optionsChinese: [
      "A) 百分表",
      "B) 英寸磅扭力扳手",
      "C) 千分尺",
      "D) 塞规"
    ],
    explanationChinese: "英寸磅扭力扳手用于测量差速器轴承的滚动扭矩或转动阻力。扳手连接在小齿轮轴或环形齿轮螺栓上，测量旋转总成所需的力。将此数值与规格进行比较以验证预紧力是否正确。"
  },
  {
    id: 42,
    q: "A front-wheel-drive vehicle makes a humming noise from the transaxle area that increases with speed. The noise is louder on right turns. Which bearing is MOST likely worn?",
    options: [
      "A) Left-side wheel bearing",
      "B) Right-side wheel bearing",
      "C) Left differential side bearing",
      "D) Right differential side bearing"
    ],
    answer: 0,
    explanation: "When turning right, more weight transfers to the left side of the vehicle, loading the left-side bearing more heavily. If the left-side bearing is worn, the increased load during right turns amplifies the humming noise. Noise from a good bearing would typically not change significantly with turning direction.",
    diagram: "",
    terms: ["differential", "cv_joint", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Differential_gear.jpg/640px-Differential_gear.jpg",
    youtube: "https://www.youtube.com/watch?v=yYAw79386WI",
    youtubeTitle: "How a Differential Works",
    qChinese: "前轮驱动车辆从变速驱动桥区域发出嗡嗡声，随车速增加而增大。右转时噪音更大。哪个轴承最可能磨损？",
    optionsChinese: [
      "A) 左侧车轮轴承",
      "B) 右侧车轮轴承",
      "C) 左侧差速器侧轴承",
      "D) 右侧差速器侧轴承"
    ],
    explanationChinese: "右转时更多重量转移到车辆左侧，使左侧轴承承受更大负载。如果左侧轴承磨损，右转时增加的负载会放大嗡嗡声。正常轴承的噪音通常不会随转弯方向明显变化。"
  },
  {
    id: 43,
    q: "During transaxle removal, which of the following should be done FIRST?",
    options: [
      "A) Remove the half-shafts from the transaxle",
      "B) Disconnect the battery negative cable",
      "C) Drain the transaxle fluid",
      "D) Remove the starter motor"
    ],
    answer: 1,
    explanation: "Disconnecting the battery negative cable should always be the first step before any major component removal. This prevents accidental short circuits, electrical damage, or unintended starter engagement during the procedure. After electrical safety is ensured, the technician can proceed with draining fluid and removing components.",
    diagram: "",
    terms: ["battery", "starter_motor", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "How Manual Transmission Works",
    qChinese: "在拆卸变速驱动桥时，以下哪项应首先完成？",
    optionsChinese: [
      "A) 从变速驱动桥上拆下半轴",
      "B) 断开蓄电池负极电缆",
      "C) 排放变速驱动桥油液",
      "D) 拆下起动机"
    ],
    explanationChinese: "在任何重大部件拆卸之前，断开蓄电池负极电缆应始终是第一步。这可以防止意外短路、电气损坏或在操作过程中起动机意外接合。确保电气安全后，技师可以继续排放油液和拆卸部件。"
  },
  {
    id: 44,
    q: "A transaxle pops out of fifth gear when going over bumps. Technician A says worn detent springs could be the cause. Technician B says worn fifth gear synchronizer teeth could be the cause. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Weak or broken detent springs cannot hold the shift rail firmly in position, allowing bumps to jar the mechanism out of gear. Additionally, worn synchronizer engagement teeth on the hub and sleeve do not lock solidly, making it easier for vibration or shock loads to push the gear out.",
    diagram: "",
    terms: ["synchronizer", "transmission_fluid", "differential"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "Manual Transmission Synchronizers",
    qChinese: "变速驱动桥在过颠簸时从五挡跳挡。技师A说定位弹簧磨损可能是原因。技师B说五挡同步器齿磨损可能是原因。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "两位技师都是正确的。弱化或断裂的定位弹簧无法将换挡轨牢固地保持在位，使颠簸可以将机构从挡位中震出。此外，同步器花键毂和套筒上磨损的接合齿无法牢固锁定，使振动或冲击载荷更容易将齿轮推出。"
  },
  {
    id: 45,
    q: "Which of the following is used to set the correct differential ring gear backlash in a transaxle?",
    options: [
      "A) Adjusting the pinion depth shim",
      "B) Moving the differential bearing preload shims from one side to the other",
      "C) Changing the thickness of the ring gear bolts",
      "D) Adjusting the input shaft end play"
    ],
    answer: 1,
    explanation: "Ring gear backlash in a transaxle is adjusted by redistributing shims between the two differential bearings. Moving shims from one side to the other shifts the differential assembly and ring gear closer to or farther from the pinion gear, changing the backlash while maintaining the total bearing preload.",
    diagram: "",
    terms: ["differential", "transmission_service", "planetary_gear_set"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Differential_gear.jpg/640px-Differential_gear.jpg",
    youtube: "https://www.youtube.com/watch?v=yYAw79386WI",
    youtubeTitle: "How a Differential Works",
    qChinese: "以下哪项用于设定变速驱动桥中差速器环形齿轮的正确齿隙？",
    optionsChinese: [
      "A) 调整小齿轮深度垫片",
      "B) 将差速器轴承预紧力垫片从一侧移到另一侧",
      "C) 改变环形齿轮螺栓的厚度",
      "D) 调整输入轴轴向间隙"
    ],
    explanationChinese: "变速驱动桥中的环形齿轮齿隙通过在两个差速器轴承之间重新分配垫片来调整。将垫片从一侧移到另一侧可以使差速器总成和环形齿轮靠近或远离小齿轮，改变齿隙的同时保持总轴承预紧力不变。"
  },
  {
    id: 46,
    q: "A grinding noise occurs in all gears of a transaxle. The fluid level is correct and appears clean. What is the MOST likely cause?",
    options: [
      "A) Worn synchronizer blocker rings in multiple gears",
      "B) A damaged countershaft bearing",
      "C) A cracked ring gear",
      "D) Contaminated transmission fluid"
    ],
    answer: 1,
    explanation: "A grinding noise present in all gears suggests a common component is at fault. The countershaft and its bearings are involved in all gear ratios in a transaxle. A damaged countershaft bearing would produce noise regardless of which gear is selected, since the countershaft always rotates when the input shaft turns.",
    diagram: "",
    terms: ["transmission_fluid", "differential", "synchronizer"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "How Manual Transmission Works",
    qChinese: "变速驱动桥在所有挡位都有研磨噪音。油液位正确且外观清洁。最可能的原因是什么？",
    optionsChinese: [
      "A) 多个挡位的同步器锁止环磨损",
      "B) 中间轴轴承损坏",
      "C) 环形齿轮裂纹",
      "D) 变速器油液被污染"
    ],
    explanationChinese: "在所有挡位都存在的研磨噪音表明是公共部件有问题。中间轴及其轴承参与变速驱动桥中所有齿轮比的传动。损坏的中间轴轴承无论选择哪个挡位都会产生噪音，因为输入轴旋转时中间轴始终在转动。"
  },
  {
    id: 47,
    q: "What is the purpose of the differential assembly in a transaxle?",
    options: [
      "A) To provide gear reduction only",
      "B) To allow the drive wheels to rotate at different speeds during turns",
      "C) To synchronize gear changes",
      "D) To connect the engine to the transmission input shaft"
    ],
    answer: 1,
    explanation: "The differential assembly allows the two drive wheels to rotate at different speeds during turns. The inner wheel travels a shorter path and must rotate slower than the outer wheel. Without the differential, the tires would scrub and skip during turns, causing excessive wear and handling instability.",
    diagram: "",
    terms: ["differential", "cv_joint", "planetary_gear_set"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Differential_gear.jpg/640px-Differential_gear.jpg",
    youtube: "https://www.youtube.com/watch?v=yYAw79386WI",
    youtubeTitle: "How a Differential Works",
    qChinese: "变速驱动桥中差速器总成的作用是什么？",
    optionsChinese: [
      "A) 仅提供齿轮减速",
      "B) 允许驱动轮在转弯时以不同速度旋转",
      "C) 同步换挡",
      "D) 将发动机连接到变速器输入轴"
    ],
    explanationChinese: "差速器总成允许两个驱动轮在转弯时以不同速度旋转。内侧车轮行驶路径较短，必须比外侧车轮旋转得慢。没有差速器，轮胎在转弯时会磨损和跳动，导致过度磨损和操控不稳定。"
  },
  {
    id: 48,
    q: "After a transaxle rebuild, the technician notices the speedometer reads incorrectly. What is the MOST likely cause?",
    options: [
      "A) The wrong viscosity fluid was used",
      "B) The vehicle speed sensor drive gear was installed incorrectly or the wrong gear was used",
      "C) The differential bearings have excessive preload",
      "D) The ring gear backlash is incorrect"
    ],
    answer: 1,
    explanation: "An incorrect speedometer reading after a transaxle rebuild is most likely caused by an incorrectly installed or wrong vehicle speed sensor drive gear. Different gear tooth counts are used for various final drive ratios and tire sizes. Using the wrong gear or installing it improperly directly affects speed signal accuracy.",
    diagram: "",
    terms: ["speed_sensor", "differential", "transmission_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Differential_gear.jpg/640px-Differential_gear.jpg",
    youtube: "https://www.youtube.com/watch?v=yYAw79386WI",
    youtubeTitle: "How a Differential Works",
    qChinese: "变速驱动桥重建后，技师注意到车速表读数不正确。最可能的原因是什么？",
    optionsChinese: [
      "A) 使用了错误粘度的油液",
      "B) 车速传感器驱动齿轮安装不正确或使用了错误的齿轮",
      "C) 差速器轴承预紧力过大",
      "D) 环形齿轮齿隙不正确"
    ],
    explanationChinese: "变速驱动桥重建后车速表读数不正确，最可能是由安装不正确或错误的车速传感器驱动齿轮引起的。不同的齿数用于各种终传比和轮胎尺寸。使用错误的齿轮或安装不当会直接影响车速信号的准确性。"
  },
  {
    id: 49,
    q: "A transaxle has a clunking noise when shifting from Park to Drive. What is the MOST likely cause?",
    options: [
      "A) This is a manual transaxle issue related to synchronizers",
      "B) Worn differential side gears or excessive backlash in the ring and pinion",
      "C) A damaged input shaft bearing",
      "D) Worn half-shaft splines"
    ],
    answer: 1,
    explanation: "A clunk when initial torque is applied indicates excessive clearance in the drivetrain. Worn differential side gears or excessive ring and pinion backlash allow free play that produces a clunk when the drivetrain transitions from unloaded to loaded. The slack is taken up suddenly, creating the noise.",
    diagram: "",
    terms: ["differential", "cv_joint", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Differential_gear.jpg/640px-Differential_gear.jpg",
    youtube: "https://www.youtube.com/watch?v=yYAw79386WI",
    youtubeTitle: "How a Differential Works",
    qChinese: "变速驱动桥从驻车挡换到前进挡时发出撞击声。最可能的原因是什么？",
    optionsChinese: [
      "A) 这是与同步器相关的手动变速驱动桥问题",
      "B) 差速器侧齿轮磨损或环形齿轮与小齿轮齿隙过大",
      "C) 输入轴轴承损坏",
      "D) 半轴花键磨损"
    ],
    explanationChinese: "初始扭矩施加时发出的撞击声表明传动系统中存在过大间隙。磨损的差速器侧齿轮或过大的环形齿轮与小齿轮齿隙产生自由间隙，在传动系统从无负载过渡到有负载时突然消除，产生噪音。"
  },
  {
    id: 50,
    q: "Which measurement is critical when installing a new ring and pinion gear set in a transaxle differential?",
    options: [
      "A) Clutch disc thickness",
      "B) Gear tooth contact pattern",
      "C) Input shaft spline depth",
      "D) Synchronizer sleeve travel"
    ],
    answer: 1,
    explanation: "The gear tooth contact pattern is critical when installing a new ring and pinion set. The contact pattern reveals whether the pinion depth and backlash are correctly set. An incorrect pattern causes noise, vibration, and premature gear wear. The pattern is checked using marking compound painted on the ring gear teeth.",
    diagram: "",
    terms: ["differential", "transmission_service", "planetary_gear_set"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Differential_gear.jpg/640px-Differential_gear.jpg",
    youtube: "https://www.youtube.com/watch?v=yYAw79386WI",
    youtubeTitle: "How a Differential Works",
    qChinese: "在变速驱动桥差速器中安装新的环形齿轮和小齿轮齿轮组时，哪项测量至关重要？",
    optionsChinese: [
      "A) 离合器摩擦片厚度",
      "B) 齿面接触斑型",
      "C) 输入轴花键深度",
      "D) 同步器套筒行程"
    ],
    explanationChinese: "安装新的环形齿轮和小齿轮组时，齿面接触斑型至关重要。接触斑型揭示小齿轮深度和齿隙是否设置正确。不正确的斑型会导致噪音、振动和齿轮过早磨损。斑型通过在环形齿轮齿面上涂抹标记化合物来检查。"
  },

  // ===== DRIVE SHAFT/HALF-SHAFT AND CV JOINTS (Questions 51–63) =====
  {
    id: 51,
    q: "A rear-wheel-drive vehicle has a vibration at highway speed that increases with speed. The vibration is present in all gears and in neutral. What should the technician check FIRST?",
    options: [
      "A) Transmission output shaft bearing",
      "B) Driveshaft balance and U-joint condition",
      "C) Rear axle pinion bearing",
      "D) Engine mounts"
    ],
    answer: 1,
    explanation: "A speed-related vibration present in all gears and in neutral that increases with speed is characteristic of a driveshaft issue. The driveshaft spins whenever the vehicle moves regardless of gear selection. The technician should check for driveshaft imbalance, missing balance weights, bent shaft, or worn U-joints first.",
    diagram: "",
    terms: ["universal_joint", "differential", "speed_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Universal_joint.jpg/640px-Universal_joint.jpg",
    youtube: "https://www.youtube.com/watch?v=9mJJMfJbMi0",
    youtubeTitle: "Universal Joint - How It Works",
    qChinese: "后轮驱动车辆在高速公路速度下有振动，随车速增加而加剧。振动在所有挡位和空挡时都存在。技师应首先检查什么？",
    optionsChinese: [
      "A) 变速器输出轴轴承",
      "B) 传动轴平衡和万向节状况",
      "C) 后桥小齿轮轴承",
      "D) 发动机支架"
    ],
    explanationChinese: "在所有挡位和空挡时都存在、随车速增加而加剧的与速度相关的振动是传动轴问题的特征。无论选择哪个挡位，传动轴在车辆行驶时始终旋转。技师应首先检查传动轴不平衡、缺失平衡块、轴弯曲或万向节磨损。"
  },
  {
    id: 52,
    q: "What is the purpose of maintaining proper U-joint phasing on a two-piece driveshaft?",
    options: [
      "A) To reduce driveshaft weight",
      "B) To cancel out speed fluctuations caused by the operating angles of the U-joints",
      "C) To increase the torque capacity of the driveshaft",
      "D) To reduce noise from the center support bearing"
    ],
    answer: 1,
    explanation: "Proper U-joint phasing ensures that the speed fluctuations (non-uniform velocity) created by one U-joint are cancelled by the next U-joint in the series. The yokes at each end of a shaft section must be in the same plane. Incorrect phasing causes vibration because the speed variations add rather than cancel.",
    diagram: "",
    terms: ["universal_joint", "differential", "cv_joint"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Universal_joint.jpg/640px-Universal_joint.jpg",
    youtube: "https://www.youtube.com/watch?v=9mJJMfJbMi0",
    youtubeTitle: "Universal Joint - How It Works",
    qChinese: "在两段式传动轴上保持正确万向节相位的目的是什么？",
    optionsChinese: [
      "A) 减轻传动轴重量",
      "B) 消除万向节工作角度引起的速度波动",
      "C) 增加传动轴的扭矩承载能力",
      "D) 减少中间支撑轴承的噪音"
    ],
    explanationChinese: "正确的万向节相位确保一个万向节产生的速度波动（不等速性）被系列中下一个万向节消除。每个轴段两端的叉应在同一平面内。不正确的相位会导致振动，因为速度变化是叠加而非消除。"
  },
  {
    id: 53,
    q: "A clunking noise is heard from the rear of a rear-wheel-drive vehicle when shifting from drive to reverse. What is the MOST likely cause?",
    options: [
      "A) Worn U-joints with excessive play",
      "B) A bent driveshaft",
      "C) Worn center support bearing",
      "D) Incorrect driveshaft phasing"
    ],
    answer: 0,
    explanation: "A clunk during the transition from drive to reverse indicates excessive free play in the drivetrain. Worn U-joints develop clearance in their needle bearing caps, creating slack. When the direction of torque reverses, this slack is taken up suddenly, producing a distinct clunking sound from the driveshaft area.",
    diagram: "",
    terms: ["universal_joint", "differential", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Universal_joint.jpg/640px-Universal_joint.jpg",
    youtube: "https://www.youtube.com/watch?v=9mJJMfJbMi0",
    youtubeTitle: "Universal Joint - How It Works",
    qChinese: "后轮驱动车辆在从前进挡换到倒挡时，从后部听到撞击声。最可能的原因是什么？",
    optionsChinese: [
      "A) 万向节磨损且间隙过大",
      "B) 传动轴弯曲",
      "C) 中间支撑轴承磨损",
      "D) 传动轴相位不正确"
    ],
    explanationChinese: "从前进挡到倒挡过渡时的撞击声表明传动系统中有过大的自由间隙。磨损的万向节在滚针轴承盖中产生间隙，形成松动。当扭矩方向反转时，这个松动被突然消除，从传动轴区域产生明显的撞击声。"
  },
  {
    id: 54,
    q: "Technician A says a torn CV joint boot should be replaced immediately to prevent joint damage. Technician B says if the CV joint is still in good condition after boot inspection, only the boot needs replacement. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. A torn boot should be replaced immediately because contamination and grease loss will quickly damage the joint. If the joint is inspected and found to be in good condition with no excessive play, roughness, or contamination damage, replacing only the boot with fresh grease is acceptable.",
    diagram: "",
    terms: ["cv_joint", "differential", "multipoint_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Constant_velocity_joint.jpg/640px-Constant_velocity_joint.jpg",
    youtube: "https://www.youtube.com/watch?v=m_aGMPSljfg",
    youtubeTitle: "CV Joint Explained and Diagnosis",
    qChinese: "技师A说撕裂的等速万向节防尘套应立即更换以防止万向节损坏。技师B说如果检查后等速万向节仍状态良好，只需更换防尘套。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "两位技师都是正确的。撕裂的防尘套应立即更换，因为污染物和润滑脂流失会迅速损坏万向节。如果检查万向节发现状态良好，没有过大间隙、粗糙感或污染损坏，则仅更换防尘套并补充新润滑脂是可以接受的。"
  },
  {
    id: 55,
    q: "A front-wheel-drive vehicle exhibits a vibration during acceleration from a stop that diminishes at higher speeds. What is the MOST likely cause?",
    options: [
      "A) Worn outer CV joints",
      "B) Worn inner CV joints or excessive plunge joint play",
      "C) Unbalanced front tires",
      "D) Worn front wheel bearings"
    ],
    answer: 1,
    explanation: "A vibration during acceleration from a stop that diminishes at higher speeds points to worn inner CV joints. The inner joints operate at their highest angles and loads during initial acceleration when drivetrain torque is greatest. As speed increases, the operating angles decrease, reducing the vibration from the worn joint.",
    diagram: "",
    terms: ["cv_joint", "differential", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Constant_velocity_joint.jpg/640px-Constant_velocity_joint.jpg",
    youtube: "https://www.youtube.com/watch?v=m_aGMPSljfg",
    youtubeTitle: "CV Joint Explained and Diagnosis",
    qChinese: "前轮驱动车辆在起步加速时出现振动，在较高速度时减弱。最可能的原因是什么？",
    optionsChinese: [
      "A) 外侧等速万向节磨损",
      "B) 内侧等速万向节磨损或滑动万向节间隙过大",
      "C) 前轮不平衡",
      "D) 前轮轴承磨损"
    ],
    explanationChinese: "起步加速时出现、在较高速度时减弱的振动指向内侧等速万向节磨损。内侧万向节在初始加速时工作角度最大、负载最重，此时传动系统扭矩最大。随着速度增加，工作角度减小，磨损万向节的振动减轻。"
  },
  {
    id: 56,
    q: "Which type of CV joint is typically used on the inboard side of a front-wheel-drive half-shaft to allow for axial plunge?",
    options: [
      "A) Rzeppa joint",
      "B) Tripod (tri-pot) joint",
      "C) Cross-groove joint",
      "D) Double-Cardan joint"
    ],
    answer: 1,
    explanation: "The tripod or tri-pot joint is most commonly used on the inboard side of front-wheel-drive half-shafts. Its design with three roller bearings riding in tulip-shaped housing tracks allows axial plunge movement, accommodating the changes in shaft length that occur as the suspension moves through its travel.",
    diagram: "",
    terms: ["cv_joint", "differential", "universal_joint"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Constant_velocity_joint.jpg/640px-Constant_velocity_joint.jpg",
    youtube: "https://www.youtube.com/watch?v=m_aGMPSljfg",
    youtubeTitle: "CV Joint Explained and Diagnosis",
    qChinese: "前轮驱动半轴内侧通常使用哪种类型的等速万向节以允许轴向伸缩？",
    optionsChinese: [
      "A) 热帕万向节",
      "B) 三销滚子万向节",
      "C) 交叉沟槽万向节",
      "D) 双十字节万向节"
    ],
    explanationChinese: "三销滚子万向节最常用于前轮驱动半轴的内侧。其设计采用三个滚子轴承在郁金香形壳体轨道中运行，允许轴向伸缩运动，以适应悬架上下运动时轴长度的变化。"
  },
  {
    id: 57,
    q: "A driveshaft vibration occurs at a specific speed and does not change with engine RPM. The vibration is MOST likely caused by:",
    options: [
      "A) An engine misfire",
      "B) A driveshaft imbalance or worn U-joint",
      "C) A worn transmission mount",
      "D) A slipping torque converter"
    ],
    answer: 1,
    explanation: "A vibration that occurs at a specific vehicle speed regardless of engine RPM is speed-related, not engine-related. The driveshaft rotates proportionally to vehicle speed. An imbalanced driveshaft or worn U-joint produces vibration at a specific rotational speed, which corresponds to a specific vehicle speed regardless of gear.",
    diagram: "",
    terms: ["universal_joint", "speed_sensor", "engine_mount"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Universal_joint.jpg/640px-Universal_joint.jpg",
    youtube: "https://www.youtube.com/watch?v=9mJJMfJbMi0",
    youtubeTitle: "Universal Joint - How It Works",
    qChinese: "传动轴振动发生在特定速度下，不随发动机转速变化。振动最可能由以下原因引起：",
    optionsChinese: [
      "A) 发动机失火",
      "B) 传动轴不平衡或万向节磨损",
      "C) 变速器支架磨损",
      "D) 液力变矩器打滑"
    ],
    explanationChinese: "不随发动机转速变化、在特定车速下出现的振动是与速度相关的，而非与发动机相关。传动轴的旋转与车速成正比。不平衡的传动轴或磨损的万向节在特定旋转速度下产生振动，对应特定车速而与挡位无关。"
  },
  {
    id: 58,
    q: "When inspecting a U-joint, the technician finds that one of the bearing caps has a broken needle bearing. What is the correct repair?",
    options: [
      "A) Replace the individual bearing cap",
      "B) Replace the complete U-joint assembly",
      "C) Pack the cap with fresh grease and reinstall",
      "D) Replace only the trunnion cross"
    ],
    answer: 1,
    explanation: "When any component of a U-joint is damaged, the complete U-joint assembly must be replaced. U-joints are serviced as a unit because the trunnion, caps, needle bearings, and seals are precision-matched. Replacing individual components could result in improper fit, premature failure, and potentially dangerous driveshaft separation.",
    diagram: "",
    terms: ["universal_joint", "differential", "multipoint_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Universal_joint.jpg/640px-Universal_joint.jpg",
    youtube: "https://www.youtube.com/watch?v=9mJJMfJbMi0",
    youtubeTitle: "Universal Joint - How It Works",
    qChinese: "检查万向节时，技师发现其中一个轴承盖中有断裂的滚针轴承。正确的维修方法是什么？",
    optionsChinese: [
      "A) 更换单个轴承盖",
      "B) 更换完整的万向节总成",
      "C) 重新填充润滑脂后重新安装轴承盖",
      "D) 仅更换十字轴"
    ],
    explanationChinese: "当万向节的任何部件损坏时，必须更换完整的万向节总成。万向节作为整体维修，因为十字轴、轴承盖、滚针轴承和密封件是精密配合的。更换单个部件可能导致配合不当、过早失效，甚至可能导致危险的传动轴脱离。"
  },
  {
    id: 59,
    q: "All of the following can cause driveshaft vibration EXCEPT:",
    options: [
      "A) Excessive U-joint operating angle",
      "B) Driveshaft out of balance",
      "C) Worn center support bearing",
      "D) Excessive ring gear backlash"
    ],
    answer: 3,
    explanation: "Excessive ring gear backlash causes a clunking noise during load changes but does not cause a continuous driveshaft vibration. Driveshaft vibration is caused by imbalance, excessive U-joint operating angles, worn U-joints, a damaged center support bearing, or a bent driveshaft that disrupts the shaft's rotational balance.",
    diagram: "",
    terms: ["universal_joint", "differential", "cv_joint"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Universal_joint.jpg/640px-Universal_joint.jpg",
    youtube: "https://www.youtube.com/watch?v=9mJJMfJbMi0",
    youtubeTitle: "Universal Joint - How It Works",
    qChinese: "以下所有都可能导致传动轴振动，除了：",
    optionsChinese: [
      "A) 万向节工作角度过大",
      "B) 传动轴不平衡",
      "C) 中间支撑轴承磨损",
      "D) 环形齿轮齿隙过大"
    ],
    explanationChinese: "环形齿轮齿隙过大在负载变化时会引起撞击声，但不会导致持续的传动轴振动。传动轴振动是由不平衡、万向节工作角度过大、万向节磨损、中间支撑轴承损坏或传动轴弯曲等破坏轴旋转平衡的因素引起的。"
  },
  {
    id: 60,
    q: "What happens if the working angles of the U-joints at each end of a driveshaft are not equal?",
    options: [
      "A) The driveshaft will break",
      "B) Speed fluctuations will not cancel, causing vibration",
      "C) The U-joints will overheat",
      "D) The driveshaft will rotate in the wrong direction"
    ],
    answer: 1,
    explanation: "U-joints operating at an angle cause the driven shaft to speed up and slow down twice per revolution. When the angles at each end are equal and the phasing is correct, these fluctuations cancel out. Unequal angles mean the fluctuations do not fully cancel, resulting in a secondary vibration in the driveline.",
    diagram: "",
    terms: ["universal_joint", "differential", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Universal_joint.jpg/640px-Universal_joint.jpg",
    youtube: "https://www.youtube.com/watch?v=9mJJMfJbMi0",
    youtubeTitle: "Universal Joint - How It Works",
    qChinese: "如果传动轴两端万向节的工作角度不相等，会发生什么？",
    optionsChinese: [
      "A) 传动轴会断裂",
      "B) 速度波动不能消除，导致振动",
      "C) 万向节会过热",
      "D) 传动轴会反方向旋转"
    ],
    explanationChinese: "以一定角度工作的万向节使被驱动轴每转一圈加速和减速两次。当两端角度相等且相位正确时，这些波动相互消除。角度不相等意味着波动不能完全消除，导致传动系统中出现二次振动。"
  },
  {
    id: 61,
    q: "A technician is replacing a half-shaft on a front-wheel-drive vehicle. After installation, the technician should verify which of the following?",
    options: [
      "A) That the inner joint retaining ring has fully seated in the transaxle side gear",
      "B) That the CV boot is filled with transmission fluid",
      "C) That the outer CV joint has zero play",
      "D) That the half-shaft is exactly the same weight as the original"
    ],
    answer: 0,
    explanation: "After half-shaft installation, the technician must verify that the inner joint retaining ring has fully engaged in the transaxle differential side gear groove. This is typically confirmed by pulling outward on the shaft. If it pops out easily, it is not properly seated and could disengage during operation.",
    diagram: "",
    terms: ["cv_joint", "differential", "transmission_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Constant_velocity_joint.jpg/640px-Constant_velocity_joint.jpg",
    youtube: "https://www.youtube.com/watch?v=m_aGMPSljfg",
    youtubeTitle: "CV Joint Explained and Diagnosis",
    qChinese: "技师正在前轮驱动车辆上更换半轴。安装后，技师应验证以下哪项？",
    optionsChinese: [
      "A) 内侧万向节卡环已完全卡入变速驱动桥侧齿轮中",
      "B) 等速万向节防尘套已充满变速器油液",
      "C) 外侧等速万向节零间隙",
      "D) 半轴与原件重量完全相同"
    ],
    explanationChinese: "安装半轴后，技师必须验证内侧万向节卡环已完全卡入变速驱动桥差速器侧齿轮凹槽中。通常通过向外拉轴来确认。如果轻松拔出，则说明未正确就位，在行驶中可能脱出。"
  },
  {
    id: 62,
    q: "A center support bearing on a two-piece driveshaft is worn. What symptoms would this MOST likely produce?",
    options: [
      "A) A vibration or rumble felt at certain vehicle speeds",
      "B) Gear clash when shifting",
      "C) Clutch chatter during engagement",
      "D) Steering wheel shimmy during braking"
    ],
    answer: 0,
    explanation: "A worn center support bearing allows the driveshaft to move out of alignment, producing a vibration or rumble that may be felt at specific vehicle speeds. The bearing supports and aligns the joint between the two shaft sections. When worn, the resulting misalignment creates a cyclic vibration through the driveline.",
    diagram: "",
    terms: ["universal_joint", "differential", "speed_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Universal_joint.jpg/640px-Universal_joint.jpg",
    youtube: "https://www.youtube.com/watch?v=9mJJMfJbMi0",
    youtubeTitle: "Universal Joint - How It Works",
    qChinese: "两段式传动轴的中间支撑轴承磨损。这最可能产生什么症状？",
    optionsChinese: [
      "A) 在特定车速下感觉到振动或隆隆声",
      "B) 换挡时齿轮撞击",
      "C) 接合时离合器抖动",
      "D) 制动时方向盘抖动"
    ],
    explanationChinese: "磨损的中间支撑轴承允许传动轴偏离对中位置，在特定车速下产生振动或隆隆声。该轴承支撑和对准两段轴之间的连接处。磨损后，由此产生的不对中在传动系统中形成周期性振动。"
  },
  {
    id: 63,
    q: "Technician A says a clicking noise during turns on a FWD vehicle indicates a worn outer CV joint. Technician B says the clicking could also be caused by a loose axle nut. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Only Technician A is correct. Clicking during turns is the classic symptom of a worn outer CV joint operating at high steering angles. A loose axle nut would cause wheel bearing noise, a wobble, or hub movement rather than the rhythmic clicking associated with a worn CV joint. The clicking comes from worn ball tracks.",
    diagram: "",
    terms: ["cv_joint", "lug_nut_torque", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Constant_velocity_joint.jpg/640px-Constant_velocity_joint.jpg",
    youtube: "https://www.youtube.com/watch?v=m_aGMPSljfg",
    youtubeTitle: "CV Joint Explained and Diagnosis",
    qChinese: "技师A说前轮驱动车辆转弯时的咔嗒声表明外侧等速万向节磨损。技师B说咔嗒声也可能由松动的车轴螺母引起。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "只有技师A是正确的。转弯时的咔嗒声是磨损的外侧等速万向节在大转向角度下工作的典型症状。松动的车轴螺母会导致车轮轴承噪音、摇晃或轮毂移动，而非与磨损等速万向节相关的有节奏的咔嗒声。咔嗒声来自磨损的球道。"
  },

  // ===== DRIVE AXLE (Questions 64–80) =====
  {
    id: 64,
    q: "A rear-wheel-drive vehicle has a howling noise from the rear axle that is loudest during deceleration. What is the MOST likely cause?",
    options: [
      "A) Worn wheel bearings",
      "B) Incorrect ring and pinion gear backlash or tooth contact pattern",
      "C) Low rear axle fluid",
      "D) A worn pinion seal"
    ],
    answer: 1,
    explanation: "A howl from the rear axle during deceleration indicates incorrect ring and pinion gear mesh. During deceleration, the coast side of the gear teeth is loaded. If backlash is incorrect or the contact pattern is too high or low on the coast side, the gears produce a howling noise under this loading condition.",
    diagram: "",
    terms: ["differential", "transmission_fluid", "universal_joint"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Differential_gear.jpg/640px-Differential_gear.jpg",
    youtube: "https://www.youtube.com/watch?v=yYAw79386WI",
    youtubeTitle: "Drive Axle Components Explained",
    qChinese: "后轮驱动车辆在减速时后桥发出啸叫声，且最为明显。最可能的原因是什么？",
    optionsChinese: [
      "A) 车轮轴承磨损",
      "B) 环形齿轮和小齿轮齿隙或齿面接触斑型不正确",
      "C) 后桥油液不足",
      "D) 小齿轮油封磨损"
    ],
    explanationChinese: "后桥在减速时发出的啸叫声表明环形齿轮和小齿轮啮合不正确。在减速时，齿轮齿的反驱动面受载。如果齿隙不正确或反驱动面的接触斑型过高或过低，齿轮在此负载条件下会产生啸叫声。"
  },
  {
    id: 65,
    q: "What is the purpose of setting pinion depth correctly during ring and pinion installation?",
    options: [
      "A) To adjust the backlash between the gears",
      "B) To position the pinion gear for correct tooth contact with the ring gear",
      "C) To set the preload on the pinion bearings",
      "D) To prevent the pinion seal from leaking"
    ],
    answer: 1,
    explanation: "Pinion depth determines the position of the pinion gear relative to the centerline of the ring gear. Correct depth ensures the pinion teeth mesh properly with the ring gear teeth, producing the ideal contact pattern. Incorrect depth causes the contact to shift toward the toe or heel of the teeth, causing noise and wear.",
    diagram: "",
    terms: ["differential", "planetary_gear_set", "transmission_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Differential_gear.jpg/640px-Differential_gear.jpg",
    youtube: "https://www.youtube.com/watch?v=yYAw79386WI",
    youtubeTitle: "Drive Axle Components Explained",
    qChinese: "在安装环形齿轮和小齿轮时，正确设置小齿轮深度的目的是什么？",
    optionsChinese: [
      "A) 调整齿轮之间的齿隙",
      "B) 将小齿轮定位在与环形齿轮正确齿面接触的位置",
      "C) 设定小齿轮轴承的预紧力",
      "D) 防止小齿轮油封泄漏"
    ],
    explanationChinese: "小齿轮深度决定了小齿轮相对于环形齿轮中心线的位置。正确的深度确保小齿轮齿与环形齿轮齿正确啮合，产生理想的接触斑型。不正确的深度导致接触向齿的趾部或跟部偏移，引起噪音和磨损。"
  },
  {
    id: 66,
    q: "Technician A says a limited-slip differential uses clutch packs to transfer torque to the wheel with more traction. Technician B says a limited-slip differential eliminates the need for differential side gears and pinion gears. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Only Technician A is correct. A clutch-type limited-slip differential uses clutch packs between the side gears and the differential case to resist differential action and transfer torque to the wheel with better traction. It still contains all standard differential components including side gears and pinion gears.",
    diagram: "",
    terms: ["differential", "clutch_pack", "planetary_gear_set"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Differential_gear.jpg/640px-Differential_gear.jpg",
    youtube: "https://www.youtube.com/watch?v=yYAw79386WI",
    youtubeTitle: "How a Differential Works",
    qChinese: "技师A说限滑差速器使用离合器片组将扭矩传递给抓地力更好的车轮。技师B说限滑差速器不再需要差速器侧齿轮和行星齿轮。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "只有技师A是正确的。离合器式限滑差速器使用安装在侧齿轮和差速器壳体之间的离合器片组来抵抗差速作用，将扭矩传递给抓地力更好的车轮。它仍然包含所有标准差速器部件，包括侧齿轮和行星齿轮。"
  },
  {
    id: 67,
    q: "A rear axle shaft is being removed from a semi-floating axle assembly. Which of the following must be removed first?",
    options: [
      "A) The wheel and brake drum or rotor",
      "B) The differential cover",
      "C) The pinion shaft",
      "D) The ring gear"
    ],
    answer: 0,
    explanation: "On a semi-floating axle, the axle shaft is retained by a C-lock inside the differential. However, access to the vehicle's brakes is necessary, and the wheel and brake drum or rotor must be removed first to allow the axle shaft to slide out after the C-lock is removed from inside the differential.",
    diagram: "",
    terms: ["differential", "brake_drum", "brake_rotor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Differential_gear.jpg/640px-Differential_gear.jpg",
    youtube: "https://www.youtube.com/watch?v=yYAw79386WI",
    youtubeTitle: "Drive Axle Components Explained",
    qChinese: "正在从半浮式车桥总成上拆卸后桥轴。以下哪项必须首先拆除？",
    optionsChinese: [
      "A) 车轮和制动鼓或制动盘",
      "B) 差速器盖",
      "C) 行星齿轮轴",
      "D) 环形齿轮"
    ],
    explanationChinese: "在半浮式车桥上，车桥轴由差速器内部的C型卡簧固定。但是需要接触车辆的制动器，必须首先拆下车轮和制动鼓或制动盘，以便在差速器内部拆除C型卡簧后车桥轴能滑出。"
  },
  {
    id: 68,
    q: "What is the function of the pinion bearing preload in a drive axle?",
    options: [
      "A) To reduce the torque required to turn the pinion",
      "B) To eliminate bearing end play and maintain consistent gear mesh under load",
      "C) To lubricate the pinion bearings",
      "D) To hold the ring gear in position"
    ],
    answer: 1,
    explanation: "Pinion bearing preload eliminates any end play in the pinion shaft assembly, ensuring the pinion gear maintains its correct position relative to the ring gear under all operating conditions. Without preload, the pinion would shift under load changes, causing inconsistent gear mesh, noise, and accelerated tooth wear.",
    diagram: "",
    terms: ["differential", "planetary_gear_set", "transmission_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Differential_gear.jpg/640px-Differential_gear.jpg",
    youtube: "https://www.youtube.com/watch?v=yYAw79386WI",
    youtubeTitle: "Drive Axle Components Explained",
    qChinese: "驱动桥中小齿轮轴承预紧力的功能是什么？",
    optionsChinese: [
      "A) 减少旋转小齿轮所需的扭矩",
      "B) 消除轴承轴向间隙并在负载下保持一致的齿轮啮合",
      "C) 润滑小齿轮轴承",
      "D) 将环形齿轮保持在位"
    ],
    explanationChinese: "小齿轮轴承预紧力消除了小齿轮轴总成中的任何轴向间隙，确保小齿轮在所有工作条件下保持相对于环形齿轮的正确位置。没有预紧力，小齿轮会在负载变化下移位，导致不一致的齿轮啮合、噪音和加速的齿面磨损。"
  },
  {
    id: 69,
    q: "A C-lock axle shaft has excessive axial play. What is the MOST likely cause?",
    options: [
      "A) A worn C-lock or cross shaft",
      "B) A worn pinion bearing",
      "C) Low differential fluid",
      "D) Incorrect ring gear backlash"
    ],
    answer: 0,
    explanation: "C-lock axle shaft end play is controlled by the C-lock clip seated in a groove at the inner end of the axle shaft and the cross shaft (pinion shaft) that holds it in place. Wear on the C-lock, the axle shaft groove, or the cross shaft allows excessive axial movement of the axle shaft.",
    diagram: "",
    terms: ["differential", "transmission_fluid", "universal_joint"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Differential_gear.jpg/640px-Differential_gear.jpg",
    youtube: "https://www.youtube.com/watch?v=yYAw79386WI",
    youtubeTitle: "Drive Axle Components Explained",
    qChinese: "C型卡簧车桥轴有过大的轴向间隙。最可能的原因是什么？",
    optionsChinese: [
      "A) C型卡簧或十字轴磨损",
      "B) 小齿轮轴承磨损",
      "C) 差速器油液不足",
      "D) 环形齿轮齿隙不正确"
    ],
    explanationChinese: "C型卡簧车桥轴的轴向间隙由嵌入车桥轴内端凹槽中的C型卡簧和将其固定的十字轴（行星齿轮轴）控制。C型卡簧、车桥轴凹槽或十字轴的磨损都会导致车桥轴轴向移动过大。"
  },
  {
    id: 70,
    q: "When performing a gear tooth contact pattern check, the pattern shows contact on the heel end of the drive side and the toe end of the coast side. What adjustment is needed?",
    options: [
      "A) Increase backlash by moving the ring gear away from the pinion",
      "B) Decrease backlash by moving the ring gear toward the pinion",
      "C) Move the pinion deeper into the housing",
      "D) Move the pinion out of the housing"
    ],
    answer: 1,
    explanation: "A heel contact pattern on the drive side with toe contact on the coast side indicates the ring gear is too far from the pinion gear, resulting in excessive backlash. The correction is to decrease backlash by moving the ring gear closer to the pinion, which shifts the contact pattern toward the center of the teeth.",
    diagram: "",
    terms: ["differential", "planetary_gear_set", "transmission_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Differential_gear.jpg/640px-Differential_gear.jpg",
    youtube: "https://www.youtube.com/watch?v=yYAw79386WI",
    youtubeTitle: "Drive Axle Components Explained",
    qChinese: "进行齿面接触斑型检查时，斑型显示驱动面接触在跟部端、反驱动面接触在趾部端。需要什么调整？",
    optionsChinese: [
      "A) 将环形齿轮远离小齿轮移动以增大齿隙",
      "B) 将环形齿轮向小齿轮移动以减小齿隙",
      "C) 将小齿轮向壳体内更深处移动",
      "D) 将小齿轮向壳体外移动"
    ],
    explanationChinese: "驱动面在跟部接触、反驱动面在趾部接触的斑型表明环形齿轮距小齿轮太远，齿隙过大。修正方法是将环形齿轮向小齿轮靠近以减小齿隙，这会使接触斑型向齿的中心移动。"
  },
  {
    id: 71,
    q: "All of the following are symptoms of a worn limited-slip differential EXCEPT:",
    options: [
      "A) Chattering or shuddering during low-speed turns",
      "B) One wheel spinning freely while the other remains stationary",
      "C) A howling noise at highway speed",
      "D) Loss of traction on slippery surfaces"
    ],
    answer: 2,
    explanation: "A howling noise at highway speed indicates a ring and pinion gear mesh issue, not limited-slip clutch wear. Worn limited-slip clutch packs cause chattering during turns, allow one-wheel spin similar to an open differential, and reduce the ability to transfer torque to the wheel with better traction.",
    diagram: "",
    terms: ["differential", "clutch_pack", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Differential_gear.jpg/640px-Differential_gear.jpg",
    youtube: "https://www.youtube.com/watch?v=yYAw79386WI",
    youtubeTitle: "How a Differential Works",
    qChinese: "以下所有都是限滑差速器磨损的症状，除了：",
    optionsChinese: [
      "A) 低速转弯时抖动或颤振",
      "B) 一个车轮自由旋转而另一个保持静止",
      "C) 高速公路速度时啸叫声",
      "D) 在湿滑路面上丧失牵引力"
    ],
    explanationChinese: "高速公路速度时的啸叫声表明环形齿轮和小齿轮啮合问题，而非限滑离合器磨损。磨损的限滑离合器片会在转弯时引起抖动，允许类似于开放式差速器的单轮旋转，并降低向抓地力更好的车轮传递扭矩的能力。"
  },
  {
    id: 72,
    q: "What fluid additive is commonly required in a clutch-type limited-slip differential?",
    options: [
      "A) An anti-foaming agent",
      "B) A friction modifier additive",
      "C) A viscosity index improver",
      "D) A detergent additive"
    ],
    answer: 1,
    explanation: "Clutch-type limited-slip differentials require a specific friction modifier additive in the gear oil. This modifier alters the friction characteristics of the clutch packs to prevent chattering and shuddering during turns. Using standard gear oil without the friction modifier will cause objectionable noise during low-speed turning maneuvers.",
    diagram: "",
    terms: ["differential", "clutch_pack", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Differential_gear.jpg/640px-Differential_gear.jpg",
    youtube: "https://www.youtube.com/watch?v=yYAw79386WI",
    youtubeTitle: "How a Differential Works",
    qChinese: "离合器式限滑差速器通常需要什么油液添加剂？",
    optionsChinese: [
      "A) 消泡剂",
      "B) 摩擦改性剂添加剂",
      "C) 粘度指数改进剂",
      "D) 清净剂添加剂"
    ],
    explanationChinese: "离合器式限滑差速器需要在齿轮油中添加特定的摩擦改性剂。该改性剂改变离合器片的摩擦特性，防止转弯时的抖动和颤振。使用不含摩擦改性剂的标准齿轮油会在低速转弯时导致令人不快的噪音。"
  },
  {
    id: 73,
    q: "A rear axle seal is leaking. Before replacing the seal, the technician should check which of the following?",
    options: [
      "A) The ring gear backlash",
      "B) The axle shaft surface and bearing for wear that could damage the new seal",
      "C) The differential pinion gear clearance",
      "D) The limited-slip clutch pack condition"
    ],
    answer: 1,
    explanation: "Before replacing an axle seal, the technician should inspect the axle shaft surface where the seal rides for grooves, scoring, or wear. A damaged surface will quickly destroy a new seal. The axle bearing should also be checked, as a worn bearing allows shaft movement that can cause the new seal to leak.",
    diagram: "",
    terms: ["differential", "transmission_fluid", "multipoint_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Differential_gear.jpg/640px-Differential_gear.jpg",
    youtube: "https://www.youtube.com/watch?v=yYAw79386WI",
    youtubeTitle: "Drive Axle Components Explained",
    qChinese: "后桥油封泄漏。在更换油封之前，技师应检查以下哪项？",
    optionsChinese: [
      "A) 环形齿轮齿隙",
      "B) 车桥轴表面和轴承是否有磨损，这些磨损可能损坏新油封",
      "C) 差速器行星齿轮间隙",
      "D) 限滑离合器片状况"
    ],
    explanationChinese: "在更换车桥油封之前，技师应检查油封唇接触的车桥轴表面是否有沟槽、划痕或磨损。损坏的表面会很快毁坏新油封。还应检查车桥轴承，因为磨损的轴承允许轴移动，可能导致新油封泄漏。"
  },
  {
    id: 74,
    q: "What is the difference between a semi-floating and a full-floating rear axle?",
    options: [
      "A) A semi-floating axle supports the vehicle weight on the axle shaft; a full-floating axle supports it on the axle housing",
      "B) A semi-floating axle uses C-locks; a full-floating axle uses lug bolts",
      "C) A semi-floating axle has a limited-slip differential; a full-floating axle does not",
      "D) There is no functional difference between the two"
    ],
    answer: 0,
    explanation: "In a semi-floating axle, the axle shaft supports both the vehicle weight and transmits driving torque, with the bearing inside the housing. In a full-floating axle, bearings on the outside of the housing support the vehicle weight, and the axle shaft only transmits torque, allowing shaft removal without lifting the vehicle.",
    diagram: "",
    terms: ["differential", "universal_joint", "cv_joint"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Differential_gear.jpg/640px-Differential_gear.jpg",
    youtube: "https://www.youtube.com/watch?v=yYAw79386WI",
    youtubeTitle: "Drive Axle Components Explained",
    qChinese: "半浮式和全浮式后桥有什么区别？",
    optionsChinese: [
      "A) 半浮式车桥靠车桥轴支撑车辆重量；全浮式车桥靠车桥壳体支撑",
      "B) 半浮式车桥使用C型卡簧；全浮式车桥使用螺栓",
      "C) 半浮式车桥有限滑差速器；全浮式车桥没有",
      "D) 两者没有功能上的区别"
    ],
    explanationChinese: "在半浮式车桥中，车桥轴既支撑车辆重量又传递驱动扭矩，轴承在壳体内部。在全浮式车桥中，壳体外部的轴承支撑车辆重量，车桥轴仅传递扭矩，可以在不抬起车辆的情况下拆卸车桥轴。"
  },
  {
    id: 75,
    q: "A pinion seal is being replaced. What should the technician mark before removing the pinion nut?",
    options: [
      "A) The position of the ring gear bolts",
      "B) The position of the pinion nut relative to the pinion shaft to maintain correct bearing preload",
      "C) The position of the differential case",
      "D) The position of the axle shafts"
    ],
    answer: 1,
    explanation: "The pinion nut torque sets the bearing preload through a collapsible spacer. If the nut is overtightened during reinstallation, the spacer will crush further, creating excessive preload. Marking the nut position allows the technician to return it to the same position and verify the original preload is maintained.",
    diagram: "",
    terms: ["differential", "lug_nut_torque", "transmission_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Differential_gear.jpg/640px-Differential_gear.jpg",
    youtube: "https://www.youtube.com/watch?v=yYAw79386WI",
    youtubeTitle: "Drive Axle Components Explained",
    qChinese: "正在更换小齿轮油封。在拆卸小齿轮螺母之前，技师应标记什么？",
    optionsChinese: [
      "A) 环形齿轮螺栓的位置",
      "B) 小齿轮螺母相对于小齿轮轴的位置，以保持正确的轴承预紧力",
      "C) 差速器壳体的位置",
      "D) 车桥轴的位置"
    ],
    explanationChinese: "小齿轮螺母扭矩通过可压缩垫圈设定轴承预紧力。如果在重新安装时过度拧紧螺母，垫圈会进一步压缩，产生过大的预紧力。标记螺母位置可以让技师将其回到原来的位置，并验证原始预紧力是否保持不变。"
  },
  {
    id: 76,
    q: "A rumbling noise from the rear axle is constant at all speeds and does not change with acceleration or deceleration. What is the MOST likely cause?",
    options: [
      "A) Incorrect ring and pinion backlash",
      "B) Worn rear wheel bearings",
      "C) Worn differential pinion gears",
      "D) A chipped ring gear tooth"
    ],
    answer: 1,
    explanation: "A constant rumbling that does not change with load variations (acceleration or deceleration) points to wheel bearings rather than gear mesh issues. Ring and pinion noise typically changes character between drive and coast conditions. Wheel bearings produce consistent noise proportional to wheel speed regardless of drivetrain loading.",
    diagram: "",
    terms: ["differential", "brake_rotor", "wheel_alignment"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Differential_gear.jpg/640px-Differential_gear.jpg",
    youtube: "https://www.youtube.com/watch?v=yYAw79386WI",
    youtubeTitle: "Drive Axle Components Explained",
    qChinese: "后桥发出的隆隆声在所有速度下恒定不变，不随加速或减速而改变。最可能的原因是什么？",
    optionsChinese: [
      "A) 环形齿轮和小齿轮齿隙不正确",
      "B) 后轮轴承磨损",
      "C) 差速器行星齿轮磨损",
      "D) 环形齿轮齿崩裂"
    ],
    explanationChinese: "不随负载变化（加速或减速）而改变的恒定隆隆声指向车轮轴承，而非齿轮啮合问题。环形齿轮和小齿轮噪音通常在驱动和反驱动条件之间变化特性。车轮轴承产生的噪音与车轮速度成正比，不受传动系统负载影响。"
  },
  {
    id: 77,
    q: "During differential disassembly, the technician notices the ring gear teeth are worn more on one side. What does this indicate?",
    options: [
      "A) The differential was overfilled with fluid",
      "B) The ring gear backlash was incorrect, causing uneven tooth loading",
      "C) The limited-slip clutch packs were worn",
      "D) The axle shafts were different lengths"
    ],
    answer: 1,
    explanation: "Uneven wear on ring gear teeth indicates incorrect backlash, which shifts the load pattern to one side of the tooth face. Proper backlash ensures even distribution of load across the full tooth surface. When backlash is too tight or too loose, concentrated loading accelerates wear on the loaded side of the teeth.",
    diagram: "",
    terms: ["differential", "planetary_gear_set", "transmission_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Differential_gear.jpg/640px-Differential_gear.jpg",
    youtube: "https://www.youtube.com/watch?v=yYAw79386WI",
    youtubeTitle: "Drive Axle Components Explained",
    qChinese: "在差速器拆卸过程中，技师注意到环形齿轮齿在一侧磨损更严重。这说明了什么？",
    optionsChinese: [
      "A) 差速器油液加注过多",
      "B) 环形齿轮齿隙不正确，导致齿面负载不均",
      "C) 限滑离合器片磨损",
      "D) 车桥轴长度不同"
    ],
    explanationChinese: "环形齿轮齿面不均匀磨损表明齿隙不正确，使负载偏移到齿面的一侧。正确的齿隙确保负载均匀分布在整个齿面上。当齿隙过紧或过松时，集中的负载加速了受载侧齿面的磨损。"
  },
  {
    id: 78,
    q: "What type of gear pattern is used for the ring and pinion in most automotive drive axles?",
    options: [
      "A) Spur gear",
      "B) Helical gear",
      "C) Hypoid gear",
      "D) Worm gear"
    ],
    answer: 2,
    explanation: "Most automotive drive axles use hypoid gears for the ring and pinion. The hypoid design positions the pinion gear below the centerline of the ring gear, which lowers the driveshaft and vehicle floor height. Hypoid gears also provide smoother, quieter operation and greater tooth contact area compared to spiral bevel gears.",
    diagram: "",
    terms: ["differential", "planetary_gear_set", "universal_joint"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Differential_gear.jpg/640px-Differential_gear.jpg",
    youtube: "https://www.youtube.com/watch?v=yYAw79386WI",
    youtubeTitle: "How a Differential Works",
    qChinese: "大多数汽车驱动桥的环形齿轮和小齿轮使用什么类型的齿轮形式？",
    optionsChinese: [
      "A) 正齿轮",
      "B) 斜齿轮",
      "C) 准双曲面齿轮",
      "D) 蜗轮"
    ],
    explanationChinese: "大多数汽车驱动桥使用准双曲面齿轮作为环形齿轮和小齿轮。准双曲面设计将小齿轮定位在环形齿轮中心线以下，降低了传动轴和车辆底板的高度。准双曲面齿轮还比螺旋锥齿轮提供更平稳、更安静的运行和更大的齿面接触面积。"
  },
  {
    id: 79,
    q: "Technician A says the differential case bearings support the ring gear assembly and control its position relative to the pinion. Technician B says shims or adjusting nuts on the differential case bearings are used to set ring gear backlash. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. The differential case bearings support the entire differential and ring gear assembly within the axle housing and control its position relative to the pinion gear. Shims or adjusting nuts on these bearings are used to move the ring gear toward or away from the pinion to set the correct backlash.",
    diagram: "",
    terms: ["differential", "planetary_gear_set", "transmission_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Differential_gear.jpg/640px-Differential_gear.jpg",
    youtube: "https://www.youtube.com/watch?v=yYAw79386WI",
    youtubeTitle: "How a Differential Works",
    qChinese: "技师A说差速器壳体轴承支撑环形齿轮总成并控制其相对于小齿轮的位置。技师B说差速器壳体轴承上的垫片或调整螺母用于设定环形齿轮齿隙。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "两位技师都是正确的。差速器壳体轴承支撑整个差速器和环形齿轮总成在车桥壳体内，并控制其相对于小齿轮的位置。这些轴承上的垫片或调整螺母用于将环形齿轮向小齿轮靠近或远离，以设定正确的齿隙。"
  },
  {
    id: 80,
    q: "A rear axle makes a knocking noise at low speed during turns. The vehicle has a limited-slip differential. What is the MOST likely cause?",
    options: [
      "A) Worn ring and pinion gears",
      "B) Worn or glazed limited-slip clutch packs",
      "C) A broken axle shaft",
      "D) Worn pinion bearings"
    ],
    answer: 1,
    explanation: "A knocking or chattering noise during low-speed turns in a vehicle with a limited-slip differential indicates worn or glazed clutch packs. During turns, the differential must allow speed difference between the wheels. Worn clutches grab and release alternately instead of slipping smoothly, creating a knocking or chattering noise.",
    diagram: "",
    terms: ["differential", "clutch_pack", "transmission_fluid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Differential_gear.jpg/640px-Differential_gear.jpg",
    youtube: "https://www.youtube.com/watch?v=yYAw79386WI",
    youtubeTitle: "How a Differential Works",
    qChinese: "后桥在低速转弯时发出敲击声。车辆配备限滑差速器。最可能的原因是什么？",
    optionsChinese: [
      "A) 环形齿轮和小齿轮磨损",
      "B) 限滑离合器片磨损或烧蚀",
      "C) 车桥轴断裂",
      "D) 小齿轮轴承磨损"
    ],
    explanationChinese: "配备限滑差速器的车辆在低速转弯时发出敲击或抖动声，表明离合器片磨损或烧蚀。转弯时差速器必须允许两轮之间的速度差。磨损的离合器片交替抓紧和释放，而非平稳滑动，产生敲击或抖动声。"
  },

  // ===== FOUR-WHEEL/ALL-WHEEL DRIVE (Questions 81–100) =====
  {
    id: 81,
    q: "What is the primary function of a transfer case in a four-wheel-drive vehicle?",
    options: [
      "A) To provide additional gear reduction for the transmission",
      "B) To split engine torque between the front and rear axles",
      "C) To lock the front and rear driveshafts together",
      "D) To replace the need for a conventional differential"
    ],
    answer: 1,
    explanation: "The transfer case receives power from the transmission output shaft and splits it between the front and rear driveshafts. Depending on the design, it may also provide a low-range gear reduction for off-road use and the ability to lock the front and rear output shafts together for maximum traction.",
    diagram: "",
    terms: ["transfer_case", "differential", "planetary_gear_set"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=FBaGBXcc6zE",
    youtubeTitle: "Transfer Case and 4WD Explained",
    qChinese: "四轮驱动车辆中分动箱的主要功能是什么？",
    optionsChinese: [
      "A) 为变速器提供额外的齿轮减速",
      "B) 将发动机扭矩分配到前后车桥",
      "C) 将前后传动轴锁定在一起",
      "D) 取代传统差速器的需要"
    ],
    explanationChinese: "分动箱接收来自变速器输出轴的动力，并将其分配到前后传动轴。根据设计不同，它还可以提供越野用的低速挡齿轮减速，以及将前后输出轴锁定在一起以获得最大牵引力的能力。"
  },
  {
    id: 82,
    q: "A four-wheel-drive vehicle exhibits a binding sensation during tight turns on dry pavement with the transfer case in 4WD High. What is the MOST likely cause?",
    options: [
      "A) Worn front wheel bearings",
      "B) Drivetrain windup from the front and rear axles being locked together without a center differential",
      "C) Low transfer case fluid",
      "D) Worn front CV joints"
    ],
    answer: 1,
    explanation: "When a part-time 4WD system is engaged on dry pavement, the front and rear axles are locked together at the same speed. During turns, the front wheels must travel farther than the rear wheels, but the locked system prevents this speed difference, causing drivetrain windup that manifests as a binding sensation.",
    diagram: "",
    terms: ["transfer_case", "differential", "cv_joint"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=FBaGBXcc6zE",
    youtubeTitle: "Transfer Case and 4WD Explained",
    qChinese: "四轮驱动车辆在干燥路面上以四驱高速挡行驶时，急转弯出现卡滞感。最可能的原因是什么？",
    optionsChinese: [
      "A) 前轮轴承磨损",
      "B) 前后桥被锁定在一起且没有中央差速器导致传动系统扭紧",
      "C) 分动箱油液不足",
      "D) 前等速万向节磨损"
    ],
    explanationChinese: "当分时四驱系统在干燥路面上接合时，前后桥被锁定在相同速度。转弯时前轮必须比后轮行驶更远的距离，但锁定的系统阻止了这种速度差异，导致传动系统扭紧，表现为卡滞感。"
  },
  {
    id: 83,
    q: "What is the purpose of manual locking hubs on a four-wheel-drive vehicle?",
    options: [
      "A) To lock the transfer case in 4WD mode",
      "B) To engage or disengage the front wheels from the front axle shafts to reduce drivetrain drag in 2WD mode",
      "C) To lock the front differential",
      "D) To engage the low-range gear in the transfer case"
    ],
    answer: 1,
    explanation: "Manual locking hubs allow the driver to disconnect the front wheels from the front axle shafts when 4WD is not needed. In the unlocked position, the front wheels spin freely without turning the front axle shafts, differential, and driveshaft, reducing friction, improving fuel economy, and reducing component wear.",
    diagram: "",
    terms: ["transfer_case", "differential", "cv_joint"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=FBaGBXcc6zE",
    youtubeTitle: "Transfer Case and 4WD Explained",
    qChinese: "四轮驱动车辆上手动锁止轮毂的作用是什么？",
    optionsChinese: [
      "A) 将分动箱锁定在四驱模式",
      "B) 在两驱模式下将前轮与前桥轴分离或接合，以减少传动系统阻力",
      "C) 锁定前差速器",
      "D) 接合分动箱中的低速挡"
    ],
    explanationChinese: "手动锁止轮毂允许驾驶员在不需要四驱时将前轮与前桥轴断开。在解锁位置，前轮自由旋转而不带动前桥轴、差速器和传动轴，减少摩擦阻力，提高燃油经济性，并减少部件磨损。"
  },
  {
    id: 84,
    q: "Technician A says a viscous coupling in an AWD system uses a silicone-based fluid that thickens when heated to transfer torque. Technician B says the viscous coupling transfers torque based on the speed difference between its input and output shafts. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. A viscous coupling contains alternating plates connected to the input and output shafts, filled with silicone fluid. When a speed difference occurs between the shafts, the fluid shears and heats up, causing it to thicken and progressively transfer more torque to the slower-spinning shaft.",
    diagram: "",
    terms: ["transfer_case", "torque_converter", "differential"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=FBaGBXcc6zE",
    youtubeTitle: "Transfer Case and 4WD Explained",
    qChinese: "技师A说全时四驱系统中的粘性联轴器使用硅基油液，受热变稠以传递扭矩。技师B说粘性联轴器根据输入轴和输出轴之间的速度差传递扭矩。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "两位技师都是正确的。粘性联轴器包含分别连接到输入轴和输出轴的交替排列的摩擦片，充满硅油。当轴之间出现速度差时，油液被剪切和加热，变得更稠，逐渐将更多扭矩传递给较慢旋转的轴。"
  },
  {
    id: 85,
    q: "A four-wheel-drive vehicle has difficulty shifting from 4WD High to 2WD. What is the MOST likely cause?",
    options: [
      "A) Low engine oil",
      "B) Binding in the transfer case shift linkage or a faulty shift motor",
      "C) Worn rear axle bearings",
      "D) A damaged front driveshaft U-joint"
    ],
    answer: 1,
    explanation: "Difficulty shifting between 4WD and 2WD modes is most commonly caused by binding in the transfer case shift linkage or a faulty electric or vacuum shift motor. Corrosion, lack of lubrication, or a worn actuator can prevent the shift mechanism from fully disengaging the front driveshaft from the transfer case.",
    diagram: "",
    terms: ["transfer_case", "shift_solenoid", "differential"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=FBaGBXcc6zE",
    youtubeTitle: "Transfer Case and 4WD Explained",
    qChinese: "四轮驱动车辆从四驱高速挡切换到两驱时有困难。最可能的原因是什么？",
    optionsChinese: [
      "A) 发动机机油不足",
      "B) 分动箱换挡连杆卡滞或换挡马达故障",
      "C) 后桥轴承磨损",
      "D) 前传动轴万向节损坏"
    ],
    explanationChinese: "在四驱和两驱模式之间换挡困难最常见的原因是分动箱换挡连杆卡滞或电动/真空换挡马达故障。腐蚀、缺少润滑或执行器磨损会阻止换挡机构将前传动轴从分动箱中完全分离。"
  },
  {
    id: 86,
    q: "Which of the following describes the advantage of a full-time AWD system over a part-time 4WD system?",
    options: [
      "A) It provides better fuel economy",
      "B) It can be used on dry pavement without drivetrain binding because it includes a center differential",
      "C) It provides more torque to the rear wheels",
      "D) It eliminates the need for a transfer case"
    ],
    answer: 1,
    explanation: "A full-time AWD system includes a center differential or similar device that allows the front and rear axles to turn at different speeds. This eliminates drivetrain binding on dry pavement, allowing all-wheel drive to be used continuously on any surface without the windup problems of part-time systems.",
    diagram: "",
    terms: ["transfer_case", "differential", "planetary_gear_set"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=FBaGBXcc6zE",
    youtubeTitle: "Transfer Case and 4WD Explained",
    qChinese: "以下哪项描述了全时四驱系统相对于分时四驱系统的优势？",
    optionsChinese: [
      "A) 提供更好的燃油经济性",
      "B) 由于包含中央差速器，可在干燥路面上使用而不会产生传动系统卡滞",
      "C) 向后轮提供更多扭矩",
      "D) 不再需要分动箱"
    ],
    explanationChinese: "全时四驱系统包含一个中央差速器或类似装置，允许前后桥以不同速度旋转。这消除了干燥路面上的传动系统扭紧，使全轮驱动可以在任何路面上持续使用，不会出现分时系统的扭紧问题。"
  },
  {
    id: 87,
    q: "A transfer case is leaking fluid from the front output shaft seal. What should be inspected before installing a new seal?",
    options: [
      "A) The rear driveshaft balance",
      "B) The output shaft surface and yoke for wear grooves that could damage the new seal",
      "C) The transfer case chain tension",
      "D) The front differential fluid level"
    ],
    answer: 1,
    explanation: "Before replacing the front output shaft seal, the technician must inspect the shaft and yoke surface where the seal lip rides. Wear grooves in the shaft or yoke will quickly cut through a new seal, causing a repeat leak. If grooves are present, a repair sleeve or replacement shaft may be necessary.",
    diagram: "",
    terms: ["transfer_case", "transmission_fluid", "universal_joint"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=FBaGBXcc6zE",
    youtubeTitle: "Transfer Case and 4WD Explained",
    qChinese: "分动箱前输出轴油封泄漏。在安装新油封之前应检查什么？",
    optionsChinese: [
      "A) 后传动轴平衡",
      "B) 输出轴表面和叉是否有磨损沟槽，这些沟槽可能损坏新油封",
      "C) 分动箱链条张力",
      "D) 前差速器油液位"
    ],
    explanationChinese: "在更换前输出轴油封之前，技师必须检查油封唇接触的轴和叉表面。轴或叉上的磨损沟槽会很快切穿新油封，导致再次泄漏。如果存在沟槽，可能需要修复套筒或更换轴。"
  },
  {
    id: 88,
    q: "All of the following are components commonly found in a transfer case EXCEPT:",
    options: [
      "A) Drive chain or gear set",
      "B) Planetary gear set for low range",
      "C) Synchronizer assembly",
      "D) Torque converter"
    ],
    answer: 3,
    explanation: "A torque converter is a component of automatic transmissions and is not found in a transfer case. Transfer cases commonly contain a drive chain or gear set to drive the front output shaft, a planetary gear set for low-range reduction, and shift mechanisms that may include synchronizers for on-the-fly shifting.",
    diagram: "",
    terms: ["transfer_case", "planetary_gear_set", "torque_converter", "synchronizer"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=FBaGBXcc6zE",
    youtubeTitle: "Transfer Case and 4WD Explained",
    qChinese: "以下所有都是分动箱中常见的部件，除了：",
    optionsChinese: [
      "A) 驱动链条或齿轮组",
      "B) 用于低速挡的行星齿轮组",
      "C) 同步器总成",
      "D) 液力变矩器"
    ],
    explanationChinese: "液力变矩器是自动变速器的部件，不存在于分动箱中。分动箱通常包含驱动前输出轴的链条或齿轮组、用于低速挡减速的行星齿轮组，以及可能包含同步器的换挡机构以实现行驶中换挡。"
  },
  {
    id: 89,
    q: "A four-wheel-drive vehicle has a vibration only when in 4WD mode. The vibration is not present in 2WD. What should the technician inspect FIRST?",
    options: [
      "A) The rear driveshaft and U-joints",
      "B) The front driveshaft, U-joints, and CV joints",
      "C) The engine mounts",
      "D) The transmission output shaft bearing"
    ],
    answer: 1,
    explanation: "A vibration only present in 4WD mode indicates a front driveline issue since the front driveshaft is only spinning when 4WD is engaged. The technician should inspect the front driveshaft for balance and condition, including all U-joints and CV joints, as well as the front driveshaft operating angles.",
    diagram: "",
    terms: ["transfer_case", "universal_joint", "cv_joint"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=FBaGBXcc6zE",
    youtubeTitle: "Transfer Case and 4WD Explained",
    qChinese: "四轮驱动车辆只在四驱模式下有振动。两驱模式下不存在振动。技师应首先检查什么？",
    optionsChinese: [
      "A) 后传动轴和万向节",
      "B) 前传动轴、万向节和等速万向节",
      "C) 发动机支架",
      "D) 变速器输出轴轴承"
    ],
    explanationChinese: "仅在四驱模式下出现的振动表明前传动系统有问题，因为前传动轴仅在四驱接合时旋转。技师应检查前传动轴的平衡和状况，包括所有万向节和等速万向节，以及前传动轴的工作角度。"
  },
  {
    id: 90,
    q: "What is the function of an electronically controlled center differential in an AWD system?",
    options: [
      "A) To permanently lock the front and rear axles together",
      "B) To vary the torque distribution between the front and rear axles based on driving conditions",
      "C) To disconnect the rear axle during braking",
      "D) To increase engine power output"
    ],
    answer: 1,
    explanation: "An electronically controlled center differential uses sensors and an electronic control module to vary torque distribution between the front and rear axles. The system monitors wheel speed, throttle position, steering angle, and other inputs to optimize traction and handling by directing more torque to the axle with better grip.",
    diagram: "",
    terms: ["transfer_case", "differential", "tcm", "speed_sensor"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=FBaGBXcc6zE",
    youtubeTitle: "Transfer Case and 4WD Explained",
    qChinese: "全时四驱系统中电子控制中央差速器的功能是什么？",
    optionsChinese: [
      "A) 永久锁定前后桥在一起",
      "B) 根据行驶条件在前后桥之间改变扭矩分配",
      "C) 在制动时断开后桥",
      "D) 增加发动机功率输出"
    ],
    explanationChinese: "电子控制中央差速器使用传感器和电子控制模块来改变前后桥之间的扭矩分配。系统监测车轮速度、油门位置、转向角度和其他输入，通过将更多扭矩导向抓地力更好的车桥来优化牵引力和操控性。"
  },
  {
    id: 91,
    q: "Technician A says the transfer case fluid should be checked at regular intervals as part of routine maintenance. Technician B says transfer cases always use the same fluid as the transmission. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Only Technician A is correct. Transfer case fluid should be checked and changed at manufacturer-specified intervals. However, transfer cases do not always use the same fluid as the transmission. Some require automatic transmission fluid, while others require specific gear oil or proprietary fluids depending on the design.",
    diagram: "",
    terms: ["transfer_case", "transmission_fluid", "transmission_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=FBaGBXcc6zE",
    youtubeTitle: "Transfer Case and 4WD Explained",
    qChinese: "技师A说分动箱油液应作为日常维护的一部分定期检查。技师B说分动箱始终使用与变速器相同的油液。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "只有技师A是正确的。分动箱油液应按制造商规定的间隔检查和更换。但是，分动箱并不总是使用与变速器相同的油液。有些需要自动变速器油液，而其他需要特定的齿轮油或专用油液，具体取决于设计。"
  },
  {
    id: 92,
    q: "A four-wheel-drive vehicle has a grinding noise when shifting into 4WD Low. What is the MOST likely cause?",
    options: [
      "A) The vehicle is not stopped or moving slowly enough for engagement",
      "B) The rear differential is damaged",
      "C) The front locking hubs are not engaged",
      "D) The rear driveshaft is bent"
    ],
    answer: 0,
    explanation: "Most transfer cases require the vehicle to be stopped or nearly stopped to shift into 4WD Low because the low-range planetary gear set does not have synchronizers. Attempting to shift while moving too fast causes the gears to grind. Some systems also require the transmission to be in neutral for this shift.",
    diagram: "",
    terms: ["transfer_case", "planetary_gear_set", "synchronizer"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=FBaGBXcc6zE",
    youtubeTitle: "Transfer Case and 4WD Explained",
    qChinese: "四轮驱动车辆在切换到四驱低速挡时有研磨噪音。最可能的原因是什么？",
    optionsChinese: [
      "A) 车辆未停止或行驶速度不够慢以完成接合",
      "B) 后差速器损坏",
      "C) 前锁止轮毂未接合",
      "D) 后传动轴弯曲"
    ],
    explanationChinese: "大多数分动箱要求车辆停止或接近停止才能换入四驱低速挡，因为低速挡行星齿轮组没有同步器。在行驶速度过快时尝试换挡会导致齿轮研磨。有些系统还要求变速器处于空挡才能进行此换挡。"
  },
  {
    id: 93,
    q: "An AWD vehicle equipped with a Haldex coupling has reduced power delivery to the rear wheels. What should the technician check?",
    options: [
      "A) The front wheel bearings",
      "B) The Haldex coupling fluid level, filter, and electronic control module",
      "C) The rear brake pads",
      "D) The engine air filter"
    ],
    answer: 1,
    explanation: "A Haldex coupling is an electronically controlled multi-plate clutch system used in AWD vehicles to control rear axle torque. Reduced rear power delivery could be caused by low fluid level, a clogged filter restricting hydraulic pressure, or a faulty electronic control module that manages the clutch pack engagement.",
    diagram: "",
    terms: ["transfer_case", "clutch_pack", "tcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=FBaGBXcc6zE",
    youtubeTitle: "Transfer Case and 4WD Explained",
    qChinese: "配备Haldex联轴器的全时四驱车辆后轮动力输出减少。技师应检查什么？",
    optionsChinese: [
      "A) 前轮轴承",
      "B) Haldex联轴器油液位、滤清器和电子控制模块",
      "C) 后刹车片",
      "D) 发动机空气滤清器"
    ],
    explanationChinese: "Haldex联轴器是一种用于全时四驱车辆的电子控制多片式离合器系统，控制后桥扭矩。后轮动力输出减少可能由油液位低、滤清器堵塞限制液压压力或管理离合器片接合的电子控制模块故障引起。"
  },
  {
    id: 94,
    q: "What could result from operating a part-time 4WD system on dry pavement for extended periods?",
    options: [
      "A) Improved fuel economy",
      "B) Damage to the transfer case, axle components, and tires from drivetrain windup",
      "C) Increased engine horsepower",
      "D) No adverse effects"
    ],
    answer: 1,
    explanation: "Extended operation of a part-time 4WD system on dry pavement causes severe drivetrain windup because the front and rear axles are locked together but must turn at different speeds during turns. This accumulated stress can damage the transfer case, axle gears, U-joints, and cause abnormal tire wear.",
    diagram: "",
    terms: ["transfer_case", "differential", "universal_joint", "tire_rotation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=FBaGBXcc6zE",
    youtubeTitle: "Transfer Case and 4WD Explained",
    qChinese: "长时间在干燥路面上使用分时四驱系统可能导致什么后果？",
    optionsChinese: [
      "A) 提高燃油经济性",
      "B) 传动系统扭紧导致分动箱、车桥部件和轮胎损坏",
      "C) 增加发动机马力",
      "D) 无不良影响"
    ],
    explanationChinese: "在干燥路面上长时间使用分时四驱系统会导致严重的传动系统扭紧，因为前后桥被锁定在一起，但在转弯时必须以不同速度旋转。这种累积的应力可能损坏分动箱、车桥齿轮、万向节，并导致异常的轮胎磨损。"
  },
  {
    id: 95,
    q: "A transfer case uses a chain to drive the front output shaft. During inspection, the technician finds the chain has excessive slack. What is the correct repair?",
    options: [
      "A) Tighten the chain tensioner",
      "B) Replace the chain and inspect the sprockets for wear",
      "C) Add a link to the chain",
      "D) Lubricate the chain with gear oil only"
    ],
    answer: 1,
    explanation: "Transfer case chains that have stretched beyond specification must be replaced. The sprockets should also be inspected because a stretched chain causes uneven sprocket wear. Most transfer case chains do not have adjustable tensioners. Installing a new chain on worn sprockets will result in accelerated chain wear and noise.",
    diagram: "",
    terms: ["transfer_case", "transmission_service", "timing_chain"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=FBaGBXcc6zE",
    youtubeTitle: "Transfer Case and 4WD Explained",
    qChinese: "分动箱使用链条驱动前输出轴。检查时技师发现链条松弛过大。正确的维修方法是什么？",
    optionsChinese: [
      "A) 拧紧链条张紧器",
      "B) 更换链条并检查链轮是否磨损",
      "C) 在链条上加一个链节",
      "D) 仅用齿轮油润滑链条"
    ],
    explanationChinese: "拉伸超过规格的分动箱链条必须更换。还应检查链轮，因为拉伸的链条会导致链轮不均匀磨损。大多数分动箱链条没有可调节的张紧器。在磨损的链轮上安装新链条会导致链条加速磨损和噪音。"
  },
  {
    id: 96,
    q: "An electronically controlled 4WD system has a warning light illuminated on the dashboard. The system defaults to 2WD mode. What should the technician do FIRST?",
    options: [
      "A) Replace the transfer case motor",
      "B) Scan for diagnostic trouble codes in the transfer case control module",
      "C) Replace the transfer case fluid",
      "D) Inspect the front driveshaft"
    ],
    answer: 1,
    explanation: "When an electronic 4WD system illuminates a warning light and defaults to 2WD, the control module has detected a fault. The technician should first scan for diagnostic trouble codes stored in the transfer case control module. The DTCs will direct the diagnosis to the specific circuit or component that has failed.",
    diagram: "",
    terms: ["transfer_case", "dtc", "scan_tool", "tcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=FBaGBXcc6zE",
    youtubeTitle: "Transfer Case and 4WD Explained",
    qChinese: "电子控制四驱系统仪表板上亮起警告灯。系统默认为两驱模式。技师应首先做什么？",
    optionsChinese: [
      "A) 更换分动箱马达",
      "B) 读取分动箱控制模块中的诊断故障码",
      "C) 更换分动箱油液",
      "D) 检查前传动轴"
    ],
    explanationChinese: "当电子四驱系统亮起警告灯并默认为两驱时，控制模块已检测到故障。技师应首先读取分动箱控制模块中存储的诊断故障码。故障码将引导诊断到具体故障的电路或部件。"
  },
  {
    id: 97,
    q: "Technician A says vacuum-actuated locking hubs use engine vacuum to engage the front axle. Technician B says some vehicles use automatic locking hubs that engage when the transfer case is shifted into 4WD. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Some 4WD systems use engine vacuum routed through a solenoid and vacuum lines to engage the front hubs or disconnect the front axle shaft. Other systems use automatic locking hubs that mechanically engage when the front driveshaft begins to rotate after the transfer case shifts into 4WD.",
    diagram: "",
    terms: ["transfer_case", "differential", "vacuum_gauge"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=FBaGBXcc6zE",
    youtubeTitle: "Transfer Case and 4WD Explained",
    qChinese: "技师A说真空操作的锁止轮毂使用发动机真空来接合前桥。技师B说有些车辆使用自动锁止轮毂，在分动箱切换到四驱时自动接合。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "两位技师都是正确的。一些四驱系统使用通过电磁阀和真空管路输送的发动机真空来接合前轮毂或断开前桥轴。其他系统使用自动锁止轮毂，在分动箱换入四驱后前传动轴开始旋转时机械式接合。"
  },
  {
    id: 98,
    q: "A customer complains that the 4WD indicator light flashes intermittently while driving. What is the MOST likely cause?",
    options: [
      "A) Normal system operation",
      "B) A faulty front axle disconnect actuator or sensor signal issue",
      "C) Low engine coolant",
      "D) Worn rear brake pads"
    ],
    answer: 1,
    explanation: "A flashing 4WD indicator light typically signals a system fault detected by the control module. A faulty front axle disconnect actuator, a faulty position sensor, or intermittent wiring issues can cause the system to fail to fully engage or disengage, triggering the flashing indicator to alert the driver.",
    diagram: "",
    terms: ["transfer_case", "speed_sensor", "dtc", "scan_tool"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=FBaGBXcc6zE",
    youtubeTitle: "Transfer Case and 4WD Explained",
    qChinese: "客户抱怨四驱指示灯在行驶中间歇性闪烁。最可能的原因是什么？",
    optionsChinese: [
      "A) 系统正常工作",
      "B) 前桥断开执行器故障或传感器信号问题",
      "C) 发动机冷却液不足",
      "D) 后刹车片磨损"
    ],
    explanationChinese: "闪烁的四驱指示灯通常表明控制模块检测到系统故障。前桥断开执行器故障、位置传感器故障或间歇性线路问题会导致系统无法完全接合或分离，触发闪烁的指示灯来提醒驾驶员。"
  },
  {
    id: 99,
    q: "All of the following are advantages of an electronically controlled AWD system EXCEPT:",
    options: [
      "A) Automatic torque distribution without driver input",
      "B) Integration with vehicle stability control systems",
      "C) Elimination of all drivetrain maintenance requirements",
      "D) Variable torque split for improved handling and traction"
    ],
    answer: 2,
    explanation: "Electronic AWD systems still require regular maintenance including fluid changes, filter replacements, and component inspections. They do not eliminate maintenance requirements. Their advantages include automatic torque distribution, integration with stability control and ABS systems, and the ability to vary the front-to-rear torque split.",
    diagram: "",
    terms: ["transfer_case", "abs", "transmission_service", "tcm"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=FBaGBXcc6zE",
    youtubeTitle: "Transfer Case and 4WD Explained",
    qChinese: "以下所有都是电子控制全时四驱系统的优势，除了：",
    optionsChinese: [
      "A) 无需驾驶员操作即可自动分配扭矩",
      "B) 与车辆稳定控制系统集成",
      "C) 消除所有传动系统维护需求",
      "D) 可变扭矩分配以改善操控性和牵引力"
    ],
    explanationChinese: "电子全时四驱系统仍然需要定期维护，包括更换油液、更换滤清器和部件检查。它们并不消除维护需求。其优势包括自动扭矩分配、与稳定控制和ABS系统集成，以及可变前后扭矩分配的能力。"
  },
  {
    id: 100,
    q: "A four-wheel-drive vehicle will not disengage from 4WD Low after the driver shifts the lever to 2WD High. What is the MOST likely cause?",
    options: [
      "A) The transfer case shift fork or mode sleeve is binding due to corrosion or lack of lubrication",
      "B) The front tires are worn",
      "C) The rear differential is locked",
      "D) The engine oil is low"
    ],
    answer: 0,
    explanation: "A transfer case that will not shift out of 4WD Low is most commonly caused by a binding shift fork, mode sleeve, or shift mechanism inside the transfer case. Corrosion, contaminated fluid, or lack of lubrication can cause internal components to seize. Rocking the vehicle may help release the bind temporarily.",
    diagram: "",
    terms: ["transfer_case", "transmission_fluid", "planetary_gear_set"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=FBaGBXcc6zE",
    youtubeTitle: "Transfer Case and 4WD Explained",
    qChinese: "四轮驱动车辆在驾驶员将操纵杆从四驱低速挡换到两驱高速挡后无法退出四驱低速挡。最可能的原因是什么？",
    optionsChinese: [
      "A) 分动箱拨叉或模式套筒因腐蚀或缺少润滑而卡滞",
      "B) 前轮胎磨损",
      "C) 后差速器被锁定",
      "D) 发动机机油不足"
    ],
    explanationChinese: "分动箱无法从四驱低速挡换出，最常见的原因是分动箱内部的拨叉、模式套筒或换挡机构卡滞。腐蚀、油液污染或缺少润滑会导致内部部件卡死。前后晃动车辆可能有助于暂时释放卡滞。"
  }
];
