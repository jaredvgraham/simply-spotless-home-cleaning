"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function FadeIn({
  children,
  className = "",
  delay = 0,
}: CommonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className = "" }: Omit<CommonProps, "delay">) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: Omit<CommonProps, "delay">) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type MotionAnchorProps = {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
};

export function MotionAnchor({
  children,
  className,
  href,
  target,
  rel,
}: MotionAnchorProps) {
  return (
    <motion.a
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ y: 0, scale: 0.99 }}
      transition={{ type: "spring", stiffness: 360, damping: 22 }}
      className={className}
      href={href}
      target={target}
      rel={rel}
    >
      {children}
    </motion.a>
  );
}
