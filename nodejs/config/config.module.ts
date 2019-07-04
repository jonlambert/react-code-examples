import { ConfigService } from './config.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  providers: [{
    provide: ConfigService,
    useValue: new ConfigService(`${process.env.NODE_ENV}.env`),
  }],
  controllers: [],
  exports: [ConfigService],
})
export class ConfigModule {}
