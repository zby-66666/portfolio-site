import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "项目经历",
  description: "张博垚的项目经历，包括高校竞赛管理系统、个人作品集、RAG 智能问答系统和 CRM 客户关系管理系统。"
};

export default function ProjectsPage() {
  return (
    <div className="page-shell">
      <SectionTitle
        eyebrow="Projects"
        title="项目经历"
        description="以完整管理系统项目为核心，同时展示 Next.js、AI项目、实训项目等学习实践项目。"
      />
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}