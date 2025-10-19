import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModelsModule } from './common/models/ModelsModule';
import { ConfigModule } from '@nestjs/config';
import { PlatformsModule } from './modules/platforms/platforms.module';
import { FamilyModule } from './modules/family/family.module';
import { CustomerModule } from './modules/customer/customer.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ModelsModule, PlatformsModule, FamilyModule, CustomerModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
