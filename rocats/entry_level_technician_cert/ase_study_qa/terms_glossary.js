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
  },

  // ===== ADDITIONAL TERMS BATCH 1: ENGINE COMPONENTS =====
  "intake_manifold": {
    term: "Intake Manifold",
    termChinese: "进气歧管",
    section: "A1",
    definition: "A set of tubes that distributes the air-fuel mixture or air (in fuel-injected engines) from the throttle body to each cylinder's intake port. It must provide equal-length runners for balanced airflow. Leaks cause vacuum loss, rough idle, and lean conditions. Plastic manifolds are common on modern engines for weight savings.",
    definitionChinese: "一组管道，将空气燃油混合物或空气（在燃油喷射发动机中）从节气门体分配到每个气缸的进气口。它必须提供等长的进气道以实现均衡的气流。泄漏会导致真空损失、怠速不稳和混合气偏稀。现代发动机常用塑料歧管以减轻重量。",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Carburetor.svg",
    youtube: "https://www.youtube.com/watch?v=aMVfMFJqb8o",
    youtubeTitle: "Intake Manifold Function and Common Problems"
  },
  "exhaust_manifold": {
    term: "Exhaust Manifold",
    termChinese: "排气歧管",
    section: "A1",
    definition: "A cast iron or tubular steel component bolted to the cylinder head that collects exhaust gases from all cylinders and directs them into the exhaust pipe. It operates at extremely high temperatures. Cracked manifolds cause exhaust leaks heard as a ticking noise on cold start. Warpage can occur from repeated heat cycles.",
    definitionChinese: "用螺栓固定在气缸盖上的铸铁或管状钢部件，收集所有气缸的废气并引导到排气管。在极高温度下工作。开裂的歧管导致冷启动时听到滴答声的排气泄漏。反复的热循环可导致翘曲变形。",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Cylinder_head_of_1KD-FTV.JPG",
    youtube: "https://www.youtube.com/watch?v=aMVfMFJqb8o",
    youtubeTitle: "Exhaust Manifold Leak Symptoms and Repair"
  },
  "fuel_pump": {
    term: "Fuel Pump",
    termChinese: "燃油泵",
    section: "A8",
    definition: "An electric pump typically located inside the fuel tank that pressurizes fuel and delivers it to the fuel injectors. Modern fuel-injected engines require 30-65 psi fuel pressure depending on the system. A failing pump causes low pressure, hard starting, stalling under load, and engine misfires. Fuel level should not run too low as fuel cools the pump.",
    definitionChinese: "通常位于油箱内的电动泵，对燃油加压并输送到喷油器。现代燃油喷射发动机根据系统需要30-65 psi的燃油压力。泵故障导致压力低、启动困难、负荷下熄火和发动机失火。油位不应过低，因为燃油可冷却泵。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=i70X4-RCBKs",
    youtubeTitle: "Fuel Pump Testing and Diagnosis"
  },
  "fuel_pressure_regulator": {
    term: "Fuel Pressure Regulator",
    termChinese: "燃油压力调节器",
    section: "A8",
    definition: "A spring-loaded diaphragm valve that maintains consistent fuel pressure at the injectors by returning excess fuel to the tank. It uses manifold vacuum as a reference to adjust pressure based on engine load. A leaking diaphragm allows fuel into the vacuum line causing rich running. Stuck regulators cause either high or low fuel pressure.",
    definitionChinese: "弹簧加载的膜片阀，通过将多余燃油回流油箱来保持喷油器处的燃油压力一致。它以进气歧管真空为参考，根据发动机负荷调整压力。膜片泄漏会使燃油进入真空管导致混合气偏浓。调节器卡住会导致燃油压力过高或过低。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=i70X4-RCBKs",
    youtubeTitle: "Fuel Pressure Regulator Function and Testing"
  },
  "voltage_regulator": {
    term: "Voltage Regulator",
    termChinese: "电压调节器",
    section: "A6",
    definition: "A device that controls the alternator's output voltage to maintain the charging system between 13.5 and 14.5 volts. It does this by varying the current flowing through the alternator's field winding (rotor). Overcharging damages the battery and electrical components; undercharging leads to a dead battery. Modern regulators are built into the alternator.",
    definitionChinese: "控制发电机输出电压以将充电系统维持在13.5到14.5伏之间的装置。它通过改变流过发电机励磁绕组（转子）的电流来实现。过充会损坏电池和电气部件；充电不足导致电池耗尽。现代调节器内置在发电机中。",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Carburetor.svg",
    youtube: "https://www.youtube.com/watch?v=9n7eVsEmhMk",
    youtubeTitle: "How Voltage Regulators Work in Automotive Charging Systems"
  },
  "steering_wheel": {
    term: "Steering Wheel",
    termChinese: "方向盘",
    section: "A4",
    definition: "The circular wheel inside the vehicle cabin that the driver rotates to control the direction of the front wheels. Connected to the steering column, which links to the steering gear. Modern steering wheels contain the airbag module, horn switch, and various controls. Free play (excessive looseness) indicates worn steering components.",
    definitionChinese: "车辆驾驶室内的圆形方向盘，驾驶员转动它来控制前轮方向。连接到转向柱，转向柱连接到转向器。现代方向盘包含安全气囊模块、喇叭开关和各种控制装置。自由间隙（过度松动）表明转向部件磨损。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Steering System Components Explained"
  },
  "steering_column": {
    term: "Steering Column",
    termChinese: "转向柱",
    section: "A4",
    definition: "The shaft assembly connecting the steering wheel to the steering gear. It includes a collapsible section for crash safety, universal joints for angle changes, and may house the ignition lock cylinder and multifunction switch. Tilt and telescoping features allow driver adjustment. Clock spring inside provides electrical connection to steering wheel controls.",
    definitionChinese: "连接方向盘和转向器的轴组件。包括碰撞安全的可折叠部分、角度变化的万向节，可能装有点火锁芯和多功能开关。倾斜和伸缩功能允许驾驶员调节。内部的时钟弹簧为方向盘控制装置提供电气连接。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Steering Column Components and Function"
  },
  "rocker_arm": {
    term: "Rocker Arm",
    termChinese: "摇臂",
    section: "A1",
    definition: "A pivoting lever in the valve train that transfers camshaft motion to the valve. In pushrod engines, the rocker arm sits atop the cylinder head and is actuated by the pushrod from below. Worn rocker arms cause valve train noise, reduced valve lift, and can lead to misfires. Hydraulic lash adjusters eliminate the need for manual adjustment.",
    definitionChinese: "气门机构中的枢轴杠杆，将凸轮轴运动传递给气门。在推杆式发动机中，摇臂位于气缸盖顶部，由下方的推杆驱动。磨损的摇臂导致气门机构噪音、气门升程降低，可能导致失火。液压间隙调节器无需手动调整。",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Camshaft.JPG",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Rocker Arm Function and Valve Train Operation"
  },
  "connecting_rod": {
    term: "Connecting Rod",
    termChinese: "连杆",
    section: "A1",
    definition: "A forged or powdered metal rod that connects the piston to the crankshaft, converting the piston's linear motion into rotational motion. The small end attaches to the piston via a wrist pin, and the big end wraps around the crankshaft journal with a bearing insert. A spun bearing causes a distinct knocking noise.",
    definitionChinese: "锻造或粉末冶金的连杆，连接活塞和曲轴，将活塞的直线运动转换为旋转运动。小端通过活塞销连接到活塞，大端通过轴承衬套包裹曲轴轴颈。轴承旋转会产生明显的敲击声。",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Crankshaft.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Connecting Rod and Crankshaft Assembly"
  },
  "main_bearing": {
    term: "Main Bearing",
    termChinese: "主轴承",
    section: "A1",
    definition: "Split-shell bearings that support the crankshaft in the engine block. They are precision-fit with specific oil clearances to allow an oil film between the bearing and journal. Worn main bearings cause a deep knocking sound at idle that may lessen with RPM increase. Plastigage is used to measure bearing clearance during assembly.",
    definitionChinese: "支撑曲轴在发动机缸体中的对开式轴承。它们精密配合，具有特定的油隙，允许轴承和轴颈之间形成油膜。磨损的主轴承在怠速时产生低沉的敲击声，可能随转速升高而减弱。组装时使用塑性间隙规测量轴承间隙。",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Crankshaft.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Main Bearing Inspection and Clearance Measurement"
  },
  "pushrod": {
    term: "Pushrod",
    termChinese: "推杆",
    section: "A1",
    definition: "A slender metal rod in overhead valve (OHV) engines that transfers the lifting motion of the camshaft lobe (via the lifter) up to the rocker arm to open the valve. Bent pushrods cause valve train noise and misfires. They must be checked for straightness during engine diagnosis. OHC engines do not use pushrods.",
    definitionChinese: "顶置气门（OHV）发动机中的细长金属杆，将凸轮轴凸轮（通过挺柱）的升程运动向上传递到摇臂以打开气门。弯曲的推杆导致气门机构噪音和失火。诊断发动机时必须检查其直线度。顶置凸轮轴发动机不使用推杆。",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Camshaft.JPG",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Pushrod Engine Valve Train Operation"
  },
  "valve_spring": {
    term: "Valve Spring",
    termChinese: "气门弹簧",
    section: "A1",
    definition: "A coil spring that closes the valve after the camshaft lobe has opened it. Spring tension must be correct: too weak causes valve float at high RPM, too strong increases wear. Broken springs cause misfires and loss of compression on the affected cylinder. Springs are tested with a valve spring tester for installed height and pressure.",
    definitionChinese: "凸轮轴凸轮打开气门后使其关闭的螺旋弹簧。弹簧张力必须正确：太弱在高转速时导致气门浮动，太强增加磨损。断裂的弹簧导致受影响气缸失火和压缩损失。使用气门弹簧测试仪测试安装高度和压力。",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Cylinder_head_of_1KD-FTV.JPG",
    youtube: "https://www.youtube.com/watch?v=_addEj_vCro",
    youtubeTitle: "Valve Spring Testing and Replacement"
  },
  "valve_guide": {
    term: "Valve Guide",
    termChinese: "气门导管",
    section: "A1",
    definition: "A cylindrical sleeve pressed into the cylinder head that guides the valve stem as it opens and closes. Worn guides allow excessive oil consumption as oil leaks past the stem seal into the combustion chamber, and can cause the valve to seat improperly. Guides can be replaced or repaired using oversized valve stems or guide liners.",
    definitionChinese: "压入气缸盖的圆柱形套管，在气门开关时引导气门杆。磨损的导管允许机油从气门杆油封泄漏到燃烧室导致机油消耗过多，还可能导致气门密封不良。可以使用加大尺寸的气门杆或导管衬套进行更换或修复。",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Cylinder_head_of_1KD-FTV.JPG",
    youtube: "https://www.youtube.com/watch?v=_addEj_vCro",
    youtubeTitle: "Valve Guide Wear and Repair"
  },
  "intake_valve": {
    term: "Intake Valve",
    termChinese: "进气门",
    section: "A1",
    definition: "A poppet valve that opens to allow the air-fuel mixture (or just air in direct injection) into the combustion chamber during the intake stroke. Intake valves are larger than exhaust valves to maximize airflow. Carbon buildup on the back of intake valves in direct-injection engines restricts airflow and causes misfires and rough idle.",
    definitionChinese: "在进气冲程中打开以允许空气燃油混合物（或直喷发动机中仅空气）进入燃烧室的提升阀。进气门比排气门大以最大化气流。直喷发动机中进气门背面的积碳限制气流，导致失火和怠速不稳。",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Cylinder_head_of_1KD-FTV.JPG",
    youtube: "https://www.youtube.com/watch?v=_addEj_vCro",
    youtubeTitle: "Intake and Exhaust Valve Operation"
  },
  "exhaust_valve": {
    term: "Exhaust Valve",
    termChinese: "排气门",
    section: "A1",
    definition: "A poppet valve that opens during the exhaust stroke to release burned combustion gases from the cylinder. Exhaust valves endure extreme heat and are typically made from more heat-resistant materials than intake valves. A burned exhaust valve causes compression loss, misfires, and a regular dropping pattern on a vacuum gauge reading.",
    definitionChinese: "在排气冲程中打开以释放气缸中燃烧废气的提升阀。排气门承受极高温度，通常由比进气门更耐热的材料制成。烧蚀的排气门导致压缩损失、失火，真空表读数出现有规律的下降。",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Cylinder_head_of_1KD-FTV.JPG",
    youtube: "https://www.youtube.com/watch?v=_addEj_vCro",
    youtubeTitle: "Burned Exhaust Valve Symptoms and Testing"
  },
  "valve_seat": {
    term: "Valve Seat",
    termChinese: "气门座",
    section: "A1",
    definition: "A hardened ring pressed into the cylinder head that provides the sealing surface for the valve face. Proper contact between the valve face and seat is critical for compression and combustion sealing. Seats can be machined with specific angles (typically 45 degrees) during a valve job. Recessed seats reduce valve lift and affect performance.",
    definitionChinese: "压入气缸盖的硬化环，为气门面提供密封面。气门面与气门座之间的正确接触对压缩和燃烧密封至关重要。在气门维修中可按特定角度（通常45度）加工气门座。凹陷的气门座降低气门升程并影响性能。",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Cylinder_head_of_1KD-FTV.JPG",
    youtube: "https://www.youtube.com/watch?v=_addEj_vCro",
    youtubeTitle: "Valve Seat and Face Reconditioning"
  },
  "knock_sensor": {
    term: "Knock Sensor",
    termChinese: "爆震传感器",
    section: "A8",
    definition: "A piezoelectric sensor mounted on the engine block that detects engine knock (detonation). When knock is detected, it sends a signal to the PCM which retards ignition timing to prevent engine damage. A faulty knock sensor can cause the PCM to either allow damaging knock or retard timing excessively, reducing power and fuel economy.",
    definitionChinese: "安装在发动机缸体上的压电传感器，检测发动机爆震（爆燃）。检测到爆震时，向PCM发送信号，PCM推迟点火正时以防止发动机损坏。故障的爆震传感器可能导致PCM允许破坏性爆震或过度推迟正时，降低功率和燃油经济性。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=9n7eVsEmhMk",
    youtubeTitle: "Knock Sensor Function and Testing"
  },
  "crankshaft": {
    term: "Crankshaft",
    termChinese: "曲轴",
    section: "A1",
    definition: "The main rotating shaft in the engine that converts the linear reciprocating motion of the pistons into rotational motion to drive the transmission. It has precisely machined main journals supported by main bearings and rod journals connecting to the connecting rods. Crankshaft endplay is measured to check thrust bearing wear.",
    definitionChinese: "发动机中的主旋转轴，将活塞的直线往复运动转换为旋转运动以驱动变速箱。具有由主轴承支撑的精密加工主轴颈和连接连杆的连杆轴颈。测量曲轴轴向间隙以检查止推轴承磨损。",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Crankshaft.jpg",
    youtube: "https://www.youtube.com/watch?v=9n7eVsEmhMk",
    youtubeTitle: "Crankshaft Design and Function"
  },
  "piston": {
    term: "Piston",
    termChinese: "活塞",
    section: "A1",
    definition: "A cylindrical component that moves up and down inside the cylinder bore, driven by combustion pressure and connected to the crankshaft via the connecting rod. It carries piston rings for sealing and oil control. Piston slap (knocking on cold start) indicates excessive piston-to-wall clearance. Pistons expand as they heat up.",
    definitionChinese: "在气缸孔内上下运动的圆柱形部件，由燃烧压力驱动并通过连杆连接到曲轴。带有活塞环用于密封和油量控制。活塞敲缸（冷启动时的敲击声）表明活塞与缸壁间隙过大。活塞受热会膨胀。",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/12/47mm_piston_rings.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Piston Design and Function"
  },
  "oil_pan": {
    term: "Oil Pan",
    termChinese: "油底壳",
    section: "A1",
    definition: "A stamped steel or cast aluminum container bolted to the bottom of the engine block that serves as the reservoir for engine oil. It contains the oil pickup tube and screen. A damaged oil pan or worn gasket causes oil leaks. The drain plug at the bottom is removed during oil changes. Proper torque on drain plug prevents stripping.",
    definitionChinese: "用螺栓固定在发动机缸体底部的冲压钢或铸铝容器，用作发动机机油的储存器。内含机油吸油管和滤网。损坏的油底壳或磨损的垫片导致漏油。底部的放油塞在换油时拆除。放油塞的正确扭矩可防止滑丝。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Oil Pan Gasket Replacement"
  },
  "oil_pump": {
    term: "Oil Pump",
    termChinese: "机油泵",
    section: "A1",
    definition: "A gear-type or gerotor pump driven by the crankshaft that pressurizes and circulates engine oil throughout the engine. It draws oil from the pan through a pickup tube and screen, then forces it through the oil filter and into the oil galleries. Low oil pump output causes low oil pressure, bearing wear, and potential engine failure.",
    definitionChinese: "由曲轴驱动的齿轮式或转子式泵，对发动机机油加压并在整个发动机中循环。从油底壳通过吸油管和滤网吸油，然后通过机油滤清器压入油道。机油泵输出低导致油压低、轴承磨损和潜在的发动机故障。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Oil Pump Function and Oil Pressure"
  },

  // ===== ADDITIONAL TERMS BATCH 2: DRIVETRAIN, BRAKES, STEERING =====
  "wheel_bearing": {
    term: "Wheel Bearing",
    termChinese: "车轮轴承",
    section: "A4",
    definition: "Bearings that allow the wheel hub to rotate smoothly on the spindle or knuckle. They can be tapered roller, ball, or sealed hub unit types. Worn wheel bearings produce a humming or growling noise that changes with vehicle speed and may vary during turns. Excessive play is checked by grabbing the tire at 12 and 6 o'clock and rocking it.",
    definitionChinese: "允许轮毂在主轴或转向节上平稳旋转的轴承。可以是锥形滚子、滚珠或密封轮毂单元类型。磨损的车轮轴承产生随车速变化的嗡嗡声或咆哮声，转弯时可能变化。通过抓住轮胎12点和6点钟位置摇动来检查过大间隙。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Wheel Bearing Noise Diagnosis"
  },
  "wheel_hub": {
    term: "Wheel Hub Assembly",
    termChinese: "轮毂总成",
    section: "A4",
    definition: "The assembly that connects the wheel to the vehicle and contains the wheel bearings. Modern hub assemblies are often sealed units with integrated ABS wheel speed sensors. The wheel studs press into the hub flange. A failing hub assembly causes noise, ABS warning lights, and wheel wobble. Hub bearing replacement is a common repair.",
    definitionChinese: "连接车轮和车辆的总成，包含车轮轴承。现代轮毂总成通常是集成ABS轮速传感器的密封单元。轮螺栓压入轮毂法兰。故障的轮毂总成导致噪音、ABS警告灯和车轮晃动。轮毂轴承更换是常见维修。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Wheel Hub Assembly Replacement"
  },
  "coil_spring": {
    term: "Coil Spring",
    termChinese: "螺旋弹簧",
    section: "A4",
    definition: "A helical spring used in the suspension system to absorb road shocks and support the vehicle's weight. Coil springs are rated by their spring rate (stiffness). Sagging springs lower ride height and affect wheel alignment. Springs must be compressed carefully during strut replacement using a spring compressor tool due to extreme stored energy.",
    definitionChinese: "悬架系统中用于吸收路面冲击和支撑车辆重量的螺旋弹簧。螺旋弹簧按弹簧刚度额定。下沉的弹簧降低车身高度并影响车轮定位。由于储存的极大能量，更换减震器支柱时必须使用弹簧压缩器小心压缩弹簧。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Coil Spring Suspension Function"
  },
  "leaf_spring": {
    term: "Leaf Spring",
    termChinese: "钢板弹簧",
    section: "A4",
    definition: "A suspension spring made of stacked curved metal strips (leaves) commonly used on truck rear axles. The main leaf has eyes at each end for mounting. Leaf springs serve as both the spring and the locating member for the axle. Broken leaves cause sagging, uneven ride height, and clunking noises. U-bolts secure the axle to the spring.",
    definitionChinese: "由堆叠的弯曲金属条（弹簧片）制成的悬架弹簧，常用于卡车后桥。主弹簧片两端有安装用的卷耳。钢板弹簧既是弹簧又是车桥的定位件。断裂的弹簧片导致下沉、不均匀的车身高度和咔嗒声。U形螺栓将车桥固定在弹簧上。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Leaf Spring Suspension Explained"
  },
  "torsion_bar": {
    term: "Torsion Bar",
    termChinese: "扭力杆",
    section: "A4",
    definition: "A straight steel bar used as a spring element in some suspension systems. One end is anchored to the frame and the other to the lower control arm. As the wheel hits a bump, the bar twists to absorb the force. Ride height is adjustable by turning a bolt on the anchor end. Common on older trucks and some SUVs.",
    definitionChinese: "某些悬架系统中用作弹簧元件的直钢杆。一端固定在车架上，另一端固定在下控制臂上。车轮遇到颠簸时，杆扭转吸收力。通过转动固定端的螺栓可调节车身高度。常见于老式卡车和某些SUV。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Torsion Bar Suspension System"
  },
  "brake_pad": {
    term: "Brake Pad",
    termChinese: "刹车片",
    section: "A5",
    definition: "A friction material bonded or riveted to a steel backing plate that presses against the brake rotor to create stopping force in disc brake systems. Pads wear with use and have minimum thickness specifications. Wear indicators (metal tabs) create a squealing noise when pads need replacement. Different compounds suit different driving conditions.",
    definitionChinese: "粘合或铆接在钢背板上的摩擦材料，在盘式制动系统中压紧制动盘以产生制动力。刹车片随使用磨损，有最小厚度规格。磨损指示器（金属片）在需要更换时产生尖叫声。不同的配方适合不同的驾驶条件。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Brake Pad Replacement Guide"
  },
  "brake_line": {
    term: "Brake Line",
    termChinese: "制动管路",
    section: "A5",
    definition: "Steel tubing and flexible rubber hoses that carry brake fluid under high pressure from the master cylinder to the wheel brake assemblies. Steel lines must be double-flare or ISO-flare type for safety. Rubber hoses flex with suspension movement but deteriorate over time, potentially swelling internally and restricting fluid flow, causing brake pull.",
    definitionChinese: "将制动液在高压下从主缸输送到车轮制动总成的钢管和柔性橡胶软管。钢管必须是双喇叭口或ISO喇叭口类型以确保安全。橡胶软管随悬架运动弯曲但随时间劣化，可能内部膨胀限制液体流动，导致制动偏移。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Brake Line Types and Replacement"
  },
  "rotor_runout": {
    term: "Rotor Runout",
    termChinese: "制动盘径向跳动",
    section: "A5",
    definition: "The measurement of how much a brake rotor wobbles as it rotates, checked with a dial indicator. Excessive lateral runout (typically more than 0.002-0.003 inches) causes brake pulsation felt in the pedal during braking. Runout can be caused by improper lug nut torque, hub face contamination, or a warped rotor. Resurfacing or replacement corrects this.",
    definitionChinese: "测量制动盘旋转时摆动幅度的数值，用百分表检查。过大的横向跳动（通常超过0.002-0.003英寸）导致制动时踏板脉动。跳动可由不正确的螺母扭矩、轮毂表面污染或变形的制动盘引起。重新修面或更换可纠正此问题。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Measuring Brake Rotor Runout"
  },
  "brake_shoe": {
    term: "Brake Shoe",
    termChinese: "制动蹄",
    section: "A5",
    definition: "A curved metal platform with friction material bonded or riveted to it, used in drum brake systems. When the wheel cylinder pushes the shoes outward against the drum, friction slows the wheel. Self-adjusting mechanisms compensate for wear. The leading shoe does more work than the trailing shoe due to servo action.",
    definitionChinese: "带有粘合或铆接摩擦材料的弯曲金属平台，用于鼓式制动系统。当轮缸向外推动制动蹄抵住制动鼓时，摩擦使车轮减速。自调整机构补偿磨损。由于伺服作用，前蹄比后蹄做更多的工作。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Drum Brake Shoe Replacement"
  },
  "power_steering_fluid": {
    term: "Power Steering Fluid",
    termChinese: "助力转向液",
    section: "A4",
    definition: "A hydraulic fluid used in power steering systems to transmit force from the pump to the steering gear. It must meet specific viscosity and additive requirements. Low fluid causes whining noise from the pump and heavy steering. Contaminated fluid accelerates pump and rack wear. Some systems use ATF while others require specific PS fluid.",
    definitionChinese: "在助力转向系统中用于将力从泵传递到转向器的液压油。必须满足特定的粘度和添加剂要求。液位低导致泵发出呜呜声和转向沉重。污染的油液加速泵和齿条磨损。某些系统使用ATF，而其他系统需要特定的PS液。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Power Steering Fluid Check and Replacement"
  },
  "idler_arm": {
    term: "Idler Arm",
    termChinese: "惰臂",
    section: "A4",
    definition: "A pivoting arm on the passenger side of a parallelogram steering system that supports the center link and mirrors the motion of the pitman arm. A worn idler arm causes play in the steering, wandering, and uneven tire wear. It is checked by lifting the tire and pushing the center link up and down to feel for looseness.",
    definitionChinese: "平行四边形转向系统中副驾驶侧的枢轴臂，支撑中心拉杆并反映摇臂的运动。磨损的惰臂导致转向间隙、跑偏和不均匀的轮胎磨损。通过抬起轮胎并上下推动中心拉杆来感觉松动进行检查。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Idler Arm and Pitman Arm Function"
  },
  "pitman_arm": {
    term: "Pitman Arm",
    termChinese: "摇臂",
    section: "A4",
    definition: "The arm connecting the steering gear output shaft to the center link in a parallelogram steering system. It converts the rotational output of the steering gear into lateral motion to steer the wheels. A worn pitman arm causes excessive steering play. It is splined to the sector shaft and secured with a nut.",
    definitionChinese: "在平行四边形转向系统中连接转向器输出轴和中心拉杆的臂。将转向器的旋转输出转换为横向运动来转向车轮。磨损的摇臂导致转向间隙过大。通过花键连接到扇形轴并用螺母固定。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Pitman Arm and Steering Gear"
  },
  "cv_boot": {
    term: "CV Boot",
    termChinese: "CV接头防尘套",
    section: "A3",
    definition: "A flexible rubber or thermoplastic boot that covers and protects the CV (constant velocity) joint, keeping grease in and contaminants out. A torn CV boot allows grease to escape and dirt to enter, quickly destroying the joint. A clicking noise during turns is a classic sign of a worn CV joint from a torn boot.",
    definitionChinese: "覆盖和保护CV（等速）接头的柔性橡胶或热塑性防尘套，保持润滑脂并阻挡污染物。破裂的CV防尘套允许润滑脂流出和灰尘进入，迅速损坏接头。转弯时的咔哒声是CV接头因防尘套破裂而磨损的典型标志。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "CV Boot and CV Joint Replacement"
  },
  "driveshaft": {
    term: "Driveshaft",
    termChinese: "传动轴",
    section: "A3",
    definition: "A rotating shaft that transmits torque from the transmission to the rear differential in RWD vehicles, or from the transfer case to the front and rear axles in 4WD/AWD vehicles. It uses universal joints or CV joints to accommodate suspension movement. An out-of-balance driveshaft causes vibration at highway speeds.",
    definitionChinese: "在后驱车辆中从变速箱到后差速器传递扭矩的旋转轴，或在四驱/全驱车辆中从分动箱到前后车桥的旋转轴。使用万向节或CV接头适应悬架运动。失衡的传动轴在高速行驶时导致振动。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Driveshaft and U-Joint Operation"
  },
  "axle_shaft": {
    term: "Axle Shaft",
    termChinese: "半轴",
    section: "A3",
    definition: "A rotating shaft that transmits torque from the differential to the drive wheels. In semi-floating axles (most passenger cars), it also supports the vehicle weight. In full-floating axles (heavy-duty trucks), the hub bearings carry the weight. Broken axle shafts cause complete loss of drive to the affected wheel.",
    definitionChinese: "从差速器向驱动轮传递扭矩的旋转轴。在半浮式车桥（大多数乘用车）中，它还支撑车辆重量。在全浮式车桥（重型卡车）中，轮毂轴承承载重量。断裂的半轴导致受影响车轮完全丧失驱动力。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Axle Shaft Types and Replacement"
  },
  "limited_slip_differential": {
    term: "Limited-Slip Differential (LSD)",
    termChinese: "限滑差速器",
    section: "A3",
    definition: "A differential that uses clutch packs or other mechanisms to limit the speed difference between the two axle shafts, providing better traction when one wheel slips. Unlike an open differential, it transfers some torque to the wheel with grip. Requires special friction modifier additive in the gear oil to prevent chatter during turns.",
    definitionChinese: "使用离合器片组或其他机构限制两个半轴之间速度差的差速器，在一个车轮打滑时提供更好的牵引力。与开放式差速器不同，它将部分扭矩传递到有抓地力的车轮。齿轮油中需要特殊的摩擦改进剂添加剂以防止转弯时的颤动。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Limited-Slip Differential Explained"
  },
  "neutral_safety_switch": {
    term: "Neutral Safety Switch",
    termChinese: "空挡安全开关",
    section: "A6",
    definition: "A switch on the transmission that prevents the starter from engaging unless the transmission is in Park or Neutral. It also activates the backup lights in Reverse. A misadjusted or faulty switch can prevent starting, allow starting in gear (dangerous), or cause incorrect backup light operation. Also called the transmission range sensor.",
    definitionChinese: "变速箱上的开关，防止起动机在变速箱不在停车挡或空挡时啮合。还在倒车挡时激活倒车灯。调整不当或故障的开关可能阻止启动、允许在挂挡状态下启动（危险）或导致倒车灯工作不正常。也称为变速箱挡位传感器。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Neutral Safety Switch Testing"
  },
  "compressor_clutch": {
    term: "A/C Compressor Clutch",
    termChinese: "空调压缩机离合器",
    section: "A7",
    definition: "An electromagnetic clutch on the front of the A/C compressor that engages and disengages the compressor from the serpentine belt. When current flows to the clutch coil, it magnetizes and pulls the clutch plate against the pulley to drive the compressor. Clutch cycling is controlled by the PCM based on pressure and temperature inputs.",
    definitionChinese: "空调压缩机前端的电磁离合器，使压缩机与蛇形皮带啮合和脱离。当电流流过离合器线圈时，磁化并将离合器片拉向皮带轮以驱动压缩机。离合器循环由PCM根据压力和温度输入控制。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "A/C Compressor Clutch Testing"
  },
  "orifice_tube": {
    term: "Orifice Tube",
    termChinese: "节流管",
    section: "A7",
    definition: "A fixed metering device in A/C systems that restricts refrigerant flow between the condenser and evaporator, causing a pressure and temperature drop. Unlike a TXV, it has no moving parts and cannot vary refrigerant flow. Systems with orifice tubes use an accumulator on the low side. A clogged orifice tube reduces cooling capacity.",
    definitionChinese: "空调系统中的固定计量装置，限制冷凝器和蒸发器之间的制冷剂流量，导致压力和温度下降。与TXV不同，它没有运动部件，不能改变制冷剂流量。使用节流管的系统在低压侧使用储液器。堵塞的节流管降低制冷能力。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Orifice Tube vs TXV in A/C Systems"
  },
  "refrigerant_oil": {
    term: "Refrigerant Oil (PAG/POE)",
    termChinese: "制冷剂油",
    section: "A7",
    definition: "Special lubricating oil that circulates with the refrigerant to lubricate the compressor's internal components. PAG (Polyalkylene Glycol) oil is used in most R-134a systems, while POE (Polyol Ester) oil is used in hybrid/electric vehicles. Using the wrong oil type damages the compressor. The correct viscosity must match the compressor specification.",
    definitionChinese: "与制冷剂一起循环以润滑压缩机内部部件的特殊润滑油。PAG（聚烷撑二醇）油用于大多数R-134a系统，而POE（多元醇酯）油用于混合动力/电动车辆。使用错误的油类型会损坏压缩机。正确的粘度必须与压缩机规格匹配。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "A/C Refrigerant Oil Types"
  },

  // ===== ADDITIONAL TERMS BATCH 3: ELECTRICAL & ENGINE PERFORMANCE =====
  "ignition_switch": {
    term: "Ignition Switch",
    termChinese: "点火开关",
    section: "A6",
    definition: "The electrical switch operated by the ignition key or push button that controls power to the vehicle's electrical systems. It has multiple positions: Off, Accessory, Run, and Start. A faulty ignition switch can cause no-start, intermittent stalling, or loss of electrical accessories. The lock cylinder is a separate mechanical component.",
    definitionChinese: "由点火钥匙或按钮操作的电气开关，控制车辆电气系统的供电。有多个位置：关闭、附件、运行和启动。故障的点火开关可导致无法启动、间歇性熄火或电气附件失效。锁芯是单独的机械部件。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=9n7eVsEmhMk",
    youtubeTitle: "Ignition Switch Testing and Replacement"
  },
  "spark_plug_wire": {
    term: "Spark Plug Wire",
    termChinese: "火花塞线",
    section: "A8",
    definition: "High-voltage cables that carry the ignition coil's output to the spark plugs. They use carbon or spiral-wound conductors with thick silicone insulation. Worn or damaged wires cause misfires, rough idle, and increased emissions due to weak or no spark. Wire resistance should be checked with an ohmmeter; typical specification is under 10,000 ohms per foot.",
    definitionChinese: "将点火线圈输出传送到火花塞的高压电缆。使用碳导体或螺旋绕制导体配合厚硅胶绝缘。磨损或损坏的导线因火花弱或无火花导致失火、怠速不稳和排放增加。应用欧姆表检查导线电阻；典型规格为每英尺低于10,000欧姆。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=9n7eVsEmhMk",
    youtubeTitle: "Spark Plug Wire Testing"
  },
  "distributor": {
    term: "Distributor",
    termChinese: "分电器",
    section: "A8",
    definition: "A rotating device that directs high-voltage spark from the ignition coil to each spark plug in firing order via the distributor cap and rotor. Contains the pickup coil or Hall-effect sensor for timing. Modern engines use distributorless ignition (DIS) or coil-on-plug systems instead. A worn distributor cap causes crossfire and misfires.",
    definitionChinese: "旋转装置，通过分电器盖和转子按点火顺序将点火线圈的高压火花引导到每个火花塞。包含用于正时的拾取线圈或霍尔效应传感器。现代发动机使用无分电器点火（DIS）或缸上线圈系统。磨损的分电器盖导致串火和失火。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=9n7eVsEmhMk",
    youtubeTitle: "Distributor Ignition System Explained"
  },
  "throttle_body": {
    term: "Throttle Body",
    termChinese: "节气门体",
    section: "A8",
    definition: "A valve assembly that controls the amount of air entering the engine based on accelerator pedal input. Modern electronic throttle bodies use a motor controlled by the PCM (drive-by-wire). Carbon buildup on the throttle plate can cause rough idle and stalling. The throttle position sensor monitors the plate angle for the PCM.",
    definitionChinese: "根据油门踏板输入控制进入发动机空气量的阀门总成。现代电子节气门体使用由PCM控制的电机（线控驱动）。节气门板上的积碳可导致怠速不稳和熄火。节气门位置传感器监测板的角度供PCM使用。",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Carburetor.svg",
    youtube: "https://www.youtube.com/watch?v=9n7eVsEmhMk",
    youtubeTitle: "Throttle Body Cleaning and Function"
  },
  "idle_air_control": {
    term: "Idle Air Control (IAC) Valve",
    termChinese: "怠速空气控制阀",
    section: "A8",
    definition: "A PCM-controlled valve that regulates airflow bypassing the throttle plate to control idle speed. It opens or closes a small air passage to maintain target idle RPM under varying loads (A/C, power steering, electrical loads). A stuck or dirty IAC causes erratic idle, stalling, or high idle. Cleaning or replacement resolves most IAC issues.",
    definitionChinese: "PCM控制的阀门，调节绕过节气门板的气流以控制怠速。打开或关闭小型气道以在不同负荷下（空调、助力转向、电气负荷）维持目标怠速转速。卡住或脏污的IAC导致怠速不稳、熄火或高怠速。清洁或更换可解决大多数IAC问题。",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Carburetor.svg",
    youtube: "https://www.youtube.com/watch?v=9n7eVsEmhMk",
    youtubeTitle: "IAC Valve Function and Testing"
  },
  "coolant": {
    term: "Coolant (Antifreeze)",
    termChinese: "冷却液（防冻液）",
    section: "A1",
    definition: "A mixture of ethylene glycol or propylene glycol with water that circulates through the engine to regulate temperature. It prevents freezing in winter and boiling in summer while also providing corrosion protection. Different types (green IAT, orange OAT, yellow HOAT) must not be mixed. Coolant concentration is tested with a refractometer or hydrometer.",
    definitionChinese: "乙二醇或丙二醇与水的混合液，在发动机中循环以调节温度。冬季防冻，夏季防沸，同时提供防腐保护。不同类型（绿色IAT、橙色OAT、黄色HOAT）不得混合。用折光仪或比重计测试冷却液浓度。",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Automobile_radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=aOXz5hlKO9s",
    youtubeTitle: "Coolant Types and Mixing Guide"
  },
  "engine_oil": {
    term: "Engine Oil",
    termChinese: "发动机机油",
    section: "A1",
    definition: "Lubricant that reduces friction between moving engine parts, carries away heat, suspends contaminants, and provides a sealing film for pistons and rings. Viscosity grades (like 5W-30) indicate flow characteristics at cold and hot temperatures. Synthetic oils offer better protection in extreme conditions. Oil should be changed per manufacturer intervals.",
    definitionChinese: "减少发动机运动部件之间摩擦、带走热量、悬浮污染物并为活塞和活塞环提供密封油膜的润滑剂。粘度等级（如5W-30）表示冷热温度下的流动特性。合成油在极端条件下提供更好的保护。应按制造商间隔更换机油。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Engine Oil Basics and Selection"
  },
  "fuel_filter": {
    term: "Fuel Filter",
    termChinese: "燃油滤清器",
    section: "A8",
    definition: "A filter in the fuel delivery system that removes dirt, rust particles, and other contaminants before fuel reaches the injectors. A clogged fuel filter restricts flow, causing loss of power under load, hard starting, and engine stalling. Some modern vehicles have filters integrated into the fuel pump module inside the tank.",
    definitionChinese: "燃油输送系统中的过滤器，在燃油到达喷油器之前去除灰尘、锈蚀颗粒和其他污染物。堵塞的燃油滤清器限制流量，导致负荷下动力不足、启动困难和发动机熄火。一些现代车辆的滤清器集成在油箱内的燃油泵模块中。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=i70X4-RCBKs",
    youtubeTitle: "Fuel Filter Replacement Guide"
  },
  "camshaft_position_sensor": {
    term: "Camshaft Position Sensor (CMP)",
    termChinese: "凸轮轴位置传感器",
    section: "A8",
    definition: "A sensor that monitors the rotational position and speed of the camshaft, telling the PCM which cylinder is on its power stroke. Used with the crankshaft position sensor for sequential fuel injection and ignition timing. A failing CMP sensor can cause hard starting, misfires, and stalling. It typically generates a Hall-effect or magnetic signal.",
    definitionChinese: "监测凸轮轴旋转位置和速度的传感器，告诉PCM哪个气缸在做功冲程。与曲轴位置传感器一起用于顺序燃油喷射和点火正时。故障的CMP传感器可导致启动困难、失火和熄火。通常产生霍尔效应或磁信号。",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Camshaft.JPG",
    youtube: "https://www.youtube.com/watch?v=9n7eVsEmhMk",
    youtubeTitle: "Camshaft Position Sensor Testing"
  },
  "mass_air_flow": {
    term: "Mass Air Flow (MAF)",
    termChinese: "质量空气流量",
    section: "A8",
    definition: "The measurement of how much air is entering the engine, detected by the MAF sensor. The PCM uses this data to calculate the correct amount of fuel to inject. A contaminated MAF sensor reads incorrectly, causing lean or rich conditions, rough idle, hesitation, and poor fuel economy. The sensor can often be cleaned with MAF cleaner spray.",
    definitionChinese: "MAF传感器检测到的进入发动机的空气量测量值。PCM使用此数据计算正确的燃油喷射量。污染的MAF传感器读数不正确，导致混合气偏稀或偏浓、怠速不稳、犹豫和油耗增加。传感器通常可以用MAF清洁剂喷雾清洁。",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Carburetor.svg",
    youtube: "https://www.youtube.com/watch?v=9n7eVsEmhMk",
    youtubeTitle: "MAF Sensor Cleaning and Testing"
  },
  "manifold_absolute_pressure": {
    term: "Manifold Absolute Pressure (MAP)",
    termChinese: "进气歧管绝对压力",
    section: "A8",
    definition: "The pressure measured inside the intake manifold by the MAP sensor. At idle, MAP reads low (high vacuum); at wide-open throttle, it reads near atmospheric. The PCM uses MAP with RPM to calculate engine load and determine fuel delivery and ignition timing. A faulty MAP sensor causes rich running, poor fuel economy, and black exhaust smoke.",
    definitionChinese: "MAP传感器测量的进气歧管内部压力。怠速时MAP读数低（高真空）；全开节气门时接近大气压。PCM使用MAP和RPM计算发动机负荷并确定燃油供给和点火正时。故障的MAP传感器导致混合气偏浓、油耗增加和黑色排气烟。",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Carburetor.svg",
    youtube: "https://www.youtube.com/watch?v=9n7eVsEmhMk",
    youtubeTitle: "MAP Sensor Function and Testing"
  },
  "short_term_fuel_trim": {
    term: "Short-Term Fuel Trim (STFT)",
    termChinese: "短期燃油修正",
    section: "A8",
    definition: "A real-time PCM adjustment to fuel injector pulse width based on oxygen sensor feedback. Positive values mean the PCM is adding fuel (lean correction); negative values mean it is removing fuel (rich correction). Normal range is plus or minus 10%. Values beyond that indicate a fuel delivery or air leak problem that needs diagnosis.",
    definitionChinese: "PCM基于氧传感器反馈对喷油器脉冲宽度的实时调整。正值表示PCM正在加油（稀修正）；负值表示正在减油（浓修正）。正常范围是正负10%。超出该范围的值表明需要诊断的燃油供给或空气泄漏问题。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=9n7eVsEmhMk",
    youtubeTitle: "Understanding Fuel Trims"
  },
  "long_term_fuel_trim": {
    term: "Long-Term Fuel Trim (LTFT)",
    termChinese: "长期燃油修正",
    section: "A8",
    definition: "A learned PCM fuel correction that compensates for ongoing deviations from the ideal air-fuel ratio. It represents a semi-permanent adjustment stored in memory. High positive LTFT values suggest a consistent lean condition (vacuum leak, weak fuel pump). High negative values suggest a rich condition (leaking injector, high fuel pressure).",
    definitionChinese: "PCM学习到的燃油修正，补偿理想空燃比的持续偏差。代表存储在内存中的半永久性调整。高正LTFT值表明持续的稀工况（真空泄漏、燃油泵弱）。高负值表明浓工况（喷油器泄漏、燃油压力高）。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=9n7eVsEmhMk",
    youtubeTitle: "Long-Term Fuel Trim Diagnosis"
  },
  "torque_wrench": {
    term: "Torque Wrench",
    termChinese: "扭力扳手",
    section: "G1",
    definition: "A precision tool that allows a mechanic to tighten fasteners to a specific torque value. Types include click-type, beam-type, and electronic. Proper torque is critical for head bolts, wheel lug nuts, and many other fasteners to prevent warping, stripping, or loosening. Most torque wrenches should be stored at the lowest setting and recalibrated periodically.",
    definitionChinese: "精密工具，允许技师将紧固件拧紧到特定扭矩值。类型包括咔嗒式、梁式和电子式。正确的扭矩对缸盖螺栓、车轮螺母和许多其他紧固件至关重要，以防止翘曲、滑丝或松动。大多数扭力扳手应在最低设置下存放并定期校准。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "How to Use a Torque Wrench"
  },
  "timing_belt": {
    term: "Timing Belt",
    termChinese: "正时皮带",
    section: "A1",
    definition: "A toothed rubber belt that synchronizes the rotation of the crankshaft and camshaft(s) to ensure valves open and close at the correct time relative to piston position. Timing belts have service intervals (typically 60,000-100,000 miles) and must be replaced before failure. A broken timing belt on an interference engine causes catastrophic valve-to-piston contact.",
    definitionChinese: "齿形橡胶皮带，同步曲轴和凸轮轴的旋转，确保气门相对于活塞位置在正确时间开关。正时皮带有保养间隔（通常60,000-100,000英里），必须在失效前更换。在干涉型发动机上，断裂的正时皮带导致气门与活塞的灾难性撞击。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=9n7eVsEmhMk",
    youtubeTitle: "Timing Belt Replacement and Function"
  },
  "engine_block": {
    term: "Engine Block",
    termChinese: "发动机缸体",
    section: "A1",
    definition: "The main structural casting of the engine containing the cylinders, coolant passages, oil galleries, and the crankshaft main bearing saddles. Made from cast iron or aluminum alloy. The block must be inspected for cracks, warpage, and cylinder bore wear during overhaul. Deck surface flatness is critical for head gasket sealing.",
    definitionChinese: "发动机的主要结构铸件，包含气缸、冷却液通道、油道和曲轴主轴承座。由铸铁或铝合金制成。大修时必须检查缸体的裂纹、翘曲和气缸孔磨损。缸体上平面的平整度对缸垫密封至关重要。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Engine Block Inspection"
  },
  "solenoid": {
    term: "Solenoid",
    termChinese: "电磁阀/螺线管",
    section: "A6",
    definition: "An electromagnetic device that converts electrical energy into linear mechanical motion. When energized, the coil creates a magnetic field that pulls a plunger. Used extensively in vehicles for starter engagement, transmission shift control, fuel injector operation, door locks, and EVAP system purge. Testing involves checking coil resistance and voltage supply.",
    definitionChinese: "将电能转换为直线机械运动的电磁装置。通电时，线圈产生磁场拉动柱塞。在车辆中广泛用于起动机啮合、变速箱换挡控制、喷油器操作、门锁和EVAP系统清洗。测试包括检查线圈电阻和电压供应。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=9n7eVsEmhMk",
    youtubeTitle: "How Solenoids Work in Cars"
  },
  "diode": {
    term: "Diode",
    termChinese: "二极管",
    section: "A6",
    definition: "A semiconductor device that allows current flow in one direction only. In automotive applications, diodes are used in the alternator rectifier bridge to convert AC to DC, as suppression diodes across relay coils to prevent voltage spikes, and in lighting circuits. A shorted diode in the alternator causes AC voltage ripple and can drain the battery.",
    definitionChinese: "只允许电流单向流动的半导体器件。在汽车应用中，二极管用于发电机整流桥将交流电转换为直流电、用作继电器线圈上的抑制二极管防止电压尖峰，以及用于照明电路。发电机中短路的二极管导致交流电压纹波并可能耗尽电池。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=9n7eVsEmhMk",
    youtubeTitle: "Automotive Diode Testing"
  },
  "wire_harness": {
    term: "Wire Harness",
    termChinese: "线束",
    section: "A6",
    definition: "A bundled assembly of wires, connectors, and terminals that routes electrical signals and power throughout the vehicle. Harnesses are designed with specific wire gauges for different current loads and include protective loom, tape, or conduit. Chafed or corroded harness connections cause intermittent electrical faults that can be difficult to diagnose.",
    definitionChinese: "导线、连接器和端子的捆扎组件，在整个车辆中传输电信号和电源。线束根据不同电流负荷设计特定线径，包括保护波纹管、胶带或导管。磨损或腐蚀的线束连接导致间歇性电气故障，可能难以诊断。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=9n7eVsEmhMk",
    youtubeTitle: "Wire Harness Repair Techniques"
  },
  "headlight": {
    term: "Headlight",
    termChinese: "前照灯",
    section: "A6",
    definition: "The primary forward-facing lights on a vehicle for illumination at night and in poor visibility. Types include halogen, HID (xenon), and LED. Headlight aiming is important for proper road illumination without blinding oncoming traffic. Dim headlights can indicate voltage drop in the circuit, failing bulbs, or corroded connectors and grounds.",
    definitionChinese: "车辆前方的主要照明灯，用于夜间和能见度差时照明。类型包括卤素、HID（氙气）和LED。前照灯瞄准对正确的道路照明而不致盲对向车辆很重要。暗淡的前照灯可能表明电路中的电压降、灯泡失效或腐蚀的连接器和接地。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=9n7eVsEmhMk",
    youtubeTitle: "Headlight Diagnosis and Replacement"
  },
  "horn": {
    term: "Horn",
    termChinese: "喇叭",
    section: "A6",
    definition: "An audible warning device required on all road vehicles. Operates via a relay circuit triggered by the horn button through the clock spring. A non-working horn can be caused by a blown fuse, faulty relay, corroded ground, failed clock spring, or the horn itself. Testing involves checking power and ground at the horn connector.",
    definitionChinese: "所有道路车辆必须配备的声音警告装置。通过时钟弹簧由喇叭按钮触发的继电器电路工作。喇叭不工作可能由保险丝烧断、继电器故障、接地腐蚀、时钟弹簧故障或喇叭本身引起。测试包括检查喇叭连接器处的电源和接地。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=9n7eVsEmhMk",
    youtubeTitle: "Horn Circuit Diagnosis"
  },
  "window_motor": {
    term: "Power Window Motor",
    termChinese: "电动车窗电机",
    section: "A6",
    definition: "A small DC motor that drives the window regulator to raise and lower the door glass. It receives power through the window switch and is reversible for up/down operation. A slow or non-functional window can be caused by a failed motor, faulty switch, broken regulator, or binding in the glass channel. Current draw testing helps isolate the cause.",
    definitionChinese: "驱动车窗升降器升降车门玻璃的小型直流电机。通过车窗开关接收电源，可逆转实现上下操作。缓慢或失效的车窗可能由电机故障、开关故障、升降器断裂或玻璃导槽卡滞引起。电流消耗测试有助于隔离原因。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=9n7eVsEmhMk",
    youtubeTitle: "Power Window Motor Diagnosis"
  },
  "fuel_rail": {
    term: "Fuel Rail",
    termChinese: "燃油分配管",
    section: "A8",
    definition: "A metal tube or pipe that distributes pressurized fuel equally to all fuel injectors. It maintains consistent fuel pressure across all cylinders. The fuel pressure regulator (or returnless system pressure control) attaches to the rail. A fuel rail with a Schrader valve allows fuel pressure testing. Leaking fuel rails are a fire hazard.",
    definitionChinese: "将加压燃油均匀分配到所有喷油器的金属管。在所有气缸上保持一致的燃油压力。燃油压力调节器（或无回流系统压力控制）连接到燃油轨。带施拉德阀的燃油轨允许燃油压力测试。泄漏的燃油轨是火灾隐患。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=i70X4-RCBKs",
    youtubeTitle: "Fuel Rail and Injector Service"
  },
  "exhaust_system": {
    term: "Exhaust System",
    termChinese: "排气系统",
    section: "A8",
    definition: "The complete system that routes exhaust gases from the engine to the atmosphere, including the exhaust manifold, catalytic converter, resonator, muffler, and tailpipe. It reduces noise and harmful emissions. Exhaust leaks cause ticking noises, failed emission tests, and can allow CO into the cabin. Rust and corrosion are common failure causes.",
    definitionChinese: "将废气从发动机排到大气中的完整系统，包括排气歧管、催化转化器、谐振器、消声器和尾管。减少噪音和有害排放。排气泄漏导致滴答声、排放测试失败，并可能让CO进入驾驶室。锈蚀和腐蚀是常见的故障原因。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Exhaust System Components Explained"
  },
  "muffler": {
    term: "Muffler",
    termChinese: "消声器",
    section: "A8",
    definition: "A device in the exhaust system that reduces engine noise using internal chambers and baffles to cancel sound waves. A restricted muffler causes back pressure, reducing engine performance. A rusted-through muffler is excessively loud and may allow exhaust fumes to enter the cabin. Mufflers should be inspected for holes, rust, and loose hangers.",
    definitionChinese: "排气系统中使用内部腔室和隔板消除声波以降低发动机噪音的装置。受限的消声器导致背压，降低发动机性能。锈穿的消声器过于嘈杂，可能让排气烟雾进入驾驶室。应检查消声器是否有孔、锈蚀和松动的吊架。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "How a Muffler Works"
  },
  "emission_test": {
    term: "Emission Test",
    termChinese: "排放测试",
    section: "A8",
    definition: "A government-mandated inspection that measures the levels of pollutants (HC, CO, NOx, CO2) in a vehicle's exhaust. OBD-II vehicles are tested by checking for readiness monitors and DTCs. Older vehicles may undergo a tailpipe emissions test with a gas analyzer. Common causes of failure include a bad catalytic converter, misfires, and EVAP leaks.",
    definitionChinese: "政府强制的检查，测量车辆排气中的污染物水平（HC、CO、NOx、CO2）。OBD-II车辆通过检查就绪监测器和DTC进行测试。较老的车辆可能用气体分析仪进行尾管排放测试。常见的失败原因包括催化转化器故障、失火和EVAP泄漏。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=9n7eVsEmhMk",
    youtubeTitle: "Common Reasons for Emission Test Failure"
  },
  "wideband_oxygen_sensor": {
    term: "Wideband Oxygen Sensor (A/F Sensor)",
    termChinese: "宽带氧传感器（空燃比传感器）",
    section: "A8",
    definition: "An advanced oxygen sensor (typically upstream, Bank 1 Sensor 1) that can measure a wide range of air-fuel ratios rather than just switching between rich and lean like a narrow-band sensor. It provides more precise feedback to the PCM for tighter fuel control and lower emissions. It operates at higher temperatures and uses a different voltage output pattern.",
    definitionChinese: "先进的氧传感器（通常为上游Bank 1 Sensor 1），可以测量宽范围的空燃比，而不像窄带传感器只在浓稀之间切换。为PCM提供更精确的反馈以实现更严格的燃油控制和更低的排放。在更高温度下工作，使用不同的电压输出模式。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=9n7eVsEmhMk",
    youtubeTitle: "Wideband vs Narrowband O2 Sensors"
  },
  "freeze_frame": {
    term: "Freeze Frame Data",
    termChinese: "冻结帧数据",
    section: "A8",
    definition: "A snapshot of engine sensor data stored by the PCM at the moment a DTC is set. It captures conditions like RPM, load, coolant temperature, fuel trim, and vehicle speed when the fault occurred. Technicians use freeze frame data to understand the conditions that triggered a code, making diagnosis more efficient.",
    definitionChinese: "PCM在设定DTC时存储的发动机传感器数据快照。捕获故障发生时的RPM、负荷、冷却液温度、燃油修正和车速等条件。技师使用冻结帧数据了解触发代码的条件，使诊断更高效。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=9n7eVsEmhMk",
    youtubeTitle: "Using Freeze Frame Data for Diagnosis"
  },
  "drive_cycle": {
    term: "Drive Cycle",
    termChinese: "驾驶循环",
    section: "A8",
    definition: "A specific sequence of driving conditions required by the PCM to run all OBD-II readiness monitors (catalyst, EVAP, O2 sensor, etc.). After clearing DTCs, monitors must complete before an emissions inspection. Different monitors require different conditions (cold start, steady cruise, deceleration). An incomplete drive cycle means monitors are not ready.",
    definitionChinese: "PCM运行所有OBD-II就绪监测器（催化剂、EVAP、O2传感器等）所需的特定驾驶条件序列。清除DTC后，监测器必须在排放检查前完成。不同的监测器需要不同的条件（冷启动、稳定巡航、减速）。不完整的驾驶循环意味着监测器未就绪。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=9n7eVsEmhMk",
    youtubeTitle: "OBD-II Drive Cycle Explained"
  },
  "transmission_mount": {
    term: "Transmission Mount",
    termChinese: "变速箱支架",
    section: "A2",
    definition: "A rubber-and-metal mount that secures the transmission to the vehicle frame or crossmember while absorbing vibration. A worn or broken mount allows excessive transmission movement, causing clunking noises during acceleration or shifting, misalignment with the driveshaft, and potential damage to shift linkage or exhaust components.",
    definitionChinese: "将变速箱固定在车架或横梁上同时吸收振动的橡胶金属支架。磨损或断裂的支架允许变速箱过度移动，导致加速或换挡时的咔嗒声、与传动轴不对齐，以及可能损坏换挡连杆或排气部件。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Transmission Mount Replacement"
  },
  "torque_converter_clutch": {
    term: "Torque Converter Clutch (TCC)",
    termChinese: "液力变矩器锁止离合器",
    section: "A2",
    definition: "A lockup clutch inside the torque converter that mechanically connects the engine to the transmission at highway speeds, eliminating torque converter slippage and improving fuel economy. The PCM controls TCC engagement via a solenoid. A shudder during TCC application indicates worn friction material. A stuck TCC causes stalling when coming to a stop.",
    definitionChinese: "液力变矩器内的锁止离合器，在高速行驶时将发动机与变速箱机械连接，消除液力变矩器滑动并提高燃油经济性。PCM通过电磁阀控制TCC啮合。TCC接合时的抖动表明摩擦材料磨损。卡住的TCC在停车时导致熄火。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Torque Converter Clutch Operation"
  },
  "oil_cooler": {
    term: "Oil Cooler",
    termChinese: "油冷却器",
    section: "A1",
    definition: "A heat exchanger that cools engine oil or transmission fluid using either coolant (liquid-to-liquid) or air (liquid-to-air). Helps maintain proper operating temperature under heavy load conditions. A leaking oil cooler can cause oil-coolant contamination (milky oil or oily coolant). Common on turbocharged engines and towing packages.",
    definitionChinese: "使用冷却液（液-液式）或空气（液-气式）冷却发动机机油或变速箱油的热交换器。帮助在重负荷条件下保持正常工作温度。泄漏的油冷却器可导致油冷却液污染（乳白色机油或油性冷却液）。常见于涡轮增压发动机和拖车套件。",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Automobile_radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=aOXz5hlKO9s",
    youtubeTitle: "Oil Cooler Function and Failure"
  },
  "turbocharger": {
    term: "Turbocharger",
    termChinese: "涡轮增压器",
    section: "A8",
    definition: "A forced-induction device driven by exhaust gases that compresses intake air to increase engine power output. Exhaust spins the turbine wheel, which is shaft-connected to the compressor wheel in the intake. Turbo lag is the delay before boost builds. Turbo failures are often caused by oil starvation, contaminated oil, or foreign object damage.",
    definitionChinese: "由排气驱动的强制进气装置，压缩进气空气以增加发动机功率输出。排气推动涡轮叶轮旋转，涡轮叶轮通过轴连接到进气侧的压缩机叶轮。涡轮迟滞是增压建立前的延迟。涡轮故障通常由油润滑不足、污染的机油或异物损坏引起。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "How Turbochargers Work"
  },
  "supercharger": {
    term: "Supercharger",
    termChinese: "机械增压器",
    section: "A8",
    definition: "A belt-driven forced-induction device that compresses intake air to increase engine power. Unlike a turbocharger, it is mechanically driven by the engine's crankshaft via a belt, providing instant boost with no lag. Types include roots, twin-screw, and centrifugal. The trade-off is that it consumes some engine power to drive itself.",
    definitionChinese: "皮带驱动的强制进气装置，压缩进气空气以增加发动机功率。与涡轮增压器不同，它由发动机曲轴通过皮带机械驱动，提供即时增压无迟滞。类型包括鲁茨式、双螺杆式和离心式。缺点是驱动自身需要消耗一些发动机功率。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Supercharger vs Turbocharger"
  },
  "intercooler": {
    term: "Intercooler",
    termChinese: "中冷器",
    section: "A8",
    definition: "A heat exchanger that cools the compressed intake air from a turbocharger or supercharger before it enters the engine. Cooler air is denser, containing more oxygen molecules for better combustion and more power. Types include air-to-air (uses ambient airflow) and liquid-to-air (uses coolant). A leaking intercooler causes loss of boost pressure.",
    definitionChinese: "在压缩进气从涡轮增压器或机械增压器进入发动机之前冷却它的热交换器。较冷的空气密度更大，含有更多氧分子以实现更好的燃烧和更多功率。类型包括气-气式（使用环境气流）和液-气式（使用冷却液）。泄漏的中冷器导致增压压力损失。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Intercooler Function and Types"
  },
  "wastegate": {
    term: "Wastegate",
    termChinese: "废气旁通阀",
    section: "A8",
    definition: "A valve that controls turbo boost pressure by diverting some exhaust gas away from the turbine wheel. Internal wastegates are built into the turbine housing; external wastegates are separate units. The PCM controls the wastegate actuator (often a solenoid) to maintain target boost levels. A stuck wastegate causes over-boost or under-boost conditions.",
    definitionChinese: "通过将部分排气从涡轮叶轮旁引走来控制涡轮增压压力的阀门。内部废气门内置在涡轮壳体中；外部废气门是独立单元。PCM控制废气门执行器（通常是电磁阀）以保持目标增压水平。卡住的废气门导致过增压或增压不足。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Wastegate Operation and Testing"
  },
  "traction_control": {
    term: "Traction Control System (TCS)",
    termChinese: "牵引力控制系统",
    section: "A5",
    definition: "A system that prevents wheel spin during acceleration by using ABS wheel speed sensors to detect slipping wheels. It reduces engine torque and/or applies brakes to the spinning wheel to maintain traction. Works in conjunction with ABS and stability control. The system can be turned off by the driver but reactivates at each key cycle.",
    definitionChinese: "通过使用ABS轮速传感器检测打滑车轮来防止加速时轮胎打滑的系统。减少发动机扭矩和/或对打滑车轮施加制动以保持牵引力。与ABS和稳定控制系统协同工作。驾驶员可关闭该系统，但每次点火循环时重新激活。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Traction Control System Explained"
  },
  "stability_control": {
    term: "Electronic Stability Control (ESC)",
    termChinese: "电子稳定控制系统",
    section: "A5",
    definition: "A safety system that detects and reduces loss of traction by comparing the driver's intended direction (steering angle) with the vehicle's actual movement (yaw rate sensor). It selectively applies brakes to individual wheels and reduces engine power to help the driver maintain control during skids, understeer, or oversteer conditions.",
    definitionChinese: "通过比较驾驶员意图方向（转向角）与车辆实际运动（偏航率传感器）来检测并减少牵引力损失的安全系统。选择性地对单个车轮施加制动并降低发动机功率，帮助驾驶员在打滑、转向不足或转向过度情况下保持控制。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Electronic Stability Control How It Works"
  },
  "wheel_speed_sensor": {
    term: "Wheel Speed Sensor",
    termChinese: "车轮速度传感器",
    section: "A5",
    definition: "A sensor at each wheel that monitors rotational speed for the ABS, traction control, and stability control systems. Types include passive (variable reluctance) and active (Hall-effect). A faulty sensor triggers ABS and traction control warning lights and disables those systems. Common failures include damaged tone rings, corroded connectors, and broken wires.",
    definitionChinese: "每个车轮上监测旋转速度的传感器，用于ABS、牵引力控制和稳定控制系统。类型包括被动式（可变磁阻）和主动式（霍尔效应）。故障的传感器触发ABS和牵引力控制警告灯并禁用这些系统。常见故障包括信号环损坏、连接器腐蚀和断线。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Wheel Speed Sensor Testing"
  },
  "tire": {
    term: "Tire",
    termChinese: "轮胎",
    section: "G1",
    definition: "The rubber component mounted on the wheel rim that provides traction, cushioning, and directional control. Tire sidewall markings (like P215/65R16) indicate width, aspect ratio, construction type, and diameter. Tread depth minimum is 2/32 inch. Uneven wear patterns indicate alignment, inflation, or suspension issues. Tires should be rotated every 5,000-8,000 miles.",
    definitionChinese: "安装在轮辋上的橡胶部件，提供牵引力、缓冲和方向控制。轮胎侧壁标记（如P215/65R16）表示宽度、扁平比、结构类型和直径。胎面深度最小为2/32英寸。不均匀磨损模式表明对齐、充气或悬架问题。轮胎应每5,000-8,000英里轮换。",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Tire_Valve_Stem.jpg",
    youtube: "https://www.youtube.com/watch?v=K9Gu0f64NWU",
    youtubeTitle: "How to Read Tire Markings"
  },
  "tpms": {
    term: "Tire Pressure Monitoring System (TPMS)",
    termChinese: "轮胎压力监测系统",
    section: "G1",
    definition: "A system that monitors tire inflation pressure and alerts the driver when pressure drops below a threshold (typically 25% below recommended). Direct TPMS uses sensors inside each tire; indirect TPMS uses ABS wheel speed sensors to detect differences in tire rolling circumference. The TPMS light must be diagnosed and reset after tire service.",
    definitionChinese: "监测轮胎充气压力并在压力低于阈值（通常低于推荐值25%）时提醒驾驶员的系统。直接TPMS使用每个轮胎内的传感器；间接TPMS使用ABS轮速传感器检测轮胎滚动周长差异。轮胎保养后必须诊断和重置TPMS灯。",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Tire_Valve_Stem.jpg",
    youtube: "https://www.youtube.com/watch?v=K9Gu0f64NWU",
    youtubeTitle: "TPMS System Operation and Reset"
  },
  "electric_fan": {
    term: "Electric Cooling Fan",
    termChinese: "电子冷却风扇",
    section: "A1",
    definition: "An electrically powered fan mounted behind the radiator that draws air through the radiator core at low speeds and idle when ram airflow is insufficient. Controlled by the PCM based on coolant temperature and A/C status. A non-working fan causes overheating in traffic. The fan relay, temperature sensor, and motor are common failure points.",
    definitionChinese: "安装在散热器后面的电动风扇，在低速和怠速时当迎面气流不足时吸引空气通过散热器芯。由PCM根据冷却液温度和空调状态控制。风扇不工作导致交通中过热。风扇继电器、温度传感器和电机是常见故障点。",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Automobile_radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=aOXz5hlKO9s",
    youtubeTitle: "Cooling Fan Circuit Diagnosis"
  },
  "radiator_cap": {
    term: "Radiator Cap",
    termChinese: "散热器盖",
    section: "A1",
    definition: "A pressure cap on the radiator or expansion tank that maintains cooling system pressure (typically 13-18 psi). Higher pressure raises the boiling point of coolant. The cap has a pressure valve that opens to release excess pressure to the overflow tank and a vacuum valve that allows coolant to return when the system cools. A faulty cap causes overheating or coolant loss.",
    definitionChinese: "散热器或膨胀箱上的压力盖，维持冷却系统压力（通常13-18 psi）。较高压力提高冷却液的沸点。盖上有释放多余压力到溢流箱的压力阀和系统冷却时允许冷却液回流的真空阀。故障的散热器盖导致过热或冷却液损失。",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Automobile_radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=aOXz5hlKO9s",
    youtubeTitle: "Radiator Cap Testing"
  },
  "hose_clamp": {
    term: "Hose Clamp",
    termChinese: "软管夹",
    section: "G1",
    definition: "A device used to secure rubber hoses to fittings and prevent leaks in cooling, vacuum, and fuel systems. Types include worm-gear (screw type), spring, and constant-tension clamps. Proper clamp selection and tightening ensures leak-free connections. Over-tightening can cut through hoses; under-tightening causes leaks, especially as hoses age and shrink.",
    definitionChinese: "用于将橡胶软管固定在接头上并防止冷却、真空和燃油系统泄漏的装置。类型包括蜗杆式（螺旋式）、弹簧式和恒张力夹。正确的夹子选择和拧紧确保无泄漏连接。过度拧紧可切穿软管；拧紧不足导致泄漏，尤其是软管老化收缩时。",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Automobile_radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=aOXz5hlKO9s",
    youtubeTitle: "Hose Clamp Types and Installation"
  },
  "vacuum_leak": {
    term: "Vacuum Leak",
    termChinese: "真空泄漏",
    section: "A8",
    definition: "An unmetered air leak in the intake system that allows air to bypass the throttle and MAF sensor. This causes a lean condition, rough idle, misfires, and high idle speed. Common sources include cracked vacuum hoses, leaking intake manifold gaskets, and worn throttle body gaskets. A smoke machine is the most effective diagnostic tool.",
    definitionChinese: "进气系统中未计量的空气泄漏，允许空气绕过节气门和MAF传感器。导致混合气偏稀、怠速不稳、失火和高怠速。常见来源包括破裂的真空软管、泄漏的进气歧管垫片和磨损的节气门体垫片。烟雾机是最有效的诊断工具。",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Carburetor.svg",
    youtube: "https://www.youtube.com/watch?v=9n7eVsEmhMk",
    youtubeTitle: "How to Find a Vacuum Leak"
  },
  "catalytic_converter_efficiency": {
    term: "Catalytic Converter Efficiency",
    termChinese: "催化转化器效率",
    section: "A8",
    definition: "A measurement of how well the catalytic converter is reducing harmful emissions (HC, CO, NOx). The PCM monitors efficiency by comparing upstream and downstream oxygen sensor readings. A healthy converter shows a steady downstream O2 signal. Code P0420/P0430 indicates below-threshold efficiency. Causes include age, contamination from oil or coolant, or physical damage.",
    definitionChinese: "催化转化器减少有害排放（HC、CO、NOx）效果的测量。PCM通过比较上游和下游氧传感器读数监测效率。健康的转化器显示稳定的下游O2信号。P0420/P0430代码表示效率低于阈值。原因包括老化、机油或冷却液污染或物理损坏。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=9n7eVsEmhMk",
    youtubeTitle: "Catalytic Converter Efficiency Diagnosis"
  },
  "idle_speed": {
    term: "Idle Speed",
    termChinese: "怠速转速",
    section: "A8",
    definition: "The RPM at which the engine runs when the throttle is closed and no load is applied beyond normal accessories. Typical idle speed is 600-900 RPM for most vehicles. It is controlled by the PCM through the IAC valve or electronic throttle body. Abnormal idle (too high, too low, or fluctuating) indicates vacuum leaks, dirty throttle, or sensor issues.",
    definitionChinese: "节气门关闭且除正常附件外无负荷时发动机运行的RPM。大多数车辆的典型怠速为600-900 RPM。由PCM通过IAC阀或电子节气门体控制。异常怠速（过高、过低或波动）表明真空泄漏、脏节气门或传感器问题。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=9n7eVsEmhMk",
    youtubeTitle: "Diagnosing Idle Speed Problems"
  },
  "oil_filter": {
    term: "Oil Filter",
    termChinese: "机油滤清器",
    section: "G1",
    definition: "A replaceable filter that removes contaminants (metal particles, carbon, dirt) from engine oil as it circulates. Contains a bypass valve that opens if the filter becomes clogged, allowing unfiltered oil to pass rather than starving the engine. Should be replaced at every oil change. The anti-drainback valve prevents oil from draining out when the engine is off.",
    definitionChinese: "在发动机机油循环时去除污染物（金属颗粒、碳、灰尘）的可更换过滤器。包含旁通阀，如果过滤器堵塞则打开，允许未过滤的油通过而不是使发动机缺油。每次换油时应更换。防回流阀防止发动机关闭时机油排出。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Oil Filter Function and Selection"
  },
  "gasket": {
    term: "Gasket",
    termChinese: "垫片",
    section: "A1",
    definition: "A sealing material placed between two mating surfaces to prevent fluid or gas leaks. Automotive gaskets include head gaskets, intake manifold gaskets, exhaust manifold gaskets, valve cover gaskets, and oil pan gaskets. Materials range from multi-layer steel to rubber, cork, and paper. Proper surface preparation and torque are essential for gasket sealing.",
    definitionChinese: "放置在两个配合表面之间以防止流体或气体泄漏的密封材料。汽车垫片包括缸垫、进气歧管垫片、排气歧管垫片、气门室盖垫片和油底壳垫片。材料从多层钢到橡胶、软木和纸。正确的表面处理和扭矩对垫片密封至关重要。",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Cylinder_head_of_1KD-FTV.JPG",
    youtube: "https://www.youtube.com/watch?v=5zpNjYmmiYY",
    youtubeTitle: "Types of Automotive Gaskets"
  },
  "bearing": {
    term: "Bearing",
    termChinese: "轴承",
    section: "A1",
    definition: "A component that supports a rotating shaft while minimizing friction. Automotive bearings include engine bearings (plain shell type with oil film), wheel bearings (ball or roller type), and clutch release bearings. Proper lubrication and correct clearances are essential for bearing life. A failing bearing produces noise, heat, and eventually seizure.",
    definitionChinese: "支撑旋转轴同时最小化摩擦的部件。汽车轴承包括发动机轴承（油膜式普通轴承）、车轮轴承（球型或滚子型）和离合器分离轴承。适当的润滑和正确的间隙对轴承寿命至关重要。故障的轴承产生噪音、发热，最终卡死。",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Crankshaft.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Automotive Bearing Types"
  },
  "serpentine_belt_tensioner": {
    term: "Belt Tensioner",
    termChinese: "皮带张紧器",
    section: "A1",
    definition: "A spring-loaded automatic tensioner that maintains proper tension on the serpentine belt. The internal spring and dampener keep the belt tight as it stretches over time. A worn tensioner causes belt squeal, flutter, or slipping off. The tensioner wear indicator shows if tension is within spec. Replacement is recommended when installing a new belt.",
    definitionChinese: "弹簧加载的自动张紧器，保持蛇形皮带的适当张力。内部弹簧和阻尼器随皮带拉伸保持紧张。磨损的张紧器导致皮带尖叫、抖动或脱落。张紧器磨损指示器显示张力是否在规格范围内。安装新皮带时建议更换。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Serpentine Belt Tensioner Replacement"
  },
  "power_window": {
    term: "Power Window System",
    termChinese: "电动车窗系统",
    section: "A6",
    definition: "An electrically operated system that raises and lowers the vehicle's door glass using a motor and regulator mechanism. The master switch on the driver's door controls all windows. Window lock prevents passenger operation. One-touch auto-up/down features include anti-pinch protection. Slow operation usually indicates a worn motor or binding in the track.",
    definitionChinese: "使用电机和升降器机构升降车辆车门玻璃的电气操作系统。驾驶员侧门上的主开关控制所有车窗。车窗锁定防止乘客操作。一键自动升降功能包括防夹保护。操作缓慢通常表明电机磨损或轨道中有卡滞。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=9n7eVsEmhMk",
    youtubeTitle: "Power Window System Diagnosis"
  },
  "airbag": {
    term: "Airbag (SRS)",
    termChinese: "安全气囊",
    section: "A6",
    definition: "A supplemental restraint system that deploys inflatable cushions during a collision to protect occupants. The SRS module uses crash sensors to determine impact severity and deploy the appropriate airbags. The clock spring provides the electrical connection to the driver's airbag through the steering wheel. Airbag warning light on indicates a system fault requiring scan tool diagnosis.",
    definitionChinese: "在碰撞时展开充气垫保护乘员的辅助约束系统。SRS模块使用碰撞传感器确定撞击严重程度并展开适当的安全气囊。时钟弹簧通过方向盘为驾驶员安全气囊提供电气连接。安全气囊警告灯亮表示系统故障需要扫描工具诊断。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=9n7eVsEmhMk",
    youtubeTitle: "SRS Airbag System Components"
  },
  "cruise_control": {
    term: "Cruise Control",
    termChinese: "巡航控制",
    section: "A6",
    definition: "A system that automatically maintains a set vehicle speed without the driver pressing the accelerator pedal. The PCM adjusts throttle position to maintain the set speed. Adaptive cruise control (ACC) uses radar to maintain following distance. The brake pedal switch and vehicle speed sensor are critical inputs. A faulty brake switch can disable cruise control.",
    definitionChinese: "在驾驶员不踩油门踏板的情况下自动保持设定车速的系统。PCM调整节气门位置以保持设定速度。自适应巡航控制（ACC）使用雷达保持跟车距离。制动踏板开关和车速传感器是关键输入。故障的制动开关可能禁用巡航控制。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=9n7eVsEmhMk",
    youtubeTitle: "Cruise Control System Diagnosis"
  },
  "ac_pressure": {
    term: "A/C System Pressures",
    termChinese: "空调系统压力",
    section: "A7",
    definition: "The high-side and low-side pressures in the A/C system measured with a manifold gauge set. Normal readings depend on ambient temperature but typically are 25-45 psi low side and 150-250 psi high side. Both sides equal indicates a faulty compressor. High side high/low side high indicates overcharge or poor condenser cooling. Both sides low indicates low refrigerant.",
    definitionChinese: "用歧管压力表测量的空调系统高压侧和低压侧压力。正常读数取决于环境温度，但通常低压侧25-45 psi，高压侧150-250 psi。两侧相等表示压缩机故障。高压侧高/低压侧高表示过充或冷凝器冷却不良。两侧低表示制冷剂不足。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "A/C Pressure Chart and Diagnosis"
  },
  "heater_control_valve": {
    term: "Heater Control Valve",
    termChinese: "暖风控制阀",
    section: "A7",
    definition: "A valve that controls the flow of hot engine coolant into the heater core. Some systems use a cable-operated or vacuum-operated valve; others use the blend door instead. A stuck-closed valve causes no heat; a stuck-open valve causes heat that cannot be turned off. Some modern systems do not use a heater control valve at all.",
    definitionChinese: "控制热发动机冷却液流入暖风芯体的阀门。某些系统使用拉线操作或真空操作的阀门；其他系统使用混合门代替。卡在关闭位置的阀门导致无暖风；卡在打开位置的阀门导致无法关闭的暖风。一些现代系统完全不使用暖风控制阀。",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Automobile_radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=aOXz5hlKO9s",
    youtubeTitle: "Heater Control Valve Testing"
  },
  "pressure_test": {
    term: "Cooling System Pressure Test",
    termChinese: "冷却系统压力测试",
    section: "A1",
    definition: "A diagnostic test using a hand pump and adapter to pressurize the cooling system to the radiator cap's rated pressure to check for external and internal leaks. External leaks appear as coolant dripping from hoses, gaskets, or the radiator. The pressure should hold steady; a dropping gauge indicates a leak. Also used to test the radiator cap itself.",
    definitionChinese: "使用手动泵和适配器将冷却系统加压到散热器盖额定压力的诊断测试，检查外部和内部泄漏。外部泄漏表现为冷却液从软管、垫片或散热器滴落。压力应保持稳定；压力表下降表示泄漏。也用于测试散热器盖本身。",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Automobile_radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=aOXz5hlKO9s",
    youtubeTitle: "Cooling System Pressure Test Guide"
  },
  "transmission_filter": {
    term: "Transmission Filter",
    termChinese: "变速箱滤清器",
    section: "A2",
    definition: "A filter inside the automatic transmission oil pan that removes contaminants from the fluid before it is drawn into the pump. A clogged filter restricts fluid flow, causing delayed shifts, slipping, and overheating. The filter is typically replaced during a transmission fluid service by dropping the pan. Some filters are internal and require disassembly.",
    definitionChinese: "自动变速箱油底壳内的过滤器，在液体被泵吸入前去除污染物。堵塞的过滤器限制液体流动，导致换挡延迟、打滑和过热。通常在变速箱油保养时通过拆下油底壳更换过滤器。某些过滤器是内置的，需要拆解。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/42/8-speed_AT_for_Lexus_LS460.jpg",
    youtube: "https://www.youtube.com/watch?v=5nK5j3SEylA",
    youtubeTitle: "Transmission Filter and Fluid Change"
  },
  "overdrive": {
    term: "Overdrive",
    termChinese: "超速挡",
    section: "A2",
    definition: "The highest gear ratio in a transmission where the output shaft turns faster than the input shaft (ratio less than 1:1). Overdrive reduces engine RPM at highway speeds, improving fuel economy and reducing engine wear. Most automatic transmissions have overdrive as the top gear. A faulty overdrive solenoid prevents the transmission from reaching top gear.",
    definitionChinese: "变速箱中输出轴转速快于输入轴的最高传动比（比率小于1:1）。超速挡降低高速公路行驶时的发动机RPM，提高燃油经济性并减少发动机磨损。大多数自动变速箱以超速挡为最高挡。故障的超速挡电磁阀阻止变速箱达到最高挡。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/42/8-speed_AT_for_Lexus_LS460.jpg",
    youtube: "https://www.youtube.com/watch?v=5nK5j3SEylA",
    youtubeTitle: "Overdrive Function and Problems"
  },

  // ===== ADDITIONAL TERMS BATCH 4: COMMON ASE QUESTION TERMS =====
  "cylinder_bore": {
    term: "Cylinder Bore",
    termChinese: "气缸孔",
    section: "A1",
    definition: "The machined cylindrical hole in the engine block where the piston travels. Bore diameter and roundness are critical specifications. Wear patterns include taper (more wear at top), out-of-round, and ridge formation. Bores can be honed for new rings or bored oversize for oversize pistons during an engine rebuild.",
    definitionChinese: "发动机缸体中活塞运行的加工圆柱孔。孔径和圆度是关键规格。磨损模式包括锥度（顶部磨损更多）、失圆和台阶形成。在发动机翻修中，缸孔可以珩磨用于新活塞环或扩缸用于加大尺寸活塞。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Cylinder Bore Measurement and Honing"
  },
  "combustion_chamber": {
    term: "Combustion Chamber",
    termChinese: "燃烧室",
    section: "A1",
    definition: "The enclosed space at the top of the cylinder where the air-fuel mixture is compressed and ignited. Its shape affects combustion efficiency, power output, and emissions. Carbon deposits in the chamber increase compression ratio and can cause detonation. Chamber volume determines compression ratio and must be equalized across cylinders for smooth operation.",
    definitionChinese: "气缸顶部封闭空间，空气燃油混合物在此被压缩和点燃。其形状影响燃烧效率、功率输出和排放。燃烧室中的积碳增加压缩比，可能导致爆燃。燃烧室容积决定压缩比，必须在各气缸之间均衡以保证平稳运行。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Combustion Chamber Design"
  },
  "oil_pressure_sensor": {
    term: "Oil Pressure Sensor",
    termChinese: "油压传感器",
    section: "A1",
    definition: "A sensor that monitors engine oil pressure and sends the reading to the PCM and dashboard gauge or warning light. Low oil pressure triggers a warning light. The sensor can be a simple on/off switch (for the warning light) or a variable resistance sender (for the gauge). A faulty sensor gives false readings. Always verify with a mechanical gauge.",
    definitionChinese: "监测发动机机油压力并将读数发送给PCM和仪表盘压力表或警告灯的传感器。低油压触发警告灯。传感器可以是简单的开关式（用于警告灯）或可变电阻发送器（用于压力表）。故障的传感器给出错误读数。始终用机械压力表验证。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Oil Pressure Sensor Testing"
  },
  "valve_cover": {
    term: "Valve Cover",
    termChinese: "气门室盖",
    section: "A1",
    definition: "A stamped steel or cast aluminum cover that seals the top of the cylinder head, enclosing the valve train components. The valve cover gasket seals against oil leaks. Common sources of oil leaks on high-mileage engines. Must be removed for valve adjustment, rocker arm service, and spark plug tube seal replacement.",
    definitionChinese: "密封气缸盖顶部、包围气门机构部件的冲压钢或铸铝盖。气门室盖垫片防止漏油。高里程发动机常见的漏油来源。拆卸用于气门调整、摇臂维修和火花塞管密封更换。",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Cylinder_head_of_1KD-FTV.JPG",
    youtube: "https://www.youtube.com/watch?v=_addEj_vCro",
    youtubeTitle: "Valve Cover Gasket Replacement"
  },
  "water_jacket": {
    term: "Water Jacket",
    termChinese: "水套",
    section: "A1",
    definition: "The passages cast into the engine block and cylinder head through which coolant circulates to absorb heat from the cylinders and combustion chambers. Blocked water jackets from corrosion or deposits cause localized overheating and can lead to head gasket failure. Proper cooling system maintenance prevents water jacket deterioration.",
    definitionChinese: "铸入发动机缸体和气缸盖中的通道，冷却液在其中循环以吸收气缸和燃烧室的热量。因腐蚀或沉积物堵塞的水套导致局部过热，可能导致缸垫损坏。正确的冷却系统维护可防止水套劣化。",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Automobile_radiator.jpg",
    youtube: "https://www.youtube.com/watch?v=aOXz5hlKO9s",
    youtubeTitle: "Engine Water Jacket and Cooling"
  },
  "flex_plate": {
    term: "Flexplate",
    termChinese: "挠性飞轮",
    section: "A2",
    definition: "A thin stamped steel plate that connects the engine crankshaft to the torque converter in automatic transmissions. It has a ring gear around its edge for the starter motor. A cracked flexplate causes a rhythmic knocking noise at idle. Missing or loose torque converter bolts can also cause flexplate damage.",
    definitionChinese: "连接发动机曲轴和自动变速箱液力变矩器的薄冲压钢板。边缘有齿环用于起动电机。开裂的挠性飞轮在怠速时产生有节奏的敲击声。缺失或松动的液力变矩器螺栓也可能导致挠性飞轮损坏。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/42/8-speed_AT_for_Lexus_LS460.jpg",
    youtube: "https://www.youtube.com/watch?v=5nK5j3SEylA",
    youtubeTitle: "Flexplate vs Flywheel"
  },
  "clutch_master_cylinder": {
    term: "Clutch Master Cylinder",
    termChinese: "离合器主缸",
    section: "A3",
    definition: "A hydraulic cylinder operated by the clutch pedal that pressurizes brake fluid to actuate the clutch slave cylinder. When the pedal is pressed, the piston pushes fluid through the line to disengage the clutch. A leaking master cylinder causes a soft or sinking pedal and incomplete clutch disengagement, making shifting difficult.",
    definitionChinese: "由离合器踏板操作的液压缸，对制动液加压以驱动离合器从缸。踩下踏板时，活塞通过管路推送液体以分离离合器。泄漏的主缸导致踏板松软或下沉和离合器分离不完全，使换挡困难。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Clutch Hydraulic System"
  },
  "slave_cylinder": {
    term: "Clutch Slave Cylinder",
    termChinese: "离合器从缸",
    section: "A3",
    definition: "A hydraulic actuator at the transmission that receives pressurized fluid from the clutch master cylinder and pushes the release fork or bearing to disengage the clutch. Some are mounted externally on the bell housing; concentric types surround the transmission input shaft. A leaking slave cylinder causes clutch drag and difficult shifting.",
    definitionChinese: "变速箱处的液压执行器，接收离合器主缸的加压液体并推动分离叉或分离轴承以分离离合器。某些外部安装在钟形壳上；同心式围绕变速箱输入轴。泄漏的从缸导致离合器拖曳和换挡困难。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Clutch Slave Cylinder Replacement"
  },
  "ring_gear": {
    term: "Ring Gear",
    termChinese: "齿圈",
    section: "A3",
    definition: "A large gear in the differential that meshes with the pinion gear to change the direction of power flow 90 degrees and provide final drive gear reduction. The ring-and-pinion gear ratio affects acceleration and fuel economy. Also refers to the gear on the flywheel/flexplate that the starter motor engages to crank the engine.",
    definitionChinese: "差速器中与小齿轮啮合的大齿轮，将动力流方向改变90度并提供最终传动减速。齿圈和小齿轮的传动比影响加速性和燃油经济性。也指飞轮/挠性飞轮上起动电机啮合以起动发动机的齿轮。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Ring and Pinion Gears Explained"
  },
  "pinion_gear": {
    term: "Pinion Gear",
    termChinese: "小齿轮",
    section: "A3",
    definition: "The smaller gear in a differential assembly that meshes with the ring gear. Attached to the end of the driveshaft or propeller shaft. Pinion bearing preload and depth are critical settings during differential assembly. Incorrect pinion depth causes gear noise and accelerated wear on the ring-and-pinion gear teeth.",
    definitionChinese: "差速器总成中与齿圈啮合的较小齿轮。连接到传动轴或螺旋桨轴的末端。小齿轮轴承预紧力和深度是差速器组装时的关键设置。不正确的小齿轮深度导致齿轮噪音和齿圈齿面加速磨损。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Pinion Gear and Bearing Setup"
  },
  "steering_gear": {
    term: "Steering Gear",
    termChinese: "转向器",
    section: "A4",
    definition: "The mechanism that converts the driver's steering wheel rotation into lateral movement to turn the front wheels. Two main types: rack-and-pinion (most common on modern vehicles) and recirculating ball (used on trucks). Excessive play in the steering gear causes loose steering feel and wandering. Power-assisted versions use hydraulic or electric assist.",
    definitionChinese: "将驾驶员方向盘旋转转换为横向运动以转动前轮的机构。两种主要类型：齿条齿轮式（现代车辆最常见）和循环球式（用于卡车）。转向器过大的间隙导致转向松弛感和跑偏。助力版本使用液压或电动助力。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Steering Gear Types and Function"
  },
  "steering_knuckle": {
    term: "Steering Knuckle",
    termChinese: "转向节",
    section: "A4",
    definition: "A cast or forged component that connects the wheel hub to the suspension and steering components. The knuckle pivots on the ball joints (or strut bearing for MacPherson struts) to allow steering. It also provides the mounting point for the brake caliper or backing plate. Knuckle damage from impacts affects wheel alignment.",
    definitionChinese: "连接轮毂与悬架和转向部件的铸造或锻造部件。转向节在球头（或麦弗逊支柱的支柱轴承）上枢转以允许转向。还提供制动钳或制动底板的安装点。碰撞造成的转向节损坏影响车轮定位。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Steering Knuckle and Suspension"
  },
  "spring_compressor": {
    term: "Spring Compressor",
    termChinese: "弹簧压缩器",
    section: "A4",
    definition: "A specialized tool used to safely compress coil springs during strut assembly removal and installation. Spring compressors hold the spring in its compressed state so the strut can be disassembled. Extremely dangerous if not used properly due to the stored energy in compressed springs. Always use quality tools and follow proper safety procedures.",
    definitionChinese: "在减震器支柱总成拆卸和安装过程中安全压缩螺旋弹簧的专用工具。弹簧压缩器将弹簧保持在压缩状态以便拆卸支柱。由于压缩弹簧中存储的巨大能量，如果使用不当极其危险。始终使用优质工具并遵循正确的安全程序。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Spring Compressor Safety Guide"
  },
  "caliper_piston": {
    term: "Caliper Piston",
    termChinese: "制动钳活塞",
    section: "A5",
    definition: "The hydraulic piston inside the brake caliper that pushes the brake pad against the rotor when brake fluid pressure is applied. Pistons can seize from corrosion, causing brake drag or pull. Rear calipers with integrated parking brakes have pistons that must be rotated (screwed) back in rather than pushed. Piston seal condition is critical for proper retraction.",
    definitionChinese: "制动钳内的液压活塞，当施加制动液压力时将刹车片推向制动盘。活塞可因腐蚀卡死，导致制动拖曳或偏移。带集成驻车制动器的后制动钳活塞必须旋转（螺旋）回位而非推回。活塞密封条件对正确回位至关重要。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Brake Caliper Piston Service"
  },
  "abs_module": {
    term: "ABS Control Module",
    termChinese: "ABS控制模块",
    section: "A5",
    definition: "The electronic control unit that receives wheel speed sensor data and controls the ABS hydraulic modulator to prevent wheel lockup during braking. It rapidly cycles brake pressure to individual wheels that are about to lock. The module stores DTCs for ABS-related faults. A failing module triggers the ABS warning light and disables the system.",
    definitionChinese: "接收车轮速度传感器数据并控制ABS液压调节器以防止制动时车轮锁死的电子控制单元。快速循环即将锁死的单个车轮的制动压力。模块存储ABS相关故障的DTC。故障的模块触发ABS警告灯并禁用系统。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "ABS System Diagnosis"
  },
  "parasitic_draw": {
    term: "Parasitic Draw",
    termChinese: "寄生电流消耗",
    section: "A6",
    definition: "The small amount of electrical current consumed by vehicle modules and systems when the ignition is off. Normal parasitic draw is typically 20-50 milliamps. Excessive draw drains the battery overnight. Testing involves connecting an ammeter in series with the battery and pulling fuses to identify the circuit causing the excess draw.",
    definitionChinese: "点火关闭时车辆模块和系统消耗的少量电流。正常寄生电流消耗通常为20-50毫安。过大的消耗使电池在一夜之间耗尽。测试包括将电流表串联连接到电池并逐个拔出保险丝以识别导致过多消耗的电路。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=9n7eVsEmhMk",
    youtubeTitle: "Parasitic Battery Draw Test"
  },
  "charging_system": {
    term: "Charging System",
    termChinese: "充电系统",
    section: "A6",
    definition: "The system that keeps the battery charged and supplies electrical power when the engine is running, consisting of the alternator, voltage regulator, battery, and associated wiring. Normal charging voltage is 13.5-14.5V. Undercharging causes a dead battery; overcharging damages the battery and electronics. A charging system test checks output voltage and amperage.",
    definitionChinese: "在发动机运行时保持电池充电并供应电力的系统，由发电机、电压调节器、电池和相关线路组成。正常充电电压为13.5-14.5V。充电不足导致电池耗尽；过充损坏电池和电子设备。充电系统测试检查输出电压和电流。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=9n7eVsEmhMk",
    youtubeTitle: "Charging System Testing"
  },
  "starting_system": {
    term: "Starting System",
    termChinese: "启动系统",
    section: "A6",
    definition: "The electrical system that cranks the engine for starting, consisting of the battery, starter motor, starter solenoid, ignition switch, neutral safety switch, and connecting cables. The starter draws 100-250 amps during cranking. Slow cranking can be caused by a weak battery, corroded cables, or a worn starter. A clicking sound indicates insufficient current.",
    definitionChinese: "使发动机转动以启动的电气系统，由电池、起动电机、起动电磁阀、点火开关、空挡安全开关和连接电缆组成。起动机在起动时消耗100-250安培。转动缓慢可能由电池弱、电缆腐蚀或起动机磨损引起。咔嗒声表示电流不足。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=9n7eVsEmhMk",
    youtubeTitle: "Starting System Components and Testing"
  },
  "drive_belt": {
    term: "Drive Belt",
    termChinese: "驱动皮带",
    section: "G1",
    definition: "A belt that transfers rotational power from the engine crankshaft pulley to accessories like the alternator, water pump, power steering pump, and A/C compressor. Most modern vehicles use a single serpentine belt. Signs of wear include cracks, glazing, fraying, and squealing. Belt condition should be inspected at every oil change.",
    definitionChinese: "将旋转动力从发动机曲轴皮带轮传递到发电机、水泵、助力转向泵和空调压缩机等附件的皮带。大多数现代车辆使用单条蛇形皮带。磨损迹象包括裂纹、光滑、磨损和尖叫。每次换油时应检查皮带状况。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Drive Belt Inspection and Replacement"
  },
  "hub_assembly": {
    term: "Hub Assembly",
    termChinese: "轮毂总成",
    section: "G1",
    definition: "A pre-assembled unit containing the wheel bearings, hub, and often the ABS wheel speed sensor. It bolts to the steering knuckle and the wheel bolts to its flange. Sealed hub assemblies are non-serviceable and must be replaced as a unit when bearings fail. Noise that changes with vehicle speed or steering direction indicates hub bearing failure.",
    definitionChinese: "包含车轮轴承、轮毂和通常ABS轮速传感器的预装配单元。螺栓连接到转向节，车轮螺栓连接到法兰。密封轮毂总成不可维修，轴承故障时必须整体更换。随车速或转向方向变化的噪音表明轮毂轴承故障。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Hub Assembly Replacement"
  },
  "alignment_angle": {
    term: "Alignment Angles",
    termChinese: "定位角度",
    section: "A4",
    definition: "The geometric angles of the suspension that affect how the tires contact the road. The three primary angles are camber (tilt in/out), caster (fore/aft tilt of steering axis), and toe (angle of tires pointing in/out). Incorrect alignment causes uneven tire wear, pulling, and poor handling. Alignment should be checked after suspension work or hitting a large pothole.",
    definitionChinese: "影响轮胎与路面接触方式的悬架几何角度。三个主要角度是外倾角（内外倾斜）、后倾角（转向轴前后倾斜）和前束（轮胎向内/向外的角度）。不正确的定位导致不均匀的轮胎磨损、跑偏和操控不良。悬架工作后或撞到大坑洞后应检查定位。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Wheel Alignment Angles Explained"
  },
  "strut_mount": {
    term: "Strut Mount (Bearing Plate)",
    termChinese: "减震器支柱顶座",
    section: "A4",
    definition: "The upper mount that connects the strut assembly to the vehicle body at the strut tower. It contains a bearing that allows the strut to rotate when the steering wheel is turned. A worn strut mount causes clunking over bumps, steering binding, and alignment changes. It also isolates road noise and vibration from the cabin.",
    definitionChinese: "在减震器塔处将减震器支柱总成连接到车身的上部支座。包含一个轴承，允许支柱在转向时旋转。磨损的支柱顶座导致过颠簸时的咔嗒声、转向卡滞和定位变化。还隔离道路噪音和振动使其不传入驾驶室。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Strut Mount Bearing Replacement"
  },
  "bushing": {
    term: "Bushing",
    termChinese: "衬套",
    section: "A4",
    definition: "A rubber or polyurethane component that cushions and isolates the connection between suspension parts and the frame. Common bushings include control arm bushings, sway bar bushings, and subframe bushings. Worn bushings cause clunking, alignment changes, and uneven tire wear. They deteriorate from age, oil contamination, and road salt.",
    definitionChinese: "橡胶或聚氨酯部件，缓冲和隔离悬架部件与车架之间的连接。常见的衬套包括控制臂衬套、稳定杆衬套和副车架衬套。磨损的衬套导致咔嗒声、定位变化和不均匀的轮胎磨损。因老化、油污染和道路盐而劣化。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Suspension Bushing Inspection"
  },
  "sway_bar_link": {
    term: "Sway Bar Link",
    termChinese: "稳定杆连接杆",
    section: "A4",
    definition: "Short connecting links that attach the sway bar (stabilizer bar) to the strut or control arm. They transfer the sway bar's anti-roll force to the suspension. Worn sway bar links are a very common cause of clunking and rattling noises over bumps and during turns. They are an inexpensive and common replacement item.",
    definitionChinese: "将稳定杆连接到减震器支柱或控制臂的短连接杆。将稳定杆的抗侧倾力传递到悬架。磨损的稳定杆连接杆是过颠簸和转弯时咔嗒声和嘎嘎声的非常常见的原因。是价格便宜的常见更换零件。",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Four_stroke_engine_diagram.jpg",
    youtube: "https://www.youtube.com/watch?v=XMa2FH6D07o",
    youtubeTitle: "Sway Bar Link Replacement"
  }
};
