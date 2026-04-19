import { motion } from "motion/react";

function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Naturalism
      </motion.h1>

      <p className="text-zinc-400 text-lg">
        A literary movement focused on realism, determinism, and the influence
        of environment on human behavior.
      </p>
    </div>
  );
}

export default Home;