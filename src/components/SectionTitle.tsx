export function SectionTitle({ overline, title, center }: { overline?: string; title: string; center?: boolean }) {
  return (
    <div className={center ? "mb-10 text-center" : "mb-10"}>
      {overline && (
        <div className={center ? "flex items-center justify-center gap-3" : "flex items-center gap-3"}>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">{overline}</span>
          <span className="h-0.5 w-16 bg-brand" />
        </div>
      )}
      <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-navy md:text-4xl">{title}</h2>
    </div>
  );
}
