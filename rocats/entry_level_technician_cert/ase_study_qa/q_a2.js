const questionsA2 = [
  // ============================================================
  // TRANSMISSION/TRANSAXLE DIAGNOSIS (Questions 1-58)
  // ============================================================
  {
    id: 1,
    q: "A vehicle equipped with an automatic transmission has dark brown fluid with a burnt odor. What does this most likely indicate?",
    options: [
      "A) Normal fluid condition after 30,000 miles",
      "B) Overheated or worn clutch material in the transmission",
      "C) Coolant contamination from a leaking radiator",
      "D) Incorrect fluid type was used during the last service"
    ],
    answer: 1,
    explanation: "Dark brown or black transmission fluid with a burnt smell is a strong indicator of overheating or deteriorated clutch friction material. Normal ATF is red or light pink. This condition often means internal damage has occurred and a rebuild or replacement may be needed.",
    diagram: ""
  },
  {
    id: 2,
    q: "Transmission fluid appears milky pink. What is the most likely cause?",
    options: [
      "A) Overheating of the torque converter",
      "B) Coolant contamination from a failed transmission cooler",
      "C) Aerated fluid from an overfilled transmission",
      "D) Normal oxidation of the fluid over time"
    ],
    answer: 1,
    explanation: "Milky pink or strawberry-colored ATF indicates coolant contamination, typically from a crack in the transmission cooler inside the radiator. Coolant mixes with ATF, creating the milky appearance. This requires immediate repair, as coolant destroys clutch friction material and seals rapidly.",
    diagram: ""
  },
  {
    id: 3,
    q: "Technician A says a DTC P0700 indicates a specific transmission solenoid failure. Technician B says P0700 is a general powertrain control module code indicating a transmission-related fault has been stored. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 1,
    explanation: "P0700 is a generic OBD II code that simply alerts the PCM that the TCM has stored a transmission-related DTC. It does not specify which component has failed. The technician must retrieve the specific transmission code to pinpoint the problem. Technician B is correct.",
    diagram: ""
  },
  {
    id: 4,
    q: "A vehicle sets DTC P0730 (Incorrect Gear Ratio). All of the following could cause this code EXCEPT:",
    options: [
      "A) Worn clutch packs",
      "B) A faulty output speed sensor",
      "C) A clogged transmission cooler line",
      "D) Slipping one-way clutch"
    ],
    answer: 2,
    explanation: "P0730 is set when the PCM detects that the actual gear ratio does not match the expected gear ratio. Worn clutches, a faulty output speed sensor giving incorrect readings, and a slipping one-way clutch can all cause this. A clogged cooler line causes overheating, not a direct gear ratio error.",
    diagram: ""
  },
  {
    id: 5,
    q: "During an OBD II scan, a technician retrieves DTC P0750 (Shift Solenoid A Malfunction). What should be checked first?",
    options: [
      "A) Transmission fluid level and condition",
      "B) Electrical connector and wiring to shift solenoid A",
      "C) Torque converter clutch operation",
      "D) Transmission mount condition"
    ],
    answer: 1,
    explanation: "When diagnosing a shift solenoid malfunction code, the technician should first inspect the electrical connector and wiring for damage, corrosion, or loose connections before replacing the solenoid. Many solenoid codes are caused by wiring or connector issues rather than a failed solenoid itself.",
    diagram: ""
  },
  {
    id: 6,
    q: "A vehicle experiences harsh 1-2 upshifts but all other shifts are normal. What is the most likely cause?",
    options: [
      "A) Low transmission fluid level",
      "B) A faulty 1-2 accumulator piston or spring",
      "C) A worn torque converter",
      "D) Incorrect engine idle speed"
    ],
    answer: 1,
    explanation: "A harsh or firm shift isolated to one particular shift point typically indicates a problem with the accumulator for that specific shift. The 1-2 accumulator cushions the apply of the band or clutch during the 1-2 shift. A damaged piston seal or broken spring causes a harsh engagement.",
    diagram: ""
  },
  {
    id: 7,
    q: "Technician A says a whining noise that changes with engine RPM but not vehicle speed is likely from the torque converter or oil pump. Technician B says the noise is likely from the planetary gear set. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "A whining noise that varies with engine RPM but not vehicle speed points to components that rotate with the engine, such as the torque converter or transmission oil pump. Planetary gear noise would change with vehicle speed and gear selection. Technician A is correct.",
    diagram: ""
  },
  {
    id: 8,
    q: "During a road test, a transmission slips in third gear only. All other gears function normally. What is the most likely cause?",
    options: [
      "A) Low fluid level",
      "B) A worn third gear clutch pack",
      "C) A faulty governor",
      "D) A stuck pressure regulator valve"
    ],
    answer: 1,
    explanation: "Slipping isolated to one specific gear indicates a problem with the apply device (clutch pack or band) used exclusively in that gear. If the fluid level or main pressure were low, slipping would occur in multiple gears. A worn third gear clutch pack is the most likely cause.",
    diagram: ""
  },
  {
    id: 9,
    q: "Technician A says ATF level should be checked with the engine running and the transmission at operating temperature. Technician B says the gear selector should be in Park or Neutral during the check. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Most manufacturers specify checking ATF with the engine running at idle, the fluid at operating temperature, and the selector in Park or Neutral. This ensures the converter is full and fluid is circulating, giving an accurate dipstick reading.",
    diagram: ""
  },
  {
    id: 10,
    q: "A transmission has normal line pressure in all forward gears but low pressure in reverse. What is the most likely cause?",
    options: [
      "A) A worn oil pump",
      "B) A leaking reverse servo or clutch circuit",
      "C) A stuck pressure regulator valve",
      "D) A clogged transmission filter"
    ],
    answer: 1,
    explanation: "If line pressure is normal in all forward gears but low only in reverse, the problem is isolated to the reverse hydraulic circuit. A leaking reverse servo seal, damaged reverse clutch piston seal, or cracked reverse apply circuit would cause this condition without affecting forward gear pressure.",
    diagram: ""
  },
  {
    id: 11,
    q: "Hydraulic pressure tests show low line pressure in all gears and all ranges. All of the following could cause this EXCEPT:",
    options: [
      "A) A worn oil pump",
      "B) A stuck-open pressure regulator valve",
      "C) Low transmission fluid level",
      "D) A worn second gear band"
    ],
    answer: 3,
    explanation: "Low line pressure across all ranges indicates a problem in the main pressure supply system. A worn oil pump, stuck pressure regulator, and low fluid level all affect overall system pressure. A worn second gear band would only affect second gear operation, not system-wide line pressure.",
    diagram: ""
  },
  {
    id: 12,
    q: "A torque converter clutch (TCC) does not engage. The vehicle has poor fuel economy and the engine runs at higher RPM on the highway. What should be checked first?",
    options: [
      "A) The stator one-way clutch",
      "B) The TCC solenoid, wiring, and related DTCs",
      "C) The planetary gear set",
      "D) The transmission output shaft seal"
    ],
    answer: 1,
    explanation: "A non-engaging torque converter clutch causes the engine to run at higher RPM than expected at highway speed, reducing fuel economy. The TCC solenoid, its electrical circuit, and any stored DTCs should be checked first because electrical faults are the most common cause of TCC non-engagement.",
    diagram: ""
  },
  {
    id: 13,
    q: "Technician A says a shudder felt at light throttle during TCC lockup could be caused by contaminated transmission fluid. Technician B says it could be caused by a worn torque converter clutch friction surface. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. TCC shudder at light throttle can be caused by contaminated or degraded ATF that has lost its friction modifier properties, or by a worn or glazed converter clutch friction surface. Fluid replacement sometimes resolves the issue; otherwise, the converter must be replaced.",
    diagram: ""
  },
  {
    id: 14,
    q: "A vehicle's transmission will not shift out of first gear. The speedometer also does not work. What is the most likely cause?",
    options: [
      "A) A faulty turbine (input) speed sensor",
      "B) A faulty vehicle speed sensor (VSS) or output speed sensor",
      "C) A stuck shift solenoid",
      "D) A broken overdrive band"
    ],
    answer: 1,
    explanation: "Both the speedometer and the shift strategy rely on the vehicle speed sensor or output speed sensor signal. Without a valid speed signal, the PCM/TCM cannot determine when to command upshifts and the speedometer reads zero. Replacing the faulty sensor typically restores both functions.",
    diagram: ""
  },
  {
    id: 15,
    q: "DTC P0715 (Input/Turbine Speed Sensor Circuit Malfunction) is set. What does this sensor measure?",
    options: [
      "A) Engine crankshaft speed",
      "B) Rotational speed of the torque converter turbine shaft",
      "C) Vehicle road speed at the differential",
      "D) Governor pressure in the valve body"
    ],
    answer: 1,
    explanation: "The input or turbine speed sensor measures the rotational speed of the torque converter turbine, which is also the transmission input shaft speed. The PCM/TCM compares this with the output speed sensor to calculate gear ratios and monitor shift quality and torque converter clutch slip.",
    diagram: ""
  },
  {
    id: 16,
    q: "Which of the following is NOT a function of the OBD II system related to automatic transmissions?",
    options: [
      "A) Monitoring shift solenoid circuit integrity",
      "B) Detecting gear ratio errors",
      "C) Adjusting clutch pack clearances automatically",
      "D) Monitoring torque converter clutch slippage"
    ],
    answer: 2,
    explanation: "The OBD II system monitors electrical circuits, gear ratios, and TCC slippage to detect malfunctions and illuminate the MIL. However, the OBD II system cannot physically adjust clutch pack clearances. That is a mechanical procedure performed during transmission overhaul by a technician.",
    diagram: ""
  },
  {
    id: 17,
    q: "Technician A says delayed forward engagement from Park to Drive can be caused by low fluid level. Technician B says it can be caused by worn forward clutch seals. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Low fluid level means the clutch pack takes longer to fill and apply, causing a delay. Worn forward clutch seals allow fluid to leak past the piston, reducing apply pressure and delaying engagement. Both are common causes of delayed forward engagement.",
    diagram: ""
  },
  {
    id: 18,
    q: "During a stall test, engine RPM exceeds the specified stall speed. What does this indicate?",
    options: [
      "A) A restricted exhaust system",
      "B) Slipping clutches or bands inside the transmission",
      "C) A locked-up stator in the torque converter",
      "D) An engine that is producing too much power"
    ],
    answer: 1,
    explanation: "If stall speed is higher than specifications, the transmission clutches or bands are slipping, allowing the engine to rev beyond the normal stall point. A locked stator would produce low stall speed. A restricted exhaust would cause lower-than-normal stall speed due to reduced engine power output.",
    diagram: ""
  },
  {
    id: 19,
    q: "During a stall test, engine RPM is significantly below the specified stall speed. What is the most likely cause?",
    options: [
      "A) Slipping transmission clutch packs",
      "B) A stator one-way clutch that is not holding",
      "C) Low engine power output or a stator one-way clutch that is locked up",
      "D) An incorrect ATF type"
    ],
    answer: 2,
    explanation: "Low stall speed indicates the engine cannot reach the expected RPM against the converter load. This can be caused by low engine power (fuel, ignition, or exhaust issue) or a stator that is locked in place, increasing resistance. A slipping stator would produce low efficiency at cruise, not low stall speed.",
    diagram: ""
  },
  {
    id: 20,
    q: "A vehicle has good acceleration from a stop but poor highway passing performance. The engine revs freely but the vehicle does not accelerate as expected. What is the most likely cause?",
    options: [
      "A) A slipping overdrive clutch or band",
      "B) A plugged catalytic converter",
      "C) Worn front brake pads",
      "D) A faulty mass air flow sensor"
    ],
    answer: 0,
    explanation: "Good acceleration from a stop but poor passing power at highway speed suggests that the overdrive or high-gear holding device is slipping. When the driver demands more power, the transmission should downshift, but if the apply device slips, the engine revs without delivering power to the wheels.",
    diagram: ""
  },
  {
    id: 21,
    q: "Technician A says an electronic pressure control (EPC) solenoid regulates transmission line pressure. Technician B says line pressure is controlled only by the mechanical pressure regulator valve. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "In modern electronically controlled transmissions, the EPC solenoid controls line pressure by modulating the pressure regulator valve based on signals from the PCM/TCM. While the pressure regulator valve still physically regulates pressure, the EPC solenoid directs its operation. Technician A is correct.",
    diagram: ""
  },
  {
    id: 22,
    q: "A transmission intermittently shifts erratically and the MIL illuminates. Wiggling the wiring harness connector at the transmission causes the MIL to flash. What is the most likely cause?",
    options: [
      "A) A failed PCM",
      "B) An internal transmission mechanical failure",
      "C) A damaged or corroded wiring harness connector",
      "D) A faulty torque converter"
    ],
    answer: 2,
    explanation: "Intermittent electrical problems that respond to physical manipulation of the connector indicate a damaged or corroded connector or wiring issue. This causes intermittent loss of signal to solenoids or sensors, resulting in erratic shifting and DTC storage. Repair or replace the connector and wiring.",
    diagram: ""
  },
  {
    id: 23,
    q: "What does a DTC P0740 (Torque Converter Clutch Circuit Malfunction) indicate?",
    options: [
      "A) The TCC mechanical components are worn out",
      "B) An electrical problem in the TCC solenoid circuit",
      "C) The torque converter is physically damaged",
      "D) The transmission oil pump has failed"
    ],
    answer: 1,
    explanation: "P0740 indicates an electrical malfunction in the TCC solenoid circuit, such as an open or short. The PCM detected that the TCC solenoid circuit did not respond as expected. This requires diagnosis of the solenoid, wiring, and connector before assuming the converter itself is faulty.",
    diagram: ""
  },
  {
    id: 24,
    q: "A vehicle experiences a flare (RPM increase) during the 2-3 upshift. What is the most likely cause?",
    options: [
      "A) The 2-3 shift overlap is too short due to a worn clutch or apply device",
      "B) The engine is producing too much power",
      "C) The tires are overinflated",
      "D) The exhaust system has a leak"
    ],
    answer: 0,
    explanation: "A flare during an upshift means there is a momentary loss of power transfer between gears. This occurs when one holding device releases before the next one fully applies, causing the engine to briefly rev up. This indicates worn or burned clutches, leaking seals, or low apply pressure for that shift.",
    diagram: ""
  },
  {
    id: 25,
    q: "Technician A says a transmission that shifts normally when cold but slips when hot may have worn internal seals. Technician B says this condition is caused only by using the wrong ATF type. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Technician A is correct. Hardened or worn clutch piston seals may seal adequately when cold but leak as components expand at operating temperature, causing slipping. While wrong ATF can cause issues, it is not the only cause of this symptom. Worn internal seals are the most common reason.",
    diagram: ""
  },
  {
    id: 26,
    q: "All of the following conditions can cause transmission overheating EXCEPT:",
    options: [
      "A) Towing a heavy trailer",
      "B) A clogged transmission cooler",
      "C) A properly functioning TCC solenoid engaging at highway speed",
      "D) Slipping clutch packs"
    ],
    answer: 2,
    explanation: "A properly functioning TCC solenoid that locks up the converter at highway speed actually reduces heat generation by eliminating converter slippage. Towing, a clogged cooler, and slipping clutches all generate excessive heat. The TCC lockup improves efficiency and lowers fluid temperature.",
    diagram: ""
  },
  {
    id: 27,
    q: "A buzzing noise is heard from the transmission at idle in Park. The noise goes away when the vehicle is placed in Drive. What is the most likely source?",
    options: [
      "A) The torque converter",
      "B) The oil pump or pressure regulator valve",
      "C) The output shaft bearing",
      "D) The planetary gear set"
    ],
    answer: 1,
    explanation: "A buzzing or whining noise at idle in Park that disappears in Drive often comes from the oil pump or pressure regulator valve. In Park, hydraulic flow patterns change when no clutch circuits are being charged. A resonating pressure regulator valve or worn pump gears can produce this noise.",
    diagram: ""
  },
  {
    id: 28,
    q: "Technician A says the transmission range (TR) sensor tells the PCM what gear the driver has selected. Technician B says the TR sensor only controls the backup lights. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "The transmission range sensor informs the PCM/TCM of the driver's selected gear position (P, R, N, D, etc.), which is critical for shift scheduling, engine management, and starting circuit operation. While it may also control backup lights, that is not its only function. Technician A is correct.",
    diagram: ""
  },
  {
    id: 29,
    q: "A vehicle will not move in any gear, but the engine runs normally. Transmission fluid is at the correct level and appears clean. What is the most likely cause?",
    options: [
      "A) A severely slipping torque converter stator",
      "B) A broken input shaft or failed oil pump drive",
      "C) A clogged transmission filter",
      "D) A faulty ignition coil"
    ],
    answer: 1,
    explanation: "If the vehicle will not move in any gear despite correct fluid level, a broken input shaft, failed oil pump drive, or sheared torque converter hub is likely. These conditions prevent hydraulic pressure from being generated or torque from being transmitted. A clogged filter would cause some slipping but usually not total failure.",
    diagram: ""
  },
  {
    id: 30,
    q: "A DTC P0731 (Gear 1 Incorrect Ratio) is stored. What does this code mean?",
    options: [
      "A) The transmission cannot physically engage first gear",
      "B) The PCM has detected that the actual first gear ratio does not match the expected ratio",
      "C) The first gear synchronizer is worn",
      "D) The shift solenoid for first gear has an open circuit"
    ],
    answer: 1,
    explanation: "P0731 means the PCM/TCM compared the input speed sensor reading to the output speed sensor reading and determined the calculated gear ratio does not match the expected first gear ratio. This can indicate clutch slippage, sensor errors, or mechanical wear affecting first gear operation.",
    diagram: ""
  },
  {
    id: 31,
    q: "Which component in an electronic automatic transmission directly controls the timing and sequencing of shifts?",
    options: [
      "A) The governor",
      "B) The throttle valve cable",
      "C) The transmission control module (TCM) or PCM",
      "D) The manual valve"
    ],
    answer: 2,
    explanation: "In electronically controlled transmissions, the TCM or PCM determines shift timing based on inputs from various sensors including throttle position, vehicle speed, and engine load. It commands shift solenoids to direct hydraulic fluid, controlling the precise timing and sequencing of each shift.",
    diagram: ""
  },
  {
    id: 32,
    q: "Technician A says a transmission stuck in second gear that will not upshift or downshift is in limp mode. Technician B says limp mode is caused by a serious electronic fault detected by the TCM/PCM. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Limp mode (failsafe mode) locks the transmission in second or third gear to protect it from further damage. It is triggered when the TCM/PCM detects a serious electrical or electronic fault, allowing the vehicle to be driven to a repair facility at reduced performance.",
    diagram: ""
  },
  {
    id: 33,
    q: "A road test reveals the transmission downshifts harshly when coming to a stop. What is the most likely cause?",
    options: [
      "A) A sticking throttle position sensor",
      "B) Excessive line pressure or a faulty EPC solenoid",
      "C) A worn torque converter turbine",
      "D) Low engine coolant level"
    ],
    answer: 1,
    explanation: "Harsh downshifts typically result from excessive line pressure, which causes clutches and bands to apply too aggressively. A faulty EPC solenoid that commands maximum pressure, or a stuck pressure regulator valve, can cause this. The TCM normally reduces line pressure during coast-down shifts for smooth operation.",
    diagram: ""
  },
  {
    id: 34,
    q: "All of the following are used during automatic transmission diagnosis EXCEPT:",
    options: [
      "A) A hydraulic pressure gauge",
      "B) A scan tool with bidirectional controls",
      "C) A cylinder leakage tester",
      "D) A digital multimeter"
    ],
    answer: 2,
    explanation: "A cylinder leakage tester is used for engine diagnosis to check cylinder sealing, not for automatic transmission diagnosis. Hydraulic pressure gauges, scan tools with bidirectional controls, and digital multimeters are all standard tools used when diagnosing transmission problems.",
    diagram: ""
  },
  {
    id: 35,
    q: "Technician A says a faulty throttle position sensor (TPS) can cause harsh shifting. Technician B says a faulty TPS can cause delayed shifts. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. The TPS signal is used by the PCM/TCM to determine shift points and line pressure. A TPS reading higher than actual can cause harsh, late shifts (transmission thinks throttle is wide open). A TPS reading lower than actual can cause early, soft, or delayed shifts.",
    diagram: ""
  },
  {
    id: 36,
    q: "A clicking noise is heard from the transmission area that increases with vehicle speed. What is the most likely cause?",
    options: [
      "A) A worn oil pump",
      "B) A chipped or damaged output shaft gear or differential component",
      "C) A slipping torque converter clutch",
      "D) A loose exhaust heat shield"
    ],
    answer: 1,
    explanation: "A clicking noise that varies with vehicle speed rather than engine RPM indicates a component rotating with the output shaft or driveline. A chipped gear tooth on the output shaft, transfer gear, or differential gear can produce a rhythmic clicking that increases as the vehicle goes faster.",
    diagram: ""
  },
  {
    id: 37,
    q: "Visible metal particles in the ATF on the dipstick could indicate all of the following EXCEPT:",
    options: [
      "A) Bearing failure",
      "B) Gear tooth damage",
      "C) Shaft wear",
      "D) A clogged cabin air filter"
    ],
    answer: 3,
    explanation: "Visible metal particles or shavings in ATF indicate significant internal hard part wear or damage to bearings, gears, or shafts. A clogged cabin air filter is completely unrelated to the transmission and would not produce metallic contamination in the ATF. Internal inspection is typically required.",
    diagram: ""
  },
  {
    id: 38,
    q: "A DTC P0756 (Shift Solenoid B Performance/Stuck Off) is stored. What is the first diagnostic step?",
    options: [
      "A) Replace the transmission",
      "B) Replace shift solenoid B immediately",
      "C) Check shift solenoid B resistance, wiring, connector, and fluid condition",
      "D) Perform a stall speed test"
    ],
    answer: 2,
    explanation: "Before replacing any component, verify the electrical integrity of the solenoid circuit by measuring resistance and checking for wiring damage or connector corrosion. Also check for contaminated fluid that could cause the solenoid to stick. A stuck solenoid may respond to cleaning if contamination is the issue.",
    diagram: ""
  },
  {
    id: 39,
    q: "A vehicle surges at steady highway speed with the TCC engaged. What is the most likely cause?",
    options: [
      "A) Worn rear tires",
      "B) An intermittently engaging and disengaging TCC",
      "C) Low brake fluid",
      "D) A faulty alternator"
    ],
    answer: 1,
    explanation: "Surging at highway speed with TCC engaged is typically caused by the torque converter clutch rapidly engaging and disengaging. This creates a cycle of RPM change felt as a surge. Common causes include a faulty TCC solenoid, marginal TCC control circuit, or TCC apply pressure issues.",
    diagram: ""
  },
  {
    id: 40,
    q: "What is the purpose of the transmission oil temperature (TOT) sensor?",
    options: [
      "A) To control the engine cooling fan",
      "B) To provide fluid temperature data to the PCM/TCM for shift strategy and TCC control",
      "C) To activate the transmission warning light at all times",
      "D) To regulate the ATF cooler bypass valve mechanically"
    ],
    answer: 1,
    explanation: "The TOT sensor provides the PCM/TCM with real-time transmission fluid temperature data. This information is used to modify shift points, TCC engagement strategy, and line pressure to protect the transmission. At extreme temperatures, the system may disable TCC or modify shift schedules.",
    diagram: ""
  },
  {
    id: 41,
    q: "A technician is road testing a vehicle and notices the transmission will not shift into overdrive. All other gears work normally. Which of the following is the LEAST likely cause?",
    options: [
      "A) A faulty overdrive solenoid",
      "B) A worn overdrive clutch pack",
      "C) An overdrive cancel switch that is stuck on",
      "D) A broken flexplate"
    ],
    answer: 3,
    explanation: "A broken flexplate would affect all gear operation, not just overdrive. A faulty overdrive solenoid, worn overdrive clutch pack, or an overdrive cancel switch that is accidentally engaged could all prevent overdrive engagement while allowing normal operation in all other gears.",
    diagram: ""
  },
  {
    id: 42,
    q: "A transmission produces a growling noise only in third gear. What is the most likely cause?",
    options: [
      "A) A worn torque converter bearing",
      "B) A damaged planetary gear set component used in third gear",
      "C) Low engine oil level",
      "D) A faulty catalytic converter"
    ],
    answer: 1,
    explanation: "A growling noise isolated to one specific gear indicates damage to a component that is under load or rotating differently in that gear. This typically points to a planetary gear set component, such as a worn sun gear, ring gear, or planet pinion bearing that is stressed only in third gear.",
    diagram: ""
  },
  {
    id: 43,
    q: "Technician A says a scan tool can command individual shift solenoids on and off for testing. Technician B says solenoids can only be tested by removing the valve body. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Modern scan tools have bidirectional control capability that allows technicians to command individual solenoids on and off while monitoring the transmission response. This is a valuable diagnostic technique that does not require valve body removal. Technician A is correct.",
    diagram: ""
  },
  {
    id: 44,
    q: "Which sensor input does the PCM/TCM use to determine engine load for shift scheduling?",
    options: [
      "A) Oxygen sensor",
      "B) Throttle position sensor (TPS) or manifold absolute pressure (MAP) sensor",
      "C) Knock sensor",
      "D) Camshaft position sensor"
    ],
    answer: 1,
    explanation: "The PCM/TCM uses the throttle position sensor and/or the MAP sensor to determine engine load. These signals help determine the appropriate shift points and line pressure. Under high load, shifts occur at higher RPM and line pressure increases for firmer clutch application.",
    diagram: ""
  },
  {
    id: 45,
    q: "A vehicle has no engine braking when manually selecting a lower gear range. What is the most likely cause?",
    options: [
      "A) A worn one-way clutch or overrunning clutch that is slipping",
      "B) A faulty fuel injector",
      "C) A clogged air filter",
      "D) An underinflated spare tire"
    ],
    answer: 0,
    explanation: "In automatic transmissions, one-way or overrunning clutches allow freewheeling in certain gears. Manual low-range engagement uses additional holding devices to provide engine braking. If the overrunning clutch or the manual low apply device is slipping or not engaging, engine braking is lost.",
    diagram: ""
  },
  {
    id: 46,
    q: "DTC P0720 (Output Speed Sensor Circuit Malfunction) is set. All of the following could be the cause EXCEPT:",
    options: [
      "A) A damaged output speed sensor",
      "B) A broken wire in the output speed sensor circuit",
      "C) A corroded sensor connector",
      "D) An overfilled transmission"
    ],
    answer: 3,
    explanation: "P0720 is an electrical circuit malfunction code for the output speed sensor. A damaged sensor, broken wiring, or corroded connector can all cause this DTC. An overfilled transmission may cause shifting issues or foaming but does not directly cause a speed sensor circuit malfunction.",
    diagram: ""
  },
  {
    id: 47,
    q: "What does the torque converter stator do?",
    options: [
      "A) It drives the transmission oil pump",
      "B) It redirects fluid flow between the turbine and impeller to multiply torque",
      "C) It locks the converter to the flywheel at highway speeds",
      "D) It generates the electrical signal for the speed sensor"
    ],
    answer: 1,
    explanation: "The stator sits between the turbine and impeller inside the torque converter. It redirects the fluid exiting the turbine back into the impeller at an efficient angle, multiplying engine torque during acceleration. The stator rides on a one-way clutch that allows it to freewheel at coupling speed.",
    diagram: ""
  },
  {
    id: 48,
    q: "Technician A says a speed-specific vibration at 40-50 mph could be caused by an unbalanced torque converter. Technician B says it could be caused by a worn universal joint. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. A speed-specific vibration can be caused by an unbalanced torque converter or a worn universal joint, as both are rotating components whose imbalance becomes pronounced at certain speeds. The driveshaft and converter should both be inspected when diagnosing this type of vibration.",
    diagram: ""
  },
  {
    id: 49,
    q: "Which DTC range is specifically assigned to transmission-related faults in the OBD II system?",
    options: [
      "A) P0100-P0199",
      "B) P0300-P0399",
      "C) P0700-P0899",
      "D) P0400-P0499"
    ],
    answer: 2,
    explanation: "In the OBD II DTC structure, the P0700-P0899 range is designated for transmission-related faults. P0100s cover fuel and air metering, P0300s cover misfires, and P0400s cover emissions. Knowing the DTC range helps technicians quickly identify the system involved in a malfunction.",
    diagram: ""
  },
  {
    id: 50,
    q: "A customer reports the transmission sometimes slams into gear from a stop. This occurs most often on cold mornings. What is the most likely cause?",
    options: [
      "A) Worn tires",
      "B) Excessive line pressure caused by a faulty EPC solenoid or stuck pressure regulator",
      "C) A broken motor mount only",
      "D) A faulty oxygen sensor"
    ],
    answer: 1,
    explanation: "A harsh engagement from a stop, especially when cold, often points to excessive line pressure. A faulty EPC solenoid commanding maximum pressure or a stuck pressure regulator valve can cause the clutch to apply too aggressively. Cold, thick fluid may also contribute to momentary pressure spikes.",
    diagram: ""
  },
  {
    id: 51,
    q: "Which of the following solenoids in a modern automatic transmission directly controls torque converter lockup?",
    options: [
      "A) Shift solenoid A",
      "B) Shift solenoid B",
      "C) TCC (torque converter clutch) solenoid",
      "D) EPC (electronic pressure control) solenoid"
    ],
    answer: 2,
    explanation: "The TCC solenoid specifically controls the application and release of the torque converter clutch. When energized by the PCM/TCM, it directs hydraulic pressure to engage the lockup clutch in the converter. Shift solenoids control gear changes and the EPC solenoid controls line pressure.",
    diagram: ""
  },
  {
    id: 52,
    q: "A vehicle experiences a neutral condition (engine revs with no forward movement) for two to three seconds after the 1-2 upshift. What is the most likely cause?",
    options: [
      "A) An engine misfire",
      "B) A leaking or burned second gear apply device",
      "C) A faulty alternator",
      "D) An incorrect tire size"
    ],
    answer: 1,
    explanation: "A brief neutral condition after the 1-2 upshift means the second gear clutch or band is not applying quickly or firmly enough. A leaking servo piston seal, burned clutch pack, or blocked apply orifice for the second gear circuit can all cause this delayed or failed engagement after the shift.",
    diagram: ""
  },
  {
    id: 53,
    q: "Technician A says that a restricted transmission cooler can cause overheating. Technician B says a restricted cooler can cause high line pressure. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. A restricted cooler reduces fluid flow, which decreases the cooler's ability to dissipate heat, causing overheating. Additionally, the restriction creates backpressure in the hydraulic circuit, which can raise line pressure. Both conditions can lead to transmission damage.",
    diagram: ""
  },
  {
    id: 54,
    q: "A scan tool shows that the transmission input speed sensor reads 0 RPM while the engine is running and the vehicle is moving. What is the most likely cause?",
    options: [
      "A) A failed input speed sensor or its circuit",
      "B) A slipping transmission",
      "C) An overheated torque converter",
      "D) A worn drive belt"
    ],
    answer: 0,
    explanation: "If the input speed sensor reads zero RPM while the engine is running and the vehicle is moving, the sensor or its circuit has failed. The turbine always spins when the vehicle is in gear and moving, so a zero reading is electrically impossible during driving and indicates a sensor or wiring fault.",
    diagram: ""
  },
  {
    id: 55,
    q: "During a road test for transmission diagnosis, the technician should evaluate all of the following EXCEPT:",
    options: [
      "A) Shift quality and shift timing",
      "B) Torque converter clutch engagement and release",
      "C) Spark plug electrode gap",
      "D) Abnormal noise and vibration during shifts"
    ],
    answer: 2,
    explanation: "During a transmission road test, the technician evaluates shift quality, timing, TCC engagement, noise, and vibration under actual driving conditions. Spark plug electrode gap is an engine maintenance item that is checked with a feeler gauge during a tune-up, not during a transmission road test.",
    diagram: ""
  },
  {
    id: 56,
    q: "A vehicle with an electronically controlled transmission has a check engine light on and the transmission is in limp mode. The battery was recently replaced. What should the technician do first?",
    options: [
      "A) Replace the transmission control module",
      "B) Clear DTCs and perform a transmission relearn procedure",
      "C) Replace all shift solenoids",
      "D) Overhaul the transmission"
    ],
    answer: 1,
    explanation: "After a battery replacement or disconnect, the adaptive learning values for the transmission may be lost. The PCM/TCM may enter limp mode until it relearns shift parameters. Clearing DTCs and performing the manufacturer's relearn or reset procedure should be the first step before further diagnosis.",
    diagram: ""
  },
  {
    id: 57,
    q: "Technician A says a transmission that slips only under heavy throttle has worn clutch packs. Technician B says it could also be caused by low line pressure that is insufficient under load. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Worn clutch friction material may hold under light loads but slip under heavy throttle when torque increases. Similarly, low line pressure that is adequate for light-load shifts can be insufficient under heavy acceleration, causing clutch or band slippage at high engine torque output.",
    diagram: ""
  },
  {
    id: 58,
    q: "A vehicle exhibits a repeated bump or shudder during light acceleration in second gear. What should be checked?",
    options: [
      "A) Tire balance",
      "B) The second gear band adjustment or servo apply circuit",
      "C) The windshield wiper motor",
      "D) The power steering pump"
    ],
    answer: 1,
    explanation: "A shudder or repeated bump during light acceleration in a specific gear suggests the apply device for that gear is partially engaging and slipping, then catching again. The second gear band adjustment, servo piston seal, or the clutch pack apply circuit should be inspected for proper operation.",
    diagram: ""
  },

  // ============================================================
  // IN-VEHICLE MAINTENANCE & REPAIR (Questions 59-85)
  // ============================================================
  {
    id: 59,
    q: "When replacing a transmission filter, what else should always be inspected?",
    options: [
      "A) The radiator cap",
      "B) The transmission pan gasket, pan magnet, and pan for debris",
      "C) The drive belt tensioner",
      "D) The engine oil filter"
    ],
    answer: 1,
    explanation: "During a filter replacement, the transmission pan must be removed. The technician should always inspect the pan for metal debris or friction material particles, clean or replace the pan magnet, and install a new pan gasket or reseal the pan. This provides diagnostic clues about internal wear.",
    diagram: ""
  },
  {
    id: 60,
    q: "Technician A says the manual shift linkage should be checked if the vehicle starts in gears other than Park and Neutral. Technician B says only the neutral safety switch needs replacement. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "If the vehicle starts in positions other than Park and Neutral, the shift linkage adjustment should be checked first. A misadjusted linkage means the indicator may show Park, but the transmission is not actually in Park. The neutral safety switch may be functioning correctly with incorrect linkage position.",
    diagram: ""
  },
  {
    id: 61,
    q: "What is the correct procedure for adjusting the manual shift linkage on most automatic transmissions?",
    options: [
      "A) Tighten the linkage with the selector in Drive",
      "B) Place the transmission in Neutral, align the selector to the Neutral position, and tighten the linkage",
      "C) Adjust the linkage with the engine running in Park",
      "D) No adjustment is needed; the linkage is self-adjusting"
    ],
    answer: 1,
    explanation: "The standard procedure involves placing the transmission manual valve in the Neutral detent, placing the gear selector in the Neutral position, then tightening the linkage clamp or adjustment. This ensures the shift positions on the indicator correctly correspond to the actual transmission gear ranges.",
    diagram: ""
  },
  {
    id: 62,
    q: "A transmission is leaking fluid from the front of the transmission bell housing area. What is the most likely source?",
    options: [
      "A) The rear output shaft seal",
      "B) The front pump seal or torque converter seal",
      "C) The valve body gasket",
      "D) The transmission pan gasket"
    ],
    answer: 1,
    explanation: "Fluid leaking from the front of the bell housing indicates a front pump seal or converter seal failure. The front pump seal prevents fluid from escaping between the pump and the torque converter. Transmission removal is usually required to access and replace this seal.",
    diagram: ""
  },
  {
    id: 63,
    q: "After replacing the transmission pan gasket, the transmission leaks. What is the most likely cause?",
    options: [
      "A) The torque converter is damaged",
      "B) The pan bolts are unevenly torqued or the pan mating surface is warped",
      "C) The transmission input shaft is worn",
      "D) The shift solenoids are leaking"
    ],
    answer: 1,
    explanation: "A transmission pan leak after gasket replacement is typically caused by unevenly torqued pan bolts, a warped pan, or a damaged gasket. Pan bolts should be torqued in the proper sequence to the correct specification. A straightedge should be used to check the pan mating surface for warpage.",
    diagram: ""
  },
  {
    id: 64,
    q: "What is the purpose of the transmission cooler?",
    options: [
      "A) To warm the transmission fluid during cold starts",
      "B) To remove excess heat from the ATF and maintain proper operating temperature",
      "C) To filter contaminants from the ATF",
      "D) To provide lubrication to the torque converter"
    ],
    answer: 1,
    explanation: "The transmission cooler removes heat from the ATF, maintaining it within the proper operating temperature range. It is typically located within the radiator or as a separate auxiliary unit. Proper cooling is essential because excessive heat is the primary cause of ATF breakdown and transmission failure.",
    diagram: ""
  },
  {
    id: 65,
    q: "When servicing a valve body, all of the following precautions should be taken EXCEPT:",
    options: [
      "A) Keeping all check balls and springs organized and in their correct positions",
      "B) Using compressed air to clean the valve body passages",
      "C) Using a wire brush to clean the valve bore surfaces",
      "D) Inspecting valves for scoring, wear, and free movement in their bores"
    ],
    answer: 2,
    explanation: "A wire brush should never be used to clean valve body bore surfaces because it can scratch the precision-machined surfaces, causing valve sticking or fluid leaks. Valve bodies should be cleaned with solvent and lint-free cloths. Compressed air is acceptable for cleaning passages when used carefully.",
    diagram: ""
  },
  {
    id: 66,
    q: "A technician is replacing the transmission output shaft seal. What must be inspected before installing the new seal?",
    options: [
      "A) The engine oil level",
      "B) The output shaft surface for grooves, nicks, or wear where the seal rides",
      "C) The transmission fluid color only",
      "D) The brake pad thickness"
    ],
    answer: 1,
    explanation: "Before installing a new output shaft seal, the shaft surface where the seal lip rides must be inspected for grooves, scoring, or wear. A damaged shaft surface will cause the new seal to leak immediately. A seal sleeve or shaft repair may be necessary if surface damage is found.",
    diagram: ""
  },
  {
    id: 67,
    q: "When replacing a transmission servo, what should the technician check?",
    options: [
      "A) The spark plug gap",
      "B) The servo bore for scoring, the piston seal condition, and the apply pin length",
      "C) The radiator hose condition",
      "D) The brake master cylinder level"
    ],
    answer: 1,
    explanation: "When replacing a servo, inspect the servo bore for scoring or damage that could cause leaking. Check the piston seal for cuts or deterioration. Verify the apply pin length matches specifications, as an incorrect pin length changes band adjustment and shift quality. Use new seals during reassembly.",
    diagram: ""
  },
  {
    id: 68,
    q: "Technician A says a transmission cooler should be flushed when replacing a transmission due to contamination. Technician B says the cooler does not need flushing if the fluid appeared clean. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "When replacing or rebuilding a transmission, the cooler and cooler lines should always be thoroughly flushed to remove any debris, old fluid, or contamination. Even fluid that appears clean can contain microscopic particles that can damage a new or rebuilt transmission. Technician A is correct.",
    diagram: ""
  },
  {
    id: 69,
    q: "What type of ATF should be used when servicing an automatic transmission?",
    options: [
      "A) Any universal ATF will work in all transmissions",
      "B) The ATF type specified by the vehicle manufacturer",
      "C) The cheapest ATF available at the parts store",
      "D) Engine oil in an emergency can permanently replace ATF"
    ],
    answer: 1,
    explanation: "Always use the ATF type specified by the vehicle manufacturer. Different transmissions require specific fluid formulations for proper friction characteristics, viscosity, and additive packages. Using incorrect ATF can cause shift quality problems, clutch damage, seal deterioration, and void the warranty.",
    diagram: ""
  },
  {
    id: 70,
    q: "A transmission cooler line is leaking at the radiator fitting. What is the correct repair?",
    options: [
      "A) Apply silicone sealant over the leak",
      "B) Replace the fitting, line, or use the manufacturer-approved repair method",
      "C) Wrap the fitting with electrical tape",
      "D) Pinch the line closed with pliers"
    ],
    answer: 1,
    explanation: "Cooler line leaks must be properly repaired by replacing the damaged line, fitting, or using manufacturer-approved repair fittings. Makeshift repairs like sealant or tape cannot withstand the pressure and heat of ATF and will eventually fail, potentially causing fluid loss and transmission damage.",
    diagram: ""
  },
  {
    id: 71,
    q: "When removing a valve body, what should the technician be especially careful about?",
    options: [
      "A) Keeping the engine running during removal",
      "B) Noting the position and location of check balls, springs, and separator plates",
      "C) Removing the torque converter first",
      "D) Draining the engine oil"
    ],
    answer: 1,
    explanation: "When removing a valve body, check balls, springs, and separator plate gaskets must be carefully noted and documented because they are easily lost or misplaced. A misplaced check ball or spring can cause incorrect hydraulic routing, leading to shift problems or complete loss of a gear.",
    diagram: ""
  },
  {
    id: 72,
    q: "What component prevents the vehicle from being started in any gear other than Park or Neutral?",
    options: [
      "A) The transmission range sensor or neutral safety switch",
      "B) The torque converter clutch solenoid",
      "C) The shift interlock solenoid",
      "D) The overdrive cancel switch"
    ],
    answer: 0,
    explanation: "The neutral safety switch or transmission range sensor prevents the starter circuit from completing unless the transmission is in Park or Neutral. This is a critical safety device that prevents the vehicle from lurching forward or backward when the engine is cranked while in gear.",
    diagram: ""
  },
  {
    id: 73,
    q: "A technician is replacing the electrical connector on a transmission. What is the most important step?",
    options: [
      "A) Disconnecting the battery before working on the connector",
      "B) Using a hammer to seat the connector",
      "C) Leaving the old sealing ring in place",
      "D) Applying engine oil to the connector pins"
    ],
    answer: 0,
    explanation: "Always disconnect the battery before servicing any electrical connector on the transmission to prevent short circuits, solenoid damage, or PCM/TCM damage. Additionally, use proper connector release tools, replace damaged seals, and apply dielectric grease to prevent future corrosion of the connector pins.",
    diagram: ""
  },
  {
    id: 74,
    q: "Overfilled transmission fluid can cause all of the following problems EXCEPT:",
    options: [
      "A) Aerated (foamy) fluid",
      "B) Erratic shifting and slipping",
      "C) Fluid overflow from the vent tube",
      "D) A cracked torque converter housing"
    ],
    answer: 3,
    explanation: "Overfilled ATF contacts rotating components, causing foaming. Aerated fluid transmits hydraulic pressure poorly, leading to erratic shifts and slipping. Excess fluid can also overflow from the vent tube. However, overfilling does not crack the torque converter housing, which is a sealed welded assembly.",
    diagram: ""
  },
  {
    id: 75,
    q: "When replacing a shift solenoid in the valve body, what should also be done?",
    options: [
      "A) Replace the engine spark plugs",
      "B) Replace the solenoid O-rings or seals and check for debris in the valve body",
      "C) Adjust the transmission bands",
      "D) Replace the torque converter"
    ],
    answer: 1,
    explanation: "When replacing a shift solenoid, always install new O-rings or seals to prevent leaks. Inspect the valve body for debris or contamination that may have caused the original failure. If debris is found, the valve body passages should be cleaned thoroughly to prevent the new solenoid from failing.",
    diagram: ""
  },
  {
    id: 76,
    q: "Technician A says the shift interlock solenoid prevents the shifter from moving out of Park without pressing the brake pedal. Technician B says the shift interlock solenoid is the same as the neutral safety switch. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Technician A is correct. The shift interlock solenoid locks the gear selector in Park until the brake pedal is depressed and the ignition is on, preventing accidental vehicle movement. It is a separate component from the neutral safety switch, which controls the starter circuit. They serve different functions.",
    diagram: ""
  },
  {
    id: 77,
    q: "A transmission pan has a significant amount of fine metallic dust on the magnet. What does this indicate?",
    options: [
      "A) Normal wear of internal components",
      "B) A catastrophic transmission failure requiring immediate rebuild",
      "C) Contaminated ATF from the factory",
      "D) A failing oil pump gear"
    ],
    answer: 0,
    explanation: "A small amount of fine metallic dust on the transmission pan magnet is considered normal wear over the fluid service interval. However, large metal chunks, brass-colored particles, or excessive amounts of metallic material indicate abnormal wear or damage that requires further investigation.",
    diagram: ""
  },
  {
    id: 78,
    q: "After a fluid and filter change, the transmission now shifts late. What is the most likely cause?",
    options: [
      "A) The wrong type of ATF was used",
      "B) The transmission pan was not cleaned properly",
      "C) The oil pressure switch was disconnected",
      "D) The new filter is the wrong size"
    ],
    answer: 0,
    explanation: "Using the wrong ATF type can significantly affect shift quality and timing. Different friction modifier packages in ATFs are designed for specific transmissions. An incorrect ATF type can cause delayed shifts, harsh shifts, or slipping because the friction characteristics do not match the clutch material design.",
    diagram: ""
  },
  {
    id: 79,
    q: "What is the purpose of the accumulator in an automatic transmission?",
    options: [
      "A) To store excess ATF",
      "B) To cushion the apply of a clutch or band for smoother shift quality",
      "C) To increase overall line pressure",
      "D) To filter contamination from the ATF"
    ],
    answer: 1,
    explanation: "Accumulators are spring-loaded pistons in the valve body or transmission case that absorb some of the hydraulic pressure during clutch or band application. They provide a controlled, progressive apply to cushion the shift, making it smoother. Each shift circuit may have its own dedicated accumulator.",
    diagram: ""
  },
  {
    id: 80,
    q: "When replacing an external transmission seal, what should be applied to the new seal lip?",
    options: [
      "A) RTV silicone sealant",
      "B) A thin coat of clean ATF or assembly lube",
      "C) Brake cleaner",
      "D) Wheel bearing grease"
    ],
    answer: 1,
    explanation: "Before installation, the seal lip should be lightly coated with clean ATF or manufacturer-recommended assembly lubricant. This prevents the seal from running dry on initial startup, which can cause premature wear and early failure. Never use sealants or incompatible greases that may damage the seal material.",
    diagram: ""
  },
  {
    id: 81,
    q: "A transmission external electrical connector shows green corrosion on the pins. What is the correct repair?",
    options: [
      "A) Ignore it if the transmission shifts normally",
      "B) Clean the pins, repair or replace the connector, and apply dielectric grease",
      "C) Spray the connector with WD-40 and reconnect",
      "D) Replace the entire wiring harness"
    ],
    answer: 1,
    explanation: "Corroded connector pins increase resistance and can cause intermittent electrical signals, leading to erratic transmission behavior. The pins should be cleaned with an appropriate electrical contact cleaner, and damaged connectors should be repaired or replaced. Dielectric grease helps prevent future corrosion.",
    diagram: ""
  },
  {
    id: 82,
    q: "What should be checked when diagnosing an ATF leak at the transmission-to-engine mating surface?",
    options: [
      "A) The oxygen sensor",
      "B) The front pump seal, converter seal, and pump-to-case gasket or O-ring",
      "C) The rear main engine seal only",
      "D) The valve cover gaskets"
    ],
    answer: 1,
    explanation: "Leaks at the bell housing area can originate from the front pump seal, torque converter neck seal, or the pump-to-case gasket or O-ring. It is important to differentiate between a transmission leak and an engine rear main seal leak, as both can present similarly in this area.",
    diagram: ""
  },
  {
    id: 83,
    q: "A band adjustment is specified at three turns back from finger-tight. What does this mean?",
    options: [
      "A) Tighten the adjusting screw to the torque specification, then back off exactly three turns",
      "B) Tighten the adjusting screw finger-tight only, then back off three turns",
      "C) Turn the band anchor pin three full turns clockwise",
      "D) Loosen the locknut three turns and retighten"
    ],
    answer: 0,
    explanation: "Band adjustment typically involves tightening the adjusting screw to a specified torque value using a torque wrench, then backing off the screw the specified number of turns (in this case three). This sets the proper clearance between the band and drum for correct shift feel and holding capacity.",
    diagram: ""
  },
  {
    id: 84,
    q: "When installing a new transmission filter, what should be verified?",
    options: [
      "A) That the old filter seal or O-ring has been completely removed from the case",
      "B) That the filter is installed backward for better flow",
      "C) That the filter is a different brand than the original",
      "D) That the filter is lubricated with engine oil"
    ],
    answer: 0,
    explanation: "Before installing a new filter, verify that the old filter seal or O-ring has been completely removed from the case or pickup tube. A double-stacked seal will prevent proper seating and can cause an air leak at the filter, resulting in pump cavitation, low pressure, and transmission damage.",
    diagram: ""
  },
  {
    id: 85,
    q: "What is the correct procedure when refilling a transmission after a fluid and filter service?",
    options: [
      "A) Add the full factory-fill capacity at once",
      "B) Add approximately half the factory capacity, start the engine, cycle through all gears, then check and adjust the level",
      "C) Fill until fluid runs out the fill plug",
      "D) Overfill by one quart to account for the cooler"
    ],
    answer: 1,
    explanation: "A fluid and filter change only drains a portion of the total ATF capacity since fluid remains in the converter and cooler. Add approximately half the factory capacity, start the engine, cycle through all gear ranges, warm the fluid to operating temperature, then check the dipstick and adjust accordingly.",
    diagram: ""
  },

  // ============================================================
  // UNIT REMOVAL/INSPECTION/INSTALLATION (Questions 86-100)
  // ============================================================
  {
    id: 86,
    q: "Before removing an automatic transmission from the vehicle, all of the following must be done EXCEPT:",
    options: [
      "A) Disconnecting the battery",
      "B) Marking the driveshaft and companion flange for reinstallation",
      "C) Removing the cylinder head",
      "D) Disconnecting cooler lines, wiring harness, and shift linkage"
    ],
    answer: 2,
    explanation: "Removing the cylinder head is not required or related to transmission removal. The battery should be disconnected, the driveshaft marked and removed, cooler lines disconnected, the wiring harness unplugged, shift linkage detached, and the torque converter-to-flexplate bolts removed before pulling the unit.",
    diagram: ""
  },
  {
    id: 87,
    q: "Technician A says the torque converter must be properly seated on the oil pump drive before the transmission is bolted to the engine. Technician B says the converter will seat itself as the bolts are tightened. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Technician A is correct. The torque converter must be fully seated onto the pump drive, the stator support, and the input shaft before installation. If the converter is not fully engaged and the transmission is forced against the engine, the oil pump can be damaged or destroyed. Never pull it into position with the bolts.",
    diagram: ""
  },
  {
    id: 88,
    q: "How can a technician verify that the torque converter is fully seated on the transmission input shaft and pump drive?",
    options: [
      "A) By spinning the converter and listening for noise",
      "B) By measuring the distance from the converter mounting pads to the bell housing face",
      "C) By checking the fluid level",
      "D) By testing the stall speed"
    ],
    answer: 1,
    explanation: "The technician should measure the distance from the torque converter mounting pads or pilot to the front edge of the bell housing. This measurement should meet the manufacturer's specification, ensuring the converter is fully engaged on all three engagement points: the input shaft, stator support, and pump drive.",
    diagram: ""
  },
  {
    id: 89,
    q: "What is the purpose of measuring transmission end play during overhaul?",
    options: [
      "A) To determine the correct ATF type",
      "B) To verify proper internal clearances and select the correct thrust washer or shim",
      "C) To check the torque converter balance",
      "D) To measure the flexplate runout"
    ],
    answer: 1,
    explanation: "End play measurement determines the total axial clearance of the internal rotating components. Proper end play is critical for smooth operation and component longevity. Selective thrust washers or shims are used to bring end play within the manufacturer's specified range during reassembly.",
    diagram: ""
  },
  {
    id: 90,
    q: "When inspecting a planetary gear set during overhaul, what should the technician look for?",
    options: [
      "A) Chipped, pitted, or worn gear teeth and rough planet pinion bearings",
      "B) ATF color and odor only",
      "C) Wire harness routing",
      "D) Exhaust manifold bolt torque"
    ],
    answer: 0,
    explanation: "During planetary gear set inspection, the technician should check for chipped, pitted, or worn gear teeth on all sun, ring, and planet gears. Each planet pinion should spin freely on its pin without roughness or excess play. Worn needle bearings or thrust washers should also be replaced.",
    diagram: ""
  },
  {
    id: 91,
    q: "Technician A says clutch pack clearance is measured with a feeler gauge. Technician B says it is measured with a dial indicator. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both methods can be used depending on the manufacturer's specifications. Feeler gauges can be inserted between the snap ring and top pressure plate to measure clearance directly. A dial indicator can be set up to measure the total clutch pack travel. Both techniques are acceptable and commonly used.",
    diagram: ""
  },
  {
    id: 92,
    q: "What determines the proper clutch pack clearance in most automatic transmissions?",
    options: [
      "A) The number of friction and steel plates and the selective snap ring or pressure plate thickness",
      "B) The transmission fluid type",
      "C) The engine displacement",
      "D) The tire size"
    ],
    answer: 0,
    explanation: "Clutch pack clearance is set by the number and thickness of friction plates, steel plates, and often a selective snap ring or selective pressure plate. During overhaul, the technician measures the clearance and selects the correct snap ring or plate thickness to achieve the specified clearance.",
    diagram: ""
  },
  {
    id: 93,
    q: "When installing a transmission onto the engine, what is critical regarding the torque converter-to-flexplate bolt holes?",
    options: [
      "A) The bolts should be installed finger-tight only",
      "B) The converter must be rotated to align with the flexplate bolt holes without forcing, then bolts are torqued to specification",
      "C) Impact tools should always be used for converter bolts",
      "D) Converter bolts do not need torquing"
    ],
    answer: 1,
    explanation: "The torque converter mounting pads must be rotated to align with the flexplate bolt holes. Never force the converter to align. Once aligned, the bolts should be tightened evenly in a star pattern to the manufacturer's torque specification. Impact tools should not be used because of the risk of cracking the flexplate.",
    diagram: ""
  },
  {
    id: 94,
    q: "Technician A says clutch friction plates should be inspected for discoloration and glazing during overhaul. Technician B says steel separator plates should be checked for warping with a straightedge. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. Friction plates must be inspected for discoloration, glazing, flaking material, and measured for minimum thickness. Steel separator plates should be checked for warping using a straightedge and for scoring or heat discoloration. Both types must meet specifications for reuse.",
    diagram: ""
  },
  {
    id: 95,
    q: "What must be done before removing the transmission from a front-wheel-drive vehicle with a transaxle?",
    options: [
      "A) Remove the rear axle assembly",
      "B) Support the engine, remove axle shafts or disconnect them, and remove subframe bolts if required",
      "C) Remove the fuel tank",
      "D) Disconnect the exhaust at the manifold only"
    ],
    answer: 1,
    explanation: "On front-wheel-drive vehicles, the engine must be supported since the transaxle provides structural support. The CV axle shafts must be removed or disconnected from the transaxle. The subframe or cradle may need to be lowered or removed depending on the vehicle design for adequate clearance.",
    diagram: ""
  },
  {
    id: 96,
    q: "What tool is used to measure transmission end play?",
    options: [
      "A) A torque wrench",
      "B) A dial indicator",
      "C) A vacuum gauge",
      "D) A scan tool"
    ],
    answer: 1,
    explanation: "A dial indicator is the standard tool for measuring transmission end play. It is mounted to the case and the plunger is placed against the input shaft or drum. The shaft or drum is pushed and pulled to measure total axial movement, which is the end play. This measurement determines the selective thrust washer needed.",
    diagram: ""
  },
  {
    id: 97,
    q: "During reassembly, new clutch friction plates should be soaked in what before installation?",
    options: [
      "A) Engine oil",
      "B) Clean ATF of the correct type for at least 30 minutes",
      "C) Brake fluid",
      "D) Water"
    ],
    answer: 1,
    explanation: "New clutch friction plates must be pre-soaked in clean ATF of the correct type for at least 30 minutes (or per manufacturer instructions) before installation. This saturates the friction material and prevents the clutch from burning on initial engagement. Dry plates will glaze and fail prematurely.",
    diagram: ""
  },
  {
    id: 98,
    q: "What should be checked on the flexplate before reinstalling the transmission?",
    options: [
      "A) Flexplate runout, cracks, and ring gear tooth condition",
      "B) The flexplate paint color",
      "C) Nothing; flexplates never fail",
      "D) Only the number of bolt holes"
    ],
    answer: 0,
    explanation: "The flexplate should be inspected for cracks (especially around bolt holes), ring gear tooth damage, and runout. Excessive flexplate runout can cause torque converter seal leaks, vibration, and abnormal wear. A cracked flexplate must be replaced to avoid catastrophic failure during operation.",
    diagram: ""
  },
  {
    id: 99,
    q: "When inspecting a one-way (overrunning) clutch during overhaul, what should the technician check?",
    options: [
      "A) That it locks in one direction and freewheels in the other with no roughness or slipping",
      "B) That it spins freely in both directions",
      "C) That it is locked in both directions",
      "D) Only that the clutch springs are present"
    ],
    answer: 0,
    explanation: "A one-way clutch must lock firmly in one rotational direction and freewheel smoothly in the opposite direction. The technician should check for worn sprags or rollers, damaged inner and outer races, and any roughness during rotation. A slipping one-way clutch will cause shift quality and engine braking issues.",
    diagram: ""
  },
  {
    id: 100,
    q: "After installing a rebuilt transmission, the vehicle should be road tested. What should the technician verify during the road test?",
    options: [
      "A) Only that the vehicle moves forward",
      "B) All shift points, shift quality, TCC engagement, noise levels, fluid leaks, and proper operation in all ranges",
      "C) Only the speedometer accuracy",
      "D) That the radio works properly"
    ],
    answer: 1,
    explanation: "A thorough post-installation road test should verify smooth engagement in all ranges, correct shift timing and quality for all gears, proper TCC lockup, absence of abnormal noise or vibration, and no fluid leaks. The technician should check operation under various throttle conditions and confirm all DTCs are clear.",
    diagram: ""
  }
];
