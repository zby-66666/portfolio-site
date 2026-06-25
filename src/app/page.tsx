import { AbilityCard } from "@/components/AbilityCard";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { SkillBadge } from "@/components/SkillBadge";

const techTags = [
  "Java",
  "Spring Boot",
  "MySQL",
  "Vue 3",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "AI Coding",
  "Technical Documentation"
];

const abilities = [
  {
    title: "AI 辅助开发",
    description:
      "能够借助 ChatGPT、Claude、Kimi、DeepSeek 等工具完成代码生成、Bug 排查、代码优化和文档整理。"
  },
  {
    title: "完整项目经验",
    description:
      "完成过管理系统类毕业设计，涉及登录认证、权限控制、数据管理、文件上传、审核流程、统计导出等模块。"
  },
  {
    title: "文档与知识库整理",
    description:
      "能够编写 README、接口说明、部署说明、测试说明、操作手册，并按照模块进行归档沉淀。"
  }
];

export default function Home() {
  return (
    <div className="page-shell space-y-16">
      <Hero />

      <section className="bento-card p-6">
        <SectionTitle
          eyebrow="Tech Focus"
          title="技术标签"
          description="围绕项目落地、前后端协作和 AI Coding 工作流持续积累。"
        />
        <div className="mt-7 flex flex-wrap gap-3">
          {techTags.map((tag) => (
            <SkillBadge key={tag} label={tag} />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="Strengths"
          title="亮点能力"
          description="适合应届开发岗位展示的工程实践、学习能力与文档沉淀能力。"
        />
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {abilities.map((ability, index) => (
            <AbilityCard
              key={ability.title}
              index={index + 1}
              title={ability.title}
              description={ability.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}