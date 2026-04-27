import { motion } from "motion/react";
import { Link } from "react-router";


function About() {
  return (
    <section className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-4xl md:text-5xl font-bold">About This Website</h1>
      <p className="text-zinc-300 text-lg leading-8">
        Naturalism is a literary movement that studies people as products of
        heredity, environment, and social pressure. Writers in this tradition
        focus on ordinary life, difficult conditions, and forces that shape
        human behavior.
      </p>
      <p className="text-zinc-400 leading-8">
        This site introduces the core ideas of naturalist writing and gives you
        a place to expand with authors, works, and historical context. For a start on the basics of naturalism, check out the Start page!
      </p>
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
    </section>
  );
}

export default About;
