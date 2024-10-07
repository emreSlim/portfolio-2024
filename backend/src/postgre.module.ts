import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

export class Postgre {
  static getModule(entities: any[]) {
    const configService = new ConfigService();
    return TypeOrmModule.forRoot({
      type: 'postgres',
      host: configService.get('DB_HOST'),
      port: +configService.get('DB_PORT'),
      username: configService.get('DB_USER'),
      password: configService.get('DB_PASSWORD'),
      database: configService.get('DB_NAME'),
      entities,
      logging: ['error', 'query'],
      retryAttempts: 3,
    });
  }
}
