import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({
  projectPreviewLink,
  projectTitle,
  projectDesc,
  projectGitLink,
  projectImg,
}) => {
  return (
    <div className="h-[500px]   bg-primary-color rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all">
      <img
        src={projectImg}
        alt={projectTitle}
        className="w-full rounded-lg  p-4 min-h-[300px] object-cover transition-all "
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-3 text-primary-text">
          {projectTitle}
        </h3>
        <p className="text-sm text-gray-400 mb-4 text-secondary-text">
          {projectDesc}
        </p>
        <div className="flex justify-between items-center">
          <a
            href={projectGitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-white px-4 py-2 rounded-full hover:bg-accent-hover flex items-center space-x-2"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
          {projectPreviewLink && (
            <a
              href={projectPreviewLink}
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
