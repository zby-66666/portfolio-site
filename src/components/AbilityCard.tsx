type AbilityCardProps = {
  index: number;
  title: string;
  description: string;
};

export function AbilityCard({ index, title, description }: AbilityCardProps) {
  return (
    <article className="bento-card p-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-md border border-sky-300/25 bg-sky-300/12 text-sm font-black text-sky-100">
          0{index}
        </div>
        <span className="h-px flex-1 bg-line" />
      </div>
      <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
      <p className="mt-3 leading-7 text-slate-300">{description}</p>
    </article>
  );
}