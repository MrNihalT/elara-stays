export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8B6F1F]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-[#1F2937] md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-[#5F6B7A]">{description}</p> : null}
    </div>
  );
}
