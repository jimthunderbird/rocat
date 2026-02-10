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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
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
    diagram: ""
  }
];
