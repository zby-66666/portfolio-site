import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "关于我",
  description: "张博垚的教育背景、技术方向、AI 辅助开发流程和自我评价。"
};

const aiWorkflow = [
  {
    title: "需求拆解",
    description: "把业务需求拆成页面、组件、接口、数据结构和交互流程。"
  },
  {
    title: "提示词设计",
    description: "根据开发目标编写清晰提示词，让 AI 生成初版代码。"
  },
  {
    title: "人工校验",
    description: "检查 AI 代码是否符合业务逻辑、项目规范和运行要求。"
  },
  {
    title: "调试优化",
    description: "结合报错信息、控制台日志和接口返回结果修复问题。"
  },
  {
    title: "文档沉淀",
    description: "整理 README、接口说明、操作手册和常见问题。"
  }
];

export default function AboutPage() {
  return (
    <div className="page-shell space-y-12">
      <SectionTitle
        eyebrow="About"
        title="关于我"
        description="计算机科学与技术本科背景，关注 AI 辅助开发、全栈项目落地和技术文档整理。"
      />

      <div className="grid gap-5 lg:grid-cols-[1fr_1.1fr]">
        <section className="bento-card p-6">
          <h2 className="text-xl font-bold text-white">教育背景</h2>
          <div className="mt-5 space-y-4 text-slate-300">
            <p><span className="font-semibold text-white">姓名：</span>张博垚</p>
            <p><span className="font-semibold text-white">学历：</span>本科</p>
            <p><span className="font-semibold text-white">专业：</span>计算机科学与技术</p>
            <p>
              具备 Java、Spring Boot、Vue、MySQL 等项目开发基础，能够围绕实际业务场景进行需求分析、接口设计和页面开发。
            </p>
          </div>
        </section>

        <section className="bento-card p-6">
          <h2 className="text-xl font-bold text-white">技术方向</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              "Java 后端开发",
              "AI 辅助开发工程师",
              "初级全栈开发",
              "软件测试"
            ].map((item) => (
              <div key={item} className="rounded-lg border border-line bg-slate-950/40 p-4 text-sm font-semibold text-sky-100">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-5 text-slate-300">
            当前重点学习 React、Next.js等技术，并把 AI 工具融入代码生成、接口联调、错误定位和文档沉淀流程。
          </p>
        </section>
      </div>

      <section>
        <SectionTitle
          eyebrow="AI Workflow"
          title="我的 AI 辅助开发流程"
          description="把 AI 作为提高效率的工程助手，同时保留人工校验、调试和业务判断。"
        />
        <div className="mt-7 grid gap-4 md:grid-cols-5">
          {aiWorkflow.map((step, index) => (
            <article key={step.title} className="bento-card p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-sky-300/25 bg-sky-300/12 text-sm font-black text-sky-100">
                {index + 1}
              </div>
              <h3 className="mt-4 font-bold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bento-card p-6">
        <h2 className="text-xl font-bold text-white">自我评价</h2>
        <p className="mt-4 leading-8 text-slate-300">
          我具备完整管理系统项目经验，能够理解业务流程并拆分为可实现的功能模块。面对新技术，我习惯通过文档、示例项目和 AI 工具快速建立知识框架，再通过小型实践验证理解。相比只关注代码结果，我也重视 README、接口说明、部署说明和操作手册等文档沉淀，希望在团队中承担稳定、细致、可持续交付的开发工作。
        </p>
      </section>
    </div>
  );
}