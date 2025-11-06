"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type AnimatedBoxProps = {
  /** Optional title shown above the animated card */
  title?: string;
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const boxVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.94 },
  rest: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.6 },
  },
  floating: {
    opacity: 1,
    y: [0, -12, 0],
    rotate: [0, 5, -5, 0],
    transition: { duration: 3, repeat: Infinity },
  },
  hover: {
    scale: 1.08,
    rotate: 0,
    transition: { duration: 0.3 },
  },
};

const detailVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45 },
  },
  exit: {
    opacity: 0,
    x: 40,
    transition: { duration: 0.3 },
  },
};

const AnimatedBox = ({
  title = "Framer Motion in Next.js",
}: AnimatedBoxProps) => {
  const [isFloating, setIsFloating] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      animate="visible"
      className="flex w-full max-w-xl flex-col items-center gap-6 rounded-3xl border border-zinc-200 bg-white p-10 text-center shadow-xl shadow-zinc-500/10 transition-colors dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50"
    >
      <p className="text-sm uppercase tracking-[0.4em] text-zinc-500 dark:text-zinc-400">
        {title}
      </p>
      <motion.div
        variants={boxVariants}
        initial="hidden"
        animate={isFloating ? "floating" : "rest"}
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
        className="flex aspect-square w-full max-w-xs items-center justify-center rounded-2xl bg-linear-to-br from-pink-500 via-purple-500 to-indigo-500 text-5xl font-semibold text-white shadow-lg"
      >
        <motion.span
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          ✨
        </motion.span>
      </motion.div>
      <p className="max-w-md text-base leading-7 text-zinc-600 dark:text-zinc-300">
        This demo component uses <code>framer-motion</code> for layout, hover,
        and exit animations. Toggle the controls to see how variants and
        <code>AnimatePresence</code> work together.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <motion.button
          type="button"
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsFloating((prev) => !prev)}
          className="rounded-full border border-zinc-900/10 px-5 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-100/15 dark:text-zinc-50 dark:hover:bg-zinc-800"
        >
          {isFloating ? "Pause" : "Resume"} floating
        </motion.button>
        <motion.button
          type="button"
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowDetails((prev) => !prev)}
          className="rounded-full border border-zinc-900/10 px-5 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-100/15 dark:text-zinc-50 dark:hover:bg-zinc-800"
        >
          {showDetails ? "Hide" : "Show"} detail panel
        </motion.button>
      </div>
      <AnimatePresence mode="wait">
        {showDetails && (
          <motion.div
            key="detail"
            variants={detailVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full rounded-2xl border border-zinc-200/70 bg-zinc-50 p-6 text-left text-sm leading-6 text-zinc-600 shadow-inner dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-200"
          >
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
              Variant walkthrough
            </h3>
            <p>
              The gradient card uses variants for its entry, hover, and looping
              states. This panel enters and exits with{" "}
              <code>AnimatePresence</code>
              to highlight how conditional rendering ties into motion.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AnimatedBox;
