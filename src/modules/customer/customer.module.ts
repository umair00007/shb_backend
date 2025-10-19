import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { ModelsService } from 'src/common/models/models.service';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService, ModelsService],
})
export class CustomerModule {}
