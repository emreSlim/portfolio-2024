import { ApiProperty } from '@nestjs/swagger';
import { ProfessionalProfileDTO } from './professional-profile.dto';
import { LocationDTO } from './location.dto';

export class MyProfileDTO {
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  nickName: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  introduction: string;
  @ApiProperty()
  about: string;
  @ApiProperty({ type: [ProfessionalProfileDTO] })
  professionalProfiles: ProfessionalProfileDTO[];
  @ApiProperty({ type: [LocationDTO] })
  locations: LocationDTO[];
}
