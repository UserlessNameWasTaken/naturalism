import { motion } from "motion/react";
import { NavigationType } from "react-router";
import { Link, Links } from "react-router";

function Home() {
  return (
    <div className="max-w-5xl mx-auto text-center">
      <motion.h1
        className="text-8xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, animationDuration: 2}}
        transition={{ type: "spring" }}
        
      >
        Naturalism
      </motion.h1>

      <p className="text-zinc-400 text-lg">
        A literary movement focused on realism, determinism, and the influence
        of environment on human behavior.
      </p>

      <nav className="flex justify-around mt-4 align-bottom">

        <Link to="/about">
          <motion.button 
          type="button" 
          className="button_style"
          transition={{ type: "tween" }}
          whileHover={{ scale: 1.1, backgroundColor: "#d4d4d8", color: "#09090b" }}
          whileTap={{ scale: .9, backgroundColor: "#d4d4d8", color: "#09090b" }} 
          >
            About
          </motion.button>
        </Link>

        

        <Link to="/start">
          <motion.button 
          type="button" 
          className="button_style"
          transition={{ type: "tween" }}
          whileHover={{ scale: 1.1, backgroundColor: "#d4d4d8", color: "#09090b" }}
          whileTap={{ scale: .9, backgroundColor: "#d4d4d8", color: "#09090b" }} 
          >
            A Starting Point
          </motion.button>
        </Link>
        
        <Link to="/authors">
          <motion.button 
          type="button" 
          className="button_style"
          transition={{ type: "tween" }}
          whileHover={{ scale: 1.1, backgroundColor: "#d4d4d8", color: "#09090b" }}
          whileTap={{ scale: .9, backgroundColor: "#d4d4d8", color: "#09090b" }} 
        >
            The Archive
          </motion.button>
        </Link>
        
      </nav>

    </div>

  );
}

export default Home;