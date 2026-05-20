import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { Menu, X, ChevronDown } from "lucide-react";

const nav: { to: "/" | "/about" | "/services" | "/contact"; label: string; hasDropdown?: boolean }[] = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT" },
  { to: "/services", label: "SERVICES", hasDropdown: true },
  { to: "/contact", label: "CONTACT" },
];
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-navy text-navy-foreground shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="JRT System" width={120} height={50} className="h-12 w-auto" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex items-center gap-1 text-sm font-semibold tracking-wide transition-colors hover:text-brand"
              activeProps={{ className: "text-brand border-b-2 border-brand pb-1" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="h-3 w-3" />}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded border border-white/80 px-5 py-2 text-sm font-semibold tracking-wide transition-colors hover:bg-brand hover:border-brand"
          >
            GET STARTED
          </Link>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 px-6 py-4 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block py-2 text-sm font-semibold hover:text-brand"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
