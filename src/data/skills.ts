export type SkillGroup = {
  title: string;
  description?: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI 工具",
    description:
      "能够使用 AI 工具辅助完成需求拆解、代码生成、Bug 排查、接口联调、代码重构、注释补充和文档编写。",
    skills: ["ChatGPT", "Claude", "Kimi", "DeepSeek", "Codex", "Cursor"]
  },
  {
    title: "前端开发",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Vue 3",
      "React",
      "Next.js",
      "Element Plus",
      "Tailwind CSS"
    ]
  },
  {
    title: "后端开发",
    skills: ["Java", "Spring Boot", "MyBatis-Plus", "MySQL", "Redis", "JWT", "RESTful API"]
  },
  {
    title: "工程与文档",
    skills: ["Git", "README 编写", "接口文档", "部署说明", "测试用例", "操作手册", "知识库整理"]
  }
];