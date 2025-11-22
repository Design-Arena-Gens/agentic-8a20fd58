## Hello Studio

Hello Studio is a playful, single-page greeting builder crafted with Next.js 16 (App Router) and Tailwind CSS. It empowers you to tailor warm, motivational, or professional hellos in seconds—perfect for sparking conversations, sending gratitude, or kicking off team stand-ups.

### ✨ Features

- Interactive greeting generator with name and mood controls
- Real-time preview with rotating inspiration prompts
- Responsive layout with layered gradients and glassmorphism details
- Built-in accessibility considerations and keyboard-friendly controls
- Ready for Vercel deployment out of the box

### 🛠 Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/) via `@tailwindcss/postcss`
- TypeScript-first implementation with ESLint

### 🚀 Local Development

Install dependencies (already installed in this environment):

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### 📦 Production Build

To create an optimized build and ensure the app deploys cleanly:

```bash
npm run lint
npm run build
```

### 🧾 Scripts Overview

- `npm run dev` – Launches the local dev server with Turbopack
- `npm run build` – Generates the production build
- `npm run start` – Serves the production build
- `npm run lint` – Runs ESLint with the Next.js config

### 📁 Key Files

- `src/app/page.tsx` – Main page layout
- `src/components/GreetingGenerator.tsx` – Interactive greeting controls
- `src/app/globals.css` – Tailwind theme tokens and global styles

### 📄 License

MIT © 2024 Hello Studio
