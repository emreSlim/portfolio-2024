import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { downloadDbJson, uploadDbJson } from './sync-file';
import { JsonDB } from 'json-relational-db';

async function bootstrap() {
  JsonDB.configure({
    downloadDbJson: downloadDbJson,
    uploadDbJson: uploadDbJson,
  });

  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
  });

  const config = new DocumentBuilder()
    .setTitle('Profolio APIs')
    .setDescription('APIs for portfolio')
    .setVersion('1.0')
    .addTag('profolio')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3001);
}
bootstrap();
