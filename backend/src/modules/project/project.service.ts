import { Injectable } from '@nestjs/common';
import { ProjectDTO, ProjectDTOWithId } from 'src/dtos';
import { Project, projectEntity } from 'src/entities';
import { Repository } from '../json-db';

@Injectable()
export class ProjectService {
  private readonly projectRepo = new Repository(projectEntity);

  constructor() {}

  mapProjectFromEntity(entity: Project): ProjectDTOWithId {
    return {
      name: entity.name,
      description: entity.description,
      url: entity.url,
      mediaUrl: entity.media_url,
      projectId: entity.project_id,
      sourceCodeUrl: entity.source_code_url,
      thumbnailUrl: entity.thumbnail_url,
    };
  }

  mapProjectToEntity(dto: ProjectDTO, entity = {} as Project): Project {
    entity.name = dto.name;
    entity.description = dto.description;
    entity.url = dto.url;
    entity.media_url = dto.mediaUrl;
    entity.source_code_url = dto.sourceCodeUrl;
    entity.thumbnail_url = dto.thumbnailUrl;
    return entity;
  }

  async getAllProjects(): Promise<ProjectDTOWithId[]> {
    const projects = await this.projectRepo.find({});
    return projects.map((p) => this.mapProjectFromEntity(p));
  }

  async addProject(project: ProjectDTO): Promise<ProjectDTOWithId> {
    const p = this.mapProjectToEntity(project);
    await this.projectRepo.save(p);
    return this.mapProjectFromEntity(p);
  }

  async updateProject(project: ProjectDTOWithId): Promise<ProjectDTOWithId> {
    const p = await this.projectRepo.findOne({
      project_id: project.projectId,
    });

    if (p == null) {
      return null;
    }

    this.mapProjectToEntity(project, p);
    await this.projectRepo.save(p);
    return this.mapProjectFromEntity(p);
  }
}
