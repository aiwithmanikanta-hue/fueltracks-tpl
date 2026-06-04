import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";

import heroTruck from "@/assets/hero-bg.png";
import videoTracks from "@/assets/video-tracks.mp4";

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 -z-20 bg-white" />
      <img
        src={heroTruck}
        alt=""
        aria-hidden
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-10 w-full h-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/40 via-white/30 to-background/80" />

      
      <div className="absolute inset-0 -z-10 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs"
            >
              <span>🚛</span>
              <span className="text-muted-foreground tracking-wider font-medium">GPS · FUEL · RFID SOLUTIONS</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.98] text-gradient"
            >
              Fuel Tracks Technologies<br /><span className="text-gradient-brand">Smart GPS & Fuel Monitoring</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              Fuel Monitoring Now Online. Track vehicles, monitor fuel and manage your entire fleet in real-time — built for India's toughest conditions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link to="/contact" className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-[#0284C7] hover:shadow-glow hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] active:brightness-95 transition-[transform,box-shadow,background-color] duration-200 ease-out">
                Contact Us <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a href="#features" className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-semibold hover:border-primary/40 transition-colors">
                <PlayCircle className="size-4 text-primary" /> Watch Demo
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl glass-strong rounded-2xl p-5 shadow-elegant"
            >
              {[
                { v: "100%", l: "GPS Tracking" },
                { v: "99.9%", l: "Fuel Accuracy" },
                { v: "100%", l: "Guaranteed" },
                { v: "24/7", l: "Support" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="text-2xl font-bold text-gradient-brand font-mono">{s.v}</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5 tracking-wider uppercase">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-elegant glass-strong">
              <video
                src={videoTracks}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
