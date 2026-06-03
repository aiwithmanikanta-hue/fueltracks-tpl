import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, LogIn, Shield } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT US" },
  { to: "/products", label: "PRODUCTS" },
  { to: "/services", label: "SERVICES" },
  { to: "/contact", label: "CONTACT US" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all bg-transparent">
          <Link to="/" aria-label="Fuel Tracks Technologies — Home" className="flex items-center group">
            <img
              src={logo}
              alt="Fuel Tracks Technologies"
              width={220}
              height={56}
              className={`w-auto transition-all duration-300 ${scrolled ? "h-9" : "h-11"} drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] group-hover:scale-[1.02]`}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const active = path === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`nav-link px-3.5 py-2 text-xs font-semibold tracking-wider transition-colors ${
                    active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                  data-active={active}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <a href="#" className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold tracking-wider glass hover:border-primary/40 transition-colors">
              <LogIn className="size-3.5 text-primary" /> LIVE LOGIN
            </a>
            <a href="#" className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold tracking-wider bg-[var(--gradient-primary)] text-primary-foreground shadow-glow bg-slate-700 hover:bg-slate-800 hover:shadow-glow hover:scale-[1.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] active:brightness-95 transition-[transform,box-shadow,background-color] duration-200 ease-out">
              <Shield className="size-3.5" /> ADMIN LOGIN
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden size-10 grid place-items-center rounded-lg hover:bg-white/5" aria-label="Menu">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-2xl p-3 flex flex-col gap-1 shadow-elegant animate-in fade-in slide-in-from-top-2 duration-300">
            {links.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm font-semibold tracking-wide rounded-lg hover:bg-white/5"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {l.label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-2 mt-2">
              <a href="#" className="text-center px-4 py-3 text-xs font-bold tracking-wider rounded-xl glass">LIVE LOGIN</a>
              <a href="#" className="text-center px-4 py-3 text-xs font-bold tracking-wider rounded-xl bg-[var(--gradient-primary)] text-primary-foreground">ADMIN LOGIN</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
