import { ApiProperty } from '@nestjs/swagger';
import {
  ProjectDescription,
  ProjectMediaUrl,
  ProjectName,
  ProjectSourceCodeUrl,
  ProjectUrl,
} from 'src/entities';

export class ProjectDTO {
  @ApiProperty()
  name: ProjectName;

  @ApiProperty()
  description: ProjectDescription;

  @ApiProperty()
  url: ProjectUrl;

  @ApiProperty()
  mediaUrl: ProjectMediaUrl;

  @ApiProperty()
  sourceCodeUrl: ProjectSourceCodeUrl;
}

export class ProjectDTOWithId extends ProjectDTO {
  @ApiProperty()
  projectId: number;
}
