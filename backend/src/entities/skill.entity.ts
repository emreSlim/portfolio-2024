import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export type SkillName = string & { readonly brand: unique symbol };
export type SkillDescription = string & { readonly brand: unique symbol };
export type Proficiency = number & { readonly brand: unique symbol };
export type ExperienceInMonth = number & { readonly brand: unique symbol };
export type ProficiencyLevel = string & { readonly brand: unique symbol };

@Entity({
  name: 'skill',
})
export class Skill {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  skill_id?: number;

  @Column({ type: 'varchar', length: 100 })
  name: SkillName;

  @Column({ type: 'varchar', length: 1000 })
  description: SkillDescription;

  @Column({ type: 'int' })
  proficiency: Proficiency;

  @Column({ type: 'int' })
  experience_in_month: ExperienceInMonth;

  @Column({ type: 'varchar', length: 50 })
  proficiency_level: ProficiencyLevel;
}
