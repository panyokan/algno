"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import algo_logo from "../public/images/algonix-logo.png";

export default function AnimatedLogo() {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={algo_logo}
          alt="Algonix Technologies Logo"
          width={120}
          height={120}
          className="w-auto h-auto"
          priority
        />
      </motion.div>
      <motion.div
        className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{
          duration: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
    </div>
  );
}
