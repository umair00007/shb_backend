import { Inject, Injectable } from '@nestjs/common';
import { ModelsService } from 'src/common/models/models.service';

@Injectable()
export class PlatformsService {
  constructor(
    @Inject('MODELS') private readonly models,
    private readonly modelsService: ModelsService,
  ) {}

  async getPlatforms() {
    const umair = this.modelsService.getAllDataService(
      this.models.prjModels.Platforms,
      {},
    );
    return umair;
  }

  async createPlatform(body: any) {
    console.log(body);
    const { name, short_name, is_active } = body;
    console.log(name, short_name, is_active);
    const [platforms, created] =
      await this.models.prjModels.Platforms.findOrCreate({
        where: { name },
        defaults: { short_name, is_active },
      });
    console.log(platforms, created);
    const message = created ? 'created' : 'already exists';
    return message;
  }
}
