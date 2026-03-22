import { motion, type Variants } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import type { Project } from "../data/projects";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      className="project-card"
      variants={cardVariants}
      whileHover={{ y: -8 }}
    >
      <div className="image-wrapper">
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className="hover-overlay">
          <div className="links-row">
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="project-info">
        <div className="info-header">
          <h3>{project.title}</h3>
          <div className="tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <p>{project.description}</p>
      </div>
    </motion.div>
  );
};
