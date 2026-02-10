const questionsA8 = [
  // =============================================
  // GENERAL DIAGNOSIS (Questions 1–24)
  // =============================================
  {
    id: 1,
    q: "A vehicle has white smoke coming from the exhaust that does not clear after the engine reaches operating temperature. What is the MOST likely cause?",
    options: [
      "A) Rich air-fuel mixture",
      "B) Coolant leaking into the combustion chamber",
      "C) Worn piston rings",
      "D) Leaking fuel injector"
    ],
    answer: 1,
    explanation: "Persistent white smoke after warm-up indicates coolant entering the combustion chamber, typically from a blown head gasket, cracked cylinder head, or cracked block. Steam from coolant produces thick white smoke. A rich mixture causes black smoke, and worn rings cause blue smoke.",
    diagram: ""
  },
  {
    id: 2,
    q: "Blue smoke from the exhaust during deceleration is MOST likely caused by:",
    options: [
      "A) Worn piston rings",
      "B) Leaking valve stem seals",
      "C) A blown head gasket",
      "D) An overly rich fuel mixture"
    ],
    answer: 1,
    explanation: "Blue smoke on deceleration typically indicates worn or hardened valve stem seals. During deceleration, high intake manifold vacuum pulls oil past the seals and into the combustion chamber. Worn piston rings usually produce blue smoke under acceleration or load conditions.",
    diagram: ""
  },
  {
    id: 3,
    q: "A vacuum gauge connected to the intake manifold reads a steady 17 in. Hg at idle. This reading indicates:",
    options: [
      "A) Normal engine operation at sea level",
      "B) A vacuum leak is present",
      "C) Late ignition or valve timing",
      "D) A restricted exhaust system"
    ],
    answer: 2,
    explanation: "Normal intake manifold vacuum at sea level is approximately 17–21 in. Hg at idle. A steady reading of 17 in. Hg is on the low end and most likely indicates late ignition timing or late valve timing. A vacuum leak would produce a lower, possibly fluctuating reading.",
    diagram: ""
  },
  {
    id: 4,
    q: "Technician A says a compression test should be performed with the throttle held wide open. Technician B says all spark plugs should be removed before performing the test. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. The throttle must be held wide open to allow maximum airflow into the cylinders for an accurate reading. All spark plugs should be removed so the engine cranks at a uniform speed and other cylinders do not create back-pressure that could affect results.",
    diagram: ""
  },
  {
    id: 5,
    q: "A cylinder leak-down test shows 40% leakage with air heard at the tailpipe. What is the MOST likely cause?",
    options: [
      "A) Blown head gasket",
      "B) Intake valve not sealing",
      "C) Exhaust valve not sealing",
      "D) Worn piston rings"
    ],
    answer: 2,
    explanation: "Air escaping from the tailpipe during a leak-down test indicates the exhaust valve is not sealing properly. The air bypasses the exhaust valve and exits through the exhaust system. A leaking intake valve would cause air at the throttle body, and worn rings cause air in the crankcase.",
    diagram: ""
  },
  {
    id: 6,
    q: "During a power balance test on a four-cylinder engine, disabling cylinder #3 causes no RPM drop. This indicates:",
    options: [
      "A) Cylinder #3 is the strongest cylinder",
      "B) Cylinder #3 is not contributing to engine power",
      "C) The ignition system is functioning normally",
      "D) The fuel injector for cylinder #3 is stuck open"
    ],
    answer: 1,
    explanation: "If disabling a cylinder causes no RPM drop, that cylinder was not contributing power before it was disabled. This could be caused by a misfire, no compression, a faulty injector, or a bad spark plug. A strong cylinder would cause a noticeable RPM drop when disabled.",
    diagram: ""
  },
  {
    id: 7,
    q: "A scan tool shows a short-term fuel trim (STFT) of +25% at idle. This indicates the engine is running:",
    options: [
      "A) Rich and the PCM is subtracting fuel",
      "B) Lean and the PCM is adding fuel",
      "C) At the correct air-fuel ratio",
      "D) In open loop mode"
    ],
    answer: 1,
    explanation: "A positive short-term fuel trim of +25% means the PCM is adding 25% more fuel than the base fuel map calls for. This indicates the engine is running lean, and the PCM is compensating by adding fuel. Common causes include vacuum leaks, low fuel pressure, or a dirty MAF sensor.",
    diagram: ""
  },
  {
    id: 8,
    q: "Freeze frame data is captured by the PCM when:",
    options: [
      "A) The engine is first started",
      "B) A diagnostic trouble code (DTC) is set",
      "C) The ignition is turned off",
      "D) The vehicle exceeds 60 mph"
    ],
    answer: 1,
    explanation: "Freeze frame data is a snapshot of engine operating conditions at the exact moment a DTC is stored. It includes parameters such as RPM, coolant temperature, vehicle speed, fuel trim, and engine load. This data helps technicians replicate the conditions under which the fault occurred.",
    diagram: ""
  },
  {
    id: 9,
    q: "A rhythmic knocking noise that increases with engine RPM is MOST likely caused by:",
    options: [
      "A) Worn main bearings",
      "B) A cracked flexplate",
      "C) Piston slap",
      "D) A worn connecting rod bearing"
    ],
    answer: 3,
    explanation: "A rhythmic knocking that follows engine RPM is commonly caused by a worn connecting rod bearing. The noise is produced once per crankshaft revolution on the affected cylinder. Main bearing knock is typically a heavier, duller thud. Piston slap is usually most noticeable when the engine is cold.",
    diagram: ""
  },
  {
    id: 10,
    q: "A vacuum gauge needle fluctuates rapidly between 14 and 19 in. Hg at idle. This MOST likely indicates:",
    options: [
      "A) A restricted exhaust",
      "B) Worn valve guides",
      "C) Late valve timing",
      "D) A sticking valve"
    ],
    answer: 1,
    explanation: "A rapidly fluctuating vacuum gauge needle at idle often indicates worn valve guides allowing inconsistent valve seating. The fluctuation increases with RPM. A sticking valve causes an intermittent drop at regular intervals, while a restricted exhaust causes vacuum to gradually decrease at higher RPM.",
    diagram: ""
  },
  {
    id: 11,
    q: "All of the following can cause black exhaust smoke EXCEPT:",
    options: [
      "A) A stuck-open fuel injector",
      "B) Excessive fuel pressure",
      "C) A restricted air filter",
      "D) A leaking vacuum hose"
    ],
    answer: 3,
    explanation: "A leaking vacuum hose causes a lean condition, not a rich one. Black smoke indicates an excessively rich air-fuel mixture. A stuck-open injector, excessive fuel pressure, and a restricted air filter all cause or contribute to a rich condition that produces black exhaust smoke.",
    diagram: ""
  },
  {
    id: 12,
    q: "A technician notices a sweet smell from the exhaust and the coolant level is low. The MOST likely cause is:",
    options: [
      "A) A rich fuel mixture",
      "B) An internal coolant leak",
      "C) A leaking heater core",
      "D) A faulty thermostat"
    ],
    answer: 1,
    explanation: "A sweet smell from the exhaust combined with low coolant indicates coolant is entering the combustion chamber through an internal leak. Common causes include a blown head gasket, cracked head, or cracked block. A heater core leak would produce a sweet smell inside the cabin, not from the tailpipe.",
    diagram: ""
  },
  {
    id: 13,
    q: "Technician A says a relative compression test can be performed using a current probe on the battery cable. Technician B says a relative compression test compares cranking amperage between cylinders. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. A relative compression test uses a current probe on the battery cable to measure cranking amperage. Each cylinder draws more current on its compression stroke. By comparing the amperage patterns between cylinders, a weak cylinder can be identified quickly without removing spark plugs.",
    diagram: ""
  },
  {
    id: 14,
    q: "An engine has a steady vacuum reading of 10 in. Hg at idle. The MOST likely cause is:",
    options: [
      "A) A clogged catalytic converter",
      "B) Severely retarded ignition timing",
      "C) A large vacuum leak",
      "D) Worn piston rings"
    ],
    answer: 2,
    explanation: "A steady but very low vacuum reading of 10 in. Hg at idle typically indicates a large vacuum leak, such as a disconnected or cracked vacuum hose, a leaking intake manifold gasket, or a stuck-open brake booster valve. A restricted exhaust would show vacuum rising then dropping as RPM increases.",
    diagram: ""
  },
  {
    id: 15,
    q: "A scan tool indicates long-term fuel trim (LTFT) at -18% at idle and at cruise. This condition indicates:",
    options: [
      "A) The engine is running lean",
      "B) The oxygen sensor is biased lean",
      "C) The engine is running rich and the PCM is subtracting fuel",
      "D) The MAF sensor is reading too low"
    ],
    answer: 2,
    explanation: "A negative long-term fuel trim of -18% means the PCM is consistently subtracting fuel, indicating the engine is running rich. Causes include a leaking fuel injector, excessive fuel pressure, or a contaminated MAF sensor reading higher than actual airflow. The PCM compensates by reducing injector pulse width.",
    diagram: ""
  },
  {
    id: 16,
    q: "During a visual inspection, oil is found in the coolant. Which component failure is MOST likely?",
    options: [
      "A) Valve cover gasket",
      "B) Head gasket",
      "C) Oil pan gasket",
      "D) Rear main seal"
    ],
    answer: 1,
    explanation: "Oil in the coolant most commonly results from a head gasket failure between an oil passage and a coolant passage. An oil cooler failure can also cause this. Valve cover, oil pan, and rear main seal leaks cause external oil leaks and would not introduce oil into the cooling system.",
    diagram: ""
  },
  {
    id: 17,
    q: "An engine misfires only under load. Compression and fuel pressure are within specifications. The MOST likely cause is:",
    options: [
      "A) A faulty ignition coil breaking down under load",
      "B) A clogged air filter",
      "C) Low idle speed",
      "D) A stuck-open thermostat"
    ],
    answer: 0,
    explanation: "An ignition coil that breaks down under load is a common cause of misfire only during acceleration or heavy load. The increased cylinder pressure requires higher secondary voltage to fire the spark plug. A weak coil may fire at idle but fail under load when voltage demand rises.",
    diagram: ""
  },
  {
    id: 18,
    q: "A vacuum gauge needle slowly drops from 21 to 12 in. Hg when the engine is held at 2500 RPM. This indicates:",
    options: [
      "A) A vacuum leak",
      "B) A restricted exhaust system",
      "C) Late ignition timing",
      "D) Worn piston rings"
    ],
    answer: 1,
    explanation: "A vacuum reading that gradually decreases at a steady elevated RPM indicates a restricted exhaust. Back-pressure builds up in the exhaust system and pushes back against the pistons, reducing intake vacuum. Common causes include a clogged catalytic converter or a collapsed inner exhaust pipe wall.",
    diagram: ""
  },
  {
    id: 19,
    q: "Which scan tool data parameter is MOST useful for identifying a cylinder-specific misfire?",
    options: [
      "A) Engine coolant temperature",
      "B) Misfire count per cylinder",
      "C) Intake air temperature",
      "D) Mass airflow rate"
    ],
    answer: 1,
    explanation: "The misfire count per cylinder (or misfire history) parameter directly identifies which cylinder is misfiring and how frequently. The PCM uses crankshaft position sensor data to detect variations in crankshaft speed that indicate misfires and logs them on a per-cylinder basis.",
    diagram: ""
  },
  {
    id: 20,
    q: "Technician A says a wet compression test is performed by adding a small amount of oil to each cylinder. Technician B says improved readings during a wet compression test confirm worn piston rings. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. A wet compression test adds a small amount of oil to the cylinder to temporarily seal the piston rings. If compression readings improve significantly, it confirms the rings are worn or not sealing. If readings remain low, the valves or head gasket are the likely cause.",
    diagram: ""
  },
  {
    id: 21,
    q: "An engine has a ticking noise that increases with RPM and is loudest near the valve cover. The MOST likely cause is:",
    options: [
      "A) Worn main bearings",
      "B) Excessive valve lash or a collapsed lifter",
      "C) Piston pin knock",
      "D) Detonation"
    ],
    answer: 1,
    explanation: "A ticking noise near the valve cover that follows engine speed is typically caused by excessive valve lash, a worn rocker arm, or a collapsed hydraulic lifter. These components are located directly beneath the valve cover. Main bearing and piston pin noises originate from the lower end of the engine.",
    diagram: ""
  },
  {
    id: 22,
    q: "A customer complains of a sulfur (rotten egg) smell from the exhaust. The MOST likely cause is:",
    options: [
      "A) A lean air-fuel mixture",
      "B) An excessively rich air-fuel mixture",
      "C) A coolant leak into the combustion chamber",
      "D) Worn piston rings allowing oil burning"
    ],
    answer: 1,
    explanation: "A sulfur or rotten egg smell from the exhaust is caused by hydrogen sulfide produced when the catalytic converter processes an overly rich exhaust mixture. The excess fuel contains sulfur compounds that are not fully converted. Correcting the rich condition typically eliminates the odor.",
    diagram: ""
  },
  {
    id: 23,
    q: "A cylinder leak-down test shows 5% leakage on all cylinders. This indicates:",
    options: [
      "A) Worn piston rings on all cylinders",
      "B) Normal engine condition",
      "C) A cracked engine block",
      "D) Worn valve seats"
    ],
    answer: 1,
    explanation: "A leak-down percentage of 5% or less on all cylinders is considered normal and indicates the engine is in good mechanical condition. Up to about 10–15% is generally acceptable on a used engine. Higher or uneven readings suggest specific component wear or damage in those cylinders.",
    diagram: ""
  },
  {
    id: 24,
    q: "A scan tool shows Mode $06 data with a failing cylinder contribution test on cylinder #2. This MOST likely indicates:",
    options: [
      "A) An oxygen sensor malfunction",
      "B) A misfire on cylinder #2",
      "C) A faulty PCM",
      "D) Low battery voltage"
    ],
    answer: 1,
    explanation: "Mode $06 provides test results for individual OBD II monitor components. A failing cylinder contribution test means cylinder #2 is not producing adequate power compared to other cylinders. This is a precursor to setting a misfire DTC and could be caused by ignition, fuel, or compression issues.",
    diagram: ""
  },

  // =============================================
  // IGNITION SYSTEM (Questions 25–40)
  // =============================================
  {
    id: 25,
    q: "An engine cranks but will not start. There is no spark at any cylinder. All of the following could be the cause EXCEPT:",
    options: [
      "A) A faulty crankshaft position sensor",
      "B) A failed ignition control module",
      "C) A broken timing belt",
      "D) A clogged fuel filter"
    ],
    answer: 3,
    explanation: "A clogged fuel filter would cause a no-fuel condition, not a no-spark condition. A faulty crankshaft position sensor, failed ignition module, and a broken timing belt (preventing CMP signal or CKP correlation) can all result in a complete loss of spark to every cylinder.",
    diagram: ""
  },
  {
    id: 26,
    q: "A misfire occurs on cylinder #4 only. The spark plug wire is moved from cylinder #4 to cylinder #2. The misfire now occurs on cylinder #2. The cause is:",
    options: [
      "A) A faulty fuel injector on cylinder #4",
      "B) A defective spark plug wire",
      "C) Low compression on cylinder #4",
      "D) A faulty coil pack for cylinder #4"
    ],
    answer: 1,
    explanation: "When the spark plug wire is moved and the misfire follows the wire to a different cylinder, the wire itself is the problem. If the misfire stayed on cylinder #4, the fault would be related to the injector, compression, or other cylinder-specific component rather than the ignition secondary circuit.",
    diagram: ""
  },
  {
    id: 27,
    q: "Which spark plug condition indicates a lean air-fuel mixture?",
    options: [
      "A) Black, sooty deposits on the electrode",
      "B) White or light gray electrode with blistering",
      "C) Oily, wet deposits on the electrode",
      "D) Light tan or brown deposits on the electrode"
    ],
    answer: 1,
    explanation: "A white or light gray spark plug electrode with possible blistering indicates a lean air-fuel mixture causing high combustion temperatures. Black sooty deposits indicate a rich mixture. Oily deposits indicate oil consumption. Light tan or brown deposits indicate a normal-running engine condition.",
    diagram: ""
  },
  {
    id: 28,
    q: "Technician A says a coil-on-plug (COP) ignition system does not use spark plug wires. Technician B says a faulty COP coil can cause a single-cylinder misfire. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. In a coil-on-plug system, each ignition coil mounts directly on top of its spark plug, eliminating the need for spark plug wires. Because each cylinder has its own coil, a failure of one COP coil will cause a misfire on only that specific cylinder.",
    diagram: ""
  },
  {
    id: 29,
    q: "A crankshaft position (CKP) sensor signal is being tested with an oscilloscope. The signal shows evenly spaced pulses with one gap. The gap represents:",
    options: [
      "A) A damaged reluctor wheel tooth",
      "B) The reference point for cylinder #1 TDC",
      "C) An electrical short in the sensor wiring",
      "D) A failing crankshaft position sensor"
    ],
    answer: 1,
    explanation: "The gap in the CKP reluctor wheel signal pattern is a designed missing tooth that serves as a reference point. The PCM uses this gap to identify crankshaft position and calculate top dead center for synchronizing ignition and fuel injection events. A damaged tooth would create an unexpected irregularity.",
    diagram: ""
  },
  {
    id: 30,
    q: "Secondary ignition voltage is higher than normal on one cylinder. The MOST likely cause is:",
    options: [
      "A) A shorted spark plug wire",
      "B) A fouled spark plug",
      "C) A wide spark plug gap",
      "D) Low compression on that cylinder"
    ],
    answer: 2,
    explanation: "A wider-than-normal spark plug gap requires higher voltage to bridge the gap and create a spark. A fouled plug or shorted wire would reduce the required voltage. Low compression reduces the cylinder pressure and actually lowers the required firing voltage. A wide gap increases resistance to spark formation.",
    diagram: ""
  },
  {
    id: 31,
    q: "An engine has an intermittent misfire that occurs only when it rains or in high humidity. The MOST likely cause is:",
    options: [
      "A) A faulty fuel pump",
      "B) Cracked spark plug wire insulation or coil boot",
      "C) A dirty air filter",
      "D) Low fuel pressure"
    ],
    answer: 1,
    explanation: "Moisture-related intermittent misfires are typically caused by cracked spark plug wire insulation, deteriorated coil boots, or cracked distributor caps. Moisture bridges the gap in the cracked insulation and provides an alternate path for the high-voltage secondary ignition signal to arc to ground.",
    diagram: ""
  },
  {
    id: 32,
    q: "The primary ignition circuit includes all of the following components EXCEPT:",
    options: [
      "A) The ignition control module",
      "B) The spark plug",
      "C) The ignition coil primary winding",
      "D) The crankshaft position sensor"
    ],
    answer: 1,
    explanation: "The spark plug is part of the secondary ignition circuit. The primary circuit includes the battery, ignition switch, ignition control module, CKP sensor (or distributor pickup), primary coil winding, and related wiring. The secondary circuit includes the coil secondary winding, spark plug wires, and spark plugs.",
    diagram: ""
  },
  {
    id: 33,
    q: "A camshaft position (CMP) sensor is used by the PCM primarily to:",
    options: [
      "A) Control idle speed",
      "B) Determine which cylinder is on its compression stroke for sequential fuel injection",
      "C) Measure engine oil pressure",
      "D) Regulate alternator output"
    ],
    answer: 1,
    explanation: "The CMP sensor identifies camshaft position so the PCM can determine which cylinder is on its compression stroke. This is essential for sequential fuel injection timing, which requires injecting fuel only into the cylinder that is about to enter the intake stroke. It also aids ignition timing in some systems.",
    diagram: ""
  },
  {
    id: 34,
    q: "Ignition timing that is too far advanced will cause:",
    options: [
      "A) Black exhaust smoke",
      "B) Engine detonation (knock)",
      "C) Rich fuel mixture",
      "D) Low exhaust temperatures"
    ],
    answer: 1,
    explanation: "Excessively advanced ignition timing causes the air-fuel mixture to ignite too early, before the piston reaches TDC. This creates high cylinder pressure and temperatures that can cause detonation or spark knock. The PCM uses a knock sensor to detect this and retard timing to prevent engine damage.",
    diagram: ""
  },
  {
    id: 35,
    q: "Technician A says a no-start condition with no CKP sensor signal could be caused by a damaged reluctor wheel. Technician B says an open in the CKP sensor wiring can also cause a no-start. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. A damaged or missing reluctor wheel will not generate the signal needed by the PCM to fire the ignition and injectors, causing a no-start. Similarly, an open circuit in the CKP sensor wiring prevents the signal from reaching the PCM, producing the same no-start result.",
    diagram: ""
  },
  {
    id: 36,
    q: "An oscilloscope pattern of the secondary ignition shows a very short spark duration (burn time). The MOST likely cause is:",
    options: [
      "A) High secondary resistance",
      "B) A lean air-fuel mixture",
      "C) A rich air-fuel mixture or fouled spark plug",
      "D) A wide spark plug gap"
    ],
    answer: 2,
    explanation: "A short spark duration indicates low resistance in the secondary circuit. A rich mixture or a fouled spark plug provides additional conductive paths across the plug gap, reducing resistance and shortening burn time. A lean mixture or high resistance increases burn time because the voltage must sustain longer.",
    diagram: ""
  },
  {
    id: 37,
    q: "What is the purpose of the ignition control module (ICM)?",
    options: [
      "A) To regulate fuel pressure",
      "B) To switch the primary ignition circuit on and off",
      "C) To generate secondary voltage directly",
      "D) To control the alternator output"
    ],
    answer: 1,
    explanation: "The ignition control module switches the primary circuit current on and off at the correct time. When the ICM turns off the primary current, the magnetic field in the coil collapses, inducing high secondary voltage. In modern systems, the PCM often controls this function directly through coil drivers.",
    diagram: ""
  },
  {
    id: 38,
    q: "A spark plug has an iridium tip with a gap specification of 0.044 inch. The measured gap is 0.065 inch. The technician should:",
    options: [
      "A) Install the plug as-is since iridium plugs are self-adjusting",
      "B) Replace the spark plug with a new one",
      "C) Use a gapping tool to close the gap to specification",
      "D) Widen the gap further for better ignition"
    ],
    answer: 1,
    explanation: "Iridium and platinum spark plugs should not be gapped with a conventional tool because the delicate precious-metal tip can be damaged or broken. If the gap is out of specification, the plug should be replaced with a new one gapped correctly from the factory to prevent misfires.",
    diagram: ""
  },
  {
    id: 39,
    q: "An engine with a waste spark ignition system misfires on cylinders 1 and 4. The MOST likely cause is:",
    options: [
      "A) A faulty fuel injector on cylinder #1",
      "B) A faulty ignition coil that fires the #1/#4 companion pair",
      "C) Low compression on cylinder #4 only",
      "D) A faulty camshaft position sensor"
    ],
    answer: 1,
    explanation: "In a waste spark system, one coil fires two companion cylinders simultaneously. If the coil serving the #1/#4 pair fails, both cylinders lose spark. A faulty injector or low compression would affect only one cylinder. This paired failure pattern is a key diagnostic indicator of a waste spark coil issue.",
    diagram: ""
  },
  {
    id: 40,
    q: "A vehicle has a DTC P0335 (Crankshaft Position Sensor A Circuit Malfunction). All of the following should be checked EXCEPT:",
    options: [
      "A) CKP sensor wiring and connector",
      "B) CKP sensor air gap",
      "C) Reluctor wheel condition",
      "D) Throttle position sensor voltage"
    ],
    answer: 3,
    explanation: "A P0335 DTC relates specifically to the crankshaft position sensor circuit. The technician should inspect the CKP sensor wiring, connector, air gap, and reluctor wheel for damage. The throttle position sensor is unrelated to the CKP circuit and would not cause this code to set.",
    diagram: ""
  },

  // =============================================
  // FUEL, AIR INDUCTION & EXHAUST (Questions 41–58)
  // =============================================
  {
    id: 41,
    q: "A fuel pressure test on a port fuel-injected engine shows 25 psi. The specification is 40–45 psi. The MOST likely cause is:",
    options: [
      "A) A restricted fuel return line",
      "B) A weak fuel pump or clogged fuel filter",
      "C) A faulty fuel pressure regulator stuck closed",
      "D) Leaking fuel injectors"
    ],
    answer: 1,
    explanation: "Low fuel pressure is most commonly caused by a weak fuel pump or a clogged fuel filter restricting fuel flow. A restricted return line or stuck-closed regulator would cause high pressure. Leaking injectors would cause a slight drop in pressure but typically not a drop to 25 psi during operation.",
    diagram: ""
  },
  {
    id: 42,
    q: "Fuel pressure drops rapidly after the engine is shut off. The MOST likely cause is:",
    options: [
      "A) A faulty fuel pressure regulator or leaking injector",
      "B) A clogged fuel filter",
      "C) A restricted fuel return line",
      "D) A faulty MAF sensor"
    ],
    answer: 0,
    explanation: "Fuel pressure should hold for an extended period after engine shutdown. A rapid pressure drop indicates a leak in the system, commonly from a faulty fuel pressure regulator leaking fuel into the intake manifold or a leaking fuel injector allowing fuel into the cylinder. Both prevent pressure retention.",
    diagram: ""
  },
  {
    id: 43,
    q: "A dirty throttle body can cause all of the following symptoms EXCEPT:",
    options: [
      "A) Rough or unstable idle",
      "B) Higher-than-normal idle speed",
      "C) Stalling at idle",
      "D) Excessive exhaust back-pressure"
    ],
    answer: 3,
    explanation: "A dirty throttle body restricts airflow at the throttle plate, causing rough idle, stalling, or erratic idle speed. Carbon buildup changes the effective opening size. However, it does not cause excessive exhaust back-pressure, which is caused by restrictions in the exhaust system such as a clogged catalytic converter.",
    diagram: ""
  },
  {
    id: 44,
    q: "A MAF sensor reads lower airflow than actual. This will cause the engine to run:",
    options: [
      "A) Rich because the PCM adds too much fuel",
      "B) Lean because the PCM delivers insufficient fuel",
      "C) At the correct air-fuel ratio",
      "D) With advanced ignition timing only"
    ],
    answer: 1,
    explanation: "If the MAF sensor underreports airflow, the PCM calculates a fuel delivery amount based on less air than is actually entering the engine. This results in a lean condition because not enough fuel is injected. Common causes of low MAF readings include a contaminated sensing element or air leaks after the MAF.",
    diagram: ""
  },
  {
    id: 45,
    q: "Technician A says a MAP sensor measures intake manifold pressure. Technician B says a MAP sensor can be used in place of a MAF sensor on speed-density fuel injection systems. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. A MAP sensor measures manifold absolute pressure, which reflects engine load and vacuum. In speed-density systems, the PCM uses MAP sensor data along with RPM, air temperature, and volumetric efficiency tables to calculate airflow, eliminating the need for a MAF sensor.",
    diagram: ""
  },
  {
    id: 46,
    q: "An engine surges at idle. The fuel pressure is within specification. A propane enrichment test causes the idle to smooth out. The MOST likely cause is:",
    options: [
      "A) A rich fuel condition",
      "B) A vacuum leak",
      "C) High fuel pressure",
      "D) A faulty ignition coil"
    ],
    answer: 1,
    explanation: "If adding propane (fuel) smooths the idle, the engine is running lean. Since fuel pressure is normal, the lean condition is most likely caused by a vacuum leak allowing unmetered air into the intake manifold. The added propane compensates for the extra air, confirming the lean condition from the vacuum leak.",
    diagram: ""
  },
  {
    id: 47,
    q: "A fuel injector is electrically tested and found to have infinite resistance. This means the injector:",
    options: [
      "A) Is functioning normally",
      "B) Has a short circuit",
      "C) Has an open circuit and must be replaced",
      "D) Has low resistance and is partially shorted"
    ],
    answer: 2,
    explanation: "Infinite resistance indicates an open circuit within the injector coil winding, meaning no current can flow through it and the injector cannot open. Normal injector resistance varies by type but is typically between 2 and 16 ohms. An open injector will cause a dead cylinder and must be replaced.",
    diagram: ""
  },
  {
    id: 48,
    q: "An intake manifold vacuum leak will cause all of the following EXCEPT:",
    options: [
      "A) Rough idle",
      "B) A lean DTC",
      "C) Positive fuel trim values",
      "D) High fuel pressure readings"
    ],
    answer: 3,
    explanation: "A vacuum leak introduces unmetered air, causing a lean condition with rough idle, lean DTCs, and positive fuel trims as the PCM adds fuel to compensate. However, a vacuum leak does not affect fuel pressure readings because the fuel pressure regulator operates on fuel rail pressure independent of the leak.",
    diagram: ""
  },
  {
    id: 49,
    q: "A restricted exhaust system can be confirmed by:",
    options: [
      "A) Checking fuel pressure at idle",
      "B) Measuring exhaust back-pressure with a gauge",
      "C) Testing battery voltage",
      "D) Inspecting the air filter"
    ],
    answer: 1,
    explanation: "An exhaust back-pressure test using a pressure gauge installed in the exhaust before the suspected restriction is the most direct method. Normal back-pressure at 2500 RPM should be below 1.5 psi. Excessive readings confirm a restricted catalytic converter, muffler, or collapsed exhaust pipe.",
    diagram: ""
  },
  {
    id: 50,
    q: "Technician A says a turbocharger uses exhaust gases to spin a turbine that compresses intake air. Technician B says a wastegate controls maximum boost pressure. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. A turbocharger uses an exhaust-driven turbine connected by a shaft to a compressor wheel that pressurizes intake air. The wastegate is a bypass valve that diverts exhaust gases away from the turbine when boost pressure reaches the desired limit, preventing over-boost damage.",
    diagram: ""
  },
  {
    id: 51,
    q: "A catalytic converter efficiency test using a scan tool shows the downstream O2 sensor signal closely mimics the upstream O2 sensor. This indicates:",
    options: [
      "A) A properly functioning catalytic converter",
      "B) A deteriorated or failing catalytic converter",
      "C) A faulty upstream O2 sensor",
      "D) Normal closed-loop fuel control"
    ],
    answer: 1,
    explanation: "When the catalytic converter is working properly, the downstream O2 sensor should show a relatively steady voltage because the converter stores and releases oxygen. If the downstream sensor mimics the upstream switching pattern, the converter is no longer effectively processing exhaust gases.",
    diagram: ""
  },
  {
    id: 52,
    q: "A returnless fuel system maintains fuel pressure by:",
    options: [
      "A) A mechanical fuel pressure regulator in the engine compartment",
      "B) The PCM controlling fuel pump speed or a regulator at the fuel tank",
      "C) A vacuum-referenced regulator on the fuel rail",
      "D) Gravity feed from an elevated fuel tank"
    ],
    answer: 1,
    explanation: "In a returnless fuel system, fuel pressure is regulated at or near the fuel tank, either by a regulator in the tank module or by the PCM controlling fuel pump voltage and speed through the fuel pump driver module. This eliminates the return line and reduces underhood fuel vapor and temperatures.",
    diagram: ""
  },
  {
    id: 53,
    q: "An engine has a whistling noise that increases with RPM and stops when spraying carburetor cleaner on the intake manifold gasket area. The cause is:",
    options: [
      "A) A faulty PCV valve",
      "B) An intake manifold gasket vacuum leak",
      "C) A stuck-open EGR valve",
      "D) A faulty idle air control valve"
    ],
    answer: 1,
    explanation: "A whistling noise from the intake area that changes when sealant or cleaner is sprayed on the gasket surface indicates an intake manifold vacuum leak. The cleaner temporarily seals the leak, changing or stopping the noise. This confirms the gasket as the leak source and the intake manifold gasket should be replaced.",
    diagram: ""
  },
  {
    id: 54,
    q: "A supercharger differs from a turbocharger in that a supercharger is driven by:",
    options: [
      "A) Exhaust gas pressure",
      "B) An electric motor only",
      "C) A belt connected to the crankshaft",
      "D) Engine oil pressure"
    ],
    answer: 2,
    explanation: "A supercharger is mechanically driven by a belt connected to the engine crankshaft, providing boost proportional to engine RPM with no lag. A turbocharger is driven by exhaust gas flow. The supercharger draws engine power through the belt drive but provides immediate throttle response without turbo lag.",
    diagram: ""
  },
  {
    id: 55,
    q: "A port fuel injector is found to be dripping fuel with the engine off and key on. The MOST likely result is:",
    options: [
      "A) A lean condition on that cylinder",
      "B) Fuel washing of the cylinder wall and hard starting",
      "C) Increased fuel economy",
      "D) Higher-than-normal fuel pressure"
    ],
    answer: 1,
    explanation: "A dripping or leaking fuel injector allows raw fuel to enter the cylinder when the engine is off, washing oil from the cylinder wall and pooling in the combustion chamber. This causes hard starting due to a flooded condition, potential hydro-lock risk, and accelerated cylinder wall and ring wear.",
    diagram: ""
  },
  {
    id: 56,
    q: "A fuel pump amperage draw test shows 12 amps. The specification is 4–7 amps. This indicates:",
    options: [
      "A) A weak fuel pump",
      "B) A restricted fuel filter or kinked fuel line causing the pump to work harder",
      "C) Normal operation under load",
      "D) A faulty fuel pressure regulator"
    ],
    answer: 1,
    explanation: "Excessive fuel pump amperage indicates the pump motor is working harder than normal, typically due to a restricted fuel filter, kinked fuel line, or mechanical binding within the pump itself. A weak pump would often draw less current. Normal amperage for most electric fuel pumps is between 4 and 7 amps.",
    diagram: ""
  },
  {
    id: 57,
    q: "A vehicle with a GDI (gasoline direct injection) system has excessive carbon buildup on the intake valves. This occurs because:",
    options: [
      "A) Fuel pressure is too high",
      "B) Fuel is injected directly into the cylinder and does not wash the intake valves",
      "C) The PCV system is not functioning",
      "D) The air filter is clogged"
    ],
    answer: 1,
    explanation: "In GDI systems, fuel is sprayed directly into the combustion chamber rather than onto the intake valves as in port injection. Without fuel washing over the intake valves, oil vapors from the PCV system and crankcase ventilation accumulate as carbon deposits on the valve backs over time.",
    diagram: ""
  },
  {
    id: 58,
    q: "A vehicle fails an emissions test for high NOx. Exhaust back-pressure is normal and the EGR system is functioning. A possible cause is:",
    options: [
      "A) A rich fuel mixture",
      "B) An engine that is running too hot due to a cooling system issue",
      "C) A stuck-open PCV valve",
      "D) A leaking EVAP system"
    ],
    answer: 1,
    explanation: "High NOx emissions result from high combustion temperatures. If the EGR is working and exhaust flow is normal, the engine may be overheating due to a faulty thermostat, low coolant, inoperative cooling fan, or restricted radiator. Elevated temperatures increase nitrogen oxide formation during combustion.",
    diagram: ""
  },

  // =============================================
  // EMISSIONS CONTROL (Questions 59–74)
  // =============================================
  {
    id: 59,
    q: "The PCV valve is pulled from the valve cover while the engine is idling. A strong vacuum is felt at the PCV valve inlet. This indicates:",
    options: [
      "A) The PCV valve and hose are functioning normally",
      "B) The PCV valve is stuck closed",
      "C) The PCV system is clogged",
      "D) The intake manifold has a vacuum leak"
    ],
    answer: 0,
    explanation: "Feeling strong vacuum at the PCV valve inlet with the engine running at idle confirms the PCV valve and hose are clear and the system is functioning properly. A stuck-closed PCV valve or clogged hose would result in little or no vacuum at the valve inlet, indicating a restriction.",
    diagram: ""
  },
  {
    id: 60,
    q: "A stuck-open EGR valve will cause:",
    options: [
      "A) Increased NOx emissions",
      "B) Rough idle or stalling",
      "C) Higher combustion temperatures",
      "D) Improved fuel economy"
    ],
    answer: 1,
    explanation: "A stuck-open EGR valve allows exhaust gas to recirculate at idle, when EGR flow is not wanted. The inert exhaust gas displaces the fresh air-fuel charge, causing a rough idle, stalling, and poor driveability. EGR should only flow during specific cruise and light load conditions, not at idle.",
    diagram: ""
  },
  {
    id: 61,
    q: "Technician A says the EVAP system prevents fuel vapors from escaping to the atmosphere. Technician B says the EVAP canister stores fuel vapors until they can be purged into the engine. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. The EVAP system captures fuel vapors from the fuel tank to prevent hydrocarbon emissions. The charcoal canister adsorbs and stores these vapors. When conditions are right, the PCM opens the purge valve to draw stored vapors into the intake manifold for combustion.",
    diagram: ""
  },
  {
    id: 62,
    q: "A DTC P0440 (EVAP System Malfunction) is set. The FIRST step in diagnosis should be:",
    options: [
      "A) Replace the charcoal canister",
      "B) Replace the purge solenoid",
      "C) Inspect the fuel cap for proper seal and damage",
      "D) Replace the fuel tank pressure sensor"
    ],
    answer: 2,
    explanation: "A P0440 is a general EVAP system malfunction code. The most common and simplest cause is a loose, damaged, or missing fuel cap. Inspecting the fuel cap for damage, proper sealing, and correct tightening is the logical and cost-effective first step before pursuing more complex EVAP system testing.",
    diagram: ""
  },
  {
    id: 63,
    q: "The secondary air injection (AIR) system pumps air into the exhaust to:",
    options: [
      "A) Increase engine power output",
      "B) Reduce HC and CO by providing oxygen for further oxidation",
      "C) Cool the exhaust system",
      "D) Increase fuel pressure"
    ],
    answer: 1,
    explanation: "The secondary air injection system pumps fresh air into the exhaust manifold or downstream of the exhaust manifold to provide oxygen for oxidizing unburned hydrocarbons (HC) and carbon monoxide (CO). It also helps the catalytic converter reach operating temperature more quickly during cold start conditions.",
    diagram: ""
  },
  {
    id: 64,
    q: "A three-way catalytic converter reduces which three pollutants?",
    options: [
      "A) HC, CO, and NOx",
      "B) CO2, O2, and HC",
      "C) NOx, CO2, and water vapor",
      "D) HC, CO2, and sulfur dioxide"
    ],
    answer: 0,
    explanation: "A three-way catalytic converter uses oxidation and reduction catalysts to convert hydrocarbons (HC), carbon monoxide (CO), and oxides of nitrogen (NOx) into harmless water vapor (H2O), carbon dioxide (CO2), and nitrogen (N2). It requires near-stoichiometric air-fuel ratio for maximum efficiency.",
    diagram: ""
  },
  {
    id: 65,
    q: "A DTC P0401 (EGR Insufficient Flow) is stored. All of the following could be the cause EXCEPT:",
    options: [
      "A) A clogged EGR passage",
      "B) A faulty EGR valve that does not open",
      "C) A disconnected vacuum hose to the EGR valve",
      "D) A stuck-open purge solenoid"
    ],
    answer: 3,
    explanation: "A P0401 indicates insufficient EGR flow. A clogged EGR passage, faulty EGR valve, or disconnected vacuum hose can all prevent proper EGR flow. A stuck-open purge solenoid is part of the EVAP system and does not affect EGR operation or flow through the EGR passages.",
    diagram: ""
  },
  {
    id: 66,
    q: "A PCV valve that is stuck closed will cause:",
    options: [
      "A) Increased crankcase pressure and possible oil leaks",
      "B) A lean air-fuel mixture",
      "C) Reduced crankcase pressure",
      "D) Lower engine oil consumption"
    ],
    answer: 0,
    explanation: "A stuck-closed PCV valve prevents crankcase vapors from being drawn into the intake manifold. Blow-by gases accumulate and increase crankcase pressure, which can push oil past seals and gaskets causing external oil leaks. It may also force oil vapors out through the breather into the air filter housing.",
    diagram: ""
  },
  {
    id: 67,
    q: "During an EVAP system smoke test, smoke is visible at the fuel filler neck area. The MOST likely cause is:",
    options: [
      "A) A faulty purge valve",
      "B) A cracked or deteriorated fuel filler neck seal or hose",
      "C) A faulty canister vent valve",
      "D) A faulty fuel tank pressure sensor"
    ],
    answer: 1,
    explanation: "A smoke test introduces smoke into the sealed EVAP system under low pressure. Smoke visible at the fuel filler neck indicates a cracked filler neck, deteriorated rubber hose, or damaged seal allowing vapors to escape. This leak would cause EVAP DTCs related to system leaks being detected.",
    diagram: ""
  },
  {
    id: 68,
    q: "The EGR system reduces NOx emissions by:",
    options: [
      "A) Adding fuel to the exhaust",
      "B) Recirculating inert exhaust gas to lower combustion temperatures",
      "C) Increasing the air-fuel ratio",
      "D) Pumping fresh air into the exhaust manifold"
    ],
    answer: 1,
    explanation: "The EGR system recirculates a measured amount of inert exhaust gas back into the intake manifold. This dilutes the incoming air-fuel mixture and absorbs heat, lowering peak combustion chamber temperatures. Since NOx formation increases with temperature, reducing combustion temperatures directly reduces NOx output.",
    diagram: ""
  },
  {
    id: 69,
    q: "Technician A says a catalytic converter can be damaged by a rich air-fuel mixture. Technician B says engine misfires can overheat and damage a catalytic converter. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. A rich mixture sends excess unburned fuel into the converter, where it oxidizes and generates extreme heat that can melt the catalyst substrate. Engine misfires send unburned air-fuel mixture into the converter with the same overheating result, potentially causing converter failure.",
    diagram: ""
  },
  {
    id: 70,
    q: "A DTC P0420 (Catalyst System Efficiency Below Threshold Bank 1) can be caused by all of the following EXCEPT:",
    options: [
      "A) A deteriorated catalytic converter",
      "B) An exhaust leak before the downstream O2 sensor",
      "C) A faulty downstream oxygen sensor",
      "D) A clogged air filter"
    ],
    answer: 3,
    explanation: "A P0420 indicates reduced catalytic converter efficiency. A deteriorated converter, exhaust leak affecting O2 sensor readings, or a faulty downstream sensor can all trigger this code. A clogged air filter restricts airflow but does not directly cause the downstream O2 sensor to indicate poor converter efficiency.",
    diagram: ""
  },
  {
    id: 71,
    q: "The EVAP canister vent valve is normally:",
    options: [
      "A) Closed and opens only during purge",
      "B) Open and closes during leak testing",
      "C) Controlled by fuel tank pressure only",
      "D) Electrically connected to the fuel pump relay"
    ],
    answer: 1,
    explanation: "The EVAP canister vent valve is normally open, allowing the canister to breathe through a fresh air filter. During EVAP leak testing, the PCM commands the vent valve closed to seal the system and monitor pressure changes. During normal purge operation, the vent valve remains open while the purge valve opens.",
    diagram: ""
  },
  {
    id: 72,
    q: "High HC emissions at idle are MOST commonly caused by:",
    options: [
      "A) A lean air-fuel mixture",
      "B) Engine misfire or incomplete combustion",
      "C) Excessive EGR flow",
      "D) Overadvanced ignition timing"
    ],
    answer: 1,
    explanation: "High hydrocarbon (HC) emissions indicate unburned or partially burned fuel exiting the exhaust. At idle, this is most commonly caused by engine misfire from faulty spark plugs, ignition components, or fuel delivery problems that prevent complete combustion. Worn engine components can also contribute.",
    diagram: ""
  },
  {
    id: 73,
    q: "A secondary air injection pump is running but no air is entering the exhaust manifold. The MOST likely cause is:",
    options: [
      "A) A faulty pump motor",
      "B) A stuck-closed check valve or air switching valve",
      "C) A clogged air filter",
      "D) A faulty PCM"
    ],
    answer: 1,
    explanation: "If the pump is running but air is not reaching the exhaust manifold, a stuck-closed check valve or air switching valve is preventing air delivery. The check valve prevents exhaust gas from entering the pump, and the switching valve directs airflow. Either component stuck closed blocks air to the exhaust.",
    diagram: ""
  },
  {
    id: 74,
    q: "A vehicle has high CO emissions. This is MOST likely caused by:",
    options: [
      "A) A lean air-fuel mixture",
      "B) A rich air-fuel mixture",
      "C) Excessive EGR flow",
      "D) A stuck-open secondary air injection valve"
    ],
    answer: 1,
    explanation: "High carbon monoxide (CO) emissions indicate an overly rich air-fuel mixture where there is insufficient oxygen for complete combustion. Causes include high fuel pressure, leaking injectors, a faulty O2 sensor, or a contaminated MAF sensor. A lean mixture would cause high HC and NOx instead.",
    diagram: ""
  },

  // =============================================
  // COMPUTERIZED ENGINE CONTROLS (Questions 75–100)
  // =============================================
  {
    id: 75,
    q: "An OBD II system is required to illuminate the MIL (check engine light) when:",
    options: [
      "A) Any sensor reads out of range",
      "B) A DTC is set that indicates an emissions-related fault",
      "C) The engine oil pressure is low",
      "D) The coolant temperature exceeds normal"
    ],
    answer: 1,
    explanation: "The MIL is required to illuminate when the OBD II system detects an emissions-related fault that could cause the vehicle to exceed 1.5 times the applicable emissions standard. The DTC is stored in the PCM memory and the MIL alerts the driver that service is needed for an emissions concern.",
    diagram: ""
  },
  {
    id: 76,
    q: "How many OBD II monitors must be ready (complete) for a 1996 and newer vehicle to pass an OBD II emissions inspection in most states?",
    options: [
      "A) All monitors must be ready",
      "B) All monitors except one non-continuous monitor may be not ready",
      "C) Only the continuous monitors must be ready",
      "D) No monitors need to be ready as long as the MIL is off"
    ],
    answer: 1,
    explanation: "Most states allow one non-continuous monitor to be not ready for 1996–2000 vehicles and one for 2001+ vehicles. However, continuous monitors (misfire, fuel system, comprehensive components) must always be ready. If too many monitors are incomplete, the vehicle fails the inspection and a drive cycle must be completed.",
    diagram: ""
  },
  {
    id: 77,
    q: "A DTC P0171 (System Too Lean Bank 1) is stored. All of the following could cause this code EXCEPT:",
    options: [
      "A) A vacuum leak on bank 1",
      "B) A dirty MAF sensor reading low",
      "C) Low fuel pressure",
      "D) A stuck-open fuel injector on bank 1"
    ],
    answer: 3,
    explanation: "A P0171 indicates a lean condition on bank 1. Vacuum leaks, a dirty MAF sensor reading low airflow, and low fuel pressure all cause lean conditions. A stuck-open fuel injector would deliver excess fuel to that cylinder, causing a rich condition rather than a lean one, so it would not trigger P0171.",
    diagram: ""
  },
  {
    id: 78,
    q: "Freeze frame data is MOST useful for:",
    options: [
      "A) Clearing stored DTCs",
      "B) Reprogramming the PCM",
      "C) Replicating the operating conditions when the DTC was set",
      "D) Testing individual actuators"
    ],
    answer: 2,
    explanation: "Freeze frame data records a snapshot of key engine parameters at the moment a DTC was stored. This information allows the technician to understand what conditions the engine was operating under when the fault occurred, helping to replicate those conditions during diagnosis and verification of the repair.",
    diagram: ""
  },
  {
    id: 79,
    q: "Technician A says clearing DTCs also resets all OBD II monitor status to not ready. Technician B says after clearing DTCs a drive cycle must be performed to reset the monitors. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. When DTCs are cleared with a scan tool, all OBD II monitor readiness flags are reset to not ready. The vehicle must then be driven through the appropriate drive cycle conditions so each monitor can run its self-test and return to a ready status.",
    diagram: ""
  },
  {
    id: 80,
    q: "The MIL flashes on and off while driving. This indicates:",
    options: [
      "A) A pending DTC that has not been confirmed",
      "B) A severe misfire that could damage the catalytic converter",
      "C) The OBD II system is performing a self-test",
      "D) A minor emissions fault"
    ],
    answer: 1,
    explanation: "A flashing MIL indicates a severe engine misfire that can cause catalytic converter overheating and damage. Unburned fuel entering the converter is oxidized, generating extreme heat. The driver should reduce speed and load immediately and have the vehicle diagnosed as soon as possible to prevent converter failure.",
    diagram: ""
  },
  {
    id: 81,
    q: "The PCM receives input from all of the following sensors EXCEPT:",
    options: [
      "A) Engine coolant temperature sensor",
      "B) Fuel injectors",
      "C) Throttle position sensor",
      "D) Oxygen sensor"
    ],
    answer: 1,
    explanation: "Fuel injectors are output devices (actuators) controlled by the PCM, not input sensors. The ECT, TPS, and O2 sensors are all input devices that send voltage signals to the PCM. The PCM uses input data to make calculations and control output actuators such as injectors, coils, and solenoids.",
    diagram: ""
  },
  {
    id: 82,
    q: "An oxygen sensor switches voltage between 0.1V and 0.9V as the air-fuel mixture changes from lean to rich. How many cross-counts per second indicates a normally functioning O2 sensor?",
    options: [
      "A) 0–1 cross-counts",
      "B) 2–5 cross-counts",
      "C) 6–10 cross-counts",
      "D) More than 20 cross-counts"
    ],
    answer: 2,
    explanation: "A properly functioning conventional zirconia oxygen sensor should produce approximately 6–10 cross-counts per 10 seconds at 2500 RPM, switching between rich and lean. Fewer cross-counts indicate a lazy or slow-responding sensor. This switching speed is essential for proper closed-loop fuel control by the PCM.",
    diagram: ""
  },
  {
    id: 83,
    q: "A wideband (air-fuel ratio) oxygen sensor differs from a conventional O2 sensor in that it:",
    options: [
      "A) Only measures rich conditions",
      "B) Provides a precise air-fuel ratio reading across a wide range, not just rich or lean switching",
      "C) Does not require a heater circuit",
      "D) Only works at cold engine temperatures"
    ],
    answer: 1,
    explanation: "A wideband air-fuel ratio sensor provides a linear voltage or current signal proportional to the exact air-fuel ratio, unlike a conventional O2 sensor that only switches between rich and lean. This allows the PCM to make more precise fuel adjustments and achieve better emissions control and fuel economy.",
    diagram: ""
  },
  {
    id: 84,
    q: "The MAF sensor on a hot-wire type measures airflow by:",
    options: [
      "A) Counting the number of air vane deflections",
      "B) Measuring the current needed to keep a heated wire at a constant temperature as air flows past it",
      "C) Monitoring air pressure changes in the intake manifold",
      "D) Using ultrasonic pulses to measure air velocity"
    ],
    answer: 1,
    explanation: "A hot-wire MAF sensor maintains a heated wire or film element at a constant temperature above ambient. As airflow increases, more current is needed to maintain the temperature. The PCM interprets this current draw or resulting voltage change as a direct measure of the mass of air entering the engine.",
    diagram: ""
  },
  {
    id: 85,
    q: "A MAP sensor output voltage of approximately 4.5V with the engine off and the key on indicates:",
    options: [
      "A) A faulty MAP sensor",
      "B) Normal atmospheric pressure reading",
      "C) High intake manifold vacuum",
      "D) A shorted MAP sensor signal wire"
    ],
    answer: 1,
    explanation: "With the engine off and key on, the MAP sensor reads atmospheric pressure (barometric pressure). A reading of approximately 4.5V is normal for sea level conditions. When the engine starts, vacuum is applied and the voltage drops. This key-on, engine-off reading serves as a built-in BARO reference.",
    diagram: ""
  },
  {
    id: 86,
    q: "A TPS voltage reading of 0.2V at closed throttle and 4.5V at wide-open throttle indicates:",
    options: [
      "A) A faulty throttle position sensor",
      "B) Normal TPS operation",
      "C) A short in the TPS signal circuit",
      "D) An open in the TPS ground circuit"
    ],
    answer: 1,
    explanation: "A TPS reading of approximately 0.2–0.8V at closed throttle and 4.5V at wide-open throttle is within the normal range for most vehicles. The voltage should increase smoothly and proportionally as the throttle opens. Any dead spots, dropouts, or erratic readings during sweep would indicate a faulty sensor.",
    diagram: ""
  },
  {
    id: 87,
    q: "The engine coolant temperature (ECT) sensor is a negative temperature coefficient (NTC) thermistor. This means its resistance:",
    options: [
      "A) Increases as temperature increases",
      "B) Decreases as temperature increases",
      "C) Remains constant regardless of temperature",
      "D) Only changes above 200°F"
    ],
    answer: 1,
    explanation: "A negative temperature coefficient thermistor has resistance that decreases as temperature rises. When the engine is cold, ECT resistance is high and signal voltage is high. As the engine warms, resistance drops and voltage decreases. The PCM uses this voltage change to determine engine temperature for fuel and timing corrections.",
    diagram: ""
  },
  {
    id: 88,
    q: "The IAT sensor reads -40°F when unplugged. Technician A says the PCM will default to a preprogrammed value. Technician B says this will cause the PCM to deliver more fuel than needed. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. When the IAT sensor is unplugged, the PCM detects an out-of-range signal and typically defaults to a fixed value. Since the PCM may interpret the signal as extremely cold air (high density), it enriches the mixture more than necessary, causing a rich condition.",
    diagram: ""
  },
  {
    id: 89,
    q: "A DTC P0300 indicates:",
    options: [
      "A) Misfire detected on cylinder #3",
      "B) Random or multiple cylinder misfire detected",
      "C) Oxygen sensor circuit malfunction",
      "D) Catalyst efficiency below threshold"
    ],
    answer: 1,
    explanation: "DTC P0300 indicates a random or multiple cylinder misfire. The last two digits 00 mean the misfire is not isolated to one specific cylinder. Cylinder-specific misfire codes are P0301 through P0312, where the last digit identifies the cylinder number. P0300 suggests a systemic issue affecting multiple cylinders.",
    diagram: ""
  },
  {
    id: 90,
    q: "Technician A says the PCM uses the CKP sensor to determine engine speed. Technician B says the PCM uses the CKP sensor to detect misfires. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. The CKP sensor generates pulses as the crankshaft rotates, allowing the PCM to calculate engine RPM. The PCM also monitors slight variations in crankshaft acceleration between power strokes. A misfire causes a detectable deceleration when the affected cylinder fails to produce power.",
    diagram: ""
  },
  {
    id: 91,
    q: "A vehicle has DTC P0128 (Coolant Thermostat Below Thermostat Regulating Temperature). The MOST likely cause is:",
    options: [
      "A) An overheating engine",
      "B) A thermostat stuck open",
      "C) A faulty fuel pump",
      "D) A clogged catalytic converter"
    ],
    answer: 1,
    explanation: "DTC P0128 sets when the PCM determines the engine is not reaching expected operating temperature within a specified time. A thermostat stuck open allows coolant to circulate through the radiator constantly, preventing the engine from warming up properly. This affects emissions, fuel economy, and heater performance.",
    diagram: ""
  },
  {
    id: 92,
    q: "The CAN (Controller Area Network) data bus is used to:",
    options: [
      "A) Charge the vehicle battery",
      "B) Allow multiple control modules to communicate and share data",
      "C) Power the fuel injectors",
      "D) Drive the electric cooling fans"
    ],
    answer: 1,
    explanation: "The CAN bus is a serial communication network that allows multiple electronic control modules to share sensor data and coordinate functions. This reduces the number of individual sensors and wiring needed, as one sensor signal can be shared among many modules over the two-wire twisted-pair bus.",
    diagram: ""
  },
  {
    id: 93,
    q: "A scan tool cannot communicate with the PCM through the DLC. All other modules communicate normally. The MOST likely cause is:",
    options: [
      "A) A blown fuse for the DLC",
      "B) A faulty PCM or PCM communication circuit",
      "C) An open CAN bus high wire",
      "D) A missing DLC ground pin"
    ],
    answer: 1,
    explanation: "If the scan tool communicates with other modules but not the PCM, the CAN bus itself is functional. The problem is isolated to the PCM or its specific communication circuit. A blown DLC fuse or CAN bus fault would affect communication with all modules, not just the PCM.",
    diagram: ""
  },
  {
    id: 94,
    q: "An upstream O2 sensor is stuck at 0.1V. The engine will run:",
    options: [
      "A) Rich because the PCM thinks the mixture is lean and keeps adding fuel",
      "B) Lean because the PCM reduces fuel delivery",
      "C) At the correct air-fuel ratio",
      "D) In open loop only at idle"
    ],
    answer: 0,
    explanation: "A 0.1V O2 sensor reading indicates a lean exhaust to the PCM. In response, the PCM continuously adds fuel to richen the mixture. Since the stuck sensor never reports a rich condition, the PCM keeps adding fuel, causing the engine to run excessively rich with high fuel consumption and black smoke.",
    diagram: ""
  },
  {
    id: 95,
    q: "Which OBD II monitor is classified as a continuous monitor?",
    options: [
      "A) Catalyst efficiency monitor",
      "B) EVAP system monitor",
      "C) Misfire monitor",
      "D) EGR system monitor"
    ],
    answer: 2,
    explanation: "The three continuous monitors are the misfire monitor, fuel system monitor, and comprehensive component monitor. These run constantly whenever the engine is operating. Non-continuous monitors, such as catalyst, EVAP, EGR, O2 sensor, and secondary air, run only when specific driving conditions are met.",
    diagram: ""
  },
  {
    id: 96,
    q: "A pending DTC is stored in the PCM. This means:",
    options: [
      "A) The fault has been confirmed and the MIL is on",
      "B) A fault was detected on one trip but has not yet been confirmed on a second trip",
      "C) The DTC was cleared by the technician",
      "D) The vehicle has passed all OBD II monitors"
    ],
    answer: 1,
    explanation: "A pending DTC means the PCM detected a potential fault during one drive cycle but requires a second consecutive trip with the fault present to confirm the code and illuminate the MIL. Pending codes are useful for diagnosing intermittent faults before they become confirmed stored codes.",
    diagram: ""
  },
  {
    id: 97,
    q: "Technician A says the PCM controls the idle air control (IAC) valve to maintain target idle speed. Technician B says an electronic throttle body can control idle speed without a separate IAC valve. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both technicians are correct. On older systems, the PCM uses an IAC valve to bypass air around the throttle plate to control idle speed. On newer vehicles with electronic throttle control, the PCM directly controls the throttle plate position via a motor, eliminating the need for a separate IAC valve.",
    diagram: ""
  },
  {
    id: 98,
    q: "A DTC P0106 (MAP/BARO Circuit Range/Performance) is set. The technician should check all of the following EXCEPT:",
    options: [
      "A) The MAP sensor vacuum hose for leaks or restrictions",
      "B) The MAP sensor signal and reference voltage",
      "C) The transmission fluid level",
      "D) The MAP sensor connector for damage or corrosion"
    ],
    answer: 2,
    explanation: "DTC P0106 relates to the MAP or barometric pressure sensor circuit. The technician should inspect the vacuum hose, signal voltage, reference voltage, and connector. Transmission fluid level is unrelated to the MAP sensor circuit and would not cause this DTC to set in the engine control system.",
    diagram: ""
  },
  {
    id: 99,
    q: "The PCM operates in open loop mode during all of the following conditions EXCEPT:",
    options: [
      "A) Engine cold start",
      "B) Wide-open throttle",
      "C) Normal cruising at operating temperature",
      "D) When the oxygen sensor has not reached operating temperature"
    ],
    answer: 2,
    explanation: "During normal cruising at operating temperature, the PCM operates in closed loop, using oxygen sensor feedback to adjust the air-fuel ratio. Open loop mode is used during cold start, wide-open throttle, and before the O2 sensor is warm enough to provide a reliable signal. In open loop, fuel is based on preset maps.",
    diagram: ""
  },
  {
    id: 100,
    q: "A DTC P0562 (System Voltage Low) is stored. Which of the following is the MOST likely cause?",
    options: [
      "A) A faulty charging system or failing alternator",
      "B) A stuck-open EGR valve",
      "C) A faulty MAP sensor",
      "D) A restricted exhaust system"
    ],
    answer: 0,
    explanation: "DTC P0562 indicates the PCM detected system voltage below the normal threshold, typically below about 10V. The most common cause is a failing alternator, loose or corroded battery connections, or a worn drive belt. The EGR valve, MAP sensor, and exhaust system do not directly affect system voltage.",
    diagram: ""
  }
];
