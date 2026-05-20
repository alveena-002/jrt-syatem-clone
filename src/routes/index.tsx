import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionTitle } from "@/components/SectionTitle";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import digital from "@/assets/digital-futures.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceApp from "@/assets/service-app.jpg";
import serviceEcom from "@/assets/service-ecom.jpg";
import { Check, Play, Activity, Radio, ShoppingCart, Briefcase, CheckCircle2, FileText, Binoculars, Lightbulb, Bot } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JRT System — Empowering Your Digital Journey" },
      { name: "description", content: "Expert web design, development, eCommerce and custom app solutions tailored to your business." },
      { property: "og:title", content: "JRT System — Empowering Your Digital Journey" },
      { property: "og:description", content: "Expert web design, development, eCommerce and custom app solutions." },
    ],
  }),
  component: Home,
});
const reasons = [
  "Expert Web Design & Development",
  "E-Commerce & CMS Solutions",
  "Web Maintenance & Support",
  "Mobile App Development",
  "Client-Centric Approach",
  "Future-Ready Technology",
  "Provide Deployment Services",
];
const stats = [
  { n: "150+", l: "Happy Clients" },
  { n: "200+", l: "Projects" },
  { n: "1000+", l: "Hours Of Support" },
  { n: "300+", l: "Hard Workers" },
];

const featured = [
  { img: serviceWeb, title: "Web Development", Icon: Activity, desc: "Our services are well-known for their effectiveness, and we are fully capable of creating high-performance web pages that deliver outstanding results." },
  { img: serviceApp, title: "App Development", Icon: Radio, desc: "We specialize in crafting innovative, user-friendly mobile applications that drive business growth and enhance user engagement." },
  { img: serviceEcom, title: "E-commerce Dev", Icon: ShoppingCart, desc: "We specialize in building high-performance e-commerce platforms that boost sales and enhance customer experiences." },
];

const checkServices = [
  { Icon: Briefcase, title: "Web Development", desc: "We serve our clients with the best web development services, ensuring high performance and security." },
  { Icon: CheckCircle2, title: "App Development", desc: "We create user-friendly mobile applications that enhance user experience and engagement." },
  { Icon: FileText, title: "E-commerce Development", desc: "We provide comprehensive e-commerce solutions to help businesses thrive online." },
  { Icon: Binoculars, title: "Website Maintenance", desc: "We offer website maintenance services to keep your site running smoothly, securely, and also enhance its speed and more." },
  { Icon: Lightbulb, title: "UI/UX Designing", desc: "Our UI/UX design services focus on creating intuitive and engaging interfaces for your applications, with an optimized and advanced look." },
  { Icon: Bot, title: "Web AI Model Integration", desc: "We integrate AI models into web applications to enhance functionality and user experience." },
];
function Home() {
  return (
    <div>
      {}
      <section className="relative isolate min-h-[600px] overflow-hidden">
        <img src={hero} alt="" width={1920} height={1080} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-navy/75" />
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-6 py-32 text-center text-white">
          <h1 className="text-4xl font-extrabold uppercase leading-tight md:text-6xl">Empowering Your Digital Journey.</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">We create digital solutions. Let us help you build and grow your online presence.</p>
          <Link to="/contact" className="mt-8 rounded bg-brand px-7 py-3 text-sm font-bold uppercase tracking-wide text-brand-foreground shadow-lg transition-transform hover:scale-105">Get Started</Link>
        </div>
      </section>
      {}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold leading-snug text-navy md:text-3xl">From imagination to reality – JRT System Powers Your Digital Success!</h2>
            <img src={about} alt="JRT System workspace" width={1200} height={900} loading="lazy" className="mt-6 w-full rounded-md shadow-md" />
            <p className="mt-6 text-justify text-sm leading-relaxed text-muted-foreground">
              At JRT System, we specialize in crafting powerful digital experiences through expert web design, development (WordPress, Shopify, eCommerce), and custom app development. Our team ensures seamless, high-performance websites and mobile applications tailored to your business needs. From initial design to ongoing web maintenance we provide end-to-end solutions that drive engagement, growth, and efficiency. Partner with us to transform your vision into a dynamic, user-friendly digital presence.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-navy md:text-3xl">Why Choose JRT System?</h2>
            <ul className="mt-6 space-y-3">
              {reasons.map((r) => (
                <li key={r} className="flex items-center gap-3 text-sm">
                  <Check className="h-5 w-5 flex-shrink-0 text-brand" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <div className="relative mt-8 overflow-hidden rounded-md shadow-md">
              <img src={digital} alt="We build digital futures" width={1200} height={900} loading="lazy" className="w-full" />
              <button className="absolute inset-0 grid place-items-center" aria-label="Play video">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-brand text-white shadow-lg transition-transform hover:scale-110">
                  <Play className="h-7 w-7 fill-white" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="bg-soft py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="flex items-center gap-4 rounded-md bg-white p-6 shadow-sm">
              <div className="grid h-12 w-12 place-items-center rounded border-2 border-brand/60 text-brand">★</div>
              <div>
                <div className="text-3xl font-extrabold text-navy">{s.n}</div>
                <div className="text-sm text-brand">{s.l}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle overline="Services" title="Featured Services" />
          <div className="grid gap-8 md:grid-cols-3">
            {featured.map((s) => (
              <div key={s.title} className="group">
                <div className="overflow-hidden rounded-t-md">
                  <img src={s.img} alt={s.title} width={900} height={700} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="relative mx-4 -mt-12 rounded-md bg-white p-6 pt-10 shadow-lg">
                  <div className="absolute -top-7 left-1/2 grid h-14 w-14 -translate-x-1/2 place-items-center rounded-full bg-brand text-white shadow-md">
                    <s.Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-center text-lg font-semibold text-[oklch(0.55_0.22_255)]">{s.title}</h3>
                  <p className="mt-3 text-justify text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {}
      <section className="bg-soft py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle overline="Services" title="Check Our Services" />
          <div className="grid gap-6 md:grid-cols-2">
            {checkServices.map((s) => (
              <div key={s.title} className="flex gap-4 rounded-md bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <s.Icon className="h-10 w-10 flex-shrink-0 text-brand" />
                <div>
                  <h3 className="text-lg font-semibold text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
