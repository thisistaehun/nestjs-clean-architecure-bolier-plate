import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './infrastructure/exceptions/exceptions.filter';
import { LoggingInterceptor } from './infrastructure/interceptors/logging.interceptor';
import { ResponseInterceptor } from './infrastructure/interceptors/response.interceptor';
import { LoggerService } from './infrastructure/logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const serverPort = configService.getOrThrow<string>('SERVER_PORT');
  app.useGlobalFilters(new AllExceptionFilter(new LoggerService()));
  app.useGlobalInterceptors(new LoggingInterceptor(new LoggerService()));
  app.useGlobalInterceptors(new ResponseInterceptor());

  await app.listen(3000);
  Logger.log(`Server Application running on ${serverPort} 🚀`);
}
bootstrap();
