import { createFileRoute } from "@tanstack/react-router";
import { SectionTitle } from "@/components/SectionTitle";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — JRT System" },
      { name: "description", content: "Get in touch with JRT System. We'd be glad to hear from you." },
      { property: "og:title", content: "Contact — JRT System" },
      { property: "og:description", content: "Get in touch with JRT System. We'd be glad to hear from you." },
    ],
  }),
  component: Contact,
});
function Contact(){
  const [sent, setSent] = useState(false);
  return (
     <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
         <SectionTitle overline="Contact" title="We will be very glad to hear from you" />
         <div className="grid gap-8 lg:grid-cols-2">
           <div className="space-y-6">
             <Card Icon={MapPin} title="Address" text="130 Lakeview avenue Paterson 07503, USA" />
             <div className="grid gap-6 sm:grid-cols-2">
               <Card Icon={Phone} title="Call Us" text="+19734319273" />
               <Card Icon={Mail} title="Email Us" text="jrtsystemofficial@gmail.com" />
             </div>
           </div>
        <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="space-y-4 rounded-md bg-white p-8 shadow-md"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" type="email" />
              <Input placeholder="Your Phone" />
              <Input placeholder="Subject" />
            </div>
            <textarea placeholder="Message" rows={5} className="w-full rounded border border-border bg-white px-4 py-3 text-sm outline-none focus:border-brand" />
            <button type="submit" className="rounded bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground hover:opacity-90">
              {sent ? "Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
function Card({ Icon, title, text }: { Icon: typeof MapPin; title: string; text: string }) {
  return (
    <div className="rounded-md bg-white p-8 text-center shadow-sm">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand/15 text-brand">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 font-semibold text-navy">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{text}</p>
    </div>
  );
}
function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className="rounded border border-border bg-white px-4 py-3 text-sm outline-none focus:border-brand" />;
}
