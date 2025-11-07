"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

type FadeUpAnimationProps = {
  children: ReactNode;
  delay?: number;
};

export default function FadeUpAnimation({
  children,
  delay = 0,
}: FadeUpAnimationProps) {
  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
