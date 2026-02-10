const questionsA6 = [
  // =============================================
  // GENERAL ELECTRICAL/ELECTRONIC DIAGNOSIS (1-26)
  // =============================================
  {
    id: 1,
    q: "A 12-volt battery is connected to a circuit with 4 ohms of resistance. According to Ohm's law, how much current flows through the circuit?",
    options: ["A) 2 amps", "B) 3 amps", "C) 4 amps", "D) 48 amps"],
    answer: 1,
    explanation: "Ohm's law states that current equals voltage divided by resistance (I = V/R). With 12 volts and 4 ohms of resistance, the current is 12 divided by 4, which equals 3 amps. This fundamental formula is essential for diagnosing electrical circuits and predicting current flow in automotive systems.",
    diagram: ""
  },
  {
    id: 2,
    q: "A technician measures 0.5 volts across a starter motor cable connection during cranking. What does this indicate?",
    options: ["A) Normal operation", "B) Excessive voltage drop indicating high resistance", "C) An open circuit", "D) A short to ground"],
    answer: 1,
    explanation: "A voltage drop of 0.5 volts across a single cable connection during cranking is excessive. Maximum allowable voltage drop for a cable or connection in a high-current circuit is typically 0.2 volts. This high reading indicates corrosion, a loose connection, or damaged wiring causing unwanted resistance in the circuit.",
    diagram: ""
  },
  {
    id: 3,
    q: "When using a DMM to check continuity on a wire, what should the meter read if the wire is good?",
    options: ["A) OL (over limit)", "B) Battery voltage", "C) Near zero ohms", "D) Infinite resistance"],
    answer: 2,
    explanation: "A good wire with no breaks should read near zero ohms (very low resistance) when checked for continuity with a DMM set to the ohms scale. An OL or infinite reading indicates an open circuit, meaning the wire is broken. The circuit must be de-energized before performing continuity tests to protect the meter.",
    diagram: ""
  },
  {
    id: 4,
    q: "Three resistors of 4 ohms, 6 ohms, and 2 ohms are connected in series. What is the total resistance of the circuit?",
    options: ["A) 1.09 ohms", "B) 4 ohms", "C) 12 ohms", "D) 48 ohms"],
    answer: 2,
    explanation: "In a series circuit, total resistance is the sum of all individual resistances. Adding 4 ohms plus 6 ohms plus 2 ohms gives a total of 12 ohms. Series resistance always increases total circuit resistance, which reduces current flow. This is fundamental to understanding how automotive circuits with multiple loads behave.",
    diagram: ""
  },
  {
    id: 5,
    q: "Technician A says that in a parallel circuit, voltage is the same across all branches. Technician B says that in a parallel circuit, total current equals the sum of current in each branch. Who is correct?",
    options: ["A) Technician A only", "B) Technician B only", "C) Both Technician A and Technician B", "D) Neither Technician A nor Technician B"],
    answer: 2,
    explanation: "Both technicians are correct. In a parallel circuit, each branch receives the full source voltage, so voltage is equal across all branches. Additionally, according to Kirchhoff's current law, total circuit current is the sum of currents flowing through each individual branch. These are fundamental properties of parallel circuits.",
    diagram: ""
  },
  {
    id: 6,
    q: "A technician is reading a wiring diagram and sees a dashed line connecting two components. What does this typically represent?",
    options: ["A) A ground connection", "B) A fuse link", "C) Components housed in the same assembly", "D) A high-voltage circuit"],
    answer: 2,
    explanation: "On most automotive wiring diagrams, a dashed or dotted line drawn around or connecting components indicates they are housed within the same physical assembly or module. This helps technicians locate related components during diagnosis. Understanding wiring diagram symbols is essential for efficient troubleshooting of electrical problems.",
    diagram: ""
  },
  {
    id: 7,
    q: "When using a digital multimeter to measure current flow, how must the meter be connected in the circuit?",
    options: ["A) In parallel with the load", "B) In series with the load", "C) Across the battery terminals", "D) Across the ground connection"],
    answer: 1,
    explanation: "An ammeter or DMM set to measure current must be connected in series with the circuit so all current flows through the meter. Connecting it in parallel would create a short circuit through the meter's very low internal resistance, potentially damaging the meter or blowing its internal fuse. Always start on the highest range setting.",
    diagram: ""
  },
  {
    id: 8,
    q: "An oscilloscope is being used to test a crankshaft position sensor signal. What advantage does the oscilloscope have over a DMM for this test?",
    options: ["A) It can measure resistance more accurately", "B) It displays the signal waveform pattern over time", "C) It measures higher voltages", "D) It does not require a ground connection"],
    answer: 1,
    explanation: "An oscilloscope displays voltage changes over time as a waveform pattern, allowing the technician to see signal quality, frequency, amplitude, and anomalies in sensor output. A DMM only shows average or RMS values and cannot reveal intermittent glitches, signal dropouts, or waveform distortions that indicate failing sensors.",
    diagram: ""
  },
  {
    id: 9,
    q: "A short to ground in a lighting circuit would most likely cause which symptom?",
    options: ["A) Dim lights", "B) A blown fuse", "C) Flickering lights", "D) Lights that stay on constantly"],
    answer: 1,
    explanation: "A short to ground provides an unintended low-resistance path for current flow, bypassing the load. This causes excessive current that exceeds the fuse rating, blowing the fuse and disabling the circuit. Fuses are designed to protect wiring from overheating and potential fire caused by short circuits in the vehicle's electrical system.",
    diagram: ""
  },
  {
    id: 10,
    q: "A vehicle has a parasitic battery drain. What is the maximum acceptable parasitic draw for most vehicles?",
    options: ["A) 5 milliamps", "B) 50 milliamps", "C) 500 milliamps", "D) 5 amps"],
    answer: 1,
    explanation: "Most manufacturers specify a maximum acceptable parasitic draw of approximately 50 milliamps (0.050 amps), though some vehicles with extensive electronic modules may allow slightly more. Excessive parasitic draw will discharge the battery overnight or within a few days. Technicians use an ammeter in series with the battery to measure this draw.",
    diagram: ""
  },
  {
    id: 11,
    q: "Technician A says an open circuit will blow the fuse. Technician B says an open circuit will prevent current from flowing. Who is correct?",
    options: ["A) Technician A only", "B) Technician B only", "C) Both Technician A and Technician B", "D) Neither Technician A nor Technician B"],
    answer: 1,
    explanation: "Only Technician B is correct. An open circuit is a break in the current path that prevents current from flowing. Since no current flows, the fuse will not blow. A blown fuse is caused by excessive current from a short circuit, not an open. An open circuit results in a component that simply does not operate.",
    diagram: ""
  },
  {
    id: 12,
    q: "When performing a voltage drop test on a ground circuit, the meter leads should be connected between which two points?",
    options: ["A) Battery positive and the component", "B) The component ground and battery negative", "C) Both battery terminals", "D) The fuse box and the component"],
    answer: 1,
    explanation: "To test voltage drop on a ground circuit, connect the DMM positive lead to the component ground connection and the negative lead to the battery negative terminal. The circuit must be energized and under load during this test. A reading above 0.1 volts on a ground circuit indicates excessive resistance needing repair.",
    diagram: ""
  },
  {
    id: 13,
    q: "A CAN bus communication system uses how many wires for data transmission?",
    options: ["A) One", "B) Two", "C) Three", "D) Four"],
    answer: 1,
    explanation: "The Controller Area Network (CAN) bus uses a twisted pair of two wires designated CAN High and CAN Low. Data is transmitted as differential voltage signals between these two wires. The twisted pair design helps cancel out electromagnetic interference. CAN bus significantly reduces vehicle wiring by allowing modules to share data over a common network.",
    diagram: ""
  },
  {
    id: 14,
    q: "Which of the following tools is LEAST likely to be used for diagnosing an electrical open circuit?",
    options: ["A) Test light", "B) Digital multimeter", "C) Timing light", "D) Fused jumper wire"],
    answer: 2,
    explanation: "A timing light is used to check ignition timing and is not designed for general electrical circuit diagnosis. A test light, DMM, and fused jumper wire are all commonly used to locate open circuits. The test light checks for voltage presence, the DMM measures resistance, and the jumper wire bypasses suspected open sections.",
    diagram: ""
  },
  {
    id: 15,
    q: "A vehicle's CAN bus network has a communication failure. Technician A says a missing terminating resistor can cause this. Technician B says a short between CAN High and CAN Low can cause this. Who is correct?",
    options: ["A) Technician A only", "B) Technician B only", "C) Both Technician A and Technician B", "D) Neither Technician A nor Technician B"],
    answer: 2,
    explanation: "Both technicians are correct. CAN bus networks require 120-ohm terminating resistors at each end of the bus to prevent signal reflections. A missing resistor causes communication errors. A short between CAN High and CAN Low eliminates the differential voltage signal, completely disabling communication on the network.",
    diagram: ""
  },
  {
    id: 16,
    q: "What is the expected resistance reading across the two CAN bus terminating resistors measured at the diagnostic connector with all modules powered down?",
    options: ["A) 0 ohms", "B) 60 ohms", "C) 120 ohms", "D) 240 ohms"],
    answer: 1,
    explanation: "Each end of the CAN bus has a 120-ohm terminating resistor. When measured from the diagnostic connector with modules powered down, these two resistors are in parallel, yielding 60 ohms (120 times 120 divided by 240). This measurement is a quick way to verify CAN bus termination integrity during network troubleshooting.",
    diagram: ""
  },
  {
    id: 17,
    q: "A technician is testing a circuit that has two 10-ohm resistors connected in parallel. What is the total resistance?",
    options: ["A) 5 ohms", "B) 10 ohms", "C) 20 ohms", "D) 0.2 ohms"],
    answer: 0,
    explanation: "For two equal resistors in parallel, total resistance equals one resistor's value divided by the number of resistors. Two 10-ohm resistors in parallel yield 5 ohms. The formula is 1/Rt = 1/R1 + 1/R2. Parallel resistance is always less than the smallest individual resistor, which increases total current flow in the circuit.",
    diagram: ""
  },
  {
    id: 18,
    q: "A vehicle's power window does not operate from either the master switch or the individual door switch. The fuse is good. What should be checked NEXT?",
    options: ["A) Replace the window motor", "B) Check for power and ground at the motor connector", "C) Replace both switches", "D) Replace the fuse panel"],
    answer: 1,
    explanation: "Before replacing any parts, the technician should verify that power and ground are reaching the motor connector. If both switches fail to operate the window, the problem is likely in the common wiring, ground connection, or the motor itself. Testing at the motor connector narrows down whether the fault is in the wiring or the motor.",
    diagram: ""
  },
  {
    id: 19,
    q: "When measuring voltage on an energized circuit, the DMM should be set to which mode?",
    options: ["A) Ohms", "B) DC volts", "C) Amps", "D) Continuity"],
    answer: 1,
    explanation: "When measuring voltage on an energized automotive circuit, the DMM should be set to DC volts since automotive electrical systems use direct current. Attempting to measure voltage while set to ohms or continuity can damage the meter. The amps setting requires series connection. Always verify the meter is on the correct setting before testing.",
    diagram: ""
  },
  {
    id: 20,
    q: "All of the following can cause excessive parasitic battery drain EXCEPT:",
    options: ["A) A trunk light that stays on", "B) A module that fails to enter sleep mode", "C) A corroded battery terminal", "D) An aftermarket amplifier with constant power"],
    answer: 2,
    explanation: "A corroded battery terminal causes high resistance, which reduces current flow rather than causing a parasitic drain. A trunk light staying on, a module not entering sleep mode, and an aftermarket amplifier with constant power all draw current from the battery when the vehicle is off, leading to excessive parasitic drain and a dead battery.",
    diagram: ""
  },
  {
    id: 21,
    q: "A technician uses a test light connected to battery positive to probe a ground wire. The light illuminates. What does this indicate?",
    options: ["A) The wire is open", "B) The wire has a good ground path", "C) The wire is shorted to power", "D) The fuse is blown"],
    answer: 1,
    explanation: "When a test light is connected to battery positive and used to probe a ground wire, illumination confirms a complete path to ground exists. Current flows from the battery positive through the test light and through the ground wire to the battery negative. If the light does not illuminate, the ground path is open.",
    diagram: ""
  },
  {
    id: 22,
    q: "Which type of electrical defect would cause only one component in a series circuit to stop working while the others continue to operate?",
    options: ["A) This cannot happen in a series circuit", "B) A short across that component", "C) An open in the power feed wire", "D) A blown fuse"],
    answer: 1,
    explanation: "If one component in a series circuit is shorted (bypassed), current will flow through the short path instead of through that component, so it will not operate. However, current still flows through the remaining components, so they continue working. An open or blown fuse would stop all components in the series circuit from functioning.",
    diagram: ""
  },
  {
    id: 23,
    q: "A wiring diagram shows a component symbol that looks like two parallel lines of unequal length. What component does this represent?",
    options: ["A) A resistor", "B) A capacitor", "C) A battery", "D) A diode"],
    answer: 2,
    explanation: "The symbol with two parallel lines of unequal length represents a battery or cell in a wiring diagram. The longer line represents the positive terminal and the shorter line represents the negative terminal. Recognizing standard electrical symbols is critical for reading automotive wiring diagrams and locating components during troubleshooting.",
    diagram: ""
  },
  {
    id: 24,
    q: "A technician needs to find an intermittent open in a wiring harness. Which method is MOST effective?",
    options: ["A) Visual inspection only", "B) Replacing the entire harness", "C) Wiggling the harness while monitoring the circuit with a DMM", "D) Checking fuse amperage ratings"],
    answer: 2,
    explanation: "Wiggling or flexing the wiring harness while monitoring the circuit with a DMM or test light is the most effective way to locate an intermittent open. The break will momentarily make and lose contact as the wiring is manipulated, causing voltage or resistance fluctuations on the meter that pinpoint the area of the fault.",
    diagram: ""
  },
  {
    id: 25,
    q: "What is the purpose of a fusible link in an automotive electrical system?",
    options: ["A) To increase current flow to the starter", "B) To protect high-current circuits from overload", "C) To regulate voltage to accessories", "D) To ground the alternator output"],
    answer: 1,
    explanation: "A fusible link is a short section of wire that is four gauge sizes smaller than the circuit it protects. It acts as a high-current fuse that melts and opens when current exceeds safe levels, protecting the wiring harness from fire damage. Fusible links protect critical circuits like the main battery feed and alternator output.",
    diagram: ""
  },
  {
    id: 26,
    q: "Technician A says a high-impedance DMM should be used when testing electronic circuits. Technician B says a standard test light is acceptable for testing electronic control module circuits. Who is correct?",
    options: ["A) Technician A only", "B) Technician B only", "C) Both Technician A and Technician B", "D) Neither Technician A nor Technician B"],
    answer: 0,
    explanation: "Only Technician A is correct. A high-impedance digital multimeter (at least 10 megohms input impedance) draws minimal current and will not damage sensitive electronic circuits. A standard test light draws enough current to potentially damage electronic control modules and can give false readings on low-current electronic circuits.",
    diagram: ""
  },

  // =============================================
  // BATTERY & STARTING SYSTEM (27-44)
  // =============================================
  {
    id: 27,
    q: "A fully charged 12-volt automotive battery should have an open circuit voltage of approximately:",
    options: ["A) 11.8 volts", "B) 12.0 volts", "C) 12.6 volts", "D) 13.2 volts"],
    answer: 2,
    explanation: "A fully charged 12-volt automotive battery has an open circuit voltage (OCV) of approximately 12.6 volts. Each of the six cells produces about 2.1 volts. A reading of 12.4 volts indicates about 75% charge, 12.2 volts about 50%, and 12.0 volts about 25%. Below 12.0 volts the battery is considered discharged.",
    diagram: ""
  },
  {
    id: 28,
    q: "When performing a battery load test, the load applied should be equal to:",
    options: ["A) Battery voltage multiplied by 10", "B) One-half of the CCA rating", "C) The full CCA rating", "D) One-quarter of the reserve capacity"],
    answer: 1,
    explanation: "A standard battery load test applies a load equal to one-half of the battery's cold cranking amps (CCA) rating for 15 seconds. At the end of 15 seconds, the voltage should remain at or above 9.6 volts at 70 degrees Fahrenheit. If voltage drops below this threshold, the battery has failed the test and should be replaced.",
    diagram: ""
  },
  {
    id: 29,
    q: "A vehicle will not crank. Battery voltage reads 12.6 volts. When the key is turned to start, voltage drops to 4 volts. What is the MOST likely cause?",
    options: ["A) Bad ignition switch", "B) Defective battery with high internal resistance", "C) Open starter solenoid", "D) Faulty neutral safety switch"],
    answer: 1,
    explanation: "A battery that shows 12.6 volts at rest but drops to 4 volts under the cranking load has excessive internal resistance, indicating a defective battery. Good batteries maintain at least 9.6 volts during cranking. An open solenoid or faulty safety switch would prevent cranking entirely rather than causing a severe voltage drop.",
    diagram: ""
  },
  {
    id: 30,
    q: "When jump starting a vehicle with a dead battery, which connection should be made LAST?",
    options: ["A) Positive clamp to the dead battery", "B) Positive clamp to the good battery", "C) Negative clamp to engine ground on the dead vehicle", "D) Negative clamp to the dead battery"],
    answer: 2,
    explanation: "The last connection should be the negative clamp to an engine ground on the dead vehicle, away from the battery. This prevents sparks near the battery, which could ignite hydrogen gas emitted during charging. The correct order is: positive to dead, positive to good, negative to good, and finally negative to engine ground on dead vehicle.",
    diagram: ""
  },
  {
    id: 31,
    q: "Technician A says a slow cranking condition can be caused by a high-resistance battery cable connection. Technician B says a slow cranking condition can be caused by incorrect engine oil viscosity. Who is correct?",
    options: ["A) Technician A only", "B) Technician B only", "C) Both Technician A and Technician B", "D) Neither Technician A nor Technician B"],
    answer: 2,
    explanation: "Both technicians are correct. A high-resistance battery cable connection reduces the current reaching the starter motor, causing slow cranking. Engine oil that is too thick, especially in cold weather when incorrect viscosity is used, increases the mechanical load on the starter and causes slow cranking as the engine resists turning over.",
    diagram: ""
  },
  {
    id: 32,
    q: "A starter current draw test on a V8 engine shows 350 amps. The specification is 150-200 amps. What does this high reading indicate?",
    options: ["A) A weak battery", "B) High resistance in the starter circuit", "C) Excessive mechanical resistance or a faulty starter", "D) Normal operation for a V8 engine"],
    answer: 2,
    explanation: "A starter drawing significantly more current than specified indicates either excessive mechanical resistance in the engine (such as a seized component or incorrect timing) or an internal fault in the starter motor itself such as shorted windings. High resistance in cables would actually reduce current draw, and a weak battery cannot supply excessive current.",
    diagram: ""
  },
  {
    id: 33,
    q: "A voltage drop test on the positive battery cable during cranking shows 0.8 volts. This indicates:",
    options: ["A) Normal cable condition", "B) Excessive resistance in the cable or connections", "C) A short to ground in the cable", "D) A fully charged battery"],
    answer: 1,
    explanation: "Maximum allowable voltage drop on the positive battery cable circuit during cranking is 0.5 volts. A reading of 0.8 volts indicates excessive resistance caused by corrosion, loose connections, or a damaged cable. This resistance reduces the voltage and current available to the starter motor, potentially causing slow cranking or no-crank conditions.",
    diagram: ""
  },
  {
    id: 34,
    q: "The starter solenoid performs which TWO functions?",
    options: ["A) Engages the flywheel and supplies ground to the motor", "B) Pushes the drive gear into the flywheel and closes the main power contacts", "C) Regulates voltage and controls current flow", "D) Disengages the drive gear and opens the main contacts"],
    answer: 1,
    explanation: "The starter solenoid performs two critical functions: it uses an electromagnetic plunger to push the starter drive gear into mesh with the engine flywheel ring gear, and it closes a set of heavy-duty internal contacts that connect battery voltage directly to the starter motor for cranking. Both actions occur simultaneously when energized.",
    diagram: ""
  },
  {
    id: 35,
    q: "A relay in the starter control circuit has four terminals. What are these terminals typically labeled?",
    options: ["A) Input, output, signal, ground", "B) 30, 85, 86, 87", "C) Positive, negative, coil, switch", "D) A, B, C, D"],
    answer: 1,
    explanation: "Standard automotive relays use terminal numbering 30 (common power input), 85 (coil ground), 86 (coil power/trigger), and 87 (normally open output). Terminal 87a, if present, is the normally closed contact. Understanding relay terminal numbers is essential for testing relays and interpreting wiring diagrams in automotive electrical systems.",
    diagram: ""
  },
  {
    id: 36,
    q: "A vehicle clicks rapidly when the key is turned to start but the engine does not crank. What is the MOST likely cause?",
    options: ["A) A stuck starter drive gear", "B) A discharged battery or poor battery connections", "C) A faulty ignition switch", "D) A seized engine"],
    answer: 1,
    explanation: "Rapid clicking when attempting to start indicates the starter solenoid is engaging and disengaging repeatedly because there is insufficient battery voltage to hold the solenoid in and power the starter motor. This is typically caused by a discharged battery or high-resistance battery cable connections that cannot deliver adequate cranking current.",
    diagram: ""
  },
  {
    id: 37,
    q: "After charging a completely dead battery, a technician should wait at least how long before testing the battery's open circuit voltage?",
    options: ["A) 5 minutes", "B) 12 to 24 hours or remove surface charge", "C) 1 minute", "D) No waiting is necessary"],
    answer: 1,
    explanation: "After charging, a surface charge exists on the battery plates that gives a falsely high voltage reading. The technician should wait 12 to 24 hours for the surface charge to dissipate, or remove it by applying a brief load such as turning on the headlights for two minutes. This ensures an accurate open circuit voltage measurement.",
    diagram: ""
  },
  {
    id: 38,
    q: "All of the following can cause a no-crank condition EXCEPT:",
    options: ["A) A faulty neutral safety switch", "B) A blown starter fuse", "C) A worn serpentine belt", "D) An open circuit in the ignition switch start position"],
    answer: 2,
    explanation: "A worn serpentine belt drives the alternator and accessories but has no connection to the starter motor circuit. The starter is powered directly by the battery through the solenoid. A faulty neutral safety switch, a blown starter fuse, or an open in the ignition switch start circuit would all prevent the starter from receiving power to crank.",
    diagram: ""
  },
  {
    id: 39,
    q: "Technician A says a battery conductance tester can accurately test a discharged battery. Technician B says a carbon pile load tester requires the battery to be at least 75% charged before testing. Who is correct?",
    options: ["A) Technician A only", "B) Technician B only", "C) Both Technician A and Technician B", "D) Neither Technician A nor Technician B"],
    answer: 2,
    explanation: "Both technicians are correct. A conductance tester sends a small AC signal through the battery to measure plate surface area and can provide accurate results even on a discharged battery. A carbon pile load tester draws heavy current and requires the battery to be at least 75% charged to produce valid test results.",
    diagram: ""
  },
  {
    id: 40,
    q: "A battery's Cold Cranking Amps (CCA) rating indicates:",
    options: ["A) The amps the battery can deliver at 80°F for 30 seconds", "B) The amps the battery can deliver at 0°F for 30 seconds maintaining at least 7.2 volts", "C) The total amp-hours the battery can store", "D) The charging amperage required"],
    answer: 1,
    explanation: "Cold Cranking Amps is the number of amperes a battery can deliver at 0 degrees Fahrenheit for 30 seconds while maintaining a terminal voltage of at least 7.2 volts. This rating is critical for cold weather starting performance and is the primary specification used to select the correct replacement battery for a vehicle.",
    diagram: ""
  },
  {
    id: 41,
    q: "During a starter current draw test, what instrument is used to measure the current without breaking the circuit?",
    options: ["A) A standard test light", "B) An inductive amp clamp", "C) A voltmeter connected in parallel", "D) An ohmmeter"],
    answer: 1,
    explanation: "An inductive amp clamp (current clamp) measures current by detecting the magnetic field around the cable without disconnecting or breaking the circuit. This is essential for starter current draw tests since the high current would exceed the capacity of most inline ammeters. The clamp simply goes around the battery cable during cranking.",
    diagram: ""
  },
  {
    id: 42,
    q: "A vehicle with a push-button start system cranks but will not start. The key fob battery is dead. How can the driver start the vehicle?",
    options: ["A) Jump start the vehicle from another battery", "B) Hold the key fob against the start button and press it", "C) The vehicle cannot be started without a working fob battery", "D) Replace the ignition switch"],
    answer: 1,
    explanation: "Most push-button start systems have a backup transponder reader near the start button. Placing the key fob directly against or very near the start button allows the passive RFID transponder chip inside the fob to be read at close range without battery power. This emergency procedure lets the vehicle start normally.",
    diagram: ""
  },
  {
    id: 43,
    q: "A starter motor spins but does not engage the flywheel. What is the MOST likely cause?",
    options: ["A) Dead battery", "B) Faulty starter drive (Bendix) mechanism", "C) Open in the solenoid coil", "D) Corroded battery terminals"],
    answer: 1,
    explanation: "If the starter motor spins freely without engaging the flywheel, the starter drive mechanism (Bendix or overrunning clutch) is faulty. It is not extending the pinion gear into the flywheel ring gear, or the overrunning clutch is slipping. A dead battery or open solenoid coil would prevent the motor from spinning at all.",
    diagram: ""
  },
  {
    id: 44,
    q: "When charging a conventional lead-acid battery, what safety precaution is MOST important?",
    options: ["A) Charge in an enclosed space to keep warm", "B) Ensure adequate ventilation to prevent hydrogen gas accumulation", "C) Charge at the highest amperage to reduce time", "D) Remove only the positive terminal before charging"],
    answer: 1,
    explanation: "Lead-acid batteries produce hydrogen gas during charging, which is highly explosive. Adequate ventilation is essential to prevent gas accumulation that could be ignited by a spark or flame. Charging should be done in a well-ventilated area, and sparks should be kept away from the battery. Slow charging rates are also safer for battery longevity.",
    diagram: ""
  },

  // =============================================
  // CHARGING SYSTEM (45-54)
  // =============================================
  {
    id: 45,
    q: "Normal alternator output voltage with the engine running should be approximately:",
    options: ["A) 11.5 to 12.0 volts", "B) 12.6 to 13.0 volts", "C) 13.5 to 14.5 volts", "D) 15.0 to 16.0 volts"],
    answer: 2,
    explanation: "A properly functioning charging system should produce between 13.5 and 14.5 volts with the engine running at approximately 2000 RPM. This voltage range is necessary to charge the battery and power electrical loads. Voltage below 13.5 indicates undercharging, while voltage above 14.8 to 15.0 indicates overcharging and a likely voltage regulator fault.",
    diagram: ""
  },
  {
    id: 46,
    q: "Technician A says the voltage regulator controls alternator output by varying the field current. Technician B says the voltage regulator is always a separate component from the alternator. Who is correct?",
    options: ["A) Technician A only", "B) Technician B only", "C) Both Technician A and Technician B", "D) Neither Technician A nor Technician B"],
    answer: 0,
    explanation: "Only Technician A is correct. The voltage regulator controls alternator output by varying the current flowing through the rotor field winding, which changes the magnetic field strength and thus the output voltage. Technician B is incorrect because most modern vehicles have the voltage regulator built into the alternator, not as a separate component.",
    diagram: ""
  },
  {
    id: 47,
    q: "A serpentine drive belt is slipping on the alternator pulley. Which symptom would MOST likely result?",
    options: ["A) Engine overheating only", "B) Intermittent low charging voltage and a squealing noise", "C) Starter motor failure", "D) Transmission shifting problems"],
    answer: 1,
    explanation: "A slipping serpentine belt cannot spin the alternator rotor at the required speed, resulting in low or intermittent charging voltage. The slippage also creates a characteristic high-pitched squealing noise, especially during acceleration or when electrical loads are turned on. A worn, glazed, or improperly tensioned belt should be replaced.",
    diagram: ""
  },
  {
    id: 48,
    q: "During an alternator output test, the alternator produces only 40 amps when it is rated at 120 amps. What is the MOST likely cause?",
    options: ["A) A fully charged battery", "B) An open in one phase of the stator winding", "C) A slipping drive belt", "D) A faulty ignition switch"],
    answer: 1,
    explanation: "An alternator producing approximately one-third of its rated output strongly suggests one of the three stator phase windings is open. Since a three-phase alternator produces power from three windings, losing one phase reduces output by roughly one-third. A diode failure in one phase can cause a similar reduction in maximum output capacity.",
    diagram: ""
  },
  {
    id: 49,
    q: "A ripple voltage test on an alternator using an oscilloscope shows large variations in the AC component. What does this indicate?",
    options: ["A) Normal alternator operation", "B) One or more faulty diodes in the rectifier bridge", "C) A loose drive belt", "D) Low battery voltage"],
    answer: 1,
    explanation: "Excessive AC ripple in the alternator output indicates faulty diodes in the rectifier bridge. Diodes convert AC to DC, and when one or more fail, they allow AC voltage to pass through. Normal ripple should be less than 0.5 volts AC. Excessive ripple can cause electrical system malfunctions and premature battery failure.",
    diagram: ""
  },
  {
    id: 50,
    q: "A battery warning light stays on after the engine starts. Charging voltage measures 12.2 volts at the battery with the engine at 2000 RPM. What should be checked FIRST?",
    options: ["A) The battery state of charge", "B) The alternator drive belt and connections", "C) The starter motor", "D) The headlight switch"],
    answer: 1,
    explanation: "A charging voltage of only 12.2 volts with the engine running indicates the alternator is not charging. The first check should be the drive belt and electrical connections, as these are the most common and easily verified causes. A broken, loose, or missing belt will prevent the alternator from spinning and generating any output.",
    diagram: ""
  },
  {
    id: 51,
    q: "What is the purpose of the diode trio in some alternators?",
    options: ["A) To convert AC to DC for the vehicle's electrical system", "B) To supply DC current to the rotor field winding from the stator", "C) To protect the battery from overcharging", "D) To increase alternator output at idle"],
    answer: 1,
    explanation: "The diode trio in certain alternator designs rectifies a portion of the stator AC output to provide DC current for the rotor field winding. This makes the alternator self-exciting after initial startup. Once running, the alternator no longer needs external field current from the battery, allowing it to maintain its own field excitation.",
    diagram: ""
  },
  {
    id: 52,
    q: "An overcharging alternator can cause all of the following EXCEPT:",
    options: ["A) Premature battery failure from electrolyte boiling", "B) Burned-out light bulbs", "C) Slow engine cranking", "D) Damage to electronic control modules"],
    answer: 2,
    explanation: "Slow engine cranking is caused by low battery voltage or high resistance, not overcharging. An overcharging alternator producing excessive voltage can boil battery electrolyte causing premature failure, burn out light bulbs designed for lower voltage, and damage sensitive electronic control modules that cannot tolerate voltages above their rated specifications.",
    diagram: ""
  },
  {
    id: 53,
    q: "Technician A says an alternator with a bad diode can drain the battery when the engine is off. Technician B says a bad diode can cause a whining noise from the alternator. Who is correct?",
    options: ["A) Technician A only", "B) Technician B only", "C) Both Technician A and Technician B", "D) Neither Technician A nor Technician B"],
    answer: 2,
    explanation: "Both technicians are correct. A shorted diode can create a path for battery current to flow back through the alternator when the engine is off, draining the battery. A leaky or failed diode also allows AC ripple into the electrical system, which can cause an audible whining noise that changes pitch with engine speed through the audio speakers.",
    diagram: ""
  },
  {
    id: 54,
    q: "What happens to alternator output as engine RPM increases from idle to highway speed?",
    options: ["A) Output voltage continuously increases", "B) Output voltage is regulated to remain within specification", "C) Output voltage decreases", "D) Output voltage fluctuates randomly"],
    answer: 1,
    explanation: "The voltage regulator maintains alternator output voltage within a specified range regardless of engine speed by adjusting rotor field current. As RPM increases, the regulator reduces field current to keep voltage constant. Without the regulator, output would increase with speed and damage the electrical system. The regulator ensures consistent voltage at all engine speeds.",
    diagram: ""
  },

  // =============================================
  // LIGHTING SYSTEMS (55-66)
  // =============================================
  {
    id: 55,
    q: "A vehicle's left front headlight is dim while the right one is bright. What is the MOST likely cause?",
    options: ["A) A faulty headlight switch", "B) A poor ground connection at the left headlight", "C) A weak battery", "D) A bad alternator"],
    answer: 1,
    explanation: "When one headlight is dim while the other is bright, a poor ground connection at the dim headlight is the most likely cause. The high resistance ground reduces current flow through that bulb, dimming it. A faulty switch, weak battery, or bad alternator would typically affect both headlights equally since they share the same power supply circuit.",
    diagram: ""
  },
  {
    id: 56,
    q: "HID (High-Intensity Discharge) headlights require which additional component that halogen headlights do not?",
    options: ["A) A fuse", "B) A ballast/igniter module", "C) A headlight switch", "D) A ground wire"],
    answer: 1,
    explanation: "HID headlights require a ballast and igniter module to create the initial high-voltage pulse (up to 25,000 volts) needed to ionize the xenon gas and start the arc, then regulate the operating voltage at about 85 volts. Halogen bulbs operate directly on 12-volt vehicle power and do not require this additional high-voltage starting equipment.",
    diagram: ""
  },
  {
    id: 57,
    q: "Technician A says LED headlights typically last longer than halogen bulbs. Technician B says LED headlights produce less heat at the lens but require heat management at the base. Who is correct?",
    options: ["A) Technician A only", "B) Technician B only", "C) Both Technician A and Technician B", "D) Neither Technician A nor Technician B"],
    answer: 2,
    explanation: "Both technicians are correct. LED headlights have a much longer lifespan than halogen bulbs, often lasting the life of the vehicle. While LEDs produce less infrared heat projected forward at the lens compared to halogens, they generate significant heat at the semiconductor junction that must be managed with heat sinks or cooling fans at the bulb base.",
    diagram: ""
  },
  {
    id: 58,
    q: "The turn signals on a vehicle flash at twice the normal rate. What is the MOST likely cause?",
    options: ["A) A faulty turn signal switch", "B) A burned-out turn signal bulb", "C) A weak battery", "D) A short in the turn signal wiring"],
    answer: 1,
    explanation: "Rapid or hyper-flashing of turn signals indicates a burned-out bulb on that side of the vehicle. The thermal or electronic flasher module detects reduced current draw from the missing bulb and flashes at a faster rate. This serves as a built-in diagnostic feature alerting the driver that a turn signal bulb needs replacement.",
    diagram: ""
  },
  {
    id: 59,
    q: "An electronic flasher module controls the turn signal flash rate by monitoring:",
    options: ["A) Engine RPM", "B) Battery voltage", "C) Current flow through the circuit", "D) Vehicle speed"],
    answer: 2,
    explanation: "Electronic flasher modules monitor the current flow in the turn signal circuit to determine the flash rate. Normal current draw from functioning bulbs produces the standard flash rate. When a bulb burns out, the reduced current draw causes the flasher to increase the flash rate, alerting the driver to the bulb failure.",
    diagram: ""
  },
  {
    id: 60,
    q: "A vehicle's interior dome light does not turn on when any door is opened, but it works with the manual switch. What should be checked?",
    options: ["A) The dome light bulb", "B) The dome light fuse", "C) The door jamb switches or body control module", "D) The headlight switch"],
    answer: 2,
    explanation: "Since the dome light works with the manual switch, the bulb, fuse, and power supply are good. The fault is in the door-triggered circuit. The door jamb switches (or the body control module that processes the door ajar inputs) should be checked. A disconnected, stuck, or misadjusted door switch will prevent the dome light from activating on door opening.",
    diagram: ""
  },
  {
    id: 61,
    q: "A trailer is connected to a tow vehicle and the left trailer turn signal does not work. The tow vehicle's turn signals work properly. What should be checked FIRST?",
    options: ["A) The tow vehicle's flasher module", "B) The trailer wiring connector and ground connection", "C) The tow vehicle's headlight switch", "D) The tow vehicle's fuse panel"],
    answer: 1,
    explanation: "Since the tow vehicle's signals work correctly, the problem is in the trailer circuit. The trailer wiring connector and ground should be checked first, as corrosion at the plug connection and poor trailer ground are the most common causes of trailer lighting failures. A loose or corroded pin in the connector interrupts current to the affected circuit.",
    diagram: ""
  },
  {
    id: 62,
    q: "A standard trailer light connector with four pins provides circuits for all of the following EXCEPT:",
    options: ["A) Left turn/brake", "B) Right turn/brake", "C) Tail/running lights", "D) Reverse/backup lights"],
    answer: 3,
    explanation: "A standard four-pin trailer connector provides left turn/brake, right turn/brake, tail/running lights, and a ground connection. Reverse lights require a fifth or additional pin found on five-pin, six-pin, or seven-pin connectors used for trailers with electric brakes, backup lights, or auxiliary power circuits.",
    diagram: ""
  },
  {
    id: 63,
    q: "Daytime running lights (DRLs) on most vehicles operate by:",
    options: ["A) Using a separate set of high-power bulbs", "B) Running the headlights or dedicated LEDs at reduced intensity", "C) Illuminating only the fog lights", "D) Flashing the turn signals continuously"],
    answer: 1,
    explanation: "Daytime running lights typically operate the headlamps at reduced voltage or intensity, or use dedicated LED modules. The body control module or DRL module controls their activation when the engine is running and the headlight switch is off. DRLs improve vehicle visibility to other drivers during daylight hours and are required in many jurisdictions.",
    diagram: ""
  },
  {
    id: 64,
    q: "A vehicle's brake lights do not work but the turn signals function normally using the same bulbs. What is the MOST likely cause?",
    options: ["A) Burned-out dual-filament bulbs", "B) A faulty brake light switch", "C) A bad turn signal switch", "D) A blown turn signal fuse"],
    answer: 1,
    explanation: "When turn signals work but brake lights do not using the same dual-filament bulbs, the bulbs are not the problem. The brake light switch mounted on the brake pedal is the most likely cause. This switch sends power to the brake light filament when the pedal is pressed. A faulty, misadjusted, or disconnected switch prevents brake light operation.",
    diagram: ""
  },
  {
    id: 65,
    q: "Adaptive headlights on a modern vehicle adjust beam direction based on:",
    options: ["A) Engine RPM only", "B) Steering angle and vehicle speed", "C) Outside temperature", "D) Battery voltage level"],
    answer: 1,
    explanation: "Adaptive headlight systems use steering angle sensor data and vehicle speed information to pivot the headlight beams in the direction the vehicle is turning. This improves nighttime visibility around curves and corners. Some advanced systems also use camera data and GPS to adjust beam patterns based on road conditions and oncoming traffic.",
    diagram: ""
  },
  {
    id: 66,
    q: "A vehicle's headlights turn on automatically when it gets dark. Which sensor enables this feature?",
    options: ["A) Oxygen sensor", "B) Ambient light sensor (photoelectric cell)", "C) Throttle position sensor", "D) Coolant temperature sensor"],
    answer: 1,
    explanation: "An ambient light sensor, also called a photoelectric cell or photo sensor, is mounted on the dashboard and detects the level of outside light. When light levels drop below a calibrated threshold, the body control module automatically turns on the headlights and taillights. This same sensor may also control automatic dimming of the instrument panel.",
    diagram: ""
  },

  // =============================================
  // BODY ELECTRICAL (67-100)
  // =============================================
  {
    id: 67,
    q: "A power window operates slowly in one direction only. What is the MOST likely cause?",
    options: ["A) A blown fuse", "B) Binding or friction in the window track or regulator", "C) A bad master switch", "D) A dead battery"],
    answer: 1,
    explanation: "A power window that is slow in only one direction is typically caused by mechanical binding in the window track, worn window regulator components, or a dry/damaged window channel seal creating excessive friction. Electrical problems such as a blown fuse, bad switch, or dead battery would affect operation in both directions equally.",
    diagram: ""
  },
  {
    id: 68,
    q: "Technician A says the power door lock actuator reverses polarity to lock and unlock. Technician B says the body control module controls door lock actuators on modern vehicles. Who is correct?",
    options: ["A) Technician A only", "B) Technician B only", "C) Both Technician A and Technician B", "D) Neither Technician A nor Technician B"],
    answer: 2,
    explanation: "Both technicians are correct. Power door lock actuators use a reversible DC motor that changes direction based on polarity reversal to lock or unlock. On modern vehicles, the body control module controls the actuators by sending polarity-reversed signals through relay circuits or directly through integrated driver circuits based on input from switches or remote signals.",
    diagram: ""
  },
  {
    id: 69,
    q: "A power seat moves forward and backward but will not tilt or recline. What is the MOST likely cause?",
    options: ["A) A faulty seat switch assembly", "B) A blown seat fuse", "C) A faulty tilt/recline motor or its circuit", "D) A dead battery"],
    answer: 2,
    explanation: "Since the seat moves forward and backward, the fuse, main power supply, and common ground are functional. The fault is isolated to the tilt/recline circuit, which typically has its own motor and switch contacts. A faulty tilt/recline motor, a broken wire in that specific circuit, or worn switch contacts for that function are the most likely causes.",
    diagram: ""
  },
  {
    id: 70,
    q: "A vehicle's horn sounds weak. All of the following could be the cause EXCEPT:",
    options: ["A) A corroded horn ground connection", "B) A worn horn relay", "C) A faulty radio antenna", "D) A cracked horn diaphragm"],
    answer: 2,
    explanation: "A faulty radio antenna is part of the entertainment system and has no connection to the horn circuit. A corroded ground connection adds resistance reducing current to the horn. A worn relay may not pass full current. A cracked horn diaphragm directly affects the horn's ability to produce full sound volume and tone.",
    diagram: ""
  },
  {
    id: 71,
    q: "The windshield wipers operate on high speed only and do not work on low or intermittent settings. What is the MOST likely cause?",
    options: ["A) A faulty wiper motor", "B) A faulty wiper switch or resistor pack in the motor circuit", "C) A blown wiper fuse", "D) A broken wiper arm"],
    answer: 1,
    explanation: "Multi-speed wiper motors use internal brushes, external resistors, or electronic module control for different speeds. If high speed works but low and intermittent do not, the fault is in the speed control circuit, typically the wiper switch, the resistor pack, or the electronic control module. The motor itself and the fuse are functional since high speed works.",
    diagram: ""
  },
  {
    id: 72,
    q: "A cruise control system disengages when going uphill. All of the following could cause this EXCEPT:",
    options: ["A) A vacuum leak in the servo diaphragm", "B) A faulty vehicle speed sensor", "C) A misadjusted throttle cable", "D) A worn tire"],
    answer: 3,
    explanation: "A worn tire would slightly affect speedometer accuracy but would not cause cruise control to disengage on hills. A vacuum leak prevents the servo from maintaining throttle position under load. A faulty speed sensor provides incorrect speed data. A misadjusted throttle cable prevents the servo from applying enough throttle to maintain speed uphill.",
    diagram: ""
  },
  {
    id: 73,
    q: "A keyless entry remote works only at very close range. What is the MOST likely cause?",
    options: ["A) A faulty door lock actuator", "B) A weak key fob battery", "C) A blown fuse in the vehicle", "D) A defective ignition switch"],
    answer: 1,
    explanation: "A keyless entry remote that only works at very close range almost always has a weak or dying battery. The remote transmits a radio frequency signal, and as the battery weakens, the signal strength decreases, reducing effective range. Replacing the key fob battery typically restores full operating range. This is the most common remote entry complaint.",
    diagram: ""
  },
  {
    id: 74,
    q: "A remote start system fails to start the engine. The remote appears to send the signal (indicator light flashes). What should be checked FIRST?",
    options: ["A) The engine oil level", "B) The hood pin switch and system status conditions", "C) The alternator", "D) The exhaust system"],
    answer: 1,
    explanation: "Remote start systems have multiple safety interlocks that prevent engine starting. The hood pin switch is a common failure point; if it is stuck, disconnected, or misadjusted, the system will not start the engine as a safety precaution. Other conditions such as check engine light, low fuel, or an open door can also inhibit remote start.",
    diagram: ""
  },
  {
    id: 75,
    q: "A vehicle's HMI (Human Machine Interface) touchscreen is unresponsive to touch inputs but displays information correctly. What is the MOST likely cause?",
    options: ["A) A blown display fuse", "B) A faulty touchscreen digitizer layer", "C) A dead battery", "D) A disconnected antenna"],
    answer: 1,
    explanation: "The HMI touchscreen has two main layers: the display (LCD) and the touch-sensing digitizer layer on top. If the screen displays correctly but does not respond to touch, the digitizer or its connection is faulty. A fuse problem or dead battery would affect the entire display. An antenna issue would only affect radio or navigation reception.",
    diagram: ""
  },
  {
    id: 76,
    q: "A heated seat does not warm up on the driver's side, but the passenger heated seat works normally. What should be checked?",
    options: ["A) The vehicle's main fuse box only", "B) The driver's seat heating element, switch, and dedicated wiring", "C) The alternator output", "D) The coolant temperature sensor"],
    answer: 1,
    explanation: "Since the passenger heated seat works, the system power supply and general fusing are functional. The fault is isolated to the driver's side circuit. The driver's seat heating element, its dedicated control switch, wiring connections under the seat, and the specific fuse for that circuit should be checked. Heating elements can develop open circuits from wear.",
    diagram: ""
  },
  {
    id: 77,
    q: "Technician A says the anti-theft system immobilizer prevents the engine from starting by disabling the fuel or ignition system. Technician B says a flashing security light on the dash while driving indicates normal system operation. Who is correct?",
    options: ["A) Technician A only", "B) Technician B only", "C) Both Technician A and Technician B", "D) Neither Technician A nor Technician B"],
    answer: 0,
    explanation: "Only Technician A is correct. The immobilizer system disables the fuel injection, ignition system, or starter to prevent unauthorized starting. Technician B is incorrect because a flashing security light while driving indicates a system fault. During normal operation, the security light should illuminate briefly at startup and then turn off once the engine is running.",
    diagram: ""
  },
  {
    id: 78,
    q: "An SRS (Supplemental Restraint System) airbag warning light stays on continuously. What does this indicate?",
    options: ["A) Normal system operation", "B) The airbag system has a fault and may not deploy in a crash", "C) The airbags are about to deploy", "D) The seat belts need replacement"],
    answer: 1,
    explanation: "A continuously illuminated SRS warning light indicates a fault in the airbag system. The system has detected a problem and the airbags may not deploy properly in a crash. The vehicle should be diagnosed immediately with a scan tool capable of reading SRS codes. Common causes include faulty clock spring, sensor issues, or wiring problems.",
    diagram: ""
  },
  {
    id: 79,
    q: "A backup camera image appears on the screen but is very dark. What is the MOST likely cause?",
    options: ["A) A blown fuse for the display", "B) A dirty camera lens or faulty camera", "C) A defective transmission range sensor", "D) Low battery voltage"],
    answer: 1,
    explanation: "A dark but visible backup camera image most commonly indicates a dirty camera lens covered with mud, ice, or road grime. If cleaning the lens does not resolve the issue, the camera itself may have a failing image sensor or a damaged lens assembly. Since the image displays, the screen, fuse, and signal wiring are functioning correctly.",
    diagram: ""
  },
  {
    id: 80,
    q: "A power window express-down feature stops working after battery replacement. What procedure is likely needed?",
    options: ["A) Replace the window motor", "B) Perform an auto-down initialization or calibration procedure", "C) Replace the window fuse", "D) Replace the master window switch"],
    answer: 1,
    explanation: "Many vehicles require a window auto-up/auto-down initialization procedure after battery disconnection. The body control module loses its learned window travel endpoints when power is lost. The procedure typically involves holding the window switch in the full down position for several seconds, then holding it in the full up position until the calibration completes.",
    diagram: ""
  },
  {
    id: 81,
    q: "A vehicle's power locks lock but do not unlock from the driver's door switch. All other switches unlock the doors normally. What is the MOST likely cause?",
    options: ["A) A blown fuse", "B) A faulty driver's door lock switch (unlock contact)", "C) A bad body control module", "D) A defective door lock actuator"],
    answer: 1,
    explanation: "Since locking works from the driver's switch and unlocking works from all other switches, the fuse, actuators, and body control module are functional. The fault is isolated to the unlock contact within the driver's door lock switch. The lock contact in the same switch works properly, but the unlock side has an internal open or poor contact.",
    diagram: ""
  },
  {
    id: 82,
    q: "Technician A says SRS clock spring replacement requires disabling the airbag system first. Technician B says the steering wheel must be centered before installing a new clock spring. Who is correct?",
    options: ["A) Technician A only", "B) Technician B only", "C) Both Technician A and Technician B", "D) Neither Technician A nor Technician B"],
    answer: 2,
    explanation: "Both technicians are correct. The airbag system must be disabled by disconnecting the battery and waiting the specified time (usually two or more minutes) before working on any SRS component to prevent accidental deployment. The steering wheel must be centered before installing the clock spring to ensure proper ribbon cable alignment and prevent damage during full steering rotation.",
    diagram: ""
  },
  {
    id: 83,
    q: "A vehicle with automatic headlights has a forward-facing camera used for all of the following EXCEPT:",
    options: ["A) Lane departure warning", "B) Automatic high beam control", "C) Tire pressure monitoring", "D) Forward collision warning"],
    answer: 2,
    explanation: "Tire pressure monitoring uses dedicated pressure sensors inside each wheel, not a forward-facing camera. Forward-facing cameras are used for lane departure warning by detecting lane markings, automatic high beam control by detecting oncoming headlights, and forward collision warning by identifying vehicles and obstacles ahead of the vehicle.",
    diagram: ""
  },
  {
    id: 84,
    q: "A heated steering wheel does not work. The heated seats and all other electrical accessories function normally. What should be checked FIRST?",
    options: ["A) The alternator output", "B) The heated steering wheel fuse and clock spring circuit", "C) The battery state of charge", "D) The engine coolant temperature"],
    answer: 1,
    explanation: "Since all other electrical accessories work, general power supply is fine. The heated steering wheel has its own fuse and receives power through the clock spring assembly that connects rotating steering wheel components to stationary vehicle wiring. A blown dedicated fuse or an open circuit in the clock spring can disable only the heated steering wheel function.",
    diagram: ""
  },
  {
    id: 85,
    q: "A vehicle's power sunroof opens but will not close. What is the MOST likely cause?",
    options: ["A) A dead battery", "B) A faulty sunroof switch, motor, or track obstruction", "C) A blown engine fuse", "D) A defective alternator"],
    answer: 1,
    explanation: "Since the sunroof opens, the fuse and power supply are working. A fault in the close direction could be caused by a defective switch contact for the close function, a motor that only runs in one direction due to a worn brush, or a mechanical obstruction or binding in the track that prevents closing. The track and drain system should also be inspected.",
    diagram: ""
  },
  {
    id: 86,
    q: "The SRS system uses a clock spring located in the steering column to:",
    options: ["A) Time the airbag deployment", "B) Maintain electrical connections to the steering wheel while it rotates", "C) Wind the horn spring mechanism", "D) Adjust steering wheel height"],
    answer: 1,
    explanation: "The clock spring is a coiled flat ribbon cable assembly that maintains continuous electrical connections between the steering column wiring and components on the rotating steering wheel, including the driver airbag, horn, and steering wheel controls. It coils and uncoils as the wheel turns, allowing full rotation without breaking connections.",
    diagram: ""
  },
  {
    id: 87,
    q: "A vehicle's rear window defroster clears only part of the window. What is the MOST likely cause?",
    options: ["A) A weak battery", "B) One or more broken heating grid lines", "C) A faulty defroster switch", "D) A blown defroster fuse"],
    answer: 1,
    explanation: "Rear window defrosters use thin conductive heating grid lines printed on the glass. If one or more lines are broken, those sections will not heat and the window clears only partially. Broken grid lines can be repaired with conductive paint. A bad switch, blown fuse, or weak battery would affect the entire defroster, not just portions.",
    diagram: ""
  },
  {
    id: 88,
    q: "Technician A says a scan tool is needed to diagnose body control module communication faults. Technician B says body control modules can control multiple systems including lighting, locks, and windows. Who is correct?",
    options: ["A) Technician A only", "B) Technician B only", "C) Both Technician A and Technician B", "D) Neither Technician A nor Technician B"],
    answer: 2,
    explanation: "Both technicians are correct. A scan tool is essential for reading diagnostic trouble codes, viewing data parameters, and performing module resets on the body control module. Modern BCMs are central controllers that manage numerous vehicle systems including interior and exterior lighting, power locks, power windows, keyless entry, and many other convenience features.",
    diagram: ""
  },
  {
    id: 89,
    q: "A vehicle's horn sounds continuously without pressing the horn button. What is the MOST likely cause?",
    options: ["A) A stuck horn relay or a shorted horn switch", "B) A blown horn fuse", "C) A disconnected horn ground wire", "D) A weak battery"],
    answer: 0,
    explanation: "A continuously sounding horn is caused by a stuck horn relay that remains closed, or a shorted horn switch providing constant ground to the relay coil. The relay contacts are stuck in the closed position, allowing continuous power to the horn. A blown fuse would silence the horn, and a disconnected ground would prevent the horn from sounding.",
    diagram: ""
  },
  {
    id: 90,
    q: "A vehicle's windshield washer pump does not operate, but the wipers work fine. The washer fluid reservoir is full. What should be checked?",
    options: ["A) The wiper motor", "B) The washer pump fuse, switch, and pump motor", "C) The wiper arm alignment", "D) The transmission fluid level"],
    answer: 1,
    explanation: "Since wipers work, the general wiper system power is functional. The washer pump circuit is separate and includes its own fuse, the washer switch or stalk contact, and the pump motor. Check for power and ground at the pump connector. Common failures include a burned-out pump motor, a blown washer pump fuse, or a faulty switch contact.",
    diagram: ""
  },
  {
    id: 91,
    q: "A blind spot monitoring system warning light stays on and the system does not function. What should be checked FIRST?",
    options: ["A) The engine oil level", "B) The rear bumper-mounted radar sensors for damage or obstruction", "C) The brake pad thickness", "D) The spark plugs"],
    answer: 1,
    explanation: "Blind spot monitoring systems use radar sensors typically mounted behind the rear bumper fascia. Physical damage from a minor rear impact, accumulated mud, ice, or aftermarket bumper accessories can obstruct or damage these sensors. A visual inspection and scan tool check for fault codes related to the blind spot monitoring sensors should be performed first.",
    diagram: ""
  },
  {
    id: 92,
    q: "A power mirror does not adjust in any direction. The other mirror works normally. What is the MOST likely cause?",
    options: ["A) A faulty mirror select switch set to the wrong position", "B) A faulty mirror motor assembly or wiring to that mirror", "C) A dead battery", "D) A bad body control module"],
    answer: 1,
    explanation: "Since the other mirror works normally, the fuse, switch, and common wiring are functional. The fault is isolated to the non-working mirror. The most likely cause is a faulty mirror motor assembly or a wiring problem in the harness going to that specific mirror. However, the mirror select switch position should also be verified before further diagnosis.",
    diagram: ""
  },
  {
    id: 93,
    q: "Technician A says a vehicle's memory seat system stores position data in the body control module or seat module. Technician B says memory seats use position sensors to track seat adjustment. Who is correct?",
    options: ["A) Technician A only", "B) Technician B only", "C) Both Technician A and Technician B", "D) Neither Technician A nor Technician B"],
    answer: 2,
    explanation: "Both technicians are correct. Memory seat systems store the driver's preferred seat positions in the body control module or a dedicated seat memory module. Position feedback sensors on each seat adjustment motor track the exact seat position so the module can accurately return the seat to the stored settings when a memory button or key fob is activated.",
    diagram: ""
  },
  {
    id: 94,
    q: "A lane departure warning system provides an alert by:",
    options: ["A) Applying the brakes fully", "B) Vibrating the steering wheel, sounding an audible chime, or both", "C) Shutting off the engine", "D) Turning on the hazard lights"],
    answer: 1,
    explanation: "Lane departure warning systems alert the driver through haptic feedback such as steering wheel vibration, audible chimes or tones, and sometimes visual warnings on the instrument cluster or HMI display. Some advanced systems also provide gentle corrective steering input. The system does not shut off the engine, fully apply brakes, or activate hazard lights.",
    diagram: ""
  },
  {
    id: 95,
    q: "A vehicle's automatic climate control blower motor only operates at full speed. What is the MOST likely cause?",
    options: ["A) A faulty compressor", "B) A failed blower motor resistor or control module", "C) Low refrigerant charge", "D) A clogged cabin air filter"],
    answer: 1,
    explanation: "The blower motor resistor block or electronic control module regulates blower speed by varying voltage or using pulse-width modulation. When this component fails, the blower often defaults to full speed because the full-speed circuit typically bypasses the resistor. A faulty compressor or low refrigerant affects cooling, not blower speed. A clogged filter reduces airflow but not motor speed.",
    diagram: ""
  },
  {
    id: 96,
    q: "A 360-degree camera system displays a distorted image from one camera. The other cameras work correctly. What is the MOST likely cause?",
    options: ["A) A defective display screen", "B) A damaged or misaligned individual camera", "C) A bad alternator", "D) Low tire pressure"],
    answer: 1,
    explanation: "The 360-degree surround view system uses multiple cameras (typically four) and stitches their images together. If only one view is distorted while others are clear, the individual camera is damaged, misaligned, or has a dirty lens. Water intrusion, physical impact, or a loose mounting can cause individual camera distortion without affecting the rest of the system.",
    diagram: ""
  },
  {
    id: 97,
    q: "A vehicle equipped with a tire pressure monitoring system (TPMS) shows a warning light. After inflating all tires to proper pressure, the light remains on. What is the MOST likely cause?",
    options: ["A) The tires are overinflated", "B) A faulty TPMS sensor or the system needs to be reset", "C) The brake pads are worn", "D) The alternator is overcharging"],
    answer: 1,
    explanation: "If the TPMS light remains on after proper tire inflation, a faulty pressure sensor in one of the wheels may not be transmitting correctly, or the system requires a relearn or reset procedure. TPMS sensor batteries can fail after several years. Some vehicles require a reset procedure after tire inflation changes using a scan tool or specific driving routine.",
    diagram: ""
  },
  {
    id: 98,
    q: "A vehicle's ambient interior lighting LEDs flicker intermittently. All other electrical systems work normally. What should be checked?",
    options: ["A) The alternator output", "B) The ambient lighting module wiring connections and ground", "C) The engine spark plugs", "D) The brake fluid level"],
    answer: 1,
    explanation: "Intermittent LED flickering isolated to the ambient lighting system with all other systems working normally points to a wiring or connection problem specific to that circuit. Loose connectors, poor ground connections, or a failing ambient lighting control module are the most likely causes. The alternator and general electrical system are ruled out since everything else works fine.",
    diagram: ""
  },
  {
    id: 99,
    q: "Technician A says a parking assist system uses ultrasonic sensors to detect objects. Technician B says paint or aftermarket coatings on the bumper can affect parking sensor operation. Who is correct?",
    options: ["A) Technician A only", "B) Technician B only", "C) Both Technician A and Technician B", "D) Neither Technician A nor Technician B"],
    answer: 2,
    explanation: "Both technicians are correct. Parking assist systems typically use ultrasonic sensors embedded in the bumper to detect nearby objects by emitting sound waves and measuring return time. Excessive paint thickness, aftermarket coatings, or metallic paints applied over the sensors can dampen the ultrasonic signal and affect detection accuracy or range.",
    diagram: ""
  },
  {
    id: 100,
    q: "A vehicle's electronic stability control (ESC) warning light is on and the system is disabled. A scan tool shows a steering angle sensor code. What is the MOST likely repair?",
    options: ["A) Replace the brake master cylinder", "B) Recalibrate or replace the steering angle sensor", "C) Replace the alternator", "D) Adjust the headlight aim"],
    answer: 1,
    explanation: "The steering angle sensor provides critical input to the ESC system about the direction the driver intends to steer. A fault code for this sensor requires recalibration, which is often needed after wheel alignment, steering component replacement, or battery disconnection. If recalibration fails, the sensor may need replacement to restore full ESC functionality.",
    diagram: ""
  }
];
