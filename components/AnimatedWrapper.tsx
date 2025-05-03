'use client';

import { motion } from 'framer-motion';

export default function AnimatedWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}
