import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from './entity/customerEnti';

@Module({
    controllers:[CustomerController],
    providers:[CustomerService],
    imports:[TypeOrmModule.forFeature([CustomerEntity])],
    exports: [TypeOrmModule]
})
export class CustomerModule {}
