import { createFileRoute } from "@tanstack/react-router";
import { Brush, Globe, Megaphone, Code2, Network, Cloud, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — JRT System" },
      { name: "description", content: "Branding, web development, marketing, software, IT consulting and cloud & DevOps services." },
      { property: "og:title", content: "Services — JRT System" },
      { property: "og:description", content: "Branding, web development, marketing, software, IT consulting and cloud & DevOps services." },
    ],
  }),
  component: Services,
});
const groups = [
  { Icon: Brush, title: "Branding & Creative", items: ["Digital Agencies","Graphic Design Companies","Video Production Companies","Public Relations Firms","Branding Agencies","Creative Agencies"] },
  { Icon: Globe, title: "Website Development", items: ["Web Design Companies","UI/UX Design Agencies","Ecommerce Development Companies","Web Development Companies","WordPress Web Design Companies"] },
  { Icon: Megaphone, title: "Marketing", items: ["Affiliate Marketing Companies","Conversion Rate Optimization Services","Media Buying Agencies","Digital Marketing Agencies","SEO Agencies","PPC Agencies"] },
  { Icon: Code2, title: "Software Development", items: ["Wearable Technology Companies","IoT Companies","Software Testing Companies","AI Companies"] },
  { Icon: Network, title: "IT Consulting", items: ["CRM Consultants","ERP Consultants","ECM Consultants","Big Data Analytics Companies","Staff Augmentation Services"] },
  { Icon: Cloud, title: "Cloud & DevOps", items: ["AWS Services","Azure Solutions","Google Cloud Platform","CI/CD Pipelines","Containerization (Docker, Kubernetes)"] },
];
function Services() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-navy md:text-4xl">OUR BEST SERVICES</h1>
          <span className="mx-auto mt-3 block h-0.5 w-20 bg-brand" />
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="flex flex-col rounded-md border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <g.Icon className="h-7 w-7 text-brand" />
                <h3 className="text-xl font-semibold text-navy">{g.title}</h3>
              </div>
              <ul className="flex-1 space-y-2 text-sm">
                {g.items.map((i) => (
                  <li key={i} className="flex items-center gap-2 text-[oklch(0.45_0.15_255)]"><ChevronRight className="h-3 w-3 text-brand" />{i}</li>
                ))}
              </ul>
              <button className="mt-6 self-start rounded bg-brand px-5 py-2 text-xs font-bold uppercase tracking-wide text-brand-foreground hover:opacity-90">View All</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
