import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Experience,
  Location,
  MyProfile,
  ProfessionalProfile,
  Project,
  Skill,
} from '../../entities';

const entities = [
  MyProfile,
  Location,
  ProfessionalProfile,
  Experience,
  Skill,
  Project,
];

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities,
      logging: ['error', 'query'],
      retryAttempts: 3,
    }),
  ],
})
export class DatabaseModule {}
