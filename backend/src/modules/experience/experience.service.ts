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

  mapExperienceFromEntity(experience: Experience): ExperienceDTOWithId {
    return {
      organization: experience.organization,
      designation: experience.designation,
      startingDate: experience.starting_date,
      endingDate: experience.ending_date,
      workDescription: experience.work_description,
      experienceId: experience.experience_id,
    };
  }

  mapExperienceToEntity(
    experience: ExperienceDTO,
    entity = new Experience()
  ): Experience {
    entity.organization = experience.organization;
    entity.designation = experience.designation;
    entity.starting_date = experience.startingDate;
    entity.ending_date = experience.endingDate;
    entity.work_description = experience.workDescription;
    return entity;
  }

  async getAllExperiences(): Promise<ExperienceDTOWithId[]> {
    const experiences = await this.experienceRepo.find();
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
    const e = await this.experienceRepo.findOne({
      where: { experience_id: experience.experienceId },
    });

    if (e == null) {
      return null;
    }

    this.mapExperienceToEntity(experience, e);
    await this.experienceRepo.save(e);
    return this.mapExperienceFromEntity(e);
  }
}
