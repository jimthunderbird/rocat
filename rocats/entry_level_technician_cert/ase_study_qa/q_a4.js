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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
  }
];
