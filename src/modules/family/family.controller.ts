import { Controller, Get } from '@nestjs/common';
import { FamilyService } from './family.service';

@Controller('family')
export class FamilyController {
  constructor(private readonly familyService: FamilyService) {}

  @Get()
  async getfamily() {
    return this.familyService.getfamily();
  }
}
