import { createFileRoute } from "@tanstack/react-router";
import { SectionTitle } from "@/components/SectionTitle";
import about from "@/assets/about.jpg";
import { Check } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — JRT System" },
      { name: "description", content: "Learn about JRT System and our mission to power your digital success." },
      { property: "og:title", content: "About — JRT System" },
      { property: "og:description", content: "Learn about JRT System and our mission to power your digital success." },
    ],
  }),
  component: About,
});

function About(){
  return(
     <div>
        <section className="bg-navy py-20 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="text-4xl font-extrabold uppercase">About Us</h1>
           <p className="mt-3 text-white/80">Empowering your digital journey since day one.</p>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <img src={about} alt="JRT System team" width={1200} height={900} loading="lazy" className="w-full rounded-md shadow-md" />
          <div>
            <SectionTitle overline="About" title="Who We Are" />
            <p className="text-sm leading-relaxed text-muted-foreground">
               JRT System is a full-service digital agency crafting powerful web and mobile experiences for ambitious brands worldwide. We blend strategy, design and engineering to deliver products that actually move the needle.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {["10+ years of combined experience","100% client satisfaction guarantee","Agile delivery and transparent communication","Future-ready tech stack"].map((r) => (
                <li key={r} className="flex items-center gap-3"><Check className="h-5 w-5 text-brand" />{r}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
