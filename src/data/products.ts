import {
  Activity, Fuel, MapPin, Bell, Shield, Smartphone, Cloud, Gauge,
  Truck, Bus, HardHat, Mountain, Package, Droplet, Cpu, Monitor,
  Wifi, Battery, Wrench, CheckCircle2, TrendingDown, DollarSign,
  Route, Users, Map, Zap, Layers, BarChart3, Server, KeyRound,
  type LucideIcon,
} from "lucide-react";
import sensorImg from "@/assets/products/ft-cfs-1000.webp";
import softwareImg from "@/assets/products/ft-cloud-suite.webp";
import ais4gImg from "@/assets/products/ais-140-4g.jpg";
import ais2gImg from "@/assets/products/ais-140-2g.jpg";
import v5BasicImg from "@/assets/products/v5-basic-gps.jpg";
import platformImg from "@/assets/products/platform-dashboard.jpg";
import gpsImg1Asset from "@/assets/products/secure-experts-gps.png.asset.json";
const gpsImg1 = { url: gpsImg1Asset.url };
const gpsImg2 = { url: gpsImg1Asset.url };


export type ProductCategory = "Devices" | "Sensors" | "Software";

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
  category: ProductCategory;
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

/**
 * Slugs that have a brochure PDF at /public/brochures/{slug}.pdf
 * Add a slug here once the PDF is uploaded — the Download Brochure button
 * activates automatically on the matching product page.
 */
export const BROCHURE_SLUGS: ReadonlySet<string> = new Set<string>([]);

export function brochureUrl(slug: string): string | null {
  return BROCHURE_SLUGS.has(slug) ? `/brochures/${slug}.pdf` : null;
}

const commonIndustries: Industry[] = [
  { name: "Logistics", icon: Truck },
  { name: "School Buses", icon: Bus },
  { name: "Construction", icon: HardHat },
  { name: "Mining", icon: Mountain },
  { name: "Delivery Fleets", icon: Package },
  { name: "Fuel Tankers", icon: Droplet },
];

const baseTestimonials: Testimonial[] = [
  { name: "Rakesh M.", role: "Fleet Manager, Hyderabad Logistics", initials: "RM",
    quote: "Fuel pilferage dropped to near zero within the first month. The alerts are instant and the dashboard is a pleasure to use." },
  { name: "Priya S.", role: "Operations Head, City School Buses", initials: "PS",
    quote: "Parents love the live tracking and we love the geo-fence reports. Setup was painless." },
  { name: "Arjun K.", role: "Director, Krishna Transports", initials: "AK",
    quote: "Saved us nearly 18% on monthly fuel cost. The support team actually picks up the phone." },
];

const commonGpsFeatures: Feature[] = [
  { icon: MapPin, title: "Real-Time GPS Tracking", desc: "Sub-10-second location refresh on a smooth live map." },
  { icon: Route, title: "Route Playback History", desc: "Replay any day's journey second by second with stop analysis." },
  { icon: Shield, title: "Geo-Fencing Alerts", desc: "Custom polygon zones with entry, exit and dwell triggers." },
  { icon: Gauge, title: "Over-Speed Notifications", desc: "Instant alerts the moment a vehicle crosses a speed limit." },
  { icon: Bell, title: "Panic / SOS Alerts", desc: "Driver-triggered emergency alerts straight to control room." },
  { icon: Smartphone, title: "Mobile App Access", desc: "Native iOS and Android apps for owners and dispatch." },
];

const ais140Steps: Step[] = [
  { title: "AIS-140 install", desc: "Certified technician installs the device per ARAI guidelines." },
  { title: "SIM activation", desc: "Multi-network SIM is provisioned to the device automatically." },
  { title: "Dashboard pairing", desc: "Device appears live on the Fuel Tracks platform within minutes." },
  { title: "Configure alerts", desc: "Set up geo-fences, speed limits and SOS recipients." },
  { title: "Track 24/7", desc: "Real-time monitoring with reports and audit logs." },
];

const ais140Faqs: Faq[] = [
  { q: "Is this device AIS-140 compliant?", a: "Yes — fully ARAI-certified to the AIS-140 standard required for commercial vehicles in India." },
  { q: "What's in the box?", a: "AIS-140 device, GPS + GSM antennas, internal backup battery, wiring harness and a panic button." },
  { q: "Does it work on toll-priced routes and remote areas?", a: "Yes — multi-constellation GNSS plus pan-India multi-network SIM keeps coverage strong even in low-signal zones." },
  { q: "Is the data hosted in India?", a: "Yes — all telemetry is stored on India-hosted cloud infrastructure with encrypted transport." },
  { q: "Can I track multiple devices on one dashboard?", a: "Yes — one Fuel Tracks dashboard scales from a single device to thousands." },
];

export const products: Product[] = [
  {
    slug: "gps-tracking-device",
    sku: "FT-GPS-Pro",
    name: "VLTD-AIS GPS Tracking Device",
    category: "Devices",
    tagline: "Track smarter, drive safer and manage fleets better with real-time GPS, route history and instant security alerts.",
    description:
      "The VLTD-AIS GPS Tracking Device is a reliable and intelligent vehicle tracking solution designed to provide real-time location monitoring, route tracking, security alerts, and complete fleet management capabilities. Whether you manage logistics, school buses, commercial vehicles, construction equipment, or personal vehicles, this device gives complete visibility and control through a powerful web and mobile platform.",
    highlights: ["Real-Time GPS", "4G / GSM", "Web + Mobile App", "24/7 Monitoring"],
    image: gpsImg1.url,
    images: [gpsImg1.url, gpsImg2.url],
    overview: [
      { icon: Activity, title: "What it does", desc: "Continuously reports vehicle location, speed, ignition and route history to your cloud dashboard." },
      { icon: Shield, title: "How it helps", desc: "Prevents theft, improves driver behaviour and gives complete visibility across every trip." },
      { icon: CheckCircle2, title: "Why it matters", desc: "Stop guessing where vehicles are — run operations on accurate, real-time data." },
      { icon: Users, title: "Who it's for", desc: "Logistics, transport, school buses, corporate fleets, delivery, construction, fuel tankers and commercial vehicles." },
    ],
    features: [
      { icon: MapPin, title: "Real-Time GPS Tracking", desc: "Sub-10-second location refresh on a smooth live map." },
      { icon: Map, title: "Live Vehicle Location", desc: "Pinpoint accurate vehicle position any time of day." },
      { icon: Route, title: "Route Playback History", desc: "Replay any day's journey second by second with stop analysis." },
      { icon: Shield, title: "Geo-Fencing Alerts", desc: "Custom polygon zones with entry, exit and dwell triggers." },
      { icon: Gauge, title: "Over-Speed Notifications", desc: "Instant alerts the moment a vehicle crosses a speed limit." },
      { icon: Zap, title: "Ignition ON/OFF Monitoring", desc: "Know exactly when each vehicle starts and stops." },
      { icon: Bell, title: "Vehicle Movement Alerts", desc: "Get notified the moment an idle vehicle starts moving." },
      { icon: Users, title: "Driver Activity Monitoring", desc: "Track harsh braking, acceleration and idle time per driver." },
      { icon: Smartphone, title: "Mobile App Access", desc: "Native iOS and Android apps for owners and dispatch." },
      { icon: Monitor, title: "Web Dashboard Access", desc: "Manage your full fleet from any browser, anywhere." },
      { icon: Activity, title: "24/7 Vehicle Monitoring", desc: "Round-the-clock tracking with always-on cloud sync." },
      { icon: Bell, title: "Instant Notifications", desc: "Configurable alerts across SMS, email and mobile push." },
      { icon: Truck, title: "Fleet Management Support", desc: "Scale from a single vehicle to thousands on one platform." },
    ],
    specs: [
      { label: "Device Type", value: "VLTD-AIS GPS Tracking Device", icon: Cpu },
      { label: "Network", value: "4G / GSM", icon: Wifi },
      { label: "GPS Accuracy", value: "High Precision Tracking", icon: MapPin },
      { label: "Tracking", value: "Real-Time", icon: Activity },
      { label: "Alerts", value: "Speed, Geo-Fence, Ignition", icon: Bell },
      { label: "Dashboard", value: "Web-Based Tracking", icon: Monitor },
      { label: "Mobile App", value: "Android & iOS Support", icon: Smartphone },
      { label: "Installation", value: "Professional Installation", icon: Wrench },
      { label: "Compatibility", value: "Commercial & Personal", icon: Truck },
      { label: "Monitoring", value: "24/7 Tracking Support", icon: Shield },
      { label: "Cloud Platform", value: "Supported", icon: Cloud },
    ],
    steps: [
      { title: "Install Device in Vehicle", desc: "Certified technician installs and conceals the unit in under 30 minutes." },
      { title: "Connect Device to Platform", desc: "Device auto-registers to your cloud dashboard with a unique ID." },
      { title: "Start Live Tracking", desc: "Your vehicle appears on the live map within seconds." },
      { title: "Monitor Vehicle Activity", desc: "Trips, idling, routes and driver scores generated automatically." },
      { title: "Receive Alerts & Reports", desc: "Get instant notifications and scheduled performance reports." },
    ],
    benefits: [
      { icon: MapPin, title: "Improve Fleet Visibility", desc: "Always know where every vehicle is, right now." },
      { icon: Shield, title: "Increase Vehicle Security", desc: "Theft and tamper alerts the moment they happen." },
      { icon: Activity, title: "Monitor in Real Time", desc: "Live data instead of end-of-day spreadsheets." },
      { icon: CheckCircle2, title: "Reduce Unauthorized Use", desc: "Catch off-hour and off-route trips instantly." },
      { icon: Route, title: "Optimize Routes", desc: "Use real trip history to plan smarter tomorrow." },
      { icon: Users, title: "Driver Accountability", desc: "Objective scoring keeps drivers engaged and safe." },
      { icon: Zap, title: "Operational Efficiency", desc: "Right-size routes, crew and fuel allocation." },
      { icon: DollarSign, title: "Reduce Business Costs", desc: "Cut fuel, overtime and maintenance overheads." },
      { icon: TrendingDown, title: "Improve Productivity", desc: "More trips, fewer delays, happier customers." },
    ],
    industries: [
      { name: "Logistics", icon: Truck },
      { name: "Transportation", icon: Truck },
      { name: "School Buses", icon: Bus },
      { name: "Mining", icon: Mountain },
      { name: "Construction", icon: HardHat },
      { name: "Delivery Services", icon: Package },
      { name: "Fuel Tankers", icon: Droplet },
      { name: "Corporate Fleets", icon: Users },
    ],
    faqs: [
      { q: "What is a VLTD-AIS GPS Tracking Device?", a: "A compact hardware unit installed in your vehicle that streams real-time location, speed and engine telemetry to a secure cloud platform you can access from anywhere." },
      { q: "How accurate is the tracking?", a: "High-precision multi-constellation GNSS delivers metre-level accuracy with a sub-10-second refresh rate on the live map." },
      { q: "Can I track multiple vehicles?", a: "Yes — the same dashboard scales from a single vehicle to thousands, with grouping, filters and role-based access." },
      { q: "Is mobile tracking available?", a: "Yes — free native iOS and Android apps are included for owners, dispatchers and drivers." },
      { q: "Does it work across India?", a: "Yes — pan-India coverage with multi-network SIM support and cloud hosting inside India." },
      { q: "How long does installation take?", a: "Professional installation by our certified technicians typically completes in under 30 minutes per vehicle." },
    ],
    testimonials: baseTestimonials,
    related: ["vltd-ais-140-4g-device", "fuel-sensor", "gps-tracking-platform"],
  },
  {
    slug: "vltd-ais-140-4g-device",
    sku: "FT-AIS140-4G",
    name: "VLTD AIS-140 4G Device",
    category: "Devices",
    tagline: "ARAI-certified AIS-140 4G LTE tracker with SOS, multi-network SIM and India-hosted cloud.",
    description:
      "The Fuel Tracks VLTD AIS-140 4G Device is a fully compliant Vehicle Location Tracking Device built for commercial fleets, school transport and public service vehicles in India. With 4G LTE primary connectivity and 2G fallback, GPS+GLONASS+IRNSS multi-constellation positioning, an integrated panic button and tamper detection, it meets every requirement of the AIS-140 standard while delivering enterprise-grade tracking on the Fuel Tracks platform.",
    highlights: ["AIS-140 ARAI Certified", "4G LTE + 2G Fallback", "Panic / SOS Button", "8 hr Backup Battery"],
    image: ais4gImg,
    images: [ais4gImg],
    overview: [
      { icon: Shield, title: "What it does", desc: "Streams encrypted AIS-140 compliant telemetry — location, speed, ignition, panic events — to the Fuel Tracks cloud." },
      { icon: CheckCircle2, title: "How it helps", desc: "Keeps commercial fleets fully compliant with VLTD and ETS regulations across India." },
      { icon: Bell, title: "Why it matters", desc: "Panic button and tamper alerts protect drivers and passengers in real time." },
      { icon: Bus, title: "Who it's for", desc: "School buses, taxis, fleet operators, public transport and any commercial vehicle requiring AIS-140." },
    ],
    features: [
      ...commonGpsFeatures,
      { icon: Wifi, title: "4G LTE + 2G Fallback", desc: "Always-on connectivity that drops gracefully to 2G in remote regions." },
      { icon: Battery, title: "8 hr Internal Backup", desc: "Continues reporting even if main power is cut." },
      { icon: Shield, title: "Tamper Detection", desc: "Instant alerts on power-cut, GPS jamming or case-open events." },
      { icon: Server, title: "India-Hosted Cloud", desc: "All telemetry stored and processed on India-based infrastructure." },
    ],
    specs: [
      { label: "Device Type", value: "AIS-140 VLTD (Vehicle Location Tracking Device)", icon: Cpu },
      { label: "Model", value: "FT-AIS140-4G", icon: Layers },
      { label: "Connectivity", value: "4G LTE primary, 2G fallback", icon: Wifi },
      { label: "GPS / GNSS", value: "GPS + GLONASS + IRNSS, ≤ 2.5 m accuracy", icon: MapPin },
      { label: "Panic Button", value: "Wired SOS button included", icon: Bell },
      { label: "Battery Backup", value: "Internal Li-ion, up to 8 hours", icon: Battery },
      { label: "Operating Voltage", value: "9V – 36V DC", icon: Zap },
      { label: "Installation", value: "Concealed dashboard install by certified technician", icon: Wrench },
      { label: "Cloud Platform", value: "Fuel Tracks Cloud (India-hosted)", icon: Cloud },
      { label: "Mobile App", value: "Native iOS & Android", icon: Smartphone },
      { label: "Dashboard", value: "Web-based real-time tracking", icon: Monitor },
      { label: "Certification", value: "AIS-140 ARAI certified, IP65", icon: Shield },
      { label: "Warranty", value: "1 year manufacturer warranty", icon: CheckCircle2 },
    ],
    steps: ais140Steps,
    benefits: [
      { icon: Shield, title: "Stay AIS-140 Compliant", desc: "Meet RTO and state transport requirements out of the box." },
      { icon: Bell, title: "Driver & Passenger Safety", desc: "Wired panic button triggers instant control-room alerts." },
      { icon: Wifi, title: "Always-On Coverage", desc: "4G LTE with 2G fallback keeps you connected pan-India." },
      { icon: Activity, title: "Real-Time Visibility", desc: "Live position, speed and ignition on a smooth map." },
      { icon: DollarSign, title: "Lower Operating Cost", desc: "Optimise routes, fuel and overtime with hard data." },
    ],
    industries: commonIndustries,
    faqs: ais140Faqs,
    testimonials: baseTestimonials,
    related: ["vltd-ais-140-2g-device", "gps-tracking-platform", "fuel-sensor"],
  },
  {
    slug: "vltd-ais-140-2g-device",
    sku: "FT-AIS140-2G",
    name: "VLTD AIS-140 2G Device",
    category: "Devices",
    tagline: "Cost-effective AIS-140 compliant 2G tracker — perfect for budget-conscious commercial fleets.",
    description:
      "The Fuel Tracks VLTD AIS-140 2G Device delivers full ARAI-certified AIS-140 compliance over reliable 2G GSM networks, ideal for fleets operating in mature 2G coverage areas. With multi-constellation GNSS positioning, an integrated panic button, tamper detection and India-hosted cloud, it meets every regulatory requirement at a fleet-friendly price point.",
    highlights: ["AIS-140 ARAI Certified", "2G GSM Connectivity", "Panic / SOS Button", "Internal Backup Battery"],
    image: ais2gImg,
    images: [ais2gImg],
    overview: [
      { icon: Shield, title: "What it does", desc: "AIS-140 compliant location, ignition and panic telemetry over 2G GSM networks." },
      { icon: DollarSign, title: "How it helps", desc: "Compliant tracking at the lowest total cost — ideal for large fleets." },
      { icon: Bell, title: "Why it matters", desc: "Same regulatory protection as the 4G variant, optimised for 2G coverage zones." },
      { icon: Truck, title: "Who it's for", desc: "Budget-conscious commercial vehicles, school buses and intra-city fleets." },
    ],
    features: [
      ...commonGpsFeatures,
      { icon: Wifi, title: "Reliable 2G GSM", desc: "Strong coverage on every major Indian 2G network." },
      { icon: Battery, title: "Backup Battery", desc: "Keeps reporting even when the vehicle is unplugged." },
      { icon: Shield, title: "Tamper Detection", desc: "Power-cut, jamming and case-open events trigger alerts." },
      { icon: Server, title: "India-Hosted Cloud", desc: "Telemetry stored on India-based infrastructure." },
    ],
    specs: [
      { label: "Device Type", value: "AIS-140 VLTD (2G)", icon: Cpu },
      { label: "Model", value: "FT-AIS140-2G", icon: Layers },
      { label: "Connectivity", value: "2G GSM (GPRS)", icon: Wifi },
      { label: "GPS / GNSS", value: "GPS + GLONASS + IRNSS, ≤ 2.5 m accuracy", icon: MapPin },
      { label: "Panic Button", value: "Wired SOS button included", icon: Bell },
      { label: "Battery Backup", value: "Internal Li-ion, up to 4 hours", icon: Battery },
      { label: "Operating Voltage", value: "9V – 36V DC", icon: Zap },
      { label: "Installation", value: "Professional installation included", icon: Wrench },
      { label: "Cloud Platform", value: "Fuel Tracks Cloud (India-hosted)", icon: Cloud },
      { label: "Mobile App", value: "Native iOS & Android", icon: Smartphone },
      { label: "Dashboard", value: "Web-based real-time tracking", icon: Monitor },
      { label: "Certification", value: "AIS-140 ARAI certified, IP65", icon: Shield },
      { label: "Warranty", value: "1 year manufacturer warranty", icon: CheckCircle2 },
    ],
    steps: ais140Steps,
    benefits: [
      { icon: DollarSign, title: "Lowest Cost of Ownership", desc: "Compliant tracking at the most affordable price point." },
      { icon: Shield, title: "AIS-140 Compliance", desc: "Meets every regulatory requirement out of the box." },
      { icon: Bell, title: "Driver Safety", desc: "Panic button delivers instant SOS to the control room." },
      { icon: Activity, title: "Reliable Reporting", desc: "Proven 2G GSM connectivity with India-wide coverage." },
    ],
    industries: commonIndustries,
    faqs: ais140Faqs,
    testimonials: baseTestimonials,
    related: ["vltd-ais-140-4g-device", "gps-tracking-platform", "v5-basic-gps-device"],
  },
  {
    slug: "v5-basic-gps-device",
    sku: "FT-V5-BASIC",
    name: "V5 Basic GPS Device",
    category: "Devices",
    tagline: "Compact, affordable GPS tracker for small fleets, personal vehicles and asset tracking.",
    description:
      "The V5 Basic GPS Device is a compact entry-level vehicle tracker designed for small businesses, personal vehicles and light asset tracking. It delivers real-time location, ignition status, geo-fence alerts and trip history on the Fuel Tracks platform without the cost of an AIS-140 compliant unit.",
    highlights: ["Compact Design", "Real-Time GPS", "Geo-Fence Alerts", "Easy Self-Install"],
    image: v5BasicImg,
    images: [v5BasicImg],
    overview: [
      { icon: MapPin, title: "What it does", desc: "Live location, ignition and basic trip telemetry streamed to your dashboard." },
      { icon: DollarSign, title: "How it helps", desc: "Affordable GPS visibility for small fleets and personal vehicles." },
      { icon: Activity, title: "Why it matters", desc: "Stop guessing — every vehicle on a live map with no monthly surprises." },
      { icon: Users, title: "Who it's for", desc: "Small businesses, taxi operators, personal car owners and light asset tracking." },
    ],
    features: [
      { icon: MapPin, title: "Real-Time Location", desc: "Live position refreshed every few seconds on the dashboard." },
      { icon: Route, title: "Trip History", desc: "Replay every trip with start, stop and idle events." },
      { icon: Shield, title: "Geo-Fence Alerts", desc: "Get notified when the vehicle enters or leaves your zones." },
      { icon: Gauge, title: "Over-Speed Alerts", desc: "Instant warnings on speed violations." },
      { icon: Zap, title: "Ignition Monitoring", desc: "Know when the vehicle is on or off in real time." },
      { icon: Smartphone, title: "Mobile App", desc: "Free iOS and Android apps included." },
    ],
    specs: [
      { label: "Device Type", value: "Basic GPS Vehicle Tracker", icon: Cpu },
      { label: "Model", value: "FT-V5-BASIC", icon: Layers },
      { label: "Connectivity", value: "2G GSM (GPRS)", icon: Wifi },
      { label: "GPS Accuracy", value: "≤ 5 m", icon: MapPin },
      { label: "Operating Voltage", value: "9V – 36V DC", icon: Zap },
      { label: "Installation", value: "Plug-and-play or wired install", icon: Wrench },
      { label: "Cloud Platform", value: "Fuel Tracks Cloud", icon: Cloud },
      { label: "Mobile App", value: "Native iOS & Android", icon: Smartphone },
      { label: "Dashboard", value: "Web-based real-time tracking", icon: Monitor },
      { label: "Warranty", value: "1 year manufacturer warranty", icon: CheckCircle2 },
    ],
    steps: [
      { title: "Wire to vehicle power", desc: "Simple 12V/24V wiring with concealed mount." },
      { title: "Activate SIM", desc: "Pre-configured SIM activates automatically." },
      { title: "Pair on dashboard", desc: "Add the device ID to your Fuel Tracks workspace." },
      { title: "Track live", desc: "Vehicle appears on the live map within minutes." },
    ],
    benefits: [
      { icon: DollarSign, title: "Most Affordable Tracker", desc: "Premium tracking platform at the entry price point." },
      { icon: MapPin, title: "Always-On Visibility", desc: "Know where every vehicle is, right now." },
      { icon: Shield, title: "Theft Protection", desc: "Movement alerts the moment an idle vehicle moves." },
      { icon: Smartphone, title: "Mobile First", desc: "Full tracking from your phone, anywhere." },
    ],
    industries: commonIndustries,
    faqs: [
      { q: "Is the V5 AIS-140 compliant?", a: "No — the V5 Basic is for non-regulated use cases. For AIS-140 compliance choose the VLTD AIS-140 4G or 2G device." },
      { q: "Can I use it for personal cars?", a: "Yes — it's ideal for personal vehicles, small fleets and asset tracking." },
      { q: "How accurate is it?", a: "Around 5 metre GPS accuracy with sub-30-second refresh on the live map." },
      { q: "Is the mobile app free?", a: "Yes — native iOS and Android apps are included with every device." },
    ],
    testimonials: baseTestimonials,
    related: ["vltd-ais-140-2g-device", "gps-tracking-device", "gps-tracking-platform"],
  },
  {
    slug: "fuel-sensor",
    sku: "FT-CFS-1000",
    name: "Capacitive Fuel Sensor",
    category: "Sensors",
    tagline: "Tamper-proof fuel level monitoring with ±1–2% accuracy.",
    description:
      "A premium capacitive fuel level sensor engineered for trucks, buses and tankers. Detects every refill, drain and theft event with millimetre resolution and streams it directly to your fleet dashboard.",
    highlights: ["±1–2% accuracy", "1 mm resolution", "IP67 sealed", "30,000 hr life"],
    image: sensorImg,
    overview: [
      { icon: Fuel, title: "What it does", desc: "Measures fuel level continuously inside the tank using capacitive technology." },
      { icon: Shield, title: "How it helps", desc: "Catches every drain, refill and tamper event the moment it happens." },
      { icon: TrendingDown, title: "Why it matters", desc: "Fuel is the single largest fleet cost — protect it with hard data." },
      { icon: Truck, title: "Who it's for", desc: "Operators of trucks, buses, tankers, generators and heavy equipment." },
    ],
    features: [
      { icon: Fuel, title: "Fuel Monitoring", desc: "Live tank level streamed every few seconds with no manual checks." },
      { icon: Bell, title: "Theft Alerts", desc: "Detects sudden drains and pushes instant SMS, email and app alerts." },
      { icon: Activity, title: "Refill Detection", desc: "Logs every refill with exact volume, time and location." },
      { icon: Gauge, title: "High Resolution", desc: "1 mm resolution catches even slow, low-volume siphoning." },
      { icon: Shield, title: "Tamper Detection", desc: "Cable cut and sensor unplug events trigger instant warnings." },
      { icon: TrendingDown, title: "Mileage Analytics", desc: "True km-per-litre reports per vehicle, driver and route." },
      { icon: Smartphone, title: "Mobile App Access", desc: "View tank level and fuel events from anywhere." },
      { icon: Cloud, title: "Cloud Sync", desc: "All readings encrypted and backed up automatically." },
    ],
    specs: [
      { label: "Device Type", value: "Capacitive Fuel Level Sensor", icon: Droplet },
      { label: "Accuracy", value: "±1–2% (idle field)", icon: Gauge },
      { label: "Resolution", value: "1 mm for regular tanks", icon: Activity },
      { label: "Response Time", value: "< 5 mins (500 samples/sec)", icon: Zap },
      { label: "Output", value: "DC 0–5V / RS-232 / RS-485", icon: Wifi },
      { label: "Protection", value: "IP67, Aluminium housing", icon: Shield },
      { label: "Operating Life", value: "30,000 hours", icon: Battery },
      { label: "Mobile Compatibility", value: "iOS 14+ & Android 8+", icon: Smartphone },
      { label: "Cloud Support", value: "Real-time, encrypted", icon: Cloud },
      { label: "Warranty", value: "1 year manufacturer", icon: CheckCircle2 },
    ],
    steps: [
      { title: "Calibrate tank", desc: "Tank is calibrated end-to-end so readings map to exact litres." },
      { title: "Install sensor", desc: "Sensor is fitted inside the tank and sealed with tamper-proof flange." },
      { title: "Pair with tracker", desc: "Sensor pairs with your GPS device or standalone gateway." },
      { title: "Monitor fuel live", desc: "Dashboard shows live tank level, refills and drains." },
      { title: "Receive alerts", desc: "Instant alerts on theft, sudden drains and tampering." },
    ],
    benefits: [
      { icon: TrendingDown, title: "Eliminate fuel theft", desc: "Stop the single biggest leak in fleet operations." },
      { icon: DollarSign, title: "Save 10–20% monthly", desc: "Real customers report double-digit fuel savings." },
      { icon: Gauge, title: "True mileage data", desc: "Know real km-per-litre per vehicle and driver." },
      { icon: Shield, title: "Audit-ready logs", desc: "Every refill and drain timestamped and geo-tagged." },
      { icon: Activity, title: "Catch siphoning fast", desc: "Even slow, hose-style theft is detected in minutes." },
      { icon: CheckCircle2, title: "Pay back in months", desc: "ROI typically within 3–6 months of installation." },
    ],
    industries: commonIndustries,
    faqs: [
      { q: "How does the device work?", a: "A capacitive probe inside the tank measures dielectric change as fuel level rises and falls, reporting in real time." },
      { q: "Is installation included?", a: "Yes — installation, calibration and tank charting are all done by our trained technicians." },
      { q: "Can I track multiple vehicles?", a: "Yes — one dashboard covers your entire fleet of sensors and trackers together." },
      { q: "Is mobile support available?", a: "Yes — view tank levels, refills and drain alerts from native iOS and Android apps." },
      { q: "How accurate is tracking?", a: "±1–2% under idle conditions with 1 mm resolution — far better than dipstick or float-based methods." },
    ],
    testimonials: baseTestimonials,
    related: ["gps-tracking-device", "fleet-management-solutions", "fleet-software"],
  },
  {
    slug: "fleet-software",
    sku: "FT-Cloud Suite",
    name: "Smart HD CCTV Security Camera",
    category: "Devices",
    tagline: "Monitor your property 24/7 with crystal-clear HD video and night vision.",
    description:
      "Monitor your property 24/7 with crystal-clear HD video and night vision. Get real-time alerts and remote access for enhanced security anytime, anywhere.",
    highlights: ["Live map", "Fuel analytics", "iOS + Android", "Role-based access"],
    image: softwareImg,
    overview: [
      { icon: Monitor, title: "What it does", desc: "Brings every device, sensor and trip into one clean dashboard." },
      { icon: Users, title: "How it helps", desc: "Owners, dispatchers, drivers and parents each get the view they need." },
      { icon: Activity, title: "Why it matters", desc: "Decisions get faster and reports get accurate when data lives in one place." },
      { icon: Truck, title: "Who it's for", desc: "Any fleet — from 5 vehicles to 10,000+ — across logistics, transport and education." },
    ],
    features: [
      { icon: Map, title: "Live Map", desc: "Smooth multi-vehicle live map with clustering and quick filters." },
      { icon: Fuel, title: "Fuel Analytics", desc: "Refill, drain and mileage events broken down per vehicle." },
      { icon: Shield, title: "Geo-Fencing", desc: "Polygon zones with entry, exit and dwell-time alerts." },
      { icon: Bell, title: "Smart Alerts", desc: "Configure alerts per role across email, SMS and push." },
      { icon: Route, title: "Route Playback", desc: "Visual journey replay with stops, idling and speed overlays." },
      { icon: Gauge, title: "Driver Scoring", desc: "Automated scoring with coaching reports and trend graphs." },
      { icon: Smartphone, title: "Mobile App", desc: "Native iOS and Android apps for owner, dispatch, driver and parent profiles." },
      { icon: Cloud, title: "Reports & Exports", desc: "Scheduled PDF and CSV reports delivered to your inbox." },
    ],
    specs: [
      { label: "Device Type", value: "Cloud SaaS platform", icon: Cloud },
      { label: "Connectivity", value: "Web + iOS + Android", icon: Wifi },
      { label: "Live Tracking", value: "Sub-10-second refresh", icon: Activity },
      { label: "Battery Backup", value: "N/A (cloud-hosted)", icon: Battery },
      { label: "Installation Type", value: "Zero — instant access", icon: Wrench },
      { label: "Sensor Support", value: "GPS, fuel, temperature, RFID", icon: Cpu },
      { label: "Mobile Compatibility", value: "iOS 14+ & Android 8+", icon: Smartphone },
      { label: "Cloud Support", value: "99.9% uptime SLA", icon: Cloud },
      { label: "Warranty", value: "Continuous updates included", icon: CheckCircle2 },
      { label: "Network Support", value: "Pan-India hosting", icon: MapPin },
    ],
    steps: [
      { title: "Create account", desc: "Your workspace is provisioned the moment you sign up." },
      { title: "Connect devices", desc: "GPS trackers and fuel sensors auto-register to your dashboard." },
      { title: "Invite your team", desc: "Add owners, dispatchers, drivers and parents with the right roles." },
      { title: "Configure alerts", desc: "Set geo-fences, speed limits and fuel thresholds in minutes." },
      { title: "Run your fleet", desc: "Live map, reports and alerts — everything in one place." },
    ],
    benefits: [
      { icon: Activity, title: "One source of truth", desc: "Replace spreadsheets, phone calls and WhatsApp groups." },
      { icon: TrendingDown, title: "Reduce costs", desc: "Cut fuel, idle time and unauthorised trips." },
      { icon: Users, title: "Empower teams", desc: "Role-based access keeps everyone on the same page." },
      { icon: Bell, title: "Catch issues early", desc: "Smart alerts surface problems before they escalate." },
      { icon: Route, title: "Optimise routes", desc: "Use real trip history to plan tomorrow." },
      { icon: Shield, title: "Audit-ready", desc: "Every event timestamped, exportable and tamper-proof." },
    ],
    industries: commonIndustries,
    faqs: [
      { q: "How does the device work?", a: "It's cloud-based — devices stream data to our platform and you access it from any browser or mobile app." },
      { q: "Is installation included?", a: "There's nothing to install on your side. Onboarding and training are included with every plan." },
      { q: "Can I track multiple vehicles?", a: "Yes — from a handful of vehicles to fleets of 10,000+ on the same dashboard." },
      { q: "Is mobile support available?", a: "Yes — native iOS and Android apps for every role are included free." },
      { q: "How accurate is tracking?", a: "Accuracy depends on the connected device. Our trackers deliver 2.5-metre GPS accuracy with sub-10-second refresh." },
    ],
    testimonials: baseTestimonials,
    related: ["gps-tracking-device", "fuel-sensor"],
  },
  {
    slug: "gps-tracking-platform",
    sku: "FT-PLATFORM",
    name: "GPS Tracking Platform",
    category: "Software",
    tagline: "A unified web and mobile platform for live GPS tracking, replay, alerts and reports.",
    description:
      "The Fuel Tracks GPS Tracking Platform is a modern cloud-native tracking software that turns raw GPS telemetry into clean, actionable visibility. Built for fleet managers and operators, it combines a smooth live map, deep trip history, configurable alerts and powerful reports into a single browser-based experience — with native iOS and Android apps for the road.",
    highlights: ["Live Map", "Trip Replay", "Configurable Alerts", "Web + Mobile"],
    image: platformImg,
    images: [platformImg],
    overview: [
      { icon: Monitor, title: "What it does", desc: "Visualises every vehicle, route, alert and report on a single live dashboard." },
      { icon: Activity, title: "How it helps", desc: "Replaces spreadsheets and SMS-based tracking with one always-on platform." },
      { icon: BarChart3, title: "Why it matters", desc: "Reliable data drives every operational decision — routes, fuel, drivers, costs." },
      { icon: Users, title: "Who it's for", desc: "Fleet owners, dispatchers, operations heads and drivers." },
    ],
    features: [
      { icon: Map, title: "Live Multi-Vehicle Map", desc: "Smooth, clustered live map with instant filters and search." },
      { icon: Route, title: "Trip Playback", desc: "Second-by-second route replay with stops, idling and speed overlays." },
      { icon: Bell, title: "Configurable Alerts", desc: "Geo-fence, speed, ignition, panic — delivered by email, SMS and push." },
      { icon: BarChart3, title: "Reports & Exports", desc: "Scheduled PDF and CSV reports delivered to your inbox." },
      { icon: KeyRound, title: "Role-Based Access", desc: "Owners, managers, dispatchers and drivers each see what they need." },
      { icon: Smartphone, title: "Native Mobile Apps", desc: "Free iOS and Android apps included for every role." },
    ],
    specs: [
      { label: "Device Type", value: "Cloud SaaS platform", icon: Cloud },
      { label: "Connectivity", value: "Web + iOS + Android", icon: Wifi },
      { label: "Live Refresh", value: "Sub-10 second updates", icon: Activity },
      { label: "Device Support", value: "All Fuel Tracks GPS, AIS-140 & fuel sensors", icon: Cpu },
      { label: "Mobile App", value: "iOS 14+ & Android 8+", icon: Smartphone },
      { label: "Dashboard Access", value: "Modern browser, no install", icon: Monitor },
      { label: "Cloud Platform", value: "India-hosted, 99.9% uptime SLA", icon: Server },
      { label: "Installation Type", value: "Zero — instant onboarding", icon: Wrench },
      { label: "Warranty", value: "Continuous updates included", icon: CheckCircle2 },
    ],
    steps: [
      { title: "Create workspace", desc: "Your dashboard is provisioned instantly." },
      { title: "Add devices", desc: "Trackers, AIS-140 units and fuel sensors auto-register." },
      { title: "Invite team", desc: "Owners, dispatch and drivers get role-based access." },
      { title: "Configure alerts", desc: "Geo-fences, speed limits and SOS recipients in minutes." },
      { title: "Run your fleet", desc: "Live map, alerts and reports — one source of truth." },
    ],
    benefits: [
      { icon: Activity, title: "One Source of Truth", desc: "Replace spreadsheets and WhatsApp updates with live data." },
      { icon: Bell, title: "Catch Issues Early", desc: "Smart alerts surface problems before they escalate." },
      { icon: BarChart3, title: "Decisions on Data", desc: "Trip, fuel and driver reports power every meeting." },
      { icon: KeyRound, title: "Secure by Default", desc: "Role-based access and India-hosted infrastructure." },
    ],
    industries: commonIndustries,
    faqs: [
      { q: "Is the platform included with every device?", a: "Yes — every Fuel Tracks tracker comes bundled with platform access." },
      { q: "Do you offer a mobile app?", a: "Yes — native iOS and Android apps for owners, dispatchers and drivers, free of charge." },
      { q: "Can I add team members with limited access?", a: "Yes — role-based access lets you control exactly what each user can see and do." },
      { q: "Where is my data stored?", a: "All data is hosted on India-based infrastructure with encrypted transport and backups." },
    ],
    testimonials: baseTestimonials,
    related: ["fleet-management-solutions", "asset-tracking-solutions", "vltd-ais-140-4g-device"],
  },
  {
    slug: "fleet-management-solutions",
    sku: "FT-FLEET-MGMT",
    name: "Fleet Management Solutions",
    category: "Software",
    tagline: "End-to-end fleet operations: tracking, fuel, drivers, maintenance and compliance in one place.",
    description:
      "Fuel Tracks Fleet Management Solutions unify every part of your fleet — GPS tracking, fuel monitoring, driver behaviour, trip planning, maintenance schedules and AIS-140 compliance — on a single cloud platform. Built for operators running 10 to 10,000+ vehicles across logistics, transport, school and corporate fleets.",
    highlights: ["Tracking + Fuel + Drivers", "Maintenance Schedules", "AIS-140 Compliant", "Custom Dashboards"],
    image: platformImg,
    images: [platformImg],
    overview: [
      { icon: Truck, title: "What it does", desc: "Runs every aspect of fleet operations — vehicles, fuel, drivers, trips and compliance — on one platform." },
      { icon: TrendingDown, title: "How it helps", desc: "Cuts fuel cost, driver risk and downtime with live data and automation." },
      { icon: BarChart3, title: "Why it matters", desc: "Operational gaps cost more than software — close them with one source of truth." },
      { icon: Users, title: "Who it's for", desc: "Logistics, transport, school bus, fuel tanker and corporate fleet operators." },
    ],
    features: [
      { icon: Map, title: "Live Fleet Map", desc: "Every vehicle, sensor and trip on one always-on map." },
      { icon: Fuel, title: "Fuel Monitoring", desc: "Refill, drain and mileage analytics per vehicle and driver." },
      { icon: Users, title: "Driver Behaviour", desc: "Harsh braking, acceleration and idle time scored automatically." },
      { icon: Wrench, title: "Maintenance Alerts", desc: "Service due, document expiry and inspection reminders." },
      { icon: Shield, title: "Compliance Records", desc: "AIS-140 logs, trip sheets and audit-ready exports." },
      { icon: BarChart3, title: "Custom Dashboards", desc: "Tailor KPIs and reports for owners, ops and finance." },
      { icon: Bell, title: "Smart Alerts", desc: "Email, SMS and push notifications across every role." },
      { icon: KeyRound, title: "Role-Based Access", desc: "Granular permissions for every team member." },
    ],
    specs: [
      { label: "Device Type", value: "Cloud-native Fleet Management SaaS", icon: Cloud },
      { label: "Modules", value: "Tracking, Fuel, Drivers, Maintenance, Compliance", icon: Layers },
      { label: "Connectivity", value: "Web + iOS + Android", icon: Wifi },
      { label: "Device Support", value: "GPS, AIS-140, fuel, temperature, RFID, OBD-II", icon: Cpu },
      { label: "Live Refresh", value: "Sub-10 second updates", icon: Activity },
      { label: "Reporting", value: "Scheduled PDF & CSV reports", icon: BarChart3 },
      { label: "Cloud Platform", value: "India-hosted, 99.9% uptime SLA", icon: Server },
      { label: "Mobile App", value: "iOS 14+ & Android 8+", icon: Smartphone },
      { label: "Dashboard", value: "Browser-based, no install", icon: Monitor },
      { label: "Warranty", value: "Continuous updates included", icon: CheckCircle2 },
    ],
    steps: [
      { title: "Onboarding call", desc: "We map your fleet, processes and KPIs in a 30-min session." },
      { title: "Device provisioning", desc: "Trackers, sensors and AIS-140 devices configured for you." },
      { title: "Workspace setup", desc: "Groups, roles, geo-fences and alerts pre-loaded." },
      { title: "Team training", desc: "Online training for owners, dispatch and drivers." },
      { title: "Go live", desc: "Run your full fleet from one dashboard." },
    ],
    benefits: [
      { icon: DollarSign, title: "Cut Fuel & Overtime", desc: "Most fleets see 10–20% reduction in fuel and idle time." },
      { icon: Shield, title: "Stay Compliant", desc: "AIS-140 logs and audit reports out of the box." },
      { icon: Wrench, title: "Reduce Downtime", desc: "Predictive maintenance schedules keep vehicles on the road." },
      { icon: Users, title: "Better Drivers", desc: "Objective scoring and coaching reports drive behaviour change." },
      { icon: BarChart3, title: "Data-Led Decisions", desc: "Live KPIs replace gut-feel operations." },
    ],
    industries: commonIndustries,
    faqs: [
      { q: "How is this different from basic GPS tracking?", a: "Tracking shows where vehicles are; fleet management runs the whole operation — fuel, drivers, maintenance, compliance and reports together." },
      { q: "Can I bring my existing devices?", a: "Most major OEM trackers are supported. Speak to our team for a compatibility check." },
      { q: "Is training included?", a: "Yes — onboarding, training and a dedicated success manager are included with every plan." },
      { q: "Do you offer API access?", a: "Yes — REST API and webhooks are available for integrations with ERP, TMS or accounting systems." },
    ],
    testimonials: baseTestimonials,
    related: ["gps-tracking-platform", "asset-tracking-solutions", "fuel-sensor"],
  },
  {
    slug: "asset-tracking-solutions",
    sku: "FT-ASSET-TRACK",
    name: "Asset Tracking Solutions",
    category: "Software",
    tagline: "Track high-value assets, equipment, containers and tools across sites in real time.",
    description:
      "Fuel Tracks Asset Tracking Solutions combine long-life IoT trackers with a powerful cloud platform to monitor high-value assets — from construction equipment and gensets to containers, trailers and tools — across multiple sites, in real time. Cut theft, recover stolen assets faster and improve utilisation with one always-on dashboard.",
    highlights: ["Long-Life Trackers", "Geo-Fence Alerts", "Utilisation Reports", "Multi-Site Dashboard"],
    image: platformImg,
    images: [platformImg],
    overview: [
      { icon: Package, title: "What it does", desc: "Tracks the live location, movement and utilisation of every asset across every site." },
      { icon: Shield, title: "How it helps", desc: "Prevents theft, speeds recovery and surfaces idle assets ready to redeploy." },
      { icon: BarChart3, title: "Why it matters", desc: "Lost or under-used assets quietly destroy margins — visibility fixes both." },
      { icon: HardHat, title: "Who it's for", desc: "Construction, rental, logistics, manufacturing and infrastructure operators." },
    ],
    features: [
      { icon: MapPin, title: "Real-Time Asset Location", desc: "Live position of every asset across every site." },
      { icon: Shield, title: "Geo-Fence Alerts", desc: "Instant alerts when an asset leaves an authorised zone." },
      { icon: Bell, title: "Movement & Theft Alerts", desc: "Get notified the moment a stationary asset starts moving." },
      { icon: BarChart3, title: "Utilisation Reports", desc: "See which assets are productive and which are idle." },
      { icon: Battery, title: "Long-Life Battery", desc: "Multi-year battery options for unpowered assets." },
      { icon: Smartphone, title: "Mobile App", desc: "Find any asset from your phone, anywhere." },
    ],
    specs: [
      { label: "Device Type", value: "Asset Tracking SaaS + IoT trackers", icon: Cloud },
      { label: "Tracker Options", value: "Wired, battery-powered, magnetic mount", icon: Cpu },
      { label: "Battery Life", value: "Up to 5 years (battery models)", icon: Battery },
      { label: "Connectivity", value: "4G LTE / 2G / LoRa options", icon: Wifi },
      { label: "GPS Accuracy", value: "≤ 5 m", icon: MapPin },
      { label: "Multi-Site Support", value: "Unlimited sites and geo-zones", icon: Map },
      { label: "Reporting", value: "Utilisation, movement, theft & audit reports", icon: BarChart3 },
      { label: "Mobile App", value: "iOS 14+ & Android 8+", icon: Smartphone },
      { label: "Cloud Platform", value: "India-hosted, encrypted", icon: Server },
      { label: "Warranty", value: "1 year hardware + continuous software updates", icon: CheckCircle2 },
    ],
    steps: [
      { title: "Asset audit", desc: "We map your asset list, sites and tracking goals." },
      { title: "Tracker selection", desc: "Pick the right hardware per asset — wired, battery or magnetic." },
      { title: "Geo-zone setup", desc: "Authorised zones, depots and project sites configured." },
      { title: "Go live", desc: "Every asset visible on one multi-site dashboard." },
    ],
    benefits: [
      { icon: Shield, title: "Stop Asset Theft", desc: "Movement and geo-fence alerts catch theft attempts instantly." },
      { icon: Activity, title: "Faster Recovery", desc: "Live location speeds recovery when an asset is taken." },
      { icon: BarChart3, title: "Better Utilisation", desc: "Spot idle assets ready to be redeployed or rented out." },
      { icon: DollarSign, title: "Protect Capital", desc: "Avoid buying replacements for assets you can already find." },
    ],
    industries: [
      { name: "Construction", icon: HardHat },
      { name: "Mining", icon: Mountain },
      { name: "Logistics", icon: Truck },
      { name: "Rental & Leasing", icon: Package },
      { name: "Manufacturing", icon: Layers },
      { name: "Infrastructure", icon: Server },
    ],
    faqs: [
      { q: "What kinds of assets can I track?", a: "Anything from construction equipment, generators and containers to trailers, tools and high-value packages." },
      { q: "Do I need power for the tracker?", a: "No — we offer battery-powered trackers with multi-year life for unpowered assets." },
      { q: "Can I manage assets across multiple sites?", a: "Yes — unlimited sites, geo-zones and groups on one dashboard." },
      { q: "Is the mobile app included?", a: "Yes — free native iOS and Android apps are included." },
    ],
    testimonials: baseTestimonials,
    related: ["fleet-management-solutions", "gps-tracking-platform", "v5-basic-gps-device"],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelated(slugs: string[]): Product[] {
  return slugs.map(getProduct).filter((p): p is Product => Boolean(p));
}
