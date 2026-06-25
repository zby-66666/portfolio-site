"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于我" },
  { href: "/projects", label: "项目经历" },
  { href: "/skills", label: "技能栈" },
  { href: "/contact", label: "联系方式" }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[#05070d]/88 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex min-h-11 items-center gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-md border border-sky-300/30 bg-sky-300/15 text-sm font-black text-sky-100 transition group-hover:bg-sky-300 group-hover:text-slate-950">
            张
          </span>
          <span>
            <span className="block text-sm font-bold text-white">张博垚</span>
            <span className="block text-xs text-slate-400">AI Assisted Developer</span>
          </span>
        </Link>

        <button
          type="button"
          aria-label={open ? "关闭导航菜单" : "打开导航菜单"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-md border border-line bg-white/[0.04] px-3 py-2 text-sm font-semibold text-white transition hover:border-sky-300/70 hover:bg-sky-300/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 md:hidden"
        >
          菜单
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative inline-flex min-h-11 items-center rounded-md px-4 text-sm font-medium transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 ${
                  active
                    ? "bg-sky-300/12 text-sky-100"
                    : "text-slate-300 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {item.label}
                {active ? (
                  <span className="absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-sky-300" />
                ) : null}
              </Link>
            );
          })}
        </div>
      </nav>

      {open ? (
        <div id="mobile-navigation" className="border-t border-line px-4 pb-4 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-2 pt-3">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`min-h-11 rounded-md px-4 py-3 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 ${
                    active
                      ? "bg-sky-300/12 text-sky-100"
                      : "bg-white/[0.04] text-slate-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}