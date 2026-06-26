import {
  Activity, Fuel, MapPin, Bell, Shield, Smartphone, Cloud, Gauge,
  Truck, Bus, HardHat, Mountain, Package, Droplet, Cpu, Monitor,
  Wifi, Battery, Wrench, CheckCircle2, TrendingDown, DollarSign,
  Route, Users, Map, Zap, Car, Bike, Building2, Siren,
  type LucideIcon,
} from "lucide-react";
import fuelSensorImage from "@/assets/fuel-sensor.png.asset.json";
import gpsDeviceImage from "@/assets/gps-device.png.asset.json";
import fleetCameraImage from "@/assets/fleet-camera.png.asset.json";
import v5BasicGpsImage from "@/assets/v5-basic-gps.png.asset.json";

export type Feature = { icon: LucideIcon; title: string; desc: string };
export type Step = { title: string; desc: string };
export type Spec = { label: string; value: string; icon?: LucideIcon };
export type Faq = { q: string; a: string };
export type Industry = { name: string; icon: LucideIcon };
export type Benefit = { icon: LucideIcon; title: string; desc: string };
export type Testimonial = { name: string; role: string; quote: string; initials: string };

export type Product = {
  slug: string;
  sku: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  image: string;
  images?: string[];
  overview: { icon: LucideIcon; title: string; desc: string }[];
  features: Feature[];
  specs: Spec[];
  steps: Step[];
  benefits: Benefit[];
  industries: Industry[];
  faqs: Faq[];
  testimonials: Testimonial[];
  related: string[];
};

const fleetIndustries: Industry[] = [
  { name: "Logistics", icon: Truck },
  { name: "School Buses", icon: Bus },
  { name: "Transport", icon: Truck },
  { name: "Construction", icon: HardHat },
  { name: "Mining", icon: Mountain },
  { name: "Fuel Tankers", icon: Droplet },
  { name: "Delivery Vehicles", icon: Package },
  { name: "Corporate Fleets", icon: Building2 },
];

const personalIndustries: Industry[] = [
  { name: "Personal Cars", icon: Car },
  { name: "Two-Wheelers", icon: Bike },
  { name: "Delivery Vehicles", icon: Package },
  { name: "Rental Fleets", icon: Truck },
  { name: "Corporate Cars", icon: Building2 },
  { name: "School Buses", icon: Bus },
  { name: "Cab Services", icon: Car },
  { name: "Logistics", icon: Truck },
];

const baseTestimonials: Testimonial[] = [
  { name: "Rakesh M.", role: "Fleet Manager, Hyderabad Logistics", initials: "RM",
    quote: "Fuel pilferage dropped to near zero within the first month. The alerts are instant and the dashboard is a pleasure to use." },
  { name: "Priya S.", role: "Operations Head, City School Buses", initials: "PS",
    quote: "Parents love the live tracking and we love the geo-fence reports. Setup was painless." },
  { name: "Arjun K.", role: "Director, Krishna Transports", initials: "AK",
    quote: "Saved us nearly 18% on monthly fuel cost. The support team actually picks up the phone." },
];

export const products: Product[] = [
  // ───────────────────── VLTD 4G Device ─────────────────────
  {
    slug: "vltd-4g-device",
    sku: "FT-VLTD-4G",
    name: "VLTD 4G Device",
    tagline: "AIS-140 certified 4G vehicle tracker with SOS, driver behaviour and live fleet visibility.",
    description:
      "The VLTD 4G Device is a flagship AIS-140 certified vehicle location tracking unit built for commercial fleets that demand reliability, speed and compliance. Powered by 4G LTE with 2G fallback, it streams real-time GPS, driver behaviour and SOS events to your dashboard so you always know where every vehicle is, how it's being driven, and whether the driver needs help.",
    highlights: ["AIS-140 Certified", "4G LTE", "SOS Support", "Driver Behaviour"],
    image: gpsDeviceImage.url,
    images: [gpsDeviceImage.url],
    overview: [
      { icon: Shield, title: "What it does", desc: "Streams AIS-140 compliant GPS, SOS and driver telemetry over a 4G LTE network." },
      { icon: Activity, title: "How it helps", desc: "Live tracking, geo-fencing and harsh-driving alerts keep every trip under control." },
      { icon: CheckCircle2, title: "Why it matters", desc: "Mandatory AIS-140 compliance for commercial transport, with the speed of 4G." },
      { icon: Users, title: "Who it's for", desc: "Transporters, school buses, cabs, logistics and any AIS-140 mandated fleet." },
    ],
    features: [
      { icon: Shield, title: "AIS-140 Certified", desc: "Fully compliant with India's mandatory commercial vehicle tracking standard." },
      { icon: Wifi, title: "4G LTE Connectivity", desc: "Fast, low-latency data with seamless 2G fallback for total coverage." },
      { icon: MapPin, title: "Live GPS Tracking", desc: "High-precision multi-constellation GNSS with sub-10-second refresh." },
      { icon: Shield, title: "Geo-Fencing", desc: "Polygon zones with entry, exit and dwell-time alerts." },
      { icon: Siren, title: "SOS Button Support", desc: "Panic button triggers instant emergency alerts to control room and authorities." },
      { icon: Gauge, title: "Driver Behaviour Monitoring", desc: "Tracks harsh braking, sharp turns, rash acceleration and over-speeding." },
      { icon: Route, title: "Route Playback", desc: "Replay any trip second-by-second with stops, idling and speed overlays." },
      { icon: Bell, title: "Real-Time Alerts", desc: "Push, SMS and email notifications the moment an event happens." },
    ],
    specs: [
      { label: "Device Type", value: "AIS-140 VLTD 4G Tracker", icon: Cpu },
      { label: "Connectivity", value: "4G LTE + 2G fallback", icon: Wifi },
      { label: "Network", value: "Pan-India multi-operator SIM", icon: MapPin },
      { label: "GPS Accuracy", value: "2.5 m, multi-constellation GNSS", icon: Activity },
      { label: "Power Supply", value: "9V–32V DC vehicle input", icon: Battery },
      { label: "Operating Voltage", value: "Internal 1100 mAh backup battery", icon: Zap },
      { label: "Installation Type", value: "Professional, concealed wiring", icon: Wrench },
      { label: "Platform Support", value: "Web dashboard + iOS & Android", icon: Smartphone },
      { label: "Warranty", value: "1 year manufacturer warranty", icon: CheckCircle2 },
    ],
    steps: [
      { title: "Order & Schedule", desc: "Pick your plan and we schedule a certified technician at your depot." },
      { title: "Install in Vehicle", desc: "Device is concealed and wired in under 30 minutes per vehicle." },
      { title: "Auto-Register", desc: "Unit auto-registers to your AIS-140 compliant dashboard." },
      { title: "Go Live", desc: "Vehicles appear on the live map with telemetry within seconds." },
      { title: "Monitor & Alert", desc: "Receive SOS, geo-fence and driver behaviour alerts 24/7." },
    ],
    benefits: [
      { icon: MapPin, title: "Improve Fleet Visibility", desc: "Know where every vehicle is in real time." },
      { icon: DollarSign, title: "Reduce Fuel Costs", desc: "Spot idling, rash driving and detours before they bleed cash." },
      { icon: Shield, title: "Enhance Vehicle Security", desc: "SOS, geo-fence and tamper alerts the moment they happen." },
      { icon: Zap, title: "Operational Efficiency", desc: "Right-size routes, crews and dispatch with real data." },
      { icon: Users, title: "Driver Accountability", desc: "Objective scoring keeps drivers safe and engaged." },
      { icon: TrendingDown, title: "Reduce Downtime", desc: "Predictive alerts cut breakdowns and unplanned stops." },
    ],
    industries: fleetIndustries,
    faqs: [
      { q: "Is the VLTD 4G Device AIS-140 certified?", a: "Yes — it is fully certified to India's AIS-140 standard, including SOS support and approved telematics output." },
      { q: "What network does it use?", a: "4G LTE as primary with automatic 2G fallback, so coverage is reliable across highways and remote routes." },
      { q: "Does it support an SOS button?", a: "Yes — an external panic button can be wired in for drivers and passengers to raise an emergency alert." },
      { q: "How is driver behaviour tracked?", a: "Onboard accelerometer + GPS data identify harsh braking, sharp cornering, rash acceleration and over-speeding events." },
      { q: "How long does installation take?", a: "Professional installation typically completes in under 30 minutes per vehicle by our certified technicians." },
      { q: "Can I view data on mobile?", a: "Yes — native iOS and Android apps plus a full web dashboard are included." },
    ],
    testimonials: baseTestimonials,
    related: ["vltd-2g-device", "v5-basic-gps-device", "capacitive-fuel-sensor"],
  },

  // ───────────────────── VLTD 2G Device ─────────────────────
  {
    slug: "vltd-2g-device",
    sku: "FT-VLTD-2G",
    name: "VLTD 2G Device",
    tagline: "Reliable, budget-friendly AIS-140 ready tracker for everyday fleet visibility.",
    description:
      "The VLTD 2G Device is a dependable, cost-effective vehicle location tracking unit purpose-built for operators who need essential real-time tracking, geo-fencing and trip history without the flagship price tag. Powered by India's widely-available 2G network, it delivers consistent uptime in cities and remote routes alike — perfect for trucks, taxis, school transport and small fleets.",
    highlights: ["AIS-140 Ready", "2G Network", "Live Tracking", "Geo-Fencing"],
    image: fleetCameraImage.url,
    images: [fleetCameraImage.url],
    overview: [
      { icon: Shield, title: "What it does", desc: "Streams real-time GPS, route history and speed data over the 2G network." },
      { icon: DollarSign, title: "How it helps", desc: "Delivers essential fleet visibility at a fraction of the cost of premium trackers." },
      { icon: CheckCircle2, title: "Why it matters", desc: "Reliable 2G coverage works everywhere — even in remote highway corridors." },
      { icon: Truck, title: "Who it's for", desc: "Cost-conscious fleet owners, taxis, small transporters and school buses." },
    ],
    features: [
      { icon: Shield, title: "AIS-140 Compliance", desc: "Built to meet India's commercial vehicle tracking compliance requirements." },
      { icon: Wifi, title: "Reliable 2G Network", desc: "Pan-India 2G coverage delivers consistent uptime where 4G isn't available." },
      { icon: MapPin, title: "Live Tracking", desc: "Real-time vehicle position refreshed continuously on your dashboard." },
      { icon: Route, title: "Route History", desc: "Full trip playback with stops, idling and distance for any past date." },
      { icon: Gauge, title: "Speed Alerts", desc: "Instant notifications when a vehicle crosses your defined speed limit." },
      { icon: Shield, title: "Geo-Fencing", desc: "Create polygon zones and get alerts on entry, exit and dwell time." },
      { icon: Activity, title: "Vehicle Monitoring", desc: "Ignition ON/OFF, idling and movement events streamed to the cloud." },
      { icon: Smartphone, title: "Mobile App Access", desc: "Track your fleet anytime from native iOS and Android apps." },
    ],
    specs: [
      { label: "Device Type", value: "AIS-140 Ready VLTD 2G Tracker", icon: Cpu },
      { label: "Connectivity", value: "2G GSM/GPRS", icon: Wifi },
      { label: "Network", value: "Pan-India 2G multi-operator SIM", icon: MapPin },
      { label: "GPS Accuracy", value: "High-precision GPS, 5 m typical", icon: Activity },
      { label: "Power Supply", value: "9V–32V DC vehicle input", icon: Battery },
      { label: "Operating Voltage", value: "Internal backup battery included", icon: Zap },
      { label: "Installation Type", value: "Professional installation", icon: Wrench },
      { label: "Platform Support", value: "Web dashboard + iOS & Android", icon: Smartphone },
      { label: "Warranty", value: "1 year manufacturer warranty", icon: CheckCircle2 },
    ],
    steps: [
      { title: "Order & Schedule", desc: "Choose your plan and we book a certified installer at your location." },
      { title: "Install in Vehicle", desc: "Discreet, tamper-resistant fitment in 20–30 minutes per vehicle." },
      { title: "Auto-Register", desc: "Device pairs automatically with your fleet dashboard." },
      { title: "Track Live", desc: "Your vehicles appear on the live map within seconds." },
      { title: "Receive Alerts", desc: "Speed, geo-fence and ignition events delivered in real time." },
    ],
    benefits: [
      { icon: MapPin, title: "Improve Fleet Visibility", desc: "Always know where every vehicle is, right now." },
      { icon: DollarSign, title: "Reduce Fuel Costs", desc: "Cut idling, detours and unauthorised use with hard data." },
      { icon: Shield, title: "Enhance Vehicle Security", desc: "Instant alerts on movement, tampering and geo-fence breach." },
      { icon: Zap, title: "Operational Efficiency", desc: "Plan smarter routes using real trip history." },
      { icon: Users, title: "Driver Accountability", desc: "Speed and route reports keep drivers honest." },
      { icon: TrendingDown, title: "Reduce Downtime", desc: "Catch issues early and keep vehicles on the road." },
    ],
    industries: fleetIndustries,
    faqs: [
      { q: "Why choose 2G instead of 4G?", a: "2G coverage is the most widely available in India, especially on highways and remote routes. It's also significantly more affordable for everyday tracking." },
      { q: "Is this device AIS-140 compliant?", a: "It is built to AIS-140 requirements for essential commercial vehicle tracking applications." },
      { q: "Can I set geo-fences?", a: "Yes — draw unlimited polygon zones and get instant alerts on entry, exit and dwell." },
      { q: "How long does installation take?", a: "Typically 20–30 minutes per vehicle, performed by our certified technicians." },
      { q: "Will I get a mobile app?", a: "Yes — native iOS and Android apps are included free with every device." },
      { q: "What's the difference vs the 4G model?", a: "The 2G model focuses on essential tracking at a lower cost; the 4G model adds SOS, driver behaviour monitoring and faster refresh." },
    ],
    testimonials: baseTestimonials,
    related: ["vltd-4g-device", "v5-basic-gps-device", "capacitive-fuel-sensor"],
  },

  // ───────────────────── V5 Basic GPS Device ─────────────────────
  {
    slug: "v5-basic-gps-device",
    sku: "FT-V5-Basic",
    name: "V5 Basic GPS Device",
    tagline: "Compact, easy-to-install GPS tracker for everyday vehicle security.",
    description:
      "The V5 Basic GPS Device is a compact, plug-and-play GPS tracker designed for everyday vehicle security. Perfect for personal cars, two-wheelers, delivery vehicles and small commercial fleets, it delivers dependable live tracking, route playback and mobile alerts without the complexity (or cost) of enterprise fleet platforms.",
    highlights: ["Compact Design", "Easy Install", "Live Tracking", "Mobile App"],
    image: v5BasicGpsImage.url,
    images: [v5BasicGpsImage.url],
    overview: [
      { icon: Cpu, title: "What it does", desc: "Streams live GPS location and trip data from any vehicle to your phone." },
      { icon: Shield, title: "How it helps", desc: "Protects personal vehicles against theft and unauthorised use." },
      { icon: CheckCircle2, title: "Why it matters", desc: "Affordable peace of mind for car, bike and small-fleet owners." },
      { icon: Users, title: "Who it's for", desc: "Individual owners, families, two-wheeler riders and small businesses." },
    ],
    features: [
      { icon: MapPin, title: "Real-Time Vehicle Tracking", desc: "Continuous live GPS updates straight to your dashboard and app." },
      { icon: Smartphone, title: "Mobile App Access", desc: "Track your vehicle from anywhere on native iOS and Android apps." },
      { icon: Map, title: "Live Location", desc: "Pinpoint accurate vehicle position any time of day." },
      { icon: Route, title: "Route Playback", desc: "Replay daily trips with stops, distance and timing." },
      { icon: Gauge, title: "Speed Monitoring", desc: "See live speed and get alerts when limits are crossed." },
      { icon: Zap, title: "Ignition Alerts", desc: "Instant notification the moment your vehicle is switched on." },
      { icon: Wrench, title: "Easy Installation", desc: "Compact form factor and simple wiring — DIY-friendly setup." },
      { icon: Bell, title: "Movement Alerts", desc: "Get notified if an idle vehicle starts moving unexpectedly." },
    ],
    specs: [
      { label: "Device Type", value: "Compact GPS Tracker", icon: Cpu },
      { label: "Connectivity", value: "2G GSM/GPRS", icon: Wifi },
      { label: "Network", value: "Pan-India multi-operator SIM", icon: MapPin },
      { label: "GPS Accuracy", value: "High-precision GPS, 5 m typical", icon: Activity },
      { label: "Power Supply", value: "9V–32V DC vehicle input", icon: Battery },
      { label: "Operating Voltage", value: "Internal backup battery", icon: Zap },
      { label: "Installation Type", value: "Easy DIY or 15-min professional", icon: Wrench },
      { label: "Platform Support", value: "Web dashboard + iOS & Android", icon: Smartphone },
      { label: "Warranty", value: "1 year manufacturer warranty", icon: CheckCircle2 },
    ],
    steps: [
      { title: "Order Device", desc: "Pick the V5 Basic and we ship it pre-activated to your address." },
      { title: "Install in Vehicle", desc: "Plug into your vehicle's power — DIY or 15-minute pro install." },
      { title: "Pair with App", desc: "Scan the QR code on the device to add it to your account." },
      { title: "Track Live", desc: "See your vehicle on the live map within seconds." },
      { title: "Stay Alerted", desc: "Ignition, movement and speed alerts arrive on your phone." },
    ],
    benefits: [
      { icon: Shield, title: "Enhance Vehicle Security", desc: "Theft and movement alerts the moment something happens." },
      { icon: MapPin, title: "Improve Vehicle Visibility", desc: "Know where your car or bike is, always." },
      { icon: DollarSign, title: "Affordable Tracking", desc: "Personal-vehicle pricing without enterprise complexity." },
      { icon: Users, title: "Family Safety", desc: "Share live location with family members for peace of mind." },
      { icon: Route, title: "Trip Records", desc: "Automatic logs for every trip you take." },
      { icon: CheckCircle2, title: "Quick Setup", desc: "Up and running in minutes — no specialist needed." },
    ],
    industries: personalIndustries,
    faqs: [
      { q: "Can I install this myself?", a: "Yes — the V5 Basic is designed for easy DIY installation. We also offer professional installation if you prefer." },
      { q: "Will it work on a motorcycle?", a: "Yes — its compact form factor is perfect for two-wheelers as well as cars." },
      { q: "Do I need a separate SIM?", a: "No — the device ships pre-activated with a multi-operator SIM included." },
      { q: "Can I share tracking with family?", a: "Yes — multiple users can view the same vehicle from the mobile app." },
      { q: "What if my vehicle is stolen?", a: "You'll get an instant ignition or movement alert, and can share the live location with authorities directly from the app." },
      { q: "Is there a subscription?", a: "Yes — a low monthly platform fee covers SIM data, app access and cloud hosting." },
    ],
    testimonials: baseTestimonials,
    related: ["vltd-4g-device", "vltd-2g-device", "capacitive-fuel-sensor"],
  },

  // ───────────────────── Capacitive Fuel Sensor ─────────────────────
  {
    slug: "capacitive-fuel-sensor",
    sku: "FT-CFS-1000",
    name: "Capacitive Fuel Sensor",
    tagline: "Tamper-proof fuel level monitoring with ±1–2% accuracy and instant theft alerts.",
    description:
      "The Capacitive Fuel Sensor is a premium fuel level monitoring probe engineered for trucks, buses, tankers and heavy equipment. With ±1–2% accuracy, 1 mm resolution and an IP67-sealed aluminium body, it detects every refill, drain and theft event the moment it happens — and streams it directly to your fleet dashboard alongside GPS data.",
    highlights: ["±1–2% accuracy", "Theft Detection", "1 mm resolution", "IP67 sealed"],
    image: fuelSensorImage.url,
    images: [fuelSensorImage.url],
    overview: [
      { icon: Fuel, title: "What it does", desc: "Continuously measures fuel level inside the tank using capacitive sensing." },
      { icon: Shield, title: "How it helps", desc: "Catches every drain, refill and tamper event in real time." },
      { icon: TrendingDown, title: "Why it matters", desc: "Fuel is the single largest cost in any fleet — protect it with hard data." },
      { icon: Truck, title: "Who it's for", desc: "Operators of trucks, buses, tankers, generators and heavy equipment." },
    ],
    features: [
      { icon: Fuel, title: "Accurate Fuel Level Monitoring", desc: "Live tank level streamed continuously with ±1–2% accuracy." },
      { icon: Bell, title: "Fuel Theft Detection", desc: "Sudden drains trigger instant SMS, email and push alerts." },
      { icon: Activity, title: "Fuel Refill Alerts", desc: "Every refill logged with exact volume, time and location." },
      { icon: TrendingDown, title: "Fuel Consumption Reports", desc: "Per-vehicle, per-driver and per-route mileage analytics." },
      { icon: Cloud, title: "Real-Time Fuel Data", desc: "Encrypted readings synced to the cloud every few seconds." },
      { icon: Gauge, title: "High Precision Sensor", desc: "1 mm resolution catches even slow, low-volume siphoning." },
      { icon: Shield, title: "Tamper Detection", desc: "Cable cut and sensor unplug events trigger instant warnings." },
      { icon: Monitor, title: "Fleet Fuel Analytics", desc: "Dashboards that turn raw fuel events into board-ready insights." },
    ],
    specs: [
      { label: "Device Type", value: "Capacitive Fuel Level Sensor", icon: Droplet },
      { label: "Connectivity", value: "Wired to GPS tracker / gateway", icon: Wifi },
      { label: "Network", value: "Via paired tracker (2G/4G)", icon: MapPin },
      { label: "GPS Accuracy", value: "N/A — fuel sensor (paired with GPS unit)", icon: Activity },
      { label: "Power Supply", value: "9V–32V DC vehicle input", icon: Battery },
      { label: "Operating Voltage", value: "Output: DC 0–5V / RS-232 / RS-485", icon: Zap },
      { label: "Installation Type", value: "Tank-mounted, calibrated install", icon: Wrench },
      { label: "Platform Support", value: "Web dashboard + iOS & Android", icon: Smartphone },
      { label: "Warranty", value: "1 year manufacturer warranty", icon: CheckCircle2 },
    ],
    steps: [
      { title: "Tank Calibration", desc: "Tank is calibrated end-to-end so readings map to exact litres." },
      { title: "Sensor Installation", desc: "Probe is fitted inside the tank and sealed with a tamper-proof flange." },
      { title: "Pair with Tracker", desc: "Sensor pairs with your GPS device or standalone gateway." },
      { title: "Monitor Live", desc: "Dashboard shows live tank level, refills and drains." },
      { title: "Receive Alerts", desc: "Instant alerts on theft, sudden drains and tampering." },
    ],
    benefits: [
      { icon: TrendingDown, title: "Reduce Fuel Costs", desc: "Eliminate the single biggest leak in fleet operations." },
      { icon: DollarSign, title: "Save 10–20% Monthly", desc: "Customers regularly report double-digit fuel savings." },
      { icon: Gauge, title: "True Mileage Data", desc: "Know real km-per-litre per vehicle and driver." },
      { icon: Shield, title: "Audit-Ready Logs", desc: "Every refill and drain timestamped and geo-tagged." },
      { icon: Activity, title: "Catch Siphoning Fast", desc: "Even slow, hose-style theft is detected in minutes." },
      { icon: CheckCircle2, title: "Fast ROI", desc: "Payback typically within 3–6 months of installation." },
    ],
    industries: fleetIndustries,
    faqs: [
      { q: "How does the capacitive sensor work?", a: "A probe inside the tank measures dielectric change as fuel level rises and falls, reporting in real time to your tracker and cloud platform." },
      { q: "Is installation included?", a: "Yes — installation, calibration and tank charting are all done by our trained technicians." },
      { q: "How accurate is it?", a: "±1–2% under idle conditions with 1 mm resolution — far better than dipstick or float-based methods." },
      { q: "Will it work with my existing GPS device?", a: "Yes — the sensor outputs DC 0–5V, RS-232 and RS-485 and pairs with most commercial GPS trackers, including our VLTD 4G and 2G devices." },
      { q: "Can it detect theft while parked?", a: "Yes — sudden level drops trigger instant alerts whether the vehicle is moving or parked." },
      { q: "What's the sensor's lifespan?", a: "Rated for 30,000 operating hours under typical fleet conditions, with a 1-year manufacturer warranty." },
    ],
    testimonials: baseTestimonials,
    related: ["vltd-4g-device", "vltd-2g-device", "v5-basic-gps-device"],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelated(slugs: string[]): Product[] {
  return slugs.map(getProduct).filter((p): p is Product => Boolean(p));
}
