import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
import { MyProfileService } from './my-profile.service';
import { GetMyProfile } from './my-profile.dto';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { MyProfileFullDTO, MyProfileFullDTOWithId } from 'src/dtos';

@Controller('my-profile')
export class MyProfileController {
  constructor(private readonly service: MyProfileService) {}

  @Get()
  @ApiResponse({ type: MyProfileFullDTOWithId })
  getMyProfile(
    @Query() query: GetMyProfile.Query
  ): Promise<MyProfileFullDTOWithId> {
    return this.service.getMyProfile(query);
  }

  @Post()
  @ApiBody({ type: MyProfileFullDTO })
  @ApiResponse({ type: MyProfileFullDTOWithId })
  postMyProfile(
    @Body() body: MyProfileFullDTO
  ): Promise<MyProfileFullDTOWithId> {
    return this.service.addMyProfile(body);
  }

  @Put()
  @ApiBody({ type: MyProfileFullDTOWithId })
  @ApiResponse({ type: MyProfileFullDTOWithId })
  putMyProfile(
    @Body() body: MyProfileFullDTOWithId
  ): Promise<MyProfileFullDTOWithId> {
    return this.service.updateMyProfile(body);
  }
}
