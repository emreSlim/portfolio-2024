import { Body, Controller, Get, Post } from '@nestjs/common';
import { MyProfileService } from './my-profile.service';
import { MyProfileDTO } from 'src/dtos';

@Controller('my-profile')
export class MyProfileController {
  constructor(private readonly service: MyProfileService) {}
  @Get()
  getMyProfile() {
    return this.service.getMyProfile();
  }
  @Post()
  postMyProfile(@Body() body: MyProfileDTO) {
    return this.service.addMyProfile(body);
  }
}
