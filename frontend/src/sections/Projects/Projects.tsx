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
  return (
    <div className="project-item-card">
      <img
        src={project.thumbnailUrl}
        alt={project.name}
        className="project-thumbnail"
      />
      <p className="project-name">{project.name}</p>
    </div>
  );
};
