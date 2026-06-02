import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  crumbs: { label: string; to?: string }[];
};

export function PageHeader({ title, crumbs }: Props) {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 -z-10 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.nav
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-1 text-xs font-semibold tracking-[0.2em] text-muted-foreground"
        >
          {crumbs.map((c, i) => (
            <span key={c.label} className="flex items-center gap-1">
              {c.to ? (
                <Link to={c.to} className="hover:text-primary transition-colors">{c.label.toUpperCase()}</Link>
              ) : (
                <span className="text-primary">{c.label.toUpperCase()}</span>
              )}
              {i < crumbs.length - 1 && <ChevronRight className="size-3" />}
            </span>
          ))}
        </motion.nav>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-5xl md:text-6xl font-bold text-gradient"
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ transformOrigin: "left" }}
          className="mt-3 h-1 w-24 rounded-full bg-[var(--gradient-primary)]"
        />
      </div>
    </section>
  );
}
