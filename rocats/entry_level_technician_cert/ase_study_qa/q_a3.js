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
  },
  // ===== ADDITIONAL A3 QUESTIONS (101-200) =====
  {
    id: 101,
    q: "A vehicle with a manual transmission has a clutch that grabs suddenly instead of engaging smoothly. Technician A says a glazed flywheel surface could cause this condition. Technician B says oil contamination on the clutch disc could cause this condition. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. A glazed flywheel has a hardened, polished surface that reduces friction consistency, causing the clutch to grab rather than engage progressively. Oil contamination on the clutch disc creates uneven friction zones where some areas grip and others slip, also resulting in a sudden grabbing sensation during engagement.",
    diagram: "",
    terms: ["clutch_disc", "flywheel", "pressure_plate"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flywheel.jpg/640px-Flywheel.jpg",
    youtube: "https://www.youtube.com/watch?v=devo3kdSPQY",
    youtubeTitle: "Clutch, How Does It Work?",
    qChinese: "一辆手动变速器车辆的离合器突然抓住而不是平稳接合。技师A说飞轮表面烧蚀光滑可能导致此状况。技师B说离合器摩擦片油污可能导致此状况。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "两位技师都是正确的。烧蚀光滑的飞轮表面硬化抛光，降低了摩擦一致性，导致离合器突然抓住而非渐进接合。离合器摩擦片上的油污会产生不均匀的摩擦区域，部分区域抓紧而其他区域打滑，也会在接合时产生突然抓住的感觉。"
  },
  {
    id: 102,
    q: "A customer complains of a rattling noise from the bell housing area at idle that disappears when the clutch pedal is slightly depressed. What is the MOST likely cause?",
    options: [
      "A) Worn clutch release (throwout) bearing",
      "B) Worn or damaged clutch disc damper springs",
      "C) Loose flywheel bolts",
      "D) Cracked pressure plate"
    ],
    answer: 1,
    explanation: "Worn or broken clutch disc damper springs rattle at idle because the torsional vibrations from the engine pass through the engaged clutch disc. When the clutch pedal is slightly depressed, the clamping force is reduced and the disc is partially freed from the flywheel, eliminating the vibration path and stopping the rattle.",
    diagram: "",
    terms: ["damper_springs", "clutch_disc", "bell_housing"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Clutch_disc.jpg/640px-Clutch_disc.jpg",
    youtube: "https://www.youtube.com/watch?v=devo3kdSPQY",
    youtubeTitle: "Clutch, How Does It Work?",
    qChinese: "客户抱怨怠速时变速器壳体区域有异响，当轻踩离合器踏板时异响消失。最可能的原因是什么？",
    optionsChinese: [
      "A) 离合器分离轴承磨损",
      "B) 离合器摩擦片减振弹簧磨损或损坏",
      "C) 飞轮螺栓松动",
      "D) 压盘开裂"
    ],
    explanationChinese: "离合器摩擦片减振弹簧磨损或断裂会在怠速时发出异响，因为发动机的扭转振动通过接合的离合器摩擦片传递。当轻踩离合器踏板时，夹紧力减小，摩擦片部分脱离飞轮，消除了振动传递路径，异响随之停止。"
  },
  {
    id: 103,
    q: "When adjusting a mechanical clutch linkage, the technician measures clutch pedal free play. What does clutch pedal free play represent?",
    options: [
      "A) The total distance the pedal travels from rest to the floor",
      "B) The distance the pedal moves before the release bearing contacts the pressure plate fingers",
      "C) The distance the pedal moves after the clutch is fully disengaged",
      "D) The force required to depress the clutch pedal"
    ],
    answer: 1,
    explanation: "Clutch pedal free play is the distance the pedal travels before the release bearing makes contact with the pressure plate diaphragm spring fingers. This clearance ensures the release bearing is not constantly riding on the pressure plate fingers, which would cause premature bearing wear and potential clutch slippage from partial disengagement.",
    diagram: "",
    terms: ["free_play", "release_bearing", "diaphragm_spring"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Clutch_disc.jpg/640px-Clutch_disc.jpg",
    youtube: "https://www.youtube.com/watch?v=devo3kdSPQY",
    youtubeTitle: "Clutch, How Does It Work?",
    qChinese: "在调整机械离合器连杆时，技师测量离合器踏板自由行程。离合器踏板自由行程代表什么？",
    optionsChinese: [
      "A) 踏板从静止位置到底部的总行程",
      "B) 踏板在分离轴承接触压盘弹簧指之前移动的距离",
      "C) 离合器完全分离后踏板移动的距离",
      "D) 踩下离合器踏板所需的力"
    ],
    explanationChinese: "离合器踏板自由行程是踏板在分离轴承接触压盘膜片弹簧指之前移动的距离。这个间隙确保分离轴承不会持续压在压盘弹簧指上，否则会导致轴承过早磨损以及因部分分离而可能产生的离合器打滑。"
  },
  {
    id: 104,
    q: "A vehicle with a hydraulic clutch actuation system has a soft, spongy clutch pedal. The fluid reservoir level is full. What is the MOST likely cause?",
    options: [
      "A) A worn clutch disc",
      "B) Air trapped in the hydraulic system",
      "C) A weak pressure plate spring",
      "D) A worn pilot bearing"
    ],
    answer: 1,
    explanation: "A soft or spongy clutch pedal in a hydraulic system with a full reservoir most likely indicates air trapped in the hydraulic lines, master cylinder, or slave cylinder. Air is compressible, unlike hydraulic fluid, so it creates a spongy feel. The system must be bled to remove the air and restore firm pedal operation.",
    diagram: "",
    terms: ["master_cylinder", "slave_cylinder", "hydraulic_clutch"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Clutch_disc.jpg/640px-Clutch_disc.jpg",
    youtube: "https://www.youtube.com/watch?v=devo3kdSPQY",
    youtubeTitle: "Clutch, How Does It Work?",
    qChinese: "一辆配备液压离合器操纵系统的车辆离合器踏板发软有海绵感。液压油储液罐液位正常。最可能的原因是什么？",
    optionsChinese: [
      "A) 离合器摩擦片磨损",
      "B) 液压系统中有空气",
      "C) 压盘弹簧弹力不足",
      "D) 导轴承磨损"
    ],
    explanationChinese: "在液压油储液罐液位正常的情况下，液压离合器踏板发软最可能表明液压管路、主缸或分缸中有空气。空气可以被压缩，而液压油不能，因此会产生海绵般的感觉。需要排放系统中的空气以恢复踏板的正常硬度。"
  },
  {
    id: 105,
    q: "A rear-wheel-drive vehicle with a manual transmission makes a high-pitched squealing noise that goes away when the clutch pedal is depressed. Which component is MOST likely causing this noise?",
    options: [
      "A) Release (throwout) bearing",
      "B) Pilot bearing or bushing",
      "C) Input shaft bearing",
      "D) Countershaft bearing"
    ],
    answer: 1,
    explanation: "A noise present when the clutch is engaged (pedal up) that disappears when the pedal is depressed points to the pilot bearing or bushing. When the clutch is engaged, the input shaft and crankshaft rotate together, so the pilot bearing is not under differential rotation stress. When disengaged, the input shaft stops but the crankshaft keeps spinning, loading the pilot bearing. However, if the noise stops when depressed, the worn pilot bearing noise occurs during engagement when slight misalignment causes friction.",
    diagram: "",
    terms: ["pilot_bearing", "input_shaft", "crankshaft"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flywheel.jpg/640px-Flywheel.jpg",
    youtube: "https://www.youtube.com/watch?v=devo3kdSPQY",
    youtubeTitle: "Clutch, How Does It Work?",
    qChinese: "一辆后轮驱动手动变速器车辆发出高音尖叫声，踩下离合器踏板后消失。哪个部件最可能导致此噪音？",
    optionsChinese: [
      "A) 分离轴承（释放轴承）",
      "B) 导轴承或衬套",
      "C) 输入轴轴承",
      "D) 中间轴轴承"
    ],
    explanationChinese: "当离合器接合（踏板抬起）时出现的噪音在踏板踩下后消失，这指向导轴承或衬套问题。当离合器接合时，输入轴和曲轴一起旋转，如果导轴承磨损，轻微的不对中会产生摩擦噪音。踩下离合器后输入轴与曲轴分离，消除了产生噪音的条件。"
  },
  {
    id: 106,
    q: "Technician A says a dual-mass flywheel should be resurfaced when replacing the clutch. Technician B says a dual-mass flywheel should be replaced if it shows signs of heat damage or excessive wear. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 1,
    explanation: "Only Technician B is correct. Dual-mass flywheels cannot be resurfaced like conventional solid flywheels because they contain internal spring damper mechanisms and have a precisely calibrated friction surface thickness. If a dual-mass flywheel shows heat spots, scoring, or worn springs, it must be replaced as a complete assembly rather than machined.",
    diagram: "",
    terms: ["dual_mass_flywheel", "flywheel_resurfacing", "clutch_replacement"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flywheel.jpg/640px-Flywheel.jpg",
    youtube: "https://www.youtube.com/watch?v=devo3kdSPQY",
    youtubeTitle: "Clutch, How Does It Work?",
    qChinese: "技师A说更换离合器时应对双质量飞轮进行表面加工。技师B说如果双质量飞轮出现热损伤或过度磨损迹象，应予以更换。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "只有技师B是正确的。双质量飞轮不能像传统实心飞轮那样进行表面加工，因为它们包含内部弹簧减振机构，摩擦面厚度经过精确校准。如果双质量飞轮出现热斑、划痕或弹簧磨损，必须作为完整组件更换，而不能进行机械加工。"
  },
  {
    id: 107,
    q: "During a clutch replacement, the technician notices blue discoloration (heat spots) on the flywheel surface. What does this indicate?",
    options: [
      "A) The flywheel is made of a high-quality alloy steel",
      "B) The flywheel has been overheated due to clutch slippage",
      "C) Normal wear from clutch engagement cycles",
      "D) The flywheel was improperly balanced at the factory"
    ],
    answer: 1,
    explanation: "Blue discoloration or hot spots on a flywheel surface indicate the flywheel has been subjected to excessive heat, typically from prolonged clutch slippage. This overheating changes the metallurgical properties of the surface, creating hardened spots that resist friction evenly and can cause clutch chatter or grabbing. The flywheel should be resurfaced or replaced.",
    diagram: "",
    terms: ["flywheel", "hot_spots", "clutch_slippage"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flywheel.jpg/640px-Flywheel.jpg",
    youtube: "https://www.youtube.com/watch?v=devo3kdSPQY",
    youtubeTitle: "Clutch, How Does It Work?",
    qChinese: "在更换离合器期间，技师注意到飞轮表面有蓝色变色（热斑）。这表示什么？",
    optionsChinese: [
      "A) 飞轮由高质量合金钢制成",
      "B) 飞轮因离合器打滑而过热",
      "C) 离合器接合循环的正常磨损",
      "D) 飞轮在工厂时平衡不当"
    ],
    explanationChinese: "飞轮表面的蓝色变色或热斑表明飞轮承受了过度的热量，通常由离合器长时间打滑引起。过热会改变表面的金属特性，产生硬化点，影响均匀摩擦，可能导致离合器抖动或突然抓住。飞轮应进行表面加工或更换。"
  },
  {
    id: 108,
    q: "A vehicle owner complains that the clutch pedal stays on the floor and will not return. The hydraulic fluid level is low. What should the technician inspect FIRST?",
    options: [
      "A) The clutch disc for wear",
      "B) The pressure plate diaphragm spring",
      "C) The hydraulic system for external leaks at the master and slave cylinders",
      "D) The flywheel for warpage"
    ],
    answer: 2,
    explanation: "When the clutch pedal stays on the floor and the hydraulic fluid is low, the most logical first step is to inspect the hydraulic system for external leaks. The master cylinder, slave cylinder, and connecting lines should be checked for leaking fluid. A leak allows air to enter the system and fluid to escape, preventing proper hydraulic pressure to return the pedal.",
    diagram: "",
    terms: ["master_cylinder", "slave_cylinder", "hydraulic_leak"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Clutch_disc.jpg/640px-Clutch_disc.jpg",
    youtube: "https://www.youtube.com/watch?v=devo3kdSPQY",
    youtubeTitle: "Clutch, How Does It Work?",
    qChinese: "车主抱怨离合器踏板停留在底部无法回弹。液压油液位偏低。技师应首先检查什么？",
    optionsChinese: [
      "A) 离合器摩擦片磨损情况",
      "B) 压盘膜片弹簧",
      "C) 液压系统主缸和分缸是否有外部泄漏",
      "D) 飞轮是否变形"
    ],
    explanationChinese: "当离合器踏板停留在底部且液压油液位偏低时，最合理的第一步是检查液压系统是否有外部泄漏。应检查主缸、分缸和连接管路是否漏油。泄漏会导致空气进入系统和液压油流失，无法产生足够的液压来使踏板回弹。"
  },
  {
    id: 109,
    q: "A manual transmission vehicle shudders when starting from a stop on an incline. The clutch engages smoothly on level ground. What is the MOST likely cause?",
    options: [
      "A) Worn engine mounts allowing excessive engine movement",
      "B) A defective pressure plate with weak clamping force",
      "C) A worn clutch disc with glazed friction surfaces",
      "D) Contaminated transmission fluid"
    ],
    answer: 0,
    explanation: "Worn or broken engine and transmission mounts allow excessive powertrain movement under load. When starting on an incline, the additional torque demand causes the engine and transmission to shift, changing the alignment of the clutch components and creating a shudder. On level ground the torque demand is lower, so the symptom is less noticeable.",
    diagram: "",
    terms: ["engine_mount", "transmission_mount", "clutch_shudder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Clutch_disc.jpg/640px-Clutch_disc.jpg",
    youtube: "https://www.youtube.com/watch?v=devo3kdSPQY",
    youtubeTitle: "Clutch, How Does It Work?",
    qChinese: "一辆手动变速器车辆在坡道起步时发生抖动。在平地上离合器接合平稳。最可能的原因是什么？",
    optionsChinese: [
      "A) 发动机支架磨损导致发动机过度移动",
      "B) 压盘夹紧力不足",
      "C) 离合器摩擦片磨损且摩擦面光滑",
      "D) 变速器油污染"
    ],
    explanationChinese: "磨损或断裂的发动机和变速器支架允许动力总成在负载下过度移动。在坡道起步时，额外的扭矩需求导致发动机和变速器移位，改变了离合器组件的对准，产生抖动。在平地上扭矩需求较低，因此症状不太明显。"
  },
  {
    id: 110,
    q: "When bleeding a hydraulic clutch system, the technician should pump the clutch pedal and then hold it to the floor while the bleeder valve is opened. What is the purpose of this procedure?",
    options: [
      "A) To test the clutch master cylinder for internal leaks",
      "B) To force trapped air out of the hydraulic system through the bleeder valve",
      "C) To measure clutch pedal free play accurately",
      "D) To check the slave cylinder piston travel"
    ],
    answer: 1,
    explanation: "Bleeding the hydraulic clutch system removes trapped air from the lines, master cylinder, and slave cylinder. Pumping the pedal pressurizes the fluid and moves air bubbles toward the bleeder valve. Holding the pedal down while opening the bleeder allows pressurized fluid and air to escape. The bleeder is closed before releasing the pedal to prevent air from being drawn back in.",
    diagram: "",
    terms: ["bleeding", "bleeder_valve", "slave_cylinder"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Clutch_disc.jpg/640px-Clutch_disc.jpg",
    youtube: "https://www.youtube.com/watch?v=devo3kdSPQY",
    youtubeTitle: "Clutch, How Does It Work?",
    qChinese: "在排放液压离合器系统时，技师应反复踩踏离合器踏板，然后将其保持在底部同时打开放气阀。此程序的目的是什么？",
    optionsChinese: [
      "A) 测试离合器主缸是否有内部泄漏",
      "B) 通过放气阀将液压系统中的空气排出",
      "C) 准确测量离合器踏板自由行程",
      "D) 检查分缸活塞行程"
    ],
    explanationChinese: "排放液压离合器系统可去除管路、主缸和分缸中的空气。反复踩踏板使液压油加压并将气泡推向放气阀。在踏板保持踩到底的状态下打开放气阀，可让加压的液压油和空气排出。在松开踏板之前关闭放气阀，以防止空气被吸回。"
  },
  {
    id: 111,
    q: "A technician is replacing a clutch assembly. Which of the following should be done BEFORE installing the new clutch disc on the flywheel?",
    options: [
      "A) Fill the transmission with gear oil",
      "B) Use an alignment tool to center the clutch disc on the flywheel",
      "C) Inspect and replace the rear main seal if leaking",
      "D) Adjust the clutch pedal free play"
    ],
    answer: 2,
    explanation: "Before installing the new clutch disc, the technician should inspect the rear main crankshaft seal for leaks. If oil is leaking from the rear main seal, it will contaminate the new clutch disc and cause slippage or chatter. Replacing a leaking seal now prevents the need to remove the transmission again shortly after the repair is completed.",
    diagram: "",
    terms: ["rear_main_seal", "clutch_disc", "crankshaft"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Clutch_disc.jpg/640px-Clutch_disc.jpg",
    youtube: "https://www.youtube.com/watch?v=devo3kdSPQY",
    youtubeTitle: "Clutch, How Does It Work?",
    qChinese: "技师正在更换离合器总成。在将新的离合器摩擦片安装到飞轮上之前，应执行以下哪项操作？",
    optionsChinese: [
      "A) 向变速器加注齿轮油",
      "B) 使用对中工具将离合器摩擦片对准飞轮中心",
      "C) 检查并更换漏油的曲轴后油封",
      "D) 调整离合器踏板自由行程"
    ],
    explanationChinese: "在安装新的离合器摩擦片之前，技师应检查曲轴后油封是否漏油。如果后油封漏油，将会污染新的离合器摩擦片，导致打滑或抖动。现在更换漏油的密封件可以避免在修理完成后不久再次拆卸变速器。"
  },
  {
    id: 112,
    q: "A clutch alignment tool is used during clutch installation to accomplish which of the following?",
    options: [
      "A) To set proper clutch pedal free play",
      "B) To center the clutch disc so the transmission input shaft can be inserted through the pilot bearing",
      "C) To adjust the release bearing preload",
      "D) To check flywheel runout"
    ],
    answer: 1,
    explanation: "The clutch alignment tool centers the clutch disc splines relative to the pilot bearing in the crankshaft or flywheel. Without proper alignment, the transmission input shaft cannot pass through the clutch disc splines and into the pilot bearing during reinstallation. The tool is a simple mandrel that mimics the input shaft dimensions.",
    diagram: "",
    terms: ["alignment_tool", "pilot_bearing", "input_shaft"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Clutch_disc.jpg/640px-Clutch_disc.jpg",
    youtube: "https://www.youtube.com/watch?v=devo3kdSPQY",
    youtubeTitle: "Clutch, How Does It Work?",
    qChinese: "在离合器安装过程中使用离合器对中工具是为了完成以下哪项操作？",
    optionsChinese: [
      "A) 设定正确的离合器踏板自由行程",
      "B) 将离合器摩擦片居中，以便变速器输入轴能够插入导轴承",
      "C) 调整分离轴承预紧力",
      "D) 检查飞轮径向跳动"
    ],
    explanationChinese: "离合器对中工具将离合器摩擦片的花键相对于曲轴或飞轮中的导轴承居中。如果对准不当，变速器输入轴在重新安装时无法穿过离合器摩擦片花键进入导轴承。该工具是一个模拟输入轴尺寸的简单芯轴。"
  },
  {
    id: 113,
    q: "A vehicle with a cable-operated clutch has excessive clutch pedal effort. Technician A says a binding or frayed clutch cable could cause this. Technician B says a seized pilot bearing could cause this. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Only Technician A is correct. A binding, frayed, or corroded clutch cable creates additional resistance, requiring more effort to depress the pedal. A seized pilot bearing would cause noise and difficulty shifting but would not significantly increase clutch pedal effort, since the pilot bearing does not resist pedal movement in the clutch release mechanism.",
    diagram: "",
    terms: ["clutch_cable", "pilot_bearing", "pedal_effort"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Clutch_disc.jpg/640px-Clutch_disc.jpg",
    youtube: "https://www.youtube.com/watch?v=devo3kdSPQY",
    youtubeTitle: "Clutch, How Does It Work?",
    qChinese: "一辆拉索式离合器车辆的离合器踏板踩踏力过大。技师A说离合器拉索卡滞或磨损可能导致此问题。技师B说导轴承卡死可能导致此问题。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "只有技师A是正确的。卡滞、磨损或腐蚀的离合器拉索会产生额外阻力，需要更大的力量来踩下踏板。卡死的导轴承会导致噪音和换挡困难，但不会显著增加离合器踏板踩踏力，因为导轴承不会在离合器分离机构中抵抗踏板运动。"
  },
  {
    id: 114,
    q: "After a clutch replacement, the transmission is difficult to shift into first gear and reverse at a stop. The clutch pedal has proper free play. What is the MOST likely cause?",
    options: [
      "A) The clutch disc was installed backwards",
      "B) The wrong transmission fluid was used",
      "C) The pressure plate bolts are too tight",
      "D) The flywheel was not resurfaced"
    ],
    answer: 0,
    explanation: "If the clutch disc is installed backwards, the hub offset will position the disc too close to the flywheel or pressure plate, preventing full disengagement when the pedal is depressed. This causes the disc to drag, making it difficult to shift into first gear and reverse since these gears lack synchronizers in many transmissions or require the input shaft to stop completely.",
    diagram: "",
    terms: ["clutch_disc", "clutch_drag", "gear_engagement"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Clutch_disc.jpg/640px-Clutch_disc.jpg",
    youtube: "https://www.youtube.com/watch?v=devo3kdSPQY",
    youtubeTitle: "Clutch, How Does It Work?",
    qChinese: "更换离合器后，车辆停止时难以挂入一挡和倒挡。离合器踏板自由行程正常。最可能的原因是什么？",
    optionsChinese: [
      "A) 离合器摩擦片装反了",
      "B) 使用了错误的变速器油",
      "C) 压盘螺栓拧得太紧",
      "D) 飞轮未进行表面加工"
    ],
    explanationChinese: "如果离合器摩擦片装反了，轮毂偏移会使摩擦片距飞轮或压盘太近，在踩下踏板时无法完全分离。这会导致摩擦片拖拽，使挂入一挡和倒挡变得困难，因为在许多变速器中这些挡位没有同步器，或需要输入轴完全停止。"
  },
  {
    id: 115,
    q: "A manual transmission pops out of second gear during deceleration. Technician A says worn synchronizer sleeve and hub could cause this. Technician B says weak or broken detent springs in the shift mechanism could cause this. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Worn synchronizer sleeves and hubs create excessive clearance that allows the gear to disengage under deceleration load reversal. Weak or broken detent springs fail to hold the shift fork and synchronizer sleeve in the engaged position, allowing the transmission to slip out of gear when load direction changes during deceleration.",
    diagram: "",
    terms: ["synchronizer", "detent_spring", "shift_fork"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "Manual Transmission, How It Works?",
    qChinese: "手动变速器在减速时二挡自动脱挡。技师A说同步器套筒和轮毂磨损可能导致此问题。技师B说换挡机构中的定位弹簧弱化或断裂可能导致此问题。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "两位技师都是正确的。同步器套筒和轮毂磨损会产生过大间隙，在减速负载反转时允许齿轮脱开。弱化或断裂的定位弹簧无法将换挡拨叉和同步器套筒保持在接合位置，在减速时负载方向改变时导致变速器脱挡。"
  },
  {
    id: 116,
    q: "A grinding noise is heard when shifting into third gear. All other gears shift smoothly. What is the MOST likely cause?",
    options: [
      "A) Low transmission fluid level",
      "B) Worn third gear synchronizer blocking ring",
      "C) Bent shift fork for first and second gears",
      "D) Worn countershaft bearings"
    ],
    answer: 1,
    explanation: "A grinding noise when shifting into a specific gear indicates that the synchronizer blocking ring for that gear is worn and cannot adequately match the speed of the gear to the synchronizer hub before engagement. The brass or carbon-lined blocking ring has worn friction material that fails to slow or speed up the target gear, causing gear clash on that particular shift.",
    diagram: "",
    terms: ["synchronizer", "blocking_ring", "gear_clash"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "Manual Transmission, How It Works?",
    qChinese: "挂入三挡时听到研磨噪音。其他所有挡位换挡平稳。最可能的原因是什么？",
    optionsChinese: [
      "A) 变速器油液位低",
      "B) 三挡同步器阻挡环磨损",
      "C) 一挡和二挡换挡拨叉弯曲",
      "D) 中间轴轴承磨损"
    ],
    explanationChinese: "挂入特定挡位时的研磨噪音表明该挡位的同步器阻挡环磨损，无法在接合前充分匹配齿轮与同步器轮毂的速度。黄铜或碳衬阻挡环的摩擦材料磨损，无法减速或加速目标齿轮，导致在该特定换挡时齿轮碰撞。"
  },
  {
    id: 117,
    q: "A manual transmission is hard to shift into all gears when the engine is running but shifts easily with the engine off. What is the MOST likely cause?",
    options: [
      "A) Worn synchronizer blocking rings on all gears",
      "B) Incorrect transmission lubricant viscosity",
      "C) Clutch not fully disengaging",
      "D) Worn shift linkage bushings"
    ],
    answer: 2,
    explanation: "When a manual transmission shifts easily with the engine off but is hard to shift with the engine running, the clutch is not fully disengaging. The input shaft continues to spin even with the clutch pedal depressed, causing the synchronizers to work against a spinning input shaft. This can be caused by air in the hydraulic system, improper pedal adjustment, or a warped clutch disc.",
    diagram: "",
    terms: ["clutch_disengagement", "input_shaft", "synchronizer"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "Manual Transmission, How It Works?",
    qChinese: "手动变速器在发动机运转时所有挡位都难以换入，但发动机熄火时换挡容易。最可能的原因是什么？",
    optionsChinese: [
      "A) 所有挡位的同步器阻挡环磨损",
      "B) 变速器润滑油粘度不正确",
      "C) 离合器未完全分离",
      "D) 换挡连杆衬套磨损"
    ],
    explanationChinese: "当手动变速器在发动机熄火时换挡容易但在运转时难以换挡，说明离合器未完全分离。即使踩下离合器踏板，输入轴仍在继续旋转，导致同步器对抗旋转的输入轴工作。这可能是由液压系统中有空气、踏板调整不当或离合器摩擦片翘曲引起的。"
  },
  {
    id: 118,
    q: "A technician notices that the transmission fluid drained from a manual transmission has a milky appearance. What does this indicate?",
    options: [
      "A) The wrong type of lubricant was used",
      "B) Water contamination in the transmission",
      "C) Normal wear particles suspended in the fluid",
      "D) Overheating of the transmission fluid"
    ],
    answer: 1,
    explanation: "A milky appearance in transmission fluid indicates water contamination. Water can enter through worn seals, cracked housings, or improper storage of the vehicle in flood conditions. Water mixed with gear oil creates an emulsion that appears milky. This contamination reduces the lubricating properties of the fluid and can cause accelerated wear and corrosion of internal components.",
    diagram: "",
    terms: ["transmission_fluid", "water_contamination", "gear_oil"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "Manual Transmission, How It Works?",
    qChinese: "技师注意到从手动变速器排出的变速器油呈乳白色。这表示什么？",
    optionsChinese: [
      "A) 使用了错误类型的润滑油",
      "B) 变速器内有水污染",
      "C) 悬浮在油液中的正常磨损颗粒",
      "D) 变速器油过热"
    ],
    explanationChinese: "变速器油呈乳白色表明有水污染。水可能通过磨损的密封件、裂缝的壳体或车辆在洪水条件下不当存放而进入。水与齿轮油混合产生乳化液呈乳白色。这种污染降低了油液的润滑性能，可能导致内部零件加速磨损和腐蚀。"
  },
  {
    id: 119,
    q: "A manual transmission makes a whining noise that changes pitch with vehicle speed but is present in all gears. What is the MOST likely cause?",
    options: [
      "A) Worn synchronizer blocking rings",
      "B) Worn or damaged countershaft (cluster gear) bearings",
      "C) A chipped tooth on the third-speed gear",
      "D) Low clutch fluid level"
    ],
    answer: 1,
    explanation: "A whining noise present in all forward gears that changes pitch with vehicle speed points to worn countershaft bearings. The countershaft rotates whenever the transmission input shaft turns, so its bearings are loaded in every gear. Bearing wear creates a consistent whine whose pitch increases with rotational speed. Individual gear problems would only produce noise in that specific gear.",
    diagram: "",
    terms: ["countershaft", "bearing_noise", "cluster_gear"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "Manual Transmission, How It Works?",
    qChinese: "手动变速器发出的嗡鸣声随车速变化音调，且在所有挡位都存在。最可能的原因是什么？",
    optionsChinese: [
      "A) 同步器阻挡环磨损",
      "B) 中间轴（常啮合齿轮组）轴承磨损或损坏",
      "C) 三挡齿轮齿缺损",
      "D) 离合器液位低"
    ],
    explanationChinese: "在所有前进挡位都存在且随车速变化音调的嗡鸣声指向中间轴轴承磨损。中间轴在变速器输入轴旋转时始终转动，因此其轴承在每个挡位都承受负载。轴承磨损产生的嗡鸣声音调随转速增加。单个齿轮的问题只会在特定挡位产生噪音。"
  },
  {
    id: 120,
    q: "Technician A says the shift interlock mechanism in a manual transmission prevents the driver from selecting two gears at once. Technician B says the shift interlock mechanism prevents the transmission from being shifted into reverse while moving forward at speed. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Only Technician A is correct. The interlock mechanism uses pins or balls between the shift rails to prevent two shift forks from being moved simultaneously, which would engage two gears at once and lock up or destroy the transmission. Reverse lockout is a separate mechanism, typically a spring-loaded collar or detent that requires extra effort to select reverse.",
    diagram: "",
    terms: ["interlock", "shift_rail", "reverse_lockout"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "Manual Transmission, How It Works?",
    qChinese: "技师A说手动变速器中的互锁机构防止驾驶员同时选择两个挡位。技师B说互锁机构防止车辆在高速前进时挂入倒挡。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "只有技师A是正确的。互锁机构使用换挡轨之间的销或钢球来防止两个换挡拨叉同时移动，否则会同时接合两个挡位，锁死或损坏变速器。倒挡锁止是一个单独的机构，通常是需要额外力量才能选择倒挡的弹簧加载套筒或定位装置。"
  },
  {
    id: 121,
    q: "A vehicle with a manual transmission leaks fluid from the front of the transmission bell housing. What is the MOST likely source of the leak?",
    options: [
      "A) Transmission rear seal",
      "B) Transmission input shaft seal or engine rear main seal",
      "C) Transmission side cover gasket",
      "D) Speedometer drive gear seal"
    ],
    answer: 1,
    explanation: "Fluid leaking from the front of the bell housing area can come from either the transmission input shaft seal or the engine rear main crankshaft seal. The technician must determine whether the leaking fluid is gear oil (from the transmission input shaft seal) or engine oil (from the rear main seal) to properly diagnose the source before disassembling for repair.",
    diagram: "",
    terms: ["input_shaft_seal", "rear_main_seal", "bell_housing"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "Manual Transmission, How It Works?",
    qChinese: "一辆手动变速器车辆从变速器离合器壳前部漏油。最可能的泄漏来源是什么？",
    optionsChinese: [
      "A) 变速器后油封",
      "B) 变速器输入轴油封或发动机曲轴后油封",
      "C) 变速器侧盖垫片",
      "D) 车速表驱动齿轮油封"
    ],
    explanationChinese: "从离合器壳前部区域泄漏的油液可能来自变速器输入轴油封或发动机曲轴后油封。技师必须确定泄漏的是齿轮油（来自变速器输入轴油封）还是发动机油（来自后油封），以便在拆卸维修前正确诊断泄漏来源。"
  },
  {
    id: 122,
    q: "When checking the transmission fluid level in a manual transmission, the fluid should be at the level of the fill plug opening. What happens if the fluid level is significantly overfilled?",
    options: [
      "A) The synchronizers will engage more smoothly",
      "B) Excessive fluid may leak past seals and cause clutch contamination",
      "C) The transmission gears will run cooler",
      "D) Shift quality will improve in cold weather"
    ],
    answer: 1,
    explanation: "Overfilling a manual transmission creates excessive internal pressure, especially as the fluid heats up and expands during operation. This pressure can force fluid past seals and gaskets, particularly the front input shaft seal, allowing gear oil to leak into the bell housing and contaminate the clutch disc. Overfilling also increases fluid churning, raising temperature and reducing efficiency.",
    diagram: "",
    terms: ["transmission_fluid_level", "seal_leak", "clutch_contamination"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "Manual Transmission, How It Works?",
    qChinese: "检查手动变速器油液位时，油液应在加注塞口的水平位置。如果油液位明显过高会发生什么？",
    optionsChinese: [
      "A) 同步器接合更顺畅",
      "B) 过多的油液可能从油封渗出并污染离合器",
      "C) 变速器齿轮运行温度更低",
      "D) 冷天换挡品质会提高"
    ],
    explanationChinese: "手动变速器过度加注会产生过大的内部压力，特别是在运行过程中油液受热膨胀时。这种压力会迫使油液从油封和垫片处渗出，特别是前输入轴油封，使齿轮油泄漏到离合器壳中污染离合器摩擦片。过量加注还会增加油液搅动，提高温度并降低效率。"
  },
  {
    id: 123,
    q: "A manual transmission makes a clicking or ratcheting noise when turning corners in a parking lot with the clutch engaged. The noise is not present during straight-line driving. What should the technician inspect?",
    options: [
      "A) The transmission synchronizers",
      "B) The transmission countershaft bearings",
      "C) The clutch disc damper springs",
      "D) This symptom is not transmission-related; inspect the CV joints or differential"
    ],
    answer: 3,
    explanation: "A clicking or ratcheting noise that occurs only during turns is not typically a transmission problem. This symptom is characteristic of worn CV joints on front-wheel-drive vehicles or a failing limited-slip differential on rear-wheel-drive vehicles. During turns, the differential or CV joints experience different loading than in straight-line driving, revealing the wear condition.",
    diagram: "",
    terms: ["cv_joint", "differential", "turning_noise"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "Manual Transmission, How It Works?",
    qChinese: "手动变速器车辆在停车场转弯时离合器接合状态下发出咔嗒或棘轮声。直线行驶时没有此噪音。技师应检查什么？",
    optionsChinese: [
      "A) 变速器同步器",
      "B) 变速器中间轴轴承",
      "C) 离合器摩擦片减振弹簧",
      "D) 此症状与变速器无关；应检查CV接头或差速器"
    ],
    explanationChinese: "仅在转弯时出现的咔嗒或棘轮声通常不是变速器问题。此症状是前轮驱动车辆CV接头磨损或后轮驱动车辆限滑差速器故障的特征。在转弯时，差速器或CV接头承受与直线行驶不同的载荷，从而暴露出磨损状况。"
  },
  {
    id: 124,
    q: "A technician is diagnosing a manual transmission that is difficult to shift when cold but shifts normally after warming up. What is the MOST likely cause?",
    options: [
      "A) Worn synchronizer blocking rings",
      "B) Incorrect or degraded transmission lubricant that is too thick when cold",
      "C) A worn clutch release bearing",
      "D) Excessive input shaft end play"
    ],
    answer: 1,
    explanation: "Difficult shifting when cold that improves after warm-up strongly indicates incorrect or degraded transmission lubricant. Fluid that is too thick at cold temperatures increases resistance on the synchronizers and shift mechanism, making shifts stiff or difficult. Once the fluid warms and thins to proper viscosity, shifting returns to normal. Always verify the correct fluid specification for the vehicle.",
    diagram: "",
    terms: ["transmission_lubricant", "viscosity", "cold_shifting"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "Manual Transmission, How It Works?",
    qChinese: "技师正在诊断一个冷车时难以换挡但热车后换挡正常的手动变速器。最可能的原因是什么？",
    optionsChinese: [
      "A) 同步器阻挡环磨损",
      "B) 不正确或劣化的变速器润滑油在冷态时过于粘稠",
      "C) 离合器分离轴承磨损",
      "D) 输入轴轴向间隙过大"
    ],
    explanationChinese: "冷车时换挡困难但热车后改善强烈表明变速器润滑油不正确或已劣化。在低温时过于粘稠的油液会增加同步器和换挡机构的阻力，使换挡僵硬或困难。一旦油液变暖并稀释到正确粘度，换挡恢复正常。务必确认车辆正确的油液规格。"
  },
  {
    id: 125,
    q: "During a transmission teardown, a technician finds metal shavings on the magnetic drain plug. Technician A says this indicates normal wear in a high-mileage transmission. Technician B says the transmission internal components should be carefully inspected for damage. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 1,
    explanation: "Only Technician B is correct. While a small amount of fine metallic paste on the drain plug magnet can be considered normal, metal shavings or chips indicate abnormal wear or damage to gears, bearings, or synchronizers. The technician should thoroughly inspect all internal components including gear teeth, bearing surfaces, and synchronizer assemblies to identify the source of the metal contamination.",
    diagram: "",
    terms: ["magnetic_drain_plug", "metal_shavings", "gear_inspection"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Manual_gearbox.jpg/640px-Manual_gearbox.jpg",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "Manual Transmission, How It Works?",
    qChinese: "在变速器拆解过程中，技师在磁性放油螺塞上发现金属碎屑。技师A说这表明高里程变速器的正常磨损。技师B说应仔细检查变速器内部零件是否有损坏。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "只有技师B是正确的。虽然放油螺塞磁铁上少量细小金属粉末可以视为正常，但金属碎屑或切片表明齿轮、轴承或同步器存在异常磨损或损坏。技师应彻底检查所有内部零件，包括齿轮齿面、轴承表面和同步器总成，以确定金属污染的来源。"
  },
  // ===== TRANSAXLE DIAGNOSIS & REPAIR (Questions 126–138) =====
  {
    id: 126,
    q: "A front-wheel-drive vehicle with a manual transaxle makes a grinding noise when shifting into third gear. All other gears shift smoothly. What is the MOST likely cause?",
    options: [
      "A) A worn or damaged third-gear synchronizer assembly",
      "B) Low transaxle fluid level",
      "C) A worn clutch disc",
      "D) A damaged input shaft bearing"
    ],
    answer: 0,
    explanation: "Grinding during engagement of a single gear points to a worn synchronizer assembly for that specific gear. The synchronizer ring equalizes shaft speeds before engagement. When its friction surface is worn or the blocker ring is damaged, it cannot slow the gear adequately, causing the grinding noise during the shift into that gear only.",
    diagram: "",
    terms: ["synchronizer", "blocker_ring", "transaxle"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Getrag_F23_OD_gearset.jpg/640px-Getrag_F23_OD_gearset.jpg",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "How Manual Transmission Synchronizers Work",
    qChinese: "一辆前轮驱动配备手动变速驱动桥的车辆在挂入三挡时发出研磨噪音，其他所有挡位换挡平顺。最可能的原因是什么？",
    optionsChinese: [
      "A) 三挡同步器总成磨损或损坏",
      "B) 变速驱动桥油液位低",
      "C) 离合器摩擦片磨损",
      "D) 输入轴轴承损坏"
    ],
    explanationChinese: "仅在挂入单个挡位时出现研磨噪音，说明该挡位的同步器总成磨损。同步器环在接合前使轴速同步。当其摩擦面磨损或锁止环损坏时，无法充分减速齿轮，导致仅在挂入该挡位时产生研磨噪音。"
  },
  {
    id: 127,
    q: "A manual transaxle jumps out of fifth gear under light acceleration. Technician A says worn shift fork pads could be the cause. Technician B says worn gear dog teeth could be the cause. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Worn shift fork pads cannot maintain adequate pressure to keep the sliding sleeve fully engaged on the gear dog teeth. Additionally, worn or rounded dog teeth on the gear or sleeve do not provide sufficient locking depth, allowing the transmission to pop out of gear under load changes.",
    diagram: "",
    terms: ["shift_fork", "dog_teeth", "sliding_sleeve"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Gearbox_4gears.png/640px-Gearbox_4gears.png",
    youtube: "https://www.youtube.com/watch?v=JOLtS4VUcvQ",
    youtubeTitle: "Why Manual Transmissions Pop Out of Gear",
    qChinese: "手动变速驱动桥在轻加速时跳出五挡。技师A说换挡拨叉垫磨损可能是原因。技师B说齿轮接合齿磨损可能是原因。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "两位技师都正确。磨损的换挡拨叉垫无法保持足够的压力使滑动套筒完全接合在齿轮接合齿上。此外，磨损或圆化的接合齿无法提供足够的锁止深度，导致在负载变化时变速器跳挡。"
  },
  {
    id: 128,
    q: "A front-wheel-drive vehicle has a whining noise that changes pitch with vehicle speed but does not change with engine RPM in neutral. Which transaxle component is MOST likely the cause?",
    options: [
      "A) Final drive ring and pinion gears",
      "B) Input shaft bearing",
      "C) Clutch release bearing",
      "D) Reverse idler gear"
    ],
    answer: 0,
    explanation: "A whining noise that varies with vehicle speed but not engine RPM indicates the noise source is in the output side of the drivetrain. The final drive ring and pinion gears in the transaxle rotate proportionally to vehicle speed. Worn or improperly meshing final drive gears produce a characteristic whine that follows road speed.",
    diagram: "",
    terms: ["final_drive", "ring_gear", "pinion_gear"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Peugeot_gearbox_ring_and_pinion.jpg/640px-Peugeot_gearbox_ring_and_pinion.jpg",
    youtube: "https://www.youtube.com/watch?v=ARd-Om2VyiE",
    youtubeTitle: "Transaxle Final Drive Explained",
    qChinese: "一辆前轮驱动车辆有一种音调随车速变化但空挡时不随发动机转速变化的啸叫声。变速驱动桥的哪个部件最可能是原因？",
    optionsChinese: [
      "A) 主减速器环形齿轮和小齿轮",
      "B) 输入轴轴承",
      "C) 离合器分离轴承",
      "D) 倒挡惰轮"
    ],
    explanationChinese: "啸叫声随车速变化但不随发动机转速变化，说明噪音源在传动系统的输出侧。变速驱动桥中的主减速器环形齿轮和小齿轮的转速与车速成正比。磨损或啮合不当的主减速器齿轮会产生随车速变化的特征性啸叫声。"
  },
  {
    id: 129,
    q: "During a manual transaxle fluid inspection, the fluid appears milky white. What does this condition MOST likely indicate?",
    options: [
      "A) Water or coolant contamination",
      "B) Normal fluid oxidation",
      "C) Excessive bearing wear producing metal particles",
      "D) Incorrect fluid type was used"
    ],
    answer: 0,
    explanation: "Milky white or creamy-colored transaxle fluid indicates water or coolant contamination. This occurs when water enters through a cracked case, damaged seal, or a breach between the cooling system and transaxle in vehicles with fluid coolers. The emulsion reduces lubricating ability and accelerates component wear significantly.",
    diagram: "",
    terms: ["transaxle_fluid", "coolant_contamination", "emulsion"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Manual_Transmission_Fluid.jpg/640px-Manual_Transmission_Fluid.jpg",
    youtube: "https://www.youtube.com/watch?v=HAL_yFDc3P4",
    youtubeTitle: "Manual Transmission Fluid Check and Change",
    qChinese: "在检查手动变速驱动桥油液时，油液呈乳白色。这种状况最可能表明什么？",
    optionsChinese: [
      "A) 水或冷却液污染",
      "B) 正常的油液氧化",
      "C) 轴承过度磨损产生金属颗粒",
      "D) 使用了错误类型的油液"
    ],
    explanationChinese: "乳白色或奶油色的变速驱动桥油液表明有水或冷却液污染。这发生在水通过破裂的壳体、损坏的密封件或配有油液冷却器的车辆冷却系统与变速驱动桥之间的泄漏处进入时。乳化液降低了润滑能力并显著加速部件磨损。"
  },
  {
    id: 130,
    q: "A vehicle owner reports difficulty shifting into reverse on a manual transaxle. All forward gears engage normally. Technician A says the reverse lockout mechanism may be malfunctioning. Technician B says the reverse idler gear or shaft may be worn. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. A malfunctioning reverse lockout mechanism can physically prevent or restrict the shift lever from moving into the reverse gate position. A worn reverse idler gear or its shaft can cause misalignment, preventing the idler gear from sliding into proper mesh with the output and input gears for reverse operation.",
    diagram: "",
    terms: ["reverse_idler", "lockout_mechanism", "shift_gate"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Gearbox_4gears.png/640px-Gearbox_4gears.png",
    youtube: "https://www.youtube.com/watch?v=dLBl3bn3Mo0",
    youtubeTitle: "Manual Transmission Reverse Gear Operation",
    qChinese: "车主反映手动变速驱动桥难以挂入倒挡，所有前进挡都能正常接合。技师A说倒挡锁止机构可能故障。技师B说倒挡惰轮或惰轮轴可能磨损。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "两位技师都正确。倒挡锁止机构故障会在物理上阻止或限制换挡杆移动到倒挡位置。磨损的倒挡惰轮或其轴会导致对中不良，使惰轮无法正确滑入与输出齿轮和输入齿轮的啮合位置以进行倒挡操作。"
  },
  {
    id: 131,
    q: "A front-wheel-drive vehicle with a manual transaxle leaks fluid from the area where the axle shaft enters the transaxle housing. What is the MOST likely failed component?",
    options: [
      "A) Axle shaft seal (differential side seal)",
      "B) Transaxle case gasket",
      "C) Input shaft seal",
      "D) Speedometer drive gear O-ring"
    ],
    answer: 0,
    explanation: "The axle shaft seal, also called the differential side seal, is located where each axle shaft enters the transaxle housing. These seals prevent fluid from leaking along the axle shaft. When worn or damaged, they allow transaxle fluid to escape at the point where the shaft passes through the housing bore.",
    diagram: "",
    terms: ["axle_seal", "differential_side_seal", "transaxle_housing"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Oilseal.jpg/640px-Oilseal.jpg",
    youtube: "https://www.youtube.com/watch?v=PVhsXJuBSAQ",
    youtubeTitle: "Transaxle Axle Seal Replacement",
    qChinese: "一辆配备手动变速驱动桥的前轮驱动车辆在半轴进入变速驱动桥壳体处漏油。最可能失效的部件是什么？",
    optionsChinese: [
      "A) 半轴油封（差速器侧油封）",
      "B) 变速驱动桥壳体垫片",
      "C) 输入轴油封",
      "D) 车速表驱动齿轮O型圈"
    ],
    explanationChinese: "半轴油封，也称为差速器侧油封，位于每根半轴进入变速驱动桥壳体的位置。这些油封防止油液沿半轴泄漏。当磨损或损坏时，它们会在轴通过壳体孔的位置让变速驱动桥油液泄漏出来。"
  },
  {
    id: 132,
    q: "When checking transaxle end play during overhaul, a technician finds that the end play measurement exceeds specifications. What is the correct repair procedure?",
    options: [
      "A) Replace or change the thickness of selective shims or thrust washers",
      "B) Tighten the transaxle case bolts to increase preload",
      "C) Add additional gear oil to compensate for the extra clearance",
      "D) Replace the transaxle case with a new one"
    ],
    answer: 0,
    explanation: "Transaxle end play is controlled by selective shims or thrust washers placed at specific locations within the gear train. When end play exceeds specifications, the technician must measure the gap and select the appropriate thickness shim or thrust washer to bring the clearance back within the manufacturer-specified range.",
    diagram: "",
    terms: ["end_play", "selective_shim", "thrust_washer"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Getrag_F23_OD_gearset.jpg/640px-Getrag_F23_OD_gearset.jpg",
    youtube: "https://www.youtube.com/watch?v=5q2bZ97Oxjc",
    youtubeTitle: "Manual Transaxle Overhaul Procedures",
    qChinese: "在变速驱动桥大修期间检查轴向间隙时，技师发现轴向间隙测量值超出规格。正确的维修程序是什么？",
    optionsChinese: [
      "A) 更换或改变选择性垫片或推力垫圈的厚度",
      "B) 拧紧变速驱动桥壳体螺栓以增加预紧力",
      "C) 添加额外的齿轮油来补偿多余的间隙",
      "D) 用新的更换变速驱动桥壳体"
    ],
    explanationChinese: "变速驱动桥轴向间隙由放置在齿轮系特定位置的选择性垫片或推力垫圈控制。当轴向间隙超出规格时，技师必须测量间隙并选择适当厚度的垫片或推力垫圈，使间隙恢复到制造商规定的范围内。"
  },
  {
    id: 133,
    q: "A transaxle-equipped vehicle has a clunking noise when accelerating from a stop. The noise occurs once and then disappears at steady speed. What is the MOST likely cause?",
    options: [
      "A) Excessive differential side gear-to-case clearance",
      "B) Worn synchronizer rings",
      "C) A damaged input shaft bearing",
      "D) Low transaxle fluid level"
    ],
    answer: 0,
    explanation: "A single clunk during initial acceleration from a stop usually indicates excessive backlash or clearance in the differential assembly. Worn differential side gears, pinion gears, or their thrust washers allow movement when transitioning from coast to drive, creating a noticeable clunk that occurs once as the slack is taken up.",
    diagram: "",
    terms: ["differential", "backlash", "side_gear"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Differential_gear.png/640px-Differential_gear.png",
    youtube: "https://www.youtube.com/watch?v=lN_xGRt_vVY",
    youtubeTitle: "How a Differential Works",
    qChinese: "一辆配备变速驱动桥的车辆从停车起步加速时有咔嗒声。噪音出现一次后在匀速行驶时消失。最可能的原因是什么？",
    optionsChinese: [
      "A) 差速器半轴齿轮与壳体间隙过大",
      "B) 同步器环磨损",
      "C) 输入轴轴承损坏",
      "D) 变速驱动桥油液位低"
    ],
    explanationChinese: "从停车起步加速时出现的单次咔嗒声通常表明差速器总成中有过大的齿隙或间隙。磨损的差速器半轴齿轮、行星齿轮或其推力垫圈在从滑行到驱动的过渡中产生移动，当间隙被消除时产生一次明显的咔嗒声。"
  },
  {
    id: 134,
    q: "A technician is reassembling a transaxle and needs to verify proper gear mesh patterns on the final drive gears. What tool or material is used for this inspection?",
    options: [
      "A) Gear marking compound (Prussian blue or yellow lead paint)",
      "B) A dial indicator with a magnetic base",
      "C) A feeler gauge set",
      "D) A micrometer"
    ],
    answer: 0,
    explanation: "Gear marking compound, such as Prussian blue or yellow lead-based paste, is applied to the ring gear teeth to verify proper contact patterns. When the gears are rotated under light load, the compound transfers to show the contact area on the tooth surface, indicating whether the mesh pattern is correct or requires adjustment.",
    diagram: "",
    terms: ["gear_marking_compound", "contact_pattern", "ring_gear"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Gear_-_Loss_of_Material_%28Pitting%29.jpg/640px-Gear_-_Loss_of_Material_%28Pitting%29.jpg",
    youtube: "https://www.youtube.com/watch?v=bXMYhF_gDt8",
    youtubeTitle: "Ring and Pinion Gear Contact Pattern",
    qChinese: "技师正在重新组装变速驱动桥，需要验证主减速器齿轮的正确啮合接触斑纹。用什么工具或材料进行此检查？",
    optionsChinese: [
      "A) 齿轮标记涂料（普鲁士蓝或黄色铅基涂料）",
      "B) 带磁性底座的百分表",
      "C) 塞尺套件",
      "D) 千分尺"
    ],
    explanationChinese: "齿轮标记涂料，如普鲁士蓝或黄色铅基膏状物，涂在环形齿轮齿面上以验证正确的接触斑纹。当齿轮在轻负载下旋转时，涂料转印显示齿面上的接触区域，指示啮合斑纹是否正确或需要调整。"
  },
  {
    id: 135,
    q: "A front-wheel-drive vehicle pulls to one side during acceleration only. Steering is straight during cruising and braking. Technician A says unequal-length half shafts with no intermediate shaft could cause this. Technician B says a worn engine mount allowing excessive engine movement could cause this. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both are correct. Unequal-length half shafts create different operating angles, producing unequal torque at the wheels during acceleration, known as torque steer. A worn engine mount allows the transaxle to shift excessively during acceleration, changing half shaft angles and also producing torque steer. Both conditions cause pulling only under power.",
    diagram: "",
    terms: ["torque_steer", "half_shaft", "engine_mount"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Front_drive.jpg/640px-Front_drive.jpg",
    youtube: "https://www.youtube.com/watch?v=WeLm_sRLGCQ",
    youtubeTitle: "What is Torque Steer and How to Fix It",
    qChinese: "一辆前轮驱动车辆仅在加速时向一侧跑偏，巡航和制动时方向盘是正的。技师A说不等长半轴且没有中间轴可能导致此问题。技师B说磨损的发动机支架导致发动机过度移动可能导致此问题。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "两位都正确。不等长半轴产生不同的工作角度，在加速时在车轮处产生不等的扭矩，称为扭矩转向。磨损的发动机支架使变速驱动桥在加速时过度移位，改变半轴角度，也会产生扭矩转向。两种情况都仅在动力输出时导致跑偏。"
  },
  {
    id: 136,
    q: "During transaxle removal, what must be done FIRST before separating the transaxle from the engine?",
    options: [
      "A) Disconnect the battery and remove the axle shafts",
      "B) Drain the engine oil completely",
      "C) Remove the radiator and cooling fans",
      "D) Disconnect the exhaust manifold"
    ],
    answer: 0,
    explanation: "Before separating a transaxle from the engine, the battery must be disconnected for safety. The axle shafts must be removed or separated from the transaxle to allow it to be pulled away from the engine. Shift linkages, electrical connectors, speedometer cables, and clutch hydraulic lines must also be disconnected.",
    diagram: "",
    terms: ["transaxle_removal", "axle_shaft", "safety_disconnect"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Manual_5-speed_gearbox%2C_baulkring_synchromesh_-_top_view.jpg/640px-Manual_5-speed_gearbox%2C_baulkring_synchromesh_-_top_view.jpg",
    youtube: "https://www.youtube.com/watch?v=j4nASSz2YaQ",
    youtubeTitle: "Manual Transaxle Removal Step by Step",
    qChinese: "在拆卸变速驱动桥时，在将变速驱动桥与发动机分离之前必须首先做什么？",
    optionsChinese: [
      "A) 断开蓄电池并拆卸半轴",
      "B) 完全排放发动机机油",
      "C) 拆卸散热器和冷却风扇",
      "D) 断开排气歧管"
    ],
    explanationChinese: "在将变速驱动桥与发动机分离之前，必须断开蓄电池以确保安全。必须拆卸或分离半轴以使变速驱动桥能够从发动机拉开。还必须断开换挡连杆、电气接插件、车速表电缆和离合器液压管路。"
  },
  {
    id: 137,
    q: "A manual transaxle makes a howling noise in all gears that increases with speed. The noise stops when the vehicle is coasting in neutral. What is the MOST likely cause?",
    options: [
      "A) A worn or damaged input shaft bearing",
      "B) A worn synchronizer assembly",
      "C) A damaged output shaft bearing",
      "D) Worn differential spider gears"
    ],
    answer: 0,
    explanation: "A howling noise present in all forward gears that increases with speed and stops when coasting in neutral points to the input shaft bearing. This bearing is loaded whenever the clutch is engaged and power flows through the transmission. In neutral with the vehicle coasting, the input shaft stops turning, eliminating the noise.",
    diagram: "",
    terms: ["input_shaft_bearing", "transaxle_noise", "bearing_diagnosis"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Transmission_input_shaft.JPG/640px-Transmission_input_shaft.JPG",
    youtube: "https://www.youtube.com/watch?v=UU7sp_RjMkM",
    youtubeTitle: "Diagnosing Manual Transmission Bearing Noise",
    qChinese: "手动变速驱动桥在所有挡位都发出随速度增加的嚎叫声。当车辆在空挡滑行时噪音停止。最可能的原因是什么？",
    optionsChinese: [
      "A) 输入轴轴承磨损或损坏",
      "B) 同步器总成磨损",
      "C) 输出轴轴承损坏",
      "D) 差速器行星齿轮磨损"
    ],
    explanationChinese: "在所有前进挡都存在且随速度增加的嚎叫声，在空挡滑行时停止，指向输入轴轴承。当离合器接合且动力通过变速器传递时，该轴承始终承受负载。在空挡滑行时，输入轴停止转动，消除了噪音。"
  },
  {
    id: 138,
    q: "A transaxle differential is being inspected during overhaul. The side gear thrust washers show heavy wear on one side. What should the technician do?",
    options: [
      "A) Replace all thrust washers and inspect the differential case bores for damage",
      "B) Flip the thrust washers over and reinstall them",
      "C) Replace only the heavily worn thrust washers",
      "D) Apply sealant to the worn surfaces and reinstall"
    ],
    answer: 0,
    explanation: "When differential thrust washers show heavy one-sided wear, all thrust washers should be replaced as a set. The differential case bores must also be inspected because worn thrust washers often indicate the case bores are also damaged. Installing a mix of old and new washers would create uneven clearances and rapid repeat failure.",
    diagram: "",
    terms: ["thrust_washer", "differential_case", "side_gear"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Differential_gear.png/640px-Differential_gear.png",
    youtube: "https://www.youtube.com/watch?v=lN_xGRt_vVY",
    youtubeTitle: "Differential Overhaul and Inspection",
    qChinese: "在大修期间检查变速驱动桥差速器时，半轴齿轮推力垫圈一侧严重磨损。技师应该怎么做？",
    optionsChinese: [
      "A) 更换所有推力垫圈并检查差速器壳体孔是否有损坏",
      "B) 翻转推力垫圈并重新安装",
      "C) 仅更换严重磨损的推力垫圈",
      "D) 在磨损表面涂密封胶后重新安装"
    ],
    explanationChinese: "当差速器推力垫圈出现严重的单侧磨损时，应整套更换所有推力垫圈。还必须检查差速器壳体孔，因为磨损的推力垫圈通常表明壳体孔也有损坏。混合安装新旧垫圈会造成不均匀的间隙和快速重复故障。"
  },
  // ===== DRIVE SHAFT / HALF SHAFT / U-JOINT / CV JOINT DIAGNOSIS & REPAIR (Questions 139–150) =====
  {
    id: 139,
    q: "A front-wheel-drive vehicle makes a repetitive clicking noise during slow, tight turns. The noise is louder when turning left. Which component is MOST likely the cause?",
    options: [
      "A) Right outer CV joint",
      "B) Left outer CV joint",
      "C) Right inner CV joint",
      "D) Left wheel bearing"
    ],
    answer: 0,
    explanation: "A clicking noise during tight turns is the classic symptom of a worn outer CV (constant velocity) joint. When turning left, the right outer CV joint operates at its maximum angle and bears the most load. The worn joint allows play between the balls and races, producing the characteristic clicking or popping sound at each revolution.",
    diagram: "",
    terms: ["CV_joint", "outer_CV", "constant_velocity"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Joint_homocin%C3%A9tique.png/640px-Joint_homocin%C3%A9tique.png",
    youtube: "https://www.youtube.com/watch?v=K-teRIGSjnc",
    youtubeTitle: "How to Diagnose a Bad CV Joint",
    qChinese: "一辆前轮驱动车辆在慢速紧急转弯时发出重复的咔嗒声。左转时噪音更大。哪个部件最可能是原因？",
    optionsChinese: [
      "A) 右侧外等速万向节",
      "B) 左侧外等速万向节",
      "C) 右侧内等速万向节",
      "D) 左侧车轮轴承"
    ],
    explanationChinese: "紧急转弯时的咔嗒声是外等速万向节磨损的典型症状。左转时，右侧外等速万向节在最大角度下工作并承受最大负载。磨损的万向节使滚珠和沟道之间产生间隙，在每次旋转时产生特征性的咔嗒声或爆裂声。"
  },
  {
    id: 140,
    q: "A front-wheel-drive vehicle vibrates during acceleration but the vibration stops during steady cruising. Technician A says a worn inner CV joint could be the cause. Technician B says an out-of-balance tire could be the cause. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Only Technician A is correct. A worn inner CV joint, typically a tripod type, can produce vibration under acceleration load because the worn rollers and tulip housing allow excessive movement under torque. An out-of-balance tire would produce vibration at a consistent speed range regardless of acceleration or cruising conditions.",
    diagram: "",
    terms: ["inner_CV_joint", "tripod_joint", "vibration_diagnosis"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tripod_joint.JPG/640px-Tripod_joint.JPG",
    youtube: "https://www.youtube.com/watch?v=gAGfFJqVFJc",
    youtubeTitle: "Inner CV Joint Vibration Diagnosis",
    qChinese: "一辆前轮驱动车辆在加速时振动，但在匀速巡航时振动停止。技师A说磨损的内等速万向节可能是原因。技师B说轮胎不平衡可能是原因。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "只有技师A正确。磨损的内等速万向节（通常是三销滚子型）在加速负载下会产生振动，因为磨损的滚子和三叉壳体在扭矩作用下允许过度移动。轮胎不平衡会在恒定速度范围内产生振动，不论是加速还是巡航状态。"
  },
  {
    id: 141,
    q: "During inspection, a CV joint boot is found to be torn with grease slung around the inside of the wheel well. What is the recommended repair?",
    options: [
      "A) Replace the CV joint and boot assembly; inspect the joint for damage",
      "B) Clean the joint and install a new boot only",
      "C) Apply additional grease and wrap the boot with tape",
      "D) Replace the boot only without disassembling the joint"
    ],
    answer: 0,
    explanation: "When a CV boot is torn and grease has been slung out, the joint has been exposed to contaminants such as dirt and moisture. Even if the joint appears functional, internal damage from contamination is likely. The recommended repair is to replace the CV joint and boot as an assembly after inspecting for wear and damage.",
    diagram: "",
    terms: ["CV_boot", "grease_contamination", "half_shaft_service"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cheshirecat_cv_joint.jpg/640px-Cheshirecat_cv_joint.jpg",
    youtube: "https://www.youtube.com/watch?v=3H4PJnVPa5o",
    youtubeTitle: "CV Boot Replacement and Joint Inspection",
    qChinese: "检查时发现等速万向节防尘套破裂，润滑脂飞溅在轮罩内侧。推荐的维修方法是什么？",
    optionsChinese: [
      "A) 更换等速万向节和防尘套总成；检查万向节是否有损坏",
      "B) 仅清洁万向节并安装新防尘套",
      "C) 添加额外润滑脂并用胶带包裹防尘套",
      "D) 仅更换防尘套，不拆卸万向节"
    ],
    explanationChinese: "当等速万向节防尘套破裂且润滑脂已飞溅出来时，万向节已暴露于灰尘和水分等污染物中。即使万向节看起来功能正常，污染造成的内部损坏也很可能已经发生。推荐的维修方法是在检查磨损和损坏后将等速万向节和防尘套作为总成更换。"
  },
  {
    id: 142,
    q: "A rear-wheel-drive vehicle has a vibration at highway speed that is felt through the floorboard. The vibration is present in all gears and in neutral. What should be checked FIRST?",
    options: [
      "A) Drive shaft balance and U-joint condition",
      "B) Transmission output shaft bearing",
      "C) Differential pinion bearings",
      "D) Engine mounts"
    ],
    answer: 0,
    explanation: "A vibration felt through the floorboard at highway speed that is present in all gears and neutral indicates a drive shaft-related issue. Since the vibration occurs regardless of gear selection, the source is on the output side. Checking drive shaft balance, runout, and U-joint condition should be performed first as these are the most common causes.",
    diagram: "",
    terms: ["drive_shaft", "universal_joint", "vibration_diagnosis"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Universal_joint.png/640px-Universal_joint.png",
    youtube: "https://www.youtube.com/watch?v=V3BlGkDsVUQ",
    youtubeTitle: "Drive Shaft Vibration Diagnosis",
    qChinese: "一辆后轮驱动车辆在高速公路速度时有通过地板感觉到的振动。振动在所有挡位和空挡都存在。应该首先检查什么？",
    optionsChinese: [
      "A) 传动轴平衡和万向节状况",
      "B) 变速器输出轴轴承",
      "C) 差速器小齿轮轴承",
      "D) 发动机支架"
    ],
    explanationChinese: "在高速公路速度下通过地板感觉到的振动，且在所有挡位和空挡都存在，表明是传动轴相关问题。由于振动不随挡位选择而变化，噪音源在输出侧。应首先检查传动轴平衡、径向跳动和万向节状况，因为这些是最常见的原因。"
  },
  {
    id: 143,
    q: "A technician is checking a universal joint for wear. What is the correct method to assess U-joint condition?",
    options: [
      "A) Grasp the drive shaft near the U-joint and check for any play or looseness by attempting to rotate it",
      "B) Measure the drive shaft length with a tape measure",
      "C) Spin the drive shaft by hand and listen for rumbling noise",
      "D) Visually check the U-joint caps for paint marks"
    ],
    answer: 0,
    explanation: "The correct method to check a U-joint for wear is to grasp the drive shaft on each side of the U-joint and attempt to move it in all directions. Any detectable play or looseness in the joint indicates worn needle bearings or trunnions. The joint should move freely through its range of motion with zero play.",
    diagram: "",
    terms: ["universal_joint", "needle_bearing", "trunnion"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Universal_joint.png/640px-Universal_joint.png",
    youtube: "https://www.youtube.com/watch?v=RhPG2LB5tHY",
    youtubeTitle: "How to Check and Replace U-Joints",
    qChinese: "技师正在检查万向节是否磨损。评估万向节状况的正确方法是什么？",
    optionsChinese: [
      "A) 在万向节附近抓住传动轴，尝试转动以检查是否有间隙或松动",
      "B) 用卷尺测量传动轴长度",
      "C) 用手旋转传动轴并听是否有隆隆声",
      "D) 目视检查万向节端盖上的油漆标记"
    ],
    explanationChinese: "检查万向节磨损的正确方法是在万向节两侧抓住传动轴，尝试在各个方向移动。万向节中任何可检测到的间隙或松动都表明滚针轴承或十字轴销磨损。万向节应在其运动范围内自由移动且无任何间隙。"
  },
  {
    id: 144,
    q: "A two-piece drive shaft has a vibration that occurs at a specific speed. After replacing both U-joints, the vibration remains. What should be checked next?",
    options: [
      "A) Drive shaft phasing and center support bearing",
      "B) Transmission fluid level",
      "C) Rear axle fluid level",
      "D) Exhaust system hangers"
    ],
    answer: 0,
    explanation: "On a two-piece drive shaft, improper phasing (misalignment of the slip yoke and flange yoke splines) causes speed fluctuation vibrations. The center support bearing can also cause vibration if its rubber isolator is worn or the bearing is rough. Both should be checked after U-joint replacement does not resolve the issue.",
    diagram: "",
    terms: ["drive_shaft_phasing", "center_support_bearing", "two_piece_shaft"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Kardanwelle-1.jpg/640px-Kardanwelle-1.jpg",
    youtube: "https://www.youtube.com/watch?v=dqMZJLkfhWQ",
    youtubeTitle: "Two Piece Driveshaft Center Bearing Replacement",
    qChinese: "两段式传动轴在特定速度下有振动。更换两个万向节后，振动仍然存在。接下来应该检查什么？",
    optionsChinese: [
      "A) 传动轴相位和中间支撑轴承",
      "B) 变速器油液位",
      "C) 后桥油液位",
      "D) 排气系统吊架"
    ],
    explanationChinese: "在两段式传动轴上，不正确的相位（滑动叉和法兰叉花键的错位）会导致速度波动振动。如果中间支撑轴承的橡胶隔振器磨损或轴承粗糙，也会引起振动。在更换万向节未解决问题后，两者都应检查。"
  },
  {
    id: 145,
    q: "When replacing a U-joint, the technician notices the drive shaft yoke ears are spread apart slightly. What is the MOST appropriate action?",
    options: [
      "A) Replace the drive shaft yoke or entire drive shaft",
      "B) Use a C-clamp to squeeze the ears back together",
      "C) Install the new U-joint and use larger snap rings",
      "D) Apply thread-locking compound to the U-joint caps"
    ],
    answer: 0,
    explanation: "Spread yoke ears indicate the yoke has been permanently deformed, usually from operating with a worn U-joint for an extended period. Squeezing the ears together is not a reliable repair because the metal has yielded. The yoke or drive shaft must be replaced to ensure proper U-joint cap retention and prevent premature failure.",
    diagram: "",
    terms: ["yoke_ears", "drive_shaft_yoke", "U-joint_replacement"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Universal_joint.png/640px-Universal_joint.png",
    youtube: "https://www.youtube.com/watch?v=RhPG2LB5tHY",
    youtubeTitle: "U-Joint Replacement Tips and Inspection",
    qChinese: "更换万向节时，技师注意到传动轴叉耳略微张开。最适当的做法是什么？",
    optionsChinese: [
      "A) 更换传动轴叉或整个传动轴",
      "B) 使用C型夹将叉耳夹回原位",
      "C) 安装新万向节并使用更大的卡环",
      "D) 在万向节端盖上涂螺纹锁固剂"
    ],
    explanationChinese: "叉耳张开表明叉已永久变形，通常是由于长期使用磨损的万向节造成的。将叉耳夹回原位不是可靠的修理方法，因为金属已经屈服。必须更换叉或传动轴以确保万向节端盖的正确固定并防止过早失效。"
  },
  {
    id: 146,
    q: "A rear-wheel-drive vehicle produces a clunking noise when shifting from drive to reverse. The noise comes from under the vehicle. What is the MOST likely cause?",
    options: [
      "A) Worn U-joints with excessive play",
      "B) A cracked flexplate",
      "C) Worn rear brake pads",
      "D) A loose exhaust heat shield"
    ],
    answer: 0,
    explanation: "A clunking noise when changing between drive and reverse that originates from under the vehicle is typically caused by worn U-joints with excessive play. When the drive direction reverses, the slack in the worn U-joint is taken up suddenly, producing a distinct clunk. This can also indicate worn differential or transmission mount issues.",
    diagram: "",
    terms: ["U-joint_play", "driveline_clunk", "backlash"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Kardanwelle-1.jpg/640px-Kardanwelle-1.jpg",
    youtube: "https://www.youtube.com/watch?v=V3BlGkDsVUQ",
    youtubeTitle: "Diagnosing Driveline Clunk and U-Joint Wear",
    qChinese: "一辆后轮驱动车辆在从前进挡切换到倒挡时发出咔嗒声。噪音来自车底。最可能的原因是什么？",
    optionsChinese: [
      "A) 万向节磨损且间隙过大",
      "B) 柔性飞轮板开裂",
      "C) 后制动片磨损",
      "D) 排气隔热罩松动"
    ],
    explanationChinese: "在前进挡和倒挡之间切换时从车底发出的咔嗒声通常是由间隙过大的磨损万向节引起的。当驱动方向反转时，磨损万向节中的间隙被突然消除，产生明显的咔嗒声。这也可能表明差速器或变速器支架存在问题。"
  },
  {
    id: 147,
    q: "A front-wheel-drive vehicle has a humming noise that gets louder with speed and changes tone when swerving. The half shafts and CV joints have been inspected and are in good condition. What is the MOST likely cause?",
    options: [
      "A) A worn wheel bearing",
      "B) A worn inner CV joint",
      "C) Low transaxle fluid",
      "D) A worn tire"
    ],
    answer: 0,
    explanation: "A humming noise that increases with speed and changes tone when swerving or changing lanes is characteristic of a worn wheel bearing. Swerving shifts the vehicle weight and changes the load on the bearing, altering the noise. Since the half shafts and CV joints are confirmed good, the wheel bearing is the most likely source.",
    diagram: "",
    terms: ["wheel_bearing", "hub_assembly", "bearing_noise"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Wheel_bearing.jpg/640px-Wheel_bearing.jpg",
    youtube: "https://www.youtube.com/watch?v=bMGKMQLHYhI",
    youtubeTitle: "How to Diagnose a Bad Wheel Bearing",
    qChinese: "一辆前轮驱动车辆有随速度增加而变大的嗡嗡声，并在变道时音调改变。半轴和等速万向节已检查，状况良好。最可能的原因是什么？",
    optionsChinese: [
      "A) 车轮轴承磨损",
      "B) 内等速万向节磨损",
      "C) 变速驱动桥油液不足",
      "D) 轮胎磨损"
    ],
    explanationChinese: "随速度增加而变大且在变道时音调改变的嗡嗡声是车轮轴承磨损的特征。变道会转移车辆重量并改变轴承上的负载，从而改变噪音。既然半轴和等速万向节已确认状况良好，车轮轴承是最可能的噪音源。"
  },
  {
    id: 148,
    q: "A technician is replacing a half shaft on a front-wheel-drive vehicle. When reinstalling the half shaft into the transaxle, what must be verified?",
    options: [
      "A) The retaining clip on the inner joint has properly seated in the differential side gear groove",
      "B) The half shaft is longer than the original by at least 5mm",
      "C) The CV boot is filled with chassis grease instead of CV grease",
      "D) The axle nut is left hand-tight without torquing"
    ],
    answer: 0,
    explanation: "When reinstalling a half shaft into the transaxle, the retaining snap ring or clip on the inner CV joint spline must properly seat into the groove in the differential side gear. A gentle pull outward on the shaft should confirm it is locked in place. If not fully seated, the shaft can pull out during driving.",
    diagram: "",
    terms: ["retaining_clip", "snap_ring", "differential_side_gear"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Front_drive.jpg/640px-Front_drive.jpg",
    youtube: "https://www.youtube.com/watch?v=xJBiLp_6oVY",
    youtubeTitle: "Half Shaft Replacement on FWD Vehicle",
    qChinese: "技师正在更换前轮驱动车辆的半轴。将半轴重新安装到变速驱动桥时，必须验证什么？",
    optionsChinese: [
      "A) 内万向节上的固定卡环已正确卡入差速器半轴齿轮槽中",
      "B) 半轴比原件至少长5毫米",
      "C) 等速万向节防尘套中应填充底盘润滑脂而非等速万向节专用脂",
      "D) 轴螺母只需手紧而不需要按扭矩拧紧"
    ],
    explanationChinese: "将半轴重新安装到变速驱动桥时，内等速万向节花键上的固定卡环或卡簧必须正确卡入差速器半轴齿轮的槽中。轻轻向外拉动轴应确认其已锁定到位。如果未完全就位，轴在行驶过程中可能脱出。"
  },
  {
    id: 149,
    q: "A rear-wheel-drive vehicle with a slip yoke on the transmission output produces a squeaking noise when going over bumps. The noise is not present during acceleration. What is the MOST likely cause?",
    options: [
      "A) Dry or corroded slip yoke splines",
      "B) Worn rear shock absorbers",
      "C) A damaged transmission output bearing",
      "D) Worn rear leaf spring bushings"
    ],
    answer: 0,
    explanation: "The slip yoke allows the drive shaft to change length as the rear axle moves with suspension travel. When the splines on the slip yoke are dry or corroded, they bind and squeak as they slide in and out during suspension movement over bumps. Lubricating or replacing the slip yoke resolves the noise.",
    diagram: "",
    terms: ["slip_yoke", "spline_lubrication", "drive_shaft_length"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Kardanwelle-1.jpg/640px-Kardanwelle-1.jpg",
    youtube: "https://www.youtube.com/watch?v=VURK6LClMnk",
    youtubeTitle: "Drive Shaft Slip Yoke Service and Lubrication",
    qChinese: "一辆在变速器输出端有滑动叉的后轮驱动车辆在过颠簸时发出吱吱声。加速时没有噪音。最可能的原因是什么？",
    optionsChinese: [
      "A) 滑动叉花键干燥或腐蚀",
      "B) 后减震器磨损",
      "C) 变速器输出轴承损坏",
      "D) 后钢板弹簧衬套磨损"
    ],
    explanationChinese: "滑动叉允许传动轴在后桥随悬架行程移动时改变长度。当滑动叉上的花键干燥或腐蚀时，它们在过颠簸时随悬架运动滑进滑出时会卡滞并发出吱吱声。润滑或更换滑动叉可以消除噪音。"
  },
  {
    id: 150,
    q: "Technician A says drive shaft working angles should be checked after lifting a vehicle (lift kit installation). Technician B says unequal U-joint working angles can cause driveline vibrations. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Installing a lift kit changes the relationship between the transmission output and the rear axle pinion, altering the drive shaft U-joint working angles. If the operating angles at the front and rear U-joints are not equal and opposite, the speed fluctuations do not cancel, resulting in driveline vibration.",
    diagram: "",
    terms: ["working_angles", "driveline_vibration", "lift_kit"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Universal_joint.png/640px-Universal_joint.png",
    youtube: "https://www.youtube.com/watch?v=V3BlGkDsVUQ",
    youtubeTitle: "Driveshaft Angles and Vibration After Lift Kit",
    qChinese: "技师A说在抬高车辆（安装升高套件）后应检查传动轴工作角度。技师B说不等的万向节工作角度会导致传动系振动。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "两位技师都正确。安装升高套件改变了变速器输出端和后桥小齿轮之间的关系，改变了传动轴万向节的工作角度。如果前后万向节的工作角度不相等且不相反，速度波动不能相互抵消，导致传动系振动。"
  },
  {
    id: 151,
    q: "A vehicle produces a howling noise that increases with vehicle speed and is most noticeable during cruise conditions. Technician A says worn ring and pinion gears could be the cause. Technician B says an incorrect ring gear backlash setting could be the cause. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Worn ring and pinion gear teeth produce a howling noise that increases with speed due to improper tooth mesh. Incorrect backlash also changes the gear tooth contact pattern, causing similar howling. Both conditions affect the mesh relationship between the ring gear and pinion gear during cruise.",
    diagram: "",
    terms: ["ring_gear", "pinion_gear", "backlash"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Ring_and_Pinion.JPG/640px-Ring_and_Pinion.JPG",
    youtube: "https://www.youtube.com/watch?v=fLqCUFKlMcw",
    youtubeTitle: "Ring and Pinion Gear Setup Explained",
    qChinese: "一辆车在巡航时发出随车速增加而加大的嚎叫声。技师A说磨损的环齿轮和小齿轮可能是原因。技师B说环齿轮间隙设置不正确可能是原因。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "两位技师都是正确的。磨损的环齿轮和小齿轮齿面由于啮合不当会产生随车速增加的嚎叫声。不正确的齿隙同样会改变齿面接触图案，导致类似的嚎叫声。两种情况都会影响巡航时环齿轮和小齿轮之间的啮合关系。"
  },
  {
    id: 152,
    q: "A rear-wheel-drive vehicle makes a clunking noise from the rear axle when shifting from drive to reverse. What is the MOST likely cause?",
    options: [
      "A) Excessive ring gear backlash",
      "B) A worn pinion front bearing",
      "C) A cracked ring gear",
      "D) Low differential fluid level"
    ],
    answer: 0,
    explanation: "A clunking noise when changing direction (drive to reverse or vice versa) is the classic symptom of excessive ring gear backlash. The extra clearance between the ring and pinion gear teeth allows them to slam together when the load direction reverses, producing the clunk. This requires backlash adjustment or gear replacement.",
    diagram: "",
    terms: ["backlash", "ring_gear", "pinion_gear"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Ring_and_Pinion.JPG/640px-Ring_and_Pinion.JPG",
    youtube: "https://www.youtube.com/watch?v=fLqCUFKlMcw",
    youtubeTitle: "Ring and Pinion Backlash Adjustment",
    qChinese: "一辆后轮驱动车辆从前进挡切换到倒挡时，后桥发出咔嗒声。最可能的原因是什么？",
    optionsChinese: [
      "A) 环齿轮间隙过大",
      "B) 小齿轮前轴承磨损",
      "C) 环齿轮裂纹",
      "D) 差速器油液位低"
    ],
    explanationChinese: "在变换方向（从前进到倒车或反之）时发出咔嗒声是环齿轮间隙过大的典型症状。环齿轮和小齿轮齿面之间的额外间隙使它们在负载方向反转时相互撞击，产生咔嗒声。这需要调整齿隙或更换齿轮。"
  },
  {
    id: 153,
    q: "When performing a gear contact pattern check on a ring and pinion gear set, the contact pattern shows heavy contact on the toe of the gear tooth. Which adjustment should be made?",
    options: [
      "A) Move the ring gear closer to the pinion gear",
      "B) Move the ring gear away from the pinion gear",
      "C) Increase the pinion depth",
      "D) Decrease the pinion depth"
    ],
    answer: 1,
    explanation: "A toe-heavy contact pattern means the ring gear is too close to the pinion gear. Moving the ring gear away from the pinion shifts the contact pattern from the toe toward the heel. This is accomplished by adjusting the differential side bearing preload shims or adjuster nuts to reposition the ring gear.",
    diagram: "",
    terms: ["contact_pattern", "toe", "heel"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Crown_gear_and_pinion.png/640px-Crown_gear_and_pinion.png",
    youtube: "https://www.youtube.com/watch?v=0MQfaEePa7k",
    youtubeTitle: "How to Set Up Ring and Pinion Gear Contact Pattern",
    qChinese: "在对环齿轮和小齿轮组进行齿面接触图案检查时，接触图案显示齿面趾部有重度接触。应该进行哪项调整？",
    optionsChinese: [
      "A) 将环齿轮向小齿轮方向移动",
      "B) 将环齿轮远离小齿轮方向移动",
      "C) 增加小齿轮深度",
      "D) 减少小齿轮深度"
    ],
    explanationChinese: "趾部重度接触图案表明环齿轮离小齿轮太近。将环齿轮远离小齿轮可以使接触图案从趾部向跟部移动。这通过调整差速器侧轴承预紧垫片或调节螺母来重新定位环齿轮来实现。"
  },
  {
    id: 154,
    q: "A gear contact pattern check reveals that the pattern is too deep (toward the root of the tooth) on the drive side. What is the correct corrective action?",
    options: [
      "A) Move the pinion gear closer to the ring gear centerline",
      "B) Move the pinion gear away from the ring gear centerline",
      "C) Move the ring gear toward the pinion",
      "D) Increase ring gear backlash only"
    ],
    answer: 1,
    explanation: "A deep contact pattern (toward the root or flank) indicates the pinion is set too close to the ring gear centerline. The corrective action is to move the pinion away from the ring gear centerline by using a thinner pinion depth shim. This shifts the contact pattern toward the face (top) of the tooth.",
    diagram: "",
    terms: ["pinion_depth", "contact_pattern", "shim"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Crown_gear_and_pinion.png/640px-Crown_gear_and_pinion.png",
    youtube: "https://www.youtube.com/watch?v=0MQfaEePa7k",
    youtubeTitle: "Pinion Depth and Contact Pattern Adjustment",
    qChinese: "齿面接触图案检查显示驱动侧的图案过深（朝向齿根）。正确的纠正措施是什么？",
    optionsChinese: [
      "A) 将小齿轮向环齿轮中心线方向移动",
      "B) 将小齿轮远离环齿轮中心线方向移动",
      "C) 将环齿轮向小齿轮方向移动",
      "D) 仅增加环齿轮间隙"
    ],
    explanationChinese: "深度接触图案（朝向齿根或齿腹）表示小齿轮设置得离环齿轮中心线太近。纠正措施是使用更薄的小齿轮深度垫片将小齿轮远离环齿轮中心线移动。这会使接触图案向齿面（顶部）移动。"
  },
  {
    id: 155,
    q: "A technician is measuring ring gear backlash with a dial indicator. The specification calls for 0.006 to 0.010 inches. The reading is 0.014 inches. What should the technician do?",
    options: [
      "A) Move the ring gear closer to the pinion gear",
      "B) Move the ring gear away from the pinion gear",
      "C) Replace the pinion depth shim with a thicker one",
      "D) Replace the ring and pinion gear set"
    ],
    answer: 0,
    explanation: "Backlash of 0.014 inches exceeds the specification of 0.006 to 0.010 inches. To reduce backlash, the ring gear must be moved closer to the pinion gear. This is done by transferring shim material from one side of the differential case to the other, moving the ring gear toward the pinion.",
    diagram: "",
    terms: ["backlash", "dial_indicator", "differential_case"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Ring_and_Pinion.JPG/640px-Ring_and_Pinion.JPG",
    youtube: "https://www.youtube.com/watch?v=fLqCUFKlMcw",
    youtubeTitle: "How to Measure Ring Gear Backlash",
    qChinese: "技师正在使用百分表测量环齿轮间隙。规格要求为0.006至0.010英寸。读数为0.014英寸。技师应该怎么做？",
    optionsChinese: [
      "A) 将环齿轮向小齿轮方向移动",
      "B) 将环齿轮远离小齿轮方向移动",
      "C) 用更厚的小齿轮深度垫片替换",
      "D) 更换环齿轮和小齿轮组"
    ],
    explanationChinese: "0.014英寸的间隙超出了0.006至0.010英寸的规格。要减少间隙，必须将环齿轮向小齿轮方向移动。这通过将垫片材料从差速器壳体一侧转移到另一侧来完成，使环齿轮向小齿轮移动。"
  },
  {
    id: 156,
    q: "A vehicle has a constant whining noise from the rear axle that changes pitch with vehicle speed but does NOT change during turns. What is the MOST likely cause?",
    options: [
      "A) A worn differential side gear",
      "B) A worn pinion bearing",
      "C) A worn spider gear",
      "D) A worn axle shaft bearing"
    ],
    answer: 1,
    explanation: "A constant whine that changes pitch with vehicle speed but is unaffected by turns points to the pinion bearing. Pinion bearings rotate at driveshaft speed and are always loaded regardless of turning. Differential components like side gears and spider gears would produce noise changes during turns due to speed differences.",
    diagram: "",
    terms: ["pinion_bearing", "differential", "whining_noise"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Differential_%28Manual%29.jpg/640px-Differential_%28Manual%29.jpg",
    youtube: "https://www.youtube.com/watch?v=yYAw79386WI",
    youtubeTitle: "Diagnosing Rear Axle Bearing Noise",
    qChinese: "一辆车后桥发出持续的呜呜声，音调随车速变化，但在转弯时不变。最可能的原因是什么？",
    optionsChinese: [
      "A) 差速器侧齿轮磨损",
      "B) 小齿轮轴承磨损",
      "C) 行星齿轮磨损",
      "D) 半轴轴承磨损"
    ],
    explanationChinese: "持续的呜呜声随车速变化但不受转弯影响，这指向小齿轮轴承。小齿轮轴承以传动轴速度旋转，无论是否转弯都始终承受负载。差速器组件如侧齿轮和行星齿轮在转弯时由于速度差异会产生噪音变化。"
  },
  {
    id: 157,
    q: "A rear-wheel-drive vehicle makes a knocking noise from the differential area only during tight turns at low speed. Technician A says worn spider gears could be the cause. Technician B says worn differential side gears could be the cause. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. During tight turns, the differential spider gears and side gears must accommodate the speed difference between the inner and outer wheels. Worn spider gears or side gears develop excessive clearance, causing knocking as the gears mesh under these differential speed conditions.",
    diagram: "",
    terms: ["spider_gear", "side_gear", "differential_case"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Differential_free.png/640px-Differential_free.png",
    youtube: "https://www.youtube.com/watch?v=SOgoejxzF8c",
    youtubeTitle: "How a Differential Works",
    qChinese: "一辆后轮驱动车辆在低速急转弯时差速器区域发出敲击声。技师A说磨损的行星齿轮可能是原因。技师B说磨损的差速器侧齿轮可能是原因。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "两位技师都是正确的。在急转弯时，差速器行星齿轮和侧齿轮必须适应内外车轮之间的速度差异。磨损的行星齿轮或侧齿轮会产生过大的间隙，在这些差速条件下齿轮啮合时导致敲击声。"
  },
  {
    id: 158,
    q: "When setting up a new ring and pinion gear set, the pinion depth shim is selected based on which of the following?",
    options: [
      "A) The ring gear backlash measurement",
      "B) The old pinion marking compared to the new pinion marking",
      "C) The ring gear runout reading",
      "D) The differential bearing preload specification"
    ],
    answer: 1,
    explanation: "Pinion depth shim selection is determined by comparing the variance markings on the old and new pinion gears. Each pinion is marked with a plus or minus value indicating its deviation from nominal. The technician calculates the difference between old and new markings to determine the correct shim thickness.",
    diagram: "",
    terms: ["pinion_depth", "shim", "variance_marking"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Ring_and_Pinion.JPG/640px-Ring_and_Pinion.JPG",
    youtube: "https://www.youtube.com/watch?v=0MQfaEePa7k",
    youtubeTitle: "Setting Pinion Depth with Shims",
    qChinese: "在安装新的环齿轮和小齿轮组时，小齿轮深度垫片的选择基于以下哪项？",
    optionsChinese: [
      "A) 环齿轮间隙测量值",
      "B) 旧小齿轮标记与新小齿轮标记的比较",
      "C) 环齿轮跳动读数",
      "D) 差速器轴承预紧力规格"
    ],
    explanationChinese: "小齿轮深度垫片的选择通过比较旧小齿轮和新小齿轮上的偏差标记来确定。每个小齿轮都标有正或负值，表示其与标称值的偏差。技师计算新旧标记之间的差值来确定正确的垫片厚度。"
  },
  {
    id: 159,
    q: "A technician is checking ring gear runout. The dial indicator shows 0.005 inches of runout. The specification allows a maximum of 0.003 inches. What should the technician do FIRST?",
    options: [
      "A) Replace the ring gear",
      "B) Remove the ring gear and check the differential case flange for runout",
      "C) Replace the differential case",
      "D) Add shims behind the ring gear"
    ],
    answer: 1,
    explanation: "Before replacing the ring gear, the technician should first remove it and check the differential case mounting flange for runout. Excessive ring gear runout can be caused by a warped case flange, debris between the ring gear and case, or improperly torqued ring gear bolts rather than a defective ring gear.",
    diagram: "",
    terms: ["ring_gear_runout", "differential_case", "dial_indicator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Differential_free.png/640px-Differential_free.png",
    youtube: "https://www.youtube.com/watch?v=fLqCUFKlMcw",
    youtubeTitle: "Checking Ring Gear Runout",
    qChinese: "技师正在检查环齿轮跳动。百分表显示0.005英寸的跳动。规格允许最大0.003英寸。技师应该首先做什么？",
    optionsChinese: [
      "A) 更换环齿轮",
      "B) 拆下环齿轮并检查差速器壳体法兰的跳动",
      "C) 更换差速器壳体",
      "D) 在环齿轮后面添加垫片"
    ],
    explanationChinese: "在更换环齿轮之前，技师应首先拆下环齿轮并检查差速器壳体安装法兰的跳动。过大的环齿轮跳动可能是由于壳体法兰变形、环齿轮与壳体之间有杂物或环齿轮螺栓未正确紧固，而非环齿轮本身有缺陷。"
  },
  {
    id: 160,
    q: "Which of the following describes the correct procedure for setting differential side bearing preload on a shim-type differential?",
    options: [
      "A) Install shims until there is zero end play, then add an additional 0.015 inches of shim",
      "B) Tighten the bearing caps until the ring gear cannot be rotated",
      "C) Install shims until the pinion gear has zero backlash with the ring gear",
      "D) Tighten the bearing caps until the dial indicator reads zero"
    ],
    answer: 0,
    explanation: "For shim-type differentials, side bearing preload is set by first installing shims to achieve zero end play (no looseness), then adding a specified additional shim thickness (typically 0.010 to 0.015 inches) to create the proper preload. This ensures the bearings are loaded correctly for long service life.",
    diagram: "",
    terms: ["side_bearing_preload", "shim", "end_play"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Differential_%28Manual%29.jpg/640px-Differential_%28Manual%29.jpg",
    youtube: "https://www.youtube.com/watch?v=SOgoejxzF8c",
    youtubeTitle: "Differential Bearing Preload Setup",
    qChinese: "以下哪项描述了垫片式差速器侧轴承预紧力的正确设置程序？",
    optionsChinese: [
      "A) 安装垫片直到零端隙，然后再增加0.015英寸的垫片",
      "B) 拧紧轴承盖直到环齿轮无法旋转",
      "C) 安装垫片直到小齿轮与环齿轮之间零间隙",
      "D) 拧紧轴承盖直到百分表读数为零"
    ],
    explanationChinese: "对于垫片式差速器，侧轴承预紧力通过先安装垫片达到零端隙（无松动），然后再增加规定的额外垫片厚度（通常0.010至0.015英寸）来建立适当的预紧力。这确保轴承正确承载以获得长久的使用寿命。"
  },
  {
    id: 161,
    q: "A limited-slip differential equipped vehicle chatters and shudders during low-speed turns in a parking lot. What is the MOST likely cause?",
    options: [
      "A) Incorrect or depleted limited-slip additive in the gear oil",
      "B) A worn pinion bearing",
      "C) Excessive ring gear backlash",
      "D) A bent axle shaft"
    ],
    answer: 0,
    explanation: "Chatter during low-speed turns is the classic symptom of a limited-slip differential that lacks proper friction modifier additive in the gear oil. The clutch packs in the limited-slip unit require special friction modifier to engage smoothly. Without it, the clutches grab and release rapidly causing chatter.",
    diagram: "",
    terms: ["limited_slip_differential", "friction_modifier", "clutch_pack"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Limited_slip_differential.jpg/640px-Limited_slip_differential.jpg",
    youtube: "https://www.youtube.com/watch?v=WeLm7wHvdxQ",
    youtubeTitle: "Limited Slip Differential Explained",
    qChinese: "一辆装有限滑差速器的车辆在停车场低速转弯时出现颤振和抖动。最可能的原因是什么？",
    optionsChinese: [
      "A) 齿轮油中限滑添加剂不正确或已耗尽",
      "B) 小齿轮轴承磨损",
      "C) 环齿轮间隙过大",
      "D) 半轴弯曲"
    ],
    explanationChinese: "低速转弯时的颤振是限滑差速器齿轮油缺少适当摩擦改进剂的典型症状。限滑装置中的离合器片需要特殊的摩擦改进剂才能平稳接合。没有它，离合器会快速抓紧和释放，导致颤振。"
  },
  {
    id: 162,
    q: "Technician A says a limited-slip differential can be identified by rotating one rear wheel with the vehicle on a jack stand; if the opposite wheel turns in the same direction, it is a limited-slip unit. Technician B says the axle identification tag is the most reliable way to identify a limited-slip differential. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. With a limited-slip differential, rotating one wheel causes the other to turn in the same direction due to the clutch packs or cone clutches. On an open differential, the opposite wheel turns the other direction. However, the axle tag provides the most reliable factory identification.",
    diagram: "",
    terms: ["limited_slip_differential", "axle_tag", "identification"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Limited_slip_differential.jpg/640px-Limited_slip_differential.jpg",
    youtube: "https://www.youtube.com/watch?v=WeLm7wHvdxQ",
    youtubeTitle: "How to Identify a Limited Slip Differential",
    qChinese: "技师A说可以通过在千斤顶支撑下旋转一个后轮来识别限滑差速器；如果对侧车轮朝同一方向转动，则为限滑装置。技师B说车桥识别标签是识别限滑差速器最可靠的方式。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "两位技师都是正确的。对于限滑差速器，旋转一个车轮会导致另一个车轮朝同一方向转动，这是由于离合器片或锥形离合器的作用。在开放式差速器中，对侧车轮朝相反方向转动。然而，车桥标签提供最可靠的工厂识别。"
  },
  {
    id: 163,
    q: "During a limited-slip differential clutch pack inspection, a technician measures the clutch plates and finds them within specification. However, the differential still chatters. What should the technician check NEXT?",
    options: [
      "A) The preload spring tension",
      "B) The ring gear backlash",
      "C) The pinion bearing preload",
      "D) The axle shaft end play"
    ],
    answer: 0,
    explanation: "If the clutch plates are within specification but chatter persists, the preload spring (Belleville spring or coil spring) should be checked next. These springs apply initial clamping force to the clutch pack. Weak or collapsed springs reduce the clamping force, causing the clutch pack to slip and chatter during turns.",
    diagram: "",
    terms: ["preload_spring", "clutch_pack", "Belleville_spring"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Limited_slip_differential.jpg/640px-Limited_slip_differential.jpg",
    youtube: "https://www.youtube.com/watch?v=WeLm7wHvdxQ",
    youtubeTitle: "Limited Slip Differential Clutch Pack Service",
    qChinese: "在限滑差速器离合器片检查过程中，技师测量离合器片发现在规格范围内。然而差速器仍然颤振。技师下一步应该检查什么？",
    optionsChinese: [
      "A) 预紧弹簧张力",
      "B) 环齿轮间隙",
      "C) 小齿轮轴承预紧力",
      "D) 半轴端隙"
    ],
    explanationChinese: "如果离合器片在规格范围内但颤振仍然存在，应接下来检查预紧弹簧（碟形弹簧或螺旋弹簧）。这些弹簧对离合器片施加初始夹紧力。弹力减弱或塌陷的弹簧会降低夹紧力，导致离合器片在转弯时打滑和颤振。"
  },
  {
    id: 164,
    q: "A vehicle with a C-lock (C-clip) type rear axle has a leaking axle seal. What must be removed FIRST to replace the axle seal?",
    options: [
      "A) The differential cover and C-lock retaining the axle shaft",
      "B) The axle bearing retainer plate bolts",
      "C) The wheel bearing and hub assembly",
      "D) The brake drum and backing plate"
    ],
    answer: 0,
    explanation: "On C-lock type axles, the axle shaft is retained by a C-shaped clip inside the differential. To remove the axle shaft for seal replacement, the differential cover must be removed first, then the pinion shaft lock bolt removed, the pinion shaft slid out, and the C-lock removed from the axle shaft.",
    diagram: "",
    terms: ["C-lock", "axle_shaft", "axle_seal"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Differential_%28Manual%29.jpg/640px-Differential_%28Manual%29.jpg",
    youtube: "https://www.youtube.com/watch?v=TboLUWqVoFc",
    youtubeTitle: "C-Clip Axle Shaft Removal and Seal Replacement",
    qChinese: "一辆配有C型卡环后桥的车辆轴密封件泄漏。要更换轴密封件，首先必须拆除什么？",
    optionsChinese: [
      "A) 差速器盖和固定半轴的C型卡环",
      "B) 半轴轴承固定板螺栓",
      "C) 车轮轴承和轮毂总成",
      "D) 制动鼓和制动底板"
    ],
    explanationChinese: "在C型卡环式车桥上，半轴由差速器内部的C形卡环固定。要拆下半轴以更换密封件，必须首先拆下差速器盖，然后拆下行星齿轮轴锁定螺栓，滑出行星齿轮轴，最后从半轴上取下C型卡环。"
  },
  {
    id: 165,
    q: "A technician discovers dark gray metallic paste in the rear differential gear oil during a routine service. What does this indicate?",
    options: [
      "A) Normal wear and the fluid should simply be replaced",
      "B) Severe internal gear or bearing wear requiring further inspection",
      "C) The wrong type of gear oil was used",
      "D) Water contamination in the differential"
    ],
    answer: 1,
    explanation: "Dark gray metallic paste in the differential fluid indicates severe internal wear of gears or bearings. Fine metal particles mixed with gear oil form this paste. While some minor metallic residue is normal, a paste-like consistency indicates advanced component deterioration that requires disassembly and inspection of all internal components.",
    diagram: "",
    terms: ["gear_oil", "metallic_contamination", "bearing_wear"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Differential_%28Manual%29.jpg/640px-Differential_%28Manual%29.jpg",
    youtube: "https://www.youtube.com/watch?v=yYAw79386WI",
    youtubeTitle: "Differential Fluid Inspection and Service",
    qChinese: "技师在例行保养中发现后差速器齿轮油中有深灰色金属糊状物。这表明什么？",
    optionsChinese: [
      "A) 正常磨损，只需更换油液",
      "B) 严重的内部齿轮或轴承磨损，需要进一步检查",
      "C) 使用了错误类型的齿轮油",
      "D) 差速器中有水污染"
    ],
    explanationChinese: "差速器油液中的深灰色金属糊状物表明齿轮或轴承严重内部磨损。细小的金属颗粒与齿轮油混合形成这种糊状物。虽然少量金属残留是正常的，但糊状稠度表明组件严重劣化，需要拆卸并检查所有内部组件。"
  },
  {
    id: 166,
    q: "A rear axle shaft on a semi-floating axle design supports which of the following loads?",
    options: [
      "A) Only the driving torque",
      "B) Both the vehicle weight and driving torque",
      "C) Only the vehicle weight",
      "D) Neither vehicle weight nor driving torque"
    ],
    answer: 1,
    explanation: "In a semi-floating axle design, the axle shaft supports both the vehicle weight and the driving torque. The axle bearing is located between the axle shaft and the axle housing, meaning the shaft carries bending loads from vehicle weight and torsional loads from driving force. This is the most common design in passenger vehicles.",
    diagram: "",
    terms: ["semi_floating_axle", "axle_shaft", "axle_bearing"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Differential_%28Manual%29.jpg/640px-Differential_%28Manual%29.jpg",
    youtube: "https://www.youtube.com/watch?v=SOgoejxzF8c",
    youtubeTitle: "Semi-Floating vs Full-Floating Axle Design",
    qChinese: "半浮式车桥设计中的后半轴承受以下哪些负载？",
    optionsChinese: [
      "A) 仅驱动扭矩",
      "B) 车辆重量和驱动扭矩",
      "C) 仅车辆重量",
      "D) 既不承受车辆重量也不承受驱动扭矩"
    ],
    explanationChinese: "在半浮式车桥设计中，半轴同时承受车辆重量和驱动扭矩。轴承位于半轴和桥壳之间，这意味着半轴承受来自车辆重量的弯曲载荷和来自驱动力的扭转载荷。这是乘用车中最常见的设计。"
  },
  {
    id: 167,
    q: "What is the advantage of a full-floating rear axle design compared to a semi-floating design?",
    options: [
      "A) It is less expensive to manufacture",
      "B) The axle shaft can be removed without jacking up the vehicle",
      "C) If the axle shaft breaks, the wheel remains attached to the vehicle",
      "D) It does not require axle bearings"
    ],
    answer: 2,
    explanation: "In a full-floating axle design, the wheel hub is supported by bearings mounted on the outside of the axle housing. The axle shaft only transmits driving torque. If the axle shaft breaks, the wheel remains securely attached to the housing by its own bearings, maintaining vehicle control. This is common on heavy-duty trucks.",
    diagram: "",
    terms: ["full_floating_axle", "hub_bearing", "axle_housing"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Differential_%28Manual%29.jpg/640px-Differential_%28Manual%29.jpg",
    youtube: "https://www.youtube.com/watch?v=SOgoejxzF8c",
    youtubeTitle: "Full-Floating Axle Advantages",
    qChinese: "与半浮式设计相比，全浮式后桥设计的优势是什么？",
    optionsChinese: [
      "A) 制造成本更低",
      "B) 无需举升车辆即可拆卸半轴",
      "C) 如果半轴断裂，车轮仍然连接在车辆上",
      "D) 不需要轴承"
    ],
    explanationChinese: "在全浮式车桥设计中，轮毂由安装在桥壳外部的轴承支撑。半轴仅传递驱动扭矩。如果半轴断裂，车轮仍然通过自身的轴承牢固地连接在桥壳上，保持车辆控制。这在重型卡车中很常见。"
  },
  {
    id: 168,
    q: "A rear-wheel-drive vehicle has a vibration that occurs at highway speed and is felt through the floor. The vibration disappears when the vehicle is coasting in neutral. What is the MOST likely cause?",
    options: [
      "A) An unbalanced rear tire",
      "B) A worn U-joint on the driveshaft",
      "C) A worn pinion bearing",
      "D) A damaged ring gear tooth"
    ],
    answer: 2,
    explanation: "A vibration felt through the floor at highway speed that disappears when coasting in neutral suggests a pinion bearing issue. When in neutral, the driveshaft stops transmitting torque and the pinion bearing load changes. A worn pinion bearing vibrates under load but quiets when unloaded, unlike tire balance issues which persist regardless of load.",
    diagram: "",
    terms: ["pinion_bearing", "vibration", "diagnosis"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Ring_and_Pinion.JPG/640px-Ring_and_Pinion.JPG",
    youtube: "https://www.youtube.com/watch?v=yYAw79386WI",
    youtubeTitle: "Diagnosing Rear Axle Vibration",
    qChinese: "一辆后轮驱动车辆在高速公路速度下出现通过车厢地板感觉到的振动。当车辆空挡滑行时振动消失。最可能的原因是什么？",
    optionsChinese: [
      "A) 后轮胎不平衡",
      "B) 传动轴万向节磨损",
      "C) 小齿轮轴承磨损",
      "D) 环齿轮齿损坏"
    ],
    explanationChinese: "在高速公路速度下通过地板感觉到的振动在空挡滑行时消失，这暗示小齿轮轴承问题。在空挡时，传动轴停止传递扭矩，小齿轮轴承负载发生变化。磨损的小齿轮轴承在负载下振动，但在卸载时安静，不像轮胎平衡问题无论负载如何都会持续。"
  },
  {
    id: 169,
    q: "A technician is replacing a pinion seal on a rear axle. After removing the pinion nut, the technician should mark the position of the pinion flange to the pinion shaft. Why is this important?",
    options: [
      "A) To ensure the driveshaft is properly phased",
      "B) To maintain the correct pinion bearing preload when reassembling",
      "C) To align the ring gear contact pattern",
      "D) To prevent the seal from leaking"
    ],
    answer: 1,
    explanation: "Marking the pinion flange position relative to the pinion shaft is critical for maintaining proper pinion bearing preload during reassembly. The crush sleeve or collapsible spacer sets the preload when the nut is torqued. Reinstalling the flange to its original position and torquing the nut to the same depth preserves the bearing preload.",
    diagram: "",
    terms: ["pinion_seal", "pinion_flange", "bearing_preload"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Ring_and_Pinion.JPG/640px-Ring_and_Pinion.JPG",
    youtube: "https://www.youtube.com/watch?v=TboLUWqVoFc",
    youtubeTitle: "Pinion Seal Replacement Procedure",
    qChinese: "技师正在更换后桥小齿轮密封件。拆下小齿轮螺母后，技师应标记小齿轮法兰与小齿轮轴的位置。为什么这很重要？",
    optionsChinese: [
      "A) 确保传动轴正确对相",
      "B) 在重新组装时保持正确的小齿轮轴承预紧力",
      "C) 对齐环齿轮接触图案",
      "D) 防止密封件泄漏"
    ],
    explanationChinese: "标记小齿轮法兰相对于小齿轮轴的位置对于在重新组装时保持正确的小齿轮轴承预紧力至关重要。挤压套筒或可折叠垫圈在螺母紧固时设定预紧力。将法兰安装回原始位置并将螺母紧固到相同深度可保持轴承预紧力。"
  },
  {
    id: 170,
    q: "A crush sleeve (collapsible spacer) is used in a rear axle assembly to do which of the following?",
    options: [
      "A) Set the ring gear backlash",
      "B) Set the pinion bearing preload",
      "C) Set the side bearing preload",
      "D) Set the axle shaft end play"
    ],
    answer: 1,
    explanation: "The crush sleeve, also called a collapsible spacer, is positioned between the front and rear pinion bearings. When the pinion nut is tightened, the sleeve is crushed to a specific length, which sets the correct preload on the pinion bearings. The pinion nut must be tightened carefully to achieve the specified preload torque.",
    diagram: "",
    terms: ["crush_sleeve", "collapsible_spacer", "pinion_bearing_preload"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Ring_and_Pinion.JPG/640px-Ring_and_Pinion.JPG",
    youtube: "https://www.youtube.com/watch?v=fLqCUFKlMcw",
    youtubeTitle: "Crush Sleeve and Pinion Bearing Preload",
    qChinese: "后桥总成中使用挤压套筒（可折叠垫圈）来完成以下哪项？",
    optionsChinese: [
      "A) 设定环齿轮间隙",
      "B) 设定小齿轮轴承预紧力",
      "C) 设定侧轴承预紧力",
      "D) 设定半轴端隙"
    ],
    explanationChinese: "挤压套筒，也称为可折叠垫圈，位于前后小齿轮轴承之间。当拧紧小齿轮螺母时，套筒被挤压到特定长度，从而设定小齿轮轴承的正确预紧力。必须小心拧紧小齿轮螺母以达到规定的预紧力扭矩。"
  },
  {
    id: 171,
    q: "A vehicle has gear oil leaking from the axle vent tube. Technician A says overfilling the differential could cause this. Technician B says a plugged vent could cause internal pressure buildup leading to leaking. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Overfilling the differential raises the fluid level above the vent, allowing gear oil to escape when the fluid expands from heat. A plugged vent traps expanding air and fluid vapors inside the housing, building pressure that forces oil out through seals or past the vent restriction itself.",
    diagram: "",
    terms: ["axle_vent", "gear_oil_leak", "differential_housing"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Differential_%28Manual%29.jpg/640px-Differential_%28Manual%29.jpg",
    youtube: "https://www.youtube.com/watch?v=yYAw79386WI",
    youtubeTitle: "Differential Vent and Leak Diagnosis",
    qChinese: "一辆车的齿轮油从车桥通气管泄漏。技师A说差速器过度加注可能导致这种情况。技师B说通气管堵塞可能导致内部压力积聚而泄漏。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "两位技师都是正确的。差速器过度加注会使油液液位高于通气口，当油液因受热膨胀时齿轮油会溢出。通气管堵塞会将膨胀的空气和油液蒸汽困在壳体内，积聚的压力会迫使油液通过密封件或通气管限制处泄漏出来。"
  },
  {
    id: 172,
    q: "A technician is replacing a rear axle bearing on a retainer plate-type (non-C-lock) axle. The bearing is pressed onto the axle shaft. What is the correct removal method?",
    options: [
      "A) Use a slide hammer to pull the bearing off the shaft",
      "B) Use a hydraulic press or bearing splitter to remove the bearing",
      "C) Heat the bearing with a torch and slide it off",
      "D) Use a chisel to split the bearing inner race"
    ],
    answer: 1,
    explanation: "Press-fit axle bearings must be removed using a hydraulic press or bearing splitter tool. The bearing is interference-fit onto the shaft and cannot be safely removed by hammering or heating. A bearing splitter grips behind the inner race, and the press pushes the shaft through, preserving both the shaft and the ability to inspect the bearing.",
    diagram: "",
    terms: ["axle_bearing", "press_fit", "bearing_splitter"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Differential_%28Manual%29.jpg/640px-Differential_%28Manual%29.jpg",
    youtube: "https://www.youtube.com/watch?v=TboLUWqVoFc",
    youtubeTitle: "Rear Axle Bearing Removal and Installation",
    qChinese: "技师正在更换固定板式（非C型卡环）车桥的后轴承。轴承压装在半轴上。正确的拆卸方法是什么？",
    optionsChinese: [
      "A) 使用滑锤将轴承从轴上拉出",
      "B) 使用液压机或轴承分离器拆卸轴承",
      "C) 用火焰加热轴承然后滑出",
      "D) 使用凿子劈开轴承内圈"
    ],
    explanationChinese: "压装式半轴轴承必须使用液压机或轴承分离器工具拆卸。轴承与轴是过盈配合，不能通过敲击或加热安全拆卸。轴承分离器夹在内圈后面，压力机将轴推过，既保护了轴又能检查轴承。"
  },
  {
    id: 173,
    q: "When installing a new axle seal, which of the following is the correct procedure?",
    options: [
      "A) Drive the seal in with a hammer and punch until it is flush with the housing",
      "B) Apply RTV sealant to the seal outer diameter and press it in with a seal installer",
      "C) Lubricate the seal lip and use a properly sized seal driver to install it to the correct depth",
      "D) Press the seal in dry to ensure a tight fit"
    ],
    answer: 2,
    explanation: "The correct axle seal installation procedure requires lubricating the seal lip with gear oil or assembly lube to prevent dry startup damage, then using a properly sized seal driver to press the seal squarely into the housing bore to the correct depth. An improperly driven seal can be cocked, causing immediate leakage.",
    diagram: "",
    terms: ["axle_seal", "seal_driver", "installation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Differential_%28Manual%29.jpg/640px-Differential_%28Manual%29.jpg",
    youtube: "https://www.youtube.com/watch?v=TboLUWqVoFc",
    youtubeTitle: "Proper Axle Seal Installation Technique",
    qChinese: "安装新的轴密封件时，以下哪项是正确的程序？",
    optionsChinese: [
      "A) 用锤子和冲头将密封件敲入直到与壳体齐平",
      "B) 在密封件外径涂抹RTV密封胶，然后用密封件安装工具压入",
      "C) 润滑密封件唇口，使用适当尺寸的密封件驱动器安装到正确深度",
      "D) 干燥压入密封件以确保紧密配合"
    ],
    explanationChinese: "正确的轴密封件安装程序要求用齿轮油或装配润滑剂润滑密封件唇口，以防止干启动损坏，然后使用适当尺寸的密封件驱动器将密封件方正地压入壳体孔到正确深度。安装不正的密封件可能会歪斜，导致立即泄漏。"
  },
  {
    id: 174,
    q: "A vehicle has a humming noise from the rear that gets louder during right turns and quieter during left turns. What is the MOST likely cause?",
    options: [
      "A) The left rear axle bearing is worn",
      "B) The right rear axle bearing is worn",
      "C) The pinion bearing is worn",
      "D) The ring gear is damaged"
    ],
    answer: 0,
    explanation: "A humming noise that gets louder during right turns indicates the left rear axle bearing is worn. During a right turn, more vehicle weight transfers to the left side, increasing the load on the left rear bearing. This additional load on a worn bearing amplifies the noise. The noise decreases during left turns as weight shifts away.",
    diagram: "",
    terms: ["axle_bearing", "weight_transfer", "noise_diagnosis"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Differential_%28Manual%29.jpg/640px-Differential_%28Manual%29.jpg",
    youtube: "https://www.youtube.com/watch?v=yYAw79386WI",
    youtubeTitle: "Diagnosing Axle Bearing Noise by Turning",
    qChinese: "一辆车后部发出嗡嗡声，在右转弯时变大，在左转弯时变小。最可能的原因是什么？",
    optionsChinese: [
      "A) 左后半轴轴承磨损",
      "B) 右后半轴轴承磨损",
      "C) 小齿轮轴承磨损",
      "D) 环齿轮损坏"
    ],
    explanationChinese: "在右转弯时变大的嗡嗡声表明左后半轴轴承磨损。在右转弯时，更多的车辆重量转移到左侧，增加了左后轴承的负载。这种额外负载在磨损的轴承上放大了噪音。在左转弯时，重量转移开，噪音减小。"
  },
  {
    id: 175,
    q: "A technician notices that the rear axle housing is bent. Technician A says this can cause premature axle bearing failure. Technician B says this can cause the axle shaft to break. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. A bent axle housing misaligns the axle shaft, placing abnormal side loads on the axle bearings which leads to premature failure. The misalignment also creates cyclic bending stress on the axle shaft as it rotates, which can lead to fatigue cracking and eventual shaft breakage under continued operation.",
    diagram: "",
    terms: ["axle_housing", "axle_bearing", "axle_shaft"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Differential_%28Manual%29.jpg/640px-Differential_%28Manual%29.jpg",
    youtube: "https://www.youtube.com/watch?v=SOgoejxzF8c",
    youtubeTitle: "Rear Axle Housing Inspection",
    qChinese: "技师注意到后桥壳体弯曲。技师A说这可能导致半轴轴承过早失效。技师B说这可能导致半轴断裂。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "两位技师都是正确的。弯曲的桥壳使半轴不对中，对半轴轴承施加异常的侧向载荷，导致过早失效。不对中还会在半轴旋转时产生循环弯曲应力，这可能导致疲劳裂纹并在持续运行下最终导致半轴断裂。"
  },
  {
    id: 176,
    q: "A vehicle with a part-time four-wheel drive system makes a grinding noise when 4WD is engaged on dry pavement. Technician A says this is normal because part-time systems lack a center differential. Technician B says the transfer case synchronizer is worn. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Technician A is correct. Part-time 4WD systems do not have a center differential, so driving on dry pavement causes drivetrain binding and grinding noises. The front and rear axles are locked together and must turn at the same speed, which causes windup on high-traction surfaces. This is normal behavior, not a fault.",
    diagram: "",
    terms: ["transfer_case", "center_differential", "drivetrain_binding"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Transfer_case_-_cut_away.jpg/640px-Transfer_case_-_cut_away.jpg",
    youtube: "https://www.youtube.com/watch?v=rMEDCPtBuF0",
    youtubeTitle: "How 4WD Works - Part Time vs Full Time",
    qChinese: "一辆配备分时四驱系统的车辆在干燥路面上挂入四驱时发出研磨噪音。技师A说这是正常的，因为分时系统没有中央差速器。技师B说分动箱同步器磨损。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "技师A是正确的。分时四驱系统没有中央差速器，因此在干燥路面上行驶会导致传动系统绑定和研磨噪音。前后轴被锁定在一起，必须以相同速度旋转，这在高附着力路面上会导致扭曲。这是正常现象，不是故障。"
  },
  {
    id: 177,
    q: "A full-time AWD vehicle pulls to one side during acceleration. All tires are the correct size and properly inflated. Which of the following is the MOST likely cause?",
    options: [
      "A) A faulty center differential viscous coupling",
      "B) A worn front CV axle on the pulling side",
      "C) A malfunctioning rear differential",
      "D) An improperly adjusted parking brake cable"
    ],
    answer: 0,
    explanation: "A faulty viscous coupling in the center differential can send unequal torque to the front and rear axles, causing the vehicle to pull to one side during acceleration. When the coupling is worn or its silicone fluid has degraded, torque distribution becomes erratic, resulting in uneven power delivery and pulling behavior.",
    diagram: "",
    terms: ["viscous_coupling", "center_differential", "torque_distribution"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Viscous_coupling_unit.jpg/640px-Viscous_coupling_unit.jpg",
    youtube: "https://www.youtube.com/watch?v=W_GBJn0MJgE",
    youtubeTitle: "How All Wheel Drive Works",
    qChinese: "一辆全时全轮驱动车辆在加速时向一侧偏移。所有轮胎尺寸正确且气压正常。以下哪项是最可能的原因？",
    optionsChinese: [
      "A) 中央差速器粘性联轴器故障",
      "B) 偏移侧的前CV轴磨损",
      "C) 后差速器故障",
      "D) 驻车制动拉索调整不当"
    ],
    explanationChinese: "中央差速器中的粘性联轴器故障会向前后轴发送不等的扭矩，导致车辆在加速时向一侧偏移。当联轴器磨损或其硅油退化时，扭矩分配变得不稳定，导致动力输出不均匀和偏移行为。"
  },
  {
    id: 178,
    q: "A customer complains that the 4WD indicator light on the dashboard flashes intermittently. The vehicle has an electronically controlled transfer case. What should the technician check FIRST?",
    options: [
      "A) The transfer case motor encoder sensor",
      "B) The front differential fluid level",
      "C) The rear driveshaft U-joints",
      "D) The transmission output shaft bearing"
    ],
    answer: 0,
    explanation: "A flashing 4WD indicator light in an electronically controlled transfer case system typically indicates a communication or position error. The transfer case motor encoder sensor reports the current operating mode position. If the sensor is faulty, the control module cannot confirm engagement, causing the indicator to flash as a warning.",
    diagram: "",
    terms: ["transfer_case_motor", "encoder_sensor", "4WD_indicator"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Transfer_case_-_cut_away.jpg/640px-Transfer_case_-_cut_away.jpg",
    youtube: "https://www.youtube.com/watch?v=IJe3ByBBjSA",
    youtubeTitle: "Electronic Transfer Case Diagnosis",
    qChinese: "客户抱怨仪表盘上的四驱指示灯间歇性闪烁。该车辆配备电子控制分动箱。技师应首先检查什么？",
    optionsChinese: [
      "A) 分动箱电机编码器传感器",
      "B) 前差速器油液位",
      "C) 后传动轴万向节",
      "D) 变速器输出轴轴承"
    ],
    explanationChinese: "电子控制分动箱系统中闪烁的四驱指示灯通常表示通信或位置错误。分动箱电机编码器传感器报告当前操作模式位置。如果传感器故障，控制模块无法确认接合，导致指示灯闪烁作为警告。"
  },
  {
    id: 179,
    q: "A 4WD vehicle has difficulty shifting from 2H to 4H while driving at highway speed. Technician A says the front axle disconnect actuator may be faulty. Technician B says the shift motor in the transfer case may have failed. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Many 4WD systems use a front axle disconnect actuator to engage the front axle and a transfer case shift motor to change modes. If either component fails, the system cannot complete the shift from 2H to 4H. Both components must function properly for successful on-the-fly shifting.",
    diagram: "",
    terms: ["front_axle_disconnect", "shift_motor", "transfer_case"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Transfer_case_-_cut_away.jpg/640px-Transfer_case_-_cut_away.jpg",
    youtube: "https://www.youtube.com/watch?v=rMEDCPtBuF0",
    youtubeTitle: "4WD Front Axle Disconnect Explained",
    qChinese: "一辆四驱车辆在高速公路速度下从2H切换到4H时有困难。技师A说前轴断开执行器可能故障。技师B说分动箱中的换挡电机可能已失效。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "两位技师都是正确的。许多四驱系统使用前轴断开执行器来接合前轴，使用分动箱换挡电机来切换模式。如果任一部件失效，系统无法完成从2H到4H的切换。两个部件都必须正常工作才能成功进行行驶中切换。"
  },
  {
    id: 180,
    q: "A whining noise from the transfer case increases with vehicle speed. The fluid level is correct and the fluid is clean. What is the MOST likely cause?",
    options: [
      "A) Worn transfer case chain",
      "B) A clogged transfer case vent",
      "C) Worn transfer case bearings",
      "D) A faulty front driveshaft CV joint"
    ],
    answer: 2,
    explanation: "A speed-dependent whining noise from the transfer case with proper fluid level and condition most likely indicates worn bearings. As bearings wear, they develop excessive clearance and surface imperfections that create a whining noise that increases with rotational speed. A worn chain typically produces a rattling sound instead.",
    diagram: "",
    terms: ["transfer_case_bearing", "chain_drive", "transfer_case_vent"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Transfer_case_-_cut_away.jpg/640px-Transfer_case_-_cut_away.jpg",
    youtube: "https://www.youtube.com/watch?v=pqGBR_jM_mY",
    youtubeTitle: "Transfer Case Noise Diagnosis",
    qChinese: "分动箱发出的呜呜声随车速增加。油液位正确且油液清洁。最可能的原因是什么？",
    optionsChinese: [
      "A) 分动箱链条磨损",
      "B) 分动箱通气口堵塞",
      "C) 分动箱轴承磨损",
      "D) 前传动轴CV接头故障"
    ],
    explanationChinese: "分动箱在油液位和状态正常的情况下发出与速度相关的呜呜声，最可能表明轴承磨损。随着轴承磨损，它们会产生过大的间隙和表面缺陷，产生随旋转速度增加的呜呜声。磨损的链条通常会产生嘎嘎声。"
  },
  {
    id: 181,
    q: "An AWD vehicle equipped with a Haldex coupling has reduced power to the rear wheels. Technician A says the Haldex oil pump may be failing. Technician B says the Haldex controller may have a software issue. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. The Haldex coupling uses an electronically controlled oil pump to engage the clutch pack that sends torque to the rear wheels. A failing pump cannot build sufficient pressure to fully engage the clutch pack. A software issue in the controller can also prevent proper engagement commands.",
    diagram: "",
    terms: ["Haldex_coupling", "clutch_pack", "AWD_controller"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Haldex_coupling.JPG/640px-Haldex_coupling.JPG",
    youtube: "https://www.youtube.com/watch?v=W_GBJn0MJgE",
    youtubeTitle: "Haldex AWD System Explained",
    qChinese: "一辆配备Haldex联轴器的全轮驱动车辆后轮动力减弱。技师A说Haldex油泵可能失效。技师B说Haldex控制器可能有软件问题。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "两位技师都是正确的。Haldex联轴器使用电子控制油泵来接合离合器组件，将扭矩传送到后轮。失效的油泵无法建立足够的压力来完全接合离合器组件。控制器的软件问题也可能阻止正确的接合命令。"
  },
  {
    id: 182,
    q: "A transfer case leaks fluid from the front output shaft seal. What should the technician inspect BEFORE replacing the seal?",
    options: [
      "A) The front output shaft for wear grooves and the transfer case vent for blockage",
      "B) The rear driveshaft balance",
      "C) The transmission input shaft bearing",
      "D) The clutch release bearing condition"
    ],
    answer: 0,
    explanation: "Before replacing a leaking front output shaft seal, the technician should inspect the shaft for wear grooves that could damage a new seal and check the transfer case vent for blockage. A clogged vent causes internal pressure buildup that can push fluid past seals. Replacing the seal alone without addressing these issues may lead to repeated failure.",
    diagram: "",
    terms: ["output_shaft_seal", "transfer_case_vent", "shaft_wear"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Transfer_case_-_cut_away.jpg/640px-Transfer_case_-_cut_away.jpg",
    youtube: "https://www.youtube.com/watch?v=pqGBR_jM_mY",
    youtubeTitle: "Transfer Case Seal Replacement Tips",
    qChinese: "分动箱从前输出轴密封件处漏油。技师在更换密封件之前应检查什么？",
    optionsChinese: [
      "A) 前输出轴是否有磨损沟槽以及分动箱通气口是否堵塞",
      "B) 后传动轴平衡",
      "C) 变速器输入轴轴承",
      "D) 离合器分离轴承状况"
    ],
    explanationChinese: "在更换泄漏的前输出轴密封件之前，技师应检查轴是否有可能损坏新密封件的磨损沟槽，并检查分动箱通气口是否堵塞。堵塞的通气口会导致内部压力积聚，将油液推过密封件。仅更换密封件而不解决这些问题可能导致重复故障。"
  },
  {
    id: 183,
    q: "A vehicle with an electronically controlled AWD system sets a DTC for the rear differential clutch actuator circuit. What is the MOST appropriate first diagnostic step?",
    options: [
      "A) Replace the rear differential clutch actuator",
      "B) Check the wiring harness and connector to the actuator for damage and corrosion",
      "C) Replace the AWD control module",
      "D) Drain and refill the rear differential fluid"
    ],
    answer: 1,
    explanation: "When a circuit-related DTC is set, the technician should first inspect the wiring harness and connector for damage, corrosion, or loose connections before replacing components. Circuit faults are frequently caused by wiring issues rather than component failure. Replacing parts without verifying the circuit wastes time and money.",
    diagram: "",
    terms: ["DTC", "clutch_actuator", "wiring_harness"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/OBD2_scanner.jpg/640px-OBD2_scanner.jpg",
    youtube: "https://www.youtube.com/watch?v=IJe3ByBBjSA",
    youtubeTitle: "AWD System DTC Diagnosis",
    qChinese: "一辆配备电子控制全轮驱动系统的车辆设置了后差速器离合器执行器电路的故障码。最适当的第一诊断步骤是什么？",
    optionsChinese: [
      "A) 更换后差速器离合器执行器",
      "B) 检查执行器的线束和连接器是否有损坏和腐蚀",
      "C) 更换全轮驱动控制模块",
      "D) 排放并重新加注后差速器油液"
    ],
    explanationChinese: "当设置与电路相关的故障码时，技师应首先检查线束和连接器是否有损坏、腐蚀或松动连接，然后再更换部件。电路故障通常由线路问题引起，而非部件故障。不验证电路就更换零件会浪费时间和金钱。"
  },
  {
    id: 184,
    q: "A customer with a 4WD truck reports a vibration at 55 mph that goes away above 65 mph. The vibration is present in both 2WD and 4WD modes. What is the MOST likely cause?",
    options: [
      "A) A worn transfer case chain",
      "B) A worn or damaged rear driveshaft U-joint",
      "C) A faulty front axle disconnect",
      "D) Low transfer case fluid level"
    ],
    answer: 1,
    explanation: "A speed-related vibration that occurs in a specific speed range and is present in both 2WD and 4WD points to the rear driveshaft, which rotates in both modes. Worn U-joints cause vibrations at certain speeds due to improper operating angles. The front components only affect vibration when the front axle is engaged.",
    diagram: "",
    terms: ["U-joint", "driveshaft_vibration", "operating_angle"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Universal_joint.svg/640px-Universal_joint.svg.png",
    youtube: "https://www.youtube.com/watch?v=p1LrJKBfsQU",
    youtubeTitle: "Driveshaft U-Joint Vibration Diagnosis",
    qChinese: "一位拥有四驱卡车的客户报告在55英里/小时时有振动，超过65英里/小时后消失。振动在两驱和四驱模式下都存在。最可能的原因是什么？",
    optionsChinese: [
      "A) 分动箱链条磨损",
      "B) 后传动轴万向节磨损或损坏",
      "C) 前轴断开装置故障",
      "D) 分动箱油液位低"
    ],
    explanationChinese: "在特定速度范围内发生的与速度相关的振动，且在两驱和四驱模式下都存在，指向后传动轴，因为它在两种模式下都旋转。磨损的万向节由于不正确的工作角度会在某些速度下引起振动。前部组件仅在前轴接合时影响振动。"
  },
  {
    id: 185,
    q: "When inspecting a front differential on a 4WD vehicle, the technician notices metal particles in the differential fluid. What does this indicate?",
    options: [
      "A) The differential fluid was overfilled",
      "B) Internal gear or bearing wear is occurring",
      "C) The wrong type of differential fluid was used",
      "D) The differential vent is clogged"
    ],
    answer: 1,
    explanation: "Metal particles in differential fluid indicate internal component wear. Ring and pinion gears, spider gears, and bearings shed metal particles as they wear. This contamination accelerates further damage and requires disassembly for inspection. The differential should be rebuilt or replaced depending on the extent of wear found.",
    diagram: "",
    terms: ["differential_fluid", "ring_and_pinion", "bearing_wear"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Differential_%28Manual%29.jpg/640px-Differential_%28Manual%29.jpg",
    youtube: "https://www.youtube.com/watch?v=lN_xGRt_vVY",
    youtubeTitle: "Differential Fluid Inspection and Diagnosis",
    qChinese: "在检查四驱车辆的前差速器时，技师注意到差速器油液中有金属颗粒。这表明什么？",
    optionsChinese: [
      "A) 差速器油液加注过多",
      "B) 内部齿轮或轴承正在磨损",
      "C) 使用了错误类型的差速器油液",
      "D) 差速器通气口堵塞"
    ],
    explanationChinese: "差速器油液中的金属颗粒表明内部部件磨损。齿圈和小齿轮、行星齿轮和轴承在磨损时会脱落金属颗粒。这种污染会加速进一步损坏，需要拆卸检查。根据发现的磨损程度，差速器应进行翻修或更换。"
  },
  {
    id: 186,
    q: "A front-wheel-drive vehicle with a manual transmission makes a clicking noise during sharp turns at low speed. Technician A says a worn outer CV joint is the cause. Technician B says a worn inner CV joint is the cause. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Technician A is correct. Clicking during sharp turns is the classic symptom of a worn outer CV joint (Rzeppa joint). The outer joint operates at greater angles during turns. When the joint is worn, the balls and grooves have excessive play, producing a clicking or popping noise. Inner CV joints typically cause vibration during acceleration.",
    diagram: "",
    terms: ["outer_CV_joint", "Rzeppa_joint", "CV_boot"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Rzeppa_joint.jpg/640px-Rzeppa_joint.jpg",
    youtube: "https://www.youtube.com/watch?v=K25xa5jNJpA",
    youtubeTitle: "CV Joint Diagnosis - Clicking Noise",
    qChinese: "一辆前轮驱动手动变速器车辆在低速急转弯时发出咔嗒声。技师A说是外CV接头磨损引起的。技师B说是内CV接头磨损引起的。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "技师A是正确的。急转弯时发出咔嗒声是外CV接头（Rzeppa接头）磨损的典型症状。外接头在转弯时以更大的角度工作。当接头磨损时，滚珠和沟槽之间有过大的间隙，产生咔嗒声或爆裂声。内CV接头通常在加速时引起振动。"
  },
  {
    id: 187,
    q: "A manual transmission is hard to shift into all gears when cold but shifts normally when warm. What is the MOST likely cause?",
    options: [
      "A) Worn synchronizer blocking rings",
      "B) Incorrect transmission fluid viscosity",
      "C) A bent shift fork",
      "D) Worn detent springs"
    ],
    answer: 1,
    explanation: "Difficulty shifting into all gears when cold that improves when warm strongly suggests the transmission fluid viscosity is too high for the operating temperature. Thick fluid resists the movement of synchronizers and gears until it warms up and thins out. Using the manufacturer-specified fluid grade resolves this condition.",
    diagram: "",
    terms: ["transmission_fluid", "viscosity", "synchronizer"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Synchromesh_animation.gif/640px-Synchromesh_animation.gif",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "Manual Transmission Hard Shifting Diagnosis",
    qChinese: "一台手动变速器在冷车时所有挡位都难以换挡，但暖车后换挡正常。最可能的原因是什么？",
    optionsChinese: [
      "A) 同步器锁环磨损",
      "B) 变速器油液粘度不正确",
      "C) 换挡拨叉弯曲",
      "D) 定位弹簧磨损"
    ],
    explanationChinese: "冷车时所有挡位都难以换挡，暖车后改善，这强烈表明变速器油液粘度对于工作温度而言过高。粘稠的油液阻碍同步器和齿轮的运动，直到它变暖并变稀。使用制造商指定的油液等级可以解决这种情况。"
  },
  {
    id: 188,
    q: "A rear-wheel-drive vehicle with a manual transmission has a clunking noise when shifting from drive to reverse. Technician A says worn transmission mount(s) could be the cause. Technician B says excessive ring and pinion backlash could be the cause. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Worn transmission or drivetrain mounts allow excessive movement when the drivetrain reverses direction, causing a clunk. Similarly, excessive ring and pinion backlash in the rear differential creates free play between the gears. When torque direction reverses, the gears slam together producing a clunking noise.",
    diagram: "",
    terms: ["transmission_mount", "ring_and_pinion", "backlash"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Differential_%28Manual%29.jpg/640px-Differential_%28Manual%29.jpg",
    youtube: "https://www.youtube.com/watch?v=lN_xGRt_vVY",
    youtubeTitle: "Drivetrain Clunk Noise Diagnosis",
    qChinese: "一辆后轮驱动手动变速器车辆在从前进挡切换到倒挡时发出咔噔声。技师A说变速器支架磨损可能是原因。技师B说齿圈和小齿轮间隙过大可能是原因。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "两位技师都是正确的。磨损的变速器或传动系统支架在传动系统反转方向时允许过度移动，导致咔噔声。同样，后差速器中齿圈和小齿轮的过大间隙在齿轮之间产生自由间隙。当扭矩方向反转时，齿轮猛烈撞击产生咔噔噪音。"
  },
  {
    id: 189,
    q: "A 4WD vehicle will not disengage from 4WD Low range. The transfer case uses a floor-mounted manual shift lever. What is the MOST likely cause?",
    options: [
      "A) The transfer case shift linkage is binding or misadjusted",
      "B) The front differential is overheating",
      "C) The rear driveshaft is out of phase",
      "D) The clutch disc is worn"
    ],
    answer: 0,
    explanation: "A manual shift transfer case that will not disengage from 4WD Low most commonly has a binding or misadjusted shift linkage. Corrosion, bent components, or improper adjustment prevents the shift lever from moving the transfer case mode fork to the 2H or 4H position. Lubrication and adjustment of the linkage usually resolves this.",
    diagram: "",
    terms: ["shift_linkage", "transfer_case", "4WD_Low"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Transfer_case_-_cut_away.jpg/640px-Transfer_case_-_cut_away.jpg",
    youtube: "https://www.youtube.com/watch?v=rMEDCPtBuF0",
    youtubeTitle: "Transfer Case Shift Linkage Adjustment",
    qChinese: "一辆四驱车辆无法从四驱低速挡脱出。分动箱使用地板安装的手动换挡杆。最可能的原因是什么？",
    optionsChinese: [
      "A) 分动箱换挡连杆卡住或调整不当",
      "B) 前差速器过热",
      "C) 后传动轴相位不对",
      "D) 离合器摩擦片磨损"
    ],
    explanationChinese: "手动换挡分动箱无法从四驱低速挡脱出，最常见的原因是换挡连杆卡住或调整不当。腐蚀、弯曲的部件或不当调整阻止换挡杆将分动箱模式拨叉移动到2H或4H位置。对连杆进行润滑和调整通常可以解决此问题。"
  },
  {
    id: 190,
    q: "During a test drive, an AWD vehicle exhibits a shudder when making tight turns in a parking lot. What is the MOST likely cause?",
    options: [
      "A) Mismatched tire sizes on the vehicle",
      "B) A worn steering rack",
      "C) Low power steering fluid",
      "D) Worn front brake pads"
    ],
    answer: 0,
    explanation: "AWD systems are sensitive to tire size differences. Mismatched tires cause the AWD system to detect different wheel speeds, activating the coupling and creating drivetrain binding during tight turns. Even small differences in tire circumference from uneven wear or different brands can cause shuddering in parking lot maneuvers.",
    diagram: "",
    terms: ["tire_circumference", "AWD_binding", "wheel_speed_difference"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Firestone_Firehawk_tire.jpg/640px-Firestone_Firehawk_tire.jpg",
    youtube: "https://www.youtube.com/watch?v=W_GBJn0MJgE",
    youtubeTitle: "AWD Tire Size and Binding Issues",
    qChinese: "在试驾过程中，一辆全轮驱动车辆在停车场急转弯时出现抖动。最可能的原因是什么？",
    optionsChinese: [
      "A) 车辆上轮胎尺寸不匹配",
      "B) 转向齿条磨损",
      "C) 助力转向液低",
      "D) 前制动片磨损"
    ],
    explanationChinese: "全轮驱动系统对轮胎尺寸差异非常敏感。不匹配的轮胎导致全轮驱动系统检测到不同的车轮速度，激活联轴器并在急转弯时产生传动系统绑定。即使是由于不均匀磨损或不同品牌造成的轮胎周长微小差异也会在停车场操作中引起抖动。"
  },
  {
    id: 191,
    q: "A clutch hydraulic system has been bled multiple times but the clutch pedal still feels spongy. What should the technician inspect next?",
    options: [
      "A) The clutch master cylinder for internal bypass leakage",
      "B) The flywheel runout",
      "C) The pressure plate bolt torque",
      "D) The input shaft spline condition"
    ],
    answer: 0,
    explanation: "If the clutch pedal remains spongy after thorough bleeding, the clutch master cylinder likely has internal bypass leakage. Worn internal seals allow fluid to bypass the piston instead of building pressure, resulting in a soft or spongy pedal feel. External leaks would be visible, but internal leaks require cylinder replacement.",
    diagram: "",
    terms: ["clutch_master_cylinder", "hydraulic_system", "internal_bypass"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Clutch_disc.jpg/640px-Clutch_disc.jpg",
    youtube: "https://www.youtube.com/watch?v=devo3kdSPQY",
    youtubeTitle: "Clutch Hydraulic System Diagnosis",
    qChinese: "离合器液压系统已多次排气，但离合器踏板仍然感觉松软。技师接下来应检查什么？",
    optionsChinese: [
      "A) 离合器主缸是否有内部旁通泄漏",
      "B) 飞轮跳动量",
      "C) 压盘螺栓扭矩",
      "D) 输入轴花键状况"
    ],
    explanationChinese: "如果在彻底排气后离合器踏板仍然松软，离合器主缸可能存在内部旁通泄漏。磨损的内部密封件允许油液绕过活塞而不是建立压力，导致踏板感觉柔软或松软。外部泄漏是可见的，但内部泄漏需要更换缸体。"
  },
  {
    id: 192,
    q: "A manual transmission pops out of fifth gear during deceleration. Technician A says a worn fifth gear synchronizer sleeve could be the cause. Technician B says weak or broken detent springs could be the cause. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. A worn synchronizer sleeve with rounded engagement teeth cannot maintain positive engagement, allowing the gear to pop out under deceleration thrust loads. Weak or broken detent springs fail to hold the shift rail firmly in position, also allowing it to slip out of gear during deceleration forces.",
    diagram: "",
    terms: ["synchronizer_sleeve", "detent_spring", "shift_rail"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Synchromesh_animation.gif/640px-Synchromesh_animation.gif",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "Transmission Pops Out of Gear Diagnosis",
    qChinese: "手动变速器在减速时从五挡跳出。技师A说五挡同步器滑套磨损可能是原因。技师B说定位弹簧变弱或断裂可能是原因。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "两位技师都是正确的。磨损的同步器滑套接合齿变圆后无法保持正接合，允许齿轮在减速推力载荷下跳出。变弱或断裂的定位弹簧无法将换挡轨牢固地保持在位置上，也允许它在减速力作用下滑出挡位。"
  },
  {
    id: 193,
    q: "A rear-wheel-drive vehicle has a howling noise from the rear axle that changes pitch when turning. What does this MOST likely indicate?",
    options: [
      "A) Worn or improperly adjusted ring and pinion gears",
      "B) A worn wheel bearing on the front axle",
      "C) Excessive transmission endplay",
      "D) A cracked flywheel"
    ],
    answer: 0,
    explanation: "A howling noise from the rear axle that changes pitch during turns indicates worn or improperly adjusted ring and pinion gears. Turning changes the load on the differential gears, altering the contact pattern and noise pitch. Proper gear contact pattern analysis and backlash measurement are needed to diagnose the specific issue.",
    diagram: "",
    terms: ["ring_and_pinion", "gear_contact_pattern", "backlash"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Differential_%28Manual%29.jpg/640px-Differential_%28Manual%29.jpg",
    youtube: "https://www.youtube.com/watch?v=lN_xGRt_vVY",
    youtubeTitle: "Ring and Pinion Gear Noise Diagnosis",
    qChinese: "一辆后轮驱动车辆后轴发出嚎叫声，转弯时音调变化。这最可能表明什么？",
    optionsChinese: [
      "A) 齿圈和小齿轮磨损或调整不当",
      "B) 前轴轮毂轴承磨损",
      "C) 变速器端部间隙过大",
      "D) 飞轮开裂"
    ],
    explanationChinese: "后轴发出的嚎叫声在转弯时音调变化，表明齿圈和小齿轮磨损或调整不当。转弯改变了差速器齿轮上的载荷，改变了接触面和噪音音调。需要正确的齿轮接触面分析和间隙测量来诊断具体问题。"
  },
  {
    id: 194,
    q: "When replacing a transfer case chain, the technician should also inspect which of the following?",
    options: [
      "A) The drive sprockets for wear and the chain tensioner condition",
      "B) The clutch disc thickness only",
      "C) The exhaust system mounts",
      "D) The engine coolant temperature sensor"
    ],
    answer: 0,
    explanation: "When replacing a transfer case chain, the drive sprockets should be inspected for wear patterns, rounded teeth, and damage. A worn chain often causes accelerated sprocket wear. The chain tensioner should also be checked for proper operation. Installing a new chain on worn sprockets will result in premature chain failure.",
    diagram: "",
    terms: ["transfer_case_chain", "drive_sprocket", "chain_tensioner"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Transfer_case_-_cut_away.jpg/640px-Transfer_case_-_cut_away.jpg",
    youtube: "https://www.youtube.com/watch?v=pqGBR_jM_mY",
    youtubeTitle: "Transfer Case Chain and Sprocket Inspection",
    qChinese: "更换分动箱链条时，技师还应检查以下哪项？",
    optionsChinese: [
      "A) 驱动链轮的磨损情况和链条张紧器状况",
      "B) 仅检查离合器摩擦片厚度",
      "C) 排气系统支架",
      "D) 发动机冷却液温度传感器"
    ],
    explanationChinese: "更换分动箱链条时，应检查驱动链轮的磨损模式、齿是否变圆和损坏。磨损的链条通常会导致链轮加速磨损。还应检查链条张紧器是否正常工作。在磨损的链轮上安装新链条会导致链条过早失效。"
  },
  {
    id: 195,
    q: "A vehicle with a limited-slip differential (LSD) chatters during slow tight turns. What is the MOST appropriate repair?",
    options: [
      "A) Replace the differential with an open type",
      "B) Drain and refill with the correct limited-slip differential fluid additive",
      "C) Replace both rear axle shafts",
      "D) Adjust the ring gear backlash"
    ],
    answer: 1,
    explanation: "Limited-slip differential chatter during slow turns is commonly caused by degraded friction modifier additive in the differential fluid. The clutch-type LSD requires specific friction modifier to allow the clutch plates to slip smoothly. Draining the old fluid and refilling with the correct LSD fluid containing the proper additive typically eliminates chatter.",
    diagram: "",
    terms: ["limited_slip_differential", "friction_modifier", "clutch_plates"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Differential_%28Manual%29.jpg/640px-Differential_%28Manual%29.jpg",
    youtube: "https://www.youtube.com/watch?v=lN_xGRt_vVY",
    youtubeTitle: "Limited Slip Differential Chatter Fix",
    qChinese: "一辆配备限滑差速器（LSD）的车辆在缓慢急转弯时产生颤振。最适当的维修方法是什么？",
    optionsChinese: [
      "A) 将差速器更换为开放式",
      "B) 排放并重新加注正确的限滑差速器油液添加剂",
      "C) 更换两根后半轴",
      "D) 调整齿圈间隙"
    ],
    explanationChinese: "限滑差速器在缓慢转弯时的颤振通常由差速器油液中降解的摩擦改性剂添加剂引起。离合器式限滑差速器需要特定的摩擦改性剂以允许离合器片平稳滑动。排放旧油液并重新加注含有正确添加剂的LSD油液通常可以消除颤振。"
  },
  {
    id: 196,
    q: "A front CV axle boot has been torn for an extended period. Upon inspection, the CV joint has excessive play and roughness. What is the correct repair?",
    options: [
      "A) Repack the joint with grease and install a new boot",
      "B) Replace the entire CV axle assembly",
      "C) Replace only the damaged CV joint",
      "D) Apply sealant to the torn boot"
    ],
    answer: 1,
    explanation: "When a CV joint has excessive play and roughness from prolonged exposure after a torn boot, the joint is damaged beyond repair by simple regreasing. Replacing the entire CV axle assembly is the most practical and reliable repair. Individual joint replacement is possible but a complete axle with new joints and boots is preferred.",
    diagram: "",
    terms: ["CV_axle", "CV_boot", "CV_joint"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Rzeppa_joint.jpg/640px-Rzeppa_joint.jpg",
    youtube: "https://www.youtube.com/watch?v=K25xa5jNJpA",
    youtubeTitle: "CV Axle Replacement Guide",
    qChinese: "一个前CV轴防尘套长时间撕裂。检查发现CV接头有过大的间隙和粗糙感。正确的维修方法是什么？",
    optionsChinese: [
      "A) 重新加注润滑脂并安装新防尘套",
      "B) 更换整个CV轴总成",
      "C) 仅更换损坏的CV接头",
      "D) 在撕裂的防尘套上涂密封剂"
    ],
    explanationChinese: "当CV接头因防尘套撕裂长时间暴露后出现过大间隙和粗糙感时，简单重新加注润滑脂无法修复接头。更换整个CV轴总成是最实用和可靠的维修方法。可以单独更换接头，但带有新接头和防尘套的完整轴更受推荐。"
  },
  {
    id: 197,
    q: "A technician is measuring driveshaft runout on a rear-wheel-drive vehicle. The maximum allowable runout is typically:",
    options: [
      "A) 0.010 to 0.020 inch (0.25 to 0.50 mm)",
      "B) 0.100 to 0.200 inch (2.5 to 5.0 mm)",
      "C) 0.500 inch (12.7 mm)",
      "D) 1.000 inch (25.4 mm)"
    ],
    answer: 0,
    explanation: "Maximum allowable driveshaft runout is typically 0.010 to 0.020 inch (0.25 to 0.50 mm). Excessive runout causes vibrations that increase with vehicle speed. Runout is measured with a dial indicator at the center of the driveshaft while it is rotated. Shafts exceeding this specification must be replaced or repaired.",
    diagram: "",
    terms: ["driveshaft_runout", "dial_indicator", "vibration"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/DriveShaft.jpg/640px-DriveShaft.jpg",
    youtube: "https://www.youtube.com/watch?v=p1LrJKBfsQU",
    youtubeTitle: "Driveshaft Runout Measurement",
    qChinese: "技师正在测量后轮驱动车辆的传动轴跳动量。最大允许跳动量通常为：",
    optionsChinese: [
      "A) 0.010到0.020英寸（0.25到0.50毫米）",
      "B) 0.100到0.200英寸（2.5到5.0毫米）",
      "C) 0.500英寸（12.7毫米）",
      "D) 1.000英寸（25.4毫米）"
    ],
    explanationChinese: "最大允许传动轴跳动量通常为0.010到0.020英寸（0.25到0.50毫米）。过大的跳动量会导致随车速增加而增加的振动。跳动量使用百分表在传动轴中心处旋转时测量。超过此规格的传动轴必须更换或修理。"
  },
  {
    id: 198,
    q: "A 4WD vehicle has a vibration only when 4WD High is engaged. The vibration is not present in 2WD or 4WD Low. What is the MOST likely cause?",
    options: [
      "A) A worn front driveshaft U-joint or CV joint",
      "B) An unbalanced rear driveshaft",
      "C) A worn clutch disc",
      "D) Low engine oil level"
    ],
    answer: 0,
    explanation: "A vibration present only in 4WD High indicates a front driveshaft issue since the front driveshaft only turns at road speed in 4WD High. A worn U-joint or CV joint on the front driveshaft will vibrate at higher speeds. In 4WD Low, the reduced speed may not excite the vibration, and in 2WD the front shaft is not spinning.",
    diagram: "",
    terms: ["front_driveshaft", "U-joint", "4WD_High"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Universal_joint.svg/640px-Universal_joint.svg.png",
    youtube: "https://www.youtube.com/watch?v=rMEDCPtBuF0",
    youtubeTitle: "4WD Vibration Diagnosis Front Driveshaft",
    qChinese: "一辆四驱车辆仅在四驱高速挡接合时有振动。在两驱或四驱低速挡时没有振动。最可能的原因是什么？",
    optionsChinese: [
      "A) 前传动轴万向节或CV接头磨损",
      "B) 后传动轴不平衡",
      "C) 离合器摩擦片磨损",
      "D) 发动机机油液位低"
    ],
    explanationChinese: "仅在四驱高速挡时出现的振动表明前传动轴有问题，因为前传动轴仅在四驱高速挡时以路面速度旋转。前传动轴上磨损的万向节或CV接头在较高速度下会振动。在四驱低速挡中，降低的速度可能不会激发振动，在两驱中前轴不旋转。"
  },
  {
    id: 199,
    q: "A technician is adjusting the ring and pinion gear contact pattern. The pattern shows heavy contact on the toe of the ring gear teeth. What adjustment is needed?",
    options: [
      "A) Move the pinion gear deeper into the housing",
      "B) Move the pinion gear away from the ring gear",
      "C) Increase the backlash by moving the ring gear away from the pinion",
      "D) Decrease the backlash by moving the ring gear closer to the pinion"
    ],
    answer: 2,
    explanation: "A heavy contact pattern on the toe (small end) of the ring gear teeth indicates the ring gear is positioned too close to the pinion gear. Increasing backlash by shimming the ring gear away from the pinion moves the contact pattern from the toe toward the heel, centering it on the tooth face for proper operation.",
    diagram: "",
    terms: ["gear_contact_pattern", "backlash", "ring_gear_shim"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Differential_%28Manual%29.jpg/640px-Differential_%28Manual%29.jpg",
    youtube: "https://www.youtube.com/watch?v=lN_xGRt_vVY",
    youtubeTitle: "Ring and Pinion Contact Pattern Setup",
    qChinese: "技师正在调整齿圈和小齿轮的接触面。接触面显示在齿圈齿的趾部有重接触。需要什么调整？",
    optionsChinese: [
      "A) 将小齿轮向壳体内部移动更深",
      "B) 将小齿轮远离齿圈移动",
      "C) 通过将齿圈远离小齿轮移动来增加间隙",
      "D) 通过将齿圈靠近小齿轮移动来减小间隙"
    ],
    explanationChinese: "齿圈齿趾部（小端）的重接触面表明齿圈位置离小齿轮太近。通过垫片将齿圈远离小齿轮以增加间隙，可以将接触面从趾部向跟部移动，使其居中在齿面上以正常运行。"
  },
  {
    id: 200,
    q: "A vehicle with an electronic locking differential will not engage the lock. The dash switch illuminates but the differential does not lock. Technician A says the locking differential actuator motor may be faulty. Technician B says the shift fork inside the differential may be seized. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. The dash switch illuminating confirms electrical power reaches the system. A faulty actuator motor cannot physically engage the locking mechanism even with proper electrical signals. A seized shift fork inside the differential prevents mechanical engagement regardless of actuator operation. Either condition prevents the lock from engaging.",
    diagram: "",
    terms: ["locking_differential", "actuator_motor", "shift_fork"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Differential_%28Manual%29.jpg/640px-Differential_%28Manual%29.jpg",
    youtube: "https://www.youtube.com/watch?v=lN_xGRt_vVY",
    youtubeTitle: "Electronic Locking Differential Diagnosis",
    qChinese: "一辆配备电子锁定差速器的车辆无法接合锁定。仪表板开关亮起但差速器不锁定。技师A说锁定差速器执行器电机可能故障。技师B说差速器内部的拨叉可能卡住。谁是正确的？",
    optionsChinese: [
      "A) 只有技师A",
      "B) 只有技师B",
      "C) 技师A和技师B都对",
      "D) 技师A和技师B都不对"
    ],
    explanationChinese: "两位技师都是正确的。仪表板开关亮起确认电力到达系统。故障的执行器电机即使有正确的电信号也无法物理接合锁定机构。差速器内部卡住的拨叉无论执行器是否工作都阻止机械接合。任一情况都会阻止锁定接合。"
  }
];