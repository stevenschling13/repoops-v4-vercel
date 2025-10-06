import Link from "next/link";

const resources = [
  {
    href: "https://nextjs.org/docs",
    title: "Next.js Docs",
    description:
      "Explore App Router patterns, Server Actions, streaming, and platform primitives to level up delivery.",
  },
  {
    href: "https://vercel.com/docs",
    title: "Vercel Guides",
    description:
      "Review deployment, observability, and storage guides tuned for the Vercel platform.",
  },
  {
    href: "https://tailwindcss.com/docs",
    title: "Tailwind CSS",
    description:
      "Build polished experiences quickly with utility-first design tokens and ready-made patterns.",
  },
] as const;

const rolloutChecklist = [
  "Create a feature branch and push to GitHub.",
  "Open a pull request to trigger CI (lint + build).",
  "Merge to main to deploy automatically with Vercel.",
] as const;

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-16 px-6 py-24">
      <header className="flex flex-col gap-4 text-balance">
        <p className="text-sm uppercase tracking-[0.4em] text-zinc-400">RepoOps</p>
        <h1 className="text-4xl font-semibold sm:text-5xl">
          Spin up a production-ready Next.js workspace in minutes.
        </h1>
        <p className="max-w-2xl text-lg text-zinc-400">
          This starter bundles the Next.js App Router, TypeScript, Tailwind CSS, and curated linting defaults so you
          can focus on delivering product value instead of configuration chores.
        </p>
        <div className="flex flex-wrap gap-3 text-sm text-zinc-400">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-3 py-1">
            <span className="size-2 rounded-full bg-emerald-500" aria-hidden />
            Vercel ready
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-3 py-1">
            <span className="size-2 rounded-full bg-sky-500" aria-hidden />
            Type-safe defaults
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-3 py-1">
            <span className="size-2 rounded-full bg-amber-500" aria-hidden />
            Tailwind styling
          </span>
        </div>
      </header>

      <section aria-labelledby="resources-heading" className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-3 flex flex-col gap-2">
          <h2 id="resources-heading" className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
            Core resources
          </h2>
          <p className="text-sm text-zinc-400">
            Dive into the docs referenced below to understand the platform primitives baked into this starter.
          </p>
        </div>
        {resources.map((resource) => (
          <Link
            key={resource.href}
            href={resource.href}
            className="group flex flex-col gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:border-zinc-500 hover:bg-zinc-900/80"
            rel="noreferrer noopener"
            target="_blank"
          >
            <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-white">{resource.title}</h3>
            <p className="text-sm text-zinc-400 group-hover:text-zinc-300">{resource.description}</p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 group-hover:text-emerald-300">
              View guide
              <span aria-hidden>→</span>
            </span>
          </Link>
        ))}
      </section>

      <section
        aria-labelledby="rollout-heading"
        className="grid gap-8 rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8 md:grid-cols-[1.2fr_1fr]"
      >
        <div className="flex flex-col gap-4">
          <h2 id="rollout-heading" className="text-2xl font-semibold text-zinc-100">
            Operational rollout checklist
          </h2>
          <p className="text-sm text-zinc-400">
            Follow this streamlined workflow to ship changes confidently through automated CI and Vercel previews.
          </p>
          <ol className="space-y-3 text-sm text-zinc-300">
            {rolloutChecklist.map((item, index) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex size-6 items-center justify-center rounded-full border border-emerald-400 text-xs font-semibold text-emerald-300">
                  {index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="flex flex-col gap-3 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6">
          <h3 className="text-lg font-semibold text-zinc-100">Recommended next steps</h3>
          <p className="text-sm text-zinc-400">
            Review <code className="rounded bg-zinc-900 px-2 py-1">README.md</code> for available npm scripts and deployment
            advice. Tailor the configuration and lint rules to match your team&apos;s conventions.
          </p>
          <Link
            href="https://github.com/stevenschling13/repoops-v4-vercel"
            className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-400"
            rel="noreferrer noopener"
            target="_blank"
          >
            View repository
          </Link>
        </div>
      </section>

      <footer className="flex flex-col gap-2 text-sm text-zinc-500">
        <p>
          Ready to deploy? Run <code className="rounded bg-zinc-900 px-2 py-1">npm run build</code> locally, then push to
          trigger Vercel preview builds.
        </p>
        <p>
          Need a local API or environment variables? Create <code className="rounded bg-zinc-900 px-2 py-1">.env.local</code>
          and restart the dev server to load the values securely.
        </p>
      </footer>
    </main>
  );
}
