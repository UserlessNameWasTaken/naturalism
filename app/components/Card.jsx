import { motion } from "motion/react";
import { Link } from "react-router";

function Card({ title, description, id, lifespan }) {
  return (
    <motion.div
      className="bg-zinc-800 p-6 rounded-xl shadow-lg"
      whileHover={{ scale: 1.05 }}
      key={title}
    >
      <Link to={"/authors/"+id}>
        <h2 className="text-xl font-bold text-white">{title} ({lifespan})</h2>
        <p className="text-zinc-400 mt-2 line-clamp-5">{description}</p>
      </Link>
      
    </motion.div>
  );
}

export default Card;
