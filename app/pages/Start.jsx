import { motion } from "motion/react";

const authors = [

];

export default function Start() {

    return (
        <motion.section className="p-8 max-w-4xl justify-center m-auto ">
            <motion.h1 
            className="title text-center">
            Naturalism: Basics
            </motion.h1>
            <p
            className="paragraph text-center mb-8">
                Naturalism is the act of incorporating scientific objectivity into fiction and how it portrays human life. Often illustrating characters driven by primal desires or instincts, naturalism focuses on what people can't control. Beyond this, there are many different elements of naturalism that different authors take different focuses on. For example, Kate Chopin, an American novelist, takes gender roles and the environment that shapes one's identity and turned it into a novel, <span className=" italic ">The Awakening</span>. 
            </p>
            <motion.h2 className="header text-center">
            Quick History
            </motion.h2>
            <p></p>
            <motion.h2>
            Naturalism's Intent
            </motion.h2>
            <p></p>
            <motion.h2>
            Popular Choices
            </motion.h2>
            <p></p>
            
        </motion.section>
    );
};