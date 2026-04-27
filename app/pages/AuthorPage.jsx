import { useParams } from "react-router-dom";
import { authors } from "../data/authors";
import { motion } from "motion/react";
import { Link } from "react-router";

function AuthorPage() {
  const { id } = useParams();

  const author = authors.find((a) => a.id === id);
  const desc = author.work_descriptions
  const links = author.work_links

  if (!author) {
    return <div>Author not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto">
      <Link to="/authors">
        <motion.button 
            className="button_style"
            transition={{ type: "tween" }}
            whileHover={{ scale: 1.1, backgroundColor: "#d4d4d8", color: "#09090b" }}
            whileTap={{ scale: .9, backgroundColor: "#d4d4d8", color: "#09090b" }} >
              Back
          </motion.button>
      </Link>
        
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-4">{author.name}</h1>
        <p className="text-zinc-400 mb-6">{author.description}</p>
        <h2 className="text-2xl font-semibold mb-2">Works</h2>
        <ul className="list-disc pl-6 text-zinc-300">
          {author.works.map((work, index) => (
            <li key={index}>

              <motion.a
                transition={{ type: "tween" }}
                whileHover={{ scale: 1.1, textDecorationLine: "underline", }}
                className="font-bold"
                href={links[work]}>
                  {work}
              </motion.a>:   
                
               {" "+desc[work]}

            </li>
          ))}
        </ul>
    </div>
    </div>
      
    
  )
}

export default AuthorPage;