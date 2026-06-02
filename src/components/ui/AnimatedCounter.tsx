import { animate, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
};

export function AnimatedCounter({ to, duration = 2, suffix = "", prefix = "", decimals = 0 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => `${prefix}${v.toFixed(decimals)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration, ease: [0.22, 1, 0.36, 1] });
    const unsub = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = v;
    });
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, to, duration, mv, rounded]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}
