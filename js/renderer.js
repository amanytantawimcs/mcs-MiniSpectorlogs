// ==========================================
// 1. CONFIGURATION & CONSTANTS
// ==========================================

// ... existing code ...
const cameraLightItems = [
    { label: 'Video Front Camera' },
    { label: 'Video Rear Camera' },
    { label: 'External Video Camera' },
    { label: 'PRC Camera' },
    { label: 'PRC External Camera' },
    { label: 'PRC Real-time Camera' },
    { label: 'PRC Light' },
    { label: 'External Light' }
];

const sensorItems = [
    { label: 'Navigation Sensor' },
    { label: 'Altitude Sensor' },
    { label: 'Gyro Compass' },
    { label: 'Profilers' },
    { label: 'Mbes (Multi-Beam Echo Sounder)' },
    { label: 'Pipe/Cable Tracker' },
    { label: 'DVL (Doppler Velocity Log)' }
];
// ... existing code ...

const payloadSensors = [...cameraLightItems, ...sensorItems];

const auxTools = [
    { key: 'cp', label: 'CP (Cathodic Protection)' },
    { key: 'fmd', label: 'FMD (Flooded Member Detection)' },
    { key: 'ut', label: 'UT (Ultrasonic Thickness)' },
    { key: 'brush', label: 'Cleaning Brush' },
    { key: 'acfm', label: 'ACFM (AC Field Measurement)' },
    { key: 'mpi', label: 'MPI (Magnetic Particle Inspection)' }
];

const crewRoles = ['ROV Supervisor', 'ROV Operator', 'ROV Technician', 'CSWIP 3.4U Ispector', 'PRC Engineer', 'Inspection Engineer'];

const HARDWARE_ITEMS = [
    // ROV Main Units
    'MiniSpector ROV — full assembly (4x Lead Disks, PRC Plug, 1DOF Gimbal, 7x Thrusters, PTZ, Dummies)',
    'MiniSpector ROV Enhanced — Quad Fiber (L-shape Brush Fixation)',
    'MiniSpector ROV Enhanced — Quad Fiber (New Thrusters)',
    // Thrusters
    "MiniSpector 1kW Thruster - Subconn (New FW)",
    "MiniSpector 1kW Thruster - Subconn (Old FW)",
    "MiniSpector 1kW Thruster - Subconn",
    'Portable Thrusters Setup', 'Thruster Net Guards',
    'Right Propeller Assembly', 'Left Propeller Assembly',
    'Set of Thruster Spares (springs, washers, bearings)',
    // Cameras
    'GVI Camera (lightweight single PRC)',
    'Boom Camera', 'PTZ Camera', 'PTZ Camera Fixation',
    'GVI Fixation with Latch', 'GVI Cable',
    'Boom Camera Swivel Set (center attachment + arm)',
    'External LED Light - Subconn', 'External LED Fixation',
    '3-Pin Cable for External LED Subconn',
    'Rear Camera Control Cable DB9 to 2-Pin Rossette',
    // Control & Piloting
    "MiniSpector Piloting Case (HCU 10 & Tablet Charger)",
    "MiniSpector Piloting Case (HCU 14, External Tablet Charger, GETAC-7)",
    "MiniSpector Piloting Case",
    'Hand Control Unit (HCU)',
    // Power & Tether
    "MiniSpector Power Supply - Enhanced Quad",
    "MiniSpector Tether Reel Slip-Ring (Quad Fiber, bullet, bolt pin, 5-pin SubConn)",
    "MiniSpector Tether Reel (Quad Fiber, bullet, bolt pin, 5-pin SubConn)",
    "MiniSpector Tether Reel (bullet, bolt pin, 5-pin SubConn)",
    'AC Cable 3 cores x 16mm 100m with Earth Leakage',
    'On Deck Station Power Cable', 'CAN Cable',
    // Latching & Mechanical
    'Latch System', 'Latch System & 50m Stainless Steel Wire',
    '1DOF Gimbal for Latch System',
    'Lead Disks 1.25 kg', 'Foam Floaters Set (2x 0.5kg & 1x 0.25kg)',
    'Full Skid Kit', 'ROVPaq Brackets',
    'Pilot Case Upper Joints', 'Pilot Case Lower Joints',
    'External PRC Setup (fixation, Pod, GVI cable, floaters)',
    'Set of Studs & Screws (nuts, washers, o-rings, hoses, clamps)',
    // Inspection Tools
    'UT System (UT Bottle, Probe, Membranes, Couplant, Calibration Part)',
    'UT & FMD Fixation Setup', 'UT Probe Handler for Small ROV',
    'On-Deck UT Test Setup (24VDC PSU, 6-Pin female bulkhead, DB9 RS-232, USB-RS232, Common GND)',
    'FMD Sensor with Handler', 'FMD Handler',
    'High Power Brush Pod', 'FlexiClean Fixation',
    'Brush Head Adaptor with Brush Head', 'Marine Growth Stick', 'Marine Growth Scraper',
    // Electronics & Pods
    'High Power Pod — 350VDC→24VDC + Thruster Board + RS485 + Payload Ethernet - Subconn',
    'High Power Pod — 350VDC→24VDC + Thruster Board On/Off',
    'MOXA Pod', 'PRC Plug',
    // Cables & Connectors
    'Ethernet Cable Boom/PTZ 8-Pin Male to 6-Pin Female Subconn',
    '6-Pin Male-Female Pin-to-Pin Subconn', '8-Pin Male-Female Pin-to-Pin Subconn',
    '6-Pin Male to Pigtail Subconn', '8-Pin Male to Pigtail Subconn',
    '6-Pin Dummy Male Leak', '8-Pin Dummy Female',
    'FMD Cable 6-Pin Male to 8-Pin Female SubConn',
    'RS-232 Cable RJ45 to DB9 — 2m', 'RS-232 Cable RJ45 to DB9 — 5m',
    'RS-485 Cable RJ45 to DB9 — 2m',
    'LC to ST Fiber Patch Chord 5m', 'LC to LC Fiber Patch Chord 5m',
    'LC to LC Fiber Patch Chord 15m',
    'Thor SDI to Fiber Receiver + 12VDC Power Adapter + BNC-BNC 75Ω 60cm',
    '6-Pin Male-Female Subconn Ethernet Cable', '8-Pin Male to 6-Pin Female Subconn Ethernet Cable',
    // Spares & Consumables
    'Fuses Set', 'Filters for Power Supply Case IP55',
    // Decklink / AV
    'Decklink', 'HDMI to AV Converter', 'Hauppauge (1265)', 'Hauppauge Converter',
    // Networking
    'Switch', 'Planet Switch', 'MOXA', 'UPS', 'Network Cables',
    // Generic
    'Screen', 'Power Supply', 'Power Cables',
];

const EQUIP_CATEGORIES  = ['ROV Main Unit','Thrusters','Cameras','Cables & Connectors','Inspection Tools','Mechanical & Fixation','Electronics & Pods','Spares & Consumables','Networking','Other'];
const EQUIP_CAT_COLORS  = {
    'ROV Main Unit':'#f39124','Thrusters':'#459fd9','Cameras':'#a78bfa',
    'Cables & Connectors':'#34d399','Inspection Tools':'#fbbf24',
    'Mechanical & Fixation':'#fb923c','Electronics & Pods':'#60a5fa',
    'Spares & Consumables':'#f87171','Networking':'#4ade80','Other':'#6b7280'
};


const MACHINE_NAMES = [
    'ROVOnline', 'DVE', 'ROVLog', 'PRC Camera Controller', 'PRC Processing',
    'SC Admin', 'SC Offline', 'ROVOffline', 'Broadcast Server', 'Broadcast Client',
    'RIS', 'OAS Vessel', 'OAS Office', 'Backup Machine'
];

const SOFTWARE_LIST = [
    'ROVOffline', 'ROVViewer', 'ROVOnline', 'DVE', 'ROVLog',
    'SC-Offline', 'SC-Viewer', 'SC-Admin',
    'PRC-Camera Controller', 'PRC-3D Reconstruction', 'PRC-MCS3DViewer', 'PRC-SC-Processing',
    'OAS Vessel', 'OAS Office', 'Broadcast Server', 'Broadcast Client',
    'CP', 'Minispector', 'AutoCharting Tool', 'MCS Report Generator',
    'AIMS', 'HTML Report', 'WebProgress', 'SQL 2014', 'Cad 2017',
    'Design Review 2018', 'Office', 'Adobe', '.rar', 'CUDA 10.1', 'Vimba 4',
    'ROVOnline + DVE'
];


const preDiveGroups = [
    {
        title: "General System Condition",
        items: [
            { key: 'frame', label: 'ROV frame inspected' },
            { key: 'buoyancy', label: 'Buoyancy blocks secure' },
            { key: 'fasteners', label: 'Fasteners checked' },
            { key: 'cracks', label: 'No visible cracks/damage' },
            { key: 'lifting', label: 'Lifting points OK' }
        ]
    },
    {
        title: "Electrical & Control",
        items: [
            { key: 'startup', label: 'Control system startup complete' },
            { key: 'software', label: 'Software connected' },
            { key: 'inputs', label: 'Inputs tested' },
            { key: 'imu', label: 'IMU functional' },
            { key: 'depth', label: 'Depth sensor reads correctly' }
        ]
    },
    {
        title: "Thrusters",
        items: [
            { key: 'thrusters', label: 'All Thrusters responding' },
            { key: 'sound', label: 'No abnormal sound' },
            { key: 'debris', label: 'No debris/mineral buildup' }
        ]
    },
    {
        title: "Leak & Ingression",
        items: [
            { key: 'indicators', label: 'All Leak Indicators clear' },
            { key: 'connectors', label: 'Connectors sealed' },
            { key: 'moisture', label: 'No moisture inside housings' }
        ]
    },
    {
        title: "Payload",
        items: [
            { key: 'sensors', label: 'Additional Sensors verified' },
            { key: 'calib', label: 'Calibration dates checked' },
            { key: 'mount', label: 'Mounting secure' }
        ]
    },
    {
        title: "Camera & Lighting",
        items: [
            { key: 'camera', label: 'Camera clear' },
            { key: 'dome', label: 'Dome clean' },
            { key: 'lights', label: 'Lights functional' },
            { key: 'exposure', label: 'Exposure/brightness' }
        ]
    }
];

// ==========================================
// TECHNICAL LOGBOOK CHECKLIST DEFINITIONS
// (Source: ROV Technical Logbook v1.7.0)
// ==========================================

const CHECKLISTS = {
    mobilization: {
        title: 'Mobilization',
        sections: [
            {
                id: 'mob_pkg', title: 'Packaging Contents',
                note: 'Caution: Clear any potential hazard from the unpacking area.',
                items: [
                    { id: 'mob_pkg_1',  label: 'MiniSpector ROV' },
                    { id: 'mob_pkg_2',  label: 'Power supply case' },
                    { id: 'mob_pkg_3',  label: 'On-Deck station case' },
                    { id: 'mob_pkg_4',  label: 'Tether Reel' },
                    { id: 'mob_pkg_5',  label: '100-meter AC Cable' },
                    { id: 'mob_pkg_6',  label: 'Manuals / Logbook' },
                    { id: 'mob_pkg_7',  label: 'Items of Packing List (main items, spare items)' },
                    { id: 'mob_pkg_8',  label: 'Tools' },
                    { id: 'mob_pkg_9',  label: 'Inspection PCs' }
                ]
            },
            {
                id: 'mob_tnr', title: 'Tether Reel without Slip Ring',
                items: [
                    { id: 'mob_tnr_1', label: 'After finding a suitable area for tether unwinding, lock the tether setup wheels' },
                    { id: 'mob_tnr_2', label: 'While the tether end of the small drum is tied up and safe for rotation, release the tether end in the big drum' },
                    { id: 'mob_tnr_3', label: 'Unwind the suitable length of tether based on the operation depth of the ROV plus the distance between tether drum and on-deck equipment' },
                    { id: 'mob_tnr_4', label: 'While unwinding, check that the tether has no damage or cuts. Preferably lay the tether on the ground in figure-8 to avoid twisting' },
                    { id: 'mob_tnr_5', label: 'After releasing the tether from the large drum, untie the small drum' },
                    { id: 'mob_tnr_6', label: 'Counter-rotate the drum to release the small drum side of the tether; handle the retracted length at the big drum to avoid knots' },
                    { id: 'mob_tnr_7', label: 'Lock the drum' }
                ]
            },
            {
                id: 'mob_tsr', title: 'Tether Reel with Slip Ring',
                items: [
                    { id: 'mob_tsr_1', label: 'After finding a suitable area for tether unwinding, lock the tether setup wheels' },
                    { id: 'mob_tsr_2', label: 'Untie the small drum and release the other tether end' },
                    { id: 'mob_tsr_3', label: 'Unwind the suitable length of tether based on the distance between tether reel and on-deck equipment' },
                    { id: 'mob_tsr_4', label: 'Lock the small drum' },
                    { id: 'mob_tsr_5', label: 'Untie the big drum and release the tether end' },
                    { id: 'mob_tsr_6', label: 'Unwind the tether end to be able to attach/connect the junction pod to the ROV' },
                    { id: 'mob_tsr_7', label: 'Lock the big drum until it\'s time for the dive (can be locked/unlocked multiple times based on required tether length)' }
                ]
            },
            {
                id: 'mob_rov', title: 'MiniSpector ROV',
                items: [
                    { id: 'mob_rov_1',  label: 'Aft looking forward (facing the rear camera), insert the tether from the right side and pass it down to the bottom of the vehicle' },
                    { id: 'mob_rov_2',  label: 'Using tie wraps, fix the junction pod to the fixation points on the MiniSpector skid' },
                    { id: 'mob_rov_3',  label: 'Fiber connector must be cleaned using alcohol pads, alcohol sticks and compressed air' },
                    { id: 'mob_rov_4',  label: 'Connect the fiber connector of the tether to the ROV fiber port' },
                    { id: 'mob_rov_5',  label: 'Connect the power end of the tether to the power port on the ROV (apply silicon grease if needed)' },
                    { id: 'mob_rov_6',  label: 'On top of the ROV, check the 1 DOF gimbal. If GVI camera is required, unmount the 1 DOF Gimbal, mount GVI with latch fixation and fixate the bullet of the tether to it' },
                    { id: 'mob_rov_7',  label: 'Aft looking forward, unscrew the right top side of the skid, insert the cable gripper (Chinese leg) then screw the skid again' },
                    { id: 'mob_rov_8',  label: 'Install the desired lead blocks on the ROV Skid to balance as required for the job (Negative / Positive / Neutral Buoyancy)' },
                    { id: 'mob_rov_9',  label: 'Tie all loose cables using tie wraps. All must be within the skid frame; no cables allowed on outer faces of the skid' },
                    { id: 'mob_rov_10', label: 'When the cable is connected to the pins of the bulkheads, there should be no gaps between cable and bulkhead' },
                    { id: 'mob_rov_11', label: 'Apply thin coat of silicon grease to connectors of the thrusters, peripherals bulkheads, and power bulkheads before use' },
                    { id: 'mob_rov_12', label: 'The plastic locking sleeve must tighten to the bulkhead very well to avoid water leakage. Do not over tighten — finger tighten only' },
                    { id: 'mob_rov_13', label: 'Make sure all unused peripherals bulkheads are properly sealed with their dummy plugs to avoid water leakage' }
                ]
            },
            {
                id: 'mob_per', title: 'Peripherals (connect as required)',
                note: 'Enhanced ROV bulkhead numbers are listed first, Non-Enhanced second.',
                items: [
                    { id: 'mob_per_1',  label: 'If needed — Analog camera (Enhanced BH: 9 | Non-Enhanced BH: 9)' },
                    { id: 'mob_per_2',  label: 'If needed — Sonar or multi-beam sonar (Enhanced BH: 8 | Non-Enhanced BH: 11)' },
                    { id: 'mob_per_3',  label: 'If needed — UT or FMD (Enhanced BH: 7 | Non-Enhanced BH: 12)' },
                    { id: 'mob_per_4',  label: 'If needed — FMD only (Enhanced BH: 6 | Non-Enhanced BH: 13)' },
                    { id: 'mob_per_5',  label: 'If needed — Manipulators (Enhanced BH: 4 | Non-Enhanced BH: 14)' },
                    { id: 'mob_per_6',  label: 'If needed — Pan/tilt camera PTZ (Enhanced BH: 5 | Non-Enhanced BH: 15)' },
                    { id: 'mob_per_7',  label: 'If needed — HD camera (Enhanced BH: 16 | Non-Enhanced BH: 16)' },
                    { id: 'mob_per_8',  label: 'If needed — CP probe (Enhanced BH: 2 | Non-Enhanced BH: 18)' },
                    { id: 'mob_per_9',  label: 'If needed — CP remote cell (Enhanced BH: 1 | Non-Enhanced BH: 19)' },
                    { id: 'mob_per_10', label: 'If needed — DVL (Enhanced BH: 19 | Non-Enhanced BH: 11)' },
                    { id: 'mob_per_11', label: 'If needed — 2× External LEDs (Enhanced BH: 20 & 21 | Non-Enhanced BH: 20 & 21)' }
                ]
            },
            {
                id: 'mob_psu', title: 'Power Supply',
                note: 'Caution: Avoid connecting/disconnecting ports while powered ON. Do not connect AC cable to power source before connecting to the power supply.',
                items: [
                    { id: 'mob_psu_1',  label: 'Remove the covers of the Power Supply unit' },
                    { id: 'mob_psu_2',  label: 'While the 100-meter AC cable is disconnected from power source, connect the Plug to the power supply\'s "Power In" port' },
                    { id: 'mob_psu_3',  label: 'Connect the tether plug to the power supply\'s "Power Out" port' },
                    { id: 'mob_psu_4',  label: 'Connect the On-deck station power cable to the power supply\'s "Power" port' },
                    { id: 'mob_psu_5',  label: 'Connect the On-deck station CAN cable to the power supply\'s "CAN" port' },
                    { id: 'mob_psu_6',  label: 'Check that all cables are connected and secured in place' },
                    { id: 'mob_psu_7',  label: 'Check that the power supply\'s filters (front and back) are dry and not obstructed' },
                    { id: 'mob_psu_8',  label: 'Check that the Main Power Switch in the power supply is OFF' },
                    { id: 'mob_psu_9',  label: 'Enhanced ROV: tie the earth wire from the tether plug to one of the PSU case bolts' },
                    { id: 'mob_psu_10', label: 'Enhanced ROV: check that both thruster power groups breakers are ON' }
                ]
            },
            {
                id: 'mob_ods', title: 'On-Deck Station and Junction Box',
                items: [
                    { id: 'mob_ods_1',  label: 'Release the locks and open the On-Deck Station' },
                    { id: 'mob_ods_2',  label: 'Connect the 100-meter AC cable to the power source of the platform/vessel/generator' },
                    { id: 'mob_ods_3',  label: 'Connect the Power cable from the Power Supply Unit to the "Power Port"' },
                    { id: 'mob_ods_4',  label: 'Connect the CAN cable from the Power Supply Unit to the "CAN Port"' },
                    { id: 'mob_ods_5',  label: 'Connect the Hand Control Unit into HCU port' },
                    { id: 'mob_ods_6',  label: 'Clean the fiber cables, main fiber port, and junction box fiber ports using alcohol pads, alcohol sticks and compressed air' },
                    { id: 'mob_ods_7',  label: 'Junction box port "A" → On-deck station upper slot (11) of "Main Fiber" port — LC-LC Fiber Cable' },
                    { id: 'mob_ods_8',  label: 'Junction box port "B" → On-deck station lower slot (12) of "Main Fiber" port — LC-LC Fiber Cable' },
                    { id: 'mob_ods_9',  label: 'Twin fiber cable (if used): connect from port A/B of the junction box to the "Main Fiber" port of the On-Deck Station' },
                    { id: 'mob_ods_10', label: 'Junction box port "C" (Rear camera) → "LC" side of LC-ST Fiber Cable' },
                    { id: 'mob_ods_11', label: '"ST" side of the LC-ST Fiber Cable → "ST" fiber port on the "Fiber to SDI Converter"' },
                    { id: 'mob_ods_12', label: 'Connect HDMI cable of on-deck station screen to the "HDMI In" port' },
                    { id: 'mob_ods_13', label: 'Make sure the emergency switch in the control panel of the on-deck station is disengaged' },
                    { id: 'mob_ods_14', label: 'Check that the On-Deck Station filters are dry and not obstructed' },
                    { id: 'mob_ods_15', label: 'Connect Tablet charger cable to the Tablet charging port (optional: tablet can be charged with its external charger)' },
                    { id: 'mob_ods_16', label: 'Connect the Keyboard and Mouse into USB P2 & USB P3 ports (optional)' }
                ]
            }
        ]
    },
    startup: {
        title: 'Start-Up',
        sections: [
            {
                id: 'su_psu', title: 'Power Supply',
                items: [
                    { id: 'su_psu_1', label: 'Check that all cables are connected and secured in place' },
                    { id: 'su_psu_2', label: 'Turn ON the power source from the platform/vessel/generator' },
                    { id: 'su_psu_3', label: 'Enable system power by rotating the Main Power Switch in the power supply to ON' }
                ]
            },
            {
                id: 'su_ods', title: 'On-Deck Station',
                items: [
                    { id: 'su_ods_1',  label: 'Turn ON the On-Deck Station PC; if it does not start automatically, check the light indicator in the control panel' },
                    { id: 'su_ods_2',  label: 'Open "Minispector Server (64bit) v.2.7.4.1209" on the On-Deck Station PC' },
                    { id: 'su_ods_3',  label: 'Configuration/Auditing: Data store Name = "Backup", Failed Logs Path = C:\\Users\\mcs\\Documents\\Backup — save and close' },
                    { id: 'su_ods_4',  label: 'Configuration/Server: IP = 172.168.20.10, Port = 50000 — save and close' },
                    { id: 'su_ods_5',  label: 'Open Configuration/Clients window' },
                    { id: 'su_ods_6',  label: 'Software Clients: Pilot = 172.168.20.11 (tablet) or 172.168.20.10 (On-Deck Station PC)' },
                    { id: 'su_ods_7',  label: 'MiniSpector Clients: Motion = 172.168.20.251, PIU = 172.168.20.252, Serial HUB = 172.168.20.32' },
                    { id: 'su_ods_8',  label: 'Hardware Clients: HCU-Motion = 172.168.20.90, HCU-PIU = 172.168.20.91, Ethernet to Serial = 172.168.20.28, HCU-LIM = 172.168.20.92 — save and close' },
                    { id: 'su_ods_9',  label: 'Click the green button to connect the MiniSpector Server' },
                    { id: 'su_ods_10', label: 'Open "Minispector RovLog Bridge (64bit) v.1.5.4.893" on the On-Deck Station PC' },
                    { id: 'su_ods_11', label: 'Configuration/Auditing: Data store Name = "Backup", Failed Logs Path = C:\\Users\\mcs\\Documents\\Backup — save and close' },
                    { id: 'su_ods_12', label: 'Open Configuration/System window' },
                    { id: 'su_ods_13', label: 'Minispector Server section: IP = 172.168.20.10, Port = 50000' },
                    { id: 'su_ods_14', label: 'RovLog section: Server IP = 172.168.20.153, DMS Port = 50001, Depth Port = 50002, Connection type = UDP' },
                    { id: 'su_ods_15', label: 'RovLog Heading section (if available): Heading Type = Absolute Heading — save and close' },
                    { id: 'su_ods_16', label: 'Click the green button to connect the MiniSpector RovLog Bridge' },
                    { id: 'su_ods_17', label: 'On the on-deck station control panel, make sure all switches are in the OFF position' },
                    { id: 'su_ods_18', label: 'HCU: Roll and Pitch trim knobs set to the middle position' },
                    { id: 'su_ods_19', label: 'HCU: rear and front lights knobs set to zero position' },
                    { id: 'su_ods_20', label: 'HCU: sensitivity knob set to zero position' },
                    { id: 'su_ods_21', label: 'Turn ON the piloting tablet and connect it to the charger; verify the charging cable is working' },
                    { id: 'su_ods_22', label: 'Set the battery power mode of the tablet to "Best performance"' },
                    { id: 'su_ods_23', label: 'Open "Minispector Pilot (64bit) v.2.6.4.884" on the targeted pilot device (tablet or On-Deck Station PC)' },
                    { id: 'su_ods_24', label: 'TCP Configuration: TCP Server = 172.168.20.10, Port = 50000, Pilot Location = On-Deck, Pilot IP = 172.168.20.11 (tablet) or 172.168.20.10 (ODS PC) — save and close' },
                    { id: 'su_ods_25', label: 'PTZ camera (if used): PTZ Camera window — IP = 172.168.20.73, Port = 8000, Username = admin, Password = 12345, Camera Type = Large — save and close' },
                    { id: 'su_ods_26', label: 'Open the "Piloting Operations" window' },
                    { id: 'su_ods_27', label: 'Top right LED: verify Server\'s TCP-Server indicator is lit green' },
                    { id: 'su_ods_28', label: 'Top LED: ensure On-deck Station\'s Motion, Peripherals, Ethernet/serial, and LIM icons are lit green (if not, restart Pilot case and check HCU connection)' },
                    { id: 'su_ods_29', label: 'Make sure the LIM value is 4000 kΩ' },
                    { id: 'su_ods_30', label: 'In the front panel of the power supply, pull out the emergency switch (disengage)' },
                    { id: 'su_ods_31', label: 'Turn ON the ROV power by holding the power switch for a few seconds until the light indicator is lit and current readings increase to more than 1.5 A' },
                    { id: 'su_ods_32', label: 'Wait for 2 minutes for the vehicle to start' },
                    { id: 'su_ods_33', label: 'Open the subsea feedback tab; check that humidity and temperature sensors display readings and "Vz" is fluctuating continuously' },
                    { id: 'su_ods_34', label: 'Top LED: ensure MiniSpector\'s Motion, PIU, and Serial Hub are lit green and stable' }
                ]
            },
            {
                id: 'su_pcs', title: 'Inspection PCs Setup',
                items: [
                    { id: 'su_pcs_1', label: 'Turn ON all PCs (login password for all devices: mcs)' },
                    { id: 'su_pcs_2', label: 'Connect the PRC PC to the "PRC" port in the On-Deck Station (ethernet cable)' },
                    { id: 'su_pcs_3', label: 'Connect all other PCs to the switch (ethernet cables)' },
                    { id: 'su_pcs_4', label: 'Connect the switch to an "ethernet" port in the On-Deck Station' },
                    { id: 'su_pcs_5', label: 'BNC-to-BNC cable: "SDI out" of Fiber-to-SDI Converter → "SDI in" of Decklink (DVE PC of rear fixed camera)' },
                    { id: 'su_pcs_6', label: 'Ethernet-to-serial cable: MOXA 8-port → "Serial 5 RS-232" port in On-Deck Station (if UT/FMD sensor connected)' },
                    { id: 'su_pcs_7', label: 'Ethernet-to-serial cable: MOXA 8-port → "Serial 6 RS-232" port in On-Deck Station (if FMD sensor connected)' },
                    { id: 'su_pcs_8', label: 'Ethernet-to-serial cable: MOXA 8-port → "CP" port in On-Deck Station (if CP sensor connected)' },
                    { id: 'su_pcs_9', label: 'Connect the MOXA 8-port to the RovLog PC' }
                ]
            },
            {
                id: 'su_sw', title: 'Software Startup',
                items: [
                    { id: 'su_sw_1',  label: 'Set PC IPs: PRC = 192.168.16.21 | RovLog = 172.168.20.153 | Online = 172.168.20.154 | DVE Rear = 172.168.20.152 | DVE PTZ = 172.168.20.155 | DVE GVI = 172.168.20.156' },
                    { id: 'su_sw_2',  label: 'On the Online PC, startup "ROVOnline413" and define the required cameras' },
                    { id: 'su_sw_3',  label: 'PTZ camera: IP = 172.168.20.155, Name = PTZ_Camera, Video Capture = Decklink #1, Type = Composite, Input = PAL, Resolution = 1920×1080 — add to init list' },
                    { id: 'su_sw_4',  label: 'Rear fixed camera: IP = 172.168.20.152, Name = Rear_Camera, Video Capture = Decklink #1, Type = Composite, Input = PAL, Resolution = 720×567 — add to init list' },
                    { id: 'su_sw_5',  label: 'GVI camera: IP = 172.168.20.156, Name = GVI_Camera, Video Capture = Allied Capture Filter#1 — add to init list' },
                    { id: 'su_sw_6',  label: 'Add required Overlay: Settings > Overlay Settings — set Location Type and Data Source, save and close' },
                    { id: 'su_sw_7',  label: 'RovLog PC: startup "RovLog" and verify "Dynamic motion sensor" and "Depth" readings appear' },
                    { id: 'su_sw_8',  label: 'PRC PC: startup "Camera Controller V3.0.17.0" (if PRC camera required)' },
                    { id: 'su_sw_9',  label: 'Rear fixed camera: setup settings and startup on "McsDVE" via "ROVOnline413"' },
                    { id: 'su_sw_10', label: 'GVI camera: startup on "McsDVE" via "ROVOnline413"' },
                    { id: 'su_sw_11', label: 'PTZ camera: connect HDMI Out of DVE PC to HDMI In of Decklink in same DVE PC — setup and startup on "McsDVE" via "ROVOnline413"' }
                ]
            }
        ]
    },
    preOp: {
        title: 'Pre-Operation',
        perDive: true,
        sections: [
            {
                id: 'po_dsw', title: 'Dry Test — Software',
                items: [
                    { id: 'po_dsw_1',  label: 'In the MiniSpector Pilot Software, open the "Piloting Operations" window' },
                    { id: 'po_dsw_2',  label: '"Advanced Settings" tab: make sure flying control is closed' },
                    { id: 'po_dsw_3',  label: '"Subsea Feedback" tab: check humidity sensor reads (%) and temperature sensors reads (°C)' },
                    { id: 'po_dsw_4',  label: 'Check Pressure sensors reads by applying pressure on the sensor (on the MiniSpector pod) and observe the depth reading fluctuate' },
                    { id: 'po_dsw_5',  label: '"Surge-Sway Joystick" tab: set sensitivity to 5%' },
                    { id: 'po_dsw_6',  label: '"Heave-Heading Joystick" tab: move joystick diagonally forward — check motion of all thrusters' },
                    { id: 'po_dsw_7',  label: 'Move joystick to the opposite direction — verify thrusters\' motion is reversed' },
                    { id: 'po_dsw_8',  label: '"Redundant" tab: turn ON R3 to test thruster feedback' },
                    { id: 'po_dsw_9',  label: '"Thrusters" tab + "Heave-Heading Joystick" tab simultaneously: move joystick forward and reversed — verify motion of all thrusters in feedback (percentage and direction)' },
                    { id: 'po_dsw_10', label: '"Surge-Sway Joystick" tab: set sensitivity to 0%' },
                    { id: 'po_dsw_11', label: '"Redundant" tab: turn OFF R3' },
                    { id: 'po_dsw_12', label: '"Power Control" tab: turn ON power for all installed cameras, lights, and sensors' },
                    { id: 'po_dsw_13', label: '"Power Indicators" tab: check that powered payloads are lit green and have readings' },
                    { id: 'po_dsw_14', label: '"Light" tab: turn ON Front Light, test dimming mode — increase intensity 0→100, then decrease 100→0' },
                    { id: 'po_dsw_15', label: 'Test flash mode while PRC camera is on — increase intensity 0→100, then decrease 100→0' },
                    { id: 'po_dsw_16', label: 'Turn ON Rear Light — increase intensity 0→100, then decrease 100→0' },
                    { id: 'po_dsw_17', label: 'Turn ON External Light (if available) — increase intensity 0→100, then decrease 100→0' },
                    { id: 'po_dsw_18', label: 'Make sure all lights are turned OFF' },
                    { id: 'po_dsw_19', label: '"Redundant" tab: turn ON R2 to test brush (if available), increase speed using + and − signs, then turn off R2' },
                    { id: 'po_dsw_20', label: 'Open all cameras on their assigned PCs' },
                    { id: 'po_dsw_21', label: 'Check Rear camera footage' },
                    { id: 'po_dsw_22', label: 'Check PRC Camera footage' },
                    { id: 'po_dsw_23', label: 'Check PTZ (Pan/tilt) camera footage' },
                    { id: 'po_dsw_24', label: 'Check GVI camera footage' },
                    { id: 'po_dsw_25', label: 'Check fiber quality: open Planet IGS switch at 172.168.20.3 (user: admin, pass: admin)' },
                    { id: 'po_dsw_26', label: 'Verify both fiber 11 and 12 icons are lit green (connected)' },
                    { id: 'po_dsw_27', label: 'Press and hold on fiber 11 green icon → open in new tab. Repeat for fiber 12' },
                    { id: 'po_dsw_28', label: 'Detailed Port Statistics tab: click Clear and Auto Refresh (for both ports 11 and 12)' },
                    { id: 'po_dsw_29', label: 'Check for no losses on the fibers — check Rx CRC/Alignment counter under "Receive Error Counters" (for both ports 11 and 12)' },
                    { id: 'po_dsw_30', label: 'RovLog PC: ensure "Dynamic motion sensor" and "Depth" readings appear in the application main page' }
                ]
            },
            {
                id: 'po_dhw', title: 'Dry Test — Hardware',
                items: [
                    { id: 'po_dhw_1',  label: 'HCU: set sensitivity to 0; all trim knobs to middle position; auto heading and auto depth switches OFF' },
                    { id: 'po_dhw_2',  label: 'On-deck Station control panel: make sure all power buttons are OFF' },
                    { id: 'po_dhw_3',  label: '"Advanced Settings" tab: make sure flying control is closed' },
                    { id: 'po_dhw_4',  label: 'Open "Trim" tab + "Advanced Settings" tab simultaneously. Switch piloting mode to hardware; verify all HCU trim knob values are 0' },
                    { id: 'po_dhw_5',  label: 'Set HCU sensitivity knob to 5%' },
                    { id: 'po_dhw_6',  label: 'Test motion of horizontal thrusters using heading joystick in forward and reverse directions' },
                    { id: 'po_dhw_7',  label: 'Test motion of vertical thrusters using heave joystick in forward and reverse directions' },
                    { id: 'po_dhw_8',  label: 'Set HCU sensitivity knob to 0%' },
                    { id: 'po_dhw_9',  label: 'On-deck Station control panel: power ON Int. front light and rear light' },
                    { id: 'po_dhw_10', label: 'HCU "Front" light knob: increase front light intensity 0→100, then decrease 100→0' },
                    { id: 'po_dhw_11', label: 'HCU "Rear" light knob: increase rear light intensity 0→100, then decrease 100→0' },
                    { id: 'po_dhw_12', label: 'On-deck Station control panel: power ON all installed cameras and check camera footage' },
                    { id: 'po_dhw_13', label: 'On-deck Station control panel: turn ON R3 to test thruster feedback' },
                    { id: 'po_dhw_14', label: '"Thrusters" tab: move HCU Heave and Heading joysticks forward and reversed — check motion of all thrusters in feedback. Then turn OFF R3 switch' },
                    { id: 'po_dhw_15', label: 'On-deck Station control panel: turn ON R2 to test brush (if available), increase speed using the knob, then turn OFF R2 switch' },
                    { id: 'po_dhw_16', label: '"Advanced Settings" tab: return piloting mode to software' }
                ]
            },
            {
                id: 'po_ut', title: 'UT Sensor Checks',
                items: [
                    { id: 'po_ut_1', label: 'Connect the UT bottle to the MiniSpector using 6 pin male to female cable' },
                    { id: 'po_ut_2', label: 'Power on the UT sensor from "Power Control" tab in "Piloting Operations" window' },
                    { id: 'po_ut_3', label: 'Calibrate the UT Sensor and UT Probe using the 15 mm calibration part' },
                    { id: 'po_ut_4', label: 'Record a reading after calibration', reading: true, readingLabel: 'UT Reading (mm)', readingHint: 'Acceptable: 15 ± 0.05' }
                ]
            },
            {
                id: 'po_cp', title: 'CP Sensor Checks',
                items: [
                    { id: 'po_cp_1', label: 'CP probe must be submerged in a bucket of sea water for at least 30 minutes' },
                    { id: 'po_cp_2', label: 'Connect "Ethernet to Serial RS-232 cable" from On-Deck Station at CP port → PC using Moxa 8-Port or Serial RS-232 to USB cable' },
                    { id: 'po_cp_3', label: 'Connect the CP probe to the MiniSpector' },
                    { id: 'po_cp_4', label: 'Calibrate the CP probe using the zinc block' },
                    { id: 'po_cp_5', label: 'Record a reading after calibration', reading: true, readingLabel: 'CP Reading', readingHint: 'Acceptable: 1000 – 1050' }
                ]
            },
            {
                id: 'po_fmd', title: 'FMD Sensor Checks',
                items: [
                    { id: 'po_fmd_1', label: 'FMD sensor must be submerged in a bucket of water' },
                    { id: 'po_fmd_2', label: 'Connect "Ethernet to Serial RS-232 cable" from On-Deck Station at Serial port 6 → PC using Moxa 8-Port or RS-232 USB (if UT not used, can use Serial port 5)' },
                    { id: 'po_fmd_3', label: 'Connect the FMD sensor to the MiniSpector' },
                    { id: 'po_fmd_4', label: 'Calibrate the FMD sensor using pipe cross-section' },
                    { id: 'po_fmd_5', label: 'Submerge pipe cross-section flooded with water — record reading', reading: true, readingLabel: 'FMD — Flooded', readingHint: '' },
                    { id: 'po_fmd_6', label: 'Submerge pipe cross-section partially flooded with water — record reading', reading: true, readingLabel: 'FMD — Partial', readingHint: '' },
                    { id: 'po_fmd_7', label: 'Submerge pipe cross-section not flooded (dry) — record reading', reading: true, readingLabel: 'FMD — Dry', readingHint: '' }
                ]
            },
            {
                id: 'po_mis', title: 'Prepare for Mission',
                items: [
                    { id: 'po_mis_1',  label: 'Ensure thrusters are NOT obstructed by any objects that may be caught in propellers' },
                    { id: 'po_mis_2',  label: 'Ensure NO loose cables in the ROV — use tie wraps for any loose cable' },
                    { id: 'po_mis_3',  label: 'Ensure LIM indicator reading is 4000 kΩ' },
                    { id: 'po_mis_4',  label: 'Zero all controls in the HCU, set sensitivity to 0' },
                    { id: 'po_mis_5',  label: 'Zero all trims in the "Trim" tab of the pilot software' },
                    { id: 'po_mis_6',  label: '"Advanced Settings" tab: ensure flying mode is deactivated' },
                    { id: 'po_mis_7',  label: 'Visually inspect the system for obvious damage — check domes, connections, and thrusters' },
                    { id: 'po_mis_8',  label: 'Check the tether for damage' },
                    { id: 'po_mis_9',  label: 'Ensure all bolts and nuts in the skid are well tightened' },
                    { id: 'po_mis_10', label: 'Ensure the skid tensioner is attached to the skid' },
                    { id: 'po_mis_11', label: 'Ensure all latch bolts in the latch assembly are well tightened' },
                    { id: 'po_mis_12', label: 'Ensure the tether drum mechanism is locked' }
                ]
            }
        ]
    },
    postOp: {
        title: 'Post-Operation',
        perDive: true,
        sections: [
            {
                id: 'post_gen', title: 'General Checks',
                items: [
                    { id: 'post_gen_1', label: 'Submerge the ROV in a container of fresh water or flush the entire ROV with clean fresh water' },
                    { id: 'post_gen_2', label: 'Check for any visible damage in the ROV' },
                    { id: 'post_gen_3', label: 'Check for any visible damage in the tether' },
                    { id: 'post_gen_4', label: 'Check all thrusters for debris caught in or near propellers' },
                    { id: 'post_gen_5', label: 'Check for lost components from the ROV' },
                    { id: 'post_gen_6', label: 'Check thrusters\' motion in forward direction (sensitivity 5%) without any rotation of the thruster\'s bearing' },
                    { id: 'post_gen_7', label: 'Check thrusters\' motion in reverse direction (sensitivity 5%) without any rotation of the thruster\'s bearing' },
                    { id: 'post_gen_8', label: 'Check LIM indicator' }
                ]
            },
            {
                id: 'post_ut', title: 'UT Sensor Checks',
                items: [
                    { id: 'post_ut_1', label: 'Power on the UT sensor from "Power Control" tab in "Piloting Operations" window' },
                    { id: 'post_ut_2', label: 'Calibrate the UT Sensor and UT Probe using the 15 mm calibration part' },
                    { id: 'post_ut_3', label: 'Record a reading after calibration', reading: true, readingLabel: 'UT Reading (mm)', readingHint: 'Acceptable: 15 ± 0.05' }
                ]
            },
            {
                id: 'post_cp', title: 'CP Sensor Checks',
                items: [
                    { id: 'post_cp_1', label: 'CP probe must be submerged in a bucket of sea water' },
                    { id: 'post_cp_2', label: 'Calibrate the CP probe using the zinc block' },
                    { id: 'post_cp_3', label: 'Record a reading after calibration', reading: true, readingLabel: 'CP Reading', readingHint: 'Acceptable: 1000 – 1050' }
                ]
            },
            {
                id: 'post_fmd', title: 'FMD Sensor Checks',
                items: [
                    { id: 'post_fmd_1', label: 'FMD sensor must be submerged in a bucket of water' },
                    { id: 'post_fmd_2', label: 'Calibrate the FMD sensor using pipe cross-section' },
                    { id: 'post_fmd_3', label: 'Submerge pipe cross-section flooded with water — record reading', reading: true, readingLabel: 'FMD — Flooded', readingHint: '' },
                    { id: 'post_fmd_4', label: 'Submerge pipe cross-section partially flooded with water — record reading', reading: true, readingLabel: 'FMD — Partial', readingHint: '' },
                    { id: 'post_fmd_5', label: 'Submerge pipe cross-section not flooded (dry) — record reading', reading: true, readingLabel: 'FMD — Dry', readingHint: '' }
                ]
            }
        ]
    },
    shutdown: {
        title: 'Shutdown',
        sections: [
            {
                id: 'sd', title: 'Shutdown Procedure',
                items: [
                    { id: 'sd_1', label: 'Press the turn on/off switch for 10 seconds in the power supply to turn OFF MiniSpector power' },
                    { id: 'sd_2', label: 'Close the pilot software app on the Tablet (or piloting device), then shutdown the tablet' },
                    { id: 'sd_3', label: 'Disconnect the MiniSpector server' },
                    { id: 'sd_4', label: 'Close all opened apps on the On-Deck station PC' },
                    { id: 'sd_5', label: 'Shutdown the On-Deck station PC' },
                    { id: 'sd_6', label: 'Disable system power by turning the Main Power Switch of the power supply to OFF' },
                    { id: 'sd_7', label: 'Turn OFF the power source from the platform/vessel' },
                    { id: 'sd_8', label: 'Shut down all the inspection PCs' }
                ]
            }
        ]
    },
    demob: {
        title: 'Demobilization',
        sections: [
            {
                id: 'dm_psu', title: 'Power Supply and On-Deck Station',
                items: [
                    { id: 'dm_psu_1',  label: 'Disconnect the input power cable from the Power Supply' },
                    { id: 'dm_psu_2',  label: 'Disconnect the tether end from the Power Supply' },
                    { id: 'dm_psu_3',  label: 'Disconnect the power cable and CAN cables from the Power supply and On-Deck station' },
                    { id: 'dm_psu_4',  label: 'Disconnect the HDMI cable of the On-Deck station PC' },
                    { id: 'dm_psu_5',  label: 'Disconnect the HCU and Tablet cables, and secure them in their storage housing' },
                    { id: 'dm_psu_6',  label: 'Disconnect the Main Fiber cable from the On-Deck station and tether junction box' },
                    { id: 'dm_psu_7',  label: 'Disconnect all other connectors from the On-Deck station and secure them with the associated caps' },
                    { id: 'dm_psu_8',  label: 'Close the sunshield and secure it with the dual lock tape' },
                    { id: 'dm_psu_9',  label: 'Close the On-Deck station cover and lock it' },
                    { id: 'dm_psu_10', label: 'Close the covers of the power supply case' },
                    { id: 'dm_psu_11', label: 'Coil up all connectors and cables and store them properly' }
                ]
            },
            {
                id: 'dm_rov', title: 'Thrusters and MiniSpector ROV',
                items: [
                    { id: 'dm_rov_1',  label: 'Take photos of all ROV cable routing' },
                    { id: 'dm_rov_2',  label: 'Remove all connectors on the ROV including thrusters and payloads' },
                    { id: 'dm_rov_3',  label: 'Inspect the ROV cable for any cuts or abrasions — repair as needed' },
                    { id: 'dm_rov_4',  label: 'Clean the connectors and reapply a reasonable amount of silicon grease' },
                    { id: 'dm_rov_5',  label: 'Inspect connectors for any bristles or debris — remove if found' },
                    { id: 'dm_rov_6',  label: 'Remove thrusters\' propellers and clean and dry inside' },
                    { id: 'dm_rov_7',  label: 'Check water bearings on the thruster for wear and proper fit to the propeller (replace if necessary)' },
                    { id: 'dm_rov_8',  label: 'Reassemble thrusters\' propellers after cleaning and drying' },
                    { id: 'dm_rov_9',  label: 'Reconnect each cable to the associated port and secure cables to frame (connectors and thrusters)' },
                    { id: 'dm_rov_10', label: 'Plug and secure any loose cable ends (as photos taken in step 1) — route cables so they do not interfere with thruster propellers' },
                    { id: 'dm_rov_11', label: 'Secure any payloads mounted to the ROV' },
                    { id: 'dm_rov_12', label: 'Detach the cable grip from the ROV and disconnect the tether — cover the tether connector with its dummy covers' },
                    { id: 'dm_rov_13', label: 'Place the ROV in the shipping box' },
                    { id: 'dm_rov_14', label: 'Unlock the drum and wind the tether' },
                    { id: 'dm_rov_15', label: 'Secure the junction pod and tail with tie wraps' },
                    { id: 'dm_rov_16', label: 'Lock the drum' }
                ]
            }
        ]
    }
};

// ==========================================
// 2. STATE MANAGEMENT
// ==========================================

let currentReportData = {
    diveLogs: [],
    maintenanceLogs: [],
    hseReports: [],
    standbyLogs: [],
    faultLogs: [],
    shiftLogs: [],
    checklists: { mobilization: {}, startup: {}, preOp: {}, postOp: {}, shutdown: {}, demob: {} }
};
let activeChecklistType = 'mobilization';
let activeChecklistDiveKeys = { preOp: '1', postOp: '1' };
let modalSection = '';
let modalIndex = -1;
let currentUserId = "";
let currentUserRole = 'member'; // 'member' | 'reviewer'
let currentUserProjectRole = 'operator'; // 'viewer' | 'operator' | 'approver' (from project_members)
let currentMode = ''; // 'operation' or 'simulation'
let chartUtil, chartCalibration, chartShiftPerf, chartDiveDepth;
let isDirty = false; // Tracks if user made changes
let autoSaveTimer = null; // Auto-save interval handle
let simAutoSaveTimer = null; // Simulation auto-save handle
let simSyncDebounceTimer = null; // Debounce handle for immediate sim sync

// ── Cloud sync state ─────────────────────────────────────────────────
let currentProjectCode = null;  // e.g. 'PRJ-MCS-2026-A3F7'
let currentDeviceRole  = null;  // 'vessel' | 'office'
let currentUserName    = '';    // resolved from login, used in sync log
let cloudDeviceId      = null;  // stable UUID for this machine
let offlineQueue       = [];    // pending pushes while offline

// ==========================================
// 3. INITIALIZATION
// ==========================================

window.onload = () => {
    resetSensorTab();
    renderAuxToolTable();
    renderGrids();
    updateChecklistBadge();
    initJoinProjectUI();   // cloud: wire up Join Project card
    restoreLastSession();  // cloud: reconnect if device was in a project
    
    // Listeners for Auto-ID generation
    const pCodeInput = document.getElementById('projectCode');
    const sDateInput = document.getElementById('startDate'); 

    if (pCodeInput) pCodeInput.addEventListener('input', updateOperationalId);
    if (sDateInput) sDateInput.addEventListener('change', updateOperationalId);

    // Cloud sync: activate project when the user sets the project code
    // Guard: warn before changing a code that is already live-syncing
    if (pCodeInput) pCodeInput.addEventListener('change', () => {
        const newCode = pCodeInput.value.trim();
        if (!newCode) return;

        if (currentProjectCode && newCode !== currentProjectCode) {
            const confirmed = confirm(
                `The project code "${currentProjectCode}" is already active and syncing to the cloud.\n\n` +
                `Changing it will disconnect this session from "${currentProjectCode}" and start syncing to "${newCode}" instead.\n\n` +
                `The old cloud record will not be deleted — you can rejoin it by entering the original code again.\n\n` +
                `Proceed?`
            );
            if (!confirmed) {
                pCodeInput.value = currentProjectCode; // revert
                return;
            }
        }

        activateCloudProject(newCode, 'operation', currentUserName);
    });

    // 1. DIRTY FLAG TRACKING
    // Detects any text input or change
    document.body.addEventListener('input', () => {
        if (!isDirty) {
            isDirty = true;
            document.title = "MiniSpector Log * (Unsaved)"; // Visual cue in window title
        }
    });

    // 2. SHORTCUT: CTRL + S
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
            e.preventDefault();
            if (currentMode === 'operation') {
                document.getElementById('btn-save-pc').click();
            }
        }
    });
    
    // 3. HANDLE APP CLOSE REQUEST
    if (window.electronAPI.onCloseCheck) {
        window.electronAPI.onCloseCheck(async () => {
            if (isDirty) {
                // Custom Confirmation Logic
                const userChoice = confirm("You have unsaved changes.\n\nPress OK to SAVE and Quit.\nPress Cancel to DISCARD changes and Quit.");
                
                if (userChoice) {
                    // User chose "OK" -> Save first
                    document.getElementById('btn-save-pc').click();
                    
                    // Small delay to ensure save starts, then close
                    setTimeout(() => {
                        window.electronAPI.forceClose();
                    }, 500); 
                } else {
                    // User chose "Cancel" -> Quit WITHOUT saving
                    window.electronAPI.forceClose();
                }
            } else {
                // No changes? Just close immediately.
                window.electronAPI.forceClose();
            }
        });
    }
};

// ==========================================
// 4. LOGIN & SESSION LOGIC
// ==========================================

// ==========================================
// 4. LOGIN & SESSION LOGIC (UPDATED)
// ==========================================

// ── MEMBER LOGIN ────────────────────────────────────────────────────
document.getElementById('btn-login').addEventListener('click', async () => {
    const userId  = document.getElementById('login-id-input').value.trim();
    const pinInput = document.getElementById('login-pin-input').value.trim();
    const errEl   = document.getElementById('login-error');

    errEl.classList.add('hidden');

    if (!userId) {
        errEl.innerText = 'Please enter your User ID.';
        errEl.classList.remove('hidden');
        return;
    }

    try {
        const result = await window.electronAPI.getUserName(userId);

        if (!result.success) {
            errEl.innerText = 'User ID not found.';
            errEl.classList.remove('hidden');
            return;
        }

        // PIN check — stored in localStorage keyed by userId
        const storedPin = localStorage.getItem(`pin_${userId}`);
        if (storedPin) {
            if (pinInput !== storedPin) {
                errEl.innerText = 'Incorrect PIN. Please try again.';
                errEl.classList.remove('hidden');
                return;
            }
        } else if (pinInput) {
            // First time setting a PIN
            localStorage.setItem(`pin_${userId}`, pinInput);
            showToast('PIN set successfully.', 'success');
        }

        currentUserId   = userId;
        currentUserRole = 'member';
        clearViewerMode();
        document.getElementById('display-user-id').innerText = result.name;

        const sessions = await window.electronAPI.getRecentSessions();
        showModeScreen(result.name, sessions);

    } catch (err) {
        console.error('Login error:', err);
        errEl.innerText = 'System error. Please try again.';
        errEl.classList.remove('hidden');
    }
});

// ── REVIEWER LOGIN ──────────────────────────────────────────────────
document.getElementById('btn-review-login').addEventListener('click', async () => {
    const code  = document.getElementById('review-code-input').value.trim().toUpperCase();
    const errEl = document.getElementById('review-error');
    errEl.classList.add('hidden');

    if (!code) {
        errEl.innerText = 'Please enter a project code.';
        errEl.classList.remove('hidden');
        return;
    }

    errEl.innerText = 'Loading project…';
    errEl.style.color = '#9ca3af';
    errEl.classList.remove('hidden');

    try {
        const result = await window.electronAPI.pullProject(code);
        if (!result || !result.success) {
            errEl.innerText = result?.notFound
                ? 'Project code not found. Check the code and try again.'
                : 'Connection failed. Check your internet connection.';
            errEl.style.color = '#f87171';
            return;
        }

        currentUserRole = 'reviewer';
        currentUserId   = 'reviewer';
        currentMode     = 'operation';
        document.getElementById('display-user-id').innerText = 'Reviewer';

        // Show the main app container first
        enterDashboard();

        // Set up operation nav
        document.getElementById('nav-operation-sections').classList.remove('hidden');
        document.getElementById('header-operation-buttons').classList.remove('hidden');
        document.getElementById('nav-simulation-section').classList.add('hidden');

        // result.project is the Supabase row; .data is the saved app payload
        const projectData = result.project?.data;
        if (projectData) populateUI(projectData);
        applyViewerMode();

        // Land on Infographics
        setTimeout(() => {
            const dashNav = document.getElementById('nav-dash');
            if (dashNav) { dashNav.classList.remove('hidden'); dashNav.click(); }
            else {
                const firstNav = document.querySelector('#nav-operation-sections .nav-item:not(.hidden)');
                if (firstNav) firstNav.click();
            }
        }, 150);

    } catch (err) {
        console.error('Reviewer login error:', err);
        errEl.innerText = 'Could not load project. Check your connection.';
        errEl.style.color = '#f87171';
    }
});

// ── VIEWER MODE HELPERS ─────────────────────────────────────────────
function applyViewerMode() {
    document.body.classList.add('viewer-mode');
    const badge = document.getElementById('viewer-mode-badge');
    if (badge) badge.style.display = 'flex';
}

function clearViewerMode() {
    document.body.classList.remove('viewer-mode');
    const badge = document.getElementById('viewer-mode-badge');
    if (badge) badge.style.display = 'none';
    document.querySelectorAll('.edit-only').forEach(el => el.classList.remove('edit-only'));
}

// Capture-phase click guard — runs before any onclick handler.
// Blocks every click inside the content area when in reviewer mode,
// except sidebar nav items and the viewer badge itself.
document.addEventListener('click', function(e) {
    if (currentUserRole !== 'reviewer') return;

    const target = e.target;

    // Always allow: sidebar nav, viewer badge logout button, tab-switching links
    if (target.closest('.nav-item') ||
        target.closest('#viewer-mode-badge') ||
        target.closest('#nav-dash') ||
        target.getAttribute('onclick')?.includes('showTab') ||
        target.closest('[onclick*="showTab"]')) return;

    // Block everything inside the main content area
    const contentArea = document.getElementById('main-content-area');
    if (contentArea && contentArea.contains(target)) {
        e.stopImmediatePropagation();
        e.preventDefault();
    }
}, true); // true = capture phase, fires before bubbling

function reviewerLogout() {
    currentUserRole = 'member';
    clearViewerMode();
    document.getElementById('login-screen').classList.remove('hidden');
    document.getElementById('mode-screen').classList.add('hidden');
    document.getElementById('nav-operation-sections').classList.add('hidden');
    document.getElementById('header-operation-buttons').classList.add('hidden');
    document.getElementById('review-code-input').value = '';
    document.getElementById('review-error').classList.add('hidden');
}

document.getElementById('btn-start-new').addEventListener('click', () => {
    enterDashboard();
});

function showSessionScreen(sessions) {
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('session-screen').classList.remove('hidden');

    const listContainer = document.getElementById('recent-sessions-list');
    listContainer.innerHTML = ''; 

    sessions.forEach(session => {
        const item = document.createElement('div');
        item.className = "group flex items-center justify-between p-4 rounded-lg bg-gray-800 border border-gray-700 hover:border-blue-500 hover:bg-gray-750 cursor-pointer transition-all";
        
        const dateObj = new Date(session.mtime);
        const dateStr = dateObj.toLocaleDateString() + ' ' + dateObj.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

        item.innerHTML = `
            <div>
                <p class="font-bold text-gray-200 group-hover:text-white text-sm">${session.name}</p>
                <p class="text-xs text-gray-500 group-hover:text-gray-400 mt-1">Modified: ${dateStr}</p>
            </div>
            <div class="text-gray-500 group-hover:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </div>
        `;

        item.addEventListener('click', async () => {
             const data = await window.electronAPI.loadReport(session.path); 
             if(data) {
                 populateUI(data);
                 document.getElementById('session-screen').classList.add('hidden');
                 document.getElementById('app-container').classList.remove('hidden');
             }
        });

        listContainer.appendChild(item);
    });
}

function showModeScreen(userName, sessions) {
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('mode-user-name').innerText = userName;
    document.getElementById('mode-screen').classList.remove('hidden');

    // ── Internal helpers ──────────────────────────────────────
    function modeShowStep(id) {
        ['mode-step1','mode-step2-new','mode-step2-join'].forEach(s =>
            document.getElementById(s).classList.toggle('hidden', s !== id)
        );
    }

    function enterSimMode() {
        currentMode = 'simulation';
        currentUserName = userName;
        document.getElementById('mode-screen').classList.add('hidden');
        document.getElementById('nav-operation-sections').classList.add('hidden');
        document.getElementById('header-operation-buttons').classList.add('hidden');
        document.getElementById('nav-simulation-section').classList.remove('hidden');
        document.getElementById('btn-mode-switch').classList.remove('hidden');
        enterDashboard();
        const contentArea = document.getElementById('main-content-area');
        contentArea.style.padding = '0';
        contentArea.style.overflow = 'hidden';
        contentArea.style.position = 'relative';
        initSimROVGrid();
        const simNavItem = document.querySelector('#nav-simulation-section .nav-item');
        showTab('simulation', simNavItem);
        startSimAutoSave();
        checkSimDraftRecovery();
        loadSimHistory();
        renderSimApprovalStatus();
        if (currentUserProjectRole === 'approver' || APPROVER_IDS.includes(String(currentUserId))) {
            document.getElementById('sim-nav-approvals')?.classList.remove('hidden');
            updateApprovalBadge();
        }
    }

    function enterOpMode() {
        currentMode = 'operation';
        currentUserName = userName;
        document.getElementById('mode-screen').classList.add('hidden');
        document.getElementById('nav-simulation-section').classList.add('hidden');
        document.getElementById('btn-mode-switch').classList.remove('hidden');
        enterDashboard();
        startAutoSave();
        checkAndShowDraftRecovery();
    }

    // ── Step 1 ────────────────────────────────────────────────
    document.getElementById('btn-mode-new').onclick      = () => modeShowStep('mode-step2-new');
    document.getElementById('btn-mode-join-btn').onclick = () => modeShowStep('mode-step2-join');

    // ── Step 2A: New project ──────────────────────────────────
    document.getElementById('btn-start-sim').onclick = enterSimMode;
    document.getElementById('btn-start-op').onclick  = enterOpMode;
    document.getElementById('btn-back-new').onclick  = () => modeShowStep('mode-step1');

    // ── Step 2B: Join — cloud-first, local SQLite fallback ───────────────
    document.getElementById('btn-join-confirm').onclick = async () => {
        const code     = document.getElementById('join-code-input').value.trim().toUpperCase();
        const errEl    = document.getElementById('join-error');
        const statusEl = document.getElementById('join-status');
        errEl.classList.add('hidden');
        statusEl.classList.add('hidden');

        if (!code) { errEl.textContent = 'Enter a project code'; errEl.classList.remove('hidden'); return; }

        const btn = document.getElementById('btn-join-confirm');
        btn.disabled = true;
        btn.innerHTML = '<svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg> Searching...';

        const setStatus = (msg, color) => {
            statusEl.textContent = msg;
            statusEl.style.color = color;
            statusEl.classList.remove('hidden');
        };
        const resetBtn = () => {
            btn.disabled = false;
            btn.innerHTML = '<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg> Join Project';
        };

        // Phase 1: cloud
        setStatus('Searching cloud...', '#60a5fa');
        try {
            const result = await window.electronAPI.pullProject(code);
            if (result.success) {
                setStatus('Found in cloud — loading...', '#4ade80');
                const project = result.project;
                const pd = project?.data || {};
                currentProjectCode = code;

                const access = await checkProjectAccessForUser(code, currentUserId);
                if (!access.allowed) {
                    errEl.textContent = 'You do not have access to this project. Contact your admin.';
                    errEl.classList.remove('hidden');
                    resetBtn();
                    return;
                }
                currentUserProjectRole = access.role || 'operator';
                if (access.role === 'viewer') currentUserRole = 'reviewer';

                if (project?.mode === 'simulation') {
                    enterSimMode();
                    if (pd && Object.keys(pd).length > 0) {
                        setTimeout(() => loadSimulationState(pd), 300);
                    }
                } else {
                    enterOpMode();
                    if (pd.currentReportData) Object.assign(currentReportData, pd.currentReportData);
                    setTimeout(() => populateUI(pd), 150);
                }
                return;
            }
        } catch (e) { /* cloud unreachable — fall through */ }

        // Phase 2: local SQLite
        setStatus('Not found in cloud — searching local storage...', '#fb923c');
        try {
            const [reports, sims] = await Promise.all([
                window.electronAPI.getRecentSessions(),
                window.electronAPI.getSimSessions(),
            ]);
            const all = [
                ...(reports || []).map(s => ({ ...s, _type: 'operation'  })),
                ...(sims    || []).map(s => ({ ...s, _type: 'simulation' })),
            ];
            const match = all.find(s => (s.projectCode || s.key || '').toUpperCase() === code);
            if (match) {
                setStatus('Checking access...', '#60a5fa');
                const access = await checkProjectAccessForUser(code, currentUserId);
                if (!access.allowed) {
                    statusEl.classList.add('hidden');
                    errEl.textContent = 'You do not have access to this project. Contact your admin.';
                    errEl.classList.remove('hidden');
                    resetBtn();
                    return;
                }
                setStatus('Found locally — loading...', '#4ade80');
                window._joinSessions = all;
                await loadLocalSession(all.indexOf(match));
                return;
            }
        } catch (e) { console.error('Local search failed:', e); }

        // Not found anywhere
        statusEl.classList.add('hidden');
        errEl.textContent = 'Project not found in cloud or local storage';
        errEl.classList.remove('hidden');
        resetBtn();
    };

    document.getElementById('btn-back-join').onclick = () => modeShowStep('mode-step1');

    // Store helpers on window so loadLocalSession can call enterOpMode/enterSimMode
    window._modeHelpers = { enterOpMode, enterSimMode };
}

async function loadJoinLocalSessions() {
    const container = document.getElementById('join-local-list');
    container.innerHTML = '<p class="text-gray-500 text-sm text-center py-6">Loading...</p>';
    try {
        const [reports, sims] = await Promise.all([
            window.electronAPI.getRecentSessions(),
            window.electronAPI.getSimSessions(),
        ]);
        const all = [
            ...(reports || []).map(s => ({ ...s, _type: 'operation'  })),
            ...(sims    || []).map(s => ({ ...s, _type: 'simulation' })),
        ].sort((a, b) => new Date(b.mtime) - new Date(a.mtime));

        const section = document.getElementById('join-recent-section');
        if (!all.length) {
            if (section) section.classList.add('hidden');
            return;
        }
        if (section) section.classList.remove('hidden');
        window._joinSessions = all;
        container.innerHTML = all.map((s, i) => {
            const isOp   = s._type === 'operation';
            const color  = isOp ? '#459fd9' : '#f39124';
            const bgClr  = isOp ? 'rgba(69,159,217,0.15)' : 'rgba(243,145,36,0.15)';
            const icon   = isOp
                ? '<path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>'
                : '<path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>';
            const label  = s.scopeName ? `${s.scopeName} · ` : (s.projectCode ? `${s.projectCode} · ` : '');
            const date   = s.mtime ? new Date(s.mtime).toLocaleDateString() : '';
            return `<button onclick="loadLocalSession(${i})"
                class="w-full text-left p-3 rounded-xl border border-gray-700 bg-white/5 hover:border-green-500 hover:bg-green-500/10 transition-all">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style="background:${bgClr}">
                        <svg class="w-4 h-4" style="color:${color}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">${icon}</svg>
                    </div>
                    <div class="min-w-0 flex-1">
                        <div class="text-sm font-semibold text-white truncate">${s.projectName || s.name || 'Unnamed'}</div>
                        <div class="text-xs text-gray-500">${label}${s._type} · ${date}</div>
                    </div>
                    <svg class="w-4 h-4 text-gray-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                    </svg>
                </div>
            </button>`;
        }).join('');
    } catch (e) {
        container.innerHTML = '<p class="text-red-400 text-sm text-center py-4">Failed to load sessions</p>';
    }
}

async function loadLocalSession(idx) {
    const s = window._joinSessions?.[idx];
    if (!s) return;
    const helpers = window._modeHelpers;
    try {
        if (s._type === 'simulation') {
            const data = await window.electronAPI.loadSimFile(s.name);
            if (!data) return;
            helpers.enterSimMode();
            setTimeout(() => {
                if (typeof populateSimUI === 'function') populateSimUI(data);
            }, 300);
        } else {
            const data = await window.electronAPI.loadReport(s.name);
            if (!data) return;
            helpers.enterOpMode();
            if (data.currentReportData) Object.assign(currentReportData, data.currentReportData);
            setTimeout(() => populateUI(data), 150);
        }
    } catch (e) {
        console.error('Failed to load local session:', e);
    }
}

function enterDashboard() {
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('session-screen').classList.add('hidden');
    document.getElementById('app-container').classList.remove('hidden');
}

// ==========================================
// AUTO-SAVE + CRASH RECOVERY SYSTEM
// ==========================================

const AUTO_SAVE_INTERVAL_MS = 3 * 60 * 1000; // 3 minutes

function startAutoSave() {
    stopAutoSave(); // Clear any existing timer first
    autoSaveTimer = setInterval(async () => {
        if (currentMode !== 'operation') return;
        if (currentUserRole === 'reviewer') return;
        try {
            const data = collectAllData();
            await window.electronAPI.saveDraft(data);
            showAutoSaveIndicator();
            if (currentProjectCode) syncToCloud();
        } catch (e) {
            console.error('Auto-save failed:', e);
        }
    }, AUTO_SAVE_INTERVAL_MS);
}

function stopAutoSave() {
    if (autoSaveTimer) {
        clearInterval(autoSaveTimer);
        autoSaveTimer = null;
    }
}

function showAutoSaveIndicator() {
    let el = document.getElementById('autosave-indicator');
    if (!el) return;
    el.classList.remove('hidden');
    el.classList.add('flex');
    clearTimeout(el._hideTimer);
    el._hideTimer = setTimeout(() => {
        el.classList.add('hidden');
        el.classList.remove('flex');
    }, 3000);
}

async function checkAndShowDraftRecovery() {
    try {
        const draft = await window.electronAPI.checkDraft();
        if (!draft) return;

        const ts = new Date(draft.timestamp);
        const timeStr = ts.toLocaleDateString() + ' at ' + ts.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const projectStr = draft.operationalId || draft.projectName || 'Unknown';

        // Show recovery banner
        const banner = document.getElementById('draft-recovery-banner');
        const info   = document.getElementById('draft-recovery-info');
        if (!banner || !info) return;

        info.innerText = `Unsaved session found — ${projectStr} (${timeStr})`;
        banner.classList.remove('hidden');
        banner.classList.add('flex');
    } catch (e) {
        console.error('Draft check failed:', e);
    }
}

async function restoreDraft() {
    try {
        const data = await window.electronAPI.loadDraft();
        if (data) {
            populateUI(data);
            showToast('Session restored from auto-save!', 'success');
        }
        dismissDraft();
    } catch (e) {
        alert('Could not restore draft: ' + e.message);
    }
}

async function dismissDraft() {
    await window.electronAPI.deleteDraft();
    const banner = document.getElementById('draft-recovery-banner');
    if (banner) {
        banner.classList.add('hidden');
        banner.classList.remove('flex');
    }
}

// ==========================================
// SIMULATION AUTO-SAVE + RECOVERY
// ==========================================

function collectSimState() {
    return {
        type: 'simulation',
        reportDate: new Date().toISOString().split('T')[0],
        projectName: simProjectData.name,
        projectCode: simProjectData.code,
        projectScope: simProjectData.scope,
        scopeId: simSelectedScope,
        scopeName: OPERATION_SCOPES[simSelectedScope]?.name || '',
        rovs: [...simSelectedROVs.entries()].map(([num, role]) => ({ rovNumber: num, role, serial: simROVSerials.get(num) || '', description: simROVDescriptions.get(num) || '' })),
        sensors: simSharedData.sensors,
        rovSensors: Object.fromEntries(
            Object.entries(simSharedData.rovSensors || {}).map(([k, v]) => [k, v.map(s => ({ ...s }))])
        ),
        sysarch: {
            machines:    (simSharedData.sysarch?.machines    || []).map(m => ({ ...m })),
            equipment:   (simSharedData.sysarch?.equipment   || []).map(e => ({ ...e })),
            simStatus:   (simSharedData.sysarch?.simStatus   || []).map(s => ({ ...s })),
            deliverables: { ...(simSharedData.sysarch?.deliverables || {}) },
            systemIPs: (simSharedData.sysarch?.systemIPs || []).map(p => ({ ...p }))
        },
        issues: (simSharedData.issues || []).map(i => ({ ...i })),
        thrusters: (simSharedData.thrusters || []).map(t => ({ ...t })),
        packingList: (simSharedData.packingList || []).map(p => ({ ...p })),
        approvalStatus: simApproval.status,
        approvalHistory: simApproval.history
    };
}

function startSimAutoSave() {
    stopSimAutoSave();
    simAutoSaveTimer = setInterval(async () => {
        if (currentMode !== 'simulation' || !simSelectedScope) return;
        try {
            await window.electronAPI.saveSimDraft(collectSimState());
            if (currentProjectCode) syncToCloud();
        } catch (e) { console.error('Sim auto-save failed:', e); }
    }, 20 * 1000);
}

function stopSimAutoSave() {
    if (simAutoSaveTimer) { clearInterval(simAutoSaveTimer); simAutoSaveTimer = null; }
}

// Debounced push — fires 2 s after the last simulation data mutation.
// Called by every add/delete function so joining members get fresh data quickly.
function scheduleSimSync() {
    if (!currentProjectCode || currentMode !== 'simulation') return;
    clearTimeout(simSyncDebounceTimer);
    simSyncDebounceTimer = setTimeout(() => syncToCloud(), 2000);
}

async function checkSimDraftRecovery() {
    try {
        const draft = await window.electronAPI.checkSimDraft();
        if (!draft) return;
        const ts = new Date(draft.timestamp);
        const timeStr = ts.toLocaleDateString() + ' at ' + ts.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        if (confirm(`Unsaved simulation found: "${draft.projectName}" (${draft.scopeName})\nSaved: ${timeStr}\n\nRestore it?`)) {
            await restoreSimDraft();
        } else {
            await window.electronAPI.deleteSimDraft();
        }
    } catch (e) { console.error('Sim draft check failed:', e); }
}

async function restoreSimDraft() {
    try {
        const data = await window.electronAPI.loadSimDraft();
        if (!data) return;
        loadSimulationState(data);
        showToast('Simulation restored from auto-save!', 'success');
        await window.electronAPI.deleteSimDraft();
    } catch (e) { alert('Could not restore simulation: ' + e.message); }
}

function loadSimulationState(data) {
    simProjectData = { name: data.projectName || '', code: data.projectCode || '', scope: data.projectScope || '' };
    simSelectedScope = data.scopeId || null;
    simApproval = { status: data.approvalStatus || 'draft', history: data.approvalHistory || [] };

    simSelectedROVs    = new Map();
    simROVSerials      = new Map();
    simROVDescriptions = new Map();
    (data.rovs || []).forEach(r => {
        simSelectedROVs.set(r.rovNumber, r.role || 'main');
        if (r.serial)       simROVSerials.set(r.rovNumber, r.serial);
        if (r.description)  simROVDescriptions.set(r.rovNumber, r.description);
    });

    simSharedData = {
        sensors: data.sensors || [],
        rovSensors: Object.fromEntries(
            Object.entries(data.rovSensors || {}).map(([k, v]) => [k, (v || []).map(s => ({ ...s }))])
        ),
        issues:    (data.issues || []).map(i => ({ ...i })),
        thrusters: (data.thrusters || []).map(t => ({ ...t })),
        packingList: (data.packingList || []).map(p => ({ ...p })),
        sysarch: {
            machines:    (data.sysarch?.machines    || []).map(m => ({ ...m })),
            equipment:   (data.sysarch?.equipment   || []).map(e => ({ ...e })),
            simStatus:   (data.sysarch?.simStatus   || []).map(s => ({ ...s })),
            deliverables: data.sysarch?.deliverables ? { ...data.sysarch.deliverables } : {},
            systemIPs: (data.sysarch?.systemIPs || DEFAULT_SYSTEM_IPS).map(p => ({ ...p }))
        }
    };
    // Backfill fixed sensors for any ROV that lacks them (e.g. old saved files)
    for (const [num] of simSelectedROVs.entries()) {
        if (!simSharedData.rovSensors[num]) {
            simSharedData.rovSensors[num] = MINISPECTOR_FIXED_SENSORS.map(s => ({
                name: s.name, category: s.category, model: '', qty: 1,
                calibrated: false, tested: false, fixed: true
            }));
        }
    }

    // Jump straight to step 2
    document.getElementById('sim-step-1').classList.add('hidden');
    document.getElementById('sim-step-2').classList.remove('hidden');
    renderSimROVTabs();
    simActiveROV = Math.min(...simSelectedROVs.keys());
    switchSimROV(simActiveROV);
    switchSimSubTab('sensors');
    setTimeout(renderSimApprovalStatus, 100);
}

// ==========================================
// READINESS DASHBOARD
// ==========================================

function buildReadinessDashboard() {
    const sensors = simSharedData.sensors || [];
    const scopeActive = sensors.filter(s => s.status === 'required' || (s.status === 'optional' && s.included) || s.custom);
    const fixedAll = Object.values(simSharedData.rovSensors || {}).flat();
    const active = [...scopeActive, ...fixedAll];
    const total = active.length;
    if (total === 0) return '';

    const calibrated = active.filter(s => s.calibrated).length;
    const tested = active.filter(s => s.tested).length;
    const noModel = active.filter(s => !s.model || s.model.trim() === '').length;
    const ready = active.filter(s => s.calibrated && s.tested && s.model && s.model.trim() !== '').length;
    const percent = Math.round((ready / total) * 100);

    const barColor = percent === 100 ? '#f39124' : percent >= 60 ? '#f39124' : '#ef4444';

    const kpi = (value, label, color, bgAlpha, borderAlpha) =>
        `<div style="flex:1;min-width:0;background:rgba(${bgAlpha});border:1px solid rgba(${borderAlpha});border-radius:10px;padding:10px 14px;">
            <div style="font-size:22px;font-weight:800;color:${color};line-height:1;letter-spacing:-0.5px">${value}</div>
            <div style="font-size:9px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.06em;margin-top:3px">${label}</div>
        </div>`;

    return `
        <div class="mb-5" style="background:linear-gradient(135deg,rgba(31,41,55,0.75),rgba(17,24,39,0.9));border:1px solid rgba(55,65,81,0.5);border-radius:12px;overflow:hidden;backdrop-filter:blur(8px);box-shadow:0 2px 16px rgba(0,0,0,0.3);">
            <div class="flex items-center justify-between px-6 py-3.5 border-b border-gray-700/50">
                <div class="flex items-center gap-2.5">
                    <span style="width:8px;height:8px;border-radius:50%;background:${barColor};display:inline-block;box-shadow:0 0 6px ${barColor}88"></span>
                    <span class="text-xs font-bold text-white uppercase tracking-widest">System Readiness</span>
                </div>
                <span style="font-size:22px;font-weight:800;color:${barColor};letter-spacing:-1px;line-height:1">${percent}%</span>
            </div>
            <div class="px-6 pt-4 pb-1">
                <div style="height:7px;background:rgba(55,65,81,0.6);border-radius:9999px;overflow:hidden;">
                    <div style="width:${percent}%;height:100%;background:linear-gradient(90deg,${barColor}99,${barColor});border-radius:9999px;transition:width 0.6s ease;"></div>
                </div>
                <div style="font-size:11px;color:#6b7280;margin-top:5px;font-weight:500">${percent === 100 ? 'All sensors fully configured and ready' : `${ready} of ${total} sensors fully configured`}</div>
            </div>
            <div style="display:flex;gap:10px;padding:12px 24px 16px;">
                ${kpi(ready,      'Ready',       '#f39124', '243,145,36,0.08',  '243,145,36,0.2')}
                ${kpi(calibrated, 'Calibrated',  '#f39124', '243,145,36,0.08', '243,145,36,0.2')}
                ${kpi(tested,     'Tested',      '#f39124', '243,145,36,0.08', '243,145,36,0.2')}
                ${kpi(noModel,    'No Model',    noModel===0?'#f39124':'#f87171', noModel===0?'243,145,36,0.08':'239,68,68,0.08', noModel===0?'243,145,36,0.2':'239,68,68,0.2')}
                ${kpi(total,      'Total Active','#f39124',                               '243,145,36,0.08','243,145,36,0.2')}
            </div>
        </div>`;
}

// ==========================================
// SIMULATION → OPERATION BRIDGE
// ==========================================

// ==========================================
// MODE SWITCHER
// ==========================================

function switchMode() {
    if (currentMode === 'operation') {
        // Guard: warn if operation has unsaved changes
        if (isDirty) {
            const confirmed = confirm(
                'You have unsaved changes in Operation.\n\n' +
                'Your work will be auto-saved as a draft before switching to Simulation.\n\n' +
                'Continue?'
            );
            if (!confirmed) return;
            // Auto-save draft before leaving
            window.electronAPI.saveDraft(collectAllData()).catch(() => {});
        }

        // Switch to simulation — preserve operation state
        currentMode = 'simulation';
        document.getElementById('nav-operation-sections').classList.add('hidden');
        document.getElementById('header-operation-buttons').classList.add('hidden');
        document.getElementById('nav-simulation-section').classList.remove('hidden');
        const contentArea = document.getElementById('main-content-area');
        contentArea.style.padding = '0';
        contentArea.style.overflow = 'hidden';
        contentArea.style.position = 'relative';
        const simNavItem = document.querySelector('#nav-simulation-section .nav-item');
        showTab('simulation', simNavItem);
        startSimAutoSave();
        document.getElementById('btn-mode-switch').title = 'Switch to Operation';
        // Re-apply lock if sim was already pushed
        if (simLocked) applySimLock();
        renderSimApprovalStatus();
        if (currentUserProjectRole === 'approver' || APPROVER_IDS.includes(String(currentUserId))) {
            document.getElementById('sim-nav-approvals')?.classList.remove('hidden');
            updateApprovalBadge();
        }
    } else {
        // Switch to operation — preserve simulation state
        currentMode = 'operation';
        document.getElementById('nav-simulation-section').classList.add('hidden');
        document.getElementById('nav-operation-sections').classList.remove('hidden');
        document.getElementById('header-operation-buttons').classList.remove('hidden');
        const contentArea = document.getElementById('main-content-area');
        contentArea.style.padding = '';
        contentArea.style.overflow = '';
        contentArea.style.position = '';
        stopSimAutoSave();
        startAutoSave();
        // Navigate to first visible nav item
        const firstNav = document.querySelector('#nav-operation-sections .nav-item:not(.hidden)');
        if (firstNav) firstNav.click();
        document.getElementById('btn-mode-switch').title = 'Switch to Simulation';
    }
}

// ==========================================
// PRE-OPERATION TAB
// ==========================================

let preOpData = null; // { pushedAt, sensors, machines, additions, signOff, locked }

const PREOP_CHECKLIST = [
    'All sensors verified and installed',
    'LARS system checked and operational',
    'Communication test passed',
    'Navigation system calibrated',
    'Video recording system tested',
    'Emergency procedures reviewed',
    'Supervisor approved'
];

function applySimLock() {
    simLocked = true;

    // Remove any existing banner first
    document.getElementById('sim-lock-banner')?.remove();

    const pushedTime = preOpData?.pushedAt
        ? new Date(preOpData.pushedAt).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })
        : '';

    const banner = document.createElement('div');
    banner.id = 'sim-lock-banner';
    banner.style.cssText = [
        'position:absolute', 'top:0', 'left:0', 'right:0', 'z-index:50',
        'display:flex', 'align-items:center', 'justify-content:space-between',
        'padding:10px 20px',
        'background:rgba(243,145,36,0.10)',
        'border-bottom:2px solid rgba(243,145,36,0.35)',
        'backdrop-filter:blur(6px)',
        '-webkit-backdrop-filter:blur(6px)',
    ].join(';');

    banner.innerHTML = `
        <div style="display:flex;align-items:center;gap:10px;">
            <svg style="width:15px;height:15px;color:#f39124;flex-shrink:0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
            <span style="font-size:11px;font-weight:700;color:#f39124;letter-spacing:0.06em;">SIMULATION LOCKED</span>
            ${pushedTime ? `<span style="font-size:11px;color:#6b7280;">— Pushed to Operation on ${pushedTime} &nbsp;·&nbsp; Read-only</span>` : ''}
        </div>
        <button onclick="unlockSimulation()"
            style="font-size:11px;font-weight:600;padding:5px 14px;border-radius:6px;
                   border:1px solid rgba(243,145,36,0.35);color:#f39124;
                   background:rgba(243,145,36,0.08);cursor:pointer;transition:all 0.15s;"
            onmouseover="this.style.background='rgba(243,145,36,0.2)'"
            onmouseout="this.style.background='rgba(243,145,36,0.08)'">
            Unlock &amp; Re-edit
        </button>`;

    const tabSim = document.getElementById('tab-simulation');
    if (tabSim) tabSim.insertBefore(banner, tabSim.firstChild);

    // Dim and block interaction on both sim step panels
    ['sim-step-1', 'sim-step-2'].forEach(id => {
        const el = document.getElementById(id);
        if (el) { el.style.pointerEvents = 'none'; el.style.opacity = '0.45'; }
    });
}

function unlockSimulation() {
    if (!confirm(
        'Unlock simulation for editing?\n\n' +
        'You will need to push to Operation again after making changes — ' +
        'otherwise Operation will still use the old data.'
    )) return;

    simLocked = false;
    document.getElementById('sim-lock-banner')?.remove();

    ['sim-step-1', 'sim-step-2'].forEach(id => {
        const el = document.getElementById(id);
        if (el) { el.style.pointerEvents = ''; el.style.opacity = ''; }
    });

    showToast('Simulation unlocked — push to Operation again after changes.', 'warning');
}

function pushToOperation() {
    if (currentUserRole === 'reviewer') return;
    if (simApproval.status !== 'approved') {
        showToast('Simulation must be approved before pushing to Operation.', 'warning');
        return;
    }
    const sensors = (simSharedData.sensors || []).filter(s => s.status === 'required' || (s.status === 'optional' && s.included) || s.custom);
    const machines = simSharedData.sysarch?.machines || [];
    const notReady = sensors.filter(s => !s.calibrated || !s.tested);

    let msg;
    if (preOpData !== null) {
        // Second push — show a diff so user knows what changes
        msg  = '⚠ Simulation was already pushed to Operation.\n\n';
        msg += 'This re-push will REPLACE:\n';
        msg += `  • Sensors:   ${preOpData.sensors.length} → ${sensors.length}\n`;
        msg += `  • Machines:  ${preOpData.machines.length} → ${machines.length}\n`;
        msg += `  • Equipment: ${preOpData.equipment?.length ?? 0} → ${(simSharedData.sysarch?.equipment || []).length}\n`;
        msg += '\nAny sensors/machines you added manually inside Operation will be cleared.\n';
        if (notReady.length > 0) msg += `\n⚠ ${notReady.length} sensor(s) still not fully verified.\n`;
        msg += '\nProceed with re-push?';
    } else {
        msg  = 'Push to Operation will:\n';
        msg += `• Transfer ${sensors.length} sensors and ${machines.length} machines\n`;
        msg += `• Pre-fill Project Details\n`;
        if (notReady.length > 0) msg += `\n⚠ ${notReady.length} sensor(s) not fully verified.\n`;
        msg += '\nProceed?';
    }

    if (!confirm(msg)) return;

    // Build pre-op data
    preOpData = {
        pushedAt: new Date().toISOString(),
        projectName: simProjectData.name,
        projectCode: simProjectData.code,
        scopeName: OPERATION_SCOPES[simSelectedScope]?.name || '',
        rovs: [...simSelectedROVs.entries()].map(([num, role]) => ({ rovNumber: num, role, serial: simROVSerials.get(num) || '', description: simROVDescriptions.get(num) || '' })),
        rovSensors: Object.fromEntries(
            Object.entries(simSharedData.rovSensors || {}).map(([k, v]) => [k, v.map(s => ({ ...s }))])
        ),
        sensors: sensors.map(s => ({
            name: s.name, model: s.model || '', qty: s.qty || 1, serialNo: s.serialNo || '',
            calibrated: s.calibrated, tested: s.tested,
            status: 'confirmed', note: s.note || '', origin: 'simulation'
        })),
        machines: machines.map(m => ({
            name: m.name || '', model: m.model || '', ip: m.ip || '',
            status: m.status || 'OK', origin: 'simulation'
        })),
        equipment: (simSharedData.sysarch?.equipment || []).map(e => ({
            item: e.item || '', serial: e.serial || '', category: e.category || '',
            qty: e.qty || 0, condition: e.condition || 'Good',
            batch: e.batch || '', rovAssignment: e.rovAssignment || 'Shared',
            comments: e.comments || e.notes || '', origin: 'simulation'
        })),
        issues: (simSharedData.issues || []).map(i => ({
            title: i.title || '', description: i.description || '',
            severity: i.severity || 'minor', status: i.status || 'open',
            sensorLink: i.sensorLink || ''
        })),
        thrusters: (simSharedData.thrusters || []).map(t => ({ ...t })),
        systemIPs: (simSharedData.sysarch?.systemIPs || []).map(p => ({ ...p })),
        additions: { sensors: [], machines: [] },
        signOff: PREOP_CHECKLIST.map(item => ({ label: item, checked: false })),
        locked: false
    };

    // Switch to operation
    currentMode = 'operation';
    document.getElementById('nav-simulation-section').classList.add('hidden');
    document.getElementById('nav-operation-sections').classList.remove('hidden');
    document.getElementById('header-operation-buttons').classList.remove('hidden');

    const contentArea = document.getElementById('main-content-area');
    contentArea.style.padding = '';
    contentArea.style.overflow = '';
    contentArea.style.position = '';

    enterDashboard();
    startAutoSave();

    // Pre-fill project details and sensors, then navigate to Project Details
    setTimeout(() => {
        const pName = document.getElementById('projectName');
        const pCode = document.getElementById('projectCode');
        const pScope = document.getElementById('scope');
        if (pName) pName.value = preOpData.projectName || '';
        if (pCode) pCode.value = preOpData.projectCode || '';
        if (pScope) pScope.value = preOpData.scopeName || '';

        // Register this project in cloud with the real operation data (not an empty placeholder)
        if (preOpData.projectCode) {
            currentProjectCode = preOpData.projectCode;
            currentDeviceRole  = 'vessel';
            setDeviceRole('vessel');
            showProjectCodeBanner(preOpData.projectCode);
            saveCloudSessionMeta(preOpData.projectCode, 'vessel', currentUserName);
            syncToCloud();
        }

        // Show sim badge and ROV roster on Project Details tab
        renderProjectSimInfo();

        // Fill sensor payload table
        const camBody = document.getElementById('camLightBody');
        const sensorBody = document.getElementById('sensorBody');
        if (camBody) camBody.innerHTML = '';
        if (sensorBody) sensorBody.innerHTML = '';
        preOpData.sensors.forEach(s => {
            const isCam = s.name.toLowerCase().includes('camera') || s.name.toLowerCase().includes('light');
            addSensorRow(isCam ? 'camLightBody' : 'sensorBody', {
                name: s.name, model: s.model,
                status: (s.calibrated && s.tested) ? 'OK' : 'Fault',
                cal: s.calibrated ? new Date().toISOString().split('T')[0] : '', notes: s.note
            });
        });

        // Show pre-op and final setup nav items, navigate to packing list
        document.getElementById('nav-preop-item').classList.remove('hidden');
        document.getElementById('nav-finalsetup-item')?.classList.remove('hidden');
        const preOpNav = document.getElementById('nav-preop-item');
        showTab('preop', preOpNav);
        renderPreOpTab();
        const fixedTotal = Object.values(preOpData.rovSensors || {}).reduce((s, a) => s + a.length, 0);
        showToast(`Simulation pushed — ${preOpData.rovs.length} ROV(s), ${fixedTotal} fixed + ${preOpData.sensors.length} mission sensors loaded.`, 'success');

        // Lock simulation — it is now read-only until explicitly unlocked
        applySimLock();
    }, 300);
}

// ── Shift Log helpers ────────────────────────────────────────────

function renderShiftLog() {
    const container = document.getElementById('shift-log-container');
    if (!container) return;
    const shifts = currentReportData.shiftLogs || [];
    if (shifts.length === 0) {
        container.innerHTML = `<p style="color:#4b5563;font-style:italic;text-align:center;padding:24px 0;font-size:0.875rem;">No shifts recorded yet. Click "+ Add Shift" to begin.</p>`;
        syncShiftSummaryFields();
        return;
    }

    const totalDays = shifts.reduce((sum, s) => {
        if (s.startDate && s.endDate) {
            const diff = (new Date(s.endDate) - new Date(s.startDate)) / 86400000;
            return sum + Math.max(0, diff) + 1;
        }
        return sum;
    }, 0);

    const weatherIcon = { 'Clear / Sunny': '☀️', 'Partly Cloudy': '⛅', 'Overcast': '☁️',
        'Hazy': '🌫️', 'Fog / Mist': '🌫️', 'Light Rain / Drizzle': '🌦️',
        'Heavy Rain': '🌧️', 'Thunderstorms': '⛈️', 'Squalls / High Winds': '💨' };

    container.innerHTML = `
        <div style="display:flex;gap:20px;margin-bottom:14px;padding:10px 14px;background:rgba(0,0,0,0.2);border-radius:10px;border:1px solid rgba(255,255,255,0.05);">
            <span style="font-size:0.75rem;color:#6b7280;">Total Shifts: <strong style="color:#f9fafb;">${shifts.length}</strong></span>
            <span style="font-size:0.75rem;color:#6b7280;">Total Days Logged: <strong style="color:#f9fafb;">${totalDays}</strong></span>
            <span style="font-size:0.75rem;color:#6b7280;">Period: <strong style="color:#f9fafb;">${shifts[0]?.startDate || '—'} → ${shifts[shifts.length-1]?.endDate || '—'}</strong></span>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px;">
            ${shifts.map((sh, i) => {
                const dayCount = (sh.startDate && sh.endDate)
                    ? Math.max(0, Math.round((new Date(sh.endDate) - new Date(sh.startDate)) / 86400000) + 1)
                    : null;
                return `
                <div style="display:grid;grid-template-columns:90px 1fr auto;align-items:center;gap:14px;padding:14px 16px;background:rgba(0,0,0,0.18);border:1px solid rgba(255,255,255,0.05);border-radius:12px;transition:background 0.15s;" onmouseover="this.style.background='rgba(255,255,255,0.03)'" onmouseout="this.style.background='rgba(0,0,0,0.18)'">
                    <div style="text-align:center;background:rgba(69,159,217,0.12);border:1px solid rgba(69,159,217,0.2);border-radius:10px;padding:8px 4px;">
                        <div style="font-size:0.65rem;color:#459fd9;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;">Shift</div>
                        <div style="font-size:1.4rem;font-weight:800;color:#f9fafb;line-height:1.1;">${sh.shiftNo}</div>
                        ${dayCount !== null ? `<div style="font-size:0.6rem;color:#6b7280;margin-top:2px;">${dayCount}d</div>` : ''}
                    </div>
                    <div>
                        <div style="font-weight:600;color:#f9fafb;font-size:0.875rem;margin-bottom:4px;">
                            ${sh.startDate || '—'} &rarr; ${sh.endDate || '—'}
                        </div>
                        <div style="display:flex;flex-wrap:wrap;gap:6px;">
                            ${sh.weather ? `<span style="font-size:0.68rem;padding:2px 8px;border-radius:20px;background:rgba(255,255,255,0.06);color:#9ca3af;">${weatherIcon[sh.weather] || '🌡️'} ${sh.weather}</span>` : ''}
                            ${sh.visibility ? `<span style="font-size:0.68rem;padding:2px 8px;border-radius:20px;background:rgba(255,255,255,0.06);color:#9ca3af;">👁 ${sh.visibility}</span>` : ''}
                            ${sh.temperature ? `<span style="font-size:0.68rem;padding:2px 8px;border-radius:20px;background:rgba(255,255,255,0.06);color:#9ca3af;">🌡 ${sh.temperature}°C</span>` : ''}
                        </div>
                        ${sh.crew?.length ? `<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:6px;">${sh.crew.map(n=>{const r=getCrewRoster().find(c=>c.name===n);const col=ROLE_COLORS_MAP[r?.role]||'#6b7280';return `<span style="font-size:0.65rem;font-weight:700;padding:2px 8px;border-radius:20px;background:${col}18;color:${col};border:1px solid ${col}33;">${escapeHtml(n)}</span>`;}).join('')}</div>` : ''}
                        ${sh.notes ? `<div style="font-size:0.72rem;color:#6b7280;margin-top:4px;font-style:italic;">${escapeHtml(sh.notes.substring(0,80))}${sh.notes.length>80?'…':''}</div>` : ''}
                    </div>
                    <div style="display:flex;gap:4px;">
                        <button onclick="openModal('shiftLogs',${i})" style="font-size:0.72rem;font-weight:600;color:#60a5fa;cursor:pointer;padding:5px 10px;border-radius:6px;background:transparent;border:none;" onmouseover="this.style.background='rgba(96,165,250,0.1)'" onmouseout="this.style.background='transparent'">Edit</button>
                        <button onclick="removeShift(${i})" style="font-size:0.72rem;font-weight:600;color:#f87171;cursor:pointer;padding:5px 10px;border-radius:6px;background:transparent;border:none;" onmouseover="this.style.background='rgba(248,113,113,0.1)'" onmouseout="this.style.background='transparent'">Del</button>
                    </div>
                </div>`;
            }).join('')}
        </div>`;
    syncShiftSummaryFields();
}

function syncShiftSummaryFields() {
    const shifts = currentReportData.shiftLogs || [];
    const starts = shifts.map(s => s.startDate).filter(Boolean).sort();
    const ends   = shifts.map(s => s.endDate).filter(Boolean).sort();
    const last   = shifts[shifts.length - 1] || {};
    const setH = (id, val) => { const el = document.getElementById(id); if (el) el.value = val || ''; };
    setH('startDate',   starts[0] || '');
    setH('endDate',     ends[ends.length - 1] || '');
    setH('shiftno',     last.shiftNo || '');
    setH('weather',     last.weather || '');
    setH('visibility',  last.visibility || '');
    setH('temperature', last.temperature || '');
    updateOperationalId();
}

function removeShift(i) {
    if (currentUserRole === 'reviewer') return;
    currentReportData.shiftLogs.splice(i, 1);
    renderShiftLog();
    renderInfographics();
    isDirty = true;
}

function renderProjectSimInfo() {
    if (!preOpData) return;
    const badge = document.getElementById('project-sim-badge');
    const roster = document.getElementById('project-rov-roster');
    const tags = document.getElementById('project-rov-tags');
    if (badge) badge.classList.remove('hidden');
    if (roster && tags && preOpData.rovs?.length > 0) {
        tags.innerHTML = preOpData.rovs.map(r =>
            `<span style="font-size:0.75rem;font-weight:700;padding:4px 12px;border-radius:20px;${r.role==='main'?'background:rgba(243,145,36,0.15);color:#f39124;border:1px solid rgba(243,145,36,0.3)':'background:rgba(107,114,128,0.15);color:#9ca3af;border:1px solid rgba(107,114,128,0.2)'}">
                MS-${r.rovNumber} &middot; ${r.role.toUpperCase()}
            </span>`
        ).join('');
        roster.classList.remove('hidden');
    }
}

// ── Final Setup ───────────────────────────────────────────────────────────────

function initFinalSetupFromPreOp() {
    if (!preOpData || !preOpData.rovs) return;
    const allSensors = [
        ...(preOpData.sensors || []).map(s => ({ ...s, _type: 'mission' })),
        ...Object.entries(preOpData.rovSensors || {})
            .flatMap(([num, arr]) => arr.map(s => ({ ...s, rovNum: parseInt(num), _type: 'fixed' })))
    ];
    currentReportData.finalSetup = {
        _initialized: true,
        activeROVNum: preOpData.rovs.find(r => r.role === 'main')?.rovNumber ?? preOpData.rovs[0]?.rovNumber ?? null,
        sensors: allSensors.map(s => ({ ...s, confirmed: !!(s.calibrated && s.tested), opNote: '' })),
        thrusters: (preOpData.thrusters || []).map(t => ({ ...t, position: '', confirmed: false })),
        systemIPs: (preOpData.systemIPs || []).map(d => ({ ...d })),
        notes: '',
        lockedAt: null,
        revisions: [],
        _pendingChange: false
    };
}

function setFinalActiveROV(num) {
    if (!currentReportData.finalSetup) return;
    currentReportData.finalSetup.activeROVNum = num;
    renderFinalSetupTab();
}

function toggleFinalSensor(idx) {
    const fs = currentReportData.finalSetup;
    if (!fs || !fs.sensors[idx]) return;
    fs.sensors[idx].confirmed = !fs.sensors[idx].confirmed;
    renderFinalSetupTab();
}

function updateFinalSensorNote(idx, val) {
    const fs = currentReportData.finalSetup;
    if (!fs || !fs.sensors[idx]) return;
    fs.sensors[idx].opNote = val;
}

function toggleFinalThruster(idx) {
    const fs = currentReportData.finalSetup;
    if (!fs || !fs.thrusters[idx]) return;
    fs.thrusters[idx].confirmed = !fs.thrusters[idx].confirmed;
    renderFinalSetupTab();
}

function updateFinalThrusterPosition(idx, val) {
    const fs = currentReportData.finalSetup;
    if (!fs || !fs.thrusters[idx]) return;
    fs.thrusters[idx].position = val;
}

function updateFinalSystemIP(idx, field, val) {
    const fs = currentReportData.finalSetup;
    if (!fs || !fs.systemIPs[idx]) return;
    fs.systemIPs[idx][field] = val;
}

function updateFinalNotes(val) {
    if (!currentReportData.finalSetup) return;
    currentReportData.finalSetup.notes = val;
}

function lockFinalSetup() {
    const fs = currentReportData.finalSetup;
    if (!fs) return;
    fs.lockedAt = new Date().toISOString();
    fs._pendingChange = false;
    showToast('Final setup confirmed and locked.', 'success');
    renderFinalSetupTab();
}

function startFinalChange() {
    const fs = currentReportData.finalSetup;
    if (!fs) return;
    fs.lockedAt = null;
    fs._pendingChange = true;
    renderFinalSetupTab();
    setTimeout(() => document.getElementById('final-change-reason')?.focus(), 50);
}

function commitFinalChange() {
    const fs = currentReportData.finalSetup;
    if (!fs) return;
    const reason = document.getElementById('final-change-reason')?.value?.trim() || 'No reason provided';
    if (!fs.revisions) fs.revisions = [];
    fs.revisions.push({
        at: new Date().toISOString(),
        by: currentUserId || 'Operator',
        reason
    });
    fs._pendingChange = false;
    fs.lockedAt = new Date().toISOString();
    showToast('Operational change logged and setup re-confirmed.', 'success');
    renderFinalSetupTab();
}

function cancelFinalChange() {
    const fs = currentReportData.finalSetup;
    if (!fs) return;
    fs._pendingChange = false;
    fs.lockedAt = new Date().toISOString();
    renderFinalSetupTab();
}

function buildFinalSensorRow(s, gIdx, isLocked, inputStyle, dis) {
    const calBadge = ok => ok
        ? `<span style="padding:2px 8px;border-radius:5px;font-size:9px;font-weight:700;background:rgba(243,145,36,0.12);color:#f39124;border:1px solid rgba(243,145,36,0.3)">✓ CAL</span>`
        : `<span style="padding:2px 8px;border-radius:5px;font-size:9px;font-weight:700;background:rgba(239,68,68,0.12);color:#f87171;border:1px solid rgba(239,68,68,0.3)">✗ CAL</span>`;
    const tstBadge = ok => ok
        ? `<span style="padding:2px 8px;border-radius:5px;font-size:9px;font-weight:700;background:rgba(69,159,217,0.12);color:#459fd9;border:1px solid rgba(69,159,217,0.3)">✓ TST</span>`
        : `<span style="padding:2px 8px;border-radius:5px;font-size:9px;font-weight:700;background:rgba(239,68,68,0.12);color:#f87171;border:1px solid rgba(239,68,68,0.3)">✗ TST</span>`;
    const chkStyle = s.confirmed
        ? 'background:rgba(243,145,36,0.15);border:2px solid #f39124;color:#f39124'
        : 'background:rgba(31,41,55,0.6);border:2px solid rgba(55,65,81,0.6);color:transparent';
    return `<tr>
        <td class="px-3 py-2.5 text-center">
            <div onclick="${isLocked ? '' : `toggleFinalSensor(${gIdx})`}" style="${chkStyle};width:20px;height:20px;border-radius:5px;display:inline-flex;align-items:center;justify-content:center;cursor:${isLocked ? 'default' : 'pointer'};font-size:12px;font-weight:bold;transition:all 0.15s">✓</div>
        </td>
        <td class="px-3 py-2.5 text-sm font-medium text-gray-100">${escapeHtml(s.name)}</td>
        <td class="px-3 py-2.5 text-xs text-gray-400">${escapeHtml(s.model || '—')}</td>
        <td class="px-3 py-2.5 text-center text-sm text-gray-300">${s.qty || 1}</td>
        <td class="px-3 py-2.5 text-center">${calBadge(s.calibrated)}</td>
        <td class="px-3 py-2.5 text-center">${tstBadge(s.tested)}</td>
        <td class="px-3 py-2.5">
            <input type="text" value="${escapeHtml(s.opNote || '')}" placeholder="Note…" ${dis}
                oninput="updateFinalSensorNote(${gIdx}, this.value)"
                style="${inputStyle};border-radius:6px;padding:4px 8px;font-size:11px;width:100%;min-width:120px;outline:none">
        </td>
    </tr>`;
}

function renderFinalSetupTab() {
    const el = document.getElementById('finalsetup-content');
    if (!el) return;

    if (!preOpData || !preOpData.rovs || preOpData.rovs.length === 0) {
        el.innerHTML = `
        <div class="flex flex-col items-center justify-center py-24 text-center">
            <svg class="w-16 h-16 mb-4 opacity-20 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <p class="text-gray-500 font-semibold">No Pre-Operation Data</p>
            <p class="text-gray-600 text-sm mt-1">Push from Simulation to populate Final Setup.</p>
        </div>`;
        return;
    }

    if (!currentReportData.finalSetup?._initialized) initFinalSetupFromPreOp();

    const fs = currentReportData.finalSetup;
    const isLocked = !!fs.lockedAt;
    const lockedDate = isLocked
        ? new Date(fs.lockedAt).toLocaleString('en-GB', { day:'2-digit', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' })
        : null;

    const confirmedSensors  = fs.sensors.filter(s => s.confirmed).length;
    const totalSensors      = fs.sensors.length;
    const confirmedThrusters = fs.thrusters.filter(t => t.confirmed).length;
    const totalThrusters    = fs.thrusters.length;
    const filledIPs = fs.systemIPs.filter(d =>
        (d.hasIP !== false && d.ip) || (d.hasPort !== false && d.port)
    ).length;
    const totalIPs = fs.systemIPs.length;

    const isPending  = !!fs._pendingChange;
    const editActive = !isLocked; // fields editable when not locked (initial or pending change)
    const dis = isLocked ? 'disabled' : '';
    const inputStyle = isLocked
        ? 'background:rgba(17,24,39,0.4);color:#6b7280;border:1px solid rgba(55,65,81,0.3);cursor:not-allowed'
        : 'background:rgba(17,24,39,0.6);color:#e5e7eb;border:1px solid rgba(55,65,81,0.5)';

    function fsSection(dotColor, title, subtitle, body) {
        return `
        <div class="rounded-2xl mb-4 overflow-hidden" style="border:1px solid rgba(55,65,81,0.7);background:rgba(17,24,39,0.6);">
            <div class="flex items-center gap-2.5 px-5 py-3" style="background:rgba(31,41,55,0.8);border-bottom:1px solid rgba(55,65,81,0.5);">
                <span class="w-2 h-2 rounded-full flex-shrink-0" style="background:${dotColor};box-shadow:0 0 6px ${dotColor}80;"></span>
                <span class="text-xs font-bold text-gray-200 uppercase tracking-wider flex-1">${title}</span>
                <span class="text-[10px] text-gray-600">${subtitle}</span>
            </div>
            <div class="p-4">${body}</div>
        </div>`;
    }

    const thL = 'px-3 py-2 text-left text-[10px] font-bold uppercase tracking-wider text-gray-500';
    const thC = 'px-3 py-2 text-center text-[10px] font-bold uppercase tracking-wider text-gray-500';

    // ── Header ────────────────────────────────────────────────────────────────
    const revCount = (fs.revisions || []).length;
    let headerButtons = '';
    if (isPending) {
        // State: change in progress — show reason form inline
        headerButtons = `
        <div class="flex flex-col items-end gap-2">
            <span style="font-size:9px;font-weight:700;padding:3px 10px;border-radius:6px;background:rgba(243,145,36,0.15);color:#f39124;border:1px solid rgba(243,145,36,0.3)">CHANGE IN PROGRESS</span>
            <div class="flex items-center gap-2">
                <input id="final-change-reason" type="text" placeholder="Reason for change…"
                    style="background:rgba(17,24,39,0.8);color:#e5e7eb;border:1px solid rgba(243,145,36,0.4);border-radius:7px;padding:5px 10px;font-size:11px;outline:none;width:220px">
                <button onclick="commitFinalChange()" style="padding:5px 14px;border-radius:7px;font-size:11px;font-weight:700;background:#f39124;color:#111827;border:none;cursor:pointer;white-space:nowrap">✓ Commit</button>
                <button onclick="cancelFinalChange()" style="padding:5px 12px;border-radius:7px;font-size:11px;font-weight:700;background:rgba(55,65,81,0.6);color:#9ca3af;border:1px solid rgba(55,65,81,0.5);cursor:pointer">✗ Cancel</button>
            </div>
        </div>`;
    } else if (isLocked) {
        // State: locked — show change log button + revision count
        headerButtons = `
        <div class="flex flex-col items-end gap-2">
            <span style="font-size:9px;font-weight:700;padding:3px 10px;border-radius:6px;background:rgba(69,159,217,0.15);color:#459fd9;border:1px solid rgba(69,159,217,0.3)">CONFIRMED ${lockedDate}${revCount > 0 ? ` · ${revCount} change${revCount > 1 ? 's' : ''}` : ''}</span>
            <button onclick="startFinalChange()" style="padding:6px 16px;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;background:rgba(243,145,36,0.1);color:#f39124;border:1px solid rgba(243,145,36,0.4)">
                📝 Log Operational Change
            </button>
        </div>`;
    } else {
        // State: not yet locked (initial setup)
        headerButtons = `
        <div class="flex flex-col items-end gap-2">
            <button onclick="lockFinalSetup()" style="padding:6px 16px;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;background:#f39124;color:#111827;border:none">
                🔒 Confirm &amp; Lock
            </button>
        </div>`;
    }

    let html = `
    <div class="rounded-2xl mb-5 overflow-hidden" style="border:1px solid rgba(243,145,36,0.25);background:linear-gradient(135deg,rgba(243,145,36,0.06) 0%,rgba(31,41,55,0.8) 100%);">
        <div class="flex items-center justify-between px-6 py-4 border-b" style="border-color:rgba(243,145,36,0.15);">
            <div>
                <p class="text-[10px] font-bold text-[#f39124] uppercase tracking-widest mb-0.5">Final Setup Configuration</p>
                <p class="text-lg font-bold text-white leading-tight">${escapeHtml(preOpData.projectName || '—')}</p>
                <p class="text-xs text-gray-500 mt-0.5">${escapeHtml(preOpData.projectCode || '')} · ${escapeHtml(preOpData.scopeName || '')}</p>
            </div>
            ${headerButtons}
        </div>
        <div class="grid grid-cols-4" style="border-top:1px solid rgba(55,65,81,0.4);">
            <div class="px-4 py-3 text-center" style="border-right:1px solid rgba(55,65,81,0.4);">
                <p class="text-xl font-bold" style="color:#f39124">${confirmedSensors}<span class="text-sm text-gray-500 font-normal">/${totalSensors}</span></p>
                <p class="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">Sensors Confirmed</p>
            </div>
            <div class="px-4 py-3 text-center" style="border-right:1px solid rgba(55,65,81,0.4);">
                <p class="text-xl font-bold" style="color:#f39124">${confirmedThrusters}<span class="text-sm text-gray-500 font-normal">/${totalThrusters}</span></p>
                <p class="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">Thrusters Confirmed</p>
            </div>
            <div class="px-4 py-3 text-center" style="border-right:1px solid rgba(55,65,81,0.4);">
                <p class="text-xl font-bold" style="color:#459fd9">${filledIPs}<span class="text-sm text-gray-500 font-normal">/${totalIPs}</span></p>
                <p class="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">IPs Configured</p>
            </div>
            <div class="px-4 py-3 text-center">
                <p class="text-xl font-bold" style="color:${isLocked ? '#459fd9' : '#f39124'}">${isLocked ? '✓' : '—'}</p>
                <p class="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">Setup Status</p>
            </div>
        </div>
    </div>`;

    // ── 1. Operated Unit ──────────────────────────────────────────────────────
    const rovCards = preOpData.rovs.map(r => {
        const active = r.rovNumber === fs.activeROVNum;
        const isMain = r.role === 'main';
        return `
        <div onclick="${isLocked ? '' : `setFinalActiveROV(${r.rovNumber})`}" style="cursor:${isLocked ? 'default' : 'pointer'};border-radius:12px;padding:16px 24px;border:1px solid ${active ? 'rgba(243,145,36,0.5)' : 'rgba(55,65,81,0.5)'};background:${active ? 'rgba(243,145,36,0.08)' : 'rgba(31,41,55,0.4)'};${active ? 'box-shadow:0 0 16px rgba(243,145,36,0.12)' : ''};transition:all 0.2s;text-align:center;min-width:110px;">
            <div style="font-size:22px;font-weight:900;color:${active ? '#f39124' : '#6b7280'}">MS-${r.rovNumber}</div>
            <div style="font-size:9px;font-weight:700;margin-top:4px;padding:2px 8px;border-radius:4px;display:inline-block;background:${isMain ? 'rgba(243,145,36,0.15)' : 'rgba(55,65,81,0.5)'};color:${isMain ? '#f39124' : '#9ca3af'}">${r.role.toUpperCase()}</div>
            ${active ? `<div style="font-size:9px;color:#459fd9;margin-top:6px;font-weight:600">ACTIVE UNIT</div>` : ''}
        </div>`;
    }).join('');
    html += fsSection('#f39124', 'Operated Unit', 'Select the MiniSpector unit for this operation',
        `<div class="flex gap-3 flex-wrap">${rovCards}</div>`);

    // ── 2. Active Sensors ─────────────────────────────────────────────────────
    let sensorHtml = '';
    const rovNums = [...new Set(fs.sensors.filter(s => s._type === 'fixed').map(s => s.rovNum))].sort((a,b) => a-b);
    rovNums.forEach(num => {
        const rovRole = preOpData.rovs.find(r => r.rovNumber === num)?.role || 'main';
        sensorHtml += `<tr style="background:rgba(17,24,39,0.7)"><td colspan="7" class="px-3 pt-3 pb-1"><span style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#f39124">MS-${num} Standard Equipment · ${rovRole.toUpperCase()}</span></td></tr>`;
        fs.sensors.filter(s => s._type === 'fixed' && s.rovNum === num)
            .forEach(s => { sensorHtml += buildFinalSensorRow(s, fs.sensors.indexOf(s), isLocked, inputStyle, dis); });
    });
    const missionSensors = fs.sensors.filter(s => s._type === 'mission');
    if (missionSensors.length > 0) {
        sensorHtml += `<tr style="background:rgba(17,24,39,0.7)"><td colspan="7" class="px-3 pt-3 pb-1"><span style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#459fd9">Mission Sensors</span></td></tr>`;
        missionSensors.forEach(s => { sensorHtml += buildFinalSensorRow(s, fs.sensors.indexOf(s), isLocked, inputStyle, dis); });
    }
    html += fsSection('#f39124', 'Active Sensors', `${confirmedSensors}/${totalSensors} confirmed`,
        `<table class="w-full">
            <thead><tr style="background:rgba(0,0,0,0.3)">
                <th class="${thC}" style="width:44px">✓</th>
                <th class="${thL}">Sensor / Equipment</th>
                <th class="${thL}">Model</th>
                <th class="${thC}">QTY</th>
                <th class="${thC}">Cal</th>
                <th class="${thC}">Test</th>
                <th class="${thL}">Op. Note</th>
            </tr></thead>
            <tbody class="divide-y divide-gray-800/60">${sensorHtml || '<tr><td colspan="7" class="px-4 py-6 text-center text-gray-600 text-sm">No sensors</td></tr>'}</tbody>
        </table>`);

    // ── 3. Thrusters ─────────────────────────────────────────────────────────
    if (fs.thrusters.length > 0) {
        const thrusterRows = fs.thrusters.map((t, i) => {
            const chkStyle = t.confirmed
                ? 'background:rgba(243,145,36,0.15);border:2px solid #f39124;color:#f39124'
                : 'background:rgba(31,41,55,0.6);border:2px solid rgba(55,65,81,0.6);color:transparent';
            return `<tr>
                <td class="px-3 py-2.5 text-center">
                    <div onclick="${isLocked ? '' : `toggleFinalThruster(${i})`}" style="${chkStyle};width:20px;height:20px;border-radius:5px;display:inline-flex;align-items:center;justify-content:center;cursor:${isLocked ? 'default' : 'pointer'};font-size:12px;font-weight:bold;transition:all 0.15s">✓</div>
                </td>
                <td class="px-3 py-2.5 text-sm text-gray-200 font-mono">${escapeHtml(t.number || '—')}</td>
                <td class="px-3 py-2.5 text-xs text-gray-400 font-mono">${escapeHtml(t.serial || '—')}</td>
                <td class="px-3 py-2.5">
                    <input type="text" value="${escapeHtml(t.position || '')}" placeholder="e.g. Port Horizontal" ${dis}
                        oninput="updateFinalThrusterPosition(${i}, this.value)"
                        style="${inputStyle};border-radius:6px;padding:4px 8px;font-size:11px;width:100%;outline:none">
                </td>
            </tr>`;
        }).join('');
        html += fsSection('#f39124', 'Thrusters', `${confirmedThrusters}/${totalThrusters} confirmed`,
            `<table class="w-full">
                <thead><tr style="background:rgba(0,0,0,0.3)">
                    <th class="${thC}" style="width:44px">✓</th>
                    <th class="${thL}">Thruster No.</th>
                    <th class="${thL}">Serial</th>
                    <th class="${thL}">Position / Location</th>
                </tr></thead>
                <tbody class="divide-y divide-gray-800/60">${thrusterRows}</tbody>
            </table>`);
    }

    // ── 4. System Network ─────────────────────────────────────────────────────
    if (fs.systemIPs.length > 0) {
        let lastCat = null;
        const ipRows = fs.systemIPs.map((dev, i) => {
            const hasIP   = dev.hasIP   !== false;
            const hasPort = dev.hasPort !== false;
            let catRow = '';
            if (dev.category !== lastCat) {
                lastCat = dev.category;
                catRow = `<tr style="background:rgba(17,24,39,0.7)"><td colspan="3" class="px-3 pt-3 pb-1"><span style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#459fd9">${escapeHtml(dev.category)}</span></td></tr>`;
            }
            return catRow + `<tr>
                <td class="px-3 py-2 text-sm text-gray-200" style="min-width:200px">${escapeHtml(dev.name)}</td>
                <td class="px-3 py-2" style="width:160px">${hasIP
                    ? `<input type="text" value="${escapeHtml(dev.ip || '')}" placeholder="0.0.0.0" ${dis} oninput="updateFinalSystemIP(${i},'ip',this.value)" style="${inputStyle};border-radius:6px;padding:4px 8px;font-size:11px;font-family:monospace;width:100%;outline:none;text-align:center">`
                    : '<span class="text-gray-600 text-xs" style="display:block;text-align:center">—</span>'}</td>
                <td class="px-3 py-2" style="width:100px">${hasPort
                    ? `<input type="text" value="${escapeHtml(dev.port || '')}" placeholder="0000" ${dis} oninput="updateFinalSystemIP(${i},'port',this.value)" style="${inputStyle};border-radius:6px;padding:4px 8px;font-size:11px;font-family:monospace;width:100%;outline:none;text-align:center">`
                    : '<span class="text-gray-600 text-xs" style="display:block;text-align:center">—</span>'}</td>
            </tr>`;
        }).join('');
        html += fsSection('#459fd9', 'System Network', `${filledIPs}/${totalIPs} IPs configured`,
            `<table class="w-full">
                <thead><tr style="background:rgba(0,0,0,0.3)">
                    <th class="${thL}">Device</th>
                    <th class="${thC}">IP Address</th>
                    <th class="${thC}">Port</th>
                </tr></thead>
                <tbody class="divide-y divide-gray-800/60">${ipRows}</tbody>
            </table>`);
    }

    // ── 5. Setup Notes ────────────────────────────────────────────────────────
    html += fsSection('#6b7280', 'Setup Notes', 'Deviations, observations, last-minute changes',
        `<textarea ${dis} oninput="updateFinalNotes(this.value)" placeholder="Enter any setup notes, deviations from plan, or field observations…" style="${inputStyle};border-radius:8px;padding:10px 12px;font-size:12px;width:100%;min-height:90px;outline:none;resize:vertical;line-height:1.5">${escapeHtml(fs.notes || '')}</textarea>`);

    // ── 6. Change History ─────────────────────────────────────────────────────
    const revisions = fs.revisions || [];
    const allEntries = [
        { at: fs.lockedAt || null, by: null, reason: null, isBaseline: true },
        ...revisions
    ].filter(e => e.isBaseline || e.at);

    if (allEntries.length > 0) {
        const timelineRows = allEntries.map((rev, idx) => {
            const isBaseline = !!rev.isBaseline;
            const dt = rev.at ? new Date(rev.at).toLocaleString('en-GB', { day:'2-digit', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' }) : 'Pending';
            const dotColor  = isBaseline ? '#f39124' : '#459fd9';
            const label     = isBaseline ? 'Initial Confirmation' : `Change #${idx}`;
            const reasonTxt = isBaseline ? 'Setup confirmed for operation.' : escapeHtml(rev.reason || '—');
            const byTxt     = rev.by ? `by ${escapeHtml(rev.by)}` : '';
            return `
            <div class="flex gap-3" style="position:relative;">
                <div class="flex flex-col items-center flex-shrink-0" style="width:20px;">
                    <div style="width:10px;height:10px;border-radius:50%;background:${dotColor};box-shadow:0 0 6px ${dotColor}80;margin-top:2px;flex-shrink:0"></div>
                    ${idx < allEntries.length - 1 ? `<div style="width:1px;flex:1;background:rgba(55,65,81,0.6);margin-top:4px;min-height:24px"></div>` : ''}
                </div>
                <div class="pb-4" style="flex:1;min-width:0;">
                    <div class="flex items-center gap-2 flex-wrap">
                        <span style="font-size:10px;font-weight:700;color:${dotColor}">${label}</span>
                        ${byTxt ? `<span class="text-[10px] text-gray-600">${byTxt}</span>` : ''}
                        <span class="text-[10px] text-gray-600 ml-auto">${dt}</span>
                    </div>
                    <p class="text-xs text-gray-400 mt-0.5">${reasonTxt}</p>
                </div>
            </div>`;
        }).join('');

        html += `
        <div class="rounded-2xl mb-4 overflow-hidden" style="border:1px solid rgba(55,65,81,0.7);background:rgba(17,24,39,0.6);">
            <div class="flex items-center gap-2.5 px-5 py-3" style="background:rgba(31,41,55,0.8);border-bottom:1px solid rgba(55,65,81,0.5);">
                <span class="w-2 h-2 rounded-full flex-shrink-0" style="background:#459fd9;box-shadow:0 0 6px #459fd980;"></span>
                <span class="text-xs font-bold text-gray-200 uppercase tracking-wider flex-1">Change History</span>
                <span class="text-[10px] text-gray-600">${revisions.length} operational change${revisions.length !== 1 ? 's' : ''}</span>
            </div>
            <div class="px-5 pt-4 pb-1">${timelineRows}</div>
        </div>`;
    }

    el.innerHTML = html;
}

function togglePreOpSection(id) {
    const body = document.getElementById(id);
    const arrow = document.getElementById('preop-arrow-' + id);
    if (!body) return;
    const hidden = body.classList.toggle('hidden');
    if (arrow) arrow.style.transform = hidden ? 'rotate(-90deg)' : 'rotate(0deg)';
}

function renderPreOpTab() {
    const container = document.getElementById('preop-content');
    if (!container || !preOpData) return;

    const isLocked = preOpData.locked;
    const allSensors   = [...preOpData.sensors,  ...preOpData.additions.sensors];
    const allMachines  = [...preOpData.machines,  ...preOpData.additions.machines];
    const allEquipment = preOpData.equipment || [];

    // All fixed sensors across all ROVs for readiness count
    const allFixed = Object.entries(preOpData.rovSensors || {})
        .sort((a, b) => parseInt(a[0]) - parseInt(b[0]))
        .flatMap(([num, arr]) => arr.map(s => ({ ...s, rovNum: parseInt(num) })));

    const sensorsReady = [...allSensors, ...allFixed].filter(s => s.calibrated && s.tested).length;
    const sensorsTotal = allSensors.length + allFixed.length;
    const sensorsCheck = sensorsTotal - sensorsReady;
    const pushedDate   = preOpData.pushedAt
        ? new Date(preOpData.pushedAt).toLocaleDateString('en-GB', { day:'2-digit', month:'short', year:'numeric' })
        : '—';

    // KPI / Header bar
    let html = `
    <div class="rounded-2xl mb-5 overflow-hidden" style="border:1px solid rgba(243,145,36,0.25);background:linear-gradient(135deg,rgba(243,145,36,0.06) 0%,rgba(31,41,55,0.8) 100%);">
        <div class="flex items-center justify-between px-6 py-4 border-b" style="border-color:rgba(243,145,36,0.15);">
            <div>
                <p class="text-[10px] font-bold text-[#f39124] uppercase tracking-widest mb-0.5">Packing List &amp; Equipment</p>
                <p class="text-lg font-bold text-white leading-tight">${escapeHtml(preOpData.projectName || '—')}</p>
                <p class="text-xs text-gray-500 mt-0.5">${escapeHtml(preOpData.projectCode || '')} &middot; ${escapeHtml(preOpData.scopeName || '')} &middot; Pushed ${pushedDate}</p>
            </div>
            <div class="flex gap-2 flex-wrap justify-end">
                ${preOpData.rovs.map(r => `<span class="text-xs font-bold px-2.5 py-1 rounded-lg ${r.role==='main' ? 'text-[#f39124] border border-[rgba(243,145,36,0.4)] bg-[rgba(243,145,36,0.08)]' : 'text-gray-400 border border-gray-600 bg-gray-800'}">MS-${r.rovNumber} &middot; ${r.role.toUpperCase()}</span>`).join('')}
            </div>
        </div>
        <div class="grid grid-cols-5" style="border-top:1px solid rgba(55,65,81,0.4);">
            <div class="px-4 py-4 text-center" style="border-right:1px solid rgba(55,65,81,0.4);">
                <p class="text-2xl font-bold" style="color:#f39124">${sensorsReady}<span class="text-sm text-gray-500 font-normal">/${sensorsTotal}</span></p>
                <p class="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">Sensors Ready</p>
                ${sensorsCheck > 0 ? `<p class="text-[10px] mt-0.5" style="color:#f39124">${sensorsCheck} need check</p>` : '<p class="text-[10px] mt-0.5" style="color:#459fd9">All verified</p>'}
            </div>
            <div class="px-4 py-4 text-center" style="border-right:1px solid rgba(55,65,81,0.4);">
                <p class="text-2xl font-bold text-[#459fd9]">${allMachines.length}</p>
                <p class="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">Machines</p>
                <p class="text-[10px] text-gray-600 mt-0.5">Computers &amp; systems</p>
            </div>
            <div class="px-4 py-4 text-center" style="border-right:1px solid rgba(55,65,81,0.4);">
                <p class="text-2xl font-bold" style="color:#459fd9">${allEquipment.length}</p>
                <p class="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">Hardware Items</p>
                <p class="text-[10px] text-gray-600 mt-0.5">Cables &amp; consumables</p>
            </div>
            <div class="px-4 py-4 text-center" style="border-right:1px solid rgba(55,65,81,0.4);">
                <p class="text-2xl font-bold" style="color:#f39124">${(preOpData.thrusters || []).length}</p>
                <p class="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">Thrusters</p>
                <p class="text-[10px] text-gray-600 mt-0.5">Listed units</p>
            </div>
            <div class="px-4 py-4 text-center">
                <p class="text-2xl font-bold" style="color:#459fd9">${(preOpData.systemIPs || []).length}</p>
                <p class="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">System IPs</p>
                <p class="text-[10px] text-gray-600 mt-0.5">Network devices</p>
            </div>
        </div>
    </div>`;

    const thL = 'px-4 py-2.5 text-left text-[10px] font-bold uppercase tracking-wider text-gray-500';
    const thC = 'px-4 py-2.5 text-center text-[10px] font-bold uppercase tracking-wider text-gray-500';
    const calBadge = ok => ok
        ? `<span style="padding:2px 8px;border-radius:5px;font-size:9px;font-weight:700;background:rgba(243,145,36,0.12);color:#f39124;border:1px solid rgba(243,145,36,0.3)">✓ CAL</span>`
        : `<span style="padding:2px 8px;border-radius:5px;font-size:9px;font-weight:700;background:rgba(239,68,68,0.12);color:#f87171;border:1px solid rgba(239,68,68,0.3)">✗ CAL</span>`;
    const tstBadge = ok => ok
        ? `<span style="padding:2px 8px;border-radius:5px;font-size:9px;font-weight:700;background:rgba(69,159,217,0.12);color:#459fd9;border:1px solid rgba(69,159,217,0.3)">✓ TST</span>`
        : `<span style="padding:2px 8px;border-radius:5px;font-size:9px;font-weight:700;background:rgba(239,68,68,0.12);color:#f87171;border:1px solid rgba(239,68,68,0.3)">✗ TST</span>`;
    const rdyBadge = ok => ok
        ? `<span style="padding:2px 10px;border-radius:5px;font-size:9px;font-weight:700;background:rgba(243,145,36,0.12);color:#f39124;border:1px solid rgba(243,145,36,0.3)">READY</span>`
        : `<span style="padding:2px 10px;border-radius:5px;font-size:9px;font-weight:700;background:rgba(239,68,68,0.12);color:#f87171;border:1px solid rgba(239,68,68,0.3)">CHECK</span>`;

    function sectionWrap(dotColor, title, subtitle, body) {
        const secId = 'preop-sec-' + title.replace(/[^a-z0-9]/gi, '-').toLowerCase();
        return `
        <div class="rounded-2xl mb-4 overflow-hidden" style="border:1px solid rgba(55,65,81,0.7);background:rgba(17,24,39,0.6);">
            <div class="flex items-center gap-2.5 px-5 py-3 cursor-pointer select-none" style="background:rgba(31,41,55,0.8);border-bottom:1px solid rgba(55,65,81,0.5);" onclick="togglePreOpSection('${secId}')">
                <span class="w-2 h-2 rounded-full flex-shrink-0" style="background:${dotColor};box-shadow:0 0 6px ${dotColor}80;"></span>
                <span class="text-xs font-bold text-gray-200 uppercase tracking-wider flex-1">${title}</span>
                <span class="text-[10px] text-gray-600 mr-2">${subtitle}</span>
                <svg id="preop-arrow-${secId}" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color:#6b7280;flex-shrink:0;transition:transform 0.2s;transform:rotate(-90deg)"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
            <div id="${secId}" class="overflow-x-auto hidden">${body}</div>
        </div>`;
    }

    // Per-ROV Standard Equipment sections
    const rovNums = [...new Set(allFixed.map(s => s.rovNum))].sort((a, b) => a - b);
    rovNums.forEach(num => {
        const rovRole = preOpData.rovs.find(r => r.rovNumber === num)?.role || 'main';
        const rovFixedList = allFixed.filter(s => s.rovNum === num);
        const rovFixedRows = rovFixedList.map((s, i) => {
            const ready = s.calibrated && s.tested;
            return `<tr>
                <td class="px-4 py-2.5 text-xs text-gray-600 w-8">${i+1}</td>
                <td class="px-4 py-2.5">
                    <div class="flex items-center gap-2">
                        <span class="text-sm font-medium text-gray-100">${escapeHtml(s.name)}</span>
                        <span class="text-[9px] text-gray-600">fixed</span>
                    </div>
                </td>
                <td class="px-4 py-2.5 text-xs text-gray-400">${escapeHtml(s.model || '—')}</td>
                <td class="px-4 py-2.5 text-center text-sm font-semibold text-gray-300">${s.qty || 1}</td>
                <td class="px-4 py-2.5 text-center">${calBadge(s.calibrated)}</td>
                <td class="px-4 py-2.5 text-center">${tstBadge(s.tested)}</td>
                <td class="px-4 py-2.5 text-center">${rdyBadge(ready)}</td>
            </tr>`;
        }).join('');

        const thL = 'px-4 py-2.5 text-left text-[10px] font-bold uppercase tracking-wider text-gray-500';
        const thC = 'px-4 py-2.5 text-center text-[10px] font-bold uppercase tracking-wider text-gray-500';
        html += sectionWrap(
            '#f39124',
            `MS-${num} Standard Equipment`,
            `${rovRole.toUpperCase()} · ${rovFixedList.length} fixed sensors`,
            `<table class="w-full">
                <thead><tr style="background:rgba(0,0,0,0.3);">
                    <th class="${thL} w-8">#</th>
                    <th class="${thL}">Sensor / Equipment</th>
                    <th class="${thL}">Model</th>
                    <th class="${thC}">QTY</th>
                    <th class="${thC}">Cal.</th>
                    <th class="${thC}">Test</th>
                    <th class="${thC}">Status</th>
                </tr></thead>
                <tbody class="divide-y divide-gray-800/60">${rovFixedRows}</tbody>
            </table>`
        );
    });

    // Sensor Packing List
    const sensorRows = allSensors.map((s, i) => {
        const ready  = s.calibrated && s.tested;
        const originLabel = s.origin === 'simulation' ? 'sim' : 'op';
        return `<tr>
            <td class="px-4 py-2.5 text-xs text-gray-600 w-8">${i+1}</td>
            <td class="px-4 py-2.5"><div class="flex items-center gap-2"><span class="text-sm font-medium text-gray-100">${escapeHtml(s.name)}</span><span class="text-[9px] text-gray-600">${originLabel}</span></div></td>
            <td class="px-4 py-2.5 text-xs text-gray-400">${escapeHtml(s.model || '—')}</td>
            <td class="px-4 py-2.5 text-center text-sm font-semibold text-gray-300">${s.qty || 1}</td>
            <td class="px-4 py-2.5 text-center">${calBadge(s.calibrated)}</td>
            <td class="px-4 py-2.5 text-center">${tstBadge(s.tested)}</td>
            <td class="px-4 py-2.5 text-center">${rdyBadge(ready)}</td>
        </tr>`;
    }).join('');

    html += sectionWrap('#10b981', 'Sensor Packing List',
        `${allSensors.length} items &middot; ${sensorsReady} verified`,
        `<table class="w-full">
            <thead><tr style="background:rgba(0,0,0,0.3);">
                <th class="${thL} w-8">#</th>
                <th class="${thL}">Sensor / Equipment</th>
                <th class="${thL}">Model</th>
                <th class="${thC}">QTY</th>
                <th class="${thC}">Cal.</th>
                <th class="${thC}">Test</th>
                <th class="${thC}">Status</th>
            </tr></thead>
            <tbody class="divide-y divide-gray-800/60">${sensorRows || '<tr><td colspan="7" class="px-4 py-6 text-center text-gray-600 text-sm">No sensors</td></tr>'}</tbody>
        </table>`);

    // Machines & Computers
    if (allMachines.length > 0) {
        const machineRows = allMachines.map((m, i) => {
            const ok     = m.status === 'OK' || m.status === 'operational';
            const originLabel = m.origin === 'simulation' ? 'sim' : 'op';
            return `<tr>
                <td class="px-4 py-2.5 text-xs text-gray-600 w-8">${i+1}</td>
                <td class="px-4 py-2.5"><div class="flex items-center gap-2"><span class="text-sm font-medium text-gray-100">${escapeHtml(m.name)}</span><span class="text-[9px] text-gray-600">${originLabel}</span></div></td>
                <td class="px-4 py-2.5 text-xs text-gray-400">${escapeHtml(m.model || '—')}</td>
                <td class="px-4 py-2.5 text-xs font-mono text-gray-400">${escapeHtml(m.ip || '—')}</td>
                <td class="px-4 py-2.5 text-center"><span class="text-[10px] font-bold px-2.5 py-1 rounded-full" style="${ok ? 'background:rgba(243,145,36,0.15);color:#f39124;border:1px solid rgba(243,145,36,0.2)' : 'background:rgba(239,68,68,0.15);color:#f87171;border:1px solid rgba(239,68,68,0.2)'}">${escapeHtml(m.status || 'OK')}</span></td>
            </tr>`;
        }).join('');

        html += sectionWrap('#459fd9', 'Machines &amp; Computers',
            `${allMachines.length} units`,
            `<table class="w-full">
                <thead><tr style="background:rgba(0,0,0,0.3);">
                    <th class="${thL} w-8">#</th>
                    <th class="${thL}">Machine / Computer</th>
                    <th class="${thL}">Model / Role</th>
                    <th class="${thL}">IP Address</th>
                    <th class="${thC}">Status</th>
                </tr></thead>
                <tbody class="divide-y divide-gray-800/60">${machineRows}</tbody>
            </table>`);
    }

    // Hardware & Consumables
    if (allEquipment.length > 0) {
        const equipRows = allEquipment.map((e, i) => {
            const qty   = e.qty || 0;
            return `<tr>
                <td class="px-4 py-2.5 text-xs text-gray-600 w-8">${i+1}</td>
                <td class="px-4 py-2.5 text-sm font-medium text-gray-100">${escapeHtml(e.item || '—')}</td>
                <td class="px-4 py-2.5 text-center"><span class="inline-block px-2.5 py-0.5 rounded text-xs font-bold" style="${qty > 0 ? 'background:rgba(69,159,217,0.15);color:#459fd9' : 'background:rgba(55,65,81,1);color:#6b7280'}">${qty}</span></td>
                <td class="px-4 py-2.5 text-xs text-gray-500">${escapeHtml(e.comments || '—')}</td>
            </tr>`;
        }).join('');

        html += sectionWrap('#459fd9', 'Hardware &amp; Consumables',
            `${allEquipment.length} line items`,
            `<table class="w-full">
                <thead><tr style="background:rgba(0,0,0,0.3);">
                    <th class="${thL} w-8">#</th>
                    <th class="${thL}">Item</th>
                    <th class="${thC}">QTY</th>
                    <th class="${thL}">Notes</th>
                </tr></thead>
                <tbody class="divide-y divide-gray-800/60">${equipRows}</tbody>
            </table>`);
    }

    // Thrusters List
    const allThrusters = preOpData.thrusters || [];
    if (allThrusters.length > 0) {
        const thrusterRows = allThrusters.map((t, i) => {
            return `<tr>
                <td class="px-4 py-2.5 text-xs text-gray-600 w-8">${i + 1}</td>
                <td class="px-4 py-2.5 text-sm font-medium text-gray-100">${escapeHtml(t.number || '—')}</td>
                <td class="px-4 py-2.5 text-xs font-mono text-gray-400">${escapeHtml(t.serial || '—')}</td>
            </tr>`;
        }).join('');
        html += sectionWrap('#f39124', 'Thrusters List',
            `${allThrusters.length} units`,
            `<table class="w-full">
                <thead><tr style="background:rgba(0,0,0,0.3);">
                    <th class="${thL} w-8">#</th>
                    <th class="${thL}">Thruster No.</th>
                    <th class="${thL}">Serial Number</th>
                </tr></thead>
                <tbody class="divide-y divide-gray-800/60">${thrusterRows}</tbody>
            </table>`);
    }

    // System IPs
    const allSystemIPs = preOpData.systemIPs || [];
    if (allSystemIPs.length > 0) {
        let lastCat = null;
        const ipRows = allSystemIPs.map((dev, i) => {
            const hasIP   = dev.hasIP   !== false;
            const hasPort = dev.hasPort !== false;
            let catRow = '';
            if (dev.category !== lastCat) {
                lastCat = dev.category;
                catRow = `<tr style="background:rgba(17,24,39,0.7);">
                    <td colspan="4" class="px-4 pt-3 pb-1">
                        <span style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#459fd9">${escapeHtml(dev.category)}</span>
                    </td>
                </tr>`;
            }
            return catRow + `<tr>
                <td class="px-4 py-2 text-sm text-gray-200">${escapeHtml(dev.name)}</td>
                <td class="px-4 py-2 text-xs font-mono text-gray-400 text-center">${hasIP ? (escapeHtml(dev.ip || '—')) : '<span class="text-gray-600">—</span>'}</td>
                <td class="px-4 py-2 text-xs font-mono text-gray-400 text-center">${hasPort ? (escapeHtml(dev.port || '—')) : '<span class="text-gray-600">—</span>'}</td>
            </tr>`;
        }).join('');
        html += sectionWrap('#459fd9', 'System IPs',
            `${allSystemIPs.length} devices`,
            `<table class="w-full">
                <thead><tr style="background:rgba(0,0,0,0.3);">
                    <th class="${thL}">Device</th>
                    <th class="${thC}">IP Address</th>
                    <th class="${thC}">Port</th>
                </tr></thead>
                <tbody class="divide-y divide-gray-800/60">${ipRows}</tbody>
            </table>`);
    }

    // Flagged Issues from Simulation
    const allIssues = preOpData.issues || [];
    if (allIssues.length > 0) {
        const severityStyle = { critical: 'bg-red-500/15 text-red-400 border-red-500/20', major: 'bg-amber-500/15 text-amber-400 border-amber-500/20', minor: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/20' };
        const issueRows = allIssues.map((iss, i) => {
            const sev = iss.severity || 'minor';
            const badgeCls = severityStyle[sev] || severityStyle.minor;
            return `<tr>
                <td class="px-4 py-2.5 text-xs text-gray-600 w-8">${i+1}</td>
                <td class="px-4 py-2.5 text-sm font-medium text-gray-100">${escapeHtml(iss.title || '—')}</td>
                <td class="px-4 py-2.5 text-xs text-gray-400">${escapeHtml(iss.description || '—')}</td>
                <td class="px-4 py-2.5 text-center"><span class="text-[10px] font-bold px-2.5 py-1 rounded-full border ${badgeCls}">${sev.toUpperCase()}</span></td>
                <td class="px-4 py-2.5 text-center"><span class="text-[10px] font-bold px-2.5 py-1 rounded-full ${iss.status==='open' ? 'bg-red-500/15 text-red-400' : 'bg-green-500/15 text-green-400'}">${(iss.status || 'open').toUpperCase()}</span></td>
            </tr>`;
        }).join('');

        html += sectionWrap('#ef4444', 'Flagged Issues',
            `${allIssues.length} from simulation`,
            `<table class="w-full">
                <thead><tr style="background:rgba(0,0,0,0.3);">
                    <th class="${thL} w-8">#</th>
                    <th class="${thL}">Issue</th>
                    <th class="${thL}">Description</th>
                    <th class="${thC}">Severity</th>
                    <th class="${thC}">Status</th>
                </tr></thead>
                <tbody class="divide-y divide-gray-800/60">${issueRows}</tbody>
            </table>`);
    }

    // Operation-Time Additions
    if (!isLocked) {
        html += `
        <div class="rounded-2xl p-5 mt-1" style="border:1px dashed rgba(243,145,36,0.3);background:rgba(243,145,36,0.03);">
            <p class="text-[10px] font-bold text-[#f39124] uppercase tracking-widest mb-4">+ Operation-Time Additions</p>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <label class="text-xs font-bold text-gray-500 block mb-2">Add Sensor</label>
                    <div class="flex gap-2">
                        <input type="text" id="preop-add-sensor-name" placeholder="Sensor name"
                            class="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 outline-none focus:border-[#f39124] transition-colors">
                        <input type="text" id="preop-add-sensor-model" placeholder="Model"
                            class="w-28 bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 outline-none focus:border-[#f39124] transition-colors">
                        <button onclick="preOpAddSensor()"
                            class="px-3 py-2 text-xs font-bold rounded-lg text-white"
                            style="background:#f39124;" onmouseover="this.style.background='#e07d10'" onmouseout="this.style.background='#f39124'">+ Add</button>
                    </div>
                </div>
                <div>
                    <label class="text-xs font-bold text-gray-500 block mb-2">Add Machine</label>
                    <div class="flex gap-2">
                        <input type="text" id="preop-add-machine-name" placeholder="Machine name"
                            class="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 outline-none focus:border-[#f39124] transition-colors">
                        <input type="text" id="preop-add-machine-model" placeholder="Model"
                            class="w-28 bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 outline-none focus:border-[#f39124] transition-colors">
                        <button onclick="preOpAddMachine()"
                            class="px-3 py-2 text-xs font-bold rounded-lg text-white"
                            style="background:#f39124;" onmouseover="this.style.background='#e07d10'" onmouseout="this.style.background='#f39124'">+ Add</button>
                    </div>
                </div>
            </div>
        </div>`;
    }

    container.innerHTML = html;
}

function preOpAddSensor() {
    if (!preOpData || preOpData.locked) return;
    const nameEl = document.getElementById('preop-add-sensor-name');
    const modelEl = document.getElementById('preop-add-sensor-model');
    const name = nameEl?.value.trim();
    if (!name) return;
    preOpData.additions.sensors.push({
        name, model: modelEl?.value.trim() || '', qty: 1,
        calibrated: false, tested: false, origin: 'operation'
    });
    nameEl.value = '';
    if (modelEl) modelEl.value = '';
    renderPreOpTab();
    showToast(`"${name}" added as operation-time sensor.`, 'success');
}

function preOpAddMachine() {
    if (!preOpData || preOpData.locked) return;
    const nameEl = document.getElementById('preop-add-machine-name');
    const modelEl = document.getElementById('preop-add-machine-model');
    const name = nameEl?.value.trim();
    if (!name) return;
    preOpData.additions.machines.push({
        name, model: modelEl?.value.trim() || '', ip: '', status: 'OK', origin: 'operation'
    });
    nameEl.value = '';
    if (modelEl) modelEl.value = '';
    renderPreOpTab();
    showToast(`"${name}" added as operation-time machine.`, 'success');
}

function confirmAndLockPreOp() {
    if (!preOpData) return;
    if (!confirm('This will lock the Pre-Operation checklist.\nNo further changes can be made.\n\nAre you sure?')) return;
    preOpData.locked = true;
    preOpData.lockedAt = new Date().toISOString();
    renderPreOpTab();
    showToast('Pre-Operation confirmed and locked!', 'success');
}

// ==========================================
// SIMULATION HISTORY
// ==========================================

async function loadSimHistory() {
    try {
        const sessions = await window.electronAPI.getSimSessions();
        const container = document.getElementById('sim-history-list');
        if (!container) return;
        if (!sessions || sessions.length === 0) {
            container.innerHTML = '<p class="text-gray-600 text-sm italic">No saved simulations yet.</p>';
            return;
        }
        container.innerHTML = sessions.map(s => {
            const date = new Date(s.mtime).toLocaleDateString();
            return `<div onclick="loadSimFromHistory('${s.path.replace(/\\/g, '\\\\')}')"
                class="flex items-center justify-between p-3 bg-gray-800/60 rounded-xl border border-gray-700/50 cursor-pointer hover:border-orange-500/50 hover:bg-orange-500/5 transition-all group">
                <div>
                    <p class="text-sm font-bold text-white group-hover:text-orange-300 transition-colors">${escapeHtml(s.projectName || s.name)}</p>
                    <p class="text-xs text-gray-500 mt-0.5">${escapeHtml(s.scopeName || '')} · ${date}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-600 group-hover:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </div>`;
        }).join('');
    } catch (e) { console.error('Failed to load sim history:', e); }
}

async function loadSimFromHistory(filePath) {
    try {
        const data = await window.electronAPI.loadSimFile(filePath);
        if (data) {
            loadSimulationState(data);
            showToast('Simulation loaded!', 'success');
        }
    } catch (e) { alert('Failed to load: ' + e.message); }
}


function addSensorRow(tbodyId, data = {}) {
    const container = document.getElementById(tbodyId);
    const tr = document.createElement('tr');
    tr.className = "hover:bg-gray-700/50 transition-colors";

    const name = data.name || '';
    const model = data.model || '';
    const cal = data.cal || '';
    const notes = data.notes || '';
    const isOk = data.status === 'OK';

    tr.innerHTML = `
        <td class="p-2 pl-4">
            <input type="text" class="row-name w-full bg-transparent border-b border-transparent hover:border-gray-600 focus:border-blue-500 outline-none text-gray-300 font-bold placeholder-gray-600 transition-all" 
                   value="${name}" placeholder="Item Name...">
        </td>
        <td class="p-2">
            <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="row-status sr-only peer" ${isOk ? 'checked' : ''} onchange="updateRowStatusLabel(this)">
                <div class="w-11 h-4 bg-gray-600 peer-focus:outline-none rounded-full peer peer-bg after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                <span class="row-status-label ml-3 text-sm font-bold w-12 ${isOk ? 'text-green-400' : 'text-red-400'}">${isOk ? 'OK' : 'Fault'}</span>
            </label>
        </td>
        <td class="p-2">
            <input type="text" class="row-model w-full bg-gray-900 border border-gray-600 rounded px-2 py-1 text-xs text-white outline-none focus:border-blue-500" 
                   value="${model}" placeholder="Model...">
        </td>
        <td class="p-2">
            <input type="date" class="row-cal w-full bg-gray-900 border border-gray-600 rounded px-2 py-1 text-xs text-white outline-none focus:border-blue-500" 
                   value="${cal}">
        </td>
        <td class="p-2">
            <input type="text" class="row-notes w-full bg-gray-900 border border-gray-600 rounded px-2 py-1 text-xs text-white outline-none focus:border-blue-500" 
                   value="${notes}" placeholder="Notes...">
        </td>
        <td class="p-2 text-center">
            <button onclick="this.closest('tr').remove()" class="text-red-500 hover:text-red-400 font-bold text-lg" title="Remove Row">×</button>
        </td>
    `;
    container.appendChild(tr);
}




function resetSensorTab() {
    document.getElementById('sensor-empty-state').classList.remove('hidden');
    document.getElementById('sensor-content').classList.add('hidden');
    
    // Clear tables
    document.getElementById('camLightBody').innerHTML = '';
    document.getElementById('sensorBody').innerHTML = '';
}

// 2. Show Table View
function showSensorTables() {
    document.getElementById('sensor-empty-state').classList.add('hidden');
    document.getElementById('sensor-content').classList.remove('hidden');
    document.getElementById('sensor-content').classList.add('flex');
}

// 3. Option A: Load Defaults
function loadDefaultSensors() {
    showSensorTables();
    cameraLightItems.forEach(item => addSensorRow('camLightBody', { name: item.label, status: 'Fault' }));
    sensorItems.forEach(item => addSensorRow('sensorBody', { name: item.label, status: 'Fault' }));
}

// 4. Option B: Import JSON (User B Action)
// ==========================================
// TAB NAVIGATION
// ==========================================
function showTab(tabName, navElement) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    document.getElementById('tab-' + tabName).classList.remove('hidden');
    
    if (tabName === 'predive') {
        updatePreDiveSystemSelect(); 
    }
    if (navElement.id !== "nav-dash") {
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        navElement.classList.add('active');
        let titleText = navElement.innerText.replace(/^[0-9]+|📊/, '').trim();
        document.getElementById('page-title').innerText = titleText;
    } else {
        document.getElementById('page-title').innerText = "Infographics & Analysis";
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        renderInfographics();
    }
}

// ==========================================
// SHARED HELPERS (toast + HTML escape)
// ==========================================

// FIX (BUG #1): showToast was called in saveSimulationJSON / exportSimulationWord /
// auto-save restore but never defined — caused "ReferenceError: showToast is not defined"
// after every successful save/export. This is a minimal DOM-based toast.
function showToast(message, type = 'info') {
    try {
        let host = document.getElementById('toast-host');
        if (!host) {
            host = document.createElement('div');
            host.id = 'toast-host';
            host.style.cssText = 'position:fixed;top:20px;right:20px;z-index:9999;display:flex;flex-direction:column;gap:8px;pointer-events:none;';
            document.body.appendChild(host);
        }
        const colors = {
            success: { bg: '#16a34a', border: '#22c55e' },
            error:   { bg: '#dc2626', border: '#ef4444' },
            warn:    { bg: '#d97706', border: '#f59e0b' },
            info:    { bg: '#2563eb', border: '#3b82f6' }
        };
        const c = colors[type] || colors.info;
        const t = document.createElement('div');
        t.style.cssText = `background:${c.bg};color:#fff;padding:10px 16px;border-radius:8px;border:1px solid ${c.border};font-weight:600;font-size:13px;box-shadow:0 4px 12px rgba(0,0,0,0.4);opacity:0;transform:translateX(20px);transition:all 0.25s;pointer-events:auto;max-width:340px;`;
        t.textContent = message;
        host.appendChild(t);
        requestAnimationFrame(() => { t.style.opacity = '1'; t.style.transform = 'translateX(0)'; });
        setTimeout(() => {
            t.style.opacity = '0';
            t.style.transform = 'translateX(20px)';
            setTimeout(() => t.remove(), 300);
        }, 3200);
    } catch (e) {
        // Last-resort fallback so callers never crash
        console.log('[toast]', type, message);
    }
}

// FIX (BUG #16/17): Many simulation render functions interpolate user-provided
// strings (issue title/description, sensor model, custom sensor name) directly
// into HTML via template literals. A user typing a quote, "<", or "</textarea>"
// could break the layout or trigger XSS. This helper sanitises any string before
// it is dropped into HTML. Use for value="..." attributes and textContent areas.
function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function showTip(el, text) {
    if (!text || !text.trim()) return;
    const tip = document.getElementById('sim-tooltip');
    if (!tip) return;
    tip.textContent = text;
    tip.style.display = 'block';
    const rect = el.getBoundingClientRect();
    const vw = window.innerWidth, vh = window.innerHeight;
    let left = rect.left;
    let top  = rect.bottom + 7;
    tip.style.left = '0px'; tip.style.top = '0px';           // reset so offsetWidth is accurate
    const tw = Math.min(tip.scrollWidth, 340);
    const th = tip.scrollHeight;
    if (left + tw > vw - 8) left = Math.max(8, vw - tw - 8);
    if (top  + th > vh - 8) top  = rect.top - th - 7;
    tip.style.left = left + 'px';
    tip.style.top  = top  + 'px';
}

function hideTip() {
    const tip = document.getElementById('sim-tooltip');
    if (tip) tip.style.display = 'none';
}

// ==========================================
// SIMULATION SYSTEM — Scope-Based Bundles
// ==========================================

// --- Hardware recommendations per sensor ---
const SENSOR_HARDWARE = {
    'Front/Boom Camera':      ['AQV 62 IP Subsea Camera', 'Board Camera', 'MCS HIKVISION Camera'],
    'Rear Camera':            ['AQV 62 IP Subsea Camera', 'Board Camera', 'MCS HIKVISION Camera'],
    'Side Camera':            ['AQV 62 IP Subsea Camera', 'Board Camera', 'MCS HIKVISION Camera'],
    'PRC (Fixed)':            ['Embedded in Prospector'],
    'PRC External Frame':     ['External PRC Frame'],
    'PRC Real-Time':          ['Real-time PRC Pod'],
    'Navigation':             ['SUBSONUS USBL/INS'],
    'Gyro':                   ['Embedded in Prospector', 'Exail Octans Nano'],
    'Depth':                  ['Embedded in Prospector'],
    'Altimeter':              ['Impact Subsea ISA200', 'Embedded in Prospector'],
    'Scan (SBES/Profiler)':   ['DFP TriTech', 'Impact Subsea ISP360'],
    'MBES':                   ['SeaBat T20-S', 'IMAGENEX MODEL 837A Delta T', 'NORBIT Winghead B44'],
    'PipeTracker':            ['HydroPACT 660E', 'Pipe-Tracker-Innovatum Smartrak'],
    'CP':                     ['MCS CP'],
    'Manipulator':            ['Reach Bravo 5', 'Exail 5E-micro'],
    'UT':                     ['Cygnus M5-ROV-2K'],
    'FMD':                    ['Impact Subsea ISA500'],
    'Cleaning Brush':         ['MCS HT Brush', 'FlexiClean'],
    'Water Jet':              ['Caviblaster (ProSpector Custom)'],
    'Sonar 360':              ['Impact Subsea ISS360', 'Micron Sonar TriTech MK3'],
};

// --- 15 Operation Scopes ---
// status: 'required' | 'optional'
// Fixed unit sensors (Rear Camera, Side Camera, Front/Boom Camera, PRC (Fixed)) are excluded
// — they always appear via MINISPECTOR_FIXED_SENSORS per selected ROV.
const OPERATION_SCOPES = {
    1: {
        name: 'Platform Conventional Inspection (GVI - CVI - CP - UT - ACFM)',
        category: 'Platform',
        sensors: [
            { name: 'Navigation',       status: 'required' },
            { name: 'Gyro',             status: 'required' },
            { name: 'Depth',            status: 'required' },
            { name: 'CP',               status: 'required' },
            { name: 'Manipulator',      status: 'required' },
            { name: 'UT',               status: 'required' },
            { name: 'FMD',              status: 'required' },
            { name: 'Cleaning Brush',   status: 'required' },
            { name: 'PRC Real-Time',    status: 'optional' }
        ]
    },
    2: {
        name: 'Platform Conventional Inspection with PRC',
        category: 'Platform',
        sensors: [
            { name: 'PRC Real-Time',    status: 'required' },
            { name: 'Navigation',       status: 'required' },
            { name: 'Gyro',             status: 'required' },
            { name: 'Depth',            status: 'required' },
            { name: 'CP',               status: 'required' },
            { name: 'Manipulator',      status: 'required' },
            { name: 'UT',               status: 'required' },
            { name: 'FMD',              status: 'required' },
            { name: 'Cleaning Brush',   status: 'required' }
        ]
    },
    3: {
        name: 'Platform GVI - Video Only',
        category: 'Platform',
        sensors: [
            { name: 'Navigation',       status: 'required' },
            { name: 'Gyro',             status: 'required' },
            { name: 'Depth',            status: 'required' },
            { name: 'CP',               status: 'optional' },
            { name: 'Manipulator',      status: 'optional' }
        ]
    },
    4: {
        name: 'Platform Mass Cleaning',
        category: 'Platform',
        sensors: [
            { name: 'Navigation',       status: 'required' },
            { name: 'Gyro',             status: 'required' },
            { name: 'Depth',            status: 'required' },
            { name: 'Water Jet',        status: 'required' },
            { name: 'Manipulator',      status: 'optional' }
        ]
    },
    5: {
        name: 'Pipeline Conventional Inspection + SBES/Profiler',
        category: 'Pipeline',
        sensors: [
            { name: 'Navigation',           status: 'required' },
            { name: 'Gyro',                 status: 'required' },
            { name: 'Depth',                status: 'required' },
            { name: 'Altimeter',            status: 'required' },
            { name: 'Scan (SBES/Profiler)', status: 'required' },
            { name: 'CP',                   status: 'required' },
            { name: 'Manipulator',          status: 'required' },
            { name: 'PRC External Frame',   status: 'optional' },
            { name: 'MBES',                 status: 'optional' }
        ]
    },
    6: {
        name: 'Pipeline Conventional Inspection + PRC + SBES/Profiler',
        category: 'Pipeline',
        sensors: [
            { name: 'Navigation',           status: 'required' },
            { name: 'Gyro',                 status: 'required' },
            { name: 'Depth',                status: 'required' },
            { name: 'Altimeter',            status: 'required' },
            { name: 'Scan (SBES/Profiler)', status: 'required' },
            { name: 'CP',                   status: 'required' },
            { name: 'Manipulator',          status: 'required' },
            { name: 'PRC External Frame',   status: 'optional' },
            { name: 'MBES',                 status: 'optional' }
        ]
    },
    7: {
        name: 'Pipeline Geometric Assessment + PRC',
        category: 'Pipeline',
        sensors: [
            { name: 'Navigation',           status: 'required' },
            { name: 'Gyro',                 status: 'required' },
            { name: 'Depth',                status: 'required' },
            { name: 'Altimeter',            status: 'required' },
            { name: 'Scan (SBES/Profiler)', status: 'required' },
            { name: 'CP',                   status: 'required' },
            { name: 'Manipulator',          status: 'required' },
            { name: 'PRC External Frame',   status: 'optional' },
            { name: 'MBES',                 status: 'optional' }
        ]
    },
    8: {
        name: 'Pipeline Conventional Inspection + PRC + PipeTracker',
        category: 'Pipeline',
        sensors: [
            { name: 'Navigation',           status: 'required' },
            { name: 'Gyro',                 status: 'required' },
            { name: 'Depth',                status: 'required' },
            { name: 'Altimeter',            status: 'required' },
            { name: 'MBES',                 status: 'required' },
            { name: 'PipeTracker',          status: 'required' },
            { name: 'CP',                   status: 'required' },
            { name: 'Manipulator',          status: 'required' },
            { name: 'PRC External Frame',   status: 'optional' },
            { name: 'Scan (SBES/Profiler)', status: 'optional' }
        ]
    },
    9: {
        name: 'Pipeline Geophysical Survey',
        category: 'Pipeline',
        sensors: [
            { name: 'Navigation',               status: 'required' },
            { name: 'Gyro',                     status: 'required' },
            { name: 'Depth',                    status: 'required' },
            { name: 'Altimeter',                status: 'required' },
            { name: 'MBES',                     status: 'required' },
            { name: 'CP',                       status: 'required' },
            { name: 'Manipulator',              status: 'required' },
            { name: 'PRC External Frame',       status: 'optional' },
            { name: 'PipeTracker',              status: 'optional' }
        ]
    },
    10: {
        name: 'Seabed Geophysical Survey',
        category: 'Pipeline',
        sensors: [
            { name: 'Navigation',               status: 'required' },
            { name: 'Gyro',                     status: 'required' },
            { name: 'Depth',                    status: 'required' },
            { name: 'Altimeter',                status: 'required' },
            { name: 'MBES',                     status: 'required' },
            { name: 'PRC External Frame',       status: 'optional' },
            { name: 'PipeTracker',              status: 'optional' }
        ]
    },
    11: {
        name: 'Pipeline GVI / Video Recording',
        category: 'Pipeline',
        sensors: [
            { name: 'Navigation',           status: 'required' },
            { name: 'Gyro',                 status: 'required' },
            { name: 'Depth',                status: 'required' },
            { name: 'PRC External Frame',   status: 'optional' },
            { name: 'CP',                   status: 'optional' },
            { name: 'Manipulator',          status: 'optional' }
        ]
    },
    12: {
        name: 'Pre-engineering Metrology (Spools)',
        category: 'Pipeline',
        sensors: [
            { name: 'PRC External Frame',   status: 'required' },
            { name: 'Navigation',           status: 'required' },
            { name: 'Gyro',                 status: 'required' },
            { name: 'Depth',                status: 'required' },
            { name: 'Altimeter',            status: 'required' },
            { name: 'Scan (SBES/Profiler)', status: 'optional' }
        ]
    },
    13: {
        name: 'Pre-engineering Metrology (Jumper / Subsea Structures)',
        category: 'Pipeline',
        sensors: [
            { name: 'PRC External Frame',   status: 'required' },
            { name: 'Navigation',           status: 'required' },
            { name: 'Gyro',                 status: 'required' },
            { name: 'Depth',                status: 'required' },
            { name: 'Altimeter',            status: 'required' },
            { name: 'PRC Real-Time',        status: 'optional' },
            { name: 'Scan (SBES/Profiler)', status: 'optional' }
        ]
    },
    14: {
        name: 'Pipeline Conventional Inspection + Subsea Structures + PRC',
        category: 'Pipeline',
        sensors: [
            { name: 'PRC External Frame',   status: 'required' },
            { name: 'Navigation',           status: 'required' },
            { name: 'Gyro',                 status: 'required' },
            { name: 'Depth',                status: 'required' },
            { name: 'Altimeter',            status: 'required' },
            { name: 'Scan (SBES/Profiler)', status: 'required' },
            { name: 'CP',                   status: 'required' },
            { name: 'Manipulator',          status: 'required' }
        ]
    },
    15: {
        name: 'Pipeline Mass Cleaning',
        category: 'Pipeline',
        sensors: [
            { name: 'Navigation',           status: 'required' },
            { name: 'Gyro',                 status: 'required' },
            { name: 'Depth',                status: 'required' },
            { name: 'Altimeter',            status: 'required' },
            { name: 'Water Jet',            status: 'required' }
        ]
    },
};

// Category label for each sensor name
const SENSOR_CATEGORIES = {
    'Rear Camera':           'Cameras & Lighting',
    'Side Camera':           'Cameras & Lighting',
    'Front/Boom Camera':     'Cameras & Lighting',
    'PTZ Camera':            'Cameras & Lighting',
    'GVI Camera':            'Cameras & Lighting',
    'Navigation':            'Navigation & Depth',
    'Gyro':                  'Navigation & Depth',
    'Depth':                 'Navigation & Depth',
    'Altimeter':             'Navigation & Depth',
    'CP':                    'Inspection Tools',
    'UT':                    'Inspection Tools',
    'ACFM':                  'Inspection Tools',
    'FMD':                   'Inspection Tools',
    'Sonar 360':             'Inspection Tools',
    'MBES':                  'Inspection Tools',
    'PipeTracker':           'Inspection Tools',
    'Scan (SBES/Profiler)':  'Inspection Tools',
    'PRC Real-Time':         'Payloads / Tooling',
    'PRC (Fixed)':           'Payloads / Tooling',
    'PRC External Frame':    'Payloads / Tooling',
    'Cleaning Brush':        'Payloads / Tooling',
    'Water Jet':             'Payloads / Tooling',
    'Manipulator':           'Payloads / Tooling',
};

const CAT_ORDER = { 'Cameras & Lighting': 0, 'Navigation & Depth': 1, 'Inspection Tools': 2, 'Payloads / Tooling': 3 };

// Sensors permanently installed on every MiniSpector unit — always present regardless of scope
const MINISPECTOR_FIXED_SENSORS = [
    { name: 'Rear Camera',       category: 'Cameras & Lighting' },
    { name: 'Side Camera',       category: 'Cameras & Lighting' },
    { name: 'Front/Boom Camera', category: 'Cameras & Lighting' },
    { name: 'PRC (Fixed)',       category: 'Payloads / Tooling' },
];

let simLocked        = false;        // true after pushToOperation — sim becomes read-only
let simSelectedROVs  = new Map();   // num → 'main'|'standby'
let simROVSerials    = new Map();   // num → serial string
let simROVDescriptions = new Map(); // num → description string
let simActiveROV     = null;          // main ROV number (display only)
let simActiveSubTab  = 'sensors';
let simROVData       = {};             // kept for legacy safety
let simSharedData    = { scopeId: null, sensors: [], rovSensors: {}, thrusters: [] };
let simProjectData   = { name: '', code: '', scope: '' };
let simSelectedScope = null; // selected scope id (number)
let simApproval      = { status: 'draft', history: [] }; // approval state

const APPROVER_IDS   = ['101']; // user IDs allowed to approve simulations

// ---- STEP 1 INIT ----
function initSimROVGrid() {
    simSelectedROVs    = new Map();
    simROVSerials      = new Map();
    simROVDescriptions = new Map();
    simActiveROV       = null;
    simROVData       = {};
    simSharedData    = { scopeId: null, sensors: [], rovSensors: {}, thrusters: [] };
    simActiveSubTab  = 'sensors';
    simProjectData   = { name: '', code: '', scope: '' };
    simSelectedScope = null;
    simApproval      = { status: 'draft', history: [] };

    document.getElementById('sim-step-1').classList.remove('hidden');
    document.getElementById('sim-step-2').classList.add('hidden');

    // Clear project fields
    ['sim-project-name', 'sim-project-code', 'sim-project-scope'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });

    // Scope dropdown listener — guard against changing after data entry
    const scopeDropdown = document.getElementById('sim-scope-dropdown');
    if (scopeDropdown) {
        scopeDropdown.value = '';
        scopeDropdown.onchange = () => {
            const val      = parseInt(scopeDropdown.value);
            const newScope = val || null;

            if (simSelectedScope !== null && newScope !== simSelectedScope) {
                const hasData = (simSharedData.sensors?.length > 0)
                    || (simSharedData.sysarch?.machines?.length > 0)
                    || (simSharedData.sysarch?.equipment?.length > 0)
                    || (simSelectedROVs.size > 0);

                if (hasData) {
                    const confirmed = confirm(
                        'Changing the scope will reset all sensors, machines, equipment, and ROV selections you have configured.\n\n' +
                        'Are you sure?'
                    );
                    if (!confirmed) {
                        scopeDropdown.value = simSelectedScope ?? ''; // revert
                        return;
                    }
                    // Reset all sim data for the new scope
                    simSharedData    = { scopeId: null, sensors: [], rovSensors: {}, thrusters: [] };
                    simSelectedROVs  = new Map();
                    simROVData       = {};
                    renderROVChips();
                }
            }

            simSelectedScope = newScope;
            updateScopePreview(newScope);
            updateBeginBtn();
        };
    }

    document.getElementById('sim-scope-preview')?.classList.add('hidden');
    document.getElementById('sim-scope-badge')?.classList.add('hidden');
    showSimSetupTab('mission');
    renderROVChips();
    updateBeginBtn();
}

function updateScopePreview(scopeId) {
    const preview  = document.getElementById('sim-scope-preview');
    const badge    = document.getElementById('sim-scope-badge');
    const reqEl    = document.getElementById('scope-preview-required');
    const optEl    = document.getElementById('scope-preview-optional');
    if (!preview || !scopeId || !OPERATION_SCOPES[scopeId]) {
        preview?.classList.add('hidden');
        badge?.classList.add('hidden');
        return;
    }
    const scope = OPERATION_SCOPES[scopeId];
    const required = scope.sensors.filter(s => s.status === 'required').map(s => s.note ? `${s.name} (${s.note})` : s.name);
    const optional = scope.sensors.filter(s => s.status === 'optional').map(s => s.name);
    reqEl.innerText = required.join(' · ') || '—';
    optEl.innerText = optional.join(' · ') || 'None';
    preview.classList.remove('hidden');
    badge?.classList.remove('hidden');
}

function toggleSimROV(num) {
    if (simSelectedROVs.has(num)) {
        removeROV(num);
    } else {
        const role = simSelectedROVs.size === 0 ? 'main' : 'standby';
        simSelectedROVs.set(num, role);
        if (!simSharedData.rovSensors[num]) {
            simSharedData.rovSensors[num] = MINISPECTOR_FIXED_SENSORS.map(s => ({
                name: s.name, category: s.category, model: '', qty: 1,
                calibrated: false, tested: false, fixed: true
            }));
        }
        renderROVChips();
        updateBeginBtn();
    }
}

function rovHasDiveLogs(num) {
    const logs = currentReportData.diveLogs || [];
    return logs.some(d => {
        const val = (d.rov || d.rovName || '').toLowerCase();
        return val.includes(`minispector ${num}`) || val.includes(`ms-${num}`) || val === String(num);
    });
}

function removeROV(num) {
    if (rovHasDiveLogs(num)) {
        alert(`MS-${num} has dive logs recorded against it and cannot be removed.\nEdit or delete those dive log entries first.`);
        return;
    }
    const wasMain = simSelectedROVs.get(num) === 'main';
    simSelectedROVs.delete(num);
    simROVSerials.delete(num);
    simROVDescriptions.delete(num);
    delete simROVData[num];
    delete simSharedData.rovSensors[num];
    if (wasMain && simSelectedROVs.size > 0) {
        const nextMain = [...simSelectedROVs.keys()].sort((a, b) => a - b)[0];
        simSelectedROVs.set(nextMain, 'main');
    }
    renderROVChips();
    updateBeginBtn();
}

function setROVRole(num) {
    if (!simSelectedROVs.has(num) || simSelectedROVs.get(num) === 'main') return;
    if (rovHasDiveLogs(num)) {
        alert(`MS-${num} has dive logs recorded against it.\nIts role cannot be changed until those logs are removed.`);
        return;
    }
    // Demote current main to standby, promote this one
    for (const k of simSelectedROVs.keys()) simSelectedROVs.set(k, 'standby');
    simSelectedROVs.set(num, 'main');
    renderROVChips();
    updateBeginBtn();
}

function renderROVChips() {
    const container = document.getElementById('sim-rov-chips');
    if (!container) return;
    container.innerHTML = Array.from({length: 12}, (_, i) => {
        const num      = i + 1;
        const role     = simSelectedROVs.get(num);
        const selected = role !== undefined;
        const isMain   = role === 'main';
        return `
        <div onclick="toggleSimROV(${num})"
             class="relative flex flex-col items-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-all select-none
                    ${selected ? 'border-orange-500 bg-orange-500/10 shadow-md shadow-orange-500/10' : 'border-yellow-500/50 bg-gray-800/50 hover:bg-yellow-500/5 hover:shadow-md hover:shadow-yellow-500/10'}">

            ${selected ? `<button onclick="event.stopPropagation();removeROV(${num})"
                class="absolute top-1.5 right-1.5 w-4 h-4 flex items-center justify-center rounded-full bg-gray-700 hover:bg-red-500/30 text-gray-500 hover:text-red-400 text-[10px] font-bold transition-all leading-none">&#215;</button>` : ''}

            <div class="w-14 h-14 rounded-lg flex items-center justify-center transition-all ${selected ? 'bg-orange-500/20' : 'bg-yellow-500/10'}">
                <img src="assets/rov_icon.png" class="w-10 h-10 object-contain"
                     onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
                <svg style="display:none" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 ${selected ? 'text-orange-400' : 'text-yellow-400'}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
                </svg>
            </div>

            <span class="text-xs font-bold tracking-wide ${selected ? 'text-orange-300' : 'text-white'}">MS-${num}</span>

            ${selected
                ? `<button onclick="event.stopPropagation();${isMain ? '' : `setROVRole(${num})`}"
                    class="text-[9px] font-bold px-2.5 py-0.5 rounded-full transition-all
                           ${isMain ? 'bg-orange-500 text-white cursor-default' : 'bg-gray-700 text-gray-400 hover:bg-blue-500/20 hover:text-blue-300 cursor-pointer'}"
                    title="${isMain ? 'Main unit' : 'Click to promote to Main'}">
                    ${isMain ? 'MAIN' : 'STANDBY'}
                  </button>
                  <input type="text"
                    value="${(simROVSerials.get(num) || '').replace(/"/g, '&quot;')}"
                    placeholder="Serial No."
                    onclick="event.stopPropagation()"
                    oninput="event.stopPropagation();simROVSerials.set(${num}, this.value);scheduleSimSync()"
                    class="w-full text-[9px] font-mono text-center bg-gray-900/70 border border-orange-500/30 rounded px-1.5 py-0.5 text-orange-200 placeholder-gray-600 outline-none focus:border-orange-400 transition-colors">`
                : `<span class="text-[9px] text-white/60 font-medium">Available</span>`
            }
        </div>`;
    }).join('');
}

function updateBeginBtn() {
    const count   = simSelectedROVs.size;
    const label   = document.getElementById('sim-selected-label');
    const btn     = document.getElementById('btn-begin-sim');
    const mainNum = [...simSelectedROVs.entries()].find(([, r]) => r === 'main')?.[0];
    if (label) label.innerText = count === 0
        ? 'Select an operation scope and at least one MiniSpector to begin'
        : `${count} MiniSpector${count > 1 ? 's' : ''} selected  ·  Main: MS-${mainNum || '?'}${simSelectedScope ? '' : '  ·  (scope required)'}`;
    if (btn) btn.disabled = count === 0 || !simSelectedScope;
}

function showSimSetupTab(tab) {
    ['mission', 'units', 'history'].forEach(t => {
        document.getElementById(`sim-setup-${t}`)?.classList.toggle('hidden', t !== tab);
    });
    const footer = document.getElementById('sim-step1-footer');
    if (footer) footer.classList.toggle('hidden', tab !== 'units');
    if (tab === 'units') renderROVChips();
    if (tab === 'history') loadSimHistory();
}

// ---- STEP 2: WORKSPACE ----
function beginSimulation() {
    if (!simSelectedScope || !OPERATION_SCOPES[simSelectedScope]) {
        showToast('Please select an operation scope first.', 'warn');
        return;
    }
    if (simSelectedROVs.size === 0) {
        showToast('Please add at least one MiniSpector unit.', 'warn');
        return;
    }

    simProjectData = {
        name:  document.getElementById('sim-project-name')?.value.trim()  || '',
        code:  document.getElementById('sim-project-code')?.value.trim()  || '',
        scope: document.getElementById('sim-project-scope')?.value.trim() || '',
    };

    if (simProjectData.code) activateCloudProject(simProjectData.code, 'simulation', currentUserName);

    const scopeBundle = OPERATION_SCOPES[simSelectedScope];
    const scopeChanged = simSharedData.scopeId && simSharedData.scopeId !== simSelectedScope;
    const hasWork = Array.isArray(simSharedData.sensors) && simSharedData.sensors.some(
        s => s.model || s.calibrated || s.tested
    );

    // If scope changed AND user has done work, ask what to do
    if (scopeChanged && hasWork) {
        const choice = confirm(
            `You changed the scope from "${OPERATION_SCOPES[simSharedData.scopeId]?.name || 'previous'}" to "${scopeBundle.name}".\n\n` +
            `You have existing sensor data (models, calibration, testing).\n\n` +
            `Click OK to KEEP your work and merge with the new scope.\n` +
            `Click Cancel to RESET and start fresh with the new scope.`
        );

        if (choice) {
            // KEEP — merge: carry forward matching sensors + customs, add new scope sensors
            mergeWithNewScope(scopeBundle);
        } else {
            // RESET — fresh load
            loadFreshScope(scopeBundle);
        }
    } else if (!simSharedData.scopeId || scopeChanged) {
        // First time or scope changed with no work — just load fresh
        if (hasWork && !scopeChanged) {
            // Same scope, has work — keep everything as-is
        } else {
            loadFreshScope(scopeBundle);
        }
    }
    // else: same scope, sensors already loaded — keep as-is

    // Ensure scopeId is tracked
    simSharedData.scopeId = simSelectedScope;

    // Active ROV = the designated Main unit
    const mainEntry = [...simSelectedROVs.entries()].find(([, r]) => r === 'main');
    simActiveROV = mainEntry ? mainEntry[0] : [...simSelectedROVs.keys()].sort((a,b)=>a-b)[0];

    document.getElementById('sim-step-1').classList.add('hidden');
    document.getElementById('sim-step-2').classList.remove('hidden');

    renderSimROVTabs();
    switchSimROV(simActiveROV);
    switchSimSubTab(simActiveSubTab || 'sensors');

    // Push initial state to cloud so join users see the scope/ROV selection immediately
    if (currentProjectCode) setTimeout(() => syncToCloud(), 500);
}

function loadFreshScope(scopeBundle) {
    simSharedData.sensors = scopeBundle.sensors.map(s => ({
        name:          s.name,
        note:          s.note || '',
        status:        s.status,
        included:      s.status === 'required',
        model:         '',
        serialNo:      '',
        qty:           1,
        calibrated:    false,
        tested:        false,
        custom:        false,
        rovAssignment: 'Shared'
    }));

}

function mergeWithNewScope(scopeBundle) {
    // Index existing sensors by name for quick lookup
    const existingByName = {};
    (simSharedData.sensors || []).forEach(s => { existingByName[s.name] = s; });

    // Build new list from scope bundle, carrying forward any existing data
    const merged = scopeBundle.sensors.map(s => {
        const existing = existingByName[s.name];
        delete existingByName[s.name]; // mark as consumed
        return {
            name:          s.name,
            note:          s.note || '',
            status:        s.status,
            included:      s.status === 'required' ? true : (existing ? !!existing.included : false),
            model:         existing?.model || '',
            serialNo:      existing?.serialNo || '',
            qty:           existing?.qty || 1,
            calibrated:    existing ? !!existing.calibrated : false,
            tested:        existing ? !!existing.tested : false,
            custom:        false,
            rovAssignment: existing?.rovAssignment || 'Shared'
        };
    });

    // Append any custom sensors and old sensors not in the new scope (as custom)
    Object.values(existingByName).forEach(s => {
        if (s.custom || s.model || s.calibrated || s.tested) {
            merged.push({ ...s, custom: true, status: 'custom' });
        }
    });

    simSharedData.sensors = merged;

}

function simGoBack() {
    document.getElementById('sim-step-2').classList.add('hidden');
    document.getElementById('sim-step-1').classList.remove('hidden');

    // Restore form values so user can edit and come back
    const nameEl = document.getElementById('sim-project-name');
    const codeEl = document.getElementById('sim-project-code');
    const scopeEl = document.getElementById('sim-project-scope');
    const scopeDD = document.getElementById('sim-scope-dropdown');
    if (nameEl) nameEl.value = simProjectData.name || '';
    if (codeEl) codeEl.value = simProjectData.code || '';
    if (scopeEl) scopeEl.value = simProjectData.scope || '';
    if (scopeDD && simSelectedScope) {
        scopeDD.value = simSelectedScope;
        updateScopePreview(simSelectedScope);
    }
    showSimSetupTab('units');
    renderROVChips();
    updateBeginBtn();
}

function renderSimROVTabs() {
    const container = document.getElementById('sim-rov-tabs');
    if (!container) return;
    container.innerHTML = [...simSelectedROVs.entries()]
        .sort((a, b) => a[0] - b[0])
        .map(([num, role]) => {
            const isMain = role === 'main';
            const border = isMain ? 'border-orange-500' : 'border-gray-600';
            const text   = isMain ? 'text-white'        : 'text-gray-400';
            const badge  = isMain
                ? `<span style="background:#f39124;color:white;font-size:9px;font-weight:700;padding:1px 5px;border-radius:3px;margin-left:4px;letter-spacing:0.05em;">MAIN</span>`
                : `<span style="background:#374151;color:#9ca3af;font-size:9px;font-weight:700;padding:1px 5px;border-radius:3px;margin-left:4px;letter-spacing:0.05em;">STBY</span>`;
            return `<div onclick="switchSimROV(${num})" class="px-4 py-3 text-sm font-bold border-b-2 ${border} ${text} whitespace-nowrap flex items-center cursor-pointer hover:text-white transition-colors">MS-${num}${badge}</div>`;
        }).join('');
}

function switchSimROV(num) {
    simActiveROV = num;
    renderSimROVTabs();
    if (simActiveSubTab === 'sensors') {
        const area = document.getElementById('sim-content-area');
        if (area) renderSensorsContent(area);
    }
}

function switchSimSubTab(tab) {
    simActiveSubTab = tab;
    document.querySelectorAll('.sim-subtab').forEach(btn => {
        btn.classList.remove('border-orange-500', 'text-white');
        btn.classList.add('border-transparent', 'text-gray-400');
    });
    const active = document.getElementById(`sim-subtab-${tab}`);
    if (active) {
        active.classList.add('border-orange-500', 'text-white');
        active.classList.remove('border-transparent', 'text-gray-400');
    }
    renderSimContent();
}


function renderSimContent() {
    const area = document.getElementById('sim-content-area');
    if (!simSharedData || !Array.isArray(simSharedData.sensors)) return;
    if (simActiveSubTab === 'sysarch') { renderSysArchContent(area); }
    else if (simActiveSubTab === 'readiness') { renderReadinessContent(area); }
    else { renderSensorsContent(area); }
    updateSimTabBadges();
    updateSimProgress();
}

// ---- TAB BADGES ----
function updateSimTabBadges() {
    const sensors  = (simSharedData.sensors || []).filter(s => s.status === 'required' || (s.status === 'optional' && s.included) || s.custom);
    const machines = simSharedData.sysarch?.machines || [];
    const equip    = simSharedData.sysarch?.equipment || [];
    const sEl = document.getElementById('sim-badge-sensors');
    const aEl = document.getElementById('sim-badge-sysarch');
    const rEl = document.getElementById('sim-badge-readiness');
    if (sEl) sEl.innerText = sensors.length;
    if (aEl) aEl.innerText = machines.length + equip.length;
    if (rEl) {
        const allActive = [...sensors, ...Object.values(simSharedData.rovSensors || {}).flat()];
        const tot = allActive.length;
        const rdy = allActive.filter(s => s.calibrated && s.tested && s.model).length;
        const pct = tot > 0 ? Math.round(rdy / tot * 100) : 0;
        rEl.innerText = pct + '%';
        rEl.style.background = pct === 100 ? 'rgba(34,197,94,0.2)' : pct >= 60 ? 'rgba(243,145,36,0.2)' : 'rgba(239,68,68,0.2)';
        rEl.style.color = pct === 100 ? '#22c55e' : pct >= 60 ? '#f39124' : '#f87171';
    }
}

// ---- PROGRESS BAR ----
function updateSimProgress() {
    const bar = document.getElementById('sim-progress-bar');
    if (!bar) return;
    const sensors = (simSharedData.sensors || []).filter(s => s.status === 'required' || (s.status === 'optional' && s.included) || s.custom);
    if (sensors.length === 0) { bar.style.width = '0%'; return; }
    const ready = sensors.filter(s => s.calibrated && s.tested && s.model).length;
    const pct = Math.round((ready / sensors.length) * 100);
    bar.style.width = pct + '%';
    bar.style.background = pct === 100 ? '#f39124' : pct >= 60 ? '#f39124' : '#ef4444';
}

// ---- PHOTO LIGHTBOX ----
function openLightbox(src) {
    const lb = document.getElementById('photo-lightbox');
    const img = document.getElementById('lightbox-img');
    if (lb && img) { img.src = src; lb.style.display = 'flex'; }
}
function closeLightbox() {
    const lb = document.getElementById('photo-lightbox');
    if (lb) lb.style.display = 'none';
}

// ---- KEYBOARD SHORTCUTS ----
document.addEventListener('keydown', (e) => {
    if (currentMode !== 'simulation') return;
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;
    if (e.ctrlKey && e.key === 's') { e.preventDefault(); saveSimulationJSON(); }
    if (e.ctrlKey && e.key === '1') { e.preventDefault(); switchSimSubTab('sensors'); }
    if (e.ctrlKey && e.key === '2') { e.preventDefault(); switchSimSubTab('sysarch'); }
    if (e.ctrlKey && e.key === '3') { e.preventDefault(); switchSimSubTab('readiness'); }
});

// ---- SENSORS TAB ----
function renderSensorsContent(area) {
    const data      = simSharedData;
    const sensors   = data.sensors;
    const scope     = OPERATION_SCOPES[simSelectedScope];

    const rovEntries = [...simSelectedROVs.entries()].sort((a,b)=>a[0]-b[0]);
    const rovOptions = ['Shared', ...rovEntries.map(([n]) => `MS-${n}`)];
    const rovOptHtml = rovOptions.map(o => `<option value="${escapeHtml(o)}">${escapeHtml(o)}</option>`).join('');
    const sensorOptions = Object.keys(SENSOR_HARDWARE).map(n => `<option value="${escapeHtml(n)}">`).join('');

    // --- SECTION 1: MINISPECTOR FLEET ---
    let fleetHtml = '';
    if (rovEntries.length === 0) {
        fleetHtml = `<div class="mb-5 text-center text-gray-600 py-8 text-sm">No MiniSpectors selected — go back to Step 1.</div>`;
    } else {
        let rovRows = '';
        rovEntries.forEach(([rovNum, role], idx) => {
            const serial      = simROVSerials.get(rovNum) || '';
            const description = simROVDescriptions.get(rovNum) || '';
            const isMain      = role === 'main';
            const isLast = idx === rovEntries.length - 1;
            rovRows += `
            <div style="${isLast ? '' : 'border-bottom:1px solid rgba(55,65,81,0.4)'}">
                <div class="flex items-center gap-3 px-5 py-3 flex-wrap" style="background:rgba(17,24,39,${idx%2===0?'0.35':'0.15'})">
                    <span class="text-[10px] text-gray-600 font-mono shrink-0" style="width:1.2rem">${idx+1}</span>
                    <div class="flex items-center gap-1.5 shrink-0" style="min-width:70px">
                        <img src="assets/rov_icon.png" style="width:18px;height:18px;object-fit:contain;filter:brightness(1.1)" onerror="this.style.display='none'">
                        <span class="font-bold text-white text-sm">MS-${rovNum}</span>
                    </div>
                    <input type="text"
                        value="${escapeHtml(serial)}"
                        placeholder="Serial No."
                        onclick="event.stopPropagation()"
                        oninput="event.stopPropagation();simROVSerials.set(${rovNum},this.value);scheduleSimSync()"
                        class="bg-gray-900 border border-gray-600 rounded-lg px-3 py-1.5 text-xs font-mono focus:border-[#459fd9] outline-none placeholder-gray-600 transition-colors shrink-0"
                        style="width:155px;color:#459fd9">
                    <input type="text"
                        value="${escapeHtml(description)}"
                        placeholder="Description (optional)..."
                        oninput="simROVDescriptions.set(${rovNum},this.value);scheduleSimSync()"
                        class="flex-1 bg-gray-900 border border-gray-600 rounded-lg px-3 py-1.5 text-xs text-gray-200 focus:border-orange-400 outline-none placeholder-gray-600 transition-colors"
                        style="min-width:110px">
                    <div class="flex gap-1 shrink-0">
                        <button onclick="simSetROVRole(${rovNum},'main')"
                            style="padding:3px 10px;border-radius:6px;font-size:10px;font-weight:700;cursor:pointer;transition:all 0.15s;${isMain?'background:rgba(243,145,36,0.2);color:#f39124;border:1px solid rgba(243,145,36,0.5)':'background:rgba(55,65,81,0.3);color:#4b5563;border:1px solid rgba(75,85,99,0.3)'}">MAIN</button>
                        <button onclick="simSetROVRole(${rovNum},'standby')"
                            style="padding:3px 10px;border-radius:6px;font-size:10px;font-weight:700;cursor:pointer;transition:all 0.15s;${!isMain?'background:rgba(69,159,217,0.18);color:#459fd9;border:1px solid rgba(69,159,217,0.4)':'background:rgba(55,65,81,0.3);color:#4b5563;border:1px solid rgba(75,85,99,0.3)'}">STBY</button>
                    </div>
                </div>
            </div>`;
        });
        fleetHtml = `
        <div class="mb-5" style="background:linear-gradient(135deg,rgba(31,41,55,0.75),rgba(17,24,39,0.9));border:1px solid rgba(55,65,81,0.5);border-radius:12px;overflow:hidden;backdrop-filter:blur(8px);box-shadow:0 2px 16px rgba(0,0,0,0.3);">
            <div class="flex items-center justify-between px-6 py-3.5 border-b border-gray-700/50">
                <div class="flex items-center gap-3">
                    <span class="w-2 h-2 rounded-full" style="background:#f39124;box-shadow:0 0 6px #f3912488"></span>
                    <span class="text-xs font-bold text-white uppercase tracking-widest">MiniSpector Fleet</span>
                    <span class="text-xs text-gray-600">${rovEntries.length} unit${rovEntries.length!==1?'s':''} &middot; S/N &middot; Description</span>
                </div>
                <span style="font-size:10px;font-weight:700;padding:2px 8px;border-radius:4px;background:rgba(243,145,36,0.12);color:#f39124;border:1px solid rgba(243,145,36,0.25)">FLEET</span>
            </div>
            ${rovRows}
        </div>`;
    }

    // --- SECTION 2: SENSORS (required + custom, fully editable) ---
    const activeSensors = sensors.filter(s => s.status !== 'optional' || s.custom);
    let sensorRows = '';
    activeSensors.forEach((sensor, i) => {
        const idx    = sensors.indexOf(sensor);
        const curAss = sensor.rovAssignment || 'Shared';
        const selOpt = rovOptions.map(o => `<option value="${escapeHtml(o)}"${curAss===o?' selected':''}>${escapeHtml(o)}</option>`).join('');
        const bgS = i%2===0?'rgba(17,24,39,0.45)':'rgba(17,24,39,0.15)';
        sensorRows += `
            <tr class="group" style="background:${bgS};border-bottom:1px solid rgba(55,65,81,0.25)">
                <td class="px-4 py-2.5 text-xs text-gray-500 font-mono text-center">${i+1}</td>
                <td class="px-4 py-2.5" onmouseenter="showTip(this,'${escapeHtml(sensor.name)}')" onmouseleave="hideTip()">
                    <div class="flex items-center gap-2 flex-wrap">
                        <input type="text" value="${escapeHtml(sensor.name)}" placeholder="Sensor name..."
                            class="flex-1 bg-gray-900/60 border border-gray-700 rounded px-2 py-1 text-xs text-gray-200 focus:border-orange-400 outline-none placeholder-gray-600 transition-colors"
                            style="min-width:100px" oninput="simSharedData.sensors[${idx}].name=this.value">
                        ${sensor.custom?`<span class="text-[9px] px-1.5 py-0.5 rounded shrink-0" style="background:rgba(249,115,22,0.15);color:#fb923c;border:1px solid rgba(249,115,22,0.3);font-weight:700">CUSTOM</span>`:''}
                        ${sensor.note?`<span class="text-[9px] font-semibold shrink-0" style="color:#459fd9">${escapeHtml(sensor.note)}</span>`:''}
                    </div>
                </td>
                <td class="px-3 py-2.5">${buildModelCell(sensor, idx)}</td>
                <td class="px-3 py-2.5"><input type="text" value="${escapeHtml(sensor.serialNo||'')}" placeholder="S/N..."
                    class="w-full bg-gray-900/50 border border-gray-700/50 rounded-md px-2 py-1.5 text-xs font-mono focus:border-[#459fd9] outline-none placeholder-gray-600 transition-colors"
                    style="color:#459fd9" oninput="simSharedData.sensors[${idx}].serialNo=this.value"></td>
                <td class="px-3 py-2.5 text-center"><input type="number" min="1" value="${sensor.qty||1}"
                    class="w-14 bg-gray-900/50 border border-gray-700/50 rounded-md px-2 py-1 text-xs text-center text-white focus:border-[#459fd9] outline-none transition-colors"
                    oninput="simSharedData.sensors[${idx}].qty=parseInt(this.value)||1"></td>
                <td class="px-3 py-2.5 text-center">${buildToggleCell(sensor, idx, 'calibrated', '#f39124')}</td>
                <td class="px-3 py-2.5 text-center">${buildToggleCell(sensor, idx, 'tested', '#459fd9')}</td>
                <td class="px-3 py-2.5">
                    <select class="w-full bg-gray-900/50 border border-gray-700/50 rounded-md px-2 py-1.5 text-xs outline-none focus:border-[#459fd9] transition-colors"
                        style="color:${curAss!=='Shared'?'#f39124':'#9ca3af'}"
                        onchange="simSharedData.sensors[${idx}].rovAssignment=this.value;renderSensorsContent(document.getElementById('sim-content-area'))">
                        ${selOpt}
                    </select>
                </td>
                <td class="px-3 py-2.5 text-center">
                    <button onclick="removeSensorFromROV(${idx})" class="opacity-0 group-hover:opacity-100 text-gray-600 hover:text-red-400 transition-all text-lg font-bold leading-none">&times;</button>
                </td>
            </tr>`;
    });

    const sensorsTableHtml = `
        <div class="mb-5" style="background:linear-gradient(135deg,rgba(31,41,55,0.75),rgba(17,24,39,0.9));border:1px solid rgba(55,65,81,0.5);border-radius:12px;overflow:hidden;backdrop-filter:blur(8px);box-shadow:0 2px 16px rgba(0,0,0,0.3);">
            <div class="flex items-center justify-between px-6 py-3.5 border-b border-gray-700/50">
                <div class="flex items-center gap-3">
                    <span class="w-2 h-2 rounded-full" style="background:#f39124"></span>
                    <span class="text-xs font-bold text-white uppercase tracking-widest">Sensors</span>
                    <span class="text-xs text-gray-600">${activeSensors.length} item${activeSensors.length!==1?'s':''} — scope: <span style="color:#f39124">${scope?.name||'–'}</span></span>
                </div>
            </div>
            <div style="overflow-x:auto">
                <table style="width:100%;table-layout:auto;min-width:740px;border-collapse:collapse">
                    <colgroup>
                        <col style="width:2rem"><col style="min-width:180px"><col style="width:11rem">
                        <col style="width:8rem"><col style="width:3.5rem"><col style="width:5.5rem">
                        <col style="width:5.5rem"><col style="width:8rem"><col style="width:2rem">
                    </colgroup>
                    <thead>
                        <tr style="background:linear-gradient(90deg,rgba(5,8,18,0.97),rgba(10,16,28,0.93));border-bottom:1px solid rgba(69,159,217,0.18);color:#4b6070;" class="text-[9px] uppercase font-semibold tracking-wide">
                            <th class="px-4 py-2 text-left font-bold">#</th>
                            <th class="px-4 py-2 text-left font-bold">Sensor / Equipment</th>
                            <th class="px-3 py-2 text-left font-bold">Model / Hardware</th>
                            <th class="px-3 py-2 text-left font-bold">Serial No.</th>
                            <th class="px-3 py-2 text-center font-bold">QTY</th>
                            <th class="px-3 py-2 text-center font-bold">Calibrated</th>
                            <th class="px-3 py-2 text-center font-bold">Tested</th>
                            <th class="px-3 py-2 text-left font-bold">Assignment</th>
                            <th class="px-3 py-2"></th>
                        </tr>
                    </thead>
                    <tbody>${sensorRows||`<tr><td colspan="9" class="px-4 py-8 text-center text-gray-600 text-sm">No sensors — select a scope or add a custom sensor below</td></tr>`}</tbody>
                </table>
            </div>
            <div class="flex gap-2.5 px-4 py-3 border-t border-gray-700/40" style="align-items:center">
                <input type="text" id="sim-sensor-input" list="sim-sensor-options"
                    placeholder="Search sensors or type a custom name..."
                    class="flex-1 bg-gray-900/50 border border-gray-700/50 rounded-lg px-3 py-2 text-xs text-white focus:border-orange-400/60 outline-none placeholder-gray-600 transition-colors"
                    onkeydown="if(event.key==='Enter') addSensorToROV()">
                <button onclick="addSensorToROV()"
                    style="display:flex;align-items:center;gap:5px;padding:5px 12px;border-radius:7px;background:rgba(243,145,36,0.12);color:#f39124;border:1px solid rgba(243,145,36,0.3);font-size:11px;font-weight:700;cursor:pointer;white-space:nowrap;transition:background 0.15s"
                    onmouseover="this.style.background='rgba(243,145,36,0.22)'" onmouseout="this.style.background='rgba(243,145,36,0.12)'">
                    <svg xmlns="http://www.w3.org/2000/svg" style="width:11px;height:11px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
                    Add Sensor
                </button>
            </div>
        </div>`;

    // --- SECTION 3: OPTIONAL SENSORS ---
    const sortByCat = arr => [...arr].sort((a,b)=>(CAT_ORDER[SENSOR_CATEGORIES[a.name]]??9)-(CAT_ORDER[SENSOR_CATEGORIES[b.name]]??9));
    const optional  = sortByCat(sensors.filter(s => s.status === 'optional' && !s.custom));
    let optionalHtml = '';
    if (optional.length > 0) {
        let optRows = '';
        let lastCatOpt = null;
        optional.forEach(sensor => {
            const cat = SENSOR_CATEGORIES[sensor.name] || 'Other';
            if (cat !== lastCatOpt) {
                optRows += `<tr><td colspan="9" class="px-5 pt-3 pb-0.5"><span class="text-[9px] font-bold uppercase tracking-widest text-gray-600">${cat}</span></td></tr>`;
                lastCatOpt = cat;
            }
            const idx        = sensors.indexOf(sensor);
            const inc        = sensor.included;
            const trackColor = inc ? '#459fd9' : '#4b5563';
            const trackTX    = inc ? 'translateX(20px)' : 'translateX(0)';
            const curAss     = sensor.rovAssignment || 'Shared';
            const selOpt     = rovOptions.map(o => `<option value="${escapeHtml(o)}"${curAss===o?' selected':''}>${escapeHtml(o)}</option>`).join('');
            optRows += `
                <tr class="border-b border-gray-700/30 transition-opacity ${inc?'':'opacity-40'}" data-opt-idx="${idx}">
                    <td class="px-4 py-2.5 text-center">
                        <div style="display:inline-flex;align-items:center;justify-content:center;cursor:pointer" onclick="simToggleOptional(${idx},this)">
                            <div style="width:40px;height:20px;border-radius:9999px;background:${trackColor};position:relative;transition:background 0.2s;pointer-events:none">
                                <div style="position:absolute;top:2px;left:2px;width:16px;height:16px;background:white;border-radius:50%;transform:${trackTX};transition:transform 0.2s"></div>
                            </div>
                        </div>
                    </td>
                    <td class="px-4 py-2.5" onmouseenter="showTip(this,'${escapeHtml(sensor.name)}')" onmouseleave="hideTip()">
                        <div class="flex items-center gap-2">
                            <span class="text-sm font-medium text-gray-200">${escapeHtml(sensor.name)}</span>
                            ${sensor.note?`<span class="text-[10px] font-semibold" style="color:#459fd9">${escapeHtml(sensor.note)}</span>`:''}
                        </div>
                    </td>
                    <td class="px-3 py-2.5 opt-model-cell">${inc?buildModelCell(sensor,idx):'<span class="text-gray-600 text-xs">—</span>'}</td>
                    <td class="px-3 py-2.5 opt-serial-cell">${inc?`<input type="text" value="${escapeHtml(sensor.serialNo||'')}" placeholder="S/N..." class="w-full bg-gray-900/50 border border-gray-700/50 rounded-md px-2 py-1.5 text-xs text-[#459fd9] font-mono focus:border-[#459fd9] outline-none placeholder-gray-600 transition-colors" oninput="simSharedData.sensors[${idx}].serialNo=this.value">`:'<span class="text-gray-600 text-xs">—</span>'}</td>
                    <td class="px-3 py-2.5 text-center opt-qty-cell">${inc?`<input type="number" min="1" class="w-14 bg-gray-900/50 border border-gray-700/50 rounded-md px-2 py-1.5 text-xs text-center text-white focus:border-[#459fd9] outline-none transition-colors" value="${sensor.qty||1}" oninput="simSharedData.sensors[${idx}].qty=parseInt(this.value)||1">`:'<span class="text-gray-600 text-xs">—</span>'}</td>
                    <td class="px-3 py-2.5 text-center opt-cal-cell">${inc?buildToggleCell(sensor,idx,'calibrated','#f39124'):'—'}</td>
                    <td class="px-3 py-2.5 text-center opt-test-cell">${inc?buildToggleCell(sensor,idx,'tested','#459fd9'):'—'}</td>
                    <td class="px-3 py-2.5 opt-ass-cell">${inc?`<select class="w-full bg-gray-900/50 border border-gray-700/50 rounded-md px-2 py-1.5 text-xs outline-none focus:border-[#459fd9] transition-colors" style="color:${curAss!=='Shared'?'#f39124':'#9ca3af'}" onchange="simSharedData.sensors[${idx}].rovAssignment=this.value">${selOpt}</select>`:'<span class="text-gray-600 text-xs">—</span>'}</td>
                    <td class="px-3 py-2.5"></td>
                </tr>`;
        });
        optionalHtml = `
        <div class="mb-5" style="background:linear-gradient(135deg,rgba(31,41,55,0.75),rgba(17,24,39,0.9));border:1px solid rgba(55,65,81,0.5);border-radius:12px;overflow:hidden;backdrop-filter:blur(8px);box-shadow:0 2px 16px rgba(0,0,0,0.3);">
            <div class="flex items-center justify-between px-6 py-3.5 border-b border-gray-700/50">
                <div class="flex items-center gap-3">
                    <span class="w-2 h-2 rounded-full" style="background:#459fd9"></span>
                    <span class="text-xs font-bold text-white uppercase tracking-widest">Optional Sensors</span>
                    <span class="text-xs text-gray-600">(toggle to include)</span>
                </div>
                <span style="font-size:10px;font-weight:700;padding:2px 8px;border-radius:4px;background:rgba(69,159,217,0.15);color:#459fd9;border:1px solid rgba(69,159,217,0.3)">OPTIONAL</span>
            </div>
            <div style="overflow-x:auto">
                <table style="width:100%;table-layout:auto;min-width:700px;border-collapse:collapse">
                    <colgroup>
                        <col style="width:4.5rem"><col><col style="width:11rem"><col style="width:8rem">
                        <col style="width:3.5rem"><col style="width:5.5rem"><col style="width:5.5rem">
                        <col style="width:8rem"><col style="width:2rem">
                    </colgroup>
                    <thead>
                        <tr style="background:linear-gradient(90deg,rgba(5,8,18,0.97),rgba(10,16,28,0.93));border-bottom:1px solid rgba(69,159,217,0.18);color:#4b6070;" class="text-[9px] uppercase font-semibold tracking-wide">
                            <th class="px-4 py-2 text-center font-bold">Include</th>
                            <th class="px-4 py-2 text-left font-bold">Sensor / Equipment</th>
                            <th class="px-3 py-2 text-left font-bold">Model / Hardware</th>
                            <th class="px-3 py-2 text-left font-bold">Serial No.</th>
                            <th class="px-3 py-2 text-center font-bold">QTY</th>
                            <th class="px-3 py-2 text-center font-bold">Calibrated</th>
                            <th class="px-3 py-2 text-center font-bold">Tested</th>
                            <th class="px-3 py-2 text-left font-bold">Assignment</th>
                            <th class="px-3 py-2"></th>
                        </tr>
                    </thead>
                    <tbody>${optRows}</tbody>
                </table>
            </div>
        </div>`;
    }

    // --- SECTION 4: HARDWARE & CONSUMABLES (Packing List — separate from topology) ---
    const packingList   = simSharedData.packingList || [];
    const uniquePLDates = [...new Set(packingList.map(e => e.batch || '').filter(Boolean))];
    let hwEquipRows = '';
    packingList.forEach((e, i) => {
        const bgE       = i%2===0?'rgba(17,24,39,0.45)':'rgba(17,24,39,0.15)';
        const catClr    = EQUIP_CAT_COLORS[e.category] || '#6b7280';
        const rovAss    = rovOptions.map(o => `<option value="${escapeHtml(o)}"${(e.rovAssignment||'Shared')===o?' selected':''}>${escapeHtml(o)}</option>`).join('');
        const isCustom  = e.category && !EQUIP_CATEGORIES.includes(e.category);
        const catIsOther= e.category === '__other__';
        const catSelVal = (catIsOther || isCustom) ? 'Other' : (e.category || '');
        const catTextVal= isCustom ? e.category : '';
        hwEquipRows += `
            <tr class="group" style="background:${bgE};border-bottom:1px solid rgba(55,65,81,0.25)">
                <td class="px-3 py-2 text-[10px] text-gray-500 font-mono text-center">${i+1}</td>
                <td class="px-2 py-2">
                    <input type="text" list="hw-pl-dates" value="${escapeHtml(e.batch||'')}" placeholder="Date..."
                        class="w-full bg-gray-900/50 border border-gray-700/50 rounded-md px-2 py-1 text-[10px] text-gray-300 focus:border-[#459fd9] outline-none placeholder-gray-600 transition-colors"
                        oninput="simSharedData.packingList[${i}].batch=this.value;scheduleSimSync()">
                </td>
                <td class="px-2 py-2">
                    <select class="w-full bg-gray-900/50 border border-gray-700/50 rounded-md text-[10px] py-1 px-1.5 outline-none focus:border-[#459fd9] cursor-pointer"
                        style="color:${catClr};font-weight:700"
                        onchange="simPlCatChange(${i},this.value)">
                        <option value="">Category...</option>
                        ${EQUIP_CATEGORIES.map(c=>`<option value="${escapeHtml(c)}" style="color:#e5e7eb" ${catSelVal===c?'selected':''}>${escapeHtml(c)}</option>`).join('')}
                    </select>
                    ${(catIsOther||isCustom) ? `<input type="text" value="${escapeHtml(catTextVal)}" placeholder="Type category..."
                        class="w-full mt-1 bg-gray-900/50 border border-gray-700/50 rounded-md px-2 py-1 text-[10px] text-gray-200 focus:border-[#459fd9] outline-none placeholder-gray-600 transition-colors"
                        oninput="simSharedData.packingList[${i}].category=this.value||'__other__';scheduleSimSync()">` : ''}
                </td>
                <td class="px-2 py-2" onmouseenter="showTip(this,'${escapeHtml(e.item||'')}')" onmouseleave="hideTip()">
                    <input type="text" value="${escapeHtml(e.item||'')}" placeholder="Description..."
                        class="w-full bg-gray-900/50 border border-gray-700/50 rounded-md px-2 py-1 text-xs text-white focus:border-[#459fd9] outline-none placeholder-gray-600 transition-colors"
                        oninput="simSharedData.packingList[${i}].item=this.value;scheduleSimSync()">
                </td>
                <td class="px-2 py-2">
                    <input type="text" value="${escapeHtml(e.serial||'')}" placeholder="S/N..."
                        class="w-full bg-gray-900/50 border border-gray-700/50 rounded-md px-2 py-1 text-[10px] font-mono focus:border-[#459fd9] outline-none placeholder-gray-600 transition-colors"
                        style="color:#459fd9" oninput="simSharedData.packingList[${i}].serial=this.value;scheduleSimSync()">
                </td>
                <td class="px-2 py-2 text-center">
                    <input type="number" min="1" value="${e.qty??1}"
                        class="w-12 bg-gray-900/50 border border-gray-700/50 rounded-md px-1 py-1 text-[10px] text-center text-white focus:border-[#459fd9] outline-none transition-colors"
                        oninput="simSharedData.packingList[${i}].qty=parseInt(this.value)||1;scheduleSimSync()">
                </td>
                <td class="px-2 py-2">
                    <select class="w-full bg-gray-900/50 border border-gray-700/50 rounded-md px-1.5 py-1 text-[10px] outline-none focus:border-[#459fd9] transition-colors"
                        style="color:${e.rovAssignment&&e.rovAssignment!=='Shared'?'#f39124':'#6b7280'}"
                        onchange="simSharedData.packingList[${i}].rovAssignment=this.value;renderSensorsContent(document.getElementById('sim-content-area'))">
                        ${rovAss}
                    </select>
                </td>
                <td class="px-2 py-2">
                    <input type="text" value="${escapeHtml(e.comments||'')}" placeholder="Notes..."
                        class="w-full bg-transparent border-b border-gray-700/50 focus:border-gray-500 outline-none text-[10px] text-gray-400 py-1 transition-colors placeholder-gray-600"
                        oninput="simSharedData.packingList[${i}].comments=this.value;scheduleSimSync()">
                </td>
                <td class="px-2 py-2 text-center">
                    <button onclick="deletePackingListItem(${i})" class="opacity-0 group-hover:opacity-100 text-gray-500 hover:text-red-400 transition-all text-xl font-bold leading-none">&times;</button>
                </td>
            </tr>`;
    });
    const hwHtml = `
        <div class="mb-5" style="background:linear-gradient(135deg,rgba(31,41,55,0.7),rgba(17,24,39,0.85));border:1px solid rgba(55,65,81,0.5);border-radius:12px;overflow:hidden;backdrop-filter:blur(8px);box-shadow:0 2px 16px rgba(0,0,0,0.3);">
            <div class="flex items-center justify-between px-6 py-3.5 border-b border-gray-700/50">
                <div class="flex items-center gap-3">
                    <span class="w-2 h-2 rounded-full" style="background:#459fd9;box-shadow:0 0 6px #459fd988"></span>
                    <span class="text-xs font-bold text-white uppercase tracking-widest">Hardware &amp; Consumables</span>
                    <span class="text-xs text-gray-600">${packingList.length} item${packingList.length!==1?'s':''}</span>
                </div>
                <div class="flex items-center gap-2">
                    <button onclick="loadPackingListFromExcel()" style="display:flex;align-items:center;gap:5px;padding:4px 10px;border-radius:7px;background:rgba(69,159,217,0.1);color:#459fd9;border:1px solid rgba(69,159,217,0.3);font-size:10px;font-weight:700;cursor:pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" style="width:11px;height:11px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"/></svg>
                        Load from Excel
                    </button>
                    <button onclick="addPackingListItem()" style="display:flex;align-items:center;gap:5px;padding:4px 10px;border-radius:7px;background:rgba(243,145,36,0.12);color:#f39124;border:1px solid rgba(243,145,36,0.3);font-size:10px;font-weight:700;cursor:pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" style="width:11px;height:11px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
                        Add Item
                    </button>
                </div>
            </div>
            <datalist id="hw-pl-dates">${uniquePLDates.map(d=>`<option value="${escapeHtml(d)}">`).join('')}</datalist>
            ${packingList.length > 0 ? `
            <div style="overflow-x:auto">
                <table style="width:100%;table-layout:auto;min-width:750px;border-collapse:separate;border-spacing:0">
                    <colgroup>
                        <col style="width:2rem"><col style="width:7rem"><col style="width:10rem"><col>
                        <col style="width:7rem"><col style="width:3rem"><col style="width:7rem"><col><col style="width:2rem">
                    </colgroup>
                    <thead>
                        <tr style="background:linear-gradient(90deg,rgba(5,8,18,0.97),rgba(10,16,28,0.93));border-bottom:1px solid rgba(69,159,217,0.18);color:#4b6070;" class="text-[9px] uppercase font-semibold tracking-wide">
                            <th class="px-3 py-2 text-center font-bold">#</th>
                            <th class="px-3 py-2 text-left font-bold">Date</th>
                            <th class="px-3 py-2 text-left font-bold">Category</th>
                            <th class="px-3 py-2 text-left font-bold">Description</th>
                            <th class="px-3 py-2 text-left font-bold">Serial No.</th>
                            <th class="px-3 py-2 text-center font-bold">Qty</th>
                            <th class="px-3 py-2 text-left font-bold">ROV</th>
                            <th class="px-3 py-2 text-left font-bold">Notes</th>
                            <th class="px-3 py-2"></th>
                        </tr>
                    </thead>
                    <tbody>${hwEquipRows}</tbody>
                </table>
            </div>` : `<div class="px-6 py-8 text-center">
                <p class="text-sm text-gray-600 mb-3">No packing list items yet</p>
                <div class="flex justify-center gap-3 flex-wrap">
                    <button onclick="addPackingListItem()" class="px-4 py-2 rounded-lg text-xs font-bold" style="background:rgba(243,145,36,0.12);color:#f39124;border:1px solid rgba(243,145,36,0.3)">+ Add Item</button>
                    <button onclick="loadPackingListFromExcel()" class="px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5" style="background:rgba(69,159,217,0.1);color:#459fd9;border:1px solid rgba(69,159,217,0.3)">Load from Excel</button>
                </div>
            </div>`}
        </div>`;

    // --- SECTION 5: THRUSTERS (flat list with ROV assignment) ---
    const thrusters = simSharedData.thrusters || [];
    let thrusterRows = '';
    thrusters.forEach((t, i) => {
        const bgRow      = i%2===0 ? 'rgba(17,24,39,0.25)' : 'rgba(17,24,39,0.08)';
        const curAss     = t.rovAssignment || 'Shared';
        const rovAssOpts = rovOptions.map(o => `<option value="${escapeHtml(o)}"${curAss===o?' selected':''}>${escapeHtml(o)}</option>`).join('');
        thrusterRows += `
            <tr class="group" style="background:${bgRow};border-bottom:1px solid rgba(55,65,81,0.3)">
                <td class="px-4 py-3 text-xs text-gray-500 font-mono text-center">${i+1}</td>
                <td class="px-4 py-3"><input type="text" value="${escapeHtml(t.number||'')}" placeholder="T-01"
                    class="w-full bg-gray-900/50 border border-gray-700/50 rounded-md px-3 py-1.5 text-xs text-white focus:border-[#459fd9] outline-none placeholder-gray-600 transition-colors"
                    oninput="simSharedData.thrusters[${i}].number=this.value;scheduleSimSync()"></td>
                <td class="px-4 py-3"><input type="text" value="${escapeHtml(t.serial||'')}" placeholder="S/N..."
                    class="w-full bg-gray-900/50 border border-gray-700/50 rounded-md px-3 py-1.5 text-xs font-mono focus:border-[#459fd9] outline-none placeholder-gray-600 transition-colors"
                    style="color:#459fd9" oninput="simSharedData.thrusters[${i}].serial=this.value;scheduleSimSync()"></td>
                <td class="px-4 py-3"><select class="w-full bg-gray-900/50 border border-gray-700/50 rounded-md px-2 py-1.5 text-xs outline-none focus:border-[#459fd9] transition-colors"
                    style="color:${curAss!=='Shared'?'#f39124':'#9ca3af'}"
                    onchange="simSharedData.thrusters[${i}].rovAssignment=this.value;renderSensorsContent(document.getElementById('sim-content-area'))">
                    ${rovAssOpts}
                </select></td>
                <td class="px-4 py-3 text-center"><button onclick="deleteThruster(${i})" class="opacity-0 group-hover:opacity-100 text-gray-500 hover:text-red-400 transition-all text-xl font-bold leading-none">&times;</button></td>
            </tr>`;
    });
    const thrusterHtml = `
        <div class="mb-5" style="background:linear-gradient(135deg,rgba(31,41,55,0.75),rgba(17,24,39,0.9));border:1px solid rgba(55,65,81,0.5);border-radius:12px;overflow:hidden;backdrop-filter:blur(8px);box-shadow:0 2px 16px rgba(0,0,0,0.3);">
            <div class="flex items-center justify-between px-6 py-3.5 border-b border-gray-700/50">
                <div class="flex items-center gap-3">
                    <span class="w-2 h-2 rounded-full" style="background:#459fd9;box-shadow:0 0 6px #459fd988"></span>
                    <span class="text-xs font-bold text-white uppercase tracking-widest">Thrusters</span>
                    <span class="text-xs text-gray-600">${thrusters.length} unit${thrusters.length!==1?'s':''} total</span>
                </div>
                <button onclick="addThruster()"
                    style="display:flex;align-items:center;gap:5px;padding:4px 12px;border-radius:7px;background:rgba(69,159,217,0.12);color:#459fd9;border:1px solid rgba(69,159,217,0.3);font-size:11px;font-weight:700;cursor:pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" style="width:12px;height:12px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
                    Add Thruster
                </button>
            </div>
            <table style="width:100%;table-layout:fixed;border-collapse:separate;border-spacing:0">
                <colgroup>
                    <col style="width:2.5rem"><col style="width:9rem"><col><col style="width:9rem"><col style="width:2.5rem">
                </colgroup>
                <thead>
                    <tr style="background:linear-gradient(90deg,rgba(5,8,18,0.97),rgba(10,16,28,0.93));border-bottom:1px solid rgba(69,159,217,0.18);color:#4b6070;" class="text-[9px] uppercase font-semibold tracking-wide">
                        <th class="px-4 py-2 text-center font-bold">#</th>
                        <th class="px-4 py-2 text-left font-bold">Thruster No.</th>
                        <th class="px-4 py-2 text-left font-bold">Serial Number</th>
                        <th class="px-4 py-2 text-left font-bold">ROV Assignment</th>
                        <th class="px-4 py-2"></th>
                    </tr>
                </thead>
                <tbody>${thrusterRows||`<tr><td colspan="5" class="px-4 py-8 text-center text-gray-600 text-sm">No thrusters added — click Add Thruster to begin</td></tr>`}</tbody>
            </table>
        </div>`;

    area.innerHTML = `
        <div class="max-w-5xl mx-auto pb-6">
            <div class="flex items-center justify-between mb-5">
                <div>
                    <h3 class="text-xl font-bold text-white">Sensors &amp; Equipment</h3>
                </div>
            </div>
            <datalist id="sim-sensor-options">${sensorOptions}</datalist>
            ${fleetHtml}
            ${sensorsTableHtml}
            ${optionalHtml}
            ${hwHtml}
            ${thrusterHtml}
        </div>`;
}


function addThruster() {
    if (!simSharedData.thrusters) simSharedData.thrusters = [];
    simSharedData.thrusters.push({ number: '', serial: '', firmware: '', rovAssignment: 'Shared' });
    renderSensorsContent(document.getElementById('sim-content-area'));
    scheduleSimSync();
}

function deleteThruster(idx) {
    simSharedData.thrusters.splice(idx, 1);
    renderSensorsContent(document.getElementById('sim-content-area'));
    scheduleSimSync();
}

// ---- SYSTEM READINESS TAB ----
function renderReadinessContent(area) {
    const sensors      = simSharedData.sensors || [];
    const activeSensors = sensors.filter(s => s.status === 'required' || (s.status === 'optional' && s.included) || s.custom);
    const fixedAll     = Object.values(simSharedData.rovSensors || {}).flat();
    const allActive    = [...activeSensors, ...fixedAll];
    const total        = allActive.length;
    const calibrated   = allActive.filter(s => s.calibrated).length;
    const tested       = allActive.filter(s => s.tested).length;
    const noModel      = allActive.filter(s => !s.model || s.model.trim() === '').length;
    const ready        = allActive.filter(s => s.calibrated && s.tested && s.model && s.model.trim() !== '').length;
    const percent      = total > 0 ? Math.round((ready / total) * 100) : 0;
    const barColor     = percent === 100 ? '#22c55e' : percent >= 60 ? '#f39124' : '#ef4444';

    const scope        = OPERATION_SCOPES[simSelectedScope];
    const rovEntries   = [...simSelectedROVs.entries()].sort((a,b)=>a[0]-b[0]);
    const machines     = simSharedData.sysarch?.machines || [];
    const equipment    = simSharedData.sysarch?.equipment || [];
    const systemIPs    = simSharedData.sysarch?.systemIPs || [];
    const packingList  = simSharedData.packingList || [];
    const issues       = simSharedData.issues || [];

    // helpers
    const kpi = (value, label, color, bg, border) =>
        `<div style="flex:1;min-width:0;background:rgba(${bg});border:1px solid rgba(${border});border-radius:10px;padding:10px 14px;">
            <div style="font-size:22px;font-weight:800;color:${color};line-height:1;letter-spacing:-0.5px">${value}</div>
            <div style="font-size:9px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.06em;margin-top:3px">${label}</div>
        </div>`;

    const card = (body, extra = '') =>
        `<div class="mb-5 ${extra}" style="background:linear-gradient(135deg,rgba(31,41,55,0.75),rgba(17,24,39,0.9));border:1px solid rgba(55,65,81,0.5);border-radius:12px;overflow:hidden;backdrop-filter:blur(8px);box-shadow:0 2px 16px rgba(0,0,0,0.3);">${body}</div>`;

    const cardHead = (title, badge = '', accent = '#f39124') =>
        `<div class="flex items-center justify-between px-6 py-3.5 border-b border-gray-700/50">
            <div class="flex items-center gap-3">
                <span style="width:8px;height:8px;border-radius:50%;background:${accent};display:inline-block;box-shadow:0 0 6px ${accent}88"></span>
                <span class="text-xs font-bold text-white uppercase tracking-widest">${title}</span>
            </div>
            ${badge ? `<span style="font-size:10px;font-weight:700;padding:2px 8px;border-radius:4px;background:rgba(69,159,217,0.12);color:#459fd9;border:1px solid rgba(69,159,217,0.25)">${badge}</span>` : ''}
        </div>`;

    // 1. Readiness overview card
    const readinessCard = card(`
        ${cardHead('System Readiness', percent + '%', barColor)}
        <div class="px-6 pt-4 pb-2">
            <div style="height:8px;background:rgba(55,65,81,0.6);border-radius:9999px;overflow:hidden;">
                <div style="width:${percent}%;height:100%;background:linear-gradient(90deg,${barColor}99,${barColor});border-radius:9999px;transition:width 0.6s ease;"></div>
            </div>
            <div style="font-size:11px;color:#6b7280;margin-top:5px;font-weight:500">${percent === 100 ? 'All sensors fully configured and ready' : `${ready} of ${total} sensors fully configured`}</div>
        </div>
        <div style="display:flex;gap:10px;padding:10px 24px 16px;">
            ${kpi(ready,      'Ready',        '#f39124', '243,145,36,0.08','243,145,36,0.2')}
            ${kpi(calibrated, 'Calibrated',   '#f39124', '243,145,36,0.08','243,145,36,0.2')}
            ${kpi(tested,     'Tested',       '#f39124', '243,145,36,0.08','243,145,36,0.2')}
            ${kpi(noModel,    'No Model',     noModel===0?'#22c55e':'#f87171', noModel===0?'34,197,94,0.08':'239,68,68,0.08', noModel===0?'34,197,94,0.2':'239,68,68,0.2')}
            ${kpi(total,      'Total Active', '#459fd9', '69,159,217,0.08','69,159,217,0.2')}
        </div>
    `);

    // 2. Project info + ROV fleet (2-col)
    const projectRows = [
        ['Project Name', escapeHtml(simProjectData.name) || '<span style="color:#4b5563">—</span>'],
        ['Project Code', `<span class="font-mono" style="color:#459fd9">${escapeHtml(simProjectData.code) || '—'}</span>`],
        ['Scope',        escapeHtml(scope?.name || simSelectedScope || '—')],
        ['Date',         new Date().toLocaleDateString('en-GB', {day:'2-digit',month:'short',year:'numeric'})],
    ].map(([k,v]) => `<div class="flex justify-between py-2 border-b border-gray-700/20 text-xs last:border-0">
        <span style="color:#6b7280;font-weight:500">${k}</span>
        <span class="text-white font-semibold">${v}</span>
    </div>`).join('');

    const rovRowsHtml = rovEntries.length === 0
        ? `<p class="text-xs py-2" style="color:#4b5563">No ROVs selected</p>`
        : rovEntries.map(([num, role]) => {
            const serial = simROVSerials.get(num) || '';
            const desc   = simROVDescriptions.get(num) || '';
            const isMain = role === 'main';
            return `<div class="flex items-center gap-3 py-2 border-b border-gray-700/20 last:border-0">
                <span class="font-bold text-white text-sm w-12">MS-${num}</span>
                <span style="font-size:9px;font-weight:700;padding:2px 8px;border-radius:4px;${isMain?'background:rgba(243,145,36,0.15);color:#f39124;border:1px solid rgba(243,145,36,0.4)':'background:rgba(69,159,217,0.12);color:#459fd9;border:1px solid rgba(69,159,217,0.3)'}">${isMain?'MAIN':'STBY'}</span>
                <div class="flex-1 min-w-0">
                    ${serial ? `<div style="font-size:11px;font-family:monospace;color:#459fd9">${escapeHtml(serial)}</div>` : ''}
                    ${desc   ? `<div style="font-size:10px;color:#6b7280" class="truncate">${escapeHtml(desc)}</div>` : ''}
                    ${!serial && !desc ? `<span style="font-size:10px;color:#374151">No info</span>` : ''}
                </div>
            </div>`;
        }).join('');

    const infoGrid = `
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;" class="mb-5">
            <div style="background:linear-gradient(135deg,rgba(31,41,55,0.75),rgba(17,24,39,0.9));border:1px solid rgba(55,65,81,0.5);border-radius:12px;overflow:hidden;backdrop-filter:blur(8px)">
                ${cardHead('Project Info')}
                <div class="px-6 py-3">${projectRows}</div>
            </div>
            <div style="background:linear-gradient(135deg,rgba(31,41,55,0.75),rgba(17,24,39,0.9));border:1px solid rgba(55,65,81,0.5);border-radius:12px;overflow:hidden;backdrop-filter:blur(8px)">
                ${cardHead('ROV Fleet', rovEntries.length + ' unit' + (rovEntries.length!==1?'s':''), '#f39124')}
                <div class="px-6 py-3">${rovRowsHtml}</div>
            </div>
        </div>`;

    // 3. Sensors full table (read-only overview)
    const statusIcon = s => {
        const full = s.calibrated && s.tested && s.model;
        const partial = (s.calibrated || s.tested) && !full;
        if (full)    return `<span style="color:#22c55e;font-size:16px;font-weight:700;line-height:1">✓</span>`;
        if (partial) return `<span style="color:#f39124;font-size:14px;font-weight:700;line-height:1">⚡</span>`;
        return `<span style="color:#ef4444;font-size:14px;font-weight:700;line-height:1">✗</span>`;
    };
    const tick = ok => ok
        ? `<span style="color:#22c55e;font-size:15px">✓</span>`
        : `<span style="color:#4b5563;font-size:11px;font-weight:700">—</span>`;

    let sRows = '';
    activeSensors.forEach((s, i) => {
        const full    = s.calibrated && s.tested && s.model;
        const partial = (s.calibrated || s.tested) && !full;
        const bg = full    ? 'rgba(34,197,94,0.05)'
                 : partial ? 'rgba(243,145,36,0.04)'
                 : i%2===0 ? 'rgba(17,24,39,0.3)' : 'rgba(17,24,39,0.1)';
        const lBorder = full    ? '3px solid rgba(34,197,94,0.35)'
                      : partial ? '3px solid rgba(243,145,36,0.35)'
                      : '3px solid transparent';
        sRows += `<tr style="background:${bg};border-left:${lBorder};border-bottom:1px solid rgba(55,65,81,0.2)">
            <td class="px-3 py-2 text-center" style="width:2rem">${statusIcon(s)}</td>
            <td class="px-3 py-2 text-xs text-gray-200 font-medium">${escapeHtml(s.name)}${s.note?` <span style="font-size:9px;color:#459fd9;margin-left:4px">${escapeHtml(s.note)}</span>`:''}</td>
            <td class="px-3 py-2 text-xs font-semibold ${s.model?'text-white':''}">
                ${s.model ? escapeHtml(s.model) : `<span style="color:#ef4444;opacity:0.7;font-size:10px">Missing</span>`}
            </td>
            <td class="px-3 py-2 text-xs font-mono" style="color:#459fd9">${escapeHtml(s.serialNo||'—')}</td>
            <td class="px-3 py-2 text-xs text-center text-gray-400">${s.qty||1}</td>
            <td class="px-3 py-2 text-center">${tick(s.calibrated)}</td>
            <td class="px-3 py-2 text-center">${tick(s.tested)}</td>
            <td class="px-3 py-2 text-xs" style="color:${(s.rovAssignment||'Shared')!=='Shared'?'#f39124':'#6b7280'}">${escapeHtml(s.rovAssignment||'Shared')}</td>
        </tr>`;
    });

    const sensorsCard = activeSensors.length > 0 ? card(`
        ${cardHead('Sensors & Equipment', activeSensors.length + ' active', '#f39124')}
        <div style="overflow-x:auto">
            <table style="width:100%;border-collapse:collapse;min-width:580px">
                <thead>
                    <tr style="background:linear-gradient(90deg,rgba(5,8,18,0.97),rgba(10,16,28,0.93));border-bottom:1px solid rgba(69,159,217,0.18);color:#4b6070;" class="text-[9px] uppercase font-semibold tracking-wide">
                        <th class="px-3 py-2.5 text-center" style="width:2rem"></th>
                        <th class="px-3 py-2.5 text-left">Sensor / Equipment</th>
                        <th class="px-3 py-2.5 text-left">Model</th>
                        <th class="px-3 py-2.5 text-left">Serial No.</th>
                        <th class="px-3 py-2.5 text-center" style="width:3rem">Qty</th>
                        <th class="px-3 py-2.5 text-center" style="width:5rem">Calibrated</th>
                        <th class="px-3 py-2.5 text-center" style="width:4rem">Tested</th>
                        <th class="px-3 py-2.5 text-left" style="width:7rem">Assignment</th>
                    </tr>
                </thead>
                <tbody>${sRows}</tbody>
            </table>
        </div>
    `) : '';

    // 4. Summary row: Topology | Packing List | Issues
    const machineSummary = machines.length > 0
        ? `<div style="font-size:26px;font-weight:800;color:#fff;line-height:1">${machines.length}</div>
           <div style="font-size:9px;color:#6b7280;text-transform:uppercase;letter-spacing:0.08em;margin-top:2px">Machines</div>
           <div style="margin-top:8px;font-size:11px;color:#6b7280">${systemIPs.filter(p=>p.ip).length} IPs configured</div>
           <div style="font-size:11px;color:#6b7280">${equipment.length} equip. items</div>`
        : `<div style="font-size:11px;color:#374151;font-style:italic">No topology data</div>`;

    const packingCats = {};
    packingList.forEach(p => { const c = p.category && p.category !== '__other__' ? p.category : 'Other'; packingCats[c]=(packingCats[c]||0)+1; });
    const packingSummary = packingList.length > 0
        ? `<div style="font-size:26px;font-weight:800;color:#fff;line-height:1">${packingList.length}</div>
           <div style="font-size:9px;color:#6b7280;text-transform:uppercase;letter-spacing:0.08em;margin-top:2px">Items</div>
           <div style="margin-top:8px">${Object.entries(packingCats).slice(0,4).map(([c,n])=>`<div style="font-size:10px;color:#6b7280">${escapeHtml(c)}: <span style="color:#9ca3af">${n}</span></div>`).join('')}${Object.keys(packingCats).length>4?`<div style="font-size:10px;color:#374151">+${Object.keys(packingCats).length-4} more</div>`:''}</div>`
        : `<div style="font-size:11px;color:#374151;font-style:italic">No packing list</div>`;

    const critical = issues.filter(i=>i.severity==='critical').length;
    const major    = issues.filter(i=>i.severity==='major').length;
    const minor    = issues.filter(i=>i.severity==='minor').length;
    const openCnt  = issues.filter(i=>i.status==='open').length;
    const issuesSummary = issues.length === 0
        ? `<div style="font-size:26px;font-weight:800;color:#22c55e;line-height:1">0</div>
           <div style="font-size:9px;color:#6b7280;text-transform:uppercase;letter-spacing:0.08em;margin-top:2px">Issues</div>
           <div style="font-size:10px;color:rgba(34,197,94,0.7);margin-top:8px">All clear</div>`
        : `<div style="font-size:26px;font-weight:800;color:${critical>0?'#f87171':major>0?'#fb923c':'#9ca3af'};line-height:1">${issues.length}</div>
           <div style="font-size:9px;color:#6b7280;text-transform:uppercase;letter-spacing:0.08em;margin-top:2px">Total Issues</div>
           <div style="margin-top:8px">
               ${critical>0?`<div style="font-size:10px;color:#f87171">${critical} Critical</div>`:''}
               ${major>0?`<div style="font-size:10px;color:#fb923c">${major} Major</div>`:''}
               ${minor>0?`<div style="font-size:10px;color:#6b7280">${minor} Minor</div>`:''}
               ${openCnt>0?`<div style="font-size:10px;color:rgba(234,179,8,0.8)">${openCnt} Open</div>`:''}
           </div>`;

    const summaryRow = `
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;" class="mb-5">
            <div style="background:linear-gradient(135deg,rgba(31,41,55,0.75),rgba(17,24,39,0.9));border:1px solid rgba(55,65,81,0.5);border-radius:12px;overflow:hidden;backdrop-filter:blur(8px)">
                ${cardHead('Topology', '', '#459fd9')}<div class="px-6 py-4">${machineSummary}</div>
            </div>
            <div style="background:linear-gradient(135deg,rgba(31,41,55,0.75),rgba(17,24,39,0.9));border:1px solid rgba(55,65,81,0.5);border-radius:12px;overflow:hidden;backdrop-filter:blur(8px)">
                ${cardHead('Packing List', '', '#f39124')}<div class="px-6 py-4">${packingSummary}</div>
            </div>
            <div style="background:linear-gradient(135deg,rgba(31,41,55,0.75),rgba(17,24,39,0.9));border:1px solid rgba(55,65,81,0.5);border-radius:12px;overflow:hidden;backdrop-filter:blur(8px)">
                ${cardHead('Issues', issues.length>0?issues.length+' total':'', critical>0?'#f87171':'#22c55e')}<div class="px-6 py-4">${issuesSummary}</div>
            </div>
        </div>`;

    // 5. Approval & action card
    const approvalStatus = simApproval.status;
    const acMap = {
        draft:     { color:'#6b7280', label:'DRAFT',            desc:'Complete setup and submit for approval before pushing to Operation.' },
        submitted: { color:'#eab308', label:'PENDING APPROVAL', desc:'Awaiting reviewer approval.' },
        approved:  { color:'#22c55e', label:'APPROVED',         desc:'Simulation approved — ready to push to Operation.' },
        rejected:  { color:'#f87171', label:'REJECTED',         desc:'Simulation was rejected. Fix issues and re-submit.' },
    };
    const ac = acMap[approvalStatus] || acMap.draft;
    const lastEntry     = simApproval.history.length > 0 ? simApproval.history[simApproval.history.length-1] : null;
    const lastRejection = [...simApproval.history].reverse().find(h => h.action === 'rejected');
    const isApproved    = approvalStatus === 'approved';

    const submitBtn = (approvalStatus === 'draft' || approvalStatus === 'rejected')
        ? `<button onclick="submitSimForApproval().then(()=>renderSimContent())"
               style="display:flex;align-items:center;gap:8px;padding:10px 20px;font-size:13px;font-weight:700;border-radius:10px;background:rgba(69,159,217,0.15);color:#459fd9;border:2px solid rgba(69,159,217,0.4);cursor:pointer;transition:background 0.15s"
               onmouseover="this.style.background='rgba(69,159,217,0.28)'" onmouseout="this.style.background='rgba(69,159,217,0.15)'">
               <svg style="width:16px;height:16px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
               ${approvalStatus === 'rejected' ? 'Re-submit for Approval' : 'Submit for Approval'}
           </button>`
        : approvalStatus === 'submitted'
        ? `<span style="display:flex;align-items:center;gap:8px;padding:10px 20px;font-size:13px;font-weight:700;border-radius:10px;background:rgba(234,179,8,0.12);color:#eab308;border:2px solid rgba(234,179,8,0.3)">
               <span style="width:8px;height:8px;border-radius:50%;background:#eab308;animation:pulse 1.5s infinite"></span>Awaiting Approval
           </span>`
        : `<span style="display:flex;align-items:center;gap:8px;padding:10px 20px;font-size:13px;font-weight:700;border-radius:10px;background:rgba(34,197,94,0.12);color:#22c55e;border:2px solid rgba(34,197,94,0.3)">
               <svg style="width:16px;height:16px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>Approved
           </span>`;

    const pushBtnStyle = isApproved
        ? `background:#f39124;color:#fff;border:2px solid #f39124;cursor:pointer;opacity:1`
        : `background:rgba(55,65,81,0.3);color:#4b5563;border:2px solid rgba(75,85,99,0.3);cursor:not-allowed;opacity:0.4`;
    const pushHover    = isApproved ? `onmouseover="this.style.background='#e8841f'" onmouseout="this.style.background='#f39124'"` : '';
    const pushClickAttr = isApproved ? `onclick="pushToOperation()"` : '';
    const pushBtn = `<button ${pushClickAttr} ${isApproved?'':' disabled'}
        style="display:flex;align-items:center;gap:8px;padding:10px 24px;font-size:13px;font-weight:700;border-radius:10px;transition:background 0.15s;${pushBtnStyle}"
        ${pushHover}>
        <svg style="width:16px;height:16px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
        Push to Operation
    </button>`;

    const rejectionBlock = lastRejection ? `
        <div style="margin-top:12px;padding:10px 14px;border-radius:8px;background:rgba(248,113,113,0.08);border:1px solid rgba(248,113,113,0.2);font-size:12px;color:rgba(248,113,113,0.8)">
            <strong>Rejected by ${escapeHtml(lastRejection.by||'')}</strong> — ${new Date(lastRejection.at).toLocaleString()}
            ${lastRejection.comment ? `<br><em>${escapeHtml(lastRejection.comment)}</em>` : ''}
        </div>` : '';

    const historyHtml = simApproval.history.length > 0
        ? `<div style="margin-top:16px;padding-top:14px;border-top:1px solid rgba(55,65,81,0.4)">
               <div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#4b5563;margin-bottom:8px">Approval History</div>
               ${simApproval.history.slice().reverse().slice(0,6).map(h =>
                   `<div style="display:flex;align-items:center;gap:10px;padding:5px 0;border-bottom:1px solid rgba(55,65,81,0.2);font-size:11px">
                       <span style="font-family:monospace;color:#4b5563;width:90px;flex-shrink:0">${new Date(h.at).toLocaleDateString()}</span>
                       <span style="font-weight:700;font-size:9px;text-transform:uppercase;letter-spacing:0.06em;${h.action==='approved'?'color:#22c55e':h.action==='rejected'?'color:#f87171':h.action==='submitted'?'color:#eab308':'color:#6b7280'}">${h.action}</span>
                       <span style="color:#6b7280">${escapeHtml(h.by||'')}</span>
                   </div>`
               ).join('')}
           </div>` : '';

    const approvalCard = card(`
        ${cardHead('Approval & Submission', '', ac.color)}
        <div class="px-6 py-5">
            <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:24px;flex-wrap:wrap">
                <div style="flex:1;min-width:200px">
                    <div style="display:flex;align-items:center;gap:10px;margin-bottom:4px">
                        <span style="font-size:13px;font-weight:800;color:${ac.color}">${ac.label}</span>
                        ${lastEntry ? `<span style="font-size:10px;color:#4b5563">Last updated ${new Date(lastEntry.at).toLocaleDateString()}</span>` : ''}
                    </div>
                    <p style="font-size:12px;color:#6b7280">${ac.desc}</p>
                    ${rejectionBlock}
                </div>
                <div style="display:flex;align-items:center;gap:12px;flex-shrink:0">
                    ${submitBtn}
                    ${pushBtn}
                </div>
            </div>
            ${historyHtml}
        </div>
    `);

    area.innerHTML = `
        <div class="max-w-5xl mx-auto pb-6">
            <div class="flex items-center justify-between mb-5">
                <div>
                    <h3 class="text-xl font-bold text-white">System Readiness</h3>
                    <p class="text-gray-400 text-xs mt-1">Scope: <span style="color:#f39124;font-weight:600">${scope?.name||simSelectedScope||'—'}</span></p>
                </div>
            </div>
            ${readinessCard}
            ${infoGrid}
            ${sensorsCard}
            ${summaryRow}
            ${approvalCard}
        </div>`;
}

function simSetROVRole(rovNum, role) {
    if (!simSelectedROVs.has(rovNum)) return;
    if (rovHasDiveLogs(rovNum)) {
        alert(`MS-${rovNum} has dive logs recorded against it.\nIts role cannot be changed until those logs are removed.`);
        return;
    }
    if (role === 'main') {
        for (const k of simSelectedROVs.keys()) simSelectedROVs.set(k, 'standby');
        simSelectedROVs.set(rovNum, 'main');
    } else {
        const mainCount = [...simSelectedROVs.values()].filter(r => r === 'main').length;
        if (mainCount <= 1 && simSelectedROVs.get(rovNum) === 'main') {
            showToast('At least one MiniSpector must be set as Main.', 'warn');
            return;
        }
        simSelectedROVs.set(rovNum, 'standby');
        const hasMain = [...simSelectedROVs.values()].some(r => r === 'main');
        if (!hasMain) {
            const first = [...simSelectedROVs.keys()].sort((a,b)=>a-b)[0];
            simSelectedROVs.set(first, 'main');
        }
    }
    renderROVChips();
    renderSensorsContent(document.getElementById('sim-content-area'));
    scheduleSimSync();
}

function buildSensorRow(sensor, idx, num, canDelete) {
    const safeName  = escapeHtml(sensor.name);
    const safeNote  = escapeHtml(sensor.note || '');
    const safeSerial = escapeHtml(sensor.serialNo || '');
    return `
        <tr class="border-b border-gray-700/30 hover:bg-gray-700/20 transition-colors group">
            <td class="px-4 py-3 text-xs text-gray-600 font-mono">${num}</td>
            <td class="px-4 py-3">
                <div class="flex items-center gap-2">
                    <span class="text-sm font-medium text-gray-200">${safeName}</span>
                    ${sensor.note ? `<span class="text-[10px] text-blue-400 font-semibold">${safeNote}</span>` : ''}
                    ${sensor.custom ? `<span class="text-[10px] px-1.5 py-0.5 bg-orange-500/20 border border-orange-500/30 text-orange-400 rounded font-bold">CUSTOM</span>` : ''}
                </div>
            </td>
            <td class="px-4 py-3">${buildModelCell(sensor, idx)}</td>
            <td class="px-3 py-3">
                <input type="text" value="${safeSerial}" placeholder="S/N..."
                    class="w-full bg-gray-900/50 border border-gray-700/50 rounded-md px-2 py-1.5 text-xs text-[#459fd9] font-mono focus:border-[#459fd9] outline-none placeholder-gray-600 transition-colors"
                    oninput="simSharedData.sensors[${idx}].serialNo = this.value">
            </td>
            <td class="px-4 py-3 text-center">
                <input type="number" min="1"
                    class="w-14 bg-gray-900 border border-gray-600 rounded-lg px-2 py-1 text-xs text-center text-white focus:border-[#459fd9] outline-none transition-colors"
                    value="${sensor.qty || 1}"
                    oninput="simSharedData.sensors[${idx}].qty = parseInt(this.value) || 1">
            </td>

            <td class="px-4 py-3 text-center">${buildToggleCell(sensor, idx, 'calibrated', '#f39124')}</td>
            <td class="px-4 py-3 text-center">${buildToggleCell(sensor, idx, 'tested', '#459fd9')}</td>

            ${canDelete ? `<td class="px-4 py-3 text-center">
                <button onclick="removeSensorFromROV(${idx})"
                    class="text-gray-600 hover:text-red-400 transition-colors text-lg font-bold opacity-0 group-hover:opacity-100">×</button>
            </td>` : ''}
        </tr>`;
}

function buildModelCell(sensor, idx) {
    const hardware = SENSOR_HARDWARE[sensor.name] || [];
    const safeModel = escapeHtml(sensor.model || '');

    if (hardware.length === 0) {
        return `<input type="text"
            class="w-full bg-gray-900 border border-gray-600 rounded-lg px-3 py-1.5 text-xs text-white focus:border-blue-500 outline-none placeholder-gray-600 transition-colors"
            value="${safeModel}" placeholder="Model / S/N..."
            oninput="simSharedData.sensors[${idx}].model = this.value">`;
    }

    const currentModel = sensor.model || '';
    const isCustomModel = currentModel && !hardware.includes(currentModel);

    if (isCustomModel) {
        return `<div class="flex gap-1">
            <input type="text"
                id="sim-custom-model-${idx}"
                class="flex-1 bg-gray-900 border border-gray-600 rounded-lg px-3 py-1.5 text-xs text-white focus:border-blue-500 outline-none placeholder-gray-600 transition-colors"
                value="${safeModel}" placeholder="Custom model / S/N..."
                oninput="simSharedData.sensors[${idx}].model = this.value">
            <button type="button" title="Back to preset list"
                onclick="simSharedData.sensors[${idx}].model=''; renderSimContent();"
                class="px-2 text-xs text-gray-400 hover:text-white border border-gray-600 rounded">↺</button>
        </div>`;
    }

    const options = hardware.map(h => {
        const sel = h === currentModel ? ' selected' : '';
        const safe = escapeHtml(h);
        return `<option value="${safe}"${sel}>${safe}</option>`;
    }).join('');

    return `<select
        class="w-full bg-gray-900 border border-gray-600 rounded-lg px-3 py-1.5 text-xs text-white focus:border-[#459fd9] outline-none transition-colors"
        onchange="simModelSelectChange(${idx}, this.value)">
        <option value=""${currentModel ? '' : ' selected'}>Select model...</option>
        ${options}
        <option value="__custom__">Custom...</option>
    </select>`;
}

function simModelSelectChange(idx, value) {
    if (!simSharedData.sensors[idx]) return;
    if (value === '__custom__') {
        simSharedData.sensors[idx].model = ' ';
        renderSimContent();
        setTimeout(() => document.getElementById(`sim-custom-model-${idx}`)?.focus(), 50);
    } else {
        simSharedData.sensors[idx].model = value;
        renderSimContent();
    }
}

function buildToggleCell(sensor, idx, field, activeColor) {
    const active = sensor[field];
    const color  = active ? activeColor : '#4b5563';
    const tx     = active ? 'translateX(20px)' : 'translateX(0)';

    return `<div style="display:inline-flex;align-items:center;justify-content:center;cursor:pointer;"
                data-idx="${idx}" data-field="${field}"
                onclick="simToggleField(this)">
        <div style="width:40px;height:20px;border-radius:9999px;background:${color};position:relative;transition:background 0.2s;pointer-events:none;">
            <div style="position:absolute;top:2px;left:2px;width:16px;height:16px;background:white;border-radius:50%;transform:${tx};transition:transform 0.2s;"></div>
        </div>
    </div>`;
}

function simToggleField(el) {
    const idx   = parseInt(el.dataset.idx);
    const field = el.dataset.field;
    const arr   = simSharedData.sensors;
    if (!arr || !arr[idx]) return;

    const newValue = !arr[idx][field];
    arr[idx][field] = newValue;

    const track = el.firstElementChild;
    const dot   = track?.firstElementChild;
    const color = field === 'calibrated' ? '#f39124' : '#459fd9';
    if (track) track.style.background = newValue ? color : '#4b5563';
    if (dot)   dot.style.transform    = newValue ? 'translateX(20px)' : 'translateX(0)';
}

// ---- PER-ROV FIXED SENSOR HELPERS ----

function buildFixedSensorRow(sensor, rovNum, fixedIdx) {
    const safeName = escapeHtml(sensor.name);
    return `
        <tr class="border-b border-gray-700/30 hover:bg-gray-700/20 transition-colors">
            <td class="px-4 py-3 text-xs text-gray-600 font-mono">${fixedIdx + 1}</td>
            <td class="px-4 py-3">
                <div class="flex items-center gap-2">
                    <span class="text-sm font-medium text-gray-200">${safeName}</span>
                    <span style="font-size:9px;font-weight:600;color:#6b7280">${sensor.category}</span>
                </div>
            </td>
            <td class="px-4 py-3">${buildRovModelCell(sensor, rovNum, fixedIdx)}</td>
            <td class="px-4 py-3 text-center">
                <input type="number" min="1"
                    class="w-14 bg-gray-900 border border-gray-600 rounded-lg px-2 py-1 text-xs text-center text-white focus:border-[#459fd9] outline-none transition-colors"
                    value="${sensor.qty || 1}"
                    oninput="simSharedData.rovSensors[${rovNum}][${fixedIdx}].qty = parseInt(this.value) || 1">
            </td>
            <td class="px-4 py-3 text-center">${buildRovToggleCell(sensor, rovNum, fixedIdx, 'calibrated', '#f39124')}</td>
            <td class="px-4 py-3 text-center">${buildRovToggleCell(sensor, rovNum, fixedIdx, 'tested', '#459fd9')}</td>
        </tr>`;
}

function buildRovModelCell(sensor, rovNum, fixedIdx) {
    const hardware = SENSOR_HARDWARE[sensor.name] || [];
    const safeModel = escapeHtml(sensor.model || '');
    if (hardware.length === 0) {
        return `<input type="text"
            class="w-full bg-gray-900 border border-gray-600 rounded-lg px-3 py-1.5 text-xs text-white focus:border-blue-500 outline-none placeholder-gray-600 transition-colors"
            value="${safeModel}" placeholder="Model / S/N..."
            oninput="simSharedData.rovSensors[${rovNum}][${fixedIdx}].model = this.value">`;
    }
    const opts = hardware.map(m =>
        `<option value="${escapeHtml(m)}" ${m === sensor.model ? 'selected' : ''}>${escapeHtml(m)}</option>`
    ).join('');
    return `<select
        class="w-full bg-gray-900 border border-gray-600 rounded-lg px-3 py-1.5 text-xs text-white focus:border-[#459fd9] outline-none transition-colors"
        onchange="simSharedData.rovSensors[${rovNum}][${fixedIdx}].model = this.value">
        <option value="">Select model...</option>
        ${opts}
    </select>`;
}

function buildRovToggleCell(sensor, rovNum, fixedIdx, field, activeColor) {
    const active = sensor[field];
    const color  = active ? activeColor : '#4b5563';
    const tx     = active ? 'translateX(20px)' : 'translateX(0)';
    return `<div style="display:inline-flex;align-items:center;justify-content:center;cursor:pointer;"
                data-rovnum="${rovNum}" data-fixedidx="${fixedIdx}" data-field="${field}"
                onclick="simToggleRovField(this)">
        <div style="width:40px;height:20px;border-radius:9999px;background:${color};position:relative;transition:background 0.2s;pointer-events:none;">
            <div style="position:absolute;top:2px;left:2px;width:16px;height:16px;background:white;border-radius:50%;transform:${tx};transition:transform 0.2s;"></div>
        </div>
    </div>`;
}

function simToggleRovField(el) {
    const rovNum   = parseInt(el.dataset.rovnum);
    const fixedIdx = parseInt(el.dataset.fixedidx);
    const field    = el.dataset.field;
    const arr = simSharedData.rovSensors[rovNum];
    if (!arr || !arr[fixedIdx]) return;
    const newValue = !arr[fixedIdx][field];
    arr[fixedIdx][field] = newValue;
    const color = field === 'calibrated' ? '#f39124' : '#459fd9';
    const track = el.firstElementChild;
    const dot   = track?.firstElementChild;
    if (track) track.style.background = newValue ? color : '#4b5563';
    if (dot)   dot.style.transform    = newValue ? 'translateX(20px)' : 'translateX(0)';
}

function simToggleOptional(idx, clickedEl) {
    const arr = simSharedData.sensors;
    if (!arr || !arr[idx]) return;

    const included = !arr[idx].included;
    arr[idx].included = included;

    // 1. Animate the include toggle track (no checkbox → no scroll)
    const track = clickedEl.firstElementChild;
    const dot   = track?.firstElementChild;
    if (track) track.style.background = included ? '#459fd9' : '#4b5563';
    if (dot)   dot.style.transform    = included ? 'translateX(20px)' : 'translateX(0)';

    // 2. Find the row by data attribute
    const row = document.querySelector(`#sim-content-area tr[data-opt-idx="${idx}"]`);
    if (!row) { renderSimContent(); return; }

    const sensor = arr[idx];

    // 3. Row dim
    if (included) row.classList.remove('opacity-40');
    else          row.classList.add('opacity-40');

    // 4. Model cell
    row.querySelector('.opt-model-cell').innerHTML =
        included ? buildModelCell(sensor, idx) : '<span class="text-gray-600 text-xs">\u2014</span>';

    // 5. QTY cell
    row.querySelector('.opt-qty-cell').innerHTML = included
        ? `<input type="number" min="1"
               class="w-14 bg-gray-900/50 border border-gray-700/50 rounded-md px-2 py-1.5 text-xs text-center text-white focus:border-[#459fd9] outline-none transition-colors"
               value="${sensor.qty || 1}"
               oninput="simSharedData.sensors[${idx}].qty = parseInt(this.value) || 1">`
        : '<span class="text-gray-600 text-xs">\u2014</span>';

    // 6. Calibrated cell
    row.querySelector('.opt-cal-cell').innerHTML =
        included ? buildToggleCell(sensor, idx, 'calibrated', '#f39124') : '\u2014';

    // 7. Tested cell
    row.querySelector('.opt-test-cell').innerHTML =
        included ? buildToggleCell(sensor, idx, 'tested', '#459fd9') : '\u2014';

    // 8. Assignment cell
    const assCell = row.querySelector('.opt-ass-cell');
    if (assCell) {
        if (included) {
            const rovOpts = ['Shared', ...[...simSelectedROVs.keys()].sort((a,b)=>a-b).map(n=>`MS-${n}`)]
                .map(o => `<option value="${escapeHtml(o)}"${(sensor.rovAssignment||'Shared')===o?' selected':''}>${escapeHtml(o)}</option>`).join('');
            assCell.innerHTML = `<select class="w-full bg-gray-900/50 border border-gray-700/50 rounded-md px-2 py-1.5 text-xs outline-none focus:border-[#459fd9] transition-colors" onchange="simSharedData.sensors[${idx}].rovAssignment=this.value">${rovOpts}</select>`;
        } else {
            assCell.innerHTML = '<span class="text-gray-600 text-xs">\u2014</span>';
        }
    }
}

function simUpdateToggle(rovNum, idx, field, value, checkboxEl) {
    // Legacy fallback — new toggles use simToggleField
    const arr = simROVData[rovNum]?.sensors;
    if (!arr || !arr[idx]) return;
    arr[idx][field] = value;
    renderSimContent();
}

function addSensorToROV() {
    const input = document.getElementById('sim-sensor-input');
    const name  = input?.value.trim();
    if (!name) return;

    if (!simSharedData.sensors) simSharedData.sensors = [];

    if (name.length > 80) {
        showToast('Sensor name is too long (max 80 characters).', 'warn');
        input.style.borderColor = '#ef4444';
        setTimeout(() => input.style.borderColor = '', 1500);
        return;
    }

    const sensors = simSharedData.sensors;
    if (sensors.find(s => s.name.toLowerCase() === name.toLowerCase())) {
        // Duplicate — flash red and toast
        input.style.borderColor = '#ef4444';
        setTimeout(() => input.style.borderColor = '', 1500);
        showToast(`"${name}" is already in this MiniSpector's list.`, 'warn');
        return;
    }
    sensors.push({
        name, note: '', status: 'custom', included: true,
        model: '', serialNo: '', qty: 1, calibrated: false, tested: false,
        custom: true, rovAssignment: 'Shared'
    });
    input.value = '';
    renderSimContent();
    scheduleSimSync();
    setTimeout(() => document.getElementById('sim-sensor-input')?.focus(), 50);
}

function removeSensorFromROV(idx) {
    if (!Array.isArray(simSharedData.sensors)) return;
    if (idx < 0 || idx >= simSharedData.sensors.length) return;
    simSharedData.sensors.splice(idx, 1);
    renderSimContent();
    scheduleSimSync();
}

// ============================================================
// SYSTEM ARCHITECTURE TAB
// ============================================================
const DEFAULT_SYSTEM_IPS = [
    { category: 'MiniSpector Server',          name: 'MiniSpector Server',                      ip: '', port: '', hasIP: true,  hasPort: true  },
    { category: 'Piloting PC',                 name: 'Tablet IP / Piloting PC',                 ip: '', port: '', hasIP: true,  hasPort: false },
    { category: 'MiniSpector Clients',         name: 'Motion',                                  ip: '', port: '', hasIP: true,  hasPort: false },
    { category: 'MiniSpector Clients',         name: 'PIU',                                     ip: '', port: '', hasIP: true,  hasPort: false },
    { category: 'MiniSpector Clients',         name: 'Serial HUB',                              ip: '', port: '', hasIP: true,  hasPort: false },
    { category: 'Hardware Clients (ODS)',       name: 'HCU-Motion',                              ip: '', port: '', hasIP: true,  hasPort: false },
    { category: 'Hardware Clients (ODS)',       name: 'HCU-PIU',                                 ip: '', port: '', hasIP: true,  hasPort: false },
    { category: 'Hardware Clients (ODS)',       name: 'Ethernet to Serial',                      ip: '', port: '', hasIP: true,  hasPort: false },
    { category: 'Hardware Clients (ODS)',       name: 'Power Supply Status (LIM)',               ip: '', port: '', hasIP: true,  hasPort: false },
    { category: 'MiniSpector Cameras',         name: 'Rear Camera (MS-1 only)',                 ip: '', port: '', hasIP: true,  hasPort: false },
    { category: 'MiniSpector Cameras',         name: 'PTZ Camera',                              ip: '', port: '', hasIP: true,  hasPort: true  },
    { category: 'MiniSpector Cameras',         name: 'Right PRC Camera',                        ip: '', port: '', hasIP: true,  hasPort: false },
    { category: 'MiniSpector Cameras',         name: 'Left PRC Camera',                         ip: '', port: '', hasIP: true,  hasPort: false },
    { category: 'Other Clients',               name: 'On-Deck Station Fiber Ethernet Switch',   ip: '', port: '', hasIP: true,  hasPort: false },
    { category: 'Other Clients',               name: 'MiniSpector Fiber Switch',                ip: '', port: '', hasIP: true,  hasPort: false },
    { category: 'Other Clients',               name: 'MiniSpector Pod Moxa IP',                 ip: '', port: '', hasIP: true,  hasPort: false },
    { category: 'Other Clients',               name: 'Decoder Box',                             ip: '', port: '', hasIP: true,  hasPort: false },
    { category: 'Other Clients',               name: 'Wi-Fi Module',                            ip: '', port: '', hasIP: true,  hasPort: false },
    { category: 'External ODS Solutions',      name: 'External Ethernet to Serial Solution',    ip: '', port: '', hasIP: true,  hasPort: false },
    { category: 'External ODS Solutions',      name: 'External HCU-Motion Solution',            ip: '', port: '', hasIP: true,  hasPort: false },
    { category: 'External ODS Solutions',      name: 'External HCU-PIU Solution',               ip: '', port: '', hasIP: true,  hasPort: false },
    { category: 'External ODS Solutions',      name: 'External ODS Fiber Ethernet Solution',    ip: '', port: '', hasIP: true,  hasPort: false },
    { category: 'RovLog Bridge',               name: 'RovLog Bridge DMS',                       ip: '', port: '', hasIP: false, hasPort: true  },
    { category: 'RovLog Bridge',               name: 'RovLog Bridge Depth',                     ip: '', port: '', hasIP: false, hasPort: true  },
];

function renderSysArchContent(area) {
    if (!simSharedData.sysarch) {
        simSharedData.sysarch = { diagramDataUrl: null, machines: [], equipment: [], simStatus: [], deliverables: {}, systemIPs: DEFAULT_SYSTEM_IPS.map(p => ({ ...p })) };
    }
    const sa = simSharedData.sysarch;
    if (!sa.simStatus)    sa.simStatus    = [];
    if (!sa.deliverables) sa.deliverables = {};
    if (!sa.systemIPs)  sa.systemIPs  = DEFAULT_SYSTEM_IPS.map(p => ({ ...p }));

    const del = sa.deliverables;

    // ---- Badge helpers ----
    const activeBadge = (val, i) => {
        const ok = (val || 'Activated') === 'Activated';
        const style = ok
            ? 'background:rgba(243,145,36,0.15);color:#f39124;border:1px solid rgba(243,145,36,0.3)'
            : 'background:rgba(234,179,8,0.15);color:#facc15;border:1px solid rgba(234,179,8,0.3)';
        return `<button onclick="cycleActivated(${i})" title="Click to toggle" style="font-size:10px;font-weight:700;padding:3px 10px;border-radius:4px;cursor:pointer;${style}">${ok ? 'Activated' : 'Need Activation'}</button>`;
    };
    const simStatBadge = (val, i) => {
        const styles = {
            Passed:  'background:rgba(243,145,36,0.15);color:#f39124;border:1px solid rgba(243,145,36,0.3)',
            Warning: 'background:rgba(234,179,8,0.15);color:#facc15;border:1px solid rgba(234,179,8,0.3)',
            Failed:  'background:rgba(239,68,68,0.15);color:#f87171;border:1px solid rgba(239,68,68,0.3)'
        };
        const v = val || 'Passed';
        return `<button onclick="cycleSimStatus(${i})" title="Click to cycle" style="font-size:10px;font-weight:700;padding:3px 10px;border-radius:4px;cursor:pointer;${styles[v] || styles.Passed}">${v}</button>`;
    };

    // ---- Machine rows ----
    const machineAddRow = `<tr onclick="addSysArchMachine()" class="cursor-pointer group" style="border-top:1px dashed rgba(55,65,81,0.8)">
        <td colspan="8" class="px-4 py-3 text-center">
            <div class="flex items-center justify-center gap-2 text-gray-600 group-hover:text-orange-400 transition-colors">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                <span class="text-xs font-medium">Add machine</span>
            </div>
        </td>
    </tr>`;
    const machineRows = sa.machines.length === 0
        ? `<tr><td colspan="8" class="p-5"><button onclick="addSysArchMachine()" class="w-full py-10 flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-gray-700 transition-all group" onmouseover="this.style.borderColor='rgba(243,145,36,0.45)';this.style.background='rgba(243,145,36,0.04)'" onmouseout="this.style.borderColor='';this.style.background=''">
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center" style="background:rgba(243,145,36,0.1)">
                <svg class="w-7 h-7" style="color:#f39124" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <div>
                <p class="text-sm font-semibold text-gray-400">No machines added yet</p>
                <p class="text-xs text-gray-600 mt-0.5">Click to add your first machine</p>
            </div>
        </button></td></tr>`
        : sa.machines.map((m, i) => `
        <tr class="hover:bg-gray-700/30 transition-colors group">
            <td class="px-4 py-3 text-gray-400 text-xs font-mono">${i + 1}</td>
            <td class="px-4 py-3">
                <input type="text" list="dl-machine-names" value="${escapeHtml(m.name || '')}" placeholder="Select or type..."
                    class="w-full bg-transparent border-b border-gray-700 focus:border-orange-400 outline-none text-sm text-white font-semibold py-1 transition-colors placeholder-gray-600"
                    onchange="simSharedData.sysarch.machines[${i}].name=this.value">
            </td>
            <td class="px-4 py-3">
                <input type="text" value="${escapeHtml(m.ip || m.sn || '')}" placeholder="172.168.x.x"
                    class="w-full bg-transparent border-b border-gray-700 focus:border-[#459fd9] outline-none text-sm text-gray-300 font-mono py-1 transition-colors placeholder-gray-600"
                    onchange="simSharedData.sysarch.machines[${i}].ip=this.value">
            </td>
            <td class="px-4 py-3">
                <input type="text" list="dl-software" value="${escapeHtml(m.software || '')}" placeholder="Select or type..."
                    class="w-full bg-transparent border-b border-gray-700 focus:border-orange-400 outline-none text-sm text-gray-200 py-1 transition-colors placeholder-gray-600"
                    onchange="simSharedData.sysarch.machines[${i}].software=this.value">
            </td>
            <td class="px-4 py-3 text-center">
                <input type="text" value="${escapeHtml(m.version || '')}" placeholder="v0.0.0"
                    class="w-20 bg-transparent border-b border-gray-700 focus:border-orange-400 outline-none text-sm text-gray-200 py-1 text-center transition-colors placeholder-gray-600"
                    onchange="simSharedData.sysarch.machines[${i}].version=this.value">
            </td>
            <td class="px-4 py-3 text-center">${activeBadge(m.activated, i)}</td>
            <td class="px-4 py-3">
                <input type="text" value="${escapeHtml(m.comments || m.role || '')}" placeholder="Comments..."
                    class="w-full bg-transparent border-b border-gray-700 focus:border-gray-500 outline-none text-sm text-gray-400 py-1 transition-colors placeholder-gray-600"
                    onchange="simSharedData.sysarch.machines[${i}].comments=this.value">
            </td>
            <td class="px-4 py-3 text-center">
                <button onclick="deleteSysArchMachine(${i})" class="opacity-0 group-hover:opacity-100 text-gray-600 hover:text-red-400 transition-all text-xl font-bold leading-none">×</button>
            </td>
        </tr>`).join('') + machineAddRow;

    // ---- Equipment rows ----
    const totalQty = sa.equipment.reduce((s, e) => s + (e.qty || 0), 0);
    const needsRepairCount = 0; // condition column removed
    const unassignedCount  = sa.equipment.filter(e => !e.rovAssignment || e.rovAssignment === 'Shared').length;
    const assignedCount    = sa.equipment.length - unassignedCount;
    const rovOptions = ['Shared', ...[...simSelectedROVs.keys()].sort((a,b)=>a-b).map(n=>`MS-${n}`)];
    const condColors  = { 'New':'#34d399','Good':'#f39124','Needs Repair':'#fbbf24','Damaged':'#f87171','Unknown':'#6b7280' };
    const batchColors = { 'Sept 2025':'#818cf8','Jan 2026':'#38bdf8','Feb 2026':'#34d399','April 2026':'#f39124','On Site':'#a78bfa','Other':'#6b7280' };

    const equipAddRow = `<tr onclick="addSysArchEquipment()" class="cursor-pointer group" style="border-top:1px dashed rgba(55,65,81,0.8)">
        <td colspan="9" class="px-4 py-3 text-center">
            <div class="flex items-center justify-center gap-2 text-gray-600 group-hover:text-[#459fd9] transition-colors">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                <span class="text-xs font-medium">Add item</span>
            </div>
        </td>
    </tr>`;
    const equipRows = sa.equipment.length === 0
        ? `<tr><td colspan="9" class="p-5"><div class="flex flex-col items-center justify-center gap-4 py-10">
            <div class="flex gap-3 flex-wrap justify-center">
                <button onclick="addSysArchEquipment()" class="px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:scale-105" style="background:rgba(69,159,217,0.85)">+ Add Item</button>
                <button onclick="loadPackingListFromExcel()" class="px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:scale-105 flex items-center gap-2" style="background:rgba(69,159,217,0.85)">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"/></svg>
                    Load from Excel
                </button>
            </div>
        </div></td></tr>`
        : sa.equipment.map((e, i) => {
            const bgE       = i%2===0?'rgba(17,24,39,0.45)':'rgba(17,24,39,0.15)';
            const catColor  = EQUIP_CAT_COLORS[e.category] || '#6b7280';
            const rovColor  = e.rovAssignment && e.rovAssignment !== 'Shared' ? '#f39124' : '#6b7280';
            const isCustom  = e.category && !EQUIP_CATEGORIES.includes(e.category);
            const catIsOther= e.category === '__other__';
            const catSelVal = (catIsOther || isCustom) ? 'Other' : (e.category || '');
            const catTextVal= isCustom ? e.category : '';
            return `
        <tr class="group" style="background:${bgE};border-top:1px solid rgba(55,65,81,0.25)">
            <td class="px-3 py-2 text-gray-500 text-[10px] text-center font-mono">${i + 1}</td>
            <td class="px-2 py-2">
                <input type="text" list="dl-hw-dates-topo" value="${escapeHtml(e.batch||'')}" placeholder="Date..."
                    class="w-full bg-gray-900/60 border border-gray-700/80 rounded-md px-2 py-1 text-[10px] text-gray-300 focus:border-[#459fd9] outline-none placeholder-gray-600"
                    oninput="simSharedData.sysarch.equipment[${i}].batch=this.value;scheduleSimSync()">
            </td>
            <td class="px-2 py-2">
                <select class="w-full bg-gray-900/80 border border-gray-700 rounded-md text-[10px] font-bold py-1 px-1.5 outline-none focus:border-[#459fd9] cursor-pointer"
                    style="color:${catColor}"
                    onchange="simEquipCatChange(${i},this.value)">
                    <option value="">Category...</option>
                    ${EQUIP_CATEGORIES.map(c=>`<option value="${c}" style="color:#e5e7eb" ${catSelVal===c?'selected':''}>${c}</option>`).join('')}
                </select>
                ${(catIsOther||isCustom) ? `<input type="text" value="${escapeHtml(catTextVal)}" placeholder="Type category..."
                    class="w-full mt-1 bg-gray-900/60 border border-gray-700/80 rounded-md px-2 py-1 text-[10px] text-gray-200 focus:border-[#459fd9] outline-none placeholder-gray-600"
                    oninput="simSharedData.sysarch.equipment[${i}].category=this.value||'__other__';scheduleSimSync()">` : ''}
            </td>
            <td class="px-3 py-2">
                <input type="text" list="dl-hardware-items" value="${escapeHtml(e.item || '')}" placeholder="Description..."
                    class="w-full bg-transparent border-b border-gray-700 focus:border-[#459fd9] outline-none text-xs text-white font-medium py-1 transition-colors placeholder-gray-600"
                    oninput="simSharedData.sysarch.equipment[${i}].item=this.value">
            </td>
            <td class="px-2 py-2">
                <input type="text" value="${escapeHtml(e.serial || '')}" placeholder="S/N..."
                    class="w-full bg-gray-900/60 border border-gray-700/80 rounded-md px-2 py-1 text-[10px] text-[#459fd9] font-mono focus:border-[#459fd9] outline-none placeholder-gray-600"
                    oninput="simSharedData.sysarch.equipment[${i}].serial=this.value">
            </td>
            <td class="px-2 py-2 text-center">
                <input type="number" value="${e.qty ?? 1}" min="0"
                    class="w-14 text-center bg-gray-900/60 border border-gray-700/80 rounded-md text-xs text-white py-1 focus:border-orange-400 outline-none"
                    oninput="simSharedData.sysarch.equipment[${i}].qty=+this.value">
            </td>
            <td class="px-2 py-2">
                <select class="w-full bg-gray-900/80 border border-gray-700 rounded-md text-[10px] font-bold py-1 px-1.5 outline-none focus:border-orange-400 cursor-pointer"
                    style="color:${rovColor}"
                    onchange="simSharedData.sysarch.equipment[${i}].rovAssignment=this.value;renderSimContent()">
                    ${rovOptions.map(r=>`<option value="${r}" style="color:${r==='Shared'?'#6b7280':'#f39124'}" ${(e.rovAssignment||'Shared')===r?'selected':''}>${r}</option>`).join('')}
                </select>
            </td>
            <td class="px-2 py-2">
                <input type="text" value="${escapeHtml(e.comments || e.notes || '')}" placeholder="Notes..."
                    class="w-full bg-transparent border-b border-gray-700 focus:border-gray-500 outline-none text-[10px] text-gray-400 py-1 transition-colors placeholder-gray-600"
                    oninput="simSharedData.sysarch.equipment[${i}].comments=this.value">
            </td>
            <td class="px-2 py-2 text-center">
                <button onclick="deleteSysArchEquipment(${i})" class="opacity-0 group-hover:opacity-100 text-gray-600 hover:text-red-400 transition-all text-xl font-bold leading-none">×</button>
            </td>
        </tr>`}).join('') + equipAddRow;

    // ---- Simulation Status rows ----
    const passedCount = sa.simStatus.filter(s => s.status === 'Passed').length;
    const statusAddRow = `<tr onclick="addSimStatus()" class="cursor-pointer group" style="border-top:1px dashed rgba(55,65,81,0.8)">
        <td colspan="8" class="px-4 py-3 text-center">
            <div class="flex items-center justify-center gap-2 text-gray-600 group-hover:text-[#f39124] transition-colors">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                <span class="text-xs font-medium">Add test entry</span>
            </div>
        </td>
    </tr>`;
    const statusRows = sa.simStatus.length === 0
        ? `<tr><td colspan="8" class="p-5"><button onclick="addSimStatus()" class="w-full py-10 flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-gray-700 transition-all" onmouseover="this.style.borderColor='rgba(243,145,36,0.45)';this.style.background='rgba(243,145,36,0.04)'" onmouseout="this.style.borderColor='';this.style.background=''">
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center" style="background:rgba(243,145,36,0.1)">
                <svg class="w-7 h-7" style="color:#f39124" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
            </div>
            <div>
                <p class="text-sm font-semibold text-gray-400">No test entries yet</p>
                <p class="text-xs text-gray-600 mt-0.5">Click to log your first simulation test</p>
            </div>
        </button></td></tr>`
        : sa.simStatus.map((s, i) => `
        <tr class="hover:bg-gray-700/30 transition-colors group">
            <td class="px-4 py-3 text-gray-400 text-xs font-mono">${i + 1}</td>
            <td class="px-4 py-3">
                <input type="text" value="${escapeHtml(s.machine || '')}" placeholder="Machine name..."
                    class="w-full bg-transparent border-b border-gray-700 focus:border-[#459fd9] outline-none text-sm text-white py-1 transition-colors placeholder-gray-600"
                    onchange="simSharedData.sysarch.simStatus[${i}].machine=this.value">
            </td>
            <td class="px-4 py-3">
                <input type="text" value="${escapeHtml(s.scenario || '')}" placeholder="e.g. Connection - Video..."
                    class="w-full bg-transparent border-b border-gray-700 focus:border-[#459fd9] outline-none text-sm text-gray-200 py-1 transition-colors placeholder-gray-600"
                    onchange="simSharedData.sysarch.simStatus[${i}].scenario=this.value">
            </td>
            <td class="px-4 py-3">
                <input type="text" value="${escapeHtml(s.expected || 'As requested')}" placeholder="Expected outcome..."
                    class="w-full bg-transparent border-b border-gray-700 focus:border-[#459fd9] outline-none text-sm text-gray-300 py-1 transition-colors placeholder-gray-600"
                    onchange="simSharedData.sysarch.simStatus[${i}].expected=this.value">
            </td>
            <td class="px-4 py-3 text-center">
                <div class="flex items-center gap-1 justify-center">
                    <input type="number" value="${s.completion || 0}" min="0" max="100"
                        class="w-14 text-center bg-gray-900/60 border border-gray-700 rounded-lg text-xs text-white py-1 focus:border-[#459fd9] outline-none"
                        onchange="simSharedData.sysarch.simStatus[${i}].completion=Math.min(100,Math.max(0,+this.value));renderSimContent()">
                    <span class="text-gray-500 text-xs">%</span>
                </div>
            </td>
            <td class="px-4 py-3 text-center">${simStatBadge(s.status, i)}</td>
            <td class="px-4 py-3">
                <input type="text" value="${escapeHtml(s.comments || '')}" placeholder="Comments..."
                    class="w-full bg-transparent border-b border-gray-700 focus:border-gray-500 outline-none text-sm text-gray-400 py-1 transition-colors placeholder-gray-600"
                    onchange="simSharedData.sysarch.simStatus[${i}].comments=this.value">
            </td>
            <td class="px-4 py-3 text-center">
                <button onclick="deleteSimStatus(${i})" class="opacity-0 group-hover:opacity-100 text-gray-600 hover:text-red-400 transition-all text-xl font-bold leading-none">×</button>
            </td>
        </tr>`).join('') + statusAddRow;

    // ---- Deliverables notes ----
    const delNoteRows = (del.notes || []).map((n, i) => `
        <div class="flex items-center gap-2 group">
            <span class="text-xs text-gray-500 font-bold min-w-[1.25rem]">${i + 1}.</span>
            <input type="text" value="${escapeHtml(n || '')}" placeholder="Note..."
                class="flex-1 bg-transparent border-b border-gray-700 focus:border-orange-400 outline-none text-sm text-gray-200 py-1 transition-colors placeholder-gray-600"
                onchange="simSharedData.sysarch.deliverables.notes[${i}]=this.value">
            <button onclick="deleteDelivNote(${i})" class="opacity-0 group-hover:opacity-100 text-gray-600 hover:text-red-400 text-base font-bold transition-all">×</button>
        </div>`).join('');

    // ---- Diagram section ----
    const diagramSection = sa.diagramDataUrl
        ? `<div class="relative group">
               <img src="${sa.diagramDataUrl}" alt="System Diagram" style="max-width:100%;border-radius:12px;border:1px solid #374151;display:block;margin:0 auto;">
               <label class="cursor-pointer absolute top-3 right-3 flex items-center gap-2 px-4 py-2 text-white text-xs font-bold rounded-xl shadow-lg transition-all opacity-0 group-hover:opacity-100" style="background:rgba(69,159,217,0.92)">
                   <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                   Replace Diagram
                   <input type="file" accept="image/*" class="hidden" onchange="handleSysArchDiagram(event)">
               </label>
           </div>`
        : `<label class="cursor-pointer flex flex-col items-center justify-center py-16 text-center border-2 border-dashed border-gray-700 rounded-2xl transition-all group" style="cursor:pointer" onmouseover="this.style.borderColor='rgba(69,159,217,0.5)';this.style.background='rgba(69,159,217,0.04)'" onmouseout="this.style.borderColor='';this.style.background=''">
               <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all" style="background:rgba(69,159,217,0.1)">
                   <svg class="w-8 h-8" style="color:#459fd9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                   </svg>
               </div>
               <p class="text-sm font-semibold text-gray-300">Upload System Diagram</p>
               <p class="text-xs text-gray-600 mt-1">Click anywhere here — PNG, JPG, or any image</p>
               <input type="file" accept="image/*" class="hidden" onchange="handleSysArchDiagram(event)">
           </label>`;

    const html = `
    <div class="max-w-6xl mx-auto pb-10 space-y-8">

        <!-- Datalists for autocomplete -->
        <datalist id="dl-machine-names">
            ${MACHINE_NAMES.map(n => `<option value="${escapeHtml(n)}">`).join('')}
        </datalist>
        <datalist id="dl-software">
            ${SOFTWARE_LIST.map(s => `<option value="${escapeHtml(s)}">`).join('')}
        </datalist>
        <datalist id="dl-hardware-items">
            ${HARDWARE_ITEMS.map(h => `<option value="${escapeHtml(h)}">`).join('')}
        </datalist>

        <!-- PAGE HEADER -->
        <div class="flex items-center justify-between">
            <div>
                <h3 class="text-2xl font-bold text-white tracking-tight">Topology</h3>
                <p class="text-gray-400 text-sm mt-0.5">Machines, hardware inventory, simulation results and deliverables.</p>
            </div>
            <div class="flex items-center gap-2">
                <div class="relative group">
                    <button onclick="collapseAllSysArch()" id="btn-collapse-all-sa"
                        class="w-9 h-9 flex items-center justify-center rounded-xl transition-all border border-gray-600 bg-gray-700 hover:bg-gray-600 hover:border-gray-500 text-gray-300 hover:text-white">
                        <svg id="collapse-all-sa-icon" class="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>
                        </svg>
                    </button>
                    <span id="collapse-all-sa-tooltip" class="absolute right-0 top-full mt-2 px-2.5 py-1 text-xs bg-gray-900 text-gray-100 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-gray-700/60 shadow-lg z-50">Collapse All</span>
                </div>
                <div class="relative group">
                    <button onclick="exportSysArchXLSX()"
                        class="w-9 h-9 flex items-center justify-center rounded-xl transition-all shadow hover:shadow-md hover:scale-105 text-white" style="background:#f39124">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                    </button>
                    <span class="absolute right-0 top-full mt-2 px-2.5 py-1 text-xs bg-gray-900 text-gray-100 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-gray-700/60 shadow-lg z-50">Export Excel (.xlsx)</span>
                </div>
            </div>
        </div>

        <!-- SECTION 1: DIAGRAM -->
        <div class="bg-gray-800/60 rounded-2xl border border-gray-700/60 overflow-hidden">
            <div class="flex items-center gap-3 px-6 py-4 border-b border-gray-700/60 bg-gray-900/30 cursor-pointer select-none" onclick="toggleSysArchSection('sa-diagram')">
                <svg id="sa-arrow-sa-diagram" class="w-3.5 h-3.5 text-gray-400 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                <h4 class="text-sm font-bold text-white uppercase tracking-widest">System Diagram</h4>
            </div>
            <div id="sa-body-sa-diagram" class="p-6">${diagramSection}</div>
        </div>

        <!-- SECTION 2: MACHINES -->
        <div class="bg-gray-800/60 rounded-2xl border border-gray-700/60 overflow-hidden">
            <div class="flex items-center gap-3 px-6 py-4 border-b border-gray-700/60 bg-gray-900/30 cursor-pointer select-none" onclick="toggleSysArchSection('sa-machines')">
                <svg id="sa-arrow-sa-machines" class="w-3.5 h-3.5 text-gray-400 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                <h4 class="text-sm font-bold text-white uppercase tracking-widest">Machines & Software</h4>
                <span class="text-xs text-gray-500">${sa.machines.length} units · ${sa.machines.filter(m=>(m.activated||'Activated')==='Activated').length} activated</span>
            </div>
            <div id="sa-body-sa-machines" class="overflow-x-auto">
                <table style="width:100%;table-layout:auto;border-collapse:collapse;">
                    <thead>
                        <tr style="background:linear-gradient(90deg,rgba(5,8,18,0.97),rgba(10,16,28,0.93));border-bottom:2px solid rgba(69,159,217,0.22);color:#5d7a96;">
                            <th class="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-widest w-8">#</th>
                            <th class="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Machine Name</th>
                            <th class="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">IP Address</th>
                            <th class="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Installed Software</th>
                            <th class="px-4 py-3 text-center text-xs font-bold text-gray-400 uppercase tracking-wider w-24">Version</th>
                            <th class="px-4 py-3 text-center text-xs font-bold text-gray-400 uppercase tracking-wider w-36">Activated</th>
                            <th class="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Comments</th>
                            <th class="px-4 py-3 w-10"></th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-700/50">${machineRows}</tbody>
                </table>
            </div>
        </div>

        <!-- SECTION 3: SYSTEM IPs -->
        <div class="bg-gray-800/60 rounded-2xl border border-gray-700/60 overflow-hidden">
            <div class="flex items-center justify-between px-6 py-4 border-b border-gray-700/60 bg-gray-900/30 cursor-pointer select-none" onclick="toggleSysArchSection('sa-sysips')">
                <div class="flex items-center gap-3">
                    <svg id="sa-arrow-sa-sysips" class="w-3.5 h-3.5 text-gray-400 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                    <h4 class="text-sm font-bold text-white uppercase tracking-widest">System IPs</h4>
                    <span class="text-xs text-gray-500">${sa.systemIPs.length} devices</span>
                </div>
            </div>
            <div id="sa-body-sa-sysips" class="overflow-x-auto">
                <table style="width:100%;table-layout:auto;border-collapse:collapse;">
                    <thead>
                        <tr style="background:linear-gradient(90deg,rgba(5,8,18,0.97),rgba(10,16,28,0.93));border-bottom:2px solid rgba(69,159,217,0.22);color:#5d7a96;">
                            <th class="px-4 py-2 text-left text-[10px] font-bold uppercase tracking-widest">Device</th>
                            <th class="px-4 py-2 text-center text-xs font-bold text-gray-400 uppercase tracking-wider w-44">IP Address</th>
                            <th class="px-4 py-2 text-center text-xs font-bold text-gray-400 uppercase tracking-wider w-28">Port</th>
                            <th class="px-4 py-2 w-8"></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${sa.systemIPs.length === 0
                            ? `<tr><td colspan="4" class="px-4 py-10 text-center text-gray-600 text-sm">All entries removed.</td></tr>`
                            : (() => {
                                let lastCat = null;
                                return sa.systemIPs.map((dev, i) => {
                                    let catRow = '';
                                    if (dev.category !== lastCat) {
                                        lastCat = dev.category;
                                        const catId = 'sysip-' + dev.category.replace(/[^a-z0-9]/gi, '-').toLowerCase();
                                        catRow = `<tr style="background:rgba(17,24,39,0.6);cursor:pointer;" onclick="toggleSystemIPGroup('${catId}')">
                                            <td colspan="4" class="px-4 py-2">
                                                <div class="flex items-center gap-2">
                                                    <svg id="sysip-arrow-${catId}" style="width:10px;height:10px;color:#459fd9;transition:transform 0.2s;transform:rotate(-90deg)" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                                                    <span style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#459fd9">${escapeHtml(dev.category)}</span>
                                                </div>
                                            </td>
                                        </tr>`;
                                    }
                                    const catId = 'sysip-' + dev.category.replace(/[^a-z0-9]/gi, '-').toLowerCase();
                                    const hasIP   = dev.hasIP   !== false;
                                    const hasPort = dev.hasPort !== false;
                                    const ipCell   = hasIP   ? `<input type="text" value="${escapeHtml(dev.ip||'')}" placeholder="0.0.0.0" class="w-full bg-transparent border-b border-gray-700 focus:border-[#459fd9] outline-none text-xs text-center text-gray-300 font-mono py-0.5 transition-colors placeholder-gray-600" onchange="simSharedData.sysarch.systemIPs[${i}].ip=this.value">` : `<span class="text-gray-600 text-xs">—</span>`;
                                    const portCell = hasPort ? `<input type="text" value="${escapeHtml(dev.port||'')}" placeholder="00000" class="w-full bg-transparent border-b border-gray-700 focus:border-[#459fd9] outline-none text-xs text-center text-gray-300 font-mono py-0.5 transition-colors placeholder-gray-600" onchange="simSharedData.sysarch.systemIPs[${i}].port=this.value">` : `<span class="text-gray-600 text-xs">—</span>`;
                                    return catRow + `
                                    <tr class="hover:bg-gray-700/20 transition-colors group hidden" data-sysip-cat="${catId}" style="border-top:1px solid rgba(55,65,81,0.3)">
                                        <td class="px-4 py-1.5">
                                            <span class="text-xs text-gray-300">${escapeHtml(dev.name)}</span>
                                        </td>
                                        <td class="px-4 py-1.5 text-center">${ipCell}</td>
                                        <td class="px-4 py-1.5 text-center">${portCell}</td>
                                        <td class="px-3 py-1.5 text-center">
                                            <button onclick="deleteSystemIP(${i})" class="opacity-0 group-hover:opacity-100 text-gray-600 hover:text-red-400 transition-all text-base font-bold leading-none">×</button>
                                        </td>
                                    </tr>`;
                                }).join('');
                              })()}
                    </tbody>
                </table>
            </div>
        </div>

        <!-- SECTION 4: HARDWARE & CONSUMABLES -->
        <div class="bg-gray-800/60 rounded-2xl border border-gray-700/60 overflow-hidden">
            <div class="flex items-center justify-between px-6 py-4 border-b border-gray-700/60 bg-gray-900/30 cursor-pointer select-none" onclick="toggleSysArchSection('sa-equipment')">
                <div class="flex items-center gap-3">
                    <svg id="sa-arrow-sa-equipment" class="w-3.5 h-3.5 text-gray-400 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                    <h4 class="text-sm font-bold text-white uppercase tracking-widest">Hardware &amp; Consumables</h4>
                    <span class="text-xs text-gray-500">${sa.equipment.length} items · ${totalQty} units total</span>

                </div>
                <button onclick="event.stopPropagation();loadPackingListFromExcel()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold text-white transition-all hover:scale-105 shrink-0" style="background:rgba(243,145,36,0.8)">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"/></svg>
                    Load Packing List
                </button>
            </div>
            ${sa.equipment.length > 0 ? `
            <div class="px-6 py-3 border-b border-gray-700/40 flex flex-wrap items-center gap-3" style="background:rgba(17,24,39,0.4)">
                <span class="text-[9px] font-bold text-gray-500 uppercase tracking-widest">ROV:</span>
                <span class="text-[9px] font-bold px-2 py-0.5 rounded-full" style="background:rgba(243,145,36,0.15);color:#f39124;border:1px solid rgba(243,145,36,0.3)">${assignedCount} assigned</span>
                <span class="text-[9px] font-bold px-2 py-0.5 rounded-full" style="background:rgba(107,114,128,0.15);color:#6b7280;border:1px solid rgba(107,114,128,0.3)">${unassignedCount} shared</span>
                <datalist id="dl-hw-dates-topo">${[...new Set(sa.equipment.map(eq=>eq.batch||'').filter(Boolean))].map(d=>`<option value="${d}">`).join('')}</datalist>
            </div>` : ''}
            <div id="sa-body-sa-equipment" class="overflow-x-auto">
                <table style="width:100%;table-layout:auto;border-collapse:collapse;min-width:900px;">
                    <thead>
                        <tr style="background:linear-gradient(90deg,rgba(5,8,18,0.97),rgba(10,16,28,0.93));border-bottom:2px solid rgba(69,159,217,0.22);color:#5d7a96;">
                            <th class="px-3 py-2.5 text-center text-[10px] font-bold uppercase tracking-widest w-8">#</th>
                            <th class="px-2 py-2.5 text-left text-[10px] font-bold uppercase tracking-widest w-28">Date</th>
                            <th class="px-2 py-2.5 text-left text-[9px] font-bold text-gray-400 uppercase tracking-wider w-36">Category</th>
                            <th class="px-3 py-2.5 text-left text-[9px] font-bold text-gray-400 uppercase tracking-wider">Description</th>
                            <th class="px-2 py-2.5 text-left text-[9px] font-bold text-gray-400 uppercase tracking-wider w-32">Serial No.</th>
                            <th class="px-2 py-2.5 text-center text-[9px] font-bold text-gray-400 uppercase tracking-wider w-16">Qty</th>
                            <th class="px-2 py-2.5 text-left text-[9px] font-bold text-gray-400 uppercase tracking-wider w-24">ROV</th>
                            <th class="px-2 py-2.5 text-left text-[9px] font-bold text-gray-400 uppercase tracking-wider">Notes</th>
                            <th class="px-2 py-2.5 w-8"></th>
                        </tr>
                    </thead>
                    <tbody>${equipRows}</tbody>
                    <tfoot>
                        <tr style="background:rgba(55,65,81,0.3);">
                            <td colspan="5" class="px-3 py-2 text-[10px] font-bold text-gray-400">TOTALS — ${sa.equipment.length} line items</td>
                            <td class="px-2 py-2 text-center text-[10px] font-bold text-white">${totalQty}</td>
                            <td class="px-2 py-2 text-[10px] text-gray-500">${assignedCount} assigned</td>
                            <td colspan="2"></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>

        <!-- SECTION 5: SIMULATION STATUS -->
        <div class="bg-gray-800/60 rounded-2xl border border-gray-700/60 overflow-hidden">
            <div class="flex items-center gap-3 px-6 py-4 border-b border-gray-700/60 bg-gray-900/30 cursor-pointer select-none" onclick="toggleSysArchSection('sa-simstatus')">
                <svg id="sa-arrow-sa-simstatus" class="w-3.5 h-3.5 text-gray-400 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                <h4 class="text-sm font-bold text-white uppercase tracking-widest">Simulation Status</h4>
                <span class="text-xs text-gray-500">${sa.simStatus.length} tests · ${passedCount} passed</span>
            </div>
            <div id="sa-body-sa-simstatus" class="overflow-x-auto">
                <table style="width:100%;table-layout:auto;border-collapse:collapse;">
                    <thead>
                        <tr style="background:linear-gradient(90deg,rgba(5,8,18,0.97),rgba(10,16,28,0.93));border-bottom:2px solid rgba(69,159,217,0.22);color:#5d7a96;">
                            <th class="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-widest w-8">#</th>
                            <th class="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Machine Name</th>
                            <th class="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Testing Scenario</th>
                            <th class="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Expected Outcome</th>
                            <th class="px-4 py-3 text-center text-xs font-bold text-gray-400 uppercase tracking-wider w-24">Completion</th>
                            <th class="px-4 py-3 text-center text-xs font-bold text-gray-400 uppercase tracking-wider w-28">Status</th>
                            <th class="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Comments</th>
                            <th class="px-4 py-3 w-10"></th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-700/50">${statusRows}</tbody>
                </table>
            </div>
        </div>

        <!-- SECTION 6: DELIVERABLES -->
        <div class="bg-gray-800/60 rounded-2xl border border-gray-700/60 overflow-hidden">
            <div class="flex items-center gap-3 px-6 py-4 border-b border-gray-700/60 bg-gray-900/30 cursor-pointer select-none" onclick="toggleSysArchSection('sa-deliverables')">
                <svg id="sa-arrow-sa-deliverables" class="w-3.5 h-3.5 text-gray-400 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                <h4 class="text-sm font-bold text-white uppercase tracking-widest">Deliverables</h4>
            </div>
            <div id="sa-body-sa-deliverables" class="p-6 grid grid-cols-2 gap-8">
                <div class="space-y-4">
                    <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Delivery Details</p>
                    <div>
                        <label class="text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-1">Delivered To</label>
                        <input type="text" value="${escapeHtml(del.deliveredTo || '')}" placeholder="Recipient name..."
                            class="w-full bg-gray-900/60 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:border-[#459fd9] outline-none placeholder-gray-600"
                            onchange="simSharedData.sysarch.deliverables.deliveredTo=this.value">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-1">Date</label>
                        <input type="date" value="${del.date || ''}"
                            class="w-full bg-gray-900/60 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:border-[#459fd9] outline-none"
                            onchange="simSharedData.sysarch.deliverables.date=this.value">
                    </div>
                    <div class="pt-2 border-t border-gray-700/50">
                        <label class="text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-3">Storage Handed Over</label>
                        <div class="space-y-2">
                            ${[['walletHDD','Wallet HDD'],['otherHDD','Other HDD'],['flashDrives','Memory Flash Drives']].map(([key,label])=>`
                            <div class="flex items-center gap-3">
                                <span class="text-xs text-gray-300 w-36">${label}</span>
                                <input type="number" value="${del[key] || 0}" min="0"
                                    class="w-16 text-center bg-gray-900/60 border border-gray-700 rounded-lg text-sm text-white py-1 focus:border-[#459fd9] outline-none"
                                    onchange="simSharedData.sysarch.deliverables.${key}=+this.value">
                                <span class="text-xs text-gray-500">unit(s)</span>
                            </div>`).join('')}
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex items-center justify-between mb-3">
                        <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Deliverables Notes</p>
                        <button onclick="addDelivNote()" class="text-xs font-bold transition-colors" style="color:#459fd9">+ Add Note</button>
                    </div>
                    <div class="space-y-2">
                        ${delNoteRows || '<p class="text-gray-600 text-xs italic">No notes yet.</p>'}
                    </div>
                </div>
            </div>
        </div>

    </div>`;

    area.innerHTML = html;

    // Re-apply any sections the user had collapsed before re-render
    _sysArchCollapsed.forEach(id => {
        const body  = document.getElementById('sa-body-' + id);
        const arrow = document.getElementById('sa-arrow-' + id);
        if (body)  body.style.display = 'none';
        if (arrow) arrow.style.transform = 'rotate(-90deg)';
    });
    _updateCollapseAllBtn();
}

function handleSysArchDiagram(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
        if (!simSharedData.sysarch) simSharedData.sysarch = {};
        simSharedData.sysarch.diagramDataUrl = e.target.result;
        renderSimContent();
    };
    reader.readAsDataURL(file);
}

function addSysArchMachine() {
    if (!simSharedData.sysarch) simSharedData.sysarch = { machines: [], equipment: [], simStatus: [], deliverables: {} };
    simSharedData.sysarch.machines.push({ name: '', ip: '', software: '', version: '', activated: 'Activated', comments: '' });
    renderSimContent();
    scheduleSimSync();
}

function addSysArchEquipment() {
    if (!simSharedData.sysarch) simSharedData.sysarch = { machines: [], equipment: [], simStatus: [], deliverables: {} };
    const idx = simSharedData.sysarch.equipment.length + 1;
    simSharedData.sysarch.equipment.push({ no: idx, item: '', serial: '', category: '', qty: 1, batch: '', rovAssignment: 'Shared', comments: '' });
    renderSimContent();
    scheduleSimSync();
}

async function loadPackingListFromExcel() {
    // Parse rows returned from either Electron native dialog or browser FileReader
    function parseAndImport(rows) {
        if (!rows || rows.length < 2) { showToast('File appears empty or unreadable.', 'warn'); return; }

        const headers = rows[0].map(h => String(h).toLowerCase().trim());

        const get = (row, keys) => {
            for (const k of keys) {
                const idx = headers.findIndex(h => h.includes(k));
                if (idx >= 0 && row[idx] !== undefined && String(row[idx]).trim() !== '')
                    return String(row[idx]).trim();
            }
            return '';
        };

        const items = [];
        for (let i = 1; i < rows.length; i++) {
            const row = rows[i];
            if (!row || row.every(c => c === '' || c === null || c === undefined)) continue;
            // Try broad column name matching
            const item = get(row, ['item', 'description', 'name', 'equipment', 'desc', 'part', 'material']);
            if (!item) continue;
            items.push({
                batch:         get(row, ['batch', 'date', 'shipment', 'delivery']),
                category:      get(row, ['category', 'cat', 'type', 'group']),
                item,
                serial:        get(row, ['serial', 's/n', 'sn', 'part no', 'part number', 'pn']),
                qty:           parseInt(get(row, ['qty', 'quantity', 'count', 'amount', 'no.', 'no', 'pcs'])) || 1,
                rovAssignment: get(row, ['rov', 'assignment', 'unit']) || 'Shared',
                comments:      get(row, ['comments', 'notes', 'note', 'remark', 'remarks'])
            });
        }

        if (items.length === 0) {
            showToast('No items found — check that your file has a header row with columns like "Description", "Qty", "Category".', 'warn');
            return;
        }

        if (!simSharedData.packingList) simSharedData.packingList = [];
        const existing = simSharedData.packingList.length;
        if (existing > 0 && !confirm(`Add ${items.length} items from Excel to existing ${existing} items?\n\nOK = append   Cancel = replace`)) {
            simSharedData.packingList = items;
        } else {
            items.forEach(item => simSharedData.packingList.push(item));
        }

        const sa = document.getElementById('sim-content-area');
        if (sa) renderSensorsContent(sa);
        scheduleSimSync();
        showToast(`Loaded ${items.length} item${items.length !== 1 ? 's' : ''} from Excel ✓`, 'success');
    }

    // Electron path — native dialog + main-process XLSX parsing (reliable, no CDN needed)
    if (typeof window.electronAPI?.openExcelFile === 'function') {
        try {
            const result = await window.electronAPI.openExcelFile();
            if (!result) return;                          // dialog cancelled
            if (result.error) { showToast('Could not read file: ' + result.error, 'error'); return; }
            parseAndImport(result.rows);
        } catch (err) {
            showToast('Failed to open file: ' + err.message, 'error');
        }
        return;
    }

    // Browser fallback — FileReader + CDN XLSX
    const input = document.createElement('input');
    input.type  = 'file';
    input.accept = '.xlsx,.xls,.csv';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
            try {
                if (typeof XLSX === 'undefined') { showToast('XLSX library not loaded. Try refreshing.', 'error'); return; }
                const workbook = XLSX.read(new Uint8Array(ev.target.result), { type: 'array' });
                const sheet    = workbook.Sheets[workbook.SheetNames[0]];
                const rows     = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });
                parseAndImport(rows);
            } catch (err) {
                showToast('Failed to read file: ' + err.message, 'error');
            }
        };
        reader.readAsArrayBuffer(file);
    };
    input.click();
}

function simEquipCatChange(i, val) {
    if (!simSharedData.sysarch?.equipment?.[i]) return;
    simSharedData.sysarch.equipment[i].category = val === 'Other' ? '__other__' : val;
    renderSimContent();
    scheduleSimSync();
}

function simPlCatChange(i, val) {
    if (!simSharedData.packingList?.[i]) return;
    simSharedData.packingList[i].category = val === 'Other' ? '__other__' : val;
    renderSensorsContent(document.getElementById('sim-content-area'));
    scheduleSimSync();
}

function addPackingListItem() {
    if (!simSharedData.packingList) simSharedData.packingList = [];
    simSharedData.packingList.push({ batch: '', category: '', item: '', serial: '', qty: 1, rovAssignment: 'Shared', comments: '' });
    renderSensorsContent(document.getElementById('sim-content-area'));
    scheduleSimSync();
}

function deletePackingListItem(i) {
    if (!simSharedData.packingList) return;
    simSharedData.packingList.splice(i, 1);
    renderSensorsContent(document.getElementById('sim-content-area'));
    scheduleSimSync();
}

function deleteSystemIP(i) {
    if (!simSharedData.sysarch?.systemIPs) return;
    simSharedData.sysarch.systemIPs.splice(i, 1);
    renderSimContent();
    scheduleSimSync();
}

const _sysArchCollapsed = new Set();

function toggleSysArchSection(id) {
    const body  = document.getElementById('sa-body-' + id);
    const arrow = document.getElementById('sa-arrow-' + id);
    if (!body) return;
    const isCollapsed = body.style.display === 'none';
    body.style.display = isCollapsed ? '' : 'none';
    if (arrow) arrow.style.transform = isCollapsed ? 'rotate(0deg)' : 'rotate(-90deg)';
    if (isCollapsed) _sysArchCollapsed.delete(id); else _sysArchCollapsed.add(id);
    _updateCollapseAllBtn();
}

function collapseAllSysArch() {
    const ids = ['sa-diagram','sa-machines','sa-sysips','sa-equipment','sa-simstatus','sa-deliverables'];
    const allCollapsed = ids.every(id => _sysArchCollapsed.has(id));
    ids.forEach(id => {
        const body  = document.getElementById('sa-body-' + id);
        const arrow = document.getElementById('sa-arrow-' + id);
        if (!body) return;
        const collapse = !allCollapsed;
        body.style.display = collapse ? 'none' : '';
        if (arrow) arrow.style.transform = collapse ? 'rotate(-90deg)' : 'rotate(0deg)';
        if (collapse) _sysArchCollapsed.add(id); else _sysArchCollapsed.delete(id);
    });
    _updateCollapseAllBtn();
}

function _updateCollapseAllBtn() {
    const ids = ['sa-diagram','sa-machines','sa-sysips','sa-equipment','sa-simstatus','sa-deliverables'];
    const allCollapsed = ids.every(id => _sysArchCollapsed.has(id));
    const icon = document.getElementById('collapse-all-sa-icon');
    if (icon) icon.querySelector('path').setAttribute('d', allCollapsed ? 'M19 15l-7-7-7 7' : 'M5 15l7-7 7 7');
    const tooltip = document.getElementById('collapse-all-sa-tooltip');
    if (tooltip) tooltip.textContent = allCollapsed ? 'Expand All' : 'Collapse All';
}

function toggleSystemIPGroup(catId) {
    const rows = document.querySelectorAll(`[data-sysip-cat="${catId}"]`);
    const arrow = document.getElementById(`sysip-arrow-${catId}`);
    const isHidden = rows.length > 0 && rows[0].classList.contains('hidden');
    rows.forEach(r => r.classList.toggle('hidden', !isHidden));
    if (arrow) arrow.style.transform = isHidden ? 'rotate(0deg)' : 'rotate(-90deg)';
}

function deleteSysArchMachine(i) {
    if (!simSharedData.sysarch?.machines) return;
    simSharedData.sysarch.machines.splice(i, 1);
    renderSimContent();
    scheduleSimSync();
}

function deleteSysArchEquipment(i) {
    if (!simSharedData.sysarch?.equipment) return;
    simSharedData.sysarch.equipment.splice(i, 1);
    renderSimContent();
    scheduleSimSync();
}

function cycleActivated(i) {
    const m = simSharedData.sysarch?.machines?.[i];
    if (!m) return;
    m.activated = (m.activated || 'Activated') === 'Activated' ? 'Need Activation' : 'Activated';
    renderSimContent();
}

function addSimStatus() {
    if (!simSharedData.sysarch) return;
    if (!simSharedData.sysarch.simStatus) simSharedData.sysarch.simStatus = [];
    simSharedData.sysarch.simStatus.push({ machine: '', scenario: '', expected: 'As requested', completion: 100, status: 'Passed', comments: '' });
    renderSimContent();
    scheduleSimSync();
}

function deleteSimStatus(i) {
    if (!simSharedData.sysarch?.simStatus) return;
    simSharedData.sysarch.simStatus.splice(i, 1);
    renderSimContent();
    scheduleSimSync();
}

function cycleSimStatus(i) {
    const cycle = { Passed: 'Warning', Warning: 'Failed', Failed: 'Passed' };
    const s = simSharedData.sysarch?.simStatus?.[i];
    if (!s) return;
    s.status = cycle[s.status] || 'Passed';
    renderSimContent();
}

function addDelivNote() {
    if (!simSharedData.sysarch?.deliverables) return;
    if (!simSharedData.sysarch.deliverables.notes) simSharedData.sysarch.deliverables.notes = [];
    simSharedData.sysarch.deliverables.notes.push('');
    renderSimContent();
    scheduleSimSync();
}

function deleteDelivNote(i) {
    if (!simSharedData.sysarch?.deliverables?.notes) return;
    simSharedData.sysarch.deliverables.notes.splice(i, 1);
    renderSimContent();
    scheduleSimSync();
}

async function exportSysArchXLSX() {
    if (typeof XLSX === 'undefined') {
        showToast('Excel library not loaded — check your connection and reload.', 'error');
        return;
    }

    const sa    = simSharedData.sysarch  || {};
    const mach  = sa.machines            || [];
    const equip = sa.equipment           || [];
    const stat  = sa.simStatus           || [];
    const del   = sa.deliverables        || {};

    // Load the original template so all colors/styles are preserved
    let wb;
    try {
        const res = await fetch('Job Simulation.xlsx');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const buf = await res.arrayBuffer();
        wb = XLSX.read(new Uint8Array(buf), { type: 'array', cellStyles: true });
    } catch (e) {
        showToast('Could not load template file: ' + (e.message || e), 'error');
        return;
    }

    const ws = wb.Sheets[wb.SheetNames[0]];

    // Helper: set/overwrite a cell value without touching its style
    function setCell(r, c, v) {
        const addr = XLSX.utils.encode_cell({ r, c });
        const existing = ws[addr] || {};
        ws[addr] = Object.assign({}, existing, {
            v,
            t: typeof v === 'number' ? 'n' : 's',
            w: String(v)         // formatted text
        });
        if (ws[addr].f) delete ws[addr].f; // strip formula so our value shows
    }

    // Helper: extend !ref if we write beyond the template's declared range
    function extendRef(r, c) {
        const range = XLSX.utils.decode_range(ws['!ref'] || 'A1:H50');
        if (r > range.e.r) range.e.r = r;
        if (c > range.e.c) range.e.c = c;
        ws['!ref'] = XLSX.utils.encode_range(range);
    }

    // ── Header / project info ──────────────────────────────────────────────
    // Row 2  (index 1): Date in H2
    setCell(1, 7, new Date().toLocaleDateString('en-GB'));
    // Row 3  (index 2): Project name in D3
    setCell(2, 3, simProjectData.name || '');
    // Row 5  (index 4): Job code in D5
    setCell(4, 3, simProjectData.code || '');
    // Row 7  (index 6): Scope in D7, Delivered To in H7
    setCell(6, 3, simProjectData.scope || '');
    setCell(6, 7, del.deliveredTo || '');

    // ── Machines (template rows 13-14, index 12-13) ───────────────────────
    // Template has 2 pre-styled rows; extra machines extend naturally below
    mach.forEach((m, i) => {
        const r = 12 + i;
        setCell(r, 1, i + 1);
        setCell(r, 2, m.name     || '');
        setCell(r, 3, m.ip       || '');
        setCell(r, 4, m.software || '');
        setCell(r, 5, m.version  || '');
        setCell(r, 6, m.activated || 'Activated');
        setCell(r, 7, m.comments || '');
        extendRef(r, 7);
    });

    // ── Hardware & Consumables (template rows 20+, index 19+) ────────────
    const hwSlots = Math.max(equip.length, 24);
    for (let i = 0; i < hwSlots; i++) {
        const r = 19 + i;
        const e = equip[i];
        if (e) {
            setCell(r, 1, e.batch        || '');
            setCell(r, 2, e.category     || '');
            setCell(r, 3, e.item         || '');
            setCell(r, 4, e.serial       || '');
            setCell(r, 5, Number(e.qty)  || 0);
            setCell(r, 6, e.condition    || '');
            setCell(r, 7, e.rovAssignment || 'Shared');
            setCell(r, 8, e.comments     || '');
        }
        extendRef(r, 8);
    }

    // ── Deliverables (fixed cells in H column of hardware section) ────────
    setCell(18, 7, del.deliveredTo           || '');  // H19
    setCell(19, 7, del.date                  || '');  // H20
    setCell(20, 7, Number(del.walletHDD)     || 0);   // H21
    setCell(21, 7, Number(del.otherHDD)      || 0);   // H22
    setCell(22, 7, Number(del.flashDrives)   || 0);   // H23

    // Deliverables notes — H26 onward (template row 26, index 25)
    (del.notes || []).forEach((n, i) => {
        setCell(25 + i, 7, n || '');
        extendRef(25 + i, 7);
    });

    // ── Simulation Status (template rows 49-50, index 48-49) ─────────────
    stat.forEach((s, i) => {
        const r = 48 + i;
        setCell(r, 1, i + 1);
        setCell(r, 2, s.machine   || '');
        setCell(r, 3, s.scenario  || '');
        setCell(r, 4, s.expected  || '');
        setCell(r, 5, s.completion ? s.completion / 100 : 0);   // fraction 0-1
        setCell(r, 6, s.status    || 'Passed');
        setCell(r, 7, s.comments  || '');
        extendRef(r, 7);
    });

    const fileName = `${simProjectData.code || 'Simulation'}_Deliverables_${new Date().toISOString().slice(0, 10)}.xlsx`;
    XLSX.writeFile(wb, fileName);
    showToast(`Exported: ${fileName}`, 'success');
}


// ---- SAVE / EXPORT ----
async function saveSimulationJSON() {
    // FIX: validate state before attempting to save — if user somehow
    // triggered this from a stale state, we'd send an empty/garbled report.
    if (!simSelectedScope || simSelectedROVs.size === 0) {
        showToast('Nothing to save — set up the simulation first.', 'warn');
        return;
    }

    const scope = OPERATION_SCOPES[simSelectedScope];
    const exportData = {
        type:        'simulation',
        reportDate:  new Date().toISOString().split('T')[0],
        projectName: simProjectData.name,
        projectCode: simProjectData.code,
        projectScope:simProjectData.scope,
        scopeId:     simSelectedScope,
        scopeName:   scope?.name || '',
        rovs: [...simSelectedROVs.entries()].sort((a,b)=>a[0]-b[0]).map(([num, role]) => ({
            rovNumber: num,
            rovName:   `MiniSpector ${num}`,
            role:      role
        })),
        sensors: (simSharedData.sensors || []).filter(s => s.included !== false),
        sysarch: {
            machines:  (simSharedData.sysarch?.machines  || []).map(m => ({ ...m })),
            equipment: (simSharedData.sysarch?.equipment || []).map(e => ({ ...e }))
        }
    };

    try {
        if (!window.electronAPI?.saveSimFile) {
            showToast('Save is not available in this environment.', 'error');
            return;
        }
        const result = await window.electronAPI.saveSimFile(exportData);
        if (result?.status === 'success') {
            showToast('Simulation saved!', 'success');
            syncToCloud(); // cloud: push sensor/issue data to Supabase
            window.electronAPI.deleteSimDraft();
        } else if (result?.status === 'cancelled') {
            // user cancelled — silent
        } else {
            showToast('Save failed' + (result?.message ? ': ' + result.message : '.'), 'error');
        }
    } catch (e) {
        showToast('Save failed: ' + (e?.message || e), 'error');
    }
}

async function exportSimulationExcel() {
    if (!simSelectedScope || simSelectedROVs.size === 0) {
        showToast('Nothing to export — set up the simulation first.', 'warn');
        return;
    }
    const scope = OPERATION_SCOPES[simSelectedScope];
    const sensors = (simSharedData.sensors || []).filter(s => s.included !== false);
    const machines = simSharedData.sysarch?.machines || [];

    const exportData = {
        reportDate:   new Date().toISOString().split('T')[0],
        projectName:  simProjectData.name  || '—',
        projectCode:  simProjectData.code  || '—',
        scopeName:    scope?.name || '—',
        rovs: [...simSelectedROVs.entries()].sort((a,b) => a[0]-b[0]).map(([num, role]) => ({ rovNumber: num, role })),
        sensors: sensors.map(s => ({
            name: s.name, model: s.model || '', qty: s.qty || 1,
            status: s.status, calibrated: s.calibrated, tested: s.tested, note: s.note || ''
        })),
        machines: machines.map(m => ({
            name: m.name || '', model: m.model || '', ip: m.ip || '', status: m.status || 'OK'
        }))
    };

    try {
        if (!window.electronAPI?.exportSimExcel) {
            showToast('Excel export not available.', 'error');
            return;
        }
        const result = await window.electronAPI.exportSimExcel(exportData);
        if (result?.status === 'success') showToast('Packing list exported to Excel!', 'success');
    } catch (e) {
        showToast('Excel export failed: ' + (e?.message || e), 'error');
    }
}

async function exportSimulationWord() {
    // FIX: same defensive checks as saveSimulationJSON
    if (!simSelectedScope || simSelectedROVs.size === 0) {
        showToast('Nothing to export — set up the simulation first.', 'warn');
        return;
    }

    const scope    = OPERATION_SCOPES[simSelectedScope];
    const rovsList = [...simSelectedROVs.entries()].sort((a,b)=>a[0]-b[0]);
    const exportData = {
        reportDate:   new Date().toLocaleDateString('en-GB'),
        generatedBy:  document.getElementById('display-user-id')?.innerText || '',
        projectName:  simProjectData.name  || '—',
        projectCode:  simProjectData.code  || '—',
        projectScope: simProjectData.scope || '—',
        scopeName:    scope?.name || '—',
        rovCount:     rovsList.length,
        mainROV:      rovsList.find(([,r])=>r==='main')?.[0] || rovsList[0]?.[0],
        rovs: rovsList.map(([num, role]) => ({
            rovName: `MiniSpector ${num}`,
            role:    role
        })),
        sensors: (simSharedData.sensors || [])
            .filter(s => s.included !== false)
            .map(s => ({
                category:   s.status === 'custom' ? 'Custom' : (s.status === 'optional' ? 'Optional' : 'Required'),
                sensorName: s.name,
                qty:        s.qty || 1,
                model:      s.model || '—',
                calibrated: s.calibrated ? '✓' : '✗',
                tested:     s.tested     ? '✓' : '✗'
            })),
        issues: []
    };
    try {
        if (!window.electronAPI?.exportSimulationWord) {
            showToast('Word export is not available in this environment.', 'error');
            return;
        }
        const result = await window.electronAPI.exportSimulationWord(exportData);
        if (result?.status === 'success') {
            showToast('Report exported!', 'success');
        } else if (result?.status === 'cancelled') {
            // user cancelled the dialog — silent
        } else {
            showToast('Export failed' + (result?.message ? ': ' + result.message : '.'), 'error');
        }
    } catch(e) {
        // FIX: was using alert() — replaced with toast for consistent UX
        showToast('Export failed: ' + (e?.message || e), 'error');
    }
}
function renderSensorPayloadTable() {
    document.getElementById('camLightBody').innerHTML = '';
    document.getElementById('sensorBody').innerHTML = '';

    cameraLightItems.forEach(item => {
        addSensorRow('camLightBody', { name: item.label, status: 'Fault' });
    });
    sensorItems.forEach(item => {
        addSensorRow('sensorBody', { name: item.label, status: 'Fault' });
    });
}

function openSupport() { document.getElementById('support-modal').style.display = 'flex'; }
function closeSupport() { document.getElementById('support-modal').style.display = 'none'; }
function updateOperationalId() {
    const pCode = document.getElementById('projectCode')?.value.trim();
    const dateVal = document.getElementById('startDate')?.value; // Using Start Date for ID
    const opIdInput = document.getElementById('operationalIdAuto');
    
    if (opIdInput) {
        if (pCode && dateVal) {
            const dateStr = dateVal.replaceAll('-', '');
            opIdInput.value = `${pCode}-MS-${dateStr}`;
        } else {
            opIdInput.value = "";
        }
    }
}

function updateToggleLabel(el, labelId) {
    const label = document.getElementById(labelId);
    if (el.checked) {
        label.innerText = "OK";
        label.classList.remove("text-red-400");
        label.classList.add("text-green-400");
    } else {
        label.innerText = "";
        label.classList.remove("text-green-400");
        label.classList.add("text-red-400");
    }
}

// ==========================================
// 6. RENDER FUNCTIONS
// ==========================================
// --- SHIFT DROPDOWN HELPERS ---
window.handleShiftChange = function(selectEl) {
    if (selectEl.value === 'Custom') {
        selectEl.style.display = 'none';
        const input = selectEl.nextElementSibling;
        input.style.display = '';
        input.focus();
    }
};

window.handleShiftBlur = function(inputEl) {
    if (inputEl.value.trim() === '') {
        inputEl.style.display = 'none';
        const select = inputEl.previousElementSibling;
        select.value = 'Day';
        select.style.display = '';
    }
};
const ROLE_COLORS_MAP = {
    'ROV Supervisor':       '#f39124',
    'ROV Operator':         '#459fd9',
    'ROV Technician':       '#10b981',
    'CSWIP 3.4U Ispector':  '#8b5cf6',
    'PRC Engineer':         '#f59e0b',
    'Inspection Engineer':  '#ef4444',
};

function getInitials(n) {
    const w = n.trim().split(' ').filter(Boolean);
    return w.length >= 2 ? (w[0][0] + w[w.length-1][0]).toUpperCase()
                         : (n.trim().substring(0, 2).toUpperCase() || '?');
}

window.updateCrewAvatar = function(inputEl) {
    const row = inputEl.closest('.crew-row');
    const t = row?.querySelector('.crew-avatar-text');
    if (t) t.textContent = inputEl.value.trim() ? getInitials(inputEl.value) : '?';
};

window.updateCrewRoleColor = function(selectEl) {
    const row = selectEl.closest('.crew-row');
    const av = row?.querySelector('.crew-avatar');
    if (!av) return;
    const c = ROLE_COLORS_MAP[selectEl.value] || '#6b7280';
    av.style.background = c + '22'; av.style.color = c; av.style.borderColor = c + '55';
};

window.updateCrewEmptyState = function() {
    const container = document.getElementById('crew-container');
    const empty = document.getElementById('crew-empty-state');
    if (empty) empty.style.display = (container?.children.length === 0) ? 'block' : 'none';
};

function getCrewRoster() {
    return Array.from(document.querySelectorAll('.crew-row'))
        .map(row => ({
            name: row.querySelector('.crew-name-input')?.value.trim() || '',
            role: row.querySelector('.crew-role-select')?.value || ''
        }))
        .filter(c => c.name);
}

function addCrewRow(name = '', role = 'ROV Supervisor', shift = 'Day', signOn = '', signOff = '') {
    if (currentUserRole === 'reviewer') return;
    const container = document.getElementById('crew-container');
    const empty = document.getElementById('crew-empty-state');
    if (empty) empty.style.display = 'none';

    const isCustom = shift !== 'Day' && shift !== 'Night' && shift !== '';
    const selectClass = isCustom ? 'hidden' : '';
    const inputClass  = isCustom ? '' : 'hidden';
    const selectValue = isCustom ? 'Custom' : (shift || 'Day');
    const inputValue  = isCustom ? shift : '';

    const color    = ROLE_COLORS_MAP[role] || '#6b7280';
    const initials = name ? getInitials(name) : '?';

    const iStyle = `background:#0f172a;border:1px solid #1e293b;color:white;padding:0 10px;border-radius:8px;width:100%;outline:none;height:36px;font-size:0.82rem;transition:border-color 0.2s;`;
    const focus  = `onfocus="this.style.borderColor='#459fd9'" onblur="this.style.borderColor='#1e293b'"`;

    const div = document.createElement('div');
    div.className = 'crew-row';
    div.style.cssText = `display:grid;grid-template-columns:52px 1fr 1fr 110px 130px 130px 44px;gap:8px;align-items:center;padding:8px;border-radius:10px;margin-bottom:4px;background:rgba(0,0,0,0.18);border:1px solid rgba(255,255,255,0.04);transition:background 0.15s;`;
    div.onmouseover = () => { div.style.background = 'rgba(255,255,255,0.03)'; };
    div.onmouseout  = () => { div.style.background = 'rgba(0,0,0,0.18)'; };

    div.innerHTML = `
        <div style="display:flex;justify-content:center;">
            <div class="crew-avatar" style="width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:0.8rem;background:${color}22;color:${color};border:1px solid ${color}55;flex-shrink:0;transition:all 0.2s;">
                <span class="crew-avatar-text">${initials}</span>
            </div>
        </div>
        <div><input type="text" class="crew-name-input" style="${iStyle}" ${focus} placeholder="Full Name..." value="${name}" oninput="updateCrewAvatar(this)"></div>
        <div><select class="crew-role-select" style="${iStyle}cursor:pointer;" onchange="updateCrewRoleColor(this)">
            ${crewRoles.map(r => `<option value="${r}" ${r===role?'selected':''}>${r}</option>`).join('')}
        </select></div>
        <div>
            <select class="crew-shift-select ${selectClass}" style="${iStyle}cursor:pointer;${isCustom?'display:none;':''}" onchange="handleShiftChange(this)">
                <option value="Day" ${selectValue==='Day'?'selected':''}>Day</option>
                <option value="Night" ${selectValue==='Night'?'selected':''}>Night</option>
                <option value="Custom" ${selectValue==='Custom'?'selected':''}>Custom...</option>
            </select>
            <input type="text" class="crew-shift-input ${inputClass}" style="${iStyle}${isCustom?'':'display:none;'}" placeholder="Shift type..." value="${inputValue}" onblur="handleShiftBlur(this)">
        </div>
        <div><input type="date" class="crew-signon-input" style="${iStyle}color:#94a3b8;" value="${signOn}"></div>
        <div><input type="date" class="crew-signoff-input" style="${iStyle}color:#94a3b8;" value="${signOff}"></div>
        <div style="display:flex;justify-content:center;">
            <button onclick="this.closest('.crew-row').remove();updateCrewEmptyState();" style="background:rgba(239,68,68,0.1);border:none;width:32px;height:32px;border-radius:8px;color:#ef4444;cursor:pointer;font-size:1rem;display:flex;align-items:center;justify-content:center;transition:background 0.15s;"
                onmouseover="this.style.background='rgba(239,68,68,0.22)'" onmouseout="this.style.background='rgba(239,68,68,0.1)'">✕</button>
        </div>`;

    container.appendChild(div);
}



function renderFaultTable() {
    const faults = currentReportData.faultLogs || [];
    const container = document.getElementById('fault-log-container');
    
    if (faults.length === 0) {
        container.innerHTML = `<p class="text-gray-500 italic text-center py-8">No active faults recorded.</p>`;
        return;
    }

    container.innerHTML = `
        <div class="overflow-x-auto bg-gray-800 rounded-lg border border-gray-700">
            <table class="w-full text-left text-gray-300 text-sm">
                <thead class="bg-gray-700 text-xs uppercase font-bold text-gray-400">
                    <tr>
                        <th class="px-4 py-3">Status</th>
                        <th class="px-4 py-3">Description</th>
                        <th class="px-4 py-3">Action Taken</th>
                        <th class="px-4 py-3">Parts</th>
                        <th class="px-4 py-3">Photos</th>
                        <th class="px-4 py-3 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-700">
                    ${faults.map((log, i) => `
                    <tr class="hover:bg-gray-700/50 transition">
                        <td class="px-4 py-3">
                            <span class="px-2 py-1 rounded text-xs font-bold ${log.status === 'Closed' ? 'bg-green-900/50 text-green-400' : 'bg-red-900/50 text-red-400'}">
                                ${log.status || 'Open'}
                            </span>
                        </td>
                        <td class="px-4 py-3 font-bold text-white">${log.desc}</td>
                        <td class="px-4 py-3">${log.action}</td>
                        <td class="px-4 py-3 text-xs">${log.parts || '-'}</td>
                        <td class="px-4 py-3 text-xs text-blue-400 italic">
                            ${log.photos ? log.photos.length + ' file(s)' : 'None'}
                        </td>
                        <td class="px-4 py-3 text-right">
                            <button onclick="openModal('faultLogs', ${i})" class="text-blue-400 hover:text-blue-300 mr-3 font-bold">Edit</button>
                            <button onclick="removeLog('faultLogs', ${i})" class="text-red-400 hover:text-red-300 font-bold">Del</button>
                        </td>
                    </tr>`).join('')}
                </tbody>
            </table>
        </div>`;
}
// ==========================================
// CHECKLIST ENGINE
// ==========================================

function clGetState(type, diveKey, itemId) {
    if (!currentReportData.checklists) return { checked: false, obs: '', reading: '' };
    const cl = CHECKLISTS[type];
    const stateMap = currentReportData.checklists[type] || {};
    if (cl && cl.perDive) {
        return (stateMap[diveKey] || {})[itemId] || { checked: false, obs: '', reading: '' };
    }
    return stateMap[itemId] || { checked: false, obs: '', reading: '' };
}

function clEnsureItem(type, diveKey, itemId) {
    if (!currentReportData.checklists) currentReportData.checklists = {};
    if (!currentReportData.checklists[type]) currentReportData.checklists[type] = {};
    const cl = CHECKLISTS[type];
    if (cl && cl.perDive) {
        if (!currentReportData.checklists[type][diveKey]) currentReportData.checklists[type][diveKey] = {};
        if (!currentReportData.checklists[type][diveKey][itemId]) currentReportData.checklists[type][diveKey][itemId] = { checked: false, obs: '', reading: '' };
        return currentReportData.checklists[type][diveKey][itemId];
    }
    if (!currentReportData.checklists[type][itemId]) currentReportData.checklists[type][itemId] = { checked: false, obs: '', reading: '' };
    return currentReportData.checklists[type][itemId];
}

function clCheck(type, diveKey, itemId, val) {
    clEnsureItem(type, diveKey, itemId).checked = val;
    isDirty = true;
    renderChecklistsTab();
}

function clSetObs(type, diveKey, itemId, val) {
    clEnsureItem(type, diveKey, itemId).obs = val;
    isDirty = true;
    updateChecklistBadge();
}

function clSetReading(type, diveKey, itemId, val) {
    clEnsureItem(type, diveKey, itemId).reading = val;
    isDirty = true;
}

function clCountType(type) {
    const cl = CHECKLISTS[type];
    if (!cl || cl.perDive) return { done: 0, total: 0 };
    const stateMap = currentReportData.checklists?.[type] || {};
    let done = 0, total = 0;
    cl.sections.forEach(s => s.items.forEach(item => { total++; if (stateMap[item.id]?.checked) done++; }));
    return { done, total };
}

function clCountDive(type, diveKey) {
    const cl = CHECKLISTS[type];
    if (!cl) return { done: 0, total: 0 };
    const stateMap = cl.perDive ? ((currentReportData.checklists?.[type] || {})[diveKey] || {}) : (currentReportData.checklists?.[type] || {});
    let done = 0, total = 0;
    cl.sections.forEach(s => s.items.forEach(item => { total++; if (stateMap[item.id]?.checked) done++; }));
    return { done, total };
}

function updateChecklistBadge() {
    const BADGE_MAP = {
        mobilization: 'cl-badge-mobilization',
        startup:      'cl-badge-startup',
        preOp:        'cl-badge-preop',
        postOp:       'cl-badge-postop',
        shutdown:     'cl-badge-shutdown',
        demob:        'cl-badge-demob'
    };
    Object.entries(BADGE_MAP).forEach(([type, badgeId]) => {
        const el = document.getElementById(badgeId);
        if (!el) return;
        let done, total;
        if (CHECKLISTS[type]?.perDive) {
            const diveKey = activeChecklistDiveKeys[type] || '1';
            ({ done, total } = clCountDive(type, diveKey));
        } else {
            ({ done, total } = clCountType(type));
        }
        el.textContent = `${done}/${total}`;
        el.className = `text-[10px] px-1.5 py-0.5 rounded-full ${done === total && total > 0 ? 'bg-green-900 text-green-400' : 'bg-gray-700 text-gray-400'}`;
    });
}

function switchChecklistTab(type) {
    activeChecklistType = type;
    renderChecklistsTab();
}

function switchChecklistDive(type, key) {
    activeChecklistDiveKeys[type] = key;
    renderChecklistsTab();
}

function addChecklistDive(type) {
    const stateMap = currentReportData.checklists?.[type] || {};
    const existingNos = Object.keys(stateMap).map(Number).filter(n => !isNaN(n) && n > 0);
    const next = existingNos.length > 0 ? Math.max(...existingNos) + 1 : (Object.keys(stateMap).length + 2);
    activeChecklistDiveKeys[type] = String(next);
    renderChecklistsTab();
}

function clResetChecklist(type, diveKey) {
    if (!confirm('Reset all items in this checklist? This cannot be undone.')) return;
    if (!currentReportData.checklists) currentReportData.checklists = {};
    const cl = CHECKLISTS[type];
    if (cl && cl.perDive) {
        if (currentReportData.checklists[type]) delete currentReportData.checklists[type][diveKey];
    } else {
        currentReportData.checklists[type] = {};
    }
    isDirty = true;
    renderChecklistsTab();
}

function renderChecklistsTab() {
    const container = document.getElementById('cl-container');
    if (!container) return;

    if (!currentReportData.checklists) {
        currentReportData.checklists = { mobilization: {}, startup: {}, preOp: {}, postOp: {}, shutdown: {}, demob: {} };
    }

    const cl = CHECKLISTS[activeChecklistType];
    const isPerDive = !!cl.perDive;
    const diveKey = isPerDive ? (activeChecklistDiveKeys[activeChecklistType] || '1') : '';

    // Dive selector for per-dive checklists
    let diveBarHtml = '';
    if (isPerDive) {
        const stateMap = currentReportData.checklists[activeChecklistType] || {};
        const savedKeys = Object.keys(stateMap);
        const logKeys = (currentReportData.diveLogs || []).map(d => String(d.diveNo || d.dive_no || '')).filter(Boolean);
        const allKeys = [...new Set([...savedKeys, ...logKeys, diveKey])].sort((a, b) => Number(a) - Number(b));

        diveBarHtml = `
        <div class="flex items-center gap-3 mb-5 px-4 py-3 rounded-xl" style="background:rgba(69,159,217,0.08);border:1px solid rgba(69,159,217,0.2);">
            <span class="text-xs font-bold text-gray-400 uppercase tracking-wider">Dive No.</span>
            <select onchange="switchChecklistDive('${activeChecklistType}', this.value)"
                class="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg px-2 py-1.5 focus:outline-none focus:border-[#459fd9] cursor-pointer">
                ${allKeys.map(k => `<option value="${escapeHtml(k)}" ${k === diveKey ? 'selected' : ''}>${escapeHtml(k)}</option>`).join('')}
            </select>
            <button onclick="addChecklistDive('${activeChecklistType}')"
                class="px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors hover:bg-[#459fd9]/10"
                style="color:#459fd9;border:1px solid rgba(69,159,217,0.3);">+ New Dive</button>
        </div>`;
    }

    // Progress
    const { done: totalDone, total: totalItems } = isPerDive ? clCountDive(activeChecklistType, diveKey) : clCountType(activeChecklistType);
    const pct = totalItems > 0 ? Math.round(totalDone / totalItems * 100) : 0;
    const allDone = pct === 100 && totalItems > 0;

    // Sections
    const sectionsHtml = cl.sections.map(section => {
        const secDone = section.items.filter(item => clGetState(activeChecklistType, diveKey, item.id).checked).length;
        const secTotal = section.items.length;

        const itemsHtml = section.items.map((item, idx) => {
            const state = clGetState(activeChecklistType, diveKey, item.id);
            const ckId = `cl_${activeChecklistType}_${diveKey}_${item.id}`;

            return `
            <div class="flex gap-3 items-start py-2.5 px-3 rounded-lg transition-colors hover:bg-white/[0.03] ${state.checked ? 'opacity-55' : ''}">
                <div class="flex-shrink-0 mt-[3px]">
                    <input type="checkbox" id="${ckId}" ${state.checked ? 'checked' : ''}
                           onchange="clCheck('${activeChecklistType}','${diveKey}','${item.id}',this.checked)"
                           class="w-4 h-4 rounded cursor-pointer accent-[#f39124]">
                </div>
                <div class="flex-1 min-w-0">
                    <label for="${ckId}" class="block text-sm leading-relaxed cursor-pointer select-none ${state.checked ? 'line-through text-gray-500' : 'text-gray-300'}">
                        <span class="text-gray-600 text-xs mr-1">${idx + 1}.</span>${escapeHtml(item.label)}
                    </label>
                    ${item.reading ? `<div class="mt-2 flex items-center gap-2 flex-wrap">
                        <span class="text-xs font-semibold text-[#f39124]">${escapeHtml(item.readingLabel)}:</span>
                        <input type="text" value="${escapeHtml(state.reading || '')}" placeholder="${escapeHtml(item.readingHint || 'Enter reading...')}"
                               oninput="clSetReading('${activeChecklistType}','${diveKey}','${item.id}',this.value)"
                               class="bg-gray-900 border border-gray-700 rounded-lg px-2.5 py-1 text-sm text-white w-40 focus:outline-none focus:border-[#f39124] placeholder-gray-600">
                    </div>` : ''}
                </div>
                <div class="flex-shrink-0 min-w-[140px]">
                    <input type="text" value="${escapeHtml(state.obs || '')}" placeholder="Observation..."
                           oninput="clSetObs('${activeChecklistType}','${diveKey}','${item.id}',this.value)"
                           class="w-full bg-transparent text-xs text-gray-400 placeholder-gray-600 focus:outline-none border-b border-gray-700/50 focus:border-gray-500 py-0.5 transition-colors">
                </div>
            </div>`;
        }).join('');

        return `
        <div class="mb-3 rounded-xl overflow-hidden" style="border:1px solid rgba(55,65,81,0.5);">
            <div class="flex items-center justify-between px-4 py-2.5" style="background:rgba(243,145,36,0.07);border-bottom:1px solid rgba(243,145,36,0.15);">
                <span class="text-xs font-bold uppercase tracking-wider text-[#f39124]">${escapeHtml(section.title)}</span>
                <span class="text-xs px-2 py-0.5 rounded-full ${secDone === secTotal ? 'bg-green-900/50 text-green-400' : 'bg-gray-700 text-gray-400'}">${secDone}/${secTotal}</span>
            </div>
            ${section.note ? `<div class="mx-3 mt-2 px-3 py-2 rounded-lg text-xs leading-relaxed" style="color:#fbbf24;background:rgba(251,191,36,0.08);border:1px solid rgba(251,191,36,0.2);">⚠ ${escapeHtml(section.note)}</div>` : ''}
            <div class="divide-y divide-gray-800/40 px-1 py-1">${itemsHtml}</div>
        </div>`;
    }).join('');

    container.innerHTML = `
    <!-- Header row -->
    <div class="flex items-center justify-between mb-4">
        <div>
            <h3 class="text-lg font-bold text-white">${escapeHtml(cl.title)} Checklist</h3>
            <p class="text-xs text-gray-500 mt-0.5">${isPerDive ? 'Completed per dive — select dive number below' : 'Completed once per job/session'}</p>
        </div>
        <div class="flex items-center gap-4">
            <button onclick="clResetChecklist('${activeChecklistType}','${diveKey}')"
                class="px-3 py-1.5 text-xs rounded-lg border border-gray-700 text-gray-400 hover:border-red-500/50 hover:text-red-400 transition-colors">Reset</button>
            <div class="text-right">
                <div class="text-sm font-bold ${allDone ? 'text-green-400' : 'text-white'}">${totalDone} / ${totalItems}</div>
                <div class="text-xs text-gray-500">${pct}% complete</div>
            </div>
        </div>
    </div>

    <!-- Progress bar -->
    <div class="h-1.5 bg-gray-800 rounded-full mb-5 overflow-hidden">
        <div class="h-full rounded-full transition-all duration-300" style="width:${pct}%;background:${allDone ? '#10b981' : '#f39124'};"></div>
    </div>

    ${diveBarHtml}

    <!-- Sections -->
    <div class="space-y-3">${sectionsHtml}</div>
    `;

    updateChecklistBadge();
}

function renderPreDiveChecklist() {
    const container = document.getElementById('pre-dive-list-container');
    if (!container) return;

    container.className = "space-y-5";

    container.innerHTML = preDiveGroups.map((group, gi) => `
        <div class="chart-card overflow-hidden">
            <div class="chart-card-header">
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                         style="background:rgba(243,145,36,0.15);color:#f39124;border:1px solid rgba(243,145,36,0.3);">
                        ${gi + 1}
                    </div>
                    <div>
                        <div class="chart-title">${group.title}</div>
                        <div class="text-[11px] text-gray-500 mt-0.5">${group.items.length} check item${group.items.length !== 1 ? 's' : ''}</div>
                    </div>
                </div>
                <div id="pd-group-summary-${gi}" class="flex items-center gap-2 text-xs font-medium"></div>
            </div>

            <div class="divide-y divide-gray-700/60">
                <div class="grid text-[10px] font-bold uppercase tracking-widest text-gray-500 px-5 py-2 bg-gray-800/60"
                     style="grid-template-columns:1fr 180px 1fr;">
                    <span>Check Item</span>
                    <span>Status</span>
                    <span>Remarks</span>
                </div>

                ${group.items.map((item, ii) => `
                <div class="grid items-center px-5 py-3 hover:bg-gray-700/20 transition-colors group"
                     style="grid-template-columns:1fr 180px 1fr;">

                    <div class="flex items-center gap-3 pr-4">
                        <div class="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#f39124] transition-colors flex-shrink-0"></div>
                        <span class="text-sm text-gray-200 leading-snug">${item.label}</span>
                    </div>

                    <div class="flex items-center gap-2">
                        <label class="flex-1 cursor-pointer">
                            <input type="radio" name="pd_status_${item.key}" value="OK" class="peer sr-only"
                                   onchange="updatePreDiveGroupSummary(${gi})">
                            <div class="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all
                                        border-gray-600 text-gray-500 bg-gray-800
                                        peer-checked:border-green-500 peer-checked:text-green-400 peer-checked:bg-green-500/10">
                                <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                                </svg>
                                OK
                            </div>
                        </label>

                        <label class="flex-1 cursor-pointer">
                            <input type="radio" name="pd_status_${item.key}" value="Fault" class="peer sr-only"
                                   onchange="updatePreDiveGroupSummary(${gi})">
                            <div class="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all
                                        border-gray-600 text-gray-500 bg-gray-800
                                        peer-checked:border-red-500 peer-checked:text-red-400 peer-checked:bg-red-500/10">
                                <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                                Fault
                            </div>
                        </label>
                    </div>

                    <div class="pl-3">
                        <input type="text" id="pd_comment_${item.key}"
                            class="w-full bg-gray-900/80 border border-gray-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-gray-600
                                   focus:border-[#f39124] focus:ring-1 focus:ring-[#f39124]/50 outline-none transition-all"
                            placeholder="Add remarks…">
                    </div>
                </div>
                `).join('')}
            </div>
        </div>
    `).join('');

    updatePreDiveSystemSelect();
}

function updatePreDiveGroupSummary(gi) {
    const el = document.getElementById(`pd-group-summary-${gi}`);
    if (!el) return;
    const group = preDiveGroups[gi];
    let ok = 0, fault = 0, none = 0;
    group.items.forEach(item => {
        const checked = document.querySelector(`input[name="pd_status_${item.key}"]:checked`);
        if (!checked) none++;
        else if (checked.value === 'OK') ok++;
        else fault++;
    });
    const total = group.items.length;
    el.innerHTML = `
        ${ok > 0 ? `<span class="px-2 py-0.5 rounded-full bg-green-500/15 text-green-400 border border-green-500/30">${ok} OK</span>` : ''}
        ${fault > 0 ? `<span class="px-2 py-0.5 rounded-full bg-red-500/15 text-red-400 border border-red-500/30">${fault} Fault</span>` : ''}
        ${none > 0 ? `<span class="px-2 py-0.5 rounded-full bg-gray-700/50 text-gray-500 border border-gray-600/30">${none} Pending</span>` : ''}
    `;
}

const postDiveGroups = [
    {
        title: 'Mechanical',
        items: [
            { key: 'thrusters', label: 'Thrusters cleaned and inspected' },
            { key: 'props',     label: 'Propellers free of debris' },
            { key: 'frame',     label: 'Frame inspected for damage' },
            { key: 'buoyancy',  label: 'Buoyancy modules checked' },
            { key: 'fasteners', label: 'All fasteners tightened' },
        ]
    },
    {
        title: 'Optics & Sensors',
        items: [
            { key: 'dome',        label: 'Camera dome cleaned' },
            { key: 'lights',      label: 'Lights cleaned and functional' },
            { key: 'sensorMount', label: 'Sensor mounting secure' },
            { key: 'fogging',     label: 'No fogging or water spots on optics' },
        ]
    },
    {
        title: 'Leak / Water Ingression',
        items: [
            { key: 'housings',     label: 'Housings opened and checked' },
            { key: 'condensation', label: 'No condensation detected' },
            { key: 'orings',       label: 'No O-ring damage or deformation' },
            { key: 'connectors',   label: 'Connectors dry and sealed' },
        ]
    },
    {
        title: 'General Condition',
        items: [
            { key: 'tether',  label: 'Tether connection inspected' },
            { key: 'cuts',    label: 'No cuts or abrasions near plug' },
            { key: 'smell',   label: 'No burning smell detected' },
            { key: 'storage', label: 'Unit dried and stored properly' },
        ]
    }
];

function renderPostDiveChecklist() {
    const container = document.getElementById('post-dive-list-container');
    if (!container) return;

    container.className = "space-y-5";

    container.innerHTML = postDiveGroups.map((group, gi) => `
        <div class="chart-card overflow-hidden">
            <div class="chart-card-header">
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                         style="background:rgba(96,165,250,0.12);color:#60a5fa;border:1px solid rgba(96,165,250,0.25);">
                        ${gi + 1}
                    </div>
                    <div>
                        <div class="chart-title">${group.title}</div>
                        <div class="text-[11px] text-gray-500 mt-0.5">${group.items.length} check item${group.items.length !== 1 ? 's' : ''}</div>
                    </div>
                </div>
                <div id="pd2-group-summary-${gi}" class="flex items-center gap-2 text-xs font-medium"></div>
            </div>

            <div class="divide-y divide-gray-700/60">
                <div class="grid text-[10px] font-bold uppercase tracking-widest text-gray-500 px-5 py-2 bg-gray-800/60"
                     style="grid-template-columns:1fr 130px;">
                    <span>Check Item</span>
                    <span>Status</span>
                </div>

                ${group.items.map(item => `
                <div class="grid items-center px-5 py-3 hover:bg-gray-700/20 transition-colors group"
                     style="grid-template-columns:1fr 130px;">

                    <div class="flex items-center gap-3 pr-4">
                        <div class="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-blue-400 transition-colors flex-shrink-0"></div>
                        <span class="text-sm text-gray-200 leading-snug">${item.label}</span>
                    </div>

                    <div>
                        <label class="cursor-pointer block" onclick="">
                            <input type="checkbox" id="post_${item.key}" class="sr-only peer"
                                   onchange="updatePostDiveGroupSummary(${gi}); _syncPostDivePill(this)">
                            <div id="post_pill_${item.key}"
                                 class="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all select-none
                                        border-gray-600 text-gray-500 bg-gray-800">
                                <svg class="w-3 h-3 hidden" id="post_tick_${item.key}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                                </svg>
                                <span id="post_label_${item.key}">Pending</span>
                            </div>
                        </label>
                    </div>
                </div>
                `).join('')}
            </div>
        </div>
    `).join('');

    postDiveGroups.forEach((_, gi) => updatePostDiveGroupSummary(gi));
}

function _syncPostDivePill(checkbox) {
    const key = checkbox.id.replace('post_', '');
    const pill  = document.getElementById(`post_pill_${key}`);
    const tick  = document.getElementById(`post_tick_${key}`);
    const label = document.getElementById(`post_label_${key}`);
    if (!pill) return;
    if (checkbox.checked) {
        pill.className  = pill.className.replace('border-gray-600 text-gray-500 bg-gray-800', '').trim()
                        + ' border-green-500 text-green-400 bg-green-500/10';
        tick.classList.remove('hidden');
        label.textContent = 'Done';
    } else {
        pill.className  = pill.className.replace('border-green-500 text-green-400 bg-green-500/10', '').trim()
                        + ' border-gray-600 text-gray-500 bg-gray-800';
        tick.classList.add('hidden');
        label.textContent = 'Pending';
    }
}

function updatePostDiveGroupSummary(gi) {
    const el = document.getElementById(`pd2-group-summary-${gi}`);
    if (!el) return;
    const group = postDiveGroups[gi];
    let done = 0, pending = 0;
    group.items.forEach(item => {
        const cb = document.getElementById(`post_${item.key}`);
        if (cb && cb.checked) done++; else pending++;
    });
    el.innerHTML = `
        ${done > 0    ? `<span class="px-2 py-0.5 rounded-full bg-green-500/15 text-green-400 border border-green-500/30">${done} Done</span>` : ''}
        ${pending > 0 ? `<span class="px-2 py-0.5 rounded-full bg-gray-700/50 text-gray-500 border border-gray-600/30">${pending} Pending</span>` : ''}
    `;
}

// 2. POPULATE THE SYSTEM DROPDOWN (From Tab 2)
function updatePreDiveSystemSelect() {
    const select = document.getElementById('preDiveSystemSelect');
    if(!select) return;
    
    const currentValue = select.value; // Remember selection
    select.innerHTML = '<option value="" disabled selected>Select System</option>';
    
    // Grab systems from the Minispector Systems tab inputs
    document.querySelectorAll('.system-name').forEach(input => {
        const name = input.value.trim();
        if(name) {
            const opt = document.createElement('option');
            opt.value = name;
            opt.innerText = name;
            select.appendChild(opt);
        }
    });

    if (currentValue) select.value = currentValue; // Restore selection
}

function renderAuxToolTable() {
    document.getElementById('auxToolBody').innerHTML = auxTools.map(t => `
        <tr class="hover:bg-gray-700/50">
            <td class="font-bold text-gray-300 py-3 pl-4">${t.label}</td>
            <td>
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="status_${t.key}" class="sr-only peer" onchange="updateToggleLabel(this, 'label_${t.key}')">
                    <div class="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-bg after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                    <span id="label_${t.key}" class="ml-3 text-sm font-bold text-red-400 w-12"></span>
                </label>
            </td>
            <td><input type="text" id="note_${t.key}" class="p-1 text-xs" placeholder="Condition / Notes..."></td>
        </tr>`).join('');
}

function renderGrids() {
    const emptyState = (msg) => `<p class="text-gray-500 italic text-center py-8">${msg}</p>`;
    
    // 1. Dive Logs
    const dives = currentReportData.diveLogs;
    document.getElementById('dive-log-container').innerHTML = dives.length === 0 ? emptyState("No dives recorded.") : 
        `<div class="overflow-x-auto bg-gray-800 rounded-lg border border-gray-700">
            <table class="w-full text-left text-gray-300 text-sm">
                <thead class="bg-gray-700 text-xs uppercase font-bold text-gray-400">
                    <tr><th class="px-4 py-3">Dive #</th><th class="px-4 py-3">ROV</th><th class="px-4 py-3">Start Date</th><th class="px-4 py-3">Time</th><th class="px-4 py-3">Depth</th><th class="px-4 py-3">Duration</th><th class="px-4 py-3">Purpose</th><th class="px-4 py-3 text-right">Actions</th></tr>
                </thead>
                <tbody class="divide-y divide-gray-700">
                    ${dives.map((log, i) => `
                    <tr class="hover:bg-gray-700/50 transition">
                        <td class="px-4 py-3 font-bold text-blue-400">${log.num}</td>
                        <td class="px-4 py-3 text-orange-400 font-medium">${log.rov || '—'}</td>
                        <td class="px-4 py-3">${log.date}</td>
                        <td class="px-4 py-3">${log.startTime} - ${log.endTime}</td>
                        <td class="px-4 py-3">${log.depth} KM</td>
                        <td class="px-4 py-3">${log.duration}</td>
                        <td class="px-4 py-3">${log.purpose}</td>
                        <td class="px-4 py-3 text-right">
                            <button onclick="openModal('diveLogs', ${i})" class="text-blue-400 hover:text-blue-300 mr-3 font-bold">Edit</button>
                            <button onclick="removeLog('diveLogs', ${i})" class="text-red-400 hover:text-red-300 font-bold">Del</button>
                        </td>
                    </tr>`).join('')}
                </tbody>
            </table>
        </div>`;

    // 2. Standby Logs
    const standby = currentReportData.standbyLogs;
    document.getElementById('standby-log-container').innerHTML = standby.length === 0 ? emptyState("No standby time recorded.") : 
        `<div class="overflow-x-auto bg-gray-800 rounded-lg border border-gray-700">
            <table class="w-full text-left text-gray-300 text-sm">
                <thead class="bg-gray-700 text-xs uppercase font-bold text-gray-400">
                    <tr><th class="px-4 py-3">ID</th><th class="px-4 py-3">Start Date</th><th class="px-4 py-3">Time Range</th><th class="px-4 py-3">Duration</th><th class="px-4 py-3">Category</th><th class="px-4 py-3 text-right">Actions</th></tr>
                </thead>
                <tbody class="divide-y divide-gray-700">
                    ${standby.map((log, i) => `
                    <tr class="hover:bg-gray-700/50 transition">
                        <td class="px-4 py-3 font-bold text-yellow-500">${log.id}</td>
                        <td class="px-4 py-3">${log.date}</td>
                        <td class="px-4 py-3">${log.startTime} - ${log.endTime}</td>
                        <td class="px-4 py-3">${log.duration}</td>
                        <td class="px-4 py-3">${log.category}</td>
                        <td class="px-4 py-3 text-right">
                            <button onclick="openModal('standbyLogs', ${i})" class="text-blue-400 hover:text-blue-300 mr-3 font-bold">Edit</button>
                            <button onclick="removeLog('standbyLogs', ${i})" class="text-red-400 hover:text-red-300 font-bold">Del</button>
                        </td>
                    </tr>`).join('')}
                </tbody>
            </table>
        </div>`;

    // 3. Maintenance Logs
    const maint = currentReportData.maintenanceLogs;
    document.getElementById('maint-log-container').innerHTML = maint.length === 0 ? emptyState("No maintenance recorded.") : 
        `<div class="overflow-x-auto bg-gray-800 rounded-lg border border-gray-700">
            <table class="w-full text-left text-gray-300 text-sm">
                <thead class="bg-gray-700 text-xs uppercase font-bold text-gray-400">
                    <tr><th class="px-4 py-3">ID</th><th class="px-4 py-3">Date</th><th class="px-4 py-3">Task</th><th class="px-4 py-3">By</th><th class="px-4 py-3 text-right">Actions</th></tr>
                </thead>
                <tbody class="divide-y divide-gray-700">
                    ${maint.map((log, i) => `
                    <tr class="hover:bg-gray-700/50 transition">
                        <td class="px-4 py-3 font-bold text-yellow-500">${log.id}</td>
                        <td class="px-4 py-3">${log.date}</td>
                        <td class="px-4 py-3">${log.task}</td>
                        <td class="px-4 py-3">${log.by}</td>
                        <td class="px-4 py-3 text-right">
                            <button onclick="openModal('maintenanceLogs', ${i})" class="text-blue-400 hover:text-blue-300 mr-3 font-bold">Edit</button>
                            <button onclick="removeLog('maintenanceLogs', ${i})" class="text-red-400 hover:text-red-300 font-bold">Del</button>
                        </td>
                    </tr>`).join('')}
                </tbody>
            </table>
        </div>`;

    // 4. HSE Reports
    const hse = currentReportData.hseReports;
    document.getElementById('hse-log-container').innerHTML = hse.length === 0 ? emptyState("No HSE incidents.") : 
        `<div class="overflow-x-auto bg-gray-800 rounded-lg border border-red-900/30">
            <table class="w-full text-left text-gray-300 text-sm">
                <thead class="bg-red-900/20 text-xs uppercase font-bold text-red-400">
                    <tr><th class="px-4 py-3">ID</th><th class="px-4 py-3">Type</th><th class="px-4 py-3">Description</th><th class="px-4 py-3 text-right">Actions</th></tr>
                </thead>
                <tbody class="divide-y divide-gray-700">
                    ${hse.map((log, i) => `
                    <tr class="hover:bg-gray-700/50 transition">
                        <td class="px-4 py-3 font-bold text-red-400">${log.id}</td>
                        <td class="px-4 py-3 font-bold">${log.type}</td>
                        <td class="px-4 py-3 text-xs text-gray-400">${log.desc.substring(0, 60)}${log.desc.length > 60 ? '...' : ''}</td>
                        <td class="px-4 py-3 text-right">
                            <button onclick="openModal('hseReports', ${i})" class="text-blue-400 hover:text-blue-300 mr-3 font-bold">Edit</button>
                            <button onclick="removeLog('hseReports', ${i})" class="text-red-400 hover:text-red-300 font-bold">Del</button>
                        </td>
                    </tr>`).join('')}
                </tbody>
            </table>
        </div>`;

    // 5. Technical Faults (THIS WAS MISSING)
    renderFaultTable(); 
}

function removeLog(section, index) {
    if (currentUserRole === 'reviewer') return;
    if (confirm("Are you sure you want to delete this entry?")) {
        currentReportData[section].splice(index, 1);
        renderGrids();
        renderInfographics();
    }
}

// ==========================================
// 7. MODAL LOGIC (UPDATED FOR MULTI-DAY)
// ==========================================

function setupAutoCalc(startDateId, startTimeId, endDateId, endTimeId, durationId) {
    const calc = () => {
        const sDate = document.getElementById(startDateId)?.value;
        const sTime = document.getElementById(startTimeId)?.value;
        const eDate = document.getElementById(endDateId)?.value;
        const eTime = document.getElementById(endTimeId)?.value;

        if (sDate && sTime && eDate && eTime) {
            // Create Date objects (YYYY-MM-DDTHH:MM)
            const startObj = new Date(`${sDate}T${sTime}`);
            const endObj = new Date(`${eDate}T${eTime}`);

            // Calculate difference in milliseconds
            const diffMs = endObj - startObj;

            if (diffMs >= 0) {
                const totalMins = Math.floor(diffMs / 60000);
                const hrs = Math.floor(totalMins / 60);
                const mins = totalMins % 60;

                let res = [];
                if (hrs > 0) res.push(`${hrs} hrs`);
                if (mins > 0) res.push(`${mins} mins`);
                document.getElementById(durationId).value = res.join(' ') || '0 mins';
            } else {
                document.getElementById(durationId).value = "Check Dates"; // Handle negative time
            }
        }
    };

    // Attach listeners to all 4 fields if they exist
    [startDateId, startTimeId, endDateId, endTimeId].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', calc);
    });
}

function openModal(section, index = -1) {
    if (currentUserRole === 'reviewer') { showToast('View only — editing is not available in review mode.', 'warn'); return; }
    modalSection = section;
    modalIndex = index;
    document.getElementById('entry-modal').style.display = 'flex';
    const entry = (index > -1) ? currentReportData[section][index] : {};
    const container = document.getElementById('modal-content-area');
    
    // Auto ID Helper
    const pad = (n) => (n < 10 ? '0' + n : n);
    const getNextId = (prefix) => {
        if (index > -1 && entry.id) return entry.id; // Return existing ID if editing
        const count = currentReportData[section].length + 1;
        return prefix + pad(count);
    };

    container.innerHTML = ''; // Clear previous content

    if (section === 'shiftLogs') {
        const nextNo = index > -1 ? entry.shiftNo : (currentReportData.shiftLogs.length + 1);
        const opt = (val, label, cur) => `<option value="${val}" ${cur===val?'selected':''}>${label}</option>`;
        const roster = getCrewRoster();
        const selectedCrew = entry.crew || [];

        const crewSection = roster.length === 0
            ? `<p style="color:#6b7280;font-size:0.75rem;font-style:italic;padding:8px 0;">Add crew members in the Crew tab first, then they'll appear here.</p>`
            : roster.map(c => {
                const color = ROLE_COLORS_MAP[c.role] || '#6b7280';
                return `<label style="display:flex;align-items:center;gap:10px;padding:7px 10px;border-radius:8px;cursor:pointer;transition:background 0.15s;" onmouseover="this.style.background='rgba(255,255,255,0.04)'" onmouseout="this.style.background='transparent'">
                    <input type="checkbox" value="${escapeHtml(c.name)}" ${selectedCrew.includes(c.name)?'checked':''} style="width:15px;height:15px;accent-color:#459fd9;flex-shrink:0;">
                    <div style="width:28px;height:28px;border-radius:50%;background:${color}22;color:${color};border:1px solid ${color}44;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:0.68rem;flex-shrink:0;">${getInitials(c.name)}</div>
                    <span style="font-size:0.82rem;color:#d1d5db;font-weight:500;flex:1;">${escapeHtml(c.name)}</span>
                    <span style="font-size:0.68rem;color:${color};font-weight:600;">${escapeHtml(c.role)}</span>
                </label>`;
            }).join('');

        container.innerHTML = `
            <div class="grid-2">
                <div><label class="text-xs text-gray-500">Shift No.</label><input id="m_sh_no" value="${nextNo}"></div>
                <div></div>
            </div>
            <div class="grid-2">
                <div><label class="text-xs text-gray-500">Start Date</label><input type="date" id="m_sh_start" value="${entry.startDate||''}"></div>
                <div><label class="text-xs text-gray-500">End Date</label><input type="date" id="m_sh_end" value="${entry.endDate||''}"></div>
            </div>
            <div class="grid-2">
                <div><label class="text-xs text-gray-500">Weather</label>
                    <select id="m_sh_weather"><option value="">— Select —</option>
                        ${['Clear / Sunny','Partly Cloudy','Overcast','Hazy','Fog / Mist','Light Rain / Drizzle','Heavy Rain','Thunderstorms','Squalls / High Winds'].map(w=>opt(w,w,entry.weather)).join('')}
                    </select>
                </div>
                <div><label class="text-xs text-gray-500">Visibility</label>
                    <select id="m_sh_vis"><option value="">— Select —</option>
                        ${['Excellent (> 10m)','Good (5 - 10m)','Moderate (3 - 5m)','Poor (1 - 3m)','Very Poor (< 1m)','No Visibility'].map(v=>opt(v,v,entry.visibility)).join('')}
                    </select>
                </div>
            </div>
            <div><label class="text-xs text-gray-500">Temperature (°C)</label><input id="m_sh_temp" value="${entry.temperature||''}"></div>
            <div><label class="text-xs text-gray-500">Notes</label><textarea id="m_sh_notes">${entry.notes||''}</textarea></div>
            <div>
                <label class="text-xs text-gray-500" style="display:block;margin-bottom:6px;">Crew on this Shift</label>
                <div id="m_sh_crew_list" style="border:1px solid rgba(255,255,255,0.06);border-radius:10px;padding:4px;max-height:180px;overflow-y:auto;">${crewSection}</div>
            </div>`;
        return;
    }

    if (section === 'diveLogs') {
        const endDateVal = entry.endDate || entry.date || '';

        // Build ROV selector from simulation roster if available, else free text
        const rovRoster = preOpData?.rovs || [];
        const rovField = rovRoster.length > 0
            ? `<select id="m_rov">
                ${rovRoster.map(r => `<option value="MS-${r.rovNumber}" ${entry.rov === `MS-${r.rovNumber}` ? 'selected' : ''}>MS-${r.rovNumber} — ${r.role.toUpperCase()}</option>`).join('')}
               </select>`
            : `<input id="m_rov" value="${entry.rov || ''}" placeholder="e.g. MS-1">`;

        container.innerHTML = `
            <div class="grid-2">
                <div><label class="text-xs text-gray-500">Dive #</label><input id="m_num" value="${entry.num || getNextId('DL')}"></div>
                <div><label class="text-xs text-gray-500">ROV</label>${rovField}</div>
            </div>

            <div class="grid-2">
                <div><label class="text-xs text-gray-500">Start Date</label><input type="date" id="m_date" value="${entry.date || ''}"></div>
                <div><label class="text-xs text-gray-500">Start Time</label><input type="time" id="m_start" value="${entry.startTime || ''}"></div>
            </div>

            <div class="grid-2">
                <div><label class="text-xs text-gray-500">End Date</label><input type="date" id="m_end_date" value="${endDateVal}"></div>
                <div><label class="text-xs text-gray-500">End Time</label><input type="time" id="m_end" value="${entry.endTime || ''}"></div>
            </div>

            <div class="grid-2">
                <div><label class="text-xs text-gray-500">Depth</label><input id="m_depth" value="${entry.depth || ''}"></div>
                <div><label class="text-xs text-gray-500">Duration</label><input id="m_dur" value="${entry.duration || ''}" readonly class="bg-gray-700 text-gray-300"></div>
            </div>

            <div><label class="text-xs text-gray-500">Purpose</label><input id="m_purp" value="${entry.purpose || ''}"></div>
            <div><label class="text-xs text-gray-500">Area</label><input id="m_area" value="${entry.area || ''}"></div>
            <div><label class="text-xs text-gray-500">Issues</label><textarea id="m_iss">${entry.issues || ''}</textarea></div>
            <div><label class="text-xs text-gray-500">Client Instructions</label><textarea id="m_cli">${entry.client || ''}</textarea></div>
            <div><label class="text-xs text-gray-500">Notes</label><textarea id="m_note">${entry.notes || ''}</textarea></div>`;
        
        setupAutoCalc('m_date', 'm_start', 'm_end_date', 'm_end', 'm_dur');

    } 
    // ... inside openModal ...
    else if (section === 'faultLogs') {
        container.innerHTML = `
            <div class="grid-2">
                <div>
                    <label class="text-xs text-gray-500">Status</label>
                    <select id="m_flt_status" class="bg-gray-700 text-white p-2 rounded w-full">
                        <option value="Open">Open (Active)</option>
                        <option value="Closed">Closed (Resolved)</option>
                        <option value="Monitoring">Monitoring</option>
                    </select>
                </div>
                <div>
                    <label class="text-xs text-gray-500">Technician</label>
                    <input id="m_flt_tech" value="${entry.tech || ''}">
                </div>
            </div>

            <div>
                <label class="text-xs text-gray-500">Fault Description</label>
                <textarea id="m_flt_desc" rows="2">${entry.desc || ''}</textarea>
            </div>

            <div>
                <label class="text-xs text-gray-500">Corrective Action</label>
                <textarea id="m_flt_act" rows="2">${entry.action || ''}</textarea>
            </div>

            <div class="grid-2">
                <div>
                    <label class="text-xs text-gray-500">Parts Used</label>
                    <input id="m_flt_parts" value="${entry.parts || ''}">
                </div>
                <div>
                    <label class="text-xs text-gray-500">Remaining Issues</label>
                    <input id="m_flt_rem" value="${entry.remaining || ''}">
                </div>
            </div>

            <div class="border-t border-gray-700 pt-3 mt-2">
                <label class="text-xs text-gray-500 mb-1 block">Upload Photos</label>
                <div class="flex items-center gap-2">
                    <input type="file" id="m_flt_photos" multiple class="block w-full text-xs text-gray-400
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-xs file:font-semibold
                        file:bg-gray-700 file:text-blue-400
                        hover:file:bg-gray-600
                    "/>
                </div>
                <p class="text-[10px] text-gray-500 mt-1" id="m_photo_label">
                    ${entry.photos ? `Current: ${entry.photos.map(p => p.name).join(', ')}` : 'No photos selected'}
                </p>
            </div>
        `;
        
        if (entry.status) document.getElementById('m_flt_status').value = entry.status;
    }
    else if (section === 'maintenanceLogs') {
        container.innerHTML = `
            <div class="grid-2">
                <div>
                    <label class="text-xs text-gray-500">ID</label>
                    <input id="m_mnt_id" value="${entry.id || getNextId('MNT')}" disabled class="opacity-50 cursor-not-allowed">
                </div>
                <div>
                    <label class="text-xs text-gray-500">Date</label>
                    <input type="date" id="m_date" value="${entry.date || ''}">
                </div>
            </div>

            <div class="grid-2">
                <div>
                    <label class="text-xs text-gray-500">By</label>
                    <input id="m_by" value="${entry.by || ''}">
                </div>
                <div>
                    <label class="text-xs text-gray-500">Task</label>
                    <input id="m_task" value="${entry.task || ''}">
                </div>
            </div>

            <div>
                <label class="text-xs text-gray-500">Details</label>
                <textarea id="m_det">${entry.details || ''}</textarea>
            </div>

            <div>
                <label class="text-xs text-gray-500">Parts Used</label>
                <input id="m_part" value="${entry.parts || ''}">
            </div>

            <div>
                <label class="text-xs text-gray-500">Remarks</label>
                <input id="m_rem" value="${entry.remarks || ''}">
            </div>
        `;

    } else if (section === 'hseReports') {
        container.innerHTML = `
            <div class="grid-2">
                 <div>
                    <label class="text-xs text-gray-500">ID</label>
                    <input id="m_hse_id" value="${entry.id || getNextId('HSE')}" disabled class="opacity-50 cursor-not-allowed">
                </div>
                <div>
                    <label class="text-xs text-gray-500">Type</label>
                    <select id="m_type" class="bg-gray-700 text-white p-2 rounded w-full">
                        <option>Incident</option>
                        <option>Near Miss</option>
                        <option>Hazard Observation</option>
                    </select>
                </div>
            </div>

            <div>
                <label class="text-xs text-gray-500">Description</label>
                <textarea id="m_desc">${entry.desc || ''}</textarea>
            </div>

            <div>
                <label class="text-xs text-gray-500">Immediate Action</label>
                <textarea id="m_act">${entry.action || ''}</textarea>
            </div>

            <div>
                <label class="text-xs text-gray-500">Root Cause</label>
                <textarea id="m_root">${entry.root || ''}</textarea>
            </div>

            <div>
                <label class="text-xs text-gray-500">Prevention</label>
                <textarea id="m_prev">${entry.prev || ''}</textarea>
            </div>
        `;

        if (entry.type) {
            const typeSelect = document.getElementById('m_type');
            if(typeSelect) typeSelect.value = entry.type;
        }

    } else if (section === 'standbyLogs') {
        const endDateVal = entry.endDate || entry.date || '';

        container.innerHTML = `
            <div class="grid-2">
                <div><label class="text-xs text-gray-500">ID</label><input id="m_sb_id" disabled value="${entry.id || getNextId('SB')}" class="opacity-50"></div>
                <div></div>
            </div>
            
            <div><label class="text-xs text-gray-500">Logged By</label><input id="m_sb_by" value="${entry.by || ''}"></div>
            
            <div class="grid-2">
                <div><label class="text-xs text-gray-500">Start Date</label><input type="date" id="m_sb_date" value="${entry.date || ''}"></div>
                <div><label class="text-xs text-gray-500">Start Time</label><input type="time" id="m_sb_start" value="${entry.startTime || ''}"></div>
            </div>
            
             <div class="grid-2">
                <div><label class="text-xs text-gray-500">End Date</label><input type="date" id="m_sb_end_date" value="${endDateVal}"></div>
                <div><label class="text-xs text-gray-500">End Time</label><input type="time" id="m_sb_end" value="${entry.endTime || ''}"></div>
            </div>

            <div class="grid-2">
                <div><label class="text-xs text-gray-500">Duration</label><input id="m_sb_dur" value="${entry.duration || ''}" placeholder="e.g. 2 hrs" readonly class="bg-gray-700 text-gray-300"></div>
                <div><label class="text-xs text-gray-500">Category</label><select id="m_sb_cat" class="bg-gray-700 text-white p-2 rounded w-full"><option>Mechanical Fault</option><option>Vessel Operations</option><option>Weather</option><option>Crew Change</option><option>Maintenance</option><option>Client Request</option></select></div>
            </div>
            <div><label class="text-xs text-gray-500">Description</label><textarea id="m_sb_desc">${entry.desc || ''}</textarea></div>`;
            
        if (entry.category) document.getElementById('m_sb_cat').value = entry.category;
        
        setupAutoCalc('m_sb_date', 'm_sb_start', 'm_sb_end_date', 'm_sb_end', 'm_sb_dur');
    }
}


function addSystemRow(name = '', isDefault = false) {
    const container = document.getElementById('system-container');
    const tr = document.createElement('tr');
    tr.className = "system-row hover:bg-gray-700/30 transition-colors duration-150";
    
    // Check the radio button if this system is the default
    const checkedState = isDefault ? 'checked' : '';

    tr.innerHTML = `
        <td class="p-3 text-center align-middle">
            <div class="flex justify-center">
                <input type="radio" name="defaultSystem" class="system-default-radio w-5 h-5 accent-[--color-mcs-orange] cursor-pointer" ${checkedState}>
            </div>
        </td>
        <td class="p-3">
            <input type="text" class="system-name bg-gray-900 border border-gray-600 text-white text-sm rounded px-3 py-2 w-full outline-none focus:border-blue-500 font-bold" 
       value="${name}">
        </td>
        <td class="p-3 text-center align-middle">
            <button onclick="this.closest('tr').remove()" class="group bg-transparent hover:bg-red-900/30 p-2 rounded-lg transition-all" title="Remove">
                 <span class="text-red-500 font-bold group-hover:text-red-400 text-lg">✕</span>
            </button>
        </td>
    `;
    container.appendChild(tr);
}

function closeModal() { document.getElementById('entry-modal').style.display = 'none'; }

document.getElementById('modal-save-btn').addEventListener('click', () => {

    const getV = (id) => {
        const el = document.getElementById(id);
        if (!el) {
            console.warn(`Warning: Element with ID '${id}' not found when saving.`);
            return ''; 
        }
        return el.value;
    };

    let newEntry = {};



    // ================= DIVE LOGS =================
    if (modalSection === 'diveLogs') {
        newEntry = {
            num: getV('m_num'),
            rov: getV('m_rov'),
            date: getV('m_date'),
            endDate: getV('m_end_date'),
            startTime: getV('m_start'),
            endTime: getV('m_end'),
            depth: getV('m_depth'),
            duration: getV('m_dur'),
            purpose: getV('m_purp'),
            area: getV('m_area'),
            issues: getV('m_iss'),
            client: getV('m_cli'),
            notes: getV('m_note')
        };
    }

    // ================= MAINTENANCE =================
    else if (modalSection === 'maintenanceLogs') {
        newEntry = {
            id: getV('m_mnt_id'), 
            date: getV('m_date'),
            by: getV('m_by'),
            task: getV('m_task'),
            details: getV('m_det'),
            parts: getV('m_part'),
            remarks: getV('m_rem')
        };
    }

    // ================= HSE =================
    else if (modalSection === 'hseReports') {
        newEntry = {
            id: getV('m_hse_id'), 
            type: getV('m_type'),
            desc: getV('m_desc'),
            action: getV('m_act'),
            root: getV('m_root'),
            prev: getV('m_prev')
        };
    }

    // ... inside modal-save-btn listener ...
    
    // ================= FAULTS =================
    else if (modalSection === 'faultLogs') {
        const fileInput = document.getElementById('m_flt_photos');
        
        // Handle Photos: Keep old ones if no new ones uploaded
        let photoData = (modalIndex > -1 && currentReportData.faultLogs[modalIndex].photos) 
            ? currentReportData.faultLogs[modalIndex].photos 
            : [];

        if (fileInput && fileInput.files.length > 0) {
            // Convert FileList to a simple array of objects for JSON storage
            photoData = Array.from(fileInput.files).map(f => ({
                name: f.name,
                path: f.path, // Electron provides full path
                type: f.type
            }));
        }

        newEntry = {
            status: getV('m_flt_status'),
            tech: getV('m_flt_tech'),
            desc: getV('m_flt_desc'),
            action: getV('m_flt_act'),
            parts: getV('m_flt_parts'),
            remaining: getV('m_flt_rem'),
            photos: photoData
        };
    }

    // ================= STANDBY =================
    else if (modalSection === 'standbyLogs') {
        newEntry = {
            id: getV('m_sb_id'),
            date: getV('m_sb_date'),
            endDate: getV('m_sb_end_date'),
            by: getV('m_sb_by'),
            startTime: getV('m_sb_start'),
            endTime: getV('m_sb_end'),
            duration: getV('m_sb_dur'),
            category: getV('m_sb_cat'),
            desc: getV('m_sb_desc')
        };
    }

    // ================= SHIFT LOGS =================
    else if (modalSection === 'shiftLogs') {
        const checked = document.querySelectorAll('#m_sh_crew_list input[type=checkbox]:checked');
        newEntry = {
            shiftNo:     getV('m_sh_no'),
            startDate:   getV('m_sh_start'),
            endDate:     getV('m_sh_end'),
            weather:     getV('m_sh_weather'),
            visibility:  getV('m_sh_vis'),
            temperature: getV('m_sh_temp'),
            notes:       getV('m_sh_notes'),
            crew:        Array.from(checked).map(cb => cb.value)
        };
    }

    // SAVE / UPDATE
    if (modalIndex === -1) {
        currentReportData[modalSection].push(newEntry);
    } else {
        currentReportData[modalSection][modalIndex] = newEntry;
    }

    if (modalSection === 'shiftLogs') {
        renderShiftLog();
        renderInfographics();
        closeModal();
        return;
    }

    renderGrids();
    renderInfographics();
    closeModal();
});



// ==========================================
// 8. DATA HANDLING & I/O
// ==========================================

function collectAllData() {
    // Helper functions
    const getCheck = (id) => document.getElementById(id) ? document.getElementById(id).checked : false;
    const getValue = (id) => document.getElementById(id) ? document.getElementById(id).value : '';
    const getToggle = (id) => (document.getElementById(id) && document.getElementById(id).checked) ? "OK" : "Fault";

    // --- 1. DYNAMIC TABLE SCRAPING (The New Way) ---
    const scrapeTable = (tbodyId) => {
        const rows = document.querySelectorAll(`#${tbodyId} tr`);
        return Array.from(rows).map(row => ({
            name: row.querySelector('.row-name').value,
            status: row.querySelector('.row-status').checked ? 'OK' : 'Fault',
            model: row.querySelector('.row-model').value,
            cal: row.querySelector('.row-cal').value,
            notes: row.querySelector('.row-notes').value
        })).filter(item => item.name.trim() !== ""); 
    };

    // Scrape the two sensor tables
    const cameraSystems = scrapeTable('camLightBody');
    const otherSensors = scrapeTable('sensorBody');

    // --- 2. SIMULATION DATA (saved separately via saveSimulationJSON) ---
    const simList = [];

    // --- 3. AUX TOOLS STATUS (Keep old way if Tab 13 still uses fixed IDs, otherwise update) ---
    // Note: If you updated Aux Tools to be dynamic too, use scrapeTable('auxToolBody') instead.
    // For now, assuming Aux Tools are still fixed as per previous code:
    const toolStatus = {};
    auxTools.forEach(t => {
        toolStatus[t.key] = {
            name: t.label,
            status: getToggle(`status_${t.key}`),
            notes: getValue(`note_${t.key}`)
        };
    });

    // --- 4. CALCULATE DURATIONS ---
    const parseDur = (d) => {
        if (!d) return 0;
        const h = d.match(/(\d+)\s*hrs/), m = d.match(/(\d+)\s*mins/);
        return (h ? parseInt(h[1]) * 60 : 0) + (m ? parseInt(m[1]) : 0);
    };

    let diveMinutes = 0;
    currentReportData.diveLogs.forEach(l => diveMinutes += parseDur(l.duration));
    let sbMinutes = 0;
    currentReportData.standbyLogs.forEach(l => sbMinutes += parseDur(l.duration));

    const fmtDur = (m) => {
        const h = Math.floor(m / 60), mn = m % 60;
        let p = [];
        if (h > 0) p.push(`${h} hrs`);
        if (mn > 0) p.push(`${mn} mins`);
        return p.join(' ') || "0 mins";
    };

    // --- 5. CREW LIST ---
    const crewList = [];
    document.querySelectorAll('.crew-row').forEach(row => {
        const name = row.querySelector('.crew-name-input').value;
        const role = row.querySelector('.crew-role-select').value;
        const signOn = row.querySelector('.crew-signon-input').value;
        const signOff = row.querySelector('.crew-signoff-input').value;
        const shiftSelect = row.querySelector('.crew-shift-select');
        const shiftInput = row.querySelector('.crew-shift-input');

        const shift = (shiftSelect.style.display === 'none') ? shiftInput.value : shiftSelect.value;
        if (name) crewList.push({ name, role, shift, signOn, signOff });
    });

    const supervisorEntry = crewList.find(c => c.role === 'ROV Supervisor'); // Adjusted role name if needed
    const supervisorName = supervisorEntry ? supervisorEntry.name : "";

    // --- 6. SYSTEMS LIST ---
    const systemsList = [];
    let defaultSystemName = "N/A";
    document.querySelectorAll('.system-row').forEach(row => {
        const name = row.querySelector('.system-name').value;
        const isDefault = row.querySelector('.system-default-radio').checked;
        if (name) {
            systemsList.push({ name, isDefault });
            if (isDefault) defaultSystemName = name;
        }
    });

    // --- 7. PRE-DIVE DATA ---
    const preDiveData = {
        selectedSystem: getValue('preDiveSystemSelect'),
        overallRemarks: getValue('preDiveRemarks'),
        checks: {}
    };
    if (typeof preDiveGroups !== 'undefined') {
        preDiveGroups.forEach(group => {
            group.items.forEach(item => {
                const radio = document.querySelector(`input[name="pd_status_${item.key}"]:checked`);
                const status = radio ? radio.value : ''; 
                const comment = getValue(`pd_comment_${item.key}`);
                preDiveData.checks[item.key] = { status, comment };
            });
        });
    }

    // --- 8. RETURN FINAL OBJECT ---
    return {
        userId: currentUserId,
        Minispectornumber: getValue('Minispectornumber'),
        projectName: getValue('projectName'),
        projectCode: getValue('projectCode'),
        Vessel: getValue('Vessel'),
        operationalIdAuto: getValue('operationalIdAuto'),
        
        shiftLogs: currentReportData.shiftLogs || [],

        dailySummary: {
            startDate: getValue('startDate'),
            endDate: getValue('endDate'),
            location: getValue('location'),
            weather: getValue('weather'),
            visibility: getValue('visibility'),
            temperature: getValue('temperature'),
            shiftno: getValue('shiftno'),
            scope: getValue('scope')
        },
        
        supervisorName: supervisorName,
        crew: crewList,
        preDive: preDiveData,
        minispectorSystems: systemsList,
        activeMinispector: defaultSystemName,
        
        // NEW DATA STRUCTURES
        cameraSystems: cameraSystems,
        otherSensors: otherSensors,
        simulationList: simList,
        preOperationData: preOpData || null,
        finalSetup: currentReportData.finalSetup || null,
        
        // OLD STRUCTURES (Kept for compatibility)
        auxToolStatus: toolStatus,
        
        softwareStatus: { pilot: getCheck('soft_pilot'), hmi: getCheck('soft_hmi'), logging: getCheck('soft_logging') },
        
        larsStatus: { 
            davit: {
                winch: getValue('lars_davit_winch'),
                secure: getValue('lars_davit_secure'),
                type: getValue('lars_davit_type')
            },
            diving: {
                type: getValue('lars_diving_type'),
                clump: getCheck('lars_diving_clump')
            },
            vesselCrane: {
                type: getValue('lars_crane_type')
            },
            winch: getCheck('lars_winch'), 
            umbilical: getCheck('lars_umbilical'), 
            crane: getCheck('lars_crane'), 
            tether: getCheck('lars_tether') 
        },
        
        faultReport: {
            status: document.querySelector('input[name="sysStatus"]:checked')?.value || '',
            desc: getValue('faultDesc'),
            action: getValue('correctiveAction'),
            parts: getValue('partsUsed'),
            tech: getValue('techResponsible'),
            pending: getValue('remainingIssues')
        },
        
        postDive: {
            thrusters: getCheck('post_thrusters'), props: getCheck('post_props'), frame: getCheck('post_frame'), buoyancy: getCheck('post_buoyancy'),
            fasteners: getCheck('post_fasteners'), dome: getCheck('post_dome'), lights: getCheck('post_lights'), sensorMount: getCheck('post_sensorMount'),
            fogging: getCheck('post_fogging'), housings: getCheck('post_housings'), condensation: getCheck('post_condensation'),
            orings: getCheck('post_orings'), connectors: getCheck('post_connectors'), tether: getCheck('post_tether'), cuts: getCheck('post_cuts'),
            smell: getCheck('post_smell'), storage: getCheck('post_storage'), remarks: getValue('postDiveRemarks')
        },
        
        remarks: getValue('additionalRemarks'),
        
        // ARRAYS
        diveLogs: currentReportData.diveLogs,
        maintenanceLogs: currentReportData.maintenanceLogs,
        hseReports: currentReportData.hseReports,
        standbyLogs: currentReportData.standbyLogs,
        faultLogs: currentReportData.faultLogs,
        
        // STATS
        totalStandbyTime: fmtDur(sbMinutes),
        totalDiveDuration: fmtDur(diveMinutes),
        totalDiveCount: currentReportData.diveLogs.length,

        checklists: currentReportData.checklists || {}
    };
}

function populateUI(data) {
    if (!data) return;
    
    // 1. RESTORE STATE VARIABLES (Logs Arrays)
    currentReportData = {
        diveLogs: data.diveLogs || [],
        maintenanceLogs: data.maintenanceLogs || [],
        hseReports: data.hseReports || [],
        standbyLogs: data.standbyLogs || [],
        faultLogs: data.faultLogs || [],
        checklists: data.checklists || { mobilization: {}, startup: {}, preOp: {}, postOp: {}, shutdown: {}, demob: {} },
        finalSetup: data.finalSetup || null
    };
    
    // Helpers for setting values safely
    const setVal = (id, val) => { 
        const el = document.getElementById(id); 
        if (el) el.value = val || ''; 
    };
    const setCheck = (id, val) => { 
        const el = document.getElementById(id); 
        if (el) el.checked = !!val; 
    };

    // 2. PROJECT & ID INFO
    setVal('operationalIdAuto', data.operationalIdAuto);
    setVal('Minispectornumber', data.Minispectornumber);
    setVal('projectName', data.projectName);
    setVal('projectCode', data.projectCode);
    setVal('Vessel', data.Vessel);

    // 3. DAILY SUMMARY + SHIFT LOGS
    if (data.shiftLogs && data.shiftLogs.length > 0) {
        currentReportData.shiftLogs = data.shiftLogs;
        setTimeout(renderShiftLog, 100);
    } else if (data.dailySummary && (data.dailySummary.startDate || data.dailySummary.shiftno)) {
        // Legacy: migrate flat dailySummary into a single shift entry
        currentReportData.shiftLogs = [{
            shiftNo:     data.dailySummary.shiftno || '1',
            startDate:   data.dailySummary.startDate || '',
            endDate:     data.dailySummary.endDate || '',
            weather:     data.dailySummary.weather || '',
            visibility:  data.dailySummary.visibility || '',
            temperature: data.dailySummary.temperature || '',
            notes: ''
        }];
        setTimeout(renderShiftLog, 100);
    }
    if (data.dailySummary) {
        setVal('location', data.dailySummary.location);
        setVal('scope', data.dailySummary.scope);
    }

    // CHECKLISTS
    setTimeout(updateChecklistBadge, 0);

    // 4. CREW LIST
    const crewContainer = document.getElementById('crew-container');
    if (crewContainer) crewContainer.innerHTML = '';
    if (data.crew && Array.isArray(data.crew)) {
        data.crew.forEach(m => addCrewRow(m.name, m.role, m.shift, m.signOn, m.signOff));
    } else {
        addCrewRow('', 'ROV Supervisor');
    }
    updateCrewEmptyState();

    

    // 5. SYSTEMS LIST
    const sysContainer = document.getElementById('system-container');
    if (sysContainer) sysContainer.innerHTML = ''; 
    if (data.minispectorSystems && Array.isArray(data.minispectorSystems) && data.minispectorSystems.length > 0) {
        data.minispectorSystems.forEach(s => addSystemRow(s.name, s.isDefault));
    } else {
        addSystemRow('', true); 
    }


    
    // 6. PRE-DIVE CHECKLIST
    if (data.preDive) {
        // Set System Selector
        const sysSelect = document.getElementById('preDiveSystemSelect');
        if(sysSelect && data.preDive.selectedSystem) {
             // If option doesn't exist (e.g. from old file), add it temporarily
             if(![...sysSelect.options].some(o => o.value === data.preDive.selectedSystem)){
                 const opt = document.createElement('option');
                 opt.value = data.preDive.selectedSystem;
                 opt.innerText = data.preDive.selectedSystem;
                 sysSelect.appendChild(opt);
             }
             sysSelect.value = data.preDive.selectedSystem;
        }

        // Set Remarks
        setVal('preDiveRemarks', data.preDive.overallRemarks);

        // Set Checks (Radios & Comments)
        if (data.preDive.checks) {
            Object.entries(data.preDive.checks).forEach(([key, val]) => {
                const radio = document.querySelector(`input[name="pd_status_${key}"][value="${val.status}"]`);
                if (radio) radio.checked = true;
                setVal(`pd_comment_${key}`, val.comment);
            });
        } 
    }

const hasCam = data.cameraSystems && data.cameraSystems.length > 0;
    const hasSens = data.otherSensors && data.otherSensors.length > 0;

    if (hasCam || hasSens) {
        // Data exists -> Show Tables
        showSensorTables();
        
        // Clear before adding
        document.getElementById('camLightBody').innerHTML = '';
        document.getElementById('sensorBody').innerHTML = '';

        if (data.cameraSystems) data.cameraSystems.forEach(i => addSensorRow('camLightBody', i));
        if (data.otherSensors) data.otherSensors.forEach(i => addSensorRow('sensorBody', i));
    } else {
        // No Data -> Show Empty State options
        resetSensorTab();
    }

    // 8. SIMULATION — (handled separately in simulation mode, no DOM restore needed)

    // 8b. PRE-OPERATION DATA
    if (data.preOperationData) {
        preOpData = data.preOperationData;
        document.getElementById('nav-preop-item')?.classList.remove('hidden');
        document.getElementById('nav-finalsetup-item')?.classList.remove('hidden');
        setTimeout(renderProjectSimInfo, 100);
    }

    // 9. AUX TOOLS (Old Static Method)
    if (data.auxToolStatus) {
        Object.entries(data.auxToolStatus).forEach(([k, v]) => {
            const el = document.getElementById(`status_${k}`);
            if (el) {
                el.checked = (v.status === 'OK');
                // Manually trigger visual update for custom toggle
                const label = document.getElementById(`label_${k}`);
                if(label) {
                    label.innerText = el.checked ? "OK" : "Fault";
                    label.className = el.checked ? "ml-3 text-sm font-bold text-green-400 w-12" : "ml-3 text-sm font-bold text-red-400 w-12";
                }
            }
            setVal(`note_${k}`, v.notes);
        });
    }

    // 10. POST-DIVE CHECKLIST
    ['thrusters', 'props', 'frame', 'buoyancy', 'fasteners', 'dome', 'lights', 'sensorMount', 'fogging', 'housings', 'condensation', 'orings', 'connectors', 'tether', 'cuts', 'smell', 'storage'].forEach(k => {
        setCheck('post_' + k, data.postDive?.[k]);
        const cb = document.getElementById('post_' + k);
        if (cb) _syncPostDivePill(cb);
    });
    postDiveGroups.forEach((_, gi) => updatePostDiveGroupSummary(gi));
    setVal('postDiveRemarks', data.postDive?.remarks);

    // 11. SOFTWARE STATUS
    if (data.softwareStatus) {
        setCheck('soft_pilot', data.softwareStatus.pilot);
        setCheck('soft_hmi', data.softwareStatus.hmi);
        setCheck('soft_logging', data.softwareStatus.logging);
    }

    // 12. LARS STATUS
    if (data.larsStatus) {
        setCheck('lars_winch', data.larsStatus.winch);
        setCheck('lars_umbilical', data.larsStatus.umbilical);
        setCheck('lars_crane', data.larsStatus.crane);
        setCheck('lars_tether', data.larsStatus.tether);

        if(data.larsStatus.davit) {
            setVal('lars_davit_winch', data.larsStatus.davit.winch);
            setVal('lars_davit_secure', data.larsStatus.davit.secure);
            setVal('lars_davit_type', data.larsStatus.davit.type);
        }
        if(data.larsStatus.diving) {
            setVal('lars_diving_type', data.larsStatus.diving.type);
            setCheck('lars_diving_clump', data.larsStatus.diving.clump);
        }
        if(data.larsStatus.vesselCrane) {
            setVal('lars_crane_type', data.larsStatus.vesselCrane.type);
        }
    }

    if (data.faultReport) {
        const rb = document.querySelector(`input[name="sysStatus"][value="${data.faultReport.status}"]`);
        if (rb) rb.checked = true;
        setVal('faultDesc', data.faultReport.desc);
        setVal('correctiveAction', data.faultReport.action);
        setVal('partsUsed', data.faultReport.parts);
        setVal('techResponsible', data.faultReport.tech);
        setVal('remainingIssues', data.faultReport.pending);
    }

    setVal('additionalRemarks', data.remarks);

    renderFaultTable();
    renderGrids();
    renderInfographics();
}

document.getElementById('btn-save-pc').addEventListener('click', async () => {
    try {
        const data = collectAllData();
        const result = await window.electronAPI.saveReport(data);
        if (result.status === 'success') {
            isDirty = false; 
            document.title = "MiniSpector Log";
            // Delete draft since we now have a proper save
            window.electronAPI.deleteDraft();
            syncToCloud(); // cloud: push to Supabase after every successful save

            const saveIndicator = document.getElementById('save-indicator');
            if (saveIndicator) {
                saveIndicator.classList.remove('hidden');
                setTimeout(() => saveIndicator.classList.add('hidden'), 3000);
            } else {
                alert("Saved Successfully!");
            }
        }
    } catch (e) {
        alert("Save Error: " + e.message);
    }
});


document.getElementById('btn-load-pc').addEventListener('click', async () => {
    try {
        const data = await window.electronAPI.loadReport();
        if (data) populateUI(data);
    } catch (e) {
        alert("Load Error: " + e.message);
    }
});


async function exportWord(templateName) {
    try {
        const data = collectAllData();
        const result = await window.electronAPI.exportWord({ data, templateName });
        if (result.status === 'success') alert(`Success! Saved to:\n${result.folder || result.path}`);
    } catch (error) {
        console.error(error);
        alert("Export Failed: " + error.message);
    }
}


// 1. Open the Category Selector Modal
function openStandbySelector() {
    document.getElementById('standby-selector-modal').style.display = 'flex';
}

// 2. Close the Category Selector Modal
function closeStandbySelector() {
    document.getElementById('standby-selector-modal').style.display = 'none';
}

// 3. Logic to Create the Entry Immediately
function triggerQuickStandby(category) {
    const now = new Date();
    
    // Format Date: YYYY-MM-DD
    const dateStr = now.toISOString().split('T')[0];
    
    // Format Time: HH:MM
    const timeStr = now.toTimeString().substring(0, 5);

    // Generate a simple ID
    const count = currentReportData.standbyLogs.length + 1;
    const newId = 'SB' + (count < 10 ? '0' + count : count);

    // Create the new entry object
    const newEntry = {
        id: newId,
        date: dateStr,
        startTime: timeStr,
        endDate: '',    // Left empty for now
        endTime: '',    // Left empty for now
        duration: 'In Progress', // Placeholder text
        category: category,
        desc: '',
        by: ''
    };

    // Add to data
    currentReportData.standbyLogs.push(newEntry);

    // Update UI
    renderGrids();
    renderInfographics();

    // Close Modal
    closeStandbySelector();
}
// ==========================================
// QUICK DIVE LOGIC
// ==========================================

function triggerQuickDive() {
    const now = new Date();
    
    // 1. Get Date (YYYY-MM-DD)
    const dateStr = now.toISOString().split('T')[0];
    
    // 2. Get Time (HH:MM)
    const timeStr = now.toTimeString().substring(0, 5);


    const count = currentReportData.diveLogs.length + 1;
    const newNum = 'DL' + (count < 10 ? '0' + count : count);

    // 4. Create Entry
    const newEntry = {
        num: newNum,
        date: dateStr,
        startTime: timeStr,
        endDate: '',    // Empty until finished
        endTime: '',    // Empty until finished
        depth: '',      
        duration: 'In Progress',
        purpose: '', // Default
        area: '',
        issues: '',
        client: '',
        notes: ''
    };

    // 5. Save and Render
    currentReportData.diveLogs.push(newEntry);
    renderGrids();
    renderInfographics();
}

// ==========================================
// 9. CHARTS & INFOGRAPHICS (FINAL)
// ==========================================

// ==========================================
// UPDATED RENDER INFOGRAPHICS
// ==========================================
function renderInfographics() {
    const data = collectAllData();
    const allLogs = [];

    // --- 1. HELPER: Time Parsing ---
    const parseDurToHours = (str) => {
        if (!str) return 0;
        let m = 0;
        const hMatch = str.match(/(\d+)\s*hrs/);
        const mMatch = str.match(/(\d+)\s*mins/);
        if (hMatch) m += parseInt(hMatch[1]) * 60;
        if (mMatch) m += parseInt(mMatch[1]);
        return parseFloat((m / 60).toFixed(2));
    };

    // --- 2. CALCULATE TOTALS ---
    let totalShiftHours = 0;
    const sDate = data.dailySummary.startDate;
    const eDate = data.dailySummary.endDate;

    // Approximate shift span from date range (no time inputs in form)
    if (sDate && eDate) {
        const startObj = new Date(sDate);
        const endObj   = new Date(eDate);
        endObj.setDate(endObj.getDate() + 1); // include the end day fully
        const diffMs = endObj - startObj;
        if (diffMs > 0) totalShiftHours = parseFloat((diffMs / 3600000).toFixed(2));
    }

    const totalDiveHours    = parseDurToHours(data.totalDiveDuration);
    const totalStandbyHours = parseDurToHours(data.totalStandbyTime);
    const totalLoggedHours  = totalDiveHours + totalStandbyHours;

    // Operational = shift time not accounted for by dives or standby
    const operationalHours = totalShiftHours > 0
        ? Math.max(0, parseFloat((totalShiftHours - totalDiveHours - totalStandbyHours).toFixed(2)))
        : 0;

    const totalDiveCount = data.diveLogs.length;
    // Utilization: dive hours as % of all logged hours (dive + standby)
    const utilizationPct = totalLoggedHours > 0 ? ((totalDiveHours / totalLoggedHours) * 100).toFixed(1) : "0";

    // --- 3. UPDATE UI TEXT (NEW LAYOUT) ---
    document.getElementById('op-total-dives').innerText = totalDiveCount;

    // Set Total Standby Hours (instead of Average)
    document.getElementById('op-total-standby').innerText = data.standbyLogs.length;
    document.getElementById('op-percentage').innerText = `${utilizationPct}%`;


    // --- 4. NEW: ACTIVE / OPEN LOGS LIST ---
    const activeListContainer = document.getElementById('active-logs-list');
    let activeHTML = '';

    // Find Open Dives (No End Time or 'In Progress')
    data.diveLogs.forEach(log => {
        if (!log.endTime || log.duration === 'In Progress') {
            activeHTML += `
                <div class="flex items-center justify-between bg-blue-900/20 border border-blue-500/30 p-2 rounded">
                    <span class="font-bold text-blue-400 text-xs">${log.num || 'DIV'}</span>
                    <span class="text-white text-xs">${log.rov ? log.rov : 'Dive'} In Progress</span>
                    <span class="text-gray-400 text-[10px] animate-pulse">● Live</span>
                </div>`;
        }
    });

    // Find Open Standby (No End Time or 'In Progress')
    data.standbyLogs.forEach(log => {
        if (!log.endTime || log.duration === 'In Progress') {
            activeHTML += `
                <div class="flex items-center justify-between bg-red-900/20 border border-red-500/30 p-2 rounded">
                    <span class="font-bold text-red-400 text-xs">${log.id || 'SB'}</span>
                    <span class="text-white text-xs">${log.category || 'Standby'}</span>
                    <span class="text-gray-400 text-[10px] animate-pulse">● Live</span>
                </div>`;
        }
    });

    if (activeHTML === '') {
        activeListContainer.innerHTML = `<p class="text-gray-500 italic text-xs text-center py-2">No active operations.</p>`;
    } else {
        activeListContainer.innerHTML = activeHTML;
    }


    // --- 5. ROV STATUS LOGIC ---
    // (Combine logs for sorting)
    data.diveLogs.forEach(l => {
        if (l.date && l.startTime) {
            const timestamp = l.endTime ? new Date(`${l.endDate || l.date}T${l.endTime}`) : new Date(`${l.date}T${l.startTime}`);
            allLogs.push({ type: 'DIVE', timestamp: timestamp, isOpen: !l.endTime });
        }
    });
    data.standbyLogs.forEach(l => {
        if (l.date && l.startTime) {
            const timestamp = l.endTime ? new Date(`${l.endDate || l.date}T${l.endTime}`) : new Date(`${l.date}T${l.startTime}`);
            allLogs.push({ type: 'STANDBY', timestamp: timestamp, isOpen: !l.endTime });
        }
    });

    allLogs.sort((a, b) => b.timestamp - a.timestamp);

    const rovStatusEl = document.getElementById('rov-status-badge');
    if (rovStatusEl) {
        if (allLogs.length > 0 && allLogs[0].type === 'DIVE' && allLogs[0].isOpen) {
            rovStatusEl.innerHTML = `<div style="text-align:center;padding:10px 0;border-radius:10px;font-weight:800;font-size:0.85rem;letter-spacing:0.1em;color:#fff;background:linear-gradient(135deg,#1d4ed8,#2563eb);box-shadow:0 0 18px rgba(37,99,235,0.45);" class="animate-pulse">&#x25CF; DEPLOYED</div>`;
        } else if (allLogs.length > 0 && allLogs[0].type === 'STANDBY' && allLogs[0].isOpen) {
            rovStatusEl.innerHTML = `<div style="text-align:center;padding:10px 0;border-radius:10px;font-weight:800;font-size:0.85rem;letter-spacing:0.1em;color:#fff;background:linear-gradient(135deg,#991b1b,#ef4444);box-shadow:0 0 18px rgba(239,68,68,0.35);" class="animate-pulse">&#x25CF; STANDBY</div>`;
        } else {
            rovStatusEl.innerHTML = `<div style="text-align:center;padding:10px 0;border-radius:10px;font-weight:700;font-size:0.85rem;letter-spacing:0.1em;color:#9ca3af;background:#1f2937;border:1px solid #374151;">&#x25CB; ON DECK</div>`;
        }
    }

    // --- 6. MAINTENANCE COUNT ---
    const totalMaintCount = data.maintenanceLogs.length;
    const maintEl = document.getElementById('op-total-maint');
    if (maintEl) {
        maintEl.innerText = totalMaintCount;
        if (totalMaintCount > 0) {
            maintEl.classList.remove('text-gray-400', 'text-white'); maintEl.classList.add('text-red-500');
        } else {
            maintEl.classList.remove('text-red-500'); maintEl.classList.add('text-white');
        }
    }


// A. UTILIZATION CHART (Horizontal Bar)
const ctxUtil = document.getElementById('chartUtilization').getContext('2d');
if (chartUtil) chartUtil.destroy();

const gradDive = ctxUtil.createLinearGradient(0, 0, 500, 0);
gradDive.addColorStop(0, '#105ba4');
gradDive.addColorStop(1, '#459fd9');

const gradStandby = ctxUtil.createLinearGradient(0, 0, 500, 0);
gradStandby.addColorStop(0, '#b45309');
gradStandby.addColorStop(1, '#f59e0b');

chartUtil = new Chart(ctxUtil, {
    type: 'bar',
    data: {
        labels: ['Dive Operations', 'Standby / Delays', 'Operational / Other'],
        datasets: [{
            label: 'Hours',
            data: [totalDiveHours, totalStandbyHours, operationalHours],
            backgroundColor: [gradDive, gradStandby, '#2d3748'],
            borderRadius: 8,
            barThickness: 28,
            borderWidth: 0
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 600, easing: 'easeOutQuart' },
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: 'rgba(15,23,42,0.95)',
                titleColor: '#f9fafb',
                bodyColor: '#94a3b8',
                borderColor: 'rgba(255,255,255,0.08)',
                borderWidth: 1,
                padding: 12,
                cornerRadius: 8,
                displayColors: false,
                callbacks: {
                    label: ctx => `${ctx.raw} hrs`
                }
            }
        },
        scales: {
            x: {
                grid: { color: 'rgba(255,255,255,0.04)', drawBorder: false },
                ticks: { color: '#6b7280', font: { family: 'Inter', size: 11 } }
            },
            y: {
                grid: { display: false, drawBorder: false },
                ticks: { color: '#d1d5db', font: { family: 'Inter', size: 12, weight: '600' } }
            }
        }
    }
});

// B. STANDBY REASONS (Doughnut with Custom Legend)
const reasonsMap = { 'Mechanical Fault': 0, 'Vessel Operations': 0, 'Weather': 0, 'Crew Change': 0, 'Maintenance': 0, 'Client Request': 0, 'Other': 0 };
data.standbyLogs.forEach(log => {
    const hrs = parseDurToHours(log.duration);
    const cat = log.category || 'Other';
    if (reasonsMap.hasOwnProperty(cat)) reasonsMap[cat] += hrs;
    else reasonsMap['Other'] += hrs;
});

// Remove categories with 0 hours to clean up chart
const activeReasons = {};
Object.keys(reasonsMap).forEach(key => {
    if(reasonsMap[key] > 0) activeReasons[key] = reasonsMap[key];
});

// If empty, show "No Data" placeholder
if(Object.keys(activeReasons).length === 0) activeReasons['No Data'] = 1; 

const ctxReasons = document.getElementById('chartStandbyReasons').getContext('2d');
if (window.chartReasonsInstance) window.chartReasonsInstance.destroy();

const reasonColors = ['#ef5353', '#3b82f6', '#f59e0b', '#10b981', '#e4f551', '#8b5cf6', '#6b7280'];

window.chartReasonsInstance = new Chart(ctxReasons, {
    type: 'doughnut',
    data: {
        labels: Object.keys(activeReasons),
        datasets: [{
            data: Object.values(activeReasons),
            backgroundColor: reasonColors,
            borderColor: '#1f2937', // Matches bg color for "cut" effect
            borderWidth: 2,
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '65%',
        plugins: {
            legend: { display: false } // Hide default legend
        }
    }
});

// Generate Custom HTML Legend for Standby
const legendContainer = document.getElementById('standby-legend');
legendContainer.innerHTML = '';
Object.keys(activeReasons).forEach((key, index) => {
    if(key === 'No Data') return;
    const color = reasonColors[index % reasonColors.length];
    const val = activeReasons[key];
    legendContainer.innerHTML += `
        <div class="legend-row">
            <div style="display:flex;align-items:center;gap:8px;">
                <span class="legend-dot" style="background:${color}"></span>
                <span style="font-size:0.75rem;color:#d1d5db;font-weight:500;">${key}</span>
            </div>
            <span style="font-size:0.75rem;font-weight:700;color:#f9fafb;font-family:monospace;">${val}h</span>
        </div>
    `;
});


// C. CALIBRATION (Guage Style)
let okSensorCount = 0;
let calCompliantCount = 0;
document.querySelectorAll('#camLightBody tr, #sensorBody tr').forEach(row => {
    const statusEl = row.querySelector('.row-status');
    const calEl    = row.querySelector('.row-cal');
    if (statusEl?.checked) {
        okSensorCount++;
        if (calEl?.value) calCompliantCount++;
    }
});
let calPercent = okSensorCount > 0 ? Math.round((calCompliantCount / okSensorCount) * 100) : 0;
document.getElementById('cal-percentage').innerText = `${calPercent}%`;

const ctxCal = document.getElementById('chartCalibration').getContext('2d');
if (chartCalibration) chartCalibration.destroy();

chartCalibration = new Chart(ctxCal, {
    type: 'doughnut',
    data: {
        labels: ['Compliant', 'Non-Compliant'],
        datasets: [{
            data: [calPercent, 100 - calPercent],
            backgroundColor: [
                '#10b981', // Green
                '#374151'  // Dark Gray
            ],
            borderWidth: 0,
            borderRadius: 20 // Rounded ends on the arc
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        rotation: -90,
        circumference: 180, // Half circle
        cutout: '80%',     // Thinner line
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
        }
    }
});

// ── D. SHIFT PERFORMANCE COMPARISON ────────────────────────────────
const shiftLabels = [], shiftDiveH = [], shiftStandbyH = [], shiftOtherH = [];

if (data.shiftLogs && data.shiftLogs.length > 0) {
    data.shiftLogs.forEach(shift => {
        shiftLabels.push(`Shift ${shift.shiftNo || '?'}`);
        let spanHours = 0;
        if (shift.startDate && shift.endDate) {
            const s = new Date(shift.startDate);
            const e = new Date(shift.endDate);
            e.setDate(e.getDate() + 1);
            spanHours = Math.max(0, (e - s) / 3600000);
        }
        const sStart = shift.startDate ? new Date(shift.startDate) : null;
        const sEnd   = shift.endDate   ? new Date(shift.endDate + 'T23:59:59') : null;
        const inRange = (logDate) => !sStart || !sEnd || !logDate || (new Date(logDate) >= sStart && new Date(logDate) <= sEnd);
        const diveH    = data.diveLogs.filter(d => inRange(d.date)).reduce((s, d) => s + parseDurToHours(d.duration), 0);
        const standbyH = data.standbyLogs.filter(d => inRange(d.date)).reduce((s, d) => s + parseDurToHours(d.duration), 0);
        shiftDiveH.push(+diveH.toFixed(2));
        shiftStandbyH.push(+standbyH.toFixed(2));
        shiftOtherH.push(+(Math.max(0, spanHours - diveH - standbyH)).toFixed(2));
    });
} else {
    shiftLabels.push('All Operations');
    shiftDiveH.push(totalDiveHours);
    shiftStandbyH.push(totalStandbyHours);
    shiftOtherH.push(operationalHours);
}

const ctxShift = document.getElementById('chartShiftPerf').getContext('2d');
if (chartShiftPerf) chartShiftPerf.destroy();
chartShiftPerf = new Chart(ctxShift, {
    type: 'bar',
    data: {
        labels: shiftLabels,
        datasets: [
            { label: 'Dive Operations',    data: shiftDiveH,    backgroundColor: '#459fd9', borderRadius: 6, borderWidth: 0 },
            { label: 'Standby / Delays',   data: shiftStandbyH, backgroundColor: '#f59e0b', borderRadius: 6, borderWidth: 0 },
            { label: 'Operational / Other',data: shiftOtherH,   backgroundColor: '#374151', borderRadius: 6, borderWidth: 0 }
        ]
    },
    options: {
        responsive: true, maintainAspectRatio: false,
        animation: { duration: 600, easing: 'easeOutQuart' },
        plugins: {
            legend: {
                display: true, position: 'top',
                labels: { color: '#9ca3af', font: { size: 11 }, boxWidth: 12, boxHeight: 8, padding: 16 }
            },
            tooltip: {
                backgroundColor: 'rgba(15,23,42,0.95)', titleColor: '#f9fafb', bodyColor: '#94a3b8',
                borderColor: 'rgba(255,255,255,0.08)', borderWidth: 1, padding: 12, cornerRadius: 8,
                callbacks: { label: ctx => `${ctx.dataset.label}: ${ctx.raw} hrs` }
            }
        },
        scales: {
            x: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#9ca3af', font: { size: 11 } } },
            y: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#6b7280', font: { size: 11 }, callback: v => `${v}h` } }
        }
    }
});

// ── E. DIVE DEPTH PROFILE ───────────────────────────────────────────
const depthLabels = data.diveLogs.map(d => d.num || 'DIV');
const depthValues = data.diveLogs.map(d => { const v = parseFloat(d.depth); return isNaN(v) ? 0 : v; });
const depthColors = depthValues.map(v => v > 200 ? '#ef4444' : v > 100 ? '#f39124' : '#06b6d4');

const ctxDepth = document.getElementById('chartDiveDepth').getContext('2d');
if (chartDiveDepth) chartDiveDepth.destroy();
chartDiveDepth = new Chart(ctxDepth, {
    type: 'bar',
    data: {
        labels: depthLabels,
        datasets: [{
            label: 'Depth (m)',
            data: depthValues,
            backgroundColor: depthColors,
            borderRadius: 6,
            borderWidth: 0,
            barThickness: depthLabels.length > 12 ? undefined : 28
        }]
    },
    options: {
        responsive: true, maintainAspectRatio: false,
        animation: { duration: 600, easing: 'easeOutQuart' },
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: 'rgba(15,23,42,0.95)', titleColor: '#f9fafb', bodyColor: '#94a3b8',
                borderColor: 'rgba(255,255,255,0.08)', borderWidth: 1, padding: 12, cornerRadius: 8,
                callbacks: { label: ctx => `Depth: ${ctx.raw} m` }
            }
        },
        scales: {
            x: { grid: { display: false }, ticks: { color: '#9ca3af', font: { size: 10 }, maxRotation: 45 } },
            y: {
                reverse: true,
                grid: { color: 'rgba(255,255,255,0.04)' },
                ticks: { color: '#6b7280', font: { size: 11 }, callback: v => `${v}m` },
                title: { display: true, text: '← Deeper', color: '#4b5563', font: { size: 10 } }
            }
        }
    }
});

// ── F. PRE-OP READINESS PANEL ───────────────────────────────────────
const preOpBody = document.getElementById('preop-readiness-body');
if (!preOpBody) return;

if (!preOpData) {
    preOpBody.innerHTML = `
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;min-height:160px;padding:24px;text-align:center;">
            <div style="width:44px;height:44px;border-radius:50%;background:rgba(31,41,55,0.8);display:flex;align-items:center;justify-content:center;margin-bottom:12px;border:1px solid #374151;">
                <svg width="20" height="20" fill="none" stroke="#4b5563" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
            </div>
            <p style="font-size:12px;font-weight:600;color:#6b7280;margin:0;">No simulation data</p>
            <p style="font-size:11px;color:#4b5563;margin-top:4px;line-height:1.5;">Run a simulation and push<br>to operation to see readiness here.</p>
        </div>`;
    return;
}

const povSensors  = preOpData.sensors || [];
const povROVs     = preOpData.rovs    || [];
const sTotal   = povSensors.length;
const sCal     = povSensors.filter(s => s.calibrated).length;
const sTested  = povSensors.filter(s => s.tested).length;
const sReady   = povSensors.filter(s => s.calibrated && s.tested && s.model?.trim()).length;
const sPct     = sTotal > 0 ? Math.round((sReady / sTotal) * 100) : 0;
const sColor   = sPct === 100 ? '#f39124' : sPct >= 60 ? '#f39124' : '#ef4444';

const equip    = simSharedData.sysarch?.equipment || [];
const eOK      = equip.filter(e => (e.status || 'OK') === 'OK').length;
const eFault   = equip.filter(e => e.status === 'FAULT').length;
const eMissing = equip.filter(e => e.status === 'MISSING').length;
const eTotal   = equip.length;

const rovChips = povROVs.map(r =>
    `<span style="font-size:10px;font-weight:700;padding:2px 7px;border-radius:4px;${r.role==='main'?'background:rgba(243,145,36,0.15);color:#f39124;border:1px solid rgba(243,145,36,0.3)':'background:rgba(55,65,81,0.5);color:#9ca3af;border:1px solid #374151'}">MS-${r.rovNumber} ${r.role.toUpperCase()}</span>`
).join(' ');

const pushedDate = preOpData.pushedAt
    ? new Date(preOpData.pushedAt).toLocaleDateString('en-GB', { day:'2-digit', month:'short', year:'numeric' })
    : '—';

preOpBody.innerHTML = `
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:12px;">

        <div>
            <div style="font-size:9px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:5px;">ROVs Deployed</div>
            <div style="display:flex;flex-wrap:wrap;gap:4px;">${rovChips || '<span style="font-size:11px;color:#4b5563">—</span>'}</div>
        </div>

        <div>
            <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:4px;">
                <div style="font-size:9px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.08em;">Sensor Readiness</div>
                <span style="font-size:16px;font-weight:800;color:${sColor};letter-spacing:-0.5px;">${sPct}%</span>
            </div>
            <div style="height:5px;background:rgba(55,65,81,0.6);border-radius:9999px;overflow:hidden;margin-bottom:6px;">
                <div style="width:${sPct}%;height:100%;background:${sColor};border-radius:9999px;"></div>
            </div>
            <div style="display:flex;gap:10px;">
                <span style="font-size:10px;color:#f39124;">✓ ${sCal} calibrated</span>
                <span style="font-size:10px;color:#459fd9;">✓ ${sTested} tested</span>
                <span style="font-size:10px;color:#6b7280;">${sTotal} total</span>
            </div>
        </div>

        ${eTotal > 0 ? `
        <div>
            <div style="font-size:9px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:5px;">Equipment (${eTotal} items)</div>
            <div style="display:flex;gap:6px;">
                <div style="flex:1;text-align:center;background:rgba(243,145,36,0.1);border:1px solid rgba(243,145,36,0.2);border-radius:8px;padding:7px 4px;">
                    <div style="font-size:18px;font-weight:800;color:#f39124;line-height:1;">${eOK}</div>
                    <div style="font-size:8px;font-weight:700;color:#6b7280;text-transform:uppercase;margin-top:2px;">OK</div>
                </div>
                <div style="flex:1;text-align:center;background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.2);border-radius:8px;padding:7px 4px;">
                    <div style="font-size:18px;font-weight:800;color:#f87171;line-height:1;">${eFault}</div>
                    <div style="font-size:8px;font-weight:700;color:#6b7280;text-transform:uppercase;margin-top:2px;">Fault</div>
                </div>
                <div style="flex:1;text-align:center;background:rgba(234,179,8,0.1);border:1px solid rgba(234,179,8,0.2);border-radius:8px;padding:7px 4px;">
                    <div style="font-size:18px;font-weight:800;color:#facc15;line-height:1;">${eMissing}</div>
                    <div style="font-size:8px;font-weight:700;color:#6b7280;text-transform:uppercase;margin-top:2px;">Missing</div>
                </div>
            </div>
        </div>` : ''}

        <div style="border-top:1px solid rgba(255,255,255,0.05);padding-top:8px;">
            <span style="font-size:10px;color:#4b5563;">Pushed from simulation · ${pushedDate}</span>
        </div>
    </div>`;
}

// ================================================================
// CLOUD SYNC MODULE
// ================================================================


// ── Stable device ID ─────────────────────────────────────────────

function getDeviceId() {
    if (cloudDeviceId) return cloudDeviceId;
    let id = localStorage.getItem('mcs_device_id');
    if (!id) {
        id = 'dev-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);
        localStorage.setItem('mcs_device_id', id);
    }
    cloudDeviceId = id;
    return id;
}


// ── Activate project with user-supplied project code (vessel) ────

async function activateCloudProject(code, mode, userName) {
    if (!code) return;
    if (userName) currentUserName = userName;

    const access = await checkProjectAccessForUser(code, currentUserId);
    if (!access.allowed) {
        showToast(`You do not have access to project ${code}.`, 'error');
        return;
    }
    currentUserProjectRole = access.role || 'operator';
    if (access.role === 'viewer') currentUserRole = 'reviewer';

    currentProjectCode = code;
    currentDeviceRole  = 'vessel';
    setDeviceRole('vessel');
    showProjectCodeBanner(code);

    try {
        const result = await window.electronAPI.pushProject({
            project_code: code, mode,
            created_by: currentUserName, project_name: '', data: {}
        });

        if (result.success) {
            showSyncIndicator('synced');
            window.electronAPI.logCloudAction({
                project_code: code, device_role: 'vessel',
                user_name: currentUserName, action: 'create', meta: { mode }
            }).catch(() => {});
            saveCloudSessionMeta(code, 'vessel', currentUserName);
        } else {
            queueOfflineSync({ project_code: code, mode, created_by: currentUserName, project_name: '', data: {} });
            showSyncIndicator('offline');
        }
    } catch (err) {
        queueOfflineSync({ project_code: code, mode, created_by: currentUserName, project_name: '', data: {} });
        showSyncIndicator('offline');
    }
}


// ── Join project (office) — FIXED load order ─────────────────────

async function joinCloudProject(code, userName) {
    currentUserName = userName;
    code = code.trim().toUpperCase();

    const joinError = document.getElementById('join-error');
    const joinBtn   = document.getElementById('btn-join-confirm');

    if (joinBtn) joinBtn.disabled = true;
    if (joinError) joinError.classList.add('hidden');
    showSyncIndicator('pulling');

    try {
        const result = await window.electronAPI.pullProject(code);

        if (!result.success) {
            if (joinError) {
                joinError.textContent = result.notFound
                    ? 'Project code not found. Check with the vessel crew.'
                    : 'Connection failed. Check your internet connection.';
                joinError.classList.remove('hidden');
            }
            showSyncIndicator('offline');
            if (joinBtn) joinBtn.disabled = false;
            return;
        }

        const project = result.project;
        currentProjectCode = code;
        currentDeviceRole  = 'office';
        currentMode        = project.mode;

        const access = await checkProjectAccessForUser(code, currentUserId);
        if (!access.allowed) {
            if (joinError) {
                joinError.textContent = 'You do not have access to this project. Contact your admin.';
                joinError.classList.remove('hidden');
            }
            showSyncIndicator('offline');
            if (joinBtn) joinBtn.disabled = false;
            return;
        }
        currentUserProjectRole = access.role || 'operator';
        if (access.role === 'viewer') currentUserRole = 'reviewer';

        setDeviceRole('office');
        document.getElementById('mode-screen').classList.add('hidden');

        if (project.mode === 'simulation') {
            // ── SIMULATION JOIN — correct order ──────────────────
            document.getElementById('nav-operation-sections').classList.add('hidden');
            document.getElementById('header-operation-buttons').classList.add('hidden');
            document.getElementById('nav-simulation-section').classList.remove('hidden');
            document.getElementById('btn-mode-switch').classList.remove('hidden');

            const contentArea = document.getElementById('main-content-area');
            contentArea.style.padding  = '0';
            contentArea.style.overflow = 'hidden';
            contentArea.style.position = 'relative';

            // 1. Show the app shell
            enterDashboard();

            // 2. Build the simulation DOM (ROV grid, tabs, canvas)
            initSimROVGrid();
            const simNavItem = document.querySelector('#nav-simulation-section .nav-item');
            showTab('simulation', simNavItem);
            startSimAutoSave();

            // 3. Load cloud data AFTER the DOM is painted
            if (project.data && Object.keys(project.data).length > 0) {
                setTimeout(() => loadSimulationState(project.data), 150);
            }

        } else {
            // ── OPERATION JOIN ────────────────────────────────────
            document.getElementById('nav-simulation-section').classList.add('hidden');
            document.getElementById('btn-mode-switch').classList.remove('hidden');
            enterDashboard();
            if (project.data && Object.keys(project.data).length > 0) {
                populateUI(project.data);
            }
            startAutoSave();
            checkAndShowDraftRecovery();
        }

        showSyncIndicator('synced');

        if (project.updated_at) {
            const t = new Date(project.updated_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            showToast(`Loaded project — last updated at ${t} by ${project.created_by}`, 'success');
        }

        window.electronAPI.logCloudAction({
            project_code: code, device_role: 'office',
            user_name: userName, action: 'join', meta: { mode: project.mode }
        }).catch(() => {});

        saveCloudSessionMeta(code, 'office', userName);

    } catch (err) {
        console.error('[joinCloudProject]', err);
        if (joinError) {
            joinError.textContent = 'Unexpected error. Try again.';
            joinError.classList.remove('hidden');
        }
        if (joinBtn) joinBtn.disabled = false;
        showSyncIndicator('offline');
    }
}


// ── Sync to cloud ─────────────────────────────────────────────────

async function syncToCloud() {
    if (!currentProjectCode) return;

    try {
        const data        = (currentMode === 'simulation') ? collectSimState() : collectAllData();
        const projectName = data.projectName || data.projectCode || '';

        const result = await window.electronAPI.pushProject({
            project_code: currentProjectCode,
            mode:         currentMode,
            created_by:   currentUserName,
            project_name: projectName,
            data
        });

        if (result.success) {
            showSyncIndicator('synced');
            localStorage.setItem('mcs_last_sync_ts', Date.now().toString());
            flushOfflineQueue();
            window.electronAPI.logCloudAction({
                project_code: currentProjectCode,
                device_role:  currentDeviceRole || 'vessel',
                user_name:    currentUserName,
                action:       'update',
                meta:         { mode: currentMode, project_name: projectName }
            }).catch(() => {});
        } else {
            queueOfflineSync({ project_code: currentProjectCode, mode: currentMode, created_by: currentUserName, project_name: projectName, data });
            showSyncIndicator('offline');
        }
    } catch (err) {
        const data = (currentMode === 'simulation') ? collectSimState() : collectAllData();
        queueOfflineSync({ project_code: currentProjectCode, mode: currentMode, created_by: currentUserName, data });
        showSyncIndicator('offline');
    }
}


// ── Manual sync button handler ────────────────────────────────────

// ══════════════════════════════════════════════════════════════════
// ADMIN PANEL
// ══════════════════════════════════════════════════════════════════

async function hashPassword(password) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(password));
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function showAdminLogin() {
    const modal = document.getElementById('admin-login-modal');
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
    document.getElementById('admin-login-form').classList.remove('hidden');
    document.getElementById('admin-setup-form').classList.add('hidden');
    document.getElementById('admin-modal-title').textContent = 'Admin Login';
    document.getElementById('admin-login-error').classList.add('hidden');
    // Check if first-time setup needed
    const check = await window.electronAPI.checkAdminExists?.();
    if (check && !check.exists) {
        document.getElementById('admin-login-form').classList.add('hidden');
        document.getElementById('admin-setup-form').classList.remove('hidden');
        document.getElementById('admin-modal-title').textContent = 'Create Admin Account';
    }
    setTimeout(() => {
        const loginHidden = document.getElementById('admin-login-form').classList.contains('hidden');
        const target = loginHidden
            ? document.getElementById('setup-username')
            : document.getElementById('admin-username');
        target?.focus();
    }, 100);
}

function hideAdminLogin() {
    const modal = document.getElementById('admin-login-modal');
    modal.classList.add('hidden');
    modal.style.display = 'none';
}

async function doAdminLogin() {
    const username = document.getElementById('admin-username')?.value?.trim();
    const password = document.getElementById('admin-password')?.value;
    const errEl = document.getElementById('admin-login-error');
    if (!username || !password) { errEl.textContent = 'Enter username and password.'; errEl.classList.remove('hidden'); return; }
    errEl.classList.add('hidden');
    const hash = await hashPassword(password);
    const result = await window.electronAPI.adminLogin?.(username, hash);
    if (result?.success) {
        hideAdminLogin();
        openAdminPanel();
    } else {
        errEl.textContent = result?.error || 'Invalid credentials.';
        errEl.classList.remove('hidden');
        document.getElementById('admin-password').value = '';
    }
}

async function doAdminSetup() {
    const username = document.getElementById('setup-username')?.value?.trim();
    const password = document.getElementById('setup-password')?.value;
    const errEl = document.getElementById('admin-setup-error');
    if (!username || !password) { errEl.textContent = 'Fill in both fields.'; errEl.classList.remove('hidden'); return; }
    if (password.length < 6) { errEl.textContent = 'Password must be at least 6 characters.'; errEl.classList.remove('hidden'); return; }
    errEl.classList.add('hidden');
    const hash = await hashPassword(password);
    const result = await window.electronAPI.setupAdmin?.(username, hash);
    if (result?.success) {
        hideAdminLogin();
        openAdminPanel();
    } else {
        errEl.textContent = result?.error || 'Setup failed.';
        errEl.classList.remove('hidden');
    }
}

function openAdminPanel() {
    document.getElementById('admin-panel-screen').classList.remove('hidden');
    document.getElementById('admin-panel-screen').style.display = 'flex';
    showAdminTab('users');
}

function exitAdminPanel() {
    document.getElementById('admin-panel-screen').classList.add('hidden');
    document.getElementById('admin-panel-screen').style.display = 'none';
}

function showAdminTab(tab) {
    ['users', 'projects'].forEach(t => {
        const content = document.getElementById('admin-content-' + t);
        const btn = document.getElementById('admin-tab-btn-' + t);
        if (!content || !btn) return;
        if (t === tab) {
            content.classList.remove('hidden');
            btn.style.background = 'rgba(243,145,36,0.1)';
            btn.style.border = '1px solid rgba(243,145,36,0.3)';
            btn.style.color = '#f39124';
        } else {
            content.classList.add('hidden');
            btn.style.background = 'transparent';
            btn.style.border = '1px solid transparent';
            btn.style.color = '#9ca3af';
        }
    });
    if (tab === 'users') renderAdminUsersTab();
    if (tab === 'projects') renderAdminProjectsTab();
}

// ── Admin: Users ──────────────────────────────────────────────────

async function renderAdminUsersTab() {
    const el = document.getElementById('admin-content-users');
    if (!el) return;
    el.innerHTML = `<div class="text-gray-500 text-sm py-8 text-center">Loading users...</div>`;
    const result = await window.electronAPI.getUsers?.();
    const users = result?.users || [];
    el.innerHTML = `
    <div class="max-w-2xl">
        <div class="flex items-center justify-between mb-4">
            <h2 class="text-base font-bold text-white">User Accounts</h2>
        </div>
        <div class="rounded-xl overflow-hidden mb-4" style="border:1px solid rgba(55,65,81,0.6);">
            <table class="w-full text-sm">
                <thead>
                    <tr style="background:rgba(31,41,55,0.8);border-bottom:1px solid rgba(55,65,81,0.5);">
                        <th class="text-left px-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">User ID</th>
                        <th class="text-left px-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">Name</th>
                        <th class="px-4 py-3"></th>
                    </tr>
                </thead>
                <tbody>
                    ${users.length === 0 ? `<tr><td colspan="3" class="text-center text-gray-600 py-6 text-sm">No users yet.</td></tr>` :
                        users.map(u => `
                        <tr style="border-bottom:1px solid rgba(55,65,81,0.3);">
                            <td class="px-4 py-3 font-mono text-gray-300 text-xs">${escapeHtml(String(u.id))}</td>
                            <td class="px-4 py-3 text-white">${escapeHtml(u.name || '')}</td>
                            <td class="px-4 py-3 text-right">
                                <button onclick="adminDeleteUser('${escapeHtml(String(u.id))}')" class="text-xs text-red-400 hover:text-red-300 transition-colors px-2 py-1 rounded hover:bg-red-900/20">Remove</button>
                            </td>
                        </tr>`).join('')}
                </tbody>
            </table>
        </div>
        <!-- Add user form -->
        <div class="rounded-xl p-4" style="background:rgba(31,41,55,0.6);border:1px solid rgba(55,65,81,0.5);">
            <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Add User</p>
            <div class="flex gap-3">
                <input id="new-user-id" type="text" placeholder="User ID (e.g. 105)" autocomplete="off"
                    class="flex-1 px-3 py-2 rounded-lg text-sm text-white placeholder-gray-600 outline-none"
                    style="background:rgba(0,0,0,0.3);border:1px solid rgba(55,65,81,0.7);"
                    onfocus="this.style.borderColor='#f39124'" onblur="this.style.borderColor='rgba(55,65,81,0.7)'">
                <input id="new-user-name" type="text" placeholder="Full Name" autocomplete="off"
                    class="flex-1 px-3 py-2 rounded-lg text-sm text-white placeholder-gray-600 outline-none"
                    style="background:rgba(0,0,0,0.3);border:1px solid rgba(55,65,81,0.7);"
                    onfocus="this.style.borderColor='#f39124'" onblur="this.style.borderColor='rgba(55,65,81,0.7)'"
                    onkeydown="if(event.key==='Enter') adminAddUser()">
                <button onclick="adminAddUser()" class="px-4 py-2 rounded-lg text-sm font-bold text-white transition-all hover:opacity-90 whitespace-nowrap"
                    style="background:#f39124;">Add User</button>
            </div>
            <p id="admin-user-error" class="text-red-400 text-xs mt-2 hidden"></p>
        </div>
    </div>`;
}

async function adminAddUser() {
    const id   = document.getElementById('new-user-id')?.value?.trim();
    const name = document.getElementById('new-user-name')?.value?.trim();
    const err  = document.getElementById('admin-user-error');
    if (!id || !name) { err.textContent = 'Both ID and name are required.'; err.classList.remove('hidden'); return; }
    err.classList.add('hidden');
    const result = await window.electronAPI.addUser?.({ id, name });
    if (result?.success) { renderAdminUsersTab(); }
    else { err.textContent = result?.error || 'Failed to add user.'; err.classList.remove('hidden'); }
}

async function adminDeleteUser(userId) {
    if (!confirm(`Remove user "${userId}"? This does not remove them from existing projects.`)) return;
    const result = await window.electronAPI.deleteUser?.(userId);
    if (result?.success === false) { showToast(result.error || 'Failed to remove user.', 'error'); return; }
    renderAdminUsersTab();
}

// ── Admin: Projects ───────────────────────────────────────────────

let adminCurrentProject = null;
let adminCurrentMembers = [];

async function renderAdminProjectsTab() {
    const el = document.getElementById('admin-content-projects');
    if (!el) return;
    const membersHtml = adminCurrentProject
        ? await buildMembersHtml(adminCurrentProject)
        : `<div class="text-gray-600 text-sm py-8 text-center">Enter a project code above to manage its members.</div>`;
    el.innerHTML = `
    <div class="max-w-2xl">
        <h2 class="text-base font-bold text-white mb-4">Project Access Control</h2>
        <!-- Project search -->
        <div class="flex gap-3 mb-5">
            <input id="admin-project-code" type="text" placeholder="Project Code (e.g. PRJ-MCS-2026-A3F7)" autocomplete="off"
                value="${escapeHtml(adminCurrentProject || '')}"
                class="flex-1 px-3 py-2 rounded-lg text-sm text-white placeholder-gray-600 outline-none font-mono"
                style="background:rgba(0,0,0,0.3);border:1px solid rgba(55,65,81,0.7);text-transform:uppercase;"
                onfocus="this.style.borderColor='#f39124'" onblur="this.style.borderColor='rgba(55,65,81,0.7)'"
                onkeydown="if(event.key==='Enter') loadAdminProject()">
            <button onclick="loadAdminProject()" class="px-4 py-2 rounded-lg text-sm font-bold text-white whitespace-nowrap"
                style="background:#459fd9;">Load</button>
        </div>
        <div id="admin-members-area">${membersHtml}</div>
    </div>`;
}

async function loadAdminProject() {
    const code = document.getElementById('admin-project-code')?.value?.trim().toUpperCase();
    if (!code) return;
    adminCurrentProject = code;
    const area = document.getElementById('admin-members-area');
    if (area) area.innerHTML = `<div class="text-gray-500 text-sm py-6 text-center">Loading...</div>`;
    const html = await buildMembersHtml(code);
    if (area) area.innerHTML = html;
}

async function buildMembersHtml(projectCode) {
    const result = await window.electronAPI.getProjectMembers?.(projectCode);
    adminCurrentMembers = result?.members || [];
    const usersResult = await window.electronAPI.getUsers?.();
    const allUsers = usersResult?.users || [];
    const memberIds = new Set(adminCurrentMembers.map(m => String(m.user_id)));
    const available = allUsers.filter(u => !memberIds.has(String(u.id)));

    const roleBadge = (r) => {
        const styles = { viewer: 'color:#9ca3af', operator: 'color:#459fd9', approver: 'color:#f39124' };
        return `<span style="${styles[r] || ''};font-size:10px;font-weight:700;">${(r||'').toUpperCase()}</span>`;
    };

    return `
    <div class="rounded-xl overflow-hidden mb-4" style="border:1px solid rgba(55,65,81,0.6);">
        <div class="px-4 py-2.5 flex items-center justify-between" style="background:rgba(31,41,55,0.8);border-bottom:1px solid rgba(55,65,81,0.5);">
            <span class="text-xs font-bold text-gray-400 uppercase tracking-wider">Members — <span class="font-mono text-gray-300">${escapeHtml(projectCode)}</span></span>
        </div>
        <table class="w-full text-sm">
            <thead><tr style="background:rgba(17,24,39,0.5);border-bottom:1px solid rgba(55,65,81,0.4);">
                <th class="text-left px-4 py-2 text-xs font-bold text-gray-500 uppercase">User ID</th>
                <th class="text-left px-4 py-2 text-xs font-bold text-gray-500 uppercase">Name</th>
                <th class="text-left px-4 py-2 text-xs font-bold text-gray-500 uppercase">Role</th>
                <th class="px-4 py-2"></th>
            </tr></thead>
            <tbody>
                ${adminCurrentMembers.length === 0 ? `<tr><td colspan="4" class="text-center text-gray-600 py-6 text-sm">No members — project is open access.</td></tr>` :
                    adminCurrentMembers.map(m => {
                        const user = allUsers.find(u => String(u.id) === String(m.user_id));
                        return `<tr style="border-bottom:1px solid rgba(55,65,81,0.25);">
                            <td class="px-4 py-3 font-mono text-gray-400 text-xs">${escapeHtml(String(m.user_id))}</td>
                            <td class="px-4 py-3 text-white text-sm">${escapeHtml(user?.name || '—')}</td>
                            <td class="px-4 py-3">
                                <select onchange="adminSetMemberRole('${escapeHtml(String(m.user_id))}', this.value)"
                                    class="bg-gray-800 text-xs rounded px-2 py-1 outline-none border border-gray-700 text-white">
                                    <option value="viewer"   ${m.role==='viewer'   ? 'selected':''}>Viewer</option>
                                    <option value="operator" ${m.role==='operator' ? 'selected':''}>Operator</option>
                                    <option value="approver" ${m.role==='approver' ? 'selected':''}>Approver</option>
                                </select>
                            </td>
                            <td class="px-4 py-3 text-right">
                                <button onclick="adminRemoveMember('${escapeHtml(String(m.user_id))}')" class="text-xs text-red-400 hover:text-red-300 px-2 py-1 rounded hover:bg-red-900/20">Remove</button>
                            </td>
                        </tr>`;
                    }).join('')}
            </tbody>
        </table>
    </div>
    <!-- Add member -->
    <div class="rounded-xl p-4" style="background:rgba(31,41,55,0.6);border:1px solid rgba(55,65,81,0.5);">
        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Add Member</p>
        <div class="flex gap-3 flex-wrap">
            <select id="admin-add-user-select" class="flex-1 min-w-0 px-3 py-2 rounded-lg text-sm text-white bg-gray-900 outline-none border border-gray-700">
                <option value="">— Select user —</option>
                ${available.map(u => `<option value="${escapeHtml(String(u.id))}">${escapeHtml(u.name)} (${escapeHtml(String(u.id))})</option>`).join('')}
            </select>
            <select id="admin-add-role-select" class="px-3 py-2 rounded-lg text-sm text-white bg-gray-900 outline-none border border-gray-700">
                <option value="operator">Operator</option>
                <option value="viewer">Viewer</option>
                <option value="approver">Approver</option>
            </select>
            <button onclick="adminAddMember()" class="px-4 py-2 rounded-lg text-sm font-bold text-white whitespace-nowrap"
                style="background:#f39124;">Add</button>
        </div>
        <p id="admin-member-error" class="text-red-400 text-xs mt-2 hidden"></p>
    </div>`;
}

async function adminAddMember() {
    const userId = document.getElementById('admin-add-user-select')?.value;
    const role   = document.getElementById('admin-add-role-select')?.value || 'operator';
    const err    = document.getElementById('admin-member-error');
    if (!userId) { err.textContent = 'Select a user.'; err.classList.remove('hidden'); return; }
    err.classList.add('hidden');
    await window.electronAPI.setProjectMember?.(adminCurrentProject, userId, role, 'admin');
    const html = await buildMembersHtml(adminCurrentProject);
    document.getElementById('admin-members-area').innerHTML = html;
}

async function adminSetMemberRole(userId, role) {
    const result = await window.electronAPI.setProjectMember?.(adminCurrentProject, userId, role, 'admin');
    if (result?.success === false) showToast(result.error || 'Failed to update role.', 'error');
    else showToast('Role updated.', 'success');
}

async function adminRemoveMember(userId) {
    if (!confirm(`Remove user ${userId} from project ${adminCurrentProject}?`)) return;
    const result = await window.electronAPI.removeProjectMember?.(adminCurrentProject, userId);
    if (result?.success === false) { showToast(result.error || 'Failed to remove member.', 'error'); return; }
    const html = await buildMembersHtml(adminCurrentProject);
    document.getElementById('admin-members-area').innerHTML = html;
}

// ── Access control check (called on project activation) ──────────

async function checkProjectAccessForUser(projectCode, userId) {
    const result = await window.electronAPI.checkProjectAccess?.(projectCode, String(userId));
    if (!result) return { allowed: true, role: 'operator' };
    return result;
}

// ─────────────────────────────────────────────────────────────────

// ── Simulation Approval Cycle ─────────────────────────────────────

async function submitSimForApproval() {
    if (!currentProjectCode) {
        showToast('Save the simulation with a project code first.', 'warning');
        return;
    }
    if (simApproval.status === 'submitted') {
        showToast('Already submitted for approval.', 'info');
        return;
    }
    simApproval.status = 'submitted';
    simApproval.history.push({ action: 'submitted', by: currentUserName || currentUserId, at: new Date().toISOString() });
    await syncToCloud();
    showToast('Submitted for approval.', 'success');
    renderSimApprovalStatus();
    updateApprovalBadge();
}

function renderSimApprovalStatus() {
    const el = document.getElementById('sim-approval-area');
    if (!el) return;
    const s = simApproval.status;
    const isApprover = (currentUserProjectRole === 'approver') || APPROVER_IDS.includes(String(currentUserId));

    let html = '';
    if (s === 'draft') {
        html = `<button onclick="submitSimForApproval()" class="px-3 py-1.5 text-xs font-bold rounded-lg flex items-center gap-1.5 transition-all" style="background:rgba(69,159,217,0.15);color:#459fd9;border:1px solid rgba(69,159,217,0.4);" onmouseover="this.style.background='rgba(69,159,217,0.25)'" onmouseout="this.style.background='rgba(69,159,217,0.15)'">
            <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
            Submit for Approval
        </button>`;
    } else if (s === 'submitted') {
        html = `<span class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold" style="background:rgba(234,179,8,0.12);color:#eab308;border:1px solid rgba(234,179,8,0.3);">
            <span class="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span>Pending Approval
        </span>`;
    } else if (s === 'approved') {
        html = `<span class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold" style="background:rgba(34,197,94,0.12);color:#22c55e;border:1px solid rgba(34,197,94,0.3);">
            <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>Approved
        </span>`;
    } else if (s === 'rejected') {
        const last = [...simApproval.history].reverse().find(h => h.action === 'rejected');
        html = `<div class="flex items-center gap-2">
            <span class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold" style="background:rgba(248,113,113,0.12);color:#f87171;border:1px solid rgba(248,113,113,0.3);" title="${last?.comment || ''}">
                <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>Rejected
            </span>
            <button onclick="submitSimForApproval()" class="px-3 py-1.5 text-xs font-bold rounded-lg transition-all" style="background:rgba(69,159,217,0.15);color:#459fd9;border:1px solid rgba(69,159,217,0.4);" onmouseover="this.style.background='rgba(69,159,217,0.25)'" onmouseout="this.style.background='rgba(69,159,217,0.15)'">Re-submit</button>
        </div>`;
    }
    el.innerHTML = html;

    // Grey out Push to Operation when not approved
    const pushBtn = document.getElementById('btn-push-to-operation');
    if (pushBtn) {
        const locked = s !== 'approved';
        pushBtn.disabled = locked;
        pushBtn.style.opacity = locked ? '0.4' : '1';
        pushBtn.style.cursor  = locked ? 'not-allowed' : 'pointer';
        pushBtn.title = locked ? 'Simulation must be approved first' : '';
    }

    // Keep readiness tab in sync when approval changes
    if (simActiveSubTab === 'readiness') {
        const readinessArea = document.getElementById('sim-content-area');
        if (readinessArea) renderReadinessContent(readinessArea);
    }
    updateSimTabBadges();
}

async function loadPendingApprovals() {
    if (!window.electronAPI.listProjects) return [];
    const result = await window.electronAPI.listProjects({ mode: 'simulation' });
    if (!result.success) return [];
    return result.projects.filter(p => p.data?.approvalStatus === 'submitted' || p.data?.approvalStatus === 'approved' || p.data?.approvalStatus === 'rejected');
}

async function updateApprovalBadge() {
    const isApprover = currentUserProjectRole === 'approver' || APPROVER_IDS.includes(String(currentUserId));
    const badges = [document.getElementById('sim-approval-badge'), document.getElementById('sim-approval-badge-nav')];
    if (!isApprover) { badges.forEach(b => b?.classList.add('hidden')); return; }
    try {
        const result = await window.electronAPI.listProjects({ mode: 'simulation' });
        const pending = (result.projects || []).filter(p => p.data?.approvalStatus === 'submitted').length;
        badges.forEach(b => {
            if (!b) return;
            if (pending > 0) { b.textContent = pending; b.classList.remove('hidden'); }
            else { b.classList.add('hidden'); }
        });
    } catch (e) { badges.forEach(b => b?.classList.add('hidden')); }
}

async function renderApprovalsTab() {
    const el = document.getElementById('approvals-content');
    if (!el) return;
    el.innerHTML = `<div class="flex items-center justify-center py-16 text-gray-500 text-sm">Loading...</div>`;

    const isApprover = currentUserProjectRole === 'approver' || APPROVER_IDS.includes(String(currentUserId));
    if (!isApprover) {
        el.innerHTML = `<div class="flex items-center justify-center py-16 text-gray-500 text-sm">You do not have permission to approve simulations.</div>`;
        return;
    }

    const result = await window.electronAPI.listProjects({ mode: 'simulation' });
    if (!result.success) {
        el.innerHTML = `<div class="flex items-center justify-center py-16 text-gray-500 text-sm">Could not load simulations. Check your connection.</div>`;
        return;
    }

    const all = result.projects.filter(p => p.data?.approvalStatus && p.data.approvalStatus !== 'draft');
    if (all.length === 0) {
        el.innerHTML = `<div class="flex items-center justify-center py-16 text-gray-500 text-sm">No simulations submitted for approval.</div>`;
        return;
    }

    const statusBadge = (s) => {
        if (s === 'submitted') return `<span class="px-2 py-0.5 rounded text-[10px] font-bold" style="background:rgba(234,179,8,0.15);color:#eab308;border:1px solid rgba(234,179,8,0.3);">PENDING</span>`;
        if (s === 'approved')  return `<span class="px-2 py-0.5 rounded text-[10px] font-bold" style="background:rgba(34,197,94,0.15);color:#22c55e;border:1px solid rgba(34,197,94,0.3);">APPROVED</span>`;
        if (s === 'rejected')  return `<span class="px-2 py-0.5 rounded text-[10px] font-bold" style="background:rgba(248,113,113,0.15);color:#f87171;border:1px solid rgba(248,113,113,0.3);">REJECTED</span>`;
        return '';
    };

    el.innerHTML = `
    <div class="p-6 space-y-4">
        <div class="flex items-center justify-between mb-2">
            <h2 class="text-base font-bold text-white">Simulation Approvals</h2>
            <button onclick="renderApprovalsTab()" class="text-xs text-gray-400 hover:text-orange-400 flex items-center gap-1">
                <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                Refresh
            </button>
        </div>
        ${all.map(p => {
            const d = p.data || {};
            const status = d.approvalStatus || 'draft';
            const sub = (d.approvalHistory || []).find(h => h.action === 'submitted');
            const lastRej = [...(d.approvalHistory || [])].reverse().find(h => h.action === 'rejected');
            return `
            <div class="rounded-xl p-4" style="background:rgba(31,41,55,0.8);border:1px solid rgba(55,65,81,0.6);">
                <div class="flex items-start justify-between gap-3">
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2 mb-1">
                            ${statusBadge(status)}
                            <span class="text-sm font-bold text-white truncate">${d.projectName || p.project_code}</span>
                        </div>
                        <div class="text-[11px] text-gray-400 flex flex-wrap gap-x-3 gap-y-0.5">
                            <span>Code: <span class="text-gray-300 font-mono">${p.project_code}</span></span>
                            <span>Scope: <span class="text-gray-300">${d.scopeName || '—'}</span></span>
                            ${sub ? `<span>Submitted by <span class="text-gray-300">${sub.by}</span> · ${new Date(sub.at).toLocaleDateString()}</span>` : ''}
                        </div>
                        ${lastRej?.comment ? `<div class="mt-1.5 text-[11px] text-red-400 italic">Rejection reason: ${lastRej.comment}</div>` : ''}
                    </div>
                    ${status === 'submitted' ? `
                    <div class="flex gap-2 shrink-0">
                        <button onclick="approveSimulation('${p.project_code}')" class="px-3 py-1.5 text-xs font-bold rounded-lg transition-all" style="background:rgba(34,197,94,0.15);color:#22c55e;border:1px solid rgba(34,197,94,0.3);" onmouseover="this.style.background='rgba(34,197,94,0.25)'" onmouseout="this.style.background='rgba(34,197,94,0.15)'">Approve</button>
                        <button onclick="promptRejectSimulation('${p.project_code}')" class="px-3 py-1.5 text-xs font-bold rounded-lg transition-all" style="background:rgba(248,113,113,0.12);color:#f87171;border:1px solid rgba(248,113,113,0.3);" onmouseover="this.style.background='rgba(248,113,113,0.22)'" onmouseout="this.style.background='rgba(248,113,113,0.12)'">Reject</button>
                    </div>` : ''}
                </div>
            </div>`;
        }).join('')}
    </div>`;
    updateApprovalBadge();
}

async function approveSimulation(projectCode) {
    const result = await window.electronAPI.pullProject(projectCode);
    if (!result.success) { showToast('Failed to load simulation.', 'error'); return; }
    const d = result.project;
    const newHistory = [...(d.data?.approvalHistory || []), { action: 'approved', by: currentUserName || currentUserId, at: new Date().toISOString() }];
    const data = { ...d.data, approvalStatus: 'approved', approvalHistory: newHistory };
    const pushResult = await window.electronAPI.pushProject({ project_code: projectCode, mode: 'simulation', created_by: d.created_by, project_name: d.project_name, data });
    if (!pushResult?.success) { showToast('Failed to save approval.', 'error'); return; }
    if (projectCode === currentProjectCode) {
        simApproval.status = 'approved';
        simApproval.history = newHistory;
        renderSimApprovalStatus();
    }
    showToast(`Simulation "${projectCode}" approved.`, 'success');
    renderApprovalsTab();
}

function promptRejectSimulation(projectCode) {
    const comment = prompt('Reason for rejection (shown to submitter):');
    if (comment === null) return;
    rejectSimulation(projectCode, comment.trim() || 'No reason provided');
}

async function rejectSimulation(projectCode, comment) {
    const result = await window.electronAPI.pullProject(projectCode);
    if (!result.success) { showToast('Failed to load simulation.', 'error'); return; }
    const d = result.project;
    const newHistory = [...(d.data?.approvalHistory || []), { action: 'rejected', by: currentUserName || currentUserId, at: new Date().toISOString(), comment }];
    const data = { ...d.data, approvalStatus: 'rejected', approvalHistory: newHistory };
    const pushResult = await window.electronAPI.pushProject({ project_code: projectCode, mode: 'simulation', created_by: d.created_by, project_name: d.project_name, data });
    if (!pushResult?.success) { showToast('Failed to save rejection.', 'error'); return; }
    if (projectCode === currentProjectCode) {
        simApproval.status = 'rejected';
        simApproval.history = newHistory;
        renderSimApprovalStatus();
    }
    showToast(`Simulation "${projectCode}" rejected.`, 'success');
    renderApprovalsTab();
}

// ─────────────────────────────────────────────────────────────────

async function manualSyncToCloud() {
    const btn      = document.getElementById('btn-sync-cloud');
    const idle     = document.getElementById('sync-icon-idle');
    const spin     = document.getElementById('sync-icon-spin');
    const ok       = document.getElementById('sync-icon-ok');
    const label    = document.getElementById('sync-btn-label');

    if (!currentProjectCode) {
        showToast('No active project code — set one in Project Details first', 'warning');
        return;
    }

    // Spinning state
    btn.disabled = true;
    idle.classList.add('hidden');
    ok.classList.add('hidden');
    spin.classList.remove('hidden');
    label.textContent = 'Syncing...';
    btn.classList.remove('hover:border-[#459fd9]', 'hover:text-[#459fd9]', 'text-green-400', 'border-green-600', 'text-gray-400');
    btn.classList.add('border-blue-500/50', 'text-[#459fd9]');

    try {
        await syncToCloud();

        // Synced state
        spin.classList.add('hidden');
        ok.classList.remove('hidden');
        ok.classList.add('text-green-400');
        label.textContent = 'Synced';
        btn.classList.remove('border-blue-500/50', 'text-[#459fd9]');
        btn.classList.add('border-green-600/50', 'text-green-400');
    } catch {
        // Offline state
        spin.classList.add('hidden');
        idle.classList.remove('hidden');
        label.textContent = 'Offline';
        btn.classList.remove('border-blue-500/50', 'text-[#459fd9]');
        btn.classList.add('border-red-600/50', 'text-red-400');
    } finally {
        btn.disabled = false;
        // Reset to idle after 3 s
        setTimeout(() => {
            ok.classList.add('hidden');
            idle.classList.remove('hidden');
            label.textContent = 'Sync';
            btn.classList.remove('border-green-600/50', 'text-green-400', 'border-red-600/50', 'text-red-400');
            btn.classList.add('border-gray-600', 'text-gray-400');
        }, 3000);
    }
}

// ── Check for cloud updates ───────────────────────────────────────

async function checkForCloudUpdates() {
    if (!currentProjectCode) return;
    try {
        const result = await window.electronAPI.pullProject(currentProjectCode);
        if (!result.success || !result.project) { showSyncIndicator('offline'); return; }

        const cloudTs = new Date(result.project.updated_at).getTime();
        const localTs = parseInt(localStorage.getItem('mcs_last_sync_ts') || '0');

        if (cloudTs > localTs && result.project.data && Object.keys(result.project.data).length > 0) {
            const cloudData = result.project.data;
            const cloudApproval = cloudData.approvalStatus;

            if (currentMode === 'simulation') {
                // Always apply simulation cloud updates silently — approval and data changes alike.
                // This keeps all members in sync without interrupting their work.
                const approvalChanged = cloudApproval && cloudApproval !== simApproval.status;
                setTimeout(() => loadSimulationState(cloudData), 150);
                localStorage.setItem('mcs_last_sync_ts', cloudTs.toString());
                showSyncIndicator('synced');
                if (approvalChanged) {
                    const labels = { approved: 'Simulation approved ✓', rejected: 'Simulation rejected', submitted: 'Simulation pending approval' };
                    showToast(labels[cloudApproval] || 'Approval status updated', cloudApproval === 'approved' ? 'success' : 'info');
                } else {
                    const t = new Date(result.project.updated_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                    showToast(`Simulation updated by ${result.project.created_by} at ${t}`, 'info');
                }
            } else {
                const t  = new Date(result.project.updated_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                const ok = confirm(`Cloud update detected!\n\nUpdated by "${result.project.created_by}" at ${t}.\n\nLoad the cloud version?`);
                if (ok) {
                    populateUI(cloudData);
                    localStorage.setItem('mcs_last_sync_ts', cloudTs.toString());
                    showSyncIndicator('synced');
                    showToast('Project updated from cloud ✓', 'success');
                }
            }
        } else {
            showSyncIndicator('synced');
        }
    } catch (err) {
        showSyncIndicator('offline');
    }
}


// ── Offline queue ─────────────────────────────────────────────────

function queueOfflineSync(payload) {
    offlineQueue.push({ payload, ts: Date.now() });
    try { localStorage.setItem('mcs_offline_queue', JSON.stringify(offlineQueue)); } catch (e) {}
}

async function flushOfflineQueue() {
    if (offlineQueue.length === 0) {
        try {
            const stored = localStorage.getItem('mcs_offline_queue');
            if (stored) offlineQueue = JSON.parse(stored);
        } catch (e) { offlineQueue = []; }
    }
    if (offlineQueue.length === 0) return;

    const remaining = [];
    for (const item of offlineQueue) {
        try {
            const result = await window.electronAPI.pushProject(item.payload);
            if (result.offline) remaining.push(item);
        } catch (err) { remaining.push(item); }
    }
    offlineQueue = remaining;
    if (remaining.length === 0) {
        localStorage.removeItem('mcs_offline_queue');
        showSyncIndicator('synced');
    } else {
        showSyncIndicator('offline');
    }
}

window.addEventListener('online',  () => { showSyncIndicator('pulling'); flushOfflineQueue(); checkForCloudUpdates(); });
window.addEventListener('offline', () => showSyncIndicator('offline'));


// ── Session meta ──────────────────────────────────────────────────

async function saveCloudSessionMeta(code, role, userName) {
    try {
        await window.electronAPI.saveCloudMeta({
            device_id: getDeviceId(), project_code: code, device_role: role, user_name: userName
        });
        localStorage.setItem('mcs_last_project_code', code);
        localStorage.setItem('mcs_last_device_role',  role);
        localStorage.setItem('mcs_last_sync_ts',      Date.now().toString());
    } catch (e) {}
}

async function restoreLastSession() {
    const savedCode = localStorage.getItem('mcs_last_project_code');
    const savedRole = localStorage.getItem('mcs_last_device_role');
    if (!savedCode) return;
    currentProjectCode = savedCode;
    currentDeviceRole  = savedRole || 'vessel';
    setDeviceRole(currentDeviceRole);
    setTimeout(checkForCloudUpdates, 2500);
}


// ── UI helpers ────────────────────────────────────────────────────

function setDeviceRole(role) {
    currentDeviceRole = role;
    const badge = document.getElementById('device-role-badge');
    if (!badge) return;
    badge.textContent = role.toUpperCase();
    badge.style.cssText = role === 'vessel'
        ? 'background:#1d4ed8;color:#bfdbfe;display:inline-block;'
        : 'background:#c2410c;color:#fed7aa;display:inline-block;';
    badge.classList.remove('hidden');
}

function showProjectCodeBanner(code) {
    const existing = document.getElementById('project-code-banner');
    if (existing) existing.remove();

    const banner = document.createElement('div');
    banner.id = 'project-code-banner';
    banner.style.cssText = [
        'display:flex', 'align-items:center', 'justify-content:space-between',
        'padding:8px 20px', 'background:rgba(30,58,138,0.45)',
        'border-bottom:1px solid rgba(59,130,246,0.35)',
        'font-size:13px', 'flex-shrink:0', 'z-index:5'
    ].join(';');

    banner.innerHTML = `
        <span style="color:#93c5fd;">
            ☁ Project code:
            <strong title="Click to copy"
                    onclick="navigator.clipboard.writeText('${code}');showToast('Code copied!','success');"
                    style="color:white;font-family:monospace;font-size:14px;letter-spacing:0.06em;cursor:pointer;">
                ${code}
            </strong>
            <span style="color:#6b7280;font-size:11px;margin-left:8px;">— share with office to sync</span>
        </span>
        <button onclick="document.getElementById('project-code-banner').remove()"
                style="background:none;border:none;color:#6b7280;cursor:pointer;font-size:18px;line-height:1;padding:0 4px;"
                title="Dismiss">✕</button>`;

    const main = document.querySelector('#app-container > main');
    if (main) main.insertBefore(banner, main.firstChild);
}

function showSyncIndicator(state) {
    const wrap  = document.getElementById('sync-status');
    const dot   = document.getElementById('sync-dot');
    const label = document.getElementById('sync-label');
    if (!wrap || !dot || !label) return;

    const states = {
        synced:  { dot: '#22c55e', text: '#4ade80', label: 'Cloud synced' },
        offline: { dot: '#f59e0b', text: '#fbbf24', label: 'Offline'      },
        pulling: { dot: '#459fd9', text: '#60a5fa', label: 'Syncing…'     },
    };
    const s = states[state] || states.offline;
    wrap.style.display = 'flex';
    dot.style.cssText  = `width:8px;height:8px;border-radius:50%;background:${s.dot};flex-shrink:0;`;
    label.style.color  = s.text;
    label.textContent  = s.label;
}


// ── Join Project UI wiring ────────────────────────────────────────

function initJoinProjectUI() {
    const joinBtn    = document.getElementById('btn-mode-join');
    const joinArea   = document.getElementById('join-input-area');
    const confirmBtn = document.getElementById('btn-join-confirm');
    const codeInput  = document.getElementById('join-code-input');

    if (!joinBtn) return;

    joinBtn.addEventListener('click', () => {
        if (!joinArea) return;
        const isHidden = joinArea.classList.contains('hidden');
        joinArea.classList.toggle('hidden', !isHidden);
        if (isHidden && codeInput) codeInput.focus();
    });

    if (confirmBtn) {
        confirmBtn.addEventListener('click', () => {
            const code     = codeInput ? codeInput.value.trim() : '';
            const userName = document.getElementById('mode-user-name')?.textContent?.trim()
                             || currentUserName || currentUserId;
            if (!code) return;
            joinCloudProject(code, userName);
        });
    }

    if (codeInput) {
        codeInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') confirmBtn?.click(); });
        codeInput.addEventListener('input', () => {
            const pos = codeInput.selectionStart;
            codeInput.value = codeInput.value.toUpperCase();
            codeInput.setSelectionRange(pos, pos);
        });
    }
}
