type SkillBadgeProps = {
  label: string;
};

export function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="inline-flex min-h-9 items-center rounded-md border border-sky-300/20 bg-sky-300/10 px-3 py-1.5 text-sm font-medium text-sky-100">
      {label}
    </span>
  );
}