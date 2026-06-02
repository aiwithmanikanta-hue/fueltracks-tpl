import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, description, align = "center" }: Props) {
  return (
    <Reveal className={align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium tracking-wider uppercase text-primary ${align === "center" ? "" : ""}`}>
          <span className="size-1.5 rounded-full bg-primary animate-pulse-dot" />
          {eyebrow}
        </div>
      )}
      <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gradient">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </Reveal>
  );
}
