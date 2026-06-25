import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "张博垚 | AI Assisted Developer Portfolio",
    template: "%s | 张博垚"
  },
  description:
    "张博垚的个人作品集网站，展示计算机科学与技术背景、AI 辅助开发能力、全栈项目经验和技术文档整理能力。",
  keywords: [
    "张博垚",
    "AI 辅助开发",
    "Next.js",
    "React",
    "TypeScript",
    "Java",
    "Spring Boot",
    "个人作品集"
  ],
  authors: [{ name: "张博垚" }],
  creator: "张博垚",
  openGraph: {
    title: "张博垚 | AI Assisted Developer Portfolio",
    description:
      "面向 AI 辅助开发、初级全栈开发、Java 后端开发、前端开发助理和软件测试岗位的个人作品集。",
    type: "website",
    locale: "zh_CN"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <a
          href="#main-content"
          className="sr-only z-[100] rounded-md bg-sky-300 px-4 py-3 text-sm font-semibold text-slate-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          跳到主要内容
        </a>
        <Navbar />
        <main id="main-content" className="min-h-screen" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}