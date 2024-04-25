import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerEntity } from './entity/customerEnti';
import { Repository } from 'typeorm';
import { CustomerDto } from './entity/customerDto';

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(CustomerEntity)
        private customerRepository : Repository<CustomerEntity>
    ){}

    getAllCustomer() :Promise<CustomerEntity[]>{
     return   this.customerRepository.find()
    }

    createAccount(customerDto: CustomerDto){
        const newCustomer = this.customerRepository.create(customerDto)
        return this.customerRepository.save(newCustomer)
    }

    removeCustomer(id:number){
        return this.customerRepository.delete({id})
    }
    getOneCustomer(id:number): Promise<CustomerEntity|null>{
        return this.customerRepository.findOneBy({id})
    }
}
