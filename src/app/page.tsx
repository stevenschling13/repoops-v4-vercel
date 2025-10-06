import Link from "next/link";

const resources = [
  {
    href: "https://nextjs.org/docs",
    title: "Next.js Docs",
    description: "Learn about features like the App Router, Server Actions, and more.",
  },
  {
    href: "https://vercel.com/docs",
    title: "Vercel Guides",
    description: "Ship confidently with deployment, monitoring, and storage playbooks.",
  },
  {
    href: "https://tailwindcss.com/docs",
    title: "Tailwind CSS",
    description: "Compose beautiful interfaces with utility-first design primitives.",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-16 px-6 py-24">
      <header className="flex flex-col gap-4 text-balance">
        <p className="text-sm uppercase tracking-[0.4em] text-zinc-400">RepoOps</p>
        <h1 className="text-4xl font-semibold sm:text-5xl">
          Spin up a production-ready Next.js workspace in minutes.
        </h1>
        <p className="max-w-2xl text-lg text-zinc-400">
          This template pairs the Next.js App Router, Tailwind CSS styling, and curated linting
          defaults so you can focus on building features instead of configuration chores.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2">
        {resources.map((resource) => (
          <Link
            key={resource.href}
            href={resource.href}
            className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:border-zinc-500 hover:bg-zinc-900/80"
          >
            <h2 className="text-xl font-semibold text-zinc-100 group-hover:text-white">
              {resource.title}
            </h2>
            <p className="mt-2 text-sm text-zinc-400 group-hover:text-zinc-300">
              {resource.description}
            </p>
          </Link>
        ))}
      </section>

      <footer className="text-sm text-zinc-500">
        Ready to deploy? Run <code className="rounded bg-zinc-800 px-2 py-1">npm run build</code> and
        ship to Vercel.
      </footer>
    </main>
  );
}
