import { TypeOrmModule } from '@nestjs/typeorm';

export class Postgre {
  static getModule(entities: any[]) {
    return TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'portfolio',
      entities,
      logging: ['error', 'query'],
      retryAttempts: 3,
    });
  }
}
