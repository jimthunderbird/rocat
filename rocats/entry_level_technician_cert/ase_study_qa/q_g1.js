const questionsG1 = [
  // ===== ENGINE SYSTEMS (Questions 1–16) =====
  {
    id: 1,
    q: "During an oil change, the technician notices metal shavings in the drained oil. What should the technician do NEXT?",
    options: [
      "A) Install a new oil filter and refill with fresh oil",
      "B) Inform the customer and recommend further engine diagnosis",
      "C) Flush the engine with solvent before adding new oil",
      "D) Add an oil additive to reduce engine wear"
    ],
    answer: 1,
    explanation: "Metal shavings in the oil indicate potential internal engine damage such as bearing wear or component failure. The technician should inform the customer and recommend further diagnosis before simply completing the oil change. Ignoring this could lead to catastrophic engine failure.",
    diagram: ""
  },
  {
    id: 2,
    q: "A vehicle's engine coolant is brown and has an oily film on the surface. What is the MOST likely cause?",
    options: [
      "A) The coolant has not been changed according to the maintenance schedule",
      "B) Engine oil or transmission fluid is leaking into the cooling system",
      "C) The wrong type of coolant was previously installed",
      "D) The radiator cap is not holding proper pressure"
    ],
    answer: 1,
    explanation: "An oily film on the coolant surface indicates that oil or automatic transmission fluid is contaminating the cooling system. This can be caused by a failed head gasket, cracked head, or a failed oil cooler or transmission cooler built into the radiator. Further diagnosis is required.",
    diagram: ""
  },
  {
    id: 3,
    q: "Technician A says the engine oil level should be checked with the engine running. Technician B says the vehicle should be on a level surface when checking the oil. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 1,
    explanation: "Technician B is correct. The oil level should be checked with the engine off and the vehicle on a level surface so the oil can settle in the pan for an accurate reading. Checking with the engine running would give an inaccurate low reading since oil is circulating through the engine.",
    diagram: ""
  },
  {
    id: 4,
    q: "Which of the following is the correct procedure for replacing a serpentine drive belt?",
    options: [
      "A) Pry the belt off the pulleys with a screwdriver",
      "B) Use the belt tensioner tool to release tension, then slide the belt off",
      "C) Loosen all accessory mounting bolts to create slack",
      "D) Cut the old belt off with a razor blade and install the new one"
    ],
    answer: 1,
    explanation: "The correct procedure is to use a wrench or belt tensioner tool to release the spring-loaded automatic tensioner, then slide the belt off the pulleys. A belt routing diagram should be referenced when installing the new belt to ensure it is routed correctly around all pulleys.",
    diagram: ""
  },
  {
    id: 5,
    q: "An engine air filter is being inspected during routine maintenance. All of the following are reasons to replace the air filter EXCEPT:",
    options: [
      "A) The filter is excessively dirty or clogged with debris",
      "B) The filter has been in service past the manufacturer's recommended interval",
      "C) The filter appears slightly dusty on the inlet side",
      "D) The filter element is torn or has holes in the media"
    ],
    answer: 2,
    explanation: "A slightly dusty air filter is normal and does not require replacement. Air filters should be replaced when they are excessively dirty, clogged, damaged, or have exceeded the manufacturer's recommended service interval. A light coating of dust shows the filter is doing its job.",
    diagram: ""
  },
  {
    id: 6,
    q: "A vehicle has a glowing check engine light (MIL) and a DTC P0420 stored. What does this code MOST likely indicate?",
    options: [
      "A) Engine misfire detected",
      "B) Catalyst system efficiency below threshold",
      "C) Evaporative emission system leak detected",
      "D) Oxygen sensor heater circuit malfunction"
    ],
    answer: 1,
    explanation: "DTC P0420 indicates that the catalytic converter efficiency has fallen below the acceptable threshold for Bank 1. The PCM monitors converter efficiency by comparing upstream and downstream oxygen sensor signals. This code typically means the catalytic converter is no longer functioning properly.",
    diagram: ""
  },
  {
    id: 7,
    q: "During an exhaust system inspection, a technician finds a small hole in the exhaust pipe between the catalytic converter and the muffler. What is the correct action?",
    options: [
      "A) Wrap the area with exhaust tape and return the vehicle to service",
      "B) Inform the customer the exhaust pipe needs to be repaired or replaced",
      "C) Ignore it if the vehicle passes an emissions test",
      "D) Plug the hole with exhaust putty as a permanent repair"
    ],
    answer: 1,
    explanation: "A hole in the exhaust pipe can allow toxic exhaust gases including carbon monoxide to enter the passenger compartment, creating a serious safety hazard. The customer should be informed and the pipe should be properly repaired or replaced. Tape and putty are only temporary fixes.",
    diagram: ""
  },
  {
    id: 8,
    q: "Technician A says spark plugs should be installed to the manufacturer's specified torque. Technician B says over-torquing spark plugs can damage the cylinder head threads. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Spark plugs must be torqued to the manufacturer's specification to ensure proper sealing and heat transfer. Over-torquing can strip or damage the aluminum cylinder head threads, which is a costly repair. Under-torquing can cause compression leaks and overheating.",
    diagram: ""
  },
  {
    id: 9,
    q: "What is the purpose of the EVAP system on a modern vehicle?",
    options: [
      "A) To recirculate exhaust gases back into the intake manifold",
      "B) To capture and store fuel vapors from the fuel tank to prevent them from entering the atmosphere",
      "C) To cool the engine by evaporating coolant in the radiator",
      "D) To remove moisture from the air conditioning system"
    ],
    answer: 1,
    explanation: "The Evaporative Emission Control (EVAP) system captures fuel vapors from the fuel tank and fuel system, stores them in a charcoal canister, and then purges them into the engine intake to be burned during normal combustion. This prevents harmful hydrocarbon vapors from escaping into the atmosphere.",
    diagram: ""
  },
  {
    id: 10,
    q: "A diesel vehicle requires Diesel Exhaust Fluid (DEF). All of the following statements about DEF are true EXCEPT:",
    options: [
      "A) DEF is a mixture of urea and deionized water",
      "B) DEF is injected into the exhaust stream to reduce NOx emissions",
      "C) DEF should be stored in a sealed container away from direct sunlight",
      "D) DEF can be substituted with regular water in an emergency"
    ],
    answer: 3,
    explanation: "DEF cannot be substituted with water. DEF is a precisely mixed solution of 32.5% urea and 67.5% deionized water that reacts in the SCR catalyst to convert harmful NOx emissions into harmless nitrogen and water. Using water would damage the SCR system and cause emission system failure.",
    diagram: ""
  },
  {
    id: 11,
    q: "An engine oil leak is observed at the front of the engine. Which of the following is the MOST likely source?",
    options: [
      "A) Rear main seal",
      "B) Front crankshaft seal or timing cover gasket",
      "C) Oil pan drain plug at the rear of the pan",
      "D) Valve cover gasket at the rear of the head"
    ],
    answer: 1,
    explanation: "An oil leak at the front of the engine is most likely from the front crankshaft seal or the timing cover gasket. The rear main seal would leak at the back of the engine near the transmission. Proper identification of the leak source requires cleaning the area and using UV dye if necessary.",
    diagram: ""
  },
  {
    id: 12,
    q: "A vehicle's temperature warning light comes on while driving. What should the technician advise the customer to do?",
    options: [
      "A) Continue driving to the nearest repair shop",
      "B) Turn on the heater to maximum and safely pull over as soon as possible",
      "C) Turn off the engine immediately regardless of traffic conditions",
      "D) Add cold water to the radiator immediately"
    ],
    answer: 1,
    explanation: "When the temperature warning light illuminates, the driver should turn the heater to maximum to help dissipate engine heat and safely pull over as soon as possible. The engine should then be shut off. Never open the radiator cap on a hot engine, and never add cold water to an overheated engine.",
    diagram: ""
  },
  {
    id: 13,
    q: "When replacing an engine oil filter, the technician should do all of the following EXCEPT:",
    options: [
      "A) Apply a thin film of clean oil to the new filter gasket before installation",
      "B) Pre-fill the new oil filter with fresh engine oil when possible",
      "C) Tighten the filter with a filter wrench to maximum torque",
      "D) Check for leaks after starting the engine"
    ],
    answer: 2,
    explanation: "Oil filters should be hand-tightened according to the manufacturer's instructions, typically three-quarter to one full turn after the gasket contacts the sealing surface. Over-tightening with a filter wrench can crush the gasket, cause leaks, and make future removal extremely difficult.",
    diagram: ""
  },
  {
    id: 14,
    q: "A cooling system pressure test reveals the system cannot hold pressure. There are no visible external leaks. What is the MOST likely cause?",
    options: [
      "A) A defective radiator cap",
      "B) An internal engine leak such as a blown head gasket",
      "C) A loose hose clamp on the upper radiator hose",
      "D) A cracked coolant reservoir"
    ],
    answer: 1,
    explanation: "If the cooling system loses pressure but no external leaks are visible, the most likely cause is an internal leak such as a blown head gasket, cracked cylinder head, or cracked block. Coolant may be leaking into the combustion chamber or mixing with engine oil internally.",
    diagram: ""
  },
  {
    id: 15,
    q: "What is the correct procedure to check the condition of a serpentine belt during routine inspection?",
    options: [
      "A) Check only the smooth side of the belt for cracks",
      "B) Inspect for cracks, fraying, glazing, and proper tension on all belt surfaces",
      "C) Measure only the belt deflection at the longest span",
      "D) Check only that the belt is not making noise"
    ],
    answer: 1,
    explanation: "A thorough serpentine belt inspection includes checking both the ribbed and smooth sides for cracks, fraying, glazing, chunking, and uneven wear. Belt tension and alignment should also be verified. Modern EPDM belts may show rib wear rather than cracking, so a belt wear gauge should be used.",
    diagram: ""
  },
  {
    id: 16,
    q: "Technician A says a low oil pressure warning light that flickers at idle may indicate a worn engine. Technician B says it could also be caused by a low oil level. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. A flickering oil pressure warning light at idle can be caused by worn engine bearings that allow excessive oil clearance, reducing oil pressure. It can also be caused by a low oil level that allows the oil pump to draw in air. Both conditions should be investigated promptly.",
    diagram: ""
  },

  // ===== AUTOMATIC TRANSMISSION/TRANSAXLE (Questions 17–23) =====
  {
    id: 17,
    q: "When checking automatic transmission fluid, the fluid appears dark brown and has a burnt smell. What does this indicate?",
    options: [
      "A) The fluid is normal and does not need to be changed",
      "B) The transmission has been overheated or has internal damage",
      "C) The wrong type of fluid was installed",
      "D) The fluid level is too high"
    ],
    answer: 1,
    explanation: "Dark brown or black automatic transmission fluid with a burnt odor indicates the fluid has been overheated or that internal clutch material is breaking down. This condition suggests possible internal transmission damage and the customer should be advised that further diagnosis is needed.",
    diagram: ""
  },
  {
    id: 18,
    q: "A DTC P0700 is stored in the powertrain control module. What does this code indicate?",
    options: [
      "A) Engine misfire detected",
      "B) Transmission control system malfunction — check TCM for additional codes",
      "C) Vehicle speed sensor failure",
      "D) Torque converter clutch stuck off"
    ],
    answer: 1,
    explanation: "DTC P0700 is a generic code that indicates the transmission control module (TCM) has detected a malfunction and set a code. It serves as a flag to the technician to scan the TCM for specific transmission-related diagnostic trouble codes that provide more detail about the problem.",
    diagram: ""
  },
  {
    id: 19,
    q: "During an inspection, transmission fluid is found leaking from the area where the transmission meets the engine. What is the MOST likely source?",
    options: [
      "A) Transmission oil pan gasket",
      "B) Front transmission pump seal or torque converter seal",
      "C) Rear transmission extension housing seal",
      "D) Transmission cooler line fitting"
    ],
    answer: 1,
    explanation: "A fluid leak at the bell housing area where the transmission meets the engine is most commonly caused by a failed front pump seal or torque converter seal. This allows fluid to seep out between the engine and transmission. Diagnosis may require removing the transmission inspection cover.",
    diagram: ""
  },
  {
    id: 20,
    q: "Technician A says a torn CV boot should be replaced promptly to prevent joint damage. Technician B says a slight tear in a CV boot is acceptable as long as no grease has leaked out yet. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Technician A is correct. Any tear in a CV boot, no matter how small, will allow grease to leak out and contaminants such as dirt and moisture to enter the joint. This will quickly cause CV joint wear and failure. The boot should be replaced as soon as a tear is discovered.",
    diagram: ""
  },
  {
    id: 21,
    q: "What is the purpose of the transmission cooler in an automatic transmission system?",
    options: [
      "A) To warm the transmission fluid during cold weather startup",
      "B) To maintain transmission fluid at a safe operating temperature and prevent overheating",
      "C) To filter contaminants from the transmission fluid",
      "D) To regulate transmission line pressure"
    ],
    answer: 1,
    explanation: "The transmission cooler removes excess heat from the automatic transmission fluid to keep it within a safe operating temperature range. Overheated fluid breaks down rapidly, losing its lubricating and hydraulic properties. The cooler is typically located in the radiator or as a separate auxiliary unit.",
    diagram: ""
  },
  {
    id: 22,
    q: "A vehicle has excessive vibration that increases with speed. The powertrain mounts appear cracked and oil-soaked. What should the technician recommend?",
    options: [
      "A) Balancing the tires to correct the vibration",
      "B) Replacing the damaged powertrain mounts",
      "C) Performing a wheel alignment",
      "D) Replacing the transmission fluid"
    ],
    answer: 1,
    explanation: "Cracked and oil-soaked powertrain mounts have lost their ability to dampen engine and transmission vibrations and properly support the powertrain. This allows excessive movement and vibration to be transmitted to the vehicle body. The damaged mounts should be replaced to restore proper operation.",
    diagram: ""
  },
  {
    id: 23,
    q: "On most vehicles, how should automatic transmission fluid level be checked?",
    options: [
      "A) With the engine off and cold, on a level surface",
      "B) With the engine running at idle, transmission at operating temperature, and in Park or Neutral",
      "C) With the engine running at 2,500 RPM and the transmission in Drive",
      "D) Immediately after a long highway drive without idling"
    ],
    answer: 1,
    explanation: "Most manufacturers require the automatic transmission fluid to be checked with the engine running at idle, the transmission at normal operating temperature, the gear selector cycled through all positions and placed in Park or Neutral, and the vehicle on a level surface. Always consult the owner's manual.",
    diagram: ""
  },

  // ===== MANUAL DRIVE TRAIN & AXLES (Questions 24–34) =====
  {
    id: 24,
    q: "A vehicle with a hydraulic clutch has a soft, spongy clutch pedal. What is the MOST likely cause?",
    options: [
      "A) Worn clutch disc",
      "B) Air in the hydraulic clutch system",
      "C) Weak clutch pressure plate springs",
      "D) Worn pilot bearing"
    ],
    answer: 1,
    explanation: "A soft or spongy clutch pedal in a hydraulic clutch system most commonly indicates air trapped in the hydraulic lines, master cylinder, or slave cylinder. Air is compressible, unlike hydraulic fluid, so it causes a spongy feel. The system should be bled to remove the air.",
    diagram: ""
  },
  {
    id: 25,
    q: "Fluid is leaking from the rear axle pinion seal. Which of the following is the correct repair procedure?",
    options: [
      "A) Add more gear oil to compensate for the leak",
      "B) Replace the pinion seal, noting the pinion nut torque and crush sleeve requirements",
      "C) Tighten the pinion nut to stop the leak",
      "D) Apply sealant to the outside of the seal"
    ],
    answer: 1,
    explanation: "Replacing the pinion seal requires careful attention to pinion bearing preload. The technician must mark the pinion nut position or measure preload before removal. A new crush sleeve may be required depending on the manufacturer's procedure. Simply tightening the nut can change bearing preload.",
    diagram: ""
  },
  {
    id: 26,
    q: "A manual transmission is hard to shift into gear. Technician A says the clutch may not be fully releasing. Technician B says the transmission synchronizers may be worn. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Hard shifting can be caused by a clutch that does not fully disengage, allowing the input shaft to continue spinning. It can also be caused by worn synchronizer rings that cannot match gear speeds properly. Both conditions should be investigated during diagnosis.",
    diagram: ""
  },
  {
    id: 27,
    q: "When checking the fluid level in a manual transmission, where is the fluid level typically checked?",
    options: [
      "A) Using a dipstick on top of the transmission",
      "B) At the fill plug on the side of the transmission case",
      "C) Through the shifter boot opening",
      "D) At the drain plug on the bottom of the case"
    ],
    answer: 1,
    explanation: "Most manual transmissions use a fill plug located on the side of the transmission case to check and add fluid. The fluid level should be at the bottom of the fill plug opening. The vehicle must be level when checking. Manual transmissions typically do not have a dipstick for fluid checking.",
    diagram: ""
  },
  {
    id: 28,
    q: "A clicking noise is heard from the front of a front-wheel-drive vehicle during sharp turns. What is the MOST likely cause?",
    options: [
      "A) Worn front wheel bearings",
      "B) Worn outer CV joint",
      "C) Loose lug nuts",
      "D) Worn tie rod ends"
    ],
    answer: 1,
    explanation: "A clicking or popping noise from the front of a front-wheel-drive vehicle during turns is the classic symptom of a worn outer CV joint. The joint wears due to loss of grease from a torn boot, allowing dirt and moisture contamination. The CV axle or joint should be replaced.",
    diagram: ""
  },
  {
    id: 29,
    q: "A vibration is felt at highway speeds that increases in intensity. The U-joints on the drive shaft show rust-colored dust around the bearing caps. What does this indicate?",
    options: [
      "A) Normal U-joint operation",
      "B) The U-joints are worn and need replacement",
      "C) The drive shaft is out of phase",
      "D) The transmission output shaft is damaged"
    ],
    answer: 1,
    explanation: "Rust-colored dust around U-joint bearing caps indicates the needle bearings inside have worn through their case hardening and are deteriorating. This causes vibration that increases with speed. Worn U-joints should be replaced promptly to prevent driveshaft failure and potential vehicle damage.",
    diagram: ""
  },
  {
    id: 30,
    q: "What is the purpose of the drive shaft slip yoke?",
    options: [
      "A) To connect the drive shaft to the rear axle",
      "B) To allow the drive shaft to change length as the suspension moves",
      "C) To provide a universal joint connection point",
      "D) To balance the drive shaft at high speeds"
    ],
    answer: 1,
    explanation: "The slip yoke allows the drive shaft to change its effective length as the rear axle moves up and down with suspension travel. The splined slip yoke slides in and out of the transmission extension housing, accommodating changes in the distance between the transmission and rear axle.",
    diagram: ""
  },
  {
    id: 31,
    q: "A wheel bearing is being inspected. All of the following are signs of a worn wheel bearing EXCEPT:",
    options: [
      "A) A humming or growling noise that changes with vehicle speed",
      "B) Excessive play when the wheel is rocked top to bottom",
      "C) A rhythmic clicking noise only during sharp turns",
      "D) Roughness felt when rotating the wheel by hand with the vehicle raised"
    ],
    answer: 2,
    explanation: "A rhythmic clicking noise during sharp turns is the classic symptom of a worn CV joint, not a wheel bearing. Worn wheel bearings typically produce a humming or growling noise that changes with speed, show excessive play when the wheel is rocked, and feel rough when spun by hand.",
    diagram: ""
  },
  {
    id: 32,
    q: "When checking transfer case fluid, what type of fluid do most transfer cases require?",
    options: [
      "A) Automatic transmission fluid only",
      "B) The specific fluid type listed in the manufacturer's service information",
      "C) 80W-90 gear oil in all cases",
      "D) Engine oil of the same weight as the engine"
    ],
    answer: 1,
    explanation: "Transfer case fluid requirements vary significantly by manufacturer and model. Some use ATF, some use specific synthetic fluids, and others use gear oil. Always consult the manufacturer's service information for the correct fluid type and capacity. Using the wrong fluid can cause damage.",
    diagram: ""
  },
  {
    id: 33,
    q: "A customer reports that the 4WD indicator light flashes and the system will not engage. What should the technician check FIRST?",
    options: [
      "A) Transfer case internal components",
      "B) 4WD actuator operation, linkage, and electrical connections",
      "C) Front differential ring and pinion gears",
      "D) Rear axle fluid level"
    ],
    answer: 1,
    explanation: "When a 4WD system will not engage and the indicator light flashes, the technician should first check the most accessible external components: the actuator motor, shift linkage or cable, vacuum lines, and electrical connections. These are common failure points and can be inspected without disassembly.",
    diagram: ""
  },
  {
    id: 34,
    q: "Technician A says AWD systems operate automatically and do not require driver input. Technician B says some AWD systems have a center differential or coupling that may require periodic fluid service. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Most modern AWD systems operate automatically, distributing torque between the front and rear axles without driver input. Many AWD systems also have a center differential, transfer unit, or coupling device that requires periodic fluid changes per the maintenance schedule.",
    diagram: ""
  },

  // ===== SUSPENSION & STEERING (Questions 35–58) =====
  {
    id: 35,
    q: "When checking power steering fluid, the technician notices the fluid is foamy. What is the MOST likely cause?",
    options: [
      "A) The system has too much fluid",
      "B) Air is being drawn into the system through a leak or low fluid level",
      "C) The fluid has been contaminated with brake fluid",
      "D) The power steering pump is producing too much pressure"
    ],
    answer: 1,
    explanation: "Foamy power steering fluid indicates air is being drawn into the system. This is commonly caused by a low fluid level that allows the pump to draw in air, or a leak in the suction side of the system. Air in the system causes noise, poor steering assist, and can damage the pump.",
    diagram: ""
  },
  {
    id: 36,
    q: "A power steering pump is making a whining noise that increases with engine RPM. What is the MOST likely cause?",
    options: [
      "A) The drive belt is too tight",
      "B) Low power steering fluid level or a worn pump",
      "C) The steering gear is binding",
      "D) The power steering pressure hose is kinked"
    ],
    answer: 1,
    explanation: "A whining noise from the power steering pump that increases with RPM is most commonly caused by a low fluid level, which causes the pump to cavitate and whine. A worn pump with internal damage can also produce this noise. The fluid level should be checked and the pump inspected.",
    diagram: ""
  },
  {
    id: 37,
    q: "During a rack and pinion steering gear inspection, fluid is found leaking from both bellows boots. What does this indicate?",
    options: [
      "A) The tie rod ends need replacement",
      "B) The rack and pinion internal seals have failed",
      "C) The power steering pump has too much pressure",
      "D) The bellows boots have been torn by road debris"
    ],
    answer: 1,
    explanation: "Fluid leaking from both bellows boots on a rack and pinion steering unit indicates that the internal rack seals have failed. Power steering fluid bypasses the seals and fills the bellows. The rack and pinion unit typically needs to be rebuilt or replaced when this occurs.",
    diagram: ""
  },
  {
    id: 38,
    q: "What is the correct way to check a tie rod end for wear?",
    options: [
      "A) Visually inspect the tie rod end boot only",
      "B) Grasp the tire at the 3 and 9 o'clock positions and check for looseness while observing the tie rod end",
      "C) Bounce the front of the vehicle and listen for noise",
      "D) Check that the tie rod end boot is not torn"
    ],
    answer: 1,
    explanation: "To check a tie rod end, raise the vehicle and grasp the tire at the 3 and 9 o'clock positions. Push in and pull out while having an assistant observe the tie rod end for play or looseness. Any detectable movement in the tie rod end indicates it is worn and should be replaced.",
    diagram: ""
  },
  {
    id: 39,
    q: "Technician A says a worn ball joint can cause a pull to one side during braking. Technician B says a worn ball joint can cause uneven tire wear. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. A worn ball joint allows uncontrolled movement of the steering knuckle, which can change wheel alignment angles. This can cause the vehicle to pull to one side, especially during braking, and also cause uneven tire wear patterns due to changed camber or caster angles.",
    diagram: ""
  },
  {
    id: 40,
    q: "Which component connects the steering knuckle to the vehicle frame on a MacPherson strut suspension?",
    options: [
      "A) Upper and lower control arms",
      "B) The strut assembly serves as the upper suspension pivot",
      "C) A separate upper ball joint and mounting plate",
      "D) Trailing arms and a panhard rod"
    ],
    answer: 1,
    explanation: "In a MacPherson strut suspension, the strut assembly itself serves as the upper suspension mounting point. The steering knuckle is attached to the bottom of the strut, and the top of the strut is mounted to the strut tower in the body. A lower control arm with a ball joint provides the lower pivot.",
    diagram: ""
  },
  {
    id: 41,
    q: "A vehicle sags on one corner when parked. What is the MOST likely cause?",
    options: [
      "A) Worn shock absorber on that corner",
      "B) Broken or weak spring on that corner",
      "C) Worn stabilizer bar link",
      "D) Loose wheel bearing"
    ],
    answer: 1,
    explanation: "A vehicle sagging on one corner is most likely caused by a broken or weakened spring on that corner. Springs support the vehicle's weight and maintain ride height. Shock absorbers control spring oscillation but do not support vehicle weight, so a worn shock would not cause sagging.",
    diagram: ""
  },
  {
    id: 42,
    q: "What is the primary purpose of stabilizer bars (sway bars) in a suspension system?",
    options: [
      "A) To support the weight of the vehicle",
      "B) To reduce body roll during cornering",
      "C) To absorb road impacts and bumps",
      "D) To maintain proper wheel alignment"
    ],
    answer: 1,
    explanation: "Stabilizer bars, also called sway bars or anti-roll bars, connect opposite sides of the suspension to resist body roll during cornering. When the vehicle turns, the bar twists, transferring force from the outside wheel to the inside wheel, keeping the body more level and improving handling stability.",
    diagram: ""
  },
  {
    id: 43,
    q: "A vehicle pulls to the right during straight-line driving. All of the following could be causes EXCEPT:",
    options: [
      "A) Incorrect wheel alignment with excessive positive camber on the right",
      "B) Low tire pressure on the right front tire",
      "C) A worn right front stabilizer bar end link",
      "D) A brake caliper dragging on the left front"
    ],
    answer: 2,
    explanation: "A worn stabilizer bar end link does not typically cause a pull to one side during straight-line driving. Incorrect alignment, uneven tire pressure, and a dragging brake caliper can all cause directional pull. A worn sway bar link would more likely cause clunking noises during cornering.",
    diagram: ""
  },
  {
    id: 44,
    q: "What tire wear pattern indicates excessive positive camber?",
    options: [
      "A) Wear on the inside edge of the tire",
      "B) Wear on the outside edge of the tire",
      "C) Wear in the center of the tread",
      "D) Cupping or scalloping of the tread"
    ],
    answer: 1,
    explanation: "Excessive positive camber causes the top of the tire to lean outward, placing more load on the outside edge of the tread. This results in accelerated wear on the outer shoulder of the tire. Negative camber causes inside edge wear, and over-inflation causes center tread wear.",
    diagram: ""
  },
  {
    id: 45,
    q: "A humming noise from the front of a vehicle gets louder during a left turn. What is the MOST likely cause?",
    options: [
      "A) Left front wheel bearing",
      "B) Right front wheel bearing",
      "C) Worn front tires",
      "D) Power steering pump noise"
    ],
    answer: 1,
    explanation: "A humming noise that gets louder during a left turn indicates a failing right front wheel bearing. During a left turn, body weight shifts to the right, increasing the load on the right wheel bearing. If the bearing is worn, the increased load amplifies the noise it produces.",
    diagram: ""
  },
  {
    id: 46,
    q: "The TPMS warning light is illuminated on the dashboard. What does this indicate?",
    options: [
      "A) The tire tread is worn below the minimum depth",
      "B) One or more tires have pressure below or above the recommended level, or a sensor malfunction",
      "C) The tires need to be rotated",
      "D) The wheel alignment is out of specification"
    ],
    answer: 1,
    explanation: "The Tire Pressure Monitoring System (TPMS) warning light illuminates when one or more tires have pressure significantly below the recommended level (typically 25% below). A flashing TPMS light usually indicates a system malfunction such as a failed sensor. The tire pressures should be checked immediately.",
    diagram: ""
  },
  {
    id: 47,
    q: "What is the recommended tire rotation pattern for a vehicle with non-directional tires and the same size on all four wheels?",
    options: [
      "A) Front to rear on the same side only",
      "B) A cross pattern such as forward cross or rearward cross",
      "C) Only the front tires are rotated to the rear",
      "D) Tires should not be rotated on modern vehicles"
    ],
    answer: 1,
    explanation: "For vehicles with non-directional tires of the same size, a cross rotation pattern is recommended. In a forward cross, rear tires move straight to the front, and front tires cross to the opposite rear. This promotes even wear. Directional tires must stay on the same side and go front to rear only.",
    diagram: ""
  },
  {
    id: 48,
    q: "Technician A says feathered tire wear is caused by incorrect toe alignment. Technician B says cupped tire wear is caused by worn shock absorbers. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Feathered or sawtooth wear across the tread is a classic sign of incorrect toe alignment, where the tires are either toed-in or toed-out excessively. Cupped or scalloped tire wear is commonly caused by worn shock absorbers that allow the tire to bounce on the road surface.",
    diagram: ""
  },
  {
    id: 49,
    q: "During a control arm inspection, what should the technician look for?",
    options: [
      "A) Only check the ball joint for play",
      "B) Inspect the control arm bushings for cracking, the ball joint for wear, and the arm for bending or damage",
      "C) Only verify the control arm mounting bolts are tight",
      "D) Check the control arm for rust only"
    ],
    answer: 1,
    explanation: "A thorough control arm inspection includes checking the bushings for cracking, deterioration, and excessive play; inspecting the ball joint for wear and looseness; and examining the control arm itself for bending, collision damage, or corrosion. All components affect alignment and handling.",
    diagram: ""
  },
  {
    id: 50,
    q: "A vehicle has a shimmy or vibration in the steering wheel at highway speed. What should the technician check FIRST?",
    options: [
      "A) Power steering fluid level",
      "B) Tire balance and tire condition",
      "C) Steering gear mounting bolts",
      "D) Stabilizer bar links"
    ],
    answer: 1,
    explanation: "A steering wheel shimmy at highway speed is most commonly caused by tire imbalance or tire condition issues such as flat spots, separated belts, or uneven wear. Tire balance and condition should be checked first as this is the most common and easiest to verify cause of this symptom.",
    diagram: ""
  },
  {
    id: 51,
    q: "What is the purpose of a strut bearing plate (strut mount)?",
    options: [
      "A) To connect the strut to the steering knuckle",
      "B) To provide a pivot point that allows the strut to rotate during steering while mounting the strut to the body",
      "C) To limit suspension travel",
      "D) To support the weight of the engine"
    ],
    answer: 1,
    explanation: "The strut bearing plate, or strut mount, connects the top of the strut to the vehicle body structure. It contains a bearing that allows the strut to rotate with the steering knuckle during steering input. A worn strut mount can cause noise, binding during steering, and alignment changes.",
    diagram: ""
  },
  {
    id: 52,
    q: "A vehicle has a clunking noise from the front end when going over bumps. The noise disappears on smooth roads. Which component is MOST likely worn?",
    options: [
      "A) Wheel bearing",
      "B) Stabilizer bar end link or control arm bushing",
      "C) Tire belt separation",
      "D) CV joint"
    ],
    answer: 1,
    explanation: "A clunking noise over bumps that disappears on smooth roads is typically caused by worn stabilizer bar end links, control arm bushings, or ball joints. These components develop play as they wear, allowing metal-to-metal contact during suspension movement over bumps. A visual and physical inspection is needed.",
    diagram: ""
  },
  {
    id: 53,
    q: "What does excessive toe-out on a front-wheel alignment cause?",
    options: [
      "A) Center tread wear on both front tires",
      "B) Inside edge wear on both front tires",
      "C) Outside edge wear on both front tires",
      "D) Feathered wear with the edges worn smooth on the inside"
    ],
    answer: 3,
    explanation: "Excessive toe-out causes feathered tire wear where each tread block is worn smooth on the inside edge and sharp on the outside edge. This occurs because the fronts of the tires point outward, causing each tire to scrub sideways slightly as it rolls. Toe-in creates the opposite feathering direction.",
    diagram: ""
  },
  {
    id: 54,
    q: "During a suspension inspection, a shock absorber is found leaking oil from the upper seal. What should the technician recommend?",
    options: [
      "A) Wipe off the oil and recheck at the next service",
      "B) Replace the shock absorber, and replace both if on the same axle",
      "C) Tighten the shock absorber mounting bolts",
      "D) Add fluid to the shock absorber"
    ],
    answer: 1,
    explanation: "A leaking shock absorber has failed and should be replaced. Shock absorbers should be replaced in pairs on the same axle to maintain even handling and braking characteristics. A single worn shock can cause uneven tire wear and handling imbalance. Shocks cannot be refilled or repaired.",
    diagram: ""
  },
  {
    id: 55,
    q: "What symptom does a worn or damaged strut typically cause?",
    options: [
      "A) Engine misfires at idle",
      "B) Excessive bouncing, nose diving during braking, and poor ride quality",
      "C) Transmission slipping",
      "D) Low power steering assist"
    ],
    answer: 1,
    explanation: "Worn struts cause excessive bouncing, nose diving during braking, rear squat during acceleration, and poor ride quality. They may also cause cupped tire wear and increased stopping distances. Struts are a structural part of the suspension and affect alignment, ride, and handling.",
    diagram: ""
  },
  {
    id: 56,
    q: "Technician A says TPMS sensors must be relearned after tire rotation on some vehicles. Technician B says TPMS sensors are powered by a battery and will eventually need replacement. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Many direct TPMS systems require a relearn procedure after tire rotation so the system knows the new position of each sensor. TPMS sensors contain a lithium battery with a typical lifespan of five to ten years, after which the sensor must be replaced.",
    diagram: ""
  },
  {
    id: 57,
    q: "Over-inflation of a tire MOST commonly causes which wear pattern?",
    options: [
      "A) Inside and outside edge wear",
      "B) Center tread wear",
      "C) Cupping or scalloping",
      "D) Feathered wear pattern"
    ],
    answer: 1,
    explanation: "Over-inflation causes the tire to ride on the center of the tread, reducing the contact patch to the middle portion. This results in accelerated center tread wear while the shoulders remain relatively unworn. Under-inflation causes the opposite pattern with both edge shoulders wearing faster.",
    diagram: ""
  },
  {
    id: 58,
    q: "A vehicle requires a wheel alignment. All of the following should be checked and corrected BEFORE performing the alignment EXCEPT:",
    options: [
      "A) Tire pressures should be set to specification",
      "B) Worn suspension and steering components should be replaced",
      "C) The fuel tank should be full",
      "D) The vehicle should be at normal ride height"
    ],
    answer: 2,
    explanation: "While tire pressure, ride height, and worn suspension components must be corrected before alignment, a full fuel tank is not required. Some manufacturers specify a certain fuel level, but it is not universally required. The vehicle should be at proper ride height with no extra cargo in the trunk.",
    diagram: ""
  },

  // ===== BRAKES (Questions 59–78) =====
  {
    id: 59,
    q: "When checking brake fluid, the fluid appears dark and contaminated. What should the technician recommend?",
    options: [
      "A) Top off the fluid and recheck at the next service",
      "B) Flush and replace the brake fluid per manufacturer specifications",
      "C) Switch to a different brand of brake fluid",
      "D) Add a fluid conditioner to clean the fluid"
    ],
    answer: 1,
    explanation: "Dark, contaminated brake fluid should be flushed and replaced. Brake fluid is hygroscopic, meaning it absorbs moisture over time. Moisture lowers the boiling point, which can cause brake fade and vapor lock. Contaminated fluid can also corrode internal brake components causing costly damage.",
    diagram: ""
  },
  {
    id: 60,
    q: "During a brake inspection, a technician finds a brake hose with a bulge. What is the correct action?",
    options: [
      "A) Monitor the hose and check again in 3,000 miles",
      "B) Replace the hose immediately as it could rupture under pressure",
      "C) Wrap the hose with tape to reinforce it",
      "D) Clamp the hose above the bulge"
    ],
    answer: 1,
    explanation: "A bulging brake hose indicates the internal reinforcement has weakened and the hose is at risk of rupture under hydraulic pressure. This is a critical safety concern as a burst hose would cause complete loss of braking on that circuit. The hose must be replaced immediately.",
    diagram: ""
  },
  {
    id: 61,
    q: "The brake warning light on the dashboard is illuminated. All of the following are possible causes EXCEPT:",
    options: [
      "A) The parking brake is engaged",
      "B) The brake fluid level is low",
      "C) The ABS module has detected a wheel speed sensor fault",
      "D) There is a hydraulic pressure loss in one brake circuit"
    ],
    answer: 2,
    explanation: "A wheel speed sensor fault illuminates the ABS warning light, not the red brake warning light. The red brake warning light is activated by the parking brake switch, low brake fluid level sensor, or the hydraulic pressure differential switch that detects a loss of pressure in one brake circuit.",
    diagram: ""
  },
  {
    id: 62,
    q: "When inspecting drum brakes, the technician measures the brake drum and finds it is beyond the maximum diameter specification stamped on the drum. What should the technician do?",
    options: [
      "A) Machine the drum to a smooth surface",
      "B) Replace the drum because it cannot be safely machined",
      "C) Install the new shoes and reuse the drum",
      "D) Machine only the high spots on the drum surface"
    ],
    answer: 1,
    explanation: "If a brake drum's diameter exceeds the maximum diameter specification, the drum is too thin to be safely machined or reused. An oversized drum has thinner walls that can overheat, distort, and potentially crack during braking. The drum must be replaced with a new or properly sized unit.",
    diagram: ""
  },
  {
    id: 63,
    q: "Technician A says disc brake pads should be replaced when they reach the minimum thickness specification. Technician B says brake pad wear indicators provide an audible warning when pads are worn. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Brake pads must be replaced when they reach minimum thickness to maintain safe braking. Many brake pads include a metal wear indicator tab that contacts the rotor when the pad is worn, creating a squealing noise to alert the driver that service is needed.",
    diagram: ""
  },
  {
    id: 64,
    q: "What is the purpose of bleeding the brake system?",
    options: [
      "A) To drain and replace all the brake fluid",
      "B) To remove air from the hydraulic brake lines and components",
      "C) To test the brake booster for proper operation",
      "D) To adjust the brake pedal height"
    ],
    answer: 1,
    explanation: "Bleeding the brake system removes air that has entered the hydraulic lines and components. Air is compressible, so any air trapped in the system will cause a soft or spongy brake pedal and reduce braking effectiveness. Bleeding ensures the system is filled with incompressible brake fluid only.",
    diagram: ""
  },
  {
    id: 65,
    q: "What is the correct brake bleeding sequence for most vehicles?",
    options: [
      "A) Start with the wheel closest to the master cylinder",
      "B) Start with the wheel farthest from the master cylinder",
      "C) Bleed all four wheels simultaneously",
      "D) Start with the front wheels only"
    ],
    answer: 1,
    explanation: "The standard brake bleeding sequence starts with the wheel farthest from the master cylinder and works toward the closest. This is typically right rear, left rear, right front, left front. However, some vehicles with specific hydraulic circuits may require a different sequence per manufacturer specifications.",
    diagram: ""
  },
  {
    id: 66,
    q: "A vehicle's parking brake does not hold the vehicle on a slight incline. What should the technician check FIRST?",
    options: [
      "A) The parking brake cable adjustment",
      "B) The rear brake shoes or pads for wear",
      "C) The transmission parking pawl",
      "D) The brake master cylinder"
    ],
    answer: 0,
    explanation: "The technician should first check the parking brake cable adjustment. Over time, cables stretch and rear brakes wear, causing excessive cable travel. The parking brake cable adjustment should be checked and adjusted if necessary. If adjustment does not correct the problem, then rear brake components should be inspected.",
    diagram: ""
  },
  {
    id: 67,
    q: "Technician A says the brake power booster uses engine vacuum to assist brake pedal application. Technician B says a failed brake booster will cause a hard brake pedal. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. The vacuum brake booster uses engine intake manifold vacuum to multiply the force applied to the brake pedal. When the booster fails or loses vacuum, the driver must apply much greater pedal force, resulting in a hard brake pedal that requires excessive effort to stop.",
    diagram: ""
  },
  {
    id: 68,
    q: "What is the basic function of an ABS (Anti-lock Braking System)?",
    options: [
      "A) To reduce stopping distance in all conditions",
      "B) To prevent wheel lockup during hard braking, allowing the driver to maintain steering control",
      "C) To automatically apply the brakes when an obstacle is detected",
      "D) To increase brake pad life by reducing braking force"
    ],
    answer: 1,
    explanation: "The primary function of ABS is to prevent wheel lockup during hard braking so the driver can maintain steering control. ABS modulates brake pressure rapidly at each wheel to keep the tires near the limit of traction without locking. It does not necessarily shorten stopping distance on all surfaces.",
    diagram: ""
  },
  {
    id: 69,
    q: "During a disc brake service, the technician finds the rotor has a lateral runout measurement that exceeds specification. What should be done?",
    options: [
      "A) Install new brake pads and return to service",
      "B) Machine the rotor if sufficient thickness remains, or replace the rotor",
      "C) Apply anti-seize to the rotor mounting surface",
      "D) Tighten the lug nuts to a higher torque"
    ],
    answer: 1,
    explanation: "Excessive lateral runout causes brake pulsation and uneven pad wear. The rotor should be machined on a lathe to correct the runout if it has enough thickness remaining after machining to stay above the minimum specification. If machining would take it below minimum thickness, the rotor must be replaced.",
    diagram: ""
  },
  {
    id: 70,
    q: "A vehicle pulls to the left during braking only. Which of the following is the MOST likely cause?",
    options: [
      "A) A sticking caliper or restricted brake hose on the right front",
      "B) Worn front tires",
      "C) Low power steering fluid",
      "D) A worn left front wheel bearing"
    ],
    answer: 0,
    explanation: "A brake pull to the left during braking suggests uneven braking force between the left and right front brakes. A sticking caliper or restricted brake hose on the right front would reduce braking force on that side, causing the vehicle to pull toward the stronger left brake during braking.",
    diagram: ""
  },
  {
    id: 71,
    q: "What type of brake fluid is MOST commonly specified for modern vehicles?",
    options: [
      "A) DOT 2",
      "B) DOT 3 or DOT 4",
      "C) DOT 6",
      "D) Automatic transmission fluid"
    ],
    answer: 1,
    explanation: "DOT 3 and DOT 4 are the most commonly specified brake fluids for modern vehicles. DOT 4 has a higher boiling point than DOT 3. Some performance and European vehicles specify DOT 4 or DOT 5.1. DOT 5 is silicone-based and is not compatible with conventional systems. Always use the specified type.",
    diagram: ""
  },
  {
    id: 72,
    q: "When installing new brake pads, the caliper piston must be pushed back into the bore. On rear calipers with an integral parking brake, how is this typically accomplished?",
    options: [
      "A) Push the piston straight in with a C-clamp",
      "B) Use a special tool to rotate the piston clockwise while pressing it in",
      "C) Use compressed air to force the piston back",
      "D) Remove the bleeder screw and hammer the piston in"
    ],
    answer: 1,
    explanation: "Rear calipers with an integral parking brake mechanism typically require the piston to be rotated clockwise while being pressed inward. A special cube or pin-style tool fits into the piston face to turn it. Simply pushing straight in will damage the parking brake mechanism inside the caliper.",
    diagram: ""
  },
  {
    id: 73,
    q: "A customer complains of a grinding noise when braking. What is the MOST likely cause?",
    options: [
      "A) Glazed brake pads",
      "B) Brake pads worn to the metal backing plate contacting the rotor",
      "C) Loose caliper mounting bolts",
      "D) Contaminated brake fluid"
    ],
    answer: 1,
    explanation: "A grinding noise during braking most commonly indicates the brake pads have worn completely through the friction material, allowing the metal backing plate to contact the rotor. This causes rapid rotor damage and significantly reduces braking ability. Immediate brake service is needed.",
    diagram: ""
  },
  {
    id: 74,
    q: "All of the following are types of drum brake self-adjusters EXCEPT:",
    options: [
      "A) Star wheel adjuster",
      "B) Ratcheting adjuster activated by the parking brake",
      "C) Hydraulic automatic adjuster built into the wheel cylinder",
      "D) Vacuum-operated adjuster"
    ],
    answer: 3,
    explanation: "Vacuum-operated adjusters are not used in drum brake systems. Common drum brake self-adjusting mechanisms include the star wheel adjuster that operates during reverse braking application, ratcheting adjusters activated by parking brake application, and some wheel cylinders with built-in automatic adjustment features.",
    diagram: ""
  },
  {
    id: 75,
    q: "After replacing brake components, the brake pedal goes to the floor on the first application. What should the technician do?",
    options: [
      "A) Inform the customer the brakes need time to break in",
      "B) Pump the brake pedal several times to seat the pads against the rotor or shoes against the drum",
      "C) Drive the vehicle slowly to allow the brakes to adjust automatically",
      "D) Bleed the brake system again"
    ],
    answer: 1,
    explanation: "After brake service, the pistons may be pushed back, creating a gap between the pads and rotor or shoes and drum. Pumping the brake pedal several times pushes the pistons out to take up this gap. The pedal should become firm. If it remains soft, the system should be inspected for air or leaks.",
    diagram: ""
  },
  {
    id: 76,
    q: "Technician A says brake lines should be inspected for corrosion, dents, and kinks. Technician B says a corroded brake line should be repaired with a compression fitting. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Technician A is correct. Brake lines must be regularly inspected for corrosion, dents, kinks, and leaks. Technician B is incorrect because compression fittings are not approved for brake line repair. Brake lines must be repaired using double-flare or ISO flare fittings as specified by the manufacturer.",
    diagram: ""
  },
  {
    id: 77,
    q: "What causes a pulsating brake pedal during normal braking?",
    options: [
      "A) Worn brake pads",
      "B) Brake rotor thickness variation or excessive runout",
      "C) Air in the brake lines",
      "D) A weak brake booster"
    ],
    answer: 1,
    explanation: "A pulsating brake pedal during normal braking is caused by brake rotor thickness variation (parallelism) or excessive lateral runout. As the rotor spins, the uneven thickness pushes the pads in and out, which is felt through the brake pedal. The rotor should be machined or replaced.",
    diagram: ""
  },
  {
    id: 78,
    q: "The ABS warning light is on but the red brake warning light is off. What does this indicate?",
    options: [
      "A) The base brake system has failed completely",
      "B) The ABS has a malfunction but the base hydraulic brake system is still functional",
      "C) Both the ABS and base brakes have failed",
      "D) The brake fluid level is critically low"
    ],
    answer: 1,
    explanation: "When the ABS light is on but the red brake warning light is off, it means the ABS system has detected a fault and disabled itself, but the base hydraulic brake system remains operational. The vehicle can still stop normally but will not have anti-lock protection during hard braking.",
    diagram: ""
  },

  // ===== ELECTRICAL (Questions 79–93) =====
  {
    id: 79,
    q: "A battery load test is performed on a fully charged battery. What reading indicates a good battery?",
    options: [
      "A) Voltage drops below 7.2 volts during the test",
      "B) Voltage remains at or above 9.6 volts for 15 seconds at half the CCA rating",
      "C) Voltage reads exactly 12.0 volts with no load",
      "D) Voltage reads 10.0 volts for 5 seconds"
    ],
    answer: 1,
    explanation: "During a battery load test, the battery is loaded to half its CCA rating for 15 seconds. A good battery will maintain at least 9.6 volts at 70 degrees Fahrenheit during this test. A voltage drop below 9.6 volts indicates the battery cannot deliver adequate cranking power and should be replaced.",
    diagram: ""
  },
  {
    id: 80,
    q: "When jump starting a vehicle, what is the correct sequence for connecting the jumper cables?",
    options: [
      "A) Negative on dead battery, negative on good battery, positive on dead battery, positive on good battery",
      "B) Positive on dead battery, positive on good battery, negative on good battery, negative on engine ground away from dead battery",
      "C) Negative on good battery, positive on good battery, positive on dead battery, negative on dead battery",
      "D) Connect both positives first, then both negatives directly to the batteries"
    ],
    answer: 1,
    explanation: "The correct jump starting sequence is: connect positive to dead battery, positive to good battery, negative to good battery, then negative to an engine ground on the dead vehicle away from the battery. The last connection is made away from the battery to prevent a spark near hydrogen gas.",
    diagram: ""
  },
  {
    id: 81,
    q: "A vehicle cranks slowly on a cold morning but the battery tests good. What should the technician check NEXT?",
    options: [
      "A) The alternator output",
      "B) The starter circuit including cables, connections, and voltage drop",
      "C) The ignition switch",
      "D) The fuel pump relay"
    ],
    answer: 1,
    explanation: "If the battery tests good but cranking is slow, the problem is likely in the starter circuit. The technician should perform voltage drop tests on the battery cables, check cable connections for corrosion and tightness, and test the starter motor draw. High resistance in the circuit reduces cranking speed.",
    diagram: ""
  },
  {
    id: 82,
    q: "Technician A says a voltage drop test on the positive battery cable should be less than 0.5 volts while cranking. Technician B says high resistance in battery cables causes slow cranking. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. A voltage drop test on the positive cable from the battery post to the starter terminal should show no more than 0.5 volts while cranking. Higher readings indicate excessive resistance from corroded connections, damaged cables, or loose terminals that cause slow cranking.",
    diagram: ""
  },
  {
    id: 83,
    q: "What is the normal charging system voltage range at idle with accessories off?",
    options: [
      "A) 10.5 to 11.5 volts",
      "B) 12.0 to 12.6 volts",
      "C) 13.5 to 14.8 volts",
      "D) 15.5 to 16.5 volts"
    ],
    answer: 2,
    explanation: "A properly functioning charging system should produce between 13.5 and 14.8 volts at idle with accessories off. This voltage is needed to charge the battery and power electrical systems. Voltage below this range indicates under-charging, while voltage above 15 volts indicates over-charging, both requiring diagnosis.",
    diagram: ""
  },
  {
    id: 84,
    q: "A vehicle's headlights are dim at idle but brighten when the engine is revved. What is the MOST likely cause?",
    options: [
      "A) A faulty headlight switch",
      "B) A weak alternator or loose alternator drive belt",
      "C) High-resistance headlight ground connections",
      "D) A short circuit in the headlight wiring"
    ],
    answer: 1,
    explanation: "Headlights that are dim at idle but brighten at higher RPM indicate the alternator is not producing sufficient output at idle speed. This can be caused by a worn alternator with weak output, a slipping drive belt, or a faulty voltage regulator. The charging system should be tested.",
    diagram: ""
  },
  {
    id: 85,
    q: "A technician is replacing a headlight bulb. All of the following are important precautions EXCEPT:",
    options: [
      "A) Avoid touching the glass of a halogen bulb with bare fingers",
      "B) Verify the replacement bulb is the correct type and wattage",
      "C) Aim the headlights after replacement if required",
      "D) Apply dielectric grease directly to the bulb glass for better heat dissipation"
    ],
    answer: 3,
    explanation: "Dielectric grease should not be applied to the bulb glass. It is applied to the electrical connector to prevent corrosion. Touching a halogen bulb with bare fingers leaves oils that create hot spots and shorten bulb life. The correct bulb type must be used, and headlight aim should be checked.",
    diagram: ""
  },
  {
    id: 86,
    q: "Several exterior lights on a vehicle are not working, but the fuses are all good. What should the technician check NEXT?",
    options: [
      "A) Replace all the light bulbs",
      "B) Check the common ground connection for the affected lights",
      "C) Replace the light switch",
      "D) Check the alternator output"
    ],
    answer: 1,
    explanation: "When multiple lights on the same circuit fail simultaneously with good fuses, a bad common ground connection is the most likely cause. Exterior lights often share ground points that can corrode. Checking and cleaning the ground connection is the most logical next step before replacing components.",
    diagram: ""
  },
  {
    id: 87,
    q: "The horn on a vehicle does not work. The fuse is good. What should the technician check NEXT?",
    options: [
      "A) Replace the horn relay",
      "B) Check for power and ground at the horn and test the horn relay and switch circuit",
      "C) Replace the clock spring",
      "D) Replace the horn"
    ],
    answer: 1,
    explanation: "With a good fuse, the technician should systematically test the horn circuit. Check for power and ground at the horn connector, test the horn relay operation, and verify the horn switch is providing a ground signal through the clock spring. This identifies the specific failed component.",
    diagram: ""
  },
  {
    id: 88,
    q: "A vehicle's windshield wipers operate on low speed only. High speed does not work. What is the MOST likely cause?",
    options: [
      "A) A blown wiper fuse",
      "B) A faulty wiper motor high-speed brush or internal connection",
      "C) A clogged washer nozzle",
      "D) Worn wiper blades"
    ],
    answer: 1,
    explanation: "When wipers work on low speed but not high speed, the most likely cause is a failure in the high-speed circuit of the wiper motor, such as a worn brush or open internal winding. The multi-speed switch or its wiring could also be at fault. The low-speed circuit is separate and still functional.",
    diagram: ""
  },
  {
    id: 89,
    q: "A vehicle's fuel gauge reads empty constantly even though the tank is full. What is the MOST likely cause?",
    options: [
      "A) A faulty instrument cluster voltage regulator",
      "B) A faulty fuel tank sending unit or open circuit in its wiring",
      "C) A blown fuse for the instrument panel",
      "D) A bad fuel pump"
    ],
    answer: 1,
    explanation: "A fuel gauge that constantly reads empty with a full tank most likely has a faulty fuel tank sending unit or an open circuit in the wiring between the sending unit and the gauge. The sending unit contains a float-operated variable resistor that changes resistance with fuel level. An open circuit reads as empty.",
    diagram: ""
  },
  {
    id: 90,
    q: "When a fuse blows repeatedly after replacement, what does this indicate?",
    options: [
      "A) The replacement fuse is defective",
      "B) There is a short circuit or excessive current draw in the protected circuit",
      "C) The battery voltage is too high",
      "D) The fuse box needs to be replaced"
    ],
    answer: 1,
    explanation: "A fuse that blows repeatedly indicates a short circuit or excessive current draw in the circuit it protects. The technician should diagnose the circuit to find the cause, such as a pinched wire, water intrusion, or a failed component. Installing a higher-rated fuse is never the correct solution.",
    diagram: ""
  },
  {
    id: 91,
    q: "Technician A says corroded battery cable terminals can cause a no-start condition. Technician B says battery cable ends should be cleaned and coated with a protective spray or grease during service. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Corrosion on battery cable terminals creates high resistance that can prevent sufficient current flow to the starter motor, causing a no-start condition. After cleaning, terminals should be coated with battery terminal protector spray or dielectric grease to prevent future corrosion.",
    diagram: ""
  },
  {
    id: 92,
    q: "A fully charged 12-volt automotive battery should read approximately what voltage with no load?",
    options: [
      "A) 11.0 volts",
      "B) 12.6 volts",
      "C) 13.5 volts",
      "D) 14.2 volts"
    ],
    answer: 1,
    explanation: "A fully charged 12-volt automotive battery should read approximately 12.6 volts with no load and the engine off. A reading of 12.4 volts indicates about 75% charge. Below 12.0 volts, the battery is significantly discharged. Readings of 13.5 volts and above indicate the charging system is operating.",
    diagram: ""
  },
  {
    id: 93,
    q: "What is the purpose of a starter relay or solenoid?",
    options: [
      "A) To regulate alternator output voltage",
      "B) To switch high starter motor current using a low-current signal from the ignition switch",
      "C) To provide a ground path for the ignition system",
      "D) To boost battery voltage for starting"
    ],
    answer: 1,
    explanation: "The starter relay or solenoid acts as a high-current switch that connects the battery directly to the starter motor. It is activated by a low-current signal from the ignition switch. This design protects the ignition switch from the high current draw of the starter motor, which can exceed 200 amps.",
    diagram: ""
  },

  // ===== HVAC (Questions 94–100) =====
  {
    id: 94,
    q: "A customer complains the A/C is not blowing cold air. What should the technician verify FIRST?",
    options: [
      "A) Recover and recharge the refrigerant",
      "B) Verify the compressor is engaging and check system pressures and operation",
      "C) Replace the expansion valve",
      "D) Replace the compressor clutch"
    ],
    answer: 1,
    explanation: "Before performing any repairs, the technician should verify the A/C compressor clutch is engaging, check the system pressures with a manifold gauge set, and assess overall system operation. This basic diagnosis determines whether the issue is low charge, compressor failure, or a restriction.",
    diagram: ""
  },
  {
    id: 95,
    q: "Technician A says using the wrong refrigerant type can damage the A/C system. Technician B says the refrigerant type is listed on a label under the hood. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Mixing refrigerant types or using the wrong type can damage compressors, seals, and other A/C components. The vehicle has an underhood label that specifies the correct refrigerant type and system capacity. Most modern vehicles use R-134a or R-1234yf refrigerant.",
    diagram: ""
  },
  {
    id: 96,
    q: "During an A/C system inspection, what should the technician visually check?",
    options: [
      "A) Only the refrigerant charge level using sight glass",
      "B) Compressor, hoses, fittings for leaks and damage; condenser for debris; drive belt condition",
      "C) Only the compressor clutch air gap",
      "D) Only the cabin air filter"
    ],
    answer: 1,
    explanation: "A visual A/C inspection includes checking the compressor for leaks and damage, inspecting all hoses and fittings for signs of oil leaks that indicate refrigerant loss, examining the condenser for debris and damage, checking the drive belt condition, and verifying electrical connections are secure.",
    diagram: ""
  },
  {
    id: 97,
    q: "The A/C condenser is partially blocked by leaves and debris. What effect does this have on system operation?",
    options: [
      "A) No effect on A/C performance",
      "B) Reduced cooling performance and higher than normal high-side pressures",
      "C) Lower than normal high-side pressures",
      "D) The compressor will not engage"
    ],
    answer: 1,
    explanation: "A condenser blocked by debris cannot dissipate heat effectively, causing higher than normal high-side pressures and reduced cooling performance. The system must work harder to reject heat, which can lead to compressor damage. The condenser should be carefully cleaned to restore proper airflow.",
    diagram: ""
  },
  {
    id: 98,
    q: "When should the cabin air filter be replaced?",
    options: [
      "A) Only when the A/C stops working",
      "B) At the interval recommended by the manufacturer or when visibly dirty or restricted",
      "C) Every oil change",
      "D) Only when a musty odor is present"
    ],
    answer: 1,
    explanation: "The cabin air filter should be replaced at the manufacturer's recommended interval, typically every 15,000 to 30,000 miles, or sooner if it is visibly dirty or restricted. A clogged cabin air filter reduces airflow through the HVAC system and can cause poor heating and cooling performance.",
    diagram: ""
  },
  {
    id: 99,
    q: "The A/C compressor drive belt is cracked and glazed. What should the technician do?",
    options: [
      "A) Apply belt dressing to extend belt life",
      "B) Replace the drive belt and inspect the tensioner and pulleys",
      "C) Tighten the belt to increase tension",
      "D) Continue to use it until the next scheduled service"
    ],
    answer: 1,
    explanation: "A cracked and glazed drive belt should be replaced immediately. Belt dressing is a temporary fix that can actually accelerate deterioration. When replacing the belt, the tensioner and all pulleys should be inspected for wear, bearing roughness, and proper operation to prevent premature new belt failure.",
    diagram: ""
  },
  {
    id: 100,
    q: "Water is dripping from under the dashboard on the passenger side when the A/C is running. What is the MOST likely cause?",
    options: [
      "A) A leaking heater core",
      "B) A clogged evaporator drain tube",
      "C) A refrigerant leak at the evaporator",
      "D) An overfilled cooling system"
    ],
    answer: 1,
    explanation: "A clogged evaporator drain tube is the most likely cause. The evaporator removes humidity from cabin air, and the condensation normally drains outside the vehicle through a drain tube. When this tube is clogged with debris, water backs up and drips inside the vehicle onto the passenger floor.",
    diagram: ""
  }
];
