import { motion } from "framer-motion";
import { ProjectCard } from "./components/ProjectCard";
import { myProjects } from "./data/projects";
import "./App.css";

const App = () => {
  return (
    <div className="portfolio-wrapper">
      <motion.header
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <nav className="minimal-nav">
          <span className="logo">RAÚL MACÍAS</span>
          <a
            href="https://github.com/raulmaciasdev"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
          </a>
        </nav>

        <div className="hero-content">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Fullstack Developer & <br />
            Creative Engineer.
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Especializado en interfaces limpias y código eficiente.
          </motion.p>
        </div>
      </motion.header>

      <main className="main-content">
        <motion.div
          className="projects-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          {myProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} — Diseñado con enfoque minimalista</p>
      </footer>
    </div>
  );
};

export default App;
