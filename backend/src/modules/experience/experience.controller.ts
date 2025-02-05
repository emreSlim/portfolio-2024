import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { ExperienceDTO, ExperienceDTOWithId } from 'src/dtos';
import { ApiBody, ApiResponse } from '@nestjs/swagger';

@Controller('experience')
export class ExperienceController {
  constructor(private readonly service: ExperienceService) {}

  @Get()
  @ApiResponse({ type: ExperienceDTOWithId })
  getExperiences(): Promise<ExperienceDTOWithId[]> {
    return this.service.getAllExperiences();
  }

  @Post()
  @ApiBody({ type: [ExperienceDTO] })
  @ApiResponse({ type: [ExperienceDTOWithId] })
  addExperience(
    @Body() experience: ExperienceDTO[]
  ): Promise<ExperienceDTOWithId[]> {
    return this.service.addExperience(experience);
  }

  @Put()
  @ApiBody({ type: ExperienceDTOWithId })
  @ApiResponse({ type: ExperienceDTOWithId })
  updateExperience(
    @Body() experience: ExperienceDTOWithId
  ): Promise<ExperienceDTOWithId> {
    return this.service.updateExperience(experience);
  }
}
