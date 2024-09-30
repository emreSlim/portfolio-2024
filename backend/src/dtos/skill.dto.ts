import { ApiProperty } from '@nestjs/swagger';
import {
  ExperienceInMonth,
  Proficiency,
  ProficiencyLevel,
  SkillDescription,
  SkillName,
} from 'src/entities';

export class SkillDTO {
  @ApiProperty()
  name: SkillName;

  @ApiProperty()
  description: SkillDescription;

  @ApiProperty()
  proficiency: Proficiency;

  @ApiProperty()
  experienceInMonth: ExperienceInMonth;

  @ApiProperty()
  proficiencyLevel: ProficiencyLevel;
}

export class SkillDTOWithId extends SkillDTO {
  @ApiProperty()
  skillId: number;
}
