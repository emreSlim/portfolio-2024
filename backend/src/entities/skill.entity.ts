import { Entity, Column, ColumnType } from 'src/modules/json-db/';

export type SkillName = string & { readonly brand: unique symbol };
export type SkillDescription = string & { readonly brand: unique symbol };
export type Proficiency = number & { readonly brand: unique symbol };
export type ExperienceInMonth = number & { readonly brand: unique symbol };
export type ProficiencyLevel = string & { readonly brand: unique symbol };

export interface Skill {
  skill_id: number;
  name: SkillName;
  description: SkillDescription;
  proficiency: Proficiency;
  experience_in_month: ExperienceInMonth;
  proficiency_level: ProficiencyLevel;
}

export const skillEntity = new Entity<Skill>('skill', [
  new Column('skill_id', ColumnType.SERIAL),
  new Column('name', ColumnType.STRING),
  new Column('description', ColumnType.STRING),
  new Column('proficiency', ColumnType.NUMBER),
  new Column('experience_in_month', ColumnType.NUMBER),
  new Column('proficiency_level', ColumnType.STRING),
]);
