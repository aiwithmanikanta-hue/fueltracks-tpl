import {
  Activity, Fuel, MapPin, Bell, Shield, Smartphone, Cloud, Gauge,
  Truck, Bus, HardHat, Mountain, Package, Droplet, Cpu, Monitor,
  Wifi, Battery, Wrench, CheckCircle2, TrendingDown, DollarSign,
  Route, Users, Map, Zap,
  type LucideIcon,
} from "lucide-react";
import sensorImg from "@/assets/products/ft-cfs-1000.png";
import softwareImg from "@/assets/products/ft-cloud-suite.png";
import gpsImg1 from "@/assets/gps-tracker-main.jpg.asset.json";
import gpsImg2 from "@/assets/gps-device-2.jpg.asset.json";


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

export const products: Product[] = [
  {
    slug: "gps-tracking-device",
    sku: "FT-GPS-Pro",
    name: "GPS Tracking Device",
    tagline: "Track Smarter. Drive Safer. Manage Better.",
    description:
      "The GPS Tracking Device is a reliable and intelligent vehicle tracking solution designed to provide real-time location monitoring, route tracking, security alerts, and complete fleet management capabilities. Whether you manage logistics, school buses, commercial vehicles, construction equipment, or personal vehicles, this device gives complete visibility and control through a powerful web and mobile platform.",
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
      { label: "Device Type", value: "GPS Tracking Device", icon: Cpu },
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
      { q: "What is a GPS Tracking Device?", a: "A compact hardware unit installed in your vehicle that streams real-time location, speed and engine telemetry to a secure cloud platform you can access from anywhere." },
      { q: "How accurate is the tracking?", a: "High-precision multi-constellation GNSS delivers metre-level accuracy with a sub-10-second refresh rate on the live map." },
      { q: "Can I track multiple vehicles?", a: "Yes — the same dashboard scales from a single vehicle to thousands, with grouping, filters and role-based access." },
      { q: "Is mobile tracking available?", a: "Yes — free native iOS and Android apps are included for owners, dispatchers and drivers." },
      { q: "Does it work across India?", a: "Yes — pan-India coverage with multi-network SIM support and cloud hosting inside India." },
      { q: "How long does installation take?", a: "Professional installation by our certified technicians typically completes in under 30 minutes per vehicle." },
    ],
    testimonials: baseTestimonials,
    related: ["fuel-sensor", "fleet-software"],
  },
  {
    slug: "fuel-sensor",
    sku: "FT-CFS-1000",
    name: "Capacitive Fuel Sensor",
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
    related: ["gps-tracking-device", "fleet-software"],
  },
  {
    slug: "fleet-software",
    sku: "FT-Cloud Suite",
    name: "Fleet Management Software",
    tagline: "The dashboard your operations team will actually use.",
    description:
      "A modern web and mobile platform that ties your GPS devices and fuel sensors together. Live map, fuel analytics, geo-fences, driver scoring and beautiful reports — everything one team needs to run a fleet.",
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
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelated(slugs: string[]): Product[] {
  return slugs.map(getProduct).filter((p): p is Product => Boolean(p));
}
