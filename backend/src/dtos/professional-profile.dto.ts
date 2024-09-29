import { ApiProperty } from '@nestjs/swagger';
import { PlatformName, URL } from 'src/entities';

export class ProfessionalProfileDTO {
  @ApiProperty()
  platformName: PlatformName;
  @ApiProperty()
  url: URL;
}