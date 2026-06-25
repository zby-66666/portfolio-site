import Link from "next/link";

const profileStats = [
  { label: "主项目", value: "学科竞赛管理系统" },
  { label: "当前方向", value: "AI Coding" },
  { label: "交付习惯", value: "文档沉淀" }
];

const workflow = ["需求拆解", "AI 生成", "人工校验", "调试优化", "文档归档"];

export function Hero() {
  return (
    <section className="grid gap-8 py-8 lg:grid-cols-[1.06fr_0.94fr] lg:items-center lg:py-14">
      <div>
        <div className="inline-flex items-center gap-2 rounded-md border border-sky-300/25 bg-sky-300/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-100">
          AI Assisted Developer Portfolio
        </div>
        <h1 className="text-balance mt-6 text-4xl font-black tracking-normal text-white sm:text-5xl lg:text-6xl">
          你好，我是张博垚
        </h1>
        <p className="mt-5 max-w-2xl text-xl leading-9 text-sky-100">
          计算机科学与技术本科生，关注 AI 辅助开发、全栈项目落地与技术文档沉淀。
        </p>
        <p className="mt-5 max-w-3xl leading-8 text-slate-300">
          我具备 Java、Spring Boot、Vue、MySQL 等项目开发基础，做过完整的高校竞赛管理系统。当前重点学习 React、Next.js 等技术，并熟练使用 ChatGPT、Claude、Kimi、DeepSeek 等 AI 工具辅助完成需求拆解、代码生成、Bug 排查、接口联调、文档编写与代码优化。
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/projects" className="primary-button">
            查看项目
          </Link>
          <Link href="/contact" className="secondary-button">
            联系我
          </Link>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {profileStats.map((item) => (
            <div key={item.label} className="rounded-lg border border-line bg-slate-950/45 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {item.label}
              </p>
              <p className="mt-2 text-sm font-bold text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        <div className="bento-card overflow-hidden p-5">
          <div className="flex items-center justify-between border-b border-line pb-4">
            <span className="text-sm font-semibold text-white">candidate.profile</span>
            <span className="rounded-md border border-teal-300/25 bg-teal-300/10 px-2.5 py-1 text-xs font-semibold text-teal-100">
              Available
            </span>
          </div>
          <pre className="mt-5 overflow-x-auto text-sm leading-7 text-slate-200">
            <code>{`const candidate = {
  name: "张博垚",
  major: "计算机科学与技术",
  stack: ["Java", "Spring Boot", "Vue", "Next.js"],
  focus: ["AI Coding", "Full Stack", "Docs"],
  value: "快速学习，稳定交付，重视文档"
};`}</code>
          </pre>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          <div className="bento-card p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Workflow</p>
            <div className="mt-4 space-y-3">
              {workflow.map((item, index) => (
                <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-sky-300/12 font-bold text-sky-100">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bento-card p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">Role Match</p>
            <div className="mt-5 space-y-4">
              {[
                ["AI 辅助开发", "代码生成 / Bug 排查 / 文档"],
                ["初级全栈", "前后端协作 / 接口联调"],
                ["Java 后端", "Spring Boot / MySQL / JWT"]
              ].map(([title, detail]) => (
                <div key={title}>
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}