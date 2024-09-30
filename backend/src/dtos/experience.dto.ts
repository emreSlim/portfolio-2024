import { ApiProperty } from '@nestjs/swagger';
import {
  Designation,
  EndingDate,
  Organization,
  StartingDate,
  WorkDescription,
} from 'src/entities';

export class ExperienceDTO {
  @ApiProperty()
  organization: Organization;

  @ApiProperty()
  designation: Designation;

  @ApiProperty()
  startingDate: StartingDate;

  @ApiProperty()
  endingDate: EndingDate;

  @ApiProperty()
  workDescription: WorkDescription;
}

export class ExperienceDTOWithId extends ExperienceDTO {
  @ApiProperty()
  experienceId: number;
}
