export function Footer() {
  return (
    <footer className="border-t border-line bg-[#05070d]/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-semibold text-white">张博垚</p>
          <p>AI Assisted Developer Portfolio</p>
        </div>
        <div className="space-y-1 md:text-right">
          <a
            className="block rounded-sm hover:text-sky-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
            href="https://github.com/zby-66666/portfolio-site"
            target="_blank"
            rel="noreferrer"
          >
            github.com/zby-66666/portfolio-site
          </a>
          <p>Copyright © {new Date().getFullYear()} 张博垚. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}