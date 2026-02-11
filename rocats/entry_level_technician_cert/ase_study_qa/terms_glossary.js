const termsGlossary = {
  // ===== A1: ENGINE REPAIR TERMS =====
  "crankshaft_position_sensor": {
    term: "Crankshaft Position Sensor (CKP)",
    termChinese: "曲轴位置传感器",
    section: "A1",
    definition: "An electromagnetic or Hall-effect sensor mounted near the crankshaft that monitors engine speed and rotational position. It sends signals to the PCM to control ignition timing and fuel injection events. Without a valid CKP signal, the engine cannot start because the PCM cannot determine piston position for spark and fuel delivery timing.",
    definitionChinese: "一种安装在曲轴附近的电磁式或霍尔效应传感器，用于监测发动机转速和旋转位置。它向PCM发送信号以控制点火正时和燃油喷射。没有有效的CKP信号，发动机无法启动，因为PCM无法确定活塞位置来进行点火和供油正时。",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/50/T27_crankshaft.JPG",
    youtube: "https://www.youtube.com/watch?v=9n7eVsEmhMk",
    youtubeTitle: "Crankshaft Position Sensor: How It Works, Symptoms, Problems"
  },
  "compression_test": {
    term: "Compression Test",
    termChinese: "气缸压缩测试",
    section: "A1",
    definition: "A diagnostic procedure that measures the pressure each cylinder can produce during the compression stroke. A gauge is threaded into the spark plug hole while the engine is cranked. Normal readings are typically 125-180 psi. Low readings indicate worn rings, leaking valves, or head gasket failure. Comparing cylinders reveals which ones are weak.",
    definitionChinese: "一种诊断程序，测量每个气缸在压缩冲程中产生的压力。将压力表拧入火花塞孔中，同时起动发动机。正常读数通常为125-180 psi。低读数表明活塞环磨损、气门泄漏或汽缸垫片损坏。比较各气缸读数可判断哪些气缸较弱。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=zCR6wahr9FU",
    youtubeTitle: "How to Do a Compression Test on Your Engine"
  },
  "wet_compression_test": {
    term: "Wet Compression Test",
    termChinese: "湿压缩测试",
    section: "A1",
    definition: "A follow-up test where a small amount of oil is squirted into a low-compression cylinder before re-testing. If the reading rises significantly, worn piston rings are confirmed because the oil temporarily seals the ring-to-wall gap. If the reading stays low, the problem is likely a valve or head gasket issue.",
    definitionChinese: "一种后续测试，在低压缩气缸中注入少量机油后重新测试。如果读数明显升高，则确认活塞环磨损，因为机油暂时密封了环与缸壁之间的间隙。如果读数仍然偏低，问题可能出在气门或汽缸垫片上。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=zCR6wahr9FU",
    youtubeTitle: "Wet vs Dry Compression Test"
  },
  "leak_down_test": {
    term: "Cylinder Leak-Down Test",
    termChinese: "气缸泄漏测试",
    section: "A1",
    definition: "A test that pressurizes each cylinder with compressed air at TDC on the compression stroke and measures the percentage of air leaking out. Unlike a compression test, it pinpoints where leakage occurs: air at the tailpipe means exhaust valve leak, at the intake means intake valve, at the oil cap means ring leakage, and in the coolant means head gasket failure.",
    definitionChinese: "在压缩上止点用压缩空气对每个气缸加压，测量空气泄漏百分比的测试。与压缩测试不同，它能精确定位泄漏位置：排气管处有空气表示排气门泄漏，进气口处表示进气门泄漏，机油盖处表示活塞环泄漏，冷却液中有气泡表示汽缸垫片损坏。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=-oLwZmJpOMk",
    youtubeTitle: "How To Do a Leak Down Test & Interpret Results"
  },
  "vacuum_gauge": {
    term: "Vacuum Gauge",
    termChinese: "真空表",
    section: "A1",
    definition: "A diagnostic tool connected to the intake manifold that reads engine vacuum in inches of mercury (in-Hg). Normal idle vacuum is 17-21 in-Hg at sea level. Different needle behaviors indicate specific engine problems: steady low readings suggest timing issues, regular drops indicate valve problems, and fluctuating readings point to ignition or mixture faults.",
    definitionChinese: "连接到进气歧管的诊断工具，以英寸汞柱（in-Hg）为单位读取发动机真空度。海平面正常怠速真空为17-21 in-Hg。不同的指针行为指示特定的发动机问题：稳定偏低表示正时问题，规律性下降表示气门问题，波动读数表示点火或混合气故障。",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Carburetor.svg",
    youtube: "https://www.youtube.com/watch?v=SdlNwm8OHco",
    youtubeTitle: "How to Use a Vacuum Gauge to Diagnose Engine Problems"
  },
  "valve_stem_seals": {
    term: "Valve Stem Seals",
    termChinese: "气门油封",
    section: "A1",
    definition: "Small rubber or synthetic seals installed on each valve stem where it passes through the valve guide. They control the amount of oil that lubricates the valve stem and prevent excess oil from entering the combustion chamber. Worn seals cause blue smoke on startup as oil seeps past during engine-off periods and burns on restart.",
    definitionChinese: "安装在每个气门杆穿过气门导管处的小型橡胶或合成密封件。它们控制润滑气门杆的机油量，防止过多机油进入燃烧室。磨损的油封会导致启动时冒蓝烟，因为发动机停止时机油渗过，重新启动时被燃烧。",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Cylinder_head_of_1KD-FTV.JPG",
    youtube: "https://www.youtube.com/watch?v=_addEj_vCro",
    youtubeTitle: "4 Signs of Bad Valve Stem Seals"
  },
  "piston_rings": {
    term: "Piston Rings",
    termChinese: "活塞环",
    section: "A1",
    definition: "Metal rings seated in grooves around each piston that seal combustion pressure above, scrape oil from cylinder walls, and transfer heat from the piston to the cylinder wall. A typical set includes two compression rings and one oil control ring. Worn rings cause oil consumption, blue exhaust smoke under load, and reduced compression.",
    definitionChinese: "安装在每个活塞凹槽中的金属环，用于密封上方的燃烧压力、刮除缸壁上的机油，并将活塞热量传递到缸壁。典型的一组包括两个压缩环和一个油环。磨损的活塞环会导致机油消耗、负荷下冒蓝烟和压缩压力降低。",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/12/47mm_piston_rings.jpg",
    youtube: "https://www.youtube.com/watch?v=zCR6wahr9FU",
    youtubeTitle: "Piston Ring Function and Wear"
  },
  "head_gasket": {
    term: "Head Gasket",
    termChinese: "汽缸垫片",
    section: "A1",
    definition: "A multi-layer steel or composite gasket that seals between the engine block and cylinder head. It must contain combustion pressure, separate oil passages from coolant passages, and maintain proper sealing under extreme temperature and pressure changes. A blown head gasket can cause coolant-oil mixing, white exhaust smoke, or compression loss between adjacent cylinders.",
    definitionChinese: "安装在发动机缸体和气缸盖之间的多层钢或复合材料垫片。它必须承受燃烧压力、将油道与水道分开，并在极端温度和压力变化下保持密封。汽缸垫片损坏可导致冷却液与机油混合、排出白色尾气烟雾或相邻气缸之间压缩损失。",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Cylinder_head_of_1KD-FTV.JPG",
    youtube: "https://www.youtube.com/watch?v=5zpNjYmmiYY",
    youtubeTitle: "How to Check for a Blown Head Gasket"
  },
  "thermostat": {
    term: "Thermostat",
    termChinese: "节温器",
    section: "A1",
    definition: "A temperature-controlled valve in the cooling system that regulates coolant flow to the radiator. It stays closed when the engine is cold to allow quick warm-up, then opens at a calibrated temperature (typically 195-220 degrees F) to allow coolant circulation through the radiator. Stuck open causes slow warm-up; stuck closed causes overheating.",
    definitionChinese: "冷却系统中的温控阀门，调节流向散热器的冷却液流量。发动机冷态时保持关闭以快速暖机，在校准温度（通常195-220华氏度）时打开，允许冷却液通过散热器循环。卡在开位导致暖机缓慢；卡在关位导致过热。",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Automobile_radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=aOXz5hlKO9s",
    youtubeTitle: "Thermostat - How Does It Work? (3D Animation)"
  },
  "coolant_temperature_sensor": {
    term: "Coolant Temperature Sensor (ECT/CTS)",
    termChinese: "冷却液温度传感器",
    section: "A1",
    definition: "A negative temperature coefficient (NTC) thermistor that measures engine coolant temperature and sends the data to the PCM. As temperature rises, its resistance decreases. The PCM uses this signal to adjust fuel delivery, ignition timing, idle speed, and emission controls. A faulty sensor can cause hard starting, poor fuel economy, and incorrect fan operation.",
    definitionChinese: "一种负温度系数（NTC）热敏电阻，测量发动机冷却液温度并将数据发送给PCM。温度升高时电阻降低。PCM使用此信号调整燃油供给、点火正时、怠速转速和排放控制。传感器故障可导致启动困难、油耗增加和风扇运行不正常。",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Automobile_radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=aOXz5hlKO9s",
    youtubeTitle: "Coolant Temperature Sensor Testing"
  },
  "oil_pressure": {
    term: "Oil Pressure",
    termChinese: "机油压力",
    section: "A1",
    definition: "The force generated by the oil pump to circulate lubricant through the engine. Measured in psi, typical readings are 10-20 psi at idle and 30-60 psi at operating speed. Low pressure indicates worn bearings, a failing pump, or thin oil. Oil pressure ensures all moving parts receive adequate lubrication to prevent metal-to-metal contact and overheating.",
    definitionChinese: "机油泵产生的力，用于在发动机内循环润滑油。以psi为单位测量，典型读数为怠速10-20 psi，工作转速30-60 psi。低压力表明轴承磨损、油泵失效或机油过稀。机油压力确保所有运动部件获得充分润滑，防止金属直接接触和过热。",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Oil_Pump_from_Toyota_Coaster_Bus.JPG",
    youtube: "https://www.youtube.com/watch?v=8f2fcbTh5yw",
    youtubeTitle: "How Oil Pressure Works - EricTheCarGuy"
  },
  "engine_mount": {
    term: "Engine Mount",
    termChinese: "发动机支架",
    section: "A1",
    definition: "A rubber-and-metal bracket that secures the engine and transmission to the vehicle frame while absorbing vibrations. Hydraulic-filled mounts provide additional damping. A broken or collapsed mount allows excessive engine movement, causing vibrations at idle, clunking sounds during acceleration or braking, and misalignment of drivetrain components.",
    definitionChinese: "将发动机和变速箱固定到车架上的橡胶-金属支架，同时吸收振动。液压填充式支架提供额外的减振效果。断裂或塌陷的支架导致发动机过度移动，引起怠速振动、加速或制动时的异响以及传动系统部件错位。",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Nissan_VQ35DE_engine_001.jpg",
    youtube: "https://www.youtube.com/watch?v=QFg4G1dcI5s",
    youtubeTitle: "How to Diagnose Bad Car Engine Mounts"
  },
  "voltage_drop_test": {
    term: "Voltage Drop Test",
    termChinese: "电压降测试",
    section: "A1",
    definition: "A diagnostic method that measures resistance in a live circuit by checking the voltage lost across connections, cables, or components while current is flowing. Maximum acceptable drop is typically 0.2V for a single connection and 0.5V for an entire circuit. High readings indicate corroded connections, damaged cables, or poor grounds causing electrical problems.",
    definitionChinese: "一种诊断方法，在电流流动时通过检查连接、电缆或部件上损失的电压来测量带电电路中的电阻。单个连接的最大可接受电压降通常为0.2V，整个电路为0.5V。高读数表明连接腐蚀、电缆损坏或接地不良导致的电气问题。",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/04/Fluke_87_III_True_RMS_Multimeter.jpg",
    youtube: "https://www.youtube.com/watch?v=qPpHRuddhh4",
    youtubeTitle: "The Best Way to Perform a Voltage Drop Test"
  },
  "camshaft": {
    term: "Camshaft",
    termChinese: "凸轮轴",
    section: "A1",
    definition: "A shaft with precisely shaped lobes that open and close the intake and exhaust valves at the correct timing relative to piston position. Each lobe's shape determines valve lift, duration, and timing. Worn lobes reduce valve opening, decreasing airflow and power. Modern engines may have variable valve timing systems that adjust cam position for optimal performance.",
    definitionChinese: "一根带有精确形状凸轮的轴，在相对于活塞位置的正确时机打开和关闭进气门和排气门。每个凸轮的形状决定气门升程、持续时间和正时。磨损的凸轮减少气门开度，降低气流和功率。现代发动机可能配有可变气门正时系统来调整凸轮位置以获得最佳性能。",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Ducati_1199_Panigale_engine3_camshaft.JPG",
    youtube: "https://www.youtube.com/watch?v=glUXDMuQ3Bs",
    youtubeTitle: "Variable Valve Timing Explained"
  },
  "variable_valve_timing": {
    term: "Variable Valve Timing (VVT)",
    termChinese: "可变气门正时",
    section: "A1",
    definition: "A system that adjusts camshaft timing relative to the crankshaft using oil-pressure-actuated phasers controlled by the PCM. VVT optimizes engine performance across the RPM range by advancing or retarding valve timing. Common issues include sludge-clogged oil control solenoids and worn phaser components, which trigger diagnostic trouble codes.",
    definitionChinese: "一种通过PCM控制的油压驱动相位器来调整凸轮轴相对于曲轴正时的系统。VVT通过提前或延迟气门正时来优化整个转速范围内的发动机性能。常见问题包括油泥堵塞的机油控制电磁阀和磨损的相位器部件，会触发故障诊断码。",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Ducati_1199_Panigale_engine3_camshaft.JPG",
    youtube: "https://www.youtube.com/watch?v=glUXDMuQ3Bs",
    youtubeTitle: "Car Tech 101: Variable Valve Timing Explained"
  },
  "hydraulic_lifter": {
    term: "Hydraulic Lifter (Lash Adjuster)",
    termChinese: "液压挺柱",
    section: "A1",
    definition: "A valve train component that uses engine oil pressure to automatically maintain zero valve lash, eliminating the need for manual adjustment. Oil fills an internal chamber through a check valve. Worn lifters or oil drain-back can cause tapping noises, especially on cold startup. The noise usually diminishes once oil pressure refills the lifter chambers.",
    definitionChinese: "一种气门机构部件，利用发动机机油压力自动保持零气门间隙，无需手动调整。机油通过单向阀进入内部腔室。磨损的挺柱或机油回流会导致敲击声，特别是冷启动时。一旦机油压力重新充满挺柱腔室，噪音通常会减弱。",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Ducati_1199_Panigale_engine3_camshaft.JPG",
    youtube: "https://www.youtube.com/watch?v=glUXDMuQ3Bs",
    youtubeTitle: "Hydraulic Lifters Explained"
  },
  "timing_chain": {
    term: "Timing Chain/Belt",
    termChinese: "正时链条/正时皮带",
    section: "A1",
    definition: "A chain or reinforced rubber belt that synchronizes crankshaft and camshaft rotation to ensure valves open and close at the correct time. Chains are durable but stretch over time; belts require periodic replacement. On interference engines, a broken timing belt causes pistons to strike open valves, resulting in severe engine damage.",
    definitionChinese: "同步曲轴和凸轮轴旋转的链条或加强型橡胶皮带，确保气门在正确时间打开和关闭。链条耐用但随时间会拉伸；皮带需要定期更换。在干涉式发动机上，正时皮带断裂会导致活塞撞击打开的气门，造成严重的发动机损坏。",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/64/2001_honda_accord_timing_belt-terabass.jpg",
    youtube: "https://www.youtube.com/watch?v=fMDHUvYJLfQ",
    youtubeTitle: "Timing Chains vs Belts - Differences and History"
  },
  "pcm": {
    term: "Powertrain Control Module (PCM)",
    termChinese: "动力总成控制模块",
    section: "A1",
    definition: "The main computer that manages engine and transmission functions. It receives input from dozens of sensors to control fuel injection, ignition timing, emission systems, and transmission shifting. The PCM uses programmed algorithms to optimize performance, fuel economy, and emissions. It also monitors systems for faults and stores diagnostic trouble codes.",
    definitionChinese: "管理发动机和变速箱功能的主计算机。它接收数十个传感器的输入，控制燃油喷射、点火正时、排放系统和变速箱换挡。PCM使用编程算法优化性能、燃油经济性和排放。它还监控系统故障并存储故障诊断码。",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/OBD-II_type_A_female_connector_pinout.svg",
    youtube: "https://www.youtube.com/watch?v=oNCJugI7U7Y",
    youtubeTitle: "Understanding Powertrain Control Modules"
  },
  "radiator": {
    term: "Radiator",
    termChinese: "散热器",
    section: "A1",
    definition: "A heat exchanger in the cooling system that transfers heat from the engine coolant to the outside air. Hot coolant flows through thin tubes while air passes over fins attached to the tubes. A restricted radiator cannot adequately cool the engine, especially at highway speeds when heat load is highest, causing overheating under sustained high-speed driving.",
    definitionChinese: "冷却系统中的热交换器，将发动机冷却液的热量传递到外部空气中。热的冷却液流过细管，空气通过连接在管上的散热片。受限的散热器无法充分冷却发动机，特别是在高速行驶时热负荷最高时，导致持续高速驾驶时过热。",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Automobile_radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=VQ6Lpjd134g",
    youtubeTitle: "How Does a Radiator Work?"
  },
  "water_pump": {
    term: "Water Pump",
    termChinese: "水泵",
    section: "A1",
    definition: "A belt-driven or electric pump that circulates coolant through the engine, heater core, and radiator. It uses an impeller to create flow. A weep hole between the seal and bearing alerts technicians to seal failure before coolant damages the bearing. Signs of failure include coolant leaks, shaft play, grinding noises, and overheating.",
    definitionChinese: "由皮带驱动或电动的泵，在发动机、暖风水箱和散热器之间循环冷却液。它使用叶轮产生流量。密封件和轴承之间的泄漏孔在冷却液损坏轴承之前提醒技术人员密封件失效。故障迹象包括冷却液泄漏、轴间隙、磨削噪音和过热。",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Automobile_radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=ByEddKXPNfY",
    youtubeTitle: "Water Pumps: Explained in Super Detail"
  },
  "heater_core": {
    term: "Heater Core",
    termChinese: "暖风水箱",
    section: "A1",
    definition: "A small radiator-like heat exchanger located inside the HVAC housing behind the dashboard. Hot engine coolant flows through it, and the blower fan pushes cabin air across its fins for heating. A leaking heater core causes a sweet coolant smell inside the cabin, fogged windshield, and gradual coolant loss without visible external leaks.",
    definitionChinese: "位于仪表板后方HVAC壳体内的小型散热器式热交换器。热的发动机冷却液流过它，鼓风机将座舱空气吹过其散热片来加热。泄漏的暖风水箱会导致车内有甜味的冷却液气味、挡风玻璃起雾，以及没有明显外部泄漏的逐渐冷却液损失。",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Automobile_radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=x663vdSjFF0",
    youtubeTitle: "How the Heater Inside the Car Works"
  },
  "cylinder_head": {
    term: "Cylinder Head",
    termChinese: "气缸盖",
    section: "A1",
    definition: "The casting that bolts to the top of the engine block, forming the top of the combustion chambers. It houses the valves, valve guides, valve seats, springs, and often the camshaft. Cylinder heads can warp from overheating and must be checked with a straightedge and feeler gauge. Maximum warpage for aluminum heads is typically 0.002-0.004 inch.",
    definitionChinese: "用螺栓固定在发动机缸体顶部的铸件，形成燃烧室的顶部。它容纳气门、气门导管、气门座、弹簧，通常还有凸轮轴。气缸盖可能因过热而翘曲，必须用直尺和塞尺检查。铝制气缸盖的最大翘曲量通常为0.002-0.004英寸。",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Cylinder_head_of_1KD-FTV.JPG",
    youtube: "https://www.youtube.com/watch?v=rfRGO5BZQ4Y",
    youtubeTitle: "Cylinder Heads 101"
  },
  // ===== A2: AUTOMATIC TRANSMISSION TERMS =====
  "torque_converter": {
    term: "Torque Converter",
    termChinese: "液力变矩器",
    section: "A2",
    definition: "A fluid coupling between the engine and automatic transmission that multiplies engine torque during acceleration and allows the engine to idle while the vehicle is stopped. It contains an impeller, turbine, and stator. A lock-up clutch eliminates slippage at cruising speed for better fuel economy. Shudder during lock-up indicates a worn clutch disc.",
    definitionChinese: "发动机和自动变速箱之间的液力耦合装置，在加速时倍增发动机扭矩，并允许车辆停止时发动机怠速运转。它包含泵轮、涡轮和导轮。锁止离合器在巡航速度时消除滑动以提高燃油经济性。锁止时的抖动表明离合器片磨损。",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Bauma_2007_ZF_Drehmomentwandler.jpg",
    youtube: "https://www.youtube.com/watch?v=WUFNySTjUmQ",
    youtubeTitle: "How A Torque Converter Works And What's Inside"
  },
  "transmission_fluid": {
    term: "Automatic Transmission Fluid (ATF)",
    termChinese: "自动变速箱油",
    section: "A2",
    definition: "A specialized hydraulic fluid that lubricates, cools, and transmits hydraulic pressure within an automatic transmission. Normal ATF is red or pink; dark brown with a burnt smell indicates overheating or clutch damage. Milky pink indicates coolant contamination from a failed transmission cooler. Always use the manufacturer-specified fluid type.",
    definitionChinese: "一种专用液压油，在自动变速箱内润滑、冷却并传递液压。正常的ATF呈红色或粉红色；深棕色伴有烧焦气味表明过热或离合器损坏。乳粉色表明由于变速箱冷却器故障导致冷却液污染。始终使用制造商指定的油液类型。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/42/8-speed_AT_for_Lexus_LS460.jpg",
    youtube: "https://www.youtube.com/watch?v=mF2jlNc9Tqw",
    youtubeTitle: "Are All Automatic Transmission Fluids The Same?"
  },
  "clutch_pack": {
    term: "Clutch Pack",
    termChinese: "离合器片组",
    section: "A2",
    definition: "A set of alternating friction discs and steel plates inside an automatic transmission that engage and disengage to select different gear ratios. Hydraulic pressure applied by servo pistons squeezes the pack together. Worn friction material causes slipping, burnt fluid, and delayed engagement. Clutch packs are a primary component rebuilt during transmission overhaul.",
    definitionChinese: "自动变速箱内交替排列的摩擦片和钢片组，通过接合和分离来选择不同的齿轮比。液压通过伺服活塞施加压力将片组压紧。磨损的摩擦材料导致打滑、油液烧焦和接合延迟。离合器片组是变速箱大修时重建的主要部件。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/42/8-speed_AT_for_Lexus_LS460.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "Transmission Clutch Packs"
  },
  "shift_solenoid": {
    term: "Shift Solenoid",
    termChinese: "换挡电磁阀",
    section: "A2",
    definition: "An electrically controlled valve in the transmission valve body that directs hydraulic fluid to engage specific clutch packs and bands for gear changes. The TCM or PCM commands solenoids on and off in combinations to produce each gear ratio. Faulty solenoids cause harsh shifts, wrong gear selection, or stuck-in-gear conditions.",
    definitionChinese: "变速箱阀体中的电控阀门，引导液压油接合特定的离合器片组和制动带以实现换挡。TCM或PCM按组合指令开关电磁阀以产生每个齿轮比。故障电磁阀导致换挡冲击、齿轮选择错误或卡挡。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/42/8-speed_AT_for_Lexus_LS460.jpg",
    youtube: "https://www.youtube.com/watch?v=jPhm76RDz6Y",
    youtubeTitle: "Shift Solenoid Operation Explained"
  },
  "valve_body": {
    term: "Valve Body",
    termChinese: "阀体",
    section: "A2",
    definition: "The hydraulic control center of an automatic transmission, containing a maze of channels, valves, and solenoids that direct fluid pressure to the appropriate clutches and bands for gear selection. It acts as the transmission's brain. Worn valves or stuck solenoids in the valve body cause erratic shifting, slipping, and diagnostic trouble codes.",
    definitionChinese: "自动变速箱的液压控制中心，包含由通道、阀门和电磁阀组成的迷宫，将液压引导到适当的离合器和制动带以选择齿轮。它充当变速箱的大脑。阀体中磨损的阀门或卡住的电磁阀导致换挡不稳、打滑和故障诊断码。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/42/8-speed_AT_for_Lexus_LS460.jpg",
    youtube: "https://www.youtube.com/watch?v=u_y1S8C0Hmc",
    youtubeTitle: "Valve Body Explained"
  },
  "transmission_cooler": {
    term: "Transmission Cooler",
    termChinese: "变速箱冷却器",
    section: "A2",
    definition: "A heat exchanger that cools automatic transmission fluid using either engine coolant (built into the radiator) or air flow (external auxiliary cooler). Overheated ATF deteriorates rapidly, damaging friction material and seals. A crack in an internal cooler allows coolant and ATF to mix, creating a milky pink fluid that requires immediate repair.",
    definitionChinese: "利用发动机冷却液（内置于散热器）或气流（外部辅助冷却器）冷却自动变速箱油的热交换器。过热的ATF迅速劣化，损坏摩擦材料和密封件。内部冷却器裂缝允许冷却液和ATF混合，产生乳粉色液体，需要立即修复。",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Automobile_radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=5BkuwFPhCQM",
    youtubeTitle: "Understanding Transmission and Oil Coolers"
  },
  "planetary_gear_set": {
    term: "Planetary Gear Set",
    termChinese: "行星齿轮组",
    section: "A2",
    definition: "The main gear mechanism in automatic transmissions consisting of a sun gear, planet carrier with planet gears, and a ring gear. By holding or driving different elements, the transmission produces various gear ratios, including reverse. Multiple planetary sets can be combined for more gear ratios. They are compact and provide smooth power transfer.",
    definitionChinese: "自动变速箱中的主要齿轮机构，由太阳轮、行星架及行星齿轮和齿圈组成。通过固定或驱动不同元件，变速箱产生各种齿轮比，包括倒挡。多组行星齿轮可组合产生更多齿轮比。它们结构紧凑，提供平稳的动力传递。",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Planetary_gear_set_schematic.svg",
    youtube: "https://www.youtube.com/watch?v=ARd-Om2VyiE",
    youtubeTitle: "Planetary Gears Explained"
  },
  "tcm": {
    term: "Transmission Control Module (TCM)",
    termChinese: "变速箱控制模块",
    section: "A2",
    definition: "A dedicated computer that manages automatic transmission operation, or a function integrated into the PCM. It receives input from speed sensors, throttle position, and other sensors to determine optimal shift points and torque converter lock-up. It controls shift solenoids and pressure regulation, and stores transmission-specific diagnostic trouble codes.",
    definitionChinese: "管理自动变速箱运行的专用计算机，或集成在PCM中的功能。它接收速度传感器、节气门位置和其他传感器的输入，以确定最佳换挡点和变矩器锁止。它控制换挡电磁阀和压力调节，并存储变速箱特定的故障诊断码。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/42/8-speed_AT_for_Lexus_LS460.jpg",
    youtube: "https://www.youtube.com/watch?v=28TXVoEMtas",
    youtubeTitle: "What is a Transmission Control Module (TCM)?"
  },
  "speed_sensor": {
    term: "Speed Sensor (Input/Output)",
    termChinese: "车速传感器（输入/输出）",
    section: "A2",
    definition: "Magnetic or Hall-effect sensors mounted on the transmission that monitor input shaft speed (turbine speed) and output shaft speed (vehicle speed). The TCM compares these readings to determine actual gear ratio and detect slippage. Faulty speed sensors cause incorrect shifts, speedometer errors, and stored diagnostic trouble codes.",
    definitionChinese: "安装在变速箱上的磁性或霍尔效应传感器，监测输入轴转速（涡轮转速）和输出轴转速（车速）。TCM比较这些读数以确定实际齿轮比和检测打滑。故障的速度传感器导致换挡不正确、车速表误差和存储故障诊断码。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/42/8-speed_AT_for_Lexus_LS460.jpg",
    youtube: "https://www.youtube.com/watch?v=0U3Xq91SrTA",
    youtubeTitle: "Signs of a Bad Transmission Speed Sensor"
  },

  // ===== A3: MANUAL DRIVETRAIN TERMS =====
  "clutch_disc": {
    term: "Clutch Disc",
    termChinese: "离合器片",
    section: "A3",
    definition: "A friction-lined disc that sits between the flywheel and pressure plate in a manual transmission system. When engaged, it transfers engine torque to the transmission input shaft. Springs in the hub absorb torsional vibrations. Worn friction material causes slippage under load. Oil contamination causes grabbing or chatter during engagement.",
    definitionChinese: "位于飞轮和压盘之间的摩擦衬片盘，在手动变速系统中使用。接合时将发动机扭矩传递到变速箱输入轴。轮毂中的弹簧吸收扭转振动。磨损的摩擦材料导致负荷下打滑。机油污染导致接合时抓紧或抖动。",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Pull_type_clutch.jpg",
    youtube: "https://www.youtube.com/watch?v=devo3kdSPQY",
    youtubeTitle: "How a Clutch Works"
  },
  "pressure_plate": {
    term: "Pressure Plate",
    termChinese: "压盘",
    section: "A3",
    definition: "A spring-loaded assembly that clamps the clutch disc against the flywheel to transmit engine power. A diaphragm spring provides the clamping force. When the clutch pedal is pressed, the release bearing pushes on the spring fingers, releasing the disc. Weak or broken spring fingers cause slipping, chatter, or incomplete engagement.",
    definitionChinese: "一种弹簧加载的总成，将离合器片夹紧在飞轮上以传递发动机动力。膜片弹簧提供夹紧力。踩下离合器踏板时，分离轴承推压弹簧指，松开离合器片。弹簧指虚弱或断裂导致打滑、抖动或接合不完全。",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Pull_type_clutch.jpg",
    youtube: "https://www.youtube.com/watch?v=devo3kdSPQY",
    youtubeTitle: "Pressure Plate Function"
  },
  "flywheel": {
    term: "Flywheel",
    termChinese: "飞轮",
    section: "A3",
    definition: "A heavy rotating disc bolted to the crankshaft that provides a smooth friction surface for the clutch disc, stores rotational energy to smooth power pulses, and carries the ring gear for starter engagement. Dual-mass flywheels have internal springs to dampen vibrations. Scored or warped flywheels cause clutch chatter and must be resurfaced or replaced.",
    definitionChinese: "用螺栓固定在曲轴上的重型旋转盘，为离合器片提供光滑的摩擦面，储存旋转能量以平滑动力脉冲，并承载起动机接合的齿圈。双质量飞轮内部有弹簧来减振。刻痕或翘曲的飞轮导致离合器抖动，必须重新研磨或更换。",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Zweimassenschwungrad_und_kupplung_aufgeschnitten.jpg",
    youtube: "https://www.youtube.com/watch?v=devo3kdSPQY",
    youtubeTitle: "Flywheel Function"
  },
  "release_bearing": {
    term: "Release (Throwout) Bearing",
    termChinese: "分离轴承（离合器分离轴承）",
    section: "A3",
    definition: "A bearing that slides along the transmission input shaft and contacts the pressure plate diaphragm spring fingers when the clutch pedal is depressed. It converts the linear motion of the clutch fork into rotational contact with the spinning pressure plate. A worn release bearing produces squealing or grinding noise when the clutch pedal is depressed.",
    definitionChinese: "沿变速箱输入轴滑动的轴承，踩下离合器踏板时接触压盘膜片弹簧指。它将离合器拨叉的直线运动转换为与旋转压盘的旋转接触。磨损的分离轴承在踩下离合器踏板时产生尖叫或磨削噪音。",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Pull_type_clutch.jpg",
    youtube: "https://www.youtube.com/watch?v=devo3kdSPQY",
    youtubeTitle: "Release Bearing Explained"
  },
  "differential": {
    term: "Differential",
    termChinese: "差速器",
    section: "A3",
    definition: "A gear assembly that splits torque between drive wheels while allowing them to rotate at different speeds during turns. The ring and pinion gears provide final drive ratio, while spider gears permit speed differentiation. Limited-slip differentials use clutch packs or viscous couplings to reduce wheel spin when one wheel loses traction.",
    definitionChinese: "在驱动轮之间分配扭矩的齿轮总成，同时允许转弯时车轮以不同速度旋转。主减速齿轮提供最终传动比，差速齿轮允许速度差异。限滑差速器使用离合器片组或粘性联轴器在一个车轮失去抓地力时减少车轮空转。",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Differential_Gear_%28PSF%29.png",
    youtube: "https://www.youtube.com/watch?v=yYAw79386WI",
    youtubeTitle: "How a Differential Works"
  },
  "cv_joint": {
    term: "CV Joint (Constant Velocity Joint)",
    termChinese: "等速万向节",
    section: "A3",
    definition: "A flexible joint used in front-wheel-drive and independent-rear-suspension axle shafts that transmits torque at varying angles while maintaining constant rotational speed. Inner joints accommodate plunge (length changes), while outer joints handle steering angles. A torn CV boot allows grease loss and contamination, causing clicking noises during turns.",
    definitionChinese: "用于前轮驱动和独立后悬架半轴的柔性接头，在不同角度下传递扭矩同时保持恒定的旋转速度。内接头可伸缩（长度变化），外接头处理转向角度。撕裂的防尘套导致润滑脂流失和污染，在转弯时产生咔嗒声。",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/af/TCVJ.jpg",
    youtube: "https://www.youtube.com/watch?v=auQ65qno2Eo",
    youtubeTitle: "How a CV Axle Works"
  },
  "transfer_case": {
    term: "Transfer Case",
    termChinese: "分动箱",
    section: "A3",
    definition: "A gear box in four-wheel-drive and all-wheel-drive vehicles that splits power from the transmission between the front and rear axles. It may include a low-range gear set for off-road use and a center differential or viscous coupling. Common issues include fluid leaks, worn chains, and faulty electronic shift motors.",
    definitionChinese: "四轮驱动和全轮驱动车辆中的齿轮箱，将变速箱的动力分配到前后轴。它可能包括用于越野的低速档齿轮组和中央差速器或粘性联轴器。常见问题包括油液泄漏、链条磨损和电子换挡电机故障。",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Manual_transmission_clutch_First_gear.PNG",
    youtube: "https://www.youtube.com/watch?v=1c81r25VfGU",
    youtubeTitle: "How Does a Transfer Case Work?"
  },
  "universal_joint": {
    term: "Universal Joint (U-Joint)",
    termChinese: "万向节",
    section: "A3",
    definition: "A cross-shaped coupling that connects driveshaft sections and allows power transmission at varying angles between the transmission and differential. U-joints consist of a cross with needle-bearing caps. Worn U-joints cause vibrations at speed and clunking during acceleration or deceleration. They should be inspected for play and lubricated regularly.",
    definitionChinese: "连接传动轴各段的十字形联轴器，允许在变速箱和差速器之间不同角度传递动力。万向节由带有滚针轴承盖的十字组成。磨损的万向节在行驶中产生振动，加速或减速时发出异响。应定期检查间隙并润滑。",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Universal_joint.gif",
    youtube: "https://www.youtube.com/watch?v=LCMZz6YhbOQ",
    youtubeTitle: "Understanding Universal Joint"
  },
  "synchronizer": {
    term: "Synchronizer",
    termChinese: "同步器",
    section: "A3",
    definition: "A device in a manual transmission that matches the speed of the gear being selected with the speed of the input shaft, enabling smooth shifting without grinding. It consists of a hub sleeve, blocking ring, and friction surfaces. Worn synchronizers cause grinding when shifting into the affected gear, especially when cold.",
    definitionChinese: "手动变速箱中的装置，使被选齿轮的速度与输入轴速度匹配，实现平稳换挡而不产生打齿。它由同步毂套、锁环和摩擦面组成。磨损的同步器在换入受影响的档位时产生磨削声，特别是冷车时。",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Manual_transmission_clutch_First_gear.PNG",
    youtube: "https://www.youtube.com/watch?v=wCu9W9xNwtI",
    youtubeTitle: "Synchronizers Explained"
  },

  // ===== A4: SUSPENSION & STEERING TERMS =====
  "power_steering_pump": {
    term: "Power Steering Pump",
    termChinese: "助力转向泵",
    section: "A4",
    definition: "A belt-driven or electric hydraulic pump that provides pressurized fluid for power-assisted steering. It contains a flow control valve to maintain consistent assist regardless of engine speed. Common problems include whining from air in the fluid, leaking seals, and worn pump vanes. Electric power steering systems use an electric motor instead.",
    definitionChinese: "由皮带驱动或电动的液压泵，为助力转向提供加压油液。它包含流量控制阀以保持不同发动机转速下一致的助力。常见问题包括油液中有空气导致的异响、密封件泄漏和泵叶磨损。电动助力转向系统使用电动机替代。",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/68/Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=o2kyozK9GII",
    youtubeTitle: "Car Tech 101: Power Steering Explained"
  },
  "rack_and_pinion": {
    term: "Rack and Pinion Steering",
    termChinese: "齿轮齿条式转向器",
    section: "A4",
    definition: "A steering gear type where a pinion gear on the steering shaft meshes with a flat toothed rack. Rotating the pinion moves the rack left or right, which pushes and pulls the tie rods to steer the wheels. Power-assisted versions use hydraulic pressure or an electric motor to reduce steering effort. Inner tie rod ends connect to the rack.",
    definitionChinese: "一种转向器类型，转向轴上的小齿轮与平齿条啮合。旋转小齿轮使齿条左右移动，推拉横拉杆来转向车轮。助力版本使用液压或电动机来减少转向力。内横拉杆接头连接到齿条上。",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/68/Rack_and_pinion_animation.gif",
    youtube: "https://www.youtube.com/watch?v=o2kyozK9GII",
    youtubeTitle: "Rack and Pinion Steering Explained"
  },
  "tie_rod": {
    term: "Tie Rod End",
    termChinese: "横拉杆球头",
    section: "A4",
    definition: "A ball-and-socket joint connecting the steering gear to the steering knuckle. Inner tie rods connect to the rack; outer tie rods connect to the knuckle. They transmit steering input to turn the wheels and are adjustable for toe alignment. Worn tie rod ends cause loose steering, wandering, and uneven tire wear. They are a critical safety component.",
    definitionChinese: "连接转向器和转向节的球窝接头。内横拉杆连接到齿条；外横拉杆连接到转向节。它们传递转向输入以转动车轮，并可调整前束角。磨损的横拉杆球头导致转向松旷、跑偏和轮胎不均匀磨损。它们是关键的安全部件。",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Ball_joint_cross_section_%28from_English_Wikipedia_to_be_used_in_other_languages%29.jpg",
    youtube: "https://www.youtube.com/watch?v=brI2feYiEi8",
    youtubeTitle: "How to Tell if Your Tie Rod is Bad"
  },
  "ball_joint": {
    term: "Ball Joint",
    termChinese: "球头接头",
    section: "A4",
    definition: "A spherical bearing that connects the control arm to the steering knuckle, allowing both up-down suspension travel and left-right steering movement. Load-carrying ball joints support vehicle weight and are checked for wear by measuring axial play. Excessive wear causes clunking, wandering, and uneven tire wear. A failed ball joint can cause loss of steering control.",
    definitionChinese: "连接控制臂和转向节的球形轴承，允许悬架上下运动和左右转向运动。承载式球头支撑车辆重量，通过测量轴向间隙来检查磨损。过度磨损导致异响、跑偏和轮胎不均匀磨损。球头失效可导致失去转向控制。",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Ball_joint_cross_section_%28from_English_Wikipedia_to_be_used_in_other_languages%29.jpg",
    youtube: "https://www.youtube.com/watch?v=s-VojQUIC20",
    youtubeTitle: "When Should You Replace Your Ball Joints?"
  },
  "strut": {
    term: "MacPherson Strut",
    termChinese: "麦弗逊支柱",
    section: "A4",
    definition: "A structural suspension component that combines a shock absorber, coil spring, and upper mount into one assembly. The strut serves as the upper pivot point for the steering knuckle. A strut bearing/mount allows the strut to rotate with steering input. Worn struts cause bouncing, poor handling, and cupped tire wear. The spring must be safely compressed for replacement.",
    definitionChinese: "一种结构性悬架部件，将减震器、螺旋弹簧和上支座组合为一体。支柱作为转向节的上枢轴点。支柱轴承/支座允许支柱随转向输入旋转。磨损的支柱导致颠簸、操控不良和轮胎不规则磨损。更换时弹簧必须安全压缩。",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Mcpherson_strut.jpg",
    youtube: "https://www.youtube.com/watch?v=X6JejXjGQiQ",
    youtubeTitle: "MacPherson Strut Suspension - 3D Animation"
  },
  "shock_absorber": {
    term: "Shock Absorber",
    termChinese: "减震器",
    section: "A4",
    definition: "A hydraulic damper that controls spring oscillation and body movement by converting kinetic energy to heat through fluid forced through valving. They do not support vehicle weight. Worn shocks cause excessive bouncing, poor handling, longer stopping distances, and cupped tire wear. A bounce test or visual inspection for leaks helps diagnose worn shocks.",
    definitionChinese: "通过迫使油液通过阀门将动能转化为热能来控制弹簧振荡和车身运动的液压阻尼器。它们不支撑车辆重量。磨损的减震器导致过度颠簸、操控不良、制动距离增加和轮胎杯状磨损。弹跳测试或目视检查泄漏有助于诊断。",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Mcpherson_strut.jpg",
    youtube: "https://www.youtube.com/watch?v=X6JejXjGQiQ",
    youtubeTitle: "How Shock Absorbers Work"
  },
  "wheel_alignment": {
    term: "Wheel Alignment",
    termChinese: "车轮定位",
    section: "A4",
    definition: "The adjustment of suspension angles to manufacturer specifications for proper tire contact with the road. The three primary angles are camber (tire lean inward/outward), caster (steering axis tilt), and toe (parallel alignment of tires front to back). Incorrect alignment causes uneven tire wear, pulling, and poor handling.",
    definitionChinese: "将悬架角度调整到制造商规格，使轮胎与路面正确接触。三个主要角度是外倾角（轮胎内/外倾斜）、后倾角（转向轴倾斜）和前束（轮胎前后平行对齐）。不正确的定位导致轮胎不均匀磨损、跑偏和操控不良。",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Cambe_angle.svg",
    youtube: "https://www.youtube.com/watch?v=Zs2-mdUFnrs",
    youtubeTitle: "Understanding Wheel Alignment: Camber, Caster, Toe"
  },
  "camber": {
    term: "Camber",
    termChinese: "外倾角",
    section: "A4",
    definition: "The inward or outward tilt of the tire when viewed from the front of the vehicle. Positive camber means the top tilts outward; negative means it tilts inward. Excessive camber causes wear on one side of the tire. Camber is affected by worn ball joints, bent spindles, or shifted subframes. Most vehicles specify slight negative camber for handling.",
    definitionChinese: "从车辆正面观察轮胎的内倾或外倾。正外倾角表示顶部向外倾斜；负外倾角表示向内倾斜。过大的外倾角导致轮胎单侧磨损。外倾角受磨损的球头、弯曲的转向节或移位的副车架影响。大多数车辆规定轻微负外倾角以改善操控。",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Cambe_angle.svg",
    youtube: "https://www.youtube.com/watch?v=Zs2-mdUFnrs",
    youtubeTitle: "Camber Angle Explained"
  },
  "caster": {
    term: "Caster",
    termChinese: "后倾角",
    section: "A4",
    definition: "The angle of the steering axis when viewed from the side of the vehicle. Positive caster tilts the upper pivot point rearward, promoting straight-line stability and steering return-to-center. Unequal caster side-to-side causes the vehicle to pull toward the side with less positive caster. Caster does not directly cause tire wear.",
    definitionChinese: "从车辆侧面观察的转向轴角度。正后倾角使上枢轴点向后倾斜，促进直线稳定性和转向自动回正。两侧后倾角不等导致车辆向后倾角较小的一侧跑偏。后倾角不直接导致轮胎磨损。",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Cambe_angle.svg",
    youtube: "https://www.youtube.com/watch?v=Zs2-mdUFnrs",
    youtubeTitle: "Caster Angle Explained"
  },
  "toe": {
    term: "Toe Alignment",
    termChinese: "前束",
    section: "A4",
    definition: "The comparison of distances between the front and rear of the tires on the same axle. Toe-in means the fronts of the tires are closer together; toe-out means they are farther apart. Incorrect toe is the most common cause of tire wear from alignment issues, producing a feathered wear pattern across the tread.",
    definitionChinese: "同一轴上轮胎前端和后端距离的比较。前束内表示轮胎前端距离更近；前束外表示距离更远。不正确的前束是定位问题中最常见的轮胎磨损原因，在胎面上产生羽毛状磨损花纹。",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Cambe_angle.svg",
    youtube: "https://www.youtube.com/watch?v=Zs2-mdUFnrs",
    youtubeTitle: "Toe Alignment Explained"
  },
  "control_arm": {
    term: "Control Arm",
    termChinese: "控制臂",
    section: "A4",
    definition: "A suspension link that connects the steering knuckle to the vehicle frame, allowing vertical wheel movement while maintaining proper wheel position. Control arms use bushings at the frame end and ball joints at the knuckle end. Worn bushings cause clunking, vibrations, and alignment changes. Upper and lower control arms are used in double-wishbone suspension.",
    definitionChinese: "连接转向节和车架的悬架连杆，允许车轮垂直运动同时保持正确的车轮位置。控制臂在车架端使用衬套，在转向节端使用球头。磨损的衬套导致异响、振动和定位变化。双叉臂悬架使用上下控制臂。",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Mcpherson_strut.jpg",
    youtube: "https://www.youtube.com/watch?v=X6JejXjGQiQ",
    youtubeTitle: "Control Arm Function"
  },
  "sway_bar": {
    term: "Sway Bar (Stabilizer Bar)",
    termChinese: "稳定杆",
    section: "A4",
    definition: "A torsion bar connecting left and right suspension through end links to reduce body roll during cornering. When one side compresses, the bar twists and transfers force to the opposite side, keeping the vehicle more level. Worn or broken sway bar end links cause clunking over bumps and increased body lean during turns.",
    definitionChinese: "通过端连杆连接左右悬架的扭力杆，减少转弯时的车身侧倾。当一侧压缩时，杆扭转并将力传递到另一侧，使车辆保持更平稳。磨损或断裂的稳定杆端连杆导致过减速带时异响，转弯时车身侧倾增加。",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Mcpherson_strut.jpg",
    youtube: "https://www.youtube.com/watch?v=X6JejXjGQiQ",
    youtubeTitle: "Sway Bar Explained"
  },

  // ===== A5: BRAKE SYSTEM TERMS =====
  "master_cylinder": {
    term: "Master Cylinder",
    termChinese: "制动主缸",
    section: "A5",
    definition: "A hydraulic pump operated by the brake pedal that converts mechanical force into hydraulic pressure to actuate the brakes. Dual-piston designs create two independent circuits for safety. Internal seal bypass causes a sinking pedal with no external leaks. The master cylinder reservoir allows fluid expansion and provides a visual check for fluid level.",
    definitionChinese: "由制动踏板操作的液压泵，将机械力转化为液压以驱动制动器。双活塞设计创建两个独立的液压回路以确保安全。内部密封件旁通导致踏板下沉但无外部泄漏。主缸储液罐允许油液膨胀并提供液位目视检查。",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Disc_brake_car.jpg",
    youtube: "https://www.youtube.com/watch?v=Xk2zGvKfrhc",
    youtubeTitle: "Master Cylinder - How It Works! (Animation)"
  },
  "brake_caliper": {
    term: "Brake Caliper",
    termChinese: "制动卡钳",
    section: "A5",
    definition: "A hydraulic clamping device that squeezes brake pads against the rotor to create friction for stopping. Floating calipers slide on pins to center over the rotor; fixed calipers have pistons on both sides. A sticking caliper causes uneven pad wear, pulling, and overheating. Caliper slide pins must be cleaned and lubricated during pad replacement.",
    definitionChinese: "将制动片夹紧在制动盘上以产生摩擦力来制动的液压夹紧装置。浮动卡钳在导销上滑动以对中在制动盘上；固定卡钳两侧都有活塞。卡钳卡滞导致刹车片不均匀磨损、跑偏和过热。更换刹车片时必须清洁和润滑导销。",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Disc_brake_car.jpg",
    youtube: "https://www.youtube.com/watch?v=DSyJ3iM2XkU",
    youtubeTitle: "How Brake Calipers Work"
  },
  "brake_rotor": {
    term: "Brake Rotor (Disc)",
    termChinese: "制动盘",
    section: "A5",
    definition: "A flat metal disc attached to the wheel hub that the brake pads clamp against to create stopping friction. Rotors must be measured for thickness, parallelism, and lateral runout. Rotors below minimum thickness must be replaced. Excessive runout causes brake pulsation. Vented rotors have internal fins for cooling and are used on front brakes.",
    definitionChinese: "连接到轮毂上的扁平金属盘，制动片夹紧其上产生制动摩擦力。必须测量制动盘的厚度、平行度和径向跳动。低于最小厚度的制动盘必须更换。过大的跳动导致制动脉动。通风式制动盘有内部散热片用于冷却，常用于前制动器。",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Disc_brake_car.jpg",
    youtube: "https://www.youtube.com/watch?v=DSyJ3iM2XkU",
    youtubeTitle: "Brake Rotor Service"
  },
  "brake_drum": {
    term: "Brake Drum",
    termChinese: "制动鼓",
    section: "A5",
    definition: "A cylindrical casting attached to the wheel hub with an internal friction surface against which brake shoes are pressed by wheel cylinders. Drums are measured for inside diameter; an oversized drum must be replaced. Drum brakes are commonly used on rear axles. They are self-energizing, meaning the rotation helps pull the leading shoe tighter.",
    definitionChinese: "连接到轮毂的圆柱形铸件，内摩擦面供制动蹄由轮缸推压。鼓需测量内径；超大的制动鼓必须更换。鼓式制动器常用于后轴。它们具有自增力作用，即旋转帮助将前蹄拉得更紧。",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Drum_brake.jpg",
    youtube: "https://www.youtube.com/watch?v=3fG_3IRSiIk",
    youtubeTitle: "How Drum Brakes Work"
  },
  "brake_fluid": {
    term: "Brake Fluid (DOT 3/4/5)",
    termChinese: "制动液",
    section: "A5",
    definition: "Hydraulic fluid that transfers pedal force to the wheel brakes. DOT 3 and DOT 4 are glycol-based and hygroscopic (absorb moisture), which lowers boiling point over time. DOT 5 is silicone-based and not hygroscopic but cannot be mixed with glycol fluids. Contaminated or moisture-laden fluid causes brake fade and should be replaced periodically.",
    definitionChinese: "将踏板力传递到车轮制动器的液压油。DOT 3和DOT 4是乙二醇基的，具有吸湿性（吸收水分），随时间降低沸点。DOT 5是硅基的，不吸湿但不能与乙二醇基油液混合。受污染或含水的制动液导致制动衰退，应定期更换。",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Disc_brake_car.jpg",
    youtube: "https://www.youtube.com/watch?v=M6UrH_mDBrU",
    youtubeTitle: "Brake Fluid Basics: DOT 3, 4, 5, and 5.1 Explained"
  },
  "abs": {
    term: "Anti-Lock Braking System (ABS)",
    termChinese: "防抱死制动系统",
    section: "A5",
    definition: "An electronic system that prevents wheel lockup during hard braking by rapidly modulating brake pressure to individual wheels. Wheel speed sensors detect deceleration rates, and the ABS module commands hydraulic valves to release, hold, or reapply pressure. ABS maintains steering control during emergency stops but does not necessarily shorten stopping distance.",
    definitionChinese: "一种电子系统，通过快速调节各车轮的制动压力来防止紧急制动时车轮锁死。轮速传感器检测减速率，ABS模块命令液压阀释放、保持或重新施加压力。ABS在紧急停车时保持转向控制，但不一定缩短制动距离。",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Disc_brake_car.jpg",
    youtube: "https://www.youtube.com/watch?v=hwwXukJaTlM",
    youtubeTitle: "How ABS (Anti-Lock Brakes) Work"
  },
  "brake_booster": {
    term: "Brake Booster (Power Brake)",
    termChinese: "制动助力器",
    section: "A5",
    definition: "A vacuum or hydraulic assist device between the brake pedal and master cylinder that multiplies the driver's pedal force. Vacuum boosters use engine intake manifold vacuum acting on a large diaphragm. A failed booster causes a hard brake pedal requiring excessive force to stop. A hissing sound indicates a vacuum leak in the booster.",
    definitionChinese: "位于制动踏板和主缸之间的真空或液压助力装置，倍增驾驶员的踏板力。真空助力器利用发动机进气歧管真空作用于大膜片。助力器失效导致制动踏板很硬，需要过大的力来停车。嘶嘶声表示助力器中有真空泄漏。",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Disc_brake_car.jpg",
    youtube: "https://www.youtube.com/watch?v=wbTUvp-tD5M",
    youtubeTitle: "Vacuum Brake Booster - How It Works! (Animation)"
  },
  "wheel_cylinder": {
    term: "Wheel Cylinder",
    termChinese: "轮缸",
    section: "A5",
    definition: "A small hydraulic cylinder inside drum brakes that pushes the brake shoes outward against the drum when brake pressure is applied. Each cylinder has two pistons with cup seals. Leaking wheel cylinders cause brake fluid loss, contaminate the shoes, reduce braking effectiveness, and require replacement along with the contaminated shoes.",
    definitionChinese: "鼓式制动器内的小型液压缸，施加制动压力时将制动蹄向外推压制动鼓。每个轮缸有两个带杯形密封件的活塞。泄漏的轮缸导致制动液损失、污染制动蹄、降低制动效能，需要连同受污染的制动蹄一起更换。",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Drum_brake.jpg",
    youtube: "https://www.youtube.com/watch?v=N653wVTXMzA",
    youtubeTitle: "Wheel Cylinder Replacement"
  },
  "proportioning_valve": {
    term: "Proportioning Valve",
    termChinese: "比例阀",
    section: "A5",
    definition: "A hydraulic valve that reduces brake pressure to the rear wheels during heavy braking to prevent rear wheel lockup, which could cause the vehicle to spin. As weight shifts forward during braking, the rear tires have less traction. Modern vehicles may use electronic brake distribution through the ABS module instead of a mechanical proportioning valve.",
    definitionChinese: "在重度制动时减少后轮制动压力以防止后轮锁死的液压阀，后轮锁死可能导致车辆旋转。制动时重量前移，后轮抓地力减小。现代车辆可能通过ABS模块使用电子制动力分配来代替机械比例阀。",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Disc_brake_car.jpg",
    youtube: "https://www.youtube.com/watch?v=1oahuttkEws",
    youtubeTitle: "What Does a Proportioning Valve Do?"
  },
  "parking_brake": {
    term: "Parking Brake",
    termChinese: "驻车制动器",
    section: "A5",
    definition: "A mechanical brake system that holds the vehicle stationary when parked, independent of the hydraulic service brakes. It typically uses cables to apply rear brake shoes or caliper pistons. Some modern vehicles use electric parking brakes with motor-driven calipers. Regular adjustment ensures proper holding force and prevents cable stretching or seizure.",
    definitionChinese: "一种机械制动系统，在停车时独立于液压制动器将车辆固定不动。通常使用钢缆来施加后制动蹄或卡钳活塞。一些现代车辆使用电机驱动的电子驻车制动。定期调整确保适当的固定力，防止钢缆拉伸或卡滞。",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Drum_brake.jpg",
    youtube: "https://www.youtube.com/watch?v=PbolUKIcUF4",
    youtubeTitle: "How Does My Parking Brake Work?"
  },
  "brake_bleeding": {
    term: "Brake Bleeding",
    termChinese: "制动系统排气",
    section: "A5",
    definition: "The process of removing air from the hydraulic brake system to restore a firm pedal. Air is compressible and causes a spongy pedal. Methods include manual bleeding with a helper, vacuum bleeding, pressure bleeding, and gravity bleeding. The correct bleeding sequence starts at the wheel farthest from the master cylinder and works closer.",
    definitionChinese: "从液压制动系统中排出空气以恢复坚实踏板感的过程。空气可压缩，导致踏板发软。方法包括助手辅助手动排气、真空排气、压力排气和重力排气。正确的排气顺序从离主缸最远的车轮开始，逐步靠近。",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Disc_brake_car.jpg",
    youtube: "https://www.youtube.com/watch?v=lPwM2vn3bT0",
    youtubeTitle: "How to Bleed Disc Brakes"
  },

  // ===== A6: ELECTRICAL SYSTEMS TERMS =====
  "ohms_law": {
    term: "Ohm's Law",
    termChinese: "欧姆定律",
    section: "A6",
    definition: "The fundamental electrical law stating that current (amps) equals voltage divided by resistance (I = V/R). It also means voltage equals current times resistance (V = IR), and power equals voltage times current (P = VI). This law is essential for diagnosing automotive electrical circuits, predicting current flow, and identifying faulty components.",
    definitionChinese: "基本电学定律，指出电流（安培）等于电压除以电阻（I = V/R）。也意味着电压等于电流乘以电阻（V = IR），功率等于电压乘以电流（P = VI）。该定律对于诊断汽车电路、预测电流流量和识别故障部件至关重要。",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/04/Fluke_87_III_True_RMS_Multimeter.jpg",
    youtube: "https://www.youtube.com/watch?v=HsLLq6Rm5tU",
    youtubeTitle: "Ohm's Law for Technicians"
  },
  "dmm": {
    term: "Digital Multimeter (DMM)",
    termChinese: "数字万用表",
    section: "A6",
    definition: "A versatile electrical diagnostic tool that measures voltage, current, and resistance. It can test battery voltage, check sensor signals, measure circuit resistance, and verify continuity. High-impedance (10 megohm) models are required for automotive use to avoid damaging sensitive electronic circuits. Always select the correct function and range before testing.",
    definitionChinese: "一种多功能电气诊断工具，可测量电压、电流和电阻。可测试电池电压、检查传感器信号、测量电路电阻和验证导通性。汽车使用必须采用高阻抗（10兆欧）型号以避免损坏敏感电子电路。测试前始终选择正确的功能和量程。",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/04/Fluke_87_III_True_RMS_Multimeter.jpg",
    youtube: "https://www.youtube.com/watch?v=c9KNAIjoEYs",
    youtubeTitle: "Multimeter Basics for Automotive Use | Hagerty DIY"
  },
  "battery": {
    term: "Automotive Battery",
    termChinese: "汽车蓄电池",
    section: "A6",
    definition: "A lead-acid electrochemical device that stores electrical energy and provides power for starting, lighting, and ignition. A fully charged 12-volt battery reads about 12.6V. It provides high current for cranking and stabilizes voltage for electronic systems. Battery health is assessed by voltage, specific gravity, and load testing to determine cold cranking capacity.",
    definitionChinese: "一种铅酸电化学装置，储存电能并为启动、照明和点火提供电力。充满电的12伏蓄电池读数约为12.6V。它为起动提供大电流并稳定电子系统电压。通过电压、比重和负载测试评估电池健康状况以确定冷启动能力。",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/12_Volts_Battery_for_vehicles_and_UPS.jpg",
    youtube: "https://www.youtube.com/watch?v=VQAB3lVpUrY",
    youtubeTitle: "Car Battery Health Testing"
  },
  "alternator": {
    term: "Alternator",
    termChinese: "交流发电机",
    section: "A6",
    definition: "An engine-driven generator that converts mechanical energy to electrical energy to charge the battery and power the vehicle's electrical systems while running. It produces AC current that is rectified to DC by internal diodes. Normal output is 13.5-14.5V. A voltage regulator controls output. Failing alternators cause dim lights, dead batteries, and warning light illumination.",
    definitionChinese: "由发动机驱动的发电机，将机械能转化为电能，在运行时为蓄电池充电并为车辆电气系统供电。它产生交流电，由内部二极管整流为直流电。正常输出为13.5-14.5V。电压调节器控制输出。失效的发电机导致灯光暗淡、电池耗尽和警告灯亮起。",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Alternator_%28cut-away%29_%2801%29.JPG",
    youtube: "https://www.youtube.com/watch?v=jdSKlg80DjU",
    youtubeTitle: "How Alternators Work - Automotive Electricity Generator"
  },
  "starter_motor": {
    term: "Starter Motor",
    termChinese: "起动马达",
    section: "A6",
    definition: "A powerful electric motor that cranks the engine for starting by spinning the flywheel through a small pinion gear. The starter solenoid engages the drive gear and switches high current from the battery. A typical starter draws 150-250 amps during cranking. Slow cranking, clicking, or grinding can indicate starter motor, solenoid, or circuit faults.",
    definitionChinese: "通过小齿轮旋转飞轮来起动发动机的大功率电动机。起动继电器接合驱动齿轮并从蓄电池切换大电流。典型的起动马达在起动时消耗150-250安培。缓慢起动、咔嗒声或磨削声可能表明起动马达、继电器或电路故障。",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Automobile_starter.JPG",
    youtube: "https://www.youtube.com/watch?v=kFsl5r34lCI",
    youtubeTitle: "How an Engine Starter Motor Works"
  },
  "relay": {
    term: "Relay",
    termChinese: "继电器",
    section: "A6",
    definition: "An electromagnetic switch that allows a low-current control circuit to switch a high-current load circuit. When the coil is energized, it magnetically pulls a contact to close the load circuit. Relays protect sensitive switches and PCM outputs from high current. Common automotive relays have four or five terminals: coil, common, normally open, and sometimes normally closed.",
    definitionChinese: "一种电磁开关，允许低电流控制电路切换高电流负载电路。线圈通电时磁力拉动触点闭合负载电路。继电器保护敏感开关和PCM输出免受大电流影响。常见的汽车继电器有四个或五个端子：线圈、公共、常开，有时还有常闭。",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Electrical_fuses%2C_blade_type.svg",
    youtube: "https://www.youtube.com/watch?v=uUSxo-CCLR8",
    youtubeTitle: "The Automotive Relay Explained"
  },
  "fuse": {
    term: "Fuse",
    termChinese: "保险丝",
    section: "A6",
    definition: "A protective device containing a thin conductor that melts and opens the circuit when current exceeds its rating, preventing wire damage and fires. Fuses are rated in amps and must be replaced with the same rating. A blown fuse indicates an overcurrent condition. A fuse that repeatedly blows indicates a short circuit that must be diagnosed and repaired.",
    definitionChinese: "一种保护装置，内含细导体，当电流超过额定值时熔断并断开电路，防止电线损坏和火灾。保险丝以安培为单位额定，必须用相同额定值的更换。熔断的保险丝表示过电流状况。反复熔断的保险丝表示存在必须诊断和修复的短路。",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Electrical_fuses%2C_blade_type.svg",
    youtube: "https://www.youtube.com/watch?v=uUSxo-CCLR8",
    youtubeTitle: "Automotive Fuses Explained"
  },
  "series_circuit": {
    term: "Series Circuit",
    termChinese: "串联电路",
    section: "A6",
    definition: "An electrical circuit where components are connected end-to-end, forming a single path for current flow. Total resistance equals the sum of all resistances. Current is the same through all components, but voltage divides across them. If one component fails open, the entire circuit stops working, like old-style Christmas lights.",
    definitionChinese: "电气元件首尾相连的电路，形成单一电流通路。总电阻等于所有电阻之和。电流通过所有元件时相同，但电压在各元件上分配。如果一个元件开路，整个电路停止工作，类似旧式圣诞灯串。",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/04/Fluke_87_III_True_RMS_Multimeter.jpg",
    youtube: "https://www.youtube.com/watch?v=HsLLq6Rm5tU",
    youtubeTitle: "Series Circuits Explained"
  },
  "parallel_circuit": {
    term: "Parallel Circuit",
    termChinese: "并联电路",
    section: "A6",
    definition: "An electrical circuit where components are connected across the same two points, creating multiple paths for current. Voltage is equal across all branches, but current divides among them. Total resistance is less than the smallest individual resistance. If one branch fails, the others continue to operate. Most automotive lighting circuits are wired in parallel.",
    definitionChinese: "电气元件连接在相同两点之间的电路，形成多条电流通路。所有支路电压相等，但电流分配。总电阻小于最小的单个电阻。如果一条支路失效，其他支路继续工作。大多数汽车照明电路采用并联接线。",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/04/Fluke_87_III_True_RMS_Multimeter.jpg",
    youtube: "https://www.youtube.com/watch?v=HsLLq6Rm5tU",
    youtubeTitle: "Parallel Circuits Explained"
  },
  "wiring_diagram": {
    term: "Wiring Diagram",
    termChinese: "电路图",
    section: "A6",
    definition: "A schematic drawing that shows the electrical connections, wire colors, connector pin numbers, and component locations in a vehicle circuit. Technicians use wiring diagrams to trace circuits for diagnosis. Standard symbols represent switches, relays, grounds, and other components. Understanding wiring diagrams is essential for efficient electrical troubleshooting.",
    definitionChinese: "显示车辆电路中电气连接、线色、连接器引脚号和部件位置的原理图。技术人员使用电路图追踪电路进行诊断。标准符号代表开关、继电器、接地和其他部件。理解电路图对于高效的电气故障排除至关重要。",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Electrical_fuses%2C_blade_type.svg",
    youtube: "https://www.youtube.com/watch?v=h3FsEV49CvM",
    youtubeTitle: "How To Read and Use a Wiring Diagram"
  },
  "can_bus": {
    term: "CAN Bus (Controller Area Network)",
    termChinese: "CAN总线（控制器局域网）",
    section: "A6",
    definition: "A two-wire communication network that allows vehicle modules to share data without dedicated wiring for each signal. Messages are broadcast on twisted-pair wires at high speed. All connected modules can read any message. CAN bus problems cause multiple system failures and communication DTCs. Diagnosis requires checking termination resistors and signal waveforms.",
    definitionChinese: "一种双线通信网络，允许车辆模块共享数据而无需为每个信号单独布线。消息在双绞线上高速广播。所有连接的模块都可以读取任何消息。CAN总线问题导致多个系统故障和通信故障码。诊断需要检查终端电阻和信号波形。",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Electrical_fuses%2C_blade_type.svg",
    youtube: "https://www.youtube.com/watch?v=FqLDpHsxvf8",
    youtubeTitle: "CAN Bus Explained - A Simple Intro"
  },
  "ground_circuit": {
    term: "Ground Circuit",
    termChinese: "接地电路",
    section: "A6",
    definition: "The return path for electrical current back to the battery negative terminal, typically through the vehicle body and engine block. Good ground connections are essential for proper circuit operation. Corroded, loose, or missing ground straps cause erratic electrical behavior, dim lights, and communication errors between modules.",
    definitionChinese: "电流返回蓄电池负极的回路，通常通过车身和发动机缸体。良好的接地连接对电路正常工作至关重要。腐蚀、松动或缺失的接地线导致电气行为不稳定、灯光暗淡和模块之间通信错误。",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/04/Fluke_87_III_True_RMS_Multimeter.jpg",
    youtube: "https://www.youtube.com/watch?v=Swz_LSU4-pk",
    youtubeTitle: "How to Test Your Car for Ground Faults"
  },

  // ===== A7: HVAC TERMS =====
  "refrigerant": {
    term: "Refrigerant (R-134a / R-1234yf)",
    termChinese: "制冷剂",
    section: "A7",
    definition: "A chemical compound used in the A/C system that absorbs heat by changing from liquid to gas in the evaporator and releases heat by changing from gas to liquid in the condenser. R-134a is the most common type, while newer R-1234yf has lower global warming potential. Each requires dedicated recovery equipment and cannot be mixed.",
    definitionChinese: "空调系统中使用的化合物，通过在蒸发器中从液态变为气态吸收热量，在冷凝器中从气态变为液态释放热量。R-134a是最常见的类型，较新的R-1234yf全球变暖潜值更低。每种需要专用回收设备，不能混合使用。",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Vapor_Compression_Cycle.png",
    youtube: "https://www.youtube.com/watch?v=m9WVVmTTSYM",
    youtubeTitle: "R-134a vs R-1234yf: What's the Difference?"
  },
  "compressor": {
    term: "A/C Compressor",
    termChinese: "空调压缩机",
    section: "A7",
    definition: "The pump in the A/C system that pressurizes refrigerant gas from the evaporator and sends it to the condenser. It is driven by the engine via a belt and electromagnetic clutch (or variable displacement). Common failures include clutch bearing noise, internal valve damage, and seized compressor. It requires proper oil lubrication circulated with the refrigerant.",
    definitionChinese: "空调系统中的泵，将来自蒸发器的低压制冷剂气体加压并送至冷凝器。由发动机通过皮带和电磁离合器驱动（或变排量式）。常见故障包括离合器轴承噪音、内部阀门损坏和压缩机卡死。需要随制冷剂循环的适当油液润滑。",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Vapor_Compression_Cycle.png",
    youtube: "https://www.youtube.com/watch?v=ItvfKv0iRPY",
    youtubeTitle: "Fixed vs Variable Displacement A/C Compressors"
  },
  "condenser": {
    term: "Condenser",
    termChinese: "冷凝器",
    section: "A7",
    definition: "A heat exchanger located in front of the radiator that removes heat from the high-pressure refrigerant gas, causing it to condense into a high-pressure liquid. Air flowing through the condenser fins carries away the heat. A restricted or damaged condenser causes high head pressure and reduced cooling performance. Debris blockage is a common issue.",
    definitionChinese: "位于散热器前方的热交换器，从高压制冷剂气体中去除热量，使其冷凝为高压液体。流过冷凝器翅片的空气带走热量。受限或损坏的冷凝器导致高压侧压力过高和冷却性能降低。碎片堵塞是常见问题。",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Automobile_radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=ItvfKv0iRPY",
    youtubeTitle: "A/C Condenser Function"
  },
  "evaporator": {
    term: "Evaporator",
    termChinese: "蒸发器",
    section: "A7",
    definition: "A heat exchanger located inside the HVAC housing that absorbs heat from cabin air as low-pressure liquid refrigerant evaporates into gas. The blower fan pushes cabin air across the evaporator fins, cooling and dehumidifying it. A leaking evaporator requires dashboard removal for replacement. Moisture collected on the evaporator drains through a tube.",
    definitionChinese: "位于HVAC壳体内的热交换器，当低压液态制冷剂蒸发为气体时从座舱空气中吸收热量。鼓风机将座舱空气吹过蒸发器翅片进行冷却和除湿。泄漏的蒸发器需要拆卸仪表板才能更换。蒸发器上收集的水分通过排水管排出。",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Vapor_Compression_Cycle.png",
    youtube: "https://www.youtube.com/watch?v=ItvfKv0iRPY",
    youtubeTitle: "Evaporator Core Function"
  },
  "txv": {
    term: "Thermal Expansion Valve (TXV)",
    termChinese: "热力膨胀阀",
    section: "A7",
    definition: "A metering device that controls refrigerant flow into the evaporator based on evaporator outlet temperature and pressure. It maintains proper superheat to ensure efficient cooling and prevent liquid refrigerant from reaching the compressor. A stuck or clogged TXV causes either no cooling or intermittent cooling and abnormal system pressures.",
    definitionChinese: "根据蒸发器出口温度和压力控制进入蒸发器的制冷剂流量的计量装置。它保持适当的过热度以确保高效冷却并防止液态制冷剂到达压缩机。卡住或堵塞的膨胀阀导致无制冷或间歇性制冷，系统压力异常。",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Vapor_Compression_Cycle.png",
    youtube: "https://www.youtube.com/watch?v=oSLOHCOw3yg",
    youtubeTitle: "How TXV Works - Thermostatic Expansion Valve"
  },
  "receiver_drier": {
    term: "Receiver/Drier",
    termChinese: "储液干燥器",
    section: "A7",
    definition: "A canister in the high-pressure side of the A/C system (TXV systems) that stores liquid refrigerant, removes moisture using a desiccant, and filters debris. It should be replaced whenever the system is opened to the atmosphere. A saturated desiccant allows moisture to freeze at the TXV, causing intermittent cooling loss.",
    definitionChinese: "位于空调系统高压侧（膨胀阀系统）的罐体，储存液态制冷剂，使用干燥剂去除水分并过滤杂质。每当系统打开暴露在大气中时应更换。饱和的干燥剂允许水分在膨胀阀处结冰，导致间歇性制冷失效。",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Vapor_Compression_Cycle.png",
    youtube: "https://www.youtube.com/watch?v=ItvfKv0iRPY",
    youtubeTitle: "Receiver Drier Function"
  },
  "accumulator": {
    term: "Accumulator",
    termChinese: "储液器",
    section: "A7",
    definition: "A canister on the low-pressure side of the A/C system (orifice tube systems) that stores excess refrigerant, removes moisture with a desiccant, and prevents liquid from reaching the compressor. It contains a mesh screen to filter debris. Like the receiver/drier, it should be replaced when the system is opened for service.",
    definitionChinese: "位于空调系统低压侧（孔管系统）的罐体，储存多余的制冷剂，用干燥剂去除水分，防止液体到达压缩机。它包含网筛过滤杂质。与储液干燥器一样，系统打开维修时应更换。",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Vapor_Compression_Cycle.png",
    youtube: "https://www.youtube.com/watch?v=ItvfKv0iRPY",
    youtubeTitle: "Accumulator Function"
  },
  "blend_door": {
    term: "Blend Door Actuator",
    termChinese: "混风门执行器",
    section: "A7",
    definition: "An electric motor-driven door inside the HVAC housing that controls the mix of heated and cooled air to achieve the desired cabin temperature. A faulty actuator causes stuck temperature output, clicking noises from the dashboard, or inability to adjust temperature. Actuators are controlled by the climate control module based on temperature settings.",
    definitionChinese: "HVAC壳体内由电动机驱动的风门，控制加热和冷却空气的混合以达到所需的座舱温度。执行器故障导致温度输出卡住、仪表板发出咔嗒声或无法调节温度。执行器由空调控制模块根据温度设置进行控制。",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Vapor_Compression_Cycle.png",
    youtube: "https://www.youtube.com/watch?v=46paTVC8GUw",
    youtubeTitle: "Blend Door Actuator Diagnosis"
  },
  "blower_motor": {
    term: "Blower Motor",
    termChinese: "鼓风机电机",
    section: "A7",
    definition: "An electric motor with a fan wheel that pushes air through the HVAC ductwork into the cabin. Speed is controlled by a resistor pack or an electronic module. A failing blower resistor causes the fan to work only on high speed. A faulty blower motor causes no airflow or intermittent operation. The cabin air filter should be checked first.",
    definitionChinese: "带风扇叶轮的电动机，将空气推送通过HVAC管道进入座舱。速度由电阻组或电子模块控制。鼓风机电阻故障导致风扇仅在最高挡工作。鼓风机电机故障导致无气流或间歇性运行。应首先检查空调滤芯。",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Vapor_Compression_Cycle.png",
    youtube: "https://www.youtube.com/watch?v=ZOehTOr5SR4",
    youtubeTitle: "Blower Motor Test"
  },
  "refrigerant_leak_detection": {
    term: "Refrigerant Leak Detection",
    termChinese: "制冷剂泄漏检测",
    section: "A7",
    definition: "Methods for finding A/C system leaks including electronic refrigerant detectors, UV dye with a blacklight, soap bubble solution, and nitrogen pressure testing. Electronic detectors are sensitive but can give false readings. UV dye is the most reliable for pinpointing leak locations. Any electronic detector alarm should be confirmed with a secondary method.",
    definitionChinese: "查找空调系统泄漏的方法，包括电子制冷剂检测仪、紫外线荧光剂配合黑光灯、肥皂水泡沫法和氮气压力测试。电子检测仪灵敏但可能产生误报。紫外线荧光剂是定位泄漏最可靠的方法。任何电子检测仪报警应用第二种方法确认。",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Vapor_Compression_Cycle.png",
    youtube: "https://www.youtube.com/watch?v=tqVKR6E6_J4",
    youtubeTitle: "5 Ways to Find a Refrigerant Leak"
  },
  "superheat": {
    term: "Superheat",
    termChinese: "过热度",
    section: "A7",
    definition: "The temperature increase of refrigerant vapor above its boiling point at a given pressure, measured at the evaporator outlet. Proper superheat (typically 5-15 degrees F) ensures all liquid has evaporated before reaching the compressor, preventing liquid slugging damage. Low superheat indicates overcharging or a flooded evaporator; high superheat indicates undercharge.",
    definitionChinese: "制冷剂蒸气在给定压力下超过其沸点的温度升高量，在蒸发器出口处测量。适当的过热度（通常5-15华氏度）确保所有液体在到达压缩机前已蒸发，防止液击损坏。低过热度表示充注过多或蒸发器过满；高过热度表示充注不足。",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Vapor_Compression_Cycle.png",
    youtube: "https://www.youtube.com/watch?v=2SEDe0v8VPY",
    youtubeTitle: "Explaining Superheat and Subcooling"
  },
  "subcooling": {
    term: "Subcooling",
    termChinese: "过冷度",
    section: "A7",
    definition: "The temperature decrease of liquid refrigerant below its condensing point at a given pressure, measured at the condenser outlet. Proper subcooling (typically 10-20 degrees F) ensures a solid column of liquid reaches the metering device for efficient operation. High subcooling indicates overcharge or restriction; low subcooling indicates undercharge.",
    definitionChinese: "液态制冷剂在给定压力下低于其冷凝温度的温度降低量，在冷凝器出口处测量。适当的过冷度（通常10-20华氏度）确保到达计量装置的是纯液体以实现高效运行。高过冷度表示充注过多或有限制；低过冷度表示充注不足。",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Vapor_Compression_Cycle.png",
    youtube: "https://www.youtube.com/watch?v=2SEDe0v8VPY",
    youtubeTitle: "Subcooling Explained"
  },

  // ===== A8: ENGINE PERFORMANCE TERMS =====
  "fuel_injector": {
    term: "Fuel Injector",
    termChinese: "燃油喷射器",
    section: "A8",
    definition: "An electronically controlled valve that sprays precisely metered fuel into the intake port or directly into the combustion chamber. The PCM controls the injector pulse width (on-time) to adjust the amount of fuel delivered. A stuck-open injector causes rich conditions; a clogged injector causes lean misfires. Injectors can be tested for resistance, flow, and spray pattern.",
    definitionChinese: "电子控制的阀门，将精确计量的燃油喷入进气道或直接喷入燃烧室。PCM控制喷射器脉冲宽度（通电时间）来调整供油量。卡开的喷射器导致混合气过浓；堵塞的喷射器导致稀混合气失火。可通过电阻、流量和喷雾形态测试喷射器。",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/L-Jetronic.JPG",
    youtube: "https://www.youtube.com/watch?v=VgeucJ8vjAs",
    youtubeTitle: "Fuel Injectors - How They Work | Science Garage"
  },
  "maf_sensor": {
    term: "Mass Airflow Sensor (MAF)",
    termChinese: "空气流量传感器",
    section: "A8",
    definition: "A sensor in the intake duct that measures the volume and density of air entering the engine. It typically uses a heated wire or film element that cools as air flows past it. The PCM uses this data for fuel calculation. A dirty MAF underreports airflow, causing lean conditions. Air leaks after the MAF cause unmetered air and driveability problems.",
    definitionChinese: "进气管道中测量进入发动机的空气体积和密度的传感器。通常使用热线或热膜元件，空气流过时使其冷却。PCM使用此数据计算供油量。脏污的MAF低报气流量导致偏稀。MAF之后的进气泄漏导致未计量空气和驾驶性问题。",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/L-Jetronic.JPG",
    youtube: "https://www.youtube.com/watch?v=Z3QuuEPef4k",
    youtubeTitle: "Mass Air Flow Sensor - Hot Wire - Explained"
  },
  "map_sensor": {
    term: "Manifold Absolute Pressure Sensor (MAP)",
    termChinese: "进气歧管绝对压力传感器",
    section: "A8",
    definition: "A sensor that measures intake manifold vacuum/pressure and sends a voltage signal to the PCM. The PCM uses MAP data to calculate engine load for fuel delivery and ignition timing. Higher pressure (lower vacuum) means more load and more fuel needed. MAP-based fuel systems are called speed-density systems and do not use a MAF sensor.",
    definitionChinese: "测量进气歧管真空/压力并向PCM发送电压信号的传感器。PCM使用MAP数据计算发动机负荷以确定供油量和点火正时。压力越高（真空越低）意味着负荷越大，需要更多燃油。基于MAP的燃油系统称为速度-密度系统，不使用MAF传感器。",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/L-Jetronic.JPG",
    youtube: "https://www.youtube.com/watch?v=tOoC8wzOqFk",
    youtubeTitle: "Bad MAP Sensor Symptoms"
  },
  "throttle_position_sensor": {
    term: "Throttle Position Sensor (TPS)",
    termChinese: "节气门位置传感器",
    section: "A8",
    definition: "A potentiometer or Hall-effect sensor on the throttle body that reports throttle plate angle to the PCM. Output ranges from about 0.5V at closed throttle to 4.5V at wide-open throttle. The PCM uses this information for fuel enrichment during acceleration, deceleration fuel cutoff, and transmission shift scheduling. Erratic signals cause hesitation.",
    definitionChinese: "节气门体上的电位器或霍尔效应传感器，向PCM报告节气门板角度。输出范围从关闭节气门时约0.5V到全开节气门时约4.5V。PCM使用此信息进行加速加浓、减速断油和变速箱换挡调度。信号不稳定导致犹豫加速。",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/L-Jetronic.JPG",
    youtube: "https://www.youtube.com/watch?v=9_LBQBmI_W4",
    youtubeTitle: "Test a Throttle Position Sensor"
  },
  "oxygen_sensor": {
    term: "Oxygen Sensor (O2 Sensor)",
    termChinese: "氧传感器",
    section: "A8",
    definition: "A sensor in the exhaust stream that measures oxygen content to determine if the air-fuel mixture is rich or lean. Upstream sensors provide feedback for fuel control; downstream sensors monitor catalytic converter efficiency. Conventional sensors produce 0.1-0.9V; wideband sensors measure actual air-fuel ratio. Sluggish or biased sensors cause poor fuel economy and emissions.",
    definitionChinese: "排气管中测量氧含量以确定空燃混合气偏浓还是偏稀的传感器。上游传感器提供燃油控制反馈；下游传感器监测催化转化器效率。常规传感器产生0.1-0.9V；宽带传感器测量实际空燃比。反应迟缓或偏移的传感器导致油耗增加和排放超标。",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Oxygen_sensor_IMG_0488.JPG",
    youtube: "https://www.youtube.com/watch?v=x8ldQArMOLU",
    youtubeTitle: "How Oxygen Sensors Work - Explained"
  },
  "catalytic_converter": {
    term: "Catalytic Converter",
    termChinese: "三元催化转化器",
    section: "A8",
    definition: "An exhaust emission device containing precious metal catalysts (platinum, palladium, rhodium) that convert harmful exhaust gases into less harmful ones. It reduces hydrocarbons (HC), carbon monoxide (CO), and nitrogen oxides (NOx). A degraded converter triggers P0420/P0430 codes. Contamination from coolant or oil can destroy the catalyst material.",
    definitionChinese: "含有贵金属催化剂（铂、钯、铑）的排放控制装置，将有害废气转化为较无害的物质。它减少碳氢化合物（HC）、一氧化碳（CO）和氮氧化物（NOx）。劣化的催化器触发P0420/P0430故障码。冷却液或机油污染可破坏催化剂材料。",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Oxygen_sensor_IMG_0488.JPG",
    youtube: "https://www.youtube.com/watch?v=lJiznlz5buc",
    youtubeTitle: "Catalytic Converter: How It Works | Science Garage"
  },
  "ignition_coil": {
    term: "Ignition Coil",
    termChinese: "点火线圈",
    section: "A8",
    definition: "A transformer that converts battery voltage (12V) into the high voltage (20,000-50,000V) needed to fire spark plugs. Modern engines use coil-on-plug (COP) or coil-near-plug designs for each cylinder. A weak coil may fire at idle but fail under load when higher voltage is required. Failed coils cause misfires and corresponding DTCs.",
    definitionChinese: "将蓄电池电压（12V）转换为火花塞所需高压（20,000-50,000V）的变压器。现代发动机使用缸上线圈（COP）或缸近线圈设计。弱线圈可能在怠速时点火但在需要更高电压的负荷下失效。线圈失效导致失火和相应的故障码。",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Spark_plug.svg",
    youtube: "https://www.youtube.com/watch?v=xLSiO9HoL3Y",
    youtubeTitle: "Symptoms of Bad Ignition Coil - How to Test"
  },
  "spark_plug": {
    term: "Spark Plug",
    termChinese: "火花塞",
    section: "A8",
    definition: "A device threaded into the cylinder head that produces an electrical spark to ignite the air-fuel mixture. The gap between the center and ground electrodes must be correct for proper combustion. Spark plug condition reveals engine health: white/blistered indicates overheating, black/sooty indicates rich mixture, oil-fouled indicates oil consumption.",
    definitionChinese: "拧入气缸盖的装置，产生电火花点燃空燃混合气。中心电极和接地电极之间的间隙必须正确才能正常燃烧。火花塞状况揭示发动机健康：白色/起泡表示过热，黑色/积碳表示混合气过浓，机油污染表示烧机油。",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Spark_plug.svg",
    youtube: "https://www.youtube.com/watch?v=lVCs5gWLUyI",
    youtubeTitle: "How to Read Your Spark Plugs | Goss' Garage"
  },
  "egr_valve": {
    term: "EGR Valve (Exhaust Gas Recirculation)",
    termChinese: "废气再循环阀",
    section: "A8",
    definition: "An emission control valve that recirculates a measured amount of exhaust gas back into the intake manifold to lower combustion temperatures and reduce nitrogen oxide (NOx) emissions. It opens under cruise conditions and closes at idle and wide-open throttle. A stuck-open EGR causes rough idle; a stuck-closed EGR increases NOx emissions and may cause detonation.",
    definitionChinese: "一种排放控制阀，将定量的废气重新引入进气歧管以降低燃烧温度并减少氮氧化物（NOx）排放。巡航工况下打开，怠速和全油门时关闭。EGR卡开导致怠速不稳；卡关导致NOx排放增加并可能引起爆震。",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/L-Jetronic.JPG",
    youtube: "https://www.youtube.com/watch?v=E2_I0DSxsqI",
    youtubeTitle: "Exhaust Gas Recirculation (EGR) Made Easy"
  },
  "pcv_valve": {
    term: "PCV Valve (Positive Crankcase Ventilation)",
    termChinese: "曲轴箱强制通风阀",
    section: "A8",
    definition: "A one-way valve that routes blowby gases from the crankcase back to the intake manifold for combustion, preventing atmospheric pollution. It regulates flow based on manifold vacuum. A stuck-closed PCV increases crankcase pressure, causing oil leaks. A stuck-open PCV causes a vacuum leak and lean condition. Regular replacement is part of routine maintenance.",
    definitionChinese: "将窜气从曲轴箱引回进气歧管进行燃烧的单向阀，防止大气污染。它根据歧管真空调节流量。PCV卡关增加曲轴箱压力导致机油泄漏。PCV卡开导致真空泄漏和混合气偏稀。定期更换是日常保养的一部分。",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/L-Jetronic.JPG",
    youtube: "https://www.youtube.com/watch?v=EPIfI9aZHt4",
    youtubeTitle: "PCV Valve Operation"
  },
  "evap_system": {
    term: "EVAP System (Evaporative Emission)",
    termChinese: "燃油蒸发排放控制系统",
    section: "A8",
    definition: "An emission control system that captures fuel vapors from the tank and canister, then purges them into the engine for combustion rather than releasing them to the atmosphere. It includes the charcoal canister, purge valve, vent valve, and associated hoses. The system is monitored for leaks, and even a loose gas cap can trigger a check engine light.",
    definitionChinese: "捕获油箱和碳罐中的燃油蒸气，然后将其吹扫到发动机中燃烧而非排放到大气中的排放控制系统。包括碳罐、吹扫阀、通风阀和相关管路。系统受到泄漏监测，即使松开的油箱盖也会触发发动机故障灯。",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/L-Jetronic.JPG",
    youtube: "https://www.youtube.com/watch?v=sZALEA7wDWM",
    youtubeTitle: "How EVAP Systems Work - Automotive Education"
  },
  "fuel_trim": {
    term: "Fuel Trim (Short-Term and Long-Term)",
    termChinese: "燃油修正",
    section: "A8",
    definition: "PCM-calculated adjustments to the base fuel delivery to maintain stoichiometric ratio. Short-term fuel trim (STFT) reacts in real time to oxygen sensor feedback. Long-term fuel trim (LTFT) is a learned correction for persistent conditions. Positive values mean the PCM is adding fuel (lean condition); negative values mean it is removing fuel (rich condition).",
    definitionChinese: "PCM为保持化学计量比对基础供油量进行的计算调整。短期燃油修正（STFT）实时响应氧传感器反馈。长期燃油修正（LTFT）是针对持续状况的学习修正。正值表示PCM在加油（偏稀）；负值表示在减油（偏浓）。",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/L-Jetronic.JPG",
    youtube: "https://www.youtube.com/watch?v=pIJdCZgEiys",
    youtubeTitle: "Short Term and Long Term Fuel Trims Explained"
  },
  "dtc": {
    term: "Diagnostic Trouble Code (DTC)",
    termChinese: "故障诊断码",
    section: "A8",
    definition: "An alphanumeric code stored by the PCM when a monitored system or component fails to meet expected parameters. The format is a letter followed by four numbers (e.g., P0300). P = powertrain, B = body, C = chassis, U = communication. DTCs guide diagnosis but indicate circuits or systems, not necessarily the specific failed component.",
    definitionChinese: "当被监测的系统或部件未能满足预期参数时PCM存储的字母数字代码。格式为一个字母加四个数字（如P0300）。P=动力总成，B=车身，C=底盘，U=通信。故障码指导诊断但指示的是电路或系统，不一定是具体的故障部件。",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/OBD-II_type_A_female_connector_pinout.svg",
    youtube: "https://www.youtube.com/watch?v=zT-h59fo-Sc",
    youtubeTitle: "Pending Code vs Stored Code vs Permanent Code"
  },
  "obd2": {
    term: "OBD-II (On-Board Diagnostics II)",
    termChinese: "车载诊断系统第二代",
    section: "A8",
    definition: "A standardized vehicle diagnostic system required on all cars sold in the US since 1996. It monitors emission-related systems, stores DTCs, and provides standardized data through a 16-pin diagnostic connector. OBD-II includes readiness monitors that must complete before a vehicle can pass an emissions test. It ensures consistent diagnostic access across all manufacturers.",
    definitionChinese: "自1996年起美国销售的所有汽车必须配备的标准化车辆诊断系统。它监测与排放相关的系统，存储故障码，并通过16针诊断接口提供标准化数据。OBD-II包括就绪监视器，必须完成后车辆才能通过排放检测。确保所有制造商的诊断访问一致。",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/OBD-II_type_A_female_connector_pinout.svg",
    youtube: "https://www.youtube.com/watch?v=YcwBeNQbJ5A",
    youtubeTitle: "OBD2 Explained - A Simple Intro"
  },
  "scan_tool": {
    term: "Scan Tool",
    termChinese: "诊断扫描仪",
    section: "A8",
    definition: "A diagnostic device that communicates with the vehicle's PCM and other modules through the OBD-II port. It reads and clears DTCs, displays live sensor data (PIDs), performs bi-directional tests, and views freeze frame data. Enhanced scan tools access manufacturer-specific data beyond generic OBD-II. Essential for modern vehicle diagnosis.",
    definitionChinese: "通过OBD-II接口与车辆PCM和其他模块通信的诊断设备。读取和清除故障码，显示实时传感器数据（PID），执行双向测试，查看冻结帧数据。增强型扫描工具可访问超出通用OBD-II的制造商特定数据。是现代车辆诊断的必备工具。",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/OBD-II_type_A_female_connector_pinout.svg",
    youtube: "https://www.youtube.com/watch?v=h9-6dkjMmQ4",
    youtubeTitle: "How to Use an OBD-II Scan Tool"
  },
  "detonation": {
    term: "Detonation (Engine Knock)",
    termChinese: "爆震",
    section: "A8",
    definition: "Abnormal combustion where the air-fuel mixture self-ignites ahead of the spark plug flame front, creating a pressure spike and knocking sound. Causes include carbon buildup, low octane fuel, advanced timing, and lean mixtures. The knock sensor detects detonation and signals the PCM to retard timing. Prolonged detonation damages pistons, rings, and bearings.",
    definitionChinese: "异常燃烧，空燃混合气在火花塞火焰前锋之前自燃，产生压力尖峰和敲击声。原因包括积碳、低辛烷值燃油、点火过早和混合气偏稀。爆震传感器检测爆震并通知PCM推迟点火正时。持续爆震损坏活塞、活塞环和轴承。",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Spark_plug.svg",
    youtube: "https://www.youtube.com/watch?v=JZy66nGrRAU",
    youtubeTitle: "Understanding Pre-Ignition, Knock, & Detonation"
  },
  "stoichiometric": {
    term: "Stoichiometric Ratio (14.7:1)",
    termChinese: "化学计量比（14.7:1）",
    section: "A8",
    definition: "The ideal air-to-fuel ratio for complete combustion of gasoline: 14.7 parts air to 1 part fuel by weight. At this ratio, all fuel and oxygen are consumed with minimal emissions. The PCM uses oxygen sensor feedback to maintain this ratio during closed-loop operation. Rich mixtures have less air; lean mixtures have more air than stoichiometric.",
    definitionChinese: "汽油完全燃烧的理想空燃比：按重量14.7份空气对1份燃油。在此比例下所有燃油和氧气被消耗且排放最少。PCM在闭环运行时使用氧传感器反馈维持此比例。浓混合气空气少于化学计量比；稀混合气空气多于化学计量比。",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/L-Jetronic.JPG",
    youtube: "https://www.youtube.com/watch?v=9uFdrcPkMGE",
    youtubeTitle: "Air Fuel Ratio - Explained"
  },
  "misfire": {
    term: "Engine Misfire",
    termChinese: "发动机失火",
    section: "A8",
    definition: "A condition where combustion fails to occur or is incomplete in one or more cylinders. Causes include ignition failure (bad coil, plug, or wire), fuel delivery problems (clogged injector, low pressure), or mechanical issues (low compression). The PCM detects misfires by monitoring crankshaft speed variations and sets cylinder-specific or random misfire codes.",
    definitionChinese: "一个或多个气缸中燃烧未发生或不完全的状况。原因包括点火故障（坏线圈、火花塞或高压线）、供油问题（喷射器堵塞、油压低）或机械问题（压缩低）。PCM通过监测曲轴转速变化检测失火并设置特定气缸或随机失火故障码。",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Spark_plug.svg",
    youtube: "https://www.youtube.com/watch?v=UO8Oo0drzck",
    youtubeTitle: "Diagnosing Misfires"
  },

  // ===== G1: MAINTENANCE & LIGHT REPAIR TERMS =====
  "oil_change": {
    term: "Oil Change Service",
    termChinese: "更换机油",
    section: "G1",
    definition: "A routine maintenance procedure that involves draining old engine oil, replacing the oil filter, and refilling with new oil meeting manufacturer specifications. Oil degrades over time from heat, contamination, and chemical breakdown. Regular changes prevent sludge buildup, bearing wear, and internal engine damage. Follow the owner's manual for oil type and interval.",
    definitionChinese: "包括排放旧机油、更换机油滤清器和加注符合制造商规格的新机油的日常保养程序。机油随时间因热量、污染和化学分解而劣化。定期更换防止油泥积聚、轴承磨损和发动机内部损坏。按车主手册的油品类型和间隔进行。",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Oil_Pump_from_Toyota_Coaster_Bus.JPG",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "How to Change Engine Oil"
  },
  "serpentine_belt": {
    term: "Serpentine Belt",
    termChinese: "多楔带（蛇形皮带）",
    section: "G1",
    definition: "A single, long, ribbed belt that drives multiple engine accessories including the alternator, power steering pump, water pump, and A/C compressor. An automatic tensioner maintains proper tension. Inspect for cracks, glazing, and rib wear. A worn belt squeals, especially in cold or wet conditions. Replace per manufacturer interval or when showing wear signs.",
    definitionChinese: "一条长的多楔皮带，驱动多个发动机附件包括发电机、助力转向泵、水泵和空调压缩机。自动张紧器保持适当张力。检查裂纹、光泽和楔肋磨损。磨损的皮带会发出尖叫声，特别是在寒冷或潮湿条件下。按制造商间隔或出现磨损迹象时更换。",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Nissan_VQ35DE_engine_001.jpg",
    youtube: "https://www.youtube.com/watch?v=Q-iiIcP7ODA",
    youtubeTitle: "How to Tell if Your Car Needs a New Belt"
  },
  "tire_rotation": {
    term: "Tire Rotation",
    termChinese: "轮胎换位",
    section: "G1",
    definition: "Moving tires to different wheel positions at regular intervals (typically every 5,000-7,500 miles) to promote even tread wear and extend tire life. Common patterns include front-to-rear, cross, and modified cross. The pattern depends on whether tires are directional or non-directional and whether the vehicle is front, rear, or all-wheel drive.",
    definitionChinese: "按固定间隔（通常每5,000-7,500英里）将轮胎移动到不同的车轮位置，以促进均匀的胎面磨损和延长轮胎寿命。常见模式包括前后换位、交叉换位和改良交叉换位。模式取决于轮胎是否为单向轮胎以及车辆是前驱、后驱还是全驱。",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Tire_Valve_Stem.jpg",
    youtube: "https://www.youtube.com/watch?v=4jAIHbNn-vo",
    youtubeTitle: "You NEED to Rotate Your Tires - How & Why"
  },
  "tire_pressure": {
    term: "Tire Pressure (TPMS)",
    termChinese: "轮胎气压（TPMS）",
    section: "G1",
    definition: "The amount of air pressure inside a tire, measured in psi. Correct pressure is found on the door jamb placard, not the tire sidewall. Under-inflation causes poor fuel economy, excess heat, and edge wear. Over-inflation causes center wear and harsh ride. The Tire Pressure Monitoring System alerts the driver when pressure drops 25% below recommended.",
    definitionChinese: "轮胎内的气压，以psi为单位测量。正确气压标注在车门门框标签上而非轮胎侧壁。充气不足导致油耗增加、过热和边缘磨损。充气过多导致中心磨损和颠簸。轮胎压力监测系统在气压低于推荐值25%时提醒驾驶员。",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Tire_Valve_Stem.jpg",
    youtube: "https://www.youtube.com/watch?v=ynufdAUdcJc",
    youtubeTitle: "What is TPMS? How Does TPMS Work?"
  },
  "coolant_flush": {
    term: "Coolant Flush/Service",
    termChinese: "冷却液冲洗保养",
    section: "G1",
    definition: "A maintenance procedure that removes old coolant, flushes contaminants from the cooling system, and refills with fresh coolant and distilled water in the correct ratio (typically 50/50). Coolant degrades over time, losing corrosion protection. Use only the manufacturer-specified coolant type. Mixing incompatible types can cause gelation and system damage.",
    definitionChinese: "排出旧冷却液、冲洗冷却系统中的污染物，并以正确比例（通常50/50）加注新冷却液和蒸馏水的保养程序。冷却液随时间劣化失去防腐保护。仅使用制造商指定的冷却液类型。混合不兼容类型可导致凝胶化和系统损坏。",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Automobile_radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=g8YZF5cW7-A",
    youtubeTitle: "How to Quick Flush Your Car's Cooling System"
  },
  "brake_inspection": {
    term: "Brake Inspection",
    termChinese: "制动系统检查",
    section: "G1",
    definition: "A visual and measurement check of brake components including pad/shoe thickness, rotor/drum condition, caliper operation, brake lines, and fluid level. Minimum pad thickness is typically 2-3mm. Rotors are measured for thickness and runout. Brake fluid condition is checked with a test strip or refractometer. Inspections are recommended at every tire rotation.",
    definitionChinese: "对制动部件进行目视和测量检查，包括刹车片/制动蹄厚度、制动盘/鼓状况、卡钳工作状态、制动管路和液位。最小刹车片厚度通常为2-3mm。制动盘需测量厚度和跳动。用试纸或折射仪检查制动液状况。建议每次轮胎换位时检查。",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Disc_brake_car.jpg",
    youtube: "https://www.youtube.com/watch?v=WzXjTrMu3lg",
    youtubeTitle: "How To Quickly Check Your Brake Pads and Rotors"
  },
  "air_filter": {
    term: "Engine Air Filter",
    termChinese: "发动机空气滤清器",
    section: "G1",
    definition: "A pleated paper or cotton filter in the air intake that removes dirt, dust, and debris before air enters the engine. A dirty filter restricts airflow, reducing power and fuel economy, and can cause a rich mixture. Most manufacturers recommend replacement every 15,000-30,000 miles, but dusty conditions require more frequent changes. Visual inspection reveals condition.",
    definitionChinese: "进气系统中的折叠纸质或棉质滤芯，在空气进入发动机前去除灰尘、污物和碎屑。脏滤芯限制气流，降低功率和燃油经济性，可能导致混合气偏浓。大多数制造商建议每15,000-30,000英里更换，但多尘环境需更频繁更换。目视检查可判断状况。",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Nissan_VQ35DE_engine_001.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Engine Air Filter Service"
  },
  "cabin_air_filter": {
    term: "Cabin Air Filter",
    termChinese: "空调滤芯",
    section: "G1",
    definition: "A filter in the HVAC system that cleans air entering the passenger cabin, removing pollen, dust, and pollutants. Located behind the glove box or under the cowl panel. A clogged cabin filter causes reduced airflow from the vents, musty odors, and poor defog performance. Replacement interval is typically 15,000-25,000 miles or annually.",
    definitionChinese: "HVAC系统中的滤芯，清洁进入乘客舱的空气，去除花粉、灰尘和污染物。位于手套箱后面或风挡下方面板下。堵塞的空调滤芯导致出风口气流减小、异味和除雾效果差。更换间隔通常为15,000-25,000英里或每年一次。",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Nissan_VQ35DE_engine_001.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Cabin Air Filter Replacement"
  },
  "battery_service": {
    term: "Battery Service/Testing",
    termChinese: "蓄电池维护检测",
    section: "G1",
    definition: "Maintenance procedures including cleaning terminal corrosion, tightening connections, testing voltage and capacity with a load tester or electronic analyzer, and verifying charging system output. A fully charged battery should read 12.6V or higher. Clean terminals with a wire brush and apply protectant. Most batteries last 3-5 years depending on climate and usage.",
    definitionChinese: "包括清洁端子腐蚀、紧固连接、用负载测试仪或电子分析仪测试电压和容量以及验证充电系统输出的保养程序。充满电的蓄电池应读数12.6V或以上。用钢丝刷清洁端子并涂抹保护剂。大多数蓄电池使用寿命为3-5年，取决于气候和使用情况。",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/12_Volts_Battery_for_vehicles_and_UPS.jpg",
    youtube: "https://www.youtube.com/watch?v=VQAB3lVpUrY",
    youtubeTitle: "Battery Service Guide"
  },
  "multipoint_inspection": {
    term: "Multi-Point Inspection",
    termChinese: "多点检查",
    section: "G1",
    definition: "A comprehensive vehicle check typically performed during routine service visits that examines fluid levels, tire condition, belt and hose condition, brake components, lighting, wipers, battery, and other items. Results are documented on a checklist and shared with the customer. This inspection identifies potential problems before they become costly repairs.",
    definitionChinese: "在日常保养时进行的全面车辆检查，检查液位、轮胎状况、皮带和管路状况、制动部件、灯光、雨刮器、蓄电池等项目。结果记录在检查表上并与客户分享。此检查在潜在问题变成昂贵维修之前识别它们。",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Nissan_VQ35DE_engine_001.jpg",
    youtube: "https://www.youtube.com/watch?v=O1hF25Cowv8",
    youtubeTitle: "Multi-Point Inspection"
  },
  "lug_nut_torque": {
    term: "Lug Nut Torque",
    termChinese: "轮毂螺母扭矩",
    section: "G1",
    definition: "The specific tightening specification for wheel lug nuts, measured in foot-pounds (ft-lb). Proper torque ensures the wheel is secure without warping the brake rotor. A torque wrench must be used; impact guns can over-tighten. Lugs should be tightened in a star pattern in stages. Typical passenger car torque values range from 80-100 ft-lb.",
    definitionChinese: "车轮螺母的特定紧固规格，以英尺-磅（ft-lb）为单位测量。适当的扭矩确保车轮固定而不会使制动盘翘曲。必须使用扭矩扳手；冲击枪可能过度紧固。螺母应分阶段按星形图案紧固。典型乘用车扭矩值为80-100 ft-lb。",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Tire_Valve_Stem.jpg",
    youtube: "https://www.youtube.com/watch?v=4jAIHbNn-vo",
    youtubeTitle: "Proper Lug Nut Torque"
  },
  "transmission_service": {
    term: "Transmission Fluid Service",
    termChinese: "变速箱油保养",
    section: "G1",
    definition: "Maintenance involving checking fluid level, condition, and replacing fluid per the manufacturer's interval. Automatic transmissions may require a fluid exchange or pan drop with filter replacement. Manual transmissions use gear oil checked via a fill plug. Dark or burnt fluid indicates overheating. Always use the manufacturer-specified fluid type for the application.",
    definitionChinese: "包括检查油位、油液状况和按制造商间隔更换油液的保养。自动变速箱可能需要换油或放油盘更换滤清器。手动变速箱使用齿轮油通过加油口检查。深色或有烧焦味的油液表明过热。始终使用制造商指定的油液类型。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/42/8-speed_AT_for_Lexus_LS460.jpg",
    youtube: "https://www.youtube.com/watch?v=5nK5j3SEylA",
    youtubeTitle: "Transmission Flush vs Fluid Change and Service"
  },
  "wiper_blade": {
    term: "Wiper Blade Replacement",
    termChinese: "雨刮片更换",
    section: "G1",
    definition: "Replacement of windshield wiper blades when they show signs of wear such as streaking, chattering, splitting, or incomplete clearing. Blades degrade from UV exposure, heat, and use. Most wiper blades should be replaced every 6-12 months. Proper size and attachment type must match the vehicle. Worn wipers are a safety hazard in rain.",
    definitionChinese: "当雨刮片出现条纹、跳动、开裂或清扫不完全等磨损迹象时进行更换。雨刮片因紫外线照射、高温和使用而劣化。大多数雨刮片应每6-12个月更换。尺寸和接头类型必须与车辆匹配。磨损的雨刮片在雨天是安全隐患。",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Tire_Valve_Stem.jpg",
    youtube: "https://www.youtube.com/watch?v=K9Gu0f64NWU",
    youtubeTitle: "How to Replace Your Windshield Wiper Blades"
  }
};
