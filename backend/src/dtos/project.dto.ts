import { ApiProperty } from '@nestjs/swagger';
import {
  ProjectDescription,
  ProjectMediaUrl,
  ProjectName,
  ProjectSourceCodeUrl,
  ProjectThumbnailUrl,
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

  @ApiProperty()
  thumbnailUrl: ProjectThumbnailUrl;
}

export class ProjectDTOWithId extends ProjectDTO {
  @ApiProperty()
  projectId: number;
}
