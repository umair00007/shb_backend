import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlatformsService } from './platforms.service';

@Controller('platforms')
export class PlatformsController {
  constructor(private readonly platformsService: PlatformsService) {}

  @Get()
  async getPlatforms() {
    return this.platformsService.getPlatforms();
  }

  @Post()
  async postplatform(@Body() body: any) {
    return this.platformsService.createPlatform(body);
  }
}
