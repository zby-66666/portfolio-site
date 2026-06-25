# portfolio-site

张博垚的个人作品集网站，用于投递 AI 辅助开发工程师、初级全栈开发、Java 后端开发、前端开发助理等岗位。网站重点展示计算机科学与技术专业背景、完整管理系统项目经验、AI 辅助开发能力、技术文档整理能力和快速学习能力。

## 技术栈

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- ESLint
- 响应式布局

## 页面功能

- 首页 `/`：Hero 介绍、技术标签、亮点能力、项目与技能入口
- 关于我 `/about`：教育背景、技术方向、AI 辅助开发流程、自我评价
- 项目经历 `/projects`：竞赛管理系统、个人作品集、RAG 智能问答系统、CRM 客户关系管理系统
- 技能栈 `/skills`：AI 工具、前端开发、后端开发、工程与文档能力
- 联系方式 `/contact`：姓名、求职方向、求职状态和公开联系说明

## 项目结构

```text
portfolio-site
├─ public
│  └─ .gitkeep
├─ src
│  ├─ app
│  │  ├─ about/page.tsx
│  │  ├─ contact/page.tsx
│  │  ├─ projects/page.tsx
│  │  ├─ skills/page.tsx
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ components
│  │  ├─ AbilityCard.tsx
│  │  ├─ ContactCard.tsx
│  │  ├─ Footer.tsx
│  │  ├─ Hero.tsx
│  │  ├─ Navbar.tsx
│  │  ├─ ProjectCard.tsx
│  │  ├─ SectionTitle.tsx
│  │  └─ SkillBadge.tsx
│  └─ data
│     ├─ projects.ts
│     └─ skills.ts
├─ eslint.config.mjs
├─ next.config.ts
├─ package.json
├─ postcss.config.js
├─ tailwind.config.ts
└─ tsconfig.json
```

## 本地运行方式

安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run dev
```

启动后访问：

```text
http://localhost:3000
```

## 构建命令

```bash
npm run build
```

## 代码检查

```bash
npm run lint
```

## AI 辅助开发说明

本项目在开发过程中可结合 ChatGPT、Claude、Kimi、DeepSeek、Codex 等 AI 工具完成页面结构设计、组件拆分、样式优化、Bug 排查、代码注释和技术文档整理。AI 输出代码需经过人工校验，包括运行测试、代码规范检查、业务逻辑确认和页面效果检查。

## 隐私与公开信息说明

公开仓库不提交简历 PDF、手机号、私人邮箱、环境变量、API Key 或任何密钥文件。若后续需要开放简历下载，请先确认 PDF 已脱敏，再放入 `public/resume.pdf` 并提交。

## 后续优化方向

- 为项目卡片补充 GitHub 仓库、在线预览地址或项目截图。
- 根据实际求职岗位调整首页重点，例如更突出 Java 后端、Next.js 前端或 AI Coding 能力。
- 增加真实项目部署说明、接口文档链接和测试说明。
- 接入 Vercel、Netlify 或自有服务器完成线上部署。