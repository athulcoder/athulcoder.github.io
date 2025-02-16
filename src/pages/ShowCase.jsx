import projects from "../routes/projects";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
const Showcase = () => {
  return (
    <section className="py-16 bg-background text-white">
      <div className="container mx-auto text-center mb-12">
        <h1 className="font-montserrat text-3xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 text-transparent bg-clip-text mb-3 py-3">
          My Projects
        </h1>
        <p className="text-lg text-secondary-text p-2">
          Discover a collection of my projects, where innovation,
          problem-solving, and passion drive every creation!
        </p>
      </div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ spring: 1, duration: 0.3 }}
        className="grid grid-cols-1 mx-12 sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-10 lg:mx-32"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            projectImg={project.image}
            projectTitle={project.title}
            projectDesc={project.description}
            projectGitLink={project.githubLink}
            projectPreviewLink={project.previewLink}
          ></ProjectCard>
        ))}
      </motion.div>
    </section>
  );
};

export default Showcase;
