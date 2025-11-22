"use client";

import { useMemo, useState } from "react";

const moods = [
  { id: "warm", label: "Warm & Friendly" },
  { id: "playful", label: "Playful" },
  { id: "motivational", label: "Motivational" },
  { id: "professional", label: "Professional" },
];

const extras = [
  "✨ Stay curious and keep building amazing things.",
  "🌟 Every great app starts with a simple hello.",
  "🚀 Small greetings launch big collaborations.",
  "🎨 Creativity thrives when we connect.",
  "🎯 Take a breath, set your intention, and shine.",
];

const templates: Record<string, (name: string) => string> = {
  warm: (name) => `Hi ${name}! So glad you're here—let's make today brilliant.`,
  playful: (name) => `Hey hey ${name}! Ready to sprinkle some joy on this moment?`,
  motivational: (name) =>
    `Hi ${name}! You've got this—let's turn ambitions into reality together.`,
  professional: (name) =>
    `Hello ${name}. It's a pleasure to connect—here's to a productive day.`,
};

export function GreetingGenerator() {
  const [name, setName] = useState("friend");
  const [selectedMood, setSelectedMood] = useState(moods[0].id);
  const [highlightIndex, setHighlightIndex] = useState(0);

  const greeting = useMemo(() => {
    const cleanedName = name.trim() || "friend";
    const template = templates[selectedMood];
    return template(cleanedName.charAt(0).toUpperCase() + cleanedName.slice(1));
  }, [name, selectedMood]);

  const highlight = extras[highlightIndex];

  return (
    <section className="w-full rounded-3xl bg-white/70 p-10 shadow-xl ring-1 ring-zinc-200 backdrop-blur-md dark:bg-zinc-900/75 dark:ring-zinc-700">
      <header className="flex flex-col gap-2">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
          Whisper hello
        </p>
        <h2 className="text-4xl font-semibold text-zinc-900 dark:text-white sm:text-5xl">
          Craft the perfect greeting
        </h2>
      </header>

      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="space-y-5">
          <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-200">
            Who are we greeting?
            <input
              className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-lg text-zinc-800 shadow-sm transition focus:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-400/30 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:border-primary-300"
              placeholder="Type a name or nickname"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <div>
            <span className="block text-sm font-semibold text-zinc-700 dark:text-zinc-200">
              Choose a mood
            </span>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {moods.map((mood) => {
                const active = selectedMood === mood.id;
                return (
                  <button
                    key={mood.id}
                    type="button"
                    onClick={() => setSelectedMood(mood.id)}
                    className={`rounded-2xl border px-4 py-3 text-left text-base font-medium transition focus:outline-none focus:ring-4 ${
                      active
                        ? "border-transparent bg-gradient-to-r from-primary-500 to-purple-500 text-white shadow-lg focus:ring-primary-400/40"
                        : "border-zinc-200 bg-white text-zinc-700 hover:border-primary-200 hover:bg-primary-50 focus:ring-primary-300/30 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
                    }`}
                  >
                    {mood.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <aside className="flex flex-col justify-between rounded-2xl bg-gradient-to-br from-primary-500 via-purple-500 to-indigo-500 p-[1px]">
          <div className="h-full rounded-[1.1rem] bg-white/95 p-8 text-lg leading-relaxed text-zinc-800 shadow-inner dark:bg-zinc-950/90 dark:text-zinc-100">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-500 dark:text-primary-300">
              Greeting preview
            </p>
            <p className="mt-4 text-2xl font-semibold">{greeting}</p>
            <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-400">
              {highlight}
            </p>
          </div>
          <footer className="flex items-center justify-between px-6 py-4 text-sm text-white">
            <span>Need inspiration?</span>
            <button
              type="button"
              className="rounded-full border border-white/30 bg-white/10 px-3 py-1 font-medium backdrop-blur-md transition hover:bg-white/25"
              onClick={() =>
                setHighlightIndex((index) => (index + 1) % extras.length)
              }
            >
              Shuffle tip
            </button>
          </footer>
        </aside>
      </div>
    </section>
  );
}
