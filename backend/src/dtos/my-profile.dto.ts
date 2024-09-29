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
