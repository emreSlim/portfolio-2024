import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectDTO, ProjectDTOWithId } from 'src/dtos';
import { ApiBody, ApiResponse } from '@nestjs/swagger';

@Controller('project')
export class ProjectController {
  constructor(private readonly service: ProjectService) {}

  @Get()
  @ApiResponse({ type: ProjectDTOWithId })
  getProjects(): Promise<ProjectDTOWithId[]> {
    return this.service.getAllProjects();
  }

  @Post()
  @ApiBody({ type: [ProjectDTO] })
  @ApiResponse({ type: [ProjectDTOWithId] })
  addProject(@Body() project: ProjectDTO[]): Promise<ProjectDTOWithId[]> {
    return this.service.addProject(project);
  }

  @Put()
  @ApiBody({ type: ProjectDTOWithId })
  @ApiResponse({ type: ProjectDTOWithId })
  updateProject(@Body() project: ProjectDTOWithId): Promise<ProjectDTOWithId> {
    return this.service.updateProject(project);
  }
}
