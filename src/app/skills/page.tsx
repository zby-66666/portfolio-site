import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";
import { SkillBadge } from "@/components/SkillBadge";
import { skillGroups } from "@/data/skills";

export const metadata: Metadata = {
  title: "技能栈",
  description: "张博垚的 AI 工具、前端开发、后端开发、工程与文档技能栈。"
};

export default function SkillsPage() {
  return (
    <div className="page-shell">
      <SectionTitle
        eyebrow="Skills"
        title="技能栈"
        description="按岗位相关能力分类展示，覆盖 AI 工具、前端、后端和工程文档。"
      />
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {skillGroups.map((group, index) => (
          <section key={group.title} className={`bento-card p-6 ${index === 0 ? "lg:col-span-2" : ""}`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-sky-300">0{index + 1}</p>
                <h2 className="mt-2 text-xl font-bold text-white">{group.title}</h2>
              </div>
              <span className="mt-3 h-px flex-1 bg-line" />
            </div>
            {group.description ? (
              <p className="mt-4 max-w-4xl leading-7 text-slate-300">
                {group.description}
              </p>
            ) : null}
            <div className="mt-5 flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <SkillBadge key={skill} label={skill} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}