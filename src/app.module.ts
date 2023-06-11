import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
import { TypeOrmConfigModule } from './infrastructure/config/typeorm/typeorm.module';
import { ExceptionsModule } from './infrastructure/exceptions/exceptions.module';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { RepositoriesModule } from './infrastructure/repositories/repositories.module';

@Module({
  imports: [
    EnvironmentConfigModule,
    TypeOrmConfigModule,
    LoggerModule,
    ExceptionsModule,
    RepositoriesModule,
  ],
})
export class AppModule {}
