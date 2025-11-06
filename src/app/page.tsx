import AnimatedBox from "@/components/AnimatedBox";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-zinc-50 px-6 py-24 font-sans text-zinc-900 transition-colors dark:bg-black dark:text-zinc-50">
      <main className="flex w-full max-w-4xl flex-col items-center gap-16 text-center sm:items-start sm:text-left">
        <div className="flex flex-col gap-6">
          <span className="text-sm uppercase tracking-[0.4em] text-zinc-500 dark:text-zinc-400">
            Motion Playground
          </span>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Animate UI effortlessly with Framer Motion and Next.js
          </h1>
          <p className="max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
            This page renders a single client component called{" "}
            <code>AnimatedBox</code>. Use it as a starting point to explore
            variants, gestures, and timeline controls in a modern Next.js app
            using TypeScript.
          </p>
        </div>
        <AnimatedBox />
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Try editing <code>src/components/AnimatedBox.tsx</code> to customise
          the motion logic.
        </p>
      </main>
    </div>
  );
}
