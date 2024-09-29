import { ApiProperty } from '@nestjs/swagger';
import { City, Country, LocationType, State } from 'src/entities';

export class LocationDTO {
  @ApiProperty()
  city: City;
  @ApiProperty()
  state: State;
  @ApiProperty()
  country: Country;
  @ApiProperty()
  locationType: LocationType;
}
