import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Experience } from 'src/entities';
import { Repository } from 'typeorm';
import { ExperienceDTO, ExperienceDTOWithId } from 'src/dtos';

@Injectable()
export class ExperienceService {
  constructor(
    @InjectRepository(Experience)
    private readonly experienceRepo: Repository<Experience>
  ) {}

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
    entity = new Experience()
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

  async addExperience(experience: ExperienceDTO): Promise<ExperienceDTOWithId> {
    const e = this.mapExperienceToEntity(experience);
    await this.experienceRepo.save(e);
    return this.mapExperienceFromEntity(e);
  }

  async updateExperience(
    experience: ExperienceDTOWithId
  ): Promise<ExperienceDTOWithId> {
    const e = await this.experienceRepo.findOneBy({
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
