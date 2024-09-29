import { Module } from '@nestjs/common';

import { MyProfileModule } from './modules/my-profile/my-profile.module';
import { ContactRequestModule } from './modules/contact-request/contact-request.module';
import { ContactPersonModule } from './modules/contact-person/contact-person.module';
import { Postgre } from './postgre.module';
import { Location, MyProfile, ProfessionalProfile } from './entities';

@Module({
  imports: [
    Postgre.getModule([MyProfile, Location, ProfessionalProfile]),
    MyProfileModule,
    ContactRequestModule,
    ContactPersonModule,
  ],
})
export class AppModule {}
