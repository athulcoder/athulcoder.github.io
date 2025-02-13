import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = () => {
  return (
    <div className="h-[500px]   bg-primary-color rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all">
      <img
        src={project.image}
        alt={project.title}
        className="w-full rounded-lg  p-4 min-h-[300px] object-cover transition-all "
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
  );
};

export default ProjectCard;
