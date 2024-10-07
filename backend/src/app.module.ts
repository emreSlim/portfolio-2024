import { Module } from '@nestjs/common';

import { MyProfileModule } from './modules/my-profile/my-profile.module';
import { ContactRequestModule } from './modules/contact-request/contact-request.module';
import { ContactPersonModule } from './modules/contact-person/contact-person.module';
import { Postgre } from './postgre.module';
import {
  Experience,
  Location,
  MyProfile,
  ProfessionalProfile,
  Project,
  Skill,
} from './entities';
import { SkillModule } from './modules/skill/skill.module';
import { ProjectModule } from './modules/project/project.module';
import { ExperienceModule } from './modules/experience/experience.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    Postgre.getModule([
      MyProfile,
      Location,
      ProfessionalProfile,
      Experience,
      Skill,
      Project,
    ]),
    MyProfileModule,
    ContactRequestModule,
    ContactPersonModule,
    SkillModule,
    ProjectModule,
    ExperienceModule,
  ],
})
export class AppModule {}
