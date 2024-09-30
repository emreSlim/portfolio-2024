import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectDTO, ProjectDTOWithId } from 'src/dtos';
import { Project } from 'src/entities';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepo: Repository<Project>
  ) {}

  mapProjectFromEntity(project: Project): ProjectDTOWithId {
    return {
      name: project.name,
      description: project.description,
      url: project.url,
      mediaUrl: project.media_url,
      projectId: project.project_id,
      sourceCodeUrl: project.source_code_url,
    };
  }

  mapProjectToEntity(project: ProjectDTO, entity = new Project()): Project {
    entity.name = project.name;
    entity.description = project.description;
    entity.url = project.url;
    entity.media_url = project.mediaUrl;
    entity.source_code_url = project.sourceCodeUrl;
    return entity;
  }

  async getAllProjects(): Promise<ProjectDTOWithId[]> {
    const projects = await this.projectRepo.find();
    return projects.map((p) => this.mapProjectFromEntity(p));
  }

  async addProject(project: ProjectDTO): Promise<ProjectDTOWithId> {
    const p = this.mapProjectToEntity(project);
    await this.projectRepo.save(p);
    return this.mapProjectFromEntity(p);
  }

  async updateProject(project: ProjectDTOWithId): Promise<ProjectDTOWithId> {
    const p = await this.projectRepo.findOne({
      where: { project_id: project.projectId },
    });

    if (p == null) {
      return null;
    }

    this.mapProjectToEntity(project, p);
    await this.projectRepo.save(p);
    return this.mapProjectFromEntity(p);
  }
}
