import { ApiProperty } from '@nestjs/swagger';

export class ProfessionalProfileDTO {
  @ApiProperty()
  platformName: string;
  @ApiProperty()
  url: string;
}
