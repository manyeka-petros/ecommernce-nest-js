import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService)
  const allowedOrigins = configService.get<string>('CORS_ALLOWED_ORIGINS')
  app.enableCors({
    origin: allowedOrigins ? allowedOrigins.split(',') : [],
  })
  await app.listen(3001);
}
bootstrap();
