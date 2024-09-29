import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { LocationDTO, MyProfileDTO, ProfessionalProfileDTO } from 'src/dtos';

class Location extends LocationDTO {
  @ApiProperty()
  locationId: number;
}

class ProfessionalProfile extends ProfessionalProfileDTO {
  @ApiProperty()
  professionalProfileId: number;
}

export class ResProfile extends MyProfileDTO {
  @ApiProperty()
  myProfileId: number;
  @ApiProperty({ type: [Location] })
  locations: Location[];
  @ApiProperty({ type: [ProfessionalProfile] })
  professionalProfiles: ProfessionalProfile[];
}

export namespace PostMyProfile {
  export class ReqBody extends MyProfileDTO {
    @ApiProperty({ type: [ProfessionalProfileDTO] })
    professionalProfiles: ProfessionalProfileDTO[];
    @ApiProperty({ type: [LocationDTO] })
    locations: LocationDTO[];
  }
}

export namespace GetMyProfile {
  export class Query {
    @ApiProperty()
    @IsNumber()
    profileId: number;
  }
}
