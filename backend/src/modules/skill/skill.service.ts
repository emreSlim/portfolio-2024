import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SkillDTO, SkillDTOWithId } from 'src/dtos';
import { Skill } from 'src/entities';
import { Repository } from 'typeorm';

@Injectable()
export class SkillService {
  constructor(
    @InjectRepository(Skill)
    private readonly skillRepo: Repository<Skill>
  ) {}

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

  mapSkillToEntity(dto: SkillDTO, entity = new Skill()): Skill {
    entity.name = dto.name;
    entity.description = dto.description;
    entity.experience_in_month = dto.experienceInMonth;
    entity.proficiency = dto.proficiency;
    entity.proficiency_level = dto.proficiencyLevel;
    return entity;
  }

  async getAllSkills(): Promise<SkillDTOWithId[]> {
    const skills = await this.skillRepo.find({
      order: { proficiency: 'DESC' },
    });
    return skills.map((s) => this.mapSkillFromEntity(s));
  }

  async addSkill(skill: SkillDTO): Promise<SkillDTOWithId> {
    const s = this.mapSkillToEntity(skill);
    await this.skillRepo.save(s);
    return this.mapSkillFromEntity(s);
  }

  async updateSkill(skill: SkillDTOWithId): Promise<SkillDTOWithId> {
    const s = await this.skillRepo.findOneBy({ skill_id: skill.skillId });

    if (s == null) {
      return null;
    }

    this.mapSkillToEntity(skill, s);
    await this.skillRepo.save(s);
    return this.mapSkillFromEntity(s);
  }
}
