import { Module } from '@nestjs/common';
import { MyProfileController } from './my-profile.controller';
import { MyProfileService } from './my-profile.service';

@Module({
  controllers: [MyProfileController],
  providers: [MyProfileService],
})
export class MyProfileModule {}
