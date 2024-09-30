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

  mapSkillFromEntity(skill: Skill): SkillDTOWithId {
    return {
      name: skill.name,
      description: skill.description,
      experienceInMonth: skill.experience_in_month,
      proficiency: skill.proficiency,
      proficiencyLevel: skill.proficiency_level,
      skillId: skill.skill_id,
    };
  }

  mapSkillToEntity(skill: SkillDTO, entity = new Skill()): Skill {
    entity.name = skill.name;
    entity.description = skill.description;
    entity.experience_in_month = skill.experienceInMonth;
    entity.proficiency = skill.proficiency;
    entity.proficiency_level = skill.proficiencyLevel;
    return entity;
  }

  async getAllSkills(): Promise<SkillDTOWithId[]> {
    const skills = await this.skillRepo.find();
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
