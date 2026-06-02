import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DashboardMock } from "@/components/ui/DashboardMock";

export function DashboardPreview() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Live dashboard"
          title="See your fleet in real time."
          description="A clean, enterprise-grade interface designed for daily use."
        />

        <Reveal className="mt-14">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <DashboardMock />
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
