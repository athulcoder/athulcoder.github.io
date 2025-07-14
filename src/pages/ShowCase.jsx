import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../routes/projects";
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
      <div className="grid grid-cols-1 mx-12 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 lg:mx-32">
        {projects.map((project, index) => (
          <div
            key={index}
            className="h-[500px]   bg-primary-color rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-lg  p-4 min-h-[300px] object-cover transition-all rounded-lg "
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-3 text-primary-text">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4 text-secondary-text">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-white px-4 py-2 rounded-full hover:bg-accent-hover flex items-center space-x-2"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
                {project.previewLink && (
                  <a
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent text-white px-4 py-2 rounded-full hover:bg-accent-hover flex items-center space-x-2"
                  >
                    <FaExternalLinkAlt />
                    <span>Preview</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Showcase;
