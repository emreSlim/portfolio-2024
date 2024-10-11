import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import { Project } from 'src/interfaces';
import ReactPlayer from 'react-player/file';
import { Service } from 'src/services';
import { Loader } from 'src/components';
import { IoIosCloseCircleOutline } from 'react-icons/io';
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
      <p className="projects-disclaimer">
        All the below projects are built by me either for learning or as a
        hobby. This list does not include any of my professional work.
      </p>
      <p className="projects-disclaimer">
        Click on the project to view more details.
      </p>
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
      <button
        className="project-item-card"
        onClick={() => setIsProjectDetailsOpen(true)}
      >
        <img
          src={project.thumbnailUrl}
          alt={project.name}
          className="project-thumbnail"
        />
        <p className="project-name">{project.name}</p>
      </button>
      {isProjectDetailsOpen && (
        <ProjectDetails
          project={project}
          onClose={() => setIsProjectDetailsOpen(false)}
        />
      )}
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
    setTimeout(() => {
      setIsOpen(true);
      setIsPlaying(true);
    }, 100);
    return () => {
      setIsOpen(false);
    };
  }, []);

  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setTimeout(() => {
          onClose();
        }, 300);
      }
    };

    window.addEventListener('keydown', closeOnEscape);

    return () => {
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [onClose]);

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
          <h2 className="project-details-title">{project.name}</h2>
          <button
            onClick={() => {
              setIsPlaying(false);
              setIsOpen(false);
              setTimeout(() => {
                onClose();
              }, 300);
            }}
          >
            <IoIosCloseCircleOutline className="project-details-header-close" />
          </button>
        </div>
        <div className="project-details-content">
          <div className="project-details-media">
            {ReactPlayer.canPlay(project.mediaUrl) ? (
              <ReactPlayer
                ref={playerRef}
                url={project.mediaUrl}
                playing={isPlaying}
                controls
                width="100%"
                height="100%"
                volume={0.3}
                onEnded={() => setIsPlaying(false)}
              />
            ) : (
              <img
                src={project.thumbnailUrl}
                alt={project.name}
                width="100%"
                height="100%"
                className="project-details-image"
              />
            )}
          </div>
          <div className="project-details-description">
            <h3 className="project-details-description-heading">
              Project Description
            </h3>
            <p className="project-details-description-text">
              {project.description}
            </p>
            <div className="project-details-links">
              {project.url && (
                <a href={project.url} target="_blank" rel="noreferrer">
                  VIEW PROJECT
                </a>
              )}
              {project.sourceCodeUrl && (
                <a
                  href={project.sourceCodeUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  VIEW SOURCE CODE
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
