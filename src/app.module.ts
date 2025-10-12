import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModelsModule } from './common/models/ModelsModule';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ModelsModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
