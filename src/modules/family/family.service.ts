import { Inject, Injectable } from '@nestjs/common';
import { ModelsService } from 'src/common/models/models.service';

@Injectable()
export class FamilyService {
  constructor(
    @Inject('MODELS') private readonly models,
    private readonly modelsService: ModelsService,
  ) {}

  async getfamily() {
    const fam = this.modelsService.getDataService(
      this.models.prjModels.family,
      {},
    );
    return fam;
  }
}
