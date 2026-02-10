const questionsA1 = [
  // ===== GENERAL ENGINE DIAGNOSIS (Questions 1–40) =====
  {
    id: 1,
    q: "A vehicle cranks but will not start. A spark test shows no spark at any cylinder. A fuel pressure test shows adequate pressure. Which of the following is the MOST likely cause?",
    options: [
      "A) Clogged fuel filter",
      "B) Faulty crankshaft position sensor",
      "C) Worn piston rings",
      "D) Low engine oil level"
    ],
    answer: 1,
    explanation: "The crankshaft position sensor provides the signal the ignition module and PCM need to fire the ignition coils. Without a valid crank signal, the PCM cannot determine engine position and will not trigger spark events, causing a crank-no-start condition even when fuel pressure is normal.",
    diagram: ""
  },
  {
    id: 2,
    q: "A compression test on a four-cylinder engine yields the following results: Cylinder 1 – 155 psi, Cylinder 2 – 150 psi, Cylinder 3 – 90 psi, Cylinder 4 – 152 psi. A wet compression test on Cylinder 3 raises the reading to 140 psi. What does this indicate?",
    options: [
      "A) A burned exhaust valve on Cylinder 3",
      "B) A blown head gasket between Cylinders 3 and 4",
      "C) Worn piston rings on Cylinder 3",
      "D) A cracked cylinder head"
    ],
    answer: 2,
    explanation: "When adding oil to the cylinder raises the compression reading significantly, it indicates that the piston rings are not sealing properly. The oil temporarily fills the gap between the rings and cylinder wall, restoring compression. A valve or head gasket issue would not improve with added oil.",
    diagram: ""
  },
  {
    id: 3,
    q: "A vacuum gauge connected to the intake manifold reads a steady 17 in-Hg at idle. The specification calls for 18–21 in-Hg. Which condition is MOST likely?",
    options: [
      "A) Retarded ignition timing or restricted exhaust",
      "B) A stuck-open EGR valve",
      "C) A burned intake valve",
      "D) A worn camshaft lobe"
    ],
    answer: 0,
    explanation: "A steady but low vacuum reading typically points to retarded ignition timing or a restricted exhaust system. A burned valve would cause the needle to drop regularly, a stuck-open EGR would cause a rough idle with fluctuating vacuum, and a worn cam lobe would also produce an intermittent drop.",
    diagram: ""
  },
  {
    id: 4,
    q: "An engine has a ticking noise that increases with engine speed. The noise is loudest near the top of the engine. Oil level and pressure are within specification. What is the MOST likely cause?",
    options: [
      "A) Worn main bearings",
      "B) Excessive valve lash or a worn rocker arm",
      "C) Piston slap",
      "D) A cracked flexplate"
    ],
    answer: 1,
    explanation: "A ticking noise that increases with RPM and originates from the top of the engine is characteristic of a valve train issue such as excessive valve lash or a worn rocker arm. Main bearing knock is a lower-pitched sound from the bottom end, while piston slap is typically loudest when the engine is cold.",
    diagram: ""
  },
  {
    id: 5,
    q: "Technician A says blue smoke from the exhaust at startup that clears after a few minutes indicates worn valve stem seals. Technician B says it indicates worn piston rings. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Blue smoke on startup that clears shortly afterward is a classic symptom of worn valve stem seals. Oil seeps past the seals while the engine sits and burns off when the engine starts. Worn piston rings typically produce continuous blue smoke under load and acceleration, not just at startup.",
    diagram: ""
  },
  {
    id: 6,
    q: "An engine overheats only at highway speed but runs at normal temperature in city driving. Which of the following is the MOST likely cause?",
    options: [
      "A) A faulty thermostat stuck open",
      "B) A restricted radiator",
      "C) A faulty cooling fan relay",
      "D) Low coolant level"
    ],
    answer: 1,
    explanation: "A restricted radiator cannot dissipate enough heat at higher engine loads and RPMs encountered at highway speed. A faulty fan relay would cause overheating at idle or low speed when airflow depends on the fan. A thermostat stuck open would cause the engine to run cool, not overheat.",
    diagram: ""
  },
  {
    id: 7,
    q: "A cylinder leak-down test on Cylinder 4 shows 35% leakage. Air can be heard hissing from the tailpipe. What is the MOST likely cause?",
    options: [
      "A) Worn piston rings",
      "B) A cracked piston",
      "C) A burned or improperly seating exhaust valve",
      "D) A blown head gasket"
    ],
    answer: 2,
    explanation: "During a leak-down test, air escaping from the tailpipe indicates that the exhaust valve is not sealing. This can be caused by a burned exhaust valve, carbon buildup on the valve seat, or a bent valve. If rings were worn, air would escape into the crankcase through the oil filler cap or dipstick tube.",
    diagram: ""
  },
  {
    id: 8,
    q: "An oil pressure gauge reads low at idle but increases to normal at higher RPMs. All of the following could cause this EXCEPT:",
    options: [
      "A) Worn main bearings",
      "B) A weak oil pressure relief valve spring",
      "C) A clogged oil pickup screen",
      "D) Using the manufacturer-recommended oil viscosity"
    ],
    answer: 3,
    explanation: "Using the manufacturer-recommended oil viscosity is the correct practice and would not cause low oil pressure. Worn main bearings increase clearance and leak oil faster at low RPM. A weak relief spring bleeds off pressure. A clogged pickup screen restricts oil flow, especially at lower pump speeds.",
    diagram: ""
  },
  {
    id: 9,
    q: "White smoke continuously coming from the exhaust of a warm engine MOST likely indicates:",
    options: [
      "A) A rich air-fuel mixture",
      "B) Coolant entering the combustion chamber",
      "C) Worn valve stem seals",
      "D) A stuck-open PCV valve"
    ],
    answer: 1,
    explanation: "Continuous white smoke from a fully warmed engine is a classic sign of coolant entering the combustion chambers and being converted to steam. This is commonly caused by a blown head gasket, cracked cylinder head, or cracked engine block. Blue smoke indicates oil burning; black smoke indicates a rich mixture.",
    diagram: ""
  },
  {
    id: 10,
    q: "A technician is using a DMM to test an engine coolant temperature sensor. As engine temperature increases, the resistance reading should:",
    options: [
      "A) Increase steadily",
      "B) Decrease steadily",
      "C) Remain the same",
      "D) Fluctuate rapidly"
    ],
    answer: 1,
    explanation: "Most engine coolant temperature sensors are negative temperature coefficient (NTC) thermistors. As temperature rises, resistance decreases. The PCM uses this changing resistance to determine engine temperature for fuel delivery, ignition timing, and emission control calculations.",
    diagram: ""
  },
  {
    id: 11,
    q: "An engine has a knocking noise under load that gets quieter at idle. Oil pressure is within specification. Technician A says the cause is likely worn rod bearings. Technician B says the cause is likely carbon buildup in the combustion chambers causing detonation. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 1,
    explanation: "Knocking under load that diminishes at idle is characteristic of detonation, often caused by carbon buildup in the combustion chambers. The carbon raises compression ratio and creates hot spots. Rod bearing knock tends to be present at all speeds and worsens with RPM, so Technician B is correct.",
    diagram: ""
  },
  {
    id: 12,
    q: "Technician A says a vacuum gauge reading that fluctuates between 14 and 19 in-Hg at idle indicates a vacuum leak. Technician B says it indicates a burned valve or weak valve spring. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 1,
    explanation: "A vacuum gauge needle that regularly drops and returns at idle typically indicates a burned valve or a weak valve spring allowing intermittent sealing loss. A vacuum leak usually produces a steady low reading or a slightly fluctuating reading, not the rhythmic dropping pattern associated with valve problems.",
    diagram: ""
  },
  {
    id: 13,
    q: "During a relative compression test using a current probe on the starter circuit, one cylinder shows significantly lower current draw than the others. This indicates:",
    options: [
      "A) Higher compression in that cylinder",
      "B) Lower compression in that cylinder",
      "C) A faulty starter motor",
      "D) Excessive resistance in the battery cables"
    ],
    answer: 1,
    explanation: "During cranking, each cylinder creates a current spike as the starter compresses the air-fuel charge. A cylinder with low compression requires less effort to compress, producing a lower current draw peak. This is a quick way to identify a weak cylinder without removing spark plugs for a traditional test.",
    diagram: ""
  },
  {
    id: 14,
    q: "A vehicle exhibits excessive exhaust backpressure. All of the following symptoms may be present EXCEPT:",
    options: [
      "A) Loss of power at higher RPMs",
      "B) Engine overheating",
      "C) Improved fuel economy",
      "D) A lower-than-normal vacuum reading"
    ],
    answer: 2,
    explanation: "Excessive exhaust backpressure restricts exhaust flow, causing power loss at high RPM, potential overheating from retained heat, and lower intake vacuum. It would never improve fuel economy—it worsens it because the engine must work harder to expel exhaust gases, reducing overall volumetric efficiency.",
    diagram: ""
  },
  {
    id: 15,
    q: "An engine vibrates excessively at idle but smooths out above 1,500 RPM. All other engine parameters are normal. What is the MOST likely cause?",
    options: [
      "A) A broken or collapsed engine mount",
      "B) A misfiring spark plug",
      "C) An exhaust leak at the manifold",
      "D) A worn timing chain"
    ],
    answer: 0,
    explanation: "A broken or collapsed engine mount cannot properly absorb engine vibrations at idle. At higher RPMs, gyroscopic forces and inertia tend to mask the vibration. A misfire would typically set a code and cause roughness at all speeds. An exhaust leak would produce noise but not necessarily a vibration felt in the vehicle.",
    diagram: ""
  },
  {
    id: 16,
    q: "A technician connects a vacuum gauge to the intake manifold and the needle drifts slowly between 14 and 17 in-Hg. This reading MOST likely indicates:",
    options: [
      "A) A restricted exhaust",
      "B) Incorrect air-fuel mixture or an ignition timing problem",
      "C) A blown head gasket",
      "D) Normal engine operation"
    ],
    answer: 1,
    explanation: "A vacuum gauge needle that drifts slowly back and forth over a range of a few inches of mercury typically indicates an incorrect air-fuel mixture or an ignition timing issue. A restricted exhaust causes the needle to initially read normal then gradually drop. A blown head gasket causes irregular fluctuations.",
    diagram: ""
  },
  {
    id: 17,
    q: "Black smoke from the exhaust during acceleration is MOST likely caused by:",
    options: [
      "A) A leaking head gasket",
      "B) An excessively rich air-fuel mixture",
      "C) Worn valve stem seals",
      "D) A stuck-closed thermostat"
    ],
    answer: 1,
    explanation: "Black exhaust smoke indicates unburned fuel, which means the air-fuel mixture is too rich. Causes include a stuck fuel injector, high fuel pressure, a faulty MAP or MAF sensor, or a saturated charcoal canister. Blue smoke indicates oil burning, and white smoke indicates coolant entering the combustion chamber.",
    diagram: ""
  },
  {
    id: 18,
    q: "A technician is using a digital multimeter to check for voltage drop across the engine ground strap. With the engine cranking, the reading is 0.8V. This indicates:",
    options: [
      "A) The ground strap is in good condition",
      "B) Excessive resistance in the ground circuit",
      "C) A faulty starter solenoid",
      "D) A weak battery"
    ],
    answer: 1,
    explanation: "Maximum acceptable voltage drop on a ground circuit is typically 0.2V (200 mV). A reading of 0.8V indicates excessive resistance in the ground strap or its connections, which can cause slow cranking, hard starting, and erratic electrical behavior. The strap or its connections should be cleaned or replaced.",
    diagram: ""
  },
  {
    id: 19,
    q: "A cylinder leak-down test shows 5% leakage on all cylinders. This result indicates:",
    options: [
      "A) The engine has serious internal problems",
      "B) The engine is in good mechanical condition",
      "C) The head gaskets need replacement",
      "D) The piston rings are worn beyond service limits"
    ],
    answer: 1,
    explanation: "A leak-down reading of 5% or less on all cylinders indicates excellent sealing of the rings, valves, and head gaskets. Most manufacturers consider up to 10–15% leakage acceptable. Uniform readings across all cylinders also confirm consistent engine condition with no individual cylinder weaknesses.",
    diagram: ""
  },
  {
    id: 20,
    q: "An engine cranks slowly on a cold morning. The battery tests good and cables show no visible corrosion. What should the technician check NEXT?",
    options: [
      "A) Fuel injector resistance",
      "B) Voltage drop across the starter circuit cables during cranking",
      "C) Intake manifold vacuum",
      "D) Exhaust backpressure"
    ],
    answer: 1,
    explanation: "Even when a battery tests good and cables look clean externally, internal corrosion in the cables or poor terminal connections can cause high resistance. A voltage drop test during cranking will reveal hidden resistance in the positive and ground cables that visual inspection cannot detect.",
    diagram: ""
  },
  {
    id: 21,
    q: "Technician A says an engine noise that changes when a spark plug wire is disconnected from one cylinder is likely coming from that cylinder's reciprocating components. Technician B says the noise could be from a cracked spark plug. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Shorting out or disconnecting a spark plug wire removes the combustion load from that cylinder. If a noise changes, it indicates the source is related to that cylinder's reciprocating parts such as the piston, wrist pin, or connecting rod bearing. A cracked spark plug would not typically cause an audible engine noise.",
    diagram: ""
  },
  {
    id: 22,
    q: "An engine has a compression reading of 0 psi on two adjacent cylinders. All other cylinders read 150 psi. What is the MOST likely cause?",
    options: [
      "A) Both cylinders have broken valve springs",
      "B) A blown head gasket between the two cylinders",
      "C) Worn piston rings on both cylinders",
      "D) A clogged catalytic converter"
    ],
    answer: 1,
    explanation: "Zero compression on two adjacent cylinders strongly suggests a blown head gasket between them, allowing compression to leak from one cylinder to the other. Worn rings would not cause zero compression, and two valve springs failing simultaneously on adjacent cylinders is highly unlikely. A clogged converter does not affect compression.",
    diagram: ""
  },
  {
    id: 23,
    q: "A technician observes milky residue on the inside of the oil filler cap. The engine does not overheat and there is no white smoke from the exhaust. What is the MOST likely cause?",
    options: [
      "A) A blown head gasket",
      "B) Moisture from condensation due to short driving trips",
      "C) A cracked engine block",
      "D) A failed oil cooler"
    ],
    answer: 1,
    explanation: "Milky residue on the oil filler cap without other coolant contamination symptoms usually indicates moisture condensation. Short driving trips that do not allow the engine to fully reach operating temperature prevent moisture from evaporating out of the crankcase. A blown gasket would typically show other symptoms.",
    diagram: ""
  },
  {
    id: 24,
    q: "An engine exhibits a thumping noise from the lower end that gets louder with increased engine load. Oil pressure is slightly below specification. What is the MOST likely cause?",
    options: [
      "A) Worn camshaft bearings",
      "B) Excessive connecting rod bearing clearance",
      "C) A loose timing chain tensioner",
      "D) Worn valve lifters"
    ],
    answer: 1,
    explanation: "A thumping noise from the lower engine that increases with load, combined with low oil pressure, is characteristic of worn connecting rod bearings. Excessive bearing clearance allows the rod to pound against the crankshaft journal under combustion loads and also allows oil to escape faster, reducing pressure.",
    diagram: ""
  },
  {
    id: 25,
    q: "During a power balance test, disabling Cylinder 5 produces no change in engine RPM. What does this indicate?",
    options: [
      "A) Cylinder 5 is the strongest cylinder",
      "B) Cylinder 5 is not contributing to engine power",
      "C) The ignition system for Cylinder 5 is working correctly",
      "D) The fuel injector for Cylinder 5 is operating normally"
    ],
    answer: 1,
    explanation: "In a power balance test, disabling each cylinder should cause a noticeable RPM drop. If disabling a cylinder produces no RPM change, that cylinder was already not contributing to engine power output. The cause could be a dead fuel injector, no spark, low compression, or a combination of these factors.",
    diagram: ""
  },
  {
    id: 26,
    q: "Technician A says a running compression test is more accurate than a cranking compression test for diagnosing valve train problems. Technician B says a running compression test can identify restricted exhaust. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "A running compression test is performed with the engine running at various RPMs and can detect problems that a static cranking test misses, such as subtle valve sealing issues and restricted exhaust conditions. High running compression readings that increase with RPM can indicate exhaust restriction.",
    diagram: ""
  },
  {
    id: 27,
    q: "A vehicle stalls at idle when the air conditioning is turned on. What is the MOST likely cause?",
    options: [
      "A) An overcharged A/C system",
      "B) A faulty idle air control (IAC) valve or electronic throttle body",
      "C) A defective A/C compressor clutch",
      "D) Low refrigerant charge"
    ],
    answer: 1,
    explanation: "When the A/C compressor engages, it places an additional load on the engine. The PCM should compensate by commanding the IAC valve or electronic throttle body to increase idle speed. If the IAC or throttle body is faulty, it cannot increase airflow and the engine stalls under the added load.",
    diagram: ""
  },
  {
    id: 28,
    q: "A technician measures 45 psi of oil pressure at 2,500 RPM but only 5 psi at hot idle. The specification is 10 psi minimum at hot idle. Which component should be inspected FIRST?",
    options: [
      "A) The oil pump",
      "B) The oil pressure sending unit",
      "C) The main bearings",
      "D) The oil filter bypass valve"
    ],
    answer: 1,
    explanation: "Before condemning internal engine components, the technician should verify the accuracy of the reading by checking the oil pressure sending unit. A faulty sender can give misleading readings. If a mechanical gauge confirms low pressure, then further diagnosis of the pump, bearings, or bypass valve is warranted.",
    diagram: ""
  },
  {
    id: 29,
    q: "An engine has a rhythmic exhaust puffing sound at idle. A vacuum gauge shows the needle dropping about 2 in-Hg at regular intervals. What is the MOST likely cause?",
    options: [
      "A) A leaking intake manifold gasket",
      "B) A burned exhaust valve",
      "C) A clogged catalytic converter",
      "D) Excessive valve overlap from incorrect timing"
    ],
    answer: 1,
    explanation: "A regular, rhythmic drop on the vacuum gauge combined with an exhaust puffing noise indicates a burned exhaust valve. Each time the affected cylinder fires, the leaking valve allows compression and combustion gases to escape into the exhaust, causing both the puff and the momentary vacuum drop.",
    diagram: ""
  },
  {
    id: 30,
    q: "A DMM is used to check the reference voltage signal from the PCM to the throttle position sensor. The reading should be approximately:",
    options: [
      "A) 0.5V",
      "B) 1.0V",
      "C) 5.0V",
      "D) 12.0V"
    ],
    answer: 2,
    explanation: "Most engine sensors that use a three-wire configuration receive a 5-volt reference signal from the PCM. The throttle position sensor uses this reference voltage and provides a variable return signal based on throttle blade angle, typically ranging from about 0.5V at closed throttle to 4.5V at wide open throttle.",
    diagram: ""
  },
  {
    id: 31,
    q: "An engine has a chirping noise that changes with engine RPM but does not change when the accessory drive belt is removed. What is the MOST likely cause?",
    options: [
      "A) A worn serpentine belt",
      "B) A failing alternator bearing",
      "C) A timing belt or chain tensioner issue",
      "D) A worn A/C compressor clutch"
    ],
    answer: 2,
    explanation: "If the chirping noise persists after the accessory belt is removed, the source is internal to the engine. A timing belt or chain tensioner that is worn or improperly adjusted can produce a chirping or rattling noise that varies with engine speed since the timing components rotate with the crankshaft.",
    diagram: ""
  },
  {
    id: 32,
    q: "A vehicle has intermittent overheating only in stop-and-go traffic. The cooling fan operates correctly when tested manually. Technician A says the coolant temperature sensor signal to the fan relay should be checked. Technician B says the water pump impeller may be eroded. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "If the fan works manually but the vehicle overheats at low speed, the fan is likely not activating automatically at the correct temperature. The coolant temperature sensor or its circuit to the fan relay is the most likely cause. A worn water pump impeller would cause overheating at all driving conditions, not just stop-and-go.",
    diagram: ""
  },
  {
    id: 33,
    q: "A compression test shows all cylinders within specification, but a leak-down test reveals 25% leakage on Cylinder 2 with air heard at the oil filler cap. What does this indicate?",
    options: [
      "A) A burned intake valve on Cylinder 2",
      "B) A blown head gasket adjacent to Cylinder 2",
      "C) Worn or broken piston rings on Cylinder 2",
      "D) A cracked cylinder head"
    ],
    answer: 2,
    explanation: "Air escaping from the oil filler cap or dipstick tube during a leak-down test means air is entering the crankcase past the piston rings. This indicates worn, broken, or stuck piston rings on that cylinder. A valve problem would direct air to the intake or exhaust; a gasket issue would show at the coolant or adjacent cylinder.",
    diagram: ""
  },
  {
    id: 34,
    q: "Technician A says a scan tool can be used to monitor engine misfire data. Technician B says an oscilloscope can be used to identify a misfiring cylinder by monitoring ignition secondary patterns. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Modern OBD-II systems track misfire data per cylinder, which a scan tool can display. An oscilloscope connected to the secondary ignition circuit can show the firing voltage and burn time for each cylinder, revealing misfires through abnormal patterns. Both tools are valid diagnostic methods.",
    diagram: ""
  },
  {
    id: 35,
    q: "A vehicle has a persistent coolant smell inside the cabin but shows no external leaks and coolant level slowly drops. What is the MOST likely cause?",
    options: [
      "A) A leaking radiator hose",
      "B) A leaking heater core",
      "C) A blown head gasket",
      "D) A cracked overflow reservoir"
    ],
    answer: 1,
    explanation: "A coolant smell inside the cabin with no visible external leaks and a slowly dropping coolant level points to a leaking heater core. The heater core is located inside the HVAC housing behind the dashboard. Small leaks vaporize coolant into the cabin air, creating the sweet smell before visible puddles appear.",
    diagram: ""
  },
  {
    id: 36,
    q: "An engine idle speed surges between 500 and 1,500 RPM. A smoke machine test reveals no vacuum leaks. Technician A says a faulty idle air control valve could cause this. Technician B says a dirty electronic throttle body could cause this. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both a faulty idle air control valve and a dirty electronic throttle body can cause idle surge. These components regulate airflow at idle, and erratic operation from sticking or carbon buildup causes the PCM to constantly hunt for the correct idle speed. Either condition should be inspected after ruling out vacuum leaks.",
    diagram: ""
  },
  {
    id: 37,
    q: "A vehicle with a V6 engine has a misfire on Cylinder 3. Swapping the ignition coil from Cylinder 3 to Cylinder 5 causes the misfire to move to Cylinder 5. What is the cause?",
    options: [
      "A) A faulty fuel injector on Cylinder 3",
      "B) A faulty ignition coil",
      "C) Low compression on Cylinder 3",
      "D) A wiring issue in the Cylinder 3 coil circuit"
    ],
    answer: 1,
    explanation: "When swapping a coil from the misfiring cylinder to a different cylinder causes the misfire to follow the coil, the coil is the faulty component. If the misfire stayed on Cylinder 3, it would indicate a problem with the injector, wiring, or mechanical condition of that cylinder.",
    diagram: ""
  },
  {
    id: 38,
    q: "An engine makes a loud rattling noise on cold startup that diminishes after about 30 seconds. Oil pressure is normal after warmup. What is the MOST likely cause?",
    options: [
      "A) A collapsed hydraulic lifter due to oil drain-back",
      "B) A failed piston pin retainer",
      "C) A worn crankshaft thrust bearing",
      "D) An exhaust manifold leak"
    ],
    answer: 0,
    explanation: "Hydraulic lifters can collapse and rattle on cold startup when oil drains out of them during extended sitting. Once oil pressure builds and refills the lifters, the noise diminishes. This is commonly caused by worn check valves within the lifters or oil that is too thin for the application.",
    diagram: ""
  },
  {
    id: 39,
    q: "A technician uses a DMM to measure battery voltage with the engine running. The reading is 13.2V. After turning on the headlights, rear defroster, and blower motor, the voltage drops to 12.1V. What does this indicate?",
    options: [
      "A) The battery is undercharged",
      "B) The alternator is not meeting electrical load demands",
      "C) The voltage regulator is set correctly",
      "D) This is a normal reading under load"
    ],
    answer: 1,
    explanation: "With the engine running, charging system voltage should remain between approximately 13.5V and 14.5V even under electrical load. A drop to 12.1V under load indicates the alternator cannot keep up with demand, suggesting a failing alternator, loose belt, or poor electrical connections.",
    diagram: ""
  },
  {
    id: 40,
    q: "During a cylinder leak-down test, air is heard bubbling in the radiator. What does this indicate?",
    options: [
      "A) A burned exhaust valve",
      "B) Worn piston rings",
      "C) A blown head gasket or cracked cylinder head allowing combustion gas into the cooling system",
      "D) A leaking intake manifold gasket"
    ],
    answer: 2,
    explanation: "Air entering the cooling system during a leak-down test confirms a breach between the combustion chamber and a coolant passage. This is typically caused by a failed head gasket, cracked cylinder head, or cracked block. This path allows both compression loss and coolant contamination of the combustion chamber.",
    diagram: ""
  },

  // ===== CYLINDER HEAD & VALVE TRAIN (Questions 41–53) =====
  {
    id: 41,
    q: "A variable valve timing (VVT) system uses a camshaft phaser actuated by engine oil pressure. What could cause a VVT-related diagnostic trouble code?",
    options: [
      "A) Using the correct oil viscosity",
      "B) A clogged oil control valve screen or low oil level",
      "C) A new timing chain",
      "D) A properly functioning oil pump"
    ],
    answer: 1,
    explanation: "VVT systems rely on clean oil at proper pressure to actuate camshaft phasers. A clogged oil control valve screen, sludge buildup, low oil level, or incorrect oil viscosity can prevent the phaser from moving to the correct position, causing the PCM to set a VVT performance code.",
    diagram: ""
  },
  {
    id: 42,
    q: "Technician A says valve springs should be tested for installed height and tension during a cylinder head rebuild. Technician B says valve springs only need to be inspected visually for cracks. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Valve springs must be tested for proper installed height, tension (open and closed), and squareness during a rebuild. A spring can appear visually perfect but have lost tension from heat fatigue, leading to valve float, poor sealing, and reduced engine performance. Visual inspection alone is insufficient.",
    diagram: ""
  },
  {
    id: 43,
    q: "Excessive valve guide-to-stem clearance can cause all of the following EXCEPT:",
    options: [
      "A) Oil consumption",
      "B) Blue exhaust smoke",
      "C) Increased exhaust backpressure",
      "D) Poor valve sealing and compression loss"
    ],
    answer: 2,
    explanation: "Worn valve guides allow the valve to wobble, causing oil to be drawn past the stem seal into the combustion chamber, resulting in oil consumption and blue smoke. The wobble also prevents proper valve seating, causing compression loss. However, excessive guide clearance does not cause increased exhaust backpressure.",
    diagram: ""
  },
  {
    id: 44,
    q: "A head gasket failure between a cylinder and an oil passage could cause:",
    options: [
      "A) Coolant in the oil",
      "B) Oil in the coolant",
      "C) Oil in the combustion chamber and blue exhaust smoke",
      "D) White exhaust smoke"
    ],
    answer: 2,
    explanation: "When a head gasket fails between a cylinder and an oil passage, pressurized oil can be forced into the combustion chamber, where it burns and produces blue exhaust smoke. If the failure were between a cylinder and coolant passage, white smoke and coolant-in-oil contamination would result instead.",
    diagram: ""
  },
  {
    id: 45,
    q: "When resurfacing a cylinder head, what must the technician verify to ensure proper valve train geometry?",
    options: [
      "A) The rocker arm ratio",
      "B) The cylinder head's minimum thickness specification and installed valve spring height",
      "C) The spark plug thread depth",
      "D) The oil drain hole alignment"
    ],
    answer: 1,
    explanation: "Removing material from the cylinder head surface reduces head thickness and changes installed valve spring height and compression ratio. The technician must verify that the head remains within the manufacturer's minimum thickness specification and correct the installed spring height with shims if necessary.",
    diagram: ""
  },
  {
    id: 46,
    q: "A camshaft lobe is measured with a micrometer and found to be below the minimum lift specification. What is the MOST likely result of this condition?",
    options: [
      "A) The valve opens too far",
      "B) Reduced valve lift and duration, causing loss of performance",
      "C) Increased valve spring pressure",
      "D) Higher compression ratio"
    ],
    answer: 1,
    explanation: "A worn camshaft lobe has a reduced profile, which decreases both the lift and effective duration of the valve opening. This results in less airflow into or out of the cylinder, reduced volumetric efficiency, and noticeable power loss, especially at higher engine speeds where airflow demand is greatest.",
    diagram: ""
  },
  {
    id: 47,
    q: "A rocker arm on an overhead valve engine shows wear on the tip that contacts the valve stem. What is the MOST likely consequence if this is not corrected?",
    options: [
      "A) Increased valve lift",
      "B) Insufficient valve lash and possible valve burning from not fully closing",
      "C) Increased oil pressure",
      "D) Reduced engine noise"
    ],
    answer: 1,
    explanation: "Wear on the rocker arm tip effectively changes the valve adjustment, which can prevent the valve from fully closing. An exhaust valve that does not seat completely will overheat because it cannot transfer heat to the seat, eventually leading to a burned valve and compression loss in that cylinder.",
    diagram: ""
  },
  {
    id: 48,
    q: "A cylinder head is being checked for warpage using a straightedge and feeler gauge. The maximum allowable warpage for most aluminum heads is typically:",
    options: [
      "A) 0.001 inch (0.025 mm)",
      "B) 0.002 to 0.004 inch (0.05 to 0.10 mm)",
      "C) 0.010 inch (0.25 mm)",
      "D) 0.020 inch (0.50 mm)"
    ],
    answer: 1,
    explanation: "Most manufacturers specify a maximum warpage of 0.002 to 0.004 inch for aluminum cylinder heads. Warpage beyond this limit prevents proper head gasket sealing, leading to coolant or compression leaks. The head must be resurfaced or replaced if warpage exceeds the specification.",
    diagram: ""
  },
  {
    id: 49,
    q: "Technician A says that overhead cam engines use timing chains or belts to drive the camshaft. Technician B says that failure to replace a timing belt at the recommended interval can result in catastrophic engine damage on an interference engine. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Overhead cam engines use timing chains or belts to synchronize camshaft rotation with the crankshaft. In an interference engine, if the timing belt breaks, the pistons will contact the open valves, causing bent valves, damaged pistons, and potentially more severe engine damage. Timely belt replacement is critical.",
    diagram: ""
  },
  {
    id: 50,
    q: "A VVT solenoid is commanded to advance the intake camshaft, but an oscilloscope shows no change in cam position sensor signal relative to the crank signal. What is the MOST likely cause?",
    options: [
      "A) A faulty crankshaft position sensor",
      "B) A stuck or clogged VVT oil control solenoid",
      "C) A faulty knock sensor",
      "D) A weak ignition coil"
    ],
    answer: 1,
    explanation: "If the PCM commands the VVT solenoid but the camshaft does not advance, the most likely cause is a stuck or clogged oil control solenoid that cannot direct oil pressure to the phaser. Sludge or debris can block the solenoid valve or its screen, preventing phaser movement.",
    diagram: ""
  },
  {
    id: 51,
    q: "When performing a valve job, the valve seat is cut at three angles: a top cut, a seat angle, and a throat cut. The purpose of the three-angle valve job is to:",
    options: [
      "A) Increase the compression ratio",
      "B) Improve airflow into and out of the cylinder",
      "C) Reduce valve guide clearance",
      "D) Decrease valve spring tension"
    ],
    answer: 1,
    explanation: "A three-angle valve job narrows the actual seating surface while smoothing the transition angles above and below it. This improves the flow of the air-fuel charge into the cylinder and exhaust gas out of the cylinder, resulting in better volumetric efficiency and engine performance.",
    diagram: ""
  },
  {
    id: 52,
    q: "An engine with hydraulic valve lifters has a persistent tapping noise even after the engine reaches operating temperature. What should be checked?",
    options: [
      "A) The ignition timing",
      "B) Oil pressure and oil level; if adequate, the lifters may be worn and need replacement",
      "C) The exhaust manifold gaskets",
      "D) The intake air temperature sensor"
    ],
    answer: 1,
    explanation: "Hydraulic lifters automatically adjust to maintain zero valve lash using oil pressure. A persistent tapping noise after warmup suggests one or more lifters are not holding oil pressure due to wear, a stuck check valve, or inadequate oil supply. Oil level and pressure should be verified first before replacing lifters.",
    diagram: ""
  },
  {
    id: 53,
    q: "Positive valve stem seals are being replaced on an OHV engine without removing the cylinder head. What must the technician use to keep the valve from dropping into the cylinder?",
    options: [
      "A) A valve spring compressor only",
      "B) Compressed air supplied through the spark plug hole to pressurize the cylinder",
      "C) A magnetic retrieval tool",
      "D) A piston stop tool"
    ],
    answer: 1,
    explanation: "When replacing valve stem seals with the head installed, compressed air is fed into the cylinder through the spark plug hole to hold the valve in place while the spring is compressed and removed. Without air pressure, the valve would fall into the cylinder once the spring and keepers are removed.",
    diagram: ""
  },

  // ===== ENGINE BLOCK (Questions 54–62) =====
  {
    id: 54,
    q: "A crankshaft journal is measured with a micrometer and found to be out-of-round by 0.0015 inch. What is the correct repair?",
    options: [
      "A) Install a standard-size bearing",
      "B) Grind the journal to the next undersize and install matching undersize bearings",
      "C) Polish the journal and reuse the old bearings",
      "D) Apply bearing adhesive to the existing bearings"
    ],
    answer: 1,
    explanation: "An out-of-round crankshaft journal must be ground to the next available undersize specification to restore a true round shape with the correct surface finish. Matching undersize bearings are then installed to maintain proper oil clearance. Reusing old bearings on a worn journal will result in rapid failure.",
    diagram: ""
  },
  {
    id: 55,
    q: "Technician A says piston ring end gap should be measured with the ring installed in the cylinder bore. Technician B says the ring gap can be measured outside the engine using a caliper. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Piston ring end gap must be measured with the ring squarely positioned in the cylinder bore it will be used in, because bore diameter directly affects the gap. A feeler gauge is inserted into the ring gap to measure the distance. Measuring outside the bore would not account for the actual bore diameter.",
    diagram: ""
  },
  {
    id: 56,
    q: "A connecting rod bearing has a shiny, worn spot on one side of the bearing surface. This pattern MOST likely indicates:",
    options: [
      "A) Normal wear",
      "B) A bent connecting rod",
      "C) Oil starvation",
      "D) Improper bearing crush"
    ],
    answer: 1,
    explanation: "Uneven wear on one side of a connecting rod bearing indicates that the rod is not straight, causing the bearing to be loaded unevenly. A bent rod tilts the bearing surface, concentrating the load on one side. Normal wear would appear uniformly across the bearing surface. Oil starvation causes widespread damage.",
    diagram: ""
  },
  {
    id: 57,
    q: "A cylinder bore is measured at the top, middle, and bottom with a bore gauge. The top of the bore measures 0.003 inch larger than the bottom. This condition is called:",
    options: [
      "A) Out-of-round",
      "B) Taper",
      "C) Barrel-shaped",
      "D) Hourglass-shaped"
    ],
    answer: 1,
    explanation: "Cylinder taper refers to the difference in diameter between the top and bottom of the cylinder bore. The top of the bore wears more because it is exposed to the highest combustion pressures and temperatures, and the piston rings reverse direction at top dead center. Excessive taper requires boring or honing.",
    diagram: ""
  },
  {
    id: 58,
    q: "When torquing main bearing cap bolts, the technician should follow which procedure?",
    options: [
      "A) Tighten all bolts at once to final torque",
      "B) Start from the outer bolts and work inward",
      "C) Start from the center and work outward in a specific sequence using multiple steps",
      "D) Tighten in any order as long as final torque is correct"
    ],
    answer: 2,
    explanation: "Main bearing cap bolts should be tightened starting from the center and working outward in multiple progressive steps to evenly distribute clamping force and avoid distorting the block or bearing bores. This ensures proper bearing crush, alignment, and oil clearance across all journals.",
    diagram: ""
  },
  {
    id: 59,
    q: "A piston makes a slapping sound that is most noticeable when cold and diminishes as the engine warms. Technician A says excessive piston-to-wall clearance is the cause. Technician B says a worn wrist pin bushing is the cause. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Piston slap occurs when piston-to-wall clearance is excessive, allowing the piston to rock in the bore. It is loudest cold because the aluminum piston has not expanded yet. A worn wrist pin bushing produces a double-knock sound that does not diminish with warmup, so only Technician A is correct.",
    diagram: ""
  },
  {
    id: 60,
    q: "A cylinder bore is being honed before installing new piston rings. The crosshatch pattern provides all of the following benefits EXCEPT:",
    options: [
      "A) Oil retention on the cylinder walls",
      "B) Helping new piston rings seat properly",
      "C) Increasing the cylinder bore compression ratio",
      "D) Providing a consistent surface finish for ring sealing"
    ],
    answer: 2,
    explanation: "The crosshatch honing pattern retains oil, helps rings seat, and provides a consistent surface finish for proper sealing. It does not increase the compression ratio. Compression ratio is determined by the relationship between cylinder volume and combustion chamber volume, not by the surface finish of the bore walls.",
    diagram: ""
  },
  {
    id: 61,
    q: "Bearing oil clearance is being measured using Plastigage. The technician installs the bearing and cap, torques the bolts to specification, then removes the cap. The flattened Plastigage strip is widest on one end and narrow on the other. What does this indicate?",
    options: [
      "A) Correct oil clearance",
      "B) A tapered journal or misaligned bearing cap",
      "C) Too much oil clearance uniformly",
      "D) Too little oil clearance"
    ],
    answer: 1,
    explanation: "If the Plastigage strip varies in width from one side to the other, it indicates uneven clearance across the bearing, which suggests a tapered crankshaft journal or a misaligned bearing cap. A uniform width would indicate consistent clearance. The journal should be measured with a micrometer to confirm.",
    diagram: ""
  },
  {
    id: 62,
    q: "All of the following are reasons to replace connecting rod bolts during an engine rebuild EXCEPT:",
    options: [
      "A) Bolts are torque-to-yield and are designed for one-time use",
      "B) Bolts may have stretched beyond their elastic limit",
      "C) New bolts are less expensive than the labor cost of a repeat repair",
      "D) Bolts increase in strength with repeated use"
    ],
    answer: 3,
    explanation: "Connecting rod bolts do not increase in strength with repeated use. Torque-to-yield bolts stretch into their plastic deformation zone during tightening and may not maintain proper clamping force if reused. The small cost of new bolts is justified by the catastrophic engine damage that a failed rod bolt can cause.",
    diagram: ""
  },

  // ===== LUBRICATION & COOLING (Questions 63–80) =====
  {
    id: 63,
    q: "An engine's oil pressure drops to near zero at hot idle but is normal when cold. What is the MOST likely cause?",
    options: [
      "A) A faulty oil pressure gauge",
      "B) Excessive bearing clearance allowing oil to flow too freely when hot and thin",
      "C) A clogged oil filter",
      "D) An overfilled crankcase"
    ],
    answer: 1,
    explanation: "When the engine is hot, oil viscosity decreases and flows more easily. If bearing clearances are excessive due to wear, the thin, hot oil escapes through the bearings faster than the pump can supply it, causing pressure to drop at low RPM. Cold, thicker oil temporarily masks the problem.",
    diagram: ""
  },
  {
    id: 64,
    q: "A thermostat that is stuck open will cause which of the following symptoms?",
    options: [
      "A) Engine overheating",
      "B) The engine takes longer to reach operating temperature and poor heater output",
      "C) Coolant boil-over",
      "D) Increased oil pressure"
    ],
    answer: 1,
    explanation: "A stuck-open thermostat allows coolant to circulate through the radiator continuously, even when the engine is cold. This prevents the engine from reaching proper operating temperature in a timely manner, reduces heater output, increases fuel consumption, and may trigger a DTC for insufficient coolant temperature.",
    diagram: ""
  },
  {
    id: 65,
    q: "Technician A says the oil pump pressure relief valve limits maximum oil pressure to protect engine components. Technician B says a stuck-open relief valve can cause low oil pressure at all engine speeds. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "The pressure relief valve opens at a set pressure to divert excess oil back to the pan, protecting seals and gaskets from over-pressurization. If the valve sticks open, it bleeds off oil pressure continuously, causing low pressure at all speeds since oil is constantly bypassing back to the sump.",
    diagram: ""
  },
  {
    id: 66,
    q: "A water pump is suspected of having a failing bearing. Which of the following would confirm this diagnosis?",
    options: [
      "A) Coolant leaking from the weep hole at the bottom of the pump",
      "B) Shaft play or noise when the pulley is rocked by hand with the belt removed",
      "C) A low coolant level in the reservoir",
      "D) An illuminated temperature warning light"
    ],
    answer: 1,
    explanation: "Rocking the water pump pulley by hand with the belt removed will reveal excessive shaft bearing play through noticeable movement or a grinding feel. While a coolant leak from the weep hole indicates seal failure, shaft play directly confirms bearing wear. The other options are symptoms, not confirmations.",
    diagram: ""
  },
  {
    id: 67,
    q: "A radiator pressure cap maintains system pressure for which of the following reasons?",
    options: [
      "A) To force coolant through the heater core faster",
      "B) To raise the boiling point of the coolant",
      "C) To increase water pump efficiency",
      "D) To prevent air from entering the system"
    ],
    answer: 1,
    explanation: "Pressurizing the cooling system raises the boiling point of the coolant by approximately 3 degrees Fahrenheit per pound of pressure. A typical 15 psi cap raises the boiling point by about 45 degrees F, allowing the cooling system to operate at higher temperatures without boiling over.",
    diagram: ""
  },
  {
    id: 68,
    q: "An engine has a low oil level. After topping off, the oil level drops again within 500 miles with no visible external leaks. All of the following could be the cause EXCEPT:",
    options: [
      "A) Worn valve stem seals",
      "B) Worn piston rings",
      "C) A leaking rear main seal that drips only while driving",
      "D) A properly functioning PCV system"
    ],
    answer: 3,
    explanation: "A properly functioning PCV system should not cause oil consumption. It routes crankcase vapors back to the intake for combustion, but its baffles and valve prevent liquid oil from being drawn in. Worn valve seals, piston rings, or a rear main seal that leaks under pressure can all cause oil loss.",
    diagram: ""
  },
  {
    id: 69,
    q: "A coolant recovery system reservoir is found to be empty after the engine cools down. What is the MOST likely cause?",
    options: [
      "A) A stuck-closed thermostat",
      "B) A faulty radiator cap that is not holding pressure or allowing coolant to return",
      "C) An oversized water pump pulley",
      "D) A restricted heater hose"
    ],
    answer: 1,
    explanation: "The radiator cap has two valves: a pressure valve that releases expanding coolant to the reservoir, and a vacuum valve that draws coolant back as the engine cools. If either valve is faulty, coolant may be pushed out but not returned, leaving the reservoir empty after the engine cools down.",
    diagram: ""
  },
  {
    id: 70,
    q: "An electric cooling fan does not come on when the engine reaches operating temperature. The fan works when connected directly to battery voltage. What should be tested NEXT?",
    options: [
      "A) The fan blade pitch",
      "B) The coolant temperature sensor, fan relay, and associated wiring",
      "C) The serpentine belt tension",
      "D) The heater control valve"
    ],
    answer: 1,
    explanation: "Since the fan motor works on direct power, the motor and fan are good. The control circuit must be tested: the coolant temperature sensor that signals the PCM, the relay the PCM activates, and the wiring between these components. A fault anywhere in this circuit would prevent automatic fan operation.",
    diagram: ""
  },
  {
    id: 71,
    q: "A drive belt squeals loudly on startup, especially in cold or wet conditions. What is the MOST common cause?",
    options: [
      "A) A worn belt or improper belt tension",
      "B) An over-tightened belt",
      "C) A new belt that has not broken in",
      "D) A misaligned crankshaft pulley"
    ],
    answer: 0,
    explanation: "A worn belt with glazed or cracked surface material loses grip on the pulleys, especially in cold or wet conditions when the belt is stiff or water acts as a lubricant. Improper tension also allows slipping. The belt and tensioner should be inspected and replaced if worn or stretched beyond limits.",
    diagram: ""
  },
  {
    id: 72,
    q: "Technician A says mixing different types of coolant (such as IAT and OAT) can cause cooling system damage. Technician B says all coolants are the same as long as they are the correct color. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "Mixing incompatible coolant types, such as Inorganic Acid Technology (IAT) and Organic Acid Technology (OAT), can cause chemical reactions that form gel or sediment, clog passages, and accelerate corrosion. Coolant color alone does not determine compatibility. Always use the manufacturer-specified coolant type.",
    diagram: ""
  },
  {
    id: 73,
    q: "An oil pressure warning light comes on intermittently during hard braking. The oil level checks at the full mark. What is the MOST likely cause?",
    options: [
      "A) A failing oil pump",
      "B) Oil sloshing forward in the pan, uncovering the pickup tube",
      "C) A faulty oil pressure sending unit",
      "D) A clogged oil filter"
    ],
    answer: 1,
    explanation: "During hard braking, oil surges forward in the pan due to inertia. If the oil level is borderline or the pan is not baffled, the oil pickup tube can become momentarily uncovered, causing a temporary loss of oil pressure. This is more common with low-profile oil pans or high-performance driving conditions.",
    diagram: ""
  },
  {
    id: 74,
    q: "A vehicle's temperature gauge goes to hot within minutes of starting, but the upper radiator hose is cold. Technician A says the thermostat is likely stuck closed. Technician B says the water pump has likely failed. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "A thermostat stuck closed prevents coolant from flowing to the radiator, explaining why the upper hose stays cold while the engine rapidly overheats. A faulty water pump would cause overheating but the upper hose would typically still become warm from heat conduction, so only Technician A is correct.",
    diagram: ""
  },
  {
    id: 75,
    q: "After an engine rebuild, the oil pressure reads higher than specification. Which of the following is the MOST likely cause?",
    options: [
      "A) New tight-fitting bearings creating reduced clearance",
      "B) A weak oil pump relief valve spring",
      "C) Excessive bearing clearance",
      "D) An incorrect oil filter"
    ],
    answer: 0,
    explanation: "New bearings on a freshly machined crankshaft result in tighter clearances, which restrict oil flow and increase pressure. As the bearings wear in during the break-in period, clearances increase slightly and oil pressure should settle to the normal specification range. This is an expected condition.",
    diagram: ""
  },
  {
    id: 76,
    q: "A cooling system pressure test holds pressure for several hours, but the vehicle still loses coolant over time. What should the technician check NEXT?",
    options: [
      "A) The head gasket for an internal leak that only occurs under combustion pressure",
      "B) The water pump bearing",
      "C) The radiator fins",
      "D) The serpentine belt routing"
    ],
    answer: 0,
    explanation: "A static pressure test only applies about 15 psi. An internal head gasket leak may only occur under combustion pressure, which far exceeds the test pressure. A combustion gas test using a block tester or exhaust gas analyzer on the coolant can confirm if combustion gases are leaking into the cooling system.",
    diagram: ""
  },
  {
    id: 77,
    q: "An oil pump is being inspected during an engine rebuild. The measurement being taken between the gear teeth and the pump housing is called:",
    options: [
      "A) End play",
      "B) Gear-to-housing clearance (body clearance)",
      "C) Backlash",
      "D) Side clearance"
    ],
    answer: 1,
    explanation: "Gear-to-housing clearance, also called body clearance, is the measurement between the outer surface of the pump gears and the inner bore of the pump housing. Excessive clearance allows oil to leak past the gears, reducing pump efficiency and output pressure. This is a critical measurement during pump inspection.",
    diagram: ""
  },
  {
    id: 78,
    q: "A coolant leak is observed at the water pump weep hole. Technician A says this indicates a failing water pump seal. Technician B says it is normal for a small amount of coolant to seep from the weep hole. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "An active coolant leak from the water pump weep hole indicates that the internal seal has failed and the pump should be replaced. The weep hole is a drain that sits between the seal and the bearing, designed to alert the technician to seal failure before coolant reaches and destroys the bearing.",
    diagram: ""
  },
  {
    id: 79,
    q: "An engine equipped with an oil cooler shows coolant contamination in the oil. There are no other symptoms of head gasket failure. What is the MOST likely cause?",
    options: [
      "A) A cracked engine block",
      "B) A failed oil cooler allowing coolant and oil to mix",
      "C) Condensation in the crankcase",
      "D) An incorrect oil filter"
    ],
    answer: 1,
    explanation: "An engine oil cooler uses coolant to regulate oil temperature. If the internal barrier in the cooler fails, coolant and oil mix. Since there are no other head gasket symptoms such as white exhaust smoke or compression loss, the oil cooler is the most likely source of cross-contamination.",
    diagram: ""
  },
  {
    id: 80,
    q: "The purpose of an oil filter bypass valve is to:",
    options: [
      "A) Prevent oil from flowing to the bearings when the engine is cold",
      "B) Allow unfiltered oil to reach engine components rather than starving them when the filter is clogged",
      "C) Regulate oil pressure at high RPM",
      "D) Direct oil to the turbocharger first"
    ],
    answer: 1,
    explanation: "The bypass valve opens when the filter becomes clogged or when cold, thick oil creates excessive resistance across the filter element. It allows unfiltered oil to bypass the filter and reach the bearings and other components, because unfiltered oil is better than no oil at all.",
    diagram: ""
  },

  // ===== FUEL, ELECTRICAL, IGNITION, AIR INDUCTION & EXHAUST (Questions 81–100) =====
  {
    id: 81,
    q: "A fuel injector is suspected of being stuck open. Which of the following symptoms would this cause?",
    options: [
      "A) A lean misfire on the affected cylinder",
      "B) A rich condition, rough idle, and possible hydrostatic lock",
      "C) No change in engine operation",
      "D) Increased fuel economy"
    ],
    answer: 1,
    explanation: "A stuck-open fuel injector continuously dumps fuel into its cylinder, causing an extremely rich condition on that cylinder, a rough idle, black smoke, and spark plug fouling. In severe cases, liquid fuel can fill the cylinder and cause hydrostatic lock, potentially bending a connecting rod during cranking.",
    diagram: ""
  },
  {
    id: 82,
    q: "An engine equipped with a mass airflow (MAF) sensor has poor performance and a P0101 DTC. Cleaning the MAF sensor element does not resolve the issue. What should the technician check NEXT?",
    options: [
      "A) The spark plug gap",
      "B) The air intake duct between the MAF sensor and the throttle body for leaks",
      "C) The fuel tank pressure sensor",
      "D) The exhaust oxygen sensor heater circuit"
    ],
    answer: 1,
    explanation: "A crack or leak in the air duct between the MAF sensor and the throttle body allows unmetered air into the engine. The PCM does not account for this air, causing an incorrect fuel calculation. This results in a lean condition, poor performance, and a MAF sensor performance code.",
    diagram: ""
  },
  {
    id: 83,
    q: "Technician A says a weak ignition coil can cause a misfire under load but may test normal at idle. Technician B says ignition coil problems only appear at idle. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "A weak ignition coil may produce enough voltage to fire the spark plug at idle when cylinder pressure is low, but fail under load when higher compression requires greater ignition voltage. This causes a misfire that is more noticeable during acceleration or at highway speeds. Idle-only problems are less common.",
    diagram: ""
  },
  {
    id: 84,
    q: "A catalytic converter efficiency code (P0420) is set. All of the following can cause this EXCEPT:",
    options: [
      "A) A deteriorated catalytic converter substrate",
      "B) An exhaust leak before the rear oxygen sensor",
      "C) A contaminated catalytic converter from coolant or oil",
      "D) A properly functioning evaporative emission system"
    ],
    answer: 3,
    explanation: "A properly functioning EVAP system does not affect catalytic converter efficiency. A deteriorated substrate, exhaust leaks near oxygen sensors, or contamination from coolant or oil can all affect the converter's ability to process emissions, causing the rear O2 sensor to mirror the front sensor's signal and set P0420.",
    diagram: ""
  },
  {
    id: 85,
    q: "A vehicle exhibits a hesitation during acceleration from a stop. Fuel pressure is within specification. Technician A says a faulty throttle position sensor could cause this. Technician B says a dirty mass airflow sensor could cause this. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "Both a faulty TPS and a dirty MAF sensor can cause hesitation on acceleration. The TPS must accurately report throttle opening so the PCM can increase fuel delivery during the transition. A dirty MAF underreports airflow, causing a lean condition and hesitation. Both are valid causes when fuel pressure is normal.",
    diagram: ""
  },
  {
    id: 86,
    q: "An exhaust manifold gasket leak will MOST likely affect which sensor reading?",
    options: [
      "A) The mass airflow sensor",
      "B) The upstream oxygen sensor",
      "C) The coolant temperature sensor",
      "D) The knock sensor"
    ],
    answer: 1,
    explanation: "An exhaust manifold gasket leak allows outside air to enter the exhaust stream before the upstream oxygen sensor. This extra oxygen makes the exhaust appear leaner than it actually is, causing the O2 sensor to send a lean signal and the PCM to add fuel, resulting in a rich running condition.",
    diagram: ""
  },
  {
    id: 87,
    q: "A scan tool shows long-term fuel trim at +25% at idle. This indicates the engine is running:",
    options: [
      "A) Rich, and the PCM is removing fuel",
      "B) Lean, and the PCM is adding fuel to compensate",
      "C) At stoichiometric ratio",
      "D) In open loop"
    ],
    answer: 1,
    explanation: "Positive long-term fuel trim means the PCM is adding fuel above the base fuel calculation to maintain stoichiometric ratio. A value of +25% indicates a significant lean condition that the PCM is trying to correct. Common causes include vacuum leaks, low fuel pressure, or a dirty MAF sensor.",
    diagram: ""
  },
  {
    id: 88,
    q: "An engine has a no-start condition. The ignition coil has battery voltage on the positive terminal but the engine will not spark. What should the technician check?",
    options: [
      "A) The coil's ground and trigger signal from the ignition module or PCM",
      "B) The fuel injector wiring",
      "C) The alternator output",
      "D) The transmission range sensor"
    ],
    answer: 0,
    explanation: "An ignition coil needs battery voltage on one side and a switched ground (trigger signal) from the ignition module or PCM on the other. If battery voltage is present but there is no spark, the trigger circuit is not completing the ground path. The module, PCM output, and wiring should be tested.",
    diagram: ""
  },
  {
    id: 89,
    q: "Technician A says a restricted air filter can cause a rich air-fuel mixture. Technician B says a restricted air filter will cause a lean air-fuel mixture. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 0,
    explanation: "A restricted air filter limits the amount of air entering the engine while the fuel delivery remains relatively unchanged, creating a rich air-fuel mixture. On modern vehicles with MAF sensors, the PCM may partially compensate, but a severely restricted filter still causes a measurable rich shift and reduced power.",
    diagram: ""
  },
  {
    id: 90,
    q: "A fuel pressure regulator diaphragm has ruptured. The vacuum hose connected to it will show:",
    options: [
      "A) No vacuum present",
      "B) Fuel inside the hose",
      "C) Higher-than-normal vacuum",
      "D) Condensation only"
    ],
    answer: 1,
    explanation: "When the diaphragm in a vacuum-referenced fuel pressure regulator ruptures, fuel passes through the tear and into the vacuum hose connected to the intake manifold. This can be checked by removing the vacuum hose and inspecting for fuel. This condition also causes a rich mixture and potential engine flooding.",
    diagram: ""
  },
  {
    id: 91,
    q: "An engine equipped with a distributorless ignition system (DIS) has a misfire on Cylinders 1 and 4, which share a waste-spark coil. What is the MOST likely cause?",
    options: [
      "A) A faulty fuel injector on Cylinder 1",
      "B) The ignition coil pack for Cylinders 1 and 4",
      "C) A vacuum leak at Cylinder 4",
      "D) A worn camshaft lobe for Cylinder 1"
    ],
    answer: 1,
    explanation: "In a waste-spark DIS system, two companion cylinders share one coil. If both cylinders misfire, the shared coil is the most likely cause. If only one cylinder misfired, the cause would more likely be cylinder-specific, such as a faulty injector, plug, or wire. A shared coil failure affects both paired cylinders.",
    diagram: ""
  },
  {
    id: 92,
    q: "A throttle body is removed for cleaning and heavy carbon deposits are found. Carbon buildup on the throttle plate and bore can cause all of the following EXCEPT:",
    options: [
      "A) Erratic or unstable idle speed",
      "B) Stalling at idle",
      "C) Increased fuel injector flow rate",
      "D) The throttle plate sticking during operation"
    ],
    answer: 2,
    explanation: "Throttle body carbon causes erratic idle, stalling, and a sticking throttle plate. However, carbon in the throttle body does not increase fuel injector flow rate, as the injectors are separate components controlled by the PCM. On electronic throttle bodies, carbon can also cause the throttle position to deviate from command.",
    diagram: ""
  },
  {
    id: 93,
    q: "A vehicle fails an emissions test for high HC (hydrocarbon) readings. All of the following could be causes EXCEPT:",
    options: [
      "A) A misfiring cylinder",
      "B) A lean air-fuel mixture",
      "C) A faulty ignition coil",
      "D) A properly functioning catalytic converter"
    ],
    answer: 3,
    explanation: "A properly functioning catalytic converter reduces HC emissions, it does not cause them. High HC readings indicate unburned fuel in the exhaust, caused by misfires from ignition system faults, lean misfires from fuel delivery issues, or mechanical problems that prevent complete combustion.",
    diagram: ""
  },
  {
    id: 94,
    q: "A PCV valve that is stuck closed will MOST likely cause:",
    options: [
      "A) A rich air-fuel mixture",
      "B) Increased crankcase pressure, oil leaks, and oil forced past seals",
      "C) Decreased crankcase pressure",
      "D) Improved fuel economy"
    ],
    answer: 1,
    explanation: "A stuck-closed PCV valve prevents crankcase vapors from being evacuated. Blowby gases accumulate and increase crankcase pressure, which can force oil past seals and gaskets, causing external leaks at the valve covers, rear main seal, and other locations. It can also contaminate the oil with moisture and acids.",
    diagram: ""
  },
  {
    id: 95,
    q: "Technician A says that a loose or missing gas cap can cause the check engine light to illuminate. Technician B says the EVAP system monitors fuel tank vapor integrity. Who is correct?",
    options: [
      "A) Technician A only",
      "B) Technician B only",
      "C) Both Technician A and Technician B",
      "D) Neither Technician A nor Technician B"
    ],
    answer: 2,
    explanation: "The EVAP system monitors fuel vapor containment, including the gas cap seal. A loose or missing gas cap causes a large leak that the EVAP monitor detects, setting a DTC and illuminating the MIL. The EVAP system tests the entire vapor path from the tank through the purge and vent valves for integrity.",
    diagram: ""
  },
  {
    id: 96,
    q: "An intake manifold runner control (IMRC) system is designed to:",
    options: [
      "A) Control exhaust gas recirculation",
      "B) Vary the intake runner length or volume to optimize torque across the RPM range",
      "C) Regulate fuel pressure",
      "D) Control the cooling fan speed"
    ],
    answer: 1,
    explanation: "The IMRC system uses butterfly valves or similar mechanisms to change the effective length or volume of the intake runners. Shorter runners improve high-RPM airflow and power, while longer runners improve low-RPM torque. The PCM actuates the system based on engine speed and load conditions.",
    diagram: ""
  },
  {
    id: 97,
    q: "A spark plug removed from a cylinder has a white, blistered electrode with melted deposits. This condition indicates:",
    options: [
      "A) A rich air-fuel mixture",
      "B) Normal combustion",
      "C) Overheating from a lean mixture, advanced timing, or insufficient cooling",
      "D) Oil fouling"
    ],
    answer: 2,
    explanation: "A white, blistered spark plug electrode with melted deposits indicates excessive combustion chamber temperatures. Causes include a lean air-fuel mixture, overly advanced ignition timing, insufficient cooling, or a heat range plug that is too hot. This condition can lead to pre-ignition and engine damage if not corrected.",
    diagram: ""
  },
  {
    id: 98,
    q: "A vehicle has a rough idle and a P0171 (system too lean, Bank 1) code. Spraying carburetor cleaner around the intake manifold causes the idle to temporarily smooth out. What does this confirm?",
    options: [
      "A) A faulty fuel injector",
      "B) A vacuum leak at the intake manifold area",
      "C) A clogged fuel filter",
      "D) A faulty MAP sensor"
    ],
    answer: 1,
    explanation: "When spraying carburetor cleaner or propane around the intake manifold momentarily smooths the idle, it confirms a vacuum leak in that area. The spray is temporarily drawn into the leak point, providing additional fuel that compensates for the extra unmetered air and briefly enriches the mixture.",
    diagram: ""
  },
  {
    id: 99,
    q: "All of the following describe symptoms of a restricted exhaust system EXCEPT:",
    options: [
      "A) Loss of power at higher RPMs",
      "B) The engine stalls when put in gear",
      "C) A vacuum reading that drops as RPM is held steady at 2,500",
      "D) Increased fuel economy at highway speed"
    ],
    answer: 3,
    explanation: "A restricted exhaust does not improve fuel economy. It causes power loss, especially at higher RPMs when exhaust volume is greatest. Holding RPM at 2,500 causes the vacuum gauge to gradually drop as backpressure builds. Severe restriction can cause stalling when the torque converter loads the engine at low speed.",
    diagram: ""
  },
  {
    id: 100,
    q: "A fuel-injected engine has a crank-no-start condition. A noid light connected in place of a fuel injector does not flash during cranking. What does this indicate?",
    options: [
      "A) The fuel pump is inoperative",
      "B) The injector circuit is not receiving a pulse signal from the PCM",
      "C) The injector is clogged",
      "D) The fuel pressure regulator has failed"
    ],
    answer: 1,
    explanation: "A noid light tests for the presence of an injector driver signal from the PCM. If it does not flash during cranking, the PCM is not pulsing the injectors. This could be caused by a missing crank sensor signal, a PCM fault, a blown injector fuse, or a wiring issue in the injector control circuit.",
    diagram: ""
  }
];
