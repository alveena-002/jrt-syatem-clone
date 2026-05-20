import { Link } from "@tanstack/react-router";
import { Twitter, Facebook, Instagram, Linkedin, ChevronRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white/90">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <p className="text-sm leading-relaxed">130 Lakeview avenue Paterson 07503, USA</p>
          <p className="mt-4 text-sm"><span className="font-semibold">Phone:</span> +19734319273</p>
          <p className="text-sm"><span className="font-semibold">Email:</span> <span className="text-brand">info@jrtsystem.com</span></p>
          <div className="mt-5 flex gap-3">
            {[Twitter, Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-white/30 transition-colors hover:bg-brand hover:border-brand" aria-label="social">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">Useful Links</h4>
          <ul className="space-y-2 text-sm">
            {[["Home","/"],["About us","/about"],["Services","/services"],["Our Team","/about"],["Privacy policy","/"]].map(([l,h]) => (
              <li key={l}><Link to={h} className="flex items-center gap-1 hover:text-brand"><ChevronRight className="h-3 w-3 text-brand" />{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">Our Services</h4>
          <ul className="space-y-2 text-sm">
            {["Web Design","Web Development","App Development","E-commerce Dev","UI/UX Designing"].map((l) => (
              <li key={l}><Link to="/services" className="flex items-center gap-1 hover:text-brand"><ChevronRight className="h-3 w-3 text-brand" />{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">Our Newsletter</h4>
          <p className="text-sm">Subscribe to our newsletter and receive the latest news about our products and services!</p>
          <form className="mt-4 flex" onSubmit={(e) => e.preventDefault()}>
            <input type="email" className="flex-1 bg-white px-3 py-2 text-sm text-foreground outline-none" />
            <button className="bg-brand px-4 text-sm font-semibold text-brand-foreground hover:opacity-90">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm">
        <p>© Copyright 2026, Powered by Zeno Tech Digital</p>
        <p className="mt-1 text-xs text-white/60">Designed by Tahreem & Alveena</p>
      </div>
    </footer>
  );
}
