import Link from "next/link";
import { GreetingGenerator } from "@/components/GreetingGenerator";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100 text-zinc-900 dark:from-zinc-950 dark:via-zinc-950 dark:to-primary-950 dark:text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 [mask-image:radial-gradient(circle_at_center,white,transparent_65%)]">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary-300 blur-3xl dark:bg-primary-700" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-400 blur-3xl dark:bg-purple-700" />
        <div className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-indigo-300 blur-3xl dark:bg-indigo-700" />
      </div>

      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-16 px-6 pb-24 pt-24 sm:px-10 lg:pb-28 lg:pt-32">
        <header className="flex flex-col gap-8">
          <span className="w-fit rounded-full border border-primary-200 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-primary-500 backdrop-blur-md dark:border-primary-700 dark:bg-zinc-900/80 dark:text-primary-300">
            A friendly hello
          </span>
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl font-semibold leading-tight sm:text-6xl">
              Hi there! Let’s craft a greeting that feels like sunshine.
            </h1>
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
              Every connection begins with a simple hello. This playful little
              studio helps you tailor the perfect greeting—whether you want to
              energize a team, spark a smile, or share warm appreciation.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-sm text-zinc-600 sm:flex-row sm:items-center dark:text-zinc-400">
            <p className="font-medium">
              Built with Next.js, Tailwind CSS, and a dash of delight.
            </p>
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.35em]">
              <span>Responsive</span>
              <span>Accessible</span>
              <span>Ready to deploy</span>
            </div>
          </div>
        </header>

        <GreetingGenerator />

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Share human warmth",
              copy: "Turn a quick message into a thoughtful note that brightens someone’s day.",
            },
            {
              title: "Spark joyful energy",
              copy: "Choose a mood and send a greeting that motivates, celebrates, or entertains.",
            },
            {
              title: "Keep it approachable",
              copy: "Simple controls make it easy to experiment until the tone feels just right.",
            },
          ].map((feature) => (
            <article
              key={feature.title}
              className="group rounded-3xl border border-transparent bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl dark:bg-zinc-900/70 dark:hover:border-primary-700"
            >
              <h3 className="text-xl font-semibold text-zinc-900 transition group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-300">
                {feature.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
                {feature.copy}
              </p>
            </article>
          ))}
        </section>

        <section className="rounded-3xl border border-primary-200/50 bg-white/70 p-10 text-center shadow-lg backdrop-blur-md dark:border-primary-600/40 dark:bg-zinc-900/80">
          <h2 className="text-3xl font-semibold text-zinc-900 dark:text-white sm:text-4xl">
            Keep the kindness ripple going.
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
            Sign your greeting, drop it in a chat, or turn it into a note. When
            we share gratitude, momentum follows.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
            <Link
              href="https://nextjs.org"
              className="rounded-full bg-gradient-to-r from-primary-500 to-purple-500 px-6 py-3 text-white shadow-lg transition hover:from-primary-400 hover:to-purple-400 focus:outline-none focus:ring-4 focus:ring-primary-400/40"
            >
              Explore Next.js
            </Link>
            <Link
              href="https://vercel.com"
              className="rounded-full border border-primary-200 px-6 py-3 text-primary-600 transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300/30 dark:border-primary-700 dark:text-primary-300 dark:hover:border-primary-600 dark:hover:bg-primary-950/50"
            >
              Deploy on Vercel
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
