import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  glow?: boolean;
};

export function GlassCard({ children, className, glow, ...rest }: Props) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 transition-all duration-500",
        "hover:border-primary/40 hover:-translate-y-1",
        glow && "hover:shadow-glow",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
