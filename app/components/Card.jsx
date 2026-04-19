import { motion } from "motion/react";

function Card({ title, description }) {
  return (
    <motion.div
      className="bg-zinc-800 p-6 rounded-xl shadow-lg"
      whileHover={{ scale: 1.05 }}
    >
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <p className="text-zinc-400 mt-2">{description}</p>
    </motion.div>
  );
}

export default Card;
