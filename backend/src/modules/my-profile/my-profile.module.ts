import { Module } from '@nestjs/common';
import { MyProfileController } from './my-profile.controller';
import { MyProfileService } from './my-profile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location, ProfessionalProfile } from 'src/entities/';

@Module({
  imports: [TypeOrmModule.forFeature([Location, ProfessionalProfile])],
  controllers: [MyProfileController],
  providers: [MyProfileService],
})
export class MyProfileModule {}
