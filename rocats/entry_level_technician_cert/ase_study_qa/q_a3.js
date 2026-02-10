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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
  }
];
