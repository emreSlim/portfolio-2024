import { ApiProperty } from '@nestjs/swagger';

export class LocationDTO {
  @ApiProperty()
  city: string;
  @ApiProperty()
  state: string;
  @ApiProperty()
  country: string;
  @ApiProperty()
  locationType: 'current' | 'permanent';
}
