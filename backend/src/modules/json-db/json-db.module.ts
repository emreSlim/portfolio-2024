import { Module } from '@nestjs/common';
import { JsonDB } from './json-db';
import { Repository } from './repository';
import { Entity } from './entity';
import { Column } from './column';

@Module({
  providers: [JsonDB, Repository, Entity, Column],
  exports: [Repository, Entity, Column],
})
export class JsonDBModule {}
