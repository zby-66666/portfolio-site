export type Project = {
  title: string;
  type?: string;
  techStack: string[];
  description: string;
  features: string[];
  highlights?: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "创新创业学院学科竞赛管理系统",
    link: "https://github.com/zby-66666/discipline-competition-management",
    type: "毕业设计 / 完整管理系统项目",
    techStack: ["Java", "Spring Boot", "MyBatis-Plus", "MySQL", "Redis", "Vue 3", "Element Plus"],
    description:
      "面向高校竞赛获奖管理场景，系统实现学生申报、教师审核、管理员管理、获奖数据统计、证书文件上传、系统外奖项申报等功能，解决传统竞赛管理中数据分散、审核流程不规范、统计困难等问题。",
    features: [
      "学生注册登录与获奖申报",
      "教师审核与审核意见记录",
      "管理员维护竞赛目录和年度竞赛",
      "文件上传与下载权限控制",
      "按学院、专业、学生维度统计获奖数据",
      "JWT 登录认证与角色权限控制"
    ],
    highlights: [
      "完整业务闭环清晰",
      "权限控制明确",
      "数据库表结构规范",
      "具备测试和文档整理经验"
    ]
  },
  {
    title: "Next.js 个人作品集网站",
    link: "https://github.com/zby-66666/portfolio-site",
    type: "个人展示项目",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    description:
      "基于 Next.js 构建个人作品集网站，用于展示个人介绍、技能栈、项目经历和联系方式。开发过程中借助 AI 工具完成页面结构设计、组件拆分、样式优化、Bug 修复和 README 文档编写。",
    features: [
      "多页面路由",
      "响应式布局",
      "项目卡片展示",
      "技能标签展示",
      "简历下载入口",
      "联系方式展示"
    ]
  },
  {
    title: "基于 RAG 的高校竞赛政策智能 AI 问答系统",
    link: "https://github.com/zby-66666/ai-competition-knowledge-assistant",
    type: "AI 问答能力扩展项目",
    techStack: ["Spring Boot", "LangChain4j", "Ollama", "Qwen3", "bge-m3", "PDFBox", "Apache POI", "Vue3", "Element Plus"],
    description:
      "在原竞赛管理系统中扩展 AI 问答能力，支持竞赛规则文档上传、知识库构建、语义检索、答案生成和来源片段展示。",
    features: [
      "支持 txt、pdf、docx 多格式知识文档上传，使用 PDFBox 和 Apache POI 完成文本解析与知识库重建",
      "使用 bge-m3 生成文本 Embedding，并结合 InMemoryEmbeddingStore 实现规则片段语义检索",
      "通过 Prompt 约束模型基于检索片段回答，并在前端展示来源依据，降低大模型幻觉",
      "实现 AI 助手页面，支持上传、删除、重载知识库和问答联调"
    ],
    highlights: [
      "将 RAG 能力嵌入已有管理系统业务场景",
      "覆盖文档解析、向量检索、提示词约束和前端来源展示",
      "具备 AI 应用落地和接口联调经验"
    ]
  },
  {
    title: "企业级 CRM 客户关系管理系统",
    type: "专业实训项目",
    techStack: ["Spring Boot", "MyBatis", "Redis", "Vue", "ECharts", "MySQL"],
    description:
      "企业后台管理类系统，主要包含客户管理、产品管理、库存管理、数据看板等功能，用于提升企业内部数据维护和业务管理效率。",
    features: [
      "参与客户、产品、库存等基础模块开发，完成部分增删改查接口与前端页面联调",
      "使用 MySQL 进行数据表设计和 SQL 查询编写，完成客户信息、产品信息、库存数据维护",
      "在高频查询场景中引入 Redis 缓存思路，减少重复查询，提高接口响应效率",
      "使用 ECharts 实现数据可视化展示，包括库存状态、产品数据统计等图表内容",
      "参与系统功能测试，对表单提交、数据查询、库存预警等功能进行验证和问题记录"
    ],
    highlights: [
      "贴近企业后台管理真实业务流程",
      "覆盖后端接口、前端联调、缓存思路和数据可视化",
      "具备专业实训中的协作开发和测试记录经验"
    ]
  }
];