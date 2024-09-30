import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export namespace GetMyProfile {
  export class Query {
    @ApiProperty()
    @IsNumber()
    profileId: number;
  }
}
