import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
import { MyProfileService } from './my-profile.service';
import { GetMyProfile, PostMyProfile, ResProfile } from './my-profile.dto';
import { ApiBody, ApiResponse } from '@nestjs/swagger';

@Controller('my-profile')
export class MyProfileController {
  constructor(private readonly service: MyProfileService) {}
  @ApiResponse({ type: ResProfile })
  @Get()
  getMyProfile(@Query() query: GetMyProfile.Query): Promise<ResProfile> {
    return this.service.getMyProfile(query);
  }

  @Post()
  @ApiBody({ type: PostMyProfile.ReqBody })
  @ApiResponse({ type: ResProfile })
  postMyProfile(@Body() body: PostMyProfile.ReqBody): Promise<ResProfile> {
    return this.service.addMyProfile(body);
  }

  @Put()
  @ApiBody({ type: ResProfile })
  @ApiResponse({ type: ResProfile })
  putMyProfile(@Body() body: ResProfile): Promise<ResProfile> {
    return this.service.updateMyProfile(body);
  }
}
