import { Inject, Injectable } from '@nestjs/common';
import { ModelsService } from 'src/common/models/models.service';

@Injectable()
export class CustomerService {
  constructor(
    @Inject('MODELS') private readonly models,
    private readonly modelsService: ModelsService,
  ) {}

  async postCustomer() {
    const faiz = this.modelsService.getAllDataService(
      this.models.prjModels.customer,
      {},
    );
    return faiz;
  }
}
