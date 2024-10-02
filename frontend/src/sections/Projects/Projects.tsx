import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import { Project } from 'src/interfaces';
import ReactPlayer from 'react-player/file';
import { Service } from 'src/services';
import { Loader } from 'src/components';
// import screenfull from "screenfull";

export const Projects = () => {
  const [projects, setProjects] = useState<Project[]>();

  React.useEffect(() => {
    Service.getProjects().then((response) => {
      setProjects(response.data);
    });
  }, []);

  return (
    <section id="projects" className="projects-container">
      <h3 className="projects-heading">Projects</h3>
      <div className="projects">
        {projects == null ? (
          <Loader />
        ) : (
          projects.map((project) => (
            <ProjectItem key={project.projectId} project={project} />
          ))
        )}
      </div>
    </section>
  );
};

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const [isProjectDetailsOpen, setIsProjectDetailsOpen] = useState(false);

  return (
    <div>
      {isProjectDetailsOpen && (
        <ProjectDetails
          project={project}
          onClose={() => setIsProjectDetailsOpen(false)}
        />
      )}

      <div
        className="project-item-card"
        onClick={() => setIsProjectDetailsOpen(true)}
      >
        <img
          src={project.thumbnailUrl}
          alt={project.name}
          className="project-thumbnail"
        />
        <p className="project-name">{project.name}</p>
      </div>
    </div>
  );
};

//popover
interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  project,
  onClose,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<ReactPlayer>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      playerRef.current?.seekTo(0);
    }
  }, [isPlaying]);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div
      className={`project-details-anchor ${
        isOpen ? '' : 'project-details-anchor-closed'
      }
    `}
    >
      <div
        className={`project-details ${isOpen ? '' : 'project-details-closed'}`}
      >
        <div className="project-details-header">
          <h3 className="project-details-header-title">{project.name}</h3>
          <button
            className="project-details-header-close"
            onClick={() => {
              // setIsPlaying(false);
              setIsOpen(false);
              setTimeout(() => {
                onClose();
              }, 300);
            }}
          >
            Close
          </button>
        </div>
        <ReactPlayer
          ref={playerRef}
          url={project.mediaUrl}
          playing={isPlaying}
          controls
          width="600px"
          height="400px"
          onEnded={() => setIsPlaying(false)}
        />
        <p>{project.description}</p>
        <a href={project.url} target="_blank" rel="noreferrer">
          {project.url}
        </a>
        <a href={project.sourceCodeUrl} target="_blank" rel="noreferrer">
          {project.sourceCodeUrl}
        </a>
      </div>
    </div>
  );
};
