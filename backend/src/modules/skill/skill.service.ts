import { Injectable } from '@nestjs/common';
import { SkillDTO, SkillDTOWithId } from 'src/dtos';
import { Skill, skillEntity } from 'src/entities';

@Injectable()
export class SkillService {
  private readonly skillRepo = skillEntity.repository;

  constructor() {}

  mapSkillFromEntity(entity: Skill): SkillDTOWithId {
    return {
      name: entity.name,
      description: entity.description,
      experienceInMonth: entity.experience_in_month,
      proficiency: entity.proficiency,
      proficiencyLevel: entity.proficiency_level,
      skillId: entity.skill_id,
    };
  }

  mapSkillToEntity(dto: SkillDTO, entity = {} as Skill): Skill {
    entity.name = dto.name;
    entity.description = dto.description;
    entity.experience_in_month = dto.experienceInMonth;
    entity.proficiency = dto.proficiency;
    entity.proficiency_level = dto.proficiencyLevel;
    return entity;
  }

  async getAllSkills(): Promise<SkillDTOWithId[]> {
    const skills = await this.skillRepo.find({
      orderBy: [
        {
          column: 'proficiency',
          asc: false,
        },
        {
          column: 'experience_in_month',
          asc: false,
        },
      ],
    });
    return skills.map((s) => this.mapSkillFromEntity(s));
  }

  async addSkill(skills: SkillDTO[]): Promise<SkillDTOWithId[]> {
    const mapped = skills.map((skill) => this.mapSkillToEntity(skill));
    await this.skillRepo.save(mapped);
    return mapped.map((skill) => this.mapSkillFromEntity(skill));
  }

  async updateSkill(skill: SkillDTOWithId): Promise<SkillDTOWithId> {
    const s = await this.skillRepo.findOne({
      skill_id: skill.skillId,
    });

    if (!s) {
      throw new Error('Skill not found');
    }

    this.mapSkillToEntity(skill, s);

    await this.skillRepo.update(
      {
        skill_id: s.skill_id,
      },
      s
    );

    return this.mapSkillFromEntity(s);
  }
}
