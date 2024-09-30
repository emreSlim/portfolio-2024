import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import {
  About,
  Email,
  FirstName,
  Introduction,
  LastName,
  NickName,
  Phone,
} from 'src/entities';
import { LocationDTO, LocationDTOWithId } from './location.dto';
import {
  ProfessionalProfileDTO,
  ProfessionalProfileDTOWithId,
} from './professional-profile.dto';

export class MyProfileDTO {
  @IsNotEmpty()
  @ApiProperty()
  firstName: FirstName;
  @ApiProperty()
  lastName: LastName;
  @ApiProperty()
  nickName: NickName;
  @ApiProperty()
  email: Email;
  @ApiProperty()
  phone: Phone;
  @ApiProperty()
  introduction: Introduction;
  @ApiProperty()
  about: About;
}

export class MyProfileFullDTO extends MyProfileDTO {
  @ApiProperty({ type: [LocationDTO] })
  locations: LocationDTO[];
  @ApiProperty({ type: [ProfessionalProfileDTO] })
  professionalProfiles: ProfessionalProfileDTO[];
}

export class MyProfileDTOWithId extends MyProfileDTO {
  @ApiProperty()
  myProfileId: number;
}

export class MyProfileFullDTOWithId extends MyProfileDTOWithId {
  @ApiProperty({ type: [LocationDTOWithId] })
  locations: LocationDTOWithId[];
  @ApiProperty({ type: [ProfessionalProfileDTOWithId] })
  professionalProfiles: ProfessionalProfileDTOWithId[];
}
