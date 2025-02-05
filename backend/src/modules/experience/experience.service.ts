import { Injectable } from '@nestjs/common';
import { Experience, experienceEntity } from 'src/entities';
import { ExperienceDTO, ExperienceDTOWithId } from 'src/dtos';

@Injectable()
export class ExperienceService {
  private readonly experienceRepo = experienceEntity.repository;

  constructor() {}

  mapExperienceFromEntity(entity: Experience): ExperienceDTOWithId {
    return {
      organization: entity.organization,
      designation: entity.designation,
      startingDate: entity.starting_date,
      endingDate: entity.ending_date,
      workDescription: entity.work_description,
      experienceId: entity.experience_id,
    };
  }

  mapExperienceToEntity(
    dto: ExperienceDTO,
    entity = {} as Experience
  ): Experience {
    entity.organization = dto.organization;
    entity.designation = dto.designation;
    entity.starting_date = dto.startingDate;
    entity.ending_date = dto.endingDate;
    entity.work_description = dto.workDescription;
    return entity;
  }

  async getAllExperiences(): Promise<ExperienceDTOWithId[]> {
    const experiences = await this.experienceRepo.find({
      order: { starting_date: 'DESC' },
    });
    return experiences.map((e) => this.mapExperienceFromEntity(e));
  }

  async addExperience(
    experiences: ExperienceDTO[]
  ): Promise<ExperienceDTOWithId[]> {
    const mapped = experiences.map((experience) =>
      this.mapExperienceToEntity(experience)
    );
    await this.experienceRepo.save(mapped);
    return mapped.map((experience) => this.mapExperienceFromEntity(experience));
  }

  async updateExperience(
    experience: ExperienceDTOWithId
  ): Promise<ExperienceDTOWithId> {
    const e = await this.experienceRepo.findOne({
      experience_id: experience.experienceId,
    });

    if (e == null) {
      return null;
    }
    this.mapExperienceToEntity(experience, e);
    await this.experienceRepo.save(e);
    return this.mapExperienceFromEntity(e);
  }
}
