type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-balance mt-3 text-3xl font-bold tracking-normal text-white sm:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 leading-8 text-slate-300">{description}</p>
      ) : null}
    </div>
  );
}