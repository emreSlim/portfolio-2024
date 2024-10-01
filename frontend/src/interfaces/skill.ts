export type SkillName = string & { readonly brand: unique symbol };
export type SkillDescription = string & { readonly brand: unique symbol };
export type Proficiency = number & { readonly brand: unique symbol };
export type ExperienceInMonth = number & { readonly brand: unique symbol };
export type ProficiencyLevel = string & { readonly brand: unique symbol };

export interface Skill {
  skillId: number;
  name: SkillName;
  description: SkillDescription;
  proficiency: Proficiency;
  experienceInMonth: ExperienceInMonth;
  proficiencyLevel: ProficiencyLevel;
}
