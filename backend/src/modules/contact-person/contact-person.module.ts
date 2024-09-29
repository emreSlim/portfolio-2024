import { Module } from '@nestjs/common';
import { ContactPersonController } from './contact-person.controller';

@Module({
  controllers: [ContactPersonController],
})
export class ContactPersonModule {}
