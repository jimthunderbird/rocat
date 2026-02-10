const questionsA7 = [
  // ============================================================
  // HVAC & ENGINE COOLING SERVICE (Questions 1–42)
  // ============================================================
  {
    id: 1,
    q: "A vehicle's A/C blows warm air intermittently. High-side pressure is normal, but low-side pressure fluctuates between 10 and 40 psi. What is the MOST likely cause?",
    options: [
      "A) Overcharged refrigerant system",
      "B) Moisture in the system causing the TXV to freeze intermittently",
      "C) A restricted condenser",
      "D) A slipping compressor drive belt"
    ],
    answer: 1,
    explanation: "Moisture in the refrigerant system can freeze at the TXV orifice, temporarily blocking refrigerant flow. As the ice melts, flow resumes, causing the characteristic fluctuation in low-side pressure and intermittent warm air from the vents. Evacuation and a new receiver/drier are required to remove moisture.",
    diagram: ""
  },
  {
    id: 2,
    q: "When performing a performance test on an A/C system, which set of readings indicates a properly functioning R-134a system at an ambient temperature of 90°F?",
    options: [
      "A) High side 225 psi, low side 35 psi, center vent 42°F",
      "B) High side 350 psi, low side 60 psi, center vent 65°F",
      "C) High side 100 psi, low side 10 psi, center vent 55°F",
      "D) High side 225 psi, low side 5 psi, center vent 60°F"
    ],
    answer: 0,
    explanation: "At 90°F ambient, a properly charged R-134a system typically shows high-side pressures around 200–250 psi, low-side pressures around 25–40 psi, and center vent temperatures around 38–48°F. Option A falls within these normal operating parameters for a healthy system.",
    diagram: ""
  },
  {
    id: 3,
    q: "Technician A says R-1234yf is mildly flammable and requires a dedicated recovery machine. Technician B says R-1234yf can be recovered using the same machine as R-134a. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "R-1234yf is classified as mildly flammable (A2L rating) and must be serviced with a dedicated recovery/recycling/recharging machine that meets SAE J2843 standards. Using an R-134a machine for R-1234yf is not permitted due to contamination risk and safety concerns related to flammability.",
    diagram: ""
  },
  {
    id: 4,
    q: "During a leak test, an electronic refrigerant leak detector alarms near the evaporator case drain tube. What should the technician do NEXT?",
    options: [
      "A) Immediately replace the evaporator",
      "B) Add UV dye and recheck after running the system",
      "C) Verify the leak by using a secondary method such as UV dye or soap bubbles",
      "D) Recharge the system and retest in one week"
    ],
    answer: 2,
    explanation: "Electronic leak detectors can give false readings from residual refrigerant or contaminants. Best practice requires confirming any detected leak using a second method such as UV dye with a UV light or soap solution before committing to an expensive evaporator replacement.",
    diagram: ""
  },
  {
    id: 5,
    q: "What is the MINIMUM vacuum level that should be achieved during evacuation of an A/C system before charging?",
    options: [
      "A) 20 inches of mercury (in. Hg)",
      "B) 25 inches of mercury (in. Hg)",
      "C) 29.92 inches of mercury (in. Hg)",
      "D) 500 microns or less"
    ],
    answer: 3,
    explanation: "The industry standard for proper evacuation is achieving a vacuum of 500 microns or less, as measured by a micron gauge. This level ensures that moisture is boiled off at low temperature and removed from the system. Inches of mercury alone is not precise enough.",
    diagram: ""
  },
  {
    id: 6,
    q: "A technician is recovering refrigerant from a vehicle. Which of the following is required by EPA regulations?",
    options: [
      "A) Refrigerant must be vented to atmosphere if contaminated",
      "B) Refrigerant must be recovered to a DOT-approved container using certified equipment",
      "C) Only systems with more than 2 lbs of refrigerant need recovery",
      "D) Recovery is optional if the system has a leak"
    ],
    answer: 1,
    explanation: "EPA Section 608/609 regulations prohibit venting refrigerant to the atmosphere. All refrigerant must be recovered using certified equipment into DOT-approved containers regardless of quantity or system condition. Technicians must also hold a valid Section 609 certification.",
    diagram: ""
  },
  {
    id: 7,
    q: "Technician A says PAG oil is compatible with both R-134a and R-1234yf systems. Technician B says the specific PAG oil viscosity must match the compressor manufacturer's recommendation. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 1,
    explanation: "While PAG oil is used in both R-134a and R-1234yf systems, different formulations are required for each refrigerant type. R-1234yf uses a double-end-capped PAG oil. However, Technician B is correct that the specific viscosity (e.g., PAG 46, 100, 150) must always match the OEM specification.",
    diagram: ""
  },
  {
    id: 8,
    q: "A cabin air filter is found to be heavily contaminated with debris and mold. All of the following are potential symptoms of a clogged cabin filter EXCEPT:",
    options: [
      "A) Reduced airflow from the vents",
      "B) Musty odor from the HVAC system",
      "C) Elevated high-side refrigerant pressure",
      "D) Fogging of the windshield"
    ],
    answer: 2,
    explanation: "A clogged cabin air filter restricts airflow through the evaporator, causing reduced vent output, musty odors, and poor windshield defogging. However, it does not significantly affect high-side refrigerant pressure since it restricts air across the evaporator, not the condenser.",
    diagram: ""
  },
  {
    id: 9,
    q: "A thermostat is stuck open. What symptoms will the vehicle exhibit?",
    options: [
      "A) Engine overheating and high coolant temperature",
      "B) Longer engine warm-up time and lower-than-normal operating temperature",
      "C) Coolant leaking from the thermostat housing",
      "D) Fluctuating oil pressure readings"
    ],
    answer: 1,
    explanation: "A thermostat stuck in the open position allows coolant to flow through the radiator continuously, preventing the engine from reaching normal operating temperature. This results in extended warm-up times, poor heater output, reduced fuel economy, and a possible check engine light for coolant temperature.",
    diagram: ""
  },
  {
    id: 10,
    q: "A water pump is being inspected. Which of the following indicates the water pump needs replacement?",
    options: [
      "A) The weep hole shows a small amount of dry residue",
      "B) Coolant is actively dripping from the weep hole",
      "C) The serpentine belt is slightly glazed",
      "D) Coolant temperature reaches 195°F during normal operation"
    ],
    answer: 1,
    explanation: "Active coolant leakage from the water pump weep hole indicates a failed internal seal and requires pump replacement. A small amount of dry residue at the weep hole is normal seepage. The other options describe unrelated conditions that do not directly indicate water pump failure.",
    diagram: ""
  },
  {
    id: 11,
    q: "When pressure testing a cooling system, the gauge shows a steady drop in pressure over two minutes with no visible external leaks. What is the MOST likely cause?",
    options: [
      "A) A faulty pressure cap",
      "B) An internal head gasket leak",
      "C) A loose hose clamp",
      "D) Air trapped in the cooling system"
    ],
    answer: 1,
    explanation: "A steady pressure drop with no visible external leaks strongly suggests an internal leak, most commonly through a failed head gasket allowing coolant to enter the combustion chamber or oil passages. A combustion leak test using block test fluid can confirm this diagnosis.",
    diagram: ""
  },
  {
    id: 12,
    q: "A radiator cap is rated at 16 psi. What is the purpose of the pressure rating?",
    options: [
      "A) To limit the maximum pressure the water pump can produce",
      "B) To raise the boiling point of the coolant",
      "C) To regulate refrigerant pressure in the A/C system",
      "D) To maintain negative pressure in the cooling system"
    ],
    answer: 1,
    explanation: "The radiator pressure cap raises the boiling point of the coolant by approximately 3°F for every 1 psi of pressure. A 16 psi cap raises the boiling point roughly 48°F above the normal atmospheric boiling point, preventing coolant from boiling during normal high-temperature engine operation.",
    diagram: ""
  },
  {
    id: 13,
    q: "A customer complains of poor heater output. The coolant level is full and the engine reaches normal operating temperature. What should the technician check FIRST?",
    options: [
      "A) The A/C compressor clutch engagement",
      "B) The heater core hoses for a temperature difference",
      "C) The radiator fan motor operation",
      "D) The condenser for airflow restrictions"
    ],
    answer: 1,
    explanation: "Feeling both heater core hoses for a temperature difference is a quick diagnostic step. If the inlet hose is hot and the outlet is cool or cold, the heater core may be restricted. If both hoses are equally hot, the issue is likely a blend door or airflow problem.",
    diagram: ""
  },
  {
    id: 14,
    q: "Technician A says a heater core can be flushed to restore flow if it is partially restricted. Technician B says a partially restricted heater core must always be replaced. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "A partially restricted heater core can often be flushed with water or a chemical flush to restore adequate coolant flow and heater output. Replacement is only necessary if flushing fails to restore proper flow or if the core is leaking. Flushing is a valid first repair attempt.",
    diagram: ""
  },
  {
    id: 15,
    q: "An electric cooling fan does not turn on and the engine overheats. All of the following could be the cause EXCEPT:",
    options: [
      "A) A faulty coolant temperature sensor",
      "B) A blown cooling fan relay",
      "C) A stuck-open thermostat",
      "D) A failed cooling fan motor"
    ],
    answer: 2,
    explanation: "A stuck-open thermostat causes the engine to run cooler than normal, not overheat. It would actually reduce the need for the cooling fan. A faulty temperature sensor, blown relay, or failed fan motor can all prevent the cooling fan from turning on, leading to engine overheating.",
    diagram: ""
  },
  {
    id: 16,
    q: "Which refrigerant identifier reading indicates a contaminated refrigerant sample?",
    options: [
      "A) 98% R-134a, 2% air",
      "B) 100% R-134a, 0% air",
      "C) 85% R-134a, 10% R-22, 5% air",
      "D) 99% R-134a, 1% air"
    ],
    answer: 2,
    explanation: "A refrigerant identifier showing multiple refrigerant types such as R-22 mixed with R-134a indicates contamination. Industry standards typically allow up to 2% air content as acceptable. The presence of R-22 or other non-approved refrigerants means the charge cannot be recovered into a standard tank.",
    diagram: ""
  },
  {
    id: 17,
    q: "During A/C system charging, refrigerant is added as a vapor to which side of the system?",
    options: [
      "A) The high side only",
      "B) The low side only",
      "C) Both high and low sides simultaneously",
      "D) Through the receiver/drier"
    ],
    answer: 1,
    explanation: "When charging a running system, refrigerant must be added as a vapor through the low-side service port. Adding liquid refrigerant to the low side of a running system can cause liquid slugging and damage the compressor. Liquid charging is only done with the system off on the high side.",
    diagram: ""
  },
  {
    id: 18,
    q: "A vehicle has both high-side and low-side pressures that are higher than normal. What is the MOST likely cause?",
    options: [
      "A) An undercharged system",
      "B) An overcharged system or restricted airflow across the condenser",
      "C) A leaking evaporator",
      "D) A stuck-open TXV"
    ],
    answer: 1,
    explanation: "Both pressures reading higher than normal typically indicates either an overcharged refrigerant system or insufficient airflow across the condenser. Restricted condenser airflow or excess refrigerant prevents adequate heat rejection, raising pressures on both sides of the system throughout operation.",
    diagram: ""
  },
  {
    id: 19,
    q: "What type of oil is used in MOST R-134a mobile A/C systems?",
    options: [
      "A) Mineral oil",
      "B) Ester oil (POE)",
      "C) PAG (polyalkylene glycol) oil",
      "D) Synthetic motor oil"
    ],
    answer: 2,
    explanation: "PAG (polyalkylene glycol) oil is the most commonly specified lubricant for R-134a mobile A/C systems. It is hygroscopic and must be handled carefully to prevent moisture absorption. The correct viscosity (PAG 46, 100, or 150) must match the compressor manufacturer's specification.",
    diagram: ""
  },
  {
    id: 20,
    q: "A technician is evacuating an A/C system. After reaching 500 microns, the vacuum pump is isolated and the system rises to 1500 microns within five minutes. What does this indicate?",
    options: [
      "A) The system has been properly evacuated",
      "B) Moisture remains in the system",
      "C) The vacuum pump is faulty",
      "D) The gauge set is defective"
    ],
    answer: 1,
    explanation: "When vacuum rises significantly after isolating the pump, it typically indicates residual moisture is boiling off and creating vapor pressure inside the system. The technician should continue evacuation until the system holds below 500 microns for at least five minutes after isolation.",
    diagram: ""
  },
  {
    id: 21,
    q: "Which of the following tools is used to verify refrigerant purity before recovery?",
    options: [
      "A) A manifold gauge set",
      "B) A refrigerant identifier",
      "C) An electronic leak detector",
      "D) A micron gauge"
    ],
    answer: 1,
    explanation: "A refrigerant identifier analyzes a sample from the system and displays the percentage of each refrigerant type and air content. This confirms purity before recovery to prevent cross-contamination of the recovery machine and storage tank with unknown or mixed refrigerants.",
    diagram: ""
  },
  {
    id: 22,
    q: "Technician A says a coolant hydrometer measures the freezing point of the coolant mixture. Technician B says a refractometer is more accurate than a hydrometer for coolant testing. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "A hydrometer measures specific gravity of the coolant to determine the freezing point of the antifreeze mixture. A refractometer uses light refraction and is generally considered more accurate because it is not affected by coolant temperature. Both statements are correct.",
    diagram: ""
  },
  {
    id: 23,
    q: "When replacing a radiator, which of the following should also be inspected and replaced if necessary?",
    options: [
      "A) The serpentine belt tensioner",
      "B) The radiator hoses and clamps",
      "C) The engine oil filter",
      "D) The brake fluid reservoir"
    ],
    answer: 1,
    explanation: "When replacing a radiator, the upper and lower radiator hoses, clamps, and the radiator cap should be inspected and replaced if they show signs of deterioration such as swelling, cracking, or softness. Old hoses are a common source of leaks after radiator replacement.",
    diagram: ""
  },
  {
    id: 24,
    q: "A customer reports a sweet smell inside the vehicle and the windshield fogs up when the defroster is turned on. What is the MOST likely cause?",
    options: [
      "A) A leaking evaporator core",
      "B) A leaking heater core",
      "C) A clogged cabin air filter",
      "D) A stuck-open blend door"
    ],
    answer: 1,
    explanation: "A sweet smell (from ethylene glycol coolant) combined with windshield fogging when using the defroster is a classic symptom of a leaking heater core. Coolant vapor enters the passenger compartment through the HVAC ducts and deposits on the windshield glass.",
    diagram: ""
  },
  {
    id: 25,
    q: "During a cooling system pressure test, the radiator cap fails to hold its rated pressure. What should the technician do?",
    options: [
      "A) Replace the radiator",
      "B) Replace the radiator cap",
      "C) Replace the water pump",
      "D) Flush the cooling system"
    ],
    answer: 1,
    explanation: "If the radiator cap cannot hold its rated pressure during a cap pressure test, it should be replaced. A cap that does not hold pressure allows the coolant boiling point to drop, potentially causing overheating and coolant loss through the overflow or degas bottle.",
    diagram: ""
  },
  {
    id: 26,
    q: "Which of the following describes the correct procedure for adding coolant to a system with an air bleed valve?",
    options: [
      "A) Fill the system, start the engine, and open the bleed valve until a steady stream of coolant flows with no air bubbles",
      "B) Open the bleed valve and pour coolant directly into it",
      "C) Fill the system with the bleed valve closed and never open it",
      "D) Add coolant only through the overflow reservoir"
    ],
    answer: 0,
    explanation: "The correct procedure is to fill the system through the radiator or degas bottle, then start the engine and open the bleed valve until a steady stream of coolant with no air bubbles emerges. This removes trapped air pockets that can cause overheating and poor heater output.",
    diagram: ""
  },
  {
    id: 27,
    q: "Both high-side and low-side A/C pressures are lower than specifications. The compressor clutch is engaging. What is the MOST likely cause?",
    options: [
      "A) An overcharged system",
      "B) A low refrigerant charge due to a leak",
      "C) A restricted condenser",
      "D) A faulty compressor clutch"
    ],
    answer: 1,
    explanation: "When both high-side and low-side pressures are below normal with the compressor engaged, the system is most likely low on refrigerant due to a leak. Less refrigerant means less mass flow, resulting in reduced pressures throughout the entire system. A leak test should be performed.",
    diagram: ""
  },
  {
    id: 28,
    q: "A technician notices oil residue around an A/C hose fitting. What does this MOST likely indicate?",
    options: [
      "A) Normal condensation",
      "B) A refrigerant leak at the fitting",
      "C) Excess lubricant added during last service",
      "D) A clogged cabin air filter"
    ],
    answer: 1,
    explanation: "Refrigerant oil travels with the refrigerant throughout the system. When a leak occurs, refrigerant gas escapes and leaves behind oil residue at the leak point. Oil stains or accumulation at fittings, hose connections, or component joints are strong indicators of refrigerant leaks.",
    diagram: ""
  },
  {
    id: 29,
    q: "What is the PRIMARY purpose of the receiver/drier in an A/C system using a TXV?",
    options: [
      "A) To meter refrigerant flow to the evaporator",
      "B) To store excess refrigerant and remove moisture from the liquid line",
      "C) To compress refrigerant vapor",
      "D) To separate oil from the refrigerant"
    ],
    answer: 1,
    explanation: "The receiver/drier is located in the high-pressure liquid line of TXV systems. Its primary functions are to store excess liquid refrigerant, remove moisture with a desiccant, filter contaminants, and ensure only liquid refrigerant reaches the TXV for proper metering and system operation.",
    diagram: ""
  },
  {
    id: 30,
    q: "A vehicle's engine temperature gauge reads higher than normal, and the upper radiator hose is collapsed. What is the MOST likely cause?",
    options: [
      "A) A faulty water pump impeller",
      "B) A stuck-closed thermostat",
      "C) A faulty radiator cap vacuum valve",
      "D) An overcharged A/C system"
    ],
    answer: 2,
    explanation: "A collapsed upper radiator hose during cool-down indicates the radiator cap vacuum valve is not releasing to equalize pressure. This prevents coolant from returning from the overflow tank, creating a vacuum that collapses the hose. The cap should be replaced.",
    diagram: ""
  },
  {
    id: 31,
    q: "Technician A says the A/C system should be leak tested before evacuation. Technician B says evacuation alone will reveal all leaks. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "The system should be leak tested under positive pressure before evacuation. A vacuum test during evacuation can indicate a gross leak but cannot reliably locate small leaks. Pressurized leak testing with nitrogen or refrigerant and an electronic detector is the correct procedure.",
    diagram: ""
  },
  {
    id: 32,
    q: "Which coolant color is typically associated with OAT (Organic Acid Technology) extended-life coolant?",
    options: [
      "A) Green",
      "B) Orange or red",
      "C) Blue",
      "D) Clear"
    ],
    answer: 1,
    explanation: "OAT (Organic Acid Technology) extended-life coolants are typically dyed orange or red (such as Dex-Cool). Traditional IAT (Inorganic Acid Technology) coolants are usually green. Color alone should not be the sole identifier; always refer to the manufacturer's specification.",
    diagram: ""
  },
  {
    id: 33,
    q: "A customer complains that the A/C works well at highway speed but blows warm at idle. What is the MOST likely cause?",
    options: [
      "A) Low refrigerant charge",
      "B) The condenser fan is not operating",
      "C) The evaporator is restricted",
      "D) The cabin air filter is clogged"
    ],
    answer: 1,
    explanation: "At highway speed, ram air through the condenser provides adequate cooling. At idle, the condenser fan must operate to provide airflow. If the condenser fan is inoperative, high-side pressure rises excessively at idle, reducing system efficiency and causing warm air output.",
    diagram: ""
  },
  {
    id: 34,
    q: "What precaution must be taken when charging an A/C system with a scale?",
    options: [
      "A) Always charge by high-side pressure only",
      "B) Charge the exact amount specified by the manufacturer",
      "C) Add refrigerant until frost forms on the accumulator",
      "D) Charge until both high and low pressures equalize"
    ],
    answer: 1,
    explanation: "Modern A/C systems hold precise amounts of refrigerant. Overcharging or undercharging as little as a few ounces can significantly affect performance and compressor life. Always charge the exact amount specified on the underhood label or in the service manual using a calibrated scale.",
    diagram: ""
  },
  {
    id: 35,
    q: "During an A/C performance test, the low-side pressure is near vacuum and the high-side pressure is lower than normal. What is the MOST likely cause?",
    options: [
      "A) Overcharged system",
      "B) Restricted orifice tube or TXV",
      "C) Faulty condenser fan",
      "D) Leaking compressor reed valves"
    ],
    answer: 1,
    explanation: "A restriction at the metering device (orifice tube or TXV) severely limits refrigerant flow to the evaporator. This causes the low side to pull into a vacuum while starving the suction side. The high side may read lower than normal due to reduced mass flow through the system.",
    diagram: ""
  },
  {
    id: 36,
    q: "Technician A says the cooling system should be flushed when changing from one coolant type to another. Technician B says different coolant types can be mixed without issue. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Mixing different coolant types (IAT, OAT, HOAT) can cause chemical incompatibilities that lead to gelling, reduced corrosion protection, and cooling system component damage. The system should be thoroughly flushed when switching coolant types to remove all traces of the previous coolant.",
    diagram: ""
  },
  {
    id: 37,
    q: "What is the function of the coolant degas bottle (expansion tank)?",
    options: [
      "A) To pressurize the cooling system beyond the cap rating",
      "B) To provide a reservoir for coolant expansion, contraction, and air separation",
      "C) To filter contaminants from the coolant",
      "D) To cool the coolant before it returns to the engine"
    ],
    answer: 1,
    explanation: "The degas bottle (expansion tank) serves as a reservoir for coolant that expands when hot and contracts when cooled. It also helps separate air from the coolant through its design. The pressurized cap is typically located on the degas bottle in modern vehicles.",
    diagram: ""
  },
  {
    id: 38,
    q: "A vehicle with a serpentine belt-driven water pump has a coolant leak near the front of the engine. The belt is soaked with coolant. What component is MOST likely leaking?",
    options: [
      "A) The heater core",
      "B) The water pump seal",
      "C) The radiator",
      "D) The intake manifold gasket"
    ],
    answer: 1,
    explanation: "A coolant leak near the front of the engine that is soaking the serpentine belt is most likely coming from the water pump shaft seal or weep hole. The water pump is driven by the belt and is located at the front of the engine where the belt runs.",
    diagram: ""
  },
  {
    id: 39,
    q: "Which of the following is the correct refrigerant charge label location on most vehicles?",
    options: [
      "A) Inside the glove box",
      "B) On the underhood service information label or sticker",
      "C) On the rear bumper",
      "D) Inside the trunk"
    ],
    answer: 1,
    explanation: "The refrigerant type, charge amount, and lubricant type are specified on the underhood service information label. This label is typically found on the radiator support, strut tower, or underside of the hood. Always refer to this label before servicing the A/C system.",
    diagram: ""
  },
  {
    id: 40,
    q: "A cooling system shows evidence of combustion gases in the coolant. Which test confirms a head gasket leak?",
    options: [
      "A) A pressure cap test",
      "B) A block test (chemical combustion leak test)",
      "C) A coolant hydrometer test",
      "D) An infrared thermometer scan of the radiator"
    ],
    answer: 1,
    explanation: "A block test (combustion leak test) uses a chemical fluid that changes color when exposed to combustion gases (hydrocarbons) in the coolant. The test fluid is drawn through a tester placed over the radiator filler neck while the engine runs, confirming a head gasket leak.",
    diagram: ""
  },
  {
    id: 41,
    q: "All of the following are symptoms of a restricted A/C system EXCEPT:",
    options: [
      "A) Frost forming on the liquid line after the restriction",
      "B) Low-side pressure near vacuum",
      "C) Higher than normal high-side pressure",
      "D) Poor cooling performance"
    ],
    answer: 2,
    explanation: "A restriction reduces refrigerant mass flow throughout the system. The low side pulls into a vacuum due to starvation, frost may form at the restriction point, and cooling performance suffers. However, high-side pressure typically drops because reduced mass flow means less refrigerant is being compressed.",
    diagram: ""
  },
  {
    id: 42,
    q: "Before opening any A/C system fitting for repair, what must the technician do FIRST?",
    options: [
      "A) Add UV dye to the system",
      "B) Recover all refrigerant from the system",
      "C) Disconnect the battery",
      "D) Remove the drive belt"
    ],
    answer: 1,
    explanation: "Before opening any A/C system fitting or component for repair, all refrigerant must be properly recovered using certified equipment into an approved container. Releasing refrigerant into the atmosphere is illegal under EPA regulations and subject to significant fines.",
    diagram: ""
  },

  // ============================================================
  // REFRIGERATION SYSTEM COMPONENTS (Questions 43–62)
  // ============================================================
  {
    id: 43,
    q: "Which type of A/C compressor uses a wobble plate to vary displacement based on system demand?",
    options: [
      "A) Scroll compressor",
      "B) Variable displacement compressor",
      "C) Rotary vane compressor",
      "D) Reciprocating fixed displacement compressor"
    ],
    answer: 1,
    explanation: "A variable displacement compressor uses a wobble plate (swash plate) whose angle changes based on suction pressure to vary piston stroke and displacement. This eliminates the need for compressor clutch cycling and provides continuous, demand-based cooling output for smoother operation.",
    diagram: ""
  },
  {
    id: 44,
    q: "A compressor clutch is not engaging. Battery voltage is present at the clutch connector. What is the MOST likely cause?",
    options: [
      "A) A faulty clutch relay",
      "B) An open clutch coil",
      "C) A blown fuse",
      "D) A low refrigerant pressure switch"
    ],
    answer: 1,
    explanation: "If battery voltage is present at the clutch connector but the clutch does not engage, the compressor clutch coil itself is likely open (failed). The relay, fuse, and pressure switch are all upstream in the circuit and would prevent voltage from reaching the connector if they were faulty.",
    diagram: ""
  },
  {
    id: 45,
    q: "What is the function of the A/C compressor clutch air gap?",
    options: [
      "A) To cool the compressor clutch assembly",
      "B) To allow the clutch plate to disengage from the pulley when deenergized",
      "C) To reduce belt wear",
      "D) To prevent refrigerant leaks from the compressor shaft seal"
    ],
    answer: 1,
    explanation: "The air gap between the clutch friction plate and the pulley allows the plate to separate from the spinning pulley when the electromagnetic coil is deenergized. The air gap must be within specification; too large a gap causes slipping, while too small a gap prevents disengagement.",
    diagram: ""
  },
  {
    id: 46,
    q: "Technician A says a serpentine belt should be inspected for cracks on the rib side. Technician B says a belt with more than three cracks per inch should be replaced. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Serpentine belts should be inspected for cracking, fraying, chunking, and glazing on the rib side. A belt with more than three cracks per inch of rib length or any missing chunks should be replaced to prevent unexpected belt failure.",
    diagram: ""
  },
  {
    id: 47,
    q: "Which device protects the A/C compressor from damage due to low refrigerant charge?",
    options: [
      "A) The high-pressure relief valve",
      "B) The low-pressure cutoff switch",
      "C) The orifice tube",
      "D) The thermal fuse on the compressor"
    ],
    answer: 1,
    explanation: "The low-pressure cutoff switch (cycling switch or pressure transducer) disengages the compressor clutch when suction pressure drops too low, indicating insufficient refrigerant. Running the compressor without adequate refrigerant starves it of lubricant oil, causing rapid internal damage.",
    diagram: ""
  },
  {
    id: 48,
    q: "What is the PRIMARY function of the evaporator in an A/C system?",
    options: [
      "A) To compress refrigerant vapor into high-pressure gas",
      "B) To absorb heat from the passenger compartment air",
      "C) To reject heat to the outside ambient air",
      "D) To store liquid refrigerant"
    ],
    answer: 1,
    explanation: "The evaporator absorbs heat from the air passing through the HVAC case. Low-pressure liquid refrigerant entering the evaporator absorbs heat and changes state from liquid to vapor (boils). This heat absorption cools and dehumidifies the air blown across the evaporator fins.",
    diagram: ""
  },
  {
    id: 49,
    q: "A condenser is found to have bent fins covering approximately 30% of its surface area. What effect does this have on A/C performance?",
    options: [
      "A) No effect on system operation",
      "B) Reduced heat rejection causing higher high-side pressures and poor cooling",
      "C) Increased cooling efficiency",
      "D) Lower than normal low-side pressures"
    ],
    answer: 1,
    explanation: "Bent or blocked condenser fins significantly restrict airflow through the condenser, reducing its ability to reject heat. This causes elevated high-side pressures, reduced subcooling, and degraded overall cooling performance. A fin comb can straighten bent fins to restore proper airflow.",
    diagram: ""
  },
  {
    id: 50,
    q: "When should the receiver/drier be replaced?",
    options: [
      "A) Only when the refrigerant is contaminated",
      "B) Whenever the system has been open to atmosphere for service",
      "C) Every oil change interval",
      "D) Only when a leak is detected"
    ],
    answer: 1,
    explanation: "The receiver/drier contains desiccant that absorbs moisture. Whenever the system is opened to atmosphere for repair, the desiccant becomes saturated with ambient moisture and loses its effectiveness. The receiver/drier must be replaced to ensure moisture-free operation after reassembly.",
    diagram: ""
  },
  {
    id: 51,
    q: "What component is found on the low side of an orifice tube system but not on a TXV system?",
    options: [
      "A) A receiver/drier",
      "B) An accumulator",
      "C) A condenser",
      "D) A compressor"
    ],
    answer: 1,
    explanation: "An accumulator is located between the evaporator outlet and compressor inlet in orifice tube systems. It stores excess liquid refrigerant, prevents liquid slugging of the compressor, contains desiccant to remove moisture, and meters oil return to the compressor. TXV systems use a receiver/drier instead.",
    diagram: ""
  },
  {
    id: 52,
    q: "A TXV (thermostatic expansion valve) regulates refrigerant flow based on which of the following?",
    options: [
      "A) High-side pressure only",
      "B) Evaporator outlet temperature (superheat)",
      "C) Ambient air temperature",
      "D) Engine RPM"
    ],
    answer: 1,
    explanation: "The TXV regulates refrigerant flow by sensing evaporator outlet temperature through a sensing bulb and capillary tube. It maintains proper superheat at the evaporator outlet by modulating the valve opening, ensuring the evaporator operates at peak efficiency without flooding the compressor.",
    diagram: ""
  },
  {
    id: 53,
    q: "Technician A says a fixed orifice tube is a simple metering device with no moving parts. Technician B says the orifice tube is located between the condenser outlet and evaporator inlet. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "A fixed orifice tube is a simple calibrated restriction with a fine mesh screen and no moving parts. It is located in the liquid line between the condenser outlet and evaporator inlet, where it meters high-pressure liquid refrigerant into the low-pressure evaporator.",
    diagram: ""
  },
  {
    id: 54,
    q: "What is the purpose of the high-pressure relief valve on an A/C compressor?",
    options: [
      "A) To regulate normal operating pressure",
      "B) To vent refrigerant if system pressure exceeds a dangerous level",
      "C) To meter refrigerant to the evaporator",
      "D) To prevent low-pressure compressor damage"
    ],
    answer: 1,
    explanation: "The high-pressure relief valve is a safety device that vents refrigerant if system pressure exceeds a preset dangerous level, typically around 450–550 psi. This protects the compressor, hoses, and other components from catastrophic failure due to excessive pressure from overcharging or restrictions.",
    diagram: ""
  },
  {
    id: 55,
    q: "Which type of A/C hose is most resistant to refrigerant permeation?",
    options: [
      "A) Standard rubber hose",
      "B) Barrier-type hose with a nylon inner liner",
      "C) Copper tubing only",
      "D) PVC plastic tubing"
    ],
    answer: 1,
    explanation: "Barrier-type hoses feature a nylon or similar inner liner that greatly reduces refrigerant permeation through the hose walls. These are standard on modern vehicles to comply with emissions regulations and maintain system charge levels over the life of the vehicle.",
    diagram: ""
  },
  {
    id: 56,
    q: "An orifice tube removed during service shows a brown or black discoloration on the inlet screen. What does this indicate?",
    options: [
      "A) Normal system operation",
      "B) Compressor internal damage producing debris and contamination",
      "C) Excess refrigerant oil in the system",
      "D) The wrong refrigerant type was used"
    ],
    answer: 1,
    explanation: "Brown or black debris on the orifice tube inlet screen indicates internal compressor wear or failure. Metal particles, gasket material, and degraded oil collect on the screen. This contamination requires flushing the system and inspecting or replacing the compressor and other components.",
    diagram: ""
  },
  {
    id: 57,
    q: "All of the following describe the condenser's role in the refrigeration cycle EXCEPT:",
    options: [
      "A) Rejecting heat absorbed from the passenger compartment",
      "B) Changing refrigerant from high-pressure vapor to high-pressure liquid",
      "C) Lowering the temperature of the refrigerant below its condensation point",
      "D) Absorbing heat from outside ambient air"
    ],
    answer: 3,
    explanation: "The condenser rejects heat from the hot, high-pressure refrigerant to the cooler outside ambient air, not the other way around. It changes refrigerant from vapor to liquid through heat rejection and subcools the liquid below its condensation point for proper metering device operation.",
    diagram: ""
  },
  {
    id: 58,
    q: "A scroll compressor differs from a piston compressor in that it:",
    options: [
      "A) Uses pistons and cylinders for compression",
      "B) Uses two interlocking spiral-shaped scrolls to compress refrigerant",
      "C) Cannot be used with R-134a",
      "D) Requires a clutch cycling switch to operate"
    ],
    answer: 1,
    explanation: "A scroll compressor uses two interlocking spiral-shaped scrolls—one fixed and one orbiting—to trap and progressively compress refrigerant vapor. Scroll compressors are known for smooth, quiet operation, fewer moving parts, and higher efficiency compared to reciprocating piston designs.",
    diagram: ""
  },
  {
    id: 59,
    q: "What fitting type is commonly used on R-134a service ports to prevent cross-contamination with R-12?",
    options: [
      "A) Flare fittings",
      "B) Quick-connect fittings with a different diameter than R-12 ports",
      "C) Standard Schrader valve fittings identical to R-12",
      "D) Compression fittings"
    ],
    answer: 1,
    explanation: "R-134a systems use quick-connect service port fittings that are physically larger than R-12 fittings. The high-side and low-side ports are different sizes from each other and from R-12 ports, preventing accidental cross-connection and refrigerant contamination between systems.",
    diagram: ""
  },
  {
    id: 60,
    q: "Technician A says the evaporator also removes humidity from the air. Technician B says condensation on the evaporator should drain out of the HVAC case through a drain tube. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "When warm, humid air passes over the cold evaporator surface, moisture condenses on the fins, effectively dehumidifying the cabin air. This condensation collects in the evaporator case and drains out through a drain tube. A clogged drain can cause water to leak into the passenger compartment.",
    diagram: ""
  },
  {
    id: 61,
    q: "Which component in a TXV system provides subcooling and liquid refrigerant storage?",
    options: [
      "A) The accumulator",
      "B) The evaporator",
      "C) The receiver/drier",
      "D) The compressor"
    ],
    answer: 2,
    explanation: "In a TXV system, the receiver/drier located in the high-side liquid line provides liquid refrigerant storage, ensures only liquid reaches the TXV, contains desiccant for moisture removal, and contributes to subcooling the liquid refrigerant for proper system efficiency.",
    diagram: ""
  },
  {
    id: 62,
    q: "What happens when a compressor clutch air gap becomes excessive?",
    options: [
      "A) The compressor runs continuously without cycling",
      "B) The clutch may slip, chatter, or fail to fully engage",
      "C) The compressor output pressure increases",
      "D) The evaporator frosts over completely"
    ],
    answer: 1,
    explanation: "An excessive air gap weakens the magnetic pull of the clutch coil on the friction plate. This causes the clutch to slip, chatter, or fail to engage fully, resulting in poor compressor operation, burned clutch surfaces, and inadequate cooling. The gap should be checked and adjusted or replaced.",
    diagram: ""
  },

  // ============================================================
  // OPERATING SYSTEMS & RELATED CONTROLS (Questions 63–100)
  // ============================================================
  {
    id: 63,
    q: "A blower motor operates on high speed only. All lower speeds are inoperative. What is the MOST likely cause?",
    options: [
      "A) A faulty blower motor",
      "B) A failed blower motor resistor",
      "C) A broken blower motor ground wire",
      "D) A faulty high-speed relay"
    ],
    answer: 1,
    explanation: "The blower motor resistor provides resistance to reduce voltage for lower fan speeds. If the resistor burns out or fails, only the high-speed circuit (which bypasses the resistor) remains functional. Replacing the blower motor resistor and inspecting the connector for heat damage is required.",
    diagram: ""
  },
  {
    id: 64,
    q: "A blower motor does not operate on any speed. There is battery voltage at the blower motor connector. What should the technician check NEXT?",
    options: [
      "A) The blower motor resistor",
      "B) The blower motor fuse",
      "C) The blower motor ground circuit",
      "D) The A/C compressor clutch relay"
    ],
    answer: 2,
    explanation: "If battery voltage is present at the blower motor connector but the motor does not operate, the ground circuit should be checked next. A poor or open ground connection prevents current flow through the motor. If the ground is good, the blower motor itself is likely faulty.",
    diagram: ""
  },
  {
    id: 65,
    q: "Which component controls blower motor speed in a system using automatic temperature control (ATC)?",
    options: [
      "A) A blower motor resistor block",
      "B) A blower motor control module (power transistor or solid-state module)",
      "C) A manual fan speed switch",
      "D) The A/C compressor clutch relay"
    ],
    answer: 1,
    explanation: "Automatic temperature control systems use a blower motor control module (power transistor or solid-state speed controller) to infinitely vary blower speed based on commands from the ATC control module. This provides precise temperature control compared to the fixed speeds of a resistor block.",
    diagram: ""
  },
  {
    id: 66,
    q: "A relay is used to control the A/C compressor clutch. Which terminals on the relay receive the control signal from the PCM?",
    options: [
      "A) The load-side terminals (normally open contacts)",
      "B) The coil terminals (control side)",
      "C) The power supply terminal only",
      "D) The ground terminal only"
    ],
    answer: 1,
    explanation: "The PCM controls the relay by providing either power or ground to the relay coil terminals (control side). When the coil is energized, the internal contacts close, connecting the load-side terminals and supplying power to the compressor clutch. The coil side draws minimal current.",
    diagram: ""
  },
  {
    id: 67,
    q: "Technician A says the A/C clutch coil can be tested with an ohmmeter for proper resistance. Technician B says applying 12 volts directly to the clutch coil connector can verify clutch engagement. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "The clutch coil can be checked with an ohmmeter to verify the winding resistance is within specification (typically 3–5 ohms). Applying 12V directly to the coil connector with a jumper wire can also verify that the clutch physically engages, bypassing the control circuit for testing.",
    diagram: ""
  },
  {
    id: 68,
    q: "Vacuum-operated HVAC mode doors fail to change positions. The engine runs normally. What should the technician check FIRST?",
    options: [
      "A) The A/C compressor",
      "B) The vacuum supply hose from the engine to the HVAC control head",
      "C) The blower motor resistor",
      "D) The coolant temperature sensor"
    ],
    answer: 1,
    explanation: "If all vacuum-operated mode doors fail to change position, the most likely cause is a loss of vacuum supply. The technician should first check the vacuum supply hose from the intake manifold to the HVAC control head for disconnection, cracks, or leaks that would prevent vacuum from reaching the actuators.",
    diagram: ""
  },
  {
    id: 69,
    q: "An ATC (automatic temperature control) system uses which of the following sensors to determine cabin temperature?",
    options: [
      "A) An engine coolant temperature sensor only",
      "B) An in-car temperature sensor (aspirator sensor)",
      "C) A manifold absolute pressure sensor",
      "D) A mass airflow sensor"
    ],
    answer: 1,
    explanation: "The in-car temperature sensor, often combined with an aspirator that draws cabin air across the sensor using a small tube connected to the HVAC airflow, provides the ATC module with actual cabin temperature data. This reading is compared to the set temperature to adjust system output.",
    diagram: ""
  },
  {
    id: 70,
    q: "A blend door actuator is suspected of being faulty. What is the MOST efficient diagnostic step?",
    options: [
      "A) Replace the actuator and see if the problem is fixed",
      "B) Use a scan tool to command the blend door through its full range of motion",
      "C) Remove the entire dashboard to inspect the door",
      "D) Check the A/C compressor clutch operation"
    ],
    answer: 1,
    explanation: "Using a scan tool to command the blend door actuator through its full range of motion is the most efficient diagnostic method. The technician can verify whether the actuator responds to commands, check for DTCs, and listen for abnormal clicking or binding that indicates a mechanical failure.",
    diagram: ""
  },
  {
    id: 71,
    q: "What is the function of the mode door in an HVAC system?",
    options: [
      "A) To control the temperature of the air entering the cabin",
      "B) To direct airflow to the selected outlet (dash vents, floor, defrost)",
      "C) To control the amount of refrigerant flowing to the evaporator",
      "D) To engage and disengage the A/C compressor"
    ],
    answer: 1,
    explanation: "The mode door (also called a distribution door) directs conditioned air to the appropriate outlet ducts based on the selected mode: dash panel vents, floor outlets, defrost vents, or a combination. This is separate from the blend door, which controls air temperature.",
    diagram: ""
  },
  {
    id: 72,
    q: "A vehicle's ATC system displays a DTC for the ambient air temperature sensor. What does this sensor measure?",
    options: [
      "A) The temperature of air inside the passenger cabin",
      "B) The temperature of the outside air",
      "C) The temperature of the evaporator core",
      "D) The temperature of the engine coolant"
    ],
    answer: 1,
    explanation: "The ambient air temperature sensor measures outside air temperature. This data is used by the ATC system to calculate the required heating or cooling demand. It is typically mounted behind the front bumper or grille, away from engine heat, for accurate outside temperature readings.",
    diagram: ""
  },
  {
    id: 73,
    q: "In a dual-zone HVAC system, one side blows cold air while the other blows warm air. Both passengers have the same temperature set. What is the MOST likely cause?",
    options: [
      "A) Low refrigerant charge",
      "B) A faulty blend door actuator on one side",
      "C) A clogged cabin air filter",
      "D) A faulty condenser fan"
    ],
    answer: 1,
    explanation: "In a dual-zone system, each side has its own blend door actuator to independently control air temperature. If one side produces the wrong temperature while the other works correctly, the blend door actuator on the malfunctioning side is most likely stuck, failed, or has a calibration error.",
    diagram: ""
  },
  {
    id: 74,
    q: "Technician A says a scan tool can be used to read HVAC-related DTCs. Technician B says a scan tool can command individual HVAC actuators for testing. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Modern scan tools can retrieve HVAC diagnostic trouble codes stored in the body control module or ATC module. They can also perform bi-directional control tests to command individual actuators such as blend doors, mode doors, and the blower motor to verify proper operation.",
    diagram: ""
  },
  {
    id: 75,
    q: "A recirculation door is stuck in the recirculated air position. What symptom will the driver notice?",
    options: [
      "A) The A/C system will not cool at all",
      "B) The windshield will fog up easily, especially in humid conditions",
      "C) The engine will overheat",
      "D) The blower motor will not operate"
    ],
    answer: 1,
    explanation: "When the recirculation door is stuck closed (recirculated position), outside fresh air cannot enter the HVAC system. Continuously recirculating cabin air causes excessive moisture buildup, leading to windshield fogging, especially in humid or cold conditions when defogging requires fresh air.",
    diagram: ""
  },
  {
    id: 76,
    q: "The A/C compressor clutch engages and disengages rapidly (short cycling). Which of the following is the MOST likely cause?",
    options: [
      "A) An overcharged system",
      "B) A low refrigerant charge causing the low-pressure switch to cycle",
      "C) A clogged cabin air filter",
      "D) A faulty blower motor resistor"
    ],
    answer: 1,
    explanation: "Rapid compressor clutch cycling (short cycling) is commonly caused by a low refrigerant charge. As the compressor runs, suction pressure drops to the low-pressure switch cutoff point, disengaging the clutch. Pressure then rises slightly, re-engaging the clutch, creating a rapid on/off cycle.",
    diagram: ""
  },
  {
    id: 77,
    q: "What type of sensor is typically used as the evaporator temperature sensor?",
    options: [
      "A) A potentiometer",
      "B) A negative temperature coefficient (NTC) thermistor",
      "C) A piezoelectric sensor",
      "D) A Hall-effect sensor"
    ],
    answer: 1,
    explanation: "The evaporator temperature sensor is typically an NTC thermistor whose resistance decreases as temperature increases. It is inserted into or mounted on the evaporator fins to monitor temperature and prevent evaporator freeze-up by disengaging the compressor clutch near 32°F.",
    diagram: ""
  },
  {
    id: 78,
    q: "A sunload sensor is used in an ATC system. What does it measure?",
    options: [
      "A) The outside ambient temperature",
      "B) The intensity of solar radiation entering the vehicle cabin",
      "C) The temperature of the evaporator core",
      "D) The humidity level inside the cabin"
    ],
    answer: 1,
    explanation: "The sunload sensor is a photodiode typically mounted on the dashboard that measures the intensity of direct solar radiation entering the cabin. The ATC module uses this data to adjust cooling output to compensate for the additional heat load from direct sunlight.",
    diagram: ""
  },
  {
    id: 79,
    q: "Technician A says the PCM may disable the A/C compressor during wide-open throttle for engine performance. Technician B says the PCM may disable the A/C compressor when engine coolant temperature is critically high. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "The PCM can disengage the A/C compressor during wide-open throttle to provide maximum engine power for acceleration. It also disengages the compressor when engine coolant temperature reaches a critical level to reduce engine load and help prevent overheating. Both are standard protective strategies.",
    diagram: ""
  },
  {
    id: 80,
    q: "A vehicle's defrost mode is selected, but air only comes from the floor vents. What is the MOST likely cause?",
    options: [
      "A) A faulty evaporator temperature sensor",
      "B) A mode door actuator that is stuck or has failed",
      "C) An overcharged refrigerant system",
      "D) A slipping compressor drive belt"
    ],
    answer: 1,
    explanation: "The mode door directs air to the selected outlet. If defrost is selected but air comes from the floor, the mode door actuator is likely stuck in the floor position or has failed. The actuator motor, linkage, or the door itself may be broken, preventing it from moving to the defrost position.",
    diagram: ""
  },
  {
    id: 81,
    q: "What happens to A/C system operation when the evaporator temperature sensor detects a temperature near freezing?",
    options: [
      "A) The blower motor speed increases",
      "B) The compressor clutch is disengaged to prevent evaporator icing",
      "C) The condenser fan turns off",
      "D) The blend door moves to full heat"
    ],
    answer: 1,
    explanation: "When the evaporator temperature sensor detects a temperature approaching 32°F, the control module disengages the compressor clutch to prevent the evaporator from freezing and blocking airflow. Once the temperature rises, the clutch re-engages. This cycling maintains cooling without ice formation.",
    diagram: ""
  },
  {
    id: 82,
    q: "A blower motor resistor connector is melted and discolored. What is the MOST likely cause?",
    options: [
      "A) The blower motor is drawing excessive current due to a worn motor",
      "B) The A/C system is overcharged",
      "C) The evaporator is restricted",
      "D) The refrigerant type is incorrect"
    ],
    answer: 0,
    explanation: "A worn blower motor draws excessive amperage, causing high current flow through the resistor and its connector. This excess current generates heat that melts and discolors the connector. Both the resistor and connector should be replaced, and the blower motor current draw should be tested.",
    diagram: ""
  },
  {
    id: 83,
    q: "All of the following HVAC components can be controlled by the body control module (BCM) EXCEPT:",
    options: [
      "A) Blend door actuator position",
      "B) Blower motor speed",
      "C) Refrigerant charge amount",
      "D) Mode door actuator position"
    ],
    answer: 2,
    explanation: "The BCM or ATC module can electronically control blend door position, blower motor speed, and mode door position based on sensor inputs and driver settings. However, the refrigerant charge amount is a physical quantity set during service and cannot be controlled by any electronic module.",
    diagram: ""
  },
  {
    id: 84,
    q: "A high-pressure A/C cutoff switch opens at approximately 400 psi. What is the purpose of this switch?",
    options: [
      "A) To engage the compressor at high ambient temperatures",
      "B) To disengage the compressor to protect the system from dangerously high pressure",
      "C) To increase refrigerant flow to the evaporator",
      "D) To activate the condenser fan at low speeds"
    ],
    answer: 1,
    explanation: "The high-pressure cutoff switch disengages the compressor clutch when system pressure reaches a dangerous level (typically 375–450 psi). This protects the compressor, hoses, and other components from potential damage or rupture caused by excessive pressure from overcharge or restricted airflow.",
    diagram: ""
  },
  {
    id: 85,
    q: "Technician A says electric blend door actuators use a feedback signal to report position to the control module. Technician B says the control module can detect a blend door actuator that is stuck. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Electric blend door actuators contain a feedback potentiometer or encoder that reports the door's actual position to the control module. If the actual position does not match the commanded position within a specified time, the module sets a DTC indicating the actuator is stuck or inoperative.",
    diagram: ""
  },
  {
    id: 86,
    q: "A vehicle equipped with a pressure transducer for A/C system control provides what advantage over a simple pressure switch?",
    options: [
      "A) It is less expensive to manufacture",
      "B) It provides a variable voltage signal allowing proportional control of the compressor and fan",
      "C) It eliminates the need for an evaporator temperature sensor",
      "D) It replaces the orifice tube"
    ],
    answer: 1,
    explanation: "A pressure transducer provides a continuously variable voltage signal proportional to system pressure, unlike a simple on/off switch. This allows the PCM to proportionally control condenser fan speed, compressor clutch cycling, and even variable displacement compressor output for optimal efficiency.",
    diagram: ""
  },
  {
    id: 87,
    q: "When the defrost mode is selected in most HVAC systems, which of the following also occurs automatically?",
    options: [
      "A) The heater valve closes",
      "B) The A/C compressor engages to dehumidify the air",
      "C) The blower motor shuts off",
      "D) The recirculation door opens fully"
    ],
    answer: 1,
    explanation: "In most HVAC systems, selecting defrost mode automatically engages the A/C compressor. The A/C system dehumidifies the air before it reaches the windshield, greatly improving defogging effectiveness. The system also typically switches to fresh air mode for the same reason.",
    diagram: ""
  },
  {
    id: 88,
    q: "A vehicle's rear A/C system has no cooling, but the front system works normally. All of the following could be the cause EXCEPT:",
    options: [
      "A) A faulty rear expansion valve",
      "B) A closed or restricted rear A/C refrigerant line",
      "C) A faulty rear blower motor",
      "D) A faulty front evaporator temperature sensor"
    ],
    answer: 3,
    explanation: "A faulty front evaporator temperature sensor would affect front A/C operation, not the rear. A faulty rear expansion valve, a restricted rear refrigerant line, or a failed rear blower motor would all directly affect rear A/C performance while leaving the front system working normally.",
    diagram: ""
  },
  {
    id: 89,
    q: "Which type of motor is commonly used for HVAC blend door actuators?",
    options: [
      "A) A high-speed DC motor",
      "B) A small DC gear motor or stepper motor",
      "C) An AC induction motor",
      "D) A hydraulic motor"
    ],
    answer: 1,
    explanation: "Blend door actuators typically use a small DC gear motor or stepper motor combined with a gear reduction mechanism. These provide the precise, slow-speed rotation and high torque needed to accurately position the blend door. They include position feedback for closed-loop control by the HVAC module.",
    diagram: ""
  },
  {
    id: 90,
    q: "A DTC indicates an open circuit for the A/C clutch relay control circuit. What should the technician inspect?",
    options: [
      "A) The evaporator drain tube",
      "B) The wiring and connector between the PCM and the relay coil",
      "C) The cabin air filter",
      "D) The condenser fan blade"
    ],
    answer: 1,
    explanation: "An open-circuit DTC for the A/C clutch relay control circuit indicates a break in the wiring between the PCM/BCM and the relay coil. The technician should inspect the wiring harness, connectors, and relay coil for damage, corrosion, loose pins, or a broken wire that prevents the control signal.",
    diagram: ""
  },
  {
    id: 91,
    q: "An HVAC system with vacuum-operated doors works correctly when the engine is running but defaults to defrost mode when the engine is turned off and restarted. What is the MOST likely cause?",
    options: [
      "A) A faulty blower motor",
      "B) A leaking vacuum reservoir or check valve",
      "C) A clogged evaporator drain",
      "D) An overcharged A/C system"
    ],
    answer: 1,
    explanation: "Vacuum-operated HVAC systems use a vacuum reservoir and check valve to maintain vacuum when the engine is off or during low vacuum conditions. A leaking reservoir or check valve allows vacuum to bleed off, causing doors to default to the defrost position (spring-loaded default) on restart.",
    diagram: ""
  },
  {
    id: 92,
    q: "Technician A says the A/C compressor may be controlled by a dedicated relay. Technician B says the PCM can ground the relay coil to engage the compressor. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Most modern A/C systems use a dedicated relay to handle the high current required by the compressor clutch coil. The PCM typically provides a ground path for the relay coil, energizing it when all operating conditions are met, including proper pressure, temperature, and driver request.",
    diagram: ""
  },
  {
    id: 93,
    q: "A dual-zone HVAC system has separate controls for driver and passenger temperature. Which component allows each zone to independently control air temperature?",
    options: [
      "A) A single shared blend door",
      "B) Separate blend door actuators for each zone",
      "C) A single blower motor resistor",
      "D) A shared mode door actuator"
    ],
    answer: 1,
    explanation: "Dual-zone HVAC systems use separate blend door actuators for the driver and passenger sides. Each actuator independently positions its blend door based on the respective zone temperature setting, allowing different air temperatures to be delivered to each side of the cabin simultaneously.",
    diagram: ""
  },
  {
    id: 94,
    q: "What is the purpose of the aspirator tube connected to the in-car temperature sensor?",
    options: [
      "A) To provide vacuum for the mode doors",
      "B) To draw cabin air across the sensor for an accurate temperature reading",
      "C) To supply fresh air to the evaporator",
      "D) To drain condensation from the evaporator"
    ],
    answer: 1,
    explanation: "The aspirator tube uses a small amount of HVAC airflow to draw cabin air across the in-car temperature sensor. This ensures the sensor continuously samples actual cabin air temperature rather than reading the temperature of stagnant air immediately surrounding it inside the dashboard.",
    diagram: ""
  },
  {
    id: 95,
    q: "A technician retrieves a DTC for the blend door actuator circuit. After clearing the code, the DTC returns immediately. What should the technician do NEXT?",
    options: [
      "A) Replace the blend door actuator without further testing",
      "B) Inspect the wiring, connectors, and actuator for mechanical binding or electrical faults",
      "C) Replace the HVAC control module",
      "D) Recharge the A/C system"
    ],
    answer: 1,
    explanation: "A DTC that returns immediately after clearing indicates an active fault. Before replacing parts, the technician should inspect wiring and connectors for opens, shorts, or corrosion, and check the actuator for mechanical binding from a broken blend door or debris preventing movement.",
    diagram: ""
  },
  {
    id: 96,
    q: "Technician A says the condenser fan relay can be tested by swapping it with an identical relay in the fuse box. Technician B says the relay can also be bench-tested using a jumper wire and test light. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Swapping the suspect relay with a known-good identical relay from the fuse box is a quick and effective diagnostic method. A relay can also be bench-tested by applying 12V to the coil terminals and using a test light or multimeter to verify the contacts close, confirming functionality.",
    diagram: ""
  },
  {
    id: 97,
    q: "All of the following sensors provide input to an automatic temperature control module EXCEPT:",
    options: [
      "A) In-car temperature sensor",
      "B) Ambient air temperature sensor",
      "C) Engine oil pressure sensor",
      "D) Sunload sensor"
    ],
    answer: 2,
    explanation: "The ATC module uses inputs from the in-car temperature sensor, ambient temperature sensor, sunload sensor, evaporator temperature sensor, and coolant temperature sensor to calculate heating and cooling demand. The engine oil pressure sensor is unrelated to HVAC operation.",
    diagram: ""
  },
  {
    id: 98,
    q: "A blower motor operates but makes a loud squealing noise. What is the MOST likely cause?",
    options: [
      "A) A clogged cabin air filter",
      "B) Worn blower motor bearings or debris in the blower wheel",
      "C) An overcharged A/C system",
      "D) A faulty blower motor resistor"
    ],
    answer: 1,
    explanation: "A squealing or grinding noise from a blower motor typically indicates worn bearings or foreign debris caught in the blower wheel (squirrel cage). Leaves, acorns, or other material can enter through the fresh air intake and contact the spinning wheel, producing noise during operation.",
    diagram: ""
  },
  {
    id: 99,
    q: "In a semi-automatic temperature control system, which function is typically controlled manually by the driver?",
    options: [
      "A) Blend door position",
      "B) Compressor clutch engagement",
      "C) Blower motor speed",
      "D) Condenser fan speed"
    ],
    answer: 2,
    explanation: "In a semi-automatic temperature control (SATC) system, the control module automatically adjusts the blend door and compressor operation to maintain the set temperature, but the driver manually selects the blower motor speed. Full ATC systems automate blower speed as well.",
    diagram: ""
  },
  {
    id: 100,
    q: "Technician A says a HVAC control head with a digital display that is blank could have a power or ground fault. Technician B says a faulty control head can prevent all HVAC functions from operating. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "A blank digital display on the HVAC control head can result from a loss of power or ground to the unit. Since the control head sends commands to all HVAC actuators, relays, and the blower, a completely failed control head can render all HVAC functions inoperative until repaired or replaced.",
    diagram: ""
  }
];
