const contactItems = [
  { label: "姓名", value: "张博垚" },
  {
    label: "求职方向",
    value: "AI 辅助开发工程师 / 初级全栈开发 / Java 后端开发 / 前端开发助理 / 软件测试"
  },
  { label: "状态", value: "正在寻找实习 / 校招 / 初级开发岗位机会" },
  { label: "联系说明", value: "为保护隐私，邮箱和手机号不在公开网站展示，可通过简历或招聘平台联系。" }
];

export function ContactCard() {
  return (
    <section className="bento-card max-w-4xl p-6 sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-lg border border-line bg-slate-950/45 p-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-sky-300/30 bg-sky-300/15 text-xl font-black text-sky-100">
            张
          </div>
          <h2 className="mt-5 text-2xl font-bold text-white">张博垚</h2>
          <p className="mt-2 text-slate-300">AI Assisted Developer Portfolio</p>
          <a
            href="https://github.com/zby-66666"
            target="_blank"
            rel="noreferrer"
            className="primary-button mt-6 w-full"
          >
            查看 GitHub
          </a>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {contactItems.map((item) => (
            <div key={item.label} className="grid gap-2 py-4 sm:grid-cols-[7rem_1fr]">
              <span className="text-sm font-semibold text-teal-200">{item.label}</span>
              <span className="text-slate-300">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}