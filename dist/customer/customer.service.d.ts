import { CustomerEntity } from './entity/customerEnti';
import { Repository } from 'typeorm';
import { CustomerDto } from './entity/customerDto';
export declare class CustomerService {
    private customerRepository;
    constructor(customerRepository: Repository<CustomerEntity>);
    getAllCustomer(): Promise<CustomerEntity[]>;
    createAccount(customerDto: CustomerDto): Promise<CustomerEntity>;
    removeCustomer(id: number): Promise<import("typeorm").DeleteResult>;
    getOneCustomer(id: number): Promise<CustomerEntity | null>;
}
